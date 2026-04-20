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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "Post-viral urticaria \u2014 parents think it's food allergy and want extensive testing"
      ],
      [
        "Viral illness",
        "URI 5 days ago, now diffuse hives for 3 days"
      ],
      [
        "Parental anxiety",
        "Parents restricting diet to rice and chicken \u2014 unnecessary food restriction"
      ],
      [
        "Issue",
        "Overdiagnosis \u2014 post-viral urticaria does NOT need allergy workup, but parents demanding it"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "5yo with diffuse hives x3 days after viral URI \u2014 parents insist it's a food allergy, want \"full allergy panel\"",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acute urticaria \u2014 post-viral (most common cause in children)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "No angioedema, no systemic symptoms \u2014 benign course",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Parental anxiety \u2014 restricting diet unnecessarily, demanding allergy testing",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Teaching moment: post-viral urticaria \u2260 food allergy, and \"allergy panels\" are harmful when pre-test probability is low",
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
          "temp": "37.2\u00b0C",
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
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "5yo with diffuse hives x3 days after viral URI \u2014 parents insist it's a food allergy, want \"full allergy panel\"",
          "hpi": "5F with diffuse wheals for 3 days. Had viral URI (runny nose, low-grade fever) 5 days ago. No new foods, no medications, no insect stings. Hives wax and wane, individual wheals last <24 hours. NO angioedema. Parents have restricted diet to rice and chicken \u2014 \"we're trying to figure out what she's allergic to.\" Requesting \"full allergy panel.\" THIS IS POST-VIRAL URTICARIA \u2014 the most common cause of acute urticaria in children. Ordering broad food allergy panels in this context is HARMFUL: false positives lead to unnecessary food restrictions, nutritional deficiency, and food anxiety. The right answer is: cetirizine for 2 weeks, normal diet, no testing needed.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "N/A \u2014 outpatient",
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
          "temp": "36.8\u00b0C",
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
          "cc": "N/A \u2014 outpatient",
          "hpi": "Outpatient only.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 parental education, avoid unnecessary allergy testing, restore normal diet",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Post-viral urticaria \u2014 NOT food allergy",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Inappropriate diet restriction by parents \u2014 child losing weight, nutritional risk",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Harm of unnecessary allergy testing \u2014 false positives lead to real food restriction",
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
          "frequency": "All foods reintroduced \u2014 no restrictions needed",
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
          "temp": "36.8\u00b0C",
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
          "cc": "A/I consult \u2014 parental education, avoid unnecessary allergy testing, restore normal diet",
          "hpi": "A/I: 5F with clear post-viral urticaria. Counseled parents extensively: (1) Hives after viral illness are IMMUNE-mediated (not food-mediated), (2) Restricting foods is unnecessary and potentially harmful \u2014 child needs full nutrition, (3) \"Allergy panels\" ordered without clinical indication have >50% false positive rates \u2014 would lead to MORE unnecessary restriction, (4) This will resolve in 1-6 weeks. Parents initially resistant but eventually understood. All foods reintroduced. If hives persist >6 weeks \u2192 reclassify as chronic urticaria and reconsider workup at that point.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up \u2014 urticaria resolved, normal diet restored, no allergy testing was needed",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Post-viral urticaria \u2014 completely resolved at 3 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Normal diet \u2014 no food restrictions",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Parents satisfied \u2014 educated on when allergy testing IS appropriate",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "No allergy testing was done \u2014 prevented unnecessary false-positive cascade",
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
          "temp": "36.8\u00b0C",
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
          "cc": "Follow-up \u2014 urticaria resolved, normal diet restored, no allergy testing was needed",
          "hpi": "5F hives completely resolved by 3 weeks. Eating all foods normally. Parents now understand the difference between post-viral urticaria and food allergy. They agreed that NOT testing was the right call \u2014 a neighbor's child had a \"positive allergy panel\" after similar hives and has been avoiding 5 foods for 2 years based on false positives. Important teaching: the best test is sometimes no test.",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(615) 555-6301",
      "relationship": "Parent"
    },
    "chiefComplaint": "5yo with diffuse hives x3 days after viral URI \u2014 parents insist it's a food allergy, want \"full allergy panel\"",
    "diagnosis": "Acute Urticaria"
  },
  "problems": [
    {
      "problem": "Acute urticaria \u2014 likely post-viral (rhinovirus URI 5 days prior)",
      "icd": "L50.0",
      "onset": "2024",
      "status": "Active",
      "notes": "5yo; diffuse hives x3 days starting 2 days after URI resolution; no angioedema, no anaphylaxis; food allergy evaluation negative"
    },
    {
      "problem": "Upper respiratory infection \u2014 resolved",
      "icd": "J06.9",
      "onset": "2024",
      "status": "Resolved",
      "notes": "Rhinovirus URI 5-7 days prior; fever x2 days, runny nose; resolved before hives started \u2014 post-viral urticaria pattern"
    },
    {
      "problem": "Parental concern for food allergy \u2014 addressed",
      "icd": "Z71.89",
      "onset": "2024",
      "status": "Addressed",
      "notes": "Parents believe peanut butter caused the hives; timeline does not support (ate PB 12h before hives); food allergy evaluation non-diagnostic"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 2.5mg daily (syrup, weight 18kg)",
      "sig": "Give 2.5mg by mouth once daily; may give 5mg for breakthrough symptoms; maximum 10mg/day",
      "prescriber": "Dr. Chen",
      "start": "11/2024",
      "refills": 1,
      "status": "Active \u2014 2-week course"
    },
    {
      "name": "Diphenhydramine 12.5mg q6h PRN (rescue)",
      "sig": "Give 12.5mg by mouth every 6 hours as needed for severe breakthrough itching only",
      "prescriber": "Dr. Chen",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 rescue"
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
      "temp": "37.2\u00b0C",
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
      "cc": "5yo with diffuse hives x3 days after viral URI \u2014 parents insist it's a food allergy, want \"full allergy panel\"",
      "hpi": "5F with diffuse wheals for 3 days. Had viral URI (runny nose, low-grade fever) 5 days ago. No new foods, no medications, no insect stings. Hives wax and wane, individual wheals last <24 hours. NO angioedema. Parents have restricted diet to rice and chicken \u2014 \"we're trying to figure out what she's allergic to.\" Requesting \"full allergy panel.\" THIS IS POST-VIRAL URTICARIA \u2014 the most common cause of acute urticaria in children. Ordering broad food allergy panels in this context is HARMFUL: false positives lead to unnecessary food restrictions, nutritional deficiency, and food anxiety. The right answer is: cetirizine for 2 weeks, normal diet, no testing needed.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/14/2024",
      "panel": "Acute Urticaria Workup",
      "results": [
        {
          "test": "CBC \u2014 WBC",
          "value": "11.2",
          "unit": "K/\u03bcL",
          "ref": "5.0-15.0",
          "flag": ""
        },
        {
          "test": "CBC \u2014 Eosinophils",
          "value": "0.3",
          "unit": "K/\u03bcL",
          "ref": "0.0-0.7",
          "flag": ""
        },
        {
          "test": "CMP",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "Peanut IgE (Ara h 2) \u2014 obtained for parental concern",
          "value": "<0.10",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": ""
        },
        {
          "test": "Total IgE",
          "value": "22",
          "unit": "IU/mL",
          "ref": "<50 (pediatric)",
          "flag": ""
        },
        {
          "test": "Rhinovirus/Enterovirus PCR (nasopharyngeal) \u2014 done for documentation",
          "value": "Rhinovirus detected (resolved infection, carrier)",
          "unit": "",
          "ref": "",
          "flag": ""
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
      "Post-viral urticaria \u2014 parents think it's food allergy and want extensive testing"
    ],
    [
      "Viral illness",
      "URI 5 days ago, now diffuse hives for 3 days"
    ],
    [
      "Parental anxiety",
      "Parents restricting diet to rice and chicken \u2014 unnecessary food restriction"
    ],
    [
      "Issue",
      "Overdiagnosis \u2014 post-viral urticaria does NOT need allergy workup, but parents demanding it"
    ]
  ],
  "references": [
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
        "Step-up: sgAH \u2192 updose 4x \u2192 omalizumab \u2192 cyclosporine",
        "Post-viral urticaria in children: no allergy testing needed"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Jasmine is a tired but cooperative 5-year-old who appears mildly uncomfortable from itching but is otherwise well-appearing. Her parents are visibly anxious, frequently interrupting to mention their concerns about food allergies and their insistence on comprehensive allergy testing.",
    "interviewQuestions": [
      "When did the hives first appear and how did they start?",
      "Has Jasmine been sick recently with any cold or viral symptoms?",
      "What do the hives look like and do they move around on her body?",
      "How long do individual hives last before disappearing?",
      "Has Jasmine had any swelling of her face, lips, or tongue?",
      "Has she eaten any new foods in the past week?",
      "Is she taking any new medications or vitamins?",
      "Has she been exposed to any new soaps, detergents, or pets?",
      "Does Jasmine have any trouble breathing or wheezing?",
      "Has she had hives like this before?",
      "What treatments have you tried and do they help?",
      "Are there any known food allergies in the family?",
      "How is Jasmine's energy level and appetite?"
    ],
    "patientResponses": {
      "default": "I'm not sure about that. The main thing is these hives appeared after her cold and we're worried it might be a food allergy.",
      "onset": "The hives started 3 days ago, about 2 days after her cold symptoms were getting better. They appeared all over her body pretty suddenly.",
      "character": "They're raised, red welts that are really itchy. They seem to come and go in different spots throughout the day.",
      "location": "They're everywhere - her trunk, arms, legs, and back. They move around and new ones appear while others fade away.",
      "severity": "The itching is about a 6 out of 10. She's uncomfortable but can still play and sleep with the antihistamines.",
      "aggravating": "They seem worse when she gets warm or excited. Scratching makes them look more red and irritated.",
      "relieving": "The Benadryl and Zyrtec help with the itching quite a bit. Cool baths also seem to provide some relief.",
      "associated": "She just got over a runny nose and low fever from a cold 5 days ago. No other symptoms right now.",
      "denies": "No facial swelling, no trouble breathing, no wheezing, no vomiting or diarrhea, and no fever with the hives.",
      "history": "She's never had hives before. She's generally a healthy kid with just the usual colds.",
      "medications": "Cetirizine; Diphenhydramine",
      "allergies": "NKDA",
      "family": "No known food allergies in the family. Her older brother gets eczema sometimes but no hives.",
      "social": "She goes to preschool where there was a cold going around last week. We haven't changed anything in her diet or household products."
    },
    "examManeuvers": [
      "General appearance and vital signs assessment",
      "Skin examination for urticarial lesions",
      "Assessment for angioedema of face, lips, and tongue",
      "Lymph node examination",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination",
      "Assessment of individual wheals for duration and characteristics"
    ],
    "examFindings": {
      "General appearance and vital signs assessment": "Well-appearing child, mildly uncomfortable from pruritus, afebrile, HR 108, normal for age",
      "Skin examination for urticarial lesions": "Multiple erythematous, raised wheals of varying sizes (0.5-3cm) scattered across trunk, extremities, and back",
      "Assessment for angioedema of face, lips, and tongue": "No facial, lip, or tongue swelling observed",
      "Lymph node examination": "No lymphadenopathy palpated",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs",
      "Pulmonary examination": "Clear to auscultation bilaterally, no wheezing or stridor",
      "Abdominal examination": "Soft, non-tender, no organomegaly",
      "Assessment of individual wheals for duration and characteristics": "Individual lesions blanch with pressure, none present >24 hours per parent report"
    },
    "ddxTargets": [
      "Post-viral acute urticaria \u2014 rhinovirus trigger; food allergy NOT confirmed (correct)",
      "IgE-mediated food allergy (peanut) \u2014 Ara h 2 IgE undetectable; timeline inconsistent with IgE reaction",
      "Serum sickness-like reaction \u2014 urticaria + fever + joint pain after antibiotic; check medication history",
      "Urticarial vasculitis \u2014 lesions >24h; painful; bruising; biopsy required; different from self-limited post-viral",
      "Allergic urticaria \u2014 new allergen exposure correlating with onset; not present here",
      "Drug reaction \u2014 review any new medications given for URI (amoxicillin, ibuprofen)"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on parents' insistence about food allergy and ordering unnecessary extensive allergy testing",
      "prematureClosure": "Risk of immediately attributing to food allergy without considering temporal relationship to recent viral illness",
      "availabilityBias": "May overestimate food allergy probability due to parental anxiety and recent cases of food allergies seen"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice the parents are quite concerned about food allergies. What key historical details will help you determine if this is truly food-related versus another cause? Think about timing and associated symptoms.",
      "phase5": "Excellent history and physical. You've noted the temporal relationship to the viral illness and absence of angioedema. How does this clinical picture fit with post-viral urticaria versus food allergy? What's your approach to the parents' request for extensive allergy testing?",
      "finalDebrief": "This case highlights post-viral urticaria, the most common cause of acute hives in children. Notice how your differential evolved from considering food allergies to recognizing the viral trigger. What did you learn about when allergy testing is appropriate versus potentially harmful?",
      "final": "Diagnosis: post-viral acute urticaria \u2014 rhinovirus trigger; peanut allergy NOT confirmed. Key teaching points: (1) Viral infections are the most common cause of acute urticaria in children under 10 \u2014 accounting for 40-50% of pediatric cases. Mechanism: viral-induced mast cell activation via complement and TLR pathways, not IgE. (2) Timeline reasoning for food allergy: IgE-mediated food allergy causes urticaria within 2 hours of exposure. A 12-hour interval between peanut butter ingestion and hive onset is NOT consistent with IgE-mediated food allergy. Educate parents on allergy timelines. (3) Extensive food allergy testing for acute urticaria without a compelling history has a high false-positive rate and leads to unnecessary dietary restriction. AAAAI guidelines do not recommend food allergy testing without clinical suspicion. (4) Acute vs. chronic urticaria: acute = <6 weeks (usually infectious/drug trigger); chronic = >6 weeks (idiopathic/autoimmune). Only chronic urticaria warrants extensive workup. (5) Prognosis of post-viral urticaria: self-limited, typically resolves in 2-6 weeks. Antihistamines for symptom control. If recurs with subsequent infections, consider short antihistamine courses with viral illnesses."
    }
  },
  "meta": {
    "diagnosis": "Acute Urticaria \u2014 Post-Viral; Viral Trigger Most Likely; Food Allergy Not Confirmed"
  }
};
