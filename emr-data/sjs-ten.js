/* emr-data/sjs-ten.js — Multi-Setting Allergy Case: SJS/TEN */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Marcus Brown",
      "patientHPI": "Two weeks ago I started taking a new gout medication, and now I have this awful rash that's spreading and my skin is coming off in places - I also have a fever and feel really sick overall.",
      "dob": "09/12/1970",
      "age": "56",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-941221",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(313) 555-4044",
      "email": "keisha.brown@email.com",
      "address": "9433 Cedar Blvd, Albuquerque, NM 87102",
      "insurance": "BlueCross BlueShield PPO",
      "pcp": "Dr. Michelle Foster, MD",
      "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
      "emergencyContact": {
        "name": "Donna Brown",
        "phone": "(313) 555-2113",
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
    "phone": "(704) 555-4853",
    "email": "keisha.brown@email.com",
    "address": "6969 Larkspur Ln, Louisville, KY 40205",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Michelle Foster, MD",
    "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "Donna Brown",
      "phone": "(505) 555-2964",
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
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus appears visibly distressed and anxious about his rapidly worsening skin condition. He is very forthcoming with information and eager to get help, frequently mentioning his concern about the painful blisters and whether this could be related to his new gout medication.",
    "interviewQuestions": [
      "Can you describe exactly when and how this rash started?",
      "What did the rash look like initially compared to now?",
      "Where on your body did it first appear and how has it spread?",
      "Are you experiencing any mouth sores, eye irritation, or genital lesions?",
      "What does the pain feel like and how severe is it on a scale of 1-10?",
      "Have you had any difficulty swallowing or eating?",
      "What medications are you currently taking?",
      "Do you have any known drug allergies?",
      "Have you ever had genetic testing done, particularly HLA typing?",
      "What is your ethnic background?",
      "Have you had any similar skin reactions in the past?",
      "Are you experiencing chills, fatigue, or feeling generally unwell?",
      "Have any family members had severe drug reactions?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Can you explain that differently? I'm really worried about this rash.",
      "onset": "It started about 10 days ago, just a few days after I began taking that new gout medicine, allopurinol. First it was just some red spots on my chest, but it's gotten much worse.",
      "character": "The rash is extremely painful, like burning pain. The skin is blistering and peeling off in sheets. It's the most painful thing I've ever experienced.",
      "location": "It started on my chest and back, but now it's spread to my arms, face, and even inside my mouth. The worst areas are my torso and face.",
      "severity": "The pain is easily a 9 out of 10. I can barely move without agony, and eating is almost impossible because of the mouth sores.",
      "aggravating": "Any movement or touching the skin makes it worse. Even wearing clothes is excruciating.",
      "relieving": "Nothing really helps. Cool compresses provide minimal relief for a few minutes, but that's it.",
      "associated": "I have a high fever, chills, and feel completely exhausted. My mouth and lips have painful sores, and my eyes are red and irritated.",
      "denies": "No nausea, vomiting, diarrhea, or shortness of breath. No joint pain right now, which is unusual for my gout.",
      "history": "I've never had anything like this before. I've had plenty of gout flares, but nothing involving my skin.",
      "medications": "Allopurinol; Colchicine",
      "allergies": "NKDA",
      "family": "No family history of severe drug reactions or skin conditions that I know of.",
      "social": "I'm a retired accountant. I'm of Southeast Asian descent - my parents immigrated from Thailand. I've never smoked and rarely drink alcohol."
    },
    "examManeuvers": [
      "Skin examination of affected areas",
      "Mucous membrane examination",
      "Ophthalmologic examination",
      "Assessment of body surface area involvement",
      "Nikolsky sign testing",
      "Lymph node palpation",
      "Vital signs assessment",
      "General appearance and toxicity assessment",
      "Examination of palms and soles",
      "Assessment for target lesions"
    ],
    "examFindings": {
      "Skin examination of affected areas": "Extensive erythematous rash with confluent areas of epidermal necrosis and detachment involving approximately 35% of body surface area, particularly chest, back, arms, and face",
      "Mucous membrane examination": "Severe erosive lesions of oral mucosa, lips with hemorrhagic crusting, and conjunctival erythema with pseudomembrane formation",
      "Ophthalmologic examination": "Bilateral conjunctival injection with purulent discharge and early pseudomembrane formation",
      "Assessment of body surface area involvement": "Approximately 35% total body surface area involved with epidermal detachment",
      "Nikolsky sign testing": "Positive Nikolsky sign - lateral pressure causes extension of blistering and skin sloughing",
      "Lymph node palpation": "Mild cervical and axillary lymphadenopathy",
      "Vital signs assessment": "Tachycardia 112 bpm, fever 39.2°C, mild hypotension 108/62, adequate oxygen saturation 96%",
      "General appearance and toxicity assessment": "Patient appears acutely ill and toxic, in obvious distress",
      "Examination of palms and soles": "Palmar and plantar surfaces show early erythema but minimal desquamation",
      "Assessment for target lesions": "No classic target lesions identified; rash is predominantly confluent erythema with necrosis"
    },
    "ddxTargets": [
      "Stevens-Johnson Syndrome/Toxic Epidermal Necrolysis (correct diagnosis)",
      "Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS)",
      "Erythema multiforme major",
      "Staphylococcal scalded skin syndrome",
      "Necrotizing fasciitis",
      "Severe contact dermatitis",
      "Bullous pemphigoid"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'drug rash' and not recognizing the life-threatening nature of SJS/TEN, or attributing symptoms to gout flare",
      "prematureClosure": "Risk of stopping at 'allergic reaction' without considering the severity and specific syndrome of SJS/TEN requiring immediate intervention",
      "availabilityBias": "May think of more common drug rashes or contact dermatitis rather than the rare but serious SJS/TEN, especially given recent allopurinol initiation"
    },
    "coachPrompts": {
      "phase2": "I see you're considering drug-related causes given the recent allopurinol initiation. What specific features in this presentation would help you differentiate between a simple drug rash versus something more serious? Consider the patient's ethnicity and what you know about allopurinol pharmacogenomics.",
      "phase5": "Now that you've gathered your history and physical findings, what concerns you most about this presentation? How does the extent of skin involvement, mucous membrane findings, and systemic symptoms guide your thinking about severity and urgency of management?",
      "finalDebrief": "This case highlights the importance of pharmacogenomic screening, particularly HLA-B*5801 testing in Southeast Asian patients before starting allopurinol. SJS/TEN is a dermatologic emergency with high mortality. How did the evolution of your differential diagnosis change as you gathered more information about the extent of involvement and mucous membrane findings?"
    }
  }
};
