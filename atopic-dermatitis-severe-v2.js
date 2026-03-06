/* emr-data/atopic-dermatitis-severe-v2.js — Multi-Setting Allergy Case Variation: Severe Atopic Dermatitis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Elijah Crawford",
  "patientHPI": "My son's skin has been really bad lately and now he has a fever too. His usual red, itchy patches are much worse and some spots are oozing this yellowish stuff, especially in his elbow creases and around his neck. I've been trying so hard to keep up with all his creams but nothing seems to be helping anymore.",
      "dob": "07/06/2022",
      "age": "4",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-534240",
      "language": "English",
      "race": "Multiracial",
      "phone": "(614) 555-5949",
      "email": "elijah.crawford@email.com",
      "address": "9470 Peachtree Rd, Richmond, VA 23219",
      "insurance": "Medicaid",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Sarah Crawford",
        "phone": "(412) 555-7302",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Egg",
        "reaction": "Eczema flare",
        "severity": "Moderate",
        "type": "Food"
      },
      {
        "allergen": "Milk",
        "reaction": "Eczema flare",
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
      "Mother: asthma, eczema",
      "Father: allergic rhinitis",
      "Sister (7): peanut allergy"
    ],
    "socialHistory": [
      [
        "Living",
        "Public housing — roach and mold exposure"
      ],
      [
        "Environmental",
        "Heavy dust mite, cockroach, and mold exposure in apartment"
      ],
      [
        "Childcare",
        "Daycare — frequent skin infections from other children"
      ],
      [
        "Family stress",
        "Single mother, 2 jobs, difficulty maintaining complex skin regimen"
      ],
      [
        "Sleep",
        "Scratches through the night — mother sleeps next to him to hold his hands"
      ],
      [
        "Prior treatment",
        "Mother reports trying \"every cream\" — adherence inconsistent due to cost and complexity"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "4yo with eczema flare and fever — impetiginized eczema vs cellulitis",
        "diagnosis": "Severe Atopic Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe atopic dermatitis — SCORAD 65",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Secondary bacterial infection (impetiginized eczema)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Food allergies (egg, milk) — worsening eczema",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Environmental triggers — cockroach, dust mite, mold in housing",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Sleep disruption — scratching through night",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Caregiver burden — single mother, complex regimen adherence",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cephalexin",
          "dose": "25mg/kg/day",
          "route": "PO",
          "frequency": "QID x10 days",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Mupirocin 2%",
          "dose": "",
          "route": "Topical",
          "frequency": "To impetiginized areas TID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Hydrocortisone 2.5%",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to body (has been using on face too)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Cetirizine",
          "dose": "2.5mg",
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
          "temp": "38.2°C",
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
          "accession": "LAB-634933",
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
                  "value": "14.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.6",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
                  "value": "12",
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
              "name": "ALLERGY/IMMUNE",
              "results": [
                {
                  "test": "Total IgE",
                  "value": "1240",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Wound culture",
                  "value": "MRSA — susceptible to TMP-SMX, doxycycline, clindamycin",
                  "unit": "",
                  "range": "",
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
          "cc": "4yo with eczema flare and fever — impetiginized eczema vs cellulitis",
          "hpi": "4M brought by mother for worsening eczema with new fever. Exam shows diffuse excoriated eczematous plaques covering ~60% BSA with honey-crusted lesions on bilateral antecubital fossae and neck consistent with impetiginized eczema. Mother in tears — reports she tries to follow the cream regimen but works 2 jobs, can't afford all the prescriptions, and the child scratches off the creams at daycare. Lives in public housing with known cockroach and mold issues — has filed complaints but no remediation. Wound culture sent — grew MRSA. Switching to TMP-SMX.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for IV antibiotics (MRSA impetiginized eczema), wet wrap therapy, and caregiver education",
        "diagnosis": "Severe Atopic Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe AD with MRSA superinfection",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "MRSA wound infection — switching to TMP-SMX",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Environmental triggers unaddressed (housing)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Caregiver education needed — wet wrap therapy teaching",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Food allergy management needed — elimination diet not properly supervised",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Social determinants — housing, cost, single parent",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "TMP-SMX",
          "dose": "8mg/kg/day TMP",
          "route": "PO",
          "frequency": "BID x10 days",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Triamcinolone 0.1%",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to body (under wet wraps)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Hydrocortisone 2.5%",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to face/skin folds only",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Wet wrap therapy",
          "dose": "",
          "route": "Topical",
          "frequency": "BID — nursing teaching mother technique",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-5",
          "name": "Cetirizine",
          "dose": "2.5mg",
          "route": "PO",
          "frequency": "BID (uptitrated)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-6",
          "name": "Bleach bath protocol",
          "dose": "1/4 cup per half tub",
          "route": "Topical",
          "frequency": "2x/week (MRSA decolonization)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "112",
          "rr": "24",
          "temp": "37.4°C",
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
          "accession": "LAB-943025",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "Admitted for IV antibiotics (MRSA impetiginized eczema), wet wrap therapy, and caregiver education",
          "hpi": "4M admitted for MRSA superinfected AD. Wet wrap therapy initiated — nursing spending time teaching mother the technique step by step. Mother very engaged when given hands-on instruction (learning style is kinesthetic, not written handouts). Social work: contacting housing authority re: mold remediation, connecting to prescription assistance programs for topicals, Dupixent manufacturer assistance for future biologic if needed. Nutritionist: supervised elimination diet plan (currently avoiding egg and milk but eating many cross-contaminated processed foods). Child life: distraction techniques during wrap changes.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — severe AD in 4yo, optimize management, address environmental and social barriers",
        "diagnosis": "Severe Atopic Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe AD — SCORAD 65, failed mid-potency topicals",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "MRSA colonization — decolonization protocol",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Food allergy component (egg, milk) — need supervised elimination/reintroduction",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Environmental — cockroach, dust mite, mold exposure",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Dupixent evaluation — meets criteria at age 6 (not yet eligible)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Simplified regimen needed — mother cannot maintain complex routine",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Triamcinolone 0.1%",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to body (weekend only — proactive therapy)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Hydrocortisone 2.5%",
          "dose": "",
          "route": "Topical",
          "frequency": "BID face/folds",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Vanicream",
          "dose": "",
          "route": "Topical",
          "frequency": "After every bath and PRN (liberal use)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Cetirizine",
          "dose": "2.5mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-5",
          "name": "Bleach bath",
          "dose": "1/4 cup per half tub",
          "route": "Topical",
          "frequency": "2x/week",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "108",
          "rr": "22",
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
          "accession": "LAB-149982",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
                  "value": "10",
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
              "name": "ALLERGY TESTING",
              "results": [
                {
                  "test": "Egg sIgE",
                  "value": "12",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Milk sIgE",
                  "value": "8",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Dust mite sIgE",
                  "value": "32",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Cockroach sIgE",
                  "value": "18",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Alternaria (mold) sIgE",
                  "value": "6",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Peanut sIgE",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "cc": "A/I consult — severe AD in 4yo, optimize management, address environmental and social barriers",
          "hpi": "A/I consult: 4M with severe AD (SCORAD 65), MRSA-colonized, food allergies (egg, milk), massive environmental sensitization (dust mite, cockroach, mold — all present in his housing). KEY RECOMMENDATIONS: (1) Simplify regimen to 3 steps max — mother cannot manage 7+ products on 2 jobs, (2) Proactive weekend-only mid-potency steroid (maintains control without daily complexity), (3) Environmental: mattress encasings and roach bait stations (will provide through clinic — free to patient), (4) Food: supervised egg/milk reintroduction at age 5, (5) Dupixent at age 6 if still severe, (6) Follow-up every 6 weeks — short frequent visits better than long infrequent ones for this family.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "AD follow-up — 6 weeks post-hospitalization, simplified regimen check, housing update",
        "diagnosis": "Severe Atopic Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe AD — improved on simplified regimen (SCORAD 65→40)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "MRSA — decolonized after bleach bath protocol",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Environmental — mattress encasings placed, roach bait stations deployed, housing authority inspection scheduled",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Egg/milk avoidance — continuing, planned reintroduction at age 5",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Caregiver — mother mastering wet wrap technique, using simplified 3-step approach",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Triamcinolone 0.1%",
          "dose": "",
          "route": "Topical",
          "frequency": "Weekends only (body)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Hydrocortisone 2.5%",
          "dose": "",
          "route": "Topical",
          "frequency": "BID face/folds",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Vanicream",
          "dose": "",
          "route": "Topical",
          "frequency": "After bath + PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Cetirizine",
          "dose": "2.5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-5",
          "name": "Bleach bath",
          "dose": "1/4 cup per half tub",
          "route": "Topical",
          "frequency": "2x/week",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "104",
          "rr": "20",
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
          "accession": "LAB-657775",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "AD follow-up — 6 weeks post-hospitalization, simplified regimen check, housing update",
          "hpi": "4M returns 6 weeks post-hospitalization. Dramatic improvement — SCORAD 65→40. Mother reports the simplified 3-step regimen is manageable even on work days. Bleach baths happening consistently. Mattress encasings and roach bait stations in place — mother reports fewer visible cockroaches. Housing authority inspection scheduled for next month. Child sleeping better — fewer nighttime scratching episodes. Mother sleeping in her own bed again. Plan: continue current regimen, follow up 6 weeks, anticipatory guidance for egg/milk reintroduction next year, Dupixent evaluation at age 6 if needed.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Elijah Crawford",
    "dob": "07/06/2022",
    "age": "4",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-534240",
    "language": "English",
    "race": "Multiracial",
    "phone": "(615) 555-2747",
    "email": "elijah.crawford@email.com",
    "address": "6584 Elm St, Albuquerque, NM 87108",
    "insurance": "Medicaid",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Sarah Crawford",
      "phone": "(414) 555-7248",
      "relationship": "Parent"
    },
    "chiefComplaint": "4yo with eczema flare and fever — impetiginized eczema vs cellulitis",
    "diagnosis": "Severe Atopic Dermatitis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Severe atopic dermatitis — SCORAD 65",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Secondary bacterial infection (impetiginized eczema)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Food allergies (egg, milk) — worsening eczema",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Environmental triggers — cockroach, dust mite, mold in housing",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Sleep disruption — scratching through night",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-6",
      "description": "Caregiver burden — single mother, complex regimen adherence",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Cephalexin",
      "dose": "25mg/kg/day",
      "route": "PO",
      "frequency": "QID x10 days",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Mupirocin 2%",
      "dose": "",
      "route": "Topical",
      "frequency": "To impetiginized areas TID",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Hydrocortisone 2.5%",
      "dose": "",
      "route": "Topical",
      "frequency": "BID to body (has been using on face too)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "Cetirizine",
      "dose": "2.5mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Egg",
      "reaction": "Eczema flare",
      "severity": "Moderate",
      "type": "Food"
    },
    {
      "allergen": "Milk",
      "reaction": "Eczema flare",
      "severity": "Moderate",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "N/A",
      "hr": "128",
      "rr": "28",
      "temp": "38.2°C",
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
      "cc": "4yo with eczema flare and fever — impetiginized eczema vs cellulitis",
      "hpi": "4M brought by mother for worsening eczema with new fever. Exam shows diffuse excoriated eczematous plaques covering ~60% BSA with honey-crusted lesions on bilateral antecubital fossae and neck consistent with impetiginized eczema. Mother in tears — reports she tries to follow the cream regimen but works 2 jobs, can't afford all the prescriptions, and the child scratches off the creams at daycare. Lives in public housing with known cockroach and mold issues — has filed complaints but no remediation. Wound culture sent — grew MRSA. Switching to TMP-SMX.",
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
      "accession": "LAB-634933",
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
              "value": "14.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "40.8",
              "unit": "%",
              "range": "36-46",
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
              "value": "12",
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
          "name": "ALLERGY/IMMUNE",
          "results": [
            {
              "test": "Total IgE",
              "value": "1240",
              "unit": "IU/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Wound culture",
              "value": "MRSA — susceptible to TMP-SMX, doxycycline, clindamycin",
              "unit": "",
              "range": "",
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
    "Mother: asthma, eczema",
    "Father: allergic rhinitis",
    "Sister (7): peanut allergy"
  ],
  "socialHistory": [
    [
      "Living",
      "Public housing — roach and mold exposure"
    ],
    [
      "Environmental",
      "Heavy dust mite, cockroach, and mold exposure in apartment"
    ],
    [
      "Childcare",
      "Daycare — frequent skin infections from other children"
    ],
    [
      "Family stress",
      "Single mother, 2 jobs, difficulty maintaining complex skin regimen"
    ],
    [
      "Sleep",
      "Scratches through the night — mother sleeps next to him to hold his hands"
    ],
    [
      "Prior treatment",
      "Mother reports trying \"every cream\" — adherence inconsistent due to cost and complexity"
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
]};
