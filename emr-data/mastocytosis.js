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
  ]
,"references":[
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
    "patientPersona": "Renee Carmichael appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did recurrent flushing, syncope, and anaphylaxis without identifiable trigger start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started Renee Carmichael presents with recurrent flushing, syncope, and anaphylaxis with.'",
        "character": "'It's recurrent flushing, syncope, and anaphylaxis without identifiable trigger \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Cetirizine; Famotidine; Cromolyn sodium; EpiPen.'",
        "allergies": "'My allergies are No known trigger \u2014 idiopathic anaphylaxis episodes.'",
        "family": "Non-contributory",
        "social": "Skin findings: Brown-red macules on trunk \u2014 Darier sign positive  Bone marrow: Pending referral for BM biopsy  Key: KIT D816V mutation positive \u2014 diagnostic for systemic mastocytosis"
    },
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Working diagnosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Working diagnosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Working diagnosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Working diagnosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Renee Carmichael's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};