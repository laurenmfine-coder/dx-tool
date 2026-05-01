#!/usr/bin/env node
/**
 * scripts/validate-puzzles.js
 *
 * Audit the puzzle library against the content rules established
 * in the May 2026 review session:
 *   - schema correctness
 *   - reference URL allowlist (StatPearls + AHA/ACC + NIH Bookshelf)
 *   - no medication doses
 *   - prompt-keyConcept alignment (every concept invited by prompt)
 *   - synonym echo risk (synonym appears verbatim in scenario)
 *   - cliché phrase detection
 *   - keyConcept count caps
 *
 * Output: writes _drafts/audit-report.md with all findings categorized.
 * Does NOT modify any puzzle data — surfacing only, never auto-fixing.
 *
 * Usage: node scripts/validate-puzzles.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PUZZLES_HTML = path.join(ROOT, 'puzzles.html');
const REPORT = path.join(ROOT, '_drafts/audit-report.md');

// ── Extract the PUZZLES array ──────────────────────────────────────
function loadPuzzles() {
  // Set up a minimal browser-like global so the puzzles.html script
  // block can be eval'd without crashing.
  global.window = global;
  global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {}
  };
  global.document = {
    _els: {},
    getElementById(id) {
      if (!this._els[id]) this._els[id] = {
        id, value: '', textContent: '', innerHTML: '', style: {},
        className: '', disabled: false,
        classList: { add(){}, remove(){}, contains(){return false;} }
      };
      return this._els[id];
    },
    querySelectorAll: () => [],
    body: { appendChild: () => {} }
  };

  // Load the beta-puzzles helper (defines window.RDXPuzzleTracking etc)
  const betaPath = path.join(ROOT, 'data/rdx-beta-puzzles.js');
  if (fs.existsSync(betaPath)) eval(fs.readFileSync(betaPath, 'utf8'));

  const html = fs.readFileSync(PUZZLES_HTML, 'utf8');
  const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  for (const s of scripts) {
    try { eval(s); } catch(e) {
      // Some scripts reference DOM elements that don't exist in our
      // mock; that's fine. We only need PUZZLES to be defined.
    }
  }

  if (typeof PUZZLES !== 'object' || !Array.isArray(PUZZLES)) {
    throw new Error('PUZZLES array not found after eval');
  }
  return PUZZLES;
}

// ── Check definitions ──────────────────────────────────────────────

const ALLOWED_URL_PATTERNS = [
  /^https:\/\/www\.ncbi\.nlm\.nih\.gov\/books\/NBK\d+\/?$/,
  /^https:\/\/www\.ahajournals\.org\//,
];

const DOSE_RX = /(?<![\w-])(\d+(?:\.\d+)?)\s*(mg|mcg|µg|g|mL|ml|kg|mEq|mOsm|IU|units?|%)\b(?!\s*[-–]?old)/gi;

const CLICHE_PHRASES = [
  'worst headache of my life',
  '10/10 pain',
  '10 out of 10 pain',
  'elephant sitting on my chest',
  'elephant on my chest',
  'crushing chest pain',  // borderline — flag as soft
  'ripping pain',
  'tearing pain radiating to the back',
];

const REQUIRED_FIELDS = ['type', 'scenario', 'prompt', 'teaching'];
const REQUIRED_FOLLOWUP_FIELDS = ['prompt', 'teaching'];

function checkSchema(puzzle, idx) {
  const findings = [];
  for (const f of REQUIRED_FIELDS) {
    if (typeof puzzle[f] !== 'string' || !puzzle[f].length) {
      findings.push({ severity: 'error', code: 'MISSING_FIELD', message: `missing required field: ${f}` });
    }
  }
  if (puzzle.keyConcepts !== undefined) {
    if (!Array.isArray(puzzle.keyConcepts)) {
      findings.push({ severity: 'error', code: 'BAD_KEYCONCEPTS', message: 'keyConcepts must be an array' });
    } else {
      puzzle.keyConcepts.forEach((kc, i) => {
        if (!kc || typeof kc !== 'object') {
          findings.push({ severity: 'error', code: 'BAD_KEYCONCEPT', message: `keyConcepts[${i}] is not an object` });
          return;
        }
        if (typeof kc.token !== 'string' || !kc.token.length) {
          findings.push({ severity: 'error', code: 'BAD_KEYCONCEPT', message: `keyConcepts[${i}].token missing or empty` });
        }
        if (!Array.isArray(kc.synonyms) || !kc.synonyms.every(s => typeof s === 'string')) {
          findings.push({ severity: 'error', code: 'BAD_KEYCONCEPT', message: `keyConcepts[${i}].synonyms must be array of strings` });
        }
      });
    }
  }
  if (puzzle.references !== undefined) {
    if (!Array.isArray(puzzle.references)) {
      findings.push({ severity: 'error', code: 'BAD_REFS', message: 'references must be an array' });
    } else {
      puzzle.references.forEach((r, i) => {
        if (!r || typeof r !== 'object') {
          findings.push({ severity: 'error', code: 'BAD_REF', message: `references[${i}] is not an object` });
          return;
        }
        if (typeof r.citation !== 'string' || !r.citation.length) {
          findings.push({ severity: 'error', code: 'BAD_REF', message: `references[${i}].citation missing` });
        }
        if (typeof r.url !== 'string' || !r.url.length) {
          findings.push({ severity: 'error', code: 'BAD_REF', message: `references[${i}].url missing` });
        }
      });
    }
  }
  if (puzzle.followUp !== undefined) {
    if (!puzzle.followUp || typeof puzzle.followUp !== 'object') {
      findings.push({ severity: 'error', code: 'BAD_FOLLOWUP', message: 'followUp is not an object' });
    } else {
      for (const f of REQUIRED_FOLLOWUP_FIELDS) {
        if (typeof puzzle.followUp[f] !== 'string' || !puzzle.followUp[f].length) {
          findings.push({ severity: 'error', code: 'BAD_FOLLOWUP', message: `followUp.${f} missing` });
        }
      }
    }
  }
  return findings;
}

function checkAllowlistRefs(puzzle) {
  const findings = [];
  const refs = puzzle.references || [];
  refs.forEach((r, i) => {
    if (!r || !r.url) return;
    const ok = ALLOWED_URL_PATTERNS.some(rx => rx.test(r.url));
    if (!ok) {
      findings.push({
        severity: 'warn',
        code: 'NON_ALLOWLIST_REF',
        message: `references[${i}].url is outside the strict open-access allowlist: ${r.url}`
      });
    }
  });
  return findings;
}

function checkDoses(puzzle) {
  const findings = [];
  const fields = ['scenario', 'prompt', 'teaching'];

  function scan(text, where) {
    if (!text) return;
    DOSE_RX.lastIndex = 0;
    let m;
    while ((m = DOSE_RX.exec(text)) !== null) {
      const ctx = text.slice(Math.max(0, m.index - 30), Math.min(text.length, m.index + m[0].length + 30));
      // Skip clearly-non-dose patterns: ages ("3-year-old"), years
      // ("2023"), vital signs ("BP 92/58"), labs ("Hgb 9.4 g/dL").
      // The regex already excludes "X-old" but we have edge cases.
      const matched = m[0].toLowerCase();
      // Skip if it's clearly a vital sign or lab unit context
      if (/\bbp\b|\bblood pressure\b|\bhr\b|\bheart rate\b|\brr\b|\brespiratory rate\b|\bspo2\b|\btemp\b|\btemperature\b|\bhgb\b|\bhemoglobin\b|\bbun\b|\bcreatinine\b|\bsodium\b|\bpotassium\b|\bglucose\b|\bbicarbonate\b|\bplatelets?\b|\binr\b|\bwbc\b|\bcrp\b|\besr\b|\btroponin\b|\bph\b|\banion gap\b|\bhematocrit\b|\bsaag\b|\bbilirubin\b|\bcortisol\b|\blithium level\b|\bdrug level\b|\balbumin\b|\bmagnesium\b|\bphosphate\b|\bcalcium\b|\bweight\b/i.test(ctx)) return;
      // Skip if the unit is clearly a lab concentration (per-volume)
      if (/\/d?l\b|mEq\/l|mcg\/dl|mg\/dl|mmol\/l|g\/dl/i.test(matched + ' ' + ctx.slice(matched.length, matched.length + 12))) return;
      // Skip "X kg" when it follows weight-loss/gain language
      if (/\b(weight|lost|gained|down|up)\s+\d/i.test(ctx) && /\bkg\b/i.test(matched)) return;
      // Skip duration patterns ("over 6 hours", "30 minutes ago", etc.)
      if (/\b\d+\s*(hours?|minutes?|days?|weeks?|months?|years?|hr|min)\b/i.test(matched + ' ' + ctx)) return;
      // Skip percentages used for prevalence/probability ("3%", "30%")
      if (matched.endsWith('%')) return;
      // Skip pack-year ("30-pack-year")
      if (/pack[- ]?year/i.test(ctx)) return;

      findings.push({
        severity: 'warn',
        code: 'POSSIBLE_DOSE',
        message: `possible medication dose in ${where}: "${m[0]}" — context: "...${ctx}..."`
      });
    }
  }

  for (const f of fields) scan(puzzle[f], f);
  if (puzzle.followUp) {
    scan(puzzle.followUp.prompt, 'followUp.prompt');
    scan(puzzle.followUp.teaching, 'followUp.teaching');
  }
  return findings;
}

function checkPromptAlignment(puzzle, beat) {
  // For each keyConcept, verify some signal of the concept appears
  // in the prompt. Heuristic: at least one synonym (lowercased,
  // word-boundary match) appears in the prompt OR the token's content
  // words appear in the prompt.
  const findings = [];
  const target = beat === 'main'
    ? { keyConcepts: puzzle.keyConcepts || [], prompt: puzzle.prompt || '' }
    : { keyConcepts: puzzle.followUp?.keyConcepts || [], prompt: puzzle.followUp?.prompt || '' };

  if (!target.keyConcepts.length) return findings;

  const promptLower = target.prompt.toLowerCase();

  target.keyConcepts.forEach((kc, i) => {
    const synonyms = kc.synonyms || [];
    // Check if any synonym (whole word) is mentioned in the prompt.
    const synHit = synonyms.some(s => {
      const sl = s.toLowerCase();
      // Use a substring match — the prompt may use a slightly different
      // form, and we're already going to false-positive sometimes.
      return promptLower.includes(sl);
    });
    if (synHit) return;

    // Try to also extract content words from the token and search.
    // E.g. "Multi-organ involvement" → ['multi', 'organ', 'involvement']
    const tokenWords = (kc.token || '')
      .toLowerCase()
      .replace(/[^\w\s-]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 4 && !['this', 'that', 'with', 'into', 'from', 'than', 'less', 'more'].includes(w));

    const tokenHit = tokenWords.some(w => promptLower.includes(w));
    if (tokenHit) return;

    findings.push({
      severity: 'warn',
      code: 'PROMPT_ALIGNMENT',
      message: `${beat === 'main' ? 'main' : 'followUp'} keyConcept[${i}] "${kc.token}" — no synonym or token word found in prompt. Learner may not know to address this.`
    });
  });

  return findings;
}

function checkSynonymEcho(puzzle, beat) {
  // For each keyConcept synonym, check whether the EXACT phrase
  // appears in the SCENARIO (not the prompt). Scenario echo = free
  // hit by parroting clinical context.
  const findings = [];
  const target = beat === 'main'
    ? { keyConcepts: puzzle.keyConcepts || [] }
    : { keyConcepts: puzzle.followUp?.keyConcepts || [] };

  // Scenario is always at the puzzle level (followUp doesn't redeclare scenario)
  const scenario = (puzzle.scenario || '').toLowerCase();
  if (!scenario) return findings;

  target.keyConcepts.forEach((kc, i) => {
    (kc.synonyms || []).forEach((s, j) => {
      const sl = s.toLowerCase();
      if (sl.length < 4) return;  // skip very short synonyms (false positive prone)
      // Whole-word match
      const rx = new RegExp(`\\b${sl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (rx.test(scenario)) {
        findings.push({
          severity: 'warn',
          code: 'SYNONYM_ECHO',
          message: `${beat === 'main' ? 'main' : 'followUp'} keyConcepts[${i}] "${kc.token}" — synonym "${s}" appears in scenario; learner gets a free hit by parroting.`
        });
      }
    });
  });
  return findings;
}

function checkCliches(puzzle) {
  const findings = [];
  const all = [puzzle.scenario, puzzle.prompt, puzzle.teaching, puzzle.followUp?.prompt, puzzle.followUp?.teaching].filter(Boolean).join(' ').toLowerCase();
  CLICHE_PHRASES.forEach(p => {
    if (all.includes(p.toLowerCase())) {
      findings.push({
        severity: 'warn',
        code: 'CLICHE',
        message: `cliché phrase detected: "${p}"`
      });
    }
  });
  return findings;
}

function checkConceptCount(puzzle) {
  const findings = [];
  const main = puzzle.keyConcepts?.length || 0;
  const fu = puzzle.followUp?.keyConcepts?.length || 0;
  if (main > 6) findings.push({ severity: 'warn', code: 'TOO_MANY_CONCEPTS', message: `main beat has ${main} keyConcepts (recommended cap is 5-6)` });
  if (fu > 6) findings.push({ severity: 'warn', code: 'TOO_MANY_CONCEPTS', message: `followUp has ${fu} keyConcepts (recommended cap is 5-6)` });
  return findings;
}

// ── Run all checks, build report ───────────────────────────────────

function main() {
  const puzzles = loadPuzzles();
  const total = puzzles.length;

  let errorCount = 0, warnCount = 0;
  const perPuzzleFindings = [];
  let withKeyConcepts = 0, withRefs = 0, withFollowUp = 0;

  puzzles.forEach((p, i) => {
    if (Array.isArray(p.keyConcepts) && p.keyConcepts.length) withKeyConcepts++;
    if (Array.isArray(p.references) && p.references.length) withRefs++;
    if (p.followUp) withFollowUp++;

    const findings = [
      ...checkSchema(p, i),
      ...checkAllowlistRefs(p),
      ...checkDoses(p),
      ...checkPromptAlignment(p, 'main'),
      ...checkPromptAlignment(p, 'followUp'),
      ...checkSynonymEcho(p, 'main'),
      ...checkSynonymEcho(p, 'followUp'),
      ...checkCliches(p),
      ...checkConceptCount(p),
    ];

    findings.forEach(f => {
      if (f.severity === 'error') errorCount++;
      else warnCount++;
    });

    if (findings.length) {
      perPuzzleFindings.push({
        idx: i,
        id: i + 1,
        type: p.type || '?',
        scenarioPreview: (p.scenario || '').slice(0, 80) + ((p.scenario || '').length > 80 ? '…' : ''),
        findings
      });
    }
  });

  // Group by code for summary
  const byCode = {};
  perPuzzleFindings.forEach(p => {
    p.findings.forEach(f => {
      byCode[f.code] = byCode[f.code] || { count: 0, severity: f.severity };
      byCode[f.code].count++;
    });
  });

  // Build markdown report
  const lines = [];
  lines.push('# ReasonDx Puzzle Audit Report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString().slice(0,16).replace('T', ' ')} UTC`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- **Total puzzles**: ${total}`);
  lines.push(`- **With keyConcepts**: ${withKeyConcepts} (${Math.round(100*withKeyConcepts/total)}%)`);
  lines.push(`- **With references**: ${withRefs} (${Math.round(100*withRefs/total)}%)`);
  lines.push(`- **With B-shape followUp**: ${withFollowUp} (${Math.round(100*withFollowUp/total)}%)`);
  lines.push(`- **Errors found**: ${errorCount}`);
  lines.push(`- **Warnings found**: ${warnCount}`);
  lines.push(`- **Puzzles flagged**: ${perPuzzleFindings.length} of ${total}`);
  lines.push('');
  lines.push('## Findings by code');
  lines.push('');
  lines.push('| Code | Severity | Count | Meaning |');
  lines.push('|------|----------|-------|---------|');
  const codeMeaning = {
    MISSING_FIELD: 'Required field (type/scenario/prompt/teaching) missing',
    BAD_KEYCONCEPTS: 'keyConcepts not an array',
    BAD_KEYCONCEPT: 'Individual keyConcept malformed',
    BAD_REFS: 'references not an array',
    BAD_REF: 'Individual reference malformed',
    BAD_FOLLOWUP: 'followUp malformed',
    NON_ALLOWLIST_REF: 'Reference URL outside StatPearls/AHA-ACC allowlist',
    POSSIBLE_DOSE: 'Possible medication dose detected (verify it\'s not a vital sign or duration)',
    PROMPT_ALIGNMENT: 'keyConcept not invited by prompt — learner may not know to address it',
    SYNONYM_ECHO: 'keyConcept synonym appears in scenario — free hit by parroting',
    CLICHE: 'Cliché phrase detected',
    TOO_MANY_CONCEPTS: 'More than 6 keyConcepts in a beat — signal dilution risk',
  };
  Object.entries(byCode).sort((a,b) => b[1].count - a[1].count).forEach(([code, info]) => {
    lines.push(`| ${code} | ${info.severity} | ${info.count} | ${codeMeaning[code] || ''} |`);
  });
  lines.push('');

  if (errorCount === 0) {
    lines.push('## ✅ No errors — schema is clean');
    lines.push('');
  }

  lines.push('## Per-puzzle findings');
  lines.push('');
  if (!perPuzzleFindings.length) {
    lines.push('_No findings on any puzzle._');
  } else {
    perPuzzleFindings.forEach(p => {
      lines.push(`### Puzzle ${p.id} — ${p.type}`);
      lines.push('');
      lines.push(`> ${p.scenarioPreview}`);
      lines.push('');
      p.findings.forEach(f => {
        const icon = f.severity === 'error' ? '🔴' : '⚠️';
        lines.push(`- ${icon} \`${f.code}\` — ${f.message}`);
      });
      lines.push('');
    });
  }

  lines.push('---');
  lines.push('');
  lines.push('## How to use this report');
  lines.push('');
  lines.push('1. **Errors (🔴) first.** These are schema bugs that may break rendering or scoring.');
  lines.push('2. **`POSSIBLE_DOSE` warnings** — confirm each one. Many will be false positives (vital signs, durations, percentages); strip the real ones.');
  lines.push('3. **`PROMPT_ALIGNMENT` warnings** — read the prompt and the flagged concept; if the prompt genuinely doesn\'t invite the concept, either rewrite the prompt or remove the concept.');
  lines.push('4. **`SYNONYM_ECHO` warnings** — tighten the synonym list to require reasoning words, not just terms that appear in the scenario.');
  lines.push('5. **`NON_ALLOWLIST_REF` warnings** — replace with a StatPearls/AHA-ACC equivalent if possible, or remove.');
  lines.push('6. **Cliché warnings** — rephrase using objective trajectory language.');
  lines.push('');
  lines.push('No auto-fixes are applied. Every change should be human-reviewed.');

  fs.mkdirSync(path.dirname(REPORT), { recursive: true });
  fs.writeFileSync(REPORT, lines.join('\n'));

  // Console summary
  console.log(`Audit complete. ${total} puzzles scanned.`);
  console.log(`  Errors: ${errorCount}`);
  console.log(`  Warnings: ${warnCount}`);
  console.log(`  Puzzles flagged: ${perPuzzleFindings.length} of ${total}`);
  console.log(`  Report: ${REPORT}`);
}

try { main(); } catch(e) {
  console.error('Validator failed:', e.message);
  console.error(e.stack);
  process.exit(1);
}
