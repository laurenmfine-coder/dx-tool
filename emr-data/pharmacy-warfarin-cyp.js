
window.EMR_DATA = {
  "patient": {
    "name": "Ben Tran",
    "dob": "10/07/1968",
    "age": 57,
    "sex": "Male",
    "mrn": "RDX-2025-93959",
    "pronouns": "He/Him",
    "insurance": "Aetna HMO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "New Warfarin Rx",
    "race": "Middle Eastern",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-6898",
    "email": "bentran@email.com",
    "emergencyContact": {
      "name": "Lisa Chen (Family)",
      "phone": "(954) 555-8115"
    }
  },
  "problems": [
    {
      "problem": "Atrial fibrillation \u2014 on warfarin",
      "icd": "I48.0",
      "onset": "2020",
      "status": "Active",
      "notes": "INR therapeutic 2.0-3.0 target on warfarin 5mg daily"
    },
    {
      "problem": "Ventricular arrhythmia \u2014 on amiodarone",
      "icd": "I49.3",
      "onset": "2023",
      "status": "Active",
      "notes": "Amiodarone 200mg daily \u2014 known CYP2C9 and CYP3A4 inhibitor"
    },
    {
      "problem": "Community-acquired pneumonia \u2014 requiring clarithromycin",
      "icd": "J18.9",
      "onset": "2024",
      "status": "Active",
      "notes": "New prescription today \u2014 strong CYP3A4 inhibitor"
    }
  ],
  "medications": [
    {
      "name": "Warfarin 5mg daily",
      "sig": "Take 1 tablet by mouth daily \u2014 INR monitoring required",
      "prescriber": "Dr. Cardiology",
      "start": "03/2020",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Amiodarone 200mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Cardiology",
      "start": "08/2023",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Clarithromycin 500mg BID x7 days (NEW \u2014 DO NOT FILL YET)",
      "sig": "Take 1 tablet twice daily for 7 days",
      "prescriber": "Dr. Urgent Care",
      "start": "11/2024",
      "refills": 0,
      "status": "HOLD \u2014 interaction review required"
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
      "wt": "83 lbs",
      "ht": "5'7\"",
      "bmi": 13.0,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "83 lbs",
      "ht": "5'7\"",
      "bmi": 13.0,
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
      "ht": "5'7\"",
      "bmi": 13.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for New Warfarin Rx",
      "assessment": "Working diagnosis: New Warfarin Rx",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/15/2024",
      "panel": "INR Monitoring",
      "results": [
        {
          "test": "INR",
          "value": "2.4",
          "unit": "",
          "ref": "2.0-3.0",
          "flag": ""
        },
        {
          "test": "PT",
          "value": "28.2",
          "unit": "sec",
          "ref": "11-13.5",
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
      "lot": "V5372K",
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
    "caseId": "pharmacy-warfarin-cyp",
    "diagnosis": "Clinically Significant Drug-Drug Interaction: Warfarin + Amiodarone + Clarithromycin (Triple CYP2C9/3A4 Inhibition)",
    "acuity": 2,
    "presentation": "New Warfarin Rx",
    "category": "pharmacologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with new warfarin rx. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Dangerous CYP interaction: warfarin + amiodarone + clarithromycin (correct)",
      "Safe to dispense with dose adjustment",
      "Alternative antibiotic needed (azithromycin is safer)",
      "INR monitoring only is sufficient",
      "Discontinue amiodarone during antibiotic course",
      "No interaction \u2014 proceed with prescription"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: New Warfarin Rx. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: triple drug interaction \u2014 warfarin toxicity risk from amiodarone + clarithromycin. Key pharmacy learning points: (1) Mechanism breakdown: Amiodarone is a potent CYP2C9 AND CYP3A4 inhibitor \u2014 it increases warfarin (S-warfarin via 2C9) AUC by 30-50% alone. Clarithromycin is a strong CYP3A4 inhibitor affecting R-warfarin. Together: expected INR increase of 50-100% from baseline. Current INR 2.4 \u2192 expected rise to 4.0-5.0+ = bleeding risk. (2) Recommendation: DO NOT dispense clarithromycin. Call prescriber. Suggest azithromycin (not a CYP3A4 inhibitor) as alternative. If clarithromycin is essential, warfarin dose must be reduced 25-50% AND INR rechecked in 3-4 days. (3) Time course: amiodarone has an extremely long half-life (40-55 days) \u2014 its CYP inhibition persists even after stopping. This interaction risk is ongoing for weeks to months. (4) Clinical documentation: flag the interaction, call the prescriber, document the conversation. The pharmacist's intervention prevents a potential intracranial hemorrhage. (5) This is precisely the scenario where the pharmacist's clinical training prevents harm that no other provider would catch."
    }
  }
};
