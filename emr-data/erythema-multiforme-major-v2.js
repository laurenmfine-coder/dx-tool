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
    "patientPersona": "Kevin Park is alert and cooperative, clearly concerned but provides a clear history.",
    "interviewQuestions": [
      "When did your symptoms start and how?",
      "Describe the main symptom — location, character, severity.",
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
      "onset": "'Gradually — over the past several days.'",
      "character": "'The symptom has been significant and affecting my ability to function.'",
      "location": "'The main problem is in the expected area for my condition.'",
      "severity": "'Six or seven out of ten.'",
      "aggravating": "'Activity and movement worsen it.'",
      "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
      "associated": "'Some associated symptoms consistent with this condition.'",
      "denies": "'No fever, chills, or unexplained weight loss.'",
      "history": "'I have not had exactly this before.'",
      "medications": "'I take Valacyclovir; Prednisone; Magic mouthwash.'",
      "allergies": "'My allergies: NKDA.'",
      "family": "Non-contributory",
      "social": "Context: Recurrent EM from recurrent HSV — 3rd episode in 12 months  Trigger: Every EM episode preceded by cold sore outbreak  Issue: Not on HSV suppression — EM could be prevented with daily valacyclovir  School: College junior — missing exams during flares"
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
      "phase2": "Before interviewing Kevin Park: what does the chart suggest? Top 3 diagnoses?",
      "phase5": "After history and exam: how has your differential changed?",
      "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
  }
};
