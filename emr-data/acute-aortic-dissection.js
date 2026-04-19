// Virtual EMR Case: Acute Aortic Dissection
// Variant: acute-aortic-dissection | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "chiefComplaint": "Sudden severe chest pain",
    "name": "Richard Thornton",
    "patientHPI": "I've been having this nagging ache between my shoulder blades on and off, figured I pulled something, but today it's really bothering me and feels different somehow - sharper and more intense than usual muscle pain.",
    "dob": "03/18/1961",
    "age": 64,
    "sex": "Male",
    "mrn": "RDX-2025-14827",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B with Cigna Supplement",
    "pcp": "Dr. Patricia Coleman, MD",
    "pharmacy": "CVS Pharmacy — 2901 Stirling Rd, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "1441 Foxglove Dr, Memphis, TN 38118",
    "phone": "(954) 555-7291",
    "email": "r.thornton61@email.com",
    "emergencyContact": {
      "name": "Janet Thornton (Wife)",
      "phone": "(954) 555-7305"
    }
  },
  "problems": [
    {
      "problem": "Hypertension, Poorly Controlled",
      "icd": "I10",
      "onset": "1998",
      "status": "Active",
      "notes": "Long-standing; poorly compliant; home BP frequently >170/100"
    },
    {
      "problem": "Bicuspid Aortic Valve",
      "icd": "Q23.1",
      "onset": "2010",
      "status": "Active",
      "notes": "Incidental finding on echo; mild aortic insufficiency; associated aortopathy risk"
    },
    {
      "problem": "Ascending Aortic Dilation",
      "icd": "I71.2",
      "onset": "2018",
      "status": "Active",
      "notes": "4.2 cm on last CT (07/2025); surveillance imaging q12 months; threshold for surgery 5.0-5.5 cm"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2005",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Tobacco Use Disorder, Current",
      "icd": "F17.210",
      "onset": "1980",
      "status": "Active",
      "notes": "40+ pack-year history; multiple quit attempts failed"
    },
    {
      "problem": "COPD, Moderate",
      "icd": "J44.1",
      "onset": "2016",
      "status": "Active",
      "notes": "GOLD Stage II; FEV1 62% predicted"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Coleman",
      "start": "06/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Losartan 100mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Coleman",
      "start": "03/2008",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metoprolol Succinate 100mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "08/2018",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Coleman",
      "start": "01/2006",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Tiotropium 18mcg inhaled daily",
      "sig": "Inhale 1 capsule via HandiHaler daily",
      "prescriber": "Dr. Coleman",
      "start": "04/2017",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Albuterol MDI PRN",
      "sig": "Inhale 2 puffs every 4-6 hours as needed for shortness of breath",
      "prescriber": "Dr. Coleman",
      "start": "04/2017",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE Inhibitors (Lisinopril)",
      "type": "Drug",
      "reaction": "Persistent dry cough",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/12/2026",
      "bp": "178/102",
      "hr": 76,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "95%",
      "wt": "198 lbs",
      "ht": "6'0\"",
      "bmi": 26.9,
      "setting": "PCP Office"
    },
    {
      "date": "07/14/2025",
      "bp": "182/106",
      "hr": 72,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "96%",
      "wt": "196 lbs",
      "ht": "6'0\"",
      "bmi": 26.6,
      "setting": "Specialist"
    },
    {
      "date": "01/08/2025",
      "bp": "170/98",
      "hr": 74,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "200 lbs",
      "ht": "6'0\"",
      "bmi": 27.1,
      "setting": "PCP Office"
    },
    {
      "date": "07/16/2024",
      "bp": "174/100",
      "hr": 70,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "96%",
      "wt": "202 lbs",
      "ht": "6'0\"",
      "bmi": 27.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/12/2026",
      "type": "Primary Care",
      "provider": "Dr. Patricia Coleman, MD",
      "cc": "Follow-up: HTN, COPD, aortic surveillance",
      "hpi": "64-year-old male presenting for chronic disease follow-up. BP remains uncontrolled despite triple therapy — admits to inconsistent medication use, especially on weekends. Continues to smoke 1 PPD despite counseling. Reports occasional interscapular aching attributed to 'muscle strain.' COPD stable on tiotropium; occasional rescue inhaler use. Last CT angiogram (07/2025) showed ascending aorta at 4.2 cm — stable from prior but continued surveillance required given bicuspid valve. Denies chest pain, syncope, or dyspnea at rest.",
      "exam": "General: NAD. CV: RRR, early diastolic murmur at right upper sternal border (known mild AI). BP symmetric bilaterally (178/102 right, 176/100 left). Lungs: Scattered expiratory wheezes bilaterally. Abdomen: Soft, non-pulsatile mass. Extremities: Pulses symmetric. Neuro: Grossly intact.",
      "assessment": "1. HTN — uncontrolled; nonadherence\n2. Bicuspid aortic valve with ascending aortic dilation (4.2 cm) — stable\n3. COPD — stable, Grade II\n4. Tobacco use — ongoing\n5. Interscapular pain — likely musculoskeletal but concerning given aortopathy",
      "plan": "1. Reinforce medication compliance and smoking cessation — provided Quitline number\n2. Consider adding chlorthalidone if BP not improved in 4 weeks\n3. CT angiogram due in 6 months per surveillance protocol\n4. Cardiothoracic surgery referral if aorta reaches 4.5 cm\n5. Labs: BMP, lipid panel\n6. RTC 4 weeks"
    },
    {
      "id": "V002",
      "date": "07/14/2025",
      "type": "Specialist",
      "provider": "Dr. Rajiv Singh, MD (Cardiology)",
      "cc": "Aortic surveillance; bicuspid valve follow-up",
      "hpi": "64-year-old male with bicuspid aortic valve and ascending aortic dilation for annual surveillance. CT angiogram today shows ascending aorta at 4.2 cm — stable from 4.1 cm in 2024. Mild aortic insufficiency on echo (02/2025). BP poorly controlled. Continues smoking. No symptoms suggestive of dissection — no acute chest/back pain, no syncope.",
      "exam": "General: NAD. CV: RRR, early diastolic murmur. BP 182/106. Lungs: Diminished breath sounds bilaterally.",
      "assessment": "1. Ascending aortic dilation 4.2 cm — stable; bicuspid valve aortopathy\n2. Mild aortic insufficiency — stable\n3. HTN — uncontrolled; major risk factor for dissection",
      "plan": "1. Continue surveillance CTA in 12 months\n2. Surgical referral threshold: 5.0 cm or rapid growth >0.5 cm/year\n3. MUST control blood pressure — dissection risk\n4. Continue metoprolol — beta-blocker critical for aortopathy\n5. Smoking cessation strongly advised\n6. RTC 6 months or sooner if symptoms"
    }
  ],
  "labs": [
    {
      "date": "01/12/2026",
      "time": "09:00",
      "orderedBy": "Dr. Patricia Coleman, MD",
      "collected": "01/12/2026 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-011243",
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
              "test": "Sodium",
              "value": "141",
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
              "value": "28",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "AST (SGOT)",
              "value": "22",
              "unit": "U/L",
              "range": "10-40",
              "flag": ""
            }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            {
              "test": "Total Cholesterol",
              "value": "218",
              "unit": "mg/dL",
              "range": "<200",
              "flag": "H"
            },
            {
              "test": "LDL Cholesterol",
              "value": "132",
              "unit": "mg/dL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "HDL Cholesterol",
              "value": "38",
              "unit": "mg/dL",
              "range": ">40",
              "flag": "L"
            },
            {
              "test": "Triglycerides",
              "value": "240",
              "unit": "mg/dL",
              "range": "<150",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "07/14/2025",
      "study": "CT ANGIOGRAM CHEST (AORTA PROTOCOL)",
      "accession": "IMG-2025-07142",
      "status": "FINAL",
      "orderedBy": "Dr. Rajiv Singh, MD (Cardiology)",
      "readBy": "Dr. Elena Suarez, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "64M with bicuspid aortic valve and ascending aortic dilation. Annual surveillance.",
      "technique": "CT angiogram of the thoracic aorta with IV contrast, ECG-gated acquisition.",
      "findings": "Ascending aorta: Maximal diameter 4.2 cm at the mid-ascending level. No intimal flap or dissection. No intramural hematoma. Aortic root 3.6 cm.\\n\\nAortic arch: Normal caliber, 2.8 cm.\\n\\nDescending thoracic aorta: Normal caliber, 2.6 cm.\\n\\nAortic valve: Bicuspid morphology (type 1, R-L fusion) confirmed.\\n\\nBranch vessels: Normal origins, patent.\\n\\nLungs: Centrilobular emphysema, upper lobe predominant. No mass or nodule.\\n\\nMediastinum: Normal.",
      "impression": "1. Ascending aortic dilation at 4.2 cm — stable compared to prior (4.1 cm, 07/2024).\\n2. Bicuspid aortic valve confirmed.\\n3. No dissection, intimal flap, or intramural hematoma.\\n4. Centrilobular emphysema consistent with smoking history.",
      "dictated": "07/14/2025 15:20",
      "verified": "07/14/2025 17:45"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "09/25/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-HD274",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/15/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-762",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "09/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-601",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "03/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-210",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "05/2023",
      "site": "Left deltoid IM",
      "lot": "SX23-345",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Father: Aortic aneurysm (repair age 68), HTN, deceased at 78",
    "Mother: HTN, Stroke at 72, deceased at 80",
    "Brother: Bicuspid aortic valve (diagnosed age 55), alive at 60",
    "Sister: HTN, Hyperlipidemia, alive at 58"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired construction foreman; retired 2024"
    ],
    [
      "Marital",
      "Married 38 years; wife Janet, age 62"
    ],
    [
      "Tobacco",
      "Current smoker — 1 PPD x 40+ years (40+ pack-year); multiple quit attempts"
    ],
    [
      "Alcohol",
      "Moderate, 2-3 beers most evenings"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Minimal; reports fatigue and dyspnea on exertion"
    ],
    [
      "Housing",
      "Single-family home with wife"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt always"
    ],
    [
      "Advance Directive",
      "POLST on file — Full Code; HCP: wife Janet Thornton"
    ]
  ],
  "meta": {
    "caseId": "acute-aortic-dissection",
    "diagnosis": "Acute Aortic Dissection (Stanford Type A)",
    "acuity": 1,
    "presentation": "Back Pain",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Richard is pale, diaphoretic, and in severe pain. He speaks in clipped sentences and grips the bed rail. He is a stoic retired engineer who describes symptoms precisely but is clearly terrified. He keeps asking 'What's wrong with me?' between answers.",
    "interviewQuestions": [
      "Tell me about this pain — when did it start and exactly where is it?",
      "How would you describe the pain — is it tearing, ripping, sharp, or pressure?",
      "Did it come on suddenly or gradually?",
      "Does the pain go anywhere — to your back, arm, or neck?",
      "Have you ever had pain like this before?",
      "Any history of heart problems or high blood pressure?",
      "Any history of aortic aneurysm in yourself or your family?",
      "Do you have any numbness, weakness, or paralysis anywhere?",
      "Any difficulty urinating or change in urine output?",
      "Are you on any blood pressure medications?",
      "Any recent trauma or strenuous activity before this?",
      "Have you had any dizziness or near-fainting?"
    ],
    "patientResponses": {
      "default": "'Just — just a second.' (grimaces) 'Okay. Go ahead.'",
      "onset": "'Exactly 45 minutes ago. I was in my garage, not doing anything strenuous. Then it hit me like nothing I've ever felt. Like an explosion in my chest.'",
      "character": "Sharp and deep. Like nothing I've ever felt. I've had kidney stones — this is worse. It feels like it's inside, not on the surface.",
      "location": "'Started right here in the front — center of the chest. Then immediately — within seconds — it moved to between my shoulder blades. Both places at once now.'",
      "severity": "'Ten out of ten. Absolute ten. I almost called 911 because I couldn't walk.'",
      "aggravating": "'Just existing makes it worse. Any movement. Even breathing deeply.'",
      "relieving": "'Nothing. I tried nitroglycerin — my wife had some from her heart condition. Did absolutely nothing.'",
      "associated": "'I feel dizzy. My left arm feels a little weak — I don't know if that's from the pain. I'm sweating through my shirt.'",
      "denies": "'No fever. No cough. No shortness of breath. No prior chest pain.'",
      "history": "'Never anything like this. I've had high blood pressure for years — been bad at taking my medications, I'll admit. My cardiologist keeps yelling at me about it.'",
      "medications": "'Amlodipine — I take it most days. And the water pill — hydrochlorothiazide. I forget sometimes.'",
      "allergies": "'None that I know of.'",
      "family": "'My father had an aortic aneurysm — they found it on a scan and watched it. He died of something else. My brother has a bicuspid aortic valve like me.'",
      "social": "'Retired civil engineer. Married 35 years. I smoked for 25 years, quit 10 years ago. Drink maybe two beers a week. I walk the dog but otherwise not very active.'"
    },
    "examManeuvers": [
      "General appearance",
      "Blood pressure — bilateral arms simultaneously",
      "Pulse assessment — all four extremities",
      "Cardiovascular — auscultation for murmurs",
      "Neurological — rapid assessment, focal deficits",
      "Pulmonary — auscultation",
      "Abdominal aorta — auscultation and palpation",
      "Skin — color, diaphoresis, mottling"
    ],
    "examFindings": {
      "General appearance": "Tall, muscular male appearing his stated age, in severe distress. Pale, diaphoretic. Sitting upright, gripping the stretcher railing. Anxious affect.",
      "Blood pressure — bilateral arms simultaneously": "Right arm: 188/102 mmHg. Left arm: 156/88 mmHg. Difference of 32 mmHg systolic. This is a critical finding.",
      "Pulse assessment — all four extremities": "Radial pulses: right 2+, left 1+ (diminished). Femoral pulses 2+ bilaterally. Dorsalis pedis 1+ bilateral. No absent pulses.",
      "Cardiovascular — auscultation for murmurs": "Tachycardic, regular. S1 S2. Early diastolic murmur heard at right upper sternal border (aortic regurgitation — suggests involvement of aortic root). No pericardial rub.",
      "Neurological — rapid assessment, focal deficits": "Alert and oriented x4. Mild left arm weakness (4/5 grip strength). No facial droop. No speech deficit. Pupils equal and reactive.",
      "Pulmonary — auscultation": "Clear to auscultation bilaterally. No wheezes or crackles.",
      "Abdominal aorta — auscultation and palpation": "No audible bruit. Aorta not palpable (patient is large). No abdominal tenderness.",
      "Skin — color, diaphoresis, mottling": "Diaphoretic. Pallor. Skin cool and clammy. No mottling. No rash or bruising."
    },
    "ddxTargets": [
      "Acute Aortic Dissection (Stanford Type A)",
      "Acute Myocardial Infarction (STEMI)",
      "Pulmonary Embolism",
      "Hypertensive Emergency",
      "Aortic Aneurysm Rupture",
      "Acute Pericarditis",
      "Musculoskeletal Pain"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on chest pain + EKG changes → STEMI and initiate thrombolytics, which would be catastrophically dangerous in aortic dissection. The 'tearing' character and BP differential must trigger dissection workup before anticoagulation.",
      "prematureClosure": "Once the BP differential is found, students may close on 'dissection' but fail to recognize the Type A involvement (aortic regurgitation murmur, neurological signs) which changes management from surveillance to emergency surgery.",
      "availabilityBias": "Students who have seen more ACS than dissection may default to the more common diagnosis. Bicuspid aortic valve and family history of aneurysm should raise dissection risk regardless."
    },
    "coachPrompts": {
      "phase2": "Richard has hypertension, a bicuspid aortic valve, and a family history of aortic disease. He presents with sudden severe chest pain. What three diagnoses are most time-critical? Why is the character of the pain — 'tearing' vs 'pressure' — diagnostically important here?",
      "phase5": "You've found a 32 mmHg BP differential and an aortic regurgitation murmur. Richard's left arm is slightly weak. What does this constellation tell you about the extent of dissection? Why is the next step CT-angiography urgently and NOT anticoagulation?",
      "finalDebrief": "Type A aortic dissection requiring emergency surgery. How did your DDx handle the STEMI vs dissection dilemma? The BP differential was the key physical exam finding — did you check both arms? What's the mortality difference between thrombolytics given to a dissection vs delayed CT-A?"
    }
  }
};
