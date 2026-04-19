/* emr-data/erythema-multiforme-major.js — Multi-Setting Allergy Case: Erythema Multiforme Major */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Talia Brennan",
      "patientHPI": "I have these strange circular rashes on my hands and arms that look like targets, and my mouth is full of painful sores that make it hard to eat or drink. I had a cold sore on my lip about ten days ago, and now this is happening again like it did before.",
      "dob": "01/13/2007",
      "age": "19",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-231416",
      "language": "English",
      "race": "Black/African American",
      "phone": "(504) 555-4950",
      "email": "talia.brennan@email.com",
      "address": "5873 Hickory Rd, Minneapolis, MN 55409",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
      "emergencyContact": {
        "name": "Reginald Brennan",
        "phone": "(720) 555-2698",
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
        "HSV history",
        "3-4 outbreaks per year, last cold sore 10 days ago"
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
        "chiefComplaint": "Target lesions on hands, forearms with oral mucosal erosions",
        "diagnosis": "Erythema Multiforme Major"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Recurrent herpes labialis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recent cold sore 10 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Valacyclovir",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN for outbreaks",
          "status": "Active",
          "prescriber": "Dr. Lisa Chang, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/01/2026",
          "time": "07:45",
          "bp": "118/72",
          "hr": "88",
          "rr": "16",
          "temp": "37.8°C",
          "spo2": "99%",
          "pain": "6/10",
          "bmi": "34",
          "weight": "60 kg"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-369532",
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
                  "value": "7.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
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
                  "value": "0.9",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
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
                  "test": "Esr",
                  "value": "32",
                  "unit": "mm/hr",
                  "range": "0-20",
                  "flag": "H"
                },
                {
                  "test": "Hsv",
                  "value": "Positive",
                  "unit": "",
                  "range": "",
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
          "id": "visit-ed",
          "type": "Emergency Visit",
          "date": "03/01/2026",
          "provider": "Dr. ED Attending",
          "cc": "Target lesions on hands, forearms with oral mucosal erosions",
          "hpi": "Talia Brennan is a 19-year-old female presenting with target lesions on hands, forearms with oral mucosal erosions. Past medical history includes Recurrent herpes labialis, Recent cold sore 10 days ago. See chart for full details.",
          "exam": "See physical examination documentation.",
          "assessment": "Erythema Multiforme Major — clinical presentation and workup consistent with diagnosis.",
          "plan": "See orders and management plan."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for EM Major with oral mucosal involvement — unable to eat",
        "diagnosis": "Erythema Multiforme Major"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Recurrent herpes labialis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recent cold sore 10 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Valacyclovir",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN for outbreaks",
          "status": "Active",
          "prescriber": "Dr. Lisa Chang, MD"
        },
        {
          "id": "med-add-1",
          "name": "Magic mouthwash",
          "dose": "",
          "route": "Swish/spit",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "IV Fluids",
          "dose": "D5 1/2NS",
          "route": "IV",
          "frequency": "100mL/hr",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "112/68",
          "hr": "88",
          "rr": "16",
          "temp": "37.6°C",
          "spo2": "98%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-369532",
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
                  "value": "7.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
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
                  "value": "0.9",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
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
                  "test": "Esr",
                  "value": "32",
                  "unit": "mm/hr",
                  "range": "0-20",
                  "flag": "H"
                },
                {
                  "test": "Hsv",
                  "value": "Positive",
                  "unit": "",
                  "range": "",
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
          "cc": "Admitted for EM Major with oral mucosal involvement — unable to eat",
          "hpi": "Talia Brennan — Admitted for EM Major with oral mucosal involvement — unable to eat",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — differentiate EM Major from SJS, identify trigger (HSV vs drug)",
        "diagnosis": "Erythema Multiforme Major"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Recurrent herpes labialis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recent cold sore 10 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Valacyclovir",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN for outbreaks",
          "status": "Active",
          "prescriber": "Dr. Lisa Chang, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "114/70",
          "hr": "82",
          "rr": "14",
          "temp": "37.2°C",
          "spo2": "99%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-369532",
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
                  "value": "7.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
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
                  "value": "0.9",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
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
                  "test": "Esr",
                  "value": "32",
                  "unit": "mm/hr",
                  "range": "0-20",
                  "flag": "H"
                },
                {
                  "test": "Hsv",
                  "value": "Positive",
                  "unit": "",
                  "range": "",
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
          "cc": "A/I consult — differentiate EM Major from SJS, identify trigger (HSV vs drug)",
          "hpi": "Talia Brennan — A/I consult — differentiate EM Major from SJS, identify trigger (HSV vs drug)",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "EM follow-up — recurrence prevention, HSV prophylaxis if HSV-triggered",
        "diagnosis": "Erythema Multiforme Major"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Recurrent herpes labialis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recent cold sore 10 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Valacyclovir",
          "dose": "500mg",
          "route": "PO",
          "frequency": "Daily (suppressive if HSV-triggered)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
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
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-369532",
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
                  "value": "7.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
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
                  "value": "0.9",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
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
                  "test": "Esr",
                  "value": "32",
                  "unit": "mm/hr",
                  "range": "0-20",
                  "flag": "H"
                },
                {
                  "test": "Hsv",
                  "value": "Positive",
                  "unit": "",
                  "range": "",
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
          "cc": "EM follow-up — recurrence prevention, HSV prophylaxis if HSV-triggered",
          "hpi": "Talia Brennan — EM follow-up — recurrence prevention, HSV prophylaxis if HSV-triggered",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Talia Brennan",
    "dob": "01/13/2007",
    "age": "19",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-231416",
    "language": "English",
    "race": "Black/African American",
    "phone": "(803) 555-6447",
    "email": "talia.brennan@email.com",
    "address": "3087 Pine Ave, Minneapolis, MN 55401",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "Reginald Brennan",
      "phone": "(317) 555-1726",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Target lesions on hands, forearms with oral mucosal erosions",
    "diagnosis": "Erythema Multiforme Major"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Recurrent herpes labialis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Recent cold sore 10 days ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Valacyclovir",
      "dose": "500mg",
      "route": "PO",
      "frequency": "PRN for outbreaks",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
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
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "118/72",
      "hr": "88",
      "rr": "16",
      "temp": "37.8°C",
      "spo2": "99%",
      "pain": "6/10",
      "bmi": "34",
      "weight": "60 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Target lesions on hands, forearms with oral mucosal erosions",
      "hpi": "Talia Brennan is a 19-year-old female presenting with a rash on her hands and forearms with mouth sores. Past medical history includes Recurrent herpes labialis, Recent cold sore 10 days ago. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Erythema Multiforme Major — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-369532",
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
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
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
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
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
              "test": "Esr",
              "value": "32",
              "unit": "mm/hr",
              "range": "0-20",
              "flag": "H"
            },
            {
              "test": "Hsv",
              "value": "Positive",
              "unit": "",
              "range": "",
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
      "HSV history",
      "3-4 outbreaks per year, last cold sore 10 days ago"
    ],
    [
      "Tobacco",
      "Never"
    ]
  ],
  "references": [
    {
      "id": "EM-HSV-Prevention",
      "title": "Erythema multiforme: recognition, treatment, and prevention",
      "authors": "Sokumbi O, Wetter DA.",
      "journal": "Cleve Clin J Med",
      "year": 2012,
      "doi": "10.3949/ccjm.79a.11118",
      "url": "https://pubmed.ncbi.nlm.nih.gov/22473726/",
      "openAccess": true,
      "validates": [
        "HSV triggers >70% recurrent EM",
        "Valacyclovir 500mg daily prevents recurrence",
        "EM vs SJS = different diseases"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "EM major is caused by infections (HSV #1 in adults, Mycoplasma pneumoniae #1 in children), NOT drugs. This distinguishes it from SJS/TEN which is drug-caused. Classic target lesions (3 zones: pale dusky center, dark edematous ring, red periphery) are the hallmark — present in acral distribution (palms, soles, dorsal hands, face).",
      "EM major vs SJS: EM has typical 3-zone target lesions + acral distribution + usually 1 mucosal site + self-limiting. SJS has ill-defined atypical targets/purpuric macules + extensive trunk distribution + all mucosal sites + drug-caused + Nikolsky positive.",
      "Recurrent EM (from HSV): daily suppressive acyclovir/valacyclovir reduces recurrence by 50–75%. This is a common clinical scenario — patient with recurrent EM should be on HSV suppression."
    ],
    "boardPearls": [
      "EM cause: infections (HSV #1 adults, Mycoplasma #1 children). NOT drugs (drugs → SJS/TEN).",
      "Classic target lesion: 3 zones — pale/dusky center + dark edematous inner ring + red outer ring. Acral distribution (palms, soles, dorsal hands, face).",
      "EM major vs SJS: EM = infection, 3-zone targets, acral, limited mucosal (1 site, usually oral), Nikolsky NEGATIVE, self-limiting. SJS = drug, ill-defined targets, trunk-dominant, all mucosal sites, Nikolsky POSITIVE.",
      "Nikolsky sign: NEGATIVE in EM major. Positive in TEN, pemphigus vulgaris, SSSS.",
      "Natural history: EM major resolves in 2–6 weeks. Recurs with each HSV episode.",
      "Recurrent EM treatment: suppress HSV — valacyclovir 500 mg BID daily (or acyclovir 400 mg BID) × 6–12 months.",
      "EM minor: same lesions, NO/minimal mucosal involvement. Also HSV-triggered."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Talia Brennan appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did target lesions on hands, forearms with oral mucosal erosions start?",
      "Can you describe exactly how it started — sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history — any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle — work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "She pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "The spots on my hands appeared about a week ago, right after a cold sore cleared up, and then the mouth sores started.",
      "character": "The spots are round with rings — a dark center with lighter circles around it. Mostly on my hands and forearms. My mouth is sore too.",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Valacyclovir.'",
      "allergies": "'My allergies are NKDA.'",
      "family": "Non-contributory",
      "social": "HSV history: 3-4 outbreaks per year, last cold sore 10 days ago  Tobacco: Never"
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
      "phase2": "You've reviewed Talia Brennan's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
