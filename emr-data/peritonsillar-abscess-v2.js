// Virtual EMR Case: Peritonsillar Abscess
// Variant: peritonsillar-abscess-v2 | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Brianna Thompson",
    "patientHPI": "My throat started hurting four days ago, mainly on the left side, and it's gotten so much worse - yesterday I could barely swallow my food, and now even drinking water is painful. I had a fever of over 102 at home, and people are telling me my voice sounds funny and muffled.",
    "dob": "08/28/1997",
    "age": 27,
    "sex": "Female",
    "mrn": "RDX-2025-34619",
    "pronouns": "She/Her",
    "insurance": "Aetna PPO",
    "pcp": "Dr. Nadine Beaumont, MD",
    "pharmacy": "Publix Pharmacy — 2240 S University Dr, Riverside, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "109 E Roosevelt Rd, Chicago, IL 60607",
    "phone": "(954) 555-4203",
    "email": "b.thompson97@email.com",
    "emergencyContact": {
      "name": "Kevin Thompson (Father)",
      "phone": "(954) 555-4280"
    }
  },
  "problems": [
    {
      "problem": "Recurrent Streptococcal Pharyngitis",
      "icd": "J02.0",
      "onset": "2022",
      "status": "Active",
      "notes": "4 episodes in past 18 months; tonsillectomy discussed but deferred"
    },
    {
      "problem": "Gastroesophageal Reflux Disease",
      "icd": "K21.0",
      "onset": "2023",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Anxiety Disorder, Unspecified",
      "icd": "F41.9",
      "onset": "2021",
      "status": "Active",
      "notes": "Managed without medication; uses CBT techniques"
    }
  ],
  "medications": [
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth once daily before breakfast",
      "prescriber": "Dr. Beaumont",
      "start": "05/2023",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 400mg PRN",
      "sig": "Take 1 tablet by mouth every 6 hours as needed for pain with food",
      "prescriber": "Dr. Beaumont",
      "start": "01/2024",
      "refills": 1,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Erythromycin",
      "type": "Drug",
      "reaction": "Severe nausea, abdominal cramping, vomiting",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/15/2025",
      "bp": "122/76",
      "hr": 96,
      "rr": 16,
      "temp": "101.4°F",
      "spo2": "98%",
      "wt": "152 lbs",
      "ht": "5'6\"",
      "bmi": 24.5,
      "setting": "Urgent Care"
    },
    {
      "date": "09/22/2024",
      "bp": "116/72",
      "hr": 74,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "150 lbs",
      "ht": "5'6\"",
      "bmi": 24.2,
      "setting": "PCP Office"
    },
    {
      "date": "03/10/2024",
      "bp": "118/74",
      "hr": 78,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "148 lbs",
      "ht": "5'6\"",
      "bmi": 23.9,
      "setting": "PCP Office"
    },
    {
      "date": "10/08/2023",
      "bp": "114/70",
      "hr": 72,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "146 lbs",
      "ht": "5'6\"",
      "bmi": 23.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/15/2025",
      "type": "Urgent Care",
      "provider": "Dr. Michael Tran, MD",
      "cc": "Severe sore throat x 4 days, worsening; difficulty swallowing; fever",
      "hpi": "27-year-old female with history of recurrent strep pharyngitis presenting with 4 days of progressive sore throat, predominantly left-sided. Fever at home (102.1°F). Developed difficulty swallowing solids yesterday, now having difficulty with liquids and saliva. Voice sounds muffled ('hot potato voice'). Mild left ear pain (referred otalgia). Took ibuprofen with minimal relief. Completed a course of amoxicillin 10 days ago for her most recent strep episode. Reports the sore throat initially improved then worsened.",
      "exam": "General: Uncomfortable, drooling, leaning forward. HEENT: Trismus present (~2 cm inter-incisor distance). Oropharynx: Left peritonsillar region bulging with uvula deviated to the right. Left tonsillar exudate. Marked left pharyngeal erythema and edema. Neck: Left-sided anterior cervical lymphadenopathy, tender, 2 cm. No submandibular swelling or induration. No crepitus. Lungs: CTAB. CV: Tachycardic, regular.",
      "assessment": "1. Left peritonsillar abscess — clinical presentation classic; trismus, uvular deviation, hot potato voice\n2. Recurrent streptococcal pharyngitis — 5th episode in 18 months; strong tonsillectomy indication",
      "plan": "1. Referred to ED for CT neck, I&D or needle aspiration, IV antibiotics, and ENT consultation\n2. Recommend ENT referral for interval tonsillectomy after resolution\n3. NPO for possible procedural intervention"
    },
    {
      "id": "V002",
      "date": "09/22/2024",
      "type": "Primary Care",
      "provider": "Dr. Nadine Beaumont, MD",
      "cc": "Follow-up: recurrent strep pharyngitis; tonsillectomy discussion",
      "hpi": "27-year-old female seen for discussion of tonsillectomy given 4 episodes of strep pharyngitis in 18 months. She is reluctant due to time off work and anxiety about surgery. Currently asymptomatic. ENT referral placed previously — patient has not followed up.",
      "exam": "General: NAD. HEENT: Tonsils 2+ bilaterally, no exudate, no erythema. No cervical LAD. Oropharynx clear.",
      "assessment": "1. Recurrent strep pharyngitis — meets Paradise criteria for tonsillectomy\n2. Surgical anxiety — patient declined referral follow-up",
      "plan": "1. Discussed risks/benefits of tonsillectomy vs continued medical management\n2. Re-referred to ENT; patient will consider\n3. If another episode → strong recommendation for surgery"
    },
    {
      "id": "V003",
      "date": "03/10/2024",
      "type": "Urgent Care",
      "provider": "Dr. Samantha Lee, MD",
      "cc": "Sore throat and fever x 2 days",
      "hpi": "26-year-old female with 2 days of sore throat, fever (101.2°F), and odynophagia. Rapid strep positive. No dyspnea or drooling. This is her 3rd strep episode in 12 months.",
      "exam": "HEENT: Bilateral tonsillar enlargement 2+ with exudate. Anterior cervical LAD. No trismus. Uvula midline.",
      "assessment": "1. Acute streptococcal pharyngitis — 3rd episode in 12 months",
      "plan": "1. Amoxicillin 500mg TID x 10 days\n2. Recommended ENT referral for tonsillectomy evaluation\n3. RTC if worsening or not improving in 48 hours"
    }
  ],
  "labs": [
    {
      "date": "01/15/2025",
      "time": "11:00",
      "orderedBy": "Dr. Michael Tran, MD",
      "collected": "01/15/2025 10:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-034619",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "16.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Neutrophils",
              "value": "82",
              "unit": "%",
              "range": "40-70",
              "flag": "H"
            },
            {
              "test": "Bands",
              "value": "6",
              "unit": "%",
              "range": "0-5",
              "flag": "H"
            },
            {
              "test": "Lymphocytes",
              "value": "10",
              "unit": "%",
              "range": "20-40",
              "flag": "L"
            },
            {
              "test": "Hemoglobin",
              "value": "13.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "40.2",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "312",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "18",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.7",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.0",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "101",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "24",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "09/22/2024",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2024-34619",
      "status": "FINAL",
      "orderedBy": "Dr. Nadine Beaumont, MD",
      "readBy": "Dr. Kenneth Patel, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "27F with recurrent pharyngitis. Pre-surgical evaluation.",
      "technique": "PA and lateral views, upright.",
      "findings": "Heart: Normal size and configuration.\\n\\nLungs: Clear bilaterally. No consolidation, effusion, or pneumothorax.\\n\\nMediastinum: Normal contours.\\n\\nBones: No acute osseous abnormality.",
      "impression": "1. Normal chest radiograph.",
      "dictated": "09/22/2024 10:15",
      "verified": "09/22/2024 12:40"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/12/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-298",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2024-25)",
      "date": "10/12/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-710",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — Series complete",
      "date": "2015",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Asthma, GERD, alive at 52",
    "Father: Hypertension, alive at 55",
    "Brother: Recurrent tonsillitis (tonsillectomy age 12), age 24",
    "Maternal grandmother: T2DM, alive at 78"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Elementary school teacher"
    ],
    [
      "Marital",
      "Single, in relationship"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social, 1-2 drinks/week"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Runs 3x/week; yoga 2x/week"
    ],
    [
      "Housing",
      "Lives alone in apartment"
    ],
    [
      "Safety",
      "Denies IPV; wears seatbelt"
    ],
    [
      "Advance Directive",
      "None"
    ]
  ],
  "meta": {
    "caseId": "peritonsillar-abscess-v2",
    "diagnosis": "Peritonsillar Abscess",
    "acuity": 2,
    "presentation": "ENT / Airway Emergency",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Brianna appears anxious and uncomfortable, frequently touching her neck and speaking in a muffled, 'hot potato' voice. She is cooperative but clearly in significant distress, wincing with each swallow and appearing fatigued from the illness. She readily provides information but seems worried about the severity of her symptoms.",
    "interviewQuestions": [
      "Can you describe exactly when and how your throat pain started?",
      "Is the pain worse on one side compared to the other?",
      "How would you rate your pain on a scale of 1-10?",
      "Have you noticed any difficulty swallowing or changes in your voice?",
      "Have you had any fevers, and what was the highest temperature?",
      "Have you noticed any swelling in your neck or jaw area?",
      "Do you have any difficulty opening your mouth fully?",
      "Have you had similar throat infections before?",
      "What medications are you currently taking?",
      "Do you have any known allergies to medications?",
      "Have you tried anything to relieve the pain?",
      "Any nausea, vomiting, or difficulty breathing?",
      "Does anyone in your family have a history of throat problems?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? My head feels a bit foggy from the fever and pain.",
      "onset": "It started four days ago as just a mild sore throat, but by day two it was clearly worse on my left side, and yesterday it became excruciating.",
      "character": "It's a deep, throbbing pain that feels like there's something swollen and pressing inside my throat, especially when I try to swallow.",
      "location": "Definitely worse on the left side of my throat, and the pain shoots up toward my left ear whenever I swallow.",
      "severity": "Right now it's a 9 out of 10 - I can barely swallow water, and even my own saliva is painful. I haven't been able to eat solid food since yesterday.",
      "aggravating": "Swallowing anything makes it much worse, even just saliva. Opening my mouth wide is really difficult and painful too.",
      "relieving": "I've been taking ibuprofen which helps a tiny bit, but nothing really makes it better. Ice chips seemed to help at first but now even cold hurts.",
      "associated": "I've had a fever up to 102.5, chills, and people keep telling me my voice sounds muffled and strange. I'm drooling more because swallowing hurts so much.",
      "denies": "No trouble breathing, no rash, no stomach pain. I'm not having chest pain or difficulty with anything other than my throat.",
      "history": "I've had strep throat several times over the past few years - probably four or five times. I usually get antibiotics and it clears up, but this feels much worse than those times.",
      "medications": "Omeprazole 20mg daily; Ibuprofen 400mg PRN",
      "allergies": "Erythromycin",
      "family": "My mom has GERD and asthma, my dad has high blood pressure, and my younger brother used to get tonsillitis all the time until he had his tonsils out when he was 12.",
      "social": "I'm an elementary school teacher, so I'm exposed to lots of germs. I'm single but in a relationship, I don't smoke, and I only drink socially maybe once or twice a week. No drugs."
    },
    "examManeuvers": [
      "Oral cavity and oropharyngeal inspection",
      "Palpation of cervical lymph nodes",
      "Assessment of trismus (mouth opening)",
      "Inspection of tonsillar pillars and soft palate",
      "Palpation of submandibular and parotid glands",
      "Assessment of voice quality and speech",
      "Examination of external neck for swelling",
      "Vital signs assessment",
      "General appearance and toxicity assessment",
      "Assessment of drooling and ability to handle secretions"
    ],
    "examFindings": {
      "Oral cavity and oropharyngeal inspection": "Left tonsillar pillar significantly swollen and erythematous with visible bulging mass, uvula deviated to the right, difficulty visualizing left tonsil",
      "Palpation of cervical lymph nodes": "Tender, enlarged lymph nodes palpable on left anterior cervical chain, approximately 2-3cm, mobile",
      "Assessment of trismus (mouth opening)": "Limited mouth opening to approximately 2.5cm due to pain and muscle spasm, patient unable to open fully",
      "Inspection of tonsillar pillars and soft palate": "Marked asymmetry with left-sided bulging of anterior tonsillar pillar, soft palate edematous on left, possible fluctuance",
      "Palpation of submandibular and parotid glands": "Left submandibular gland mildly tender and enlarged, parotid glands normal bilaterally",
      "Assessment of voice quality and speech": "Muffled 'hot potato' voice, difficulty articulating clearly, patient sounds like speaking with mouth full",
      "Examination of external neck for swelling": "No obvious external neck swelling or masses visible, no erythema of overlying skin",
      "Vital signs assessment": "Temperature 101.4°F, BP 122/76, HR 96, SpO2 98% on room air, appears mildly dehydrated",
      "General appearance and toxicity assessment": "Ill-appearing but not toxic, sitting upright, occasionally spitting saliva into tissue, looks uncomfortable",
      "Assessment of drooling and ability to handle secretions": "Mild drooling noted, patient frequently dabbing mouth with tissue, able to handle secretions but with difficulty"
    },
    "ddxTargets": [
      "Peritonsillar Abscess (correct diagnosis)",
      "Severe Streptococcal Pharyngitis",
      "Parapharyngeal Abscess",
      "Epiglottitis",
      "Ludwig's Angina",
      "Infectious Mononucleosis",
      "Retropharyngeal Abscess"
    ],
    "biasFlags": {
      "anchoring": "Don't anchor on 'just another strep throat' given the patient's history of recurrent streptococcal pharyngitis - the unilateral presentation and severity suggest a complication",
      "prematureClosure": "Avoid stopping at strep pharyngitis without considering why this episode is more severe with unilateral findings, trismus, and voice changes",
      "availabilityBias": "Elementary school teachers commonly get viral URIs and strep, but the constellation of unilateral pain, trismus, and muffled voice should raise suspicion for abscess"
    },
    "coachPrompts": {
      "phase2": "Good differential list. I notice you included both simple pharyngitis and more serious deep space infections. As you interview this patient, pay particular attention to the timeline, laterality, and any signs that might suggest this is more than just pharyngitis. What specific questions will help you differentiate between these diagnoses?",
      "phase5": "Excellent history and physical. You've identified some key findings - the unilateral presentation, trismus, and voice changes are particularly significant. How do these findings help narrow your differential? What's the most likely diagnosis given the constellation of unilateral throat pain, limited mouth opening, and muffled voice in a patient with recurrent strep?",
      "finalDebrief": "This case illustrates how a common presentation can evolve into a serious complication. Your initial differential appropriately included both simple pharyngitis and more complex infections. The key discriminating features here were the unilateral nature, trismus, voice changes, and the severity despite the patient's history of recurrent strep. This demonstrates why we must always consider complications when familiar presentations seem more severe than usual."
    }
  }
};
