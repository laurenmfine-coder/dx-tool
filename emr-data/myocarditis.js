// Virtual EMR Case: Acute Myocarditis
// Variant: myocarditis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Marcus Jean-Baptiste",
  "patientHPI": "I've had this cold for about five days now - stuffy nose, scratchy throat, and this annoying dry cough that won't go away. I had a fever at home that got up to 100 degrees, and my whole body has been aching. I'm training for a half-marathon so I've been pushing through and still going on my runs, but I'm feeling pretty wiped out.",
    "dob": "11/04/1999",
    "age": 25,
    "sex": "Male",
    "mrn": "RDX-2025-58264",
    "pronouns": "He/Him",
    "insurance": "Cigna HMO",
    "pcp": "Dr. Patricia Gomez, MD",
    "pharmacy": "Walgreens — 3100 Broward Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black/Haitian American",
    "address": "7529 Jasmine Way, Minneapolis, MN 55411",
    "phone": "(954) 555-3918",
    "email": "m.jeanbaptiste99@email.com",
    "emergencyContact": {
      "name": "Marie Jean-Baptiste (Mother)",
      "phone": "(954) 555-3044"
    }
  },
  "problems": [
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2015",
      "status": "Active",
      "notes": "Spring and fall exacerbations"
    },
    {
      "problem": "Recent Upper Respiratory Infection",
      "icd": "J06.9",
      "onset": "2025",
      "status": "Resolved",
      "notes": "Viral URI two weeks prior to current presentation"
    },
    {
      "problem": "Exercise-Induced Asthma",
      "icd": "J45.990",
      "onset": "2012",
      "status": "Active",
      "notes": "Uses albuterol PRN before exercise"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Gomez",
      "start": "03/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Albuterol 90mcg MDI PRN",
      "sig": "Inhale 2 puffs by mouth 15 minutes before exercise as needed",
      "prescriber": "Dr. Gomez",
      "start": "09/2018",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Fluticasone nasal spray 50mcg",
      "sig": "2 sprays each nostril once daily during allergy season",
      "prescriber": "Dr. Gomez",
      "start": "04/2022",
      "refills": 2,
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
      "date": "01/10/2025",
      "bp": "112/68",
      "hr": 62,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "185 lbs",
      "ht": "6'1\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    },
    {
      "date": "08/15/2024",
      "bp": "118/72",
      "hr": 58,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "183 lbs",
      "ht": "6'1\"",
      "bmi": 24.1,
      "setting": "PCP Office"
    },
    {
      "date": "02/20/2024",
      "bp": "116/70",
      "hr": 60,
      "rr": 12,
      "temp": "98.2°F",
      "spo2": "100%",
      "wt": "181 lbs",
      "ht": "6'1\"",
      "bmi": 23.9,
      "setting": "PCP Office"
    },
    {
      "date": "08/10/2023",
      "bp": "114/68",
      "hr": 56,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "180 lbs",
      "ht": "6'1\"",
      "bmi": 23.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Gomez, MD",
      "cc": "Cough and congestion x 5 days",
      "hpi": "25-year-old male presenting with 5 days of nasal congestion, sore throat, nonproductive cough, low-grade fever (100.2°F at home), and myalgias. No chest pain, shortness of breath, or rash. Currently afebrile in clinic. Denies sick contacts. Training for half-marathon and has continued running through symptoms.",
      "exam": "General: NAD. HEENT: Mild pharyngeal erythema, no exudates, no tonsillar enlargement. TMs clear. Neck: Supple, no LAD. Lungs: CTAB. CV: RRR, no murmurs. Abdomen: Soft, NT.",
      "assessment": "1. Acute upper respiratory infection — likely viral\n2. Exercise-induced asthma — stable",
      "plan": "1. Supportive care: rest, fluids, acetaminophen PRN for fever/myalgias\n2. Advised to reduce exercise intensity until symptoms resolve\n3. RTC if symptoms worsen or develop chest pain, SOB, or high fever"
    },
    {
      "id": "V002",
      "date": "08/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Patricia Gomez, MD",
      "cc": "Annual physical — sports clearance",
      "hpi": "25-year-old healthy male presenting for annual exam and sports physical clearance. Active runner training for multiple races. No complaints. Good exercise tolerance. Denies syncope, chest pain, palpitations, or dyspnea with exertion.",
      "exam": "General: Fit-appearing male, NAD. CV: RRR, no murmurs, S1/S2 normal, no S3/S4. Lungs: CTAB. MSK: Full ROM all extremities. Neuro: A&O x3, CN II-XII intact.",
      "assessment": "1. Annual wellness exam — healthy\n2. Sports clearance — approved",
      "plan": "1. Continue current medications\n2. Routine labs obtained\n3. RTC 1 year or PRN"
    },
    {
      "id": "V003",
      "date": "02/20/2024",
      "type": "Urgent Care",
      "provider": "Dr. Michael Tran, MD",
      "cc": "Ankle sprain — right",
      "hpi": "24-year-old male who twisted right ankle while trail running. Immediate swelling and difficulty bearing weight. No pop or snap. No prior ankle injuries.",
      "exam": "MSK: Right ankle with mild lateral swelling, TTP over ATFL. Negative Ottawa rules. Negative squeeze test. Full ROM with discomfort on inversion.",
      "assessment": "1. Right ankle sprain — Grade I lateral",
      "plan": "1. RICE protocol, ACE wrap, ibuprofen 400mg q6h PRN x 5 days; limit running x 2 weeks; RTC if not improving"
    }
  ],
  "labs": [
    {
      "date": "08/15/2024",
      "time": "09:00",
      "orderedBy": "Dr. Patricia Gomez, MD",
      "collected": "08/15/2024 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-582640",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (12 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "82", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "16", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "141", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.3", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "101", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "26", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.6", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "ALT (SGPT)", "value": "24", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "28", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.4", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.2", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "228", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "168", "unit": "mg/dL", "range": "<200", "flag": "" },
            { "test": "LDL Cholesterol", "value": "95", "unit": "mg/dL", "range": "<100", "flag": "" },
            { "test": "HDL Cholesterol", "value": "58", "unit": "mg/dL", "range": ">40", "flag": "" },
            { "test": "Triglycerides", "value": "76", "unit": "mg/dL", "range": "<150", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/10/2025",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2025-05826",
      "status": "FINAL",
      "orderedBy": "Dr. Patricia Gomez, MD",
      "readBy": "Dr. Lisa Moreno, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "25M with URI symptoms, cough. R/O pneumonia.",
      "technique": "PA and lateral views, upright, full inspiration.",
      "findings": "Heart: Normal size and configuration.\\n\\nMediastinum: Normal contours.\\n\\nLungs: Clear bilaterally. No focal consolidation, effusion, or pneumothorax.\\n\\nBones: No acute osseous abnormality.",
      "impression": "1. Normal chest radiograph.\\n2. No acute cardiopulmonary process.",
      "dictated": "01/10/2025 11:15",
      "verified": "01/10/2025 14:02"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "09/20/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-195",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2024-25)",
      "date": "10/05/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-762",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "HPV (Gardasil 9) — Series complete",
      "date": "2015",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal (Menactra)",
      "date": "2017",
      "site": "Right deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Mother: Hypertension, T2DM, alive at 52",
    "Father: Healthy, alive at 55",
    "Brother: Asthma, age 22",
    "Paternal uncle: Sudden cardiac death at age 42 (cause unknown)"
  ],
  "socialHistory": [
    ["Occupation", "IT support technician"],
    ["Marital", "Single"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Occasional, 2-3 drinks/week socially"],
    ["Drugs", "Denies"],
    ["Exercise", "Competitive recreational runner; trains 5-6x/week; half-marathon training"],
    ["Housing", "Lives alone in apartment"],
    ["Safety", "Denies concerns; wears seatbelt"],
    ["Advance Directive", "None"]
  ],
  "meta": {
    "caseId": "myocarditis",
    "diagnosis": "Acute Myocarditis",
    "acuity": 3,
    "presentation": "Chest Pain",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus Jean-Baptiste appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did chest pain start?",
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
        "onset": "'The symptoms started I've had this cold for about five days now - stuffy nose, scratchy throat, and t.'",
        "character": "'It's chest pain \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Acute Myocarditis.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Cetirizine 10mg daily; Albuterol 90mcg MDI PRN; Fluticasone nasal spray 50mcg.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Mother: Hypertension, T2DM, alive at 52  Father: Healthy, alive at 55  Brother: Asthma, age 22",
        "social": "Occupation: IT support technician  Marital: Single  Tobacco: Never smoker  Alcohol: Occasional, 2-3 drinks/week socially  Drugs: Denies"
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
        "General appearance and hemodynamic assessment": "Clinical finding consistent with Acute Myocarditis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Acute Myocarditis. Document specifically what you observe.",
        "Jugular venous pressure": "Clinical finding consistent with Acute Myocarditis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Acute Myocarditis. Document specifically what you observe.",
        "Peripheral pulses and perfusion": "Clinical finding consistent with Acute Myocarditis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Acute Myocarditis. Document specifically what you observe.",
        "Lower extremity edema": "Clinical finding consistent with Acute Myocarditis. Document specifically what you observe.",
        "Skin perfusion and temperature": "Clinical finding consistent with Acute Myocarditis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Acute Myocarditis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Acute Myocarditis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Acute Myocarditis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Acute Myocarditis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Marcus Jean-Baptiste's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Acute Myocarditis. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
