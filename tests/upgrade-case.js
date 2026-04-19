#!/usr/bin/env node
/**
 * ReasonDx Case Upgrader — Gen1 → Gen2
 * Adds guided mode to any EMR case file using Claude AI to generate
 * clinically accurate patientPersona, patientResponses, examFindings,
 * ddxTargets, biasFlags, and coachPrompts.
 *
 * Usage: node tests/upgrade-case.js emr-data/sepsisseptic-shock.js
 *        node tests/upgrade-case.js emr-data/  (batch all Gen1 cases)
 */
'use strict';
const fs   = require('fs');
const path = require('path');

global.window = global;

// ── Load a case file ──────────────────────────────────────────────────────
function loadCase(fp) {
  global.EMR_DATA = undefined;
  eval(fs.readFileSync(fp, 'utf8'));
  return global.EMR_DATA;
}

// ── Check if case needs upgrade ───────────────────────────────────────────
function needsUpgrade(data) {
  if (!data) return false;
  const g = data.guided || {};
  if (!g.supported) return true;
  if (!g.patientResponses || Object.keys(g.patientResponses).length < 5) return true;
  if (!g.examFindings || Object.keys(g.examFindings).length < 4) return true;
  if (!g.ddxTargets || g.ddxTargets.length < 3) return true;
  return false;
}

// ── Build the upgrade prompt ──────────────────────────────────────────────
function buildPrompt(data) {
  const pt  = data.patient  || {};
  const meta = data.meta    || {};
  const probs = (data.problems || []).map(p => p.problem || p.description || '').join(', ');
  const meds  = (data.medications || []).map(m => m.name || '').join(', ');
  const allerg = (data.allergies || []).map(a => a.allergen || '').filter(a => a !== 'NKDA').join(', ') || 'NKDA';
  const vitals = data.vitals && data.vitals[0];
  const vitStr = vitals ? `BP ${vitals.bp}, HR ${vitals.hr}, Temp ${vitals.temp}, SpO2 ${vitals.spo2}` : 'see chart';
  const fhx    = (data.familyHistory || []).join('; ');
  const shx    = (data.socialHistory || []).map(s => Array.isArray(s) ? s.join(': ') : s).join(', ');
  const visits = data.visits && data.visits[0];
  const hpi    = (pt.patientHPI || pt.patientHistory || (visits && visits.hpi) || '').slice(0, 400);

  return `You are generating guided mode data for a medical education EMR simulation.

CASE DETAILS:
- Patient: ${pt.name || 'Unknown'}, ${pt.age || '?'}yo ${pt.sex || ''}
- Chief Complaint: ${pt.chiefComplaint || meta.presentation || 'See chart'}
- Correct Diagnosis: ${meta.diagnosis || 'Unknown'}
- Clinical Setting: ${meta.category || 'ED'}
- PMH: ${probs || 'none documented'}
- Medications: ${meds || 'none'}
- Allergies: ${allerg}
- Vitals: ${vitStr}
- Family History: ${fhx || 'not documented'}
- Social History: ${shx || 'not documented'}
- HPI context: ${hpi || 'not available'}

Generate a complete guided mode object for this patient. Return ONLY valid JSON, no markdown, no explanation:

{
  "supported": true,
  "patientPersona": "2-3 sentences describing how this patient presents emotionally and physically. Include affect, distress level, how forthcoming they are with information.",
  "interviewQuestions": ["question 1", "question 2", ... (10-15 key clinical questions for this presentation)],
  "patientResponses": {
    "default": "Patient's generic response when asked something unclear",
    "onset": "When symptoms started and how",
    "character": "Description of the main symptom quality",
    "location": "Where the symptom is / radiation",
    "severity": "How bad it is (1-10 scale, functional impact)",
    "aggravating": "What makes it worse",
    "relieving": "What makes it better",
    "associated": "Other symptoms present",
    "history": "Any prior similar episodes",
    "medications": "What medications they take (match the chart exactly)",
    "allergies": "Their allergy history (match the chart exactly)",
    "family": "Relevant family history",
    "social": "Occupation, lifestyle, substances",
    "pertinentNeg1": "A pertinent negative the student should elicit",
    "pertinentNeg2": "Another pertinent negative"
  },
  "examManeuvers": ["maneuver 1", "maneuver 2", ... (8-10 key exam maneuvers for this presentation)],
  "examFindings": {
    "maneuver 1": "Specific finding — be clinically precise",
    ...one entry per examManeuver...
  },
  "ddxTargets": ["Correct diagnosis first", "2nd most likely", "3rd", "Must-not-miss 1", "Must-not-miss 2", "Common mimic", "Common mimic 2"],
  "biasFlags": {
    "anchoring": "Describe anchoring risk specific to this case",
    "prematureClosure": "Describe premature closure risk",
    "availabilityBias": "Describe availability bias risk"
  },
  "coachPrompts": {
    "phase2": "Attending prompt for after initial DDx is submitted (before interview)",
    "phase5": "Attending prompt for after history and exam complete",
    "finalDebrief": "Final debrief prompt after diagnosis is revealed"
  }
}`;
}

