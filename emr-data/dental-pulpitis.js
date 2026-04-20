
window.EMR_DATA = {
  "patient": {
    "name": "Marcus Webb",
    "dob": "09/14/1988",
    "age": 36,
    "sex": "Male",
    "mrn": "RDX-2025-47823",
    "pronouns": "He/Him",
    "insurance": "Delta Dental PPO",
    "pcp": "Dr. Amara Osei, MD",
    "pharmacy": "Walgreens — 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Severe tooth pain that woke me up at 3am, worse with cold",
    "race": "Black or African American",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-3821",
    "email": "mwebb88@gmail.com",
    "emergencyContact": {"name": "Tanya Webb (Wife)", "phone": "(954) 555-4102"}
  },
  "problems": [
    {"problem": "Hypertension", "icd": "I10", "onset": "2019", "status": "Active", "notes": "Well-controlled on amlodipine"},
    {"problem": "Dental anxiety", "icd": "F40.298", "onset": "2015", "status": "Active", "notes": "Avoids dental visits"}
  ],
  "medications": [
    {"name": "Amlodipine 5mg daily", "sig": "Take 1 tablet by mouth daily", "prescriber": "Dr. Osei", "start": "03/2019", "refills": 11, "status": "Active"},
    {"name": "Ibuprofen 400mg PRN", "sig": "Take 1-2 tablets every 6 hours as needed for pain", "prescriber": "Self", "start": "11/2024", "refills": 0, "status": "Active"}
  ],
  "allergies": [
    {"allergen": "Codeine", "type": "Drug", "reaction": "Nausea and vomiting", "severity": "Moderate", "verified": "Yes"}
  ],
  "vitals": [
    {"date": "11/18/2024", "bp": "138/86", "hr": 88, "rr": 16, "temp": "98.6°F", "spo2": "99%", "wt": "192 lbs", "ht": "5'11\"", "bmi": 26.8, "setting": "Dental Office"},
    {"date": "06/12/2023", "bp": "132/82", "hr": 76, "rr": 14, "temp": "98.4°F", "spo2": "99%", "wt": "189 lbs", "ht": "5'11\"", "bmi": 26.4, "setting": "PCP Office"},
    {"date": "01/08/2022", "bp": "130/80", "hr": 72, "rr": 14, "temp": "98.2°F", "spo2": "100%", "wt": "185 lbs", "ht": "5'11\"", "bmi": 25.8, "setting": "PCP Office"}
  ],
  "visits": [
    {"date": "06/10/2022", "type": "Office", "provider": "Dr. Renata Voss, DDS", "summary": "Routine exam and cleaning, 2-year gap since last visit", "assessment": "Early caries #19 mesial — monitor. Plaque buildup noted. Oral hygiene counseling provided.", "plan": "Recall in 6 months. Patient declined fluoride treatment."},
    {"date": "11/15/2024", "type": "Office", "provider": "Dr. Renata Voss, DDS", "summary": "Patient called complaining of sensitivity to cold on lower left. No appointment for 2 years.", "assessment": "Tooth #19: significant recurrent decay around existing amalgam. Cold sensitivity elicited. No spontaneous pain reported at exam.", "plan": "Scheduled for comprehensive exam and periapical X-rays. Recommended ibuprofen PRN."}
  ],
  "labs": [],
  "imaging": [
    {"date": "11/18/2024", "study": "Periapical X-ray — Tooth #19", "indication": "Evaluation of recurrent decay and pain", "findings": "Deep carious lesion extending to within 1-2mm of pulp chamber. Existing amalgam restoration with marginal breakdown. No periapical radiolucency. PDL space within normal limits.", "impression": "Deep caries tooth #19 with possible pulpal involvement. Clinical correlation required."}
  ],
  "immunizations": [
    {"vaccine": "Influenza", "date": "10/2024", "lot": "U4821K", "site": "Left deltoid"},
    {"vaccine": "Tdap", "date": "2018", "lot": "N/A", "site": "Left deltoid"}
  ],
  "familyHistory": [
    {"relation": "Father", "condition": "Hypertension, Type 2 diabetes", "age": "64"},
    {"relation": "Mother", "condition": "Periodontal disease, Multiple extractions", "age": "61"}
  ],
  "socialHistory": {
    "smoking": "Former smoker — quit 2020, 8 pack-year history",
    "alcohol": "Social — 3-4 drinks/week",
    "drugs": "Denies",
    "occupation": "High school physical education teacher",
    "exercise": "Regular — 4x/week, gym and coaching",
    "diet": "High sugar — reports frequent energy drinks and candy",
    "livingArrangement": "Married, lives with wife and two children"
  },
  "meta": {
    "caseId": "dental-pulpitis",
    "diagnosis": "Symptomatic Irreversible Pulpitis, Tooth #19",
    "acuity": 3,
    "presentation": "Severe Night Pain",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus is visibly uncomfortable but trying to appear stoic. He downplays the pain at first — 'it's not that bad' — but when asked directly, admits he was awake from 3-5am. He is nervous about dental procedures due to a bad experience as a teenager. He asks repeatedly whether he'll need a root canal.",
    "interviewQuestions": [
      "Tell me about what's been going on with your tooth.",
      "When did the pain start?",
      "What makes the pain better or worse?",
      "Does cold make the pain worse? What about hot?",
      "How long does the pain last after you drink something cold?",
      "Does the pain wake you from sleep?",
      "Is the pain spontaneous — does it come on without any trigger?",
      "On a scale of 1-10, how would you rate the pain at its worst?",
      "Have you had any swelling around that tooth or your face?",
      "Have you noticed any drainage or a bad taste?",
      "Have you taken anything for the pain? Has it helped?",
      "Do you know if that tooth has had any prior dental work?",
      "When was your last dental visit?",
      "Have you had any trauma to that area?"
    ],
    "patientResponses": {
      "default": "Marcus shifts in the chair. 'I'm not sure... can you look at it and tell me what's going on?'",
      "when pain started": "'About three weeks ago I first noticed it with cold drinks. Last week it started waking me up at night.'",
      "cold makes it worse": "'Oh yeah, definitely. If I drink anything cold it's like a shooting pain. Ice cream is basically impossible.'",
      "how long after cold": "'That's the weird thing — it doesn't go away right away. It keeps hurting for like a minute or two after I pull the cold away.'",
      "hot makes it worse": "'Not as much as cold, but warm food does bother it a little too.'",
      "spontaneous pain": "'Yeah, that's actually what's freaking me out. It just starts hurting on its own sometimes, even when I'm not eating anything.'",
      "wake from sleep": "'Yeah, last night I woke up at 3am. I was lying on my side and the throbbing just started. I had to get up and take ibuprofen.'",
      "swelling": "'No swelling that I can see. My face looks normal.'",
      "drainage": "'No, nothing like that.'",
      "ibuprofen": "'It helps a little but it's not really cutting it anymore. I'm taking it like every 6 hours and it only helps maybe 40-50% of the way.'",
      "prior dental work": "'I think that tooth had a filling put in maybe 10 years ago. It was a silver filling.'",
      "pain rating": "'At its worst, when I wake up at night? Like a 9. When I'm sitting here right now it's maybe a 5.'"
    },
    "examManeuvers": [
      "Extraoral examination — facial symmetry, lymph nodes, TMJ palpation",
      "Intraoral soft tissue exam — buccal mucosa, gingival tissues around #19",
      "Visual inspection of tooth #19 — caries, fracture, existing restorations",
      "Cold test (Endo Ice) — #18, #19, #20, contralateral control teeth",
      "Heat test — if cold test inconclusive",
      "Electric pulp test (EPT) — compare response threshold",
      "Percussion test — vertical and horizontal, compare to adjacent teeth",
      "Palpation — periapical area buccal and lingual",
      "Probing depths — all surfaces tooth #19",
      "Bite stick / tooth slooth — rule out cracked tooth syndrome",
      "Transillumination — check for fracture lines",
      "Periodontal charting — localized vs generalized involvement"
    ],
    "examFindings": {
      "Extraoral": "No facial swelling or asymmetry. Submandibular lymph nodes non-tender, not palpable. TMJ: no clicking or crepitus.",
      "Intraoral soft tissue": "Gingival tissues around #19 pink, slightly erythematous buccally. No sinus tract or fistula. No visible swelling.",
      "Tooth #19 visual": "Large amalgam restoration with visible marginal breakdown and secondary caries mesially and distally. No visible fracture lines.",
      "Cold test": "Tooth #19: INTENSE pain response, onset immediate, lingers 75+ seconds after removal. Teeth #18, #20, and contralateral #30: normal sharp response, resolves within 5-10 seconds.",
      "Percussion": "Tooth #19: mild tenderness to vertical percussion. Horizontal percussion: negative. Adjacent teeth: non-tender.",
      "Palpation": "Periapical palpation tooth #19 buccal: slightly tender. No fluctuance.",
      "Probing": "Tooth #19: probing depths 2-3mm all surfaces, no pocketing. No bleeding on probing.",
      "Radiographic correlation": "Deep recurrent caries approaching pulp chamber. No periapical pathology currently present."
    },
    "ddxTargets": [
      "Symptomatic irreversible pulpitis (correct diagnosis)",
      "Symptomatic reversible pulpitis",
      "Cracked tooth syndrome",
      "Periapical abscess / symptomatic apical periodontitis",
      "Dentinal hypersensitivity",
      "Referred pain from adjacent tooth"
    ],
    "biasFlags": {
      "anchoring": "If student stops after cold sensitivity and diagnoses reversible pulpitis without eliciting the duration of pain response and spontaneous/nocturnal symptoms, flag anchoring on the presenting complaint without complete diagnostic testing.",
      "premature_closure": "If student plans restoration without cold test duration assessment or EPT — the key distinguishing factor between reversible and irreversible pulpitis is lingering pain (>10-15 seconds after stimulus removal) and spontaneous pain. Missing this leads to premature closure on reversible pulpitis and inappropriate treatment.",
      "availability": "If student immediately assumes abscess due to nocturnal pain — absence of periapical radiolucency, swelling, and sinus tract makes abscess unlikely at this stage."
    },
    "coachPrompts": {
      "phase2": "The student has reviewed the chief complaint of severe nocturnal tooth pain with cold sensitivity. Their initial differential may include pulpitis and hypersensitivity. What specific diagnostic tests would definitively distinguish between reversible and irreversible pulpitis — and which historical feature is most diagnostic of irreversible disease?",
      "phase5": "The student has completed history and clinical exam. Their Phase 2 differential was: {{ddx2}}. After exam, their working differential is: {{ddx5}}. The cold test showed lingering pain of 75+ seconds and the patient reports spontaneous nocturnal pain. What does the PDL classification system tell you about treatment options — and why does a normal periapical X-ray NOT rule out pulpal disease?",
      "phase7": "After reviewing all findings: {{ddx5}}. Cold test: lingering >60s, spontaneous nocturnal pain, mild percussion sensitivity but NO periapical radiolucency. What is the pulpal diagnosis and what is the periapical diagnosis? How does the absence of periapical changes affect your treatment urgency?",
      "final": "The diagnosis is symptomatic irreversible pulpitis, tooth #19. Key dentistry learning points: (1) Duration of cold response is the critical diagnostic criterion — >10-15 seconds = irreversible. (2) Spontaneous/nocturnal pain = irreversible. (3) Normal periapical X-ray does not mean the tooth is healthy — pulpal necrosis can exist without periapical changes for weeks to months. (4) Treatment is root canal therapy or extraction — NOT a restoration. Placing a filling on irreversible pulpitis will fail and may accelerate progression to abscess."
    }
  }
};
