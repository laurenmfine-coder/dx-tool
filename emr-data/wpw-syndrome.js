// Virtual EMR Case: Wolff-Parkinson-White (WPW) Syndrome with SVT
// Variant: wpw-syndrome | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Alejandro Vega",
  "patientHPI": "I've been having these episodes where my heart suddenly starts racing really fast, especially when I'm exercising, and they had me wear a heart monitor for a few days to see what's happening.",
    "dob": "09/26/1998",
    "age": 27,
    "sex": "Male",
    "mrn": "RDX-2025-42796",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO (employer)",
    "pcp": "Dr. James Weatherly, MD",
    "pharmacy": "Publix Pharmacy — 3100 Stirling Rd, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Venezuelan American)",
    "address": "7827 Elm St, Milwaukee, WI 53210",
    "phone": "(954) 555-8842",
    "email": "a.vega98@email.com",
    "emergencyContact": {
      "name": "Isabella Vega (Wife)",
      "phone": "(954) 555-8858"
    }
  },
  "problems": [
    {
      "problem": "Recurrent Palpitations — Under Investigation",
      "icd": "R00.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Intermittent episodes of rapid heart racing x 18 months; each lasts 5-15 minutes; self-terminates; associated with lightheadedness; 2-3 episodes/month; worse with caffeine and exercise; Holter 2024 showed brief runs of SVT; cardiology referral placed but patient lost to follow-up"
    },
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2012",
      "status": "Active",
      "notes": "Cetirizine PRN"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg PRN",
      "sig": "Take 1 tablet by mouth daily as needed for allergy symptoms",
      "prescriber": "Dr. Weatherly",
      "start": "04/2018",
      "refills": 5,
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
        "date": "02/27/2026",
        "bp": "94/58",
        "hr": 218,
        "rr": 22,
        "temp": "98.6\u00b0F",
        "spo2": "96%",
        "wt": "176 lbs",
        "ht": "5'10\"",
        "bmi": 25.3,
        "setting": "ED"
    },
    {
        "date": "06/12/2024",
        "bp": "122/76",
        "hr": 68,
        "rr": 16,
        "temp": "98.4\u00b0F",
        "spo2": "99%",
        "wt": "174 lbs",
        "ht": "5'10\"",
        "bmi": 25.0,
        "setting": "PCP Office"
    },
    {
        "date": "01/08/2024",
        "bp": "118/74",
        "hr": 72,
        "rr": 16,
        "temp": "98.6\u00b0F",
        "spo2": "99%",
        "wt": "172 lbs",
        "ht": "5'10\"",
        "bmi": 24.7,
        "setting": "PCP Office"
    }
],
  "visits": [
    {
      "id": "V001",
      "date": "06/12/2024",
      "type": "Primary Care",
      "provider": "Dr. James Weatherly, MD",
      "cc": "Palpitations follow-up, Holter results",
      "hpi": "26M returns to discuss Holter monitor results. Holter captured 2 brief runs of SVT (6-8 beats at ~180 bpm) during exercise, correlating with patient-reported palpitations. Resting ECG had shown possible short PR interval (110 ms) but was otherwise unremarkable. Episodes still occurring 2-3x/month — mostly during soccer games or when drinking energy drinks. Lasts 5-15 minutes then stops abruptly. During episodes, feels lightheaded but has not lost consciousness. No chest pain. No family history of sudden death (patient is unsure about extended family in Venezuela).",
      "exam": "NAD. Athletic build. CV: RRR, no murmurs. Rate 68. Lungs: CTAB. Neuro: Intact.",
      "assessment": "1. Recurrent SVT confirmed on Holter — short PR on resting ECG raises concern for accessory pathway (WPW vs other pre-excitation)\n2. Needs electrophysiology evaluation",
      "plan": "1. STAT cardiology/EP referral\n2. Avoid caffeine and energy drinks\n3. Vagal maneuvers taught (Valsalva, cold water immersion) for acute episodes\n4. DO NOT start AV nodal blockers (beta-blockers, CCBs, digoxin) empirically — could be dangerous if WPW with anterograde conduction\n5. If episode lasts >15-20 min or associated with LOC → call 911\n6. Return after cardiology visit"
    },
    {
      "id": "V002",
      "date": "01/08/2024",
      "type": "Primary Care",
      "provider": "Dr. James Weatherly, MD",
      "cc": "Palpitations — new onset",
      "hpi": "25M presents with 3-month history of episodic rapid heartbeat. Describes sudden onset racing heart during soccer practice — 'like a switch flipped.' Heart rate feels very fast (tried to count — estimates >150). Episodes last 5-15 minutes and stop abruptly. Has happened 6-7 times total. Notes lightheadedness during episodes. Denies chest pain, dyspnea. Drinks 2-3 energy drinks daily for work. No prior cardiac history.",
      "exam": "NAD. CV: RRR at 72, no murmurs. ECG: NSR, rate 72, short PR interval (110 ms), possible delta wave V1-V3 (subtle), QRS 106 ms.",
      "assessment": "1. Paroxysmal palpitations — likely SVT\n2. ECG shows short PR interval — possible pre-excitation (WPW pattern)",
      "plan": "1. Holter monitor x 48 hrs (exercise during monitoring encouraged)\n2. Reduce/eliminate energy drink consumption\n3. Basic labs: TSH, CMP, CBC, Mg\n4. If accessory pathway confirmed → cardiology/EP referral for ablation evaluation\n5. Return with Holter results"
    }
  ],
  "labs": [
    {
      "date": "01/08/2024",
      "time": "10:00",
      "orderedBy": "Dr. Weatherly",
      "collected": "01/08/2024 10:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-100108",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "16", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "142", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.4", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" },
            { "test": "Magnesium", "value": "2.0", "unit": "mg/dL", "range": "1.7-2.2", "flag": "" },
            { "test": "Calcium", "value": "9.6", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" }
          ]
        },
        {
          "name": "THYROID",
          "results": [
            { "test": "TSH", "value": "1.8", "unit": "mIU/L", "range": "0.4-4.0", "flag": "" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "7.0", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.4", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "46.2", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelets", "value": "228", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/08/2024",
      "study": "ELECTROCARDIOGRAM — 12-LEAD",
      "accession": "ECG-2024-010844",
      "status": "FINAL",
      "orderedBy": "Dr. Weatherly",
      "readBy": "Dr. Weatherly, MD",
      "facility": "ReasonDx Medical Center",
      "priority": "Routine",
      "clinical": "New onset palpitations — evaluate for arrhythmia substrate",
      "technique": "Standard 12-lead ECG at rest.",
      "findings": "Rate: 72 bpm. Rhythm: Normal sinus rhythm.\n\nIntervals: PR 110 ms (short), QRS 106 ms (mildly widened), QTc 420 ms.\n\nAxis: Normal.\n\nMorphology: Subtle slurring of upstroke of QRS in leads V1-V3 (delta wave pattern). Short PR interval with widened QRS — pre-excitation pattern. No ST-segment or T-wave abnormalities.",
      "impression": "1. Short PR interval (110 ms) with delta wave in V1-V3 — WPW pattern (Type A).\n2. Pre-excitation consistent with left-sided accessory pathway.\n3. Recommend EP study for risk stratification and ablation consideration.",
      "dictated": "01/08/2024 10:30",
      "verified": "01/08/2024 11:00"
    },
    {
      "date": "02/2024",
      "study": "48-HOUR HOLTER MONITOR",
      "accession": "HOL-2024-020822",
      "status": "FINAL",
      "orderedBy": "Dr. Weatherly",
      "readBy": "Dr. Weatherly, MD (with Cardiology overread)",
      "facility": "ReasonDx Medical Center",
      "priority": "Routine",
      "clinical": "Recurrent palpitations, WPW pattern on resting ECG",
      "technique": "Continuous 48-hour Holter monitoring.",
      "findings": "Dominant rhythm: Normal sinus rhythm. Mean HR 72 bpm. Min HR 48 bpm (sleep). Max HR 186 bpm.\n\nPre-excitation: Intermittent WPW pattern (delta waves present on ~60% of complexes; absent on others — suggests intermittent pre-excitation).\n\nArrhythmia events: Two runs of narrow-complex SVT (orthodromic AVRT pattern): Run 1 — 6 beats at 178 bpm (during soccer, per diary). Run 2 — 8 beats at 184 bpm (during soccer). Both self-terminated.\n\nPatient diary: Both runs correlated with reported palpitations ('heart racing, dizzy').\n\nNo wide-complex tachycardia (no antidromic AVRT or pre-excited AFib captured).",
      "impression": "1. Intermittent WPW pre-excitation pattern.\n2. Two brief runs of narrow-complex SVT consistent with orthodromic AVRT.\n3. Symptom-rhythm correlation confirmed.\n4. EP study recommended for pathway characterization and ablation.",
      "dictated": "02/10/2024 14:00",
      "verified": "02/10/2024 16:00"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-9340", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Pfizer)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-2240", "mfr": "Pfizer" },
    { "vaccine": "Tdap", "date": "06/2022", "site": "Left deltoid IM", "lot": "TD22-398", "mfr": "GSK" },
    { "vaccine": "HPV (Gardasil 9) — Series Complete", "date": "2018", "site": "Left deltoid IM", "lot": "HP18-312", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Father: Healthy, alive at 56 (in Venezuela — limited contact)",
    "Mother: Palpitations ('fast heartbeat' — never formally evaluated), alive at 54",
    "Brother: Healthy, alive at 30",
    "Extended family (paternal): Patient unsure — emigrated from Venezuela at age 10, limited family medical knowledge"
  ],
  "socialHistory": [
    ["Occupation", "Auto mechanic at dealership; full-time"],
    ["Marital", "Married 2 years; wife is 4 months pregnant (first child)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 2-3 beers on weekends; reduced since wife became pregnant"],
    ["Drugs", "Denies; former marijuana use in college (stopped 2022)"],
    ["Exercise", "Recreational soccer league 2x/week; weight training 3x/week — has been avoiding soccer since last prolonged palpitation episode"],
    ["Housing", "Apartment with wife"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "None — not discussed (age 27)"]
  ],
  "meta": {
    "caseId": "wpw-syndrome",
    "diagnosis": "WPW Syndrome (Wolff-Parkinson-White — Pre-Excited SVT Causing Syncope During Exercise, Left-Sided Accessory Pathway, Documented Orthodromic AVRT, Lost to Follow-Up Before EP Study/Ablation)",
    "acuity": 2,
    "presentation": "Syncope",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Alejandro Vega is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
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
        "onset": "'The symptoms started I've been having these episodes where my heart suddenly starts racing really fas.'",
        "character": "'It's syncope \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with WPW Syndrome.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Cetirizine 10mg PRN.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Father: Healthy, alive at 56 (in Venezuela \u2014 limited contact)  Mother: Palpitations ('fast heartbeat' \u2014 never formally evaluated), alive at 54  Brother: Healthy, alive at 30",
        "social": "Occupation: Auto mechanic at dealership; full-time  Marital: Married 2 years; wife is 4 months pregnant (first child)  Tobacco: Never smoker  Alcohol: Social \u2014 2-3 beers on weekends; reduced since wife became pregnant  Drugs: Denies; former marijuana use in college (stopped 2022)"
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
        "General appearance and hemodynamic assessment": "Clinical finding consistent with WPW Syndrome. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with WPW Syndrome. Document specifically what you observe.",
        "Jugular venous pressure": "Clinical finding consistent with WPW Syndrome. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with WPW Syndrome. Document specifically what you observe.",
        "Peripheral pulses and perfusion": "Clinical finding consistent with WPW Syndrome. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with WPW Syndrome. Document specifically what you observe.",
        "Lower extremity edema": "Clinical finding consistent with WPW Syndrome. Document specifically what you observe.",
        "Skin perfusion and temperature": "Clinical finding consistent with WPW Syndrome. Document specifically what you observe."
    },
    "ddxTargets": [
        "WPW Syndrome (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For WPW Syndrome, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying WPW Syndrome, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight WPW Syndrome based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Alejandro Vega's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is WPW Syndrome (Wolff-Parkinson-White \u2014 Pre-Excited SVT Causing Syncope During Exercise, Left-Sided Accessory Pathway, Documented Orthodromic AVRT, Lost to Follow-Up Before EP Study/Ablation). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
