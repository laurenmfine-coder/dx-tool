
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "01/21/1990",
    "age": 35,
    "sex": "Non-binary",
    "mrn": "RDX-2025-69421",
    "pronouns": "They/Them",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Draining Buccal Abscess",
    "race": "American Indian or Alaska Native",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-5710",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Samuel Adeyemi (Family)",
      "phone": "(954) 555-4242"
    }
  },
  "problems": [
    {
      "problem": "Acute dentoalveolar abscess \u2014 mandibular molar",
      "icd": "K04.7",
      "onset": "2024",
      "status": "Active",
      "notes": "Fever 38.2\u00b0C, buccal swelling, draining sinus tract \u2014 antibiotics indicated"
    },
    {
      "problem": "Penicillin allergy \u2014 hives as child",
      "icd": "Z88.0",
      "onset": "1992",
      "status": "Active",
      "notes": "Self-reported childhood reaction \u2014 hives only, no anaphylaxis. Cross-reactivity with cephalosporins LOW."
    },
    {
      "problem": "Need for definitive treatment \u2014 tooth #30 necrotic pulp",
      "icd": "K04.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Antibiotics are ADJUNCT only \u2014 definitive treatment is RCT or extraction"
    }
  ],
  "medications": [
    {
      "name": "Clindamycin 300mg PO TID x7 days",
      "sig": "Take 1 capsule 3 times daily \u2014 first-line alternative for dental infections with penicillin allergy",
      "prescriber": "Dr. Voss DDS",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 600mg PO TID with food",
      "sig": "Take 1 tablet 3 times daily with food for pain/inflammation",
      "prescriber": "Dr. Voss DDS",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Chlorhexidine 0.12% rinse BID",
      "sig": "Rinse 30 seconds twice daily \u2014 adjunct antimicrobial",
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
      "wt": "65 lbs",
      "ht": "5'3\"",
      "bmi": 11.5,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "65 lbs",
      "ht": "5'3\"",
      "bmi": 11.5,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "65 lbs",
      "ht": "5'3\"",
      "bmi": 11.5,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Draining Buccal Abscess",
      "assessment": "Working diagnosis: Draining Buccal Abscess",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Periapical X-ray \u2014 Tooth #30",
      "indication": "Swelling, fever, draining sinus tract",
      "findings": "Large periapical radiolucency tooth #30 \u2014 1.2cm diameter. Furcation involvement. Widened PDL space. No cortical plate perforation visible on 2D imaging.",
      "impression": "Periapical abscess tooth #30 with furcation involvement. Definitive treatment required. CT of jaw would better characterize cortical involvement if Ludwig's angina concern."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V6965K",
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
    "smoking": "Never smoker",
    "alcohol": "Social, 2-4 drinks/week",
    "drugs": "Denies",
    "occupation": "Healthcare professional / student",
    "exercise": "Regular, 3x/week",
    "diet": "Balanced",
    "livingArrangement": "Lives with family"
  },
  "meta": {
    "caseId": "dental-antibiotic-allergy",
    "diagnosis": "Dental Abscess Requiring Antibiotic Therapy \u2014 Penicillin Allergy, Correct Alternative Selection",
    "acuity": 3,
    "presentation": "Draining Buccal Abscess",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with draining buccal abscess. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this infectious presentation.",
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
      "Dental abscess \u2014 clindamycin for PCN allergy (correct)",
      "Amoxicillin \u2014 CONTRAINDICATED, patient allergic",
      "Azithromycin \u2014 not recommended for dental infections (inadequate anaerobic coverage)",
      "Metronidazole alone \u2014 inadequate for mixed aerobic/anaerobic dental flora",
      "Cephalexin \u2014 low cross-reactivity with PCN (~1%), acceptable if allergy not anaphylactic",
      "Fluoroquinolone \u2014 inappropriate for routine dental infection, reserve for resistant organisms"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: Draining Buccal Abscess. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: dental abscess \u2014 antibiotic selection with penicillin allergy. Key dentistry learning: (1) Antibiotics in dentistry: adjunct ONLY \u2014 not a substitute for definitive care (drainage, RCT, extraction). Antibiotics without source control = temporary suppression with high recurrence. Definitive treatment must be scheduled or performed. (2) PCN allergy cross-reactivity: true allergy to penicillin \u2192 risk of cross-reactivity with cephalosporins is ~1-2% (R2 side chain similarity). Hives as a child with no anaphylaxis = LOW-risk allergy. Cephalexin or cefadroxil is technically acceptable but many dentists avoid and use clindamycin instead for simplicity. (3) Clindamycin for dental infections: excellent oral flora coverage (gram-positive aerobes + oral anaerobes). First-line alternative. Counsel on C. diff risk \u2014 take probiotics, report diarrhea. (4) Metronidazole: anaerobic coverage only \u2014 useful as ADD-ON to clindamycin for severe infections, not monotherapy. (5) Azithromycin has poor activity against Prevotella and Fusobacterium (major dental pathogens) \u2014 NOT recommended for dental infections despite being commonly prescribed."
    }
  }
};
