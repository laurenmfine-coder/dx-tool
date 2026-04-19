/* emr-data/subdural-hematoma.js — EMR case data for Acute-on-Chronic Subdural Hematoma */
window.EMR_DATA = {
  "patient": {
    "name": "Walter Pemberton",
    "patientHPI": "My wife says I haven't been myself for about two weeks now - I've been confused and clumsy, and today it's gotten much worse. I've had this dull headache on both sides of my head, and I know I've been falling more lately which worries her.",
    "dob": "06/15/1948",
    "age": "78",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-152921",
    "language": "English",
    "race": "Black/African American",
    "phone": "(415) 555-1722",
    "email": "walter.pemberton@email.com",
    "address": "2243 Cottonwood Ave, Columbus, OH 43211",
    "insurance": "Medicaid",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "Walmart Pharmacy — Pines Blvd",
    "emergencyContact": {
      "name": "Thomas Mitchell",
      "phone": "(212) 555-6464",
      "relationship": "Parent"
    },
    "chiefComplaint": "Wife: 'He's not himself — confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
    "diagnosis": "Acute-on-Chronic Subdural Hematoma"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Atrial fibrillation",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Falls",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Chronic alcohol use",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "BPH",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Apixaban",
      "dose": "5mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-2",
      "name": "Lisinopril",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-3",
      "name": "Tamsulosin",
      "dose": "0.4mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
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
      "time": "06:48",
      "bp": "162/88",
      "hr": "78 (irregularly irregular)",
      "rr": "16",
      "temp": "36.9°C",
      "spo2": "97%",
      "pain": "/10",
      "bmi": "24",
      "weight": "63 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Wife: 'He's not himself — confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
      "hpi": "Walter Pemberton is a 78-year-old male presenting with wife: 'he's not himself — confused and clumsy for 2 weeks, much worse today' bilateral headache, diffuse, dull. Past medical history includes Atrial fibrillation, Hypertension, Falls, Chronic alcohol use, BPH. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute-on-Chronic Subdural Hematoma — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-876079",
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
              "value": "5.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "42",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "148",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "L"
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.5",
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
              "value": "11",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "102",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.2",
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
              "test": "INR",
              "value": "1.1",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
            },
            {
              "test": "Ethanol Level",
              "value": "0",
              "unit": "mg/dL",
              "range": "0",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-280463",
      "clinical": "Wife: 'He's not himself — confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-395248",
      "clinical": "Wife: 'He's not himself — confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
      "technique": "Standard protocol",
      "findings": "LARGE LEFT-SIDED ACUTE-ON-CHRONIC SUBDURAL HEMATOMA. Mixed-density crescent-shaped collection over the left convexity measuring 18mm maximal thickness. Hyperdense (acute) component layered posteriorly within a hypodense (chronic) collection. MIDLINE SHIFT 11mm to the right. LEFT LATERAL VENTRICLE compressed. Early subfalcine herniation. No subarachnoid hemorrhage. Mild generalized cortical atrophy. Periventricular white matter changes.",
      "impression": "LARGE ACUTE-ON-CHRONIC LEFT SUBDURAL HEMATOMA with 11mm midline shift and early herniation signs. EMERGENT NEUROSURGICAL CONSULTATION for evacuation. Reverse anticoagulation IMMEDIATELY.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-897573",
      "clinical": "Wife: 'He's not himself — confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
      "technique": "Standard 12-lead",
      "findings": "Atrial fibrillation at 78 bpm. No ST changes. Normal intervals",
      "impression": "Chronic AFib — patient on anticoagulation that contributed to SDH",
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
    "Father: stroke",
    "No bleeding disorders"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit 20 years ago"
    ],
    [
      "Alcohol",
      "2-3 drinks daily for decades"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired professor (history department)"
    ],
    [
      "Living",
      "Lives with wife of 48 years"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Walter appears mildly confused and somewhat anxious, frequently looking to his wife for confirmation of details. He's cooperative but clearly distressed by his cognitive changes, often saying 'I'm not usually like this' and becoming frustrated when he can't remember things clearly.",
    "interviewQuestions": [
      "Can you tell me more about when these symptoms first started?",
      "Describe the headache - where exactly do you feel it and what does it feel like?",
      "Have you had any recent falls or head injuries?",
      "Are you having any nausea or vomiting with the headache?",
      "Have you noticed any weakness or numbness anywhere?",
      "Any vision changes or difficulty speaking?",
      "Tell me about your recent falls - when did they happen?",
      "Are you taking all your medications as prescribed?",
      "Have you had any bleeding from anywhere recently?",
      "Any seizures or loss of consciousness?",
      "How has your balance and coordination been?",
      "Have you had headaches like this before?",
      "Any recent changes to your medications?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble thinking clearly right now. Can you ask that a different way?",
      "onset": "My wife noticed I wasn't quite right about two weeks ago, but it's gotten much worse over the past few days, especially today.",
      "character": "It's a dull, constant ache - not sharp or throbbing, just this persistent pressure feeling all over my head.",
      "location": "It's on both sides of my head, kind of all over really. Not focused in one spot.",
      "severity": "Maybe a 5 or 6 out of 10 for pain, but it's the confusion that really bothers me. I can't think straight.",
      "aggravating": "Moving around seems to make me more unsteady, and bright lights bother me a bit.",
      "relieving": "Tylenol hasn't helped much. Lying down quietly helps a little.",
      "associated": "I've been more clumsy, having trouble with balance, and my wife says I'm walking differently. Sometimes I feel a bit nauseated.",
      "denies": "No vision changes, no trouble speaking that I know of, no numbness or tingling anywhere specific.",
      "history": "I get occasional headaches but nothing like this. This is different - it's the confusion that scares me.",
      "medications": "Apixaban; Lisinopril; Tamsulosin",
      "allergies": "NKDA",
      "family": "My father had a stroke when he was in his 80s. No one in the family has bleeding problems that I know of.",
      "social": "I'm a retired history professor. I still have 2-3 drinks most evenings - have for years. Quit smoking 20 years ago. I live with my wife."
    },
    "examManeuvers": [
      "Neurological assessment including mental status",
      "Fundoscopic examination",
      "Gait assessment",
      "Coordination testing (finger-to-nose, heel-to-shin)",
      "Deep tendon reflexes",
      "Cranial nerve examination",
      "Assessment for focal neurological deficits",
      "Head and neck examination for trauma",
      "Cardiovascular examination",
      "Blood pressure in both arms"
    ],
    "examFindings": {
      "Neurological assessment including mental status": "Mild cognitive impairment with short-term memory deficits, oriented to person and place but unsure of date, MMSE 24/30",
      "Fundoscopic examination": "Bilateral papilledema with blurred disc margins and venous engorgement",
      "Gait assessment": "Unsteady, wide-based gait with tendency to drift, requires assistance to maintain balance",
      "Coordination testing (finger-to-nose, heel-to-shin)": "Bilateral dysmetria, more pronounced on right side",
      "Deep tendon reflexes": "Hyperreflexia bilaterally, more prominent in lower extremities",
      "Cranial nerve examination": "CN II-XII grossly intact except for mild bilateral papilledema on fundoscopy",
      "Assessment for focal neurological deficits": "Subtle right-sided weakness, pronator drift positive on right",
      "Head and neck examination for trauma": "No obvious external trauma, no Battle's sign or raccoon eyes",
      "Cardiovascular examination": "Irregularly irregular rhythm consistent with atrial fibrillation, no murmurs",
      "Blood pressure in both arms": "Elevated bilaterally: right 162/88, left 158/86"
    },
    "ddxTargets": [
      "Chronic subdural hematoma (correct diagnosis)",
      "Acute stroke/TIA",
      "Normal pressure hydrocephalus",
      "Intracranial mass lesion",
      "Acute subdural hematoma",
      "Medication-related cognitive impairment",
      "Alcohol-related encephalopathy"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'headache' as primary complaint and pursue migraine or tension headache, missing the cognitive changes and anticoagulation context",
      "prematureClosure": "Risk of stopping at 'elderly confusion' or attributing symptoms to alcohol use without considering structural causes",
      "availabilityBias": "Recent cases of stroke might lead to immediate focus on acute cerebrovascular events, potentially missing chronic subdural hematoma"
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable possibilities. Given Walter's age, medication history, and the constellation of cognitive changes with headache, what specific risk factors should you explore? What key historical details might help you narrow your differential?",
      "phase5": "Excellent work gathering the history and exam findings. The combination of papilledema, cognitive changes, gait instability, and subtle focal findings in an anticoagulated patient with fall history is very telling. What does this clinical picture suggest to you?",
      "finalDebrief": "This case highlights how chronic subdural hematoma can present insidiously in anticoagulated patients. The key was recognizing that the 'confusion' wasn't just delirium, but part of a syndrome including increased intracranial pressure. How did your thinking evolve as you gathered the fall history and noted the papilledema?"
    }
  }
};
