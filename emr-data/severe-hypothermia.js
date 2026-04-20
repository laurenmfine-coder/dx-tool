
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
    "pharmacy": "Walmart Pharmacy \u2014 Pines Blvd",
    "emergencyContact": {
      "name": "Thomas Hill",
      "phone": "(713) 555-9796",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "EMS report: 'Found unresponsive in alley, ambient temp 18\u00b0F. Appears homeless. Slow pulse.' No specific pain reported \u2014 global obtundation",
    "diagnosis": "Severe Accidental Hypothermia"
  },
  "problems": [
    {
      "problem": "Severe hypothermia \u2014 core temperature 28\u00b0C, altered consciousness",
      "icd": "T68.XXXA",
      "onset": "2024",
      "status": "Active",
      "notes": "David Chen, 38M \u2014 found outdoors in winter, estimated exposure 6h. GCS 9. Temperature 28\u00b0C rectal. HR 38, AF on ECG."
    },
    {
      "problem": "Hypothermic cardiac arrhythmia \u2014 atrial fibrillation with slow rate",
      "icd": "I48.19",
      "onset": "2024",
      "status": "Active",
      "notes": "AF is expected at <30\u00b0C \u2014 do not cardiovert or give antiarrhythmics for hypothermic AF. Rewarm first."
    },
    {
      "problem": "Do not diagnose death until warm and dead \u2014 core principle",
      "icd": "T68.XXXA",
      "onset": "2024",
      "status": "Active",
      "notes": "ECMO-mediated rewarming can save patients with cardiac arrest from hypothermia with potassium <12 mmol/L."
    }
  ],
  "medications": [
    {
      "name": "Active external rewarming \u2014 warming blankets, warm IV fluids (42\u00b0C)",
      "sig": "Warm IV fluids, warming blankets, warming mattress. Target: raise core temp 1-2\u00b0C/hour. Avoid sudden warming of extremities before core (afterdrop).",
      "prescriber": "ED/ICU",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Warm humidified oxygen \u2014 inhaled rewarming adjunct",
      "sig": "Inhaled heated humidified oxygen (42-46\u00b0C) \u2014 provides direct core rewarming via airway. Used for moderate-severe hypothermia.",
      "prescriber": "Respiratory/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "ECMO preparation \u2014 if cardiac arrest or refractory",
      "sig": "Extracorporeal membrane oxygenation \u2014 the definitive rewarming method for hypothermic cardiac arrest. Potassium <12 mEq/L = ECMO candidate.",
      "prescriber": "ICU/Cardiothoracic",
      "start": "2024",
      "refills": 0,
      "status": "Standby \u2014 activate if arrest"
    },
    {
      "name": "NO antiarrhythmics, NO cardioversion for hypothermic AF",
      "sig": "Hypothermic AF is expected and will spontaneously convert with rewarming. Antiarrhythmics are ineffective and proarrhythmic at <30\u00b0C.",
      "prescriber": "ICU",
      "start": "DO NOT GIVE",
      "refills": 0,
      "status": "HOLD \u2014 rewarm first"
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
      "bp": "78/50 (difficult to obtain \u2014 vasoconstriction)",
      "hr": "34 (bradycardia)",
      "rr": "8 (slow, shallow)",
      "temp": "82.4\u00b0F (28\u00b0C) rectal \u2014 core temp by esophageal probe preferred",
      "spo2": "Unable to obtain (vasoconstriction \u2014 pulse ox unreliable in hypothermia)",
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
      "cc": "EMS report: 'Found unresponsive in alley, ambient temp 18\u00b0F. Appears homeless. Slow pulse.' No specific pain reported \u2014 global obtundation",
      "hpi": "Jasmine Thompson is a 62-year-old female presenting with ems report: 'found unresponsive in alley, ambient temp 18\u00b0f. appears homeless. slow pulse.' no specific pain reported \u2014 global obtundation. Past medical history includes Unknown \u2014 patient unidentified. Track marks on bilateral arms suggest IV drug use history. Appears malnourished. Possible chronic alcohol use.. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Severe Accidental Hypothermia \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Hypothermia Panel",
      "results": [
        {
          "test": "Core temperature (rectal)",
          "value": "28",
          "unit": "\u00b0C",
          "ref": "36.1-37.2",
          "flag": "L"
        },
        {
          "test": "Potassium",
          "value": "4.8",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": ""
        },
        {
          "test": "ABG \u2014 pH (temperature-corrected)",
          "value": "7.31",
          "unit": "",
          "ref": "7.35-7.45",
          "flag": "L"
        },
        {
          "test": "Glucose",
          "value": "188",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "ABG \u2014 PaO2",
          "value": "72",
          "unit": "mmHg",
          "ref": "80-100",
          "flag": "L"
        },
        {
          "test": "Coagulation \u2014 PT/INR",
          "value": "1.6",
          "unit": "",
          "ref": "0.9-1.1",
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
    "Unknown"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Unknown \u2014 nicotine-stained fingers"
    ],
    [
      "Alcohol",
      "Possible \u2014 alcohol odor on breath (alcohol causes peripheral vasodilation \u2192 faster heat loss)"
    ],
    [
      "Drugs",
      "Track marks suggest IV drug use (possible heroin/fentanyl \u2014 opioids impair thermoregulation)"
    ],
    [
      "Occupation",
      "Unknown \u2014 appears homeless"
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
      "Core temperature measurement": "Rectal temperature 82.4\u00b0F (28\u00b0C), confirming severe hypothermia",
      "Cardiovascular exam including heart rate and rhythm": "Heart rate 34 bpm, regular but bradycardic. Blood pressure 78/50. Weak peripheral pulses due to vasoconstriction.",
      "Neurologic assessment including mental status": "Altered mental status with confusion, slowed speech, and decreased responsiveness. Reflexes diminished.",
      "Respiratory exam": "Respirations slow and shallow at 8-10 per minute. Lung sounds difficult to assess due to shivering.",
      "Skin examination for frostbite or other cold injuries": "Skin pale and cold to touch. Mild frostbite noted on fingers and toes with waxy appearance.",
      "Extremity examination for peripheral perfusion": "Extremities cold with delayed capillary refill >4 seconds. Decreased sensation in hands and feet.",
      "Abdominal examination": "Abdomen soft, bowel sounds hypoactive. Difficult to assess due to patient condition.",
      "Assessment for trauma or injuries from falls": "Minor abrasions on knees and hands consistent with falls. No obvious major trauma."
    },
    "ddxTargets": [
      "Severe hypothermia \u2014 core temp 28\u00b0C, altered consciousness, hypothermic AF (correct)",
      "Stroke mimicking hypothermia \u2014 altered consciousness, but rectal temperature is definitive",
      "Sepsis with hypothermia \u2014 temperature paradox; consider sepsis workup but treat hypothermia simultaneously",
      "Drug toxicity (opioid, alcohol) \u2014 intoxication lowers temperature; toxicology screen ordered",
      "Hypothyroidism (myxedema coma) \u2014 extreme hypothyroidism causes hypothermia; TSH + thyroid panel ordered",
      "Addisonian crisis \u2014 electrolyte and cortisol workup concurrently"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on substance use history and homeless status, potentially delaying recognition of life-threatening hypothermia",
      "prematureClosure": "May prematurely attribute altered mental status to intoxication without measuring core temperature or considering environmental exposure",
      "availabilityBias": "May focus on more commonly seen overdose presentations rather than considering hypothermia in homeless populations during cold weather"
    },
    "coachPrompts": {
      "phase2": "You've identified several concerning findings in this unresponsive patient found in freezing weather. What key vital sign measurement is essential in this environmental context, and how might the patient's social situation and the ambient temperature of 18\u00b0F guide your initial assessment priorities?",
      "phase5": "Now that you've identified severe hypothermia with a core temperature of 82.4\u00b0F and bradycardia, what are the immediate life-threatening complications you're most concerned about? How do the track marks and possible substance use history factor into your management priorities compared to the hypothermia?",
      "finalDebrief": "This case highlights how environmental factors and social determinants can create life-threatening medical emergencies. The key was recognizing that the combination of altered mental status, bradycardia, and cold exposure required immediate core temperature assessment. How did your differential diagnosis evolve from considering overdose to recognizing severe hypothermia as the primary problem requiring urgent rewarming?",
      "final": "Diagnosis: severe hypothermia \u2014 active rewarming. Key learning: (1) Hypothermia classification: mild 32-35\u00b0C (shivering, confusion), moderate 28-32\u00b0C (shivering stops, decreased consciousness, AF, J-waves on ECG), severe <28\u00b0C (loss of consciousness, ventricular fibrillation risk, apparent death). (2) Osborn (J) wave: positive deflection at the J-point (junction of QRS and ST segment) \u2014 pathognomonic for hypothermia. More pronounced with lower temperatures. (3) 'Not dead until warm and dead': the critical principle. Patients with hypothermic cardiac arrest may be fully resuscitable. The threshold: potassium <12 mEq/L = ECMO candidate (hyperkalemia from cell death indicates irreversible injury; K+ >12 = not survivable with rewarming). Successful resuscitations after >45 min of cardiac arrest from hypothermia are well-documented. (4) Rewarming strategy by severity: mild = passive rewarming (blankets, warm room). Moderate = active external rewarming (warming blankets, warm fluids). Severe = active internal rewarming (warm IV fluids, warm humidified O2, bladder/pleural irrigation). Cardiac arrest = ECMO rewarming. (5) Afterdrop: cold blood from extremities returning to core after external rewarming causes further drop in core temperature. Prioritize core rewarming over peripheral warming. Warm IV fluids and warm humidified oxygen target the core directly."
    }
  },
  "meta": {
    "diagnosis": "Severe Hypothermia \u2014 Core Temperature 28\u00b0C, Active Rewarming, ECMO if Cardiac Arrest",
    "caseId": "severe-hypothermia"
  }
};
