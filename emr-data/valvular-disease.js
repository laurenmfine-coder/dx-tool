/* emr-data/valvular-disease.js — Severe Aortic Stenosis + TAVR Decision */
window.CASES = window.CASES || {};
window.CASES['valvular-disease'] = {
  id: 'valvular-disease', name: 'Eleanor Briggs', age: '79F', dob: '1946-03-31',
  mrn: 'RDX-2026-77441', setting: 'Cardiology Clinic → Cardiac Cath Lab', category: 'cardiovascular', acuity: 2,
  chiefComplaint: 'Exertional syncope + dyspnea — harsh crescendo-decrescendo murmur, echo shows severe AS',
  diagnosis: 'Severe Calcific Aortic Stenosis — Symptomatic (AVA 0.7 cm², Gradient 58 mmHg)',
  presentation: {
    hpi: '79F who nearly fainted while walking upstairs yesterday. 6-month history of progressive exertional dyspnea and now one episode of exertional syncope — both are indications for urgent intervention. Cardiac exam: harsh late-peaking crescendo-decrescendo systolic murmur radiating to carotids, single S2, slow-rising pulsus parvus et tardus. Echo: AVA 0.7 cm² (severe <1.0), mean gradient 58 mmHg (severe >40), EF 55% (preserved). Coronary angiogram: no significant CAD.',
    pmh: ['HTN', 'Osteoporosis', 'Prior hip replacement'], meds: ['Amlodipine', 'Alendronate', 'Atorvastatin'], allergies: ['NKDA']
  },
  vitals: { BP: '138/82', HR: '78', RR: '16', Temp: '37.0°C', SpO2: '97%' },
  labs: {
    'Echo': 'AVA 0.7 cm² (severe) | Mean gradient 58 mmHg (severe) | Peak velocity 4.2 m/s | EF 55% (preserved)',
    'STS score (surgical risk)': '6.2% (intermediate surgical risk — favors TAVR vs SAVR)',
    'CT aortic annulus': 'Annulus diameter 23mm — suitable for TAVR sizing. Iliofemoral access adequate.',
    'BNP': '480 pg/mL (H — elevated from cardiac remodeling)'
  },
  orders: {
    correct: [
      { id: 'tavr-refer', name: 'Heart team consult (cardiac surgery + interventional cardiology) — TAVR vs SAVR decision', rationale: 'Symptomatic severe AS (syncope + dyspnea) = class I indication for aortic valve replacement. Median survival without intervention: 2-3 years. With TAVR: equivalent to surgery in intermediate/high-risk patients. STS 6.2% = intermediate risk → TAVR preferred per PARTNER 2 and SURTAVI trials.' },
      { id: 'no-avoidance', name: 'Do NOT delay intervention — symptomatic severe AS has 50% 2-year mortality without treatment', rationale: 'The three cardinal symptoms of severe AS — angina, syncope, heart failure — each mark a phase transition in prognosis. Syncope: 50% 3-year survival without intervention. The question is no longer IF to intervene, but HOW (TAVR vs SAVR) and WHEN (urgent but not emergent).' },
      { id: 'no-vasodilators', name: 'HOLD vasodilators (avoid amlodipine dose escalation, no nitrates)', rationale: 'Severe AS: afterload reduction (vasodilators, nitrates) causes profound hypotension — fixed obstruction prevents cardiac output increase to compensate for vasodilation. Hold aggressive antihypertensives. This patient\'s amlodipine is low-dose and acceptable to continue, but do not escalate.' }
    ],
    incorrect: [
      { id: 'medical-manage', name: 'Manage medically — high surgical risk at 79', rationale: 'Symptomatic severe AS has a natural history equivalent to terminal cancer without intervention. Medical management does not improve survival. TAVR is designed for high-risk/elderly patients — 79 years old with intermediate STS risk is an excellent TAVR candidate.' },
      { id: 'nitrates-syncope', name: 'Give sublingual nitroglycerin for exertional symptoms', rationale: 'Nitroglycerin is CONTRAINDICATED in severe AS. Vasodilation reduces preload → reduced cardiac output through a fixed obstruction → profound hypotension → syncope or cardiac arrest. Avoid all vasodilators in severe AS.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Severe AS criteria: AVA <1.0 cm², mean gradient >40 mmHg, peak velocity >4 m/s. Symptomatic severe AS = urgent intervention.',
      'Three cardinal symptoms of severe AS and their prognosis without intervention: angina (50% 5-year survival), syncope (50% 3-year survival), heart failure (50% 1-2 year survival). Syncope = urgent.',
      'TAVR vs SAVR: TAVR equivalent or superior for high and intermediate surgical risk. TAVR increasingly used in low-risk patients (PARTNER 3, Evolut Low Risk trials). Decision made by multidisciplinary heart team.',
      'Vasodilators and nitrates CONTRAINDICATED in severe AS — fixed obstruction prevents compensatory CO increase → hypotension.'
    ],
    boardPearls: [
      'AS murmur: harsh crescendo-decrescendo systolic, best at RUSB, radiates to carotids. Pulsus parvus et tardus (low-amplitude, delayed carotid upstroke). Paradoxical splitting of S2.',
      'Low-flow low-gradient AS: EF <50% + low gradient despite severe AVA. True severe AS vs pseudo-severe AS: dobutamine stress echo to distinguish. Low-flow low-gradient = high surgical risk.',
      'Mitral regurgitation: holosystolic murmur, apex → axilla. Acute MR (papillary muscle rupture post-MI): acute pulmonary edema without cardiomegaly. Emergency surgery.',
      'Mitral stenosis: low-pitched, mid-diastolic rumble, opening snap. Rheumatic fever most common cause. A-fib common complication (LA dilatation). Rate control + anticoagulation. Commissurotomy or replacement.'
    ]
  },
  references: [{ id: 'StatPearls-AS', title: 'Aortic Stenosis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430742/', openAccess: true }]
};
