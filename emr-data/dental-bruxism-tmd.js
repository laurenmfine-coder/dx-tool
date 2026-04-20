
window.EMR_DATA = {
  "patient": {
    "name": "Priya Patel",
    "dob": "05/26/1978",
    "age": 47,
    "sex": "Female",
    "mrn": "RDX-2025-59825",
    "pronouns": "She/Her",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Bruxism",
    "race": "Middle Eastern",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-9558",
    "email": "priyapat@email.com",
    "emergencyContact": {
      "name": "Nicole Okafor (Family)",
      "phone": "(954) 555-1780"
    }
  },
  "problems": [
    {
      "problem": "Temporomandibular disorder \u2014 myofascial type",
      "icd": "M26.62",
      "onset": "2024",
      "status": "Active",
      "notes": "Morning jaw pain, limited opening 32mm (normal >40mm), bilateral temporalis tenderness"
    },
    {
      "problem": "Sleep bruxism \u2014 confirmed by partner report",
      "icd": "G47.63",
      "onset": "2023",
      "status": "Active",
      "notes": "Tooth attrition consistent with bruxism on examination. Partner reports grinding sounds."
    },
    {
      "problem": "Stress \u2014 major precipitant",
      "icd": "F43.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Started new high-pressure job 6 months ago \u2014 bruxism onset correlates exactly"
    }
  ],
  "medications": [
    {
      "name": "Ibuprofen 400mg TID x2 weeks with food",
      "sig": "Short course for acute myofascial pain \u2014 not long-term",
      "prescriber": "Dr. Voss DDS",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 short course"
    },
    {
      "name": "Cyclobenzaprine 5mg QHS PRN \u2014 muscle relaxant",
      "sig": "At bedtime as needed \u2014 reduces nocturnal muscle activity",
      "prescriber": "Dr. Voss DDS",
      "start": "11/2024",
      "refills": 1,
      "status": "Active PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "No known drug allergies",
      "type": "Drug",
      "reaction": "None",
      "severity": "N/A",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/18/2024",
      "bp": "128/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "102 lbs",
      "ht": "5'10\"",
      "bmi": 14.6,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "102 lbs",
      "ht": "5'10\"",
      "bmi": 14.6,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "102 lbs",
      "ht": "5'10\"",
      "bmi": 14.6,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Bruxism",
      "assessment": "Working diagnosis: Bruxism",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "TMJ Panoramic Radiograph + CBCT if refractory",
      "indication": "Limited opening, jaw pain \u2014 evaluate joint",
      "findings": "Panoramic: condylar heads symmetric, no erosion or flattening. Normal joint spaces bilaterally. No articular eminence abnormality. No calcification in joint space.",
      "impression": "Normal bony TMJ anatomy. Myofascial TMD without degenerative joint changes. Reassuring \u2014 conservative management appropriate."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V6373K",
      "site": "Left deltoid"
    }
  ],
  "familyHistory": [
    {
      "relation": "Father",
      "condition": "Hypertension",
      "age": "58"
    },
    {
      "relation": "Mother",
      "condition": "Type 2 diabetes",
      "age": "55"
    }
  ],
  "socialHistory": {
    "smoking": "Former smoker, quit 2020",
    "alcohol": "Social, 2-4 drinks/week",
    "drugs": "Denies",
    "occupation": "Healthcare professional / student",
    "exercise": "Regular, 3x/week",
    "diet": "Balanced",
    "livingArrangement": "Lives with family"
  },
  "meta": {
    "caseId": "dental-bruxism-tmd",
    "diagnosis": "Myofascial TMD with Secondary Sleep Bruxism \u2014 Conservative Management First-Line",
    "acuity": 3,
    "presentation": "Bruxism",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with bruxism. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did the pain start?",
      "What makes it better or worse?",
      "Is it sensitive to cold? Hot? Sweet?",
      "How long does the pain last after a trigger?",
      "Does it wake you from sleep?",
      "Is there any swelling?",
      "Have you had any recent dental work?",
      "When was your last exam and cleaning?",
      "Have you had any trauma to this area?",
      "Do you grind your teeth?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this other presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Extraoral exam \u2014 lymph nodes, TMJ",
      "Intraoral soft tissue exam",
      "Dental charting \u2014 caries, existing restorations",
      "Periodontal probing",
      "Cold/heat testing",
      "Percussion testing",
      "Palpation \u2014 periapical area",
      "Radiographic review"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Myofascial TMD \u2014 bruxism-related (correct)",
      "Articular TMD \u2014 disc displacement (no click/pop elicited, normal panoramic)",
      "Trigeminal neuralgia \u2014 continuous dull ache, not electric shock",
      "Referred pain from dental cause \u2014 no dental pathology identified",
      "Temporal arteritis \u2014 no temporal artery tenderness, wrong age group",
      "Mandibular fracture \u2014 no trauma history, symmetric examination"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: Bruxism. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: myofascial TMD with sleep bruxism. Key dentistry learning: (1) DC/TMD classification: Axis I = physical diagnosis (myofascial pain, disc displacement, degenerative joint disease). Axis II = psychosocial factors. This patient = myofascial type with clear Axis II stress trigger. (2) Conservative management sequence (evidence-based): (a) Patient education \u2014 self-limiting condition, 80% improve without surgery. (b) Soft diet, heat/ice application, jaw rest (avoid hard foods, yawning widely, gum). (c) Physical therapy \u2014 jaw stretching, postural correction. (d) Stabilization splint (flat plane occlusal appliance) for bruxism \u2014 reduces parafunctional loading. (e) Pharmacotherapy adjunct \u2014 NSAIDs short term, cyclobenzaprine PRN. (3) Splint fabrication: maxillary stabilization splint prescribed today \u2014 worn at night. Reduces EMG activity 30-50% in bruxers. Does NOT cure bruxism but reduces damage and pain. (4) Stress management: cognitive behavioral therapy for bruxism has best evidence. Biofeedback. (5) When to escalate: limited opening not improving after 6 weeks conservative treatment \u2192 MRI (disc displacement), arthrocentesis, oral surgery referral. Do NOT rush to surgery \u2014 conservative management success rate is high."
    }
  }
};
