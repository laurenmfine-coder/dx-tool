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
      "pharmacy": "CVS Pharmacy — Main St",
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
          "temp": "37.0°C",
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
                  "unit": "x10³/µL",
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
          "hpi": "Mariana Chen-Vasquez — CSU flare with severe hives and angioedema despite antihistamines",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for refractory CSU flare — starting omalizumab",
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
          "temp": "36.8°C",
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
                  "unit": "x10³/µL",
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
          "cc": "Admitted for refractory CSU flare — starting omalizumab",
          "hpi": "Mariana Chen-Vasquez — Admitted for refractory CSU flare — starting omalizumab",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — CSU refractory to high-dose antihistamines, biologic evaluation",
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
          "temp": "36.8°C",
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
                  "unit": "x10³/µL",
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
          "cc": "A/I consult — CSU refractory to high-dose antihistamines, biologic evaluation",
          "hpi": "Mariana Chen-Vasquez — A/I consult — CSU refractory to high-dose antihistamines, biologic evaluation",
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
          "temp": "36.8°C",
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
                  "unit": "x10³/µL",
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
    "pharmacy": "CVS Pharmacy — Main St",
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
      "temp": "36.8°C",
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
              "unit": "x10³/µL",
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
        "Step-up: sgAH → updose 4x → omalizumab → cyclosporine",
        "Post-viral urticaria in children: no allergy testing needed"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "CSU is defined by urticaria (wheals and/or angioedema) present for >6 weeks without identifiable external trigger. In ~35–40% of cases, an autoimmune mechanism is identified: IgG autoantibodies against IgE (Type IIb) or FcεRIα (the high-affinity IgE receptor, Type IIb) — causing direct mast cell activation.",
      "Omalizumab (anti-IgE, Xolair) is FDA-approved for CSU refractory to antihistamines. Mechanism: binds free IgE → reduces FcεRI expression on mast cells → mast cell quiescence. Response typically within 1–4 weeks. 300 mg Q4W standard dose.",
      "H1 antihistamines (up to 4× standard dose) are first-line before stepping up to omalizumab. H2 antihistamines and montelukast add minimal additional benefit beyond high-dose H1 antihistamines."
    ],
    "boardPearls": [
      "CSU definition: urticaria >6 weeks duration without identifiable trigger. Distinguish from inducible urticaria (physical triggers: cold, pressure, exercise).",
      "Autoimmune CSU markers: positive autologous serum skin test (ASST), anti-FcεRIα IgG, anti-IgE IgG. Basophil activation test (BAT) best validated.",
      "Treatment stepwise: H1 antihistamine (standard dose) → H1 antihistamine (2–4× dose) → omalizumab 300 mg Q4W → cyclosporine.",
      "Omalizumab for CSU: 300 mg Q4W. Rapid responders (1–4 wks): IgE-mediated mechanism. Slow responders (8–12 wks): autoimmune mechanism.",
      "Lab workup: CBC (eosinophilia?), TSH/anti-TPO (thyroid autoimmunity in 15–20% of CSU), ANA (SLE-associated urticaria), CRP/ESR (urticarial vasculitis if elevated + wheals lasting >24h).",
      "Wheals lasting >24h + residual bruising → biopsy → urticarial vasculitis."
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
      "Chronic spontaneous urticaria (correct diagnosis)",
      "Chronic inducible urticaria",
      "Autoimmune urticaria",
      "Drug-induced urticaria",
      "Systemic mastocytosis",
      "Contact dermatitis",
      "Atopic dermatitis"
    ],
    "biasFlags": {
      "anchoring": "Don't anchor on the patient's existing autoimmune condition (Hashimoto's) and assume this is necessarily autoimmune-related urticaria without considering the broader differential",
      "prematureClosure": "Avoid immediately attributing this to a simple allergic reaction since the history reveals no clear triggers and standard antihistamines have been partially effective",
      "availabilityBias": "Don't focus only on common food or environmental allergens; chronic spontaneous urticaria often has no identifiable trigger despite thorough investigation"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, consider what key features distinguish acute from chronic urticaria, and what red flags you'd want to rule out. What specific questions will help you determine if this is spontaneous versus inducible urticaria?",
      "phase5": "Now that you've gathered your history and physical findings, what does the 8-week duration tell you about classification? How does the positive dermographism and response pattern to antihistamines help narrow your differential diagnosis?",
      "finalDebrief": "This case illustrates chronic spontaneous urticaria, where lesions persist >6 weeks without identifiable triggers. Notice how the history of autoimmune thyroiditis might have initially suggested autoimmune urticaria, but the clinical presentation and partial antihistamine response point toward the more common chronic spontaneous form. The positive dermographism indicates she also has inducible urticaria, which can coexist."
    }
  }
};
