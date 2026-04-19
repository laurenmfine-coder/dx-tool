
window.EMR_DATA = {
  "patient": {
    "name": "Arthur Livingston",
    "dob": "09/18/1946",
    "age": 79,
    "sex": "Male",
    "mrn": "RDX-2025-42012",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B with Medigap Plan N",
    "pcp": "Dr. Catherine Brennan, MD",
    "pharmacy": "Publix Pharmacy — 2200 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "5580 NE 18th Ave, Fort Lauderdale, FL 33308",
    "phone": "(954) 555-1472",
    "email": "a.livingston46@email.com",
    "emergencyContact": {
      "name": "Margaret Livingston (Wife)",
      "phone": "(954) 555-1488"
    }
  },
  "problems": [
    {
      "problem": "Severe Aortic Stenosis — Calcific/Degenerative",
      "icd": "I35.0",
      "onset": "2023",
      "status": "Active",
      "notes": "Bicuspid aortic valve; AVA 0.8 cm²; mean gradient 48 mmHg (echo 10/2025); symptomatic — exertional dyspnea, now syncope; TAVR evaluation in progress"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "1998",
      "status": "Active",
      "notes": "On low-dose amlodipine; careful BP management given AS — avoid overreduction"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2004",
      "status": "Active",
      "notes": "On rosuvastatin"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3a",
      "icd": "N18.31",
      "onset": "2021",
      "status": "Active",
      "notes": "eGFR 54; hypertensive nephrosclerosis"
    },
    {
      "problem": "Bicuspid Aortic Valve",
      "icd": "Q23.1",
      "onset": "2010",
      "status": "Active",
      "notes": "Incidental finding; progressive stenosis over 15 years; now severe"
    },
    {
      "problem": "Gout",
      "icd": "M10.9",
      "onset": "2016",
      "status": "Active",
      "notes": "On allopurinol; well controlled; last flare 2024"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 2.5mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "06/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Rosuvastatin 10mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Brennan",
      "start": "03/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Allopurinol 200mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "08/2017",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "01/2010",
      "refills": 11,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE Inhibitors (class)",
      "type": "Drug",
      "reaction": "Persistent dry cough (tried lisinopril and enalapril)",
      "severity": "Mild",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2026",
      "bp": "104/72",
      "hr": 58,
      "rr": 18,
      "temp": "97.8°F",
      "spo2": "96%",
      "wt": "178 lbs",
      "ht": "5'11\"",
      "bmi": 24.8,
      "setting": "ED"
    },
    {
      "date": "10/14/2025",
      "bp": "128/74",
      "hr": 64,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "97%",
      "wt": "180 lbs",
      "ht": "5'11\"",
      "bmi": 25.1,
      "setting": "Cardiology Office"
    },
    {
      "date": "06/20/2025",
      "bp": "132/78",
      "hr": 68,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "182 lbs",
      "ht": "5'11\"",
      "bmi": 25.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/14/2025",
      "type": "Specialist",
      "provider": "Dr. Anil Patel, MD (Cardiology)",
      "cc": "Aortic stenosis surveillance, worsening symptoms",
      "hpi": "79M with known severe AS (bicuspid valve) presents for interval echocardiogram and symptom assessment. Reports progressive exertional dyspnea over past 6 months — now dyspneic walking half a block (previously 2 blocks). Had one episode of near-syncope 2 weeks ago while climbing stairs — felt lightheaded, grayed out briefly, grabbed railing. No full LOC. No chest pain with exertion. No PND or orthopnea. Reports fatigue limiting daily activities.",
      "exam": "NAD at rest. CV: Pulsus parvus et tardus; harsh 4/6 crescendo-decrescendo systolic murmur at RUSB radiating to carotids; S2 diminished; S4 present. Lungs: CTAB. Ext: No edema. Neuro: A&O x3, gait steady with cane.",
      "assessment": "1. Severe AS — now symptomatic (dyspnea + near-syncope); AVA 0.8 cm², mean gradient 48\n2. Warrants urgent intervention — TAVR evaluation",
      "plan": "1. STAT TAVR workup: CT angiography chest/abdomen/pelvis, coronary angiography, carotid duplex, PFTs\n2. Heart team conference scheduled\n3. Strict fall precautions — no exertion beyond tolerance\n4. Hold amlodipine if SBP <110\n5. Avoid vasodilators, volume depletion\n6. Return 2 weeks with workup results"
    },
    {
      "id": "V002",
      "date": "06/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Catherine Brennan, MD",
      "cc": "Routine follow-up, CKD, gout management",
      "hpi": "78M with severe AS (under cardiology surveillance), CKD 3a, gout presents for routine follow-up. Reports mild exertional dyspnea — can walk 2 blocks. Gout well controlled on allopurinol. eGFR stable at 54. No chest pain.",
      "exam": "NAD. CV: Harsh systolic murmur RUSB, 3-4/6, radiating to carotids. Lungs: CTAB. Ext: No edema.",
      "assessment": "1. Severe AS — symptomatic per cardiology; TAVR evaluation planned\n2. CKD 3a — stable\n3. Gout — controlled",
      "plan": "1. Continue current medications\n2. Labs: CMP, CBC, uric acid\n3. Follow-up with cardiology for TAVR evaluation\n4. Return 3 months"
    }
  ],
  "labs": [
    {
      "date": "10/14/2025",
      "time": "08:30",
      "orderedBy": "Dr. Patel",
      "collected": "10/14/2025 08:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-851440",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "96", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "28", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.4", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "eGFR", "value": "54", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.4", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" },
            { "test": "Calcium", "value": "9.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" }
          ]
        },
        {
          "name": "BNP",
          "results": [
            { "test": "BNP", "value": "482", "unit": "pg/mL", "range": "<100", "flag": "H" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "6.8", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "12.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "38.8", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelets", "value": "188", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "10/14/2025",
      "study": "ECHOCARDIOGRAM — TRANSTHORACIC",
      "accession": "IMG-2025-101444",
      "status": "FINAL",
      "orderedBy": "Dr. Patel",
      "readBy": "Dr. Anil Patel, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Known severe AS — interval assessment, worsening symptoms",
      "technique": "Complete 2D and Doppler echocardiogram with tissue Doppler imaging.",
      "findings": "Aortic valve: Bicuspid (raphe-type, R-L fusion). Severely calcified and restricted. Peak velocity 4.6 m/s, mean gradient 48 mmHg, AVA 0.8 cm² by continuity equation. Severe aortic stenosis.\n\nLeft ventricle: Normal cavity size. Concentric LVH (septal wall 1.4 cm). EF 55% (preserved). No regional wall motion abnormalities. Grade I diastolic dysfunction.\n\nMitral valve: Mild annular calcification. Trace mitral regurgitation.\n\nRight ventricle: Normal size and function. TAPSE 2.2 cm.\n\nAortic root: 3.8 cm (mildly dilated — consistent with bicuspid aortic valve).\n\nNo pericardial effusion.",
      "impression": "1. Severe aortic stenosis (bicuspid valve) — AVA 0.8 cm², mean gradient 48 mmHg. Progressed from prior (AVA 1.0 cm², 03/2024).\n2. Concentric LVH — pressure overload.\n3. Preserved LVEF 55%.\n4. Mildly dilated aortic root (3.8 cm) — monitor for aortopathy.",
      "dictated": "10/14/2025 11:00",
      "verified": "10/14/2025 13:30"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-9218", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Pfizer)", "date": "09/2025", "site": "Right deltoid IM", "lot": "CV25-2218", "mfr": "Pfizer" },
    { "vaccine": "Prevnar 20", "date": "04/2024", "site": "Left deltoid IM", "lot": "PV20-822", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (1/2)", "date": "06/2023", "site": "Right deltoid IM", "lot": "SX23-348", "mfr": "GSK" },
    { "vaccine": "Shingrix (2/2)", "date": "08/2023", "site": "Right deltoid IM", "lot": "SX23-504", "mfr": "GSK" },
    { "vaccine": "Tdap", "date": "05/2021", "site": "Left deltoid IM", "lot": "TD21-322", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Father: Aortic stenosis requiring AVR at 72, deceased at 84 (CHF)",
    "Mother: Hypertension, alive at 98",
    "Brother: Bicuspid aortic valve (incidental), alive at 76",
    "Sister: Healthy, alive at 74"
  ],
  "socialHistory": [
    ["Occupation", "Retired civil engineer; retired 2012"],
    ["Marital", "Married 54 years"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "1 glass of red wine with dinner most evenings"],
    ["Drugs", "Denies"],
    ["Exercise", "Previously walked 2 miles daily; now limited to half-block by dyspnea; uses cane for stability"],
    ["Housing", "Two-story home with wife; bedroom on second floor — considering bedroom relocation to first floor"],
    ["Safety", "Fall risk — uses cane; handrails on all stairs; no rugs; no firearms"],
    ["Advance Directive", "Living will and DPOA completed; Full code; DPOA (wife Margaret)"]
  ],
  "meta": {
    "caseId": "cardiac-syncope",
    "diagnosis": "Cardiac Syncope (Exertional Syncope Secondary to Severe Aortic Stenosis — Bicuspid Valve, AVA 0.8 cm², Pending TAVR Evaluation)",
    "acuity": 2,
    "presentation": "Syncope",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Arthur Livingston is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did syncope start?",
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
        "onset": "'The symptoms started 79M with known severe AS (bicuspid valve) presents for interval echocardiogram a.'",
        "character": "'It's syncope \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Cardiac Syncope.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Amlodipine 2.5mg daily; Rosuvastatin 10mg QHS; Allopurinol 200mg daily; Aspirin 81mg daily.'",
        "allergies": "'My allergies are ACE Inhibitors (class).'",
        "family": "Father: Aortic stenosis requiring AVR at 72, deceased at 84 (CHF)  Mother: Hypertension, alive at 98  Brother: Bicuspid aortic valve (incidental), alive at 76",
        "social": "Occupation: Retired civil engineer; retired 2012  Marital: Married 54 years  Tobacco: Never smoker  Alcohol: 1 glass of red wine with dinner most evenings  Drugs: Denies"
    },
    "examManeuvers": [
        "General appearance and hemodynamic assessment",
        "Vital signs review",
        "Jugular venous pressure",
        "Cardiovascular auscultation",
        "Peripheral pulses and perfusion",
        "Pulmonary auscultation",
        "Lower extremity edema",
        "Skin perfusion and temperature"
    ],
    "examFindings": {
        "General appearance and hemodynamic assessment": "Clinical finding consistent with Cardiac Syncope. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Cardiac Syncope. Document specifically what you observe.",
        "Jugular venous pressure": "Clinical finding consistent with Cardiac Syncope. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Cardiac Syncope. Document specifically what you observe.",
        "Peripheral pulses and perfusion": "Clinical finding consistent with Cardiac Syncope. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Cardiac Syncope. Document specifically what you observe.",
        "Lower extremity edema": "Clinical finding consistent with Cardiac Syncope. Document specifically what you observe.",
        "Skin perfusion and temperature": "Clinical finding consistent with Cardiac Syncope. Document specifically what you observe."
    },
    "ddxTargets": [
        "Cardiac Syncope (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Cardiac Syncope, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Cardiac Syncope, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Cardiac Syncope based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Arthur Livingston's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Cardiac Syncope (Exertional Syncope Secondary to Severe Aortic Stenosis \u2014 Bicuspid Valve, AVA 0.8 cm\u00b2, Pending TAVR Evaluation). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};