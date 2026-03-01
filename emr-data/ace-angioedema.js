// Virtual EMR Case: ACE Inhibitor-Induced Angioedema
// Variant: ace-angioedema | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Dorothy Washington",
    "dob": "02/18/1958",
    "age": 67,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Medicare + Medicaid",
    "pcp": "Dr. Lisa Brennan, MD",
    "pharmacy": "Walgreens \u2014 Fort Lauderdale, FL",
    "language": "English",
    "race": "Black",
    "address": "1520 NW 6th St, Fort Lauderdale, FL",
    "phone": "(954) 555-4488",
    "email": "d.washington58@email.com",
    "emergencyContact": {
      "name": "Marcus Washington (Son)",
      "phone": "(954) 555-4502"
    },
    "mrn": "RDX-2025-84070"
  },
  "problems": [
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2002",
      "status": "Active",
      "notes": "On lisinopril 20mg x 8 years"
    },
    {
      "problem": "Type 2 Diabetes",
      "icd": "E11.9",
      "onset": "2010",
      "status": "Active",
      "notes": "A1C 7.4; on metformin"
    },
    {
      "problem": "Obesity",
      "icd": "E66.01",
      "onset": "2005",
      "status": "Active",
      "notes": "BMI 33"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 20mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Brennan",
      "start": "04/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "PO BID with meals",
      "prescriber": "Dr. Brennan",
      "start": "06/2010",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Brennan",
      "start": "09/2020",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "type": "Drug",
      "reaction": "Hives",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "158/94",
      "hr": 98,
      "rr": 22,
      "temp": "98.4\u00b0F",
      "spo2": "96%",
      "wt": "198 lbs",
      "ht": "5'5\"",
      "bmi": 32.9,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "142/88",
      "hr": 88,
      "rr": 18,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "198 lbs",
      "ht": "5'5\"",
      "bmi": 32.9,
      "setting": "ED \u2014 2hr"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. Amanda Torres, MD",
      "cc": "Lip and tongue swelling x 4 hours",
      "hpi": "67F on lisinopril x 8 years with progressive lip/tongue swelling x 4hr. No new exposures. No urticaria. Difficulty swallowing. Muffled voice. African American female \u2014 higher risk for ACEi angioedema.",
      "exam": "Marked bilateral lip edema. Tongue swollen, cannot fully retract. Uvula edematous. Muffled voice. No stridor at rest. No urticaria. Lungs clear. Tachycardic.",
      "assessment": "1. ACE inhibitor-induced angioedema \u2014 bradykinin-mediated, no urticaria\n2. Airway at risk \u2014 prepare for surgical airway",
      "plan": "1. STOP lisinopril permanently \u2014 document ACEi allergy\n2. Methylprednisolone 125mg IV\n3. Icatibant 30mg subQ if available\n4. Epinephrine 0.3mg IM\n5. ENT + Anesthesia standby\n6. Serial airway assessments q30min\n7. Switch to amlodipine 10mg\n8. Observe 24 hours"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "14:00",
      "orderedBy": "Dr. Torres",
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
              "value": "8.2",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "38.4",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "232",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "ANGIOEDEMA WORKUP",
          "results": [
            {
              "test": "C4 Complement",
              "value": "28",
              "unit": "mg/dL",
              "range": "14-40",
              "flag": ""
            },
            {
              "test": "Tryptase",
              "value": "5.2",
              "unit": "ng/mL",
              "range": "<11.4",
              "flag": ""
            },
            {
              "test": "C1-Esterase Inhibitor",
              "value": "32",
              "unit": "mg/dL",
              "range": "21-39",
              "flag": ""
            },
            {
              "test": "C1-INH Functional",
              "value": "94",
              "unit": "%",
              "range": ">67",
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
      "study": "FIBEROPTIC NASOLARYNGOSCOPY",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. Torres",
      "readBy": "Dr. Kevin Park, MD (ENT)",
      "facility": "ReasonDx Memorial — Radiology",
      "priority": "STAT",
      "clinical": "ACEi angioedema, airway assessment",
      "technique": "Flexible fiberoptic nasolaryngoscopy at bedside.",
      "findings": "Tongue base significantly edematous. Epiglottis edematous but visualized. Supraglottic edema bilateral. Glottic opening ~60%. Cords mobile.",
      "impression": "1. Moderate supraglottic and tongue base edema \u2014 ACEi angioedema.\n2. Glottic opening narrowed but adequate.\n3. Serial reassessment recommended.",
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
    "Mother: HTN, stroke at 74",
    "Father: T2DM, CAD, deceased at 66",
    "Sister: HTN, alive at 70"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired postal worker"
    ],
    [
      "Marital",
      "Widowed"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Occasional wine"
    ],
    [
      "Advance Directive",
      "Full code; DPOA son Marcus"
    ]
  ],
  "meta": {
    "caseId": "ace-angioedema",
    "diagnosis": "ACE Inhibitor-Induced Angioedema",
    "acuity": 2,
    "presentation": "Allergic Reaction",
    "category": "immunologic"
  }
};
