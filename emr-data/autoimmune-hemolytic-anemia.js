
window.EMR_DATA = {
  "patient": {
    "name": "Nadine Toussaint",
    "dob": "07/22/1975",
    "age": 49,
    "sex": "Female",
    "mrn": "RDX-2025-31647",
    "pronouns": "She/Her",
    "insurance": "Cigna HMO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Publix Pharmacy \u2014 951 S State Rd 7, Plantation, FL",
    "language": "English, Haitian Creole",
    "race": "Black/African American",
    "address": "1820 NW 62nd Ave, Sunrise, FL 33313",
    "phone": "(954) 555-7428",
    "email": "n.toussaint75@email.com",
    "emergencyContact": {
      "name": "Jacques Toussaint (Husband)",
      "phone": "(954) 555-7445"
    }
  },
  "problems": [
    {
      "problem": "Warm AIHA \u2014 CLL-associated secondary hemolysis",
      "icd": "D59.11",
      "onset": "2024",
      "status": "Active",
      "notes": "David Park, 62M \u2014 known CLL stage II. Progressive fatigue, pallor, jaundice. Hgb 6.8 from 12.4 over 2 months. DAT (direct Coombs) positive IgG + C3. LDH 3200, haptoglobin undetectable."
    },
    {
      "problem": "CLL \u2014 underlying disease driving AIHA",
      "icd": "C91.10",
      "onset": "2022",
      "status": "Active",
      "notes": "CLL is the most common cause of secondary warm AIHA (10-25% of CLL patients develop AIHA). Requires treatment of both the AIHA and the underlying CLL."
    },
    {
      "problem": "Symptomatic anemia \u2014 transfusion threshold assessment",
      "icd": "D59.11",
      "onset": "2024",
      "status": "Active",
      "notes": "Hgb 6.8 + symptoms (dyspnea on exertion, palpitations). Transfusion may be needed but challenging \u2014 autoantibodies react with all donor cells, making crossmatch difficult."
    }
  ],
  "medications": [
    {
      "name": "Prednisone 1mg/kg/day \u2014 first-line for warm AIHA",
      "sig": "Corticosteroids suppress autoantibody production and reduce RBC destruction. 70-80% initial response rate. Taper over 4-6 months after Hgb stabilizes.",
      "prescriber": "Hematology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Rituximab \u2014 second-line or steroid-sparing",
      "sig": "Anti-CD20 depletes B-cells \u2192 reduces autoantibody production. Also treats underlying CLL. Combined rituximab + steroid increasingly first-line for severe AIHA.",
      "prescriber": "Hematology/Oncology",
      "start": "2024",
      "refills": 0,
      "status": "Planned \u2014 if steroid failure"
    },
    {
      "name": "Folate supplementation \u2014 1mg daily",
      "sig": "Compensatory erythropoiesis in hemolytic anemia depletes folate. Supplementation prevents megaloblastic change.",
      "prescriber": "Hematology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Aspirin",
      "type": "Drug",
      "reaction": "Bronchospasm",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Shellfish",
      "type": "Food",
      "reaction": "Urticaria",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "12/18/2024",
      "bp": "136/82",
      "hr": 104,
      "rr": 20,
      "temp": "99.4\u00b0F",
      "spo2": "96%",
      "wt": "162 lbs",
      "ht": "5'6\"",
      "bmi": 26.1,
      "setting": "PCP Office"
    },
    {
      "date": "08/14/2024",
      "bp": "126/78",
      "hr": 76,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "160 lbs",
      "ht": "5'6\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    },
    {
      "date": "02/20/2024",
      "bp": "128/80",
      "hr": 72,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "158 lbs",
      "ht": "5'6\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Robert Chen, MD",
      "cc": "Progressive fatigue, pallor, dark urine x 1 week",
      "hpi": "49-year-old female with CLL (watch-and-wait) presents with 1 week of progressive fatigue, exertional dyspnea, and dizziness. Husband noticed pallor and yellowing of eyes 3 days ago. Reports dark brown urine. No bleeding, melena, or hematochezia. No fever, chills, or weight loss. No recent infections or new medications. CLL last evaluated 3 months ago \u2014 stable lymphocytosis. Denies recent cold exposure (cold agglutinin screen).",
      "exam": "General: Pale, mildly icteric female, tachycardic. HEENT: Scleral icterus bilaterally, pale conjunctivae. Neck: Bilateral non-tender cervical lymphadenopathy (1-2 cm, mobile, rubbery \u2014 chronic/known). CV: Tachycardic, RRR, II/VI systolic flow murmur. Lungs: CTAB. Abdomen: Spleen palpable 3 cm below left costal margin. Liver edge at costal margin. Extremities: No edema, no petechiae.",
      "assessment": "1. Acute symptomatic anemia with jaundice \u2014 high suspicion for autoimmune hemolytic anemia (warm AIHA), likely CLL-associated\n2. CLL \u2014 Rai Stage I, previously stable; AIHA is known complication\n3. Need emergent workup: DAT, reticulocyte count, LDH, haptoglobin, bilirubin, peripheral smear",
      "plan": "1. STAT labs drawn in office (CBC, retic, LDH, haptoglobin, total/direct bilirubin, DAT, peripheral smear)\n2. Refer to ED for possible transfusion if Hgb critically low\n3. Contact hematology-oncology (Dr. Patel) for urgent co-management\n4. Anticipate starting corticosteroids (prednisone 1mg/kg) if AIHA confirmed\n5. Type and screen \u2014 note: DAT-positive may complicate crossmatch"
    },
    {
      "id": "V002",
      "date": "08/14/2024",
      "type": "Primary Care",
      "provider": "Dr. Robert Chen, MD",
      "cc": "Follow-up: CLL, hypothyroidism",
      "hpi": "49-year-old female for routine follow-up. CLL stable \u2014 last CBC showed WBC 18,000 with lymphocyte predominance, Hgb 13.0. No B symptoms. Hypothyroidism well-controlled. GERD managed. No new complaints.",
      "exam": "General: NAD, well-appearing. Neck: Small bilateral cervical nodes, stable. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Spleen tip just palpable. Skin: No petechiae.",
      "assessment": "1. CLL \u2014 stable, no treatment indications\n2. Hypothyroidism \u2014 TSH at goal\n3. Osteopenia \u2014 on calcium/vitamin D",
      "plan": "1. Continue watch-and-wait for CLL; hematology follow-up Q6 months\n2. Continue levothyroxine\n3. Recheck CBC in 3 months\n4. RTC 3-4 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Warm AIHA Workup",
      "results": [
        {
          "test": "Hemoglobin",
          "value": "6.8",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": "L"
        },
        {
          "test": "Direct Coombs (DAT)",
          "value": "Positive \u2014 IgG + C3d",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "LDH",
          "value": "3200",
          "unit": "U/L",
          "ref": "100-220",
          "flag": "H"
        },
        {
          "test": "Haptoglobin",
          "value": "Undetectable (<10)",
          "unit": "mg/dL",
          "ref": "30-200",
          "flag": "L"
        },
        {
          "test": "Reticulocyte count",
          "value": "18.2",
          "unit": "%",
          "ref": "0.5-2.0 (appropriate response)",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-271",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/28/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-682",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 \u2014 Prevnar 20)",
      "date": "04/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-114",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Breast cancer at 62, alive at 76",
    "Father: CLL diagnosed at 70, deceased at 78",
    "Sister: Hashimoto thyroiditis, age 45",
    "Brother: Healthy, age 52"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Elementary school teacher"
    ],
    [
      "Marital",
      "Married, 2 children (ages 18 and 15)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Occasional wine, 1-2/week"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 3x/week, 30 minutes"
    ],
    [
      "Housing",
      "Lives with husband and children in single-family home"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt"
    ],
    [
      "Advance Directive",
      "None on file \u2014 discussed"
    ]
  ],
  "meta": {
    "caseId": "autoimmune-hemolytic-anemia",
    "diagnosis": "Warm Autoimmune Hemolytic Anemia (Warm AIHA \u2014 CLL-Associated)",
    "acuity": 2,
    "presentation": "Hematologic Emergency",
    "category": "hematologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Nadine appears tired and concerned, frequently touching her abdomen and shifting uncomfortably in her chair. She's cooperative but anxious about her symptoms worsening, particularly worried this means her CLL is progressing. She provides detailed responses but keeps asking if she needs immediate treatment.",
    "interviewQuestions": [
      "Can you tell me more about when your fatigue and shortness of breath started?",
      "Have you noticed any changes in your urine color?",
      "Are you experiencing any abdominal pain or fullness?",
      "Have you had any fevers, chills, or night sweats recently?",
      "When was your last hematology appointment and blood work?",
      "Have you noticed any unusual bruising or bleeding?",
      "Are you having any chest pain or palpitations?",
      "Have you had any recent infections or illnesses?",
      "Are you taking any new medications or supplements?",
      "Have you been eating normally and maintaining your weight?",
      "Any nausea, vomiting, or changes in bowel movements?",
      "Have you traveled anywhere recently or been exposed to any chemicals?",
      "Are you having any back pain or bone pain?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand the question. Can you ask it differently? I'm mainly worried about feeling so tired and my husband saying I look yellow.",
      "onset": "It started about a week ago gradually. At first I just thought I was tired from work, but by Wednesday I was getting short of breath just walking up the stairs. My husband noticed my eyes looked yellow on Saturday.",
      "character": "The fatigue is overwhelming - not like my usual CLL tiredness. I feel weak and dizzy, especially when I stand up. The shortness of breath happens even with light activity now.",
      "location": "The fatigue is all over. I have some mild aching in my left side under my ribs, and my back has been sore, but mainly it's the exhaustion and breathing trouble.",
      "severity": "The fatigue is about an 8 out of 10 - I had to call in sick yesterday and today. I can barely do basic activities without getting winded. It's much worse than my usual CLL fatigue.",
      "aggravating": "Any physical activity makes the shortness of breath worse. Even getting dressed or walking to the kitchen leaves me breathless. The fatigue is worst in the afternoon.",
      "relieving": "Rest helps a little with the breathing, but the fatigue doesn't really improve even after sleeping. I've been trying to drink more fluids but it's not helping much.",
      "associated": "Yes, I've been dizzy when standing up, and my urine has been very dark - almost brown - for the past 3 days. My husband says I look pale and my eyes are yellow. I've had some mild nausea too.",
      "denies": "No chest pain, no unusual bleeding or bruising more than my usual CLL spots. No fever or chills. No leg swelling. No recent infections that I know of.",
      "history": "I've had fatigue from my CLL for years, but this is completely different - much more severe. I've never had yellow eyes or dark urine before. My CLL has been stable on watch-and-wait.",
      "medications": "Levothyroxine 75mcg daily; Omeprazole 20mg daily; Calcium Carbonate 600mg with Vitamin D 400 IU BID",
      "allergies": "Aspirin, Shellfish",
      "family": "My father had CLL too - he was diagnosed at 70 and died at 78, though I think it was from a heart attack, not the leukemia. My mother had breast cancer but she's still alive. My sister has thyroid problems like me.",
      "social": "I'm an elementary school teacher, married with two teenagers. I've never smoked and only have a glass of wine once or twice a week. No drug use. This is affecting my ability to work - I had to take sick days."
    },
    "examManeuvers": [
      "General appearance and vital signs assessment",
      "Conjunctival and scleral examination for icterus",
      "Cardiovascular examination including heart rate and murmurs",
      "Pulmonary examination for signs of heart failure",
      "Abdominal examination for splenomegaly and hepatomegaly",
      "Lymph node examination",
      "Skin examination for pallor and jaundice",
      "Orthostatic vital signs",
      "Neurologic assessment for signs of severe anemia"
    ],
    "examFindings": {
      "General appearance and vital signs assessment": "Appears fatigued and mildly distressed, notable pallor. BP 136/82, HR 104, RR 20, Temp 99.4\u00b0F, SpO2 96% on room air",
      "Conjunctival and scleral examination for icterus": "Marked conjunctival pallor bilaterally, obvious scleral icterus present",
      "Cardiovascular examination including heart rate and murmurs": "Tachycardic at 104 bpm, regular rhythm, II/VI systolic flow murmur at LUSB, no gallops or rubs",
      "Pulmonary examination for signs of heart failure": "Clear to auscultation bilaterally, no crackles, wheezes, or signs of fluid overload",
      "Abdominal examination for splenomegaly and hepatomegaly": "Spleen palpable 3 cm below left costal margin, liver edge palpable 2 cm below right costal margin, mild LUQ tenderness",
      "Lymph node examination": "Small, mobile lymph nodes palpable in cervical and axillary regions, consistent with known CLL",
      "Skin examination for pallor and jaundice": "Marked pallor of skin and mucous membranes, mild jaundice visible in natural light",
      "Orthostatic vital signs": "Lying: 104/68 HR 104; Standing: 118/74 HR 118, mild orthostatic changes present",
      "Neurologic assessment for signs of severe anemia": "Alert and oriented, mild difficulty with concentration, no focal deficits, normal gait when not short of breath"
    },
    "ddxTargets": [
      "Warm AIHA \u2014 CLL-associated (correct)",
      "Cold agglutinin disease \u2014 IgM; DAT positive C3 only (not IgG); cold-triggered symptoms; different treatment",
      "Microangiopathic hemolytic anemia (TMA) \u2014 DAT negative; schistocytes; thrombocytopenia",
      "Drug-induced immune hemolysis \u2014 medication history; DAT positive; stop offending drug",
      "Hemolytic transfusion reaction \u2014 post-transfusion; IgM ABO incompatibility",
      "Sickle cell crisis \u2014 hemolysis + pain crisis; sickle prep positive; different mechanism"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known CLL diagnosis and attributing all symptoms to disease progression rather than considering secondary autoimmune complications",
      "prematureClosure": "May stop thinking after identifying hemolytic anemia without determining the specific type (warm vs cold autoimmune vs other causes)",
      "availabilityBias": "Recent cases of CLL progression or common causes of anemia may overshadow consideration of autoimmune hemolytic anemia as CLL complication"
    },
    "coachPrompts": {
      "phase2": "Before interviewing the patient, consider what complications can arise in CLL patients beyond disease progression. What does the combination of fatigue, dyspnea, and the husband's observation of pallor and yellow eyes suggest? Think about both hematologic and non-hematologic causes.",
      "phase5": "Now you have evidence of hemolysis - icterus, splenomegaly, and dark urine. Combined with the anemia symptoms in a CLL patient, what specific type of hemolytic process should you be thinking about? What test would definitively establish this diagnosis?",
      "finalDebrief": "This case illustrates how CLL patients can develop secondary autoimmune complications, particularly warm autoimmune hemolytic anemia. The key was recognizing hemolysis signs (icterus, dark urine, splenomegaly) in the setting of severe anemia symptoms, rather than attributing everything to CLL progression. This emphasizes the importance of considering complications of the primary disease, not just progression of the disease itself.",
      "final": "Diagnosis: warm AIHA, CLL-associated. Key learning: (1) Warm vs cold AIHA distinction: WARM (IgG, 37\u00b0C) = most common, DAT positive IgG \u00b1 C3, extravascular hemolysis (spleen), responds to steroids. COLD (IgM, cold temperatures) = DAT positive C3 only, intravascular hemolysis, avoid cold, chlorambucil/rituximab. The DAT result distinguishes them. (2) DAT (direct Coombs test): detects antibodies or complement coating the patient's RBCs. Positive IgG = warm AIHA. Positive C3 only = cold AIHA or PCH. Positive IgG + C3 = warm AIHA (as here). (3) Transfusion in warm AIHA: autoantibodies react with ALL donor RBCs (pan-reactive) \u2192 impossible to find compatible crossmatch. Blood bank provides 'least incompatible' units. Transfuse only if life-threatening anemia (Hgb <7 with symptoms) \u2014 transfused cells will also be hemolyzed. (4) CLL + AIHA: CLL produces dysfunctional B-cells that generate autoantibodies. Rituximab treats both conditions simultaneously \u2014 depletes malignant B-cells AND autoantibody-producing B-cells. (5) Steroid response monitoring: expect Hgb to rise within 1-3 weeks with steroids. Reticulocytosis (as here) indicates appropriate bone marrow response. LDH and haptoglobin normalize with treatment response."
    }
  }
};
