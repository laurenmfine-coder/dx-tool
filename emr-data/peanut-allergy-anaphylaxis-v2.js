
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Oliver Thompson",
      "patientHPI": "My son was playing at his friend's house and ate some crackers with peanut butter, and within minutes his face started breaking out in red bumps around his mouth. He threw up twice and became really fussy and upset, so the other parent gave him some children's Benadryl before we rushed him here.",
      "dob": "08/08/2023",
      "age": "3",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-809710",
      "language": "English",
      "race": "White",
      "phone": "(414) 555-2654",
      "email": "oliver.thompson@email.com",
      "address": "5920 Mulberry St, Memphis, TN 38118",
      "insurance": "BlueCross BlueShield PPO",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
      "emergencyContact": {
        "name": "Sarah Thompson",
        "phone": "(505) 555-5554",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Peanut",
        "reaction": "First known reaction today",
        "severity": "Unknown",
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
      "Father: seasonal allergies",
      "Mother: eczema (resolved)",
      "No known food allergies in family"
    ],
    "socialHistory": [
      [
        "Living",
        "Suburban home, both parents present"
      ],
      [
        "Diet",
        "Previously eating peanut butter without issue \u2014 parents unsure if today's reaction is truly peanut"
      ],
      [
        "Daycare",
        "Home with nanny"
      ],
      [
        "Eczema history",
        "Mild eczema as infant \u2014 resolved by age 2"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "3yo with first-ever allergic reaction \u2014 vomiting, hives, and fussiness after eating peanut butter crackers at friend's house",
        "diagnosis": "Peanut Allergy Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acute allergic reaction \u2014 possible peanut, first episode",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "History of infantile eczema (resolved)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Diagnostic uncertainty \u2014 was it peanut or another ingredient?",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Diphenhydramine",
          "dose": "6.25mg",
          "route": "PO",
          "frequency": "Given by friend's parent",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Epinephrine",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "Given in ED for progressive symptoms",
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
          "rr": "30",
          "temp": "37.0\u00b0C",
          "spo2": "95%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-152356",
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
                  "value": "4",
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
              "name": "ALLERGY STUDIES",
              "results": [
                {
                  "test": "Tryptase (acute)",
                  "value": "18",
                  "unit": "ng/mL",
                  "range": "<11.5",
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
          "cc": "3yo with first-ever allergic reaction \u2014 vomiting, hives, and fussiness after eating peanut butter crackers at friend's house",
          "hpi": "3M brought to ED by parents after first allergic reaction at friend's house. Ate peanut butter crackers (brand unknown \u2014 could contain other allergens). Within 15 min: perioral hives, vomiting x2, increasing fussiness. Friend's parent gave liquid Benadryl. In ED, developed diffuse urticaria and mild wheeze \u2014 epinephrine 0.15mg IM given with good response. Parents very anxious \u2014 report he has eaten peanut butter at home \"many times\" without issue. Question: was this truly peanut? Could the crackers have contained a hidden allergen (sesame, tree nut)? Need comprehensive workup to determine actual trigger.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Observation after first food allergy reaction in 3yo",
        "diagnosis": "Peanut Allergy Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acute allergic reaction \u2014 under investigation",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Atopic march risk (prior eczema)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prednisolone",
          "dose": "1mg/kg",
          "route": "PO",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
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
          "hr": "118",
          "rr": "24",
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
          "accession": "LAB-695435",
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
          "cc": "Observation after first food allergy reaction in 3yo",
          "hpi": "3M admitted for 12-hour observation after first allergic reaction. Symptoms fully resolved. Parents anxious \u2014 providing support and counseling. Avoiding all tree nuts and peanut until formal testing. A/I consult placed.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 first allergic reaction in 3yo, unclear trigger, need comprehensive food allergy workup",
        "diagnosis": "Peanut Allergy Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acute allergic reaction \u2014 trigger unclear (peanut? tree nut? sesame?)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "History of infantile eczema \u2014 atopic march risk",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Parents report prior peanut tolerance \u2014 new sensitization possible",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Need comprehensive panel to identify actual trigger",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "EpiPen Jr",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "PRN x2 (precautionary until testing)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "2.5mg",
          "route": "PO",
          "frequency": "Daily PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "110",
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
          "accession": "LAB-345969",
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
                  "value": "5",
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
              "name": "COMPREHENSIVE FOOD ALLERGY PANEL",
              "results": [
                {
                  "test": "Peanut sIgE",
                  "value": "0.8",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Ara h 2",
                  "value": "0.4",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Cashew sIgE",
                  "value": "12",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Ana o 3 (cashew component)",
                  "value": "8",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Walnut sIgE",
                  "value": "0.6",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Pistachio sIgE",
                  "value": "10",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Sesame sIgE",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": ""
                },
                {
                  "test": "Milk sIgE",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": ""
                },
                {
                  "test": "Egg sIgE",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": ""
                },
                {
                  "test": "Total IgE",
                  "value": "180",
                  "unit": "IU/mL",
                  "range": "<100",
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
          "cc": "A/I consult \u2014 first allergic reaction in 3yo, unclear trigger, need comprehensive food allergy workup",
          "hpi": "A/I consult: 3M with first allergic reaction after eating peanut butter crackers. SURPRISE FINDING: peanut sIgE is only borderline positive (0.8, Ara h 2 low), but CASHEW sIgE is strongly positive (12, Ana o 3 component positive). Pistachio also positive (cross-reactive with cashew). Parents contacted friend \u2014 the crackers were a trail mix variety containing cashews. This is a CASHEW allergy, not peanut. This is exactly why component testing matters and why we don't just test for the assumed allergen. Plan: strict cashew and pistachio avoidance, peanut likely safe (will confirm with supervised oral food challenge), sesame/milk/egg negative.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up \u2014 peanut oral food challenge (expected to pass), cashew allergy management plan",
        "diagnosis": "Peanut Allergy Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Cashew allergy \u2014 confirmed (true trigger of initial reaction)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Pistachio allergy \u2014 cross-reactive with cashew",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Peanut \u2014 passed oral food challenge (NOT allergic, as expected)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Walnut \u2014 borderline, may challenge later",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Parents educated on correct diagnosis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "EpiPen Jr",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "PRN x2 (for cashew/pistachio)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "2.5mg",
          "route": "PO",
          "frequency": "PRN",
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
          "accession": "LAB-659506",
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
          "cc": "Follow-up \u2014 peanut oral food challenge (expected to pass), cashew allergy management plan",
          "hpi": "3M returns for supervised peanut oral food challenge. Passed \u2014 ate 4g peanut butter without reaction over 2 hours. Parents very relieved \u2014 \"we were about to throw out everything with peanut in the house.\" TRUE allergy is cashew/pistachio (not peanut as initially assumed). Action plan created for daycare, EpiPens prescribed. Important teaching moment: the presenting food is not always the culprit \u2014 comprehensive testing prevented an unnecessary lifelong peanut restriction.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Oliver Thompson",
    "dob": "08/08/2023",
    "age": "3",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-809710",
    "language": "English",
    "race": "White",
    "phone": "(614) 555-6977",
    "email": "oliver.thompson@email.com",
    "address": "2903 Dogwood Ln, Columbus, OH 43211",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
    "emergencyContact": {
      "name": "Sarah Thompson",
      "phone": "(404) 555-7065",
      "relationship": "Parent"
    },
    "chiefComplaint": "3yo with first-ever allergic reaction \u2014 vomiting, hives, and fussiness after eating peanut butter crackers at friend's house",
    "diagnosis": "Peanut Allergy Anaphylaxis"
  },
  "problems": [
    {
      "problem": "Peanut anaphylaxis \u2014 hidden peanut ingestion, restaurant exposure",
      "icd": "T78.2XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Ashley Kim, 19F \u2014 known peanut allergy. Thai restaurant \u2014 pad Thai 'without peanuts.' Urticaria + angioedema + wheeze 20 min after eating."
    },
    {
      "problem": "EpiPen not used before ED arrival \u2014 delay in epinephrine",
      "icd": "T78.2XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Patient used diphenhydramine first. Key education gap: epinephrine is FIRST-line, not after antihistamines."
    },
    {
      "problem": "Biphasic anaphylaxis risk \u2014 observation required 4-6 hours",
      "icd": "T78.2XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "After epinephrine given in ED \u2014 observe 4-6 hours for biphasic reaction. Discharge with written action plan."
    }
  ],
  "medications": [
    {
      "name": "Epinephrine 0.3mg IM \u2014 given in ED (delayed, should have been used at onset)",
      "sig": "First-line. Should have been used at first systemic symptom at restaurant. Not after antihistamines fail.",
      "prescriber": "ED",
      "start": "2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Diphenhydramine 25mg IV \u2014 adjunct after epinephrine",
      "sig": "Antihistamine is adjunct \u2014 treats itch and urticaria. Does NOT prevent or reverse anaphylaxis. Should NOT be used instead of epinephrine.",
      "prescriber": "ED",
      "start": "2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "EpiPen 0.3mg x2 \u2014 reinforce prescription and education",
      "sig": "Use at FIRST sign of systemic reaction \u2014 don't wait to 'see if it gets worse.' Use, then call 911, then use second dose if needed at 5-10 min.",
      "prescriber": "ED/Allergy",
      "start": "2024",
      "refills": 1,
      "status": "Active \u2014 reinforce education"
    },
    {
      "name": "Oral prednisone 40mg x3 days \u2014 prevention of biphasic reaction",
      "sig": "Steroid course \u2014 evidence for preventing biphasic reaction is limited but commonly used.",
      "prescriber": "ED",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 discharge"
    }
  ],
  "allergies": [
    {
      "allergen": "Peanut",
      "reaction": "First known reaction today",
      "severity": "Unknown",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "N/A",
      "hr": "148",
      "rr": "30",
      "temp": "37.0\u00b0C",
      "spo2": "95%",
      "pain": "N/A/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "3yo with first-ever allergic reaction \u2014 vomiting, hives, and fussiness after eating peanut butter crackers at friend's house",
      "hpi": "3M brought to ED by parents after first allergic reaction at friend's house. Ate peanut butter crackers (brand unknown \u2014 could contain other allergens). Within 15 min: perioral hives, vomiting x2, increasing fussiness. Friend's parent gave liquid Benadryl. In ED, developed diffuse urticaria and mild wheeze \u2014 epinephrine 0.15mg IM given with good response. Parents very anxious \u2014 report he has eaten peanut butter at home \"many times\" without issue. Question: was this truly peanut? Could the crackers have contained a hidden allergen (sesame, tree nut)? Need comprehensive workup to determine actual trigger.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Anaphylaxis Assessment",
      "results": [
        {
          "test": "Tryptase (drawn 1h post-reaction)",
          "value": "24.6",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": "H"
        },
        {
          "test": "Tryptase baseline (24h post)",
          "value": "4.2",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": ""
        },
        {
          "test": "Peanut IgE",
          "value": "24.8",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Ara h 2 IgE",
          "value": "16.4",
          "unit": "kU/L",
          "ref": "<0.35",
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
    "Father: seasonal allergies",
    "Mother: eczema (resolved)",
    "No known food allergies in family"
  ],
  "socialHistory": [
    [
      "Living",
      "Suburban home, both parents present"
    ],
    [
      "Diet",
      "Previously eating peanut butter without issue \u2014 parents unsure if today's reaction is truly peanut"
    ],
    [
      "Daycare",
      "Home with nanny"
    ],
    [
      "Eczema history",
      "Mild eczema as infant \u2014 resolved by age 2"
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
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Oliver is crying intermittently and clinging to his mother, clearly uncomfortable with lingering hives and nausea. His parents are anxious but cooperative, providing detailed information about the reaction timeline and expressing concern about whether this was truly a peanut allergy since he's eaten peanut butter before without problems.",
    "interviewQuestions": [
      "Can you tell me exactly what Oliver ate before the reaction started?",
      "How much time passed between eating and the first symptoms appearing?",
      "What were the very first symptoms you noticed?",
      "Has Oliver ever eaten peanut butter or peanuts before today?",
      "Can you describe the hives - where did they appear first and how did they spread?",
      "How many times did he vomit and what did it look like?",
      "Did you notice any breathing problems, wheezing, or changes in his voice?",
      "What did you do when you first noticed the symptoms?",
      "Has Oliver ever had any reaction like this before to any food?",
      "Does anyone in your family have food allergies or severe allergic reactions?",
      "What medications have you given Oliver today?",
      "How has he been acting since the reaction started - more fussy, sleepy, or normal?"
    ],
    "patientResponses": {
      "default": "I'm not sure about that - this all happened so fast and we're still pretty shaken up about it",
      "onset": "It was really quick - maybe 10 to 15 minutes after he finished eating the crackers at our friend's house. The hives around his mouth appeared first, then he threw up",
      "character": "He got these raised red bumps around his mouth first, then on his arms and chest. He became really fussy and clingy, more than his usual tantrums",
      "location": "The hives started right around his mouth and lips, then spread to his arms, chest, and back. His face got a little puffy too",
      "severity": "This was definitely scary - maybe an 8 out of 10 for how worried we were. He was miserable and we'd never seen anything like this before",
      "aggravating": "He seemed to get more upset when we tried to wipe his face or when he moved around a lot. The hives looked worse when he was crying",
      "relieving": "Holding him seemed to calm him down a little, but the hives didn't really go away until we got some medicine",
      "associated": "He threw up twice, was really fussy and clingy, and seemed a bit tired. His breathing seemed okay though, thank goodness",
      "denies": "No wheezing or trouble breathing that we could tell. No swelling of his lips or tongue. He didn't seem dizzy or pass out",
      "history": "This has never happened before. He's had peanut butter sandwiches at home without any problems, which is why we're so confused",
      "medications": "Diphenhydramine; Epinephrine",
      "allergies": "Peanut",
      "family": "My husband has seasonal allergies and I had eczema when I was younger. But nobody in our families has food allergies that we know of",
      "social": "He stays home with our nanny during the day. He eats pretty much everything - we've never had to avoid any foods before today"
    },
    "examManeuvers": [
      "General appearance and level of distress",
      "Examination of skin for urticaria and distribution",
      "Assessment of facial and periorbital edema",
      "Examination of oropharynx and tongue",
      "Auscultation of lungs for wheezing or stridor",
      "Cardiac examination for tachycardia",
      "Abdominal examination for tenderness",
      "Assessment of capillary refill and perfusion",
      "Vital signs including oxygen saturation",
      "Neurologic assessment for alertness and irritability"
    ],
    "examFindings": {
      "General appearance and level of distress": "Fussy 3-year-old male, intermittently crying, clinging to mother but consolable, appears uncomfortable but not in severe distress",
      "Examination of skin for urticaria and distribution": "Multiple erythematous, raised wheals on face, arms, chest, and back; perioral distribution most prominent; individual lesions 0.5-2cm in diameter",
      "Assessment of facial and periorbital edema": "Mild periorbital puffiness, no significant lip or tongue swelling",
      "Examination of oropharynx and tongue": "Oropharynx clear, tongue normal size and color, no obvious swelling or erythema",
      "Auscultation of lungs for wheezing or stridor": "Clear breath sounds bilaterally, no wheezing, stridor, or respiratory distress",
      "Cardiac examination for tachycardia": "Tachycardic but regular rhythm, no murmurs, good heart sounds",
      "Abdominal examination for tenderness": "Soft, non-tender, no organomegaly, normal bowel sounds",
      "Assessment of capillary refill and perfusion": "Capillary refill <2 seconds, warm extremities, good peripheral perfusion",
      "Vital signs including oxygen saturation": "HR 148, Temp 37.0\u00b0C, SpO2 95% on room air, BP age-appropriate",
      "Neurologic assessment for alertness and irritability": "Alert and interactive when not crying, appropriate for age, no focal neurologic deficits"
    },
    "ddxTargets": [
      "Peanut anaphylaxis \u2014 hidden exposure, delayed epinephrine use (correct)",
      "Allergic reaction without anaphylaxis \u2014 wheeze + urticaria + angioedema = anaphylaxis by criteria",
      "Vasovagal reaction \u2014 no urticaria or angioedema; vasovagal has pallor and bradycardia",
      "Panic attack \u2014 somatic symptoms of anxiety; no urticaria, normal tryptase",
      "Scombroid poisoning \u2014 flushing, urticaria, headache after spoiled fish; not Thai food in this case",
      "Hereditary angioedema \u2014 normal complement between attacks; urticaria present argues against HAE"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'peanut allergy' from chief complaint without considering other ingredients in crackers or alternative diagnoses for urticaria and vomiting",
      "prematureClosure": "May conclude food allergy too quickly without adequate assessment for signs of anaphylaxis or consideration of viral illness with coincidental hives",
      "availabilityBias": "Peanut allergy is commonly discussed in pediatrics, but other allergens in processed foods or non-allergic causes of urticaria may be overlooked"
    },
    "coachPrompts": {
      "phase2": "Before you interview the family, consider what key features would help you distinguish between a localized allergic reaction versus early anaphylaxis. What historical details about timing, progression, and associated symptoms will be most important? Also think about what else besides peanuts could cause this presentation.",
      "phase5": "Now that you've gathered your history and exam findings, let's think through this systematically. You found urticaria and GI symptoms but no respiratory or cardiovascular compromise. How does this help narrow your differential? What features make you more or less concerned about anaphylaxis versus a localized food allergy?",
      "finalDebrief": "This case illustrates classic IgE-mediated food allergy with rapid onset after ingestion. The key teaching points are recognizing the difference between localized allergic reaction and anaphylaxis, understanding that prior tolerance doesn't rule out new allergies, and considering all ingredients in processed foods. The absence of respiratory or cardiovascular symptoms helped distinguish this from anaphylaxis, but the rapid onset and typical urticarial pattern confirmed IgE-mediated allergy.",
      "final": "Diagnosis: peanut anaphylaxis \u2014 education gap about epinephrine priority. Key learning: (1) The #1 error in anaphylaxis management: using antihistamines instead of epinephrine. Antihistamines take 30-60 minutes to reach peak effect and do NOT block bronchoconstriction, hypotension, or progressive angioedema. Epinephrine works in minutes via alpha-1 (vasoconstriction), beta-1 (chronotropy/inotropy), and beta-2 (bronchodilation) effects simultaneously. (2) Epinephrine threshold: use at the first sign of a SYSTEMIC reaction (hives spreading + any ONE of: wheeze, throat tightness, vomiting, hypotension). Do not wait to 'see if it gets worse' \u2014 anaphylaxis can progress from mild to fatal within minutes. (3) Hidden peanut education: peanut is in many dishes where not listed (Thai/Asian sauces, Mexican mole, Indian curries, desserts, 'may contain' labeling). Patients must ask about ALL ingredients, inform staff of allergy severity, carry epinephrine always. (4) Biphasic anaphylaxis: occurs in ~10-20%, 1-72h after apparent resolution without re-exposure. Risk factors: severe initial reaction, delayed epinephrine use. Observe 4-6 hours in ED. Discharge criteria: symptoms resolved, vital signs stable, reliable home access to epinephrine. (5) Written anaphylaxis action plan: every patient should leave with a written plan \u2014 when to use EpiPen, when to call 911, when to go to ED. Verbal instructions alone are insufficient in the setting of an acute reaction."
    }
  },
  "meta": {
    "diagnosis": "Peanut Anaphylaxis \u2014 Hidden Peanut in Restaurant Dish, Epinephrine Auto-Injector Not Used Initially, Education Gap",
    "caseId": "peanut-allergy-anaphylaxis-v2"
  }
};
