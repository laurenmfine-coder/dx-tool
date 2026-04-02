window.CASES = window.CASES || {};
window.CASES['afib'] = {
  id: 'afib', name: 'Gerald Simmons', age: '68M', dob: '1957-08-22',
  mrn: 'RDX-2026-54118', setting: 'ED → Cardiology', category: 'cardiovascular', acuity: 2,
  chiefComplaint: 'Palpitations + dyspnea — HR 148 irregular, new-onset atrial fibrillation',
  diagnosis: 'New-Onset Atrial Fibrillation with Rapid Ventricular Response',
  presentation: {
    hpi: '68M with HTN and DM2, no prior cardiac history. 6 hours of palpitations, dyspnea, and mild chest tightness. ECG: irregularly irregular rhythm, no P waves, fibrillatory baseline, HR 148. BP 136/84. No hemodynamic compromise.',
    pmh: ['HTN','DM2'], meds: ['Lisinopril','Metformin'], allergies: ['NKDA']
  },
  vitals: { BP: '136/84', HR: '148 (irregularly irregular)', RR: '20', Temp: '37.0°C', SpO2: '96%' },
  labs: {
    'ECG': 'Irregularly irregular, absent P waves, fibrillatory baseline, HR 148 — ATRIAL FIBRILLATION',
    'TSH': '1.2 (normal — thyrotoxicosis excluded)',
    'BMP': 'K 4.1, Mg 1.8, Cr 1.1 — normal',
    'Troponin': '0.02 (normal — ACS excluded)',
    'Echo': 'Normal LV function, no thrombus (TEE not yet done)'
  },
  orders: {
    correct: [
      { id: 'rate-control-afib', name: 'Metoprolol tartrate 5mg IV q5min (max 15mg) — rate control target HR <110', rationale: 'Rate control is first-line for new-onset AF with rapid ventricular response when hemodynamically stable. Target HR <110 bpm at rest. Beta-blockers (metoprolol) or non-DHP CCBs (diltiazem) are first-line. Avoid digoxin as sole agent — slow onset, less effective.' },
      { id: 'anticoag-afib', name: 'Anticoagulation — CHA₂DS₂-VASc score 3 (age ≥65, HTN, DM) → start anticoagulation', rationale: 'CHA₂DS₂-VASc: C=0, H=1 (HTN), A2=1 (age 65-74), D=1 (DM), S2=0, V=0, A=0, Sc=0 → score 3 → annual stroke risk ~3.2% → anticoagulation indicated. Use DOAC (apixaban preferred — ARISTOTLE showed superiority to warfarin with less bleeding). Start after confirming no contraindications.' },
      { id: 'cardioversion-afib', name: 'Rhythm control discussion — cardioversion if symptoms persist after rate control', rationale: 'For new-onset AF <48h (or TEE-confirmed no thrombus): electrical cardioversion (synchronized 200J biphasic) is an option for rhythm control. EAST-AFNET4: early rhythm control reduces cardiovascular outcomes. For AF >48h or unknown duration: anticoagulate ≥3 weeks before cardioversion OR TEE-guided cardioversion.' }
    ],
    incorrect: [
      { id: 'digoxin-afib', name: 'Digoxin 0.5mg IV — rate control', rationale: 'Digoxin has slow onset and poor rate control during exercise/stress states. Reserve for rate control in heart failure with reduced EF when beta-blockers are not tolerated. Not first-line for new-onset AF.' },
      { id: 'cardioversion-no-anticoag', name: 'Immediate cardioversion — restore sinus rhythm now', rationale: 'Cardioversion without anticoagulation for AF >48h or unknown duration risks stroke from dislodging atrial thrombus. Anticoagulate for ≥3 weeks before elective cardioversion, or perform TEE to exclude thrombus first.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'CHA₂DS₂-VASc score drives anticoagulation decision: ≥2 in men, ≥3 in women → anticoagulate. DOACs (apixaban, rivaroxaban, dabigatran, edoxaban) preferred over warfarin for non-valvular AF.',
      'Rate control target: HR <110 at rest for most patients (RACE II). Rate vs rhythm control — neither strategy superior in asymptomatic/mildly symptomatic patients (AFFIRM), but early rhythm control may reduce cardiovascular events (EAST-AFNET4).',
      'Cardioversion timing: <48h duration (or TEE-confirmed no thrombus) → cardioversion safe. >48h or unknown → anticoagulate ≥3 weeks first OR TEE-guided.'
    ],
    boardPearls: [
      'Lone AF (young patient, no risk factors, structurally normal heart): low stroke risk, anticoagulation decision individualized.',
      'AF in hyperthyroidism: treat thyroid disease first — AF often converts spontaneously. Beta-blockers for rate control.',
      'WPW + AF: NEVER give AV nodal blockers (adenosine, diltiazem, verapamil, digoxin) — can accelerate conduction down accessory pathway → VF. Use procainamide or ibutilide. Cardioversion if unstable.',
      'Valvular AF (rheumatic mitral stenosis, mechanical valve): warfarin ONLY — DOACs are contraindicated.'
    ]
  },
  references: [{ id: 'StatPearls-AFib', title: 'Atrial Fibrillation', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK526072/', openAccess: true }]
};
