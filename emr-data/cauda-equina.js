
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
    "pharmacy": "Walgreens \u2014 Pines Blvd",
    "emergencyContact": {
      "name": "Charles Lewis",
      "phone": "(619) 555-9698",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Back pain shooting down both legs Low back, radiating down both legs \u2014 back of thighs and into calves",
    "diagnosis": "Cauda Equina Syndrome"
  },
  "problems": [
    {
      "problem": "Cauda equina syndrome \u2014 L4-L5 disc herniation",
      "icd": "G83.4",
      "onset": "2024",
      "status": "Active",
      "notes": "Bilateral leg weakness, saddle anesthesia, urinary retention \u2014 CES until proven otherwise"
    },
    {
      "problem": "Urinary retention \u2014 neurogenic bladder from CES",
      "icd": "R33.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Bladder scan 620mL \u2014 Foley placed. Bladder dysfunction confirms cauda equina involvement."
    },
    {
      "problem": "Saddle anesthesia \u2014 bilateral perineal numbness",
      "icd": "R20.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Numbness inner thighs, perineum, perianal area \u2014 pathognomonic for cauda equina"
    }
  ],
  "medications": [
    {
      "name": "Foley catheter \u2014 urinary decompression",
      "sig": "Placed immediately \u2014 neurogenic urinary retention",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Dexamethasone 10mg IV x1 \u2014 spinal cord edema (controversial)",
      "sig": "Single dose \u2014 limited evidence but commonly used for acute cord/nerve compression",
      "prescriber": "Neurosurgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Morphine 4mg IV PRN \u2014 pain control",
      "sig": "IV PRN \u2014 severe radicular pain management",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN"
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
      "temp": "37.0\u00b0C",
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
      "cc": "Back pain shooting down both legs Low back, radiating down both legs \u2014 back of thighs and into calves",
      "hpi": "Frances Yamamoto is a 62-year-old female presenting with back pain shooting down both legs low back, radiating down both legs \u2014 back of thighs and into calves. Past medical history includes Lumbar disc herniation, Hypertension, Obesity. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Cauda Equina Syndrome \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "CES Workup",
      "results": [
        {
          "test": "WBC",
          "value": "9.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": ""
        },
        {
          "test": "ESR",
          "value": "18",
          "unit": "mm/hr",
          "ref": "0-20",
          "flag": ""
        },
        {
          "test": "CRP",
          "value": "0.8",
          "unit": "mg/dL",
          "ref": "<1.0",
          "flag": ""
        },
        {
          "test": "Glucose",
          "value": "104",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        },
        {
          "test": "Bladder scan",
          "value": "620",
          "unit": "mL",
          "ref": "<300",
          "flag": "H"
        },
        {
          "test": "PSA (male patient, 52yo)",
          "value": "1.8",
          "unit": "ng/mL",
          "ref": "<4.0",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "MRI Lumbar Spine Without Contrast \u2014 EMERGENT",
      "indication": "Bilateral leg weakness, saddle anesthesia, urinary retention",
      "findings": "L4-L5 level: large central disc herniation with massive extrusion \u2014 disc material occupies >75% of spinal canal diameter. Severe compression of cauda equina nerve roots. No epidural abscess or tumor. Disc material is non-calcified (acute extrusion). Conus medullaris at T12-L1 level (normal).",
      "impression": "Large central L4-L5 disc herniation causing cauda equina syndrome. Emergency surgical decompression indicated \u2014 outcome depends on time to decompression. No malignant or infectious cause."
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
      "Warehouse supervisor \u2014 on modified duty for back pain"
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
      "Cauda equina syndrome \u2014 emergency discectomy (correct)",
      "Conus medullaris syndrome \u2014 higher level, bilateral, different pattern (conus at T12-L1, normal)",
      "Spinal epidural abscess \u2014 fever, elevated inflammatory markers (absent)",
      "Malignant cord compression \u2014 ESR/CRP normal, no cancer history",
      "Bilateral lumbar radiculopathy \u2014 could explain leg pain but NOT bladder and saddle anesthesia",
      "Aortic dissection causing spinal ischemia \u2014 no tearing pain, dissection not on imaging"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on previous diagnosis of lumbar disc herniation and not considering spinal stenosis as the primary pathology causing bilateral symptoms",
      "prematureClosure": "May stop thinking after confirming radiculopathy without considering the specific pattern of bilateral symptoms and neurogenic claudication",
      "availabilityBias": "Recent cases of disc herniation may make that diagnosis seem more likely than the actual diagnosis of spinal stenosis"
    },
    "coachPrompts": {
      "phase2": "Looking at this 62-year-old patient with bilateral leg pain, what questions would help you distinguish between different causes of neurogenic vs vascular claudication? What red flags do you need to rule out given the bilateral nature of her symptoms?",
      "phase5": "Now that you've found bilateral positive straight leg raises with S1 distribution findings, how does the bilateral nature of her symptoms and her age influence your differential diagnosis? What anatomical structure could cause this pattern of bilateral radiculopathy?",
      "finalDebrief": "This case illustrates how spinal stenosis can present similarly to disc herniation but with key differences - the bilateral symptoms, age of patient, and positional worsening with sitting are classic for central stenosis. How did the bilateral presentation help narrow your differential from your initial disc herniation consideration?",
      "final": "Diagnosis: cauda equina syndrome \u2014 surgical emergency. Key learning: (1) CES red flags (all must be assessed in any back pain): saddle anesthesia (inner thighs/perineum/perianal), bowel or bladder dysfunction (retention or incontinence), bilateral leg weakness or neurological deficit. Any one of these = emergency MRI NOW. (2) Surgical timing: outcomes data shows best recovery when decompressed within 48 hours of symptom onset, ideally within 24 hours. EVERY HOUR matters \u2014 delayed surgery = permanent bowel/bladder dysfunction and leg weakness. This is a true surgical emergency. (3) Saddle anesthesia is pathognomonic: the sacral nerve roots (S2-S4) supplying the perineum travel through the lowest portion of the cauda equina \u2014 compressed first by central disc herniation. This finding alone in a back pain patient = emergent MRI regardless of other symptoms. (4) Bladder retention vs incontinence: retention is more common in CES (detrusor underactivity from S2-S4 damage). Incontinence suggests overflow or more complete injury. Either = emergent evaluation. (5) Informed consent for surgery: explain prognosis honestly. If complete CES (absent bladder/bowel/saddle sensation) for >48h = high risk of permanent deficit even with surgery. Early incomplete CES = 70-80% recovery of bladder function with prompt surgery."
    }
  },
  "meta": {
    "diagnosis": "Cauda Equina Syndrome \u2014 L4-L5 Large Disc Herniation, Emergency Surgery Within 48 Hours",
    "caseId": "cauda-equina"
  }
};
