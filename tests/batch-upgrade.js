#!/usr/bin/env node
/**
 * ReasonDx Batch Case Upgrader
 * Upgrades all Gen1 EMR cases to Gen2 guided format using the Anthropic API.
 * 
 * This runs IN the browser environment (or any env with API access).
 * For server-side use: set ANTHROPIC_API_KEY env var.
 * 
 * Usage:
 *   node tests/batch-upgrade.js              — all cases, 1/sec rate limit
 *   node tests/batch-upgrade.js --limit 10   — first 10 only (test)
 *   node tests/batch-upgrade.js --from 50    — start at case #50
 *   node tests/batch-upgrade.js --dry-run    — show what would be upgraded
 */
'use strict';
const fs   = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

global.window = global;

// ── Config ────────────────────────────────────────────────────────────────
const SKIP = ['crt-data','rdx-','dx-database','day-','handoff','auto-','acls-','acid-base'];
const DELAY_MS = 1200;  // 1.2s between API calls (~50 req/min, well under limit)
const MAX_RETRIES = 2;

// Parse CLI args
const args = process.argv.slice(2);
const LIMIT    = args.includes('--limit')   ? parseInt(args[args.indexOf('--limit')+1])   : Infinity;
const FROM     = args.includes('--from')    ? parseInt(args[args.indexOf('--from')+1])    : 0;
const DRY_RUN  = args.includes('--dry-run');
const FORCE    = args.includes('--force');  // re-upgrade even Gen2 cases

// ── Case discovery ────────────────────────────────────────────────────────
function discoverCases() {
  return fs.readdirSync(path.join(root,'emr-data'))
    .filter(f => f.endsWith('.js') && !SKIP.some(x => f.startsWith(x)))
    .map(f => path.join(root,'emr-data',f));
}

function loadCase(fp) {
  global.EMR_DATA = undefined;
  try { eval(fs.readFileSync(fp,'utf8')); } catch(e) { return null; }
  return global.EMR_DATA || null;
}

function isGen2(data) {
  const g = data && data.guided;
  return !!(g && g.supported && g.patientResponses && Object.keys(g.patientResponses).length >= 8);
}

function extractInfo(data, fp) {
  const pt   = data.patient   || {};
  const meta = data.meta      || {};
  const probs  = (data.problems    || []).slice(0,6).map(p=>p.problem||p.description||'').filter(Boolean).join(', ');
  const meds   = (data.medications || []).slice(0,8).map(m=>m.name||m.medication||'').filter(Boolean).join('; ');
  const allerg = (data.allergies   || []).map(a=>a.allergen||'').filter(a=>a&&a!=='NKDA').join(', ') || 'NKDA';
  const vit    = data.vitals && data.vitals[0];
  const vitStr = vit ? `BP ${vit.bp}, HR ${vit.hr}, Temp ${vit.temp}, SpO2 ${vit.spo2}` : '';
  const fhx    = (data.familyHistory || []).slice(0,3).join('; ');
  const shx    = (data.socialHistory || []).slice(0,5).map(s=>Array.isArray(s)?s.join(': '):s).join(', ');
  const hpi    = (pt.patientHPI||pt.patientHistory||'').slice(0,300);
  const vHpi   = (data.visits&&data.visits[0]&&data.visits[0].hpi||'').slice(0,200);
  return {
    name: pt.name||'Unknown', age: pt.age||'', sex: pt.sex||'',
    cc: pt.chiefComplaint||meta.presentation||'',
    diagnosis: meta.diagnosis||'', category: meta.category||'',
    probs, meds, allerg, vitals: vitStr, fhx, shx,
    hpi: hpi||vHpi
  };
}

// ── Prompt builder ────────────────────────────────────────────────────────
function buildPrompt(info) {
  return `Generate guided simulation data for a medical education EMR case. Return ONLY valid JSON, no markdown.

PATIENT: ${info.name}, ${info.age}yo ${info.sex}
CC: ${info.cc}
DIAGNOSIS: ${info.diagnosis}
CATEGORY: ${info.category}
PMH: ${info.probs||'not documented'}
MEDICATIONS (use EXACTLY as written): ${info.meds||'none'}
ALLERGIES (use EXACTLY as written): ${info.allerg}
VITALS: ${info.vitals||'not documented'}
FAMILY HX: ${info.fhx||'not documented'}
SOCIAL HX: ${info.shx||'not documented'}
HPI: ${info.hpi||'not available'}

{
  "supported": true,
  "patientPersona": "2-3 sentences: emotional state, affect, how forthcoming, distress level",
  "interviewQuestions": ["10-13 key clinical questions for this specific presentation"],
  "patientResponses": {
    "default": "patient generic response when confused by question",
    "onset": "when and how symptoms started",
    "character": "quality/nature of main symptom",
    "location": "location and radiation if applicable",
    "severity": "1-10 severity and functional impact",
    "aggravating": "what makes symptoms worse",
    "relieving": "what helps, or nothing helps",
    "associated": "other symptoms the patient has",
    "denies": "key pertinent negatives",
    "history": "prior similar episodes",
    "medications": "MUST say exactly: ${info.meds||'no medications'}",
    "allergies": "MUST say exactly: ${info.allerg}",
    "family": "family history relevant to this presentation",
    "social": "occupation, lifestyle, tobacco, alcohol, substances"
  },
  "examManeuvers": ["8-10 key exam maneuvers specific to this diagnosis"],
  "examFindings": {
    "paste each maneuver here": "precise clinical finding for this patient — match the diagnosis"
  },
  "ddxTargets": [
    "${info.diagnosis} (correct diagnosis)",
    "second most likely",
    "third differential",
    "must-not-miss diagnosis 1",
    "must-not-miss diagnosis 2",
    "common mimic 1",
    "common mimic 2"
  ],
  "biasFlags": {
    "anchoring": "specific anchoring risk for this case and presentation",
    "prematureClosure": "specific premature closure risk",
    "availabilityBias": "specific availability bias risk"
  },
  "coachPrompts": {
    "phase2": "Socratic attending prompt after student submits initial DDx, before they interview the patient",
    "phase5": "Socratic prompt after student completes history and physical exam",
    "finalDebrief": "Debrief prompt after correct diagnosis is revealed — tie DDx evolution together"
  }
}`;
}

