// Virtual EMR Case: Acute Pericarditis
// Variant: pericarditis-v1 | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Daniel Okafor",
    "dob": "11/12/1992",
    "age": 33,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "BCBS PPO",
    "pcp": "Dr. Elena Vasquez, MD",
    "pharmacy": "CVS \u2014 Miramar, FL",
    "language": "English",
    "race": "Black (Nigerian)",
    "address": "3420 SW 72nd Ave, Miramar, FL",
    "phone": "(954) 555-6622",
    "email": "d.okafor92@email.com",
    "emergencyContact": {
      "name": "Grace Okafor (Wife)",
      "phone": "(954) 555-6638"
    },
    "mrn": "NSU-2025-24078"
  },
  "problems": [
    {
      "problem": "Recent URI",
      "icd": "J06.9",
      "onset": "02/2026",
      "status": "Resolved",
      "notes": "Viral URI 2 weeks ago; resolved without antibiotics"
    }
  ],
  "medications": [
    {
      "name": "None",
      "sig": "",
      "prescriber": "",
      "start": "",
      "refills": 0,
      "status": ""
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "122/74",
      "hr": 88,
      "rr": 16,
      "temp": "100.2\u00b0F",
      "spo2": "99%",
      "wt": "185 lbs",
      "ht": "5'11\"",
      "bmi": 25.8,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Sharp chest pain x 2 days, worse lying flat",
      "hpi": "33M presents with 2 days of sharp, pleuritic chest pain that is worse lying flat and improved by leaning forward. Had viral URI 2 weeks ago. Pain is substernal, radiates to left shoulder/trapezius ridge. No exertional component. No SOB except when lying flat due to pain. No leg swelling or recent immobilization.",
      "exam": "Comfortable sitting upright, distressed when supine. CV: Pericardial friction rub \u2014 3-component, best heard at LLSB with patient leaning forward. Regular rhythm. Lungs: CTAB. No JVD. No peripheral edema.",
      "assessment": "1. Acute pericarditis \u2014 post-viral. Classic pleuritic chest pain improved leaning forward, pericardial friction rub, diffuse ST elevation on ECG\n2. No evidence of effusion or tamponade clinically",
      "plan": "1. ECG \u2014 diffuse ST elevation with PR depression confirmed\n2. Troponin (mild elevation expected with myopericarditis)\n3. Echocardiogram \u2014 r/o effusion\n4. Ibuprofen 600mg TID x 2 weeks + colchicine 0.5mg BID x 3 months\n5. Activity restriction until symptoms resolve\n6. Follow-up cardiology in 1 week\n7. Return precautions: worsening SOB, fever, syncope"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "10:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 10:15",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-260301",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "11.2",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "14.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "248",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "CARDIAC",
          "results": [
            {
              "test": "Troponin I",
              "value": "0.18",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "8.4",
              "unit": "mg/dL",
              "range": "<1.0",
              "flag": "H"
            },
            {
              "test": "ESR",
              "value": "42",
              "unit": "mm/hr",
              "range": "0-20",
              "flag": "H"
            },
            {
              "test": "BNP",
              "value": "48",
              "unit": "pg/mL",
              "range": "<100",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "12-LEAD ECG",
      "accession": "ECG-2026-260301",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. James Carter, MD",
      "facility": "NSU Memorial \u2014 ED",
      "priority": "STAT",
      "clinical": "Chest pain, suspected pericarditis",
      "technique": "Standard 12-lead ECG.",
      "findings": "NSR at 88 bpm. Diffuse concave-up ST elevation in leads I, II, III, aVF, V2-V6. PR depression in II, aVF, V4-V6. PR elevation in aVR. No reciprocal ST depression. No Q waves.",
      "impression": "1. Diffuse ST elevation with PR depression \u2014 classic acute pericarditis pattern.\n2. No focal ST changes suggesting STEMI.",
      "dictated": "02/26/2026 10:30",
      "verified": "02/26/2026 10:45"
    },
    {
      "date": "02/26/2026",
      "study": "ECHOCARDIOGRAM \u2014 FOCUSED BEDSIDE",
      "accession": "ECHO-2026-260301",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Carter, MD",
      "facility": "NSU Memorial \u2014 ED",
      "priority": "STAT",
      "clinical": "Pericarditis \u2014 assess for effusion",
      "technique": "Focused bedside echocardiography.",
      "findings": "Normal LV size and function. EF ~60%. No pericardial effusion. No RV dilation. IVC normal with respiratory variation.",
      "impression": "1. No pericardial effusion.\n2. Normal biventricular function.\n3. No echocardiographic evidence of tamponade.",
      "dictated": "02/26/2026 11:00",
      "verified": "02/26/2026 11:15"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8001",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2101",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "03/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-502",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: HTN, alive at 68",
    "Mother: Healthy, alive at 64"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Financial analyst"
    ],
    [
      "Marital",
      "Married; 1 child (age 2)"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social"
    ],
    [
      "Exercise",
      "Runs 4x/week \u2014 currently restricted"
    ]
  ],
  "meta": {
    "caseId": "pericarditis-v1",
    "diagnosis": "Acute Pericarditis",
    "acuity": 3,
    "presentation": "Chest Pain",
    "category": "cardiovascular"
  }
};
