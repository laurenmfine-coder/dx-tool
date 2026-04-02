/* emr-data/depression.js — Major Depression: PHQ-9, SSRI Initiation, Safety Assessment */
window.CASES = window.CASES || {};
window.CASES['depression'] = {
  id: 'depression', name: 'Michael Torres', age: '31M', dob: '1994-01-18',
  mrn: 'RDX-2026-44221', setting: 'Primary Care / Outpatient', category: 'psychiatric', acuity: 3,
  chiefComplaint: 'Feeling worthless, not sleeping, lost 15 lbs — PHQ-9 score 19 (severe depression)',
  diagnosis: 'Major Depressive Disorder — Severe (PHQ-9 = 19), No Active Suicidal Ideation',
  presentation: {
    hpi: 'Michael Torres, 31M, presents to primary care with 8 weeks of depressed mood, anhedonia, poor sleep (early morning awakening), fatigue, poor concentration, 15-lb weight loss, and feelings of worthlessness. PHQ-9 score = 19 (severe). He denies active suicidal ideation — he states "sometimes I wish I wasn\'t here, but I wouldn\'t do anything." He has no prior psychiatric history, no substance use, no family history. He denies any recent stressors but notes his father passed away 4 months ago. TSH ordered: normal. He is willing to start treatment.',
    pmh: ['No prior psychiatric history'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '122/76', HR: '76', RR: '14', Temp: '37.0°C', SpO2: '99%', Weight: '68kg (down from 75kg)' },
  labs: {
    'PHQ-9': '19 — SEVERE depression (0-4 minimal, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe)',
    'TSH': '1.8 mIU/L (normal — hypothyroidism excluded as MDD mimic)',
    'CBC': 'Normal (anemia excluded)',
    'BMP': 'Normal',
    'Urine drug screen': 'Negative (substance-induced mood disorder excluded)'
  },
  orders: {
    correct: [
      { id: 'safety-assess', name: 'Structured safety assessment — document SI, plan, intent, access to means, protective factors', rationale: 'Passive suicidal ideation ("wish I wasn\'t here") requires structured assessment: Is there a plan? (No). Do they have access to means? (Assess firearms/medications at home). What are their reasons for living? Document Columbia Severity Rating Scale (C-SSRS). Passive SI without plan/intent → outpatient treatment is appropriate with safety planning.' },
      { id: 'ssri-start', name: 'Sertraline 50mg PO daily × 2 weeks, then 100mg if tolerated — first-line SSRI', rationale: 'SSRIs are first-line for MDD. Sertraline has best tolerability and evidence profile. Start low, titrate after 2-4 weeks. Counsel on delay in effect (4-8 weeks for full benefit) and paradoxical anxiety increase in first 2 weeks. Do not stop abruptly (discontinuation syndrome).' },
      { id: 'therapy-referral', name: 'Refer to psychotherapy — CBT or IPT (equivalent efficacy to medication, better durability)', rationale: 'Combination of medication + psychotherapy is more effective than either alone for moderate-severe MDD. CBT is the most evidence-based. IPT for grief-related depression (bereavement component likely present here — father died 4 months ago).' },
      { id: 'safety-plan', name: 'Safety planning + means restriction counseling — document in chart', rationale: 'Safety planning: identify warning signs, coping strategies, social supports, crisis resources (988 Suicide & Crisis Lifeline). Means restriction: ask about firearms and medications at home. Restricting means reduces suicide risk independently of other treatment.' },
      { id: 'followup-2wks', name: 'Follow-up in 2 weeks — assess for SSRI tolerability, SI re-assessment', rationale: 'SSRI can increase suicidality in first 2 weeks (particularly in adolescents and young adults — FDA black box warning). Reassess in 2 weeks. If no improvement at 4-6 weeks on adequate dose → augment or switch.' }
    ],
    incorrect: [
      { id: 'benzo-depression', name: 'Alprazolam 0.5mg TID for anxiety and sleep', rationale: 'Benzodiazepines are NOT indicated for MDD and are CONTRAINDICATED in patients with any suicidal ideation (lethal in overdose). They treat anxiety symptoms temporarily but do not address the underlying depression and carry significant addiction risk.' },
      { id: 'grief-not-mdd', name: 'This is grief, not depression — do not treat, he just lost his father', rationale: 'Bereavement does not protect against MDD diagnosis. DSM-5 removed the bereavement exclusion. If criteria for MDD are met (≥5 symptoms for ≥2 weeks), treat. Bereavement-related MDD is still MDD and responds to treatment.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'PHQ-9 scoring: 0-4 minimal, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe. PHQ-9 ≥10 requires clinical evaluation for MDD. Item 9 (suicidal ideation) requires safety assessment regardless of total score.',
      'SSRI start: "start low, go slow" — 4-8 week lag to full therapeutic effect. Warn patients about initial anxiety worsening in weeks 1-2 (do not mistake for treatment failure). Never stop abruptly (discontinuation syndrome).',
      'DSM-5: bereavement exclusion was removed — grief can coexist with MDD and MDD occurring after loss should be treated.',
      'Safety planning is a specific, structured intervention distinct from a no-harm contract (no-harm contracts have no evidence base). Columbia Suicide Severity Rating Scale (C-SSRS) is the validated tool.'
    ],
    boardPearls: [
      'SSRI black box warning: increased suicidality in children, adolescents, and young adults (under 25) in first 1-2 weeks. Monitor closely. Risk in older adults: SSRI is protective. Overall: benefits outweigh risks in MDD.',
      'Treatment-resistant depression (TRD): failure of 2+ adequate SSRI trials → augment (lithium, atypical antipsychotics, aripiprazole) or switch class (SNRIs, bupropion). Esketamine (Spravato) nasal spray FDA-approved for TRD.',
      'ECT (electroconvulsive therapy): fastest and most effective treatment for severe MDD (80-90% response), psychotic depression, or high suicidal risk requiring rapid response. Underused due to stigma.',
      'Bipolar depression vs MDD: manic/hypomanic episodes? Family history of bipolar? Starting SSRIs in unrecognized bipolar 2 can precipitate mania → screen with MDQ (Mood Disorder Questionnaire).'
    ]
  },
  references: [{ id: 'StatPearls-MDD', title: 'Major Depressive Disorder', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK559078/', openAccess: true }]
};
