// Virtual EMR Case: Peritonsillar Abscess (Quinsy)
// Variant: peritonsillar-abscess | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Sophia Martinez",
    "dob": "04/20/2001",
    "age": 24,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Parent plan \u2014 Aetna PPO",
    "pcp": "Dr. Rachel Kim, DO",
    "pharmacy": "Walgreens \u2014 Riverside, FL",
    "language": "English/Spanish",
    "race": "Hispanic",
    "address": "2840 SW 42nd St, Riverside, FL",
    "phone": "(954) 555-1144",
    "email": "s.martinez01@email.com",
    "emergencyContact": {
      "name": "Isabel Martinez (Mother)",
      "phone": "(954) 555-1160"
    },
    "mrn": "RDX-2025-71863"
  },
  "problems": [
    {
      "problem": "Recurrent Streptococcal Pharyngitis",
      "icd": "J02.0",
      "onset": "2023",
      "status": "Active",
      "notes": "3 episodes in past 18 months; tonsillectomy discussed but deferred"
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
      "bp": "128/78",
      "hr": 98,
      "rr": 16,
      "temp": "102.4\u00b0F",
      "spo2": "99%",
      "wt": "140 lbs",
      "ht": "5'5\"",
      "bmi": 23.3,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Severe sore throat x 5 days, can't swallow, 'hot potato' voice",
      "hpi": "24F with recurrent strep throat presents with 5 days of severe L-sided sore throat worsening despite 3 days of amoxicillin (prescribed at urgent care). Now unable to swallow solids or liquids. Trismus \u2014 can barely open mouth. Voice is muffled. Fevers to 103\u00b0F at home. Drooling. No respiratory distress but very uncomfortable.",
      "exam": "Febrile, drooling, muffled voice. Trismus (inter-incisal opening ~15mm). Oropharynx (limited view): L tonsillar fullness with fluctuance. Uvula deviated to the RIGHT. L anterior pillar bulging. Tender L submandibular lymphadenopathy (3 cm). No stridor. Neck supple but tender L side.",
      "assessment": "1. Left peritonsillar abscess \u2014 trismus, uvula deviation, fluctuance, failure of outpatient antibiotics\n2. Dehydration from poor oral intake\n3. Will require I&D",
      "plan": "1. IV clindamycin 900mg + dexamethasone 10mg IV\n2. IV NS 1L bolus\n3. ENT consult for needle aspiration or I&D\n4. CT neck with contrast if diagnosis uncertain (clinical diagnosis here is clear)\n5. Pain: acetaminophen/ibuprofen + viscous lidocaine gargle\n6. Admit for IV antibiotics and hydration\n7. Discuss interval tonsillectomy after resolution"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "15:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 15:10",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-260320",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "18.4",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "342",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BMP",
          "results": [
            {
              "test": "Glucose",
              "value": "102",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "22",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.8",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            }
          ]
        },
        {
          "name": "OTHER",
          "results": [
            {
              "test": "Rapid Strep",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Monospot",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
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
      "study": "CT NECK WITH IV CONTRAST",
      "accession": "IMG-2026-260320",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "ReasonDx Memorial — Radiology",
      "priority": "STAT",
      "clinical": "L peritonsillar abscess \u2014 extent evaluation",
      "technique": "CT neck with IV contrast.",
      "findings": "Well-defined rim-enhancing fluid collection in the left peritonsillar space measuring 3.2 x 2.8 x 2.4 cm. Displacement of the left palatine tonsil medially. Mild narrowing of the oropharyngeal airway. Left submandibular lymphadenopathy (largest 2.8 cm). No retropharyngeal extension. No vascular involvement.",
      "impression": "1. Left peritonsillar abscess (3.2 cm) \u2014 amenable to I&D.\n2. No deep space extension.\n3. Mild airway narrowing \u2014 not critical.",
      "dictated": "02/26/2026 15:30",
      "verified": "02/26/2026 15:45"
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
    "Father: Healthy, alive at 52",
    "Mother: Healthy, alive at 48"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Dental hygiene student"
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
      "Drugs",
      "Denies"
    ]
  ],
  "meta": {
    "caseId": "peritonsillar-abscess",
    "diagnosis": "Peritonsillar Abscess (Quinsy)",
    "acuity": 3,
    "presentation": "ENT / Airway Emergency",
    "category": "ent"
  }
};
