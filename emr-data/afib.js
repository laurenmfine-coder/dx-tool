/* emr-data/afib.js — Atrial Fibrillation with RVR
   Redirect: full case lives in new-onset-atrial-fibrillation.js */
if(typeof window!=='undefined'&&window.CRT_DATA){
  window.CRT_DATA['afib']=window.CRT_DATA['new-onset-atrial-fibrillation']||{
    id:'afib',diagnosis:'Atrial Fibrillation with Rapid Ventricular Response',
    category:'cardiovascular',acuity:2,
    chiefComplaint:'Palpitations and dyspnea',
    teachingPoints:{keyLearning:[
      'Rate vs rhythm control decision: hemodynamically stable AF — both acceptable (AFFIRM trial). Rhythm preferred: first episode, young, symptomatic, or HF.',
      'CHA2DS2-VASc ≥2 in males → long-term anticoagulation required regardless of cardioversion.',
      'Onset <48h: cardioversion without anticoagulation bridge acceptable; onset >48h or unknown → 3 weeks anticoagulation or TEE to exclude LAA thrombus.',
      'TSH mandatory in new-onset AF — hyperthyroidism causes refractory AF.',
      'Rate control targets: HR <110 bpm at rest (lenient) acceptable for most; tighter control if symptomatic.'
    ]}
  };
}
