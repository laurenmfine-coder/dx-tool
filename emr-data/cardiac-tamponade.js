/* emr-data/cardiac-tamponade.js — EMR case data for Cardiac Tamponade (Malignant Pericardial Effusion) */
window.EMR_DATA = {
  "patient": {
    "name": "Patricia Moreno",
    "patientHPI": "I can't catch my breath and there's this heavy pressure feeling all across my chest. It's not sharp pain, just this awful fullness that makes it hard to breathe, and it seems to be getting worse.",
    "dob": "06/15/1962",
    "age": "64",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-567122",
    "language": "English",
    "race": "Black/African American",
    "phone": "(713) 555-8311",
    "email": "patricia.moreno@email.com",
    "address": "8147 Spruce St, Memphis, TN 38114",
    "insurance": "Medicare",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Walmart Pharmacy — Broward Blvd",
    "emergencyContact": {
      "name": "James Morris",
      "phone": "(412) 555-5678",
      "relationship": "Sibling"
    },
    "chiefComplaint": "I can't breathe Chest — pressure/fullness sensation, diffuse",
    "diagnosis": "Cardiac Tamponade (Malignant Pericardial Effusion)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Non-small cell lung cancer",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Completed 4 cycles of carboplatin/pemetrexed 2 months ago — disease progression",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Brain metastases",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Dexamethasone",
      "dose": "4mg BID (for brain mets edema)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-2",
      "name": "Levetiracetam",
      "dose": "500mg BID (seizure prophylaxis)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-3",
      "name": "Ondansetron",
      "dose": "8mg PRN nausea",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    },
    {
      "id": "med-4",
      "name": "Oxycodone",
      "dose": "5mg PRN pain",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "No Known Drug Allergies",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "09:43",
      "bp": "94/78 (NARROW PULSE PRESSURE — 16mmHg; normal >25-30mmHg)",
      "hr": "118",
      "rr": "26",
      "temp": "36.8°C",
      "spo2": "92%",
      "pain": "34/10",
      "bmi": "31",
      "weight": "89 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "I can't breathe Chest — pressure/fullness sensation, diffuse",
      "hpi": "Patricia Moreno is a 64-year-old female presenting with i can't breathe chest — pressure/fullness sensation, diffuse. Past medical history includes Non-small cell lung cancer, Completed 4 cycles of carboplatin/pemetrexed 2 months ago — disease progression, Brain metastases. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Cardiac Tamponade (Malignant Pericardial Effusion) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-656017",
      "collected": "03/03/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "8.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "10.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "44",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "290",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "141",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.1",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "104",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "26",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "17",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.3",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "88",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "8.8",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Troponin I",
              "value": "0.02",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": ""
            },
            {
              "test": "BNP",
              "value": "620",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "3.6",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "POCUS – Cardiac",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-937131",
      "clinical": "I can't breathe Chest — pressure/fullness sensation, diffuse",
      "technique": "Standard protocol",
      "findings": "LARGE CIRCUMFERENTIAL PERICARDIAL EFFUSION (>2cm). RIGHT ATRIAL COLLAPSE in diastole (earliest sign of tamponade — RA has lowest intracardiac pressure). RIGHT VENTRICULAR DIASTOLIC COLLAPSE (confirms hemodynamic significance). IVC plethoric (>2.1cm) with <50% respirophasic variation (elevated RA pressure). SWINGING HEART within effusion (corresponds to electrical alternans). No left-sided collapse. LV function appears hyperdynamic (small, underfilled ventricle contracting vigorously).",
      "impression": "LARGE PERICARDIAL EFFUSION WITH TAMPONADE PHYSIOLOGY — RA and RV diastolic collapse, plethoric IVC. EMERGENT PERICARDIOCENTESIS REQUIRED.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-527314",
      "clinical": "I can't breathe Chest — pressure/fullness sensation, diffuse",
      "technique": "Standard protocol",
      "findings": "ENLARGED CARDIAC SILHOUETTE with 'water-bottle' configuration. Bilateral small pleural effusions. Left hilar mass (known primary lung cancer). No pneumothorax.",
      "impression": "Massive pericardial effusion with enlarged silhouette. Known lung cancer.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-174726",
      "clinical": "I can't breathe Chest — pressure/fullness sensation, diffuse",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 118 bpm. LOW VOLTAGE throughout (QRS amplitude <5mm in limb leads — pericardial fluid attenuates signal). ELECTRICAL ALTERNANS (QRS amplitude alternates beat-to-beat — swinging heart within fluid). No ST changes",
      "impression": "Classic ECG triad: tachycardia + low voltage + electrical alternans = PERICARDIAL EFFUSION WITH TAMPONADE PHYSIOLOGY",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
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
    "Father: lung cancer (smoker)"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "30 pack-years, quit at diagnosis 1 year ago"
    ],
    [
      "Alcohol",
      "None since diagnosis"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "On disability — former construction supervisor"
    ],
    [
      "Living",
      "Lives with wife and adult daughter"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Patricia appears visibly anxious and short of breath, speaking in brief phrases between breaths. She is cooperative but clearly distressed, frequently shifting position trying to find relief from her breathing difficulty.",
    "interviewQuestions": [
      "When did this breathing difficulty and chest pressure start?",
      "How would you describe the chest pressure - is it sharp, dull, crushing?",
      "On a scale of 1-10, how severe is your breathing difficulty?",
      "What makes your breathing worse or better?",
      "Have you had any chest pain, palpitations, or racing heart?",
      "Any swelling in your legs, ankles, or feet?",
      "Have you been coughing or bringing up any blood?",
      "Any lightheadedness, dizziness, or feeling faint?",
      "Have you had any recent fevers or chills?",
      "When was your last oncology visit and imaging?",
      "Are you taking all your prescribed medications?",
      "Have you experienced anything like this before?",
      "Any recent changes in your activity level or ability to lie flat?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because I can't catch my breath. Could you repeat that?",
      "onset": "It started gradually about 3-4 days ago, but it's gotten much worse since yesterday. Now I can barely walk across the room without getting winded.",
      "character": "It's not a sharp pain, it's more like someone is sitting on my chest. Heavy pressure all across here, and I just can't get enough air in.",
      "location": "Right across my whole chest, from side to side. It doesn't really go anywhere else, just sits right here on my chest.",
      "severity": "The breathing is about an 8 out of 10 - I'm really struggling. The pressure feeling is maybe a 6, but it's the breathing that's scaring me.",
      "aggravating": "Any movement makes it worse. Even talking like this is hard. Lying flat is impossible - I've been sleeping propped up on three pillows.",
      "relieving": "Nothing really helps. Sitting up is a little better than lying down, but I still can't breathe right.",
      "associated": "My heart feels like it's racing all the time now. I've been feeling dizzy when I stand up, and my legs look a little puffy.",
      "denies": "No fever, no sharp chest pain, no cough or blood. No nausea or vomiting beyond what's normal from my treatments.",
      "history": "Never had breathing problems like this before, even during my chemo treatments. This is completely new and scary.",
      "medications": "Dexamethasone; Levetiracetam; Ondansetron; Oxycodone",
      "allergies": "NKDA",
      "family": "My father had lung cancer too - he was a heavy smoker. That's actually what got me to finally quit smoking when I was diagnosed.",
      "social": "I'm on disability now from my construction job. Used to smoke about a pack and a half a day for 20 years - quit when I got diagnosed a year ago. Stopped drinking too. My wife and daughter are taking good care of me at home."
    },
    "examManeuvers": [
      "Jugular venous pressure assessment",
      "Cardiac auscultation",
      "Pulsus paradoxus measurement",
      "Hepatojugular reflux test",
      "Lower extremity edema assessment",
      "Pulmonary auscultation",
      "Assessment for distant heart sounds",
      "Kussmaul sign evaluation",
      "Peripheral pulse assessment",
      "Abdominal examination for hepatomegaly"
    ],
    "examFindings": {
      "Jugular venous pressure assessment": "JVD elevated to 12-14 cm H2O with patient at 45 degrees",
      "Cardiac auscultation": "Heart sounds are notably distant and muffled, regular rhythm, no murmurs appreciated",
      "Pulsus paradoxus measurement": "Pulsus paradoxus of 22 mmHg present",
      "Hepatojugular reflux test": "Positive hepatojugular reflux with sustained elevation",
      "Lower extremity edema assessment": "2+ bilateral lower extremity pitting edema to mid-shins",
      "Pulmonary auscultation": "Clear lung fields bilaterally, no rales or wheeze",
      "Assessment for distant heart sounds": "Heart sounds markedly diminished in intensity",
      "Kussmaul sign evaluation": "JVD increases with inspiration (positive Kussmaul sign)",
      "Peripheral pulse assessment": "Weak peripheral pulses, tachycardic at 118 bpm",
      "Abdominal examination for hepatomegaly": "Mild hepatomegaly with tender liver edge palpable 2 cm below costal margin"
    },
    "ddxTargets": [
      "Pericardial effusion with tamponade (correct diagnosis)",
      "Congestive heart failure",
      "Pulmonary embolism",
      "Superior vena cava syndrome",
      "Tension pneumothorax",
      "Pleural effusion",
      "Pneumonia"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on cancer history and assuming all symptoms are progression of malignancy rather than cardiac emergency",
      "prematureClosure": "May quickly attribute dyspnea to lung metastases without considering pericardial involvement from cancer",
      "availabilityBias": "Recent cases of CHF or PE may overshadow recognition of classic tamponade physiology"
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable possibilities for dyspnea in a cancer patient. As you interview Patricia, pay particular attention to the timeline and associated cardiovascular symptoms. What specific physical exam findings would help you distinguish between these diagnoses?",
      "phase5": "You've gathered excellent information about Patricia's presentation. The combination of her narrow pulse pressure (16 mmHg), elevated JVD, and distant heart sounds should be raising red flags. What do these findings together suggest about her cardiovascular status, and how does this change your diagnostic thinking?",
      "finalDebrief": "This case highlights pericardial tamponade as a oncologic emergency that can develop in cancer patients, particularly with lung cancer. The classic Beck's triad (elevated JVP, distant heart sounds, hypotension) along with pulsus paradoxus and narrow pulse pressure pointed to tamponade. How did recognizing these findings help you move from thinking about primary pulmonary causes to this cardiac emergency?"
    }
  }
};
