/* emr-data/sjs-ten-v2.js — Variation: SJS/TEN */
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
      "pharmacy": "CVS Pharmacy — Main St",
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
        "Epilepsy — started lamotrigine 3 weeks ago, titrated too fast"
      ],
      [
        "Severity",
        "30% BSA detachment, oral mucosa, conjunctival involvement"
      ],
      [
        "HLA",
        "West African descent — higher prevalence HLA-B*15:13 associated with lamotrigine SJS"
      ],
      [
        "Ophthalmology",
        "Corneal involvement — risk of permanent visual impairment"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "28yo with 30% BSA skin detachment, oral erosions, and eye involvement — 3 weeks after starting lamotrigine (titrated too rapidly)",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS/TEN (30% BSA) — lamotrigine culprit",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Rapid titration (should have been 25mg daily x2 weeks, then increase — was started at 100mg)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Oral mucosal erosions — unable to eat",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Bilateral conjunctival involvement — ophthalmology STAT",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Epilepsy — needs alternative anticonvulsant",
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
          "temp": "38.8°C",
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
                  "unit": "x10³/µL",
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
          "cc": "28yo with 30% BSA skin detachment, oral erosions, and eye involvement — 3 weeks after starting lamotrigine (titrated too rapidly)",
          "hpi": "28F with new epilepsy started on lamotrigine 100mg daily 3 weeks ago (should have been 25mg with slow titration). Developed targetoid rash → rapidly progressing to epidermal detachment. Now 30% BSA detachment with positive Nikolsky sign, hemorrhagic oral erosions, and bilateral conjunctival pseudomembrane formation. SCORTEN 3 = 35.3% mortality risk. Transferred to burn unit. KEY ISSUE: lamotrigine requires SLOW titration to prevent SJS — this was a prescribing error. HLA-B*15:13 testing sent — associated with lamotrigine SJS in patients of African descent.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Burn unit admission — SJS/TEN 30% BSA, ophthalmology co-management, wound care",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS/TEN — 30% BSA, SCORTEN 3",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Burn unit wound care — non-adherent dressings, strict aseptic technique",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Ophthalmology — daily amniotic membrane grafts for corneal protection",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Nutrition — unable to eat, TPN started",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Pain management — morphine PCA",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Lamotrigine — culprit, permanently contraindicated",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-7",
          "description": "Neurology — alternative anticonvulsant (levetiracetam started)",
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
          "frequency": "Cannot eat — oral erosions",
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
          "temp": "38.2°C",
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
          "cc": "Burn unit admission — SJS/TEN 30% BSA, ophthalmology co-management, wound care",
          "hpi": "28F day 3 in burn unit. BSA stable at 30% — not progressing. Cyclosporine started early — may be limiting extension. Ophthalmology performing daily slit lamp and amniotic membrane placement — corneal epithelial defects bilateral but no perforation. Nutrition via TPN. Pain managed on PCA. Neurology switched to levetiracetam for seizure control. HLA-B*15:13 testing: POSITIVE — this patient has the genetic susceptibility marker. First-degree relatives should be tested before any aromatic anticonvulsant use.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — culprit drug identification, cross-reactivity, permanent drug avoidance list, HLA implications",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS/TEN — lamotrigine culprit (confirmed by timeline, HLA positive)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Aromatic anticonvulsants — cross-reactivity risk (phenytoin, carbamazepine, oxcarbazepine all carry SJS risk)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "HLA-B*15:13 positive — family screening recommended",
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
          "temp": "37.2°C",
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
          "cc": "A/I consult — culprit drug identification, cross-reactivity, permanent drug avoidance list, HLA implications",
          "hpi": "A/I consult: 28F with lamotrigine SJS/TEN. Drug avoidance list: ALL aromatic anticonvulsants (lamotrigine, carbamazepine, phenytoin, phenobarbital, oxcarbazepine) — cross-reactive aromatic amine structure. Safe anticonvulsants: levetiracetam, valproate, topiramate, lacosamide, gabapentin. HLA-B*15:13 positive — siblings and children should be tested BEFORE any aromatic anticonvulsant. Medical alert: \"SJS/TEN — Lamotrigine. Avoid ALL aromatic anticonvulsants.\" Dermatology, ophthalmology, gynecology (mucosal scarring) follow-up arranged.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "SJS/TEN follow-up — 8 weeks, skin healing, eye assessment, drug avoidance review",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SJS/TEN — healed, post-inflammatory hyperpigmentation",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Eyes — bilateral dry eye syndrome (permanent sequelae), no corneal scarring (amniotic membranes prevented)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Skin — 15% area with hypertrophic scarring",
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
          "description": "HLA results shared with family — sister tested positive, informed her neurologist",
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
          "cc": "SJS/TEN follow-up — 8 weeks, skin healing, eye assessment, drug avoidance review",
          "hpi": "28F 8 weeks post-SJS/TEN. Skin healed with post-inflammatory hyperpigmentation and some hypertrophic scarring — dermatology managing. Eyes: bilateral chronic dry eye (meibomian gland dysfunction from inflammation) but NO corneal scarring — early amniotic membranes saved her vision. Seizures well-controlled on levetiracetam. Sister HLA-B*15:13 positive — her neurologist notified, will avoid aromatic anticonvulsants. Patient processing psychological trauma — PTSD screening positive, therapy referral placed. Medical alert bracelet and pharmacy database all updated.",
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
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Michael Okonkwo",
      "phone": "(312) 555-1742",
      "relationship": "Spouse"
    },
    "chiefComplaint": "28yo with 30% BSA skin detachment, oral erosions, and eye involvement — 3 weeks after starting lamotrigine (titrated too rapidly)",
    "diagnosis": "SJS/TEN"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "SJS/TEN (30% BSA) — lamotrigine culprit",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Rapid titration (should have been 25mg daily x2 weeks, then increase — was started at 100mg)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Oral mucosal erosions — unable to eat",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Bilateral conjunctival involvement — ophthalmology STAT",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Epilepsy — needs alternative anticonvulsant",
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
      "temp": "38.8°C",
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
      "cc": "28yo with 30% BSA skin detachment, oral erosions, and eye involvement — 3 weeks after starting lamotrigine (titrated too rapidly)",
      "hpi": "28F with new epilepsy started on lamotrigine 100mg daily 3 weeks ago (should have been 25mg with slow titration). Developed targetoid rash → rapidly progressing to epidermal detachment. Now 30% BSA detachment with positive Nikolsky sign, hemorrhagic oral erosions, and bilateral conjunctival pseudomembrane formation. SCORTEN 3 = 35.3% mortality risk. Transferred to burn unit. KEY ISSUE: lamotrigine requires SLOW titration to prevent SJS — this was a prescribing error. HLA-B*15:13 testing sent — associated with lamotrigine SJS in patients of African descent.",
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
              "unit": "x10³/µL",
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
      "Epilepsy — started lamotrigine 3 weeks ago, titrated too fast"
    ],
    [
      "Severity",
      "30% BSA detachment, oral mucosa, conjunctival involvement"
    ],
    [
      "HLA",
      "West African descent — higher prevalence HLA-B*15:13 associated with lamotrigine SJS"
    ],
    [
      "Ophthalmology",
      "Corneal involvement — risk of permanent visual impairment"
    ]
  ]
,"references":[
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
]};
