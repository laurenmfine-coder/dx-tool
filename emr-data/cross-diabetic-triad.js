
window.EMR_DATA = {
  "patient": {
    "name": "Nicole Okafor",
    "dob": "10/02/1982",
    "age": 43,
    "sex": "Female",
    "mrn": "RDX-2025-75975",
    "pronouns": "She/Her",
    "insurance": "Tricare",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "T2DM A1c 10.2%",
    "race": "Hispanic or Latino",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-4230",
    "email": "nicoleok@email.com",
    "emergencyContact": {
      "name": "Drew Santos (Family)",
      "phone": "(954) 555-8737"
    }
  },
  "problems": [
    {
      "problem": "Diabetic peripheral neuropathy \u2014 bilateral stocking-glove distribution",
      "icd": "E11.40",
      "onset": "2022",
      "status": "Active",
      "notes": "Eduardo Reyes, 56M \u2014 T2DM x12 years, A1c 10.1%. Burning feet, loss of protective sensation (LOPS)."
    },
    {
      "problem": "Diabetic nephropathy \u2014 UACR 420 mg/g (macroalbuminuria)",
      "icd": "E11.65",
      "onset": "2021",
      "status": "Active",
      "notes": "eGFR 52 \u2014 CKD stage 3b. Nephrology referral for co-management. SGLT-2i + ACEi/ARB indicated."
    },
    {
      "problem": "Diabetic retinopathy \u2014 non-proliferative, moderate grade",
      "icd": "E11.319",
      "onset": "2023",
      "status": "Active",
      "notes": "Ophthalmology: microaneurysms, dot-blot hemorrhages, no neovascularization. Annual dilated exam."
    },
    {
      "problem": "Foot at risk \u2014 LOPS + absent ankle reflexes + callus",
      "icd": "E11.621",
      "onset": "2024",
      "status": "Active",
      "notes": "Wagner grade 0 risk foot. Protective footwear, podiatry, patient education critical."
    }
  ],
  "medications": [
    {
      "name": "Metformin 1000mg BID \u2014 continue if tolerated (reduce if eGFR <30)",
      "sig": "Hold if eGFR <30. Monitor eGFR q3-6 months.",
      "prescriber": "PCP/Endocrinology",
      "start": "2013",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Empagliflozin 10mg PO daily \u2014 SGLT-2i for nephroprotection",
      "sig": "SGLT-2 inhibitor \u2014 slows CKD progression, reduces CV events. Genital mycotic infection risk \u2014 counsel hygiene.",
      "prescriber": "Nephrology/Endocrinology",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 new"
    },
    {
      "name": "Lisinopril 20mg PO daily \u2014 ACEi for nephroprotection",
      "sig": "First-line nephroprotection. Uptitrate to maximum tolerated dose. Monitor K+ and creatinine.",
      "prescriber": "PCP",
      "start": "2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Pregabalin 75mg BID \u2014 diabetic peripheral neuropathy pain",
      "sig": "Uptitrate to 150mg BID if tolerated. First-line for DPN pain. Dizziness and drowsiness are common side effects.",
      "prescriber": "Neurology/PCP",
      "start": "2024",
      "refills": 3,
      "status": "Active \u2014 new"
    },
    {
      "name": "Protective footwear and daily foot inspection",
      "sig": "Therapeutic shoes \u2014 reduces plantar pressure. Daily inspection of soles with mirror. No walking barefoot.",
      "prescriber": "Podiatry",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 non-pharmacologic"
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
      "wt": "110 lbs",
      "ht": "5'4\"",
      "bmi": 18.9,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "110 lbs",
      "ht": "5'4\"",
      "bmi": 18.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "110 lbs",
      "ht": "5'4\"",
      "bmi": 18.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for T2DM A1c 10.2%",
      "assessment": "Working diagnosis: T2DM A1c 10.2%",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Diabetes Complication Screen",
      "results": [
        {
          "test": "HbA1c",
          "value": "10.1",
          "unit": "%",
          "ref": "<7.0",
          "flag": "H"
        },
        {
          "test": "UACR",
          "value": "420",
          "unit": "mg/g",
          "ref": "<30",
          "flag": "H"
        },
        {
          "test": "eGFR",
          "value": "52",
          "unit": "mL/min/1.73m\u00b2",
          "ref": ">60",
          "flag": "L"
        },
        {
          "test": "LDL",
          "value": "118",
          "unit": "mg/dL",
          "ref": "<70 for DM+CKD",
          "flag": "H"
        },
        {
          "test": "10g monofilament \u2014 right foot",
          "value": "Unable to feel",
          "unit": "",
          "ref": "Should feel",
          "flag": "H"
        },
        {
          "test": "Vibration sense \u2014 right ankle",
          "value": "Absent",
          "unit": "",
          "ref": "Present",
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
      "lot": "V5289K",
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
    "caseId": "cross-diabetic-triad",
    "diagnosis": "Diabetic Triad \u2014 Peripheral Neuropathy, Nephropathy, and Retinopathy Presenting Together, Annual Screening Overdue",
    "acuity": 2,
    "presentation": "T2DM A1c 10.2%",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with t2dm a1c 10.2%. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this endocrine presentation.",
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
      "Diabetic triad \u2014 neuropathy + nephropathy + retinopathy (correct)",
      "Uremia-induced neuropathy \u2014 CKD contributing but primary etiology is diabetes",
      "IgA nephropathy \u2014 no hematuria, DM history and pattern supports diabetic nephropathy",
      "CMV/HIV retinopathy \u2014 immunocompetent, distribution and lesion type differ",
      "B12 deficiency neuropathy \u2014 check if on metformin long-term (B12 depletion risk)",
      "Charcot-Marie-Tooth \u2014 genetic, symmetric motor > sensory, different onset pattern"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: T2DM A1c 10.2%. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: diabetic triad \u2014 simultaneous neuropathy, nephropathy, retinopathy. Key learning: (1) Screening schedule for T2DM: Annual UACR + eGFR (nephropathy), annual dilated eye exam (retinopathy), annual foot exam with monofilament + ABI (neuropathy/PAD). A1c every 3 months until at goal, then q6 months. This patient had overdue screening \u2014 every element abnormal. (2) SGLT-2 inhibitors for diabetic nephropathy: empagliflozin and dapagliflozin reduce progression to ESRD by ~30-40% independent of glycemic control \u2014 a direct renoprotective mechanism via reduced glomerular hyperfiltration. CKD-approved at eGFR \u226520. (3) ACEi/ARB + SGLT-2i = additive renoprotection \u2014 the combination is now standard of care for macroalbuminuria in T2DM. (4) DPN treatment: pregabalin, duloxetine, and gabapentin are first-line for painful DPN. Tricyclic antidepressants (amitriptyline) are effective but limited by anticholinergic side effects in older adults. Opioids are not first-line. (5) Metformin and B12: long-term metformin use depletes B12 via ileal absorption interference. Annual B12 level in patients on metformin >5 years \u2014 B12 deficiency can cause neuropathy that mimics or worsens DPN."
    }
  }
};
