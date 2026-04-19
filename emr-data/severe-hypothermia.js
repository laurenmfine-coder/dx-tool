/* emr-data/severe-hypothermia.js — EMR case data for Severe Accidental Hypothermia */
window.EMR_DATA = {
  "patient": {
    "name": "Jasmine Thompson",
    "patientHPI": "I don't really remember what happened - someone said they found me outside and I was really cold. I feel confused and everything seems foggy, and I can't stop shivering even though they've been warming me up.",
    "dob": "06/06/1964",
    "age": "62",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-361889",
    "language": "English",
    "race": "Black/African American",
    "phone": "(312) 555-6890",
    "email": "jasmine.thompson@email.com",
    "address": "9829 Walnut Dr, Baltimore, MD 21206",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Karen Liu, DO",
    "pharmacy": "Walmart Pharmacy — Pines Blvd",
    "emergencyContact": {
      "name": "Thomas Hill",
      "phone": "(713) 555-9796",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
    "diagnosis": "Severe Accidental Hypothermia"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Unknown — patient unidentified. Track marks on bilateral arms suggest IV drug use history. Appears malnourished. Possible chronic alcohol use.",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Unknown",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Unknown",
      "reaction": "Unknown",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "07:31",
      "bp": "78/50 (difficult to obtain — vasoconstriction)",
      "hr": "34 (bradycardia)",
      "rr": "8 (slow, shallow)",
      "temp": "82.4°F (28°C) rectal — core temp by esophageal probe preferred",
      "spo2": "Unable to obtain (vasoconstriction — pulse ox unreliable in hypothermia)",
      "pain": "/10",
      "bmi": "27",
      "weight": "82 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "hpi": "Jasmine Thompson is a 62-year-old female presenting with ems report: 'found unresponsive in alley, ambient temp 18°f. appears homeless. slow pulse.' no specific pain reported — global obtundation. Past medical history includes Unknown — patient unidentified. Track marks on bilateral arms suggest IV drug use history. Appears malnourished. Possible chronic alcohol use.. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Severe Accidental Hypothermia — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-142513",
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
              "value": "9",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "39",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "300",
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
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "5.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "98",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "28",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "15",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.1",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "58",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "9.6",
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
              "test": "Core Temperature",
              "value": "82.4°F (28°C)",
              "unit": "",
              "range": "97-99°F",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.22",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "4.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Ethanol Level",
              "value": "186",
              "unit": "mg/dL",
              "range": "0",
              "flag": "H"
            },
            {
              "test": "CK Total",
              "value": "1,200",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Amylase",
              "value": "180",
              "unit": "U/L",
              "range": "30-110",
              "flag": "H"
            },
            {
              "test": "Urine Drug Screen",
              "value": "Positive: opioids, benzodiazepines",
              "unit": "",
              "range": "Negative",
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
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-252798",
      "clinical": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "technique": "Standard protocol",
      "findings": "No acute intracranial pathology. No hemorrhage. Mild generalized atrophy.",
      "impression": "Normal — AMS from hypothermia and intoxication, not structural",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-190213",
      "clinical": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "technique": "Standard protocol",
      "findings": "Low lung volumes. No focal consolidation. No aspiration pattern currently.",
      "impression": "Low volumes from shallow breathing. Monitor for aspiration pneumonia.",
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
      "accession": "IMG-707385",
      "clinical": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "technique": "Standard 12-lead",
      "findings": "Marked bradycardia at 34 bpm. OSBORN (J) WAVES — pathognomonic for hypothermia (positive deflection at J-point, most prominent in inferior and lateral leads). Prolonged PR, QRS, and QT intervals. Atrial fibrillation (slow ventricular response). Baseline artifact from shivering/tremor",
      "impression": "Osborn waves with slow AFib — classic hypothermic ECG. Cardiac rhythm is unstable — handle patient GENTLY (even minimal stimulation can trigger ventricular fibrillation in severe hypothermia).",
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
    "Unknown"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Unknown — nicotine-stained fingers"
    ],
    [
      "Alcohol",
      "Possible — alcohol odor on breath (alcohol causes peripheral vasodilation → faster heat loss)"
    ],
    [
      "Drugs",
      "Track marks suggest IV drug use (possible heroin/fentanyl — opioids impair thermoregulation)"
    ],
    [
      "Occupation",
      "Unknown — appears homeless"
    ],
    [
      "Living",
      "Likely unhoused"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Jasmine appears confused and disoriented, speaking slowly with slurred speech. She seems cooperative but has significant difficulty concentrating and remembering details. She appears frightened and grateful for warmth, frequently mentioning feeling cold despite rewarming efforts.",
    "interviewQuestions": [
      "Do you remember where you were or what you were doing before someone found you?",
      "How long do you think you were outside in the cold?",
      "Are you experiencing any chest pain or difficulty breathing?",
      "Have you had anything to eat or drink in the past day or two?",
      "When did you last use alcohol or any substances?",
      "Do you have any medical conditions or take any medications regularly?",
      "Have you ever experienced something like this before from cold exposure?",
      "Are you having any numbness or tingling in your hands or feet?",
      "Do you have a safe place to stay when you're discharged?",
      "Have you been feeling more tired or weak than usual recently?",
      "Do you remember feeling confused or having trouble thinking clearly before this?",
      "Have you had any recent infections or illnesses?",
      "Are you experiencing any nausea or vomiting?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble thinking clearly right now. Everything feels foggy and I can't really remember.",
      "onset": "I don't really know... someone said they found me this morning, but I don't remember how long I was out there. Maybe all night?",
      "character": "I just feel so cold, even now. I can't stop shivering and everything feels slow and heavy. My thinking is all mixed up.",
      "location": "I feel cold all over, but especially my hands and feet. They feel numb and tingly.",
      "severity": "The cold feeling is maybe 8 out of 10. I've never felt this cold before, and I can barely think straight.",
      "aggravating": "Being outside made it worse. I think I might have gotten wet too, but I can't remember clearly.",
      "relieving": "The blankets here are helping a little, but I still feel cold deep inside.",
      "associated": "I feel really confused and dizzy. I think I might have fallen because my knee hurts. I feel weak and tired.",
      "denies": "I don't think I have chest pain, but it's hard to tell. I don't feel short of breath exactly, just slow.",
      "history": "I've been cold before living outside, but never like this. Never felt this confused or slow.",
      "medications": "Unknown",
      "allergies": "Unknown",
      "family": "I don't really have contact with my family anymore. Don't know about their medical history.",
      "social": "I've been on the streets for about two years. I drink when I can get it, and I used to use heroin but trying to stay clean. I smoke cigarettes when I can afford them."
    },
    "examManeuvers": [
      "Core temperature measurement",
      "Cardiovascular exam including heart rate and rhythm",
      "Neurologic assessment including mental status",
      "Respiratory exam",
      "Skin examination for frostbite or other cold injuries",
      "Extremity examination for peripheral perfusion",
      "Abdominal examination",
      "Assessment for trauma or injuries from falls"
    ],
    "examFindings": {
      "Core temperature measurement": "Rectal temperature 82.4°F (28°C), confirming severe hypothermia",
      "Cardiovascular exam including heart rate and rhythm": "Heart rate 34 bpm, regular but bradycardic. Blood pressure 78/50. Weak peripheral pulses due to vasoconstriction.",
      "Neurologic assessment including mental status": "Altered mental status with confusion, slowed speech, and decreased responsiveness. Reflexes diminished.",
      "Respiratory exam": "Respirations slow and shallow at 8-10 per minute. Lung sounds difficult to assess due to shivering.",
      "Skin examination for frostbite or other cold injuries": "Skin pale and cold to touch. Mild frostbite noted on fingers and toes with waxy appearance.",
      "Extremity examination for peripheral perfusion": "Extremities cold with delayed capillary refill >4 seconds. Decreased sensation in hands and feet.",
      "Abdominal examination": "Abdomen soft, bowel sounds hypoactive. Difficult to assess due to patient condition.",
      "Assessment for trauma or injuries from falls": "Minor abrasions on knees and hands consistent with falls. No obvious major trauma."
    },
    "ddxTargets": [
      "Severe hypothermia (correct diagnosis)",
      "Opioid overdose",
      "Alcohol intoxication",
      "Sepsis with shock",
      "Diabetic ketoacidosis",
      "Stroke or intracranial event",
      "Acute myocardial infarction"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on substance use history and homeless status, potentially delaying recognition of life-threatening hypothermia",
      "prematureClosure": "May prematurely attribute altered mental status to intoxication without measuring core temperature or considering environmental exposure",
      "availabilityBias": "May focus on more commonly seen overdose presentations rather than considering hypothermia in homeless populations during cold weather"
    },
    "coachPrompts": {
      "phase2": "You've identified several concerning findings in this unresponsive patient found in freezing weather. What key vital sign measurement is essential in this environmental context, and how might the patient's social situation and the ambient temperature of 18°F guide your initial assessment priorities?",
      "phase5": "Now that you've identified severe hypothermia with a core temperature of 82.4°F and bradycardia, what are the immediate life-threatening complications you're most concerned about? How do the track marks and possible substance use history factor into your management priorities compared to the hypothermia?",
      "finalDebrief": "This case highlights how environmental factors and social determinants can create life-threatening medical emergencies. The key was recognizing that the combination of altered mental status, bradycardia, and cold exposure required immediate core temperature assessment. How did your differential diagnosis evolve from considering overdose to recognizing severe hypothermia as the primary problem requiring urgent rewarming?"
    }
  }
};
