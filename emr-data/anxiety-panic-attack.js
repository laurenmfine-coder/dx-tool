
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
    "pharmacy": "Walgreens \u2014 3100 Broward Blvd, Fort Lauderdale, FL",
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
      "problem": "Panic attack \u2014 acute presentation, must rule out medical causes",
      "icd": "F41.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Jennifer Kim, 26F \u2014 sudden onset palpitations, chest tightness, shortness of breath, dizziness, perioral numbness, fear of dying. No cardiac history. Must rule out PE, ACS, dysrhythmia before psychiatric diagnosis."
    },
    {
      "problem": "Hyperventilation-induced hypocapnia \u2014 respiratory alkalosis",
      "icd": "R06.4",
      "onset": "2024",
      "status": "Active",
      "notes": "Anxiety \u2192 hyperventilation \u2192 CO2 loss \u2192 respiratory alkalosis \u2192 hypocalcemia (ionized) \u2192 paresthesias, carpopedal spasm, dizziness. A self-reinforcing cycle."
    },
    {
      "problem": "Panic disorder \u2014 recurrent attacks affecting function",
      "icd": "F41.0",
      "onset": "2023",
      "status": "Active",
      "notes": "Third episode in 2 months. Avoidance behavior developing. Referral for CBT and consideration of SSRI treatment."
    }
  ],
  "medications": [
    {
      "name": "Lorazepam 0.5-1mg PO/SL \u2014 acute episode",
      "sig": "Benzodiazepine for acute panic attack. Short-term only \u2014 risk of dependence with chronic use. Cognitive-behavioral therapy is the definitive treatment.",
      "prescriber": "Emergency/Psychiatry",
      "start": "2024",
      "refills": 0,
      "status": "PRN acute"
    },
    {
      "name": "Controlled breathing \u2014 rebreathing technique",
      "sig": "Breathe through pursed lips or into cupped hands. Restores CO2, corrects respiratory alkalosis, breaks the hyperventilation cycle. First-line non-pharmacologic.",
      "prescriber": "Emergency",
      "start": "2024",
      "refills": 0,
      "status": "Taught"
    },
    {
      "name": "Sertraline 25mg daily \u2014 titrate to 50-200mg",
      "sig": "SSRI first-line for panic disorder. Start low to avoid initial activation/anxiety. Full effect 4-6 weeks.",
      "prescriber": "Psychiatry",
      "start": "2024",
      "refills": 3,
      "status": "Initiating"
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
      "temp": "98.4\u00b0F",
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
      "temp": "98.6\u00b0F",
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
      "temp": "98.2\u00b0F",
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
      "assessment": "1. Panic disorder \u2014 worsening, increased frequency\n2. GAD \u2014 contributing to panic escalation\n3. Iron deficiency anemia \u2014 improving on supplementation",
      "plan": "1. Increase escitalopram to 15mg daily (discussed titration)\n2. CBT referral for panic disorder \u2014 patient agreeable\n3. Continue lorazepam PRN but limit to 2x/week max\n4. Recheck CBC/ferritin in 3 months\n5. If no improvement in 6 weeks, consider adding buspirone"
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
      "date": "04/2024",
      "panel": "Panic Attack Workup",
      "results": [
        {
          "test": "ECG",
          "value": "Sinus tachycardia 112 bpm. No ST changes. No delta waves.",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "D-dimer",
          "value": "0.38",
          "unit": "mg/L",
          "ref": "<0.5",
          "flag": ""
        },
        {
          "test": "Troponin I",
          "value": "<0.01",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": ""
        },
        {
          "test": "TSH",
          "value": "1.8",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
          "flag": ""
        },
        {
          "test": "ABG \u2014 pH",
          "value": "7.52",
          "unit": "",
          "ref": "7.35-7.45 (respiratory alkalosis)",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
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
      "Social \u2014 wine 2-3 glasses on weekends"
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
    "diagnosis": "Panic Attack with Hyperventilation Syndrome",
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
      "Vital signs assessment": "BP 112/70, HR 78 and regular, RR 16, SpO2 99% on room air, temperature 98.4\u00b0F",
      "Cardiac auscultation in multiple positions": "Soft mid-systolic click heard best at apex, consistent with known mitral valve prolapse, no murmur"
    },
    "ddxTargets": [
      "Panic attack with hyperventilation (correct)",
      "Pulmonary embolism \u2014 dyspnea + chest pain + tachycardia; D-dimer negative here = low risk (Wells score low)",
      "Supraventricular tachycardia \u2014 episodic palpitations; ECG during episode distinguishes; sinus tachycardia here",
      "Hyperthyroidism \u2014 anxiety, palpitations, weight loss; TSH normal",
      "Pheochromocytoma \u2014 episodic hypertension + palpitations + diaphoresis; rare; 24h urine catecholamines if recurrent",
      "ACS \u2014 troponin negative, ECG normal, young patient"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on psychiatric history and missing organic causes like hyperthyroidism, cardiac arrhythmias, or medication-induced symptoms",
      "prematureClosure": "May quickly assume recurrent panic attacks without considering why frequency has increased - could miss thyroid dysfunction or medication non-adherence",
      "availabilityBias": "Young female with anxiety history may bias toward psychiatric diagnosis, potentially overlooking cardiac causes or substance use"
    },
    "coachPrompts": {
      "phase2": "You've identified several possibilities for her shortness of breath. Given her psychiatric history, what additional questions would help you determine if this represents a worsening of her known condition versus a new organic process? Consider what might cause her symptoms to worsen recently.",
      "phase5": "Your history and physical exam findings are consistent with your leading diagnosis. How do the normal vital signs and physical exam help differentiate between your psychiatric and organic differentials? What aspects of the history are most supportive of panic disorder exacerbation?",
      "finalDebrief": "This case highlights the importance of not dismissing symptoms in patients with known psychiatric conditions, while also recognizing when clinical presentation fits established patterns. How did the patient's description of symptom onset, triggers, and previous similar episodes support the diagnosis of panic attack with hyperventilation?",
      "final": "Diagnosis: panic attack with hyperventilation syndrome. Key learning: (1) Panic attack cannot be a primary diagnosis until medical causes are ruled out. The 'can't miss' diagnoses that mimic panic: PE (Wells criteria + D-dimer), SVT (ECG during episode), hyperthyroidism (TSH), hypoglycemia (glucose), pheochromocytoma (recurrent episodic hypertension), cocaine/stimulant use (UDS). (2) Hyperventilation physiology: anxiety \u2192 increased respiratory rate \u2192 CO2 loss \u2192 respiratory alkalosis (pH 7.52 as here) \u2192 decreased ionized calcium \u2192 perioral numbness, carpopedal spasm, tetany, dizziness. The symptoms reinforce anxiety \u2192 more hyperventilation \u2014 a viscous cycle. Correction: raise CO2 by breathing control. (3) DSM-5 panic disorder: recurrent unexpected panic attacks + \u22651 month of persistent concern about future attacks or maladaptive behavioral change. (4) Treatment: acute = benzodiazepine + breathing control. Long-term = CBT (first-line, addresses avoidance behavior) + SSRI (sertraline, escitalopram \u2014 prevent attacks). Combined CBT + SSRI superior to either alone. (5) Avoidance behavior is the most disabling consequence of panic disorder \u2014 CBT specifically targets this through systematic desensitization."
    }
  }
};
