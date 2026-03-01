// Virtual EMR Case: Cardiac Tamponade (Malignant Pericardial Effusion)
// Variant: cardiac-tamponade | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Evelyn Brooks",
    "dob": "05/28/1955",
    "age": 70,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Medicare + BCBS Medigap",
    "pcp": "Dr. Nancy Oliver, MD",
    "pharmacy": "Walgreens \u2014 Pembroke Pines, FL",
    "language": "English",
    "race": "White",
    "address": "1210 NW 104th Ave, Pembroke Pines, FL",
    "phone": "(954) 555-7712",
    "email": "e.brooks55@email.com",
    "emergencyContact": {
      "name": "David Brooks (Son)",
      "phone": "(954) 555-7728"
    },
    "mrn": "RDX-2025-78456"
  },
  "problems": [
    {
      "problem": "Metastatic Breast Cancer",
      "icd": "C79.89",
      "onset": "2023",
      "status": "Active",
      "notes": "Stage IV ER+/PR+/HER2-; mets to bone and lung; on letrozole + palbociclib; known small pericardial effusion on last imaging"
    },
    {
      "problem": "Known Pericardial Effusion",
      "icd": "I31.3",
      "onset": "2025",
      "status": "Active",
      "notes": "1.2 cm on echo 12/2025; asymptomatic at that time; malignant etiology suspected"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2010",
      "status": "Active",
      "notes": "On lisinopril"
    }
  ],
  "medications": [
    {
      "name": "Letrozole 2.5mg daily",
      "sig": "PO daily",
      "prescriber": "Oncology",
      "start": "06/2023",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Palbociclib 125mg daily x 21 days/28-day cycle",
      "sig": "PO daily",
      "prescriber": "Oncology",
      "start": "06/2023",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Oliver",
      "start": "03/2010",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Calcium + Vitamin D",
      "sig": "PO daily",
      "prescriber": "Dr. Oliver",
      "start": "01/2024",
      "refills": 5,
      "status": "Active"
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
      "bp": "86/68",
      "hr": 118,
      "rr": 24,
      "temp": "98.2\u00b0F",
      "spo2": "94%",
      "wt": "148 lbs",
      "ht": "5'6\"",
      "bmi": 23.9,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "78/62",
      "hr": 124,
      "rr": 28,
      "temp": "98.0\u00b0F",
      "spo2": "92%",
      "wt": "148 lbs",
      "ht": "5'6\"",
      "bmi": 23.9,
      "setting": "ED \u2014 30min"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Progressive dyspnea, lightheadedness x 3 days, now near-syncope",
      "hpi": "70F with metastatic breast cancer and known pericardial effusion presents with 3 days of worsening dyspnea, lightheadedness on standing, and muffled chest discomfort. Today had near-syncope walking to bathroom. Felt 'heart racing.' Husband notes increased neck vein distension. Orthopnea x 2 days. Last oncology visit 3 weeks ago.",
      "exam": "Ill-appearing, tachycardic, hypotensive. JVP markedly elevated. Heart sounds distant and muffled. Pulsus paradoxus 22 mmHg (>10 mmHg = significant). Lungs: Clear (distinguishes from CHF). Extremities: Cool, mottled. Peripheral edema mild bilateral.",
      "assessment": "1. CARDIAC TAMPONADE \u2014 malignant pericardial effusion with hemodynamic compromise (Beck triad: hypotension, JVD, muffled heart sounds + pulsus paradoxus)\n2. Obstructive shock physiology\n3. EMERGENT pericardiocentesis indicated",
      "plan": "1. Bedside echo \u2014 CONFIRMED: Large circumferential pericardial effusion with RV diastolic collapse and IVC plethora\n2. EMERGENT pericardiocentesis \u2014 subxiphoid approach, echo-guided\n3. IV NS 500mL bolus (preload augmentation)\n4. Avoid vasodilators/diuretics\n5. Cardiology + Oncology consult\n6. Pericardial fluid: cytology, culture, AFB, LDH, glucose, protein\n7. Consider pericardial window if reaccumulates\n8. ICU admission post-procedure"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "14:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 14:00",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-02261400",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "6.2",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "10.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "32.4",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "118",
              "unit": "K/uL",
              "range": "150-400",
              "flag": "L"
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "28",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Sodium",
              "value": "136",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.8",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            }
          ]
        },
        {
          "name": "CARDIAC/CRITICAL",
          "results": [
            {
              "test": "Troponin I",
              "value": "0.12",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "BNP",
              "value": "892",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "4.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "BEDSIDE ECHOCARDIOGRAM",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. Carter",
      "readBy": "Dr. Carter, MD",
      "facility": "ReasonDx Memorial — Radiology",
      "priority": "STAT",
      "clinical": "Suspected tamponade \u2014 hypotension, JVD, muffled sounds",
      "technique": "Bedside focused echocardiography.",
      "findings": "Large circumferential pericardial effusion \u2014 maximum width 3.2 cm posteriorly, 2.8 cm anteriorly. Right ventricular diastolic collapse present (>1/3 of diastole). Right atrial systolic inversion. IVC dilated (2.6 cm) with <50% respiratory variation. Swinging heart motion. LV function grossly normal.\n\nNo obvious pericardial masses but cannot exclude given effusion volume.",
      "impression": "1. Large pericardial effusion with echocardiographic evidence of tamponade.\n2. RV diastolic collapse and RA inversion \u2014 hemodynamically significant.\n3. EMERGENT pericardiocentesis recommended.\n4. Malignant etiology likely given cancer history.",
      "dictated": "02/26/2026 15:00",
      "verified": "02/26/2026 15:20"
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
      "vaccine": "COVID-19 Booster (Pfizer)",
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
    },
    {
      "vaccine": "Shingrix (complete)",
      "date": "2023",
      "site": "Left deltoid IM",
      "lot": "SX23-412",
      "mfr": "GSK"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "03/2024",
      "site": "Left deltoid IM",
      "lot": "PV20-900",
      "mfr": "Pfizer"
    }
  ],
  "familyHistory": [
    "Mother: Breast cancer (diagnosed age 62, survived)",
    "Father: CAD, deceased at 72",
    "Sister: Healthy, alive at 67"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired school teacher"
    ],
    [
      "Marital",
      "Married 45 years"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Exercise",
      "Walking limited by dyspnea recently"
    ],
    [
      "Advance Directive",
      "DNR/DNI discussed \u2014 patient chose FULL CODE for now; DPOA son David"
    ]
  ],
  "meta": {
    "caseId": "cardiac-tamponade",
    "diagnosis": "Cardiac Tamponade (Malignant Pericardial Effusion)",
    "acuity": 1,
    "presentation": "Cardiac Emergency",
    "category": "cardiac"
  }
};
