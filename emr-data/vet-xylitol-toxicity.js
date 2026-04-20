
window.EMR_DATA = {
  "patient": {
    "name": "Bear",
    "dob": "03/23/2022",
    "age": 3,
    "sex": "Female (spayed)",
    "species": "Labrador Retriever",
    "mrn": "RDX-2025-91783",
    "pronouns": "They/Them",
    "insurance": "Trupanion Pet Insurance",
    "pcp": "Dr. Robert Kim, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "30 Minutes Ago",
    "race": "Species: Labrador Retriever",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311 (Owner: Taylor Kim)",
    "phone": "(954) 555-7869",
    "email": "bearowner@email.com",
    "emergencyContact": {
      "name": "Taylor Kim (Owner)",
      "phone": "(954) 555-9817"
    }
  },
  "problems": [
    {
      "problem": "Xylitol toxicosis \u2014 hypoglycemia phase",
      "icd": "T65.891A",
      "onset": "2024",
      "status": "Active",
      "notes": "30 minutes post-ingestion, glucose 34 mg/dL \u2014 at hypoglycemia threshold"
    },
    {
      "problem": "Acute hepatic necrosis risk \u2014 48-72 hour window",
      "icd": "K72.0",
      "onset": "2024",
      "status": "Active",
      "notes": "High-dose xylitol (>0.1g/kg) carries hepatotoxicity risk \u2014 monitor LFTs at 24 and 48h"
    }
  ],
  "medications": [
    {
      "name": "Dextrose 50% IV 0.5mL/kg bolus slowly",
      "sig": "Dilute to 25% and give slowly IV over 5 minutes \u2014 repeat as needed for glucose <60",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Dextrose 2.5% in LRS continuous infusion (maintain glucose >80)",
      "sig": "IV infusion at maintenance rate with dextrose supplementation",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "SAMe (S-Adenosylmethionine) 20mg/kg PO daily",
      "sig": "Give orally once daily \u2014 hepatoprotective agent",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "11/2024",
      "refills": 4,
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
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Ingested Sugar-Free Gum",
      "assessment": "Working diagnosis: Ingested Sugar-Free Gum",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Xylitol Toxicity Panel",
      "results": [
        {
          "test": "Blood glucose (point-of-care)",
          "value": "34",
          "unit": "mg/dL",
          "ref": "70-138",
          "flag": "L"
        },
        {
          "test": "ALT",
          "value": "62",
          "unit": "U/L",
          "ref": "10-125",
          "flag": ""
        },
        {
          "test": "ALP",
          "value": "48",
          "unit": "U/L",
          "ref": "23-212",
          "flag": ""
        },
        {
          "test": "Bilirubin total",
          "value": "0.3",
          "unit": "mg/dL",
          "ref": "0-0.4",
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
      "lot": "V1266K",
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
    "caseId": "vet-xylitol-toxicity",
    "diagnosis": "Xylitol Toxicosis \u2014 Dual-Mechanism: Hypoglycemia (Current) + Hepatotoxicity Risk (48-72 hours)",
    "acuity": 1,
    "presentation": "Ingested Sugar-Free Gum",
    "category": "toxicologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with ingested sugar-free gum. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this toxicologic presentation.",
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
      "Xylitol toxicosis \u2014 hypoglycemia + hepatotoxicity risk (correct)",
      "Insulinoma \u2014 endogenous insulin excess",
      "Other toxin \u2014 ethylene glycol",
      "Severe hypoglycemia from starvation",
      "Sepsis-induced hypoglycemia",
      "Addisonian hypoglycemia"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Ingested Sugar-Free Gum. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: xylitol toxicosis, hypoglycemia phase, hepatotoxicity anticipated. Key veterinary learning points: (1) DUAL mechanism \u2014 this is the critical teaching point: LOW DOSE xylitol (<0.1g/kg): causes profound insulin release (xylitol stimulates pancreatic beta cells in dogs but NOT humans or cats) \u2192 severe hypoglycemia in 30-60 min. HIGH DOSE xylitol (>0.1g/kg): hepatocellular necrosis at 24-72 hours \u2014 mechanism unknown, may involve zinc chelation or direct mitochondrial toxicity. Determine dose. (2) Dose calculation: sugarless gum contains 0.2-0.3g xylitol per piece. Mints: 0.5g each. 'Sugar-free' baked goods: highly variable. This dog ate ~2/3 of a pack of 30-piece gum \u2248 6g = 0.2g/kg \u2192 BOTH mechanisms at risk. (3) Management: correct hypoglycemia first (IV dextrose), then continuous glucose monitoring every 4 hours for 12 hours. Initiate hepatoprotectants (SAMe, milk thistle) even if liver values normal now. (4) Monitor ALT at 24 and 48 hours \u2014 rise indicates hepatic injury phase. Severe cases require N-acetylcysteine, hospital observation. (5) Xylitol is NOT toxic to cats \u2014 but NEVER tell a cat owner their pet is safe with xylitol to avoid confusion."
    }
  }
};
