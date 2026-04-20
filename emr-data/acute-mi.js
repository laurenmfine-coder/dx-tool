
window.EMR_DATA = {
  "patient": {
    "name": "Gloria Vasquez",
    "patientHPI": "I can still walk about a block before I get winded, which is my usual. I sleep with two pillows like I always have, and I'm not waking up short of breath or anything like that. Overall I feel about the same as my last visit.",
    "dob": "11/04/1952",
    "age": 73,
    "sex": "Female",
    "mrn": "RDX-2025-40322",
    "pronouns": "She/Her",
    "insurance": "Medicare Advantage (Humana Gold Plus)",
    "pcp": "Dr. James Weatherly, MD",
    "pharmacy": "Publix Pharmacy \u2014 4895 Sheridan St, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Cuban American)",
    "address": "575 Iris Blvd, Columbus, OH 43211",
    "phone": "(954) 555-7814",
    "email": "g.vasquez52@email.com",
    "emergencyContact": {
      "name": "Carlos Vasquez (Son)",
      "phone": "(954) 555-7830"
    },
    "chiefComplaint": "Shortness of breath and can't lie flat"
  },
  "problems": [
    {
      "problem": "Anterior STEMI \u2014 cardiogenic shock, Killip IV",
      "icd": "I21.09",
      "onset": "2024",
      "status": "Active",
      "notes": "Frank Miller, 68M \u2014 crushing chest pain + severe dyspnea, BP 76/50, HR 118, SpO2 84%. ECG: ST elevation V1-V5. Pulmonary edema. Cardiogenic shock from massive anterior MI."
    },
    {
      "problem": "Cardiogenic shock \u2014 IABP + vasopressor dependent",
      "icd": "R57.0",
      "onset": "2024",
      "status": "Active",
      "notes": "CI <2.0 L/min/m\u00b2, PCWP >18 mmHg. Primary cardiogenic shock from acute MI. Mechanical circulatory support required."
    },
    {
      "problem": "Acute pulmonary edema \u2014 from LV failure",
      "icd": "J81.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Respiratory failure from elevated LVEDP. Intubation may be necessary if mask CPAP fails."
    }
  ],
  "medications": [
    {
      "name": "Primary PCI \u2014 immediate cath lab activation",
      "sig": "Door-to-balloon <90 min. Primary PCI reduces mortality in cardiogenic shock (SHOCK trial showed survival benefit at 6 months). Do not delay for hemodynamic stabilization before PCI.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "ACTIVATING"
    },
    {
      "name": "Norepinephrine 0.1-0.5 mcg/kg/min \u2014 vasopressor",
      "sig": "First-line vasopressor in cardiogenic shock. Superior to dopamine (less arrhythmogenic \u2014 SOAP II trial). Target MAP \u226565 mmHg.",
      "prescriber": "Cardiology/ICU",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 IV infusion"
    },
    {
      "name": "IABP or Impella \u2014 mechanical circulatory support",
      "sig": "IABP: afterload reduction + coronary perfusion augmentation. Impella (CP or 5.0): actively unloads LV, increases cardiac output. Use before/during PCI in cardiogenic shock.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 pre-PCI"
    }
  ],
  "allergies": [
    {
      "allergen": "Lisinopril",
      "type": "Drug",
      "reaction": "Dry persistent cough",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Nausea and vomiting",
      "severity": "Mild",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "02/14/2026",
      "bp": "92/58",
      "hr": 112,
      "rr": 28,
      "temp": "97.8\u00b0F",
      "spo2": "88%",
      "wt": "158 lbs",
      "ht": "5'3\"",
      "bmi": 28,
      "setting": "ED"
    },
    {
      "date": "11/20/2025",
      "bp": "132/78",
      "hr": 72,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "96%",
      "wt": "156 lbs",
      "ht": "5'3\"",
      "bmi": 27.6,
      "setting": "Cardiology Office"
    },
    {
      "date": "08/12/2025",
      "bp": "128/76",
      "hr": 68,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "154 lbs",
      "ht": "5'3\"",
      "bmi": 27.3,
      "setting": "PCP Office"
    },
    {
      "date": "06/05/2025",
      "bp": "136/82",
      "hr": 74,
      "rr": 18,
      "temp": "98.6\u00b0F",
      "spo2": "96%",
      "wt": "157 lbs",
      "ht": "5'3\"",
      "bmi": 27.8,
      "setting": "Cardiology Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/20/2025",
      "type": "Specialist",
      "provider": "Dr. Anil Patel, MD (Cardiology)",
      "cc": "Routine cardiology follow-up, CHF management",
      "hpi": "73F with known CAD s/p LAD PCI (2019), HFrEF (EF 40%), paroxysmal AFib presents for routine cardiology follow-up. Reports functional class stable at NYHA II. Can walk one block on flat ground before dyspnea. Sleeps on 2 pillows (baseline). Denies PND, orthopnea worsening, chest pain, or palpitations. Reports good medication adherence. Weight stable.",
      "exam": "NAD, resting comfortably. CV: Irregularly irregular rhythm, rate controlled; S1/S2, no S3/S4; 2/6 systolic murmur apex. JVP ~8 cm. Lungs: Bibasilar fine crackles, L > R. Ext: Trace bilateral pedal edema (baseline). ",
      "assessment": "1. HFrEF \u2014 NYHA II, stable on GDMT\n2. CAD s/p PCI \u2014 stable, no anginal symptoms\n3. Paroxysmal AFib \u2014 rate controlled, anticoagulated\n4. T2DM \u2014 deferred to PCP",
      "plan": "1. Continue current GDMT: metoprolol, losartan, spironolactone, furosemide\n2. Echo in 6 months to reassess EF\n3. Continue apixaban\n4. Stress test if symptoms change\n5. Follow-up 6 months or sooner if worsening"
    },
    {
      "id": "V002",
      "date": "08/12/2025",
      "type": "Primary Care",
      "provider": "Dr. James Weatherly, MD",
      "cc": "Diabetes management, routine follow-up",
      "hpi": "73F with T2DM on insulin + metformin presents for quarterly check. A1c improved to 7.6. Reports occasional hypoglycemic episodes (low 60s) in the morning. Denies chest pain or worsening dyspnea. Notes mild fatigue.",
      "exam": "NAD. CV: Irregular rhythm, rate ~72. Lungs: Bibasilar crackles (chronic). Ext: Trace edema bilat. Neuro: Intact.",
      "assessment": "1. T2DM \u2014 A1c at goal, but hypoglycemic episodes\n2. CHF \u2014 stable per cardiology\n3. Fatigue \u2014 multifactorial (CHF, DM, age)",
      "plan": "1. Reduce glargine from 30 to 28 units QHS given hypoglycemia\n2. Continue metformin\n3. Check CBC, TSH, iron studies for fatigue workup\n4. Return 3 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "STEMI Cardiogenic Shock",
      "results": [
        {
          "test": "ECG",
          "value": "ST elevation 4mm V1-V5. Reciprocal changes inferiorly.",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "Troponin I",
          "value": "0.28",
          "unit": "ng/mL (early rise)",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "5.6",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "BP",
          "value": "76/50",
          "unit": "mmHg",
          "ref": "SBP >90",
          "flag": "L"
        },
        {
          "test": "ScvO2",
          "value": "52",
          "unit": "%",
          "ref": "\u226570%",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "Emergent Echo (Bedside)",
      "findings": "Anterior wall and apical akinesis. EF estimated 20-25%. No pericardial effusion. No mechanical complications (no VSD, no papillary muscle rupture).",
      "impression": "Severe anterior wall motion abnormality consistent with acute anterior MI. EF 20-25%. Emergent PCI indicated."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-9102",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Pfizer)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2240",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "04/2024",
      "site": "Left deltoid IM",
      "lot": "PV20-774",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "06/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-338",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "01/2023",
      "site": "Right deltoid IM",
      "lot": "SX23-115",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "03/2023",
      "site": "Right deltoid IM",
      "lot": "SX23-287",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: MI at age 68 (deceased), T2DM",
    "Mother: Hypertension, stroke at age 80, alive at 92",
    "Brother: T2DM, CABG at age 65, alive at 71",
    "Sister: Hypertension, alive at 76"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired school cafeteria manager; retired 2017"
    ],
    [
      "Marital",
      "Widowed (husband deceased 2021 \u2014 lung cancer); lives with son's family"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Rare \u2014 wine at family gatherings only"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Limited to light household activity; walks slowly around block when feeling well"
    ],
    [
      "Housing",
      "Lives with son, daughter-in-law, and two grandchildren in single-family home"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; uses handrails on stairs"
    ],
    [
      "Advance Directive",
      "Full code; DPOA designated (son Carlos)"
    ]
  ],
  "meta": {
    "caseId": "acute-mi",
    "diagnosis": "Acute STEMI \u2014 Cardiogenic Shock (Killip Class IV)",
    "acuity": 1,
    "presentation": "Shortness of Breath",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Gloria appears mildly anxious and uncomfortable, speaking in short sentences due to her breathing difficulty. She is cooperative and forthcoming with information, though she seems somewhat surprised by the sudden change from her baseline functioning. She maintains composure despite obvious distress from her dyspnea.",
    "interviewQuestions": [
      "When did your shortness of breath start today?",
      "Can you describe what the shortness of breath feels like?",
      "Are you having any chest pain or pressure?",
      "Have you noticed any swelling in your legs or feet?",
      "Are you coughing up anything, like foam or blood?",
      "Have you been taking all your medications as prescribed?",
      "When was your last heart catheterization or stress test?",
      "Have you had any nausea, sweating, or jaw pain?",
      "How does this compare to your usual shortness of breath?",
      "Have you been weighing yourself daily?",
      "Did anything trigger this episode?",
      "Are you having any palpitations or irregular heartbeats?",
      "Have you been more tired than usual lately?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing right now because it's hard to catch my breath. Could you ask that differently?",
      "onset": "It started suddenly about 2 hours ago when I was sitting watching TV. I went from feeling fine to barely being able to breathe within minutes.",
      "character": "It feels like I can't get enough air in, like I'm drowning or suffocating. I keep trying to take deep breaths but I can't fill my lungs.",
      "location": "The breathing trouble is all over my chest. I do have some pressure in my chest, but it's not like sharp pain.",
      "severity": "The shortness of breath is about an 8 out of 10. I can barely walk to the bathroom without getting completely winded.",
      "aggravating": "Lying flat makes it much worse. Even trying to talk makes me more short of breath. Any movement makes it harder.",
      "relieving": "Sitting up helps a little bit, but nothing really makes it go away. I tried my usual things but nothing worked.",
      "associated": "I'm coughing up some pink, foamy stuff which really scared me. I feel nauseous and a bit sweaty. My heart feels like it's racing.",
      "denies": "No sharp chest pain, no leg swelling that I've noticed, no fever. I haven't had any falls or injuries.",
      "history": "I've never had breathing this bad before. My usual shortness of breath comes on gradually with walking, but this was completely different - sudden and severe.",
      "medications": "Insulin Glargine 28 units QHS; Metformin 500mg BID; Losartan 100mg daily; Amlodipine 5mg daily; Metoprolol Succinate 50mg daily; Rosuvastatin 20mg QHS; Apixaban 5mg BID; Furosemide 40mg daily",
      "allergies": "Lisinopril, Codeine",
      "family": "My father had a heart attack at 68 and died from it. My mother had a stroke. My brother had to have bypass surgery. Heart problems run in our family.",
      "social": "I'm retired from working in school cafeteria. I live with my son's family since my husband passed. I never smoked, rarely drink, and don't use drugs."
    },
    "examManeuvers": [
      "Cardiovascular examination",
      "Pulmonary examination",
      "JVD assessment",
      "Peripheral edema check",
      "Skin examination",
      "Abdominal examination",
      "Neurological assessment",
      "Oxygen saturation monitoring",
      "Blood pressure in both arms"
    ],
    "examFindings": {
      "Cardiovascular examination": "Tachycardic irregular rhythm at 112 bpm, S3 gallop present, displaced PMI, no murmurs audible over lung sounds",
      "Pulmonary examination": "Bilateral fine crackles extending to mid-lung fields, increased work of breathing, accessory muscle use",
      "JVD assessment": "Jugular venous distension to 8 cm at 45 degrees",
      "Peripheral edema check": "Trace bilateral lower extremity edema, no cyanosis of extremities",
      "Skin examination": "Diaphoretic, pale, cool and clammy skin",
      "Abdominal examination": "Soft, non-tender, no hepatomegaly appreciated",
      "Neurological assessment": "Alert and oriented, anxious appearing, no focal deficits",
      "Oxygen saturation monitoring": "88% on room air, improves to 92% with supplemental oxygen",
      "Blood pressure in both arms": "Left arm 92/58, right arm 90/56"
    },
    "ddxTargets": [
      "STEMI cardiogenic shock \u2014 Killip IV (correct)",
      "Non-cardiogenic pulmonary edema (ARDS) \u2014 no ECG ST elevation; different mechanism",
      "Aortic dissection with hemodynamic compromise \u2014 CT shows aortic dissection; ECG pattern + echo distinguish",
      "Cardiac tamponade \u2014 pulsus paradoxus, no ST elevation, echo shows effusion/compression",
      "Massive PE with cardiogenic shock \u2014 RV strain pattern on ECG, echo shows RV dilation not LV failure",
      "Decompensated CHF without new MI \u2014 chronic history, no acute ST elevation, not acute troponin rise"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known heart failure history and attributing dyspnea solely to CHF exacerbation, missing the acute MI component driving the pulmonary edema",
      "prematureClosure": "May stop investigation after identifying pulmonary edema and heart failure, failing to recognize this as acute cardiogenic pulmonary edema from new MI",
      "availabilityBias": "Recent cases of CHF exacerbation may lead to assuming this is another routine decompensation rather than recognizing acute MI presentation"
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable possibilities for acute dyspnea in this patient with known heart failure. What specific historical details would help you distinguish between an acute coronary event versus other causes? Consider her risk factors and the acuity of presentation.",
      "phase5": "Your examination reveals signs of acute heart failure, but consider the constellation of findings: sudden onset, hemodynamic compromise, and pink frothy sputum in a high-risk patient. What does this clinical picture suggest about the underlying etiology driving her pulmonary edema?",
      "finalDebrief": "This case demonstrates how acute MI can present as isolated dyspnea, especially in elderly patients with diabetes and known CAD. The key was recognizing that her 'usual' heart failure suddenly becoming severe suggested an acute precipitant. The pink frothy sputum, hemodynamic compromise, and sudden onset distinguished this from typical CHF exacerbation.",
      "final": "Diagnosis: STEMI with cardiogenic shock. Key learning: (1) Killip Classification: I = no HF signs, II = S3/rales, III = pulmonary edema, IV = cardiogenic shock (SBP <90 + end-organ hypoperfusion). Killip IV has 30-day mortality of ~60-80% without revascularization. (2) SHOCK trial: primary PCI in STEMI + cardiogenic shock improved 6-month and 1-year mortality compared to initial stabilization then PCI. Do NOT delay PCI to stabilize hemodynamics. (3) Vasopressor choice: norepinephrine over dopamine \u2014 SOAP II trial showed less arrhythmia and improved survival. Dopamine causes significantly more arrhythmias in cardiogenic shock. (4) Mechanical circulatory support: IABP reduces afterload and augments diastolic coronary filling but does not increase cardiac output. Impella CP/5.0 actively pumps blood from LV to aorta \u2014 true mechanical LV support. CS team activation for Impella-supported PCI. (5) Lactate as shock severity marker: lactate >4 mmol/L in cardiogenic shock = high mortality. Lactate clearance (reduction >10% at 2 hours) is associated with improved outcomes."
    }
  }
};
