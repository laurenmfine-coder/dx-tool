
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
    "pharmacy": "CVS Pharmacy \u2014 2901 Stirling Rd, Fort Lauderdale, FL",
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
      "problem": "Acute Type A aortic dissection \u2014 surgical emergency",
      "icd": "I71.01",
      "onset": "2024",
      "status": "Active",
      "notes": "Richard Chen, 58M \u2014 sudden tearing chest/back pain, BP differential right > left arm. CT: dissection flap ascending aorta extending to arch. Pericardial effusion."
    },
    {
      "problem": "Hypertension \u2014 poorly controlled, MAR 180s/90s",
      "icd": "I10",
      "onset": "2015",
      "status": "Active",
      "notes": "Primary risk factor. BP differential on exam is a red flag sign."
    },
    {
      "problem": "Aortic regurgitation \u2014 acute from root involvement",
      "icd": "I35.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Diastolic murmur on exam. Root involvement in Type A dissection can cause acute AR and hemodynamic compromise."
    }
  ],
  "medications": [
    {
      "name": "Esmolol IV infusion \u2014 HR target <60 bpm",
      "sig": "Heart rate control is FIRST priority \u2014 reducing dP/dt (rate of pressure rise). Start before vasodilators. Target HR <60.",
      "prescriber": "CT Surgery/ICU",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 ICU"
    },
    {
      "name": "Nitroprusside IV \u2014 SBP target 100-120 mmHg",
      "sig": "After heart rate is controlled. Never give nitroprusside alone without beta-blockade \u2014 reflex tachycardia worsens dissection.",
      "prescriber": "CT Surgery/ICU",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 ICU"
    },
    {
      "name": "Emergent CT surgery \u2014 within 24 hours",
      "sig": "Type A dissection has 1-2% mortality per hour without surgery. Emergent open repair. No medical management is definitive for Type A.",
      "prescriber": "CT Surgery",
      "start": "2024",
      "refills": 0,
      "status": "EMERGENT"
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
      "temp": "98.4\u00b0F",
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
      "temp": "98.6\u00b0F",
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
      "temp": "98.4\u00b0F",
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
      "temp": "98.6\u00b0F",
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
      "hpi": "64-year-old male presenting for chronic disease follow-up. BP remains uncontrolled despite triple therapy \u2014 admits to inconsistent medication use, especially on weekends. Continues to smoke 1 PPD despite counseling. Reports occasional interscapular aching attributed to 'muscle strain.' COPD stable on tiotropium; occasional rescue inhaler use. Last CT angiogram (07/2025) showed ascending aorta at 4.2 cm \u2014 stable from prior but continued surveillance required given bicuspid valve. Denies chest pain, syncope, or dyspnea at rest.",
      "exam": "General: NAD. CV: RRR, early diastolic murmur at right upper sternal border (known mild AI). BP symmetric bilaterally (178/102 right, 176/100 left). Lungs: Scattered expiratory wheezes bilaterally. Abdomen: Soft, non-pulsatile mass. Extremities: Pulses symmetric. Neuro: Grossly intact.",
      "assessment": "1. HTN \u2014 uncontrolled; nonadherence\n2. Bicuspid aortic valve with ascending aortic dilation (4.2 cm) \u2014 stable\n3. COPD \u2014 stable, Grade II\n4. Tobacco use \u2014 ongoing\n5. Interscapular pain \u2014 likely musculoskeletal but concerning given aortopathy",
      "plan": "1. Reinforce medication compliance and smoking cessation \u2014 provided Quitline number\n2. Consider adding chlorthalidone if BP not improved in 4 weeks\n3. CT angiogram due in 6 months per surveillance protocol\n4. Cardiothoracic surgery referral if aorta reaches 4.5 cm\n5. Labs: BMP, lipid panel\n6. RTC 4 weeks"
    },
    {
      "id": "V002",
      "date": "07/14/2025",
      "type": "Specialist",
      "provider": "Dr. Rajiv Singh, MD (Cardiology)",
      "cc": "Aortic surveillance; bicuspid valve follow-up",
      "hpi": "64-year-old male with bicuspid aortic valve and ascending aortic dilation for annual surveillance. CT angiogram today shows ascending aorta at 4.2 cm \u2014 stable from 4.1 cm in 2024. Mild aortic insufficiency on echo (02/2025). BP poorly controlled. Continues smoking. No symptoms suggestive of dissection \u2014 no acute chest/back pain, no syncope.",
      "exam": "General: NAD. CV: RRR, early diastolic murmur. BP 182/106. Lungs: Diminished breath sounds bilaterally.",
      "assessment": "1. Ascending aortic dilation 4.2 cm \u2014 stable; bicuspid valve aortopathy\n2. Mild aortic insufficiency \u2014 stable\n3. HTN \u2014 uncontrolled; major risk factor for dissection",
      "plan": "1. Continue surveillance CTA in 12 months\n2. Surgical referral threshold: 5.0 cm or rapid growth >0.5 cm/year\n3. MUST control blood pressure \u2014 dissection risk\n4. Continue metoprolol \u2014 beta-blocker critical for aortopathy\n5. Smoking cessation strongly advised\n6. RTC 6 months or sooner if symptoms"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Aortic Dissection Workup",
      "results": [
        {
          "test": "D-dimer",
          "value": "6800",
          "unit": "ng/mL",
          "ref": "<500",
          "flag": "H"
        },
        {
          "test": "Troponin I",
          "value": "0.08",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "BP right arm / left arm",
          "value": "186/104 / 158/96",
          "unit": "mmHg",
          "ref": "<10mmHg differential",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.4",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Hgb",
          "value": "11.2",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Aortography with Contrast",
      "findings": "Dissection flap from aortic root through ascending aorta extending to the arch. True and false lumen visible. Pericardial effusion. No branch vessel involvement.",
      "impression": "Acute Stanford Type A aortic dissection. Emergent surgical consultation required."
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
      "lot": "\u2014",
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
      "Current smoker \u2014 1 PPD x 40+ years (40+ pack-year); multiple quit attempts"
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
      "POLST on file \u2014 Full Code; HCP: wife Janet Thornton"
    ]
  ],
  "meta": {
    "caseId": "acute-aortic-dissection",
    "diagnosis": "Acute Aortic Dissection (Stanford Type A \u2014 Ascending Aorta)",
    "acuity": 1,
    "presentation": "Back Pain",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Richard is pale, diaphoretic, and in severe pain. He speaks in clipped sentences and grips the bed rail. He is a stoic retired engineer who describes symptoms precisely but is clearly terrified. He keeps asking 'What's wrong with me?' between answers.",
    "interviewQuestions": [
      "Tell me about this pain \u2014 when did it start and exactly where is it?",
      "How would you describe the pain \u2014 is it tearing, ripping, sharp, or pressure?",
      "Did it come on suddenly or gradually?",
      "Does the pain go anywhere \u2014 to your back, arm, or neck?",
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
      "default": "'Just \u2014 just a second.' (grimaces) 'Okay. Go ahead.'",
      "onset": "'Exactly 45 minutes ago. I was in my garage, not doing anything strenuous. Then it hit me like nothing I've ever felt. Like an explosion in my chest.'",
      "character": "Sharp and deep. Like nothing I've ever felt. I've had kidney stones \u2014 this is worse. It feels like it's inside, not on the surface.",
      "location": "'Started right here in the front \u2014 center of the chest. Then immediately \u2014 within seconds \u2014 it moved to between my shoulder blades. Both places at once now.'",
      "severity": "'Ten out of ten. Absolute ten. I almost called 911 because I couldn't walk.'",
      "aggravating": "'Just existing makes it worse. Any movement. Even breathing deeply.'",
      "relieving": "'Nothing. I tried nitroglycerin \u2014 my wife had some from her heart condition. Did absolutely nothing.'",
      "associated": "'I feel dizzy. My left arm feels a little weak \u2014 I don't know if that's from the pain. I'm sweating through my shirt.'",
      "denies": "'No fever. No cough. No shortness of breath. No prior chest pain.'",
      "history": "'Never anything like this. I've had high blood pressure for years \u2014 been bad at taking my medications, I'll admit. My cardiologist keeps yelling at me about it.'",
      "medications": "'Amlodipine \u2014 I take it most days. And the water pill \u2014 hydrochlorothiazide. I forget sometimes.'",
      "allergies": "'None that I know of.'",
      "family": "'My father had an aortic aneurysm \u2014 they found it on a scan and watched it. He died of something else. My brother has a bicuspid aortic valve like me.'",
      "social": "'Retired civil engineer. Married 35 years. I smoked for 25 years, quit 10 years ago. Drink maybe two beers a week. I walk the dog but otherwise not very active.'"
    },
    "examManeuvers": [
      "General appearance",
      "Blood pressure \u2014 bilateral arms simultaneously",
      "Pulse assessment \u2014 all four extremities",
      "Cardiovascular \u2014 auscultation for murmurs",
      "Neurological \u2014 rapid assessment, focal deficits",
      "Pulmonary \u2014 auscultation",
      "Abdominal aorta \u2014 auscultation and palpation",
      "Skin \u2014 color, diaphoresis, mottling"
    ],
    "examFindings": {
      "General appearance": "Tall, muscular male appearing his stated age, in severe distress. Pale, diaphoretic. Sitting upright, gripping the stretcher railing. Anxious affect.",
      "Blood pressure \u2014 bilateral arms simultaneously": "Right arm: 188/102 mmHg. Left arm: 156/88 mmHg. Difference of 32 mmHg systolic. This is a critical finding.",
      "Pulse assessment \u2014 all four extremities": "Radial pulses: right 2+, left 1+ (diminished). Femoral pulses 2+ bilaterally. Dorsalis pedis 1+ bilateral. No absent pulses.",
      "Cardiovascular \u2014 auscultation for murmurs": "Tachycardic, regular. S1 S2. Early diastolic murmur heard at right upper sternal border (aortic regurgitation \u2014 suggests involvement of aortic root). No pericardial rub.",
      "Neurological \u2014 rapid assessment, focal deficits": "Alert and oriented x4. Mild left arm weakness (4/5 grip strength). No facial droop. No speech deficit. Pupils equal and reactive.",
      "Pulmonary \u2014 auscultation": "Clear to auscultation bilaterally. No wheezes or crackles.",
      "Abdominal aorta \u2014 auscultation and palpation": "No audible bruit. Aorta not palpable (patient is large). No abdominal tenderness.",
      "Skin \u2014 color, diaphoresis, mottling": "Diaphoretic. Pallor. Skin cool and clammy. No mottling. No rash or bruising."
    },
    "ddxTargets": [
      "Acute Type A aortic dissection (correct)",
      "STEMI \u2014 troponin elevation here from coronary ostia involvement; ECG can be normal in dissection",
      "Acute PE \u2014 may cause chest/back pain; CT confirms aortic dissection, not PE",
      "Hypertensive emergency without dissection \u2014 pain character + BP differential + CT distinguish",
      "Esophageal rupture (Boerhaave) \u2014 usually post-emetic; CXR shows mediastinal air/effusion",
      "Pericarditis \u2014 no tearing pain, BP differential, or CT flap; diffuse ST elevation pattern"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on chest pain + EKG changes \u2192 STEMI and initiate thrombolytics, which would be catastrophically dangerous in aortic dissection. The 'tearing' character and BP differential must trigger dissection workup before anticoagulation.",
      "prematureClosure": "Once the BP differential is found, students may close on 'dissection' but fail to recognize the Type A involvement (aortic regurgitation murmur, neurological signs) which changes management from surveillance to emergency surgery.",
      "availabilityBias": "Students who have seen more ACS than dissection may default to the more common diagnosis. Bicuspid aortic valve and family history of aneurysm should raise dissection risk regardless."
    },
    "coachPrompts": {
      "phase2": "Richard has hypertension, a bicuspid aortic valve, and a family history of aortic disease. He presents with sudden severe chest pain. What three diagnoses are most time-critical? Why is the character of the pain \u2014 'tearing' vs 'pressure' \u2014 diagnostically important here?",
      "phase5": "You've found a 32 mmHg BP differential and an aortic regurgitation murmur. Richard's left arm is slightly weak. What does this constellation tell you about the extent of dissection? Why is the next step CT-angiography urgently and NOT anticoagulation?",
      "finalDebrief": "Type A aortic dissection requiring emergency surgery. How did your DDx handle the STEMI vs dissection dilemma? The BP differential was the key physical exam finding \u2014 did you check both arms? What's the mortality difference between thrombolytics given to a dissection vs delayed CT-A?",
      "final": "Diagnosis: Stanford Type A aortic dissection. Key learning: (1) Classic presentation: sudden-onset 'tearing' or 'ripping' chest/back pain at maximum intensity at onset (vs ACS which crescendos). Pulse differential or BP differential between arms (>20 mmHg) is a red flag sign with high specificity. (2) Stanford classification: Type A = involves ascending aorta \u2192 emergent surgery. Type B = descending only \u2192 medical management unless complicated. DeBakey I (whole aorta), II (ascending only), III (descending only). (3) Initial management \u2014 HR first, then BP: esmolol to HR <60 bpm BEFORE nitroprusside. Reflex tachycardia from vasodilator alone increases dP/dt and worsens dissection. Mnemonic: 'Heart before pressure.' (4) Complications of Type A: aortic regurgitation (root involvement), coronary ostia involvement (STEMI pattern), pericardial effusion/tamponade, stroke (arch vessel involvement), paraplegia (spinal artery), mesenteric/renal ischemia. (5) D-dimer: elevated in dissection (as in this case) \u2014 not specific, but a negative D-dimer in a low-pretest probability patient can help rule out dissection (high sensitivity, low specificity)."
    }
  }
};
