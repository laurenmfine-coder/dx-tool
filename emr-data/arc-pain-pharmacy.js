
window.EMR_DATA = {
  "patient": {
    "name": "Lisa Chen",
    "dob": "12/06/1959",
    "age": 66,
    "sex": "Female",
    "mrn": "RDX-2025-93427",
    "pronouns": "She/Her",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Kevin Torres",
    "race": "Multiracial",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-8607",
    "email": "lisachen@email.com",
    "emergencyContact": {
      "name": "Drew Santos (Family)",
      "phone": "(954) 555-2321"
    }
  },
  "problems": [
    {
      "problem": "Chronic pain prescription \u2014 opioid safety assessment",
      "icd": "G89.29",
      "onset": "2022",
      "status": "Active",
      "notes": "Kevin Torres, 48M \u2014 presents to pharmacy for opicodone 30mg #90 prescription. Pharmacist role: PDMP review, risk assessment, naloxone co-prescription."
    },
    {
      "problem": "PDMP controlled substance monitoring \u2014 multi-prescriber alert",
      "icd": "F11.10",
      "onset": "2024",
      "status": "Active",
      "notes": "PDMP shows prescriptions from 2 prescribers in past 30 days for controlled substances. Pharmacist must address."
    },
    {
      "problem": "Naloxone co-prescription \u2014 pharmacy initiation opportunity",
      "icd": "T40.2X5A",
      "onset": "2024",
      "status": "Active",
      "notes": "Patient on \u226550 MME/day. Pharmacist can prescribe naloxone independently in many states \u2014 standing order."
    }
  ],
  "medications": [
    {
      "name": "Oxycodone 30mg #90 \u2014 fill after PDMP review and documentation",
      "sig": "PDMP reviewed: one prescriber, consistent fills, no overlapping. Appropriate to dispense.",
      "prescriber": "Pain Medicine (pharmacy verification)",
      "start": "2024",
      "refills": 0,
      "status": "Fill \u2014 after PDMP clearance"
    },
    {
      "name": "Naloxone 4mg intranasal kit \u2014 co-prescribe",
      "sig": "Co-prescribe naloxone with all opioid prescriptions \u226550 MME/day or with any risk factor. Educate patient and household member on use.",
      "prescriber": "Pharmacist (standing order) or prescriber",
      "start": "2024",
      "refills": 1,
      "status": "Active \u2014 co-prescribe"
    },
    {
      "name": "Acetaminophen verification \u2014 avoid combination products",
      "sig": "Verify patient is not taking acetaminophen-containing combination products (Percocet, NyQuil, Tylenol PM) concurrently \u2014 maximum 3g/day total.",
      "prescriber": "Pharmacist \u2014 verify",
      "start": "2024",
      "refills": 0,
      "status": "Verify \u2014 counseling"
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
      "wt": "138 lbs",
      "ht": "5'11\"",
      "bmi": 19.2,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "138 lbs",
      "ht": "5'11\"",
      "bmi": 19.2,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "138 lbs",
      "ht": "5'11\"",
      "bmi": 19.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Kevin Torres",
      "assessment": "Working diagnosis: Kevin Torres",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Pharmacy Assessment",
      "results": [
        {
          "test": "PDMP check",
          "value": "1 prescriber, consistent monthly fills, no overlapping prescriptions",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "MME calculation",
          "value": "180 MME/day (oxycodone 30mg x6/day)",
          "unit": "",
          "ref": ">50 MME = naloxone co-prescribe; >90 MME = discuss dose reduction",
          "flag": "H"
        },
        {
          "test": "ORT (Opioid Risk Tool)",
          "value": "Score 8 \u2014 high risk",
          "unit": "",
          "ref": "<4 low; 4-7 moderate; \u22658 high",
          "flag": "H"
        },
        {
          "test": "UDS on file (pain clinic)",
          "value": "Oxycodone positive, no illicit substances",
          "unit": "",
          "ref": "Consistent with prescription",
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
      "lot": "V4767K",
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
    "caseId": "arc-pain-pharmacy",
    "diagnosis": "Chronic Pain \u2014 Pharmacy Case: Opioid Risk Stratification, PDMP Review, Naloxone Dispensing",
    "acuity": 3,
    "presentation": "Kevin Torres",
    "category": "musculoskeletal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with kevin torres. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this musculoskeletal presentation.",
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
      "Appropriate chronic pain opioid prescription \u2014 fill after PDMP verification (correct)",
      "Multi-prescriber shopping \u2014 PDMP shows single prescriber; not applicable here",
      "Drug diversion concern \u2014 UDS consistent, PDMP consistent; no evidence",
      "Acetaminophen toxicity from combination products \u2014 counseling needed, not a contraindication",
      "Refusal to fill based on morphine dose alone \u2014 high-dose opioid does not mandate refusal if clinically appropriate",
      "Naloxone required by law before filling \u2014 true in some states; good practice universally"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: Kevin Torres. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: pharmacy opioid safety assessment \u2014 appropriate fill with naloxone co-prescription. Key learning: (1) Pharmacist PDMP responsibilities: check PDMP for EVERY controlled substance prescription. Red flags: multiple prescribers for same drug class, overlapping fills, geographic inconsistency (prescriber and patient far apart), early refill requests. Document PDMP review in dispensing record. (2) MME (morphine milligram equivalents) thresholds: >50 MME/day = co-prescribe naloxone. >90 MME/day = CDC guideline recommends re-evaluation of risk-benefit and discussion with prescriber. >200 MME/day = consult pain specialist (if not already involved). (3) Naloxone co-prescribing: pharmacists in most US states can prescribe naloxone under a standing order or collaborative practice agreement without individual prescriber authorization. Every patient on \u226550 MME/day, combination opioid + benzodiazepine, or with risk factors should receive naloxone. Educate patient AND household members on use. (4) Opioid Risk Tool (ORT): brief 5-item assessment \u2014 personal/family history of substance use, age, history of prehabilitation, history of sexual abuse, psychological disease. Score \u22658 = high risk \u2192 more frequent monitoring, smaller supply, PDMP checks every fill. (5) Pharmacist refusal: the right to refuse to fill is a professional judgment \u2014 reserved for legitimate safety concerns (forgery, multi-prescriber, suspicious circumstances). NOT based on dose alone or personal discomfort with opioids in legitimate pain patients."
    }
  }
};
