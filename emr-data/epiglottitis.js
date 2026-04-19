/* emr-data/epiglottitis.js — EMR case data for Acute Epiglottitis */
window.EMR_DATA = {
  "patient": {
    "name": "Mason Williams",
    "patientHPI": "My little boy can't breathe right and keeps making scary sounds when he tries to swallow. He's been drooling a lot because it hurts too much to swallow, and he has a fever that started this morning. He won't lie down and just wants to sit up leaning forward.",
    "dob": "06/15/2022",
    "age": "4",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-339415",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(720) 555-8749",
    "email": "mason.williams@email.com",
    "address": "6425 Willow Way, Denver, CO 80201",
    "insurance": "Cigna",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "Walmart Pharmacy — Broward Blvd",
    "emergencyContact": {
      "name": "Kenneth Parker",
      "phone": "(713) 555-7246",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "My child can't breathe right Throat/neck",
    "diagnosis": "Acute Epiglottitis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Up to date on vaccinations",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "No prior hospitalizations",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "No immune deficiency",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Acetaminophen",
      "dose": "Given at home for fever",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
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
      "time": "06:08",
      "bp": "90/60",
      "hr": "156",
      "rr": "32",
      "temp": "40.1°C",
      "spo2": "92%",
      "pain": "/10",
      "bmi": "32",
      "weight": "58 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "My child can't breathe right Throat/neck",
      "hpi": "Mason Williams is a 4-year-old male presenting with my child can't breathe right throat/neck. Past medical history includes Up to date on vaccinations, No prior hospitalizations, No immune deficiency. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Epiglottitis — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-952482",
      "collected": "03/03/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "22.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "12.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "34",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "314",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "141",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.9",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "100",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "28",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "9",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.9",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "CRP",
              "value": "14.8",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Blood Cultures",
              "value": "Pending",
              "unit": "",
              "range": "No growth",
              "flag": ""
            },
            {
              "test": "Lactate",
              "value": "2.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "Cervical Spine X-ray",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-964734",
      "clinical": "My child can't breathe right Throat/neck",
      "technique": "Standard protocol",
      "findings": "THUMBPRINT SIGN — enlarged, rounded epiglottis visible on lateral soft tissue neck view. Thickened aryepiglottic folds. Narrowed vallecular space. Subglottic region normal (not croup).",
      "impression": "EPIGLOTTITIS — thumbprint sign confirms swollen epiglottis. Prepare for emergent airway management.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-595216",
      "clinical": "My child can't breathe right Throat/neck",
      "technique": "Standard protocol",
      "findings": "Clear lung fields. No focal consolidation. No foreign body.",
      "impression": "No pulmonary complication",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-508373",
      "clinical": "My child can't breathe right Throat/neck",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 156 bpm. Normal pediatric morphology. No arrhythmia",
      "impression": "Sinus tachycardia — age-appropriate for fever and distress",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
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
    "No immune deficiency",
    "No recurrent infections"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "N/A — no household smokers"
    ],
    [
      "Alcohol",
      "N/A"
    ],
    [
      "Drugs",
      "N/A"
    ],
    [
      "Occupation",
      "N/A — preschool student"
    ],
    [
      "Living",
      "Lives with both parents and older sibling. Attends daycare."
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Mason appears acutely ill and distressed, sitting upright in a tripod position and refusing to lie down. He is drooling continuously, makes minimal vocalizations due to pain, and demonstrates clear respiratory distress with inspiratory stridor. His parents are extremely anxious and answer most questions as Mason is too uncomfortable to speak much.",
    "interviewQuestions": [
      "When did the breathing problems and throat pain start?",
      "Has Mason had any recent cold symptoms or runny nose?",
      "Is he making any unusual sounds when breathing?",
      "Can he swallow liquids or is he refusing all food and drink?",
      "Has he been drooling more than usual?",
      "What position does he prefer to sit or lie in?",
      "Has he had a fever and when did it start?",
      "Has he been exposed to anyone sick recently?",
      "Is his voice different or muffled compared to normal?",
      "Has he had any rash or other symptoms?",
      "Is he up to date on all his vaccinations including Hib?",
      "Has he ever had breathing problems like this before?",
      "Are there any smokers in the household?"
    ],
    "patientResponses": {
      "default": "Mason just whimpers and his mom says 'He's too sick to answer much right now'",
      "onset": "It started suddenly this morning around 6 AM. He woke up crying and couldn't breathe right. The fever came on fast too.",
      "character": "He's making this scary whistling sound when he breathes in, and his throat hurts so bad he won't even try to swallow his own spit",
      "location": "The pain is in his throat and neck area. He keeps pointing to his throat and won't let us touch his neck",
      "severity": "This is a 10 out of 10 - he's never been this sick. He can barely breathe and is terrified",
      "aggravating": "Lying down makes the breathing much worse. Even trying to swallow his own saliva makes him cry",
      "relieving": "Only sitting up leaning forward helps a little bit. The acetaminophen isn't helping much with the fever or pain",
      "associated": "High fever that started this morning, lots of drooling because he can't swallow, and he sounds different when he tries to talk - kind of muffled",
      "denies": "No runny nose, no cough, no rash, no vomiting. This isn't like a regular cold at all",
      "history": "Never anything like this before. He's usually a healthy kid with just normal childhood colds",
      "medications": "Acetaminophen",
      "allergies": "NKDA",
      "family": "No family history of immune problems or recurrent infections. Everyone else in the family is healthy",
      "social": "He goes to daycare and there have been some kids out sick lately. No smokers in the house. Lives with mom, dad, and his older sister"
    },
    "examManeuvers": [
      "General appearance and positioning",
      "Respiratory effort and pattern assessment",
      "Auscultation for stridor",
      "Voice and speech quality assessment",
      "Oral cavity inspection (if tolerated)",
      "Neck palpation for lymphadenopathy",
      "Lung auscultation",
      "Heart rate and rhythm assessment",
      "Skin assessment for cyanosis",
      "Drooling and swallowing assessment"
    ],
    "examFindings": {
      "General appearance and positioning": "Acutely ill-appearing child in tripod position, anxious, refusing to lie supine",
      "Respiratory effort and pattern assessment": "Tachypneic with visible supraclavicular and intercostal retractions, use of accessory muscles",
      "Auscultation for stridor": "Loud inspiratory stridor audible without stethoscope, biphasic stridor with stethoscope",
      "Voice and speech quality assessment": "Muffled voice quality, reluctant to speak, no hoarseness",
      "Oral cavity inspection (if tolerated)": "Limited view shows erythematous posterior pharynx, patient very resistant to examination",
      "Neck palpation for lymphadenopathy": "Tender anterior cervical lymphadenopathy, patient resistant to neck manipulation",
      "Lung auscultation": "Transmitted upper airway sounds, otherwise clear lung fields bilaterally",
      "Heart rate and rhythm assessment": "Tachycardic regular rhythm consistent with fever and respiratory distress",
      "Skin assessment for cyanosis": "Mild circumoral pallor, no frank cyanosis, warm and flushed",
      "Drooling and swallowing assessment": "Continuous drooling, refuses to attempt swallowing, holds neck in extended position"
    },
    "ddxTargets": [
      "Acute epiglottitis (correct diagnosis)",
      "Severe croup (laryngotracheobronchitis)",
      "Bacterial tracheitis",
      "Foreign body aspiration",
      "Retropharyngeal abscess",
      "Severe viral pharyngitis",
      "Peritonsillar abscess"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'breathing problems' and immediately thinking croup, missing the key differentiating features of drooling, tripod positioning, and refusal to lie down that suggest epiglottitis",
      "prematureClosure": "May stop at croup diagnosis after hearing stridor without fully exploring the severity of dysphagia, positioning preferences, and rapid onset that distinguish epiglottitis",
      "availabilityBias": "Croup is much more commonly seen than epiglottitis in the post-Hib vaccine era, leading to availability bias toward the more familiar diagnosis despite classic epiglottitis presentation"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, I notice you're considering several causes of stridor in children. What key clinical features would help you distinguish between epiglottitis and croup? Think about positioning, drooling, and voice changes - how might these guide your interview questions?",
      "phase5": "Now that you've gathered your history and physical findings, let's think through the classic presentations. You noted the tripod positioning, drooling, and muffled voice. How does this constellation of findings help narrow your differential? What's concerning about this particular combination of symptoms?",
      "finalDebrief": "This case demonstrates the classic presentation of acute epiglottitis - the 4 D's: drooling, dysphagia, distress, and dysphonia. Notice how the tripod positioning and refusal to lie down were key differentiating features from croup. While rare in the Hib vaccine era, epiglottitis remains a true pediatric emergency requiring immediate airway management. How did your thinking evolve as you gathered more data?"
    }
  }
};
