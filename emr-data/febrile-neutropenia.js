/* emr-data/febrile-neutropenia.js
   Febrile Neutropenia — Oncologic Emergency
   Category: hematology | Acuity: ESI-2
   Settings: ED, Floor, ICU
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Sandra Park",
      "patientHPI": "I'm on chemotherapy for breast cancer and I've had a fever of 38.8°C at home. My oncologist told me to go straight to the ED if I develop a fever. I feel very weak and my whole body aches.",
      "dob": "05/29/1969",
      "age": "56",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-774902",
      "language": "English/Korean",
      "race": "Asian",
      "phone": "(206) 555-4902",
      "email": "s.park@email.com",
      "address": "4421 NE 45th St, Seattle, WA 98105",
      "insurance": "Blue Cross Blue Shield",
      "pcp": "Dr. Jennifer Kim, MD",
      "pharmacy": "Walgreens — University District",
      "emergencyContact": {
        "name": "David Park",
        "phone": "(206) 555-7733",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Hives (childhood)",
        "severity": "Mild",
        "type": "Drug"
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
      "Sister: breast cancer at 48",
      "Mother: ovarian cancer"
    ],
    "socialHistory": [
      [
        "Oncology",
        "Stage III HER2+ breast cancer. Cycle 3 of dose-dense AC-T (doxorubicin/cyclophosphamide) chemotherapy. Last cycle 10 days ago."
      ],
      [
        "Chemo day",
        "Day 10 post-chemotherapy — nadir period for neutropenia (typically days 7-14)"
      ],
      [
        "Granulocyte support",
        "Received pegfilgrastim (Neulasta) — but still neutropenic"
      ],
      [
        "Living",
        "Lives with spouse — supportive family"
      ],
      [
        "Smoking",
        "Never"
      ],
      [
        "Alcohol",
        "Rare"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "56F on dose-dense AC chemo, day 10 post-cycle — fever 38.8°C, ANC 180 (severe neutropenia) — FEBRILE NEUTROPENIA — antibiotics within 60 minutes",
        "diagnosis": "Febrile Neutropenia — High Risk (MASCC score 17) — Empiric Cefepime"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Febrile neutropenia — ANC 180 (severe: <500). Fever 38.8°C (single reading ≥38.3°C OR ≥38.0°C x2 over 1h = febrile neutropenia). MASCC score 17 = HIGH RISK (needs IV antibiotics and admission).",
          "status": "Active",
          "onset": "Acute",
          "icd10": "D70.9"
        },
        {
          "id": "prob-2",
          "description": "No identified source on exam — no cellulitis, no mucositis, no respiratory symptoms, no focal infection. Bacteremia/occult source most likely. Blood cultures x2 mandatory BEFORE antibiotics.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "A41.9"
        },
        {
          "id": "prob-3",
          "description": "Penicillin allergy — hives (childhood, low-risk). Cefepime is a cephalosporin (cross-reactivity <1-2%). Given high-risk FN, risk of untreated infection far exceeds allergy risk. Cefepime appropriate. Allergy consult if needed.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "Z88.0"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cefepime",
          "dose": "2g IV",
          "route": "IV",
          "frequency": "Q8H — empiric for febrile neutropenia. Broad-spectrum covering Pseudomonas.",
          "status": "START within 60 min of presentation",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-2",
          "name": "Vancomycin",
          "dose": "25 mg/kg IV",
          "route": "IV",
          "frequency": "Q12H — ADD only if: hemodynamic instability, skin/soft tissue infection, pneumonia, mucositis severe, catheter-site infection. NOT routine.",
          "status": "PRN — specific indications only",
          "prescriber": "Dr. Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "19:00",
          "bp": "104/66",
          "hr": "118",
          "rr": "22",
          "temp": "38.8°C",
          "spo2": "97%",
          "pain": "3/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit — Febrile Neutropenia Protocol",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Febrile neutropenia — door-to-antibiotic goal 60 minutes",
          "hpi": "56F with Stage III HER2+ breast cancer on dose-dense AC-T chemotherapy, day 10 post-cycle 3 (nadir period). Fever 38.8°C at home x2h. Denies rigors, cough, dysuria, diarrhea, rash, or focal pain. Received pegfilgrastim post-cycle but remains neutropenic.\n\nFEBRILE NEUTROPENIA DEFINITION:\n✓ ANC <500 OR ANC <1000 AND expected to fall to <500 within 48h\n✓ Single temperature ≥38.3°C (101°F) OR ≥38.0°C sustained over 1 hour\n→ BOTH criteria met: ANC 180, T 38.8°C\n\nMASSCC RISK SCORE (predicts risk of serious complications):\n- No hypotension (5 pts)\n- No COPD (4 pts)\n- Solid tumor (4 pts)\n- No dehydration (3 pts)\n- Outpatient status (3 pts)\n- Age <60 (2 pts)\n→ TOTAL: 17/26 — score ≥21 = low risk; <21 = HIGH RISK → IV antibiotics + admission\n\nANTIBIOTIC SELECTION:\n- Empiric: anti-Pseudomonal beta-lactam (cefepime, piperacillin-tazobactam, or meropenem)\n- ADD vancomycin ONLY for specific indications (not routine — promotes resistance)\n- Penicillin allergy: cefepime acceptable (cross-reactivity <2% for mild PCN allergy)\n\nTIMING: Antibiotics must be given WITHIN 60 MINUTES. Every hour delay increases mortality.",
          "assessment": "High-risk febrile neutropenia — MASCC 17. Blood cultures x2 (peripheral + port) before antibiotics. Cefepime empirically. Admit oncology. Oncology consult.",
          "plan": "Blood cultures x2 (peripheral and from port/central line if present) BEFORE first antibiotic dose. Cefepime 2g IV NOW (within 60 min). UA + urine culture. CXR. CBC diff, CMP. Oncology consult. Admit oncology floor (or ICU if hemodynamics worsen). Continue until ANC >500 x2 days AND afebrile x48h. G-CSF (filgrastim) typically not added during treatment — given prophylactically next cycle."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "19:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-774902",
          "collected": "03/15/2026 19:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL — CRITICAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "0.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "L"
                },
                {
                  "test": "ANC (Absolute Neutrophil Count)",
                  "value": "180",
                  "unit": "cells/µL",
                  "range": ">1500; <500 = severe neutropenia",
                  "flag": "L"
                },
                {
                  "test": "Hemoglobin",
                  "value": "9.8",
                  "unit": "g/dL",
                  "range": "12-16",
                  "flag": "L"
                },
                {
                  "test": "Platelets",
                  "value": "62",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "METABOLIC",
              "results": [
                {
                  "test": "Creatinine",
                  "value": "0.9",
                  "unit": "mg/dL",
                  "range": "0.5-1.1",
                  "flag": ""
                },
                {
                  "test": "AST",
                  "value": "48",
                  "unit": "U/L",
                  "range": "10-40",
                  "flag": "H"
                },
                {
                  "test": "ALT",
                  "value": "62",
                  "unit": "U/L",
                  "range": "7-56",
                  "flag": "H"
                },
                {
                  "test": "LDH",
                  "value": "320",
                  "unit": "U/L",
                  "range": "140-280",
                  "flag": "H"
                },
                {
                  "test": "Lactate",
                  "value": "1.8",
                  "unit": "mmol/L",
                  "range": "0.5-2.0",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BLOOD CULTURES x2",
              "results": [
                {
                  "test": "Blood Culture — Peripheral",
                  "value": "Pending 24-48h",
                  "unit": "",
                  "range": "No growth",
                  "flag": ""
                },
                {
                  "test": "Blood Culture — Port",
                  "value": "Pending 24-48h",
                  "unit": "",
                  "range": "No growth",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "type": "Chest X-Ray Portable AP",
          "date": "03/15/2026",
          "time": "19:30",
          "orderedBy": "Dr. Attending",
          "findings": "No acute cardiopulmonary process. No pneumonia. No pneumothorax. Port-a-cath right chest in good position.",
          "impression": "No pulmonary source of fever identified. Port in good position.",
          "critical": false
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 3 febrile neutropenia — E. coli bacteremia — ANC recovering, afebrile x24h",
        "diagnosis": "E. coli Bacteremia — Febrile Neutropenia — ANC Recovering"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "E. coli bacteremia — blood cultures (peripheral) grew E. coli (pan-susceptible). Port culture negative (not port-related). Source likely GI tract translocation. Cefepime covers E. coli — no change in regimen needed.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "A41.51"
        },
        {
          "id": "prob-2",
          "description": "ANC recovering — 180 → 420 → 680 (day 3). Pegfilgrastim effect. Expect ANC >500 today. Continue cefepime until ANC >500 x2 days AND afebrile x48h.",
          "status": "Improving",
          "onset": "Acute",
          "icd10": "D70.9"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cefepime",
          "dose": "2g IV",
          "route": "IV",
          "frequency": "Q8H — continue until ANC >500 x2 days AND afebrile x48h",
          "status": "Active — day 3",
          "prescriber": "Dr. Oncology"
        }
      ],
      "vitals": [
        {
          "date": "03/17/2026",
          "time": "06:00",
          "bp": "118/74",
          "hr": "84",
          "rr": "16",
          "temp": "36.9°C",
          "spo2": "99%",
          "pain": "1/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Oncology Progress Note",
          "date": "03/17/2026",
          "provider": "Dr. Oncology Attending",
          "cc": "Day 3 FN — E. coli bacteremia, ANC recovering, afebrile",
          "hpi": "Excellent progress. Blood cultures: E. coli growing peripheral culture (day 1). Fully susceptible to cefepime. Port culture negative. Afebrile x28 hours. ANC trending up: 180→420→680 — expect >1000 today. Plan to discharge when ANC >500 x2 consecutive days AND afebrile x48h AND tolerating PO.\n\nNEXT CHEMOTHERAPY CYCLE: Delay next cycle until ANC recovery (typically >1500 for dose-dense AC-T). Consider dose reduction if severe neutropenia persists. Increase prophylactic G-CSF duration. Review port for any sign of infection (negative culture — port can stay).",
          "assessment": "Recovering febrile neutropenia. E. coli bacteremia responding to cefepime. Discharge planning for tomorrow if ANC criteria met.",
          "plan": "Continue cefepime until discharge criteria met (ANC >500 x2d, afebrile x48h). Discharge on oral ciprofloxacin x10 days to complete E. coli bacteremia treatment. Oncology follow-up in 5 days — ANC recheck, next cycle planning. Patient education: fever protocol, hand hygiene, avoid sick contacts, food safety (no raw meat/sushi while neutropenic)."
        }
      ],
      "labs": [
        {
          "date": "03/17/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. Oncology",
          "accession": "LAB-774903",
          "collected": "03/17/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC — ANC TREND",
              "results": [
                {
                  "test": "ANC today",
                  "value": "680",
                  "unit": "cells/µL",
                  "range": ">500 = recovery",
                  "flag": "L"
                },
                {
                  "test": "ANC trend",
                  "value": "180 → 420 → 680 — RECOVERING ✓",
                  "unit": "",
                  "range": "Target >500",
                  "flag": ""
                },
                {
                  "test": "Blood Culture Day 3 (both sets)",
                  "value": "No growth x48h — CLEARED",
                  "unit": "",
                  "range": "No growth",
                  "flag": ""
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
      "id": "IDSA-FN-2011",
      "title": "Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients with Cancer: 2010 Update by the Infectious Diseases Society of America",
      "authors": "Freifeld AG, Bow EJ, Sepkowitz KA, et al.",
      "journal": "Clinical Infectious Diseases",
      "year": 2011,
      "doi": "10.1093/cid/cir073",
      "url": "https://www.idsociety.org/practice-guideline/fever-and-neutropenia/",
      "openAccess": true,
      "validates": [
        "MASCC risk scoring",
        "Antibiotic selection (cefepime)",
        "Vancomycin indications",
        "Duration of therapy",
        "60-minute antibiotic goal"
      ]
    }
  ],
  "meta": {
    "diagnosis": "High-Risk Febrile Neutropenia — Oncologic Emergency",
    "caseId": "febrile-neutropenia"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: high-risk febrile neutropenia in a patient on dose-dense chemotherapy for breast cancer. Key learning: (1) Febrile neutropenia (FN) is defined as a single oral temperature >=38.3 C (101 F) or >=38.0 C sustained over 1 hour in a patient with an absolute neutrophil count (ANC) under 500/uL, or under 1,000/uL with predicted decline to under 500 within 48 hours. The nadir period after most cytotoxic regimens is days 7-14 — ask specifically about day post-chemotherapy when evaluating any oncology patient with fever. Even with normal-appearing vitals, these patients can decompensate rapidly because the inflammatory signs of infection are blunted. (2) The door-to-antibiotic target is 60 minutes. Every hour of delay increases mortality in febrile neutropenia, and the typical workflow bottleneck is waiting for labs or imaging before initiating empiric coverage. Get blood cultures (x2 — one peripheral, one from each indwelling line lumen), urinalysis and urine culture, chest X-ray, CBC with differential, and CMP — then give antibiotics immediately, do not wait for results. (3) Empiric antibiotic selection uses a single anti-pseudomonal beta-lactam: cefepime, piperacillin-tazobactam, or meropenem. Vancomycin is NOT routine — add it only for specific indications (hemodynamic instability, known MRSA colonization, catheter-site or skin/soft-tissue infection, severe mucositis, suspected pneumonia, recent fluoroquinolone prophylaxis). Add antifungal coverage (usually an echinocandin) if fever persists over 4-7 days on broad-spectrum antibacterials, especially with prolonged neutropenia. A penicillin allergy of 'childhood hives' should not deter cefepime — cross-reactivity is under 2% and the risk of untreated FN far exceeds the allergy risk. (4) MASCC risk score stratifies admission needs: burden of illness (no/mild symptoms 5 pts), no hypotension (5), no COPD (4), solid tumor or no prior fungal infection (4), no dehydration (3), outpatient status (3), age under 60 (2). Score >=21 = low risk (may be candidate for oral outpatient therapy in select systems); under 21 = high risk (IV antibiotics, admission). (5) Classic pitfalls: (a) failing to recognize that a patient with ANC under 100 may not mount a fever — any neutropenic patient with new hypotension, altered mental status, or localized pain should be treated as presumed FN. (b) Forgetting that pegfilgrastim does not prevent all post-chemo neutropenia; patients can still present with profound ANC nadirs. (c) Delaying antibiotics for a CT scan when a CXR would suffice. (d) Not involving oncology early — admission location (oncology floor vs ICU) and continuation of chemotherapy depend on their input."
    }
  }
};
