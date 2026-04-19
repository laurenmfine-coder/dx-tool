// Virtual EMR Case: Community-Acquired Pneumonia
// Variant: pneumonia | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Marcus Williams",
    "patientHPI": "I'm here for my regular diabetes check-up and everything's been going pretty well with my medications. I do get up a couple times at night to use the bathroom, and I know I should quit smoking but it's been tough - still going through about a pack a day.",
    "dob": "03/22/1958",
    "age": 67,
    "sex": "Male",
    "mrn": "RDX-2025-41837",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B",
    "pcp": "Dr. Patricia Navarro, MD",
    "pharmacy": "Publix Pharmacy — 2501 University Dr, Riverside, FL",
    "language": "English",
    "race": "Black or African American",
    "address": "7687 Jasmine Way, Pittsburgh, PA 15210",
    "phone": "(954) 555-7293",
    "email": "m.williams58@email.com",
    "emergencyContact": {
      "name": "Denise Williams (Wife)",
      "phone": "(954) 555-7301"
    },
    "chiefComplaint": "Shortness of breath and cough"
  },
  "problems": [
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2012",
      "status": "Active",
      "notes": "A1c 7.8% at last check"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2008",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3a",
      "icd": "N18.31",
      "onset": "2020",
      "status": "Active",
      "notes": "Baseline Cr 1.4-1.6"
    },
    {
      "problem": "Tobacco Use Disorder",
      "icd": "F17.210",
      "onset": "1978",
      "status": "Active",
      "notes": "40 pack-year history, current smoker"
    },
    {
      "problem": "Benign Prostatic Hyperplasia",
      "icd": "N40.0",
      "onset": "2019",
      "status": "Active",
      "notes": ""
    }
  ],
  "medications": [
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Navarro",
      "start": "03/2013",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Navarro",
      "start": "06/2010",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Navarro",
      "start": "01/2022",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Tamsulosin 0.4mg QHS",
      "sig": "Take 1 capsule by mouth at bedtime",
      "prescriber": "Dr. Navarro",
      "start": "08/2019",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Navarro",
      "start": "02/2015",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa Drugs",
      "type": "Drug",
      "reaction": "Hives, facial swelling",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/20/2025",
      "bp": "142/88",
      "hr": 82,
      "rr": 18,
      "temp": "98.4°F",
      "spo2": "95%",
      "wt": "214 lbs",
      "ht": "5'11\"",
      "bmi": 29.8,
      "setting": "PCP Office"
    },
    {
      "date": "10/08/2024",
      "bp": "148/92",
      "hr": 78,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "96%",
      "wt": "218 lbs",
      "ht": "5'11\"",
      "bmi": 30.4,
      "setting": "PCP Office"
    },
    {
      "date": "07/15/2024",
      "bp": "138/84",
      "hr": 76,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "96%",
      "wt": "220 lbs",
      "ht": "5'11\"",
      "bmi": 30.7,
      "setting": "PCP Office"
    },
    {
      "date": "04/03/2024",
      "bp": "150/94",
      "hr": 80,
      "rr": 18,
      "temp": "98.8°F",
      "spo2": "95%",
      "wt": "222 lbs",
      "ht": "5'11\"",
      "bmi": 31,
      "setting": "Urgent Care"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Navarro, MD",
      "cc": "Diabetes follow-up",
      "hpi": "Mr. Williams presents for routine diabetes follow-up. Reports good medication compliance. Occasional nocturia x2-3 per night. Continues smoking approximately 1 pack per day despite counseling. Denies chest pain, dyspnea at rest.",
      "exam": "Alert, obese male. Lungs: scattered rhonchi bilaterally, clear with cough. CV: RRR, no murmurs. Ext: no edema. Feet: intact sensation, no ulcers.",
      "assessment": "1. T2DM — A1c 7.8%, above goal\n2. HTN — suboptimally controlled\n3. CKD 3a — stable\n4. Tobacco use disorder — active\n5. BPH — stable symptoms",
      "plan": "1. Increase metformin to 1000mg BID, recheck A1c in 3 months\n2. Continue current antihypertensives, dietary counseling\n3. Repeat BMP in 3 months for renal function\n4. Smoking cessation counseling — patient declines NRT at this time\n5. Continue tamsulosin"
    },
    {
      "id": "V002",
      "date": "04/03/2024",
      "type": "Urgent Care",
      "provider": "Dr. James Park, MD",
      "cc": "Upper respiratory infection",
      "hpi": "Patient presents with 5 days of nasal congestion, sore throat, and productive cough with yellow sputum. Low-grade fever to 100.2°F at home. No dyspnea, chest pain, or hemoptysis. History of smoking.",
      "exam": "Mildly ill-appearing. Oropharynx: mild erythema without exudate. TMs clear. Lungs: scattered rhonchi bilaterally, no wheezing or crackles. No respiratory distress.",
      "assessment": "1. Acute upper respiratory infection, likely viral",
      "plan": "1. Supportive care — fluids, rest\n2. Guaifenesin PRN for congestion\n3. Return if worsening dyspnea, high fever, or symptoms >10 days"
    },
    {
      "id": "V003",
      "date": "07/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Patricia Navarro, MD",
      "cc": "Routine follow-up",
      "hpi": "Returns for routine follow-up. Reports increased morning cough productive of white-gray sputum over the past several months, attributed to smoking. No weight loss, night sweats, or hemoptysis. Denies exertional dyspnea beyond his baseline.",
      "exam": "Lungs: diminished breath sounds at bases bilaterally, scattered rhonchi. CV: RRR. Ext: trace pedal edema bilaterally.",
      "assessment": "1. Chronic cough — likely smoking-related, consider spirometry\n2. T2DM — improving\n3. Mild peripheral edema — new finding, monitor",
      "plan": "1. Order spirometry to assess for COPD\n2. Continue smoking cessation counseling\n3. Recheck in 3 months, repeat labs"
    }
  ],
  "labs": [
    {
      "date": "01/20/2025",
      "time": "09:15 AM",
      "orderedBy": "Dr. Navarro",
      "collected": "01/20/2025 09:30 AM",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-041837",
      "status": "Final",
      "specimenType": "Serum/Plasma",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "162",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "28",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.5",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "eGFR",
              "value": "48",
              "unit": "mL/min/1.73m2",
              "range": ">60",
              "flag": "L"
            },
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "101",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2",
              "value": "24",
              "unit": "mEq/L",
              "range": "21-31",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.2",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "Total Protein",
              "value": "7.1",
              "unit": "g/dL",
              "range": "6.0-8.3",
              "flag": ""
            },
            {
              "test": "Albumin",
              "value": "3.8",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": ""
            },
            {
              "test": "AST",
              "value": "24",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            },
            {
              "test": "ALT",
              "value": "28",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "Alk Phos",
              "value": "78",
              "unit": "U/L",
              "range": "44-147",
              "flag": ""
            },
            {
              "test": "Total Bilirubin",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": ""
            }
          ]
        },
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            {
              "test": "Hemoglobin A1c",
              "value": "7.8",
              "unit": "%",
              "range": "<5.7",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/03/2024",
      "study": "CHEST X-RAY PA AND LATERAL",
      "accession": "IMG-2024-19274",
      "status": "FINAL",
      "orderedBy": "Dr. James Park, MD",
      "readBy": "Dr. Anita Sharma, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Cough, smoker, rule out infiltrate",
      "technique": "PA and lateral chest radiographs obtained.",
      "findings": "Heart size is at the upper limits of normal. Mediastinal contours are unremarkable. Lungs demonstrate mild hyperinflation with flattening of the diaphragms. No focal consolidation, effusion, or pneumothorax. Scattered calcified granulomas in the right upper lobe, likely sequelae of prior granulomatous disease. Mild degenerative changes of the thoracic spine.",
      "impression": "1. No acute cardiopulmonary disease.\n2. Mild hyperinflation suggesting chronic obstructive airway disease.\n3. Calcified granulomas, right upper lobe — benign, stable appearance.",
      "dictated": "04/03/2024 02:15 PM",
      "verified": "04/03/2024 04:30 PM"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluad Quadrivalent, 65+)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL9821A",
      "mfr": "Seqirus"
    },
    {
      "vaccine": "COVID-19 (Pfizer-BioNTech, Updated 2024-2025)",
      "date": "10/08/2024",
      "site": "Right deltoid IM",
      "lot": "GW1842",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "03/15/2022",
      "site": "Left deltoid IM",
      "lot": "AC14B108AB",
      "mfr": "GSK"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "01/20/2025",
      "site": "Right deltoid IM",
      "lot": "PV2025A",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (Dose 2 of 2)",
      "date": "06/10/2023",
      "site": "Left deltoid IM",
      "lot": "7SHXR01",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Lung cancer (diagnosed age 68, deceased age 71), COPD, HTN",
    "Mother: Type 2 diabetes, hypertension, alive age 88",
    "Brother: COPD, current smoker, age 70",
    "Sister: Healthy, age 62",
    "No family history of DVT/PE or bleeding disorders"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired warehouse supervisor (35 years). Occupational dust exposure."
    ],
    [
      "Marital",
      "Married, lives with wife"
    ],
    [
      "Tobacco",
      "Active smoker — 1 PPD x 40 years (40 pack-years). Multiple quit attempts, returns to smoking."
    ],
    [
      "Alcohol",
      "Social — 2-3 beers on weekends"
    ],
    [
      "Drugs",
      "Denies illicit drug use"
    ],
    [
      "Exercise",
      "Sedentary. Walks to mailbox. Limited by dyspnea on exertion."
    ],
    [
      "Housing",
      "Single-story home, Riverside, FL. Central A/C. No stairs."
    ],
    [
      "Safety",
      "Wears seatbelt. No firearms in home."
    ],
    [
      "Advance Directive",
      "Full code. No advance directive on file. Wife is healthcare proxy."
    ]
  ],
  "meta": {
    "caseId": "pneumonia",
    "diagnosis": "Community-Acquired Pneumonia",
    "acuity": 3,
    "presentation": "Shortness of Breath",
    "category": "pulmonary"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus Williams appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did shortness of breath start?",
      "Can you describe exactly how it started — sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history — any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle — work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "He pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "'The symptoms started I'm here for my regular diabetes check-up and everything's been going pretty wel.'",
      "character": "'It's shortness of breath — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Community-Acquired Pneumonia.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Metformin 1000mg BID; Lisinopril 20mg daily; Amlodipine 5mg daily; Tamsulosin 0.4mg QHS; Aspirin 81mg daily.'",
      "allergies": "'My allergies are Sulfa Drugs.'",
      "family": "Father: Lung cancer (diagnosed age 68, deceased age 71), COPD, HTN  Mother: Type 2 diabetes, hypertension, alive age 88  Brother: COPD, current smoker, age 70",
      "social": "Occupation: Retired warehouse supervisor (35 years). Occupational dust exposure.  Marital: Married, lives with wife  Tobacco: Active smoker — 1 PPD x 40 years (40 pack-years). Multiple quit attempts, returns to smoking.  Alcohol: Social — 2-3 beers on weekends  Drugs: Denies illicit drug use"
    },
    "examManeuvers": [
      "General appearance and respiratory effort",
      "Vital signs and pulse oximetry",
      "Pulmonary auscultation",
      "Percussion of lung fields",
      "Accessory muscle use",
      "Cardiovascular auscultation",
      "Lower extremity DVT assessment",
      "Tracheal position"
    ],
    "examFindings": {
      "General appearance and respiratory effort": "Clinical finding consistent with Community-Acquired Pneumonia. Document specifically what you observe.",
      "Vital signs and pulse oximetry": "Clinical finding consistent with Community-Acquired Pneumonia. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Community-Acquired Pneumonia. Document specifically what you observe.",
      "Percussion of lung fields": "Clinical finding consistent with Community-Acquired Pneumonia. Document specifically what you observe.",
      "Accessory muscle use": "Clinical finding consistent with Community-Acquired Pneumonia. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Community-Acquired Pneumonia. Document specifically what you observe.",
      "Lower extremity DVT assessment": "Clinical finding consistent with Community-Acquired Pneumonia. Document specifically what you observe.",
      "Tracheal position": "Clinical finding consistent with Community-Acquired Pneumonia. Document specifically what you observe."
    },
    "ddxTargets": [
      "Community-Acquired Pneumonia (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Community-Acquired Pneumonia, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Community-Acquired Pneumonia, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Community-Acquired Pneumonia based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Marcus Williams's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Community-Acquired Pneumonia. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
