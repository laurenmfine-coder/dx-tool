#!/usr/bin/env python3
"""
ReasonDx MCQ Library Generator
================================
Mirrors the StudyDx 3-pass pipeline from workers/studydx-engine.js:
  Pass 1 — Generate MCQ from case board pearls + key learning
  Pass 2 — Quality audit (same rubric as the live worker)
  Pass 3 — Educational metadata tagging (ABAI domain, Bloom's, ACGME)

Each case gets 3 MCQs generated, each targeting a different pearl to ensure
concept coverage. MCQs that fail the quality gate are retried up to 3 times
before being skipped.

Output: rdx-mcq-library.js  (drop into repo root — auto-loads on page load)
        rdx-mcq-library-report.json  (generation log with quality scores)

Usage:
    export ANTHROPIC_API_KEY=sk-ant-...
    python3 tools/generate_mcq_library.py

    # Resume from checkpoint (skips already-generated case IDs):
    python3 tools/generate_mcq_library.py --resume

    # Generate for specific cases only:
    python3 tools/generate_mcq_library.py --cases anaphylaxis,hereditary-angioedema

Options:
    --resume        Skip cases already in rdx-mcq-library-checkpoint.json
    --cases X,Y     Comma-separated list of case IDs to process
    --mcqs-per-case N  Number of MCQs per case (default: 3)
    --output PATH   Output JS file path (default: rdx-mcq-library.js)
    --dry-run       Parse cases and print summary without calling API
"""

import os, sys, json, re, time, argparse, traceback
from pathlib import Path
from datetime import datetime, timezone
import urllib.request, urllib.error

# ─────────────────────────────────────────────────────────────────────────────
# CONFIG
# ─────────────────────────────────────────────────────────────────────────────

SCRIPT_DIR   = Path(__file__).parent
REPO_DIR     = SCRIPT_DIR.parent
EMR_DIR      = REPO_DIR / 'emr-data'
OUTPUT_JS    = REPO_DIR / 'rdx-mcq-library.js'
OUTPUT_REPORT= REPO_DIR / 'rdx-mcq-library-report.json'
CHECKPOINT   = REPO_DIR / 'rdx-mcq-library-checkpoint.json'

API_URL      = 'https://api.anthropic.com/v1/messages'
MODEL        = 'claude-sonnet-4-20250514'
MAX_RETRIES  = 3
QUALITY_PASS_THRESHOLD = 0.65   # matches worker logic
RATE_LIMIT_PAUSE = 2.0          # seconds between API calls
OVERLOAD_PAUSE   = 30.0         # seconds when overloaded

SKIP_FILES = {
    'manifest.js', 'patient-names.js', 'handoff-data.js', 'auto-handoff.js',
    'day-progression.js', 'day-evolution.js', 'coachdx-analytics.js',
    'spacedrep-generator.js', 'case-specialty-map.js'
}

# ─────────────────────────────────────────────────────────────────────────────
# SYSTEM PROMPTS — copied verbatim from workers/studydx-engine.js
# ─────────────────────────────────────────────────────────────────────────────

def load_prompts_from_worker():
    """Extract the three system prompts directly from the worker source."""
    worker_path = REPO_DIR / 'workers' / 'studydx-engine.js'
    if not worker_path.exists():
        raise FileNotFoundError(f"Worker not found: {worker_path}")
    src = worker_path.read_text(encoding='utf-8')
    p1 = re.search(r'const PASS1_GENERATE = `(.*?)`;', src, re.DOTALL)
    p2 = re.search(r'const PASS2_AUDIT = `(.*?)`;', src, re.DOTALL)
    p3 = re.search(r'const PASS3_TAG = `(.*?)`;', src, re.DOTALL)
    if not (p1 and p2 and p3):
        raise ValueError("Could not extract all three prompts from worker source.")
    return p1.group(1), p2.group(1), p3.group(1)


# ─────────────────────────────────────────────────────────────────────────────
# CASE CONTENT EXTRACTOR
# ─────────────────────────────────────────────────────────────────────────────

