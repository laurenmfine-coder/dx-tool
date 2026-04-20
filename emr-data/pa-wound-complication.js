
window.EMR_DATA = {
  "patient": {
    "name": "Drew Santos",
    "dob": "11/21/1961",
    "age": 64,
    "sex": "Non-binary",
    "mrn": "RDX-2025-71085",
    "pronouns": "They/Them",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Wound Infection Day 5 Post-Laceration",
    "race": "Hispanic or Latino",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-1613",
    "email": "drewsant@email.com",
    "emergencyContact": {
      "name": "Sam Patel (Family)",
      "phone": "(954) 555-9545"
    }
  },
  "problems": [
    {
      "problem": "Wound infection \u2014 cellulitis, day 5 post-laceration",
      "icd": "L03.115",
      "onset": "2024",
      "status": "Active",
      "notes": "Wound edges: erythema 2cm beyond margins, warmth, purulent drainage. T 38.2\u00b0C. MRSA risk factors."
    },
    {
      "problem": "Diabetes T2DM \u2014 impaired wound healing",
      "icd": "E11.9",
      "onset": "2020",
      "status": "Active",
      "notes": "A1c 8.2% \u2014 hyperglycemia impairs neutrophil function and collagen synthesis"
    },
    {
      "problem": "MRSA risk \u2014 prior hospitalization this year",
      "icd": "Z87.39",
      "onset": "2024",
      "status": "Active",
      "notes": "Prior hospital admission increases MRSA colonization risk \u2014 empiric TMP-SMX + Cephalexin"
    }
  ],
  "medications": [
    {
      "name": "TMP-SMX DS (Bactrim DS) 1 tab PO BID x7 days \u2014 MRSA coverage",
      "sig": "Take 1 double-strength tablet twice daily for 7 days \u2014 MRSA soft tissue infection",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Cephalexin 500mg PO QID x7 days \u2014 streptococcal coverage (added)",
      "sig": "Take 1 capsule four times daily \u2014 beta-hemolytic strep coverage not covered by TMP-SMX",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Wound I&D \u2014 PERFORMED if fluctuance present",
      "sig": "If fluctuant abscess: incision and drainage. Culture the drainage. This is definitive treatment.",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "Performed \u2014 no fluctuance on exam"
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
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Wound Infection Day 5 Post-Laceration",
      "assessment": "Working diagnosis: Wound Infection Day 5 Post-Laceration",
      "plan": "Referral to pa. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Wound Infection Workup",
      "results": [
        {
          "test": "Wound culture (superficial swab)",
          "value": "Pending \u2014 gram stain shows gram-positive cocci",
          "unit": "",
          "ref": "No growth",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "13.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "4.8",
          "unit": "mg/dL",
          "ref": "<1.0",
          "flag": "H"
        },
        {
          "test": "Glucose (point of care)",
          "value": "248",
          "unit": "mg/dL",
          "ref": "70-140",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V9994K",
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
    "caseId": "pa-wound-complication",
    "diagnosis": "Wound Infection Day 5 Post-Laceration Repair \u2014 Cellulitis Extending Beyond Wound, Antibiotics Required",
    "acuity": 3,
    "presentation": "Wound Infection Day 5 Post-Laceration",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with wound infection day 5 post-laceration. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Complete history and physical",
      "Vital signs and trending",
      "Focused systems exam",
      "Scope of practice determination",
      "Escalation criteria assessment",
      "Documentation review"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Wound cellulitis with MRSA risk \u2014 TMP-SMX + cephalexin (correct)",
      "Cephalexin alone \u2014 inadequate MRSA coverage given risk factors",
      "Amoxicillin-clavulanate \u2014 adequate coverage but no MRSA activity",
      "No antibiotics \u2014 cellulitis 2cm beyond margins with fever needs antibiotics",
      "IV antibiotics in hospital \u2014 PA-appropriate to treat outpatient with oral antibiotics for uncomplicated cellulitis",
      "MRSA coverage with TMP-SMX alone \u2014 misses beta-hemolytic strep, combination preferred"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pa case with chief complaint: Wound Infection Day 5 Post-Laceration. What are the most important questions for a pa to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pa perspective, what is the most critical finding that narrows this differential? What is the pa-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pa's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: wound cellulitis, MRSA risk factors \u2014 combination antibiotic strategy. Key PA learning: (1) When to treat wound infection: antibiotics for: (a) erythema >2cm beyond wound margins, (b) fever, (c) systemic signs, (d) lymphangitis, (e) immunocompromised host. Erythema \u22642cm and no systemic signs = wound observation + close follow-up. This patient has all three criteria: >2cm erythema, fever 38.2\u00b0C, and diabetes. (2) MRSA risk factors requiring TMP-SMX coverage: prior MRSA infection/colonization, recent hospitalization or healthcare contact, injection drug use, crowded living conditions, competitive athletes, men who have sex with men, or known MRSA contact. This patient has prior hospitalization \u2192 treat empirically for MRSA. (3) Why dual coverage: TMP-SMX is excellent for CA-MRSA but has gaps in beta-hemolytic Strep coverage. Cellulitis is often streptococcal. Adding cephalexin covers MSSA and Strep without adding significant MRSA coverage. (4) I&D for abscesses: If fluctuance is present, I&D is the treatment \u2014 antibiotics alone are insufficient. Always culture the drainage for targeted therapy. This patient has no fluctuance \u2014 antibiotics are appropriate primary treatment. (5) Glucose 248: hyperglycemia impairs wound healing and immune function. Contact PCP for glucose management \u2014 do not ignore this incidental finding in a wound care context."
    }
  }
};
