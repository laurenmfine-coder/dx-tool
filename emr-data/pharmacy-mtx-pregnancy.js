
window.EMR_DATA = {
  "patient": {
    "name": "Marcus Johnson",
    "dob": "06/04/1998",
    "age": 27,
    "sex": "Male",
    "mrn": "RDX-2025-13310",
    "pronouns": "He/Him",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Patient on MTX for Psoriasis",
    "race": "Asian",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-5367",
    "email": "marcusjo@email.com",
    "emergencyContact": {
      "name": "David Kim (Family)",
      "phone": "(954) 555-4709"
    }
  },
  "problems": [
    {
      "problem": "Methotrexate exposure in early pregnancy \u2014 6 weeks",
      "icd": "T45.1X1A",
      "onset": "2024",
      "status": "Active",
      "notes": "Patient on MTX for psoriasis, newly discovered pregnant 6 weeks \u2014 teratogen exposure"
    },
    {
      "problem": "Psoriasis \u2014 moderate-severe, on methotrexate",
      "icd": "L40.0",
      "onset": "2021",
      "status": "Active",
      "notes": "MTX 15mg weekly for psoriasis \u2014 absolutely contraindicated in pregnancy"
    },
    {
      "problem": "Spontaneous abortion risk elevated \u2014 MTX teratogenicity",
      "icd": "O03.9",
      "onset": "2024",
      "status": "Active",
      "notes": "MTX inhibits folate metabolism \u2192 neural tube defects, craniofacial abnormalities, limb defects, spontaneous abortion"
    }
  ],
  "medications": [
    {
      "name": "Methotrexate 15mg PO weekly \u2014 STOP IMMEDIATELY",
      "sig": "DISCONTINUE \u2014 absolutely contraindicated in pregnancy. Do not take another dose.",
      "prescriber": "Dermatology",
      "start": "2021",
      "refills": 0,
      "status": "HOLD \u2014 pregnancy"
    },
    {
      "name": "Folic acid 5mg daily \u2014 start immediately",
      "sig": "High-dose folic acid may partially mitigate MTX effect on folate metabolism \u2014 start now",
      "prescriber": "OB referral",
      "start": "11/2024",
      "refills": 2,
      "status": "Active \u2014 urgent start"
    },
    {
      "name": "Cyclosporine \u2014 alternative psoriasis treatment during pregnancy",
      "sig": "Consider as bridge \u2014 safer pregnancy category than MTX",
      "prescriber": "Dermatology/OB to co-manage",
      "start": "11/2024",
      "refills": 0,
      "status": "Pending co-management"
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
      "bp": "88/58",
      "hr": 118,
      "rr": 24,
      "temp": "99.8\u00b0F",
      "spo2": "94%",
      "wt": "109 lbs",
      "ht": "5'4\"",
      "bmi": 18.7,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "109 lbs",
      "ht": "5'4\"",
      "bmi": 18.7,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "109 lbs",
      "ht": "5'4\"",
      "bmi": 18.7,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Patient on MTX for Psoriasis",
      "assessment": "Working diagnosis: Patient on MTX for Psoriasis",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Pregnancy Labs",
      "results": [
        {
          "test": "Urine hCG",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Quantitative beta-hCG",
          "value": "14,200",
          "unit": "mIU/mL",
          "ref": "Varies by gestational age",
          "flag": ""
        },
        {
          "test": "CBC \u2014 WBC",
          "value": "6.8",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": ""
        },
        {
          "test": "ALT",
          "value": "28",
          "unit": "U/L",
          "ref": "7-56",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "0.8",
          "unit": "mg/dL",
          "ref": "0.5-1.1 pregnant",
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
      "lot": "V6427K",
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
    "caseId": "pharmacy-mtx-pregnancy",
    "diagnosis": "Methotrexate in Pregnancy \u2014 Absolute Contraindication, Urgent Teratogen Counseling and Discontinuation",
    "acuity": 1,
    "presentation": "Patient on MTX for Psoriasis",
    "category": "obstetric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with patient on mtx for psoriasis. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this obstetric presentation.",
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
      "MTX teratogen exposure \u2014 stop immediately, urgent OB referral (correct)",
      "Continue MTX at reduced dose \u2014 NEVER, no safe dose in pregnancy",
      "Wait until second trimester to discuss \u2014 INCORRECT, stop now",
      "Reassure patient MTX is safe in first trimester \u2014 absolutely incorrect",
      "Switch to leflunomide \u2014 also teratogenic category X",
      "MTX washout before conception should have occurred \u2014 counseling failure"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: Patient on MTX for Psoriasis. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: MTX teratogen exposure at 6 weeks \u2014 pharmacist's immediate action saves future complications. Key pharmacy learning: (1) MTX mechanism of teratogenicity: dihydrofolate reductase inhibitor \u2192 folate depletion \u2192 impaired DNA synthesis \u2192 teratogenicity. Peak risk: weeks 4-10 (organogenesis). This patient at week 6 is in the highest-risk window. MTX is FDA Pregnancy Category X (fetal risk clearly exceeds benefit). (2) Mandatory counseling before MTX prescribing: all patients on MTX must receive contraception counseling. Women: reliable contraception required DURING and for 1 menstrual cycle (at least 1 month) AFTER stopping MTX. Men: contraception for 3 months after stopping MTX (affects sperm). This counseling failure allowed this exposure. (3) Pharmacist action: call the prescriber immediately, call the OB/GYN immediately, document counseling, stop MTX prescription without another refill. Time is critical \u2014 every additional MTX dose increases fetal risk. (4) Folic acid 5mg (high dose): may partially mitigate folate-deficiency teratogenicity but does NOT make MTX safe. It is a harm reduction measure while the patient seeks OB consultation. (5) REMS programs: some high-risk teratogens have formal REMS (Risk Evaluation and Mitigation Strategy) programs with mandatory pregnancy testing and contraception verification (e.g., isotretinoin = iPLEDGE). MTX does not have a formal REMS but should."
    }
  }
};
