// Virtual EMR Case: Acute Embolic Limb Ischemia
// Variant: acute-embolic-limb-ischemia | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Gloria Menendez",
    "dob": "09/14/1952",
    "age": 72,
    "sex": "Female",
    "mrn": "RDX-2025-46712",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + Humana Medicare Advantage",
    "pcp": "Dr. Eduardo Reyes, MD",
    "pharmacy": "CVS Pharmacy — 3200 Broward Blvd, Fort Lauderdale, FL",
    "language": "English, Spanish",
    "race": "Hispanic",
    "address": "4580 SW 2nd St, Plantation, FL 33317",
    "phone": "(954) 555-8165",
    "email": "g.menendez52@email.com",
    "emergencyContact": {
      "name": "Carlos Menendez (Son)",
      "phone": "(954) 555-8180"
    }
  },
  "problems": [
    {
      "problem": "Atrial Fibrillation, Paroxysmal",
      "icd": "I48.0",
      "onset": "2020",
      "status": "Active",
      "notes": "CHA₂DS₂-VASc 5; on warfarin — last INR 1.4 (subtherapeutic)"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2004",
      "status": "Active",
      "notes": "Controlled on dual therapy"
    },
    {
      "problem": "Heart Failure with Reduced EF (HFrEF)",
      "icd": "I50.22",
      "onset": "2021",
      "status": "Active",
      "notes": "LVEF 35%; ischemic cardiomyopathy; on GDMT"
    },
    {
      "problem": "Coronary Artery Disease",
      "icd": "I25.10",
      "onset": "2018",
      "status": "Active",
      "notes": "3-vessel disease; CABG x3 in 2018"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2008",
      "status": "Active",
      "notes": "A1c 7.6%"
    },
    {
      "problem": "Peripheral Arterial Disease",
      "icd": "I73.9",
      "onset": "2022",
      "status": "Active",
      "notes": "ABI 0.72 bilateral; intermittent claudication"
    }
  ],
  "medications": [
    {
      "name": "Warfarin 5mg daily",
      "sig": "Take 1 tablet by mouth daily at 5 PM",
      "prescriber": "Dr. Martinez",
      "start": "08/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Carvedilol 25mg BID",
      "sig": "Take 1 tablet by mouth twice daily with food",
      "prescriber": "Dr. Martinez",
      "start": "06/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Sacubitril/Valsartan 49/51mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Martinez",
      "start": "09/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Spironolactone 25mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Martinez",
      "start": "09/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Furosemide 40mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Martinez",
      "start": "06/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Reyes",
      "start": "03/2009",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 80mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Martinez",
      "start": "01/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Cilostazol 100mg BID",
      "sig": "Take 1 tablet by mouth twice daily 30 minutes before meals",
      "prescriber": "Dr. Shah",
      "start": "04/2023",
      "refills": 2,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE Inhibitors (Enalapril)",
      "type": "Drug",
      "reaction": "Angioedema — lip and tongue swelling",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Aspirin",
      "type": "Drug",
      "reaction": "GI bleeding (documented upper GI bleed 2017)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/20/2025",
      "bp": "134/76",
      "hr": 78,
      "rr": 18,
      "temp": "98.4°F",
      "spo2": "95%",
      "wt": "152 lbs",
      "ht": "5'3\"",
      "bmi": 26.9,
      "setting": "PCP Office"
    },
    {
      "date": "07/22/2024",
      "bp": "140/82",
      "hr": 82,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "95%",
      "wt": "156 lbs",
      "ht": "5'3\"",
      "bmi": 27.6,
      "setting": "PCP Office"
    },
    {
      "date": "01/15/2024",
      "bp": "132/78",
      "hr": 76,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "96%",
      "wt": "154 lbs",
      "ht": "5'3\"",
      "bmi": 27.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Eduardo Reyes, MD",
      "cc": "Chronic disease management: AFib, HFrEF, T2DM, PAD",
      "hpi": "72-year-old female with extensive cardiovascular history presenting for routine follow-up. Reports stable dyspnea on exertion — NYHA Class II-III; can walk approximately 1 block before SOB. Weight stable. Claudication bilateral calves at 1-2 blocks, improved with rest. INR today 1.4 — admits to missing warfarin doses due to confusion about dosing schedule. Denies rest pain or foot ulcers. A1c stable at 7.6%. Reports dizziness with standing which she has not mentioned before.",
      "exam": "General: Elderly female, thin habitus, in NAD. CV: Irregularly irregular, rate 78; S3 gallop noted; no murmurs. JVP estimated 8 cm. Lungs: Bibasilar fine crackles. Abdomen: Soft, NT/ND. Extremities: Cool bilateral lower extremities distal to knees; diminished dorsalis pedis pulses bilaterally; trace bilateral ankle edema. Skin: No ulcers or gangrene. Neuro: A&O x3.",
      "assessment": "1. AFib — rate controlled but subtherapeutic INR (1.4); high stroke/embolic risk\n2. HFrEF — NYHA II-III; mild volume overload\n3. PAD — stable claudication; no critical limb ischemia\n4. T2DM — A1c 7.6%, acceptable\n5. Orthostatic hypotension — new symptom",
      "plan": "1. Increase warfarin to 6mg daily; recheck INR in 5 days; goal 2.0-3.0\n2. Increase furosemide to 40mg BID for 5 days then reassess; daily weights\n3. Continue PAD management: cilostazol, walking program\n4. Continue metformin and atorvastatin\n5. Orthostatic vitals ordered; consider adjusting carvedilol dose\n6. RTC 2 weeks for INR and volume status"
    },
    {
      "id": "V002",
      "date": "07/22/2024",
      "type": "Specialist",
      "provider": "Dr. Neha Shah, MD (Vascular Surgery)",
      "cc": "PAD follow-up, claudication management",
      "hpi": "72-year-old female with known PAD and bilateral intermittent claudication. ABI 0.72 bilaterally on recent testing. Walking distance approximately 2 blocks. Cilostazol started 2023 with modest improvement. No rest pain. Warm feet. No ulcers.",
      "exam": "Vascular: Bilateral femoral pulses 2+, popliteal 1+, dorsalis pedis and posterior tibial absent bilaterally (Doppler signals present). No bruits. Skin: Shiny, hairless bilateral lower legs. No ulcers.",
      "assessment": "1. PAD, bilateral — Fontaine stage IIa; stable on medical management",
      "plan": "1. Continue cilostazol 100mg BID\n2. Supervised exercise program\n3. Aggressive cardiovascular risk reduction\n4. Repeat ABI in 1 year\n5. Return sooner for rest pain, non-healing wound, or acute limb symptoms"
    }
  ],
  "labs": [
    {
      "date": "01/20/2025",
      "time": "09:00",
      "orderedBy": "Dr. Eduardo Reyes, MD",
      "collected": "01/20/2025 08:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-012053",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Citrated Plasma",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "128", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "24", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.3", "unit": "mg/dL", "range": "0.6-1.2", "flag": "H" },
            { "test": "eGFR", "value": "48", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
            { "test": "Sodium", "value": "136", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.8", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "100", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "22", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "Calcium", "value": "9.0", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "ALT (SGPT)", "value": "18", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "24", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            { "test": "PT", "value": "15.8", "unit": "seconds", "range": "11.0-13.5", "flag": "H" },
            { "test": "INR", "value": "1.4", "unit": "", "range": "2.0-3.0 (therapeutic)", "flag": "L" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            { "test": "HbA1c", "value": "7.6", "unit": "%", "range": "<5.7 normal; 5.7-6.4 prediabetes", "flag": "H" },
            { "test": "Est. Avg Glucose (eAG)", "value": "171", "unit": "mg/dL", "range": "—", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.0", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "11.2", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "33.8", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "Platelet Count", "value": "210", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BNP",
          "results": [
            { "test": "NT-proBNP", "value": "1250", "unit": "pg/mL", "range": "<300", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "07/22/2024",
      "study": "ARTERIAL DUPLEX BILATERAL LOWER EXTREMITIES",
      "accession": "IMG-2024-07222",
      "status": "FINAL",
      "orderedBy": "Dr. Neha Shah, MD (Vascular Surgery)",
      "readBy": "Dr. Lisa Tran, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "72F PAD, intermittent claudication. ABI assessment.",
      "technique": "Bilateral lower extremity arterial duplex ultrasound with segmental pressures and ABI.",
      "findings": "Right lower extremity: Mild-to-moderate stenosis of the superficial femoral artery (SFA) with peak systolic velocity ratio 2.8. Popliteal artery patent with reduced flow. Monophasic waveforms at the ankle.\\n\\nLeft lower extremity: Similar pattern with moderate SFA stenosis (PSV ratio 3.0). Popliteal patent. Monophasic waveforms distally.\\n\\nABI: Right 0.71, Left 0.73.",
      "impression": "1. Bilateral moderate superficial femoral artery stenosis.\\n2. ABI 0.71 right, 0.73 left — consistent with moderate peripheral arterial disease.\\n3. Monophasic waveforms distally bilateral.",
      "dictated": "07/22/2024 15:00",
      "verified": "07/23/2024 09:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD196",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-908",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Prevnar 20 (PCV20)",
      "date": "03/2022",
      "site": "Left deltoid IM",
      "lot": "PV20-098",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "06/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-310",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-467",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: MI at age 60 (deceased at 65)",
    "Mother: Stroke at age 75, T2DM (deceased at 82)",
    "Brother: CAD, CABG at age 64, alive",
    "Sister: T2DM, HTN, alive at 68"
  ],
  "socialHistory": [
    ["Occupation", "Retired elementary school teacher"],
    ["Marital", "Widowed (husband deceased 2019)"],
    ["Tobacco", "Former — 15 pack-years; quit 2004"],
    ["Alcohol", "Rare — occasional glass of wine with family"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 10-15 min daily; limited by claudication and dyspnea"],
    ["Housing", "Lives alone in condo; son visits daily"],
    ["Safety", "Denies IPV; fall risk — uses walker for longer distances"],
    ["Advance Directive", "Living will on file — DNR/DNI; HCP designated — son Carlos"]
  ],
  "meta": {
    "caseId": "acute-embolic-limb-ischemia",
    "diagnosis": "Acute Embolic Limb Ischemia",
    "acuity": 2,
    "presentation": "Vascular Emergency",
    "category": "vascular"
  }
};
