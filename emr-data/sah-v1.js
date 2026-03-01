// Virtual EMR Case: Subarachnoid Hemorrhage
// Variant: sah-v1 | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Jennifer Wu",
    "dob": "11/30/1978",
    "age": 47,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Alan Rivera, MD",
    "pharmacy": "CVS \u2014 Weston, FL",
    "language": "English",
    "race": "Asian (Chinese)",
    "address": "1840 Harbour Side Dr, Weston, FL",
    "phone": "(954) 555-9922",
    "email": "j.wu78@email.com",
    "emergencyContact": {
      "name": "David Wu (Husband)",
      "phone": "(954) 555-9938"
    },
    "mrn": "RDX-2025-49373"
  },
  "problems": [
    {
      "problem": "Hypertension \u2014 Suboptimally Controlled",
      "icd": "I10",
      "onset": "2018",
      "status": "Active",
      "notes": "On amlodipine 10mg; SBP often 140-150s; non-adherent with follow-up"
    },
    {
      "problem": "Migraine with Aura",
      "icd": "G43.1",
      "onset": "2005",
      "status": "Active",
      "notes": "2-3/month; on sumatriptan PRN; family hx of cerebral aneurysm (mother)"
    },
    {
      "problem": "Active Smoker",
      "icd": "F17.210",
      "onset": "2000",
      "status": "Active",
      "notes": "1/2 PPD x 25 years"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 10mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Rivera",
      "start": "06/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Sumatriptan 100mg PRN",
      "sig": "PO PRN for migraine",
      "prescriber": "Dr. Rivera",
      "start": "01/2010",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Oral Contraceptive (ethinyl estradiol/levonorgestrel)",
      "sig": "PO daily",
      "prescriber": "OB/GYN",
      "start": "01/2022",
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
      "bp": "192/108",
      "hr": 62,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "138 lbs",
      "ht": "5'5\"",
      "bmi": 23.0,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "178/98",
      "hr": 58,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "138 lbs",
      "ht": "5'5\"",
      "bmi": 23.0,
      "setting": "ED \u2014 Post-Nicardipine"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. Michelle Santos, MD (Neurology)",
      "cc": "Sudden worst headache of life, vomiting, stiff neck",
      "hpi": "47F presents with sudden onset of 'the worst headache of my life' that began 2 hours ago while straining during exercise. Pain was instantaneous, peaked within seconds (thunderclap headache), 10/10, occipital/nuchal. Associated with nausea, vomiting x 3, photophobia, and neck stiffness. Brief LOC per gym partner (~30 seconds). She has migraines but states 'this is completely different from any migraine I've ever had.' Family history: mother had cerebral aneurysm rupture at age 50.",
      "exam": "Distressed, photophobic, vomiting. GCS 14 (E3V5M6). Nuchal rigidity \u2014 cannot flex chin to chest. Kernig and Brudzinski signs positive. No focal neurologic deficits. Pupils equal and reactive (bilateral \u2014 no CN III palsy). Fundoscopy: No papilledema, no subhyaloid hemorrhage (but exam limited by photophobia). Hunt-Hess Grade II (headache, nuchal rigidity, no focal deficits).",
      "assessment": "1. SUBARACHNOID HEMORRHAGE \u2014 thunderclap headache, nuchal rigidity, brief LOC. High pre-test probability given risk factors (HTN, smoking, FHx, OCP use)\n2. Hunt-Hess Grade II\n3. Aneurysmal etiology most likely \u2014 CTA for localization\n4. BP control critical \u2014 avoid hypertension (rebleed risk) and hypotension (cerebral perfusion)",
      "plan": "1. STAT CT head non-contrast \u2014 SAH confirmed (diffuse blood in basal cisterns)\n2. CTA head \u2014 identify aneurysm location\n3. Neurosurgery STAT consult\n4. Nicardipine drip \u2014 target SBP 120-140 (before securing aneurysm)\n5. Nimodipine 60mg PO q4h (vasospasm prevention \u2014 start immediately)\n6. Seizure prophylaxis: levetiracetam 1000mg IV\n7. Strict bed rest, HOB 30 degrees, dim lighting, stool softener\n8. External ventricular drain if hydrocephalus develops\n9. ICU admission\n10. Labs: CBC, CMP, coags, type & screen 4 units"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "10:00",
      "orderedBy": "Dr. Santos",
      "collected": "02/26/2026 10:05",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-260451",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "12.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "242",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "METABOLIC",
          "results": [
            {
              "test": "Sodium",
              "value": "136",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.8",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "148",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": ""
            }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            {
              "test": "PT",
              "value": "12.4",
              "unit": "sec",
              "range": "11.0-13.5",
              "flag": ""
            },
            {
              "test": "INR",
              "value": "1.0",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
            },
            {
              "test": "PTT",
              "value": "28",
              "unit": "sec",
              "range": "25-35",
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
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2026-260451",
      "status": "FINAL",
      "orderedBy": "Dr. Santos",
      "readBy": "Dr. Thomas Lee, MD (Neuroradiology)",
      "facility": "ReasonDx Memorial — Radiology",
      "priority": "STAT",
      "clinical": "Thunderclap headache, nuchal rigidity \u2014 SAH evaluation",
      "technique": "Non-contrast CT head.",
      "findings": "Diffuse subarachnoid hemorrhage. Blood in bilateral sylvian fissures, interhemispheric fissure, suprasellar cistern, and ambient cisterns. Modified Fisher Grade 3 (thick cisternal blood, no IVH). No hydrocephalus currently. No parenchymal hematoma. No midline shift.",
      "impression": "1. Diffuse subarachnoid hemorrhage \u2014 Modified Fisher Grade 3.\n2. Pattern suggests anterior communicating artery aneurysm.\n3. CTA for aneurysm localization.\n4. Neurosurgical emergency.",
      "dictated": "02/26/2026 10:15",
      "verified": "02/26/2026 10:20"
    },
    {
      "date": "02/26/2026",
      "study": "CT ANGIOGRAPHY HEAD",
      "accession": "CTA-2026-260451",
      "status": "FINAL",
      "orderedBy": "Dr. Santos",
      "readBy": "Dr. Thomas Lee, MD (Neuroradiology)",
      "facility": "ReasonDx Memorial — Radiology",
      "priority": "STAT",
      "clinical": "SAH \u2014 aneurysm localization",
      "technique": "CTA of the head with IV contrast.",
      "findings": "6 mm saccular aneurysm at the anterior communicating artery (A-comm) with irregular lobulated morphology \u2014 high-risk features. No additional aneurysms identified. Circle of Willis complete. No vasospasm currently.",
      "impression": "1. 6 mm A-comm aneurysm \u2014 presumed ruptured source.\n2. Irregular morphology \u2014 high rebleed risk.\n3. Recommend endovascular coiling vs surgical clipping \u2014 neurosurgical decision.",
      "dictated": "02/26/2026 10:30",
      "verified": "02/26/2026 10:35"
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
    "Mother: SAH from cerebral aneurysm at age 50 \u2014 survived after surgical clipping",
    "Father: HTN, alive at 76",
    "Brother: Migraines, alive at 44"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Marketing executive"
    ],
    [
      "Marital",
      "Married 18 years; 2 children (ages 14, 11)"
    ],
    [
      "Tobacco",
      "1/2 PPD x 25 years"
    ],
    [
      "Alcohol",
      "2-3 glasses wine/week"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Gym 3x/week \u2014 was exercising at onset"
    ],
    [
      "OCP",
      "On combined OCP \u2014 risk factor for SAH"
    ]
  ],
  "meta": {
    "caseId": "sah-v1",
    "diagnosis": "Subarachnoid Hemorrhage",
    "acuity": 1,
    "presentation": "Headache",
    "category": "neurologic"
  }
};
