
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "04/07/1955",
    "age": 70,
    "sex": "Non-binary",
    "mrn": "RDX-2025-45915",
    "pronouns": "They/Them",
    "insurance": "Medicaid",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Dorothy Williams",
    "race": "Black or African American",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-1943",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Diane Park (Family)",
      "phone": "(954) 555-2200"
    }
  },
  "problems": [
    {
      "problem": "HFrEF \u2014 GDMT incomplete, medication reconciliation needed",
      "icd": "I50.20",
      "onset": "2021",
      "status": "Active",
      "notes": "Dorothy Williams, 67F \u2014 EF 30%, on furosemide + carvedilol + lisinopril. Missing ARNI, MRA, and SGLT-2i \u2014 four-pillar GDMT incomplete."
    },
    {
      "problem": "Sacubitril-valsartan initiation \u2014 ACEi washout critical",
      "icd": "I50.20",
      "onset": "2024",
      "status": "Active",
      "notes": "Transitioning from lisinopril to Entresto. 36-hour ACEi washout MANDATORY \u2014 co-administration risks angioedema."
    },
    {
      "problem": "Potassium monitoring \u2014 spironolactone initiation in CKD",
      "icd": "E87.5",
      "onset": "2024",
      "status": "Active",
      "notes": "eGFR 44 + spironolactone = hyperkalemia risk. K+ and creatinine check at 1 week post-initiation required."
    }
  ],
  "medications": [
    {
      "name": "Sacubitril-valsartan 24/26mg BID \u2014 START after 36h lisinopril washout",
      "sig": "CRITICAL: stop lisinopril, wait 36 hours, THEN start sacubitril-valsartan. Do NOT co-administer. Titrate to 49/51mg then 97/103mg q2-4 weeks as tolerated.",
      "prescriber": "Cardiology (pharmacy verification)",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 new, after washout"
    },
    {
      "name": "Spironolactone 25mg PO daily \u2014 MRA add",
      "sig": "Aldosterone antagonist \u2014 mortality benefit in HFrEF EF <35%. Check K+ and Cr at 1 week. Hold if K+ >5.5 or Cr >2.5.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 new"
    },
    {
      "name": "Empagliflozin 10mg PO daily \u2014 SGLT-2i add",
      "sig": "SGLT-2 inhibitor \u2014 reduces HF hospitalization and CV death regardless of diabetes status. Can lower BP \u2014 monitor for dizziness.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 new"
    },
    {
      "name": "Furosemide 40mg PO daily \u2014 continue",
      "sig": "Continue diuretic for volume management. May need dose reduction as ARNI reduces afterload and preload.",
      "prescriber": "Cardiology",
      "start": "2021",
      "refills": 5,
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
      "wt": "129 lbs",
      "ht": "5'9\"",
      "bmi": 19.0,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "129 lbs",
      "ht": "5'9\"",
      "bmi": 19.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "129 lbs",
      "ht": "5'9\"",
      "bmi": 19.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Dorothy Williams",
      "assessment": "Working diagnosis: Dorothy Williams",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "HF Medication Safety Panel",
      "results": [
        {
          "test": "Potassium",
          "value": "4.3",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "1.6",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "eGFR",
          "value": "44",
          "unit": "mL/min/1.73m\u00b2",
          "ref": ">60",
          "flag": "L"
        },
        {
          "test": "Sodium",
          "value": "136",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": ""
        },
        {
          "test": "BNP",
          "value": "842",
          "unit": "pg/mL",
          "ref": "<100",
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
      "lot": "V9545K",
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
    "caseId": "arc-hf-pharmacy",
    "diagnosis": "HFrEF \u2014 Pharmacy Case: GDMT Optimization, Medication Reconciliation, Patient Counseling on New Agents",
    "acuity": 3,
    "presentation": "Dorothy Williams",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with dorothy williams. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this cardiovascular presentation.",
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
      "HFrEF incomplete GDMT \u2014 pharmacy optimization role (correct)",
      "ACEi + ARNI co-administration \u2014 dangerous medication error; pharmacy role is to intercept",
      "Aldosterone antagonist without monitoring \u2014 hyperkalemia risk in CKD; pharmacy role is to ensure follow-up",
      "SGLT-2i contraindicated in HFrEF \u2014 INCORRECT; now Class I in HFrEF regardless of diabetes",
      "Diuretic continuation not needed with ARNI \u2014 INCORRECT; furosemide continued, monitor for overcorrection",
      "ARNI safe in bilateral renal artery stenosis \u2014 INCORRECT; avoid ARNI/ACEi/ARB in bilateral RAS"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: Dorothy Williams. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: HFrEF pharmacy case \u2014 GDMT optimization. Key learning: (1) Four pillars of HFrEF GDMT: (a) ARNI (sacubitril-valsartan) or ACEi/ARB. (b) Evidence-based beta-blocker (carvedilol, metoprolol succinate, bisoprolol). (c) MRA (spironolactone or eplerenone \u2014 EF <35%). (d) SGLT-2 inhibitor (dapagliflozin or empagliflozin \u2014 approved for HFrEF independent of diabetes). Each pillar independently reduces mortality. All four together are additive. (2) ACEi\u2192ARNI transition: the pharmacist's most important HF drug safety intervention. Entresto co-administration with ACEi causes angioedema \u2014 the neprilysin component raises bradykinin (same as ACEi mechanism). Mandatory 36-hour washout. Verify this in medication reconciliation every time. (3) MRA + CKD monitoring: spironolactone in eGFR <45 requires K+ and Cr check at 1 week. Pharmacist role: flag monitoring requirement on prescription, ensure patient knows to follow up. Hold criteria: K+ >5.5 or Cr rise >30% from baseline. (4) SGLT-2i in HFrEF: empagliflozin and dapagliflozin are now Class I recommendations for HFrEF regardless of diabetes status. The HF benefit is independent of glycemic effect. eGFR threshold for initiation: \u226520 mL/min. (5) Pharmacist role in HF: medication reconciliation to identify incomplete GDMT, drug-drug interaction screening (ARNI + ACEi), monitoring parameter counseling, adherence support, and patient education on new agents."
    }
  }
};
