
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Aisha Okonkwo",
      "patientHPI": "About three weeks ago I started taking this new seizure medicine, and now I have this terrible rash that started as red spots but is getting much worse - my skin is actually peeling off in sheets and my mouth is full of painful sores that are bleeding.",
      "dob": "09/14/1998",
      "age": "28",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-491251",
      "language": "English",
      "race": "Black/African American",
      "phone": "(803) 555-3363",
      "email": "aisha.okonkwo@email.com",
      "address": "737 Clover St, Denver, CO 80211",
      "insurance": "Aetna HMO",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "CVS Pharmacy \u2014 Main St",
      "emergencyContact": {
        "name": "Michael Okonkwo",
        "phone": "(412) 555-9341",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Lamotrigine",
        "reaction": "SJS (culprit)",
        "severity": "Severe",
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
        "Context",
        "Epilepsy \u2014 started lamotrigine 3 weeks ago, titrated too fast"
      ],
      [
        "Severity",
        "30% BSA detachment, oral mucosa, conjunctival involvement"
      ],
      [
        "HLA",
        "West African descent \u2014 higher prevalence HLA-B*15:13 associated with lamotrigine SJS"
      ],
      [
        "Ophthalmology",
        "Corneal involvement \u2014 risk of permanent visual impairment"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "28yo with 30% BSA skin detachment, oral erosions, and eye involvement \u2014 3 weeks after starting lamotrigine (titrated too rapidly)",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS/TEN (30% BSA) \u2014 lamotrigine culprit",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Rapid titration (should have been 25mg daily x2 weeks, then increase \u2014 was started at 100mg)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Oral mucosal erosions \u2014 unable to eat",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Bilateral conjunctival involvement \u2014 ophthalmology STAT",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Epilepsy \u2014 needs alternative anticonvulsant",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lamotrigine",
          "dose": "STOPPED",
          "route": "",
          "frequency": "Culprit drug",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cyclosporine",
          "dose": "3mg/kg/day",
          "route": "IV",
          "frequency": "SJS/TEN treatment",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Morphine PCA",
          "dose": "",
          "route": "IV",
          "frequency": "Severe pain management",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "IV Fluids",
          "dose": "LR",
          "route": "IV",
          "frequency": "Burn-like fluid resuscitation",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-5",
          "name": "Moxifloxacin eye drops",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "Prevent secondary infection",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "98/58",
          "hr": "112",
          "rr": "22",
          "temp": "38.8\u00b0C",
          "spo2": "95%",
          "pain": "9/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-638424",
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
                  "value": "2.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "L"
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
                  "value": "1.4",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": "H"
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
              "name": "SJS MARKERS",
              "results": [
                {
                  "test": "Granulysin",
                  "value": "Elevated",
                  "unit": "",
                  "range": "",
                  "flag": "H"
                },
                {
                  "test": "Bicarbonate",
                  "value": "18",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": "L"
                },
                {
                  "test": "SCORTEN",
                  "value": "3 (35.3% mortality)",
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
          "cc": "28yo with 30% BSA skin detachment, oral erosions, and eye involvement \u2014 3 weeks after starting lamotrigine (titrated too rapidly)",
          "hpi": "28F with new epilepsy started on lamotrigine 100mg daily 3 weeks ago (should have been 25mg with slow titration). Developed targetoid rash \u2192 rapidly progressing to epidermal detachment. Now 30% BSA detachment with positive Nikolsky sign, hemorrhagic oral erosions, and bilateral conjunctival pseudomembrane formation. SCORTEN 3 = 35.3% mortality risk. Transferred to burn unit. KEY ISSUE: lamotrigine requires SLOW titration to prevent SJS \u2014 this was a prescribing error. HLA-B*15:13 testing sent \u2014 associated with lamotrigine SJS in patients of African descent.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Burn unit admission \u2014 SJS/TEN 30% BSA, ophthalmology co-management, wound care",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS/TEN \u2014 30% BSA, SCORTEN 3",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Burn unit wound care \u2014 non-adherent dressings, strict aseptic technique",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Ophthalmology \u2014 daily amniotic membrane grafts for corneal protection",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Nutrition \u2014 unable to eat, TPN started",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Pain management \u2014 morphine PCA",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Lamotrigine \u2014 culprit, permanently contraindicated",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-7",
          "description": "Neurology \u2014 alternative anticonvulsant (levetiracetam started)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cyclosporine",
          "dose": "3mg/kg/day",
          "route": "IV",
          "frequency": "Immune modulation",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "TPN",
          "dose": "",
          "route": "IV",
          "frequency": "Cannot eat \u2014 oral erosions",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Morphine PCA",
          "dose": "",
          "route": "IV",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Levetiracetam",
          "dose": "500mg",
          "route": "IV",
          "frequency": "BID (alternative anticonvulsant)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-5",
          "name": "Amniotic membrane",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "Daily for corneal protection",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "102/62",
          "hr": "98",
          "rr": "18",
          "temp": "38.2\u00b0C",
          "spo2": "97%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-180329",
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
          "cc": "Burn unit admission \u2014 SJS/TEN 30% BSA, ophthalmology co-management, wound care",
          "hpi": "28F day 3 in burn unit. BSA stable at 30% \u2014 not progressing. Cyclosporine started early \u2014 may be limiting extension. Ophthalmology performing daily slit lamp and amniotic membrane placement \u2014 corneal epithelial defects bilateral but no perforation. Nutrition via TPN. Pain managed on PCA. Neurology switched to levetiracetam for seizure control. HLA-B*15:13 testing: POSITIVE \u2014 this patient has the genetic susceptibility marker. First-degree relatives should be tested before any aromatic anticonvulsant use.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 culprit drug identification, cross-reactivity, permanent drug avoidance list, HLA implications",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS/TEN \u2014 lamotrigine culprit (confirmed by timeline, HLA positive)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Aromatic anticonvulsants \u2014 cross-reactivity risk (phenytoin, carbamazepine, oxcarbazepine all carry SJS risk)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "HLA-B*15:13 positive \u2014 family screening recommended",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Permanent drug avoidance: lamotrigine, carbamazepine, phenytoin, oxcarbazepine",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Safe alternatives: levetiracetam, valproate, topiramate, lacosamide",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Levetiracetam",
          "dose": "750mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Artificial tears preservative-free",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "Q1H while awake",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Triamcinolone 0.025%",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to re-epithelializing areas",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "112/68",
          "hr": "82",
          "rr": "16",
          "temp": "37.2\u00b0C",
          "spo2": "98%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-427730",
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
          "cc": "A/I consult \u2014 culprit drug identification, cross-reactivity, permanent drug avoidance list, HLA implications",
          "hpi": "A/I consult: 28F with lamotrigine SJS/TEN. Drug avoidance list: ALL aromatic anticonvulsants (lamotrigine, carbamazepine, phenytoin, phenobarbital, oxcarbazepine) \u2014 cross-reactive aromatic amine structure. Safe anticonvulsants: levetiracetam, valproate, topiramate, lacosamide, gabapentin. HLA-B*15:13 positive \u2014 siblings and children should be tested BEFORE any aromatic anticonvulsant. Medical alert: \"SJS/TEN \u2014 Lamotrigine. Avoid ALL aromatic anticonvulsants.\" Dermatology, ophthalmology, gynecology (mucosal scarring) follow-up arranged.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "SJS/TEN follow-up \u2014 8 weeks, skin healing, eye assessment, drug avoidance review",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS/TEN \u2014 healed, post-inflammatory hyperpigmentation",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Eyes \u2014 bilateral dry eye syndrome (permanent sequelae), no corneal scarring (amniotic membranes prevented)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Skin \u2014 15% area with hypertrophic scarring",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Seizures controlled on levetiracetam",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Drug avoidance list in all pharmacy systems",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "HLA results shared with family \u2014 sister tested positive, informed her neurologist",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Levetiracetam",
          "dose": "750mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cyclosporine 0.05% eye drops",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "BID (chronic dry eye)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Artificial tears",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "Q2H PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Sunscreen SPF 50",
          "dose": "",
          "route": "Topical",
          "frequency": "Daily (hyperpigmented areas)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "116/72",
          "hr": "76",
          "rr": "14",
          "temp": "36.8\u00b0C",
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
          "accession": "LAB-263097",
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
          "cc": "SJS/TEN follow-up \u2014 8 weeks, skin healing, eye assessment, drug avoidance review",
          "hpi": "28F 8 weeks post-SJS/TEN. Skin healed with post-inflammatory hyperpigmentation and some hypertrophic scarring \u2014 dermatology managing. Eyes: bilateral chronic dry eye (meibomian gland dysfunction from inflammation) but NO corneal scarring \u2014 early amniotic membranes saved her vision. Seizures well-controlled on levetiracetam. Sister HLA-B*15:13 positive \u2014 her neurologist notified, will avoid aromatic anticonvulsants. Patient processing psychological trauma \u2014 PTSD screening positive, therapy referral placed. Medical alert bracelet and pharmacy database all updated.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Aisha Okonkwo",
    "dob": "09/14/1998",
    "age": "28",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-491251",
    "language": "English",
    "race": "Black/African American",
    "phone": "(505) 555-9193",
    "email": "aisha.okonkwo@email.com",
    "address": "7587 N Western Ave, Milwaukee, WI 53207",
    "insurance": "Aetna HMO",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Michael Okonkwo",
      "phone": "(312) 555-1742",
      "relationship": "Spouse"
    },
    "chiefComplaint": "28yo with 30% BSA skin detachment, oral erosions, and eye involvement \u2014 3 weeks after starting lamotrigine (titrated too rapidly)",
    "diagnosis": "SJS/TEN"
  },
  "problems": [
    {
      "problem": "SJS/TEN overlap \u2014 18% BSA epidermal detachment, lamotrigine",
      "icd": "L51.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Fatima Hassan, 29F \u2014 lamotrigine started 3 weeks ago for epilepsy. Fever, atypical targets, mucosal erosions, skin sloughing 18% BSA."
    },
    {
      "problem": "Mucosal involvement \u2014 oral, conjunctival, genital erosions",
      "icd": "L51.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Oral hemorrhagic crusting, bilateral conjunctival erosions, urogenital mucosal involvement. All 3 mucosal sites affected."
    },
    {
      "problem": "Sepsis risk \u2014 loss of skin barrier, secondary bacteremia",
      "icd": "L51.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Skin barrier disruption = open wound \u2014 similar to burns. ICU burn unit setting provides wound care expertise, infection monitoring, and nutritional support."
    }
  ],
  "medications": [
    {
      "name": "STOP lamotrigine \u2014 causative drug",
      "sig": "Immediate discontinuation mandatory. Document allergy. Cross-reactivity with aromatic anticonvulsants possible.",
      "prescriber": "Neurology/Dermatology",
      "start": "DISCONTINUE",
      "refills": 0,
      "status": "DISCONTINUED"
    },
    {
      "name": "IVIG 1g/kg/day x3 days \u2014 adjunct immunomodulation",
      "sig": "High-dose IVIG \u2014 blocks Fas-FasL pathway (apoptosis mechanism in TEN). Evidence supports use in SJS/TEN \u226510% BSA.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Cyclosporine 3-5mg/kg/day \u2014 immunosuppression",
      "sig": "Cyclosporine inhibits T-cell activation driving keratinocyte apoptosis. Some evidence supports superior outcomes vs IVIG in TEN.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 with ophthalmology monitoring"
    },
    {
      "name": "Wound care \u2014 non-adherent dressings, no debridement",
      "sig": "Denuded skin treated like partial-thickness burns. Non-adherent silicone dressings. Do NOT debride viable skin. Daily wound assessment.",
      "prescriber": "Burn Unit",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Lamotrigine",
      "reaction": "SJS (culprit)",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "98/58",
      "hr": "112",
      "rr": "22",
      "temp": "38.8\u00b0C",
      "spo2": "95%",
      "pain": "9/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "28yo with 30% BSA skin detachment, oral erosions, and eye involvement \u2014 3 weeks after starting lamotrigine (titrated too rapidly)",
      "hpi": "28F with new epilepsy started on lamotrigine 100mg daily 3 weeks ago (should have been 25mg with slow titration). Developed targetoid rash \u2192 rapidly progressing to epidermal detachment. Now 30% BSA detachment with positive Nikolsky sign, hemorrhagic oral erosions, and bilateral conjunctival pseudomembrane formation. SCORTEN 3 = 35.3% mortality risk. Transferred to burn unit. KEY ISSUE: lamotrigine requires SLOW titration to prevent SJS \u2014 this was a prescribing error. HLA-B*15:13 testing sent \u2014 associated with lamotrigine SJS in patients of African descent.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "TEN Assessment",
      "results": [
        {
          "test": "SCORTEN score",
          "value": "3",
          "unit": "/7 points",
          "ref": "Score 3 = ~35% mortality",
          "flag": "H"
        },
        {
          "test": "Glucose",
          "value": "168",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.4",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Albumin",
          "value": "2.8",
          "unit": "g/dL",
          "ref": "3.5-5.0",
          "flag": "L"
        },
        {
          "test": "BSA detachment",
          "value": "18",
          "unit": "%",
          "ref": "<10% SJS",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "3.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "L"
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
      "Context",
      "Epilepsy \u2014 started lamotrigine 3 weeks ago, titrated too fast"
    ],
    [
      "Severity",
      "30% BSA detachment, oral mucosa, conjunctival involvement"
    ],
    [
      "HLA",
      "West African descent \u2014 higher prevalence HLA-B*15:13 associated with lamotrigine SJS"
    ],
    [
      "Ophthalmology",
      "Corneal involvement \u2014 risk of permanent visual impairment"
    ]
  ],
  "references": [
    {
      "id": "SCORTEN-2000",
      "title": "SCORTEN: severity-of-illness score for toxic epidermal necrolysis",
      "authors": "Bastuji-Garin S, Fouchard N, Bertocchi M, et al.",
      "journal": "J Invest Dermatol",
      "year": 2000,
      "doi": "10.1046/j.1523-1747.2000.00061.x",
      "url": "https://pubmed.ncbi.nlm.nih.gov/10998259/",
      "openAccess": true,
      "validates": [
        "SCORTEN mortality prediction",
        "7 clinical parameters",
        "Score 3 = 35.3% mortality"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Aisha appears anxious and in significant pain, with visible skin lesions and difficulty speaking due to oral erosions. She is cooperative but distressed, frequently touching her face and eyes, and speaks in short sentences due to discomfort.",
    "interviewQuestions": [
      "Can you tell me about the rash and when it first started?",
      "What did the rash look like when it first appeared?",
      "Have you started any new medications recently?",
      "How quickly did the rash spread and change?",
      "Are you having any mouth pain or difficulty swallowing?",
      "Are you experiencing any eye pain or vision changes?",
      "Have you had any fever or feeling unwell?",
      "Are you having any trouble breathing?",
      "Have you ever had a reaction like this before?",
      "Do you have any family history of drug allergies or skin reactions?",
      "What medications are you currently taking?",
      "Do you have any known drug allergies?",
      "Why were you started on the new seizure medication?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble talking because my mouth hurts so much. Can you repeat that?",
      "onset": "The rash started about 5 days ago, maybe a week after I increased my seizure medication dose. It began on my chest and face.",
      "character": "It started as red spots that looked like targets, then the skin started peeling off in sheets. My mouth and lips are covered in painful sores.",
      "location": "It's all over my chest, back, arms, and face. My mouth, lips, and eyes are really affected too.",
      "severity": "The pain is about 8 out of 10. I can barely eat or drink anything. Even opening my eyes hurts.",
      "aggravating": "Any movement makes the skin hurt more. Light bothers my eyes terribly. I can't eat anything.",
      "relieving": "The pain medication helps a little, but nothing really makes it better. Cold compresses make it worse.",
      "associated": "I've had fever, chills, and feel really weak. My eyes are burning and tearing constantly.",
      "denies": "No trouble breathing, no joint pain, no previous skin problems like this ever.",
      "history": "Never had anything like this before. I've never had bad reactions to medications.",
      "medications": "Lamotrigine; Cyclosporine; Morphine PCA; IV Fluids; Moxifloxacin eye drops",
      "allergies": "Lamotrigine",
      "family": "No family history of drug allergies or skin problems that I know of.",
      "social": "I work as a teacher. I don't smoke or drink alcohol. I was just diagnosed with epilepsy last month after having my first seizure."
    },
    "examManeuvers": [
      "Assess percentage of body surface area involvement",
      "Examine skin for epidermal detachment and Nikolsky sign",
      "Inspect oral mucosa and lips",
      "Ophthalmologic examination of conjunctiva and cornea",
      "Assess for lymphadenopathy",
      "Examine for targetoid lesions",
      "Check vital signs and hemodynamic stability",
      "Assess hydration status",
      "Listen to lung sounds",
      "Neurologic examination for seizure history"
    ],
    "examFindings": {
      "Assess percentage of body surface area involvement": "Approximately 30% BSA with epidermal detachment involving trunk, arms, and face",
      "Examine skin for epidermal detachment and Nikolsky sign": "Positive Nikolsky sign with easy separation of epidermis, large areas of denuded skin with serous drainage",
      "Inspect oral mucosa and lips": "Severe erosions of buccal mucosa, lips, and tongue with hemorrhagic crusting, unable to open mouth fully",
      "Ophthalmologic examination of conjunctiva and cornea": "Bilateral conjunctival injection and erosions, early corneal epithelial defects, photophobia",
      "Assess for lymphadenopathy": "No significant lymphadenopathy palpated",
      "Examine for targetoid lesions": "Few remaining targetoid lesions on extremities, most areas now show confluent epidermal loss",
      "Check vital signs and hemodynamic stability": "Tachycardic, hypotensive, febrile - consistent with systemic inflammatory response",
      "Assess hydration status": "Signs of dehydration with poor skin turgor in unaffected areas, dry mucous membranes",
      "Listen to lung sounds": "Clear bilaterally, no respiratory involvement",
      "Neurologic examination for seizure history": "Alert and oriented, no focal neurologic deficits, no recent seizure activity"
    },
    "ddxTargets": [
      "SJS/TEN overlap \u2014 18% BSA, mucosal erosions, lamotrigine (correct)",
      "EM major \u2014 <10% BSA, true target lesions, HSV-triggered; atypical targets and detachment indicate SJS/TEN",
      "SSSS (staphylococcal scalded skin) \u2014 children, no mucosal involvement, Nikolsky positive but superficial cleavage",
      "Pemphigus vulgaris \u2014 acantholysis on biopsy, no drug history, chronic onset",
      "Linear IgA bullous dermatosis \u2014 linear IgA on DIF; drug-induced variant possible",
      "Bullous pemphigoid \u2014 elderly, tense blisters, eosinophilia, different DIF pattern"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'skin rash' and miss the severity and systemic nature of SJS/TEN, or focus only on dermatologic causes",
      "prematureClosure": "Might stop at erythema multiforme without recognizing the mucosal involvement and BSA percentage indicating SJS/TEN",
      "availabilityBias": "Common skin conditions like eczema or contact dermatitis may come to mind first, missing the drug-induced severe cutaneous reaction"
    },
    "coachPrompts": {
      "phase2": "You've identified some concerning skin findings. What specific historical details would help you distinguish between different severe cutaneous drug reactions? Think about timing, medication history, and the pattern of involvement.",
      "phase5": "Now that you've examined the patient and noted the extensive skin detachment, mucosal involvement, and systemic signs - what classification criteria might help you determine the severity and guide urgent management needs?",
      "finalDebrief": "This case highlights SJS/TEN from rapid lamotrigine titration. How did the 30% BSA involvement, mucosal erosions, and medication timing help distinguish this from other vesiculobullous disorders? What immediate interventions does this patient need, and why is ophthalmology consultation emergent?",
      "final": "Diagnosis: SJS/TEN overlap (18% BSA). Key learning: (1) SJS/TEN classification by BSA detachment: SJS = <10%, SJS/TEN overlap = 10-30%, TEN = >30%. More BSA = higher mortality. All involve ATYPICAL target lesions (flat, 2-zone, dusky center + surrounding erythema \u2014 NOT the classic 3-zone EM target) and mucosal involvement (oral, ocular, genital). (2) SCORTEN prognostic score: Age >40, malignancy, HR >120, initial BSA >10%, BUN >28, serum glucose >252, bicarbonate <20. Each point = increasing mortality. Score 3 = ~35% mortality. Score \u22655 = >90%. Used to guide ICU triage. (3) Ophthalmologic emergency: conjunctival erosions in SJS/TEN cause symblepharon (adhesion of conjunctiva to lid) and corneal scarring \u2192 blindness. Ophthalmology consult DAILY from day 1. Amniotic membrane grafts if severe. This is the most preventable long-term complication. (4) IVIG vs cyclosporine: meta-analyses suggest cyclosporine (3-5 mg/kg/day) may have superior outcomes vs IVIG in TEN. Many centers now use cyclosporine first-line. TNF-alpha inhibitors (etanercept, thalidomide) \u2014 some evidence but not standard of care. Steroids are controversial. (5) Lamotrigine SJS/TEN: lamotrigine is one of the most common causes of SJS/TEN among anticonvulsants. Risk is highest in the first 8 weeks, with rapid titration, and in patients also on valproate (inhibits lamotrigine metabolism \u2192 higher drug levels \u2192 higher risk). Slow titration protocols exist precisely to reduce this risk."
    }
  },
  "meta": {
    "diagnosis": "Stevens-Johnson Syndrome / TEN \u2014 Lamotrigine-Induced, Epidermal Detachment 18%, ICU Burn Unit Transfer",
    "caseId": "sjs-ten-v2"
  }
};
