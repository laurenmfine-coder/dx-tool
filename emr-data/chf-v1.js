// Virtual EMR Case: Acute Decompensated Heart Failure
// Variant: chf-v1 | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Willie Jackson",
    "dob": "03/04/1950",
    "age": 75,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Medicare",
    "pcp": "Dr. Paul Martinez, MD",
    "pharmacy": "Publix \u2014 Fort Lauderdale, FL",
    "language": "English",
    "race": "Black",
    "address": "1920 NW 9th Ave, Fort Lauderdale, FL",
    "phone": "(954) 555-3440",
    "email": "w.jackson50@email.com",
    "emergencyContact": {
      "name": "Donna Jackson (Daughter)",
      "phone": "(954) 555-3456"
    },
    "mrn": "NSU-2025-40121"
  },
  "problems": [
    {
      "problem": "Heart Failure with Reduced EF (HFrEF)",
      "icd": "I50.20",
      "onset": "2018",
      "status": "Active",
      "notes": "EF 30%; ischemic cardiomyopathy; on GDMT"
    },
    {
      "problem": "CAD \u2014 s/p CABG",
      "icd": "I25.10",
      "onset": "2015",
      "status": "Active",
      "notes": "3-vessel CABG 2015 (LIMA-LAD, SVG-OM1, SVG-RCA)"
    },
    {
      "problem": "Atrial Fibrillation",
      "icd": "I48.91",
      "onset": "2019",
      "status": "Active",
      "notes": "Rate-controlled; on apixaban"
    },
    {
      "problem": "CKD Stage 3b",
      "icd": "N18.32",
      "onset": "2020",
      "status": "Active",
      "notes": "eGFR 36; cardiorenal"
    },
    {
      "problem": "Type 2 Diabetes",
      "icd": "E11.9",
      "onset": "2005",
      "status": "Active",
      "notes": "A1C 7.6"
    }
  ],
  "medications": [
    {
      "name": "Sacubitril/Valsartan 49/51mg BID",
      "sig": "PO BID",
      "prescriber": "Cardiology",
      "start": "06/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Carvedilol 25mg BID",
      "sig": "PO BID",
      "prescriber": "Cardiology",
      "start": "03/2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Furosemide 40mg BID",
      "sig": "PO BID",
      "prescriber": "Cardiology",
      "start": "01/2019",
      "refills": 5,
      "status": "Active \u2014 ran out 4 days ago"
    },
    {
      "name": "Spironolactone 25mg daily",
      "sig": "PO daily",
      "prescriber": "Cardiology",
      "start": "06/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Apixaban 5mg BID",
      "sig": "PO BID",
      "prescriber": "Cardiology",
      "start": "10/2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Empagliflozin 10mg daily",
      "sig": "PO daily",
      "prescriber": "Cardiology",
      "start": "01/2023",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Martinez",
      "start": "04/2005",
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
      "bp": "168/102",
      "hr": 108,
      "rr": 28,
      "temp": "98.2\u00b0F",
      "spo2": "88%",
      "wt": "228 lbs",
      "ht": "5'10\"",
      "bmi": 32.7,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "138/82",
      "hr": 92,
      "rr": 20,
      "temp": "98.2\u00b0F",
      "spo2": "95%",
      "wt": "228 lbs",
      "ht": "5'10\"",
      "bmi": 32.7,
      "setting": "ED \u2014 Post-BiPAP/Lasix 2hr"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Worsening dyspnea x 4 days, can't lie flat, leg swelling",
      "hpi": "75M with HFrEF (EF 30%) presents with 4-day worsening dyspnea, orthopnea (4 pillows), PND, and bilateral leg swelling. Ran out of furosemide 4 days ago (pharmacy issue) and has been eating high-sodium foods. Weight up 14 lbs from dry weight (214\u2192228). Unable to walk across room today. No chest pain. No fever.",
      "exam": "Tripoding, severe respiratory distress. JVP to angle of jaw. Lungs: Diffuse bilateral crackles to apices. CV: Irregularly irregular (AFib), S3 gallop, 2/6 MR murmur. Abdomen: Hepatomegaly, positive hepatojugular reflux. Extremities: 3+ pitting edema bilaterally to thighs.",
      "assessment": "1. Acute decompensated HFrEF \u2014 medication non-adherence (diuretic), dietary indiscretion\n2. Volume overload with pulmonary edema\n3. Acute on chronic kidney injury likely",
      "plan": "1. BiPAP 12/5 cmH2O with FiO2 60%\n2. Furosemide 80mg IV (double home dose)\n3. NTG drip if SBP remains >140 after diuresis\n4. Strict I&O, daily weights, fluid restriction 1.5L\n5. Telemetry \u2014 rate control AFib\n6. Restart home GDMT once hemodynamically stable\n7. Social work for medication access\n8. Cardiology consult \u2014 may need IV diuretic drip"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "14:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 14:00",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-02261400",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "BMP",
          "results": [
            {
              "test": "BUN",
              "value": "48",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "2.4",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Sodium",
              "value": "131",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "5.0",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "168",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CARDIAC",
          "results": [
            {
              "test": "BNP",
              "value": "2840",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Troponin I",
              "value": "0.06",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "2.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "8.4",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "10.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "178",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "CHEST X-RAY PA AND LATERAL",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "Dyspnea, volume overload",
      "technique": "PA and lateral chest radiograph.",
      "findings": "Cardiomegaly (cardiothoracic ratio 0.62). Bilateral pleural effusions, moderate right > small left. Bilateral perihilar vascular congestion with cephalization. Bilateral alveolar opacities consistent with pulmonary edema. Sternotomy wires intact. No pneumothorax.",
      "impression": "1. Acute pulmonary edema with bilateral pleural effusions.\n2. Cardiomegaly.\n3. Findings consistent with acute decompensated heart failure.",
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
    "Father: CAD, CHF, deceased at 68",
    "Mother: HTN, T2DM, alive at 92",
    "Sister: CHF, alive at 72"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired bus driver"
    ],
    [
      "Marital",
      "Widowed; daughter helps with medications"
    ],
    [
      "Tobacco",
      "Former \u2014 1 PPD x 30 years, quit 2015"
    ],
    [
      "Alcohol",
      "Denies"
    ],
    [
      "Diet",
      "Admits high-sodium diet \u2014 fast food, canned foods"
    ],
    [
      "Advance Directive",
      "Full code; DPOA daughter Donna"
    ]
  ],
  "meta": {
    "caseId": "chf-v1",
    "diagnosis": "Acute Decompensated Heart Failure",
    "acuity": 2,
    "presentation": "Shortness of Breath",
    "category": "pulmonary"
  }
};
