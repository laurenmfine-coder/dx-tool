
window.EMR_DATA = {
  "patient": {
    "name": "Dorothy Hansen",
    "patientHPI": "I was in the bathroom this morning and the next thing I knew I was on the floor - I've been feeling really dizzy and lightheaded lately, and this isn't the first time I've passed out like this.",
    "dob": "09/27/1960",
    "age": "66",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-362425",
    "language": "English",
    "race": "American Indian",
    "phone": "(504) 555-5669",
    "email": "dorothy.hansen@email.com",
    "address": "9001 Maple St, San Antonio, TX 78205",
    "insurance": "Medicaid",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Publix Pharmacy \u2014 University Dr",
    "emergencyContact": {
      "name": "Edward Murphy",
      "phone": "(404) 555-8179",
      "relationship": "Parent"
    },
    "chiefComplaint": "Passed out in the bathroom No pain location \u2014 main issue is dizziness and passing out",
    "diagnosis": "Upper GI Hemorrhage with Syncope"
  },
  "problems": [
    {
      "problem": "Upper GI hemorrhage presenting as syncope",
      "icd": "K25.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Melena 2 days, syncope today \u2014 BP 88/54 standing, hemoglobin 7.1. Orthostatic syncope from blood loss."
    },
    {
      "problem": "Hemodynamic instability \u2014 class III hemorrhagic shock",
      "icd": "R57.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Lost estimated 1,500-2,000mL blood. IV resuscitation before endoscopy."
    },
    {
      "problem": "Peptic ulcer disease \u2014 NSAIDs + H. pylori",
      "icd": "K25.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Daily aspirin + ibuprofen, dyspepsia x3 months \u2014 dual etiology for PUD"
    }
  ],
  "medications": [
    {
      "name": "2 large-bore IVs + LR 1L bolus x2",
      "sig": "IV resuscitation \u2014 target HR <100, SBP >90 before endoscopy",
      "prescriber": "ED/GI",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Pantoprazole 80mg IV bolus THEN 8mg/hr",
      "sig": "High-dose PPI infusion \u2014 start before endoscopy",
      "prescriber": "GI",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "pRBC transfusion target Hgb >7-8 g/dL",
      "sig": "Transfuse 2 units pRBC \u2014 restrictive transfusion strategy (TRIGGER-II)",
      "prescriber": "ED/GI",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "reaction": "Nausea",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "06:45",
      "bp": "94/62 (supine) \u2192 72/48 (sitting)",
      "hr": "118 (supine) \u2192 136 (sitting)",
      "rr": "20",
      "temp": "36.4\u00b0C",
      "spo2": "97%",
      "pain": "/10",
      "bmi": "24",
      "weight": "80 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Passed out in the bathroom No pain location \u2014 main issue is dizziness and passing out",
      "hpi": "Dorothy Hansen is a 66-year-old female presenting with passed out in the bathroom no pain location \u2014 main issue is dizziness and passing out. Past medical history includes Osteoarthritis, Chronic back pain, Peptic ulcer disease. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Upper GI Hemorrhage with Syncope \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "GI Bleed Workup",
      "results": [
        {
          "test": "Hemoglobin",
          "value": "7.1",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": "L"
        },
        {
          "test": "BUN",
          "value": "52",
          "unit": "mg/dL",
          "ref": "7-20",
          "flag": "H"
        },
        {
          "test": "BUN:Creatinine",
          "value": "44:1",
          "unit": "",
          "ref": "<20",
          "flag": "H"
        },
        {
          "test": "INR",
          "value": "1.2",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": "H"
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
          "ref": "0.6-1.2",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "EGD (after resuscitation \u2014 within 12 hours)",
      "indication": "UGIB requiring endoscopic evaluation",
      "findings": "Duodenal bulb: 1.2cm ulcer posterior wall with active oozing (Forrest Ib). Clot overlying visible vessel. Endoscopic hemostasis performed: bipolar coagulation + hemoclip. Stomach: diffuse erosions, no active bleeding. No varices.",
      "impression": "Forrest Ib duodenal ulcer \u2014 successfully treated endoscopically. Recommend IV PPI x72h then transition to oral. H. pylori testing performed (CLO test)."
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
    "Father: colon cancer at 68",
    "Mother: stroke"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "20 pack-years, current smoker"
    ],
    [
      "Alcohol",
      "2-3 whiskeys daily for 30+ years"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired factory worker"
    ],
    [
      "Living",
      "Lives alone"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Dorothy appears anxious and concerned about her recurrent episodes of syncope, frequently touching her forehead and speaking with a shaky voice. She is cooperative but somewhat embarrassed about falling in the bathroom and worried about her ability to live safely alone.",
    "interviewQuestions": [
      "Can you describe exactly what happened before you passed out?",
      "Have you had episodes of dizziness or fainting before this?",
      "Do you notice the dizziness when you change positions, like standing up?",
      "Have you had any black, tarry stools or blood in your stool recently?",
      "Any nausea, vomiting, or stomach pain?",
      "Have you noticed any unusual fatigue or weakness lately?",
      "Any chest pain, palpitations, or shortness of breath?",
      "How much ibuprofen do you typically take for your arthritis pain?",
      "Have you had any recent injuries or noticed unusual bruising?",
      "Any changes in your appetite or weight recently?",
      "How has your chronic back pain been lately?",
      "Have you increased any of your medications recently?",
      "Any recent illnesses or infections?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you mean - could you ask that differently?",
      "onset": "The dizziness has been going on for about 2-3 weeks, getting worse. This morning I stood up from the toilet and everything went black.",
      "character": "It's like the room is spinning and I feel very lightheaded, especially when I stand up or move around quickly.",
      "location": "The dizziness is in my head, and I feel weak all over my body.",
      "severity": "The dizziness is about a 7 out of 10 - it's really affecting my daily activities and I'm scared to be alone.",
      "aggravating": "It gets much worse when I stand up quickly or walk around. Even just sitting up in bed makes me dizzy.",
      "relieving": "Lying down helps some, and I've been trying to move more slowly, but it's still there.",
      "associated": "I've been feeling very tired and weak lately, and my stomach has been bothering me more than usual.",
      "denies": "No chest pain, no shortness of breath, no palpitations that I've noticed.",
      "history": "I've had a few dizzy spells over the past month, and I think I may have blacked out once before about a week ago.",
      "medications": "Ibuprofen; Aspirin; Omeprazole",
      "allergies": "Codeine",
      "family": "My father had colon cancer and my mother had a stroke, but I don't think that's related to this.",
      "social": "I'm retired from factory work, live alone, smoke about a pack a day, and have a couple whiskeys each evening - have for years."
    },
    "examManeuvers": [
      "Orthostatic vital signs",
      "Cardiac auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Rectal examination for occult blood",
      "Conjunctival pallor assessment",
      "Capillary refill",
      "Neurological assessment including cranial nerves",
      "Skin examination for pallor or petechiae",
      "Lymph node examination"
    ],
    "examFindings": {
      "Orthostatic vital signs": "Positive orthostatic changes: BP drops from 94/62 supine to 72/48 sitting with HR increase from 118 to 136",
      "Cardiac auscultation": "Tachycardic rate, regular rhythm, no murmurs, rubs, or gallops appreciated",
      "Pulmonary auscultation": "Clear to auscultation bilaterally, no adventitious sounds",
      "Abdominal examination": "Soft, non-distended, mild epigastric tenderness, no masses or organomegaly",
      "Rectal examination for occult blood": "Stool positive for occult blood",
      "Conjunctival pallor assessment": "Marked conjunctival pallor present bilaterally",
      "Capillary refill": "Delayed capillary refill of 3-4 seconds",
      "Neurological assessment including cranial nerves": "Cranial nerves intact, no focal deficits, mild generalized weakness",
      "Skin examination for pallor or petechiae": "Generalized pallor, no petechiae or ecchymoses noted",
      "Lymph node examination": "No lymphadenopathy appreciated"
    },
    "ddxTargets": [
      "UGIB \u2014 duodenal ulcer, Forrest Ib, endoscopic hemostasis (correct)",
      "Variceal bleeding \u2014 no liver disease, no varices on EGD",
      "Diverticular bleed \u2014 lower GI, bright red blood not melena",
      "Aorto-enteric fistula \u2014 history of aortic graft would be present",
      "Hemobilia \u2014 biliary tree bleeding, rare, jaundice",
      "Mallory-Weiss tear \u2014 no forceful vomiting preceding hematemesis"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'dizziness' and pursue vestibular causes without considering systemic causes like bleeding",
      "prematureClosure": "Risk of stopping at orthostatic hypotension without investigating the underlying cause of volume depletion",
      "availabilityBias": "May focus on common causes of syncope in elderly patients while missing GI bleeding from NSAID use"
    },
    "coachPrompts": {
      "phase2": "Looking at this 66-year-old woman with syncope and your differential diagnosis, what key historical points would help you distinguish between these possibilities? Consider her medication list carefully - what complications might arise from her current regimen?",
      "phase5": "Now that you've completed your history and physical exam, let's reconsider your differential diagnosis. What do the orthostatic vital signs and physical findings tell you? How does the combination of her medications, positive occult blood, and pallor change your thinking about the underlying pathophysiology?",
      "finalDebrief": "This case illustrates how medication-induced GI bleeding can present as syncope in elderly patients. The combination of dual antiplatelet therapy (aspirin and ibuprofen) significantly increased her bleeding risk despite PPI use. How did your differential diagnosis evolve as you gathered more clinical data? What red flags should have pointed you toward GI bleeding early in the evaluation?",
      "final": "Diagnosis: duodenal ulcer with UGIB, presenting as syncope. Key learning: (1) GI bleed as syncope: orthostatic syncope is a clue to significant blood loss. Any syncope in a patient with melena/hematemesis = GI bleed + significant volume loss. Urgent resuscitation before endoscopy. (2) Transfusion strategy: TRIGGER-II trial showed restrictive transfusion (transfuse when Hgb <7 g/dL) was superior to liberal (Hgb <9) in non-variceal UGIB \u2014 fewer units, less rebleeding, lower mortality. Exception: known cardiac disease \u2192 Hgb target >8. (3) Glasgow-Blatchford score: used pre-endoscopy to determine inpatient vs outpatient management. Score 0 = can be managed outpatient. Score \u22651 = hospital. This patient: BUN 52 (+6), Hgb 7.1 (+6), SBP 88 (+3) = score 15 = very high risk, inpatient with ICU monitoring. (4) Forrest Ib (active oozing): rebleed risk 22%. Endoscopic treatment required and was performed. Post-procedure: PPI infusion x72h, admit for monitoring, NPO initially. (5) H. pylori in all UGIB: CLO test or urease test performed at endoscopy. If positive \u2192 eradication therapy at discharge (PPI + amoxicillin + clarithromycin x14 days). Eradication reduces rebleed risk from 67% to <5% at 1 year."
    }
  },
  "meta": {
    "diagnosis": "Upper GI Bleed \u2014 Peptic Ulcer Disease with Syncope, Forrest Classification, Resuscitation",
    "caseId": "gi-bleed-syncope"
  }
};
