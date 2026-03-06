// Virtual EMR Case: Hypertrophic Cardiomyopathy — Exertional Syncope
// Variant: hcm | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Jordan Mitchell",
  "patientHPI": "I'm here for my sports physical for basketball - I feel great overall, but I have to admit I've gotten lightheaded a few times during really intense practices this past year, and once everything went kind of gray for a second before I sat down.",
    "dob": "06/03/2004",
    "age": 21,
    "sex": "Male",
    "mrn": "RDX-2025-42234",
    "pronouns": "He/Him",
    "insurance": "Cigna PPO (parent plan)",
    "pcp": "Dr. Sandra Ellis, MD",
    "pharmacy": "CVS Pharmacy — 4401 Sheridan St, Hollywood, FL",
    "language": "English",
    "race": "Black (African American)",
    "address": "1619 Daisy Ave, Birmingham, AL 35211",
    "phone": "(954) 555-3890",
    "email": "j.mitchell04@email.com",
    "emergencyContact": {
      "name": "Denise Mitchell (Mother)",
      "phone": "(954) 555-3908"
    }
  },
  "problems": [
    {
      "problem": "Systolic Murmur — Under Investigation",
      "icd": "R01.1",
      "onset": "2025",
      "status": "Active",
      "notes": "Noted at pre-sports physical 09/2025; described as grade 2/6 systolic murmur at LLSB that increases with Valsalva; referral to cardiology placed but patient did not follow up"
    },
    {
      "problem": "Exercise-Induced Lightheadedness",
      "icd": "R42",
      "onset": "2025",
      "status": "Active",
      "notes": "Reported at sports physical — 2-3 episodes of near-syncope during basketball practice in past year; attributed to dehydration; no formal workup"
    }
  ],
  "medications": [
    {
      "name": "None — No chronic medications",
      "sig": "",
      "prescriber": "",
      "start": "",
      "refills": 0,
      "status": ""
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
      "date": "02/26/2026",
      "bp": "108/68",
      "hr": 96,
      "rr": 20,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "195 lbs",
      "ht": "6'3\"",
      "bmi": 24.4,
      "setting": "ED"
    },
    {
      "date": "09/08/2025",
      "bp": "118/72",
      "hr": 64,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "192 lbs",
      "ht": "6'3\"",
      "bmi": 24.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Sandra Ellis, MD",
      "cc": "Pre-participation sports physical — college basketball",
      "hpi": "21M presents for annual pre-sports physical for college basketball team. Reports feeling 'fine' overall. On direct questioning, admits to 2-3 episodes of lightheadedness during intense practice over past year — lasted seconds, resolved with sitting down and drinking water. One episode involved 'graying out' briefly but no full LOC. Attributes to dehydration and South Florida heat. No chest pain with exertion. No palpitations. No family history of sudden death (patient unsure about father's side — parents separated, limited contact with biological father).",
      "exam": "Athletic, well-developed male. CV: RRR, grade 2/6 harsh systolic murmur best at LLSB; murmur increases with Valsalva maneuver and standing; decreases with squatting. Bilateral carotid upstrokes brisk (bisferiens pulse questionable). PMI laterally displaced and forceful. Lungs: CTAB. MSK: Full ROM all joints. Neuro: Intact.",
      "assessment": "1. Systolic murmur that increases with Valsalva — concerning for HCM vs HOCM\n2. Exertional near-syncope — needs urgent cardiac evaluation BEFORE return to sports\n3. Must be cleared by cardiology before athletic participation",
      "plan": "1. STAT referral to cardiology — echocardiogram and ECG\n2. Athletic restriction until cardiology clearance\n3. Letter sent to athletic department regarding medical hold\n4. Patient counseled on importance of not playing until evaluated\n5. Family history needs clarification — biological father's cardiac history"
    }
  ],
  "labs": [
    {
      "date": "09/08/2025",
      "time": "10:00",
      "orderedBy": "Dr. Ellis",
      "collected": "09/08/2025 10:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-800908",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "84", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.1", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "7.2", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "47.4", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelets", "value": "248", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "09/08/2025",
      "study": "ELECTROCARDIOGRAM — 12-LEAD",
      "accession": "ECG-2025-090822",
      "status": "FINAL",
      "orderedBy": "Dr. Ellis",
      "readBy": "Dr. Ellis, MD",
      "facility": "ReasonDx Medical Center",
      "priority": "STAT",
      "clinical": "Pre-sports physical, new murmur, exertional near-syncope",
      "technique": "Standard 12-lead ECG at rest.",
      "findings": "Rate: 62 bpm. Rhythm: Normal sinus rhythm.\n\nIntervals: PR 160 ms, QRS 98 ms, QTc 440 ms.\n\nAxis: Normal.\n\nAbnormalities: Left ventricular hypertrophy by voltage criteria (SV1 + RV5 = 42 mm). Deep narrow Q waves in leads I, aVL, V5-V6 ('dagger' Q waves). T-wave inversions in V4-V6 and I, aVL. Strain pattern in lateral leads.",
      "impression": "1. LVH by voltage criteria with repolarization abnormality.\n2. Deep narrow Q waves in lateral leads — suggestive of septal hypertrophy (HCM pattern).\n3. Echocardiogram strongly recommended for definitive evaluation.",
      "dictated": "09/08/2025 10:45",
      "verified": "09/08/2025 11:00"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-8522", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Pfizer)", "date": "09/2025", "site": "Right deltoid IM", "lot": "CV25-1904", "mfr": "Pfizer" },
    { "vaccine": "Tdap", "date": "08/2022", "site": "Left deltoid IM", "lot": "TD22-504", "mfr": "GSK" },
    { "vaccine": "HPV (Gardasil 9) — Series Complete", "date": "2019", "site": "Left deltoid IM", "lot": "HP19-440", "mfr": "Merck" },
    { "vaccine": "Meningococcal ACWY Booster", "date": "09/2022", "site": "Right deltoid IM", "lot": "MN22-388", "mfr": "Sanofi" },
    { "vaccine": "Meningococcal B (Bexsero) — Series Complete", "date": "2022", "site": "Left deltoid IM", "lot": "MB22-110", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Mother: Healthy, alive at 46",
    "Biological father: Limited information — parents separated when patient was 5; mother reports father had 'heart problems' in his 30s but no details; paternal grandfather died suddenly age 44 (cause unknown)",
    "Maternal grandmother: HTN, T2DM, alive at 72",
    "Half-brother (maternal): Healthy, alive at 14"
  ],
  "socialHistory": [
    ["Occupation", "College junior — kinesiology major; scholarship basketball player (starting point guard)"],
    ["Marital", "Single; lives in campus housing"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 1-2 drinks on weekends during off-season; abstains during season"],
    ["Drugs", "Denies"],
    ["Exercise", "Basketball practice 5 days/week, 2-3 hrs; strength training 3x/week; high-intensity competitive athlete"],
    ["Housing", "University dormitory with roommate"],
    ["Safety", "Seatbelt; helmet when cycling; no firearms"],
    ["Advance Directive", "None — not discussed (age 21); mother is emergency contact"]
  ],
  "meta": {
    "caseId": "hcm",
    "diagnosis": "Hypertrophic Obstructive Cardiomyopathy (HOCM — Exertional Syncope During Basketball in Young Athlete with Undiagnosed HCM, Family History of Sudden Cardiac Death)",
    "acuity": 2,
    "presentation": "Syncope",
    "category": "cardiovascular"
  }
};
