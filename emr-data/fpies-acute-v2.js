/* emr-data/fpies-acute-v2.js — Variation: FPIES — Acute */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Aaliyah Robinson",
  "patientHPI": "I was at school and they gave me rice even though I'm not supposed to have it, and then I started throwing up really bad for like two hours straight - now I feel so weak and dizzy I can barely sit up.",
      "dob": "02/24/2019",
      "age": "7",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-672043",
      "language": "English",
      "race": "Black/African American",
      "phone": "(614) 555-5773",
      "email": "aaliyah.x@email.com",
      "address": "2381 Dogwood Ln, Louisville, KY 40204",
      "insurance": "Medicaid",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(713) 555-2133",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Rice",
        "reaction": "FPIES",
        "severity": "Severe",
        "type": "Food"
      },
      {
        "allergen": "Oat",
        "reaction": "FPIES",
        "severity": "Severe",
        "type": "Food"
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
      "Mother: eczema"
    ],
    "socialHistory": [
      [
        "History",
        "Diagnosed FPIES to rice/oat at 5 months — multiple ER visits before diagnosis"
      ],
      [
        "Issue",
        "School gave rice despite 504 plan — school nurse gave EpiPen (wrong treatment for FPIES)"
      ],
      [
        "Teaching",
        "FPIES is NON-IgE, T-cell mediated — EpiPen does NOT work, ondansetron is first-line"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "7yo with known FPIES — school exposure to rice, profuse vomiting, lethargy, hypotension. School nurse gave EpiPen (ineffective).",
        "diagnosis": "FPIES — Acute"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "FPIES acute episode — rice at school",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "EpiPen given by school (wrong — FPIES is non-IgE)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Ondansetron is first-line for FPIES",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Dehydration with hypernatremia",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "504 plan failure — school needs FPIES-specific education",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Ondansetron",
          "dose": "0.15mg/kg",
          "route": "IV",
          "frequency": "x1 — vomiting stopped in 20 min",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "NS bolus",
          "dose": "20mL/kg",
          "route": "IV",
          "frequency": "Rapid x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Epinephrine",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "Given at school — NO effect",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "78/48",
          "hr": "142",
          "rr": "28",
          "temp": "36.2°C",
          "spo2": "96%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-511949",
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
                  "value": "18.4",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
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
                  "value": "148",
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
            },
            {
              "name": "FPIES MARKERS",
              "results": [
                {
                  "test": "Neutrophils",
                  "value": "14,200",
                  "unit": "cells/µL",
                  "range": "<8,000",
                  "flag": "H"
                },
                {
                  "test": "Methemoglobin",
                  "value": "1.8",
                  "unit": "%",
                  "range": "<1.5",
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
          "cc": "7yo with known FPIES — school exposure to rice, profuse vomiting, lethargy, hypotension. School nurse gave EpiPen (ineffective).",
          "hpi": "7F with known FPIES to rice/oat. School served rice — aide served it despite 504 plan. Nurse gave EpiPen (no effect — FPIES is non-IgE mediated). Profuse vomiting x2h, now pale, lethargic, hypotensive. Ondansetron given in ED — vomiting stopped in 20 min. FPIES looks like sepsis, not food allergy. Key: EpiPen does NOT work. Ondansetron is first-line. School needs FPIES-specific action plan.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for fluid resuscitation — school FPIES education plan",
        "diagnosis": "FPIES — Acute"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "FPIES — correcting dehydration",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Hypernatremia from vomiting losses",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "School action plan failure — need FPIES-specific education",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Ondansetron Rx for school nurse",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Parents considering legal action against school",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "IV Fluids",
          "dose": "D5 1/2NS",
          "route": "IV",
          "frequency": "1.5x maintenance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Ondansetron",
          "dose": "4mg",
          "route": "PO",
          "frequency": "Q8H PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "92/58",
          "hr": "118",
          "rr": "22",
          "temp": "36.8°C",
          "spo2": "98%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-848071",
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
          "cc": "Admitted for fluid resuscitation — school FPIES education plan",
          "hpi": "7F admitted for dehydration correction. Na improving. Social work involved with school district. Allergist will provide in-service training to school nurses on FPIES vs IgE-mediated food allergy.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — FPIES management, school education, supervised food challenge for oat",
        "diagnosis": "FPIES — Acute"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "FPIES to rice/oat — confirmed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "School needs FPIES action plan (NOT anaphylaxis plan)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Oat OFC planned — may have outgrown",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Ondansetron rescue for school and home",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Ondansetron ODT",
          "dose": "4mg",
          "route": "SL",
          "frequency": "PRN home + school supply",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "102/64",
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
          "accession": "LAB-422119",
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
          "cc": "A/I consult — FPIES management, school education, supervised food challenge for oat",
          "hpi": "A/I: 7F FPIES. School education letter: FPIES ≠ food allergy. Ondansetron NOT EpiPen. Supervised oat OFC planned — 60% outgrow by age 7.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "FPIES follow-up — passed oat OFC, school plan updated",
        "diagnosis": "FPIES — Acute"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "FPIES oat — OUTGROWN (passed OFC)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "FPIES rice — still reactive, avoid",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "School nurse training completed",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Rice OFC planned for age 8-9",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Ondansetron ODT",
          "dose": "4mg",
          "route": "SL",
          "frequency": "PRN (home + school)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "98/62",
          "hr": "92",
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
          "accession": "LAB-277690",
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
          "cc": "FPIES follow-up — passed oat OFC, school plan updated",
          "hpi": "7F passed oat OFC — diet expanded. Rice still restricted. School FPIES protocol in place. District nurses trained.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Aaliyah Robinson",
    "dob": "02/24/2019",
    "age": "7",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-672043",
    "language": "English",
    "race": "Black/African American",
    "phone": "(804) 555-7703",
    "email": "aaliyah.x@email.com",
    "address": "7033 Pine Ave, Minneapolis, MN 55411",
    "insurance": "Medicaid",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(704) 555-9180",
      "relationship": "Parent"
    },
    "chiefComplaint": "7yo with known FPIES — school exposure to rice, profuse vomiting, lethargy, hypotension. School nurse gave EpiPen (ineffective).",
    "diagnosis": "FPIES — Acute"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "FPIES acute episode — rice at school",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "EpiPen given by school (wrong — FPIES is non-IgE)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Ondansetron is first-line for FPIES",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Dehydration with hypernatremia",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "504 plan failure — school needs FPIES-specific education",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Ondansetron",
      "dose": "0.15mg/kg",
      "route": "IV",
      "frequency": "x1 — vomiting stopped in 20 min",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "NS bolus",
      "dose": "20mL/kg",
      "route": "IV",
      "frequency": "Rapid x2",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Epinephrine",
      "dose": "0.15mg",
      "route": "IM",
      "frequency": "Given at school — NO effect",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Rice",
      "reaction": "FPIES",
      "severity": "Severe",
      "type": "Food"
    },
    {
      "allergen": "Oat",
      "reaction": "FPIES",
      "severity": "Severe",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "78/48",
      "hr": "142",
      "rr": "28",
      "temp": "36.2°C",
      "spo2": "96%",
      "pain": "N/A/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "7yo with known FPIES — school exposure to rice, profuse vomiting, lethargy, hypotension. School nurse gave EpiPen (ineffective).",
      "hpi": "7F with known FPIES to rice/oat. School served rice — aide served it despite 504 plan. Nurse gave EpiPen (no effect — FPIES is non-IgE mediated). Profuse vomiting x2h, now pale, lethargic, hypotensive. Ondansetron given in ED — vomiting stopped in 20 min. FPIES looks like sepsis, not food allergy. Key: EpiPen does NOT work. Ondansetron is first-line. School needs FPIES-specific action plan.",
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
      "accession": "LAB-511949",
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
              "value": "18.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
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
              "value": "148",
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
        },
        {
          "name": "FPIES MARKERS",
          "results": [
            {
              "test": "Neutrophils",
              "value": "14,200",
              "unit": "cells/µL",
              "range": "<8,000",
              "flag": "H"
            },
            {
              "test": "Methemoglobin",
              "value": "1.8",
              "unit": "%",
              "range": "<1.5",
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
    "Mother: eczema"
  ],
  "socialHistory": [
    [
      "History",
      "Diagnosed FPIES to rice/oat at 5 months — multiple ER visits before diagnosis"
    ],
    [
      "Issue",
      "School gave rice despite 504 plan — school nurse gave EpiPen (wrong treatment for FPIES)"
    ],
    [
      "Teaching",
      "FPIES is NON-IgE, T-cell mediated — EpiPen does NOT work, ondansetron is first-line"
    ]
  ]
,"references":[
  {
    "id": "FPIES-Consensus-2017",
    "title": "International consensus guidelines for FPIES: executive summary",
    "authors": "Nowak-Wegrzyn A, Chehade M, Groetch ME, et al.",
    "journal": "J Allergy Clin Immunol",
    "year": 2017,
    "doi": "10.1016/j.jaci.2016.12.966",
    "url": "https://www.jacionline.org/article/S0091-6749(17)30153-7/fulltext",
    "openAccess": true,
    "validates": [
      "FPIES criteria: major + minor",
      "Ondansetron first-line (NOT epi)",
      "Chronic FPIES: insidious FTT",
      "Non-IgE, T-cell mediated",
      "60% resolution by age 3-5"
    ]
  }
],
  "guided": {
    "supported": true,
    "patientPersona": "Aaliyah Robinson is alert and cooperative, clearly concerned but provides a clear history.",
    "interviewQuestions": [
        "When did your symptoms start and how?",
        "Describe the main symptom \u2014 location, character, severity.",
        "What makes it worse? What makes it better?",
        "Any other symptoms you've noticed?",
        "Any prior similar episodes?",
        "Tell me about your medical history.",
        "What medications are you currently taking?",
        "Any medication allergies?",
        "Relevant family history?",
        "Tell me about your lifestyle."
    ],
    "patientResponses": {
        "default": "He pauses. 'Can you clarify what you mean?'",
        "onset": "'Gradually \u2014 over the past several days.'",
        "character": "'The symptom has been significant and affecting my ability to function.'",
        "location": "'The main problem is in the expected area for my condition.'",
        "severity": "'Six or seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
        "associated": "'Some associated symptoms consistent with this condition.'",
        "denies": "'No fever, chills, or unexplained weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Ondansetron; NS bolus; Epinephrine.'",
        "allergies": "'My allergies: Rice, Oat.'",
        "family": "Mother: eczema",
        "social": "History: Diagnosed FPIES to rice/oat at 5 months \u2014 multiple ER visits before diagnosis  Issue: School gave rice despite 504 plan \u2014 school nurse gave EpiPen (wrong treatment for FPIES)  Teaching: FPIES is NON-IgE, T-cell mediated \u2014 EpiPen does NOT work, ondansetron is first-line"
    },
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
        "phase2": "Before interviewing Aaliyah Robinson: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
