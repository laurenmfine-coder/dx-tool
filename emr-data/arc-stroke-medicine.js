
window.EMR_DATA = {
  "patient": {
    "name": "Sam Patel",
    "dob": "04/18/1987",
    "age": 38,
    "sex": "Non-binary",
    "mrn": "RDX-2025-73023",
    "pronouns": "They/Them",
    "insurance": "Cigna EPO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "James Okoye",
    "race": "Middle Eastern",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-5411",
    "email": "sampatel@email.com",
    "emergencyContact": {
      "name": "Drew Santos (Family)",
      "phone": "(954) 555-3646"
    }
  },
  "problems": [
    {
      "problem": "Acute ischemic stroke \u2014 left MCA, NIHSS 14",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "Patricia Malone, 71F \u2014 right-sided weakness + aphasia, LKW 2.5 hours ago. tPA given. NIHSS improving."
    },
    {
      "problem": "Post-tPA hemorrhagic transformation risk \u2014 BP management critical",
      "icd": "I63.9",
      "onset": "2024",
      "status": "Active",
      "notes": "BP target <180/105 for 24h post-tPA. Labetalol PRN protocol active. No anticoagulation x24h."
    },
    {
      "problem": "Atrial fibrillation \u2014 newly detected, likely cardioembolic source",
      "icd": "I48.91",
      "onset": "2024",
      "status": "Active",
      "notes": "New AFib on telemetry post-stroke. Anticoagulation timing: 2-4 weeks post-stroke for moderate infarct size."
    },
    {
      "problem": "Dysphagia \u2014 NPO, NG tube pending SLP evaluation",
      "icd": "R13.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Bedside dysphagia screen failed. SLP evaluation tomorrow. NG tube for medications."
    }
  ],
  "medications": [
    {
      "name": "Alteplase 0.9mg/kg IV (max 90mg) \u2014 completed",
      "sig": "10% bolus over 1 min, remainder over 60 min. Last dose given 45 min ago. Do NOT give antithrombotic x24h.",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 0,
      "status": "Completed"
    },
    {
      "name": "Labetalol 10-20mg IV PRN \u2014 BP >180/105",
      "sig": "PRN for post-tPA BP management. Target <180/105. Avoid BP <150 \u2014 preserve penumbra perfusion.",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 0,
      "status": "Active PRN"
    },
    {
      "name": "Aspirin 325mg via NG tube \u2014 start at 24h post-tPA",
      "sig": "Hold x24h after tPA. Start only after 24h MRI confirms no hemorrhagic transformation.",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 0,
      "status": "Hold \u2014 start at 24h"
    },
    {
      "name": "Atorvastatin 80mg via NG tube QHS",
      "sig": "High-intensity statin for stroke \u2014 LDL target <70. Start immediately.",
      "prescriber": "Neurology",
      "start": "2024",
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
      "wt": "82 lbs",
      "ht": "5'1\"",
      "bmi": 15.5,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "82 lbs",
      "ht": "5'1\"",
      "bmi": 15.5,
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
      "ht": "5'1\"",
      "bmi": 15.5,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for James Okoye",
      "assessment": "Working diagnosis: James Okoye",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Acute Stroke Panel",
      "results": [
        {
          "test": "Glucose",
          "value": "148",
          "unit": "mg/dL",
          "ref": "70-140",
          "flag": "H"
        },
        {
          "test": "INR",
          "value": "1.0",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": ""
        },
        {
          "test": "Platelet count",
          "value": "220",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "1.0",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": ""
        },
        {
          "test": "Troponin I (high sensitivity)",
          "value": "0.08",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "LDL (fasting)",
          "value": "128",
          "unit": "mg/dL",
          "ref": "<70 for stroke",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Head Non-Contrast \u2014 Acute",
      "indication": "Acute stroke symptoms \u2014 exclude hemorrhage before tPA",
      "findings": "No acute hemorrhage. No large established infarct. Loss of gray-white differentiation in left MCA territory \u2014 early ischemic change.",
      "impression": "No hemorrhage \u2014 tPA eligible. Early left MCA ischemia confirmed."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V4280K",
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
    "caseId": "arc-stroke-medicine",
    "diagnosis": "Acute Ischemic Stroke \u2014 Left MCA Territory, tPA Administered, Post-Thrombolysis Monitoring Protocol",
    "acuity": 1,
    "presentation": "James Okoye",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with james okoye. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this neurologic presentation.",
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
      "Left MCA ischemic stroke \u2014 tPA administered, post-thrombolysis monitoring (correct)",
      "Hemorrhagic stroke \u2014 excluded by CT before tPA",
      "Todd's paralysis post-seizure \u2014 no witnessed seizure, aphasia not postictal",
      "Hypoglycemic hemiplegia \u2014 glucose 148, not hypoglycemic",
      "Brain tumor with acute decompensation \u2014 no prior symptoms, acute onset",
      "Complex migraine \u2014 no prior migraine history, NIHSS 14 too severe"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: James Okoye. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: left MCA ischemic stroke, post-tPA monitoring. Key medicine learning: (1) tPA eligibility criteria (simplified): onset <4.5h (some cases), no hemorrhage on CT, no recent major surgery, no anticoagulation, BP <185/110 controllable. Relative contraindications include glucose <50 or >400, INR >1.7, severe stroke (NIHSS >25) or very mild (NIHSS <4 in some guidelines. (2) Post-tPA BP management: maintain <180/105 for 24 hours \u2014 hemorrhagic transformation risk rises with uncontrolled hypertension. Do NOT lower BP aggressively \u2014 penumbral perfusion requires adequate pressure. Labetalol 10-20mg IV or nicardipine infusion for BP control. (3) Hemorrhagic transformation warning signs: sudden neurological worsening, new headache, decreased consciousness, new BP surge. If suspected: STAT CT, hold antithrombotics, reverse if needed. (4) Cardioembolic stroke and AFib: new AFib detected post-stroke \u2192 anticoagulation when safe. For moderate infarct: anticoagulate at 2-4 weeks (1-3-6-12 rule: TIA/minor = 1-3 days, moderate = 6-7 days, large = 2-4 weeks). (5) Elevated troponin post-stroke: stress cardiomyopathy or demand ischemia from sympathetic surge. Cardiology consultation, echo, and continuous telemetry."
    }
  }
};
