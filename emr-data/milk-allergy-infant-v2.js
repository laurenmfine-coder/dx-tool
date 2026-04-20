
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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
      "Mother: lactose intolerance (different mechanism \u2014 mother confuses this with baby's allergy)"
    ],
    "socialHistory": [
      [
        "Feeding",
        "Breastfed \u2014 mother has NOT eliminated dairy from own diet despite pediatrician's recommendation"
      ],
      [
        "Mother misconception",
        "Mother thinks her lactose intolerance = baby's milk allergy (different mechanisms)"
      ],
      [
        "WIC",
        "On WIC program \u2014 hypoallergenic formula expensive even with WIC"
      ],
      [
        "Growth",
        "Falling off growth curve \u2014 now <5th percentile weight"
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
        "chiefComplaint": "6-month-old with bloody stools, poor weight gain, and irritability \u2014 breastfed but mother eating dairy",
        "diagnosis": "Cow's Milk Protein Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CMPA \u2014 non-IgE (proctocolitis) in breastfed infant",
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
          "description": "Failure to thrive \u2014 <5th percentile weight",
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
          "description": "WIC \u2014 need hypoallergenic formula coverage if breastfeeding fails",
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
          "temp": "37.0\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "6-month-old with bloody stools, poor weight gain, and irritability \u2014 breastfed but mother eating dairy",
          "hpi": "6-month-old EBF female brought for bloody stools and poor weight gain. Falling off growth curve \u2014 <5th percentile weight (was 25th at 2 months). Mother reports she \"eliminated dairy\" but on detailed dietary review: still eating cheese on sandwiches, yogurt daily, and butter in cooking. She equates her own lactose intolerance (enzyme deficiency, affects HER) with baby's cow milk protein allergy (immune-mediated, affects BABY through breast milk). These are completely different mechanisms. Baby needs either TRUE maternal dairy elimination (every source of cow milk protein) or switch to extensively hydrolyzed formula. Iron deficiency from chronic GI blood loss.",
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
        "chiefComplaint": "A/I consult \u2014 CMPA management, breastfeeding support with TRUE elimination, growth monitoring",
        "diagnosis": "Cow's Milk Protein Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CMPA (non-IgE proctocolitis) \u2014 confirmed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Maternal diet counseling \u2014 must eliminate ALL cow milk protein (not just \"milk\")",
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
          "description": "Failure to thrive \u2014 nutritionist involved",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Mother education: lactose intolerance \u2260 cow milk protein allergy",
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
          "description": "WIC coverage for specialty formula \u2014 requires physician letter",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Maternal dairy elimination",
          "dose": "Complete \u2014 including hidden dairy (casein, whey, lactoglobulin)",
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
          "cc": "A/I consult \u2014 CMPA management, breastfeeding support with TRUE elimination, growth monitoring",
          "hpi": "A/I consult: 6-month-old with CMPA proctocolitis. Mother counseled extensively on TRUE dairy elimination \u2014 provided written list of ALL names for cow milk protein on food labels (casein, caseinates, whey, lactalbumin, lactoglobulin, ghee, curds). Mother initially resistant: \"but yogurt is different from milk, right?\" Education: the PROTEIN is what causes baby's reaction, and it's in ALL dairy products regardless of form. Gave 2-week strict elimination trial. WIC letter written for Nutramigen coverage as backup if breastfeeding + elimination fails. Nutritionist: ensuring mother gets adequate calcium and protein without dairy.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "CMPA follow-up \u2014 4 weeks of true maternal dairy elimination, bloody stools resolved, weight improving",
        "diagnosis": "Cow's Milk Protein Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CMPA \u2014 bloody stools resolved within 10 days of true maternal dairy elimination",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Weight \u2014 gaining well, now 8th percentile (was <5th)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Iron \u2014 supplementing, Hgb improving",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Mother successfully maintaining dairy-free diet \u2014 using WIC-approved alternatives",
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
          "cc": "CMPA follow-up \u2014 4 weeks of true maternal dairy elimination, bloody stools resolved, weight improving",
          "hpi": "6-month-old returns 4 weeks into true maternal dairy elimination. Stools completely normal \u2014 no blood. Weight catch-up beginning (8th percentile from <5th). Mother now reading every label \u2014 \"I had no idea cheese powder was in so many things.\" Lactation consultant involved to ensure adequate breast milk supply on dairy-free diet. Plan: continue elimination while breastfeeding, introduce baked milk (muffin with milk baked in) at age 12 months under supervision \u2014 75% of CMPA infants tolerate baked milk by age 1. If tolerates baked \u2192 gradual milk ladder over months.",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Michael Okafor",
      "phone": "(503) 555-5022",
      "relationship": "Parent"
    },
    "chiefComplaint": "6-month-old with bloody stools, poor weight gain, and irritability \u2014 breastfed but mother eating dairy",
    "diagnosis": "Cow's Milk Protein Allergy"
  },
  "problems": [
    {
      "problem": "Cow's milk protein allergy \u2014 non-IgE proctocolitis, breastfed",
      "icd": "K52.29",
      "onset": "2024",
      "status": "Active",
      "notes": "Amara Johnson, 6W \u2014 bloody mucoid stools x10 days. Exclusively breastfed. Otherwise thriving (weight 75th %ile)."
    },
    {
      "problem": "Rectal bleeding \u2014 eosinophilic proctocolitis from maternal dairy antigens",
      "icd": "K92.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Cow's milk protein antigens pass through breast milk \u2192 eosinophilic infiltration of infant rectum/colon \u2192 mucosal bleeding."
    },
    {
      "problem": "Thriving infant \u2014 CMPA proctocolitis does NOT cause weight loss",
      "icd": "K52.29",
      "onset": "2024",
      "status": "Active",
      "notes": "Key distinction: proctocolitis = bloody stool but well, growing infant. FPIES = vomiting, poor growth. Enteropathy = diarrhea, poor growth."
    }
  ],
  "medications": [
    {
      "name": "Maternal dairy elimination \u2014 all cow's milk products",
      "sig": "Strict elimination of all dairy (milk, cheese, yogurt, butter, casein, whey in ingredient lists). Improvement in 2-4 weeks.",
      "prescriber": "Allergy/Pediatrics",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Maternal calcium 1000mg + vitamin D 600 IU daily \u2014 supplementation",
      "sig": "Replace calcium lost from dairy elimination.",
      "prescriber": "Pediatrics/OB",
      "start": "2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Continue breastfeeding \u2014 preferred over formula switch",
      "sig": "Breastfeeding continues during maternal elimination \u2014 significant immunologic benefits. Only switch to amino acid formula if maternal elimination fails after 4 weeks strict adherence.",
      "prescriber": "Pediatrics",
      "start": "2024",
      "refills": 0,
      "status": "Active"
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
      "temp": "37.0\u00b0C",
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
      "cc": "6-month-old with bloody stools, poor weight gain, and irritability \u2014 breastfed but mother eating dairy",
      "hpi": "6-month-old EBF female brought for bloody stools and poor weight gain. Falling off growth curve \u2014 <5th percentile weight (was 25th at 2 months). Mother reports she \"eliminated dairy\" but on detailed dietary review: still eating cheese on sandwiches, yogurt daily, and butter in cooking. She equates her own lactose intolerance (enzyme deficiency, affects HER) with baby's cow milk protein allergy (immune-mediated, affects BABY through breast milk). These are completely different mechanisms. Baby needs either TRUE maternal dairy elimination (every source of cow milk protein) or switch to extensively hydrolyzed formula. Iron deficiency from chronic GI blood loss.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Infant CMPA Workup",
      "results": [
        {
          "test": "Stool occult blood",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Stool eosinophils",
          "value": "Present \u2014 abundant",
          "unit": "",
          "ref": "Absent",
          "flag": "H"
        },
        {
          "test": "Cow's milk IgE (infant)",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Total IgE (infant)",
          "value": "2",
          "unit": "IU/mL",
          "ref": "<10",
          "flag": ""
        },
        {
          "test": "Weight",
          "value": "75th percentile \u2014 well above average",
          "unit": "",
          "ref": "Following curve",
          "flag": ""
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
    "Mother: lactose intolerance (different mechanism \u2014 mother confuses this with baby's allergy)"
  ],
  "socialHistory": [
    [
      "Feeding",
      "Breastfed \u2014 mother has NOT eliminated dairy from own diet despite pediatrician's recommendation"
    ],
    [
      "Mother misconception",
      "Mother thinks her lactose intolerance = baby's milk allergy (different mechanisms)"
    ],
    [
      "WIC",
      "On WIC program \u2014 hypoallergenic formula expensive even with WIC"
    ],
    [
      "Growth",
      "Falling off growth curve \u2014 now <5th percentile weight"
    ],
    [
      "Social",
      "First-time mother, 19 years old, limited support system"
    ]
  ],
  "references": [
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
    "patientPersona": "Young, first-time mother appears anxious and overwhelmed, speaking rapidly about her concerns. She is forthcoming but defensive when questioned about dietary habits, insisting she 'eliminated dairy' while clearly misunderstanding the difference between her lactose intolerance and her baby's milk protein allergy.",
    "interviewQuestions": [
      "Can you describe exactly what you mean when you say the stools are bloody?",
      "When did you first notice blood in the stools and how has it changed?",
      "Tell me exactly what you've eliminated from your diet since the pediatrician's recommendation",
      "What does a typical day of eating look like for you while breastfeeding?",
      "How has Grace's weight gain been since birth - do you have her growth chart?",
      "Describe Grace's feeding patterns - frequency, duration, any fussiness during or after feeds?",
      "What makes Grace's irritability better or worse throughout the day?",
      "Has Grace had any vomiting, skin rashes, or breathing problems?",
      "Tell me about your own lactose intolerance - when did it start and what are your symptoms?",
      "Have you considered or tried any formula, and what concerns do you have about formula feeding?",
      "What support do you have at home for feeding and caring for Grace?",
      "Has anyone in your family had food allergies or similar problems as babies?",
      "What questions or concerns do you have about Grace's condition?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean... I just want to know why Grace isn't gaining weight and keeps having these awful diapers",
      "onset": "The bloody stools started about 6 weeks ago, maybe a little longer. At first I thought it was normal but then it got worse and she became so fussy",
      "character": "It's like streaks of bright red blood mixed with mucus in her stool, sometimes more blood than stool. The diapers are just terrible to change",
      "location": "Just in her diapers, the blood is mixed throughout the stool, not just on the outside",
      "severity": "It's really bad - maybe 7 out of 10. She cries constantly, arches her back during feeds, and I'm barely sleeping. She's not the happy baby she used to be",
      "aggravating": "She seems worse after I eat certain foods, maybe pizza or ice cream, but I thought I stopped dairy. The crying gets worse in the evenings",
      "relieving": "Nothing really helps. Sometimes holding her upright after feeding helps a little, but she's still so irritable most of the time",
      "associated": "She's really fussy and irritable, especially during and after breastfeeding. She arches her back and seems uncomfortable. No fever or vomiting though",
      "denies": "No fever, no vomiting, no rash that I've noticed. She doesn't seem to have trouble breathing",
      "history": "This is the first time anything like this has happened. She was fine for the first few months",
      "medications": "Maternal dairy elimination; Iron supplement",
      "allergies": "Cow milk protein",
      "family": "I have lactose intolerance - I get bloated and gassy when I drink milk. That's why I understand what Grace is going through",
      "social": "I'm 19, this is my first baby, and I don't have much help. We're on WIC but I heard the special formula is really expensive. I really want to keep breastfeeding if possible"
    },
    "examManeuvers": [
      "Growth parameters and plotting on growth chart",
      "General appearance and nutritional status",
      "Abdominal inspection and palpation",
      "Diaper examination for blood/mucus",
      "Skin examination for eczema or rashes",
      "Lymph node examination",
      "Cardiovascular examination",
      "Assessment of hydration status",
      "Perianal examination",
      "Overall developmental assessment"
    ],
    "examFindings": {
      "Growth parameters and plotting on growth chart": "Weight 6.2 kg (<5th percentile, dropped from 25th percentile at 2 months), length 65 cm (25th percentile), head circumference normal",
      "General appearance and nutritional status": "Alert but appears thin with decreased subcutaneous fat, mild irritability during exam",
      "Abdominal inspection and palpation": "Soft, non-distended, no masses or organomegaly, normal bowel sounds, no tenderness",
      "Diaper examination for blood/mucus": "Visible streaks of bright red blood with mucus in stool sample",
      "Skin examination for eczema or rashes": "No eczema or allergic rashes noted",
      "Lymph node examination": "No lymphadenopathy",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, normal capillary refill",
      "Assessment of hydration status": "Well-hydrated, normal mucous membranes and skin turgor",
      "Perianal examination": "No fissures, normal perianal skin",
      "Overall developmental assessment": "Meets developmental milestones for age, interactive and alert"
    },
    "ddxTargets": [
      "Cow's milk proctocolitis \u2014 breastfed, maternal dairy antigen, thriving infant (correct)",
      "Infectious colitis \u2014 stool cultures negative; dairy timing is key",
      "Necrotizing enterocolitis \u2014 preterm infant; this is term, exclusively breastfed",
      "Anal fissure \u2014 localized bright blood without systemic inflammation or eosinophils",
      "Intussusception \u2014 episodic pain, currant jelly; this is chronic mucoid blood",
      "Meckel's diverticulum \u2014 painless, significant blood loss; not mucoid"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on mother's self-reported 'dairy elimination' without thoroughly exploring what she actually eats daily",
      "prematureClosure": "Risk of accepting 'failure to thrive' as primary diagnosis without investigating the underlying CMPA causing both bloody stools and poor growth",
      "availabilityBias": "Risk of being influenced by mother's lactose intolerance history and assuming similar mechanism rather than recognizing different pathophysiology of infant CMPA"
    },
    "coachPrompts": {
      "phase2": "You've identified several possible causes for bloody stools in an infant. Before interviewing the patient, what specific questions would help you differentiate between infectious causes, anatomical problems, and food-related issues? What details about the maternal diet would be most important to explore?",
      "phase5": "Now that you have the history and physical findings, what stands out about the timeline of symptoms, the mother's dietary history, and the growth pattern? How does the mother's understanding of her own lactose intolerance potentially complicate this case? What would be your next steps?",
      "finalDebrief": "This case highlights how CMPA can present with both GI symptoms and failure to thrive in breastfed infants. Notice how the mother's confusion between lactose intolerance and milk protein allergy led to inadequate dietary elimination. What does this teach us about patient education and the importance of detailed dietary history? How would you counsel this family moving forward?",
      "final": "Diagnosis: cow's milk protein allergy proctocolitis \u2014 breastfed infant. Key learning: (1) CMPA proctocolitis presentation: healthy, thriving, exclusively breastfed infant with bloody or mucoid bloody stools \u2014 typically appears around 2-8 weeks of age. Weight gain normal. No vomiting. No irritability with feeds. This distinguishes proctocolitis from FPIES (vomiting, lethargy) and protein-losing enteropathy (poor weight gain, diarrhea). (2) Non-IgE-mediated mechanism: IgE testing (RAST, skin prick) is NEGATIVE \u2014 this is a T-cell/eosinophil-mediated reaction, not IgE. Do not use negative IgE testing to rule out CMPA proctocolitis. (3) Maternal elimination is first-line: strict dairy elimination by mother allows breastfeeding to continue. Improvement within 2-4 weeks. If no improvement after 4 weeks of strict elimination, also eliminate soy (10-15% of cow's milk CMPA also react to soy). (4) Resolution: most CMPA proctocolitis resolves by 12-18 months. Reintroduction under guidance at that time. (5) Formula-fed alternative: if maternal elimination fails or mother cannot eliminate dairy, switch to extensively hydrolyzed formula (Alimentum, Nutramigen) \u2014 ~90% tolerated. Amino acid formula (Neocate) for the ~10% who react to extensively hydrolyzed. Do NOT use soy formula in CMPA (cross-reactive in ~40% of non-IgE CMPA)."
    }
  },
  "meta": {
    "diagnosis": "Cow's Milk Protein Allergy \u2014 Non-IgE-Mediated Proctocolitis, Breastfed Infant, Maternal Elimination Diet",
    "caseId": "milk-allergy-infant-v2"
  }
};
