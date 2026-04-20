
window.EMR_DATA = {
  "patient": {
    "name": "Drew Santos",
    "dob": "10/25/1953",
    "age": 72,
    "sex": "Non-binary",
    "mrn": "RDX-2025-22377",
    "pronouns": "They/Them",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Margaret Chen",
    "race": "Middle Eastern",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-9541",
    "email": "drewsant@email.com",
    "emergencyContact": {
      "name": "Mei Lin (Family)",
      "phone": "(954) 555-5465"
    }
  },
  "problems": [
    {
      "problem": "Post-ORIF hip \u2014 VTE prophylaxis management",
      "icd": "S72.001A",
      "onset": "2024",
      "status": "Active",
      "notes": "Margaret Chen, 78F. Enoxaparin for VTE prophylaxis \u2014 dose needs adjustment for renal function."
    },
    {
      "problem": "CKD Stage 3 \u2014 enoxaparin dose adjustment required",
      "icd": "N18.3",
      "onset": "2019",
      "status": "Active",
      "notes": "CrCl 42 mL/min \u2014 standard enoxaparin 40mg may accumulate. Consider dose reduction or fondaparinux alternative."
    },
    {
      "problem": "NSAID contraindication \u2014 renal function + post-op",
      "icd": "N18.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Ketorolac ordered by orthopedics \u2014 pharmacy intervention needed: CKD + elderly + post-op = contraindicated"
    }
  ],
  "medications": [
    {
      "name": "Enoxaparin 30mg SQ daily (reduced dose for CrCl 42)",
      "sig": "Reduced dose \u2014 standard 40mg has accumulation risk at CrCl <30, cautious reduction at CrCl 30-50",
      "prescriber": "Pharmacy recommendation \u2014 orthopedics approved",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 650mg q6h scheduled \u2014 NSAID alternative",
      "sig": "Scheduled acetaminophen as first-line analgesic \u2014 no renal toxicity",
      "prescriber": "Pharmacy/Orthopedics",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ketorolac \u2014 PHARMACY INTERVENTION \u2014 DO NOT DISPENSE",
      "sig": "Contraindicated: elderly, CKD, post-operative setting. Pharmacy intervention placed.",
      "prescriber": "N/A \u2014 intervention",
      "start": "N/A",
      "refills": 0,
      "status": "HELD \u2014 pharmacy intervention"
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
      "wt": "106 lbs",
      "ht": "5'2\"",
      "bmi": 19.4,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "106 lbs",
      "ht": "5'2\"",
      "bmi": 19.4,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "106 lbs",
      "ht": "5'2\"",
      "bmi": 19.4,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Margaret Chen",
      "assessment": "Working diagnosis: Margaret Chen",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "panel": "Day 3 Post-Op Labs",
      "results": [
        {
          "test": "Creatinine",
          "value": "1.4",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "CrCl (Cockcroft-Gault)",
          "value": "42",
          "unit": "mL/min",
          "ref": "",
          "flag": "L"
        },
        {
          "test": "Potassium",
          "value": "4.6",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": ""
        },
        {
          "test": "Hemoglobin",
          "value": "9.8",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": "L"
        },
        {
          "test": "Platelet count",
          "value": "188",
          "unit": "K/\u03bcL",
          "ref": "150-400",
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
      "lot": "V2845K",
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
    "caseId": "arc-hip-fracture-pharmacy",
    "diagnosis": "Post-ORIF Hip Day 3 \u2014 Pharmacy: VTE Prophylaxis Duration, Renal Dose Adjustment, NSAID Contraindication",
    "acuity": 3,
    "presentation": "Margaret Chen",
    "category": "orthopedic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with margaret chen. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this orthopedic presentation.",
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
      "Enoxaparin dose reduction + NSAID contraindication identified (correct)",
      "Standard enoxaparin 40mg without renal adjustment \u2014 risk of accumulation at CrCl 42",
      "Ketorolac safe in this patient \u2014 INCORRECT: CKD + elderly + post-op = triple contraindication",
      "Switch to unfractionated heparin \u2014 option but requires monitoring, not preferred first choice",
      "Stop anticoagulation \u2014 VTE risk post-hip surgery is too high to stop",
      "Aspirin alone for VTE prophylaxis \u2014 insufficient for high-risk orthopedic patient"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: Margaret Chen. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: post-op pharmacy optimization \u2014 renal dosing and NSAID intervention. Key pharmacy learning: (1) Enoxaparin renal dosing: standard prophylaxis 40mg SQ daily. At CrCl <30 mL/min: reduce to 20mg daily (anti-Xa monitoring). At CrCl 30-50: package insert says 'use with caution' \u2014 clinical practice varies. For a 78yo with CrCl 42, reducing to 30mg daily or monitoring anti-Xa levels is reasonable. Enoxaparin accumulation \u2192 bleeding risk including spinal hematoma if neuraxial block used. (2) NSAID contraindication \u2014 triple threat: (a) CKD (prostaglandin-dependent renal perfusion impaired), (b) elderly (reduced GFR reserve, risk of AKI), (c) post-operative (prostaglandin inhibition impairs platelet function + increases GI bleeding risk + potential anastomotic risk). NSAIDs are contraindicated. Ketorolac in this patient = potential AKI. (3) Pharmacy intervention process: flag the order, call the orthopedic team, suggest acetaminophen scheduled 650mg q6h as equivalent analgesia. Document the intervention. (4) VTE duration: after hip fracture ORIF, evidence supports 28-35 days total anticoagulation (ACCP guidelines). Discharge on enoxaparin or transition to rivaroxaban (better oral bioavailability, once daily). Discuss with team before discharge. (5) Rivaroxaban as alternative: 10mg once daily x28-35 days \u2014 proven in RECORD1 trial for hip arthroplasty. No dose reduction needed until CrCl <30. Good option for outpatient VTE prophylaxis in this patient."
    }
  }
};
