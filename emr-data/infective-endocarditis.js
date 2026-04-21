/* emr-data/infective-endocarditis.js
   Infective Endocarditis — IVDU-Associated
   Category: infectious | Acuity: ESI-2
   Settings: ED, Floor, ICU
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Darius Monroe",
      "patientHPI": "I've had fevers for three weeks and I'm so tired I can barely get off the couch. My joints hurt everywhere. I also noticed little red spots under my fingernails.",
      "dob": "11/22/1993",
      "age": "31",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-339871",
      "language": "English",
      "race": "Black/African American",
      "phone": "(617) 555-9871",
      "email": "d.monroe@email.com",
      "address": "88 Washington St, Dorchester, MA 02121",
      "insurance": "Medicaid",
      "pcp": "None",
      "pharmacy": "CVS — Washington St",
      "emergencyContact": {
        "name": "Sandra Monroe",
        "phone": "(617) 555-4422",
        "relationship": "Mother"
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
        "name": "Unknown — no records",
        "date": "",
        "lot": "",
        "site": ""
      }
    ],
    "familyHistory": [
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Substance use",
        "Intravenous heroin use x4 years — sharing needles. Last use yesterday."
      ],
      [
        "Housing",
        "Unstable — staying with mother intermittently"
      ],
      [
        "Smoking",
        "1 PPD x8 years"
      ],
      [
        "Alcohol",
        "Heavy — 6-8 drinks/day"
      ],
      [
        "Dental",
        "No dental care in 5+ years — multiple caries"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "31M IVDU — 3 weeks fever, fatigue, splinter hemorrhages, new murmur, tricuspid regurgitation on echo — IE until proven otherwise",
        "diagnosis": "Infective Endocarditis — Tricuspid Valve — S. aureus (MSSA) — IVDU-Associated"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Infective endocarditis — tricuspid valve vegetation on echo. Modified Duke criteria: 2 major + 2 minor = DEFINITE IE. S. aureus bacteremia (blood cultures), tricuspid vegetation.",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "I33.0"
        },
        {
          "id": "prob-2",
          "description": "Septic pulmonary emboli — bilateral nodular infiltrates on CT chest — IV drug use → right-sided IE → septic emboli to lungs",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "I26.90"
        },
        {
          "id": "prob-3",
          "description": "S. aureus bacteremia — high-grade bacteremia. MSSA. Requires 6 weeks IV antibiotics (nafcillin). TEE to characterize vegetation size and complications.",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "A41.01"
        },
        {
          "id": "prob-4",
          "description": "Opioid use disorder — IV heroin. Must offer MOUD (buprenorphine) during hospitalization. Discharge without MOUD = missed opportunity.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "F11.20"
        },
        {
          "id": "prob-5",
          "description": "HIV/HCV/HBV screening — IVDU with needle sharing — at high risk. Order HIV Ab, HCV Ab, HBsAg/HBsAb.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "Z71.7"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Vancomycin",
          "dose": "25-30 mg/kg IV loading",
          "route": "IV",
          "frequency": "Q8-12H — empiric pending cultures",
          "status": "Active — to be de-escalated to nafcillin when MSSA confirmed",
          "prescriber": "Dr. ID Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "15:00",
          "bp": "108/68",
          "hr": "118",
          "rr": "22",
          "temp": "39.1°C",
          "spo2": "94%",
          "pain": "5/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "3 weeks fever in IVDU — new murmur, splinter hemorrhages, septic pulmonary emboli — IE",
          "hpi": "31M with IV heroin use presents with 3-week history of daily fevers (Tmax 39.4°C at home), profound fatigue, diffuse arthralgias, and anorexia. He noticed splinter hemorrhages (linear red-brown streaks) under several fingernails one week ago but did not seek care. His mother noted he had a cough and brought him in. Exam notable for: new harsh systolic murmur (tricuspid regurgitation), track marks bilateral antecubital fossae, splinter hemorrhages x4 fingers, one Janeway lesion (left palm), Osler's nodes (tender nodules left index fingertip).\n\nMODIFIED DUKE CRITERIA:\nMAJOR CRITERIA:\n✓ Persistent S. aureus bacteremia (blood cultures x2 positive)\n✓ Echocardiographic evidence: tricuspid valve vegetation\n\nMINOR CRITERIA:\n✓ IVDU (predisposing condition)\n✓ Fever >38°C\n✓ Vascular phenomena: septic pulmonary emboli, Janeway lesion\n✓ Immunologic phenomena: Osler nodes\n→ 2 MAJOR = DEFINITE ENDOCARDITIS\n\nRIGHT-SIDED vs LEFT-SIDED IE:\n- Right-sided (tricuspid) → septic PULMONARY emboli (cavitating nodules on CXR/CT)\n- Left-sided (mitral/aortic) → systemic emboli (stroke, splenic infarct, renal infarct)\n- IVDU strongly associated with right-sided IE",
          "assessment": "Definite IE by Duke criteria. MSSA bacteremia. Tricuspid vegetation. Septic pulmonary emboli. Start nafcillin once MSSA confirmed (superior to vancomycin for MSSA). TEE for vegetation characterization. Cardiac surgery consult (large vegetation — surgery may be needed). ID consult. Addiction medicine for buprenorphine.",
          "plan": "Blood cultures x4 (already drawn — positive x2). STAT TTE (transthoracic echo) → TEE (transesophageal — better sensitivity for vegetations). CT chest — septic emboli characterization. Nafcillin 2g IV Q4H when MSSA confirmed (de-escalate from vancomycin). 6-week total IV antibiotics. Cardiac surgery consult for vegetation >10mm or valvular destruction. HIV/HCV/HBV testing. Buprenorphine induction — addiction medicine consult. Social work for housing and SUD treatment planning. Daily blood cultures until bacteremia clears."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "15:20",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-339871",
          "collected": "03/15/2026 15:15",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC AND INFLAMMATORY",
              "results": [
                {
                  "test": "WBC",
                  "value": "22.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Neutrophils",
                  "value": "92%",
                  "unit": "",
                  "range": "45-75%",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "9.2",
                  "unit": "g/dL",
                  "range": "13.5-17.5",
                  "flag": "L"
                },
                {
                  "test": "CRP",
                  "value": "288",
                  "unit": "mg/L",
                  "range": "<10",
                  "flag": "H"
                },
                {
                  "test": "ESR",
                  "value": "112",
                  "unit": "mm/hr",
                  "range": "<20",
                  "flag": "H"
                },
                {
                  "test": "Procalcitonin",
                  "value": "4.8",
                  "unit": "ng/mL",
                  "range": "<0.25",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "BLOOD CULTURES x4",
              "results": [
                {
                  "test": "Blood Culture Set 1",
                  "value": "S. aureus — MSSA (4/4 bottles positive)",
                  "unit": "",
                  "range": "No growth",
                  "flag": "H"
                },
                {
                  "test": "Beta-lactamase",
                  "value": "Negative — MSSA confirmed",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Oxacillin MIC",
                  "value": "≤2 mcg/mL — susceptible",
                  "unit": "",
                  "range": "Susceptible",
                  "flag": ""
                }
              ]
            },
            {
              "name": "INFECTIOUS DISEASE SCREENING",
              "results": [
                {
                  "test": "HIV-1/2 Ag/Ab Combo",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "HCV Antibody",
                  "value": "POSITIVE — reactive",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                },
                {
                  "test": "HCV RNA (viral load)",
                  "value": "2,400,000",
                  "unit": "IU/mL",
                  "range": "Undetectable",
                  "flag": "H"
                },
                {
                  "test": "HBsAg",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "HBsAb",
                  "value": "Negative — not immune",
                  "unit": "",
                  "range": "Positive if immune",
                  "flag": "L"
                },
                {
                  "test": "RPR",
                  "value": "Reactive — titer 1:8",
                  "unit": "",
                  "range": "Non-reactive",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "RENAL AND METABOLIC",
              "results": [
                {
                  "test": "Creatinine",
                  "value": "1.6",
                  "unit": "mg/dL",
                  "range": "0.7-1.3",
                  "flag": "H"
                },
                {
                  "test": "eGFR",
                  "value": "48",
                  "unit": "mL/min/1.73m²",
                  "range": ">60",
                  "flag": "L"
                },
                {
                  "test": "AST",
                  "value": "68",
                  "unit": "U/L",
                  "range": "10-40",
                  "flag": "H"
                },
                {
                  "test": "ALT",
                  "value": "88",
                  "unit": "U/L",
                  "range": "7-56",
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
          "type": "Transthoracic Echocardiogram (TTE)",
          "date": "03/15/2026",
          "time": "17:00",
          "orderedBy": "Dr. Attending",
          "findings": "Tricuspid valve: mobile echogenic mass (vegetation) on anterior leaflet, measuring 1.4 × 0.9 cm. Moderate tricuspid regurgitation. Right ventricular function mildly reduced. No pericardial effusion. Mitral and aortic valves normal in appearance. TEE recommended for full characterization.",
          "impression": "Tricuspid valve vegetation 1.4 cm — consistent with infective endocarditis. TEE needed for full characterization and to evaluate for abscess/perforation.",
          "critical": true
        },
        {
          "id": "img-2",
          "type": "CT Chest Without Contrast",
          "date": "03/15/2026",
          "time": "16:30",
          "orderedBy": "Dr. Attending",
          "findings": "Multiple bilateral peripheral nodular opacities, several with central cavitation. Bilateral small pleural effusions. No pneumothorax.",
          "impression": "Multiple cavitating pulmonary nodules — consistent with septic pulmonary emboli from right-sided endocarditis. Classic finding in tricuspid IE.",
          "critical": false
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 5 MSSA IE — nafcillin day 4 — bacteremia clearing — buprenorphine started",
        "diagnosis": "MSSA Tricuspid Endocarditis — Day 5 Nafcillin — Buprenorphine Initiated"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MSSA IE tricuspid valve — nafcillin day 4 (de-escalated from vancomycin). Blood cultures day 3 clearing (1/2 bottles positive → today negative x24h). TEE: vegetation 1.4cm, no abscess, no perforation — surgical management deferred unless vegetation grows or hemodynamics worsen.",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "I33.0"
        },
        {
          "id": "prob-2",
          "description": "Opioid use disorder — buprenorphine-naloxone 8/2mg initiated. Patient motivated. Addiction medicine following.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "F11.20"
        },
        {
          "id": "prob-3",
          "description": "HCV — active infection. HCV treatment deferred until IE completed — will start DAA after 6-week nafcillin course.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "B18.2"
        },
        {
          "id": "prob-4",
          "description": "Syphilis (RPR 1:8) — Benzathine penicillin G 2.4M units IM x3 doses initiated for latent syphilis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "A53.9"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Nafcillin",
          "dose": "2g IV",
          "route": "IV",
          "frequency": "Q4H — 6-week total course. Day 4.",
          "status": "Active",
          "prescriber": "Dr. ID Attending"
        },
        {
          "id": "med-2",
          "name": "Buprenorphine-naloxone (Suboxone)",
          "dose": "8/2mg",
          "route": "Sublingual",
          "frequency": "Daily — titrating up",
          "status": "Active",
          "prescriber": "Dr. Addiction Medicine"
        },
        {
          "id": "med-3",
          "name": "Benzathine Penicillin G",
          "dose": "2.4M units IM",
          "route": "IM",
          "frequency": "Weekly x3 doses (latent syphilis treatment)",
          "status": "Active",
          "prescriber": "Dr. ID Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/19/2026",
          "time": "08:00",
          "bp": "114/74",
          "hr": "94",
          "rr": "18",
          "temp": "37.8°C",
          "spo2": "96%",
          "pain": "2/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "ID Progress Note",
          "date": "03/19/2026",
          "provider": "Dr. ID Attending",
          "cc": "Day 5 MSSA IE — improving, bacteremia clearing",
          "hpi": "Significant clinical improvement. Fever curves trending down (38.6 → 38.2 → 37.8). Blood cultures: positive x2 on admission, positive x1 on day 3, NEGATIVE on day 4 and 5. WBC trending down. Nafcillin well-tolerated. Hepatotoxicity monitoring (LFTs Q3 days on nafcillin — can cause cholestatic hepatitis).\n\nOUTPATIENT IV ANTIBIOTICS PLAN: Patient engaged in treatment. Social work arranging PICC line and home infusion through OPAT (outpatient parenteral antibiotic therapy) program given housing instability. Infectious disease close follow-up.\n\nKEY TEACHING: NEVER discharge IE before bacteremia clears (usually 5-7 days). After 2 negative blood cultures x24h apart AND clinical improvement → plan PICC and OPAT for remainder of 6-week course.",
          "assessment": "MSSA IE improving. Bacteremia clearing. On track for PICC and OPAT program to complete 6-week course. Buprenorphine initiated — best practice for MOUD during IE hospitalization.",
          "plan": "Continue nafcillin via PICC (place before discharge). OPAT with ID close follow-up weekly. Daily blood cultures until 2 consecutive negatives. LFTs Q3d (nafcillin hepatotoxicity). Repeat TTE at 4 weeks. Buprenorphine outpatient follow-up. HCV treatment referral after nafcillin completed. HBV vaccine series. Syphilis treatment completing. Harm reduction counseling — clean needles, fentanyl test strips."
        }
      ],
      "labs": [
        {
          "date": "03/19/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. ID Attending",
          "accession": "LAB-339872",
          "collected": "03/19/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "TREND — INFLAMMATORY AND CULTURE",
              "results": [
                {
                  "test": "WBC",
                  "value": "14.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "CRP",
                  "value": "122",
                  "unit": "mg/L",
                  "range": "<10",
                  "flag": "H"
                },
                {
                  "test": "Blood Culture Day 5",
                  "value": "No growth x48h",
                  "unit": "",
                  "range": "No growth",
                  "flag": ""
                }
              ]
            },
            {
              "name": "NAFCILLIN MONITORING",
              "results": [
                {
                  "test": "AST",
                  "value": "58",
                  "unit": "U/L",
                  "range": "10-40",
                  "flag": "H"
                },
                {
                  "test": "ALT",
                  "value": "72",
                  "unit": "U/L",
                  "range": "7-56",
                  "flag": "H"
                },
                {
                  "test": "Alkaline Phosphatase",
                  "value": "142",
                  "unit": "U/L",
                  "range": "44-147",
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
      "id": "StatPearls-IE",
      "title": "Bacterial Endocarditis",
      "authors": "Rajani R, Klein JL",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK557641/",
      "openAccess": true,
      "validates": [
        "Duke criteria",
        "Blood culture requirements",
        "Antibiotic duration (6 weeks)",
        "Nafcillin for MSSA",
        "IVDU-associated right-sided IE",
        "Surgical indications"
      ]
    },
    {
      "id": "AHA-IE-2023",
      "title": "2023 AHA/ACC Guideline for the Diagnosis and Management of Infective Endocarditis",
      "authors": "Fowler VG, Durack DT, Selton-Suty C, et al.",
      "journal": "Circulation",
      "year": 2023,
      "doi": "10.1161/CIR.0000000000001098",
      "url": "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001098",
      "openAccess": true,
      "validates": [
        "Modified Duke criteria",
        "Echocardiography recommendations",
        "Antibiotic selection",
        "Surgical indications"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Tricuspid Valve Infective Endocarditis (MSSA) — IVDU-Associated",
    "caseId": "infective-endocarditis"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: tricuspid valve infective endocarditis (IE) due to methicillin-sensitive Staphylococcus aureus (MSSA), IVDU-associated. Key learning: (1) Infective endocarditis diagnosis uses the Modified Duke Criteria. Major criteria: (a) positive blood cultures with typical organism (Staph aureus, viridans strep, HACEK, enterococci from community acquisition without primary focus) in 2 separate draws, OR persistent bacteremia; (b) evidence of endocardial involvement — vegetation, abscess, or new valvular regurgitation on echo. Minor criteria: predisposing condition (IVDU, prosthetic valve, structural heart disease), fever over 38, vascular phenomena (septic emboli, Janeway lesions, mycotic aneurysm, intracranial hemorrhage), immunologic phenomena (Osler nodes, Roth spots, glomerulonephritis, rheumatoid factor), and microbiologic evidence not meeting major criteria. Definite IE = 2 major, 1 major + 3 minor, or 5 minor. (2) Blood culture strategy is essential: 3 sets from separate sites, spaced over 1 hour if hemodynamically stable (longer if possible to demonstrate persistence), BEFORE antibiotics when feasible. Culture-negative IE (5-10% of cases) suggests prior antibiotics, HACEK, Bartonella, Coxiella (Q fever), Brucella, fungi, or Tropheryma whipplei — send special serologies and consult infectious disease. (3) Echocardiography is required. Transthoracic echo (TTE) is first-line with good specificity but sensitivity only ~60% for native valve IE and ~30% for prosthetic valve IE; it is usually adequate for tricuspid IE in IVDU. Transesophageal echo (TEE) is indicated when TTE is negative but suspicion remains high, for prosthetic valves, for suspected paravalvular abscess or complications, and for pre-operative planning. (4) Treatment is long-course IV antibiotics, typically 4-6 weeks, chosen by organism and valve. Right-sided MSSA IE in IVDU with uncomplicated disease can sometimes be treated with 2 weeks of combination therapy (cefazolin or nafcillin/oxacillin plus gentamicin), but most contemporary guidelines favor 4-6 weeks. Left-sided IE always requires 4-6 weeks. Surgery indications: heart failure from valve dysfunction, uncontrolled infection despite appropriate antibiotics, persistent bacteremia beyond 5-7 days of therapy, abscess or fistula formation, large vegetations (over 10 mm) with embolic events, prosthetic valve dehiscence, and fungal or highly resistant organisms. Consult cardiac surgery early for complicated cases. (5) Classic pitfalls: (a) starting empiric antibiotics before adequate blood cultures are drawn, leading to culture-negative IE and uncertain diagnosis. (b) Undertreating IVDU patients because of stigma — IE in this population deserves the same aggressive workup, surgical consultation, and ID input as any other patient. (c) Missing septic pulmonary emboli (multiple peripheral nodules and cavities on chest CT) in right-sided IE. (d) Failing to offer addiction medicine consultation, medications for opioid use disorder (MOUD: buprenorphine or methadone), hepatitis C screening and treatment, HIV screening, and harm reduction counseling — the highest mortality in this population is from recurrent IE or overdose after discharge, not the index infection."
    }
  }
};
