// Virtual EMR Case: Phlegmasia Cerulea Dolens
// Variant: phlegmasia-cerulea-dolens | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Angela Brooks",
    "patientHPI": "My left leg has been getting more and more swollen over the past four days, even though I've been taking my blood thinner shots religiously like the doctor ordered. My left calf is noticeably bigger than my right one now, and there's some mild discomfort - I'm worried because this is the same leg that had the blood clot before.",
    "dob": "11/08/1971",
    "age": 53,
    "sex": "Female",
    "mrn": "RDX-2025-48372",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Patricia Williams, MD",
    "pharmacy": "Publix Pharmacy — 9050 Weston Rd, Weston, FL",
    "language": "English",
    "race": "African American",
    "address": "3551 Ash St, Louisville, KY 40212",
    "phone": "(954) 555-8726",
    "email": "a.brooks71@email.com",
    "emergencyContact": {
      "name": "Thomas Brooks (Husband)",
      "phone": "(954) 555-8740"
    },
    "chiefComplaint": "Severe leg pain and swelling"
  },
  "problems": [
    {
      "problem": "Pancreatic Adenocarcinoma, Stage III",
      "icd": "C25.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Diagnosed 09/2024; unresectable; on FOLFIRINOX chemotherapy"
    },
    {
      "problem": "Deep Vein Thrombosis, Left Leg (prior)",
      "icd": "I82.402",
      "onset": "2024",
      "status": "Active",
      "notes": "Diagnosed 11/2024; on enoxaparin; cancer-associated VTE"
    },
    {
      "problem": "Type 2 Diabetes Mellitus, New-Onset",
      "icd": "E11.65",
      "onset": "2024",
      "status": "Active",
      "notes": "Likely pancreatic cancer-related (pancreatic diabetes); on insulin"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2012",
      "status": "Active",
      "notes": "Controlled"
    },
    {
      "problem": "Unintentional Weight Loss",
      "icd": "R63.4",
      "onset": "2024",
      "status": "Active",
      "notes": "25 lbs over 6 months; cancer cachexia"
    }
  ],
  "medications": [
    {
      "name": "Enoxaparin 1mg/kg SQ BID",
      "sig": "Inject 70mg subcutaneously twice daily (weight 154 lbs = 70 kg)",
      "prescriber": "Dr. Patel",
      "start": "11/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Insulin Glargine 14 units QHS",
      "sig": "Inject 14 units subcutaneously at bedtime",
      "prescriber": "Dr. Williams",
      "start": "10/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Williams",
      "start": "01/2013",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Ondansetron 8mg TID PRN",
      "sig": "Take 1 tablet by mouth three times daily as needed for nausea",
      "prescriber": "Dr. Chen",
      "start": "10/2024",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Oxycodone 5mg q4-6h PRN",
      "sig": "Take 1 tablet by mouth every 4-6 hours as needed for pain",
      "prescriber": "Dr. Chen",
      "start": "10/2024",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Pancrelipase (Creon) 36,000 units with meals",
      "sig": "Take 2 capsules by mouth with each meal and 1 with snacks",
      "prescriber": "Dr. Chen",
      "start": "10/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily before breakfast",
      "prescriber": "Dr. Williams",
      "start": "10/2024",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Metoclopramide",
      "type": "Drug",
      "reaction": "Dystonic reaction (torticollis)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/20/2025",
      "bp": "118/72",
      "hr": 92,
      "rr": 18,
      "temp": "98.8°F",
      "spo2": "97%",
      "wt": "154 lbs",
      "ht": "5'7\"",
      "bmi": 24.1,
      "setting": "PCP Office"
    },
    {
      "date": "12/09/2024",
      "bp": "122/76",
      "hr": 88,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "158 lbs",
      "ht": "5'7\"",
      "bmi": 24.7,
      "setting": "PCP Office"
    },
    {
      "date": "09/05/2024",
      "bp": "126/78",
      "hr": 80,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "168 lbs",
      "ht": "5'7\"",
      "bmi": 26.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Williams, MD",
      "cc": "Follow-up: pancreatic cancer, DVT on anticoagulation, diabetes, weight loss",
      "hpi": "53-year-old female with stage III pancreatic adenocarcinoma on FOLFIRINOX (cycle 4 completed last week), cancer-associated left leg DVT on enoxaparin, and new-onset diabetes. Reports increasing left leg swelling over past 4 days despite anticoagulation compliance. Left calf larger than right. Mild discomfort but no severe pain. Chemotherapy tolerability fair — nausea managed with ondansetron; fatigue significant. Weight down another 4 lbs. Abdominal pain 3-4/10, managed with oxycodone 1-2 tablets daily. Appetite poor. Blood sugars running 140-200 fasting.",
      "exam": "General: Thin, fatigued-appearing female; mild jaundice. CV: Tachycardic, RRR. Lungs: CTAB. Abdomen: Firm epigastric mass palpable; mild tenderness; no rebound. Extremities: Left leg — moderate edema from ankle to mid-thigh, greater than previous exam; no cyanosis or blistering; positive Homan sign. Right leg — no edema. Skin: Scleral icterus, mild jaundice. Neuro: A&O x3.",
      "assessment": "1. Pancreatic adenocarcinoma — on chemotherapy; progressive weight loss\n2. Left lower extremity DVT — worsening edema despite therapeutic enoxaparin; concern for clot extension\n3. New-onset diabetes — suboptimally controlled; adjust insulin\n4. Cancer-associated cachexia\n5. Mild obstructive jaundice — stable",
      "plan": "1. Urgent bilateral lower extremity duplex ultrasound to evaluate DVT extension\n2. Continue enoxaparin; if extension confirmed, vascular surgery or IR consultation for consideration of IVC filter or catheter-directed therapy\n3. Increase insulin glargine to 18 units\n4. Nutrition counseling; continue pancrelipase\n5. Oncology follow-up next week for cycle 5\n6. RTC 2 weeks or sooner if leg symptoms worsen"
    },
    {
      "id": "V002",
      "date": "12/09/2024",
      "type": "Primary Care",
      "provider": "Dr. Patricia Williams, MD",
      "cc": "Post-DVT follow-up; chemotherapy management",
      "hpi": "53-year-old female with pancreatic cancer, recently diagnosed with left leg DVT (11/2024). Started on enoxaparin. Left leg swelling improving. On cycle 3 of FOLFIRINOX. Experiencing chemotherapy-related fatigue and nausea. Weight stable this month.",
      "exam": "General: Fatigued. Abdomen: Firm, mild tenderness. Extremities: Left leg — mild residual edema; no erythema or warmth. Right — normal.",
      "assessment": "1. Cancer-associated DVT — improving on enoxaparin\n2. Pancreatic cancer — tolerating chemotherapy",
      "plan": "1. Continue enoxaparin\n2. Supportive care for chemotherapy side effects\n3. RTC 6 weeks"
    }
  ],
  "labs": [
    {
      "date": "01/20/2025",
      "time": "09:15",
      "orderedBy": "Dr. Patricia Williams, MD",
      "collected": "01/20/2025 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-012052",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "188",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
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
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "136",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.0",
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
              "value": "24",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "8.6",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "Total Bilirubin",
              "value": "3.2",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": "H"
            },
            {
              "test": "Direct Bilirubin",
              "value": "2.4",
              "unit": "mg/dL",
              "range": "0.0-0.3",
              "flag": "H"
            },
            {
              "test": "ALT (SGPT)",
              "value": "68",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "AST (SGOT)",
              "value": "55",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "Alkaline Phosphatase",
              "value": "245",
              "unit": "U/L",
              "range": "44-147",
              "flag": "H"
            },
            {
              "test": "Albumin",
              "value": "2.8",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": "L"
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "3.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "L"
            },
            {
              "test": "Hemoglobin",
              "value": "10.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "30.8",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "Platelet Count",
              "value": "118",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "L"
            },
            {
              "test": "ANC",
              "value": "2.1",
              "unit": "x10³/µL",
              "range": ">1.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "TUMOR MARKER",
          "results": [
            {
              "test": "CA 19-9",
              "value": "1240",
              "unit": "U/mL",
              "range": "<37",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "DUPLEX ULTRASOUND LEFT LOWER EXTREMITY VENOUS",
      "accession": "IMG-2024-11181",
      "status": "FINAL",
      "orderedBy": "Dr. Patricia Williams, MD",
      "readBy": "Dr. Lisa Tran, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "53F pancreatic cancer, new left leg swelling and pain. Rule out DVT.",
      "technique": "Compression and Doppler ultrasound of the left lower extremity deep venous system.",
      "findings": "Left common femoral vein: Non-compressible. Echogenic intraluminal thrombus.\\n\\nLeft femoral vein: Non-compressible. Thrombus extending distally.\\n\\nLeft popliteal vein: Partially compressible. Partial thrombus.\\n\\nLeft posterior tibial and peroneal veins: Patent and compressible.\\n\\nNo superficial vein thrombosis.",
      "impression": "1. Extensive left lower extremity DVT involving the common femoral, femoral, and popliteal veins.\\n2. Distal veins patent.",
      "dictated": "11/18/2024 14:00",
      "verified": "11/18/2024 16:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/10/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-290",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/10/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-895",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-445",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "09/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-620",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Colon cancer at age 65 (deceased at 72)",
    "Mother: Breast cancer at age 58 (survived; alive at 80)",
    "Sister: No cancer history, alive at 50",
    "Maternal aunt: Ovarian cancer at age 62 (deceased)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Corporate attorney — currently on medical leave"
    ],
    [
      "Marital",
      "Married"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social — minimal since diagnosis"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Previously ran 3x/week; now limited by fatigue and leg swelling"
    ],
    [
      "Housing",
      "Lives with husband and teenage daughter"
    ],
    [
      "Safety",
      "Denies IPV; wears seatbelt"
    ],
    [
      "Advance Directive",
      "Living will and HCP on file — husband Thomas designated"
    ]
  ],
  "meta": {
    "caseId": "phlegmasia-cerulea-dolens",
    "diagnosis": "Phlegmasia Cerulea Dolens",
    "acuity": 1,
    "presentation": "Vascular Emergency",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Angela Brooks appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did vascular emergency start?",
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
      "onset": "'The symptoms started My left leg has been getting more and more swollen over the past four days, even.'",
      "character": "'It's vascular emergency — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Phlegmasia Cerulea Dolens.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Enoxaparin 1mg/kg SQ BID; Insulin Glargine 14 units QHS; Lisinopril 10mg daily; Ondansetron 8mg TID PRN; Oxycodone 5mg q4-6h PRN; Pancrelipase (Creon) 36,000 units with meals; Omeprazole 20mg daily.'",
      "allergies": "'My allergies are Metoclopramide.'",
      "family": "Father: Colon cancer at age 65 (deceased at 72)  Mother: Breast cancer at age 58 (survived; alive at 80)  Sister: No cancer history, alive at 50",
      "social": "Occupation: Corporate attorney — currently on medical leave  Marital: Married  Tobacco: Never smoker  Alcohol: Social — minimal since diagnosis  Drugs: Denies"
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
      "General appearance and level of distress": "Clinical finding consistent with Phlegmasia Cerulea Dolens. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Phlegmasia Cerulea Dolens. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Phlegmasia Cerulea Dolens. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Phlegmasia Cerulea Dolens. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Phlegmasia Cerulea Dolens. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Phlegmasia Cerulea Dolens. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Phlegmasia Cerulea Dolens. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Phlegmasia Cerulea Dolens. Document specifically what you observe."
    },
    "ddxTargets": [
      "Phlegmasia Cerulea Dolens (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Phlegmasia Cerulea Dolens, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Phlegmasia Cerulea Dolens, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Phlegmasia Cerulea Dolens based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Angela Brooks's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Phlegmasia Cerulea Dolens. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
