
window.EMR_DATA = {
  "patient": {
    "name": "Maria Santos",
    "dob": "10/25/1988",
    "age": 37,
    "sex": "Female",
    "mrn": "RDX-2025-29628",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Open Angle Glaucoma",
    "race": "Middle Eastern",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-6471",
    "email": "mariasan@email.com",
    "emergencyContact": {
      "name": "Sam Patel (Family)",
      "phone": "(954) 555-2689"
    }
  },
  "problems": [
    {
      "problem": "Primary open-angle glaucoma, bilateral",
      "icd": "H40.1131",
      "onset": "2019",
      "status": "Active",
      "notes": "Progressing despite IOP at target \u2014 OCT RNFL progression, new arcuate defect right eye"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2016",
      "status": "Active",
      "notes": "On lisinopril \u2014 recent hypotensive episodes at night"
    }
  ],
  "medications": [
    {
      "name": "Latanoprost 0.005% drops QHS bilateral",
      "sig": "Instill 1 drop each eye at bedtime",
      "prescriber": "Dr. Chen",
      "start": "2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "2017",
      "refills": 8,
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
      "wt": "104 lbs",
      "ht": "5'1\"",
      "bmi": 19.6,
      "setting": "Eye Clinic"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "104 lbs",
      "ht": "5'1\"",
      "bmi": 19.6,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "104 lbs",
      "ht": "5'1\"",
      "bmi": 19.6,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Open Angle Glaucoma",
      "assessment": "Working diagnosis: Open Angle Glaucoma",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "OCT RNFL and Ganglion Cell Complex + Humphrey Visual Field 24-2",
      "indication": "Glaucoma monitoring, IOP 21 on latanoprost \u2014 check for progression",
      "findings": "OCT RNFL: Right eye inferior sector thickness decreased from 82\u03bcm (2022) to 68\u03bcm (2024) \u2014 rate of progression -7\u03bcm/year. Left eye: stable. GCC: right eye inferior GCC loss corresponding to RNFL thinning. Humphrey VF 24-2: right eye new inferior arcuate scotoma (MD -4.2 dB, PSD 3.8 dB). Left eye: stable MD -1.1 dB. Cup-to-disc ratio OD 0.75, OS 0.70.",
      "impression": "Structural and functional progression right eye despite IOP 21 (target IOP). Reassess target IOP \u2014 consider new target of <15 mmHg. SLT or add-on agent warranted. Consider 24-hour IOP monitoring and nocturnal blood pressure assessment."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V7417K",
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
    "caseId": "glaucoma-progression-od",
    "diagnosis": "Primary Open-Angle Glaucoma \u2014 Progression Despite Target IOP (Structural-Functional Progression)",
    "acuity": 3,
    "presentation": "Open Angle Glaucoma",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with open angle glaucoma. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "POAG with structural-functional progression at target IOP (correct)",
      "Normal tension glaucoma \u2014 nocturnal hypotension driving progression",
      "Steroid-induced glaucoma",
      "Pseudoexfoliation glaucoma",
      "Secondary open-angle \u2014 pigment dispersion",
      "Progressive NAION mimicking glaucoma"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a optometry case with chief complaint: Open Angle Glaucoma. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: POAG with progression despite target IOP. Key OD learning points: (1) Target IOP failure: structural change (OCT RNFL decline -7\u03bcm/year) + functional change (new arcuate scotoma) despite IOP at target. New target must be set lower. (2) SLT as next step: Laser Trabeculoplasty Consensus Trial shows SLT is as effective as medical therapy as initial or add-on treatment. (3) Nocturnal hypotension: this patient is on lisinopril and may have nocturnal BP dips \u2192 reduced ocular perfusion pressure during sleep \u2192 glaucoma progression independent of IOP. 24-hour BP Holter is warranted. (4) Rate of progression matters: -7\u03bcm/year is significant. Project lifespan remaining vision \u2014 at this rate, functional loss within 5-8 years in right eye. (5) The OD's documentation must include: MD trend, RNFL trend analysis graph (GPA), and explicit discussion of target IOP reassessment."
    }
  }
};
