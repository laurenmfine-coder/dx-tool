/* emr-data/sjsten-overlap.js — Multi-Setting Allergy Case: SJS/TEN Overlap */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Ananya Patel",
  "patientHPI": "Three weeks ago I started a new seizure medication and now I have this terrible blistering rash all over my body - my skin is peeling off in large areas and I have painful sores in my mouth that make it hard to eat or drink.",
      "dob": "05/11/2001",
      "age": "25",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-446725",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(415) 555-2137",
      "email": "ananya.patel@email.com",
      "address": "5525 Birch Ln, Louisville, KY 40204",
      "insurance": "Oscar Health",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Alejandro Patel",
        "phone": "(803) 555-5573",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Rash",
        "severity": "Mild",
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
        "Medication timeline",
        "Lamotrigine started 3 weeks ago with too-rapid uptitration"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Widespread blistering rash with mucosal involvement — 18% BSA detachment",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Seizure disorder — started lamotrigine 3 weeks ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lamotrigine",
          "dose": "50mg",
          "route": "PO",
          "frequency": "Daily (uptitrating)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Levetiracetam",
          "dose": "1000mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Raj Patel, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/01/2026",
          "time": "07:45",
          "bp": "98/58",
          "hr": "118",
          "rr": "22",
          "temp": "39.4°C",
          "spo2": "95%",
          "pain": "10/10",
          "bmi": "33",
          "weight": "60 kg"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-753551",
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
                  "value": "2.8",
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
                  "value": "1.4",
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
                  "test": "Albumin",
                  "value": "2.4",
                  "unit": "g/dL",
                  "range": "3.5-5.5",
                  "flag": "L"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-ed",
          "type": "Emergency Visit",
          "date": "03/01/2026",
          "provider": "Dr. ED Attending",
          "cc": "Widespread blistering rash with mucosal involvement — 18% BSA detachment",
          "hpi": "Ananya Patel is a 25-year-old female presenting with widespread blistering rash with mucosal involvement — 18% bsa detachment. Past medical history includes Seizure disorder — started lamotrigine 3 weeks ago. See chart for full details.",
          "exam": "See physical examination documentation.",
          "assessment": "SJS/TEN Overlap — clinical presentation and workup consistent with diagnosis.",
          "plan": "See orders and management plan."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Transfer to burn unit for SJS/TEN overlap — mucosal involvement",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Seizure disorder — started lamotrigine 3 weeks ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lamotrigine",
          "dose": "50mg",
          "route": "PO",
          "frequency": "Daily (uptitrating)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Levetiracetam",
          "dose": "1000mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Raj Patel, MD"
        },
        {
          "id": "med-add-1",
          "name": "IVIG",
          "dose": "0.4g/kg/day",
          "route": "IV",
          "frequency": "Daily x3 days",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "102/64",
          "hr": "108",
          "rr": "20",
          "temp": "38.4°C",
          "spo2": "96%",
          "pain": "8/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-753551",
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
                  "value": "2.8",
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
                  "value": "1.4",
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
                  "test": "Albumin",
                  "value": "2.4",
                  "unit": "g/dL",
                  "range": "3.5-5.5",
                  "flag": "L"
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
          "cc": "Transfer to burn unit for SJS/TEN overlap — mucosal involvement",
          "hpi": "Ananya Patel — Transfer to burn unit for SJS/TEN overlap — mucosal involvement",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — culprit drug identification, HLA testing consideration",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Seizure disorder — started lamotrigine 3 weeks ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lamotrigine",
          "dose": "50mg",
          "route": "PO",
          "frequency": "Daily (uptitrating)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Levetiracetam",
          "dose": "1000mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Raj Patel, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "110/68",
          "hr": "88",
          "rr": "16",
          "temp": "37.4°C",
          "spo2": "98%",
          "pain": "5/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-753551",
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
                  "value": "2.8",
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
                  "value": "1.4",
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
                  "test": "Albumin",
                  "value": "2.4",
                  "unit": "g/dL",
                  "range": "3.5-5.5",
                  "flag": "L"
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
          "cc": "A/I consult — culprit drug identification, HLA testing consideration",
          "hpi": "Ananya Patel — A/I consult — culprit drug identification, HLA testing consideration",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up 6 weeks post-SJS/TEN — ophthalmology co-management, scar assessment",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Seizure disorder — started lamotrigine 3 weeks ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
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
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-753551",
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
                  "value": "2.8",
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
                  "value": "1.4",
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
                  "test": "Albumin",
                  "value": "2.4",
                  "unit": "g/dL",
                  "range": "3.5-5.5",
                  "flag": "L"
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
          "cc": "Follow-up 6 weeks post-SJS/TEN — ophthalmology co-management, scar assessment",
          "hpi": "Ananya Patel — Follow-up 6 weeks post-SJS/TEN — ophthalmology co-management, scar assessment",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Ananya Patel",
    "dob": "05/11/2001",
    "age": "25",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-446725",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(504) 555-9346",
    "email": "ananya.patel@email.com",
    "address": "9613 Cottonwood Ave, Detroit, MI 48202",
    "insurance": "Oscar Health",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Alejandro Patel",
      "phone": "(505) 555-9785",
      "relationship": "Parent"
    },
    "chiefComplaint": "Widespread blistering rash with mucosal involvement — 18% BSA detachment",
    "diagnosis": "SJS/TEN Overlap"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Seizure disorder — started lamotrigine 3 weeks ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Lamotrigine",
      "dose": "50mg",
      "route": "PO",
      "frequency": "Daily (uptitrating)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Levetiracetam",
      "dose": "1000mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Raj Patel, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Rash",
      "severity": "Mild",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "98/58",
      "hr": "118",
      "rr": "22",
      "temp": "39.4°C",
      "spo2": "95%",
      "pain": "10/10",
      "bmi": "33",
      "weight": "60 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Widespread blistering rash with mucosal involvement — 18% BSA detachment",
      "hpi": "Ananya Patel is a 25-year-old female presenting with widespread blistering rash with mucosal involvement — 18% bsa detachment. Past medical history includes Seizure disorder — started lamotrigine 3 weeks ago. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "SJS/TEN Overlap — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-753551",
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
              "value": "2.8",
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
              "value": "1.4",
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
              "test": "Albumin",
              "value": "2.4",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": "L"
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
      "Medication timeline",
      "Lamotrigine started 3 weeks ago with too-rapid uptitration"
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
