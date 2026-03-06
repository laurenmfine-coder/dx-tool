// Virtual EMR Case: Deep Vein Thrombosis
// Variant: deep-vein-thrombosis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Patricia Duval",
  "patientHPI": "I've been feeling fine and my blood pressure is under control, but I'm a bit nervous about this upcoming trip to Jamaica. I'm still on my birth control pills because they really help with my heavy periods, and even though my doctor mentioned some risks because of my weight, I want to keep taking them since they work so well for me.",
    "dob": "03/22/1980",
    "age": 44,
    "sex": "Female",
    "mrn": "RDX-2025-42918",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Robert Kim, MD",
    "pharmacy": "Publix Pharmacy — 1800 N Pine Island Rd, Plantation, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "4683 Birch Ln, Milwaukee, WI 53203",
    "phone": "(954) 555-9142",
    "email": "p.duval80@email.com",
    "emergencyContact": {
      "name": "James Duval (Husband)",
      "phone": "(954) 555-9160"
    }
  },
  "problems": [
    {
      "problem": "Obesity, Class II",
      "icd": "E66.01",
      "onset": "2012",
      "status": "Active",
      "notes": "BMI 37.2; counseled on weight management; declined bariatric referral"
    },
    {
      "problem": "Combined Oral Contraceptive Use",
      "icd": "Z79.3",
      "onset": "2019",
      "status": "Active",
      "notes": "Ethinyl estradiol/norgestimate (Sprintec); counseled on VTE risk given BMI and age"
    },
    {
      "problem": "Hypertension — Mild",
      "icd": "I10",
      "onset": "2021",
      "status": "Active",
      "notes": "On lisinopril; controlled"
    },
    {
      "problem": "Iron Deficiency Anemia — History",
      "icd": "D50.9",
      "onset": "2022",
      "status": "Resolved",
      "notes": "Menorrhagia-related; resolved after iron supplementation and OCP regulation of menses"
    }
  ],
  "medications": [
    {
      "name": "Ethinyl Estradiol/Norgestimate (Sprintec) daily",
      "sig": "Take 1 tablet by mouth daily at the same time each day",
      "prescriber": "Dr. Kim",
      "start": "03/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "06/2021",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Vitamin D3 2000 IU daily",
      "sig": "Take 1 capsule by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "01/2023",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "type": "Drug",
      "reaction": "Hives — diffuse urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/20/2024",
      "bp": "128/80",
      "hr": 76,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "218 lbs",
      "ht": "5'5\"",
      "bmi": 36.3,
      "setting": "PCP Office"
    },
    {
      "date": "05/15/2024",
      "bp": "130/82",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "222 lbs",
      "ht": "5'5\"",
      "bmi": 36.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Robert Kim, MD",
      "cc": "Follow-up: HTN, OCP refill, weight management",
      "hpi": "44-year-old female for follow-up. Reports feeling well. HTN controlled. On combined OCP (Sprintec) for menorrhagia control and contraception. VTE risk re-discussed given BMI 36 and age — patient wishes to continue OCPs; understands risks. Denies leg swelling, chest pain, or SOB. Planning a trip to Jamaica next month — 4-hour flight. Weight stable.",
      "exam": "General: Obese, NAD. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT. Extremities: No edema, no calf tenderness, negative Homan sign. Skin: No rashes.",
      "assessment": "1. HTN — controlled\n2. OCP use — continued; VTE risk discussed (obesity + estrogen + age approaching 45)\n3. Obesity — stable; nutritional counseling offered\n4. Upcoming travel — DVT prevention counseled",
      "plan": "1. Continue lisinopril and Sprintec\n2. Travel DVT prevention: compression stockings, hydration, walk every 1-2 hours on flight, ankle pumps\n3. Weight management: referred to nutritionist\n4. If calf swelling, pain, or redness: seek urgent evaluation\n5. RTC 6 months; consider transitioning to progestin-only method at age 45"
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "time": "09:30",
      "orderedBy": "Dr. Robert Kim, MD",
      "collected": "11/20/2024 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-112015",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.0", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "38.8", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "275", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "218", "unit": "mg/dL", "range": "<200", "flag": "H" },
            { "test": "LDL Cholesterol", "value": "138", "unit": "mg/dL", "range": "<100 optimal", "flag": "H" },
            { "test": "HDL Cholesterol", "value": "48", "unit": "mg/dL", "range": ">50", "flag": "L" },
            { "test": "Triglycerides", "value": "160", "unit": "mg/dL", "range": "<150", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-268",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/22/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-695",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2008",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: DVT at age 50 (provoked — post-surgical), HTN, alive at 70",
    "Father: T2DM, CAD, alive at 72",
    "Sister: Factor V Leiden heterozygous (diagnosed during pregnancy), alive at 41",
    "No family history of PE or unprovoked clots"
  ],
  "socialHistory": [
    ["Occupation", "Office manager — sedentary desk job; 8+ hours sitting daily"],
    ["Marital", "Married, 2 children (ages 10, 7)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social, 1-2 glasses of wine on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 2-3x/week; limited by schedule"],
    ["Housing", "Single-family home with husband and children"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "deep-vein-thrombosis",
    "diagnosis": "Acute Proximal Deep Vein Thrombosis — Left Femoral Vein (Provoked by OCP + Obesity + Prolonged Travel)",
    "acuity": 3,
    "presentation": "Musculoskeletal Emergency",
    "category": "vascular"
  }
};
