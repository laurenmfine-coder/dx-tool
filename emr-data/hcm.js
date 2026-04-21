
window.EMR_DATA = {
  "patient": {
    "name": "Jordan Mitchell",
    "patientHPI": "I'm here for my sports physical for basketball - I feel great overall, but I have to admit I've gotten lightheaded a few times during really intense practices this past year, and once everything went kind of gray for a second before I sat down.",
    "dob": "06/03/2004",
    "age": 21,
    "sex": "Male",
    "mrn": "RDX-2025-42234",
    "pronouns": "He/Him",
    "insurance": "Cigna PPO (parent plan)",
    "pcp": "Dr. Sandra Ellis, MD",
    "pharmacy": "CVS Pharmacy \u2014 4401 Sheridan St, Hollywood, FL",
    "language": "English",
    "race": "Black (African American)",
    "address": "1619 Daisy Ave, Birmingham, AL 35211",
    "phone": "(954) 555-3890",
    "email": "j.mitchell04@email.com",
    "emergencyContact": {
      "name": "Denise Mitchell (Mother)",
      "phone": "(954) 555-3908"
    },
    "chiefComplaint": "Passed out while exercising"
  },
  "problems": [
    {
      "problem": "HOCM \u2014 exertional syncope, dynamic LVOT obstruction",
      "icd": "I42.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Ryan Park, 22M \u2014 syncope during basketball game. Father died suddenly at 35 (undiagnosed heart disease). Echo: severe asymmetric septal hypertrophy (septum 2.4cm), systolic anterior motion (SAM) of mitral valve, LVOT gradient 80mmHg at rest."
    },
    {
      "problem": "Family history of sudden cardiac death \u2014 genetic condition",
      "icd": "I42.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Autosomal dominant inheritance. Family members require screening echo. Genetic testing for MYH7, MYBPC3 mutations. SCD risk assessment for implantable defibrillator decision."
    },
    {
      "problem": "Sudden cardiac death risk \u2014 ICD consideration",
      "icd": "I42.1",
      "onset": "2024",
      "status": "Active",
      "notes": "HOCM is the most common cause of SCD in young athletes. Major risk factors: prior cardiac arrest, sustained VT, family SCD, syncope, massive LVH (wall >30mm), abnormal exercise BP response, NSVT on Holter."
    }
  ],
  "medications": [
    {
      "name": "Metoprolol succinate 25-50mg daily \u2014 first-line",
      "sig": "Beta-blockers reduce heart rate \u2192 increases diastolic filling \u2192 reduces LVOT gradient and SAM. Reduces symptoms and improves exercise tolerance. Avoid positive inotropes (digoxin) and vasodilators (nitrates, ACE inhibitors).",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 3,
      "status": "Initiating"
    },
    {
      "name": "ICD \u2014 consider for high-risk HOCM",
      "sig": "ICD indicated for: prior cardiac arrest or VT, family history SCD + own syncope. Calculate HCM Risk-SCD score at 5 years (>6% = ICD recommended). This patient: syncope + family SCD = high risk.",
      "prescriber": "Electrophysiology/Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Under evaluation"
    },
    {
      "name": "Avoid competitive sports \u2014 activity restriction",
      "sig": "All patients with HOCM should avoid intense competitive sports. Increased heart rate + reduced preload from exertion \u2192 increased LVOT gradient \u2192 dynamic obstruction. Basketball is high-risk.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Counseled \u2014 activity restricted"
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
      "date": "02/26/2026",
      "bp": "108/68",
      "hr": 96,
      "rr": 20,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "195 lbs",
      "ht": "6'3\"",
      "bmi": 24.4,
      "setting": "ED"
    },
    {
      "date": "09/08/2025",
      "bp": "118/72",
      "hr": 64,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "192 lbs",
      "ht": "6'3\"",
      "bmi": 24,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Sandra Ellis, MD",
      "cc": "Pre-participation sports physical \u2014 college basketball",
      "hpi": "21M presents for annual pre-sports physical for college basketball team. Reports feeling 'fine' overall. On direct questioning, admits to 2-3 episodes of lightheadedness during intense practice over past year \u2014 lasted seconds, resolved with sitting down and drinking water. One episode involved 'graying out' briefly but no full LOC. Attributes to dehydration and South Florida heat. No chest pain with exertion. No palpitations. No family history of sudden death (patient unsure about father's side \u2014 parents separated, limited contact with biological father).",
      "exam": "Athletic, well-developed male. CV: RRR, grade 2/6 harsh systolic murmur best at LLSB; murmur increases with Valsalva maneuver and standing; decreases with squatting. Bilateral carotid upstrokes brisk (bisferiens pulse questionable). PMI laterally displaced and forceful. Lungs: CTAB. MSK: Full ROM all joints. Neuro: Intact.",
      "assessment": "1. Systolic murmur that increases with Valsalva \u2014 concerning for HCM vs HOCM\n2. Exertional near-syncope \u2014 needs urgent cardiac evaluation BEFORE return to sports\n3. Must be cleared by cardiology before athletic participation",
      "plan": "1. STAT referral to cardiology \u2014 echocardiogram and ECG\n2. Athletic restriction until cardiology clearance\n3. Letter sent to athletic department regarding medical hold\n4. Patient counseled on importance of not playing until evaluated\n5. Family history needs clarification \u2014 biological father's cardiac history"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "HOCM Assessment",
      "results": [
        {
          "test": "Echo \u2014 septal thickness",
          "value": "2.4",
          "unit": "cm",
          "ref": "<1.2 normal; \u22651.5 = HCM; \u22653.0 = massive hypertrophy",
          "flag": "H"
        },
        {
          "test": "LVOT gradient \u2014 resting",
          "value": "80",
          "unit": "mmHg",
          "ref": "<30 mmHg (obstructive \u226530)",
          "flag": "H"
        },
        {
          "test": "SAM (systolic anterior motion)",
          "value": "Present \u2014 mitral valve drawn into LVOT during systole",
          "unit": "",
          "ref": "Absent",
          "flag": "H"
        },
        {
          "test": "Holter monitor \u2014 48h",
          "value": "NSVT episodes x3 (3-6 beats)",
          "unit": "",
          "ref": "No VT",
          "flag": "H"
        },
        {
          "test": "Exercise stress test \u2014 BP response",
          "value": "Abnormal \u2014 BP fails to rise >20mmHg with exercise",
          "unit": "",
          "ref": "Normal rise",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Cardiac MRI with Gadolinium",
      "findings": "Severe asymmetric septal hypertrophy (2.4cm). Systolic anterior motion of mitral valve causing LVOT obstruction. Late gadolinium enhancement (LGE) in midwall of hypertrophied segments \u2014 fibrosis marker. No other structural abnormality.",
      "impression": "Obstructive HCM with fibrosis (LGE). ICD consideration given high-risk features."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8522",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Pfizer)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-1904",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "08/2022",
      "site": "Left deltoid IM",
      "lot": "TD22-504",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) \u2014 Series Complete",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "HP19-440",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal ACWY Booster",
      "date": "09/2022",
      "site": "Right deltoid IM",
      "lot": "MN22-388",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "Meningococcal B (Bexsero) \u2014 Series Complete",
      "date": "2022",
      "site": "Left deltoid IM",
      "lot": "MB22-110",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Healthy, alive at 46",
    "Biological father: Limited information \u2014 parents separated when patient was 5; mother reports father had 'heart problems' in his 30s but no details; paternal grandfather died suddenly age 44 (cause unknown)",
    "Maternal grandmother: HTN, T2DM, alive at 72",
    "Half-brother (maternal): Healthy, alive at 14"
  ],
  "socialHistory": [
    [
      "Occupation",
      "College junior \u2014 kinesiology major; scholarship basketball player (starting point guard)"
    ],
    [
      "Marital",
      "Single; lives in campus housing"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social \u2014 1-2 drinks on weekends during off-season; abstains during season"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Basketball practice 5 days/week, 2-3 hrs; strength training 3x/week; high-intensity competitive athlete"
    ],
    [
      "Housing",
      "University dormitory with roommate"
    ],
    [
      "Safety",
      "Seatbelt; helmet when cycling; no firearms"
    ],
    [
      "Advance Directive",
      "None \u2014 not discussed (age 21); mother is emergency contact"
    ]
  ],
  "meta": {
    "caseId": "hcm",
    "diagnosis": "Hypertrophic Obstructive Cardiomyopathy (HOCM) \u2014 Exertional Syncope",
    "acuity": 2,
    "presentation": "Syncope",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Jordan appears calm and athletic, initially downplaying symptoms as 'normal' training fatigue. He becomes more serious when discussing the recent fainting episode, showing some concern about his basketball scholarship and future playing ability.",
    "interviewQuestions": [
      "Can you describe exactly what happened when you passed out during exercise?",
      "How many times have you experienced lightheadedness or fainting during physical activity?",
      "Do you ever have chest pain, shortness of breath, or heart palpitations during exercise?",
      "Have you noticed any decrease in your exercise tolerance or athletic performance recently?",
      "Do you ever feel dizzy or lightheaded when standing up quickly?",
      "Has anyone ever told you that you have a heart murmur?",
      "Tell me more about your father's heart problems and your grandfather's sudden death",
      "Have you ever had an EKG or echocardiogram done?",
      "Do you take any medications, supplements, or performance enhancers?",
      "Have you had any recent illnesses, dehydration, or changes in your training routine?",
      "Do you ever have symptoms at rest or only during exercise?",
      "Have any of your teammates or coaches noticed anything concerning about your performance?",
      "Do you have any family members who died suddenly or at a young age?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that - can you ask it differently? I just want to make sure I can keep playing basketball.",
      "onset": "The lightheadedness started about a year ago during really intense practices. The actual fainting happened three days ago during a scrimmage - I was doing suicide sprints and everything just went black for a few seconds.",
      "character": "It feels like the world is spinning and then everything gets gray and tunneled. During the fainting episode, my teammates said I just dropped and was out for maybe 10-15 seconds.",
      "location": "It's not really a location thing - it's more like my whole body just gives out. No chest pain or anything like that.",
      "severity": "The lightheadedness is maybe a 4 out of 10, but the fainting was scary - probably an 8. I've never had anything like that happen before.",
      "aggravating": "It only happens during really intense exercise - sprints, fast breaks, when my heart is really pounding. Never happens when I'm just walking around or doing light workouts.",
      "relieving": "Sitting down and resting helps the lightheadedness go away pretty quickly. After I fainted, I felt fine within a few minutes of resting.",
      "associated": "Sometimes I feel like my heart is racing really fast during exercise, more than my teammates. No chest pain, but maybe a little shortness of breath during the hardest parts of practice.",
      "denies": "No chest pain, no swelling in my legs, no problems breathing when I'm resting. I don't get dizzy standing up normally.",
      "history": "I've had that lightheaded feeling maybe 4-5 times over the past year, but I always just pushed through it. This was the first time I actually passed out.",
      "medications": "None \u2014 No chronic medications",
      "allergies": "NKDA",
      "family": "My mom is healthy, but my dad had some kind of heart problem in his 30s - my parents split when I was young so I don't know details. My mom mentioned my paternal grandfather died suddenly when he was 44, but nobody knows why.",
      "social": "I'm a junior studying kinesiology on a basketball scholarship. I live on campus, don't smoke, and only drink socially on weekends during off-season. No drugs or supplements."
    },
    "examManeuvers": [
      "Cardiac auscultation at rest",
      "Cardiac auscultation with Valsalva maneuver",
      "Cardiac auscultation with standing and squatting",
      "Blood pressure measurement supine and standing",
      "Palpation of point of maximal impulse (PMI)",
      "Assessment of peripheral pulses",
      "Examination of jugular venous pressure",
      "Pulmonary auscultation",
      "Assessment for peripheral edema",
      "Neurological assessment including cranial nerves"
    ],
    "examFindings": {
      "Cardiac auscultation at rest": "Grade 3/6 harsh systolic murmur heard best at left sternal border, does not radiate to carotids",
      "Cardiac auscultation with Valsalva maneuver": "Murmur intensity increases significantly with Valsalva maneuver and sustained handgrip",
      "Cardiac auscultation with standing and squatting": "Murmur increases with standing, decreases with squatting",
      "Blood pressure measurement supine and standing": "Supine 108/68, standing 105/65 - no significant orthostatic changes",
      "Palpation of point of maximal impulse (PMI)": "PMI displaced laterally, sustained and forceful cardiac impulse palpable",
      "Assessment of peripheral pulses": "Carotid pulse has sharp upstroke followed by rapid decline (bisferiens pulse), peripheral pulses normal",
      "Examination of jugular venous pressure": "JVP normal at 6 cm, no obvious abnormal waves",
      "Pulmonary auscultation": "Clear bilaterally, no rales or wheezing",
      "Assessment for peripheral edema": "No peripheral edema, good capillary refill",
      "Neurological assessment including cranial nerves": "Alert and oriented, normal cranial nerve exam, no focal neurological deficits"
    },
    "ddxTargets": [
      "HOCM \u2014 obstructive (correct)",
      "Hypertensive hypertrophy \u2014 symmetric; HTN history; no LVOT gradient; no SAM",
      "Athlete's heart \u2014 physiologic hypertrophy; symmetric; no LVOT gradient; regresses with detraining",
      "Aortic stenosis \u2014 fixed (not dynamic) gradient; valve calcification on echo; different mechanism",
      "Fabry disease \u2014 symmetric hypertrophy; alpha-galactosidase A deficiency; enzyme assay"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'young healthy athlete' and dismissing syncope as dehydration or overexertion, missing the pathological murmur findings",
      "prematureClosure": "May prematurely diagnose vasovagal syncope without proper cardiac evaluation, especially given the exercise-induced nature and family history",
      "availabilityBias": "Common cases of athletic syncope due to dehydration may overshadow the less common but more dangerous inherited cardiomyopathies"
    },
    "coachPrompts": {
      "phase2": "This young athlete presents with exertional syncope. What are the key features that distinguish benign causes from potentially life-threatening cardiac conditions? What aspects of the history and family background should heighten your concern?",
      "phase5": "You've identified a murmur that changes with maneuvers and noted the family history. How do the dynamic changes in murmur intensity with Valsalva and position changes help narrow your differential diagnosis? What is your biggest concern for this patient?",
      "finalDebrief": "This case highlights the critical importance of cardiac screening in young athletes. How did the murmur characteristics and family history guide you toward HOCM? What would be your next steps for this patient, and why is early diagnosis crucial for preventing sudden cardiac death?",
      "final": "Diagnosis: hypertrophic obstructive cardiomyopathy (HOCM). Key learning: (1) HOCM is the most common cause of sudden cardiac death in young athletes. The dynamic LVOT obstruction worsens with: decreased preload (dehydration, nitrates, Valsalva), decreased afterload (vasodilators), increased contractility (digoxin, exercise). The opposite maneuvers (increased preload, increased afterload) reduce the gradient. (2) Dynamic vs fixed obstruction distinction: HOCM murmur increases with standing (preload \u2193) and Valsalva, decreases with squatting (preload \u2191). Aortic stenosis murmur does the opposite. This is the key bedside maneuver. (3) HCM Risk-SCD score: calculator using age, max wall thickness, LA diameter, LVOT gradient, family SCD, NSVT, unexplained syncope. Score \u22656% at 5 years = ICD recommended. (4) Medications to avoid in HOCM: nitrates (preload reduction \u2192 more obstruction \u2192 severe hypotension), ACE inhibitors/ARBs (afterload reduction), digoxin (positive inotrope), diuretics (volume reduction). Treat HF symptoms with beta-blockers and disopyramide. (5) Septal reduction therapy: severe symptomatic HOCM refractory to medical therapy \u2192 surgical myomectomy (gold standard) or alcohol septal ablation (catheter-based alternative for poor surgical candidates)."
    }
  }
};
