#!/usr/bin/env node
/**
 * Apply the 95 chief-complaint rewrites approved in clusters 1–13.
 *
 * Background: The initial pass removed pathognomonic buzzwords from 15
 * chief complaints (commit 2ac6945c). A follow-up audit found 95 more
 * cases with generic/weak one-word CCs ("Syncope", "Chest Pain",
 * "Cardiac Emergency", etc.) that were either triage-category labels
 * in the wrong field or pedagogically uninformative. These rewrites
 * put every CC into single-symptom patient-voice (with brief context
 * where clinically appropriate), sentence-case throughout.
 *
 * This script should be run AFTER the batch EMR upgrade finishes, to
 * avoid race conditions with that script writing to the same files.
 *
 * Usage:
 *   node tests/apply-cc-rewrites.js            # apply all 95
 *   node tests/apply-cc-rewrites.js --dry-run  # show what would change
 */
'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const ROOT = path.resolve(__dirname, '..');

// Each entry: [slug, newCC]
const REWRITES = [
  // Cluster 1 — Abdominal Pain
  ['crohn-flare',                      'Worsening belly pain and diarrhea for 2 weeks'],
  ['mesenteric-lymphadenitis',         'Right lower belly pain after a cold'],
  ['ovarian-pathology',                'Sudden severe pelvic pain'],
  ['renal-colic',                      'Severe flank pain'],
  ['ruptured-aaa',                     'Sudden severe belly and back pain'],
  ['ureterolithiasis',                 'Severe flank pain'],

  // Cluster 2 — Altered Mental Status
  ['acute-ischemic-stroke',            'Sudden confusion and weakness on one side'],
  ['alcoholic-ketoacidosis',           'Confusion and vomiting after heavy drinking'],
  ['complex-migraine',                 'Sudden confusion and weakness'],
  ['hemorrhagic-stroke',               'Sudden severe headache and confusion'],
  ['hypoglycemia',                     'Found confused and sweaty this morning'],
  ['todd-paralysis',                   'Confused after what looked like a seizure'],
  ['toxic-ingestion',                  'Found unresponsive next to empty pill bottle'],

  // Cluster 3 — Cardiac Emergency
  ['acute-mi-with-av-block',           'Chest pain and lightheadedness'],
  ['complete-heart-block-v2',          'Fatigue and near-fainting episodes'],
  ['druginduced-av-block',             'Nausea and feeling slow for a week'],
  ['infiltrative-cardiomyopathy',      'Worsening shortness of breath on exertion'],
  ['lyme-carditis',                    'Feeling lightheaded and short of breath'],
  ['massive-pe-with-rv-failure',       'Sudden shortness of breath and chest tightness'],
  ['superior-vena-cava-syndrome',      'Face and arm swelling for 3 weeks'],

  // Cluster 4 — Chest Pain
  ['musculoskeletal',                  'Chest pain'],
  ['myocarditis',                      'Chest pain and fatigue'],
  ['nstemiunstable-angina',            'Recurring chest pressure'],
  ['takotsubo-cardiomyopathy',         'Chest pain'],
  ['type-2-mi',                        'Chest discomfort and fatigue'],
  ['unstable-angina',                  'Chest pain'],

  // Cluster 5 — Endocrine Emergency
  ['hyperkalemic-cardiac-emergency',   'Weakness and feeling sick for days'],
  ['hypovolemic-shock-from-gastroenteritis', 'Vomiting and diarrhea for 2 days'],
  ['myxedema-coma',                    'Found lethargic and cold at home'],
  ['pheochromocytoma',                 'Recurring episodes of sweating and palpitations'],

  // Cluster 6 — Fever/Sepsis
  ['bacterial-meningitis',             'Fever and severe headache'],
  ['cap-with-sepsis',                  'Fever and cough for 3 days'],
  ['neutropenic-fever',                'Fever during chemotherapy'],
  ['pyelonephritis-urosepsis',         'Fever and feeling confused'],
  ['spontaneous-bacterial-peritonitis','Fever and belly swelling'],
  ['tick-borne-illness',               'Fever and body aches for a week'],

  // Cluster 7 — Headache
  ['brain-abscess',                    'Headache and fever for a week'],
  ['cervical-artery-dissection',       'Headache and neck pain after chiropractic visit'],
  ['encephalitis',                     'Headache and fever'],
  ['hypertensive-emergency',           'Headache and feeling unwell'],
  ['migraine',                         'Recurring severe headaches'],
  ['viral-meningitis',                 'Headache, fever, and neck stiffness'],

  // Cluster 8 — Psychiatric Emergency (not actually psychiatric)
  ['anticholinergic-toxicity',         'Agitation and confusion'],
  ['lethal-catatonia',                 'Fever and rigid muscles'],
  ['malignant-hyperthermia',           'High fever after surgery'],
  ['sepsis-with-rigidity',             'Fever and severe stiffness'],
  ['sympathomimetic-toxicity',         'Agitation and racing heart'],

  // Cluster 9 — Renal / Electrolyte Emergency
  ['adrenal-insufficiency',            'Weakness and feeling sick for weeks'],
  ['cerebral-salt-wasting',            'Weakness and confusion during hospital recovery'],
  ['hyperkalemia-with-concurrent-acs', 'Weakness and chest pressure'],
  ['hypothyroidismrelated-hyponatremia','Fatigue and confusion for weeks'],
  ['medication-overdose',              'Weakness after medication changes'],
  ['psychogenic-polydipsia',           'Seizure after drinking a lot of water'],
  ['rhabdomyolysisinduced-hyperkalemia','Severe muscle pain after intense exercise'],
  ['severe-hyperkalemia-from-missed-dialysis', 'Weakness after missing dialysis'],
  ['siadh',                            'New confusion and fatigue'],
  ['thiazideinduced-hyponatremia',     'Dizziness and feeling off'],

  // Cluster 10 — Seizure
  ['alcohol-withdrawal-seizures',      'Seizure after stopping drinking'],
  ['brain-metastasis',                 'First-ever seizure at home'],
  ['cns-infection',                    'Seizure with fever'],
  ['cns-lymphoma',                     'Seizure and confusion for weeks'],
  ['meningioma',                       'First-ever seizure'],
  ['metabolic',                        'Seizure found down at home'],
  ['primary-brain-tumor',              'First seizure'],
  ['structural-lesion',                'Sudden seizure'],

  // Cluster 11 — Shortness of breath (sentence case)
  ['acute-coronary-syndrome',          'Shortness of breath on exertion'],
  ['acute-mi-dyspnea',                 'Shortness of breath'],
  ['acute-mi',                         'Shortness of breath and can\'t lie flat'],
  ['anxiety-panic-attack',             'Shortness of breath'],
  ['anxietypanic-attack',              'Shortness of breath'],
  ['chf-exacerbation-v2',              'Shortness of breath and leg swelling'],
  ['lung-cancer-post-obstructive',     'Shortness of breath and persistent cough'],
  ['lung-cancer-with-postobstructive-process', 'Shortness of breath and persistent cough'],
  ['pneumonia-on-copd-v2',             'Worse shortness of breath than usual'],
  ['pneumonia-on-copd',                'Worse shortness of breath than usual'],
  ['pneumonia-v2',                     'Shortness of breath and cough'],
  ['pneumonia',                        'Shortness of breath and cough'],
  ['pneumothorax',                     'Sudden shortness of breath'],
  // pe-v1 was already set to "Shortness of breath" in commit 2ac6945c — skip here

  // Cluster 12 — Syncope
  ['cardiac-syncope',                  'Passed out while walking upstairs'],
  ['gastric-malignancy',               'Passed out at home'],
  ['hcm',                              'Passed out while exercising'],
  ['long-qt-syndrome',                 'Passed out after feeling my heart race'],
  ['orthostatic-hypotension',          'Passed out standing up'],
  ['pulmonary-embolism-syncope',       'Passed out after feeling short of breath'],
  ['vasovagal-syncope',                'Passed out at the doctor\'s office'],
  ['wpw-syndrome',                     'Passed out after feeling my heart pounding'],

  // Cluster 13 — Vascular Emergency
  ['acute-embolic-limb-ischemia',      'Sudden severe leg pain'],
  ['acute-pancreatitis',               'Severe upper belly pain'],
  ['acute-sma-embolism',               'Sudden severe belly pain'],
  ['acute-sma-thrombosis',             'Worsening belly pain after meals'],
  ['acute-thrombotic-occlusion',       'Sudden severe leg pain'],
  ['aortic-saddle-embolus',            'Sudden severe pain in both legs'],
  ['nonocclusive-mesenteric-ischemia', 'Severe belly pain in the ICU'],
  ['phlegmasia-cerulea-dolens',        'Severe leg pain and swelling'],
];

