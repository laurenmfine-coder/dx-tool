/* emr-data/penicillin-allergy-delabeling.js — Multi-Setting Allergy Case: Penicillin Allergy Evaluation */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Patricia O'Brien",
      "patientHPI": "I'm supposed to have surgery next week, but I got really anxious thinking about whether I might be allergic to penicillin since I'm not really sure, and I ended up in the emergency room because I was so worried about it.",
      "dob": "04/24/1968",
      "age": "58",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-537466",
      "language": "English",
      "race": "White",
      "phone": "(313) 555-2527",
      "email": "patricia.obrien@email.com",
      "address": "9215 Clover St, Baltimore, MD 21213",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
      "emergencyContact": {
        "name": "David O'Brien",
        "phone": "(513) 555-2582",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Rash as a child (age 5)",
        "severity": "Unknown \u2014 remote history",
        "type": "Drug"
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "History",
        "Told she had rash with amoxicillin at age 5 \u2014 mother's report, no details"
      ],
      [
        "Impact",
        "Has avoided all penicillins and cephalosporins for 53 years"
      ],
      [
        "Surgery",
        "Orthopedic surgeon requests A/I clearance for cefazolin use"
      ],
      [
        "Teaching point",
        "90%+ of labeled penicillin allergies are not true allergies"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Pre-surgical patient \u2014 ED visit for allergic reaction concern, found to be anxiety",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood \u2014 rash reported",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Acetaminophen",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "148/88",
          "hr": "102",
          "rr": "20",
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
          "accession": "LAB-879945",
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
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Pre-surgical patient \u2014 ED visit for allergic reaction concern, found to be anxiety",
          "hpi": "Patricia O'Brien \u2014 Pre-surgical patient \u2014 ED visit for allergic reaction concern, found to be anxiety",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Pre-surgical admission \u2014 A/I cleared for cefazolin after penicillin delabeling",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood \u2014 rash reported",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Acetaminophen",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Cefazolin",
          "dose": "2g",
          "route": "IV",
          "frequency": "Surgical prophylaxis",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "128/76",
          "hr": "72",
          "rr": "14",
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
          "accession": "LAB-879945",
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
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Pre-surgical admission \u2014 A/I cleared for cefazolin after penicillin delabeling",
          "hpi": "Patricia O'Brien \u2014 Pre-surgical admission \u2014 A/I cleared for cefazolin after penicillin delabeling",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "Pre-surgical evaluation \u2014 labeled penicillin allergy, needs cefazolin for prophylaxis",
        "diagnosis": "Penicillin Allergy \u2014 Delabeling Assessment"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood \u2014 rash reported",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Acetaminophen",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "132/78",
          "hr": "72",
          "rr": "14",
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
          "accession": "LAB-879945",
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
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "provider": "Dr. Allergist (Consultant)",
          "cc": "Pre-surgical evaluation \u2014 labeled penicillin allergy, needs cefazolin for prophylaxis",
          "hpi": "Patricia O'Brien presents with pre-surgical evaluation \u2014 labeled penicillin allergy, needs cefazolin for prophylaxis.",
          "exam": "See documentation.",
          "assessment": "Penicillin Allergy \u2014 Delabeling Assessment",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Penicillin allergy evaluation \u2014 skin testing and oral amoxicillin challenge",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood \u2014 rash reported",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "132/78",
          "hr": "72",
          "rr": "14",
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
          "accession": "LAB-879945",
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
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Penicillin allergy evaluation \u2014 skin testing and oral amoxicillin challenge",
          "hpi": "Patricia O'Brien \u2014 Penicillin allergy evaluation \u2014 skin testing and oral amoxicillin challenge",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Patricia O'Brien",
    "dob": "04/24/1968",
    "age": "58",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-537466",
    "language": "English",
    "race": "White",
    "phone": "(720) 555-7105",
    "email": "patricia.obrien@email.com",
    "address": "5893 Lavender St, Detroit, MI 48209",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
    "emergencyContact": {
      "name": "David O'Brien",
      "phone": "(804) 555-3131",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Pre-surgical evaluation \u2014 labeled penicillin allergy, needs cefazolin for prophylaxis",
    "diagnosis": "Penicillin Allergy \u2014 Delabeling Assessment"
  },
  "problems": [
    {
      "problem": "Penicillin allergy \u2014 historical label, now removed",
      "icd": "Z88.0",
      "onset": "1987",
      "status": "Resolved \u2014 delabeled today",
      "notes": "Childhood rash with amoxicillin; skin testing negative; oral amoxicillin challenge tolerated"
    },
    {
      "problem": "Osteoarthritis right knee \u2014 pre-op",
      "icd": "M17.11",
      "onset": "2021",
      "status": "Active",
      "notes": "Elective right TKA scheduled; cefazolin required for SSI prophylaxis"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2015",
      "status": "Active",
      "notes": "On lisinopril, controlled"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Park",
      "start": "01/2016",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Meloxicam 15mg daily",
      "sig": "Take 1 tablet by mouth daily with food \u2014 hold perioperatively",
      "prescriber": "Dr. Park",
      "start": "06/2023",
      "refills": 3,
      "status": "Active \u2014 hold 3 days pre-op"
    },
    {
      "name": "Cefazolin 2g IV (cleared for perioperative use)",
      "sig": "Administer IV 30-60 minutes before incision per anesthesia protocol",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 0,
      "status": "Approved \u2014 allergy label removed"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Rash as a child (age 5)",
      "severity": "Unknown \u2014 remote history",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "132/78",
      "hr": "72",
      "rr": "14",
      "temp": "36.8\u00b0C",
      "spo2": "99%",
      "pain": "0/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Consultation",
      "date": "03/02/2026",
      "provider": "Dr. Allergist (Consultant)",
      "cc": "Pre-surgical evaluation \u2014 labeled penicillin allergy, needs cefazolin for prophylaxis",
      "hpi": "Patricia O'Brien presents with pre-surgical evaluation \u2014 labeled penicillin allergy, needs cefazolin for prophylaxis.",
      "exam": "See documentation.",
      "assessment": "Penicillin Allergy \u2014 Delabeling Assessment",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/05/2024",
      "panel": "Pre-Operative Penicillin Allergy Evaluation",
      "results": [
        {
          "test": "Penicilloyl-polylysine (PPL) skin prick test",
          "value": "Negative",
          "unit": "",
          "ref": "Negative (wheal <3mm)",
          "flag": ""
        },
        {
          "test": "Minor determinant mixture skin prick test",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Penicillin G intradermal test",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Amoxicillin intradermal test",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Amoxicillin oral challenge (250mg, observed x1h)",
          "value": "Tolerated \u2014 no reaction",
          "unit": "",
          "ref": "Tolerated",
          "flag": ""
        },
        {
          "test": "Post-challenge observation (60 min)",
          "value": "No urticaria, no angioedema, no systemic symptoms",
          "unit": "",
          "ref": "",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "History",
      "Told she had rash with amoxicillin at age 5 \u2014 mother's report, no details"
    ],
    [
      "Impact",
      "Has avoided all penicillins and cephalosporins for 53 years"
    ],
    [
      "Surgery",
      "Orthopedic surgeon requests A/I clearance for cefazolin use"
    ],
    [
      "Teaching point",
      "90%+ of labeled penicillin allergies are not true allergies"
    ]
  ],
  "references": [
    {
      "id": "Drug-Allergy-PP-2022",
      "title": "Drug allergy: A 2022 practice parameter update",
      "authors": "Khan DA, Banerji A, Blumenthal KG, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2022,
      "doi": "10.1016/j.jaci.2022.08.028",
      "url": "https://www.jacionline.org/article/S0091-6749(22)01186-1/fulltext",
      "openAccess": true,
      "validates": [
        "PCN skin testing for anaphylaxis history; direct challenge for remote benign reactions",
        "Single-dose amoxicillin challenge for low-risk",
        "Vancomycin RMS management",
        "AERD aspirin desensitization protocol",
        "Sulfonamide challenge protocols"
      ]
    },
    {
      "id": "PCN-NEJM-2019",
      "title": "Penicillin allergy",
      "authors": "Castells M, Khan DA, Phillips EJ.",
      "journal": "N Engl J Med",
      "year": 2019,
      "doi": "10.1056/NEJMra1807761",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK448069/",
      "openAccess": true,
      "validates": [
        ">90% with PCN label NOT truly allergic",
        ">80% lose sensitivity after 10 years",
        "Morbilliform rash in children = usually viral exanthem",
        "False PCN allergy \u2192 MRSA, C. diff, longer stays, higher mortality"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "10% of patients are labeled penicillin-allergic but >95% can tolerate penicillin on formal evaluation. IgE to penicillin wanes over time: 80% lose SPT reactivity within 5 years, 98% within 10 years. The most common reason for false labels: viral rash misattributed to amoxicillin (especially EBV + amoxicillin \u2014 maculopapular rash in 80\u2013100% of EBV/amoxicillin patients is NOT IgE).",
      "AAAAI 2022 risk stratification: low-risk patients (vague/non-specific symptoms, >10 years ago, no systemic features) \u2192 graded amoxicillin challenge directly, NO skin testing required. This approach safely de-labels most patients without need for SPT.",
      "Cross-reactivity between penicillins and cephalosporins is determined by R1 side chain identity, NOT the shared beta-lactam ring. True immunologic cross-reactivity <2%. Amoxicillin/ampicillin share R1 with cephalexin/cefadroxil/cefprozil \u2014 higher cross-reactivity risk with these specific pairs."
    ],
    "boardPearls": [
      "Penicillin IgE wanes: 80% at 5 years, 98% at 10 years. Most labels are outdated.",
      "EBV + amoxicillin rash: 80\u2013100% maculopapular rash. NOT IgE. NOT penicillin allergy. Do not label.",
      "PPL (Pre-Pen): major penicillin determinant \u2014 detects 95% of penicillin-specific IgE. Required for skin test.",
      "Low risk \u2192 graded amoxicillin challenge directly (AAAAI 2022). No skin testing needed.",
      "Moderate risk \u2192 skin test first (PPL + pen G). Negative \u2192 graded challenge.",
      "Cross-reactivity: determined by R1 side chain, NOT beta-lactam ring. True cross-reactivity <2%.",
      "Amoxicillin shares R1 with: cephalexin, cefadroxil, cefprozil, cefaclor (higher risk). NOT with ceftriaxone, cefepime, cefuroxime (different R1, safe).",
      "Penicillin allergy impact: 60% more vancomycin use, higher MRSA/CDiff risk, longer hospitalizations."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patricia is anxious about her upcoming surgery and concerned about the allergy issue, but cooperative and eager to resolve the situation safely. She appears somewhat frustrated having avoided many antibiotics her whole life based on a childhood incident she barely remembers.",
    "interviewQuestions": [
      "Can you tell me exactly what happened when you had the reaction to penicillin?",
      "How old were you when this reaction occurred?",
      "What type of rash did you develop - was it itchy, raised, flat, or widespread?",
      "How quickly after taking the medication did the rash appear?",
      "Did you have any trouble breathing, swelling of face or throat, or dizziness?",
      "Have you ever accidentally taken penicillin or related antibiotics since then?",
      "What antibiotics have you safely taken in the past for infections?",
      "Do you have any other drug allergies or reactions?",
      "Have you ever been tested by an allergist for penicillin allergy?",
      "Are you aware that you might need a specific antibiotic for your surgery?",
      "Do you have any family history of drug allergies?",
      "Have you had any recent infections or illnesses?",
      "Are you having any current symptoms like rash, itching, or breathing problems?"
    ],
    "patientResponses": {
      "default": "I'm not sure about that - I just know I need to be careful with antibiotics because of my allergy.",
      "onset": "I was told this happened when I was about 5 years old, so I don't really remember it myself.",
      "character": "My mother said I got some kind of rash, but I honestly don't remember the details - it was over 50 years ago.",
      "location": "I think it was on my body somewhere, but I really can't recall exactly where the rash was.",
      "severity": "I don't know how bad it was - my mother handled everything and just told me to always avoid penicillin.",
      "aggravating": "I've been very careful to avoid all penicillins since then, so I haven't had any problems.",
      "relieving": "I assume it went away on its own, but I really don't have details about the treatment.",
      "associated": "No, I don't remember having trouble breathing, swelling, or anything like that - just a rash.",
      "denies": "No difficulty breathing, no swelling of my face or throat, no dizziness or fainting.",
      "history": "This was just the one time as a child - I've successfully avoided penicillin ever since.",
      "medications": "Amlodipine; Acetaminophen",
      "allergies": "Penicillin",
      "family": "Not that I'm aware of - my mother never mentioned anyone else in the family having drug allergies.",
      "social": "I'm a retired teacher, don't smoke, maybe one glass of wine with dinner, no drugs. I'm quite active which is why I need this knee replacement."
    },
    "examManeuvers": [
      "General appearance and vital signs review",
      "Skin examination for current rash or lesions",
      "Lymph node examination",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination",
      "Examination of knee requiring surgery",
      "Assessment of current medication tolerance",
      "Review of any current allergic symptoms",
      "Documentation of historical reaction details"
    ],
    "examFindings": {
      "General appearance and vital signs review": "Well-appearing woman in no acute distress, vitals stable with mild hypertension",
      "Skin examination for current rash or lesions": "No acute rash, urticaria, or skin lesions present",
      "Lymph node examination": "No lymphadenopathy palpated",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs",
      "Pulmonary examination": "Clear to auscultation bilaterally, no wheezing",
      "Abdominal examination": "Soft, non-tender, no organomegaly",
      "Examination of knee requiring surgery": "Right knee with degenerative changes, limited range of motion",
      "Assessment of current medication tolerance": "Reports tolerating current medications without issue",
      "Review of any current allergic symptoms": "No current symptoms suggestive of allergic reaction",
      "Documentation of historical reaction details": "Patient unable to provide specific details of childhood reaction"
    },
    "ddxTargets": [
      "Low-risk historical penicillin allergy \u2014 negative skin testing; delabeling complete (correct)",
      "High-risk penicillin allergy \u2014 would require full evaluation before any beta-lactam",
      "True penicillin anaphylaxis \u2014 skin test would be positive; reaction was rash, not anaphylaxis",
      "Cross-reactive cephalosporin allergy \u2014 penicillin-cephalosporin cross-reactivity is <2%; cefazolin safe",
      "Viral exanthem misidentified as drug rash \u2014 childhood amoxicillin rash most commonly viral",
      "Stevens-Johnson Syndrome \u2014 severe reaction; history does not support"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the documented 'penicillin allergy' without questioning its validity or investigating the vague historical details",
      "prematureClosure": "Risk of immediately accepting the allergy label and pursuing alternatives without considering penicillin allergy testing or delabeling",
      "availabilityBias": "Risk of overestimating true penicillin allergy prevalence when most childhood 'allergic' reactions are actually viral rashes or non-IgE mediated"
    },
    "coachPrompts": {
      "phase2": "Before interviewing the patient, consider what specific details about this 'penicillin allergy' would help you determine if it's a true IgE-mediated reaction. What percentage of labeled penicillin allergies are actually true allergies? What are the implications for surgical prophylaxis?",
      "phase5": "Now that you've gathered the history, what does the vague nature of this childhood reaction tell you? Consider the timeline, the lack of systemic symptoms, and the patient's inability to provide details. How might this influence your approach to surgical antibiotic prophylaxis?",
      "finalDebrief": "This case illustrates how healthcare providers can help delabel inappropriate drug allergies. Most childhood penicillin 'allergies' are viral rashes coinciding with antibiotic use. The lack of detail, absence of systemic symptoms, and remote timing suggest this patient could likely receive cefazolin safely, potentially after allergy consultation or testing. How did your assessment of this allergy evolve during the case?",
      "final": "Diagnosis: historical low-risk penicillin allergy label, successfully removed. Key teaching points: (1) 90% of penicillin allergy labels are inaccurate \u2014 most represent viral exanthems or non-immune adverse effects. Allergy labeling leads to use of inferior antibiotics with worse outcomes and higher costs. (2) Risk stratification: low-risk = remote childhood rash, no urticaria/angioedema/anaphylaxis \u2192 direct oral amoxicillin challenge acceptable at many centers. Moderate-risk \u2192 full skin testing first. High-risk (prior anaphylaxis, SJS) \u2192 proceed with extreme caution. (3) Skin test sensitivity for immediate IgE reactions is 97-99%. Negative testing = 1-3% residual risk. (4) Penicillin-cephalosporin cross-reactivity is NOT class-based \u2014 it's based on R1 side chain similarity. Amoxicillin-cefadroxil share identical R1 chain (cross-react). Penicillin-cefazolin cross-reactivity is <1%. (5) Cefazolin is the gold-standard SSI prophylactic \u2014 penicillin allergy labeling increases SSI rates by 50%."
    }
  },
  "meta": {
    "diagnosis": "Penicillin Allergy Label \u2014 Low-Risk Historical Reaction; Tolerated Graded Challenge; Label Removed"
  }
};
