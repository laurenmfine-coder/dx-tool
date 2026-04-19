// Virtual EMR Case: Acute Superior Mesenteric Artery Embolism
// Variant: acute-sma-embolism | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Dorothy Chambers",
  "patientHPI": "I'm worried about when I can start my blood thinner again after being in the hospital for bleeding in my stomach. The black stools stopped and my stomach feels better on these acid pills, but I'm nervous about my heart without the medication.",
    "dob": "12/28/1948",
    "age": 76,
    "sex": "Female",
    "mrn": "RDX-2025-83461",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + Aetna Medicare Supplement",
    "pcp": "Dr. William Carter, MD",
    "pharmacy": "Publix Pharmacy — 4000 N State Road 7, Lauderdale Lakes, FL",
    "language": "English",
    "race": "African American",
    "address": "8388 Daisy Ave, Memphis, TN 38107",
    "phone": "(954) 555-6042",
    "email": "d.chambers48@email.com",
    "emergencyContact": {
      "name": "Brenda Chambers-Lee (Daughter)",
      "phone": "(954) 555-6058"
    }
  },
  "problems": [
    {
      "problem": "Atrial Fibrillation, Persistent",
      "icd": "I48.1",
      "onset": "2017",
      "status": "Active",
      "notes": "CHA₂DS₂-VASc 6; on apixaban — recently hospitalized for GI bleed, anticoagulation held x 2 weeks"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "1998",
      "status": "Active",
      "notes": "On triple therapy"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2006",
      "status": "Active",
      "notes": "A1c 7.8%"
    },
    {
      "problem": "Heart Failure with Preserved EF (HFpEF)",
      "icd": "I50.32",
      "onset": "2019",
      "status": "Active",
      "notes": "LVEF 50-55%; NYHA Class II"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3b",
      "icd": "N18.32",
      "onset": "2020",
      "status": "Active",
      "notes": "eGFR 38"
    },
    {
      "problem": "Upper GI Hemorrhage, recent",
      "icd": "K92.0",
      "onset": "2025",
      "status": "Active",
      "notes": "Admitted 01/2025 for melena — EGD showed gastric erosions; anticoagulation held"
    }
  ],
  "medications": [
    {
      "name": "Apixaban 5mg BID",
      "sig": "Take 1 tablet by mouth twice daily — CURRENTLY HELD per GI",
      "prescriber": "Dr. Thomas",
      "start": "06/2017",
      "refills": 3,
      "status": "Discontinued"
    },
    {
      "name": "Metoprolol Succinate 50mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Thomas",
      "start": "06/2017",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Carter",
      "start": "03/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Losartan 100mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Carter",
      "start": "08/2010",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Chlorthalidone 12.5mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Carter",
      "start": "01/2015",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Carter",
      "start": "01/2007",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Pantoprazole 40mg BID",
      "sig": "Take 1 tablet by mouth twice daily before meals",
      "prescriber": "Dr. Singh",
      "start": "01/2025",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Carter",
      "start": "06/2010",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs (Trimethoprim-Sulfamethoxazole)",
      "type": "Drug",
      "reaction": "Maculopapular rash, fever",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/28/2025",
      "bp": "146/84",
      "hr": 88,
      "rr": 18,
      "temp": "98.2°F",
      "spo2": "95%",
      "wt": "178 lbs",
      "ht": "5'5\"",
      "bmi": 29.6,
      "setting": "PCP Office"
    },
    {
      "date": "11/18/2024",
      "bp": "140/80",
      "hr": 84,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "180 lbs",
      "ht": "5'5\"",
      "bmi": 30.0,
      "setting": "PCP Office"
    },
    {
      "date": "05/15/2024",
      "bp": "138/78",
      "hr": 80,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "96%",
      "wt": "182 lbs",
      "ht": "5'5\"",
      "bmi": 30.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/28/2025",
      "type": "Primary Care",
      "provider": "Dr. William Carter, MD",
      "cc": "Post-hospitalization follow-up: GI bleed; anticoagulation management",
      "hpi": "76-year-old female presenting 2 weeks after hospital discharge for upper GI hemorrhage (gastric erosions). Apixaban held during hospitalization and not yet restarted per GI recommendation — plan to reassess in 2 more weeks. Melena resolved. Currently on high-dose PPI BID. Patient expresses concern about being off anticoagulation given her AFib history. No recurrent GI bleeding. Reports vague postprandial abdominal discomfort since discharge, attributed to dietary changes. No chest pain, dyspnea worse than baseline, or neurologic symptoms.",
      "exam": "General: Elderly female, appears fatigued, NAD. CV: Irregularly irregular, rate 88; no murmurs. JVP normal. Lungs: CTAB, no crackles. Abdomen: Soft, mild diffuse tenderness without rebound or guarding. No hepatomegaly. Rectal: Heme-negative brown stool. Extremities: No edema. Neuro: A&O x3, no focal deficits.",
      "assessment": "1. Recent upper GI hemorrhage — resolving; anticoagulation held\n2. AFib — off anticoagulation x 2 weeks; embolic risk discussion\n3. HFpEF — stable\n4. CKD 3b — stable\n5. Postprandial abdominal discomfort — likely dietary/post-bleed; monitor",
      "plan": "1. Continue pantoprazole 40mg BID\n2. GI follow-up in 2 weeks to reassess anticoagulation restart\n3. Discussed embolic risk vs. bleeding risk with patient and family\n4. Continue metoprolol for rate control\n5. Recheck CBC and BMP today\n6. Bland diet; advance slowly\n7. RTC 2 weeks or sooner if symptoms worsen"
    },
    {
      "id": "V002",
      "date": "11/18/2024",
      "type": "Primary Care",
      "provider": "Dr. William Carter, MD",
      "cc": "Chronic disease management",
      "hpi": "76-year-old female for routine follow-up. AFib rate controlled on metoprolol and apixaban. HFpEF stable — NYHA II. T2DM — A1c 7.8%. CKD 3b — eGFR 38, stable. No new complaints. Compliance with all medications.",
      "exam": "General: NAD. CV: Irregularly irregular. Lungs: CTAB. Abdomen: Soft, NT. Extremities: Trace edema.",
      "assessment": "1. AFib — rate controlled, on anticoagulation\n2. Chronic conditions — stable",
      "plan": "1. Continue all medications\n2. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "01/28/2025",
      "time": "10:00",
      "orderedBy": "Dr. William Carter, MD",
      "collected": "01/28/2025 09:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-012856",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "142", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "34", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.8", "unit": "mg/dL", "range": "0.6-1.2", "flag": "H" },
            { "test": "eGFR", "value": "36", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.9", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "104", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "21", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "Calcium", "value": "8.8", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "ALT (SGPT)", "value": "20", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "24", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "8.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "9.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "29.4", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "Platelet Count", "value": "225", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/10/2025",
      "study": "EGD (ESOPHAGOGASTRODUODENOSCOPY)",
      "accession": "IMG-2025-01101",
      "status": "FINAL",
      "orderedBy": "Dr. Priya Singh, MD (Gastroenterology)",
      "readBy": "Dr. Priya Singh, MD (Gastroenterology)",
      "facility": "ReasonDx Medical Center Endoscopy",
      "priority": "STAT",
      "clinical": "76F melena, anemia, on anticoagulation. Evaluate upper GI source.",
      "technique": "Upper endoscopy with standard diagnostic gastroscope.",
      "findings": "Esophagus: Normal mucosa, no varices.\\n\\nStomach: Multiple antral erosions with adherent clot (Forrest IIb). No active bleeding. Gastric mucosa diffusely erythematous.\\n\\nDuodenum: Normal D1 and D2 mucosa.\\n\\nInterventions: Erosions treated with epinephrine injection and bipolar cautery to largest lesion.",
      "impression": "1. Gastric antral erosions with stigmata of recent hemorrhage.\\n2. No variceal disease.\\n3. Hemostasis achieved.",
      "dictated": "01/10/2025 16:00",
      "verified": "01/10/2025 18:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "09/30/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD192",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-910",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Prevnar 20 (PCV20)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "PV20-201",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "03/2020",
      "site": "Left deltoid IM",
      "lot": "SX20-088",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "06/2020",
      "site": "Left deltoid IM",
      "lot": "SX20-255",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Stroke at age 72 (deceased)",
    "Mother: HTN, CHF, deceased at 80",
    "Sister: Atrial fibrillation, DVT, alive at 74",
    "Brother: T2DM, CKD, alive at 70"
  ],
  "socialHistory": [
    ["Occupation", "Retired postal worker"],
    ["Marital", "Widowed (husband deceased 2016)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "None — lifelong abstainer"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 10 min daily; limited by fatigue and dyspnea"],
    ["Housing", "Lives alone; daughter lives nearby and assists with ADLs"],
    ["Safety", "Denies IPV; fall risk — uses cane; home safety assessment done"],
    ["Advance Directive", "Living will and HCP on file — daughter Brenda designated; Full code"]
  ],
  "meta": {
    "caseId": "acute-sma-embolism",
    "diagnosis": "Acute Superior Mesenteric Artery Embolism",
    "acuity": 1,
    "presentation": "Vascular Emergency",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Dorothy Chambers appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did vascular emergency start?",
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
        "onset": "'The symptoms started I'm worried about when I can start my blood thinner again after being in the hos.'",
        "character": "'It's vascular emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Acute Superior Mesenteric Artery Embolism.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Apixaban 5mg BID; Metoprolol Succinate 50mg daily; Amlodipine 10mg daily; Losartan 100mg daily; Chlorthalidone 12.5mg daily; Metformin 500mg BID; Pantoprazole 40mg BID; Atorvastatin 40mg QHS.'",
        "allergies": "'My allergies are Sulfa drugs (Trimethoprim-Sulfamethoxazole).'",
        "family": "Father: Stroke at age 72 (deceased)  Mother: HTN, CHF, deceased at 80  Sister: Atrial fibrillation, DVT, alive at 74",
        "social": "Occupation: Retired postal worker  Marital: Widowed (husband deceased 2016)  Tobacco: Never smoker  Alcohol: None \u2014 lifelong abstainer  Drugs: Denies"
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
        "General appearance and level of distress": "Clinical finding consistent with Acute Superior Mesenteric Artery Embolism. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Acute Superior Mesenteric Artery Embolism. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Acute Superior Mesenteric Artery Embolism. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Acute Superior Mesenteric Artery Embolism. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Acute Superior Mesenteric Artery Embolism. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Acute Superior Mesenteric Artery Embolism. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Acute Superior Mesenteric Artery Embolism. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Acute Superior Mesenteric Artery Embolism. Document specifically what you observe."
    },
    "ddxTargets": [
        "Acute Superior Mesenteric Artery Embolism (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Acute Superior Mesenteric Artery Embolism, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Acute Superior Mesenteric Artery Embolism, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Acute Superior Mesenteric Artery Embolism based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Dorothy Chambers's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Acute Superior Mesenteric Artery Embolism. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
