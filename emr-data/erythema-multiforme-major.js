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
    "patientPersona": "Talia appears anxious and distressed about her appearance, frequently covering her hands while speaking. She is cooperative but somewhat embarrassed, requiring gentle encouragement to fully describe her symptoms and show the affected areas.",
    "interviewQuestions": [
      "When did you first notice the rash on your hands and arms?",
      "Can you describe what the rash looks like?",
      "Have the lesions changed in appearance since they started?",
      "Are the sores in your mouth painful?",
      "Have you had any fever, chills, or feeling unwell?",
      "You mentioned a recent cold sore - when exactly was that?",
      "Have you been taking any medications for your cold sores?",
      "Have you noticed any triggers that bring on your cold sores?",
      "Have you had any recent stress, illness, or sun exposure?",
      "Do you have any joint pain or muscle aches?",
      "Have you used any new soaps, lotions, or products recently?",
      "Has anyone close to you been sick recently?",
      "Have you ever had a reaction like this before?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean. Could you ask that differently?",
      "onset": "The rash started about 3 days ago on my hands, then spread to my forearms yesterday. The mouth sores started around the same time.",
      "character": "The spots look like red bumps that turned into blisters, and some have crusted over. My mouth has painful shallow sores on my lips and inside my cheeks.",
      "location": "It's mainly on the backs of my hands and forearms, but I have a few spots on my palms too. The mouth sores are on my lower lip and inside both cheeks.",
      "severity": "The pain is about a 6 out of 10, especially in my mouth. It hurts to eat or drink anything. The hand lesions are tender but not as bad.",
      "aggravating": "Eating or drinking anything makes my mouth hurt terribly. Moving my hands a lot makes them sting more.",
      "relieving": "Ice chips help my mouth a little. I've been trying to keep my hands covered and avoid touching things.",
      "associated": "I've felt tired and had a low fever for the past couple days. My lymph nodes under my jaw feel swollen too.",
      "denies": "No joint pain, no eye problems, no genital lesions, no problems urinating, no shortness of breath or chest pain.",
      "history": "I get cold sores pretty regularly, maybe 3-4 times a year, but I've never had anything like this on my hands before.",
      "medications": "Valacyclovir",
      "allergies": "NKDA",
      "family": "No one in my family has skin problems or autoimmune diseases that I know of.",
      "social": "I'm a college student, been pretty stressed with finals lately. I don't smoke or drink much. I had that cold sore about 10 days ago that I was picking at - I know I shouldn't have."
    },
    "examManeuvers": [
      "Inspect hands and forearms for lesion morphology",
      "Examine oral mucosa and lips",
      "Palpate cervical and submandibular lymph nodes",
      "Examine conjunctivae and ocular surfaces",
      "Inspect other skin surfaces for lesions",
      "Assess for Nikolsky sign",
      "Examine fingernails and nail folds",
      "Check vital signs including temperature",
      "Assess hydration status",
      "Examine genital area if indicated"
    ],
    "examFindings": {
      "Inspect hands and forearms for lesion morphology": "Multiple vesicles and shallow erosions with erythematous bases on dorsal hands and forearms, some with hemorrhagic crusting. Classic 'target-like' lesions with central vesicle or crust surrounded by erythematous halo.",
      "Examine oral mucosa and lips": "Shallow, painful erosions on lower lip and bilateral buccal mucosa. Erythematous base with minimal exudate.",
      "Palpate cervical and submandibular lymph nodes": "Bilateral tender submandibular and anterior cervical lymphadenopathy, nodes approximately 1-1.5cm, mobile.",
      "Examine conjunctivae and ocular surfaces": "Conjunctivae clear, no injection or discharge. Sclera white, pupils equal and reactive.",
      "Inspect other skin surfaces for lesions": "No lesions on trunk, legs, or other areas. Face clear except for oral involvement.",
      "Assess for Nikolsky sign": "Negative - no skin slippage with lateral pressure.",
      "Examine fingernails and nail folds": "Normal nail plates, no periungual lesions or nail fold involvement.",
      "Check vital signs including temperature": "Temperature 37.8°C, other vitals stable as noted.",
      "Assess hydration status": "Mildly dehydrated, mucous membranes slightly dry, likely due to poor oral intake.",
      "Examine genital area if indicated": "Deferred as patient denies genital symptoms and no clinical indication."
    },
    "ddxTargets": [
      "Eczema herpeticum (correct diagnosis)",
      "Erythema multiforme minor",
      "Hand-foot-and-mouth disease",
      "Stevens-Johnson syndrome",
      "Disseminated herpes simplex",
      "Contact dermatitis with secondary infection",
      "Impetigo"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on HSV history and immediately assuming primary herpes without considering secondary complications like eczema herpeticum",
      "prematureClosure": "May stop at 'herpes outbreak' without recognizing the atypical distribution and target lesion morphology suggesting eczema herpeticum",
      "availabilityBias": "Recent exposure to common conditions like hand-foot-mouth disease or contact dermatitis may overshadow the more serious diagnosis"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, consider: What's significant about the timing between her cold sore and this new rash? How might her history of recurrent HSV play a role in this current presentation?",
      "phase5": "Now that you've examined the patient, think about the pattern of her lesions. What's unusual about having 'target-like' lesions on the hands in someone with recent HSV? How does this change your differential?",
      "finalDebrief": "This case demonstrates eczema herpeticum - HSV superinfection of compromised skin. Notice how the history of recent cold sore manipulation, the target lesion morphology, and the distribution pattern all pointed away from simple contact dermatitis toward this more serious HSV complication requiring systemic antiviral therapy."
    }
  }
};
