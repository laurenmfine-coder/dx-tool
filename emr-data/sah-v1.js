
window.EMR_DATA = {
  "patient": {
    "name": "Jennifer Wu",
    "patientHPI": "I was just sitting at my desk when suddenly I got hit with an incredibly severe headache \u2014 it came on in seconds. I've never experienced anything like this before, I'm terrified.",
    "dob": "09/16/1984",
    "age": "42",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-510850",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(502) 555-2657",
    "email": "jennifer.wu@email.com",
    "address": "8726 Clover St, Albuquerque, NM 87103",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Michelle Foster, MD",
    "pharmacy": "Walmart Pharmacy \u2014 Sunrise Blvd",
    "emergencyContact": {
      "name": "Joseph Wu",
      "phone": "(617) 555-9843",
      "relationship": "Parent"
    },
    "chiefComplaint": "Sudden severe headache",
    "diagnosis": "Subarachnoid Hemorrhage"
  },
  "problems": [
    {
      "problem": "Subarachnoid hemorrhage \u2014 aneurysmal, CT positive",
      "icd": "I60.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Elena Reyes, 47F \u2014 sudden severe headache 'worst of my life' during exercise, vomiting, neck stiffness. Hemorrhage on CT."
    },
    {
      "problem": "Berry aneurysm \u2014 8mm left MCA aneurysm on CTA",
      "icd": "I67.1",
      "onset": "2024",
      "status": "Active",
      "notes": "CT angiography: 8mm left MCA bifurcation aneurysm \u2014 likely source. Neurovascular surgery evaluating coiling vs clipping."
    },
    {
      "problem": "Vasospasm prevention \u2014 nimodipine protocol initiated",
      "icd": "I60.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Cerebral vasospasm occurs 3-14 days post-SAH \u2014 leading cause of delayed morbidity. Nimodipine reduces vasospasm-related mortality."
    }
  ],
  "medications": [
    {
      "name": "Nimodipine 60mg PO q4h x21 days \u2014 vasospasm prevention",
      "sig": "Oral calcium channel blocker \u2014 reduces cerebral vasospasm and improves neurologic outcome post-SAH. Give even if patient is NPO via NG tube (capsule contents via tube).",
      "prescriber": "Neurosurgery/Neurology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Labetalol IV PRN \u2014 BP control <160 systolic",
      "sig": "SBP target <160 before aneurysm secured. After securing: permissive hypertension to maintain cerebral perfusion.",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "Active PRN"
    },
    {
      "name": "Levetiracetam 1000mg IV BID \u2014 seizure prophylaxis",
      "sig": "Short-term seizure prophylaxis (7 days) \u2014 reduces re-bleeding risk from seizure-induced BP surge before aneurysm is secured.",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 7-day course"
    },
    {
      "name": "Stool softeners + anti-emetics \u2014 prevent Valsalva",
      "sig": "Valsalva maneuver increases ICP and can precipitate re-bleeding. Docusate sodium + ondansetron.",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "192/108",
      "hr": "68",
      "rr": "16",
      "temp": "37.2\u00b0C",
      "spo2": "98%",
      "pain": "10/10",
      "bmi": "37",
      "weight": "82 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Worst headache of my life \u2014 sudden onset thunderclap",
      "hpi": "Jennifer Wu is a 42-year-old female presenting with sudden severe headache. Past medical history includes Hypertension, Smoker, Family history of aneurysms. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Subarachnoid Hemorrhage \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "SAH Assessment",
      "results": [
        {
          "test": "CT Head Non-Contrast \u2014 acute",
          "value": "Blood in basal cisterns, sylvian fissure \u2014 SAH pattern",
          "unit": "",
          "ref": "No blood",
          "flag": "H"
        },
        {
          "test": "CSF \u2014 xanthochromia",
          "value": "Yellow \u2014 xanthochromia positive",
          "unit": "",
          "ref": "Clear",
          "flag": "H"
        },
        {
          "test": "CSF \u2014 RBC",
          "value": "100,000",
          "unit": "cells/\u03bcL",
          "ref": "<5",
          "flag": "H"
        },
        {
          "test": "CSF \u2014 WBC",
          "value": "50",
          "unit": "cells/\u03bcL",
          "ref": "<5",
          "flag": "H"
        },
        {
          "test": "Sodium",
          "value": "134",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "Troponin I",
          "value": "0.14",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Angiography Head",
      "indication": "SAH \u2014 aneurysm identification",
      "findings": "8mm left MCA bifurcation aneurysm \u2014 lobulated, irregular margins. No other aneurysms. No arteriovenous malformation.",
      "impression": "Left MCA aneurysm \u2014 likely source of SAH. Neurovascular surgery urgent consultation. Coiling vs clipping decision pending."
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
    "Mother: ruptured aneurysm at age 48"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 25 pack-years"
    ],
    [
      "Cocaine",
      "Denies"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Jennifer is visibly distressed and frightened, describing her pain with urgency and fear in her voice. She is very forthcoming about her symptoms because she's terrified this might be like what happened to her mother. Her anxiety is palpable as she repeatedly emphasizes this is the worst headache of her life.",
    "interviewQuestions": [
      "Can you describe exactly how this headache started?",
      "On a scale of 1-10, how would you rate this headache?",
      "Where exactly is the pain located?",
      "Have you ever had a headache like this before?",
      "Are you experiencing any nausea, vomiting, or vision changes?",
      "Do you have any neck stiffness or pain when you bend your neck forward?",
      "Have you had any weakness, numbness, or difficulty speaking?",
      "Have you lost consciousness or had any confusion?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Tell me about your family history, especially regarding headaches or brain problems",
      "Do you use tobacco, alcohol, or any recreational drugs?",
      "Have you had any recent head trauma or unusual physical exertion?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this terrible pain - can you repeat that?",
      "onset": "It hit me like a thunderclap while I was just sitting at my computer - went from zero to the worst pain imaginable in literally seconds",
      "character": "It's like someone took a baseball bat to the back of my head - sharp, explosive, nothing like any headache I've ever had",
      "location": "It started at the back of my head and feels like it's spreading everywhere, but the worst part is definitely the back and base of my skull",
      "severity": "This is easily a 10 out of 10 - I can barely think straight and I'm terrified something is seriously wrong",
      "aggravating": "Any movement makes it worse, even turning my head slightly, and bright lights are really bothering me",
      "relieving": "Nothing helps - I tried holding my head but nothing touches this pain",
      "associated": "I feel really nauseous and the light in here is bothering me, but no vomiting yet",
      "denies": "No weakness in my arms or legs, no trouble speaking, I didn't pass out, and no recent injuries to my head",
      "history": "Never, ever had anything even close to this - I get occasional tension headaches but this is completely different",
      "medications": "Lisinopril",
      "allergies": "NKDA",
      "family": "My mother had a brain aneurysm that ruptured when she was 48 - that's exactly what I'm terrified this might be",
      "social": "I work in accounting, pretty sedentary job. I smoke about a pack a day, have for years. I have maybe a glass of wine with dinner, no illegal drugs"
    },
    "examManeuvers": [
      "General appearance and vital signs",
      "Neurological assessment - mental status and orientation",
      "Cranial nerve examination",
      "Motor strength testing",
      "Deep tendon reflexes",
      "Neck stiffness assessment (nuchal rigidity)",
      "Fundoscopic examination",
      "Coordination testing",
      "Gait assessment",
      "Kernig's and Brudzinski's signs"
    ],
    "examFindings": {
      "General appearance and vital signs": "Patient appears acutely distressed, holding head, photophobic; BP 192/108, HR 68, afebrile",
      "Neurological assessment - mental status and orientation": "Alert and oriented x3, but appears anxious and in significant distress",
      "Cranial nerve examination": "Cranial nerves II-XII grossly intact, pupils equal and reactive",
      "Motor strength testing": "5/5 strength in all extremities",
      "Deep tendon reflexes": "2+ and symmetric throughout",
      "Neck stiffness assessment (nuchal rigidity)": "Mild nuchal rigidity present, patient resists passive neck flexion",
      "Fundoscopic examination": "Difficult to assess due to photophobia, but no obvious papilledema visualized",
      "Coordination testing": "Finger-to-nose intact bilaterally, though patient has difficulty with testing due to head pain",
      "Gait assessment": "Steady gait but moves cautiously, holding head",
      "Kernig's and Brudzinski's signs": "Brudzinski's sign negative, Kernig's sign equivocal due to patient guarding"
    },
    "ddxTargets": [
      "Aneurysmal SAH \u2014 thunderclap headache, basal cistern blood, MCA aneurysm (correct)",
      "Thunderclap headache \u2014 benign sentinel bleed is SAH until proven otherwise",
      "Meningitis \u2014 fever, gradual onset, CSF differs (WBC higher, glucose low)",
      "Hypertensive intracerebral hemorrhage \u2014 parenchymal blood, not cistern pattern",
      "Cerebral venous sinus thrombosis \u2014 different headache pattern, different CT findings",
      "Reversible cerebral vasoconstriction syndrome \u2014 similar presentation, repeat imaging needed"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on family history of aneurysm and immediately assuming SAH without considering other causes of thunderclap headache",
      "prematureClosure": "Risk of stopping evaluation after noting hypertension and attributing headache to hypertensive crisis without recognizing thunderclap onset",
      "availabilityBias": "May focus on more common headache causes (migraine, tension) rather than considering the specific thunderclap presentation suggesting SAH"
    },
    "coachPrompts": {
      "phase2": "You've identified several concerning differentials. Given this patient's presentation of sudden-onset severe headache, what specific historical features will help you distinguish between these diagnoses? Think about the timeline and character of symptom onset.",
      "phase5": "Now that you've completed your evaluation, let's think through your findings systematically. You have a patient with thunderclap headache onset, family history of aneurysm, hypertension, and some nuchal rigidity. How do these findings help narrow your differential diagnosis?",
      "finalDebrief": "This case highlights the classic presentation of subarachnoid hemorrhage - thunderclap headache onset, family history, and nuchal rigidity were key clues. Notice how the dramatic symptom onset and patient's description of 'worst headache of life' should immediately raise concern for SAH, despite the temptation to attribute symptoms to her known hypertension.",
      "final": "Diagnosis: aneurysmal SAH. Key learning: (1) 'Worst headache of my life' + thunderclap onset = SAH until proven otherwise. Sensitivity of non-contrast CT within 6h of onset is ~98-99%. After 6h, sensitivity drops (blood is reabsorbed) \u2192 LP for xanthochromia required if CT negative. Xanthochromia (yellow CSF) from RBC breakdown is detectable within 2-4h and persists 2 weeks. (2) LP timing: if CT negative, LP should be performed at least 6h after headache onset \u2014 false negatives occur if LP done too early before xanthochromia develops. (3) Nimodipine mechanism: calcium channel blocker that reduces cerebral vasospasm \u2014 the leading cause of delayed morbidity (days 3-14 post-SAH). Does NOT prevent vasospasm radiographically but reduces neurologic deficits and mortality. Give 60mg q4h for 21 days regardless of vasospasm status. (4) Re-bleeding risk: highest in first 24h (~15%). Maintain SBP <160 before aneurysm is secured. Anti-emetics and stool softeners prevent Valsalva-induced re-bleeding. (5) Treatment \u2014 coiling vs clipping: endovascular coiling is preferred when feasible (less invasive, faster recovery, equivalent long-term durability per ISAT trial). Surgical clipping preferred for wide-necked aneurysms, MCA aneurysms with intracerebral hematoma requiring evacuation. Neurovascular team decides based on anatomy and patient factors."
    }
  },
  "meta": {
    "diagnosis": "Subarachnoid Hemorrhage \u2014 'Thunderclap' Headache, Berry Aneurysm, Emergency Neurosurgical Evaluation",
    "caseId": "sah-v1"
  }
};
