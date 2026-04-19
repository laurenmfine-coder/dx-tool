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
    "patientPersona": "Frances appears uncomfortable and slightly irritable from chronic pain, frequently shifting position during the interview. She is forthcoming about her symptoms but shows frustration about her worsening condition affecting her work responsibilities.",
    "interviewQuestions": [
      "When did this leg pain first start and how has it progressed?",
      "Can you describe exactly where the pain travels down your legs?",
      "On a scale of 1-10, how would you rate your current pain?",
      "What makes the pain better or worse?",
      "Do you have any numbness, tingling, or weakness in your legs?",
      "Any problems with bowel or bladder control?",
      "How does this compare to your previous back problems?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Has anyone in your family had similar back problems?",
      "Tell me about your work and daily activities",
      "Any recent falls, injuries, or heavy lifting?",
      "Do you have any fever, chills, or night sweats?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that - can you ask me differently?",
      "onset": "The leg pain started about 3 weeks ago and has been getting progressively worse. It began as just my usual lower back ache, but then the shooting pain down both legs started.",
      "character": "It's like a sharp, burning, electric shock that shoots down the back of both my legs. Sometimes it feels like someone is stabbing me with a hot knife.",
      "location": "The pain starts in my lower back, right in the center, and shoots down the back of both thighs all the way into my calves. It's pretty much equal on both sides.",
      "severity": "Right now it's about an 8 out of 10. I can barely walk to the bathroom without wanting to cry. I haven't been able to work my regular duties for weeks.",
      "aggravating": "Sitting makes it much worse, especially in my car or at my desk. Coughing or sneezing sends shooting pain down both legs. Standing up from sitting is excruciating.",
      "relieving": "Nothing really helps much anymore. I've been taking ibuprofen and my muscle relaxer but they barely take the edge off. Lying flat sometimes helps a little.",
      "associated": "My legs feel weak, especially when I try to stand up. There's some numbness and tingling in both feet. I feel like my legs might give out on me.",
      "denies": "No fever, no problems with my bowel or bladder, no night sweats. The pain doesn't go into my groin or front of my legs.",
      "history": "I've had lower back pain on and off for about 10 years from a herniated disc, but it never went down my legs like this before. This is completely different and much worse.",
      "medications": "Ibuprofen; Cyclobenzaprine; Hydrochlorothiazide",
      "allergies": "Morphine",
      "family": "My father had terrible back problems - degenerative disc disease. He ended up needing surgery when he was in his 70s.",
      "social": "I supervise at a warehouse but I'm on modified duty now because I can't do the physical parts of my job. I smoke about a pack a day and have a couple beers most nights to help with the pain."
    },
    "examManeuvers": [
      "Straight leg raise test bilaterally",
      "Neurologic exam - strength testing of lower extremities",
      "Reflex testing (patellar and Achilles)",
      "Sensory testing of lower extremities",
      "Lumbar spine range of motion",
      "Palpation of lumbar spine",
      "Assessment of gait",
      "Rectal exam for sphincter tone",
      "Hip range of motion",
      "Crossed straight leg raise test"
    ],
    "examFindings": {
      "Straight leg raise test bilaterally": "Positive bilaterally at 30 degrees, reproducing radiating leg pain",
      "Neurologic exam - strength testing of lower extremities": "Mild weakness in bilateral plantarflexion (4/5), otherwise intact",
      "Reflex testing (patellar and Achilles)": "Diminished Achilles reflexes bilaterally, patellar reflexes normal",
      "Sensory testing of lower extremities": "Decreased sensation to light touch in bilateral S1 distribution",
      "Lumbar spine range of motion": "Severely limited flexion and extension due to pain",
      "Palpation of lumbar spine": "Tenderness over L5-S1 region with mild paraspinal muscle spasm",
      "Assessment of gait": "Antalgic gait, walks slowly with forward-flexed posture",
      "Rectal exam for sphincter tone": "Normal sphincter tone, no saddle anesthesia",
      "Hip range of motion": "Full and pain-free bilaterally",
      "Crossed straight leg raise test": "Negative bilaterally"
    },
    "ddxTargets": [
      "Central lumbar spinal stenosis (correct diagnosis)",
      "Lumbar disc herniation with bilateral radiculopathy",
      "Spondylolisthesis with neurogenic claudication",
      "Cauda equina syndrome (must-not-miss diagnosis 1)",
      "Spinal tumor or metastases (must-not-miss diagnosis 2)",
      "Peripheral arterial disease with claudication (common mimic 1)",
      "Piriformis syndrome (common mimic 2)"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on previous diagnosis of lumbar disc herniation and not considering spinal stenosis as the primary pathology causing bilateral symptoms",
      "prematureClosure": "May stop thinking after confirming radiculopathy without considering the specific pattern of bilateral symptoms and neurogenic claudication",
      "availabilityBias": "Recent cases of disc herniation may make that diagnosis seem more likely than the actual diagnosis of spinal stenosis"
    },
    "coachPrompts": {
      "phase2": "Looking at this 62-year-old patient with bilateral leg pain, what questions would help you distinguish between different causes of neurogenic vs vascular claudication? What red flags do you need to rule out given the bilateral nature of her symptoms?",
      "phase5": "Now that you've found bilateral positive straight leg raises with S1 distribution findings, how does the bilateral nature of her symptoms and her age influence your differential diagnosis? What anatomical structure could cause this pattern of bilateral radiculopathy?",
      "finalDebrief": "This case illustrates how spinal stenosis can present similarly to disc herniation but with key differences - the bilateral symptoms, age of patient, and positional worsening with sitting are classic for central stenosis. How did the bilateral presentation help narrow your differential from your initial disc herniation consideration?"
    }
  }
};
