// Virtual EMR Case: Aortic Aneurysm (Symptomatic AAA)
// Variant: aortic-aneurysm | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Frank DiMaggio",
  "patientHPI": "I've been having this dull ache in my lower back for the past few weeks that sometimes spreads around to my left side. It's not like I pulled something or hurt myself - it just started happening and comes and goes throughout the day. I've also been feeling more tired than usual lately, which isn't like me.",
    "dob": "11/20/1952",
    "age": 73,
    "sex": "Male",
    "mrn": "RDX-2025-68241",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B with BlueCross BlueShield Supplement",
    "pcp": "Dr. David Tanaka, MD",
    "pharmacy": "Publix Pharmacy — 4651 SW 64th Ave, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "4828 N Kedzie Blvd, Richmond, VA 23225",
    "phone": "(954) 555-3618",
    "email": "f.dimaggio52@email.com",
    "emergencyContact": {
      "name": "Maria DiMaggio (Wife)",
      "phone": "(954) 555-3632"
    }
  },
  "problems": [
    {
      "problem": "Abdominal Aortic Aneurysm",
      "icd": "I71.4",
      "onset": "2021",
      "status": "Active",
      "notes": "Infrarenal AAA; 5.2 cm on last CTA (09/2025); growth rate 0.4 cm/year; vascular surgery consultation — EVAR planned"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2002",
      "status": "Active",
      "notes": "Controlled on dual therapy"
    },
    {
      "problem": "Coronary Artery Disease",
      "icd": "I25.10",
      "onset": "2015",
      "status": "Active",
      "notes": "PCI with DES to LAD (2015); stress test 2024 negative for ischemia"
    },
    {
      "problem": "Peripheral Artery Disease",
      "icd": "I73.9",
      "onset": "2019",
      "status": "Active",
      "notes": "ABI 0.72 left, 0.78 right; claudication at 2 blocks"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2005",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Tobacco Use Disorder, Former",
      "icd": "Z87.891",
      "onset": "1970",
      "status": "Resolved",
      "notes": "Quit 2016; 45 pack-year history"
    }
  ],
  "medications": [
    {
      "name": "Metoprolol Succinate 50mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "06/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Tanaka",
      "start": "04/2003",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 80mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Singh",
      "start": "06/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "06/2015",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "Clopidogrel 75mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "06/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Cilostazol 100mg BID",
      "sig": "Take 1 tablet by mouth twice daily 30 minutes before or 2 hours after meals",
      "prescriber": "Dr. Martinez",
      "start": "08/2020",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Iodinated Contrast Dye",
      "type": "Drug",
      "reaction": "Hives, pruritus (premedication protocol with steroids/antihistamines used for CT)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/06/2026",
      "bp": "138/82",
      "hr": 64,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "174 lbs",
      "ht": "5'9\"",
      "bmi": 25.7,
      "setting": "Specialist"
    },
    {
      "date": "09/22/2025",
      "bp": "142/86",
      "hr": 66,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "176 lbs",
      "ht": "5'9\"",
      "bmi": 26.0,
      "setting": "Specialist"
    },
    {
      "date": "03/15/2025",
      "bp": "136/80",
      "hr": 62,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "178 lbs",
      "ht": "5'9\"",
      "bmi": 26.3,
      "setting": "PCP Office"
    },
    {
      "date": "09/10/2024",
      "bp": "140/84",
      "hr": 66,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "176 lbs",
      "ht": "5'9\"",
      "bmi": 26.0,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/06/2026",
      "type": "Specialist",
      "provider": "Dr. Luis Martinez, MD (Vascular Surgery)",
      "cc": "AAA surveillance; preoperative evaluation",
      "hpi": "73-year-old male with known infrarenal AAA (5.2 cm, 09/2025) presenting for preoperative evaluation for elective EVAR. Reports new onset dull lower back pain over past 3 weeks — intermittent, not positional, radiates to left flank. Denies trauma. Reports increased fatigue. AAA growth rate 0.4 cm/year; meets criteria for repair. PAD stable — claudication at 2 blocks. CAD stable — no angina. Stress test (2024) negative.",
      "exam": "General: NAD. CV: RRR, no murmurs. Abdomen: Pulsatile mass palpable periumbilical region, non-tender. Peripheral pulses: Diminished bilateral dorsalis pedis. ABI: 0.72 left, 0.78 right. Neuro: Grossly intact.",
      "assessment": "1. AAA 5.2 cm — meets criteria for EVAR; new back pain concerning for symptomatic expansion\n2. PAD — stable\n3. CAD — stable; cardiac clearance needed\n4. New back pain — warrants urgent repeat imaging",
      "plan": "1. Urgent CTA abdomen/pelvis to reassess AAA size and morphology\n2. If stable, proceed with EVAR scheduling within 2-4 weeks\n3. If expansion or concerning features, emergent repair\n4. Cardiac clearance from Dr. Singh\n5. Premedication protocol for contrast allergy\n6. Continue all medications through surgery"
    },
    {
      "id": "V002",
      "date": "09/22/2025",
      "type": "Specialist",
      "provider": "Dr. Luis Martinez, MD (Vascular Surgery)",
      "cc": "AAA surveillance",
      "hpi": "73-year-old male for routine AAA surveillance. CTA today shows infrarenal AAA at 5.2 cm, increased from 4.8 cm (03/2025). Growth rate exceeds 0.5 cm in 6 months. No symptoms — no back pain, no abdominal pain, hemodynamically stable. Decision made to offer elective EVAR.",
      "exam": "General: NAD. Abdomen: Pulsatile mass, non-tender. Peripheral pulses: Diminished bilaterally.",
      "assessment": "1. Infrarenal AAA 5.2 cm — rapid growth; recommend EVAR\n2. PAD — stable",
      "plan": "1. Discuss EVAR risks/benefits — patient agrees to proceed\n2. Schedule preop workup\n3. RTC 6 weeks for preop evaluation"
    },
    {
      "id": "V003",
      "date": "03/15/2025",
      "type": "Primary Care",
      "provider": "Dr. David Tanaka, MD",
      "cc": "Chronic disease follow-up",
      "hpi": "73-year-old male for routine follow-up. BP controlled. CAD stable on medical therapy. PAD symptoms stable — claudication at 2 blocks, improved with cilostazol. AAA under surveillance. No new complaints. Former smoker — quit 9 years ago. Lipids at goal.",
      "exam": "General: NAD. CV: RRR. Lungs: CTAB. Abdomen: Soft; pulsatile mass noted. Extremities: Diminished pedal pulses.",
      "assessment": "1. HTN — controlled\n2. CAD — stable\n3. PAD — stable on cilostazol\n4. AAA — under vascular surgery surveillance",
      "plan": "1. Continue all medications\n2. Labs: BMP, CBC, lipid panel\n3. Vascular surgery follow-up per protocol\n4. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "01/06/2026",
      "time": "08:45",
      "orderedBy": "Dr. Luis Martinez, MD",
      "collected": "01/06/2026 08:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-010635",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "96", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "20", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.2", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "102", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.2", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.6", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "40.8", "unit": "%", "range": "38.0-50.0", "flag": "" },
            { "test": "Platelet Count", "value": "192", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            { "test": "PT", "value": "12.4", "unit": "sec", "range": "11.0-13.5", "flag": "" },
            { "test": "INR", "value": "1.0", "unit": "", "range": "0.8-1.1", "flag": "" },
            { "test": "PTT", "value": "30", "unit": "sec", "range": "25-35", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "09/22/2025",
      "study": "CT ANGIOGRAM ABDOMEN AND PELVIS (AORTA PROTOCOL)",
      "accession": "IMG-2025-09225",
      "status": "FINAL",
      "orderedBy": "Dr. Luis Martinez, MD",
      "readBy": "Dr. Elena Suarez, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "73M with known AAA, surveillance. Premedicated for contrast allergy.",
      "technique": "CT angiogram of the abdomen and pelvis with IV contrast, arterial and delayed phases. Premedication: prednisone 50mg PO at 13h, 7h, and 1h prior + diphenhydramine 50mg IV 1h prior.",
      "findings": "Infrarenal abdominal aorta: Fusiform aneurysm measuring 5.2 cm in maximal AP diameter (increased from 4.8 cm on 03/2025). Begins 2.5 cm below the lowest renal artery. Length approximately 7 cm. Infrarenal neck 2.0 cm, diameter 24 mm — suitable for EVAR.\\n\\nMural thrombus: Eccentric, up to 1.5 cm thickness along the anterior wall.\\n\\nIliac arteries: Right common iliac 1.6 cm (mildly ectatic). Left common iliac 1.4 cm (normal). No iliac aneurysm.\\n\\nRenal arteries: Patent bilaterally.\\n\\nSMA/celiac: Patent.\\n\\nNo retroperitoneal hematoma or contained leak.",
      "impression": "1. Infrarenal AAA measuring 5.2 cm — increased from 4.8 cm (6-month interval). Growth rate exceeds expected, concerning for instability.\\n2. Infrarenal neck anatomy suitable for EVAR.\\n3. No evidence of rupture or contained leak.\\n4. Eccentric mural thrombus.\\n5. Mild right common iliac ectasia.",
      "dictated": "09/22/2025 14:30",
      "verified": "09/22/2025 16:50"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "09/18/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-HD260",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2025-26)",
      "date": "10/08/2025",
      "site": "Right deltoid IM",
      "lot": "CM2025-638",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "01/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-062",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "06/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-382",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-506",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: AAA (ruptured at age 72, deceased), HTN",
    "Mother: Stroke at 78, HTN, deceased at 82",
    "Brother: Peripheral artery disease, alive at 70",
    "Sister: HTN, alive at 68"
  ],
  "socialHistory": [
    ["Occupation", "Retired postal carrier; retired 2017"],
    ["Marital", "Married 48 years; wife Maria, age 71"],
    ["Tobacco", "Former smoker — quit 2016; 45 pack-year history"],
    ["Alcohol", "Occasional, 1 glass wine with dinner"],
    ["Drugs", "Denies"],
    ["Exercise", "Walks 20 min daily; limited by claudication at 2 blocks"],
    ["Housing", "Single-family home with wife; single-story"],
    ["Safety", "Denies IPV; seatbelt always"],
    ["Advance Directive", "POLST on file — Full Code; HCP: wife Maria DiMaggio"]
  ],
  "meta": {
    "caseId": "aortic-aneurysm",
    "diagnosis": "Symptomatic Abdominal Aortic Aneurysm",
    "acuity": 2,
    "presentation": "Back Pain",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Frank DiMaggio is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did back pain start?",
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
        "onset": "'The symptoms started I've been having this dull ache in my lower back for the past few weeks that som.'",
        "character": "'It's back pain \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Symptomatic Abdominal Aortic Aneurysm.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Metoprolol Succinate 50mg daily; Lisinopril 20mg daily; Atorvastatin 80mg QHS; Aspirin 81mg daily; Clopidogrel 75mg daily; Cilostazol 100mg BID.'",
        "allergies": "'My allergies are Iodinated Contrast Dye.'",
        "family": "Father: AAA (ruptured at age 72, deceased), HTN  Mother: Stroke at 78, HTN, deceased at 82  Brother: Peripheral artery disease, alive at 70",
        "social": "Occupation: Retired postal carrier; retired 2017  Marital: Married 48 years; wife Maria, age 71  Tobacco: Former smoker \u2014 quit 2016; 45 pack-year history  Alcohol: Occasional, 1 glass wine with dinner  Drugs: Denies"
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
        "General appearance and hemodynamic assessment": "Clinical finding consistent with Symptomatic Abdominal Aortic Aneurysm. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Symptomatic Abdominal Aortic Aneurysm. Document specifically what you observe.",
        "Jugular venous pressure": "Clinical finding consistent with Symptomatic Abdominal Aortic Aneurysm. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Symptomatic Abdominal Aortic Aneurysm. Document specifically what you observe.",
        "Peripheral pulses and perfusion": "Clinical finding consistent with Symptomatic Abdominal Aortic Aneurysm. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Symptomatic Abdominal Aortic Aneurysm. Document specifically what you observe.",
        "Lower extremity edema": "Clinical finding consistent with Symptomatic Abdominal Aortic Aneurysm. Document specifically what you observe.",
        "Skin perfusion and temperature": "Clinical finding consistent with Symptomatic Abdominal Aortic Aneurysm. Document specifically what you observe."
    },
    "ddxTargets": [
        "Symptomatic Abdominal Aortic Aneurysm (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Symptomatic Abdominal Aortic Aneurysm, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Symptomatic Abdominal Aortic Aneurysm, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Symptomatic Abdominal Aortic Aneurysm based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Frank DiMaggio's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Symptomatic Abdominal Aortic Aneurysm. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
