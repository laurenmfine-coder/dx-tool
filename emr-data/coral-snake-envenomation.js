// Virtual EMR Case: Coral Snake Envenomation
// Variant: coral-snake-envenomation | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Derek Sullivan",
  "patientHPI": "I'm here for my regular checkup and feeling great overall. I work outside doing landscaping here in South Florida every day, so I get plenty of exercise and fresh air. No complaints really - I take something over the counter for my allergies during pollen season and that keeps me comfortable.",
    "dob": "06/28/1985",
    "age": 39,
    "sex": "Male",
    "mrn": "RDX-2025-14735",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Natalie Ortiz, MD",
    "pharmacy": "CVS Pharmacy — 3900 SW 136th Ave, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "9727 Ash St, Denver, CO 80205",
    "phone": "(954) 555-6247",
    "email": "d.sullivan85@email.com",
    "emergencyContact": {
      "name": "Kelly Sullivan (Wife)",
      "phone": "(954) 555-6300"
    }
  },
  "problems": [
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2010",
      "status": "Active",
      "notes": "Spring/fall; OTC antihistamines"
    },
    {
      "problem": "Lumbar Strain, Recurrent",
      "icd": "S39.012A",
      "onset": "2022",
      "status": "Resolved",
      "notes": "Related to landscaping work; resolved with PT"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily",
      "sig": "Take 1 tablet by mouth once daily during allergy season",
      "prescriber": "Dr. Ortiz",
      "start": "03/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 400mg PRN",
      "sig": "Take 1 tablet by mouth every 6 hours as needed for pain with food",
      "prescriber": "Dr. Ortiz",
      "start": "06/2022",
      "refills": 1,
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
      "date": "10/15/2024",
      "bp": "122/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "192 lbs",
      "ht": "6'0\"",
      "bmi": 26.0,
      "setting": "PCP Office"
    },
    {
      "date": "04/08/2024",
      "bp": "118/74",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "190 lbs",
      "ht": "6'0\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    },
    {
      "date": "10/02/2023",
      "bp": "120/72",
      "hr": 70,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "188 lbs",
      "ht": "6'0\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Natalie Ortiz, MD",
      "cc": "Annual physical; allergy refills",
      "hpi": "39-year-old healthy male for annual wellness exam. No acute complaints. Works as a landscape contractor — outdoors daily in South Florida. Reports good exercise tolerance. Allergies managed with OTC cetirizine. No recent back pain. Up to date on tetanus.",
      "exam": "General: Well-appearing, fit male, NAD. HEENT: WNL. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT. MSK: Full ROM lumbar spine. Skin: Multiple healed insect bite scars on forearms; mild sun damage.",
      "assessment": "1. Annual wellness exam — healthy\n2. Occupational sun exposure — counseled on sunscreen and skin checks\n3. Allergic rhinitis — controlled",
      "plan": "1. Continue cetirizine PRN\n2. Dermatology referral for baseline skin check given occupational UV exposure\n3. Labs: CBC, CMP, lipid panel\n4. RTC 1 year or PRN"
    },
    {
      "id": "V002",
      "date": "04/08/2024",
      "type": "Urgent Care",
      "provider": "Dr. Michael Tran, MD",
      "cc": "Fire ant stings — bilateral feet",
      "hpi": "38-year-old male presenting after stepping on a fire ant mound while working. Multiple stings bilateral feet and ankles. Local swelling and pain. No systemic symptoms, no difficulty breathing, no hives beyond local area. Prior fire ant stings without anaphylaxis.",
      "exam": "Skin: Multiple erythematous papules and pustules bilateral dorsal feet and ankles. Local edema. No urticaria beyond sting sites. Lungs: CTAB. CV: RRR.",
      "assessment": "1. Fire ant envenomation — local reaction, no anaphylaxis",
      "plan": "1. Topical corticosteroid cream; oral antihistamine; ice; elevation\n2. Discussed carrying epinephrine if future reactions escalate\n3. RTC if systemic symptoms"
    }
  ],
  "labs": [
    {
      "date": "10/15/2024",
      "time": "09:30",
      "orderedBy": "Dr. Natalie Ortiz, MD",
      "collected": "10/15/2024 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-147350",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (12 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "86", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "141", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "102", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "26", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.6", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "ALT (SGPT)", "value": "22", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "24", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.0", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.6", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "46.4", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "236", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "188", "unit": "mg/dL", "range": "<200", "flag": "" },
            { "test": "LDL Cholesterol", "value": "108", "unit": "mg/dL", "range": "<130", "flag": "" },
            { "test": "HDL Cholesterol", "value": "52", "unit": "mg/dL", "range": ">40", "flag": "" },
            { "test": "Triglycerides", "value": "140", "unit": "mg/dL", "range": "<150", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "06/18/2022",
      "study": "MRI LUMBAR SPINE WITHOUT CONTRAST",
      "accession": "IMG-2022-14735",
      "status": "FINAL",
      "orderedBy": "Dr. Natalie Ortiz, MD",
      "readBy": "Dr. Robert Anderson, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "37M with recurrent lumbar strain, R/O disc pathology.",
      "technique": "MRI lumbar spine without contrast, sagittal and axial sequences.",
      "findings": "Vertebral bodies: Normal height and signal. No compression fractures.\\n\\nDiscs: Mild desiccation L4-L5 and L5-S1. Small broad-based disc bulge L5-S1 without canal stenosis or nerve root impingement.\\n\\nSpinal canal: Patent. Conus terminates at L1.\\n\\nParaspinal muscles: Mild bilateral paraspinal muscle edema — consistent with strain.",
      "impression": "1. Mild degenerative disc changes L4-L5 and L5-S1 without stenosis.\\n2. Small L5-S1 disc bulge — no nerve root compression.\\n3. Paraspinal muscle edema consistent with strain.",
      "dictated": "06/18/2022 15:00",
      "verified": "06/18/2022 17:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/15/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-318",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-828",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2022",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Hepatitis B — Series complete",
      "date": "2001",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Father: Hypertension, hyperlipidemia, alive at 66",
    "Mother: Healthy, alive at 64",
    "Brother: Healthy, age 36",
    "Paternal grandfather: Melanoma, deceased at 74"
  ],
  "socialHistory": [
    ["Occupation", "Landscape contractor — daily outdoor work in South Florida; frequent contact with vegetation and wildlife"],
    ["Marital", "Married — 12 years"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 3-4 beers on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Physically active at work; plays softball on weekends"],
    ["Housing", "Lives with wife and 2 children in single-family home on 2-acre lot"],
    ["Safety", "Wears gloves and boots at work; no seatbelt issues"],
    ["Advance Directive", "None"]
  ],
  "meta": {
    "caseId": "coral-snake-envenomation",
    "diagnosis": "Eastern Coral Snake Envenomation",
    "acuity": 2,
    "presentation": "Environmental Emergency",
    "category": "toxicologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Derek Sullivan is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did environmental emergency start?",
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
        "onset": "'The symptoms started I'm here for my regular checkup and feeling great overall.'",
        "character": "'It's environmental emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Eastern Coral Snake Envenomation.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Cetirizine 10mg daily; Ibuprofen 400mg PRN.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Father: Hypertension, hyperlipidemia, alive at 66  Mother: Healthy, alive at 64  Brother: Healthy, age 36",
        "social": "Occupation: Landscape contractor \u2014 daily outdoor work in South Florida; frequent contact with vegetation and wildlife  Marital: Married \u2014 12 years  Tobacco: Never smoker  Alcohol: Social \u2014 3-4 beers on weekends  Drugs: Denies"
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
        "General appearance and level of distress": "Clinical finding consistent with Eastern Coral Snake Envenomation. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Eastern Coral Snake Envenomation. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Eastern Coral Snake Envenomation. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Eastern Coral Snake Envenomation. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Eastern Coral Snake Envenomation. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Eastern Coral Snake Envenomation. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Eastern Coral Snake Envenomation. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Eastern Coral Snake Envenomation. Document specifically what you observe."
    },
    "ddxTargets": [
        "Eastern Coral Snake Envenomation (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Eastern Coral Snake Envenomation, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Eastern Coral Snake Envenomation, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Eastern Coral Snake Envenomation based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Derek Sullivan's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Eastern Coral Snake Envenomation. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
