/* emr-data/atopic-dermatitis-severe.js — Multi-Setting Allergy Case: Severe Atopic Dermatitis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Zara Thompson",
  "patientHPI": "My eczema has been terrible for months, and now the skin on my arm where I've been scratching is really hot, swollen, and spreading red streaks. It hurts to touch and feels warm, which is different from my usual itchy patches.",
      "dob": "09/18/2010",
      "age": "16",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-772729",
      "language": "English",
      "race": "Black/African American",
      "phone": "(619) 555-2524",
      "email": "zara.thompson@email.com",
      "address": "6453 Dogwood Ln, Memphis, TN 38122",
      "insurance": "Humana Gold Plus",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "Publix Pharmacy — Weston Rd",
      "emergencyContact": {
        "name": "Michael Thompson",
        "phone": "(630) 555-6315",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Peanut",
        "reaction": "Anaphylaxis",
        "severity": "Severe",
        "type": "Food"
      },
      {
        "allergen": "Egg",
        "reaction": "Hives, eczema flare",
        "severity": "Moderate",
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
      "Mother: asthma",
      "Father: eczema (childhood)",
      "Brother: peanut allergy"
    ],
    "socialHistory": [
      [
        "SCORAD",
        "62 (severe)"
      ],
      [
        "Sleep",
        "Wakes 3-4x/night scratching"
      ],
      [
        "Quality of life",
        "Missing school, avoids social activities"
      ],
      [
        "Prior treatment",
        "Failed medium-potency topicals, tacrolimus, and short course of cyclosporine"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "16yo with secondary skin infection on severe eczema — cellulitis",
        "diagnosis": "Severe Atopic Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe atopic dermatitis since infancy",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Food allergies (peanut, egg)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Anxiety secondary to skin appearance",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Triamcinolone 0.1% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to body",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Tacrolimus 0.03% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to face",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Cephalexin",
          "dose": "500mg",
          "route": "PO",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "116/72",
          "hr": "92",
          "rr": "18",
          "temp": "38.4°C",
          "spo2": "99%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-172340",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "14",
                  "unit": "%",
                  "range": "1-4",
                  "flag": "H"
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "4200",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Peanut Ig E",
                  "value": "85",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "cc": "16yo with secondary skin infection on severe eczema — cellulitis",
          "hpi": "Zara Thompson — 16yo with secondary skin infection on severe eczema — cellulitis",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for IV antibiotics for extensive superinfected eczema",
        "diagnosis": "Severe Atopic Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe atopic dermatitis since infancy",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Food allergies (peanut, egg)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Anxiety secondary to skin appearance",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Triamcinolone 0.1% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to body",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Tacrolimus 0.03% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to face",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Cefazolin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Q8H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Wet wrap therapy",
          "dose": "",
          "route": "Topical",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "112/68",
          "hr": "86",
          "rr": "16",
          "temp": "37.8°C",
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
          "accession": "LAB-172340",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "14",
                  "unit": "%",
                  "range": "1-4",
                  "flag": "H"
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "4200",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Peanut Ig E",
                  "value": "85",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Admitted for IV antibiotics for extensive superinfected eczema",
          "hpi": "Zara Thompson — Admitted for IV antibiotics for extensive superinfected eczema",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — severe AD failing topicals, evaluate for dupilumab",
        "diagnosis": "Severe Atopic Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe atopic dermatitis since infancy",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Food allergies (peanut, egg)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Anxiety secondary to skin appearance",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Triamcinolone 0.1% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to body",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Tacrolimus 0.03% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to face",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "112/68",
          "hr": "78",
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
          "accession": "LAB-172340",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "14",
                  "unit": "%",
                  "range": "1-4",
                  "flag": "H"
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "4200",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Peanut Ig E",
                  "value": "85",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "cc": "A/I consult — severe AD failing topicals, evaluate for dupilumab",
          "hpi": "Zara Thompson — A/I consult — severe AD failing topicals, evaluate for dupilumab",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Widespread eczema refractory to topical steroids, affecting sleep and school performance",
        "diagnosis": "Severe Atopic Dermatitis — Dupilumab Candidate"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe atopic dermatitis since infancy",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Food allergies (peanut, egg)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Anxiety secondary to skin appearance",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Triamcinolone 0.1% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to body",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Tacrolimus 0.03% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to face",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "112/68",
          "hr": "78",
          "rr": "14",
          "temp": "36.8°C",
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
          "accession": "LAB-172340",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "14",
                  "unit": "%",
                  "range": "1-4",
                  "flag": "H"
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "4200",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Peanut Ig E",
                  "value": "85",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "type": "Office Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Widespread eczema refractory to topical steroids, affecting sleep and school performance",
          "hpi": "Zara Thompson presents with widespread eczema refractory to topical steroids, affecting sleep and school performance.",
          "exam": "See documentation.",
          "assessment": "Severe Atopic Dermatitis — Dupilumab Candidate",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Zara Thompson",
    "dob": "09/18/2010",
    "age": "16",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-772729",
    "language": "English",
    "race": "Black/African American",
    "phone": "(505) 555-1202",
    "email": "zara.thompson@email.com",
    "address": "2879 Poplar Ave, Milwaukee, WI 53206",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Michael Thompson",
      "phone": "(502) 555-7779",
      "relationship": "Parent"
    },
    "chiefComplaint": "Widespread eczema refractory to topical steroids, affecting sleep and school performance",
    "diagnosis": "Severe Atopic Dermatitis — Dupilumab Candidate"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Severe atopic dermatitis since infancy",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Allergic rhinitis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Food allergies (peanut, egg)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Anxiety secondary to skin appearance",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Triamcinolone 0.1% ointment",
      "dose": "",
      "route": "Topical",
      "frequency": "BID to body",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Tacrolimus 0.03% ointment",
      "dose": "",
      "route": "Topical",
      "frequency": "BID to face",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Cetirizine",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "Fluticasone nasal",
      "dose": "50mcg",
      "route": "Nasal",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Peanut",
      "reaction": "Anaphylaxis",
      "severity": "Severe",
      "type": "Food"
    },
    {
      "allergen": "Egg",
      "reaction": "Hives, eczema flare",
      "severity": "Moderate",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "112/68",
      "hr": "78",
      "rr": "14",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Office Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Widespread eczema refractory to topical steroids, affecting sleep and school performance",
      "hpi": "Zara Thompson presents with widespread eczema refractory to topical steroids, affecting sleep and school performance.",
      "exam": "See documentation.",
      "assessment": "Severe Atopic Dermatitis — Dupilumab Candidate",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-172340",
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
              "value": "7.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "248",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Eosinophils",
              "value": "14",
              "unit": "%",
              "range": "1-4",
              "flag": "H"
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
              "test": "Creatinine",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            }
          ]
        },
        {
          "name": "ALLERGY & IMMUNOLOGY STUDIES",
          "results": [
            {
              "test": "Ige",
              "value": "4200",
              "unit": "IU/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Peanut Ig E",
              "value": "85",
              "unit": "kU/L",
              "range": "<0.35",
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
    "Mother: asthma",
    "Father: eczema (childhood)",
    "Brother: peanut allergy"
  ],
  "socialHistory": [
    [
      "SCORAD",
      "62 (severe)"
    ],
    [
      "Sleep",
      "Wakes 3-4x/night scratching"
    ],
    [
      "Quality of life",
      "Missing school, avoids social activities"
    ],
    [
      "Prior treatment",
      "Failed medium-potency topicals, tacrolimus, and short course of cyclosporine"
    ]
  ]
,"references":[
  {
    "id": "AAD-AD-2023",
    "title": "AAD guidelines for management of atopic dermatitis with topical therapies",
    "authors": "Sidbury R, Alikhan A, Bercovitch L, et al.",
    "journal": "J Am Acad Dermatol",
    "year": 2023,
    "doi": "10.1016/j.jaad.2022.12.029",
    "url": "https://www.jaad.org/article/S0190-9622(22)03243-4/fulltext",
    "openAccess": true,
    "validates": [
      "SCORAD scoring",
      "TCS potency ladder",
      "Wet wrap therapy",
      "Simplified regimens",
      "Eczema herpeticum as emergency"
    ]
  }
],

  "teachingPoints": {
    "keyLearning": [
      "Severe AD (SCORAD >50 or IGA 3–4) failing topical therapy warrants systemic treatment. Dupilumab (anti-IL-4Rα) is first-line systemic biologic — approved for ages ≥6 months, excellent long-term safety profile.",
      "The filaggrin-IL-4/IL-13 vicious cycle: FLG LOF mutations → leaky skin barrier → TSLP/IL-33 alarmins → Th2 priming → IL-4/IL-13 → directly suppress FLG transcription → worsens barrier further. Dupilumab breaks this cycle.",
      "Dupilumab-associated conjunctivitis: 10–15% incidence in AD patients (higher than in asthma patients). Manage with artificial tears → topical steroids → cyclosporine eye drops. Do NOT discontinue dupilumab — refer to ophthalmology."
    ],
    "boardPearls": [
      "AD severity: mild SCORAD <25, moderate 25–50, severe >50. IGA 0/1 = treatment success in trials.",
      "Proactive TCS therapy: apply 2×/week to previously affected sites during remission → reduces flare frequency 50%.",
      "Dupilumab: IL-4Rα blockade. Approved ≥6 months. Also approved: asthma, CRSwNP, EoE, PNP.",
      "JAK inhibitors (abrocitinib, upadacitinib): FDA black box (serious infection, malignancy, MACE, VTE). Faster itch relief than dupilumab (24–48h via IL-31/JAK1 pathway).",
      "Atopic march: severe early AD → food allergy → asthma → AR. FLG mutations accelerate march.",
      "Bleach baths: 0.005% sodium hypochlorite (½ tsp/full tub) × 2–3/week → reduces S. aureus colonization → reduces AD flares. Evidence-based."
    ]
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
        "phase2": "You've reviewed Zara Thompson's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Zara appears tired and self-conscious, frequently touching her affected skin areas and avoiding direct eye contact. She seems frustrated but cooperative, speaking quietly about how the condition has impacted her social life and academic performance. She demonstrates visible distress when discussing the appearance of her skin and sleep disruption.",
    "interviewQuestions": [
        "Can you describe when your current flare-up started and how it's different from your usual eczema?",
        "Which areas of your body are most affected by the rash right now?",
        "How would you rate your itching on a scale of 1-10, and how is it affecting your daily activities?",
        "What treatments have you tried recently and how well have they worked?",
        "How many times do you wake up at night due to itching or discomfort?",
        "Have you noticed any new triggers or changes in your environment recently?",
        "Are you experiencing any fever, joint pain, or feeling generally unwell?",
        "How has this affected your school attendance and social activities?",
        "Have you had any recent infections or been more prone to getting sick?",
        "What moisturizers or skincare products are you currently using?",
        "Have you noticed any areas where the skin looks different - thicker, infected, or discolored?",
        "Are there any new stressors in your life that might be contributing to the flare-up?",
        "Have you been following any dietary restrictions for your food allergies?"
    ],
    "patientResponses": {
        "default": "I'm not sure what you mean... could you ask that differently? This has all been really overwhelming.",
        "onset": "This flare started about 6 weeks ago and it's been the worst it's ever been. It started on my arms and face but now it's everywhere.",
        "character": "It's this intense, constant itching that feels like burning sometimes. The skin is really red, dry, and cracked in some places.",
        "location": "It's mainly on my face, neck, arms, and behind my knees, but it's spreading to my back and chest too. My eyelids are really bad right now.",
        "severity": "The itching is easily a 9 out of 10. I can barely concentrate in class and I've missed like 8 days of school in the past month.",
        "aggravating": "Stress definitely makes it worse, and I think the weather changing has been bad. Even my usual clothes feel irritating now.",
        "relieving": "Nothing really helps anymore. The creams my doctor gave me used to work but they're not doing much now. Cool compresses help a tiny bit.",
        "associated": "I'm exhausted all the time from not sleeping. My eyes have been watery and my nose is stuffy. I feel like I'm getting sick more often too.",
        "denies": "No fever, no joint pain. I haven't had any obvious skin infections, but some areas look different than usual.",
        "history": "I've had eczema since I was a baby, but it usually gets better with the prescription creams. This is definitely the worst it's been in years.",
        "medications": "Triamcinolone 0.1% ointment; Tacrolimus 0.03% ointment; Cetirizine; Fluticasone nasal",
        "allergies": "Peanut, Egg",
        "family": "My dad had really bad eczema when he was little, and my mom has asthma. My brother is allergic to peanuts too.",
        "social": "I'm in 11th grade but I've been missing a lot of school. I don't really want to hang out with friends because I'm embarrassed about how I look. I don't smoke or drink."
    },
    "examManeuvers": [
        "Inspect face and periorbital area",
        "Examine flexural areas (antecubital and popliteal fossae)",
        "Assess neck and postauricular areas",
        "Inspect hands and wrists",
        "Examine trunk and back",
        "Check for signs of secondary infection",
        "Assess for lichenification",
        "Evaluate nail changes",
        "Inspect conjunctiva and nasal mucosa",
        "Palpate lymph nodes"
    ],
    "examFindings": {
        "Inspect face and periorbital area": "Erythematous, edematous eyelids with fine scaling. Perioral sparing noted. Excoriation marks on cheeks.",
        "Examine flexural areas (antecubital and popliteal fossae)": "Severe erythema with lichenification and fissuring in bilateral antecubital and popliteal fossae. Active weeping in some areas.",
        "Assess neck and postauricular areas": "Confluent erythematous plaques with scaling around neck. Postauricular fissuring present bilaterally.",
        "Inspect hands and wrists": "Dorsal hand eczema with scaling and erythema. Wrist involvement with linear excoriations from scratching.",
        "Examine trunk and back": "Scattered erythematous, scaly patches on chest and upper back. Some areas show early lichenification.",
        "Check for signs of secondary infection": "No obvious purulence or honey-crusting. Some areas appear inflamed but without clear signs of bacterial superinfection.",
        "Assess for lichenification": "Significant lichenification in chronic areas, particularly antecubital fossae and posterior neck.",
        "Evaluate nail changes": "Mild nail pitting and shine from chronic rubbing. No significant dystrophy.",
        "Inspect conjunctiva and nasal mucosa": "Mild conjunctival injection bilaterally. Nasal mucosa appears boggy and pale.",
        "Palpate lymph nodes": "Mild bilateral cervical and axillary lymphadenopathy, likely reactive."
    },
    "ddxTargets": [
        "Severe atopic dermatitis with treatment resistance (correct diagnosis)",
        "Allergic contact dermatitis",
        "Seborrheic dermatitis",
        "Cutaneous T-cell lymphoma (mycosis fungoides)",
        "Immunodeficiency disorder",
        "Psoriasis",
        "Scabies"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on 'refractory eczema' without considering that treatment resistance in adolescence may signal need for systemic therapy or alternative diagnoses like early cutaneous lymphoma",
        "prematureClosure": "Risk of assuming this is just a severe flare without exploring why topical treatments have failed or considering systemic causes of treatment resistance",
        "availabilityBias": "Common presentation may lead to missing rare but serious causes of treatment-resistant dermatitis in adolescents, particularly early mycosis fungoides"
    },
    "coachPrompts": {
        "phase2": "This 16-year-old has 'refractory' eczema affecting her quality of life significantly. Before you interview her, consider: what factors might make atopic dermatitis truly refractory to standard treatment? What red flags should you explore? How does the adolescent age group change your differential considerations?",
        "phase5": "Your exam reveals severe, widespread atopic dermatitis with significant lichenification and treatment resistance. The SCORAD of 62 indicates severe disease. What factors might explain why her usual treatments aren't working? When should we consider systemic therapy in adolescent atopic dermatitis? What concerning features would prompt you to consider alternative diagnoses?",
        "finalDebrief": "This case illustrates severe atopic dermatitis requiring systemic management. Key learning points: recognizing when topical therapy is insufficient, understanding SCORAD scoring for severity assessment, considering systemic treatments like dupilumab or methotrexate in adolescents, and the importance of addressing quality of life impacts. The apparent 'refractoriness' likely reflects undertreated severe disease rather than treatment resistance."
    }
}
};