// ── API call ──────────────────────────────────────────────────────────────
async function callAPI(prompt, retries = MAX_RETRIES) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const headers = { 'Content-Type': 'application/json' };
  if (apiKey) headers['x-api-key'] = apiKey;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2000,
          messages: [{ role: 'user', content: prompt }]
        })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      const text = data.content && data.content[0] ? data.content[0].text : '';
      return text.replace(/```json\n?|```/g, '').trim();
    } catch(e) {
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, 2000 * (attempt + 1)));
      } else throw e;
    }
  }
}

// ── Patch case file ───────────────────────────────────────────────────────
function patchCase(fp, guided) {
  let src = fs.readFileSync(fp, 'utf8');
  // Remove existing guided block
  src = src.replace(/,?\s*"guided"\s*:\s*\{[\s\S]*?\n(\s{2,4})\}/m, '');
  // Insert before closing };
  const insertAt = src.lastIndexOf('\n};');
  if (insertAt < 0) throw new Error('Cannot find closing }; in ' + path.basename(fp));
  src = src.slice(0, insertAt) + ',\n  "guided": ' + JSON.stringify(guided, null, 4) + src.slice(insertAt);
  fs.writeFileSync(fp, src, 'utf8');
}

// ── Progress file ─────────────────────────────────────────────────────────
const PROGRESS_FILE = path.join(root, 'tests', '.upgrade-progress.json');
function loadProgress() {
  try { return JSON.parse(fs.readFileSync(PROGRESS_FILE,'utf8')); } catch { return { done: [], failed: [] }; }
}
function saveProgress(p) { fs.writeFileSync(PROGRESS_FILE, JSON.stringify(p, null,2)); }

// ── Main ──────────────────────────────────────────────────────────────────
async function main() {
  const allFiles = discoverCases();
  const progress = loadProgress();
  const doneSet  = new Set(progress.done);

  // Filter to cases needing upgrade
  let toUpgrade = [];
  for (const fp of allFiles) {
    global.EMR_DATA = undefined;
    const data = loadCase(fp);
    if (!data || !data.patient) continue;
    if (!FORCE && doneSet.has(fp)) continue;
    if (!FORCE && isGen2(data)) { doneSet.add(fp); continue; }
    toUpgrade.push(fp);
  }

  // Apply FROM/LIMIT
  toUpgrade = toUpgrade.slice(FROM, FROM + LIMIT);

  console.log(`\n${'='.repeat(60)}`);
  console.log(`ReasonDx Batch Case Upgrader`);
  console.log(`${'='.repeat(60)}`);
  console.log(`Cases to upgrade: ${toUpgrade.length}`);
  console.log(`Already done:     ${doneSet.size}`);
  console.log(`Dry run:          ${DRY_RUN}`);
  if (toUpgrade.length === 0) { console.log('\nAll cases already upgraded!'); return; }
  console.log('');

  let upgraded = 0, failed = 0;
  const startTime = Date.now();

  for (let i = 0; i < toUpgrade.length; i++) {
    const fp   = toUpgrade[i];
    const fname = path.basename(fp);
    const pct  = Math.round(((i+1)/toUpgrade.length)*100);
    const elapsed = Math.round((Date.now()-startTime)/1000);
    const eta  = i > 0 ? Math.round((elapsed/i)*(toUpgrade.length-i)) : '?';

    process.stdout.write(`[${i+1}/${toUpgrade.length}] ${pct}% | ${fname.padEnd(50)} `);

    if (DRY_RUN) { console.log('(dry run)'); continue; }

    global.EMR_DATA = undefined;
    const data = loadCase(fp);
    if (!data) { console.log('✗ load failed'); failed++; continue; }

    const info   = extractInfo(data, fp);
    const prompt = buildPrompt(info);

    try {
      const response = await callAPI(prompt);
      if (!response) throw new Error('empty response');
      const guided = JSON.parse(response);
      if (!guided.patientResponses || !guided.ddxTargets) throw new Error('missing required fields');

      patchCase(fp, guided);
      doneSet.add(fp);
      progress.done.push(fp);
      saveProgress(progress);
      upgraded++;

      const rCount = Object.keys(guided.patientResponses).length;
      const dCount = (guided.ddxTargets||[]).length;
      console.log(`✓ (${rCount}r, ${dCount}dx, eta ${eta}s)`);
    } catch(e) {
      console.log(`✗ ${e.message.slice(0,40)}`);
      progress.failed.push({ file: fname, error: e.message });
      saveProgress(progress);
      failed++;
    }

    // Rate limit
    if (i < toUpgrade.length - 1) await new Promise(r => setTimeout(r, DELAY_MS));
  }

  const totalTime = Math.round((Date.now()-startTime)/1000);
  console.log(`\n${'='.repeat(60)}`);
  console.log(`COMPLETE: ${upgraded} upgraded, ${failed} failed, ${totalTime}s`);
  if (failed > 0) console.log(`Check tests/.upgrade-progress.json for failed cases`);
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
