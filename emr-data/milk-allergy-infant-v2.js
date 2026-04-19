/* emr-data/milk-allergy-infant-v2.js — Variation: Cow's Milk Protein Allergy */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Grace Okafor",
  "patientHPI": "My baby has been having bloody bowel movements and isn't gaining weight like she should - she used to be doing so well but now she's really fallen behind on the growth charts.",
      "dob": "08/04/2025.5",
      "age": "0.5",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-107431",
      "language": "English",
      "race": "Black/African American",
      "phone": "(803) 555-8921",
      "email": "grace.okafor@email.com",
      "address": "1519 W Haddon Ave, Kansas City, MO 64123",
      "insurance": "Medicaid",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Michael Okafor",
        "phone": "(614) 555-8136",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Cow milk protein",
        "reaction": "Bloody stools, failure to thrive",
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
      "Mother: lactose intolerance (different mechanism — mother confuses this with baby's allergy)"
    ],
    "socialHistory": [
      [
        "Feeding",
        "Breastfed — mother has NOT eliminated dairy from own diet despite pediatrician's recommendation"
      ],
      [
        "Mother misconception",
        "Mother thinks her lactose intolerance = baby's milk allergy (different mechanisms)"
      ],
      [
        "WIC",
        "On WIC program — hypoallergenic formula expensive even with WIC"
      ],
      [
        "Growth",
        "Falling off growth curve — now <5th percentile weight"
      ],
      [
        "Social",
        "First-time mother, 19 years old, limited support system"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "6-month-old with bloody stools, poor weight gain, and irritability — breastfed but mother eating dairy",
        "diagnosis": "Cow's Milk Protein Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CMPA — non-IgE (proctocolitis) in breastfed infant",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Mother has NOT eliminated dairy from diet (says she did but still eating cheese and yogurt)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Failure to thrive — <5th percentile weight",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Mother confuses her own lactose intolerance with baby's CMPA (completely different)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "WIC — need hypoallergenic formula coverage if breastfeeding fails",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Maternal dairy elimination",
          "dose": "",
          "route": "",
          "frequency": "Mother must eliminate ALL cow milk protein from HER diet while breastfeeding",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Iron supplement",
          "dose": "1mg/kg/day",
          "route": "PO",
          "frequency": "Daily (for iron deficiency from chronic GI blood loss)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "148",
          "rr": "34",
          "temp": "37.0°C",
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
          "accession": "LAB-300564",
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
                  "value": "8.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "9.8",
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
              "name": "NUTRITION/GI",
              "results": [
                {
                  "test": "Iron",
                  "value": "28",
                  "unit": "mcg/dL",
                  "range": "50-120",
                  "flag": "L"
                },
                {
                  "test": "Ferritin",
                  "value": "8",
                  "unit": "ng/mL",
                  "range": "12-150",
                  "flag": "L"
                },
                {
                  "test": "Albumin",
                  "value": "3.0",
                  "unit": "g/dL",
                  "range": "3.5-5.0",
                  "flag": "L"
                },
                {
                  "test": "Stool occult blood",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                },
                {
                  "test": "Stool calprotectin",
                  "value": "320",
                  "unit": "mcg/g",
                  "range": "<50",
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
          "cc": "6-month-old with bloody stools, poor weight gain, and irritability — breastfed but mother eating dairy",
          "hpi": "6-month-old EBF female brought for bloody stools and poor weight gain. Falling off growth curve — <5th percentile weight (was 25th at 2 months). Mother reports she \"eliminated dairy\" but on detailed dietary review: still eating cheese on sandwiches, yogurt daily, and butter in cooking. She equates her own lactose intolerance (enzyme deficiency, affects HER) with baby's cow milk protein allergy (immune-mediated, affects BABY through breast milk). These are completely different mechanisms. Baby needs either TRUE maternal dairy elimination (every source of cow milk protein) or switch to extensively hydrolyzed formula. Iron deficiency from chronic GI blood loss.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief admission for FTT evaluation and feeding plan",
        "diagnosis": "Cow's Milk Protein Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "FTT with CMPA",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Iron deficiency anemia",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Feeding plan education",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Iron supplement",
          "dose": "1mg/kg/day",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "142",
          "rr": "32",
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
          "accession": "LAB-610256",
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
          "cc": "Brief admission for FTT evaluation and feeding plan",
          "hpi": "6-month-old admitted for FTT workup. CMPA confirmed as cause. Mother receiving intensive dietary education from lactation consultant and nutritionist.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — CMPA management, breastfeeding support with TRUE elimination, growth monitoring",
        "diagnosis": "Cow's Milk Protein Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CMPA (non-IgE proctocolitis) — confirmed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Maternal diet counseling — must eliminate ALL cow milk protein (not just \"milk\")",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Iron deficiency anemia from chronic GI blood loss",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Failure to thrive — nutritionist involved",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Mother education: lactose intolerance ≠ cow milk protein allergy",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "If elimination fails or mother cannot adhere: extensively hydrolyzed formula (Nutramigen/Alimentum)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-7",
          "description": "WIC coverage for specialty formula — requires physician letter",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Maternal dairy elimination",
          "dose": "Complete — including hidden dairy (casein, whey, lactoglobulin)",
          "route": "",
          "frequency": "Minimum 2-4 weeks to see improvement",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Iron supplement for infant",
          "dose": "1mg/kg/day ferrous sulfate",
          "route": "PO",
          "frequency": "Daily x3 months",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Maternal calcium supplement",
          "dose": "1000mg",
          "route": "PO",
          "frequency": "Daily (since mother eliminating dairy)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "138",
          "rr": "30",
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
          "accession": "LAB-366770",
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
          "cc": "A/I consult — CMPA management, breastfeeding support with TRUE elimination, growth monitoring",
          "hpi": "A/I consult: 6-month-old with CMPA proctocolitis. Mother counseled extensively on TRUE dairy elimination — provided written list of ALL names for cow milk protein on food labels (casein, caseinates, whey, lactalbumin, lactoglobulin, ghee, curds). Mother initially resistant: \"but yogurt is different from milk, right?\" Education: the PROTEIN is what causes baby's reaction, and it's in ALL dairy products regardless of form. Gave 2-week strict elimination trial. WIC letter written for Nutramigen coverage as backup if breastfeeding + elimination fails. Nutritionist: ensuring mother gets adequate calcium and protein without dairy.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "CMPA follow-up — 4 weeks of true maternal dairy elimination, bloody stools resolved, weight improving",
        "diagnosis": "Cow's Milk Protein Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CMPA — bloody stools resolved within 10 days of true maternal dairy elimination",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Weight — gaining well, now 8th percentile (was <5th)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Iron — supplementing, Hgb improving",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Mother successfully maintaining dairy-free diet — using WIC-approved alternatives",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Plan for milk reintroduction via baked milk at age 12 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Maternal dairy elimination",
          "dose": "Continuing",
          "route": "",
          "frequency": "Until baby age 12 months then supervised reintroduction",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Iron supplement",
          "dose": "1mg/kg/day",
          "route": "PO",
          "frequency": "Continue x2 more months",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Maternal calcium",
          "dose": "1000mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "128",
          "rr": "28",
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
          "accession": "LAB-925656",
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
          "cc": "CMPA follow-up — 4 weeks of true maternal dairy elimination, bloody stools resolved, weight improving",
          "hpi": "6-month-old returns 4 weeks into true maternal dairy elimination. Stools completely normal — no blood. Weight catch-up beginning (8th percentile from <5th). Mother now reading every label — \"I had no idea cheese powder was in so many things.\" Lactation consultant involved to ensure adequate breast milk supply on dairy-free diet. Plan: continue elimination while breastfeeding, introduce baked milk (muffin with milk baked in) at age 12 months under supervision — 75% of CMPA infants tolerate baked milk by age 1. If tolerates baked → gradual milk ladder over months.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Grace Okafor",
    "dob": "08/04/2025.5",
    "age": "0.5",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-107431",
    "language": "English",
    "race": "Black/African American",
    "phone": "(720) 555-5397",
    "email": "grace.okafor@email.com",
    "address": "9437 Hollyhock Rd, New Orleans, LA 70112",
    "insurance": "Medicaid",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Michael Okafor",
      "phone": "(503) 555-5022",
      "relationship": "Parent"
    },
    "chiefComplaint": "6-month-old with bloody stools, poor weight gain, and irritability — breastfed but mother eating dairy",
    "diagnosis": "Cow's Milk Protein Allergy"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "CMPA — non-IgE (proctocolitis) in breastfed infant",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Mother has NOT eliminated dairy from diet (says she did but still eating cheese and yogurt)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Failure to thrive — <5th percentile weight",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Mother confuses her own lactose intolerance with baby's CMPA (completely different)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "WIC — need hypoallergenic formula coverage if breastfeeding fails",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Maternal dairy elimination",
      "dose": "",
      "route": "",
      "frequency": "Mother must eliminate ALL cow milk protein from HER diet while breastfeeding",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Iron supplement",
      "dose": "1mg/kg/day",
      "route": "PO",
      "frequency": "Daily (for iron deficiency from chronic GI blood loss)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Cow milk protein",
      "reaction": "Bloody stools, failure to thrive",
      "severity": "Severe",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "N/A",
      "hr": "148",
      "rr": "34",
      "temp": "37.0°C",
      "spo2": "99%",
      "pain": "N/A/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "6-month-old with bloody stools, poor weight gain, and irritability — breastfed but mother eating dairy",
      "hpi": "6-month-old EBF female brought for bloody stools and poor weight gain. Falling off growth curve — <5th percentile weight (was 25th at 2 months). Mother reports she \"eliminated dairy\" but on detailed dietary review: still eating cheese on sandwiches, yogurt daily, and butter in cooking. She equates her own lactose intolerance (enzyme deficiency, affects HER) with baby's cow milk protein allergy (immune-mediated, affects BABY through breast milk). These are completely different mechanisms. Baby needs either TRUE maternal dairy elimination (every source of cow milk protein) or switch to extensively hydrolyzed formula. Iron deficiency from chronic GI blood loss.",
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
      "accession": "LAB-300564",
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
              "value": "8.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "9.8",
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
          "name": "NUTRITION/GI",
          "results": [
            {
              "test": "Iron",
              "value": "28",
              "unit": "mcg/dL",
              "range": "50-120",
              "flag": "L"
            },
            {
              "test": "Ferritin",
              "value": "8",
              "unit": "ng/mL",
              "range": "12-150",
              "flag": "L"
            },
            {
              "test": "Albumin",
              "value": "3.0",
              "unit": "g/dL",
              "range": "3.5-5.0",
              "flag": "L"
            },
            {
              "test": "Stool occult blood",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Stool calprotectin",
              "value": "320",
              "unit": "mcg/g",
              "range": "<50",
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
    "Mother: lactose intolerance (different mechanism — mother confuses this with baby's allergy)"
  ],
  "socialHistory": [
    [
      "Feeding",
      "Breastfed — mother has NOT eliminated dairy from own diet despite pediatrician's recommendation"
    ],
    [
      "Mother misconception",
      "Mother thinks her lactose intolerance = baby's milk allergy (different mechanisms)"
    ],
    [
      "WIC",
      "On WIC program — hypoallergenic formula expensive even with WIC"
    ],
    [
      "Growth",
      "Falling off growth curve — now <5th percentile weight"
    ],
    [
      "Social",
      "First-time mother, 19 years old, limited support system"
    ]
  ]
,"references":[
  {
    "id": "NIAID-FA-2010",
    "title": "Guidelines for diagnosis and management of food allergy in the US",
    "authors": "Boyce JA, Assa'ad A, Burks AW, et al.",
    "journal": "J Allergy Clin Immunol",
    "year": 2010,
    "doi": "10.1016/j.jaci.2010.10.008",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4241964/",
    "openAccess": true,
    "validates": [
      "IgE-mediated food allergy criteria",
      "Component testing (Ara h 2)",
      "OFC as gold standard"
    ]
  },
  {
    "id": "DRACMA-2010",
    "title": "WAO DRACMA: cow's milk allergy diagnosis",
    "authors": "Fiocchi A, Brozek J, Schunemann H, et al.",
    "journal": "World Allergy Organ J",
    "year": 2010,
    "doi": "10.1097/WOX.0b013e3181defeb9",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3488907/",
    "openAccess": true,
    "validates": [
      "CMP in breast milk",
      "Maternal elimination counseling",
      "Hydrolyzed vs amino acid formula",
      "Baked milk ladder",
      "75% tolerate baked milk by age 1"
    ]
  }
],
  "guided": {
    "supported": true,
    "patientPersona": "Grace Okafor is alert and cooperative, clearly concerned but provides a clear history.",
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
        "medications": "'I take Maternal dairy elimination; Iron supplement.'",
        "allergies": "'My allergies: Cow milk protein.'",
        "family": "Mother: lactose intolerance (different mechanism \u2014 mother confuses this with baby's allergy)",
        "social": "Feeding: Breastfed \u2014 mother has NOT eliminated dairy from own diet despite pediatrician's recommendation  Mother misconception: Mother thinks her lactose intolerance = baby's milk allergy (different mechanisms)  WIC: On WIC program \u2014 hypoallergenic formula expensive even with WIC  Growth: Falling off growth curve \u2014 now <5th percentile weight  Social: First-time mother, 19 years old, limited support system"
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
        "phase2": "Before interviewing Grace Okafor: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
