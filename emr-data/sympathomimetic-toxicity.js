// Virtual EMR Case: Sympathomimetic Toxicity
// Variant: sympathomimetic-toxicity | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Brianna Townsend",
  "patientHPI": "I've been taking extra of my ADHD medication because one pill wasn't lasting through my long study days, but now I can't sleep at all and my heart feels like it's racing constantly. I've been jittery and anxious, and I think I might have taken too much today because I feel really shaky and keep having chest tightness.",
    "dob": "07/11/2001",
    "age": 23,
    "sex": "Female",
    "mrn": "RDX-2025-76914",
    "pronouns": "She/Her",
    "insurance": "United Healthcare — Student Plan",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Walgreens — 4100 SW 64th Ave, Riverside, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "1741 S Halsted St, Baltimore, MD 21205",
    "phone": "(954) 555-4712",
    "email": "b.townsend01@email.com",
    "emergencyContact": {
      "name": "Sharon Townsend (Mother)",
      "phone": "(954) 555-4718"
    }
  },
  "problems": [
    {
      "problem": "ADHD — Combined Type",
      "icd": "F90.2",
      "onset": "2015",
      "status": "Active",
      "notes": "Diagnosed at 14; on mixed amphetamine salts (Adderall XR) since age 16; dose recently increased"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2020",
      "status": "Active",
      "notes": "Started in college; on escitalopram; therapy 2x/month"
    },
    {
      "problem": "Migraine without Aura",
      "icd": "G43.009",
      "onset": "2018",
      "status": "Active",
      "notes": "1-2 per month; uses sumatriptan PRN; no daily prophylaxis"
    }
  ],
  "medications": [
    {
      "name": "Mixed Amphetamine Salts (Adderall XR) 30mg QAM",
      "sig": "Take 1 capsule by mouth every morning (INCREASED from 20mg 3 weeks ago)",
      "prescriber": "Dr. Patel (Psychiatry)",
      "start": "02/2025 (dose increase)",
      "refills": 0,
      "status": "Active — RECENTLY INCREASED"
    },
    {
      "name": "Escitalopram 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Patel (Psychiatry)",
      "start": "09/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Sumatriptan 50mg PRN",
      "sig": "Take 1 tablet by mouth at onset of migraine; may repeat x1 after 2 hours if needed; max 200mg/24hr",
      "prescriber": "Dr. Sharma",
      "start": "01/2021",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Oral Contraceptive (Lo Loestrin Fe)",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Sharma",
      "start": "08/2019",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Severe nausea and vomiting",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "02/27/2025",
      "bp": "172/104",
      "hr": 142,
      "rr": 24,
      "temp": "102.1°F",
      "spo2": "97%",
      "wt": "134 lbs",
      "ht": "5'5\"",
      "bmi": 22.3,
      "setting": "ED"
    },
    {
      "date": "02/03/2025",
      "bp": "124/78",
      "hr": 82,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "136 lbs",
      "ht": "5'5\"",
      "bmi": 22.6,
      "setting": "Specialist"
    },
    {
      "date": "09/18/2024",
      "bp": "118/72",
      "hr": 76,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "138 lbs",
      "ht": "5'5\"",
      "bmi": 23.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/03/2025",
      "type": "Specialist",
      "provider": "Dr. Anita Patel, MD (Psychiatry)",
      "cc": "ADHD medication management — insufficient efficacy",
      "hpi": "23-year-old female graduate student with ADHD-combined type presenting for medication adjustment. Reports Adderall XR 20mg is 'wearing off by noon' and she cannot focus on dissertation work in the afternoons. Final exams and dissertation defense upcoming. Has been taking extra pills on some days to get through study sessions (using 2 capsules instead of 1). Requests dose increase. Denies cardiac symptoms. Sleep reduced to 4-5 hours due to study schedule. Increased caffeine intake (4-5 cups of coffee/day plus energy drinks).",
      "exam": "Psych: Well-groomed, anxious, speaks rapidly. Mood: 'stressed.' Affect: anxious, congruent. Thought process: linear but tangential at times. No psychosis. No SI/HI. Vital signs: BP 124/78, HR 82.",
      "assessment": "1. ADHD — suboptimal control on Adderall XR 20mg; concern about dose self-escalation\n2. Generalized anxiety — exacerbated by academic stress\n3. High stimulant burden (prescribed + excessive caffeine + self-dose-escalation)",
      "plan": "1. Increase Adderall XR to 30mg QAM — STRICT instructions: take ONLY 1 capsule daily, no extras\n2. REDUCE caffeine — max 2 cups coffee/day, NO energy drinks\n3. Continue escitalopram 10mg\n4. Sleep hygiene counseling — aim for 7 hours minimum\n5. WARNED about combining stimulants + caffeine + sleep deprivation — cardiac risk\n6. RTC 4 weeks; sooner if palpitations, chest pain, or worsening anxiety\n7. Pill count at next visit"
    },
    {
      "id": "V002",
      "date": "09/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Priya Sharma, MD",
      "cc": "Annual wellness + migraine follow-up",
      "hpi": "23-year-old female for annual exam. Migraines occurring 1-2x/month, respond to sumatriptan. ADHD stable on Adderall XR 20mg. Anxiety managed with escitalopram. Menses regular on OCP. No new concerns.",
      "exam": "General: Well-appearing young woman. HEENT: WNL. CV: RRR, no murmur. Lungs: CTA. Abdomen: Soft, NT. Neuro: Grossly intact. Skin: No rash.",
      "assessment": "1. Wellness exam — healthy\n2. Migraine — stable, 1-2/month\n3. ADHD — controlled on current regimen\n4. GAD — stable",
      "plan": "1. Continue current medications\n2. Routine labs\n3. RTC annually or PRN"
    }
  ],
  "labs": [
    {
      "date": "02/27/2025",
      "time": "23:18",
      "orderedBy": "Dr. Marcus Johnson, MD (ED)",
      "collected": "02/27/2025 23:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-112847",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "168", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "24", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.2", "unit": "mg/dL", "range": "0.6-1.1", "flag": "H" },
            { "test": "Sodium", "value": "141", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "3.4", "unit": "mEq/L", "range": "3.5-5.0", "flag": "L" },
            { "test": "Chloride", "value": "102", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "20", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "AST (SGOT)", "value": "52", "unit": "U/L", "range": "10-40", "flag": "H" },
            { "test": "ALT (SGPT)", "value": "38", "unit": "U/L", "range": "7-56", "flag": "" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "14.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "13.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "41.4", "unit": "%", "range": "36-46", "flag": "" },
            { "test": "Platelets", "value": "268", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "TROPONIN",
          "results": [
            { "test": "Troponin I (High Sensitivity)", "value": "0.08", "unit": "ng/mL", "range": "<0.04", "flag": "H" }
          ]
        },
        {
          "name": "CREATINE KINASE",
          "results": [
            { "test": "CK Total", "value": "620", "unit": "U/L", "range": "30-135", "flag": "H" }
          ]
        },
        {
          "name": "LACTIC ACID",
          "results": [
            { "test": "Lactate", "value": "3.2", "unit": "mmol/L", "range": "0.5-2.0", "flag": "H" }
          ]
        },
        {
          "name": "URINE DRUG SCREEN",
          "results": [
            { "test": "Amphetamines", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Benzodiazepines", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Cocaine", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Opiates", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "THC", "value": "Negative", "unit": "", "range": "Negative", "flag": "" }
          ]
        },
        {
          "name": "URINE PREGNANCY TEST",
          "results": [
            { "test": "hCG (Urine)", "value": "Negative", "unit": "", "range": "Negative", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/27/2025",
      "study": "CHEST X-RAY — PA AND LATERAL",
      "accession": "IMG-2025-11218",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Johnson, MD",
      "readBy": "Dr. Sarah Mitchell, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "23-year-old with tachycardia 142, hypertension, chest tightness — r/o acute cardiopulmonary process",
      "technique": "PA and lateral chest radiographs.",
      "findings": "LUNGS: Clear bilaterally. No focal consolidation, effusion, or pneumothorax.\n\nHEART: Normal cardiomediastinal silhouette. No cardiomegaly.\n\nOTHER: No bony abnormality.",
      "impression": "1. No acute cardiopulmonary process",
      "dictated": "02/27/2025 23:35",
      "verified": "02/27/2025 23:42"
    },
    {
      "date": "02/27/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-11220",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Johnson, MD",
      "readBy": "Dr. Sarah Mitchell, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "23-year-old with severe headache, hypertension, agitation — r/o intracranial hemorrhage",
      "technique": "Non-contrast axial CT images of the head.",
      "findings": "BRAIN PARENCHYMA: No acute hemorrhage, mass, or infarction. Normal gray-white differentiation.\n\nVENTRICLES: Normal size and configuration.\n\nEXTRA-AXIAL: No collection.\n\nBONY STRUCTURES: Normal.",
      "impression": "1. No acute intracranial pathology",
      "dictated": "02/27/2025 23:40",
      "verified": "02/27/2025 23:48"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL882P", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Pfizer, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "PF498K", "mfr": "Pfizer" },
    { "vaccine": "Tdap (Adacel)", "date": "08/2019", "site": "Left deltoid IM", "lot": "TA172R", "mfr": "Sanofi" },
    { "vaccine": "HPV (Gardasil 9) — series complete", "date": "07/2017", "site": "Left deltoid IM", "lot": "HP141T", "mfr": "Merck" },
    { "vaccine": "Meningococcal B (Bexsero) — 2nd dose", "date": "09/2019", "site": "Right deltoid IM", "lot": "MB218K", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Mother (age 48): Hypertension, anxiety disorder",
    "Father (age 50): ADHD (diagnosed as adult), hypertension, hyperlipidemia",
    "Maternal grandmother (age 72): Type 2 Diabetes, stroke at age 68",
    "Sibling (sister, age 20): ADHD — on methylphenidate",
    "No family history of sudden cardiac death, cardiomyopathy, or arrhythmias"
  ],
  "socialHistory": [
    ["Occupation", "Graduate student — PhD program in biomedical sciences"],
    ["Marital", "Single; lives in apartment near campus with roommate"],
    ["Tobacco", "Occasional social vaping (nicotine) — 1-2x/week at social events"],
    ["Alcohol", "Social — 3-4 drinks on weekends"],
    ["Drugs", "Denies illicit drugs; ADMITS to taking extra Adderall (2 capsules = 60mg today) + multiple energy drinks for study marathon"],
    ["Exercise", "Runs 3x/week; recently reduced due to academic workload"],
    ["Housing", "Apartment near university campus"],
    ["Safety", "No firearms; no SI/HI"],
    ["Advance Directive", "None"]
  ],
  "meta": {
    "caseId": "sympathomimetic-toxicity",
    "diagnosis": "Sympathomimetic Toxidrome — Prescription Amphetamine Excess (60mg) + Excessive Caffeine with Demand Ischemia and Mild Rhabdomyolysis",
    "acuity": 2,
    "presentation": "Psychiatric Emergency",
    "category": "toxicologic"
  }
};
