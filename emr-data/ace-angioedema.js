/* emr-data/ace-angioedema.js — Multi-Setting Allergy Case: ACE Inhibitor Angioedema */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Darnell Washington",
  "patientHPI": "My lips and tongue have been swelling up and I look like I got punched in the face, but there's no rash anywhere else on my body - it just came on suddenly and won't go down.",
      "dob": "04/01/1968",
      "age": "58",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-655281",
      "language": "English",
      "race": "Asian",
      "phone": "(513) 555-7678",
      "email": "darnell.washington@email.com",
      "address": "6983 Oak Ave, Memphis, TN 38116",
      "insurance": "Aetna HMO",
      "pcp": "Dr. Lisa Chang, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Sarah Washington",
        "phone": "(503) 555-9890",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "ACE Inhibitors (now)",
        "reaction": "Angioedema",
        "severity": "Severe",
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Never"
      ],
      [
        "Race",
        "African American"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Lip/tongue swelling without urticaria",
        "diagnosis": "ACE Inhibitor Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ACE Inhibitor Angioedema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lisinopril",
          "dose": "20mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Amlodipine",
          "dose": "5mg",
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
          "bp": "152/88",
          "hr": "88",
          "rr": "18",
          "temp": "36.8°C",
          "spo2": "97%",
          "pain": "5/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-557655",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
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
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
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
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
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
          "cc": "Lip/tongue swelling without urticaria",
          "hpi": "Darnell Washington presents with lip/tongue swelling without urticaria.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for airway monitoring — tongue swelling progressing",
        "diagnosis": "ACE Inhibitor Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ACE Inhibitor Angioedema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "Given x1",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
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
          "bp": "142/82",
          "hr": "82",
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
          "accession": "LAB-711750",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
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
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
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
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
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
          "cc": "Admitted for airway monitoring — tongue swelling progressing",
          "hpi": "Darnell Washington presents with admitted for airway monitoring — tongue swelling progressing.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — recurrent angioedema on ACE inhibitor, confirm mechanism",
        "diagnosis": "ACE Inhibitor Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ACE Inhibitor Angioedema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily (ACE stopped)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "138/82",
          "hr": "78",
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
          "accession": "LAB-728020",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
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
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
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
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
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
          "cc": "A/I consult — recurrent angioedema on ACE inhibitor, confirm mechanism",
          "hpi": "Darnell Washington presents with a/i consult — recurrent angioedema on ace inhibitor, confirm mechanism.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up 6 weeks after ACE angioedema — BP management without ACE/ARB",
        "diagnosis": "ACE Inhibitor Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ACE Inhibitor Angioedema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Hydrochlorothiazide",
          "dose": "12.5mg",
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
          "bp": "134/78",
          "hr": "74",
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
          "accession": "LAB-198460",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
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
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
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
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
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
          "cc": "Follow-up 6 weeks after ACE angioedema — BP management without ACE/ARB",
          "hpi": "Darnell Washington presents with follow-up 6 weeks after ace angioedema — bp management without ace/arb.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Darnell Washington",
    "dob": "04/01/1968",
    "age": "58",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-655281",
    "language": "English",
    "race": "Asian",
    "phone": "(614) 555-7812",
    "email": "darnell.washington@email.com",
    "address": "7914 Daisy Ave, Richmond, VA 23225",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Sarah Washington",
      "phone": "(312) 555-4388",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Lip/tongue swelling without urticaria",
    "diagnosis": "ACE Inhibitor Angioedema"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "ACE Inhibitor Angioedema",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Lisinopril",
      "dose": "20mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Amlodipine",
      "dose": "5mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE Inhibitors (now)",
      "reaction": "Angioedema",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "152/88",
      "hr": "88",
      "rr": "18",
      "temp": "36.8°C",
      "spo2": "97%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Lip/tongue swelling without urticaria",
      "hpi": "Darnell Washington presents with lip/tongue swelling without urticaria.",
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
      "accession": "LAB-557655",
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
              "test": "Hematocrit",
              "value": "40.8",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "242",
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
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
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
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
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
      "Tobacco",
      "Never"
    ],
    [
      "Race",
      "African American"
    ]
  ]
