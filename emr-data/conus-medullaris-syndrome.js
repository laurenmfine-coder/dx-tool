
window.EMR_DATA = {
  "patient": {
    "name": "Wilbert Jean-Louis",
    "patientHPI": "My back pain has been getting much worse lately, going from manageable to an 8 out of 10, and I'm really worried because I know my cancer has spread to my bones. The pain is constant now and different from before - it's this deep, gnawing ache that keeps me up at night. My last blood test showed my numbers are going up again even though I'm taking all my medications.",
    "dob": "05/12/1970",
    "age": 55,
    "sex": "Male",
    "mrn": "RDX-2025-85613",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Rachel Toussaint, MD",
    "pharmacy": "CVS Pharmacy \u2014 601 N State Rd 7, Hollywood, FL",
    "language": "English, Haitian Creole",
    "race": "Black or African American",
    "address": "4935 Clover St, Baltimore, MD 21214",
    "phone": "(954) 555-9134",
    "email": "w.jeanlouis70@email.com",
    "emergencyContact": {
      "name": "Claudette Jean-Louis (Wife)",
      "phone": "(954) 555-9148"
    }
  },
  "problems": [
    {
      "problem": "Metastatic epidural cord compression \u2014 oncological emergency",
      "icd": "G99.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Barbara Chen, 62F \u2014 metastatic breast cancer. Acute low back pain, perianal numbness, urinary retention, bilateral leg weakness. MRI: T12-L1 epidural metastasis compressing conus medullaris."
    },
    {
      "problem": "Conus medullaris \u2014 mixed UMN/LMN features",
      "icd": "G99.2",
      "onset": "2024",
      "status": "Active",
      "notes": "T12-L1 injury = mixed UMN + LMN: hyperreflexia + flaccid paralysis, saddle anesthesia, bladder/bowel dysfunction. Distinguishes from cauda equina (pure LMN) and thoracic cord (pure UMN)."
    },
    {
      "problem": "Urinary retention \u2014 bladder from conus",
      "icd": "R33.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Conus controls bladder via S2-S4. Detrusor areflexia \u2192 urinary retention. Immediate catheterization."
    }
  ],
  "medications": [
    {
      "name": "Dexamethasone 10mg IV then 4mg q6h \u2014 IMMEDIATE",
      "sig": "Reduces spinal cord edema. Start immediately on clinical suspicion \u2014 before MRI if deficits present. Every hour of untreated compression = permanent neurological loss.",
      "prescriber": "Oncology/Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "Emergent spinal irradiation \u2014 within 24h",
      "sig": "Radiation first-line for most metastatic cord compression. Start within 24 hours. Surgery first for radioresistant tumors or mechanical instability.",
      "prescriber": "Radiation Oncology",
      "start": "2024",
      "refills": 0,
      "status": "URGENT"
    },
    {
      "name": "Urinary catheterization \u2014 immediate",
      "sig": "Foley for urinary retention. Prevent bladder overdistension injury.",
      "prescriber": "Oncology",
      "start": "2024",
      "refills": 0,
      "status": "Done \u2014 450mL residual"
    }
  ],
  "allergies": [
    {
      "allergen": "Morphine",
      "type": "Drug",
      "reaction": "Severe pruritus, urticaria",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/02/2026",
      "bp": "148/92",
      "hr": 88,
      "rr": 18,
      "temp": "98.8\u00b0F",
      "spo2": "96%",
      "wt": "172 lbs",
      "ht": "5'10\"",
      "bmi": 24.7,
      "setting": "ED"
    },
    {
      "date": "12/15/2025",
      "bp": "134/82",
      "hr": 78,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "176 lbs",
      "ht": "5'10\"",
      "bmi": 25.3,
      "setting": "Specialist"
    },
    {
      "date": "09/08/2025",
      "bp": "130/80",
      "hr": 76,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "180 lbs",
      "ht": "5'10\"",
      "bmi": 25.8,
      "setting": "Specialist"
    },
    {
      "date": "06/10/2025",
      "bp": "132/82",
      "hr": 74,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "184 lbs",
      "ht": "5'10\"",
      "bmi": 26.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/15/2025",
      "type": "Specialist",
      "provider": "Dr. Anil Patel, MD (Oncology)",
      "cc": "Prostate cancer follow-up; rising PSA; pain management",
      "hpi": "55-year-old male with metastatic prostate cancer (Gleason 8, Stage IV) presenting for follow-up. PSA rising to 24.6 from 12.8 three months ago despite abiraterone + prednisone (added 01/2025 after progression on ADT + docetaxel). CT shows stable bone lesions. Reports worsening lower back pain (8/10) requiring increased breakthrough oxycodone \u2014 now using 3-4 doses/day vs prior 1-2. Pain radiates bilaterally to buttocks. No new neurologic symptoms currently. Weight down 4 lbs. Appetite decreased. Fatigue worsening.",
      "exam": "General: Cachectic-appearing male, chronically ill. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT. Spine: Tenderness L1-L3 midline. Neuro: A&O x3. Motor: 5/5 all extremities. Sensation: Intact. Rectal: Prostate indurated, non-tender.",
      "assessment": "1. Metastatic castration-resistant prostate cancer \u2014 PSA progression on abiraterone\n2. Osseous metastases \u2014 stable imaging; worsening pain\n3. Chronic cancer pain \u2014 escalating opioid needs\n4. Weight loss \u2014 cancer-related cachexia",
      "plan": "1. Switch to enzalutamide 160mg daily; discontinue abiraterone\n2. Continue denosumab for bone protection\n3. Increase oxycodone ER to 20mg BID (from 15mg)\n4. Palliative radiation to L1 considered if pain not controlled\n5. Nutrition consult; Megace for appetite\n6. Discuss goals of care at next visit\n7. Restaging CT and bone scan in 3 months\n8. Monitor for spinal cord compression \u2014 educate on warning signs"
    },
    {
      "id": "V002",
      "date": "09/08/2025",
      "type": "Specialist",
      "provider": "Dr. Anil Patel, MD (Oncology)",
      "cc": "Prostate cancer follow-up; treatment response",
      "hpi": "55-year-old male for follow-up after starting abiraterone in 01/2025. PSA decreased initially to 8.4 but now rising to 12.8. Bone scan shows no new lesions. Pain managed at 5/10 with current regimen. Tolerating abiraterone without significant side effects.",
      "exam": "General: Thin but NAD. Spine: Mild midline tenderness L1. Neuro: Grossly intact.",
      "assessment": "1. Metastatic prostate cancer \u2014 PSA nadir 8.4, now rising\n2. Pain \u2014 controlled currently",
      "plan": "1. Continue current regimen; recheck PSA in 3 months\n2. If PSA continues rising, consider switch to enzalutamide\n3. Continue denosumab\n4. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Metastatic Cord Compression",
      "results": [
        {
          "test": "Lower extremity strength",
          "value": "3/5 bilateral hip flexors; 2/5 ankle dorsiflexion",
          "unit": "",
          "ref": "5/5",
          "flag": "H"
        },
        {
          "test": "Perianal sensation",
          "value": "Reduced \u2014 saddle anesthesia",
          "unit": "",
          "ref": "Intact",
          "flag": "H"
        },
        {
          "test": "Bulbocavernosus reflex",
          "value": "Absent (conus S3-4)",
          "unit": "",
          "ref": "Present",
          "flag": "H"
        },
        {
          "test": "Calcium",
          "value": "11.8",
          "unit": "mg/dL",
          "ref": "8.5-10.5",
          "flag": "H"
        },
        {
          "test": "CEA",
          "value": "68",
          "unit": "ng/mL",
          "ref": "<3",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "MRI Thoracolumbar Spine with Gadolinium",
      "findings": "T12-L1 epidural metastasis with cord compression at conus medullaris. Pathological T12 fracture. Signal change within conus.",
      "impression": "Metastatic epidural spinal cord compression at conus. Dexamethasone + radiation oncology urgently."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/10/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-318",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "11/02/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-802",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-420",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "01/2024",
      "site": "Left deltoid IM",
      "lot": "SX24-042",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "03/2024",
      "site": "Left deltoid IM",
      "lot": "SX24-175",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Prostate cancer (diagnosed age 65), HTN, deceased at 74",
    "Mother: T2DM, HTN, alive at 82",
    "Brother: Prostate cancer (diagnosed age 58, treated with prostatectomy), alive at 60",
    "Sister: Breast cancer (diagnosed age 52), alive at 54"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Former warehouse supervisor; on disability since 2024"
    ],
    [
      "Marital",
      "Married 28 years; wife Claudette, age 53"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Rare; stopped entirely since diagnosis"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Minimal \u2014 limited by pain and fatigue; short walks in neighborhood"
    ],
    [
      "Housing",
      "Apartment with wife; first floor"
    ],
    [
      "Safety",
      "Denies IPV; fall risk \u2014 uses cane for ambulation"
    ],
    [
      "Advance Directive",
      "POLST on file \u2014 Full Code transitioning to DNR discussion; HCP: wife Claudette"
    ]
  ],
  "meta": {
    "caseId": "conus-medullaris-syndrome",
    "diagnosis": "Conus Medullaris Syndrome \u2014 Metastatic Epidural Spinal Cord Compression",
    "acuity": 2,
    "presentation": "Back Pain",
    "category": "oncologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Wilbert appears anxious and distressed, frequently shifting position trying to find comfort from his severe back pain. He is very forthcoming about his symptoms and medical history, demonstrating good insight into his oncologic condition and expressing genuine fear that his cancer is progressing.",
    "interviewQuestions": [
      "Can you describe when this worsening back pain started?",
      "What does the pain feel like - sharp, dull, burning?",
      "Where exactly is the pain located and does it travel anywhere?",
      "On a scale of 1-10, how severe is your pain right now?",
      "What makes your back pain worse?",
      "What helps relieve the pain, if anything?",
      "Have you noticed any weakness in your legs?",
      "Any numbness or tingling in your legs or groin area?",
      "Have you had any problems with urination or bowel movements?",
      "Any sexual dysfunction or problems with erections?",
      "Have you had any falls or difficulty walking?",
      "When was your last oncology appointment and PSA level?",
      "What medications are you currently taking?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? The pain is making it hard for me to concentrate right now.",
      "onset": "The pain really started getting much worse about 2-3 weeks ago. It went from my usual manageable bone pain to this intense, constant agony that nothing seems to help.",
      "character": "It's this deep, gnawing, burning pain that feels like it's coming from inside my bones. It's different from my usual cancer pain - much more intense and constant.",
      "location": "The worst pain is in my lower back, right at the base of my spine. Sometimes it shoots down into my buttocks and the back of both thighs.",
      "severity": "Right now it's an 8 out of 10, maybe even a 9. I can barely sleep and I'm having trouble walking. Even my strongest pain pills aren't helping much anymore.",
      "aggravating": "Any movement makes it worse - sitting, standing, walking, even lying down. Coughing or sneezing is excruciating. I feel like I can't get comfortable in any position.",
      "relieving": "Honestly, nothing really helps anymore. My oxycodone takes the edge off slightly, but the pain is still there. Heat pads don't help like they used to.",
      "associated": "I've been having some weakness in my legs, especially when I try to stand up. My wife noticed I've been walking funny. I've also had some numbness in my groin area and it's been harder to start urinating.",
      "denies": "I haven't had any fever, but I have been more tired than usual. No chest pain or shortness of breath beyond what I normally have.",
      "history": "I've had bone pain since my cancer spread to my spine and pelvis last year, but it was always manageable with my medications. This is completely different - much more severe.",
      "medications": "Leuprolide 22.5mg IM q3months; Abiraterone 1000mg daily; Prednisone 5mg BID; Denosumab 120mg SubQ q4weeks; Oxycodone ER 20mg BID; Oxycodone IR 5mg q4h PRN; Metformin 500mg BID; Amlodipine 5mg daily",
      "allergies": "Morphine",
      "family": "My father and brother both had prostate cancer. My dad was diagnosed at 65 and died at 74, though not directly from the cancer. My younger brother was diagnosed at 58 but caught it early and had surgery.",
      "social": "I used to be a warehouse supervisor but went on disability this year because of my cancer. I'm married to Claudette for 28 years. I never smoked and stopped drinking completely when I was diagnosed. No drug use."
    },
    "examManeuvers": [
      "Lumbar spine inspection and palpation",
      "Straight leg raise test bilateral",
      "Lower extremity motor strength testing (hip flexors, knee extensors, ankle dorsiflexion/plantarflexion)",
      "Lower extremity sensory examination",
      "Deep tendon reflexes (patellar and Achilles)",
      "Perianal sensation testing",
      "Anal sphincter tone assessment",
      "Bulbocavernosus reflex testing",
      "Gait assessment",
      "Romberg test"
    ],
    "examFindings": {
      "Lumbar spine inspection and palpation": "Tenderness to palpation over L1-L3 spinous processes with mild paraspinal muscle spasm. No visible deformity or swelling.",
      "Straight leg raise test bilateral": "Positive bilaterally at 45 degrees, reproducing back and posterior thigh pain.",
      "Lower extremity motor strength testing (hip flexors, knee extensors, ankle dorsiflexion/plantarflexion)": "Hip flexors 4/5 bilaterally, knee extensors 4/5 bilaterally, ankle dorsiflexion 3/5 bilaterally, plantarflexion 4/5 bilaterally.",
      "Lower extremity sensory examination": "Decreased sensation to light touch and pinprick in L2-S2 distribution bilaterally, particularly in saddle distribution.",
      "Deep tendon reflexes (patellar and Achilles)": "Patellar reflexes 1+ bilaterally, Achilles reflexes absent bilaterally.",
      "Perianal sensation testing": "Markedly diminished perianal sensation in saddle distribution.",
      "Anal sphincter tone assessment": "Decreased anal sphincter tone on digital rectal examination.",
      "Bulbocavernosus reflex testing": "Absent bulbocavernosus reflex.",
      "Gait assessment": "Unsteady gait with bilateral lower extremity weakness, requires assistance for ambulation.",
      "Romberg test": "Negative for cerebellar dysfunction, but patient has difficulty maintaining balance due to weakness."
    },
    "ddxTargets": [
      "Metastatic epidural cord compression at conus (correct)",
      "Cauda equina syndrome \u2014 L2 and below; pure LMN; different level",
      "Transverse myelitis \u2014 inflammatory; CSF pleocytosis; no mass",
      "Epidural abscess \u2014 fever; elevated inflammatory markers; drainage required"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'chronic cancer pain progression' and missing acute neurologic emergency requiring immediate intervention",
      "prematureClosure": "Risk of stopping evaluation at 'worsening bone pain from known metastases' without recognizing cord compression syndrome",
      "availabilityBias": "Recent cases of mechanical back pain may lead to underestimating oncologic emergency in known cancer patient"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given this patient's oncologic history and the acute change in his pain pattern, what specific neurologic emergencies should you be most concerned about? What key symptoms would help you differentiate between conus medullaris and cauda equina syndromes?",
      "phase5": "Excellent history and physical exam. You've identified several concerning neurologic findings including saddle anesthesia, decreased sphincter tone, and bilateral lower extremity weakness. How do these findings help narrow your differential? What is the most likely anatomical location of this patient's pathology based on the pattern of deficits?",
      "finalDebrief": "This case demonstrates the importance of recognizing conus medullaris syndrome as an oncologic emergency. The key clinical clues were the acute worsening of pain in a patient with known spinal metastases, combined with saddle anesthesia, bowel/bladder dysfunction, and bilateral lower extremity weakness. Early recognition and emergent MRI with immediate neurosurgical consultation are critical for optimal outcomes.",
      "final": "Diagnosis: metastatic epidural cord compression at conus medullaris. Key learning: (1) Spinal cord level localization: cervical/thoracic = UMN (spasticity, hyperreflexia, upgoing plantar). Conus medullaris (T12-L1) = MIXED UMN + LMN + saddle anesthesia + bladder/bowel. Cauda equina (below L1) = pure LMN, flaccid, areflexic, saddle anesthesia. (2) This is an oncological emergency: dexamethasone immediately (before MRI if deficits present), then emergent MRI, then radiation. Every hour = more permanent loss. (3) MRI entire spine: 30% of patients have multiple compression sites. Always image full spine. (4) Dexamethasone dose: 10mg IV bolus then 4mg q6h. Higher doses cause more side effects without benefit. (5) Surgery indication: radioresistant tumor, mechanical instability, unknown primary needing tissue diagnosis, neurological deterioration during radiation. Surgery + radiation superior to radiation alone (ASTRO trial)."
    }
  }
};
