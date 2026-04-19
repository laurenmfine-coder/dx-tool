
window.EMR_DATA = {
  "patient": {
    "name": "Angela Torres-Vega",
    "dob": "12/15/1978",
    "age": 47,
    "sex": "Female",
    "mrn": "RDX-2025-48726",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Maria Fernandez, MD",
    "pharmacy": "CVS Pharmacy — 4320 Hollywood Blvd, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic",
    "address": "3940 Johnson St, Hollywood, FL 33021",
    "phone": "(954) 555-8217",
    "email": "a.torresvega@email.com",
    "emergencyContact": {
      "name": "Miguel Torres-Vega (Husband)",
      "phone": "(954) 555-8231"
    }
  },
  "problems": [
    {
      "problem": "Deep Vein Thrombosis, Left Lower Extremity",
      "icd": "I82.402",
      "onset": "2025",
      "status": "Active",
      "notes": "Diagnosed 02/2025; left popliteal and femoral veins; provoked by oral contraceptive use + prolonged travel; completed 3 months rivaroxaban; recently discontinued"
    },
    {
      "problem": "Obesity Class I",
      "icd": "E66.01",
      "onset": "2018",
      "status": "Active",
      "notes": "BMI 32.4"
    },
    {
      "problem": "Factor V Leiden Heterozygous",
      "icd": "D68.51",
      "onset": "2025",
      "status": "Active",
      "notes": "Identified during thrombophilia workup after DVT; heterozygous — moderate VTE risk"
    },
    {
      "problem": "Migraine Without Aura",
      "icd": "G43.009",
      "onset": "2012",
      "status": "Active",
      "notes": "Previously on combined OCP (discontinued after DVT)"
    },
    {
      "problem": "Gastroesophageal Reflux Disease",
      "icd": "K21.0",
      "onset": "2020",
      "status": "Active",
      "notes": ""
    }
  ],
  "medications": [
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily before breakfast",
      "prescriber": "Dr. Fernandez",
      "start": "06/2020",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Sumatriptan 50mg PRN",
      "sig": "Take 1 tablet by mouth at onset of migraine; may repeat once after 2 hours; max 2/day",
      "prescriber": "Dr. Fernandez",
      "start": "03/2013",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Norethindrone 0.35mg daily",
      "sig": "Take 1 tablet by mouth daily (progestin-only pill; switched from combined OCP after DVT)",
      "prescriber": "Dr. Fernandez",
      "start": "06/2025",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Rivaroxaban 20mg daily",
      "sig": "Take 1 tablet by mouth daily with dinner",
      "prescriber": "Dr. Singh (Hematology)",
      "start": "02/2025",
      "refills": 0,
      "status": "Discontinued"
    }
  ],
  "allergies": [
    {
      "allergen": "Heparin",
      "type": "Drug",
      "reaction": "Suspected HIT — platelet drop to 68K during DVT hospitalization; HIT antibody borderline positive; serotonin release assay negative",
      "severity": "Severe",
      "verified": "No"
    },
    {
      "allergen": "Latex",
      "type": "Environmental",
      "reaction": "Hives, wheezing",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
        "date": "02/26/2026",
        "bp": "84/52",
        "hr": 128,
        "rr": 28,
        "temp": "98.2\u00b0F",
        "spo2": "88%",
        "wt": "190 lbs",
        "ht": "5'5\"",
        "bmi": 31.6,
        "setting": "ED"
    },
    {
        "date": "08/15/2025",
        "bp": "126/78",
        "hr": 78,
        "rr": 14,
        "temp": "98.4\u00b0F",
        "spo2": "98%",
        "wt": "192 lbs",
        "ht": "5'5\"",
        "bmi": 31.9,
        "setting": "Specialist"
    },
    {
        "date": "05/20/2025",
        "bp": "128/80",
        "hr": 76,
        "rr": 14,
        "temp": "98.6\u00b0F",
        "spo2": "98%",
        "wt": "194 lbs",
        "ht": "5'5\"",
        "bmi": 32.3,
        "setting": "PCP Office"
    },
    {
        "date": "02/10/2025",
        "bp": "132/84",
        "hr": 104,
        "rr": 18,
        "temp": "99.0\u00b0F",
        "spo2": "94%",
        "wt": "196 lbs",
        "ht": "5'5\"",
        "bmi": 32.6,
        "setting": "ED"
    }
],
  "visits": [
    {
      "id": "V001",
      "date": "08/15/2025",
      "type": "Specialist",
      "provider": "Dr. Natasha Singh, MD (Hematology)",
      "cc": "DVT follow-up; thrombophilia results; anticoagulation duration",
      "hpi": "47-year-old female with provoked left LE DVT (02/2025) for follow-up. Completed 3 months rivaroxaban. DVT was provoked by combined OCP + 14-hour flight to Peru. Thrombophilia workup reveals Factor V Leiden heterozygous. Family history: mother had DVT at age 52. Ultrasound shows residual thrombus in left popliteal vein but improving. No PE symptoms. Discussion of extended anticoagulation vs. discontinuation — given provoked DVT with identified risk factor (OCP now discontinued) and heterozygous FVL (moderate risk), decision made to discontinue rivaroxaban after 3 months. Counseled on VTE precautions: compression stockings for travel, avoidance of estrogen-containing contraceptives, early mobilization.",
      "exam": "General: NAD. Left LE: Mild residual edema; no tenderness, warmth, or erythema. Pulses intact.",
      "assessment": "1. Provoked DVT left LE — resolved; rivaroxaban completed\n2. Factor V Leiden heterozygous — identified\n3. Residual thrombus — improving",
      "plan": "1. Discontinue rivaroxaban (3-month course complete; provoked event)\n2. Compression stockings for prolonged travel/sitting\n3. Avoid estrogen-containing products\n4. Recheck duplex ultrasound in 3 months\n5. Educate on signs/symptoms of recurrent DVT/PE\n6. RTC 6 months or sooner if symptoms"
    },
    {
      "id": "V002",
      "date": "02/10/2025",
      "type": "ED",
      "provider": "Dr. Karen Moy, MD (Emergency Medicine)",
      "cc": "Left leg swelling, pain x 5 days",
      "hpi": "47-year-old female presenting with progressive left calf and thigh swelling, pain, and redness x 5 days. Returned from 14-hour flight from Peru 2 weeks ago. On combined OCP x 8 years. BMI 32.6. Reports mild dyspnea with activity but no chest pain, no hemoptysis. Left calf circumference 4 cm greater than right.",
      "exam": "General: Mild distress from leg pain. Left LE: Diffuse edema knee to ankle, tender popliteal fossa, positive Homan's sign. Erythema posterior calf. Right LE: Normal. CV: Tachycardia at 104, regular. Lungs: CTAB.",
      "assessment": "1. Acute DVT left lower extremity — high clinical probability (Wells score 4)\n2. Risk factors: OCP, prolonged travel, obesity",
      "plan": "1. Compression ultrasound left LE — positive: occlusive thrombus left popliteal and femoral veins\n2. CTA chest — no PE\n3. Started rivaroxaban 15mg BID x 21 days then 20mg daily\n4. Heparin not used due to suspected HIT history (borderline antibody, but SRA negative — documented as allergy per hospital policy)\n5. Discontinue combined OCP immediately\n6. Compression stockings\n7. Hematology referral for thrombophilia workup (after anticoagulation)\n8. PCP follow-up 1 week"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "10:30",
      "orderedBy": "Dr. James Park, MD (ED)",
      "collected": "02/26/2026 10:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-022654",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Arterial Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "ARTERIAL BLOOD GAS (ABG)",
          "results": [
            { "test": "pH", "value": "7.48", "unit": "", "range": "7.35-7.45", "flag": "H" },
            { "test": "pCO2", "value": "28", "unit": "mmHg", "range": "35-45", "flag": "L" },
            { "test": "pO2", "value": "58", "unit": "mmHg", "range": "80-100", "flag": "L" },
            { "test": "HCO3", "value": "21", "unit": "mEq/L", "range": "22-26", "flag": "L" },
            { "test": "A-a Gradient", "value": "52", "unit": "mmHg", "range": "<15", "flag": "H" }
          ]
        },
        {
          "name": "CARDIAC MARKERS",
          "results": [
            { "test": "Troponin I (hs)", "value": "0.42", "unit": "ng/mL", "range": "<0.04", "flag": "H" },
            { "test": "BNP", "value": "820", "unit": "pg/mL", "range": "<100", "flag": "H" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "142", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "18", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.2", "unit": "mg/dL", "range": "0.6-1.2", "flag": "" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.4", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Lactate", "value": "4.6", "unit": "mmol/L", "range": "0.5-2.0", "flag": "H" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "12.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "13.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Platelet Count", "value": "238", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            { "test": "D-Dimer", "value": "8400", "unit": "ng/mL FEU", "range": "<500", "flag": "H" },
            { "test": "INR", "value": "1.1", "unit": "", "range": "0.8-1.1", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "08/15/2025",
      "study": "BILATERAL LOWER EXTREMITY VENOUS DUPLEX ULTRASOUND",
      "accession": "IMG-2025-08155",
      "status": "FINAL",
      "orderedBy": "Dr. Natasha Singh, MD",
      "readBy": "Dr. David Rosenberg, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "47F with left LE DVT (02/2025), completed 3 months rivaroxaban. Follow-up ultrasound.",
      "technique": "Duplex ultrasound bilateral lower extremity veins with compression and Doppler.",
      "findings": "Left: Residual non-occlusive thrombus in left popliteal vein — decreased from prior. Left femoral vein patent with normal compressibility. No new thrombus.\\n\\nRight: Patent and compressible throughout. Normal flow.",
      "impression": "1. Residual non-occlusive thrombus left popliteal vein — improved from 02/2025.\\n2. No new DVT bilaterally.\\n3. Left femoral vein now patent.",
      "dictated": "08/15/2025 14:10",
      "verified": "08/15/2025 16:25"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-308",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2025-26)",
      "date": "10/25/2025",
      "site": "Right deltoid IM",
      "lot": "CM2025-658",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) (3/3)",
      "date": "2015",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: DVT at age 52 (provoked by hip surgery), Factor V Leiden heterozygous, alive at 72",
    "Father: HTN, T2DM, alive at 74",
    "Sister: Healthy, alive at 44",
    "Maternal grandmother: PE at age 65, deceased at 68"
  ],
  "socialHistory": [
    ["Occupation", "Travel nurse recruiter; frequent air travel for work (8-10 flights/month)"],
    ["Marital", "Married 18 years; husband Miguel; 2 children ages 12, 15"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social, 2-3 drinks/week"],
    ["Drugs", "Denies"],
    ["Exercise", "Walks 30 min daily; Zumba 2x/week (discontinued past month due to travel schedule)"],
    ["Housing", "Single-family home with husband and children"],
    ["Safety", "Denies IPV; wears compression stockings on flights since DVT"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "massive-pe-with-rv-failure",
    "diagnosis": "Massive Pulmonary Embolism with Acute Right Ventricular Failure",
    "acuity": 1,
    "presentation": "Cardiac Emergency",
    "category": "cardiovascular"
  }
};