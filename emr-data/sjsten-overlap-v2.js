
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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "HIV positive \u2014 started Bactrim prophylaxis, SJS at day 14"
      ],
      [
        "Issue",
        "Sulfa drugs are first-line PCP prophylaxis in HIV \u2014 now needs alternatives"
      ],
      [
        "Severity",
        "15% BSA detachment (SJS/TEN overlap zone: 10-30%)"
      ],
      [
        "Adherence",
        "New HIV diagnosis \u2014 overwhelmed, now terrified of medications"
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
          "description": "SJS/TEN overlap \u2014 TMP-SMX (sulfamethoxazole) culprit",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "HIV positive (CD4 180) \u2014 sulfa drugs needed for PCP prophylaxis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "15% BSA detachment \u2014 overlap zone",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "New HIV diagnosis \u2014 medication fear now added to psychological burden",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Need alternative PCP prophylaxis \u2014 dapsone, atovaquone, or pentamidine",
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
          "temp": "38.4\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "cells/\u00b5L",
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
          "hpi": "24F newly diagnosed HIV (CD4 180, VL 42,000) started on TMP-SMX for PCP prophylaxis 14 days ago. Developed targetoid rash \u2192 epidermal detachment now at 15% BSA (SJS/TEN overlap zone). Oral erosions present but no ocular involvement yet. HIV patients have 100x higher risk of sulfa drug SJS. NOW has 3 converging crises: (1) HIV requiring treatment, (2) SJS requiring treatment, (3) Fear of all medications. Alternative PCP prophylaxis needed \u2014 dapsone (check G6PD first), atovaquone, or inhaled pentamidine.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Burn unit \u2014 SJS/TEN overlap management, HIV medication coordination",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS/TEN overlap 15% BSA \u2014 improving on cyclosporine",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "HIV \u2014 ARV initiation delayed until SJS resolves (immune reconstitution could worsen SJS)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "PCP prophylaxis \u2014 G6PD checked (normal), switching to dapsone",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Medication fear \u2014 psych consult for new HIV + SJS psychological trauma",
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
          "frequency": "Daily (PCP prophylaxis \u2014 G6PD normal)",
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
          "temp": "37.6\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "Burn unit \u2014 SJS/TEN overlap management, HIV medication coordination",
          "hpi": "24F day 5 \u2014 BSA stable, re-epithelialization beginning. Cyclosporine taper started. G6PD normal \u2014 dapsone initiated for PCP prophylaxis. ARVs deferred \u2014 starting during active SJS could trigger immune reconstitution inflammatory syndrome. Psych seeing patient daily \u2014 processing HIV diagnosis AND drug reaction simultaneously. Social work: insurance coverage for specialty meds, housing stability assessment.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 drug avoidance list for HIV patient, alternative prophylaxis, medication reintroduction counseling",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ALL sulfonamides permanently contraindicated \u2014 TMP-SMX, sulfasalazine, sulfadiazine, dapsone CONTROVERSIAL (some tolerate, different mechanism)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "HIV medication selection \u2014 avoid abacavir (hypersensitivity), nevirapine (SJS risk)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "G6PD normal \u2014 dapsone tolerated for PCP",
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
          "description": "Cross-reactivity: sulfa antibiotics \u2260 sulfa-containing non-antibiotics (thiazides, celecoxib generally safe)",
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
          "frequency": "Daily (when ready \u2014 safest ARV combo for SJS history)",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "A/I consult \u2014 drug avoidance list for HIV patient, alternative prophylaxis, medication reintroduction counseling",
          "hpi": "A/I: 24F HIV+ with sulfa SJS. Drug guidance: (1) ALL sulfonamide antibiotics permanently avoided, (2) Dapsone is NOT a sulfonamide \u2014 different structure, generally safe (she's tolerating it), (3) Sulfa-containing non-antibiotics (thiazides, celecoxib, sumatriptan) are generally safe \u2014 cross-reactivity is a myth for non-antibiotic sulfonamides, (4) ARV selection: avoid abacavir (hypersensitivity risk) and nevirapine (SJS risk), (5) Recommended: bictegravir/TAF/emtricitabine or dolutegravir-based regimen. Medical alert bracelet: \"Sulfonamide SJS \u2014 Do NOT give TMP-SMX.\"",
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
          "description": "SJS \u2014 fully healed, post-inflammatory hyperpigmentation",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "HIV \u2014 on bictegravir/TAF/emtricitabine, VL trending down",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "PCP prophylaxis \u2014 tolerating dapsone",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Medication adherence \u2014 initially fearful, now taking pills without anxiety",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Therapy \u2014 processing HIV + SJS dual trauma",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "hpi": "24F 3 months post-SJS. Skin healed. HIV: VL dropping on bictegravir/TAF/FTC, CD4 rising (180\u2192240). Tolerating dapsone without issues. Initially terrified of taking any pills \u2014 therapy helped her distinguish between rational medication caution and phobic avoidance. Drug allergy card in wallet, pharmacy systems flagged. Says: \"I went from being scared of every pill to understanding which ones are actually dangerous for me.\"",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
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
      "problem": "SJS/TEN \u2014 sulfamethoxazole, 15% BSA detachment",
      "icd": "L51.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Michael Torres, 44M \u2014 TMP-SMX started 2 weeks ago. Atypical targets, mucosal erosions, 15% epidermal detachment."
    },
    {
      "problem": "Conjunctival involvement \u2014 bilateral pseudomembrane formation",
      "icd": "H10.219",
      "onset": "2024",
      "status": "Active",
      "notes": "Bilateral pseudomembranes forming on bulbar conjunctiva. Emergency ophthalmology \u2014 symblepharon lysis and amniotic membrane required."
    },
    {
      "problem": "Nutritional support \u2014 hypermetabolic from skin loss and infection stress",
      "icd": "E46",
      "onset": "2024",
      "status": "Active",
      "notes": "Denuded skin = major caloric loss. Enteral nutrition via NG tube immediately \u2014 caloric needs 35-40 kcal/kg/day in TEN."
    }
  ],
  "medications": [
    {
      "name": "STOP TMP-SMX \u2014 causative drug",
      "sig": "Immediate discontinuation. Alternative infection treatment required.",
      "prescriber": "Medicine/Dermatology",
      "start": "DISCONTINUE",
      "refills": 0,
      "status": "DISCONTINUED"
    },
    {
      "name": "Cyclosporine 3mg/kg/day \u2014 T-cell inhibition",
      "sig": "Inhibits keratinocyte apoptosis pathway \u2014 may halt disease progression if started early.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Amniotic membrane transplantation \u2014 bilateral eyes",
      "sig": "Applied by ophthalmology \u2014 provides anti-inflammatory substrate, reduces symblepharon, preserves cornea.",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 procedure"
    },
    {
      "name": "NG tube enteral nutrition \u2014 35-40 kcal/kg/day",
      "sig": "High-calorie, high-protein formula. Start within 24h of ICU admission.",
      "prescriber": "Nutrition/Burn Unit",
      "start": "2024",
      "refills": 0,
      "status": "Active"
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
      "temp": "38.4\u00b0C",
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
      "hpi": "24F newly diagnosed HIV (CD4 180, VL 42,000) started on TMP-SMX for PCP prophylaxis 14 days ago. Developed targetoid rash \u2192 epidermal detachment now at 15% BSA (SJS/TEN overlap zone). Oral erosions present but no ocular involvement yet. HIV patients have 100x higher risk of sulfa drug SJS. NOW has 3 converging crises: (1) HIV requiring treatment, (2) SJS requiring treatment, (3) Fear of all medications. Alternative PCP prophylaxis needed \u2014 dapsone (check G6PD first), atovaquone, or inhaled pentamidine.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "SJS/TEN Assessment",
      "results": [
        {
          "test": "SCORTEN",
          "value": "2",
          "unit": "/7",
          "ref": "Score 2 = ~12% mortality",
          "flag": ""
        },
        {
          "test": "BSA detachment",
          "value": "15",
          "unit": "%",
          "ref": "10-30% = overlap",
          "flag": "H"
        },
        {
          "test": "Albumin",
          "value": "2.6",
          "unit": "g/dL",
          "ref": "3.5-5.0",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "1.2",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": ""
        },
        {
          "test": "CRP",
          "value": "168",
          "unit": "mg/L",
          "ref": "<10",
          "flag": "H"
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
      "HIV positive \u2014 started Bactrim prophylaxis, SJS at day 14"
    ],
    [
      "Issue",
      "Sulfa drugs are first-line PCP prophylaxis in HIV \u2014 now needs alternatives"
    ],
    [
      "Severity",
      "15% BSA detachment (SJS/TEN overlap zone: 10-30%)"
    ],
    [
      "Adherence",
      "New HIV diagnosis \u2014 overwhelmed, now terrified of medications"
    ]
  ],
  "references": [
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
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Hannah appears anxious and withdrawn, with visible distress from both physical pain and overwhelming fear about her new HIV diagnosis. She is hesitant to discuss medications, expressing terror about taking anything new after developing this severe reaction, but will provide information when approached with patience and reassurance.",
    "interviewQuestions": [
      "When did you first notice the rash and how has it changed?",
      "Can you describe what the rash looked like when it first appeared?",
      "Are you having any pain or burning with the skin lesions?",
      "Do you have any sores or pain in your mouth or throat?",
      "Have you had any eye irritation, burning, or vision changes?",
      "Are you having any difficulty swallowing or eating?",
      "Have you had any fever, chills, or feeling unwell?",
      "What medications were you taking when the rash started?",
      "Have you ever had reactions to medications before?",
      "When were you diagnosed with HIV and how are you coping?",
      "Have you had any recent infections or illnesses?",
      "Are you having any breathing problems or chest tightness?",
      "Have you noticed any blistering or peeling of your skin?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of the pain and everything that's happening. Could you ask that differently?",
      "onset": "The rash started about 4 days ago, maybe 10 days after I began the Bactrim. It started as red spots on my chest and arms, but then it got much worse with blistering and my skin started peeling off.",
      "character": "It started as red, target-like spots that looked like bullseyes, but then turned into these terrible blisters that burst and left raw, painful areas where my skin just came off.",
      "location": "It started on my chest and arms, but now it's spread to my back, face, and I have painful sores in my mouth and throat too.",
      "severity": "The pain is about an 8 out of 10, especially when anything touches my skin or when I try to eat or drink. I can barely function.",
      "aggravating": "Any touch or movement makes it worse, and trying to eat or drink anything is agony because of the mouth sores.",
      "relieving": "The morphine helps some, but not completely. Cool, wet dressings feel a little better, but I'm still in constant pain.",
      "associated": "I have fever, chills, and terrible pain in my mouth and throat. I can barely swallow and eating is almost impossible. I feel weak and exhausted.",
      "denies": "I don't have any breathing problems, chest pain, or vision changes, but my eyes do feel a bit irritated and dry.",
      "history": "No, I've never had anything like this before. I've never had bad reactions to medications, which is why this is so scary.",
      "medications": "TMP-SMX; Cyclosporine; IV Fluids; Morphine PCA",
      "allergies": "Sulfamethoxazole",
      "family": "No one in my family has had skin problems like this or medication allergies that I know of.",
      "social": "I work as a teacher, don't smoke, drink occasionally socially. I was just diagnosed with HIV last month and started the Bactrim for prevention. I'm terrified of taking any medications now."
    },
    "examManeuvers": [
      "Skin examination for rash distribution and characteristics",
      "Assessment of body surface area involvement",
      "Oral cavity and mucous membrane examination",
      "Conjunctival and ocular examination",
      "Lymph node palpation",
      "Assessment for Nikolsky sign",
      "Temperature and vital signs assessment",
      "Respiratory examination",
      "Cardiac examination",
      "Evaluation of hydration status"
    ],
    "examFindings": {
      "Skin examination for rash distribution and characteristics": "Widespread erythematous and purpuric macules with atypical targetoid lesions, extensive areas of epidermal detachment with bullae and erosions across chest, back, arms, and face",
      "Assessment of body surface area involvement": "Approximately 15% body surface area with epidermal detachment, consistent with SJS/TEN overlap syndrome",
      "Oral cavity and mucous membrane examination": "Severe oral erosions with crusted lips, erythematous and ulcerated buccal mucosa, difficulty opening mouth fully due to pain",
      "Conjunctival and ocular examination": "Mild conjunctival erythema and irritation, no corneal involvement or severe ocular complications noted",
      "Lymph node palpation": "Mild cervical and axillary lymphadenopathy, mobile and tender",
      "Assessment for Nikolsky sign": "Positive Nikolsky sign - lateral pressure causes separation of epidermis",
      "Temperature and vital signs assessment": "Febrile at 38.4\u00b0C, tachycardic at 104 bpm, blood pressure 102/62 suggesting mild dehydration",
      "Respiratory examination": "Clear breath sounds bilaterally, no respiratory distress or pulmonary involvement",
      "Cardiac examination": "Tachycardic but regular rhythm, no murmurs or gallops",
      "Evaluation of hydration status": "Signs of mild dehydration with dry mucous membranes, poor skin turgor in unaffected areas"
    },
    "ddxTargets": [
      "SJS/TEN overlap \u2014 TMP-SMX, mucosal + skin detachment (correct)",
      "EM major \u2014 true 3-zone targets, <10% BSA; this has atypical targets and >10% detachment",
      "Staphylococcal scalded skin \u2014 children, no mucosal involvement, superficial cleavage plane",
      "Drug hypersensitivity exanthem without detachment \u2014 no Nikolsky sign, BSA not detaching",
      "DRESS \u2014 eosinophilia, lymphadenopathy, systemic organs; no epidermal detachment",
      "Fixed drug eruption \u2014 localized, recurrent at same site; not generalized"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on HIV status and assuming all symptoms are HIV-related rather than recognizing the severe drug reaction requiring immediate intervention",
      "prematureClosure": "Risk of stopping evaluation at simple drug rash without recognizing the severity and life-threatening nature of SJS/TEN overlap syndrome",
      "availabilityBias": "Risk of being influenced by recent cases of common viral exanthems rather than recognizing this rare but critical dermatologic emergency"
    },
    "coachPrompts": {
      "phase2": "This young woman has a new HIV diagnosis and developed a rash after starting prophylactic antibiotics. What key features in the history would help you distinguish between a simple drug rash and a more serious condition? Think about the timeline, morphology, and associated symptoms that would be concerning.",
      "phase5": "You've identified targetoid lesions with significant epidermal detachment and mucous membrane involvement. What does the 15% body surface area involvement tell you about classification? How does this change your urgency and management approach, particularly in an immunocompromised patient?",
      "finalDebrief": "This case illustrates the challenge of SJS/TEN overlap in HIV patients who need sulfa-based PCP prophylaxis. The 15% BSA puts her in the overlap zone between SJS and TEN. Key learning points include recognizing the clinical progression from targetoid lesions to epidermal detachment, the psychological impact of severe drug reactions in newly diagnosed HIV patients, and the need for alternative PCP prophylaxis options like dapsone or atovaquone.",
      "final": "Diagnosis: SJS/TEN \u2014 sulfonamide (TMP-SMX). Key learning: (1) Sulfonamides are among the most common causes of SJS/TEN worldwide \u2014 TMP-SMX, sulfasalazine, sulfadiazine. Other major culprits: allopurinol (#1 worldwide), aromatic anticonvulsants (carbamazepine, phenytoin, lamotrigine), NSAIDs (oxicam class), nevirapine. (2) Nikolsky sign in TEN: gentle lateral pressure on skin causes epidermal separation. Positive in TEN and SSSS but NOT in EM or drug rash without detachment. Demonstrates fragile dermo-epidermal junction. (3) Wound care principles: treat as partial-thickness burn \u2014 non-adherent dressings (Mepitel, Mepilex), daily gentle wound assessment, no forceful debridement of viable but detached skin. Temperature regulation (patient easily loses heat through denuded skin \u2014 warm room, warm IV fluids). (4) Infection monitoring: the primary cause of mortality in TEN after the acute phase is sepsis from loss of skin barrier. Daily blood cultures, wound cultures, low threshold for empiric antibiotics with clinical deterioration. (5) Long-term sequelae: ocular (vision loss, dry eye, photophobia), oral (xerostomia, mucosal scarring), genital (stenosis), pulmonary (bronchiectasis from bronchial mucosal involvement), skin (post-inflammatory dyspigmentation, nail loss). Long-term multidisciplinary follow-up required."
    }
  },
  "meta": {
    "diagnosis": "SJS/TEN \u2014 Sulfonamide-Induced, Ophthalmologic Emergency, Burn Unit Protocol",
    "caseId": "sjsten-overlap-v2"
  }
};
