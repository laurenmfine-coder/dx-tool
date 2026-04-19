// Virtual EMR Case: Severe Croup
// Variant: severe-croup | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Olivia Desmond",
  "patientHPI": "She's been making this weird barking sound when she coughs since yesterday, and her voice sounds hoarse and scratchy. She seems to be having trouble breathing, especially when she gets upset, and the sound gets louder when she cries.",
    "dob": "03/30/2022",
    "age": 2,
    "sex": "Female",
    "mrn": "RDX-2025-44618",
    "pronouns": "She/Her",
    "insurance": "Aetna — PPO (parent plan)",
    "pcp": "Dr. Thomas Grant, MD (Pediatrics)",
    "pharmacy": "CVS Pharmacy — 4001 SW 64th Ave, Riverside, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "287 Foxglove Dr, Kansas City, MO 64101",
    "phone": "(954) 555-5381",
    "email": "m.desmond.parent@email.com",
    "emergencyContact": {
      "name": "Megan Desmond (Mother)",
      "phone": "(954) 555-5383"
    }
  },
  "problems": [
    {
      "problem": "Severe Croup (Laryngotracheobronchitis)",
      "icd": "J05.0",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — stridor at rest, significant respiratory distress, Westley score 8"
    },
    {
      "problem": "History of Croup — 1 prior episode",
      "icd": "J05.0",
      "onset": "2024",
      "status": "Resolved",
      "notes": "Mild episode at age 18 months; treated with single dose dexamethasone; resolved in 48 hours"
    },
    {
      "problem": "Cow's Milk Protein Intolerance — Outgrown",
      "icd": "K52.29",
      "onset": "2022",
      "status": "Resolved",
      "notes": "Presented with bloody stools at 3 months; confirmed on elimination diet; challenged at 14 months and tolerated dairy without issue"
    }
  ],
  "medications": [
    {
      "name": "Children's Acetaminophen 160mg/5mL — 5mL Q4-6h PRN",
      "sig": "Give 5 mL by mouth every 4-6 hours as needed for fever or pain",
      "prescriber": "Dr. Grant",
      "start": "10/2024",
      "refills": 0,
      "status": "PRN"
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
      "date": "02/25/2025",
      "bp": "94/58",
      "hr": 162,
      "rr": 44,
      "temp": "101.6°F",
      "spo2": "90%",
      "wt": "26 lbs",
      "ht": "2'11\"",
      "bmi": 15.6,
      "setting": "ED"
    },
    {
      "date": "02/25/2025",
      "bp": "90/56",
      "hr": 148,
      "rr": 34,
      "temp": "100.2°F",
      "spo2": "94%",
      "wt": "26 lbs",
      "ht": "2'11\"",
      "bmi": 15.6,
      "setting": "ED — post nebulized epinephrine"
    },
    {
      "date": "10/15/2024",
      "bp": "86/54",
      "hr": 108,
      "rr": 24,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "25 lbs",
      "ht": "2'10\"",
      "bmi": 15.1,
      "setting": "PCP Office"
    },
    {
      "date": "03/30/2024",
      "bp": "84/52",
      "hr": 110,
      "rr": 26,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "23 lbs",
      "ht": "2'9\"",
      "bmi": 15.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Thomas Grant, MD",
      "cc": "Well-child visit — 2.5-year checkup",
      "hpi": "2.5-year-old female for well-child visit. Parents report she is doing well. Speaking in 3-4 word sentences. Toilet training initiated. Good appetite. No illness. Previous milk protein intolerance fully resolved — tolerates dairy without issues. One prior episode of mild croup at 18 months.",
      "exam": "General: Well-appearing, active, cooperative toddler. HEENT: TMs clear, oropharynx normal. CV: RRR. Lungs: CTA. Abdomen: Soft, NT. Skin: Clear. Neuro: Age-appropriate — running, climbing, speaking in short sentences.",
      "assessment": "1. Well-child — growth and development appropriate\n2. Cow's milk protein intolerance — outgrown\n3. History of croup — single prior episode, mild",
      "plan": "1. Influenza vaccine given\n2. All other immunizations up to date\n3. Anticipatory guidance: toilet training, safety, nutrition\n4. RTC at age 3 for well-child visit"
    },
    {
      "id": "V002",
      "date": "09/18/2024",
      "type": "ED",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Barky cough and noisy breathing x 1 day",
      "hpi": "18-month-old female (at time of visit) brought to ED by parents for 1-day barky cough and 'squeaky' breathing at night. Mild rhinorrhea for 2 days prior. Low-grade fever (100.4°F). No stridor at rest currently. Still drinking. No drooling. Older cousin at daycare had similar cough last week.",
      "exam": "General: Mild distress with intermittent barky cough but comfortable between episodes. HEENT: Mild nasal congestion, oropharynx mildly erythematous. Neck: Supple. Lungs: Intermittent inspiratory stridor with crying only, no stridor at rest, no wheezing. CV: RRR. SpO2 97% on RA.",
      "assessment": "1. Mild croup — Westley croup score 2 (occasional barky cough, stridor with agitation only)\n2. URI — viral",
      "plan": "1. Dexamethasone 0.6 mg/kg PO x 1 dose given\n2. Observed 2 hours post-dexamethasone — no stridor at rest\n3. Discharge with anticipatory guidance: cool mist humidifier, acetaminophen PRN, return for stridor at rest, difficulty breathing, or drooling\n4. Follow up with PCP in 48 hours if not improving"
    }
  ],
  "labs": [
    {
      "date": "02/25/2025",
      "time": "02:30",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "collected": "02/25/2025 02:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-104291",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA), Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "12.4", "unit": "x10³/µL", "range": "5.5-15.5", "flag": "" },
            { "test": "Hemoglobin", "value": "12.0", "unit": "g/dL", "range": "11.0-14.0", "flag": "" },
            { "test": "Hematocrit", "value": "36.1", "unit": "%", "range": "33-39", "flag": "" },
            { "test": "Platelets", "value": "268", "unit": "x10³/µL", "range": "150-400", "flag": "" },
            { "test": "Lymphocytes", "value": "52", "unit": "%", "range": "25-50", "flag": "H" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "98", "unit": "mg/dL", "range": "60-110", "flag": "" },
            { "test": "BUN", "value": "12", "unit": "mg/dL", "range": "5-18", "flag": "" },
            { "test": "Creatinine", "value": "0.3", "unit": "mg/dL", "range": "0.2-0.4", "flag": "" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.5", "flag": "" },
            { "test": "Chloride", "value": "103", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "21", "unit": "mEq/L", "range": "20-28", "flag": "" }
          ]
        },
        {
          "name": "BLOOD GAS (VENOUS)",
          "results": [
            { "test": "pH", "value": "7.34", "unit": "", "range": "7.32-7.42", "flag": "" },
            { "test": "pCO2", "value": "48", "unit": "mmHg", "range": "35-45", "flag": "H" },
            { "test": "pO2", "value": "42", "unit": "mmHg", "range": "30-50", "flag": "" },
            { "test": "Base Excess", "value": "-2", "unit": "mEq/L", "range": "-2 to +2", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/25/2025",
      "study": "SOFT TISSUE NECK X-RAY — AP AND LATERAL",
      "accession": "IMG-2025-10382",
      "status": "FINAL",
      "orderedBy": "Dr. Emily Torres, MD",
      "readBy": "Dr. Sarah Mitchell, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "2-year-old with severe stridor at rest, respiratory distress, barky cough — concern for severe croup vs bacterial tracheitis vs epiglottitis",
      "technique": "AP and lateral soft tissue neck radiographs obtained with the patient in upright position.",
      "findings": "SUBGLOTTIC AIRWAY: Classic 'steeple sign' present on AP view — symmetric subglottic narrowing creating an inverted-V configuration of the tracheal air column. The narrowing extends approximately 1.5 cm below the vocal cords.\n\nEPIGLOTTIS: Normal in size and morphology on lateral view. No 'thumb sign.' Aryepiglottic folds are not thickened.\n\nTRACHEA: The tracheal mucosa appears smooth without irregularity or pseudomembranes. No intraluminal debris.\n\nPREVERTEBRAL SOFT TISSUES: Normal prevertebral soft tissue width. No retropharyngeal widening.\n\nCHEST: Limited view of the lung apices shows no focal consolidation.",
      "impression": "1. Classic 'steeple sign' — consistent with viral croup (laryngotracheobronchitis) with significant subglottic narrowing\n2. No evidence of epiglottitis (normal epiglottis)\n3. No findings suggestive of bacterial tracheitis (smooth tracheal mucosa)\n4. No retropharyngeal abnormality",
      "dictated": "02/25/2025 02:50",
      "verified": "02/25/2025 02:58"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/15/2024", "site": "Right deltoid IM", "lot": "FL892T", "mfr": "GSK" },
    { "vaccine": "DTaP (Daptacel) — 4th dose", "date": "03/30/2023", "site": "Right thigh IM", "lot": "DA418K", "mfr": "Sanofi" },
    { "vaccine": "Hepatitis A (Havrix) — 1st dose", "date": "06/14/2023", "site": "Left thigh IM", "lot": "HA302R", "mfr": "GSK" },
    { "vaccine": "Hepatitis A (Havrix) — 2nd dose", "date": "12/14/2023", "site": "Left thigh IM", "lot": "HA318P", "mfr": "GSK" },
    { "vaccine": "MMR (M-M-R II)", "date": "03/30/2023", "site": "Left thigh SC", "lot": "MM592L", "mfr": "Merck" },
    { "vaccine": "Varicella (Varivax)", "date": "03/30/2023", "site": "Right thigh SC", "lot": "VV281M", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Mother (age 32): Seasonal allergies, mild asthma in childhood (outgrown)",
    "Father (age 34): No significant medical history",
    "Maternal grandfather (age 64): COPD, former smoker",
    "Paternal grandmother (age 60): Hypothyroidism",
    "Sibling (brother, age 5): Had croup x 2 episodes at ages 2 and 3; no current respiratory issues"
  ],
  "socialHistory": [
    ["Guardian", "Lives with both parents and older brother"],
    ["Childcare/School", "Attends daycare center 4 days/week"],
    ["Tobacco Exposure", "None — no smokers in household; grandfather smokes but does not smoke around children"],
    ["Pets", "One cat (indoor)"],
    ["Home Environment", "Single-family home, central air/heat, no mold"],
    ["Diet", "Table foods; good variety; tolerates all foods including dairy (CMPI outgrown)"],
    ["Development", "Speaking in 3-4 word sentences, toilet training in progress, running, jumping — age-appropriate"],
    ["Safety", "Rear-facing car seat; fence around backyard pool; smoke detectors"]
  ],
  "meta": {
    "caseId": "severe-croup",
    "diagnosis": "Severe Viral Croup (Laryngotracheobronchitis) — Westley Score 8, Requiring Nebulized Epinephrine and Observation",
    "acuity": 2,
    "presentation": "Pediatric Emergency",
    "category": "respiratory"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Olivia Desmond is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did pediatric emergency start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started She's been making this weird barking sound when she coughs since yesterday, and .'",
        "character": "'It's pediatric emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Severe Viral Croup.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Children's Acetaminophen 160mg/5mL \u2014 5mL Q4-6h PRN.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Mother (age 32): Seasonal allergies, mild asthma in childhood (outgrown)  Father (age 34): No significant medical history  Maternal grandfather (age 64): COPD, former smoker",
        "social": "Guardian: Lives with both parents and older brother  Childcare/School: Attends daycare center 4 days/week  Tobacco Exposure: None \u2014 no smokers in household; grandfather smokes but does not smoke around children  Pets: One cat (indoor)  Home Environment: Single-family home, central air/heat, no mold"
    },
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with Severe Viral Croup. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Severe Viral Croup. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Severe Viral Croup. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Severe Viral Croup. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Severe Viral Croup. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Severe Viral Croup. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Severe Viral Croup. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Severe Viral Croup. Document specifically what you observe."
    },
    "ddxTargets": [
        "Severe Viral Croup (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Severe Viral Croup, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Severe Viral Croup, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Severe Viral Croup based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Olivia Desmond's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Severe Viral Croup (Laryngotracheobronchitis) \u2014 Westley Score 8, Requiring Nebulized Epinephrine and Observation. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
