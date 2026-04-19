// Virtual EMR Case: Anxiety/Panic Attack
// Variant: anxiety-panic-attack | Acuity: ESI-4
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Sofia Delgado",
    "patientHPI": "These panic episodes are getting worse and happening way more often now, like three or four times a week, where suddenly my chest gets tight, I can't get enough air, my hands and mouth get tingly, my heart races, and I feel like something terrible is about to happen.",
    "dob": "11/03/1996",
    "age": 28,
    "sex": "Female",
    "mrn": "RDX-2025-63718",
    "pronouns": "She/Her",
    "insurance": "Aetna PPO",
    "pcp": "Dr. Rachel Kim, MD",
    "pharmacy": "Walgreens — 3100 Broward Blvd, Fort Lauderdale, FL",
    "language": "English, Spanish",
    "race": "Hispanic or Latino",
    "address": "2354 S Halsted St, Milwaukee, WI 53209",
    "phone": "(954) 555-8472",
    "email": "s.delgado96@email.com",
    "emergencyContact": {
      "name": "Maria Delgado (Mother)",
      "phone": "(954) 555-8490"
    },
    "chiefComplaint": "Shortness of breath"
  },
  "problems": [
    {
      "problem": "Panic Disorder",
      "icd": "F41.0",
      "onset": "2021",
      "status": "Active",
      "notes": "3-4 episodes per month, worse with work stress"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2019",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Iron Deficiency Anemia",
      "icd": "D50.9",
      "onset": "2023",
      "status": "Active",
      "notes": "Heavy menses contributing factor"
    },
    {
      "problem": "Mitral Valve Prolapse",
      "icd": "I34.1",
      "onset": "2022",
      "status": "Active",
      "notes": "Mild, incidental on echo. No regurgitation."
    }
  ],
  "medications": [
    {
      "name": "Escitalopram 10mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Kim",
      "start": "05/2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Ferrous Sulfate 325mg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach with vitamin C",
      "prescriber": "Dr. Kim",
      "start": "08/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lorazepam 0.5mg PRN",
      "sig": "Take 1 tablet by mouth as needed for severe panic attacks, max 2 per day",
      "prescriber": "Dr. Kim",
      "start": "01/2022",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Norethindrone-Ethinyl Estradiol (Junel 1/20)",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "09/2023",
      "refills": 11,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Amoxicillin",
      "type": "Drug",
      "reaction": "Diffuse maculopapular rash",
      "severity": "Mild",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "12/10/2024",
      "bp": "112/70",
      "hr": 78,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "128 lbs",
      "ht": "5'4\"",
      "bmi": 22,
      "setting": "PCP Office"
    },
    {
      "date": "08/15/2024",
      "bp": "118/74",
      "hr": 82,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "126 lbs",
      "ht": "5'4\"",
      "bmi": 21.6,
      "setting": "PCP Office"
    },
    {
      "date": "03/20/2024",
      "bp": "108/66",
      "hr": 74,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "100%",
      "wt": "125 lbs",
      "ht": "5'4\"",
      "bmi": 21.5,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Rachel Kim, MD",
      "cc": "Anxiety follow-up, increasing panic attacks",
      "hpi": "Ms. Delgado reports increased frequency of panic attacks over the past 2 months, now 3-4 per week (previously 3-4 per month). Episodes include sudden onset chest tightness, feeling of air hunger, tingling in hands and around mouth, racing heart, and sense of impending doom lasting 10-20 minutes. Triggers include work deadlines and crowded spaces. Denies suicidal ideation. Using lorazepam 2-3 times per week.",
      "exam": "Anxious-appearing young woman. Vitals normal. Lungs: CTA. CV: RRR, mid-systolic click (known MVP), no murmur. Neuro: intact. No tremor.",
      "assessment": "1. Panic disorder — worsening, increased frequency\n2. GAD — contributing to panic escalation\n3. Iron deficiency anemia — improving on supplementation",
      "plan": "1. Increase escitalopram to 15mg daily (discussed titration)\n2. CBT referral for panic disorder — patient agreeable\n3. Continue lorazepam PRN but limit to 2x/week max\n4. Recheck CBC/ferritin in 3 months\n5. If no improvement in 6 weeks, consider adding buspirone"
    },
    {
      "id": "V002",
      "date": "06/02/2024",
      "type": "ED",
      "provider": "Dr. Thomas Mitchell, MD",
      "cc": "Chest pain, difficulty breathing, thinks she is having a heart attack",
      "hpi": "28-year-old female presents via EMS with acute onset chest tightness, dyspnea, palpitations, bilateral hand tingling, and perioral numbness that began approximately 30 minutes ago while at a concert. Patient is hyperventilating. States 'I can't breathe, I think I'm dying.' History of panic disorder.",
      "exam": "Tachycardic (HR 112), tachypneic (RR 24), SpO2 100% on RA. Diaphoretic, tearful, hyperventilating. Lungs: CTA, good air movement. CV: tachycardic, regular, no murmurs. Hands: carpopedal spasm bilaterally. ECG: sinus tachycardia, normal intervals, no ST changes.",
      "assessment": "1. Panic attack with hyperventilation syndrome",
      "plan": "1. Reassurance and coaching of slow breathing\n2. Lorazepam 0.5mg PO given in ED\n3. ECG, troponin, BMP all normal\n4. Discharged after 2 hours with symptom resolution\n5. Follow up with PCP within 1 week"
    }
  ],
  "labs": [
    {
      "date": "12/10/2024",
      "time": "11:30 AM",
      "orderedBy": "Dr. Kim",
      "collected": "12/10/2024 11:45 AM",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-163718",
      "status": "Final",
      "specimenType": "Whole Blood / Serum",
      "fasting": "No",
      "groups": [
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
              "value": "11.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "35.4",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "MCV",
              "value": "78",
              "unit": "fL",
              "range": "80-100",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "282",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "RDW",
              "value": "15.8",
              "unit": "%",
              "range": "11.5-14.5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "IRON STUDIES",
          "results": [
            {
              "test": "Ferritin",
              "value": "18",
              "unit": "ng/mL",
              "range": "12-150",
              "flag": ""
            },
            {
              "test": "Iron",
              "value": "48",
              "unit": "mcg/dL",
              "range": "60-170",
              "flag": "L"
            },
            {
              "test": "TIBC",
              "value": "420",
              "unit": "mcg/dL",
              "range": "250-370",
              "flag": "H"
            },
            {
              "test": "Iron Saturation",
              "value": "11",
              "unit": "%",
              "range": "20-50",
              "flag": "L"
            }
          ]
        },
        {
          "name": "THYROID PANEL",
          "results": [
            {
              "test": "TSH",
              "value": "2.1",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": ""
            },
            {
              "test": "Free T4",
              "value": "1.2",
              "unit": "ng/dL",
              "range": "0.8-1.8",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "06/02/2024",
      "study": "CHEST X-RAY PORTABLE AP",
      "accession": "IMG-2024-34912",
      "status": "FINAL",
      "orderedBy": "Dr. Thomas Mitchell, MD",
      "readBy": "Dr. Robert Vasquez, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "Chest pain, dyspnea, r/o pneumothorax vs. PE",
      "technique": "Single AP portable chest radiograph.",
      "findings": "Heart size normal. Lungs are clear bilaterally with no focal consolidation, effusion, or pneumothorax. Mediastinal contours are normal. No acute osseous abnormality.",
      "impression": "1. No acute cardiopulmonary abnormality.",
      "dictated": "06/02/2024 09:45 PM",
      "verified": "06/02/2024 10:30 PM"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/22/2024",
      "site": "Left deltoid IM",
      "lot": "FL7291B",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Moderna, Updated 2024-2025)",
      "date": "10/22/2024",
      "site": "Right deltoid IM",
      "lot": "MD3847",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "03/20/2024",
      "site": "Left deltoid IM",
      "lot": "AD19F402",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Mother: Generalized anxiety disorder, panic disorder, hypothyroidism, age 56, alive",
    "Father: Hypertension, hyperlipidemia, age 60, alive",
    "Maternal grandmother: Depression, died age 78 (stroke)",
    "Sister: Anxiety disorder, age 31",
    "No family history of sudden cardiac death or cardiomyopathy"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Marketing coordinator at a tech startup. High-stress environment, long hours."
    ],
    [
      "Marital",
      "Single, lives alone in apartment"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social — wine 2-3 glasses on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Yoga 2x/week, occasional jogging"
    ],
    [
      "Housing",
      "One-bedroom apartment, Fort Lauderdale. Second floor."
    ],
    [
      "Safety",
      "Feels safe at home. No IPV."
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "anxiety-panic-attack",
    "diagnosis": "Panic Attack with Hyperventilation",
    "acuity": 4,
    "presentation": "Shortness of Breath",
    "category": "psychiatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Sofia appears visibly anxious and hypervigilant, frequently touching her chest and taking deep breaths during the conversation. She is very forthcoming about her symptoms and medical history, speaking rapidly and expressing significant distress about the increasing frequency of her episodes.",
    "interviewQuestions": [
      "Can you describe exactly what happens during these episodes?",
      "How long do these episodes typically last?",
      "What triggers these episodes, if anything?",
      "Have you noticed any pattern to when they occur?",
      "Are you taking your prescribed medications regularly?",
      "Have you been under any additional stress lately?",
      "Do you experience chest pain during these episodes?",
      "Have you had any recent changes in your work or personal life?",
      "Do you feel like you're going to die or lose control during episodes?",
      "Have you tried using your Lorazepam when symptoms start?",
      "Are you experiencing any sleep difficulties?",
      "Have you had any recent medical appointments or changes to medications?",
      "Do you avoid certain situations because you're afraid of having an episode?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm having trouble focusing right now.",
      "onset": "These started about three years ago after I got my current job, but they've gotten so much worse in the past two months. They come on suddenly, like out of nowhere.",
      "character": "It feels like I can't get enough air, like I'm suffocating. My chest feels tight and heavy, and I start breathing really fast but it doesn't help.",
      "location": "The tightness is right here in my chest, and the tingling starts in my hands and then spreads to around my mouth and lips.",
      "severity": "During an episode, it's easily a 9 out of 10. I feel like I'm going to die. It's affecting my work because I'm constantly worried about when the next one will happen.",
      "aggravating": "Stress at work definitely makes them worse, especially big presentations or tight deadlines. Crowded places seem to trigger them too, and lack of sleep.",
      "relieving": "The Lorazepam helps if I take it early enough, and sometimes deep breathing exercises work, but usually I just have to wait for it to pass.",
      "associated": "During episodes I get dizzy, nauseous, sweaty, and my heart pounds so hard I can feel it in my throat. I also get this overwhelming sense of dread.",
      "denies": "No fever, no cough, no recent illness, no leg swelling, no fainting, and no chest pain that feels like pressure or squeezing.",
      "history": "Yes, I was diagnosed with panic disorder three years ago. These episodes are exactly like my previous ones, just happening much more frequently now.",
      "medications": "Escitalopram 10mg daily; Ferrous Sulfate 325mg daily; Lorazepam 0.5mg PRN; Norethindrone-Ethinyl Estradiol (Junel 1/20)",
      "allergies": "Amoxicillin",
      "family": "My mom has the same issues - panic disorder and generalized anxiety. She's been dealing with it for years and also takes medication for it.",
      "social": "I work as a marketing coordinator at a tech startup, and it's been incredibly stressful lately with a major product launch. I'm single, live alone, don't smoke, and only drink wine socially on weekends."
    },
    "examManeuvers": [
      "Cardiovascular examination",
      "Pulmonary examination",
      "Mental status examination",
      "Thyroid palpation",
      "Neurological examination focusing on cranial nerves",
      "Assessment for signs of hyperventilation",
      "Extremity examination for cyanosis or edema",
      "Vital signs assessment",
      "Cardiac auscultation in multiple positions"
    ],
    "examFindings": {
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs appreciated, normal S1 and S2, no gallops or rubs",
      "Pulmonary examination": "Clear to auscultation bilaterally, no wheezes, rales, or rhonchi, normal respiratory effort at rest",
      "Mental status examination": "Alert and oriented, anxious affect, speech is rapid and pressured, no suicidal ideation",
      "Thyroid palpation": "Thyroid normal in size and consistency, no nodules or tenderness",
      "Neurological examination focusing on cranial nerves": "Cranial nerves II-XII grossly intact, no focal neurological deficits",
      "Assessment for signs of hyperventilation": "Patient demonstrates rapid, shallow breathing pattern when describing episodes, no current carpopedal spasm",
      "Extremity examination for cyanosis or edema": "No cyanosis, clubbing, or edema noted, capillary refill less than 2 seconds",
      "Vital signs assessment": "BP 112/70, HR 78 and regular, RR 16, SpO2 99% on room air, temperature 98.4°F",
      "Cardiac auscultation in multiple positions": "Soft mid-systolic click heard best at apex, consistent with known mitral valve prolapse, no murmur"
    },
    "ddxTargets": [
      "Panic Attack with Hyperventilation",
      "Generalized Anxiety Disorder exacerbation",
      "Hyperthyroidism",
      "Myocardial Infarction",
      "Pulmonary Embolism",
      "Asthma exacerbation",
      "Mitral valve prolapse with arrhythmia"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on psychiatric history and missing organic causes like hyperthyroidism, cardiac arrhythmias, or medication-induced symptoms",
      "prematureClosure": "May quickly assume recurrent panic attacks without considering why frequency has increased - could miss thyroid dysfunction or medication non-adherence",
      "availabilityBias": "Young female with anxiety history may bias toward psychiatric diagnosis, potentially overlooking cardiac causes or substance use"
    },
    "coachPrompts": {
      "phase2": "You've identified several possibilities for her shortness of breath. Given her psychiatric history, what additional questions would help you determine if this represents a worsening of her known condition versus a new organic process? Consider what might cause her symptoms to worsen recently.",
      "phase5": "Your history and physical exam findings are consistent with your leading diagnosis. How do the normal vital signs and physical exam help differentiate between your psychiatric and organic differentials? What aspects of the history are most supportive of panic disorder exacerbation?",
      "finalDebrief": "This case highlights the importance of not dismissing symptoms in patients with known psychiatric conditions, while also recognizing when clinical presentation fits established patterns. How did the patient's description of symptom onset, triggers, and previous similar episodes support the diagnosis of panic attack with hyperventilation?"
    }
  }
};
