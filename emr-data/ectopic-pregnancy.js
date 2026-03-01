// Virtual EMR Case: Ruptured ectopic pregnancy
// Variant: ectopic-pregnancy | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Jessica Taylor",
    "dob": "04/12/1994",
    "age": 31,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "United Healthcare",
    "pcp": "Dr. Karen White, DO",
    "pharmacy": "Walgreens \u2014 Sunrise, FL",
    "language": "English",
    "race": "White",
    "address": "4820 NW 44th St, Sunrise, FL",
    "phone": "(954) 555-1822",
    "email": "j.taylor94@email.com",
    "emergencyContact": {
      "name": "Ryan Taylor (Husband)",
      "phone": "(954) 555-1838"
    },
    "mrn": "NSU-2025-10899"
  },
  "problems": [
    {
      "problem": "Prior Ectopic Pregnancy",
      "icd": "Z87.59",
      "onset": "2022",
      "status": "Active",
      "notes": "Right-sided ectopic treated with methotrexate 2022"
    },
    {
      "problem": "PID History",
      "icd": "N73.0",
      "onset": "2019",
      "status": "Active",
      "notes": "Treated chlamydial PID 2019; increased ectopic risk"
    }
  ],
  "medications": [
    {
      "name": "None",
      "sig": "",
      "prescriber": "",
      "start": "",
      "refills": 0,
      "status": ""
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
      "bp": "82/48",
      "hr": 128,
      "rr": 24,
      "temp": "98.0\u00b0F",
      "spo2": "98%",
      "wt": "138 lbs",
      "ht": "5'5\"",
      "bmi": 23.0,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "72/40",
      "hr": 136,
      "rr": 28,
      "temp": "97.8\u00b0F",
      "spo2": "97%",
      "wt": "138 lbs",
      "ht": "5'5\"",
      "bmi": 23.0,
      "setting": "ED \u2014 15min"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Sudden severe lower abdominal pain, vaginal bleeding, dizziness",
      "hpi": "31F with prior ectopic and PID history. LMP 7 weeks ago. Home pregnancy test positive 1 week ago, not yet seen OB. Sudden onset severe L lower quadrant pain 90 min ago, now diffuse with vaginal spotting. Feels lightheaded and nearly fainted. Significant risk factors for ectopic: prior ectopic, PID history.",
      "exam": "Pale, diaphoretic, tachycardic. Abdomen: Rigid, diffuse tenderness worst in LLQ. Rebound and guarding. Pelvic: Scant dark blood in vault, cervical motion tenderness, left adnexal mass/fullness with severe tenderness.",
      "assessment": "1. RUPTURED ECTOPIC PREGNANCY \u2014 hemorrhagic shock. Prior ectopic + PID + 7wk amenorrhea + acute abdomen + hemodynamic instability\n2. Hemoperitoneum likely\n3. SURGICAL EMERGENCY",
      "plan": "1. Activate massive transfusion protocol \u2014 2U O-neg pRBC NOW\n2. Two large-bore IVs, NS wide open\n3. STAT bedside US \u2014 free fluid confirmed\n4. STAT quantitative \u03b2-hCG, type & screen, CBC, CMP\n5. EMERGENT OB/GYN consult for laparotomy vs laparoscopy\n6. NPO, consent for surgery\n7. Rh status \u2014 RhoGAM if Rh-negative"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "15:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 15:00",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-02261500",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "ECTOPIC LABS",
          "results": [
            {
              "test": "\u03b2-hCG (Quantitative)",
              "value": "4820",
              "unit": "mIU/mL",
              "range": "Varies by GA",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "7.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "23.4",
              "unit": "%",
              "range": "36-46",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "198",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Blood Type",
              "value": "O-Negative",
              "unit": "",
              "range": "",
              "flag": ""
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
      "study": "BEDSIDE PELVIC ULTRASOUND",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Carter, MD",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "Suspected ectopic \u2014 7wk amenorrhea, acute abdomen, hemodynamic instability",
      "technique": "Bedside transvaginal ultrasound.",
      "findings": "Empty uterus \u2014 no intrauterine pregnancy visualized. Endometrial stripe 12mm. Left adnexa: Complex mass 3.8 x 2.4 cm with ring-of-fire Doppler pattern \u2014 ectopic pregnancy. Large amount of free fluid in pelvis and Morison pouch \u2014 hemoperitoneum.",
      "impression": "1. Left ectopic pregnancy with rupture.\n2. Hemoperitoneum.\n3. EMERGENT surgical intervention.",
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
    "Mother: Healthy",
    "Father: Healthy"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Unknown"
    ],
    [
      "Tobacco",
      "Denies"
    ]
  ],
  "meta": {
    "caseId": "ectopic-pregnancy",
    "diagnosis": "Ruptured ectopic pregnancy",
    "acuity": 1,
    "presentation": "Obstetric Emergency",
    "category": "obstetric"
  }
};
