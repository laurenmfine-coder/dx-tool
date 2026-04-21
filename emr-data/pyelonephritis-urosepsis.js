
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
    "diagnosis": "Acute Pyelonephritis with Urosepsis (E. coli) Complicated by Neurogenic Bladder",
    "acuity": 2,
    "presentation": "Fever/Sepsis",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Hazel appears mildly confused and disoriented, frequently pausing mid-sentence and asking for questions to be repeated. She seems frustrated by her mental fogginess but remains cooperative, though her responses are sometimes delayed or incomplete.",
    "interviewQuestions": [
      "Can you tell me about the confusion you've been experiencing?",
      "When did you first notice feeling confused or different mentally?",
      "Have you had any fever, chills, or feeling hot?",
      "Are you having any pain or burning when you urinate?",
      "How often are you urinating, and what does your urine look like?",
      "Have you had any nausea, vomiting, or loss of appetite?",
      "Are you having any back pain or flank pain?",
      "How has your self-catheterization routine been going lately?",
      "When was your last urinary tract infection and how was it treated?",
      "Have you been taking all your medications as prescribed?",
      "Have you had any falls or injuries recently?",
      "Are you eating and drinking normally?",
      "Have you noticed any changes in your energy level or weakness?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? My mind feels a bit foggy today and I'm having trouble concentrating.",
      "onset": "The confusion started about 2-3 days ago. My daughter noticed I was repeating myself and seemed 'off.' I've been feeling more tired than usual too.",
      "character": "It's like my brain is in a fog. I'll start to say something and forget what I was talking about. I feel spacey and not quite myself.",
      "location": "The confusion is just... everywhere in my head. I also have some aching in my lower back, but that might be my usual arthritis.",
      "severity": "The confusion is maybe a 6 out of 10 - it's really bothering me and my daughter. The back discomfort is about a 4 out of 10.",
      "aggravating": "I think I feel more confused when I'm tired. Standing for too long makes my back ache more.",
      "relieving": "Sitting down helps my back a little. Nothing really helps the mental fog - it's just there.",
      "associated": "I've been feeling weak and tired. Not really hungry either. I think I might have had some chills yesterday but no real fever that I noticed.",
      "denies": "No chest pain, no shortness of breath, no headache. No recent falls or injuries.",
      "history": "I've had several UTIs - just had one in September treated with cephalexin, and another in June. My doctor says my bladder doesn't empty completely.",
      "medications": "Metformin 500mg BID; Sitagliptin 100mg daily; Apixaban 5mg BID; Metoprolol Succinate 50mg daily; Amlodipine 5mg daily; Vaginal Estradiol Cream 0.01% — 2x/week; Acetaminophen 500mg TID PRN",
      "allergies": "Nitrofurantoin, Fluoroquinolones (Ciprofloxacin)",
      "family": "My mother had lots of bladder infections like me, and my sister has diabetes and kidney stones. Mother also had breast cancer.",
      "social": "I'm a retired school administrator, been widowed since 2020. I've never smoked and don't drink alcohol."
    },
    "examManeuvers": [
      "General appearance and mental status",
      "Vital signs including orthostatic measurements",
      "Costovertebral angle tenderness",
      "Abdominal examination",
      "Suprapubic palpation",
      "Neurological screening exam",
      "Skin examination for signs of dehydration",
      "Heart and lung examination",
      "Lower extremity edema assessment"
    ],
    "examFindings": {
      "General appearance and mental status": "Appears mildly ill, periodically confused and disoriented to time, but oriented to person and place. Delayed responses to questions.",
      "Vital signs including orthostatic measurements": "BP 132/76, HR 72, Temp 98.2°F, SpO2 97%. Mild orthostatic changes with HR increase of 15 bpm on standing.",
      "Costovertebral angle tenderness": "Moderate tenderness to percussion over right CVA, mild tenderness over left CVA.",
      "Abdominal examination": "Soft, non-distended, mild tenderness in suprapubic region, no guarding or rebound.",
      "Suprapubic palpation": "Mild fullness and tenderness over bladder region consistent with incomplete emptying.",
      "Neurological screening exam": "Mild cognitive impairment with attention deficits, otherwise grossly normal strength and sensation.",
      "Skin examination for signs of dehydration": "Mild decreased skin turgor, dry mucous membranes suggesting mild dehydration.",
      "Heart and lung examination": "Irregular rhythm consistent with known atrial fibrillation, lungs clear to auscultation.",
      "Lower extremity edema assessment": "No peripheral edema, pulses intact."
    },
    "ddxTargets": [
      "Acute Pyelonephritis with Urosepsis (E. coli, Complicated by Neurogenic Bladder and Limited Antibiotic Options) (correct diagnosis)",
      "Complicated Urinary Tract Infection with delirium",
      "Acute cystitis with altered mental status",
      "Urosepsis with septic shock",
      "Bacterial meningitis",
      "Medication-induced delirium or hypoglycemia",
      "Dehydration with electrolyte imbalance"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'routine UTI in elderly woman' and missing the severity of urosepsis, or focusing solely on confusion and missing the urologic source.",
      "prematureClosure": "May prematurely diagnose simple UTI without recognizing systemic involvement and complications from neurogenic bladder and antibiotic limitations.",
      "availabilityBias": "Recent experience with simple UTIs or dementia patients may overshadow recognition of acute pyelonephritis with urosepsis presentation."
    },
    "coachPrompts": {
      "phase2": "Consider this elderly patient presenting with confusion and fever. What are your thoughts about the most concerning causes of acute confusion in an elderly patient? How does her past medical history of recurrent UTIs and neurogenic bladder factor into your differential diagnosis?",
      "phase5": "Now that you've gathered your history and physical exam findings, what do you make of the combination of altered mental status, CVA tenderness, and her complex urologic history? How do her antibiotic allergies complicate her clinical picture?",
      "finalDebrief": "This case demonstrates how urosepsis can present subtly in elderly patients, with confusion often being the primary presenting symptom rather than classic urinary symptoms. Her neurogenic bladder creates a perfect storm for recurrent infections and treatment challenges. How did the antibiotic allergies and recurrent infection history help you recognize this wasn't a simple UTI?",
      "final": "Diagnosis: acute pyelonephritis with urosepsis from E. coli in a patient with neurogenic bladder and limited antibiotic options from prior resistance. Key learning: (1) Pyelonephritis is upper urinary tract infection with kidney involvement. Classic presentation: fever, flank pain, costovertebral angle tenderness, nausea/vomiting, plus lower urinary tract symptoms (dysuria, frequency, urgency). Elderly or immunocompromised patients often present atypically — confusion, falls, generalized weakness, or isolated fever without localizing findings. Urosepsis is pyelonephritis with sepsis physiology; it is the most common source of gram-negative sepsis in older adults. (2) Complicated UTI/pyelonephritis is defined by structural or functional urinary tract abnormality, immunosuppression, or conditions increasing resistance and recurrence risk: male sex, pregnancy, indwelling catheter, nephrolithiasis, diabetes mellitus, obstruction, recent instrumentation, prior antibiotic exposure, and neurogenic bladder. Neurogenic bladder (from spinal cord injury, MS, diabetes, spina bifida) increases risk because incomplete bladder emptying allows bacterial growth, often with multidrug-resistant organisms from repeated antibiotic exposure. (3) Workup. Urinalysis (pyuria, leukocyte esterase, nitrites — nitrites are 100% specific but only 50% sensitive) and urine culture with susceptibility ALWAYS in complicated disease. Blood cultures x2 — positive in 30-50% of pyelonephritis, more in urosepsis. CBC, CMP, lactate (sepsis), CRP, procalcitonin. Imaging if complicated course, suspected obstruction, or failure to improve: renal ultrasound first (identifies hydronephrosis, stones, abscess); CT (more definitive, identifies perinephric abscess, emphysematous pyelonephritis, obstructing stone, pyonephrosis). (4) Treatment. Mild-moderate outpatient: oral fluoroquinolone (ciprofloxacin 500 mg BID x 7 days or levofloxacin 750 mg daily x 5 days, if local resistance <10%); TMP-SMX if susceptible; amoxicillin-clavulanate or cephalosporin as alternatives. Severe inpatient: IV ceftriaxone 1-2 g daily or piperacillin-tazobactam; add vancomycin if MRSA risk or suspected bacteremia. Carbapenems (meropenem, ertapenem) for ESBL-producing organisms or history of resistance. Aminoglycoside (gentamicin) as synergy in sepsis with known susceptibility. Adjust based on culture susceptibilities — narrow spectrum once identified. Treat for 7-14 days total (longer for complicated disease, abscess, or bacteremia). (5) Neurogenic bladder-specific management. Chronic management: intermittent catheterization is preferred over indwelling (lower infection rate), timed voiding, anticholinergics or mirabegron for detrusor overactivity, Botox injections for refractory, sphincterotomy or surgical diversion for select cases. Asymptomatic bacteriuria is the rule in neurogenic bladder — DO NOT treat routinely (selects for resistance). Treat only with true UTI symptoms or prior to urologic surgery. Avoid antibiotic prophylaxis; use methenamine hippurate as a non-antibiotic option in some patients. Classic pitfalls: (a) treating asymptomatic bacteriuria in a neurogenic bladder patient — selects for resistance without benefit; exceptions are pregnancy and pre-urologic procedure. (b) Missing obstruction (stone, stricture) in pyelonephritis not improving after 48-72 hours — imaging and urgent decompression (ureteral stent or percutaneous nephrostomy) are required. (c) Underappreciating emphysematous pyelonephritis in diabetics — gas in renal parenchyma on CT, high mortality, requires prompt surgical drainage or nephrectomy. (d) Not reviewing prior cultures and resistance history before empiric antibiotic choice — leads to treatment failure and worse outcomes. (e) Forgetting infection source control — obstruction needs urgent decompression, abscess may need drainage."
    }
  }
};
