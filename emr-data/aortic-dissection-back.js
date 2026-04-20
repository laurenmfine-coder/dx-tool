
window.EMR_DATA = {
  "patient": {
    "name": "Raymond Foster",
    "patientHPI": "I was just sitting at home watching TV when suddenly I felt this horrible sharp pain in my chest that shot straight through to my back. I've never experienced anything like this before and I knew something was terribly wrong.",
    "dob": "02/18/1959",
    "age": "67",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-575883",
    "language": "English",
    "race": "White",
    "phone": "(615) 555-1919",
    "email": "raymond.foster@email.com",
    "address": "2907 Lavender St, New Orleans, LA 70124",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "Rite Aid \u2014 Palm Ave",
    "emergencyContact": {
      "name": "Rachel Foster",
      "phone": "(702) 555-1154",
      "relationship": "Parent"
    },
    "chiefComplaint": "Abrupt onset chest pain",
    "diagnosis": "Aortic Dissection"
  },
  "problems": [
    {
      "problem": "Type B aortic dissection \u2014 descending thoracic aorta",
      "icd": "I71.01",
      "onset": "2024",
      "status": "Active",
      "notes": "Tearing back pain, unequal BP arms (20mmHg), CT confirms \u2014 Stanford Type B (distal to L subclavian)"
    },
    {
      "problem": "Hypertension \u2014 uncontrolled, dissection driver",
      "icd": "I10",
      "onset": "2015",
      "status": "Active",
      "notes": "BP 188/102 right arm \u2014 hypertension is the #1 risk factor for aortic dissection"
    },
    {
      "problem": "Malperfusion risk \u2014 branch vessel involvement",
      "icd": "I71.01",
      "onset": "2024",
      "status": "Active",
      "notes": "CT shows celiac and SMA arise from true lumen \u2014 serial imaging and clinical monitoring for end-organ ischemia"
    }
  ],
  "medications": [
    {
      "name": "Esmolol infusion \u2014 rate titration, target HR 60-70",
      "sig": "IV infusion \u2014 reduce aortic wall stress by reducing HR and dP/dt. FIRST drug before vasodilators.",
      "prescriber": "Cardiac Surgery/Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Nicardipine infusion \u2014 BP target SBP 100-120",
      "sig": "IV infusion \u2014 after HR controlled, titrate BP. Never vasodilate before rate control.",
      "prescriber": "Cardiac Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Morphine 4mg IV PRN pain control",
      "sig": "IV PRN \u2014 pain control also reduces sympathetic surge driving BP",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE Inhibitors",
      "reaction": "Angioedema",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "198/110",
      "hr": "110",
      "rr": "24",
      "temp": "36.6\u00b0C",
      "spo2": "95%",
      "pain": "10/10",
      "bmi": "37",
      "weight": "68 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Sudden tearing chest pain radiating to back",
      "hpi": "Raymond Foster is a 67-year-old male presenting with abrupt onset chest pain. Past medical history includes Hypertension (poorly controlled), Marfan habitus, Bicuspid aortic valve. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Aortic Dissection \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Aortic Dissection Workup",
      "results": [
        {
          "test": "D-dimer",
          "value": "4,200",
          "unit": "ng/mL",
          "ref": "<500",
          "flag": "H"
        },
        {
          "test": "Troponin I",
          "value": "0.06",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.3",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Hemoglobin",
          "value": "13.8",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": ""
        },
        {
          "test": "BP right arm",
          "value": "188/102",
          "unit": "mmHg",
          "ref": "",
          "flag": "H"
        },
        {
          "test": "BP left arm",
          "value": "162/88",
          "unit": "mmHg",
          "ref": "",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Angiography Chest/Abdomen/Pelvis",
      "indication": "Tearing back pain, BP differential, aortic dissection protocol",
      "findings": "Intimal flap extending from distal to left subclavian artery through descending thoracic and abdominal aorta to iliac bifurcation. True lumen compressed in distal thoracic segment. Celiac, SMA, right renal artery arise from true lumen. Left renal artery arises from false lumen \u2014 early enhancement suggesting partial perfusion. No pericardial effusion. No hemothorax.",
      "impression": "Stanford Type B aortic dissection. Left renal malperfusion from false lumen involvement. Urgent vascular surgery and cardiac surgery consultation. Medical management with anti-impulse therapy first-line for uncomplicated Type B."
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Father: aortic aneurysm repair",
    "Mother: hypertension"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 30 pack-years"
    ],
    [
      "Cocaine",
      "Admits to crack cocaine use last night"
    ],
    [
      "Occupation",
      "Unemployed"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Raymond appears visibly distressed and diaphoretic, clutching his chest and speaking in short sentences due to pain. He is cooperative and forthcoming about his symptoms but becomes somewhat evasive when discussing his recent cocaine use. His anxiety is palpable as he repeatedly states this is the worst pain he's ever experienced.",
    "interviewQuestions": [
      "Can you describe exactly what the pain feels like?",
      "When did this pain start and what were you doing?",
      "Does the pain move anywhere else in your body?",
      "On a scale of 1-10, how severe is your pain?",
      "Have you ever had chest pain like this before?",
      "Does anything make the pain better or worse?",
      "Are you having any shortness of breath, nausea, or sweating?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Has anyone in your family had heart problems or blood vessel issues?",
      "Do you smoke or use any recreational drugs?",
      "How well controlled is your blood pressure usually?",
      "Have you been told you have any heart valve problems?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this terrible pain. Could you repeat that?",
      "onset": "It started about 2 hours ago completely out of nowhere while I was watching TV. One second I was fine, the next second it was like someone stabbed me in the chest.",
      "character": "It's a sharp, tearing pain - like someone is ripping something apart inside my chest. It's absolutely excruciating.",
      "location": "The pain is right in the center of my chest and shoots straight through to my back between my shoulder blades. It feels like it goes all the way through my body.",
      "severity": "This is easily a 10 out of 10. I've never felt pain like this in my life. I can barely think straight.",
      "aggravating": "Moving makes it worse, and I feel like I can't take a deep breath. Even talking makes it hurt more.",
      "relieving": "Nothing helps. I tried changing positions, but nothing makes any difference. The pain is constant.",
      "associated": "I'm sweating a lot and feel short of breath. I feel nauseous and dizzy. My heart feels like it's racing.",
      "denies": "No crushing feeling, no arm pain, no indigestion feeling. This doesn't feel like what I think a heart attack would feel like.",
      "history": "Never. I've had some chest discomfort with my blood pressure before, but nothing even close to this.",
      "medications": "Hydrochlorothiazide",
      "allergies": "ACE Inhibitors",
      "family": "My father had to have surgery on his aorta - some kind of aneurysm repair when he was in his 70s. My mother has high blood pressure like me.",
      "social": "I'm unemployed right now. I smoke about a pack a day, have for 30 years. I... I used some crack cocaine last night. I know I shouldn't have, but I did."
    },
    "examManeuvers": [
      "Blood pressure in both arms",
      "Cardiac auscultation",
      "Pulmonary auscultation",
      "Abdominal palpation for pulsatile mass",
      "Peripheral pulse examination",
      "Neurological assessment",
      "Assessment for aortic regurgitation murmur",
      "Inspection for Marfanoid features",
      "Fundoscopic examination",
      "Assessment for pulse deficits"
    ],
    "examFindings": {
      "Blood pressure in both arms": "Right arm 198/110, Left arm 170/95 - significant differential of 28 mmHg systolic",
      "Cardiac auscultation": "Tachycardic irregular rhythm, diastolic murmur heard best at left sternal border consistent with aortic regurgitation",
      "Pulmonary auscultation": "Clear bilaterally, no rales or wheezes",
      "Abdominal palpation for pulsatile mass": "Soft, non-tender, no pulsatile masses appreciated",
      "Peripheral pulse examination": "Diminished left radial and brachial pulses compared to right",
      "Neurological assessment": "Alert and oriented, no focal deficits, pupils equal and reactive",
      "Assessment for aortic regurgitation murmur": "Grade 3/6 diastolic murmur at left sternal border, new compared to prior documented bicuspid valve murmur",
      "Inspection for Marfanoid features": "Tall, thin build with long extremities, high-arched palate, arm span greater than height",
      "Fundoscopic examination": "Grade 3 hypertensive retinopathy changes",
      "Assessment for pulse deficits": "Weak left upper extremity pulses, asymmetric blood pressures"
    },
    "ddxTargets": [
      "Stanford Type B aortic dissection \u2014 medical management (correct)",
      "Stanford Type A \u2014 intimal flap extends proximal to L subclavian, would require emergent surgery",
      "PE with pleuritic chest pain \u2014 D-dimer elevated but CT aorta is diagnostic",
      "Acute MI \u2014 troponin mildly elevated but dissection can cause by coronary involvement",
      "Musculoskeletal back pain \u2014 severity, radiation, BP differential exclude this",
      "Pericarditis \u2014 no pericardial effusion, tearing quality and BP differential point to dissection"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on cocaine use and assuming cocaine-induced MI or coronary spasm, missing the aortic dissection despite classic presentation",
      "prematureClosure": "Risk of stopping workup after identifying hypertensive emergency and cocaine use without considering structural causes of chest pain",
      "availabilityBias": "Recent cases of MI or cocaine-related cardiac events may overshadow consideration of less common but more lethal aortic dissection"
    },
    "coachPrompts": {
      "phase2": "This 67-year-old presents with acute chest pain. Before you interview him, consider his risk factors: Marfan habitus, bicuspid aortic valve, and poorly controlled hypertension. What life-threatening conditions should be at the top of your differential? How might his physical habitus and valve disease influence your thinking?",
      "phase5": "You've identified some concerning findings - the blood pressure differential between arms and the new diastolic murmur are particularly significant. In a patient with Marfan habitus and bicuspid aortic valve, what do these asymmetric findings suggest? How does this change your leading diagnosis from your initial differential?",
      "finalDebrief": "This case demonstrates how risk factors can guide diagnosis. Raymond's Marfan habitus, bicuspid aortic valve, and severe hypertension created the perfect storm for aortic dissection. The cocaine use was a red herring that could have led to anchoring bias. The key diagnostic clues were the blood pressure differential and new aortic regurgitation murmur. How will you remember to look for these findings in future cases with similar risk factors?",
      "final": "Diagnosis: Stanford Type B aortic dissection. Key learning: (1) Stanford classification: Type A = involves ascending aorta (proximal to L subclavian) \u2192 emergent surgical repair (mortality 1-2%/hour untreated). Type B = descending only (distal to L subclavian) \u2192 medical management first-line. Type B with complications (malperfusion, rupture, rapid expansion) \u2192 TEVAR (thoracic endovascular aortic repair). (2) BP differential: \u226520 mmHg between arms suggests subclavian/arch vessel involvement \u2014 classic but only present in 20% of dissections. (3) Anti-impulse therapy sequence: BETA-BLOCKER FIRST (reduce HR, reduce dP/dt = force of cardiac contraction), THEN vasodilator. If vasodilate first \u2192 reflex tachycardia \u2192 increased dP/dt \u2192 propagates dissection. This sequence is non-negotiable. (4) Malperfusion syndrome: branch vessel involvement causing end-organ ischemia is the primary complication requiring intervention. Left renal artery from false lumen \u2192 renal infarction. Mesenteric ischemia \u2192 bowel necrosis. Check lactate, renal function, bowel sounds. (5) Long-term: BP control (<120 systolic) indefinitely. Lifelong imaging surveillance (MRA q6-12 months). Genetic testing for connective tissue disorder in young patients (Marfan, Loeys-Dietz)."
    }
  },
  "meta": {
    "diagnosis": "Type B Aortic Dissection \u2014 Stanford Classification, Medical Management vs Intervention Decision",
    "caseId": "aortic-dissection-back"
  }
};
