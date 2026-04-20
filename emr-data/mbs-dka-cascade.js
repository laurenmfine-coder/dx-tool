
window.EMR_DATA = {
  "patient": {
    "name": "Tyler Nguyen",
    "dob": "03/11/2004",
    "age": 20,
    "sex": "Male",
    "mrn": "RDX-2025-91823",
    "pronouns": "He/Him",
    "insurance": "United Healthcare Student Health",
    "pcp": "Dr. James Castillo, MD",
    "pharmacy": "Walgreens — 1800 University Dr, Coral Springs, FL",
    "language": "English",
    "chiefComplaint": "Nausea, vomiting, and belly pain for 2 days — I feel like I'm dying",
    "race": "Asian",
    "address": "4412 NW 9th Ave, Pompano Beach, FL 33064",
    "phone": "(954) 555-2917",
    "email": "tnguyen04@student.edu",
    "emergencyContact": {"name": "Lan Nguyen (Mother)", "phone": "(954) 555-3304"}
  },
  "problems": [
    {"problem": "Type 1 Diabetes Mellitus", "icd": "E10.9", "onset": "2017", "status": "Active", "notes": "Diagnosed age 13, on insulin pump"},
    {"problem": "Diabetic ketoacidosis — prior episode", "icd": "E10.10", "onset": "2021", "status": "Resolved", "notes": "Hospitalized 3 days, pump malfunction"}
  ],
  "medications": [
    {"name": "Insulin Lispro via pump", "sig": "Continuous subcutaneous infusion, basal rate 0.8 units/hr, carb ratio 1:10", "prescriber": "Dr. Castillo", "start": "01/2022", "refills": 12, "status": "Active"},
    {"name": "Ondansetron 4mg ODT PRN nausea", "sig": "Dissolve 1 tablet on tongue every 8 hours as needed", "prescriber": "Dr. Castillo", "start": "09/2024", "refills": 2, "status": "Active"}
  ],
  "allergies": [
    {"allergen": "Sulfa drugs", "type": "Drug", "reaction": "Rash", "severity": "Mild", "verified": "Yes"}
  ],
  "vitals": [
    {"date": "11/20/2024", "bp": "108/72", "hr": 118, "rr": 26, "temp": "99.1°F", "spo2": "98%", "wt": "154 lbs", "ht": "5'9\"", "bmi": 22.8, "setting": "ED"},
    {"date": "08/15/2024", "bp": "118/74", "hr": 68, "rr": 14, "temp": "98.6°F", "spo2": "99%", "wt": "162 lbs", "ht": "5'9\"", "bmi": 24.0, "setting": "PCP Office"},
    {"date": "02/10/2024", "bp": "116/70", "hr": 72, "rr": 14, "temp": "98.4°F", "spo2": "100%", "wt": "160 lbs", "ht": "5'9\"", "bmi": 23.7, "setting": "PCP Office"}
  ],
  "visits": [
    {"date": "08/15/2024", "type": "Office", "provider": "Dr. James Castillo, MD", "summary": "Routine diabetes follow-up. A1c 8.4%. Pump compliance variable — patient admits to missing boluses at social events.", "assessment": "T1DM, suboptimal control. A1c 8.4%. Pump functioning correctly per download. Hypoglycemia unawareness discussed.", "plan": "Continue current pump settings. Diabetes education referral. Repeat A1c in 3 months. Return sooner if ill — sick day rules reviewed."},
    {"date": "11/18/2024", "type": "Office", "provider": "Urgent Care, Dr. Priya Shah", "summary": "Nausea and vomiting 24h, glucose 380 per home glucometer. Pump site inspected — appeared to have kinked cannula. Patient symptomatic but dehydrated.", "assessment": "Hyperglycemia, suspected pump failure contributing. DKA protocol not initiated — urine ketones not checked.", "plan": "Replaced pump site. IV fluids given. Discharged with instructions to check glucose every 2 hours. No urinalysis or blood gas obtained."}
  ],
  "labs": [
    {"date": "11/20/2024", "panel": "Basic Metabolic Panel + Ketones", "results": [
      {"test": "Glucose", "value": "520", "unit": "mg/dL", "ref": "70-100", "flag": "H"},
      {"test": "Sodium", "value": "131", "unit": "mEq/L", "ref": "136-145", "flag": "L"},
      {"test": "Potassium", "value": "5.8", "unit": "mEq/L", "ref": "3.5-5.0", "flag": "H"},
      {"test": "Chloride", "value": "88", "unit": "mEq/L", "ref": "98-106", "flag": "L"},
      {"test": "Bicarbonate", "value": "7", "unit": "mEq/L", "ref": "22-29", "flag": "L"},
      {"test": "BUN", "value": "28", "unit": "mg/dL", "ref": "7-20", "flag": "H"},
      {"test": "Creatinine", "value": "1.4", "unit": "mg/dL", "ref": "0.6-1.2", "flag": "H"},
      {"test": "Anion Gap", "value": "36", "unit": "mEq/L", "ref": "8-12", "flag": "H"},
      {"test": "Beta-hydroxybutyrate", "value": "6.8", "unit": "mmol/L", "ref": "<0.6", "flag": "H"},
      {"test": "pH (venous)", "value": "7.18", "unit": "", "ref": "7.32-7.42", "flag": "L"},
      {"test": "pCO2 (venous)", "value": "22", "unit": "mmHg", "ref": "38-50", "flag": "L"},
      {"test": "Phosphate", "value": "4.8", "unit": "mg/dL", "ref": "2.5-4.5", "flag": "H"}
    ]},
    {"date": "11/20/2024", "panel": "CBC", "results": [
      {"test": "WBC", "value": "14.2", "unit": "K/μL", "ref": "4.5-11.0", "flag": "H"},
      {"test": "Hemoglobin", "value": "15.8", "unit": "g/dL", "ref": "13.5-17.5", "flag": ""},
      {"test": "Hematocrit", "value": "47", "unit": "%", "ref": "41-53", "flag": ""}
    ]}
  ],
  "imaging": [
    {"date": "11/20/2024", "study": "Chest X-ray PA/Lateral", "indication": "Tachypnea, deep breathing pattern", "findings": "Heart size normal. Lungs clear bilaterally. No pneumonia, effusion, or pneumothorax.", "impression": "Normal chest radiograph."}
  ],
  "immunizations": [
    {"vaccine": "Influenza", "date": "10/2024", "lot": "B9921K", "site": "Left deltoid"},
    {"vaccine": "Pneumococcal (PPSV23)", "date": "2017", "lot": "N/A", "site": "Left deltoid"}
  ],
  "familyHistory": [
    {"relation": "Father", "condition": "Type 2 diabetes, hypertension", "age": "49"},
    {"relation": "Paternal aunt", "condition": "Type 1 diabetes", "age": "44"}
  ],
  "socialHistory": {
    "smoking": "Never smoker",
    "alcohol": "Social — reports 2-3 drinks at college parties, insulin management difficult",
    "drugs": "Marijuana occasionally, last use 2 weeks ago",
    "occupation": "College sophomore, part-time barista",
    "exercise": "Intramural soccer 2x/week",
    "diet": "Inconsistent — college cafeteria, skips meals, poor bolus compliance",
    "livingArrangement": "College dormitory with roommate"
  },
  "meta": {
    "caseId": "mbs-dka-cascade",
    "diagnosis": "Diabetic Ketoacidosis (DKA) — Insulin Pump Failure in Type 1 Diabetes",
    "acuity": 2,
    "presentation": "DKA",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Tyler is a thin, visibly ill young man who is lethargic but oriented. He speaks slowly and seems exhausted. His breathing is noticeably deep and labored — each breath is deliberate and exaggerated. He smells faintly sweet. He is confused about why he's so sick when he 'barely eats anything' — he's been too nauseous to eat for two days and assumed that would help his glucose.",
    "interviewQuestions": [
      "Walk me through what's been happening over the last 2-3 days.",
      "When did the nausea and vomiting start?",
      "Have you been able to keep any food or liquids down?",
      "What have your glucose readings been showing at home?",
      "Have you been checking your pump — is it working?",
      "Did you change your pump site recently? When was the last site change?",
      "Have you noticed any fruity or sweet smell to your breath?",
      "Have you been urinating more than usual? More thirsty?",
      "Any belly pain — where is it, and how bad?",
      "Have you had any infections recently — cold, flu, skin infection?",
      "Are you on any medications besides your pump insulin?",
      "How much insulin have you been giving yourself since you got sick?",
      "Have you had DKA before? What happened then?",
      "Did you follow sick day rules — continue insulin even when not eating?"
    ],
    "patientResponses": {
      "default": "Tyler closes his eyes briefly. 'I don't know... I just feel really, really bad. Can you just fix it?'",
      "what's been happening": "'Started feeling sick Saturday. Thought it was a stomach bug — nausea, then vomiting. It kept getting worse. My roommate made me come in because he was scared.'",
      "glucose readings": "'They've been really high — like 400, 500. My pump kept alarming but I was too sick to deal with it.'",
      "pump site": "'I changed it three days ago but I think it might have gotten kinked when I was playing soccer. I was going to change it but then got too sick.'",
      "fruity breath": "'People keep saying that? I can't really smell anything.'",
      "urinating more": "'Yeah, I've been going constantly. And so thirsty — but then I throw up everything I drink.'",
      "belly pain": "'Yeah, actually. Diffuse pain, kind of crampy. My whole belly hurts, not just one spot. I thought I had food poisoning.'",
      "insulin since sick": "'I gave myself a few boluses but I didn't want to go low since I wasn't eating. I thought if I'm not eating I don't need insulin.'",
      "prior DKA": "'Yeah, when I was 17. My pump failed. They said I almost went into a coma. I was in the hospital for 3 days.'",
      "sick day rules": "'I know I'm supposed to keep taking insulin even when sick but... I figured different when you're not eating? My blood sugar going up didn't make sense if I wasn't eating anything.'",
      "infections": "'No fever, no cold. Just this stomach thing.'"
    },
    "examManeuvers": [
      "General appearance — level of consciousness, distress, breathing pattern",
      "Vital signs review and trending",
      "Respiratory pattern assessment — depth, rate, pattern (Kussmaul)",
      "Skin turgor and mucous membrane assessment",
      "Abdominal exam — tenderness, guarding, bowel sounds",
      "Neurological assessment — orientation, GCS",
      "Breath odor assessment",
      "Capillary refill and peripheral perfusion",
      "Point-of-care glucose and ketone testing",
      "IV access and fluid assessment"
    ],
    "examFindings": {
      "General": "Lethargic young man in moderate distress. Alert and oriented x3 but slow to respond. Breathing is deep and labored — Kussmaul respirations at rate 26. Faintly sweet/fruity odor to breath.",
      "Skin": "Dry mucous membranes. Decreased skin turgor. Eyes appear slightly sunken. Lips dry and cracked.",
      "Abdomen": "Diffuse mild-moderate tenderness, no guarding or rigidity. Bowel sounds present but hypoactive. No organomegaly.",
      "Neurological": "GCS 14 (E4V4M6 — appropriate but slow). No focal deficits.",
      "Cardiovascular": "Tachycardic 118 bpm, regular. BP 108/72 — orthostatic. Capillary refill 2.5 seconds.",
      "Respiratory": "Kussmaul respirations — deep, rapid, labored breaths. Rate 26. SpO2 98% on room air despite respiratory compensation.",
      "Point of care": "Glucose: 542 mg/dL. Urine ketones: large (4+). pH 7.18 on venous gas."
    },
    "ddxTargets": [
      "Diabetic ketoacidosis (correct diagnosis)",
      "Hyperosmolar hyperglycemic state (HHS)",
      "Starvation ketosis",
      "Alcoholic ketoacidosis",
      "Sepsis with hyperglycemia",
      "Acute gastroenteritis — coincidental hyperglycemia"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on 'stomach bug/gastroenteritis' based on the presenting GI symptoms and misses the biochemical cascade — the diffuse abdominal pain, nausea, and vomiting in DKA are CAUSED by the DKA, not a separate GI illness. The anion gap of 36 and pH 7.18 make the DKA diagnosis non-negotiable.",
      "premature_closure": "If student does not explain WHY glucose rises in absence of eating — the fasting state causes glucagon-mediated glycogenolysis and gluconeogenesis REGARDLESS of caloric intake. Insulin deficiency unmasks this. Sick day rules exist precisely because illness raises counterregulatory hormones.",
      "availability": "If student assumes infection is precipitating DKA because of the leukocytosis — WBC elevation is common in DKA without infection, driven by stress response and dehydration. Do not reflexively start antibiotics without a clear infection focus."
    },
    "coachPrompts": {
      "phase2": "The student has reviewed the chief complaint: nausea, vomiting, 2 days. Their differential includes gastroenteritis and DKA. Before labs, what historical features — when combined with Type 1 diabetes and a malfunctioning pump — make DKA the leading diagnosis? Trace the biochemical cascade: what happens at the cellular level when insulin is absent for 36-48 hours?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5: {{ddx5}}. The student has noted Kussmaul respirations, fruity breath, diffuse abdominal pain, and tachycardia. Before labs: explain the mechanism behind each of these findings — starting from insulin absence and ending at the clinical sign.",
      "phase7": "Labs reviewed: pH 7.18, HCO3 7, glucose 520, AG 36, K+ 5.8, beta-hydroxybutyrate 6.8. {{ddx5}}. Explain: (1) Why is the potassium 5.8 when total body potassium is actually depleted? (2) Why does CO2 measure 22 on venous gas? (3) What is the danger of treating insulin first before potassium replacement?",
      "final": "Diagnosis: DKA from insulin pump failure. Key MBS learning points: (1) Insulin absence → unopposed glucagon → glycogenolysis + gluconeogenesis + lipolysis → free fatty acids → ketone bodies (acetoacetate, beta-hydroxybutyrate) → anion gap metabolic acidosis. (2) Kussmaul respirations = respiratory compensation: blow off CO2 to raise pH. (3) Fruity breath = acetone (spontaneous decarboxylation of acetoacetate). (4) Abdominal pain in DKA: prostaglandin-mediated, resolves with treatment — important not to pursue surgical abdomen workup reflexively. (5) K+ paradox: acidosis drives K+ extracellularly (H+/K+ exchange), so serum K+ appears high but total body K+ is depleted — DKA treatment drops K+ rapidly, must replace before insulin."
    }
  }
};
