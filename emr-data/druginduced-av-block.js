// Virtual EMR Case: Drug-Induced AV Block
// Variant: druginduced-av-block | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Miriam Goldstein",
  "patientHPI": "I've been managing my heart rhythm problems pretty well - I can still do my housework and walk a few blocks without too much trouble. Lately though, I've been feeling more tired than usual and sometimes dizzy, especially when I stand up quickly.",
    "dob": "06/30/1948",
    "age": 77,
    "sex": "Female",
    "mrn": "RDX-2025-54382",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B with Aetna Supplement",
    "pcp": "Dr. Patricia Coleman, MD",
    "pharmacy": "CVS Pharmacy — 5200 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "6553 Clover St, San Antonio, TX 78207",
    "phone": "(954) 555-6148",
    "email": "m.goldstein48@email.com",
    "emergencyContact": {
      "name": "Rebecca Stein (Daughter)",
      "phone": "(954) 555-6162"
    }
  },
  "problems": [
    {
      "problem": "Atrial Fibrillation, Persistent",
      "icd": "I48.1",
      "onset": "2018",
      "status": "Active",
      "notes": "Rate-controlled strategy; on diltiazem + digoxin; CHA2DS2-VASc 4"
    },
    {
      "problem": "Heart Failure with Preserved Ejection Fraction",
      "icd": "I50.32",
      "onset": "2020",
      "status": "Active",
      "notes": "EF 55%; diastolic dysfunction; NYHA Class II"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3b",
      "icd": "N18.32",
      "onset": "2021",
      "status": "Active",
      "notes": "eGFR 36; important — affects digoxin clearance"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2000",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Hypothyroidism",
      "icd": "E03.9",
      "onset": "2012",
      "status": "Active",
      "notes": "Can affect digoxin sensitivity"
    },
    {
      "problem": "Osteoarthritis, Bilateral Hands",
      "icd": "M19.049",
      "onset": "2015",
      "status": "Active",
      "notes": ""
    }
  ],
  "medications": [
    {
      "name": "Diltiazem ER 240mg daily",
      "sig": "Take 1 capsule by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "10/2018",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Digoxin 0.25mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "04/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Apixaban 5mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Singh",
      "start": "10/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Furosemide 20mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Singh",
      "start": "06/2020",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Levothyroxine 75mcg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach",
      "prescriber": "Dr. Coleman",
      "start": "08/2013",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg q6h PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Coleman",
      "start": "03/2016",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Amiodarone",
      "type": "Drug",
      "reaction": "Thyroid toxicity (amiodarone-induced thyrotoxicosis, 2017)",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Sulfa Drugs",
      "type": "Drug",
      "reaction": "Urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/22/2026",
      "bp": "96/58",
      "hr": 38,
      "rr": 18,
      "temp": "97.8°F",
      "spo2": "94%",
      "wt": "152 lbs",
      "ht": "5'4\"",
      "bmi": 26.1,
      "setting": "ED"
    },
    {
      "date": "11/18/2025",
      "bp": "128/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "154 lbs",
      "ht": "5'4\"",
      "bmi": 26.4,
      "setting": "Specialist"
    },
    {
      "date": "05/20/2025",
      "bp": "132/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "156 lbs",
      "ht": "5'4\"",
      "bmi": 26.8,
      "setting": "PCP Office"
    },
    {
      "date": "11/12/2024",
      "bp": "130/74",
      "hr": 70,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "154 lbs",
      "ht": "5'4\"",
      "bmi": 26.4,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/18/2025",
      "type": "Specialist",
      "provider": "Dr. Rajiv Singh, MD (Cardiology)",
      "cc": "AFib rate control; HFpEF management",
      "hpi": "77-year-old female with persistent AFib and HFpEF for follow-up. Reports good rate control — no palpitations. Mild exertional dyspnea (NYHA II), stable. Able to do housework and walk 3 blocks. Weight stable. No edema. Digoxin level last checked 06/2025 was 1.0 ng/mL (therapeutic). Renal function trending downward — eGFR 36 from 42 prior year. Discussed reducing digoxin dose given declining eGFR but patient stable, so continued with close monitoring.",
      "exam": "General: NAD. CV: Irregularly irregular (AFib), rate 68. No S3. Lungs: Clear. Extremities: No edema.",
      "assessment": "1. Persistent AFib — rate controlled on diltiazem + digoxin\n2. HFpEF — stable, NYHA II\n3. CKD 3b — eGFR 36; declining; affects digoxin clearance\n4. Anticoagulation — therapeutic on apixaban",
      "plan": "1. Continue current regimen\n2. Recheck digoxin level and BMP in 3 months — consider dose reduction if eGFR declines further\n3. TSH at next visit\n4. Echo in 12 months\n5. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "05/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Coleman, MD",
      "cc": "Chronic disease follow-up",
      "hpi": "77-year-old female for routine follow-up. Cardiac symptoms stable. Mild joint pain in hands. Thyroid stable — TSH 2.8 last check. CKD monitored. Reports no dizziness, no falls.",
      "exam": "General: NAD. CV: Irregularly irregular. Lungs: CTAB. Hands: Heberden and Bouchard nodes bilaterally. No synovitis.",
      "assessment": "1. HTN — controlled\n2. Hypothyroidism — stable\n3. OA hands — stable\n4. CKD 3b — monitoring",
      "plan": "1. Continue medications\n2. Labs: BMP, TSH, digoxin level\n3. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "02/22/2026",
      "time": "10:15",
      "orderedBy": "Dr. James Park, MD (ED)",
      "collected": "02/22/2026 09:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-022248",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "94", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "38", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "2.2", "unit": "mg/dL", "range": "0.6-1.2", "flag": "H" },
            { "test": "eGFR", "value": "22", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
            { "test": "Sodium", "value": "134", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "5.6", "unit": "mEq/L", "range": "3.5-5.0", "flag": "H" },
            { "test": "Magnesium", "value": "1.4", "unit": "mg/dL", "range": "1.7-2.2", "flag": "L" },
            { "test": "Calcium", "value": "10.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" }
          ]
        },
        {
          "name": "DIGOXIN LEVEL",
          "results": [
            { "test": "Digoxin", "value": "3.2", "unit": "ng/mL", "range": "0.8-2.0 therapeutic", "flag": "H" }
          ]
        },
        {
          "name": "CARDIAC MARKERS",
          "results": [
            { "test": "Troponin I", "value": "0.02", "unit": "ng/mL", "range": "<0.04", "flag": "" },
            { "test": "BNP", "value": "420", "unit": "pg/mL", "range": "<100", "flag": "H" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "5.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "11.2", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "33.6", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "Platelet Count", "value": "204", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/12/2024",
      "study": "TRANSTHORACIC ECHOCARDIOGRAM",
      "accession": "IMG-2024-11125",
      "status": "FINAL",
      "orderedBy": "Dr. Rajiv Singh, MD",
      "readBy": "Dr. Rajiv Singh, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "77F with persistent AFib, HFpEF. Annual echo.",
      "technique": "2D and Doppler transthoracic echocardiography.",
      "findings": "Left ventricle: Normal cavity size. Concentric LVH. EF 55% by biplane Simpson's. Grade II diastolic dysfunction (E/A reversal, elevated E/e' ratio 14).\\n\\nLeft atrium: Moderately dilated (44 mm).\\n\\nValves: Mild mitral annular calcification. Trivial MR. Aortic valve: mildly sclerotic, no stenosis.\\n\\nRight heart: Normal RV. RVSP 32 mmHg.\\n\\nNo pericardial effusion.",
      "impression": "1. HFpEF — EF 55%, Grade II diastolic dysfunction.\\n2. Moderate LA dilation consistent with chronic AFib.\\n3. Concentric LVH.\\n4. No significant valvular disease.",
      "dictated": "11/12/2024 14:40",
      "verified": "11/12/2024 16:50"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "09/18/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-HD258",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/10/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-750",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "06/2022",
      "site": "Left deltoid IM",
      "lot": "PV22-380",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "01/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-042",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "03/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-188",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Atrial fibrillation, CHF, deceased at 82",
    "Mother: Hypertension, Alzheimer's disease, deceased at 90",
    "Sister: AFib (pacemaker at 76), alive at 80",
    "No family history of sudden cardiac death"
  ],
  "socialHistory": [
    ["Occupation", "Retired accountant; retired 2010"],
    ["Marital", "Widowed (2022); husband deceased of dementia"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "None"],
    ["Drugs", "Denies"],
    ["Exercise", "Gentle walks in neighborhood with neighbor; chair yoga 2x/week"],
    ["Housing", "Condo with daughter nearby; independent ADLs"],
    ["Safety", "Denies IPV; fall risk — uses grab bars in bathroom; wears medical alert device"],
    ["Advance Directive", "POLST on file — Full Code; HCP: daughter Rebecca Stein"]
  ],
  "meta": {
    "caseId": "druginduced-av-block",
    "diagnosis": "Drug-Induced Complete AV Block (Digoxin Toxicity with CKD Progression)",
    "acuity": 2,
    "presentation": "Cardiac Emergency",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Miriam Goldstein is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did cardiac emergency start?",
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
        "onset": "'The symptoms started I've been managing my heart rhythm problems pretty well - I can still do my hous.'",
        "character": "'It's cardiac emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Drug-Induced Complete AV Block.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Diltiazem ER 240mg daily; Digoxin 0.25mg daily; Apixaban 5mg BID; Furosemide 20mg daily; Levothyroxine 75mcg daily; Acetaminophen 500mg q6h PRN.'",
        "allergies": "'My allergies are Amiodarone, Sulfa Drugs.'",
        "family": "Father: Atrial fibrillation, CHF, deceased at 82  Mother: Hypertension, Alzheimer's disease, deceased at 90  Sister: AFib (pacemaker at 76), alive at 80",
        "social": "Occupation: Retired accountant; retired 2010  Marital: Widowed (2022); husband deceased of dementia  Tobacco: Never smoker  Alcohol: None  Drugs: Denies"
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
        "General appearance and hemodynamic assessment": "Clinical finding consistent with Drug-Induced Complete AV Block. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Drug-Induced Complete AV Block. Document specifically what you observe.",
        "Jugular venous pressure": "Clinical finding consistent with Drug-Induced Complete AV Block. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Drug-Induced Complete AV Block. Document specifically what you observe.",
        "Peripheral pulses and perfusion": "Clinical finding consistent with Drug-Induced Complete AV Block. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Drug-Induced Complete AV Block. Document specifically what you observe.",
        "Lower extremity edema": "Clinical finding consistent with Drug-Induced Complete AV Block. Document specifically what you observe.",
        "Skin perfusion and temperature": "Clinical finding consistent with Drug-Induced Complete AV Block. Document specifically what you observe."
    },
    "ddxTargets": [
        "Drug-Induced Complete AV Block (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Drug-Induced Complete AV Block, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Drug-Induced Complete AV Block, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Drug-Induced Complete AV Block based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Miriam Goldstein's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Drug-Induced Complete AV Block (Digoxin Toxicity with CKD Progression). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