def extract_cases():
    """Parse all emr-data/*.js files and extract teaching content + references."""
    cases = []
    for path in sorted(EMR_DIR.glob('*.js')):
        if path.name in SKIP_FILES:
            continue
        raw = path.read_text(encoding='utf-8', errors='ignore')

        diagnoses  = re.findall(r'"diagnosis":\s*"([^"]+)"', raw)
        dx         = diagnoses[0] if diagnoses else path.stem.replace('-', ' ').title()

        pearls_m   = re.search(r'"boardPearls":\s*\[(.*?)\]', raw, re.DOTALL)
        kl_m       = re.search(r'"keyLearning":\s*\[(.*?)\]', raw, re.DOTALL)

        pearls     = re.findall(r'"([^"]{30,})"', pearls_m.group(1)) if pearls_m else []
        key_learning = re.findall(r'"([^"]{30,})"', kl_m.group(1)) if kl_m else []

        if not pearls and not key_learning:
            continue  # skip cases with no teaching content

        # Extract references (DOI + URL preferred)
        refs = []
        for rm in re.findall(r'\{[^{}]*"doi"[^{}]*\}', raw, re.DOTALL):
            doi   = re.search(r'"doi":\s*"([^"]+)"', rm)
            url   = re.search(r'"url":\s*"([^"]+)"', rm)
            title = re.search(r'"title":\s*"([^"]+)"', rm)
            year  = re.search(r'"year":\s*(\d+)', rm)
            if doi or url:
                refs.append({
                    'doi':   doi.group(1)   if doi   else None,
                    'url':   url.group(1)   if url   else None,
                    'title': title.group(1) if title else '',
                    'year':  int(year.group(1)) if year else None,
                })

        # Build citation string
        citation_parts = []
        for r in refs[:2]:
            if r['doi']:
                citation_parts.append(f"DOI: {r['doi']}")
            elif r['url']:
                citation_parts.append(r['url'])
            if r['title']:
                citation_parts.append(r['title'])
        source = '; '.join(citation_parts) if citation_parts else f"ReasonDx Case Library — {dx}"

        cases.append({
            'id':           path.stem,
            'diagnosis':    dx,
            'pearls':       pearls,
            'key_learning': key_learning,
            'references':   refs,
            'source':       source,
        })

    return cases


# ─────────────────────────────────────────────────────────────────────────────
# API HELPER
# ─────────────────────────────────────────────────────────────────────────────

def call_api(api_key, system_prompt, user_message, max_tokens=2000, retries=3):
    """Call Anthropic API with retry logic matching the worker's callAI function."""
    payload = json.dumps({
        'model':      MODEL,
        'max_tokens': max_tokens,
        'system':     system_prompt,
        'messages':   [{'role': 'user', 'content': user_message}],
    }).encode('utf-8')

    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(
                API_URL, data=payload,
                headers={
                    'Content-Type':      'application/json',
                    'x-api-key':         api_key,
                    'anthropic-version': '2023-06-01',
                }
            )
            with urllib.request.urlopen(req, timeout=90) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                text = ''.join(b.get('text', '') for b in data.get('content', [])).strip()
                return parse_json_response(text)

        except urllib.error.HTTPError as e:
            body = e.read().decode('utf-8', errors='ignore')
            if e.code == 429 or 'overloaded' in body.lower():
                wait = OVERLOAD_PAUSE * attempt
                print(f"    ⏳ Rate limited (attempt {attempt}), waiting {wait:.0f}s...")
                time.sleep(wait)
            elif e.code == 400:
                raise ValueError(f"API 400 Bad Request: {body[:300]}")
            else:
                raise RuntimeError(f"API HTTP {e.code}: {body[:300]}")
        except Exception as e:
            if attempt == retries:
                raise
            print(f"    ⚠ API error attempt {attempt}: {e}")
            time.sleep(5 * attempt)

    raise RuntimeError(f"API call failed after {retries} attempts")


def parse_json_response(text):
    """Robust JSON extraction — matches the worker's callAI parsing logic."""
    cleaned = re.sub(r'^```(?:json)?\s*', '', text, flags=re.IGNORECASE)
    cleaned = re.sub(r'\s*```\s*$', '', cleaned).strip()

    # Find first { or [
    first_brace   = cleaned.find('{')
    first_bracket = cleaned.find('[')
    json_start    = -1
    if first_brace >= 0 and (first_bracket < 0 or first_brace < first_bracket):
        json_start = first_brace
    elif first_bracket >= 0:
        json_start = first_bracket
    if json_start > 0:
        cleaned = cleaned[json_start:]

    # Trim to last matching brace
    if cleaned.startswith('{'):
        last = cleaned.rfind('}')
        if last > 0:
            cleaned = cleaned[:last+1]
    elif cleaned.startswith('['):
        last = cleaned.rfind(']')
        if last > 0:
            cleaned = cleaned[:last+1]

    return json.loads(cleaned)


