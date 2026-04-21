
window.EMR_DATA = {
  "patient": {
    "name": "Arthur Livingston",
    "dob": "09/18/1946",
    "age": 79,
    "sex": "Male",
    "mrn": "RDX-2025-42012",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B with Medigap Plan N",
    "pcp": "Dr. Catherine Brennan, MD",
    "pharmacy": "Publix Pharmacy \u2014 2200 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "5580 NE 18th Ave, Fort Lauderdale, FL 33308",
    "phone": "(954) 555-1472",
    "email": "a.livingston46@email.com",
    "emergencyContact": {
      "name": "Margaret Livingston (Wife)",
      "phone": "(954) 555-1488"
    },
    "chiefComplaint": "Passed out while walking upstairs"
  },
  "problems": [
    {
      "problem": "Exertional syncope \u2014 severe aortic stenosis",
      "icd": "I35.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Arthur Livingston, 79M \u2014 syncope while walking upstairs. No prodrome, no tongue biting, rapid return to consciousness. Echo: severe AS (AVA 0.7cm\u00b2, peak gradient 78mmHg, mean gradient 52mmHg). This is the classic AS triad: angina, syncope, or heart failure."
    },
    {
      "problem": "Severe aortic stenosis \u2014 valve replacement candidacy assessment",
      "icd": "I35.0",
      "onset": "2022",
      "status": "Active",
      "notes": "AVA 0.7cm\u00b2 (severe = <1.0cm\u00b2). Symptomatic severe AS has median survival <2 years without valve replacement. Exertional syncope = surgical urgency."
    },
    {
      "problem": "Aortic stenosis triad \u2014 syncope is middle stage",
      "icd": "I35.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Classic AS symptom progression: angina (5yr survival) \u2192 syncope (3yr survival) \u2192 heart failure (1-2yr survival). Syncope marks critical threshold."
    }
  ],
  "medications": [
    {
      "name": "Urgent cardiology referral \u2014 TAVR or SAVR assessment",
      "sig": "Symptomatic severe AS with exertional syncope = urgent valve replacement. Transcatheter (TAVR) vs surgical (SAVR) decision based on surgical risk score (STS score). High surgical risk \u2192 TAVR. Low-moderate risk \u2192 either.",
      "prescriber": "Cardiology/Cardiac Surgery",
      "start": "2024",
      "refills": 0,
      "status": "URGENT"
    },
    {
      "name": "Avoid vasodilators and diuretics \u2014 hemodynamic dependency",
      "sig": "AS patients are preload-dependent and have fixed cardiac output. Vasodilators (nitrates, ACE inhibitors) and over-diuresis \u2192 profound hypotension. Handle all medications carefully.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 medication restriction"
    },
    {
      "name": "Beta-blockers with caution \u2014 do not reduce heart rate excessively",
      "sig": "AS patients compensate with tachycardia. Over-slowing the heart rate reduces cardiac output further in severe AS. Use beta-blockers only if essential (AF) and with great caution.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Caution"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE Inhibitors (class)",
      "type": "Drug",
      "reaction": "Persistent dry cough (tried lisinopril and enalapril)",
      "severity": "Mild",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2026",
      "bp": "104/72",
      "hr": 58,
      "rr": 18,
      "temp": "97.8\u00b0F",
      "spo2": "96%",
      "wt": "178 lbs",
      "ht": "5'11\"",
      "bmi": 24.8,
      "setting": "ED"
    },
    {
      "date": "10/14/2025",
      "bp": "128/74",
      "hr": 64,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "97%",
      "wt": "180 lbs",
      "ht": "5'11\"",
      "bmi": 25.1,
      "setting": "Cardiology Office"
    },
    {
      "date": "06/20/2025",
      "bp": "132/78",
      "hr": 68,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "182 lbs",
      "ht": "5'11\"",
      "bmi": 25.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/14/2025",
      "type": "Specialist",
      "provider": "Dr. Anil Patel, MD (Cardiology)",
      "cc": "Aortic stenosis surveillance, worsening symptoms",
      "hpi": "79M with known severe AS (bicuspid valve) presents for interval echocardiogram and symptom assessment. Reports progressive exertional dyspnea over past 6 months \u2014 now dyspneic walking half a block (previously 2 blocks). Had one episode of near-syncope 2 weeks ago while climbing stairs \u2014 felt lightheaded, grayed out briefly, grabbed railing. No full LOC. No chest pain with exertion. No PND or orthopnea. Reports fatigue limiting daily activities.",
      "exam": "NAD at rest. CV: Pulsus parvus et tardus; harsh 4/6 crescendo-decrescendo systolic murmur at RUSB radiating to carotids; S2 diminished; S4 present. Lungs: CTAB. Ext: No edema. Neuro: A&O x3, gait steady with cane.",
      "assessment": "1. Severe AS \u2014 now symptomatic (dyspnea + near-syncope); AVA 0.8 cm\u00b2, mean gradient 48\n2. Warrants urgent intervention \u2014 TAVR evaluation",
      "plan": "1. STAT TAVR workup: CT angiography chest/abdomen/pelvis, coronary angiography, carotid duplex, PFTs\n2. Heart team conference scheduled\n3. Strict fall precautions \u2014 no exertion beyond tolerance\n4. Hold amlodipine if SBP <110\n5. Avoid vasodilators, volume depletion\n6. Return 2 weeks with workup results"
    },
    {
      "id": "V002",
      "date": "06/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Catherine Brennan, MD",
      "cc": "Routine follow-up, CKD, gout management",
      "hpi": "78M with severe AS (under cardiology surveillance), CKD 3a, gout presents for routine follow-up. Reports mild exertional dyspnea \u2014 can walk 2 blocks. Gout well controlled on allopurinol. eGFR stable at 54. No chest pain.",
      "exam": "NAD. CV: Harsh systolic murmur RUSB, 3-4/6, radiating to carotids. Lungs: CTAB. Ext: No edema.",
      "assessment": "1. Severe AS \u2014 symptomatic per cardiology; TAVR evaluation planned\n2. CKD 3a \u2014 stable\n3. Gout \u2014 controlled",
      "plan": "1. Continue current medications\n2. Labs: CMP, CBC, uric acid\n3. Follow-up with cardiology for TAVR evaluation\n4. Return 3 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Severe AS Assessment",
      "results": [
        {
          "test": "Echocardiography \u2014 AVA",
          "value": "0.7",
          "unit": "cm\u00b2 (severe <1.0cm\u00b2)",
          "ref": ">2.0 normal",
          "flag": "H"
        },
        {
          "test": "Peak aortic gradient",
          "value": "78",
          "unit": "mmHg",
          "ref": "<20 normal; >64 = very severe",
          "flag": "H"
        },
        {
          "test": "LVEF",
          "value": "55",
          "unit": "% (preserved \u2014 not yet decompensated)",
          "ref": "\u226555%",
          "flag": ""
        },
        {
          "test": "BNP",
          "value": "680",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "STS surgical risk score",
          "value": "5.2%",
          "unit": "(intermediate surgical risk)",
          "ref": "",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Transthoracic Echocardiogram",
      "findings": "Tricuspid aortic valve with severe calcification and restriction. AVA 0.7cm\u00b2 by continuity equation. Peak/mean gradients 78/52mmHg. LVEF 55%. Concentric LVH. Mild mitral regurgitation.",
      "impression": "Severe calcific aortic stenosis. Symptomatic \u2014 exertional syncope. Valve replacement indicated."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-9218",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Pfizer)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2218",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "04/2024",
      "site": "Left deltoid IM",
      "lot": "PV20-822",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "06/2023",
      "site": "Right deltoid IM",
      "lot": "SX23-348",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2023",
      "site": "Right deltoid IM",
      "lot": "SX23-504",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap",
      "date": "05/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-322",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Aortic stenosis requiring AVR at 72, deceased at 84 (CHF)",
    "Mother: Hypertension, alive at 98",
    "Brother: Bicuspid aortic valve (incidental), alive at 76",
    "Sister: Healthy, alive at 74"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired civil engineer; retired 2012"
    ],
    [
      "Marital",
      "Married 54 years"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "1 glass of red wine with dinner most evenings"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Previously walked 2 miles daily; now limited to half-block by dyspnea; uses cane for stability"
    ],
    [
      "Housing",
      "Two-story home with wife; bedroom on second floor \u2014 considering bedroom relocation to first floor"
    ],
    [
      "Safety",
      "Fall risk \u2014 uses cane; handrails on all stairs; no rugs; no firearms"
    ],
    [
      "Advance Directive",
      "Living will and DPOA completed; Full code; DPOA (wife Margaret)"
    ]
  ],
  "meta": {
    "caseId": "cardiac-syncope",
    "diagnosis": "Cardiac Syncope \u2014 Exertional Syncope from Severe Aortic Stenosis",
    "acuity": 2,
    "presentation": "Syncope",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Arthur appears mildly anxious but cooperative, speaking in measured tones and providing detailed responses about his declining activity tolerance. He's clearly concerned about his worsening symptoms but maintains composure, occasionally pausing to catch his breath during longer explanations.",
    "interviewQuestions": [
      "Can you describe what happened when you lost consciousness?",
      "What were you doing just before you passed out?",
      "How has your exercise tolerance changed recently?",
      "Do you experience chest pain or pressure with activity?",
      "Have you noticed any shortness of breath, especially with exertion?",
      "Have you had any similar episodes of passing out before?",
      "Do you ever feel dizzy or lightheaded when standing up?",
      "Have you noticed any swelling in your legs or feet?",
      "Are you taking all your medications as prescribed?",
      "Do you have any known allergies to medications?",
      "Has anyone in your family had heart valve problems?",
      "Do you use tobacco, alcohol, or other substances?",
      "Have you had any recent changes in your medications?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "The fainting spell happened three days ago. I was walking up the stairs to our bedroom when I suddenly felt very lightheaded and the next thing I knew, my wife was helping me up from the floor.",
      "character": "It was sudden - no warning really. One moment I was climbing the stairs, feeling a bit winded, and then everything went black. I came to within a minute or two.",
      "location": "The episode happened on our staircase. I don't have pain anywhere specific, but I do get short of breath with any kind of exertion now.",
      "severity": "I'd say the impact on my life is about a 7 out of 10. I used to be very active, but now I get winded just walking to the mailbox. The fainting really scared my wife and me.",
      "aggravating": "Any physical activity makes me short of breath now. Even light housework or walking more than a block leaves me gasping. Stairs are particularly difficult.",
      "relieving": "Sitting down and resting helps with the shortness of breath. I haven't had another fainting episode since I've been more careful about not overexerting myself.",
      "associated": "I've been getting more and more short of breath over the past six months. Sometimes I feel dizzy with exertion, and occasionally I get chest tightness when I push myself too hard.",
      "denies": "No chest pain at rest, no palpitations, no swelling in my legs or feet, no nausea or vomiting with the episode, and no confusion after I came to.",
      "history": "I've never fainted before this episode three days ago. I have been getting progressively more short of breath over the past six months, which my cardiologist has been monitoring.",
      "medications": "Amlodipine 2.5mg daily; Rosuvastatin 10mg QHS; Allopurinol 200mg daily; Aspirin 81mg daily",
      "allergies": "ACE Inhibitors (class)",
      "family": "My father had severe aortic stenosis and needed a valve replacement when he was 72. He passed away at 84 from heart failure. My brother also has a bicuspid aortic valve, though his hasn't caused problems yet.",
      "social": "I'm a retired civil engineer - retired in 2012. Been married 54 years to a wonderful woman. Never smoked cigarettes. I enjoy a glass of red wine with dinner most evenings. No illicit drugs."
    },
    "examManeuvers": [
      "Cardiac auscultation in all positions",
      "Carotid pulse palpation and auscultation",
      "Blood pressure measurement in both arms",
      "Assessment for jugular venous distension",
      "Pulmonary auscultation",
      "Lower extremity edema assessment",
      "Orthostatic vital signs",
      "Apical impulse palpation",
      "Assessment for hepatojugular reflux"
    ],
    "examFindings": {
      "Cardiac auscultation in all positions": "Harsh 4/6 systolic ejection murmur best heard at right sternal border, radiating to carotids and apex. Murmur increases with squatting and decreases with Valsalva.",
      "Carotid pulse palpation and auscultation": "Delayed, weak carotid upstroke bilaterally (pulsus tardus et parvus). Transmitted murmur heard over both carotid arteries.",
      "Blood pressure measurement in both arms": "Right arm 104/72, Left arm 102/70 - narrow pulse pressure consistent with severe aortic stenosis",
      "Assessment for jugular venous distension": "JVP estimated at 8 cm H2O, no obvious elevation",
      "Pulmonary auscultation": "Clear to auscultation bilaterally, no rales or wheezes",
      "Lower extremity edema assessment": "No peripheral edema, distal pulses present but weak",
      "Orthostatic vital signs": "Supine 104/72 HR 58, Standing 98/68 HR 62 - mild orthostatic changes",
      "Apical impulse palpation": "Sustained, laterally displaced apical impulse suggesting left ventricular hypertrophy",
      "Assessment for hepatojugular reflux": "Negative hepatojugular reflux, liver not enlarged"
    },
    "ddxTargets": [
      "Cardiac syncope from severe AS (correct)",
      "Vasovagal syncope \u2014 prodrome (nausea, diaphoresis); situational trigger; not exertional; not this patient",
      "Arrhythmic syncope (complete heart block, VT) \u2014 ECG; Holter; no warning; could coexist with AS",
      "Orthostatic hypotension \u2014 position-related; tilt table test; not exertional",
      "Hypertrophic obstructive cardiomyopathy (HOCM) \u2014 young athlete; dynamic obstruction; different echo pattern",
      "Pulmonary hypertension with exertional syncope \u2014 RV failure; echo shows elevated RVSP"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the patient's age and assuming syncope is simply due to orthostatic hypotension or medication effects, missing the critical cardiac etiology",
      "prematureClosure": "Risk of stopping evaluation after finding known aortic stenosis without recognizing this represents progression to symptomatic severe disease requiring urgent intervention",
      "availabilityBias": "Recent cases of vasovagal syncope or orthostatic hypotension might bias away from recognizing this as high-risk cardiac syncope requiring immediate cardiology evaluation"
    },
    "coachPrompts": {
      "phase2": "This elderly gentleman presents with syncope. Before you interview him, consider: What are the most concerning causes of syncope in his age group? How will you differentiate between cardiac, neurologic, and vasovagal etiologies? What red flags would indicate immediate life-threatening conditions?",
      "phase5": "You've identified classic findings of severe aortic stenosis in a patient with exertional syncope. What does this constellation of findings tell you about disease progression and urgency? How does the family history of bicuspid valve disease and the physical exam findings change your risk stratification?",
      "finalDebrief": "This case illustrates exertional syncope as a cardinal symptom of severe aortic stenosis - one of the classic triad indicating need for valve intervention. The combination of known bicuspid valve, family history, classic murmur with delayed carotid upstrokes, and exertional symptoms represents a surgical emergency. How did your differential evolve as you gathered more data about the exertional nature and cardiac findings?",
      "final": "Diagnosis: exertional syncope from severe aortic stenosis. Key learning: (1) The AS triad and prognosis: angina (5-year median survival without repair), exertional syncope (3-year survival), heart failure (1-2 year survival). Once symptoms develop, urgent valve replacement is indicated \u2014 the natural history of symptomatic severe AS is rapidly progressive. (2) Exertional syncope mechanism: fixed cardiac output + vasodilation with exercise \u2192 cerebral hypoperfusion. The stenotic valve cannot increase flow to match demand \u2192 drop in BP \u2192 loss of consciousness. (3) Severe AS definitions (echo): AVA <1.0cm\u00b2 + peak gradient >40mmHg + mean gradient >40mmHg + jet velocity >4 m/s. 'Very severe' if Vmax >5 m/s or mean gradient >60mmHg. (4) TAVR vs SAVR: high surgical risk (STS >8%) \u2192 TAVR. Intermediate risk (STS 4-8%) \u2192 TAVR preferred for most. Low risk \u2192 both acceptable, younger patients (SAVR if very young for durability). (5) Hemodynamic precautions in severe AS: preload-dependent (avoid diuretics and vasodilators). Fixed cardiac output (cannot increase with demand). Relative tachycardia compensatory (avoid excessive beta-blockade). AF very poorly tolerated \u2014 loss of atrial kick reduces SV dramatically."
    }
  }
};
