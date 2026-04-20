
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
    "pharmacy": "Walmart Pharmacy \u2014 Federal Hwy",
    "emergencyContact": {
      "name": "Richard Walker",
      "phone": "(504) 555-6110",
      "relationship": "Partner"
    },
    "chiefComplaint": "Surgical team: 'Patient is oozing from everywhere \u2014 wound, IV sites, NG tube. Blood isn't clotting.' Diffuse \u2014 bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
    "diagnosis": "Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage"
  },
  "problems": [
    {
      "problem": "DIC \u2014 consumptive coagulopathy from PPH",
      "icd": "D65",
      "onset": "2024",
      "status": "Active",
      "notes": "Post-partum hemorrhage 2000mL, fibrinogen 68, PT/aPTT markedly prolonged \u2014 DIC pattern"
    },
    {
      "problem": "Post-partum hemorrhage \u2014 uterine atony",
      "icd": "O72.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Atony not responding to oxytocin \u2014 surgical and interventional radiology teams on standby"
    },
    {
      "problem": "Massive transfusion \u2014 1:1:1 MTP activated",
      "icd": "D65",
      "onset": "2024",
      "status": "Active",
      "notes": "Hemorrhagic shock + DIC = massive transfusion protocol: pRBC:FFP:platelets 1:1:1"
    }
  ],
  "medications": [
    {
      "name": "Oxytocin 20-40 units in 1L NS IV (uterotonic)",
      "sig": "IV infusion \u2014 uterine atony treatment",
      "prescriber": "OB",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Tranexamic acid 1g IV over 10 min x1 (WOMAN trial)",
      "sig": "IV \u2014 antifibrinolytic, reduces mortality in PPH by 31%. Give WITHIN 3 hours of hemorrhage.",
      "prescriber": "OB",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Cryoprecipitate 10 units (fibrinogen replacement)",
      "sig": "IV \u2014 each unit raises fibrinogen ~10 mg/dL. Target fibrinogen >150-200 mg/dL.",
      "prescriber": "Hematology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Massive Transfusion Protocol: pRBC:FFP:platelets 1:1:1",
      "sig": "Balanced hemostatic resuscitation \u2014 avoid dilutional coagulopathy from pRBC alone",
      "prescriber": "Trauma/OB",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
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
      "temp": "35.3\u00b0C",
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
      "cc": "Surgical team: 'Patient is oozing from everywhere \u2014 wound, IV sites, NG tube. Blood isn't clotting.' Diffuse \u2014 bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "hpi": "Esperanza Ruiz is a 60-year-old female presenting with surgical team: 'patient is oozing from everywhere \u2014 wound, iv sites, ng tube. blood isn't clotting.' diffuse \u2014 bleeding from surgical wound, peripheral iv insertion sites, nasogastric tube, foley catheter (hematuria). Past medical history includes Delayed splenic rupture, Otherwise healthy 38-year-old. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "DIC/MTP Panel",
      "results": [
        {
          "test": "Fibrinogen",
          "value": "68",
          "unit": "mg/dL",
          "ref": "200-400",
          "flag": "L"
        },
        {
          "test": "PT",
          "value": "24",
          "unit": "sec",
          "ref": "11-13.5",
          "flag": "H"
        },
        {
          "test": "aPTT",
          "value": "62",
          "unit": "sec",
          "ref": "25-35",
          "flag": "H"
        },
        {
          "test": "Platelets",
          "value": "62",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": "L"
        },
        {
          "test": "D-dimer",
          "value": ">10,000",
          "unit": "ng/mL",
          "ref": "<500",
          "flag": "H"
        },
        {
          "test": "Hemoglobin",
          "value": "6.8",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": "L"
        },
        {
          "test": "Schistocytes on peripheral smear",
          "value": "Present \u2014 3+ fragments",
          "unit": "",
          "ref": "None",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
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
      "DIC from PPH \u2014 consumptive coagulopathy (correct)",
      "TTP \u2014 schistocytes present but fibrinogen NOT low in TTP (elevated instead)",
      "HELLP syndrome \u2014 liver enzymes would be elevated, different pattern",
      "Primary fibrinolysis \u2014 rare, treated differently (antifibrinolytics without blood)",
      "Hemophilia \u2014 baseline coagulopathy, not DIC",
      "Massive transfusion coagulopathy \u2014 dilutional but fibrinogen would not be this low this fast"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'surgical bleeding' and missing the systemic coagulopathy affecting multiple sites simultaneously",
      "prematureClosure": "May focus only on surgical complications without considering underlying consumptive coagulopathy triggered by trauma and surgery",
      "availabilityBias": "Common surgical bleeding may overshadow recognition of the pathognomonic pattern of diffuse bleeding from multiple sites characteristic of DIC"
    },
    "coachPrompts": {
      "phase2": "This patient has concerning diffuse bleeding after surgery. What systemic conditions could cause bleeding from multiple unrelated sites simultaneously? Think about what might be triggered by major trauma and surgical stress.",
      "phase5": "You've identified diffuse bleeding from multiple sites with signs of shock. What laboratory studies would help distinguish between different coagulopathies? Consider what processes consume clotting factors and platelets.",
      "finalDebrief": "This case illustrates DIC triggered by splenic trauma and surgery. The key was recognizing the pattern of diffuse bleeding from multiple sites, not just surgical bleeding. How did the combination of consumed clotting factors, thrombocytopenia, and paradoxical fibrinolysis create this clinical picture?",
      "final": "Diagnosis: DIC from PPH \u2014 consumptive coagulopathy. Key nursing learning (case is nursing-framed): (1) DIC lab pattern: 'everything falls' \u2014 fibrinogen LOW (consumed), PT/aPTT PROLONGED, platelets LOW, D-dimer HIGH (from massive clot formation and fibrinolysis), schistocytes on smear (microangiopathic hemolysis). TTP contrast: schistocytes present but fibrinogen is NORMAL or elevated in TTP. (2) Massive Transfusion Protocol (MTP) \u2014 nursing's role: activate MTP early, coordinate blood bank for rapid product delivery, document all units given (quantity and timing), monitor for transfusion reactions, prepare calcium gluconate 1g IV (calcium chelated by citrate in blood products \u2192 hypocalcemia \u2192 cardiac). (3) Tranexamic acid (TXA): WOMAN trial showed 1g TXA IV within 3 hours of PPH onset reduces mortality by 31% with no increase in thrombosis. Give WITHIN 3 hours \u2014 benefit disappears if delayed. Nursing role: ensure TXA is given promptly when MTP activated for PPH. (4) Fibrinogen threshold: target >150-200 mg/dL in obstetric DIC. Cryoprecipitate is the most concentrated fibrinogen source. 10 units cryoprecipitate raise fibrinogen ~100 mg/dL. (5) Treat the cause: ALL DIC treatment is supportive (blood products) \u2014 the ONLY way to stop DIC is to treat the underlying cause (in PPH: control the bleeding \u2014 oxytocin, surgical, IR uterine artery embolization)."
    }
  },
  "meta": {
    "diagnosis": "Disseminated Intravascular Coagulation \u2014 Post-Partum Hemorrhage, Massive Transfusion Protocol",
    "caseId": "dic-massive-transfusion"
  }
};
