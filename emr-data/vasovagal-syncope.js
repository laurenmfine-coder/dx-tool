
window.EMR_DATA = {
  "patient": {
    "name": "Sophia Castellano",
    "dob": "12/14/2001",
    "age": 24,
    "sex": "Female",
    "mrn": "RDX-2025-42688",
    "pronouns": "She/Her",
    "insurance": "Aetna PPO (employer)",
    "pcp": "Dr. Renee Augustin, MD",
    "pharmacy": "Walgreens — 5200 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White (Italian American)",
    "address": "2918 SW 44th Ave, Fort Lauderdale, FL 33312",
    "phone": "(954) 555-4218",
    "email": "s.castellano01@email.com",
    "emergencyContact": {
      "name": "Marco Castellano (Father)",
      "phone": "(954) 555-4234"
    },
    "chiefComplaint": "Passed out at the doctor's office"
  },
  "problems": [
    {
      "problem": "Recurrent Vasovagal Syncope",
      "icd": "R55",
      "onset": "2017",
      "status": "Active",
      "notes": "3 prior episodes — all situational (blood draws, watching surgery video in class, prolonged standing at concert); prodrome of nausea, warmth, tunnel vision; negative cardiac workup 2018 (echo normal, Holter normal, ECG normal)"
    },
    {
      "problem": "Iron Deficiency Anemia — Mild",
      "icd": "D50.9",
      "onset": "2025",
      "status": "Active",
      "notes": "Heavy menstrual bleeding (menorrhagia); Hgb 11.2; ferritin 10; on oral iron; OB/GYN evaluation pending"
    },
    {
      "problem": "Menorrhagia",
      "icd": "N92.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Heavy periods lasting 7-8 days; soaking through pads; contributing to IDA; OB/GYN referral placed"
    }
  ],
  "medications": [
    {
      "name": "Ferrous Sulfate 325mg daily",
      "sig": "Take 1 tablet by mouth once daily on empty stomach with vitamin C",
      "prescriber": "Dr. Augustin",
      "start": "09/2025",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 400mg PRN",
      "sig": "Take 1 tablet by mouth every 6 hours as needed for menstrual cramps",
      "prescriber": "Dr. Augustin",
      "start": "01/2022",
      "refills": 5,
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
      "date": "02/28/2026",
      "bp": "102/64",
      "hr": 58,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "128 lbs",
      "ht": "5'5\"",
      "bmi": 21.3,
      "setting": "ED"
    },
    {
      "date": "09/10/2025",
      "bp": "108/68",
      "hr": 66,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "130 lbs",
      "ht": "5'5\"",
      "bmi": 21.6,
      "setting": "PCP Office"
    },
    {
      "date": "02/12/2025",
      "bp": "106/66",
      "hr": 62,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "132 lbs",
      "ht": "5'5\"",
      "bmi": 22,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Renee Augustin, MD",
      "cc": "Fatigue, heavy periods, follow-up labs",
      "hpi": "24F presents with 3-month history of progressive fatigue, exertional dyspnea going up stairs (new), and worsening menorrhagia. Periods lasting 7-8 days, soaking through super pads every 2-3 hours on heavy days. Reports pallor noticed by coworkers. History of recurrent vasovagal syncope (3 prior episodes, all situational). Last episode 2022 — blood draw. No recent syncope. Labs sent.",
      "exam": "NAD but pale. Conjunctival pallor present. CV: RRR, soft flow murmur (1/6 systolic, likely anemia-related). Lungs: CTAB. Abdomen: Soft, NT. Ext: No edema.",
      "assessment": "1. Iron deficiency anemia — likely secondary to menorrhagia\n2. Menorrhagia — needs OB/GYN evaluation (structural vs hormonal)\n3. History of vasovagal syncope — no recent episodes",
      "plan": "1. Start ferrous sulfate 325mg daily\n2. OB/GYN referral for menorrhagia workup (pelvic US, consider hormonal management)\n3. Labs: CBC, iron studies, reticulocyte count\n4. Return 6 weeks with labs\n5. Discussed blood draw technique — lie flat, apply cold pack, look away"
    },
    {
      "id": "V002",
      "date": "02/12/2025",
      "type": "Primary Care",
      "provider": "Dr. Renee Augustin, MD",
      "cc": "Annual wellness",
      "hpi": "23F presents for annual wellness exam. No complaints. Periods regular but reports them getting heavier over past year. No fainting episodes since 2022. Exercising regularly. Eating well.",
      "exam": "NAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT. Skin: Good color.",
      "assessment": "1. Healthy young female\n2. Menorrhagia — mild, monitor",
      "plan": "1. Routine labs: CBC, CMP\n2. STI screening per guidelines\n3. Return 1 year or sooner if concerns"
    }
  ],
  "labs": [
    {
      "date": "09/10/2025",
      "time": "10:30",
      "orderedBy": "Dr. Augustin",
      "collected": "09/10/2025 10:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-800910",
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
              "value": "11.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "34.0",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "MCV",
              "value": "76",
              "unit": "fL",
              "range": "80-100",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "318",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "IRON STUDIES",
          "results": [
            {
              "test": "Iron",
              "value": "32",
              "unit": "mcg/dL",
              "range": "50-170",
              "flag": "L"
            },
            {
              "test": "TIBC",
              "value": "388",
              "unit": "mcg/dL",
              "range": "250-370",
              "flag": "H"
            },
            {
              "test": "Ferritin",
              "value": "10",
              "unit": "ng/mL",
              "range": "12-150",
              "flag": "L"
            },
            {
              "test": "Transferrin Saturation",
              "value": "8",
              "unit": "%",
              "range": "20-50",
              "flag": "L"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/2018",
      "study": "ECHOCARDIOGRAM — TRANSTHORACIC",
      "accession": "IMG-2018-30322",
      "status": "FINAL",
      "orderedBy": "Dr. Patel (Cardiology)",
      "readBy": "Dr. Anil Patel, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Recurrent syncope in teenager — cardiac evaluation",
      "technique": "Complete 2D and Doppler echocardiogram.",
      "findings": "Normal cardiac structure and function. Normal LV cavity size with EF 65%. No valvular abnormalities. Normal RV size and function. No ASDs, VSDs, or PFO visualized. No pericardial effusion. Aortic root normal.",
      "impression": "1. Structurally normal heart.\n2. Normal biventricular function.\n3. No valvular disease.",
      "dictated": "03/22/2018 10:00",
      "verified": "03/22/2018 11:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8840",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Pfizer)",
      "date": "10/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2044",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "09/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-548",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — Series Complete",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "HP17-292",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal ACWY",
      "date": "2019",
      "site": "Right deltoid IM",
      "lot": "MN19-180",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Father: Vasovagal syncope (fainted at blood draws — multiple episodes), alive at 56",
    "Mother: Uterine fibroids requiring hysterectomy at age 42, alive at 52",
    "Sister: Heavy periods, alive at 22",
    "Maternal grandmother: Iron deficiency anemia, alive at 78"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Elementary school art teacher — first year teaching"
    ],
    [
      "Marital",
      "Single; lives alone"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social — 2-3 drinks on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Yoga 3x/week; hiking on weekends"
    ],
    [
      "Housing",
      "1-bedroom apartment"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; no firearms"
    ],
    [
      "Advance Directive",
      "None — not discussed (age 24)"
    ]
  ],
  "meta": {
    "caseId": "vasovagal-syncope",
    "diagnosis": "Vasovagal Syncope (Situational, Post-Phlebotomy)",
    "acuity": 4,
    "presentation": "Syncope",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Sophia appears somewhat embarrassed and anxious about fainting in public, but is cooperative and eager to understand what happened. She's articulate but becomes visibly uncomfortable when discussing her heavy periods, speaking more quietly and fidgeting with her hands.",
    "interviewQuestions": [
      "Can you describe exactly what happened right before you passed out?",
      "Did you experience any warning signs before losing consciousness?",
      "Have you ever fainted or passed out before?",
      "Tell me about your menstrual periods - have they changed recently?",
      "Have you been feeling more tired than usual lately?",
      "Do you get short of breath with activities you used to do easily?",
      "What were you doing at the doctor's office when this happened?",
      "How long were you unconscious?",
      "Did anyone see you faint? What did they observe?",
      "Have you had any chest pain, palpitations, or irregular heartbeat?",
      "Any family history of fainting or heart problems?",
      "Are you taking any medications or supplements?",
      "Do you have any known allergies?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - could you rephrase that?",
      "onset": "It happened about 2 hours ago. I was sitting in the chair after they drew my blood, started feeling really weird and nauseous, then the next thing I knew I was on the floor with people around me.",
      "character": "Right before I passed out, I felt really nauseous, dizzy, and sweaty. Everything started going dark around the edges and I felt like I was going to throw up.",
      "location": "The dizziness was just general - my whole head felt light and fuzzy, not really focused in one spot.",
      "severity": "The dizziness and nausea were probably an 8 out of 10 - really intense. I've been feeling tired for months now, maybe a 6 out of 10, where I need to rest after climbing stairs at school.",
      "aggravating": "I've noticed I feel worse during my periods when the bleeding is really heavy. Blood draws have always made me queasy, and today was worse than usual.",
      "relieving": "Lying down helped me feel better after I came to. When I'm tired, sitting down helps, and the iron pills seem to help a little with my energy.",
      "associated": "I've been really tired for about 3 months, getting short of breath going upstairs at school, and my periods have been much heavier and longer than normal.",
      "denies": "No chest pain, no heart racing or skipping beats, no headaches, no seizure-like activity. I didn't lose control of my bladder or bite my tongue.",
      "history": "Yes, I've fainted a few times before, always around medical stuff - blood draws, getting shots, once during a gynecology exam. This felt exactly the same as those times.",
      "medications": "Ferrous Sulfate 325mg daily; Ibuprofen 400mg PRN",
      "allergies": "NKDA",
      "family": "My dad faints at blood draws too - it's actually kind of embarrassing because it runs in the family. My mom had really heavy periods and needed a hysterectomy, and my younger sister is starting to have heavy periods too.",
      "social": "I'm a first-year elementary school art teacher, so I'm on my feet a lot and climbing stairs between floors. I live alone, don't smoke, and just have a few drinks on weekends with friends."
    },
    "examManeuvers": [
      "Orthostatic vital signs",
      "Cardiac auscultation",
      "Pulmonary auscultation",
      "Conjunctival pallor assessment",
      "Capillary refill",
      "Neurologic assessment including cranial nerves",
      "Abdominal examination",
      "Extremity examination for edema",
      "Skin examination for pallor",
      "Fundoscopic examination"
    ],
    "examFindings": {
      "Orthostatic vital signs": "Lying: BP 102/64, HR 58; Sitting: BP 98/62, HR 64; Standing: BP 94/60, HR 72 - mild orthostatic changes",
      "Cardiac auscultation": "Regular rate and rhythm, no murmurs, rubs, or gallops, normal S1 and S2",
      "Pulmonary auscultation": "Clear to auscultation bilaterally, no wheezes, rales, or rhonchi",
      "Conjunctival pallor assessment": "Mild pallor of conjunctiva consistent with mild anemia",
      "Capillary refill": "Normal, less than 2 seconds",
      "Neurologic assessment including cranial nerves": "Alert and oriented x3, cranial nerves II-XII intact, normal strength and sensation",
      "Abdominal examination": "Soft, non-tender, no masses or organomegaly, normal bowel sounds",
      "Extremity examination for edema": "No peripheral edema, pulses intact",
      "Skin examination for pallor": "Mild pallor noted, skin warm and dry",
      "Fundoscopic examination": "Normal optic discs, no papilledema or hemorrhages"
    },
    "ddxTargets": [
      "Vasovagal Syncope (Situational — Post-Phlebotomy Episode with Classic Prodrome in Patient with Recurrent NMS History, Compounded by Mild Iron Deficiency Anemia) (correct diagnosis)",
      "Iron deficiency anemia with secondary syncope",
      "Orthostatic hypotension",
      "Cardiac arrhythmia",
      "Structural heart disease with syncope",
      "Seizure disorder",
      "Hypoglycemia"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the anemia and missing that this is classic situational vasovagal syncope triggered by phlebotomy, or conversely anchoring on the syncope and minimizing the contributing anemia",
      "prematureClosure": "May stop workup after identifying vasovagal syncope without addressing the underlying anemia and menorrhagia that likely contributed to this episode being more severe",
      "availabilityBias": "Young healthy female who fainted might trigger automatic assumption of 'just vasovagal' without considering the systemic factors that made her more susceptible"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. You're considering both benign and serious causes of syncope. As you interview Sophia, pay particular attention to the circumstances surrounding this episode and any patterns from her past. What specific historical features would help you distinguish between vasovagal syncope and more concerning etiologies?",
      "phase5": "You've gathered good information about the classic prodromal symptoms and situational trigger. Her recurrent episodes in medical settings are quite suggestive. However, I noticed some findings that suggest there may be contributing factors beyond just the situational trigger. What systemic issues might be making her more prone to syncope right now?",
      "finalDebrief": "This case nicely illustrates how a classic presentation can be modified by concurrent medical issues. While Sophia has clear situational vasovagal syncope triggered by phlebotomy, her mild iron deficiency anemia from menorrhagia likely made her more susceptible to this episode. The key learning point is recognizing that even 'simple' vasovagal syncope can have contributing factors that need to be addressed to prevent future episodes.",
      "final": "Diagnosis: vasovagal syncope (neurally mediated syncope / neurocardiogenic syncope) triggered by phlebotomy, with classic prodrome and compounded by mild iron deficiency anemia. Key learning: (1) Syncope — transient loss of consciousness with spontaneous rapid recovery — has a critical differential: (a) Reflex (neurally mediated) syncope: vasovagal (most common; emotional, orthostatic, post-prandial, situational — micturition, defecation, cough, phlebotomy, pain), carotid sinus hypersensitivity. (b) Orthostatic syncope: volume depletion, autonomic failure, medications (see orthostatic case). (c) Cardiac syncope: arrhythmia (VT, VF, SVT, high-grade AV block, sinus pauses, long QT, Brugada, ARVC, WPW), structural heart disease (aortic stenosis, HCM, pulmonary embolism, aortic dissection, cardiac tamponade), or ischemia. (d) Non-syncope mimics: seizure, hypoglycemia, stroke/TIA, psychogenic pseudosyncope. Distinguishing cardiac syncope is critical because it has the highest mortality risk. (2) Vasovagal syncope features. Triggers: orthostatic stress, pain, emotional distress, medical procedures (phlebotomy, dental, injections), prolonged standing, heat, crowded places. Classic prodrome (can last seconds to minutes): lightheadedness, nausea, diaphoresis, pallor, tunnel vision, 'graying out', warmth, and feeling of impending loss of consciousness. Post-syncope: brief symptoms usually resolve within seconds to minutes; transient muscle jerking may occur (can be mistaken for seizure but lacks postictal confusion). (3) Red flags for cardiac syncope: syncope without prodrome (sudden, unpredictable), syncope during exercise (dangerous — aortic stenosis, HCM, long QT, CPVT), palpitations preceding syncope, family history of sudden cardiac death, known structural heart disease, abnormal ECG, injuries from fall. Any of these warrant cardiology evaluation, echocardiogram, and often event monitoring or electrophysiology study. (4) Workup. History and witness account are the most important diagnostic tools. ECG in all patients — look for arrhythmia, conduction disease, long QT (QTc >450 in men, >460 in women), Brugada pattern, WPW, hypertrophy. Labs: CBC (anemia), BMP, glucose, beta-hCG, troponin if ischemia suspected, D-dimer if PE suspected. Orthostatic vitals, bedside cardiac monitoring. Further workup for suspected cardiac: echocardiogram, event monitor or implantable loop recorder, stress testing, tilt-table testing (useful in recurrent reflex syncope when diagnosis is unclear), electrophysiology study. (5) Management. Vasovagal syncope: reassurance and education are the cornerstone — this is usually a benign condition. (a) Avoid triggers when possible. (b) Prodromal counter-maneuvers: lying down, leg crossing, handgrip, squatting — abort impending episode. (c) Adequate salt and fluid intake (unless hypertensive). (d) Compression stockings and abdominal binders. (e) Gradual rising, avoid prolonged standing. (f) Pharmacologic options for recurrent/severe cases: fludrocortisone, midodrine, SSRIs, beta-blockers (controversial — conflicting evidence). (g) Dual-chamber pacemakers for select patients with severe cardioinhibitory type (prolonged asystole) unresponsive to other measures. Address comorbidities: treat iron deficiency anemia, ensure hydration, review medications. Driving and occupation counseling based on severity and cause. Classic pitfalls: (a) attributing all syncope to vasovagal without checking ECG or considering cardiac causes — missed long QT, Brugada, or high-grade block can be fatal. (b) Missing exertional syncope — always serious; aortic stenosis, HCM, cardiac channelopathy. (c) Confusing convulsive syncope (brief myoclonic jerks during loss of consciousness) with seizure — no postictal state, no tongue biting, rapid recovery. (d) Not addressing reversible contributors — anemia, dehydration, medications. (e) Forgetting the 'first syncope rule' for older adults or those with cardiac risk — admission for monitoring and workup is often warranted."
    }
  }
};
