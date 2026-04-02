window.CASES=window.CASES||{};
window.CASES['hf']={
  id:'hf',name:'William Turner',age:'68M',dob:'1957-06-15',mrn:'RDX-2026-76341',
  setting:'Cardiology Clinic',category:'cardiovascular',acuity:3,
  chiefComplaint:'Worsening dyspnea on exertion, 3-pillow orthopnea — known HFrEF EF 30%',
  diagnosis:'Decompensated HFrEF — Inadequate GDMT, Volume Overloaded',
  presentation:{
    hpi:'68M with HFrEF (EF 30%) on furosemide 20mg daily. 4 weeks of progressive dyspnea, now orthopneic (3 pillows), bilateral ankle edema 3+, weight up 12 lbs. Not on ACEi/ARB, not on beta-blocker (started, stopped for "dizziness"). JVP elevated. BNP 3,200.',
    pmh:['HFrEF EF 30%','HTN','T2DM'],meds:['Furosemide 20mg daily (inadequate)','Aspirin','Atorvastatin'],allergies:['NKDA']
  },
  vitals:{BP:'148/92',HR:'96',RR:'20',Temp:'37.0°C',SpO2:'92% RA',Weight:'96kg (dry weight estimated 84kg)'},
  labs:{
    'BNP':'3,200 pg/mL (H)','CXR':'Cardiomegaly, bilateral Kerley B lines, perihilar haziness — pulmonary edema',
    'Echo (from 6 months ago)':'EF 30%, dilated LV, grade II diastolic dysfunction',
    'BMP':'Na 132 (dilutional), K 3.6, Cr 1.4, BUN 28'
  },
  orders:{
    correct:[
      {id:'gdmt-hf',name:'Initiate GDMT: sacubitril-valsartan (ARNI) + carvedilol + spironolactone + empagliflozin',rationale:'GDMT quadruple therapy reduces HFrEF mortality by >50%. The four pillars: ARNI (sacubitril-valsartan — superior to ACEi, PARADIGM-HF), beta-blocker (carvedilol, metoprolol succinate, bisoprolol), MRA (spironolactone/eplerenone), SGLT2i (empagliflozin/dapagliflozin — EMPEROR-Reduced, DAPA-HF).'},
      {id:'diuresis-hf',name:'Furosemide 40-80mg IV — increase from 20mg PO to achieve decongestion',rationale:'Oral furosemide has poor bioavailability in decompensated HF (gut wall edema). Switch to IV. Target: UO 3-5 mL/kg/hr, 1-2 kg weight loss/day, resolution of symptoms. Monitor electrolytes.'},
      {id:'icd-hf',name:'ICD evaluation at 40 days on optimized GDMT — EF 30% if persists',rationale:'MADIT-II: ICD for EF <30% with prior MI. SCD-HeFT: ICD for EF <35% from any cause + NYHA class II-III. Reassess EF after 3-6 months GDMT — EF may improve significantly.'}
    ],
    incorrect:[
      {id:'digoxin-hf',name:'Start digoxin for rate control',rationale:'Digoxin has no mortality benefit in HFrEF (DIG trial showed neutral effect). It is occasionally used for symptom control in refractory HF or AF with HF. Not GDMT. Focus on the four evidence-based pillars.'},
      {id:'avoid-bb-hf',name:'Avoid beta-blocker — EF 30%, may worsen pump function',rationale:'Beta-blockers IMPROVE long-term outcomes in HFrEF despite initial concern. Start at low dose after volume optimization. Carvedilol, metoprolol succinate, and bisoprolol are the only beta-blockers proven to reduce mortality in HFrEF.'}
    ]
  },
  teachingPoints:{
    keyLearning:['GDMT for HFrEF: ARNI + beta-blocker + MRA + SGLT2i. All four reduce mortality independently — maximize all four.','SGLT2i benefits in HFrEF are independent of diabetes (HF mechanism: osmotic diuresis, cardiac energy metabolism, inflammation).','Beta-blockers are contraindicated in ACUTELY decompensated HF — initiate or continue once euvolemic.'],
    boardPearls:['HFpEF (EF ≥50%): diuretics for symptoms, SGLT2i (EMPEROR-Preserved), control comorbidities. No mortality benefit from beta-blockers or ARNI in HFpEF.','Cardiorenal syndrome: worsening Cr during decongestion is expected — do NOT stop diuresis for Cr rise alone.','Cardiac resynchronization therapy (CRT): HFrEF + LBBB + QRS >150ms + NYHA II-IV → reduces HF hospitalizations and mortality.']
  },
  references:[{id:'StatPearls-HF',title:'Heart Failure',journal:'StatPearls',year:2024,url:'https://www.ncbi.nlm.nih.gov/books/NBK430873/',openAccess:true}]
};
