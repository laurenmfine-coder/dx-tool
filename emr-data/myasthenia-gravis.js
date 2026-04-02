/* emr-data/myasthenia-gravis.js — Myasthenic Crisis */
window.CASES=window.CASES||{};
window.CASES['myasthenia-gravis']={
  id:'myasthenia-gravis',name:'Diane Fletcher',age:'58F',dob:'1967-03-14',mrn:'501923',
  setting:'Neurology Floor → ICU',
  chiefComplaint:'Worsening dysphagia, ptosis, and shortness of breath × 3 days',
  diagnosis:'Myasthenic Crisis — Requiring Intubation',
  category:'neurologic',acuity:1,
  continuityNote:'Known MG on pyridostigmine. Missed 2 days of medications due to GI illness.',
  presentation:{
    hpi:'Diane Fletcher, 58F with known acetylcholine receptor antibody-positive MG (diagnosed 2 years ago) on pyridostigmine 60 mg QID and prednisone 20 mg daily. Over past 3 days: worsening ptosis bilaterally, new dysphagia (choking on liquids), and progressive shortness of breath with exertion, now at rest. Missed 2 days of pyridostigmine during a GI illness. NIF (negative inspiratory force) on admission: −18 cmH2O (critical threshold <−20).',
    pmh:['Myasthenia gravis (AChR antibody positive, diagnosed 2022)','Hypertension','Type 2 DM'],
    meds:['Pyridostigmine 60mg QID (missed × 2 days)','Prednisone 20mg daily','Metformin 500mg BID','Lisinopril 10mg daily'],
    allergies:['Penicillin — rash']
  },
  vitals:{BP:'148/90',HR:'106',RR:'28',Temp:'37.2°C',SpO2:'91% RA→94% 4L NC',NIF:'−18 cmH2O'},
  exam:{
    neuro:'Bilateral ptosis. Fatigable extraocular muscle weakness (diplopia after 30s sustained upgaze). Nasal voice. Gag reflex weak.',
    resp:'Accessory muscle use. Tachypnea. Paradoxical abdominal movement.',
    general:'Anxious, diaphoretic'
  },
  labs:{
    BMP:'Na 138, K 3.6, Cr 0.9, Glucose 142',
    CBC:'WBC 9.8, Hgb 13.2',
    ABG:'pH 7.32, pCO2 52, pO2 68 on 4L NC — hypercapnic respiratory failure',
    AChR_Ab:'Positive (historical)',
    TSH:'1.8 (normal)'
  },
  orders:{
    correct:[
      {id:'intubate-mg',name:'Intubation — NIF <−20 cmH2O + rising pCO2 = intubation threshold reached',rationale:'Do NOT wait for complete respiratory failure. NIF <−20 and rising CO2 = intubate now.'},
      {id:'ivig-mg',name:'IVIG 2g/kg over 5 days OR Plasmapheresis × 5 sessions',rationale:'Both equally effective for myasthenic crisis. Plasmapheresis faster onset (1-2 days); IVIG more available. Choose one — do NOT combine.'},
      {id:'hold-pyridostigmine',name:'HOLD pyridostigmine during intubation',rationale:'Pyridostigmine increases secretions — contraindicated in intubated patients. Resume only after extubation.'},
      {id:'continue-steroids',name:'Continue prednisone — do NOT abruptly stop',rationale:'Abrupt steroid cessation in MG can precipitate crisis. Continue maintenance dose.'},
      {id:'avoid-mg-drugs',name:'Avoid: aminoglycosides, fluoroquinolones, magnesium, neuromuscular blockers',rationale:'These worsen NMJ transmission and can precipitate or worsen crisis.'}
    ],
    incorrect:[
      {id:'succinylcholine',name:'Succinylcholine for rapid sequence intubation',rationale:'Avoid in MG — unpredictable response (resistance to succinylcholine, prolonged response to non-depolarizing agents). Use rocuronium at low dose with close monitoring.'},
      {id:'fluoroquinolone',name:'Levofloxacin for aspiration concern',rationale:'Fluoroquinolones block NMJ transmission — contraindicated in MG. Use azithromycin or amoxicillin-clavulanate.'},
      {id:'increase-pyridostigmine',name:'Increase pyridostigmine for worsening weakness',rationale:'Cholinergic crisis mimics myasthenic crisis — increasing pyridostigmine without knowing which crisis = dangerous. Edrophonium test (Tensilon) rarely used now; clinical distinction required.'}
    ]
  },
  teachingPoints:{
    keyLearning:[
      'Myasthenic crisis: NIF <−20 cmH2O OR VC <1L = intubation threshold. Do not wait for SpO2 to drop.',
      'IVIG and plasmapheresis are equally effective — plasmapheresis faster onset. Do NOT combine them.',
      'Hold pyridostigmine in intubated patients — increases secretions. Resume after extubation.',
      'Cholinergic crisis (excess pyridostigmine) mimics myasthenic crisis — SLUDGE symptoms differentiate (Salivation, Lacrimation, Urination, Defecation, GI cramping, Emesis).',
      'Drug triggers to avoid: aminoglycosides, fluoroquinolones, macrolides, magnesium, neuromuscular blockers, beta-blockers.'
    ]
  }
};
