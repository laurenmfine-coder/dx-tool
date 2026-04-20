
window.EMR_DATA = {
  "patient": {
    "name": "Daisy",
    "dob": "10/25/2017",
    "age": 8,
    "sex": "Female (spayed)",
    "species": "Dachshund",
    "mrn": "RDX-2025-74301",
    "pronouns": "They/Them",
    "insurance": "Owner Pay \u2014 No Insurance",
    "pcp": "Dr. Maria Santos, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Back Pain",
    "race": "Species: Dachshund",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025 (Owner: Carlos Rivera)",
    "phone": "(954) 555-8606",
    "email": "daisyowner@email.com",
    "emergencyContact": {
      "name": "Carlos Rivera (Owner)",
      "phone": "(954) 555-3912"
    }
  },
  "problems": [
    {
      "problem": "IVDD Hansen Type I \u2014 thoracolumbar disc extrusion",
      "icd": "M51.16",
      "onset": "2024",
      "status": "Active",
      "notes": "Dachshund, acute paraplegia, deep pain present but sluggish \u2014 surgical window open"
    },
    {
      "problem": "Frankel Grade III-IV \u2014 functional paraplegia with deep pain",
      "icd": "G82.22",
      "onset": "2024",
      "status": "Active",
      "notes": "Grade III = motor loss, intact deep pain. Grade IV = motor loss, diminished deep pain. Surgery indicated urgently."
    },
    {
      "problem": "Myelomalacia risk \u2014 cord compression >24h at high grade",
      "icd": "G95.19",
      "onset": "2024",
      "status": "Active",
      "notes": "If deep pain lost (Grade V), progressive myelomalacia likely \u2014 poor prognosis even with surgery"
    }
  ],
  "medications": [
    {
      "name": "Prednisolone 0.5mg/kg IV q12h (controversial)",
      "sig": "IV q12h \u2014 NOT recommended in current ACVIM guidelines for most IVDD. Discuss with neurology.",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Held pending neurology consult"
    },
    {
      "name": "Omeprazole 1mg/kg PO daily",
      "sig": "GI protection \u2014 required if steroids used",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Gabapentin 5mg/kg PO BID \u2014 neuropathic pain",
      "sig": "Orally twice daily \u2014 neuropathic pain management",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "11/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "STRICT CAGE REST \u2014 non-surgical management if owner declines surgery",
      "sig": "Crate rest 6-8 weeks minimum \u2014 no stairs, jumping, running",
      "prescriber": "Dr. Rodriguez DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "If surgery declined"
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
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Acute Paraplegia",
      "assessment": "Working diagnosis: Acute Paraplegia",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Pre-Surgical IVDD Panel",
      "results": [
        {
          "test": "CBC \u2014 WBC",
          "value": "9.8",
          "unit": "K/\u03bcL",
          "ref": "6-17",
          "flag": ""
        },
        {
          "test": "Glucose",
          "value": "118",
          "unit": "mg/dL",
          "ref": "70-138",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "0.8",
          "unit": "mg/dL",
          "ref": "0.5-1.5",
          "flag": ""
        },
        {
          "test": "ALT",
          "value": "42",
          "unit": "U/L",
          "ref": "10-125",
          "flag": ""
        },
        {
          "test": "Total protein",
          "value": "6.8",
          "unit": "g/dL",
          "ref": "5.5-7.2",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "MRI Thoracolumbar Spine (preferred) / CT Myelogram (alternative)",
      "indication": "Acute paraplegia in Dachshund \u2014 IVDD localization for surgical planning",
      "findings": "MRI: T13-L1 intervertebral disc extrusion with severe spinal cord compression, >50% cord diameter. High T2 signal within cord (edema) \u2014 concerning but not definitive for myelomalacia. No evidence of hemorrhagic myelomalacia on SWI sequences.",
      "impression": "Hansen Type I disc extrusion T13-L1 causing severe cord compression. Cord edema present. No hemorrhagic myelomalacia. Surgical candidate \u2014 urgent hemilaminectomy/fenestration recommended."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V9974K",
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
    "caseId": "vet-intervertebral-disc-disease",
    "diagnosis": "IVDD Type I (Hansen) \u2014 Dachshund, Frankel Grade III-IV, Surgical Candidate",
    "acuity": 1,
    "presentation": "Acute Paraplegia",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with acute paraplegia. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "IVDD Type I \u2014 surgical candidate, Frankel III-IV (correct)",
      "Fibrocartilaginous embolism (FCE) \u2014 acute, non-painful onset, no disc material on MRI",
      "Degenerative myelopathy \u2014 chronic progressive, no acute disc extrusion",
      "Spinal fracture/luxation \u2014 no trauma history",
      "Type II IVDD \u2014 older large breeds, not Dachshund Hansen Type I pattern",
      "Neoplasia \u2014 MRI disc material not mass lesion"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Acute Paraplegia. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: Hansen Type I IVDD, Frankel Grade III-IV \u2014 urgent surgery. Key veterinary learning: (1) Hansen Types: Type I = disc nucleus dehydrates and mineralizes (chondrodystrophic breeds: Dachshund, Beagle, CKCS) \u2192 acute extrusion, very painful, young-middle age. Type II = disc annulus degenerates and bulges (large breeds, older) \u2192 more chronic, less acute. (2) Frankel Grading: I=pain only, II=conscious proprioception deficits, III=paraparesis (can walk), IV=paraplegia (cannot walk, DEEP PAIN PRESENT), V=paraplegia (NO deep pain = myelomalacia likely). Frankel IV surgery outcome: 85-95% recover ambulation. Frankel V: <50% with rapid ascending myelomalacia = euthanasia discussion. (3) Deep pain test: pinch between toes with hemostatic forceps. RESPONSE (not just withdrawal reflex) = cortical awareness = intact ascending pathways. Withdrawal reflex without vocalization/turning = spinal reflex ONLY, not deep pain. (4) Surgical timing: most benefit within 12-24h of grade IV presentation. Each hour of cord compression at this grade = increasing edema, increasing myelomalacia risk. 'Time is cord.' (5) Steroid controversy: high-dose methylprednisolone not recommended in current ACVIM guidelines (side effects exceed benefit). Some surgeons use conservative anti-inflammatory dose. Surgery + cage rest is definitive."
    }
  }
};
