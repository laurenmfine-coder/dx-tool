// Virtual EMR Case: Mixed Overdose (Intentional — Acetaminophen + Diphenhydramine + Alcohol)
// Variant: mixed-overdose | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Brianna Torres",
    "dob": "02/14/2004",
    "age": 22,
    "sex": "Female",
    "mrn": "RDX-2025-43576",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO (parent plan)",
    "pcp": "Dr. Sandra Ellis, MD",
    "pharmacy": "CVS Pharmacy — 4401 Sheridan St, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Puerto Rican American)",
    "address": "4512 SW 32nd Ave, Fort Lauderdale, FL 33312",
    "phone": "(954) 555-6040",
    "email": "b.torres04@email.com",
    "emergencyContact": {
      "name": "Carmen Torres (Mother)",
      "phone": "(954) 555-6058"
    }
  },
  "problems": [
    {
      "problem": "Major Depressive Disorder — Recurrent, Moderate",
      "icd": "F33.1",
      "onset": "2020",
      "status": "Active",
      "notes": "Onset during COVID pandemic isolation; on sertraline 150mg since 2022; 1 prior suicide attempt (2021) — superficial wrist lacerations; hospitalized briefly at psychiatric facility; has been in outpatient therapy but stopped 3 months ago"
    },
    {
      "problem": "Borderline Personality Disorder",
      "icd": "F60.3",
      "onset": "2021",
      "status": "Active",
      "notes": "Diagnosed during psychiatric hospitalization; chronic emotional dysregulation, unstable relationships, self-harm history; was in DBT therapy — discontinued 3 months ago"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2019",
      "status": "Active",
      "notes": "On buspirone"
    },
    {
      "problem": "Prior Suicide Attempt",
      "icd": "T14.91XA",
      "onset": "2021",
      "status": "Active",
      "notes": "Superficial bilateral wrist lacerations (03/2021) during relationship crisis; transported to ER by mother; 72-hour psychiatric hold; discharged to outpatient DBT"
    }
  ],
  "medications": [
    {
      "name": "Sertraline 150mg daily",
      "sig": "Take 1 tablet by mouth once daily in the morning",
      "prescriber": "Dr. Nolan (Psychiatry)",
      "start": "06/2022",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Buspirone 10mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Nolan (Psychiatry)",
      "start": "09/2021",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Ortho Tri-Cyclen Lo (norgestimate-ethinyl estradiol) daily",
      "sig": "Take 1 tablet by mouth daily per pack directions",
      "prescriber": "Dr. Ellis",
      "start": "01/2023",
      "refills": 11,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2026",
      "bp": "98/58",
      "hr": 118,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "95%",
      "wt": "126 lbs",
      "ht": "5'4\"",
      "bmi": 21.6,
      "setting": "ED"
    },
    {
      "date": "09/22/2025",
      "bp": "112/68",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "128 lbs",
      "ht": "5'4\"",
      "bmi": 22.0,
      "setting": "PCP Office"
    },
    {
      "date": "03/12/2025",
      "bp": "108/66",
      "hr": 68,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "130 lbs",
      "ht": "5'4\"",
      "bmi": 22.3,
      "setting": "Psychiatry Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/22/2025",
      "type": "Primary Care",
      "provider": "Dr. Sandra Ellis, MD",
      "cc": "Annual wellness, medication refills",
      "hpi": "21F with MDD, BPD, GAD presents for annual wellness visit. Reports mood has been 'okay' — some 'ups and downs' but managing. Sertraline 150mg tolerated. Buspirone helps with anxiety. Denies SI, self-harm, or substance use. Reports she stopped DBT therapy 'a few weeks ago' because she felt she 'didn't need it anymore' and her therapist 'didn't understand.' Relationship with boyfriend is strained. Working part-time as barista. Living with mother.",
      "exam": "NAD. Thin young female, appropriate affect but flat at times. CV: RRR. Lungs: CTAB. Skin: Healed linear scars on bilateral volar wrists (from 2021); no new lesions. Psych: Euthymic today; denies current SI/HI; good eye contact; organized thought process.",
      "assessment": "1. MDD — partially treated; therapy discontinuation is concerning given BPD and prior SA\n2. BPD — DBT discontinued; risk factor for crisis without ongoing skills training\n3. GAD — managed\n4. Prior SA — monitor; safety plan reviewed",
      "plan": "1. Continue sertraline 150mg, buspirone 10mg BID\n2. STRONGLY encouraged resuming DBT therapy — provided 3 referrals\n3. Reviewed safety plan — patient identified mother and best friend as supports; 988 Suicide & Crisis Lifeline discussed\n4. Lethal means counseling: mother advised to secure medications and firearms at home\n5. Psychiatry follow-up scheduled with Dr. Nolan in 4 weeks\n6. Return 6 months or sooner if concerns"
    },
    {
      "id": "V002",
      "date": "03/12/2025",
      "type": "Psychiatry",
      "provider": "Dr. Brian Nolan, MD (Psychiatry)",
      "cc": "Follow-up MDD, BPD, medication management",
      "hpi": "21F with MDD, BPD, GAD, prior SA presents for quarterly psychiatry follow-up. Mood 'more stable' — in DBT group therapy, finding it helpful. Sertraline 150mg — no side effects. Relationship with boyfriend still turbulent but using DBT skills. Denies SI, self-harm. PHQ-9: 12 (moderate depression). GAD-7: 8 (mild anxiety). Sleeping well. Appetite okay.",
      "exam": "Appropriate appearance and grooming. Cooperative. Affect: Full range, mildly anxious. Thought process: Linear, goal-directed. Thought content: No SI, HI, or psychotic symptoms. Judgment: Fair. Insight: Improving.",
      "assessment": "1. MDD — partially remitted on sertraline 150mg; PHQ-9 12\n2. BPD — engaging in DBT; functional improvement\n3. GAD — mild on buspirone",
      "plan": "1. Continue sertraline 150mg, buspirone 10mg BID\n2. Continue DBT group therapy\n3. Return 3 months"
    }
  ],
  "labs": [
    {
      "date": "09/22/2025",
      "time": "10:00",
      "orderedBy": "Dr. Ellis",
      "collected": "09/22/2025 10:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-800922",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "86", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "12", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.7", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" }
          ]
        },
        {
          "name": "HEPATIC PANEL",
          "results": [
            { "test": "ALT", "value": "18", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST", "value": "20", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "Total Bilirubin", "value": "0.6", "unit": "mg/dL", "range": "0.1-1.2", "flag": "" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "6.4", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.2", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Platelets", "value": "268", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-8944", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Pfizer)", "date": "09/2025", "site": "Right deltoid IM", "lot": "CV25-2048", "mfr": "Pfizer" },
    { "vaccine": "Tdap", "date": "08/2022", "site": "Left deltoid IM", "lot": "TD22-510", "mfr": "GSK" },
    { "vaccine": "HPV (Gardasil 9) — Series Complete", "date": "2019", "site": "Left deltoid IM", "lot": "HP19-448", "mfr": "Merck" },
    { "vaccine": "Meningococcal ACWY Booster", "date": "2022", "site": "Right deltoid IM", "lot": "MN22-394", "mfr": "Sanofi" }
  ],
  "familyHistory": [
    "Mother: Depression, anxiety, alive at 48",
    "Father: Alcohol use disorder (estranged; left family when patient was 8), alive at 52",
    "Maternal grandmother: Bipolar disorder, suicide attempt (survived), alive at 72",
    "Half-brother (paternal): Unknown medical history; no contact"
  ],
  "socialHistory": [
    ["Occupation", "Part-time barista at coffee shop; community college student (stopped attending classes 2 months ago)"],
    ["Marital", "Single; recent breakup with boyfriend (1 week ago) — described as 'volatile' relationship"],
    ["Tobacco", "Social vaping (JUUL) — 'a few times a week'"],
    ["Alcohol", "Increasing — reports drinking wine 'a few glasses' most evenings over past month; tonight's ingestion included approximately half a bottle of vodka"],
    ["Drugs", "Denies illicit drugs; occasional marijuana edibles ('a couple times a month')"],
    ["Exercise", "None currently"],
    ["Housing", "Lives with mother in townhouse; recently moved back in after breakup with boyfriend"],
    ["Safety", "Prior suicide attempt (2021); tonight's presentation is an intentional overdose; safety plan was in place but patient did not use it"],
    ["Advance Directive", "None — not discussed (age 22)"]
  ],
  "meta": {
    "caseId": "mixed-overdose",
    "diagnosis": "Intentional Mixed Overdose (Acetaminophen ~15g + Diphenhydramine ~1.5g + Alcohol — Suicidal Intent in Patient with MDD, BPD, Prior SA, and Recent Relationship Crisis; Rumack-Matthew Nomogram Indicates NAC Treatment Required)",
    "acuity": 1,
    "presentation": "Toxicologic Emergency",
    "category": "toxicologic"
  }
};
