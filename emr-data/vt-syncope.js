
window.EMR_DATA = {
  "patient": {
    "name": "Dennis Crawford",
    "patientHPI": "I was just sitting at home when I felt my heart racing really fast and then I blacked out completely - when I came to my family was standing over me asking if I was okay.",
    "dob": "06/15/1964",
    "age": "62",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-384673",
    "language": "English",
    "race": "Asian",
    "phone": "(404) 555-2402",
    "email": "dennis.crawford@email.com",
    "address": "1209 N Western Ave, Phoenix, AZ 85013",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Rite Aid \u2014 Pines Blvd",
    "emergencyContact": {
      "name": "Gloria Carter",
      "phone": "(617) 555-6908",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Passed out No specific pain location \u2014 felt palpitations in chest before passing out",
    "diagnosis": "Ventricular Tachycardia with Syncope"
  },
  "problems": [
    {
      "problem": "Ventricular tachycardia \u2014 sustained, causing syncope",
      "icd": "I47.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Harold Washington, 64M \u2014 prior MI 3 years ago, EF 30%. Witnessed syncope at home. EMS: sustained monomorphic VT 180 bpm."
    },
    {
      "problem": "HFrEF \u2014 EF 30%, prior anterior MI substrate for VT",
      "icd": "I50.20",
      "onset": "2021",
      "status": "Active",
      "notes": "Scar from prior LAD territory MI provides re-entrant circuit for monomorphic VT. Substrate ablation or ICD needed."
    },
    {
      "problem": "ICD implantation \u2014 secondary prevention indication",
      "icd": "Z45.018",
      "onset": "2024",
      "status": "Active",
      "notes": "Sustained VT causing syncope in structural heart disease = Class I ICD indication. EP consultation active."
    }
  ],
  "medications": [
    {
      "name": "Amiodarone 150mg IV over 10 min, then 1mg/min infusion \u2014 acute VT",
      "sig": "Acute VT cardioversion preferred if hemodynamically unstable. Amiodarone for stable or recurrent VT.",
      "prescriber": "Cardiology/EP",
      "start": "2024",
      "refills": 0,
      "status": "Given \u2014 acute"
    },
    {
      "name": "Metoprolol succinate 25mg PO daily \u2014 beta-blocker",
      "sig": "Continue beta-blocker \u2014 GDMT for HFrEF AND reduces VT burden. Increase dose as tolerated.",
      "prescriber": "Cardiology",
      "start": "2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Amiodarone 200mg PO daily \u2014 bridge and adjunct to ICD",
      "sig": "Oral amiodarone reduces VT burden and appropriate ICD shocks. Monitor thyroid, pulmonary, hepatic, and ocular annually.",
      "prescriber": "EP",
      "start": "2024",
      "refills": 5,
      "status": "Active \u2014 post-ICD adjunct"
    },
    {
      "name": "ICD implantation \u2014 EP procedure scheduled",
      "sig": "Secondary prevention ICD \u2014 sustained VT causing syncope in structural heart disease. Single-chamber vs biventricular ICD (CRT-D) based on QRS duration.",
      "prescriber": "EP",
      "start": "2024",
      "refills": 0,
      "status": "Scheduled"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "No Known Drug Allergies",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "07:25",
      "bp": "108/72",
      "hr": "78",
      "rr": "16",
      "temp": "36.9\u00b0C",
      "spo2": "96%",
      "pain": "/10",
      "bmi": "33",
      "weight": "65 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Passed out No specific pain location \u2014 felt palpitations in chest before passing out",
      "hpi": "Dennis Crawford is a 62-year-old male presenting with passed out no specific pain location \u2014 felt palpitations in chest before passing out. Past medical history includes Myocardial infarction 3 years ago, Heart failure, Hypertension, Hyperlipidemia. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ventricular Tachycardia with Syncope \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "VT Workup",
      "results": [
        {
          "test": "Troponin I",
          "value": "0.06",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "3.3",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "L"
        },
        {
          "test": "Magnesium",
          "value": "1.6",
          "unit": "mg/dL",
          "ref": "1.7-2.2",
          "flag": "L"
        },
        {
          "test": "TSH",
          "value": "2.2",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
          "flag": ""
        },
        {
          "test": "QTc (ECG)",
          "value": "448",
          "unit": "ms",
          "ref": "<450ms",
          "flag": ""
        },
        {
          "test": "EF (echo)",
          "value": "30",
          "unit": "%",
          "ref": ">55%",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "Echocardiogram",
      "indication": "VT, prior MI, assess EF and wall motion",
      "findings": "EF 30%. Anterior wall motion abnormality. LV dilation. No pericardial effusion. Moderate MR.",
      "impression": "Ischemic cardiomyopathy \u2014 substrate for re-entrant VT. ICD and EP evaluation indicated."
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
    "Father: sudden cardiac death at age 52",
    "Brother: heart failure"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit after MI (20 pack-year history)"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired bus driver"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Dennis appears anxious and somewhat shaken by the syncopal episode, frequently touching his chest while speaking. He's cooperative and forthcoming with information but shows visible concern about his heart given his cardiac history. His affect is appropriate but worried, and he keeps asking if this means his heart is getting worse.",
    "interviewQuestions": [
      "Can you describe exactly what you felt in your chest before you passed out?",
      "How long did the palpitations last before you lost consciousness?",
      "Do you remember feeling dizzy or lightheaded before passing out?",
      "How long were you unconscious according to your family?",
      "Have you had any chest pain, shortness of breath, or nausea recently?",
      "Have you experienced similar episodes of palpitations or passing out before?",
      "Have you been taking all your heart medications as prescribed?",
      "Have you had any recent changes in your weight or swelling in your legs?",
      "Have you been more tired or short of breath with normal activities lately?",
      "Do you recall if you jerked or shook while you were unconscious?",
      "Did you bite your tongue or lose control of your bladder during the episode?",
      "Have you had any recent illness, fever, or medication changes?",
      "How has your heart failure been controlled recently?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - can you explain that differently? I'm still pretty shaken up by what happened.",
      "onset": "I was just sitting in my recliner watching TV around 2 PM when suddenly my heart started racing really fast, then within maybe 30 seconds I was out cold.",
      "character": "It felt like my heart was beating so fast and hard that it might pound right out of my chest - not like the normal irregular beats I sometimes get.",
      "location": "The racing feeling was right here in the center of my chest, didn't go anywhere else, just felt like my whole chest was vibrating.",
      "severity": "The palpitations were really intense, maybe an 8 out of 10, but I don't have any pain now - I'm just worried about my heart.",
      "aggravating": "I wasn't doing anything when it started - just sitting there relaxed. I haven't noticed anything that makes it worse.",
      "relieving": "Well, I passed out so I don't know what stopped it, but when I woke up my heart felt normal again.",
      "associated": "Right before I passed out I felt really dizzy and kind of nauseous, but no chest pain or trouble breathing.",
      "denies": "No chest pain, no shortness of breath, no sweating or arm pain. I didn't bite my tongue or wet myself, and my family said I didn't shake or jerk around.",
      "history": "I've had some irregular heartbeats since my heart attack, but nothing like this racing feeling and I've never passed out before.",
      "medications": "Carvedilol; Lisinopril; Furosemide; Atorvastatin; Aspirin; Clopidogrel",
      "allergies": "NKDA",
      "family": "My dad dropped dead suddenly at 52 - they said it was his heart. My brother has heart failure like me. That's why this really scares me.",
      "social": "I'm retired from driving buses, quit smoking after my heart attack three years ago - used to smoke a pack a day for 20 years. I hardly drink and don't use drugs."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Jugular venous pressure assessment",
      "Peripheral pulse examination",
      "Lower extremity edema assessment",
      "Orthostatic vital signs",
      "Neurologic examination",
      "Carotid pulse and bruit assessment",
      "Pulmonary auscultation",
      "Abdominal examination"
    ],
    "examFindings": {
      "Cardiac auscultation": "Regular rate and rhythm, normal S1 and S2, no murmurs, rubs, or gallops currently present",
      "Jugular venous pressure assessment": "JVP elevated to 8 cm H2O, consistent with mild volume overload",
      "Peripheral pulse examination": "Radial and dorsalis pedis pulses 2+ bilaterally, regular rhythm",
      "Lower extremity edema assessment": "Trace bilateral pedal edema, chronic venous stasis changes present",
      "Orthostatic vital signs": "No orthostatic changes - BP and HR stable from supine to standing",
      "Neurologic examination": "Alert and oriented x3, no focal neurologic deficits, normal gait and coordination",
      "Carotid pulse and bruit assessment": "Carotid upstrokes normal, no bruits appreciated bilaterally",
      "Pulmonary auscultation": "Clear to auscultation bilaterally, no crackles or wheezes",
      "Abdominal examination": "Soft, non-tender, no hepatomegaly or ascites"
    },
    "ddxTargets": [
      "Sustained VT \u2014 ischemic cardiomyopathy substrate, ICD indicated (correct)",
      "SVT with aberrancy \u2014 narrow QRS baseline, but VT vs SVT: if structural heart disease + wide complex tachycardia = VT until proven otherwise",
      "Torsades de pointes \u2014 QTc mildly prolonged but monomorphic morphology; TdP is polymorphic with twisting axis",
      "Brugada syndrome \u2014 different ECG pattern, no structural heart disease",
      "AVNRT \u2014 young, no structural disease, responds to adenosine; not this presentation",
      "Cardiogenic syncope from bradycardia \u2014 heart block pattern, not tachyarrhythmia"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on heart failure history and assuming this is simply worsening CHF rather than considering life-threatening arrhythmias",
      "prematureClosure": "May stop diagnostic workup after noting stable vitals and normal current exam, missing the need for cardiac monitoring and ECG",
      "availabilityBias": "Recent cases of vasovagal syncope might lead to underestimating arrhythmic causes in a patient with structural heart disease"
    },
    "coachPrompts": {
      "phase2": "You've identified several possible causes of syncope. Given this patient's history of MI and current heart failure, which arrhythmic causes should be highest on your differential? What specific questions about the palpitations and witnessed events will help you distinguish between these?",
      "phase5": "Your exam shows a stable patient now, but the history describes a very concerning episode. How does the combination of structural heart disease, palpitations followed by syncope, and family history of sudden cardiac death narrow your differential? What's the most urgent diagnostic test needed?",
      "finalDebrief": "This case illustrates how patients with structural heart disease are at high risk for ventricular arrhythmias. The key clinical clues were the rapid palpitations immediately preceding syncope in someone with prior MI. How did the normal current exam potentially create diagnostic challenges, and why is continuous cardiac monitoring essential even when the patient appears stable?",
      "final": "Diagnosis: sustained VT causing syncope, ischemic cardiomyopathy. Key learning: (1) Brugada rule for wide complex tachycardia: any wide complex tachycardia (WCT) in a patient with structural heart disease = VT until proven otherwise. Even if they appear hemodynamically stable. Treat as VT. SVT with aberrancy in structural heart disease is uncommon; VT is common. (2) ICD indications \u2014 secondary prevention: sustained VT/VF causing syncope or hemodynamic instability in patients who survive. Primary prevention: EF \u226435% on optimal GDMT x3 months despite no prior sustained VT (EF criteria met here \u2014 double indication). (3) Electrolytes and VT: hypokalemia and hypomagnesemia are highly arrhythmogenic. Every VT patient needs K+ and Mg2+ checked and repleted to K+ \u22654.0 and Mg2+ \u22652.0. (4) Amiodarone monitoring: annual TSH (hypo/hyperthyroidism), PFTs (pulmonary toxicity), LFTs (hepatotoxicity), slit-lamp eye exam (corneal microdeposits, optic neuropathy \u2014 rare). Half-life of 40-55 days \u2014 side effects can persist long after stopping. (5) VT ablation: catheter ablation of the reentrant VT circuit is an alternative or adjunct to amiodarone. Reduces appropriate ICD shocks in structural heart disease VT. EP evaluation for ablation candidacy alongside ICD implantation."
    }
  },
  "meta": {
    "diagnosis": "Ventricular Tachycardia Causing Syncope \u2014 Structural Heart Disease, ICD Implantation Indicated",
    "caseId": "vt-syncope"
  }
};
