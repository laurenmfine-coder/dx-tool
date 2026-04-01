/* emr-data/svt-wpw.js — SVT vs WPW Pre-excited AF */
window.CASES = window.CASES || {};
window.CASES['svt-wpw'] = {
  id: 'svt-wpw', name: 'Natalie Chen', age: '27F', dob: '1998-04-17',
  mrn: 'RDX-2026-28774', setting: 'ED → Cardiology', category: 'cardiovascular', acuity: 2,
  chiefComplaint: 'Palpitations, dizziness, HR 214 — irregular wide complex tachycardia on monitor',
  diagnosis: 'Pre-excited Atrial Fibrillation in Wolff-Parkinson-White Syndrome',
  presentation: {
    hpi: '27F with episodic palpitations for 2 years. Presents with 4h of rapid palpitations, dizziness. HR 214 on monitor. ECG shows irregularly irregular wide complex tachycardia — this is PRE-EXCITED AF (AF conducting down an accessory pathway) not VT. Prior ECG (seen at bottom of chart) shows delta waves and short PR interval = WPW syndrome confirmed.',
    pmh: ['WPW syndrome — known but untreated', 'Prior SVT episodes that self-terminated'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '102/68', HR: '214 (irregular)', RR: '22', Temp: '37.0°C', SpO2: '96%' },
  labs: {
    'ECG (during tachycardia)': 'Irregularly IRREGULAR wide complex tachycardia at 214 bpm. Delta waves visible in some beats. Variable RR intervals. This is PRE-EXCITED AF — NOT VT.',
    'Prior ECG (baseline)': 'Short PR interval <120ms, delta waves (slurred upstroke of QRS), wide QRS = WPW pattern confirmed.',
    'Troponin': '0.02 (normal — no ACS)',
    'TSH': 'Normal — no thyroid trigger',
    'BMP': 'Normal'
  },
  orders: {
    correct: [
      { id: 'procainamide-wpw', name: 'Procainamide 15-17 mg/kg IV over 60 min — drug of choice for hemodynamically stable pre-excited AF', rationale: 'Procainamide blocks the accessory pathway and slows conduction. It is the drug of choice for pre-excited AF (WPW + AF). It can convert the rhythm AND slow ventricular rate safely. Ibutilide is an alternative.' },
      { id: 'cardioversion-wpw', name: 'Synchronized cardioversion if hemodynamically unstable', rationale: 'If the patient develops hypotension, chest pain, or altered consciousness → immediate synchronized cardioversion 200J. Do not delay for drugs in unstable pre-excited AF.' },
      { id: 'cardiology-wpw', name: 'Electrophysiology study + catheter ablation after stabilization', rationale: 'WPW with documented pre-excited AF = high-risk WPW. Accessory pathway ablation is curative and eliminates risk of sudden cardiac death (SCD). EP study is mandatory.' }
    ],
    incorrect: [
      { id: 'adenosine-wpw', name: 'Adenosine — HR is regular enough, probably AVNRT', rationale: 'CONTRAINDICATED in pre-excited AF. Adenosine blocks the AV node, forcing ALL conduction down the accessory pathway → extremely rapid ventricular rate → VF → cardiac arrest. This is a life-threatening error. Adenosine is fine for AVNRT (narrow complex, regular) but NEVER for pre-excited AF.' },
      { id: 'verapamil-wpw', name: 'Diltiazem/verapamil to slow the rate', rationale: 'CONTRAINDICATED in pre-excited AF — same mechanism as adenosine. Calcium channel blockers and beta-blockers block the AV node, accelerate conduction through the accessory pathway → VF. Never use AV nodal blockers in WPW with pre-excited AF.' },
      { id: 'digoxin-wpw', name: 'Digoxin for rate control in this young woman with AF', rationale: 'CONTRAINDICATED in WPW — digoxin enhances accessory pathway conduction, accelerates ventricular rate in pre-excited AF. Can cause VF.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'WPW with pre-excited AF: irregularly irregular wide complex tachycardia. The accessory pathway conducts AF directly to the ventricles at very rapid rates → ventricular rates 200-300 → VF → SCD.',
      'NEVER give AV nodal blockers (adenosine, verapamil, diltiazem, beta-blockers, digoxin) in pre-excited AF. They block the AV node, forcing all conduction through the accessory pathway → fatal acceleration.',
      'Treatment: procainamide (drug of choice) or ibutilide for stable pre-excited AF. Cardioversion if unstable. Then ablation for cure.',
      'WPW baseline ECG: delta waves (slurred QRS upstroke) + short PR <120ms + wide QRS. Indicates pre-excitation via accessory pathway.'
    ],
    boardPearls: [
      'AVNRT (most common SVT): narrow complex, regular, HR 150-250, retrograde P waves buried in or just after QRS. Treat: vagal maneuvers → adenosine → verapamil → cardioversion.',
      'AVRT (accessory pathway re-entry): narrow or wide (antidromic). Orthodromic AVRT (narrow): adenosine OK. Antidromic AVRT (wide): treat like WPW. Procainamide.',
      'Sudden cardiac death in WPW: risk ~0.1%/year for asymptomatic WPW. High-risk features: pre-excited AF, shortest pre-excited RR interval <250ms, multiple accessory pathways.',
      'Accessory pathway locations: left lateral (most common), posteroseptal, right lateral, anteroseptal. Location determines ECG delta wave morphology.'
    ]
  },
  references: [{ id: 'StatPearls-WPW', title: 'Wolff-Parkinson-White Syndrome', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK554437/', openAccess: true }]
};
