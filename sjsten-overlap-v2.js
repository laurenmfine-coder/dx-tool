/* emr-data/sjsten-overlap-v2.js — Variation: SJS/TEN Overlap */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Hannah Rodriguez",
  "patientHPI": "I started taking an antibiotic about two weeks ago after being diagnosed with HIV, and now I have this horrible rash with red target-like spots that's gotten much worse - my skin is peeling off and I have painful sores in my mouth.",
      "dob": "09/05/2002",
      "age": "24",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-824017",
      "language": "English",
      "race": "Hispanic/Latina",
      "phone": "(702) 555-2824",
      "email": "hannah.x@email.com",
      "address": "9035 Lavender St, Detroit, MI 48201",
      "insurance": "Aetna HMO",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(212) 555-5506",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Sulfamethoxazole",
        "reaction": "SJS/TEN",
        "severity": "Severe",
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
        "Context",
        "HIV positive — started Bactrim prophylaxis, SJS at day 14"
      ],
      [
        "Issue",
        "Sulfa drugs are first-line PCP prophylaxis in HIV — now needs alternatives"
      ],
      [
        "Severity",
        "15% BSA detachment (SJS/TEN overlap zone: 10-30%)"
      ],
      [
        "Adherence",
        "New HIV diagnosis — overwhelmed, now terrified of medications"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "24yo HIV+ female with SJS/TEN overlap (15% BSA) 14 days after starting TMP-SMX prophylaxis",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS/TEN overlap — TMP-SMX (sulfamethoxazole) culprit",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "HIV positive (CD4 180) — sulfa drugs needed for PCP prophylaxis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "15% BSA detachment — overlap zone",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "New HIV diagnosis — medication fear now added to psychological burden",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Need alternative PCP prophylaxis — dapsone, atovaquone, or pentamidine",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "TMP-SMX",
          "dose": "STOPPED",
          "route": "",
          "frequency": "Culprit drug",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cyclosporine",
          "dose": "3mg/kg/day",
          "route": "IV",
          "frequency": "SJS treatment",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "IV Fluids",
          "dose": "LR",
          "route": "IV",
          "frequency": "Fluid resuscitation",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Morphine PCA",
          "dose": "",
          "route": "IV",
          "frequency": "Pain management",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "102/62",
          "hr": "104",
          "rr": "20",
          "temp": "38.4°C",
          "spo2": "96%",
          "pain": "8/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-226203",
          "collected": "03/02/2026 08:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "3.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "L"
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.6",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "98",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": "L"
                },
                {
                  "test": "Eosinophils",
                  "value": "2",
                  "unit": "%",
                  "range": "1-4",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BASIC METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "140",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.1",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "14",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.2",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "94",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "SJS + HIV",
              "results": [
                {
                  "test": "CD4 count",
                  "value": "180",
                  "unit": "cells/µL",
                  "range": ">500",
                  "flag": "L"
                },
                {
                  "test": "HIV viral load",
                  "value": "42,000",
                  "unit": "copies/mL",
                  "range": "<20",
                  "flag": "H"
                },
                {
                  "test": "SCORTEN",
                  "value": "2 (3.2% mortality)",
                  "unit": "",
                  "range": "",
                  "flag": ""
                },
                {
                  "test": "Granulysin",
                  "value": "Elevated",
                  "unit": "",
                  "range": "",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "24yo HIV+ female with SJS/TEN overlap (15% BSA) 14 days after starting TMP-SMX prophylaxis",
          "hpi": "24F newly diagnosed HIV (CD4 180, VL 42,000) started on TMP-SMX for PCP prophylaxis 14 days ago. Developed targetoid rash → epidermal detachment now at 15% BSA (SJS/TEN overlap zone). Oral erosions present but no ocular involvement yet. HIV patients have 100x higher risk of sulfa drug SJS. NOW has 3 converging crises: (1) HIV requiring treatment, (2) SJS requiring treatment, (3) Fear of all medications. Alternative PCP prophylaxis needed — dapsone (check G6PD first), atovaquone, or inhaled pentamidine.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Burn unit — SJS/TEN overlap management, HIV medication coordination",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS/TEN overlap 15% BSA — improving on cyclosporine",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "HIV — ARV initiation delayed until SJS resolves (immune reconstitution could worsen SJS)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "PCP prophylaxis — G6PD checked (normal), switching to dapsone",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Medication fear — psych consult for new HIV + SJS psychological trauma",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Sulfa drugs permanently contraindicated",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cyclosporine",
          "dose": "3mg/kg/day",
          "route": "IV",
          "frequency": "Taper started",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Dapsone",
          "dose": "100mg",
          "route": "PO",
          "frequency": "Daily (PCP prophylaxis — G6PD normal)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "ARVs",
          "dose": "Deferred 2-4 weeks",
          "route": "",
          "frequency": "Until SJS resolved",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "108/68",
          "hr": "86",
          "rr": "16",
          "temp": "37.6°C",
          "spo2": "98%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-295425",
          "collected": "03/02/2026 08:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "7.4",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.6",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "2",
                  "unit": "%",
                  "range": "1-4",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BASIC METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "140",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.1",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "14",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "94",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-1",
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Burn unit — SJS/TEN overlap management, HIV medication coordination",
          "hpi": "24F day 5 — BSA stable, re-epithelialization beginning. Cyclosporine taper started. G6PD normal — dapsone initiated for PCP prophylaxis. ARVs deferred — starting during active SJS could trigger immune reconstitution inflammatory syndrome. Psych seeing patient daily — processing HIV diagnosis AND drug reaction simultaneously. Social work: insurance coverage for specialty meds, housing stability assessment.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — drug avoidance list for HIV patient, alternative prophylaxis, medication reintroduction counseling",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ALL sulfonamides permanently contraindicated — TMP-SMX, sulfasalazine, sulfadiazine, dapsone CONTROVERSIAL (some tolerate, different mechanism)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "HIV medication selection — avoid abacavir (hypersensitivity), nevirapine (SJS risk)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "G6PD normal — dapsone tolerated for PCP",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Safe ARV options: tenofovir/emtricitabine + dolutegravir",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Cross-reactivity: sulfa antibiotics ≠ sulfa-containing non-antibiotics (thiazides, celecoxib generally safe)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Dapsone",
          "dose": "100mg",
          "route": "PO",
          "frequency": "Daily (PCP prophylaxis)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Tenofovir/emtricitabine/dolutegravir",
          "dose": "",
          "route": "PO",
          "frequency": "Daily (when ready — safest ARV combo for SJS history)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "112/68",
          "hr": "78",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-332070",
          "collected": "03/02/2026 08:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "7.4",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.6",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "2",
                  "unit": "%",
                  "range": "1-4",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BASIC METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "140",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.1",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "14",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "94",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-1",
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult — drug avoidance list for HIV patient, alternative prophylaxis, medication reintroduction counseling",
          "hpi": "A/I: 24F HIV+ with sulfa SJS. Drug guidance: (1) ALL sulfonamide antibiotics permanently avoided, (2) Dapsone is NOT a sulfonamide — different structure, generally safe (she's tolerating it), (3) Sulfa-containing non-antibiotics (thiazides, celecoxib, sumatriptan) are generally safe — cross-reactivity is a myth for non-antibiotic sulfonamides, (4) ARV selection: avoid abacavir (hypersensitivity risk) and nevirapine (SJS risk), (5) Recommended: bictegravir/TAF/emtricitabine or dolutegravir-based regimen. Medical alert bracelet: \"Sulfonamide SJS — Do NOT give TMP-SMX.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "SJS resolved, ARVs started, medication adherence, psychological recovery",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS — fully healed, post-inflammatory hyperpigmentation",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "HIV — on bictegravir/TAF/emtricitabine, VL trending down",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "PCP prophylaxis — tolerating dapsone",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Medication adherence — initially fearful, now taking pills without anxiety",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Therapy — processing HIV + SJS dual trauma",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Bictegravir/TAF/emtricitabine",
          "dose": "",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Dapsone",
          "dose": "100mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Sunscreen SPF 50",
          "dose": "",
          "route": "Topical",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "116/72",
          "hr": "74",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-161919",
          "collected": "03/02/2026 08:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "7.4",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.6",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "2",
                  "unit": "%",
                  "range": "1-4",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BASIC METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "140",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.1",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "14",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "94",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-1",
          "type": "Office Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "SJS resolved, ARVs started, medication adherence, psychological recovery",
          "hpi": "24F 3 months post-SJS. Skin healed. HIV: VL dropping on bictegravir/TAF/FTC, CD4 rising (180→240). Tolerating dapsone without issues. Initially terrified of taking any pills — therapy helped her distinguish between rational medication caution and phobic avoidance. Drug allergy card in wallet, pharmacy systems flagged. Says: \"I went from being scared of every pill to understanding which ones are actually dangerous for me.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Hannah Rodriguez",
    "dob": "09/05/2002",
    "age": "24",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-824017",
    "language": "English",
    "race": "Hispanic/Latina",
    "phone": "(414) 555-4657",
    "email": "hannah.x@email.com",
    "address": "1635 N Western Ave, Albuquerque, NM 87101",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(317) 555-2679",
      "relationship": "Spouse"
    },
    "chiefComplaint": "24yo HIV+ female with SJS/TEN overlap (15% BSA) 14 days after starting TMP-SMX prophylaxis",
    "diagnosis": "SJS/TEN Overlap"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "SJS/TEN overlap — TMP-SMX (sulfamethoxazole) culprit",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "HIV positive (CD4 180) — sulfa drugs needed for PCP prophylaxis",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "15% BSA detachment — overlap zone",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "New HIV diagnosis — medication fear now added to psychological burden",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Need alternative PCP prophylaxis — dapsone, atovaquone, or pentamidine",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "TMP-SMX",
      "dose": "STOPPED",
      "route": "",
      "frequency": "Culprit drug",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Cyclosporine",
      "dose": "3mg/kg/day",
      "route": "IV",
      "frequency": "SJS treatment",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "IV Fluids",
      "dose": "LR",
      "route": "IV",
      "frequency": "Fluid resuscitation",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "Morphine PCA",
      "dose": "",
      "route": "IV",
      "frequency": "Pain management",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfamethoxazole",
      "reaction": "SJS/TEN",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "102/62",
      "hr": "104",
      "rr": "20",
      "temp": "38.4°C",
      "spo2": "96%",
      "pain": "8/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "24yo HIV+ female with SJS/TEN overlap (15% BSA) 14 days after starting TMP-SMX prophylaxis",
      "hpi": "24F newly diagnosed HIV (CD4 180, VL 42,000) started on TMP-SMX for PCP prophylaxis 14 days ago. Developed targetoid rash → epidermal detachment now at 15% BSA (SJS/TEN overlap zone). Oral erosions present but no ocular involvement yet. HIV patients have 100x higher risk of sulfa drug SJS. NOW has 3 converging crises: (1) HIV requiring treatment, (2) SJS requiring treatment, (3) Fear of all medications. Alternative PCP prophylaxis needed — dapsone (check G6PD first), atovaquone, or inhaled pentamidine.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-226203",
      "collected": "03/02/2026 08:10",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "3.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "L"
            },
            {
              "test": "Hemoglobin",
              "value": "13.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "98",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "L"
            },
            {
              "test": "Eosinophils",
              "value": "2",
              "unit": "%",
              "range": "1-4",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.1",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "94",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            }
          ]
        },
        {
          "name": "SJS + HIV",
          "results": [
            {
              "test": "CD4 count",
              "value": "180",
              "unit": "cells/µL",
              "range": ">500",
              "flag": "L"
            },
            {
              "test": "HIV viral load",
              "value": "42,000",
              "unit": "copies/mL",
              "range": "<20",
              "flag": "H"
            },
            {
              "test": "SCORTEN",
              "value": "2 (3.2% mortality)",
              "unit": "",
              "range": "",
              "flag": ""
            },
            {
              "test": "Granulysin",
              "value": "Elevated",
              "unit": "",
              "range": "",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
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
      "Context",
      "HIV positive — started Bactrim prophylaxis, SJS at day 14"
    ],
    [
      "Issue",
      "Sulfa drugs are first-line PCP prophylaxis in HIV — now needs alternatives"
    ],
    [
      "Severity",
      "15% BSA detachment (SJS/TEN overlap zone: 10-30%)"
    ],
    [
      "Adherence",
      "New HIV diagnosis — overwhelmed, now terrified of medications"
    ]
  ]
,"references":[
  {
    "id": "SCORTEN-2000",
    "title": "SCORTEN: severity-of-illness score for toxic epidermal necrolysis",
    "authors": "Bastuji-Garin S, Fouchard N, Bertocchi M, et al.",
    "journal": "J Invest Dermatol",
    "year": 2000,
    "doi": "10.1046/j.1523-1747.2000.00061.x",
    "url": "https://pubmed.ncbi.nlm.nih.gov/10998259/",
    "openAccess": true,
    "validates": [
      "SCORTEN mortality prediction",
      "7 clinical parameters",
      "Score 3 = 12.1% mortality"
    ]
  }
]};
