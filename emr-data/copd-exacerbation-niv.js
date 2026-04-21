
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Earl Hutchinson",
      "patientHPI": "I've had my COPD for 20 years. For the past three days my breathing has gotten much worse and my sputum has turned yellow-green. My inhalers aren't helping at all. My wife says I'm breathing too fast.",
      "dob": "02/14/1948",
      "age": "77",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-448821",
      "language": "English",
      "race": "White",
      "phone": "(502) 555-8821",
      "email": "",
      "address": "3312 Dixie Hwy, Louisville, KY 40216",
      "insurance": "Medicare",
      "pcp": "Dr. Charles Morgan, MD",
      "pharmacy": "Walgreens \u2014 Dixie Hwy",
      "emergencyContact": {
        "name": "Lucille Hutchinson",
        "phone": "(502) 555-4411",
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
      },
      {
        "name": "Pneumovax 23",
        "date": "2021",
        "lot": "",
        "site": ""
      }
    ],
    "familyHistory": [
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Smoking",
        "60 pack-year history \u2014 quit 5 years ago"
      ],
      [
        "COPD severity",
        "GOLD Stage IV (Very Severe) \u2014 FEV1 28% predicted. On home oxygen 2L NC continuously."
      ],
      [
        "Home O2",
        "Home oxygen \u2014 2L NC \u2014 required at rest and with activity"
      ],
      [
        "Prior intubation",
        "Intubated x2 in past 5 years \u2014 discussed with wife that he does NOT want to be intubated again \u2014 HCP is wife Lucille"
      ],
      [
        "Advance directive",
        "POLST: DNI (do not intubate) \u2014 trial of NIV acceptable \u2014 DNR if NIV fails"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "77M, GOLD IV COPD, DNI \u2014 3-day purulent sputum + worsening dyspnea \u2014 pH 7.29, pCO2 72, SpO2 84% on home 2L \u2014 BiPAP initiated",
        "diagnosis": "Severe COPD Exacerbation with Acute Hypercapnic Respiratory Failure \u2014 BiPAP Initiated"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe COPD exacerbation \u2014 purulent sputum (infectious trigger most likely), worsening airflow obstruction. ABG: pH 7.29, pCO2 72, pO2 52 on 2L \u2014 acute-on-chronic hypercapnic respiratory failure.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "J44.1"
        },
        {
          "id": "prob-2",
          "description": "Acute hypercapnic respiratory failure \u2014 pH 7.29 (acidosis), pCO2 72 (CO2 retention). BiPAP indication: pH <7.35, pCO2 >45. DNI status \u2014 BiPAP is the ceiling of care.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "J96.01"
        },
        {
          "id": "prob-3",
          "description": "DNI/DNR per POLST \u2014 trial of NIV (BiPAP) acceptable. If BiPAP fails and patient declines, comfort-focused care. Palliative care consult.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "Z66"
        },
        {
          "id": "prob-4",
          "description": "Oxygen target: 88-92% SpO2. NEVER give high-flow O2 to COPD hypercapnic patient \u2014 eliminates hypoxic drive, worsens CO2 retention (Haldane effect).",
          "status": "Active",
          "onset": "Acute",
          "icd10": "J44.1"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "BiPAP",
          "dose": "IPAP 14 / EPAP 6 cmH2O",
          "route": "Non-invasive ventilation",
          "frequency": "Continuous \u2014 titrate to RR <25, pH >7.35",
          "status": "Active \u2014 initiated",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-2",
          "name": "Albuterol + Ipratropium (Duoneb)",
          "dose": "3mg/0.5mg",
          "route": "Nebulized",
          "frequency": "Q20 min x3, then Q1-2H",
          "status": "Active",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-3",
          "name": "Methylprednisolone",
          "dose": "125mg IV",
          "route": "IV",
          "frequency": "Q6H x24h, then oral prednisone 40mg daily x5 days",
          "status": "Active \u2014 systemic steroids shorten exacerbation",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-4",
          "name": "Azithromycin",
          "dose": "500mg IV",
          "route": "IV",
          "frequency": "Daily \u2014 antibiotic for infectious exacerbation (purulent sputum)",
          "status": "Active",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-5",
          "name": "Supplemental O2",
          "dose": "Titrate to SpO2 88-92%",
          "route": "Via BiPAP",
          "frequency": "Continuous \u2014 TARGET 88-92%, NOT >95%",
          "status": "Active \u2014 critical to target",
          "prescriber": "Dr. Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "21:00",
          "bp": "148/92",
          "hr": "108",
          "rr": "32",
          "temp": "37.8\u00b0C",
          "spo2": "84%",
          "pain": "3/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit \u2014 COPD Exacerbation",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Severe COPD exacerbation \u2014 acute-on-chronic hypercapnic respiratory failure \u2014 DNI \u2014 BiPAP ceiling",
          "hpi": "77M with GOLD IV COPD (FEV1 28%) presents with 3-day worsening dyspnea, productive purulent (yellow-green) sputum, and increased inhaler use without benefit. On home O2 2L NC at baseline. SpO2 84% on 2L on arrival. RR 32. Using accessory muscles. Speaking in 2-3 word phrases.\n\nGOLD CRITERIA FOR HOSPITALIZATION:\n\u2713 Severe dyspnea disproportionate to baseline\n\u2713 SpO2 <90% (or significant fall from baseline)\n\u2713 Altered mental status (later)\n\u2713 Inadequate response to initial bronchodilators\n\nBiPAP INDICATIONS IN COPD:\n\u2713 pH <7.35 (7.29)\n\u2713 pCO2 >45 (72 \u2014 acute-on-chronic)\n\u2713 RR >25 (32)\n\u2192 Start BiPAP NOW \u2014 reduces need for intubation by 50%, reduces mortality\n\nOXYGEN TARGET \u2014 CRITICAL:\n- Target SpO2 88-92% in hypercapnic COPD\n- High-flow O2 \u2192 eliminates hypoxic drive + Haldane effect (O2 displaces CO2 from hemoglobin) \u2192 worsens CO2 retention \u2192 CO2 narcosis \u2192 apnea\n- NEVER target 95-100% in hypercapnic COPD\n\nDNI STATUS: Discussed with wife (HCP/POLST). Trial of BiPAP \u2014 if pH not improving in 1-2 hours \u2192 goals-of-care discussion. Palliative care team involved.",
          "assessment": "AECOPD \u2014 severe, hypercapnic respiratory failure \u2014 BiPAP started (ceiling of care per POLST). Antibiotics (purulent sputum), steroids. O2 88-92% target. ICU bed if BiPAP successful \u2014 monitor closely.",
          "plan": "BiPAP \u2014 assess response in 1-2h (pH, RR, work of breathing). If improving \u2192 continue BiPAP, admit ICU step-down. If not improving within 2h \u2192 goals-of-care conversation (comfort-focused care, palliative sedation if needed). O2 target 88-92% \u2014 strict. Duonebs Q1-2H. Methylprednisolone IV. Azithromycin IV. Sputum culture. Blood cultures (febrile). DVT prophylaxis. Palliative care consult. Respiratory therapy."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "21:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-448821",
          "collected": "03/15/2026 21:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "ARTERIAL BLOOD GAS \u2014 ON 2L NC",
              "results": [
                {
                  "test": "pH",
                  "value": "7.29",
                  "unit": "",
                  "range": "7.35-7.45",
                  "flag": "L"
                },
                {
                  "test": "pCO2",
                  "value": "72",
                  "unit": "mmHg",
                  "range": "35-45 (chronic baseline ~55)",
                  "flag": "H"
                },
                {
                  "test": "pO2",
                  "value": "52",
                  "unit": "mmHg",
                  "range": ">60",
                  "flag": "L"
                },
                {
                  "test": "HCO3 (bicarbonate)",
                  "value": "34",
                  "unit": "mEq/L",
                  "range": "22-26 (elevated \u2014 chronic compensation)",
                  "flag": "H"
                },
                {
                  "test": "SpO2 (ABG)",
                  "value": "84%",
                  "unit": "",
                  "range": "88-92% target in COPD",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "CBC AND METABOLIC",
              "results": [
                {
                  "test": "WBC",
                  "value": "14.2",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "16.8",
                  "unit": "g/dL",
                  "range": "13.5-17.5 (polycythemia \u2014 chronic hypoxia)",
                  "flag": ""
                },
                {
                  "test": "Theophylline level",
                  "value": "Not prescribed",
                  "unit": "",
                  "range": "N/A",
                  "flag": ""
                },
                {
                  "test": "BNP",
                  "value": "480",
                  "unit": "pg/mL",
                  "range": "<100 (elevated \u2014 cor pulmonale)",
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
          "type": "Chest X-Ray Portable AP",
          "date": "03/15/2026",
          "time": "21:20",
          "orderedBy": "Dr. Attending",
          "findings": "Severe bilateral hyperinflation. Flattened diaphragms. Increased AP diameter. Increased bronchovascular markings bilateral lower lobes \u2014 possible early infiltrate vs. mucus plugging. No pneumothorax. Mild cardiomegaly. No effusion.",
          "impression": "GOLD IV COPD \u2014 severe hyperinflation. Possible right lower lobe opacity \u2014 cannot fully exclude pneumonia, though AECOPD without consolidation is more typical.",
          "critical": false
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 2 AECOPD \u2014 pH improving on BiPAP (7.29 \u2192 7.36). Transferring to floor on high-flow BiPAP protocol.",
        "diagnosis": "AECOPD \u2014 Responding to BiPAP \u2014 Transitioning Floor"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "AECOPD \u2014 responding. pH 7.29 \u2192 7.36 on BiPAP x12h. RR down from 32 to 22. Tolerating 2-4h BiPAP breaks on Venturi mask 28% (SpO2 90%).",
          "status": "Improving",
          "onset": "Acute",
          "icd10": "J44.1"
        },
        {
          "id": "prob-2",
          "description": "Goals of care \u2014 patient now alert enough to participate in discussion. Confirmed DNI. Comfortable with BiPAP as bridge. Understands prognosis: GOLD IV, each exacerbation associated with increased mortality.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "Z66"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "BiPAP",
          "dose": "IPAP 14 / EPAP 6",
          "route": "NIV",
          "frequency": "Nocturnal + during waking rest periods. Off for meals, conversation, ADLs.",
          "status": "Tapering use",
          "prescriber": "Dr. Medicine Attending"
        },
        {
          "id": "med-2",
          "name": "Prednisone",
          "dose": "40mg",
          "route": "PO",
          "frequency": "Daily x5 days (transitioned from IV)",
          "status": "Active \u2014 day 2",
          "prescriber": "Dr. Medicine Attending"
        },
        {
          "id": "med-3",
          "name": "Azithromycin",
          "dose": "500mg",
          "route": "PO",
          "frequency": "Daily x5 days total",
          "status": "Active",
          "prescriber": "Dr. Medicine Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/16/2026",
          "time": "08:00",
          "bp": "138/84",
          "hr": "92",
          "rr": "22",
          "temp": "37.4\u00b0C",
          "spo2": "91%",
          "pain": "1/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Medicine Progress Note",
          "date": "03/16/2026",
          "provider": "Dr. Medicine Attending",
          "cc": "Day 2 AECOPD \u2014 good BiPAP response \u2014 goals of care reviewed",
          "hdi": "pH improving: 7.29 \u2192 7.34 \u2192 7.36. Tolerating BiPAP breaks. SpO2 90-92% on Venturi 28% during breaks \u2014 within target. Wife present and engaged. Patient alert today \u2014 able to confirm goals of care (DNI, trial NIV acceptable \u2014 what we did was appropriate).\n\nDISCHARGE PLANNING: GOLD IV COPD \u2014 each hospitalization associated with 25% 1-year mortality. Palliative care engaged. Pulmonary rehab referral. Advance care planning documentation updated.",
          "assessment": "AECOPD \u2014 good early response to BiPAP. Steroid course continuing. Plan to discharge when: SpO2 \u226588% on home O2, tolerating oral medications, dyspnea at or near baseline, RR <25 at rest.",
          "plan": "Continue BiPAP nocturnal. Wean oral steroids per schedule. Complete azithromycin. Pulmonary follow-up. Update advance directive \u2014 ensure POLST in EMR and sent home with patient. Palliative care follow-up after discharge. Home health \u2014 respiratory therapist for BiPAP optimization. Influenza + pneumococcal vaccines current. COPD action plan (written) given to patient + wife."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. Medicine Attending",
          "accession": "LAB-448822",
          "collected": "03/16/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "ABG \u2014 DAY 2 ON BIPAP",
              "results": [
                {
                  "test": "pH",
                  "value": "7.36",
                  "unit": "",
                  "range": "7.35-7.45",
                  "flag": ""
                },
                {
                  "test": "pCO2",
                  "value": "61",
                  "unit": "mmHg",
                  "range": "Chronic baseline ~55 \u2014 improving",
                  "flag": "H"
                },
                {
                  "test": "pO2",
                  "value": "68",
                  "unit": "mmHg",
                  "range": "55-80 target in COPD",
                  "flag": ""
                },
                {
                  "test": "SpO2",
                  "value": "91%",
                  "unit": "",
                  "range": "88-92% target \u2014 APPROPRIATE",
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
      "id": "GOLD-2024",
      "title": "Global Strategy for Prevention, Diagnosis and Management of COPD \u2014 2024 Report",
      "authors": "Global Initiative for Chronic Obstructive Lung Disease",
      "journal": "GOLD Guidelines",
      "year": 2024,
      "doi": "",
      "url": "https://goldcopd.org/2024-gold-report/",
      "openAccess": true,
      "validates": [
        "BiPAP indications (pH <7.35, pCO2 >45)",
        "O2 target 88-92%",
        "Antibiotic and steroid use in exacerbations",
        "Discharge criteria"
      ]
    },
    {
      "id": "StatPearls-COPD",
      "title": "Chronic Obstructive Pulmonary Disease (COPD)",
      "authors": "Mirza S, Clay RD, Koslow MA, Scanlon PD",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK559281/",
      "openAccess": true,
      "validates": [
        "Haldane effect",
        "Hypoxic drive in COPD",
        "NIV vs intubation outcomes"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Acute COPD Exacerbation \u2014 Hypercapnic Respiratory Failure, NIV Indicated",
    "caseId": "copd-exacerbation-niv"
  },
  "problems": [
    {
      "problem": "Acute COPD exacerbation \u2014 hypercapnic respiratory failure",
      "icd": "J44.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Frank Morrison, 68M \u2014 GOLD stage III COPD, 60-pack-year smoking. Acute dyspnea, pursed-lip breathing, accessory muscle use, SpO2 84%, pH 7.28, pCO2 68mmHg. Type 2 respiratory failure."
    },
    {
      "problem": "Hypercapnia \u2014 BiPAP/NIV indicated",
      "icd": "J44.1",
      "onset": "2024",
      "status": "Active",
      "notes": "pH 7.28, pCO2 68. NIV (BiPAP) is indicated for acute COPD with pH <7.35 and pCO2 >45. Reduces intubation rate, ICU admission, and mortality."
    },
    {
      "problem": "Infection precipitant \u2014 antibiotic coverage",
      "icd": "J44.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Purulent sputum, fever 38.2\u00b0C. Bacterial infection is the most common precipitant of AECOPD. Azithromycin + amoxicillin-clavulanate coverage."
    }
  ],
  "medications": [
    {
      "name": "BiPAP (IPAP 14/EPAP 6) \u2014 non-invasive ventilation",
      "sig": "NIV first-line for AECOPD with pH <7.35 and pCO2 >45. Reduces intubation by 50%, ICU admission, and mortality. Target pH >7.35 within 1-2 hours.",
      "prescriber": "Pulmonology/Critical Care",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "Salbutamol + ipratropium nebulized q20min x 3 then q4h",
      "sig": "Combined SABA + SAMA bronchodilation. Back-to-back during exacerbation.",
      "prescriber": "Pulmonology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Prednisone 40mg daily x 5 days + azithromycin 500mg daily x 5 days",
      "sig": "Systemic steroids reduce treatment failure and shorten hospitalization. Antibiotics for AECOPD with purulent sputum or fever (Anthonisen criteria).",
      "prescriber": "Pulmonology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "AECOPD/Respiratory Failure",
      "results": [
        {
          "test": "ABG \u2014 pH",
          "value": "7.28",
          "unit": "",
          "ref": "7.35-7.45",
          "flag": "L"
        },
        {
          "test": "ABG \u2014 pCO2",
          "value": "68",
          "unit": "mmHg",
          "ref": "35-45",
          "flag": "H"
        },
        {
          "test": "ABG \u2014 pO2",
          "value": "52",
          "unit": "mmHg",
          "ref": "\u226580",
          "flag": "L"
        },
        {
          "test": "SpO2 on 2L NC",
          "value": "88",
          "unit": "%",
          "ref": "88-92% target in COPD",
          "flag": ""
        },
        {
          "test": "WBC",
          "value": "14.6",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Chest X-Ray",
      "findings": "Hyperinflation, flattened diaphragms, increased AP diameter \u2014 chronic COPD changes. Right lower lobe infiltrate. No pneumothorax. No pleural effusion.",
      "impression": "Chronic COPD with acute RLL infiltrate \u2014 AECOPD with infectious precipitant."
    }
  ],
  "guided": {
    "ddxTargets": [
      "AECOPD with hypercapnic failure \u2014 NIV indicated (correct)",
      "Acute severe asthma \u2014 younger; no smoking history; different spirometry; responds better to bronchodilators",
      "Pneumothorax \u2014 sudden onset; absent breath sounds; CXR confirms; decompress immediately",
      "Congestive heart failure \u2014 BNP elevated; bilateral infiltrates; orthopnea; different pattern",
      "PE \u2014 acute pleuritic pain; hypoxia out of proportion; CTA PE"
    ],
    "coachPrompts": {
      "final": "Diagnosis: AECOPD with hypercapnic respiratory failure \u2014 NIV indicated. Key learning: (1) NIV indications in AECOPD: pH <7.35 with pCO2 >45 = NIV indicated. NIV reduces intubation rate by 50%, reduces ICU admission, reduces mortality. The most important intervention after bronchodilators. (2) Oxygen target in COPD: 88-92% SpO2 (NOT 95-100%). Excessive oxygen in COPD can worsen hypercapnia via Haldane effect (oxyhemoglobin release of CO2) and loss of hypoxic drive. Titrate O2 carefully \u2014 target SpO2 88-92%. (3) NIV failure criteria \u2192 intubate: pH worsening after 1-2 hours of NIV, cannot protect airway, copious secretions, hemodynamic instability. If NIV fails \u2192 intubate immediately. (4) Steroids in AECOPD: prednisone 40mg x 5 days = equivalent to longer courses (REDUCE trial). Reduces treatment failure and length of stay. (5) Antibiotics in AECOPD: Anthonisen criteria \u2014 purulent sputum + increased dyspnea + increased sputum volume = all three present = antibiotics reduce mortality. One criterion alone = less clear benefit. Coverage: azithromycin or amoxicillin-clavulanate for outpatient/mild; fluoroquinolone for hospitalized."
    }
  }
};
