/* emr-data/subarachnoid-hemorrhage.js — SAH */
window.CASES=window.CASES||{};
window.CASES['subarachnoid-hemorrhage']={
  id:'subarachnoid-hemorrhage',name:'Marcus Webb',age:'47M',dob:'1978-09-02',mrn:'619340',
  setting:'Emergency Department → Neuro ICU',
  chiefComplaint:'Sudden severe headache — "worst of my life"',
  diagnosis:'Subarachnoid Hemorrhage — Ruptured Anterior Communicating Artery Aneurysm',
  category:'neurologic',acuity:1,
  presentation:{
    hpi:'Marcus Webb, 47M with hypertension, brought by ambulance. Sudden onset severe headache while weightlifting 2 hours ago — "worst headache of my life, maximal immediately." Nausea, vomiting × 3. Photophobia. Briefly lost consciousness for approximately 30 seconds. GCS 14 on arrival (E4V4M6). Neck stiffness on exam. No prior similar headaches.',
    pmh:['Hypertension (poorly controlled)','Social smoker (10 pack-years)'],
    meds:['Hydrochlorothiazide 25mg daily'],
    allergies:['NKDA'],
    familyHistory:['Father: died of brain aneurysm age 52','Sister: polycystic kidney disease']
  },
  vitals:{BP:'198/112',HR:'88',RR:'18',Temp:'37.6°C',SpO2:'98% RA',GCS:'14'},
  exam:{
    neuro:'GCS 14 (confused to place). Pupils 4mm equal and reactive. Neck stiffness — meningismus. Kernig sign positive. No focal deficits. Fundoscopy: subhyaloid hemorrhage right eye.',
    general:'Moderate distress, photophobic'
  },
  labs:{
    BMP:'Na 140, K 3.9, Cr 1.0',
    CBC:'WBC 14.2 (stress), Hgb 15.1, Plt 218',
    Coags:'PT 12.1, INR 1.0, PTT 28',
    Type_Screen:'O positive',
    Troponin:'0.04 (mildly elevated — neurogenic cardiac injury)'
  },
  imaging:{
    CT_Head_NonContrast:'Hyperdensity in basal cisterns — subarachnoid blood confirmed. Fisher grade 3. No hydrocephalus. No midline shift.',
    CTA_Head:'5mm saccular aneurysm at anterior communicating artery. No additional aneurysms identified.'
  },
  orders:{
    correct:[
      {id:'neurosurg-sah',name:'Emergent neurosurgery consultation — aneurysm securing (coiling vs clipping)',rationale:'Rebleeding risk highest in first 24h (up to 15%). Aneurysm must be secured urgently. Endovascular coiling preferred for most AComA aneurysms.'},
      {id:'nimodipine-sah',name:'Nimodipine 60mg PO/NG q4h × 21 days',rationale:'Calcium channel blocker — reduces cerebral vasospasm (days 4-14). Reduces delayed neurological deficit by 33%. Given orally/NG — NOT IV (causes severe hypotension).'},
      {id:'bp-sah',name:'Blood pressure management: SBP <160 mmHg until aneurysm secured',rationale:'Permissive hypertension after securing (maintain CPP); strict control BEFORE securing to prevent rebleeding. Nicardipine IV infusion preferred.'},
      {id:'neuro-icu',name:'Neuro ICU admission — hourly neuro checks',rationale:'Vasospasm monitoring (days 4-14), hydrocephalus detection, seizure monitoring.'},
      {id:'avoid-anticoag-sah',name:'Hold all anticoagulants and antiplatelets until aneurysm secured',rationale:'Rebleeding risk — do not anticoagulate until surgically/endovascularly treated.'}
    ],
    incorrect:[
      {id:'lp-after-positive-ct',name:'Lumbar puncture — CT showed blood already',rationale:'LP is for CT-negative SAH with high clinical suspicion. If CT shows blood, LP not needed (and adds risk of herniation if ICP elevated).'},
      {id:'iv-nimodipine',name:'Nimodipine IV infusion',rationale:'IV nimodipine causes profound hypotension → cerebral ischemia. Only oral/NG route approved for SAH in USA.'},
      {id:'aggressive-bp-lowering',name:'Aggressive BP lowering to <120 systolic before aneurysm secured',rationale:'Excessive BP lowering reduces cerebral perfusion pressure → worse ischemia. Target SBP <160 (not normalization) until aneurysm secured.'}
    ]
  },
  teachingPoints:{
    keyLearning:[
      'CT-negative SAH: LP required if high clinical suspicion — xanthochromia (spectrophotometry) is more sensitive than visual inspection, peaks at 12h.',
      'Nimodipine prevents vasospasm — oral only (IV causes hypotension). Give for 21 days regardless of neuro status.',
      'Vasospasm occurs days 4-14 — monitor with transcranial Doppler or CT perfusion. Treat with triple-H (hypertension, hypervolemia, hemodilution — now mostly induced hypertension).',
      'Complications: rebleeding (hours-days, highest risk), vasospasm (days 4-14), hydrocephalus (early or delayed), SIADH/cerebral salt wasting, neurogenic cardiac injury.',
      'Family history of SAH or PKD increases aneurysm risk — screen first-degree relatives.'
    ]
  }
};
