
window.EMR_DATA = {
  "patient": {
    "name": "Ahmed Hassan",
    "patientHPI": "I missed my dialysis appointment yesterday and now I'm feeling really weak and my heart is beating funny - like it's skipping or racing. I know I'm supposed to go three times a week but I just couldn't make it in, and now I'm worried something bad is happening.",
    "dob": "08/21/1962",
    "age": "64",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-359486",
    "language": "English",
    "race": "Asian",
    "phone": "(630) 555-6218",
    "email": "ahmed.hassan@email.com",
    "address": "5003 N Western Ave, Phoenix, AZ 85013",
    "insurance": "Oscar Health",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "Walmart Pharmacy \u2014 Sunrise Blvd",
    "emergencyContact": {
      "name": "Teresa Hassan",
      "phone": "(404) 555-7438",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Weakness and palpitations \u2014 missed dialysis",
    "diagnosis": "Hyperkalemia with Cardiac Changes"
  },
  "problems": [
    {
      "problem": "Severe hyperkalemia \u2014 ESRD, missed dialysis",
      "icd": "E87.5",
      "onset": "2024",
      "status": "Active",
      "notes": "K+ 7.0 \u2014 peaked T-waves, widened QRS, bradycardia HR 48"
    },
    {
      "problem": "End-stage renal disease \u2014 dialysis-dependent",
      "icd": "N18.6",
      "onset": "2021",
      "status": "Active",
      "notes": "Missed 2 sessions \u2014 potassium accumulated without clearance"
    },
    {
      "problem": "Metabolic acidosis \u2014 from ESRD",
      "icd": "E87.2",
      "onset": "2024",
      "status": "Active",
      "notes": "pH 7.24 \u2014 bicarbonate shifts K+ intracellularly when corrected"
    }
  ],
  "medications": [
    {
      "name": "Calcium gluconate 1g IV over 2-3 min STAT",
      "sig": "Membrane stabilizer \u2014 works in 1-3 min. Does NOT lower K+.",
      "prescriber": "Emergency Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "STAT"
    },
    {
      "name": "Regular insulin 10 units IV + D50 50mL IV",
      "sig": "Shifts K+ intracellularly \u2014 onset 15-30 min, lasts 1-2h. Monitor glucose.",
      "prescriber": "Emergency Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Sodium bicarbonate 3 amps IV",
      "sig": "Intracellular shift in acidotic patients \u2014 use if pH <7.2",
      "prescriber": "Emergency Medicine",
      "start": "11/2024",
      "refills": 0,
      "status": "Conditional"
    },
    {
      "name": "Emergent hemodialysis \u2014 definitive",
      "sig": "Removes K+ from body \u2014 all other treatments are bridges",
      "prescriber": "Nephrology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "172/98",
      "hr": "52",
      "rr": "18",
      "temp": "36.6\u00b0C",
      "spo2": "96%",
      "pain": "3/10",
      "bmi": "36",
      "weight": "87 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Weakness and palpitations \u2014 missed dialysis",
      "hpi": "Ahmed Hassan is a 64-year-old male presenting with weakness and palpitations \u2014 missed dialysis. Past medical history includes ESRD on hemodialysis (MWF), Diabetes, Hypertension, AV Fistula left arm. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Hyperkalemia with Cardiac Changes \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Hyperkalemia Emergency",
      "results": [
        {
          "test": "Potassium",
          "value": "7.0",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "H"
        },
        {
          "test": "Bicarbonate",
          "value": "16",
          "unit": "mEq/L",
          "ref": "22-26",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "12.4",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "pH (venous)",
          "value": "7.24",
          "unit": "",
          "ref": "7.32-7.42",
          "flag": "L"
        },
        {
          "test": "Glucose",
          "value": "142",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "12-Lead ECG",
      "indication": "Hyperkalemia with bradycardia",
      "findings": "Sinus bradycardia 48 bpm. Tall peaked symmetric T-waves V2-V5. QRS 114ms widened. PR 226ms prolonged. No P-wave absence yet.",
      "impression": "ECG changes consistent with severe hyperkalemia. Immediate treatment required \u2014 risk of VF/asystole."
    }
  ],
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Dialysis",
      "Missed last 2 sessions \u2014 car broke down"
    ],
    [
      "Diet",
      "Ate bananas, oranges, and potatoes yesterday"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Ahmed appears anxious and fatigued, speaking slowly but cooperatively about his missed dialysis sessions. He shows visible distress about his symptoms and readily admits to dietary indiscretions, expressing genuine concern that 'something bad is happening' to his body.",
    "interviewQuestions": [
      "Can you describe exactly what the palpitations feel like?",
      "When did you last have dialysis and when was it supposed to be?",
      "Have you been following your renal diet restrictions?",
      "Any chest pain, shortness of breath, or difficulty breathing?",
      "Have you had any nausea, vomiting, or changes in appetite?",
      "Any muscle cramps, twitching, or numbness?",
      "How much urine are you making, if any?",
      "Have you experienced any confusion or changes in thinking?",
      "Any swelling in your legs, feet, or around your eyes?",
      "Are you taking all your prescribed medications?",
      "Have you had similar symptoms before when missing dialysis?",
      "Any recent illness, fever, or infections?",
      "How has your blood sugar been running lately?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - can you explain that differently? I'm feeling pretty weak right now.",
      "onset": "The weakness started yesterday evening after I missed my dialysis, and the heart racing began this morning when I woke up.",
      "character": "My heart feels like it's skipping beats sometimes, then racing really fast, and I feel so weak I can barely stand up.",
      "location": "I feel it right in my chest, like my heart is jumping around, and the weakness is all over my whole body.",
      "severity": "The weakness is about a 7 out of 10 - I can barely get around my apartment, and the heart thing is really scary, maybe 8 out of 10.",
      "aggravating": "When I try to stand up or walk around, both the weakness and the heart racing get much worse.",
      "relieving": "Nothing really helps - sitting down makes the heart thing a little better but I still feel terrible overall.",
      "associated": "I've been feeling a little nauseous this morning and my legs feel heavy, but no chest pain or trouble breathing.",
      "denies": "No chest pain, no shortness of breath, no fever, no cough, and I'm not making much urine anymore.",
      "history": "I've felt weak before when I've had to delay dialysis, but never this heart racing thing - that's new and scary.",
      "medications": "Sevelamer; Insulin Glargine; Amlodipine; Epoetin alfa",
      "allergies": "NKDA",
      "family": "Nothing really runs in my family that would cause this - my parents had diabetes but that's about it.",
      "social": "I'm retired, don't smoke or drink, and usually I'm good about getting to dialysis three times a week, but my car broke down."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "ECG interpretation",
      "Pulmonary auscultation",
      "Assessment for peripheral edema",
      "Neurologic assessment including reflexes",
      "AV fistula examination",
      "Blood pressure measurement",
      "Assessment for volume overload",
      "Skin and mucous membrane examination",
      "Abdominal examination"
    ],
    "examFindings": {
      "Cardiac auscultation": "Bradycardic irregular rhythm with occasional premature beats, no murmurs or gallops",
      "ECG interpretation": "Sinus bradycardia with peaked T waves, prolonged PR interval, and occasional PVCs",
      "Pulmonary auscultation": "Clear to auscultation bilaterally, no rales or wheezes",
      "Assessment for peripheral edema": "2+ pitting edema bilateral lower extremities to mid-shins",
      "Neurologic assessment including reflexes": "Diminished deep tendon reflexes, mild weakness in extremities",
      "AV fistula examination": "Left arm AV fistula with good thrill and bruit, no signs of infection",
      "Blood pressure measurement": "Hypertensive at 172/98 mmHg, consistent on repeat",
      "Assessment for volume overload": "Elevated JVP, dependent edema, no S3 gallop audible",
      "Skin and mucous membrane examination": "Pale conjunctiva, dry mucous membranes, no rash or uremic frost",
      "Abdominal examination": "Soft, non-tender, no organomegaly, normal bowel sounds"
    },
    "ddxTargets": [
      "Severe hyperkalemia with cardiac toxicity \u2014 ESRD (correct)",
      "Pseudohyperkalemia \u2014 hemolyzed sample",
      "ACEi/ARB hyperkalemia in CKD",
      "DKA with total-body K+ depletion (serum K+ elevated early)",
      "Ischemic ECG changes \u2014 different T-wave morphology",
      "Digoxin toxicity \u2014 different arrhythmia pattern"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'missed dialysis' and immediately assuming volume overload without considering life-threatening hyperkalemia from dietary indiscretions",
      "prematureClosure": "May stop at 'fluid overload' diagnosis without recognizing the cardiac rhythm changes suggesting dangerous hyperkalemia requiring immediate treatment",
      "availabilityBias": "Recent cases of heart failure or MI may overshadow the classic hyperkalemia presentation in ESRD patients with dietary non-compliance"
    },
    "coachPrompts": {
      "phase2": "This dialysis patient has concerning cardiac symptoms after missing sessions. What specific complications of missed dialysis should you be most worried about? Consider both volume-related and electrolyte-related causes - which could be immediately life-threatening?",
      "phase5": "You've identified a dialysis patient with bradycardia, irregular rhythm, and ECG changes after dietary indiscretion with high-potassium foods. What does this constellation of findings suggest, and what's your most urgent concern for this patient's immediate management?",
      "finalDebrief": "This case illustrates how hyperkalemia in ESRD patients can present with life-threatening cardiac effects. Notice how the combination of missed dialysis, high-potassium food intake, bradycardia, and ECG changes pointed to hyperkalemia rather than simple volume overload. What early clues helped differentiate this from other post-dialysis complications?",
      "final": "Diagnosis: severe hyperkalemia with ECG cardiac toxicity. Key MBS learning: (1) Nernst equation: resting membrane potential set by K+ gradient (~-90mV). Rising extracellular K+ \u2192 gradient narrows \u2192 resting potential less negative \u2192 threshold approached \u2192 hyperexcitability then inexcitability (Na+ channel inactivation). (2) ECG progression: 5.5-6.5 \u2192 peaked T-waves (increased repolarization K+ conductance). 6.5-7.5 \u2192 PR prolongation, QRS widening. 7.5-9.0 \u2192 P-wave loss, sine-wave. >9.0 \u2192 VF/asystole. (3) Three treatment compartments: (a) Membrane stabilization \u2014 calcium gluconate (threshold \u2191, does NOT lower K+). (b) Redistribution \u2014 insulin/dextrose, NaHCO3 (K+ into cells, temporary). (c) Removal \u2014 dialysis, loop diuretics. (4) Calcium gluconate does NOT lower serum K+ \u2014 it restores the gap between resting potential and threshold by raising the threshold potential. (5) Bradycardia at K+ 7.0: AV conduction slows when the gradient narrows enough to slow phase 4 depolarization in nodal cells. Precedes complete AV block."
    }
  },
  "meta": {
    "diagnosis": "Severe Hyperkalemia with Cardiac Membrane Instability \u2014 K+ 7.0, Wide QRS, Peaked T-Waves",
    "caseId": "hyperkalemia-cardiac"
  }
};
