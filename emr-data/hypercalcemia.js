/* emr-data/hypercalcemia.js
   Hypercalcemia — Malignancy vs. Primary Hyperparathyroidism
   Category: endocrine | Acuity: ESI-2
   Settings: ED, Floor
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "William Tran",
      "patientHPI": "I've been so confused and weak for the past week. I've also been extremely thirsty and urinating constantly. I was just diagnosed with lung cancer two months ago.",
      "dob": "04/11/1953",
      "age": "72",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-228874",
      "language": "English/Vietnamese",
      "race": "Asian",
      "phone": "(714) 555-8874",
      "email": "w.tran@email.com",
      "address": "3382 Westminster Ave, Garden Grove, CA 92843",
      "insurance": "Medicare",
      "pcp": "Dr. Linh Nguyen, MD",
      "pharmacy": "Rite Aid — Westminster",
      "emergencyContact": {
        "name": "Mai Tran",
        "phone": "(714) 555-2211",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025",
        "lot": "FL-25",
        "site": "Left Deltoid"
      }
    ],
    "familyHistory": [
      "Father: lung cancer (smoker)",
      "Non-contributory otherwise"
    ],
    "socialHistory": [
      [
        "Oncology",
        "Squamous cell carcinoma of the lung — stage IV (pleural effusion). Diagnosed 2 months ago. Starting chemotherapy next week."
      ],
      [
        "Smoking",
        "40 pack-year history — quit 10 years ago"
      ],
      [
        "Symptoms",
        "'Bones hurt, stones in past, abdominal groans, psychic moans' — classic hypercalcemia mnemonic"
      ],
      [
        "Calcium supplements",
        "Was taking OTC calcium carbonate 1500mg/day for bone health — recently increased dose"
      ],
      [
        "Vitamin D",
        "On vitamin D3 2000 IU daily"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "72M with stage IV squamous cell lung cancer — confusion, polyuria/polydipsia, weakness — Ca 14.2 mg/dL — hypercalcemia of malignancy",
        "diagnosis": "Hypercalcemia of Malignancy — PTHrP-Mediated — Squamous Cell Lung Cancer"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe hypercalcemia — Ca 14.2 mg/dL (corrected for albumin). Confusion, polyuria, weakness. Most likely hypercalcemia of malignancy (PTHrP-mediated in squamous cell cancer). PTH appropriately suppressed.",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "E83.52"
        },
        {
          "id": "prob-2",
          "description": "PTHrP (parathyroid hormone-related peptide) — produced by squamous cell carcinomas. Mimics PTH action: increases bone resorption + renal calcium reabsorption → hypercalcemia. PTH will be LOW (suppressed by elevated Ca).",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "C34.12"
        },
        {
          "id": "prob-3",
          "description": "Volume depletion — hypercalcemia causes nephrogenic DI → polyuria → volume depletion → decreased renal calcium clearance (worsens hypercalcemia). Aggressive IV hydration is cornerstone of treatment.",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "E86.0"
        },
        {
          "id": "prob-4",
          "description": "Calcium supplements + vitamin D — contributing factor, stop immediately",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "E83.52"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Calcium carbonate supplements",
          "dose": "1500mg",
          "route": "PO",
          "frequency": "Daily — STOP immediately",
          "status": "STOP",
          "prescriber": "Self-prescribed OTC"
        },
        {
          "id": "med-2",
          "name": "Vitamin D3",
          "dose": "2000 IU",
          "route": "PO",
          "frequency": "Daily — STOP during hypercalcemia",
          "status": "STOP",
          "prescriber": "Self-prescribed OTC"
        },
        {
          "id": "med-3",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active — continue",
          "prescriber": "Dr. Linh Nguyen, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "08:00",
          "bp": "108/72",
          "hr": "102",
          "rr": "18",
          "temp": "37.0°C",
          "spo2": "97%",
          "pain": "3/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Hypercalcemia of malignancy — Ca 14.2, confusion, stage IV lung cancer",
          "hpi": "72M with Stage IV squamous cell lung carcinoma presents with 1-week progressive confusion, polyuria, polydipsia, muscle weakness, constipation, and nausea. Calcium 14.2 mg/dL (severe: >14 = symptomatic, urgent treatment needed).\n\nHYPERCALCEMIA DIFFERENTIAL (CAUSES):\n1. PTHrP (malignancy — squamous cell carcinoma, renal, bladder): PTH LOW, PTHrP HIGH — most likely here\n2. Primary hyperparathyroidism: PTH HIGH — most common cause overall, but NOT in cancer patients\n3. Granulomatous disease (sarcoid, TB): 1,25-OH Vitamin D elevated, PTH low\n4. Vitamin D toxicity: vitamin D elevated, PTH low\n5. Multiple myeloma: SPEP/free light chains\n6. Thiazide diuretics (reduce renal Ca clearance)\n\nWORKUP:\n- Corrected Ca = Ca + 0.8 × (4 - albumin) = 14.2 (albumin 2.8 → corrected Ca = 14.2 + 0.8×1.2 = 15.2!)\n- PTH (should be LOW/suppressed in malignancy)\n- PTHrP\n- 25-OH vitamin D and 1,25-OH vitamin D\n\nTREATMENT OF HYPERCALCEMIA (stepwise):\n1. IV SALINE — cornerstone. NS 200-500 mL/hr. Volume expansion + calciuresis.\n2. ZOLEDRONIC ACID — bisphosphonate. Inhibits osteoclast bone resorption. Takes 24-48h to work. Mainstay for malignancy-related hypercalcemia.\n3. CALCITONIN — rapid onset (hours). Use for severe/symptomatic while waiting for bisphosphonate. Tachyphylaxis after 24-48h.\n4. DIALYSIS — if refractory or renal failure.",
          "assessment": "Severe symptomatic hypercalcemia of malignancy. Corrected Ca 15.2. Aggressive IVF, calcitonin for rapid action, zoledronic acid for sustained effect. Stop calcium and vitamin D. Oncology.",
          "plan": "NS 250-500 mL/hr IV hydration. Calcitonin 4 IU/kg SQ/IM Q12H (rapid — works within hours). Zoledronic acid 4mg IV over 15 min (takes 24-48h — sustained effect). STOP calcium supplements and vitamin D. PTH + PTHrP levels. Foley catheter — strict I&Os. Oncology — hypercalcemia indicates disease progression, treatment urgency. Recheck Ca Q8-12h. Loop diuretics (furosemide) ONLY if fluid overloaded — NOT routine."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "08:20",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-228874",
          "collected": "03/15/2026 08:15",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CALCIUM AND PARATHYROID STUDIES",
              "results": [
                {
                  "test": "Total Calcium",
                  "value": "14.2",
                  "unit": "mg/dL",
                  "range": "8.5-10.5 (severe: >14)",
                  "flag": "H"
                },
                {
                  "test": "Albumin",
                  "value": "2.8",
                  "unit": "g/dL",
                  "range": "3.5-5.0",
                  "flag": "L"
                },
                {
                  "test": "Corrected Calcium",
                  "value": "15.2",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
                  "flag": "H"
                },
                {
                  "test": "Ionized Calcium",
                  "value": "1.98",
                  "unit": "mmol/L",
                  "range": "1.12-1.32",
                  "flag": "H"
                },
                {
                  "test": "PTH (Parathyroid Hormone)",
                  "value": "8",
                  "unit": "pg/mL",
                  "range": "15-65 (SUPPRESSED)",
                  "flag": "L"
                },
                {
                  "test": "PTHrP (Parathyroid Hormone-Related Peptide)",
                  "value": "ELEVATED (62 pmol/L)",
                  "unit": "",
                  "range": "<2 pmol/L",
                  "flag": "H"
                },
                {
                  "test": "25-OH Vitamin D",
                  "value": "62",
                  "unit": "ng/mL",
                  "range": "30-100",
                  "flag": ""
                },
                {
                  "test": "1,25-OH Vitamin D",
                  "value": "18",
                  "unit": "pg/mL",
                  "range": "18-72",
                  "flag": ""
                }
              ]
            },
            {
              "name": "METABOLIC",
              "results": [
                {
                  "test": "Creatinine",
                  "value": "1.8",
                  "unit": "mg/dL",
                  "range": "0.7-1.3",
                  "flag": "H"
                },
                {
                  "test": "BUN",
                  "value": "44",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": "H"
                },
                {
                  "test": "Phosphorus",
                  "value": "1.8",
                  "unit": "mg/dL",
                  "range": "2.5-4.5 (LOW — PTHrP increases renal phosphorus excretion)",
                  "flag": "L"
                },
                {
                  "test": "Sodium",
                  "value": "145",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "3.2",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": "L"
                }
              ]
            }
          ]
        }
      ],
      "imaging": []
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 2 hypercalcemia — Ca 11.8 (down from 14.2) — improving with IVF + zoledronic acid",
        "diagnosis": "Hypercalcemia of Malignancy — Responding to Treatment"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Hypercalcemia — responding. Ca 14.2 → 12.4 → 11.8. Mental status improving. Zoledronic acid effect expected to peak at 48-72h.",
          "status": "Improving",
          "onset": "Subacute",
          "icd10": "E83.52"
        },
        {
          "id": "prob-2",
          "description": "AKI — creatinine 1.8 from volume depletion. Improving with IVF — Cr now 1.4.",
          "status": "Improving",
          "onset": "Acute",
          "icd10": "N17.9"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Normal Saline",
          "dose": "200 mL/hr",
          "route": "IV",
          "frequency": "Continuous — reducing rate as Ca improves",
          "status": "Active",
          "prescriber": "Dr. Medicine Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "bp": "118/76",
          "hr": "88",
          "rr": "16",
          "temp": "37.0°C",
          "spo2": "98%",
          "pain": "1/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Medicine Progress Note",
          "date": "03/16/2026",
          "provider": "Dr. Medicine Attending",
          "cc": "Day 2 — hypercalcemia of malignancy responding",
          "hpi": "Ca trending down: 14.2 → 12.4 → 11.8. Mental clarity improving — patient oriented x3 today. Creatinine improving: 1.8 → 1.4. Polyuria resolving as Ca normalizes. Zoledronic acid given yesterday — expect nadir calcium at 48-72h.\n\nONCOLOGY NOTE: Hypercalcemia in stage IV lung cancer = disease-related. Will likely recur without treatment of underlying malignancy. Chemotherapy initiation is the definitive treatment. Denosumab (RANK-L inhibitor) is alternative to zoledronic acid for malignancy-related hypercalcemia — consider if renal impairment persists.",
          "assessment": "Hypercalcemia of malignancy responding well. Discharge planning when Ca <12 AND tolerating PO AND oriented.",
          "plan": "Continue IVF — wean as Ca normalizes. Repeat Ca Q8h. Oncology — expedite chemotherapy given hypercalcemia as marker of disease burden. Denosumab or repeat zoledronic acid monthly for bone-related events. Stop calcium/vitamin D permanently. Follow-up Ca + Cr in 1 week."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. Medicine",
          "accession": "LAB-228875",
          "collected": "03/16/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CALCIUM TREND",
              "results": [
                {
                  "test": "Total Calcium",
                  "value": "11.8",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
                  "flag": "H"
                },
                {
                  "test": "Trend",
                  "value": "14.2 → 12.4 → 11.8 — RESPONDING ✓",
                  "unit": "",
                  "range": "Target <12",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.4",
                  "unit": "mg/dL",
                  "range": "0.7-1.3",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "StatPearls-Hypercalcemia",
      "title": "Hypercalcemia",
      "authors": "Zagzag J, Hu MI, Fisher SB, Perrier ND",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK430714/",
      "openAccess": true,
      "validates": [
        "Corrected calcium calculation",
        "Differential diagnosis (PTH vs PTHrP)",
        "Treatment stepwise (IVF, calcitonin, bisphosphonates)",
        "Furosemide not first-line"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Severe Hypercalcemia of Malignancy (PTHrP-Mediated) — Squamous Cell Lung Cancer",
    "caseId": "hypercalcemia"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: severe hypercalcemia of malignancy, PTHrP-mediated, in squamous cell lung carcinoma. Key learning: (1) The classic hypercalcemia mnemonic 'bones, stones, abdominal groans, psychic moans, and thrones' maps to bone pain/fractures, renal stones and polyuria, constipation/abdominal pain/pancreatitis, altered mental status and depression, and polyuria. Severity drives symptoms: mild (under 12 mg/dL) is often asymptomatic, moderate (12-14) causes fatigue and polyuria, and severe (over 14) brings confusion, dehydration, and can progress to coma or arrhythmia. Always correct for albumin — corrected Ca = measured Ca + 0.8 x (4 - albumin) — or use ionized calcium, which is more reliable especially in cancer and critical illness. (2) The differential is organized by PTH: if PTH is HIGH or inappropriately normal, think primary hyperparathyroidism (by far the most common cause overall), familial hypocalciuric hypercalcemia, or lithium. If PTH is LOW/suppressed, think malignancy (PTHrP-mediated in squamous cell, renal, bladder, and head/neck cancers; lytic metastases in breast and multiple myeloma; 1,25-vitamin D mediated in lymphoma and granulomatous disease), vitamin D toxicity, thyrotoxicosis, immobilization, and milk-alkali syndrome. Workup should always include PTH, PTHrP, 25-OH and 1,25-OH vitamin D, SPEP with free light chains (myeloma), TSH, phosphorus, magnesium, and renal function. (3) Treatment is stepwise and driven by severity and symptoms: (a) Aggressive IV isotonic saline (200-500 mL/hr, typically 4-6 L in the first 24 hours) restores volume and promotes calciuresis; loop diuretics are NOT routine and are reserved for fluid overload after adequate resuscitation. (b) Calcitonin (4 IU/kg SQ/IM q12h) works within hours but develops tachyphylaxis in 24-48 hours — use it for rapid bridging. (c) Bisphosphonates (zoledronic acid 4 mg IV over 15 min, preferred; pamidronate as alternative) are the mainstay for malignancy-related hypercalcemia, with onset at 24-48 hours and duration of weeks. (d) Denosumab is useful when bisphosphonates are contraindicated (renal failure) or refractory cases. (e) Glucocorticoids work for vitamin D mediated hypercalcemia (granulomatous disease, lymphoma). (f) Dialysis is reserved for severe refractory cases or renal failure. (4) Discontinue offending agents: calcium supplements, vitamin D, thiazides, lithium, and milk-alkali sources. Oncology consultation is essential because hypercalcemia of malignancy often signals progression — median survival after the first episode is historically months, though newer oncologic therapies are changing this. (5) Classic pitfalls: (a) not correcting for albumin in a cachectic cancer patient — a 'normal' calcium on a low albumin is actually high. (b) Using loop diuretics as first-line therapy before adequate volume resuscitation, worsening dehydration. (c) Missing multiple myeloma by failing to check SPEP/free light chains in an older patient with hypercalcemia, anemia, renal dysfunction, and bone pain (CRAB criteria). (d) Undertreating severe hypercalcemia as though it were outpatient — Ca over 14 or any symptomatic patient needs aggressive, staged therapy and close monitoring."
    }
  }
};
