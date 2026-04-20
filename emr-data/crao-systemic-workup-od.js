
window.EMR_DATA = {
  "patient": {
    "name": "Kevin Osei",
    "dob": "03/19/1956",
    "age": 69,
    "sex": "Male",
    "mrn": "RDX-2025-15999",
    "pronouns": "He/Him",
    "insurance": "Tricare",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Sudden Painless Monocular Vision Loss",
    "race": "Hispanic or Latino",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-5631",
    "email": "kevinose@email.com",
    "emergencyContact": {
      "name": "Alex Morgan (Family)",
      "phone": "(954) 555-3884"
    }
  },
  "problems": [
    {
      "problem": "Central retinal artery occlusion, left eye",
      "icd": "H34.11",
      "onset": "2024",
      "status": "Active",
      "notes": "Acute, 2 hours ago \u2014 within potential treatment window"
    },
    {
      "problem": "Atrial fibrillation \u2014 new diagnosis",
      "icd": "I48.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Detected on ECG today, likely embolic source"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2019",
      "status": "Active",
      "notes": "On amlodipine"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "01/2020",
      "refills": 5,
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
      "bp": "88/58",
      "hr": 118,
      "rr": 24,
      "temp": "99.8\u00b0F",
      "spo2": "94%",
      "wt": "139 lbs",
      "ht": "5'10\"",
      "bmi": 19.9,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "139 lbs",
      "ht": "5'10\"",
      "bmi": 19.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "139 lbs",
      "ht": "5'10\"",
      "bmi": 19.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Ana Torres, MD",
      "summary": "Patient seen for Sudden Painless Monocular Vision Loss",
      "assessment": "Working diagnosis: Sudden Painless Monocular Vision Loss",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Urgent Cardiovascular and Stroke Labs",
      "results": [
        {
          "test": "INR/PT",
          "value": "1.1",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": ""
        },
        {
          "test": "CBC \u2014 WBC",
          "value": "8.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": ""
        },
        {
          "test": "Lipid panel \u2014 LDL",
          "value": "152",
          "unit": "mg/dL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "HbA1c",
          "value": "5.8",
          "unit": "%",
          "ref": "<5.7",
          "flag": ""
        },
        {
          "test": "ESR",
          "value": "18",
          "unit": "mm/hr",
          "ref": "0-20",
          "flag": ""
        },
        {
          "test": "CRP",
          "value": "0.4",
          "unit": "mg/dL",
          "ref": "<1.0",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "OCT Macula + Fundus Photography \u2014 Left Eye",
      "indication": "Sudden painless vision loss, cherry red spot",
      "findings": "Left eye: Diffuse inner retinal whitening (opacification) consistent with ischemia. Cherry red spot at fovea \u2014 intact choroidal circulation visible through thin foveal tissue. Boxcar segmentation of blood column in retinal arterioles. Foveal reflex absent. Right eye: Normal.",
      "impression": "Findings diagnostic of central retinal artery occlusion left eye. Acute presentation \u2014 refer immediately for systemic stroke evaluation and potential thrombolysis consideration."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3342K",
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
    "caseId": "crao-systemic-workup-od",
    "diagnosis": "Central Retinal Artery Occlusion (CRAO) \u2014 Cardioembolic, Urgent Stroke Workup Required",
    "acuity": 1,
    "presentation": "Sudden Painless Monocular Vision Loss",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with sudden painless monocular vision loss. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Central retinal artery occlusion \u2014 cardioembolic (correct)",
      "Branch retinal artery occlusion",
      "Anterior ischemic optic neuropathy (AION)",
      "Giant cell arteritis \u2014 CRAO",
      "Central retinal vein occlusion",
      "Acute angle closure glaucoma"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a optometry case with chief complaint: Sudden Painless Monocular Vision Loss. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: acute CRAO, likely cardioembolic from newly detected atrial fibrillation. Key OD learning points: (1) CRAO is a 'stroke of the eye' \u2014 treat as a stroke. The 90-day stroke risk after CRAO is 10-15%, highest in first 2 weeks. IMMEDIATE referral to emergency room for stroke protocol. (2) Treatment window: IV tPA within 4.5 hours (central vision may be salvageable). Ocular massage, AC paracentesis, and IOP-lowering can improve perfusion acutely. (3) Embolic workup: ECG (found AFib today), carotid ultrasound, echo, lipid panel, ANA if younger patient. (4) AFib is the embolic source \u2014 this patient needs anticoagulation urgently. (5) Giant cell arteritis must be excluded in any CRAO in a patient >50 with ESR/CRP (this patient's ESR 18, CRP 0.4 \u2014 GCA less likely, but temporal artery biopsy may still be warranted if any jaw claudication or headache)."
    }
  }
};
