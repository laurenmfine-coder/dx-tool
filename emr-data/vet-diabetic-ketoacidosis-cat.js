
window.EMR_DATA = {
  "patient": {
    "name": "Felix",
    "dob": "12/01/2013",
    "age": 12,
    "sex": "Male (neutered)",
    "species": "Domestic Shorthair Cat",
    "mrn": "RDX-2025-20170",
    "pronouns": "They/Them",
    "insurance": "Trupanion Pet Insurance",
    "pcp": "Dr. Maria Santos, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Diabetic History",
    "race": "Species: Domestic Shorthair Cat",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311 (Owner: David Kim)",
    "phone": "(954) 555-4981",
    "email": "felixowner@email.com",
    "emergencyContact": {
      "name": "David Kim (Owner)",
      "phone": "(954) 555-4783"
    }
  },
  "problems": [
    {
      "problem": "Diabetic ketoacidosis \u2014 feline",
      "icd": "E10.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Known diabetic cat. Vomiting 3 days, not eating. Glucose 582, ketones 4+. pH 7.19."
    },
    {
      "problem": "Pancreatitis \u2014 precipitant for DKA",
      "icd": "K85.9",
      "onset": "2024",
      "status": "Active",
      "notes": "fPLI elevated \u2014 pancreatitis is most common DKA trigger in cats"
    },
    {
      "problem": "Hepatic lipidosis \u2014 risk from anorexia",
      "icd": "K76.0",
      "onset": "2024",
      "status": "Active",
      "notes": "3 days anorexia in obese cat \u2014 hepatic lipidosis risk is high. Nutritional support critical."
    }
  ],
  "medications": [
    {
      "name": "0.9% NaCl at 60mL/kg/day IV (maintenance + dehydration correction)",
      "sig": "IV infusion \u2014 avoid LRS until potassium normalized (LRS contains K+)",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Regular insulin 0.1 unit/kg/hr CRI (0.5 units/hr for 5kg cat)",
      "sig": "Constant rate infusion \u2014 feline DKA protocol. Target glucose 250-300 mg/dL initially.",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "KCl supplementation \u2014 add to fluids based on potassium level",
      "sig": "Supplement as per potassium sliding scale \u2014 critical, hypokalemia fatal in cats",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Mirtazapine 1.88mg (1/8 of 15mg tablet) q72h \u2014 appetite stimulant",
      "sig": "Once every 72 hours \u2014 avoid hepatic lipidosis from prolonged anorexia",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 2,
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
      "bp": "N/A",
      "hr": 220,
      "rr": 40,
      "temp": "104.2\u00b0F",
      "spo2": "95%",
      "wt": "4.2 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Hospital"
    },
    {
      "date": "09/10/2024",
      "bp": "N/A",
      "hr": 185,
      "rr": 28,
      "temp": "101.5\u00b0F",
      "spo2": "99%",
      "wt": "4.6 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Clinic"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Vomiting, Not Eating",
      "assessment": "Working diagnosis: Vomiting, Not Eating",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Feline DKA Panel",
      "results": [
        {
          "test": "Blood glucose",
          "value": "582",
          "unit": "mg/dL",
          "ref": "70-120",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "2.8",
          "unit": "mEq/L",
          "ref": "3.5-5.5",
          "flag": "L"
        },
        {
          "test": "pH (venous)",
          "value": "7.19",
          "unit": "",
          "ref": "7.32-7.42",
          "flag": "L"
        },
        {
          "test": "HCO3",
          "value": "8",
          "unit": "mEq/L",
          "ref": "18-24",
          "flag": "L"
        },
        {
          "test": "Urine ketones",
          "value": "4+",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "fPLI (feline pancreatic lipase)",
          "value": "7.8",
          "unit": "\u03bcg/L",
          "ref": "<3.5",
          "flag": "H"
        },
        {
          "test": "ALT",
          "value": "188",
          "unit": "U/L",
          "ref": "10-100",
          "flag": "H"
        },
        {
          "test": "Phosphorus",
          "value": "2.1",
          "unit": "mg/dL",
          "ref": "3.1-7.5",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Abdominal Ultrasound",
      "indication": "DKA, elevated fPLI, vomiting",
      "findings": "Pancreas: mildly thickened with surrounding hyperechoic mesentery \u2014 consistent with pancreatitis. Liver: diffusely hyperechoic, compatible with hepatic lipidosis changes. Kidneys: normal. No effusion.",
      "impression": "Ultrasound supports concurrent pancreatitis and early hepatic lipidosis. These are common DKA precipitants and complications in cats."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V6961K",
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
    "caseId": "vet-diabetic-ketoacidosis-cat",
    "diagnosis": "Feline Diabetic Ketoacidosis \u2014 Concurrent Pancreatitis as Precipitant",
    "acuity": 2,
    "presentation": "Vomiting, Not Eating",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with vomiting, not eating. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this endocrine presentation.",
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
      "Feline DKA \u2014 pancreatitis precipitant (correct)",
      "Hyperosmolar hyperglycemic state \u2014 ketones absent in HHS",
      "Hepatic lipidosis without DKA \u2014 concurrent, but DKA is primary",
      "Hyperthyroidism causing hyperglycemia \u2014 T4 pending",
      "Stress hyperglycemia \u2014 glucose 582 far exceeds stress levels in cats",
      "Diabetic hyperosmolar crisis \u2014 bicarbonate depleted, confirming DKA not HHS"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Vomiting, Not Eating. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: feline DKA from pancreatitis. Key vet learning: (1) Feline diabetes is unique: cats are TYPE 2 (insulin-resistant) not type 1. Obesity + diet drive it. 30-40% go into diabetic remission with strict low-carb diet and weight loss \u2014 this is unique to cats among companion animals and clinically exploitable. (2) Hypokalemia in feline DKA: acidosis drives K+ extracellularly \u2192 serum K+ appears normal or falsely elevated. Insulin treatment drives K+ intracellularly rapidly in cats \u2192 SEVERE hypokalemia develops. Fatal hypokalemic cardiomyopathy risk. Supplement K+ aggressively BEFORE normalizing glucose. Target K+ >3.5 before continuing full insulin dose. (3) Pancreatitis + DKA: chicken-and-egg. Pancreatitis \u2192 stress response \u2192 insulin resistance \u2192 DKA. DKA \u2192 systemic inflammation \u2192 pancreatitis. Treat both. fPLI is the most sensitive/specific feline pancreatitis test. (4) Hepatic lipidosis: a fat cat not eating for >72 hours \u2192 liver metabolizes body fat for fuel \u2192 fatty infiltration \u2192 hepatocellular dysfunction. Prevent with nutrition support (syringe feed or NE tube if not eating). (5) Insulin CRI target: do NOT normalize glucose rapidly \u2014 target 250-300 mg/dL initially to avoid cerebral edema and hypokalemia. Transition to long-acting insulin when eating and ketones resolved."
    }
  }
};
