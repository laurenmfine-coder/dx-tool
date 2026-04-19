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
  ]
,"references":[
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
    "patientPersona": "Ryan Fitzgerald is alert and cooperative, clearly concerned but provides a clear history.",
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
        "medications": "'I take Ceftriaxone; Azithromycin.'",
        "allergies": "'My allergies: NKDA.'",
        "family": "Brother: IgA deficiency  Mother: autoimmune thyroiditis",
        "social": "Infections: 6 sinusitis, 3 pneumonias, 2 otitis in 3 years  Antibiotics: On antibiotics more than off for 2 years  Insurance: Aging off parents' plan \u2014 panicking about IVIG coverage ($30-60K/yr)  GI: Chronic diarrhea \u2014 nodular lymphoid hyperplasia on colonoscopy  Prior: Told he \"just catches colds easily\""
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
        "phase2": "Before interviewing Ryan Fitzgerald: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
