
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Grace Thompson",
      "patientHPI": "I've had burning with urination for three days and yesterday I started getting severe right flank pain and fever and chills. I also feel confused and weak. I have diabetes and I'm worried because this feels much worse than a regular UTI.",
      "dob": "06/22/1955",
      "age": "70",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-448812",
      "language": "English",
      "race": "Black/African American",
      "phone": "(770) 555-8812",
      "email": "",
      "address": "4421 Ponce De Leon Ave, Decatur, GA 30030",
      "insurance": "Medicare",
      "pcp": "Dr. Sandra Webb, MD",
      "pharmacy": "Walgreens \u2014 Ponce De Leon",
      "emergencyContact": {
        "name": "Michael Thompson",
        "phone": "(770) 555-4411",
        "relationship": "Son"
      }
    },
    "allergies": [
      {
        "allergen": "Sulfa",
        "reaction": "Rash",
        "severity": "Mild",
        "type": "Drug"
      },
      {
        "allergen": "Penicillin",
        "reaction": "Rash (reported childhood, no documentation)",
        "severity": "Unknown",
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Diabetes",
        "T2DM x18 years, HbA1c 8.4%, on metformin + insulin"
      ],
      [
        "Recurrent UTI",
        "3 UTIs in past 2 years \u2014 always E. coli susceptible to ciprofloxacin previously"
      ],
      [
        "Functional status",
        "Independent but walks slowly with cane"
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
        "chiefComplaint": "70F DM2 \u2014 3-day dysuria + right flank pain + fever 39.4\u00b0C + altered mental status \u2014 qSOFA 2, sepsis criteria \u2014 E. coli bacteremia",
        "diagnosis": "Severe Pyelonephritis with Sepsis (Urosepsis) \u2014 E. coli \u2014 Antibiotic Selection with Allergy History"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Urosepsis \u2014 pyelonephritis meeting sepsis criteria. qSOFA 2: altered mentation + RR \u226522. SIRS criteria met: fever, tachycardia, tachypnea, leukocytosis. Lactate 2.8 (borderline). Blood cultures pending. Start broad-spectrum antibiotics within 1 hour.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "N10"
        },
        {
          "id": "prob-2",
          "description": "Antibiotic selection challenge: Sulfa allergy (TMP-SMX excluded) + Penicillin allergy (vague childhood rash \u2014 LOW RISK for cross-reactivity with cephalosporins <2%). In sepsis, treat and reassess. Ceftriaxone appropriate (cephalosporin, not PCN, low cross-reactivity risk in sepsis)",
          "status": "Active",
          "onset": "Acute",
          "icd10": "Z88.0"
        },
        {
          "id": "prob-3",
          "description": "Fluoroquinolone (ciprofloxacin) consideration: E. coli resistance rates ~20-30% in some areas \u2014 do NOT use empirically unless susceptibility confirmed. Prior susceptibility does NOT guarantee current susceptibility. Await cultures.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "N10"
        },
        {
          "id": "prob-4",
          "description": "Metformin \u2014 HOLD immediately. Sepsis \u2192 renal hypoperfusion \u2192 AKI risk \u2192 lactic acidosis with metformin. Insulin sliding scale instead.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "E11.9"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Ceftriaxone",
          "dose": "2g IV",
          "route": "IV",
          "frequency": "Q24H \u2014 empiric. Penicillin allergy: low-risk rash \u2014 cephalosporin cross-reactivity <2%. In sepsis, benefit outweighs allergy risk. Observe for 30 min after first dose.",
          "status": "Active \u2014 WITHIN 60 MINUTES",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-2",
          "name": "Normal Saline",
          "dose": "30 mL/kg IV bolus (2L for 70kg)",
          "route": "IV",
          "frequency": "Over 3h \u2014 Sepsis Bundle within 3h. Reassess fluid responsiveness after.",
          "status": "Active \u2014 Sepsis Bundle",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-3",
          "name": "Metformin",
          "dose": "500mg",
          "route": "PO",
          "frequency": "BID \u2014 HOME MED, HOLD NOW. Lactic acidosis risk with sepsis/AKI.",
          "status": "HOLD",
          "prescriber": "Dr. Sandra Webb, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "16:00",
          "bp": "98/62",
          "hr": "118",
          "rr": "24",
          "temp": "39.4\u00b0C",
          "spo2": "96%",
          "pain": "8/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Urosepsis \u2014 pyelonephritis with sepsis criteria \u2014 antibiotic selection with penicillin allergy history",
          "hpi": "70F with DM2 presents with 3-day urinary symptoms progressing to right flank pain, rigors, fever 39.4\u00b0C, and altered mentation today. BP 98/62, HR 118, RR 24. qSOFA 2 (AMS + RR\u226522).\n\nSEPSIS 3 CRITERIA:\n- Suspected infection: YES \u2014 pyelonephritis\n- Organ dysfunction (SOFA \u22652): AMS (SOFA +1), SBP <100 (+1-2), creatinine rise pending\n\u2192 SEPSIS: YES\n- Septic shock: MAP <65 despite fluids + lactate >2 \u2014 borderline, watching\n\nURINARY SEPSIS BUNDLE (within 1h):\n\u2713 Blood cultures x2 before antibiotics\n\u2713 Urine culture before antibiotics\n\u2713 Lactate measurement\n\u2713 IV fluid 30 mL/kg for hypotension/lactate \u22654\n\u2713 Empiric antibiotics WITHIN 1 HOUR\n\nANTIBIOTIC SELECTION WITH ALLERGIES:\nSulfa allergy (documented) \u2192 TMP-SMX excluded\nPenicillin allergy (vague childhood rash \u2014 LOW RISK):\n- Cross-reactivity cephalosporins/penicillin: <2% with low-risk PCN allergy\n- In SEPSIS: risk of anaphylaxis (low) vs. risk of inadequate treatment (high) \u2192 treat\n- Ceftriaxone: good gram-negative coverage, low cross-reactivity\n- Avoid fluoroquinolones empirically (20-30% E. coli resistance, and she's had previous courses)\n- If true anaphylaxis history \u2192 aztreonam + metronidazole (no beta-lactam)\n\nFLUOROQUINOLONE NOTE: Even though her prior UTIs responded to ciprofloxacin, resistance develops with repeated exposure. Community E. coli resistance to fluoroquinolones is 20-30% in many US markets \u2014 DO NOT use empirically in sepsis.",
          "assessment": "Urosepsis \u2014 sepsis criteria met. Ceftriaxone empirically (PCN allergy low-risk). IVF resuscitation. Blood and urine cultures before antibiotics. Admit floor vs ICU based on fluid response.",
          "plan": "Blood cultures x2 NOW. Urine culture NOW. Ceftriaxone 2g IV (observe for allergy x30 min). NS 2L bolus. Lactate. BMP \u2014 renal function. Hold metformin. Insulin sliding scale. Urology consult if obstructive pyelonephritis (stone/abscess) \u2014 CT abdomen/pelvis if not improving or septic shock. Admit medicine floor. De-escalate to PO when: afebrile x24h, BP normalized, improving, PO tolerating, sensitivities confirmed."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "16:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-448812",
          "collected": "03/15/2026 16:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood and Urine",
          "groups": [
            {
              "name": "CBC AND METABOLIC",
              "results": [
                {
                  "test": "WBC",
                  "value": "22.4",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Bands",
                  "value": "14%",
                  "unit": "",
                  "range": "0-6%",
                  "flag": "H"
                },
                {
                  "test": "Creatinine",
                  "value": "1.6",
                  "unit": "mg/dL",
                  "range": "0.6-1.1 (baseline 0.9)",
                  "flag": "H"
                },
                {
                  "test": "Lactate",
                  "value": "2.8",
                  "unit": "mmol/L",
                  "range": "0.5-2.0",
                  "flag": "H"
                },
                {
                  "test": "Glucose",
                  "value": "298",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "URINALYSIS",
              "results": [
                {
                  "test": "WBCs",
                  "value": ">100/hpf",
                  "unit": "",
                  "range": "<5",
                  "flag": "H"
                },
                {
                  "test": "WBC casts",
                  "value": "Present \u2014 pyelonephritis",
                  "unit": "",
                  "range": "Absent",
                  "flag": "H"
                },
                {
                  "test": "Bacteria",
                  "value": "Many gram-negative rods",
                  "unit": "",
                  "range": "None",
                  "flag": "H"
                },
                {
                  "test": "Nitrite",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                },
                {
                  "test": "Leukocyte esterase",
                  "value": "4+",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "CULTURES (PENDING)",
              "results": [
                {
                  "test": "Urine culture",
                  "value": "Pending 24-48h \u2014 collected before antibiotics",
                  "unit": "",
                  "range": "No growth",
                  "flag": ""
                },
                {
                  "test": "Blood culture x2",
                  "value": "Pending 24-48h \u2014 collected before antibiotics",
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
          "type": "CT Abdomen/Pelvis Without Contrast",
          "date": "03/15/2026",
          "time": "16:45",
          "orderedBy": "Dr. Attending",
          "findings": "Right kidney: wedge-shaped hypoenhancement upper pole consistent with pyelonephritis. No abscess. No hydronephrosis. No obstructing stone. Left kidney normal. No free air.",
          "impression": "Right pyelonephritis without abscess or obstruction. No urologic intervention needed.",
          "critical": false
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 2 urosepsis \u2014 E. coli bacteremia confirmed (ESBL negative) \u2014 ceftriaxone appropriate \u2014 improving",
        "diagnosis": "Urosepsis \u2014 E. coli Bacteremia \u2014 Ceftriaxone \u2014 Day 2"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Urosepsis resolving \u2014 E. coli bacteremia (blood culture +1/2 bottles). ESBL negative. Susceptible to ceftriaxone, ciprofloxacin, nitrofurantoin, trimethoprim-sulfamethoxazole (TMP-SMX is an option despite sulfa allergy? \u2014 No, SMX is a sulfonamide \u2014 documented allergy precludes use). Nitrofurantoin: PO option but NOT for pyelonephritis (poor tissue penetration \u2014 urine levels only). CIPROFLOXACIN: susceptible \u2014 OK for PO step-down.",
          "status": "Improving",
          "onset": "Acute",
          "icd10": "N10"
        },
        {
          "id": "prob-2",
          "description": "PO step-down plan: when afebrile x24h + tolerating PO \u2192 ciprofloxacin 500mg BID PO x7 days total (IV + PO combined). Total duration 7-14 days for pyelonephritis/bacteremia.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "N10"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Ceftriaxone \u2192 Ciprofloxacin",
          "dose": "2g IV \u2192 500mg PO",
          "route": "IV \u2192 PO transition",
          "frequency": "De-escalate when tolerating PO and afebrile x24h. Culture confirms ciprofloxacin susceptibility \u2014 safe to use despite prior courses.",
          "status": "Active \u2014 transitioning",
          "prescriber": "Dr. Medicine Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/16/2026",
          "time": "08:00",
          "bp": "118/74",
          "hr": "88",
          "rr": "18",
          "temp": "37.4\u00b0C",
          "spo2": "97%",
          "pain": "2/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Medicine Progress Note",
          "date": "03/16/2026",
          "provider": "Dr. Medicine Attending",
          "cc": "Day 2 urosepsis \u2014 improving, culture-directed de-escalation",
          "hpi": "Excellent improvement. Afebrile since midnight. BP normalized. E. coli in blood culture \u2014 ESBL negative, susceptible to ciprofloxacin. Plan: transition to oral ciprofloxacin 500mg BID today when tolerating PO. Total antibiotic course 14 days (bacteremia + pyelonephritis).\n\nDE-ESCALATION PRINCIPLES:\n- Always narrow antibiotic spectrum when culture available\n- IV-to-PO transition: appropriate when afebrile, hemodynamically stable, tolerating PO, no concern for poor GI absorption\n- Duration: 7 days for uncomplicated pyelonephritis; 14 days for bacteremia\n- Nitrofurantoin: NOT for pyelonephritis \u2014 only urinary tissue levels, inadequate for systemic/renal parenchymal infection",
          "assessment": "Urosepsis resolving. De-escalate to PO ciprofloxacin. Restart metformin when Cr normalized and PO tolerating.",
          "plan": "Ciprofloxacin 500mg BID PO x12 more days (total 14d). Discharge tomorrow if sustained improvement. Restart metformin when Cr \u22641.0 (baseline 0.9 expected recovery). Blood sugar control \u2014 insulin at discharge until Cr normalizes. Urology follow-up: any recurrent pyelonephritis needs imaging for structural abnormality. Antibiogram awareness: resistance developing, track local patterns."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. Medicine",
          "accession": "LAB-448813",
          "collected": "03/16/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CULTURE RESULTS AND TREND",
              "results": [
                {
                  "test": "Urine Culture",
                  "value": "E. coli >100,000 CFU/mL. Susceptible: ciprofloxacin, nitrofurantoin, fosfomycin. Resistant: TMP-SMX, ampicillin.",
                  "unit": "",
                  "range": "No growth",
                  "flag": "H"
                },
                {
                  "test": "Blood Culture",
                  "value": "E. coli 1/2 bottles. Susceptible: ciprofloxacin, ceftriaxone. ESBL: NEGATIVE.",
                  "unit": "",
                  "range": "No growth",
                  "flag": "H"
                },
                {
                  "test": "Creatinine",
                  "value": "1.1",
                  "unit": "mg/dL",
                  "range": "0.6-1.1 \u2014 improving",
                  "flag": ""
                },
                {
                  "test": "WBC",
                  "value": "12.4",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
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
      "id": "IDSA-UTI-2022",
      "title": "IDSA Clinical Practice Guideline for the Treatment of Acute Uncomplicated Cystitis and Pyelonephritis in Women",
      "authors": "Gupta K, Hooton TM, Naber KG, et al.",
      "journal": "Clinical Infectious Diseases",
      "year": 2011,
      "doi": "10.1093/cid/ciq257",
      "url": "https://www.idsociety.org/practice-guideline/urinary-tract-infection-uti/",
      "openAccess": true,
      "validates": [
        "Antibiotic selection for pyelonephritis",
        "Fluoroquinolone resistance rates",
        "Duration of therapy",
        "Nitrofurantoin limitation for pyelonephritis"
      ]
    },
    {
      "id": "Surviving-Sepsis-2021",
      "title": "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021",
      "authors": "Evans L, Rhodes A, Alhazzani W, et al.",
      "journal": "Critical Care Medicine",
      "year": 2021,
      "doi": "10.1097/CCM.0000000000005337",
      "url": "https://www.sccm.org/SurvivingSepsisCampaign/Guidelines/Adult-Patients",
      "openAccess": true,
      "validates": [
        "Sepsis 3 criteria",
        "1-hour bundle",
        "Fluid resuscitation",
        "Blood cultures before antibiotics"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Complicated Pyelonephritis with Bacteremia \u2014 E. coli, Diabetes, Obstructive Calculus",
    "caseId": "pyelonephritis-sepsis"
  },
  "problems": [
    {
      "problem": "Complicated pyelonephritis \u2014 bacteremia, obstruction",
      "icd": "N10",
      "onset": "2024",
      "status": "Active",
      "notes": "Fever 39.4\u00b0C, CVA tenderness, blood cultures positive E. coli \u2014 stone on imaging causing obstruction"
    },
    {
      "problem": "Obstructive uropathy \u2014 left ureteral calculus",
      "icd": "N20.1",
      "onset": "2024",
      "status": "Active",
      "notes": "8mm ureteral stone proximal ureter \u2014 obstruction \u2192 infected urine under pressure \u2192 urosepsis"
    },
    {
      "problem": "Type 2 diabetes \u2014 complicated pyelonephritis risk",
      "icd": "E11.9",
      "onset": "2018",
      "status": "Active",
      "notes": "Glycosuria provides urinary bacterial growth substrate, impaired neutrophil function"
    }
  ],
  "medications": [
    {
      "name": "Ceftriaxone 2g IV q24h \u2014 empiric coverage",
      "sig": "IV once daily \u2014 pending culture sensitivities",
      "prescriber": "ID/Urology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Metronidazole 500mg IV q8h \u2014 NOT routinely needed (gram-neg predominant)",
      "sig": "Added initially \u2014 can discontinue once sensitivities confirm gram-negative only",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Review necessity"
    },
    {
      "name": "IV NS 1L q8h \u2014 hydration",
      "sig": "IV hydration \u2014 maintain urine output >0.5 mL/kg/hr",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ketorolac 30mg IV x1 \u2014 renal colic",
      "sig": "Single dose for acute stone pain",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Given once"
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Pyelonephritis/Sepsis Panel",
      "results": [
        {
          "test": "WBC",
          "value": "22.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.8",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Blood cultures x2",
          "value": "Gram-negative rods \u2014 both bottles",
          "unit": "",
          "ref": "No growth",
          "flag": "H"
        },
        {
          "test": "UA \u2014 WBC",
          "value": ">50",
          "unit": "cells/HPF",
          "ref": "<5",
          "flag": "H"
        },
        {
          "test": "UA \u2014 bacteria",
          "value": "Many",
          "unit": "",
          "ref": "None",
          "flag": "H"
        },
        {
          "test": "Glucose",
          "value": "288",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "2.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "HbA1c",
          "value": "10.4",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Abdomen/Pelvis Without Contrast",
      "indication": "Right flank pain, fever, possible stone",
      "findings": "Left kidney: moderate hydronephrosis. Left proximal ureter: 8mm calculus causing obstruction. Perinephric fat stranding left \u2014 pyelonephritis. No subcapsular or perinephric abscess identified. Right kidney: normal.",
      "impression": "Left obstructive uropathy from ureteral calculus with pyelonephritis. No abscess. Urology consultation for urgent decompression (stent or nephrostomy) \u2014 infected obstructed system is a urological emergency."
    }
  ],
  "guided": {
    "ddxTargets": [
      "Complicated pyelonephritis \u2014 obstructed, bacteremia (correct)",
      "Uncomplicated pyelonephritis \u2014 obstruction makes this complicated, changes management",
      "Renal abscess \u2014 no abscess on CT",
      "Urosepsis without obstruction \u2014 obstruction present, changes drainage need",
      "Appendicitis \u2014 left-sided, CT shows renal pathology",
      "Ovarian cyst torsion \u2014 male patient"
    ],
    "coachPrompts": {
      "final": "Diagnosis: complicated pyelonephritis \u2014 obstructed infected kidney. Key learning: (1) Obstruction + infection = urological emergency. An infected, obstructed kidney is like an infected abscess under pressure \u2014 antibiotics alone are insufficient. The system must be decompressed (retrograde ureteral stent or percutaneous nephrostomy) within hours. This is NOT elective. (2) Signs of complicated UTI: male sex, pregnancy, diabetes, anatomic abnormality, obstruction, immunosuppression, hospital-acquired, recent instrumentation, recurrence <2 weeks. Any of these = complicated, requires IV antibiotics and urology evaluation. (3) Antibiotic duration: uncomplicated pyelonephritis = 7-14 days oral. Complicated pyelonephritis with bacteremia = IV until clinically improved + afebrile 24h, then transition to oral for 14 days total. (4) Blood culture utility: positive in 10-30% of pyelonephritis. Changes management when organism is resistant \u2014 justifies obtaining in all cases of complicated pyelonephritis and sepsis. (5) Diabetes + pyelonephritis: higher risk of emphysematous pyelonephritis (gas in renal parenchyma \u2014 CT finding), renal abscess, papillary necrosis. In diabetics, repeat imaging if not improving in 72h."
    }
  }
};
