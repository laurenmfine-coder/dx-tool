// Virtual EMR Case: Acute Pulmonary Embolism
// Variant: pe-v1 | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Christina Park",
    "dob": "08/22/1988",
    "age": 37,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "BCBS PPO",
    "pcp": "Dr. Maria Lopez, MD",
    "pharmacy": "CVS \u2014 Fort Lauderdale, FL",
    "language": "English",
    "race": "Asian (Korean)",
    "address": "3280 NE 12th Ave, Fort Lauderdale, FL",
    "phone": "(954) 555-7190",
    "email": "c.park88@email.com",
    "emergencyContact": {
      "name": "Michael Park (Husband)",
      "phone": "(954) 555-7206"
    },
    "mrn": "RDX-2025-66899"
  },
  "problems": [
    {
      "problem": "Oral Contraceptive Use",
      "icd": "Z79.3",
      "onset": "2020",
      "status": "Active",
      "notes": "Combined OCP x 6 years"
    },
    {
      "problem": "Recent Long-Haul Flight",
      "icd": "Z72.89",
      "onset": "02/2026",
      "status": "Active",
      "notes": "14-hour flight from Seoul 5 days ago"
    },
    {
      "problem": "Obesity",
      "icd": "E66.01",
      "onset": "2018",
      "status": "Active",
      "notes": "BMI 33"
    }
  ],
  "medications": [
    {
      "name": "Norgestimate/Ethinyl Estradiol (Sprintec)",
      "sig": "PO daily",
      "prescriber": "Dr. Lopez",
      "start": "04/2020",
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
      "bp": "108/72",
      "hr": 112,
      "rr": 24,
      "temp": "99.2\u00b0F",
      "spo2": "91%",
      "wt": "188 lbs",
      "ht": "5'6\"",
      "bmi": 30.3,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "98/64",
      "hr": 118,
      "rr": 26,
      "temp": "99.0\u00b0F",
      "spo2": "89%",
      "wt": "188 lbs",
      "ht": "5'6\"",
      "bmi": 30.3,
      "setting": "ED \u2014 1hr"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Sudden dyspnea, pleuritic chest pain, near-syncope",
      "hpi": "37F with OCP use and recent 14-hour flight 5 days ago presents with sudden onset dyspnea and R-sided pleuritic chest pain that started 2 hours ago while at work. Near-syncope with standing. Also notes R calf swelling and pain x 3 days that she attributed to flight. Wells score: 7.5 (clinical signs DVT 3, PE most likely 3, tachycardia 1.5). HR 112, SpO2 91% on RA.",
      "exam": "Tachypneic, anxious. Lungs: Clear but diminished at R base. CV: Tachycardic, loud P2, RV heave. R calf: 3 cm larger than L, tender, positive Homan sign. Extremities: No cyanosis.",
      "assessment": "1. Acute PE \u2014 high Wells score, tachycardia, hypoxia, pleuritic pain, DVT signs\n2. Submassive PE \u2014 RV strain on echo, hemodynamically borderline\n3. Provoked DVT/PE \u2014 OCP + prolonged immobility",
      "plan": "1. CT pulmonary angiography \u2014 STAT\n2. Heparin drip (weight-based) started empirically\n3. Bedside echo: RV dilation, McConnell sign\n4. Bilateral LE dopplers\n5. Troponin, BNP, D-dimer\n6. STOP oral contraceptive\n7. ICU admission for submassive PE\n8. Consider thrombolytics if hemodynamic decompensation"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "14:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 14:00",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-02261400",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "9.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "248",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "PE WORKUP",
          "results": [
            {
              "test": "D-Dimer",
              "value": "8420",
              "unit": "ng/mL",
              "range": "<500",
              "flag": "H"
            },
            {
              "test": "Troponin I",
              "value": "0.18",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "BNP",
              "value": "488",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.48",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            },
            {
              "test": "ABG pO2",
              "value": "62",
              "unit": "mmHg",
              "range": "80-100",
              "flag": "L"
            },
            {
              "test": "ABG pCO2",
              "value": "28",
              "unit": "mmHg",
              "range": "35-45",
              "flag": "L"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "CT PULMONARY ANGIOGRAPHY",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "ReasonDx Memorial — Radiology",
      "priority": "STAT",
      "clinical": "Suspected PE \u2014 tachycardia, hypoxia, DVT signs, high Wells",
      "technique": "CTA chest with PE protocol.",
      "findings": "Bilateral pulmonary emboli identified. Large saddle embolus at the main pulmonary artery bifurcation extending into bilateral main pulmonary arteries. Additional segmental emboli in RLL and RML. RV/LV ratio 1.4 (>1.0 indicates RV strain). Interventricular septum bowing toward LV. Reflux of contrast into hepatic veins (elevated RA pressure).",
      "impression": "1. Saddle pulmonary embolism \u2014 bilateral with RV strain.\n2. RV/LV ratio 1.4 \u2014 submassive PE.\n3. ICU admission and anticoagulation. Consider escalation to thrombolysis if decompensation.",
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
    "Father: DVT at 55, alive at 62",
    "Mother: Healthy, alive at 60"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Marketing manager"
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
      "OCP",
      "Combined pill x 6 years"
    ],
    [
      "Exercise",
      "Gym 3x/week"
    ]
  ],
  "meta": {
    "caseId": "pe-v1",
    "diagnosis": "Acute Pulmonary Embolism",
    "acuity": 2,
    "presentation": "Shortness of Breath",
    "category": "pulmonary"
  }
};
