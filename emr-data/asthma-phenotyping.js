window.CASES=window.CASES||{};
window.CASES['asthma-phenotyping']={
  id:'asthma-phenotyping',name:'Priya Nair',age:'32F',dob:'1993-07-15',mrn:'RDX-2026-44812',
  setting:'Allergy/Pulmonary Clinic',category:'pulmonary',acuity:3,
  chiefComplaint:'Severe persistent asthma uncontrolled on high-dose ICS/LABA — 3 exacerbations requiring oral steroids this year',
  diagnosis:'Severe Uncontrolled Asthma — Type 2 Eosinophilic Phenotype, Biologic Candidate',
  presentation:{
    hpi:'32F with severe asthma since age 8. On high-dose ICS (fluticasone 500mcg BID) + LABA (salmeterol) + LTRA (montelukast). 3 prednisone courses this year, 1 hospitalization. Uses albuterol >5×/week. Eosinophils 680 cells/µL (elevated). Total IgE 420 IU/mL. FeNO 58 ppb (elevated — marker of eosinophilic airway inflammation). No significant allergen sensitization on testing. Non-atopic eosinophilic asthma.',
    pmh:['Severe persistent asthma — 24 years','Chronic rhinosinusitis with nasal polyps','No atopic dermatitis'],
    meds:['Fluticasone/salmeterol 500/50 BID','Montelukast 10mg','Albuterol PRN'],allergies:['Aspirin — bronchospasm (AERD — aspirin-exacerbated respiratory disease)']
  },
  vitals:{BP:'118/72',HR:'82',RR:'16',Temp:'37.0°C',SpO2:'97%'},
  labs:{
    'Spirometry':'FEV1 58% predicted, FEV1/FVC 0.68 — moderate obstruction. Post-BD: FEV1 72% (+14%, +280mL — significant reversibility.',
    'Peripheral eosinophils':'680 cells/µL (H — T2 phenotype marker)',
    'FeNO':'58 ppb (H — normal <25; elevated = eosinophilic airway inflammation)',
    'Total IgE':'420 IU/mL (H)',
    'Allergen-specific IgE':'Negative to common aeroallergens (non-atopic eosinophilic asthma)',
    'Sinus CT':'Bilateral nasal polyps + pansinusitis — consistent with severe T2 asthma'
  },
  orders:{
    correct:[
      {id:'dupilumab-asthma',name:'Dupilumab 200mg SC q2 weeks — anti-IL-4Rα (blocks IL-4 and IL-13)',rationale:'Dupilumab blocks the shared IL-4/IL-13 receptor. FDA-approved for severe eosinophilic or OCS-dependent asthma AND chronic rhinosinusitis with nasal polyps (dual indication — perfect for this patient). Reduces exacerbations 70%, improves FEV1, eliminates need for OCS. LIBERTY ASTHMA QUEST trial.'},
      {id:'stop-aspirin-aerd',name:'Strict aspirin/NSAID avoidance — AERD (Samter triad)',rationale:'AERD (aspirin-exacerbated respiratory disease): asthma + nasal polyps + aspirin/NSAID intolerance. COX-1 inhibition → overproduction of cysteinyl leukotrienes → bronchospasm, rhinorrhea, nasal polyp growth. Avoid ALL COX-1 inhibitors. Safe alternatives: celecoxib (COX-2 selective), acetaminophen (at doses ≤1000mg).'},
      {id:'ocs-taper-asthma',name:'Prednisone 40mg × 5 days for current exacerbation, then taper — biologic will reduce OCS need',rationale:'Short-course OCS for acute exacerbation while biologic is initiated and takes effect (4-6 weeks for full effect). Goal: reduce or eliminate chronic OCS need with dupilumab.'}
    ],
    incorrect:[
      {id:'omalizumab-nonigg',name:'Omalizumab — she has elevated IgE',rationale:'Omalizumab (anti-IgE) is indicated for atopic (IgE-mediated) asthma with positive allergen sensitization. This patient has NEGATIVE allergen-specific IgE (non-atopic eosinophilic asthma). Omalizumab would not be effective. Dupilumab or mepolizumab/benralizumab are appropriate.'},
      {id:'more-steroids-asthma',name:'Continue prednisone 10mg daily — it controls her asthma',rationale:'Chronic oral corticosteroid use causes irreversible harm (osteoporosis, diabetes, cataracts, adrenal suppression, weight gain). Biologic therapy eliminates or reduces OCS requirement. This is the steroid-sparing indication for biologics.'}
    ]
  },
  teachingPoints:{
    keyLearning:['Asthma phenotyping: T2 (eosinophilic/atopic — high FeNO, elevated blood eosinophils, positive allergen testing) vs non-T2 (obese, smoker, neutrophilic — FeNO normal, eosinophils normal). T2 phenotype responds to biologics.','Biologic selection: omalizumab (anti-IgE, atopic asthma) vs mepolizumab/benralizumab (anti-IL-5/5Rα, eosinophilic) vs dupilumab (anti-IL-4Rα, eosinophilic + nasal polyps) vs tezepelumab (anti-TSLP, broadest).','AERD (Samter triad): asthma + nasal polyps + aspirin intolerance. Avoid ALL NSAIDs. Dupilumab treats all three components.'],
    boardPearls:['Step therapy for persistent asthma: SABA PRN (step 1) → low-dose ICS (2) → medium ICS or ICS/LABA (3) → high-dose ICS/LABA (4) → add LTRA/tiotropium (5) → biologic or low-dose OCS (6).','FeNO >50 ppb: high eosinophilic inflammation, likely responds to steroids and IL-5/IL-4 biologics. FeNO <25: not eosinophilic.','Aspirin desensitization: for patients with AERD who need aspirin for cardiovascular indication — performed in allergy office with controlled escalation.']
  },
  references:[{id:'StatPearls-Asthma',title:'Asthma',journal:'StatPearls',year:2024,url:'https://www.ncbi.nlm.nih.gov/books/NBK430901/',openAccess:true}]
};
