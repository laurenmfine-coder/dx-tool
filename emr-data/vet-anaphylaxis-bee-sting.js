
window.EMR_DATA = {
  "patient": {
    "name": "Daisy",
    "dob": "11/28/2016",
    "age": 9,
    "sex": "Male (neutered)",
    "species": "Labrador Retriever",
    "mrn": "RDX-2025-12072",
    "pronouns": "They/Them",
    "insurance": "Owner Pay \u2014 No Insurance",
    "pcp": "Dr. James Rodriguez, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Vomiting After Outdoor Time",
    "race": "Species: Labrador Retriever",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025 (Owner: Sarah Kim)",
    "phone": "(954) 555-1919",
    "email": "daisyowner@email.com",
    "emergencyContact": {
      "name": "Sarah Kim (Owner)",
      "phone": "(954) 555-8599"
    }
  },
  "problems": [
    {
      "problem": "Anaphylaxis \u2014 bee sting, IgE-mediated",
      "icd": "T63.441A",
      "onset": "2024",
      "status": "Active",
      "notes": "Acute facial swelling, urticaria, vomiting 20 min post-sting. HR 148, BP 78/50."
    },
    {
      "problem": "Hypotension \u2014 distributive shock",
      "icd": "R57.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Splanchnic vasodilation from histamine \u2014 canine anaphylaxis is GI-dominant"
    },
    {
      "problem": "Hemoconcentration \u2014 fluid shift from vasodilation",
      "icd": "D75.1",
      "onset": "2024",
      "status": "Active",
      "notes": "PCV 58% \u2014 hemoconcentration from plasma extravasation"
    }
  ],
  "medications": [
    {
      "name": "Epinephrine 0.01mg/kg IM (0.3mL of 1:1000) lateral thigh \u2014 STAT",
      "sig": "IM injection lateral thigh \u2014 first-line for anaphylaxis. Repeat in 5-10 min if no response.",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "STAT"
    },
    {
      "name": "Diphenhydramine 2mg/kg IV (60mg for 30kg dog)",
      "sig": "IV injection \u2014 H1 blockade for urticaria and pruritus. NOT first-line \u2014 epinephrine is.",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Dexamethasone 0.1mg/kg IV (3mg)",
      "sig": "IV \u2014 reduce delayed inflammatory response. NOT substitute for epinephrine.",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "LRS IV 20mL/kg bolus (600mL over 15 min)",
      "sig": "Fluid resuscitation for distributive shock",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
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
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Acute Facial Swelling",
      "assessment": "Working diagnosis: Acute Facial Swelling",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Anaphylaxis Emergency Panel",
      "results": [
        {
          "test": "PCV (packed cell volume)",
          "value": "58",
          "unit": "%",
          "ref": "37-55",
          "flag": "H"
        },
        {
          "test": "Total solids",
          "value": "8.8",
          "unit": "g/dL",
          "ref": "5.5-8.5",
          "flag": "H"
        },
        {
          "test": "Blood glucose",
          "value": "64",
          "unit": "mg/dL",
          "ref": "70-138",
          "flag": "L"
        },
        {
          "test": "BP (Doppler)",
          "value": "78",
          "unit": "mmHg systolic",
          "ref": ">90",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V6005K",
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
    "caseId": "vet-anaphylaxis-bee-sting",
    "diagnosis": "Canine Anaphylaxis \u2014 IgE-Mediated Bee Sting Reaction, 30kg Labrador",
    "acuity": 2,
    "presentation": "Acute Facial Swelling",
    "category": "immunologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with acute facial swelling. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this immunologic presentation.",
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
      "Canine anaphylaxis \u2014 bee sting IgE-mediated (correct)",
      "Angioedema only \u2014 no systemic signs, less severe",
      "Vaccine reaction \u2014 timing post-vaccination not sting",
      "Septic shock \u2014 acute onset, sting history, urticaria pattern inconsistent",
      "Hereditary angioedema \u2014 rare in dogs, different mechanism",
      "Toxin ingestion \u2014 urticaria less common"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Acute Facial Swelling. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: canine anaphylaxis, bee sting. Key vet learning: (1) Canine vs human anaphylaxis: the SHOCK ORGAN differs. In humans: lungs (bronchospasm dominant). In dogs: LIVER/GI (hepatic venous congestion \u2192 splanchnic pooling \u2192 vomiting/bloody diarrhea \u2192 hypotension). Dogs rarely get bronchospasm as the primary sign. Urticaria and facial swelling are common to both. (2) Epinephrine dosing: 0.01 mg/kg IM (lateral thigh or epaxial muscles). For 30kg dog: 0.3mL of 1:1000 concentration. Epinephrine is the ONLY first-line drug \u2014 antihistamines and steroids are adjuncts, not substitutes. (3) Diphenhydramine does NOT reverse anaphylaxis \u2014 it treats urticaria and pruritus. A dog in circulatory shock from anaphylaxis given only diphenhydramine will die. (4) Fluid therapy: distributive shock requires aggressive volume replacement (20mL/kg LRS bolus, reassess, repeat). Target: capillary refill time <2 seconds, BP >90 mmHg systolic. (5) Discharge criteria and EpiPen discussion: owners of dogs with confirmed anaphylaxis should receive an emergency epinephrine kit (SQ epinephrine) and instructions for home use pending veterinary care."
    }
  }
};
