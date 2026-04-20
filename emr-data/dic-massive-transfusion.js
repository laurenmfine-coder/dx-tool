
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
      "problem": "DIC \u2014 obstetric hemorrhage trigger",
      "icd": "D65",
      "onset": "2024",
      "status": "Active",
      "notes": "Postpartum 2h, bleeding 2.5L. Fibrinogen <100, PT/PTT prolonged. Classic obstetric DIC."
    },
    {
      "problem": "Massive postpartum hemorrhage \u2014 2500mL blood loss",
      "icd": "O72.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Uterine atony after prolonged labor. MTP activated."
    },
    {
      "problem": "Hypofibrinogenemia \u2014 fibrinogen 62 mg/dL",
      "icd": "D68.4",
      "onset": "2024",
      "status": "Active",
      "notes": "Fibrinogen most rapidly depleted in obstetric DIC \u2014 early cryoprecipitate critical"
    }
  ],
  "medications": [
    {
      "name": "Massive Transfusion Protocol (MTP) activated \u2014 1:1:1 ratio",
      "sig": "pRBC:FFP:Platelets in 1:1:1 ratio. Give first 6-pack before labs.",
      "prescriber": "OB/Anesthesia",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Cryoprecipitate 10 units \u2014 fibrinogen replacement",
      "sig": "Each unit of cryo raises fibrinogen ~5 mg/dL. 10 units raises ~50 mg/dL. Give for fibrinogen <150 in DIC.",
      "prescriber": "OB/Hematology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Tranexamic acid 1g IV over 10 min \u2014 antifibrinolytic",
      "sig": "Reduces fibrinolysis. WOMAN trial: reduces PPH mortality if given within 3 hours of delivery.",
      "prescriber": "OB",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Oxytocin 30 units in 500mL NS at 125 mL/hr \u2014 uterotonic",
      "sig": "IV infusion for uterine atony \u2014 promote uterine contraction to stop bleeding source",
      "prescriber": "OB",
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
      "panel": "DIC Panel \u2014 STAT",
      "results": [
        {
          "test": "Fibrinogen",
          "value": "62",
          "unit": "mg/dL",
          "ref": "200-400 (target >150 in DIC)",
          "flag": "L"
        },
        {
          "test": "PT",
          "value": "22",
          "unit": "sec",
          "ref": "11-13.5",
          "flag": "H"
        },
        {
          "test": "PTT",
          "value": "68",
          "unit": "sec",
          "ref": "25-35",
          "flag": "H"
        },
        {
          "test": "D-dimer",
          "value": ">20",
          "unit": "\u03bcg/mL FEU",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "Platelets",
          "value": "58",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": "L"
        },
        {
          "test": "Hemoglobin",
          "value": "6.2",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": "L"
        },
        {
          "test": "Schistocytes on smear",
          "value": "Present",
          "unit": "",
          "ref": "Absent",
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
      "Obstetric DIC from postpartum hemorrhage (correct)",
      "TTP \u2014 fibrinogen preserved, schistocytes different pattern",
      "Primary fibrinolysis \u2014 D-dimer elevated in both, but platelet consumption distinguishes DIC",
      "Hemophilia \u2014 no prior bleeding history, obstetric context",
      "HELLP syndrome evolving to DIC \u2014 different timing/context",
      "Warfarin effect \u2014 not on anticoagulation"
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
      "final": "Diagnosis: obstetric DIC. Key nursing learning: (1) Massive transfusion protocol \u2014 nursing role: immediately call blood bank and activate MTP (pre-set orders for 1:1:1 ratio). Obtain large-bore IV access (2x 16-gauge minimum or IO/central). Warm blood products (hypothermia worsens coagulopathy). Document each product given and time. Reassess after each 6-pack with labs. (2) Fibrinogen is the most critical lab in obstetric DIC: fibrinogen <100 = severe DIC, massive hemorrhage risk. Standard FFP contains only ~2g/dL fibrinogen. Cryoprecipitate is concentrated fibrinogen + Factor VIII + vWF \u2014 10 units raises fibrinogen ~50 mg/dL. In obstetric DIC, give cryo early, not as afterthought. (3) The lethal triad: hypothermia + acidosis + coagulopathy \u2014 each worsens the others. Nursing actively warms patient (forced air warming blanket, warm fluids), monitors pH, tracks coagulation labs. (4) WOMAN trial: TXA 1g IV within 3 hours of delivery reduced PPH death by 19%. Nursing ensures this is given promptly. After 3 hours, benefit disappears. (5) Uterine atony signs: soft/boggy uterus, fundal massage not firming. Nursing palpates fundus every 15 min post-delivery. 'Boggy uterus + increasing pad saturation = call OB now.'"
    }
  },
  "meta": {
    "diagnosis": "Disseminated Intravascular Coagulation \u2014 Postpartum Hemorrhage, Massive Transfusion Protocol",
    "caseId": "dic-massive-transfusion"
  }
};
