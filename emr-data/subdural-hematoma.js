
window.EMR_DATA = {
  "patient": {
    "name": "Walter Pemberton",
    "patientHPI": "My wife says I haven't been myself for about two weeks now - I've been confused and clumsy, and today it's gotten much worse. I've had this dull headache on both sides of my head, and I know I've been falling more lately which worries her.",
    "dob": "06/15/1948",
    "age": "78",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-152921",
    "language": "English",
    "race": "Black/African American",
    "phone": "(415) 555-1722",
    "email": "walter.pemberton@email.com",
    "address": "2243 Cottonwood Ave, Columbus, OH 43211",
    "insurance": "Medicaid",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "Walmart Pharmacy \u2014 Pines Blvd",
    "emergencyContact": {
      "name": "Thomas Mitchell",
      "phone": "(212) 555-6464",
      "relationship": "Parent"
    },
    "chiefComplaint": "Wife: 'He's not himself \u2014 confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
    "diagnosis": "Acute-on-Chronic Subdural Hematoma"
  },
  "problems": [
    {
      "problem": "Chronic subdural hematoma \u2014 bilateral, anticoagulation-related",
      "icd": "S06.5X9A",
      "onset": "2024",
      "status": "Active",
      "notes": "Eleanor Walsh, 78F \u2014 on apixaban for AFib. Fell 3 weeks ago, now progressive confusion and gait instability. CT: bilateral crescent-shaped hypodense collections."
    },
    {
      "problem": "Anticoagulation management \u2014 apixaban reversal decision",
      "icd": "S06.5X9A",
      "onset": "2024",
      "status": "Active",
      "notes": "Andexanet alfa (Andexxa) \u2014 FDA-approved reversal for apixaban and rivaroxaban. Required before neurosurgical drainage."
    },
    {
      "problem": "Anticoagulation restart timing \u2014 high stroke risk (AFib) vs rebleed risk",
      "icd": "I48.19",
      "onset": "2020",
      "status": "Active",
      "notes": "CHA2DS2-VASc 6 \u2014 very high stroke risk. Restart anticoagulation at 7-14 days post-drainage after neurosurgery clears."
    }
  ],
  "medications": [
    {
      "name": "Andexanet alfa (Andexxa) \u2014 apixaban reversal",
      "sig": "FDA-approved factor Xa inhibitor reversal agent. Given before neurosurgical procedure. Dose depends on timing of last apixaban dose.",
      "prescriber": "Neurosurgery/Hematology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Burr hole craniotomy \u2014 neurosurgical drainage",
      "sig": "Bilateral burr holes with irrigation for chronic SDH. Reduces mass effect and improves symptoms. Recurrence rate 10-30%.",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 procedure"
    },
    {
      "name": "Dexamethasone 4mg q6h \u2014 cerebral edema",
      "sig": "Reduces pericollection edema and may reduce SDH recurrence (used adjunctively).",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Apixaban \u2014 restart 7-14 days post-procedure",
      "sig": "Discuss timing with neurosurgery. High CHA2DS2-VASc = restart early if surgical hemostasis adequate.",
      "prescriber": "Cardiology/Neurosurgery",
      "start": "Hold",
      "refills": 5,
      "status": "Hold \u2014 restart 7-14 days post-op"
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
      "time": "06:48",
      "bp": "162/88",
      "hr": "78 (irregularly irregular)",
      "rr": "16",
      "temp": "36.9\u00b0C",
      "spo2": "97%",
      "pain": "/10",
      "bmi": "24",
      "weight": "63 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Wife: 'He's not himself \u2014 confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
      "hpi": "Walter Pemberton is a 78-year-old male presenting with wife: 'he's not himself \u2014 confused and clumsy for 2 weeks, much worse today' bilateral headache, diffuse, dull. Past medical history includes Atrial fibrillation, Hypertension, Falls, Chronic alcohol use, BPH. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute-on-Chronic Subdural Hematoma \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "SDH Assessment",
      "results": [
        {
          "test": "INR",
          "value": "1.0",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": ""
        },
        {
          "test": "Anti-Xa level (apixaban)",
          "value": "0.38",
          "unit": "IU/mL",
          "ref": "0 = no drug present",
          "flag": "H"
        },
        {
          "test": "Hemoglobin",
          "value": "11.4",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": "L"
        },
        {
          "test": "Platelets",
          "value": "168",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "1.2",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Head Non-Contrast",
      "indication": "Progressive confusion 3 weeks after fall",
      "findings": "Bilateral subdural hypodense (chronic) collections, right > left. Right 15mm maximal thickness, midline shift 5mm rightward. Left 8mm. Mixed density on right suggests chronic with acute-on-chronic component.",
      "impression": "Bilateral chronic subdural hematomas with mass effect. Neurosurgical evaluation for drainage. Reversal of anticoagulation required pre-operatively."
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
    "Father: stroke",
    "No bleeding disorders"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit 20 years ago"
    ],
    [
      "Alcohol",
      "2-3 drinks daily for decades"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired professor (history department)"
    ],
    [
      "Living",
      "Lives with wife of 48 years"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Walter appears mildly confused and somewhat anxious, frequently looking to his wife for confirmation of details. He's cooperative but clearly distressed by his cognitive changes, often saying 'I'm not usually like this' and becoming frustrated when he can't remember things clearly.",
    "interviewQuestions": [
      "Can you tell me more about when these symptoms first started?",
      "Describe the headache - where exactly do you feel it and what does it feel like?",
      "Have you had any recent falls or head injuries?",
      "Are you having any nausea or vomiting with the headache?",
      "Have you noticed any weakness or numbness anywhere?",
      "Any vision changes or difficulty speaking?",
      "Tell me about your recent falls - when did they happen?",
      "Are you taking all your medications as prescribed?",
      "Have you had any bleeding from anywhere recently?",
      "Any seizures or loss of consciousness?",
      "How has your balance and coordination been?",
      "Have you had headaches like this before?",
      "Any recent changes to your medications?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble thinking clearly right now. Can you ask that a different way?",
      "onset": "My wife noticed I wasn't quite right about two weeks ago, but it's gotten much worse over the past few days, especially today.",
      "character": "It's a dull, constant ache - not sharp or throbbing, just this persistent pressure feeling all over my head.",
      "location": "It's on both sides of my head, kind of all over really. Not focused in one spot.",
      "severity": "Maybe a 5 or 6 out of 10 for pain, but it's the confusion that really bothers me. I can't think straight.",
      "aggravating": "Moving around seems to make me more unsteady, and bright lights bother me a bit.",
      "relieving": "Tylenol hasn't helped much. Lying down quietly helps a little.",
      "associated": "I've been more clumsy, having trouble with balance, and my wife says I'm walking differently. Sometimes I feel a bit nauseated.",
      "denies": "No vision changes, no trouble speaking that I know of, no numbness or tingling anywhere specific.",
      "history": "I get occasional headaches but nothing like this. This is different - it's the confusion that scares me.",
      "medications": "Apixaban; Lisinopril; Tamsulosin",
      "allergies": "NKDA",
      "family": "My father had a stroke when he was in his 80s. No one in the family has bleeding problems that I know of.",
      "social": "I'm a retired history professor. I still have 2-3 drinks most evenings - have for years. Quit smoking 20 years ago. I live with my wife."
    },
    "examManeuvers": [
      "Neurological assessment including mental status",
      "Fundoscopic examination",
      "Gait assessment",
      "Coordination testing (finger-to-nose, heel-to-shin)",
      "Deep tendon reflexes",
      "Cranial nerve examination",
      "Assessment for focal neurological deficits",
      "Head and neck examination for trauma",
      "Cardiovascular examination",
      "Blood pressure in both arms"
    ],
    "examFindings": {
      "Neurological assessment including mental status": "Mild cognitive impairment with short-term memory deficits, oriented to person and place but unsure of date, MMSE 24/30",
      "Fundoscopic examination": "Bilateral papilledema with blurred disc margins and venous engorgement",
      "Gait assessment": "Unsteady, wide-based gait with tendency to drift, requires assistance to maintain balance",
      "Coordination testing (finger-to-nose, heel-to-shin)": "Bilateral dysmetria, more pronounced on right side",
      "Deep tendon reflexes": "Hyperreflexia bilaterally, more prominent in lower extremities",
      "Cranial nerve examination": "CN II-XII grossly intact except for mild bilateral papilledema on fundoscopy",
      "Assessment for focal neurological deficits": "Subtle right-sided weakness, pronator drift positive on right",
      "Head and neck examination for trauma": "No obvious external trauma, no Battle's sign or raccoon eyes",
      "Cardiovascular examination": "Irregularly irregular rhythm consistent with atrial fibrillation, no murmurs",
      "Blood pressure in both arms": "Elevated bilaterally: right 162/88, left 158/86"
    },
    "ddxTargets": [
      "Chronic SDH \u2014 anticoagulated elderly, minor trauma, 3-week delay (correct)",
      "Acute SDH \u2014 high-density (bright) on CT; this is chronic (hypodense, isodense)",
      "Epidural hematoma \u2014 lens-shaped, arterial, acute; young patients, skull fracture",
      "Brain tumor \u2014 ring enhancement with contrast, different time course",
      "Normal pressure hydrocephalus \u2014 triad of dementia/gait/incontinence, ventricular not extraaxial",
      "Dementia \u2014 SDH must be excluded before attributing confusion to dementia"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'headache' as primary complaint and pursue migraine or tension headache, missing the cognitive changes and anticoagulation context",
      "prematureClosure": "Risk of stopping at 'elderly confusion' or attributing symptoms to alcohol use without considering structural causes",
      "availabilityBias": "Recent cases of stroke might lead to immediate focus on acute cerebrovascular events, potentially missing chronic subdural hematoma"
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable possibilities. Given Walter's age, medication history, and the constellation of cognitive changes with headache, what specific risk factors should you explore? What key historical details might help you narrow your differential?",
      "phase5": "Excellent work gathering the history and exam findings. The combination of papilledema, cognitive changes, gait instability, and subtle focal findings in an anticoagulated patient with fall history is very telling. What does this clinical picture suggest to you?",
      "finalDebrief": "This case highlights how chronic subdural hematoma can present insidiously in anticoagulated patients. The key was recognizing that the 'confusion' wasn't just delirium, but part of a syndrome including increased intracranial pressure. How did your thinking evolve as you gathered the fall history and noted the papilledema?",
      "final": "Diagnosis: chronic SDH \u2014 anticoagulated elderly. Key learning: (1) Chronic SDH in elderly anticoagulated patients: the combination of cerebral atrophy (larger subdural space), anticoagulation, and minor trauma creates ideal conditions for chronic SDH. The bridging veins tear with minimal force, bleeding is slow (venous, not arterial), and the hematoma liquefies over weeks. CT shows HYPODENSE (dark) collection \u2014 older blood and protein-rich fluid. (2) Density timeline on CT: acute SDH = hyperdense (bright, fresh blood). Subacute (1-3 weeks) = isodense (hard to see). Chronic (>3 weeks) = hypodense (dark). Mixed density = acute-on-chronic rebleed. (3) DOAC reversal: apixaban and rivaroxaban (Xa inhibitors) \u2192 andexanet alfa (Andexxa). Dabigatran \u2192 idarucizumab (Praxbind). Neither responds to FFP or vitamin K. (4) Chronic SDH drainage: burr hole craniotomy is standard \u2014 less invasive than craniotomy, adequate for chronic liquid collections. Recurrence ~10-30% \u2014 repeat CT at 2 weeks post-op, then reassess. Recurrence risk factors: anticoagulation, bilateral SDH, post-op collections. (5) Anticoagulation restart after intracranial surgery: for AFib, restart at 7-14 days if neurosurgical hemostasis adequate and no active bleeding. Early restart (by 7 days) acceptable for high CHA2DS2-VASc (\u22655) with low rebleed risk on repeat imaging. Shared decision with patient, neurosurgery, and cardiology."
    }
  },
  "meta": {
    "diagnosis": "Chronic Subdural Hematoma \u2014 Elderly on Anticoagulation, Minor Trauma, Burr Hole Drainage",
    "caseId": "subdural-hematoma"
  }
};
