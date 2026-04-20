
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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "Diagnosed FPIES to rice/oat at 5 months \u2014 multiple ER visits before diagnosis"
      ],
      [
        "Issue",
        "School gave rice despite 504 plan \u2014 school nurse gave EpiPen (wrong treatment for FPIES)"
      ],
      [
        "Teaching",
        "FPIES is NON-IgE, T-cell mediated \u2014 EpiPen does NOT work, ondansetron is first-line"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "7yo with known FPIES \u2014 school exposure to rice, profuse vomiting, lethargy, hypotension. School nurse gave EpiPen (ineffective).",
        "diagnosis": "FPIES \u2014 Acute"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "FPIES acute episode \u2014 rice at school",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "EpiPen given by school (wrong \u2014 FPIES is non-IgE)",
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
          "description": "504 plan failure \u2014 school needs FPIES-specific education",
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
          "frequency": "x1 \u2014 vomiting stopped in 20 min",
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
          "frequency": "Given at school \u2014 NO effect",
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
          "temp": "36.2\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "cells/\u00b5L",
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
          "cc": "7yo with known FPIES \u2014 school exposure to rice, profuse vomiting, lethargy, hypotension. School nurse gave EpiPen (ineffective).",
          "hpi": "7F with known FPIES to rice/oat. School served rice \u2014 aide served it despite 504 plan. Nurse gave EpiPen (no effect \u2014 FPIES is non-IgE mediated). Profuse vomiting x2h, now pale, lethargic, hypotensive. Ondansetron given in ED \u2014 vomiting stopped in 20 min. FPIES looks like sepsis, not food allergy. Key: EpiPen does NOT work. Ondansetron is first-line. School needs FPIES-specific action plan.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for fluid resuscitation \u2014 school FPIES education plan",
        "diagnosis": "FPIES \u2014 Acute"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "FPIES \u2014 correcting dehydration",
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
          "description": "School action plan failure \u2014 need FPIES-specific education",
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
          "temp": "36.8\u00b0C",
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
          "cc": "Admitted for fluid resuscitation \u2014 school FPIES education plan",
          "hpi": "7F admitted for dehydration correction. Na improving. Social work involved with school district. Allergist will provide in-service training to school nurses on FPIES vs IgE-mediated food allergy.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 FPIES management, school education, supervised food challenge for oat",
        "diagnosis": "FPIES \u2014 Acute"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "FPIES to rice/oat \u2014 confirmed",
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
          "description": "Oat OFC planned \u2014 may have outgrown",
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
          "cc": "A/I consult \u2014 FPIES management, school education, supervised food challenge for oat",
          "hpi": "A/I: 7F FPIES. School education letter: FPIES \u2260 food allergy. Ondansetron NOT EpiPen. Supervised oat OFC planned \u2014 60% outgrow by age 7.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "FPIES follow-up \u2014 passed oat OFC, school plan updated",
        "diagnosis": "FPIES \u2014 Acute"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "FPIES oat \u2014 OUTGROWN (passed OFC)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "FPIES rice \u2014 still reactive, avoid",
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
          "cc": "FPIES follow-up \u2014 passed oat OFC, school plan updated",
          "hpi": "7F passed oat OFC \u2014 diet expanded. Rice still restricted. School FPIES protocol in place. District nurses trained.",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(704) 555-9180",
      "relationship": "Parent"
    },
    "chiefComplaint": "7yo with known FPIES \u2014 school exposure to rice, profuse vomiting, lethargy, hypotension. School nurse gave EpiPen (ineffective).",
    "diagnosis": "FPIES \u2014 Acute"
  },
  "problems": [
    {
      "problem": "FPIES \u2014 soy trigger, acute presentation",
      "icd": "K52.29",
      "onset": "2024",
      "status": "Active",
      "notes": "Noah Williams, 7M \u2014 1.5-2h after soy formula: profuse vomiting x10-15 episodes, lethargy, pallor. No IgE-mediated features."
    },
    {
      "problem": "Acute dehydration \u2014 fluid replacement needed",
      "icd": "E86.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Lethargy and pallor from dehydration and vagal response. NS IV bolus given."
    },
    {
      "problem": "Soy and cow's milk avoidance \u2014 FPIES management",
      "icd": "K52.29",
      "onset": "2024",
      "status": "Active",
      "notes": "FPIES patients often react to multiple proteins \u2014 soy triggers in ~50% of cow's milk FPIES patients."
    }
  ],
  "medications": [
    {
      "name": "Ondansetron 0.1-0.15mg/kg IM/IV \u2014 acute FPIES treatment",
      "sig": "Ondansetron blocks the 5-HT3 vagal pathway that causes FPIES vomiting. Single dose often terminates episode. First-line acute treatment.",
      "prescriber": "ED/Allergy",
      "start": "2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Normal saline 20mL/kg IV bolus \u2014 volume resuscitation",
      "sig": "IV fluid bolus for dehydration and hemodynamic support. Reassess after bolus.",
      "prescriber": "ED",
      "start": "2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Extensively hydrolyzed or amino acid formula \u2014 transition from soy",
      "sig": "Amino acid formula (Neocate, EleCare) if cow's milk FPIES also present. Extensively hydrolyzed (Alimentum) if tolerating.",
      "prescriber": "Allergy/GI",
      "start": "2024",
      "refills": 2,
      "status": "Active \u2014 transition"
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
      "temp": "36.2\u00b0C",
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
      "cc": "7yo with known FPIES \u2014 school exposure to rice, profuse vomiting, lethargy, hypotension. School nurse gave EpiPen (ineffective).",
      "hpi": "7F with known FPIES to rice/oat. School served rice \u2014 aide served it despite 504 plan. Nurse gave EpiPen (no effect \u2014 FPIES is non-IgE mediated). Profuse vomiting x2h, now pale, lethargic, hypotensive. Ondansetron given in ED \u2014 vomiting stopped in 20 min. FPIES looks like sepsis, not food allergy. Key: EpiPen does NOT work. Ondansetron is first-line. School needs FPIES-specific action plan.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "FPIES Acute Assessment",
      "results": [
        {
          "test": "Tryptase (drawn during acute episode)",
          "value": "3.2",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": ""
        },
        {
          "test": "WBC (drawn 6h post-reaction \u2014 FPIES marker)",
          "value": "22,400",
          "unit": "cells/\u03bcL",
          "ref": "<15,000",
          "flag": "H"
        },
        {
          "test": "Stool reducing substances",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Blood glucose",
          "value": "62",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "L"
        },
        {
          "test": "Sodium",
          "value": "134",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
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
      "Diagnosed FPIES to rice/oat at 5 months \u2014 multiple ER visits before diagnosis"
    ],
    [
      "Issue",
      "School gave rice despite 504 plan \u2014 school nurse gave EpiPen (wrong treatment for FPIES)"
    ],
    [
      "Teaching",
      "FPIES is NON-IgE, T-cell mediated \u2014 EpiPen does NOT work, ondansetron is first-line"
    ]
  ],
  "references": [
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
    "patientPersona": "Aaliyah appears pale and lethargic, lying quietly with her mother who is visibly upset and frustrated about the school's mistake. The child responds weakly but cooperatively to questions, while mother provides most details about the FPIES history and today's incident.",
    "interviewQuestions": [
      "Can you tell me exactly what happened at school today?",
      "What did Aaliyah eat and when?",
      "When did the vomiting start after eating?",
      "How many times has she vomited and what did it look like?",
      "Has she had any rash, hives, or breathing problems?",
      "What treatment did the school nurse give?",
      "Has Aaliyah had reactions like this before?",
      "What foods is she allergic to?",
      "How was her FPIES originally diagnosed?",
      "Does she have a 504 plan at school?",
      "Has she been able to keep any fluids down?",
      "Any fever, diarrhea, or blood in vomit?",
      "What medications work for her FPIES episodes?"
    ],
    "patientResponses": {
      "default": "I feel really sick... mommy can you tell them?",
      "onset": "I ate the rice at lunch and then my tummy started hurting really bad about an hour later, then I threw up a lot",
      "character": "It's like throwing up everything in my stomach over and over, and I feel so weak and dizzy",
      "location": "My whole tummy hurts and I feel sick all over",
      "severity": "It's a 9 out of 10 - I feel terrible and can't even sit up",
      "aggravating": "Any movement makes me feel more sick, and I can't keep anything down",
      "relieving": "Nothing helped - the shot the nurse gave me didn't do anything",
      "associated": "I'm really tired, dizzy, and everything looks blurry. No itching or trouble breathing though",
      "denies": "No rash, no trouble breathing, no hives, no fever, no diarrhea yet",
      "history": "Yes, this happened before with rice and oats when I was a baby - that's how we found out about my FPIES",
      "medications": "Ondansetron; NS bolus; Epinephrine",
      "allergies": "Rice, Oat",
      "family": "My mom has eczema but no food allergies like mine",
      "social": "I'm in second grade and usually the lunch ladies know not to give me rice, but there was a substitute today"
    },
    "examManeuvers": [
      "General appearance and mental status",
      "Vital signs assessment",
      "Skin examination for rash or hives",
      "HEENT exam for dehydration signs",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination",
      "Capillary refill and peripheral perfusion",
      "Neurologic assessment",
      "Lymph node examination"
    ],
    "examFindings": {
      "General appearance and mental status": "Pale, lethargic 7-year-old lying supine, appears ill but responds appropriately",
      "Vital signs assessment": "BP 78/48 (hypotensive), HR 142 (tachycardic), Temp 36.2\u00b0C, SpO2 96%, weight appears decreased",
      "Skin examination for rash or hives": "Pale, cool skin with delayed capillary refill, no urticaria, angioedema, or rash present",
      "HEENT exam for dehydration signs": "Dry mucous membranes, sunken eyes, no lymphadenopathy or oral lesions",
      "Cardiovascular examination": "Tachycardic regular rhythm, weak peripheral pulses, no murmur",
      "Pulmonary examination": "Clear breath sounds bilaterally, no wheezing, stridor, or respiratory distress",
      "Abdominal examination": "Soft, mildly tender diffusely, hypoactive bowel sounds, no organomegaly",
      "Capillary refill and peripheral perfusion": "Capillary refill 3-4 seconds, cool extremities, weak peripheral pulses",
      "Neurologic assessment": "Alert but lethargic, appropriate responses, no focal deficits",
      "Lymph node examination": "No significant lymphadenopathy palpated"
    },
    "ddxTargets": [
      "FPIES \u2014 soy trigger, acute profuse vomiting 1.5-2h post-ingestion (correct)",
      "IgE-mediated food allergy \u2014 no urticaria/angioedema, tryptase normal, delayed onset",
      "Viral gastroenteritis \u2014 exposure timing to specific food, pattern of episodic reactions",
      "Hypertrophic pyloric stenosis \u2014 age, projectile vomiting, but no food-specific timing",
      "Intussusception \u2014 episodic pain + currant jelly stool; different presentation",
      "Sepsis \u2014 WBC elevation is a FPIES feature, not infection"
    ],
    "biasFlags": {
      "anchoring": "Don't anchor on the EpiPen administration - FPIES is non-IgE mediated and won't respond to epinephrine",
      "prematureClosure": "Don't assume this is typical anaphylaxis because EpiPen was given - the delayed onset and GI-predominant symptoms suggest FPIES",
      "availabilityBias": "FPIES is less common than viral gastroenteritis, but the known history and specific food trigger make it most likely"
    },
    "coachPrompts": {
      "phase2": "You've identified several possibilities including FPIES and anaphylaxis. What key historical features will help you distinguish between IgE-mediated and non-IgE mediated food reactions? Think about timing, symptoms, and response to treatment.",
      "phase5": "Your exam shows hypotension and dehydration without urticaria or respiratory symptoms. The EpiPen was ineffective. How does this clinical picture, combined with the known FPIES history and rice exposure, help narrow your differential?",
      "finalDebrief": "This case highlights the critical difference between IgE-mediated food allergies and FPIES. FPIES presents with delayed GI symptoms, doesn't respond to epinephrine, and requires ondansetron and IV fluids. How will you ensure proper school education to prevent future episodes?",
      "final": "Diagnosis: FPIES \u2014 acute soy reaction. Key learning: (1) FPIES mechanism: non-IgE-mediated cell-mediated gut reaction. Antigen triggers T-cell/eosinophil cascade in gut submucosa \u2192 TNF-\u03b1 release \u2192 intestinal inflammation \u2192 vagal nerve activation \u2192 profuse vomiting. Timeline: 1-4 hours after ingestion (never immediate). (2) Classic FPIES picture: infant with profuse, repetitive vomiting (10-20 episodes) 1-4 hours after trigger food, pallor, lethargy, and NO urticaria/angioedema/wheeze. Appears severely ill but recovers quickly. WBC surge (leukocytosis) 6h post-reaction is a diagnostic criterion. (3) Ondansetron: the vomiting in FPIES is 5-HT3-mediated (vagal). Ondansetron blocks this receptor \u2014 dramatically reduces vomiting within 15-30 minutes. It is first-line acute management. (4) Common triggers: cow's milk and soy are most common (80-90% of cases). Rice, oat, and other grains are next. Multiple food triggers in same patient are common. (5) Prognosis: most FPIES resolves by age 3-5 years. Supervised oral food challenges (OFC) at age 12-18 months post-reaction confirm ongoing FPIES before permanent elimination. Allergy referral is essential."
    }
  },
  "meta": {
    "diagnosis": "FPIES \u2014 Food Protein-Induced Enterocolitis Syndrome, Acute Reaction to Soy, Ondansetron Treatment",
    "caseId": "fpies-acute-v2"
  }
};
