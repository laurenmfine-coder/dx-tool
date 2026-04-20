
window.EMR_DATA = {
  "patient": {
    "name": "Lightning",
    "dob": "05/26/2014",
    "age": 11,
    "sex": "Gelding",
    "species": "Thoroughbred Horse",
    "mrn": "RDX-2025-29815",
    "pronouns": "They/Them",
    "insurance": "Trupanion Pet Insurance",
    "pcp": "Dr. Maria Santos, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Reduced Gut Sounds",
    "race": "Species: Thoroughbred Horse",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021 (Owner: Rosa Hernandez)",
    "phone": "(954) 555-1717",
    "email": "lightningowner@email.com",
    "emergencyContact": {
      "name": "Rosa Hernandez (Owner)",
      "phone": "(954) 555-4792"
    }
  },
  "problems": [
    {
      "problem": "Equine colic \u2014 large colon displacement, 4 hours",
      "icd": "K56.69",
      "onset": "2024",
      "status": "Active",
      "notes": "Thunder, 8yr Thoroughbred \u2014 HR 52, flank watching, decreased gut sounds. No gastric reflux. Rectal exam: gas-distended large colon."
    },
    {
      "problem": "Medical vs surgical decision \u2014 HR 52, no reflux, responds to flunixin",
      "icd": "K56.69",
      "onset": "2024",
      "status": "Active",
      "notes": "Key decision point: HR <60, no reflux, responds to NSAID \u2014 medical management appropriate. Monitor closely."
    },
    {
      "problem": "Gut sounds absent \u2014 motility assessment",
      "icd": "K56.69",
      "onset": "2024",
      "status": "Active",
      "notes": "Auscultation: hypomotile all quadrants. IV fluids support hydration and GI motility."
    }
  ],
  "medications": [
    {
      "name": "Flunixin meglumine 1.1mg/kg IV \u2014 NSAID",
      "sig": "Visceral analgesia AND anti-endotoxin effects. Monitor pain response. Do not mask excessively \u2014 masking may delay surgical decision.",
      "prescriber": "Veterinarian",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "IV balanced electrolytes 10-20L \u2014 hydration",
      "sig": "IV crystalloids for hydration and GI motility support. Monitor PCV and TP.",
      "prescriber": "Veterinarian",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Nasogastric tube \u2014 reflux monitoring q1-2h",
      "sig": "Remain in place. Net reflux >2L = small intestinal obstruction = surgical emergency.",
      "prescriber": "Veterinarian",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 monitoring"
    },
    {
      "name": "Surgical referral criteria \u2014 prepare if deteriorating",
      "sig": "Refer if: HR >60 persistent, pain uncontrolled, PCV >50%, net reflux >2L, increasing distension.",
      "prescriber": "Veterinarian",
      "start": "2024",
      "refills": 0,
      "status": "Contingency"
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
      "hr": 52,
      "rr": 8,
      "temp": "101.8\u00b0F",
      "spo2": "N/A",
      "wt": "520 kg",
      "ht": "163 cm",
      "bmi": null,
      "setting": "Farm/Barn"
    },
    {
      "date": "06/15/2024",
      "bp": "N/A",
      "hr": 36,
      "rr": 12,
      "temp": "100.4\u00b0F",
      "spo2": "N/A",
      "wt": "530 kg",
      "ht": "163 cm",
      "bmi": null,
      "setting": "Farm/Barn"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Pawing, Rolling",
      "assessment": "Working diagnosis: Pawing, Rolling",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Colic Assessment",
      "results": [
        {
          "test": "Heart rate",
          "value": "52",
          "unit": "bpm",
          "ref": "28-44 resting; >48 = significant",
          "flag": "H"
        },
        {
          "test": "Mucous membranes",
          "value": "Pale pink, moist",
          "unit": "",
          "ref": "Pink, moist",
          "flag": ""
        },
        {
          "test": "CRT",
          "value": "2",
          "unit": "seconds",
          "ref": "<2 seconds",
          "flag": ""
        },
        {
          "test": "PCV",
          "value": "38",
          "unit": "%",
          "ref": "32-48%",
          "flag": ""
        },
        {
          "test": "Gut sounds",
          "value": "Hypomotile all quadrants",
          "unit": "",
          "ref": "Normal borborygmi",
          "flag": "H"
        },
        {
          "test": "Gastric reflux (NG tube)",
          "value": "0.5L \u2014 no significant reflux",
          "unit": "",
          "ref": "<2L = no SI obstruction",
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
      "lot": "V3723K",
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
    "caseId": "vet-equine-colic",
    "diagnosis": "Equine Colic \u2014 Large Colon Displacement, Medical Management With NSAID and Fluids",
    "acuity": 1,
    "presentation": "Pawing, Rolling",
    "category": "gastrointestinal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with pawing, rolling. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Large colon displacement \u2014 medical management (correct)",
      "Small intestinal obstruction \u2014 large reflux (>2L) distinguishes; absent here",
      "Gastric rupture \u2014 acute collapse, extreme pain; this horse responds to flunixin",
      "Right dorsal displacement \u2014 pinging on right flank; rectal exam findings differ",
      "Large colon volvulus \u2014 severe uncontrolled pain, tight bands on rectal; not present",
      "Spasmodic colic \u2014 hyperactive gut sounds, rapid NSAID response; hypomotility here"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Pawing, Rolling. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: equine colic \u2014 large colon displacement, medical management. IPE key learning: (1) Medical vs surgical colic: surgical indicators = HR persistently >60, uncontrolled pain, net reflux >2L (SI obstruction), PCV >50%, tight bands on rectal, turbid peritoneal tap. Medical indicators = HR <60, NSAID-responsive, no reflux, large colon on rectal exam. (2) Gastric reflux significance: horses cannot vomit \u2014 NG tube monitoring is critical. >2L = SI obstruction = emergency. (3) NSAID masking: flunixin provides analgesia AND reduces endotoxin effects. However, excessive pain masking delays surgical decision \u2014 monitor clinical signs frequently. (4) One Health/IPE: colic decision-making mirrors human acute abdomen \u2014 NSAID trial, serial reassessment, surgical threshold criteria. (5) Biosecurity: Salmonella is a complication in hospitalized colic horses. Strict handwashing and biosecurity protect other horses and human handlers."
    }
  }
};