console.log('\n' + '='.repeat(60));
console.log('Chief Complaint Rewrite Application');
console.log('='.repeat(60));
console.log('Total rewrites: ' + REWRITES.length);
console.log('Dry run:        ' + DRY_RUN);
console.log('');

let ok = 0, fail = 0, unchanged = 0;
for (const [slug, newCC] of REWRITES) {
  const fp = path.join(ROOT, 'emr-data', slug + '.js');
  if (!fs.existsSync(fp)) {
    console.log('  MISS ' + slug + ' — file does not exist');
    fail++;
    continue;
  }

  const original = fs.readFileSync(fp, 'utf8');
  const sandbox = { window: {} };
  try { vm.runInNewContext(original, sandbox, { filename: fp }); }
  catch (e) { console.log('  SKIP ' + slug + ' — parse error: ' + e.message); fail++; continue; }

  const data = sandbox.window.EMR_DATA;
  if (!data || !data.patient) { console.log('  SKIP ' + slug + ' — no patient'); fail++; continue; }

  const oldCC = data.patient.chiefComplaint;
  if (oldCC === newCC) {
    console.log('  -    ' + slug.padEnd(44) + ' | already: "' + newCC + '"');
    unchanged++;
    continue;
  }

  data.patient.chiefComplaint = newCC;

  const marker = original.search(/window\s*\.\s*EMR_DATA\s*=/);
  const preamble = marker > 0 ? original.slice(0, marker) : '';
  const output = preamble + 'window.EMR_DATA = ' + JSON.stringify(data, null, 2) + ';\n';

  // Syntax check before writing
  try { new vm.Script(output, { filename: fp + ' (post-patch)' }); }
  catch (e) { console.log('  FAIL ' + slug + ' — syntax: ' + e.message); fail++; continue; }

  if (!DRY_RUN) {
    const tmp = fp + '.tmp';
    fs.writeFileSync(tmp, output, 'utf8');
    fs.renameSync(tmp, fp);
  }

  const oldSnippet = (oldCC || '').slice(0, 40);
  console.log('  ' + (DRY_RUN ? '[dry]' : '  ✓  ') + ' ' + slug.padEnd(40) + ' | "' + oldSnippet + '..." → "' + newCC + '"');
  ok++;
}

console.log('');
console.log('='.repeat(60));
console.log('Updated:   ' + ok);
console.log('Unchanged: ' + unchanged);
console.log('Failed:    ' + fail);
if (DRY_RUN) console.log('\n(dry run — no files were written)');
