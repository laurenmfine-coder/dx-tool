
window.EMR_DATA = {
  "patient": {
    "name": "Dolores Eriksen",
    "patientHPI": "I woke up this morning and I can't see anything out of my left eye - it's like someone just turned off the lights on that side. It happened suddenly and completely, and I'm terrified because I've never had anything like this happen before.",
    "dob": "07/10/1976",
    "age": "50",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-310304",
    "language": "English",
    "race": "American Indian",
    "phone": "(630) 555-7172",
    "email": "dolores.eriksen@email.com",
    "address": "3063 Poplar Ave, Minneapolis, MN 55401",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Publix Pharmacy \u2014 Broward Blvd",
    "emergencyContact": {
      "name": "Priya Baker",
      "phone": "(317) 555-3658",
      "relationship": "Sibling"
    },
    "chiefComplaint": "I can't see out of my left eye Left eye \u2014 complete",
    "diagnosis": "Central Retinal Artery Occlusion (CRAO)"
  },
  "problems": [
    {
      "problem": "Central retinal artery occlusion \u2014 acute, 2 hours ago",
      "icd": "H34.11",
      "onset": "2024",
      "status": "Active",
      "notes": "Sudden painless vision loss. Cherry red spot. Within 4.5h treatment window."
    },
    {
      "problem": "Carotid stenosis \u2014 likely embolic source",
      "icd": "I65.21",
      "onset": "2024",
      "status": "Active",
      "notes": "Carotid bruit on exam. Embolic source most probable."
    },
    {
      "problem": "Stroke risk \u2014 10-15% at 90 days post-CRAO",
      "icd": "G45.9",
      "onset": "2024",
      "status": "Active",
      "notes": "CRAO is equivalent to TIA/minor stroke for 90-day cerebrovascular risk"
    }
  ],
  "medications": [
    {
      "name": "Aspirin 325mg loading dose \u2014 immediate",
      "sig": "Antiplatelet loading \u2014 give while awaiting ED transfer",
      "prescriber": "Dr. Chen OD",
      "start": "11/2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Ocular massage \u2014 digital IOP lowering",
      "sig": "Firm digital pressure over closed eyelid for 5-10 seconds, release, repeat \u2014 dislodge embolus",
      "prescriber": "Dr. Chen OD",
      "start": "11/2024",
      "refills": 0,
      "status": "Performed"
    },
    {
      "name": "IV tPA \u2014 if within 4.5 hour window (ED decision)",
      "sig": "Systemic thrombolysis \u2014 OD starts transfer to ED immediately. ED team makes tPA decision.",
      "prescriber": "ED Neurology",
      "start": "11/2024",
      "refills": 0,
      "status": "ED decision"
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
      "time": "06:31",
      "bp": "158/86",
      "hr": "78 (irregularly irregular)",
      "rr": "14",
      "temp": "36.9\u00b0C",
      "spo2": "98%",
      "pain": "/10",
      "bmi": "25",
      "weight": "75 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "I can't see out of my left eye Left eye \u2014 complete",
      "hpi": "Dolores Eriksen is a 50-year-old female presenting with i can't see out of my left eye left eye \u2014 complete. Past medical history includes Atrial fibrillation, Hypertension, Hyperlipidemia, Carotid stenosis. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Central Retinal Artery Occlusion (CRAO) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Fundoscopy + OCT Macula \u2014 Right Eye",
      "indication": "Acute painless vision loss",
      "findings": "Right eye: Diffuse inner retinal whitening (opacification) from ischemia. Cherry-red spot at fovea (intact choroidal perfusion through thin foveal tissue). Boxcar segmentation of blood column in arterioles. No visible emboli at disc. Left eye: Normal fundoscopy.",
      "impression": "Central retinal artery occlusion right eye \u2014 acute. Cherry-red spot is diagnostic. Refer to ED immediately for stroke workup and tPA consideration if within 4.5h window."
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
    "Father: stroke at 68",
    "Mother: MI at 72"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "30 pack-years, quit 5 years ago"
    ],
    [
      "Alcohol",
      "Occasional"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired engineer"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Dolores is visibly anxious and frightened about her sudden complete vision loss, speaking quickly and seeking frequent reassurance. She is very forthcoming with information as she desperately wants answers, but her anxiety sometimes makes her responses scattered. Her distress level is high as she fears this might be related to a stroke like her father had.",
    "interviewQuestions": [
      "Can you describe exactly what happened when you first noticed the vision loss this morning?",
      "Was the vision loss gradual or did it happen all at once?",
      "Do you have any pain in or around your left eye?",
      "Have you noticed any headaches, especially severe ones?",
      "Are you experiencing any weakness, numbness, or difficulty speaking?",
      "Have you had any recent changes in your vision before today?",
      "Do you see any flashing lights, floaters, or curtain-like shadows?",
      "Have you had any recent trauma to your head or eye?",
      "Are you having any nausea, vomiting, or dizziness?",
      "Have you been taking all your medications as prescribed?",
      "Have you had any recent changes in your heart rhythm or palpitations?",
      "Do you have any jaw pain or headaches when chewing?",
      "Have you experienced any recent weight loss or fatigue?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm just so worried about my eye and having trouble focusing on what you're asking.",
      "onset": "I woke up around 7 AM and when I opened my eyes, I immediately noticed I couldn't see anything out of my left eye. It was completely sudden - like someone flipped a switch off.",
      "character": "It's complete darkness in my left eye. Not blurry or dim - just nothing. Like that eye isn't even there anymore.",
      "location": "Just my left eye. My right eye is fine and I can see normally with it.",
      "severity": "This is a 10 out of 10 for how scared I am. I can't see anything at all from that eye, so functionally it's completely useless right now.",
      "aggravating": "Nothing makes it worse because it's already completely gone. Moving my eye around doesn't change anything.",
      "relieving": "Nothing helps. I tried closing and opening my eyes, rubbing it gently, but nothing brings the vision back.",
      "associated": "I don't have any eye pain, headache, or other symptoms. Just the complete vision loss.",
      "denies": "No eye pain, no headache, no weakness in my arms or legs, no trouble speaking, no nausea or vomiting.",
      "history": "I've never had anything like this happen before. My vision has been stable with just reading glasses.",
      "medications": "Apixaban; Metoprolol; Atorvastatin; Lisinopril",
      "allergies": "NKDA",
      "family": "My father had a stroke when he was 68, and my mother had a heart attack at 72. That's why I'm so scared this might be a stroke.",
      "social": "I'm a retired engineer, live with my wife. I smoked for many years but quit 5 years ago - about 30 pack-years total. I drink occasionally, no drugs."
    },
    "examManeuvers": [
      "Visual acuity testing both eyes",
      "Pupillary light reflex testing",
      "Fundoscopic examination",
      "Visual field testing by confrontation",
      "Extraocular movement testing",
      "Temporal artery palpation",
      "Carotid auscultation",
      "Blood pressure measurement",
      "Cardiac rhythm assessment",
      "Neurological screening examination"
    ],
    "examFindings": {
      "Visual acuity testing both eyes": "Right eye 20/30, left eye no light perception",
      "Pupillary light reflex testing": "Right pupil reactive, left pupil has relative afferent pupillary defect (Marcus Gunn pupil)",
      "Fundoscopic examination": "Left optic disc appears pale and swollen with cherry-red spot at macula, right fundus normal",
      "Visual field testing by confrontation": "Complete left eye visual field loss, right eye normal",
      "Extraocular movement testing": "Full range of motion both eyes, no diplopia",
      "Temporal artery palpation": "Temporal arteries soft, non-tender, pulsatile bilaterally",
      "Carotid auscultation": "Left carotid bruit present, right carotid clear",
      "Blood pressure measurement": "158/86 mmHg",
      "Cardiac rhythm assessment": "Irregularly irregular rhythm consistent with atrial fibrillation",
      "Neurological screening examination": "No focal motor or sensory deficits, speech clear, facial symmetry intact"
    },
    "ddxTargets": [
      "CRAO \u2014 acute, refer to ED for stroke protocol and tPA (correct)",
      "Branch retinal artery occlusion \u2014 sectoral loss, not total",
      "Anterior ischemic optic neuropathy (AION) \u2014 disc swelling, no cherry red spot",
      "Giant cell arteritis CRAO \u2014 elevated ESR/CRP would distinguish",
      "Central retinal vein occlusion \u2014 flame hemorrhages everywhere, very different picture",
      "Functional vision loss \u2014 cherry red spot is objective, cannot be fabricated"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on stroke given family history and cardiovascular risk factors, potentially missing the ophthalmologic emergency",
      "prematureClosure": "May stop at 'vision loss = stroke' without proper ophthalmologic examination and considering retinal causes",
      "availabilityBias": "Recent cases of stroke or more common causes of vision loss might overshadow the less common but time-critical retinal artery occlusion"
    },
    "coachPrompts": {
      "phase2": "You've identified several concerning possibilities for acute vision loss. As you prepare to interview Dolores, what key historical features would help you differentiate between retinal, optic nerve, and cerebrovascular causes? Consider her cardiovascular risk factors - how might they predispose to different mechanisms of vision loss?",
      "phase5": "Now that you've completed your history and physical, let's analyze your findings. You found complete monocular vision loss with a relative afferent pupillary defect and fundoscopic changes. What does this constellation of findings tell you about the anatomical location of the problem? How does the time course and her cardiovascular history fit with your leading diagnosis?",
      "finalDebrief": "This case highlights how cardiovascular risk factors like atrial fibrillation and carotid stenosis can lead to embolic central retinal artery occlusion - truly an 'eye stroke.' Notice how the complete monocular vision loss, RAPD, and fundoscopic findings pointed to retinal rather than cortical pathology. The key was recognizing this as a retinal emergency requiring immediate intervention, not just another stroke workup. What does this teach you about the importance of a focused ophthalmologic examination in acute vision loss?",
      "final": "Diagnosis: acute CRAO \u2014 OD role is immediate referral and bridge treatment. Key OD learning: (1) The OD's window is narrow: CRAO without treatment causes permanent vision loss from retinal infarction. Inner retina tolerates ischemia ~100 minutes. After 4 hours: central vision rarely recovers. The OD's actions in the first 5 minutes determine whether this patient has any chance of visual recovery. (2) In-office bridge measures: (a) Ocular massage \u2014 digital pressure alternating with release, aims to dislodge embolus distally. Lowers IOP transiently to improve perfusion gradient. Low evidence but no harm. (b) Anterior chamber paracentesis \u2014 rapidly lowers IOP (specialist skill; OD can refer immediately). (c) Aspirin 325mg \u2014 antiplatelet, minimal benefit for retinal recovery but starts stroke prevention. (3) Transfer protocol: CRAO = stroke of the eye. Call 911 or drive directly to nearest comprehensive stroke center \u2014 NOT urgent care, NOT ophthalmology clinic. The treating team is neurology. (4) Why systemic thrombolysis (tPA): same mechanism as ischemic stroke \u2014 clot in retinal artery (embolic). Evidence for IV tPA is limited but emerging \u2014 EAGLE study. Benefit most likely if central embolic occlusion within 4.5h. (5) The 90-day stroke risk is real: 10-15% within 90 days \u2014 highest in first 2 weeks. Carotid ultrasound, echo, ECG, and antiplatelet/statin are initiated at the stroke visit."
    }
  },
  "meta": {
    "diagnosis": "Central Retinal Artery Occlusion \u2014 Acute, Within Treatment Window, Urgent Stroke Protocol",
    "caseId": "crao"
  }
};
