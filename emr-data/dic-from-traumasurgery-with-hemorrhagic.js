
window.EMR_DATA = {
  "patient": {
    "name": "Derek Robinson",
    "patientHPI": "I was riding my motorcycle when an SUV hit me, and I remember flying through the air before everything went black for a moment. My right leg is in terrible pain and I could see bone sticking out with a lot of blood, but the paramedics put something tight around my leg to stop the bleeding. I'm scared about what this means for my leg and whether I'll be able to walk normally again.",
    "dob": "10/30/1982",
    "age": 42,
    "sex": "Male",
    "mrn": "RDX-2025-67034",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Amanda Torres, MD",
    "pharmacy": "Walgreens \u2014 5601 W Broward Blvd, Plantation, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "3979 Oak Ave, Birmingham, AL 35210",
    "phone": "(954) 555-3190",
    "email": "d.robinson82@email.com",
    "emergencyContact": {
      "name": "Shanice Robinson (Wife)",
      "phone": "(954) 555-3210"
    }
  },
  "problems": [
    {
      "problem": "Acute DIC \u2014 trauma-induced, hemorrhagic phase",
      "icd": "D65",
      "onset": "2024",
      "status": "Active",
      "notes": "Kevin Park, 32M \u2014 major trauma (MVA, polytrauma). Now diffuse bleeding: IV sites, surgical wounds, GI. PT 28s, INR 2.4, platelets 44, fibrinogen 68, D-dimer critically elevated. Acute DIC with hemorrhagic predominance."
    },
    {
      "problem": "Underlying trigger \u2014 ongoing trauma/hemorrhagic shock",
      "icd": "D65",
      "onset": "2024",
      "status": "Active",
      "notes": "Treat the underlying cause. DIC from trauma driven by tissue factor release, massive transfusion, hypothermia, acidosis \u2014 the lethal triad. Damage control surgery to control hemorrhage."
    },
    {
      "problem": "Lethal triad \u2014 hypothermia, acidosis, coagulopathy",
      "icd": "D65",
      "onset": "2024",
      "status": "Active",
      "notes": "Temp 35.2\u00b0C, pH 7.18, coagulopathy. The lethal triad of trauma is self-reinforcing: coagulopathy worsens acidosis worsens hypothermia worsens coagulopathy. Correct all three simultaneously."
    }
  ],
  "medications": [
    {
      "name": "Fresh frozen plasma 4 units \u2014 replace clotting factors",
      "sig": "FFP for DIC with active bleeding and prolonged PT/INR. Target fibrinogen >150 mg/dL, INR <1.5. Use 1:1:1 ratio with pRBC and platelets (damage control resuscitation).",
      "prescriber": "Trauma Surgery/Critical Care",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 ongoing"
    },
    {
      "name": "Cryoprecipitate 10 units \u2014 fibrinogen replacement",
      "sig": "Each unit cryoprecipitate contains fibrinogen (200-400mg), Factor VIII, vWF, Factor XIII. Use when fibrinogen <150 mg/dL (as here: 68). Target fibrinogen >150-200 mg/dL.",
      "prescriber": "Trauma Surgery/Critical Care",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Tranexamic acid 1g IV over 10 min \u2014 within 3 hours of injury",
      "sig": "CRASH-2 trial: TXA within 3 hours of injury reduces mortality from hemorrhage. Antifibrinolytic mechanism. After 3 hours: no benefit and possible harm. Give early in major trauma with hemorrhage.",
      "prescriber": "Trauma Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Administered \u2014 within 3h"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/28/2025",
      "bp": "98/62",
      "hr": 118,
      "rr": 22,
      "temp": "97.8\u00b0F",
      "spo2": "95%",
      "wt": "220 lbs",
      "ht": "5'11\"",
      "bmi": 30.7,
      "setting": "ED"
    },
    {
      "date": "09/15/2024",
      "bp": "134/84",
      "hr": 76,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "225 lbs",
      "ht": "5'11\"",
      "bmi": 31.4,
      "setting": "PCP Office"
    },
    {
      "date": "03/10/2024",
      "bp": "130/82",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "222 lbs",
      "ht": "5'11\"",
      "bmi": 31,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/28/2025",
      "type": "ED",
      "provider": "Dr. Marcus Johnson, MD",
      "cc": "Motorcycle collision \u2014 right leg injury, significant hemorrhage",
      "hpi": "42-year-old male brought by EMS after motorcycle vs. SUV collision at approximately 35 mph. Patient was helmeted. Primary impact to right lower extremity. On scene: right leg deformity with open wound over proximal tibia, significant hemorrhage controlled with tourniquet. GCS 15 on arrival. C-collar in place. Reports severe right leg pain. Denies LOC, headache, neck pain, abdominal pain, or chest pain. Estimated blood loss on scene 800-1000 mL.",
      "exam": "Primary survey: A \u2014 patent, speaking full sentences. B \u2014 bilateral breath sounds, no crepitus. C \u2014 tachycardic, hypotensive, 2 large-bore IVs, tourniquet right leg. D \u2014 GCS 15, pupils equal and reactive. E \u2014 right tibial plateau open fracture with skin laceration, moderate ongoing hemorrhage. Secondary survey: Head/neck: No midline cervical tenderness. Chest: No rib tenderness. Abdomen: Soft, non-tender. Pelvis: Stable on compression. Right leg: Gross deformity, open wound 8 cm with visible bone. DP pulse dopplerable, decreased sensation lateral leg. Left extremities: No injury.",
      "assessment": "1. Open right tibial plateau fracture \u2014 Gustilo type IIIA, Schatzker type V\n2. Hemorrhagic shock \u2014 Class II-III, EBL ~1 liter\n3. Risk for DIC given traumatic mechanism and hemorrhage\n4. Sickle cell trait \u2014 noted for anesthetic planning",
      "plan": "1. Massive transfusion protocol \u2014 2 units pRBC, 1 unit FFP, 1 platelet pack initiated\n2. TXA 1g IV\n3. Tetanus booster\n4. Cefazolin 2g IV + gentamicin 5mg/kg for open fracture\n5. Ortho trauma consult \u2014 ORIF scheduled for tomorrow AM\n6. CT right lower extremity with angiography to assess vascular injury\n7. Serial labs: CBC, coags, fibrinogen, lactate Q4h\n8. ICU admission for hemorrhage monitoring"
    },
    {
      "id": "V002",
      "date": "09/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Amanda Torres, MD",
      "cc": "Annual wellness exam",
      "hpi": "42-year-old male for annual exam. No acute complaints. HTN controlled. Exercises intermittently. Reports motorcycle riding as hobby \u2014 wears helmet. No hospitalizations. Sickle cell trait carrier \u2014 documented, no complications.",
      "exam": "General: NAD, well-appearing obese male. HEENT: WNL. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, obese, NT. Extremities: No edema. Neuro: A&O x3.",
      "assessment": "1. Annual wellness exam\n2. HTN \u2014 controlled\n3. Obesity \u2014 counseled\n4. Sickle cell trait \u2014 stable carrier",
      "plan": "1. Continue lisinopril\n2. Weight management counseling\n3. Labs: CMP, CBC, lipid panel\n4. RTC 1 year or PRN"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Trauma DIC Assessment",
      "results": [
        {
          "test": "PT/INR",
          "value": "28s / 2.4",
          "unit": "",
          "ref": "12s / <1.2",
          "flag": "H"
        },
        {
          "test": "Fibrinogen",
          "value": "68",
          "unit": "mg/dL",
          "ref": "200-400 (critically low)",
          "flag": "L"
        },
        {
          "test": "Platelets",
          "value": "44",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": "L"
        },
        {
          "test": "D-dimer",
          "value": ">20",
          "unit": "\u03bcg/mL",
          "ref": "<0.5 (critically elevated)",
          "flag": "H"
        },
        {
          "test": "ISTH DIC Score",
          "value": "7 (>5 = overt DIC)",
          "unit": "",
          "ref": "<5 = non-overt",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/15/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-310",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/05/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-715",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "Td (Tetanus booster)",
      "date": "01/28/2025",
      "site": "Left deltoid IM",
      "lot": "TD25-004",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Mother: HTN, T2DM, alive at 66",
    "Father: Sickle cell trait carrier, HTN, alive at 68",
    "Brother: Healthy, age 38",
    "Paternal uncle: DVT at age 50"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Electrician"
    ],
    [
      "Marital",
      "Married, 2 children (ages 10 and 7)"
    ],
    [
      "Tobacco",
      "Former smoker \u2014 5 pack-years; quit 2019"
    ],
    [
      "Alcohol",
      "Social, 2-3 beers on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Gym 2x/week; recreational motorcycle riding"
    ],
    [
      "Housing",
      "Lives with wife and children in single-family home"
    ],
    [
      "Safety",
      "Wears helmet for motorcycle; seatbelt in car"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "dic-from-traumasurgery-with-hemorrhagic",
    "diagnosis": "Disseminated Intravascular Coagulation \u2014 Trauma-Induced",
    "acuity": 1,
    "presentation": "Hematologic Emergency",
    "category": "hematologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Derek is anxious and frightened, speaking in rushed sentences about the motorcycle accident. He's cooperative but clearly in distress, wincing frequently and expressing fear about bleeding and whether he'll be okay.",
    "interviewQuestions": [
      "Can you describe exactly what happened in the motorcycle accident?",
      "How much blood did you lose at the scene?",
      "Are you having any unusual bleeding from your gums, nose, or other sites?",
      "Have you noticed any unusual bruising or skin changes?",
      "Are you experiencing any chest pain or difficulty breathing?",
      "Have you had any nausea, vomiting, or abdominal pain?",
      "Are you feeling dizzy, lightheaded, or confused?",
      "Have you had any similar bleeding problems in the past?",
      "Do you take any blood thinners or medications that affect clotting?",
      "Has anyone in your family had bleeding disorders or clotting problems?",
      "How long ago did the accident occur?",
      "Have you noticed any changes in your urine color?",
      "Are you having any numbness or tingling anywhere?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing right now - could you ask that again? I'm really worried about all this bleeding.",
      "onset": "The accident happened about 2 hours ago. I was thrown from my bike when the SUV hit me, and I think I blacked out briefly.",
      "character": "The leg pain is excruciating, like nothing I've ever felt. But I'm more scared about all the bleeding - it seems like it won't stop.",
      "location": "My right leg is the worst - that's where the bone is sticking out. But I'm noticing bleeding from my IV site and my gums feel weird.",
      "severity": "The pain is definitely a 9 out of 10, but the bleeding is what's really scaring me. I feel weak and dizzy.",
      "aggravating": "Any movement makes the leg pain worse, and I feel more lightheaded when I try to sit up.",
      "relieving": "The tourniquet helped with the leg bleeding initially, but nothing seems to be helping now.",
      "associated": "I feel really weak and dizzy, my heart is racing, and I noticed my gums started bleeding when I was in the ambulance.",
      "denies": "No chest pain, but I am short of breath. No abdominal pain, but I feel nauseous. No headache.",
      "history": "I've never had anything like this before. I've never had problems with bleeding or bruising easily.",
      "medications": "Lisinopril 10mg daily; Ibuprofen 600mg TID PRN; Multivitamin daily",
      "allergies": "NKDA",
      "family": "My dad has sickle cell trait like me, but no bleeding problems in the family. Mom and dad both have high blood pressure.",
      "social": "I'm an electrician, married with two kids. I quit smoking in 2019 after 5 pack-years. I only drink socially on weekends, no drugs."
    },
    "examManeuvers": [
      "Inspection of skin for petechiae and ecchymoses",
      "Assessment of IV insertion sites for bleeding",
      "Examination of oral mucosa and gums",
      "Palpation for organomegaly",
      "Neurologic assessment including mental status",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Assessment of extremity perfusion and pulses",
      "Inspection of urine if catheterized",
      "Assessment of wound bleeding and clot formation"
    ],
    "examFindings": {
      "Inspection of skin for petechiae and ecchymoses": "Multiple petechiae on chest and arms, large ecchymoses around fracture site extending beyond expected trauma pattern",
      "Assessment of IV insertion sites for bleeding": "Active oozing from both IV sites despite proper insertion, blood not clotting normally",
      "Examination of oral mucosa and gums": "Spontaneous gingival bleeding, mucosal petechiae on buccal surfaces",
      "Palpation for organomegaly": "No hepatosplenomegaly appreciated",
      "Neurologic assessment including mental status": "Alert but anxious, no focal deficits, slightly confused about time",
      "Cardiovascular examination": "Tachycardic, hypotensive, weak pulses, no murmurs appreciated",
      "Pulmonary examination": "Tachypneic, clear to auscultation bilaterally, no acute distress",
      "Assessment of extremity perfusion and pulses": "Cool extremities, delayed capillary refill >3 seconds, weak distal pulses",
      "Inspection of urine if catheterized": "Dark amber urine with trace hematuria",
      "Assessment of wound bleeding and clot formation": "Fracture site continues to ooze despite pressure, clots appear friable and break down easily"
    },
    "ddxTargets": [
      "Trauma-induced DIC \u2014 hemorrhagic phase (correct)",
      "Massive transfusion dilutional coagulopathy \u2014 similar lab pattern; overlaps with DIC; treat with same products",
      "Liver failure coagulopathy \u2014 similar PT/INR; but fibrinogen less severely low; no D-dimer elevation",
      "TTP \u2014 thrombocytopenia + MAHA; normal coagulation; no trauma history",
      "Heparin overdose \u2014 anti-Xa level; aPTT-specific prolongation; protamine reversal"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on obvious tibial fracture and missing systemic coagulopathy - the dramatic orthopedic injury may overshadow subtle signs of DIC",
      "prematureClosure": "May stop at 'trauma with blood loss' without recognizing the pathologic bleeding pattern suggesting consumption coagulopathy",
      "availabilityBias": "Recent cases of simple trauma may lead to overlooking complex hematologic complications of severe injury"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, consider this: What makes bleeding 'pathologic' versus expected blood loss from trauma? What patterns would suggest a systemic coagulopathy rather than simple hemorrhage?",
      "phase5": "You've identified concerning bleeding patterns beyond the fracture site. What laboratory studies would help differentiate between different causes of coagulopathy? How does the timeline and mechanism connect to your differential?",
      "finalDebrief": "This case illustrates how major trauma can trigger DIC through tissue factor release and consumption of clotting factors. How did the pattern of bleeding - spontaneous gingival bleeding, IV site oozing, and poor clot formation - point you toward systemic coagulopathy rather than simple blood loss?",
      "final": "Diagnosis: trauma-induced DIC. Key learning: (1) DIC pathophysiology: massive tissue factor release (trauma, sepsis, malignancy) \u2192 thrombin generation \u2192 fibrin clot formation \u2192 consumption of clotting factors and platelets \u2192 bleeding. Simultaneously, fibrinolysis activated \u2192 elevated D-dimer (fibrin degradation products). (2) ISTH DIC score: platelet count (>100=0, <100=1, <50=2) + D-dimer (normal=0, moderate=2, strong=3) + PT prolongation + fibrinogen (<1g/L=1). Score \u22655 = overt DIC. (3) DIC lab pattern: PT \u2191, aPTT \u2191, INR \u2191, fibrinogen \u2193 (consumed), D-dimer \u2191\u2191 (fibrinolysis), platelets \u2193. Key: fibrinogen is an acute phase reactant that is actually ELEVATED in early DIC (can appear normal or high before dropping). (4) Trauma resuscitation \u2014 damage control: 1:1:1 ratio of pRBC:FFP:platelets. Permissive hypotension (MAP 50-65) until surgical hemorrhage control. Tranexamic acid within 3 hours (CRASH-2). Avoid NS (hyperchloremic acidosis worsens coagulopathy). Warm all blood products. (5) Lethal triad treatment: rewarm (Bair Hugger, warm fluids), correct acidosis (resuscitation, NaHCO3 if severe), replace clotting factors (FFP, cryo, platelets). All three must be addressed simultaneously."
    }
  }
};
