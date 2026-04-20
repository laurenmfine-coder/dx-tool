'use strict';
/**
 * ReasonDx Platform Audit
 * Checks all major HTML pages and JS modules for structural issues.
 * Run: node tests/platform-audit.js
 */
const fs   = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

let pass=0, fail=0, warn=0;
const FAILS=[], WARNS=[];
function P(f,m){ pass++; }
function F(f,m){ fail++; FAILS.push('['+path.basename(f)+'] '+m); }
function W(f,m){ warn++; WARNS.push('['+path.basename(f)+'] '+m); }

// ── 1. Key HTML pages exist ──────────────────────────────────────────────
const KEY_PAGES = [
  'virtual-emr.html','browse.html','simulation-engine.html',
  'casedx.html','faculty-dashboard.html','admissions.html',
  'choose-mode.html','analytics-dashboard.html'
];
console.log('\n[1] Key HTML pages exist');
KEY_PAGES.forEach(p => {
  const fp = path.join(root, p);
  if (fs.existsSync(fp)) { P(fp,'exists'); console.log('  ✓ '+p+' ('+Math.round(fs.statSync(fp).size/1024)+'KB)'); }
  else { F(fp,'MISSING page: '+p); console.log('  ✗ '+p+' MISSING'); }
});

// ── 2. Key JS modules exist ──────────────────────────────────────────────
const KEY_SCRIPTS = [
  'js/mission-control.js','js/ddx-builder.js','js/exam-builder.js',
  'js/ddx-checkpoints.js','js/rdx-guide.js','js/rdx-integration.js'
];
console.log('\n[2] Key JS modules exist');
KEY_SCRIPTS.forEach(s => {
  const fp = path.join(root, s);
  if (fs.existsSync(fp)) {
    // Node syntax check
    try {
      require('child_process').execSync('node --check "'+fp+'"', {stdio:'pipe'});
      P(fp,'valid'); console.log('  ✓ '+s);
    } catch(e) { F(fp,'SYNTAX ERROR: '+e.stderr.toString().split('\n')[0]); }
  } else { F(fp,'MISSING: '+s); console.log('  ✗ MISSING: '+s); }
});

// ── 3. virtual-emr.html structural checks ───────────────────────────────
console.log('\n[3] virtual-emr.html structural checks');
const emrPath = path.join(root,'virtual-emr.html');
if (fs.existsSync(emrPath)) {
  const emr = fs.readFileSync(emrPath,'utf8');

  const checks = [
    ['Mission card',              'renderMissionCard'],
    ['Case complete screen',      'renderCaseComplete'],
    ['DDx checkpoints wired',     'DDxCheckpoints.render'],
    ['Patient interview',         'renderPatientInterview'],
    ['Documentation render',      'renderDocumentation'],
    ['Orders render',             'renderOrders'],
    ['AI feedback render',        'renderAutoFeedback'],
    ['Oral presentation',         'renderOralPresentation'],
    ['Submit function',           'function submitDoc'],
    ['Run analysis function',     'function runDocAnalysis'],
    ['Step unlock hints',         '_STEP_UNLOCK_HINTS'],
    ['Completion-based unlock',   '_unlockedStepIdx'],
    ['Results context panel',     '_resultsPanel'],
    ['No orders warning',         'No orders placed yet'],
    ['Bottom submit CTA',         'Submit & Get AI Feedback'],
    ['Null guard: renderOrders',  'S.labOrders     = S.labOrders     ||'],
    ['Null guard: renderAutoFb',  'if (!window.S || !S.currentUser)'],
    ['Case data context in AI',   '_caseCtxStr'],
    ['STEMI EXPECTED terms',      "cc_terms: [\"chest pain\""],
    ['Anthropic API call',        'api.anthropic.com/v1/messages'],
    ['ddx-checkpoints.js loaded', 'ddx-checkpoints.js'],

    ['FH/SH DDx prompt',          'Form Initial DDx'],
    ['Done interviewing CTA',     'Done with the interview'],
  ];

  // Additional direct checks
  const expectedBlock = emr.slice(emr.indexOf('const EXPECTED = {'), emr.indexOf('window.EXPECTED = EXPECTED'));
  if (!expectedBlock.includes('follow-up')) { P(emrPath,'EXPECTED: no clinic terms'); console.log('  ✓ EXPECTED: no clinic patient terms'); }
  else { F(emrPath,'EXPECTED still has clinic terms'); console.log('  ✗ EXPECTED has clinic terms'); }
  if (!emr.includes('RDXGuide.renderNudgeStrip()')) { P(emrPath,'Nudge strip not called in render'); console.log('  ✓ Nudge strip not called in render'); }
  else { F(emrPath,'Nudge strip still called in render'); console.log('  ✗ Nudge strip still in render'); }

  checks.forEach(([label, search]) => {
    const isNegative = search.includes(' not in emr');
    const actualSearch = isNegative ? search.replace(' not in emr','') : search;
    const found = emr.includes(actualSearch);
    const ok = isNegative ? !found : found;
    if (ok) { P(emrPath,label); console.log('  ✓ '+label); }
    else { F(emrPath,label+(isNegative?' still present':' MISSING')); console.log('  ✗ '+label); }
  });

  // Size check — warn if unreasonably large
  const sizeKB = Math.round(fs.statSync(emrPath).size/1024);
  if (sizeKB > 2000) W(emrPath,'very large: '+sizeKB+'KB — consider splitting');
  else P(emrPath,'size OK: '+sizeKB+'KB'); 
  console.log('  ℹ size: '+sizeKB+'KB');
}

