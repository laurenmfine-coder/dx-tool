
window.EMR_DATA = {
  "patient": {
    "name": "Nikolai Petrov",
    "dob": "04/02/1967",
    "age": 57,
    "sex": "Male",
    "mrn": "RDX-2025-52489",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield FL PPO",
    "pcp": "Dr. Catherine Miller, MD",
    "pharmacy": "Walgreens — 5701 Sheridan St, Hollywood, FL",
    "language": "English",
    "race": "White",
    "address": "3420 Sheridan St, Hollywood, FL 33021",
    "phone": "(954) 555-9321",
    "email": "n.petrov67@email.com",
    "emergencyContact": {
      "name": "Irina Petrov (Wife)",
      "phone": "(954) 555-9335"
    },
    "chiefComplaint": "Severe upper belly pain"
  },
  "problems": [
    {
      "problem": "Cholelithiasis",
      "icd": "K80.20",
      "onset": "2023",
      "status": "Active",
      "notes": "Multiple gallstones on US; declined cholecystectomy"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2014",
      "status": "Active",
      "notes": "Hypertriglyceridemia (TG 350-500 range); on fenofibrate"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2010",
      "status": "Active",
      "notes": "Controlled on ACE inhibitor"
    },
    {
      "problem": "Obesity, Class I",
      "icd": "E66.01",
      "onset": "2012",
      "status": "Active",
      "notes": "BMI 32.0"
    },
    {
      "problem": "Alcohol Use, Heavy",
      "icd": "F10.10",
      "onset": "2005",
      "status": "Active",
      "notes": "Reports 4-6 drinks daily; counseled on reduction at every visit"
    },
    {
      "problem": "Acute Pancreatitis, history of",
      "icd": "K85.9",
      "onset": "2023",
      "status": "Resolved",
      "notes": "Single episode 2023 — mild; attributed to gallstones and alcohol"
    }
  ],
  "medications": [
    {
      "name": "Fenofibrate 145mg daily",
      "sig": "Take 1 tablet by mouth daily with a meal",
      "prescriber": "Dr. Miller",
      "start": "06/2015",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 20mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Miller",
      "start": "01/2016",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Miller",
      "start": "08/2011",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily before breakfast",
      "prescriber": "Dr. Miller",
      "start": "10/2023",
      "refills": 3,
      "status": "Active"
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
      "date": "12/16/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "222 lbs",
      "ht": "5'11\"",
      "bmi": 31,
      "setting": "PCP Office"
    },
    {
      "date": "06/10/2024",
      "bp": "142/88",
      "hr": 80,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "226 lbs",
      "ht": "5'11\"",
      "bmi": 31.5,
      "setting": "PCP Office"
    },
    {
      "date": "12/12/2023",
      "bp": "136/84",
      "hr": 76,
      "rr": 16,
      "temp": "98.8°F",
      "spo2": "98%",
      "wt": "220 lbs",
      "ht": "5'11\"",
      "bmi": 30.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/16/2024",
      "type": "Primary Care",
      "provider": "Dr. Catherine Miller, MD",
      "cc": "Follow-up: cholelithiasis, hyperlipidemia, alcohol use",
      "hpi": "57-year-old male with cholelithiasis, severe hypertriglyceridemia, and heavy alcohol use presenting for routine follow-up. Triglycerides remain elevated at 480 despite fenofibrate — admits to dietary noncompliance and continued heavy alcohol use (4-6 drinks nightly). Had episode of acute pancreatitis in 2023 requiring 4-day hospitalization. Continues to decline cholecystectomy referral. Occasionally notes epigastric discomfort after heavy meals. Weight stable.",
      "exam": "General: Obese male, mild facial plethora, NAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, mild epigastric tenderness without rebound; positive Murphy's sign. Liver: Palpable 2 cm below costal margin. Extremities: No edema. Neuro: A&O x3; mild bilateral hand tremor.",
      "assessment": "1. Cholelithiasis — symptomatic; again counseled on cholecystectomy\n2. Hypertriglyceridemia — poorly controlled (TG 480); pancreatitis risk\n3. Alcohol use disorder — continued heavy use; elevated recurrent pancreatitis risk\n4. Prior acute pancreatitis — at high risk for recurrence\n5. HTN — controlled",
      "plan": "1. Strongly recommended cholecystectomy — patient declined again; documented risks\n2. Add omega-3 fatty acids (Lovaza 4g daily) for TG reduction\n3. Alcohol cessation counseling; offered referral to addiction medicine — declined\n4. Low-fat diet counseling\n5. Labs: lipid panel, LFTs, lipase, CBC\n6. RTC 3 months; ED precautions for abdominal pain reviewed"
    },
    {
      "id": "V002",
      "date": "08/05/2023",
      "type": "ED",
      "provider": "Dr. Sarah Mitchell, MD (Emergency Medicine)",
      "cc": "Severe epigastric pain, nausea, vomiting x 12 hours",
      "hpi": "57-year-old male presenting with sudden onset severe epigastric pain radiating to the back x 12 hours. Reports heavy alcohol intake night before (8+ drinks). Nausea with multiple episodes of vomiting. Unable to tolerate PO. Reports prior biliary colic episodes. No fever.",
      "exam": "General: Moderate distress, diaphoretic. Vitals: HR 112, BP 148/92, T 99.2°F. Abdomen: Severe epigastric tenderness with voluntary guarding; no rebound; diminished bowel sounds. No jaundice.",
      "assessment": "1. Acute pancreatitis — lipase >3x ULN; likely gallstone and/or alcohol-related",
      "plan": "1. Admitted to medicine service\n2. NPO, aggressive IV hydration, IV morphine for pain\n3. CT abdomen/pelvis: mild peripancreatic stranding, no necrosis\n4. Surgical consult for cholecystectomy — patient deferred\n5. Discharged day 4 with outpatient follow-up"
    }
  ],
  "labs": [
    {
      "date": "12/16/2024",
      "time": "09:30",
      "orderedBy": "Dr. Catherine Miller, MD",
      "collected": "12/16/2024 08:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-121641",
      "status": "Final",
      "specimenType": "Serum",
      "fasting": "Yes (12 hrs)",
      "groups": [
        {
          "name": "LIPID PANEL",
          "results": [
            {
              "test": "Total Cholesterol",
              "value": "268",
              "unit": "mg/dL",
              "range": "<200",
              "flag": "H"
            },
            {
              "test": "LDL-C",
              "value": "118",
              "unit": "mg/dL",
              "range": "<130",
              "flag": ""
            },
            {
              "test": "HDL-C",
              "value": "34",
              "unit": "mg/dL",
              "range": ">40",
              "flag": "L"
            },
            {
              "test": "Triglycerides",
              "value": "480",
              "unit": "mg/dL",
              "range": "<150",
              "flag": "H"
            }
          ]
        },
        {
          "name": "HEPATIC FUNCTION PANEL",
          "results": [
            {
              "test": "ALT (SGPT)",
              "value": "68",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "AST (SGOT)",
              "value": "82",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "Alkaline Phosphatase",
              "value": "128",
              "unit": "U/L",
              "range": "44-147",
              "flag": ""
            },
            {
              "test": "Total Bilirubin",
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": "H"
            },
            {
              "test": "Direct Bilirubin",
              "value": "0.5",
              "unit": "mg/dL",
              "range": "0.0-0.3",
              "flag": "H"
            },
            {
              "test": "GGT",
              "value": "188",
              "unit": "U/L",
              "range": "8-61",
              "flag": "H"
            },
            {
              "test": "Albumin",
              "value": "3.6",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "PANCREATIC ENZYMES",
          "results": [
            {
              "test": "Lipase",
              "value": "42",
              "unit": "U/L",
              "range": "0-60",
              "flag": ""
            },
            {
              "test": "Amylase",
              "value": "78",
              "unit": "U/L",
              "range": "28-100",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "8.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "14.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "42.6",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "178",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "MCV",
              "value": "102",
              "unit": "fL",
              "range": "80-100",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "06/10/2024",
      "study": "ULTRASOUND ABDOMEN RUQ",
      "accession": "IMG-2024-06101",
      "status": "FINAL",
      "orderedBy": "Dr. Catherine Miller, MD",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "57M cholelithiasis, elevated LFTs, alcohol use. Reassess gallbladder and liver.",
      "technique": "Real-time ultrasound of the right upper quadrant.",
      "findings": "Gallbladder: Multiple echogenic foci with posterior acoustic shadowing consistent with gallstones (largest 12 mm). No gallbladder wall thickening (3 mm). No pericholecystic fluid. CBD 5 mm (normal).\\n\\nLiver: Diffusely echogenic parenchyma consistent with hepatic steatosis. No focal hepatic mass. Normal hepatopetal portal venous flow.\\n\\nCommon bile duct: 5 mm, within normal limits.\\n\\nPancreas: Partially visualized; no gross abnormality seen.",
      "impression": "1. Multiple gallstones without acute cholecystitis.\\n2. Hepatic steatosis.\\n3. No biliary ductal dilation.",
      "dictated": "06/10/2024 14:30",
      "verified": "06/10/2024 17:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-278",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/08/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-860",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "09/2024",
      "site": "Left deltoid IM",
      "lot": "SX24-612",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "11/2024",
      "site": "Left deltoid IM",
      "lot": "SX24-780",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Alcoholic liver disease, deceased at 62",
    "Mother: Gallstones, cholecystectomy at age 55; alive at 84",
    "Brother: Hyperlipidemia, pancreatitis at age 50, alive",
    "Sister: T2DM, alive at 54"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Restaurant owner/chef"
    ],
    [
      "Marital",
      "Married"
    ],
    [
      "Tobacco",
      "Former — 10 pack-years; quit 2010"
    ],
    [
      "Alcohol",
      "Heavy — 4-6 drinks daily (beer and vodka); 30+ year history"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Minimal — on feet at work but no structured exercise"
    ],
    [
      "Housing",
      "Lives with wife"
    ],
    [
      "Safety",
      "Denies IPV; wears seatbelt"
    ],
    [
      "Advance Directive",
      "None — discussed"
    ]
  ],
  "meta": {
    "caseId": "acute-pancreatitis",
    "diagnosis": "Acute Pancreatitis (Vascular Complication)",
    "acuity": 2,
    "presentation": "Vascular Emergency",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Nikolai Petrov is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
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
      "default": "He pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "'The symptoms started 57-year-old male with cholelithiasis, severe hypertriglyceridemia, and heavy alc.'",
      "character": "'It's vascular emergency — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Acute Pancreatitis.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Fenofibrate 145mg daily; Atorvastatin 20mg QHS; Lisinopril 20mg daily; Omeprazole 20mg daily.'",
      "allergies": "'My allergies are NKDA.'",
      "family": "Father: Alcoholic liver disease, deceased at 62  Mother: Gallstones, cholecystectomy at age 55; alive at 84  Brother: Hyperlipidemia, pancreatitis at age 50, alive",
      "social": "Occupation: Restaurant owner/chef  Marital: Married  Tobacco: Former — 10 pack-years; quit 2010  Alcohol: Heavy — 4-6 drinks daily (beer and vodka); 30+ year history  Drugs: Denies"
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
      "General appearance and level of distress": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe."
    },
    "ddxTargets": [
      "Acute Pancreatitis (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Acute Pancreatitis, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Acute Pancreatitis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Acute Pancreatitis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Nikolai Petrov's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Acute Pancreatitis (Vascular Complication). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
