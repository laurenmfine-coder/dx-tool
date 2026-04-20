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
      "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
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
        "chiefComplaint": "16yo with secondary skin infection on severe eczema \u2014 cellulitis",
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
          "temp": "38.4\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "16yo with secondary skin infection on severe eczema \u2014 cellulitis",
          "hpi": "Zara Thompson \u2014 16yo with secondary skin infection on severe eczema \u2014 cellulitis",
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
          "temp": "37.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "hpi": "Zara Thompson \u2014 Admitted for IV antibiotics for extensive superinfected eczema",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 severe AD failing topicals, evaluate for dupilumab",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "A/I consult \u2014 severe AD failing topicals, evaluate for dupilumab",
          "hpi": "Zara Thompson \u2014 A/I consult \u2014 severe AD failing topicals, evaluate for dupilumab",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Widespread eczema refractory to topical steroids, affecting sleep and school performance",
        "diagnosis": "Severe Atopic Dermatitis \u2014 Dupilumab Candidate"
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "assessment": "Severe Atopic Dermatitis \u2014 Dupilumab Candidate",
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
    "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
    "emergencyContact": {
      "name": "Michael Thompson",
      "phone": "(502) 555-7779",
      "relationship": "Parent"
    },
    "chiefComplaint": "Widespread eczema refractory to topical steroids, affecting sleep and school performance",
    "diagnosis": "Severe Atopic Dermatitis \u2014 Dupilumab Candidate"
  },
  "problems": [
    {
      "problem": "Atopic dermatitis \u2014 severe, refractory",
      "icd": "L20.9",
      "onset": "2012",
      "status": "Active",
      "notes": "EASI 32 (severe); BSA involvement 40%; SCORAD 68; failed TCS, tacrolimus, crisaborole; dupilumab initiated"
    },
    {
      "problem": "Allergic rhinitis and asthma \u2014 comorbid atopic diseases",
      "icd": "J30.1",
      "onset": "2014",
      "status": "Active",
      "notes": "Atopic march \u2014 AD \u2192 allergic rhinitis \u2192 asthma; dupilumab may address all three simultaneously"
    },
    {
      "problem": "Sleep disturbance and depression from chronic itch",
      "icd": "G47.00",
      "onset": "2023",
      "status": "Active",
      "notes": "DLQI 22 (extremely impaired quality of life); PHQ-A score 14 (moderate depression); mental health referral placed"
    }
  ],
  "medications": [
    {
      "name": "Dupilumab (Dupixent) 300mg SC q2 weeks",
      "sig": "Administer 300mg subcutaneously every 2 weeks; loading dose 600mg (2x300) at initiation",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 5,
      "status": "Active \u2014 initiated today"
    },
    {
      "name": "Triamcinolone acetonide 0.1% cream BID (flare rescue)",
      "sig": "Apply thin layer to affected areas during flares; limit to 2 weeks per course on face/folds",
      "prescriber": "Dr. Rodriguez",
      "start": "2019",
      "refills": 3,
      "status": "Active \u2014 as needed"
    },
    {
      "name": "Tacrolimus 0.1% ointment BID (face and folds)",
      "sig": "Apply twice daily to face and skin folds \u2014 steroid-sparing",
      "prescriber": "Dr. Rodriguez",
      "start": "2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Cetirizine 10mg nightly",
      "sig": "Take 1 tablet by mouth at bedtime for itch and sleep",
      "prescriber": "Dr. Rodriguez",
      "start": "2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Fluticasone nasal spray 2 sprays each nostril daily",
      "sig": "2 sprays per nostril daily for allergic rhinitis",
      "prescriber": "Dr. Rodriguez",
      "start": "2014",
      "refills": 3,
      "status": "Active"
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
      "temp": "36.8\u00b0C",
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
      "assessment": "Severe Atopic Dermatitis \u2014 Dupilumab Candidate",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/08/2024",
      "panel": "Atopic Dermatitis Severity and Allergy Panel",
      "results": [
        {
          "test": "Total IgE",
          "value": "4,280",
          "unit": "IU/mL",
          "ref": "<150",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 Eosinophils",
          "value": "1.8",
          "unit": "K/\u03bcL",
          "ref": "0.0-0.5",
          "flag": "H"
        },
        {
          "test": "House Dust Mite IgE (Der p 1)",
          "value": "12.4",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Cat dander IgE (Fel d 1)",
          "value": "8.1",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Grass pollen IgE",
          "value": "6.8",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Peanut IgE (Ara h 2)",
          "value": "2.1",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "EASI score",
          "value": "32",
          "unit": "",
          "ref": "<7 clear/almost clear",
          "flag": "H"
        },
        {
          "test": "SCORAD",
          "value": "68",
          "unit": "",
          "ref": "<25 mild",
          "flag": "H"
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
  ],
  "references": [
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
      "Severe AD (SCORAD >50 or IGA 3\u20134) failing topical therapy warrants systemic treatment. Dupilumab (anti-IL-4R\u03b1) is first-line systemic biologic \u2014 approved for ages \u22656 months, excellent long-term safety profile.",
      "The filaggrin-IL-4/IL-13 vicious cycle: FLG LOF mutations \u2192 leaky skin barrier \u2192 TSLP/IL-33 alarmins \u2192 Th2 priming \u2192 IL-4/IL-13 \u2192 directly suppress FLG transcription \u2192 worsens barrier further. Dupilumab breaks this cycle.",
      "Dupilumab-associated conjunctivitis: 10\u201315% incidence in AD patients (higher than in asthma patients). Manage with artificial tears \u2192 topical steroids \u2192 cyclosporine eye drops. Do NOT discontinue dupilumab \u2014 refer to ophthalmology."
    ],
    "boardPearls": [
      "AD severity: mild SCORAD <25, moderate 25\u201350, severe >50. IGA 0/1 = treatment success in trials.",
      "Proactive TCS therapy: apply 2\u00d7/week to previously affected sites during remission \u2192 reduces flare frequency 50%.",
      "Dupilumab: IL-4R\u03b1 blockade. Approved \u22656 months. Also approved: asthma, CRSwNP, EoE, PNP.",
      "JAK inhibitors (abrocitinib, upadacitinib): FDA black box (serious infection, malignancy, MACE, VTE). Faster itch relief than dupilumab (24\u201348h via IL-31/JAK1 pathway).",
      "Atopic march: severe early AD \u2192 food allergy \u2192 asthma \u2192 AR. FLG mutations accelerate march.",
      "Bleach baths: 0.005% sodium hypochlorite (\u00bd tsp/full tub) \u00d7 2\u20133/week \u2192 reduces S. aureus colonization \u2192 reduces AD flares. Evidence-based."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Zara appears visibly distressed and self-conscious, frequently scratching visible lesions and keeping her arms crossed. She seems tired and frustrated, speaking quietly but willing to discuss her symptoms when asked directly. She becomes more withdrawn when discussing the social impact of her condition.",
    "interviewQuestions": [
      "Can you describe your current skin symptoms and how they've changed recently?",
      "How is your sleep being affected by the itching?",
      "What treatments have you tried and how well have they worked?",
      "Are there specific triggers that make your eczema worse?",
      "How is this affecting your school and social activities?",
      "Have you had any recent infections or illnesses?",
      "Are you experiencing any stress or anxiety about your condition?",
      "What moisturizers or skincare products do you use?",
      "Have you noticed any new areas of involvement?",
      "Are you having any other symptoms like eye irritation or breathing problems?",
      "How compliant have you been with your current medications?",
      "Have you had any recent changes in diet or environment?",
      "Are you experiencing any mood changes or depression?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean... can you ask that differently?",
      "onset": "I've had eczema since I was a baby, but it's gotten much worse over the past 6 months. It used to be just small patches, but now it's everywhere.",
      "character": "The itching is constant and intense, like my skin is on fire. The patches are red, scaly, and sometimes weepy. I can't stop scratching even when it hurts.",
      "location": "It's on my face, neck, arms, hands, behind my knees, and on my feet. It used to just be in the creases, but now it's spreading to new areas.",
      "severity": "The itching is definitely a 9 out of 10. I can't concentrate in school and I'm embarrassed to be around people because of how I look.",
      "aggravating": "Stress makes it worse, and I think certain fabrics irritate it. Heat and sweating definitely flare it up. I've noticed it gets worse during exams or when I'm anxious.",
      "relieving": "The prescription creams help a little bit, but not much anymore. Cool compresses feel good temporarily. Nothing really gives me lasting relief.",
      "associated": "My nose is always stuffy, and my eyes get watery and itchy sometimes. I've been feeling really down about how I look lately.",
      "denies": "No fever, no joint pain, no hair loss. I haven't had any serious infections, just some areas that get a bit crusty sometimes.",
      "history": "It's been getting progressively worse. I had one really bad flare when I was 12 that needed stronger medicine, but this is the worst it's ever been.",
      "medications": "Triamcinolone 0.1% ointment; Tacrolimus 0.03% ointment; Cetirizine; Fluticasone nasal",
      "allergies": "Peanut, Egg",
      "family": "My dad had eczema when he was little but grew out of it. My mom has asthma, and my little brother is allergic to peanuts too.",
      "social": "I'm a junior in high school but I've been missing a lot of days because I'm embarrassed. I don't hang out with friends much anymore. I don't smoke or drink.",
      "sleep": "I wake up 3 or 4 times every night scratching. Sometimes I don't even realize I'm doing it until I see blood under my nails in the morning.",
      "triggers": "I think stress is a big trigger. Also certain soaps or detergents, and when I get sweaty from sports. I had to quit the soccer team.",
      "compliance": "I try to use the creams like I'm supposed to, but sometimes they sting so much I can't stand it. I use the antihistamine every day though."
    },
    "examManeuvers": [
      "Inspect face and scalp for lesions",
      "Examine neck and flexural areas",
      "Inspect arms and hands including fingernails",
      "Examine legs and feet",
      "Assess for secondary bacterial infection",
      "Examine conjunctiva and nasal mucosa",
      "Palpate lymph nodes",
      "Assess for lichenification",
      "Check for Dennie-Morgan folds",
      "Evaluate overall skin dryness and barrier function"
    ],
    "examFindings": {
      "Inspect face and scalp for lesions": "Erythematous, scaly patches on cheeks and forehead with some excoriations. Perioral sparing noted. Scalp shows mild scaling.",
      "Examine neck and flexural areas": "Severe lichenified plaques in neck creases, antecubital and popliteal fossae with hyperpigmentation from chronic inflammation.",
      "Inspect arms and hands including fingernails": "Widespread eczematous lesions on forearms and dorsal hands. Multiple excoriations present. Fingernails show evidence of chronic picking with some dried blood.",
      "Examine legs and feet": "Erythematous, dry patches on shins and dorsal feet. Some areas show early lichenification.",
      "Assess for secondary bacterial infection": "Few areas of mild crusting on arms but no purulent drainage, significant warmth, or spreading erythema suggestive of cellulitis.",
      "Examine conjunctiva and nasal mucosa": "Mild conjunctival injection bilaterally. Nasal mucosa appears boggy and pale consistent with allergic rhinitis.",
      "Palpate lymph nodes": "Mild bilateral cervical and axillary lymphadenopathy, likely reactive to chronic skin inflammation.",
      "Assess for lichenification": "Significant lichenification present in chronic areas, particularly neck, antecubital and popliteal fossae indicating chronic rubbing and scratching.",
      "Check for Dennie-Morgan folds": "Prominent infraorbital folds (Dennie-Morgan lines) present bilaterally, consistent with atopic dermatitis.",
      "Evaluate overall skin dryness and barrier function": "Generalized xerosis with impaired skin barrier function. Skin appears dull and feels rough to palpation."
    },
    "ddxTargets": [
      "Severe atopic dermatitis \u2014 refractory, Th2-mediated; dupilumab indicated (correct)",
      "Contact dermatitis \u2014 patch test distinguishes; distribution at contact sites; not flexural",
      "Psoriasis \u2014 silvery plaques, extensor surfaces, nail changes; not flexural or pruritic-dominant",
      "Seborrheic dermatitis \u2014 oily, scale-dominant; scalp, nasolabial folds; not widespread",
      "Scabies \u2014 burrows, interdigital; household contacts affected; nocturnal itch disproportionate",
      "Netherton syndrome \u2014 ichthyosis linearis circumflexa; SPINK5 mutation; bamboo hair"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'refractory eczema' and miss considering systemic causes, malignancy, or the need to evaluate treatment adherence and proper application technique",
      "prematureClosure": "Might immediately assume medication non-compliance or inadequate potency without considering immunodeficiency, malignancy, or need for systemic therapy in severe atopic dermatitis",
      "availabilityBias": "Recent cases of contact dermatitis or psoriasis might influence thinking, or underestimating severity due to young age and assuming topicals should be sufficient"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, what key historical features would help you distinguish between these conditions? Consider the chronicity, distribution pattern, and treatment response. What red flags should you be particularly alert for in a case of 'treatment-resistant' eczema?",
      "phase5": "Now that you've completed your history and physical exam, how does the SCORAD severity score and treatment failure pattern influence your thinking? What are the implications of severe atopic dermatitis that's refractory to standard therapy, and what would be your next steps in management?",
      "finalDebrief": "This case illustrates severe atopic dermatitis requiring systemic therapy consideration. Notice how the distribution, chronicity, family history, and associated atopic conditions supported the diagnosis, while the severity and treatment resistance indicated need for escalated care. What systemic options would you consider for this patient, and how would you address the psychosocial impacts?",
      "final": "Diagnosis: severe atopic dermatitis, Th2-polarized, refractory to topical therapy \u2014 dupilumab indicated. Key teaching points: (1) AD pathophysiology: IL-4 and IL-13 (from Th2 cells) drive skin barrier dysfunction (filaggrin downregulation) and IgE overproduction. Dupilumab (anti-IL-4R\u03b1) blocks both IL-4 and IL-13 \u2014 mechanism-targeted therapy. (2) Severity scoring: EASI \u226523 = severe; SCORAD \u226550 = severe; DLQI >20 = extremely impaired. Documentation of severity is required for dupilumab prior authorization. (3) Dupilumab is approved age 6 months+. Expected response: 50-70% achieve EASI 75 (75% improvement) by week 16. Conjunctivitis is the main side effect (20% \u2014 treat with ophthalmic cyclosporine). (4) Atopic march: AD \u2192 allergic rhinitis \u2192 asthma is the canonical trajectory. Dupilumab is also approved for asthma and nasal polyposis \u2014 may treat multiple comorbidities. (5) Mental health impact of chronic AD is profound and underrecognized \u2014 DLQI 22 and PHQ-A 14 require psychiatric/psychology referral, not just dermatology optimization."
    }
  },
  "meta": {
    "diagnosis": "Severe Atopic Dermatitis, Adolescent \u2014 Refractory to Topical Therapy; Dupilumab Indicated"
  }
};
