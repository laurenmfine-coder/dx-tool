// Virtual EMR Case: Malignant Hyperthermia
// Variant: malignant-hyperthermia | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Ryan Kowalski",
    "patientHPI": "The pain started around my belly button yesterday and then moved down to my lower right side and keeps getting worse. I've been throwing up and have no appetite at all, plus I had a fever of 101 at home last night.",
    "dob": "11/08/1996",
    "age": 28,
    "sex": "Male",
    "mrn": "RDX-2025-68241",
    "pronouns": "He/Him",
    "insurance": "Aetna — EPO",
    "pcp": "Dr. Michael Torres, MD",
    "pharmacy": "CVS Pharmacy — 7001 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "race": "White/Caucasian (Polish descent)",
    "address": "7125 Elm St, Albuquerque, NM 87102",
    "phone": "(954) 555-1847",
    "email": "r.kowalski96@email.com",
    "emergencyContact": {
      "name": "Jennifer Kowalski (Wife)",
      "phone": "(954) 555-1850"
    },
    "chiefComplaint": "High fever after surgery"
  },
  "problems": [
    {
      "problem": "Malignant Hyperthermia Susceptibility",
      "icd": "T88.3",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — triggered by sevoflurane + succinylcholine during emergency appendectomy; NO prior known susceptibility"
    },
    {
      "problem": "Acute Appendicitis — Post-Appendectomy",
      "icd": "K35.80",
      "onset": "2025",
      "status": "Active",
      "notes": "Perforated appendicitis; taken to OR for laparoscopic appendectomy; MH crisis developed intraoperatively"
    },
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.9",
      "onset": "2018",
      "status": "Active",
      "notes": "Managed with OTC cetirizine"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily PRN",
      "sig": "Take 1 tablet by mouth daily as needed for allergies",
      "prescriber": "Dr. Torres",
      "start": "03/2020",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA (prior to this admission)",
      "type": "None",
      "reaction": "None previously known — NOW: Malignant Hyperthermia susceptibility identified",
      "severity": "",
      "verified": "Yes"
    },
    {
      "allergen": "Volatile anesthetic agents (sevoflurane, desflurane, isoflurane, halothane)",
      "type": "Drug",
      "reaction": "Malignant Hyperthermia — intraoperative crisis with rigidity, hyperthermia, hypercarbia, rhabdomyolysis",
      "severity": "Severe — Life-threatening",
      "verified": "Yes — confirmed intraoperatively 02/22/2025"
    },
    {
      "allergen": "Succinylcholine",
      "type": "Drug",
      "reaction": "Malignant Hyperthermia trigger — masseter muscle rigidity following administration",
      "severity": "Severe — Life-threatening",
      "verified": "Yes — confirmed intraoperatively 02/22/2025"
    }
  ],
  "vitals": [
    {
      "date": "02/22/2025",
      "bp": "82/48",
      "hr": 168,
      "rr": 36,
      "temp": "106.2°F",
      "spo2": "88%",
      "wt": "192 lbs",
      "ht": "6'0\"",
      "bmi": 26,
      "setting": "OR → SICU"
    },
    {
      "date": "02/22/2025",
      "bp": "118/76",
      "hr": 112,
      "rr": 22,
      "temp": "101.8°F",
      "spo2": "96%",
      "wt": "192 lbs",
      "ht": "6'0\"",
      "bmi": 26,
      "setting": "SICU — post-dantrolene"
    },
    {
      "date": "02/21/2025",
      "bp": "128/82",
      "hr": 98,
      "rr": 18,
      "temp": "100.8°F",
      "spo2": "98%",
      "wt": "192 lbs",
      "ht": "6'0\"",
      "bmi": 26,
      "setting": "ED — pre-op"
    },
    {
      "date": "10/15/2024",
      "bp": "122/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "190 lbs",
      "ht": "6'0\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/21/2025",
      "type": "ED",
      "provider": "Dr. Kevin Tran, MD",
      "cc": "Severe RLQ abdominal pain x 18 hours, nausea, vomiting, fever",
      "hpi": "28-year-old male presenting with 18-hour history of periumbilical pain that migrated to the RLQ. Associated nausea, 3 episodes of non-bloody vomiting, anorexia, and fever of 101.2°F at home. Pain worsening. No diarrhea. No urinary symptoms. No prior abdominal surgery.",
      "exam": "General: Moderate distress, lying still. Abdomen: RLQ tenderness with involuntary guarding, positive McBurney point tenderness, positive Rovsing sign, positive psoas sign. Rebound tenderness present. Bowel sounds diminished. CV: Tachycardic at 98, regular. Lungs: CTA.",
      "assessment": "1. Acute appendicitis — likely perforated given peritoneal signs and duration\n2. Surgical abdomen",
      "plan": "1. NPO, IV fluids, IV antibiotics (piperacillin-tazobactam)\n2. CT abdomen/pelvis with contrast\n3. Surgical consultation — likely operative\n4. Pain management with IV morphine"
    },
    {
      "id": "V002",
      "date": "10/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Michael Torres, MD",
      "cc": "Annual physical",
      "hpi": "28-year-old healthy male for routine annual exam. No complaints. Active lifestyle — plays recreational soccer and goes to the gym 4x/week. No medications besides OTC allergy med. No significant medical history. No prior surgeries or anesthesia exposure. Family history notable for father who had an 'unusual reaction' to anesthesia during knee surgery (details unclear).",
      "exam": "General: Well-appearing, fit male. HEENT: WNL. CV: RRR, no murmur. Lungs: CTA. Abdomen: Soft, NT, no masses. MSK: Full ROM, good muscle tone. Neuro: Intact. Skin: No lesions.",
      "assessment": "1. Healthy male — annual wellness\n2. Allergic rhinitis — seasonal, well-controlled\n3. NOTE: Family history of 'unusual anesthetic reaction' in father — vague, could not obtain details; recommended patient ask father for specifics",
      "plan": "1. Routine labs ordered\n2. Continue cetirizine PRN\n3. Counseled to obtain father's surgical/anesthetic history\n4. RTC annually"
    }
  ],
  "labs": [
    {
      "date": "02/22/2025",
      "time": "14:45",
      "orderedBy": "Dr. Sarah Mitchell, MD (Anesthesiology/SICU)",
      "collected": "02/22/2025 14:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-097841",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Arterial Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "198",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "32",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "2.8",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Sodium",
              "value": "148",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "H"
            },
            {
              "test": "Potassium",
              "value": "6.8",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "108",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": "H"
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "14",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": "L"
            },
            {
              "test": "Calcium (ionized)",
              "value": "5.8",
              "unit": "mg/dL",
              "range": "4.6-5.3",
              "flag": "H"
            },
            {
              "test": "Phosphate",
              "value": "7.2",
              "unit": "mg/dL",
              "range": "2.5-4.5",
              "flag": "H"
            },
            {
              "test": "AST (SGOT)",
              "value": "892",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT (SGPT)",
              "value": "412",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CREATINE KINASE",
          "results": [
            {
              "test": "CK Total",
              "value": "48,200",
              "unit": "U/L",
              "range": "30-200",
              "flag": "H"
            },
            {
              "test": "CK-MB",
              "value": "42",
              "unit": "ng/mL",
              "range": "0-5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "ARTERIAL BLOOD GAS",
          "results": [
            {
              "test": "pH",
              "value": "7.12",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "L"
            },
            {
              "test": "pCO2",
              "value": "72",
              "unit": "mmHg",
              "range": "35-45",
              "flag": "H"
            },
            {
              "test": "pO2",
              "value": "68",
              "unit": "mmHg",
              "range": "80-100",
              "flag": "L"
            },
            {
              "test": "HCO3",
              "value": "14",
              "unit": "mEq/L",
              "range": "22-26",
              "flag": "L"
            },
            {
              "test": "Base Excess",
              "value": "-14",
              "unit": "mEq/L",
              "range": "-2 to +2",
              "flag": "L"
            },
            {
              "test": "Lactate",
              "value": "8.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        },
        {
          "name": "COAGULATION STUDIES",
          "results": [
            {
              "test": "PT",
              "value": "18.2",
              "unit": "sec",
              "range": "11.0-14.0",
              "flag": "H"
            },
            {
              "test": "INR",
              "value": "1.6",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "PTT",
              "value": "48",
              "unit": "sec",
              "range": "25-35",
              "flag": "H"
            },
            {
              "test": "Fibrinogen",
              "value": "128",
              "unit": "mg/dL",
              "range": "200-400",
              "flag": "L"
            },
            {
              "test": "D-Dimer",
              "value": "4.2",
              "unit": "µg/mL",
              "range": "<0.5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "URINALYSIS",
          "results": [
            {
              "test": "Color",
              "value": "Dark brown (cola-colored)",
              "unit": "",
              "range": "Yellow",
              "flag": ""
            },
            {
              "test": "Myoglobin",
              "value": "Positive (>1000)",
              "unit": "ng/mL",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Blood (dipstick)",
              "value": "3+",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "RBC",
              "value": "0-2",
              "unit": "/HPF",
              "range": "0-3",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/21/2025",
      "study": "CT ABDOMEN AND PELVIS WITH IV CONTRAST",
      "accession": "IMG-2025-09412",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Tran, MD (ED)",
      "readBy": "Dr. Robert Nash, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "28-year-old male with RLQ pain, fever, peritoneal signs — r/o appendicitis",
      "technique": "Axial CT images of the abdomen and pelvis obtained following IV contrast. Coronal and sagittal reformats reviewed.",
      "findings": "APPENDIX: The appendix is dilated to 14 mm with wall thickening and enhancement. There is a focal defect in the appendiceal wall at the tip consistent with perforation. Surrounding fat stranding and a small loculated fluid collection (2.2 x 1.8 cm) adjacent to the appendiceal tip.\n\nPERITONEUM: Small amount of free fluid in the pelvis. No diffuse peritoneal enhancement to suggest generalized peritonitis.\n\nOTHER BOWEL: Small and large bowel normal in caliber. No obstruction.\n\nSOLID ORGANS: Liver, spleen, kidneys, pancreas unremarkable.",
      "impression": "1. Perforated appendicitis with small peri-appendiceal abscess (2.2 cm)\n2. Small pelvic free fluid\n3. Surgical consultation recommended",
      "dictated": "02/21/2025 22:15",
      "verified": "02/21/2025 22:22"
    },
    {
      "date": "02/22/2025",
      "study": "CHEST X-RAY — PORTABLE AP (SICU)",
      "accession": "IMG-2025-09520",
      "status": "FINAL",
      "orderedBy": "Dr. Sarah Mitchell, MD (SICU)",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "Post-MH crisis, intubated, verify ETT placement",
      "technique": "Single portable AP chest radiograph.",
      "findings": "ETT: Endotracheal tube tip 3.5 cm above the carina — appropriate position.\n\nLINES: Right subclavian central venous catheter tip in the SVC. OG tube tip in the stomach.\n\nLUNGS: Mild bilateral basal atelectasis. No consolidation or effusion.\n\nHEART: Normal size.",
      "impression": "1. ETT, central line, and OG tube in satisfactory position\n2. Mild bibasilar atelectasis — likely positional\n3. No acute cardiopulmonary process",
      "dictated": "02/22/2025 15:10",
      "verified": "02/22/2025 15:18"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL861K",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "PF482R",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "11/2021",
      "site": "Left deltoid IM",
      "lot": "TA198P",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Father (age 58): Hx of 'unusual reaction to anesthesia' during knee arthroscopy (~age 45) — developed fever and 'muscle problems' in PACU; transferred to ICU; recovered after 3 days; details unclear but HIGHLY SUSPICIOUS FOR MH",
    "Mother (age 56): Hypertension, hypothyroidism — no surgical complications",
    "Brother (age 25): Healthy; has never had surgery",
    "Paternal uncle: Died during surgery at age 42 — family reports 'complications with anesthesia' (exact diagnosis unknown but concerning for MH)",
    "No other known family history of anesthetic reactions"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Software developer — works remotely"
    ],
    [
      "Marital",
      "Married x 2 years; wife Jennifer present at bedside"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social — 2-4 beers on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Very active — recreational soccer league, gym 4x/week, runs 3x/week"
    ],
    [
      "Housing",
      "Owns townhouse with wife"
    ],
    [
      "Safety",
      "No firearms"
    ],
    [
      "Advance Directive",
      "None prior to admission — wife designated as healthcare proxy during SICU admission"
    ]
  ],
  "meta": {
    "caseId": "malignant-hyperthermia",
    "diagnosis": "Malignant Hyperthermia Triggered by Volatile Anesthetic + Succinylcholine",
    "acuity": 1,
    "presentation": "Psychiatric Emergency",
    "category": "anesthetic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Ryan is anxious and confused about his deteriorating condition post-surgery, frequently asking 'What's happening to me?' He's cooperative but increasingly drowsy due to his critical state. His wife Jennifer is at bedside providing additional history when he becomes less responsive.",
    "interviewQuestions": [
      "Can you tell me about your surgery and what happened afterward?",
      "When did you first notice the high fever after surgery?",
      "Are you experiencing any muscle pain or stiffness right now?",
      "Has anyone in your family ever had problems with anesthesia during surgery?",
      "What medications do you normally take at home?",
      "Do you have any known drug allergies?",
      "How are you feeling right now - any nausea, confusion, or difficulty breathing?",
      "Did the doctors mention anything unusual during or right after your surgery?",
      "Have you noticed any changes in your urine color or output?",
      "Are you having any chest pain or heart racing?",
      "Tell me about the appendix pain that brought you to the hospital initially",
      "Do you smoke, drink alcohol, or use any recreational drugs?",
      "Have you ever had surgery before, and if so, any complications?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm feeling really confused and sick right now. Can you ask that differently?",
      "onset": "The surgery was this morning for my appendix. I woke up in recovery around noon and felt okay at first, but then within an hour I started feeling really hot and sick.",
      "character": "It's like my whole body is on fire. My muscles feel tight and crampy, and I can't seem to cool down no matter what they do.",
      "location": "The fever seems to be everywhere, but my muscles hurt the most in my arms, legs, and back. It's different from the appendix pain I had yesterday.",
      "severity": "The fever and muscle pain is like an 8 out of 10. I feel like I'm burning up and everything aches. I can barely think straight.",
      "aggravating": "Moving makes the muscle pain worse, and I feel sicker when I try to sit up or do anything.",
      "relieving": "Nothing seems to help. They've given me some medications and cooling blankets but I still feel terrible.",
      "associated": "I'm nauseous, my heart is racing, I feel short of breath, and I think my urine looked darker the last time I went.",
      "denies": "No chest pain, no headache, no rash that I can see, no vomiting since recovery.",
      "history": "I've never had surgery before, so nothing like this has ever happened to me.",
      "medications": "Cetirizine 10mg daily PRN",
      "allergies": "NKDA (prior to this admission), Volatile anesthetic agents (sevoflurane, desflurane, isoflurane, halothane), Succinylcholine",
      "family": "My dad had some kind of bad reaction to anesthesia during knee surgery when I was younger. He got really sick and had to stay in the ICU for a few days with fever and muscle problems.",
      "social": "I'm a software developer, work from home. I'm married to Jennifer. I don't smoke, just have a few beers on weekends, no drugs."
    },
    "examManeuvers": [
      "Temperature measurement",
      "Cardiovascular examination (heart rate, rhythm, blood pressure)",
      "Pulmonary examination (respiratory rate, oxygen saturation, breath sounds)",
      "Muscle rigidity assessment",
      "Neurological examination (mental status, reflexes)",
      "Skin examination (color, temperature, diaphoresis)",
      "Abdominal examination (surgical site, tenderness)",
      "Extremity examination (muscle tone, temperature)",
      "Urine color and output assessment",
      "Signs of bleeding or coagulopathy"
    ],
    "examFindings": {
      "Temperature measurement": "Hyperthermia 106.2°F (41.2°C) despite cooling measures",
      "Cardiovascular examination (heart rate, rhythm, blood pressure)": "Tachycardia 168 bpm, hypotension 82/48 mmHg, regular rhythm but weak pulses",
      "Pulmonary examination (respiratory rate, oxygen saturation, breath sounds)": "Tachypnea 32/min, hypoxemia SpO2 88%, clear lung fields bilaterally",
      "Muscle rigidity assessment": "Generalized muscle rigidity and spasm, particularly in masseter and extremities",
      "Neurological examination (mental status, reflexes)": "Altered mental status, confusion, hyperreflexia, no focal deficits",
      "Skin examination (color, temperature, diaphoresis)": "Hot, flushed skin with profuse diaphoresis and mottled appearance",
      "Abdominal examination (surgical site, tenderness)": "Surgical incision intact, minimal tenderness, abdomen soft",
      "Extremity examination (muscle tone, temperature)": "Increased muscle tone, warm to touch, visible muscle fasciculations",
      "Urine color and output assessment": "Dark brown urine consistent with myoglobinuria, decreased output",
      "Signs of bleeding or coagulopathy": "Petechiae on extremities, oozing from IV sites suggesting DIC"
    },
    "ddxTargets": [
      "Malignant Hyperthermia — Triggered by Sevoflurane/Succinylcholine During Emergency Appendectomy, with Rhabdomyolysis, AKI, DIC, and Mixed Acidosis (correct diagnosis)",
      "Neuroleptic Malignant Syndrome",
      "Serotonin Syndrome",
      "Sepsis/Septic Shock",
      "Anesthesia-related Anaphylaxis",
      "Heat Stroke",
      "Thyroid Storm"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on post-operative infection or sepsis given the surgical context and fever, missing the anesthetic trigger connection",
      "prematureClosure": "May prematurely diagnose sepsis without fully exploring the anesthetic history and family history of anesthetic complications",
      "availabilityBias": "Post-operative fever is common, making sepsis seem more likely than the rare but critical diagnosis of malignant hyperthermia"
    },
    "coachPrompts": {
      "phase2": "Good start with your differential. This patient developed symptoms rapidly after surgery. What specific aspects of the anesthetic history and family history should you explore? How might the timing and trigger help narrow your differential?",
      "phase5": "You've gathered important data about the post-operative fever, muscle rigidity, and family history. What does the combination of hyperthermia, muscle rigidity, tachycardia, and the anesthetic exposure pattern suggest? How does the family history influence your thinking?",
      "finalDebrief": "This case highlights malignant hyperthermia as a rare but life-threatening anesthetic emergency. The key was recognizing the classic triad of hyperthermia, muscle rigidity, and autonomic instability in the context of volatile anesthetic and succinylcholine exposure, combined with the suggestive family history. Early recognition and treatment with dantrolene is critical for survival.",
      "final": "Diagnosis: malignant hyperthermia (MH) triggered by sevoflurane and succinylcholine during general anesthesia, with rhabdomyolysis, AKI, DIC, and mixed acidosis. Key learning: (1) Malignant hyperthermia is a pharmacogenetic disorder of skeletal muscle calcium regulation, most commonly due to mutations in the ryanodine receptor RYR1 or the dihydropyridine receptor CACNA1S. Triggers are volatile anesthetics (sevoflurane, isoflurane, desflurane, halothane, enflurane) and the depolarizing neuromuscular blocker succinylcholine. The pathophysiology is sustained, uncontrolled release of calcium from the sarcoplasmic reticulum leading to prolonged muscle contraction, massive ATP consumption, heat production, acidosis, and eventual rhabdomyolysis. Incidence is about 1 in 5,000-50,000 anesthetics; genetic penetrance is variable, so family history is often silent. (2) Presentation — often intraoperative or immediately postop. Earliest signs: unexplained rise in end-tidal CO2 that does not respond to increased minute ventilation (the most sensitive early sign), tachycardia, masseter muscle rigidity with succinylcholine, and generalized muscle rigidity. Later: hyperthermia (often rapid rise, sometimes over 42 C), mixed respiratory and metabolic acidosis, hyperkalemia, rhabdomyolysis with CK over 10,000 (sometimes over 100,000), myoglobinuria, and DIC. Hyperthermia is a LATE sign — do not wait for it to diagnose MH. (3) Treatment is emergent and protocol-driven (MHAUS hotline 1-800-644-9737 is the North American resource). (a) STOP triggering agents immediately — switch to non-triggering anesthesia (propofol, total IV anesthesia) and change the circuit and soda lime. (b) Hyperventilate with 100% oxygen at high flows. (c) DANTROLENE 2.5 mg/kg IV bolus, repeated every 5-10 minutes up to 10 mg/kg or until signs resolve; maintenance 1 mg/kg q4-6h for 24-48 hours. Dantrolene directly inhibits the ryanodine receptor, stopping calcium release. Newer formulation Ryanodex is concentrated (250 mg per vial) and faster to reconstitute. (d) Active cooling: cold IV fluids, ice packs to groin/axillae, cooled body cavity lavage, evaporative cooling. Stop cooling at 38 C to avoid overshoot hypothermia. (e) Treat hyperkalemia (calcium, insulin/dextrose, bicarbonate, albuterol; dialysis for refractory cases). (f) Aggressive IV fluids and alkalinization (target urine output 1-2 mL/kg/hr) for pigment nephropathy from rhabdomyolysis. (g) Monitor CK, electrolytes, ABG, coagulation, lactate, myoglobin; transfuse for DIC as indicated. (h) ICU admission for 24-48 hours minimum because recrudescence occurs in up to 25%. (4) Diagnosis confirmation and genetic counseling. The clinical diagnosis is made on the scene by pattern recognition; MH gene testing should be sent on the patient and at-risk family members. The caffeine-halothane contracture test (CHCT, formerly the gold standard) remains definitive where available. Patients should wear medical alert identification and inform all future anesthesiologists. First-degree relatives should be considered affected until proven otherwise. (5) Classic pitfalls: (a) waiting for hyperthermia to make the diagnosis — by then the patient is in severe metabolic crisis. (b) Thinking MH is ruled out by prior uneventful anesthetics — MH can occur on first, second, or later exposure. (c) Using succinylcholine in an MH-susceptible patient 'just one more time' because they have had it before. (d) Forgetting to remove the vaporizer and change the circuit — residual volatile anesthetic continues the trigger. (e) Not stocking adequate dantrolene (at least 36 vials of the older formulation or an equivalent supply of Ryanodex) and not running annual MH drills in any facility that uses volatile anesthetics."
    }
  }
};