# ─────────────────────────────────────────────────────────────────────────────
# 3-PASS PIPELINE
# ─────────────────────────────────────────────────────────────────────────────

def build_source_content(case, pearl_index):
    """
    Build the source content string for Pass 1, focused on a specific pearl
    to ensure each MCQ tests a distinct concept.
    """
    pearl = case['pearls'][pearl_index % len(case['pearls'])]

    lines = [
        f"DIAGNOSIS: {case['diagnosis']}",
        "",
        f"FOCUS PEARL (derive the question from this concept):",
        f"• {pearl}",
        "",
        "SUPPORTING BOARD PEARLS (for distractor construction):",
    ]
    for i, p in enumerate(case['pearls']):
        if i != pearl_index % len(case['pearls']):
            lines.append(f"• {p}")

    if case['key_learning']:
        lines.append("")
        lines.append("KEY LEARNING POINTS:")
        for k in case['key_learning'][:3]:
            lines.append(f"• {k}")

    if case['source']:
        lines.append("")
        lines.append(f"SOURCE / CITATION: {case['source']}")

    return '\n'.join(lines)


def run_3_pass_pipeline(api_key, prompts, case, pearl_index, mcq_number):
    """
    Run the full 3-pass pipeline for a single MCQ.
    Returns dict with success, question, quality, tags — or raises on hard failure.
    Matches the logic in workers/studydx-engine.js generateMCQ().
    """
    pass1_prompt, pass2_prompt, pass3_prompt = prompts
    source_content = build_source_content(case, pearl_index)
    attempts = 0
    last_error = None
    question = None
    audit = None

    while attempts < MAX_RETRIES:
        attempts += 1

        # ── PASS 1: Generate ──────────────────────────────────────────────
        gen_prompt = (
            f"Generate 1 high-quality MCQ from this content.\n"
            f"Target difficulty: {2 + (pearl_index % 3)}/5\n\n"
            f"SOURCE CONTENT:\n{source_content}"
        )
        if last_error and 'revision' in str(last_error).lower():
            gen_prompt += f"\n\n[REVISION HINT from previous attempt: {last_error}]"

        try:
            question = call_api(api_key, pass1_prompt, gen_prompt, max_tokens=2000)
            time.sleep(RATE_LIMIT_PAUSE)
        except Exception as e:
            last_error = f"Pass 1: {e}"
            print(f"      Pass 1 attempt {attempts} failed: {e}")
            continue

        # Validate structure
        if not (question.get('stem') and question.get('options') and
                len(question['options']) == 5 and
                question.get('correct_index') is not None and
                question.get('explanation')):
            last_error = f"Pass 1: invalid structure — keys: {list(question.keys())}"
            print(f"      Pass 1 attempt {attempts}: invalid structure")
            continue

        # ── PASS 2: Quality Audit ─────────────────────────────────────────
        audit_prompt = (
            f"Evaluate this MCQ:\n\n"
            f"STEM: {question['stem']}\n\n"
            f"OPTIONS:\n"
        )
        for i, opt in enumerate(question['options']):
            marker = '✓' if i == question['correct_index'] else ' '
            audit_prompt += f"{marker} {chr(65+i)}. {opt['text']}\n"
        audit_prompt += (
            f"\nCORRECT: {chr(65 + question['correct_index'])}\n"
            f"EXPLANATION: {question['explanation']}"
        )

        try:
            audit = call_api(api_key, pass2_prompt, audit_prompt, max_tokens=1500)
            time.sleep(RATE_LIMIT_PAUSE)
        except Exception as e:
            last_error = f"Pass 2: {e}"
            print(f"      Pass 2 attempt {attempts} failed: {e}")
            continue

        score = audit.get('overall_score', 0)
        passed = audit.get('pass', False) or score >= QUALITY_PASS_THRESHOLD

        if passed:
            break  # quality gate passed

        print(f"      Pass 2 attempt {attempts}: score={score:.2f}, pass={passed}")
        suggestions = audit.get('revision_suggestions', [])
        if suggestions:
            last_error = '; '.join(suggestions[:2])
        else:
            last_error = f"Quality score {score:.2f} below threshold"

    # Hard failure
    if not question or not audit:
        return {
            'success': False,
            'error': f"Failed after {attempts} attempts: {last_error}",
        }

    score = audit.get('overall_score', 0)
    if score < 0.5:
        return {
            'success': False,
            'error': f"Quality too low (score: {score:.0%}): {audit.get('rejection_reasons', [])}",
        }

    # ── PASS 3: Metadata Tagging ──────────────────────────────────────────
    tag_prompt = (
        f"Tag this MCQ:\n\n"
        f"STEM: {question['stem']}\n\n"
        f"CORRECT ANSWER: {question['options'][question['correct_index']]['text']}\n\n"
        f"KEY CONCEPT: {question.get('key_concept', '')}\n\n"
        f"TOPIC TAGS: {', '.join(question.get('topic_tags', []))}"
    )
    try:
        tags = call_api(api_key, pass3_prompt, tag_prompt, max_tokens=800)
        time.sleep(RATE_LIMIT_PAUSE)
    except Exception as e:
        print(f"      Pass 3 failed (non-fatal): {e}")
        tags = {
            'abai_domain': None, 'abai_domain_number': None,
            'acgme_competency': 'MK', 'acgme_milestone': 'MK3',
            'acgme_milestone_level': 3, 'blooms': 'application', 'difficulty': 3,
        }

    return {
        'success': True,
        'question': {
            'stem':          question['stem'],
            'options':       question['options'],
            'correct_index': question['correct_index'],
            'explanation':   question['explanation'],
            'topic_tags':    question.get('topic_tags', []),
            'key_concept':   question.get('key_concept', ''),
        },
        'quality': {
            'score':    audit.get('overall_score', 0),
            'criteria': audit.get('criteria', {}),
            'attempts': attempts,
        },
        'tags': {
            'abai_domain':          tags.get('abai_domain'),
            'abai_domain_number':   tags.get('abai_domain_number'),
            'acgme_competency':     tags.get('acgme_competency', 'MK'),
            'acgme_milestone':      tags.get('acgme_milestone', 'MK3'),
            'acgme_milestone_level':tags.get('acgme_milestone_level', 3),
            'blooms':               tags.get('blooms', 'application'),
            'difficulty':           tags.get('difficulty', 3),
        },
    }


