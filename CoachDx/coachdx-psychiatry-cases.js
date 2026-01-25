// CoachDx Psychiatry SBAR Cases
// 15 cases covering psychiatric emergencies and consultations
// Each case includes level-specific adaptations for different learners

const PSYCHIATRY_CASES = [
  // ACUTE PSYCHIATRIC EMERGENCIES
  {
    id: 'psych-suicidal-ideation',
    title: 'Acute Suicidal Ideation',
    category: 'Emergency Psychiatry',
    difficulty: 'advanced',
    patientAge: '24 years',
    patientSex: 'Male',
    chiefComplaint: 'Wants to hurt himself',
    scenario: 'A 24-year-old man is brought to the ED by his roommate after discovering a suicide note. Patient admits to stockpiling medications with intent to overdose tonight. Recently lost his job and girlfriend broke up with him last week.',
    vitals: { HR: 88, BP: '128/78', RR: 16, SpO2: '99% on RA' },
    keyFindings: [
      'Alert and cooperative but tearful',
      'Admits to active suicidal ideation with plan (overdose)',
      'Has access to means (stockpiled medications at home)',
      'Recent psychosocial stressors',
      'No prior suicide attempts',
      'Denies alcohol/drug use today'
    ],
    idealSBAR: {
      situation: 'Calling about a 24-year-old male with active suicidal ideation, has a specific plan (overdose) and means (stockpiled medications). Currently psychiatrically stable but requires urgent evaluation.',
      background: 'No psychiatric history per patient. Recent significant stressors: job loss 2 weeks ago, relationship ended 1 week ago. No prior suicide attempts. No current intoxication.',
      assessment: 'High-risk for suicide given active ideation with plan and means. Requires 1:1 observation, safety precautions, and psychiatric evaluation. Cannot be discharged.',
      recommendation: 'Request immediate psychiatry consult for evaluation. Patient on 1:1 observation, belongings secured. Need collateral from roommate and assessment of need for involuntary hold if patient attempts to leave.'
    },
    learningPoints: ['Assess plan, means, and intent', 'Safety precautions in ED', 'When to initiate involuntary hold']
  },
  {
    id: 'psych-acute-psychosis',
    title: 'New-Onset Psychosis',
    category: 'Emergency Psychiatry',
    difficulty: 'advanced',
    patientAge: '21 years',
    patientSex: 'Female',
    chiefComplaint: 'Acting bizarre, not making sense',
    scenario: 'A 21-year-old college student is brought in by campus police for disorganized behavior. She was found wandering the library saying that the government planted a chip in her brain. No known psychiatric history. Parents report 2 weeks of declining function.',
    vitals: { HR: 102, BP: '138/84', RR: 18, Temp: '37.2°C' },
    keyFindings: [
      'Disheveled, poor eye contact',
      'Disorganized speech, loose associations',
      'Paranoid delusions (government surveillance)',
      'Responding to internal stimuli (appears to be hearing voices)',
      'Oriented to person only',
      'No focal neurological deficits'
    ],
    idealSBAR: {
      situation: 'Calling about a 21-year-old female with new-onset psychosis: paranoid delusions, disorganized behavior, and apparent auditory hallucinations. No prior psychiatric history.',
      background: 'Per parents, 2-week prodrome of social withdrawal and declining grades. No substance use known. No medical history. No recent travel or illness. Family history significant for schizophrenia in maternal uncle.',
      assessment: 'First-break psychosis requiring medical and psychiatric workup. Must rule out organic causes before attributing to primary psychiatric illness.',
      recommendation: 'Request medical workup first: CBC, CMP, TSH, UA/UDS, consider CT head and LP if indicated. Then psychiatry consult. Patient requires 1:1 observation.'
    },
    learningPoints: ['Rule out medical causes of psychosis', 'First-break psychosis workup', 'Importance of collateral history']
  },
  {
    id: 'psych-agitated-patient',
    title: 'Acute Agitation - De-escalation',
    category: 'Emergency Psychiatry',
    difficulty: 'intermediate',
    patientAge: '35 years',
    patientSex: 'Male',
    chiefComplaint: 'Threatening staff, demanding to leave',
    scenario: 'A 35-year-old man with bipolar disorder was brought in by EMS for erratic behavior. He is now pacing, speaking loudly, and threatening to leave AMA. He was off his medications for 2 weeks.',
    vitals: { HR: 118, BP: '148/92', RR: 22 },
    keyFindings: [
      'Pacing, unable to sit still',
      'Loud, pressured speech',
      'Irritable but redirectable momentarily',
      'Not responding to verbal de-escalation alone',
      'History of bipolar I, multiple prior admissions',
      'No weapons, not physically aggressive yet'
    ],
    idealSBAR: {
      situation: 'Calling about an agitated 35-year-old with bipolar disorder who is escalating despite verbal de-escalation. Currently not violent but threatening to leave.',
      background: 'Known bipolar I, off lithium and olanzapine for 2 weeks. Multiple prior manic episodes with hospitalizations. No recent substance use per EMS.',
      assessment: 'Acute manic episode with agitation requiring pharmacological intervention. At risk for harm to self or others if escalates further.',
      recommendation: 'Request verbal offer of PO medication first (olanzapine 10mg or lorazepam 2mg). If refuses, may need IM medication per protocol. Will maintain safe distance and have security present.'
    },
    learningPoints: ['De-escalation techniques', 'PO vs IM medication for agitation', 'Safety considerations']
  },
  {
    id: 'psych-serotonin-syndrome',
    title: 'Serotonin Syndrome',
    category: 'Medical Psychiatry',
    difficulty: 'advanced',
    patientAge: '45 years',
    patientSex: 'Female',
    chiefComplaint: 'Confusion, tremor, and fever',
    scenario: 'A 45-year-old woman on sertraline presents with confusion, tremor, and fever. Her husband reports she was prescribed tramadol for back pain 3 days ago. She has been increasingly agitated with "jerking" movements.',
    vitals: { HR: 124, BP: '158/94', RR: 24, Temp: '39.1°C' },
    keyFindings: [
      'Diaphoretic, mydriasis (dilated pupils)',
      'Hyperreflexia with clonus (especially lower extremities)',
      'Myoclonus and tremor',
      'Agitated, confused',
      'Increased bowel sounds',
      'Rigid muscles, especially lower extremities'
    ],
    idealSBAR: {
      situation: 'Calling about a 45-year-old with probable serotonin syndrome: hyperthermia, clonus, hyperreflexia, agitation after starting tramadol while on sertraline.',
      background: 'On sertraline 100mg daily for 2 years. Tramadol 50mg started 3 days ago. No other serotonergic medications. No illicit drug use.',
      assessment: 'Serotonin syndrome based on Hunter criteria: clonus plus agitation plus diaphoresis in setting of serotonergic drugs. Moderate-severe presentation requiring ICU monitoring.',
      recommendation: 'Discontinue all serotonergic agents. Requesting benzodiazepines for agitation and hyperthermia. May need cyproheptadine if no improvement. Active cooling. ICU admission.'
    },
    learningPoints: ['Hunter criteria for serotonin syndrome', 'Serotonin syndrome vs NMS', 'Drug interactions causing SS']
  },
  {
    id: 'psych-panic-attack',
    title: 'Panic Attack vs Medical Emergency',
    category: 'Anxiety Disorders',
    difficulty: 'beginner',
    patientAge: '28 years',
    patientSex: 'Female',
    chiefComplaint: 'Chest pain, cant breathe, feels like dying',
    scenario: 'A 28-year-old woman presents with chest tightness, palpitations, shortness of breath, and feeling like she is dying. Symptoms started suddenly 30 minutes ago at work. She has had similar episodes before.',
    vitals: { HR: 110, BP: '132/78', RR: 22, SpO2: '99% on RA' },
    keyFindings: [
      'Anxious appearing, tearful',
      'Clear lungs, regular cardiac rhythm',
      'No chest wall tenderness',
      'ECG: sinus tachycardia, no ischemic changes',
      'History of 3 prior similar episodes',
      'Symptoms improving with reassurance'
    ],
    idealSBAR: {
      situation: 'Calling about a 28-year-old with panic-like symptoms: chest pain, dyspnea, palpitations. Vitals stable, ECG shows sinus tachycardia only.',
      background: 'Three prior similar episodes over past year, never evaluated. No cardiac history. No risk factors for PE. Non-smoker.',
      assessment: 'Clinical presentation consistent with panic attack given recurrent pattern, normal exam, and symptom improvement with reassurance. Low risk for cardiac or pulmonary emergency.',
      recommendation: 'Recommend observation until symptoms resolve, then discuss panic disorder with patient. Consider outpatient psychiatry referral. May benefit from PRN benzodiazepine for acute episode if prolonged.'
    },
    learningPoints: ['Panic attack criteria', 'Rule out medical causes first', 'When to refer for panic disorder']
  },
  // CONSULTATION SCENARIOS
  {
    id: 'psych-capacity-evaluation',
    title: 'Capacity Evaluation - Refusing Treatment',
    category: 'Consultation Psychiatry',
    difficulty: 'advanced',
    patientAge: '72 years',
    patientSex: 'Male',
    chiefComplaint: 'Refusing recommended surgery',
    scenario: 'A 72-year-old man with a perforated appendix is refusing surgery. Surgical team is requesting psychiatry consult for capacity evaluation. Patient is alert and states he understands he may die without surgery.',
    vitals: { HR: 108, BP: '98/62', RR: 20, Temp: '38.9°C' },
    keyFindings: [
      'Alert, oriented to person, place, time, situation',
      'No evidence of delirium on exam',
      'Able to state diagnosis and recommended treatment',
      'Understands risk of death without surgery',
      'States he has "lived a good life" and is ready to die',
      'No depression or psychosis apparent'
    ],
    idealSBAR: {
      situation: 'Calling about a 72-year-old refusing surgery for perforated appendix. Surgery requesting capacity evaluation. Patient appears to understand the risks.',
      background: 'No psychiatric history. Widowed 6 months ago. Has advanced directive naming daughter as healthcare proxy. No prior suicidal ideation.',
      assessment: 'Need to assess four components of capacity: understanding, appreciation, reasoning, and ability to communicate a choice. Initial impression is patient may have capacity.',
      recommendation: 'Will perform formal capacity evaluation. Request holding sedation and avoiding pressuring patient until evaluation complete. Need to speak with daughter and review advanced directive.'
    },
    learningPoints: ['Four components of decision-making capacity', 'Capacity is decision-specific', 'Role of advanced directives']
  },
  {
    id: 'psych-delirium-consult',
    title: 'Delirium - Psychiatry Consult',
    category: 'Consultation Psychiatry',
    difficulty: 'intermediate',
    patientAge: '78 years',
    patientSex: 'Female',
    chiefComplaint: 'Confused, pulling at lines',
    scenario: 'A 78-year-old woman post-hip surgery is now confused, picking at her IV, and calling out for her deceased husband. Night shift reports she was "sundowning." Medicine team requests psychiatry consult for agitation management.',
    vitals: { HR: 96, BP: '142/88', RR: 18, Temp: '37.4°C' },
    keyFindings: [
      'Waxing and waning attention',
      'Disoriented to time and place',
      'Visual hallucinations (seeing her husband)',
      'Reversed sleep-wake cycle',
      'Foley catheter in place',
      'Post-op day 2, on oxycodone PRN'
    ],
    idealSBAR: {
      situation: 'Calling about a 78-year-old with post-operative delirium. She is confused, hallucinating, and pulling at her IV. Waxing and waning course.',
      background: 'Hip fracture repair 2 days ago. Receiving oxycodone for pain. Has Foley catheter. No prior dementia per family. UTI and pneumonia ruled out per medicine team.',
      assessment: 'Hyperactive delirium, likely multifactorial: post-operative state, opioids, Foley catheter, unfamiliar environment. This is not a primary psychiatric condition.',
      recommendation: 'Recommend non-pharmacological interventions first: reorient, remove Foley if possible, minimize opioids, ensure sleep hygiene. Low-dose haloperidol if needed for safety. Will provide recommendations but this is primarily a medical issue.'
    },
    learningPoints: ['Delirium is medical, not psychiatric', 'Non-pharmacological interventions first', 'When to use antipsychotics in delirium']
  },
  {
    id: 'psych-alcohol-withdrawal',
    title: 'Alcohol Withdrawal - CIWA Protocol',
    category: 'Substance Use',
    difficulty: 'intermediate',
    patientAge: '52 years',
    patientSex: 'Male',
    chiefComplaint: 'Shaking, sweating, anxious',
    scenario: 'A 52-year-old man admitted for pneumonia is now tremulous, diaphoretic, and anxious. He admits to drinking a fifth of vodka daily and last drink was 36 hours ago. His CIWA score is 18.',
    vitals: { HR: 112, BP: '162/98', RR: 20, Temp: '37.6°C' },
    keyFindings: [
      'Tremor of outstretched hands',
      'Diaphoretic, anxious',
      'CIWA-Ar score: 18 (moderate withdrawal)',
      'Oriented but mildly confused',
      'No visual or tactile hallucinations yet',
      'No prior seizures or DTs'
    ],
    idealSBAR: {
      situation: 'Calling about a 52-year-old with moderate alcohol withdrawal, CIWA score 18. Last drink 36 hours ago. Tremulous and hypertensive.',
      background: 'Drinks one fifth of vodka daily for 10+ years. No prior withdrawal seizures or DTs. Admitted for community-acquired pneumonia.',
      assessment: 'Moderate alcohol withdrawal syndrome. At risk for progression to severe withdrawal, seizures, or DTs given heavy use history.',
      recommendation: 'Recommend initiating CIWA-based benzodiazepine protocol. Starting dose lorazepam or chlordiazepoxide based on CIWA. Thiamine supplementation. Frequent reassessment. Will need ICU transfer if CIWA >25 or symptoms progress.'
    },
    learningPoints: ['CIWA-Ar scoring', 'Benzodiazepine dosing in withdrawal', 'Risk factors for severe withdrawal']
  },
  {
    id: 'psych-depression-admission',
    title: 'Severe Depression - Inpatient Criteria',
    category: 'Mood Disorders',
    difficulty: 'intermediate',
    patientAge: '42 years',
    patientSex: 'Female',
    chiefComplaint: 'Cannot take care of myself anymore',
    scenario: 'A 42-year-old woman with history of major depression presents with worsening depression over 3 weeks. She has stopped eating, is not bathing, and missed a week of work. She denies suicidal ideation but feels hopeless.',
    vitals: { HR: 68, BP: '108/68', RR: 14 },
    keyFindings: [
      'Psychomotor retardation',
      'Poor hygiene, lost 8 lbs in 3 weeks',
      'Flat affect, poor eye contact',
      'Denies suicidal ideation but says "what is the point"',
      'PHQ-9 score: 24 (severe)',
      'Not taking antidepressant for 2 months (ran out)'
    ],
    idealSBAR: {
      situation: 'Calling about a 42-year-old with severe major depression with functional decline. Not suicidal but unable to care for self. PHQ-9 score 24.',
      background: 'History of MDD, previously on sertraline which she stopped 2 months ago. One prior psychiatric hospitalization 5 years ago for depression. Lives alone.',
      assessment: 'Severe depression with functional impairment requiring higher level of care. Unable to maintain safety through self-care even without active suicidality.',
      recommendation: 'Recommend inpatient psychiatric admission for safety, medication restart and optimization, and intensive treatment. Patient agreeable to voluntary admission.'
    },
    learningPoints: ['Functional decline as admission criterion', 'PHQ-9 interpretation', 'Voluntary vs involuntary admission']
  },
  {
    id: 'psych-bipolar-mania',
    title: 'Acute Mania - New Diagnosis',
    category: 'Mood Disorders',
    difficulty: 'advanced',
    patientAge: '23 years',
    patientSex: 'Male',
    chiefComplaint: 'Hasnt slept in days, spending money recklessly',
    scenario: 'A 23-year-old graduate student is brought in by parents. He has not slept in 4 days, spent $15,000 on a "business idea," and believes he has discovered the meaning of life. No prior psychiatric history.',
    vitals: { HR: 98, BP: '128/82', RR: 18 },
    keyFindings: [
      'Elevated mood, grandiose',
      'Pressured speech, difficult to interrupt',
      'Flight of ideas',
      'Decreased need for sleep (4 days)',
      'Increased goal-directed activity',
      'Poor insight - does not believe anything is wrong',
      'UDS negative'
    ],
    idealSBAR: {
      situation: 'Calling about a 23-year-old male with first manic episode: 4 days without sleep, grandiosity, pressured speech, and reckless spending. No prior psychiatric history.',
      background: 'Graduate student, previously high-functioning. No substance use (UDS negative). Family history: mother with bipolar disorder. No recent medical illness.',
      assessment: 'First manic episode meeting DSM-5 criteria for bipolar I disorder. Given poor insight and high-risk behaviors, requires inpatient stabilization.',
      recommendation: 'Recommend involuntary psychiatric hold given lack of insight and danger to self (financial). Will need mood stabilizer initiation (lithium or valproate) plus short-term antipsychotic for acute mania.'
    },
    learningPoints: ['DSM-5 mania criteria', 'First-break mania workup', 'Acute mania treatment']
  },
  // SPECIAL POPULATIONS
  {
    id: 'psych-elderly-depression',
    title: 'Late-Life Depression with Pseudodementia',
    category: 'Geriatric Psychiatry',
    difficulty: 'intermediate',
    patientAge: '75 years',
    patientSex: 'Female',
    chiefComplaint: 'Memory problems',
    scenario: 'A 75-year-old woman is brought by her daughter for memory problems over 3 months. She has been withdrawn, not eating well, and says she "cant remember anything." Daughter notes rapid onset after husband died 4 months ago.',
    vitals: { HR: 72, BP: '138/82', RR: 14 },
    keyFindings: [
      'Appears sad, poor eye contact',
      'Says "I dont know" to many questions',
      'When encouraged, can recall details',
      'MMSE: 22/30 (poor effort suspected)',
      'GDS (Geriatric Depression Scale): 12/15 (suggestive of depression)',
      'No focal neurological deficits'
    ],
    idealSBAR: {
      situation: 'Calling about a 75-year-old with 3-month cognitive decline following husband death. Presentation more consistent with depression than dementia.',
      background: 'Husband died 4 months ago. No prior psychiatric history. Previously independent and high-functioning. Rapid symptom onset.',
      assessment: 'Suspect pseudodementia (cognitive impairment secondary to depression) rather than primary dementia. Key features: acute onset, "I dont know" answers, depressive symptoms, recent loss.',
      recommendation: 'Recommend antidepressant trial (SSRI - sertraline or escitalopram). If cognition improves with depression treatment, confirms pseudodementia. Will need repeat cognitive testing after depression treated.'
    },
    learningPoints: ['Pseudodementia vs dementia features', 'Bereavement and late-life depression', 'Treatment approach']
  },
  {
    id: 'psych-postpartum-psychosis',
    title: 'Postpartum Psychosis',
    category: 'Perinatal Psychiatry',
    difficulty: 'advanced',
    patientAge: '29 years',
    patientSex: 'Female',
    chiefComplaint: 'Not sleeping, talking about baby being evil',
    scenario: 'A 29-year-old woman who delivered 5 days ago is brought by her husband. She has not slept since delivery, is pacing constantly, and told her husband their baby is "possessed." She has no psychiatric history.',
    vitals: { HR: 108, BP: '142/88', RR: 20 },
    keyFindings: [
      'Agitated, pacing, pressured speech',
      'Paranoid delusions about baby',
      'Has not slept in 5 days',
      'Disorganized thinking',
      'No prior psychiatric history',
      'History of bipolar disorder in sister'
    ],
    idealSBAR: {
      situation: 'Calling about a 29-year-old 5 days postpartum with acute psychosis: delusions about her infant, severe insomnia, agitation. This is a psychiatric emergency.',
      background: 'First pregnancy, uncomplicated delivery. No prior psychiatric history. Family history of bipolar disorder in sister. Currently breastfeeding.',
      assessment: 'Postpartum psychosis - psychiatric emergency with risk of infanticide and suicide. Requires immediate separation from infant and inpatient treatment.',
      recommendation: 'Immediate psychiatry evaluation. Patient must not be alone with infant until stable. Recommend inpatient psychiatric admission. Will need mood stabilizer (avoid valproate if breastfeeding) plus antipsychotic.'
    },
    learningPoints: ['Postpartum psychosis is an emergency', 'Risk of infanticide', 'Presentation often mixed features']
  },
  {
    id: 'psych-adolescent-self-harm',
    title: 'Adolescent Self-Harm',
    category: 'Child/Adolescent',
    difficulty: 'intermediate',
    patientAge: '15 years',
    patientSex: 'Female',
    chiefComplaint: 'Cutting herself',
    scenario: 'A 15-year-old girl is brought in by her mother after discovering multiple superficial cuts on her arms. Patient admits to cutting for 6 months when she feels "overwhelmed." She denies suicidal intent.',
    vitals: { HR: 76, BP: '112/68', RR: 14 },
    keyFindings: [
      'Multiple healed and healing superficial cuts on forearms',
      'Denies suicidal ideation or intent',
      'Reports cutting helps her "feel something"',
      'Academic stress, social difficulties',
      'No psychosis or mania',
      'Cooperative, good rapport'
    ],
    idealSBAR: {
      situation: 'Calling about a 15-year-old with 6-month history of non-suicidal self-injury (cutting). Currently denies suicidal ideation.',
      background: 'Freshman in high school, declining grades, social isolation. No prior psychiatric treatment. Parents divorced. Lives with mother.',
      assessment: 'Non-suicidal self-injury, likely related to emotion dysregulation. Important to differentiate from suicide attempt - patient denies suicidal intent and uses cutting for emotional relief.',
      recommendation: 'Wounds superficial, do not require medical treatment. Recommend outpatient psychiatric follow-up within 1 week. Safety plan with parents. Consider DBT-based therapy as evidence-based treatment for NSSI.'
    },
    learningPoints: ['NSSI vs suicide attempt', 'Risk assessment in adolescents', 'DBT for emotion dysregulation']
  },
  {
    id: 'psych-catatonia',
    title: 'Catatonia',
    category: 'Emergency Psychiatry',
    difficulty: 'advanced',
    patientAge: '32 years',
    patientSex: 'Male',
    chiefComplaint: 'Not moving or speaking',
    scenario: 'A 32-year-old man with schizophrenia is brought from a group home where he has been mute and immobile for 2 days. He was recently started on haloperidol for worsening psychosis.',
    vitals: { HR: 88, BP: '128/82', RR: 16, Temp: '37.0°C' },
    keyFindings: [
      'Mute, immobile',
      'Waxy flexibility (maintains positioned postures)',
      'Staring, minimal blinking',
      'Negativism (resists passive movement)',
      'No rigidity or fever (unlike NMS)',
      'Recently started haloperidol'
    ],
    idealSBAR: {
      situation: 'Calling about a 32-year-old with schizophrenia presenting with catatonia: mutism, immobility, waxy flexibility for 2 days. Recently started on haloperidol.',
      background: 'Schizophrenia diagnosed at age 22. Lives in group home. Haloperidol started 1 week ago. No fever or rigidity to suggest NMS.',
      assessment: 'Catatonia in the context of schizophrenia. Must rule out NMS given recent antipsychotic, but absence of fever and rigidity make catatonia more likely. Bush-Francis Catatonia Rating Scale positive.',
      recommendation: 'Discontinue haloperidol. Lorazepam challenge (2mg IV/IM) is diagnostic and therapeutic. If responds, continue scheduled benzodiazepines. If no response, consider ECT consultation.'
    },
    learningPoints: ['Catatonia signs and Bush-Francis scale', 'Lorazepam challenge', 'Catatonia vs NMS differentiation']
  },
  {
    id: 'psych-benzodiazepine-dependence',
    title: 'Benzodiazepine Dependence - Taper Planning',
    category: 'Substance Use',
    difficulty: 'intermediate',
    patientAge: '58 years',
    patientSex: 'Female',
    chiefComplaint: 'Wants to stop taking Xanax',
    scenario: 'A 58-year-old woman has been taking alprazolam 2mg TID for 8 years for anxiety. She wants to stop but is afraid of withdrawal. Her PCP referred her for taper guidance.',
    vitals: { HR: 78, BP: '126/78', RR: 14 },
    keyFindings: [
      'Taking alprazolam 6mg/day for 8 years',
      'Prior attempt to stop cold-turkey led to seizure',
      'Currently taking as prescribed, not escalating',
      'Motivated to taper',
      'No other substance use',
      'Underlying anxiety disorder'
    ],
    idealSBAR: {
      situation: 'Calling about a 58-year-old on high-dose alprazolam (6mg daily) for 8 years requesting help with taper. History of withdrawal seizure with prior abrupt discontinuation.',
      background: 'Initially prescribed for panic disorder. No dose escalation. Prior seizure when she tried to stop on her own. Highly motivated.',
      assessment: 'High-risk for complicated withdrawal given high dose, long duration, and prior withdrawal seizure. Requires slow, structured taper.',
      recommendation: 'Recommend conversion to equivalent long-acting benzodiazepine (diazepam or clonazepam) then slow taper over 6-12 months. Consider adjunctive medications for anxiety during taper. May need outpatient psychiatry involvement for monitoring.'
    },
    learningPoints: ['Benzodiazepine taper principles', 'Risk factors for complicated withdrawal', 'Conversion to long-acting agents']
  }
];

