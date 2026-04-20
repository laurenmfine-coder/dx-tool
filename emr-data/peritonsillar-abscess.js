
window.EMR_DATA = {
  "patient": {
    "name": "Jameson Ortiz",
    "patientHPI": "This is hands down the worst sore throat I've ever had in my life - it's all concentrated on the left side and the pain is absolutely unbearable. I've had throat problems before, but nothing like this intense burning and stabbing pain that makes it hard to even swallow my own spit.",
    "dob": "02/09/1976",
    "age": "50",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-505748",
    "language": "English",
    "race": "American Indian",
    "phone": "(713) 555-4350",
    "email": "jameson.ortiz@email.com",
    "address": "9145 Peachtree Rd, Cleveland, OH 44109",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Karen Liu, DO",
    "pharmacy": "Rite Aid \u2014 Sunrise Blvd",
    "emergencyContact": {
      "name": "Charles Roberts",
      "phone": "(505) 555-4921",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Worst sore throat of my life \u2014 all on the left side Left-sided throat/pharyngeal pain \u2014 unilateral",
    "diagnosis": "Peritonsillar Abscess (Quinsy)"
  },
  "problems": [
    {
      "problem": "Peritonsillar abscess \u2014 right-sided, uvular deviation",
      "icd": "J36",
      "onset": "2024",
      "status": "Active",
      "notes": "Tyler Brooks, 24M \u2014 5 days progressive sore throat, trismus, muffled 'hot potato' voice. Right peritonsillar bulge, uvular deviation to left."
    },
    {
      "problem": "Trismus \u2014 inability to open mouth >2cm",
      "icd": "M26.65",
      "onset": "2024",
      "status": "Active",
      "notes": "Trismus from medial pterygoid spasm from peritonsillar inflammation \u2014 limits exam and needle aspiration."
    },
    {
      "problem": "Airway \u2014 risk of progression to parapharyngeal space or Ludwig's angina",
      "icd": "J36",
      "onset": "2024",
      "status": "Active",
      "notes": "Most PTAs stay localized. Extension to parapharyngeal space or deep neck is uncommon but catastrophic."
    }
  ],
  "medications": [
    {
      "name": "Needle aspiration \u2014 primary treatment",
      "sig": "Medial to anterior tonsillar pillar, lateral to palate. Aspirate pus. 85-95% success rate \u2014 avoids I&D in compliant patients.",
      "prescriber": "ENT/ED",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 procedure"
    },
    {
      "name": "Penicillin VK 500mg PO QID x10 days \u2014 post-aspiration",
      "sig": "First-line antibiotic for PTA \u2014 Streptococcus pyogenes, oral anaerobes. Amoxicillin-clavulanate for broader coverage.",
      "prescriber": "ENT/ED",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Dexamethasone 10mg IV/IM \u2014 single dose",
      "sig": "Single steroid dose reduces pain, trismus, and swallowing dysfunction. Significantly improves patient-reported outcomes.",
      "prescriber": "ENT/ED",
      "start": "2024",
      "refills": 0,
      "status": "Given \u2014 one dose"
    },
    {
      "name": "Magic mouthwash + analgesics \u2014 pain control",
      "sig": "Viscous lidocaine + diphenhydramine + antacid: swish and spit. Systemic analgesics (ibuprofen + acetaminophen) scheduled.",
      "prescriber": "ED",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Clindamycin",
      "reaction": "C. difficile colitis",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "07:26",
      "bp": "138/82",
      "hr": "102",
      "rr": "18",
      "temp": "38.8\u00b0C",
      "spo2": "97%",
      "pain": "9/10",
      "bmi": "29",
      "weight": "88 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Worst sore throat of my life \u2014 all on the left side Left-sided throat/pharyngeal pain \u2014 unilateral",
      "hpi": "Jameson Ortiz is a 50-year-old male presenting with worst sore throat of my life \u2014 all on the left side left-sided throat/pharyngeal pain \u2014 unilateral. Past medical history includes Recurrent tonsillitis, Tobacco use. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Peritonsillar Abscess (Quinsy) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "PTA Workup",
      "results": [
        {
          "test": "WBC",
          "value": "16.8",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Monospot test",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Throat culture",
          "value": "Group A Streptococcus positive",
          "unit": "",
          "ref": "No pathogens",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "88",
          "unit": "mg/L",
          "ref": "<10",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "Soft Tissue Neck Ultrasound (intraoral)",
      "indication": "PTA vs peritonsillar cellulitis \u2014 confirm abscess before aspiration",
      "findings": "4.2cm peritonsillar fluid collection right side \u2014 abscess confirmed. No extension into parapharyngeal space.",
      "impression": "Peritonsillar abscess \u2014 localized. Needle aspiration appropriate."
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 10 pack-years"
    ],
    [
      "Alcohol",
      "Social, 3-4 drinks weekends"
    ],
    [
      "Drugs",
      "Marijuana occasionally"
    ],
    [
      "Occupation",
      "Bartender"
    ],
    [
      "Living",
      "Lives with roommate"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Mr. Ortiz appears visibly uncomfortable and anxious, frequently touching his neck and speaking in a hoarse, pained voice. He is cooperative but clearly distressed, describing his symptoms with urgency and concern. He seems genuinely frightened by the severity of his current throat pain compared to his previous episodes.",
    "interviewQuestions": [
      "When did this throat pain start and how quickly did it develop?",
      "Can you describe the quality of the pain - is it sharp, burning, throbbing?",
      "Is the pain only on the left side or does it radiate anywhere?",
      "On a scale of 1-10, how severe is your pain right now?",
      "What makes the pain worse - swallowing, talking, moving your head?",
      "Have you tried anything that helps relieve the pain?",
      "Are you having any difficulty swallowing or opening your mouth fully?",
      "Do you have any ear pain, particularly on the left side?",
      "Have you noticed any voice changes or difficulty speaking?",
      "Any fevers, chills, or feeling generally unwell?",
      "How does this compare to your previous throat infections?",
      "Have you had any recent dental work or mouth injuries?",
      "Are you having any trouble breathing or shortness of breath?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? This pain is really distracting and I'm having trouble focusing on anything else right now.",
      "onset": "It started about 2 days ago, but it got dramatically worse overnight. Yesterday morning it was just a little sore, but by evening I could barely swallow, and today it's absolutely excruciating.",
      "character": "It's like a deep, throbbing pain with sharp stabbing when I swallow. There's also this constant burning sensation that never lets up, even when I'm not swallowing.",
      "location": "It's completely on the left side of my throat - I can pinpoint exactly where it hurts. The pain shoots up toward my left ear whenever I try to swallow.",
      "severity": "This is easily a 9 out of 10. I've called in sick to work because I literally cannot function. I can barely swallow my own saliva without wincing.",
      "aggravating": "Swallowing anything - even water - makes it dramatically worse. Talking hurts, and I noticed that opening my mouth wide or turning my head to the right makes the pain shoot up.",
      "relieving": "Honestly, nothing really helps. I've been taking ibuprofen and it barely takes the edge off. Ice chips help a tiny bit, but even getting them down hurts.",
      "associated": "I've had a fever and chills since yesterday, and I feel generally awful - like I'm getting sicker by the hour. My voice sounds different, kind of muffled, and my left ear is aching.",
      "denies": "No cough, no runny nose, no chest pain. I'm not having trouble breathing, but I am worried about how much worse this is getting so quickly.",
      "history": "I've had throat infections before - that's why I have the amoxicillin - but this is completely different. My usual sore throats are on both sides and never this severe or one-sided.",
      "medications": "Amoxicillin; Ibuprofen",
      "allergies": "Clindamycin",
      "family": "Nobody in my family has had throat problems like this. My dad had some heart issues, but nothing related to infections or throat problems.",
      "social": "I'm a bartender so I'm around people and smoke a lot - about half a pack a day for 20 years. I drink socially on weekends and smoke marijuana occasionally. I live with a roommate who hasn't been sick."
    },
    "examManeuvers": [
      "Oral cavity and oropharyngeal examination",
      "Neck palpation for lymphadenopathy",
      "Assessment of trismus (mouth opening)",
      "Palpation of tonsillar region and soft palate",
      "Otoscopic examination",
      "Assessment of voice quality and speech",
      "Evaluation of uvular deviation",
      "Neck range of motion assessment",
      "Vital signs assessment",
      "General appearance and toxicity assessment"
    ],
    "examFindings": {
      "Oral cavity and oropharyngeal examination": "Left tonsillar region shows marked erythema and swelling with purulent exudate. Left tonsil appears pushed medially with significant peritonsillar fullness and inflammation.",
      "Neck palpation for lymphadenopathy": "Tender, enlarged left anterior cervical and submandibular lymph nodes, approximately 2-3 cm, mobile and firm.",
      "Assessment of trismus (mouth opening)": "Limited mouth opening to approximately 2.5 cm due to pain and muscle spasm, patient unable to open fully.",
      "Palpation of tonsillar region and soft palate": "Marked tenderness and fluctuance in left peritonsillar area, soft palate swollen and erythematous on left side.",
      "Otoscopic examination": "Left tympanic membrane appears normal but patient reports significant referred otalgia on left side.",
      "Assessment of voice quality and speech": "Muffled voice quality with 'hot potato' voice, patient speaks with obvious discomfort and altered articulation.",
      "Evaluation of uvular deviation": "Uvula deviated to the right away from the affected left side due to peritonsillar swelling.",
      "Neck range of motion assessment": "Limited neck rotation to the right due to pain, patient holds head tilted slightly to the left.",
      "Vital signs assessment": "Elevated temperature 38.8\u00b0C, mild tachycardia HR 102, elevated BP likely due to pain and stress.",
      "General appearance and toxicity assessment": "Patient appears ill and uncomfortable but not toxic, sitting upright and leaning forward slightly, frequent swallowing attempts."
    },
    "ddxTargets": [
      "Peritonsillar abscess \u2014 uvular deviation, hot potato voice, unilateral bulge (correct)",
      "Peritonsillar cellulitis \u2014 no fluctuance, no definitive abscess on ultrasound; treat with antibiotics alone",
      "Tonsillar malignancy \u2014 asymmetric tonsil in adult without acute infection features; biopsy if persistent",
      "Epiglottitis \u2014 supraglottic, different symptoms, no peritonsillar bulge",
      "Parapharyngeal abscess \u2014 deeper, no uvular deviation, CT/MRI distinguishes",
      "Ludwig's angina \u2014 bilateral submandibular, trismus, different anatomy"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's history of recurrent tonsillitis and assuming this is just another episode of bacterial tonsillitis, missing the progression to abscess formation.",
      "prematureClosure": "May stop investigation after noting severe unilateral throat pain and fever, prescribing antibiotics without recognizing the need for urgent ENT consultation or drainage.",
      "availabilityBias": "Common experience with routine strep throat may lead to underestimating the severity and missing the peritonsillar abscess, which requires immediate intervention."
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you're considering both infectious and structural causes. Given this patient's presentation of severe unilateral throat pain, what specific anatomical complications of tonsillitis should you be most concerned about? What questions will help you differentiate between simple tonsillitis and more serious deep space infections?",
      "phase5": "Excellent work on the history and physical. You've identified several key findings - the unilateral presentation, uvular deviation, trismus, and that characteristic 'hot potato' voice. How do these findings fit together anatomically? What does the combination of these signs suggest about the progression from simple tonsillitis to a more serious complication?",
      "finalDebrief": "This case illustrates how peritonsillar abscess can develop from recurrent tonsillitis. The key distinguishing features you identified - unilateral severe pain, trismus, uvular deviation, muffled voice, and fluctuance - form the classic presentation. Notice how the patient's history of recurrent tonsillitis could have led to anchoring bias. What made you consider abscess over simple tonsillitis, and why is early recognition and ENT consultation crucial here?",
      "final": "Diagnosis: peritonsillar abscess. Key learning: (1) Classic PTA presentation: unilateral peritonsillar bulge + uvular deviation to contralateral side + 'hot potato' muffled voice + trismus + severe odynophagia + drooling. The combination of uvular deviation + hot potato voice is highly specific. (2) PTA vs cellulitis: peritonsillar cellulitis = erythema, swelling, no discrete fluid collection. PTA = fluctuant collection (clinical or ultrasound-confirmed). Distinction matters because cellulitis is treated with antibiotics alone; PTA requires drainage. Intraoral ultrasound is the most reliable bedside tool to differentiate. (3) Needle aspiration: the preferred treatment \u2014 85-95% success rate, avoids formal I&D. Landmark: medial to the anterior tonsillar pillar, never lateral (internal carotid artery is lateral). Aspirate pus, send for culture. If needle aspiration fails x2, proceed to formal I&D or quinsy tonsillectomy. (4) Dexamethasone single dose: randomized trials show single IM/IV dexamethasone dose significantly reduces pain, trismus, and swallowing dysfunction. Standard of care adjunct to drainage and antibiotics. (5) Recurrence: PTA recurs in ~10-15%. Tonsillectomy is recommended after second episode (quinsy tonsillectomy immediately vs interval tonsillectomy 4-6 weeks later). First episode in adults: drain and antibiotics, discuss tonsillectomy if symptomatic tonsillitis history."
    }
  },
  "meta": {
    "diagnosis": "Peritonsillar Abscess \u2014 Needle Aspiration, Penicillin Treatment, Hot Potato Voice Pathognomonic",
    "caseId": "peritonsillar-abscess"
  }
};