// ── Call Claude API ───────────────────────────────────────────────────────
async function callClaude(prompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }]
    })
  });
  const data = await res.json();
  if (!data.content || !data.content[0]) throw new Error('No content in response');
  return data.content[0].text;
}

// ── Patch the case file ───────────────────────────────────────────────────
function patchCaseFile(fp, guided) {
  let src = fs.readFileSync(fp, 'utf8');

  // If case already has a guided block, replace it
  if (src.includes('"guided":') || src.includes("'guided':")) {
    // Replace the existing guided block
    src = src.replace(/"guided"\s*:\s*\{[^}]*\}/, '"guided": ' + JSON.stringify(guided, null, 4));
  } else {
    // Add guided block before the closing brace of EMR_DATA
    // Find the last }; that closes EMR_DATA
    const insertBefore = src.lastIndexOf('};');
    const guidedStr = ',\n  "guided": ' + JSON.stringify(guided, null, 4) + '\n';
    src = src.slice(0, insertBefore) + guidedStr + src.slice(insertBefore);
  }

  // Also ensure chiefComplaint and meta fields
  return src;
}

// ── Main ──────────────────────────────────────────────────────────────────
async function upgradeFile(fp) {
  const data = loadCase(fp);
  if (!data) { console.log(`  SKIP ${path.basename(fp)} — not an EMR case`); return false; }
  if (!needsUpgrade(data)) { console.log(`  OK   ${path.basename(fp)} — already Gen2`); return false; }

  console.log(`  ⟳    ${path.basename(fp)} — upgrading...`);
  try {
    const prompt   = buildPrompt(data);
    const response = await callClaude(prompt);
    const clean    = response.replace(/```json\n?|```/g, '').trim();
    const guided   = JSON.parse(clean);

    // Validate minimum structure
    if (!guided.patientResponses || !guided.ddxTargets) {
      throw new Error('Missing required fields in response');
    }

    const patched = patchCaseFile(fp, guided);
    fs.writeFileSync(fp, patched, 'utf8');
    console.log(`  ✓    ${path.basename(fp)} — upgraded (${Object.keys(guided.patientResponses).length} responses, ${guided.ddxTargets.length} DDx targets)`);
    return true;
  } catch(e) {
    console.error(`  ✗    ${path.basename(fp)} — error: ${e.message}`);
    return false;
  }
}

async function main() {
  const input = process.argv[2];
  if (!input) { console.log('Usage: node tests/upgrade-case.js <file.js|dir/>'); process.exit(1); }

  let files = [];
  if (fs.statSync(input).isDirectory()) {
    files = fs.readdirSync(input)
      .filter(f => f.endsWith('.js') && !['crt-data','rdx-','dx-database','day-','handoff','auto-'].some(x => f.startsWith(x)))
      .map(f => path.join(input, f));
  } else {
    files = [input];
  }

  console.log(`\nUpgrading ${files.length} case(s)...\n`);
  let upgraded = 0, skipped = 0, failed = 0;

  for (const fp of files) {
    global.EMR_DATA = undefined;
    const result = await upgradeFile(fp);
    if (result === true) upgraded++;
    else if (result === false) skipped++;
    else failed++;
    // Rate limit — 1 per second for batch
    if (files.length > 1) await new Promise(r => setTimeout(r, 1200));
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`Upgraded: ${upgraded} | Skipped: ${skipped} | Failed: ${failed}`);
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
