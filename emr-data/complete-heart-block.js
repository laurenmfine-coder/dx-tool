
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
    "pharmacy": "CVS Pharmacy \u2014 University Dr",
    "emergencyContact": {
      "name": "Gloria Stewart",
      "phone": "(414) 555-9843",
      "relationship": "Parent"
    },
    "chiefComplaint": "I keep nearly passing out No specific chest pain \u2014 generalized weakness and lightheadedness",
    "diagnosis": "Complete (Third-Degree) Heart Block"
  },
  "problems": [
    {
      "problem": "Complete heart block \u2014 third degree, AV dissociation",
      "icd": "I44.2",
      "onset": "2024",
      "status": "Active",
      "notes": "P waves and QRS complexes completely dissociated. Ventricular rate 34 bpm. Lyme disease serology positive."
    },
    {
      "problem": "Lyme carditis \u2014 AV block from B. burgdorferi",
      "icd": "A69.23",
      "onset": "2024",
      "status": "Active",
      "notes": "Endemic area tick exposure 3 weeks prior. Erythema migrans noted retrospectively."
    },
    {
      "problem": "Hemodynamic compromise \u2014 HR 34, near-syncope",
      "icd": "I44.2",
      "onset": "2024",
      "status": "Active",
      "notes": "BP 88/58 at HR 34 \u2014 adequate perfusion requires pacing"
    }
  ],
  "medications": [
    {
      "name": "Atropine 0.5mg IV x2 \u2014 temporizing",
      "sig": "IV push \u2014 may increase ventricular rate transiently; limited effect in complete block",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 0,
      "status": "Given \u2014 limited response"
    },
    {
      "name": "Dopamine infusion 5-10 mcg/kg/min \u2014 hemodynamic support",
      "sig": "IV infusion \u2014 chronotropic and vasopressor support pending pacing",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Temporary transvenous pacemaker \u2014 emergency",
      "sig": "Inserted via right internal jugular vein \u2014 rate set to 70 bpm",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ceftriaxone 2g IV daily x21 days \u2014 Lyme treatment",
      "sig": "IV once daily for Lyme carditis",
      "prescriber": "ID",
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
      "time": "10:06",
      "bp": "96/64",
      "hr": "34 (SEVERE BRADYCARDIA)",
      "rr": "18",
      "temp": "36.9\u00b0C",
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
      "cc": "I keep nearly passing out No specific chest pain \u2014 generalized weakness and lightheadedness",
      "hpi": "Raymond Brooks is a 74-year-old male presenting with i keep nearly passing out no specific chest pain \u2014 generalized weakness and lightheadedness. Past medical history includes Hypertension, Calcific aortic stenosis, Lyme disease, Type 2 Diabetes. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Complete (Third-Degree) Heart Block \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Heart Block Workup",
      "results": [
        {
          "test": "Lyme IgM (ELISA)",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Lyme IgG (ELISA)",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Western blot IgM",
          "value": "Positive \u2014 confirmatory",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Troponin I",
          "value": "0.12",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "6.8",
          "unit": "mg/dL",
          "ref": "<1.0",
          "flag": "H"
        },
        {
          "test": "TSH",
          "value": "2.4",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "12-Lead ECG + Echocardiogram",
      "indication": "Bradycardia, near-syncope, AV dissociation on monitor",
      "findings": "ECG: P waves at rate 88 bpm, QRS at rate 34 bpm \u2014 complete AV dissociation. Wide QRS escape rhythm. No ST changes. Echo: Normal EF 62%. Mild diffuse wall motion hypokinesis. No structural heart disease. Small pericardial effusion 4mm \u2014 consistent with Lyme myopericarditis.",
      "impression": "Complete heart block with slow ventricular escape rate requiring pacing. Lyme carditis diagnosis supported by serology, myopericarditis pattern, pericardial effusion, and recent tick exposure."
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
      "Complete heart block \u2014 Lyme carditis, temporary pacing (correct)",
      "Idiopathic complete heart block \u2014 Lyme serology positive; not idiopathic",
      "Second-degree Mobitz II \u2014 complete dissociation makes this complete block",
      "Beta-blocker toxicity causing CHB \u2014 no medication exposure",
      "Hyperkalemia causing CHB \u2014 potassium normal",
      "Sarcoid heart block \u2014 possible in older patients, Lyme more likely given history"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known aortic stenosis and assuming symptoms are due to valvular progression rather than considering medication effects",
      "prematureClosure": "Risk of stopping after identifying bradycardia without investigating the reversible cause of dual beta-blocker and calcium channel blocker therapy",
      "availabilityBias": "Recent cases of structural heart disease may overshadow the common medication-induced etiology in elderly patients"
    },
    "coachPrompts": {
      "phase2": "Looking at this 74-year-old with near-syncope and known cardiac comorbidities, what key historical elements will help you differentiate between structural cardiac causes versus other etiologies? Consider both his past medical history and current medications.",
      "phase5": "You've identified severe bradycardia as the likely culprit for his symptoms. Now think systematically - what could cause this degree of bradycardia in this patient? Review his medication list and consider drug interactions.",
      "finalDebrief": "This case highlights medication-induced bradycardia from the combination of metoprolol and diltiazem - both affecting cardiac conduction. How did your differential diagnosis evolve from considering structural causes like progressive aortic stenosis to recognizing this iatrogenic but reversible cause? What does this teach us about polypharmacy in elderly cardiac patients?",
      "final": "Diagnosis: complete heart block from Lyme carditis. Key learning: (1) Lyme cardiac manifestations: AV block is the most common cardiac manifestation (4-10% of Lyme disease). Usually first or second degree; complete block occurs in 1-3%. Block typically resolves with antibiotics \u2014 temporary pacing rather than permanent pacemaker is appropriate. (2) Temporary pacing threshold: complete block with hemodynamic compromise (syncope, pre-syncope, HR <40, hypotension) = temporary pacemaker. Transcutaneous pacing as bridge if transvenous not immediately available (painful, poor capture). (3) Lyme diagnosis: two-tier testing \u2014 ELISA screening, then Western blot confirmation. MUST meet both criteria. ELISA alone has 30% false positive rate. (4) Treatment: IV ceftriaxone for Lyme carditis (preferred for third-degree AV block, hospitalized patients). Oral doxycycline acceptable for first/second-degree block in stable outpatient. Duration 14-21 days. (5) Permanent pacemaker: NOT indicated for Lyme CHB \u2014 block resolves in 90%+ with antibiotics. Reassess AV conduction after 2-4 weeks of antibiotics before any discussion of permanent pacing."
    }
  },
  "meta": {
    "diagnosis": "Complete (Third-Degree) Heart Block \u2014 Lyme Disease Etiology, Temporary Pacing",
    "caseId": "complete-heart-block"
  }
};
