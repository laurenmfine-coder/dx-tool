/* emr-data/contact-dermatitis-occupational-v2.js — Variation: Allergic Contact Dermatitis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Sandra Kim",
      "patientHPI": "I'm a hairstylist and over the past two years my hands have gotten so bad that I can barely work anymore. They're cracked and bleeding, with deep cuts that won't heal, and now they're getting infected. I've seen several doctors who keep telling me it's just dry skin, but this is way beyond that - I'm in constant pain and worried I might lose my job.",
      "dob": "12/26/1984",
      "age": "42",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-608560",
      "language": "English",
      "race": "Asian",
      "phone": "(720) 555-3463",
      "email": "sandra.x@email.com",
      "address": "6521 Walnut Dr, Richmond, VA 23227",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(503) 555-2335",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Nickel",
        "reaction": "Contact dermatitis",
        "severity": "Moderate",
        "type": "Environmental"
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
        "Occupation",
        "Hairstylist 20 years — PPD in hair dye is the trigger"
      ],
      [
        "Impact",
        "Hands cracking, bleeding — cannot work, losing clients"
      ],
      [
        "Prior care",
        "Told to \"moisturize more\" — never patch tested"
      ],
      [
        "Financial",
        "Self-employed — no sick leave, income stopped during flares"
      ],
      [
        "Identity",
        "\"Being a hairstylist is all I know\""
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "42yo hairstylist with severe hand dermatitis and secondary infection — fissures bleeding through bandages",
        "diagnosis": "Allergic Contact Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe occupational contact dermatitis — hands",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "PPD in hair dye — most common cause in hairstylists",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Secondary bacterial infection — purulent fissures",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Never patch tested despite 2 years of symptoms",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Self-employed — financial crisis from inability to work",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cephalexin",
          "dose": "500mg",
          "route": "PO",
          "frequency": "QID x10 days",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Clobetasol 0.05%",
          "dose": "",
          "route": "Topical",
          "frequency": "BID x2 weeks",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Petroleum jelly",
          "dose": "",
          "route": "Topical",
          "frequency": "After every handwash",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "128/78",
          "hr": "82",
          "rr": "16",
          "temp": "36.8°C",
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
          "accession": "LAB-360281",
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
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "42yo hairstylist with severe hand dermatitis and secondary infection — fissures bleeding through bandages",
          "hpi": "42F hairstylist with 2-year history of worsening bilateral hand dermatitis. Deep fissures, bleeding, now infected. Multiple physicians said \"moisturize more.\" Never patch tested. This is almost certainly PPD (hair dye) contact allergy — the most common occupational allergen in hairstylists.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "N/A — outpatient",
        "diagnosis": "Allergic Contact Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Outpatient only",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [],
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
          "accession": "LAB-397248",
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
          "cc": "N/A — outpatient",
          "hpi": "Outpatient management.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — comprehensive patch testing, occupational modification",
        "diagnosis": "Allergic Contact Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "PPD strongly positive (3+) — confirmed culprit",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Also positive: thioglycolate (perms), nickel, formaldehyde, fragrance",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Does NOT have to leave hairdressing — can use PPD-free dyes, nitrile gloves, fragrance-free products",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Workers comp letter even if self-employed (some states cover)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Clobetasol taper",
          "dose": "",
          "route": "Topical",
          "frequency": "2 weeks then tacrolimus maintenance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Nitrile gloves",
          "dose": "",
          "route": "",
          "frequency": "For ALL chemical work",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "PPD-free hair dye brands",
          "dose": "",
          "route": "",
          "frequency": "Brand list provided",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "122/76",
          "hr": "76",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-507324",
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
              "name": "PATCH TESTING",
              "results": [
                {
                  "test": "PPD",
                  "value": "3+ (strongly positive)",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                },
                {
                  "test": "Glyceryl thioglycolate",
                  "value": "2+",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                },
                {
                  "test": "Nickel",
                  "value": "2+ (known)",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                },
                {
                  "test": "Formaldehyde",
                  "value": "1+",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                },
                {
                  "test": "Fragrance mix I",
                  "value": "1+",
                  "unit": "",
                  "range": "Negative",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult — comprehensive patch testing, occupational modification",
          "hpi": "A/I: Comprehensive patch testing confirms PPD as primary driver. She does NOT have to quit hairdressing. PPD-free dye brands exist. Nitrile gloves for all chemical work. Avoid perming solutions. Barrier cream before shifts.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — hands healing with product substitution, working full-time again",
        "diagnosis": "Allergic Contact Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ACD — dramatically improved with PPD-free dyes + glove protocol",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Back to work full-time",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Fissures healed — maintaining with barrier cream + nitrile gloves",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Clients noticed no difference with PPD-free dyes",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Tacrolimus 0.1%",
          "dose": "",
          "route": "Topical",
          "frequency": "PRN maintenance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Barrier cream",
          "dose": "",
          "route": "Topical",
          "frequency": "Before every shift",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Nitrile gloves",
          "dose": "",
          "route": "",
          "frequency": "All chemical work",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
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
          "accession": "LAB-902660",
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
          "cc": "Follow-up — hands healing with product substitution, working full-time again",
          "hpi": "42F hands healed. Working full-time with PPD-free dyes and nitrile gloves. Clients can't tell the difference. \"I thought I'd have to give up everything I love. I just had to change my products.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Sandra Kim",
    "dob": "12/26/1984",
    "age": "42",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-608560",
    "language": "English",
    "race": "Asian",
    "phone": "(620) 555-3317",
    "email": "sandra.x@email.com",
    "address": "6271 Clover St, Milwaukee, WI 53210",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(504) 555-6082",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Hand rash",
    "diagnosis": "Allergic Contact Dermatitis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Severe occupational contact dermatitis — hands",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "PPD in hair dye — most common cause in hairstylists",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Secondary bacterial infection — purulent fissures",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Never patch tested despite 2 years of symptoms",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Self-employed — financial crisis from inability to work",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Cephalexin",
      "dose": "500mg",
      "route": "PO",
      "frequency": "QID x10 days",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Clobetasol 0.05%",
      "dose": "",
      "route": "Topical",
      "frequency": "BID x2 weeks",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Petroleum jelly",
      "dose": "",
      "route": "Topical",
      "frequency": "After every handwash",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Nickel",
      "reaction": "Contact dermatitis",
      "severity": "Moderate",
      "type": "Environmental"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "128/78",
      "hr": "82",
      "rr": "16",
      "temp": "36.8°C",
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
      "cc": "42yo hairstylist with severe hand dermatitis and secondary infection — fissures bleeding through bandages",
      "hpi": "42F hairstylist with 2-year history of worsening bilateral hand dermatitis. Deep fissures, bleeding, now infected. Multiple physicians said \"moisturize more.\" Never patch tested. This is almost certainly PPD (hair dye) contact allergy — the most common occupational allergen in hairstylists.",
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
      "accession": "LAB-360281",
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
      "Occupation",
      "Hairstylist 20 years — PPD in hair dye is the trigger"
    ],
    [
      "Impact",
      "Hands cracking, bleeding — cannot work, losing clients"
    ],
    [
      "Prior care",
      "Told to \"moisturize more\" — never patch tested"
    ],
    [
      "Financial",
      "Self-employed — no sick leave, income stopped during flares"
    ],
    [
      "Identity",
      "\"Being a hairstylist is all I know\""
    ]
  ],
  "references": [
    {
      "id": "Patch-Testing-PP-2015",
      "title": "Patch testing",
      "authors": "Fonacier L, Bernstein DI, Borish L, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2015,
      "doi": "10.1016/j.jaci.2015.02.033",
      "url": "https://www.jacionline.org/article/S0091-6749(15)00322-9/fulltext",
      "openAccess": true,
      "validates": [
        "Patch test interpretation",
        "PPD as common occupational allergen",
        "PPD-free alternatives for hairstylists",
        "Nitrile vs latex gloves"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Sandra appears anxious and frustrated, with visible distress when discussing her inability to work. She's forthcoming about her symptoms but becomes emotional when talking about the financial impact and her professional identity being threatened.",
    "interviewQuestions": [
      "Can you tell me when you first noticed the rash on your hands?",
      "How would you describe the appearance and feeling of the rash?",
      "Where exactly on your hands is the rash located?",
      "On a scale of 1-10, how would you rate your current discomfort?",
      "What makes your hand symptoms worse?",
      "Have you found anything that helps relieve the symptoms?",
      "Are you experiencing any other symptoms along with the hand rash?",
      "Have you had similar skin problems before?",
      "What is your occupation and how long have you been doing this work?",
      "Do you wear gloves or use any protective equipment at work?",
      "What products do you work with regularly?",
      "Have you noticed if the rash improves when you're away from work?",
      "What medications are you currently taking?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm having trouble focusing with all this pain in my hands.",
      "onset": "It started about two years ago, very gradually at first. Just some dryness and redness, but it's gotten so much worse over time.",
      "character": "My hands are cracked, bleeding, and now there's this yellowish discharge coming from the deep cracks. They burn and sting constantly.",
      "location": "Both hands, but mostly the fingers and palms where I handle the hair dye and chemicals. The cracks are deepest between my fingers.",
      "severity": "Right now it's an 8 out of 10. I can barely use my hands without severe pain. I can't work, can't even do simple tasks at home.",
      "aggravating": "Any contact with hair products makes it flare up terribly. Even water stings now. When I try to work, it gets much worse within hours.",
      "relieving": "The prescription cream helps a little, and I keep petroleum jelly on them constantly. But nothing really makes it go away.",
      "associated": "The infected cracks smell bad and have pus. My hands feel hot and swollen. I've been having some fatigue, probably from the stress of not being able to work.",
      "denies": "No rash anywhere else on my body, no fever, no joint pain, no breathing problems.",
      "history": "Never had anything like this before in my 20 years of doing hair. I've always had sensitive skin but nothing this severe.",
      "medications": "Cephalexin; Clobetasol 0.05%; Petroleum jelly",
      "allergies": "Nickel",
      "family": "My mother had eczema, but nothing as bad as this.",
      "social": "I'm a hairstylist, been doing it for 20 years. I work with hair dyes, perms, bleaches daily. I'm self-employed so when I can't work, I don't get paid. I don't smoke or drink much."
    },
    "examManeuvers": [
      "Inspect bilateral hands and fingers",
      "Examine palms and dorsal surfaces",
      "Assess for distribution pattern of dermatitis",
      "Evaluate depth and appearance of fissures",
      "Check for signs of secondary infection",
      "Palpate for lymphadenopathy",
      "Examine forearms and wrists",
      "Assess for nail changes",
      "Check vital signs",
      "Examine other potential contact sites"
    ],
    "examFindings": {
      "Inspect bilateral hands and fingers": "Severe bilateral hand dermatitis with erythematous, scaling, fissured skin most prominent on fingertips and palms",
      "Examine palms and dorsal surfaces": "Deep linear fissures on palms with surrounding erythema and edema, dorsal surfaces show scaling and lichenification",
      "Assess for distribution pattern of dermatitis": "Classic occupational contact pattern - most severe on fingertips, palms, and web spaces where chemical contact occurs",
      "Evaluate depth and appearance of fissures": "Multiple deep fissures extending into dermis, some bleeding, with surrounding induration",
      "Check for signs of secondary infection": "Purulent discharge from several fissures, surrounding cellulitis with warmth and increased erythema",
      "Palpate for lymphadenopathy": "Mild bilateral epitrochlear and axillary lymphadenopathy",
      "Examine forearms and wrists": "Mild erythema extending to wrists bilaterally, forearms clear",
      "Assess for nail changes": "Mild onycholysis and pitting of several fingernails",
      "Check vital signs": "BP 128/78, HR 82, Temp 36.8°C, SpO2 99% - afebrile with normal vital signs",
      "Examine other potential contact sites": "No dermatitis on face, neck, or other exposed areas"
    },
    "ddxTargets": [
      "Occupational allergic contact dermatitis with secondary bacterial infection (correct diagnosis)",
      "Irritant contact dermatitis",
      "Atopic dermatitis with secondary infection",
      "Cellulitis",
      "Necrotizing fasciitis",
      "Dyshidrotic eczema",
      "Psoriasis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'hand rash' and missing the occupational exposure history and need for patch testing to identify specific allergen",
      "prematureClosure": "Risk of stopping at 'eczema' without investigating the clear occupational pattern and PPD sensitivity in a hairstylist",
      "availabilityBias": "Risk of defaulting to common diagnoses like atopic dermatitis rather than considering occupational contact dermatitis despite clear workplace trigger"
    },
    "coachPrompts": {
      "phase2": "You've identified several possible causes for bilateral hand dermatitis. What key historical information would help you distinguish between irritant versus allergic contact dermatitis? What occupational exposures should you specifically ask about?",
      "phase5": "Now that you've completed your history and exam, what pattern do you see in the distribution and timing of her symptoms? How does her 20-year career as a hairstylist factor into your diagnostic thinking? What's your next step for definitive diagnosis?",
      "finalDebrief": "This case highlights classic occupational allergic contact dermatitis in a hairstylist with PPD sensitivity. Notice how the distribution, occupational exposure, and 2-year delay in onset (after years of exposure) fit the pattern. What does this teach us about the importance of patch testing and occupational history in chronic dermatitis?"
    }
  }
};
