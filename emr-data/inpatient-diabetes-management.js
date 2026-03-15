/* emr-data/inpatient-diabetes-management.js
   Inpatient Diabetes Management — Insulin Dosing, Hypoglycemia, Transitions
   Category: endocrine | Acuity: ESI-3
   Settings: Floor
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Rosa Gutierrez",
      "patientHPI": "I was admitted for pneumonia. I have diabetes and I take metformin at home but my blood sugars have been very high in the hospital — over 400 this morning. My usual medicines aren't working.",
      "dob": "02/14/1963", "age": "62", "sex": "Female", "pronouns": "she/her",
      "mrn": "MRN-662018", "language": "Spanish", "race": "Hispanic/Latina",
      "phone": "(323) 555-2018", "email": "",
      "address": "8844 E. Cesar Chavez Ave, Los Angeles, CA 90022",
      "insurance": "Medi-Cal", "pcp": "Dr. Maria Salinas, MD",
      "pharmacy": "Rite Aid — Cesar Chavez",
      "emergencyContact": { "name": "Juan Gutierrez", "phone": "(323) 555-9944", "relationship": "Spouse" }
    },
    "allergies": [{ "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [{ "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }],
    "familyHistory": ["Mother: Type 2 Diabetes", "Father: Type 2 Diabetes, coronary artery disease"],
    "socialHistory": [
      ["Diabetes history", "T2DM x12 years. HbA1c 9.8% 3 months ago. On metformin 1000mg BID and glipizide 10mg BID — HOLD BOTH during hospitalization."],
      ["Diet", "Aware of diabetic diet but admits difficulty — 'my family cooks traditional food'"],
      ["Monitoring", "Checks blood sugar at home 'sometimes' — 'usually around 200-280'"],
      ["Smoking", "Never"], ["Alcohol", "Rare"]
    ]
  },
  "encounters": {
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 3 CAP — blood glucose 382 this AM. Home metformin + glipizide held on admission. Needs inpatient insulin regimen.",
        "diagnosis": "Uncontrolled Hyperglycemia — Inpatient T2DM Management — Basal-Bolus Insulin"
      },
      "problems": [
        { "id": "prob-1", "description": "Inpatient hyperglycemia — BG 382. Home oral agents held appropriately (metformin: AKI/contrast risk; glipizide: hypoglycemia risk when NPO/poor PO intake). Needs basal-bolus insulin regimen. Target glucose 140-180 mg/dL in non-ICU setting.", "status": "Active", "onset": "Acute", "icd10": "R73.09" },
        { "id": "prob-2", "description": "Community-acquired pneumonia — day 3 ceftriaxone + azithromycin. Infection is driving insulin resistance and hyperglycemia.", "status": "Active", "onset": "Acute", "icd10": "J18.9" },
        { "id": "prob-3", "description": "Type 2 Diabetes — HbA1c 9.8% — poorly controlled at baseline. Will need outpatient regimen adjustment at discharge.", "status": "Chronic", "onset": "Chronic", "icd10": "E11.9" },
        { "id": "prob-4", "description": "Metformin HELD — not for hyperglycemia per se, but: (1) contrast dye used in CT = hold x48h, (2) potential AKI during acute illness. Restart at discharge if Cr stable.", "status": "Active", "onset": "Chronic", "icd10": "E11.9" }
      ],
      "medications": [
        { "id": "med-1", "name": "Metformin", "dose": "1000mg", "route": "PO", "frequency": "BID — HOME MED, HOLD during hospitalization", "status": "HOLD", "prescriber": "Dr. Maria Salinas, MD" },
        { "id": "med-2", "name": "Glipizide", "dose": "10mg", "route": "PO", "frequency": "BID — HOME MED, HOLD during hospitalization (hypoglycemia risk)", "status": "HOLD", "prescriber": "Dr. Maria Salinas, MD" },
        { "id": "med-3", "name": "Insulin Glargine (Lantus)", "dose": "20 units SQ", "route": "SQ", "frequency": "Nightly — BASAL (0.2 units/kg for 100kg patient)", "status": "NEW — starting today", "prescriber": "Dr. Medicine Attending" },
        { "id": "med-4", "name": "Insulin Lispro (Humalog)", "dose": "Per correction scale + carb ratio", "route": "SQ", "frequency": "Before meals + Q6H correction — BOLUS", "status": "NEW — starting today", "prescriber": "Dr. Medicine Attending" },
        { "id": "med-5", "name": "Dextrose 50% (D50)", "dose": "25g IV (one ampule)", "route": "IV", "frequency": "PRN glucose <70 mg/dL — HYPOGLYCEMIA PROTOCOL", "status": "Active — PRN", "prescriber": "Dr. Medicine Attending" }
      ],
      "vitals": [{ "date": "03/17/2026", "time": "06:00", "bp": "138/82", "hr": "88", "rr": "18", "temp": "37.8°C", "spo2": "93%", "pain": "2/10" }],
      "visits": [{
        "id": "visit-1", "type": "Medicine Progress Note — Diabetes Management Consult", "date": "03/17/2026", "provider": "Dr. Medicine Attending + Endocrine Consult",
        "cc": "Inpatient hyperglycemia — initiate basal-bolus insulin",
        "hpi": "62F with T2DM (HbA1c 9.8%) admitted for CAP day 3. Home metformin and glipizide appropriately held. Blood glucose readings since admission: admission 312, day 1 AM 288, day 2 AM 344, today 382 mg/dL. No insulin has been ordered — only using insulin sliding scale alone (INADEQUATE for persistent hyperglycemia >250).\n\nINPATIENT DIABETES MANAGEMENT PRINCIPLES:\n1. HOLD metformin: risk of lactic acidosis with acute illness/contrast/AKI\n2. HOLD sulfonylureas (glipizide): hypoglycemia risk with variable PO intake\n3. HOLD SGLT2 inhibitors: euDKA risk in hospitalized patients\n4. NEVER use SLIDING SCALE ALONE: reactive, not proactive — does not prevent hyperglycemia\n5. USE BASAL-BOLUS INSULIN for persistent BG >180 in hospitalized T2DM:\n   - Basal: 0.2 units/kg/day glargine (start conservatively — titrate up)\n   - Bolus: nutritional + correction at each meal\n   - Target: 140-180 mg/dL (non-ICU setting per ADA/Endocrine Society)\n   - ICU target: 140-180 mg/dL (NICE-SUGAR trial — tight control <110 INCREASES mortality)\n6. HYPOGLYCEMIA PROTOCOL: BG <70 = 15g glucose (4oz juice or D50 25g IV), recheck in 15 min\n\nINSULIN CALCULATION FOR THIS PATIENT (100 kg):\n- Total daily dose (TDD) = 0.4 units/kg = 40 units/day\n- Basal (50% TDD) = 20 units glargine nightly\n- Bolus (50% TDD ÷ 3 meals) = ~7 units per meal + correction",
        "assessment": "Start basal-bolus insulin. Current sliding scale alone is reactive and insufficient. Target BG 140-180. Recheck QID. Endocrine following. Discharge plan: reassess need for insulin at discharge vs. return to oral agents + GLP-1 agonist given poor baseline control.",
        "plan": "Start glargine 20 units SQ nightly. Lispro 7 units before each meal + correction scale. QID glucose monitoring. If BG consistently >250, increase glargine by 10-20%. Hypoglycemia protocol active. Restart metformin at discharge (if Cr stable, no contrast in 48h). Consider GLP-1 agonist (semaglutide) at discharge given HbA1c 9.8% and likely persistent insulin resistance. Diabetes education consult before discharge. Endocrine outpatient follow-up."
      }],
      "labs": [{
        "date": "03/17/2026", "time": "06:00", "status": "Final", "orderedBy": "Dr. Medicine",
        "accession": "LAB-662018", "collected": "03/17/2026 05:55", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "GLUCOSE MONITORING — TREND", "results": [
            { "test": "Fasting BG today", "value": "382", "unit": "mg/dL", "range": "Target 140-180 inpatient", "flag": "H" },
            { "test": "Yesterday BG trend", "value": "288 (AM) / 344 (PM) / 312 (HS)", "unit": "mg/dL", "range": "140-180", "flag": "H" },
            { "test": "HbA1c (from 3 months ago)", "value": "9.8", "unit": "%", "range": "<7 for T2DM", "flag": "H" }
          ]},
          { "name": "METABOLIC", "results": [
            { "test": "Creatinine", "value": "0.9", "unit": "mg/dL", "range": "0.5-1.1", "flag": "" },
            { "test": "Potassium", "value": "4.1", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Bicarbonate", "value": "22", "unit": "mEq/L", "range": "22-29", "flag": "" },
            { "test": "Anion Gap", "value": "12", "unit": "", "range": "8-12", "flag": "" }
          ]}
        ]
      }],
      "imaging": []
    },
    "ed": {
      "patient": {
        "chiefComplaint": "Not applicable — admitted directly from outpatient",
        "diagnosis": "Admitted for CAP"
      },
      "problems": [], "medications": [], "vitals": [], "visits": [], "labs": [], "imaging": []
    }
  },
  "references": [
    { "id": "ADA-Inpatient-2024", "title": "ADA Standards of Care — Diabetes Management in the Hospital", "authors": "American Diabetes Association Professional Practice Committee", "journal": "Diabetes Care", "year": 2024, "doi": "10.2337/dc24-S016", "url": "https://diabetesjournals.org/care/article/47/Supplement_1/S295/153957/16-Diabetes-Care-in-the-Hospital-Standards-of-Care", "openAccess": true, "validates": ["Inpatient glucose targets (140-180 mg/dL)", "Basal-bolus insulin initiation", "Oral agent management", "Discharge planning"] },
    { "id": "NICE-SUGAR", "title": "Intensive versus Conventional Glucose Control in Critically Ill Patients (NICE-SUGAR)", "authors": "Finfer S, Chittock DR, Su SY, et al.", "journal": "NEJM", "year": 2009, "doi": "10.1056/NEJMoa0810625", "url": "https://www.nejm.org/doi/10.1056/NEJMoa0810625", "openAccess": false, "validates": ["Tight glucose control <110 increases mortality in ICU", "Target 140-180 mg/dL in ICU", "Hypoglycemia danger"] }
  ]
};
