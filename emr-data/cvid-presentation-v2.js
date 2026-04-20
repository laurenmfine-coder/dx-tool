
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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "Aging off parents' plan \u2014 panicking about IVIG coverage ($30-60K/yr)"
      ],
      [
        "GI",
        "Chronic diarrhea \u2014 nodular lymphoid hyperplasia on colonoscopy"
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
        "chiefComplaint": "26yo with 4th pneumonia in 2 years \u2014 bilateral, failing outpatient antibiotics. Immunoglobulins finally checked: IgG 142.",
        "diagnosis": "CVID"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Bilateral CAP \u2014 failing levofloxacin",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "CVID \u2014 IgG 142, IgA <7, IgM 22 (critically low)",
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
          "description": "Chronic diarrhea \u2014 CVID enteropathy",
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
          "description": "Insurance crisis \u2014 aging off parents' plan",
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
          "temp": "38.6\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "26yo with 4th pneumonia in 2 years \u2014 bilateral, failing outpatient antibiotics. Immunoglobulins finally checked: IgG 142.",
          "hpi": "26M with 4th pneumonia in 2 years. Immunoglobulins finally drawn \u2014 critically low. CVID diagnosed. Has been immunodeficient his entire adult life. Brother has IgA deficiency (same spectrum). Insurance crisis \u2014 aging off parents' plan in 2 months, IVIG costs $30-60K/year.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted \u2014 starting IVIG, insurance navigation, bronchiectasis management",
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
          "description": "First IVIG \u2014 loading dose",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Bronchiectasis \u2014 right middle lobe",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "IgA absent \u2014 must use IgA-depleted IVIG",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Insurance \u2014 ACA enrollment + manufacturer assistance",
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
          "temp": "37.4\u00b0C",
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
          "cc": "Admitted \u2014 starting IVIG, insurance navigation, bronchiectasis management",
          "hpi": "26M first IVIG given \u2014 tolerated. CT: early bronchiectasis. IgA absent \u2014 must use IgA-depleted product. Social work: ACA enrollment + manufacturer co-pay assistance. Brother needs annual IgG monitoring.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 CVID management, SCIG transition, family screening",
        "diagnosis": "CVID"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CVID confirmed \u2014 low Ig levels, non-protective vaccine titers",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "IgA absent \u2014 IgA-depleted products required",
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
          "description": "Brother (IgA deficiency) \u2014 10-15% progress to CVID, monitor annually",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Insurance secured \u2014 ACA + manufacturer assistance",
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
          "temp": "36.8\u00b0C",
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
          "cc": "A/I consult \u2014 CVID management, SCIG transition, family screening",
          "hpi": "A/I: CVID confirmed. Transitioning IVIG\u2192SCIG for home convenience. SCIG: self-administered weekly, stable IgG levels, no IV access. Brother monitoring annually. Patient: \"I didn't realize how sick I was until I started feeling normal.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "CVID follow-up \u2014 3 months on SCIG, zero infections, back to full life",
        "diagnosis": "CVID"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CVID \u2014 on SCIG, trough IgG 620 (target >500)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Zero infections in 3 months \u2014 first infection-free period in years",
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
          "description": "Insurance secured \u2014 $0 out of pocket",
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
          "temp": "36.8\u00b0C",
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
          "cc": "CVID follow-up \u2014 3 months on SCIG, zero infections, back to full life",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(415) 555-1536",
      "relationship": "Spouse"
    },
    "chiefComplaint": "26yo with 4th pneumonia in 2 years \u2014 bilateral, failing outpatient antibiotics. Immunoglobulins finally checked: IgG 142.",
    "diagnosis": "CVID"
  },
  "problems": [
    {
      "problem": "Common variable immunodeficiency (CVID) \u2014 confirmed diagnosis",
      "icd": "D83.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Sarah Park, 29F \u2014 4 bacterial pneumonias in 2 years, 3 sinusitis episodes. IgG 180 mg/dL (normal >700)."
    },
    {
      "problem": "Bronchiectasis \u2014 sequela of recurrent infections",
      "icd": "J47.9",
      "onset": "2024",
      "status": "Active",
      "notes": "CT chest: bilateral lower lobe bronchiectasis. Pulmonary function monitoring required annually."
    },
    {
      "problem": "IVIG therapy initiation \u2014 immunoglobulin replacement",
      "icd": "D83.9",
      "onset": "2024",
      "status": "Active",
      "notes": "IVIG 0.4-0.6g/kg q3-4 weeks. Target trough IgG >500-700 mg/dL. Infusion reaction monitoring."
    }
  ],
  "medications": [
    {
      "name": "IVIG 0.5g/kg IV q4 weeks \u2014 immunoglobulin replacement",
      "sig": "Infuse slowly initially \u2014 monitor for infusion reactions. Trough IgG goal >600 mg/dL.",
      "prescriber": "Allergy/Immunology",
      "start": "2024",
      "refills": 11,
      "status": "Active \u2014 new"
    },
    {
      "name": "Azithromycin 500mg PO 3x/week \u2014 prophylactic antibiotic",
      "sig": "Prophylactic antibiotic \u2014 reduces breakthrough bacterial infections during IVIG titration",
      "prescriber": "Allergy/Immunology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Albuterol MDI PRN \u2014 bronchospasm with bronchiectasis",
      "sig": "Rescue bronchodilator for bronchospasm symptoms",
      "prescriber": "Pulmonology",
      "start": "2024",
      "refills": 3,
      "status": "Active PRN"
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
      "temp": "38.6\u00b0C",
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
      "cc": "26yo with 4th pneumonia in 2 years \u2014 bilateral, failing outpatient antibiotics. Immunoglobulins finally checked: IgG 142.",
      "hpi": "26M with 4th pneumonia in 2 years. Immunoglobulins finally drawn \u2014 critically low. CVID diagnosed. Has been immunodeficient his entire adult life. Brother has IgA deficiency (same spectrum). Insurance crisis \u2014 aging off parents' plan in 2 months, IVIG costs $30-60K/year.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "10/2024",
      "panel": "Immunodeficiency Workup",
      "results": [
        {
          "test": "IgG",
          "value": "180",
          "unit": "mg/dL",
          "ref": "700-1600",
          "flag": "L"
        },
        {
          "test": "IgA",
          "value": "8",
          "unit": "mg/dL",
          "ref": "70-400",
          "flag": "L"
        },
        {
          "test": "IgM",
          "value": "22",
          "unit": "mg/dL",
          "ref": "40-230",
          "flag": "L"
        },
        {
          "test": "Vaccine response \u2014 tetanus IgG (post-booster)",
          "value": "Non-protective (<0.1 IU/mL)",
          "unit": "",
          "ref": ">0.1 IU/mL protective",
          "flag": "L"
        },
        {
          "test": "Vaccine response \u2014 pneumococcal IgG (post-Pneumovax)",
          "value": "Non-protective",
          "unit": "",
          "ref": ">1.3 mcg/mL x7 serotypes",
          "flag": "L"
        },
        {
          "test": "B-cell count",
          "value": "Normal (220/\u03bcL)",
          "unit": "",
          "ref": "100-500",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "10/2024",
      "study": "CT Chest High-Resolution",
      "indication": "Recurrent pneumonias \u2014 bronchiectasis evaluation",
      "findings": "Bilateral lower lobe bronchiectasis, mild. No active consolidation. No lymphadenopathy.",
      "impression": "Bronchiectasis from recurrent infections. No active pneumonia. Consistent with CVID sequela."
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
      "Aging off parents' plan \u2014 panicking about IVIG coverage ($30-60K/yr)"
    ],
    [
      "GI",
      "Chronic diarrhea \u2014 nodular lymphoid hyperplasia on colonoscopy"
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
        "IgA deficiency \u2192 CVID spectrum",
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
      "associated": "I've had fever up to 101\u00b0F, chills, and I'm exhausted all the time. Plus I've had this chronic diarrhea for about 2 years that never really goes away.",
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
      "General appearance and vital signs assessment": "Ill-appearing young man in mild respiratory distress, using accessory muscles. BP 108/68, HR 98, Temp 38.6\u00b0C, SpO2 92% on room air.",
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
      "CVID \u2014 pan-hypogammaglobulinemia + vaccine non-response (correct)",
      "X-linked agammaglobulinemia \u2014 males only, onset in infancy, nearly absent B cells",
      "IgA deficiency alone \u2014 IgG and IgM normal in isolated IgA deficiency",
      "Secondary hypogammaglobulinemia \u2014 medications (rituximab), lymphoma; no such history",
      "Good's syndrome \u2014 thymoma + hypogammaglobulinemia; no thymoma here",
      "Transient hypogammaglobulinemia of infancy \u2014 age at diagnosis (29 years) excludes"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'just another pneumonia' without recognizing the pattern of recurrent infections suggesting underlying immunodeficiency",
      "prematureClosure": "May focus solely on treating current pneumonia without investigating the underlying cause of recurrent infections",
      "availabilityBias": "Young healthy adults rarely have serious immunodeficiencies, leading to delayed recognition of CVID"
    },
    "coachPrompts": {
      "phase2": "A 26-year-old with recurrent pneumonia is concerning. What pattern of illness would make you think about underlying immunodeficiency? What questions would help you identify if this is more than just bad luck with infections?",
      "phase5": "Now that you've heard about 9 sinopulmonary infections in 3 years, chronic diarrhea, and a brother with IgA deficiency, how does this change your thinking? What's the unifying diagnosis that explains this entire constellation of findings?",
      "finalDebrief": "This case illustrates how CVID often goes undiagnosed for years, with patients told they 'just catch colds easily.' The key was recognizing the pattern: recurrent sinopulmonary infections, chronic diarrhea, family history of immunodeficiency, and critically low immunoglobulins. How might earlier recognition have prevented complications like bronchiectasis?",
      "final": "Diagnosis: CVID. Key learning: (1) CVID diagnostic criteria: IgG <2SD below mean for age + low IgA and/or IgM + poor vaccine response (non-protective antibody titers to T-dependent and T-independent antigens) + exclusion of secondary causes + age >2 years. B-cell count is typically normal (unlike XLA). (2) Classic presentation: young adult with recurrent bacterial sinopulmonary infections (pneumococcus, H. influenzae) \u2014 average 6-7 year diagnostic delay from first symptom. Bronchiectasis is a preventable sequela with early IVIG. (3) IVIG mechanism: replaces missing IgG \u2014 provides passive immunity. Does NOT restore endogenous antibody production. Trough IgG >500-700 mg/dL reduces infection frequency. Some patients need SCIG (subcutaneous \u2014 weekly self-injection) instead. (4) Non-infectious CVID complications: autoimmune disease (ITP, hemolytic anemia), granulomatous disease (lung, liver, spleen), GI inflammation (IBD-like), lymphoma risk increased. These occur in ~25-50% of CVID patients and may not be infection-related. (5) Live vaccines: ABSOLUTELY contraindicated in CVID \u2014 MMR, varicella, yellow fever can cause disseminated infection. Inactivated vaccines safe but may not produce protective responses."
    }
  },
  "meta": {
    "diagnosis": "Common Variable Immunodeficiency \u2014 Recurrent Sinopulmonary Infections, Low IgG/IgA/IgM, IVIG Initiation",
    "caseId": "cvid-presentation-v2"
  }
};
