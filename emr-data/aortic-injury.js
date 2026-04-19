// Virtual EMR Case: Blunt Traumatic Aortic Injury
// Variant: aortic-injury | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Marcus Rivera",
  "patientHPI": "I'm here for my yearly check-up and feeling great overall. I've been keeping up with my cycling and weight training routine, and I haven't had any health issues or injuries lately. No complaints at all - just want to make sure everything looks good.",
    "dob": "03/22/1991",
    "age": 33,
    "sex": "Male",
    "mrn": "RDX-2025-61438",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Angela Morales, MD",
    "pharmacy": "CVS Pharmacy — 2201 S University Dr, Riverside, FL",
    "language": "English",
    "race": "Hispanic",
    "address": "1781 Birch Ln, Richmond, VA 23220",
    "phone": "(954) 555-6193",
    "email": "m.rivera91@email.com",
    "emergencyContact": {
      "name": "Sofia Rivera (Wife)",
      "phone": "(954) 555-6207"
    }
  },
  "problems": [
    {
      "problem": "No significant past medical history",
      "icd": "Z03.89",
      "onset": "2025",
      "status": "Active",
      "notes": "Healthy prior to trauma"
    },
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2015",
      "status": "Active",
      "notes": "Spring pollen"
    },
    {
      "problem": "Vitamin D Deficiency",
      "icd": "E55.9",
      "onset": "2023",
      "status": "Resolved",
      "notes": "Completed supplementation course"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily",
      "sig": "Take 1 tablet by mouth daily as needed for allergies",
      "prescriber": "Dr. Morales",
      "start": "03/2022",
      "refills": 5,
      "status": "PRN"
    },
    {
      "name": "Ibuprofen 400mg PRN",
      "sig": "Take 1 tablet by mouth every 6-8 hours as needed for pain",
      "prescriber": "Dr. Morales",
      "start": "01/2024",
      "refills": 2,
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
      "date": "01/10/2025",
      "bp": "124/78",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "185 lbs",
      "ht": "5'11\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    },
    {
      "date": "07/18/2024",
      "bp": "120/76",
      "hr": 68,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "183 lbs",
      "ht": "5'11\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    },
    {
      "date": "01/22/2024",
      "bp": "118/74",
      "hr": 70,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "98%",
      "wt": "180 lbs",
      "ht": "5'11\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Angela Morales, MD",
      "cc": "Annual physical exam",
      "hpi": "33-year-old male presenting for routine annual wellness exam. No active complaints. Reports regular exercise including cycling and weight training. Denies chest pain, shortness of breath, or recent illness.",
      "exam": "General: Well-appearing male in NAD. HEENT: PERRL, EOMI, oropharynx clear. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT/ND. Extremities: No edema. Neuro: A&O x3, cranial nerves intact.",
      "assessment": "1. Annual wellness exam — healthy male, no acute issues",
      "plan": "1. Age-appropriate screening current\n2. Continue exercise regimen\n3. RTC 1 year or PRN"
    },
    {
      "id": "V002",
      "date": "07/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Angela Morales, MD",
      "cc": "Follow-up: Vitamin D deficiency",
      "hpi": "33-year-old male follow-up after 12-week vitamin D supplementation course. Reports compliance with 50,000 IU weekly regimen. No musculoskeletal complaints. Feeling well overall.",
      "exam": "General: NAD. Vitals: WNL. MSK: Full ROM all extremities, no tenderness.",
      "assessment": "1. Vitamin D deficiency — resolved, levels normalized",
      "plan": "1. Discontinue high-dose supplementation\n2. OTC vitamin D3 2,000 IU daily for maintenance\n3. Recheck level at next annual"
    }
  ],
  "labs": [
    {
      "date": "01/10/2025",
      "time": "09:15",
      "orderedBy": "Dr. Angela Morales, MD",
      "collected": "01/10/2025 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-041289",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (12 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.1", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "102", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.6", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "ALT (SGPT)", "value": "22", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "20", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.1", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "245", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "188", "unit": "mg/dL", "range": "<200", "flag": "" },
            { "test": "LDL-C", "value": "110", "unit": "mg/dL", "range": "<130", "flag": "" },
            { "test": "HDL-C", "value": "52", "unit": "mg/dL", "range": ">40", "flag": "" },
            { "test": "Triglycerides", "value": "130", "unit": "mg/dL", "range": "<150", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/10/2025",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2025-01038",
      "status": "FINAL",
      "orderedBy": "Dr. Angela Morales, MD",
      "readBy": "Dr. Lisa Tran, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "33M annual physical. No acute complaints.",
      "technique": "PA and lateral views, upright, full inspiration.",
      "findings": "Heart: Normal size and silhouette.\\n\\nMediastinum: Normal width. No mediastinal widening.\\n\\nLungs: Clear bilaterally. No focal consolidation, pleural effusion, or pneumothorax.\\n\\nBones: No acute osseous abnormality.",
      "impression": "1. Normal chest radiograph.\\n2. No acute cardiopulmonary process.",
      "dictated": "01/10/2025 11:30",
      "verified": "01/10/2025 14:05"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-312",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/05/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-887",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "01/2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B (Recombivax)",
      "date": "2009",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Father: Hypertension, alive at 62",
    "Mother: Hyperlipidemia, alive at 58",
    "Paternal grandfather: MI at age 70 (deceased)",
    "Brother: No significant medical history, age 30"
  ],
  "socialHistory": [
    ["Occupation", "Construction project manager"],
    ["Marital", "Married"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 2-3 beers/week"],
    ["Drugs", "Denies"],
    ["Exercise", "Cycling and weight training 4x/week"],
    ["Housing", "Lives with wife and 2 children"],
    ["Safety", "Denies IPV; wears seatbelt; wears helmet cycling"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "aortic-injury",
    "diagnosis": "Blunt Traumatic Aortic Injury",
    "acuity": 1,
    "presentation": "Trauma",
    "category": "trauma"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus Rivera appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did trauma start?",
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
        "onset": "'The symptoms started I'm here for my yearly check-up and feeling great overall.'",
        "character": "'It's trauma \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Blunt Traumatic Aortic Injury.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Cetirizine 10mg daily; Ibuprofen 400mg PRN.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Father: Hypertension, alive at 62  Mother: Hyperlipidemia, alive at 58  Paternal grandfather: MI at age 70 (deceased)",
        "social": "Occupation: Construction project manager  Marital: Married  Tobacco: Never smoker  Alcohol: Social \u2014 2-3 beers/week  Drugs: Denies"
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
        "General appearance and level of distress": "Clinical finding consistent with Blunt Traumatic Aortic Injury. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Blunt Traumatic Aortic Injury. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Blunt Traumatic Aortic Injury. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Blunt Traumatic Aortic Injury. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Blunt Traumatic Aortic Injury. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Blunt Traumatic Aortic Injury. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Blunt Traumatic Aortic Injury. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Blunt Traumatic Aortic Injury. Document specifically what you observe."
    },
    "ddxTargets": [
        "Blunt Traumatic Aortic Injury (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Blunt Traumatic Aortic Injury, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Blunt Traumatic Aortic Injury, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Blunt Traumatic Aortic Injury based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Marcus Rivera's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Blunt Traumatic Aortic Injury. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
