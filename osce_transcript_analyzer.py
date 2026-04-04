#!/usr/bin/env python3
"""
osce_transcript_analyzer.py — ReasonDx OSCE Transcript Analysis Agent
═══════════════════════════════════════════════════════════════════════
Analyzes Whisper-generated OSCE transcripts for clinical reasoning
process signals and produces structured JSON output for convergent
validity comparison against ReasonDx passive measures.

PIPELINE:
  1. Whisper transcribes OSCE audio → timestamped .txt transcript
  2. This agent reads transcript → extracts 6 reasoning process signals
  3. Output JSON → compare to same student's platform passive measures
  4. Correlation = convergent validity evidence (Sub-Project 7 / Arm 7)

CONSTRUCT MAPPING (platform passive measure → OSCE transcript equivalent):
  Question type classifier     → hypothesis-driven vs template questioning
  Cue utilization tracker      → follow-up depth on positive findings
  Implicit confidence (hedging) → semantic qualifier density
  Response latency              → pause and turn-taking patterns
  Differential evolution (RPFS) → early hypothesis activation timing

REQUIREMENTS:
  pip install anthropic

USAGE:
  python3 osce_transcript_analyzer.py transcript.txt --student STUDENT_ID
  python3 osce_transcript_analyzer.py transcript.txt --student ID --case chest_pain
  python3 osce_transcript_analyzer.py --batch transcripts/ --out results.json

DATA GOVERNANCE NOTE:
  This script processes only TEXT. Audio must be transcribed locally
  using Whisper (free, runs on-device) and deleted before running this
  script. This file transmits text to Anthropic's API only.
  De-identify transcripts before analysis: replace SP name with
  "Patient" and student ID with anonymous code.

REFERENCES:
  Hasnain et al. (2001) — hypothesis-driven inquiry behaviors
  Régent, Thampy & Singh, BMC Med Ed (2023) — purposeful questioning
  NBME OSCE-CR pilot (2022-2024) — process-based CR assessment
  Lingard et al. (2003) — epistemic markers in clinical language
  Levinson et al. (2000) — patient cue response
"""

import anthropic
import json
import re
import sys
import os
import argparse
from pathlib import Path
from datetime import datetime

# ── CONSTRUCT DEFINITIONS ───────────────────────────────────────────────────
# These mirror the signal names in rdx-passive.js for direct comparison.

CONSTRUCTS = {
    "question_sequence": {
        "description": "Hypothesis-driven clustering vs template following",
        "platform_analog": "question_type_classifier.expertPattern",
        "citation": "Hasnain et al. 2001; Régent et al. 2023"
    },
    "semantic_qualifier_density": {
        "description": "Precision of symptom language (temporal, qualitative, contextual)",
        "platform_analog": "implicit_confidence.score (inverted — higher precision = lower hedging)",
        "citation": "Bordage 2007; Lingard et al. 2003"
    },
    "cue_follow_up_rate": {
        "description": "Rate at which student follows up on patient-disclosed symptoms",
        "platform_analog": "cue_utilization.utilizationRate",
        "citation": "Levinson et al. 2000; Calgary-Cambridge"
    },
    "pivot_behavior": {
        "description": "Appropriate topic changes when hypothesis is refuted",
        "platform_analog": "rpfs.differentialEvolution (convergence rate)",
        "citation": "Croskerry 2009 dual process model"
    },
    "negative_finding_elicitation": {
        "description": "Student asks about absence of red flags / discriminating negatives",
        "platform_analog": "rpfs.historyCoverage (gap detection)",
        "citation": "Bordage & Lemieux 1991"
    },
    "early_hypothesis_activation": {
        "description": "Working hypothesis present before 3-minute mark",
        "platform_analog": "rpfs.phase1_differential (initial breadth)",
        "citation": "Norman 2005; Elstein & Schwarz 2002"
    }
}

# ── SYSTEM PROMPT ────────────────────────────────────────────────────────────

