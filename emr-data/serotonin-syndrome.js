
window.EMR_DATA = {
  "patient": {
    "name": "Andrew Chen",
    "patientHPI": "I started this new medication for my depression about a week ago, and now I'm feeling really jittery and sweaty with muscle twitches, and I can't seem to sit still.",
    "dob": "08/10/1986",
    "age": "40",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-776119",
    "language": "English",
    "race": "Asian",
    "phone": "(720) 555-8055",
    "email": "andrew.chen@email.com",
    "address": "6329 Magnolia Blvd, Phoenix, AZ 85013",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Mei Chen",
      "phone": "(404) 555-3116",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Agitation, diaphoresis, tremor, clonus \u2014 recently started new antidepressant",
    "diagnosis": "Serotonin Syndrome"
  },
  "problems": [
    {
      "problem": "Serotonin syndrome \u2014 Hunter criteria positive",
      "icd": "T43.221A",
      "onset": "2024",
      "status": "Active",
      "notes": "Clonus + agitation + diaphoresis after tramadol added to sertraline"
    },
    {
      "problem": "Major depressive disorder \u2014 on sertraline",
      "icd": "F32.1",
      "onset": "2022",
      "status": "Active",
      "notes": "Sertraline 150mg daily \u2014 serotonergic baseline"
    },
    {
      "problem": "Chronic back pain \u2014 tramadol newly added",
      "icd": "M54.5",
      "onset": "2024",
      "status": "Active",
      "notes": "Tramadol is a weak serotonin reuptake inhibitor \u2014 sufficient to precipitate SS with sertraline"
    }
  ],
  "medications": [
    {
      "name": "HOLD sertraline AND tramadol \u2014 both serotonergic",
      "sig": "Discontinue both immediately",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "HELD"
    },
    {
      "name": "Cyproheptadine 12mg PO loading then 2mg q2h",
      "sig": "5-HT2A antagonist \u2014 specific antidote for serotonin syndrome",
      "prescriber": "Toxicology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Lorazepam 1-2mg IV PRN agitation/myoclonus",
      "sig": "Benzodiazepine \u2014 reduces agitation and neuromuscular hyperactivity",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "External cooling \u2014 fever management",
      "sig": "Cooling blanket and ice packs \u2014 target temperature <38.5\u00b0C",
      "prescriber": "ED",
      "start": "11/2024",
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
      "bp": "168/102",
      "hr": "128",
      "rr": "24",
      "temp": "39.8\u00b0C",
      "spo2": "96%",
      "pain": "5/10",
      "bmi": "25",
      "weight": "102 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Agitation, diaphoresis, tremor, clonus \u2014 recently started new antidepressant",
      "hpi": "Andrew Chen is a 40-year-old male presenting with agitation, diaphoresis, tremor, clonus \u2014 recently started new antidepressant. Past medical history includes Depression, Started MAOI (phenelzine) 1 week ago while still on sertraline. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Serotonin Syndrome \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Serotonin Syndrome Panel",
      "results": [
        {
          "test": "CK",
          "value": "4,200",
          "unit": "U/L",
          "ref": "22-198",
          "flag": "H"
        },
        {
          "test": "Temperature",
          "value": "39.8",
          "unit": "\u00b0C",
          "ref": "<37.5",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "14.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.3",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Sodium",
          "value": "134",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [],
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Medication error",
      "New psychiatrist started MAOI without washout from SSRI"
    ],
    [
      "Tobacco",
      "Never"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Andrew appears anxious and restless, unable to sit still during the interview with visible tremor and diaphoresis. He is cooperative and forthcoming but seems confused about why he's feeling so unwell, expressing concern that his new medication might be causing problems. His distress level is moderate to high as he's experiencing uncomfortable physical symptoms that are interfering with his daily activities.",
    "interviewQuestions": [
      "Can you describe exactly when these symptoms started?",
      "What medications are you currently taking for your depression?",
      "When did you start the new antidepressant and did you stop the old one?",
      "How would you rate the severity of your symptoms on a scale of 1-10?",
      "Are you experiencing any muscle stiffness or jaw clenching?",
      "Have you had any changes in your mental status or confusion?",
      "Are you having any nausea, vomiting, or diarrhea?",
      "Have you noticed any changes in your reflexes or muscle jerking?",
      "Are you experiencing any headaches or visual changes?",
      "Have you taken any other medications or supplements recently?",
      "Do you have any drug allergies?",
      "Have you ever had a reaction like this before to any medications?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. I'm just really shaky and can't seem to calm down.",
      "onset": "The symptoms started about 3-4 days ago, maybe Tuesday, and they've been getting progressively worse. It started with just feeling jittery but now I'm sweating constantly and can't stop shaking.",
      "character": "It's like I can't control my muscles - they're twitching and jerking on their own. I feel like I'm revved up inside, like I've had way too much caffeine, but much worse.",
      "location": "The muscle twitching is mainly in my arms and legs, and my jaw feels tight. The sweating is all over my body.",
      "severity": "I'd say it's about an 8 out of 10. I can barely function at work and I'm not sleeping because of all the twitching and sweating.",
      "aggravating": "Moving around seems to make the muscle jerking worse, and any loud noises or bright lights make me feel more agitated.",
      "relieving": "Nothing really helps. I tried taking some ibuprofen thinking I was getting sick, but it didn't do anything. Sitting still is impossible.",
      "associated": "I've been having some nausea and my heart feels like it's racing. I also have this pounding headache and feel really hot all the time.",
      "denies": "I haven't had any chest pain, shortness of breath, or fainting. No vomiting, just nausea. I'm not confused, just really agitated.",
      "history": "No, I've never experienced anything like this before. I've been on antidepressants for a few years without any major problems.",
      "medications": "Sertraline; Phenelzine",
      "allergies": "NKDA",
      "family": "No family history of medication reactions or psychiatric conditions that I know of. My parents are generally healthy.",
      "social": "I work as an accountant, pretty sedentary job. I don't smoke and only drink occasionally on weekends. No recreational drugs. This all started after I saw a new psychiatrist who wanted to try a different medication approach."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Mental status examination",
      "Deep tendon reflexes",
      "Ankle clonus testing",
      "Muscle rigidity assessment",
      "Tremor observation",
      "Diaphoresis assessment",
      "Ocular clonus testing",
      "Skin temperature and moisture",
      "Cardiovascular examination"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 168/102, HR 128, Temp 39.8\u00b0C, RR 22, SpO2 96% on room air",
      "Mental status examination": "Alert and oriented but restless, anxious affect, no confusion or altered consciousness",
      "Deep tendon reflexes": "Hyperreflexia 3+ throughout, most pronounced in lower extremities",
      "Ankle clonus testing": "Sustained clonus present bilaterally, more than 5 beats",
      "Muscle rigidity assessment": "Mild muscle rigidity in extremities, lead-pipe quality",
      "Tremor observation": "Fine tremor of hands at rest, worsens with movement",
      "Diaphoresis assessment": "Profuse diaphoresis, clothing visibly damp",
      "Ocular clonus testing": "Intermittent ocular clonus present",
      "Skin temperature and moisture": "Skin hot and diaphoretic to touch",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, elevated blood pressure"
    },
    "ddxTargets": [
      "Serotonin syndrome \u2014 sertraline + tramadol (correct)",
      "NMS \u2014 lead-pipe rigidity vs clonus is the key distinguishing exam finding",
      "Anticholinergic toxicity \u2014 dry/hot/flushed not diaphoretic",
      "Stimulant toxicity \u2014 cocaine/amphetamine",
      "Malignant hyperthermia \u2014 requires inhalation anesthetic",
      "Sepsis \u2014 infection source absent"
    ],
    "biasFlags": {
      "anchoring": "May anchor on psychiatric history and assume this is anxiety or panic disorder, missing the medication interaction",
      "prematureClosure": "Might stop at 'medication side effect' without recognizing the specific dangerous interaction between MAOI and SSRI",
      "availabilityBias": "May think of more common antidepressant side effects rather than the rare but serious serotonin syndrome"
    },
    "coachPrompts": {
      "phase2": "This patient has concerning vital signs and neurologic symptoms after starting a new psychiatric medication. Before you interview him, think about what specific medication interactions might cause this constellation of findings. What questions would help you identify a potentially dangerous drug combination?",
      "phase5": "You've identified hyperreflexia, clonus, hyperthermia, and autonomic instability in a patient on multiple psychiatric medications. This triad of findings should make you think of a specific toxidrome. How do the physical findings help narrow your differential diagnosis, and what's the most likely explanation for this patient's presentation?",
      "finalDebrief": "This case demonstrates classic serotonin syndrome from concurrent MAOI and SSRI use. The key teaching points are recognizing the triad of altered mental status, neuromuscular abnormalities (clonus, hyperreflexia), and autonomic instability. This highlights the critical importance of medication reconciliation and proper washout periods when switching between antidepressant classes. How did your thinking evolve as you gathered more history about the medication timing and physical exam findings?",
      "final": "Diagnosis: serotonin syndrome, sertraline + tramadol. Key pharmacy learning: (1) Hunter criteria (more sensitive than Sternbach): clonus + agitation OR hyperreflexia + agitation OR ocular clonus + diaphoresis/agitation = serotonin syndrome. Clonus (inducible, spontaneous, or ocular) is the KEY distinguishing feature from NMS and anticholinergic toxicity. (2) Tramadol is the most commonly missed serotonergic drug \u2014 it inhibits serotonin reuptake AND is a weak opioid agonist. Commonly prescribed with SSRIs without recognizing the interaction. (3) NMS vs SS key distinction: NMS = slow onset (days), lead-pipe rigidity, bradyreflexia, low serum iron. SS = rapid onset (hours), hyperreflexia, myoclonus, clonus, diaphoresis. (4) Cyproheptadine is the only oral 5-HT2A antagonist available \u2014 specific antidote. Benzodiazepines reduce agitation and neuromuscular hyperactivity (preferred IV). (5) Resolution: most cases resolve within 24h after stopping offending agents. Severe cases require ICU. This case \u2014 moderate severity \u2014 should resolve with cyproheptadine + benzo + supportive care."
    }
  },
  "meta": {
    "diagnosis": "Serotonin Syndrome \u2014 Sertraline + Tramadol, Hunter Criteria Met",
    "caseId": "serotonin-syndrome"
  }
};
