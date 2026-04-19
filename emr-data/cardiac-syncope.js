
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
    "pharmacy": "Publix Pharmacy — 2200 S University Dr, Riverside, FL",
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
      "problem": "Severe Aortic Stenosis — Calcific/Degenerative",
      "icd": "I35.0",
      "onset": "2023",
      "status": "Active",
      "notes": "Bicuspid aortic valve; AVA 0.8 cm²; mean gradient 48 mmHg (echo 10/2025); symptomatic — exertional dyspnea, now syncope; TAVR evaluation in progress"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "1998",
      "status": "Active",
      "notes": "On low-dose amlodipine; careful BP management given AS — avoid overreduction"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2004",
      "status": "Active",
      "notes": "On rosuvastatin"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3a",
      "icd": "N18.31",
      "onset": "2021",
      "status": "Active",
      "notes": "eGFR 54; hypertensive nephrosclerosis"
    },
    {
      "problem": "Bicuspid Aortic Valve",
      "icd": "Q23.1",
      "onset": "2010",
      "status": "Active",
      "notes": "Incidental finding; progressive stenosis over 15 years; now severe"
    },
    {
      "problem": "Gout",
      "icd": "M10.9",
      "onset": "2016",
      "status": "Active",
      "notes": "On allopurinol; well controlled; last flare 2024"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 2.5mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "06/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Rosuvastatin 10mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Brennan",
      "start": "03/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Allopurinol 200mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "08/2017",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "01/2010",
      "refills": 11,
      "status": "Active"
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
      "temp": "97.8°F",
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
      "temp": "98.2°F",
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
      "temp": "98.4°F",
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
      "hpi": "79M with known severe AS (bicuspid valve) presents for interval echocardiogram and symptom assessment. Reports progressive exertional dyspnea over past 6 months — now dyspneic walking half a block (previously 2 blocks). Had one episode of near-syncope 2 weeks ago while climbing stairs — felt lightheaded, grayed out briefly, grabbed railing. No full LOC. No chest pain with exertion. No PND or orthopnea. Reports fatigue limiting daily activities.",
      "exam": "NAD at rest. CV: Pulsus parvus et tardus; harsh 4/6 crescendo-decrescendo systolic murmur at RUSB radiating to carotids; S2 diminished; S4 present. Lungs: CTAB. Ext: No edema. Neuro: A&O x3, gait steady with cane.",
      "assessment": "1. Severe AS — now symptomatic (dyspnea + near-syncope); AVA 0.8 cm², mean gradient 48\n2. Warrants urgent intervention — TAVR evaluation",
      "plan": "1. STAT TAVR workup: CT angiography chest/abdomen/pelvis, coronary angiography, carotid duplex, PFTs\n2. Heart team conference scheduled\n3. Strict fall precautions — no exertion beyond tolerance\n4. Hold amlodipine if SBP <110\n5. Avoid vasodilators, volume depletion\n6. Return 2 weeks with workup results"
    },
    {
      "id": "V002",
      "date": "06/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Catherine Brennan, MD",
      "cc": "Routine follow-up, CKD, gout management",
      "hpi": "78M with severe AS (under cardiology surveillance), CKD 3a, gout presents for routine follow-up. Reports mild exertional dyspnea — can walk 2 blocks. Gout well controlled on allopurinol. eGFR stable at 54. No chest pain.",
      "exam": "NAD. CV: Harsh systolic murmur RUSB, 3-4/6, radiating to carotids. Lungs: CTAB. Ext: No edema.",
      "assessment": "1. Severe AS — symptomatic per cardiology; TAVR evaluation planned\n2. CKD 3a — stable\n3. Gout — controlled",
      "plan": "1. Continue current medications\n2. Labs: CMP, CBC, uric acid\n3. Follow-up with cardiology for TAVR evaluation\n4. Return 3 months"
    }
  ],
  "labs": [
    {
      "date": "10/14/2025",
      "time": "08:30",
      "orderedBy": "Dr. Patel",
      "collected": "10/14/2025 08:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-851440",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
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
              "value": "28",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "eGFR",
              "value": "54",
              "unit": "mL/min/1.73m²",
              "range": ">60",
              "flag": "L"
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
              "range": "3.5-5.1",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "BNP",
          "results": [
            {
              "test": "BNP",
              "value": "482",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "6.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "38.8",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "188",
              "unit": "K/uL",
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
      "date": "10/14/2025",
      "study": "ECHOCARDIOGRAM — TRANSTHORACIC",
      "accession": "IMG-2025-101444",
      "status": "FINAL",
      "orderedBy": "Dr. Patel",
      "readBy": "Dr. Anil Patel, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Known severe AS — interval assessment, worsening symptoms",
      "technique": "Complete 2D and Doppler echocardiogram with tissue Doppler imaging.",
      "findings": "Aortic valve: Bicuspid (raphe-type, R-L fusion). Severely calcified and restricted. Peak velocity 4.6 m/s, mean gradient 48 mmHg, AVA 0.8 cm² by continuity equation. Severe aortic stenosis.\n\nLeft ventricle: Normal cavity size. Concentric LVH (septal wall 1.4 cm). EF 55% (preserved). No regional wall motion abnormalities. Grade I diastolic dysfunction.\n\nMitral valve: Mild annular calcification. Trace mitral regurgitation.\n\nRight ventricle: Normal size and function. TAPSE 2.2 cm.\n\nAortic root: 3.8 cm (mildly dilated — consistent with bicuspid aortic valve).\n\nNo pericardial effusion.",
      "impression": "1. Severe aortic stenosis (bicuspid valve) — AVA 0.8 cm², mean gradient 48 mmHg. Progressed from prior (AVA 1.0 cm², 03/2024).\n2. Concentric LVH — pressure overload.\n3. Preserved LVEF 55%.\n4. Mildly dilated aortic root (3.8 cm) — monitor for aortopathy.",
      "dictated": "10/14/2025 11:00",
      "verified": "10/14/2025 13:30"
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
      "Two-story home with wife; bedroom on second floor — considering bedroom relocation to first floor"
    ],
    [
      "Safety",
      "Fall risk — uses cane; handrails on all stairs; no rugs; no firearms"
    ],
    [
      "Advance Directive",
      "Living will and DPOA completed; Full code; DPOA (wife Margaret)"
    ]
  ],
  "meta": {
    "caseId": "cardiac-syncope",
    "diagnosis": "Cardiac Syncope (Exertional Syncope Secondary to Severe Aortic Stenosis — Bicuspid Valve, AVA 0.8 cm², Pending TAVR Evaluation)",
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
      "Cardiac Syncope (Exertional Syncope Secondary to Severe Aortic Stenosis — Bicuspid Valve, AVA 0.8 cm², Pending TAVR Evaluation) (correct diagnosis)",
      "Hypertrophic Cardiomyopathy with Outflow Obstruction",
      "Vasovagal Syncope",
      "Complete Heart Block or High-Grade AV Block",
      "Ventricular Tachycardia/Sudden Cardiac Death",
      "Orthostatic Hypotension",
      "Pulmonary Embolism"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the patient's age and assuming syncope is simply due to orthostatic hypotension or medication effects, missing the critical cardiac etiology",
      "prematureClosure": "Risk of stopping evaluation after finding known aortic stenosis without recognizing this represents progression to symptomatic severe disease requiring urgent intervention",
      "availabilityBias": "Recent cases of vasovagal syncope or orthostatic hypotension might bias away from recognizing this as high-risk cardiac syncope requiring immediate cardiology evaluation"
    },
    "coachPrompts": {
      "phase2": "This elderly gentleman presents with syncope. Before you interview him, consider: What are the most concerning causes of syncope in his age group? How will you differentiate between cardiac, neurologic, and vasovagal etiologies? What red flags would indicate immediate life-threatening conditions?",
      "phase5": "You've identified classic findings of severe aortic stenosis in a patient with exertional syncope. What does this constellation of findings tell you about disease progression and urgency? How does the family history of bicuspid valve disease and the physical exam findings change your risk stratification?",
      "finalDebrief": "This case illustrates exertional syncope as a cardinal symptom of severe aortic stenosis - one of the classic triad indicating need for valve intervention. The combination of known bicuspid valve, family history, classic murmur with delayed carotid upstrokes, and exertional symptoms represents a surgical emergency. How did your differential evolve as you gathered more data about the exertional nature and cardiac findings?"
    }
  }
};