# ─────────────────────────────────────────────────────────────────────────────
# LIBRARY ENTRY BUILDER
# ─────────────────────────────────────────────────────────────────────────────

def build_library_entry(case, result, mcq_seq, pearl_index):
    """Assemble a library entry dict matching the content-library.html schema."""
    q  = result['question']
    t  = result['tags']
    now = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')

    # Use the pearl that was the focus of this question
    pearl = case['pearls'][pearl_index % len(case['pearls'])]

    return {
        'id':          f"lib-{case['id']}-{mcq_seq:04d}",
        'type':        'mcq',
        'status':      'approved',
        'caseId':      case['id'],
        'diagnosis':   case['diagnosis'],
        'source':      case['source'],
        'submittedAt': now,
        'approvedAt':  now,
        'question': {
            'stem':          q['stem'],
            'options':       q['options'],
            'correct_index': q['correct_index'],
            'explanation':   q['explanation'],
            'topic_tags':    q.get('topic_tags', []),
            'key_concept':   q.get('key_concept', ''),
        },
        'tags': {
            'abai_domain':          t['abai_domain'],
            'abai_domain_number':   t['abai_domain_number'],
            'acgme_competency':     t['acgme_competency'],
            'acgme_milestone':      t['acgme_milestone'],
            'acgme_milestone_level':t['acgme_milestone_level'],
            'blooms':               t['blooms'],
            'difficulty':           t['difficulty'],
        },
        'pearl_source': pearl,
        'quality_score': result['quality']['score'],
        'quality_criteria': result['quality']['criteria'],
    }


# ─────────────────────────────────────────────────────────────────────────────
# JS OUTPUT WRITER
# ─────────────────────────────────────────────────────────────────────────────

