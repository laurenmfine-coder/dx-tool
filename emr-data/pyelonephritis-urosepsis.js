
window.EMR_DATA = {
  "patient": {
    "name": "Hazel Thompson",
    "dob": "01/18/1945",
    "age": 79,
    "sex": "Female",
    "mrn": "RDX-2025-13829",
    "pronouns": "She/Her",
    "insurance": "Medicare Part B",
    "pcp": "Dr. Andrew Blake, MD",
    "pharmacy": "Publix Pharmacy — 7300 W Sample Rd, Coral Springs, FL",
    "language": "English",
    "race": "White",
    "address": "5600 NW 83rd Pl, Coral Springs, FL 33067",
    "phone": "(954) 555-1247",
    "email": "h.thompson45@email.com",
    "emergencyContact": {
      "name": "Robert Thompson (Son)",
      "phone": "(954) 555-1265"
    },
    "chiefComplaint": "Fever and feeling confused"
  },
  "problems": [
    {
      "problem": "Recurrent Urinary Tract Infections",
      "icd": "N39.0",
      "onset": "2020",
      "status": "Active",
      "notes": "4-5 UTIs/year; E. coli predominant; post-menopausal vaginal atrophy contributing; on vaginal estrogen cream prophylaxis"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.9",
      "onset": "2012",
      "status": "Active",
      "notes": "A1c 7.6%; on metformin and sitagliptin"
    },
    {
      "problem": "Neurogenic Bladder — Incomplete Emptying",
      "icd": "N31.9",
      "onset": "2021",
      "status": "Active",
      "notes": "Post-void residual >150 mL on multiple checks; diabetic autonomic neuropathy suspected; intermittent self-catheterization BID"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2005",
      "status": "Active",
      "notes": "On amlodipine"
    },
    {
      "problem": "Osteoarthritis — Bilateral Hips",
      "icd": "M16.0",
      "onset": "2016",
      "status": "Active",
      "notes": "Managed with acetaminophen"
    },
    {
      "problem": "Atrial Fibrillation — Paroxysmal",
      "icd": "I48.0",
      "onset": "2019",
      "status": "Active",
      "notes": "On apixaban; rate controlled with metoprolol; CHA₂DS₂-VASc 5"
    }
  ],
  "medications": [
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Blake",
      "start": "06/2013",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Sitagliptin 100mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Blake",
      "start": "01/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Apixaban 5mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Blake",
      "start": "06/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Metoprolol Succinate 50mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Blake",
      "start": "06/2019",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Blake",
      "start": "03/2008",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Vaginal Estradiol Cream 0.01% — 2x/week",
      "sig": "Apply 1g intravaginally twice weekly at bedtime",
      "prescriber": "Dr. Blake",
      "start": "01/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg TID PRN",
      "sig": "Take 1-2 tablets by mouth three times daily as needed; max 3000mg/day",
      "prescriber": "Dr. Blake",
      "start": "01/2017",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Nitrofurantoin",
      "type": "Drug",
      "reaction": "Pulmonary reaction — acute dyspnea and infiltrates after 3 weeks of prophylaxis",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Fluoroquinolones (Ciprofloxacin)",
      "type": "Drug",
      "reaction": "Tendon pain — bilateral Achilles (fluoroquinolone tendinopathy)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/06/2024",
      "bp": "132/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "97%",
      "wt": "155 lbs",
      "ht": "5'5\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    },
    {
      "date": "05/14/2024",
      "bp": "136/80",
      "hr": 78,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "157 lbs",
      "ht": "5'5\"",
      "bmi": 26.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/06/2024",
      "type": "Primary Care",
      "provider": "Dr. Andrew Blake, MD",
      "cc": "Follow-up: UTIs, DM2, AFib",
      "hpi": "79-year-old female for follow-up. Reports 2 UTIs since last visit (06/2024 and 09/2024), both treated with cephalexin (limited antibiotic options due to allergies). Self-catheterization technique reviewed — compliant BID. Vaginal estrogen cream used consistently. A1c 7.6% — stable. AFib — no palpitations, on apixaban. Mobility limited by hip OA.",
      "exam": "General: NAD, pleasant elderly female. CV: Irregularly irregular (AFib). Lungs: CTAB. Abdomen: Soft, mild suprapubic tenderness. GU: Not examined today. MSK: Antalgic gait. Neuro: A&O x3, decreased vibration sense bilateral feet.",
      "assessment": "1. Recurrent UTIs — 4 in past year; limited antibiotic options (nitrofurantoin allergy, fluoroquinolone tendinopathy)\n2. Neurogenic bladder — intermittent self-catheterization continuing\n3. T2DM — stable\n4. AFib — rate controlled, anticoagulated\n5. OA — limiting mobility",
      "plan": "1. D-mannose 2g daily for UTI prophylaxis (evidence limited but safe)\n2. Continue vaginal estrogen cream\n3. Clean-catheterization technique reviewed — single-use catheters recommended\n4. Urology referral for recurrent UTI management\n5. IF symptoms of UTI: obtain urine culture BEFORE starting empiric cephalexin\n6. IF flank pain, high fever, rigors: go to ED — pyelonephritis/urosepsis risk given anatomy\n7. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "11/06/2024",
      "time": "08:45",
      "orderedBy": "Dr. Andrew Blake, MD",
      "collected": "11/06/2024 08:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-110615",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Urine",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            {
              "test": "HbA1c",
              "value": "7.6",
              "unit": "%",
              "range": "<5.7 normal",
              "flag": "H"
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "128",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "22",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": "H"
            },
            {
              "test": "eGFR",
              "value": "48",
              "unit": "mL/min/1.73m²",
              "range": ">60",
              "flag": "L"
            }
          ]
        },
        {
          "name": "URINALYSIS",
          "results": [
            {
              "test": "Appearance",
              "value": "Clear",
              "unit": "—",
              "range": "Clear",
              "flag": ""
            },
            {
              "test": "Leukocyte Esterase",
              "value": "Negative",
              "unit": "—",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "Nitrite",
              "value": "Negative",
              "unit": "—",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "WBC (Urine)",
              "value": "2",
              "unit": "/hpf",
              "range": "0-5",
              "flag": ""
            },
            {
              "test": "Bacteria",
              "value": "None",
              "unit": "—",
              "range": "None",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/2022",
      "study": "RENAL ULTRASOUND",
      "accession": "IMG-2022-03151",
      "status": "FINAL",
      "orderedBy": "Dr. Andrew Blake, MD",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "79F recurrent UTIs, neurogenic bladder — evaluate for hydronephrosis or structural abnormality.",
      "technique": "Renal and bladder ultrasound.",
      "findings": "Right kidney: 10.8 cm, normal cortical thickness and echotexture. No hydronephrosis or stones.\\n\\nLeft kidney: 10.5 cm, normal cortical thickness. Small 4mm non-obstructing lower pole renal cyst. No hydronephrosis.\\n\\nBladder: Post-void residual 180 mL (elevated). Thickened bladder wall consistent with trabeculation.",
      "impression": "1. Elevated post-void residual (180 mL) with trabeculated bladder wall — consistent with neurogenic bladder.\\n2. No hydronephrosis bilaterally.\\n3. Small simple left renal cyst — benign.",
      "dictated": "03/15/2022 14:15",
      "verified": "03/15/2022 15:45"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD095",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/28/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-704",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "01/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-038",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "06/2020",
      "site": "Left deltoid IM",
      "lot": "SX20-245",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: UTIs (recurrent), breast cancer at 70, deceased at 82",
    "Father: CAD, deceased at 75",
    "Sister: T2DM, kidney stones, alive at 76",
    "Son: Healthy, age 52"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired school administrator"
    ],
    [
      "Marital",
      "Widowed (husband deceased 2020)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Denies"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Chair exercises; limited walking due to hip OA"
    ],
    [
      "Housing",
      "Assisted living facility — 55+ independent living section; staff on-site"
    ],
    [
      "Safety",
      "Walker for ambulation; bathroom grab bars; fall alert pendant worn"
    ],
    [
      "Advance Directive",
      "Living will on file; HCP: son Robert Thompson; DNR elected"
    ]
  ],
  "meta": {
    "caseId": "pyelonephritis-urosepsis",
    "diagnosis": "Acute Pyelonephritis with Urosepsis (E. coli, Complicated by Neurogenic Bladder and Limited Antibiotic Options)",
    "acuity": 2,
    "presentation": "Fever/Sepsis",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Hazel Thompson is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did fever/sepsis start?",
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
      "default": "She pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "'The symptoms started 79-year-old female for follow-up.'",
      "character": "'It's fever/sepsis — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Acute Pyelonephritis with Urosepsis.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Metformin 500mg BID; Sitagliptin 100mg daily; Apixaban 5mg BID; Metoprolol Succinate 50mg daily; Amlodipine 5mg daily; Vaginal Estradiol Cream 0.01% — 2x/week; Acetaminophen 500mg TID PRN.'",
      "allergies": "'My allergies are Nitrofurantoin, Fluoroquinolones (Ciprofloxacin).'",
      "family": "Mother: UTIs (recurrent), breast cancer at 70, deceased at 82  Father: CAD, deceased at 75  Sister: T2DM, kidney stones, alive at 76",
      "social": "Occupation: Retired school administrator  Marital: Widowed (husband deceased 2020)  Tobacco: Never smoker  Alcohol: Denies  Drugs: Denies"
    },
    "examManeuvers": [
      "General appearance and toxicity",
      "Vital signs with temperature",
      "Skin for rash, lesions, or signs of infection",
      "Lymph node palpation",
      "Cardiovascular auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Source-specific examination"
    ],
    "examFindings": {
      "General appearance and toxicity": "Clinical finding consistent with Acute Pyelonephritis with Urosepsis. Document specifically what you observe.",
      "Vital signs with temperature": "Clinical finding consistent with Acute Pyelonephritis with Urosepsis. Document specifically what you observe.",
      "Skin for rash, lesions, or signs of infection": "Clinical finding consistent with Acute Pyelonephritis with Urosepsis. Document specifically what you observe.",
      "Lymph node palpation": "Clinical finding consistent with Acute Pyelonephritis with Urosepsis. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Acute Pyelonephritis with Urosepsis. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Acute Pyelonephritis with Urosepsis. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Acute Pyelonephritis with Urosepsis. Document specifically what you observe.",
      "Source-specific examination": "Clinical finding consistent with Acute Pyelonephritis with Urosepsis. Document specifically what you observe."
    },
    "ddxTargets": [
      "Acute Pyelonephritis with Urosepsis (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Acute Pyelonephritis with Urosepsis, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Acute Pyelonephritis with Urosepsis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Acute Pyelonephritis with Urosepsis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Hazel Thompson's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Acute Pyelonephritis with Urosepsis (E. coli, Complicated by Neurogenic Bladder and Limited Antibiotic Options). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
