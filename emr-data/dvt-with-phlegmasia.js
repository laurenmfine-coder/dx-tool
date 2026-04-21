
window.EMR_DATA = {
  "patient": {
    "name": "Carmen Delgado-Ruiz",
    "patientHPI": "My left leg has been getting more and more swollen and painful over the past few days, and now it's turned this scary dark blue color. The pain is unbearable and my whole leg feels tight and heavy - I can barely move it.",
    "dob": "05/22/1966",
    "age": 59,
    "sex": "Female",
    "mrn": "RDX-2025-41234",
    "pronouns": "She/Her",
    "insurance": "Humana Gold Plus (Medicare Advantage)",
    "pcp": "Dr. Patricia Morales, MD",
    "pharmacy": "Walgreens \u2014 2701 Stirling Rd, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Puerto Rican)",
    "address": "5453 Hickory Rd, Indianapolis, IN 46203",
    "phone": "(954) 555-4412",
    "email": "c.delgado66@email.com",
    "emergencyContact": {
      "name": "Roberto Ruiz (Husband)",
      "phone": "(954) 555-4428"
    }
  },
  "problems": [
    {
      "problem": "Phlegmasia cerulea dolens \u2014 limb-threatening venous occlusion",
      "icd": "I82.401",
      "onset": "2024",
      "status": "Active",
      "notes": "Robert Chen, 56M \u2014 known pancreatic cancer. Sudden onset massive left leg swelling, blue-purple discoloration, severe pain, and paresthesias. No palpable femoral pulse. Extensive iliofemoral DVT."
    },
    {
      "problem": "Venous gangrene risk \u2014 arterial compromise from venous hypertension",
      "icd": "I82.401",
      "onset": "2024",
      "status": "Active",
      "notes": "Phlegmasia cerulea dolens: massive venous occlusion \u2192 venous hypertension \u2192 arterial inflow compromise \u2192 venous gangrene. Limb loss without urgent treatment."
    },
    {
      "problem": "Underlying malignancy \u2014 Trousseau syndrome",
      "icd": "C25.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Pancreatic cancer is the classic Trousseau syndrome malignancy \u2014 hypercoagulable state from tumor-produced procoagulants. DVT may be the presentation of occult cancer."
    }
  ],
  "medications": [
    {
      "name": "Unfractionated heparin \u2014 full therapeutic anticoagulation IMMEDIATELY",
      "sig": "IV UFH with aPTT target 60-100s. Anticoagulation is mandatory and urgent. Does not dissolve existing clot but prevents extension.",
      "prescriber": "Vascular Surgery/Hematology",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "Catheter-directed thrombolysis OR mechanical thrombectomy \u2014 limb salvage",
      "sig": "Phlegmasia cerulea dolens requires rapid clot removal. CDT (tPA intra-thrombus infusion) or percutaneous mechanical thrombectomy to restore venous outflow. Time-sensitive \u2014 act within hours.",
      "prescriber": "Vascular Surgery/IR",
      "start": "2024",
      "refills": 0,
      "status": "URGENT procedure"
    },
    {
      "name": "Leg elevation \u2014 venous drainage",
      "sig": "Elevate leg above heart level to reduce venous hypertension. Remove all constrictive dressings. Do NOT massage.",
      "prescriber": "Vascular Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Morphine",
      "type": "Drug",
      "reaction": "Severe pruritus and urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Iodinated Contrast",
      "type": "Drug",
      "reaction": "Nausea, flushing (mild reaction during staging CT \u2014 premedication protocol used subsequently)",
      "severity": "Mild",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2026",
      "bp": "96/58",
      "hr": 118,
      "rr": 22,
      "temp": "99.8\u00b0F",
      "spo2": "94%",
      "wt": "138 lbs",
      "ht": "5'4\"",
      "bmi": 23.7,
      "setting": "ED"
    },
    {
      "date": "02/04/2026",
      "bp": "118/74",
      "hr": 82,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "98%",
      "wt": "142 lbs",
      "ht": "5'4\"",
      "bmi": 24.4,
      "setting": "Oncology Infusion Center"
    },
    {
      "date": "11/18/2025",
      "bp": "122/76",
      "hr": 78,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "146 lbs",
      "ht": "5'4\"",
      "bmi": 25.1,
      "setting": "Oncology Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/04/2026",
      "type": "Specialist",
      "provider": "Dr. Alejandro Garcia, MD (Medical Oncology)",
      "cc": "Cycle 8 FOLFIRINOX \u2014 pre-chemo evaluation",
      "hpi": "59F with Stage III pancreatic adenocarcinoma on FOLFIRINOX presents for cycle 8 pre-chemo evaluation. CA 19-9 declined from 842 to 380 \u2014 partial response. Tolerating chemo with grade 2 nausea managed with ondansetron. Reports fatigue (ECOG 1). Weight down 4 lbs from prior cycle \u2014 attributed to decreased appetite. Denies neuropathy, diarrhea, or mucositis. Port site clean, no signs of infection.",
      "exam": "Thin but NAD. CV: RRR. Lungs: CTAB. Abdomen: Soft, mild epigastric tenderness (baseline). Port: R subclavian, no erythema/discharge, good blood return. Ext: No edema, no calf tenderness. Skin: No rash.",
      "assessment": "1. Pancreatic cancer \u2014 partial response to FOLFIRINOX; CA 19-9 declining\n2. Chemotherapy-related fatigue \u2014 grade 1\n3. Weight loss \u2014 ongoing, multifactorial",
      "plan": "1. Proceed with cycle 8 FOLFIRINOX\n2. Restaging CT abdomen/pelvis after cycle 10\n3. Nutritional counseling; increase Creon if steatorrhea\n4. Labs: CBC, CMP, CA 19-9\n5. VTE prophylaxis discussed \u2014 patient declined LMWH due to injection burden; monitored clinically"
    },
    {
      "id": "V002",
      "date": "09/22/2025",
      "type": "Specialist",
      "provider": "Dr. Alejandro Garcia, MD (Medical Oncology)",
      "cc": "New diagnosis pancreatic cancer \u2014 treatment planning",
      "hpi": "59F referred from GI after EUS-guided FNA confirmed pancreatic adenocarcinoma (body/tail). Staging CT shows locally advanced tumor with SMA involvement \u2014 unresectable. No distant metastases. CA 19-9: 842. Reports 15 lb weight loss over 3 months, epigastric pain radiating to back, new-onset diabetes. ECOG 0.",
      "exam": "NAD, thin. Abdomen: Mild epigastric tenderness, no masses palpable. No hepatomegaly. No ascites. Ext: No edema.",
      "assessment": "1. Pancreatic adenocarcinoma, locally advanced (Stage III) \u2014 unresectable",
      "plan": "1. FOLFIRINOX chemotherapy \u2014 port placement scheduled\n2. Genetic counseling ordered (BRCA, Lynch)\n3. Palliative care referral\n4. Start pancrelipase for exocrine insufficiency\n5. Baseline labs, echocardiogram"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Phlegmasia Assessment",
      "results": [
        {
          "test": "D-dimer",
          "value": ">20",
          "unit": "\u03bcg/mL",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "Fibrinogen",
          "value": "620",
          "unit": "mg/dL",
          "ref": "200-400 (elevated \u2014 acute phase)",
          "flag": "H"
        },
        {
          "test": "Venous duplex \u2014 left leg",
          "value": "Iliofemoral DVT \u2014 complete occlusion from common femoral to iliac vein",
          "unit": "",
          "ref": "Patent",
          "flag": "H"
        },
        {
          "test": "Arterial Doppler \u2014 left leg",
          "value": "Diminished but present dorsalis pedis \u2014 early arterial compromise",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "CA 19-9",
          "value": "1840",
          "unit": "U/mL",
          "ref": "<37 \u2014 pancreatic cancer marker",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Venography Pelvis/Lower Extremity",
      "findings": "Complete occlusion of left common femoral, external iliac, and common iliac veins. No IVC extension. Massive soft tissue edema of entire left lower extremity. Skin changes consistent with impending venous gangrene.",
      "impression": "Phlegmasia cerulea dolens. Urgent CDT or mechanical thrombectomy for limb salvage."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8622",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Moderna)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-1504",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap",
      "date": "06/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-344",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "03/2024",
      "site": "Right deltoid IM",
      "lot": "SX24-180",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "05/2024",
      "site": "Right deltoid IM",
      "lot": "SX24-308",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Colorectal cancer at age 68, deceased at 72",
    "Mother: T2DM, HTN, alive at 84",
    "Sister: Breast cancer at age 52 (BRCA2 positive), alive at 56",
    "Brother: Healthy, alive at 62"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Middle school teacher (math) \u2014 on medical leave since 10/2025 for chemotherapy"
    ],
    [
      "Marital",
      "Married 32 years; 2 adult children (ages 28 and 30)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Former social drinker \u2014 stopped at cancer diagnosis"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walks 20 minutes daily when feeling well; reduced activity on chemo weeks"
    ],
    [
      "Housing",
      "Single-family home with husband; adult children live nearby and visit frequently"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; no firearms"
    ],
    [
      "Advance Directive",
      "Living will and DPOA completed at cancer diagnosis; Full code currently; palliative care involved"
    ]
  ],
  "meta": {
    "caseId": "dvt-with-phlegmasia",
    "diagnosis": "Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT",
    "acuity": 1,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Carmen Delgado-Ruiz appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did skin / soft tissue emergency start?",
      "Can you describe exactly how it started \u2014 sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history \u2014 any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
      "onset": "'The symptoms started My left leg has been getting more and more swollen and painful over the past few.'",
      "character": "'It's skin / soft tissue emergency \u2014 it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Metformin 500mg BID; Glipizide 5mg daily; Losartan 50mg daily; Ondansetron 8mg PRN; Pancrelipase (Creon) 36,000 units TID; Dexamethasone 4mg (chemo days only).'",
      "allergies": "'My allergies are Morphine, Iodinated Contrast.'",
      "family": "Father: Colorectal cancer at age 68, deceased at 72  Mother: T2DM, HTN, alive at 84  Sister: Breast cancer at age 52 (BRCA2 positive), alive at 56",
      "social": "Occupation: Middle school teacher (math) \u2014 on medical leave since 10/2025 for chemotherapy  Marital: Married 32 years; 2 adult children (ages 28 and 30)  Tobacco: Never smoker  Alcohol: Former social drinker \u2014 stopped at cancer diagnosis  Drugs: Denies"
    },
    "examManeuvers": [
      "General appearance and level of distress",
      "Vital signs review",
      "Cardiovascular auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Extremity assessment",
      "Skin examination",
      "Targeted system examination"
    ],
    "examFindings": {
      "General appearance and level of distress": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe."
    },
    "ddxTargets": [
      "Phlegmasia cerulea dolens \u2014 venous gangrene risk (correct)",
      "Simple proximal DVT \u2014 much less severe; no color change; no arterial compromise; standard anticoagulation sufficient",
      "Phlegmasia alba dolens (milk leg) \u2014 milder form; white not blue; no cyanosis; arterial compromise absent",
      "Acute arterial occlusion \u2014 pale not cyanotic; absent pulses; arterial source (embolism/thrombosis); different treatment",
      "Compartment syndrome \u2014 tense compartment; pain with passive stretch; arterial cause"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Carmen Delgado-Ruiz's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT (Left Leg) in Trousseau Syndrome (Pancreatic Cancer-Associated VTE, Status Post Declined Prophylaxis). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: phlegmasia cerulea dolens. Key learning: (1) Phlegmasia spectrum: alba dolens (white leg) = edema, pain, white discoloration from venous obstruction without cyanosis. Cerulea dolens (blue leg) = massive venous occlusion causing cyanosis and impending arterial compromise. Venous gangrene = full arterial inflow compromise \u2192 irreversible limb ischemia. (2) Pathophysiology: massive iliofemoral DVT \u2192 severely elevated venous pressure \u2192 interstitial fluid accumulation \u2192 compartment pressure exceeds arterial inflow \u2192 arterial compromise. Vicious cycle leading to gangrene. (3) Trousseau syndrome: migratory thrombophlebitis associated with occult malignancy, especially pancreatic, GI, lung, ovarian cancers. Hypercoagulable state from tumor-produced procoagulants. DVT that is difficult to treat with anticoagulation or recurs should prompt cancer workup. (4) Treatment urgency: phlegmasia cerulea dolens requires immediate anticoagulation + urgent catheter-directed thrombolysis (CDT) or percutaneous mechanical thrombectomy to decompress the venous system. Anticoagulation alone is insufficient \u2014 clot must be removed to restore venous outflow. (5) IVC filter: in phlegmasia from cancer with high PE risk, consider IVC filter placement \u2014 but this is secondary to clot removal. Do not delay CDT for filter placement."
    }
  }
};
