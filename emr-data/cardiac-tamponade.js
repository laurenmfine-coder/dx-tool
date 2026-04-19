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
      "id": "prob-1",
      "description": "Non-small cell lung cancer",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Completed 4 cycles of carboplatin/pemetrexed 2 months ago \u2014 disease progression",
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
              "unit": "x10\u00b3/\u00b5L",
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
              "unit": "x10\u00b3/\u00b5L",
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
      "study": "POCUS \u2013 Cardiac",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-937131",
      "clinical": "I can't breathe Chest \u2014 pressure/fullness sensation, diffuse",
      "technique": "Standard protocol",
      "findings": "LARGE CIRCUMFERENTIAL PERICARDIAL EFFUSION (>2cm). RIGHT ATRIAL COLLAPSE in diastole (earliest sign of tamponade \u2014 RA has lowest intracardiac pressure). RIGHT VENTRICULAR DIASTOLIC COLLAPSE (confirms hemodynamic significance). IVC plethoric (>2.1cm) with <50% respirophasic variation (elevated RA pressure). SWINGING HEART within effusion (corresponds to electrical alternans). No left-sided collapse. LV function appears hyperdynamic (small, underfilled ventricle contracting vigorously).",
      "impression": "LARGE PERICARDIAL EFFUSION WITH TAMPONADE PHYSIOLOGY \u2014 RA and RV diastolic collapse, plethoric IVC. EMERGENT PERICARDIOCENTESIS REQUIRED.",
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
      "clinical": "I can't breathe Chest \u2014 pressure/fullness sensation, diffuse",
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
      "clinical": "I can't breathe Chest \u2014 pressure/fullness sensation, diffuse",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 118 bpm. LOW VOLTAGE throughout (QRS amplitude <5mm in limb leads \u2014 pericardial fluid attenuates signal). ELECTRICAL ALTERNANS (QRS amplitude alternates beat-to-beat \u2014 swinging heart within fluid). No ST changes",
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
      "On disability \u2014 former construction supervisor"
    ],
    [
      "Living",
      "Lives with wife and adult daughter"
    ]
  ],
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Working diagnosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Working diagnosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Working diagnosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Working diagnosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Patricia Moreno's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Patricia appears anxious and mildly short of breath while speaking, frequently pausing mid-sentence to catch her breath. She is cooperative and forthcoming about her symptoms, expressing clear concern about her breathing difficulties given her cancer history. Her distress level is moderate to high, with visible worry about what these new symptoms might mean for her prognosis.",
    "interviewQuestions": [
        "When did you first notice the breathing difficulty and chest pressure?",
        "Can you describe exactly what the chest pressure feels like?",
        "Does the pressure or breathing difficulty worsen with lying down or improve when sitting up?",
        "On a scale of 1-10, how would you rate your breathing difficulty right now?",
        "Have you noticed any swelling in your legs, ankles, or abdomen?",
        "Are you experiencing any chest pain, and if so, what does it feel like?",
        "Have you had any coughing, and if so, are you bringing anything up?",
        "Have you noticed your heart racing or pounding?",
        "Have you had any episodes like this before?",
        "What medications are you currently taking?",
        "Do you have any known allergies to medications?",
        "Has anyone in your family had heart problems or lung cancer?",
        "Can you tell me about your smoking history and current lifestyle?"
    ],
    "patientResponses": {
        "default": "I'm sorry, could you explain what you mean? I'm having trouble concentrating with this breathing problem.",
        "onset": "It started about 3 days ago, gradually at first, but it's gotten much worse since yesterday. I woke up this morning feeling like I was drowning.",
        "character": "It's like someone is sitting on my chest, this heavy, full feeling that won't go away. It's not a sharp pain, just constant pressure that makes every breath feel incomplete.",
        "location": "The pressure is all across my chest, from one side to the other. It doesn't seem to move anywhere else, just sits right here on my chest.",
        "severity": "The breathing difficulty is about an 8 out of 10 right now. I can barely walk to the bathroom without getting completely winded, and I used to be pretty active despite my cancer.",
        "aggravating": "It definitely gets worse when I try to lie flat - I've been sleeping in my recliner for two nights. Any activity, even just talking, seems to make the breathing harder.",
        "relieving": "Sitting upright helps a little bit, but nothing really makes it go away. Even my pain medication doesn't touch this feeling.",
        "associated": "My heart feels like it's racing all the time, and I've been feeling dizzy when I stand up. I'm also more tired than usual, which is saying something given my treatments.",
        "denies": "I don't have any sharp chest pain, no fever, and I'm not coughing up blood or anything like that. No nausea or vomiting either.",
        "history": "I've never had anything like this before, even during my chemotherapy treatments. This is completely new and scary for me.",
        "medications": "Dexamethasone; Levetiracetam; Ondansetron; Oxycodone",
        "allergies": "NKDA",
        "family": "My father died of lung cancer - he was a heavy smoker his whole life. I don't know of any family history of heart problems.",
        "social": "I'm on disability now, used to supervise construction crews. I smoked for about 30 years, quit when I got my cancer diagnosis a year ago. I stopped drinking when I got sick, and I've never used drugs. I live with my wife and adult daughter who help take care of me."
    },
    "examManeuvers": [
        "Jugular venous distension assessment",
        "Heart sounds auscultation",
        "Lung auscultation",
        "Peripheral edema examination",
        "Hepatojugular reflux test",
        "Point of maximal impulse palpation",
        "Pulsus paradoxus measurement",
        "Lower extremity examination for swelling",
        "Abdominal examination for ascites",
        "Assessment of heart rate and rhythm"
    ],
    "examFindings": {
        "Jugular venous distension assessment": "Elevated JVD to 8-9 cm above the sternal angle, visible even when patient is sitting upright at 45 degrees",
        "Heart sounds auscultation": "Distant, muffled heart sounds with rapid rate, difficult to clearly distinguish S1 and S2, no obvious murmurs appreciated",
        "Lung auscultation": "Clear breath sounds bilaterally with decreased air entry at bases, no rales, wheezes, or rhonchi",
        "Peripheral edema examination": "Mild bilateral lower extremity pitting edema, 1+ at ankles extending to mid-calf",
        "Hepatojugular reflux test": "Positive hepatojugular reflux - JVD increases significantly with abdominal pressure",
        "Point of maximal impulse palpation": "PMI difficult to palpate, appears diffuse and displaced, weak impulse",
        "Pulsus paradoxus measurement": "Pulsus paradoxus of 18 mmHg (abnormal, >10 mmHg suggests cardiac tamponade)",
        "Lower extremity examination for swelling": "Bilateral pitting edema 1+ at ankles, skin warm and intact, pulses present but weak",
        "Abdominal examination for ascites": "Mild abdominal distension, no obvious fluid wave, liver edge possibly palpable 2 cm below costal margin",
        "Assessment of heart rate and rhythm": "Tachycardic at 118 bpm, regular rhythm, weak peripheral pulses"
    },
    "ddxTargets": [
        "Cardiac tamponade (correct diagnosis)",
        "Congestive heart failure",
        "Pulmonary embolism",
        "Superior vena cava syndrome",
        "Tension pneumothorax",
        "Pleural effusion",
        "Pneumonia with sepsis"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on cancer history and assuming all symptoms are disease progression rather than considering acute cardiac emergency requiring immediate intervention",
        "prematureClosure": "May quickly assume CHF or cancer-related dyspnea without recognizing the classic triad of tamponade (elevated JVD, muffled heart sounds, hypotension) and narrow pulse pressure",
        "availabilityBias": "Recent cases of CHF or pulmonary embolism might overshadow the less common but life-threatening diagnosis of cardiac tamponade in cancer patients"
    },
    "coachPrompts": {
        "phase2": "Given this patient's cancer history and acute presentation, what life-threatening cardiovascular emergencies should you specifically consider? How might her narrow pulse pressure of 16 mmHg guide your thinking about the underlying pathophysiology?",
        "phase5": "You've identified several key findings: elevated JVD, muffled heart sounds, narrow pulse pressure, and pulsus paradoxus. How do these findings fit together pathophysiologically? What does Beck's triad suggest, and what might be the underlying cause in this cancer patient?",
        "finalDebrief": "Cardiac tamponade in cancer patients often results from malignant pericardial effusion. Notice how the narrow pulse pressure and pulsus paradoxus were key early clues that distinguished this from CHF. How did recognizing Beck's triad help narrow your differential? What made you initially consider other diagnoses, and what clinical reasoning led you to the correct diagnosis?"
    }
}
};
