
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
      "problem": "Myofascial temporomandibular disorder \u2014 masticatory muscle pain",
      "icd": "M79.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Bilateral masseter/temporalis tenderness, limited opening 32mm, no joint sounds"
    },
    {
      "problem": "Bruxism \u2014 sleep bruxism, parafunctional habit",
      "icd": "F45.8",
      "onset": "2023",
      "status": "Active",
      "notes": "Partner reports grinding, morning jaw pain, worn occlusal surfaces \u2014 bruxism confirmed"
    },
    {
      "problem": "Anxiety disorder \u2014 bruxism trigger",
      "icd": "F41.1",
      "onset": "2022",
      "status": "Active",
      "notes": "Stressful job, anxiety \u2014 bruxism worsened with increased work demands"
    }
  ],
  "medications": [
    {
      "name": "Cyclobenzaprine 5mg QHS x2 weeks (muscle relaxant)",
      "sig": "Take at bedtime for 2 weeks \u2014 adjunct to occlusal appliance",
      "prescriber": "Dr. Voss DDS",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 short course"
    },
    {
      "name": "Ibuprofen 400mg TID with food x1 week",
      "sig": "Take 3 times daily with food \u2014 anti-inflammatory for myofascial pain",
      "prescriber": "Dr. Voss DDS",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
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
      "study": "Panoramic Radiograph + CBCT TMJ Bilateral",
      "indication": "TMD evaluation \u2014 rule out intracapsular pathology",
      "findings": "Panoramic: Condylar morphology bilaterally symmetric. No significant degenerative change. Articular eminence normal. Joint space preserved bilaterally. No cortical irregularity. CBCT TMJ: Normal condylar position in fossa bilaterally. No erosion, flattening, or osteophytes. No disc displacement visible on CBCT (MRI would be needed for disc assessment).",
      "impression": "Imaging does not suggest intracapsular structural pathology. Clinical diagnosis of myofascial TMD supported. No evidence of condylar degeneration or articular pathology."
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
    "diagnosis": "Myofascial TMD + Bruxism \u2014 Masticatory Muscle Pain, Not Intracapsular Pathology",
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
      "Myofascial TMD + bruxism \u2014 muscle-based pain (correct)",
      "Intracapsular TMD \u2014 disc displacement (no click, no imaging evidence)",
      "TMJ osteoarthritis \u2014 imaging normal",
      "Trigeminal neuralgia \u2014 muscle tenderness, not lancinating nerve pain",
      "Masseteric hypertrophy \u2014 present but secondary to bruxism",
      "Eagle syndrome \u2014 styloid elongation, different presentation"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: Bruxism. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: myofascial TMD with bruxism. Key dentistry learning: (1) TMD classification (DC/TMD): Myofascial pain (muscle-based, most common \u2014 70%) vs. Intracapsular disorders (disc displacement, arthralgia, arthrosis). Myofascial: bilateral tenderness on palpation, no clicking, opening limited by muscle spasm. Intracapsular: clicking/popping (disc displacement with reduction), crepitus (arthrosis), limited unilateral opening. (2) Occlusal appliance: stabilization splint (Michigan/flat plane) is first-line for bruxism. Covers all maxillary teeth. Mechanism: reduces muscle activity during sleep, redistributes forces, protects tooth surfaces. DO NOT make anterior-only or repositioning appliances as first-line (risk of permanent occlusal change). (3) Diagnosis of exclusion: before labeling TMD, rule out: dental pathology (referred pain from pulpitis, cracked tooth), parotid gland pathology, cervical spine, OM sinusitis, trigeminal neuralgia. (4) Imaging: routine X-rays are often normal in myofascial TMD. CBCT shows bony anatomy. MRI is gold standard for disc position (not done routinely \u2014 reserve for treatment-resistant cases). (5) Counseling: behavioral modification is first-line. Stress management, jaw relaxation exercises (resting tongue position on palate), avoid hard foods and jaw loading activities during acute phase."
    }
  }
};