// ── 4. EMR case data spot checks ─────────────────────────────────────────
console.log('\n[4] Key EMR cases validate');
const KEY_CASES = ['stemi-v1','sepsisseptic-shock','pe-v1','acute-aortic-dissection','chf-exacerbation'];
KEY_CASES.forEach(cid => {
  const fp = path.join(root,'emr-data',cid+'.js');
  if (!fs.existsSync(fp)) { W(fp,'case file missing: '+cid); return; }
  global.EMR_DATA = undefined; global.window = global;
  try {
    eval(fs.readFileSync(fp,'utf8'));
    const d = global.EMR_DATA;
    if (!d) { F(fp,'EMR_DATA not defined'); return; }
    const issues = [];
    if (!d.patient?.chiefComplaint) issues.push('no chiefComplaint');
    if (!d.meta?.diagnosis)         issues.push('no meta.diagnosis');
    if (!d.vitals?.length)          issues.push('no vitals');
    if (!d.guided?.supported)       issues.push('guided not supported');
    if (issues.length) { W(fp,cid+': '+issues.join(', ')); console.log('  🟡 '+cid+' — '+issues.join(', ')); }
    else { P(fp,cid+' OK'); console.log('  ✓ '+cid); }
  } catch(e) { F(fp,cid+' parse error: '+e.message); }
});

// ── 4b. CRT index coverage (missing case JS files) ──────────────────────
console.log('\n[4b] CRT index coverage');
const crtIdxPath = path.join(root,'emr-data','crt-index.js');
if (fs.existsSync(crtIdxPath)) {
  try {
    const crtSrc = fs.readFileSync(crtIdxPath,'utf8');
    const crtData = JSON.parse(crtSrc.match(/window\.CRT_INDEX\s*=\s*(\{[\s\S]+\});/)[1]);
    const emrDir = path.join(root,'emr-data');
    const nonCaseFiles = new Set(['crt-index','case-tokens','manifest','patient-names',
      'case-specialty-map','handoff-data','auto-handoff','day-progression',
      'day-evolution','coachdx-analytics','crt-data','dx-database','rdx-case-results']);
    const existingFiles = new Set(fs.readdirSync(emrDir)
      .filter(f=>f.endsWith('.js')).map(f=>f.replace('.js','')));
    const allSlugs = Object.keys(crtData);
    const missingSlugs = allSlugs.filter(s => !existingFiles.has(s));
    const coverage = allSlugs.length - missingSlugs.length;
    console.log(`  CRT entries: ${allSlugs.length}, case files: ${coverage}, missing: ${missingSlugs.length}`);
    if (missingSlugs.length === 0) {
      P(crtIdxPath, 'all CRT cases have JS files'); console.log('  ✓ all cases have JS files');
    } else {
      // Warn, not fail — missing files are work in progress, not regressions
      const byProf = {};
      missingSlugs.forEach(s => { const p=crtData[s].profession||'unknown'; byProf[p]=(byProf[p]||0)+1; });
      const profSummary = Object.entries(byProf).sort((a,b)=>b[1]-a[1]).map(([p,n])=>`${p}:${n}`).join(', ');
      W(crtIdxPath, `${missingSlugs.length} CRT slugs missing JS files — ${profSummary}`);
      console.log(`  🟡 ${missingSlugs.length} cases in index have no JS file (${profSummary})`);
    }
    P(crtIdxPath, `coverage: ${coverage}/${allSlugs.length}`);
  } catch(e) { W(crtIdxPath, 'CRT coverage check failed: '+e.message); }
} else { W(crtIdxPath, 'crt-index.js not found'); }

// ── 5. node-test.js passes ───────────────────────────────────────────────
console.log('\n[5] Core unit tests (node-test.js)');
const nodeTestPath = path.join(root,'node-test.js');
if (fs.existsSync(nodeTestPath)) {
  try {
    const result = require('child_process').execSync('node "'+nodeTestPath+'"',{stdio:'pipe',timeout:10000});
    const out = result.toString();
    const m = out.match(/TOTAL: (\d+) pass, (\d+) fail/);
    if (m && parseInt(m[2]) === 0) {
      P(nodeTestPath,'unit tests: '+m[1]+'/'+m[1]+' pass');
      console.log('  ✓ '+m[1]+'/'+m[1]+' unit tests pass');
    } else {
      F(nodeTestPath,'unit tests failing: '+(m?m[0]:'unknown result'));
    }
  } catch(e) { F(nodeTestPath,'unit test runner failed'); }
} else { W(nodeTestPath,'node-test.js not found'); }

