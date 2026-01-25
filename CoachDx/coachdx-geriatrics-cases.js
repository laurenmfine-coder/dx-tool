// CoachDx Geriatrics SBAR Cases
// 12 cases covering common geriatric presentations and syndromes
// Each case includes level-specific adaptations for different learners

const GERIATRICS_CASES = [
  // FALLS AND MOBILITY
  {
    id: 'geri-fall-polypharmacy',
    title: 'Fall with Polypharmacy',
    category: 'Falls',
    difficulty: 'intermediate',
    patientAge: '82 years',
    patientSex: 'Female',
    chiefComplaint: 'Found on floor this morning',
    scenario: 'An 82-year-old woman was found on her bedroom floor by her daughter this morning. She is unsure if she lost consciousness. She takes 12 medications including metoprolol, furosemide, and temazepam for sleep.',
    vitals: { HR: 58, BP: '118/62 sitting, 94/58 standing', RR: 16 },
    keyFindings: [
      'Orthostatic hypotension (BP drop >20 systolic)',
      'Bradycardia (HR 58)',
      'No head trauma or neurological deficits',
      'On temazepam, metoprolol, furosemide',
      'Mild cognitive impairment at baseline',
      'Prior fall 3 months ago'
    ],
    idealSBAR: {
      situation: 'Calling about an 82-year-old with fall this morning, found on floor. Has orthostatic hypotension and bradycardia. Taking multiple high-risk medications.',
      background: 'Takes 12 medications including temazepam, metoprolol, and furosemide. History of fall 3 months ago. Mild cognitive impairment at baseline. Lives alone.',
      assessment: 'Multifactorial fall likely related to polypharmacy: orthostasis from diuretic/beta-blocker, bradycardia, and sedative use. High risk for recurrent falls.',
      recommendation: 'Need medication reconciliation and deprescribing discussion. Hold temazepam, consider reducing furosemide and metoprolol if tolerated. Physical therapy evaluation. Home safety assessment.'
    },
    learningPoints: ['Beers Criteria medications', 'Orthostatic hypotension workup', 'Fall risk assessment']
  },
  {
    id: 'geri-fall-syncope',
    title: 'Fall with Possible Syncope',
    category: 'Falls',
    difficulty: 'advanced',
    patientAge: '78 years',
    patientSex: 'Male',
    chiefComplaint: 'Collapsed while walking',
    scenario: 'A 78-year-old man collapsed while walking his dog. Bystander reports he went down suddenly without bracing. He woke up confused but is now alert. Has pacemaker placed 5 years ago.',
    vitals: { HR: 72, BP: '138/84', RR: 16 },
    keyFindings: [
      'Witnessed sudden collapse without prodrome',
      'Brief loss of consciousness (~30 seconds)',
      'No seizure activity witnessed',
      'Pacemaker in place (dual chamber)',
      'ECG shows paced rhythm',
      'Mild head laceration from fall'
    ],
    idealSBAR: {
      situation: 'Calling about a 78-year-old with witnessed syncope while walking. Sudden collapse, no prodrome, brief LOC. Has dual chamber pacemaker.',
      background: 'Pacemaker placed 5 years ago for sick sinus syndrome. History of CAD, hypertension. On aspirin and lisinopril.',
      assessment: 'High-risk syncope: sudden onset without warning suggests cardiac etiology. Pacemaker malfunction or arrhythmia must be ruled out. High risk for recurrence and injury.',
      recommendation: 'Request pacemaker interrogation urgently. Continuous telemetry monitoring. Echocardiogram to assess function. May need cardiology consult. Head CT given head laceration and antiplatelet therapy.'
    },
    learningPoints: ['High-risk vs low-risk syncope', 'Pacemaker evaluation', 'Syncope workup in elderly']
  },
  // DELIRIUM AND COGNITIVE CHANGES
  {
    id: 'geri-delirium-uti',
    title: 'Delirium - UTI in Dementia Patient',
    category: 'Delirium',
    difficulty: 'beginner',
    patientAge: '85 years',
    patientSex: 'Female',
    chiefComplaint: 'More confused than usual',
    scenario: 'An 85-year-old woman with moderate dementia is brought from her nursing home for increased confusion over 2 days. She is usually oriented to her name but is now not recognizing her daughter.',
    vitals: { HR: 92, BP: '128/72', RR: 18, Temp: '37.8°C' },
    keyFindings: [
      'Acute change from baseline (per nursing home)',
      'Fluctuating attention',
      'Low-grade fever',
      'Urinalysis: positive for leukocyte esterase and nitrites',
      'New urinary incontinence',
      'No focal neurological deficits'
    ],
    idealSBAR: {
      situation: 'Calling about an 85-year-old with dementia at baseline who now has delirium superimposed on dementia. Acute change over 2 days with fluctuating course.',
      background: 'Moderate dementia, usually knows family. Nursing home resident. UA positive for infection. New urinary incontinence.',
      assessment: 'Delirium likely secondary to urinary tract infection. CAM positive: acute onset, fluctuating course, inattention, and disorganized thinking.',
      recommendation: 'Treat UTI with antibiotics appropriate for her renal function. Non-pharmacological delirium precautions. Avoid benzodiazepines and anticholinergics. Expect improvement in 24-72 hours with treatment.'
    },
    learningPoints: ['CAM criteria for delirium', 'Delirium superimposed on dementia', 'Atypical presentations of infection in elderly']
  },
  {
    id: 'geri-delirium-postop',
    title: 'Post-Operative Delirium Prevention',
    category: 'Delirium',
    difficulty: 'intermediate',
    patientAge: '80 years',
    patientSex: 'Male',
    chiefComplaint: 'Pre-operative consultation',
    scenario: 'An 80-year-old man is scheduled for elective hip replacement tomorrow. Surgical team requests geriatric consultation for delirium prevention. He has mild cognitive impairment and takes oxybutynin for overactive bladder.',
    vitals: { HR: 72, BP: '142/82', RR: 14 },
    keyFindings: [
      'Mild cognitive impairment (MoCA 22/30)',
      'On oxybutynin (anticholinergic)',
      'Age >70 years',
      'Major surgery planned',
      'No hearing aids, wears glasses',
      'Lives independently'
    ],
    idealSBAR: {
      situation: 'Calling for pre-operative geriatric consult on 80-year-old scheduled for hip replacement. Multiple risk factors for post-operative delirium.',
      background: 'Mild cognitive impairment at baseline. Takes oxybutynin (strong anticholinergic). Age 80, major surgery planned. Has vision but no hearing impairment.',
      assessment: 'High risk for post-operative delirium: age, cognitive impairment, anticholinergic medication, major surgery. Modifiable risk factors present.',
      recommendation: 'Recommend stopping oxybutynin pre-op. Ensure glasses at bedside post-op. Implement HELP protocol: reorientation, early mobilization, sleep protocol, minimize sedating medications. Avoid Foley if possible. Daily CAM screening.'
    },
    learningPoints: ['Delirium risk factors', 'HELP protocol', 'Anticholinergic burden']
  },
  // FUNCTIONAL DECLINE
  {
    id: 'geri-failure-thrive',
    title: 'Failure to Thrive',
    category: 'Geriatric Syndromes',
    difficulty: 'intermediate',
    patientAge: '88 years',
    patientSex: 'Female',
    chiefComplaint: 'Not eating, losing weight',
    scenario: 'An 88-year-old woman has lost 15 pounds over 3 months. Her daughter reports she barely eats, stays in bed most of the day, and says "whats the point." She was hospitalized for pneumonia 4 months ago.',
    vitals: { HR: 68, BP: '108/62', RR: 14 },
    keyFindings: [
      '15 lb weight loss (12% body weight)',
      'BMI now 18.2',
      'Decreased appetite',
      'Functional decline: now needs help with ADLs',
      'Flat affect, anhedonia',
      'GDS (Geriatric Depression Scale): 11/15'
    ],
    idealSBAR: {
      situation: 'Calling about an 88-year-old with failure to thrive: 15 lb weight loss, functional decline, and suspected depression following hospitalization.',
      background: 'Hospitalized for pneumonia 4 months ago, has not returned to baseline since. Now needs assistance with ADLs. GDS suggests depression. Husband died 1 year ago.',
      assessment: 'Failure to thrive with multiple contributing factors: post-hospital syndrome, depression, possible grief. Need to rule out organic causes of weight loss.',
      recommendation: 'Recommend depression treatment trial, nutritional support (ONS), physical therapy, and workup for other causes: TSH, CBC, CMP, cancer screening if not done. Consider palliative care consultation to clarify goals.'
    },
    learningPoints: ['Failure to thrive workup', 'Post-hospital syndrome', 'Depression in elderly']
  },
  {
    id: 'geri-functional-decline',
    title: 'Acute Functional Decline',
    category: 'Geriatric Syndromes',
    difficulty: 'intermediate',
    patientAge: '79 years',
    patientSex: 'Male',
    chiefComplaint: 'Cant get out of chair anymore',
    scenario: 'A 79-year-old man who was previously walking independently now cannot rise from a chair without assistance. This changed over 2 weeks. No falls, no pain. He was started on atorvastatin 6 weeks ago.',
    vitals: { HR: 76, BP: '138/82', RR: 14 },
    keyFindings: [
      'Proximal muscle weakness (cant rise from chair)',
      'No muscle tenderness',
      'Started atorvastatin 6 weeks ago',
      'CK elevated at 850 U/L',
      'No sensory deficits',
      'Reflexes intact'
    ],
    idealSBAR: {
      situation: 'Calling about a 79-year-old with new proximal muscle weakness over 2 weeks, unable to rise from chair. Started statin 6 weeks ago.',
      background: 'Previously independent ambulator. Atorvastatin started 6 weeks ago. CK mildly elevated at 850. No falls or pain.',
      assessment: 'Statin-induced myopathy most likely given temporal relationship and elevated CK. Must rule out other causes of proximal weakness.',
      recommendation: 'Stop atorvastatin immediately. Recheck CK in 1 week. Physical therapy evaluation. If weakness persists after statin discontinued, further workup for inflammatory myopathy, hypothyroidism, or other causes.'
    },
    learningPoints: ['Statin myopathy recognition', 'Proximal weakness differential', 'Medication adverse effects in elderly']
  },
  // MEDICATION MANAGEMENT
  {
    id: 'geri-deprescribing',
    title: 'Deprescribing Discussion',
    category: 'Polypharmacy',
    difficulty: 'advanced',
    patientAge: '91 years',
    patientSex: 'Male',
    chiefComplaint: 'Medication review requested',
    scenario: 'A 91-year-old man with heart failure, diabetes, and dementia is taking 15 medications. His daughter asks if all these medications are still necessary. His life expectancy is estimated at less than 1 year.',
    vitals: { HR: 72, BP: '118/68', RR: 16 },
    keyFindings: [
      'Takes 15 medications',
      'Including: atorvastatin, metformin, amlodipine, lisinopril, aspirin, omeprazole, donepezil',
      'Moderate dementia, needs assistance with medications',
      'Frequent falls',
      'Limited life expectancy (<1 year)',
      'Daughter is healthcare proxy'
    ],
    idealSBAR: {
      situation: 'Calling about a 91-year-old on 15 medications, family questioning necessity. Limited life expectancy, moderate dementia, frequent falls.',
      background: 'Heart failure, diabetes, dementia. Daughter manages medications. Has fallen 3 times in past 6 months. Estimated survival less than 1 year.',
      assessment: 'Polypharmacy with likely inappropriate medications given limited life expectancy. Statins and tight glycemic control unlikely to benefit. Some medications contributing to fall risk.',
      recommendation: 'Consider deprescribing: stop statin (no benefit with <1 year life expectancy), relax diabetes goals (stop metformin or reduce), review antihypertensives (may be over-treated). Continue HF medications for symptom control. Family meeting to discuss goals of care.'
    },
    learningPoints: ['Time to benefit concept', 'Deprescribing principles', 'Goals of care discussions']
  },
  // TRANSITIONS OF CARE
  {
    id: 'geri-discharge-planning',
    title: 'Complex Discharge Planning',
    category: 'Transitions of Care',
    difficulty: 'intermediate',
    patientAge: '84 years',
    patientSex: 'Female',
    chiefComplaint: 'Ready for discharge after hip fracture',
    scenario: 'An 84-year-old woman is medically ready for discharge 5 days after hip fracture repair. She was living alone before admission. Physical therapy notes she needs moderate assistance with transfers and cannot climb stairs.',
    vitals: { HR: 74, BP: '128/72', RR: 14 },
    keyFindings: [
      'Status post hip fracture repair day 5',
      'Needs moderate assist for transfers',
      'Cannot climb stairs (lives in 2-story home)',
      'Lives alone, daughter works full-time',
      'On anticoagulation for DVT prophylaxis',
      'Baseline independent before fall'
    ],
    idealSBAR: {
      situation: 'Calling about an 84-year-old post hip fracture repair, medically stable but not safe for discharge home. Needs moderate assistance and cannot climb stairs.',
      background: 'Lived alone in 2-story home before admission. Was independent at baseline. Daughter cannot provide 24-hour care. Needs ongoing PT/OT.',
      assessment: 'Not safe for discharge home given functional limitations and lack of home support. Requires short-term rehabilitation for continued therapy and functional improvement.',
      recommendation: 'Recommend skilled nursing facility with rehabilitation services. Continue DVT prophylaxis. Follow-up with orthopedics. Home safety evaluation before eventual discharge home. May need home PT/OT when ready.'
    },
    learningPoints: ['Discharge disposition decision-making', 'Rehabilitation vs home', 'Post-acute care planning']
  },
  // END-OF-LIFE CARE
  {
    id: 'geri-goals-care',
    title: 'Goals of Care Discussion',
    category: 'End of Life',
    difficulty: 'advanced',
    patientAge: '89 years',
    patientSex: 'Male',
    chiefComplaint: 'Recurrent aspiration pneumonia',
    scenario: 'An 89-year-old man with advanced dementia is admitted for his third aspiration pneumonia in 6 months. He no longer recognizes family and is dependent for all ADLs. His daughter is his healthcare proxy.',
    vitals: { HR: 88, BP: '102/62', RR: 22, Temp: '38.2°C', SpO2: '91% on 2L' },
    keyFindings: [
      'Advanced dementia (FAST stage 7)',
      'Dysphagia with recurrent aspiration',
      'Third pneumonia in 6 months',
      'Dependent for all ADLs',
      'No advance directive on file',
      'Daughter is healthcare proxy'
    ],
    idealSBAR: {
      situation: 'Calling about an 89-year-old with advanced dementia admitted with third aspiration pneumonia. Need goals of care discussion with healthcare proxy.',
      background: 'FAST stage 7 dementia, does not recognize family. Recurrent aspiration despite modified diet. No advance directive. Daughter is proxy.',
      assessment: 'Terminal trajectory with advanced dementia and recurrent aspiration. High likelihood of continued decline and recurrent events regardless of intervention. Family meeting needed.',
      recommendation: 'Request family meeting to discuss goals of care, prognosis, and options including hospice. Treat current pneumonia but discuss whether aggressive measures (hospitalization, IV antibiotics) align with goals. Consider palliative care consult.'
    },
    learningPoints: ['FAST staging for dementia', 'Prognosis in advanced dementia', 'Goals of care discussions']
  },
  {
    id: 'geri-hospice-referral',
    title: 'Hospice Eligibility Discussion',
    category: 'End of Life',
    difficulty: 'intermediate',
    patientAge: '76 years',
    patientSex: 'Female',
    chiefComplaint: 'Metastatic cancer, declining function',
    scenario: 'A 76-year-old woman with metastatic pancreatic cancer has declined chemotherapy. She has lost 20 pounds, has severe pain requiring opioids, and can no longer leave her bed. Oncology has referred for hospice evaluation.',
    vitals: { HR: 94, BP: '98/58', RR: 20 },
    keyFindings: [
      'Metastatic pancreatic cancer, declined further treatment',
      'PPS (Palliative Performance Scale) 30%',
      'Bedbound',
      'Anorexia, cachexia',
      'Pain requiring opioids',
      'Albumin 2.1'
    ],
    idealSBAR: {
      situation: 'Calling about a 76-year-old with metastatic pancreatic cancer for hospice eligibility evaluation. Has declined further oncologic treatment.',
      background: 'Pancreatic cancer with liver metastases diagnosed 8 months ago. Declined chemotherapy after first cycle. Now bedbound, severe weight loss, on opioids for pain.',
      assessment: 'Meets hospice criteria: terminal diagnosis, estimated prognosis <6 months, declined disease-directed therapy, significant functional decline (PPS 30%).',
      recommendation: 'Recommend hospice enrollment. Patient has expressed wish to be comfortable at home. Will need hospice team for symptom management, caregiver support, and end-of-life planning. Ensure code status documented.'
    },
    learningPoints: ['Hospice eligibility criteria', 'Palliative Performance Scale', 'Transitioning to comfort care']
  },
  // SPECIAL GERIATRIC ISSUES
  {
    id: 'geri-elder-abuse',
    title: 'Suspected Elder Abuse',
    category: 'Elder Abuse',
    difficulty: 'advanced',
    patientAge: '83 years',
    patientSex: 'Female',
    chiefComplaint: 'Brought in by son for weakness',
    scenario: 'An 83-year-old woman is brought to the ED by her son for "weakness." She appears malnourished and has multiple bruises in various stages of healing. When asked about the bruises, she looks at her son and says nothing.',
    vitals: { HR: 88, BP: '108/62', RR: 16 },
    keyFindings: [
      'Appears malnourished, BMI 16',
      'Multiple bruises on arms and torso in various stages',
      'Poor hygiene',
      'Looks at son before answering questions',
      'Son is impatient, answers for her',
      'Lives with son who manages her finances'
    ],
    idealSBAR: {
      situation: 'Calling about an 83-year-old with signs concerning for elder abuse: malnutrition, multiple unexplained bruises, and appears fearful around son.',
      background: 'Lives with son who manages her finances. Multiple bruises in various stages of healing. Patient deferential to son, reluctant to speak alone.',
      assessment: 'High suspicion for elder abuse: physical signs (bruises, malnutrition), behavioral signs (fearful, deferential), and caregiver red flags (controlling, answers for patient).',
      recommendation: 'Need to interview patient alone without son present. Social work consult required. If abuse confirmed or highly suspected, mandatory reporting to Adult Protective Services. May need admission for safety while investigation proceeds.'
    },
    learningPoints: ['Elder abuse recognition', 'Mandatory reporting requirements', 'Interviewing vulnerable adults']
  },
  {
    id: 'geri-driving-safety',
    title: 'Driving Safety Evaluation',
    category: 'Geriatric Safety',
    difficulty: 'intermediate',
    patientAge: '82 years',
    patientSex: 'Male',
    chiefComplaint: 'Daughter concerned about driving',
    scenario: 'An 82-year-old mans daughter accompanies him for his annual visit. She reports he has gotten lost driving to familiar places three times in the past month and has new dents on his car he cannot explain.',
    vitals: { HR: 72, BP: '142/82', RR: 14 },
    keyFindings: [
      'MoCA score 21/30 (mild cognitive impairment)',
      'Got lost driving 3 times recently',
      'Unexplained car damage',
      'Denies any problems with driving',
      'Still driving daily to store',
      'No focal neurological deficits'
    ],
    idealSBAR: {
      situation: 'Calling about an 82-year-old with cognitive impairment and concerning driving history: getting lost, unexplained car damage. Daughter worried about safety.',
      background: 'MoCA 21/30 suggesting mild cognitive impairment. Got lost three times going to familiar places. New dents on car. Continues to drive daily.',
      assessment: 'Unsafe driver based on objective evidence: getting lost, car damage, cognitive impairment. Patient lacks insight into deficits. High risk for motor vehicle accident.',
      recommendation: 'Recommend formal driving evaluation by occupational therapist. May need to report to DMV depending on state law. Family meeting to discuss driving cessation and alternative transportation. Screen for dementia progression.'
    },
    learningPoints: ['Driving safety assessment', 'Reporting requirements vary by state', 'Discussing driving cessation']
  }
];

