// Virtual EMR Case: Small Bowel Obstruction with Strangulation
// Variant: sbo-strangulation | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Richard Kowalski",
    "dob": "08/18/1955",
    "age": 70,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B",
    "pcp": "Dr. James O'Brien, MD",
    "pharmacy": "Publix \u2014 Coconut Creek, FL",
    "language": "English",
    "race": "White (Polish)",
    "address": "4520 NW 36th St, Coconut Creek, FL",
    "phone": "(954) 555-8822",
    "email": "r.kowalski55@email.com",
    "emergencyContact": {
      "name": "Susan Kowalski (Wife)",
      "phone": "(954) 555-8838"
    },
    "mrn": "NSU-2025-65129"
  },
  "problems": [
    {
      "problem": "Prior Appendectomy",
      "icd": "Z87.09",
      "onset": "1988",
      "status": "Resolved",
      "notes": "Open appendectomy 1988"
    },
    {
      "problem": "Prior Cholecystectomy",
      "icd": "Z87.09",
      "onset": "2015",
      "status": "Resolved",
      "notes": "Laparoscopic 2015"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2005",
      "status": "Active",
      "notes": "On lisinopril"
    },
    {
      "problem": "Prior SBO \u2014 Adhesive",
      "icd": "K56.5",
      "onset": "2020",
      "status": "Resolved",
      "notes": "Managed conservatively with NGT decompression in 2020"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 20mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. O'Brien",
      "start": "06/2008",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "PO daily before breakfast",
      "prescriber": "Dr. O'Brien",
      "start": "01/2016",
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
      "bp": "108/68",
      "hr": 108,
      "rr": 22,
      "temp": "101.2\u00b0F",
      "spo2": "97%",
      "wt": "190 lbs",
      "ht": "5'10\"",
      "bmi": 27.3,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "96/58",
      "hr": 118,
      "rr": 24,
      "temp": "101.8\u00b0F",
      "spo2": "95%",
      "wt": "190 lbs",
      "ht": "5'10\"",
      "bmi": 27.3,
      "setting": "ED \u2014 3hr Reassess"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Severe abdominal pain, vomiting, no BM/flatus x 36 hours",
      "hpi": "70M with prior abdominal surgeries and history of adhesive SBO presents with 36 hours of progressive crampy abdominal pain now becoming constant and severe (9/10). Bilious vomiting x 8 episodes. Complete obstipation \u2014 no BM or flatus x 36 hours. Prior SBO in 2020 resolved with NGT. This episode feels 'different and worse' \u2014 pain is constant rather than colicky, and he is febrile. Abdomen increasingly distended and tender.",
      "exam": "Ill-appearing, tachycardic. Abdomen: Markedly distended. Diffusely tender with involuntary guarding \u2014 worst in RLQ and periumbilical. Localized peritoneal signs RLQ. High-pitched tinkling bowel sounds alternating with absent sounds. Midline and RLQ surgical scars. Mild erythema overlying distended abdomen. No hernia.",
      "assessment": "1. Small bowel obstruction with signs of STRANGULATION \u2014 fever, peritoneal signs, constant pain, tachycardia, leukocytosis with bandemia\n2. Likely adhesive etiology given surgical history\n3. SURGICAL EMERGENCY \u2014 conservative management contraindicated with strangulation signs",
      "plan": "1. EMERGENT surgical consult \u2014 likely exploratory laparotomy\n2. NGT to low intermittent suction\n3. IV NS bolus 2L then 200 mL/hr\n4. NPO strictly\n5. CT abdomen/pelvis with IV contrast\n6. Piperacillin-tazobactam 4.5g IV (empiric for possible perforation)\n7. CBC, CMP, lactate, type & screen\n8. Foley for I/O\n9. Pain: fentanyl 50mcg IV (avoid morphine \u2014 histamine release)"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "10:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 10:10",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-260411",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "19.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "16.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "342",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Bands",
              "value": "12",
              "unit": "%",
              "range": "0-5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "METABOLIC",
          "results": [
            {
              "test": "BUN",
              "value": "32",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.6",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Potassium",
              "value": "3.2",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": "L"
            },
            {
              "test": "Chloride",
              "value": "88",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": "L"
            },
            {
              "test": "CO2",
              "value": "30",
              "unit": "mEq/L",
              "range": "22-29",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "4.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
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
      "study": "CT ABDOMEN AND PELVIS WITH IV CONTRAST",
      "accession": "IMG-2026-260411",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "SBO with signs of strangulation",
      "technique": "CT abdomen/pelvis with IV contrast.",
      "findings": "Dilated small bowel loops (up to 5.2 cm) with air-fluid levels. Transition point in RLQ with adhesive band identified. Closed-loop configuration of distal ileum with mesenteric swirl ('whirl sign'). Involved bowel segment shows decreased wall enhancement and mesenteric congestion \u2014 concerning for ischemia. Small amount of free fluid in pelvis. No pneumoperitoneum.",
      "impression": "1. Adhesive small bowel obstruction with closed-loop and signs of STRANGULATION.\n2. Decreased bowel wall enhancement at transition point \u2014 ischemia likely.\n3. No perforation currently.\n4. EMERGENT surgical intervention recommended.",
      "dictated": "02/26/2026 10:40",
      "verified": "02/26/2026 10:55"
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
    "Father: Colon cancer at 72, deceased at 78",
    "Mother: Gallstones, alive at 92"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired electrician"
    ],
    [
      "Marital",
      "Married 45 years"
    ],
    [
      "Tobacco",
      "Former \u2014 1/2 PPD x 15 yrs, quit 2000"
    ],
    [
      "Alcohol",
      "1-2 beers/week"
    ],
    [
      "Advance Directive",
      "Full code; DPOA wife Susan"
    ]
  ],
  "meta": {
    "caseId": "sbo-strangulation",
    "diagnosis": "Small Bowel Obstruction with Strangulation",
    "acuity": 2,
    "presentation": "GI Emergency",
    "category": "gastrointestinal"
  }
};
