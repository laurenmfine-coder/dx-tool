// Virtual EMR Case: Hyperkalemia with Concurrent ACS
// Variant: hyperkalemia-with-concurrent-acs | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Harold Washington",
    "dob": "12/04/1955",
    "age": 69,
    "sex": "Male",
    "mrn": "RDX-2025-87412",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B + AARP Supplement",
    "pcp": "Dr. James Whitfield, MD",
    "pharmacy": "Walgreens — 5601 Stirling Rd, Hollywood, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "3418 Johnson St, Hollywood, FL 33021",
    "phone": "(954) 555-6182",
    "email": "h.washington55@email.com",
    "emergencyContact": {
      "name": "Dorothy Washington (Wife)",
      "phone": "(954) 555-6185"
    }
  },
  "problems": [
    {
      "problem": "Chronic Kidney Disease, Stage 4",
      "icd": "N18.4",
      "onset": "2020",
      "status": "Active",
      "notes": "eGFR 22; diabetic nephropathy; followed by nephrology; dialysis planning in progress"
    },
    {
      "problem": "Type 2 Diabetes Mellitus with Nephropathy",
      "icd": "E11.22",
      "onset": "2005",
      "status": "Active",
      "notes": "On insulin; A1c 8.1%; progressive renal involvement"
    },
    {
      "problem": "Coronary Artery Disease — 3-Vessel",
      "icd": "I25.10",
      "onset": "2018",
      "status": "Active",
      "notes": "Cath 2018: 70% LAD, 60% RCA, 50% LCx; managed medically; declined CABG; on aspirin, statin, metoprolol"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2000",
      "status": "Active",
      "notes": "On lisinopril 40mg + amlodipine 10mg"
    },
    {
      "problem": "Heart Failure with Reduced Ejection Fraction",
      "icd": "I50.22",
      "onset": "2019",
      "status": "Active",
      "notes": "EF 35%; on sacubitril-valsartan, carvedilol, spironolactone, furosemide; ischemic cardiomyopathy"
    }
  ],
  "medications": [
    {
      "name": "Sacubitril-Valsartan (Entresto) 49/51mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Patel (Cardiology)",
      "start": "03/2020",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Carvedilol 12.5mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Patel (Cardiology)",
      "start": "01/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Spironolactone 25mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Patel (Cardiology)",
      "start": "06/2020",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Furosemide 40mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Patel (Cardiology)",
      "start": "01/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Insulin Glargine 28 units QHS",
      "sig": "Inject 28 units subcutaneously at bedtime",
      "prescriber": "Dr. Whitfield",
      "start": "01/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Insulin Lispro — sliding scale with meals",
      "sig": "Inject subcutaneously per sliding scale before meals",
      "prescriber": "Dr. Whitfield",
      "start": "01/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 80mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Patel",
      "start": "06/2018",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Patel",
      "start": "06/2018",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Lisinopril",
      "type": "Drug",
      "reaction": "Angioedema (lip swelling) — switched to ARB-based regimen",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "IV Contrast (iodinated)",
      "type": "Drug",
      "reaction": "Hives and throat tightness — requires premedication protocol",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/25/2025",
      "bp": "92/58",
      "hr": 48,
      "rr": 24,
      "temp": "97.8°F",
      "spo2": "92%",
      "wt": "218 lbs",
      "ht": "5'9\"",
      "bmi": 32.2,
      "setting": "ED"
    },
    {
      "date": "01/22/2025",
      "bp": "148/88",
      "hr": 68,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "222 lbs",
      "ht": "5'9\"",
      "bmi": 32.8,
      "setting": "PCP Office"
    },
    {
      "date": "10/08/2024",
      "bp": "152/92",
      "hr": 72,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "220 lbs",
      "ht": "5'9\"",
      "bmi": 32.5,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/22/2025",
      "type": "Primary Care",
      "provider": "Dr. James Whitfield, MD",
      "cc": "Follow-up: CKD, DM, CHF",
      "hpi": "69-year-old male with multiple comorbidities for chronic disease management. Reports increasing fatigue and mild dyspnea on exertion (climbing 1 flight of stairs). Weight up 4 lbs. Occasional 'skipped beats.' No chest pain. Admits to dietary indiscretion — eating higher sodium and potassium foods over the holidays. Blood sugars running 160-220. Has missed nephrology appointment.",
      "exam": "General: Obese male, mild distress. CV: Irregular rhythm, bradycardic at 68, S3 gallop present. Lungs: Bilateral crackles at bases. Abdomen: Soft, no tenderness. Extremities: 2+ pitting edema bilateral lower extremities. Skin: Dry, AV fistula in left forearm (maturing).",
      "assessment": "1. CHF exacerbation — mild decompensation with weight gain and bilateral crackles\n2. CKD Stage 4 — eGFR declining, needs nephrology follow-up\n3. DM — poorly controlled, A1c due\n4. High-risk medication regimen for hyperkalemia (Entresto + spironolactone + CKD)",
      "plan": "1. Increase furosemide to 40mg BID (from 40mg daily)\n2. Restrict sodium <2g/day, potassium <2g/day\n3. Labs: CMP, CBC, BNP, A1c — POTASSIUM CHECK CRITICAL\n4. Reschedule nephrology urgently\n5. RTC 2 weeks"
    },
    {
      "id": "V002",
      "date": "10/08/2024",
      "type": "Specialist",
      "provider": "Dr. Nina Patel, MD (Cardiology)",
      "cc": "HFrEF management, CAD follow-up",
      "hpi": "69-year-old with ischemic cardiomyopathy (EF 35%) and 3-vessel CAD for cardiology follow-up. Euvolemic on current diuretic regimen. No angina. Functional class NYHA II-III. Last echo 6 months ago showed stable EF 35%. Continues to decline CABG referral.",
      "exam": "CV: RRR, S3 present, JVP 8 cm. Lungs: Clear. Extremities: Trace edema.",
      "assessment": "1. HFrEF — NYHA II-III, stable\n2. CAD — 3-vessel, medically managed\n3. High-risk medication profile — RAAS inhibition + MRA + CKD — potassium monitoring essential",
      "plan": "1. Continue Entresto, carvedilol, spironolactone, furosemide\n2. Echo in 6 months\n3. Labs q3months with potassium\n4. Coordinate with nephrology re: dialysis timeline and medication adjustments"
    }
  ],
  "labs": [
    {
      "date": "02/25/2025",
      "time": "08:12",
      "orderedBy": "Dr. Amanda Liu, MD (ED)",
      "collected": "02/25/2025 07:55",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-105218",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Arterial Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "242", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "68", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "4.8", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "Sodium", "value": "132", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "7.8", "unit": "mEq/L", "range": "3.5-5.0", "flag": "H" },
            { "test": "Chloride", "value": "98", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "14", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "Calcium", "value": "8.2", "unit": "mg/dL", "range": "8.5-10.5", "flag": "L" },
            { "test": "Phosphate", "value": "7.4", "unit": "mg/dL", "range": "2.5-4.5", "flag": "H" },
            { "test": "Magnesium", "value": "2.4", "unit": "mg/dL", "range": "1.7-2.2", "flag": "H" }
          ]
        },
        {
          "name": "CARDIAC BIOMARKERS",
          "results": [
            { "test": "Troponin I (High Sensitivity)", "value": "2.84", "unit": "ng/mL", "range": "<0.04", "flag": "H" },
            { "test": "BNP", "value": "1,840", "unit": "pg/mL", "range": "<100", "flag": "H" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "12.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "9.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "29.4", "unit": "%", "range": "38.3-48.6", "flag": "L" },
            { "test": "Platelets", "value": "178", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "VENOUS BLOOD GAS",
          "results": [
            { "test": "pH", "value": "7.18", "unit": "", "range": "7.32-7.42", "flag": "L" },
            { "test": "pCO2", "value": "28", "unit": "mmHg", "range": "35-45", "flag": "L" },
            { "test": "Base Excess", "value": "-16", "unit": "mEq/L", "range": "-2 to +2", "flag": "L" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/25/2025",
      "study": "CHEST X-RAY — PORTABLE AP",
      "accession": "IMG-2025-10481",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Liu, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "69-year-old with CHF, CKD, hyperkalemia, bradycardia, chest tightness",
      "technique": "Single portable AP chest radiograph.",
      "findings": "HEART: Cardiomegaly (cardiothoracic ratio 0.62).\n\nLUNGS: Bilateral pleural effusions, moderate. Bilateral perihilar haziness and Kerley B lines — pulmonary edema. Cephalization of pulmonary vasculature.\n\nOTHER: Left forearm AV fistula noted.",
      "impression": "1. Cardiomegaly with bilateral pleural effusions and pulmonary edema — acute decompensated heart failure\n2. AV fistula noted in left forearm",
      "dictated": "02/25/2025 08:25",
      "verified": "02/25/2025 08:32"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Right deltoid IM", "lot": "FL872P", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Pfizer, updated)", "date": "10/2024", "site": "Left deltoid IM", "lot": "PF481T", "mfr": "Pfizer" },
    { "vaccine": "Pneumococcal (PCV20 — Prevnar 20)", "date": "01/2024", "site": "Left deltoid IM", "lot": "PV318K", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (2nd dose)", "date": "08/2022", "site": "Left deltoid IM", "lot": "SH204R", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Mother: Deceased at 72 — CHF, T2DM, CKD requiring dialysis",
    "Father: Deceased at 68 — MI at age 68",
    "Sister (age 66): Type 2 Diabetes, hypertension, CKD Stage 3",
    "Brother (age 63): Healthy",
    "Strong family history of cardiorenal-metabolic disease"
  ],
  "socialHistory": [
    ["Occupation", "Retired postal worker (USPS, 35 years)"],
    ["Marital", "Married x 42 years; wife Dorothy assists with medication management and dietary compliance"],
    ["Tobacco", "Former — quit 15 years ago; previously 1.5 PPD x 30 years (45 pack-years)"],
    ["Alcohol", "Abstinent x 10 years; hx of heavy use"],
    ["Drugs", "Denies"],
    ["Exercise", "Limited — walks around house; limited by dyspnea and fatigue"],
    ["Housing", "Single-story home with wife; bathroom modifications in place"],
    ["Safety", "No firearms; fall risk — uses cane occasionally"],
    ["Advance Directive", "Healthcare proxy: Dorothy Washington (wife); discussed code status — currently FULL CODE but open to re-discussing if health declines"]
  ],
  "meta": {
    "caseId": "hyperkalemia-with-concurrent-acs",
    "diagnosis": "Severe Hyperkalemia (7.8 mEq/L) with Concurrent Type 2 NSTEMI, Acute-on-Chronic Kidney Injury, and Decompensated Heart Failure",
    "acuity": 1,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "cardiorenal"
  }
};
