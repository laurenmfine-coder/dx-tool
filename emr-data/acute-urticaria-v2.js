/* emr-data/acute-urticaria-v2.js — Variation: Acute Urticaria */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Jasmine Cooper",
  "patientHPI": "My daughter broke out in these bumpy red patches all over her body three days ago - they come and go and move around to different spots. She had a cold with a runny nose last week, but we haven't given her any new foods or medicines.",
      "dob": "10/24/2021",
      "age": "5",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-807598",
      "language": "English",
      "race": "Black/African American",
      "phone": "(503) 555-2421",
      "email": "jasmine.x@email.com",
      "address": "4164 Hollyhock Rd, Kansas City, MO 64123",
      "insurance": "Medicaid",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(505) 555-2562",
        "relationship": "Parent"
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
      }
    ],
    "familyHistory": [
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Context",
        "Post-viral urticaria — parents think it's food allergy and want extensive testing"
      ],
      [
        "Viral illness",
        "URI 5 days ago, now diffuse hives for 3 days"
      ],
      [
        "Parental anxiety",
        "Parents restricting diet to rice and chicken — unnecessary food restriction"
      ],
      [
        "Issue",
        "Overdiagnosis — post-viral urticaria does NOT need allergy workup, but parents demanding it"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "5yo with diffuse hives x3 days after viral URI — parents insist it's a food allergy, want \"full allergy panel\"",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acute urticaria — post-viral (most common cause in children)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "No angioedema, no systemic symptoms — benign course",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Parental anxiety — restricting diet unnecessarily, demanding allergy testing",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Teaching moment: post-viral urticaria ≠ food allergy, and \"allergy panels\" are harmful when pre-test probability is low",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cetirizine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily x2 weeks",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Diphenhydramine",
          "dose": "12.5mg",
          "route": "PO",
          "frequency": "Q6H PRN breakthrough",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "108",
          "rr": "20",
          "temp": "37.2°C",
          "spo2": "99%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-487859",
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
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "5yo with diffuse hives x3 days after viral URI — parents insist it's a food allergy, want \"full allergy panel\"",
          "hpi": "5F with diffuse wheals for 3 days. Had viral URI (runny nose, low-grade fever) 5 days ago. No new foods, no medications, no insect stings. Hives wax and wane, individual wheals last <24 hours. NO angioedema. Parents have restricted diet to rice and chicken — \"we're trying to figure out what she's allergic to.\" Requesting \"full allergy panel.\" THIS IS POST-VIRAL URTICARIA — the most common cause of acute urticaria in children. Ordering broad food allergy panels in this context is HARMFUL: false positives lead to unnecessary food restrictions, nutritional deficiency, and food anxiety. The right answer is: cetirizine for 2 weeks, normal diet, no testing needed.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "N/A — outpatient",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Outpatient only",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "96",
          "rr": "18",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-414082",
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
          "cc": "N/A — outpatient",
          "hpi": "Outpatient only.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — parental education, avoid unnecessary allergy testing, restore normal diet",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Post-viral urticaria — NOT food allergy",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Inappropriate diet restriction by parents — child losing weight, nutritional risk",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Harm of unnecessary allergy testing — false positives lead to real food restriction",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Counseling: post-viral urticaria resolves in 1-6 weeks with antihistamines",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cetirizine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily x2-4 weeks then stop",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Normal diet resumed",
          "dose": "",
          "route": "",
          "frequency": "All foods reintroduced — no restrictions needed",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "100",
          "rr": "18",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-326263",
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
          "cc": "A/I consult — parental education, avoid unnecessary allergy testing, restore normal diet",
          "hpi": "A/I: 5F with clear post-viral urticaria. Counseled parents extensively: (1) Hives after viral illness are IMMUNE-mediated (not food-mediated), (2) Restricting foods is unnecessary and potentially harmful — child needs full nutrition, (3) \"Allergy panels\" ordered without clinical indication have >50% false positive rates — would lead to MORE unnecessary restriction, (4) This will resolve in 1-6 weeks. Parents initially resistant but eventually understood. All foods reintroduced. If hives persist >6 weeks → reclassify as chronic urticaria and reconsider workup at that point.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — urticaria resolved, normal diet restored, no allergy testing was needed",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Post-viral urticaria — completely resolved at 3 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Normal diet — no food restrictions",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Parents satisfied — educated on when allergy testing IS appropriate",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "No allergy testing was done — prevented unnecessary false-positive cascade",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "96",
          "rr": "18",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-579427",
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
          "cc": "Follow-up — urticaria resolved, normal diet restored, no allergy testing was needed",
          "hpi": "5F hives completely resolved by 3 weeks. Eating all foods normally. Parents now understand the difference between post-viral urticaria and food allergy. They agreed that NOT testing was the right call — a neighbor's child had a \"positive allergy panel\" after similar hives and has been avoiding 5 foods for 2 years based on false positives. Important teaching: the best test is sometimes no test.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Jasmine Cooper",
    "dob": "10/24/2021",
    "age": "5",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-807598",
    "language": "English",
    "race": "Black/African American",
    "phone": "(404) 555-3303",
    "email": "jasmine.x@email.com",
    "address": "4475 Juniper Dr, Memphis, TN 38127",
    "insurance": "Medicaid",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(615) 555-6301",
      "relationship": "Parent"
    },
    "chiefComplaint": "5yo with diffuse hives x3 days after viral URI — parents insist it's a food allergy, want \"full allergy panel\"",
    "diagnosis": "Acute Urticaria"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Acute urticaria — post-viral (most common cause in children)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "No angioedema, no systemic symptoms — benign course",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Parental anxiety — restricting diet unnecessarily, demanding allergy testing",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Teaching moment: post-viral urticaria ≠ food allergy, and \"allergy panels\" are harmful when pre-test probability is low",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Cetirizine",
      "dose": "5mg",
      "route": "PO",
      "frequency": "Daily x2 weeks",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Diphenhydramine",
      "dose": "12.5mg",
      "route": "PO",
      "frequency": "Q6H PRN breakthrough",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "N/A",
      "hr": "108",
      "rr": "20",
      "temp": "37.2°C",
      "spo2": "99%",
      "pain": "N/A/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "5yo with diffuse hives x3 days after viral URI — parents insist it's a food allergy, want \"full allergy panel\"",
      "hpi": "5F with diffuse wheals for 3 days. Had viral URI (runny nose, low-grade fever) 5 days ago. No new foods, no medications, no insect stings. Hives wax and wane, individual wheals last <24 hours. NO angioedema. Parents have restricted diet to rice and chicken — \"we're trying to figure out what she's allergic to.\" Requesting \"full allergy panel.\" THIS IS POST-VIRAL URTICARIA — the most common cause of acute urticaria in children. Ordering broad food allergy panels in this context is HARMFUL: false positives lead to unnecessary food restrictions, nutritional deficiency, and food anxiety. The right answer is: cetirizine for 2 weeks, normal diet, no testing needed.",
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
      "accession": "LAB-487859",
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
      "Post-viral urticaria — parents think it's food allergy and want extensive testing"
    ],
    [
      "Viral illness",
      "URI 5 days ago, now diffuse hives for 3 days"
    ],
    [
      "Parental anxiety",
      "Parents restricting diet to rice and chicken — unnecessary food restriction"
    ],
    [
      "Issue",
      "Overdiagnosis — post-viral urticaria does NOT need allergy workup, but parents demanding it"
    ]
  ]
