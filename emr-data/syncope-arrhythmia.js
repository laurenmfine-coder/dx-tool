window.CASES = window.CASES || {};
window.CASES['syncope-arrhythmia'] = {
  id: 'syncope-arrhythmia', name: 'Helen Choi', age: '52F', dob: '1973-10-08',
  mrn: 'RDX-2026-47212', setting: 'ED → Cardiology',
  chiefComplaint: 'Witnessed sudden loss of consciousness without prodrome — found with HR 180 on monitor',
  diagnosis: 'Cardiogenic Syncope — Ventricular Tachycardia as Cause of Syncope',
  category: 'cardiovascular', acuity: 2,
  presentation: {
    hpi: '52F collapsed suddenly while standing in kitchen — no warning, no chest pain, no palpitation prodrome (prodrome suggests vasovagal, NOT this). Witnessed by husband: she went stiff then limp, unconscious for ~30 seconds. Now alert and oriented. On monitor: HR 180, irregular — rhythm strip shows wide-complex tachycardia. Hx: prior MI 2 years ago, EF 35%. BP now 118/74 (hemodynamically stable currently).',
    pmh: ['Prior MI 2 years ago (LAD territory)', 'EF 35% (last echo 6 months ago)', 'HTN', 'T2DM'],
    meds: ['Aspirin', 'Atorvastatin', 'Metoprolol', 'Lisinopril', 'Sacubitril-valsartan'],
    allergies: ['NKDA']
  },
  vitals: { BP: '118/74', HR: '180 (wide complex, irregular)', RR: '18', Temp: '37.0°C', SpO2: '97%' },
  labs: {
    'ECG': 'Wide complex tachycardia 180 bpm — irregular. QRS 160ms. AV dissociation visible in V1 (P waves march through independently). Fusion beats and capture beats present. DIAGNOSIS: VENTRICULAR TACHYCARDIA.',
    'Troponin': '0.06 (mildly elevated — demand ischemia from VT)',
    'BMP': 'K 3.8, Mg 1.6 (low-normal — replete both)', 'BNP': '480 (H — known HFrEF)'
  },
  orders: {
    correct: [
      { id: 'amiodarone-vt', name: 'Amiodarone 150mg IV over 10 min, then 1mg/min × 6h — hemodynamically stable VT', rationale: 'Stable VT: IV amiodarone is first-line. 150mg bolus then infusion. Do not use lidocaine as first-line (less evidence for structural heart disease). If unstable → synchronized cardioversion.' },
      { id: 'cardioversion-vt', name: 'Synchronized cardioversion 100-200J — if hemodynamically unstable', rationale: 'If BP drops, chest pain, or altered consciousness: immediately synchronized cardioversion. VT with a pulse = synchronized (not defibrillation/unsynchronized).' },
      { id: 'icd-vt', name: 'ICD evaluation — sustained VT in patient with EF 35% post-MI', rationale: 'Sustained VT in structural heart disease = high risk of SCD. ICD (implantable cardioverter-defibrillator) is indicated for sustained VT with EF <40% and prior MI (secondary prevention). Also indicated for EF <35% despite GDMT (primary prevention — MADIT-II).' },
      { id: 'replete-mg-k', name: 'Replete potassium (target K >4.0) and magnesium (target Mg >2.0) — arrhythmia threshold', rationale: 'Hypokalemia and hypomagnesemia lower the threshold for VT and torsades de pointes. Replete empirically in any ventricular arrhythmia.' }
    ],
    incorrect: [
      { id: 'adenosine-vt', name: 'Give adenosine — could be SVT with aberrancy', rationale: 'Adenosine in VT is dangerous — it may temporarily terminate VT but it causes brief asystole, and VT often returns worse. More importantly: in structural heart disease (prior MI, EF 35%), wide complex tachycardia = VT until proven otherwise. Treat as VT.' },
      { id: 'verapamil-vt', name: 'IV verapamil — negative chronotrope for wide complex tachycardia', rationale: 'CONTRAINDICATED in VT — verapamil causes hemodynamic collapse in VT (drops BP and causes degeneration to VF). This is one of the most dangerous errors in arrhythmia management.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'In structural heart disease (prior MI, cardiomyopathy), wide complex tachycardia is VT until proven otherwise. Do not try to "rule out SVT with aberrancy" by giving adenosine or verapamil — dangerous.',
      'Syncope red flags: sudden onset without prodrome, exertional, post-MI or structural heart disease, family history of SCD, wide complex rhythm, QTc prolongation — all suggest cardiogenic cause. Vasovagal: prodrome (nausea, diaphoresis, tunneling vision), situational trigger, young patient.',
      'VT with hemodynamic stability → IV amiodarone. VT with hemodynamic compromise (BP drop, altered consciousness, chest pain) → synchronized cardioversion.',
      'Verapamil is CONTRAINDICATED in VT — causes hemodynamic collapse and degeneration to VF.'
    ],
    boardPearls: [
      'Brugada criteria for VT: (1) no RS complex in any precordial lead, (2) RS interval >100ms in any precordial lead, (3) AV dissociation, (4) morphology criteria. Any criterion = VT.',
      'AV dissociation in VT: P waves march independently from QRS complexes. Capture beats (normal QRS from sinus capture) and fusion beats (hybrid QRS) are pathognomonic for VT.',
      'MADIT-II: ICD for EF <30% post-MI regardless of arrhythmia history. SCD-HeFT: ICD for EF <35% from any cause + NYHA class II-III.',
      'Torsades de pointes: polymorphic VT + prolonged QTc. Treatment: magnesium 2g IV. If unstable: defibrillation (polymorphic VT = treat as VF). Cause: QTc-prolonging drugs (haloperidol, macrolides, fluoroquinolones), hypoK/hypoMg.'
    ]
  },
  references: [{ id: 'StatPearls-Syncope', title: 'Syncope', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK442016/', openAccess: true }]
};
