
window.EMR_DATA = {
  "patient": {
    "name": "Alex Morgan",
    "dob": "01/10/1967",
    "age": 58,
    "sex": "Non-binary",
    "mrn": "RDX-2025-84829",
    "pronouns": "They/Them",
    "insurance": "Tricare",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Bilateral Disc Swelling Found on Fundoscopy",
    "race": "Middle Eastern",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-7651",
    "email": "alexmorg@email.com",
    "emergencyContact": {
      "name": "Diane Park (Family)",
      "phone": "(954) 555-5286"
    }
  },
  "problems": [
    {
      "problem": "Papilledema bilateral \u2014 elevated ICP",
      "icd": "H47.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Opening pressure 32 cmH2O on LP"
    },
    {
      "problem": "Idiopathic intracranial hypertension",
      "icd": "G93.2",
      "onset": "2024",
      "status": "Active",
      "notes": "BMI 38, female, reproductive age \u2014 classic demographic"
    },
    {
      "problem": "Obesity",
      "icd": "E66.9",
      "onset": "2019",
      "status": "Active",
      "notes": "BMI 38"
    }
  ],
  "medications": [
    {
      "name": "Acetazolamide 500mg BID (starting today)",
      "sig": "Take 1 tablet by mouth twice daily \u2014 new prescription",
      "prescriber": "Dr. Neurology",
      "start": "11/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Oral contraceptive pill",
      "sig": "Take 1 tablet daily",
      "prescriber": "Dr. OB",
      "start": "2022",
      "refills": 11,
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
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "134 lbs",
      "ht": "5'6\"",
      "bmi": 21.6,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "134 lbs",
      "ht": "5'6\"",
      "bmi": 21.6,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "134 lbs",
      "ht": "5'6\"",
      "bmi": 21.6,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Bilateral Disc Swelling Found on Fundoscopy",
      "assessment": "Working diagnosis: Bilateral Disc Swelling Found on Fundoscopy",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "CSF Analysis",
      "results": [
        {
          "test": "Opening pressure",
          "value": "32",
          "unit": "cmH2O",
          "ref": "<20",
          "flag": "H"
        },
        {
          "test": "CSF appearance",
          "value": "Clear, colorless",
          "unit": "",
          "ref": "Clear",
          "flag": ""
        },
        {
          "test": "CSF WBC",
          "value": "2",
          "unit": "cells/\u03bcL",
          "ref": "0-5",
          "flag": ""
        },
        {
          "test": "CSF protein",
          "value": "28",
          "unit": "mg/dL",
          "ref": "15-45",
          "flag": ""
        },
        {
          "test": "CSF glucose",
          "value": "62",
          "unit": "mg/dL",
          "ref": "50-80",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/15/2024",
      "study": "MRI Brain/Orbits with gadolinium",
      "indication": "Bilateral disc swelling, headaches",
      "findings": "Bilateral optic nerve sheath distension. Flattening of posterior globes bilaterally. Empty sella. No mass lesion, no venous sinus thrombosis, no hydrocephalus. Tonsillar position normal.",
      "impression": "Imaging features consistent with raised intracranial pressure. No secondary cause identified. Findings support idiopathic intracranial hypertension."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V8010K",
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
    "caseId": "papilledema-od",
    "diagnosis": "Papilledema from Idiopathic Intracranial Hypertension (IIH)",
    "acuity": 2,
    "presentation": "Bilateral Disc Swelling Found on Fundoscopy",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with bilateral disc swelling found on fundoscopy. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did you first notice the vision change?",
      "Is it one eye or both?",
      "Does it affect near or distance vision more?",
      "Any pain, redness, or discharge?",
      "Are you seeing floaters or flashing lights?",
      "Any recent head trauma?",
      "When was your last eye exam?",
      "Do you wear glasses or contacts?",
      "Any family history of eye disease?",
      "Do you have diabetes, hypertension, or autoimmune disease?",
      "Any headaches?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this ophthalmic presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Visual acuity (distance and near)",
      "Slit lamp examination",
      "Fundoscopy / dilated exam",
      "Intraocular pressure (tonometry)",
      "Visual field testing",
      "Pupillary reflex assessment",
      "Extraocular motility",
      "Cover-uncover test"
    ],
    "examFindings": {
      "Visual Acuity": "Right eye: reduced, Left eye: varies by case",
      "Slit Lamp": "Finding consistent with diagnosis",
      "Fundoscopy": "Key pathological finding visible on dilated exam",
      "IOP": "Measured bilaterally, results per clinical presentation",
      "Visual Fields": "Assessed by confrontation and automated perimetry"
    },
    "ddxTargets": [
      "Idiopathic intracranial hypertension \u2014 papilledema (correct)",
      "Malignant hypertension",
      "Cerebral venous sinus thrombosis",
      "Intracranial mass with mass effect",
      "Cryptococcal meningitis",
      "Medication-induced (tetracyclines, vitamin A, steroid withdrawal)"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a optometry case with chief complaint: Bilateral Disc Swelling Found on Fundoscopy. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: idiopathic intracranial hypertension causing papilledema. Key OD learning points: (1) Bilateral disc swelling in a young obese woman with headaches = IIH until proven otherwise. Unilateral disc swelling has a much broader differential including AION, mass, malignant hypertension. (2) LP opening pressure threshold for treatment: >25 cmH2O is borderline; >30 cmH2O with symptoms warrants treatment. (3) The OD's job: document visual fields (Humphrey 24-2) and OCT RNFL at every visit \u2014 visual field loss is the feared outcome, not the headache. (4) Treatment: weight loss (most effective long-term), acetazolamide, optic nerve sheath fenestration if failing medical therapy and vision declining. (5) This patient is on OCPs \u2014 while not the primary cause, all potential contributing medications should be reviewed."
    }
  }
};
