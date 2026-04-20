
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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "chiefComplaint": "Widespread blistering rash with mucosal involvement \u2014 18% BSA detachment",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Seizure disorder \u2014 started lamotrigine 3 weeks ago",
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
          "temp": "39.4\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "Widespread blistering rash with mucosal involvement \u2014 18% BSA detachment",
          "hpi": "Ananya Patel is a 25-year-old female presenting with widespread blistering rash with mucosal involvement \u2014 18% bsa detachment. Past medical history includes Seizure disorder \u2014 started lamotrigine 3 weeks ago. See chart for full details.",
          "exam": "See physical examination documentation.",
          "assessment": "SJS/TEN Overlap \u2014 clinical presentation and workup consistent with diagnosis.",
          "plan": "See orders and management plan."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Transfer to burn unit for SJS/TEN overlap \u2014 mucosal involvement",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Seizure disorder \u2014 started lamotrigine 3 weeks ago",
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
          "temp": "38.4\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "Transfer to burn unit for SJS/TEN overlap \u2014 mucosal involvement",
          "hpi": "Ananya Patel \u2014 Transfer to burn unit for SJS/TEN overlap \u2014 mucosal involvement",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 culprit drug identification, HLA testing consideration",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Seizure disorder \u2014 started lamotrigine 3 weeks ago",
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
          "temp": "37.4\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "A/I consult \u2014 culprit drug identification, HLA testing consideration",
          "hpi": "Ananya Patel \u2014 A/I consult \u2014 culprit drug identification, HLA testing consideration",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up 6 weeks post-SJS/TEN \u2014 ophthalmology co-management, scar assessment",
        "diagnosis": "SJS/TEN Overlap"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Seizure disorder \u2014 started lamotrigine 3 weeks ago",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "Follow-up 6 weeks post-SJS/TEN \u2014 ophthalmology co-management, scar assessment",
          "hpi": "Ananya Patel \u2014 Follow-up 6 weeks post-SJS/TEN \u2014 ophthalmology co-management, scar assessment",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Alejandro Patel",
      "phone": "(505) 555-9785",
      "relationship": "Parent"
    },
    "chiefComplaint": "Widespread blistering rash with mucosal involvement \u2014 18% BSA detachment",
    "diagnosis": "SJS/TEN Overlap"
  },
  "problems": [
    {
      "problem": "Stevens-Johnson syndrome \u2014 carbamazepine, <10% BSA",
      "icd": "L51.1",
      "onset": "2024",
      "status": "Active",
      "notes": "David Wong, 31M \u2014 carbamazepine started 5 weeks ago. Oral and conjunctival erosions, atypical targets, 7% BSA detachment."
    },
    {
      "problem": "Carbamazepine \u2014 high-risk aromatic anticonvulsant for SJS/TEN",
      "icd": "L51.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Carbamazepine and HLA-B*15:02 (Southeast Asian populations) \u2014 very strong association with SJS/TEN. Genetic screening now recommended before use."
    },
    {
      "problem": "Alternative anticonvulsant needed \u2014 non-aromatic ring compound",
      "icd": "G40.909",
      "onset": "2024",
      "status": "Active",
      "notes": "Carbamazepine, phenytoin, phenobarbital, oxcarbazepine (aromatic ring, cross-reactive) \u2014 ALL must be avoided. Levetiracetam or valproate as alternatives."
    }
  ],
  "medications": [
    {
      "name": "STOP carbamazepine \u2014 permanent discontinuation",
      "sig": "Document allergy. Aromatic anticonvulsant cross-reactivity \u2014 avoid carbamazepine, phenytoin, phenobarbital, oxcarbazepine.",
      "prescriber": "Neurology/Dermatology",
      "start": "DISCONTINUE",
      "refills": 0,
      "status": "DISCONTINUED"
    },
    {
      "name": "Levetiracetam 500mg BID \u2014 replace carbamazepine",
      "sig": "Non-aromatic anticonvulsant \u2014 safe alternative. No cross-reactivity with carbamazepine-induced SJS.",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 replacement"
    },
    {
      "name": "Cyclosporine 3mg/kg/day \u2014 adjunct for SJS",
      "sig": "T-cell inhibitor \u2014 adjunct for mucosal SJS. Monitor renal function and blood pressure.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ophthalmology \u2014 urgent conjunctival assessment",
      "sig": "Pseudomembrane removal, lubricating drops, amniotic membrane if severe.",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 urgent consult"
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
      "temp": "39.4\u00b0C",
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
      "cc": "Widespread blistering rash with mucosal involvement \u2014 18% BSA detachment",
      "hpi": "Ananya Patel is a 25-year-old female presenting with widespread blistering rash with mucosal involvement \u2014 18% bsa detachment. Past medical history includes Seizure disorder \u2014 started lamotrigine 3 weeks ago. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "SJS/TEN Overlap \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "SJS Workup",
      "results": [
        {
          "test": "BSA detachment",
          "value": "7",
          "unit": "%",
          "ref": "<10% = SJS",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "4.8",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": ""
        },
        {
          "test": "Eosinophils",
          "value": "0.6",
          "unit": "K/\u03bcL",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "HLA-B*15:02 testing",
          "value": "Positive",
          "unit": "",
          "ref": "Negative in European populations",
          "flag": "H"
        },
        {
          "test": "Albumin",
          "value": "3.2",
          "unit": "g/dL",
          "ref": "3.5-5.0",
          "flag": "L"
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
    "patientPersona": "Ananya appears anxious and in significant distress, speaking softly due to painful oral lesions. She is cooperative but frightened by the severity of her skin condition and is very concerned about her appearance and prognosis.",
    "interviewQuestions": [
      "When did you first notice the rash and how did it start?",
      "Can you describe what the rash looks like and how it has changed?",
      "Are you having any pain or burning with the rash?",
      "Do you have any sores or pain in your mouth, eyes, or genital area?",
      "Have you started any new medications recently?",
      "When exactly did you start the lamotrigine and how was the dose increased?",
      "Have you had any fever, chills, or feeling unwell?",
      "Are you having any difficulty swallowing or eating?",
      "Have you ever had a reaction like this before?",
      "Have you been exposed to any new soaps, detergents, or chemicals?",
      "Is there any family history of severe drug reactions?",
      "Are you taking any other medications or supplements?",
      "Do you have any known drug allergies?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean. Could you ask that differently? My mouth really hurts when I talk.",
      "onset": "It started about 4 days ago with what looked like a bad sunburn on my chest, then quickly spread everywhere with these awful blisters.",
      "character": "The skin feels like it's burning and the blisters are filled with fluid. When they break, the skin just peels off in sheets. My mouth has these painful sores.",
      "location": "It's everywhere - my face, chest, back, arms, legs. The worst parts are my mouth, lips, and around my eyes. Even my genital area is affected.",
      "severity": "The pain is probably an 8 out of 10. I can barely eat or drink because my mouth hurts so much, and any movement makes my skin feel like it's on fire.",
      "aggravating": "Any touch or movement makes it worse. Even the hospital gown rubbing against my skin is agony.",
      "relieving": "Nothing really helps. Cool compresses give a tiny bit of relief but not much.",
      "associated": "I've had fever and chills for the past two days, and I feel weak and dizzy. My eyes are red and painful, and it hurts to swallow.",
      "denies": "No joint pain, no breathing problems, no rash before this episode. I haven't been sick with a cold or infection recently.",
      "history": "Never had anything like this before. I've had my seizure disorder for two years but never had skin problems.",
      "medications": "Lamotrigine; Levetiracetam",
      "allergies": "Penicillin",
      "family": "No family history of drug allergies or severe skin reactions that I know of.",
      "social": "I work as a graphic designer, mostly from home. I don't smoke, drink maybe a glass of wine occasionally, no illegal drugs. I was doing well until this rash started."
    },
    "examManeuvers": [
      "Inspect skin for distribution and morphology of lesions",
      "Assess body surface area involvement",
      "Examine oral mucosa and lips",
      "Examine conjunctiva and ocular involvement",
      "Check for Nikolsky sign",
      "Examine genital mucosa",
      "Assess hydration status and skin turgor",
      "Palpate lymph nodes",
      "Cardiovascular examination",
      "Pulmonary examination"
    ],
    "examFindings": {
      "Inspect skin for distribution and morphology of lesions": "Widespread erythematous patches with flaccid bullae and areas of epidermal detachment. Target-like lesions on trunk with dusky centers.",
      "Assess body surface area involvement": "Approximately 18% body surface area with epidermal detachment, involving face, trunk, and extremities.",
      "Examine oral mucosa and lips": "Severe erosions and ulcerations of oral mucosa, lips with hemorrhagic crusting, difficulty opening mouth fully.",
      "Examine conjunctiva and ocular involvement": "Bilateral conjunctival erythema and erosions, no corneal involvement noted.",
      "Check for Nikolsky sign": "Positive Nikolsky sign - gentle lateral pressure causes epidermis to separate.",
      "Examine genital mucosa": "Erosions present on vulvar mucosa with fibrinous exudate.",
      "Assess hydration status and skin turgor": "Signs of dehydration with poor skin turgor, dry mucous membranes.",
      "Palpate lymph nodes": "No significant lymphadenopathy palpated.",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, weak pulses consistent with dehydration.",
      "Pulmonary examination": "Clear breath sounds bilaterally, no respiratory distress."
    },
    "ddxTargets": [
      "SJS \u2014 carbamazepine, HLA-B*15:02, mucosal involvement (correct)",
      "TEN \u2014 BSA 7% is SJS range (<10%); monitor for progression",
      "EM major \u2014 true 3-zone target lesions; SJS has flat atypical targets",
      "DRESS \u2014 eosinophilia present but no multiorgan failure; look for overlap; skin detachment distinguishes",
      "Fixed drug eruption \u2014 localized, recurrent; not generalized with mucosal involvement",
      "Viral exanthem \u2014 no mucosal erosions, no detachment, no atypical targets"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'rash' and consider common dermatologic conditions rather than recognizing the severity suggesting SJS/TEN",
      "prematureClosure": "Might stop at 'drug reaction' without recognizing the life-threatening nature and need for immediate dermatology/burn unit consultation",
      "availabilityBias": "May think of more common skin conditions like eczema or contact dermatitis rather than the less common but serious SJS/TEN"
    },
    "coachPrompts": {
      "phase2": "You've identified some key differentials for blistering rash. What specific historical details about medication timing and the progression of skin findings would help you narrow this list? What questions about mucosal involvement are critical here?",
      "phase5": "Now that you've noted the extensive epidermal detachment, mucosal involvement, and recent lamotrigine initiation, how does this constellation of findings refine your differential? What is the significance of 18% BSA involvement in your diagnostic thinking?",
      "finalDebrief": "This case illustrates classic SJS/TEN from lamotrigine with rapid uptitration. How did the triad of mucosal involvement, epidermal detachment, and recent high-risk drug exposure guide your diagnosis? What made you consider or dismiss other blistering disorders along the way?",
      "final": "Diagnosis: SJS \u2014 carbamazepine, HLA-B*15:02. Key learning: (1) HLA-B*15:02 and carbamazepine: HLA-B*15:02 allele is present in ~5-10% of Southeast and East Asian populations (Han Chinese, Thai, Malaysian, Filipino, Vietnamese). Carriers have >10x risk of SJS/TEN with carbamazepine. The FDA mandates HLA-B*15:02 testing before carbamazepine in patients of Asian ancestry. Negative test does not eliminate risk but significantly reduces it. (2) HLA-B*58:01: also relevant for allopurinol SJS/TEN in Asian populations. Two actionable pharmacogenomic tests in dermatology. (3) BSA monitoring: SJS patients require daily BSA assessment \u2014 progression from <10% to >30% can occur rapidly. Monitor for Nikolsky sign spread. ICU transfer if BSA expanding or systemic deterioration. (4) Aromatic anticonvulsant cross-reactivity: the aromatic ring structure (benzene ring in carbamazepine, phenytoin, phenobarbital) is the immunogenic epitope. Cross-reactivity among these three drugs is 40-80%. Oxcarbazepine has a similar structure \u2014 also typically avoided. Safe non-aromatic alternatives: levetiracetam, valproate, lamotrigine (paradoxically can cause SJS but different mechanism \u2014 slower titration reduces risk), gabapentin. (5) Oral and ocular care: oral: rinse with saline, topical anesthetic mouthwash, avoid trauma. Ocular: pseudomembrane removal with glass rod by ophthalmology, lubricating drops q1-2h, amniotic membrane if corneal involvement. Preventing ocular scarring is a major management priority."
    }
  },
  "meta": {
    "diagnosis": "SJS \u2014 Carbamazepine, Mucosal Involvement, Hospital Management and Allergy Evaluation",
    "caseId": "sjsten-overlap"
  }
};
