// Virtual EMR Case: Acute Appendicitis
// Variant: appendicitis-v1 | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Tyler Nguyen",
    "dob": "03/22/2000",
    "age": 25,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "BCBS PPO",
    "pcp": "Dr. Maria Gonzalez, DO",
    "pharmacy": "Walgreens \u2014 Fort Lauderdale, FL",
    "language": "English",
    "race": "Asian",
    "address": "1840 SE 4th Ave, Fort Lauderdale, FL",
    "phone": "(954) 555-6012",
    "email": "t.nguyen00@email.com",
    "emergencyContact": {
      "name": "Linda Nguyen (Mother)",
      "phone": "(954) 555-6028"
    },
    "mrn": "NSU-2025-40249"
  },
  "problems": [
    {
      "problem": "No Significant PMH",
      "icd": "Z87.89",
      "onset": "",
      "status": "Active",
      "notes": "Healthy young adult"
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
      "allergen": "Sulfa drugs",
      "type": "Drug",
      "reaction": "Rash",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "128/78",
      "hr": 98,
      "rr": 18,
      "temp": "100.8\u00b0F",
      "spo2": "99%",
      "wt": "168 lbs",
      "ht": "5'10\"",
      "bmi": 24.1,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "130/82",
      "hr": 102,
      "rr": 20,
      "temp": "101.2\u00b0F",
      "spo2": "98%",
      "wt": "168 lbs",
      "ht": "5'10\"",
      "bmi": 24.1,
      "setting": "ED \u2014 4hr"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "RLQ abdominal pain x 18 hours",
      "hpi": "25M with 18hr progressive abdominal pain. Began periumbilically, migrated to RLQ over 8hrs. Now 8/10, sharp, worse with movement. Associated anorexia, nausea, one non-bloody emesis, subjective fever. No diarrhea or dysuria. No prior abdominal surgeries.",
      "exam": "Soft, voluntary guarding RLQ. McBurney point tenderness. (+) Rovsing sign. (+) Psoas sign. Mild rebound RLQ. Hypoactive BS.",
      "assessment": "1. Acute appendicitis \u2014 classic migration, peritoneal signs\n2. Low-grade fever with leukocytosis\n3. Mild dehydration",
      "plan": "1. NPO; IV NS bolus\n2. CT abdomen/pelvis with IV contrast\n3. CBC, CMP, lipase, UA\n4. Morphine 4mg IV + ondansetron 4mg IV\n5. Surgical consult\n6. If confirmed: cefoxitin 2g IV, laparoscopic appendectomy"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "14:30",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 14:30",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-02261430",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "14.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "15.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "45.1",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "268",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Neutrophils",
              "value": "82",
              "unit": "%",
              "range": "40-70",
              "flag": "H"
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
              "value": "18",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.0",
              "unit": "mEq/L",
              "range": "3.5-5.1",
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
              "test": "CO2",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-29",
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
      "study": "CT ABDOMEN AND PELVIS WITH IV CONTRAST",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "RLQ pain, fever, leukocytosis",
      "technique": "Helical CT abdomen/pelvis with IV contrast.",
      "findings": "Appendix dilated to 12 mm. Wall thickening and enhancement. Appendicolith in proximal lumen. Periappendiceal fat stranding and mild free fluid. No extraluminal gas or abscess.",
      "impression": "1. Acute uncomplicated appendicitis with appendicolith.\n2. No perforation or abscess.\n3. Surgical consultation recommended.",
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
    }
  ],
  "familyHistory": [
    "Father: HTN, alive at 55",
    "Mother: Healthy, alive at 52"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Graduate student \u2014 biomedical engineering"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social \u2014 2-3 drinks/weekend"
    ],
    [
      "Exercise",
      "Running 3x/week"
    ]
  ],
  "meta": {
    "caseId": "appendicitis-v1",
    "diagnosis": "Acute Appendicitis",
    "acuity": 3,
    "presentation": "Abdominal Pain",
    "category": "gastrointestinal"
  }
};
