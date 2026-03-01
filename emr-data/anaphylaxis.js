// Virtual EMR Case: Anaphylaxis (Food-Triggered — Cashew Exposure)
// Variant: anaphylaxis | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Priya Sharma",
    "dob": "07/14/1998",
    "age": 27,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. David Chen, MD",
    "pharmacy": "CVS \u2014 Fort Lauderdale, FL",
    "language": "English",
    "race": "Asian (South Asian)",
    "address": "2240 SW 3rd Ave, Fort Lauderdale, FL",
    "phone": "(954) 555-2918",
    "email": "p.sharma98@email.com",
    "emergencyContact": {
      "name": "Ravi Sharma (Father)",
      "phone": "(954) 555-2930"
    },
    "mrn": "RDX-2025-61303"
  },
  "problems": [
    {
      "problem": "Tree Nut Allergy \u2014 Prior Anaphylaxis",
      "icd": "T78.05XA",
      "onset": "2015",
      "status": "Active",
      "notes": "Prior cashew anaphylaxis; carries EpiPen; allergist-confirmed"
    },
    {
      "problem": "Allergic Rhinitis",
      "icd": "J30.9",
      "onset": "2012",
      "status": "Active",
      "notes": "Seasonal; cetirizine PRN"
    }
  ],
  "medications": [
    {
      "name": "EpiPen 0.3mg IM PRN",
      "sig": "Use for anaphylaxis",
      "prescriber": "Dr. Chen",
      "start": "01/2016",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Cetirizine 10mg PRN",
      "sig": "PO daily as needed",
      "prescriber": "Dr. Chen",
      "start": "04/2020",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Tree Nuts (Cashew, Pistachio)",
      "type": "Food",
      "reaction": "Anaphylaxis",
      "severity": "Severe/Life-Threatening",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "78/42",
      "hr": 132,
      "rr": 28,
      "temp": "98.6\u00b0F",
      "spo2": "91%",
      "wt": "130 lbs",
      "ht": "5'4\"",
      "bmi": 22.3,
      "setting": "ED Resus"
    },
    {
      "date": "02/26/2026",
      "bp": "102/68",
      "hr": 104,
      "rr": 20,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "130 lbs",
      "ht": "5'4\"",
      "bmi": 22.3,
      "setting": "Post-Epi 15min"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Allergic reaction \u2014 difficulty breathing, hives after restaurant meal",
      "hpi": "27F with tree nut allergy. Ate pad thai with hidden cashews 30min ago. Within 10min: diffuse urticaria, lip/tongue swelling, throat tightness, wheezing. Self-administered EpiPen with partial improvement but symptoms recurring. EMS gave diphenhydramine 50mg IV. Stridor noted, BP 78/42.",
      "exam": "Diffuse urticaria. Lip edema, tongue swollen. Oropharyngeal edema, mild stridor. Bilateral wheezing. Tachycardic. Confluent urticarial plaques on trunk/extremities.",
      "assessment": "1. Anaphylaxis \u2014 food-triggered (cashew) with respiratory and cardiovascular compromise\n2. Biphasic reaction risk",
      "plan": "1. Epinephrine 0.3mg IM (2nd dose)\n2. IV NS 1L bolus\n3. Methylprednisolone 125mg IV\n4. Famotidine 20mg IV\n5. Continuous albuterol nebulization\n6. Prepare for intubation\n7. Tryptase level\n8. Observe 8 hours\n9. Allergy referral; new EpiPen Rx"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "16:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 16:00",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-02261600",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "12.4",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "262",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Eosinophils",
              "value": "8.2",
              "unit": "%",
              "range": "1-4",
              "flag": "H"
            }
          ]
        },
        {
          "name": "ANAPHYLAXIS",
          "results": [
            {
              "test": "Tryptase",
              "value": "42.8",
              "unit": "ng/mL",
              "range": "<11.4",
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
      "vaccine": "COVID-19 Booster (Pfizer)",
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
    "Father: Asthma, alive at 58",
    "Mother: Allergic rhinitis, alive at 55",
    "Brother: Peanut allergy, alive at 24"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Software engineer"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social"
    ],
    [
      "Exercise",
      "Yoga 4x/week"
    ]
  ],
  "meta": {
    "caseId": "anaphylaxis",
    "diagnosis": "Anaphylaxis (Food-Triggered \u2014 Cashew Exposure)",
    "acuity": 1,
    "presentation": "Allergic Reaction",
    "category": "immunologic"
  }
};
