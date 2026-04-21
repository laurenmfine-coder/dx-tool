
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Robert Chen",
      "patientHPI": "I've barely urinated in the last two days and my legs are really swollen. I had a bad stomach bug last week \u2014 vomiting and diarrhea for four days \u2014 and I wasn't able to keep anything down. I feel really weak and my back is aching.",
      "dob": "11/08/1956",
      "age": "69",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-551893",
      "language": "English",
      "race": "Asian",
      "phone": "(415) 555-1893",
      "email": "r.chen@email.com",
      "address": "3312 Geary Blvd, San Francisco, CA 94118",
      "insurance": "Medicare + Supplement",
      "pcp": "Dr. Linda Park, MD",
      "pharmacy": "Rite Aid \u2014 Geary Blvd",
      "emergencyContact": {
        "name": "Jenny Chen",
        "phone": "(415) 555-4421",
        "relationship": "Daughter"
      }
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Hives",
        "severity": "Moderate",
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
      "Father: Type 2 Diabetes, CKD",
      "Mother: Hypertension"
    ],
    "socialHistory": [
      [
        "Living",
        "Lives with daughter \u2014 otherwise independent"
      ],
      [
        "Alcohol",
        "Rare"
      ],
      [
        "Smoking",
        "Never"
      ],
      [
        "NSAIDs",
        "Takes ibuprofen 600mg TID for chronic knee pain \u2014 took throughout gastroenteritis illness"
      ],
      [
        "Baseline Cr",
        "Creatinine 0.9 mg/dL documented 6 months ago"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "69M with DM2/HTN, oliguria x2 days after severe gastroenteritis, Cr 4.2 (baseline 0.9), K+ 5.9, bilateral leg edema",
        "diagnosis": "Acute Kidney Injury \u2014 Mixed Etiology (Prerenal + NSAID-induced Intrinsic)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "AKI \u2014 Cr 4.2 (baseline 0.9), rise of 3.3 mg/dL. Mixed etiology: prerenal (volume depletion from gastroenteritis) + intrinsic (NSAID-induced during dehydration)",
          "status": "Active",
          "onset": "Acute",
          "icd10": "N17.9"
        },
        {
          "id": "prob-2",
          "description": "Hyperkalemia \u2014 K+ 5.9 mEq/L \u2014 EKG changes (peaked T waves)",
          "status": "Active",
          "onset": "Acute",
          "icd10": "E87.5"
        },
        {
          "id": "prob-3",
          "description": "Oliguria \u2014 urine output <0.5 mL/kg/hr x2 days",
          "status": "Active",
          "onset": "Acute",
          "icd10": "R34"
        },
        {
          "id": "prob-4",
          "description": "Volume depletion \u2014 gastroenteritis x4 days, poor oral intake",
          "status": "Active",
          "onset": "Acute",
          "icd10": "E86.0"
        },
        {
          "id": "prob-5",
          "description": "NSAID nephrotoxicity \u2014 ibuprofen 600mg TID during volume depletion (reduces PGE2-mediated afferent arteriolar dilation)",
          "status": "Active",
          "onset": "Acute",
          "icd10": "N14.1"
        },
        {
          "id": "prob-6",
          "description": "Type 2 Diabetes \u2014 HbA1c unknown, on metformin (HOLD \u2014 contraindicated in AKI)",
          "status": "Chronic",
          "onset": "Chronic",
          "icd10": "E11.9"
        },
        {
          "id": "prob-7",
          "description": "Hypertension \u2014 on lisinopril (HOLD \u2014 reduces GFR in volume depleted AKI)",
          "status": "Chronic",
          "onset": "Chronic",
          "icd10": "I10"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lisinopril",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "HOLD \u2014 reduces GFR in AKI",
          "prescriber": "Dr. Linda Park, MD"
        },
        {
          "id": "med-2",
          "name": "Metformin",
          "dose": "1000mg",
          "route": "PO",
          "frequency": "BID",
          "status": "HOLD \u2014 lactic acidosis risk in AKI",
          "prescriber": "Dr. Linda Park, MD"
        },
        {
          "id": "med-3",
          "name": "Ibuprofen",
          "dose": "600mg",
          "route": "PO",
          "frequency": "TID PRN",
          "status": "STOP \u2014 nephrotoxic, causative agent",
          "prescriber": "Self-prescribed OTC"
        },
        {
          "id": "med-4",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active \u2014 continue (not nephrotoxic)",
          "prescriber": "Dr. Linda Park, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "11:30",
          "bp": "158/94",
          "hr": "102",
          "rr": "18",
          "temp": "37.0\u00b0C",
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
          "cc": "AKI with hyperkalemia \u2014 oliguria x2 days after gastroenteritis, NSAID use during illness",
          "hpi": "69-year-old male with Type 2 Diabetes and hypertension presents with 2-day history of oliguria and bilateral lower extremity edema following a 4-day bout of severe gastroenteritis (vomiting and diarrhea). He continued taking ibuprofen 600mg TID throughout his illness for chronic knee pain and was unable to keep fluids down. Baseline creatinine was 0.9 mg/dL six months ago. Today's creatinine is 4.2 mg/dL.\n\nAKI STAGING (KDIGO):\n- Stage 3: Creatinine \u22653\u00d7 baseline (4.2 vs 0.9 = 4.7\u00d7) OR Cr \u22654.0 mg/dL\n- Oliguria: <0.5 mL/kg/hr for >12h\n\nETIOLOGY FRAMEWORK:\nPrerenal: \u2713 Profound volume depletion from GI losses; \u2713 Elevated BUN:Cr ratio 28:1 (>20:1 suggests prerenal)\nIntrinsic (NSAID): \u2713 NSAIDs reduce prostaglandin-mediated afferent arteriolar dilation \u2192 reduced GFR \u2192 particularly harmful in volume-depleted state; UA shows tubular casts\nObstructive: Less likely \u2014 no symptoms of obstruction, but bladder US needed to exclude\nIntrinsic (diabetic nephropathy): Possible baseline CKD \u2014 will clarify with nephrology",
          "assessment": "AKI Stage 3 \u2014 mixed prerenal and NSAID-induced intrinsic AKI. Hyperkalemia with EKG changes requires urgent treatment. Admit to nephrology service. Hold nephrotoxins. Aggressive IV fluid resuscitation. Foley catheter to monitor UO and exclude post-renal obstruction. EKG monitoring. Nephrology consult \u2014 may need dialysis if not improving or K+ continues to rise.",
          "plan": "URGENT: Calcium gluconate 1g IV for hyperkalemia with EKG changes (membrane stabilization). Sodium bicarbonate 50mEq IV (shift K+ intracellularly). Insulin 10U + D50 (shift K+ intracellularly). Kayexalate 30g PO or Patiromer if PO tolerating (eliminate K+). Stop ibuprofen and all NSAIDs permanently. Hold lisinopril, metformin. IV fluid resuscitation \u2014 NS 500mL bolus then reassess (cautious given Stage 3 AKI). Foley catheter \u2014 strict I&Os. Nephrology consult. Renal ultrasound to exclude obstruction. Repeat BMP in 4 hours."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "11:45",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-551893",
          "collected": "03/15/2026 11:40",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "COMPREHENSIVE METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "134",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": "L"
                },
                {
                  "test": "Potassium",
                  "value": "5.9",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": "H"
                },
                {
                  "test": "Bicarbonate",
                  "value": "16",
                  "unit": "mEq/L",
                  "range": "22-29",
                  "flag": "L"
                },
                {
                  "test": "BUN",
                  "value": "118",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": "H"
                },
                {
                  "test": "Creatinine",
                  "value": "4.2",
                  "unit": "mg/dL",
                  "range": "0.7-1.3",
                  "flag": "H"
                },
                {
                  "test": "eGFR",
                  "value": "12",
                  "unit": "mL/min/1.73m\u00b2",
                  "range": ">60",
                  "flag": "L"
                },
                {
                  "test": "Glucose",
                  "value": "182",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": "H"
                },
                {
                  "test": "BUN:Creatinine Ratio",
                  "value": "28:1",
                  "unit": "",
                  "range": "10-20:1",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "11.2",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "11.8",
                  "unit": "g/dL",
                  "range": "13.5-17.5",
                  "flag": "L"
                },
                {
                  "test": "Platelets",
                  "value": "178",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "150-400",
                  "flag": ""
                }
              ]
            },
            {
              "name": "URINALYSIS WITH MICROSCOPY",
              "results": [
                {
                  "test": "Specific Gravity",
                  "value": "1.028",
                  "unit": "",
                  "range": "1.005-1.030",
                  "flag": ""
                },
                {
                  "test": "Protein",
                  "value": "2+",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                },
                {
                  "test": "Blood",
                  "value": "Trace",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                },
                {
                  "test": "Granular casts (muddy brown)",
                  "value": "3-5/hpf",
                  "unit": "per high-power field",
                  "range": "None",
                  "flag": "H"
                },
                {
                  "test": "Renal tubular epithelial cells",
                  "value": "Present",
                  "unit": "",
                  "range": "Absent",
                  "flag": "H"
                },
                {
                  "test": "Urine Na",
                  "value": "48",
                  "unit": "mEq/L",
                  "range": "<20 prerenal; >40 intrinsic",
                  "flag": "H"
                },
                {
                  "test": "FENa",
                  "value": "2.8%",
                  "unit": "",
                  "range": "<1% prerenal; >2% intrinsic",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "ADDITIONAL RENAL STUDIES",
              "results": [
                {
                  "test": "Phosphorus",
                  "value": "6.8",
                  "unit": "mg/dL",
                  "range": "2.5-4.5",
                  "flag": "H"
                },
                {
                  "test": "Uric Acid",
                  "value": "9.2",
                  "unit": "mg/dL",
                  "range": "3.5-7.2",
                  "flag": "H"
                },
                {
                  "test": "HbA1c",
                  "value": "8.1",
                  "unit": "%",
                  "range": "<5.7",
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
          "type": "Renal Ultrasound",
          "date": "03/15/2026",
          "time": "13:00",
          "orderedBy": "Dr. Attending",
          "findings": "Right kidney 11.2 cm, left kidney 10.8 cm \u2014 normal size bilaterally. No hydronephrosis. No stones. No masses. Bladder adequately emptied after Foley placement \u2014 450 mL drained (consistent with oliguria, not obstruction). Normal cortical echogenicity bilaterally \u2014 no cortical thinning to suggest chronic disease.",
          "impression": "No obstructive etiology. Normal kidney size argues against chronic kidney disease as primary etiology. AKI most consistent with prerenal/intrinsic causes.",
          "critical": false
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 2 AKI \u2014 hyperkalemia treated, Cr 3.6 (trending down), urine output improving with IVF",
        "diagnosis": "AKI Stage 3 \u2014 resolving \u2014 Mixed Prerenal/NSAID-Induced"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "AKI \u2014 improving, Cr 3.6 from peak 4.2. Urine output 30-40 mL/hr with IVF. Polyuric recovery phase expected.",
          "status": "Improving",
          "onset": "Acute",
          "icd10": "N17.9"
        },
        {
          "id": "prob-2",
          "description": "Hyperkalemia \u2014 resolved with treatment, K+ now 4.8 mEq/L",
          "status": "Resolved",
          "onset": "Acute",
          "icd10": "E87.5"
        },
        {
          "id": "prob-3",
          "description": "Metabolic acidosis \u2014 bicarbonate improving, now 19 mEq/L",
          "status": "Improving",
          "onset": "Acute",
          "icd10": "E87.2"
        },
        {
          "id": "prob-4",
          "description": "NSAID-induced nephropathy \u2014 all NSAIDs discontinued, patient counseled: never ibuprofen/naproxen/ketorolac again",
          "status": "Active",
          "onset": "Acute",
          "icd10": "N14.1"
        },
        {
          "id": "prob-5",
          "description": "Metformin held \u2014 restart when Cr <1.5 and eGFR >45",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "E11.9"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Normal Saline",
          "dose": "125 mL/hr",
          "route": "IV",
          "frequency": "Continuous \u2014 titrate to UO 0.5 mL/kg/hr",
          "status": "Active",
          "prescriber": "Dr. Nephrology Attending"
        },
        {
          "id": "med-2",
          "name": "Sodium Polystyrene (Kayexalate)",
          "dose": "30g",
          "route": "PO",
          "frequency": "Daily PRN K+ >5.5",
          "status": "Active \u2014 monitoring K+",
          "prescriber": "Dr. Nephrology Attending"
        },
        {
          "id": "med-3",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active \u2014 continuing for BP control",
          "prescriber": "Dr. Nephrology Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "bp": "144/88",
          "hr": "88",
          "rr": "16",
          "temp": "37.0\u00b0C",
          "spo2": "98%",
          "pain": "1/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Nephrology Progress Note",
          "date": "03/16/2026",
          "provider": "Dr. Nephrology Attending",
          "cc": "Day 2 AKI \u2014 trending toward recovery",
          "hpi": "Good overnight progress. Creatinine trending down: 4.2 \u2192 3.6. Urine output improving: now 35-40 mL/hr (goal \u22650.5 mL/kg/hr = ~35 mL/hr for 70kg patient). Hyperkalemia treated \u2014 K+ now 4.8. Bicarbonate improving \u2014 16 \u2192 19. Patient able to tolerate PO fluids. No pulmonary edema on exam \u2014 able to continue IV hydration.\n\nETIOLOGY CONFIRMED: Mixed prerenal + NSAID-induced ATN. FENa 2.8% confirms intrinsic AKI (not purely prerenal). Muddy brown granular casts = ATN. Urine Na >40 = tubular dysfunction. No obstruction (US negative, Foley drained 450mL, now producing urine).\n\nKEY TEACHING MOMENTS:\n1. NSAID nephrotoxicity mechanism: PGs (PGE2) maintain afferent arteriolar dilation \u2192 NSAIDs block \u2192 vasoconstriction \u2192 ischemic ATN. Especially dangerous when volume depleted or in CKD/DM/elderly.\n2. BUN:Cr ratio: >20:1 suggests prerenal, but in this case mixed etiology \u2014 the ATN component has the FENa >2% despite elevated BUN:Cr from concurrent volume depletion\n3. Medications to hold in AKI: ACE-I/ARB, NSAIDs, metformin, aminoglycosides, contrast dye, direct renal toxins\n4. Monitoring recovery: look for polyuric phase \u2014 UO may spike to >200 mL/hr as tubules recover; must not let patient become hypernatremic",
          "assessment": "AKI Stage 3, recovering. Expected full renal recovery if creatinine returns to baseline \u2014 may take 2-4 weeks. No dialysis needed currently (K+ controlled, not anuric, no severe acidosis). Follow closely as outpatient \u2014 nephrology in 2 weeks with repeat BMP.",
          "plan": "Continue gentle IV hydration \u2014 match urine output + insensible losses. Hold ACE-I lisinopril \u2014 restart when Cr <1.5 (may need dose adjustment). Hold metformin \u2014 restart when eGFR >45. NEVER restart NSAIDs \u2014 document allergy/adverse reaction. Acetaminophen for pain (safe in AKI with caution). Nephrology outpatient in 2 weeks. PCP in 1 week with repeat BMP. Renal diet education \u2014 low potassium, low phosphorus until recovered."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. Nephrology Attending",
          "accession": "LAB-551894",
          "collected": "03/16/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "COMPREHENSIVE METABOLIC PANEL \u2014 TREND",
              "results": [
                {
                  "test": "Potassium",
                  "value": "4.8",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "Bicarbonate",
                  "value": "19",
                  "unit": "mEq/L",
                  "range": "22-29",
                  "flag": "L"
                },
                {
                  "test": "BUN",
                  "value": "102",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": "H"
                },
                {
                  "test": "Creatinine",
                  "value": "3.6",
                  "unit": "mg/dL",
                  "range": "0.7-1.3",
                  "flag": "H"
                },
                {
                  "test": "eGFR",
                  "value": "16",
                  "unit": "mL/min/1.73m\u00b2",
                  "range": ">60",
                  "flag": "L"
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
      "id": "KDIGO-AKI-2012",
      "title": "KDIGO Clinical Practice Guideline for Acute Kidney Injury",
      "authors": "Kidney Disease: Improving Global Outcomes (KDIGO) AKI Work Group",
      "journal": "Kidney International Supplements",
      "year": 2012,
      "doi": "10.1038/kisup.2011.34",
      "url": "https://kdigo.org/guidelines/acute-kidney-injury/",
      "openAccess": true,
      "validates": [
        "AKI staging (KDIGO criteria)",
        "Definition of AKI",
        "Management principles"
      ]
    },
    {
      "id": "StatPearls-AKI",
      "title": "Acute Kidney Injury",
      "authors": "Goyal A, Daneshpajouhnejad P, Hashmi MF, Bashir K",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK441896/",
      "openAccess": true,
      "validates": [
        "AKI differential diagnosis",
        "FENa interpretation",
        "NSAID nephrotoxicity mechanism",
        "Management of hyperkalemia in AKI"
      ]
    },
    {
      "id": "StatPearls-Hyperkalemia",
      "title": "Hyperkalemia",
      "authors": "Simon LV, Hashmi MF, Farrell MW",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK470284/",
      "openAccess": true,
      "validates": [
        "EKG changes in hyperkalemia",
        "Calcium gluconate indications",
        "Potassium-lowering treatments",
        "Dialysis threshold"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Acute Kidney Injury \u2014 Prerenal vs Intrinsic (ATN) Differentiation",
    "caseId": "aki-differential"
  },
  "problems": [
    {
      "problem": "Acute kidney injury \u2014 etiology undetermined",
      "icd": "N17.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Robert Chen, 64M \u2014 creatinine 3.8 (baseline 1.1), BUN 68, oliguria. Recent NSAID use for back pain, CT contrast 3 days ago, hypotensive episode during GI illness. Multiple possible etiologies."
    },
    {
      "problem": "Oliguria \u2014 urine output <0.5mL/kg/hr",
      "icd": "R34",
      "onset": "2024",
      "status": "Active",
      "notes": "Key clinical marker. Prerenal and ATN both cause oliguria \u2014 urine indices distinguish."
    },
    {
      "problem": "Multiple nephrotoxin exposures \u2014 NSAIDs + contrast",
      "icd": "N14.1",
      "onset": "2024",
      "status": "Active",
      "notes": "NSAIDs reduce prostaglandin-mediated afferent arteriolar dilation \u2192 prerenal pattern. IV contrast \u2192 tubular toxicity (especially with volume depletion)."
    }
  ],
  "medications": [
    {
      "name": "IV fluid challenge \u2014 NS 500mL bolus",
      "sig": "Diagnostic and therapeutic. Prerenal AKI will respond with urine output increase. ATN will not. Monitor urine output hourly.",
      "prescriber": "Medicine/Nephrology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Hold all nephrotoxins \u2014 NSAIDs, contrast, ACE inhibitors",
      "sig": "Remove all ongoing renal insults immediately. NSAIDs \u2192 afferent vasoconstriction. ACE inhibitors \u2192 efferent vasodilation \u2192 reduced GFR in already compromised kidney.",
      "prescriber": "Medicine/Nephrology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 held"
    },
    {
      "name": "Nephrology consultation",
      "sig": "AKI with creatinine >3x baseline or oliguria >6h warrants nephrology involvement.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Consulted"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "AKI Differentiation",
      "results": [
        {
          "test": "Creatinine",
          "value": "3.8",
          "unit": "mg/dL",
          "ref": "0.7-1.3 (baseline 1.1)",
          "flag": "H"
        },
        {
          "test": "BUN:Cr ratio",
          "value": "17.9",
          "unit": "",
          "ref": ">20 = prerenal; <20 = intrinsic",
          "flag": ""
        },
        {
          "test": "Urine sodium",
          "value": "48",
          "unit": "mEq/L",
          "ref": "<20 = prerenal; >40 = ATN",
          "flag": "H"
        },
        {
          "test": "FENa",
          "value": "2.8",
          "unit": "%",
          "ref": "<1% = prerenal; >2% = ATN",
          "flag": "H"
        },
        {
          "test": "Urine osmolality",
          "value": "310",
          "unit": "mOsm/kg",
          "ref": ">500 = prerenal; <350 = ATN",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Renal Ultrasound",
      "findings": "Bilateral kidneys normal size, 11cm. No hydronephrosis. Normal cortical echogenicity. No stones or masses.",
      "impression": "No obstructive uropathy. Normal renal size suggests acute rather than chronic process."
    }
  ],
  "guided": {
    "ddxTargets": [
      "ATN \u2014 contrast + NSAID nephrotoxicity + volume depletion (correct)",
      "Prerenal AKI \u2014 BUN:Cr borderline; but FENa 2.8% and urine osmolality 310 = tubular dysfunction, not prerenal",
      "Postrenal obstruction \u2014 ultrasound no hydronephrosis; rules out",
      "Contrast-induced nephropathy alone \u2014 timing fits (3 days post-contrast); contributed but likely multifactorial",
      "NSAID-induced prerenal \u2014 would show FENa <1%; FENa 2.8% indicates established ATN"
    ],
    "coachPrompts": {
      "final": "Diagnosis: acute tubular necrosis (ATN) \u2014 multifactorial. Key learning: (1) AKI differentiation: the three categories are prerenal (reduced perfusion, tubules intact), intrinsic (tubular/glomerular/vascular damage), and postrenal (obstruction). The urinary indices distinguish prerenal from ATN. (2) Key indices: FENa <1% = prerenal (tubules avidly reabsorbing sodium). FENa >2% = ATN (tubules damaged, cannot reabsorb). BUN:Cr >20 = prerenal (concentrated urine, BUN elevated from urea reabsorption). Urine osmolality >500 = prerenal (concentrating ability intact). (3) Caveat: FENa can be falsely low (<1%) in ATN from contrast, myoglobin, or early obstruction \u2014 use FEUrea (<35% = prerenal) in these cases. (4) Mud-brown granular casts on urinalysis = ATN (sloughed tubular epithelial cells). Hyaline casts = prerenal. RBC casts = glomerulonephritis. (5) Recovery from ATN: oliguric phase (days to weeks) \u2192 diuretic phase (polyuria from tubular recovery, risk of volume depletion and electrolyte abnormalities) \u2192 recovery phase."
    }
  }
};
