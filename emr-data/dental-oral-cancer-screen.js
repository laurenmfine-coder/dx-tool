
window.EMR_DATA = {
  "patient": {
    "name": "Robert Chen",
    "dob": "05/27/1971",
    "age": 54,
    "sex": "Male",
    "mrn": "RDX-2025-58884",
    "pronouns": "He/Him",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "1.5cm White Patch Lateral Tongue",
    "race": "Black or African American",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-8606",
    "email": "robertch@email.com",
    "emergencyContact": {
      "name": "Samuel Adeyemi (Family)",
      "phone": "(954) 555-2272"
    }
  },
  "problems": [
    {
      "problem": "Suspicious oral lesion \u2014 lateral tongue, 1.5cm",
      "icd": "K13.70",
      "onset": "2024",
      "status": "Active",
      "notes": "White patch with erythematous halo, non-scrapable, 8-week history \u2014 biopsy urgently required"
    },
    {
      "problem": "Tobacco use \u2014 35 pack-year history",
      "icd": "F17.210",
      "onset": "1988",
      "status": "Active",
      "notes": "Major risk factor for oral SCC"
    },
    {
      "problem": "Alcohol use disorder \u2014 heavy daily use",
      "icd": "F10.20",
      "onset": "2015",
      "status": "Active",
      "notes": "Synergistic risk factor with tobacco for oral cancer"
    }
  ],
  "medications": [
    {
      "name": "No current oral medications relevant to this visit",
      "sig": "N/A",
      "prescriber": "N/A",
      "start": "N/A",
      "refills": 0,
      "status": "N/A"
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
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "82 lbs",
      "ht": "5'9\"",
      "bmi": 12.1,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "82 lbs",
      "ht": "5'9\"",
      "bmi": 12.1,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "82 lbs",
      "ht": "5'9\"",
      "bmi": 12.1,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for 1.5cm White Patch Lateral Tongue",
      "assessment": "Working diagnosis: 1.5cm White Patch Lateral Tongue",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Incisional Biopsy \u2014 Lateral Tongue Lesion (performed today)",
      "indication": "1.5cm non-scrapable white patch with erythematous margins, 8-week history, tobacco/ETOH user",
      "findings": "Biopsy performed under local anesthesia. 5mm punch biopsy of most erythematous border area. Sent for histopathology. Results expected 5-7 business days. Patient given written instructions for biopsy site care.",
      "impression": "Biopsy performed. High clinical suspicion for dysplasia or squamous cell carcinoma based on lesion characteristics. Referral to oral surgery/ENT placed pending pathology results."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V7970K",
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
    "caseId": "dental-oral-cancer-screen",
    "diagnosis": "Squamous Cell Carcinoma, Lateral Tongue \u2014 Suspicious Lesion Requiring Biopsy",
    "acuity": 2,
    "presentation": "1.5cm White Patch Lateral Tongue",
    "category": "other"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with 1.5cm white patch lateral tongue. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Oral squamous cell carcinoma \u2014 lateral tongue (correct, biopsy pending confirmation)",
      "Leukoplakia \u2014 benign but SCC risk up to 17%, biopsy mandatory",
      "Traumatic keratosis \u2014 must have identifiable trauma source, cannot assume",
      "Candidiasis \u2014 scrapable white plaques, this lesion is non-scrapable",
      "Lichen planus \u2014 bilateral symmetric pattern, reticular white lines",
      "Fibroma \u2014 smooth surface, not irregular red-white mixed lesion"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: 1.5cm White Patch Lateral Tongue. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: suspicious lateral tongue lesion \u2014 biopsy confirms or rules out SCC. Key dentistry learning points: (1) The VELscope or toluidine blue adjunct tools do NOT replace biopsy \u2014 they aid identification but clinical decision is biopsy for any persistent suspicious lesion >2-3 weeks. (2) High-risk sites for oral cancer: lateral/ventral tongue, floor of mouth, soft palate. Lip vermilion (UV exposure, different etiology). (3) Biopsy site selection: biopsy the most erythematous (erythroplakic) area of the lesion \u2014 highest malignant transformation rate. Avoid necrotic or ulcerated center. (4) Tobacco + alcohol synergy: risk of oral SCC = 15x vs neither alone. Combined use accounts for ~75% of oral cancers. (5) 5-year survival: stage I oral SCC (localized) = 83%. Stage IV (metastatic) = 38%. Early detection by dentists is the primary preventive intervention \u2014 annual oral cancer screen for all patients, not just high-risk."
    }
  }
};
