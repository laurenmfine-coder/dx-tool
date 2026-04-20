
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Rosa Gutierrez",
      "patientHPI": "I was admitted for pneumonia. I have diabetes and I take metformin at home but my blood sugars have been very high in the hospital \u2014 over 400 this morning. My usual medicines aren't working.",
      "dob": "02/14/1963",
      "age": "62",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-662018",
      "language": "Spanish",
      "race": "Hispanic/Latina",
      "phone": "(323) 555-2018",
      "email": "",
      "address": "8844 E. Cesar Chavez Ave, Los Angeles, CA 90022",
      "insurance": "Medi-Cal",
      "pcp": "Dr. Maria Salinas, MD",
      "pharmacy": "Rite Aid \u2014 Cesar Chavez",
      "emergencyContact": {
        "name": "Juan Gutierrez",
        "phone": "(323) 555-9944",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025",
        "lot": "FL-25",
        "site": "Left Deltoid"
      }
    ],
    "familyHistory": [
      "Mother: Type 2 Diabetes",
      "Father: Type 2 Diabetes, coronary artery disease"
    ],
    "socialHistory": [
      [
        "Diabetes history",
        "T2DM x12 years. HbA1c 9.8% 3 months ago. On metformin 1000mg BID and glipizide 10mg BID \u2014 HOLD BOTH during hospitalization."
      ],
      [
        "Diet",
        "Aware of diabetic diet but admits difficulty \u2014 'my family cooks traditional food'"
      ],
      [
        "Monitoring",
        "Checks blood sugar at home 'sometimes' \u2014 'usually around 200-280'"
      ],
      [
        "Smoking",
        "Never"
      ],
      [
        "Alcohol",
        "Rare"
      ]
    ]
  },
  "encounters": {
    "inpatient": {
      "patient": {
        "chiefComplaint": "Day 3 CAP \u2014 blood glucose 382 this AM. Home metformin + glipizide held on admission. Needs inpatient insulin regimen.",
        "diagnosis": "Uncontrolled Hyperglycemia \u2014 Inpatient T2DM Management \u2014 Basal-Bolus Insulin"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Inpatient hyperglycemia \u2014 BG 382. Home oral agents held appropriately (metformin: AKI/contrast risk; glipizide: hypoglycemia risk when NPO/poor PO intake). Needs basal-bolus insulin regimen. Target glucose 140-180 mg/dL in non-ICU setting.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "R73.09"
        },
        {
          "id": "prob-2",
          "description": "Community-acquired pneumonia \u2014 day 3 ceftriaxone + azithromycin. Infection is driving insulin resistance and hyperglycemia.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "J18.9"
        },
        {
          "id": "prob-3",
          "description": "Type 2 Diabetes \u2014 HbA1c 9.8% \u2014 poorly controlled at baseline. Will need outpatient regimen adjustment at discharge.",
          "status": "Chronic",
          "onset": "Chronic",
          "icd10": "E11.9"
        },
        {
          "id": "prob-4",
          "description": "Metformin HELD \u2014 not for hyperglycemia per se, but: (1) contrast dye used in CT = hold x48h, (2) potential AKI during acute illness. Restart at discharge if Cr stable.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "E11.9"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Metformin",
          "dose": "1000mg",
          "route": "PO",
          "frequency": "BID \u2014 HOME MED, HOLD during hospitalization",
          "status": "HOLD",
          "prescriber": "Dr. Maria Salinas, MD"
        },
        {
          "id": "med-2",
          "name": "Glipizide",
          "dose": "10mg",
          "route": "PO",
          "frequency": "BID \u2014 HOME MED, HOLD during hospitalization (hypoglycemia risk)",
          "status": "HOLD",
          "prescriber": "Dr. Maria Salinas, MD"
        },
        {
          "id": "med-3",
          "name": "Insulin Glargine (Lantus)",
          "dose": "20 units SQ",
          "route": "SQ",
          "frequency": "Nightly \u2014 BASAL (0.2 units/kg for 100kg patient)",
          "status": "NEW \u2014 starting today",
          "prescriber": "Dr. Medicine Attending"
        },
        {
          "id": "med-4",
          "name": "Insulin Lispro (Humalog)",
          "dose": "Per correction scale + carb ratio",
          "route": "SQ",
          "frequency": "Before meals + Q6H correction \u2014 BOLUS",
          "status": "NEW \u2014 starting today",
          "prescriber": "Dr. Medicine Attending"
        },
        {
          "id": "med-5",
          "name": "Dextrose 50% (D50)",
          "dose": "25g IV (one ampule)",
          "route": "IV",
          "frequency": "PRN glucose <70 mg/dL \u2014 HYPOGLYCEMIA PROTOCOL",
          "status": "Active \u2014 PRN",
          "prescriber": "Dr. Medicine Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/17/2026",
          "time": "06:00",
          "bp": "138/82",
          "hr": "88",
          "rr": "18",
          "temp": "37.8\u00b0C",
          "spo2": "93%",
          "pain": "2/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Medicine Progress Note \u2014 Diabetes Management Consult",
          "date": "03/17/2026",
          "provider": "Dr. Medicine Attending + Endocrine Consult",
          "cc": "Inpatient hyperglycemia \u2014 initiate basal-bolus insulin",
          "hpi": "62F with T2DM (HbA1c 9.8%) admitted for CAP day 3. Home metformin and glipizide appropriately held. Blood glucose readings since admission: admission 312, day 1 AM 288, day 2 AM 344, today 382 mg/dL. No insulin has been ordered \u2014 only using insulin sliding scale alone (INADEQUATE for persistent hyperglycemia >250).\n\nINPATIENT DIABETES MANAGEMENT PRINCIPLES:\n1. HOLD metformin: risk of lactic acidosis with acute illness/contrast/AKI\n2. HOLD sulfonylureas (glipizide): hypoglycemia risk with variable PO intake\n3. HOLD SGLT2 inhibitors: euDKA risk in hospitalized patients\n4. NEVER use SLIDING SCALE ALONE: reactive, not proactive \u2014 does not prevent hyperglycemia\n5. USE BASAL-BOLUS INSULIN for persistent BG >180 in hospitalized T2DM:\n   - Basal: 0.2 units/kg/day glargine (start conservatively \u2014 titrate up)\n   - Bolus: nutritional + correction at each meal\n   - Target: 140-180 mg/dL (non-ICU setting per ADA/Endocrine Society)\n   - ICU target: 140-180 mg/dL (NICE-SUGAR trial \u2014 tight control <110 INCREASES mortality)\n6. HYPOGLYCEMIA PROTOCOL: BG <70 = 15g glucose (4oz juice or D50 25g IV), recheck in 15 min\n\nINSULIN CALCULATION FOR THIS PATIENT (100 kg):\n- Total daily dose (TDD) = 0.4 units/kg = 40 units/day\n- Basal (50% TDD) = 20 units glargine nightly\n- Bolus (50% TDD \u00f7 3 meals) = ~7 units per meal + correction",
          "assessment": "Start basal-bolus insulin. Current sliding scale alone is reactive and insufficient. Target BG 140-180. Recheck QID. Endocrine following. Discharge plan: reassess need for insulin at discharge vs. return to oral agents + GLP-1 agonist given poor baseline control.",
          "plan": "Start glargine 20 units SQ nightly. Lispro 7 units before each meal + correction scale. QID glucose monitoring. If BG consistently >250, increase glargine by 10-20%. Hypoglycemia protocol active. Restart metformin at discharge (if Cr stable, no contrast in 48h). Consider GLP-1 agonist (semaglutide) at discharge given HbA1c 9.8% and likely persistent insulin resistance. Diabetes education consult before discharge. Endocrine outpatient follow-up."
        }
      ],
      "labs": [
        {
          "date": "03/17/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. Medicine",
          "accession": "LAB-662018",
          "collected": "03/17/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "GLUCOSE MONITORING \u2014 TREND",
              "results": [
                {
                  "test": "Fasting BG today",
                  "value": "382",
                  "unit": "mg/dL",
                  "range": "Target 140-180 inpatient",
                  "flag": "H"
                },
                {
                  "test": "Yesterday BG trend",
                  "value": "288 (AM) / 344 (PM) / 312 (HS)",
                  "unit": "mg/dL",
                  "range": "140-180",
                  "flag": "H"
                },
                {
                  "test": "HbA1c (from 3 months ago)",
                  "value": "9.8",
                  "unit": "%",
                  "range": "<7 for T2DM",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "METABOLIC",
              "results": [
                {
                  "test": "Creatinine",
                  "value": "0.9",
                  "unit": "mg/dL",
                  "range": "0.5-1.1",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.1",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "Bicarbonate",
                  "value": "22",
                  "unit": "mEq/L",
                  "range": "22-29",
                  "flag": ""
                },
                {
                  "test": "Anion Gap",
                  "value": "12",
                  "unit": "",
                  "range": "8-12",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": []
    },
    "ed": {
      "patient": {
        "chiefComplaint": "Not applicable \u2014 admitted directly from outpatient",
        "diagnosis": "Admitted for CAP"
      },
      "problems": [],
      "medications": [],
      "vitals": [],
      "visits": [],
      "labs": [],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "ADA-Inpatient-2024",
      "title": "ADA Standards of Care \u2014 Diabetes Management in the Hospital",
      "authors": "American Diabetes Association Professional Practice Committee",
      "journal": "Diabetes Care",
      "year": 2024,
      "doi": "10.2337/dc24-S016",
      "url": "https://diabetesjournals.org/care/article/47/Supplement_1/S295/153957/16-Diabetes-Care-in-the-Hospital-Standards-of-Care",
      "openAccess": true,
      "validates": [
        "Inpatient glucose targets (140-180 mg/dL)",
        "Basal-bolus insulin initiation",
        "Oral agent management",
        "Discharge planning"
      ]
    },
    {
      "id": "NICE-SUGAR",
      "title": "Intensive versus Conventional Glucose Control in Critically Ill Patients (NICE-SUGAR)",
      "authors": "Finfer S, Chittock DR, Su SY, et al.",
      "journal": "NEJM",
      "year": 2009,
      "doi": "10.1056/NEJMoa0810625",
      "url": "https://www.nejm.org/doi/10.1056/NEJMoa0810625",
      "openAccess": false,
      "validates": [
        "Tight glucose control <110 increases mortality in ICU",
        "Target 140-180 mg/dL in ICU",
        "Hypoglycemia danger"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Inpatient Hyperglycemia \u2014 Basal-Bolus Insulin Protocol, Glucose 280-380 Range",
    "caseId": "inpatient-diabetes-management"
  },
  "problems": [
    {
      "problem": "Inpatient hyperglycemia \u2014 suboptimal control",
      "icd": "R73.09",
      "onset": "2024",
      "status": "Active",
      "notes": "Robert Diaz, admitted for pneumonia, glucose 280-380. Sliding scale only is insufficient."
    },
    {
      "problem": "Type 2 diabetes \u2014 A1c 9.8%",
      "icd": "E11.65",
      "onset": "2018",
      "status": "Active",
      "notes": "Suboptimally controlled at home \u2014 inpatient requires basal-bolus, not sliding scale alone"
    },
    {
      "problem": "Pneumonia \u2014 primary admission diagnosis",
      "icd": "J18.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Hyperglycemia worsens infection outcomes \u2014 target glucose 140-180 inpatient"
    }
  ],
  "medications": [
    {
      "name": "Glargine 20 units SQ QHS \u2014 basal insulin",
      "sig": "Subcutaneous at bedtime daily \u2014 provides 24h glucose lowering foundation",
      "prescriber": "Medicine/Endocrinology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Lispro 4 units SQ with each meal (nutritional insulin)",
      "sig": "Give with meal \u2014 only if eating. Hold if NPO.",
      "prescriber": "Medicine/Endocrinology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Lispro correction insulin per scale (q4h)",
      "sig": "Correction: glucose 181-240=2 units, 241-300=4 units, >300=call MD",
      "prescriber": "Medicine/Endocrinology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Metformin \u2014 HOLD during hospitalization",
      "sig": "HOLD \u2014 acute illness, IV contrast risk, renal function changes",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "HELD"
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Inpatient Glucose Trending",
      "results": [
        {
          "test": "Fasting glucose Day 1",
          "value": "342",
          "unit": "mg/dL",
          "ref": "140-180 target",
          "flag": "H"
        },
        {
          "test": "Pre-lunch glucose Day 2",
          "value": "285",
          "unit": "mg/dL",
          "ref": "140-180",
          "flag": "H"
        },
        {
          "test": "Bedtime glucose Day 2",
          "value": "312",
          "unit": "mg/dL",
          "ref": "140-180",
          "flag": "H"
        },
        {
          "test": "HbA1c",
          "value": "9.8",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.0",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [],
  "guided": {
    "ddxTargets": [
      "Inpatient T2DM \u2014 basal-bolus required, sliding scale inadequate (correct)",
      "Sliding scale only is sufficient \u2014 reactive dosing alone results in prolonged hyperglycemia",
      "Insulin drip needed \u2014 not for stable ward patient with T2DM",
      "Hold all insulin \u2014 dangerous, hyperglycemia worsens infection",
      "DKA developing \u2014 no acidosis, T2DM not T1DM",
      "Corticosteroid hyperglycemia \u2014 not on steroids here"
    ],
    "coachPrompts": {
      "final": "Diagnosis: inpatient hyperglycemia \u2014 basal-bolus protocol. Key learning: (1) Sliding scale alone is inferior: reactive dosing only treats glucose AFTER it's already high. No basal insulin = glucose rises unchecked between meals. AACE/ADA guidelines: basal-bolus is standard for non-ICU medical/surgical patients with diabetes requiring insulin. (2) Basal:bolus:correction ratio: start with total daily dose = 0.3-0.5 units/kg/day. Split: 50% basal (glargine QHS), 50% nutritional (lispro with each meal). Add correction scale for hyperglycemia between meals. (3) Metformin hold: stop metformin during hospitalization. Risk of lactic acidosis with acute illness. Risk if IV contrast ordered urgently. Restart after discharge once creatinine stable. (4) Target glucose: 140-180 mg/dL for non-ICU patients. Tight control (<110) increases hypoglycemia without mortality benefit (NICE-SUGAR). Goal: minimize sustained hyperglycemia, avoid hypoglycemia. (5) Discharge planning: convert total inpatient insulin dose to outpatient regimen. If patient required >20 units/day in hospital, outpatient intensification needed (GLP-1, SGLT2i, insulin). Send A1c result to outpatient team."
    }
  }
};
