/* emr-data/htn-emergency.js — Hypertensive Emergency */
window.CASES = window.CASES || {};
window.CASES['htn-emergency'] = {
  id: 'htn-emergency', name: 'Gloria Patterson', age: '58F', dob: '1967-02-22',
  mrn: 'RDX-2026-52841', setting: 'ED → ICU', category: 'cardiovascular', acuity: 1,
  chiefComplaint: 'BP 228/142 + headache + visual changes + confusion — hypertensive emergency',
  diagnosis: 'Hypertensive Emergency with Hypertensive Encephalopathy',
  presentation: {
    hpi: '58F with known hypertension, ran out of amlodipine 2 weeks ago. BP 228/142 in triage. Severe headache, blurry vision with flashing lights, confusion — unable to name the month. Fundoscopy: papilledema bilaterally, flame hemorrhages. Creatinine 2.4 (baseline 1.1 — acute hypertensive nephropathy). No chest pain, no signs of aortic dissection.',
    pmh: ['Hypertension (poorly controlled)', 'CKD stage 2'], meds: ['Amlodipine (ran out 2 weeks ago)'], allergies: ['NKDA']
  },
  vitals: { BP: '228/142', HR: '92', RR: '18', Temp: '37.0°C', SpO2: '97%', GCS: '13' },
  labs: {
    'BMP': 'Cr 2.4 (H — up from baseline 1.1), Na 138, K 4.8, BUN 42',
    'UA': 'Proteinuria 3+, RBC casts — hypertensive nephropathy',
    'CBC': 'Schistocytes on smear — microangiopathic hemolytic anemia (MAHA) — hypertensive crisis',
    'Troponin': 'Troponin I 0.06 (mildly elevated — demand ischemia)',
    'CT head': 'No hemorrhage. Posterior cerebral white matter hypodensity — PRES (posterior reversible encephalopathy syndrome) pattern.',
    'CXR': 'No aortic widening. Mild pulmonary vascular congestion.'
  },
  orders: {
    correct: [
      { id: 'nicardipine-htn', name: 'Nicardipine 5 mg/hr IV infusion — titrate to MAP reduction', rationale: 'IV nicardipine is first-line for hypertensive emergency — titratable calcium channel blocker. Target: reduce MAP by 10-15% in first hour, then 15-25% over next 2-6h. Do NOT lower BP too fast — cerebral autoregulation is impaired, rapid drop causes ischemic stroke.' },
      { id: 'target-htn', name: 'Target MAP reduction: 10-15% in first hour, 15-25% by 6h, not to normal', rationale: 'The danger in hypertensive emergency is NOT high BP alone — it is too-rapid lowering. Cerebral autoregulation is reset at high pressures. Dropping too fast causes watershed infarcts.' },
      { id: 'icu-htn', name: 'ICU admission — continuous arterial line monitoring', rationale: 'Hypertensive emergency with end-organ damage (PRES, AKI, MAHA) requires continuous arterial BP monitoring in ICU. Cannot use cuff BP — too slow, too variable.' },
      { id: 'neuro-htn', name: 'Neurology consult — PRES pattern on CT', rationale: 'PRES (posterior reversible encephalopathy syndrome) from hypertensive emergency requires neurologic management. MRI brain preferred over CT for PRES diagnosis.' }
    ],
    incorrect: [
      { id: 'sublingual-htn', name: 'Sublingual nifedipine — fast and easy to give', rationale: 'CONTRAINDICATED — sublingual nifedipine causes unpredictable, uncontrollable BP drop → ischemic stroke, MI. Removed from guidelines. Never use sublingual nifedipine for hypertensive emergency.' },
      { id: 'normal-bp', name: 'Lower BP to <140/90 in the first hour', rationale: 'DANGEROUS — target is MAP reduction of 10-25% over several hours, NOT normalization. Aggressive normalization in hypertensive emergency causes watershed infarcts in a brain that has autoregulated at high pressures for years.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Hypertensive emergency = severe hypertension (usually >180/120) WITH end-organ damage: PRES, AKI, MAHA, aortic dissection, MI, stroke. Hypertensive urgency = severe HTN WITHOUT end-organ damage (treat orally, not emergently).',
      'Target MAP reduction: 10-15% in first hour, 15-25% by 6 hours, then gradual normalization over 24-48h. Never normalize rapidly — cerebral autoregulation is reset at high pressures.',
      'Sublingual nifedipine is CONTRAINDICATED — uncontrollable BP drop → ischemic stroke. This is a critical misconception. Use only IV titratable agents.',
      'PRES (posterior reversible encephalopathy syndrome): occipital-parietal white matter vasogenic edema from failure of autoregulation. Reversible with BP control. Seizures and visual changes are common.'
    ],
    boardPearls: [
      'IV agents for hypertensive emergency: nicardipine (first-line, titratable), labetalol (avoid in asthma/HF), nitroprusside (cyanide toxicity with prolonged use), clevidipine (IV CCB), hydralazine (OB — pre-eclampsia).',
      'Aortic dissection hypertensive emergency: target HR <60 AND SBP <120. Esmolol first for HR, then nitroprusside or nicardipine. NEVER give vasodilators alone without beta-blockade (reflex tachycardia worsens shear force).',
      'Ischemic stroke + hypertension: do NOT aggressively lower BP unless >220/120 (permissive hypertension maintains penumbra perfusion) UNLESS giving tPA (require <185/110 before administration).',
      'Cocaine-induced HTN emergency: benzodiazepines first (treat the underlying sympathomimetic syndrome). Avoid beta-blockers (unopposed alpha stimulation worsens coronary vasospasm).'
    ]
  },
  references: [{ id: 'StatPearls-HTNEmergency', title: 'Hypertensive Emergency', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430751/', openAccess: true }]
};
