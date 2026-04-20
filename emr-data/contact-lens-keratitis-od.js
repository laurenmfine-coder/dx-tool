
window.EMR_DATA = {
  "patient": {
    "name": "Drew Santos",
    "dob": "07/06/1970",
    "age": 55,
    "sex": "Non-binary",
    "mrn": "RDX-2025-49955",
    "pronouns": "They/Them",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Contact Lens Wearer",
    "race": "Hispanic or Latino",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-5329",
    "email": "drewsant@email.com",
    "emergencyContact": {
      "name": "Kevin Osei (Family)",
      "phone": "(954) 555-3231"
    }
  },
  "problems": [
    {
      "problem": "Bacterial keratitis, right eye \u2014 contact lens associated",
      "icd": "H16.031",
      "onset": "2024",
      "status": "Active",
      "notes": "Paracentral infiltrate, epithelial defect \u2014 Pseudomonas most likely"
    },
    {
      "problem": "Extended contact lens wear \u2014 overnight",
      "icd": "Z96.1",
      "onset": "2022",
      "status": "Active",
      "notes": "Patient admits to sleeping in lenses routinely"
    }
  ],
  "medications": [
    {
      "name": "Ciprofloxacin 0.3% drops q1h right eye (day 1-3)",
      "sig": "Instill 1 drop right eye every 1 hour while awake, first 48 hours",
      "prescriber": "Dr. Chen",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 new"
    },
    {
      "name": "Tobramycin 0.3% drops alternating with ciprofloxacin q30min (first 6 hours)",
      "sig": "Alternate with ciprofloxacin every 30 minutes for first 6 hours only",
      "prescriber": "Dr. Chen",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 loading dose only"
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
      "wt": "127 lbs",
      "ht": "5'0\"",
      "bmi": 24.8,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "127 lbs",
      "ht": "5'0\"",
      "bmi": 24.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "127 lbs",
      "ht": "5'0\"",
      "bmi": 24.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Contact Lens Wearer",
      "assessment": "Working diagnosis: Contact Lens Wearer",
      "plan": "Referral to optometry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Corneal Cultures",
      "results": [
        {
          "test": "Corneal scraping culture",
          "value": "Gram-negative rods seen on smear",
          "unit": "",
          "ref": "No growth",
          "flag": "H"
        },
        {
          "test": "Culture \u2014 preliminary",
          "value": "Pending 24-48h \u2014 likely Pseudomonas aeruginosa",
          "unit": "",
          "ref": "No growth",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V4017K",
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
    "caseId": "contact-lens-keratitis-od",
    "diagnosis": "Pseudomonas Aeruginosa Bacterial Keratitis \u2014 Contact Lens-Associated",
    "acuity": 2,
    "presentation": "Contact Lens Wearer",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with contact lens wearer. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Pseudomonas bacterial keratitis \u2014 contact lens (correct)",
      "Acanthamoeba keratitis \u2014 contact lens (misses shower/tap water history)",
      "Sterile marginal infiltrate \u2014 smaller, peripheral, no epithelial defect",
      "Herpes simplex keratitis \u2014 dendritic pattern",
      "Staphylococcal keratitis \u2014 central, slower progression",
      "Fungal keratitis \u2014 trauma history, feathery borders"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a optometry case with chief complaint: Contact Lens Wearer. What are the most important questions for a optometry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a optometry perspective, what is the most critical finding that narrows this differential? What is the optometry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the optometry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: bacterial keratitis (likely Pseudomonas) from overnight contact lens wear. Key OD learning points: (1) Pseudomonas vs Acanthamoeba distinction is critical \u2014 both are contact lens-associated but Acanthamoeba requires very different treatment (PHMB/brolene, NOT fluoroquinolones). Ask specifically about: shower/swimming in contacts, tap water exposure, hot tub use. (2) Culture BEFORE antibiotics \u2014 corneal scraping for gram stain, culture, and sensitivity. In practice, start treatment empirically then adjust based on cultures. (3) Fortified antibiotics for severe cases: tobramycin 14mg/mL alternating with cefazolin 50mg/mL. For moderate cases, fluoroquinolone monotherapy (ciprofloxacin) is first-line. (4) Pseudomonas: rapid, aggressive tissue destruction ('melting'). Follow daily in first 48 hours. Signs of worsening = refer to cornea specialist immediately. (5) Contact lens counseling: discard all current lenses and case, never sleep in lenses, replace case monthly, use fresh solution."
    }
  }
};
