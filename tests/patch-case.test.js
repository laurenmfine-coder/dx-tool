const fs = require('fs');
const vm = require('vm');
const { execSync } = require('child_process');
const path = require('path');

const { patchCase, isGen2 } = require(path.resolve('tests/batch-upgrade.js'));
if (!patchCase) { console.error('patchCase not found'); process.exit(1); }
if (!isGen2) { console.error('isGen2 not found'); process.exit(1); }

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

// ── isGen2 tests: detect template content vs real AI content ───────────────
run('isGen2 rejects template ddxTargets with placeholder slot names', () => {
  const templateData = {
    guided: {
      supported: true,
      patientResponses: { default:'', onset:'', character:'', location:'', severity:'', aggravating:'', relieving:'', associated:'' },
      ddxTargets: [
        'Acute Myocardial Infarction (correct diagnosis)',
        'Most likely alternative diagnosis',
        'Third differential diagnosis',
        'Must-not-miss diagnosis',
        'Common clinical mimic'
      ],
      biasFlags: { anchoring: 'real stuff' }
    }
  };
  if (isGen2(templateData)) throw new Error('should have rejected template ddxTargets');
});

run('isGen2 rejects template biasFlags referencing "Working diagnosis"', () => {
  const templateData = {
    guided: {
      supported: true,
      patientResponses: { default:'', onset:'', character:'', location:'', severity:'', aggravating:'', relieving:'', associated:'' },
      ddxTargets: ['Real Dx', 'Other Dx', 'Third Dx'],
      biasFlags: { anchoring: 'Students may anchor on Working diagnosis', prematureClosure: 'x', availabilityBias: 'y' }
    }
  };
  if (isGen2(templateData)) throw new Error('should have rejected Working-diagnosis bias flag');
});

run('isGen2 rejects stringified-HPI onset response (template pattern)', () => {
  const templateData = {
    guided: {
      supported: true,
      patientResponses: {
        default: 'x', onset: "'The symptoms started yesterday and were severe.'",
        character:'', location:'', severity:'', aggravating:'', relieving:'', associated:''
      },
      ddxTargets: ['Real Dx', 'Another', 'Third'],
      biasFlags: { anchoring: 'real' }
    }
  };
  if (isGen2(templateData)) throw new Error('should have rejected stringified-HPI onset');
});

run('isGen2 accepts real AI-generated content', () => {
  const realData = {
    guided: {
      supported: true,
      patientResponses: {
        default: 'I\'m not sure what you mean.',
        onset: 'About 2 hours ago while I was watching TV.',
        character: 'A crushing, tight pressure in my chest.',
        location: 'Center of my chest, radiating to my left arm.',
        severity: 'Probably 9 out of 10.',
        aggravating: 'Anything makes it worse.',
        relieving: 'Nothing helps.',
        associated: 'I\'m nauseous and sweating.'
      },
      ddxTargets: [
        'ST-Elevation Myocardial Infarction',
        'Unstable Angina',
        'Aortic Dissection',
        'Pulmonary Embolism',
        'Pericarditis'
      ],
      biasFlags: {
        anchoring: 'Student may anchor on ACS given classic presentation and miss aortic dissection.',
        prematureClosure: 'After ECG shows STEMI, may skip further workup for complications.',
        availabilityBias: 'If recent STEMI cases were all anterior, may miss inferior MI patterns.'
      }
    }
  };
  if (!isGen2(realData)) throw new Error('should have accepted real AI content');
});

console.log('\nAll tests passed ✓');
