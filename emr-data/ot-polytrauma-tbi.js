
window.EMR_DATA = {
  "patient": {
    "name": "Elena Rodriguez",
    "dob": "07/12/1988",
    "age": 37,
    "sex": "Female",
    "mrn": "RDX-2025-49047",
    "pronouns": "She/Her",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Polytrauma Patient",
    "race": "White",
    "address": "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-1290",
    "email": "elenarod@email.com",
    "emergencyContact": {
      "name": "Kevin Osei (Family)",
      "phone": "(954) 555-6439"
    }
  },
  "problems": [
    {
      "problem": "Moderate TBI \u2014 GCS 9 at scene, cognitive deficits",
      "icd": "S09.90XA",
      "onset": "2024",
      "status": "Active",
      "notes": "Alex Rivera, 28M \u2014 MVA. Posttraumatic amnesia resolved. Memory, attention, executive function impaired. MoCA 22/30."
    },
    {
      "problem": "Cognitive-communication deficits \u2014 word-finding, processing speed",
      "icd": "F07.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Co-managed by OT and SLP. OT focuses on functional cognition and ADL performance."
    },
    {
      "problem": "Return to work \u2014 construction foreman, cognitively demanding",
      "icd": "Z56.5",
      "onset": "2024",
      "status": "Active",
      "notes": "Construction foreman requires sustained attention and executive function \u2014 both impaired. Graduated return-to-work plan."
    }
  ],
  "medications": [
    {
      "name": "Compensatory strategy training \u2014 memory book, phone reminders",
      "sig": "Memory book (daily planner + contact list + to-do list). Phone alarm reminders for scheduled tasks. Structured daily routine. Train the HABIT of recording and reviewing \u2014 not just giving the book.",
      "prescriber": "OT",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Attention Process Training (APT) \u2014 3x/week 1h",
      "sig": "Hierarchical attention tasks: sustained \u2192 selective \u2192 alternating \u2192 divided. Evidence for attention improvement post-TBI.",
      "prescriber": "OT",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Work hardening \u2014 graduated cognitive demand simulation",
      "sig": "Simulated work tasks with increasing complexity, time pressure, and dual tasks mirroring construction foreman demands. Progress based on performance.",
      "prescriber": "OT/Vocational rehab",
      "start": "2024",
      "refills": 0,
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
      "bp": "128/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "105 lbs",
      "ht": "5'4\"",
      "bmi": 18.0,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "105 lbs",
      "ht": "5'4\"",
      "bmi": 18.0,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "105 lbs",
      "ht": "5'4\"",
      "bmi": 18.0,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Polytrauma Patient",
      "assessment": "Working diagnosis: Polytrauma Patient",
      "plan": "Referral to ot. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "TBI Cognitive Assessment",
      "results": [
        {
          "test": "MoCA",
          "value": "22/30",
          "unit": "",
          "ref": "\u226526",
          "flag": "L"
        },
        {
          "test": "Trail Making B",
          "value": "145",
          "unit": "seconds",
          "ref": "<90 seconds",
          "flag": "H"
        },
        {
          "test": "Digit Span Forward",
          "value": "5 digits",
          "unit": "",
          "ref": "7\u00b12",
          "flag": "L"
        },
        {
          "test": "CPT-II sustained attention",
          "value": "Elevated omission and commission errors",
          "unit": "",
          "ref": "Normal range",
          "flag": "H"
        },
        {
          "test": "FIM",
          "value": "106/126",
          "unit": "",
          "ref": "108+ = modified independence",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5503K",
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
    "caseId": "ot-polytrauma-tbi",
    "diagnosis": "Moderate TBI Polytrauma \u2014 OT Cognitive Rehabilitation, Compensatory Strategy Training, Return to Work",
    "acuity": 3,
    "presentation": "Polytrauma Patient",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with polytrauma patient. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "Tell me about a typical day for you.",
      "What activities are most important to you?",
      "What are you having trouble doing now?",
      "What did you do before this problem?",
      "Tell me about your home setup.",
      "Who helps you at home?",
      "What are your goals for therapy?",
      "What does success look like to you?",
      "Are you having any cognitive difficulties?",
      "Tell me about your work and leisure activities."
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
      "Occupational profile interview",
      "ADL observation",
      "Cognitive screen (MMSE or MoCA)",
      "Upper extremity function",
      "Fine motor assessment",
      "Home safety evaluation",
      "Assistive device assessment",
      "Goals setting interview"
    ],
    "examFindings": {
      "Occupational Profile": "ADL limitations identified relevant to diagnosis",
      "Cognitive Screen": "Results per case presentation",
      "Upper Extremity": "Findings consistent with functional limitation",
      "Home Safety": "Risk factors identified per case context"
    },
    "ddxTargets": [
      "TBI \u2014 OT cognitive rehabilitation, return to work (correct)",
      "Dementia \u2014 TBI is non-progressive (improving); dementia is progressive",
      "PTSD cognitive symptoms \u2014 co-occurs with TBI; treat both; OT addresses functional cognition",
      "Malingering \u2014 neuropsychological testing can detect; clinical findings support genuine deficits",
      "No OT if physically independent \u2014 cognitive OT is distinct from physical rehabilitation",
      "Medication side effects \u2014 TBI is primary etiology; review meds but TBI drives deficits"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a ot case with chief complaint: Polytrauma Patient. What are the most important questions for a ot to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a ot perspective, what is the most critical finding that narrows this differential? What is the ot-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the ot's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: moderate TBI, OT cognitive rehabilitation. Key learning: (1) OT cognitive rehab approaches: restorative (directly trains impaired functions \u2014 attention training) and compensatory (teaches strategies to work around deficits \u2014 memory book, phone reminders). Both used simultaneously. (2) Memory book training: OT trains the systematic habit of recording and reviewing \u2014 not just providing the book. This is the most evidence-based intervention for TBI memory impairment. (3) Trail Making B: measures cognitive flexibility and executive function \u2014 >90s = impairment. At 145s this patient has significant executive function deficit. This guides return-to-work planning \u2014 job demands must match cognitive recovery level. (4) Graduated RTW: reduced hours, reduced demands, familiar tasks. Supervisors need education about TBI cognitive deficits. OT provides job task analysis. (5) Insight: TBI patients often lack awareness (anosognosia) of cognitive changes. OT uses objective task performance to gauge capacity and develops realistic self-awareness as part of rehabilitation."
    }
  }
};
