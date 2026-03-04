/* emr-data/acute-urticaria.js — Multi-Setting Allergy Case: Acute Urticaria */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Sofia Gutierrez",
      "dob": "06/14/1992",
      "age": "34",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-816285",
      "language": "English",
      "race": "Multiracial",
      "phone": "(732) 302-5768",
      "email": "sofia.gutierrez@email.com",
      "address": "2871 Oak St, Weston, FL 33390",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Thomas Gutierrez",
        "phone": "(811) 903-3567",
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
      "Mother: chronic urticaria"
    ],
    "socialHistory": [
      [
        "Trigger",
        "TMP-SMX started 3 hours ago for UTI"
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
        "chiefComplaint": "Widespread hives for 3 hours after starting new antibiotic",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UTI — started TMP-SMX today",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "TMP-SMX",
          "dose": "160/800mg",
          "route": "PO",
          "frequency": "BID (started today)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "122/76",
          "hr": "88",
          "rr": "16",
          "temp": "37.0°C",
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
          "accession": "LAB-383463",
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
          "cc": "Widespread hives for 3 hours after starting new antibiotic",
          "hpi": "Sofia Gutierrez presents with widespread hives for 3 hours after starting new antibiotic.",
          "exam": "See documentation.",
          "assessment": "Acute Urticaria",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief observation after acute urticaria with partial angioedema",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UTI — started TMP-SMX today",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "TMP-SMX",
          "dose": "160/800mg",
          "route": "PO",
          "frequency": "BID (started today)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Diphenhydramine",
          "dose": "25mg",
          "route": "PO",
          "frequency": "Q6H PRN",
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
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-383463",
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
          "cc": "Brief observation after acute urticaria with partial angioedema",
          "hpi": "Sofia Gutierrez — Brief observation after acute urticaria with partial angioedema",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — urticaria triggered by TMP-SMX, evaluate drug allergy",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UTI — started TMP-SMX today",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "TMP-SMX",
          "dose": "160/800mg",
          "route": "PO",
          "frequency": "BID (started today)",
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
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-383463",
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
          "cc": "A/I consult — urticaria triggered by TMP-SMX, evaluate drug allergy",
          "hpi": "Sofia Gutierrez — A/I consult — urticaria triggered by TMP-SMX, evaluate drug allergy",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up after drug-induced urticaria — confirm safe antibiotic alternatives",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UTI — started TMP-SMX today",
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
          "bp": "112/68",
          "hr": "72",
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
          "accession": "LAB-383463",
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
          "cc": "Follow-up after drug-induced urticaria — confirm safe antibiotic alternatives",
          "hpi": "Sofia Gutierrez — Follow-up after drug-induced urticaria — confirm safe antibiotic alternatives",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Sofia Gutierrez",
    "dob": "06/14/1992",
    "age": "34",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-816285",
    "language": "English",
    "race": "Multiracial",
    "phone": "(732) 302-5768",
    "email": "sofia.gutierrez@email.com",
    "address": "2871 Oak St, Weston, FL 33390",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Thomas Gutierrez",
      "phone": "(811) 903-3567",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Widespread hives for 3 hours after starting new antibiotic",
    "diagnosis": "Acute Urticaria"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "UTI — started TMP-SMX today",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "TMP-SMX",
      "dose": "160/800mg",
      "route": "PO",
      "frequency": "BID (started today)",
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
      "bp": "122/76",
      "hr": "88",
      "rr": "16",
      "temp": "37.0°C",
      "spo2": "99%",
      "pain": "4/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Widespread hives for 3 hours after starting new antibiotic",
      "hpi": "Sofia Gutierrez presents with widespread hives for 3 hours after starting new antibiotic.",
      "exam": "See documentation.",
      "assessment": "Acute Urticaria",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-383463",
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
    "Mother: chronic urticaria"
  ],
  "socialHistory": [
    [
      "Trigger",
      "TMP-SMX started 3 hours ago for UTI"
    ],
    [
      "Tobacco",
      "Never"
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

  "teachingPoints": {
    "keyLearning": [
      "Acute urticaria (<6 weeks) is most commonly triggered by: viral infection (most common cause in children), food (IgE-mediated), drugs (NSAIDs, antibiotics), or is idiopathic. In adults, underlying infection workup is rarely needed for acute urticaria.",
      "Management: identify and remove trigger. Oral H1 antihistamine (cetirizine, loratadine) for symptom control. Add short-course oral steroids (prednisone 40 mg × 5 days) for severe cases. Epinephrine only if anaphylaxis features (hypotension, bronchospasm).",
      "Distinguishing urticaria from angioedema: urticaria — superficial dermis, pruritic, blanches, resolves <24h. Angioedema — deep dermis/submucosa, burning/pain, non-pruritic, lasts 24–72h. Both can coexist."
    ],
    "boardPearls": [
      "Acute urticaria most common cause: viral URI (especially in children). Food allergy, NSAIDs, antibiotics in adults.",
      "Urticaria characteristics: raised erythematous wheals, pruritic, blanching on pressure, individual lesions resolve <24h (wheals lasting >24h → suspect urticarial vasculitis).",
      "Treatment: H1 antihistamine (cetirizine 10 mg BID or loratadine 10 mg daily). Prednisone 40 mg × 5 days for refractory/severe acute urticaria.",
      "No extensive workup needed for first episode of acute urticaria — only if recurring or systemic symptoms suggest underlying disease.",
      "Dermatographism: most common physical urticaria. Stroking skin → wheal-and-flare within 5 min. H1 antihistamine effective."
    ]
  }
};