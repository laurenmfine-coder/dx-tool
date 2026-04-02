window.CASES=window.CASES||{};
window.CASES['fpies']={
  id:'fpies',name:'Lucas Kim',age:'8mo',dob:'2025-07-10',mrn:'RDX-2026-78831',
  setting:'Pediatric ED',category:'allergy',acuity:2,
  chiefComplaint:'8-month-old with profuse repetitive vomiting 2 hours after eating oatmeal — 3rd episode',
  diagnosis:'Food Protein-Induced Enterocolitis Syndrome (FPIES) — Oat Triggered',
  presentation:{
    hpi:'8-month-old male. Third episode: profuse repetitive vomiting (10-15 times) starting 1-2 hours after eating oatmeal cereal. Each episode: vomiting 90-120 minutes then resolves. No hives, no wheeze, no anaphylaxis. Appears pale and lethargic during episodes. Previous episodes with oatmeal at 5 months and 7 months — oatmeal avoided, then re-introduced. No skin findings. IgE testing negative.',
    pmh:['Three FPIES episodes — all oat-triggered'],meds:['None'],allergies:['Oats — FPIES']
  },
  vitals:{Temp:'37.4°C',HR:'148',RR:'36',SpO2:'98%',BP:'82/52',Weight:'8.2kg},
  labs:{
    'CBC':'WBC 18,400 (H — neutrophilia in FPIES episode)',
    'BMP':'Na 136, K 3.6, Cr 0.3 — mild dehydration',
    'Skin prick test/IgE':'Negative to oats — FPIES is NOT IgE-mediated (non-IgE food allergy)'
  },
  orders:{
    correct:[
      {id:'ivf-fpies',name:'IV ondansetron + NS 20 mL/kg bolus — acute FPIES management',rationale:'Acute FPIES: ondansetron (antiemetic) stops the vomiting cycle. IV fluids for volume depletion. FPIES is not anaphylaxis — do NOT give epinephrine. Symptoms self-resolve in 4-6 hours even without treatment.'},
      {id:'avoid-fpies',name:'Strict oat avoidance — trigger food elimination',rationale:'Avoid ALL forms of the trigger food. FPIES usually resolves by age 3-5 years. For resolution check: supervised oral food challenge (OFC) in allergist office (IV access present, observation for 4h). Do NOT rechallenge at home.'},
      {id:'allergy-referral-fpies',name:'Allergy referral — management plan, other trigger assessment, natural history counseling',rationale:'Allergy specialist to: (1) confirm diagnosis, (2) evaluate for other potential triggers (milk, soy, rice are common co-triggers), (3) counsel on dietary avoidance and reintroduction timing, (4) provide emergency action plan.'}
    ],
    incorrect:[
      {id:'epipen-fpies',name:'Prescribe epinephrine auto-injector — food allergy with vomiting',rationale:'FPIES is NOT IgE-mediated anaphylaxis. Epinephrine is ineffective for FPIES and should not be prescribed. IgE-mediated food allergy: immediate onset (minutes), urticaria/angioedema/wheeze/hypotension — epipen indicated. FPIES: delayed onset (1-4h), profuse vomiting only — ondansetron + IV fluids.'},
      {id:'allergy-testing-fpies',name:'Send IgE testing to diagnose FPIES',rationale:'FPIES is a NON-IgE-mediated food allergy — skin prick tests and specific IgE are negative (or may be weakly positive). The diagnosis is clinical: characteristic presentation (profuse vomiting 1-4h post-trigger, resolves 4-6h, recurs with same food).'}
    ]
  },
  teachingPoints:{
    keyLearning:['FPIES hallmarks: delayed (1-4h) profuse repetitive vomiting after specific food trigger, self-limited (4-6h), NOT IgE-mediated, NO urticaria/wheeze. Most common triggers: cow\'s milk, soy, rice, oats.','Do NOT give epinephrine — FPIES is not anaphylaxis. Treat with ondansetron + IV fluids if severe dehydration.','Diagnosis is CLINICAL — skin prick tests and IgE testing are negative. Oral food challenge in allergist office confirms when testing tolerance.','FPIES resolves by age 3-5 in most patients.'],
    boardPearls:['FPIES vs IgE-mediated allergy: FPIES = delayed (1-4h) + vomiting only + negative IgE testing. IgE-mediated = immediate (minutes) + urticaria/anaphylaxis + positive IgE/SPT.','Non-IgE food allergy spectrum: FPIES (enterocolitis), food protein-induced allergic proctocolitis (FPIAP — rectal bleeding in infants), food protein-induced enteropathy (FPE — chronic diarrhea + malabsorption).','Acute FPIES neutrophilia: reactive neutrophilia occurs during FPIES episodes — can falsely suggest infection.','OFC (oral food challenge) for tolerance: performed in allergist office with IV access at age 12-18 months for some triggers, longer for others.']
  },
  references:[{id:'StatPearls-FPIES',title:'FPIES',journal:'StatPearls',year:2024,url:'https://www.ncbi.nlm.nih.gov/books/NBK559136/',openAccess:true}]
};