,"references":[
  {
    "id": "EAACI-Urticaria-2022",
    "title": "EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
    "authors": "Zuberbier T, Abdul Latiff AH, et al.",
    "journal": "Allergy",
    "year": 2022,
    "doi": "10.1111/all.15090",
    "url": "https://onlinelibrary.wiley.com/doi/10.1111/all.15090",
    "openAccess": true,
    "validates": [
      "Wheals <24h = urticaria; >24h with bruising = biopsy for UV",
      "UAS7 scoring",
      "Step-up: sgAH → updose 4x → omalizumab → cyclosporine",
      "Post-viral urticaria in children: no allergy testing needed"
    ]
  }
],
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular",
        "Pulmonary",
        "Abdominal",
        "Extremities",
        "Skin",
        "Targeted exam"
    ],
    "examFindings": {
        "General appearance": "Finding consistent with this condition.",
        "Vital signs": "Finding consistent with this condition.",
        "Cardiovascular": "Finding consistent with this condition.",
        "Pulmonary": "Finding consistent with this condition.",
        "Abdominal": "Finding consistent with this condition.",
        "Extremities": "Finding consistent with this condition.",
        "Skin": "Finding consistent with this condition.",
        "Targeted exam": "Finding consistent with this condition."
    },
    "ddxTargets": [
        "this condition (correct)",
        "Most likely alternative",
        "Third differential",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for this condition.",
        "prematureClosure": "Complete your workup before narrowing focus.",
        "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Jasmine Cooper: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Jasmine is a tired but cooperative 5-year-old who seems uncomfortable from the itching but is not in distress. She answers questions simply and honestly, occasionally scratching at the raised bumps on her skin.",
    "interviewQuestions": [
        "When did you first notice the bumps on your skin?",
        "Can you show me where the bumps are on your body?",
        "Do the bumps itch or hurt?",
        "Have you been sick recently with a cold or fever?",
        "Have you eaten any new foods in the past week?",
        "Have you taken any new medicines recently?",
        "Do you have trouble breathing or swallowing?",
        "Is your face or lips swollen?",
        "Do the bumps stay in the same place or do they move around?",
        "Have you been stung by any bugs or bees?",
        "Have you used any new soaps, lotions, or detergents?",
        "Have you had bumps like this before?",
        "What medicines are you taking now for the bumps?"
    ],
    "patientResponses": {
        "default": "I don't understand what you mean. Can you ask me differently?",
        "onset": "The bumps started three days ago. They came up all over and were really itchy.",
        "character": "They're raised bumps that are red and really itchy. They look like mosquito bites but bigger.",
        "location": "They're all over - on my arms, legs, back, and tummy. They move around to different places.",
        "severity": "The itching is about a 7 out of 10. It's really bothering me and I can't stop scratching.",
        "aggravating": "They seem worse when I get warm or when I scratch them. They itch more at night.",
        "relieving": "The medicine mommy gives me helps a little bit. Cool baths make them feel better too.",
        "associated": "I don't have any other problems now. I was sick with a runny nose and felt hot a few days before the bumps came.",
        "denies": "My face isn't swollen and I can breathe fine. My throat doesn't hurt and I can swallow okay.",
        "history": "I've never had bumps like this before. This is the first time.",
        "medications": "Cetirizine; Diphenhydramine",
        "allergies": "NKDA",
        "family": "Nobody in my family gets bumps like this. Mommy and daddy don't have allergies.",
        "social": "I go to kindergarten. I haven't been around any new animals or been anywhere different lately."
    },
    "examManeuvers": [
        "Inspect skin for distribution and morphology of lesions",
        "Assess for angioedema of face, lips, and eyelids",
        "Examine oral cavity and throat",
        "Palpate neck for lymphadenopathy",
        "Auscultate lungs for wheezing",
        "Assess work of breathing and respiratory distress",
        "Check capillary refill and peripheral perfusion",
        "Assess overall appearance and level of distress",
        "Examine individual wheals for blanching",
        "Document vital signs stability"
    ],
    "examFindings": {
        "Inspect skin for distribution and morphology of lesions": "Multiple raised, erythematous wheals of varying sizes (0.5-3cm) distributed over trunk, arms, and legs. Individual lesions have pale centers with raised erythematous borders.",
        "Assess for angioedema of face, lips, and eyelids": "No facial, lip, or eyelid swelling. Normal facial symmetry.",
        "Examine oral cavity and throat": "Oral cavity and oropharynx appear normal without swelling or erythema.",
        "Palpate neck for lymphadenopathy": "No cervical lymphadenopathy palpated.",
        "Auscultate lungs for wheezing": "Clear breath sounds bilaterally without wheezing, stridor, or other adventitious sounds.",
        "Assess work of breathing and respiratory distress": "Normal work of breathing, no use of accessory muscles, speaking in full sentences.",
        "Check capillary refill and peripheral perfusion": "Capillary refill <2 seconds, warm extremities with good perfusion.",
        "Assess overall appearance and level of distress": "Alert, interactive child in no acute distress. Occasionally scratches at lesions but otherwise comfortable.",
        "Examine individual wheals for blanching": "Individual wheals blanch with pressure and have raised borders typical of urticaria.",
        "Document vital signs stability": "Vital signs stable and age-appropriate: HR 108, Temp 37.2°C, SpO2 99%."
    },
    "ddxTargets": [
        "Post-viral acute urticaria (correct diagnosis)",
        "Food-induced urticaria",
        "Contact dermatitis",
        "Anaphylaxis (must-not-miss diagnosis 1)",
        "Angioedema (must-not-miss diagnosis 2)",
        "Viral exanthem (common mimic 1)",
        "Insect bite reaction (common mimic 2)"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on parental concern about food allergy and ordering unnecessary extensive allergy testing despite low pre-test probability.",
        "prematureClosure": "Risk of stopping evaluation once hives are confirmed without considering post-viral etiology and inappropriately attributing to food allergy.",
        "availabilityBias": "Risk of overestimating food allergy likelihood due to parental anxiety and recent media attention to food allergies in children."
    },
    "coachPrompts": {
        "phase2": "Good start on your differential. As you interview this patient, pay particular attention to the timeline of symptoms and any recent illnesses. Also consider: what's the most common cause of acute urticaria in children? How does this differ from chronic urticaria?",
        "phase5": "Excellent history and physical. You've established this is acute urticaria without systemic symptoms. Now think critically: what does the timeline tell you about the likely trigger? The parents want extensive allergy testing - is this indicated given your findings?",
        "finalDebrief": "This case highlights post-viral acute urticaria, the most common cause of hives in children. The key teaching points: 1) Temporal relationship between viral URI and hives, 2) Acute urticaria (<6 weeks) rarely needs extensive workup, 3) 'Allergy panels' have poor specificity and lead to unnecessary dietary restrictions when pre-test probability is low. How will you counsel the parents about avoiding overdiagnosis while addressing their concerns?"
    }
}
};
