const fs = require('fs');
const vm = require('vm');
const { execSync } = require('child_process');
const path = require('path');

const { patchCase } = require(path.resolve('tests/batch-upgrade.js'));
if (!patchCase) { console.error('patchCase not found'); process.exit(1); }

const baseGuided = {
  supported: true, patientPersona: "Test persona",
  patientResponses: { default: "test", onset: "yesterday" },
  examManeuvers: ["abd exam"], examFindings: { "abd exam": "soft" },
  ddxTargets: ["dx1", "dx2", "dx3"],
  biasFlags: { anchoring: "x", prematureClosure: "y", availabilityBias: "z" },
  coachPrompts: { phase2: "p2", phase5: "p5", finalDebrief: "fd" }
};

function run(name, fn) {
  try { fn(); console.log('PASS:', name); }
  catch (e) { console.error('FAIL:', name, '—', e.message); process.exit(1); }
}

run('clean case → guided added, syntax valid, preamble preserved', () => {
  const clean = `/* emr-data/test.js — Test */\nwindow.EMR_DATA = {\n  "patient": { "name": "Test Patient" },\n  "problems": []\n};\n`;
  fs.writeFileSync('/tmp/test-clean.js', clean);
  patchCase('/tmp/test-clean.js', baseGuided);
  execSync('node --check /tmp/test-clean.js');
  const sb = { window: {} };
  vm.runInNewContext(fs.readFileSync('/tmp/test-clean.js','utf8'), sb);
  if (!sb.window.EMR_DATA.guided?.patientPersona) throw new Error('guided missing');
  if (sb.window.EMR_DATA.patient.name !== 'Test Patient') throw new Error('patient data lost');
  if (!fs.readFileSync('/tmp/test-clean.js','utf8').startsWith('/* emr-data/test.js')) throw new Error('preamble lost');
});

run('broken case → rejected, file untouched', () => {
  const broken = `window.EMR_DATA = { "patient": {} }\n,\n  "guided": {}\n};\n`;
  fs.writeFileSync('/tmp/test-broken.js', broken);
  const before = fs.readFileSync('/tmp/test-broken.js', 'utf8');
  let threw = false;
  try { patchCase('/tmp/test-broken.js', baseGuided); }
  catch (e) { threw = true; }
  if (!threw) throw new Error('should have thrown');
  const after = fs.readFileSync('/tmp/test-broken.js', 'utf8');
  if (after !== before) throw new Error('file was modified despite error');
});

run('re-run on upgraded case → replaces cleanly, no duplication', () => {
  const updated = { ...baseGuided, patientPersona: 'UPDATED' };
  patchCase('/tmp/test-clean.js', updated);
  execSync('node --check /tmp/test-clean.js');
  const sb = { window: {} };
  vm.runInNewContext(fs.readFileSync('/tmp/test-clean.js','utf8'), sb);
  if (sb.window.EMR_DATA.guided.patientPersona !== 'UPDATED') throw new Error('update not applied');
  const n = (fs.readFileSync('/tmp/test-clean.js','utf8').match(/"guided":/g) || []).length;
  if (n !== 1) throw new Error('expected 1 guided key, got ' + n);
});

run('real pre-upgrade case from git → patched correctly', () => {
  execSync('git show HEAD~1:emr-data/aaa-v1.js > /tmp/test-real.js', { shell: '/bin/bash' });
  patchCase('/tmp/test-real.js', baseGuided);
  execSync('node --check /tmp/test-real.js');
  const sb = { window: {} };
  vm.runInNewContext(fs.readFileSync('/tmp/test-real.js','utf8'), sb);
  if (!sb.window.EMR_DATA.guided) throw new Error('guided not attached');
  if (sb.window.EMR_DATA.patient.name !== 'Harold Jensen') throw new Error('patient data lost');
  if (!sb.window.EMR_DATA.vitals?.[0]) throw new Error('vitals lost');
});

console.log('\nAll tests passed ✓');
