/* emr-data/chronic-spontaneous-urticaria.js — Multi-Setting Allergy Case: Chronic Spontaneous Urticaria */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Mariana Chen-Vasquez",
      "patientHPI": "These hives just won't go away no matter what I take - they're covering my arms and body again and my face is starting to swell up even though I'm taking my allergy pills.",
      "dob": "03/11/1984",
      "age": "42",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-169705",
      "language": "English",
      "race": "Multiracial",
      "phone": "(415) 555-1711",
      "email": "mariana.chen-vasquez@email.com",
      "address": "9144 Foxglove Dr, Memphis, TN 38107",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy \u2014 Main St",
      "emergencyContact": {
        "name": "David Chen-Vasquez",
        "phone": "(720) 555-8527",
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
        "date": "10/2025",
        "lot": "FL-25",
        "site": "Left Deltoid"
      }
    ],
    "familyHistory": [
      "Sister: autoimmune thyroiditis"
    ],
    "socialHistory": [
      [
        "Duration",
        "Daily wheals for 8+ weeks"
      ],
      [
        "Prior workup",
        "Negative for infection, normal CBC, ESR, CRP"
      ],
      [
        "Medication trial",
        "Failed cetirizine 10mg daily, uptitrated to 20mg with partial response"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "CSU flare with severe hives and angioedema despite antihistamines",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Hashimoto's thyroiditis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Vitamin D deficiency",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "BID (uptitrated)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Famotidine",
          "dose": "20mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Levothyroxine",
          "dose": "88mcg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Epinephrine",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "If anaphylaxis",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "128/78",
          "hr": "96",
          "rr": "18",
          "temp": "37.0\u00b0C",
          "spo2": "98%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-213666",
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
                  "value": "7.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "45",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": ""
                },
                {
                  "test": "Tsh",
                  "value": "4.8",
                  "unit": "mIU/L",
                  "range": "0.4-4.0",
                  "flag": "H"
                },
                {
                  "test": "Thyroid Ab",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
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
          "cc": "CSU flare with severe hives and angioedema despite antihistamines",
          "hpi": "Mariana Chen-Vasquez \u2014 CSU flare with severe hives and angioedema despite antihistamines",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for refractory CSU flare \u2014 starting omalizumab",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Hashimoto's thyroiditis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Vitamin D deficiency",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "BID (uptitrated)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Famotidine",
          "dose": "20mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Levothyroxine",
          "dose": "88mcg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Omalizumab",
          "dose": "300mg",
          "route": "SC",
          "frequency": "First dose",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "118/72",
          "hr": "82",
          "rr": "16",
          "temp": "36.8\u00b0C",
          "spo2": "99%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-213666",
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
                  "value": "7.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "45",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": ""
                },
                {
                  "test": "Tsh",
                  "value": "4.8",
                  "unit": "mIU/L",
                  "range": "0.4-4.0",
                  "flag": "H"
                },
                {
                  "test": "Thyroid Ab",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
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
          "cc": "Admitted for refractory CSU flare \u2014 starting omalizumab",
          "hpi": "Mariana Chen-Vasquez \u2014 Admitted for refractory CSU flare \u2014 starting omalizumab",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 CSU refractory to high-dose antihistamines, biologic evaluation",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Hashimoto's thyroiditis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Vitamin D deficiency",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "BID (uptitrated)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Famotidine",
          "dose": "20mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Levothyroxine",
          "dose": "88mcg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "116/72",
          "hr": "76",
          "rr": "14",
          "temp": "36.8\u00b0C",
          "spo2": "99%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-213666",
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
                  "value": "7.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "45",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": ""
                },
                {
                  "test": "Tsh",
                  "value": "4.8",
                  "unit": "mIU/L",
                  "range": "0.4-4.0",
                  "flag": "H"
                },
                {
                  "test": "Thyroid Ab",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
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
          "cc": "A/I consult \u2014 CSU refractory to high-dose antihistamines, biologic evaluation",
          "hpi": "Mariana Chen-Vasquez \u2014 A/I consult \u2014 CSU refractory to high-dose antihistamines, biologic evaluation",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Daily hives for 8 weeks with no identifiable trigger, refractory to H1 antihistamines",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Hashimoto's thyroiditis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Vitamin D deficiency",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "BID (uptitrated)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Famotidine",
          "dose": "20mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Levothyroxine",
          "dose": "88mcg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "118/72",
          "hr": "72",
          "rr": "14",
          "temp": "36.8\u00b0C",
          "spo2": "99%",
          "pain": "5/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-213666",
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
                  "value": "7.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "45",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": ""
                },
                {
                  "test": "Tsh",
                  "value": "4.8",
                  "unit": "mIU/L",
                  "range": "0.4-4.0",
                  "flag": "H"
                },
                {
                  "test": "Thyroid Ab",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
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
          "cc": "Daily hives for 8 weeks with no identifiable trigger, refractory to H1 antihistamines",
          "hpi": "Mariana Chen-Vasquez presents with daily hives for 8 weeks with no identifiable trigger, refractory to h1 antihistamines.",
          "exam": "See documentation.",
          "assessment": "Chronic Spontaneous Urticaria",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Mariana Chen-Vasquez",
    "dob": "03/11/1984",
    "age": "42",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-169705",
    "language": "English",
    "race": "Multiracial",
    "phone": "(619) 555-3045",
    "email": "mariana.chen-vasquez@email.com",
    "address": "1239 Magnolia Blvd, Richmond, VA 23220",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "David Chen-Vasquez",
      "phone": "(505) 555-2291",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Daily hives for 8 weeks with no identifiable trigger, refractory to H1 antihistamines",
    "diagnosis": "Chronic Spontaneous Urticaria"
  },
  "problems": [
    {
      "problem": "Chronic spontaneous urticaria \u2014 refractory",
      "icd": "L50.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Daily hives >6 weeks; no identifiable trigger; UAS7=28 (severe); failed cetirizine 20mg daily"
    },
    {
      "problem": "Thyroid autoimmunity (Hashimoto's thyroiditis)",
      "icd": "E06.3",
      "onset": "2021",
      "status": "Active",
      "notes": "Anti-TPO positive; TSH normal; associated with autoimmune urticaria in ~30%"
    },
    {
      "problem": "Autoimmune urticaria \u2014 positive autologous serum skin test",
      "icd": "L50.1",
      "onset": "2024",
      "status": "Active",
      "notes": "ASST positive; anti-Fc\u03b5RI antibodies suspected"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 20mg daily (double-dose)",
      "sig": "Take 2 tablets by mouth daily (2x standard dose per EAACI guidelines)",
      "prescriber": "Dr. Rodriguez",
      "start": "09/2024",
      "refills": 3,
      "status": "Active \u2014 inadequate control"
    },
    {
      "name": "Levothyroxine 75mcg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach",
      "prescriber": "Dr. Kim",
      "start": "03/2022",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Omalizumab (Xolair) 300mg SC q4 weeks (NEW)",
      "sig": "Administer 300mg subcutaneously every 4 weeks in clinic; observe 30 min post-injection",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 5,
      "status": "Active \u2014 first injection today"
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
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "118/72",
      "hr": "72",
      "rr": "14",
      "temp": "36.8\u00b0C",
      "spo2": "99%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Office Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Daily hives for 8 weeks with no identifiable trigger, refractory to H1 antihistamines",
      "hpi": "Mariana Chen-Vasquez presents with daily hives for 8 weeks with no identifiable trigger, refractory to h1 antihistamines.",
      "exam": "See documentation.",
      "assessment": "Chronic Spontaneous Urticaria",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/01/2024",
      "panel": "CSU Workup Panel",
      "results": [
        {
          "test": "CBC with differential",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
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
          "test": "TSH",
          "value": "2.1",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
          "flag": ""
        },
        {
          "test": "Anti-TPO antibody",
          "value": "840",
          "unit": "IU/mL",
          "ref": "<35",
          "flag": "H"
        },
        {
          "test": "Anti-thyroglobulin",
          "value": "210",
          "unit": "IU/mL",
          "ref": "<20",
          "flag": "H"
        },
        {
          "test": "ANA",
          "value": "1:40, speckled",
          "unit": "",
          "ref": "<1:40",
          "flag": ""
        },
        {
          "test": "C4",
          "value": "22",
          "unit": "mg/dL",
          "ref": "16-47",
          "flag": ""
        },
        {
          "test": "Autologous Serum Skin Test (ASST)",
          "value": "Positive \u2014 4mm wheal at 30 min",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "UAS7 score",
          "value": "28",
          "unit": "points",
          "ref": "<7 (well-controlled)",
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
    "Sister: autoimmune thyroiditis"
  ],
  "socialHistory": [
    [
      "Duration",
      "Daily wheals for 8+ weeks"
    ],
    [
      "Prior workup",
      "Negative for infection, normal CBC, ESR, CRP"
    ],
    [
      "Medication trial",
      "Failed cetirizine 10mg daily, uptitrated to 20mg with partial response"
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
  "teachingPoints": {
    "keyLearning": [
      "CSU is defined by urticaria (wheals and/or angioedema) present for >6 weeks without identifiable external trigger. In ~35\u201340% of cases, an autoimmune mechanism is identified: IgG autoantibodies against IgE (Type IIb) or Fc\u03b5RI\u03b1 (the high-affinity IgE receptor, Type IIb) \u2014 causing direct mast cell activation.",
      "Omalizumab (anti-IgE, Xolair) is FDA-approved for CSU refractory to antihistamines. Mechanism: binds free IgE \u2192 reduces Fc\u03b5RI expression on mast cells \u2192 mast cell quiescence. Response typically within 1\u20134 weeks. 300 mg Q4W standard dose.",
      "H1 antihistamines (up to 4\u00d7 standard dose) are first-line before stepping up to omalizumab. H2 antihistamines and montelukast add minimal additional benefit beyond high-dose H1 antihistamines."
    ],
    "boardPearls": [
      "CSU definition: urticaria >6 weeks duration without identifiable trigger. Distinguish from inducible urticaria (physical triggers: cold, pressure, exercise).",
      "Autoimmune CSU markers: positive autologous serum skin test (ASST), anti-Fc\u03b5RI\u03b1 IgG, anti-IgE IgG. Basophil activation test (BAT) best validated.",
      "Treatment stepwise: H1 antihistamine (standard dose) \u2192 H1 antihistamine (2\u20134\u00d7 dose) \u2192 omalizumab 300 mg Q4W \u2192 cyclosporine.",
      "Omalizumab for CSU: 300 mg Q4W. Rapid responders (1\u20134 wks): IgE-mediated mechanism. Slow responders (8\u201312 wks): autoimmune mechanism.",
      "Lab workup: CBC (eosinophilia?), TSH/anti-TPO (thyroid autoimmunity in 15\u201320% of CSU), ANA (SLE-associated urticaria), CRP/ESR (urticarial vasculitis if elevated + wheals lasting >24h).",
      "Wheals lasting >24h + residual bruising \u2192 biopsy \u2192 urticarial vasculitis."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Mariana appears frustrated and anxious about her persistent symptoms that haven't responded to treatment. She is very forthcoming with information and eager to find answers, expressing concern about the daily impact on her quality of life. Her affect is cooperative but shows visible distress when describing the unpredictable nature of her hives.",
    "interviewQuestions": [
      "Can you describe exactly when and how these hives first started 8 weeks ago?",
      "What do the hives look like and where do they typically appear on your body?",
      "How long do individual hives last before they disappear?",
      "Have you noticed any patterns or triggers that seem to bring on the hives?",
      "On a scale of 1-10, how would you rate the itching and how much is this affecting your daily life?",
      "What makes the hives worse or better?",
      "Have you had any other symptoms like swelling of your face, lips, or throat?",
      "Have you tried any new foods, medications, soaps, or detergents in the past few months?",
      "Have you had any recent infections, illnesses, or stressful events?",
      "Do you have any family history of allergies or autoimmune conditions?",
      "What is your current work and living situation?",
      "Have you traveled anywhere recently or been exposed to anything unusual?",
      "How has your thyroid condition been managed lately?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that? I just want to figure out what's causing these hives.",
      "onset": "It started about 8 weeks ago completely out of nowhere. I woke up one morning with these raised, red welts on my arms and they just haven't stopped coming since then.",
      "character": "They're raised, red welts that are really itchy. They're different sizes - some small like a quarter, others bigger. They feel hot and swollen when I touch them.",
      "location": "They appear all over - arms, legs, trunk, sometimes on my face. They don't seem to favor any particular area and move around to different spots.",
      "severity": "The itching is about a 7 out of 10 most days. It's really disrupting my sleep and I'm constantly distracted at work. I find myself scratching until I bleed sometimes.",
      "aggravating": "They seem worse when I'm stressed or hot. Sometimes tight clothing or pressure makes them more noticeable, but honestly, they come and go randomly.",
      "relieving": "The cetirizine helps a little bit, especially since we increased the dose, but they're still there every day. Cool compresses give temporary relief.",
      "associated": "No swelling of my face or throat, thankfully. Sometimes I feel a little more tired than usual, but that might just be from the poor sleep and constant itching.",
      "denies": "No difficulty breathing, no swelling of my lips or tongue, no joint pain, no fever, no weight changes recently.",
      "history": "I've never had anything like this before. I've had occasional seasonal allergies but nothing persistent like this.",
      "medications": "Cetirizine; Famotidine; Levothyroxine",
      "allergies": "NKDA",
      "family": "My sister has the same thyroid condition I do - Hashimoto's thyroiditis. My mother had some food allergies but nothing like this.",
      "social": "I work as a marketing manager, mostly desk work. I don't smoke, drink maybe a glass of wine on weekends. No recreational drugs. I live with my husband and our cat - we've had the cat for 3 years though."
    },
    "examManeuvers": [
      "Inspect skin for active urticarial lesions",
      "Assess distribution pattern of lesions",
      "Palpate lesions for warmth and blanching",
      "Perform dermographism test",
      "Examine for angioedema of face, lips, eyelids",
      "Palpate lymph nodes",
      "Examine thyroid gland",
      "Assess for signs of systemic disease",
      "Check conjunctiva for pallor",
      "Auscultate heart and lungs"
    ],
    "examFindings": {
      "Inspect skin for active urticarial lesions": "Multiple erythematous, raised wheals of varying sizes (0.5-3 cm) present on bilateral arms and trunk, some with central pallor",
      "Assess distribution pattern of lesions": "Scattered distribution without dermatome pattern, affecting trunk and extremities, sparing palms and soles",
      "Palpate lesions for warmth and blanching": "Lesions are warm to touch, blanch with pressure, and have well-demarcated raised borders",
      "Perform dermographism test": "Positive dermographism - linear wheal develops within 5 minutes of firm stroking with tongue depressor",
      "Examine for angioedema of face, lips, eyelids": "No evidence of angioedema; face, lips, and eyelids appear normal",
      "Palpate lymph nodes": "No lymphadenopathy detected in cervical, axillary, or inguinal regions",
      "Examine thyroid gland": "Thyroid slightly enlarged, consistent with known Hashimoto's thyroiditis, no new nodules palpated",
      "Assess for signs of systemic disease": "No hepatosplenomegaly, no joint swelling or tenderness",
      "Check conjunctiva for pallor": "Conjunctiva pink, no pallor noted",
      "Auscultate heart and lungs": "Regular rate and rhythm, lungs clear to auscultation bilaterally"
    },
    "ddxTargets": [
      "Chronic spontaneous urticaria \u2014 autoimmune subtype, refractory (correct)",
      "Chronic inducible urticaria \u2014 triggered by physical stimuli (cold, pressure, heat); rule out by history",
      "Urticarial vasculitis \u2014 lesions last >24h, bruise/resolve with pigmentation; biopsy shows leukocytoclasis",
      "Hereditary angioedema \u2014 no urticaria; C4 low; different mechanism",
      "Drug-induced urticaria \u2014 no new medications; must be considered in all new-onset urticaria",
      "Mastocytosis \u2014 flushing, syncope; serum tryptase elevated; urticaria pigmentosa on skin"
    ],
    "biasFlags": {
      "anchoring": "Don't anchor on the patient's existing autoimmune condition (Hashimoto's) and assume this is necessarily autoimmune-related urticaria without considering the broader differential",
      "prematureClosure": "Avoid immediately attributing this to a simple allergic reaction since the history reveals no clear triggers and standard antihistamines have been partially effective",
      "availabilityBias": "Don't focus only on common food or environmental allergens; chronic spontaneous urticaria often has no identifiable trigger despite thorough investigation"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, consider what key features distinguish acute from chronic urticaria, and what red flags you'd want to rule out. What specific questions will help you determine if this is spontaneous versus inducible urticaria?",
      "phase5": "Now that you've gathered your history and physical findings, what does the 8-week duration tell you about classification? How does the positive dermographism and response pattern to antihistamines help narrow your differential diagnosis?",
      "finalDebrief": "This case illustrates chronic spontaneous urticaria, where lesions persist >6 weeks without identifiable triggers. Notice how the history of autoimmune thyroiditis might have initially suggested autoimmune urticaria, but the clinical presentation and partial antihistamine response point toward the more common chronic spontaneous form. The positive dermographism indicates she also has inducible urticaria, which can coexist.",
      "final": "Diagnosis: chronic spontaneous urticaria, autoimmune subtype, refractory to up-dosed antihistamines \u2014 omalizumab indicated. Key teaching points: (1) CSU = urticaria >6 weeks with no identifiable external trigger. UAS7 \u226516 = inadequately controlled. (2) Treatment ladder (EAACI/AAAAI): Step 1: H1 antihistamine standard dose \u2192 Step 2: H1 antihistamine up to 4x dose \u2192 Step 3: Omalizumab 300mg q4w \u2192 Step 4: cyclosporine. (3) Omalizumab mechanism in CSU: anti-IgE, but CSU response does NOT correlate with baseline IgE \u2014 different from asthma mechanism. ~65% complete response, ~80% significant response. (4) Positive ASST and anti-TPO support autoimmune urticaria subtype \u2014 may predict slower omalizumab response but does not change management. (5) Workup for CSU is focused (CBC, CMP, TSH) \u2014 extensive infection/malignancy workup is NOT routinely indicated and rarely identifies a cause."
    }
  },
  "meta": {
    "diagnosis": "Chronic Spontaneous Urticaria (CSU) \u2014 Refractory to H1 Antihistamine; Candidate for Omalizumab"
  }
};
