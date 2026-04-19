
window.EMR_DATA = {
  "patient": {
    "name": "Claudia Reyes-Batista",
    "dob": "03/09/1978",
    "age": 47,
    "sex": "Female",
    "mrn": "RDX-2025-42572",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Patricia Morales, MD",
    "pharmacy": "Publix Pharmacy — 3100 Stirling Rd, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Dominican American)",
    "address": "5824 Plunkett St, Hollywood, FL 33023",
    "phone": "(954) 555-7720",
    "email": "c.reyesbatista@email.com",
    "emergencyContact": {
      "name": "Luis Batista (Husband)",
      "phone": "(954) 555-7738"
    }
  },
  "problems": [
    {
      "problem": "Left Tibial Plateau Fracture — Status Post ORIF",
      "icd": "S82.101A",
      "onset": "2026",
      "status": "Active",
      "notes": "Slip-and-fall at work 01/18/2026; ORIF performed 01/20/2026; non-weight-bearing in long leg cast x 6 weeks; due for cast removal 03/03/2026; VTE prophylaxis: enoxaparin 40mg SQ daily — patient reports inconsistent use due to injection site bruising"
    },
    {
      "problem": "Obesity, BMI 36.2",
      "icd": "E66.01",
      "onset": "2015",
      "status": "Active",
      "notes": "Class II obesity"
    },
    {
      "problem": "Oral Contraceptive Use",
      "icd": "Z79.3",
      "onset": "2020",
      "status": "Active",
      "notes": "Combined OCP (norgestimate-ethinyl estradiol); not stopped perioperatively — additional VTE risk factor"
    },
    {
      "problem": "Migraine Without Aura",
      "icd": "G43.009",
      "onset": "2008",
      "status": "Active",
      "notes": "On sumatriptan PRN; 2-3 episodes per month"
    }
  ],
  "medications": [
    {
      "name": "Enoxaparin 40mg SQ daily",
      "sig": "Inject 40 mg subcutaneously once daily for VTE prophylaxis",
      "prescriber": "Dr. Chen (Orthopedic Surgery)",
      "start": "01/2026",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Norgestimate-Ethinyl Estradiol (Sprintec) daily",
      "sig": "Take 1 tablet by mouth daily per pack directions",
      "prescriber": "Dr. Morales",
      "start": "03/2020",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Sumatriptan 50mg PRN",
      "sig": "Take 1 tablet by mouth at onset of migraine; may repeat once after 2 hours if needed",
      "prescriber": "Dr. Morales",
      "start": "06/2010",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Oxycodone 5mg PRN (post-surgical)",
      "sig": "Take 1 tablet by mouth every 6 hours as needed for severe pain",
      "prescriber": "Dr. Chen (Orthopedic Surgery)",
      "start": "01/2026",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Acetaminophen 500mg PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Morales",
      "start": "01/2026",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Ibuprofen",
      "type": "Drug",
      "reaction": "GI bleeding — melena episode requiring ER visit (2016)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "86/52",
      "hr": 128,
      "rr": 28,
      "temp": "98.8°F",
      "spo2": "88%",
      "wt": "208 lbs",
      "ht": "5'5\"",
      "bmi": 34.6,
      "setting": "ED"
    },
    {
      "date": "02/04/2026",
      "bp": "128/82",
      "hr": 78,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "212 lbs",
      "ht": "5'5\"",
      "bmi": 35.3,
      "setting": "Orthopedic Office"
    },
    {
      "date": "09/18/2025",
      "bp": "126/80",
      "hr": 74,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "214 lbs",
      "ht": "5'5\"",
      "bmi": 35.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/04/2026",
      "type": "Specialist",
      "provider": "Dr. David Chen, MD (Orthopedic Surgery)",
      "cc": "Post-op follow-up — left tibial plateau fracture ORIF, 2 weeks",
      "hpi": "47F presents 2 weeks post-ORIF left tibial plateau fracture. Wound healing well. Pain managed with oxycodone (using 1-2 tabs daily, down from 4/day week 1). Non-weight-bearing in long leg cast. Using wheelchair at home. Reports difficulty with enoxaparin self-injections — large bruises at injection sites; admits missing 3-4 doses in past week. OCP was not stopped prior to surgery (oversight in urgent surgical setting). Denies calf swelling, redness, or SOB.",
      "exam": "Surgical wound (lateral approach): Clean, dry, intact. Staples in place. No erythema, drainage, or dehiscence. Cast intact. Distal pulses palpable. Sensation intact toes. Toes warm, cap refill <2 sec.",
      "assessment": "1. Left tibial plateau fracture — 2 weeks post-ORIF, healing well\n2. VTE prophylaxis non-adherence — concerning given multiple risk factors (fracture, immobility, OCP, obesity)",
      "plan": "1. Staple removal at 3 weeks\n2. CRITICAL: Emphasized importance of enoxaparin adherence — patient has 4 major VTE risk factors (fracture/surgery, immobility, OCP, obesity)\n3. Discussed OCP — recommend stopping; switch to progesterone-only or non-hormonal method; patient to call OB/GYN\n4. Cast removal and transition to hinged brace at 6 weeks (03/03)\n5. Return 2 weeks"
    },
    {
      "id": "V002",
      "date": "09/18/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Morales, MD",
      "cc": "Annual wellness, migraine management",
      "hpi": "47F presents for annual exam. Migraines stable — 2-3/month, responsive to sumatriptan. On combined OCP for contraception and menstrual regulation. Weight stable at 214 lbs. Denies chest pain, dyspnea, or leg swelling.",
      "exam": "Obese female. CV: RRR, no murmurs. Lungs: CTAB. Ext: No edema. Neuro: Intact.",
      "assessment": "1. Migraine — stable\n2. Obesity — counseled on weight management\n3. OCP use — reviewed risk factors; patient declines change",
      "plan": "1. Continue current medications\n2. Labs: Lipid panel, CMP, CBC, A1c\n3. Return 1 year"
    }
  ],
  "labs": [
    {
      "date": "09/18/2025",
      "time": "09:00",
      "orderedBy": "Dr. Morales",
      "collected": "09/18/2025 09:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-800918",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "98", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "218", "unit": "mg/dL", "range": "<200", "flag": "H" },
            { "test": "LDL", "value": "138", "unit": "mg/dL", "range": "<100", "flag": "H" },
            { "test": "HDL", "value": "48", "unit": "mg/dL", "range": ">50", "flag": "L" },
            { "test": "Triglycerides", "value": "162", "unit": "mg/dL", "range": "<150", "flag": "H" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            { "test": "HbA1c", "value": "5.6", "unit": "%", "range": "<5.7", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/18/2026",
      "study": "X-RAY LEFT KNEE AND TIBIA 3-VIEW",
      "accession": "IMG-2026-011822",
      "status": "FINAL",
      "orderedBy": "Dr. Torres (ED)",
      "readBy": "Dr. Alan Wu, MD (Radiology)",
      "facility": "Memorial Regional Hospital — Hollywood, FL",
      "priority": "STAT",
      "clinical": "Fall with left knee pain, inability to bear weight",
      "technique": "AP, lateral, and oblique views of the left knee and proximal tibia.",
      "findings": "Comminuted fracture of the lateral tibial plateau (Schatzker Type II) with 6mm articular depression. No associated fibular fracture. Moderate joint effusion (lipohemarthrosis on cross-table lateral). No distal tibial or femoral fractures.",
      "impression": "1. Schatzker Type II lateral tibial plateau fracture with 6mm depression — surgical candidate.\n2. Lipohemarthrosis consistent with intra-articular fracture.",
      "dictated": "01/18/2026 19:30",
      "verified": "01/18/2026 20:00"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-9224", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Moderna)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-2340", "mfr": "Moderna" },
    { "vaccine": "Tdap", "date": "07/2022", "site": "Left deltoid IM", "lot": "TD22-488", "mfr": "GSK" },
    { "vaccine": "HPV (Gardasil 9) — Series Complete", "date": "2020", "site": "Left deltoid IM", "lot": "HP20-508", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Mother: DVT after hip replacement at age 62, HTN, alive at 72",
    "Father: T2DM, CAD — MI at 58, alive at 74",
    "Sister: Factor V Leiden heterozygous (diagnosed after DVT during pregnancy), alive at 50",
    "Brother: Healthy, alive at 44"
  ],
  "socialHistory": [
    ["Occupation", "Warehouse supervisor at distribution center — on workers' comp leave since fracture"],
    ["Marital", "Married 18 years; 2 children (ages 12 and 15)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 1-2 drinks on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Previously walked 30 min daily; currently immobile in wheelchair since fracture"],
    ["Housing", "Single-family home with husband and children; bedroom upstairs — sleeping on couch since fracture"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "pulmonary-embolism-syncope",
    "diagnosis": "Massive Pulmonary Embolism with Syncope (Post-Orthopedic Surgery DVT — Tibial Plateau ORIF with Non-Adherence to VTE Prophylaxis, Active Combined OCP, Obesity, Family History of VTE/Factor V Leiden)",
    "acuity": 1,
    "presentation": "Syncope",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Claudia Reyes-Batista appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
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
        "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started 47F presents 2 weeks post-ORIF left tibial plateau fracture.'",
        "character": "'It's syncope \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Massive Pulmonary Embolism with Syncope.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Enoxaparin 40mg SQ daily; Norgestimate-Ethinyl Estradiol (Sprintec) daily; Sumatriptan 50mg PRN; Oxycodone 5mg PRN (post-surgical); Acetaminophen 500mg PRN.'",
        "allergies": "'My allergies are Ibuprofen.'",
        "family": "Mother: DVT after hip replacement at age 62, HTN, alive at 72  Father: T2DM, CAD \u2014 MI at 58, alive at 74  Sister: Factor V Leiden heterozygous (diagnosed after DVT during pregnancy), alive at 50",
        "social": "Occupation: Warehouse supervisor at distribution center \u2014 on workers' comp leave since fracture  Marital: Married 18 years; 2 children (ages 12 and 15)  Tobacco: Never smoker  Alcohol: Social \u2014 1-2 drinks on weekends  Drugs: Denies"
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
        "General appearance and hemodynamic assessment": "Clinical finding consistent with Massive Pulmonary Embolism with Syncope. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Massive Pulmonary Embolism with Syncope. Document specifically what you observe.",
        "Jugular venous pressure": "Clinical finding consistent with Massive Pulmonary Embolism with Syncope. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Massive Pulmonary Embolism with Syncope. Document specifically what you observe.",
        "Peripheral pulses and perfusion": "Clinical finding consistent with Massive Pulmonary Embolism with Syncope. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Massive Pulmonary Embolism with Syncope. Document specifically what you observe.",
        "Lower extremity edema": "Clinical finding consistent with Massive Pulmonary Embolism with Syncope. Document specifically what you observe.",
        "Skin perfusion and temperature": "Clinical finding consistent with Massive Pulmonary Embolism with Syncope. Document specifically what you observe."
    },
    "ddxTargets": [
        "Massive Pulmonary Embolism with Syncope (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Massive Pulmonary Embolism with Syncope, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Massive Pulmonary Embolism with Syncope, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Massive Pulmonary Embolism with Syncope based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Claudia Reyes-Batista's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Massive Pulmonary Embolism with Syncope (Post-Orthopedic Surgery DVT \u2014 Tibial Plateau ORIF with Non-Adherence to VTE Prophylaxis, Active Combined OCP, Obesity, Family History of VTE/Factor V Leiden). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};