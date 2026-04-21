
window.EMR_DATA = {
  "patient": {
    "name": "Diane Charpentier",
    "patientHPI": "I've been doing well on my usual medications and my energy has been stable, but I realized I forgot to refill my emergency injection that you told me to always keep with me. Everything else seems to be going fine though.",
    "dob": "03/28/1968",
    "age": 56,
    "sex": "Female",
    "mrn": "RDX-2025-84192",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Jennifer Adams, MD",
    "pharmacy": "CVS Pharmacy \u2014 2801 S University Dr, Riverside, FL",
    "language": "English, French",
    "race": "White/Caucasian (French-Canadian descent)",
    "address": "6033 Cedar Blvd, Albuquerque, NM 87103",
    "phone": "(954) 555-2418",
    "email": "d.charpentier@email.com",
    "emergencyContact": {
      "name": "Philippe Charpentier (Husband)",
      "phone": "(954) 555-2420"
    },
    "chiefComplaint": "Weakness and feeling sick for weeks"
  },
  "problems": [
    {
      "problem": "Acute adrenal crisis \u2014 life-threatening",
      "icd": "E27.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Patricia Moore, 48F \u2014 known Addison's disease, missed hydrocortisone for 3 days during GI illness. BP 72/44, HR 124, Na 128, K 6.2, glucose 54. Classic crisis precipitated by physiologic stress without sick-day dose increase."
    },
    {
      "problem": "Hyperkalemia 6.2 \u2014 from mineralocorticoid deficiency",
      "icd": "E87.5",
      "onset": "2024",
      "status": "Active",
      "notes": "Lack of aldosterone \u2192 renal potassium retention \u2192 hyperkalemia. ECG monitoring required."
    },
    {
      "problem": "Hyponatremia 128 \u2014 from mineralocorticoid and glucocorticoid deficiency",
      "icd": "E87.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Mineralocorticoid deficiency \u2192 sodium wasting. Glucocorticoid deficiency impairs free water excretion."
    }
  ],
  "medications": [
    {
      "name": "Hydrocortisone 100mg IV bolus \u2014 IMMEDIATELY",
      "sig": "Do NOT wait for lab confirmation. Give empirically if clinical suspicion high. Hydrocortisone at stress doses has mineralocorticoid activity \u2014 covers both glucocorticoid and mineralocorticoid needs acutely.",
      "prescriber": "Emergency/Endocrinology",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "Normal saline 1L IV bolus \u2014 IMMEDIATELY",
      "sig": "Volume resuscitation. Use NS (not D5W) to correct hyponatremia and hypotension. Glucose also in IV fluid if hypoglycemic.",
      "prescriber": "Emergency",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "Fludrocortisone 0.1mg daily \u2014 after stabilization",
      "sig": "Mineralocorticoid replacement for ongoing management. Not needed acutely if hydrocortisone dose is sufficient (>50mg has mineralocorticoid effect).",
      "prescriber": "Endocrinology",
      "start": "2024",
      "refills": 3,
      "status": "Resuming \u2014 after stabilization"
    }
  ],
  "allergies": [
    {
      "allergen": "Prednisone",
      "type": "Drug",
      "reaction": "Severe insomnia and psychomotor agitation (prefers hydrocortisone)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2025",
      "bp": "78/48",
      "hr": 112,
      "rr": 22,
      "temp": "97.2\u00b0F",
      "spo2": "96%",
      "wt": "128 lbs",
      "ht": "5'5\"",
      "bmi": 21.3,
      "setting": "ED"
    },
    {
      "date": "11/05/2024",
      "bp": "108/68",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "134 lbs",
      "ht": "5'5\"",
      "bmi": 22.3,
      "setting": "PCP Office"
    },
    {
      "date": "05/14/2024",
      "bp": "112/72",
      "hr": 70,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "136 lbs",
      "ht": "5'5\"",
      "bmi": 22.6,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/05/2024",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Adams, MD",
      "cc": "Follow-up: Addison disease, Hashimoto thyroiditis, vitiligo",
      "hpi": "56-year-old female with polyautoimmune syndrome presenting for routine follow-up. Reports stable on hydrocortisone/fludrocortisone regimen. No adrenal crises since last visit. Energy level adequate. TSH stable on levothyroxine 88mcg. Vitiligo stable. Reports she has NOT renewed her emergency Solu-Cortef injection kit \u2014 it expired 3 months ago. Has medical alert bracelet but does not always wear it.",
      "exam": "General: Thin female, well-appearing. HEENT: Depigmented patches periorbital. CV: RRR, no murmur. Lungs: CTA. Abdomen: Soft, NT. Skin: Vitiligo patches on dorsal hands, periorbital areas; hyperpigmentation of palmar creases and buccal mucosa (Addison). Neuro: A&O x3.",
      "assessment": "1. Primary adrenal insufficiency \u2014 stable; EMERGENCY KIT EXPIRED\n2. Hashimoto thyroiditis \u2014 stable on levothyroxine\n3. Vitiligo \u2014 stable",
      "plan": "1. Continue hydrocortisone 15/5mg and fludrocortisone 0.1mg\n2. RENEW Solu-Cortef emergency injection kit \u2014 prescription sent\n3. Stress-dose education reviewed again: double hydrocortisone for fever/illness; IM injection if vomiting\n4. Labs: AM cortisol, ACTH, renin, electrolytes, TSH\n5. STRONGLY advised to wear medical alert bracelet consistently\n6. RTC 6 months"
    },
    {
      "id": "V002",
      "date": "05/14/2024",
      "type": "Specialist",
      "provider": "Dr. Luis Martinez, MD (Endocrinology)",
      "cc": "Annual Addison disease management",
      "hpi": "56-year-old female with Addison disease and Hashimoto thyroiditis for annual endocrine follow-up. Stable on replacement doses. No adrenal crises this year. Tolerating hydrocortisone well. Fludrocortisone dose appears adequate \u2014 no orthostatic symptoms, no salt craving. Husband aware of sick-day rules and emergency injection technique.",
      "exam": "General: Thin but well. HEENT: Vitiligo periorbital. CV: RRR, no orthostatic changes today. Abdomen: Soft. Skin: Buccal and palmar hyperpigmentation stable. No edema.",
      "assessment": "1. Primary adrenal insufficiency \u2014 well-controlled on current doses\n2. Hashimoto thyroiditis \u2014 euthyroid\n3. Autoimmune polyglandular syndrome type 2",
      "plan": "1. Continue current doses\n2. Annual screening: fasting glucose (screen for autoimmune DM), anti-parietal cell antibodies (pernicious anemia screen)\n3. Emergency kit reviewed with patient and husband\n4. RTC 12 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Adrenal Crisis",
      "results": [
        {
          "test": "Sodium",
          "value": "128",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "Potassium",
          "value": "6.2",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "H"
        },
        {
          "test": "Glucose",
          "value": "54",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "L"
        },
        {
          "test": "Cortisol (random \u2014 do not delay treatment)",
          "value": "2.1",
          "unit": "\u03bcg/dL",
          "ref": "Morning >18 \u03bcg/dL",
          "flag": "L"
        },
        {
          "test": "ACTH",
          "value": "<5",
          "unit": "pg/mL",
          "ref": "10-60 (low = secondary/central)",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL852K",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "PF472R",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2nd dose)",
      "date": "06/2023",
      "site": "Left deltoid IM",
      "lot": "SH221P",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "03/2022",
      "site": "Left deltoid IM",
      "lot": "TA212K",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Mother (age 82): Hashimoto thyroiditis, pernicious anemia",
    "Father (age 84): Type 2 Diabetes, CAD",
    "Sister (age 53): Graves disease, vitiligo",
    "Strong family history of autoimmune disorders \u2014 polyautoimmune clustering"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Freelance translator (French/English) \u2014 works from home"
    ],
    [
      "Marital",
      "Married x 28 years; husband Philippe is aware of sick-day rules and emergency injection"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare \u2014 occasional glass of wine"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walks 30 min daily; yoga 2x/week"
    ],
    [
      "Housing",
      "Single-family home with husband"
    ],
    [
      "Safety",
      "Medical alert bracelet (does not always wear); emergency Solu-Cortef kit (EXPIRED); husband trained on IM injection"
    ],
    [
      "Advance Directive",
      "Healthcare proxy: Philippe Charpentier (husband)"
    ]
  ],
  "meta": {
    "caseId": "adrenal-insufficiency",
    "diagnosis": "Acute Adrenal Crisis (Addisonian Crisis) with Hyperkalemia",
    "acuity": 2,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Diane appears noticeably fatigued and anxious, sitting slumped in her chair with a worried expression. She is cooperative but seems somewhat confused about the severity of her symptoms, minimizing her condition while appearing visibly unwell. Her speech is slow and she occasionally pauses mid-sentence as if struggling to concentrate.",
    "interviewQuestions": [
      "Can you tell me more about this weakness and feeling sick - when did it start and how has it progressed?",
      "Have you been taking your hydrocortisone and fludrocortisone as prescribed?",
      "Have you had any recent illness, infection, or stressful events?",
      "Have you had any nausea, vomiting, or diarrhea recently?",
      "Any abdominal pain or cramping?",
      "Have you been able to eat and drink normally?",
      "Any dizziness, especially when standing up?",
      "Have you had any salt cravings or changes in appetite?",
      "Any skin changes or darkening you've noticed?",
      "When was the last time you used your emergency injection?",
      "Have you ever had episodes like this before?",
      "Any chest pain, shortness of breath, or palpitations?",
      "Have you been urinating normally?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating right now. Could you repeat that or ask it differently?",
      "onset": "It started about 2-3 weeks ago, just feeling more tired than usual. But this past week it's gotten much worse - I can barely get out of bed and everything feels like such an effort.",
      "character": "It's this overwhelming weakness and fatigue, like my whole body is just shutting down. I feel nauseated most of the time and everything tastes awful.",
      "location": "The weakness is everywhere - my arms, legs, I can barely lift my head sometimes. My stomach has been cramping on and off.",
      "severity": "The weakness is probably an 8 out of 10 - I couldn't even make it to the kitchen this morning without sitting down. It's completely disrupting my work.",
      "aggravating": "Standing up makes me incredibly dizzy, and any physical activity just wipes me out completely. I feel worse when I haven't eaten, but eating is so hard.",
      "relieving": "Nothing really helps. Lying down helps a little with the dizziness, but the weakness and nausea are always there.",
      "associated": "I've been having nausea and vomiting for the past few days, some diarrhea, terrible stomach cramps, and I'm craving salt like crazy. I've been dizzy and my heart feels like it's racing.",
      "denies": "No chest pain, no trouble breathing at rest, no fever that I know of, no headaches, no vision changes.",
      "history": "I had something similar about 3 years ago when I had the flu and ended up in the hospital. They said I needed to increase my medications when I'm sick, but I've been feeling so awful I keep forgetting doses.",
      "medications": "Hydrocortisone 15mg AM / 5mg PM; Fludrocortisone 0.1mg daily; Levothyroxine 88mcg daily; Solu-Cortef (Hydrocortisone Sodium Succinate) 100mg IM \u2014 Emergency Kit",
      "allergies": "Prednisone",
      "family": "My mother has Hashimoto's thyroiditis and pernicious anemia. My father has diabetes and heart disease. My sister has Graves' disease and vitiligo like me.",
      "social": "I'm a freelance translator working from home, married for 28 years. My husband Philippe knows about my condition and the emergency injection. I don't smoke, rarely drink alcohol, no drugs."
    },
    "examManeuvers": [
      "Orthostatic vital signs",
      "Skin examination for hyperpigmentation",
      "Abdominal examination",
      "Cardiovascular examination",
      "Neurological examination focusing on mental status",
      "Assessment of skin turgor and mucous membranes",
      "Examination for signs of vitiligo",
      "Deep tendon reflexes",
      "Inspection of palmar creases and buccal mucosa"
    ],
    "examFindings": {
      "Orthostatic vital signs": "Significant orthostatic hypotension - BP drops from 78/48 supine to 58/40 standing with HR increase to 135, patient nearly faints",
      "Skin examination for hyperpigmentation": "Diffuse hyperpigmentation noted, especially prominent on knuckles, elbows, and surgical scars",
      "Abdominal examination": "Soft, diffusely tender without rebound or guarding, hypoactive bowel sounds",
      "Cardiovascular examination": "Tachycardic, regular rhythm, no murmurs, weak pulses, delayed capillary refill >3 seconds",
      "Neurological examination focusing on mental status": "Alert but confused and slow to respond, difficulty with concentration, no focal deficits",
      "Assessment of skin turgor and mucous membranes": "Poor skin turgor, dry mucous membranes indicating dehydration",
      "Examination for signs of vitiligo": "Patches of depigmented skin visible on hands and arms consistent with known vitiligo",
      "Deep tendon reflexes": "Hypoactive reflexes throughout, consistent with electrolyte abnormalities",
      "Inspection of palmar creases and buccal mucosa": "Dark pigmentation visible in palmar creases and along gum line"
    },
    "ddxTargets": [
      "Acute adrenal crisis \u2014 primary adrenal insufficiency (correct)",
      "Septic shock \u2014 similar hemodynamics; but cortisol critically low; adrenal crisis can present identically",
      "Hypovolemic shock \u2014 no classic electrolyte pattern; no known adrenal disease",
      "Secondary adrenal insufficiency \u2014 ACTH low (as here); pituitary/hypothalamic cause; no hyperkalemia (aldosterone intact)",
      "Hypoglycemia alone \u2014 glucose low but does not explain BP, sodium, potassium pattern"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the patient's downplaying of symptoms and missing the life-threatening nature of adrenal crisis in a known Addison's patient",
      "prematureClosure": "May stop at simple medication non-compliance without recognizing this is acute adrenal crisis requiring immediate IV steroids",
      "availabilityBias": "Common presentations like gastroenteritis may overshadow the less common but critical adrenal crisis diagnosis"
    },
    "coachPrompts": {
      "phase2": "You've identified some concerning differentials. This patient has known Addison's disease - what specific questions about her medication adherence and recent stressors would be most critical? What red flags in adrenal insufficiency should you be listening for?",
      "phase5": "Given her known adrenal insufficiency, hypotension, and recent GI illness, what is the most likely diagnosis? What immediate interventions does this patient need, and what lab abnormalities would you expect to see?",
      "finalDebrief": "This case illustrates how patients with adrenal insufficiency can rapidly decompensate during stress. The key learning points are recognizing adrenal crisis, understanding sick-day rules, and the importance of immediate IV steroids before lab confirmation. How did your differential evolve as you gathered more information about her missed medications and recent illness?",
      "final": "Diagnosis: acute adrenal crisis. Key learning: (1) Treat first, test later. Never delay hydrocortisone while waiting for cortisol levels \u2014 a patient in adrenal crisis can die within hours. If diagnosis is uncertain, a random cortisol <18 \u03bcg/dL during stress is highly suggestive; <3 \u03bcg/dL is diagnostic. (2) Classic electrolyte triad: hyponatremia + hyperkalemia + hypoglycemia. This pattern in a hypotensive patient = adrenal crisis until proven otherwise. Primary adrenal insufficiency (Addison's): all three present (mineralocorticoid + glucocorticoid deficiency). Secondary adrenal insufficiency: no hyperkalemia (aldosterone intact, only glucocorticoid deficient). (3) Precipitating stressors: illness, surgery, trauma, or simply missing doses during GI illness when absorption is impaired. The 'sick-day rule': double or triple maintenance hydrocortisone dose during illness. (4) Hydrocortisone 100mg IV provides both glucocorticoid AND mineralocorticoid coverage acutely \u2014 fludrocortisone is not needed emergently. (5) After stabilization: identify and treat the precipitating cause, educate on sick-day rules, provide a steroid emergency card and injectable hydrocortisone kit for home."
    }
  }
};
