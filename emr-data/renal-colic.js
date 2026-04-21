
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
    "diagnosis": "Renal Colic from Nephrolithiasis",
    "acuity": 3,
    "presentation": "Abdominal Pain",
    "category": "renal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Brian appears visibly uncomfortable, shifting positions frequently and grimacing with pain. He's cooperative but clearly distressed, speaking in short sentences between waves of severe pain. He's forthcoming about his symptoms and very familiar with his recurrent kidney stone episodes.",
    "interviewQuestions": [
      "Can you describe when this pain started?",
      "What does the pain feel like?",
      "Where exactly is the pain located?",
      "On a scale of 1-10, how severe is your pain?",
      "Does the pain move or radiate anywhere?",
      "What makes the pain worse?",
      "Is there anything that helps the pain?",
      "Have you had any nausea or vomiting?",
      "Have you noticed any changes in your urine?",
      "Have you had episodes like this before?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Any fever or chills?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing on anything other than this pain right now. Can you repeat that?",
      "onset": "The pain started about 3 hours ago while I was at work. It came on suddenly - one minute I was fine, the next minute I was doubled over.",
      "character": "It's excruciating, like someone is stabbing me with a knife and twisting it. It comes in waves but never completely goes away.",
      "location": "It started in my right side, in my back below my ribs, and now it's radiating around to my groin and right testicle.",
      "severity": "Right now it's a 9 out of 10. Even sitting still it's at least a 7, but when the waves hit it's definitely a 9. I can barely function.",
      "aggravating": "Moving makes it worse, especially bending or twisting. Even bumps in the car on the way here were terrible.",
      "relieving": "Nothing really helps. I tried changing positions, walking around, sitting still - nothing. The heat pad at home gave maybe slight relief.",
      "associated": "I've been nauseous and threw up twice. My urine looked a little pink this morning, and I feel like I need to urinate frequently but not much comes out.",
      "denies": "No fever or chills. No burning when I urinate. No chest pain or shortness of breath. No abdominal bloating.",
      "history": "Oh yes, I've had kidney stones multiple times over the past 10 years. This feels exactly like my previous episodes. Last one was about 18 months ago.",
      "medications": "Lisinopril 20mg daily; Allopurinol 300mg daily; Potassium Citrate 10mEq TID; Omeprazole 20mg daily; Hydrochlorothiazide 25mg daily",
      "allergies": "Ketorolac, Sulfa Drugs",
      "family": "My father has had kidney stones too, multiple times. He's had several procedures to break them up over the years.",
      "social": "I'm an IT project manager, so I sit a lot. I'm married with two kids. I quit smoking about 8 years ago. I drink maybe 4-6 beers a week, no drugs."
    },
    "examManeuvers": [
      "Costovertebral angle tenderness",
      "Abdominal palpation",
      "Murphy's punch sign",
      "Rovsing's sign",
      "McBurney's point tenderness",
      "Psoas sign",
      "Obturator sign",
      "Rebound tenderness",
      "Testicular examination",
      "Straight leg raise test"
    ],
    "examFindings": {
      "Costovertebral angle tenderness": "Severe right CVA tenderness with gentle percussion, patient winces and pulls away",
      "Abdominal palpation": "Soft, non-distended abdomen with mild right lower quadrant tenderness, no masses, normal bowel sounds",
      "Murphy's punch sign": "Positive on the right - patient experiences severe pain with gentle fist percussion over right flank",
      "Rovsing's sign": "Negative - no right lower quadrant pain with left lower quadrant palpation",
      "McBurney's point tenderness": "Absent - no focal tenderness at McBurney's point",
      "Psoas sign": "Negative - no increased pain with right hip flexion against resistance",
      "Obturator sign": "Negative - no pain with internal rotation of flexed right hip",
      "Rebound tenderness": "Absent - no rebound tenderness throughout abdomen",
      "Testicular examination": "Normal bilateral testicular size and consistency, no masses, mild right-sided referred tenderness",
      "Straight leg raise test": "Negative bilaterally - no radicular pain"
    },
    "ddxTargets": [
      "Renal Colic (Nephrolithiasis) (correct diagnosis)",
      "Pyelonephritis",
      "Appendicitis",
      "Abdominal Aortic Aneurysm",
      "Testicular Torsion",
      "Cholecystitis",
      "Musculoskeletal Back Pain"
    ],
    "biasFlags": {
      "anchoring": "Strong history of recurrent nephrolithiasis may cause early anchoring on kidney stones without considering other serious causes of acute flank pain",
      "prematureClosure": "Classic presentation and known history might lead to ordering imaging without thorough consideration of other differential diagnoses",
      "availabilityBias": "Recent cases of kidney stones or common conditions like back pain might influence diagnostic thinking over less common but serious conditions"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, I see you're considering several possibilities. Given this patient's presentation of acute severe flank pain, which conditions would be most critical to rule out immediately? What historical features would help you distinguish between your top differentials?",
      "phase5": "Now that you've completed your history and physical exam, how do your findings support or refute each item on your differential diagnosis? The patient has a strong history of nephrolithiasis, but what other serious conditions could present similarly? What's your next step in evaluation?",
      "finalDebrief": "This case illustrates how a strong prior history can both help and potentially mislead us. While this patient's recurrent nephrolithiasis history and classic presentation made renal colic the leading diagnosis, it was important to consider other serious causes like AAA or testicular torsion. How did the physical exam findings, particularly the CVA tenderness and absence of peritoneal signs, help narrow your differential?",
      "final": "Diagnosis: renal colic from ureteral stone (nephrolithiasis). Key learning: (1) Nephrolithiasis is common (lifetime prevalence 10-15%, higher in men, recurrence rate 50% in 5-10 years). Stone composition: calcium oxalate (most common, 70-80%), calcium phosphate, uric acid (radiolucent on X-ray, acidic urine, hyperuricemia, gout), struvite (infection stones — staghorn calculi with urease-producing bacteria like Proteus, Klebsiella), and cystine (rare, genetic). Clinical presentation: sudden severe flank pain radiating to groin, nausea/vomiting, hematuria (gross or microscopic), dysuria, urinary frequency, and restlessness ('writhing pain' is classic — contrast with peritonitis where patients lie still). (2) Workup. Non-contrast CT abdomen/pelvis (low-dose CT protocol) is the gold standard — identifies stones, characterizes size and location, and assesses for obstruction, hydronephrosis, and complications. Ultrasound is a radiation-free first-line option, particularly for pregnancy and recurrent stone formers — identifies hydronephrosis but less sensitive for small or ureteral stones. Labs: urinalysis (hematuria, leukocytes/nitrites suggest infection), urine culture, CBC (leukocytosis suggests infection), BMP (renal function), calcium, uric acid. Stone straining to collect the passed stone for analysis guides prevention. (3) Management of acute colic. Pain control: NSAIDs (ketorolac IV, ibuprofen PO) are first-line and more effective than opioids for colic when renal function allows; IV acetaminophen is an alternative; opioids (morphine, hydromorphone) for refractory pain. IV hydration as needed — excessive fluid forcing does NOT help stone passage. Antiemetics for nausea/vomiting. Medical expulsive therapy with alpha-blockers (tamsulosin 0.4 mg daily) for distal ureteral stones 5-10 mm — modest benefit for spontaneous passage; not beneficial for smaller stones. (4) Indications for urologic intervention. Size and location drive urgency: (a) Stones <5 mm: ~90% pass spontaneously, outpatient pain management. (b) Stones 5-10 mm: ~50% pass; tamsulosin helpful; prolonged observation reasonable if uncomplicated. (c) Stones >10 mm: unlikely to pass spontaneously, plan urologic intervention. Urgent/emergent urology consultation and decompression (ureteral stent or percutaneous nephrostomy) for: - Urosepsis or infected hydronephrosis (MEDICAL EMERGENCY — high mortality without decompression). - Solitary kidney with obstruction. - Bilateral obstruction with AKI. - Intractable pain or vomiting despite analgesia. Definitive treatment once stable: extracorporeal shock wave lithotripsy (ESWL), ureteroscopy with laser lithotripsy, or percutaneous nephrolithotomy (PCNL) for large/staghorn calculi. (5) Long-term prevention. Hydration: target urine output >2-2.5 L/day to reduce recurrence. 24-hour urine collection for metabolic workup in recurrent stone formers, pediatric cases, or those with metabolic risk factors — measures calcium, oxalate, citrate, uric acid, sodium, magnesium, creatinine, volume. Dietary: normal calcium intake (do NOT restrict — paradoxically increases oxalate absorption), reduce sodium (lowers urinary calcium), reduce animal protein (lowers urinary calcium and oxalate, raises citrate), reduce oxalate-rich foods in hyperoxaluria (spinach, nuts, tea, chocolate). Pharmacologic: thiazide for hypercalciuria (reduces urinary calcium); potassium citrate for hypocitraturia and uric acid stones; allopurinol for hyperuricosuric calcium stones; urinary alkalinization for uric acid and cystine stones. Classic pitfalls: (a) missing INFECTED OBSTRUCTED STONE — fever plus flank pain plus hydronephrosis is pyonephrosis until proven otherwise; needs IV antibiotics AND emergent urologic decompression; delay can cause septic shock and death. (b) Attributing flank pain to 'stone' without imaging — miss dissecting AAA (especially in elderly men with vasculopathic risk), pyelonephritis, appendicitis, ovarian pathology. (c) Over-hydrating — does not speed passage, can worsen pain. (d) Forgetting metabolic workup in recurrent stone formers — missed opportunity for prevention."
    }
  }
};
