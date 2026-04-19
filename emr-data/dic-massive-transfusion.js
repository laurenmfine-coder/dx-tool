/* emr-data/dic-massive-transfusion.js — EMR case data for Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage */
window.EMR_DATA = {
  "patient": {
    "name": "Esperanza Ruiz",
    "patientHPI": "I just had surgery a few days ago, and now I'm bleeding from everywhere - my incision won't stop oozing, blood keeps coming from where they put my IV in, and even my catheter has blood in it. The nurses keep changing my bandages but nothing seems to be clotting like it should, and I'm really scared because this isn't normal.",
    "dob": "11/16/1966",
    "age": "60",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-531656",
    "language": "English",
    "race": "White",
    "phone": "(314) 555-3321",
    "email": "esperanza.ruiz@email.com",
    "address": "5720 Ash St, Phoenix, AZ 85012",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Walmart Pharmacy — Federal Hwy",
    "emergencyContact": {
      "name": "Richard Walker",
      "phone": "(504) 555-6110",
      "relationship": "Partner"
    },
    "chiefComplaint": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
    "diagnosis": "Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Delayed splenic rupture",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Otherwise healthy 38-year-old",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "None routine",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
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
      "time": "08:48",
      "bp": "72/48",
      "hr": "138",
      "rr": "28",
      "temp": "35.3°C",
      "spo2": "91%",
      "pain": "2500/10",
      "bmi": "22",
      "weight": "81 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "hpi": "Esperanza Ruiz is a 60-year-old female presenting with surgical team: 'patient is oozing from everywhere — wound, iv sites, ng tube. blood isn't clotting.' diffuse — bleeding from surgical wound, peripheral iv insertion sites, nasogastric tube, foley catheter (hematuria). Past medical history includes Delayed splenic rupture, Otherwise healthy 38-year-old. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-296007",
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
              "value": "10.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "5.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "42",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "28",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "L"
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.6",
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
              "value": "25",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "20",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "77",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "10.4",
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
              "test": "PT/INR",
              "value": "2.8",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "PTT",
              "value": "68",
              "unit": "sec",
              "range": "25-35",
              "flag": "H"
            },
            {
              "test": "Fibrinogen",
              "value": "62",
              "unit": "mg/dL",
              "range": "200-400",
              "flag": "H"
            },
            {
              "test": "D-dimer",
              "value": ">20",
              "unit": "mcg/mL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Peripheral Smear",
              "value": "Schistocytes present (fewer than in TTP). Decreased platelets on smear.",
              "unit": "",
              "range": "Normal",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "9.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.12",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            },
            {
              "test": "Ionized Calcium",
              "value": "0.82",
              "unit": "mmol/L",
              "range": "1.12-1.32",
              "flag": "H"
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
      "accession": "IMG-153647",
      "clinical": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "POCUS – FAST Exam",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-215395",
      "clinical": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "technique": "Standard protocol",
      "findings": "Small amount of free fluid in Morrison pouch and pelvis (post-surgical). IVC flat (collapsing completely — severe hypovolemia). No pericardial effusion.",
      "impression": "Hypovolemic — aggressive resuscitation needed. Post-operative fluid expected but monitor for expanding hemoperitoneum.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-192951",
      "clinical": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 138 bpm. Low voltage (hypovolemia). No ST elevation",
      "impression": "Sinus tachycardia — hemorrhagic shock",
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
    "No bleeding disorders",
    "No clotting disorders"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Social"
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
      "Construction worker"
    ],
    [
      "Living",
      "Lives with girlfriend"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Esperanza appears anxious and frightened, speaking in a worried tone about the persistent bleeding that won't stop despite medical interventions. She is cooperative and forthcoming with information, clearly distressed by the alarming nature of her symptoms and seeking reassurance that this can be fixed.",
    "interviewQuestions": [
      "When exactly did you first notice the bleeding starting after your surgery?",
      "Can you describe what the bleeding looks like - is it oozing slowly or more active?",
      "Have you ever had problems with bleeding or bruising before this surgery?",
      "What surgery did you have and when exactly was it performed?",
      "Have you received any blood products or transfusions recently?",
      "Are you experiencing any chest pain, shortness of breath, or dizziness?",
      "Have you noticed any new bruising or petechiae on your skin?",
      "Did you take any blood thinners or aspirin before your surgery?",
      "Have you had any recent infections or felt feverish?",
      "Are you experiencing any abdominal pain or nausea?",
      "Have you noticed the bleeding getting worse or staying the same?",
      "Did anyone in your family ever have problems with bleeding during surgery?",
      "Have you been eating and drinking normally since your surgery?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that - can you ask it differently? I'm just really worried about all this bleeding.",
      "onset": "It started about 12 hours ago, maybe yesterday evening. At first I thought it was normal after surgery, but then it just kept getting worse and wouldn't stop.",
      "character": "It's like a steady oozing that won't clot. Even when they put pressure on it, it starts bleeding again as soon as they let go. It's not spurting, just constant seeping.",
      "location": "It's coming from my surgical incision on my abdomen, both IV sites on my arms, around my nose tube, and there's blood in my urine from the catheter.",
      "severity": "I'd say it's really scary, maybe an 8 out of 10 for how worried I am. I can't do anything because I'm bleeding from so many places.",
      "aggravating": "Any movement or touching seems to make it worse. Even gentle pressure doesn't seem to help it clot.",
      "relieving": "Nothing seems to help. The nurses keep changing bandages and applying pressure, but it just keeps bleeding.",
      "associated": "I feel really weak and dizzy, and I'm cold. My heart feels like it's racing, and I'm short of breath.",
      "denies": "No chest pain, no severe abdominal pain beyond the surgical site, no headache, no vision changes.",
      "history": "Never had anything like this before. I've had minor cuts that healed normally, never had surgery before this one.",
      "medications": "None routine",
      "allergies": "NKDA",
      "family": "No bleeding disorders in my family, no clotting disorders that I know of. My parents and siblings never had problems with surgery.",
      "social": "I work construction, so I'm used to minor cuts and bruises that heal fine. I smoke socially on weekends, drink occasionally with friends, no drugs. I live with my girlfriend who's been really worried."
    },
    "examManeuvers": [
      "Inspect surgical wound",
      "Assess IV insertion sites",
      "Check for petechiae and ecchymoses",
      "Examine mucous membranes",
      "Palpate for hepatosplenomegaly",
      "Assess mental status and neurological function",
      "Evaluate skin temperature and capillary refill",
      "Auscultate heart and lung sounds",
      "Check for lymphadenopathy",
      "Assess for signs of volume depletion"
    ],
    "examFindings": {
      "Inspect surgical wound": "Abdominal incision with continuous oozing of blood, unable to achieve hemostasis despite pressure dressing",
      "Assess IV insertion sites": "Active bleeding from bilateral antecubital IV sites with hematoma formation",
      "Check for petechiae and ecchymoses": "Scattered petechiae on arms and trunk, multiple ecchymoses at venipuncture sites",
      "Examine mucous membranes": "Pale conjunctiva and mucous membranes, oozing from gum line",
      "Palpate for hepatosplenomegaly": "No hepatosplenomegaly appreciated, abdomen tender at surgical site",
      "Assess mental status and neurological function": "Alert but anxious, no focal neurological deficits",
      "Evaluate skin temperature and capillary refill": "Cool, clammy skin with delayed capillary refill >3 seconds",
      "Auscultate heart and lung sounds": "Tachycardic with regular rhythm, lungs clear to auscultation bilaterally",
      "Check for lymphadenopathy": "No significant lymphadenopathy palpated",
      "Assess for signs of volume depletion": "Hypotensive, tachycardic, poor skin turgor, dry mucous membranes"
    },
    "ddxTargets": [
      "Disseminated Intravascular Coagulation (DIC) (correct diagnosis)",
      "Dilutional coagulopathy from massive transfusion",
      "Medication-induced coagulopathy",
      "Acute leukemia with thrombocytopenia",
      "Thrombotic thrombocytopenic purpura (TTP)",
      "Surgical bleeding with inadequate hemostasis",
      "Platelet dysfunction disorder"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'surgical bleeding' and missing the systemic coagulopathy affecting multiple sites simultaneously",
      "prematureClosure": "May focus only on surgical complications without considering underlying consumptive coagulopathy triggered by trauma and surgery",
      "availabilityBias": "Common surgical bleeding may overshadow recognition of the pathognomonic pattern of diffuse bleeding from multiple sites characteristic of DIC"
    },
    "coachPrompts": {
      "phase2": "This patient has concerning diffuse bleeding after surgery. What systemic conditions could cause bleeding from multiple unrelated sites simultaneously? Think about what might be triggered by major trauma and surgical stress.",
      "phase5": "You've identified diffuse bleeding from multiple sites with signs of shock. What laboratory studies would help distinguish between different coagulopathies? Consider what processes consume clotting factors and platelets.",
      "finalDebrief": "This case illustrates DIC triggered by splenic trauma and surgery. The key was recognizing the pattern of diffuse bleeding from multiple sites, not just surgical bleeding. How did the combination of consumed clotting factors, thrombocytopenia, and paradoxical fibrinolysis create this clinical picture?"
    }
  }
};
