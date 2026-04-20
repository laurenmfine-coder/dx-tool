
window.EMR_DATA = {
  "patient": {
    "name": "Rocky",
    "dob": "02/24/2018",
    "age": 7,
    "sex": "Male (neutered)",
    "species": "Labrador Retriever",
    "mrn": "RDX-2025-18627",
    "pronouns": "They/Them",
    "insurance": "ASPCA Pet Insurance",
    "pcp": "Dr. Maria Santos, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Pale Gums",
    "race": "Species: Labrador Retriever",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021 (Owner: Miguel Santos)",
    "phone": "(954) 555-2965",
    "email": "rockyowner@email.com",
    "emergencyContact": {
      "name": "Miguel Santos (Owner)",
      "phone": "(954) 555-4146"
    }
  },
  "problems": [
    {
      "problem": "Anticoagulant rodenticide toxicity \u2014 second-generation (brodifacoum)",
      "icd": "T60.4X1A",
      "onset": "2024",
      "status": "Active",
      "notes": "Max, 4yr Labrador \u2014 found bag of rodenticide 3 days ago. Now: epistaxis, hematuria, hemoptysis. PT/PTT markedly prolonged. Second-generation rodenticides have 3-6 week duration of action."
    },
    {
      "problem": "Active internal hemorrhage \u2014 hemoptysis and hematuria",
      "icd": "R04.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Bleeding from multiple sites \u2014 coagulopathy from vitamin K epoxide reductase inhibition. Clotting factors II, VII, IX, X depleted."
    },
    {
      "problem": "Vitamin K1 therapy \u2014 long course required for second-generation rodenticide",
      "icd": "T60.4X1A",
      "onset": "2024",
      "status": "Active",
      "notes": "Vitamin K1 4-8 weeks for brodifacoum (second-gen). First-gen warfarin-based rodenticides: 2-3 weeks. PT recheck 48h after stopping vitamin K to confirm."
    }
  ],
  "medications": [
    {
      "name": "Vitamin K1 (phytonadione) 2.5mg/kg PO BID \u2014 rodenticide antidote",
      "sig": "Give orally with a small fatty meal \u2014 fat enhances absorption. SQ injection is an alternative but IM injection risks hematoma at injection site.",
      "prescriber": "Veterinarian",
      "start": "2024",
      "refills": 2,
      "status": "Active \u2014 4-6 week course"
    },
    {
      "name": "Fresh frozen plasma 10-15mL/kg IV \u2014 if active life-threatening bleeding",
      "sig": "FFP for acute coagulopathy with active hemorrhage \u2014 replaces clotting factors immediately while vitamin K1 takes 6-12h to begin working.",
      "prescriber": "Veterinarian",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 acute hemorrhage"
    },
    {
      "name": "Cage rest \u2014 minimize hemorrhage risk",
      "sig": "Strict cage rest until coagulopathy resolves. No roughhousing or exercise.",
      "prescriber": "Veterinarian",
      "start": "2024",
      "refills": 0,
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
      "bp": "145/95",
      "hr": 148,
      "rr": 38,
      "temp": "103.8\u00b0F",
      "spo2": "96%",
      "wt": "28 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Hospital"
    },
    {
      "date": "08/20/2024",
      "bp": "128/80",
      "hr": 92,
      "rr": 22,
      "temp": "101.5\u00b0F",
      "spo2": "99%",
      "wt": "29.5 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Clinic"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Epistaxis, Coughing Blood",
      "assessment": "Working diagnosis: Epistaxis, Coughing Blood",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Rodenticide Toxicity Panel",
      "results": [
        {
          "test": "PT (prothrombin time)",
          "value": ">120",
          "unit": "seconds",
          "ref": "6-8 seconds",
          "flag": "H"
        },
        {
          "test": "PTT (partial thromboplastin time)",
          "value": ">120",
          "unit": "seconds",
          "ref": "8-12 seconds",
          "flag": "H"
        },
        {
          "test": "PCV",
          "value": "28",
          "unit": "%",
          "ref": "37-55%",
          "flag": "L"
        },
        {
          "test": "Platelet count",
          "value": "320",
          "unit": "K/\u03bcL",
          "ref": "200-500",
          "flag": ""
        },
        {
          "test": "Urine \u2014 hematuria",
          "value": "Gross hematuria",
          "unit": "",
          "ref": "Clear",
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
      "lot": "V1088K",
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
    "caseId": "vet-rodenticide-coagulopathy",
    "diagnosis": "Anticoagulant Rodenticide Toxicity in Dog \u2014 Vitamin K1 Therapy, Coagulopathy Management",
    "acuity": 1,
    "presentation": "Epistaxis, Coughing Blood",
    "category": "hematologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with epistaxis, coughing blood. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did this start?",
      "Has it been getting better, worse, or the same?",
      "What makes it better or worse?",
      "Rate the severity 0-10.",
      "Any associated symptoms?",
      "Any prior episodes?",
      "What medications are you taking?",
      "Any allergies?",
      "Any relevant family history?",
      "Any recent travel or sick contacts?",
      "Any prior surgeries or hospitalizations?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this hematologic presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Species-appropriate physical exam",
      "Vital signs (species-normal ranges)",
      "Weight and body condition scoring",
      "Auscultation (heart, lungs, GI for ruminants)",
      "Abdominal palpation",
      "Mucous membrane color and CRT",
      "Neurological assessment",
      "Pain scoring (species-appropriate scale)"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Anticoagulant rodenticide toxicity \u2014 prolonged PT/PTT, exposure history (correct)",
      "Von Willebrand disease \u2014 normal PT/PTT; platelet function defect",
      "Thrombocytopenic coagulopathy \u2014 platelet count normal; clotting factors are depleted",
      "DIC \u2014 underlying trigger required; no sepsis or other DIC cause; exposure history is key",
      "Immune-mediated thrombocytopenia \u2014 platelets normal here; PT/PTT prolonged = factor deficiency",
      "Liver failure coagulopathy \u2014 PT/PTT prolonged in liver failure; exposure history distinguishes"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Epistaxis, Coughing Blood. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: anticoagulant rodenticide toxicity \u2014 brodifacoum. IPE key learning: (1) Mechanism: second-generation anticoagulant rodenticides (brodifacoum, bromadiolone) inhibit vitamin K epoxide reductase \u2192 depletes vitamin K-dependent clotting factors (II, VII, IX, X). Identical mechanism to warfarin \u2014 but duration of action is 4-8 weeks vs warfarin's days. (2) Vitamin K1 (phytonadione) is the antidote: not vitamin K3 (menadione) \u2014 must be K1. Give PO with fatty food for best absorption. Duration: 4-6 weeks for second-gen rodenticides. PT recheck 48h AFTER stopping \u2014 if prolonged, continue another 2 weeks. (3) PT/PTT prolonged with normal platelets = clotting factor deficiency (rodenticide, liver disease, inherited factor deficiency). Normal PT/PTT with low platelets = thrombocytopenia (ITP, ehrlichiosis). (4) IPE connection \u2014 human anticoagulation: warfarin reversal with vitamin K1 + FFP is identical in humans and dogs. Mechanism, monitoring (PT/INR), and reversal are shared knowledge. (5) One Health: accidental human anticoagulant rodenticide exposure does occur \u2014 presenting with unexplained bleeding and prolonged coagulation studies. Medical providers should ask about rodenticide exposure in unexplained coagulopathy."
    }
  }
};
