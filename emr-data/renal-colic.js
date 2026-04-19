
window.EMR_DATA = {
  "patient": {
    "name": "Brian Mitchell",
    "dob": "09/30/1980",
    "age": 45,
    "sex": "Male",
    "mrn": "RDX-2025-72845",
    "pronouns": "He/Him",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Thomas Hartley, MD",
    "pharmacy": "Walgreens — 5980 S State Road 7, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "8820 SW 22nd St, Riverside, FL 33324",
    "phone": "(954) 555-8104",
    "email": "b.mitchell80@email.com",
    "emergencyContact": {
      "name": "Jennifer Mitchell (Wife)",
      "phone": "(954) 555-8119"
    },
    "chiefComplaint": "Severe flank pain"
  },
  "problems": [
    {
      "problem": "Nephrolithiasis, Recurrent (Calcium Oxalate)",
      "icd": "N20.0",
      "onset": "2018",
      "status": "Active",
      "notes": "Two prior episodes (2018, 2022); passed spontaneously both times"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2016",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Gout",
      "icd": "M10.9",
      "onset": "2020",
      "status": "Active",
      "notes": "Primarily 1st MTP; last flare 2024"
    },
    {
      "problem": "Overweight",
      "icd": "E66.3",
      "onset": "2019",
      "status": "Active",
      "notes": "BMI 28.0"
    },
    {
      "problem": "GERD",
      "icd": "K21.0",
      "onset": "2021",
      "status": "Active",
      "notes": "Managed with PPI"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Hartley",
      "start": "03/2017",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Allopurinol 300mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Hartley",
      "start": "01/2021",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Potassium Citrate 10mEq TID",
      "sig": "Take 1 tablet by mouth three times daily with meals",
      "prescriber": "Dr. Kapoor",
      "start": "06/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily 30 minutes before breakfast",
      "prescriber": "Dr. Hartley",
      "start": "09/2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Hydrochlorothiazide 25mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Kapoor",
      "start": "06/2022",
      "refills": 4,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Ketorolac",
      "type": "Drug",
      "reaction": "GI bleeding",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Sulfa Drugs",
      "type": "Drug",
      "reaction": "Rash",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2026",
      "bp": "158/94",
      "hr": 102,
      "rr": 20,
      "temp": "98.8°F",
      "spo2": "98%",
      "wt": "195 lbs",
      "ht": "5'10\"",
      "bmi": 28,
      "setting": "ED"
    },
    {
      "date": "11/06/2025",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "194 lbs",
      "ht": "5'10\"",
      "bmi": 27.8,
      "setting": "PCP Office"
    },
    {
      "date": "05/14/2025",
      "bp": "134/82",
      "hr": 74,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "192 lbs",
      "ht": "5'10\"",
      "bmi": 27.5,
      "setting": "PCP Office"
    },
    {
      "date": "11/20/2024",
      "bp": "142/88",
      "hr": 76,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "196 lbs",
      "ht": "5'10\"",
      "bmi": 28.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/06/2025",
      "type": "Primary Care",
      "provider": "Dr. Thomas Hartley, MD",
      "cc": "Follow-up: HTN, gout, kidney stones",
      "hpi": "45-year-old male presenting for routine follow-up of hypertension, gout, and recurrent nephrolithiasis. Reports good medication adherence. BP at home averaging 130s/80s. No gout flares in the past year. No episodes of flank pain or hematuria since last stone passage in 2022. Diet modification — increased water intake to 2.5L/day, reduced sodium and animal protein. Reports intermittent heartburn, controlled with omeprazole.",
      "exam": "General: Well-appearing male, NAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT/ND, no CVA tenderness. Extremities: No edema, no tophi. 1st MTP joints nontender bilaterally.",
      "assessment": "1. Hypertension — controlled on current regimen\n2. Recurrent nephrolithiasis — stable, no recurrence since 2022\n3. Gout — well-controlled on allopurinol\n4. GERD — controlled on omeprazole",
      "plan": "1. Continue current medications\n2. Recheck BMP, uric acid, 24-hr urine collection\n3. Encourage continued hydration >2.5L/day\n4. RTC 6 months"
    },
    {
      "id": "V002",
      "date": "05/14/2025",
      "type": "Specialist",
      "provider": "Dr. Anita Kapoor, MD (Urology)",
      "cc": "Kidney stone surveillance",
      "hpi": "45-year-old male with history of recurrent calcium oxalate nephrolithiasis (2018, 2022), on preventive therapy with potassium citrate and HCTZ. Reports compliance with dietary modifications. Good fluid intake. No episodes of colic. 24-hour urine from 04/2025 showed improved citrate levels and reduced calcium excretion.",
      "exam": "General: NAD. Abdomen: Soft, NT. No CVA tenderness bilaterally. GU: Deferred.",
      "assessment": "1. Recurrent calcium oxalate nephrolithiasis — preventive therapy effective\n2. 24-hr urine improved on current regimen",
      "plan": "1. Continue potassium citrate 10mEq TID and HCTZ 25mg daily\n2. Continue dietary modifications\n3. Renal US in 12 months for surveillance\n4. RTC 12 months or sooner if symptoms"
    },
    {
      "id": "V003",
      "date": "11/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Thomas Hartley, MD",
      "cc": "Annual wellness / chronic disease follow-up",
      "hpi": "45-year-old male for annual exam. Chronic conditions stable. Gout with one mild flare earlier this year treated with colchicine. Kidney stone prevention ongoing. Reports increased stress at work. Sleeping well. Exercising sporadically.",
      "exam": "General: NAD. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT/ND. Extremities: No edema, no joint swelling.",
      "assessment": "1. Annual wellness\n2. HTN — slightly above goal, consider medication adjustment\n3. Gout — recent flare, uric acid level pending",
      "plan": "1. Increase exercise to 150 min/week\n2. Lab work: BMP, lipid panel, uric acid, HbA1c\n3. Monitor BP; consider increasing lisinopril if not at goal\n4. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "11/06/2025",
      "time": "08:10",
      "orderedBy": "Dr. Thomas Hartley, MD",
      "collected": "11/06/2025 07:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-110642",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Urine",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "96",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "18",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.1",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "eGFR",
              "value": "82",
              "unit": "mL/min/1.73m²",
              "range": ">60",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "100",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "26",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.6",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "ALT (SGPT)",
              "value": "32",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST (SGOT)",
              "value": "28",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            }
          ]
        },
        {
          "name": "URIC ACID",
          "results": [
            {
              "test": "Uric Acid",
              "value": "5.8",
              "unit": "mg/dL",
              "range": "3.5-7.2",
              "flag": ""
            }
          ]
        },
        {
          "name": "URINALYSIS",
          "results": [
            {
              "test": "Color",
              "value": "Yellow",
              "unit": "",
              "range": "Yellow",
              "flag": ""
            },
            {
              "test": "Clarity",
              "value": "Clear",
              "unit": "",
              "range": "Clear",
              "flag": ""
            },
            {
              "test": "Specific Gravity",
              "value": "1.012",
              "unit": "",
              "range": "1.005-1.030",
              "flag": ""
            },
            {
              "test": "pH",
              "value": "6.5",
              "unit": "",
              "range": "5.0-8.0",
              "flag": ""
            },
            {
              "test": "Blood",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "Protein",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "Leukocyte Esterase",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "05/14/2025",
      "study": "RENAL ULTRASOUND",
      "accession": "IMG-2025-05143",
      "status": "FINAL",
      "orderedBy": "Dr. Anita Kapoor, MD",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "45M with recurrent nephrolithiasis. Annual surveillance.",
      "technique": "Bilateral renal ultrasound.",
      "findings": "Right Kidney: Normal size, 11.2 cm. Normal cortical thickness and echogenicity. No hydronephrosis. Small 3 mm nonobstructing calculus in the lower pole calyx.\\n\\nLeft Kidney: Normal size, 11.0 cm. Normal cortical thickness and echogenicity. No hydronephrosis. No calculus identified.\\n\\nBladder: Normal, no calculi.",
      "impression": "1. Small 3 mm nonobstructing right lower pole renal calculus — stable compared to prior.\\n2. No hydronephrosis bilaterally.\\n3. Normal-sized kidneys.",
      "dictated": "05/14/2025 10:34",
      "verified": "05/14/2025 12:15"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "09/25/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-274",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2025-26)",
      "date": "10/20/2025",
      "site": "Right deltoid IM",
      "lot": "CM2025-638",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Hepatitis A (Havrix) (2/2)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Nephrolithiasis (recurrent), Hypertension, alive at 72",
    "Mother: Type 2 Diabetes Mellitus, Osteoarthritis, alive at 70",
    "Brother: Gout, alive at 48",
    "Paternal uncle: Renal cell carcinoma at age 65 (deceased)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "IT project manager"
    ],
    [
      "Marital",
      "Married, 2 children (ages 12, 9)"
    ],
    [
      "Tobacco",
      "Former smoker — quit 2015 (10 pack-year history)"
    ],
    [
      "Alcohol",
      "Moderate, 4-6 beers/week"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Sporadic; walks 2x/week, occasional cycling"
    ],
    [
      "Housing",
      "Single-family home with wife and children"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt always; firearms secured"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "renal-colic",
    "diagnosis": "Renal Colic (Nephrolithiasis)",
    "acuity": 3,
    "presentation": "Abdominal Pain",
    "category": "renal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Brian Mitchell appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did abdominal pain start?",
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
      "onset": "'The symptoms started 45-year-old male presenting for routine follow-up of hypertension, gout, and rec.'",
      "character": "'It's abdominal pain — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Renal Colic.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Lisinopril 20mg daily; Allopurinol 300mg daily; Potassium Citrate 10mEq TID; Omeprazole 20mg daily; Hydrochlorothiazide 25mg daily.'",
      "allergies": "'My allergies are Ketorolac, Sulfa Drugs.'",
      "family": "Father: Nephrolithiasis (recurrent), Hypertension, alive at 72  Mother: Type 2 Diabetes Mellitus, Osteoarthritis, alive at 70  Brother: Gout, alive at 48",
      "social": "Occupation: IT project manager  Marital: Married, 2 children (ages 12, 9)  Tobacco: Former smoker — quit 2015 (10 pack-year history)  Alcohol: Moderate, 4-6 beers/week  Drugs: Denies"
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
      "General appearance and level of distress": "Clinical finding consistent with Renal Colic. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Renal Colic. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Renal Colic. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Renal Colic. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Renal Colic. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Renal Colic. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Renal Colic. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Renal Colic. Document specifically what you observe."
    },
    "ddxTargets": [
      "Renal Colic (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Renal Colic, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Renal Colic, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Renal Colic based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Brian Mitchell's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Renal Colic (Nephrolithiasis). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
