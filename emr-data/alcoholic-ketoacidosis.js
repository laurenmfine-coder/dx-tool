
window.EMR_DATA = {
  "patient": {
    "name": "James Brennan",
    "patientHPI": "I've been sober for about six weeks now after I relapsed back in October, and I'm going to AA meetings three times a week. My appetite is coming back and I'm slowly gaining some weight back, plus I'm taking those vitamins you prescribed again.",
    "dob": "06/28/1979",
    "age": 46,
    "sex": "Male",
    "mrn": "RDX-2025-53817",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Anthony Reyes, MD",
    "pharmacy": "CVS Pharmacy \u2014 2800 N Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "9505 S Halsted St, Minneapolis, MN 55407",
    "phone": "(954) 555-6192",
    "email": "j.brennan79@email.com",
    "emergencyContact": {
      "name": "Kevin Brennan (Brother)",
      "phone": "(954) 555-6208"
    },
    "chiefComplaint": "Confusion and vomiting after heavy drinking"
  },
  "problems": [
    {
      "problem": "Alcoholic ketoacidosis \u2014 high anion gap metabolic acidosis",
      "icd": "E15",
      "onset": "2024",
      "status": "Active",
      "notes": "Danny Walsh, 38M \u2014 chronic heavy alcohol use, stopped drinking 24h ago after 2 days of vomiting. Now confused, tachycardic, diffuse abdominal pain. AG 24, pH 7.22, ketones strongly positive, glucose 68."
    },
    {
      "problem": "Hypoglycemia 68 \u2014 impaired gluconeogenesis",
      "icd": "E16.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Alcohol inhibits gluconeogenesis. Low glycogen stores from poor nutrition. Glucose may be low or normal in AKA (unlike DKA where glucose is elevated)."
    },
    {
      "problem": "Thiamine deficiency \u2014 Wernicke risk",
      "icd": "E51.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Give thiamine before dextrose \u2014 essential in all alcoholic patients."
    }
  ],
  "medications": [
    {
      "name": "Thiamine 500mg IV \u2014 BEFORE dextrose",
      "sig": "Mandatory. Glucose before thiamine in thiamine-depleted patient \u2192 Wernicke encephalopathy.",
      "prescriber": "Emergency",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "D5 normal saline \u2014 dextrose + volume",
      "sig": "Glucose corrects hypoglycemia and suppresses lipolysis \u2192 reduces ketone production. Volume corrects dehydration. Do NOT use insulin (not DKA \u2014 insulin not indicated and dangerous).",
      "prescriber": "Emergency",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 IV infusion"
    },
    {
      "name": "Antiemetics \u2014 ondansetron 4mg IV",
      "sig": "Control vomiting to allow resumption of oral intake. Continued vomiting perpetuates the cycle.",
      "prescriber": "Emergency",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Disulfiram",
      "type": "Drug",
      "reaction": "Hepatotoxicity \u2014 LFTs tripled during trial",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/05/2026",
      "bp": "132/78",
      "hr": 76,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "135 lbs",
      "ht": "5'10\"",
      "bmi": 19.4,
      "setting": "PCP Office"
    },
    {
      "date": "08/18/2025",
      "bp": "118/72",
      "hr": 82,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "97%",
      "wt": "130 lbs",
      "ht": "5'10\"",
      "bmi": 18.7,
      "setting": "PCP Office"
    },
    {
      "date": "03/22/2025",
      "bp": "104/62",
      "hr": 112,
      "rr": 24,
      "temp": "97.8\u00b0F",
      "spo2": "97%",
      "wt": "126 lbs",
      "ht": "5'10\"",
      "bmi": 18.1,
      "setting": "ED"
    },
    {
      "date": "09/10/2024",
      "bp": "108/66",
      "hr": 106,
      "rr": 22,
      "temp": "98.0\u00b0F",
      "spo2": "98%",
      "wt": "128 lbs",
      "ht": "5'10\"",
      "bmi": 18.4,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/05/2026",
      "type": "Primary Care",
      "provider": "Dr. Anthony Reyes, MD",
      "cc": "Follow-up: alcohol use disorder, depression, chronic pancreatitis",
      "hpi": "46-year-old male presenting for follow-up. Reports he has been sober for approximately 6 weeks after relapse in October 2025. Attending AA meetings 3x/week. Appetite improved, gaining weight slowly. Reports compliance with thiamine and folic acid. Sertraline restarted after period of noncompliance. Mood improving. Mild intermittent epigastric pain, controlled with pancrelipase and omeprazole. No nausea or vomiting currently.",
      "exam": "General: Thin, cachectic-appearing male, NAD. HEENT: Sclera anicteric. Mild glossitis. CV: RRR, tachycardic at 76. Lungs: CTAB. Abdomen: Soft, mild epigastric tenderness, no hepatomegaly. Extremities: No edema. Neuro: A&O x3, mild bilateral hand tremor at rest.",
      "assessment": "1. Severe AUD \u2014 currently 6 weeks sober; attending AA\n2. Chronic pancreatitis \u2014 stable, on enzyme replacement\n3. Malnutrition \u2014 weight improving\n4. MDD \u2014 restarted sertraline\n5. Alcoholic liver disease \u2014 stable",
      "plan": "1. Continue thiamine, folic acid, multivitamin\n2. Naltrexone 50mg daily discussed \u2014 patient agrees to trial\n3. Continue sertraline; assess in 4 weeks\n4. Lab work: CMP, CBC, lipase, magnesium, phosphorus\n5. Substance abuse counselor follow-up\n6. RTC 4 weeks"
    },
    {
      "id": "V002",
      "date": "03/22/2025",
      "type": "ED",
      "provider": "Dr. James Park, MD (Emergency Medicine)",
      "cc": "Nausea, vomiting, abdominal pain, confusion x 2 days",
      "hpi": "46-year-old male with history of severe AUD and chronic pancreatitis brought in by brother. Reports 5-day alcohol binge (vodka, approximately 1 fifth/day) followed by 2 days of intractable vomiting, inability to tolerate food or liquids, and diffuse abdominal pain. Brother reports patient became progressively confused and was found lying on the floor this morning, disoriented. Last known drink was approximately 36 hours ago. Prior history of AKA (2024).",
      "exam": "General: Cachectic, ill-appearing, malodorous. Diaphoretic. HEENT: Dry mucous membranes, sclera anicteric. CV: Tachycardic, regular. Lungs: Kussmaul respirations, CTAB. Abdomen: Diffuse tenderness, especially epigastric, no rebound. Neuro: Lethargic but arousable, oriented to name only. No focal deficits. Asterixis absent.",
      "assessment": "1. Alcoholic ketoacidosis \u2014 classic presentation: binge \u2192 cessation \u2192 vomiting \u2192 starvation \u2192 AMS\n2. Dehydration with electrolyte derangement\n3. Acute-on-chronic pancreatitis \u2014 possible trigger\n4. Alcohol withdrawal risk \u2014 CIWA monitoring",
      "plan": "1. IV D5NS at 250 mL/hr; add dextrose to prevent hypoglycemia\n2. IV thiamine 500mg before glucose administration\n3. Replace K+, Mg2+, phosphorus\n4. IV ondansetron 4mg q6h PRN\n5. CIWA protocol; lorazepam PRN per protocol\n6. NPO; reassess diet when vomiting resolves\n7. Admit to medicine floor"
    },
    {
      "id": "V003",
      "date": "08/18/2025",
      "type": "Primary Care",
      "provider": "Dr. Anthony Reyes, MD",
      "cc": "Post-rehab follow-up; medication management",
      "hpi": "46-year-old male presenting 2 months after completing 30-day inpatient rehabilitation. Reports 3 months of sobriety. Attending outpatient group therapy weekly. Appetite improving. Mood better on sertraline. Mild ongoing epigastric discomfort controlled with enzyme supplementation. Denies cravings currently but acknowledges triggers (work stress, isolation).",
      "exam": "General: Thin but improved from prior. NAD. HEENT: No jaundice. CV: RRR. Lungs: CTAB. Abdomen: Soft, mild epigastric tenderness. Neuro: A&O x3, no tremor.",
      "assessment": "1. AUD \u2014 3 months sober post-rehab\n2. Chronic pancreatitis \u2014 stable\n3. MDD \u2014 improved on sertraline\n4. Malnutrition \u2014 slowly improving",
      "plan": "1. Continue current medications\n2. Discussed naltrexone \u2014 patient defers\n3. Continue outpatient counseling\n4. Nutritional supplementation ongoing\n5. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "AKA Assessment",
      "results": [
        {
          "test": "pH (venous)",
          "value": "7.22",
          "unit": "",
          "ref": "7.32-7.42",
          "flag": "L"
        },
        {
          "test": "Anion gap",
          "value": "24",
          "unit": "mEq/L",
          "ref": "8-12",
          "flag": "H"
        },
        {
          "test": "Glucose",
          "value": "68",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "L"
        },
        {
          "test": "Beta-hydroxybutyrate",
          "value": "Strongly positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "2.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/15/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-348",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "11/05/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-810",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Hepatitis A (Havrix) (2/2)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B (Engerix-B) (3/3)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Alcohol use disorder, Liver cirrhosis, deceased at 62",
    "Mother: Depression, Hypertension, alive at 72",
    "Brother: Alcohol use disorder (in recovery), alive at 49",
    "Sister: Healthy, alive at 43"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Unemployed; formerly auto mechanic; last worked 2024"
    ],
    [
      "Marital",
      "Divorced (2020); no children"
    ],
    [
      "Tobacco",
      "Current smoker \u2014 1 PPD x 20 years (20 pack-year)"
    ],
    [
      "Alcohol",
      "Severe AUD \u2014 binge pattern; vodka primarily; currently 6 weeks sober"
    ],
    [
      "Drugs",
      "Denies current; prior marijuana use"
    ],
    [
      "Exercise",
      "Minimal; short walks occasionally"
    ],
    [
      "Housing",
      "Rents efficiency apartment; lives alone; brother nearby"
    ],
    [
      "Safety",
      "Denies IPV; fall risk when intoxicated; seatbelt usually"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "alcoholic-ketoacidosis",
    "diagnosis": "Alcoholic Ketoacidosis (AKA)",
    "acuity": 2,
    "presentation": "Altered Mental Status",
    "category": "metabolic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "James appears tired and somewhat withdrawn but cooperative, with mild confusion and difficulty concentrating. He speaks slowly but is forthcoming about his medical history, showing some anxiety about his condition while maintaining hope about his recent sobriety.",
    "interviewQuestions": [
      "Can you tell me what brought you in today and when you first noticed feeling unwell?",
      "Have you been eating and drinking normally over the past few days?",
      "Any nausea, vomiting, or abdominal pain recently?",
      "How has your breathing been - any shortness of breath or rapid breathing?",
      "Have you had any chest pain or heart palpitations?",
      "When was your last drink of alcohol, and have you had any withdrawal symptoms?",
      "Have you been taking your prescribed medications regularly?",
      "Any recent infections, fever, or feeling sick?",
      "Have you had episodes like this before?",
      "Any changes in urination or excessive thirst?",
      "Have you lost any weight recently or had decreased appetite?",
      "Any family history of diabetes or metabolic conditions?",
      "Have you been under any unusual stress or had any major life changes recently?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing right now. Could you repeat that or ask it differently?",
      "onset": "I started feeling really weak and confused yesterday morning. My friend found me acting strange and brought me here because I wasn't making much sense.",
      "character": "I feel really weak and tired, like I can barely think straight. Everything feels foggy and I'm having trouble concentrating on what you're saying.",
      "location": "It's not really pain anywhere specific, just feeling awful all over. Maybe some mild stomach discomfort but nothing sharp.",
      "severity": "I'd say the confusion and weakness is about a 7 out of 10. I can barely function normally and feel like I might pass out.",
      "aggravating": "I think not eating much the past few days made it worse. I've been stressed about staying sober and lost my appetite.",
      "relieving": "Nothing really helps. I tried lying down but still feel terrible. Maybe drinking some water helped a little.",
      "associated": "I've been breathing a bit faster than usual and feeling nauseous. Haven't thrown up but came close a few times.",
      "denies": "No fever, no chest pain, no diarrhea. Haven't been urinating more than usual and no vision changes.",
      "history": "I've never had anything exactly like this before, though I've had bad withdrawal episodes in the past when I stopped drinking.",
      "medications": "Thiamine 100mg daily; Folic Acid 1mg daily; Multivitamin daily; Omeprazole 20mg daily; Sertraline 100mg daily; Pancrelipase 10,000 units with meals",
      "allergies": "Disulfiram",
      "family": "My dad died from liver problems related to drinking when he was 62. My mom has depression and high blood pressure. My brother also struggles with alcohol but he's been sober for three years now.",
      "social": "I'm unemployed right now, used to be an auto mechanic. I'm divorced and smoke about a pack a day. I've been sober for six weeks now after my last relapse in October. I go to AA three times a week and I'm really trying to stay clean this time."
    },
    "examManeuvers": [
      "Mental status examination and Glasgow Coma Scale",
      "Vital signs including respiratory rate and pattern",
      "Cardiovascular examination including heart rate and rhythm",
      "Abdominal examination for tenderness and organomegaly",
      "Assessment for dehydration and volume status",
      "Neurological examination including reflexes and coordination",
      "Respiratory examination and assessment of breathing pattern",
      "Skin examination for jaundice or other stigmata",
      "Assessment for alcohol withdrawal signs",
      "Orthostatic vital signs"
    ],
    "examFindings": {
      "Mental status examination and Glasgow Coma Scale": "GCS 14 (E4V4M6), confused and disoriented to time, slow to respond to questions, difficulty with concentration",
      "Vital signs including respiratory rate and pattern": "RR 22, slightly tachypneic with deep respirations suggestive of compensatory hyperventilation",
      "Cardiovascular examination including heart rate and rhythm": "Regular rate and rhythm, no murmurs, mild tachycardia at 76 bpm",
      "Abdominal examination for tenderness and organomegaly": "Mild epigastric tenderness, liver edge palpable 2cm below costal margin, no rebound or guarding",
      "Assessment for dehydration and volume status": "Mild dehydration with slightly dry mucous membranes, skin tenting present",
      "Neurological examination including reflexes and coordination": "Reflexes intact but slightly hyperreflexic, mild tremor in hands, coordination intact",
      "Respiratory examination and assessment of breathing pattern": "Clear lung fields bilaterally, deep regular respirations with slight fruity odor to breath",
      "Skin examination for jaundice or other stigmata": "Mild scleral icterus, no spider angiomata, some muscle wasting consistent with chronic illness",
      "Assessment for alcohol withdrawal signs": "Mild tremor present, no hallucinations or seizure activity, CIWA score 8",
      "Orthostatic vital signs": "Mild orthostatic changes: lying 132/78 HR 76, standing 128/82 HR 84"
    },
    "ddxTargets": [
      "Alcoholic ketoacidosis (correct)",
      "DKA \u2014 glucose elevated (not low/normal); type 1 or 2 diabetes history; insulin deficiency",
      "Starvation ketosis \u2014 ketonemia without acidosis; milder; no alcohol history",
      "Lactic acidosis \u2014 lactate elevated here but not dominant; sepsis, metformin, cyanide",
      "Methanol/ethylene glycol poisoning \u2014 osmolar gap elevated; specific toxicology screen"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on alcohol withdrawal given his history of AUD and recent sobriety, potentially missing the metabolic ketoacidosis component",
      "prematureClosure": "May quickly assume this is simple withdrawal or intoxication without fully investigating the metabolic derangement causing altered mental status",
      "availabilityBias": "Tendency to think of diabetic ketoacidosis first when seeing ketoacidosis, potentially overlooking alcoholic ketoacidosis in non-diabetic patients"
    },
    "coachPrompts": {
      "phase2": "Looking at this 46-year-old man with altered mental status and a significant alcohol history, what metabolic complications might you be concerned about in someone who recently stopped drinking? Consider both the direct effects of alcohol cessation and the metabolic consequences of poor nutrition.",
      "phase5": "You've identified a patient with altered mental status, mild dehydration, and compensatory hyperventilation. Given his alcohol history and recent poor oral intake, what specific laboratory studies would help you differentiate between the various causes of metabolic acidosis?",
      "finalDebrief": "This case illustrates how alcoholic ketoacidosis can present similarly to diabetic ketoacidosis but occurs in non-diabetic patients with alcohol use disorder. The key differentiators include the absence of significant hyperglycemia, the association with recent cessation of alcohol and poor oral intake, and the presence of ketosis with anion gap acidosis. How did your differential diagnosis evolve as you gathered more information about his recent sobriety and nutritional status?",
      "final": "Diagnosis: alcoholic ketoacidosis. Key learning: (1) AKA mechanism: alcohol inhibits gluconeogenesis + poor oral intake \u2192 glycogen depletion \u2192 lipolysis \u2192 free fatty acid oxidation \u2192 ketone production (predominantly beta-hydroxybutyrate). The NADH/NAD+ ratio shift from alcohol metabolism drives the process. (2) AKA vs DKA: key distinction is glucose. AKA = low or normal glucose. DKA = elevated glucose. Both have anion gap metabolic acidosis and ketonemia. AKA does NOT require insulin \u2014 giving insulin in AKA risks worsening hypoglycemia. (3) Beta-hydroxybutyrate dominates over acetoacetate in AKA (due to high NADH). Standard urine/serum ketone tests detect acetoacetate \u2014 may UNDERESTIMATE ketone burden in AKA. Serum beta-hydroxybutyrate is the correct test. (4) Treatment: thiamine THEN dextrose (corrects hypoglycemia and suppresses lipolysis), volume resuscitation, antiemetics, electrolyte repletion (Mg, K, phosphate \u2014 all depleted in alcoholics). Ketosis resolves within 12-24h with treatment. (5) Wernicke rule: thiamine 500mg IV BEFORE any glucose in every alcoholic patient, every time."
    }
  }
};
