// Virtual EMR Case: Bacterial Meningitis
// Variant: meningitis-v1 | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Kevin Johnson",
    "dob": "05/12/1999",
    "age": 26,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Employer plan \u2014 Cigna",
    "pcp": "Dr. Alicia Foster, MD",
    "pharmacy": "CVS \u2014 Sunrise, FL",
    "language": "English",
    "race": "Black",
    "address": "8420 NW 44th St, Sunrise, FL",
    "phone": "(954) 555-3322",
    "email": "k.johnson99@email.com",
    "emergencyContact": {
      "name": "Brenda Johnson (Mother)",
      "phone": "(954) 555-3338"
    },
    "mrn": "NSU-2025-58035"
  },
  "problems": [
    {
      "problem": "Recent Sinusitis",
      "icd": "J01.90",
      "onset": "02/2026",
      "status": "Active",
      "notes": "Treated with amoxicillin 10 days ago \u2014 may not have completed course"
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
      "bp": "108/62",
      "hr": 118,
      "rr": 22,
      "temp": "103.8\u00b0F",
      "spo2": "97%",
      "wt": "185 lbs",
      "ht": "6'0\"",
      "bmi": 25.1,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Severe headache, fever, neck stiffness, confusion x 12 hours",
      "hpi": "26M presents with rapidly progressive severe headache, fever to 104\u00b0F, neck stiffness, photophobia, and confusion developing over 12 hours. Roommate reports he was fine yesterday morning, developed headache by afternoon, and by this morning was confused, unable to tolerate lights, and vomiting. Recent sinusitis 10 days ago treated with amoxicillin (may not have completed course). No rash noted. No recent travel. College graduate, lives with roommate. No known sick contacts with meningitis.",
      "exam": "Toxic-appearing, confused, photophobic. GCS 13 (E3V4M6). Nuchal rigidity \u2014 severe. (+) Kernig sign. (+) Brudzinski sign. (+) Jolt accentuation. No focal neurologic deficits. Pupils equal and reactive. No papilledema. Skin: No petechial rash (distinguishes from meningococcemia). Ears: No mastoid tenderness. Sinuses: Mild maxillary tenderness bilaterally.",
      "assessment": "1. BACTERIAL MENINGITIS \u2014 classic triad: headache, fever, nuchal rigidity + altered mental status\n2. Likely pneumococcal given recent sinusitis (contiguous spread) and age\n3. EMPIRIC ANTIBIOTICS BEFORE LP \u2014 do not delay treatment\n4. Need CT before LP given AMS (rule out mass/herniation risk)",
      "plan": "1. Dexamethasone 0.15 mg/kg IV FIRST (before or with antibiotics \u2014 reduces mortality in pneumococcal meningitis)\n2. Ceftriaxone 2g IV + Vancomycin 25 mg/kg IV + Ampicillin 2g IV (empiric \u2014 covers pneumococcus, meningococcus, Listeria)\n3. Blood cultures x 2 BEFORE antibiotics (but DO NOT DELAY antibiotics for cultures)\n4. STAT CT head \u2192 then LP if no mass/herniation\n5. LP: opening pressure, cell count, protein, glucose, gram stain, culture, PCR panel\n6. Acyclovir 10 mg/kg IV (cover HSV encephalitis until LP results)\n7. ICU admission\n8. Contact tracing if meningococcal confirmed \u2014 prophylaxis for close contacts"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "08:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 08:05",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-260461",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "24.2",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "14.4",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "148",
              "unit": "K/uL",
              "range": "150-400",
              "flag": "L"
            },
            {
              "test": "Bands",
              "value": "22",
              "unit": "%",
              "range": "0-5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CSF ANALYSIS (LP performed after CT)",
          "results": [
            {
              "test": "Opening Pressure",
              "value": "32",
              "unit": "cm H2O",
              "range": "6-20",
              "flag": "H"
            },
            {
              "test": "WBC",
              "value": "2,840",
              "unit": "/uL",
              "range": "0-5",
              "flag": "H"
            },
            {
              "test": "Differential",
              "value": "92% neutrophils",
              "unit": "",
              "range": "<5% neutrophils",
              "flag": "H"
            },
            {
              "test": "Protein",
              "value": "282",
              "unit": "mg/dL",
              "range": "15-45",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "18",
              "unit": "mg/dL",
              "range": "40-70",
              "flag": "L"
            },
            {
              "test": "CSF:Serum Glucose Ratio",
              "value": "0.18",
              "unit": "",
              "range": ">0.6",
              "flag": "L"
            },
            {
              "test": "Gram Stain",
              "value": "Gram-positive diplococci",
              "unit": "",
              "range": "No organisms",
              "flag": "H"
            },
            {
              "test": "Lactate (CSF)",
              "value": "12.4",
              "unit": "mmol/L",
              "range": "<3.5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "METABOLIC",
          "results": [
            {
              "test": "Glucose (Serum)",
              "value": "102",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Lactate (Serum)",
              "value": "3.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Procalcitonin",
              "value": "12.8",
              "unit": "ng/mL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "22.4",
              "unit": "mg/dL",
              "range": "<1.0",
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
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2026-260461",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "Meningitis symptoms with AMS \u2014 pre-LP CT",
      "technique": "Non-contrast CT head.",
      "findings": "No intracranial mass, hemorrhage, or midline shift. Mild mucosal thickening in bilateral maxillary sinuses (chronic sinusitis). No hydrocephalus. No cerebral edema. Safe to proceed with lumbar puncture.",
      "impression": "1. No contraindication to lumbar puncture.\n2. Chronic sinusitis \u2014 may be source of contiguous spread.\n3. No acute intracranial abnormality.",
      "dictated": "02/26/2026 08:15",
      "verified": "02/26/2026 08:20"
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
    "Father: HTN, alive at 54",
    "Mother: T2DM, alive at 52",
    "No family history of immunodeficiency"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Software developer"
    ],
    [
      "Marital",
      "Single; lives with roommate"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social \u2014 weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Vaccinations",
      "Received meningococcal vaccine in college (ACWY); not MenB"
    ]
  ],
  "meta": {
    "caseId": "meningitis-v1",
    "diagnosis": "Bacterial Meningitis",
    "acuity": 2,
    "presentation": "Headache",
    "category": "neurologic"
  }
};
