/* emr-data/cauda-equina.js — EMR case data for Cauda Equina Syndrome */
window.EMR_DATA = {
  "patient": {
    "name": "Frances Yamamoto",
  "patientHPI": "My lower back is killing me, and now the pain is shooting down the back of both my legs all the way to my calves. It's different from my usual back problems - this pain goes much further down than before.",
    "dob": "05/17/1964",
    "age": "62",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-690238",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(504) 555-8753",
    "email": "frances.yamamoto@email.com",
    "address": "5732 Clover St, Birmingham, AL 35209",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Walgreens — Pines Blvd",
    "emergencyContact": {
      "name": "Charles Lewis",
      "phone": "(619) 555-9698",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Back pain shooting down both legs Low back, radiating down both legs — back of thighs and into calves",
    "diagnosis": "Cauda Equina Syndrome"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Lumbar disc herniation",
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
      "description": "Obesity",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Ibuprofen",
      "dose": "800mg TID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-2",
      "name": "Cyclobenzaprine",
      "dose": "10mg TID PRN",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    },
    {
      "id": "med-3",
      "name": "Hydrochlorothiazide",
      "dose": "25mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Michael Torres, DO"
    }
  ],
  "allergies": [
    {
      "allergen": "Morphine",
      "reaction": "Itching",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "06:12",
      "bp": "152/92",
      "hr": "94",
      "rr": "18",
      "temp": "37.0°C",
      "spo2": "98%",
      "pain": "9/10",
      "bmi": "33",
      "weight": "76 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Back pain shooting down both legs Low back, radiating down both legs — back of thighs and into calves",
      "hpi": "Frances Yamamoto is a 62-year-old female presenting with back pain shooting down both legs low back, radiating down both legs — back of thighs and into calves. Past medical history includes Lumbar disc herniation, Hypertension, Obesity. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Cauda Equina Syndrome — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-590860",
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
              "value": "8.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "14.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "37",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "316",
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
              "value": "142",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "5",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "99",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "27",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
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
              "value": "102",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.8",
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
              "test": "ESR",
              "value": "12",
              "unit": "mm/hr",
              "range": "<20",
              "flag": ""
            },
            {
              "test": "CRP",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Urinalysis",
              "value": "Normal",
              "unit": "",
              "range": "Normal",
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
      "accession": "IMG-763573",
      "clinical": "Back pain shooting down both legs Low back, radiating down both legs — back of thighs and into calves",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "MRI Brain",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-403965",
      "clinical": "Back pain shooting down both legs Low back, radiating down both legs — back of thighs and into calves",
      "technique": "Standard protocol",
      "findings": "LARGE CENTRAL DISC HERNIATION at L4-L5 with caudal migration. Disc fragment compresses the cauda equina nerve roots significantly. Effacement of the thecal sac. Bilateral L5 and S1 nerve root compression. No epidural abscess. No spinal cord signal abnormality above the conus.",
      "impression": "CAUDA EQUINA SYNDROME — large L4-L5 disc herniation with cauda equina compression. EMERGENT NEUROSURGICAL DECOMPRESSION REQUIRED within 24-48 hours for best outcomes.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "Abdominal X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-490085",
      "clinical": "Back pain shooting down both legs Low back, radiating down both legs — back of thighs and into calves",
      "technique": "Standard protocol",
      "findings": "Distended bladder occupying lower pelvis. Stool burden in colon. No free air. Lumbar degenerative changes.",
      "impression": "Distended bladder consistent with urinary retention. Constipation noted.",
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
      "accession": "IMG-272055",
      "clinical": "Back pain shooting down both legs Low back, radiating down both legs — back of thighs and into calves",
      "technique": "Standard 12-lead",
      "findings": "Sinus rhythm at 94 bpm. No ST changes. Normal intervals",
      "impression": "Normal ECG",
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
    "Father: degenerative disc disease",
    "No cancer history"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current smoker, 15 pack-years"
    ],
    [
      "Alcohol",
      "2-3 beers daily"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Warehouse supervisor — on modified duty for back pain"
    ],
    [
      "Living",
      "Lives with spouse"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Frances Yamamoto appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did back pain shooting down both legs low back, radiating down both legs \u2014 back of thighs and into calves start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started My lower back is killing me, and now the pain is shooting down the back of both .'",
        "character": "'It's back pain shooting down both legs low back, radiating down both legs \u2014 back of thighs and into calves \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Ibuprofen; Cyclobenzaprine; Hydrochlorothiazide.'",
        "allergies": "'My allergies are Morphine.'",
        "family": "Father: degenerative disc disease  No cancer history",
        "social": "Tobacco: Current smoker, 15 pack-years  Alcohol: 2-3 beers daily  Drugs: Denies  Occupation: Warehouse supervisor \u2014 on modified duty for back pain  Living: Lives with spouse"
    },
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
        "phase2": "You've reviewed Frances Yamamoto's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
