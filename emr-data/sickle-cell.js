/* emr-data/sickle-cell.js — Sickle Cell Vaso-Occlusive Crisis + Acute Chest Syndrome */
window.CASES=window.CASES||{};
window.CASES['sickle-cell']={
  id:'sickle-cell',name:'Amara Johnson',age:'22F',dob:'2003-07-15',mrn:'330582',
  setting:'Emergency Department → Hematology Floor',
  chiefComplaint:'Severe pain — arms, legs, and back × 12 hours',
  diagnosis:'Vaso-Occlusive Crisis with Early Acute Chest Syndrome',
  category:'hematologic',acuity:2,
  presentation:{
    hpi:'Amara Johnson, 22F with HbSS (homozygous sickle cell disease) on hydroxyurea (missed last 2 weeks — out of medication). Presents with 12-hour history of severe pain 9/10 in bilateral arms, legs, and lower back — typical for her VOC. No fever initially. Began with URI symptoms 3 days ago. Now developing: fever 38.9°C, new chest pain, oxygen saturation dropping (was 97% → now 91% on RA). CXR: new right lower lobe infiltrate. This is acute chest syndrome.',
    pmh:['HbSS sickle cell disease (homozygous)','Prior acute chest syndrome × 2 (hospitalized)','Pulmonary hypertension (screening echo showed elevated TRJV)'],
    meds:['Hydroxyurea 1000mg daily (missed × 14 days)','Folic acid 1mg daily','Penicillin VK 250mg BID (prophylaxis)'],
    allergies:['Morphine — nausea (can still use with anti-emetic)']
  },
  vitals:{BP:'118/72',HR:'116',RR:'24',Temp:'38.9°C',SpO2:'91%→95% on 4L NC'},
  exam:{
    resp:'Decreased breath sounds right lower lobe. Dullness to percussion right base.',
    musculoskeletal:'Diffuse tenderness to palpation bilateral arms, legs, vertebrae. No joint swelling.',
    general:'Moderate-severe distress. Tachypneic.'
  },
  labs:{
    CBC:'WBC 14.8 (leukocytosis — infection vs stress), Hgb 6.8 (baseline ~7.5), Plt 380, MCV 92, Retics 12%',
    BMP:'Na 135, K 4.2, Cr 0.8, Total bili 3.8 (chronic hemolysis), Direct bili 0.4',
    LDH:'520 (elevated — hemolysis)',
    Type_Screen:'O positive — EXTENDED PHENOTYPE ON FILE',
    Blood_Cx:'2 sets pending',
    Resp_Panel:'Mycoplasma IgM positive — Mycoplasma pneumoniae trigger for ACS'
  },
  imaging:{
    CXR:'Right lower lobe infiltrate — new compared to prior (2 months ago: clear). Consistent with acute chest syndrome.'
  },
  orders:{
    correct:[
      {id:'analgesia-scd',name:'IV opioid analgesia — hydromorphone 0.2-0.4mg IV q3-4h (not morphine)',rationale:'Morphine causes nausea in this patient — use hydromorphone. Pain control is primary. PCA preferred for adequate control. Do NOT under-treat pain (splinting → atelectasis → worsens ACS).'},
      {id:'simple-transfusion-acs',name:'Simple transfusion 1 unit pRBC (target Hgb 10, max 11) — ACS management',rationale:'Acute chest syndrome: simple transfusion if Hgb >5 and no severe hypoxia. Exchange transfusion if severe (SpO2 <90% on >4L or bilateral infiltrates). Improves oxygen carrying capacity.'},
      {id:'azithromycin-acs',name:'Azithromycin 500mg IV daily — Mycoplasma coverage',rationale:'Mycoplasma is the most common identified infectious trigger for ACS. Atypical coverage essential. Also add ceftriaxone for gram-negatives.'},
      {id:'incentive-spirometry',name:'Incentive spirometry q1h while awake — ACS prevention and treatment',rationale:'Atelectasis drives ACS. IS prevents splinting-related alveolar collapse. Underutilized — must be actively encouraged.'},
      {id:'resume-hydroxyurea',name:'Resume hydroxyurea + patient education on adherence',rationale:'Hydroxyurea reduces ACS frequency by 50%+. Missed doses increase crisis risk. Address barriers to adherence at every hospitalization.'}
    ],
    incorrect:[
      {id:'fluid-bolus-scd',name:'Aggressive IV fluids — 2L NS bolus',rationale:'Sickle cell does NOT require aggressive hydration. Hyperhydration → pulmonary edema in ACS. Maintenance fluids only (D5 0.45 NS at 1-1.5× maintenance).'},
      {id:'high-target-hgb',name:'Transfuse to Hgb target of 12-13',rationale:'Over-transfusion → hyperviscosity → worsened sickling. Target Hgb 10 (max 11). Higher targets worsen outcomes.'},
      {id:'oxygen-all-scd',name:'Place all sickle cell patients on supplemental oxygen routinely',rationale:'Oxygen only if SpO2 <95%. Routine oxygen in normoxic SCD patients provides no benefit and may suppress erythropoiesis.'}
    ]
  },
  teachingPoints:{
    keyLearning:[
      'Acute chest syndrome diagnostic criteria: new chest infiltrate + ≥1 of fever, cough, wheeze, tachypnea, hypoxia. Most common cause of sickle cell death.',
      'ACS precipitants: infection (Mycoplasma, Chlamydia, RSV), fat embolism, pulmonary sequestration, in-situ thrombosis. Always culture.',
      'Pain control in VOC: adequate analgesia prevents splinting → atelectasis → ACS. Under-treatment is dangerous.',
      'Hydroxyurea reduces ACS frequency by 50%+ — address adherence barriers at every hospitalization.',
      'Transfusion targets: Hgb 10 (not >11) — hyperviscosity from over-transfusion worsens sickling and stroke risk.'
    ]
  }
};
