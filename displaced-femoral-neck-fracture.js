// Virtual EMR Case: Displaced Femoral Neck Fracture
// Variant: displaced-femoral-neck-fracture | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Doris Jean Campbell",
    "dob": "11/14/1941",
    "age": 83,
    "sex": "Female",
    "mrn": "NSU-2025-28503",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B with Humana Medicare Advantage",
    "pcp": "Dr. Lawrence Chen, MD",
    "pharmacy": "CVS Pharmacy — 2600 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "1920 SE 4th St, Fort Lauderdale, FL 33301",
    "phone": "(954) 555-8726",
    "email": "d.campbell41@email.com",
    "emergencyContact": {
      "name": "Patricia Campbell-Ross (Daughter)",
      "phone": "(954) 555-8750"
    }
  },
  "problems": [
    {
      "problem": "Osteoporosis, Severe",
      "icd": "M80.08XA",
      "onset": "2015",
      "status": "Active",
      "notes": "T-score -3.4 femoral neck; -3.1 lumbar spine; on zoledronic acid annual infusion; prior vertebral compression fracture T12 (2020)"
    },
    {
      "problem": "Vertebral Compression Fracture T12",
      "icd": "M80.08XS",
      "onset": "2020",
      "status": "Resolved",
      "notes": "Osteoporotic compression fracture; managed conservatively with bracing"
    },
    {
      "problem": "Atrial Fibrillation, Persistent",
      "icd": "I48.1",
      "onset": "2017",
      "status": "Active",
      "notes": "Rate controlled; on warfarin (CHA2DS2-VASc 5)"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3a",
      "icd": "N18.31",
      "onset": "2019",
      "status": "Active",
      "notes": "eGFR 52; multifactorial — age, HTN, DM"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2008",
      "status": "Active",
      "notes": "A1c 7.0%; on metformin (dose-adjusted for CKD) and glipizide"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2000",
      "status": "Active",
      "notes": "On losartan and metoprolol"
    }
  ],
  "medications": [
    {
      "name": "Warfarin 3mg daily (dose varies per INR)",
      "sig": "Take as directed by INR clinic — currently 3mg daily",
      "prescriber": "Dr. Chen",
      "start": "06/2017",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Metoprolol Succinate 50mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Chen",
      "start": "06/2017",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Losartan 50mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Chen",
      "start": "01/2002",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals (renal dose)",
      "prescriber": "Dr. Chen",
      "start": "01/2009",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Glipizide 5mg daily",
      "sig": "Take 1 tablet by mouth once daily before breakfast",
      "prescriber": "Dr. Chen",
      "start": "06/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Zoledronic Acid 5mg IV annually",
      "sig": "Infuse 5 mg IV over 15 minutes annually — administered in office",
      "prescriber": "Dr. Chen",
      "start": "06/2021",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Calcium-Vitamin D 600mg/800IU BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Chen",
      "start": "06/2016",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Aspirin",
      "type": "Drug",
      "reaction": "GI bleeding (upper GI bleed 2015)",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Iodinated Contrast",
      "type": "Drug",
      "reaction": "Urticaria and bronchospasm",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "12/04/2024",
      "bp": "136/72",
      "hr": 72,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "95%",
      "wt": "124 lbs",
      "ht": "5'2\"",
      "bmi": 22.7,
      "setting": "PCP Office"
    },
    {
      "date": "06/12/2024",
      "bp": "140/74",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "126 lbs",
      "ht": "5'2\"",
      "bmi": 23.0,
      "setting": "PCP Office"
    },
    {
      "date": "12/10/2023",
      "bp": "134/70",
      "hr": 70,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "128 lbs",
      "ht": "5'2\"",
      "bmi": 23.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/04/2024",
      "type": "Primary Care",
      "provider": "Dr. Lawrence Chen, MD",
      "cc": "Fall risk assessment; INR check; DM/HTN management",
      "hpi": "83-year-old female with severe osteoporosis (T-score -3.4 femoral neck), persistent atrial fibrillation on warfarin, CKD 3a, DM2, and prior T12 compression fracture for routine visit. Has been increasingly unsteady on feet — daughter reports 2 near-falls in past month (caught herself on furniture). Uses cane at home but daughter wants her to use walker. Kyphotic posture worsening since compression fracture. INR has been labile — ranged 1.8-4.2 over past 3 months. Compliant with zoledronic acid (last infusion 06/2024).",
      "exam": "General: Thin elderly female, kyphotic posture. CV: Irregularly irregular. Lungs: CTAB. MSK: Thoracic kyphosis. Gait: Slow, unsteady, uses cane. Timed Up-and-Go: 18 seconds (elevated fall risk). Skin: No bruising.",
      "assessment": "1. Fall risk — HIGH; TUG 18 seconds; osteoporosis with prior fragility fracture; on warfarin\n2. Osteoporosis, severe — on zoledronic acid; kyphosis worsening\n3. AF on warfarin — labile INR; BLEEDING RISK with falls\n4. CKD 3a — stable\n5. DM2 — well controlled",
      "plan": "1. STRONGLY recommend transition from cane to rolling walker — daughter to purchase\n2. Home safety assessment ordered — remove throw rugs, improve lighting, grab bars\n3. PT referral for balance and strengthening\n4. INR today: 2.6 (therapeutic); recheck in 2 weeks\n5. Discussed switching warfarin to apixaban — renal function borderline; will discuss with cardiologist\n6. DEXA scan due — order for February\n7. HIGH FALL RISK WARNING: hip fracture would be catastrophic given severe osteoporosis and anticoagulation"
    },
    {
      "id": "V002",
      "date": "06/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Lawrence Chen, MD",
      "cc": "Post zoledronic acid infusion check; routine labs",
      "hpi": "82-year-old female 1 week post annual zoledronic acid infusion. Tolerated well — mild flu-like symptoms for 24 hours post-infusion, resolved with acetaminophen. No new symptoms.",
      "exam": "General: NAD. MSK: Kyphotic, stable.",
      "assessment": "1. Post zoledronic acid — tolerated\n2. Stable chronic conditions",
      "plan": "1. Continue current medications\n2. INR 2.4 — therapeutic\n3. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "12/04/2024",
      "time": "09:30",
      "orderedBy": "Dr. Lawrence Chen, MD",
      "collected": "12/04/2024 09:00",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2024-285030",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "106", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "28", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.3", "unit": "mg/dL", "range": "0.6-1.2", "flag": "H" },
            { "test": "eGFR", "value": "52", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
            { "test": "Sodium", "value": "139", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.6", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Calcium", "value": "9.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "11.4", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "34.2", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "Platelet Count", "value": "182", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            { "test": "PT", "value": "24.8", "unit": "seconds", "range": "11.0-13.5", "flag": "H" },
            { "test": "INR", "value": "2.6", "unit": "", "range": "2.0-3.0 (target AF)", "flag": "" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            { "test": "HbA1c", "value": "7.0", "unit": "%", "range": "<5.7 normal", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/2020",
      "study": "CT THORACIC SPINE WITHOUT CONTRAST",
      "accession": "IMG-2020-28503",
      "status": "FINAL",
      "orderedBy": "Dr. Lawrence Chen, MD",
      "readBy": "Dr. Robert Anderson, MD (Radiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "Urgent",
      "clinical": "78F with acute mid-back pain after bending. Severe osteoporosis. R/O compression fracture.",
      "technique": "CT thoracic spine without contrast.",
      "findings": "T12 vertebral body: Acute compression fracture with approximately 40% loss of anterior vertebral body height. No retropulsion into spinal canal. Posterior elements intact.\\n\\nRemaining thoracic vertebral bodies: Diffuse osteopenia. No additional acute fractures. Old T8 mild anterior wedging — chronic.\\n\\nSpinal canal: Patent. No cord compression.",
      "impression": "1. Acute T12 vertebral compression fracture — osteoporotic, 40% anterior height loss.\\n2. Diffuse osteopenia.\\n3. Chronic mild T8 wedging.\\n4. No spinal canal compromise.",
      "dictated": "03/15/2020 14:00",
      "verified": "03/15/2020 16:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose Quadrivalent)",
      "date": "10/02/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD290",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/18/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-804",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "2023",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Osteoporosis, hip fracture at age 82, deceased at 86",
    "Father: Hypertension, MI, deceased at 68",
    "Sister: Osteoporosis, vertebral fracture, alive at 80",
    "Daughter: Healthy, age 56"
  ],
  "socialHistory": [
    ["Occupation", "Retired librarian — 30 years at Broward County Library"],
    ["Marital", "Widowed — husband deceased 2012"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Denies"],
    ["Drugs", "Denies"],
    ["Exercise", "Limited — walks indoors with cane; seated exercises"],
    ["Housing", "Lives alone in ground-floor condo; daughter visits 3x/week; considering assisted living"],
    ["Safety", "Uses cane (should use walker); grab bars in bathroom; medical alert pendant; area rugs still present (daughter plans to remove); night light in hallway"],
    ["Advance Directive", "Yes — healthcare proxy: daughter Patricia Campbell-Ross; full code"]
  ],
  "meta": {
    "caseId": "displaced-femoral-neck-fracture",
    "diagnosis": "Displaced Femoral Neck Fracture",
    "acuity": 2,
    "presentation": "Geriatric Emergency",
    "category": "musculoskeletal"
  }
};
