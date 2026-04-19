/* emr-data/eoe-adult.js — Multi-Setting Allergy Case: Eosinophilic Esophagitis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Brandon Kowalski",
      "patientHPI": "I was eating dinner and a piece of food got stuck in my throat again and just won't go down. This keeps happening to me, especially with meat and bread - it feels like the food just sits there in my chest. Usually I can get it down eventually, but this time it's been stuck for hours and I'm starting to panic.",
      "dob": "02/09/1998",
      "age": "28",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-379365",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(630) 555-2876",
      "email": "brandon.kowalski@email.com",
      "address": "5211 Hollyhock Rd, Cleveland, OH 44105",
      "insurance": "Aetna HMO",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Lisa Kowalski",
        "phone": "(803) 555-3683",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Wheat",
        "reaction": "EoE trigger",
        "severity": "Moderate",
        "type": "Food"
      },
      {
        "allergen": "Milk",
        "reaction": "EoE trigger",
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
      "Brother: EoE",
      "Mother: seasonal allergies"
    ],
    "socialHistory": [
      [
        "Diet",
        "Was eating steak — piece became impacted"
      ],
      [
        "Medication adherence",
        "Admits to inconsistent use of swallowed fluticasone"
      ],
      [
        "Atopic triad",
        "Allergic rhinitis + asthma + EoE"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "28-year-old with recurrent dysphagia and food impaction at dinner",
        "diagnosis": "Eosinophilic Esophagitis"
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
          "description": "Asthma",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "History of food impactions (2 prior)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Known EoE diagnosis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone swallowed",
          "dose": "440mcg",
          "route": "Swallowed",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Omeprazole",
          "dose": "20mg",
          "route": "PO",
          "frequency": "Daily",
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
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
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
          "accession": "LAB-227513",
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
                  "value": "8",
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
                  "value": "380",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "date": "03/02/2026",
          "study": "EGD",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-704488",
          "clinical": "28-year-old with recurrent dysphagia and food impaction at dinner",
          "technique": "Standard protocol",
          "findings": "Linear furrows, white exudates, concentric rings (trachealization) in proximal and mid-esophagus. Biopsies taken.",
          "impression": "Endoscopic findings consistent with active EoE. Biopsy: >15 eos/hpf.",
          "dictated": "03/02/2026 08:30",
          "verified": "03/02/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "28-year-old with recurrent dysphagia and food impaction at dinner",
          "hpi": "Brandon Kowalski presents with 28-year-old with recurrent dysphagia and food impaction at dinner.",
          "exam": "See documentation.",
          "assessment": "Eosinophilic Esophagitis",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted after endoscopic food disimpaction — EoE with esophageal stricture",
        "diagnosis": "Eosinophilic Esophagitis"
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
          "description": "Asthma",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "History of food impactions (2 prior)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Known EoE diagnosis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone swallowed",
          "dose": "440mcg",
          "route": "Swallowed",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Omeprazole",
          "dose": "20mg",
          "route": "PO",
          "frequency": "Daily",
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
          "id": "med-add-1",
          "name": "Fluticasone swallowed",
          "dose": "880mcg",
          "route": "Swallowed",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Omeprazole",
          "dose": "40mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "124/76",
          "hr": "82",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-227513",
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
                  "value": "8",
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
                  "value": "380",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "date": "03/02/2026",
          "study": "EGD",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-704488",
          "clinical": "28-year-old with recurrent dysphagia and food impaction at dinner",
          "technique": "Standard protocol",
          "findings": "Linear furrows, white exudates, concentric rings (trachealization) in proximal and mid-esophagus. Biopsies taken.",
          "impression": "Endoscopic findings consistent with active EoE. Biopsy: >15 eos/hpf.",
          "dictated": "03/02/2026 08:30",
          "verified": "03/02/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Admitted after endoscopic food disimpaction — EoE with esophageal stricture",
          "hpi": "Brandon Kowalski — Admitted after endoscopic food disimpaction — EoE with esophageal stricture",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — optimize EoE management, food allergy testing for elimination diet",
        "diagnosis": "Eosinophilic Esophagitis"
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
          "description": "Asthma",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "History of food impactions (2 prior)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Known EoE diagnosis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone swallowed",
          "dose": "440mcg",
          "route": "Swallowed",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Omeprazole",
          "dose": "20mg",
          "route": "PO",
          "frequency": "Daily",
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
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "122/76",
          "hr": "78",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-227513",
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
                  "value": "8",
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
                  "value": "380",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "date": "03/02/2026",
          "study": "EGD",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-704488",
          "clinical": "28-year-old with recurrent dysphagia and food impaction at dinner",
          "technique": "Standard protocol",
          "findings": "Linear furrows, white exudates, concentric rings (trachealization) in proximal and mid-esophagus. Biopsies taken.",
          "impression": "Endoscopic findings consistent with active EoE. Biopsy: >15 eos/hpf.",
          "dictated": "03/02/2026 08:30",
          "verified": "03/02/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult — optimize EoE management, food allergy testing for elimination diet",
          "hpi": "Brandon Kowalski — A/I consult — optimize EoE management, food allergy testing for elimination diet",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "EoE follow-up — repeat EGD results, medication adherence, elimination diet progress",
        "diagnosis": "Eosinophilic Esophagitis"
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
          "description": "Asthma",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "History of food impactions (2 prior)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Known EoE diagnosis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Dupilumab",
          "dose": "300mg",
          "route": "SC",
          "frequency": "Q2 weeks (if refractory)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
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
          "accession": "LAB-227513",
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
                  "value": "8",
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
                  "value": "380",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "date": "03/02/2026",
          "study": "EGD",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-704488",
          "clinical": "28-year-old with recurrent dysphagia and food impaction at dinner",
          "technique": "Standard protocol",
          "findings": "Linear furrows, white exudates, concentric rings (trachealization) in proximal and mid-esophagus. Biopsies taken.",
          "impression": "Endoscopic findings consistent with active EoE. Biopsy: >15 eos/hpf.",
          "dictated": "03/02/2026 08:30",
          "verified": "03/02/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Office Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "EoE follow-up — repeat EGD results, medication adherence, elimination diet progress",
          "hpi": "Brandon Kowalski — EoE follow-up — repeat EGD results, medication adherence, elimination diet progress",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Brandon Kowalski",
    "dob": "02/09/1998",
    "age": "28",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-379365",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(502) 555-2771",
    "email": "brandon.kowalski@email.com",
    "address": "1345 Dogwood Ln, Baltimore, MD 21210",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Lisa Kowalski",
      "phone": "(620) 555-1420",
      "relationship": "Spouse"
    },
    "chiefComplaint": "28-year-old with recurrent dysphagia and food impaction at dinner",
    "diagnosis": "Eosinophilic Esophagitis"
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
      "description": "Asthma",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "History of food impactions (2 prior)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Known EoE diagnosis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Fluticasone swallowed",
      "dose": "440mcg",
      "route": "Swallowed",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Omeprazole",
      "dose": "20mg",
      "route": "PO",
      "frequency": "Daily",
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
    }
  ],
  "allergies": [
    {
      "allergen": "Wheat",
      "reaction": "EoE trigger",
      "severity": "Moderate",
      "type": "Food"
    },
    {
      "allergen": "Milk",
      "reaction": "EoE trigger",
      "severity": "Moderate",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
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
      "cc": "28-year-old with recurrent dysphagia and food impaction at dinner",
      "hpi": "Brandon Kowalski presents with 28-year-old with recurrent dysphagia and food impaction at dinner.",
      "exam": "See documentation.",
      "assessment": "Eosinophilic Esophagitis",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-227513",
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
              "value": "8",
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
              "value": "380",
              "unit": "IU/mL",
              "range": "<100",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/02/2026",
      "study": "EGD",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-704488",
      "clinical": "28-year-old with recurrent dysphagia and food impaction at dinner",
      "technique": "Standard protocol",
      "findings": "Linear furrows, white exudates, concentric rings (trachealization) in proximal and mid-esophagus. Biopsies taken.",
      "impression": "Endoscopic findings consistent with active EoE. Biopsy: >15 eos/hpf.",
      "dictated": "03/02/2026 08:30",
      "verified": "03/02/2026 09:15"
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
    "Brother: EoE",
    "Mother: seasonal allergies"
  ],
  "socialHistory": [
    [
      "Diet",
      "Was eating steak — piece became impacted"
    ],
    [
      "Medication adherence",
      "Admits to inconsistent use of swallowed fluticasone"
    ],
    [
      "Atopic triad",
      "Allergic rhinitis + asthma + EoE"
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
        "≥15 eos/HPF diagnostic threshold",
        "1-food (milk) elimination first-line",
        "Swallowed budesonide/fluticasone",
        "Repeat EGD 8-12 weeks"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "EoE is diagnosed by ≥15 eosinophils/hpf on esophageal biopsy (≥6 biopsies from proximal + distal esophagus) after 8-week PPI trial. PPI trial first excludes PPI-responsive esophageal eosinophilia (GERD-related), which is not true EoE.",
      "Most common trigger food: cow's milk (55–65%). 6-food elimination diet (milk, wheat, egg, soy, nuts, seafood) achieves histologic remission in 70–80%. Reintroduce one food at a time with repeat endoscopy to identify specific trigger.",
      "Dupilumab (FDA 2022) is the first biologic approved for EoE — targets IL-4Rα, blocking IL-4/IL-13, which drives eotaxin-3 production in esophageal epithelium. Dupilumab-associated EoE: new EoE can develop in patients on dupilumab for asthma/AD."
    ],
    "boardPearls": [
      "EoE diagnostic threshold: ≥15 eos/hpf after 8-week PPI trial. PPI-responsive eosinophilia: normalizes on PPI → NOT true EoE.",
      "Endoscopic findings: rings (trachealization), longitudinal furrows, white exudates, edema, stricture. EREFS score used in trials.",
      "Most common adult EoE presentation: dysphagia + food impaction. Most common pediatric: feeding refusal, vomiting, abdominal pain.",
      "Treatment options: 6FED (70–80% remission); swallowed topical budesonide/fluticasone (50–70%); dupilumab (59% remission, TREX trial); PPI (30–40%).",
      "Dilation: for symptomatic strictures. Improves dysphagia but does NOT treat underlying eosinophilic inflammation — must combine with anti-inflammatory therapy.",
      "Dupilumab-associated EoE: recognized adverse effect — eosinophils redirected to esophagus. Screen with symptom questionnaire."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Brandon appears anxious and somewhat embarrassed about his recurring food impactions. He's cooperative but admits to poor medication adherence with his swallowed fluticasone, showing frustration with the chronic nature of his condition.",
    "interviewQuestions": [
      "Can you describe exactly what happened when you were eating dinner tonight?",
      "How long have you been having problems with food getting stuck?",
      "What types of foods typically cause problems for you?",
      "Have you been taking your medications as prescribed?",
      "Do you have any chest pain or heartburn with the swallowing difficulties?",
      "Have you noticed any regurgitation or bringing food back up?",
      "Any weight loss or changes in appetite recently?",
      "Do you have to drink liquids to help food go down?",
      "Have you had any recent allergy flares or asthma symptoms?",
      "When was your last endoscopy or follow-up for your EoE?",
      "Are you following any dietary restrictions for your food allergies?",
      "Any nausea, vomiting, or abdominal pain with this episode?",
      "Have you tried anything to relieve the current impaction?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Can you ask it differently?",
      "onset": "This started about 2 hours ago when I was eating steak at dinner. The piece just got stuck and won't go down.",
      "character": "It feels like there's a solid piece of food stuck in my chest, like it's lodged behind my breastbone.",
      "location": "The stuck feeling is right here in the middle of my chest, behind my sternum. It doesn't move or radiate anywhere.",
      "severity": "I'd say it's about a 7 out of 10 for discomfort. I can't eat or drink anything without it coming back up.",
      "aggravating": "Any attempt to eat or drink makes it worse. Even swallowing my saliva is uncomfortable.",
      "relieving": "I've tried drinking water and even tried to make myself throw up, but nothing has helped so far.",
      "associated": "I'm having some chest discomfort and I keep producing extra saliva. No real pain, just pressure and the feeling of fullness.",
      "denies": "No chest pain, no heartburn right now, no trouble breathing, no abdominal pain, and no fever.",
      "history": "This has happened twice before in the past year, both times with meat. I have eosinophilic esophagitis that was diagnosed about 2 years ago.",
      "medications": "Fluticasone swallowed; Omeprazole; Cetirizine",
      "allergies": "Wheat, Milk",
      "family": "My brother also has EoE, and my mom has really bad seasonal allergies. That's about all I know.",
      "social": "I work in IT, so mostly desk work. I don't smoke, drink maybe 2-3 beers on weekends. I try to avoid wheat and milk but it's really hard to stick to the diet all the time."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "General appearance and distress level",
      "Head and neck examination",
      "Lymph node palpation",
      "Chest inspection and palpation",
      "Cardiac auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Oropharyngeal inspection",
      "Assessment of drooling or inability to handle secretions"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 128/78, HR 82, Temp 36.8°C, SpO2 99% - stable vital signs",
      "General appearance and distress level": "Alert, anxious-appearing male in mild distress, sitting upright, occasionally spitting into cup",
      "Head and neck examination": "No masses, no lymphadenopathy, no thyromegaly",
      "Lymph node palpation": "No cervical, supraclavicular, or axillary lymphadenopathy",
      "Chest inspection and palpation": "No visible deformity, no tenderness to palpation over sternum or chest wall",
      "Cardiac auscultation": "Regular rate and rhythm, no murmurs, rubs, or gallops",
      "Pulmonary auscultation": "Clear to auscultation bilaterally, no wheezes or crackles",
      "Abdominal examination": "Soft, non-tender, non-distended, normal bowel sounds",
      "Oropharyngeal inspection": "No erythema, no exudate, no visible foreign body, normal dentition",
      "Assessment of drooling or inability to handle secretions": "Patient occasionally spits saliva, reports difficulty swallowing even liquids"
    },
    "ddxTargets": [
      "Eosinophilic esophagitis with food impaction (correct diagnosis)",
      "Esophageal stricture",
      "Achalasia",
      "Esophageal perforation",
      "Boerhaave syndrome",
      "GERD with esophagitis",
      "Esophageal carcinoma"
    ],
    "biasFlags": {
      "anchoring": "May anchor on the known EoE diagnosis and miss complications like perforation or other causes of dysphagia that could develop secondarily",
      "prematureClosure": "Risk of immediately attributing symptoms to known EoE without considering that food impaction could lead to serious complications requiring urgent intervention",
      "availabilityBias": "Recent cases of GERD or common causes of chest pain might overshadow the specific presentation of food impaction in EoE"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given this patient's age and the acute nature of his presentation, what specific historical details would help you differentiate between mechanical obstruction and motility disorders? Also consider - what are the potential complications of food impaction that you need to rule out?",
      "phase5": "Now that you've gathered your history and physical, let's think about this systematically. You have a known EoE patient with food impaction - what does this tell you about his disease control? What immediate management concerns do you have, and what would be your next diagnostic step?",
      "finalDebrief": "This case highlights the importance of medication adherence in EoE management. Brandon's inconsistent use of swallowed fluticasone likely contributed to ongoing esophageal inflammation and food impaction. How did your differential evolve as you learned about his established diagnosis and medication non-adherence? What key teaching points about EoE management and complications would you emphasize?"
    }
  }
};
