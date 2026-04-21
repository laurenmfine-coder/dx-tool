
window.EMR_DATA = {
  "patient": {
    "name": "Harold Nguyen",
    "patientHPI": "I'm scheduled for surgery next week to fix the large bulge in my artery that keeps growing, and my doctors want to make sure everything is ready. I've had some heart problems before and my legs get tired when I walk more than a couple blocks, but overall I'm feeling prepared for the procedure.",
    "dob": "05/09/1955",
    "age": 69,
    "sex": "Male",
    "mrn": "RDX-2025-42861",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B with Humana Supplemental",
    "pcp": "Dr. Patricia Ramos, MD",
    "pharmacy": "CVS Pharmacy \u2014 7110 Pines Blvd, Pembroke Pines, FL",
    "language": "English, Vietnamese",
    "race": "Asian",
    "address": "7555 Foxglove Dr, Pittsburgh, PA 15210",
    "phone": "(954) 555-5214",
    "email": "h.nguyen55@email.com",
    "emergencyContact": {
      "name": "Lisa Nguyen (Daughter)",
      "phone": "(954) 555-5232"
    }
  },
  "problems": [
    {
      "problem": "Dilutional coagulopathy \u2014 massive transfusion",
      "icd": "D68.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Robert Chen, 68M \u2014 endovascular AAA repair, unexpected hemorrhage requiring 12 units pRBC. Now: PT 22s, INR 1.9, fibrinogen 94, platelets 68. Dilutional coagulopathy from massive transfusion of packed red cells without FFP."
    },
    {
      "problem": "Massive transfusion definition \u2014 >10 units pRBC in 24h",
      "icd": "D68.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Massive transfusion protocol (MTP) should have been activated. 1:1:1 ratio (pRBC:FFP:platelets) prevents dilutional coagulopathy. Was not initiated \u2014 now treating resultant coagulopathy."
    },
    {
      "problem": "Ongoing surgical hemorrhage \u2014 need coagulation correction",
      "icd": "D68.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Still in OR. Active hemorrhage continues. Coagulation factors must be repleted immediately. Viscoelastic testing (TEG/ROTEM) guides product selection."
    }
  ],
  "medications": [
    {
      "name": "Fresh frozen plasma 4 units \u2014 replace coagulation factors",
      "sig": "FFP contains all clotting factors. Target INR <1.5 for active hemorrhage. Give ahead of lab results if MTP activated (1:1:1 ratio).",
      "prescriber": "Anesthesia/Vascular Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 ongoing"
    },
    {
      "name": "Cryoprecipitate 10 units \u2014 fibrinogen <150",
      "sig": "Cryoprecipitate is the fastest source of fibrinogen. Target fibrinogen >200 mg/dL in surgical hemorrhage. Each unit raises fibrinogen 5-10 mg/dL.",
      "prescriber": "Anesthesia",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Platelets 1 apheresis unit \u2014 target >100K in active hemorrhage",
      "sig": "Platelets consumed with massive transfusion. Target >100K for surgical hemorrhage (higher than non-bleeding threshold of 50K).",
      "prescriber": "Anesthesia",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Clopidogrel",
      "type": "Drug",
      "reaction": "Severe GI bleeding (UGI hemorrhage while on DAPT \u2014 attributed to clopidogrel component)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/08/2025",
      "bp": "148/86",
      "hr": 68,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "96%",
      "wt": "168 lbs",
      "ht": "5'7\"",
      "bmi": 26.3,
      "setting": "PCP Office"
    },
    {
      "date": "08/20/2024",
      "bp": "142/84",
      "hr": 64,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "170 lbs",
      "ht": "5'7\"",
      "bmi": 26.6,
      "setting": "PCP Office"
    },
    {
      "date": "02/12/2024",
      "bp": "138/80",
      "hr": 66,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "97%",
      "wt": "172 lbs",
      "ht": "5'7\"",
      "bmi": 26.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Ramos, MD",
      "cc": "Pre-operative clearance for EVAR",
      "hpi": "69-year-old male presents for pre-operative evaluation prior to endovascular aortic aneurysm repair (EVAR) scheduled 02/10/2025. AAA has grown from 5.5 cm to 6.2 cm over 18 months. History of NSTEMI with PCI (2019) \u2014 cleared by cardiology for surgery. PAD stable \u2014 claudication at 2 blocks. CKD Stage 3a \u2014 creatinine 1.4. On aspirin (held clopidogrel due to prior GI bleed). Reports good exercise tolerance on flat ground. No chest pain, SOB at rest, or syncope.",
      "exam": "General: NAD, thin male. HEENT: WNL. Neck: No bruits. CV: RRR, no murmurs. Lungs: Diminished at bases, no crackles. Abdomen: Pulsatile mass palpable in periumbilical region. Extremities: Diminished DP pulses bilaterally, no ulcers. Neuro: A&O x3.",
      "assessment": "1. AAA 6.2 cm \u2014 EVAR planned\n2. CAD \u2014 stable post-PCI; cardiology cleared for surgery\n3. PAD \u2014 stable claudication\n4. CKD 3a \u2014 hydration protocol for contrast\n5. Pre-op labs and clearance",
      "plan": "1. Pre-op labs: CBC, CMP, coagulation studies, type and screen, UA\n2. Hold aspirin 7 days pre-op per vascular surgery\n3. Hold cilostazol 3 days pre-op\n4. Continue beta-blocker and statin perioperatively\n5. IV hydration protocol for CKD \u2014 pre and post contrast\n6. Sent clearance letter to vascular surgery"
    },
    {
      "id": "V002",
      "date": "08/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Patricia Ramos, MD",
      "cc": "Follow-up: AAA, CAD, PAD, HTN",
      "hpi": "69-year-old male for chronic disease follow-up. AAA last measured 5.8 cm on CT 06/2024. Vascular surgery recommends repair when >5.5 cm \u2014 scheduling EVAR. Claudication stable. No chest pain. Denies syncope or back pain.",
      "exam": "General: NAD. CV: RRR. Lungs: CTAB. Abdomen: Pulsatile mass unchanged. Extremities: Diminished pulses, no ulcers.",
      "assessment": "1. AAA \u2014 5.8 cm, growing; EVAR recommended\n2. CAD \u2014 stable\n3. PAD \u2014 stable",
      "plan": "1. Vascular surgery referral for EVAR planning\n2. Repeat CTA in 3 months\n3. Continue current medications\n4. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Massive Transfusion Coagulopathy",
      "results": [
        {
          "test": "PT/INR",
          "value": "22s / 1.9",
          "unit": "",
          "ref": "12s / <1.2",
          "flag": "H"
        },
        {
          "test": "Fibrinogen",
          "value": "94",
          "unit": "mg/dL",
          "ref": "200-400",
          "flag": "L"
        },
        {
          "test": "Platelets",
          "value": "68",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": "L"
        },
        {
          "test": "TEG/ROTEM",
          "value": "Prolonged clot formation time, reduced amplitude \u2014 confirms dilutional coagulopathy",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "Temperature",
          "value": "35.6",
          "unit": "\u00b0C",
          "ref": "37 \u2014 hypothermia worsens coagulopathy",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD105",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/22/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-648",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 \u2014 Prevnar 20)",
      "date": "03/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-077",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "09/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-330",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2015",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: AAA, died of ruptured aneurysm at age 72",
    "Mother: Stroke at 78, alive at 82",
    "Brother: CAD, CABG at 65, alive",
    "Sister: Healthy, age 62"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired mechanical engineer"
    ],
    [
      "Marital",
      "Widowed; late wife deceased 2021 (breast cancer)"
    ],
    [
      "Tobacco",
      "Former smoker \u2014 40 pack-years (1975-2019); quit after MI"
    ],
    [
      "Alcohol",
      "Rare, 1-2 drinks/month"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walks 15-20 min daily, limited by claudication"
    ],
    [
      "Housing",
      "Lives alone in condo; daughter nearby"
    ],
    [
      "Safety",
      "No firearms; grab bars in bathroom; seatbelt"
    ],
    [
      "Advance Directive",
      "Living will on file; HCP: daughter Lisa Nguyen; Full code"
    ]
  ],
  "meta": {
    "caseId": "dilutional-coagulopathy",
    "diagnosis": "Dilutional Coagulopathy \u2014 Massive Transfusion During EVAR",
    "acuity": 1,
    "presentation": "Hematologic Emergency",
    "category": "hematologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Harold appears anxious but cooperative, initially focused on his pre-operative preparation before becoming increasingly concerned as bleeding complications develop during his EVAR procedure. He's forthcoming about his symptoms but becomes visibly distressed as he realizes the severity of his post-operative bleeding.",
    "interviewQuestions": [
      "Can you tell me what happened during your surgery today?",
      "When did you first notice bleeding or unusual symptoms after the procedure?",
      "Are you experiencing any pain, and if so, where?",
      "Have you noticed any swelling in your abdomen or groin area?",
      "Are you feeling dizzy, lightheaded, or weak?",
      "Have you had any nausea or vomiting?",
      "Are you having any difficulty breathing or chest pain?",
      "Have you noticed any changes in your urine color or output?",
      "Do you have any history of bleeding disorders or easy bruising?",
      "What medications were you taking before surgery?",
      "Do you have any drug allergies?",
      "Have you ever had problems with anesthesia or surgery before?",
      "Is there any family history of bleeding disorders?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand - I'm mainly concerned about all this bleeding after my surgery and feeling so weak.",
      "onset": "The surgery started this morning around 7 AM. Everything seemed to go well initially, but then the doctors said there was more bleeding than expected and they needed to give me a lot of blood products.",
      "character": "I feel extremely weak and dizzy, almost like all my energy has been drained. There's persistent bleeding from my surgical sites that won't seem to stop properly.",
      "location": "The main bleeding is from my groin where they put in the device, but I'm also noticing bleeding from my IV sites and even my gums when they suction my mouth.",
      "severity": "The weakness is about an 8 out of 10 - I can barely lift my head. The bleeding itself isn't painful, but it's very concerning because it won't stop like it should.",
      "aggravating": "Any movement seems to make the bleeding worse, and I notice more oozing whenever they adjust my position or check my incisions.",
      "relieving": "The doctors have been applying pressure and giving me blood products, but nothing seems to make it completely stop.",
      "associated": "I'm feeling very dizzy, nauseous, and short of breath. My heart feels like it's racing, and I'm having trouble staying warm even with blankets.",
      "denies": "I don't have chest pain, but I do feel short of breath. No severe abdominal pain beyond the surgical site discomfort. No changes in my vision, but I do feel confused at times.",
      "history": "I've never had problems with bleeding before. Even when I had my heart attack a few years ago, I didn't have unusual bleeding issues, though I was on blood thinners then.",
      "medications": "Aspirin 81mg daily; Metoprolol Succinate 50mg daily; Atorvastatin 80mg QHS; Lisinopril 20mg daily; Amlodipine 5mg daily; Cilostazol 100mg BID",
      "allergies": "Clopidogrel",
      "family": "No family history of bleeding disorders that I know of. My father had an aneurysm like mine and died when his ruptured, but no bleeding problems during his treatment.",
      "social": "I'm a retired mechanical engineer, widowed since 2021. I quit smoking after my heart attack a few years ago - used to smoke for about 40 years. I rarely drink alcohol, maybe once or twice a month."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Cardiovascular examination",
      "Abdominal examination",
      "Groin/femoral access site inspection",
      "Peripheral pulse assessment",
      "Skin and mucous membrane examination",
      "Neurological assessment",
      "Respiratory examination",
      "Assessment of IV sites and puncture sites",
      "Evaluation for signs of shock"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 90/55 (dropped from pre-op 148/86), HR 118, RR 24, Temp 97.2\u00b0F, SpO2 92% on 2L NC",
      "Cardiovascular examination": "Tachycardic, regular rhythm, no murmurs, delayed capillary refill >3 seconds, weak peripheral pulses",
      "Abdominal examination": "Soft, mild tenderness, no obvious hematoma, bowel sounds present but diminished",
      "Groin/femoral access site inspection": "Persistent oozing from bilateral femoral access sites despite pressure dressings, surrounding ecchymosis",
      "Peripheral pulse assessment": "Weakly palpable dorsalis pedis and posterior tibial pulses bilaterally, consistent with known PAD",
      "Skin and mucous membrane examination": "Pale, cool, clammy skin; petechiae on arms and chest; oozing from venipuncture sites; bleeding gums",
      "Neurological assessment": "Alert but appears confused intermittently, follows commands, no focal deficits",
      "Respiratory examination": "Tachypneic, clear lung fields, no rales or wheezes",
      "Assessment of IV sites and puncture sites": "Active oozing from multiple IV insertion sites and arterial line puncture site",
      "Evaluation for signs of shock": "Signs of hypovolemic shock: hypotension, tachycardia, delayed cap refill, altered mental status, oliguria"
    },
    "ddxTargets": [
      "Dilutional coagulopathy from massive transfusion (correct)",
      "DIC \u2014 D-dimer critically elevated; fibrinogen even lower; underlying trigger (trauma, sepsis, cancer)",
      "Hemophilia A/B \u2014 factor assay; history; specific factor replacement",
      "Liver failure coagulopathy \u2014 hepatic synthetic failure; elevated bilirubin; no hemorrhage trigger",
      "Vitamin K deficiency \u2014 warfarin or malnutrition; PT prolonged predominantly; not acute setting"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on surgical bleeding as simply technical/mechanical rather than considering systemic coagulopathy from massive transfusion protocol",
      "prematureClosure": "May focus only on local bleeding control without recognizing the systemic nature of dilutional coagulopathy affecting multiple sites",
      "availabilityBias": "Common post-surgical bleeding may overshadow recognition of the specific coagulopathy pattern from massive transfusion and factor dilution"
    },
    "coachPrompts": {
      "phase2": "This is a post-operative bleeding case following EVAR. Consider what happens to coagulation factors when patients require massive transfusion. What lab studies would help differentiate between mechanical bleeding versus coagulopathy? Think about the timeline and pattern of bleeding.",
      "phase5": "You've identified multiple bleeding sites and signs of shock. The pattern of generalized oozing from multiple puncture sites is key. What does this suggest about the coagulation cascade? How does massive transfusion affect clotting factors, platelets, and fibrinogen levels?",
      "finalDebrief": "This case demonstrates dilutional coagulopathy from massive transfusion during complicated EVAR. The key was recognizing that bleeding from multiple sites (surgical, IV sites, gums) indicated systemic coagulopathy rather than just surgical bleeding. Massive transfusion dilutes clotting factors, platelets, and fibrinogen, requiring replacement with FFP, platelets, and cryoprecipitate guided by coagulation studies and thromboelastography when available.",
      "final": "Diagnosis: dilutional coagulopathy from massive transfusion. Key learning: (1) Massive transfusion protocol (MTP): 1:1:1 ratio (pRBC:FFP:platelets) mimics whole blood and prevents dilutional coagulopathy. Activating MTP early (>6 units pRBC anticipated) prevents the coagulopathy before it develops \u2014 treating it after is more difficult. (2) Dilutional coagulopathy mechanism: packed red cells contain no clotting factors or platelets. Transfusing 12 units pRBC = massive dilution of patient's own clotting factors \u2192 PT/INR prolonged, fibrinogen falls, platelets fall. Simple math problem. (3) Fibrinogen is the critical target: fibrinogen falls first and fastest in massive hemorrhage/dilution. Target fibrinogen >200 mg/dL during active hemorrhage. Cryoprecipitate is the fastest/most concentrated fibrinogen source. (4) Viscoelastic testing (TEG/ROTEM): provides real-time coagulation analysis in 10-15 minutes. Guides component therapy more precisely than INR/PT alone. Shows which specific component is deficient. (5) Lethal triad in surgical hemorrhage: hypothermia + acidosis + coagulopathy. All three are self-reinforcing. Rewarm, correct acidosis, replace clotting products simultaneously. Warm all blood products. Warm OR environment."
    }
  }
};
