// CoachDx Palliative Care SBAR Cases
// 8 cases covering palliative care consultations and end-of-life communication
// Each case includes level-specific adaptations for different learners

const PALLIATIVE_CARE_CASES = [
  // SYMPTOM MANAGEMENT
  {
    id: 'pall-pain-crisis',
    title: 'Cancer Pain Crisis',
    category: 'Symptom Management',
    difficulty: 'intermediate',
    patientAge: '64 years',
    patientSex: 'Male',
    chiefComplaint: 'Severe pain not controlled',
    scenario: 'A 64-year-old man with metastatic lung cancer is admitted with severe back pain rated 9/10. He is on oxycodone 10mg q4h at home but it is no longer working. He has known spine metastases.',
    vitals: { HR: 102, BP: '158/94', RR: 22 },
    keyFindings: [
      'Pain 9/10, constant, mid-back',
      'Known T10-L2 vertebral metastases',
      'Current: oxycodone 10mg PO q4h (60mg/day)',
      'Last dose 2 hours ago with no relief',
      'No new neurological deficits',
      'Grimacing, unable to find comfortable position'
    ],
    idealSBAR: {
      situation: 'Calling about a 64-year-old with metastatic lung cancer in pain crisis. Current opioid regimen not controlling pain, rating 9/10.',
      background: 'Known spine metastases T10-L2. Taking oxycodone 60mg/day oral without relief. No new weakness or incontinence. Has been on stable dose for 3 weeks.',
      assessment: 'Uncontrolled cancer pain likely from disease progression. Current opioid dose inadequate. Need to rule out spinal cord compression given location.',
      recommendation: 'Request IV opioid for breakthrough (morphine or hydromorphone), calculate 24-hour requirement and provide appropriate basal and PRN dosing. Consider MRI spine to rule out cord compression. Palliative care consult for pain regimen optimization.'
    },
    learningPoints: ['Opioid dose calculations', 'Cancer pain escalation', 'Red flags for cord compression']
  },
  {
    id: 'pall-dyspnea',
    title: 'Dyspnea at End of Life',
    category: 'Symptom Management',
    difficulty: 'intermediate',
    patientAge: '72 years',
    patientSex: 'Female',
    chiefComplaint: 'Short of breath, comfort care',
    scenario: 'A 72-year-old woman with end-stage COPD on hospice is experiencing worsening dyspnea. She is on 4L oxygen at home. Family is distressed by her air hunger. She is DNR/DNI and wants to remain at home.',
    vitals: { HR: 98, RR: 28, SpO2: '86% on 4L' },
    keyFindings: [
      'End-stage COPD, hospice enrolled',
      'Dyspnea at rest despite oxygen',
      'DNR/DNI, wants to stay home',
      'Currently on oxycodone 5mg q6h for dyspnea',
      'Family anxious, asking if she is suffocating',
      'Alert but fatigued'
    ],
    idealSBAR: {
      situation: 'Calling about a 72-year-old hospice patient with end-stage COPD having worsening dyspnea. DNR/DNI, wishes to remain home. Family distressed.',
      background: 'Enrolled in hospice for COPD. On 4L oxygen and oxycodone 5mg q6h. Wants to remain at home for end-of-life care. SpO2 86% which is near her baseline.',
      assessment: 'Expected end-of-life dyspnea in terminal COPD. Focus should be on symptom relief, not oxygen saturation. Family needs education and support.',
      recommendation: 'Increase opioid for dyspnea relief (opioids are first-line). Consider adding low-dose benzodiazepine for anxiety component. Fan to face may help. Educate family that treating dyspnea sensation is goal, not SpO2. Hospice nurse visit for support.'
    },
    learningPoints: ['Opioids for dyspnea', 'Goals of care in terminal illness', 'Family support at end of life']
  },
  {
    id: 'pall-nausea-bowel-obstruction',
    title: 'Malignant Bowel Obstruction',
    category: 'Symptom Management',
    difficulty: 'advanced',
    patientAge: '58 years',
    patientSex: 'Female',
    chiefComplaint: 'Vomiting, abdominal pain',
    scenario: 'A 58-year-old woman with metastatic ovarian cancer develops abdominal distension, nausea, and vomiting. CT shows multiple levels of small bowel obstruction from peritoneal carcinomatosis. She is not a surgical candidate.',
    vitals: { HR: 96, BP: '118/72', RR: 18 },
    keyFindings: [
      'Metastatic ovarian cancer with peritoneal carcinomatosis',
      'Small bowel obstruction on CT',
      'Not a surgical candidate (diffuse disease)',
      'Nausea 8/10, vomiting 6 times today',
      'No bowel movement in 5 days',
      'Distended abdomen, high-pitched bowel sounds'
    ],
    idealSBAR: {
      situation: 'Calling about a 58-year-old with metastatic ovarian cancer who has malignant bowel obstruction. Not a surgical candidate. Severe nausea and vomiting.',
      background: 'Peritoneal carcinomatosis causing multi-level obstruction. Surgery not an option per oncology and surgery. Has been vomiting all day.',
      assessment: 'Inoperable malignant bowel obstruction requiring medical management for symptom control. Prognosis is limited.',
      recommendation: 'NG tube for immediate relief of vomiting. Start octreotide to reduce secretions. Dexamethasone trial may reduce obstruction. Anti-emetics (haloperidol preferred over metoclopramide in complete obstruction). Discuss goals of care including hospice.'
    },
    learningPoints: ['Medical management of MBO', 'Octreotide for secretions', 'When surgery is not an option']
  },
  // GOALS OF CARE CONVERSATIONS
  {
    id: 'pall-code-status',
    title: 'Code Status Discussion - ICU',
    category: 'Communication',
    difficulty: 'advanced',
    patientAge: '78 years',
    patientSex: 'Male',
    chiefComplaint: 'Worsening septic shock',
    scenario: 'A 78-year-old man with metastatic pancreatic cancer is in the ICU with septic shock on three vasopressors. He is intubated and sedated. His wife is at bedside and he has always been Full Code. The team believes he will not survive this admission.',
    vitals: { HR: 118, BP: '78/48 on 3 pressors', RR: 20 (ventilator) },
    keyFindings: [
      'Metastatic pancreatic cancer, recently stopped chemotherapy',
      'Septic shock requiring 3 vasopressors',
      'Intubated, sedated',
      'Acute kidney injury requiring dialysis consideration',
      'Wife is healthcare proxy',
      'Currently Full Code'
    ],
    idealSBAR: {
      situation: 'Calling about a 78-year-old with metastatic cancer in septic shock on 3 pressors. Team believes he will not survive. Need goals of care discussion with wife.',
      background: 'Pancreatic cancer with mets, stopped chemo 2 weeks ago due to progression. Admitted with pneumonia progressing to septic shock. Currently Full Code. Wife is proxy.',
      assessment: 'Terminal illness with acute decompensation unlikely to be reversible. CPR would not change underlying trajectory. Family meeting needed to align care with prognosis.',
      recommendation: 'Request family meeting with wife, palliative care, and ICU team. Discuss prognosis honestly, recommend transitioning to comfort-focused care. If wife agrees, change code status and consider terminal extubation when ready.'
    },
    learningPoints: ['Discussing code status in ICU', 'Prognostic disclosure', 'Terminal extubation']
  },
  {
    id: 'pall-family-conflict',
    title: 'Family Conflict About Care',
    category: 'Communication',
    difficulty: 'advanced',
    patientAge: '82 years',
    patientSex: 'Female',
    chiefComplaint: 'Family disagrees about treatment',
    scenario: 'An 82-year-old woman with severe dementia and aspiration pneumonia is on a ventilator. Her son (healthcare proxy) wants "everything done" while her daughter says "mom would never want this." Patient has no advance directive.',
    vitals: { HR: 88, BP: '128/72', RR: 14 (ventilator) },
    keyFindings: [
      'Severe dementia (nonverbal at baseline)',
      'Aspiration pneumonia requiring ventilator',
      'No advance directive',
      'Son is healthcare proxy, wants aggressive care',
      'Daughter believes mother would want comfort care',
      'Family conflict escalating'
    ],
    idealSBAR: {
      situation: 'Calling about an 82-year-old with severe dementia on ventilator for aspiration pneumonia. Family conflict between proxy (son) and daughter about goals of care.',
      background: 'Nonverbal dementia at baseline. No advance directive exists. Son is legal proxy but daughter believes mother would want comfort care. Conflict is affecting care decisions.',
      assessment: 'Family disagreement about substituted judgment. Need facilitated family meeting to focus on what patient would want, not what family members want.',
      recommendation: 'Request palliative care and social work for family meeting. Focus discussion on patients values and wishes, not family preferences. May need ethics consultation if conflict unresolved. Proxy has legal authority but should consider all input.'
    },
    learningPoints: ['Substituted judgment', 'Family meetings', 'Ethics consultation indications']
  },
  {
    id: 'pall-breaking-bad-news',
    title: 'Breaking Bad News',
    category: 'Communication',
    difficulty: 'intermediate',
    patientAge: '55 years',
    patientSex: 'Female',
    chiefComplaint: 'New diagnosis of metastatic cancer',
    scenario: 'A 55-year-old woman had a CT scan for abdominal pain which revealed a large pancreatic mass with liver metastases. Biopsy confirmed adenocarcinoma. You need to deliver this diagnosis.',
    vitals: { HR: 82, BP: '132/78', RR: 16 },
    keyFindings: [
      'CT: 4cm pancreatic mass with multiple liver metastases',
      'Biopsy: adenocarcinoma',
      'No prior cancer history',
      'Came in for vague abdominal discomfort',
      'Husband is in waiting room',
      'Patient appears anxious, waiting for results'
    ],
    idealSBAR: {
      situation: 'Need to deliver new diagnosis of metastatic pancreatic cancer to a 55-year-old who came in for abdominal pain. This is unexpected and serious news.',
      background: 'CT showed pancreatic mass with liver metastases. Biopsy confirmed adenocarcinoma. Patient has no idea about diagnosis yet. Husband available for support.',
      assessment: 'Need to deliver life-altering news. Should use structured approach (SPIKES protocol). Ensure privacy, ask if she wants family present, assess her understanding first.',
      recommendation: 'Will use SPIKES framework: Set up private space, assess Perception of situation, obtain Invitation to share news, deliver Knowledge clearly and compassionately, address Emotions with empathy, Summarize and plan next steps. Will offer to bring husband in.'
    },
    learningPoints: ['SPIKES protocol', 'Delivering bad news', 'Emotional support']
  },
  // HOSPICE TRANSITIONS
  {
    id: 'pall-hospice-transition',
    title: 'Transitioning to Hospice',
    category: 'Hospice',
    difficulty: 'intermediate',
    patientAge: '68 years',
    patientSex: 'Male',
    chiefComplaint: 'Declining despite treatment',
    scenario: 'A 68-year-old man with ALS has progressive weakness despite riluzole. He now requires BiPAP at night and has lost 30 pounds. Swallowing is becoming difficult. He asks, "Is it time for hospice?"',
    vitals: { HR: 78, BP: '118/72', RR: 18 },
    keyFindings: [
      'ALS diagnosed 2 years ago',
      'FVC declined to 40% predicted',
      'Requires BiPAP nightly',
      'Dysphagia, 30 lb weight loss',
      'Asking about hospice',
      'Wants to avoid intubation'
    ],
    idealSBAR: {
      situation: 'Calling about a 68-year-old with progressive ALS asking about hospice. FVC 40%, declining function, dysphagia, weight loss.',
      background: 'ALS diagnosed 2 years ago. On riluzole and BiPAP. FVC 40% (predicted survival <18 months). Has expressed wish to avoid intubation.',
      assessment: 'Meets hospice criteria for ALS: FVC <50%, dysphagia, significant weight loss, declining function. Prognosis likely <6 months. Patient is ready to discuss.',
      recommendation: 'Confirm his understanding of prognosis and goals. If he wants comfort focus, refer to hospice. Discuss what hospice provides (symptom management, support, can continue BiPAP for comfort). Complete advance directive including intubation preferences.'
    },
    learningPoints: ['ALS hospice criteria', 'Patient-initiated hospice discussions', 'BiPAP on hospice']
  },
  {
    id: 'pall-withdrawal-care',
    title: 'Withdrawal of Life-Sustaining Treatment',
    category: 'End of Life',
    difficulty: 'advanced',
    patientAge: '71 years',
    patientSex: 'Female',
    chiefComplaint: 'Family ready to withdraw care',
    scenario: 'A 71-year-old woman had a massive stroke 10 days ago. She remains unresponsive with no brainstem reflexes. Neurology confirms poor prognosis. Family has decided to withdraw mechanical ventilation per her previously expressed wishes.',
    vitals: { HR: 72, BP: '138/82 on phenylephrine', RR: 14 (ventilator) },
    keyFindings: [
      'Massive MCA and ACA stroke',
      'No brainstem reflexes',
      'Intubated, on vasopressor',
      'Neurology: no meaningful recovery expected',
      'Family decided to withdraw ventilator',
      'Had told family she would not want to live this way'
    ],
    idealSBAR: {
      situation: 'Family of 71-year-old with devastating stroke has decided to withdraw mechanical ventilation. Need to plan compassionate extubation.',
      background: 'Massive stroke 10 days ago, no brainstem reflexes, no meaningful recovery expected per neurology. Patient had previously told family she would not want machines.',
      assessment: 'Appropriate decision to withdraw life-sustaining treatment given prognosis and patient values. Need to ensure comfort during withdrawal process.',
      recommendation: 'Prepare comfort medications before extubation (morphine for dyspnea, midazolam if needed for agitation). Stop vasopressor. Family at bedside when ready. Spiritual care if desired. Explain to family what to expect during dying process.'
    },
    learningPoints: ['Terminal extubation process', 'Comfort medication protocols', 'Supporting family during withdrawal']
  }
];

