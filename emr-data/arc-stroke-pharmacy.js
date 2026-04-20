
window.EMR_DATA = {
  "patient": {
    "name": "Lisa Chen",
    "dob": "06/27/1951",
    "age": 74,
    "sex": "Female",
    "mrn": "RDX-2025-91836",
    "pronouns": "She/Her",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "James Okoye",
    "race": "Middle Eastern",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-6036",
    "email": "lisachen@email.com",
    "emergencyContact": {
      "name": "Carmen Rivera (Family)",
      "phone": "(954) 555-3806"
    }
  },
  "problems": [
    {
      "problem": "Ischemic stroke \u2014 AFib \u2014 anticoagulation timing decision",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "James Okoye. AFib identified. When to start anticoagulation? Hemorrhagic transformation risk vs stroke prevention."
    },
    {
      "problem": "Drug interaction \u2014 amiodarone + atorvastatin",
      "icd": "T46.2X5A",
      "onset": "2024",
      "status": "Active",
      "notes": "Amiodarone inhibits CYP3A4 \u2192 increased atorvastatin exposure \u2192 myopathy risk. Dose cap needed."
    },
    {
      "problem": "Statin intensity \u2014 high-intensity required for stroke prevention",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "Post-stroke statin reduces recurrent stroke 25%. High-intensity (atorvastatin 80mg) recommended."
    }
  ],
  "medications": [
    {
      "name": "Aspirin 325mg daily (loading) then 81mg \u2014 bridge until anticoagulation starts",
      "sig": "Antiplatelet bridge during anticoagulation decision period",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS (reduced from 80mg \u2014 amiodarone interaction)",
      "sig": "Amiodarone is CYP3A4 inhibitor \u2014 atorvastatin 80mg + amiodarone = excessive statin exposure. Cap at 40mg.",
      "prescriber": "Pharmacy recommendation",
      "start": "11/2024",
      "refills": 5,
      "status": "Active \u2014 dose adjusted"
    },
    {
      "name": "Apixaban 2.5mg BID (starting day 14 \u2014 small/moderate infarct)",
      "sig": "Start at day 14 per 1-3-6-12 rule \u2014 small infarct, day 14 appropriate",
      "prescriber": "Neurology/Pharmacy",
      "start": "11/2024",
      "refills": 3,
      "status": "Scheduled \u2014 start day 14"
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
      "wt": "131 lbs",
      "ht": "5'11\"",
      "bmi": 18.3,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "131 lbs",
      "ht": "5'11\"",
      "bmi": 18.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "131 lbs",
      "ht": "5'11\"",
      "bmi": 18.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for James Okoye",
      "assessment": "Working diagnosis: James Okoye",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/23/2024",
      "panel": "Post-Stroke Day 5 Pharmacy Monitoring",
      "results": [
        {
          "test": "LDL",
          "value": "148",
          "unit": "mg/dL",
          "ref": "<70 for stroke patient",
          "flag": "H"
        },
        {
          "test": "INR",
          "value": "1.0",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": ""
        },
        {
          "test": "CrCl (for apixaban dosing)",
          "value": "68",
          "unit": "mL/min",
          "ref": "",
          "flag": ""
        },
        {
          "test": "CK baseline (amiodarone + statin)",
          "value": "88",
          "unit": "U/L",
          "ref": "22-198",
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
      "lot": "V6983K",
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
    "caseId": "arc-stroke-pharmacy",
    "diagnosis": "Post-Stroke Day 5 \u2014 Pharmacy: Anticoagulation Timing in AFib, Statin Intensity, Drug Interactions",
    "acuity": 3,
    "presentation": "James Okoye",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with james okoye. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this neurologic presentation.",
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
      "Anticoagulation day 14, atorvastatin dose adjusted for amiodarone (correct)",
      "Anticoagulate immediately \u2014 hemorrhagic transformation risk too high in first 14 days",
      "Never anticoagulate after hemorrhagic stroke \u2014 this is ischemic, not hemorrhagic",
      "Atorvastatin 80mg safe with amiodarone \u2014 INCORRECT, CYP3A4 interaction is real",
      "No statin needed \u2014 INCORRECT, high-intensity statin reduces recurrent stroke 25%",
      "Apixaban dose reduction not needed \u2014 check renal function first for dose criteria"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: James Okoye. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: post-stroke pharmacy \u2014 AFib anticoagulation timing, statin interaction. Key pharmacy learning: (1) The 1-3-6-12 rule for AFib anticoagulation post-stroke: TIA = day 1. Small non-disabling stroke = day 3. Moderate stroke = day 6. Large/disabling stroke = day 12-14. This patient has moderate stroke (NIHSS 14) \u2192 start apixaban day 6-14. Day 14 is appropriate. (2) Rationale for waiting: anticoagulation in first 3 days after moderate infarct carries hemorrhagic transformation risk (infarcted tissue is fragile, blood-brain barrier disrupted). Risk-benefit favors waiting. (3) Atorvastatin + amiodarone CYP3A4 interaction: amiodarone is a moderate-strong CYP3A4 inhibitor \u2192 atorvastatin AUC increases 2-3x \u2192 myopathy/rhabdomyolysis risk. Atorvastatin dose cap when on amiodarone: 40mg (some sources say 20mg for simvastatin). Rosuvastatin is less CYP3A4-dependent and safer with amiodarone \u2014 may be better long-term option. (4) Apixaban dose criteria (dose reduction to 2.5mg BID): \u22652 of: age \u226580, weight \u226460kg, creatinine \u22651.5 mg/dL. One criterion present \u2192 standard dose 5mg BID. (5) LDL 148 on no statin: needs high-intensity therapy. Atorvastatin 40mg (adjusted for amiodarone) reduces LDL ~40-50%. Target LDL <70 mg/dL for stroke patient. Recheck at 6 weeks."
    }
  }
};
