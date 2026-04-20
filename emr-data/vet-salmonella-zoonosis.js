
window.EMR_DATA = {
  "patient": {
    "name": "Rosie",
    "dob": "07/14/2022",
    "age": 3,
    "sex": "Female (intact)",
    "species": "Holstein Dairy Cow",
    "mrn": "RDX-2025-46568",
    "pronouns": "They/Them",
    "insurance": "Owner Pay \u2014 No Insurance",
    "pcp": "Dr. Robert Kim, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Farm Staff Also Ill",
    "race": "Species: Holstein Dairy Cow",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537 (Owner: Hiroshi Tanaka)",
    "phone": "(954) 555-6783",
    "email": "rosieowner@email.com",
    "emergencyContact": {
      "name": "Hiroshi Tanaka (Owner)",
      "phone": "(954) 555-1010"
    }
  },
  "problems": [
    {
      "problem": "Salmonella colonization in healthy bearded dragon \u2014 expected finding",
      "icd": "A02.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Spike, 2yr bearded dragon \u2014 asymptomatic carrier. Salmonella isolated on cloacal culture requested by concerned owner. Normal flora in reptiles."
    },
    {
      "problem": "Zoonotic risk to household \u2014 immunocompromised owner",
      "icd": "Z57.5",
      "onset": "2024",
      "status": "Active",
      "notes": "Owner is a 3-year-old child and immunocompromised grandmother (chemotherapy). High-risk household. Zoonotic counseling critical."
    },
    {
      "problem": "No antibiotic treatment \u2014 asymptomatic carrier, resistance risk",
      "icd": "A02.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Asymptomatic Salmonella in reptile is NOT treated with antibiotics. Treatment creates antibiotic-resistant strains and does not eliminate carriage."
    }
  ],
  "medications": [
    {
      "name": "NO antibiotics \u2014 asymptomatic reptile Salmonella",
      "sig": "Do NOT treat asymptomatic Salmonella carrier with antibiotics. Creates resistance. Does not eliminate carriage. Counseling is the intervention.",
      "prescriber": "Veterinarian \u2014 DO NOT TREAT",
      "start": "AVOID",
      "refills": 0,
      "status": "NOT INDICATED"
    },
    {
      "name": "Hand hygiene protocol \u2014 household counseling",
      "sig": "Wash hands with soap and water after ANY reptile contact, cage cleaning, or surface touching. Alcohol-based hand sanitizer is INSUFFICIENT against Salmonella. Soap and water only.",
      "prescriber": "Veterinarian \u2014 zoonotic counseling",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 owner education"
    },
    {
      "name": "Reptile handling restrictions \u2014 immunocompromised household",
      "sig": "Child <5 years and immunocompromised adults should NOT handle reptiles or their enclosures. If unavoidable: gloves + immediate handwashing. Consider rehoming if risk is unmanageable.",
      "prescriber": "Veterinarian",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 risk counseling"
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
      "bp": "145/95",
      "hr": 148,
      "rr": 38,
      "temp": "103.8\u00b0F",
      "spo2": "96%",
      "wt": "28 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Hospital"
    },
    {
      "date": "08/20/2024",
      "bp": "128/80",
      "hr": 92,
      "rr": 22,
      "temp": "101.5\u00b0F",
      "spo2": "99%",
      "wt": "29.5 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Clinic"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Bloody Diarrhea",
      "assessment": "Working diagnosis: Bloody Diarrhea",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Reptile Zoonosis Assessment",
      "results": [
        {
          "test": "Cloacal culture \u2014 Salmonella",
          "value": "Salmonella enterica serovar Typhimurium \u2014 isolated",
          "unit": "",
          "ref": "Normal flora in reptiles",
          "flag": ""
        },
        {
          "test": "Reptile clinical status",
          "value": "Asymptomatic \u2014 eating well, normal activity",
          "unit": "",
          "ref": "Healthy",
          "flag": ""
        },
        {
          "test": "Household risk stratification",
          "value": "Child age 3, grandmother on chemotherapy \u2014 HIGH RISK",
          "unit": "",
          "ref": "Low risk = healthy adults",
          "flag": "H"
        },
        {
          "test": "Antibiotic sensitivity",
          "value": "Pan-sensitive \u2014 but treatment not indicated",
          "unit": "",
          "ref": "",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V4314K",
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
    "caseId": "vet-salmonella-zoonosis",
    "diagnosis": "Salmonella in Reptile \u2014 Zoonotic Risk Counseling, Immunocompromised Owner Precautions, No Antibiotic Treatment",
    "acuity": 2,
    "presentation": "Bloody Diarrhea",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with bloody diarrhea. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did this start?",
      "Has it been getting better, worse, or the same?",
      "What makes it better or worse?",
      "Rate the severity 0-10.",
      "Any associated symptoms?",
      "Any prior episodes?",
      "What medications are you taking?",
      "Any allergies?",
      "Any relevant family history?",
      "Any recent travel or sick contacts?",
      "Any prior surgeries or hospitalizations?"
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
      "Species-appropriate physical exam",
      "Vital signs (species-normal ranges)",
      "Weight and body condition scoring",
      "Auscultation (heart, lungs, GI for ruminants)",
      "Abdominal palpation",
      "Mucous membrane color and CRT",
      "Neurological assessment",
      "Pain scoring (species-appropriate scale)"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Asymptomatic reptile Salmonella \u2014 zoonotic counseling, no antibiotics (correct)",
      "Treat reptile with antibiotics \u2014 creates resistance, does not eliminate carriage; NOT indicated",
      "Euthanize reptile \u2014 not indicated for asymptomatic carriage; counseling first",
      "Culture-negative = safe \u2014 all reptiles should be presumed Salmonella carriers regardless of culture result",
      "Reptile poses no zoonotic risk \u2014 FALSE; reptiles are the most common source of Salmonella zoonosis in humans",
      "Hand sanitizer is sufficient \u2014 INCORRECT; alcohol-based sanitizer does NOT kill Salmonella adequately; soap and water required"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Bloody Diarrhea. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: reptile Salmonella zoonosis. IPE key learning: (1) All reptiles are presumed Salmonella carriers: culture-negative result does not mean safe \u2014 reptiles shed intermittently. CDC estimates 70,000+ human Salmonella infections annually from reptile contact in the US. (2) No antibiotic treatment for asymptomatic carrier: treating creates antibiotic-resistant strains. Does not eliminate carriage \u2014 bacteria persist in the GI tract. The veterinarian's intervention is counseling, not antibiotics. (3) Handwashing \u2014 soap and water ONLY: alcohol-based hand sanitizers do not reliably kill Salmonella. Soap and water is the only effective option. This is a critical public health message. (4) High-risk household members: children <5 years, pregnant women, elderly, and immunocompromised persons are at greatest risk for serious Salmonella disease (bacteremia, meningitis). These households should seriously consider whether reptile ownership is appropriate. (5) One Health \u2014 human health connection: when a human patient presents with Salmonella, especially a child or immunocompromised adult, healthcare providers should ask about reptile contact. This is a classic One Health bridge case \u2014 veterinary diagnosis informs human health practice."
    }
  }
};
