window.CASES=window.CASES||{};
window.CASES['personality-disorders']={
  id:'personality-disorders',name:'Samantha Hill',age:'27F',dob:'1998-02-28',mrn:'RDX-2026-61233',
  setting:'Psychiatry ED',category:'psychiatric',acuity:2,
  chiefComplaint:'Superficial lacerations bilateral forearms — "I hate myself" — 4th ED visit this year, each after perceived abandonment',
  diagnosis:'Borderline Personality Disorder — Crisis Presentation + Self-Harm',
  presentation:{
    hpi:'27F with known BPD. Boyfriend ended relationship via text 3 hours ago. She felt "empty and not real" (dissociation), then cut her arms with scissors (superficial, no tendon involvement, no suicidal intent — she says "I didn\'t want to die, I just needed to feel something"). This is the 4th ED visit for self-harm this year, all precipitated by perceived abandonment. She has no psychosis, no mania. PHQ-9: 16 (severe depression). She is requesting admission.',
    pmh:['BPD — diagnosed age 22','MDD (comorbid)','Prior trauma history'],
    meds:['Sertraline 100mg','Quetiapine 50mg QHS (for sleep/emotional dysregulation)'],allergies:['NKDA']
  },
  vitals:{BP:'126/78',HR:'96',RR:'14',Temp:'37.0°C',SpO2:'99%'},
  labs:{
    'UDS':'Negative','BAL':'0','CBC/BMP':'Normal',
    'PHQ-9':'16 (severe)','Columbia C-SSRS':'Passive SI (wishes to be dead) — no active plan or intent'
  },
  orders:{
    correct:[
      {id:'wound-bpd',name:'Wound care — irrigate, assess depth, close as appropriate',rationale:'Medical evaluation of self-harm injuries is mandatory. Assess for deep structure involvement (tendons, vessels, nerves). Superficial lacerations: closure with steri-strips or sutures as appropriate.'},
      {id:'dbt-referral',name:'DBT (dialectical behavior therapy) referral — gold-standard treatment for BPD',rationale:'DBT is the evidence-based treatment for BPD. It teaches: mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness. Reduces self-harm, hospitalizations, and suicidality. The ED visit is an opportunity to re-engage with DBT. Ask if she has a current DBT therapist.'},
      {id:'safety-plan-bpd',name:'Crisis safety plan — specific to BPD: triggers, distress tolerance skills, crisis contacts',rationale:'Safety planning for BPD: identify specific triggers (abandonment cues), distress tolerance skills she can use before self-harm (TIPP: temperature, intense exercise, paced breathing, paired muscle relaxation), and crisis line numbers. Safety planning reduces subsequent suicidal behavior.'},
      {id:'avoid-admission-bpd',name:'Avoid inpatient admission unless truly necessary — consider intensive outpatient program',rationale:'Hospitalization for BPD: should be reserved for acute psychiatric emergencies (active suicidal intent with plan + means, severe psychosis, severe MDD requiring inpatient level of care). Frequent hospitalizations for BPD crises can reinforce maladaptive coping (secondary gain) and disrupt outpatient treatment relationships. IOP (intensive outpatient program) is often more appropriate.'}
    ],
    incorrect:[
      {id:'admit-bpd',name:'Admit for inpatient psychiatric care — she is requesting it and is at risk',rationale:'Patient request for admission does not mandate hospitalization. BPD is best treated in outpatient/IOP settings. Routine inpatient admissions for BPD crisis without acute safety risk or severe psychiatric emergency may reinforce unhealthy patterns and delay engagement with definitive outpatient treatment (DBT).'},
      {id:'no-therapy-bpd',name:'Medication-only approach — adjust sertraline or add mood stabilizer',rationale:'Medications have a limited and supportive role in BPD — they are not the primary treatment. Psychotherapy (DBT) is the gold standard. No medication has FDA approval for BPD. Medication targets comorbidities (MDD, anxiety, insomnia) rather than BPD itself.'}
    ]
  },
  teachingPoints:{
    keyLearning:['BPD core features: unstable self-image + unstable relationships (idealization/devaluation) + fear of abandonment + impulsivity + emotional dysregulation + self-harm + chronic emptiness + dissociation.','DBT is the evidence-based treatment for BPD — reduces self-harm, ED visits, and suicidality more than any medication. Refer to DBT at every clinical encounter.','Self-harm in BPD is often non-suicidal (emotion regulation function — "I just needed to feel something") — distinguish from suicidal self-harm. Both require safety assessment.','Hospitalization should be reserved for true psychiatric emergencies — routine admissions for BPD crisis may reinforce maladaptive patterns.'],
    boardPearls:['BPD prevalence: 1-2% general population, 10-20% inpatient psychiatry, highest female predominance. Strong association with childhood trauma.','Cluster B personality disorders: antisocial (callous disregard), borderline (emotional dysregulation + self-harm), histrionic (attention-seeking), narcissistic (grandiosity + entitlement).','Mentalization-based therapy (MBT) and schema-focused therapy: alternatives to DBT for BPD with equivalent evidence.','BPD and suicide: 8-10% complete suicide lifetime. Chronic SI is common — focus on acute risk factors (specific plan, means, intent, hopelessness) rather than baseline SI.']
  },
  references:[{id:'StatPearls-BPD',title:'Borderline Personality Disorder',journal:'StatPearls',year:2024,url:'https://www.ncbi.nlm.nih.gov/books/NBK430883/',openAccess:true}]
};