// Open-Access Guidelines References for Geriatrics Cases
const GERIATRICS_REFERENCES = {
  falls: {
    guideline: "Panel on Prevention of Falls in Older Persons, AGS/BGS. Summary of the Updated AGS/BGS Clinical Practice Guideline for Prevention of Falls. J Am Geriatr Soc. 2011;59(1):148-157",
    url: "https://pubmed.ncbi.nlm.nih.gov/21226685/",
    access: "PubMed - Open summary available"
  },
  delirium: {
    guideline: "AGS/NIA Delirium Conference Writing Group. American Geriatrics Society Abstracted Clinical Practice Guideline for Postoperative Delirium. J Am Geriatr Soc. 2015;63(1):142-150",
    url: "https://pubmed.ncbi.nlm.nih.gov/25495432/",
    access: "PubMed"
  },
  polypharmacy: {
    guideline: "American Geriatrics Society Beers Criteria Update Expert Panel. AGS 2023 Updated Beers Criteria. J Am Geriatr Soc. 2023;71(7):2052-2081",
    url: "https://pubmed.ncbi.nlm.nih.gov/37139824/",
    access: "PubMed - Full criteria available"
  },
  deprescribing: {
    guideline: "Deprescribing.org - Evidence-based deprescribing guidelines",
    url: "https://deprescribing.org/resources/deprescribing-guidelines-algorithms/",
    access: "Open Access"
  },
  elderAbuse: {
    guideline: "Lachs MS, Pillemer KA. Elder Abuse. N Engl J Med. 2015;373(20):1947-1956",
    url: "https://pubmed.ncbi.nlm.nih.gov/26559573/",
    access: "PubMed"
  },
  goalsOfCare: {
    guideline: "Bernacki RE, Block SD. Communication About Serious Illness Care Goals. JAMA Intern Med. 2014;174(12):1994-2003",
    url: "https://pubmed.ncbi.nlm.nih.gov/25330167/",
    access: "PubMed"
  }
};

// Export for use in CoachDx platform
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GERIATRICS_CASES, GERIATRICS_REFERENCES };
}
