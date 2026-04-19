
window.EMR_DATA = {
  "patient": {
    "name": "Tyler Reeves",
    "dob": "09/14/2001",
    "age": 23,
    "sex": "Male",
    "mrn": "RDX-2025-58214",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield FL — PPO",
    "pcp": "Dr. Samantha Greene, MD",
    "pharmacy": "CVS Pharmacy — 4890 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "3211 College Ave, Fort Lauderdale, FL 33314",
    "phone": "(954) 555-2184",
    "email": "t.reeves01@email.com",
    "emergencyContact": {
      "name": "Karen Reeves (Mother)",
      "phone": "(954) 555-2190"
    },
    "chiefComplaint": "Sudden shortness of breath"
  },
  "problems": [
    {
      "problem": "Marfanoid Habitus",
      "icd": "Q87.40",
      "onset": "2015",
      "status": "Active",
      "notes": "Evaluated by genetics — no formal Marfan syndrome diagnosis; tall, thin body habitus with mild pectus excavatum"
    },
    {
      "problem": "Nicotine Vaping Use",
      "icd": "F17.290",
      "onset": "2019",
      "status": "Active",
      "notes": "Daily vaping since age 18"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2020",
      "status": "Active",
      "notes": ""
    }
  ],
  "medications": [
    {
      "name": "Sertraline 50mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Greene",
      "start": "09/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Albuterol 90mcg MDI PRN",
      "sig": "Inhale 2 puffs by mouth as needed for shortness of breath",
      "prescriber": "Dr. Greene",
      "start": "03/2024",
      "refills": 2,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "08/12/2024",
      "bp": "118/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "154 lbs",
      "ht": "6'3\"",
      "bmi": 19.2,
      "setting": "PCP Office"
    },
    {
      "date": "02/20/2024",
      "bp": "112/68",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "152 lbs",
      "ht": "6'3\"",
      "bmi": 19,
      "setting": "PCP Office"
    },
    {
      "date": "09/05/2023",
      "bp": "110/66",
      "hr": 66,
      "rr": 12,
      "temp": "98.2°F",
      "spo2": "100%",
      "wt": "150 lbs",
      "ht": "6'3\"",
      "bmi": 18.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Samantha Greene, MD",
      "cc": "Anxiety follow-up, vaping cessation counseling",
      "hpi": "Mr. Reeves presents for anxiety follow-up. Reports sertraline is helpful, sleeping better. Continues daily vaping (nicotine 5%). Interested in quitting but has not set a quit date. Occasional mild chest tightness attributed to anxiety. No dyspnea, palpitations, or syncope.",
      "exam": "Tall, thin male in no distress. BMI 19.2. Mild pectus excavatum. Lungs: CTA bilaterally. CV: RRR, no murmurs. No Marfan stigmata beyond habitus (no lens subluxation, normal arm span).",
      "assessment": "1. GAD — well controlled on sertraline\n2. Nicotine vaping use — ongoing\n3. Marfanoid habitus — stable, genetics cleared for Marfan syndrome",
      "plan": "1. Continue sertraline 50mg daily\n2. Vaping cessation counseling — motivational interviewing, offered NRT\n3. Return in 6 months or PRN"
    },
    {
      "id": "V002",
      "date": "03/10/2024",
      "type": "Urgent Care",
      "provider": "Dr. Lisa Chen, MD",
      "cc": "Chest tightness and mild dyspnea",
      "hpi": "23-year-old male presents with 2 days of intermittent chest tightness, worse with deep breathing. No fever, cough, or trauma. Uses nicotine vape daily. History of anxiety. States episodes last 10-15 minutes and resolve with rest.",
      "exam": "Appears anxious but in no respiratory distress. RR 16, SpO2 99%. Lungs: CTA bilaterally. CV: RRR, no murmurs. Chest wall non-tender.",
      "assessment": "1. Chest tightness — likely anxiety-related vs. vaping-associated irritation",
      "plan": "1. Reassurance and breathing exercises\n2. Albuterol MDI PRN prescribed as trial for possible bronchospasm\n3. Strongly advised to stop vaping\n4. Follow up with PCP if recurrent"
    }
  ],
  "labs": [
    {
      "date": "08/12/2024",
      "time": "10:00 AM",
      "orderedBy": "Dr. Greene",
      "collected": "08/12/2024 10:15 AM",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-058214",
      "status": "Final",
      "specimenType": "Serum/Plasma",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.7-1.3",
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
              "value": "4.1",
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
              "test": "CO2",
              "value": "25",
              "unit": "mEq/L",
              "range": "21-31",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.6",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "COVID-19 (Pfizer-BioNTech, Updated 2024-2025)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "GW9283",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "09/05/2023",
      "site": "Right deltoid IM",
      "lot": "AC22B401AB",
      "mfr": "GSK"
    },
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/01/2024",
      "site": "Right deltoid IM",
      "lot": "FL8374",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9, Dose 3 of 3)",
      "date": "04/15/2018",
      "site": "Left deltoid IM",
      "lot": "G9V034",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Father: Marfan syndrome suspected but never diagnosed, tall (6'5\"), mild mitral valve prolapse, age 52, alive",
    "Mother: Anxiety disorder, migraines, age 50, alive",
    "Brother: Healthy, age 20",
    "No family history of sudden cardiac death, aortic dissection, or DVT/PE"
  ],
  "socialHistory": [
    [
      "Occupation",
      "College student (senior) at State University, studying exercise science"
    ],
    [
      "Marital",
      "Single, lives with roommate in off-campus apartment"
    ],
    [
      "Tobacco",
      "No cigarette smoking. Daily nicotine vaping (5% pods) since age 18. Approximately 1 pod per day."
    ],
    [
      "Alcohol",
      "Social — weekends, 4-6 drinks"
    ],
    [
      "Drugs",
      "Occasional marijuana (edibles, 1-2x/month)"
    ],
    [
      "Exercise",
      "Active — plays intramural basketball, lifts weights 3x/week"
    ],
    [
      "Housing",
      "Second-floor apartment, Fort Lauderdale"
    ],
    [
      "Safety",
      "Wears seatbelt. No firearms."
    ],
    [
      "Advance Directive",
      "None on file. Mother listed as emergency contact."
    ]
  ],
  "meta": {
    "caseId": "pneumothorax",
    "diagnosis": "Primary Spontaneous Pneumothorax",
    "acuity": 2,
    "presentation": "Shortness of Breath",
    "category": "pulmonary"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Tyler appears mildly anxious but cooperative, speaking in short sentences due to subtle breathing discomfort. He's forthcoming about his symptoms but initially downplays their severity, attributing them to anxiety. He demonstrates mild distress and sits leaning slightly forward.",
    "interviewQuestions": [
      "When did your shortness of breath start?",
      "Can you describe what the shortness of breath feels like?",
      "Are you having any chest pain right now?",
      "Where exactly in your chest do you feel discomfort?",
      "On a scale of 1-10, how severe is your breathing difficulty?",
      "Does anything make your breathing worse or better?",
      "Have you had any coughing, fever, or wheezing?",
      "Have you ever had this type of breathing problem before?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Tell me about your family medical history",
      "Do you smoke cigarettes or vape?",
      "What were you doing when this started?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean. Could you ask that differently? I'm mainly just having trouble catching my breath.",
      "onset": "It started suddenly about 2 hours ago while I was sitting in my dorm room studying. I was just reading and suddenly felt like I couldn't get enough air.",
      "character": "It feels like I can't take a deep breath, like there's not enough room in my chest. It's hard to describe - like my lung isn't expanding all the way.",
      "location": "It's mainly on my right side, kind of sharp when I try to breathe deeply. The pain is right here on the right side of my chest.",
      "severity": "The breathing difficulty is about a 6 out of 10. The chest pain is maybe a 4, but it's sharp when I breathe in deep.",
      "aggravating": "Taking deep breaths makes the pain worse. Lying flat makes me feel more short of breath.",
      "relieving": "Sitting up and taking shallow breaths helps a little. I tried my inhaler but it didn't really help much.",
      "associated": "No cough, no fever. I feel a little lightheaded sometimes but I think that's just from not breathing well.",
      "denies": "No cough, no fever, no sputum. No leg swelling. Haven't been sick recently. No recent travel or long car rides.",
      "history": "I've had some mild chest discomfort before, maybe once or twice in the past year, but nothing this bad or this sudden.",
      "medications": "Sertraline 50mg daily; Albuterol 90mcg MDI PRN",
      "allergies": "NKDA",
      "family": "My dad is really tall like me, about 6'5\", and doctors have mentioned he might have Marfan syndrome but he's never been officially diagnosed. He has some heart valve issue but it's mild.",
      "social": "I'm a senior at State University studying exercise science. I don't smoke cigarettes but I do vape daily - nicotine pods, about one a day since I was 18. I drink socially on weekends and occasionally use edibles."
    },
    "examManeuvers": [
      "General appearance and respiratory distress assessment",
      "Vital signs including oxygen saturation",
      "Chest inspection for symmetry and respiratory effort",
      "Palpation for chest wall tenderness and tactile fremitus",
      "Percussion of both lung fields",
      "Auscultation of bilateral lung fields",
      "Cardiac auscultation",
      "Assessment for Marfanoid features",
      "Tracheal position assessment",
      "Chest wall expansion assessment"
    ],
    "examFindings": {
      "General appearance and respiratory distress assessment": "Tall, thin male in mild respiratory distress, sitting upright and leaning forward slightly",
      "Vital signs including oxygen saturation": "BP 118/72, HR 68, RR 22, Temp 98.4°F, SpO2 99% on room air",
      "Chest inspection for symmetry and respiratory effort": "Decreased chest wall movement on right side, using accessory muscles mildly",
      "Palpation for chest wall tenderness and tactile fremitus": "No chest wall tenderness, decreased tactile fremitus over right upper chest",
      "Percussion of both lung fields": "Hyperresonant percussion note over right upper chest, normal on left",
      "Auscultation of bilateral lung fields": "Decreased breath sounds over right upper lobe, clear breath sounds on left",
      "Cardiac auscultation": "Regular rate and rhythm, no murmurs, rubs, or gallops",
      "Assessment for Marfanoid features": "Tall stature (6'2\"), arm span greater than height, arachnodactyly present",
      "Tracheal position assessment": "Trachea midline, no deviation",
      "Chest wall expansion assessment": "Asymmetric expansion with decreased movement on right side"
    },
    "ddxTargets": [
      "Primary Spontaneous Pneumothorax (correct diagnosis)",
      "Anxiety/Panic Attack",
      "Exercise-induced Asthma",
      "Pulmonary Embolism",
      "Myocardial Infarction",
      "Pneumonia",
      "Costochondritis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on anxiety given patient's psychiatric history and initial presentation for anxiety follow-up, missing the acute respiratory pathology",
      "prematureClosure": "May stop investigating after noting anxiety history and young age, failing to perform thorough respiratory examination",
      "availabilityBias": "Recent cases of anxiety or asthma may lead to missing the classic presentation of pneumothorax in a tall, thin young male who vapes"
    },
    "coachPrompts": {
      "phase2": "Before interviewing Tyler, consider his physical characteristics and risk factors. What specific questions will help you differentiate between respiratory causes and anxiety? Think about the classic patient profile for spontaneous pneumothorax.",
      "phase5": "Your exam findings show asymmetric chest findings on the right side. How do the percussion and auscultation findings fit together? What does hyperresonance with decreased breath sounds suggest, especially in this patient population?",
      "finalDebrief": "This case highlights how psychiatric comorbidities can create diagnostic challenges. Tyler's Marfanoid habitus and vaping history were key risk factors for spontaneous pneumothorax. The combination of sudden onset, unilateral chest findings, and patient demographics should have elevated this diagnosis. How did the physical exam findings help differentiate this from anxiety or other respiratory conditions?"
    }
  }
};
