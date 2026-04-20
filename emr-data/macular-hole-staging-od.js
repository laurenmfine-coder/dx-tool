
window.EMR_DATA = {
  "patient": {
    "name": "Robert Chen",
    "dob": "07/23/1972",
    "age": 53,
    "sex": "Male",
    "mrn": "RDX-2025-13174",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Central Scotoma and Metamorphopsia",
    "race": "Asian",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-8864",
    "email": "robertch@email.com",
    "emergencyContact": {
      "name": "Antoine Dubois (Family)",
      "phone": "(954) 555-5563"
    }
  },
  "problems": [
    {
      "problem": "Full-thickness macular hole, right eye \u2014 Stage 3",
      "icd": "H35.341",
      "onset": "2024",
      "status": "Active",
      "notes": "Vitreoretinal surgery referral urgent \u2014 within 2-4 weeks for best prognosis"
    },
    {
      "problem": "Age-related macular degeneration \u2014 fellow eye risk",
      "icd": "H35.30",
      "onset": "2024",
      "status": "Active",
      "notes": "No AMD changes OS currently, but fellow eye risk present"
    }
  ],
  "medications": [
    {
      "name": "No current ocular medications",
      "sig": "N/A",
      "prescriber": "N/A",
      "start": "N/A",
      "refills": 0,
      "status": "N/A"
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
      "wt": "99 lbs",
      "ht": "5'5\"",
      "bmi": 16.5,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "99 lbs",
      "ht": "5'5\"",
      "bmi": 16.5,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "99 lbs",
      "ht": "5'5\"",
      "bmi": 16.5,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Sandra Kim, MD",
      "summary": "Patient seen for Central Scotoma and Metamorphopsia",
      "assessment": "Working diagnosis: Central Scotoma and Metamorphopsia",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "OCT Macula \u2014 Bilateral",
      "indication": "Central scotoma and metamorphopsia, right eye",
      "findings": "Right eye: Full-thickness macular hole at foveal center, 312 \u03bcm minimum hole diameter, 481 \u03bcm base diameter. Intraretinal cysts at hole margins. No operculum visible (Stage 3). Subretinal fluid surrounding hole margins. Left eye: Normal foveal contour, no hole or lamellar changes.",
      "impression": "Stage 3 full-thickness macular hole right eye (minimum diameter 312 \u03bcm, no Weiss ring visible confirming complete PVD has not occurred). Recommend vitreoretinal surgery consultation within 2-4 weeks. Prognosis: closure rate 90-95% with vitrectomy, ILM peeling, and gas tamponade."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V4122K",
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
    "caseId": "macular-hole-staging-od",
    "diagnosis": "Full-Thickness Macular Hole, Right Eye \u2014 Stage 3 (OCT Classification)",
    "acuity": 2,
    "presentation": "Central Scotoma and Metamorphopsia",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with central scotoma and metamorphopsia. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Stage 3 full-thickness macular hole (correct)",
      "Stage 2 macular hole \u2014 smaller, without cysts",
      "Lamellar macular hole \u2014 partial thickness, better prognosis",
      "Macular pseudohole \u2014 epiretinal membrane, not a true hole",
      "Age-related macular degeneration with geographic atrophy",
      "Vitreomacular traction syndrome"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a optometry case with chief complaint: Central Scotoma and Metamorphopsia. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: Stage 3 full-thickness macular hole, right eye. Key OD learning points: (1) OCT staging: Stage 1 = vitreomacular traction; Stage 2 = small FTMH <250\u03bcm; Stage 3 = FTMH >250\u03bcm without posterior vitreous detachment; Stage 4 = FTMH with complete PVD (Weiss ring visible). (2) Natural history: Stage 3 macular holes rarely close spontaneously. Surgery is indicated. (3) Surgical success rate: 90-95% anatomic closure with PPV + ILM peeling + gas tamponade (C3F8 or SF6). Visual recovery: most patients gain 2+ lines; best results with smaller holes and shorter symptom duration. (4) Fellow eye risk: 10-15% lifetime risk of macular hole in the left eye. Educate on Amsler grid self-monitoring. (5) Post-op counseling: patient must maintain face-down position for 5-7 days \u2014 critical for gas bubble to tamponade the hole. Plan this before referring."
    }
  }
};
