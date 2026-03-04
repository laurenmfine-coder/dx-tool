/* emr-data/sjs-ten.js — Multi-Setting Allergy Case: SJS/TEN */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Marcus Brown",
      "dob": "09/12/1970",
      "age": "56",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-941221",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(957) 336-1533",
      "email": "keisha.brown@email.com",
      "address": "7422 Oak Dr, Pembroke Pines, FL 33360",
      "insurance": "BlueCross BlueShield PPO",
      "pcp": "Dr. Michelle Foster, MD",
      "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
      "emergencyContact": {
        "name": "Donna Brown",
        "phone": "(845) 698-5963",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": "Drug"
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/15/2025",
        "lot": "FL-2025",
        "site": "Left Deltoid"
      },
      {
        "name": "COVID-19 (Updated)",
        "date": "09/01/2025",
        "lot": "CV-2025",
        "site": "Right Deltoid"
      },
      {
        "name": "Tdap",
        "date": "03/2020",
        "lot": "TD-2020",
        "site": "Left Deltoid"
      }
    ],
    "familyHistory": [
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Race",
        "Southeast Asian descent (HLA-B*5801 high prevalence)"
      ],
      [
        "Tobacco",
        "Never"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Gout",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "CKD Stage 2",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Started allopurinol 14 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Allopurinol",
          "dose": "300mg",
          "route": "PO",
          "frequency": "Daily (started 14 days ago)",
          "status": "Active",
          "prescriber": "Dr. James Wu, MD"
        },
        {
          "id": "med-2",
          "name": "Colchicine",
          "dose": "0.6mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Raj Patel, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/01/2026",
          "time": "07:45",
          "bp": "108/62",
          "hr": "112",
          "rr": "22",
          "temp": "39.2°C",
          "spo2": "96%",
          "pain": "9/10",
          "bmi": "37",
          "weight": "77 kg"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-326180",
          "collected": "03/01/2026 07:50",
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
                  "value": "13.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "41.2",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "245",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BASIC METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "139",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.2",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "16",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": "H"
                },
                {
                  "test": "Glucose",
                  "value": "98",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
                  "flag": ""
                }
              ]
            },
            {
              "name": "CASE-SPECIFIC STUDIES",
              "results": [
                {
                  "test": "Alt",
                  "value": "145",
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
          "date": "03/01/2026",
          "study": "Chest X-Ray",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-201648",
          "clinical": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
          "technique": "Standard protocol",
          "findings": "No infiltrate. Skin findings visible on chest.",
          "impression": "No acute pulmonary process.",
          "dictated": "03/01/2026 08:30",
          "verified": "03/01/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-ed",
          "type": "Emergency Visit",
          "date": "03/01/2026",
          "provider": "Dr. ED Attending",
          "cc": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
          "hpi": "Marcus Brown is a 56-year-old male presenting with progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago. Past medical history includes Gout, CKD Stage 2, Started allopurinol 14 days ago. See chart for full details.",
          "exam": "See physical examination documentation.",
          "assessment": "SJS/TEN — clinical presentation and workup consistent with diagnosis.",
          "plan": "See orders and management plan."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted to burn unit for SJS/TEN management — 35% BSA involvement",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Gout",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "CKD Stage 2",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Started allopurinol 14 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Allopurinol",
          "dose": "300mg",
          "route": "PO",
          "frequency": "Daily (started 14 days ago)",
          "status": "Active",
          "prescriber": "Dr. James Wu, MD"
        },
        {
          "id": "med-2",
          "name": "Colchicine",
          "dose": "0.6mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Raj Patel, MD"
        },
        {
          "id": "med-add-1",
          "name": "Cyclosporine",
          "dose": "3mg/kg",
          "route": "IV",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Morphine PCA",
          "dose": "",
          "route": "IV",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-3",
          "name": "Vancomycin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Q12H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-4",
          "name": "IV Fluids",
          "dose": "LR",
          "route": "IV",
          "frequency": "150mL/hr",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "98/62",
          "hr": "112",
          "rr": "22",
          "temp": "38.8°C",
          "spo2": "95%",
          "pain": "9/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-326180",
          "collected": "03/01/2026 07:50",
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
                  "value": "13.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "41.2",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "245",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BASIC METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "139",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.2",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "16",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": "H"
                },
                {
                  "test": "Glucose",
                  "value": "98",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
                  "flag": ""
                }
              ]
            },
            {
              "name": "CASE-SPECIFIC STUDIES",
              "results": [
                {
                  "test": "Alt",
                  "value": "145",
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
          "date": "03/01/2026",
          "study": "Chest X-Ray",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-201648",
          "clinical": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
          "technique": "Standard protocol",
          "findings": "No infiltrate. Skin findings visible on chest.",
          "impression": "No acute pulmonary process.",
          "dictated": "03/01/2026 08:30",
          "verified": "03/01/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Admitted to burn unit for SJS/TEN management — 35% BSA involvement",
          "hpi": "Marcus Brown — Admitted to burn unit for SJS/TEN management — 35% BSA involvement",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — identify culprit drug, cross-reactivity risk, future drug avoidance plan",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Gout",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "CKD Stage 2",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Started allopurinol 14 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Allopurinol",
          "dose": "300mg",
          "route": "PO",
          "frequency": "Daily (started 14 days ago)",
          "status": "Active",
          "prescriber": "Dr. James Wu, MD"
        },
        {
          "id": "med-2",
          "name": "Colchicine",
          "dose": "0.6mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Raj Patel, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/68",
          "hr": "92",
          "rr": "18",
          "temp": "37.8°C",
          "spo2": "97%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-326180",
          "collected": "03/01/2026 07:50",
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
                  "value": "13.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "41.2",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "245",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BASIC METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "139",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.2",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "16",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": "H"
                },
                {
                  "test": "Glucose",
                  "value": "98",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
                  "flag": ""
                }
              ]
            },
            {
              "name": "CASE-SPECIFIC STUDIES",
              "results": [
                {
                  "test": "Alt",
                  "value": "145",
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
          "date": "03/01/2026",
          "study": "Chest X-Ray",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-201648",
          "clinical": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
          "technique": "Standard protocol",
          "findings": "No infiltrate. Skin findings visible on chest.",
          "impression": "No acute pulmonary process.",
          "dictated": "03/01/2026 08:30",
          "verified": "03/01/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult — identify culprit drug, cross-reactivity risk, future drug avoidance plan",
          "hpi": "Marcus Brown — A/I consult — identify culprit drug, cross-reactivity risk, future drug avoidance plan",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Post-SJS/TEN follow-up — 8 weeks, skin healing assessment, permanent drug avoidance list",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Gout",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "CKD Stage 2",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Started allopurinol 14 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Artificial tears",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Triamcinolone 0.025%",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to healing areas",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "118/72",
          "hr": "76",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-326180",
          "collected": "03/01/2026 07:50",
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
                  "value": "13.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "41.2",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "245",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BASIC METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "139",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.2",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "16",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": "H"
                },
                {
                  "test": "Glucose",
                  "value": "98",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
                  "flag": ""
                }
              ]
            },
            {
              "name": "CASE-SPECIFIC STUDIES",
              "results": [
                {
                  "test": "Alt",
                  "value": "145",
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
          "date": "03/01/2026",
          "study": "Chest X-Ray",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-201648",
          "clinical": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
          "technique": "Standard protocol",
          "findings": "No infiltrate. Skin findings visible on chest.",
          "impression": "No acute pulmonary process.",
          "dictated": "03/01/2026 08:30",
          "verified": "03/01/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Office Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Post-SJS/TEN follow-up — 8 weeks, skin healing assessment, permanent drug avoidance list",
          "hpi": "Marcus Brown — Post-SJS/TEN follow-up — 8 weeks, skin healing assessment, permanent drug avoidance list",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Marcus Brown",
    "dob": "09/12/1970",
    "age": "56",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-941221",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(957) 336-1533",
    "email": "keisha.brown@email.com",
    "address": "7422 Oak Dr, Pembroke Pines, FL 33360",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Michelle Foster, MD",
    "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "Donna Brown",
      "phone": "(845) 698-5963",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
    "diagnosis": "SJS/TEN"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Gout",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "CKD Stage 2",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Started allopurinol 14 days ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Allopurinol",
      "dose": "300mg",
      "route": "PO",
      "frequency": "Daily (started 14 days ago)",
      "status": "Active",
      "prescriber": "Dr. James Wu, MD"
    },
    {
      "id": "med-2",
      "name": "Colchicine",
      "dose": "0.6mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Raj Patel, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "108/62",
      "hr": "112",
      "rr": "22",
      "temp": "39.2°C",
      "spo2": "96%",
      "pain": "9/10",
      "bmi": "37",
      "weight": "77 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
      "hpi": "Marcus Brown is a 56-year-old male presenting with progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago. Past medical history includes Gout, CKD Stage 2, Started allopurinol 14 days ago. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "SJS/TEN — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-326180",
      "collected": "03/01/2026 07:50",
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
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "245",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "16",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Alt",
              "value": "145",
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
      "date": "03/01/2026",
      "study": "Chest X-Ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-201648",
      "clinical": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
      "technique": "Standard protocol",
      "findings": "No infiltrate. Skin findings visible on chest.",
      "impression": "No acute pulmonary process.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Race",
      "Southeast Asian descent (HLA-B*5801 high prevalence)"
    ],
    [
      "Tobacco",
      "Never"
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
],

  "teachingPoints": {
    "keyLearning": [
      "SJS/TEN mechanism: Type IVc — CD8+ cytotoxic T lymphocytes recognize drug/metabolite on MHC-I on keratinocytes → granulysin (principal cytotoxin) + perforin/granzyme B → keratinocyte apoptosis → epidermal detachment. Granulysin levels in blister fluid correlate with severity.",
      "Nikolsky sign: lateral shearing pressure on normal-appearing skin adjacent to blister → epidermis slides off. POSITIVE in TEN (and pemphigus vulgaris, SSSS). NEGATIVE in SJS, EM major.",
      "SCORTEN: 7 variables (age >40, HR >120, malignancy, BSA >10%, BUN >28, glucose >252, bicarbonate <20) each 1 point. Score ≥5 = >90% mortality. Calculate at admission AND day 3."
    ],
    "boardPearls": [
      "SJS <10% BSA; Overlap 10–30%; TEN >30% BSA. Mortality: SJS 1–5%, TEN 20–30%.",
      "Principal cytotoxin: granulysin (from CD8+ CTL and NK cells). Not histamine. Not IgE.",
      "Nikolsky sign: positive = TEN (and pemphigus, SSSS). Negative = SJS, EM major.",
      "SJS vs EM major: SJS = drug-caused, ill-defined atypical targets, extensive mucosal (all sites), Nikolsky+. EM = HSV/infection, classic 3-zone targets (pale/dark/red), acral, limited mucosal, Nikolsky-.",
      "High-risk HLA associations: carbamazepine + HLA-B*15:02 (Southeast Asian); allopurinol + HLA-B*58:01 (Han Chinese/Thai); abacavir + HLA-B*57:01 (all populations).",
      "Management: burn unit care, fluid/electrolyte resuscitation, wound care, IVIG or cyclosporine (evidence limited). Stop culprit drug immediately.",
      "SCORTEN ≥5 = >90% mortality — ICU/burn unit mandatory."
    ]
  }
};