/* emr-data/osteomyelitis.js — Osteomyelitis: Diabetic Foot */
window.CASES = window.CASES || {};
window.CASES['osteomyelitis'] = {
  id: 'osteomyelitis', name: 'Theodore Washington', age: '63M', dob: '1962-07-18',
  mrn: 'RDX-2026-66441', setting: 'Medicine / ID', category: 'infectious', acuity: 2,
  chiefComplaint: 'Diabetic foot ulcer × 6 weeks — probe-to-bone test positive, MRI confirms osteomyelitis',
  diagnosis: 'Diabetic Foot Osteomyelitis — Right First Metatarsal',
  presentation: {
    hpi: '63M with T2DM (A1c 10.8%) and peripheral neuropathy. 6-week history of non-healing plantar ulcer over right first metatarsal head. Wound probe-to-bone test positive (probe touches bone through wound = 89% sensitive, 97% specific for osteomyelitis). MRI foot confirms osteomyelitis of first metatarsal head with surrounding soft tissue involvement. Bone biopsy (culture-directed therapy): growing S. aureus MSSA.',
    pmh: ['T2DM — poorly controlled (A1c 10.8%)', 'Peripheral neuropathy', 'Peripheral arterial disease (ABI 0.62 — moderate PAD)'],
    meds: ['Metformin', 'Insulin glargine (non-adherent)'], allergies: ['Sulfa — rash']
  },
  vitals: { BP: '148/88', HR: '82', RR: '16', Temp: '38.0°C', SpO2: '97%' },
  labs: {
    'ESR/CRP': 'ESR 88 mm/hr (H), CRP 62 mg/L (H) — elevated inflammatory markers',
    'CBC': 'WBC 12.8 (H), Hgb 10.4 (L — anemia of chronic disease)',
    'BMP': 'Cr 1.6, Glucose 286 (H), A1c 10.8% (H)',
    'MRI foot': 'T1 hypointensity + T2/STIR hyperintensity + gadolinium enhancement right first metatarsal head — OSTEOMYELITIS confirmed. Surrounding cellulitis. No abscess.',
    'Bone biopsy': 'S. aureus MSSA — sensitive to nafcillin, cephalosporins, clindamycin. No MRSA.',
    'ABI': '0.62 right foot (moderate PAD — vascular surgery consult needed)'
  },
  orders: {
    correct: [
      { id: 'abx-osteo', name: 'Nafcillin 2g IV q4h OR cefazolin 2g IV q8h × 6 weeks total (IV + PO step-down)', rationale: 'MSSA osteomyelitis: nafcillin or cefazolin are first-line. Avoid vancomycin for MSSA — inferior efficacy (higher failure rates). Culture-directed therapy is essential — bone biopsy before starting antibiotics whenever possible.' },
      { id: 'po-stepdown', name: 'Oral step-down after clinical improvement — ciprofloxacin + rifampin or amoxicillin-clavulanate for bone penetration', rationale: 'Osteomyelitis duration: 6 weeks. IV to oral step-down acceptable after clinical improvement (OVIVA trial: oral equivalent to IV for bone/joint infection). Ensure high bone-penetrating oral agent.' },
      { id: 'ortho-osteo', name: 'Orthopedic surgery consult — debridement and possible ray amputation', rationale: 'Extensive first metatarsal involvement may require surgical debridement or ray amputation for cure. Adequate surgical debridement + antibiotics = best outcomes. Non-operative treatment alone has 20-40% failure rate in diabetic foot osteomyelitis.' },
      { id: 'vasc-osteo', name: 'Vascular surgery consult — ABI 0.62, PAD compromises healing', rationale: 'Peripheral arterial disease severely impairs wound healing and antibiotic delivery. ABI 0.62 = moderate PAD. Revascularization may be needed before wound can heal.' },
      { id: 'dm-control', name: 'Aggressive glycemic control — A1c 10.8% impairs immune function', rationale: 'Hyperglycemia impairs neutrophil function and wound healing. A1c >8% is an independent predictor of treatment failure in diabetic foot osteomyelitis. Endocrinology consult.' }
    ],
    incorrect: [
      { id: 'vanc-mssa', name: 'Vancomycin for MSSA osteomyelitis', rationale: 'WRONG — vancomycin is inferior to beta-lactams for MSSA. If MSSA is confirmed on culture, always switch to nafcillin or cefazolin. Vancomycin is reserved for MRSA or true penicillin allergy.' },
      { id: 'oral-only', name: 'Oral amoxicillin-clavulanate only — avoids IV access', rationale: 'While OVIVA trial validated oral therapy for osteomyelitis, empiric oral-only for the first 2-4 weeks of severe diabetic foot osteomyelitis is not standard. Initial IV therapy is preferred, especially with active infection and poor glycemic control.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Probe-to-bone test: positive (touches bone through ulcer) = 89% sensitive, 97% specific for osteomyelitis in diabetic foot. Low cost, immediate result.',
      'MRI is the gold standard imaging for osteomyelitis (sensitivity 90%, specificity 83%). T1 hypointense + T2/STIR hyperintense + gadolinium enhancement = active osteomyelitis.',
      'Bone biopsy before antibiotics is essential for culture-directed therapy. Swab cultures of the surface do not reliably predict bone pathogens.',
      'MSSA osteomyelitis: nafcillin or cefazolin. NEVER use vancomycin for MSSA — inferior efficacy. MRSA: vancomycin or daptomycin.'
    ],
    boardPearls: [
      'Duration of treatment: acute osteomyelitis 4-6 weeks. Chronic osteomyelitis (devitalized bone): requires surgical debridement + 4-6 weeks IV antibiotics.',
      'OVIVA trial (NEJM 2019): oral antibiotics non-inferior to IV for most bone and joint infections. Allows early step-down in compliant patients with appropriate oral agents.',
      'Vertebral osteomyelitis/discitis: S. aureus most common. MRI: T1 disc space hypointensity + T2 hyperintensity. CT-guided biopsy for cultures. 6 weeks antibiotics.',
      'Hematogenous osteomyelitis (children): acute, metaphysis (high blood flow, tortuous vessels). Adults: usually contiguous spread or hematogenous to vertebrae.'
    ]
  },
  references: [{ id: 'StatPearls-Osteo', title: 'Osteomyelitis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK532250/', openAccess: true }]
};
