// Virtual EMR Case: CNS Infection
// Variant: cns-infection | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Omar Hassan",
  "patientHPI": "I've been pretty good about taking my HIV medication, though I'll admit I forget maybe once or twice a week. Everything's been going well with my treatment, but lately I've had a couple episodes where I just blank out for a few seconds and my wife says I was shaking.",
    "dob": "06/30/1991",
    "age": 33,
    "sex": "Male",
    "mrn": "RDX-2025-73182",
    "pronouns": "He/Him",
    "insurance": "United Healthcare — PPO",
    "pcp": "Dr. James Whitfield, MD",
    "pharmacy": "CVS Pharmacy — 4100 N Federal Hwy, Fort Lauderdale, FL",
    "language": "English, Arabic",
    "race": "Middle Eastern (Egyptian)",
    "address": "997 Juniper Dr, Indianapolis, IN 46203",
    "phone": "(954) 555-8412",
    "email": "o.hassan91@email.com",
    "emergencyContact": {
      "name": "Fatima Hassan (Wife)",
      "phone": "(954) 555-8415"
    }
  },
  "problems": [
    {
      "problem": "HIV — Well-Controlled on ART",
      "icd": "B20",
      "onset": "2017",
      "status": "Active",
      "notes": "Diagnosed 2017; on bictegravir/emtricitabine/TAF (Biktarvy); CD4 recently dropped from 580 to 180 — patient reports 2-month non-adherence due to insurance lapse; viral load pending"
    },
    {
      "problem": "Toxoplasma Encephalitis — Suspected",
      "icd": "B58.2",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — seizure with ring-enhancing lesions on CT; CD4 <200"
    },
    {
      "problem": "Allergic Rhinitis",
      "icd": "J30.9",
      "onset": "2019",
      "status": "Active",
      "notes": "Seasonal; managed with cetirizine PRN"
    }
  ],
  "medications": [
    {
      "name": "Bictegravir/Emtricitabine/TAF (Biktarvy) 1 tablet daily",
      "sig": "Take 1 tablet by mouth daily with or without food",
      "prescriber": "Dr. Okonkwo (ID)",
      "start": "04/2019",
      "refills": 0,
      "status": "Active — PATIENT NON-ADHERENT x 2 MONTHS (insurance lapse)"
    },
    {
      "name": "Cetirizine 10mg daily PRN",
      "sig": "Take 1 tablet by mouth daily as needed for allergies",
      "prescriber": "Dr. Whitfield",
      "start": "03/2020",
      "refills": 0,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfonamides (TMP-SMX)",
      "type": "Drug",
      "reaction": "Diffuse maculopapular rash, fever (occurred during PCP prophylaxis in 2018)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/27/2025",
      "bp": "142/88",
      "hr": 108,
      "rr": 18,
      "temp": "101.2°F",
      "spo2": "97%",
      "wt": "168 lbs",
      "ht": "5'9\"",
      "bmi": 24.8,
      "setting": "ED"
    },
    {
      "date": "09/10/2024",
      "bp": "122/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "174 lbs",
      "ht": "5'9\"",
      "bmi": 25.7,
      "setting": "Specialist"
    },
    {
      "date": "03/20/2024",
      "bp": "118/74",
      "hr": 68,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "176 lbs",
      "ht": "5'9\"",
      "bmi": 26.0,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/10/2024",
      "type": "Specialist",
      "provider": "Dr. Chidi Okonkwo, MD (Infectious Disease)",
      "cc": "HIV management — routine follow-up",
      "hpi": "33-year-old male with HIV on Biktarvy for routine ID follow-up. Reports good adherence 'mostly' — admits to missing doses 1-2x/week. Denies opportunistic infection symptoms. No weight loss, night sweats, or oral thrush. Sexually active with wife only. CD4 580 (stable), viral load undetectable. No current PCP prophylaxis (CD4 >200). Prior TMP-SMX allergy — desensitization discussed but patient declined.",
      "exam": "General: Well-appearing male. HEENT: Oropharynx clear, no thrush. Skin: No KS lesions, no rash. LN: No palpable lymphadenopathy. Neuro: A&O x3, nonfocal.",
      "assessment": "1. HIV — well-controlled on Biktarvy; CD4 580, VL undetectable\n2. No current indication for OI prophylaxis\n3. TMP-SMX allergy — would need alternative PCP prophylaxis if CD4 drops <200",
      "plan": "1. Continue Biktarvy — emphasized strict daily adherence\n2. Labs in 6 months: CD4, VL, CMP, CBC\n3. Toxoplasma IgG: Positive (baseline serology — at risk for reactivation if immunosuppressed)\n4. Discussed importance of insurance continuity — connected with patient assistance program\n5. RTC 6 months"
    },
    {
      "id": "V002",
      "date": "02/15/2025",
      "type": "Primary Care",
      "provider": "Dr. James Whitfield, MD",
      "cc": "Headache x 2 weeks, intermittent confusion",
      "hpi": "33-year-old HIV+ male presenting with 2-week history of progressive headache, right-sided and constant, worse in the morning. Wife reports episodes of confusion and word-finding difficulty over the past week. Mild low-grade fevers (100.2-100.8°F). Appetite decreased, lost 8 lbs in 3 weeks. Admits he has not taken Biktarvy for approximately 2 months — insurance lapsed and he could not afford medications. No nausea, vomiting, neck stiffness, or vision changes at this visit.",
      "exam": "General: Thin male, appears fatigued. HEENT: Oropharynx — white patches on buccal mucosa suspicious for oral thrush. Neck: Supple, no meningismus. Neuro: A&O x2 (oriented to person/place, not date). Word-finding difficulty. Mild right-sided weakness (grip 4/5 R, 5/5 L). DTRs symmetric. Gait: Mildly unsteady.",
      "assessment": "1. Progressive headache with focal neurologic findings in HIV+ patient off ART — HIGH concern for CNS opportunistic infection (toxoplasmosis, cryptococcus, PML)\n2. Oral candidiasis — consistent with immunosuppression\n3. Non-adherence to ART x 2 months — likely significant CD4 decline",
      "plan": "1. URGENT: CD4 count, viral load, CBC, CMP, Toxoplasma IgG, Cryptococcal antigen\n2. STAT CT head with contrast — if unavailable today, go to ED\n3. If lesions on CT → LP (after ruling out mass effect) → MRI brain\n4. Start fluconazole 200mg loading then 100mg daily for oral thrush\n5. Patient instructed to go to ED if seizure, worsening confusion, or new weakness\n6. ART patient assistance program re-initiated — STAT"
    }
  ],
  "labs": [
    {
      "date": "02/27/2025",
      "time": "04:28",
      "orderedBy": "Dr. Marcus Johnson, MD (ED)",
      "collected": "02/27/2025 04:10",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-110482",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), CSF",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "3.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "L" },
            { "test": "Hemoglobin", "value": "12.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "36.8", "unit": "%", "range": "38.3-48.6", "flag": "L" },
            { "test": "Platelets", "value": "142", "unit": "x10³/µL", "range": "150-400", "flag": "L" },
            { "test": "Lymphocytes (Absolute)", "value": "0.4", "unit": "x10³/µL", "range": "1.0-4.8", "flag": "L" }
          ]
        },
        {
          "name": "HIV LABS",
          "results": [
            { "test": "CD4 Count", "value": "82", "unit": "cells/µL", "range": ">500", "flag": "L" },
            { "test": "CD4 Percentage", "value": "6", "unit": "%", "range": ">29", "flag": "L" },
            { "test": "HIV Viral Load", "value": "184,000", "unit": "copies/mL", "range": "<20 (undetectable)", "flag": "H" }
          ]
        },
        {
          "name": "INFECTIOUS MARKERS",
          "results": [
            { "test": "Toxoplasma IgG", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Toxoplasma IgM", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Cryptococcal Antigen (Serum)", "value": "Negative", "unit": "", "range": "Negative", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "98", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "12", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.9", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "136", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "LDH", "value": "248", "unit": "U/L", "range": "120-246", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/27/2025",
      "study": "CT HEAD WITH CONTRAST",
      "accession": "IMG-2025-11024",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Johnson, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "33-year-old HIV+ (off ART, CD4 82), new-onset GTC seizure, progressive headache and confusion — concern for CNS toxoplasmosis",
      "technique": "Axial CT images of the head with IV contrast.",
      "findings": "LEFT BASAL GANGLIA: A ring-enhancing lesion measuring 3.2 x 2.8 cm with surrounding vasogenic edema. Central hypodensity consistent with necrosis. Moderate mass effect on left lateral ventricle.\n\nRIGHT FRONTAL LOBE (SUBCORTICAL): A second ring-enhancing lesion measuring 1.8 x 1.6 cm with moderate surrounding edema.\n\nRIGHT THALAMUS: A third lesion measuring 1.2 x 1.0 cm with faint ring enhancement.\n\nVENTRICLES: Mild left lateral ventricle compression from basal ganglia lesion. No obstructive hydrocephalus.\n\nMIDLINE: 3 mm leftward-to-rightward shift.\n\nOTHER: No hemorrhage. No herniation.",
      "impression": "1. MULTIPLE RING-ENHANCING LESIONS (3) with predilection for basal ganglia and gray-white junction — classic pattern for CNS toxoplasmosis in HIV/AIDS\n2. Dominant left basal ganglia lesion (3.2 cm) with mass effect and 3 mm midline shift\n3. Primary differential: Toxoplasmosis (most likely given CD4 82, positive IgG, typical location) vs CNS lymphoma\n4. MRI with DWI, spectroscopy, and SPECT/PET recommended if no response to empiric treatment\n5. Recommend empiric anti-toxoplasma therapy and repeat imaging in 2-3 weeks",
      "dictated": "02/27/2025 05:00",
      "verified": "02/27/2025 05:08"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL832T", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Pfizer, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "CV782K", "mfr": "Pfizer" },
    { "vaccine": "Hepatitis B (Engerix-B, booster)", "date": "03/2020", "site": "Right deltoid IM", "lot": "HB412R", "mfr": "GSK" },
    { "vaccine": "Tdap (Adacel)", "date": "06/2021", "site": "Left deltoid IM", "lot": "TA228P", "mfr": "Sanofi" }
  ],
  "familyHistory": [
    "Mother (age 62): Type 2 Diabetes, hypertension",
    "Father (age 65): Coronary artery disease — CABG at age 60",
    "Sister (age 30): Healthy",
    "No family history of seizure disorder, cancer, or autoimmune disease"
  ],
  "socialHistory": [
    ["Occupation", "Software developer — remote work; recently reduced hours due to symptoms"],
    ["Marital", "Married x 5 years; wife aware of HIV status; wife HIV-negative (on PrEP)"],
    ["Tobacco", "Never"],
    ["Alcohol", "Rare — occasional beer"],
    ["Drugs", "None"],
    ["Exercise", "Gym 3x/week (prior to symptom onset); not exercising past 3 weeks"],
    ["Housing", "Condo with wife"],
    ["Safety", "No concerns"],
    ["Advance Directive", "None — discussed with wife during this admission"]
  ],
  "meta": {
    "caseId": "cns-infection",
    "diagnosis": "CNS Toxoplasmosis with New-Onset Seizure in AIDS (CD4 82) — Multiple Ring-Enhancing Lesions with Basal Ganglia Predilection",
    "acuity": 2,
    "presentation": "Seizure",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Omar Hassan is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did seizure start?",
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
        "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started I've been pretty good about taking my HIV medication, though I'll admit I forget.'",
        "character": "'It's seizure \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with CNS Toxoplasmosis with New-Onset Seizure in AIDS.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Bictegravir/Emtricitabine/TAF (Biktarvy) 1 tablet daily; Cetirizine 10mg daily PRN.'",
        "allergies": "'My allergies are Sulfonamides (TMP-SMX).'",
        "family": "Mother (age 62): Type 2 Diabetes, hypertension  Father (age 65): Coronary artery disease \u2014 CABG at age 60  Sister (age 30): Healthy",
        "social": "Occupation: Software developer \u2014 remote work; recently reduced hours due to symptoms  Marital: Married x 5 years; wife aware of HIV status; wife HIV-negative (on PrEP)  Tobacco: Never  Alcohol: Rare \u2014 occasional beer  Drugs: None"
    },
    "examManeuvers": [
        "General appearance and toxicity",
        "Vital signs with temperature",
        "Skin for rash, lesions, or signs of infection",
        "Lymph node palpation",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Source-specific examination"
    ],
    "examFindings": {
        "General appearance and toxicity": "Clinical finding consistent with CNS Toxoplasmosis with New-Onset Seizure in AIDS. Document specifically what you observe.",
        "Vital signs with temperature": "Clinical finding consistent with CNS Toxoplasmosis with New-Onset Seizure in AIDS. Document specifically what you observe.",
        "Skin for rash, lesions, or signs of infection": "Clinical finding consistent with CNS Toxoplasmosis with New-Onset Seizure in AIDS. Document specifically what you observe.",
        "Lymph node palpation": "Clinical finding consistent with CNS Toxoplasmosis with New-Onset Seizure in AIDS. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with CNS Toxoplasmosis with New-Onset Seizure in AIDS. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with CNS Toxoplasmosis with New-Onset Seizure in AIDS. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with CNS Toxoplasmosis with New-Onset Seizure in AIDS. Document specifically what you observe.",
        "Source-specific examination": "Clinical finding consistent with CNS Toxoplasmosis with New-Onset Seizure in AIDS. Document specifically what you observe."
    },
    "ddxTargets": [
        "CNS Toxoplasmosis with New-Onset Seizure in AIDS (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For CNS Toxoplasmosis with New-Onset Seizure in AIDS, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying CNS Toxoplasmosis with New-Onset Seizure in AIDS, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight CNS Toxoplasmosis with New-Onset Seizure in AIDS based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Omar Hassan's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is CNS Toxoplasmosis with New-Onset Seizure in AIDS (CD4 82) \u2014 Multiple Ring-Enhancing Lesions with Basal Ganglia Predilection. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
