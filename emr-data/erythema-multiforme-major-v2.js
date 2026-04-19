/* emr-data/erythema-multiforme-major-v2.js — Variation: Erythema Multiforme Major */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Kevin Park",
      "patientHPI": "I keep getting these weird rashes that look like bullseyes on my hands and arms, and my mouth gets really sore with painful sores. This is the third time in a year, and it always seems to happen about a week after I get a cold sore on my lip. The rash spreads and my eyes get red and irritated too.",
      "dob": "06/16/2006",
      "age": "20",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-239128",
      "language": "English",
      "race": "Asian",
      "phone": "(314) 555-2011",
      "email": "kevin.x@email.com",
      "address": "5475 W Haddon Ave, Baltimore, MD 21206",
      "insurance": "Parents' plan",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(619) 555-9281",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
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
        "Context",
        "Recurrent EM from recurrent HSV — 3rd episode in 12 months"
      ],
      [
        "Trigger",
        "Every EM episode preceded by cold sore outbreak"
      ],
      [
        "Issue",
        "Not on HSV suppression — EM could be prevented with daily valacyclovir"
      ],
      [
        "School",
        "College junior — missing exams during flares"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "20yo with targetoid rash and oral erosions — 3rd episode in 12 months, always preceded by cold sore",
        "diagnosis": "Erythema Multiforme Major"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "EM major — recurrent, HSV-triggered",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "3rd episode in 12 months",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Oral mucosal erosions — unable to eat",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "HSV suppression NOT started despite recurrent pattern",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Missing college exams during flares",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Valacyclovir",
          "dose": "1g",
          "route": "PO",
          "frequency": "BID x5 days (treating active HSV)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Prednisone",
          "dose": "40mg",
          "route": "PO",
          "frequency": "Daily x5 days taper",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Magic mouthwash",
          "dose": "",
          "route": "PO swish/spit",
          "frequency": "QID for oral pain",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
          "hr": "82",
          "rr": "16",
          "temp": "37.8°C",
          "spo2": "99%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-266495",
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
            },
            {
              "name": "HSV/EM",
              "results": [
                {
                  "test": "HSV-1 IgG",
                  "value": "Positive",
                  "unit": "",
                  "range": "",
                  "flag": ""
                },
                {
                  "test": "HSV PCR (lip lesion)",
                  "value": "Positive — HSV-1",
                  "unit": "",
                  "range": "",
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
          "cc": "20yo with targetoid rash and oral erosions — 3rd episode in 12 months, always preceded by cold sore",
          "hpi": "20M college student with 3rd episode of targetoid rash + oral erosions in 12 months. Each episode preceded by cold sore 7-10 days prior. Classic presentation: target lesions on extremities, oral mucosal erosions, mild conjunctival injection. HSV-triggered EM major. KEY: This is NOT SJS/TEN — EM and SJS are different diseases. EM: targetoid with mucosal involvement, usually HSV-triggered, self-limited. SJS: widespread detachment, usually drug-triggered, potentially fatal. He should have been started on HSV suppression after the 2nd episode — daily valacyclovir would prevent both HSV outbreaks and subsequent EM.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief admission for severe oral erosions — unable to eat",
        "diagnosis": "Erythema Multiforme Major"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "EM major — oral erosions, dehydration",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "IV Fluids",
          "dose": "D5NS",
          "route": "IV",
          "frequency": "Maintenance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Valacyclovir",
          "dose": "1g",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
          "hr": "82",
          "rr": "16",
          "temp": "37.4°C",
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
          "accession": "LAB-227171",
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
          "cc": "Brief admission for severe oral erosions — unable to eat",
          "hpi": "Admitted for IV fluids due to inability to eat from oral erosions. Improving on valacyclovir.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — recurrent HSV-triggered EM, prophylaxis strategy",
        "diagnosis": "Erythema Multiforme Major"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Recurrent EM major — HSV-1 triggered",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "3 episodes/year — meets threshold for HSV suppression",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Daily valacyclovir prophylaxis prevents HSV reactivation AND downstream EM",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "EM vs SJS distinction — important for this patient's records and future care",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Valacyclovir",
          "dose": "500mg",
          "route": "PO",
          "frequency": "Daily x12 months (HSV suppression to prevent EM)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
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
          "accession": "LAB-713125",
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
          "cc": "A/I consult — recurrent HSV-triggered EM, prophylaxis strategy",
          "hpi": "A/I: 20M with HSV-triggered recurrent EM. Started daily valacyclovir 500mg — suppresses HSV reactivation, which prevents the EM cascade. Will continue 12 months minimum, then trial off. If EM recurs off suppression: lifelong valacyclovir. Also educated patient and PCP on EM vs SJS distinction — his chart should NOT say \"SJS\" as treatment and prognosis are completely different.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "EM follow-up — 6 months on valacyclovir prophylaxis, zero episodes",
        "diagnosis": "Erythema Multiforme Major"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Recurrent EM — ZERO episodes in 6 months on HSV suppression (previously 3/year)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Valacyclovir prophylaxis — well tolerated",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "No HSV cold sores either — both problems solved",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "College — no missed exams this semester",
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
          "frequency": "Daily (continuing 12-month course)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
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
          "accession": "LAB-325387",
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
          "cc": "EM follow-up — 6 months on valacyclovir prophylaxis, zero episodes",
          "hpi": "20M 6 months on daily valacyclovir. Zero EM episodes. Zero cold sores. Back to normal college life. Will trial off valacyclovir at 12 months — if EM returns, resume indefinitely.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Kevin Park",
    "dob": "06/16/2006",
    "age": "20",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-239128",
    "language": "English",
    "race": "Asian",
    "phone": "(412) 555-9792",
    "email": "kevin.x@email.com",
    "address": "9654 N Western Ave, Minneapolis, MN 55401",
    "insurance": "Parents' plan",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(317) 555-3695",
      "relationship": "Spouse"
    },
    "chiefComplaint": "20yo with targetoid rash and oral erosions — 3rd episode in 12 months, always preceded by cold sore",
    "diagnosis": "Erythema Multiforme Major"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "EM major — recurrent, HSV-triggered",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "3rd episode in 12 months",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Oral mucosal erosions — unable to eat",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "HSV suppression NOT started despite recurrent pattern",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Missing college exams during flares",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Valacyclovir",
      "dose": "1g",
      "route": "PO",
      "frequency": "BID x5 days (treating active HSV)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Prednisone",
      "dose": "40mg",
      "route": "PO",
      "frequency": "Daily x5 days taper",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Magic mouthwash",
      "dose": "",
      "route": "PO swish/spit",
      "frequency": "QID for oral pain",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "118/72",
      "hr": "82",
      "rr": "16",
      "temp": "37.8°C",
      "spo2": "99%",
      "pain": "6/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "20yo with targetoid rash and oral erosions — 3rd episode in 12 months, always preceded by cold sore",
      "hpi": "20M college student with 3rd episode of ringed rash + oral erosions in 12 months. Each episode preceded by cold sore 7-10 days prior. Presentation: round rings on extremities with central dusky color, oral mucosal erosions, mild conjunctival injection. HSV-triggered. KEY: This is NOT SJS/TEN — distinction matters for management.",
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
      "accession": "LAB-266495",
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
        },
        {
          "name": "HSV/EM",
          "results": [
            {
              "test": "HSV-1 IgG",
              "value": "Positive",
              "unit": "",
              "range": "",
              "flag": ""
            },
            {
              "test": "HSV PCR (lip lesion)",
              "value": "Positive — HSV-1",
              "unit": "",
              "range": "",
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
      "Context",
      "Recurrent EM from recurrent HSV — 3rd episode in 12 months"
    ],
    [
      "Trigger",
      "Every EM episode preceded by cold sore outbreak"
    ],
    [
      "Issue",
      "Not on HSV suppression — EM could be prevented with daily valacyclovir"
    ],
    [
      "School",
      "College junior — missing exams during flares"
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
  "guided": {
    "supported": true,
    "patientPersona": "Kevin appears frustrated and dejected, having missed multiple college exams due to recurrent episodes. He's cooperative but tired of dealing with the same problem repeatedly, expressing concern about his academic performance and wondering why this keeps happening despite previous treatments.",
    "interviewQuestions": [
      "Can you describe the rash and where it appeared?",
      "When did you first notice the current symptoms?",
      "Have you had similar episodes before?",
      "Do you get cold sores, and if so, when do they occur relative to the rash?",
      "Are you having any mouth pain or difficulty eating?",
      "What does the rash look like - can you describe the appearance?",
      "Have you had any fever or feeling unwell?",
      "What treatments have you tried for previous episodes?",
      "Are you currently taking any medications to prevent cold sores?",
      "How long do these episodes typically last?",
      "Have you noticed any specific triggers?",
      "How is this affecting your daily activities and school?",
      "Any recent new medications, foods, or exposures?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Can you ask it a different way?",
      "onset": "The rash started appearing about 3 days ago, maybe 7-10 days after I got a cold sore on my lip. It's the same pattern as my previous two episodes this year.",
      "character": "The rash looks like rings or targets - red circles with darker centers. Some of the spots look almost bull's-eye like. My mouth has painful sores that make it hard to swallow.",
      "location": "The rash is mainly on my hands, forearms, and feet. The mouth sores are on my lips and inside my cheeks and tongue.",
      "severity": "The mouth pain is about an 8 out of 10 - I can barely eat or drink anything. The rash itself doesn't hurt much, maybe a 3, but it's concerning looking.",
      "aggravating": "Hot or spicy foods make the mouth pain unbearable. The rash seems more noticeable when I'm stressed about missing school.",
      "relieving": "The magic mouthwash helps a little with eating. Cold liquids provide some relief. The prednisone seemed to help with previous episodes.",
      "associated": "I have a low-grade fever and feel generally unwell. I'm exhausted and have been having trouble sleeping because of the mouth pain.",
      "denies": "No joint pain, no eye problems, no genital sores, no difficulty breathing, no chest pain.",
      "history": "This is my third episode in the past year. Each time it started the same way - I get a cold sore first, then about a week later this rash appears with the mouth sores.",
      "medications": "Valacyclovir; Prednisone; Magic mouthwash",
      "allergies": "NKDA",
      "family": "Nothing really runs in my family related to skin problems or autoimmune issues.",
      "social": "I'm a college junior studying engineering. I don't smoke or use drugs. I drink occasionally at parties. This is really affecting my academics - I've had to miss exams during each episode."
    },
    "examManeuvers": [
      "Inspect skin lesions on extremities",
      "Examine oral mucosa and lips",
      "Assess lymph nodes",
      "Check vital signs and general appearance",
      "Examine conjunctiva and eyes",
      "Inspect palms and soles",
      "Assess for Nikolsky sign",
      "Examine for HSV lesions",
      "Check skin for other morphologies",
      "Assess hydration status"
    ],
    "examFindings": {
      "Inspect skin lesions on extremities": "Multiple targetoid lesions on bilateral hands, forearms, and feet. Classic three-zone targets with central dusky area, inner pale ring, and outer erythematous ring. Lesions measure 1-3 cm in diameter.",
      "Examine oral mucosa and lips": "Extensive erosions and ulcerations on lips, buccal mucosa, and tongue. Hemorrhagic crusting on lips. No vesicles present, suggesting evolved lesions.",
      "Assess lymph nodes": "Mild submandibular lymphadenopathy bilaterally, nodes mobile and non-tender.",
      "Check vital signs and general appearance": "Low-grade fever 37.8°C, appears mildly dehydrated and uncomfortable. BP 118/72, HR 82, SpO2 99%.",
      "Examine conjunctiva and eyes": "Conjunctiva clear, no injection or lesions. Extraocular movements intact.",
      "Inspect palms and soles": "Few targetoid lesions present on palms and soles, consistent with EM major distribution.",
      "Assess for Nikolsky sign": "Negative - no skin sloughing with lateral pressure.",
      "Examine for HSV lesions": "Healing cold sore lesion visible on lower lip with crusting, consistent with recent HSV outbreak.",
      "Check skin for other morphologies": "No bullae, no widespread erythema, no purpura. Lesions confined to typical EM distribution.",
      "Assess hydration status": "Mild dehydration evidenced by decreased oral intake, dry oral mucosa where not ulcerated."
    },
    "ddxTargets": [
      "Erythema multiforme major, HSV-associated (correct diagnosis)",
      "Stevens-Johnson syndrome",
      "Bullous pemphigoid",
      "Toxic epidermal necrolysis",
      "Drug reaction with eosinophilia and systemic symptoms (DRESS)",
      "Urticaria multiforme",
      "Viral exanthem with stomatitis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'recurrent rash' and missing the HSV trigger pattern, or focusing only on the current episode without recognizing the need for suppressive therapy.",
      "prematureClosure": "May quickly diagnose as simple viral exanthem or drug reaction without thoroughly evaluating the targetoid morphology and recurrent HSV association.",
      "availabilityBias": "Recent cases of drug reactions or common viral illnesses might overshadow the classic EM presentation, especially if not familiar with HSV-triggered recurrent EM."
    },
    "coachPrompts": {
      "phase2": "You've identified a recurrent targetoid rash with oral involvement. What specific historical details would help you differentiate between erythema multiforme, Stevens-Johnson syndrome, and other causes of target lesions? Consider the temporal relationship between different symptoms.",
      "phase5": "Now that you've examined the patient and noted the classic targetoid lesions with oral mucosal involvement, how does the recurrent nature and HSV association refine your differential diagnosis? What's the key management consideration for preventing future episodes?",
      "finalDebrief": "This case highlights HSV-associated recurrent erythema multiforme major. The key teaching points are: 1) Classic targetoid morphology with three zones, 2) Recurrent pattern triggered by HSV outbreaks, 3) Need for HSV suppressive therapy to prevent future episodes, and 4) Distinction from Stevens-Johnson syndrome based on extent and morphology. How did your thinking evolve from initial presentation to final diagnosis?"
    }
  }
};