SYSTEM_PROMPT = """You are a clinical reasoning assessment specialist analyzing OSCE encounter transcripts.
Your task is to score six reasoning process signals from a student-patient transcript.
These signals measure HOW the student reasons, not just WHAT they found.

You must return ONLY valid JSON with no other text, preamble, or markdown.

For each signal, provide:
- score: 0-100 (0=absent/poor, 50=developing, 100=expert)
- evidence: 1-2 specific transcript quotes supporting the score
- notes: brief clinical reasoning interpretation

SIGNAL DEFINITIONS:

1. question_sequence (0-100)
   Expert pattern: open questions first to generate hypotheses, then closed questions
   to test them. Questions cluster around organ systems or illness scripts.
   Novice pattern: random or alphabetical/template order with no apparent hypothesis.
   Score 80-100: clear clustering, hypothesis-driven narrowing evident
   Score 50-79: some clustering but mixed with template questions
   Score 0-49: no discernible hypothesis pattern, random or checklist approach

2. semantic_qualifier_density (0-100)
   Experts use precise illness script language: temporal (acute/chronic/episodic),
   qualitative (pressure/sharp/burning), contextual (exertional/positional/nocturnal),
   severity, and associated features as discriminating features.
   Score 80-100: rich qualifier use throughout, "substernal pressure radiating to jaw"
   Score 50-79: some qualifiers but inconsistent
   Score 0-49: vague language, "the pain" without characterization

3. cue_follow_up_rate (0-100)
   When patient volunteers a symptom or emotional cue, does the student follow up
   within 1-2 turns? Expert behavior: follow up on positives before moving on.
   Score 80-100: follows up on >80% of patient-volunteered cues
   Score 50-79: follows up on 50-80% of cues
   Score 0-49: misses most cues, moves past them

4. pivot_behavior (0-100)
   Does the student change direction when evidence contradicts their working hypothesis?
   Expert: smoothly pivots, "That's important — let me ask about..."
   Novice: keeps pursuing same hypothesis despite contradicting information.
   Score 80-100: appropriate pivots clearly present
   Score 50-79: some flexibility but anchoring evident
   Score 0-49: no pivots, apparent anchoring throughout

5. negative_finding_elicitation (0-100)
   Does student ask about absence of features to discriminate between diagnoses?
   Expert: "Have you had any fever? Any radiation to the arm? Any relief with antacids?"
   Novice: only asks about positive features, never uses discriminating negatives.
   Score 80-100: uses negatives as discriminating features
   Score 50-79: some negative finding elicitation
   Score 0-49: almost entirely positive finding focused

6. early_hypothesis_activation (0-100)
   Is there evidence of a working hypothesis in the first 2-3 minutes?
   Expert: hypothesis visible in question clustering early in encounter.
   Novice: no apparent hypothesis until late or never.
   Score 80-100: hypothesis clearly active within first 3 questions
   Score 50-79: hypothesis emerges mid-encounter
   Score 0-49: no evidence of early hypothesis generation

Also provide:
- overall_reasoning_quality: weighted composite score (0-100)
- dominant_pattern: one of ["hypothesis_driven", "template_systematic", "unfocused", "premature_closure"]
- key_strength: 1 sentence about strongest reasoning behavior
- key_gap: 1 sentence about the most important missing reasoning behavior
- bias_flags: array of detected biases from ["anchoring", "premature_closure", "framing", "availability", "none_detected"]"""

# ── TRANSCRIPT PARSER ────────────────────────────────────────────────────────

def parse_transcript(text):
    """
    Parse a Whisper-generated transcript into turns.
    Handles common Whisper formats:
      [00:00.5 --> 00:05.2] Student: What brings you in today?
      Student: What brings you in today?
      S: What brings you in today?
    Returns list of {speaker, text, timestamp_seconds} dicts.
    """
    turns = []
    lines = text.strip().split('\n')

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Extract timestamp if present
        ts = None
        ts_match = re.match(r'\[(\d+):(\d+)[\.\d]*\s*-->', line)
        if ts_match:
            ts = int(ts_match.group(1)) * 60 + int(ts_match.group(2))
            line = re.sub(r'\[.*?-->[^\]]*\]', '', line).strip()

        # Detect speaker
        speaker = 'unknown'
        content = line

        student_patterns = [r'^(Student|S|MS|Med Student|Doctor|Dr)\s*:', r'^\[Student\]']
        patient_patterns = [r'^(Patient|P|SP|Standardized Patient|Pt)\s*:', r'^\[Patient\]']

        for pat in student_patterns:
            m = re.match(pat, line, re.IGNORECASE)
            if m:
                speaker = 'student'
                content = line[m.end():].strip()
                break

        for pat in patient_patterns:
            m = re.match(pat, line, re.IGNORECASE)
            if m:
                speaker = 'patient'
                content = line[m.end():].strip()
                break

        if content:
            turns.append({
                'speaker': speaker,
                'text': content,
                'timestamp_seconds': ts
            })

    return turns


def extract_student_turns(turns):
    return [t for t in turns if t['speaker'] == 'student']


