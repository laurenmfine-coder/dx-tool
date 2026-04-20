
window.EMR_DATA = {
  "patient": {
    "name": "Molly",
    "dob": "05/07/2016",
    "age": 9,
    "sex": "Female (spayed)",
    "species": "Labrador Retriever",
    "mrn": "RDX-2025-52215",
    "pronouns": "They/Them",
    "insurance": "ASPCA Pet Insurance",
    "pcp": "Dr. James Rodriguez, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Toy Breed",
    "race": "Species: Labrador Retriever",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311 (Owner: Aisha Johnson)",
    "phone": "(954) 555-8204",
    "email": "mollyowner@email.com",
    "emergencyContact": {
      "name": "Aisha Johnson (Owner)",
      "phone": "(954) 555-4992"
    }
  },
  "problems": [
    {
      "problem": "Acute hemorrhagic diarrhea syndrome \u2014 formerly HGE",
      "icd": "K29.20",
      "onset": "2024",
      "status": "Active",
      "notes": "Chihuahua, sudden bloody diarrhea, vomiting \u2014 PCV 58% (hemoconcentration)"
    },
    {
      "problem": "Severe dehydration \u2014 hemoconcentration",
      "icd": "E86.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Total solids normal despite high PCV \u2014 confirming hemoconcentration from fluid shifts not polycythemia"
    },
    {
      "problem": "Hypovolemic shock risk \u2014 small dog, rapid fluid loss",
      "icd": "R57.1",
      "onset": "2024",
      "status": "Active",
      "notes": "HR 148, weak femoral pulses, tacky mucous membranes \u2014 early shock"
    }
  ],
  "medications": [
    {
      "name": "Crystalloid IV bolus \u2014 LRS 20-30 mL/kg over 30 min",
      "sig": "IV bolus for shock \u2014 reassess perfusion parameters q15 min",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Metronidazole 15mg/kg IV q12h",
      "sig": "IV injection twice daily \u2014 Clostridioides (AHDS association), anaerobic coverage",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Maropitant 1mg/kg SQ q24h",
      "sig": "Subcutaneous once daily \u2014 NK1 antagonist antiemetic",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ampicillin 22mg/kg IV q8h",
      "sig": "IV injection every 8 hours \u2014 gut barrier compromise",
      "prescriber": "Dr. Rodriguez DVM",
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
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Bloody Diarrhea",
      "assessment": "Working diagnosis: Bloody Diarrhea",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "AHDS Emergency Profile",
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
          "value": "5.8",
          "unit": "g/dL",
          "ref": "5.5-7.5",
          "flag": ""
        },
        {
          "test": "Glucose (POC)",
          "value": "78",
          "unit": "mg/dL",
          "ref": "70-138",
          "flag": ""
        },
        {
          "test": "Sodium",
          "value": "148",
          "unit": "mEq/L",
          "ref": "140-155",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "3.0",
          "unit": "mEq/L",
          "ref": "3.5-5.5",
          "flag": "L"
        },
        {
          "test": "BUN",
          "value": "32",
          "unit": "mg/dL",
          "ref": "7-27",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Abdominal Radiograph AP/Lateral",
      "indication": "Acute bloody diarrhea \u2014 rule out obstruction, intussusception, foreign body",
      "findings": "Moderate amount of gas throughout small and large intestines. No foreign body. No intussusception pattern. No free abdominal gas. Intestinal wall thickening on lateral view.",
      "impression": "No mechanical obstruction. Intestinal wall changes consistent with acute hemorrhagic gastroenteritis. Parvovirus cannot be excluded \u2014 SNAP test recommended."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V7035K",
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
    "caseId": "vet-hemorrhagic-gastroenteritis",
    "diagnosis": "Acute Hemorrhagic Diarrhea Syndrome (AHDS) \u2014 Toy Breed Dog, PCV 58%, Severe Dehydration",
    "acuity": 2,
    "presentation": "Bloody Diarrhea",
    "category": "gastrointestinal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with bloody diarrhea. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this gastrointestinal presentation.",
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
      "AHDS \u2014 acute hemorrhagic diarrhea syndrome (correct)",
      "Canine parvovirus \u2014 must exclude with SNAP test (different treatment implications)",
      "Intestinal intussusception \u2014 radiograph negative",
      "Hemorrhagic gastroenteritis from dietary indiscretion",
      "Clostridial enteritis \u2014 AHDS associated with Clostridioides difficile-like toxins",
      "Rat poison (anticoagulant rodenticide) \u2014 different bleeding pattern"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Bloody Diarrhea. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: AHDS (formerly HGE) \u2014 emergency fluid resuscitation. Key veterinary learning: (1) PCV 58% with normal total solids = AHDS pathognomonic pattern. In polycythemia vera, both PCV and total solids rise. In AHDS, plasma fluid shifts into the gut lumen \u2192 only cells remain \u2192 PCV elevates while protein (total solids) stays normal. This 'PCV/TP dissociation' is the diagnostic hallmark. (2) Differentiate from parvovirus: AHDS = adult dog, very sudden onset (hours), minimal prodrome, no leukopenia. Parvo = puppy/unvaccinated, leukopenia prominent, more systemic illness. SNAP parvo test in clinic rules out parvovirus. (3) Aggressive IV fluids: rapid correction of hemoconcentration. 20-30 mL/kg boluses, reassess every 15 min (HR, mucous membrane color, CRT, pulse quality). Goal: PCV returning toward 45%, mental status improvement, normal pulses. (4) Hypokalemia: common in AHDS from losses \u2014 add KCl to fluids (20 mEq/L) after initial bolus. Monitor q4h. (5) NPO then gradual reintroduction: NPO for 12-24h, then bland diet (boiled chicken + rice). Most dogs recover 24-72h with aggressive supportive care. Recurrence rate ~10% in predisposed toy breeds \u2014 discuss prophylaxis."
    }
  }
};
