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
    },
    "chiefComplaint": "Sudden severe belly pain"
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
      "bmi": 30,
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
            {
              "test": "Glucose",
              "value": "142",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "34",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "eGFR",
              "value": "36",
              "unit": "mL/min/1.73m²",
              "range": ">60",
              "flag": "L"
            },
            {
              "test": "Sodium",
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.9",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "104",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "21",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": "L"
            },
            {
              "test": "Calcium",
              "value": "8.8",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "ALT (SGPT)",
              "value": "20",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST (SGOT)",
              "value": "24",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "8.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "9.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "29.4",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "Platelet Count",
              "value": "225",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
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
    [
      "Occupation",
      "Retired postal worker"
    ],
    [
      "Marital",
      "Widowed (husband deceased 2016)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "None — lifelong abstainer"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 10 min daily; limited by fatigue and dyspnea"
    ],
    [
      "Housing",
      "Lives alone; daughter lives nearby and assists with ADLs"
    ],
    [
      "Safety",
      "Denies IPV; fall risk — uses cane; home safety assessment done"
    ],
    [
      "Advance Directive",
      "Living will and HCP on file — daughter Brenda designated; Full code"
    ]
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
    "patientPersona": "Dorothy appears anxious and somewhat distressed, frequently touching her abdomen and shifting uncomfortably in her chair. She is cooperative and forthcoming but clearly worried about her cardiac risks without anticoagulation, speaking in a concerned but measured tone about her recent GI bleeding hospitalization.",
    "interviewQuestions": [
      "Can you describe the abdominal pain you're experiencing?",
      "When did this abdominal pain first start?",
      "What does the pain feel like - is it sharp, cramping, or constant?",
      "Where exactly is the pain located and does it spread anywhere?",
      "On a scale of 1-10, how severe is your pain right now?",
      "Have you had any nausea, vomiting, or changes in bowel movements?",
      "When was your last bowel movement and what did it look like?",
      "Have you noticed any blood in your stool recently?",
      "When did you stop taking your blood thinner and why?",
      "Have you had any chest pain, shortness of breath, or palpitations?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Have you had severe abdominal pain like this before?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm having trouble focusing because of this pain in my belly.",
      "onset": "The pain started about 6 hours ago, maybe around 2 AM. It woke me up from sleep and has been getting worse since then.",
      "character": "It's a terrible cramping pain that comes in waves, but there's also this constant deep aching that won't go away. It's unlike anything I've felt before.",
      "location": "The pain is mostly around my belly button and upper abdomen, but it seems to spread across my whole stomach area.",
      "severity": "Right now it's about an 8 out of 10. I can barely sit still and it's making me feel sick to my stomach.",
      "aggravating": "Any movement makes it worse, and I think eating something earlier today made it much more intense.",
      "relieving": "Nothing seems to help. I tried some antacids and changing positions, but the pain just keeps getting worse.",
      "associated": "I've been feeling nauseous and I vomited twice this morning. I also feel like I need to have a bowel movement but nothing comes out when I try.",
      "denies": "No chest pain or trouble breathing right now. No blood in my vomit. No fever that I've noticed.",
      "history": "I've never had abdominal pain this severe before. My recent stomach bleeding was different - more like burning pain up high, not this cramping.",
      "medications": "Apixaban 5mg BID; Metoprolol Succinate 50mg daily; Amlodipine 10mg daily; Losartan 100mg daily; Chlorthalidone 12.5mg daily; Metformin 500mg BID; Pantoprazole 40mg BID; Atorvastatin 40mg QHS",
      "allergies": "Sulfa drugs (Trimethoprim-Sulfamethoxazole)",
      "family": "My father had a stroke and my sister has had blood clots, so I worry about my circulation. My mother had heart problems too.",
      "social": "I'm a retired postal worker, been widowed since 2016. I've never smoked and don't drink alcohol. I live alone but my daughter checks on me."
    },
    "examManeuvers": [
      "Abdominal inspection",
      "Abdominal auscultation for bowel sounds",
      "Abdominal palpation - light and deep",
      "Assessment for abdominal distension",
      "Percussion of abdomen",
      "Assessment for rebound tenderness and guarding",
      "Rectal examination",
      "Assessment of peripheral pulses",
      "Cardiac auscultation",
      "Vital signs assessment"
    ],
    "examFindings": {
      "Abdominal inspection": "Abdomen appears mildly distended with patient guarding and appearing uncomfortable",
      "Abdominal auscultation for bowel sounds": "Bowel sounds are hypoactive to absent, particularly in the periumbilical region",
      "Abdominal palpation - light and deep": "Diffuse tenderness with voluntary guarding, most pronounced in periumbilical and epigastric regions, no obvious masses",
      "Assessment for abdominal distension": "Mild to moderate abdominal distension present",
      "Percussion of abdomen": "Tympanitic throughout with some areas of dullness",
      "Assessment for rebound tenderness and guarding": "Mild rebound tenderness present, voluntary guarding noted",
      "Rectal examination": "No gross blood, empty rectal vault, guaiac test pending",
      "Assessment of peripheral pulses": "Peripheral pulses palpable but diminished, no obvious peripheral emboli",
      "Cardiac auscultation": "Irregularly irregular rhythm consistent with atrial fibrillation, no murmurs",
      "Vital signs assessment": "BP 146/84, HR 88 irregular, temp 98.2°F, SpO2 95%, patient appears uncomfortable"
    },
    "ddxTargets": [
      "Acute Superior Mesenteric Artery Embolism (correct diagnosis)",
      "Acute mesenteric ischemia (thrombotic)",
      "Small bowel obstruction",
      "Acute mesenteric venous thrombosis",
      "Ruptured abdominal aortic aneurysm",
      "Acute pancreatitis",
      "Peptic ulcer disease with complications"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on recent GI bleeding history and focusing only on peptic ulcer complications while missing acute mesenteric ischemia",
      "prematureClosure": "May prematurely close on common causes like bowel obstruction without considering embolic events in this high-risk AF patient off anticoagulation",
      "availabilityBias": "Recent experience with GI bleeding patients may bias toward gastric/duodenal pathology rather than vascular emergencies"
    },
    "coachPrompts": {
      "phase2": "This 76-year-old patient has multiple cardiovascular risk factors and was recently off anticoagulation. As you prepare to interview her, what high-risk vascular conditions should you keep in mind given her cardiac history and current presentation?",
      "phase5": "You've identified severe abdominal pain with hypoactive bowel sounds in a patient with atrial fibrillation who recently stopped anticoagulation. What does the combination of her cardiac rhythm, recent medication changes, and current presentation suggest about potential embolic complications?",
      "finalDebrief": "This case illustrates how a patient's medication history and underlying cardiac conditions create windows of vulnerability. Dorothy's recent discontinuation of anticoagulation for GI bleeding created the perfect setup for arterial embolism. How did the constellation of atrial fibrillation, severe abdominal pain, and hypoactive bowel sounds point toward mesenteric ischemia rather than more common abdominal pathology?"
    }
  }
};
