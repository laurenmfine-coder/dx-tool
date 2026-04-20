
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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "Public housing \u2014 roach and mold exposure"
      ],
      [
        "Environmental",
        "Heavy dust mite, cockroach, and mold exposure in apartment"
      ],
      [
        "Childcare",
        "Daycare \u2014 frequent skin infections from other children"
      ],
      [
        "Family stress",
        "Single mother, 2 jobs, difficulty maintaining complex skin regimen"
      ],
      [
        "Sleep",
        "Scratches through the night \u2014 mother sleeps next to him to hold his hands"
      ],
      [
        "Prior treatment",
        "Mother reports trying \"every cream\" \u2014 adherence inconsistent due to cost and complexity"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "4yo with eczema flare and fever \u2014 impetiginized eczema vs cellulitis",
        "diagnosis": "Severe Atopic Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe atopic dermatitis \u2014 SCORAD 65",
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
          "description": "Food allergies (egg, milk) \u2014 worsening eczema",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Environmental triggers \u2014 cockroach, dust mite, mold in housing",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Sleep disruption \u2014 scratching through night",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Caregiver burden \u2014 single mother, complex regimen adherence",
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
          "temp": "38.2\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "value": "MRSA \u2014 susceptible to TMP-SMX, doxycycline, clindamycin",
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
          "cc": "4yo with eczema flare and fever \u2014 impetiginized eczema vs cellulitis",
          "hpi": "4M brought by mother for worsening eczema with new fever. Exam shows diffuse excoriated eczematous plaques covering ~60% BSA with honey-crusted lesions on bilateral antecubital fossae and neck consistent with impetiginized eczema. Mother in tears \u2014 reports she tries to follow the cream regimen but works 2 jobs, can't afford all the prescriptions, and the child scratches off the creams at daycare. Lives in public housing with known cockroach and mold issues \u2014 has filed complaints but no remediation. Wound culture sent \u2014 grew MRSA. Switching to TMP-SMX.",
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
          "description": "MRSA wound infection \u2014 switching to TMP-SMX",
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
          "description": "Caregiver education needed \u2014 wet wrap therapy teaching",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Food allergy management needed \u2014 elimination diet not properly supervised",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Social determinants \u2014 housing, cost, single parent",
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
          "frequency": "BID \u2014 nursing teaching mother technique",
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
          "temp": "37.4\u00b0C",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "Admitted for IV antibiotics (MRSA impetiginized eczema), wet wrap therapy, and caregiver education",
          "hpi": "4M admitted for MRSA superinfected AD. Wet wrap therapy initiated \u2014 nursing spending time teaching mother the technique step by step. Mother very engaged when given hands-on instruction (learning style is kinesthetic, not written handouts). Social work: contacting housing authority re: mold remediation, connecting to prescription assistance programs for topicals, Dupixent manufacturer assistance for future biologic if needed. Nutritionist: supervised elimination diet plan (currently avoiding egg and milk but eating many cross-contaminated processed foods). Child life: distraction techniques during wrap changes.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 severe AD in 4yo, optimize management, address environmental and social barriers",
        "diagnosis": "Severe Atopic Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe AD \u2014 SCORAD 65, failed mid-potency topicals",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "MRSA colonization \u2014 decolonization protocol",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Food allergy component (egg, milk) \u2014 need supervised elimination/reintroduction",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Environmental \u2014 cockroach, dust mite, mold exposure",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Dupixent evaluation \u2014 meets criteria at age 6 (not yet eligible)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Simplified regimen needed \u2014 mother cannot maintain complex routine",
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
          "frequency": "BID to body (weekend only \u2014 proactive therapy)",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "A/I consult \u2014 severe AD in 4yo, optimize management, address environmental and social barriers",
          "hpi": "A/I consult: 4M with severe AD (SCORAD 65), MRSA-colonized, food allergies (egg, milk), massive environmental sensitization (dust mite, cockroach, mold \u2014 all present in his housing). KEY RECOMMENDATIONS: (1) Simplify regimen to 3 steps max \u2014 mother cannot manage 7+ products on 2 jobs, (2) Proactive weekend-only mid-potency steroid (maintains control without daily complexity), (3) Environmental: mattress encasings and roach bait stations (will provide through clinic \u2014 free to patient), (4) Food: supervised egg/milk reintroduction at age 5, (5) Dupixent at age 6 if still severe, (6) Follow-up every 6 weeks \u2014 short frequent visits better than long infrequent ones for this family.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "AD follow-up \u2014 6 weeks post-hospitalization, simplified regimen check, housing update",
        "diagnosis": "Severe Atopic Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe AD \u2014 improved on simplified regimen (SCORAD 65\u219240)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "MRSA \u2014 decolonized after bleach bath protocol",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Environmental \u2014 mattress encasings placed, roach bait stations deployed, housing authority inspection scheduled",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Egg/milk avoidance \u2014 continuing, planned reintroduction at age 5",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Caregiver \u2014 mother mastering wet wrap technique, using simplified 3-step approach",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "AD follow-up \u2014 6 weeks post-hospitalization, simplified regimen check, housing update",
          "hpi": "4M returns 6 weeks post-hospitalization. Dramatic improvement \u2014 SCORAD 65\u219240. Mother reports the simplified 3-step regimen is manageable even on work days. Bleach baths happening consistently. Mattress encasings and roach bait stations in place \u2014 mother reports fewer visible cockroaches. Housing authority inspection scheduled for next month. Child sleeping better \u2014 fewer nighttime scratching episodes. Mother sleeping in her own bed again. Plan: continue current regimen, follow up 6 weeks, anticipatory guidance for egg/milk reintroduction next year, Dupixent evaluation at age 6 if needed.",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Sarah Crawford",
      "phone": "(414) 555-7248",
      "relationship": "Parent"
    },
    "chiefComplaint": "4yo with eczema flare and fever \u2014 impetiginized eczema vs cellulitis",
    "diagnosis": "Severe Atopic Dermatitis"
  },
  "problems": [
    {
      "problem": "Severe atopic dermatitis \u2014 EASI score 34, inadequate topical control",
      "icd": "L20.9",
      "onset": "2018",
      "status": "Active",
      "notes": "Marcus Obi, 28M \u2014 widespread eczema, EASI 34 (severe \u226521). Failed TCS + tacrolimus + 2 cycles cyclosporine."
    },
    {
      "problem": "Itch-scratch cycle \u2014 sleep disruption, DLQI 18 (very large impact)",
      "icd": "L29.9",
      "onset": "2018",
      "status": "Active",
      "notes": "Waking 3-5 nights/week. Missing work. DLQI >10 = very large impact on quality of life."
    },
    {
      "problem": "Colonization \u2014 Staphylococcus aureus skin barrier breach",
      "icd": "L08.89",
      "onset": "2024",
      "status": "Active",
      "notes": "S. aureus colonization worsens AD flares via superantigen and IL-4/13 pathway amplification."
    }
  ],
  "medications": [
    {
      "name": "Dupilumab 600mg SQ loading dose, then 300mg q2weeks",
      "sig": "IL-4R\u03b1 blocker \u2014 inhibits IL-4 and IL-13 signaling. Self-inject. Store in refrigerator. Do not shake.",
      "prescriber": "Dermatology/Allergy",
      "start": "2024",
      "refills": 5,
      "status": "Active \u2014 new biologic"
    },
    {
      "name": "Triamcinolone 0.1% ointment \u2014 flares only, face-sparing",
      "sig": "Medium-potency TCS for trunk and extremities during flares. Do not use on face or groin \u2014 skin atrophy risk.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 PRN flares"
    },
    {
      "name": "Tacrolimus 0.1% ointment \u2014 face and skin folds",
      "sig": "Calcineurin inhibitor \u2014 safe for face, neck, groin (no atrophy risk). Apply BID to face/fold areas.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Bleach baths \u2014 dilute sodium hypochlorite 0.005%",
      "sig": "1/2 tsp bleach per gallon of water, soak 5-10 min 2-3x/week. Reduces S. aureus colonization.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 hygiene protocol"
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
      "temp": "38.2\u00b0C",
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
      "cc": "4yo with eczema flare and fever \u2014 impetiginized eczema vs cellulitis",
      "hpi": "4M brought by mother for worsening eczema with new fever. Exam shows diffuse excoriated eczematous plaques covering ~60% BSA with honey-crusted lesions on bilateral antecubital fossae and neck consistent with impetiginized eczema. Mother in tears \u2014 reports she tries to follow the cream regimen but works 2 jobs, can't afford all the prescriptions, and the child scratches off the creams at daycare. Lives in public housing with known cockroach and mold issues \u2014 has filed complaints but no remediation. Wound culture sent \u2014 grew MRSA. Switching to TMP-SMX.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Dupilumab Pre-Treatment Panel",
      "results": [
        {
          "test": "Total IgE",
          "value": "3200",
          "unit": "IU/mL",
          "ref": "<150",
          "flag": "H"
        },
        {
          "test": "Eosinophil count",
          "value": "1.2",
          "unit": "K/\u03bcL",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "Serum TARC (thymus activation-regulated chemokine)",
          "value": "3800",
          "unit": "pg/mL",
          "ref": "<450",
          "flag": "H"
        },
        {
          "test": "CBC",
          "value": "Normal except eosinophilia",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "Hepatitis B/C screening",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
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
    "Mother: asthma, eczema",
    "Father: allergic rhinitis",
    "Sister (7): peanut allergy"
  ],
  "socialHistory": [
    [
      "Living",
      "Public housing \u2014 roach and mold exposure"
    ],
    [
      "Environmental",
      "Heavy dust mite, cockroach, and mold exposure in apartment"
    ],
    [
      "Childcare",
      "Daycare \u2014 frequent skin infections from other children"
    ],
    [
      "Family stress",
      "Single mother, 2 jobs, difficulty maintaining complex skin regimen"
    ],
    [
      "Sleep",
      "Scratches through the night \u2014 mother sleeps next to him to hold his hands"
    ],
    [
      "Prior treatment",
      "Mother reports trying \"every cream\" \u2014 adherence inconsistent due to cost and complexity"
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
  "guided": {
    "supported": true,
    "patientPersona": "Elijah is irritable, uncomfortable, and frequently scratching at his skin lesions. His mother appears exhausted and stressed, speaking for him most of the time while trying to keep his hands away from the infected areas. Both seem distressed by the worsening condition and new fever.",
    "interviewQuestions": [
      "When did you first notice the fever?",
      "How has the skin rash changed over the past few days?",
      "Are the honey-crusted areas new or getting worse?",
      "Has he been more irritable or having trouble sleeping?",
      "What treatments have you been using at home?",
      "Has he been around other sick children at daycare?",
      "Are you able to keep up with his skin care routine?",
      "Has he been eating and drinking normally?",
      "Any new exposures at home or daycare?",
      "How bad is his scratching - is he breaking the skin?",
      "Have you noticed any red streaking from the infected areas?",
      "Is the fever responding to any medications?",
      "How long have the crusty, weeping areas been present?"
    ],
    "patientResponses": {
      "default": "His skin is just so itchy and now he feels hot. I don't know what else to tell you.",
      "onset": "The fever started yesterday morning, but his skin has been getting worse for about a week. The crusty, weepy spots started 3-4 days ago.",
      "character": "His usual red, dry patches turned into these wet, honey-colored crusty areas that keep spreading. The fever is continuous.",
      "location": "The worst crusty areas are in his elbow creases and around his neck, but the regular eczema covers most of his body.",
      "severity": "His itching is a 10 out of 10 - he can't stop scratching. The fever makes him feel miserable, maybe 7 out of 10 for how sick he seems.",
      "aggravating": "The scratching makes everything worse. The heat in our apartment, him being around other kids at daycare, and when I can't do his skin routine properly.",
      "relieving": "The antibiotic cream helps a little on the crusty spots. Cool baths used to help but not anymore. Nothing really stops the itching.",
      "associated": "He's been more cranky, not sleeping well, and his appetite is down since the fever started. No vomiting or diarrhea.",
      "denies": "No trouble breathing, no spreading red lines from the sores, no swollen glands that I can feel, no other kids in daycare are sick right now.",
      "history": "He's had eczema since he was a baby, and this is the third time it's gotten infected like this. Usually happens when he scratches too much or is exposed to his food allergies.",
      "medications": "Cephalexin; Mupirocin 2%; Hydrocortisone 2.5%; Cetirizine",
      "allergies": "Egg, Milk",
      "family": "I have asthma and eczema too, his father has bad allergies, and his sister has a peanut allergy. Allergies run in both sides of the family.",
      "social": "I work two jobs so it's hard to keep up with his skin routine. We live in public housing with roach and mold problems. He goes to daycare where kids share everything."
    },
    "examManeuvers": [
      "General appearance and vital signs",
      "Skin examination of affected areas",
      "Assessment of body surface area involvement",
      "Examination of honey-crusted lesions",
      "Palpation for lymphadenopathy",
      "Assessment for cellulitis signs",
      "Examination of unaffected skin",
      "Evaluation of excoriation severity",
      "Assessment for signs of systemic infection"
    ],
    "examFindings": {
      "General appearance and vital signs": "Ill-appearing, irritable child, frequently scratching. HR 128, Temp 38.2\u00b0C, appears uncomfortable but not toxic.",
      "Skin examination of affected areas": "Diffuse excoriated eczematous plaques with lichenification, erythema, and scaling covering approximately 60% body surface area.",
      "Assessment of body surface area involvement": "Extensive involvement of bilateral antecubital and popliteal fossae, neck, wrists, and scattered patches on trunk and extremities.",
      "Examination of honey-crusted lesions": "Thick honey-colored crusted lesions with surrounding erythema and purulent discharge, most prominent in antecubital fossae and neck.",
      "Palpation for lymphadenopathy": "Bilateral anterior cervical lymphadenopathy, nodes approximately 1.5cm, mobile and tender.",
      "Assessment for cellulitis signs": "Localized warmth and tenderness around crusted areas, no obvious spreading erythema or red streaking.",
      "Examination of unaffected skin": "Areas of normal skin show mild xerosis, no active lesions in typically spared areas like central face.",
      "Evaluation of excoriation severity": "Multiple linear excoriations with some bleeding, evidence of chronic scratching with post-inflammatory hyperpigmentation.",
      "Assessment for signs of systemic infection": "Fever present, mild irritability, no signs of sepsis or toxic appearance, mucous membranes moist."
    },
    "ddxTargets": [
      "Severe AD \u2014 dupilumab initiation (correct)",
      "Contact dermatitis \u2014 patch testing negative; distribution and chronicity support AD",
      "Psoriasis \u2014 silver scale, nail pitting, Auspitz sign; not eczematous morphology",
      "Cutaneous T-cell lymphoma \u2014 older adults, patch/plaque morphology, biopsy distinguishes",
      "Scabies \u2014 burrows in web spaces, new pruritus, close contacts affected",
      "Seborrheic dermatitis \u2014 scalp/face predominance, greasy scale, not widespread"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'eczema flare' and missing the significant bacterial superinfection requiring systemic antibiotic therapy",
      "prematureClosure": "May stop at eczema diagnosis without fully evaluating the impetiginization and need for culture-directed antibiotic therapy",
      "availabilityBias": "Recent cases of simple eczema flares may lead to underestimating the severity of bacterial superinfection"
    },
    "coachPrompts": {
      "phase2": "You're considering both impetiginized eczema and cellulitis. What specific historical features and physical exam findings would help you differentiate between a localized bacterial superinfection versus spreading cellulitis? What are the implications for treatment?",
      "phase5": "Now that you've identified the honey-crusted lesions and fever in the context of chronic eczema, how does this change your management approach? What are the key factors contributing to recurrent bacterial superinfection in this patient?",
      "finalDebrief": "This case illustrates impetiginized eczema in a high-risk patient with multiple predisposing factors. How did the honey-crusted lesions, fever, and social history guide your diagnosis? What comprehensive management strategies address both the acute infection and underlying risk factors for recurrence?",
      "final": "Diagnosis: severe AD \u2014 dupilumab initiation. Key learning: (1) AD severity scoring: mild = EASI <7, moderate = 7-21, severe = >21. DLQI >10 = very large quality of life impact. Both scores are used for biologic eligibility (FDA: moderate-severe AD failing TCS). (2) Dupilumab mechanism: monoclonal antibody blocking IL-4R\u03b1 \u2014 the shared receptor for IL-4 and IL-13. Both cytokines drive TH2 inflammation, IgE production, and barrier dysfunction in AD. IL-13 directly impairs filaggrin expression. (3) Biologic eligibility criteria: moderate-severe AD (EASI \u226516 or IGA 3-4) + inadequate response to topical therapies \u00b1 systemic agents. Dupilumab is approved for age \u22656 months. Also approved: tralokinumab (IL-13 only), lebrikizumab (IL-13 only), abrocitinib/upadacitinib (JAK inhibitors \u2014 oral, more efficacious, more risks). (4) S. aureus and AD: >90% of AD skin colonized with S. aureus \u2014 not an infection but amplifies inflammation via superantigens and IL-4/13 induction. Bleach baths reduce colonization without antibiotic resistance risk. Treat clinically infected skin (honey crusting, fever) with antibiotics; routine antibiotics for colonization alone are not indicated. (5) Dupilumab side effects: conjunctivitis (most common, ~10-20%), injection site reactions, facial/neck erythema in some patients."
    }
  },
  "meta": {
    "diagnosis": "Severe Atopic Dermatitis \u2014 Inadequate Topical Control, Dupilumab Initiation, Biologic Eligibility Criteria",
    "caseId": "atopic-dermatitis-severe-v2"
  }
};