// ── 6. Opaque case-ID token system ───────────────────────────────────────
console.log('\n[6] Token system (case-tokens.js)');
const crypto = require('crypto');
const tokensPath = path.join(root,'emr-data','case-tokens.js');
const crtPath    = path.join(root,'emr-data','crt-index.js');
if (!fs.existsSync(tokensPath)) {
  F(tokensPath,'emr-data/case-tokens.js missing');
} else {
  try {
    const tokSrc  = fs.readFileSync(tokensPath,'utf8');
    const tokData = JSON.parse(tokSrc.match(/window\.RDX_CASE_TOKENS\s*=\s*(\{[\s\S]+\});/)[1]);
    const s2t = tokData.slugToToken, t2s = tokData.tokenToSlug;
    const slugs = Object.keys(s2t), tokens = Object.values(s2t);

    // a. Collision-free
    if (new Set(tokens).size !== tokens.length)
      F(tokensPath,'token collisions detected'); 
    else { P(tokensPath,'no collisions'); console.log('  ✓ no collisions ('+slugs.length+' tokens)'); }

    // b. Bidirectional consistency
    const bad = slugs.filter(s => t2s[s2t[s]] !== s);
    if (bad.length) F(tokensPath,'bidirectional mismatch: '+bad.slice(0,3).join(', '));
    else { P(tokensPath,'bidirectional OK'); console.log('  ✓ bidirectional maps consistent'); }

    // c. All CRT slugs have tokens
    if (fs.existsSync(crtPath)) {
      const crtData = JSON.parse(fs.readFileSync(crtPath,'utf8')
        .match(/window\.CRT_INDEX\s*=\s*(\{[\s\S]+\});/)[1]);
      const missing = Object.keys(crtData).filter(s => !s2t[s]);
      if (missing.length)
        F(tokensPath,'CRT slugs missing tokens: '+missing.slice(0,5).join(', '));
      else { P(tokensPath,'all CRT slugs tokenised'); console.log('  ✓ all '+Object.keys(crtData).length+' CRT slugs have tokens'); }
    }

    // d. Token format correct (4-dash-4 hex)
    const malformed = tokens.filter(t => !/^[a-f0-9]{4}-[a-f0-9]{4}$/.test(t));
    if (malformed.length) F(tokensPath,'malformed tokens: '+malformed.slice(0,3).join(', '));
    else { P(tokensPath,'token format OK'); console.log('  ✓ all tokens 4-dash-4 hex format'); }

    // e. Determinism spot-check (10 slugs)
    const SALT = 'rdx-v1-2026';
    function rederive(slug){ const h=crypto.createHmac('sha256',SALT).update(slug).digest('hex'); return h.slice(0,4)+'-'+h.slice(4,8); }
    const sample = slugs.slice(0,5).concat(slugs.slice(-5));
    const driftSlugs = sample.filter(s => rederive(s) !== s2t[s]);
    if (driftSlugs.length) F(tokensPath,'token drift (salt changed?): '+driftSlugs.join(', '));
    else { P(tokensPath,'tokens deterministic'); console.log('  ✓ determinism check passed (10 spot samples)'); }

    // f. No unguarded ?case= leaks in key entry-point files
    const entryPoints = ['virtual-emr.html','browse.html','simulation-engine.html',
      'casedx.html','welcome.html','index.html','crt-hub.html','dashboard.html'];
    let leakCount = 0;
    for (const ep of entryPoints) {
      const epPath = path.join(root,ep);
      if (!fs.existsSync(epPath)) continue;
      const epSrc = fs.readFileSync(epPath,'utf8');
      // An unguarded leak = ?case= present on a line that has no RDX_CASE_TOKENS
      // and is not a fallback ternary branch and is not the resolver itself
      const lines = epSrc.split('\n');
      for (const line of lines) {
        if (!line.includes('virtual-emr.html') || !line.includes('?case=')) continue;
        if (line.includes('RDX_CASE_TOKENS')) continue;  // guarded
        if (line.includes("'?case='") || line.includes('"?case="')) continue; // string literal / ternary rhs
        if (line.includes('defaultCase') || line.includes('CASE_ID')) continue; // internal resolver
        if (line.includes('return=virtual-emr')) continue; // return-URL param
        leakCount++;
        W(epPath, ep+': possible unguarded ?case= — '+line.trim().slice(0,80));
      }
    }
    if (!leakCount) { P(tokensPath,'no unguarded ?case= leaks'); console.log('  ✓ no unguarded ?case= leaks in entry-point files'); }

  } catch(e) { F(tokensPath,'token audit error: '+e.message); }
}

// ── Summary ───────────────────────────────────────────────────────────────
console.log('\n'+'='.repeat(55));
console.log('PLATFORM AUDIT: '+pass+' pass, '+warn+' warn, '+fail+' fail');
if (fail) { console.log('\n🔴 FAILURES:'); FAILS.forEach(f=>console.log('  '+f)); }
if (warn) { console.log('\n🟡 WARNINGS:'); WARNS.forEach(w=>console.log('  '+w)); }
process.exit(fail > 0 ? 1 : 0);
