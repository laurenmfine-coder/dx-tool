
window.EMR_DATA = {
  "patient": {
    "name": "Diego Reyes",
    "dob": "12/11/1954",
    "age": 71,
    "sex": "Male",
    "mrn": "RDX-2025-12802",
    "pronouns": "He/Him",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Diabetic Patient",
    "race": "Middle Eastern",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-8686",
    "email": "diegorey@email.com",
    "emergencyContact": {
      "name": "Nicole Okafor (Family)",
      "phone": "(954) 555-4672"
    }
  },
  "problems": [
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.9",
      "onset": "2016",
      "status": "Active",
      "notes": "A1c 9.2% \u2014 suboptimal control"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2018",
      "status": "Active",
      "notes": "On lisinopril"
    },
    {
      "problem": "Diabetic retinopathy",
      "icd": "E11.311",
      "onset": "2024",
      "status": "Active",
      "notes": "Newly diagnosed on today's exam"
    }
  ],
  "medications": [
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Kim",
      "start": "01/2017",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "03/2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Glipizide 5mg daily",
      "sig": "Take 1 tablet by mouth daily 30 minutes before breakfast",
      "prescriber": "Dr. Kim",
      "start": "06/2021",
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
      "bp": "136/84",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "118 lbs",
      "ht": "5'1\"",
      "bmi": 22.3,
      "setting": "Eye Clinic"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "118 lbs",
      "ht": "5'1\"",
      "bmi": 22.3,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "118 lbs",
      "ht": "5'1\"",
      "bmi": 22.3,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Diabetic Patient",
      "assessment": "Working diagnosis: Diabetic Patient",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "10/15/2024",
      "panel": "HbA1c and Metabolic",
      "results": [
        {
          "test": "HbA1c",
          "value": "9.2",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "Fasting Glucose",
          "value": "218",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.1",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        },
        {
          "test": "eGFR",
          "value": "72",
          "unit": "mL/min/1.73m\u00b2",
          "ref": ">60",
          "flag": ""
        },
        {
          "test": "LDL",
          "value": "128",
          "unit": "mg/dL",
          "ref": "<100",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/10/2024",
      "study": "Fundus Photography with OCT \u2014 Bilateral",
      "indication": "Diabetic retinopathy screening, A1c 9.2%",
      "findings": "OD: Multiple dot-blot hemorrhages in all quadrants, scattered microaneurysms, two cotton-wool spots inferior arcade. No neovascularization. Macular OCT: central subfield thickness 298 \u03bcm, no diabetic macular edema. OS: Microaneurysms scattered mid-periphery, rare hard exudates temporal macula. Macular OCT: CST 284 \u03bcm, no DME.",
      "impression": "Moderate NPDR bilateral. No proliferative disease. No clinically significant DME. Annual dilated exam recommended \u2014 consider referral to retina if progression."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5816K",
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
    "caseId": "diabetic-retinopathy-od",
    "diagnosis": "Non-Proliferative Diabetic Retinopathy (NPDR), Moderate \u2014 Bilateral",
    "acuity": 3,
    "presentation": "Diabetic Patient",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with diabetic patient. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Moderate non-proliferative diabetic retinopathy (correct)",
      "Mild NPDR \u2014 insufficient hemorrhage count",
      "Proliferative diabetic retinopathy",
      "Diabetic macular edema",
      "Hypertensive retinopathy \u2014 look-alike",
      "Branch retinal vein occlusion"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a optometry case with chief complaint: Diabetic Patient. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: moderate NPDR bilateral. Key OD learning points: (1) Classify by ETDRS severity \u2014 moderate NPDR means 20+ hemorrhages per quadrant OR venous beading in 1+ quadrant OR IRMA. (2) Systemic targets that slow progression: A1c <7%, BP <130/80, LDL <100. (3) Referral timing: moderate NPDR \u2192 annual; severe NPDR \u2192 retina within 3-4 months; any PDR or DME \u2192 urgent retina. (4) The cotton-wool spots represent nerve fiber layer infarcts from capillary non-perfusion \u2014 a progression marker. (5) Today's visit requires a co-management letter to the endocrinologist: A1c 9.2% is driving this."
    }
  }
};
