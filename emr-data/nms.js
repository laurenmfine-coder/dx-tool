
window.EMR_DATA = {
  "patient": {
    "name": "Bradley Chung",
    "patientHPI": "The staff at my group home called the ambulance because they said I was burning up with fever and my whole body went stiff like a board. I take medications for my mental health condition, and I can't really move my muscles properly - everything feels locked up and rigid.",
    "dob": "06/15/1992",
    "age": "34",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-182526",
    "language": "English",
    "race": "Black/African American",
    "phone": "(615) 555-3344",
    "email": "bradley.chung@email.com",
    "address": "4261 Maple St, Minneapolis, MN 55406",
    "insurance": "Medicaid",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "CVS Pharmacy \u2014 Sunrise Blvd",
    "emergencyContact": {
      "name": "William Phillips",
      "phone": "(414) 555-8555",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Group home staff: 'He's burning up and stiff as a board' Whole body stiffness, no specific pain reported",
    "diagnosis": "Neuroleptic Malignant Syndrome (NMS)"
  },
  "problems": [
    {
      "problem": "Neuroleptic malignant syndrome",
      "icd": "G21.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Temp 41.2\u00b0C, lead-pipe rigidity, autonomic instability, CK 18,000"
    },
    {
      "problem": "Schizophrenia \u2014 haloperidol offending agent",
      "icd": "F20.9",
      "onset": "2019",
      "status": "Active",
      "notes": "Dose increased 5\u219210mg 3 days ago"
    },
    {
      "problem": "AKI \u2014 myoglobinuria from rhabdomyolysis",
      "icd": "N17.9",
      "onset": "2024",
      "status": "Active",
      "notes": "CK 18,000 \u2192 myoglobin nephrotoxicity"
    }
  ],
  "medications": [
    {
      "name": "HOLD ALL ANTIPSYCHOTICS \u2014 immediate",
      "sig": "Discontinue haloperidol and all dopamine-blocking agents",
      "prescriber": "Medicine/Psychiatry",
      "start": "11/2024",
      "refills": 0,
      "status": "HELD"
    },
    {
      "name": "Bromocriptine 2.5mg PO TID",
      "sig": "Dopamine agonist \u2014 restore D2 tone",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Dantrolene 2.5mg/kg IV PRN severe rigidity",
      "sig": "IV \u2014 blocks SR Ca++ release, reduces rigidity",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "NS 1-1.5 L/hr IV \u2014 rhabdomyolysis hydration",
      "sig": "Target UO 200 mL/hr",
      "prescriber": "Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Haloperidol",
      "reaction": "Prior episode of rigidity and fever (possible prior NMS that was unrecognized)",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "10:09",
      "bp": "168/98 (fluctuating: was 92/60 an hour ago per EMS)",
      "hr": "126",
      "rr": "26",
      "temp": "40.7\u00b0C",
      "spo2": "94%",
      "pain": "/10",
      "bmi": "28",
      "weight": "73 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Group home staff: 'He's burning up and stiff as a board' Whole body stiffness, no specific pain reported",
      "hpi": "Bradley Chung is a 34-year-old male presenting with group home staff: 'he's burning up and stiff as a board' whole body stiffness, no specific pain reported. Past medical history includes Schizophrenia, Tardive dyskinesia, Type 2 Diabetes. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Neuroleptic Malignant Syndrome (NMS) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "NMS Panel",
      "results": [
        {
          "test": "CK",
          "value": "18,000",
          "unit": "U/L",
          "ref": "22-198",
          "flag": "H"
        },
        {
          "test": "Temperature",
          "value": "41.2",
          "unit": "\u00b0C",
          "ref": "36.5-37.5",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "16.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Serum iron",
          "value": "28",
          "unit": "\u03bcg/dL",
          "ref": "60-170",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "2.1",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Urine myoglobin",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Brother: schizophrenia",
    "No known NMS history in family"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "1 pack/day"
    ],
    [
      "Alcohol",
      "Denies"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Not employed, lives in supervised group home"
    ],
    [
      "Living",
      "Group home with 24-hour staff"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Bradley appears confused and disoriented with flat affect, struggling to communicate coherently due to his altered mental status. He seems distressed by his inability to move normally but has limited insight into the severity of his condition. He provides basic responses but often needs prompting and may give inconsistent answers due to his cognitive impairment.",
    "interviewQuestions": [
      "When did you first notice the muscle stiffness and rigidity?",
      "Have there been any recent changes to your psychiatric medications?",
      "Are you experiencing any tremors or involuntary movements?",
      "Have you been sweating more than usual?",
      "Are you having any difficulty swallowing or speaking?",
      "Have you noticed any changes in your mental clarity or confusion?",
      "Are you experiencing any nausea or vomiting?",
      "Have you had any recent infections or illnesses?",
      "When did you last take your psychiatric medication?",
      "Have you been eating and drinking normally?",
      "Are you having any chest pain or difficulty breathing?",
      "Have you experienced anything like this before?",
      "Has anyone in your family had similar reactions to psychiatric medications?"
    ],
    "patientResponses": {
      "default": "I'm not sure... everything feels mixed up right now. Can you ask that differently?",
      "onset": "The staff said it started this morning when I woke up. I felt really hot and couldn't move my arms and legs like normal. Everything just got tight and stiff.",
      "character": "My whole body feels like it's locked up tight, like someone put cement in my muscles. I can barely move and everything feels rigid.",
      "location": "It's everywhere - my arms, legs, back, neck. My whole body feels stiff and hard to move.",
      "severity": "It's really bad, maybe 8 out of 10. I can't do anything for myself - can't even hold a cup or walk properly.",
      "aggravating": "Trying to move makes it worse. Even just shifting in bed makes the stiffness feel tighter.",
      "relieving": "Nothing really helps. The staff tried having me rest but it's not getting better.",
      "associated": "I've been sweating a lot and feel really hot. I think I might have thrown up earlier but I'm not sure. I feel confused and dizzy.",
      "denies": "No chest pain, no trouble breathing really, no headache that I can tell.",
      "history": "No, nothing like this has happened before. I've had some movement problems from my medications but not like this.",
      "medications": "Olanzapine; Benztropine; Metformin",
      "allergies": "Haloperidol",
      "family": "My brother has schizophrenia too but I don't think anyone in my family has had problems like this with medications.",
      "social": "I live in a group home with staff who help me. I don't work. I smoke about a pack a day but don't drink alcohol or use drugs."
    },
    "examManeuvers": [
      "General appearance and mental status assessment",
      "Vital signs including orthostatic measurements",
      "Neurologic examination for rigidity and cogwheeling",
      "Assessment of muscle tone and resistance to passive movement",
      "Evaluation of tremor and involuntary movements",
      "Assessment of diaphoresis and skin findings",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Assessment of speech and swallowing",
      "Evaluation of reflexes and coordination"
    ],
    "examFindings": {
      "General appearance and mental status assessment": "Diaphoretic, altered mental status with confusion and disorientation, appears acutely ill",
      "Vital signs including orthostatic measurements": "Hypertensive 168/98 with previous hypotension 92/60, tachycardic at 126, hyperthermia 40.7\u00b0C, mildly hypoxic 94%",
      "Neurologic examination for rigidity and cogwheeling": "Severe generalized rigidity with lead-pipe stiffness, no cogwheeling present",
      "Assessment of muscle tone and resistance to passive movement": "Marked increase in muscle tone throughout all extremities with resistance to passive movement",
      "Evaluation of tremor and involuntary movements": "No resting tremor, minimal voluntary movement due to rigidity",
      "Assessment of diaphoresis and skin findings": "Profuse diaphoresis, hot and flushed skin",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, pulses strong",
      "Pulmonary examination": "Tachypneic, clear to auscultation bilaterally, no respiratory distress",
      "Assessment of speech and swallowing": "Dysarthric speech, difficulty with articulation, concern for dysphagia",
      "Evaluation of reflexes and coordination": "Hyperreflexia present, coordination difficult to assess due to rigidity"
    },
    "ddxTargets": [
      "Neuroleptic malignant syndrome \u2014 haloperidol (correct)",
      "Serotonin syndrome \u2014 hyperreflexia/clonus, not lead-pipe rigidity",
      "Malignant hyperthermia \u2014 inhaled anesthetic trigger required",
      "Lethal catatonia \u2014 possibly same entity, different treatment",
      "Anticholinergic toxicity \u2014 hot/dry/flushed but no rigidity",
      "Heat stroke \u2014 no antipsychotic exposure"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on psychiatric history and assuming behavioral cause rather than recognizing life-threatening medication reaction",
      "prematureClosure": "May stop at 'psychiatric patient with fever' without fully exploring the constellation of autonomic instability, rigidity, and altered mental status",
      "availabilityBias": "More common conditions like infection or heat-related illness may overshadow recognition of rare but serious NMS"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, what key clinical features would help you distinguish between these conditions? Consider the medication history and the specific constellation of symptoms. What questions about timing and recent medication changes would be most critical?",
      "phase5": "You've identified the classic tetrad of findings. How does the patient's medication regimen and the temporal relationship to antipsychotic therapy support your leading diagnosis? What immediate management priorities should guide your next steps, and what complications are you most concerned about?",
      "finalDebrief": "NMS represents a rare but life-threatening reaction to antipsychotic medications. How did the combination of hyperthermia, rigidity, altered mental status, and autonomic instability help differentiate this from your other considerations? What does this case teach you about medication safety monitoring in psychiatric patients?",
      "final": "Diagnosis: NMS from haloperidol dose escalation. Key pharmacy learning: (1) Mechanism: D2 blockade in striatum (rigidity), hypothalamus (hyperthermia), ANS (instability). Classic tetrad: fever + rigidity + altered consciousness + autonomic instability + elevated CK. (2) NMS vs serotonin syndrome: NMS = slow onset (days), lead-pipe rigidity, normal reflexes. SS = rapid onset (hours), hyperreflexia, myoclonus, clonus. Do not confuse \u2014 treatment differs. (3) Treatment: STOP the antipsychotic. Bromocriptine (DA agonist) counteracts D2 blockade. Dantrolene for severe muscle rigidity. Aggressive cooling and hydration. (4) Rhabdomyolysis: CK 18,000 \u2192 myoglobin nephrotoxicity \u2192 AKI. Aggressive NS at 1L/hr until CK trending down. (5) Antipsychotic restart: minimum 2 weeks after full resolution. Choose lower-potency, lower-D2-affinity agent (quetiapine over haloperidol)."
    }
  },
  "meta": {
    "diagnosis": "Neuroleptic Malignant Syndrome \u2014 Haloperidol Dose Increase, CK 18,000, ICU Care",
    "caseId": "nms"
  }
};
