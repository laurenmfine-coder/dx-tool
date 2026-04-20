
window.EMR_DATA = {
  "patient": {
    "name": "Gloria Fontaine",
    "patientHPI": "I came in for my regular blood transfusion yesterday and felt fine during it, but about six hours later I started feeling awful - really hot and cold at the same time, my back was killing me, and I felt like I was going to throw up. My urine this morning looked like dark tea, which really scared me.",
    "dob": "12/05/1958",
    "age": 66,
    "sex": "Female",
    "mrn": "RDX-2025-19483",
    "pronouns": "She/Her",
    "insurance": "Medicare Part B",
    "pcp": "Dr. Eduardo Reyes, MD",
    "pharmacy": "CVS Pharmacy \u2014 3001 N Federal Hwy, Fort Lauderdale, FL",
    "language": "English, Haitian Creole",
    "race": "Black/African American",
    "address": "8773 Peachtree Rd, Chicago, IL 60651",
    "phone": "(954) 555-4782",
    "email": "g.fontaine58@email.com",
    "emergencyContact": {
      "name": "Pierre Fontaine (Son)",
      "phone": "(954) 555-4801"
    }
  },
  "problems": [
    {
      "problem": "Acute hemolytic transfusion reaction \u2014 ABO incompatibility",
      "icd": "T80.310A",
      "onset": "2024",
      "status": "Active",
      "notes": "James Kim, 45M \u2014 received 2 units pRBC. 30 minutes into transfusion: fever 39.2\u00b0C, rigors, flank pain, hematuria. STOP transfusion immediately."
    },
    {
      "problem": "ABO mismatch \u2014 clerical error suspected",
      "icd": "T80.310A",
      "onset": "2024",
      "status": "Active",
      "notes": "Most common cause of fatal AHTR is clerical/labeling error \u2014 wrong blood to wrong patient. Mandatory incident report."
    },
    {
      "problem": "DIC risk \u2014 intravascular hemolysis activates coagulation cascade",
      "icd": "D65",
      "onset": "2024",
      "status": "Active",
      "notes": "ABO AHTR triggers DIC via tissue factor release from hemolyzed RBCs. Monitor PT/PTT, fibrinogen, D-dimer."
    }
  ],
  "medications": [
    {
      "name": "STOP TRANSFUSION IMMEDIATELY \u2014 keep IV access",
      "sig": "Most critical intervention. Do not restart any blood products until blood bank investigation complete. Keep IV line with normal saline.",
      "prescriber": "Nursing/Medicine",
      "start": "STOP",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "IV normal saline \u2014 200-300mL/hr initial",
      "sig": "Maintain urine output >1 mL/kg/hr to prevent hemoglobin precipitation in tubules \u2192 AKI. Aggressive hydration is the cornerstone of treatment.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Notify blood bank \u2014 return bag + new patient sample",
      "sig": "Repeat crossmatch with new sample. Return implicated unit. Blood bank will investigate for clerical error and repeat compatibility testing.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 urgent"
    }
  ],
  "allergies": [
    {
      "allergen": "Ibuprofen",
      "type": "Drug",
      "reaction": "GI bleeding (melena)",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "IV Contrast (Iodinated)",
      "type": "Drug",
      "reaction": "Urticaria, facial flushing",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/27/2025",
      "bp": "132/78",
      "hr": 96,
      "rr": 18,
      "temp": "98.8\u00b0F",
      "spo2": "96%",
      "wt": "158 lbs",
      "ht": "5'3\"",
      "bmi": 28,
      "setting": "ED"
    },
    {
      "date": "01/13/2025",
      "bp": "128/76",
      "hr": 92,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "157 lbs",
      "ht": "5'3\"",
      "bmi": 27.8,
      "setting": "ED"
    },
    {
      "date": "11/20/2024",
      "bp": "130/80",
      "hr": 88,
      "rr": 16,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "160 lbs",
      "ht": "5'3\"",
      "bmi": 28.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/13/2025",
      "type": "ED",
      "provider": "Dr. Karen Okonkwo, MD",
      "cc": "Scheduled transfusion \u2014 symptomatic anemia",
      "hpi": "66-year-old female with MDS presents for scheduled pRBC transfusion. Reports progressive fatigue and exertional dyspnea over past 4 days. Pre-transfusion Hgb 6.8 g/dL. Known alloantibodies (anti-E, anti-Kell) \u2014 antigen-negative units ordered from blood bank. Transfusion completed without incident; post-transfusion Hgb 8.4 g/dL. Tolerated well, no febrile or allergic reactions.",
      "exam": "General: Fatigued-appearing female, pale conjunctivae. CV: Tachycardic, RRR, systolic flow murmur. Lungs: CTAB. Extremities: No edema.",
      "assessment": "1. MDS with symptomatic anemia \u2014 transfusion completed\n2. Known red cell alloantibodies \u2014 antigen-negative blood used\n3. Iron overload \u2014 ferritin trending up; continue deferasirox",
      "plan": "1. Post-transfusion monitoring x 2 hours \u2014 no reaction\n2. Recheck CBC in 2 weeks\n3. Next transfusion anticipated in 2-3 weeks\n4. Hematology follow-up 02/05/2025"
    },
    {
      "id": "V002",
      "date": "11/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Eduardo Reyes, MD",
      "cc": "Follow-up: DM2, HTN, MDS",
      "hpi": "66-year-old female for chronic disease management. MDS stable \u2014 transfusion-dependent, followed by hematology. DM well-controlled. BP at goal. Reports fatigue between transfusions but functional. No bleeding, bruising, or infections.",
      "exam": "General: Pale, NAD. HEENT: Pale conjunctivae. CV: RRR, I/VI systolic murmur. Lungs: CTAB. Abdomen: Soft, NT. Extremities: No edema. Skin: No petechiae or bruising.",
      "assessment": "1. MDS \u2014 transfusion-dependent; hematology managing\n2. T2DM \u2014 A1c 7.2%, at goal\n3. HTN \u2014 controlled\n4. Iron overload \u2014 on chelation",
      "plan": "1. Continue current medications\n2. A1c recheck in 3 months\n3. Coordinate with hematology for transfusion schedule\n4. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "AHTR Workup",
      "results": [
        {
          "test": "Plasma hemoglobin (free)",
          "value": "Elevated \u2014 pink/red plasma",
          "unit": "",
          "ref": "Clear",
          "flag": "H"
        },
        {
          "test": "Direct Coombs (DAT)",
          "value": "Positive \u2014 IgG + C3d on RBCs",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Plasma haptoglobin",
          "value": "Undetectable",
          "unit": "mg/dL",
          "ref": "30-200",
          "flag": "L"
        },
        {
          "test": "LDH",
          "value": "2800",
          "unit": "U/L",
          "ref": "100-220",
          "flag": "H"
        },
        {
          "test": "Urine \u2014 hemoglobinuria",
          "value": "Dark red \u2014 positive for Hgb",
          "unit": "",
          "ref": "Clear",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/10/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD092",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/01/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-521",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 \u2014 Prevnar 20)",
      "date": "01/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-088",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-410",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Sickle cell trait, HTN, deceased at 72 (stroke)",
    "Father: T2DM, prostate cancer, deceased at 70",
    "Sister: Breast cancer at age 60, alive",
    "Brother: HTN, alive at 62"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired nurse"
    ],
    [
      "Marital",
      "Widowed; lives with son"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Denies \u2014 stopped due to MDS"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Limited due to fatigue; walks short distances"
    ],
    [
      "Housing",
      "Lives with son in single-family home"
    ],
    [
      "Safety",
      "Denies IPV; no firearms; fall precautions discussed"
    ],
    [
      "Advance Directive",
      "Health care proxy: son Pierre Fontaine; DNR/DNI NOT designated"
    ]
  ],
  "meta": {
    "caseId": "acute-hemolytic-transfusion-reaction",
    "diagnosis": "Acute Hemolytic Transfusion Reaction \u2014 ABO Incompatibility",
    "acuity": 1,
    "presentation": "Hematologic Emergency",
    "category": "hematologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Gloria appears anxious and shaken by her symptoms, particularly the dark urine which frightened her given her medical background as a nurse. She is cooperative and articulate about her symptoms, speaking with clinical precision but showing visible distress about this deviation from her usual transfusion routine.",
    "interviewQuestions": [
      "Tell me more about when your symptoms started after the transfusion",
      "Can you describe the back pain you experienced?",
      "What did your urine look like this morning compared to normal?",
      "Did you have any fever, chills, or shaking after the transfusion?",
      "Have you ever had a reaction to a blood transfusion before?",
      "Did you experience any nausea, vomiting, or shortness of breath?",
      "How many blood transfusions have you received for your MDS?",
      "Did the nursing staff mention anything unusual about yesterday's transfusion?",
      "Are you experiencing any chest pain or difficulty breathing now?",
      "Have you noticed any yellowing of your skin or eyes?",
      "What medications are you currently taking?",
      "Do you have any known drug allergies?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "It started about six hours after my transfusion finished yesterday evening. I was home watching TV when I suddenly felt terrible - the chills and back pain hit me like a truck.",
      "character": "The back pain was this deep, severe aching in my lower back, different from any back pain I've had before. The chills were intense - I couldn't get warm no matter how many blankets I used.",
      "location": "The pain was mainly in my lower back, right around my kidneys. It didn't really radiate anywhere else, just stayed right there.",
      "severity": "The back pain was about an 8 out of 10 - really severe. The chills were awful too. I could barely function, just had to lie down.",
      "aggravating": "Nothing really made it worse, it was just constant and severe from the start.",
      "relieving": "I tried some acetaminophen but it barely touched the pain. Nothing really helped much.",
      "associated": "Yes, I had severe chills, felt nauseous, and this morning my urine was dark brown like tea. I've also felt weak and dizzy.",
      "denies": "No chest pain, no trouble breathing, no rash or itching. No diarrhea or abdominal pain.",
      "history": "Never. I've been getting transfusions every 3-4 weeks for the past two years and never had anything like this happen.",
      "medications": "Amlodipine 5mg daily; Metformin 500mg BID; Deferasirox 360mg daily; Folic Acid 1mg daily; Acetaminophen 650mg PRN",
      "allergies": "Ibuprofen, IV Contrast (Iodinated)",
      "family": "My mother had sickle cell trait and high blood pressure. My father had diabetes and prostate cancer. My sister had breast cancer.",
      "social": "I'm a retired nurse, widowed, living with my son. I never smoked and stopped drinking when I was diagnosed with MDS. No drug use."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Conjunctival and scleral examination",
      "Skin color and jaundice assessment",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination with hepatosplenomegaly assessment",
      "Costovertebral angle tenderness",
      "Lymph node examination",
      "Neurologic assessment for confusion or altered mental status",
      "Urine dipstick examination"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 145/85 (elevated from baseline), HR 105 (tachycardic), Temp 100.2\u00b0F (low-grade fever), RR 18, SpO2 97% on room air",
      "Conjunctival and scleral examination": "Mild scleral icterus present, conjunctival pallor consistent with known anemia",
      "Skin color and jaundice assessment": "Subtle yellow discoloration of skin, particularly noticeable in natural light",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, gallops, or rubs. No peripheral edema.",
      "Pulmonary examination": "Clear to auscultation bilaterally, no wheezes, rales, or rhonchi",
      "Abdominal examination with hepatosplenomegaly assessment": "Soft, non-tender, mild splenomegaly palpable (known from MDS), no hepatomegaly",
      "Costovertebral angle tenderness": "Mild bilateral CVA tenderness, more pronounced on the right",
      "Lymph node examination": "No significant lymphadenopathy",
      "Neurologic assessment for confusion or altered mental status": "Alert and oriented x3, no focal neurologic deficits, appears fatigued but mentally clear",
      "Urine dipstick examination": "Dark amber/brown urine, positive for hemoglobin, trace protein, no nitrites or leukocyte esterase"
    },
    "ddxTargets": [
      "AHTR \u2014 ABO incompatibility (correct)",
      "Febrile non-hemolytic transfusion reaction \u2014 fever only, no hemolysis markers, no DIC risk; treat with antipyretic, can restart",
      "Allergic transfusion reaction \u2014 urticaria \u00b1 bronchospasm, no hemolysis markers; antihistamine \u00b1 epinephrine",
      "Bacterial contamination of unit \u2014 fever + hypotension but Gram stain/culture of unit distinguishes",
      "Delayed hemolytic reaction \u2014 occurs 5-10 days post-transfusion; less acute",
      "TRALI \u2014 pulmonary infiltrates, not flank pain/hematuria; different pathophysiology"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the patient's known MDS and assume symptoms are related to disease progression rather than considering transfusion-related complications",
      "prematureClosure": "The delayed onset (6 hours post-transfusion) might lead to dismissing transfusion reaction as the cause, settling on other diagnoses too quickly",
      "availabilityBias": "Recent exposure to sepsis cases might bias toward infectious causes, overlooking the hemolytic component suggested by dark urine and back pain"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, let's think about transfusion reactions. What types exist, and how might their timing and presentation differ? Consider both immediate and delayed reactions in your differential.",
      "phase5": "You've gathered excellent information about the timing and constellation of symptoms. The dark urine is particularly telling - what does hemoglobinuria suggest about the underlying pathophysiology? How does this help narrow your differential?",
      "finalDebrief": "This case illustrates how acute hemolytic transfusion reactions present with the classic triad of fever, back pain, and hemoglobinuria. Notice how the timing, symptom constellation, and physical findings all pointed toward intravascular hemolysis. What key steps in the transfusion process might have prevented this ABO incompatibility?",
      "final": "Diagnosis: AHTR \u2014 ABO incompatibility. Key learning: (1) STOP is the first intervention \u2014 immediately, before even calling for help. Even 10mL of incompatible blood can be fatal. Keep IV access to administer saline. (2) ABO incompatibility mechanism: pre-formed IgM antibodies against donor ABO antigens \u2192 complement activation \u2192 intravascular hemolysis \u2192 free hemoglobin \u2192 renal tubular precipitation. (3) Triad of symptoms: fever/rigors + flank/back pain (hemoglobin in renal tubules) + hemoglobinuria (dark red urine). In anesthetized patients, only hypotension and hemoglobinuria may be seen. (4) Investigations: free plasma Hgb (pink plasma), haptoglobin (undetectable \u2014 consumed binding free Hgb), direct Coombs (positive), urinalysis (hemoglobinuria). (5) AKI prevention: IV NS at 200-300mL/hr to maintain urine output >1mL/kg/hr. Furosemide if oliguric. DIC monitoring: check PT, PTT, fibrinogen, D-dimer every 4-6 hours. Most fatalities are from DIC and AKI, not the hemolysis itself."
    }
  }
};
