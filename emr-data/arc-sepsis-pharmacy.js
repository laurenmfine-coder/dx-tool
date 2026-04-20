
window.EMR_DATA = {
  "patient": {
    "name": "Miguel Santos",
    "dob": "08/27/1970",
    "age": 55,
    "sex": "Male",
    "mrn": "RDX-2025-85058",
    "pronouns": "He/Him",
    "insurance": "Tricare",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Gerald Park",
    "race": "White",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-2355",
    "email": "miguelsa@email.com",
    "emergencyContact": {
      "name": "Rosa Hernandez (Family)",
      "phone": "(954) 555-1878"
    }
  },
  "problems": [
    {
      "problem": "Sepsis \u2014 urosepsis, antibiotic optimization needed",
      "icd": "A41.51",
      "onset": "2024",
      "status": "Active",
      "notes": "Sandra Kim, 67F \u2014 septic shock from UTI. Empiric vancomycin + piperacillin-tazobactam started. Culture results pending. Pharmacy: optimize dosing and de-escalation plan."
    },
    {
      "problem": "Vancomycin AUC/MIC monitoring \u2014 AKI complicates dosing",
      "icd": "N17.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Creatinine 2.1 (baseline 0.9). Vancomycin requires AUC-guided dosing in AKI \u2014 trough-based dosing inadequate and potentially nephrotoxic."
    },
    {
      "problem": "Piperacillin-tazobactam + vancomycin \u2014 AKI risk combination",
      "icd": "N17.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Pip-tazo + vancomycin combination significantly increases nephrotoxicity vs vancomycin alone. De-escalate pip-tazo as soon as culture data available."
    }
  ],
  "medications": [
    {
      "name": "Vancomycin \u2014 AUC/MIC-guided dosing protocol",
      "sig": "AKI present: load 25-30mg/kg IV x1, then reduce maintenance dose. Target AUC 400-600 mg\u00b7h/L. Draw levels for Bayesian PK modeling.",
      "prescriber": "Pharmacy (ID collaboration)",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 AUC monitoring"
    },
    {
      "name": "Piperacillin-tazobactam 3.375g IV q8h extended infusion (4h)",
      "sig": "Extended infusion (4-hour) optimizes PK/PD for time-dependent killing \u2014 maintains drug concentration above MIC longer than standard 30-min infusion.",
      "prescriber": "Pharmacy/ID",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 extended infusion"
    },
    {
      "name": "Ceftriaxone 2g IV q24h \u2014 de-escalation target for gram-negative coverage",
      "sig": "If urine culture returns gram-negative susceptible to ceftriaxone \u2014 de-escalate from pip-tazo to ceftriaxone + discontinue vancomycin if gram-positive coverage not needed.",
      "prescriber": "Pharmacy \u2014 de-escalation plan",
      "start": "2024",
      "refills": 0,
      "status": "Planned \u2014 pending culture"
    },
    {
      "name": "Procalcitonin-guided de-escalation \u2014 serial levels ordered",
      "sig": "Procalcitonin trending down = infection responding = de-escalation/discontinuation safe. Reduces antibiotic duration by 2-3 days on average.",
      "prescriber": "Medicine/Pharmacy",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 monitoring"
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
      "wt": "81 lbs",
      "ht": "5'10\"",
      "bmi": 11.6,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "81 lbs",
      "ht": "5'10\"",
      "bmi": 11.6,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "81 lbs",
      "ht": "5'10\"",
      "bmi": 11.6,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Gerald Park",
      "assessment": "Working diagnosis: Gerald Park",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Antibiotic Monitoring",
      "results": [
        {
          "test": "Vancomycin trough (old method \u2014 informational only)",
          "value": "12",
          "unit": "mcg/mL",
          "ref": "15-20 (old guideline)",
          "flag": "L"
        },
        {
          "test": "Vancomycin AUC (Bayesian estimate)",
          "value": "368",
          "unit": "mg\u00b7h/L",
          "ref": "400-600 target",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "2.1",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Urine culture \u2014 preliminary",
          "value": "Gram-negative rods \u2014 species/sensitivities pending",
          "unit": "",
          "ref": "No growth",
          "flag": "H"
        },
        {
          "test": "Procalcitonin \u2014 day 1",
          "value": "28",
          "unit": "ng/mL",
          "ref": "<0.25",
          "flag": "H"
        },
        {
          "test": "Procalcitonin \u2014 day 3",
          "value": "9",
          "unit": "ng/mL",
          "ref": "<0.25",
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
      "lot": "V6491K",
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
    "caseId": "arc-sepsis-pharmacy",
    "diagnosis": "Sepsis \u2014 Pharmacy Case: Antibiotic Stewardship, PK/PD Optimization, De-escalation Protocol",
    "acuity": 2,
    "presentation": "Gerald Park",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with gerald park. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What medications are you currently taking, including OTC?",
      "Have you had any new medications started recently?",
      "Are you taking everything as prescribed?",
      "Have you noticed any side effects?",
      "Is cost or access a barrier to any medication?",
      "Do you have any allergies to medications?",
      "Are you taking any supplements or herbal products?",
      "Do you have any kidney or liver problems?",
      "Are you pregnant or breastfeeding?"
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
      "Medication reconciliation",
      "Drug interaction screening",
      "Renal/hepatic dosing review",
      "Allergy cross-reactivity assessment",
      "Patient counseling readiness",
      "Adherence assessment",
      "Cost barrier identification"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Urosepsis \u2014 vancomycin AUC-guided dosing, pip-tazo extended infusion (correct)",
      "Vancomycin trough-only monitoring \u2014 old practice; AUC/MIC monitoring is current standard",
      "Continue broad-spectrum antibiotics without culture-guided de-escalation \u2014 antibiotic stewardship failure",
      "Standard 30-minute pip-tazo infusion \u2014 extended infusion has PK/PD advantage for treatment of resistant organisms",
      "Pip-tazo continuation after gram-negative sensitivities returned \u2014 de-escalation to narrower spectrum is the stewardship goal",
      "Vancomycin dose unchanged in AKI \u2014 significant nephrotoxicity risk without dose adjustment"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: Gerald Park. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: pharmacy sepsis management \u2014 AUC monitoring and stewardship. Key learning: (1) Vancomycin AUC monitoring: ASHP/IDSA/SIDP 2020 guidelines replaced trough-only monitoring with AUC/MIC-guided dosing. Target AUC 400-600 mg\u00b7h/L. Trough-only monitoring overcorrelates with nephrotoxicity and does not reliably achieve AUC targets. Bayesian PK software using 2 vancomycin levels calculates individualized AUC. (2) Extended infusion beta-lactams: time-dependent killing antibiotics (penicillins, cephalosporins, carbapenems) achieve better PK/PD targets with extended infusions (3-4h) vs standard 30-min. Particularly beneficial for infections with higher MIC organisms (Pseudomonas, Klebsiella). (3) Pip-tazo + vancomycin nephrotoxicity: meta-analyses demonstrate 2-3x increased AKI incidence vs vancomycin alone. Mechanism unclear but real. Guidance: de-escalate pip-tazo as soon as gram-negative sensitivities allow, change to cefepime or ceftriaxone. (4) Antibiotic stewardship de-escalation: once culture data available \u2014 narrow to narrowest effective agent. Procalcitonin declining = infection responding = reassess need for antibiotics. Reduces resistance selection, adverse effects, and cost. (5) Pharmacist role in sepsis: AUC monitoring is pharmacy-driven in most institutions. Pharmacist participates in daily antibiotic rounds \u2014 calculates doses, reviews cultures, recommends de-escalation, monitors for toxicity."
    }
  }
};
