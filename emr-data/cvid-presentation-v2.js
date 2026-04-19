/* emr-data/cvid-presentation-v2.js — Variation: CVID */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Ryan Fitzgerald",
      "patientHPI": "I keep getting these awful lung infections - this is my fourth one in just two years, and I'm only 26. The doctors finally did some blood work and found out my immune system isn't working right, which explains why I've been sick so much. Now I'm panicking because I'm about to lose my parents' insurance in two months and the treatment I need costs tens of thousands of dollars a year.",
      "dob": "09/26/2000",
      "age": "26",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-744880",
      "language": "English",
      "race": "White",
      "phone": "(513) 555-3531",
      "email": "ryan.x@email.com",
      "address": "6170 W Haddon Ave, Kansas City, MO 64112",
      "insurance": "Parents' plan (aging out at 26)",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(513) 555-2622",
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
      "Brother: IgA deficiency",
      "Mother: autoimmune thyroiditis"
    ],
    "socialHistory": [
      [
        "Infections",
        "6 sinusitis, 3 pneumonias, 2 otitis in 3 years"
      ],
      [
        "Antibiotics",
        "On antibiotics more than off for 2 years"
      ],
      [
        "Insurance",
        "Aging off parents' plan — panicking about IVIG coverage ($30-60K/yr)"
      ],
      [
        "GI",
        "Chronic diarrhea — nodular lymphoid hyperplasia on colonoscopy"
      ],
      [
        "Prior",
        "Told he \"just catches colds easily\""
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "26yo with 4th pneumonia in 2 years — bilateral, failing outpatient antibiotics. Immunoglobulins finally checked: IgG 142.",
        "diagnosis": "CVID"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Bilateral CAP — failing levofloxacin",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "CVID — IgG 142, IgA <7, IgM 22 (critically low)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "9 sinopulmonary infections in 3 years",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Chronic diarrhea — CVID enteropathy",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Early bronchiectasis found on CT",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Insurance crisis — aging off parents' plan",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Ceftriaxone",
          "dose": "2g",
          "route": "IV",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Azithromycin",
          "dose": "500mg",
          "route": "IV",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "108/68",
          "hr": "98",
          "rr": "22",
          "temp": "38.6°C",
          "spo2": "92%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-898308",
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
                  "value": "3.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "L"
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
              "name": "IMMUNOLOGY",
              "results": [
                {
                  "test": "IgG",
                  "value": "142",
                  "unit": "mg/dL",
                  "range": "700-1600",
                  "flag": "L"
                },
                {
                  "test": "IgA",
                  "value": "<7",
                  "unit": "mg/dL",
                  "range": "70-400",
                  "flag": "L"
                },
                {
                  "test": "IgM",
                  "value": "22",
                  "unit": "mg/dL",
                  "range": "40-230",
                  "flag": "L"
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
          "cc": "26yo with 4th pneumonia in 2 years — bilateral, failing outpatient antibiotics. Immunoglobulins finally checked: IgG 142.",
          "hpi": "26M with 4th pneumonia in 2 years. Immunoglobulins finally drawn — critically low. CVID diagnosed. Has been immunodeficient his entire adult life. Brother has IgA deficiency (same spectrum). Insurance crisis — aging off parents' plan in 2 months, IVIG costs $30-60K/year.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted — starting IVIG, insurance navigation, bronchiectasis management",
        "diagnosis": "CVID"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CVID newly diagnosed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "First IVIG — loading dose",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Bronchiectasis — right middle lobe",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "IgA absent — must use IgA-depleted IVIG",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Insurance — ACA enrollment + manufacturer assistance",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "IVIG (IgA-depleted)",
          "dose": "400mg/kg",
          "route": "IV",
          "frequency": "Loading dose",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Prophylactic azithromycin",
          "dose": "250mg",
          "route": "PO",
          "frequency": "MWF",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "112/68",
          "hr": "86",
          "rr": "18",
          "temp": "37.4°C",
          "spo2": "96%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-155690",
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
          "cc": "Admitted — starting IVIG, insurance navigation, bronchiectasis management",
          "hpi": "26M first IVIG given — tolerated. CT: early bronchiectasis. IgA absent — must use IgA-depleted product. Social work: ACA enrollment + manufacturer co-pay assistance. Brother needs annual IgG monitoring.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — CVID management, SCIG transition, family screening",
        "diagnosis": "CVID"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CVID confirmed — low Ig levels, non-protective vaccine titers",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "IgA absent — IgA-depleted products required",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Transitioning to weekly SCIG (home-based, more convenient)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Brother (IgA deficiency) — 10-15% progress to CVID, monitor annually",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Insurance secured — ACA + manufacturer assistance",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "SCIG (Hizentra)",
          "dose": "100mg/kg/week",
          "route": "SC",
          "frequency": "Weekly home infusion",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Azithromycin",
          "dose": "250mg",
          "route": "PO",
          "frequency": "MWF prophylaxis",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
          "hr": "78",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "97%",
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-586580",
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
          "cc": "A/I consult — CVID management, SCIG transition, family screening",
          "hpi": "A/I: CVID confirmed. Transitioning IVIG→SCIG for home convenience. SCIG: self-administered weekly, stable IgG levels, no IV access. Brother monitoring annually. Patient: \"I didn't realize how sick I was until I started feeling normal.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "CVID follow-up — 3 months on SCIG, zero infections, back to full life",
        "diagnosis": "CVID"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CVID — on SCIG, trough IgG 620 (target >500)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Zero infections in 3 months — first infection-free period in years",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Diarrhea improving",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Weight up 5 lbs",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Insurance secured — $0 out of pocket",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Back in grad school full-time",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "SCIG",
          "dose": "100mg/kg/week",
          "route": "SC",
          "frequency": "Weekly home infusion",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Azithromycin",
          "dose": "250mg",
          "route": "PO",
          "frequency": "MWF",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "120/72",
          "hr": "74",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "98%",
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-927785",
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
          "cc": "CVID follow-up — 3 months on SCIG, zero infections, back to full life",
          "hpi": "26M 3 months on SCIG. Zero infections. Energy dramatically better. Diarrhea improving. Back in school. \"I thought everyone felt this tired.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Ryan Fitzgerald",
    "dob": "09/26/2000",
    "age": "26",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-744880",
    "language": "English",
    "race": "White",
    "phone": "(615) 555-7686",
    "email": "ryan.x@email.com",
    "address": "1727 Foxglove Dr, San Antonio, TX 78207",
    "insurance": "Parents' plan (aging out at 26)",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(415) 555-1536",
      "relationship": "Spouse"
    },
    "chiefComplaint": "26yo with 4th pneumonia in 2 years — bilateral, failing outpatient antibiotics. Immunoglobulins finally checked: IgG 142.",
    "diagnosis": "CVID"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Bilateral CAP — failing levofloxacin",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "CVID — IgG 142, IgA <7, IgM 22 (critically low)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "9 sinopulmonary infections in 3 years",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Chronic diarrhea — CVID enteropathy",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Early bronchiectasis found on CT",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-6",
      "description": "Insurance crisis — aging off parents' plan",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Ceftriaxone",
      "dose": "2g",
      "route": "IV",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Azithromycin",
      "dose": "500mg",
      "route": "IV",
      "frequency": "Daily",
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
      "bp": "108/68",
      "hr": "98",
      "rr": "22",
      "temp": "38.6°C",
      "spo2": "92%",
      "pain": "4/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "26yo with 4th pneumonia in 2 years — bilateral, failing outpatient antibiotics. Immunoglobulins finally checked: IgG 142.",
      "hpi": "26M with 4th pneumonia in 2 years. Immunoglobulins finally drawn — critically low. CVID diagnosed. Has been immunodeficient his entire adult life. Brother has IgA deficiency (same spectrum). Insurance crisis — aging off parents' plan in 2 months, IVIG costs $30-60K/year.",
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
      "accession": "LAB-898308",
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
              "value": "3.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "L"
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
          "name": "IMMUNOLOGY",
          "results": [
            {
              "test": "IgG",
              "value": "142",
              "unit": "mg/dL",
              "range": "700-1600",
              "flag": "L"
            },
            {
              "test": "IgA",
              "value": "<7",
              "unit": "mg/dL",
              "range": "70-400",
              "flag": "L"
            },
            {
              "test": "IgM",
              "value": "22",
              "unit": "mg/dL",
              "range": "40-230",
              "flag": "L"
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
    "Brother: IgA deficiency",
    "Mother: autoimmune thyroiditis"
  ],
  "socialHistory": [
    [
      "Infections",
      "6 sinusitis, 3 pneumonias, 2 otitis in 3 years"
    ],
    [
      "Antibiotics",
      "On antibiotics more than off for 2 years"
    ],
    [
      "Insurance",
      "Aging off parents' plan — panicking about IVIG coverage ($30-60K/yr)"
    ],
    [
      "GI",
      "Chronic diarrhea — nodular lymphoid hyperplasia on colonoscopy"
    ],
    [
      "Prior",
      "Told he \"just catches colds easily\""
    ]
  ],
  "references": [
    {
      "id": "AAAAI-PID-PP-2015",
      "title": "Practice parameter for the diagnosis and management of primary immunodeficiency",
      "authors": "Bonilla FA, Barlan I, Chapel H, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2015,
      "doi": "10.1016/j.jaci.2015.04.049",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4837186/",
      "openAccess": true,
      "validates": [
        "CVID criteria: low IgG + low IgA/IgM + poor vaccine responses",
        "IgA deficiency → CVID spectrum",
        "IVIG/SCIG replacement",
        "IgA-depleted products",
        "Trough IgG >500"
      ]
    },
    {
      "id": "SCIG-Review-2008",
      "title": "Subcutaneous immunoglobulin replacement: a new paradigm",
      "authors": "Berger M.",
      "journal": "Immunol Allergy Clin North Am",
      "year": 2008,
      "doi": "10.1016/j.iac.2008.07.002",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3576822/",
      "openAccess": true,
      "validates": [
        "SCIG vs IVIG",
        "Weekly home infusion",
        "Stable IgG levels",
        "Patient preference"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Ryan appears anxious and fatigued, with visible distress about both his recurring illness and looming insurance crisis. He's highly forthcoming about his symptoms and frustrated that his immunodeficiency went undiagnosed for years despite multiple infections. He's particularly worried about affording IVIG treatment once he loses parental insurance coverage.",
    "interviewQuestions": [
      "Can you tell me about your current breathing problems and cough?",
      "How many pneumonias have you had in the past few years?",
      "What other types of infections have you been getting?",
      "How often have you been on antibiotics recently?",
      "Tell me about your chronic diarrhea - when did it start?",
      "Have you had any sinus infections or ear infections?",
      "What did doctors tell you before about why you kept getting sick?",
      "Do you have any family history of frequent infections or immune problems?",
      "Are you taking any medications currently?",
      "Do you have any drug allergies?",
      "What's your insurance situation like?",
      "Have you had any recent imaging or lab work done?",
      "Do you smoke, drink alcohol, or use any substances?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm pretty tired from being sick so much lately.",
      "onset": "This pneumonia started about a week ago with fever and cough, but honestly I've been getting pneumonias every 6 months for the past 2 years. The breathing got worse over the past few days despite the antibiotics.",
      "character": "It's a productive cough with thick yellow-green sputum, and I have this tight chest pain when I breathe deeply or cough hard.",
      "location": "The chest pain is on both sides, mainly in the front of my chest, and it doesn't really go anywhere else.",
      "severity": "The breathing difficulty is probably a 7 out of 10 right now - I get winded just walking to the bathroom. The cough keeps me up at night.",
      "aggravating": "Lying flat makes the breathing worse, and any exertion like climbing stairs makes me really short of breath. Cold air seems to trigger more coughing.",
      "relieving": "Sitting up helps a little with breathing. The antibiotics usually help eventually, but this time they're not working like they used to.",
      "associated": "I've had fever up to 101°F, chills, and I'm exhausted all the time. Plus I've had this chronic diarrhea for about 2 years that never really goes away.",
      "denies": "No chest pain at rest, no blood in my sputum, no leg swelling. No nausea or vomiting with this episode.",
      "history": "This is my 4th pneumonia in 2 years. I've also had 6 sinus infections, 3 ear infections, and I'm basically on antibiotics more than I'm off them. They finally checked my immune system and found my antibody levels are critically low.",
      "medications": "Ceftriaxone; Azithromycin",
      "allergies": "NKDA",
      "family": "My brother has IgA deficiency - some kind of immune problem. My mom has autoimmune thyroid disease. Nobody else in the family gets infections like I do.",
      "social": "I work in an office, don't smoke, drink maybe 2-3 beers on weekends. No drugs. The big problem is I'm aging off my parents' insurance and those IVIG treatments cost like $30,000 to $60,000 a year - I'm honestly panicking about how I'll afford it."
    },
    "examManeuvers": [
      "General appearance and vital signs assessment",
      "Pulmonary inspection and percussion",
      "Pulmonary auscultation",
      "Cardiac auscultation",
      "Lymph node examination",
      "Abdominal examination",
      "Skin and mucous membrane examination",
      "Extremity examination for clubbing or edema",
      "HEENT examination"
    ],
    "examFindings": {
      "General appearance and vital signs assessment": "Ill-appearing young man in mild respiratory distress, using accessory muscles. BP 108/68, HR 98, Temp 38.6°C, SpO2 92% on room air.",
      "Pulmonary inspection and percussion": "Bilateral chest expansion decreased, dullness to percussion over bilateral lower lobes",
      "Pulmonary auscultation": "Bilateral crackles and rhonchi, diminished breath sounds at bilateral bases, scattered expiratory wheeze",
      "Cardiac auscultation": "Regular rate and rhythm, no murmurs, gallops, or rubs",
      "Lymph node examination": "No significant lymphadenopathy in cervical, axillary, or inguinal regions",
      "Abdominal examination": "Soft, mild diffuse tenderness, normal bowel sounds, no organomegaly",
      "Skin and mucous membrane examination": "Pale conjunctivae, no rashes, no oral thrush or ulcerations",
      "Extremity examination for clubbing or edema": "No digital clubbing yet, no peripheral edema, capillary refill 2 seconds",
      "HEENT examination": "Mild sinus tenderness, tympanic membranes clear, no tonsillar enlargement or exudate"
    },
    "ddxTargets": [
      "Common Variable Immunodeficiency with recurrent pneumonia (correct diagnosis)",
      "Recurrent community-acquired pneumonia with underlying immunodeficiency",
      "Hypogammaglobulinemia with secondary bronchiectasis",
      "Atypical pneumonia with treatment failure",
      "Primary immunodeficiency syndrome",
      "Chronic granulomatous disease",
      "Cystic fibrosis with recurrent pulmonary infections"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'just another pneumonia' without recognizing the pattern of recurrent infections suggesting underlying immunodeficiency",
      "prematureClosure": "May focus solely on treating current pneumonia without investigating the underlying cause of recurrent infections",
      "availabilityBias": "Young healthy adults rarely have serious immunodeficiencies, leading to delayed recognition of CVID"
    },
    "coachPrompts": {
      "phase2": "A 26-year-old with recurrent pneumonia is concerning. What pattern of illness would make you think about underlying immunodeficiency? What questions would help you identify if this is more than just bad luck with infections?",
      "phase5": "Now that you've heard about 9 sinopulmonary infections in 3 years, chronic diarrhea, and a brother with IgA deficiency, how does this change your thinking? What's the unifying diagnosis that explains this entire constellation of findings?",
      "finalDebrief": "This case illustrates how CVID often goes undiagnosed for years, with patients told they 'just catch colds easily.' The key was recognizing the pattern: recurrent sinopulmonary infections, chronic diarrhea, family history of immunodeficiency, and critically low immunoglobulins. How might earlier recognition have prevented complications like bronchiectasis?"
    }
  }
};
