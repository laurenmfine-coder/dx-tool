
window.EMR_DATA = {
  "patient": {
    "name": "Angela Torres-Vega",
    "dob": "12/15/1978",
    "age": 47,
    "sex": "Female",
    "mrn": "RDX-2025-48726",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Maria Fernandez, MD",
    "pharmacy": "CVS Pharmacy — 4320 Hollywood Blvd, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic",
    "address": "3940 Johnson St, Hollywood, FL 33021",
    "phone": "(954) 555-8217",
    "email": "a.torresvega@email.com",
    "emergencyContact": {
      "name": "Miguel Torres-Vega (Husband)",
      "phone": "(954) 555-8231"
    },
    "chiefComplaint": "Sudden shortness of breath and chest tightness"
  },
  "problems": [
    {
      "problem": "Deep Vein Thrombosis, Left Lower Extremity",
      "icd": "I82.402",
      "onset": "2025",
      "status": "Active",
      "notes": "Diagnosed 02/2025; left popliteal and femoral veins; provoked by oral contraceptive use + prolonged travel; completed 3 months rivaroxaban; recently discontinued"
    },
    {
      "problem": "Obesity Class I",
      "icd": "E66.01",
      "onset": "2018",
      "status": "Active",
      "notes": "BMI 32.4"
    },
    {
      "problem": "Factor V Leiden Heterozygous",
      "icd": "D68.51",
      "onset": "2025",
      "status": "Active",
      "notes": "Identified during thrombophilia workup after DVT; heterozygous — moderate VTE risk"
    },
    {
      "problem": "Migraine Without Aura",
      "icd": "G43.009",
      "onset": "2012",
      "status": "Active",
      "notes": "Previously on combined OCP (discontinued after DVT)"
    },
    {
      "problem": "Gastroesophageal Reflux Disease",
      "icd": "K21.0",
      "onset": "2020",
      "status": "Active",
      "notes": ""
    }
  ],
  "medications": [
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily before breakfast",
      "prescriber": "Dr. Fernandez",
      "start": "06/2020",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Sumatriptan 50mg PRN",
      "sig": "Take 1 tablet by mouth at onset of migraine; may repeat once after 2 hours; max 2/day",
      "prescriber": "Dr. Fernandez",
      "start": "03/2013",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Norethindrone 0.35mg daily",
      "sig": "Take 1 tablet by mouth daily (progestin-only pill; switched from combined OCP after DVT)",
      "prescriber": "Dr. Fernandez",
      "start": "06/2025",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Rivaroxaban 20mg daily",
      "sig": "Take 1 tablet by mouth daily with dinner",
      "prescriber": "Dr. Singh (Hematology)",
      "start": "02/2025",
      "refills": 0,
      "status": "Discontinued"
    }
  ],
  "allergies": [
    {
      "allergen": "Heparin",
      "type": "Drug",
      "reaction": "Suspected HIT — platelet drop to 68K during DVT hospitalization; HIT antibody borderline positive; serotonin release assay negative",
      "severity": "Severe",
      "verified": "No"
    },
    {
      "allergen": "Latex",
      "type": "Environmental",
      "reaction": "Hives, wheezing",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "84/52",
      "hr": 128,
      "rr": 28,
      "temp": "98.2°F",
      "spo2": "88%",
      "wt": "190 lbs",
      "ht": "5'5\"",
      "bmi": 31.6,
      "setting": "ED"
    },
    {
      "date": "08/15/2025",
      "bp": "126/78",
      "hr": 78,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "192 lbs",
      "ht": "5'5\"",
      "bmi": 31.9,
      "setting": "Specialist"
    },
    {
      "date": "05/20/2025",
      "bp": "128/80",
      "hr": 76,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "194 lbs",
      "ht": "5'5\"",
      "bmi": 32.3,
      "setting": "PCP Office"
    },
    {
      "date": "02/10/2025",
      "bp": "132/84",
      "hr": 104,
      "rr": 18,
      "temp": "99.0°F",
      "spo2": "94%",
      "wt": "196 lbs",
      "ht": "5'5\"",
      "bmi": 32.6,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/15/2025",
      "type": "Specialist",
      "provider": "Dr. Natasha Singh, MD (Hematology)",
      "cc": "DVT follow-up; thrombophilia results; anticoagulation duration",
      "hpi": "47-year-old female with provoked left LE DVT (02/2025) for follow-up. Completed 3 months rivaroxaban. DVT was provoked by combined OCP + 14-hour flight to Peru. Thrombophilia workup reveals Factor V Leiden heterozygous. Family history: mother had DVT at age 52. Ultrasound shows residual thrombus in left popliteal vein but improving. No PE symptoms. Discussion of extended anticoagulation vs. discontinuation — given provoked DVT with identified risk factor (OCP now discontinued) and heterozygous FVL (moderate risk), decision made to discontinue rivaroxaban after 3 months. Counseled on VTE precautions: compression stockings for travel, avoidance of estrogen-containing contraceptives, early mobilization.",
      "exam": "General: NAD. Left LE: Mild residual edema; no tenderness, warmth, or erythema. Pulses intact.",
      "assessment": "1. Provoked DVT left LE — resolved; rivaroxaban completed\n2. Factor V Leiden heterozygous — identified\n3. Residual thrombus — improving",
      "plan": "1. Discontinue rivaroxaban (3-month course complete; provoked event)\n2. Compression stockings for prolonged travel/sitting\n3. Avoid estrogen-containing products\n4. Recheck duplex ultrasound in 3 months\n5. Educate on signs/symptoms of recurrent DVT/PE\n6. RTC 6 months or sooner if symptoms"
    },
    {
      "id": "V002",
      "date": "02/10/2025",
      "type": "ED",
      "provider": "Dr. Karen Moy, MD (Emergency Medicine)",
      "cc": "Left leg swelling, pain x 5 days",
      "hpi": "47-year-old female presenting with progressive left calf and thigh swelling, pain, and redness x 5 days. Returned from 14-hour flight from Peru 2 weeks ago. On combined OCP x 8 years. BMI 32.6. Reports mild dyspnea with activity but no chest pain, no hemoptysis. Left calf circumference 4 cm greater than right.",
      "exam": "General: Mild distress from leg pain. Left LE: Diffuse edema knee to ankle, tender popliteal fossa, positive Homan's sign. Erythema posterior calf. Right LE: Normal. CV: Tachycardia at 104, regular. Lungs: CTAB.",
      "assessment": "1. Acute DVT left lower extremity — high clinical probability (Wells score 4)\n2. Risk factors: OCP, prolonged travel, obesity",
      "plan": "1. Compression ultrasound left LE — positive: occlusive thrombus left popliteal and femoral veins\n2. CTA chest — no PE\n3. Started rivaroxaban 15mg BID x 21 days then 20mg daily\n4. Heparin not used due to suspected HIT history (borderline antibody, but SRA negative — documented as allergy per hospital policy)\n5. Discontinue combined OCP immediately\n6. Compression stockings\n7. Hematology referral for thrombophilia workup (after anticoagulation)\n8. PCP follow-up 1 week"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "10:30",
      "orderedBy": "Dr. James Park, MD (ED)",
      "collected": "02/26/2026 10:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-022654",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Arterial Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "ARTERIAL BLOOD GAS (ABG)",
          "results": [
            {
              "test": "pH",
              "value": "7.48",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            },
            {
              "test": "pCO2",
              "value": "28",
              "unit": "mmHg",
              "range": "35-45",
              "flag": "L"
            },
            {
              "test": "pO2",
              "value": "58",
              "unit": "mmHg",
              "range": "80-100",
              "flag": "L"
            },
            {
              "test": "HCO3",
              "value": "21",
              "unit": "mEq/L",
              "range": "22-26",
              "flag": "L"
            },
            {
              "test": "A-a Gradient",
              "value": "52",
              "unit": "mmHg",
              "range": "<15",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CARDIAC MARKERS",
          "results": [
            {
              "test": "Troponin I (hs)",
              "value": "0.42",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "BNP",
              "value": "820",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "142",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "18",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Lactate",
              "value": "4.6",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "12.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "238",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            {
              "test": "D-Dimer",
              "value": "8400",
              "unit": "ng/mL FEU",
              "range": "<500",
              "flag": "H"
            },
            {
              "test": "INR",
              "value": "1.1",
              "unit": "",
              "range": "0.8-1.1",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "08/15/2025",
      "study": "BILATERAL LOWER EXTREMITY VENOUS DUPLEX ULTRASOUND",
      "accession": "IMG-2025-08155",
      "status": "FINAL",
      "orderedBy": "Dr. Natasha Singh, MD",
      "readBy": "Dr. David Rosenberg, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "47F with left LE DVT (02/2025), completed 3 months rivaroxaban. Follow-up ultrasound.",
      "technique": "Duplex ultrasound bilateral lower extremity veins with compression and Doppler.",
      "findings": "Left: Residual non-occlusive thrombus in left popliteal vein — decreased from prior. Left femoral vein patent with normal compressibility. No new thrombus.\\n\\nRight: Patent and compressible throughout. Normal flow.",
      "impression": "1. Residual non-occlusive thrombus left popliteal vein — improved from 02/2025.\\n2. No new DVT bilaterally.\\n3. Left femoral vein now patent.",
      "dictated": "08/15/2025 14:10",
      "verified": "08/15/2025 16:25"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-308",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2025-26)",
      "date": "10/25/2025",
      "site": "Right deltoid IM",
      "lot": "CM2025-658",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) (3/3)",
      "date": "2015",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: DVT at age 52 (provoked by hip surgery), Factor V Leiden heterozygous, alive at 72",
    "Father: HTN, T2DM, alive at 74",
    "Sister: Healthy, alive at 44",
    "Maternal grandmother: PE at age 65, deceased at 68"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Travel nurse recruiter; frequent air travel for work (8-10 flights/month)"
    ],
    [
      "Marital",
      "Married 18 years; husband Miguel; 2 children ages 12, 15"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social, 2-3 drinks/week"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walks 30 min daily; Zumba 2x/week (discontinued past month due to travel schedule)"
    ],
    [
      "Housing",
      "Single-family home with husband and children"
    ],
    [
      "Safety",
      "Denies IPV; wears compression stockings on flights since DVT"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "massive-pe-with-rv-failure",
    "diagnosis": "Massive Pulmonary Embolism with Acute Right Ventricular Failure",
    "acuity": 1,
    "presentation": "Cardiac Emergency",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Angela appears anxious and uncomfortable, frequently shifting position and speaking in short phrases due to breathlessness. She is cooperative but clearly distressed, repeatedly asking if this is related to her previous blood clot. Her husband Miguel is present and appears very worried, occasionally answering for her when she needs to catch her breath.",
    "interviewQuestions": [
      "When did your shortness of breath and chest tightness begin?",
      "Can you describe what the chest tightness feels like?",
      "Have you had any chest pain, and if so, where is it located?",
      "What were you doing when these symptoms started?",
      "Have you had any recent long flights or periods of immobility?",
      "When did you stop taking your blood thinner medication?",
      "Have you had any leg pain, swelling, or cramping recently?",
      "Have you coughed up any blood or noticed blood when you cough?",
      "Have you felt lightheaded, dizzy, or like you might pass out?",
      "Have you had any nausea, vomiting, or sweating?",
      "Have you had any similar episodes since your DVT in February?",
      "Are you currently taking any hormonal medications or birth control?",
      "Have you had any recent surgeries, injuries, or been bedridden?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble breathing... can you repeat that? I'm just so scared this is another blood clot.",
      "onset": "It started about 2 hours ago, very suddenly. I was just sitting at my desk working when I suddenly couldn't catch my breath and felt like someone was squeezing my chest.",
      "character": "The chest tightness feels like a heavy weight pressing down on my chest. The shortness of breath is like I can't get enough air no matter how hard I try to breathe.",
      "location": "The tightness is right in the center of my chest, and I have some sharp pain on the right side that gets worse when I breathe in deeply.",
      "severity": "The breathing difficulty is probably a 9 out of 10 - I feel like I'm suffocating. The chest tightness is about a 7. I can barely walk to the bathroom without getting completely winded.",
      "aggravating": "Any movement makes it worse, even just sitting up straight. Taking deep breaths makes the chest pain sharper. I feel more short of breath when I try to lie flat.",
      "relieving": "Nothing really helps. Sitting forward slightly seems a little better than lying back, but I still can't breathe normally.",
      "associated": "I feel really lightheaded and dizzy, especially when I stand up. My heart feels like it's racing. I'm also nauseous and have been sweating even though I don't feel hot.",
      "denies": "I haven't coughed up any blood, but I do have a dry cough that just started. No fever, no leg swelling that I've noticed recently, no recent injuries.",
      "history": "Nothing exactly like this since my DVT in February, but I've been worried about it happening again. This feels much worse than how I felt with the leg clot.",
      "medications": "Omeprazole 20mg daily; Sumatriptan 50mg PRN; Norethindrone 0.35mg daily; Rivaroxaban 20mg daily",
      "allergies": "Heparin, Latex",
      "family": "My mother had a DVT after her hip surgery when she was 52, and we both have Factor V Leiden. That's why I was on blood thinners after my clot.",
      "social": "I work as a travel nurse recruiter and fly 8-10 times a month for work. I just got back from a long flight to Denver yesterday - about 4 hours each way. I'm married with two kids. I don't smoke and only drink socially on weekends."
    },
    "examManeuvers": [
      "General appearance and respiratory distress assessment",
      "Cardiovascular examination including heart sounds and murmurs",
      "Pulmonary examination including breath sounds",
      "Assessment of jugular venous pressure",
      "Lower extremity examination for DVT signs",
      "Assessment of peripheral pulses and capillary refill",
      "Abdominal examination",
      "Neurological assessment for altered mental status"
    ],
    "examFindings": {
      "General appearance and respiratory distress assessment": "Patient appears acutely ill and in moderate to severe respiratory distress, using accessory muscles, sitting forward in tripod position, speaking in 3-4 word sentences",
      "Cardiovascular examination including heart sounds and murmurs": "Tachycardic regular rhythm, prominent S2 with fixed splitting, S3 gallop present, no murmurs appreciated, point of maximal impulse displaced laterally",
      "Pulmonary examination including breath sounds": "Tachypneic with shallow respirations, breath sounds clear bilaterally, no wheezes or crackles, decreased breath sounds at right base",
      "Assessment of jugular venous pressure": "Jugular venous distension to angle of jaw at 45 degrees, prominent v-waves visible",
      "Lower extremity examination for DVT signs": "No obvious swelling, warmth, or erythema of lower extremities bilaterally, negative Homans sign, distal pulses present but weak",
      "Assessment of peripheral pulses and capillary refill": "Weak peripheral pulses throughout, capillary refill delayed at 4 seconds, cool extremities",
      "Abdominal examination": "Soft, non-tender, no hepatosplenomegaly appreciated, bowel sounds present",
      "Neurological assessment for altered mental status": "Alert and oriented to person, place, and time but appears anxious, no focal neurological deficits, moves all extremities"
    },
    "ddxTargets": [
      "Massive Pulmonary Embolism with Acute Right Ventricular Failure",
      "Acute Myocardial Infarction",
      "Pneumothorax",
      "Aortic Dissection",
      "Acute Decompensated Heart Failure",
      "Panic Attack",
      "Pneumonia"
    ],
    "biasFlags": {
      "anchoring": "Student may anchor on patient's known DVT history and Factor V Leiden, potentially missing the severity of current presentation or considering only minor PE rather than massive PE with hemodynamic compromise",
      "prematureClosure": "Given obvious PE risk factors, student might stop gathering information before recognizing signs of right heart strain and hemodynamic instability that indicate massive PE requiring immediate intervention",
      "availabilityBias": "Recent exposure to stable PE cases might lead student to underestimate severity, or conversely, recent MI cases might lead to overweighting cardiac causes despite clear PE risk factors"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you've identified some key possibilities given her presentation. As you interview this patient, pay particular attention to the timeline of her symptoms and any recent risk factors. Also consider - what vital signs findings might help you distinguish between these diagnoses? What would make you more or less concerned about each possibility?",
      "phase5": "Excellent history and physical examination. You've gathered compelling evidence for your leading diagnosis. Now let's think critically about what you've found - what do her vital signs tell you about the severity of her condition? How do her physical exam findings, particularly the cardiovascular findings, help you risk-stratify this patient? What immediate interventions might this patient need?",
      "finalDebrief": "This case demonstrates the evolution from recognizing classic risk factors to identifying hemodynamic compromise. Your initial differential appropriately included PE given her clear risk factors - recent air travel, Factor V Leiden, and prior DVT. The key learning point is recognizing when PE becomes massive and life-threatening. The combination of hypotension, tachycardia, elevated JVP, and signs of right heart strain indicated this wasn't just PE, but massive PE with acute right heart failure requiring emergent intervention. How might this change your approach to future patients with PE risk factors?",
      "final": "Diagnosis: massive (high-risk) pulmonary embolism with hemodynamic instability and acute right ventricular failure. Key learning: (1) Pulmonary embolism is risk-stratified into three tiers. High-risk (massive) PE: hemodynamic instability defined as sustained hypotension (SBP under 90 for at least 15 minutes or requiring vasopressors), cardiac arrest, or persistent profound bradycardia/shock. Intermediate-risk (submassive) PE: hemodynamically stable but with RV dysfunction on echo or CT (RV/LV ratio over 0.9) AND/OR elevated troponin or BNP. Low-risk PE: hemodynamically stable without RV strain or biomarker elevation, often suitable for outpatient management with selected DOACs. (2) Diagnostic workup depends on stability. In stable patients: CT pulmonary angiography is the gold standard; V/Q scan for patients with contrast allergy or significant kidney disease; D-dimer (age-adjusted cutoff for elderly: age x 10 ng/mL) to rule out PE in low-pretest-probability patients (Wells or Geneva score). In unstable patients: bedside echocardiography shows acute RV dilatation, McConnell sign (RV free-wall hypokinesis with preserved apical function), septal flattening (D-sign), and sometimes visible thrombus-in-transit — these findings support empiric treatment when the patient is too unstable for CT. ECG may show sinus tachycardia, right bundle branch block, S1Q3T3 pattern, right axis deviation, or anterior T-wave inversions (V1-V4, Mclennan sign). (3) Management of massive PE: IMMEDIATE reperfusion. Options in order of availability and patient factors: (a) Systemic thrombolysis with alteplase 100 mg IV over 2 hours (or 50 mg over 2 hours in high bleeding risk) or tenecteplase — standard for massive PE without absolute contraindications. (b) Catheter-directed thrombolysis (CDT, EKOS) or catheter-based thrombectomy (FlowTriever, Inari) — lower systemic dose, appealing when bleeding risk is elevated. (c) Surgical pulmonary embolectomy for failed lysis, shock with absolute lysis contraindications, or clot-in-transit. (d) ECMO (VA-ECMO) as a bridge to definitive therapy in refractory shock or arrest. Simultaneous anticoagulation with unfractionated heparin (preferred for its rapid onset and reversibility). (4) Hemodynamic support of RV failure: the failing RV is preload-dependent but preload-intolerant — too little volume drops RV output, too much dilates the RV and compresses the LV through interventricular dependence. Give small judicious fluid boluses (250-500 mL) with reassessment. Vasopressors: norepinephrine first (maintains systemic pressure without worsening RV afterload); vasopressin is a good adjunct because it increases SVR without increasing pulmonary vascular resistance. Avoid excessive dobutamine alone because it can cause hypotension; milrinone has pulmonary vasodilator properties but can drop BP — usually best combined with a pressor. Inhaled pulmonary vasodilators (iNO, inhaled prostacyclin) can temporize while waiting for reperfusion. Cautious intubation — positive pressure ventilation and induction agents can precipitate cardiac arrest; avoid ketamine hypotension, pre-load with pressors, and use low tidal volumes. (5) Classic pitfalls: (a) over-resuscitating with fluids in RV failure — worsens RV dilation and LV compression. (b) Attributing the hypotension to sepsis or hypovolemia and missing PE — any patient with unexplained shock plus tachycardia plus hypoxia needs PE on the differential, especially postop, post-trauma, or with risk factors. (c) Withholding thrombolysis out of bleeding fear in truly massive PE — the mortality of untreated massive PE is about 30-50%; thrombolysis cuts that substantially. (d) Forgetting long-term management: anticoagulation duration (at least 3 months; indefinite for unprovoked or recurrent, or in chronic thromboembolic pulmonary hypertension), evaluation for chronic thromboembolic pulmonary hypertension with V/Q at 3-6 months, thrombophilia workup in selected patients, and cancer screening in unprovoked PE over age 40."
    }
  }
};
