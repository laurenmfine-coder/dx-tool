// Virtual EMR Case: Anxiety/Panic Attack (Presenting as Acute Dyspnea)
// Variant: anxietypanic-attack | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Daniela Restrepo",
    "patientHPI": "I've been doing pretty well with my anxiety medication, but last month I had this really scary episode at work when we had a big deadline coming up. My heart started racing out of nowhere, I felt like I couldn't catch my breath, and I got really dizzy and sweaty. I thought something was seriously wrong with me, but I used the breathing techniques my therapist taught me and it went away after about twenty minutes.",
    "dob": "07/19/1998",
    "age": 27,
    "sex": "Female",
    "mrn": "RDX-2025-40428",
    "pronouns": "She/Her",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Lourdes Figueroa, MD",
    "pharmacy": "CVS Pharmacy — 3201 N University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Colombian American)",
    "address": "3317 Mulberry St, Milwaukee, WI 53206",
    "phone": "(954) 555-2198",
    "email": "d.restrepo98@email.com",
    "emergencyContact": {
      "name": "Isabella Restrepo (Mother)",
      "phone": "(954) 555-2210"
    }
  },
  "problems": [
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2020",
      "status": "Active",
      "notes": "Diagnosed during COVID; on sertraline; has had intermittent panic episodes since 2021; CBT x 6 months in 2022"
    },
    {
      "problem": "Panic Disorder",
      "icd": "F41.0",
      "onset": "2021",
      "status": "Active",
      "notes": "3-4 episodes per year; typically triggered by work stress; prior ED visit 2023 for chest tightness — cardiac workup negative"
    },
    {
      "problem": "Mitral Valve Prolapse",
      "icd": "I34.1",
      "onset": "2019",
      "status": "Active",
      "notes": "Incidental finding on echo; trivial MR; asymptomatic; no endocarditis prophylaxis needed"
    },
    {
      "problem": "Iron Deficiency Anemia",
      "icd": "D50.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Related to heavy menses; on iron supplementation; Hgb normalized to 12.4"
    },
    {
      "problem": "Gastroesophageal Reflux Disease",
      "icd": "K21.0",
      "onset": "2022",
      "status": "Active",
      "notes": "On omeprazole PRN; exacerbated by stress and coffee intake"
    }
  ],
  "medications": [
    {
      "name": "Sertraline 100mg daily",
      "sig": "Take 1 tablet by mouth once daily in the morning",
      "prescriber": "Dr. Figueroa",
      "start": "08/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Ferrous Sulfate 325mg daily",
      "sig": "Take 1 tablet by mouth once daily on empty stomach with vitamin C",
      "prescriber": "Dr. Figueroa",
      "start": "03/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg PRN",
      "sig": "Take 1 capsule by mouth daily as needed for reflux symptoms",
      "prescriber": "Dr. Figueroa",
      "start": "06/2022",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Norgestimate-Ethinyl Estradiol (Sprintec) daily",
      "sig": "Take 1 tablet by mouth daily per pack directions",
      "prescriber": "Dr. Figueroa",
      "start": "01/2021",
      "refills": 11,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Amoxicillin",
      "type": "Drug",
      "reaction": "Hives on trunk and arms",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/18/2026",
      "bp": "142/88",
      "hr": 118,
      "rr": 26,
      "temp": "98.8°F",
      "spo2": "99%",
      "wt": "138 lbs",
      "ht": "5'5\"",
      "bmi": 23,
      "setting": "ED"
    },
    {
      "date": "10/15/2025",
      "bp": "118/72",
      "hr": 74,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "136 lbs",
      "ht": "5'5\"",
      "bmi": 22.6,
      "setting": "PCP Office"
    },
    {
      "date": "06/20/2025",
      "bp": "114/70",
      "hr": 68,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "100%",
      "wt": "134 lbs",
      "ht": "5'5\"",
      "bmi": 22.3,
      "setting": "PCP Office"
    },
    {
      "date": "03/10/2025",
      "bp": "116/74",
      "hr": 72,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "135 lbs",
      "ht": "5'5\"",
      "bmi": 22.5,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/15/2025",
      "type": "Primary Care",
      "provider": "Dr. Lourdes Figueroa, MD",
      "cc": "Anxiety management, refill medications",
      "hpi": "27F with GAD and panic disorder presents for routine follow-up. Reports anxiety well-managed on sertraline 100mg. Had one panic episode in August triggered by work deadline — self-resolved within 20 minutes with breathing exercises. No ER visits since 2023. Denies suicidal ideation. Reports good sleep with occasional difficulty falling asleep during stressful weeks. Menses regular on OCP. Iron levels improved.",
      "exam": "NAD, well-appearing. CV: RRR, midsystolic click heard at apex (known MVP). Lungs: CTAB. Psych: Anxious affect but cooperative, organized thought process, no SI/HI.",
      "assessment": "1. GAD/Panic Disorder — stable on sertraline\n2. MVP — asymptomatic, stable\n3. IDA — resolved on supplementation",
      "plan": "1. Continue sertraline 100mg\n2. Discussed resuming therapy if panic episodes increase\n3. Recheck ferritin in 3 months\n4. Return 6 months or PRN"
    },
    {
      "id": "V002",
      "date": "05/08/2023",
      "type": "ED",
      "provider": "Dr. Steven Ramirez, MD (Emergency Medicine)",
      "cc": "Chest tightness, dyspnea, palpitations",
      "hpi": "25F presents with acute onset chest tightness, difficulty breathing, and palpitations x 45 minutes while at work. Reports feeling like she 'can't get enough air' and 'heart is pounding.' Accompanied by tingling in both hands and lightheadedness. Denies fevers, cough, leg swelling. States she has had similar episodes before. Very anxious, tearful.",
      "exam": "Appears anxious, tachypneic but speaking in full sentences. CV: Tachycardic at 116, regular; click at apex; no murmurs. Lungs: CTAB, no wheezing. Ext: No edema, no calf tenderness. Neuro: A&O x3, bilateral hand paresthesias (circumoral tingling also reported).",
      "assessment": "1. Acute panic attack — likely diagnosis given history, negative workup\n2. Rule out PE, ACS — low probability but workup completed given tachycardia",
      "plan": "1. ECG — NSR with sinus tachycardia, no ST changes\n2. Troponin x1 — negative\n3. D-dimer — negative\n4. CXR — normal\n5. Ativan 0.5mg PO x1 with symptomatic relief\n6. Discharged with PCP follow-up for anxiety management"
    }
  ],
  "labs": [
    {
      "date": "10/15/2025",
      "time": "10:00",
      "orderedBy": "Dr. Figueroa",
      "collected": "10/15/2025 10:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-851033",
      "status": "Final",
      "specimenType": "Venous Blood",
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
              "value": "12.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "37.8",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "262",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "MCV",
              "value": "84",
              "unit": "fL",
              "range": "80-100",
              "flag": ""
            }
          ]
        },
        {
          "name": "IRON STUDIES",
          "results": [
            {
              "test": "Iron",
              "value": "72",
              "unit": "mcg/dL",
              "range": "60-170",
              "flag": ""
            },
            {
              "test": "TIBC",
              "value": "320",
              "unit": "mcg/dL",
              "range": "250-370",
              "flag": ""
            },
            {
              "test": "Ferritin",
              "value": "38",
              "unit": "ng/mL",
              "range": "12-150",
              "flag": ""
            },
            {
              "test": "Transferrin Saturation",
              "value": "22",
              "unit": "%",
              "range": "20-50",
              "flag": ""
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
      "date": "05/08/2023",
      "study": "CHEST X-RAY PA AND LATERAL",
      "accession": "IMG-2023-30582",
      "status": "FINAL",
      "orderedBy": "Dr. Ramirez (ED)",
      "readBy": "Dr. Alan Wu, MD (Radiology)",
      "facility": "Memorial Regional Hospital — Hollywood, FL",
      "priority": "STAT",
      "clinical": "Dyspnea, chest tightness, rule out pneumothorax/PE",
      "technique": "PA and lateral views of the chest obtained.",
      "findings": "Heart: Normal size and configuration.\n\nLungs: Clear bilaterally. No infiltrates, effusions, or pneumothorax.\n\nMediastinum: Unremarkable.\n\nBony structures: Intact.",
      "impression": "1. No acute cardiopulmonary disease.",
      "dictated": "05/08/2023 16:42",
      "verified": "05/08/2023 17:10"
    },
    {
      "date": "04/2019",
      "study": "ECHOCARDIOGRAM — TRANSTHORACIC",
      "accession": "IMG-2019-10244",
      "status": "FINAL",
      "orderedBy": "Dr. Figueroa",
      "readBy": "Dr. Lisa Chen, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Click heard on exam — evaluate for MVP",
      "technique": "Complete 2D and Doppler echocardiogram.",
      "findings": "Left ventricle: Normal size and function. EF 60-65%.\n\nValves: Mitral valve prolapse — posterior leaflet; trivial mitral regurgitation. All other valves normal.\n\nRight ventricle: Normal.\n\nNo pericardial effusion.",
      "impression": "1. Mitral valve prolapse with trivial MR — benign.\n2. Normal biventricular function.",
      "dictated": "04/12/2019 09:30",
      "verified": "04/12/2019 11:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-7704",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Pfizer)",
      "date": "10/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-1890",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "09/2020",
      "site": "Left deltoid IM",
      "lot": "TD20-540",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — Series Complete",
      "date": "2016",
      "site": "Left deltoid IM",
      "lot": "HP16-220",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Generalized Anxiety Disorder, Hypothyroidism, alive at 54",
    "Father: Hypertension, T2DM, alive at 57",
    "Maternal grandmother: Panic Disorder, Depression — deceased at 78 (stroke)",
    "Paternal grandfather: MI at age 70 — deceased"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Marketing coordinator at a healthcare tech startup; high-stress role; recently promoted"
    ],
    [
      "Marital",
      "Single; lives with roommate"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social — 2-3 drinks on weekends; denies binge drinking"
    ],
    [
      "Drugs",
      "Occasional marijuana edibles for anxiety (1-2x/month); denies other substances"
    ],
    [
      "Exercise",
      "Yoga 2x/week; jogging 1-2x/week; recently decreased due to work schedule"
    ],
    [
      "Housing",
      "Apartment in Fort Lauderdale; safe neighborhood"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; no firearms"
    ],
    [
      "Advance Directive",
      "None — not discussed (age 27)"
    ]
  ],
  "meta": {
    "caseId": "anxietypanic-attack",
    "diagnosis": "Acute Panic Attack with Hyperventilation Syndrome (Presenting as Dyspnea, Tachycardia, and Paresthesias)",
    "acuity": 3,
    "presentation": "Shortness of Breath",
    "category": "psychiatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Daniela appears anxious and somewhat embarrassed about her symptoms, frequently fidgeting and speaking rapidly. She's cooperative and forthcoming but tends to minimize her psychiatric history, hoping for a \"medical\" explanation for her breathing difficulties.",
    "interviewQuestions": [
      "Can you describe exactly what happened during this episode at work?",
      "How long did the breathing difficulty and other symptoms last?",
      "Have you had similar episodes before, either recently or in the past?",
      "What were you doing or thinking about right before the symptoms started?",
      "Did you feel like you were going to die or lose control during the episode?",
      "Have you been more stressed than usual lately?",
      "Are you taking your anxiety medication regularly?",
      "Do you have any chest pain, pressure, or tightness?",
      "Have you noticed any triggers for your anxiety or panic symptoms?",
      "Any recent changes in your sleep, appetite, or energy levels?",
      "Have you had any palpitations or irregular heartbeats?",
      "Any numbness, tingling, or pins-and-needles sensations?",
      "Have you avoided any situations since this episode happened?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you mean. Can you ask that differently? I just want to know why I can't breathe properly.",
      "onset": "It started about a month ago during a really stressful week at work. We had this huge product launch deadline, and I was working 12-hour days. It came on suddenly - one minute I was fine, the next I felt like I was suffocating.",
      "character": "It feels like I can't get enough air, like I'm breathing through a straw. My breathing gets really fast and shallow, and the harder I try to breathe, the worse it gets.",
      "location": "It's mainly the feeling that I can't breathe deeply enough. Sometimes I get a tight feeling across my chest, but it's not really painful.",
      "severity": "During the episode it was probably a 9 out of 10 - I genuinely thought something was seriously wrong with me. It completely stopped me from being able to work or think clearly.",
      "aggravating": "Stress definitely makes it worse. When I start thinking about having another episode, sometimes that alone makes me feel short of breath. Caffeine seems to make it worse too.",
      "relieving": "Sitting down and trying to calm myself helps a little. My roommate talked me through some breathing exercises during the worst episode, and that seemed to help.",
      "associated": "My heart races really fast, I get sweaty and dizzy, and I have this tingling sensation in my hands and around my mouth. I also feel really scared, like something terrible is going to happen.",
      "denies": "No chest pain or pressure, no cough, no fever, no leg swelling. I haven't been wheezing and I don't have any allergies acting up.",
      "history": "I've had anxiety for years, and I remember having some episodes in college that were similar, but nothing this intense. I thought I had it under control with my medication.",
      "medications": "Sertraline 100mg daily; Ferrous Sulfate 325mg daily; Omeprazole 20mg PRN; Norgestimate-Ethinyl Estradiol (Sprintec) daily",
      "allergies": "Amoxicillin",
      "family": "My mom has anxiety too, and my maternal grandmother had panic attacks and depression. She always said they were the worst thing she ever experienced.",
      "social": "I work as a marketing coordinator at a healthcare tech startup - it's pretty high-stress, especially since I got promoted last month. I don't smoke, drink socially on weekends, and sometimes use marijuana edibles for anxiety but not very often."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Pulmonary auscultation",
      "Assessment of respiratory effort and pattern",
      "Examination of extremities for cyanosis or clubbing",
      "Neurological assessment for paresthesias",
      "Thyroid palpation",
      "Mental status examination",
      "Assessment for signs of hyperventilation",
      "Blood pressure and pulse assessment",
      "General appearance and anxiety level"
    ],
    "examFindings": {
      "Cardiac auscultation": "Regular rhythm with mild tachycardia, occasional mid-systolic click consistent with known mitral valve prolapse, no murmurs or gallops",
      "Pulmonary auscultation": "Clear breath sounds bilaterally, no wheezes, rales, or rhonchi, good air movement throughout",
      "Assessment of respiratory effort and pattern": "Mild tachypnea at rest, tendency toward shallow breathing, no use of accessory muscles, no retractions",
      "Examination of extremities for cyanosis or clubbing": "No cyanosis, clubbing, or edema, normal capillary refill, mild pallor consistent with known anemia",
      "Neurological assessment for paresthesias": "Patient reports intermittent tingling in fingertips and perioral area, normal sensation to light touch and pinprick",
      "Thyroid palpation": "Normal size and consistency, no nodules or tenderness palpated",
      "Mental status examination": "Alert and oriented, anxious affect, slightly pressured speech, no thought disorder, expresses fear of having serious medical condition",
      "Assessment for signs of hyperventilation": "Patient demonstrates rapid, shallow breathing pattern when discussing symptoms, classic signs of acute hyperventilation syndrome",
      "Blood pressure and pulse assessment": "Elevated BP 142/88, tachycardic at 118 bpm, regular rhythm",
      "General appearance and anxiety level": "Well-appearing young woman in no acute distress at rest, appears anxious when discussing symptoms, frequent fidgeting and hand wringing"
    },
    "ddxTargets": [
      "Acute Panic Attack with Hyperventilation Syndrome (Presenting as Dyspnea, Tachycardia, and Paresthesias) (correct diagnosis)",
      "Generalized Anxiety Disorder with somatic symptoms",
      "Adjustment disorder with anxiety",
      "Pulmonary embolism",
      "Acute coronary syndrome",
      "Asthma or reactive airway disease",
      "Hyperthyroidism"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on 'shortness of breath' and focus primarily on cardiopulmonary causes, overlooking the psychiatric etiology despite clear anxiety history",
      "prematureClosure": "May settle on 'anxiety' too quickly without adequately ruling out serious medical causes, or conversely, may pursue extensive cardiac/pulmonary workup while dismissing psychiatric causes",
      "availabilityBias": "Recent emphasis on PE and MI in medical education may lead to overweighting these diagnoses despite low pretest probability in this demographic"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, let's think about this systematically. You have a 27-year-old woman with known anxiety disorders presenting with acute dyspnea. What are the broad categories of conditions that could cause her presentation? How might her psychiatric history both help and potentially bias your thinking?",
      "phase5": "Now that you've gathered more information, let's reconsider your differential diagnosis. What key features from the history and physical exam help you distinguish between medical and psychiatric causes of her dyspnea? How do the associated symptoms and triggers inform your thinking?",
      "finalDebrief": "This case highlights the importance of considering psychiatric causes in the differential diagnosis of dyspnea, especially in patients with known anxiety disorders. Notice how the classic triad of dyspnea, paresthesias, and panic symptoms, triggered by stress, pointed toward hyperventilation syndrome. However, it was still important to consider and appropriately rule out serious medical causes. How did your differential diagnosis evolve as you gathered more information?"
    }
  }
};
