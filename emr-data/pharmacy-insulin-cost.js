
window.EMR_DATA = {
  "patient": {
    "name": "Miguel Santos",
    "dob": "03/15/1978",
    "age": 47,
    "sex": "Male",
    "mrn": "RDX-2025-79458",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Patient Not Filling Insulin 2 Months",
    "race": "White",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-3260",
    "email": "miguelsa@email.com",
    "emergencyContact": {
      "name": "Raj Sharma (Family)",
      "phone": "(954) 555-4411"
    }
  },
  "problems": [
    {
      "problem": "Insulin non-adherence \u2014 cost barrier, A1c 11.4%",
      "icd": "E11.65",
      "onset": "2024",
      "status": "Active",
      "notes": "Patient not filling insulin for 2 months \u2014 out-of-pocket cost $380/vial without insurance"
    },
    {
      "problem": "Type 1 diabetes \u2014 insulin-dependent",
      "icd": "E10.9",
      "onset": "2019",
      "status": "Active",
      "notes": "Cannot survive without insulin \u2014 this is a life-threatening access issue"
    },
    {
      "problem": "Insurance gap \u2014 lost employer coverage",
      "icd": "Z59.7",
      "onset": "2024",
      "status": "Active",
      "notes": "Laid off 3 months ago \u2014 COBRA lapsed. Marketplace enrollment window open."
    }
  ],
  "medications": [
    {
      "name": "Insulin glargine U-100 (Lantus) \u2014 out of stock x2 months",
      "sig": "Patient reports taking 'half doses' to stretch supply",
      "prescriber": "Dr. Castillo",
      "start": "2019",
      "refills": 0,
      "status": "Not filling \u2014 cost"
    },
    {
      "name": "Insulin lispro (Humalog) \u2014 also unaffordable",
      "sig": "Patient using expired pens from prior supply",
      "prescriber": "Dr. Castillo",
      "start": "2019",
      "refills": 0,
      "status": "Using expired supply"
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
      "wt": "83 lbs",
      "ht": "5'11\"",
      "bmi": 11.6,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "83 lbs",
      "ht": "5'11\"",
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
      "wt": "83 lbs",
      "ht": "5'11\"",
      "bmi": 11.6,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Patient Not Filling Insulin 2 Months",
      "assessment": "Working diagnosis: Patient Not Filling Insulin 2 Months",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Diabetes Monitoring",
      "results": [
        {
          "test": "HbA1c",
          "value": "11.4",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "Fasting glucose",
          "value": "342",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "Ketones (urine)",
          "value": "Trace",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.1",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        },
        {
          "test": "Potassium",
          "value": "4.2",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
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
      "lot": "V9077K",
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
    "caseId": "pharmacy-insulin-cost",
    "diagnosis": "Insulin Non-Adherence from Cost Barrier \u2014 Pharmacist Intervention to Prevent DKA",
    "acuity": 3,
    "presentation": "Patient Not Filling Insulin 2 Months",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with patient not filling insulin 2 months. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this endocrine presentation.",
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
      "Insulin cost barrier \u2014 pharmacist patient advocacy and access programs (correct)",
      "Patient non-compliance \u2014 this framing misses the social determinant",
      "Intensify insulin regimen \u2014 inappropriate without first solving access",
      "Switch to oral medications \u2014 T1DM cannot use oral medications alone",
      "Accept poor control \u2014 dangerous, DKA risk is immediate",
      "Hospitalize for glucose control \u2014 unnecessary if access problem is solved"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: Patient Not Filling Insulin 2 Months. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: insulin non-adherence from cost barrier \u2014 pharmacist intervention point. Key pharmacy learning: (1) Manufacturer programs: Eli Lilly ($35/month insulin cap), Novo Nordisk (patient assistance program), Sanofi (Insulins Valyou savings program). These programs provide insulin free or nearly free for uninsured/underinsured patients. Pharmacist initiates enrollment \u2014 this takes 10-15 minutes. (2) Walmart ReliOn insulin: OTC human insulins (NPH, Regular) available for $25/vial. Not ideal for T1DM (human insulin has different PK than analogs) but it prevents DKA until access is restored. Pharmacist counsels on conversion: glargine \u2192 NPH requires different timing and dosing education. (3) Marketplace/ACA enrollment: pharmacist identifies open enrollment or special enrollment period (loss of employer coverage = special enrollment 60-day window). Navigate to Healthcare.gov \u2014 many patients don't know this exists. (4) Ketones trace: this patient is days away from DKA. Urgent intervention, not next week follow-up. (5) The pharmacist's documentation: 'Patient counseled on Lilly insulin assistance program \u2014 enrollment initiated during visit. Patient provided 1-month ReliOn NPH as bridge. Prescriber notified of access issue. Marketplace application assistance provided.' This note protects the pharmacist and creates a paper trail for the system."
    }
  }
};