// Open-Access Guidelines References for Psychiatry Cases
const PSYCHIATRY_REFERENCES = {
  suicidalIdeation: {
    guideline: "The Joint Commission. Detecting and Treating Suicide Ideation in All Settings. Sentinel Event Alert 56. 2016",
    url: "https://www.jointcommission.org/resources/sentinel-event/sentinel-event-alert-newsletters/sentinel-event-alert-56-detecting-and-treating-suicide-ideation-in-all-settings/",
    access: "Open Access"
  },
  psychosis: {
    guideline: "American Psychiatric Association. Practice Guideline for the Treatment of Patients With Schizophrenia. 3rd ed. 2021",
    url: "https://psychiatryonline.org/doi/book/10.1176/appi.books.9780890424841",
    access: "Summary Open Access"
  },
  serotoninSyndrome: {
    guideline: "Boyer EW, Shannon M. The Serotonin Syndrome. N Engl J Med. 2005;352(11):1112-1120 - Hunter Criteria",
    url: "https://pubmed.ncbi.nlm.nih.gov/15784664/",
    access: "PubMed"
  },
  delirium: {
    guideline: "Inouye SK. Delirium in Older Persons. N Engl J Med. 2006;354(11):1157-1165",
    url: "https://pubmed.ncbi.nlm.nih.gov/16540616/",
    access: "PubMed"
  },
  alcoholWithdrawal: {
    guideline: "ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. J Addict Med. 2020;14(3S):1-72",
    url: "https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management-guideline",
    access: "Open Access Summary"
  },
  capacityEvaluation: {
    guideline: "Appelbaum PS. Assessment of Patients' Competence to Consent to Treatment. N Engl J Med. 2007;357(18):1834-1840",
    url: "https://pubmed.ncbi.nlm.nih.gov/17978292/",
    access: "PubMed - Four components of capacity"
  }
};

// Export for use in CoachDx platform
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PSYCHIATRY_CASES, PSYCHIATRY_REFERENCES };
}
