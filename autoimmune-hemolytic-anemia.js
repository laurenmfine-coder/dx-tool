// Virtual EMR Case: Autoimmune Hemolytic Anemia
// Variant: autoimmune-hemolytic-anemia | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Nadine Toussaint",
    "dob": "07/22/1975",
    "age": 49,
    "sex": "Female",
    "mrn": "NSU-2025-31647",
    "pronouns": "She/Her",
    "insurance": "Cigna HMO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Publix Pharmacy — 951 S State Rd 7, Plantation, FL",
    "language": "English, Haitian Creole",
    "race": "Black/African American",
    "address": "1820 NW 62nd Ave, Sunrise, FL 33313",
    "phone": "(954) 555-7428",
    "email": "n.toussaint75@email.com",
    "emergencyContact": {
      "name": "Jacques Toussaint (Husband)",
      "phone": "(954) 555-7445"
    }
  },
  "problems": [
    {
      "problem": "Chronic Lymphocytic Leukemia — Rai Stage I",
      "icd": "C91.10",
      "onset": "2022",
      "status": "Active",
      "notes": "Diagnosed incidentally on routine CBC; lymphocytosis and lymphadenopathy; watch-and-wait per hematology-oncology; no treatment initiated"
    },
    {
      "problem": "Hypothyroidism",
      "icd": "E03.9",
      "onset": "2016",
      "status": "Active",
      "notes": "Autoimmune (Hashimoto); on levothyroxine; TSH at goal"
    },
    {
      "problem": "Osteopenia",
      "icd": "M81.0",
      "onset": "2023",
      "status": "Active",
      "notes": "DEXA T-score -1.8 lumbar spine; on calcium and vitamin D"
    },
    {
      "problem": "Gastroesophageal Reflux Disease",
      "icd": "K21.0",
      "onset": "2019",
      "status": "Active",
      "notes": "Controlled with omeprazole"
    }
  ],
  "medications": [
    {
      "name": "Levothyroxine 75mcg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach, 30-60 minutes before breakfast",
      "prescriber": "Dr. Chen",
      "start": "09/2016",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily 30 minutes before breakfast",
      "prescriber": "Dr. Chen",
      "start": "06/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Calcium Carbonate 600mg with Vitamin D 400 IU BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Chen",
      "start": "01/2024",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Aspirin",
      "type": "Drug",
      "reaction": "Bronchospasm",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Shellfish",
      "type": "Food",
      "reaction": "Urticaria",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "12/18/2024",
      "bp": "136/82",
      "hr": 104,
      "rr": 20,
      "temp": "99.4°F",
      "spo2": "96%",
      "wt": "162 lbs",
      "ht": "5'6\"",
      "bmi": 26.1,
      "setting": "PCP Office"
    },
    {
      "date": "08/14/2024",
      "bp": "126/78",
      "hr": 76,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "160 lbs",
      "ht": "5'6\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    },
    {
      "date": "02/20/2024",
      "bp": "128/80",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "158 lbs",
      "ht": "5'6\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Robert Chen, MD",
      "cc": "Progressive fatigue, pallor, dark urine x 1 week",
      "hpi": "49-year-old female with CLL (watch-and-wait) presents with 1 week of progressive fatigue, exertional dyspnea, and dizziness. Husband noticed pallor and yellowing of eyes 3 days ago. Reports dark brown urine. No bleeding, melena, or hematochezia. No fever, chills, or weight loss. No recent infections or new medications. CLL last evaluated 3 months ago — stable lymphocytosis. Denies recent cold exposure (cold agglutinin screen).",
      "exam": "General: Pale, mildly icteric female, tachycardic. HEENT: Scleral icterus bilaterally, pale conjunctivae. Neck: Bilateral non-tender cervical lymphadenopathy (1-2 cm, mobile, rubbery — chronic/known). CV: Tachycardic, RRR, II/VI systolic flow murmur. Lungs: CTAB. Abdomen: Spleen palpable 3 cm below left costal margin. Liver edge at costal margin. Extremities: No edema, no petechiae.",
      "assessment": "1. Acute symptomatic anemia with jaundice — high suspicion for autoimmune hemolytic anemia (warm AIHA), likely CLL-associated\n2. CLL — Rai Stage I, previously stable; AIHA is known complication\n3. Need emergent workup: DAT, reticulocyte count, LDH, haptoglobin, bilirubin, peripheral smear",
      "plan": "1. STAT labs drawn in office (CBC, retic, LDH, haptoglobin, total/direct bilirubin, DAT, peripheral smear)\n2. Refer to ED for possible transfusion if Hgb critically low\n3. Contact hematology-oncology (Dr. Patel) for urgent co-management\n4. Anticipate starting corticosteroids (prednisone 1mg/kg) if AIHA confirmed\n5. Type and screen — note: DAT-positive may complicate crossmatch"
    },
    {
      "id": "V002",
      "date": "08/14/2024",
      "type": "Primary Care",
      "provider": "Dr. Robert Chen, MD",
      "cc": "Follow-up: CLL, hypothyroidism",
      "hpi": "49-year-old female for routine follow-up. CLL stable — last CBC showed WBC 18,000 with lymphocyte predominance, Hgb 13.0. No B symptoms. Hypothyroidism well-controlled. GERD managed. No new complaints.",
      "exam": "General: NAD, well-appearing. Neck: Small bilateral cervical nodes, stable. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Spleen tip just palpable. Skin: No petechiae.",
      "assessment": "1. CLL — stable, no treatment indications\n2. Hypothyroidism — TSH at goal\n3. Osteopenia — on calcium/vitamin D",
      "plan": "1. Continue watch-and-wait for CLL; hematology follow-up Q6 months\n2. Continue levothyroxine\n3. Recheck CBC in 3 months\n4. RTC 3-4 months"
    }
  ],
  "labs": [
    {
      "date": "08/14/2024",
      "time": "08:30",
      "orderedBy": "Dr. Robert Chen, MD",
      "collected": "08/14/2024 08:00",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2024-081418",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "18.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Lymphocytes", "value": "78", "unit": "%", "range": "20-40", "flag": "H" },
            { "test": "ALC", "value": "14.2", "unit": "x10³/µL", "range": "1.0-4.8", "flag": "H" },
            { "test": "Hemoglobin", "value": "13.0", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "38.8", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "185", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "THYROID FUNCTION",
          "results": [
            { "test": "TSH", "value": "2.4", "unit": "mIU/L", "range": "0.4-4.0", "flag": "" },
            { "test": "Free T4", "value": "1.2", "unit": "ng/dL", "range": "0.8-1.8", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "90", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Total Bilirubin", "value": "0.8", "unit": "mg/dL", "range": "0.1-1.2", "flag": "" },
            { "test": "ALT (SGPT)", "value": "22", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "26", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "LDH", "value": "195", "unit": "U/L", "range": "140-280", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/20/2024",
      "study": "CT CHEST ABDOMEN PELVIS WITH CONTRAST",
      "accession": "IMG-2024-02201",
      "status": "FINAL",
      "orderedBy": "Dr. Priya Patel, MD (Hematology)",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "Routine",
      "clinical": "49F CLL staging — evaluate lymphadenopathy and organomegaly.",
      "technique": "CT chest, abdomen, and pelvis with IV contrast.",
      "findings": "Chest: Bilateral axillary lymphadenopathy (largest 1.5 cm). No mediastinal or hilar adenopathy. Lungs clear. Heart normal size.\\n\\nAbdomen: Spleen mildly enlarged at 13.5 cm. Liver normal size and attenuation. No mesenteric or retroperitoneal adenopathy >1 cm. Kidneys unremarkable.\\n\\nPelvis: Bilateral inguinal lymphadenopathy (largest 1.2 cm). No pelvic mass.",
      "impression": "1. Mild splenomegaly.\\n2. Scattered bilateral axillary and inguinal lymphadenopathy — consistent with known CLL.\\n3. No bulky disease or high tumor burden by imaging.",
      "dictated": "02/20/2024 13:15",
      "verified": "02/20/2024 15:40"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-271",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/28/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-682",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "04/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-114",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Breast cancer at 62, alive at 76",
    "Father: CLL diagnosed at 70, deceased at 78",
    "Sister: Hashimoto thyroiditis, age 45",
    "Brother: Healthy, age 52"
  ],
  "socialHistory": [
    ["Occupation", "Elementary school teacher"],
    ["Marital", "Married, 2 children (ages 18 and 15)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Occasional wine, 1-2/week"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 3x/week, 30 minutes"],
    ["Housing", "Lives with husband and children in single-family home"],
    ["Safety", "Denies IPV; seatbelt"],
    ["Advance Directive", "None on file — discussed"]
  ],
  "meta": {
    "caseId": "autoimmune-hemolytic-anemia",
    "diagnosis": "Warm Autoimmune Hemolytic Anemia (CLL-Associated)",
    "acuity": 2,
    "presentation": "Hematologic Emergency",
    "category": "hematologic"
  }
};