def compute_basic_metrics(turns):
    """
    Compute rule-based metrics before sending to LLM.
    These provide a cross-check on LLM scoring.
    """
    student_turns = extract_student_turns(turns)
    patient_turns = [t for t in turns if t['speaker'] == 'patient']

    if not student_turns:
        return {}

    # Question type counts (mirrors rdx-passive.js classifier)
    open_q = closed_q = leading_q = clarifying_q = 0
    hedging_words = ['maybe', 'possibly', 'could be', 'might', 'perhaps',
                     'i think', 'not sure', 'uncertain', 'i wonder', 'potentially']
    commitment_words = ['definitely', 'clearly', 'obviously', 'certainly',
                        'this is', "it's definitely", 'no doubt', 'i\'m sure']
    total_hedging = total_commitment = 0

    for turn in student_turns:
        text = turn['text'].lower().strip()
        # Question classification
        if re.search(r'\b(what|when|how|tell me|describe|can you|could you|explain)\b', text):
            open_q += 1
        elif re.search(r'\b(do you|did you|have you|is it|are you|was it|does it)\b', text):
            closed_q += 1
        elif re.search(r'\b(so you\'re saying|you mentioned|when you say|can you clarify)\b', text):
            clarifying_q += 1

        # Hedging/commitment
        total_hedging += sum(1 for w in hedging_words if w in text)
        total_commitment += sum(1 for w in commitment_words if w in text)

    total_signals = total_hedging + total_commitment
    confidence_score = 0 if total_signals == 0 else round(
        (total_commitment - total_hedging) / total_signals * 50 + 50, 1
    )

    # Early question timing — is there topic clustering in first 5 student turns?
    early_topics = set()
    for turn in student_turns[:5]:
        text = turn['text'].lower()
        if any(w in text for w in ['chest', 'pain', 'pressure', 'tight']):
            early_topics.add('cardiac')
        if any(w in text for w in ['breath', 'shortness', 'wheeze', 'cough']):
            early_topics.add('pulmonary')
        if any(w in text for w in ['fever', 'chills', 'night sweat', 'weight']):
            early_topics.add('systemic')
        if any(w in text for w in ['medication', 'drug', 'allergy', 'allergic']):
            early_topics.add('medication')

    return {
        'total_student_turns': len(student_turns),
        'total_patient_turns': len(patient_turns),
        'open_questions': open_q,
        'closed_questions': closed_q,
        'clarifying_questions': clarifying_q,
        'open_closed_ratio': round(open_q / max(closed_q, 1), 2),
        'implicit_confidence_score': confidence_score,
        'hedging_count': total_hedging,
        'commitment_count': total_commitment,
        'early_topic_clusters': list(early_topics),
        'early_hypothesis_topics': len(early_topics)
    }


# ── LLM ANALYSIS ─────────────────────────────────────────────────────────────

def analyze_with_llm(transcript_text, case_context=None):
    """
    Send transcript to Claude for structured reasoning signal extraction.
    Returns parsed JSON or None on failure.
    """
    client = anthropic.Anthropic()

    case_note = ""
    if case_context:
        case_note = f"\n\nCase context (for reference only — do not let this bias scoring): {case_context}"

    user_message = f"""Analyze this OSCE encounter transcript for clinical reasoning process signals.{case_note}

TRANSCRIPT:
{transcript_text}

Score each of the 6 reasoning process signals and return structured JSON as specified."""

    try:
        response = client.messages.create(
            model="claude-opus-4-20250514",
            max_tokens=2000,
            system=SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_message}]
        )

        raw = response.content[0].text.strip()
        # Strip any accidental markdown fences
        raw = re.sub(r'^```json\s*', '', raw)
        raw = re.sub(r'\s*```$', '', raw)
        return json.loads(raw)

    except json.JSONDecodeError as e:
        print(f"JSON parse error: {e}", file=sys.stderr)
        print(f"Raw response: {raw[:500]}", file=sys.stderr)
        return None
    except Exception as e:
        print(f"API error: {e}", file=sys.stderr)
        return None


# ── OUTPUT ASSEMBLY ───────────────────────────────────────────────────────────

