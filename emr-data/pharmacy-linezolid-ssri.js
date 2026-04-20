
window.EMR_DATA = {
  "patient": {
    "name": "Alex Morgan",
    "dob": "03/09/1974",
    "age": 51,
    "sex": "Non-binary",
    "mrn": "RDX-2025-92023",
    "pronouns": "They/Them",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Physician Asks: Linezolid Safe with Sertraline?",
    "race": "American Indian or Alaska Native",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-7974",
    "email": "alexmorg@email.com",
    "emergencyContact": {
      "name": "Sarah Kim (Family)",
      "phone": "(954) 555-5875"
    }
  },
  "problems": [
    {
      "problem": "VRE bacteremia \u2014 requiring linezolid",
      "icd": "A49.89",
      "onset": "2024",
      "status": "Active",
      "notes": "MRSA coverage insufficient \u2014 VRE isolated from blood culture"
    },
    {
      "problem": "Major depressive disorder \u2014 on sertraline",
      "icd": "F32.1",
      "onset": "2021",
      "status": "Active",
      "notes": "Sertraline 150mg daily \u2014 SSRI, serotonergic agent"
    },
    {
      "problem": "Serotonin syndrome risk \u2014 if combination given",
      "icd": "T43.221A",
      "onset": "2024",
      "status": "Active",
      "notes": "Linezolid is a reversible MAO inhibitor \u2014 combination is potentially fatal"
    }
  ],
  "medications": [
    {
      "name": "Sertraline 150mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Psychiatry",
      "start": "2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Linezolid 600mg IV BID (PROPOSED \u2014 HOLD)",
      "sig": "IV infusion every 12 hours \u2014 HOLD pending pharmacy review",
      "prescriber": "ID team",
      "start": "11/2024",
      "refills": 0,
      "status": "HOLD \u2014 serotonin syndrome risk"
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
      "wt": "110 lbs",
      "ht": "5'7\"",
      "bmi": 17.2,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "110 lbs",
      "ht": "5'7\"",
      "bmi": 17.2,
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
      "ht": "5'7\"",
      "bmi": 17.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Physician Asks: Linezolid Safe with Sertraline?",
      "assessment": "Working diagnosis: Physician Asks: Linezolid Safe with Sertraline?",
      "plan": "Referral to pharmacy. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Blood Culture \u2014 VRE",
      "results": [
        {
          "test": "Blood culture x2",
          "value": "Enterococcus faecium \u2014 Vancomycin-resistant (VRE)",
          "unit": "",
          "ref": "No growth",
          "flag": "H"
        },
        {
          "test": "Linezolid susceptibility",
          "value": "Susceptible (MIC 1)",
          "unit": "",
          "ref": "\u22642",
          "flag": ""
        },
        {
          "test": "Daptomycin susceptibility",
          "value": "Susceptible (MIC 1)",
          "unit": "",
          "ref": "\u22644",
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
      "lot": "V6617K",
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
    "caseId": "pharmacy-linezolid-ssri",
    "diagnosis": "Contraindicated Drug Combination: Linezolid + Sertraline \u2014 Serotonin Syndrome Risk",
    "acuity": 2,
    "presentation": "Physician Asks: Linezolid Safe with Sertraline?",
    "category": "pharmacologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with physician asks: linezolid safe with sertraline?. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Linezolid contraindicated with sertraline \u2014 use daptomycin instead (correct)",
      "Linezolid safe with careful monitoring",
      "Sertraline must be discontinued and replaced",
      "Wait 14 days (MAOi washout) before starting linezolid",
      "Reduce sertraline dose to allow linezolid",
      "Linezolid + sertraline with serotonin syndrome rescue plan"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pharmacy case with chief complaint: Physician Asks: Linezolid Safe with Sertraline?. What are the most important questions for a pharmacy to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pharmacy perspective, what is the most critical finding that narrows this differential? What is the pharmacy-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pharmacy's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: contraindicated combination \u2014 linezolid + sertraline = high serotonin syndrome risk. Key pharmacy learning points: (1) Mechanism: linezolid is a weak, reversible MAO-A inhibitor. SSRIs increase synaptic serotonin. MAO-A + SSRI = dramatic serotonin accumulation \u2192 Hunter criteria for serotonin syndrome: agitation, myoclonus, hyperreflexia, clonus, diaphoresis, tremor \u2192 can progress to hyperthermia, rhabdomyolysis, DIC, death. (2) Recommendation: use DAPTOMYCIN instead of linezolid for VRE bacteremia. Daptomycin 6mg/kg IV daily \u2014 no serotonergic interaction. Check susceptibility (already susceptible in this case). (3) If linezolid is truly the only option: discontinue sertraline and wait 2 weeks (5 half-lives). But 2-week washout is not practical in bacteremia. Daptomycin is the correct answer. (4) Other VRE options: tigecycline, oritavancin, telavancin \u2014 but daptomycin is first-line for bacteremia. (5) The pharmacist calling the ID team with this recommendation is preventing a potentially fatal drug interaction."
    }
  }
};
