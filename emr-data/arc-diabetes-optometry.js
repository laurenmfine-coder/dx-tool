
window.EMR_DATA = {
  "patient": {
    "name": "Ben Tran",
    "dob": "05/23/1957",
    "age": 68,
    "sex": "Male",
    "mrn": "RDX-2025-55067",
    "pronouns": "He/Him",
    "insurance": "Tricare",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Robert Diaz",
    "race": "Hispanic or Latino",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-9634",
    "email": "bentran@email.com",
    "emergencyContact": {
      "name": "Carlos Rivera (Family)",
      "phone": "(954) 555-2624"
    }
  },
  "problems": [
    {
      "problem": "Non-proliferative diabetic retinopathy \u2014 mild, bilateral",
      "icd": "E11.311",
      "onset": "2024",
      "status": "Active",
      "notes": "Robert Diaz. First dilated exam ever. Microaneurysms only \u2014 mild NPDR."
    },
    {
      "problem": "T2DM \u2014 poorly controlled, A1c 9.8%",
      "icd": "E11.9",
      "onset": "2020",
      "status": "Active",
      "notes": "A1c 9.8% is driving DR progression risk. Annual OD visit is the management anchor."
    },
    {
      "problem": "Undiagnosed refractive error \u2014 needs glasses",
      "icd": "H52.219",
      "onset": "2024",
      "status": "Active",
      "notes": "BCVA 20/50 OD, 20/40 OS. Refractive correction improves to 20/25. New glasses prescribed."
    }
  ],
  "medications": [
    {
      "name": "Metformin 1000mg BID (primary care)",
      "sig": "Take twice daily with meals",
      "prescriber": "Dr. Kim",
      "start": "2020",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "Semaglutide 0.5mg SQ weekly (primary care)",
      "sig": "Subcutaneous weekly \u2014 GLP-1, added 6 months ago",
      "prescriber": "Dr. Kim",
      "start": "2024",
      "refills": 3,
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
      "wt": "65 lbs",
      "ht": "5'7\"",
      "bmi": 10.2,
      "setting": "Eye Clinic"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "65 lbs",
      "ht": "5'7\"",
      "bmi": 10.2,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "65 lbs",
      "ht": "5'7\"",
      "bmi": 10.2,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Robert Diaz",
      "assessment": "Working diagnosis: Robert Diaz",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/01/2024",
      "panel": "Diabetes Monitoring",
      "results": [
        {
          "test": "HbA1c",
          "value": "9.8",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "BP at eye exam",
          "value": "142/88",
          "unit": "mmHg",
          "ref": "<130/80 target",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Fundus Photography + OCT Macula Bilateral",
      "indication": "First dilated exam \u2014 T2DM",
      "findings": "OD: Scattered microaneurysms (3-5) in mid-periphery. No hemorrhages, exudates, or neovascularization. OCT macula: central subfield thickness 274 \u03bcm, no DME. OS: 2 microaneurysms inferotemporal. OCT macula: 268 \u03bcm, no DME.",
      "impression": "Mild NPDR bilateral \u2014 ETDRS level 20. No diabetic macular edema. Annual dilated exam recommended. Systemic control is critical \u2014 A1c 9.8% and BP 142/88 will accelerate progression."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V3458K",
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
    "caseId": "arc-diabetes-optometry",
    "diagnosis": "T2DM A1c 9.8% \u2014 First Dilated Eye Exam: Mild NPDR, Education Priority, Co-Management Letter",
    "acuity": 3,
    "presentation": "Robert Diaz",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with robert diaz. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Mild NPDR \u2014 annual follow-up, co-management letter (correct)",
      "No retinopathy \u2014 microaneurysms ARE mild NPDR, not normal",
      "Moderate NPDR \u2014 not yet, insufficient hemorrhage count",
      "DME present \u2014 OCT confirms no macular edema",
      "Proliferative DR \u2014 no neovascularization",
      "Hypertensive retinopathy as primary \u2014 diabetes context, microaneurysms are diabetic"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a optometry case with chief complaint: Robert Diaz. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: mild NPDR, first dilated exam. Key OD learning: (1) Communicate the findings to the patient in plain language: 'I found very early signs of diabetes affecting your eyes \u2014 tiny leakages from small blood vessels called microaneurysms. This is the earliest stage. The good news is that we caught it early and your macula \u2014 the center of your vision \u2014 is not affected yet. The most important thing you can do is get your blood sugar closer to the goal.' (2) Communicate the findings to the PCP: write a co-management letter within 48 hours. 'Robert Diaz had his first dilated eye exam today. Findings: mild NPDR bilateral, no DME. A1c 9.8% and BP 142/88 noted. These systemic factors are the primary drivers of retinopathy progression. Annual dilated exam scheduled. Request intensification of glycemic and blood pressure management.' (3) Annual exam interval for mild NPDR: the ETDRS recommendation is 12 months. If A1c remains >9%, consider 6-month follow-up. (4) The refractive finding matters: BCVA 20/50 is functionally significant. Many diabetic patients have never had an eye exam \u2014 new glasses in the same visit is a major quality-of-life intervention. (5) Patient education priority: for a patient with mild NPDR and A1c 9.8%, the most powerful intervention is improving glycemic control \u2014 not laser, not injections, not surgery. Frame it: 'Every point your A1c drops reduces your risk of vision loss by 30%.'"
    }
  }
};
