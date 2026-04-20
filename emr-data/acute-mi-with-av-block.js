
window.EMR_DATA = {
  "patient": {
    "name": "Raymond Brooks",
    "patientHPI": "I've been having trouble catching my breath when I climb stairs or walk more than a couple blocks these past few weeks. Sometimes my jaw feels tight and heavy when I'm walking, but it goes away when I sit down and rest. I'm worried because this is new for me.",
    "dob": "09/14/1958",
    "age": 67,
    "sex": "Male",
    "mrn": "RDX-2025-20481",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B with United Healthcare Supplement",
    "pcp": "Dr. David Tanaka, MD",
    "pharmacy": "CVS Pharmacy \u2014 2901 Stirling Rd, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black or African American",
    "address": "3462 Ash St, Memphis, TN 38107",
    "phone": "(954) 555-1842",
    "email": "r.brooks58@email.com",
    "emergencyContact": {
      "name": "Diane Brooks (Wife)",
      "phone": "(954) 555-1856"
    },
    "chiefComplaint": "Chest pain and lightheadedness"
  },
  "problems": [
    {
      "problem": "Acute inferior STEMI \u2014 RCA occlusion",
      "icd": "I21.19",
      "onset": "2024",
      "status": "Active",
      "notes": "Robert Chen, 64M \u2014 chest pressure, diaphoresis, nausea. ECG: ST elevation II, III, aVF + ST depression I, aVL. HR 38 bpm, complete heart block."
    },
    {
      "problem": "Complete heart block \u2014 AV node ischemia from RCA",
      "icd": "I44.2",
      "onset": "2024",
      "status": "Active",
      "notes": "RCA supplies AV node in 90% of patients. Inferior STEMI + complete heart block = high-grade complication requiring temporary pacing."
    },
    {
      "problem": "Hemodynamic compromise from low heart rate",
      "icd": "R00.1",
      "onset": "2024",
      "status": "Active",
      "notes": "BP 88/60 from low cardiac output. CO = HR \u00d7 SV. HR 38 \u2192 inadequate CO despite maintained SV."
    }
  ],
  "medications": [
    {
      "name": "Atropine 0.5mg IV \u2014 if hemodynamically unstable",
      "sig": "Increases AV conduction via vagolytic effect. May partially restore conduction in inferior MI with AV block. Dose up to 3mg total. Note: often ineffective in complete AV block.",
      "prescriber": "Cardiology/Emergency",
      "start": "2024",
      "refills": 0,
      "status": "Given \u2014 limited response"
    },
    {
      "name": "Transcutaneous pacing \u2014 bridge to transvenous",
      "sig": "External pacing pads. Uncomfortable \u2014 sedation with fentanyl/midazolam. Rate 60-80 bpm. Confirm capture (wide QRS with pacer spike + pulse).",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 transcutaneous"
    },
    {
      "name": "Primary PCI + transvenous pacing \u2014 cath lab",
      "sig": "Reperfusion of RCA is definitive treatment. AV block usually resolves within 24-48 hours of reperfusion. Transvenous temporary pacer placed in cath lab.",
      "prescriber": "Cardiology",
      "start": "2024",
      "refills": 0,
      "status": "Emergent"
    }
  ],
  "allergies": [
    {
      "allergen": "Clopidogrel",
      "type": "Drug",
      "reaction": "CYP2C19 poor metabolizer \u2014 ineffective; ticagrelor used as alternative",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "IV Contrast Dye",
      "type": "Drug",
      "reaction": "Prior anaphylactoid reaction (2019); premedication protocol required",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/20/2026",
      "bp": "132/78",
      "hr": 58,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "212 lbs",
      "ht": "5'10\"",
      "bmi": 30.4,
      "setting": "PCP Office"
    },
    {
      "date": "07/15/2025",
      "bp": "134/80",
      "hr": 62,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "210 lbs",
      "ht": "5'10\"",
      "bmi": 30.1,
      "setting": "Specialist"
    },
    {
      "date": "01/10/2025",
      "bp": "136/82",
      "hr": 64,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "214 lbs",
      "ht": "5'10\"",
      "bmi": 30.7,
      "setting": "PCP Office"
    },
    {
      "date": "07/08/2024",
      "bp": "138/84",
      "hr": 66,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "96%",
      "wt": "216 lbs",
      "ht": "5'10\"",
      "bmi": 31,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/20/2026",
      "type": "Primary Care",
      "provider": "Dr. David Tanaka, MD",
      "cc": "Chronic disease follow-up; new exertional dyspnea",
      "hpi": "67-year-old male with 3-vessel CAD, T2DM, HTN, CKD presenting for follow-up. Reports new onset exertional dyspnea over past 3 weeks \u2014 occurs climbing stairs or walking > 2 blocks. No chest pain, but describes intermittent 'pressure' in jaw with exertion that resolves with rest. Denies NTG use. Has not contacted cardiology. HbA1c 8.1% \u2014 admits to inconsistent insulin dosing. Neuropathy symptoms stable. Reports feeling 'more tired than usual.'",
      "exam": "General: Obese male, appears fatigued. CV: Bradycardic (HR 58), regular, S4 gallop, no murmurs. Lungs: CTAB. Abdomen: Obese, soft, NT. Extremities: Trace bilateral pedal edema. Neuro: Decreased monofilament bilateral feet. Skin: No ulcers.",
      "assessment": "1. CAD \u2014 new exertional symptoms with jaw pressure; concerning for unstable angina or progression\n2. T2DM \u2014 HbA1c 8.1%; suboptimal control\n3. CKD Stage 3a \u2014 stable\n4. New S4 gallop and trace edema \u2014 assess for LV dysfunction",
      "plan": "1. Urgent cardiology referral \u2014 Dr. Singh; stress test vs cath\n2. Increase insulin glargine to 28 units QHS\n3. BMP, CBC, BNP\n4. ECG today \u2014 sinus bradycardia, HR 58, first-degree AV block (PR 240ms), no acute ST changes\n5. Instruct: use NTG for any chest/jaw pressure; call 911 if persistent\n6. RTC 2 weeks"
    },
    {
      "id": "V002",
      "date": "07/15/2025",
      "type": "Specialist",
      "provider": "Dr. Rajiv Singh, MD (Cardiology)",
      "cc": "CAD follow-up; annual risk assessment",
      "hpi": "67-year-old male with known 3-vessel CAD for annual review. Stress test (06/2024) showed mild fixed inferior defect, no reversible ischemia. Reports no chest pain, no dyspnea at baseline level of activity. Continues daily walks 20 min. Medication compliance generally good. ECG: First-degree AV block (PR 220ms), unchanged from prior.",
      "exam": "General: NAD. CV: Bradycardic (HR 62), regular, no S3/S4 today. Lungs: CTAB. Extremities: No edema.",
      "assessment": "1. Three-vessel CAD \u2014 stable angina on medical therapy\n2. First-degree AV block \u2014 stable; attributed to metoprolol\n3. Cardiovascular risk: ASCVD 10-year >20%",
      "plan": "1. Continue current medications\n2. Repeat stress test in 12 months or sooner if symptoms\n3. Continue aspirin, statin, beta-blocker\n4. Discussed revascularization \u2014 patient defers\n5. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Inferior STEMI Assessment",
      "results": [
        {
          "test": "ECG",
          "value": "ST elevation II/III/aVF 3mm. ST depression I/aVL (reciprocal). HR 38 \u2014 complete heart block. Wide escape rhythm.",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "ECG V4R",
          "value": "ST elevation V4R >1mm \u2014 RV infarct",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "Troponin I",
          "value": "0.32",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": "H"
        },
        {
          "test": "BP",
          "value": "88/60",
          "unit": "mmHg",
          "ref": "SBP >90",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "1.3",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "ECG",
      "findings": "Inferior ST elevation pattern. Right-sided leads: ST elevation in V4R. Complete heart block with ventricular escape at 38 bpm.",
      "impression": "Inferior STEMI with RV infarct and complete heart block. Emergent PCI + temporary pacing."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "09/20/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-HD265",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/10/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-748",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "01/2024",
      "site": "Left deltoid IM",
      "lot": "PV24-038",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "06/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-380",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-502",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Fatal MI at age 54 (deceased)",
    "Mother: T2DM, HTN, Stroke at 70, deceased at 76",
    "Brother: CAD (CABG age 58), alive at 62",
    "Sister: T2DM, Hypertension, alive at 60"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired postal worker; retired 2023"
    ],
    [
      "Marital",
      "Married 40 years; wife Diane, age 65"
    ],
    [
      "Tobacco",
      "Former smoker \u2014 quit 2010; 20 pack-year history"
    ],
    [
      "Alcohol",
      "Rare; 1-2 beers on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walks 20 min daily; limited by dyspnea recently"
    ],
    [
      "Housing",
      "Single-family home with wife; two-story (bedroom upstairs \u2014 struggling)"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt always"
    ],
    [
      "Advance Directive",
      "POLST on file \u2014 Full Code; HCP: wife Diane Brooks"
    ]
  ],
  "meta": {
    "caseId": "acute-mi-with-av-block",
    "diagnosis": "Acute Inferior STEMI with Complete Heart Block (Third-Degree AV Block)",
    "acuity": 1,
    "presentation": "Cardiac Emergency",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Raymond appears anxious and slightly pale, frequently placing his hand on his chest during the conversation. He's cooperative and forthcoming but clearly concerned about his worsening symptoms, especially given his family history of heart disease. He speaks in measured tones, occasionally pausing to catch his breath.",
    "interviewQuestions": [
      "Can you describe exactly when these symptoms started?",
      "What does the jaw tightness feel like - heavy, squeezing, or sharp?",
      "How many blocks could you walk before without symptoms?",
      "Have you had any chest pain or pressure?",
      "Do you feel dizzy, lightheaded, or have you fainted?",
      "Any nausea, vomiting, or sweating with the symptoms?",
      "Have you used your nitroglycerin for these episodes?",
      "Any swelling in your legs or ankles recently?",
      "Are you taking all your medications as prescribed?",
      "Any recent changes in your diabetes control?",
      "Have you had any recent illness or infections?",
      "Any palpitations or feeling like your heart skips beats?",
      "Do the symptoms wake you up at night or occur at rest?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you explain that differently?",
      "onset": "It started about three weeks ago. At first it was just when I was doing yard work or going up two flights of stairs, but now it happens when I walk just a couple blocks to the mailbox.",
      "character": "The jaw feeling is hard to describe - it's like a heavy, tight sensation, almost like someone is pressing down on it. The shortness of breath feels like I just can't get enough air in.",
      "location": "The jaw tightness is mostly on the left side and sometimes spreads to my neck. The breathing trouble is just... everywhere, like my whole chest is tight.",
      "severity": "I'd say the jaw thing is about a 6 out of 10 when it happens, and the shortness of breath makes me feel like I have to stop what I'm doing completely. It's really limiting what I can do.",
      "aggravating": "Any physical activity makes it worse - walking, climbing stairs, even carrying groceries. It seems to come on faster now than it did a few weeks ago.",
      "relieving": "When I sit down and rest for about 5-10 minutes, the jaw tightness goes away and I can breathe better. I haven't tried my nitroglycerin yet - should I have?",
      "associated": "Sometimes I feel a little nauseous when the jaw tightness is bad, and I've been more tired than usual. My wife says I look pale lately.",
      "denies": "No sharp chest pain, no fainting, no leg swelling that I've noticed. No fever or chills.",
      "history": "I've never had symptoms quite like this before. I had some chest tightness a few years ago that led to my heart catheterization, but this feels different.",
      "medications": "Aspirin 81mg daily; Atorvastatin 80mg QHS; Metoprolol Succinate 50mg daily; Lisinopril 20mg daily; Insulin Glargine 24 units QHS; Metformin 1000mg BID; Gabapentin 300mg TID; Nitroglycerin 0.4mg SL PRN",
      "allergies": "Clopidogrel, IV Contrast Dye",
      "family": "My father died of a massive heart attack when he was only 54. My brother had bypass surgery at 58. Heart disease definitely runs in my family, which is why I'm so worried about these new symptoms.",
      "social": "I just retired last year from the postal service after 35 years. I quit smoking in 2010 - smoked for about 20 years before that. I barely drink, maybe a beer or two on weekends. Never used drugs."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Lung auscultation",
      "Blood pressure measurement",
      "Heart rate and rhythm assessment",
      "Jugular venous pressure",
      "Lower extremity edema assessment",
      "Peripheral pulse examination",
      "Carotid pulse assessment",
      "Abdominal examination",
      "Neurological assessment for focal deficits"
    ],
    "examFindings": {
      "Cardiac auscultation": "Bradycardic regular rhythm at 58 bpm, S1 and S2 present, no murmurs, rubs, or gallops appreciated",
      "Lung auscultation": "Clear to auscultation bilaterally, no crackles, wheezes, or rhonchi",
      "Blood pressure measurement": "132/78 mmHg, consistent with baseline hypertension",
      "Heart rate and rhythm assessment": "58 bpm, regular but notably bradycardic, strong peripheral pulses",
      "Jugular venous pressure": "Mildly elevated at 8-9 cm H2O",
      "Lower extremity edema assessment": "No pedal edema, no calf tenderness or swelling",
      "Peripheral pulse examination": "2+ radial and dorsalis pedis pulses bilaterally, no bruits",
      "Carotid pulse assessment": "2+ carotid pulses bilaterally without bruits, no delay",
      "Abdominal examination": "Soft, non-tender, no hepatomegaly or masses palpated",
      "Neurological assessment for focal deficits": "Alert and oriented, no focal neurological deficits, sensation intact in hands and feet despite diabetic neuropathy history"
    },
    "ddxTargets": [
      "Inferior STEMI + complete heart block (correct)",
      "Anterior STEMI \u2014 ST elevation in V1-V4, not II/III/aVF; different territory",
      "Hyperkalemia \u2014 wide QRS bradycardia but no ST elevation pattern; K+ level distinguishes",
      "Drug-induced AV block \u2014 beta-blocker/calcium channel blocker overdose; medication history",
      "High-grade (Mobitz II or 2:1) block \u2014 look for P wave relationship on rhythm strip; complete block has AV dissociation",
      "Vagal syncope with bradycardia \u2014 no ST elevation; resolves spontaneously with position"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on stable angina given the classic exertional pattern and known CAD history, potentially missing the acute nature and heart block component",
      "prematureClosure": "May stop investigating after finding exertional symptoms in a known CAD patient without obtaining ECG or considering complete heart block as cause of symptoms",
      "availabilityBias": "Recent cases of stable angina or GERD might lead to underestimating the acute cardiac nature of jaw pain and dyspnea in this diabetic patient"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, what key historical features would help you distinguish between stable angina and an acute coronary syndrome? Given his diabetes and known CAD, what atypical presentations should you be considering?",
      "phase5": "You've identified concerning symptoms in a high-risk patient. His bradycardia of 58 bpm is notable - what could cause both his symptoms and this heart rate? What immediate diagnostic test would be most helpful, and what findings might explain both his presentation and vital signs?",
      "finalDebrief": "This case illustrates how inferior STEMI can present with atypical symptoms like jaw discomfort and dyspnea, especially in diabetic patients. The complete heart block caused his bradycardia and contributed to his symptoms. How did your differential evolve from stable angina to acute MI? What clues pointed toward heart block as a complication?",
      "final": "Diagnosis: inferior STEMI with complete heart block. Key learning: (1) AV block anatomy: RCA supplies the AV node in 90% of people (right dominant circulation). Inferior STEMI from RCA occlusion \u2192 AV nodal ischemia \u2192 high-grade AV block. The block is usually at or above the bundle of His \u2192 narrow escape rhythm (unless bundle involvement). (2) High-degree AV block in inferior STEMI: often resolves within 24-72 hours of reperfusion. Most do NOT require permanent pacing. In contrast, AV block from anterior STEMI (below the His bundle) has worse prognosis and more often requires permanent pacing. (3) RV infarct recognition: V4R lead is critical \u2014 ST elevation >1mm in V4R is diagnostic. Clinical triad: hypotension + elevated JVP + clear lungs. AVOID nitrates in RV infarct \u2014 preload-dependent, nitrates cause severe hypotension. (4) Pacing sequence: atropine (may help in inferior MI) \u2192 transcutaneous pacing (bridge) \u2192 transvenous temporary pacing in cath lab \u2192 primary PCI. (5) Reciprocal changes: ST depression in I and aVL with inferior STEMI = reciprocal changes from the electrical vector, NOT a separate anterior ischemic territory."
    }
  }
};
