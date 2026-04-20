
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
    "pharmacy": "Walmart Pharmacy \u2014 Broward Blvd",
    "emergencyContact": {
      "name": "James Morris",
      "phone": "(412) 555-5678",
      "relationship": "Sibling"
    },
    "chiefComplaint": "I can't breathe Chest \u2014 pressure/fullness sensation, diffuse",
    "diagnosis": "Cardiac Tamponade (Malignant Pericardial Effusion)"
  },
  "problems": [
    {
      "problem": "Cardiac tamponade \u2014 malignant pericardial effusion",
      "icd": "I31.4",
      "onset": "2024",
      "status": "Active",
      "notes": "Beck's triad: hypotension, muffled heart sounds, JVD. Pulsus paradoxus 22mmHg. Lung cancer history."
    },
    {
      "problem": "Metastatic lung cancer \u2014 pericardial metastasis",
      "icd": "C34.12",
      "onset": "2023",
      "status": "Active",
      "notes": "Known Stage IV NSCLC \u2014 malignant effusion is common complication. Cytology from pericardiocentesis."
    },
    {
      "problem": "Pulsus paradoxus \u2014 22mmHg",
      "icd": "I31.4",
      "onset": "2024",
      "status": "Active",
      "notes": "Inspiratory BP drop >10mmHg \u2014 pathological in tamponade (normal <10mmHg)"
    }
  ],
  "medications": [
    {
      "name": "IV fluid bolus 500mL NS \u2014 temporizing measure",
      "sig": "IV bolus \u2014 increases preload, temporizes until pericardiocentesis. NOT the definitive treatment.",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 bridge"
    },
    {
      "name": "Atropine 0.5mg IV PRN bradycardia",
      "sig": "IV PRN \u2014 vasovagal reflex during pericardiocentesis can cause bradycardia",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN procedure"
    },
    {
      "name": "Emergency pericardiocentesis \u2014 bedside echo-guided",
      "sig": "Definitive treatment \u2014 remove pericardial fluid immediately",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 0,
      "status": "EMERGENT procedure"
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
      "bp": "94/78 (NARROW PULSE PRESSURE \u2014 16mmHg; normal >25-30mmHg)",
      "hr": "118",
      "rr": "26",
      "temp": "36.8\u00b0C",
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
      "cc": "I can't breathe Chest \u2014 pressure/fullness sensation, diffuse",
      "hpi": "Patricia Moreno is a 64-year-old female presenting with i can't breathe chest \u2014 pressure/fullness sensation, diffuse. Past medical history includes Non-small cell lung cancer, Completed 4 cycles of carboplatin/pemetrexed 2 months ago \u2014 disease progression, Brain metastases. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Cardiac Tamponade (Malignant Pericardial Effusion) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Tamponade Workup",
      "results": [
        {
          "test": "BP",
          "value": "80/60",
          "unit": "mmHg",
          "ref": "",
          "flag": "L"
        },
        {
          "test": "HR",
          "value": "118",
          "unit": "bpm",
          "ref": "60-100",
          "flag": "H"
        },
        {
          "test": "Pulsus paradoxus",
          "value": "22",
          "unit": "mmHg",
          "ref": "<10",
          "flag": "H"
        },
        {
          "test": "Troponin I",
          "value": "0.08",
          "unit": "mg/dL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "Hemoglobin",
          "value": "10.2",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": "L"
        },
        {
          "test": "BNP",
          "value": "288",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Bedside Echocardiogram \u2014 Emergency",
      "indication": "Hypotension, JVD, muffled heart sounds \u2014 tamponade evaluation",
      "findings": "Large circumferential pericardial effusion >2cm. Right atrial systolic collapse. Right ventricular diastolic collapse. Respiratory variation in mitral inflow >25%. Plethoric inferior vena cava.",
      "impression": "Echocardiographic tamponade physiology confirmed. Right heart chamber collapse = intracardiac pressure exceeds filling pressure. EMERGENT pericardiocentesis required."
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
      "On disability \u2014 former construction supervisor"
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
      "Cardiac tamponade \u2014 malignant effusion, pericardiocentesis (correct)",
      "Tension pneumothorax \u2014 absent breath sounds unilaterally, tracheal deviation (no JVD here)",
      "Cardiogenic shock \u2014 EF would be reduced, no pericardial effusion",
      "Distributive shock (sepsis) \u2014 different hemodynamic profile, no JVD",
      "Right heart failure \u2014 JVD present but no pulsus paradoxus",
      "Constrictive pericarditis \u2014 chronic, different echo pattern, no effusion"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on cancer history and assuming all symptoms are progression of malignancy rather than cardiac emergency",
      "prematureClosure": "May quickly attribute dyspnea to lung metastases without considering pericardial involvement from cancer",
      "availabilityBias": "Recent cases of CHF or PE may overshadow recognition of classic tamponade physiology"
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable possibilities for dyspnea in a cancer patient. As you interview Patricia, pay particular attention to the timeline and associated cardiovascular symptoms. What specific physical exam findings would help you distinguish between these diagnoses?",
      "phase5": "You've gathered excellent information about Patricia's presentation. The combination of her narrow pulse pressure (16 mmHg), elevated JVD, and distant heart sounds should be raising red flags. What do these findings together suggest about her cardiovascular status, and how does this change your diagnostic thinking?",
      "finalDebrief": "This case highlights pericardial tamponade as a oncologic emergency that can develop in cancer patients, particularly with lung cancer. The classic Beck's triad (elevated JVP, distant heart sounds, hypotension) along with pulsus paradoxus and narrow pulse pressure pointed to tamponade. How did recognizing these findings help you move from thinking about primary pulmonary causes to this cardiac emergency?",
      "final": "Diagnosis: cardiac tamponade \u2014 malignant effusion. Key learning: (1) Beck's triad: hypotension + muffled heart sounds + JVD. Sensitivity ~40% \u2014 most patients don't have all three. Pulsus paradoxus >10mmHg is more sensitive. Echo is the diagnostic gold standard. (2) Pulsus paradoxus mechanism: inspiration \u2192 negative intrathoracic pressure \u2192 increased RV filling \u2192 RV expands \u2192 interventricular septum shifts left \u2192 decreased LV stroke volume \u2192 BP falls >10mmHg. In tamponade: pericardial constraint amplifies this effect. (3) Echo findings = definitive diagnosis: RA systolic collapse (earliest), RV diastolic collapse (most specific), IVC plethora (no inspiratory collapse), respiratory mitral valve variation >25%. Any of these + clinical picture = tamponade. (4) Pericardiocentesis: subxiphoid approach under echo guidance, drain into pericardial space. Even removing 50-100mL dramatically improves hemodynamics (Frank-Starling curve). Send fluid: cytology (malignant cells), culture (infectious), chemistry (transudative vs exudative). (5) Malignant effusion: lung cancer, breast cancer, lymphoma are most common causes. Malignant tamponade = poor prognosis \u2014 often managed with pericardial window (surgical drainage) to prevent recurrence."
    }
  },
  "meta": {
    "diagnosis": "Cardiac Tamponade \u2014 Beck's Triad, Pulsus Paradoxus, Emergency Pericardiocentesis",
    "caseId": "cardiac-tamponade"
  }
};