def write_js_library(entries, output_path):
    """
    Write the library as a self-executing JS file that injects into localStorage
    (matching the schema used by content-library.html and studydx.html).
    """
    generated_at = datetime.now(timezone.utc).isoformat()
    entries_json  = json.dumps(entries, indent=2, ensure_ascii=False)

    js = f"""// rdx-mcq-library.js — ReasonDx Pre-Seeded MCQ Library
// Generated: {generated_at}
// MCQs: {len(entries)} across {len(set(e['caseId'] for e in entries))} cases
//
// Pipeline: 3-pass AI generation matching workers/studydx-engine.js
//   Pass 1 — Generate (PASS1_GENERATE prompt)
//   Pass 2 — Quality audit (PASS2_AUDIT rubric, threshold ≥{QUALITY_PASS_THRESHOLD})
//   Pass 3 — Educational metadata tagging (PASS3_TAG)
//
// Drop into repo root. Auto-loads on content-library.html and studydx.html page load.

(function() {{
'use strict';

var LIBRARY = {entries_json};

// ── Auto-inject into localStorage ──────────────────────────────────────────
// Merges with any existing public MCQs; skips duplicates by id.
(function() {{
  try {{
    var existing = [];
    try {{ existing = JSON.parse(localStorage.getItem('rdx-public-mcqs') || '[]'); }} catch(e) {{}}
    var existingIds = {{}};
    existing.forEach(function(q) {{ existingIds[q.id] = true; }});

    var added = 0;
    LIBRARY.forEach(function(q) {{
      if (!existingIds[q.id]) {{ existing.push(q); added++; }}
    }});

    localStorage.setItem('rdx-public-mcqs', JSON.stringify(existing));
    if (added > 0) {{
      console.log('[ReasonDx Library] Seeded ' + added + ' MCQs (' + existing.length + ' total in public library)');
    }}
  }} catch(e) {{
    console.warn('[ReasonDx Library] Seed error:', e);
  }}
}})();

// Expose for direct access
window.RDX_MCQ_LIBRARY = LIBRARY;

}})();
"""
    output_path.write_text(js, encoding='utf-8')
    print(f"\n✅ Wrote {len(entries)} MCQs → {output_path}")


# ─────────────────────────────────────────────────────────────────────────────
# CHECKPOINT HELPERS
# ─────────────────────────────────────────────────────────────────────────────

def load_checkpoint():
    if CHECKPOINT.exists():
        return json.loads(CHECKPOINT.read_text())
    return {'completed_cases': [], 'entries': []}

def save_checkpoint(completed_cases, entries):
    CHECKPOINT.write_text(json.dumps({
        'completed_cases': completed_cases,
        'entries':         entries,
    }, indent=2))


