/* emr-data/multiple-sclerosis.js — MS Relapse + DMT Initiation */
window.CASES = window.CASES || {};
window.CASES['multiple-sclerosis'] = {
  id: 'multiple-sclerosis', name: 'Rachel Kim', age: '29F', dob: '1996-05-03',
  mrn: 'RDX-2026-28833', setting: 'Neurology Clinic → Infusion Center', category: 'neurologic', acuity: 2,
  chiefComplaint: 'Acute right eye pain with vision loss + right leg weakness — second neurological episode in 1 year',
  diagnosis: 'Multiple Sclerosis — Second Relapse, McDonald Criteria Met, DMT Initiation Indicated',
  presentation: {
    hpi: '29F with Caucasian ancestry. 8 months ago had episode of left arm tingling that resolved over 3 weeks (untreated). Now with 5 days of painful right eye vision loss (retrobulbar optic neuritis) + right leg weakness and spasticity. MRI brain: 4 T2 periventricular lesions (Dawson\'s fingers), 2 juxtacortical, 1 infratentorial. Gadolinium-enhancing lesion in right optic radiation. MRI spine: C5-C6 cord lesion. LP: oligoclonal bands (4 bands) + elevated IgG index. McDonald criteria: dissemination in time (2 clinical episodes) AND space (brain + spine + optic nerve) = RRMS confirmed.',
    pmh: ['First demyelinating episode 8 months ago (arm tingling) — untreated'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '116/72', HR: '72', RR: '14', Temp: '37.0°C', SpO2: '99%' },
  labs: {
    'MRI Brain + Spine (Gd)': '4 T2/FLAIR periventricular lesions (Dawson\'s fingers), 2 juxtacortical, 1 infratentorial. Gadolinium-enhancing right optic radiation lesion = active demyelination. C5-C6 cord T2 signal. Meeting 2017 McDonald criteria for DIS and DIT.',
    'LP': 'Oligoclonal bands: 4 (present in CSF, absent in serum) = MS-specific. IgG index 0.72 (H, normal <0.65). Normal cell count.',
    'VEPs (Visual Evoked Potentials)': 'Prolonged P100 latency right eye — confirms optic nerve demyelination',
    'Anti-AQP4 (NMO-IgG)': 'Negative — excludes NMOSD',
    'Anti-MOG': 'Negative — excludes MOGAD'
  },
  orders: {
    correct: [
      { id: 'ivmp-ms', name: 'IV methylprednisolone 1g daily × 3-5 days for acute relapse', rationale: 'High-dose IV steroids shorten relapse duration and speed recovery. They do NOT change long-term disability outcomes. Use for acute relapses causing functional impairment. Do not use as maintenance therapy.' },
      { id: 'dmt-ms', name: 'Initiate disease-modifying therapy — discuss high-efficacy vs platform therapy', rationale: 'Second relapse with dissemination in time and space = definitive MS. DMT initiation is indicated. High-efficacy DMTs (natalizumab, ocrelizumab, alemtuzumab) show superior efficacy vs platform therapies (interferons, glatiramer) in RRMS. Discuss risks: natalizumab — PML risk (JC virus antibody), ocrelizumab — infusion reactions, alemtuzumab — secondary autoimmunity.' },
      { id: 'jc-antibody', name: 'JC virus antibody index before natalizumab', rationale: 'PML (progressive multifocal leukoencephalopathy) risk with natalizumab is driven by JC virus antibody status and index. JC positive, index >0.9, prior immunosuppression = high PML risk. May opt for different DMT.' },
      { id: 'ophth-ms', name: 'Ophthalmology referral for optic neuritis management', rationale: 'Optic neuritis: painful vision loss, Marcus Gunn pupil (RAPD), color desaturation. IV steroids speed recovery. Ophthalmology co-manages.' }
    ],
    incorrect: [
      { id: 'longterm-steroids-ms', name: 'Oral prednisone taper × 4 weeks for MS relapse maintenance', rationale: 'Steroids treat acute relapses but are NOT maintenance therapy for MS. Long-term steroids do not prevent new lesions or disability progression. They cause irreversible harm. DMT is the maintenance strategy.' },
      { id: 'no-dmt-wait', name: 'Wait and watch — may not have another relapse', rationale: 'This patient has RRMS by McDonald criteria with 2 clinical relapses and dissemination in time and space. Delaying DMT initiation allows ongoing subclinical lesion accumulation (90% of MS activity is clinically silent). Early high-efficacy treatment changes disease trajectory.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      '2017 McDonald criteria: RRMS requires dissemination in space (DIS: ≥2 of 4 CNS regions — periventricular, juxtacortical, infratentorial, spinal cord) AND dissemination in time (DIT: enhancing + non-enhancing lesions simultaneously, or new T2 lesion on follow-up MRI, or 2 separate clinical episodes).',
      'IV methylprednisolone speeds recovery from relapses but does NOT change long-term disability outcomes. It is not maintenance therapy.',
      'High-efficacy DMTs (natalizumab, ocrelizumab, alemtuzumab) reduce annual relapse rate by 65-80% vs 30-40% for platform therapies. Growing evidence favors treat-to-target with high-efficacy agents early.',
      'JC virus antibody status determines PML risk with natalizumab. JC-negative patients: PML risk ~1:10,000. JC-positive, high index: risk up to 1:50 after 2+ years.'
    ],
    boardPearls: [
      'MS optic neuritis: painful vision loss + RAPD (Marcus Gunn pupil) + color desaturation. Fundoscopy normal (retrobulbar) or disc swelling. 50% of optic neuritis patients develop MS within 15 years.',
      'Lhermitte\'s sign: electrical sensation down the spine with neck flexion — posterior column demyelination at cervical level. Pathognomonic for MS.',
      'Uhthoff\'s phenomenon: MS symptoms worsen with heat (exercise, hot bath). Demyelinated axons fail at higher temperatures. NOT a relapse.',
      'Primary progressive MS (PPMS): ocrelizumab (anti-CD20) is the only FDA-approved DMT — slows disability progression by 24% (ORATORIO trial).'
    ]
  },
  references: [{ id: 'StatPearls-MS', title: 'Multiple Sclerosis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK499849/', openAccess: true }]
};