,"references":[
  {
    "id": "ACE-AE-Byrd-2006",
    "title": "ACE inhibitor-associated angioedema",
    "authors": "Byrd JB, Adam A, Brown NJ.",
    "journal": "Immunol Allergy Clin North Am",
    "year": 2006,
    "doi": "10.1016/j.iac.2006.08.001",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4039077/",
    "openAccess": true,
    "validates": [
      "3-5x higher risk in African Americans",
      "Late-onset possible years after starting",
      "Bradykinin mechanism",
      "ARB cross-reactivity 2-10%",
      "Icatibant for ACE angioedema"
    ]
  }
],

  "teachingPoints": {
    "keyLearning": [
      "ACE inhibitor angioedema occurs in 0.1–0.7% of patients on ACEi, more common in Black patients (3-4× higher risk), and can occur years after starting the medication. Mechanism: ACEi inhibits bradykinin degradation → bradykinin accumulates → B2 receptor activation → angioedema.",
      "ACEi angioedema is bradykinin-mediated, NOT histamine. Antihistamines and epinephrine have limited efficacy — icatibant (bradykinin B2 antagonist) or C1-INH concentrate can be used for severe attacks.",
      "All ACE inhibitors are absolutely contraindicated after ACEi angioedema. ARBs carry a small cross-reactivity risk (~3–10%) — use with caution and monitoring. ARNI (sacubitril/valsartan) — contraindicated (neprilysin inhibition raises bradykinin levels further)."
    ],
    "boardPearls": [
      "ACEi angioedema mechanism: bradykinin accumulation (NOT IgE/histamine). Responds poorly to epinephrine/antihistamines.",
      "Epidemiology: 0.1–0.7% ACEi users. Black patients: 3–4× higher risk. Can occur after years on the drug.",
      "Treatment: stop ACEi immediately. Airway management first. Icatibant or C1-INH for severe/refractory attacks.",
      "Contraindications after ACEi angioedema: ALL ACE inhibitors. ARBs: cautiously permissible (3–10% risk). ARNI (sacubitril/valsartan): contraindicated.",
      "Complement testing: normal C4, C3, C1-INH — distinguishes from HAE and acquired C1-INH deficiency.",
      "Resolution: after ACEi discontinuation, angioedema typically resolves within 48–72h but may rarely persist weeks."
    ]
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
        "phase2": "You've reviewed Darnell Washington's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Darnell appears anxious and concerned about his facial swelling, frequently touching his lips and tongue. He is cooperative and forthcoming with information but speaks with slight difficulty due to the swelling. He seems worried this might be something serious given how quickly it developed.",
    "interviewQuestions": [
        "When did you first notice the lip and tongue swelling?",
        "How quickly did the swelling develop - over minutes, hours, or days?",
        "Have you noticed any difficulty breathing or swallowing?",
        "Do you have any itching, rash, or hives anywhere on your body?",
        "Have you been exposed to any new foods, medications, or substances recently?",
        "Have you had any recent dental work or facial trauma?",
        "Is this the first time you've experienced this type of swelling?",
        "Have you had any recent changes to your medications?",
        "Do you have any abdominal pain or cramping?",
        "Have you noticed your voice changing or becoming hoarse?",
        "Any family history of similar swelling episodes?",
        "Have you ever been told you're allergic to any blood pressure medications?",
        "How long have you been taking your current medications?"
    ],
    "patientResponses": {
        "default": "I'm not sure what you mean by that, doc. Can you ask me in a different way?",
        "onset": "I woke up this morning and noticed my lips felt funny, then over the next few hours my tongue started swelling too. It's been about 6 hours now.",
        "character": "It's just swollen and puffy, like someone inflated my lips and tongue. No burning or stinging, just feels thick and heavy.",
        "location": "Mainly my upper and lower lips, and the front part of my tongue. Nothing else on my face is swollen.",
        "severity": "Maybe a 6 out of 10 for concern - it's not painful but it's getting in the way of talking and eating normally.",
        "aggravating": "I haven't noticed anything that makes it worse. It just seems to be staying the same or maybe getting a little bigger.",
        "relieving": "Nothing I've tried helps. I took some Benadryl but it didn't do anything. Ice made it feel a little better temporarily.",
        "associated": "No, just the swelling. No trouble breathing, no rash, no stomach problems. Maybe my voice sounds a little different.",
        "denies": "No itching, no hives, no difficulty breathing, no throat tightness, no stomach pain, no recent illness or fever.",
        "history": "Never had anything like this before in my life. This is completely new for me.",
        "medications": "Lisinopril; Amlodipine",
        "allergies": "ACE Inhibitors (now)",
        "family": "Nothing like this runs in my family that I know of. My parents both had high blood pressure but no weird swelling.",
        "social": "I work in an office, don't smoke or drink much. Just beer on weekends sometimes. No drugs or anything unusual."
    },
    "examManeuvers": [
        "Inspect lips and perioral area",
        "Examine tongue and floor of mouth",
        "Palpate neck for lymphadenopathy",
        "Assess airway patency and voice quality",
        "Examine skin for urticaria or rash",
        "Auscultate heart and lungs",
        "Palpate abdomen for tenderness",
        "Assess peripheral pulses and edema",
        "Examine throat and uvula",
        "Check blood pressure in both arms"
    ],
    "examFindings": {
        "Inspect lips and perioral area": "Marked non-pitting edema of upper and lower lips, asymmetric with more prominent swelling of the upper lip. No erythema or urticaria.",
        "Examine tongue and floor of mouth": "Significant edema of the anterior tongue with mild asymmetry. Floor of mouth appears normal. No dental pathology visible.",
        "Palpate neck for lymphadenopathy": "No cervical, submandibular, or submental lymphadenopathy. No neck masses or thyromegaly.",
        "Assess airway patency and voice quality": "Airway patent with no stridor. Voice slightly muffled due to tongue swelling but no hoarseness. No respiratory distress.",
        "Examine skin for urticaria or rash": "No urticaria, rash, or other skin lesions anywhere on the body. No other areas of angioedema.",
        "Auscultate heart and lungs": "Regular rate and rhythm, no murmurs. Lungs clear to auscultation bilaterally, no wheezing.",
        "Palpate abdomen for tenderness": "Soft, non-tender, non-distended. No masses or organomegaly. Normal bowel sounds.",
        "Assess peripheral pulses and edema": "Distal pulses intact. No peripheral edema in hands, feet, or legs.",
        "Examine throat and uvula": "Uvula and posterior pharynx appear normal without edema. Tonsils normal size.",
        "Check blood pressure in both arms": "Elevated at 152/88 in both arms, consistent with provided vitals."
    },
    "ddxTargets": [
        "ACE inhibitor-induced angioedema (correct diagnosis)",
        "Hereditary angioedema",
        "Allergic angioedema",
        "Anaphylaxis",
        "Angioedema with airway compromise",
        "Cellulitis",
        "Dental abscess"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on 'allergy' and looking for typical allergic triggers while missing medication-induced angioedema, especially since patient has been on ACE inhibitor chronically",
        "prematureClosure": "Risk of stopping evaluation after ruling out anaphylaxis due to lack of urticaria and respiratory symptoms, missing the ACE inhibitor connection",
        "availabilityBias": "May focus on acute allergic reactions since they're more commonly discussed, while ACE inhibitor angioedema is less familiar despite being common in practice"
    },
    "coachPrompts": {
        "phase2": "Good start on your differential diagnosis. Looking at this 58-year-old African American male with isolated lip and tongue swelling, what specific questions about his medication history might be most crucial? Also, what's the significance of the absence of urticaria in this presentation?",
        "phase5": "Excellent work gathering the history and physical exam findings. You've identified isolated angioedema without urticaria in a patient on chronic ACE inhibitor therapy. How does this pattern of swelling help you narrow your differential? What's the most likely diagnosis and what's your next step in management?",
        "finalDebrief": "This case illustrates classic ACE inhibitor-induced angioedema - note how it can occur even after years of stable therapy, occurs more frequently in African Americans, and presents as isolated angioedema without urticaria. The key learning points are recognizing this pattern, knowing it can be delayed after starting ACE inhibitors, and understanding that immediate discontinuation is required with contraindication to all ACE inhibitors going forward."
    }
}
};