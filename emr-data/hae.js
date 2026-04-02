window.CASES=window.CASES||{};
window.CASES['hae']={
  id:'hae',name:'Rachel Monroe',age:'29F',dob:'1996-05-02',mrn:'RDX-2026-38841',
  setting:'ED',category:'allergy',acuity:1,
  chiefComplaint:'Tongue and lip swelling + severe abdominal pain — no hives, no urticaria, no response to epinephrine',
  diagnosis:'Hereditary Angioedema (HAE) Attack — C1-Inhibitor Deficiency',
  presentation:{
    hpi:'29F with family history of "swelling attacks" (mother and maternal uncle have same condition). Multiple ED visits for swelling without hives. Today: sudden onset tongue and lower lip swelling + severe crampy abdominal pain (abdominal HAE attack). No urticaria, no pruritus, no rash. She received epinephrine 0.3mg IM, diphenhydramine, and methylprednisolone in triage — NO IMPROVEMENT (classic of HAE — antihistamines and epinephrine do not work because this is bradykinin-mediated, not histamine-mediated).',
    pmh:['Known HAE — C1-inhibitor deficiency (confirmed)','Oral contraceptives (estrogen increases HAE frequency)'],
    meds:['OCP — estrogen-containing (INCREASES HAE attacks)','No HAE-specific therapy prescribed at this time'],
    allergies:['No drug allergies (this is NOT allergic angioedema)']
  },
  vitals:{BP:'124/78',HR:'108',RR:'22',Temp:'37.0°C',SpO2:'96%'},
  labs:{
    'C4':'4 mg/dL (L — chronically low in HAE type I, even between attacks — excellent screening test)',
    'C1-inhibitor level':'8 mg/dL (L — type I: quantitative deficiency)',
    'C1-inhibitor function':'22% of normal (L — confirms functional deficiency)',
    'C3':'Normal (differentiates HAE from acquired angioedema of SLE/lymphoma)',
    'Tryptase':'Normal (not an allergic/mast cell reaction)'
  },
  orders:{
    correct:[
      {id:'c1inh-hae',name:'Plasma-derived C1-inhibitor concentrate (Berinert) 20 units/kg IV — TREAT HAE ATTACK',rationale:'HAE is bradykinin-mediated — not histamine-mediated. Specific treatments: C1-INH concentrate (Berinert, Cinryze), icatibant (bradykinin B2 receptor antagonist — SC injection), ecallantide (plasma kallikrein inhibitor). Antihistamines, epinephrine, and steroids do NOT treat HAE. Laryngeal HAE attacks are fatal without specific treatment — airway must be monitored.'},
      {id:'airway-hae',name:'Monitor airway — laryngeal swelling is life-threatening, prepare for intubation',rationale:'Tongue and lip swelling → risk of laryngeal progression → asphyxiation. Even after specific treatment, monitor for 6-8 hours. Prepare surgical airway (cricothyroidotomy kit) in cases with tongue swelling.'},
      {id:'stop-ocp-hae',name:'Stop estrogen-containing OCP — estrogen significantly increases HAE attack frequency',rationale:'Estrogen (exogenous or endogenous) is a major HAE trigger — it reduces C1-INH production. Switch to progestin-only or non-hormonal contraception. Pregnancy also increases attacks.'},
      {id:'prophylaxis-hae',name:'Long-term prophylaxis — lanadelumab (plasma kallikrein inhibitor, SC q2 weeks) or C1-INH concentrate',rationale:'After acute management: refer to allergist for long-term prophylaxis. Lanadelumab (Takhzyro) reduces attacks by 87% — FDA-approved 2018. Alternatives: tranexamic acid, danazol (attenuated androgen — increases C1-INH). Short-term prophylaxis before surgery/dental procedures: C1-INH concentrate.'}
    ],
    incorrect:[
      {id:'more-epi-hae',name:'Increase epinephrine dose — standard anaphylaxis treatment',rationale:'Epinephrine does NOT work for HAE because HAE is bradykinin-mediated, not histamine/IgE-mediated. This is one of the most critical distinctions in allergy. Antihistamines and steroids are also ineffective. HAE requires specific bradykinin pathway agents.'},
      {id:'discharge-hae',name:'Discharge after 1 hour of observation — swelling improving',rationale:'HAE attacks can worsen rapidly over 24-72 hours. Laryngeal attacks require hospital admission until resolved. Even if improving initially, HAE attacks should be observed for 6-8 hours after treatment with specific therapy, and longer if airway is involved.'}
    ]
  },
  teachingPoints:{
    keyLearning:['HAE is BRADYKININ-mediated (not histamine). Antihistamines, epinephrine, and steroids do NOT WORK. This is the highest-yield teaching point — patients have died because HAE was treated as anaphylaxis.','C4 is chronically low in HAE type I and II — even between attacks. It is the best screening test. C1-INH quantitative (type I — low level) vs functional (type II — normal level, low function).','HAE triggers: stress, estrogen (OCP, pregnancy), trauma, surgery, ACEi (ACEi-induced angioedema is also bradykinin-mediated — do not give ACEi to HAE patients).','HAE acute treatment: C1-INH concentrate, icatibant, or ecallantide. All work within 30-60 min.'],
    boardPearls:['HAE type I (85%): low C1-INH level AND function. Type II (15%): normal/elevated C1-INH level but low function. Type III (rare): normal C1-INH, X-linked dominant in women, estrogen-triggered.','Acquired angioedema from ACEi: bradykinin-mediated, no C1-INH deficiency, typically affects tongue/lips/bowel. Treat: stop ACEi, icatibant works. Fresh frozen plasma as second-line.','Abdominal HAE attacks: mimic surgical abdomen — severe crampy pain, vomiting, ascites. Often misdiagnosed and operated on. Imaging: circumferential bowel wall edema, ascites. Resolves with specific HAE treatment.','HAE vs allergic angioedema: HAE = no urticaria, no pruritus, family history, recurrent, bowel attacks. Allergic = urticaria + pruritus + responds to antihistamines/epinephrine.']
  },
  references:[{id:'StatPearls-HAE',title:'Hereditary Angioedema',journal:'StatPearls',year:2024,url:'https://www.ncbi.nlm.nih.gov/books/NBK482279/',openAccess:true}]
};
