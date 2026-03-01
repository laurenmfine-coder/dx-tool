// Virtual EMR Case: Thrombotic Thrombocytopenic Purpura (TTP)
// Variant: ttp | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Amanda Lewis",
    "dob": "08/28/1988",
    "age": 37,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Aetna PPO",
    "pcp": "Dr. Laura Chen, MD",
    "pharmacy": "CVS \u2014 Plantation, FL",
    "language": "English",
    "race": "Black",
    "address": "521 NW 65th Ave, Plantation, FL",
    "phone": "(954) 555-7788",
    "email": "a.lewis88@email.com",
    "emergencyContact": {
      "name": "Robert Lewis (Father)",
      "phone": "(954) 555-7804"
    },
    "mrn": "RDX-2025-24305"
  },
  "problems": [
    {
      "problem": "SLE (Systemic Lupus Erythematosus)",
      "icd": "M32.9",
      "onset": "2018",
      "status": "Active",
      "notes": "Mild disease \u2014 arthritis, rash, positive ANA/dsDNA; on hydroxychloroquine"
    }
  ],
  "medications": [
    {
      "name": "Hydroxychloroquine 200mg BID",
      "sig": "PO BID",
      "prescriber": "Rheumatology",
      "start": "06/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Vitamin D3 2000IU daily",
      "sig": "PO daily",
      "prescriber": "Dr. Chen",
      "start": "01/2020",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "142/88",
      "hr": 108,
      "rr": 18,
      "temp": "101.2\u00b0F",
      "spo2": "98%",
      "wt": "155 lbs",
      "ht": "5'7\"",
      "bmi": 24.3,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Fatigue, bruising, confusion, dark urine x 5 days",
      "hpi": "37F with SLE presents with 5 days of progressive fatigue, easy bruising, petechiae on legs, confusion (difficulty with word-finding, got lost driving home), dark tea-colored urine, and low-grade fevers. Co-worker noted she 'seemed off' and her eyes looked yellow. No bleeding (no epistaxis, melena, hematuria). No recent medication changes. Pentad concern: thrombocytopenia, hemolytic anemia, renal dysfunction, neurologic symptoms, fever \u2014 classic TTP.",
      "exam": "Jaundiced sclera. Petechiae on bilateral lower extremities and trunk. Ecchymoses on arms. Confused \u2014 oriented x 2 (not to date). Word-finding difficulty. No focal neurologic deficits. Spleen not palpable. No lymphadenopathy. Skin: Discoid lupus rash on face (chronic).",
      "assessment": "1. TTP \u2014 thrombotic thrombocytopenic purpura. PLASMIC score: 7 (high probability). Classic pentad present.\n2. MEDICAL EMERGENCY \u2014 mortality >90% untreated; <20% with plasma exchange\n3. Likely autoimmune TTP (SLE association with ADAMTS13 inhibitor)\n4. DO NOT TRANSFUSE PLATELETS \u2014 may worsen thrombotic microangiopathy",
      "plan": "1. STAT ADAMTS13 activity and inhibitor level (send BEFORE treatment but do NOT delay treatment)\n2. Emergent plasma exchange (TPE) \u2014 call blood bank and apheresis team\n3. Methylprednisolone 1g IV daily x 3 days (pulse steroids)\n4. Caplacizumab \u2014 anti-vWF nanobody if available (reduces time to remission)\n5. CBC, reticulocyte count, LDH, haptoglobin, direct Coombs, peripheral smear\n6. Renal panel, UA\n7. DO NOT TRANSFUSE PLATELETS unless life-threatening hemorrhage\n8. Hematology STAT consult\n9. ICU admission\n10. Daily ADAMTS13 and platelet count to monitor response"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "12:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 12:10",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-260471",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "10.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "7.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "12",
              "unit": "K/uL",
              "range": "150-400",
              "flag": "L"
            },
            {
              "test": "Reticulocyte Count",
              "value": "8.2",
              "unit": "%",
              "range": "0.5-2.5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "HEMOLYSIS PANEL",
          "results": [
            {
              "test": "LDH",
              "value": "1,842",
              "unit": "U/L",
              "range": "140-280",
              "flag": "H"
            },
            {
              "test": "Haptoglobin",
              "value": "<10",
              "unit": "mg/dL",
              "range": "30-200",
              "flag": "L"
            },
            {
              "test": "Indirect Bilirubin",
              "value": "4.8",
              "unit": "mg/dL",
              "range": "0.1-1.0",
              "flag": "H"
            },
            {
              "test": "Direct Coombs",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "Peripheral Smear",
              "value": "Schistocytes 4+ per HPF",
              "unit": "",
              "range": "0",
              "flag": "H"
            }
          ]
        },
        {
          "name": "RENAL",
          "results": [
            {
              "test": "Creatinine",
              "value": "1.8",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "28",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "UA Protein",
              "value": "2+",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            }
          ]
        },
        {
          "name": "TTP SPECIFIC",
          "results": [
            {
              "test": "ADAMTS13 Activity",
              "value": "<5",
              "unit": "%",
              "range": ">67",
              "flag": "L"
            },
            {
              "test": "ADAMTS13 Inhibitor",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
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
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8001",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2101",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "03/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-502",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: SLE, alive at 62",
    "Father: HTN, alive at 64",
    "Sister: Raynaud phenomenon, alive at 34"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Paralegal"
    ],
    [
      "Marital",
      "Single"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Exercise",
      "Yoga 2x/week"
    ]
  ],
  "meta": {
    "caseId": "ttp",
    "diagnosis": "Thrombotic Thrombocytopenic Purpura (TTP)",
    "acuity": 2,
    "presentation": "Hematologic Emergency",
    "category": "hematologic"
  }
};
