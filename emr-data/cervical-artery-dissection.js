
window.EMR_DATA = {
  "patient": {
    "name": "Danielle Pierre-Louis",
    "patientHPI": "About a week ago I went to my chiropractor for my usual neck adjustment, and a few days later I started getting this dull ache on the right side of my neck that goes up behind my ear. It's not terrible pain, just this constant nagging feeling that wasn't there before.",
    "dob": "06/18/1986",
    "age": 38,
    "sex": "Female",
    "mrn": "RDX-2025-53294",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Natasha Williams, MD",
    "pharmacy": "CVS Pharmacy \u2014 4800 S Pine Island Rd, Riverside, FL",
    "language": "English, Haitian Creole",
    "race": "Black/African American",
    "address": "9601 E Roosevelt Rd, Milwaukee, WI 53209",
    "phone": "(954) 555-2198",
    "email": "d.pierrelouis86@email.com",
    "emergencyContact": {
      "name": "Jean-Marc Pierre-Louis (Husband)",
      "phone": "(954) 555-2215"
    },
    "chiefComplaint": "Headache and neck pain after chiropractic visit"
  },
  "problems": [
    {
      "problem": "Internal carotid artery dissection \u2014 ischemic stroke risk",
      "icd": "I72.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Ashley Wong, 34F \u2014 neck pain onset during chiropractic neck manipulation 2 days ago. Now right-sided headache, left arm weakness, left-sided facial droop. CTA: right ICA dissection with intramural hematoma."
    },
    {
      "problem": "Stroke risk \u2014 thrombus at dissection site can embolize",
      "icd": "I63.031",
      "onset": "2024",
      "status": "Active",
      "notes": "ICA dissection causes ischemic stroke via two mechanisms: intraluminal thrombus formation at dissection site that embolizes distally, and direct luminal narrowing causing hypoperfusion. Anticoagulation or antiplatelet prevents further stroke."
    },
    {
      "problem": "Horner syndrome \u2014 sympathetic chain disruption",
      "icd": "G90.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Ptosis + miosis + anhidrosis = Horner syndrome from ICA dissection disrupting pericarotid sympathetic plexus. Classic accompanying finding."
    }
  ],
  "medications": [
    {
      "name": "Anticoagulation (heparin) OR antiplatelet \u2014 debated, use antiplatelet",
      "sig": "CADISS trial showed no significant difference between anticoagulation and antiplatelet for cervical artery dissection. Current practice: antiplatelet (aspirin 325mg) preferred unless large thrombus or very high stroke risk. Avoid heparin if hemorrhagic transformation.",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 0,
      "status": "Aspirin 325mg initiated"
    },
    {
      "name": "Blood pressure control \u2014 target SBP <140",
      "sig": "Hypertension worsens dissection propagation and increases stroke risk. Avoid vasodilators \u2014 maintain cerebral perfusion pressure especially in setting of stroke.",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Avoid further neck manipulation \u2014 patient education",
      "sig": "Chiropractic manipulation and ICA/VA dissection: the relationship is debated (causation vs coincidence), but avoidance of further manipulation is standard recommendation during dissection healing.",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 0,
      "status": "Counseled"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Nausea and vomiting",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Latex",
      "type": "Environmental",
      "reaction": "Contact urticaria",
      "severity": "Mild",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "12/10/2024",
      "bp": "118/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "138 lbs",
      "ht": "5'7\"",
      "bmi": 21.6,
      "setting": "PCP Office"
    },
    {
      "date": "08/20/2024",
      "bp": "114/70",
      "hr": 72,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "136 lbs",
      "ht": "5'7\"",
      "bmi": 21.3,
      "setting": "PCP Office"
    },
    {
      "date": "03/15/2024",
      "bp": "122/76",
      "hr": 66,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "98%",
      "wt": "140 lbs",
      "ht": "5'7\"",
      "bmi": 21.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Natasha Williams, MD",
      "cc": "Medication refills, neck pain after chiropractic visit",
      "hpi": "38-year-old female presents for routine medication refills. Also reports new right-sided neck pain that began 3 days after a chiropractic cervical manipulation last week. Describes it as a dull ache radiating behind the right ear. No headache currently. No neurologic symptoms. History of EDS with joint hypermobility.",
      "exam": "General: Well-appearing, NAD. HEENT: PERRL, EOMI, no Horner syndrome. Neck: Mild TTP right SCM and posterior cervical region; full ROM but reports discomfort with right rotation. CV: RRR, no bruits. Neuro: A&O x3, CN II-XII intact, strength 5/5 all extremities, sensation intact.",
      "assessment": "1. Right-sided neck pain \u2014 post-chiropractic manipulation; likely musculoskeletal\n2. Migraine \u2014 stable\n3. GAD \u2014 stable on escitalopram\n4. EDS \u2014 counseled regarding cervical manipulation risks",
      "plan": "1. Ibuprofen PRN; warm compresses; avoid further cervical manipulation\n2. Continue sumatriptan PRN\n3. Continue escitalopram\n4. RTC 6 months or PRN; return if headache develops, vision changes, or neurologic symptoms"
    },
    {
      "id": "V002",
      "date": "08/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Natasha Williams, MD",
      "cc": "Annual wellness exam",
      "hpi": "38-year-old female for annual exam. Migraines occurring 2-3x/month, manageable with sumatriptan. Anxiety well-controlled. EDS \u2014 no new subluxations. Exercising regularly with Pilates. No new complaints.",
      "exam": "General: NAD, well-nourished female. HEENT: WNL. Neck: Supple, no LAD. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT. MSK: Joint hypermobility noted at MCPs, elbows, knees (Beighton 7/9). Skin: Velvety texture, no bruising.",
      "assessment": "1. Annual wellness exam\n2. Migraine \u2014 stable frequency\n3. EDS \u2014 stable, no acute subluxations\n4. GAD \u2014 well-controlled",
      "plan": "1. Continue current medications\n2. Age-appropriate screening current\n3. Discussed EDS precautions: avoid high-impact exercise, cervical manipulation\n4. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Cervical Artery Dissection",
      "results": [
        {
          "test": "Hypercoagulable screen",
          "value": "Pending \u2014 factor V Leiden, prothrombin mutation, protein C/S, antiphospholipid",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "ESR/CRP",
          "value": "Normal",
          "unit": "",
          "ref": "Normal \u2014 no vasculitis",
          "flag": ""
        },
        {
          "test": "MRI brain DWI",
          "value": "Small acute infarct right MCA territory",
          "unit": "",
          "ref": "No acute ischemia = normal",
          "flag": "H"
        },
        {
          "test": "Pupil exam",
          "value": "Right: 4mm. Left: 2mm, ptosis \u2014 right Horner syndrome (ipsilateral to dissection)",
          "unit": "",
          "ref": "Equal pupils",
          "flag": "H"
        },
        {
          "test": "CTA neck",
          "value": "Right ICA dissection with intramural hematoma, string sign \u2014 70% stenosis",
          "unit": "",
          "ref": "Normal lumen",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CTA Head and Neck",
      "findings": "Right internal carotid artery dissection beginning at C2-C3, with intramural hematoma and 'string sign' (70% luminal narrowing). Small filling defect consistent with intraluminal thrombus. MRI brain: small right MCA territory acute infarct on DWI.",
      "impression": "Right ICA dissection with ischemic stroke. Antiplatelet therapy and neurology follow-up."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "09/25/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-219",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/10/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-774",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) \u2014 series complete",
      "date": "2008",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Ehlers-Danlos Syndrome (hypermobility type), migraines, alive at 64",
    "Father: HTN, T2DM, alive at 66",
    "Sister: Migraines, age 35",
    "Maternal aunt: Ruptured cerebral aneurysm at age 52 (deceased)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Physical therapist"
    ],
    [
      "Marital",
      "Married, 1 child (age 4)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Occasional, 1-2 glasses of wine per week"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Pilates 3x/week; avoids high-impact activities per EDS precautions"
    ],
    [
      "Housing",
      "Lives with husband and daughter in townhouse"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; car seat for child"
    ],
    [
      "Advance Directive",
      "None \u2014 discussed"
    ]
  ],
  "meta": {
    "caseId": "cervical-artery-dissection",
    "diagnosis": "Internal Carotid Artery Dissection \u2014 Post-Chiropractic Manipulation",
    "acuity": 2,
    "presentation": "Headache",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Danielle appears mildly anxious and concerned about her persistent neck discomfort, speaking clearly but with obvious worry about whether this is related to her recent chiropractic visit. She's cooperative and detailed in her responses, though hesitant to seem like she's blaming her chiropractor, and shows subtle signs of distress when describing how the pain differs from her usual migraines.",
    "interviewQuestions": [
      "Can you describe exactly when this neck pain started in relation to your chiropractic visit?",
      "How does this pain differ from your usual migraine headaches?",
      "Have you noticed any changes in your vision or hearing?",
      "Are you experiencing any weakness or numbness in your face, arms, or legs?",
      "Have you had any dizziness, balance problems, or coordination issues?",
      "What type of neck manipulation did your chiropractor perform?",
      "Have you had any difficulty swallowing or changes in your voice?",
      "Are you having any nausea or vomiting with this pain?",
      "Have you noticed the pain getting worse or changing over the past few days?",
      "With your Ehlers-Danlos syndrome, have you had problems with neck adjustments before?",
      "Are you having any unusual fatigue or confusion?",
      "Have you taken anything for this pain, and did it help?",
      "Any family history of stroke or blood vessel problems?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "It started about 3-4 days after my chiropractic appointment last week. I went in on Tuesday for my usual monthly adjustment, and by Friday I noticed this dull ache starting in my neck.",
      "character": "It's this constant, dull, aching pain that's different from my migraines. It feels like a deep ache that pulses sometimes, not the sharp throbbing I get with migraines.",
      "location": "It starts in the right side of my neck and goes up behind my right ear, sometimes extending toward the back of my head. It's very localized to that right side.",
      "severity": "I'd say it's about a 4 or 5 out of 10 for pain, but it's the constant nature that's really bothering me. It's not debilitating like my migraines can be, but it's always there.",
      "aggravating": "Turning my head to the right seems to make it worse, and I've noticed it's more prominent when I'm working at my computer or looking down at patients.",
      "relieving": "The ibuprofen helps a little bit, but not nearly as much as it usually does for my other aches and pains. Rest doesn't seem to make much difference either.",
      "associated": "I've been feeling a bit more tired than usual, and yesterday I had a brief moment where I felt slightly dizzy when I stood up quickly. No nausea or vomiting though.",
      "denies": "No vision changes, no weakness in my arms or legs, no difficulty speaking or swallowing. No numbness or tingling anywhere.",
      "history": "I've never had neck pain like this before. My migraines are completely different - they're usually on the left side and come with nausea and light sensitivity.",
      "medications": "Sumatriptan 50mg PRN; Escitalopram 10mg daily; Ibuprofen 400mg PRN; Oral Contraceptive (Norethindrone 0.35mg daily)",
      "allergies": "Codeine, Latex",
      "family": "My mom has the same type of Ehlers-Danlos that I do, and she gets migraines too. My dad has high blood pressure and diabetes. No family history of strokes that I know of.",
      "social": "I'm a physical therapist, so I'm on my feet a lot and work with patients doing manual therapy. I'm married with a 4-year-old. I don't smoke, maybe have a glass of wine once or twice a week, no drugs."
    },
    "examManeuvers": [
      "Neurological screening exam (cranial nerves II-XII)",
      "Neck inspection and palpation",
      "Cervical range of motion testing",
      "Carotid artery auscultation",
      "Fundoscopic examination",
      "Motor strength testing (upper and lower extremities)",
      "Deep tendon reflexes",
      "Coordination testing (finger-to-nose, heel-to-shin)",
      "Gait assessment",
      "Assessment of joint hypermobility (Beighton score)"
    ],
    "examFindings": {
      "Neurological screening exam (cranial nerves II-XII)": "Cranial nerves II-XII grossly intact, no focal deficits noted, pupils equal and reactive to light",
      "Neck inspection and palpation": "Mild tenderness along right sternocleidomastoid muscle, no visible swelling or deformity, no lymphadenopathy",
      "Cervical range of motion testing": "Slightly limited right rotation due to discomfort, otherwise full range of motion",
      "Carotid artery auscultation": "Possible subtle right carotid bruit, left carotid clear, no obvious murmurs",
      "Fundoscopic examination": "Optic discs appear normal, no papilledema, no retinal hemorrhages",
      "Motor strength testing (upper and lower extremities)": "5/5 strength throughout all major muscle groups bilaterally",
      "Deep tendon reflexes": "2+ and symmetric throughout, no pathologic reflexes",
      "Coordination testing (finger-to-nose, heel-to-shin)": "Intact coordination bilaterally, no dysmetria or ataxia",
      "Gait assessment": "Normal gait, no ataxia or instability",
      "Assessment of joint hypermobility (Beighton score)": "Beighton score 7/9, consistent with known Ehlers-Danlos syndrome hypermobility type"
    },
    "ddxTargets": [
      "ICA dissection \u2014 post-manipulation (correct)",
      "Atherosclerotic carotid stenosis \u2014 older patient; no trauma/manipulation; calcified plaque on CTA; different pattern",
      "Hypertensive stroke \u2014 no dissection on CTA; no neck pain or Horner",
      "Spontaneous dissection from connective tissue disorder \u2014 Marfan, Ehlers-Danlos; screen for underlying CTD in young patients",
      "Vertebral artery dissection \u2014 posterior circulation symptoms (vertigo, ataxia, dysphagia); Wallenberg syndrome",
      "Carotid web \u2014 thin shelf of tissue; different CTA appearance; embolic strokes in young women"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on migraine history and dismissing this as another headache variant, missing the critical timing relationship to chiropractic manipulation in a patient with connective tissue disorder",
      "prematureClosure": "Risk of stopping at cervical strain diagnosis without considering vascular causes, especially given the subtle presentation and absence of dramatic neurological deficits",
      "availabilityBias": "Common presentations like tension headaches or migraine variants may overshadow the less common but serious diagnosis of arterial dissection"
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable possibilities for headache and neck pain. Given this patient's presentation, what specific risk factors might make certain diagnoses more or less likely? Think about the timing of symptom onset and any predisposing conditions this patient might have.",
      "phase5": "You've gathered good history and physical exam data. The subtle carotid bruit is an important finding. In a patient with Ehlers-Danlos syndrome who recently had cervical manipulation, what vascular complications should you be most concerned about? How might the connective tissue disorder affect your differential diagnosis?",
      "finalDebrief": "This case highlights the importance of recognizing high-risk patients for arterial dissection. The combination of Ehlers-Danlos syndrome (connective tissue fragility) and recent neck manipulation created the perfect storm for carotid dissection. The subtle presentation without obvious stroke symptoms can make this diagnosis challenging, but the timing, character of pain, and subtle carotid bruit were key clues. How has your approach to post-manipulation complaints evolved after seeing this case?",
      "final": "Diagnosis: internal carotid artery dissection. Key learning: (1) Cervical artery dissection (CAD) is a leading cause of stroke in patients under 45 years old. ICA dissection (anterior circulation) vs vertebral artery dissection (posterior circulation \u2014 Wallenberg syndrome). The classic history: neck pain or headache preceding stroke symptoms, often with a precipitating event (trauma, manipulation, Valsalva). (2) Horner syndrome: ipsilateral ptosis + miosis + anhidrosis from disruption of the pericarotid sympathetic plexus. Classic accompanying finding in ICA dissection \u2014 localizes the lesion. (3) CTA findings: intramural hematoma (crescent-shaped wall thickening), 'string sign' (long segment narrowing), double lumen, flame-shaped occlusion. CTA/MRA of the neck are the imaging of choice. (4) Antiplatelet vs anticoagulation (CADISS trial): no significant difference in outcomes. Antiplatelet (aspirin) is now the preferred initial treatment for most CAD. Reserve anticoagulation for high thrombus burden or recurrent embolism. (5) Prognosis: most cervical artery dissections heal spontaneously within 3-6 months. Antithrombotic therapy continued for 3-6 months then reassess imaging. Underlying connective tissue disorders (Marfan, Ehlers-Danlos, FMD) should be considered in young patients with spontaneous dissection."
    }
  }
};
