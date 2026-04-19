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
},
  "guided": {
    "supported": true,
    "patientPersona": "Frances appears uncomfortable and frustrated, frequently shifting position in her chair and occasionally grimacing when describing her pain. She is very forthcoming about her symptoms, clearly motivated to get help, and expresses significant concern that her back condition is worsening and affecting her ability to work.",
    "interviewQuestions": [
        "When did this radiating leg pain first start, and how has it progressed?",
        "Can you describe the quality of the pain - is it sharp, burning, aching, or electric-like?",
        "Does the pain radiate all the way down to your feet or stop at your calves?",
        "On a scale of 1-10, how would you rate your pain right now?",
        "What makes the pain worse - walking, sitting, standing, coughing, or bending?",
        "What positions or activities provide relief from the pain?",
        "Have you noticed any numbness, tingling, or weakness in your legs?",
        "Are you having any bowel or bladder problems?",
        "How does this compare to your previous back pain episodes?",
        "Have your current medications been helping with this new pain?",
        "Have you had any recent falls, injuries, or heavy lifting?",
        "Are you able to perform your usual work duties and daily activities?",
        "Have you noticed the pain being worse in one leg compared to the other?"
    ],
    "patientResponses": {
        "default": "I'm not sure I understand what you're asking. Can you explain that differently? I just know my back and legs are really hurting.",
        "onset": "This leg pain started about 5 days ago and has been getting progressively worse. It started as just my usual lower back ache, but then the shooting pain down my legs began and hasn't let up.",
        "character": "It's a sharp, shooting pain that feels like electricity going down the back of both my legs. Sometimes it's also a deep aching pain in my lower back.",
        "location": "The pain starts in my lower back, right in the center, and shoots down the back of both thighs and into my calves. The right leg seems a bit worse than the left.",
        "severity": "Right now it's about an 8 out of 10. I can barely concentrate at work, and I'm having trouble sleeping because I can't find a comfortable position.",
        "aggravating": "Sitting makes it much worse, especially at my desk at work. Coughing or sneezing sends a sharp pain down both legs. Bending forward is almost impossible.",
        "relieving": "Walking around slowly seems to help a little bit. Lying flat on my back with my knees bent gives me some relief, but not much. My usual medications aren't really touching this pain.",
        "associated": "I've noticed some tingling in both feet, especially when I first wake up. My legs feel a bit weak when I'm walking, like they might give out on me.",
        "denies": "No bowel or bladder problems, no fever, no recent falls or injuries. I haven't had any numbness in my groin area.",
        "history": "I've had back pain on and off for years from my disc herniation, but it's never gone down into my legs like this before. Usually it's just lower back pain that gets better with rest and my medications.",
        "medications": "Ibuprofen; Cyclobenzaprine; Hydrochlorothiazide",
        "allergies": "Morphine",
        "family": "My father had degenerative disc disease and eventually needed back surgery. He had similar leg pain problems in his later years.",
        "social": "I work as a warehouse supervisor but I'm on modified duty because of my back. I've been smoking for about 20 years, maybe a pack and a half a day. I have a couple beers most evenings to help with the pain and stress."
    },
    "examManeuvers": [
        "Straight leg raise test (bilateral)",
        "Crossed straight leg raise test",
        "Lumbar spine range of motion assessment",
        "Lower extremity strength testing (hip flexion, knee extension, ankle dorsiflexion/plantarflexion)",
        "Lower extremity deep tendon reflexes (patellar and Achilles)",
        "Sensory examination of lower extremities (L4, L5, S1 dermatomes)",
        "Lumbar spine palpation for tenderness and muscle spasm",
        "Femoral nerve stretch test",
        "Assessment of gait and stance",
        "Rectal examination for sphincter tone"
    ],
    "examFindings": {
        "Straight leg raise test (bilateral)": "Positive bilaterally at 30-40 degrees, reproducing radiating leg pain down posterior thighs to calves",
        "Crossed straight leg raise test": "Positive - raising left leg reproduces pain in right leg and vice versa",
        "Lumbar spine range of motion assessment": "Severely limited flexion and extension due to pain, lateral bending restricted bilaterally",
        "Lower extremity strength testing (hip flexion, knee extension, ankle dorsiflexion/plantarflexion)": "Mild weakness (4/5) in ankle dorsiflexion bilaterally, other muscle groups 5/5",
        "Lower extremity deep tendon reflexes (patellar and Achilles)": "Diminished Achilles reflexes bilaterally, patellar reflexes normal",
        "Sensory examination of lower extremities (L4, L5, S1 dermatomes)": "Decreased sensation to light touch in L5 distribution bilaterally (lateral legs and dorsal feet)",
        "Lumbar spine palpation for tenderness and muscle spasm": "Significant tenderness over L4-L5 region with bilateral paravertebral muscle spasm",
        "Femoral nerve stretch test": "Negative bilaterally",
        "Assessment of gait and stance": "Antalgic gait with forward-leaning posture, difficulty with heel walking",
        "Rectal examination for sphincter tone": "Normal sphincter tone, no saddle anesthesia"
    },
    "ddxTargets": [
        "Central lumbar spinal stenosis (correct diagnosis)",
        "Lumbar disc herniation with bilateral radiculopathy",
        "Cauda equina syndrome",
        "Peripheral arterial disease with claudication",
        "Epidural abscess or malignancy",
        "Piriformis syndrome",
        "Diabetic peripheral neuropathy"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on patient's known history of lumbar disc herniation and assuming this is simply worsening disc disease rather than considering spinal stenosis",
        "prematureClosure": "Risk of stopping evaluation after finding positive straight leg raises and assuming simple radiculopathy without considering bilateral nature and central stenosis",
        "availabilityBias": "Risk of focusing on more commonly seen unilateral disc herniation rather than recognizing the classic bilateral neurogenic claudication pattern of spinal stenosis"
    },
    "coachPrompts": {
        "phase2": "Good differential diagnosis list. I notice you included several spine-related conditions. Before you interview the patient, think about what specific historical features would help you distinguish between central spinal stenosis and lateral disc herniation. Also consider what red flag symptoms you absolutely need to rule out given the bilateral nature of her symptoms.",
        "phase5": "Excellent work on the history and physical exam. You've identified bilateral radicular symptoms with positive straight leg raises and some neurologic deficits. Now consider the pattern of her symptoms - bilateral leg pain that's worse with sitting and forward flexion. How does this clinical picture help you narrow down between your differential diagnoses? What does the bilateral nature and specific aggravating factors suggest?",
        "finalDebrief": "This case illustrates how central spinal stenosis can present similarly to disc herniation but with key distinguishing features. The bilateral nature of symptoms, pain worse with sitting/forward flexion, positive crossed straight leg raise, and the patient's demographic profile all pointed toward central stenosis rather than simple disc herniation. Remember that stenosis often develops in patients with pre-existing disc disease, so the history of disc herniation was actually a risk factor rather than a red herring."
    }
}
};
