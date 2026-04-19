/* emr-data/complete-heart-block.js — EMR case data for Complete (Third-Degree) Heart Block */
window.EMR_DATA = {
  "patient": {
    "name": "Raymond Brooks",
    "patientHPI": "I keep feeling like I'm about to pass out and I'm just so weak and lightheaded all the time, though I don't have any chest pain or anything like that.",
    "dob": "06/15/1952",
    "age": "74",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-530586",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(505) 555-8191",
    "email": "raymond.brooks@email.com",
    "address": "3659 Elm St, Milwaukee, WI 53210",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "CVS Pharmacy — University Dr",
    "emergencyContact": {
      "name": "Gloria Stewart",
      "phone": "(414) 555-9843",
      "relationship": "Parent"
    },
    "chiefComplaint": "I keep nearly passing out No specific chest pain — generalized weakness and lightheadedness",
    "diagnosis": "Complete (Third-Degree) Heart Block"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Calcific aortic stenosis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Lyme disease",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Metoprolol",
      "dose": "100mg BID (rate-controlling agent — potential contributor)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-2",
      "name": "Diltiazem",
      "dose": "180mg ER daily (calcium channel blocker — potential contributor)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-3",
      "name": "Lisinopril",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-4",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
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
      "time": "10:06",
      "bp": "96/64",
      "hr": "34 (SEVERE BRADYCARDIA)",
      "rr": "18",
      "temp": "36.9°C",
      "spo2": "94%",
      "pain": "3/10",
      "bmi": "27",
      "weight": "56 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "I keep nearly passing out No specific chest pain — generalized weakness and lightheadedness",
      "hpi": "Raymond Brooks is a 74-year-old male presenting with i keep nearly passing out no specific chest pain — generalized weakness and lightheadedness. Past medical history includes Hypertension, Calcific aortic stenosis, Lyme disease, Type 2 Diabetes. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Complete (Third-Degree) Heart Block — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-302357",
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
              "value": "10.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.1",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "36",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "286",
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
              "value": "136",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "5.1",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "101",
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
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "80",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "10",
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
              "value": "0.06",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "BNP",
              "value": "480",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "TSH",
              "value": "2.8",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": ""
            },
            {
              "test": "Digoxin Level",
              "value": "Not on digoxin",
              "unit": "",
              "range": "0.5-2.0",
              "flag": ""
            },
            {
              "test": "Lyme Antibody",
              "value": "Positive IgG (prior infection — treated 15 years ago)",
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
      "study": "POCUS – Cardiac",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-268064",
      "clinical": "I keep nearly passing out No specific chest pain — generalized weakness and lightheadedness",
      "technique": "Standard protocol",
      "findings": "Moderate LV hypertrophy (from aortic stenosis). Calcified aortic valve with restricted opening. LV function appears preserved but heart rate is severely low (34 bpm). No pericardial effusion. IVC mildly dilated.",
      "impression": "Aortic stenosis with preserved LV function. Severe bradycardia limits cardiac output. No tamponade.",
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
      "accession": "IMG-121509",
      "clinical": "I keep nearly passing out No specific chest pain — generalized weakness and lightheadedness",
      "technique": "Standard protocol",
      "findings": "Mild cardiomegaly. Mild pulmonary vascular congestion. No focal consolidation. No pleural effusion.",
      "impression": "Mild heart failure from low-output state",
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
      "accession": "IMG-174780",
      "clinical": "I keep nearly passing out No specific chest pain — generalized weakness and lightheadedness",
      "technique": "Standard 12-lead",
      "findings": "COMPLETE (THIRD-DEGREE) AV BLOCK — P waves at regular rate (~80/min) with NO relationship to QRS complexes. Ventricular escape rhythm at 34 bpm with WIDE QRS (0.14sec) — infranodal (His-Purkinje) escape. P waves 'march through' QRS complexes independently. No conducted beats.. PR interval: not applicable (no consistent PR). QRS width: 0.14 sec (wide — suggests His-Purkinje disease, not junctional)",
      "impression": "COMPLETE HEART BLOCK with wide-complex ventricular escape at 34 bpm. Infranodal block (wide QRS) has high risk of asystole. EMERGENT MANAGEMENT REQUIRED — transcutaneous pacing, atropine (may not work for infranodal block), and transvenous pacing.",
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
    "Father: pacemaker placement at age 70",
    "No sudden cardiac death history"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit 20 years ago"
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
      "Retired postal worker"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Raymond appears mildly anxious and fatigued, speaking slowly and deliberately. He is cooperative and forthcoming about his symptoms, though seems genuinely worried about the frequent near-fainting episodes affecting his daily activities.",
    "interviewQuestions": [
      "When did these episodes of lightheadedness and weakness first begin?",
      "How often are you experiencing these near-fainting episodes?",
      "Have you actually lost consciousness or just felt like you might?",
      "Do these episodes happen at rest, with activity, or both?",
      "Are there any positions that make the symptoms better or worse?",
      "Have you noticed your heart beating irregularly or very slowly?",
      "Any chest pain, shortness of breath, or palpitations?",
      "Have you had any falls or injuries from these episodes?",
      "Any recent medication changes or new medications started?",
      "Have you been checking your blood pressure at home?",
      "Any nausea, vomiting, or sweating with these episodes?",
      "Has anyone in your family needed a pacemaker for slow heart rhythms?",
      "Are you taking all your heart medications as prescribed?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you explain that differently?",
      "onset": "This started about 3 weeks ago, gradually getting worse. At first I just felt a little dizzy here and there, but now it's happening multiple times daily.",
      "character": "It's this overwhelming weakness and lightheadedness, like all the energy just drains out of me. I feel like I'm going to faint but I haven't actually passed out yet.",
      "location": "It's not really located anywhere specific - just an overall feeling of weakness and dizziness, mainly in my head I suppose.",
      "severity": "I'd say it's about a 7 out of 10 for how much it's affecting me. I'm afraid to drive or go anywhere alone because I might collapse.",
      "aggravating": "It seems to get worse when I stand up quickly or try to do any physical activity, even just walking to the mailbox.",
      "relieving": "Sitting down helps a little, but the weakness is pretty constant now. Rest doesn't make it go away completely.",
      "associated": "I've been more tired than usual and sometimes feel short of breath with minimal activity. No chest pain though.",
      "denies": "No chest pain, no palpitations that I notice, no nausea or vomiting, haven't actually fainted or fallen.",
      "history": "Never had anything like this before. I've had the heart valve problem for years but it's been stable.",
      "medications": "Metoprolol; Diltiazem; Lisinopril; Metformin",
      "allergies": "Sulfa drugs",
      "family": "My father had to get a pacemaker when he was 70 for a slow heart rate. No one in the family has had sudden cardiac death.",
      "social": "I'm a retired postal worker, live with my wife. Quit smoking 20 years ago, rarely drink alcohol, no drugs. I used to be pretty active but these symptoms have me scared to do much."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Pulse palpation and rhythm assessment",
      "Blood pressure in multiple positions",
      "Orthostatic vital signs",
      "Jugular venous pressure assessment",
      "Carotid pulse examination",
      "Peripheral pulse examination",
      "Neurological assessment including coordination",
      "Fundoscopic examination",
      "Assessment for signs of heart failure"
    ],
    "examFindings": {
      "Cardiac auscultation": "Grade 3/6 systolic ejection murmur at right sternal border, consistent with known aortic stenosis. Regular rhythm but very slow rate.",
      "Pulse palpation and rhythm assessment": "Radial pulse regular but profoundly bradycardic at 34 bpm, strong volume",
      "Blood pressure in multiple positions": "Sitting 96/64, standing 88/60 - mild orthostatic hypotension",
      "Orthostatic vital signs": "HR remains 34 in all positions, BP drops 8 mmHg systolic when standing",
      "Jugular venous pressure assessment": "JVP normal at 6 cm, no cannon waves or elevated pressure",
      "Carotid pulse examination": "Carotid upstroke delayed and diminished bilaterally, consistent with aortic stenosis",
      "Peripheral pulse examination": "All peripheral pulses palpable but bradycardic, no peripheral edema",
      "Neurological assessment including coordination": "Alert and oriented, no focal deficits, mild unsteadiness with rapid position changes",
      "Fundoscopic examination": "Normal optic discs, no papilledema or retinal hemorrhages",
      "Assessment for signs of heart failure": "No JVD, rales, or peripheral edema; lungs clear to auscultation"
    },
    "ddxTargets": [
      "Medication-induced bradycardia (correct diagnosis)",
      "Complete heart block",
      "Sick sinus syndrome",
      "Acute myocardial infarction",
      "Aortic stenosis progression",
      "Orthostatic hypotension",
      "Vasovagal syncope"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known aortic stenosis and assuming symptoms are due to valvular progression rather than considering medication effects",
      "prematureClosure": "Risk of stopping after identifying bradycardia without investigating the reversible cause of dual beta-blocker and calcium channel blocker therapy",
      "availabilityBias": "Recent cases of structural heart disease may overshadow the common medication-induced etiology in elderly patients"
    },
    "coachPrompts": {
      "phase2": "Looking at this 74-year-old with near-syncope and known cardiac comorbidities, what key historical elements will help you differentiate between structural cardiac causes versus other etiologies? Consider both his past medical history and current medications.",
      "phase5": "You've identified severe bradycardia as the likely culprit for his symptoms. Now think systematically - what could cause this degree of bradycardia in this patient? Review his medication list and consider drug interactions.",
      "finalDebrief": "This case highlights medication-induced bradycardia from the combination of metoprolol and diltiazem - both affecting cardiac conduction. How did your differential diagnosis evolve from considering structural causes like progressive aortic stenosis to recognizing this iatrogenic but reversible cause? What does this teach us about polypharmacy in elderly cardiac patients?"
    }
  }
};
