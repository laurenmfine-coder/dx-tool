/* emr-data/opioid-overdose.js — Opioid Overdose / OUD */
window.CASES=window.CASES||{};
window.CASES['opioid-overdose']={
  id:'opioid-overdose',name:'Tyler Morrison',age:'29M',dob:'1996-01-28',mrn:'447821',
  setting:'Emergency Department',
  chiefComplaint:'Found unresponsive',
  diagnosis:'Fentanyl Overdose — Opioid Use Disorder',
  category:'toxicologic',acuity:1,
  presentation:{
    hpi:'Tyler Morrison, 29M with known opioid use disorder (OUD), brought by EMS. Found unresponsive by roommate at home. Pinpoint pupils, agonal respirations, cyanotic. EMS administered naloxone 2mg IN × 2 with partial response — now GCS 10, RR 8. Paraphernalia found at scene (fentanyl strips — test strip positive). No known other substance use. Prior ED visits for overdose × 3.',
    pmh:['Opioid use disorder (not on MOUD)','Depression','Hepatitis C (untreated)'],
    meds:['None prescribed'],
    allergies:['NKDA'],
    socialHistory:['Unemployed','Unstable housing','Last drug use: approximately 2h ago per roommate']
  },
  vitals:{BP:'96/58',HR:'112',RR:'8',Temp:'35.8°C (hypothermia)',SpO2:'82% RA→96% BVM'},
  exam:{
    neuro:'GCS 10 (E2V3M5). Pinpoint pupils bilaterally. Responds to sternal rub.',
    resp:'Slow, shallow respirations. Snoring sounds.',
    skin:'Cyanosis of lips. Track marks bilateral antecubital fossae.',
    general:'Obtunded, diaphoretic'
  },
  labs:{
    BMP:'Na 138, K 4.1, Cr 1.2, Glucose 78',
    ABG:'pH 7.22, pCO2 68, pO2 52 on BVM — hypercapnic respiratory failure resolving',
    Tox_Screen:'Opioids positive. Fentanyl (immunoassay may be negative — need fentanyl-specific strip)',
    Lactate:'3.8 (elevated — hypoperfusion)',
    LFTs:'AST 82, ALT 67 (HCV-related)'
  },
  orders:{
    correct:[
      {id:'naloxone-iv',name:'Naloxone 0.4-2 mg IV/IM/IN — titrate to adequate respirations (not full arousal)',rationale:'Goal is respiratory rate >12/min, not full reversal. Over-reversal → acute withdrawal → agitation, AMA departure, re-overdose.'},
      {id:'naloxone-infusion',name:'Naloxone infusion: 2/3 of effective reversal dose per hour (fentanyl has long duration)',rationale:'Fentanyl half-life longer than naloxone (30-90 min) — re-narcotization will occur. Infusion prevents recurrent respiratory depression.'},
      {id:'observation-sah',name:'Minimum 4-6 hour observation (fentanyl overdose)',rationale:'Fentanyl half-life exceeds naloxone. Must observe until drug effect resolved, not just until naloxone effect wears off.'},
      {id:'moud-consult',name:'Addiction medicine/MOUD consultation — offer buprenorphine before discharge',rationale:'ED-initiated buprenorphine with referral increases engagement in treatment. Start buprenorphine in ED if patient willing and in mild withdrawal (COWS ≥8).'},
      {id:'naloxone-rx',name:'Prescribe naloxone (Narcan) 4mg IN × 2 for patient and contacts',rationale:'Every patient with OUD should receive naloxone prescription. No adverse effects from unnecessary use.'}
    ],
    incorrect:[
      {id:'full-reversal',name:'Naloxone 2mg IV — aim for full alertness immediately',rationale:'Over-reversal precipitates acute opioid withdrawal → agitation, vomiting, AMA departure, immediate re-use. Titrate to adequate breathing, not wakefulness.'},
      {id:'no-observation',name:'Discharge after naloxone reversal with instruction to return if symptoms return',rationale:'Fentanyl outlasts naloxone — patients can re-narcotize after discharge. Minimum 4-6h observation required.'},
      {id:'discharge-no-moud',name:'Discharge with referral slip to outpatient addiction program',rationale:'Referral slips alone have poor follow-through. ED-initiated buprenorphine + warm handoff → 3× higher treatment engagement at 30 days.'}
    ]
  },
  teachingPoints:{
    keyLearning:[
      'Naloxone titration: goal is adequate respirations (RR >12), NOT full arousal. Over-reversal causes withdrawal and AMA departure.',
      'Fentanyl half-life (3-12h) exceeds naloxone (30-90 min) — naloxone infusion and 4-6h observation required.',
      'ED-initiated buprenorphine with active referral increases 30-day treatment engagement significantly versus referral alone.',
      'Fentanyl may not appear on standard opioid immunoassay — use fentanyl-specific test strips.',
      'Every patient with OUD should leave with naloxone prescription — no harm if used unnecessarily.'
    ]
  }
};
