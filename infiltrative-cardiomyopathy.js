// Virtual EMR Case: Infiltrative Cardiomyopathy (Cardiac Amyloidosis)
// Variant: infiltrative-cardiomyopathy | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Lawrence Prescott",
  "patientHPI": "I've been getting more short of breath lately, especially when I try to do simple things like walk up stairs or carry groceries. My legs have been swelling up more than usual, and I gained six pounds in just a few weeks even though I'm taking my water pill. I've been needing to sleep with more pillows to breathe better at night.",
    "dob": "09/03/1950",
    "age": 75,
    "sex": "Male",
    "mrn": "RDX-2025-37184",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B with United Supplement",
    "pcp": "Dr. Patricia Coleman, MD",
    "pharmacy": "CVS Pharmacy — 2200 N Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black or African American",
    "address": "7471 Foxglove Dr, Minneapolis, MN 55403",
    "phone": "(954) 555-3891",
    "email": "l.prescott50@email.com",
    "emergencyContact": {
      "name": "Diane Prescott (Wife)",
      "phone": "(954) 555-3905"
    }
  },
  "problems": [
    {
      "problem": "Cardiac Amyloidosis (ATTR Wild-Type, Confirmed)",
      "icd": "E85.82",
      "onset": "2025",
      "status": "Active",
      "notes": "Confirmed by Tc-99m PBP scan (Grade 3 uptake) 03/2025; no AL amyloid on serum/urine SPEP/UIEP and free light chains; started tafamidis"
    },
    {
      "problem": "Heart Failure with Preserved EF (HFpEF)",
      "icd": "I50.32",
      "onset": "2022",
      "status": "Active",
      "notes": "EF 50-55%; progressive diastolic dysfunction; restrictive filling pattern; now decompensating"
    },
    {
      "problem": "Bilateral Carpal Tunnel Syndrome",
      "icd": "G56.00",
      "onset": "2017",
      "status": "Active",
      "notes": "Bilateral CTS release 2018; common precursor to ATTR amyloidosis"
    },
    {
      "problem": "Lumbar Spinal Stenosis",
      "icd": "M48.06",
      "onset": "2019",
      "status": "Active",
      "notes": "Decompressive surgery 2020; amyloid deposition in ligamentum flavum suspected retrospectively"
    },
    {
      "problem": "Atrial Fibrillation, Persistent",
      "icd": "I48.1",
      "onset": "2023",
      "status": "Active",
      "notes": "Rate-controlled; on apixaban; cardioversion unsuccessful x2"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2005",
      "status": "Active",
      "notes": "Previously on ACEi; now hypotensive — most antihypertensives discontinued"
    }
  ],
  "medications": [
    {
      "name": "Tafamidis 80mg daily",
      "sig": "Take 4 capsules (20mg each) by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "04/2025",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Furosemide 40mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Singh",
      "start": "08/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Apixaban 5mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Singh",
      "start": "06/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Spironolactone 25mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "01/2025",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg q6h PRN",
      "sig": "Take 1 tablet by mouth every 6 hours as needed for pain; max 2000mg/day",
      "prescriber": "Dr. Coleman",
      "start": "06/2020",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Digoxin",
      "type": "Drug",
      "reaction": "Contraindicated — cardiac amyloidosis (binds to amyloid fibrils → toxicity at therapeutic levels)",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "NSAIDs",
      "type": "Drug",
      "reaction": "Acute kidney injury (creatinine rise to 2.4 on ibuprofen in 2023)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/10/2026",
      "bp": "98/62",
      "hr": 88,
      "rr": 22,
      "temp": "97.8°F",
      "spo2": "93%",
      "wt": "206 lbs",
      "ht": "6'1\"",
      "bmi": 27.2,
      "setting": "ED"
    },
    {
      "date": "11/18/2025",
      "bp": "106/68",
      "hr": 82,
      "rr": 18,
      "temp": "98.0°F",
      "spo2": "95%",
      "wt": "198 lbs",
      "ht": "6'1\"",
      "bmi": 26.1,
      "setting": "Specialist"
    },
    {
      "date": "07/22/2025",
      "bp": "112/72",
      "hr": 78,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "96%",
      "wt": "192 lbs",
      "ht": "6'1\"",
      "bmi": 25.3,
      "setting": "Specialist"
    },
    {
      "date": "01/14/2025",
      "bp": "118/74",
      "hr": 76,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "190 lbs",
      "ht": "6'1\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/18/2025",
      "type": "Specialist",
      "provider": "Dr. Rajiv Singh, MD (Cardiology)",
      "cc": "HFpEF decompensation; cardiac amyloidosis management",
      "hpi": "75-year-old male with confirmed wild-type ATTR cardiac amyloidosis (Tc-99m PBP Grade 3, 03/2025) and progressive HFpEF presenting with worsening dyspnea on exertion, bilateral LE edema, and 6 lb weight gain over 3 weeks despite furosemide 40mg daily. Reports 2-pillow orthopnea and intermittent PND. Walking tolerance decreased from 2 blocks to 50 feet. Reports presyncope with standing. AFib rate-controlled. On tafamidis since 04/2025. BNP rising (840 → 1240). Systolic BP trending down — unable to tolerate any vasodilators or beta-blockers.",
      "exam": "General: Dyspneic at rest when lying flat. CV: Irregularly irregular, S3 gallop, JVP 14 cm H2O, Kussmaul's sign present. Lungs: Bilateral basal crackles 1/3 up. Abdomen: Hepatomegaly 4 cm below costal margin, positive hepatojugular reflux. Extremities: 3+ bilateral pitting edema to mid-shin. Neuro: Intact but perioral and digital numbness (neuropathy).",
      "assessment": "1. ATTR cardiac amyloidosis — progressive despite tafamidis; decompensated HF\n2. HFpEF — NYHA Class III-IV; volume overloaded\n3. AFib — rate-controlled\n4. Autonomic neuropathy — orthostatic hypotension limiting treatment",
      "plan": "1. Increase furosemide to 40mg BID\n2. Add metolazone 2.5mg PRN for diuretic resistance\n3. Continue tafamidis 80mg\n4. Check echo — assess for progressive wall thickening\n5. BNP, BMP, hepatic panel\n6. Compression stockings for orthostasis\n7. Salt restriction <2g/day, fluid restriction 1.5L/day\n8. Discuss advanced HF referral if continues to decline\n9. RTC 2 weeks"
    },
    {
      "id": "V002",
      "date": "07/22/2025",
      "type": "Specialist",
      "provider": "Dr. Rajiv Singh, MD (Cardiology)",
      "cc": "Cardiac amyloidosis follow-up; tafamidis initiation results",
      "hpi": "75-year-old male for follow-up 3 months after starting tafamidis. Subjectively improved — dyspnea stable, edema reduced, walking 2 blocks. Weight stable. BNP decreased from 840 to 620. Echo shows stable wall thickness and EF 52%. Tolerating tafamidis without side effects. BP stable at 112/72.",
      "exam": "General: NAD. CV: Irregularly irregular. 1+ bilateral edema. No JVD. Lungs: Clear.",
      "assessment": "1. ATTR cardiac amyloidosis — stable on tafamidis\n2. HFpEF — NYHA Class II; improved",
      "plan": "1. Continue tafamidis 80mg\n2. Continue furosemide 40mg daily\n3. RTC 4 months with echo"
    }
  ],
  "labs": [
    {
      "date": "02/10/2026",
      "time": "19:30",
      "orderedBy": "Dr. Karen Moy, MD (ED)",
      "collected": "02/10/2026 19:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-021045",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "94", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "38", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.8", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "eGFR", "value": "36", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
            { "test": "Sodium", "value": "132", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "5.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "H" },
            { "test": "Chloride", "value": "98", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "22", "unit": "mEq/L", "range": "23-29", "flag": "L" }
          ]
        },
        {
          "name": "CARDIAC MARKERS",
          "results": [
            { "test": "BNP", "value": "1680", "unit": "pg/mL", "range": "<100", "flag": "H" },
            { "test": "Troponin I (hs)", "value": "0.08", "unit": "ng/mL", "range": "<0.04", "flag": "H" }
          ]
        },
        {
          "name": "HEPATIC PANEL",
          "results": [
            { "test": "ALT (SGPT)", "value": "52", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "58", "unit": "U/L", "range": "10-40", "flag": "H" },
            { "test": "Total Bilirubin", "value": "2.1", "unit": "mg/dL", "range": "0.1-1.2", "flag": "H" },
            { "test": "Albumin", "value": "3.0", "unit": "g/dL", "range": "3.5-5.5", "flag": "L" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "11.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "35.4", "unit": "%", "range": "38.0-50.0", "flag": "L" },
            { "test": "Platelet Count", "value": "188", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/20/2025",
      "study": "ECHOCARDIOGRAM (TRANSTHORACIC)",
      "accession": "IMG-2025-11205",
      "status": "FINAL",
      "orderedBy": "Dr. Rajiv Singh, MD",
      "readBy": "Dr. Rajiv Singh, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "75M with ATTR cardiac amyloidosis, HFpEF. Decompensation assessment.",
      "technique": "Comprehensive 2D and Doppler transthoracic echocardiogram with strain.",
      "findings": "LV: Normal cavity size. Wall thickness: IVSd 1.6 cm (increased from 1.4 cm, 07/2025), LVPWd 1.5 cm. EF 50% (decreased from 52%). Granular sparkling myocardial texture. Global longitudinal strain −12% (abnormal, apical sparing pattern classic for amyloidosis).\\n\\nDiastolic function: Grade III (restrictive) filling pattern. E/A 3.2, E/e' 22.\\n\\nLA: Severely dilated (48 mL/m²).\\n\\nRA: Moderately dilated.\\n\\nRV: Mildly reduced function, TAPSE 1.5 cm.\\n\\nValves: Mild-moderate MR. Moderate TR. RVSP 52 mmHg.\\n\\nPericardium: Small effusion.",
      "impression": "1. Progressive infiltrative cardiomyopathy — wall thickness increased, EF declining.\\n2. Classic apical sparing pattern on GLS — consistent with cardiac amyloidosis.\\n3. Restrictive diastolic filling (Grade III).\\n4. Biventricular dysfunction — RV now mildly reduced.\\n5. Elevated RVSP (52 mmHg) — pulmonary hypertension.\\n6. Small pericardial effusion.",
      "dictated": "11/20/2025 15:40",
      "verified": "11/20/2025 17:55"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/02/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-HD286",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2025-26)",
      "date": "10/24/2025",
      "site": "Right deltoid IM",
      "lot": "CM2025-656",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-418",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "09/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-622",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "11/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-784",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Heart failure at age 70, carpal tunnel syndrome, deceased at 76",
    "Mother: HTN, alive at 95 (lives in assisted living)",
    "Brother: Bilateral carpal tunnel syndrome (age 68), alive at 72",
    "Sister: HTN, T2DM, alive at 70"
  ],
  "socialHistory": [
    ["Occupation", "Retired attorney; retired 2018"],
    ["Marital", "Married 50 years; wife Diane, age 73"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Stopped — was occasional; discontinued per HF recommendations"],
    ["Drugs", "Denies"],
    ["Exercise", "Minimal — chair exercises only; unable to walk >50 feet without dyspnea"],
    ["Housing", "Single-family home with wife; considering single-story home due to stairs"],
    ["Safety", "Fall risk — presyncope with position changes; grab bars installed in bathroom"],
    ["Advance Directive", "POLST on file — DNR/DNI; HCP: wife Diane Prescott"]
  ],
  "meta": {
    "caseId": "infiltrative-cardiomyopathy",
    "diagnosis": "Infiltrative Cardiomyopathy (Wild-Type ATTR Cardiac Amyloidosis)",
    "acuity": 2,
    "presentation": "Cardiac Emergency",
    "category": "cardiovascular"
  }
};
