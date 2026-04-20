
window.EMR_DATA = {
  "patient": {
    "name": "Edna Fitzgerald",
    "patientHPI": "My daughter found me this morning shaking and confused - I've been having this terrible burning pain in my lower back and belly that's been getting worse over the past couple days.",
    "dob": "02/01/1947",
    "age": "79",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-105988",
    "language": "English",
    "race": "Black/African American",
    "phone": "(503) 555-5967",
    "email": "edna.fitzgerald@email.com",
    "address": "3213 Birch Ln, Denver, CO 80205",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "CVS Pharmacy \u2014 University Dr",
    "emergencyContact": {
      "name": "Linda Williams",
      "phone": "(212) 555-4470",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Daughter called EMS: 'found her confused and shaking' Low belly and back pain \u2014 flanks",
    "diagnosis": "Septic Shock Secondary to Urosepsis"
  },
  "problems": [
    {
      "problem": "Septic shock \u2014 urosepsis in T2DM patient",
      "icd": "A41.51",
      "onset": "2024",
      "status": "Active",
      "notes": "BP 82/54, HR 128, lactate 4.2, T 39.1\u00b0C, source: urinary \u2014 Foley with cloudy urine"
    },
    {
      "problem": "Type 2 diabetes \u2014 immunocompromised state",
      "icd": "E11.9",
      "onset": "2016",
      "status": "Active",
      "notes": "A1c 9.8% \u2014 diabetics 2x more likely to develop severe sepsis from UTI"
    },
    {
      "problem": "Acute kidney injury \u2014 from sepsis and diabetes",
      "icd": "N17.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Creatinine 2.8 (baseline 1.0). Urine output <0.5 mL/kg/hr x4h \u2014 oliguria"
    }
  ],
  "medications": [
    {
      "name": "NS 30mL/kg (2100mL for 70kg) IV over 3h \u2014 SSCB bundle",
      "sig": "30mL/kg crystalloid within first 3 hours \u2014 Surviving Sepsis Campaign",
      "prescriber": "ED/ICU",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Piperacillin-tazobactam 3.375g IV q6h \u2014 empiric broad-spectrum",
      "sig": "IV every 6 hours. Blood cultures x2 BEFORE first dose. Do not delay antibiotics beyond 1 hour.",
      "prescriber": "ICU",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Norepinephrine 0.05 mcg/kg/min via central line (titrate to MAP >65)",
      "sig": "Vasopressor \u2014 start if MAP <65 after 30mL/kg fluid",
      "prescriber": "ICU",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Insulin infusion \u2014 glucose target 140-180",
      "sig": "Hyperglycemia worsens sepsis outcomes",
      "prescriber": "ICU",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "reaction": "Rash",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "08:41",
      "bp": "78/48 (MAP 58)",
      "hr": "118",
      "rr": "24",
      "temp": "39.9\u00b0C",
      "spo2": "94%",
      "pain": "/10",
      "bmi": "27",
      "weight": "91 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Daughter called EMS: 'found her confused and shaking' Low belly and back pain \u2014 flanks",
      "hpi": "Edna Fitzgerald is a 79-year-old female presenting with daughter called ems: 'found her confused and shaking' low belly and back pain \u2014 flanks. Past medical history includes Type 2 Diabetes, Recurrent UTIs, Benign prostatic hyperplasia \u2014 wait, female. Let me fix: Urinary incontinence, Hypertension, Chronic kidney disease stage 3. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Septic Shock Secondary to Urosepsis \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Sepsis Hour-1 Bundle Labs",
      "results": [
        {
          "test": "Lactate",
          "value": "4.2",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Blood cultures x2",
          "value": "Gram-negative rods on preliminary Gram stain",
          "unit": "",
          "ref": "No growth",
          "flag": "H"
        },
        {
          "test": "Procalcitonin",
          "value": "28.4",
          "unit": "ng/mL",
          "ref": "<0.25",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "2.8",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "24.6",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Urine WBC",
          "value": ">50",
          "unit": "HPF",
          "ref": "<5",
          "flag": "H"
        },
        {
          "test": "Glucose",
          "value": "388",
          "unit": "mg/dL",
          "ref": "70-140",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired librarian"
    ],
    [
      "Living",
      "Lives alone, daughter visits twice weekly"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Edna appears confused and disoriented, frequently losing track of questions mid-conversation. She appears acutely ill and distressed, alternating between shivering and attempting to answer questions while clearly struggling with cognitive clarity due to her septic state.",
    "interviewQuestions": [
      "When did you first notice the burning pain in your back and belly?",
      "Can you describe what the pain feels like?",
      "Does the pain move anywhere else in your body?",
      "On a scale of 1-10, how severe is your pain right now?",
      "Have you had any fever or chills?",
      "Any nausea or vomiting?",
      "Have you noticed any changes in your urination - burning, frequency, or blood?",
      "When was your last normal meal and bowel movement?",
      "Have you had urinary tract infections before?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Have you been taking all your medications as prescribed?",
      "Has anyone in your family had kidney problems or frequent infections?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating... what was the question again?",
      "onset": "I think it started maybe two days ago... or was it three? The pain just kept getting worse, and this morning my daughter said I wasn't making sense",
      "character": "It's like a deep, constant burning and aching that just won't stop",
      "location": "It's mostly in my lower back on both sides and wraps around to my belly",
      "severity": "Right now it's about an 8 out of 10, I can barely think straight",
      "aggravating": "Moving makes it worse, and I feel terrible when I try to stand up",
      "relieving": "Nothing really helps... I tried some Tylenol yesterday but it didn't touch it",
      "associated": "I've been shaking and feeling so cold, and I think I've been running a fever. I've been nauseous too",
      "denies": "No chest pain, no trouble breathing really, no headache that I remember",
      "history": "Oh yes, I get bladder infections quite often. I think I had one a few weeks ago",
      "medications": "Metformin; Glipizide; Lisinopril; Nitrofurantoin",
      "allergies": "Sulfa drugs",
      "family": "My mother had kidney problems when she was older, but I don't remember the details",
      "social": "I'm a retired librarian, I live alone but my daughter checks on me. I don't smoke or drink much, maybe wine at holidays"
    },
    "examManeuvers": [
      "Costovertebral angle tenderness",
      "Abdominal palpation",
      "Suprapubic tenderness assessment",
      "Mental status examination",
      "Heart rate and rhythm assessment",
      "Blood pressure measurement",
      "Temperature assessment",
      "Skin assessment for warmth and perfusion",
      "Mucous membrane examination",
      "Capillary refill time"
    ],
    "examFindings": {
      "Costovertebral angle tenderness": "Marked bilateral CVA tenderness, patient grimaces and pulls away with gentle percussion",
      "Abdominal palpation": "Mild diffuse lower abdominal tenderness, no guarding or masses palpated",
      "Suprapubic tenderness assessment": "Moderate suprapubic tenderness on palpation",
      "Mental status examination": "Disoriented to time, slow to respond, appears confused and lethargic",
      "Heart rate and rhythm assessment": "Tachycardic at 118 bpm, regular rhythm",
      "Blood pressure measurement": "Hypotensive at 78/48 mmHg",
      "Temperature assessment": "Febrile at 39.9\u00b0C (103.8\u00b0F)",
      "Skin assessment for warmth and perfusion": "Skin is warm and flushed, poor skin turgor suggesting dehydration",
      "Mucous membrane examination": "Dry mucous membranes, delayed capillary refill",
      "Capillary refill time": "Prolonged at 4 seconds"
    },
    "ddxTargets": [
      "Septic shock \u2014 urosepsis, Hour-1 bundle nursing priority (correct)",
      "SIRS without infection \u2014 procalcitonin 28.4 and cultures growing gram-negative rods confirm infection",
      "Hypovolemic shock only \u2014 fluid-refractory hypotension with lactate 4.2 = septic shock, not simple hypovolemia",
      "UTI without sepsis \u2014 hemodynamic compromise defines septic shock",
      "DKA causing hypotension \u2014 glucose 388 but acidosis pattern is sepsis, not DKA",
      "Cardiogenic shock \u2014 no cardiac history, fluid-responsive initially"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'UTI' and missing the severity - this is pyelonephritis with sepsis requiring immediate intervention",
      "prematureClosure": "May stop at simple UTI diagnosis without recognizing septic presentation and hemodynamic instability",
      "availabilityBias": "Elderly women commonly get UTIs, but this presentation with altered mental status and hypotension indicates serious systemic infection"
    },
    "coachPrompts": {
      "phase2": "You're thinking about this 79-year-old woman with confusion, flank pain, and fever. Given her vital signs showing hypotension and tachycardia, what are you most concerned about? How might her history of recurrent UTIs and current presentation guide your questioning?",
      "phase5": "Now that you've examined Edna and found bilateral CVA tenderness with signs of sepsis, how has your differential diagnosis evolved? What's the most likely diagnosis, and what immediate interventions does this patient need?",
      "finalDebrief": "This case demonstrates how a 'simple UTI' in an elderly patient can progress to life-threatening pyelonephritis with sepsis. The key teaching points are recognizing sepsis in elderly patients who may present with altered mental status, understanding that hypotension and tachycardia indicate systemic involvement requiring immediate treatment, and remembering that recurrent UTIs can predispose to more serious ascending infections.",
      "final": "Diagnosis: septic shock, urosepsis. Key nursing learning: (1) Surviving Sepsis Hour-1 Bundle (nursing executes): (a) Measure lactate \u2014 if >2, repeat at 2h to confirm clearance. Lactate 4.2 = severely compromised perfusion. (b) Blood cultures x2 BEFORE antibiotics \u2014 obtain from two sites within 5 min, then start antibiotics. DO NOT delay antibiotics to get cultures if difficult. (c) Broad-spectrum antibiotics within 1 hour. (d) 30mL/kg crystalloid within 3h. (e) Vasopressors for MAP <65 despite fluid. (2) Nursing triggers for sepsis escalation: new altered mental status + tachycardia + tachypnea in a floor patient = activate rapid response. 'I'm concerned about sepsis' is a valid clinical statement even without official criteria being met. (3) Vasopressor management: norepinephrine is first-line. Administer via central line (peripheral NE for short-term only \u2014 extravasation risk). Titrate to MAP \u226565, check every 15 min. Call prescriber for MAP <65 on current dose. (4) Glucose management in sepsis: target 140-180. Both hypoglycemia (<70) and severe hyperglycemia (>180) worsen outcomes. Check glucose q1h on insulin infusion. (5) Fluid reassessment: after each 500mL bolus, check MAP, HR, UO, lung sounds. Fluid overload in sepsis is harmful \u2014 stop fluids if pulmonary edema develops."
    }
  },
  "meta": {
    "diagnosis": "Septic Shock \u2014 Urosepsis, Early Goal-Directed Nursing Surveillance, Hour-1 Bundle",
    "caseId": "septic-shock-urosepsis"
  }
};