def assemble_result(student_id, transcript_file, turns, basic_metrics, llm_scores, case_context=None):
    """
    Assemble the final structured output for Supabase storage and
    convergent validity comparison against platform passive measures.
    """
    return {
        "meta": {
            "student_id": student_id,
            "transcript_file": str(transcript_file),
            "case_context": case_context,
            "analyzed_at": datetime.utcnow().isoformat() + "Z",
            "analyzer_version": "1.0",
            "construct_source": "rdx-passive.js signal definitions"
        },
        "transcript_stats": basic_metrics,
        "reasoning_signals": llm_scores,
        "construct_map": CONSTRUCTS,
        "convergent_validity_fields": {
            "comment": "These field names map directly to platform passive measure equivalents for correlation analysis",
            "question_sequence_score": llm_scores.get("question_sequence", {}).get("score") if llm_scores else None,
            "semantic_qualifier_score": llm_scores.get("semantic_qualifier_density", {}).get("score") if llm_scores else None,
            "cue_follow_up_score": llm_scores.get("cue_follow_up_rate", {}).get("score") if llm_scores else None,
            "pivot_behavior_score": llm_scores.get("pivot_behavior", {}).get("score") if llm_scores else None,
            "negative_elicitation_score": llm_scores.get("negative_finding_elicitation", {}).get("score") if llm_scores else None,
            "early_hypothesis_score": llm_scores.get("early_hypothesis_activation", {}).get("score") if llm_scores else None,
            "overall_reasoning_quality": llm_scores.get("overall_reasoning_quality") if llm_scores else None,
            "dominant_pattern": llm_scores.get("dominant_pattern") if llm_scores else None,
            "bias_flags": llm_scores.get("bias_flags") if llm_scores else None,
            "implicit_confidence_rule_based": basic_metrics.get("implicit_confidence_score"),
            "open_closed_ratio": basic_metrics.get("open_closed_ratio")
        }
    }


# ── CLI ──────────────────────────────────────────────────────────────────────

def analyze_single(transcript_path, student_id, case_context=None, verbose=False):
    path = Path(transcript_path)
    if not path.exists():
        print(f"Error: file not found: {transcript_path}", file=sys.stderr)
        return None

    text = path.read_text(encoding='utf-8')

    if verbose:
        print(f"Parsing transcript: {path.name} ({len(text)} chars)")

    turns = parse_transcript(text)
    basic = compute_basic_metrics(turns)

    if verbose:
        print(f"  Turns: {len(turns)} total, {basic.get('total_student_turns',0)} student")
        print(f"  Open:closed ratio: {basic.get('open_closed_ratio','?')}")
        print(f"  Sending to Claude for signal extraction...")

    llm = analyze_with_llm(text, case_context)

    if verbose and llm:
        oq = llm.get('overall_reasoning_quality', '?')
        dp = llm.get('dominant_pattern', '?')
        print(f"  Overall reasoning quality: {oq}/100")
        print(f"  Dominant pattern: {dp}")

    return assemble_result(student_id, path, turns, basic, llm, case_context)


def main():
    parser = argparse.ArgumentParser(
        description='ReasonDx OSCE Transcript Analysis Agent — extracts clinical reasoning signals'
    )
    parser.add_argument('transcript', nargs='?', help='Path to transcript .txt file')
    parser.add_argument('--student', default='anonymous', help='De-identified student code (e.g., STU_001)')
    parser.add_argument('--case', default=None, help='Case context hint (e.g., "chest_pain", "dyspnea")')
    parser.add_argument('--batch', default=None, help='Directory of transcripts to process in batch')
    parser.add_argument('--out', default=None, help='Output JSON file path (default: stdout)')
    parser.add_argument('--verbose', '-v', action='store_true', help='Show progress')
    args = parser.parse_args()

    results = []

    if args.batch:
        batch_dir = Path(args.batch)
        files = sorted(batch_dir.glob('*.txt'))
        if not files:
            print(f"No .txt files found in {args.batch}", file=sys.stderr)
            sys.exit(1)
        print(f"Processing {len(files)} transcripts...", file=sys.stderr)
        for f in files:
            student_id = f.stem  # filename without extension as student code
            if args.verbose:
                print(f"\n[{f.name}]")
            r = analyze_single(f, student_id, args.case, args.verbose)
            if r:
                results.append(r)
    elif args.transcript:
        r = analyze_single(args.transcript, args.student, args.case, args.verbose)
        if r:
            results.append(r)
    else:
        parser.print_help()
        sys.exit(1)

    output = json.dumps(results if len(results) > 1 else results[0], indent=2)

    if args.out:
        Path(args.out).write_text(output, encoding='utf-8')
        print(f"Results written to {args.out}", file=sys.stderr)
    else:
        print(output)


if __name__ == '__main__':
    main()
