
window.EMR_DATA = {
  "patient": {
    "name": "Amanda Lewis",
    "patientHPI": "I've been feeling really confused and out of it for the past couple days, and this morning I noticed these little red spots all over my arms and legs. I also have a fever and when I went to the bathroom, my urine looked really dark, almost like tea. I was completely healthy before this started, so I'm really scared about what's happening to me.",
    "dob": "01/09/1993",
    "age": "33",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-574996",
    "language": "English",
    "race": "Black/African American",
    "phone": "(704) 555-6085",
    "email": "amanda.lewis@email.com",
    "address": "2514 Dogwood Ln, Denver, CO 80212",
    "insurance": "Cigna PPO",
    "pcp": "Dr. David Kim, MD",
    "pharmacy": "Rite Aid \u2014 Palm Ave",
    "emergencyContact": {
      "name": "Nathan Lewis",
      "phone": "(414) 555-4262",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Confusion, petechiae, fever, dark urine \u2014 found to have severe thrombocytopenia",
    "diagnosis": "TTP"
  },
  "problems": [
    {
      "problem": "TTP \u2014 ADAMTS13 severely deficient",
      "icd": "M31.19",
      "onset": "2024",
      "status": "Active",
      "notes": "Grace Park, 38F \u2014 thrombocytopenia + microangiopathic hemolytic anemia + neurological symptoms (confusion). PLASMIC score 7."
    },
    {
      "problem": "Microangiopathic hemolytic anemia \u2014 schistocytes on smear",
      "icd": "D59.4",
      "onset": "2024",
      "status": "Active",
      "notes": "Hgb 7.2, LDH 1840, schistocytes >2/hpf. Direct Coombs negative \u2014 confirms microangiopathic, not immune-mediated."
    },
    {
      "problem": "Neurological involvement \u2014 confusion and headache",
      "icd": "G93.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Confusion and headache from cerebral microvascular occlusion. Resolves with successful PEX."
    }
  ],
  "medications": [
    {
      "name": "Plasma exchange (PEX) \u2014 1-1.5 plasma volumes daily",
      "sig": "EMERGENCY \u2014 start within hours of diagnosis. Use FFP as replacement fluid. Continue daily until platelet count >150K x2 days.",
      "prescriber": "Hematology",
      "start": "2024",
      "refills": 0,
      "status": "EMERGENT \u2014 active"
    },
    {
      "name": "Prednisone 1mg/kg PO daily \u2014 immunosuppression",
      "sig": "Adjunct immunosuppression \u2014 TTP is autoimmune (anti-ADAMTS13 antibody). Steroids reduce antibody production.",
      "prescriber": "Hematology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Caplacizumab (Cablivi) 11mg SQ daily \u2014 anti-VWF nanobody",
      "sig": "Blocks VWF-platelet interaction \u2014 rapidly reduces microvascular thrombosis. Start with PEX, continue 30 days after last PEX.",
      "prescriber": "Hematology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 adjunct"
    },
    {
      "name": "NO PLATELET TRANSFUSION \u2014 contraindicated in TTP",
      "sig": "Platelet transfusion in TTP = 'pouring gasoline on fire' \u2014 provides substrate for further microvascular thrombosis. Contraindicated unless life-threatening hemorrhage.",
      "prescriber": "Hematology \u2014 DO NOT GIVE",
      "start": "AVOID",
      "refills": 0,
      "status": "CONTRAINDICATED"
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
      "bp": "128/82",
      "hr": "108",
      "rr": "20",
      "temp": "38.6\u00b0C",
      "spo2": "98%",
      "pain": "4/10",
      "bmi": "21",
      "weight": "93 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Confusion, petechiae, fever, dark urine \u2014 found to have severe thrombocytopenia",
      "hpi": "Amanda Lewis is a 33-year-old female presenting with confusion, petechiae, fever, dark urine \u2014 found to have severe thrombocytopenia. Past medical history includes Previously healthy. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "TTP \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "TTP Workup",
      "results": [
        {
          "test": "Platelets",
          "value": "18",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": "L"
        },
        {
          "test": "Hemoglobin",
          "value": "7.2",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": "L"
        },
        {
          "test": "LDH",
          "value": "1840",
          "unit": "U/L",
          "ref": "135-225",
          "flag": "H"
        },
        {
          "test": "Schistocytes on smear",
          "value": "3+ (>2/hpf)",
          "unit": "",
          "ref": "Absent",
          "flag": "H"
        },
        {
          "test": "Direct Coombs (DAT)",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "1.2",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": ""
        },
        {
          "test": "ADAMTS13 activity (send-out)",
          "value": "<5% activity \u2014 severely deficient",
          "unit": "",
          "ref": ">67%",
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
      "Tobacco",
      "Never"
    ],
    [
      "Recent illness",
      "Had a viral URI 2 weeks ago"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Amanda appears anxious and confused, frequently asking if she's going to be okay. She's cooperative but sometimes has difficulty following complex questions due to her altered mental status. She seems genuinely frightened by the sudden onset of her symptoms.",
    "interviewQuestions": [
      "Can you tell me more about when the confusion started?",
      "How would you describe the confusion - are you having trouble remembering things or thinking clearly?",
      "When did you first notice the red spots on your skin?",
      "Have the spots spread or changed since you first noticed them?",
      "Tell me about the dark urine - when did that start?",
      "Have you had any bleeding from your gums, nose, or anywhere else?",
      "Any abdominal pain or cramping?",
      "Have you had any nausea or vomiting?",
      "Any headaches or vision changes?",
      "Have you taken any new medications or supplements recently?",
      "Any recent travel or tick exposures?",
      "Have you had any weakness or difficulty moving parts of your body?",
      "Any chest pain or shortness of breath?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating right now. Could you ask that in a different way?",
      "onset": "The confusion started about 2 days ago, just feeling really foggy and not myself. The spots appeared yesterday morning when I woke up.",
      "character": "It's like my brain is in a fog - I can't think clearly and I feel really out of it, like I'm not fully present.",
      "location": "The red spots are mainly on my arms and legs, but I've noticed some on my chest too.",
      "severity": "The confusion is maybe a 6 or 7 out of 10 - it's really scary not feeling like myself. I can't work like this.",
      "aggravating": "Nothing specific makes it worse, but trying to concentrate on complex tasks is really difficult.",
      "relieving": "Nothing seems to help the confusion. Rest doesn't make a difference.",
      "associated": "I have a fever, the dark urine, and I've been feeling really weak and tired. My gums bled a little when I brushed my teeth this morning.",
      "denies": "No chest pain, no shortness of breath, no severe headache, no neck stiffness, no rash elsewhere.",
      "history": "Never had anything like this before. I'm usually completely healthy.",
      "medications": "Combined OCP",
      "allergies": "NKDA",
      "family": "No family history of bleeding disorders or similar problems. Everyone's pretty healthy.",
      "social": "I work as a marketing coordinator, don't smoke, drink maybe a glass of wine on weekends. No drugs. I did have a cold about 2 weeks ago but got over it fine."
    },
    "examManeuvers": [
      "Skin examination for petechiae and purpura",
      "Oral examination for mucosal bleeding",
      "Neurologic examination including mental status",
      "Abdominal examination for splenomegaly",
      "Lymph node examination",
      "Fundoscopic examination",
      "Assessment for jaundice",
      "Cardiovascular examination",
      "Temperature assessment",
      "Assessment for neck stiffness"
    ],
    "examFindings": {
      "Skin examination for petechiae and purpura": "Numerous petechiae on bilateral arms, legs, and trunk. Several larger purpuric lesions on lower extremities.",
      "Oral examination for mucosal bleeding": "Mild gingival bleeding, petechiae on buccal mucosa and soft palate.",
      "Neurologic examination including mental status": "Altered mental status with confusion and disorientation. Otherwise focal neurologic deficits absent.",
      "Abdominal examination for splenomegaly": "Soft, non-tender abdomen. No splenomegaly or hepatomegaly appreciated.",
      "Lymph node examination": "No significant lymphadenopathy in cervical, axillary, or inguinal regions.",
      "Fundoscopic examination": "Retinal hemorrhages present bilaterally.",
      "Assessment for jaundice": "Mild scleral icterus present.",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, rubs, or gallops.",
      "Temperature assessment": "Febrile at 38.6\u00b0C",
      "Assessment for neck stiffness": "No nuchal rigidity or meningeal signs."
    },
    "ddxTargets": [
      "TTP \u2014 PLASMIC 7, ADAMTS13 <5%, microangiopathic hemolysis (correct)",
      "HUS (hemolytic uremic syndrome) \u2014 prominent AKI, diarrhea prodrome (STEC), different ADAMTS13",
      "DIC \u2014 PT/PTT prolonged, fibrinogen low; TTP has normal coagulation",
      "Evans syndrome \u2014 immune-mediated: Coombs positive; TTP Coombs negative",
      "HELLP syndrome \u2014 pregnancy-associated; patient not pregnant",
      "Thrombocytopenia from sepsis \u2014 no schistocytes or MAHA pattern"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on recent viral illness and attributing symptoms to post-viral syndrome, missing the urgency of TTP",
      "prematureClosure": "Risk of stopping at ITP diagnosis due to thrombocytopenia and bleeding, without recognizing the pentad of neurologic symptoms, fever, and hemolysis",
      "availabilityBias": "More common conditions like viral illness or ITP may overshadow the less common but life-threatening diagnosis of TTP"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you're considering several causes of thrombocytopenia. What key historical features would help you distinguish between these possibilities? Think about what combinations of symptoms might point toward specific diagnoses.",
      "phase5": "Excellent work gathering the history and physical. You've identified thrombocytopenia with bleeding, altered mental status, fever, and evidence of hemolysis. What syndrome classically presents with this constellation of findings? How does this change your diagnostic priorities?",
      "finalDebrief": "This case illustrates the classic pentad of TTP: thrombocytopenia, microangiopathic hemolytic anemia, neurologic symptoms, fever, and renal involvement. Notice how the initial presentation could easily be mistaken for ITP or a post-viral syndrome. What key features helped distinguish TTP as the most likely diagnosis?",
      "final": "Diagnosis: TTP. Key learning: (1) PLASMIC score (clinical TTP prediction before ADAMTS13 results): Platelet <30K, hemoLysis markers (LDH >2x ULN), no Active cancer, no Stem cell transplant, MCV <90, INR <1.5, Creatinine <2. Score 6-7 = high probability TTP \u2192 start PEX immediately without waiting for ADAMTS13 result. (2) TTP mechanism: ADAMTS13 (a VWF-cleaving protease) is severely deficient due to autoantibody \u2192 ultra-large VWF multimers accumulate \u2192 spontaneous platelet aggregation \u2192 microthrombi \u2192 MAHA + thrombocytopenia + end-organ ischemia. (3) PEX removes the anti-ADAMTS13 antibody and replenishes ADAMTS13. This is why PEX works \u2014 it is both therapeutic (removes antibody) and replacement (restores enzyme). Must use FFP as replacement \u2014 albumin does NOT work. (4) Platelet transfusion in TTP: absolutely contraindicated except for life-threatening hemorrhage \u2014 provides substrate for further microvascular thrombosis, worsening ischemia. Classic teaching: 'fuel to the fire.' (5) Caplacizumab: anti-VWF nanobody that prevents VWF-platelet interaction. Dramatically speeds platelet count recovery and reduces refractory/relapsing TTP. Started alongside PEX."
    }
  },
  "meta": {
    "diagnosis": "Thrombotic Thrombocytopenic Purpura \u2014 ADAMTS13 Deficiency, Plasma Exchange Emergency, PLASMIC Score High",
    "caseId": "ttp"
  }
};
