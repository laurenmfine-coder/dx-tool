// Virtual EMR Case: Acute Aortic Dissection (Type B — Descending)
// Variant: aortic-dissection-back | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Raymond Foster",
    "dob": "12/01/1960",
    "age": 65,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Cigna PPO",
    "pcp": "Dr. William Park, MD",
    "pharmacy": "Publix \u2014 Coral Springs, FL",
    "language": "English",
    "race": "White",
    "address": "9420 NW 46th Ct, Coral Springs, FL",
    "phone": "(954) 555-1188",
    "email": "r.foster60@email.com",
    "emergencyContact": {
      "name": "Patricia Foster (Wife)",
      "phone": "(954) 555-1204"
    },
    "mrn": "RDX-2025-75173"
  },
  "problems": [
    {
      "problem": "Hypertension \u2014 Poorly Controlled",
      "icd": "I10",
      "onset": "1998",
      "status": "Active",
      "notes": "On 3-drug regimen; BP often 160-170s systolic; non-adherent with medications"
    },
    {
      "problem": "Marfan Syndrome",
      "icd": "Q87.40",
      "onset": "1985",
      "status": "Active",
      "notes": "Diagnosed age 25; tall habitus, lens subluxation corrected surgically; aortic root 4.0 cm (monitored); mitral valve prolapse with mild MR"
    },
    {
      "problem": "Bicuspid Aortic Valve",
      "icd": "Q23.1",
      "onset": "1985",
      "status": "Active",
      "notes": "Mild AI; monitored"
    }
  ],
  "medications": [
    {
      "name": "Losartan 100mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Park",
      "start": "03/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metoprolol Succinate 200mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Park",
      "start": "01/2000",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Park",
      "start": "09/2020",
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
      "bp": "198/112 (R arm) / 148/88 (L arm)",
      "hr": 108,
      "rr": 22,
      "temp": "98.6\u00b0F",
      "spo2": "98% R / 94% L",
      "wt": "195 lbs",
      "ht": "6'4\"",
      "bmi": 23.7,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "142/82 (R arm)",
      "hr": 72,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "195 lbs",
      "ht": "6'4\"",
      "bmi": 23.7,
      "setting": "ED \u2014 Post-Esmolol"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. Sarah Mitchell, MD",
      "cc": "Sudden severe tearing back pain",
      "hpi": "65M with Marfan syndrome and poorly controlled HTN presents with sudden onset severe interscapular pain 2 hours ago while straining during bowel movement. Describes as 'ripping/tearing' 10/10 pain radiating to lower back. Associated with diaphoresis and lightheadedness. Notes L arm feels 'cold and weak.' BP differential: R arm 198/112, L arm 148/88. Pulse ox differential noted.",
      "exam": "Diaphoretic, distressed. BP differential >30 mmHg systolic (R>L). Pulse ox differential (R 98%, L 94%). Marfanoid habitus. CV: Soft early diastolic murmur (AI). Abdomen: Soft, mild epigastric tenderness. Extremities: L radial pulse diminished vs R. L arm slightly mottled.",
      "assessment": "1. ACUTE AORTIC DISSECTION \u2014 Type B (descending). Tearing pain, BP differential, pulse deficit, Marfan syndrome\n2. Hypertensive emergency \u2014 target HR <60, SBP <120\n3. High risk \u2014 Marfan + bicuspid valve + uncontrolled HTN",
      "plan": "1. STAT CT aorta with IV contrast\n2. Esmolol drip \u2014 target HR <60, SBP <120\n3. Pain control: morphine 4mg IV (avoid raising HR/BP)\n4. Cardiothoracic surgery STAT consult\n5. Type & screen 6 units pRBC\n6. Bilateral arm BPs q15min\n7. Foley for strict I/O\n8. ICU bed requested"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "11:00",
      "orderedBy": "Dr. Mitchell",
      "collected": "02/26/2026 11:00",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-02261100",
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
              "value": "41.4",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "202",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "108",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "24",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Sodium",
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.0",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            }
          ]
        },
        {
          "name": "DISSECTION LABS",
          "results": [
            {
              "test": "Lactate",
              "value": "3.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "D-Dimer",
              "value": "12400",
              "unit": "ng/mL",
              "range": "<500",
              "flag": "H"
            },
            {
              "test": "Troponin I",
              "value": "0.08",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "CT AORTOGRAM WITH IV CONTRAST",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. Mitchell",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "ReasonDx Memorial — Radiology",
      "priority": "STAT",
      "clinical": "Suspected aortic dissection \u2014 tearing pain, BP differential, Marfan",
      "technique": "CT angiography of the aorta from arch through iliacs.",
      "findings": "Stanford Type B dissection identified. Intimal flap originates just distal to the left subclavian artery and extends to the aortic bifurcation. True lumen compressed. False lumen patent and partially thrombosed in descending thoracic segment. Left subclavian artery partially involved (explaining pulse deficit). Left renal artery arising from true lumen \u2014 patent. Celiac and SMA from true lumen \u2014 patent. No malperfusion of visceral branches currently.\n\nAscending aorta: 4.2 cm (mildly dilated \u2014 Marfan). No Type A extension.",
      "impression": "1. Stanford Type B aortic dissection \u2014 from left subclavian to bifurcation.\n2. Left subclavian involvement with partial compromise.\n3. No visceral malperfusion currently.\n4. Ascending aorta dilated (4.2 cm) \u2014 monitor for extension.\n5. Cardiothoracic surgery and ICU admission recommended.",
      "dictated": "02/26/2026 15:00",
      "verified": "02/26/2026 15:20"
    }
  ],
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
    },
    {
      "vaccine": "Shingrix (complete)",
      "date": "2023",
      "site": "Left deltoid IM",
      "lot": "SX23-412",
      "mfr": "GSK"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "03/2024",
      "site": "Left deltoid IM",
      "lot": "PV20-900",
      "mfr": "Pfizer"
    }
  ],
  "familyHistory": [
    "Father: Marfan syndrome, aortic dissection at 52 (fatal)",
    "Mother: HTN, alive at 88",
    "Son: Marfan syndrome (diagnosed, on surveillance), alive at 32"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired professor \u2014 civil engineering"
    ],
    [
      "Marital",
      "Married 38 years"
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
      "Walking limited by back pain"
    ],
    [
      "Advance Directive",
      "Full code; DPOA wife Patricia"
    ]
  ],
  "meta": {
    "caseId": "aortic-dissection-back",
    "diagnosis": "Acute Aortic Dissection (Type B \u2014 Descending)",
    "acuity": 1,
    "presentation": "Back Pain",
    "category": "musculoskeletal"
  }
};
