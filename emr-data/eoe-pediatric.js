
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Mateo Delgado",
      "patientHPI": "I was eating and something got stuck in my throat and now I can't swallow anything, not even water. It feels like there's a big lump stuck in my chest and every time I try to drink something it just comes right back up.",
      "dob": "01/12/2016",
      "age": "10",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-939166",
      "language": "English",
      "race": "White",
      "phone": "(617) 555-2894",
      "email": "mateo.delgado@email.com",
      "address": "127 Sycamore Dr, Birmingham, AL 35208",
      "insurance": "Aetna HMO",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "CVS Pharmacy \u2014 Main St",
      "emergencyContact": {
        "name": "Jennifer Delgado",
        "phone": "(505) 555-4114",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Egg",
        "reaction": "Hives",
        "severity": "Mild",
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
      "Father: asthma",
      "Sister: food allergies"
    ],
    "socialHistory": [
      [
        "Feeding",
        "Prefers soft foods, avoids meat and bread \u2014 'food gets stuck'"
      ],
      [
        "Growth",
        "25th percentile height and weight, was 50th at age 5"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "10yo with acute food impaction \u2014 unable to swallow liquids",
        "diagnosis": "Eosinophilic Esophagitis \u2014 Pediatric"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Eczema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Feeding difficulties since age 3",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Glucagon",
          "dose": "1mg",
          "route": "IV",
          "frequency": "Once (trial)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "104/64",
          "hr": "98",
          "rr": "20",
          "temp": "36.8\u00b0C",
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
          "accession": "LAB-520346",
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
                  "value": "11",
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
                  "value": "520",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Milk Ig E",
                  "value": "2.1",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Wheat Ig E",
                  "value": "1.8",
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
          "cc": "10yo with acute food impaction \u2014 unable to swallow liquids",
          "hpi": "Mateo Delgado \u2014 10yo with acute food impaction \u2014 unable to swallow liquids",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted post-disimpaction for EGD with biopsies \u2014 suspected new EoE diagnosis",
        "diagnosis": "Eosinophilic Esophagitis \u2014 Pediatric"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Eczema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Feeding difficulties since age 3",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "102/62",
          "hr": "86",
          "rr": "18",
          "temp": "36.8\u00b0C",
          "spo2": "99%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-520346",
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
                  "value": "11",
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
                  "value": "520",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Milk Ig E",
                  "value": "2.1",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Wheat Ig E",
                  "value": "1.8",
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
          "cc": "Admitted post-disimpaction for EGD with biopsies \u2014 suspected new EoE diagnosis",
          "hpi": "Mateo Delgado \u2014 Admitted post-disimpaction for EGD with biopsies \u2014 suspected new EoE diagnosis",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "10-year-old with chronic abdominal pain, vomiting, and refusal to eat solid foods",
        "diagnosis": "Eosinophilic Esophagitis \u2014 Pediatric"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Eczema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Feeding difficulties since age 3",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "102/62",
          "hr": "86",
          "rr": "18",
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
          "accession": "LAB-520346",
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
                  "value": "11",
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
                  "value": "520",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Milk Ig E",
                  "value": "2.1",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Wheat Ig E",
                  "value": "1.8",
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
          "provider": "Dr. Allergist (Consultant)",
          "cc": "10-year-old with chronic abdominal pain, vomiting, and refusal to eat solid foods",
          "hpi": "Mateo Delgado presents with 10-year-old with chronic abdominal pain, vomiting, and refusal to eat solid foods.",
          "exam": "See documentation.",
          "assessment": "Eosinophilic Esophagitis \u2014 Pediatric",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "EoE follow-up \u2014 biopsy-confirmed, starting elimination diet and swallowed fluticasone",
        "diagnosis": "Eosinophilic Esophagitis \u2014 Pediatric"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Eczema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Feeding difficulties since age 3",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Fluticasone swallowed",
          "dose": "440mcg",
          "route": "Swallowed",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "104/64",
          "hr": "82",
          "rr": "16",
          "temp": "36.8\u00b0C",
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
          "accession": "LAB-520346",
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
                  "value": "11",
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
                  "value": "520",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Milk Ig E",
                  "value": "2.1",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Wheat Ig E",
                  "value": "1.8",
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
          "cc": "EoE follow-up \u2014 biopsy-confirmed, starting elimination diet and swallowed fluticasone",
          "hpi": "Mateo Delgado \u2014 EoE follow-up \u2014 biopsy-confirmed, starting elimination diet and swallowed fluticasone",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Mateo Delgado",
    "dob": "01/12/2016",
    "age": "10",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-939166",
    "language": "English",
    "race": "White",
    "phone": "(415) 555-1727",
    "email": "mateo.delgado@email.com",
    "address": "1247 Clover St, Albuquerque, NM 87106",
    "insurance": "Aetna HMO",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Jennifer Delgado",
      "phone": "(713) 555-8144",
      "relationship": "Parent"
    },
    "chiefComplaint": "10-year-old with chronic abdominal pain, vomiting, and refusal to eat solid foods",
    "diagnosis": "Eosinophilic Esophagitis \u2014 Pediatric"
  },
  "problems": [
    {
      "problem": "EoE \u2014 school-age child, confirmed on EGD",
      "icd": "K20.0",
      "onset": "2023",
      "status": "Active",
      "notes": "Maya Singh, 9F \u2014 vomiting and gagging with solids x18 months. Avoids meats and bread. Biopsy 38 eos/hpf."
    },
    {
      "problem": "Food avoidance \u2014 behavioral adaptation to swallowing pain",
      "icd": "R63.3",
      "onset": "2023",
      "status": "Active",
      "notes": "Avoiding specific food textures \u2014 steak, bread, crackers. Self-protecting against impaction. Nutritional deficit possible."
    },
    {
      "problem": "Atopic triad \u2014 asthma, eczema, allergic rhinitis all present",
      "icd": "J45.909",
      "onset": "2019",
      "status": "Active",
      "notes": "Concurrent atopy in 70-80% of pediatric EoE. Allergy evaluation ongoing."
    }
  ],
  "medications": [
    {
      "name": "Budesonide oral viscous suspension 1mg swallowed BID",
      "sig": "Swallow \u2014 do not dilute. Topical esophageal steroid with improved mucosal contact vs MDI. Do not eat/drink x30 min.",
      "prescriber": "Pediatric GI",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Milk and wheat elimination \u2014 targeted 2-food elimination",
      "sig": "Eliminate milk and wheat \u2014 most common EoE triggers in children. Reintroduce individually with repeat EGD between each.",
      "prescriber": "GI/Dietitian",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg PO daily \u2014 PPI concurrent",
      "sig": "PPI trial concurrent with dietary therapy. Reassess on EGD in 8-12 weeks.",
      "prescriber": "Pediatric GI",
      "start": "2024",
      "refills": 2,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Egg",
      "reaction": "Hives",
      "severity": "Mild",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "102/62",
      "hr": "86",
      "rr": "18",
      "temp": "36.8\u00b0C",
      "spo2": "99%",
      "pain": "3/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Consultation",
      "date": "03/02/2026",
      "provider": "Dr. Allergist (Consultant)",
      "cc": "10-year-old with chronic abdominal pain, vomiting, and refusal to eat solid foods",
      "hpi": "Mateo Delgado presents with 10-year-old with chronic abdominal pain, vomiting, and refusal to eat solid foods.",
      "exam": "See documentation.",
      "assessment": "Eosinophilic Esophagitis \u2014 Pediatric",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "EoE Workup \u2014 Pediatric",
      "results": [
        {
          "test": "Esophageal biopsy eos/hpf",
          "value": "38",
          "unit": "eos/hpf",
          "ref": "<15",
          "flag": "H"
        },
        {
          "test": "Peripheral eosinophils",
          "value": "1.1",
          "unit": "K/\u03bcL",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "Total IgE",
          "value": "480",
          "unit": "IU/mL",
          "ref": "<150",
          "flag": "H"
        },
        {
          "test": "Wheat IgE",
          "value": "6.4",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Milk IgE (casein)",
          "value": "3.8",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Peanut IgE",
          "value": "0.8",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "EGD \u2014 Pediatric",
      "indication": "Chronic vomiting, dysphagia, food avoidance",
      "findings": "Esophageal rings (trachealization), furrows, white exudate \u2014 classic EoE triad. No stricture. Biopsies: 38 eos/hpf throughout.",
      "impression": "EoE confirmed histologically and endoscopically. No stricture requiring dilation. Dietary and topical steroid therapy initiated."
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
    "Father: asthma",
    "Sister: food allergies"
  ],
  "socialHistory": [
    [
      "Feeding",
      "Prefers soft foods, avoids meat and bread \u2014 'food gets stuck'"
    ],
    [
      "Growth",
      "25th percentile height and weight, was 50th at age 5"
    ]
  ],
  "references": [
    {
      "id": "EoE-AGA-2020",
      "title": "AGA clinical practice update on dietary management of EoE",
      "authors": "Hirano I, Chan ES, Rank MA, et al.",
      "journal": "Gastroenterology",
      "year": 2020,
      "doi": "10.1053/j.gastro.2020.02.038",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7286571/",
      "openAccess": true,
      "validates": [
        "\u226515 eos/HPF diagnostic threshold",
        "1-food (milk) elimination first-line",
        "Swallowed budesonide/fluticasone",
        "Repeat EGD 8-12 weeks"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "Pediatric EoE presentation differs from adults: infants/toddlers \u2014 feeding refusal, vomiting, poor weight gain. School-age children \u2014 vomiting, abdominal pain, food refusal. Adolescents/adults \u2014 dysphagia, food impaction (adult pattern).",
      "Elemental (amino acid-based) formula achieves histologic remission in >90% of pediatric EoE \u2014 but is expensive, poorly palatable, and impractical long-term. Used to confirm food-triggered EoE and identify triggers before food reintroduction.",
      "Swallowed topical budesonide (orodispersible tablet, Jorveza) and fluticasone (sprayed into mouth, swallowed) are standard pharmacotherapy in children \u2014 same mechanism as inhaled steroids for asthma but targeted to esophagus."
    ],
    "boardPearls": [
      "Pediatric EoE: same histologic threshold (\u226515 eos/hpf) and treatment approach as adults.",
      "Top trigger foods: cow's milk (#1), wheat, egg, soy. Single food elimination (milk only) achieves remission in ~40% \u2014 start here before 6FED.",
      "Elemental formula: >90% histologic remission \u2014 gold standard to confirm food-driven EoE. Step-down to identify trigger foods.",
      "Growth and nutrition: monitor height, weight, iron, zinc in children on elimination diets. Dietitian essential.",
      "Dupilumab: FDA approved for EoE ages \u22651 year weighing \u226515 kg (2022). Appropriate when dietary/topical therapy insufficient.",
      "Natural history: EoE does not spontaneously remit \u2014 chronic disease requiring ongoing treatment."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Mateo appears anxious and somewhat withdrawn, clinging to his mother during the interview. He becomes visibly distressed when discussing eating and will look to his mother for reassurance before answering questions about food.",
    "interviewQuestions": [
      "Can you tell me more about when the stomach pain happens?",
      "What does the pain feel like?",
      "Where exactly does your stomach hurt?",
      "How bad is the pain on a scale of 1 to 10?",
      "What happens when you try to eat different foods?",
      "Do you ever feel like food gets stuck when you swallow?",
      "Tell me about the vomiting - when does it happen?",
      "Have you noticed any foods that make you feel worse?",
      "Do you have any trouble breathing or wheezing?",
      "Have you had any heartburn or chest pain?",
      "What medications are you taking?",
      "Do you have any allergies?",
      "Has anyone in your family had similar problems with eating or stomach issues?"
    ],
    "patientResponses": {
      "default": "I don't know... it just hurts. Can you ask my mom?",
      "onset": "It's been happening for a really long time, maybe since I was little. It got worse over the past couple years.",
      "character": "It feels like burning and cramping in my stomach. Sometimes it feels tight in my chest too.",
      "location": "Right here in my stomach, and sometimes up here in my chest behind my ribs.",
      "severity": "It's like a 7 or 8 when it's really bad. I can't eat anything when it hurts like that.",
      "aggravating": "Eating makes it much worse, especially things like meat or bread. Even some fruits make it hurt.",
      "relieving": "If I only eat soft things like yogurt or soup, it's not as bad. Sometimes nothing helps though.",
      "associated": "I throw up a lot, especially after trying to eat. Food feels like it gets stuck in my throat. I get really full fast.",
      "denies": "I don't have diarrhea or fever. I don't think I'm losing weight but I'm not growing like my friends.",
      "history": "This has been going on for years. My mom says I've always been a picky eater but it's gotten much worse.",
      "medications": "Fluticasone nasal; Cetirizine",
      "allergies": "Egg",
      "family": "My dad has asthma and my sister has food allergies. My mom says there might be other allergies in the family too.",
      "social": "I'm in 4th grade. I don't like eating lunch at school because it hurts. I mostly eat soft foods like mac and cheese or smoothies."
    },
    "examManeuvers": [
      "General appearance and growth assessment",
      "Abdominal inspection",
      "Abdominal palpation",
      "Auscultation of bowel sounds",
      "Examination of oral cavity and throat",
      "Lymph node palpation",
      "Skin examination for eczematous changes",
      "Pulmonary examination",
      "Assessment of hydration status",
      "Weight and height percentiles"
    ],
    "examFindings": {
      "General appearance and growth assessment": "Thin-appearing child, height and weight at 25th percentile, appears younger than stated age",
      "Abdominal inspection": "Mildly distended, no visible masses or hernias",
      "Abdominal palpation": "Mild epigastric tenderness, no organomegaly or masses",
      "Auscultation of bowel sounds": "Normal bowel sounds present in all quadrants",
      "Examination of oral cavity and throat": "Mild erythema of posterior pharynx, no obvious lesions or thrush",
      "Lymph node palpation": "No significant lymphadenopathy",
      "Skin examination for eczematous changes": "Mild eczematous changes on flexural surfaces, consistent with known atopic dermatitis",
      "Pulmonary examination": "Clear to auscultation bilaterally, no wheezing or stridor",
      "Assessment of hydration status": "Adequate hydration, normal skin turgor",
      "Weight and height percentiles": "Both height and weight dropped from 50th percentile at age 5 to 25th percentile currently"
    },
    "ddxTargets": [
      "EoE \u2014 wheat and milk triggers, dysphagia and vomiting in child (correct)",
      "GERD \u2014 common in children, but <15 eos/hpf; rings and furrows not typical of GERD",
      "Achalasia \u2014 different motility pattern, LES dilation on manometry",
      "Esophageal foreign body \u2014 chronic, not acute; no foreign body on imaging",
      "Functional dysphagia \u2014 exclusion diagnosis after negative organic workup",
      "Celiac disease \u2014 gluten, but small bowel location; can co-exist with EoE"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'picky eating' or behavioral feeding issues given the chronic nature and young age, missing the underlying inflammatory process",
      "prematureClosure": "May stop at GERD diagnosis given reflux-like symptoms without considering the allergic/eosinophilic component suggested by atopic history",
      "availabilityBias": "Common conditions like viral gastroenteritis or functional abdominal pain may overshadow the less common but serious eosinophilic esophagitis"
    },
    "coachPrompts": {
      "phase2": "Looking at this 10-year-old with chronic symptoms, what aspects of his medical history particularly stand out to you? How might his allergic conditions relate to his GI symptoms?",
      "phase5": "You've gathered comprehensive information about Mateo's eating difficulties and growth concerns. Given his atopic history and the specific pattern of food intolerance, what inflammatory conditions should you consider? How does the 'food getting stuck' sensation guide your thinking?",
      "finalDebrief": "This case illustrates how eosinophilic esophagitis can present as chronic feeding difficulties in children with atopic disease. Notice how the combination of dysphagia, food impaction sensation, atopic comorbidities, and growth deceleration pointed toward this diagnosis rather than simple GERD or behavioral feeding issues.",
      "final": "Diagnosis: pediatric EoE, wheat and milk triggers. Key learning: (1) Food trigger pattern in pediatric EoE: milk (most common, ~50-60%), wheat (~50%), egg, soy, tree nuts, seafood. Testing (IgE, skin prick) has poor predictive value for EoE \u2014 dietary elimination and EGD reassessment is more reliable than serology-guided elimination. (2) Food avoidance behavior: children often self-identify which foods cause pain and avoid them \u2014 leading to missed diagnosis as 'picky eating.' A history of texture-specific avoidance (tough meats, bread, crackers) in an atopic child = EoE until proven otherwise. (3) Budesonide oral viscous suspension vs fluticasone MDI: budesonide suspension has better esophageal mucosal contact \u2014 preferred in pediatric patients who can swallow it. Fluticasone MDI (puffed and swallowed) is an alternative. (4) Reintroduction protocol: eliminate 2-6 foods \u2192 EGD at 8-12 weeks to confirm histologic remission \u2192 reintroduce one food at a time \u2192 EGD after each reintroduction to identify which food caused relapse. The process takes 1-2 years but identifies specific triggers allowing a less restrictive long-term diet. (5) EoE is a chronic, relapsing condition \u2014 unlike food allergy in some children, EoE does not typically resolve with age. Long-term management plan needed."
    }
  },
  "meta": {
    "diagnosis": "Eosinophilic Esophagitis \u2014 Pediatric, School-Age Child, Vomiting and Dysphagia, Wheat and Milk Triggers",
    "caseId": "eoe-pediatric"
  }
};
