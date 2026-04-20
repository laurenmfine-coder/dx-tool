
window.EMR_DATA = {
  "patient": {
    "name": "Diane Park",
    "dob": "03/27/1992",
    "age": 33,
    "sex": "Female",
    "mrn": "RDX-2025-15381",
    "pronouns": "She/Her",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Painful Red Eye",
    "race": "Asian",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-9404",
    "email": "dianepar@email.com",
    "emergencyContact": {
      "name": "Priya Patel (Family)",
      "phone": "(954) 555-4980"
    }
  },
  "problems": [
    {
      "problem": "Neovascular glaucoma \u2014 IOP 48 mmHg, iris neovascularization",
      "icd": "H40.63",
      "onset": "2024",
      "status": "Active",
      "notes": "Darnell Washington, 52M \u2014 T2DM x15 years, poor control. Sudden vision loss right eye, severe pain, red eye, IOP 48 mmHg."
    },
    {
      "problem": "Proliferative diabetic retinopathy \u2014 underlying driver of neovascularization",
      "icd": "E11.3591",
      "onset": "2023",
      "status": "Active",
      "notes": "PDR with VEGF-driven neovascularization on iris (rubeosis iridis) \u2192 blocks trabecular meshwork \u2192 angle closure."
    },
    {
      "problem": "Diabetic control \u2014 A1c 11.8%, IOP crisis from chronic neglect",
      "icd": "E11.65",
      "onset": "2009",
      "status": "Active",
      "notes": "Prolonged poor glycemic control \u2192 PDR \u2192 NVG. Annual eye exams were missed for 4 years."
    }
  ],
  "medications": [
    {
      "name": "Timolol 0.5% eye drops \u2014 IOP lowering",
      "sig": "Beta-blocker: reduces aqueous production. 1 drop affected eye BID. First-line topical IOP reduction.",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Brimonidine 0.2% eye drops \u2014 adjunct IOP lowering",
      "sig": "Alpha-2 agonist: reduces aqueous production AND increases outflow. 1 drop TID.",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Acetazolamide 500mg PO stat \u2014 systemic carbonic anhydrase inhibitor",
      "sig": "Systemic IOP reduction for acute crisis. Give stat for IOP >40.",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 acute"
    },
    {
      "name": "Intravitreal anti-VEGF (bevacizumab 1.25mg) \u2014 treat underlying NV",
      "sig": "Anti-VEGF causes regression of iris and retinal neovascularization. Given before pan-retinal photocoagulation (PRP) to reduce neovascularization prior to laser.",
      "prescriber": "Retina/Ophthalmology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 procedure"
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
      "wt": "82 lbs",
      "ht": "5'0\"",
      "bmi": 16.0,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "82 lbs",
      "ht": "5'0\"",
      "bmi": 16.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "82 lbs",
      "ht": "5'0\"",
      "bmi": 16.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Painful Red Eye",
      "assessment": "Working diagnosis: Painful Red Eye",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "NVG/Diabetes Panel",
      "results": [
        {
          "test": "IOP right eye",
          "value": "48",
          "unit": "mmHg",
          "ref": "10-21",
          "flag": "H"
        },
        {
          "test": "IOP left eye",
          "value": "16",
          "unit": "mmHg",
          "ref": "10-21",
          "flag": ""
        },
        {
          "test": "HbA1c",
          "value": "11.8",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.8",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Fasting glucose",
          "value": "268",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "Fundus Exam + Fluorescein Angiography",
      "indication": "NVG workup \u2014 extent of PDR",
      "findings": "Disc neovascularization, extensive peripheral NVD (neovascularization elsewhere). Rubeosis iridis (iris neovascularization). Vitreous hemorrhage small. No tractional retinal detachment yet.",
      "impression": "Proliferative diabetic retinopathy with rubeosis iridis causing neovascular glaucoma. Anti-VEGF + PRP required urgently."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1539K",
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
    "caseId": "neovascular-glaucoma-od",
    "diagnosis": "Neovascular Glaucoma \u2014 Diabetic Retinopathy with Iris Neovascularization, IOP 48, Emergency Ophthalmology",
    "acuity": 2,
    "presentation": "Painful Red Eye",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with painful red eye. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this ophthalmic presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "General appearance",
      "Vital signs",
      "Cardiovascular exam",
      "Pulmonary exam",
      "Abdominal exam",
      "Neurological exam",
      "Skin exam",
      "Musculoskeletal exam"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Neovascular glaucoma \u2014 PDR, rubeosis iridis, IOP 48 (correct)",
      "Acute primary angle closure \u2014 fixed mid-dilated pupil, very narrow angle; no neovascularization",
      "Open-angle glaucoma \u2014 chronic, insidious; not acute crisis with pain and vision loss",
      "Uveitic glaucoma \u2014 inflammatory cells in anterior chamber; different workup",
      "Central retinal vein occlusion \u2014 can also cause NVG; fundus exam distinguishes",
      "Hyphema \u2014 blood in anterior chamber; blunt trauma history"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Painful Red Eye. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: neovascular glaucoma from PDR. Key learning: (1) NVG mechanism: chronic retinal ischemia (from PDR, CRVO, or other) \u2192 VEGF production \u2192 new vessel growth on iris (rubeosis iridis) and into the trabecular meshwork \u2192 angle closure \u2192 IOP rises acutely. IOP >40 causes acute pain, corneal edema, and rapid vision loss. (2) NVG is an ophthalmologic emergency: IOP 48 mmHg will cause permanent optic nerve damage within hours to days if not treated. Medical IOP lowering (timolol, brimonidine, acetazolamide, mannitol IV) buys time for definitive treatment. (3) Anti-VEGF + PRP sequence: intravitreal anti-VEGF causes regression of neovascularization within 24-72h \u2014 making PRP (pan-retinal photocoagulation) safer and more effective. PRP destroys ischemic peripheral retina, reducing VEGF drive. (4) Prevention of NVG: annual dilated fundus exam in all diabetics. PDR diagnosis \u2192 immediate PRP referral. A1c control <7% reduces PDR progression by 76% (DCCT trial). (5) Prognosis: NVG is associated with poor visual prognosis \u2014 even with treatment, significant permanent vision loss is common due to optic nerve damage from acute IOP elevation. Prevention through diabetic eye care compliance is critical."
    }
  }
};
