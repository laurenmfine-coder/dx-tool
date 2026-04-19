// Virtual EMR Case: Sepsis with Rigidity
// Variant: sepsis-with-rigidity | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Gloria Espinoza",
    "patientHPI": "My movements have been getting much worse lately - about an hour after I take my pills, I start having these uncontrollable jerky movements in my head and body that last for hours. I've also been falling more often and yesterday I developed a fever and feel really weak and confused.",
    "dob": "08/22/1958",
    "age": 66,
    "sex": "Female",
    "mrn": "RDX-2025-82417",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + Humana Supplement",
    "pcp": "Dr. Jennifer Adams, MD",
    "pharmacy": "Publix Pharmacy — 2400 N University Dr, Pembroke Pines, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latina (Colombian)",
    "address": "9295 Jasmine Way, Kansas City, MO 64123",
    "phone": "(954) 555-3891",
    "email": "g.espinoza58@email.com",
    "emergencyContact": {
      "name": "Carlos Espinoza (Son)",
      "phone": "(954) 555-3894"
    },
    "chiefComplaint": "Fever and severe stiffness"
  },
  "problems": [
    {
      "problem": "Parkinson Disease",
      "icd": "G20",
      "onset": "2018",
      "status": "Active",
      "notes": "Hoehn & Yahr Stage 3; on carbidopa-levodopa + ropinirole; bilateral symptoms with postural instability; movement disorder specialist manages; RECENT MEDICATION CHANGE — carbidopa-levodopa dose reduced 2 weeks ago due to dyskinesias"
    },
    {
      "problem": "Urinary Tract Infection — Recurrent",
      "icd": "N39.0",
      "onset": "2023",
      "status": "Active",
      "notes": "3 UTIs in past 12 months; incomplete bladder emptying related to Parkinson disease"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2010",
      "status": "Active",
      "notes": "On amlodipine; complicated by Parkinson-related orthostatic hypotension"
    },
    {
      "problem": "Osteoporosis",
      "icd": "M81.0",
      "onset": "2020",
      "status": "Active",
      "notes": "T-score -2.8 at lumbar spine; on alendronate and calcium/Vit D"
    },
    {
      "problem": "Dysphagia — Mild",
      "icd": "R13.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Related to Parkinson disease progression; SLP evaluation performed; modified diet with chin-tuck strategy"
    }
  ],
  "medications": [
    {
      "name": "Carbidopa-Levodopa 25/100mg TID",
      "sig": "Take 1 tablet by mouth three times daily (WAS 25/250mg TID — REDUCED 2 WEEKS AGO by Dr. Park due to dyskinesias)",
      "prescriber": "Dr. Park (Movement Disorders)",
      "start": "02/2025 (dose reduction)",
      "refills": 2,
      "status": "Active — RECENTLY DOSE-REDUCED"
    },
    {
      "name": "Ropinirole 4mg TID",
      "sig": "Take 1 tablet by mouth three times daily",
      "prescriber": "Dr. Park (Movement Disorders)",
      "start": "01/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Adams",
      "start": "03/2015",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Alendronate 70mg weekly",
      "sig": "Take 1 tablet by mouth once weekly on empty stomach with 8 oz water; remain upright 30 min",
      "prescriber": "Dr. Adams",
      "start": "06/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Calcium Carbonate 600mg + Vitamin D3 800 IU BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Adams",
      "start": "06/2021",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Metoclopramide",
      "type": "Drug",
      "reaction": "Severe acute dystonic reaction (torticollis) — CONTRAINDICATED in Parkinson disease",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Sulfa drugs (Trimethoprim-Sulfamethoxazole)",
      "type": "Drug",
      "reaction": "Diffuse rash and pruritus",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2025",
      "bp": "88/52",
      "hr": 118,
      "rr": 24,
      "temp": "103.4°F",
      "spo2": "93%",
      "wt": "138 lbs",
      "ht": "5'3\"",
      "bmi": 24.4,
      "setting": "ED"
    },
    {
      "date": "02/10/2025",
      "bp": "132/78",
      "hr": 76,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "97%",
      "wt": "140 lbs",
      "ht": "5'3\"",
      "bmi": 24.8,
      "setting": "Specialist"
    },
    {
      "date": "11/20/2024",
      "bp": "138/82",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "142 lbs",
      "ht": "5'3\"",
      "bmi": 25.2,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/10/2025",
      "type": "Specialist",
      "provider": "Dr. David Park, MD (Movement Disorders/Neurology)",
      "cc": "Parkinson disease management — increasing dyskinesias",
      "hpi": "66-year-old female with Parkinson disease (7 years) presenting with worsening peak-dose dyskinesias on carbidopa-levodopa 25/250mg TID. Involuntary choreoathetoid movements of head and trunk occurring 1-2 hours after each dose. Lasting 1-2 hours. Interfering with daily activities. Falls increasing — 2 in past month. Gait freezing worsening. Sleep disrupted. Son reports she is managing ADLs but needs more assistance.",
      "exam": "Neuro: Masked facies, hypophonic speech. Resting tremor present bilaterally (R>L). Cogwheel rigidity bilateral upper extremities. Bradykinesia on finger tapping. Postural instability — retropulsion on pull test. Gait: shuffling, reduced arm swing, festinating. During exam, intermittent choreiform movements of trunk — peak-dose dyskinesia. UPDRS Motor: 38.",
      "assessment": "1. Parkinson disease — Hoehn & Yahr Stage 3 with peak-dose dyskinesias\n2. Motor fluctuations — wearing-off and dyskinesias\n3. Falls risk — increased",
      "plan": "1. REDUCE carbidopa-levodopa from 25/250mg TID to 25/100mg TID (substantial reduction to address dyskinesias)\n2. Continue ropinirole 4mg TID\n3. Monitor closely for worsening parkinsonism — CALL if significant stiffness, inability to ambulate, or swallowing difficulty\n4. Physical therapy referral for gait/balance\n5. RTC 4 weeks"
    },
    {
      "id": "V002",
      "date": "11/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Adams, MD",
      "cc": "Follow-up: hypertension, osteoporosis, recurrent UTI prevention",
      "hpi": "66-year-old female with Parkinson disease presenting for chronic disease management. BP has been running 130-140s systolic. Reports completing latest course of nitrofurantoin for UTI 3 weeks ago — symptoms resolved. Tolerating alendronate. Having some difficulty swallowing larger pills. No new falls. Managing at home with son's assistance.",
      "exam": "General: Mild parkinsonian facies, pleasant. CV: RRR, no murmur. Lungs: CTA. Abdomen: Soft, mild suprapubic fullness (chronic — incomplete emptying). MSK: Mild kyphosis. Neuro: Bilateral resting tremor, cogwheel rigidity, shuffling gait.",
      "assessment": "1. Hypertension — stable\n2. Osteoporosis — on treatment\n3. Recurrent UTIs — likely related to incomplete bladder emptying\n4. Mild dysphagia — progressive with Parkinson disease",
      "plan": "1. Continue amlodipine 5mg\n2. Continue alendronate + calcium/Vit D\n3. Post-void residual check ordered\n4. SLP referral for swallowing evaluation\n5. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "02/26/2025",
      "time": "11:42",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "collected": "02/26/2025 11:25",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-108417",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "162",
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
              "range": "0.6-1.1",
              "flag": "H"
            },
            {
              "test": "Sodium",
              "value": "144",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.8",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "106",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "19",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": "L"
            },
            {
              "test": "AST (SGOT)",
              "value": "68",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT (SGPT)",
              "value": "48",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC) WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "16.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "11.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "33.6",
              "unit": "%",
              "range": "36-46",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "182",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Neutrophils",
              "value": "86",
              "unit": "%",
              "range": "40-70",
              "flag": "H"
            },
            {
              "test": "Bands",
              "value": "12",
              "unit": "%",
              "range": "0-5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "LACTIC ACID",
          "results": [
            {
              "test": "Lactate",
              "value": "4.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CREATINE KINASE",
          "results": [
            {
              "test": "CK Total",
              "value": "1,420",
              "unit": "U/L",
              "range": "30-135",
              "flag": "H"
            }
          ]
        },
        {
          "name": "PROCALCITONIN",
          "results": [
            {
              "test": "Procalcitonin",
              "value": "8.4",
              "unit": "ng/mL",
              "range": "<0.05",
              "flag": "H"
            }
          ]
        },
        {
          "name": "URINALYSIS WITH CULTURE",
          "results": [
            {
              "test": "Appearance",
              "value": "Cloudy",
              "unit": "",
              "range": "Clear",
              "flag": ""
            },
            {
              "test": "WBC",
              "value": "Too numerous to count",
              "unit": "/HPF",
              "range": "0-5",
              "flag": "H"
            },
            {
              "test": "Bacteria",
              "value": "Many",
              "unit": "",
              "range": "None",
              "flag": "H"
            },
            {
              "test": "Nitrite",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Leukocyte Esterase",
              "value": "3+",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Culture (preliminary)",
              "value": "E. coli — >100,000 CFU/mL",
              "unit": "",
              "range": "No growth",
              "flag": "H"
            }
          ]
        },
        {
          "name": "BLOOD CULTURE",
          "results": [
            {
              "test": "Blood Culture x2",
              "value": "Pending",
              "unit": "",
              "range": "No growth",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-10718",
      "status": "FINAL",
      "orderedBy": "Dr. Emily Torres, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "66-year-old with rigidity, fever, altered mental status — r/o intracranial process, NMS vs sepsis",
      "technique": "Non-contrast axial CT images of the head.",
      "findings": "BRAIN PARENCHYMA: Age-appropriate volume loss. No acute hemorrhage, mass, or territorial infarction.\n\nVENTRICLES: Mild symmetric ventriculomegaly — likely ex vacuo.\n\nEXTRA-AXIAL: No subdural or epidural collection.\n\nBONY STRUCTURES: No fracture.",
      "impression": "1. No acute intracranial pathology\n2. Age-appropriate cerebral volume loss",
      "dictated": "02/26/2025 12:15",
      "verified": "02/26/2025 12:22"
    },
    {
      "date": "02/26/2025",
      "study": "CHEST X-RAY — PA AND LATERAL",
      "accession": "IMG-2025-10720",
      "status": "FINAL",
      "orderedBy": "Dr. Emily Torres, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "Fever, tachycardia, dysphagia — r/o aspiration pneumonia",
      "technique": "PA and lateral chest radiographs.",
      "findings": "LUNGS: Subtle patchy opacity in the right lower lobe posteriorly — could represent early aspiration pneumonia vs atelectasis. No large consolidation. No effusion.\n\nHEART: Normal size. Mild aortic arch calcification.",
      "impression": "1. Subtle right lower lobe opacity — aspiration pneumonitis vs early pneumonia in clinical context\n2. Mild atherosclerotic change",
      "dictated": "02/26/2025 12:20",
      "verified": "02/26/2025 12:28"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL871T",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "PF491K",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "01/2024",
      "site": "Left deltoid IM",
      "lot": "PV312R",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2nd dose)",
      "date": "04/2023",
      "site": "Left deltoid IM",
      "lot": "SH214P",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "11/2020",
      "site": "Right deltoid IM",
      "lot": "TA182K",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Mother (age 88): Alzheimer disease, hypertension",
    "Father: Deceased at 72 — Parkinson disease and complications",
    "Sister (age 63): Essential tremor, hypertension",
    "Brother (age 60): Type 2 Diabetes, CAD",
    "Family history significant for neurodegenerative disease (father with PD, mother with AD)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired — former high school Spanish teacher (35 years)"
    ],
    [
      "Marital",
      "Widowed x 5 years; lives with son Carlos who is primary caregiver"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare — occasional glass of wine with dinner"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "PT exercises at home for balance; walks with rollator in neighborhood when weather permits"
    ],
    [
      "Housing",
      "Lives with son in single-story house; grab bars installed in bathroom; hospital bed rented for bedroom"
    ],
    [
      "Safety",
      "No firearms; medication management by son; falls prevention measures in place; medical alert bracelet worn"
    ],
    [
      "Advance Directive",
      "Healthcare proxy: Carlos Espinoza (son); DNR/DNI NOT in place; full code"
    ]
  ],
  "meta": {
    "caseId": "sepsis-with-rigidity",
    "diagnosis": "Urosepsis with Parkinson-Akinetic Crisis (Dopaminergic Withdrawal) — Confounding Presentation Mimicking NMS",
    "acuity": 2,
    "presentation": "Psychiatric Emergency",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Gloria appears anxious and confused, with visible rigidity and bradykinesia that's markedly worse than baseline. She's cooperative but slow to respond and sometimes seems disoriented, requiring gentle prompting to complete thoughts. Her son Carlos is present and helps clarify timeline details when she struggles with recall.",
    "interviewQuestions": [
      "Can you tell me more about when your stiffness and movement problems got worse?",
      "Have you been taking your Parkinson's medications as prescribed recently?",
      "When did the fever start and have you had any chills or sweating?",
      "Are you having any pain or burning when you urinate?",
      "Have you noticed any changes in your urine color or smell?",
      "You mentioned jerky movements after taking your pills - can you describe these?",
      "Have you had any nausea, vomiting, or difficulty swallowing recently?",
      "Any chest pain, shortness of breath, or rapid heartbeat?",
      "Have you fallen or injured yourself recently?",
      "Any changes in your mental clarity or confusion?",
      "Have you been eating and drinking normally?",
      "What medications are you currently taking?",
      "Do you have any drug allergies I should know about?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble thinking clearly right now. Can you ask that differently?",
      "onset": "The stiffness got much worse about 3 days ago, and the fever started yesterday morning. I've been so rigid I can barely move.",
      "character": "It's like my whole body is locked up - much worse than my usual Parkinson's stiffness. I feel like a statue.",
      "location": "The stiffness is everywhere but worst in my neck, back, and legs. I can barely turn my head or bend at all.",
      "severity": "The stiffness is a 9 out of 10 - I can barely function. I need help with everything now.",
      "aggravating": "Any movement makes the stiffness worse, and I think missing some of my pills made everything worse too.",
      "relieving": "Nothing really helps. Even my usual medications don't seem to be working as well.",
      "associated": "I've had fever, sweating, fast heartbeat, some burning when I urinate, and I've been more confused than usual.",
      "denies": "No chest pain, no vomiting today, no severe headache, no rash.",
      "history": "I've had urinary tract infections before, but never felt this rigid and sick. My Parkinson's has never been this bad.",
      "medications": "Carbidopa-Levodopa 25/100mg TID; Ropinirole 4mg TID; Amlodipine 5mg daily; Alendronate 70mg weekly; Calcium Carbonate 600mg + Vitamin D3 800 IU BID",
      "allergies": "Metoclopramide, Sulfa drugs (Trimethoprim-Sulfamethoxazole)",
      "family": "My father died from Parkinson's complications, and my sister has essential tremor. My mother has Alzheimer's.",
      "social": "I'm a retired Spanish teacher, widowed, living with my son Carlos who takes care of me. I don't smoke or drink much."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Mental status and orientation",
      "Neurological rigidity assessment (cogwheel, lead pipe)",
      "Bradykinesia testing (finger taps, hand movements)",
      "Gait and postural stability",
      "Abdominal examination",
      "Costovertebral angle tenderness",
      "Skin examination for diaphoresis",
      "Cardiac examination",
      "Pulmonary examination"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 88/52, HR 118, Temp 103.4°F, RR 22, SpO2 93% on room air - hypotensive, tachycardic, febrile",
      "Mental status and orientation": "Oriented to person and place but confused about time, slow processing, appears withdrawn and less responsive than baseline",
      "Neurological rigidity assessment (cogwheel, lead pipe)": "Severe generalized rigidity, markedly worse than baseline Parkinson's, with lead-pipe rigidity predominating over cogwheel",
      "Bradykinesia testing (finger taps, hand movements)": "Profound bradykinesia with barely perceptible finger taps, severe reduction in spontaneous movement",
      "Gait and postural stability": "Unable to ambulate independently, requires assistance to stand, severe postural instability",
      "Abdominal examination": "Soft, non-tender, no masses, hypoactive bowel sounds",
      "Costovertebral angle tenderness": "Mild right-sided CVA tenderness",
      "Skin examination for diaphoresis": "Diaphoretic, warm skin, no rash or pressure ulcers",
      "Cardiac examination": "Tachycardic, regular rhythm, no murmurs, no JVD",
      "Pulmonary examination": "Clear to auscultation bilaterally, no crackles or wheezes"
    },
    "ddxTargets": [
      "Urosepsis with Parkinson-Akinetic Crisis (Dopaminergic Withdrawal) — Confounding Presentation Mimicking NMS",
      "Neuroleptic Malignant Syndrome",
      "Sepsis from urinary tract infection",
      "Meningitis or encephalitis",
      "Aspiration pneumonia with sepsis",
      "Parkinson's disease exacerbation due to infection",
      "Drug-induced parkinsonism"
    ],
    "biasFlags": {
      "anchoring": "May anchor on obvious Parkinson's disease and miss the septic component, or conversely anchor on fever/infection and miss the akinetic crisis",
      "prematureClosure": "Risk of stopping at simple UTI or Parkinson's exacerbation without recognizing the complex interaction and severity of dopaminergic withdrawal",
      "availabilityBias": "May immediately think NMS due to rigidity and fever, missing that this is akinetic crisis triggered by infection-related medication non-adherence"
    },
    "coachPrompts": {
      "phase2": "You've identified some key possibilities. What specific aspects of this patient's presentation might help you differentiate between infectious causes and neurological emergencies? Consider how her underlying Parkinson's disease might complicate the clinical picture.",
      "phase5": "Excellent work gathering the history and exam findings. Now you have a febrile patient with severe rigidity and altered mental status. Walk me through how you'll differentiate between neuroleptic malignant syndrome, akinetic crisis, and sepsis - and consider whether more than one process might be occurring simultaneously.",
      "finalDebrief": "This case illustrates how infections can trigger akinetic crisis in Parkinson's patients through medication non-adherence and physiologic stress. The presentation mimics NMS but the key differences are the absence of neuroleptic exposure and presence of underlying Parkinson's disease. Both the urosepsis and dopaminergic withdrawal needed treatment - this demonstrates why complex patients require broad thinking beyond single diagnoses."
    }
  }
};