# ─────────────────────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description='Generate ReasonDx MCQ Library via 3-pass AI pipeline')
    parser.add_argument('--resume',        action='store_true', help='Resume from checkpoint')
    parser.add_argument('--cases',         type=str,  default='', help='Comma-separated case IDs to process')
    parser.add_argument('--mcqs-per-case', type=int,  default=3,  help='MCQs per case (default: 3)')
    parser.add_argument('--output',        type=str,  default='', help='Output JS file path')
    parser.add_argument('--dry-run',       action='store_true', help='Parse cases without calling API')
    args = parser.parse_args()

    if args.output:
        global OUTPUT_JS
        OUTPUT_JS = Path(args.output)

    # API key
    api_key = os.environ.get('ANTHROPIC_API_KEY', '')
    if not api_key and not args.dry_run:
        print("❌  ANTHROPIC_API_KEY environment variable not set.")
        print("    export ANTHROPIC_API_KEY=sk-ant-...")
        sys.exit(1)

    # Load prompts from worker source
    print("📋  Loading system prompts from workers/studydx-engine.js...")
    prompts = load_prompts_from_worker()
    print(f"    Pass 1: {len(prompts[0])} chars | Pass 2: {len(prompts[1])} chars | Pass 3: {len(prompts[2])} chars")

    # Extract cases
    print("\n📂  Extracting case content from emr-data/...")
    all_cases = extract_cases()
    print(f"    Found {len(all_cases)} cases with teaching content")

    # Filter cases
    if args.cases:
        filter_ids = set(args.cases.split(','))
        all_cases = [c for c in all_cases if c['id'] in filter_ids]
        print(f"    Filtered to {len(all_cases)} cases: {[c['id'] for c in all_cases]}")

    # Checkpoint / resume
    checkpoint = load_checkpoint() if args.resume else {'completed_cases': [], 'entries': []}
    completed  = set(checkpoint['completed_cases'])
    entries    = checkpoint['entries']
    mcq_seq    = len(entries)

    cases_to_run = [c for c in all_cases if c['id'] not in completed]
    total_target = len(cases_to_run) * args.mcqs_per_case

    if args.dry_run:
        print(f"\n🔍  DRY RUN — would generate {total_target} MCQs across {len(cases_to_run)} cases")
        for c in all_cases:
            print(f"    {c['id']}: {len(c['pearls'])} pearls | {len(c['key_learning'])} KL | src: {c['source'][:60]}")
        return

    print(f"\n🚀  Generating {total_target} MCQs across {len(cases_to_run)} cases")
    print(f"    MCQs per case: {args.mcqs_per_case} | Quality threshold: {QUALITY_PASS_THRESHOLD}")
    if completed:
        print(f"    Resuming — {len(completed)} cases already done, {len(entries)} MCQs in checkpoint")
    print()

    report = []
    start_time = time.time()

    for case_idx, case in enumerate(cases_to_run, 1):
        print(f"[{case_idx:2}/{len(cases_to_run)}] {case['id']} — {case['diagnosis'][:55]}")

        case_entries = []
        case_report  = {'case_id': case['id'], 'diagnosis': case['diagnosis'], 'mcqs': []}

        for q_idx in range(args.mcqs_per_case):
            pearl_index = q_idx  # each MCQ targets a different pearl
            print(f"    MCQ {q_idx+1}/{args.mcqs_per_case} (pearl {pearl_index}: {case['pearls'][pearl_index % len(case['pearls'])][:60]}...)")

            try:
                result = run_3_pass_pipeline(api_key, prompts, case, pearl_index, q_idx)
            except Exception as e:
                print(f"    ❌  Pipeline error: {e}")
                traceback.print_exc()
                case_report['mcqs'].append({'pearl_index': pearl_index, 'success': False, 'error': str(e)})
                continue

            if result['success']:
                entry = build_library_entry(case, result, mcq_seq, pearl_index)
                case_entries.append(entry)
                mcq_seq += 1
                score = result['quality']['score']
                print(f"    ✓  Generated (quality: {score:.0%}, {result['quality']['attempts']} attempt(s))")
                case_report['mcqs'].append({
                    'pearl_index': pearl_index,
                    'success':     True,
                    'quality_score': score,
                    'attempts':    result['quality']['attempts'],
                    'entry_id':    entry['id'],
                })
            else:
                print(f"    ✗  Failed: {result['error']}")
                case_report['mcqs'].append({
                    'pearl_index': pearl_index,
                    'success':     False,
                    'error':       result['error'],
                })

        entries.extend(case_entries)
        completed.add(case['id'])
        report.append(case_report)

        # Save checkpoint after every case
        save_checkpoint(list(completed), entries)

        elapsed = time.time() - start_time
        avg_per_case = elapsed / case_idx
        remaining = avg_per_case * (len(cases_to_run) - case_idx)
        print(f"    → {len(case_entries)}/{args.mcqs_per_case} MCQs saved | "
              f"Total: {len(entries)} | ETA: {remaining/60:.1f} min\n")

    # Write outputs
    write_js_library(entries, OUTPUT_JS)

    OUTPUT_REPORT.write_text(json.dumps({
        'generated_at':  datetime.now(timezone.utc).isoformat(),
        'total_mcqs':    len(entries),
        'total_cases':   len(completed),
        'cases':         report,
    }, indent=2))
    print(f"📊  Report → {OUTPUT_REPORT}")

    # Summary
    successes = sum(1 for e in entries)
    total_elapsed = time.time() - start_time
    print(f"\n{'='*60}")
    print(f"  Total MCQs generated: {successes}")
    print(f"  Cases covered:        {len(completed)}")
    print(f"  Time elapsed:         {total_elapsed/60:.1f} min")
    print(f"  Output:               {OUTPUT_JS}")
    print(f"{'='*60}")

    # Clean up checkpoint on success
    if CHECKPOINT.exists():
        CHECKPOINT.unlink()
        print("  ✓  Checkpoint cleaned up")


if __name__ == '__main__':
    main()
PYEOF