// Open-Access Guidelines References for Palliative Care Cases
const PALLIATIVE_REFERENCES = {
  painManagement: {
    guideline: "WHO Guidelines for the Pharmacological and Radiotherapeutic Management of Cancer Pain in Adults and Adolescents. 2018",
    url: "https://www.who.int/publications/i/item/9789241550390",
    access: "Open Access - WHO"
  },
  dyspnea: {
    guideline: "Kamal AH, Maguire JM, Wheeler JL, et al. Dyspnea Review for the Palliative Care Professional. J Palliat Med. 2012;15(1):106-114",
    url: "https://pubmed.ncbi.nlm.nih.gov/22268406/",
    access: "PubMed"
  },
  goalsOfCare: {
    guideline: "Bernacki RE, Block SD. Communication About Serious Illness Care Goals: A Review and Synthesis. JAMA Intern Med. 2014;174(12):1994-2003",
    url: "https://pubmed.ncbi.nlm.nih.gov/25330167/",
    access: "PubMed"
  },
  hospiceEligibility: {
    guideline: "National Hospice and Palliative Care Organization - Hospice Eligibility Guidelines",
    url: "https://www.nhpco.org/hospice-care-overview/hospice-eligibility/",
    access: "Open Access"
  },
  withdrawalOfCare: {
    guideline: "Truog RD, Campbell ML, Curtis JR, et al. Recommendations for End-of-Life Care in the ICU. Crit Care Med. 2008;36(3):953-963",
    url: "https://pubmed.ncbi.nlm.nih.gov/18431285/",
    access: "PubMed - SCCM/ACCP/ATS/AACN/AAHPM statement"
  },
  SPIKES: {
    guideline: "Baile WF, Buckman R, Lenzi R, et al. SPIKES—A Six-Step Protocol for Delivering Bad News. Oncologist. 2000;5(4):302-311",
    url: "https://pubmed.ncbi.nlm.nih.gov/10964998/",
    access: "Open Access"
  }
};

// Export for use in CoachDx platform
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PALLIATIVE_CARE_CASES, PALLIATIVE_REFERENCES };
}
