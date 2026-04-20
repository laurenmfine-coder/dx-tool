
window.EMR_DATA = {
  "patient": {
    "name": "Yasmine Bouchard",
    "dob": "08/28/1967",
    "age": 58,
    "sex": "Female",
    "mrn": "RDX-2025-37899",
    "pronouns": "She/Her",
    "insurance": "Medicare",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "OTC Cold Medicine Request",
    "race": "Middle Eastern",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-6086",
    "email": "yasmineb@email.com",
    "emergencyContact": {
      "name": "Raj Sharma (Family)",
      "phone": "(954) 555-9210"
    }
  },
  "problems": [
    {
      "problem": "Pseudoephedrine OTC purchase \u2014 hypertension contraindication",
      "icd": "I10",
      "onset": "2024",
      "status": "Active",
      "notes": "Maria Santos, 55F \u2014 hypertension on amlodipine + lisinopril. Purchasing pseudoephedrine (Sudafed) for cold symptoms. Pharmacist intervention needed."
    },
    {
      "problem": "NSAID use \u2014 ibuprofen purchased for pain",
      "icd": "I10",
      "onset": "2024",
      "status": "Active",
      "notes": "Ibuprofen purchased alongside pseudoephedrine. NSAIDs blunt antihypertensive effect of ACEi and diuretics \u2014 can significantly raise BP."
    },
    {
      "problem": "Pharmacist medication therapy management \u2014 OTC interaction interception",
      "icd": "Z79.899",
      "onset": "2024",
      "status": "Active",
      "notes": "Pharmacist role: intercept potentially harmful OTC purchases, counsel on safe alternatives, document interaction."
    }
  ],
  "medications": [
    {
      "name": "COUNSEL against pseudoephedrine \u2014 hypertension contraindication",
      "sig": "Pseudoephedrine is a sympathomimetic \u2014 raises BP significantly in hypertensive patients. Contraindicated. Recommend intranasal saline or intranasal ipratropium as safe alternative.",
      "prescriber": "Pharmacist \u2014 OTC counseling",
      "start": "AVOID",
      "refills": 0,
      "status": "AVOID \u2014 counsel"
    },
    {
      "name": "Intranasal saline spray \u2014 safe decongestant alternative",
      "sig": "Isotonic or hypertonic saline nasal spray \u2014 mechanically clears congestion without systemic BP effect.",
      "prescriber": "Pharmacist",
      "start": "2024",
      "refills": 0,
      "status": "Safe alternative"
    },
    {
      "name": "COUNSEL against OTC ibuprofen \u2014 reduce to short course or switch to acetaminophen",
      "sig": "NSAIDs blunt ACEi/ARB and diuretic effects. For occasional use (1-2 days): acceptable. For ongoing pain: acetaminophen preferred in hypertension. Naproxen may have slightly lower BP effect than ibuprofen.",
      "prescriber": "Pharmacist",
      "start": "Acetaminophen preferred",
      "refills": 0,
      "status": "Switch to acetaminophen"
    },
    {
      "name": "Intranasal ipratropium 0.03% \u2014 reduce rhinorrhea",
      "sig": "Anticholinergic nasal spray \u2014 reduces rhinorrhea without systemic vasopressor effect. Safe in hypertension.",
      "prescriber": "Pharmacist",
      "start": "2024",
      "refills": 1,
      "status": "Safe alternative"
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
      "wt": "110 lbs",
      "ht": "5'8\"",
      "bmi": 16.7,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "110 lbs",
      "ht": "5'8\"",
      "bmi": 16.7,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "110 lbs",
      "ht": "5'8\"",
      "bmi": 16.7,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for OTC Cold Medicine Request",
      "assessment": "Working diagnosis: OTC Cold Medicine Request",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Pharmacy OTC Counseling",
      "results": [
        {
          "test": "Current BP (checked at pharmacy kiosk)",
          "value": "148/92",
          "unit": "mmHg",
          "ref": "<130/80 on treatment",
          "flag": "H"
        },
        {
          "test": "Current medications confirmed",
          "value": "Amlodipine 10mg, Lisinopril 20mg",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "OTC purchases flagged",
          "value": "Pseudoephedrine 120mg + Ibuprofen 400mg",
          "unit": "",
          "ref": "Both problematic in hypertension",
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
      "lot": "V3715K",
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
    "caseId": "pharmacy-otc-hypertension",
    "diagnosis": "OTC Medication Interaction With Hypertension \u2014 NSAIDs and Decongestants, Patient Counseling, Safe Alternatives",
    "acuity": 3,
    "presentation": "OTC Cold Medicine Request",
    "category": "pharmacologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with otc cold medicine request. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this pharmacologic presentation.",
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
      "OTC medication-hypertension interaction \u2014 pharmacist intervention (correct)",
      "Uncontrolled hypertension from non-adherence \u2014 BP elevated but OTC interaction is the immediate issue",
      "Second antihypertensive needed \u2014 BP not at goal, but OTC medications are the acute issue to address",
      "No intervention needed \u2014 OTC medications are widely available \u2014 INCORRECT; patient safety intervention required",
      "Refer to PCP for all OTC questions \u2014 appropriate for complex cases, but pharmacist can and should counsel here",
      "Pseudoephedrine safe with close BP monitoring \u2014 INCORRECT; contraindicated in significant hypertension"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: OTC Cold Medicine Request. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: OTC medication safety in hypertension \u2014 pharmacy intervention. Key learning: (1) Sympathomimetics and hypertension: pseudoephedrine, phenylephrine (nasal spray and oral), and oxymetazoline (nasal spray \u2014 minimal systemic absorption) are decongestants. Pseudoephedrine and phenylephrine raise systolic BP by 5-10+ mmHg via alpha-1 receptor stimulation. Contraindicated in significant hypertension, especially uncontrolled. Safe nasal alternatives: isotonic saline irrigation, ipratropium nasal spray. (2) NSAIDs and antihypertensives: NSAIDs inhibit prostaglandin synthesis \u2192 sodium and water retention \u2192 blunt antihypertensive effect of ACEi, ARBs, and diuretics. Mean systolic BP rise of 3-5 mmHg with regular NSAID use. Most pronounced with indomethacin; naproxen and aspirin (low-dose) may be slightly better tolerated. Acetaminophen is the safe analgesic for hypertensive patients. (3) Pharmacy-based BP monitoring: BP measurement at the pharmacy kiosk identified uncontrolled hypertension \u2014 an opportunity to refer to PCP for medication adjustment AND prevent worsening with OTC purchase. (4) OTC counseling is a pharmacist core competency: pharmacists are the most accessible healthcare providers. Proactive counseling at point of sale prevents adverse drug events. The pharmacist-patient interaction at OTC purchase is a clinical intervention, not a transaction. (5) Documentation: pharmacist should document OTC counseling interventions in the pharmacy management system \u2014 creates a record and supports continuity of care."
    }
  }
};
