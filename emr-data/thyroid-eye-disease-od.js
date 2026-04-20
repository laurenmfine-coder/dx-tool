
window.EMR_DATA = {
  "patient": {
    "name": "Carmen Rivera",
    "dob": "01/01/1996",
    "age": 29,
    "sex": "Female",
    "mrn": "RDX-2025-75705",
    "pronouns": "She/Her",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "Winn-Dixie Pharmacy \u2014 3100 Davie Blvd, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Proptosis",
    "race": "Asian",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-1176",
    "email": "carmenri@email.com",
    "emergencyContact": {
      "name": "Ben Tran (Family)",
      "phone": "(954) 555-4281"
    }
  },
  "problems": [
    {
      "problem": "Thyroid eye disease (TED) \u2014 moderate-severe, active phase",
      "icd": "H06.21",
      "onset": "2023",
      "status": "Active",
      "notes": "Diane Wu, 44F \u2014 known Graves' disease, euthyroid on methimazole. Progressive proptosis, diplopia, and periorbital edema x8 months. CAS 5/7."
    },
    {
      "problem": "Compressive optic neuropathy \u2014 vision threatening",
      "icd": "H47.019",
      "onset": "2024",
      "status": "Active",
      "notes": "Color desaturation right eye, RAPD present. Urgent ophthalmology \u2014 optic nerve compression risk from orbital fat and EOM enlargement."
    },
    {
      "problem": "Diplopia \u2014 inferior rectus restriction",
      "icd": "H51.09",
      "onset": "2023",
      "status": "Active",
      "notes": "Inferior and medial rectus enlargement on MRI orbit. Restricted upward gaze. Prism glasses as temporary measure."
    }
  ],
  "medications": [
    {
      "name": "Teprotumumab (Tepezza) 10mg/kg IV q3 weeks x8 doses \u2014 biologic for TED",
      "sig": "IGF-1R inhibitor \u2014 FDA approved for active TED. Reduces proptosis, diplopia, and CAS. Infusion every 3 weeks.",
      "prescriber": "Endocrinology/Ophthalmology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 infusion series"
    },
    {
      "name": "Methylprednisolone 500mg IV weekly x6 weeks \u2014 pulsed steroid",
      "sig": "IV pulse steroids for active, moderate-severe TED. Concurrent with teprotumumab consideration.",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 pulsed"
    },
    {
      "name": "Selenium 200mcg PO daily \u2014 for mild/moderate TED supplementation",
      "sig": "Antioxidant \u2014 reduces disease activity in mild-moderate TED (EUGOGO trial). Continue even with escalated therapy.",
      "prescriber": "Endocrinology",
      "start": "2023",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Methimazole 10mg PO BID \u2014 maintain euthyroidism",
      "sig": "Critical: hyperthyroidism and hypothyroidism BOTH worsen TED. Target strict euthyroid state throughout treatment.",
      "prescriber": "Endocrinology",
      "start": "2022",
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
      "bp": "136/84",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "120 lbs",
      "ht": "5'5\"",
      "bmi": 20.0,
      "setting": "Eye Clinic"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "120 lbs",
      "ht": "5'5\"",
      "bmi": 20.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "120 lbs",
      "ht": "5'5\"",
      "bmi": 20.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Proptosis",
      "assessment": "Working diagnosis: Proptosis",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "TED Monitoring",
      "results": [
        {
          "test": "TSH",
          "value": "1.2",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
          "flag": ""
        },
        {
          "test": "Free T4",
          "value": "1.1",
          "unit": "ng/dL",
          "ref": "0.8-1.8",
          "flag": ""
        },
        {
          "test": "TRAb (TSH receptor antibody)",
          "value": "12.4",
          "unit": "IU/L",
          "ref": "<1.75",
          "flag": "H"
        },
        {
          "test": "CAS (clinical activity score)",
          "value": "5/7",
          "unit": "",
          "ref": "<3 inactive",
          "flag": "H"
        },
        {
          "test": "Proptosis \u2014 Hertel exophthalmometer",
          "value": "25mm right, 23mm left",
          "unit": "",
          "ref": "<18mm",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "MRI Orbits With Contrast",
      "indication": "Proptosis, diplopia, optic neuropathy concern",
      "findings": "Bilateral inferior and medial rectus enlargement (muscle belly, not tendon \u2014 distinguishes TED from orbital myositis). Crowded orbital apex. Fat prolapse. No discrete mass.",
      "impression": "Thyroid eye disease \u2014 bilateral EOM enlargement at orbital apex. Optic nerve compression risk. Orbital decompression candidacy to be assessed."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5886K",
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
    "caseId": "thyroid-eye-disease-od",
    "diagnosis": "Thyroid Eye Disease \u2014 Graves' Ophthalmopathy, Proptosis and Diplopia, Orbital Decompression Candidacy",
    "acuity": 3,
    "presentation": "Proptosis",
    "category": "ophthalmic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with proptosis. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "Thyroid eye disease \u2014 Graves' ophthalmopathy, TRAb elevated (correct)",
      "Orbital pseudotumor (idiopathic orbital inflammation) \u2014 pain, tendon involvement on MRI; TRAb negative",
      "Orbital lymphoma \u2014 older, progressive, different MRI enhancement pattern",
      "Cavernous sinus thrombosis \u2014 fever, headache, multiple cranial nerve palsies",
      "IgG4-related orbital disease \u2014 TRAb negative, IgG4 elevated, responds to steroids",
      "Orbital cellulitis \u2014 fever, skin erythema, acute onset"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Proptosis. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: thyroid eye disease (TED), moderate-severe. Key learning: (1) TED activity vs severity: CAS (Clinical Activity Score) measures ACTIVITY (inflammation \u2014 pain, redness, swelling, chemosis, lid edema); EUGOGO severity grades measure structural damage (proptosis, diplopia, corneal exposure, optic neuropathy). Active disease responds to immunotherapy; inactive disease may need surgery (decompression, strabismus, lid). (2) Teprotumumab: IGF-1R monoclonal antibody \u2014 FDA-approved 2020 for active TED. Dramatically reduces proptosis (mean 2-3mm) and diplopia. Side effects: hyperglycemia, hearing loss, muscle cramps, IBD exacerbation. (3) Thyroid control and TED: RAI (radioactive iodine) worsens TED \u2014 avoid in moderate-severe TED or pretreat with steroids. Hyperthyroidism AND hypothyroidism both worsen TED. Strict euthyroid state throughout is essential. (4) MRI orbit TED pattern: muscle BELLY enlargement (tendon spared) \u2014 inferior > medial > superior > lateral recti (mnemonic: I'M SLow). Orbital myositis = tendon and belly both enlarged. This distinction is diagnostic. (5) Optic neuropathy in TED: a true ophthalmologic emergency \u2014 apical crowding from enlarged muscles compresses optic nerve. Signs: color desaturation, RAPD, visual field defect. Treat with IV pulse steroids \u00b1 urgent orbital decompression."
    }
  }
};
