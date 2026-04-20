
window.EMR_DATA = {
  "patient": {
    "name": "Drew Santos",
    "dob": "08/28/1996",
    "age": 29,
    "sex": "Non-binary",
    "mrn": "RDX-2025-19297",
    "pronouns": "They/Them",
    "insurance": "Tricare",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Elevated Blood Pressure Found at Eye Exam",
    "race": "Black or African American",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-5000",
    "email": "drewsant@email.com",
    "emergencyContact": {
      "name": "Antoine Dubois (Family)",
      "phone": "(954) 555-1959"
    }
  },
  "problems": [
    {
      "problem": "Hypertension \u2014 poorly controlled",
      "icd": "I10",
      "onset": "2014",
      "status": "Active",
      "notes": "BP 178/108 found on today's exam, off medications x3 weeks"
    },
    {
      "problem": "Hypertensive retinopathy",
      "icd": "H35.031",
      "onset": "2024",
      "status": "Active",
      "notes": "Newly identified, Grade III"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Torres",
      "start": "01/2015",
      "refills": 0,
      "status": "Active \u2014 patient reports not filling for 3 weeks"
    },
    {
      "name": "Hydrochlorothiazide 25mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Torres",
      "start": "06/2018",
      "refills": 0,
      "status": "Active \u2014 not filling"
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
      "wt": "84 lbs",
      "ht": "5'1\"",
      "bmi": 15.9,
      "setting": "Eye Clinic"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "84 lbs",
      "ht": "5'1\"",
      "bmi": 15.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "84 lbs",
      "ht": "5'1\"",
      "bmi": 15.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Elevated Blood Pressure Found at Eye Exam",
      "assessment": "Working diagnosis: Elevated Blood Pressure Found at Eye Exam",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Fundus Photography \u2014 Bilateral",
      "indication": "Elevated BP found at eye exam, headaches",
      "findings": "OD and OS: Moderate arteriovenous nicking at 3 crossings bilaterally. Significant arteriolar narrowing with copper-wiring appearance. Flame hemorrhages at disc margin bilaterally. Hard exudates forming partial macular star pattern OD. Disc margins sharp bilaterally. Cotton-wool spots x2 OD superior.",
      "impression": "Hypertensive retinopathy Grade III bilaterally. Flame hemorrhages and hard exudate macular star indicate end-organ damage. Urgent blood pressure management required. No papilledema (Grade IV)."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V2182K",
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
    "caseId": "hypertensive-retinopathy-od",
    "diagnosis": "Hypertensive Retinopathy, Grade III (Keith-Wagener-Barker) \u2014 Bilateral",
    "acuity": 3,
    "presentation": "Elevated Blood Pressure Found at Eye Exam",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with elevated blood pressure found at eye exam. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Grade III hypertensive retinopathy (correct)",
      "Grade II hypertensive retinopathy (mild AV nicking only)",
      "Grade IV \u2014 malignant hypertension with papilledema",
      "Diabetic retinopathy \u2014 similar hemorrhage pattern",
      "Branch retinal vein occlusion",
      "Radiation retinopathy"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a optometry case with chief complaint: Elevated Blood Pressure Found at Eye Exam. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: Grade III hypertensive retinopathy (Keith-Wagener-Barker). Key OD learning points: (1) KWB grading: I=arteriolar narrowing; II=AV nicking; III=hemorrhages, exudates, cotton-wool spots; IV=papilledema. Grade III = same-day medical referral. (2) Flame hemorrhages = nerve fiber layer hemorrhages from elevated pressure. Hard exudate macular star = lipid deposits from leaking capillaries. (3) This patient is off medications \u2014 the OD has found hypertensive crisis. BP 178/108 requires same-day medicine evaluation. (4) If papilledema were present (Grade IV), this is hypertensive emergency \u2014 call 911."
    }
  }
};
