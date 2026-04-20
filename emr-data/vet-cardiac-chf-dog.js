
window.EMR_DATA = {
  "patient": {
    "name": "Max",
    "dob": "06/22/2019",
    "age": 6,
    "sex": "Male (neutered)",
    "species": "Labrador Retriever",
    "mrn": "RDX-2025-91344",
    "pronouns": "They/Them",
    "insurance": "Owner Pay \u2014 No Insurance",
    "pcp": "Dr. Maria Santos, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "VI",
    "race": "Species: Labrador Retriever",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021 (Owner: Elena Rodriguez)",
    "phone": "(954) 555-9552",
    "email": "maxowner@email.com",
    "emergencyContact": {
      "name": "Elena Rodriguez (Owner)",
      "phone": "(954) 555-6875"
    }
  },
  "problems": [
    {
      "problem": "Myxomatous mitral valve disease \u2014 Stage B2",
      "icd": "I34.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Cavalier King Charles Spaniel. Grade IV/VI MR murmur, cardiac enlargement on radiograph. Pimobendan now indicated (EPIC trial)."
    },
    {
      "problem": "Left atrial enlargement \u2014 LA:Ao ratio 1.7",
      "icd": "I51.7",
      "onset": "2024",
      "status": "Active",
      "notes": "LA:Ao >1.6 is ACVIM B2 criterion \u2014 marks risk of decompensation"
    },
    {
      "problem": "Vertebral heart score \u2014 VHS 10.8",
      "icd": "I51.9",
      "onset": "2024",
      "status": "Active",
      "notes": "VHS >10.5 in Cavalier = cardiac enlargement criterion for B2 staging"
    }
  ],
  "medications": [
    {
      "name": "Pimobendan 0.25mg/kg PO BID (2.5mg BID for 10kg dog)",
      "sig": "Give orally twice daily, 1 hour before feeding \u2014 positive inotrope and vasodilator. EPIC trial proven.",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "11/2024",
      "refills": 3,
      "status": "Active \u2014 new"
    },
    {
      "name": "No furosemide yet \u2014 Stage B2, not decompensated",
      "sig": "Furosemide only when Stage C (clinical CHF signs present)",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "N/A",
      "refills": 0,
      "status": "Not indicated"
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
      "bp": "145/95",
      "hr": 148,
      "rr": 38,
      "temp": "103.8\u00b0F",
      "spo2": "96%",
      "wt": "28 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Hospital"
    },
    {
      "date": "08/20/2024",
      "bp": "128/80",
      "hr": 92,
      "rr": 22,
      "temp": "101.5\u00b0F",
      "spo2": "99%",
      "wt": "29.5 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Clinic"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Coughing at Night",
      "assessment": "Working diagnosis: Coughing at Night",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Cardiac Workup \u2014 Canine",
      "results": [
        {
          "test": "ProBNP (canine)",
          "value": "1,240",
          "unit": "pmol/L",
          "ref": "<900",
          "flag": "H"
        },
        {
          "test": "Troponin I",
          "value": "0.14",
          "unit": "ng/mL",
          "ref": "<0.20",
          "flag": ""
        },
        {
          "test": "Electrolytes \u2014 K+",
          "value": "4.2",
          "unit": "mEq/L",
          "ref": "3.5-5.5",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "0.8",
          "unit": "mg/dL",
          "ref": "0.5-1.5",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Thoracic Radiographs (3-view) + Echocardiogram",
      "indication": "Grade IV/VI murmur, coughing at night",
      "findings": "Radiographs: VHS 10.8 (>10.5 abnormal in Cavalier). Mild left atrial enlargement. Pulmonary vasculature within normal limits \u2014 no pulmonary edema. Echo: mitral valve prolapse with significant MR. LA:Ao ratio 1.7 (>1.6 = enlarged). Normal LV systolic function, FS 42%. Mild LA dilation.",
      "impression": "MMVD Stage B2 \u2014 ACVIM criteria met (LA:Ao >1.6 and/or VHS >10.5). Pimobendan indicated per EPIC trial. No evidence of decompensated CHF. Recheck in 6 months or sooner if symptoms develop."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V4667K",
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
    "caseId": "vet-cardiac-chf-dog",
    "diagnosis": "Myxomatous Mitral Valve Disease Stage B2 \u2014 ACVIM Consensus, Pimobendan Indicated",
    "acuity": 2,
    "presentation": "Coughing at Night",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with coughing at night. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this cardiovascular presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Species-appropriate physical exam",
      "Vital signs (species-normal ranges)",
      "Weight and body condition scoring",
      "Auscultation (heart, lungs, GI for ruminants)",
      "Abdominal palpation",
      "Mucous membrane color and CRT",
      "Neurological assessment",
      "Pain scoring (species-appropriate scale)"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "MMVD Stage B2 \u2014 pimobendan indicated (correct per EPIC trial)",
      "MMVD Stage B1 \u2014 no enlargement criteria, pimobendan not yet indicated",
      "MMVD Stage C \u2014 decompensated (no pulmonary edema, not yet)",
      "Dilated cardiomyopathy \u2014 Cavalier CKCS has MMVD, not DCM",
      "Pericardial effusion \u2014 different echo findings",
      "Arrhythmia causing cough \u2014 cough is nighttime from left atrial pressure, not arrhythmia"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Coughing at Night. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: MMVD Stage B2, pimobendan indicated. Key vet learning: (1) ACVIM MMVD staging: A = at-risk breed, no murmur. B1 = murmur, no cardiac enlargement. B2 = murmur + enlargement (LA:Ao >1.6 or VHS >10.5 in Cavalier). C = decompensated CHF (pulmonary edema). D = refractory CHF. (2) EPIC trial (2016): pimobendan in Stage B2 Cavaliers delayed onset of CHF by 15 months compared to placebo. This is the landmark trial that changed practice \u2014 pimobendan is now standard of care in B2, NOT just decompensated disease. (3) Why pimobendan before CHF: positive inotrope (improves cardiac contractility via PDE3 inhibition + Ca++ sensitization) and vasodilator (reduces preload/afterload). In B2, improves cardiac remodeling and delays decompensation. (4) How to explain to owner: 'Your dog has heart disease that is enlarging the heart but not yet causing heart failure symptoms. This medication, proven in research trials, slows the progression and delays the point where the heart starts to fail.' (5) Monitoring: recheck every 6 months in B2. Transition to Stage C criteria: cough at rest, exercise intolerance, pulmonary edema on x-ray \u2192 add furosemide + enalapril + continue pimobendan."
    }
  }
};
