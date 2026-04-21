
window.EMR_DATA = {
  "patient": {
    "name": "Claudia Reyes-Batista",
    "dob": "03/09/1978",
    "age": 47,
    "sex": "Female",
    "mrn": "RDX-2025-42572",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Patricia Morales, MD",
    "pharmacy": "Publix Pharmacy — 3100 Stirling Rd, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Dominican American)",
    "address": "5824 Plunkett St, Hollywood, FL 33023",
    "phone": "(954) 555-7720",
    "email": "c.reyesbatista@email.com",
    "emergencyContact": {
      "name": "Luis Batista (Husband)",
      "phone": "(954) 555-7738"
    },
    "chiefComplaint": "Passed out after feeling short of breath"
  },
  "problems": [
    {
      "problem": "Left Tibial Plateau Fracture — Status Post ORIF",
      "icd": "S82.101A",
      "onset": "2026",
      "status": "Active",
      "notes": "Slip-and-fall at work 01/18/2026; ORIF performed 01/20/2026; non-weight-bearing in long leg cast x 6 weeks; due for cast removal 03/03/2026; VTE prophylaxis: enoxaparin 40mg SQ daily — patient reports inconsistent use due to injection site bruising"
    },
    {
      "problem": "Obesity, BMI 36.2",
      "icd": "E66.01",
      "onset": "2015",
      "status": "Active",
      "notes": "Class II obesity"
    },
    {
      "problem": "Oral Contraceptive Use",
      "icd": "Z79.3",
      "onset": "2020",
      "status": "Active",
      "notes": "Combined OCP (norgestimate-ethinyl estradiol); not stopped perioperatively — additional VTE risk factor"
    },
    {
      "problem": "Migraine Without Aura",
      "icd": "G43.009",
      "onset": "2008",
      "status": "Active",
      "notes": "On sumatriptan PRN; 2-3 episodes per month"
    }
  ],
  "medications": [
    {
      "name": "Enoxaparin 40mg SQ daily",
      "sig": "Inject 40 mg subcutaneously once daily for VTE prophylaxis",
      "prescriber": "Dr. Chen (Orthopedic Surgery)",
      "start": "01/2026",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Norgestimate-Ethinyl Estradiol (Sprintec) daily",
      "sig": "Take 1 tablet by mouth daily per pack directions",
      "prescriber": "Dr. Morales",
      "start": "03/2020",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Sumatriptan 50mg PRN",
      "sig": "Take 1 tablet by mouth at onset of migraine; may repeat once after 2 hours if needed",
      "prescriber": "Dr. Morales",
      "start": "06/2010",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Oxycodone 5mg PRN (post-surgical)",
      "sig": "Take 1 tablet by mouth every 6 hours as needed for severe pain",
      "prescriber": "Dr. Chen (Orthopedic Surgery)",
      "start": "01/2026",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Acetaminophen 500mg PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Morales",
      "start": "01/2026",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Ibuprofen",
      "type": "Drug",
      "reaction": "GI bleeding — melena episode requiring ER visit (2016)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "86/52",
      "hr": 128,
      "rr": 28,
      "temp": "98.8°F",
      "spo2": "88%",
      "wt": "208 lbs",
      "ht": "5'5\"",
      "bmi": 34.6,
      "setting": "ED"
    },
    {
      "date": "02/04/2026",
      "bp": "128/82",
      "hr": 78,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "212 lbs",
      "ht": "5'5\"",
      "bmi": 35.3,
      "setting": "Orthopedic Office"
    },
    {
      "date": "09/18/2025",
      "bp": "126/80",
      "hr": 74,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "214 lbs",
      "ht": "5'5\"",
      "bmi": 35.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/04/2026",
      "type": "Specialist",
      "provider": "Dr. David Chen, MD (Orthopedic Surgery)",
      "cc": "Post-op follow-up — left tibial plateau fracture ORIF, 2 weeks",
      "hpi": "47F presents 2 weeks post-ORIF left tibial plateau fracture. Wound healing well. Pain managed with oxycodone (using 1-2 tabs daily, down from 4/day week 1). Non-weight-bearing in long leg cast. Using wheelchair at home. Reports difficulty with enoxaparin self-injections — large bruises at injection sites; admits missing 3-4 doses in past week. OCP was not stopped prior to surgery (oversight in urgent surgical setting). Denies calf swelling, redness, or SOB.",
      "exam": "Surgical wound (lateral approach): Clean, dry, intact. Staples in place. No erythema, drainage, or dehiscence. Cast intact. Distal pulses palpable. Sensation intact toes. Toes warm, cap refill <2 sec.",
      "assessment": "1. Left tibial plateau fracture — 2 weeks post-ORIF, healing well\n2. VTE prophylaxis non-adherence — concerning given multiple risk factors (fracture, immobility, OCP, obesity)",
      "plan": "1. Staple removal at 3 weeks\n2. CRITICAL: Emphasized importance of enoxaparin adherence — patient has 4 major VTE risk factors (fracture/surgery, immobility, OCP, obesity)\n3. Discussed OCP — recommend stopping; switch to progesterone-only or non-hormonal method; patient to call OB/GYN\n4. Cast removal and transition to hinged brace at 6 weeks (03/03)\n5. Return 2 weeks"
    },
    {
      "id": "V002",
      "date": "09/18/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Morales, MD",
      "cc": "Annual wellness, migraine management",
      "hpi": "47F presents for annual exam. Migraines stable — 2-3/month, responsive to sumatriptan. On combined OCP for contraception and menstrual regulation. Weight stable at 214 lbs. Denies chest pain, dyspnea, or leg swelling.",
      "exam": "Obese female. CV: RRR, no murmurs. Lungs: CTAB. Ext: No edema. Neuro: Intact.",
      "assessment": "1. Migraine — stable\n2. Obesity — counseled on weight management\n3. OCP use — reviewed risk factors; patient declines change",
      "plan": "1. Continue current medications\n2. Labs: Lipid panel, CMP, CBC, A1c\n3. Return 1 year"
    }
  ],
  "labs": [
    {
      "date": "09/18/2025",
      "time": "09:00",
      "orderedBy": "Dr. Morales",
      "collected": "09/18/2025 09:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-800918",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.0",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            {
              "test": "Total Cholesterol",
              "value": "218",
              "unit": "mg/dL",
              "range": "<200",
              "flag": "H"
            },
            {
              "test": "LDL",
              "value": "138",
              "unit": "mg/dL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "HDL",
              "value": "48",
              "unit": "mg/dL",
              "range": ">50",
              "flag": "L"
            },
            {
              "test": "Triglycerides",
              "value": "162",
              "unit": "mg/dL",
              "range": "<150",
              "flag": "H"
            }
          ]
        },
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            {
              "test": "HbA1c",
              "value": "5.6",
              "unit": "%",
              "range": "<5.7",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/18/2026",
      "study": "X-RAY LEFT KNEE AND TIBIA 3-VIEW",
      "accession": "IMG-2026-011822",
      "status": "FINAL",
      "orderedBy": "Dr. Torres (ED)",
      "readBy": "Dr. Alan Wu, MD (Radiology)",
      "facility": "Memorial Regional Hospital — Hollywood, FL",
      "priority": "STAT",
      "clinical": "Fall with left knee pain, inability to bear weight",
      "technique": "AP, lateral, and oblique views of the left knee and proximal tibia.",
      "findings": "Comminuted fracture of the lateral tibial plateau (Schatzker Type II) with 6mm articular depression. No associated fibular fracture. Moderate joint effusion (lipohemarthrosis on cross-table lateral). No distal tibial or femoral fractures.",
      "impression": "1. Schatzker Type II lateral tibial plateau fracture with 6mm depression — surgical candidate.\n2. Lipohemarthrosis consistent with intra-articular fracture.",
      "dictated": "01/18/2026 19:30",
      "verified": "01/18/2026 20:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-9224",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Moderna)",
      "date": "10/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2340",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap",
      "date": "07/2022",
      "site": "Left deltoid IM",
      "lot": "TD22-488",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — Series Complete",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "HP20-508",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: DVT after hip replacement at age 62, HTN, alive at 72",
    "Father: T2DM, CAD — MI at 58, alive at 74",
    "Sister: Factor V Leiden heterozygous (diagnosed after DVT during pregnancy), alive at 50",
    "Brother: Healthy, alive at 44"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Warehouse supervisor at distribution center — on workers' comp leave since fracture"
    ],
    [
      "Marital",
      "Married 18 years; 2 children (ages 12 and 15)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social — 1-2 drinks on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Previously walked 30 min daily; currently immobile in wheelchair since fracture"
    ],
    [
      "Housing",
      "Single-family home with husband and children; bedroom upstairs — sleeping on couch since fracture"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; no firearms"
    ],
    [
      "Advance Directive",
      "None — not discussed"
    ]
  ],
  "meta": {
    "caseId": "pulmonary-embolism-syncope",
    "diagnosis": "Massive Pulmonary Embolism with Syncope (Post-Orthopedic Surgery)",
    "acuity": 1,
    "presentation": "Syncope",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Anxious and frightened about the fainting episode, worried something is seriously wrong. Cooperative but somewhat breathless when speaking. Admits to inconsistent enoxaparin injections due to fear of needles and bruising at injection sites.",
    "interviewQuestions": [
      "Can you tell me exactly what happened when you passed out?",
      "What were you doing right before you fainted?",
      "How long have you been having shortness of breath?",
      "Have you had any chest pain or chest discomfort?",
      "Have you noticed any swelling in your legs, especially the one that wasn't operated on?",
      "Have you been taking your blood thinner injections as prescribed?",
      "Have you had any coughing or coughing up blood?",
      "Any pain or tenderness in your calves or thighs?",
      "Have you been able to get up and move around much since your surgery?",
      "Any recent long car rides or flights before your surgery?",
      "Are you still taking your birth control pills?",
      "Have you ever had blood clots before, or anyone in your family?",
      "Any fevers, chills, or feeling like your heart is racing?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Can you explain that differently? I'm still feeling a bit lightheaded.",
      "onset": "It started about 3 days ago with just feeling a little winded going up stairs on my crutches. This morning I was trying to get dressed and suddenly felt like I couldn't breathe, then everything went black. My husband found me on the bathroom floor.",
      "character": "It feels like I can't get enough air, like I'm breathing through a straw. The shortness of breath gets worse when I try to do anything, even just talking right now.",
      "location": "The breathing problem is just everywhere in my chest. No specific pain location, just can't catch my breath.",
      "severity": "The shortness of breath is probably a 7 out of 10 - it's really scary. I've never felt like this before. The fainting was terrifying.",
      "aggravating": "Any movement makes it worse. Even sitting up in bed or trying to use my crutches makes me feel like I'm going to pass out again.",
      "relieving": "Nothing really helps. Sitting completely still is a little better, but I still feel short of breath.",
      "associated": "My heart feels like it's racing all the time now. I feel dizzy when I stand up. No chest pain exactly, but my chest feels tight.",
      "denies": "No fever, no cough, no blood when I cough. No chest pain like a heart attack. My surgical site doesn't hurt any more than expected.",
      "history": "Never had anything like this before. Never fainted before in my life. Never had breathing problems.",
      "medications": "Enoxaparin 40mg SQ daily; Norgestimate-Ethinyl Estradiol (Sprintec) daily; Sumatriptan 50mg PRN; Oxycodone 5mg PRN (post-surgical); Acetaminophen 500mg PRN",
      "allergies": "Ibuprofen",
      "family": "My mom had a blood clot in her leg after her hip replacement a few years ago. My sister had a blood clot when she was pregnant and they found she has some genetic thing called Factor V Leiden.",
      "social": "I work as a warehouse supervisor but I've been off work since the accident 2 weeks ago. I'm married with two teenagers. I don't smoke, just drink wine occasionally on weekends. No drugs."
    },
    "examManeuvers": [
      "Cardiovascular examination including heart sounds and murmurs",
      "Pulmonary examination including breath sounds and respiratory effort",
      "Lower extremity examination for swelling, erythema, and calf tenderness",
      "Assessment of jugular venous pressure",
      "Evaluation for signs of right heart strain",
      "Orthostatic vital signs",
      "Examination of surgical site",
      "Assessment of peripheral perfusion and capillary refill",
      "Neurologic assessment including mental status",
      "Wells score assessment for DVT/PE risk"
    ],
    "examFindings": {
      "Cardiovascular examination including heart sounds and murmurs": "Tachycardic regular rhythm, S1S2 present, prominent S2P2 component suggesting pulmonary hypertension, no murmurs or gallops clearly audible over tachycardia",
      "Pulmonary examination including breath sounds and respiratory effort": "Tachypneic with shallow respirations, using accessory muscles, breath sounds clear bilaterally, no wheezes or crackles, decreased breath sounds at right base",
      "Lower extremity examination for swelling, erythema, and calf tenderness": "Left leg in cast as expected, right leg with 2+ pitting edema from ankle to mid-calf, mild erythema, tender posterior calf with palpable cord-like structure",
      "Assessment of jugular venous pressure": "JVP elevated to 8 cm, visible jugular venous distention",
      "Evaluation for signs of right heart strain": "Parasternal heave present, hepatojugular reflux positive",
      "Orthostatic vital signs": "Unable to obtain standing vitals due to patient instability and non-weight bearing status, supine to sitting: HR increases from 128 to 142",
      "Examination of surgical site": "Left tibial plateau incision healing appropriately, no signs of infection, cast intact and proper position",
      "Assessment of peripheral perfusion and capillary refill": "Capillary refill 3-4 seconds bilateral upper extremities, cool extremities, weak peripheral pulses",
      "Neurologic assessment including mental status": "Alert and oriented x3, anxious affect, no focal neurologic deficits, moves all extremities appropriately given cast limitations",
      "Wells score assessment for DVT/PE risk": "High risk: recent surgery, prolonged immobilization, family history, obesity, OCP use, clinical signs of DVT"
    },
    "ddxTargets": [
      "Massive Pulmonary Embolism with Syncope (Post-Orthopedic Surgery DVT — Tibial Plateau ORIF with Non-Adherence to VTE Prophylaxis, Active Combined OCP, Obesity, Family History of VTE/Factor V Leiden) (correct diagnosis)",
      "Acute myocardial infarction with cardiogenic shock",
      "Sepsis with hemodynamic compromise",
      "Massive pulmonary embolism with cardiovascular collapse",
      "Acute coronary syndrome with heart failure",
      "Fat embolism syndrome (post-orthopedic surgery)",
      "Medication-induced hypotension with dehydration"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on recent surgery and assuming symptoms are post-operative complications rather than considering VTE despite prophylaxis prescription",
      "prematureClosure": "May quickly assume anxiety or pain medication side effects in young woman without fully evaluating cardiovascular emergency",
      "availabilityBias": "Recent cases of post-operative pain or anxiety may overshadow recognition of life-threatening PE in high-risk patient"
    },
    "coachPrompts": {
      "phase2": "Consider this patient's risk factors carefully. What specific complications should you be most concerned about in someone 2 weeks post-orthopedic surgery? How might the combination of her medications, medical history, and family history influence your approach?",
      "phase5": "Synthesize your findings: syncope, severe dyspnea, tachycardia, hypotension, and signs of right heart strain in a high-risk post-surgical patient. What is the unifying diagnosis that explains all these findings? How does the family history and medication adherence factor in?",
      "finalDebrief": "This case illustrates how multiple risk factors can compound VTE risk even with prescribed prophylaxis. The combination of major orthopedic surgery, immobilization, obesity, active OCP use, family history of Factor V Leiden, and poor prophylaxis adherence created a perfect storm. Early recognition of massive PE with hemodynamic compromise was crucial for appropriate emergent management.",
      "final": "Diagnosis: massive (high-risk) pulmonary embolism with syncope following orthopedic surgery and nonadherence to VTE prophylaxis, in a patient with active malignancy. Key learning: (1) Syncope is an underrecognized presentation of pulmonary embolism. In recent studies, up to 1 in 6 patients admitted for first-episode syncope had PE on systematic workup (PESIT study, though reproducibility has been debated). Mechanism: sudden obstruction of pulmonary circulation causes acute right ventricular failure, reduced LV filling, and transient systemic hypotension with cerebral hypoperfusion. Suspect PE in any syncope with tachycardia, tachypnea, hypoxia, unilateral leg swelling, postoperative state, active malignancy, recent immobilization, or pleuritic chest pain. (2) Risk factors multiply in this case: (a) Recent orthopedic surgery — especially lower extremity (hip, knee, tibial plateau ORIF) — high VTE risk even with prophylaxis; VTE risk lasts weeks. (b) Nonadherence to VTE prophylaxis — orthopedic guidelines recommend 10-35 days of LMWH or DOAC depending on procedure. (c) Active malignancy — independent VTE risk factor (hypercoagulable state; Khorana score stratifies). Cumulative risk multiplies; these patients can develop massive PE despite apparent adherence. (3) Massive PE hemodynamic collapse. Clinical findings: syncope, hypotension or shock, severe dyspnea, profound hypoxia, elevated troponin and BNP, RV dysfunction/dilation on echo or CT. Time-sensitive — mortality is very high without reperfusion. ECG: tachycardia, S1Q3T3 (specific but insensitive), new RBBB, T-wave inversions V1-V4. Bedside echo: acute RV dilation, septal flattening (D-shape), McConnell sign (RV free-wall hypokinesis with preserved apex), sometimes visible clot-in-transit. (4) Management — systemic thrombolysis, catheter-directed therapy, or surgical embolectomy. (a) IV unfractionated heparin bolus (80 units/kg) and infusion — rapid onset and reversibility. (b) Systemic thrombolysis (alteplase 100 mg over 2 hours, or 50 mg for high bleeding risk) for massive PE without absolute contraindications. (c) Catheter-directed thrombolysis or mechanical thrombectomy in centers with capability — lower systemic lysis dose, appealing when bleeding risk is elevated. (d) Surgical pulmonary embolectomy for failed/contraindicated lysis or clot-in-transit. (e) ECMO (VA) as bridge to reperfusion or surgery in refractory shock/arrest. Hemodynamic support: judicious fluids (250-500 mL boluses), norepinephrine as first-line pressor, vasopressin adjunct, avoid intubation if possible (positive pressure and induction can precipitate RV failure collapse). (6) Long-term management and cancer-associated VTE. Anticoagulation is the foundation: DOAC (apixaban, rivaroxaban — both have randomized data supporting use in cancer-associated thrombosis; prefer apixaban in GI cancer for bleeding); LMWH for patients with GI cancer, genitourinary cancer, severe thrombocytopenia, or when DOACs are contraindicated. Duration: at least 6 months, often indefinite while malignancy is active. Cancer-associated VTE has higher recurrence and bleeding rates than non-cancer VTE. Classic pitfalls: (a) missing PE in a patient with 'just syncope' without tachycardia awareness — always check HR, SpO2, and exertional symptoms; Wells, PERC, and PESI tools structure the evaluation. (b) Withholding thrombolysis in massive PE out of bleeding fear — mortality of untreated massive PE is 30-50%. (c) Using warfarin in cancer-associated VTE as first-line (historical) — now superseded by LMWH and DOACs. (d) Stopping anticoagulation at 3-6 months while cancer remains active — high recurrence. (e) Forgetting IVC filter is NOT a routine substitute for anticoagulation — reserved for absolute contraindication and retrieved when anticoagulation can be resumed."
    }
  }
};
