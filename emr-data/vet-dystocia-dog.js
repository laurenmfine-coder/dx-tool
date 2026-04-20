
window.EMR_DATA = {
  "patient": {
    "name": "Max",
    "dob": "12/17/2021",
    "age": 4,
    "sex": "Male (neutered)",
    "species": "Mixed Breed Puppy",
    "mrn": "RDX-2025-95569",
    "pronouns": "They/Them",
    "insurance": "ASPCA Pet Insurance",
    "pcp": "Dr. Sarah Chen, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Visible Green Discharge",
    "race": "Species: Mixed Breed Puppy",
    "address": "6201 Stirling Rd, Cooper City, FL 33328 (Owner: Alex Morgan)",
    "phone": "(954) 555-5371",
    "email": "maxowner@email.com",
    "emergencyContact": {
      "name": "Alex Morgan (Owner)",
      "phone": "(954) 555-4170"
    }
  },
  "problems": [
    {
      "problem": "Primary uterine inertia \u2014 French Bulldog, 6h labor, no pups",
      "icd": "O62.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Bella, 3yr French Bulldog \u2014 weak infrequent contractions, 6 hours, no delivery. Brachycephalic breed: highest dystocia incidence."
    },
    {
      "problem": "Fetal viability \u2014 heart rates 160-175 bpm (normal)",
      "icd": "O66.9",
      "onset": "2024",
      "status": "Active",
      "notes": "No fetal distress yet. Prolonged labor risks progressive hypoxia. Oxytocin trial vs immediate C-section decision required."
    },
    {
      "problem": "Borderline low calcium \u2014 contributing to uterine inertia",
      "icd": "O66.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Serum calcium 8.2 mg/dL (ref 8.8-11.0). Borderline low \u2014 IV calcium may enhance uterine contractility."
    }
  ],
  "medications": [
    {
      "name": "Oxytocin 0.5-2 IU IM \u2014 uterine stimulant",
      "sig": "Small doses q30 min x2-3 trials if cervix dilated, no obstruction. Overuse = sustained contraction \u2192 fetal asphyxia. DO NOT use for obstructive dystocia.",
      "prescriber": "Veterinarian",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 trial"
    },
    {
      "name": "Calcium gluconate 10% 1mL/kg slow IV \u2014 if contractility poor",
      "sig": "Slow IV over 10-20 min with cardiac monitoring. Enhances uterine contractility. Useful when serum calcium borderline low.",
      "prescriber": "Veterinarian",
      "start": "2024",
      "refills": 0,
      "status": "Consider"
    },
    {
      "name": "Cesarean section \u2014 if oxytocin fails or fetal distress",
      "sig": "Proceed immediately if: 2 oxytocin trials fail, fetal HR declining, >4h between pups, or owner elects surgery. BOAS anesthetic protocol.",
      "prescriber": "Veterinarian",
      "start": "2024",
      "refills": 0,
      "status": "Standby \u2014 surgical prep"
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
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Active Labor >1h No Delivery",
      "assessment": "Working diagnosis: Active Labor >1h No Delivery",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Canine Dystocia Assessment",
      "results": [
        {
          "test": "Radiograph \u2014 fetal count/position",
          "value": "3 pups. 2 anterior, 1 posterior. No obstruction.",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Fetal Doppler HR",
          "value": "160-175 bpm \u2014 viable",
          "unit": "",
          "ref": "180-220 normal whelping",
          "flag": ""
        },
        {
          "test": "Serum calcium",
          "value": "8.2",
          "unit": "mg/dL",
          "ref": "8.8-11.0",
          "flag": "L"
        },
        {
          "test": "Blood glucose (dam)",
          "value": "68",
          "unit": "mg/dL",
          "ref": "70-140",
          "flag": "L"
        },
        {
          "test": "BCS",
          "value": "5/9 \u2014 ideal",
          "unit": "",
          "ref": "5/9",
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
      "lot": "V9202K",
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
    "caseId": "vet-dystocia-dog",
    "diagnosis": "Canine Dystocia \u2014 Primary Uterine Inertia in French Bulldog, Oxytocin Trial Then Cesarean Section",
    "acuity": 1,
    "presentation": "Active Labor >1h No Delivery",
    "category": "obstetric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with active labor >1h no delivery. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this obstetric presentation.",
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
      "Primary uterine inertia \u2014 oxytocin trial, C-section standby (correct)",
      "Obstructive dystocia \u2014 radiograph/palpation confirm no obstruction; oxytocin appropriate",
      "Secondary uterine inertia \u2014 no pups yet delivered; primary inertia is correct",
      "Normal labor \u2014 6h without delivery and weak contractions is not normal",
      "Fetal oversize \u2014 radiograph does not show disproportion",
      "Hypocalcemia as sole cause \u2014 calcium borderline low; contributing factor, not sole cause"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Active Labor >1h No Delivery. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: canine dystocia \u2014 primary uterine inertia. IPE key learning: (1) Dystocia classification: primary inertia (won't contract) vs secondary inertia (exhaustion after partial delivery) vs obstructive (mechanical). Treatment differs: inertia \u2192 oxytocin; obstruction \u2192 surgical. (2) Oxytocin protocol: 0.5-2 IU IM, max 2-3 doses q30 min. Only if cervix dilated and no obstruction. Overdose = tetanic contraction \u2192 fetal asphyxia. (3) Brachycephalic breed risk: French Bulldogs and English Bulldogs have highest dystocia rates from pelvic conformation. Many practitioners plan elective C-section. BOAS anesthesia requires rapid intubation protocol. (4) One Health/IPE: dystocia management in dogs mirrors obstetric emergency protocols in humans \u2014 oxytocin use, fetal monitoring, surgical decision points. Understanding one deepens understanding of the other. (5) Zoonotic awareness: owners handling neonatal whelping fluids should practice handwashing. Pregnant owners counseled on potential risks."
    }
  }
};
