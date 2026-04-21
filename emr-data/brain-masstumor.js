
window.EMR_DATA = {
  "patient": {
    "name": "Eleanor Whitfield",
    "patientHPI": "For the past three months, I've been waking up every morning with these terrible headaches that feel like pressure all over my head. They're worst when I first get up, and I often feel sick to my stomach too. I've never had headaches like this before - they're really wearing me down.",
    "dob": "05/12/1947",
    "age": 77,
    "sex": "Female",
    "mrn": "RDX-2025-41782",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B with Aetna Supplement",
    "pcp": "Dr. Kenneth Rhodes, MD",
    "pharmacy": "Publix Pharmacy \u2014 1500 N Pine Island Rd, Plantation, FL",
    "language": "English",
    "race": "White",
    "address": "7445 N Western Ave, Memphis, TN 38104",
    "phone": "(954) 555-2094",
    "email": "e.whitfield47@email.com",
    "emergencyContact": {
      "name": "Thomas Whitfield (Son)",
      "phone": "(954) 555-2130"
    }
  },
  "problems": [
    {
      "problem": "Brain metastasis \u2014 right parietal lobe, metastatic breast cancer",
      "icd": "C79.31",
      "onset": "2024",
      "status": "Active",
      "notes": "Susan Chen, 52F \u2014 known HER2-positive breast cancer stage III, completed chemotherapy 18 months ago. New progressive right parietal headache, left arm numbness, visual changes. MRI: 3.2cm enhancing mass right parietal lobe with significant edema."
    },
    {
      "problem": "Vasogenic edema \u2014 significant mass effect",
      "icd": "G93.6",
      "onset": "2024",
      "status": "Active",
      "notes": "Large surrounding edema causing midline shift 7mm. Steroid therapy is the most effective immediate intervention for vasogenic edema."
    },
    {
      "problem": "Seizure risk \u2014 cortical location",
      "icd": "G40.909",
      "onset": "2024",
      "status": "Active",
      "notes": "Parietal cortex involvement. Prophylactic antiepileptic consideration."
    }
  ],
  "medications": [
    {
      "name": "Dexamethasone 10mg IV loading then 4mg q6h",
      "sig": "Most effective treatment for vasogenic edema from brain metastasis. Improves symptoms within 24-48 hours. Taper after definitive treatment (radiation/surgery).",
      "prescriber": "Neurosurgery/Oncology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Stereotactic radiosurgery (SRS) \u2014 Gamma Knife/CyberKnife",
      "sig": "1-3 brain metastases, good PS, controlled systemic disease \u2192 SRS. Single fraction high-dose radiation. Preserves cognition vs WBRT.",
      "prescriber": "Radiation Oncology",
      "start": "2024",
      "refills": 0,
      "status": "Planned"
    },
    {
      "name": "Levetiracetam 500mg BID \u2014 antiepileptic prophylaxis",
      "sig": "Cortical metastasis \u2192 seizure risk. Levetiracetam preferred (no CYP450 interactions with chemotherapy).",
      "prescriber": "Neurology/Oncology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "type": "Drug",
      "reaction": "Rash and facial swelling",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/08/2025",
      "bp": "148/86",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "142 lbs",
      "ht": "5'4\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    },
    {
      "date": "07/10/2024",
      "bp": "132/78",
      "hr": 68,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "146 lbs",
      "ht": "5'4\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    },
    {
      "date": "01/15/2024",
      "bp": "130/76",
      "hr": 70,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "148 lbs",
      "ht": "5'4\"",
      "bmi": 25.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Kenneth Rhodes, MD",
      "cc": "Worsening headaches x 3 months; unintentional weight loss; new right-hand weakness",
      "hpi": "77-year-old female with history of breast cancer (Stage IIA, left mastectomy 2017, completed adjuvant therapy 2022, NED on surveillance) presenting with progressive morning headaches x 3 months. Headaches are worst upon waking, described as pressure-like, diffuse, associated with nausea. Initially intermittent but now daily. Acetaminophen provides partial relief. Son reports patient has been 'not herself' \u2014 word-finding difficulty, forgetting appointments, new right-hand clumsiness when writing. Unintentional 4 lb weight loss over 3 months. No seizures. No visual changes.",
      "exam": "General: Thin elderly female, appears fatigued. Neuro: A&O x3 but slow responses. Mild right pronator drift. Grip strength 4/5 right, 5/5 left. Difficulty with serial 7s. Word-finding pauses. Gait: Mildly unsteady. CN II-XII grossly intact. DTRs 3+ bilateral upper extremities. Fundoscopic: Bilateral papilledema.",
      "assessment": "1. Progressive headaches with papilledema, right-sided weakness, and cognitive decline \u2014 HIGHLY CONCERNING for intracranial mass lesion\n2. History of breast cancer \u2014 brain metastasis must be ruled out urgently\n3. Unintentional weight loss \u2014 4 lbs in 3 months",
      "plan": "1. URGENT MRI brain with and without contrast \u2014 ordered STAT\n2. If mass identified \u2192 URGENT neurosurgery and oncology referral\n3. Dexamethasone 4mg QID started today for vasogenic edema/elevated ICP\n4. Seizure precautions reviewed with family\n5. Hold further workup pending MRI results\n6. Son present \u2014 understands urgency"
    },
    {
      "id": "V002",
      "date": "07/10/2024",
      "type": "Specialist",
      "provider": "Dr. Patricia Grant, MD (Oncology)",
      "cc": "Annual breast cancer surveillance \u2014 7 years post-diagnosis",
      "hpi": "76-year-old female with ER+/PR+/HER2- Stage IIA left breast cancer (mastectomy 2017, TC x4, radiation, tamoxifen x 5 years completed 2022) for annual surveillance. No new symptoms. No breast complaints. Mammogram of right breast WNL. Tumor markers CEA and CA 27-29 WNL. No bone pain, no cough, no headaches at that time. Clinically NED.",
      "exam": "General: NAD. Chest wall: Left mastectomy site healed, no nodules. Right breast: No masses. Axillae: No lymphadenopathy. Neuro: Grossly intact.",
      "assessment": "1. Breast cancer surveillance \u2014 NED at 7 years\n2. Continue annual surveillance",
      "plan": "1. Annual mammogram right breast\n2. Tumor markers in 6 months\n3. Continue denosumab for osteoporosis (cancer treatment-related)\n4. RTC 1 year"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Brain Metastasis Workup",
      "results": [
        {
          "test": "HER2 status",
          "value": "3+ (positive) \u2014 IHC",
          "unit": "",
          "ref": "0-1+ = negative",
          "flag": "H"
        },
        {
          "test": "CT chest/abdomen/pelvis",
          "value": "No new systemic metastases \u2014 stable primary site",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "CEA",
          "value": "28",
          "unit": "ng/mL",
          "ref": "<3",
          "flag": "H"
        },
        {
          "test": "Performance status (ECOG)",
          "value": "1 \u2014 ambulatory, restricted strenuous activity",
          "unit": "",
          "ref": "0 = fully active",
          "flag": ""
        },
        {
          "test": "Neurological exam \u2014 left arm",
          "value": "Reduced cortical sensation; mild left arm weakness 4/5",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "MRI Brain with and without Contrast",
      "findings": "3.2cm enhancing mass right parietal lobe with surrounding vasogenic edema. Midline shift 7mm. No leptomeningeal enhancement. No other enhancing lesions.",
      "impression": "Solitary brain metastasis, right parietal lobe. Consistent with known breast cancer primary. Neurosurgical and radiation oncology consultation."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose Quadrivalent)",
      "date": "10/01/2024",
      "site": "Right deltoid IM",
      "lot": "FL2024-HD288",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-738",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Pneumococcal (PCV20 \u2014 Prevnar 20)",
      "date": "2023",
      "site": "Right deltoid IM",
      "lot": "\u2014",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "2020",
      "site": "Right deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2018",
      "site": "Right deltoid IM",
      "lot": "\u2014",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Mother: Breast cancer (age 64), deceased at 78 (CHF)",
    "Father: Lung cancer, deceased at 70",
    "Sister: Breast cancer (age 58), alive at 72 \u2014 BRCA negative",
    "Daughter: Healthy, age 50 \u2014 BRCA testing negative"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired high school English teacher"
    ],
    [
      "Marital",
      "Widowed \u2014 husband deceased 2019 (MI)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Rare \u2014 glass of wine at holidays"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Daily walks with neighbor; book club; active at church"
    ],
    [
      "Housing",
      "Lives alone in condo; son lives 10 minutes away; checks on her daily"
    ],
    [
      "Safety",
      "Grab bars in bathroom; no throw rugs; medical alert pendant; drives (son concerned about recent near-misses)"
    ],
    [
      "Advance Directive",
      "Yes \u2014 healthcare proxy: son Thomas Whitfield; full code"
    ]
  ],
  "meta": {
    "caseId": "brain-masstumor",
    "diagnosis": "Brain Mass \u2014 Metastatic Breast Cancer",
    "acuity": 2,
    "presentation": "Geriatric Emergency",
    "category": "neurological"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Eleanor appears anxious and fatigued, with visible worry lines deepened by chronic pain. She's articulate and forthcoming about her symptoms, having been a teacher, but shows clear distress about the worsening headaches. She maintains composure but her voice wavers when discussing how the pain affects her daily activities.",
    "interviewQuestions": [
      "Can you describe exactly when and how these headaches started?",
      "What do the headaches feel like - throbbing, pressure, sharp, or burning?",
      "Where exactly do you feel the pain in your head?",
      "On a scale of 1-10, how severe are these headaches?",
      "What makes the headaches worse or better?",
      "Have you noticed any other symptoms along with the headaches?",
      "Have you had any vision changes, weakness, or numbness anywhere?",
      "Have you experienced any confusion, memory problems, or personality changes?",
      "Have you had any seizures or episodes of losing consciousness?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Tell me about your breast cancer history and treatment",
      "Has anyone in your family had similar headaches or neurological problems?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that? These headaches have me feeling pretty scattered.",
      "onset": "It started about three months ago, gradually at first. I'd wake up with a mild headache maybe twice a week, but now it's every single morning and getting worse each day.",
      "character": "It feels like intense pressure, like my head is in a vise that's being tightened. Sometimes it feels like my head might explode from the pressure building up inside.",
      "location": "It's all over my head - the whole thing throbs with pressure. Sometimes it feels worse on the left side, but really it's everywhere.",
      "severity": "They're about an 8 out of 10 when I first wake up. The pain is so bad some mornings I can barely get out of bed. It interferes with everything I try to do.",
      "aggravating": "They're definitely worst in the morning when I first wake up. Bending over to pick something up makes the pressure much worse, and coughing or sneezing is excruciating.",
      "relieving": "The acetaminophen I take helps a little bit, maybe brings it down to a 6, but it never goes away completely anymore. Sitting upright for a while after I wake up seems to help some.",
      "associated": "I feel nauseous almost every morning with the headache, and I've vomited a few times. I've been more tired than usual, and my daughter says I seem more forgetful lately.",
      "denies": "I haven't had any seizures or passed out. No fever or neck stiffness. I don't think I've had any weakness in my arms or legs, though everything feels harder when my head hurts this much.",
      "history": "Never. I've never been a headache person. Maybe an occasional tension headache years ago, but nothing like this. That's why I'm so worried.",
      "medications": "Amlodipine 5mg daily; Levothyroxine 75mcg daily; Denosumab (Prolia) 60mg SC q6months; Calcium-Vitamin D 600mg/400IU BID; Acetaminophen 1000mg TID PRN",
      "allergies": "Sulfa drugs",
      "family": "My mother had breast cancer at 64 and died at 78 from heart failure. My sister also had breast cancer at 58 but she's doing well now at 72. We were both tested and we're BRCA negative. No family history of brain tumors or neurological problems that I know of.",
      "social": "I'm a retired high school English teacher. I've been widowed since 2019 when my husband died of a heart attack. I never smoked and only have an occasional glass of wine at holidays. I live alone but my daughter checks on me regularly."
    },
    "examManeuvers": [
      "Fundoscopic examination",
      "Cranial nerve examination",
      "Motor strength testing",
      "Deep tendon reflexes",
      "Cerebellar testing (finger-to-nose, heel-to-shin)",
      "Gait assessment",
      "Mental status examination",
      "Romberg test",
      "Sensation testing",
      "Neck stiffness assessment"
    ],
    "examFindings": {
      "Fundoscopic examination": "Bilateral papilledema with blurred disc margins and venous engorgement, consistent with increased intracranial pressure",
      "Cranial nerve examination": "Mild left facial weakness (CN VII), otherwise cranial nerves II-XII intact",
      "Motor strength testing": "Subtle weakness in right upper extremity (4+/5), otherwise 5/5 strength throughout",
      "Deep tendon reflexes": "Hyperreflexia on the right side (3+ biceps, triceps, patellar), left side 2+ and symmetric",
      "Cerebellar testing (finger-to-nose, heel-to-shin)": "Mild dysmetria on right side, left side normal",
      "Gait assessment": "Slightly unsteady with tendency to favor left side, no obvious ataxia",
      "Mental status examination": "Alert and oriented x3, mild word-finding difficulty, otherwise cognitively intact",
      "Romberg test": "Negative, able to maintain balance with eyes closed",
      "Sensation testing": "Intact to light touch, pinprick, and vibration bilaterally",
      "Neck stiffness assessment": "No nuchal rigidity, full range of motion without pain"
    },
    "ddxTargets": [
      "Brain metastasis \u2014 breast cancer (correct)",
      "Primary brain tumor (glioblastoma) \u2014 no known primary; single ring-enhancing in older adult; biopsy distinguishes",
      "Brain abscess \u2014 fever; restricted DWI; pyogenic source; no cancer history",
      "Radiation necrosis \u2014 prior radiation to brain; imaging overlap with metastasis; MR perfusion/PET distinguish",
      "Lymphoma \u2014 periventricular; responds dramatically to steroids; AIDS or immunosuppression",
      "Cavernous malformation \u2014 blood products; hemosiderin ring on T2*; no enhancement typically"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'typical' tension headaches in elderly patients or assuming headaches are medication-related, missing the critical morning pattern and associated neurological signs",
      "prematureClosure": "Risk of stopping evaluation after finding hypertension as a cause for headaches, without considering the breast cancer history and progressive nature",
      "availabilityBias": "May focus on more common headache causes (tension, migraine) rather than considering metastatic disease in a patient with known cancer history"
    },
    "coachPrompts": {
      "phase2": "You've identified several possible causes for Mrs. Whitfield's headaches. Before you interview her, think about what specific historical features would help you distinguish between primary headache disorders and secondary causes. What aspects of her past medical history might be particularly relevant to her current presentation?",
      "phase5": "Now that you've completed your history and physical exam, let's discuss what you've found. The combination of morning headaches, nausea, and your physical exam findings should point you toward a specific category of pathology. How do these findings change your differential diagnosis, and what's your next step?",
      "finalDebrief": "This case illustrates the importance of considering a patient's oncologic history when evaluating new neurological symptoms. Mrs. Whitfield's morning headaches with nausea, combined with papilledema and focal neurological signs, created a classic presentation for increased intracranial pressure from brain metastases. How did recognizing the pattern of secondary headache features help narrow your differential from your initial assessment?",
      "final": "Diagnosis: brain metastasis from breast cancer. Key learning: (1) Most common primary cancers causing brain metastases (in order): lung (most common overall), breast (most common in women with brain mets), melanoma (highest rate per patient), renal cell, colorectal. Breast cancer mets tend to be larger, better circumscribed, and more responsive to local therapy than lung. (2) Vasogenic edema treatment: dexamethasone reduces vascular permeability around tumor \u2192 reduces edema. Effect within 24-48 hours. Does NOT treat the tumor \u2014 only the edema. Taper after definitive treatment. (3) Treatment strategy for limited brain metastases (1-3): stereotactic radiosurgery (SRS) preferred over whole brain radiation therapy (WBRT) for \u22643-4 lesions with good PS and controlled systemic disease. SRS preserves neurocognition. WBRT causes cognitive decline \u2014 reserved for extensive/leptomeningeal disease. (4) Surgery indication: single large metastasis causing significant mass effect + accessible location + good systemic control \u2192 surgical resection followed by SRS to cavity. (5) HER2+ breast cancer and lapatinib/tucatinib: newer HER2-targeted agents cross the BBB better than trastuzumab \u2014 increasingly used for HER2+ brain metastases."
    }
  }
};
