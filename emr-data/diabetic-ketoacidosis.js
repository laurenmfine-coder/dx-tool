window.CASES=window.CASES||{};
window.CASES['diabetic-ketoacidosis']={
  id:'diabetic-ketoacidosis',name:'Angela Torres',age:'24F',dob:'2001-05-18',mrn:'RDX-2026-55221',
  setting:'ED → Medicine',category:'endocrine',acuity:2,
  chiefComplaint:'T1DM on insulin pump — pump failure, glucose 488, pH 7.18, AG 28',
  diagnosis:'Diabetic Ketoacidosis — Insulin Pump Failure',
  presentation:{
    hpi:'24F with T1DM on insulin pump for 6 years. Pump malfunction 18 hours ago (kinked tubing). Glucose 488, pH 7.18, bicarb 8, AG 28, large ketones. Kussmaul respirations. Vomiting ×4. She is alert. K+ 5.8 (total body depleted).',
    pmh:['T1DM — 10 years, on insulin pump'],meds:['Insulin aspart via pump (FAILED)'],allergies:['NKDA']
  },
  vitals:{BP:'104/68',HR:'116',RR:'28 (Kussmaul)',Temp:'37.6°C',SpO2:'97%',GCS:'15'},
  labs:{
    'ABG':'pH 7.18 | HCO3 8 | PaCO2 20 (compensatory) | SEVERE DKA',
    'BMP':'Glucose 488 | K 5.8 (H but total body depleted) | Na 132 (corrected Na = 138) | Cr 1.4 | AG 28',
    'Ketones':'Serum 4+ | Urine large','Phosphorus':'1.2 (L — will fall further with insulin)'
  },
  orders:{
    correct:[
      {id:'insulin-dka',name:'Regular insulin 0.1 u/kg/hr IV infusion — start after K confirmed >3.5',rationale:'Insulin drives glucose AND K+ into cells. Never start insulin if K+ <3.3 — risk of fatal hypokalemia. Current K 5.8 is safe to start. Do NOT give insulin bolus (no additional benefit, risk of rapid K shift).'},
      {id:'fluids-dka',name:'NS 1L over 1h, then 0.45% NS 250-500 mL/hr — correction of volume and hypertonicity',rationale:'Aggressive fluid resuscitation corrects hypovolemia and lowers glucose. Switch to 0.45% NS after initial NS bolus to correct hypertonicity. Add D5 when glucose reaches 200-250 (to allow continued insulin for ketosis clearance).'},
      {id:'k-dka',name:'Add KCl 20-40 mEq/L to fluids — K will fall rapidly with insulin',rationale:'Insulin shifts K+ intracellularly — K+ will drop from 5.8 to dangerously low quickly. Add K+ to fluids as soon as urine output confirmed. Target K 4.0-5.0 during treatment. Monitor every 2h.'},
      {id:'resolution-dka',name:'Resolution criteria: pH >7.3 AND HCO3 >18 AND AG <12 — not just glucose normalization',rationale:'Most critical teaching point: DKA resolution is defined by acid-base correction and AG closure, NOT by glucose normalization. Glucose may reach 200 while AG is still elevated — continue insulin (add dextrose to fluids to prevent hypoglycemia).'}
    ],
    incorrect:[
      {id:'bicarb-dka',name:'Sodium bicarbonate 44mEq IV — pH 7.18 is severe',rationale:'Bicarbonate is NOT recommended for DKA unless pH <6.9 (guidelines vary). Bicarb causes: (1) paradoxical CSF acidosis, (2) hypokalemia from intracellular K shift, (3) worsens cerebral edema risk. Treat with insulin + fluids — acidosis will correct.'},
      {id:'stop-insulin-dka',name:'Stop insulin infusion — glucose now 210',rationale:'WRONG — the resolution endpoint is anion gap closure, not glucose normalization. If insulin is stopped when glucose reaches 200 but AG is still 22, ketoacidosis continues. Add dextrose to the infusion, but CONTINUE insulin until AG <12 and pH >7.30.'}
    ]
  },
  teachingPoints:{
    keyLearning:['DKA resolution: pH >7.3 + HCO3 >18 + AG <12. NEVER stop insulin just because glucose normalizes.','K+ management: do not start insulin if K <3.3. Add K to fluids when output confirmed even if K appears normal — will fall rapidly.','Transition to SC insulin: give first SC dose 1-2h before stopping insulin drip to prevent rebound ketosis.','Bicarbonate is NOT indicated for DKA unless pH <6.9 — causes paradoxical CSF acidosis.'],
    boardPearls:['Euglycemic DKA: glucose <250 with acidosis and ketonemia. Seen with SGLT2i, starvation, pregnancy. Do not miss it.','Phosphorus falls dramatically with insulin therapy — replete if <1.0 or symptomatic.','Cerebral edema in DKA: most common in pediatric first-time DKA. Headache + bradycardia + HTN during treatment → mannitol STAT.']
  },
  references:[{id:'StatPearls-DKA',title:'DKA',journal:'StatPearls',year:2024,url:'https://www.ncbi.nlm.nih.gov/books/NBK560723/',openAccess:true}]
};
