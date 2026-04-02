/* emr-data/pericarditis-v1.js — Auto-generated EMR case data for Pericarditis */
window.EMR_DATA = {
  "patient": {
    "name": "Daniel Okafor",
  "patientHPI": "I started getting this sharp, stabbing pain in my chest yesterday that gets much worse when I take a deep breath or when I lie down flat. I had a really bad cold about two weeks ago, and now this chest pain is making me worry something's seriously wrong.",
    "dob": "08/02/2000",
    "age": "26",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-460047",
    "language": "English",
    "race": "Black/African American",
    "phone": "(619) 555-6886",
    "email": "daniel.okafor@email.com",
    "address": "5993 E Roosevelt Rd, Minneapolis, MN 55403",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Rite Aid — Palm Ave",
    "emergencyContact": {
      "name": "Teresa Okafor",
      "phone": "(502) 555-5285",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Sharp chest pain worse with inspiration and lying flat",
    "diagnosis": "Pericarditis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Recent URI 2 weeks ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "122/76",
      "hr": "92",
      "rr": "18",
      "temp": "38.2°C",
      "spo2": "99%",
      "pain": "7/10",
      "bmi": "27",
      "weight": "88 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Sharp chest pain worse with inspiration and lying flat",
      "hpi": "Daniel Okafor is a 26-year-old male presenting with sharp chest pain worse with inspiration and lying flat. Past medical history includes Recent URI 2 weeks ago. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Pericarditis — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-743302",
      "collected": "03/01/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "245",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "16",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Troponin",
              "value": "0.06",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "Esr",
              "value": "48",
              "unit": "mm/hr",
              "range": "0-20",
              "flag": "H"
            },
            {
              "test": "Crp",
              "value": "8.2",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/01/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-884363",
      "clinical": "Sharp chest pain worse with inspiration and lying flat",
      "technique": "Standard protocol",
      "findings": "Diffuse ST elevation with PR depression in leads II, III, aVF, V3-V6. PR elevation in aVR.",
      "impression": "Classic ECG findings of acute pericarditis.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/01/2026",
      "study": "Echocardiogram",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-916629",
      "clinical": "Sharp chest pain worse with inspiration and lying flat",
      "technique": "Standard protocol",
      "findings": "Small circumferential pericardial effusion. Normal LV/RV function. No tamponade physiology.",
      "impression": "Small pericardial effusion consistent with pericarditis.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social"
    ],
    [
      "Occupation",
      "Graduate student"
    ],
    [
      "Exercise",
      "Runs 3-4x/week"
    ]
  ]
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['pericarditis-v1'] = {
  id: 'pericarditis-v1', name: 'Daniel Okafor',
  chiefComplaint: 'Pericarditis — NSAID Therapy and Colchicine',
  diagnosis: 'Pericarditis — NSAID Therapy and Colchicine',
  orders: {
    correct: [{ id: 'nsaid-colchicine', name: 'Ibuprofen 600mg TID × 1-2 weeks + colchicine 0.5mg BID × 3 months', rationale: 'NSAIDs are first-line for acute pericarditis. Ibuprofen 600mg TID (with food/PPI) or aspirin 750-1000mg TID. COLCHICINE is added to reduce recurrence (COPE trial, ICAP trial): 0.5mg BID × 3 months (or 0.5mg daily if <70kg). Reduces recurrence rate from 30-50% to 10-15%.' },{ id: 'activity-restriction', name: 'Restrict physical activity until asymptomatic + CRP normalized', rationale: 'Athletes with pericarditis: restrict from competitive sports for minimum 3 months after symptom resolution + CRP normalization. Non-athletes: avoid strenuous activity until asymptomatic. Activity restriction reduces recurrence risk.' }],
    incorrect: [{ id: 'steroids-pericarditis', name: 'Prednisone — first-line treatment for pericarditis', rationale: 'Corticosteroids are NOT first-line for pericarditis — they increase recurrence rate (COPPS trial showed higher recurrence with corticosteroids). Reserve steroids for: pericarditis refractory to NSAIDs + colchicine, connective tissue disease-associated pericarditis, uremic pericarditis, or specific autoimmune causes.' },{ id: 'antibiotics-pericarditis', name: 'Antibiotics — pericarditis is likely infectious', rationale: 'Most pericarditis in developed countries is viral or idiopathic — antibiotics are NOT indicated. Specific antibiotic indications: bacterial (purulent) pericarditis (rare, <5%), TB pericarditis (endemic areas). Purulent pericarditis requires pericardiocentesis + drainage + IV antibiotics.' }]
  },
  teachingPoints: {
    keyLearning: ['ECG in pericarditis: Stage I (diffuse ST elevation + PR depression — ALL leads except aVR and V1). Stage II (ST returns to baseline). Stage III (T-wave inversions). Stage IV (normalization). Saddle-shaped ST elevation in ALL leads (vs STEMI: localized, concave upward).','Pericarditis vs STEMI distinction: pericarditis — diffuse ST elevation in multiple leads, no reciprocal changes (aVR may have ST depression), PR depression, friction rub, pleuritic chest pain, young age, recent viral illness. STEMI — localized leads, reciprocal changes, no PR depression.','Colchicine mechanism: inhibits microtubule polymerization → inhibits neutrophil migration and cytokine release → reduces pericardial inflammation. Most effective if started at the onset of first episode (ICAP trial: 0.5mg BID × 3 months).'],
    boardPearls: ['Constrictive pericarditis: fibrocalcific pericardium → impaired ventricular filling. Causes: TB (worldwide), prior cardiac surgery, radiation, idiopathic/viral. Kussmaul sign (JVP rises with inspiration), pericardial knock on auscultation. Treatment: pericardiectomy.','Cardiac tamponade: pericardial effusion → elevated intrapericardial pressure → impaired cardiac filling. Beck Triad: hypotension + muffled heart sounds + distended neck veins. Pulsus paradoxus >10 mmHg. Pericardiocentesis is life-saving.','Elevated CRP in pericarditis: used to monitor treatment response and guide duration. CRP normalization before stopping NSAIDs/colchicine reduces recurrence. Do not stop treatment based on symptoms alone.']
  }
};
