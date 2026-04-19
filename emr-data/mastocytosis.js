/* emr-data/mastocytosis.js — Multi-Setting Allergy Case: Systemic Mastocytosis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Renee Carmichael",
      "patientHPI": "This is my third time having a severe allergic reaction in the last year and a half, but we still can't figure out what's causing it - there's no pattern or trigger we can identify.",
      "dob": "03/25/1981",
      "age": "45",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-589153",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(504) 555-8801",
      "email": "renee.carmichael@email.com",
      "address": "5019 Birch Ln, Chicago, IL 60629",
      "insurance": "Aetna HMO",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "David Carmichael",
        "phone": "(314) 555-8178",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "No known trigger — idiopathic anaphylaxis episodes",
        "reaction": "Anaphylaxis",
        "severity": "Severe",
        "type": "Unknown"
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
        "Skin findings",
        "Brown-red macules on trunk — Darier sign positive"
      ],
      [
        "Bone marrow",
        "Pending referral for BM biopsy"
      ],
      [
        "Key",
        "KIT D816V mutation positive — diagnostic for systemic mastocytosis"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Idiopathic anaphylaxis — third episode in 18 months, no trigger identified",
        "diagnosis": "Systemic Mastocytosis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "3 episodes of unexplained anaphylaxis in 18 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Baseline tryptase elevated",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Urticaria pigmentosa on trunk",
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
          "frequency": "BID",
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
          "name": "Cromolyn sodium",
          "dose": "200mg",
          "route": "PO",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Epinephrine",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "Given x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "NS bolus",
          "dose": "1L",
          "route": "IV",
          "frequency": "Rapid",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "82/52",
          "hr": "128",
          "rr": "26",
          "temp": "36.8°C",
          "spo2": "91%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-504483",
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
                  "test": "Baseline Tryptase",
                  "value": "28",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": "H"
                },
                {
                  "test": "N methyl Histamine",
                  "value": "elevated",
                  "unit": "",
                  "range": "Normal",
                  "flag": "H"
                },
                {
                  "test": "Prostaglandin D2",
                  "value": "elevated",
                  "unit": "",
                  "range": "Normal",
                  "flag": "H"
                },
                {
                  "test": "Kit D816 V",
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
          "cc": "Idiopathic anaphylaxis — third episode in 18 months, no trigger identified",
          "hpi": "Renee Carmichael — Idiopathic anaphylaxis — third episode in 18 months, no trigger identified",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted after idiopathic anaphylaxis — mastocytosis workup initiated",
        "diagnosis": "Systemic Mastocytosis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "3 episodes of unexplained anaphylaxis in 18 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Baseline tryptase elevated",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Urticaria pigmentosa on trunk",
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
          "frequency": "BID",
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
          "name": "Cromolyn sodium",
          "dose": "200mg",
          "route": "PO",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Diphenhydramine",
          "dose": "50mg",
          "route": "IV",
          "frequency": "Q6H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Famotidine",
          "dose": "20mg",
          "route": "IV",
          "frequency": "Q12H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/68",
          "hr": "88",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "98%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-504483",
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
                  "test": "Baseline Tryptase",
                  "value": "28",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": "H"
                },
                {
                  "test": "N methyl Histamine",
                  "value": "elevated",
                  "unit": "",
                  "range": "Normal",
                  "flag": "H"
                },
                {
                  "test": "Prostaglandin D2",
                  "value": "elevated",
                  "unit": "",
                  "range": "Normal",
                  "flag": "H"
                },
                {
                  "test": "Kit D816 V",
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
          "cc": "Admitted after idiopathic anaphylaxis — mastocytosis workup initiated",
          "hpi": "Renee Carmichael — Admitted after idiopathic anaphylaxis — mastocytosis workup initiated",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "Recurrent flushing, syncope, and anaphylaxis without identifiable trigger",
        "diagnosis": "Systemic Mastocytosis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "3 episodes of unexplained anaphylaxis in 18 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Baseline tryptase elevated",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Urticaria pigmentosa on trunk",
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
          "frequency": "BID",
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
          "name": "Cromolyn sodium",
          "dose": "200mg",
          "route": "PO",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/68",
          "hr": "92",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "98%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-504483",
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
                  "test": "Baseline Tryptase",
                  "value": "28",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": "H"
                },
                {
                  "test": "N methyl Histamine",
                  "value": "elevated",
                  "unit": "",
                  "range": "Normal",
                  "flag": "H"
                },
                {
                  "test": "Prostaglandin D2",
                  "value": "elevated",
                  "unit": "",
                  "range": "Normal",
                  "flag": "H"
                },
                {
                  "test": "Kit D816 V",
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
          "provider": "Dr. Allergist (Consultant)",
          "cc": "Recurrent flushing, syncope, and anaphylaxis without identifiable trigger",
          "hpi": "Renee Carmichael presents with recurrent flushing, syncope, and anaphylaxis without identifiable trigger.",
          "exam": "See documentation.",
          "assessment": "Systemic Mastocytosis",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Mastocytosis follow-up — bone marrow biopsy results, start avoidance + meds",
        "diagnosis": "Systemic Mastocytosis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "3 episodes of unexplained anaphylaxis in 18 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Baseline tryptase elevated",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Urticaria pigmentosa on trunk",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Cromolyn sodium",
          "dose": "200mg",
          "route": "PO",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-3",
          "name": "Famotidine",
          "dose": "20mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-4",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "112/68",
          "hr": "76",
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
          "accession": "LAB-504483",
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
                  "test": "Baseline Tryptase",
                  "value": "28",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": "H"
                },
                {
                  "test": "N methyl Histamine",
                  "value": "elevated",
                  "unit": "",
                  "range": "Normal",
                  "flag": "H"
                },
                {
                  "test": "Prostaglandin D2",
                  "value": "elevated",
                  "unit": "",
                  "range": "Normal",
                  "flag": "H"
                },
                {
                  "test": "Kit D816 V",
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
          "cc": "Mastocytosis follow-up — bone marrow biopsy results, start avoidance + meds",
          "hpi": "Renee Carmichael — Mastocytosis follow-up — bone marrow biopsy results, start avoidance + meds",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Renee Carmichael",
    "dob": "03/25/1981",
    "age": "45",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-589153",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(720) 555-8412",
    "email": "renee.carmichael@email.com",
    "address": "1891 Poplar Ave, Kansas City, MO 64124",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "David Carmichael",
      "phone": "(503) 555-2100",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Recurrent flushing, syncope, and anaphylaxis without identifiable trigger",
    "diagnosis": "Systemic Mastocytosis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "3 episodes of unexplained anaphylaxis in 18 months",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Baseline tryptase elevated",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Urticaria pigmentosa on trunk",
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
      "frequency": "BID",
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
      "name": "Cromolyn sodium",
      "dose": "200mg",
      "route": "PO",
      "frequency": "QID",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "EpiPen",
      "dose": "0.3mg",
      "route": "IM",
      "frequency": "PRN x2",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "No known trigger — idiopathic anaphylaxis episodes",
      "reaction": "Anaphylaxis",
      "severity": "Severe",
      "type": "Unknown"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "108/68",
      "hr": "92",
      "rr": "16",
      "temp": "36.8°C",
      "spo2": "98%",
      "pain": "3/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Consultation",
      "date": "03/02/2026",
      "provider": "Dr. Allergist (Consultant)",
      "cc": "Recurrent flushing, syncope, and anaphylaxis without identifiable trigger",
      "hpi": "Renee Carmichael presents with recurrent flushing, syncope, and anaphylaxis without identifiable trigger.",
      "exam": "See documentation.",
      "assessment": "Systemic Mastocytosis",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-504483",
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
              "test": "Baseline Tryptase",
              "value": "28",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": "H"
            },
            {
              "test": "N methyl Histamine",
              "value": "elevated",
              "unit": "",
              "range": "Normal",
              "flag": "H"
            },
            {
              "test": "Prostaglandin D2",
              "value": "elevated",
              "unit": "",
              "range": "Normal",
              "flag": "H"
            },
            {
              "test": "Kit D816 V",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Skin findings",
      "Brown-red macules on trunk — Darier sign positive"
    ],
    [
      "Bone marrow",
      "Pending referral for BM biopsy"
    ],
    [
      "Key",
      "KIT D816V mutation positive — diagnostic for systemic mastocytosis"
    ]
  ],
  "references": [
    {
      "id": "MCAS-Consensus-2019",
      "title": "Mast cell activation syndrome: clinicopathological approach",
      "authors": "Weiler CR, Austen KF, Akin C, et al.",
      "journal": "Ann Allergy Asthma Immunol",
      "year": 2019,
      "doi": "10.1016/j.anai.2019.09.025",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6920833/",
      "openAccess": true,
      "validates": [
        "MCAS consensus criteria",
        "Tryptase formula: acute ≥ (1.2 × baseline) + 2",
        "24h urine mediators",
        "KIT D816V for SM vs MCAS",
        "Quadruple therapy"
      ]
    },
    {
      "id": "Valent-MCD-2012",
      "title": "Definitions, criteria and classification of mast cell disorders",
      "authors": "Valent P, Akin C, Arock M, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2012,
      "doi": "10.1016/j.jaci.2012.09.002",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3742415/",
      "openAccess": true,
      "validates": [
        "SM classification",
        "WHO criteria",
        "KIT D816V",
        "Baseline tryptase >20 suggests SM"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "Systemic mastocytosis diagnosis requires the WHO criteria: ≥1 major + ≥1 minor criterion, or ≥3 minor criteria. Major criterion: multifocal mast cell aggregates ≥15 cells/focus on BM biopsy.",
      "Serum tryptase >20 ng/mL is a minor diagnostic criterion for SM AND a clinical marker of anaphylaxis severity. All patients with unexplained anaphylaxis should have a baseline tryptase checked.",
      "Anaphylaxis in mastocytosis is uniquely refractory — standard epinephrine may be inadequate. Prescribe EpiPen × 2 (some centers × 4). Medical alert ID required.",
      "Venom hypersensitivity + unexplained severe anaphylaxis → always check serum tryptase. SM is frequently first diagnosed after a disproportionate venom anaphylaxis episode.",
      "Indolent SM (ISM): near-normal life expectancy. Focus on anaphylaxis prevention and trigger avoidance. Advanced SM (ASM, MCL): cytoreductive therapy with midostaurin or avapritinib.",
      "Venom immunotherapy (VIT) is INDICATED in mastocytosis patients with venom-triggered anaphylaxis — and should be continued lifelong (do not stop at the standard 5-year mark)."
    ],
    "boardPearls": [
      "SM major criterion: >15 mast cells in compact aggregates on BM biopsy.",
      "SM minor criteria (need 3 of 4, or 1 major + 1 minor): spindle-shaped MCs >25%; KIT D816V; CD25 or CD2 co-expression; tryptase >20 ng/mL.",
      "Darier's sign: urtication of a pigmented macule on stroking = urticaria pigmentosa (cutaneous mastocytosis).",
      "Triggers: NSAIDs, opioids, radiocontrast, alcohol, temperature extremes, Hymenoptera stings.",
      "Midostaurin and avapritinib: KIT inhibitors FDA-approved for advanced SM.",
      "Venom IT in mastocytosis: indicate AND continue lifelong — unlike standard 5-year VIT course."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Renee appears anxious and hypervigilant, constantly checking for signs of an impending reaction. She is very forthcoming with details about her symptoms but expresses frustration about the unpredictable nature of her episodes. She carries visible anxiety about having another anaphylactic episode and speaks quickly when describing her symptoms.",
    "interviewQuestions": [
      "Can you describe what happens during one of these episodes from start to finish?",
      "How long do the flushing episodes typically last?",
      "Do you notice any specific triggers like foods, medications, exercise, or stress?",
      "Have you noticed any skin changes or unusual spots on your body?",
      "Do you experience any abdominal symptoms like cramping, nausea, or diarrhea?",
      "Have you had any bone pain or fractures?",
      "Do you get itchy when you scratch or rub your skin?",
      "Have any blood tests been done to measure tryptase levels?",
      "Have you seen any specialists about these episodes?",
      "Do you have difficulty with heat, cold, or certain physical activities?",
      "Have you noticed any changes in your weight or appetite?",
      "Are there certain times of day when symptoms are more likely to occur?",
      "Have you ever been told you need a bone marrow biopsy?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Could you ask it differently? I just know these episodes keep happening and it's really scary.",
      "onset": "The first episode happened about 18 months ago completely out of nowhere. I was just at home watching TV when I suddenly felt flushed and then passed out. Since then, I've had two more similar episodes.",
      "character": "It starts with intense flushing and warmth all over my body, then I feel dizzy and lightheaded. Sometimes my throat feels tight and I have trouble breathing. The episodes feel like classic allergic reactions but we can't find what I'm allergic to.",
      "location": "The flushing affects my whole body, especially my face, neck, and chest. I also have these brown-red spots on my trunk that have been there for a while.",
      "severity": "During an episode, it's easily a 9 out of 10 - I feel like I'm going to die. Between episodes, I'm constantly worried it will happen again, maybe a 6 out of 10 for anxiety.",
      "aggravating": "I haven't been able to identify specific triggers, which is the most frustrating part. Sometimes it seems like physical exertion or stress might make it worse, but it's not consistent.",
      "relieving": "The EpiPen helps during severe episodes, and my daily medications seem to reduce the frequency somewhat. Lying down helps when I feel faint.",
      "associated": "I sometimes get stomach cramping and diarrhea during episodes. I've also noticed some bone aches lately, and those brown spots on my skin get really itchy when I scratch them.",
      "denies": "I don't have any known food allergies, haven't been stung by insects, and don't take any new medications before episodes. No chest pain or palpitations specifically.",
      "history": "Three episodes total in 18 months. Each one required emergency care and they've all been similar - sudden onset flushing, syncope, and feeling like I can't breathe.",
      "medications": "Cetirizine; Famotidine; Cromolyn sodium; EpiPen",
      "allergies": "No known trigger — idiopathic anaphylaxis episodes",
      "family": "No one in my family has had anything like this. No known allergies or autoimmune conditions that I'm aware of.",
      "social": "I work as an accountant, mostly desk work. I don't smoke, drink maybe one glass of wine a week. No recreational drugs. These episodes have really limited my activities - I'm afraid to go places alone."
    },
    "examManeuvers": [
      "Inspection of skin for urticaria pigmentosa lesions",
      "Darier sign testing (stroking pigmented lesions)",
      "Abdominal examination for hepatosplenomegaly",
      "Lymph node examination",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Inspection for flushing or active urticaria",
      "Assessment of mucous membranes",
      "Examination for signs of bone tenderness",
      "Vital sign assessment including orthostatics"
    ],
    "examFindings": {
      "Inspection of skin for urticaria pigmentosa lesions": "Multiple brown-red macules and papules scattered across the trunk, approximately 0.5-1.5 cm in diameter",
      "Darier sign testing (stroking pigmented lesions)": "Positive - lesions become raised, red, and pruritic when stroked firmly",
      "Abdominal examination for hepatosplenomegaly": "Mild splenomegaly palpable 2 cm below left costal margin, liver not enlarged",
      "Lymph node examination": "No significant lymphadenopathy detected",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, gallops, or rubs",
      "Pulmonary examination": "Clear to auscultation bilaterally, no wheezes or stridor",
      "Inspection for flushing or active urticaria": "Mild residual erythema on face and neck, no active urticaria present",
      "Assessment of mucous membranes": "Pink and moist, no angioedema or swelling observed",
      "Examination for signs of bone tenderness": "Mild tenderness over sternum and ribs with palpation",
      "Vital sign assessment including orthostatics": "BP 108/68 lying, 95/60 standing; HR 92 lying, 108 standing"
    },
    "ddxTargets": [
      "Systemic mastocytosis (correct diagnosis)",
      "Idiopathic anaphylaxis",
      "Hereditary angioedema",
      "Carcinoid syndrome",
      "Pheochromocytoma",
      "Mast cell activation syndrome",
      "Food or drug allergy with occult trigger"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'idiopathic anaphylaxis' label from prior workups without recognizing the pattern of skin lesions and systemic symptoms suggesting mastocytosis",
      "prematureClosure": "May stop investigating after confirming anaphylaxis history without examining skin thoroughly or considering rare systemic causes",
      "availabilityBias": "Common allergic reactions are frequently seen, making it easy to miss rare disorders like systemic mastocytosis that can present similarly"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, consider what additional history beyond the anaphylaxis episodes might help you. What other organ systems could be involved in a systemic disorder causing recurrent anaphylaxis? Think about what physical examination findings might give you clues about the underlying pathophysiology.",
      "phase5": "Now that you've gathered the history and physical findings, let's think about the pattern. You have recurrent anaphylaxis with elevated baseline tryptase, skin lesions with a positive Darier sign, and some systemic symptoms. How do these findings fit together? What does the positive KIT mutation suggest about the underlying pathophysiology?",
      "finalDebrief": "This case demonstrates how systemic mastocytosis can present as 'idiopathic' anaphylaxis. The key diagnostic clues were the skin lesions (urticaria pigmentosa), positive Darier sign, elevated baseline tryptase, and ultimately the KIT D816V mutation. This highlights the importance of looking beyond the presenting complaint to identify systemic disorders that can masquerade as more common conditions."
    }
  }
};
