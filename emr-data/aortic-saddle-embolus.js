// Virtual EMR Case: Aortic Saddle Embolus
// Variant: aortic-saddle-embolus | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Claudia Fernandez",
    "patientHPI": "I had to stop taking my blood thinner three weeks ago because my insurance changed and now it costs $180 a month, which I just can't afford on my fixed income. I know it's important for my heart rhythm problem, but I don't know what else to do - that's more than I spend on groceries some weeks.",
    "dob": "08/20/1958",
    "age": 66,
    "sex": "Female",
    "mrn": "RDX-2025-89156",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + BlueCross BlueShield Supplement",
    "pcp": "Dr. Antonio Vega, MD",
    "pharmacy": "CVS Pharmacy — 1901 N Pine Island Rd, Plantation, FL",
    "language": "English, Spanish",
    "race": "Hispanic",
    "address": "328 Birch Ln, Minneapolis, MN 55407",
    "phone": "(954) 555-4478",
    "email": "c.fernandez58@email.com",
    "emergencyContact": {
      "name": "Miguel Fernandez (Husband)",
      "phone": "(954) 555-4490"
    }
  },
  "problems": [
    {
      "problem": "Atrial Fibrillation, Paroxysmal",
      "icd": "I48.0",
      "onset": "2021",
      "status": "Active",
      "notes": "CHA₂DS₂-VASc 4; recently self-discontinued apixaban due to cost"
    },
    {
      "problem": "Rheumatic Mitral Stenosis, Moderate",
      "icd": "I05.0",
      "onset": "2019",
      "status": "Active",
      "notes": "Valve area 1.3 cm²; cardiology monitoring; childhood rheumatic fever in Cuba"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2005",
      "status": "Active",
      "notes": "Controlled"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2012",
      "status": "Active",
      "notes": "A1c 7.0%; well controlled on metformin"
    },
    {
      "problem": "Osteoporosis",
      "icd": "M81.0",
      "onset": "2020",
      "status": "Active",
      "notes": "T-score −2.8 lumbar spine"
    }
  ],
  "medications": [
    {
      "name": "Apixaban 5mg BID",
      "sig": "Take 1 tablet by mouth twice daily — SELF-DISCONTINUED 3 weeks ago",
      "prescriber": "Dr. Rojas",
      "start": "09/2021",
      "refills": 0,
      "status": "Discontinued"
    },
    {
      "name": "Metoprolol Succinate 50mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Rojas",
      "start": "09/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Vega",
      "start": "01/2006",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Vega",
      "start": "06/2013",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Alendronate 70mg weekly",
      "sig": "Take 1 tablet by mouth on empty stomach weekly with 8 oz water",
      "prescriber": "Dr. Vega",
      "start": "04/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 20mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Vega",
      "start": "01/2015",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Lisinopril",
      "type": "Drug",
      "reaction": "Persistent dry cough (tolerated — prefers to continue)",
      "severity": "Mild",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/22/2025",
      "bp": "132/78",
      "hr": 82,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "138 lbs",
      "ht": "5'2\"",
      "bmi": 25.2,
      "setting": "PCP Office"
    },
    {
      "date": "07/18/2024",
      "bp": "128/76",
      "hr": 78,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "140 lbs",
      "ht": "5'2\"",
      "bmi": 25.6,
      "setting": "PCP Office"
    },
    {
      "date": "01/12/2024",
      "bp": "130/80",
      "hr": 80,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "98%",
      "wt": "142 lbs",
      "ht": "5'2\"",
      "bmi": 26,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/22/2025",
      "type": "Primary Care",
      "provider": "Dr. Antonio Vega, MD",
      "cc": "Chronic disease management; medication cost concerns",
      "hpi": "66-year-old female with paroxysmal AFib, rheumatic mitral stenosis, HTN, T2DM, and osteoporosis. Presents for routine follow-up. Reports she stopped taking apixaban 3 weeks ago because her Medicare Part D plan changed and copay increased to $180/month. She understands the importance but cannot afford it. Otherwise feels well. Occasional palpitations. No dyspnea at rest. Mild exertional DOE walking upstairs. No chest pain, syncope, or neurologic symptoms. A1c 7.0% — pleased with diabetes control.",
      "exam": "General: Well-appearing elderly female in NAD. CV: Irregularly irregular rate 82; low-pitched diastolic rumble at apex with opening snap; no S3. JVP 6 cm. Lungs: CTAB. Abdomen: Soft, NT/ND. Extremities: No edema. Neuro: A&O x3, no focal deficits.",
      "assessment": "1. AFib — OFF anticoagulation x 3 weeks (high embolic risk with mitral stenosis)\n2. Rheumatic mitral stenosis — stable moderate; echocardiography due\n3. HTN — controlled\n4. T2DM — well controlled, A1c 7.0%\n5. Osteoporosis — on bisphosphonate",
      "plan": "1. URGENT: Restarted anticoagulation — applied for manufacturer patient assistance program for apixaban; prescribed warfarin 5mg as bridge until resolved; INR check in 5 days\n2. Cardiology follow-up for echocardiogram and valve reassessment\n3. Continue metoprolol, lisinopril, metformin, atorvastatin, alendronate\n4. Social work referral for medication assistance programs\n5. RTC 2 weeks for INR and reassessment"
    },
    {
      "id": "V002",
      "date": "07/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Antonio Vega, MD",
      "cc": "Routine follow-up",
      "hpi": "66-year-old female for routine visit. All conditions stable. Taking all medications as prescribed including apixaban. No palpitations, dyspnea, or chest pain. A1c 7.2%.",
      "exam": "General: NAD. CV: Irregularly irregular at times; diastolic murmur at apex. Lungs: CTAB. Extremities: No edema.",
      "assessment": "1. Chronic conditions — stable on current regimens",
      "plan": "1. Continue all medications\n2. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "01/22/2025",
      "time": "09:30",
      "orderedBy": "Dr. Antonio Vega, MD",
      "collected": "01/22/2025 08:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-012254",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "102",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "16",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
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
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "103",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "25",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            },
            {
              "test": "ALT (SGPT)",
              "value": "18",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST (SGOT)",
              "value": "20",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            }
          ]
        },
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            {
              "test": "HbA1c",
              "value": "7.0",
              "unit": "%",
              "range": "<5.7 normal; 5.7-6.4 prediabetes",
              "flag": "H"
            },
            {
              "test": "Est. Avg Glucose (eAG)",
              "value": "154",
              "unit": "mg/dL",
              "range": "—",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "6.6",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "37.2",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "245",
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
      "date": "03/2024",
      "study": "ECHOCARDIOGRAM (TRANSTHORACIC)",
      "accession": "IMG-2024-03151",
      "status": "FINAL",
      "orderedBy": "Dr. Luis Rojas, MD (Cardiology)",
      "readBy": "Dr. Luis Rojas, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "66F AFib, rheumatic mitral stenosis. Annual reassessment.",
      "technique": "Standard 2D transthoracic echocardiogram with Doppler.",
      "findings": "LV: Normal size, LVEF 60%.\\n\\nMitral valve: Thickened, calcified leaflets with restricted motion. Mean gradient 8 mmHg. Planimetry valve area 1.3 cm² (moderate stenosis). Mild mitral regurgitation.\\n\\nLA: Severely dilated (volume index 58 mL/m²). Spontaneous echo contrast noted.\\n\\nAortic valve: Mild sclerosis, no stenosis.\\n\\nRV: Normal size and function.\\n\\nPericardium: No effusion.",
      "impression": "1. Moderate rheumatic mitral stenosis (MVA 1.3 cm²).\\n2. Severely dilated left atrium with spontaneous echo contrast — thromboembolic risk.\\n3. Mild mitral regurgitation.\\n4. Preserved LV function (LVEF 60%).",
      "dictated": "03/15/2024 16:00",
      "verified": "03/16/2024 09:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/05/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD199",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-916",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Prevnar 20 (PCV20)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "PV20-205",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "09/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-510",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "11/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-678",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Rheumatic heart disease, deceased at 68",
    "Mother: HTN, T2DM, alive at 88",
    "Sister: Stroke at age 60, alive with residual deficits",
    "Brother: No significant medical history, age 62"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired seamstress"
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
      "None"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Light housework; walking 15-20 min 3x/week"
    ],
    [
      "Housing",
      "Lives with husband in condo"
    ],
    [
      "Safety",
      "Denies IPV; wears seatbelt"
    ],
    [
      "Advance Directive",
      "Health care proxy — husband Miguel"
    ]
  ],
  "meta": {
    "caseId": "aortic-saddle-embolus",
    "diagnosis": "Aortic Saddle Embolus",
    "acuity": 1,
    "presentation": "Vascular Emergency",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Claudia appears anxious and tearful, clearly distressed about both her symptoms and financial situation. She is forthcoming about her medication non-compliance due to cost, though somewhat embarrassed and defensive about it. She displays visible pain and panic about her sudden loss of leg function.",
    "interviewQuestions": [
      "Can you tell me exactly when your leg symptoms started?",
      "Describe what your legs feel like right now",
      "Are both legs affected equally, or is one worse than the other?",
      "Can you move your legs or toes at all?",
      "What does the pain feel like - sharp, cramping, burning?",
      "Have you noticed any color changes in your legs or feet?",
      "Do your legs feel cold or numb?",
      "When exactly did you stop taking your blood thinner?",
      "Have you had any chest pain or shortness of breath?",
      "Any recent palpitations or irregular heartbeats?",
      "Have you been taking all your other medications regularly?",
      "Any recent falls, injuries, or prolonged immobility?",
      "Have you ever had anything like this happen before?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this terrible pain in my legs - could you repeat that?",
      "onset": "It started suddenly about 2 hours ago while I was watching TV. I went to get up to go to the bathroom and my legs just wouldn't work - the pain was excruciating and they felt completely dead.",
      "character": "It's the most severe pain I've ever felt - like someone is crushing my legs in a vice, but they also feel completely numb and dead at the same time. It's terrifying.",
      "location": "Both legs are affected, but it seems worse below my hips. The pain starts deep in my lower back and goes all the way down to my toes.",
      "severity": "This is definitely a 10 out of 10. I can barely think straight, and I can't move my legs at all. I'm completely helpless.",
      "aggravating": "Any attempt to move makes it worse. Even light touch is excruciating. Lying flat seems to make the pain more intense too.",
      "relieving": "Nothing helps. I tried changing positions but I can barely move. The pain medication they gave me here hasn't touched it.",
      "associated": "My legs feel ice cold and I can't feel my feet at all. I think my legs look pale or maybe bluish. I feel nauseous from the pain and I'm having trouble catching my breath.",
      "denies": "No chest pain, no recent falls or injuries, no recent long car rides or flights. No fever or chills. No back injury that I know of.",
      "history": "Never had anything like this before. I've had some cramping in my calves before, but nothing even close to this severe.",
      "medications": "Apixaban 5mg BID; Metoprolol Succinate 50mg daily; Lisinopril 10mg daily; Metformin 500mg BID; Alendronate 70mg weekly; Atorvastatin 20mg QHS",
      "allergies": "Lisinopril",
      "family": "My father had rheumatic heart disease and died young, and my sister had a stroke. I worry this runs in my family - is this related to my heart problems?",
      "social": "I'm a retired seamstress, married, never smoked or drank alcohol. I've been pretty sedentary since retiring, mostly just watching TV and doing light housework."
    },
    "examManeuvers": [
      "Bilateral lower extremity pulse palpation (femoral, popliteal, dorsalis pedis, posterior tibial)",
      "Lower extremity color and temperature assessment",
      "Motor function testing (hip flexion, knee extension, ankle dorsiflexion, plantar flexion)",
      "Sensory examination (light touch, pinprick, vibration)",
      "Capillary refill assessment",
      "Cardiac auscultation for murmurs and rhythm",
      "Abdominal examination for pulsatile masses",
      "Lower extremity reflexes (patellar, Achilles)",
      "Assessment for lower extremity edema",
      "Skin mottling or livedo reticularis assessment"
    ],
    "examFindings": {
      "Bilateral lower extremity pulse palpation": "Femoral pulses present but diminished bilaterally, no palpable popliteal, dorsalis pedis, or posterior tibial pulses bilaterally",
      "Lower extremity color and temperature assessment": "Both legs appear pale and mottled below the inguinal ligament, markedly cold to touch compared to upper extremities",
      "Motor function testing": "Severe weakness in bilateral hip flexion (2/5), knee extension (1/5), and absent ankle dorsiflexion and plantar flexion (0/5)",
      "Sensory examination": "Markedly diminished light touch and pinprick sensation below the knees bilaterally, absent vibration sense at ankles",
      "Capillary refill assessment": "Capillary refill >5 seconds in bilateral toes, nail beds appear cyanotic",
      "Cardiac auscultation": "Irregular rhythm consistent with atrial fibrillation, grade 3/6 diastolic rumble at apex consistent with mitral stenosis",
      "Abdominal examination": "Soft, non-tender, no pulsatile masses palpated, normal bowel sounds",
      "Lower extremity reflexes": "Absent patellar and Achilles reflexes bilaterally",
      "Assessment for lower extremity edema": "No significant edema present in either lower extremity",
      "Skin mottling or livedo reticularis assessment": "Pronounced mottling and livedo reticularis pattern from mid-thigh distally, more pronounced on the right"
    },
    "ddxTargets": [
      "Aortic Saddle Embolus (correct diagnosis)",
      "Acute Aortic Thrombosis",
      "Bilateral Acute Limb Ischemia",
      "Acute Aortic Dissection with Malperfusion",
      "Massive Pulmonary Embolism with Shock",
      "Acute Cauda Equina Syndrome",
      "Bilateral Deep Vein Thrombosis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the social history of medication non-compliance and missing the acute vascular emergency nature of this presentation",
      "prematureClosure": "Risk of stopping at 'medication non-compliance' without fully appreciating the acute arterial occlusion requiring immediate intervention",
      "availabilityBias": "May focus on more common conditions like DVT or back pain rather than considering the rare but catastrophic saddle embolus"
    },
    "coachPrompts": {
      "phase2": "Before you interview this patient, consider her known cardiac conditions and recent medication change. What vascular complications should you be most concerned about in someone with atrial fibrillation who stopped anticoagulation? How might this influence your history-taking priorities?",
      "phase5": "Now that you've completed your assessment, let's think through the key findings. You have a patient with known afib off anticoagulation presenting with acute bilateral leg pain, absent pulses, and motor/sensory deficits. What anatomical location could explain this bilateral presentation? What's the most likely pathophysiology here?",
      "finalDebrief": "This case illustrates how social determinants of health can directly lead to medical emergencies. Claudia's saddle embolus resulted from medication non-compliance due to cost - a preventable tragedy. Notice how the bilateral nature of her symptoms, absent distal pulses, and cardiac history should have pointed you toward this diagnosis. What systems issues contributed to this outcome, and how might we prevent similar cases?"
    }
  }
};
