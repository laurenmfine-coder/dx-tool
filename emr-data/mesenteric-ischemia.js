
window.EMR_DATA = {
  "patient": {
    "name": "Helen Goldstein",
    "patientHPI": "I have this severe pain in my belly that came on suddenly about two hours ago. The strange thing is that when the doctor presses on my stomach, it doesn't hurt nearly as much as the pain I'm feeling inside.",
    "dob": "12/10/1956",
    "age": "70",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-385606",
    "language": "English",
    "race": "Black/African American",
    "phone": "(314) 555-3290",
    "email": "helen.goldstein@email.com",
    "address": "5087 Birch Ln, Baltimore, MD 21206",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "Walgreens \u2014 University Blvd",
    "emergencyContact": {
      "name": "Alejandro Goldstein",
      "phone": "(312) 555-1609",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Severe abdominal pain out of proportion to exam",
    "diagnosis": "Mesenteric Ischemia"
  },
  "problems": [
    {
      "problem": "Acute mesenteric ischemia \u2014 embolic, AFib source",
      "icd": "K55.059",
      "onset": "2024",
      "status": "Active",
      "notes": "Henrietta Osei, 72F \u2014 sudden severe periumbilical pain 'out of proportion to exam', AFib on ECG, not anticoagulated. Mesenteric CTA: SMA embolus."
    },
    {
      "problem": "AFib without anticoagulation \u2014 thromboembolic source confirmed",
      "icd": "I48.19",
      "onset": "2020",
      "status": "Active",
      "notes": "CHA2DS2-VASc 5 \u2014 should have been anticoagulated. SMA embolism is a direct complication of untreated AFib."
    },
    {
      "problem": "Time-critical \u2014 bowel viability window 6-8 hours from ischemia onset",
      "icd": "K55.059",
      "onset": "2024",
      "status": "Active",
      "notes": "Symptoms for 4 hours. Peritoneal signs not yet present. Intervention within 2 hours can salvage bowel."
    }
  ],
  "medications": [
    {
      "name": "Heparin UFH 80 units/kg IV bolus \u2014 immediate anticoagulation",
      "sig": "Prevents clot propagation. Do NOT wait for IR suite to start heparin. Begin in ED.",
      "prescriber": "Vascular Surgery/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "IV access x2 large bore \u2014 resuscitation",
      "sig": "Mesenteric ischemia patients develop rapid third-spacing and sepsis from bowel necrosis. Aggressive IV access.",
      "prescriber": "Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Broad-spectrum antibiotics \u2014 cefepime + metronidazole",
      "sig": "Prophylactic coverage for bacterial translocation during ischemic bowel reperfusion. Give before any intervention.",
      "prescriber": "Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Papaverine \u2014 intra-arterial vasodilator (IR)",
      "sig": "Infused directly into SMA via IR catheter \u2014 relieves mesenteric vasospasm during and after thrombus removal.",
      "prescriber": "Interventional Radiology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 IR suite"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa",
      "reaction": "Anaphylaxis",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "108/58",
      "hr": "118",
      "rr": "26",
      "temp": "37.8\u00b0C",
      "spo2": "94%",
      "pain": "10/10",
      "bmi": "31",
      "weight": "82 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Severe abdominal pain out of proportion to exam",
      "hpi": "Helen Goldstein is a 70-year-old female presenting with severe abdominal pain out of proportion to exam. Past medical history includes Atrial Fibrillation, Heart Failure, Peripheral Vascular Disease, History of CVA. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Mesenteric Ischemia \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Mesenteric Ischemia Panel",
      "results": [
        {
          "test": "Lactate",
          "value": "5.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "WBC",
          "value": "21.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Lipase",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "D-dimer",
          "value": ">10",
          "unit": "mg/L",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.4",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "ABG \u2014 pH",
          "value": "7.26",
          "unit": "",
          "ref": "7.35-7.45",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Angiography \u2014 Abdomen/Pelvis With IV Contrast",
      "indication": "Severe abdominal pain out of proportion to exam, AFib",
      "findings": "Filling defect in proximal SMA \u2014 embolus. Bowel wall thickening and pneumatosis intestinalis beginning in mid-jejunum. No free air.",
      "impression": "Acute SMA embolism with early bowel ischemia \u2014 no perforation yet. Emergent intervention required within 2 hours to prevent irreversible infarction."
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Warfarin compliance",
      "Subtherapeutic INR \u2014 missed several doses"
    ],
    [
      "Living",
      "Nursing home resident"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Mrs. Goldstein appears anxious and uncomfortable, frequently shifting in bed and clutching her abdomen. She is cooperative but seems frustrated that her severe pain doesn't seem to correlate with what the doctors are finding on examination. She speaks clearly but with obvious distress, occasionally pausing mid-sentence due to pain waves.",
    "interviewQuestions": [
      "Can you describe exactly when and how this pain started?",
      "What does the pain feel like - sharp, crampy, burning, or tearing?",
      "Where exactly is the pain located and does it go anywhere else?",
      "On a scale of 1-10, how severe is this pain?",
      "Have you had any nausea, vomiting, or changes in bowel movements?",
      "Have you noticed any blood in your stool or black, tarry stools?",
      "Are you having any chest pain or shortness of breath?",
      "Have you been taking your blood thinner medication as prescribed?",
      "When was your last meal and what did you eat?",
      "Have you had any similar episodes of severe abdominal pain before?",
      "Have you had any recent procedures or changes in your medications?",
      "Are you having any dizziness or feeling faint?",
      "Have you noticed any changes in your heart rhythm or palpitations?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this terrible pain in my belly. Could you repeat that?",
      "onset": "It started very suddenly about two hours ago while I was sitting in my chair at the nursing home. One minute I was fine, the next minute I had this excruciating pain.",
      "character": "It's like a constant, severe cramping pain deep inside my belly. It feels like something is being torn or twisted inside me.",
      "location": "It's mostly in the center of my abdomen, around my belly button area, but it seems to spread across my whole belly. It doesn't really go anywhere else.",
      "severity": "This is easily a 9 out of 10. I've never had pain this severe. I can barely think straight because of it.",
      "aggravating": "Nothing seems to make it much worse, but moving around doesn't help at all. Even when I try to find a comfortable position, the pain stays the same.",
      "relieving": "Nothing helps. The nurses gave me some pain medication before the ambulance came, but it barely touched it. Pressing on my belly actually doesn't make it worse, which is strange.",
      "associated": "I feel a bit nauseous and queasy. I haven't vomited yet, but I feel like I might. I also feel a bit lightheaded and weak.",
      "denies": "No chest pain, no trouble breathing, no fever that I know of. I haven't had any diarrhea or bloody stools. No recent falls or injuries.",
      "history": "I've never had anything like this before. I've had some mild stomach upset from my medications before, but nothing even close to this severe.",
      "medications": "Warfarin; Digoxin; Furosemide",
      "allergies": "Sulfa",
      "family": "My family history isn't really relevant here - my parents died of old age and my siblings have been generally healthy.",
      "social": "I'm retired and live in a nursing home now. I don't smoke or drink alcohol. I've been having trouble remembering to take my medications lately, and I think I missed several doses of my blood thinner this past week."
    },
    "examManeuvers": [
      "Abdominal inspection",
      "Abdominal auscultation for bowel sounds",
      "Abdominal palpation (superficial and deep)",
      "Assessment for abdominal distension",
      "Evaluation for abdominal tenderness and guarding",
      "Assessment for rebound tenderness",
      "Evaluation for abdominal masses",
      "Assessment of peripheral pulses",
      "Cardiovascular examination for irregular rhythm",
      "Assessment for signs of dehydration or shock"
    ],
    "examFindings": {
      "Abdominal inspection": "Abdomen appears mildly distended but no obvious masses or pulsations visible",
      "Abdominal auscultation for bowel sounds": "Hypoactive bowel sounds present in all four quadrants",
      "Abdominal palpation (superficial and deep)": "Minimal tenderness to palpation despite patient's severe pain complaints; abdomen soft without guarding",
      "Assessment for abdominal distension": "Mild abdominal distension present",
      "Evaluation for abdominal tenderness and guarding": "Remarkably little tenderness on palpation given severity of patient's reported pain; no guarding or rigidity",
      "Assessment for rebound tenderness": "No rebound tenderness elicited",
      "Evaluation for abdominal masses": "No palpable masses detected",
      "Assessment of peripheral pulses": "Weak peripheral pulses bilaterally, consistent with known peripheral vascular disease",
      "Cardiovascular examination for irregular rhythm": "Irregularly irregular heart rhythm consistent with atrial fibrillation",
      "Assessment for signs of dehydration or shock": "Patient appears mildly dehydrated with poor skin turgor; cool extremities"
    },
    "ddxTargets": [
      "Acute mesenteric ischemia \u2014 SMA embolus, AFib source (correct)",
      "Aortic dissection \u2014 tearing back pain, BP differential; mesenteric involvement possible but CT clarifies",
      "Bowel obstruction \u2014 different CT finding; no embolus",
      "Acute pancreatitis \u2014 lipase normal, pain epigastric not periumbilical, no vascular occlusion",
      "Ischemic colitis \u2014 colonic distribution, less dramatic, no SMA embolus",
      "Peptic ulcer perforation \u2014 free air on CT, different history"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the patient's age and nursing home residence, potentially attributing symptoms to common geriatric conditions rather than considering vascular emergencies",
      "prematureClosure": "The discrepancy between severe pain and minimal physical findings might be dismissed as pain medication seeking or functional pain rather than pursuing the diagnosis of mesenteric ischemia",
      "availabilityBias": "More common causes of abdominal pain in elderly patients (constipation, UTI, medication side effects) may overshadow consideration of acute mesenteric ischemia"
    },
    "coachPrompts": {
      "phase2": "You've identified several potential causes for severe abdominal pain in an elderly patient. Given her medical history of atrial fibrillation and the mention of subtherapeutic INR, what specific vascular complications should you be particularly concerned about? What key historical details will help you differentiate between your differential diagnoses?",
      "phase5": "You've noted a striking discrepancy between the patient's severe pain (9/10) and relatively benign physical exam findings. This pain-to-exam mismatch is a classic presentation pattern. Combined with her history of atrial fibrillation and subtherapeutic anticoagulation, what vascular emergency should move to the top of your differential? What urgent studies would you order to confirm this diagnosis?",
      "finalDebrief": "This case illustrates the classic presentation of acute mesenteric ischemia - severe pain out of proportion to physical exam findings in a patient with atrial fibrillation and inadequate anticoagulation. The key teaching points are: recognizing pain-exam mismatch as a red flag, understanding that embolic mesenteric ischemia often occurs in patients with atrial fibrillation, and appreciating that early diagnosis is crucial as bowel viability decreases rapidly with time. What made this case challenging was avoiding anchoring on more common causes of abdominal pain in elderly patients.",
      "final": "Diagnosis: acute mesenteric ischemia \u2014 SMA embolus. Key learning: (1) Classic presentation: 'pain out of proportion to exam' \u2014 severe colicky periumbilical pain, but abdomen soft and non-tender early. This is because ischemia initially affects the visceral peritoneum (referred pain, non-localizing) before transmural necrosis produces peritoneal signs. When peritoneal signs appear \u2192 bowel infarction has occurred. Intervene BEFORE peritoneal signs. (2) Etiology types: embolic (~50%, from AFib or cardiac thrombus), thrombotic (~25%, atherosclerotic SMA plaque), non-occlusive (~25%, low-flow state \u2014 sepsis, shock, vasopressors), mesenteric venous thrombosis (hypercoagulable states). (3) Time is bowel: viable window is approximately 6-8 hours from occlusion to irreversible infarction. Mesenteric CTA is the diagnostic modality \u2014 fast and diagnostic. Treat immediately after CT, not after labs or consulting rounds. (4) Management: heparin immediately, then IR for catheter-directed thrombolysis or surgical embolectomy. Laparotomy for bowel assessment \u2014 non-viable bowel resected. Second-look laparotomy at 24-48h to reassess marginal bowel. (5) AFib and mesenteric ischemia: prevent, not just treat. This patient was not anticoagulated with a CHA2DS2-VASc of 5 \u2014 direct consequence. Every AFib patient with score \u22652 (male) or \u22653 (female) should be anticoagulated unless absolute contraindication."
    }
  },
  "meta": {
    "diagnosis": "Acute Mesenteric Ischemia \u2014 AFib Embolus, Mesenteric CTA, Emergency Surgical/IR Intervention",
    "caseId": "mesenteric-ischemia"
  }
};
