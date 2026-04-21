// Virtual EMR Case: Uremic Encephalopathy (Missed Dialysis in Non-Adherent ESRD Patient)
// Variant: uremic-encephalopathy | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Harold Jenkins",
    "patientHPI": "My car broke down two weeks ago and I can't afford to fix it, so I've missed some of my kidney treatments. I know I shouldn't skip them, but sometimes I just forget what day it is. Lately I've been feeling really short of breath and my legs are getting swollen again.",
    "dob": "11/14/1960",
    "age": 65,
    "sex": "Male",
    "mrn": "RDX-2025-43692",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B + Medicaid (Dual Eligible)",
    "pcp": "Dr. Catherine Brennan, MD",
    "pharmacy": "Walgreens — 1620 S Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black (African American)",
    "address": "3121 Cottonwood Ave, Denver, CO 80203",
    "phone": "(954) 555-4578",
    "email": "",
    "emergencyContact": {
      "name": "Diane Jenkins (Ex-wife)",
      "phone": "(954) 555-4592"
    }
  },
  "problems": [
    {
      "problem": "End-Stage Renal Disease — on Hemodialysis",
      "icd": "N18.6",
      "onset": "2022",
      "status": "Active",
      "notes": "Etiology: Hypertensive nephrosclerosis and diabetic nephropathy; HD via left AV fistula (created 2021, matured); dialysis schedule: TThSa at DaVita Ft Lauderdale; frequently misses sessions — transportation barriers and non-adherence; missed 4 of last 6 sessions"
    },
    {
      "problem": "Type 2 Diabetes Mellitus — With CKD",
      "icd": "E11.22",
      "onset": "2000",
      "status": "Active",
      "notes": "A1c 8.2; on insulin glargine and lispro; poorly controlled — inconsistent glucose monitoring, dietary non-adherence"
    },
    {
      "problem": "Hypertension — Resistant",
      "icd": "I10",
      "onset": "1995",
      "status": "Active",
      "notes": "On 4-drug regimen; BP often uncontrolled (170-190s systolic) especially when missing dialysis; target dry weight 82 kg"
    },
    {
      "problem": "Congestive Heart Failure — HFrEF",
      "icd": "I50.22",
      "onset": "2020",
      "status": "Active",
      "notes": "EF 35% (echo 08/2025); ischemic cardiomyopathy; fluid overload recurrent when missing HD"
    },
    {
      "problem": "Coronary Artery Disease",
      "icd": "I25.10",
      "onset": "2018",
      "status": "Active",
      "notes": "PCI with DES to LAD 2018; on aspirin and atorvastatin; stress test 2024 showed no ischemia"
    },
    {
      "problem": "Peripheral Neuropathy — Diabetic",
      "icd": "E11.42",
      "onset": "2016",
      "status": "Active",
      "notes": "On gabapentin; bilateral feet — numbness and burning"
    },
    {
      "problem": "Secondary Hyperparathyroidism",
      "icd": "N25.81",
      "onset": "2023",
      "status": "Active",
      "notes": "PTH 380 (last check 10/2025); on sevelamer and calcitriol; non-adherent with phosphorus binders"
    }
  ],
  "medications": [
    {
      "name": "Insulin Glargine 28 units SQ QHS",
      "sig": "Inject 28 units subcutaneously at bedtime",
      "prescriber": "Dr. Brennan",
      "start": "04/2016",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Insulin Lispro Sliding Scale with meals",
      "sig": "Inject per sliding scale subcutaneously before meals",
      "prescriber": "Dr. Brennan",
      "start": "04/2016",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "06/2004",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Carvedilol 25mg BID",
      "sig": "Take 1 tablet by mouth twice daily with food",
      "prescriber": "Dr. Brennan",
      "start": "09/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Hydralazine 50mg TID",
      "sig": "Take 1 tablet by mouth three times daily",
      "prescriber": "Dr. Brennan",
      "start": "01/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Clonidine 0.2mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Brennan",
      "start": "06/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "08/2018",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Brennan",
      "start": "08/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Gabapentin 300mg TID (dialysis adjusted)",
      "sig": "Take 1 capsule by mouth three times daily (supplemental dose after dialysis)",
      "prescriber": "Dr. Brennan",
      "start": "03/2017",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Sevelamer 800mg TID with meals",
      "sig": "Take 1 tablet by mouth three times daily with meals",
      "prescriber": "Dr. Patel (Nephrology)",
      "start": "06/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Calcitriol 0.25mcg daily",
      "sig": "Take 1 capsule by mouth once daily",
      "prescriber": "Dr. Patel (Nephrology)",
      "start": "09/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Epoetin Alfa (given at dialysis)",
      "sig": "Administered IV during hemodialysis sessions per protocol",
      "prescriber": "Dr. Patel (Nephrology)",
      "start": "01/2023",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE Inhibitors (class)",
      "type": "Drug",
      "reaction": "Angioedema — lip and tongue swelling (lisinopril, 2010)",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "IV Contrast (iodinated)",
      "type": "Drug",
      "reaction": "Anaphylactoid reaction — hives, throat tightness (2018 cardiac cath)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/25/2026",
      "bp": "198/108",
      "hr": 94,
      "rr": 22,
      "temp": "97.8°F",
      "spo2": "92%",
      "wt": "196 lbs",
      "ht": "5'10\"",
      "bmi": 28.1,
      "setting": "ED"
    },
    {
      "date": "10/14/2025",
      "bp": "168/94",
      "hr": 82,
      "rr": 18,
      "temp": "98.2°F",
      "spo2": "95%",
      "wt": "186 lbs",
      "ht": "5'10\"",
      "bmi": 26.7,
      "setting": "Nephrology Office"
    },
    {
      "date": "06/10/2025",
      "bp": "154/88",
      "hr": 78,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "182 lbs",
      "ht": "5'10\"",
      "bmi": 26.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/14/2025",
      "type": "Specialist",
      "provider": "Dr. Rajesh Patel, MD (Nephrology)",
      "cc": "Missed dialysis sessions, fluid overload, uncontrolled BP",
      "hpi": "65M with ESRD on HD (TThSa) presents to nephrology clinic after DaVita reported 3 missed sessions in 2 weeks. Patient reports missing sessions due to transportation issues — his car broke down and he can't afford repair. Also admits to 'forgetting' on one occasion. Reports increasing SOB, bilateral leg swelling, and 4 lb weight gain above target dry weight. Currently 186 lbs (dry weight target 180 lbs). Reports eating 'whatever he wants' — not following low-K, low-phos diet. Notes his phosphorus binder pills are 'too big' and he often skips them.",
      "exam": "Chronically ill-appearing male. BP 168/94. CV: Irregularly irregular (chronic AFib), S3 gallop. JVP elevated ~12 cm. Lungs: Bibasilar crackles. Abdomen: Soft, dialysis catheter site — N/A (fistula patient). Left AV fistula: Palpable thrill, audible bruit. Ext: 2+ pitting edema bilateral LE to mid-shin. Skin: Excoriations from pruritus. Neuro: A&O x3; no asterixis.",
      "assessment": "1. ESRD — non-adherent with HD schedule (transportation + motivation barriers)\n2. Volume overload — above dry weight; symptomatic\n3. Resistant HTN — uncontrolled; exacerbated by volume overload\n4. HFrEF — volume-dependent decompensation\n5. Secondary hyperparathyroidism — non-adherent with binders\n6. Uremic pruritus — symptomatic",
      "plan": "1. Counseled extensively on life-threatening risks of missing dialysis\n2. Social work referral for Medicaid transportation assistance\n3. Extra dialysis session this week to address volume overload\n4. Reviewed diet — low potassium, low phosphorus, fluid restriction <1.5L/day\n5. Switch sevelamer to lanthanum carbonate (chewable — may improve adherence)\n6. Recheck labs post-dialysis\n7. Return 2 weeks; ED if confusion, chest pain, or severe SOB"
    },
    {
      "id": "V002",
      "date": "06/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Catherine Brennan, MD",
      "cc": "Routine follow-up, DM management, medication refills",
      "hpi": "64M with ESRD, DM, HTN, HFrEF presents for routine PCP follow-up. A1c 8.2 — above goal. Reports inconsistent glucose monitoring ('I check sometimes'). Dialysis adherence improved for past 2 months per DaVita records. BP 154/88 today — above target. No chest pain or significant SOB.",
      "exam": "Chronically ill male. CV: Irregular rhythm, no S3 today. Lungs: CTAB. Ext: Trace edema. Left AV fistula: Functional.",
      "assessment": "1. DM — poorly controlled; A1c 8.2\n2. HTN — above target\n3. ESRD — adherent recently\n4. HFrEF — compensated today",
      "plan": "1. Increase insulin glargine 28 to 30 units\n2. Dietary re-education (diabetes + renal diet)\n3. Continue current antihypertensives\n4. Echo scheduled for reassessment\n5. Return 3 months"
    }
  ],
  "labs": [
    {
      "date": "10/14/2025",
      "time": "08:00",
      "orderedBy": "Dr. Patel",
      "collected": "10/14/2025 08:15",
      "facility": "DaVita Ft Lauderdale Dialysis Center",
      "accession": "LAB-2025-851014",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
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
              "value": "82",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "10.4",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Sodium",
              "value": "134",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "5.8",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": "H"
            },
            {
              "test": "CO2",
              "value": "18",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": "L"
            },
            {
              "test": "Calcium",
              "value": "8.2",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": "L"
            },
            {
              "test": "Phosphorus",
              "value": "7.8",
              "unit": "mg/dL",
              "range": "2.5-4.5",
              "flag": "H"
            },
            {
              "test": "Albumin",
              "value": "3.0",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "7.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "9.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "28.0",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "178",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "ADDITIONAL LABS",
          "results": [
            {
              "test": "PTH (Intact)",
              "value": "380",
              "unit": "pg/mL",
              "range": "15-65",
              "flag": "H"
            },
            {
              "test": "HbA1c",
              "value": "8.2",
              "unit": "%",
              "range": "<5.7",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "08/2025",
      "study": "ECHOCARDIOGRAM — TRANSTHORACIC",
      "accession": "IMG-2025-80812",
      "status": "FINAL",
      "orderedBy": "Dr. Brennan",
      "readBy": "Dr. Anil Patel, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "HFrEF — interval assessment; ESRD on dialysis",
      "technique": "Complete 2D and Doppler echocardiogram with tissue Doppler imaging.",
      "findings": "Left ventricle: Dilated (LVEDD 6.2 cm). Global hypokinesis. EF 35% (reduced — unchanged from prior). Concentric LVH.\n\nRight ventricle: Mildly dilated. TAPSE 1.6 cm (borderline reduced).\n\nMitral valve: Moderate mitral regurgitation (functional — due to LV dilation).\n\nTricuspid valve: Mild TR. Estimated RVSP 48 mmHg (mildly elevated).\n\nPericardium: Small pericardial effusion (new — 0.6 cm posterior).\n\nIVC: Dilated (2.6 cm) with <50% respiratory variation — elevated RA pressure.",
      "impression": "1. EF 35% — unchanged from prior (01/2024).\n2. Dilated LV with global hypokinesis.\n3. Moderate functional MR.\n4. Elevated RA pressure (dilated IVC).\n5. Small pericardial effusion — new; may be uremic; recommend clinical correlation.\n6. Mildly elevated RVSP (48 mmHg).",
      "dictated": "08/12/2025 11:00",
      "verified": "08/12/2025 14:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-9720",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Moderna)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2718",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "03/2023",
      "site": "Left deltoid IM",
      "lot": "PV20-612",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Hepatitis B Series (high-dose — Heplisav-B)",
      "date": "2022",
      "site": "Right deltoid IM",
      "lot": "HB22-408",
      "mfr": "Dynavax"
    },
    {
      "vaccine": "Tdap",
      "date": "06/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-388",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: HTN, CKD (non-dialysis), deceased at 68 (stroke)",
    "Mother: T2DM, HTN, deceased at 74 (MI)",
    "Brother: T2DM, ESRD on dialysis, alive at 62",
    "Sister: HTN, alive at 60"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Disabled; formerly worked as bus driver for Broward County Transit; on SSDI since 2022"
    ],
    [
      "Marital",
      "Divorced (2015); lives alone; ex-wife still involved as emergency contact"
    ],
    [
      "Tobacco",
      "Former — 20 pack-years; quit 2018 (after PCI)"
    ],
    [
      "Alcohol",
      "Denies current use; prior social drinking"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Very limited — deconditioned; walks to mailbox; fatigues easily"
    ],
    [
      "Housing",
      "Section 8 apartment; ground floor; no car (broken); relies on Medicaid transportation for dialysis — frequently unreliable"
    ],
    [
      "Safety",
      "Fall risk; no firearms; limited social support"
    ],
    [
      "Advance Directive",
      "Living will completed; DNR per patient preference; DPOA designated (ex-wife Diane)"
    ]
  ],
  "meta": {
    "caseId": "uremic-encephalopathy",
    "diagnosis": "Uremic Encephalopathy from Missed Dialysis (ESRD)",
    "acuity": 2,
    "presentation": "Toxicologic Emergency",
    "category": "renal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Harold Jenkins is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did toxicologic emergency start?",
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
      "onset": "'The symptoms started My car broke down two weeks ago and I can't afford to fix it, so I've missed som.'",
      "character": "'It's toxicologic emergency — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Uremic Encephalopathy.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Insulin Glargine 28 units SQ QHS; Insulin Lispro Sliding Scale with meals; Amlodipine 10mg daily; Carvedilol 25mg BID; Hydralazine 50mg TID; Clonidine 0.2mg BID; Aspirin 81mg daily; Atorvastatin 40mg QHS.'",
      "allergies": "'My allergies are ACE Inhibitors (class), IV Contrast (iodinated).'",
      "family": "Father: HTN, CKD (non-dialysis), deceased at 68 (stroke)  Mother: T2DM, HTN, deceased at 74 (MI)  Brother: T2DM, ESRD on dialysis, alive at 62",
      "social": "Occupation: Disabled; formerly worked as bus driver for Broward County Transit; on SSDI since 2022  Marital: Divorced (2015); lives alone; ex-wife still involved as emergency contact  Tobacco: Former — 20 pack-years; quit 2018 (after PCI)  Alcohol: Denies current use; prior social drinking  Drugs: Denies"
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
      "General appearance and level of distress": "Clinical finding consistent with Uremic Encephalopathy. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Uremic Encephalopathy. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Uremic Encephalopathy. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Uremic Encephalopathy. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Uremic Encephalopathy. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Uremic Encephalopathy. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Uremic Encephalopathy. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Uremic Encephalopathy. Document specifically what you observe."
    },
    "ddxTargets": [
      "Uremic Encephalopathy (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Uremic Encephalopathy, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Uremic Encephalopathy, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Uremic Encephalopathy based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Harold Jenkins's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Uremic Encephalopathy (Missed Dialysis x4 Sessions — ESRD with BUN >120, Hyperkalemia 6.8, Metabolic Acidosis, Volume Overload, Uremic Pericarditis, AMS with Asterixis in Non-Adherent HD Patient with Transportation Barriers). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: uremic encephalopathy from missed dialysis (×4 sessions) in ESRD, with BUN >120, hyperkalemia, metabolic acidosis, volume overload, uremic pericarditis, and altered mental status with asterixis. Key learning: (1) Uremic encephalopathy is a neurologic manifestation of advanced renal failure, caused by accumulation of uremic toxins (urea, guanidinosuccinic acid, middle molecules, parathyroid hormone, and others) that affect synaptic function, neurotransmission, and cerebral metabolism. Develops subacutely over days as BUN rises, typically at BUN >100 but highly variable between patients — some tolerate higher levels while rapid rises cause symptoms at lower numbers. (2) Clinical presentation is a continuum. Early: fatigue, anorexia, nausea, difficulty concentrating, sleep disturbance, mild cognitive impairment. Intermediate: ASTERIXIS ('liver flap' — non-rhythmic flapping of outstretched hands, also seen in hepatic encephalopathy and CO2 retention), mild confusion, slurred speech, tremor, myoclonus. Late: obtundation, coma, seizures (generalized tonic-clonic), muscle twitching, and death. Other uremic manifestations: pericarditis (friction rub, chest pain, hemorrhagic effusion, tamponade), uremic bleeding diathesis (platelet dysfunction), bleeding ulcers, peripheral neuropathy, and uremic frost (rare). (3) Workup — the diagnosis is clinical once other causes are excluded. Labs: BUN, creatinine (markedly elevated from baseline), electrolytes (hyperkalemia, hyperphosphatemia, hypocalcemia, acidosis), calcium, magnesium, glucose, ammonia (to rule out hepatic encephalopathy), LFTs, CBC. Rule out other causes of altered mental status: medications (especially renally cleared drugs accumulating — opioids, gabapentin, baclofen, beta-blockers), infections, electrolyte derangements, hypoxia, hypoglycemia, intracranial pathology (CT head when in doubt), drug overdose or withdrawal. ECG for hyperkalemia changes, pericarditis (diffuse PR depression, ST elevation). (4) Management. (a) EMERGENT HEMODIALYSIS is the definitive treatment — rapidly clears uremic toxins, corrects hyperkalemia, acidosis, and volume overload. Use caution with rate of dialysis to avoid dialysis disequilibrium syndrome (DDS) — cerebral edema from osmotic shifts when dialysis is done too aggressively; use short, frequent sessions initially in severe uremia. (b) Treat hyperkalemia per standard algorithm (calcium for membrane stabilization if ECG changes, insulin/dextrose, albuterol, bicarbonate, binders, ultimately dialysis). (c) Volume management — usually volume overloaded; dialysis removes fluid. (d) Uremic pericarditis — an indication for intensification of dialysis; large pericardial effusion with tamponade requires pericardiocentesis. Heparin should be avoided during dialysis in uremic pericarditis (hemorrhagic transformation risk). (e) Identify and address cause of missed dialysis: transportation, psychosocial, financial, depression, substance use. (f) Address comorbid conditions: medication reconciliation (renal dose adjustments), infection screen, nutritional optimization. (5) Long-term. Patient education and support for dialysis adherence — social work, case management, transportation resources. Home dialysis alternatives (peritoneal dialysis, home hemodialysis) may improve adherence and outcomes. Transplant evaluation for appropriate candidates. Advance care planning in patients with multiple complications, poor quality of life, or expressed preferences. Classic pitfalls: (a) dialyzing too quickly in severe uremia and causing dialysis disequilibrium syndrome — use shorter, more frequent sessions initially. (b) Missing another cause of altered mental status in an ESRD patient — ESRD patients have higher rates of stroke, subdural hematoma (from uremic bleeding and falls), and medication toxicity. (c) Attributing mental status changes to uremia in a patient with BUN of only 60 — likely another cause. (d) Giving renally cleared drugs at full dose — gabapentin, opioids (especially morphine), metformin, and many others accumulate in renal failure. (e) Forgetting uremic pericarditis — requires intensification of dialysis, not just standard management; anticoagulation during dialysis is often avoided or reduced."
    }
  }
};
