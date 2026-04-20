
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Patrick Sullivan",
      "patientHPI": "I've been drinking a fifth of whiskey every day for the past 6 years and I haven't had a drink in 18 hours. My hands won't stop shaking and I'm sweating through my clothes. I feel like bugs are crawling on my skin.",
      "dob": "04/22/1971",
      "age": "54",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-882341",
      "language": "English",
      "race": "White",
      "phone": "(312) 555-2341",
      "email": "p.sullivan@email.com",
      "address": "2244 N. Clark St, Chicago, IL 60614",
      "insurance": "Medicaid",
      "pcp": "None \u2014 no PCP",
      "pharmacy": "Walgreens \u2014 Clark St",
      "emergencyContact": {
        "name": "Mary Sullivan",
        "phone": "(312) 555-8877",
        "relationship": "Sister"
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
        "name": "Unknown \u2014 no records available",
        "date": "",
        "lot": "",
        "site": ""
      }
    ],
    "familyHistory": [
      "Father: alcohol use disorder, died of liver failure",
      "Brother: alcohol use disorder"
    ],
    "socialHistory": [
      [
        "Alcohol",
        "Daily fifth (750mL) of whiskey x6 years \u2014 drinks from morning to prevent withdrawal"
      ],
      [
        "Housing",
        "Marginally housed \u2014 stays with sister intermittently"
      ],
      [
        "Smoking",
        "1 PPD x30 years"
      ],
      [
        "Other substances",
        "Denies illicit drugs"
      ],
      [
        "Prior withdrawal",
        "2 prior hospitalizations for alcohol withdrawal \u2014 one with seizure 2 years ago"
      ],
      [
        "Work",
        "Unemployed \u2014 disability"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "54M, daily fifth x6yr, LDA 18h \u2014 tremor, diaphoresis, formication, CIWA-Ar 22 \u2014 high risk for DTs given prior withdrawal seizure",
        "diagnosis": "Severe Alcohol Withdrawal \u2014 CIWA-Ar 22 \u2014 High Risk for Delirium Tremens"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe alcohol withdrawal \u2014 CIWA-Ar 22. High risk for DTs: prior withdrawal seizure, daily heavy use, 18h since last drink. Admit for benzodiazepine taper.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "F10.230"
        },
        {
          "id": "prob-2",
          "description": "Prior alcohol withdrawal seizure \u2014 significantly increases risk for current seizure and DTs",
          "status": "Active",
          "onset": "History",
          "icd10": "F10.231"
        },
        {
          "id": "prob-3",
          "description": "Wernicke encephalopathy prevention \u2014 thiamine 500mg IV x3 days BEFORE any glucose administration (high-dose thiamine prevents Wernicke in at-risk patients)",
          "status": "At Risk",
          "onset": "Acute",
          "icd10": "E51.2"
        },
        {
          "id": "prob-4",
          "description": "Hypomagnesemia \u2014 common in alcohol use disorder, lowers seizure threshold, must be repleted",
          "status": "Active",
          "onset": "Acute",
          "icd10": "E83.42"
        },
        {
          "id": "prob-5",
          "description": "Alcohol use disorder \u2014 severe. Counsel on MAT (naltrexone, acamprosate, disulfiram) at discharge.",
          "status": "Chronic",
          "onset": "Chronic",
          "icd10": "F10.20"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Thiamine",
          "dose": "500mg IV",
          "route": "IV",
          "frequency": "Q8H x3 days \u2014 BEFORE GLUCOSE. Prevents Wernicke.",
          "status": "Start NOW",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-2",
          "name": "Diazepam",
          "dose": "10-20mg PO/IV",
          "route": "PO/IV",
          "frequency": "PRN CIWA-Ar \u22658 \u2014 symptom-triggered protocol",
          "status": "Active",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-3",
          "name": "Folic Acid",
          "dose": "1mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-4",
          "name": "Magnesium Sulfate",
          "dose": "2g IV",
          "route": "IV",
          "frequency": "Over 2h \u2014 repletes Mg2+, raises seizure threshold",
          "status": "Active",
          "prescriber": "Dr. Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "14:00",
          "bp": "168/102",
          "hr": "118",
          "rr": "20",
          "temp": "38.1\u00b0C",
          "spo2": "97%",
          "pain": "4/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Severe alcohol withdrawal CIWA-Ar 22 \u2014 formication, tremor, tachycardia, prior withdrawal seizure",
          "hpi": "54M with severe alcohol use disorder (daily fifth x6 years) presents 18 hours after last drink with tremor, diaphoresis, anxiety, nausea, and formication (tactile hallucinations \u2014 feels like insects crawling on skin). He has a prior history of alcohol withdrawal seizure 2 years ago requiring hospitalization. His sister brought him in when she found him shaking violently.\n\nCIWA-Ar ASSESSMENT (scored 22 \u2014 severe):\n- Nausea/vomiting: 4\n- Tremor: 4\n- Paroxysmal sweats: 3\n- Anxiety: 3\n- Agitation: 2\n- Tactile disturbances (formication): 3\n- Visual disturbances: 1\n- Auditory disturbances: 1\n- Headache: 1\n- Orientation: 0\nTOTAL: 22 \u2014 SEVERE (>20 = high risk for DTs)\n\nTIMELINE OF ALCOHOL WITHDRAWAL:\n- 6-24h: Minor withdrawal (tremor, anxiety, nausea, diaphoresis) \u2014 now\n- 24-48h: Alcohol withdrawal seizures (tonic-clonic) \u2014 PREVENT with benzos\n- 48-96h: Delirium Tremens (DTs) \u2014 confusion, hallucinations, autonomic instability \u2014 5-15% mortality if untreated\n\nWERNICKE RISK: Thiamine BEFORE glucose. Even one glucose bolus in thiamine-deficient alcoholic can precipitate Wernicke encephalopathy \u2192 Korsakoff syndrome.",
          "assessment": "Severe alcohol withdrawal, CIWA 22, prior seizure \u2014 admit to floor or step-down. Symptom-triggered benzodiazepine protocol (superior to fixed schedule \u2014 less benzo, shorter stay, same seizure prevention). Thiamine IV immediately. Mg repletion. Nutritional support.",
          "plan": "Thiamine 500mg IV NOW and Q8H x3 days (before any glucose). Diazepam 10mg PO Q1H PRN CIWA \u22658 (symptom-triggered protocol). If CIWA >20 or unable to swallow \u2014 IV diazepam. Monitor CIWA Q1H. If DTs develop (confusion + autonomic storm): ICU, IV lorazepam, intubation threshold low. Mg2+ repletion. Folate. Nutritional consult. CAGE/AUDIT-C assessment. Addiction medicine consult for MAT planning."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "14:20",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-882341",
          "collected": "03/15/2026 14:15",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "COMPREHENSIVE METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "132",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": "L"
                },
                {
                  "test": "Potassium",
                  "value": "3.1",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": "L"
                },
                {
                  "test": "Magnesium",
                  "value": "1.2",
                  "unit": "mg/dL",
                  "range": "1.7-2.2",
                  "flag": "L"
                },
                {
                  "test": "Phosphorus",
                  "value": "2.0",
                  "unit": "mg/dL",
                  "range": "2.5-4.5",
                  "flag": "L"
                },
                {
                  "test": "Glucose",
                  "value": "62",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": "L"
                },
                {
                  "test": "AST",
                  "value": "188",
                  "unit": "U/L",
                  "range": "10-40",
                  "flag": "H"
                },
                {
                  "test": "ALT",
                  "value": "82",
                  "unit": "U/L",
                  "range": "7-56",
                  "flag": "H"
                },
                {
                  "test": "AST:ALT Ratio",
                  "value": "2.3:1",
                  "unit": "",
                  "range": "<2:1",
                  "flag": "H"
                },
                {
                  "test": "GGT",
                  "value": "412",
                  "unit": "U/L",
                  "range": "9-48",
                  "flag": "H"
                },
                {
                  "test": "Total Bilirubin",
                  "value": "1.8",
                  "unit": "mg/dL",
                  "range": "0.2-1.2",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "BLOOD ALCOHOL AND TOXICOLOGY",
              "results": [
                {
                  "test": "Blood Alcohol Level (BAL)",
                  "value": "0.04",
                  "unit": "g/dL",
                  "range": "0 (legal limit 0.08)",
                  "flag": ""
                },
                {
                  "test": "Urine Drug Screen",
                  "value": "Negative (opiates, cocaine, benzos, THC)",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Acetaminophen Level",
                  "value": "Undetectable",
                  "unit": "",
                  "range": "Undetectable",
                  "flag": ""
                }
              ]
            },
            {
              "name": "CBC",
              "results": [
                {
                  "test": "WBC",
                  "value": "11.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "MCV",
                  "value": "104",
                  "unit": "fL",
                  "range": "80-100",
                  "flag": "H"
                },
                {
                  "test": "Platelets",
                  "value": "88",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "150-400",
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
        "chiefComplaint": "Day 2 alcohol withdrawal \u2014 CIWA trending down on diazepam PRN, no seizure, no DTs",
        "diagnosis": "Alcohol Withdrawal \u2014 Responding to CIWA Protocol"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Alcohol withdrawal \u2014 CIWA now 10 (down from 22). No seizure. No DTs. Diazepam PRN working well.",
          "status": "Improving",
          "onset": "Acute",
          "icd10": "F10.230"
        },
        {
          "id": "prob-2",
          "description": "Alcoholic liver disease \u2014 AST:ALT ratio 2.3:1 (classic pattern), thrombocytopenia (splenic sequestration). GI/Hepatology f/u needed.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "K70.9"
        },
        {
          "id": "prob-3",
          "description": "Malnutrition \u2014 low Mg, K, phosphorus, hypoglycemia. Repleting electrolytes. Nutritional support.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "E46"
        },
        {
          "id": "prob-4",
          "description": "Medications for alcohol use disorder \u2014 counseled on naltrexone (prevents relapse). Addiction medicine consulted.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "F10.20"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Diazepam",
          "dose": "5-10mg PO",
          "route": "PO",
          "frequency": "PRN CIWA \u22658 \u2014 frequency decreasing as withdrawal resolves",
          "status": "Active \u2014 tapering",
          "prescriber": "Dr. Medicine Attending"
        },
        {
          "id": "med-2",
          "name": "Thiamine",
          "dose": "500mg IV",
          "route": "IV",
          "frequency": "Q8H \u2014 day 2 of 3",
          "status": "Active",
          "prescriber": "Dr. Medicine Attending"
        },
        {
          "id": "med-3",
          "name": "Naltrexone",
          "dose": "50mg",
          "route": "PO",
          "frequency": "Daily \u2014 starting at discharge for relapse prevention",
          "status": "Planned for discharge",
          "prescriber": "Dr. Addiction Medicine"
        }
      ],
      "vitals": [
        {
          "date": "03/16/2026",
          "time": "08:00",
          "bp": "148/88",
          "hr": "94",
          "rr": "16",
          "temp": "37.2\u00b0C",
          "spo2": "98%",
          "pain": "2/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Medicine Progress Note",
          "date": "03/16/2026",
          "provider": "Dr. Medicine Attending",
          "cc": "Day 2 alcohol withdrawal \u2014 improving",
          "hpi": "CIWA trending down: 22 \u2192 14 \u2192 10. Received 4 doses of diazepam 10mg PRN overnight (40mg total \u2014 appropriate for CIWA-triggered protocol). No seizure. No visual/auditory hallucinations. Tremor improving. Eating soft diet. Thiamine day 2. Electrolytes repleted. Addiction medicine saw patient \u2014 recommended naltrexone at discharge plus outpatient SUD treatment program.\n\nDTs WINDOW: 48-96h post last drink. Patient is now at highest risk window (Day 2). Continue close monitoring. Discharge criteria: CIWA <8 x12h, tolerating PO, no autonomic instability.",
          "assessment": "Alcohol withdrawal resolving. Peak DTs risk 48-96h \u2014 continue monitoring. Discharge tomorrow if maintains CIWA <8.",
          "plan": "Continue CIWA q2h monitoring. PRN diazepam for CIWA \u22658. Complete thiamine x1 more day then switch to oral. Nutritional consult. Naltrexone counseling \u2014 start at discharge (ensure no current opioid use). Referral to outpatient SUD treatment (AA, IOP, MAT clinic). Follow-up hepatology for alcoholic liver disease. Abstinence counseling \u2014 no safe level of alcohol for this patient."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. Medicine Attending",
          "accession": "LAB-882342",
          "collected": "03/16/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "ELECTROLYTES \u2014 TREND",
              "results": [
                {
                  "test": "Potassium",
                  "value": "3.6",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "Magnesium",
                  "value": "1.8",
                  "unit": "mg/dL",
                  "range": "1.7-2.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "88",
                  "unit": "mg/dL",
                  "range": "70-100",
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
      "id": "StatPearls-AlcoholWithdrawal",
      "title": "Alcohol Withdrawal",
      "authors": "Newman RK, Stobart Gallagher MA, Gomez AE",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK441882/",
      "openAccess": true,
      "validates": [
        "CIWA-Ar scoring",
        "Symptom-triggered vs fixed protocol",
        "DTs definition and timeline",
        "Benzodiazepine selection",
        "Wernicke prevention"
      ]
    },
    {
      "id": "StatPearls-Wernicke",
      "title": "Wernicke Encephalopathy",
      "authors": "Sechi G, Serra A",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK538505/",
      "openAccess": true,
      "validates": [
        "Thiamine before glucose",
        "High-dose IV thiamine (500mg)",
        "Korsakoff prevention"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Severe Alcohol Withdrawal \u2014 CIWA-Ar 22, Risk of Seizure and Delirium Tremens",
    "caseId": "alcohol-withdrawal"
  },
  "problems": [
    {
      "problem": "Severe alcohol withdrawal \u2014 CIWA-Ar 22",
      "icd": "F10.230",
      "onset": "2024",
      "status": "Active",
      "notes": "Last drink 36 hours ago, CIWA-Ar 22 \u2014 severe withdrawal, DTs risk within 24-48 hours"
    },
    {
      "problem": "Alcohol use disorder \u2014 heavy daily use, 15+ years",
      "icd": "F10.20",
      "onset": "2009",
      "status": "Active",
      "notes": "1 liter vodka daily \u2014 high tolerance, high withdrawal risk"
    },
    {
      "problem": "Thiamine deficiency \u2014 Wernicke encephalopathy risk",
      "icd": "E51.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Malnourished alcoholic \u2014 give thiamine BEFORE glucose to prevent Wernicke"
    }
  ],
  "medications": [
    {
      "name": "Thiamine 500mg IV TID x3 days THEN 100mg daily",
      "sig": "IV infusion \u2014 give BEFORE glucose. Prevents Wernicke encephalopathy.",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Lorazepam CIWA-Ar protocol \u2014 symptom-triggered",
      "sig": "Lorazepam 2mg IV/PO for CIWA-Ar 8-15, 4mg for >15 \u2014 reassess q1h",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Phenobarbital 260mg IV (adjunct for refractory withdrawal)",
      "sig": "IV \u2014 for CIWA-Ar >20 or benzorefractory. Long half-life provides smooth coverage.",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Standby"
    },
    {
      "name": "Folic acid 1mg daily + Multivitamin",
      "sig": "Take daily \u2014 nutritional support",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 4,
      "status": "Active"
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Alcohol Withdrawal Labs",
      "results": [
        {
          "test": "BAL (blood alcohol level)",
          "value": "<10",
          "unit": "mg/dL",
          "ref": "0",
          "flag": ""
        },
        {
          "test": "Magnesium",
          "value": "1.2",
          "unit": "mg/dL",
          "ref": "1.7-2.4",
          "flag": "L"
        },
        {
          "test": "Phosphate",
          "value": "1.8",
          "unit": "mg/dL",
          "ref": "2.5-4.5",
          "flag": "L"
        },
        {
          "test": "Potassium",
          "value": "3.0",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "L"
        },
        {
          "test": "AST",
          "value": "168",
          "unit": "U/L",
          "ref": "10-40",
          "flag": "H"
        },
        {
          "test": "ALT",
          "value": "72",
          "unit": "U/L",
          "ref": "7-56",
          "flag": "H"
        },
        {
          "test": "AST:ALT ratio",
          "value": "2.3:1",
          "unit": "",
          "ref": "<2 (>2:1 suggests alcoholic liver disease)",
          "flag": "H"
        },
        {
          "test": "MCV",
          "value": "104",
          "unit": "fL",
          "ref": "80-100",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "guided": {
    "ddxTargets": [
      "Severe alcohol withdrawal \u2014 DTs risk, benzodiazepine protocol (correct)",
      "Benzodiazepine withdrawal \u2014 similar syndrome but different substance history",
      "Sepsis with altered mental status \u2014 withdrawal is primary here",
      "Wernicke encephalopathy \u2014 must prevent with thiamine before glucose",
      "Delirium tremens \u2014 expected evolution without treatment; prevention is the goal",
      "Subdural hematoma \u2014 trauma history in alcoholics, CT if focal neuro signs"
    ],
    "coachPrompts": {
      "final": "Diagnosis: severe alcohol withdrawal, CIWA-Ar 22. Key learning: (1) CIWA-Ar thresholds: <8 = mild (monitor), 8-15 = moderate (PRN benzos), >15 = severe (standing + PRN benzos), >20 = DTs risk (aggressive treatment). CIWA-Ar 22 = aggressive benzodiazepine protocol. (2) Thiamine BEFORE glucose: glucose metabolism consumes the last of the patient's thiamine reserves \u2192 precipitates acute Wernicke encephalopathy (confusion + ataxia + ophthalmoplegia). In any malnourished/alcoholic patient, ALWAYS give thiamine before IV glucose. This is an inviolable rule. (3) DTs timeline: peak 48-72h after last drink. Features: autonomic instability (tachycardia, hypertension, diaphoresis), fever, severe agitation, hallucinations. Mortality 5-15% if untreated. (4) Symptom-triggered vs fixed-schedule benzos: CIWA-Ar symptom-triggered protocol requires significantly less benzodiazepine (by 40%) than fixed-schedule \u2014 reduces oversedation while maintaining seizure prevention. (5) Phenobarbital adjunct: for patients requiring >40mg lorazepam in 24h or CIWA-Ar refractory to benzos. Long half-life (80-120h) provides 'ceiling' preventing seizure breakthrough. AST:ALT >2:1 confirms alcoholic hepatitis \u2014 liver disease can slow benzodiazepine metabolism."
    }
  }
};
