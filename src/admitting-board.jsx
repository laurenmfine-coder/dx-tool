import { useState, useEffect, useCallback, useRef } from "react";

// ═══════════════════════════════════════════════════════════════
// ReasonDx Virtual Hospital — ADMITTING BOARD
// Receive ED handoffs, write admission orders, complete H&P
// Sources: StatPearls/NCBI, AHA/ACC Guidelines, UpToDate
// ═══════════════════════════════════════════════════════════════

const randInt = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const randPick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ═══════════════════════════════════════════════════════════════
// CASE TEMPLATES — Internal Medicine Admissions
// Each has a handoffLevel: 1=Minimal, 2=Partial, 3=Full SBAR
// ═══════════════════════════════════════════════════════════════
const CASE_TEMPLATES = [
  {
    id: "chf-exacerbation",
    presentation: "CHF Exacerbation",
    service: "Internal Medicine",
    category: "cardiovascular",
    difficulty: 2,
    handoffLevel: 2,
    handoff: {
      situation: "68-year-old woman with shortness of breath getting worse over a few days. She can't lie flat. Her legs are swollen.",
      background: "She has heart failure, diabetes, and CKD. She was supposed to be on lasix and lisinopril but she says she ran out of her meds about a week ago.",
      assessment: "Her BNP is elevated, kidney function is a little worse than her baseline. Chest X-ray shows some fluid. She looks volume overloaded.",
      recommendation: "She probably needs to be admitted for diuresis. We gave her 40 of lasix IV down here and she put out about 400cc so far.",
      edSummary: "IV access x2 | Lasix 40mg IV given | O2 2L NC | Tele monitor | Labs, CXR, ECG done"
    },
    variants: [{
      id: "chf-v1",
      diagnosis: "Acute Decompensated Heart Failure (HFrEF)",
      acuity: 3,
      expectedLevel: "Telemetry / Step-Down",
      patient: {
        personalityTraits: ["pleasant", "apologetic", "worried about being a burden"],
        communicationStyle: "Soft-spoken, frequently apologizes for 'being a bother.' Gives reliable history.",
        emotionalState: "Anxious about being admitted, worried about her cat at home",
        medicalLiteracy: "moderate"
      },
      responses: {
        opening: "I just can't catch my breath, honey. It's been getting worse the last few days. I can't even lie down in my bed anymore — I've been sleeping in my recliner for the past two nights. And my ankles are all puffed up. My daughter finally made me come in.",
        severity: "The breathing is probably a 6 or 7. It's not like I'm gasping, but I can't do anything without getting winded. Even walking to the bathroom leaves me out of breath.",
        location: "It's not really a pain. It's more like I just can't get enough air. My chest feels heavy, like there's something sitting on it.",
        onset: "It started maybe 4 or 5 days ago. At first I just thought I was tired. But then I noticed my ankles swelling up, and the breathing got worse every day.",
        character: "It's this heaviness in my chest, and I feel like I'm breathing through a straw sometimes. It's worse when I try to lie flat.",
        worse: "Lying down makes it so much worse. And walking around — even just to the kitchen. I had to stop halfway and sit down last night.",
        better: "Sitting up helps. I've been propping myself up with three pillows. The oxygen they gave me down in the ER helped a little.",
        radiation: "No, it doesn't go anywhere. It's just this heaviness right in the middle of my chest.",
        timing: "It's been pretty constant the last couple days. It's worse at night when I try to sleep."
      },
      clinicalFacts: {
        chiefComplaint: {
          patientPhrasing: ["can't catch my breath", "can't breathe", "short of breath", "winded"],
          avoidPhrasing: ["sharp", "stabbing"],
          location: "chest heaviness, diffuse",
          radiation: [],
          onset: "4-5 days ago, progressive worsening",
          duration: "constant, worsening",
          severity: "6-7/10",
          timing: "worse at night, worse lying flat",
          aggravating: ["lying flat", "exertion", "walking"],
          relieving: ["sitting up", "propping up with pillows", "supplemental O2"]
        },
        associatedSymptoms: {
          present: [
            { name: "orthopnea", patientSays: "I can't lie flat at all. I've been sleeping in my recliner." },
            { name: "PND", patientSays: "I woke up gasping the other night, about 2 or 3 AM. Scared me half to death." },
            { name: "lower extremity edema", patientSays: "My ankles and feet are really swollen. I can barely get my shoes on." },
            { name: "weight gain", patientSays: "I think I've gained about 8 pounds in the last week. My clothes feel tight." },
            { name: "fatigue", patientSays: "I'm just so tired. I don't have energy to do anything." },
            { name: "decreased appetite", patientSays: "I haven't had much appetite. I feel bloated." }
          ],
          absent: [
            { name: "chest pain", patientSays: "No, it's not really a pain. More like pressure or heaviness." },
            { name: "fever", patientSays: "No, I don't think I have a fever." },
            { name: "cough", patientSays: "Maybe a little, mostly when I lie down. Not much." },
            { name: "hemoptysis", patientSays: "No, no blood when I cough." },
            { name: "syncope", patientSays: "No, I haven't passed out." },
            { name: "palpitations", patientSays: "No, I don't feel my heart racing." }
          ]
        },
        pmh: ["Heart failure with reduced EF (EF 30%), diagnosed 3 years ago", "Type 2 diabetes mellitus", "CKD stage 3 (baseline Cr 1.4)", "Hypertension", "Atrial fibrillation (on warfarin)"],
        medications: [
          { name: "Furosemide", dose: "40mg PO daily", patientSays: "A water pill, lasix, once a day. But I ran out about a week ago and couldn't get to the pharmacy.", status: "ran-out" },
          { name: "Lisinopril", dose: "20mg PO daily", patientSays: "A blood pressure pill. I ran out of that one too.", status: "ran-out" },
          { name: "Carvedilol", dose: "12.5mg PO BID", patientSays: "A heart pill I take twice a day. I still have that one.", status: "taking" },
          { name: "Metformin", dose: "1000mg PO BID", patientSays: "My diabetes medicine, twice a day.", status: "taking" },
          { name: "Warfarin", dose: "5mg PO daily", patientSays: "A blood thinner. I take it every night.", status: "taking" },
          { name: "Atorvastatin", dose: "40mg PO nightly", patientSays: "A cholesterol pill at bedtime.", status: "taking" },
          { name: "Potassium chloride", dose: "20mEq PO daily", patientSays: "A potassium pill. I ran out of that with the water pill.", status: "ran-out" }
        ],
        allergies: [{ allergen: "Sulfa drugs", reaction: "rash", patientSays: "Sulfa — I broke out in a rash years ago." }],
        socialHistory: {
          smoking: "Quit 10 years ago. Smoked a pack a day for 20 years before that.",
          alcohol: "Maybe a glass of wine at holidays. Not much at all.",
          drugs: "No, never.",
          occupation: "Retired school librarian",
          livingSituation: "I live alone. My daughter lives about 20 minutes away. She checks on me."
        },
        familyHistory: [
          "My mother had heart problems, she died at 72",
          "My father had diabetes, he lived to 80",
          "My sister has high blood pressure"
        ],
        riskFactors: {
          present: ["known HFrEF", "medication non-adherence", "CKD", "diabetes", "AFib", "former smoker"],
          absent: ["alcohol abuse", "recreational drugs", "recent infection"]
        }
      },
      physicalExam: {
        vitalSigns: { BP: "148/88", HR: "92 irregular", RR: "22", Temp: "98.4°F", SpO2: "93% on 2L NC" },
        general: "Pleasant elderly woman, sitting upright in bed, speaking in short sentences, mild respiratory distress. Using accessory muscles slightly.",
        heent: "Pupils equal and reactive. Mucous membranes moist. JVP elevated to 12cm.",
        neck: "Elevated JVP to 12cm above the sternal angle. No carotid bruits.",
        cardiovascular: "Irregularly irregular rhythm (AFib), rate ~92. S1, S2 present. S3 gallop heard at apex. No murmurs. PMI laterally displaced.",
        pulmonary: "Bibasilar crackles extending one-third up bilaterally. No wheezes.",
        abdominal: "Soft, mildly distended. Tender RUQ with hepatomegaly palpable 3cm below costal margin. Positive hepatojugular reflux.",
        extremities: "3+ pitting edema bilaterally to mid-shins. Warm and well-perfused.",
        neurologic: "Alert and oriented ×4. No focal deficits.",
        skin: "Warm, dry. Stasis dermatitis bilateral lower extremities."
      },
      diagnostics: {
        ecg: {
          findings: ["Atrial fibrillation with ventricular rate 92", "Left axis deviation", "Low voltage in limb leads", "Nonspecific ST-T wave changes"],
          interpretation: "Atrial fibrillation, LVH pattern. No acute ischemic changes."
        },
        labs: [
          { test: "BNP", value: "1,842", unit: "pg/mL", ref: "<100", status: "critical", note: "Markedly elevated, consistent with acute HF" },
          { test: "Troponin I", value: "0.03", unit: "ng/mL", ref: "<0.04", status: "normal", note: "Negative for acute MI" },
          { test: "Sodium", value: "132", unit: "mEq/L", ref: "136-145", status: "abnormal", note: "Mild hyponatremia (dilutional)" },
          { test: "Potassium", value: "4.8", unit: "mEq/L", ref: "3.5-5.0", status: "normal", note: "High-normal, watch with diuresis" },
          { test: "BUN", value: "38", unit: "mg/dL", ref: "7-20", status: "abnormal", note: "Elevated, cardiorenal" },
          { test: "Creatinine", value: "1.8", unit: "mg/dL", ref: "0.6-1.2", status: "abnormal", note: "Above baseline (1.4), AKI on CKD" },
          { test: "eGFR", value: "32", unit: "mL/min", ref: ">60", status: "abnormal" },
          { test: "Glucose", value: "188", unit: "mg/dL", ref: "70-100", status: "abnormal" },
          { test: "Hemoglobin", value: "11.2", unit: "g/dL", ref: "12.0-16.0", status: "abnormal", note: "Mild anemia of chronic disease" },
          { test: "WBC", value: "7.8", unit: "K/μL", ref: "4.5-11.0", status: "normal" },
          { test: "Platelets", value: "198", unit: "K/μL", ref: "150-400", status: "normal" },
          { test: "INR", value: "2.3", unit: "", ref: "2.0-3.0", status: "normal", note: "Therapeutic range for AFib" },
          { test: "Magnesium", value: "1.7", unit: "mg/dL", ref: "1.7-2.2", status: "normal" },
          { test: "Albumin", value: "3.1", unit: "g/dL", ref: "3.5-5.0", status: "abnormal" },
          { test: "HbA1c", value: "7.8", unit: "%", ref: "<7.0", status: "abnormal" }
        ],
        imaging: [
          { study: "Chest X-ray (PA/Lat)", findings: "Cardiomegaly. Bilateral pleural effusions, small to moderate. Cephalization of pulmonary vasculature. Kerley B lines. No consolidation.", interpretation: "Findings consistent with acute decompensated heart failure." },
          { study: "Bedside Echo (POCUS)", findings: "Severely reduced LV systolic function, estimated EF 25-30%. Dilated LV. Moderate mitral regurgitation. Small pericardial effusion. Dilated IVC with <50% collapsibility.", interpretation: "Consistent with known HFrEF. Elevated filling pressures." }
        ]
      },
      teaching: {
        correctDiagnosis: "Acute Decompensated Heart Failure",
        differentialRanked: [
          { dx: "Acute Decompensated Heart Failure", probability: 90, key: "Orthopnea, PND, JVD, S3, edema, elevated BNP, CXR findings" },
          { dx: "Acute Coronary Syndrome", probability: 5, key: "Can precipitate HF; troponin negative here" },
          { dx: "Pneumonia", probability: 3, key: "No fever, no focal consolidation, no leukocytosis" },
          { dx: "Pulmonary Embolism", probability: 2, key: "Less likely with bilateral symmetric findings, classic HF picture" }
        ],
        keyOrders: ["Furosemide IV (dose > oral equivalent)", "Daily weights", "Strict I&O", "Fluid restriction", "Telemetry", "Restart carvedilol", "Hold metformin (AKI)", "Continue warfarin", "Replete K/Mg PRN", "Cardiology consult"],
        criticalMiss: ["DVT prophylaxis (already on warfarin)", "Hold metformin for AKI/Cr >1.5", "Fluid restriction"],
        learningPoints: [
          "Medication non-adherence is the #1 precipitant of acute HF decompensation",
          "IV loop diuretic dose should be ≥ patient's home oral daily dose",
          "Monitor daily weights, I&O, and renal function closely during diuresis",
          "S3 gallop is specific for elevated filling pressures (high specificity)",
          "Hepatojugular reflux suggests right-sided congestion"
        ]
      },
      coachHints: {
        diagnosis: "What findings on exam are most specific for volume overload? How does the BNP help you?",
        orders: "Think about the ADC VAAN DIMLS mnemonic. What level of monitoring does this patient need? What about her home medications — which ones do you restart, hold, or adjust?",
        note: "Your assessment should address the precipitant (why did she decompensate?), the severity, and your plan for each active problem.",
        level: "Consider her hemodynamic status. Does she need ICU-level care, or can she be managed on a monitored floor?"
      }
    }]
  },
  {
    id: "cap-sepsis",
    presentation: "Community-Acquired Pneumonia",
    service: "Internal Medicine",
    category: "pulmonary",
    difficulty: 2,
    handoffLevel: 1,
    handoff: {
      situation: "74-year-old man, cough and fever for 3 days. He was breathing pretty fast when he came in and his blood pressure was on the low side.",
      background: "",
      assessment: "",
      recommendation: "",
      edSummary: "IV access x2 | 1L NS bolus given | Blood cultures x2 drawn | Labs and CXR done"
    },
    variants: [{
      id: "cap-v1",
      diagnosis: "Community-Acquired Pneumonia with Sepsis",
      acuity: 2,
      expectedLevel: "Medicine Floor (consider Step-Down)",
      patient: {
        personalityTraits: ["stoic", "minimizer", "military background"],
        communicationStyle: "Doesn't complain much. You have to ask specifically to get details. Thinks he's 'probably fine.'",
        emotionalState: "Mildly annoyed at being in the ER. Doesn't think it's that serious.",
        medicalLiteracy: "low-moderate"
      },
      responses: {
        opening: "I've got this cough that won't quit. My wife says I have a fever. She made me come in. I told her it's just a cold.",
        severity: "It's not that bad. Maybe a 4. The cough is just annoying more than anything. I'm a little tired I guess.",
        location: "I mean, my chest hurts a little when I cough real hard. Right side, kind of low.",
        onset: "Started about 3 days ago. Just a little tickle in my throat at first, then the cough got worse. The fever started yesterday I think.",
        character: "It's a wet cough now. I'm coughing up some greenish-yellow stuff. The chest thing is only when I cough hard.",
        worse: "Coughing makes the chest hurt worse. And taking a deep breath. I guess I've been a little more winded than usual too.",
        better: "Nothing really. I tried some cough syrup from the store but it didn't do much.",
        radiation: "No, it stays right there in my chest when I cough.",
        timing: "The cough is pretty much all day and night. It's keeping my wife up. The fever comes and goes."
      },
      clinicalFacts: {
        chiefComplaint: {
          patientPhrasing: ["cough", "coughing", "cold that won't go away"],
          avoidPhrasing: ["crushing", "tearing", "worst ever"],
          location: "right lower chest with coughing",
          radiation: [],
          onset: "3 days ago, progressive",
          duration: "constant cough, intermittent fever",
          severity: "4/10 (minimizer — likely worse)",
          timing: "constant, worse at night",
          aggravating: ["deep breathing", "coughing"],
          relieving: ["nothing really"]
        },
        associatedSymptoms: {
          present: [
            { name: "fever", patientSays: "My wife took my temperature, said it was 102 or something. I felt pretty hot last night." },
            { name: "chills", patientSays: "Yeah, I had the shakes last night. Couldn't get warm." },
            { name: "productive cough", patientSays: "I'm coughing up greenish-yellow stuff. Kind of thick." },
            { name: "dyspnea on exertion", patientSays: "I get a little winded going up the stairs now. That's new." },
            { name: "pleuritic chest pain", patientSays: "It hurts right here when I take a deep breath or cough hard. Right side." },
            { name: "fatigue", patientSays: "I've been more tired than usual. Didn't have energy to walk the dog yesterday." },
            { name: "decreased appetite", patientSays: "Haven't felt like eating. Had some soup yesterday." }
          ],
          absent: [
            { name: "hemoptysis", patientSays: "No, no blood in the sputum." },
            { name: "leg swelling", patientSays: "No, my legs are fine." },
            { name: "recent travel", patientSays: "No, haven't been anywhere." },
            { name: "weight loss", patientSays: "No, my weight's been about the same." },
            { name: "night sweats", patientSays: "I was sweaty with the fever, but I don't normally get night sweats." },
            { name: "abdominal pain", patientSays: "No, my belly's fine." },
            { name: "urinary symptoms", patientSays: "No problems there." }
          ]
        },
        pmh: ["COPD (uses inhalers)", "Hypertension", "Benign prostatic hyperplasia", "Osteoarthritis"],
        medications: [
          { name: "Tiotropium", dose: "18mcg inhaled daily", patientSays: "One of those inhaler things I use every morning.", status: "taking" },
          { name: "Albuterol", dose: "PRN", patientSays: "A rescue inhaler. I use it maybe once or twice a week usually. Been using it more the last couple days.", status: "taking" },
          { name: "Lisinopril", dose: "10mg daily", patientSays: "A blood pressure pill.", status: "taking" },
          { name: "Tamsulosin", dose: "0.4mg nightly", patientSays: "Something for my prostate.", status: "taking" },
          { name: "Acetaminophen", dose: "PRN", patientSays: "Tylenol when something hurts.", status: "taking" }
        ],
        allergies: [{ allergen: "NKDA", reaction: "", patientSays: "No drug allergies that I know of." }],
        socialHistory: {
          smoking: "Quit 5 years ago. Smoked about a pack a day for 30 years before that.",
          alcohol: "A couple beers on the weekend. Nothing crazy.",
          drugs: "No.",
          occupation: "Retired Army, then worked at the hardware store until last year.",
          livingSituation: "Live with my wife of 48 years. Two grown kids, they live out of state."
        },
        familyHistory: [
          "Father had lung cancer, he was a smoker too",
          "Mother had a stroke at 78",
          "Brother has COPD"
        ],
        riskFactors: {
          present: ["COPD", "former heavy smoker", "age >65", "possible aspiration risk"],
          absent: ["immunosuppression", "recent hospitalization", "nursing home resident"]
        }
      },
      physicalExam: {
        vitalSigns: { BP: "98/62", HR: "104", RR: "24", Temp: "102.4°F", SpO2: "90% on RA → 95% on 2L NC" },
        general: "Elderly man, sitting upright, appears fatigued. Occasional productive cough during exam. Mild distress.",
        heent: "Dry mucous membranes. No pharyngeal erythema or exudate.",
        neck: "Supple, no JVD, no lymphadenopathy.",
        cardiovascular: "Tachycardic, regular rhythm. S1, S2 normal. No murmurs, gallops.",
        pulmonary: "Decreased breath sounds at right base. Bronchial breath sounds right lower lobe. E-to-A changes (egophony) right base. Dullness to percussion right base. Scattered rhonchi bilaterally.",
        abdominal: "Soft, non-tender, non-distended. Normal bowel sounds.",
        extremities: "No edema. Warm extremities. Cap refill 3 seconds (delayed).",
        neurologic: "Alert and oriented ×4. Mildly slow to respond.",
        skin: "Warm, flushed. No rashes."
      },
      diagnostics: {
        ecg: {
          findings: ["Sinus tachycardia at 104", "Normal axis", "No ST changes"],
          interpretation: "Sinus tachycardia. No acute ischemic changes."
        },
        labs: [
          { test: "WBC", value: "18.2", unit: "K/μL", ref: "4.5-11.0", status: "critical", note: "Leukocytosis with left shift" },
          { test: "Hemoglobin", value: "13.8", unit: "g/dL", ref: "13.5-17.5", status: "normal" },
          { test: "Platelets", value: "142", unit: "K/μL", ref: "150-400", status: "abnormal", note: "Mild thrombocytopenia" },
          { test: "Sodium", value: "134", unit: "mEq/L", ref: "136-145", status: "abnormal" },
          { test: "Potassium", value: "3.8", unit: "mEq/L", ref: "3.5-5.0", status: "normal" },
          { test: "BUN", value: "28", unit: "mg/dL", ref: "7-20", status: "abnormal" },
          { test: "Creatinine", value: "1.3", unit: "mg/dL", ref: "0.7-1.3", status: "normal", note: "High-normal, could be prerenal" },
          { test: "Glucose", value: "142", unit: "mg/dL", ref: "70-100", status: "abnormal", note: "Stress hyperglycemia" },
          { test: "Lactate", value: "2.8", unit: "mmol/L", ref: "<2.0", status: "abnormal", note: "Elevated, meets sepsis criteria" },
          { test: "Procalcitonin", value: "4.2", unit: "ng/mL", ref: "<0.1", status: "critical", note: "Highly suggestive of bacterial infection" },
          { test: "Blood cultures", value: "Pending", unit: "", ref: "", status: "pending", note: "Drawn x2 prior to antibiotics" },
          { test: "Sputum culture", value: "Pending", unit: "", ref: "", status: "pending" }
        ],
        imaging: [
          { study: "Chest X-ray (PA/Lat)", findings: "Right lower lobe consolidation with air bronchograms. Small right-sided parapneumonic effusion. No pneumothorax. Heart size normal.", interpretation: "Right lower lobe pneumonia with small effusion." }
        ]
      },
      teaching: {
        correctDiagnosis: "Community-Acquired Pneumonia with Sepsis (CURB-65: 3)",
        differentialRanked: [
          { dx: "Community-Acquired Pneumonia with Sepsis", probability: 85, key: "Productive cough, fever, RLL consolidation, leukocytosis, elevated procalcitonin" },
          { dx: "Lung Abscess / Empyema", probability: 5, key: "Monitor effusion; if worsening, consider CT and thoracentesis" },
          { dx: "Pulmonary Embolism", probability: 5, key: "Tachycardia + hypoxia warrants consideration; Wells score likely low" },
          { dx: "COPD Exacerbation with Superimposed PNA", probability: 5, key: "Has COPD; may need bronchodilators in addition to antibiotics" }
        ],
        keyOrders: ["Ceftriaxone 1g IV daily + Azithromycin 500mg IV daily", "Blood cultures before antibiotics (already done)", "NS bolus for MAP <65", "Supplemental O2 to SpO2 ≥92%", "Continue home inhalers", "DVT prophylaxis", "Sputum culture", "Repeat lactate in 4-6 hours"],
        criticalMiss: ["Antibiotics within 1 hour (sepsis)", "Repeat lactate", "DVT prophylaxis", "Continue bronchodilators"],
        learningPoints: [
          "CURB-65 ≥3 suggests high severity — consider ICU if ≥4 or if hemodynamically unstable",
          "Sepsis = suspected infection + SOFA ≥2 (here: hypotension, tachycardia, elevated lactate, thrombocytopenia)",
          "Hour-1 sepsis bundle: cultures, antibiotics, lactate, 30mL/kg crystalloid if hypotensive",
          "Empiric CAP coverage for inpatient: respiratory fluoroquinolone OR beta-lactam + macrolide",
          "Repeat lactate in 4-6 hours to assess clearance — lactate clearance >10% is a positive prognostic sign"
        ]
      },
      coachHints: {
        diagnosis: "What scoring system helps you assess pneumonia severity? How does the lactate change your approach?",
        orders: "There's a time-sensitive bundle you should be thinking about. What needs to happen in the first hour?",
        note: "Make sure your assessment addresses the severity score and sepsis criteria. What's your plan if he doesn't improve with fluids?",
        level: "Think about his hemodynamics. A floor bed might be fine, but what parameters would make you escalate to step-down or ICU?"
      }
    }]
  },
  {
    id: "dka",
    presentation: "Diabetic Ketoacidosis",
    service: "Internal Medicine",
    category: "endocrine",
    difficulty: 3,
    handoffLevel: 3,
    handoff: {
      situation: "28-year-old man with Type 1 diabetes, came in confused with fruity breath. He's in DKA.",
      background: "His insulin pump malfunctioned 2 days ago. He's been feeling sick, vomiting, abdominal pain. Sugars have been in the 400s. Has a history of DKA twice before. He also has CKD stage 2.",
      assessment: "Glucose 486, pH 7.18, bicarb 8, anion gap 24. He's in severe DKA. We started the insulin drip at 0.14 units/kg/hr and he's getting NS wide open. Potassium is 5.2 but that'll drop fast once insulin kicks in.",
      recommendation: "He needs to go to the ICU for the insulin drip and hourly labs. His pump needs to be addressed by endo. He'll need a BMP every 2 hours until the gap closes. His K is 5.2 now but you'll need to replete aggressively once it starts dropping. Don't turn off the drip until bicarb is over 18, gap is closed, and he can eat.",
      edSummary: "IV access x2 (18G) | Insulin drip started 0.14u/kg/hr | NS 1L bolus x2 | Foley placed | K 5.2, monitoring closely | ABG, BMP, CBC, UA done"
    },
    variants: [{
      id: "dka-v1",
      diagnosis: "Diabetic Ketoacidosis (Severe)",
      acuity: 2,
      expectedLevel: "ICU",
      patient: {
        personalityTraits: ["frustrated", "self-aware", "scared"],
        communicationStyle: "Knows his disease well. Frustrated this happened again. Speaking slowly, slightly confused.",
        emotionalState: "Scared but trying to downplay it. Knows he's sick.",
        medicalLiteracy: "high"
      },
      responses: {
        opening: "My pump... it stopped working two days ago. I tried to cover with pens but I couldn't keep up. I've been throwing up since yesterday. I know what this is. It happened before.",
        severity: "I feel pretty terrible. The nausea is probably an 8. The belly pain is maybe a 6. And I'm just... foggy. Can't think straight.",
        location: "My stomach hurts all over. It's kind of crampy. And I feel like I need to throw up all the time.",
        onset: "The pump alarmed two days ago. I noticed my sugars climbing that evening. By yesterday morning I was throwing up and I knew I was in trouble.",
        character: "It's a deep, achy pain in my belly. Not sharp. And the nausea is constant. I've thrown up probably 6 or 7 times since yesterday.",
        worse: "Eating or drinking anything makes me throw up. The belly pain gets worse when I try to drink water.",
        better: "The IV fluids are helping a little. I don't feel quite as dizzy.",
        radiation: "No, just my whole belly.",
        timing: "It's been getting worse since yesterday. The throwing up started yesterday morning and hasn't stopped."
      },
      clinicalFacts: {
        chiefComplaint: {
          patientPhrasing: ["throwing up", "belly hurts", "can't think straight", "pump broke"],
          avoidPhrasing: ["chest pain", "headache"],
          location: "diffuse abdominal pain",
          radiation: [],
          onset: "2 days since pump failure, vomiting since yesterday",
          duration: "progressive over 2 days",
          severity: "nausea 8/10, abdominal pain 6/10",
          timing: "constant and worsening",
          aggravating: ["PO intake"],
          relieving: ["IV fluids slightly"]
        },
        associatedSymptoms: {
          present: [
            { name: "nausea/vomiting", patientSays: "I've thrown up 6 or 7 times since yesterday. Can't keep anything down." },
            { name: "polyuria", patientSays: "I've been peeing constantly. Like every 30 minutes." },
            { name: "polydipsia", patientSays: "I'm so thirsty but everything I drink comes right back up." },
            { name: "fatigue", patientSays: "I can barely keep my eyes open." },
            { name: "confusion", patientSays: "I feel foggy. Like I can't think right. My roommate said I wasn't making sense this morning." },
            { name: "abdominal pain", patientSays: "My whole belly hurts. It's achy and crampy." },
            { name: "Kussmaul breathing", patientSays: "I don't know, I guess I'm breathing kind of fast? I feel like I can't catch my breath." }
          ],
          absent: [
            { name: "fever", patientSays: "No, I don't think I have a fever." },
            { name: "diarrhea", patientSays: "No diarrhea." },
            { name: "chest pain", patientSays: "No chest pain." },
            { name: "headache", patientSays: "Not really a headache. Just foggy." },
            { name: "blood in vomit", patientSays: "No blood. Just bile and whatever I tried to eat." }
          ]
        },
        pmh: ["Type 1 diabetes mellitus (on insulin pump, 12 years)", "CKD stage 2", "Prior DKA x2 (ages 19 and 23)"],
        medications: [
          { name: "Insulin (pump)", dose: "Basal 0.8u/hr, variable bolus", patientSays: "I use a pump for my insulin. It malfunctioned.", status: "malfunctioning" },
          { name: "Insulin Lispro (pen)", dose: "Backup, variable", patientSays: "I have backup pens but I couldn't keep up. My sugars were too high.", status: "taking-inadequately" },
          { name: "Lisinopril", dose: "5mg daily", patientSays: "For my kidneys, a small dose.", status: "taking" }
        ],
        allergies: [{ allergen: "NKDA", reaction: "", patientSays: "No allergies." }],
        socialHistory: {
          smoking: "No, never.",
          alcohol: "Socially, maybe once a month. I'm careful with my sugar.",
          drugs: "No.",
          occupation: "Software engineer. I work from home.",
          livingSituation: "I live with my roommate in an apartment."
        },
        familyHistory: [
          "Mother has Type 2 diabetes",
          "Father is healthy",
          "No siblings"
        ],
        riskFactors: {
          present: ["Type 1 DM", "insulin pump failure", "prior DKA episodes", "CKD"],
          absent: ["infection", "substance use", "missed diagnosis"]
        }
      },
      physicalExam: {
        vitalSigns: { BP: "108/68", HR: "118", RR: "28 (Kussmaul)", Temp: "98.1°F", SpO2: "99%" },
        general: "Young man, appears acutely ill. Deep, rapid breathing (Kussmaul). Fruity odor on breath. Slightly confused but following commands. Dry mucous membranes.",
        heent: "Dry mucous membranes. Sunken eyes. Fruity breath odor.",
        neck: "Supple. No JVD.",
        cardiovascular: "Tachycardic, regular rhythm. S1, S2 normal. No murmurs.",
        pulmonary: "Clear to auscultation bilaterally. Kussmaul breathing pattern (deep, rapid).",
        abdominal: "Diffusely tender to palpation, no rebound or guarding. Decreased bowel sounds. No organomegaly.",
        extremities: "No edema. Delayed cap refill (3 seconds). Dry skin.",
        neurologic: "GCS 14 (E4V4M6). Oriented to person and place, uncertain about date. No focal deficits.",
        skin: "Dry, tenting present. Insulin pump visible on left abdomen (alarming)."
      },
      diagnostics: {
        ecg: {
          findings: ["Sinus tachycardia at 118", "Peaked T waves (consistent with K 5.2)", "No ST changes"],
          interpretation: "Sinus tachycardia. Peaked T waves suggesting hyperkalemia."
        },
        labs: [
          { test: "Glucose", value: "486", unit: "mg/dL", ref: "70-100", status: "critical" },
          { test: "pH (ABG)", value: "7.18", unit: "", ref: "7.35-7.45", status: "critical", note: "Severe acidosis" },
          { test: "pCO2", value: "18", unit: "mmHg", ref: "35-45", status: "abnormal", note: "Appropriate respiratory compensation" },
          { test: "HCO3", value: "8", unit: "mEq/L", ref: "22-28", status: "critical" },
          { test: "Anion Gap", value: "24", unit: "", ref: "8-12", status: "critical", note: "Severe AGMA" },
          { test: "Sodium", value: "128", unit: "mEq/L", ref: "136-145", status: "abnormal", note: "Corrected Na: 135 (pseudohyponatremia)" },
          { test: "Potassium", value: "5.2", unit: "mEq/L", ref: "3.5-5.0", status: "abnormal", note: "Will drop rapidly with insulin — replete early" },
          { test: "BUN", value: "32", unit: "mg/dL", ref: "7-20", status: "abnormal" },
          { test: "Creatinine", value: "1.6", unit: "mg/dL", ref: "0.7-1.3", status: "abnormal", note: "AKI on CKD2 (baseline 1.1)" },
          { test: "Beta-hydroxybutyrate", value: "6.8", unit: "mmol/L", ref: "<0.6", status: "critical" },
          { test: "Phosphorus", value: "4.8", unit: "mg/dL", ref: "2.5-4.5", status: "abnormal", note: "Will drop, monitor" },
          { test: "WBC", value: "14.2", unit: "K/μL", ref: "4.5-11.0", status: "abnormal", note: "Stress leukocytosis (not necessarily infection)" },
          { test: "Hemoglobin", value: "16.1", unit: "g/dL", ref: "13.5-17.5", status: "normal", note: "Hemoconcentrated" },
          { test: "UA", value: "Large ketones, large glucose", unit: "", ref: "Negative", status: "abnormal" }
        ],
        imaging: []
      },
      teaching: {
        correctDiagnosis: "Severe DKA — Insulin Pump Failure",
        differentialRanked: [
          { dx: "Diabetic Ketoacidosis", probability: 95, key: "AG 24, pH 7.18, glucose 486, ketones, known T1DM with pump failure" },
          { dx: "Alcoholic Ketoacidosis", probability: 2, key: "Minimal alcohol use, not consistent" },
          { dx: "Sepsis-triggered DKA", probability: 3, key: "No fever, no source identified, but monitor" }
        ],
        keyOrders: ["Insulin drip (continue per DKA protocol)", "BMP q2h until gap closed", "K replacement when K <5.0", "NS then switch to D5 1/2NS when glucose <250", "Hourly POC glucose", "Foley for strict I&O", "Endocrinology consult (pump)", "Phosphorus replacement if <2.0", "Hold lisinopril (AKI)"],
        criticalMiss: ["K replacement protocol", "Switch to dextrose-containing fluids when glucose <250", "Don't stop insulin drip until AG closed + bicarb >18 + patient eating", "Endocrine consult for pump"],
        learningPoints: [
          "In DKA, K shifts extracellularly — a 'normal' K of 5.2 actually means total body K is depleted. It will drop fast with insulin.",
          "Never stop the insulin drip based on glucose alone — you need AG closure + bicarb normalization + ability to eat",
          "Corrected sodium = measured Na + 1.6 × ((glucose - 100) / 100). True Na is often higher than measured.",
          "DKA abdominal pain is common and resolves with treatment — if it persists, investigate further",
          "Cerebral edema risk is real but rare in adults; avoid overly rapid correction of osmolality"
        ]
      },
      coachHints: {
        diagnosis: "The ED is giving you a clear diagnosis here. Your job is to understand the severity and plan the ICU management. What makes this 'severe' DKA?",
        orders: "Think about the DKA protocol. What do you monitor hourly? Every 2 hours? What are the triggers for changing the IV fluids?",
        note: "Your note should document the DKA severity criteria, the precipitant, and a clear protocol plan with transition criteria.",
        level: "Why does this patient need ICU and not just telemetry?"
      }
    }]
  },
  {
    id: "gi-bleed",
    presentation: "Upper GI Bleed",
    service: "Internal Medicine",
    category: "gastroenterology",
    difficulty: 2,
    handoffLevel: 1,
    handoff: {
      situation: "62-year-old man who's been vomiting blood. He also says his stools have been black and tarry for a couple days. His hemoglobin came back at 8.2.",
      background: "",
      assessment: "",
      recommendation: "",
      edSummary: "IV access x2 (18G) | Type & Cross sent | NS 500mL bolus given | Pantoprazole 80mg IV push given | Protonix drip ordered"
    },
    variants: [{
      id: "gib-v1",
      diagnosis: "Upper GI Bleed — Peptic Ulcer Disease",
      acuity: 2,
      expectedLevel: "Step-Down / ICU (if hemodynamically unstable)",
      patient: {
        personalityTraits: ["nervous", "talkative when anxious", "doesn't follow medical advice well"],
        communicationStyle: "Talks a lot when nervous. Asks 'Am I going to be okay?' frequently. Will admit to NSAIDs if asked directly.",
        emotionalState: "Scared by the blood. Worried about cancer.",
        medicalLiteracy: "low"
      },
      responses: {
        opening: "I threw up blood this morning. Like, actual blood. Dark red, kind of like coffee grounds. And I've been having these black, sticky stools for a couple days. I'm pretty freaked out, doc.",
        severity: "The throwing up blood, that's a 10 on the scary scale. Pain-wise, my stomach's been bothering me for a few weeks, maybe a 5 or 6. Like a burning feeling.",
        location: "Right here, in the pit of my stomach. It's been burning for weeks actually. I thought it was just heartburn.",
        onset: "The black stools started maybe 3 or 4 days ago. I thought it was something I ate at first. Then this morning I threw up and there was blood in it.",
        character: "The stomach pain is a burning, gnawing feeling. Like something eating at me. The blood was dark, like coffee grounds.",
        worse: "Eating sometimes makes it worse. Or sometimes it's worse on an empty stomach. I can't really tell. And I've been taking a lot of Advil for my back — probably too much.",
        better: "Antacids help for a little while. Tums, Pepto-Bismol. But it comes back.",
        radiation: "Sometimes the burning goes up into my chest, like heartburn.",
        timing: "The stomach burning has been on and off for 6 weeks maybe. But the blood is just the last few days."
      },
      clinicalFacts: {
        chiefComplaint: {
          patientPhrasing: ["threw up blood", "coffee ground", "black stools", "burning stomach"],
          avoidPhrasing: ["chest pressure", "tearing"],
          location: "epigastric burning",
          radiation: ["retrosternal occasionally (heartburn)"],
          onset: "epigastric pain 6 weeks, melena 3-4 days, hematemesis today",
          duration: "intermittent pain for weeks, acute bleeding",
          severity: "pain 5-6/10, hematemesis very distressing",
          timing: "pain worse with meals or on empty stomach; bleeding escalating",
          aggravating: ["NSAIDs (ibuprofen)", "empty stomach", "meals"],
          relieving: ["antacids (temporary)"]
        },
        associatedSymptoms: {
          present: [
            { name: "hematemesis", patientSays: "I threw up dark blood this morning. Looked like coffee grounds." },
            { name: "melena", patientSays: "My stools have been black and really sticky for a few days. They smell terrible." },
            { name: "epigastric pain", patientSays: "I've had this burning in my stomach for weeks." },
            { name: "lightheadedness", patientSays: "I got real dizzy when I stood up this morning. Almost fell over." },
            { name: "fatigue", patientSays: "I've been more tired than usual the last week or so." },
            { name: "NSAID use", patientSays: "I take a lot of Advil for my back. Probably 4 or 5 of the 200mg ones a day, sometimes more. Been doing that for months." }
          ],
          absent: [
            { name: "bright red blood per rectum", patientSays: "No bright red blood. Just the black stuff." },
            { name: "weight loss", patientSays: "Maybe lost a few pounds, not on purpose." },
            { name: "dysphagia", patientSays: "No trouble swallowing." },
            { name: "fever", patientSays: "No fever." },
            { name: "abdominal distension", patientSays: "My belly doesn't look swollen." }
          ]
        },
        pmh: ["Chronic low back pain", "Hypertension", "GERD (doesn't take meds for it)", "Mild osteoarthritis of knees"],
        medications: [
          { name: "Ibuprofen", dose: "800-1000mg daily (self-medicating)", patientSays: "Advil. I take a lot of it for my back. My doctor told me to stop but it's the only thing that helps.", status: "taking-risky" },
          { name: "Amlodipine", dose: "5mg daily", patientSays: "A blood pressure pill.", status: "taking" },
          { name: "Omeprazole", dose: "20mg daily (prescribed but not taking)", patientSays: "My doctor gave me something for stomach acid but I stopped taking it. Didn't think I needed it.", status: "not-taking" }
        ],
        allergies: [{ allergen: "Codeine", reaction: "nausea", patientSays: "Codeine makes me real nauseous." }],
        socialHistory: {
          smoking: "Half a pack a day for 25 years.",
          alcohol: "I have a few beers after work. Maybe 3 or 4 a day.",
          drugs: "No.",
          occupation: "Construction worker. That's why my back is bad.",
          livingSituation: "Live with my girlfriend."
        },
        familyHistory: [
          "Father had colon cancer at 70",
          "Mother has high blood pressure",
          "No family history of bleeding disorders"
        ],
        riskFactors: {
          present: ["chronic NSAID use", "alcohol use", "smoking", "stopped PPI", "H. pylori (unknown status)"],
          absent: ["anticoagulant use", "liver disease (evaluate)", "prior GI surgery"]
        }
      },
      physicalExam: {
        vitalSigns: { BP: "104/68", HR: "108", RR: "18", Temp: "98.6°F", SpO2: "98%" },
        general: "Anxious middle-aged man, pale-appearing. No acute distress but appears tired and worried.",
        heent: "Pale conjunctivae. Dry mucous membranes.",
        neck: "No JVD. No lymphadenopathy.",
        cardiovascular: "Tachycardic, regular rhythm. No murmurs.",
        pulmonary: "Clear bilaterally.",
        abdominal: "Soft, tender to palpation in epigastrium. No rebound or guarding. No hepatosplenomegaly. No ascites. Normal bowel sounds.",
        extremities: "No edema. Cap refill 3 seconds. Cool hands.",
        neurologic: "Alert and oriented ×4.",
        skin: "Pale. No spider angiomata. No palmar erythema. No jaundice.",
        rectal: "Black, tarry stool on exam. Guaiac positive."
      },
      diagnostics: {
        ecg: {
          findings: ["Sinus tachycardia at 108", "Normal axis", "No ST changes"],
          interpretation: "Sinus tachycardia. No ischemic changes."
        },
        labs: [
          { test: "Hemoglobin", value: "8.2", unit: "g/dL", ref: "13.5-17.5", status: "critical", note: "Significant anemia, likely acute-on-chronic blood loss" },
          { test: "Hematocrit", value: "24.8", unit: "%", ref: "38-50", status: "critical" },
          { test: "MCV", value: "82", unit: "fL", ref: "80-100", status: "normal", note: "Normocytic — consider mixed iron deficiency + acute loss" },
          { test: "Platelets", value: "224", unit: "K/μL", ref: "150-400", status: "normal" },
          { test: "BUN", value: "42", unit: "mg/dL", ref: "7-20", status: "abnormal", note: "Elevated BUN:Cr ratio suggests upper GI bleed" },
          { test: "Creatinine", value: "1.0", unit: "mg/dL", ref: "0.7-1.3", status: "normal" },
          { test: "INR", value: "1.1", unit: "", ref: "<1.5", status: "normal" },
          { test: "Lactate", value: "2.2", unit: "mmol/L", ref: "<2.0", status: "abnormal", note: "Mildly elevated, monitor" },
          { test: "Type & Screen", value: "O positive, antibody negative", unit: "", ref: "", status: "normal" },
          { test: "LFTs (AST/ALT/ALP/Bili)", value: "32/28/88/0.9", unit: "U/L", ref: "Normal ranges", status: "normal", note: "No evidence of liver disease" },
          { test: "Albumin", value: "3.4", unit: "g/dL", ref: "3.5-5.0", status: "abnormal" },
          { test: "Iron studies", value: "Pending", unit: "", ref: "", status: "pending" }
        ],
        imaging: []
      },
      teaching: {
        correctDiagnosis: "Upper GI Bleed — likely peptic ulcer disease (NSAID-induced)",
        differentialRanked: [
          { dx: "Peptic Ulcer Disease (NSAID-induced)", probability: 75, key: "Chronic NSAID use, epigastric burning, coffee-ground emesis, stopped PPI" },
          { dx: "Gastritis / Erosive Gastropathy", probability: 10, key: "NSAIDs + alcohol; may coexist with ulcer" },
          { dx: "Esophageal Varices", probability: 5, key: "Alcohol use warrants consideration; LFTs normal, no stigmata of CLD" },
          { dx: "Mallory-Weiss Tear", probability: 5, key: "Vomiting could cause; usually bright red" },
          { dx: "Malignancy (Gastric)", probability: 5, key: "Age, smoking, weight loss — EGD will evaluate" }
        ],
        keyOrders: ["Pantoprazole drip 8mg/hr (after 80mg bolus, already given)", "Type & Crossmatch 2 units pRBCs", "Transfuse for Hgb <7 (or <8 if symptomatic/cardiac history)", "GI consult for urgent EGD", "NPO", "Serial H/H q6h", "2 large-bore IVs (already done)", "STOP all NSAIDs", "Restart PPI (IV then oral)", "H. pylori testing (at EGD)"],
        criticalMiss: ["STOP NSAIDs permanently", "GI consult for EGD", "NPO status", "Transfusion threshold awareness", "DVT prophylaxis (consider risk-benefit)"],
        learningPoints: [
          "Glasgow-Blatchford Score ≥1 requires inpatient management; this patient scores high",
          "BUN:Cr ratio >20:1 with normal Cr suggests upper GI source",
          "Transfuse pRBCs for Hgb <7 (restrictive) or <8-9 if symptomatic/ACS",
          "PPI drip reduces rebleeding after endoscopic therapy",
          "Always ask about NSAID use — patients often don't consider OTC meds as 'medications'"
        ]
      },
      coachHints: {
        diagnosis: "The coffee-ground emesis and melena point to a source. What risk factors does this patient have for ulcer disease specifically?",
        orders: "You need two urgent things: resuscitation and stopping the bleeding. What's your transfusion threshold? When should GI scope him?",
        note: "Make sure you document the risk factors, the Glasgow-Blatchford score, and what you're doing about the NSAIDs long-term.",
        level: "His hemodynamics are borderline. What would push you toward ICU vs. step-down?"
      }
    }]
  }
];

// ═══════════════════════════════════════════════════════════════
// PATIENT GENERATOR
// ═══════════════════════════════════════════════════════════════
function generatePatient(template, variant) {
  const demo = template.demographics || { ageRange: [30, 80], genderDistribution: { male: 0.5, female: 0.5 } };
  const gender = Math.random() < (demo.genderDistribution?.male || 0.5) ? "male" : "female";
  const age = variant.clinicalFacts?.chiefComplaint ? 
    parseInt(template.handoff.situation.match(/(\d+)-year-old/)?.[1]) || randInt(demo.ageRange?.[0] || 30, demo.ageRange?.[1] || 80) :
    randInt(demo.ageRange?.[0] || 30, demo.ageRange?.[1] || 80);
  const names = {
    male: ["James Rodriguez", "Walter Chen", "Frank DeLuca", "David Okonkwo", "Michael Shapiro", "Robert Singh", "Thomas Park", "Anthony Russo"],
    female: ["Margaret Sullivan", "Linda Nguyen", "Patricia Williams", "Susan Miller", "Maria Santos", "Dorothy Chen", "Helen Patel", "Carol Thompson"]
  };
  const name = variant.id === "chf-v1" ? "Margaret Sullivan" :
               variant.id === "cap-v1" ? "Walter Okonkwo" :
               variant.id === "dka-v1" ? "Jaylen Carter" :
               variant.id === "gib-v1" ? "Frank DeLuca" :
               randPick(names[gender]);

  const now = new Date();
  const vs = variant.physicalExam.vitalSigns;
  return {
    id: `pt-${Date.now()}-${randInt(100,999)}`,
    name, age, gender,
    mrn: `MRN-${randInt(100000, 999999)}`,
    service: template.service,
    templateId: template.id,
    variant,
    handoffLevel: template.handoffLevel,
    handoff: template.handoff,
    status: "pending-acceptance",
    acceptedAt: null,
    arrivalTime: new Date(now - randInt(60, 180) * 60000).toISOString(),
    codeStatus: "Full Code",
    interviewHistory: [],
    examPerformed: false,
    orderedTests: [],
    completedTests: [],
    orderedMeds: [],
    orderedConsults: [],
    orderedNursing: [],
    orderedFluids: [],
    admissionOrders: {},
    medReconciliation: (variant.clinicalFacts.medications || []).map(m => ({ ...m, decision: null })),
    notes: [],
    ddxList: [],
    physicalExam: variant.physicalExam,
    diagnostics: variant.diagnostics,
    vitalsLog: [{ time: now.toISOString(), label: "ED Triage", ...vs, source: "ED RN" }],
    nursingNotes: [{ time: now.toISOString(), author: "ED RN", text: `Patient transferred from ED. Chief complaint: ${template.presentation}. IV access in place.` }],
    selectedLevel: null,
    selectedService: template.service,
    completionSteps: { accepted: false, service: false, level: false, exam: false, orders: false, note: false },
    coachHistory: [],
    coachCallCount: 0,
    aiCallCount: 0
  };
}

// ═══════════════════════════════════════════════════════════════
// ADMISSION ORDER MENU — ADC VAAN DIMLS Framework
// ═══════════════════════════════════════════════════════════════
const ADMISSION_ORDER_MENU = {
  admit: {
    label: "Admit To",
    icon: "🏥",
    framework: "A",
    items: [
      { id: "floor-im", name: "Medicine Floor", cat: "Service" },
      { id: "tele", name: "Telemetry / Step-Down", cat: "Service" },
      { id: "icu", name: "Intensive Care Unit", cat: "Service" },
      { id: "obs", name: "Observation Status", cat: "Service" }
    ]
  },
  diagnosis: {
    label: "Diagnosis",
    icon: "📋",
    framework: "D",
    items: [] // Free text
  },
  condition: {
    label: "Condition",
    icon: "📊",
    framework: "C",
    items: [
      { id: "stable", name: "Stable" },
      { id: "guarded", name: "Guarded" },
      { id: "serious", name: "Serious" },
      { id: "critical", name: "Critical" }
    ]
  },
  vitals: {
    label: "Vitals",
    icon: "📈",
    framework: "V",
    items: [
      { id: "vs-q4h", name: "Vital Signs q4h (routine)" },
      { id: "vs-q2h", name: "Vital Signs q2h" },
      { id: "vs-q1h", name: "Vital Signs q1h" },
      { id: "vs-continuous", name: "Continuous Monitoring" },
      { id: "notify-sbp-180", name: "Notify MD if SBP >180 or <90" },
      { id: "notify-hr-120", name: "Notify MD if HR >120 or <50" },
      { id: "notify-temp", name: "Notify MD if Temp >38.5°C / 101.3°F" },
      { id: "notify-spo2", name: "Notify MD if SpO2 <92%" },
      { id: "notify-uop", name: "Notify MD if UOP <30mL/hr" }
    ]
  },
  activity: {
    label: "Activity",
    icon: "🚶",
    framework: "A",
    items: [
      { id: "bed-rest", name: "Bedrest" },
      { id: "bed-brp", name: "Bedrest with Bathroom Privileges" },
      { id: "up-ad-lib", name: "Up Ad Lib" },
      { id: "ambulate-tid", name: "Ambulate TID with Assistance" },
      { id: "fall-precautions", name: "Fall Precautions" },
      { id: "seizure-precautions", name: "Seizure Precautions" },
      { id: "aspiration-precautions", name: "Aspiration Precautions" }
    ]
  },
  allergies: {
    label: "Allergies",
    icon: "⚠️",
    framework: "A",
    items: [] // Populated from patient data
  },
  nursing: {
    label: "Nursing",
    icon: "👩‍⚕️",
    framework: "N",
    items: [
      { id: "io", name: "Strict Intake & Output" },
      { id: "daily-weight", name: "Daily Weights" },
      { id: "blood-glucose-ac-hs", name: "Blood Glucose AC + HS (before meals + bedtime)" },
      { id: "blood-glucose-q1h", name: "Blood Glucose q1h" },
      { id: "blood-glucose-q2h", name: "Blood Glucose q2h" },
      { id: "neuro-checks-q1h", name: "Neuro Checks q1h" },
      { id: "neuro-checks-q4h", name: "Neuro Checks q4h" },
      { id: "wound-care", name: "Wound Care / Dressing Change Daily" },
      { id: "incentive-spiro", name: "Incentive Spirometry q1h while awake" },
      { id: "scds", name: "Sequential Compression Devices (SCDs)" },
      { id: "foley-care", name: "Foley Catheter Care" },
      { id: "telemetry", name: "Continuous Telemetry" },
      { id: "cont-pulse-ox", name: "Continuous Pulse Oximetry" }
    ]
  },
  diet: {
    label: "Diet",
    icon: "🍽️",
    framework: "D",
    items: [
      { id: "npo", name: "NPO (Nothing by Mouth)" },
      { id: "clear-liquid", name: "Clear Liquid Diet" },
      { id: "regular", name: "Regular Diet" },
      { id: "cardiac", name: "Cardiac / Low Sodium Diet (<2g Na)" },
      { id: "renal", name: "Renal Diet" },
      { id: "diabetic", name: "Diabetic / Carb-Controlled Diet" },
      { id: "mechanical-soft", name: "Mechanical Soft Diet" },
      { id: "fluid-restrict", name: "Fluid Restriction (1.5L/day)" }
    ]
  },
  ivFluids: {
    label: "IV Fluids",
    icon: "💧",
    framework: "I",
    items: [
      { id: "ns-125", name: "Normal Saline 125 mL/hr" },
      { id: "ns-75", name: "Normal Saline 75 mL/hr" },
      { id: "lr-125", name: "Lactated Ringer's 125 mL/hr" },
      { id: "d5ns-125", name: "D5 Normal Saline 125 mL/hr" },
      { id: "d5-half-ns", name: "D5 1/2NS 125 mL/hr" },
      { id: "d10-100", name: "D10W 100 mL/hr" },
      { id: "ns-kvo", name: "Normal Saline KVO (10 mL/hr)" },
      { id: "ns-bolus-1L", name: "NS 1L Bolus (over 1 hour)" },
      { id: "bicarb-drip", name: "D5W + 150mEq NaHCO3 at 150 mL/hr" }
    ]
  },
  medications: {
    label: "Medications",
    icon: "💊",
    framework: "M",
    items: [
      // DVT prophylaxis
      { id: "heparin-sq", name: "Heparin 5000 units SQ q8h (DVT prophylaxis)", cat: "DVT Prophylaxis" },
      { id: "enoxaparin", name: "Enoxaparin 40mg SQ daily (DVT prophylaxis)", cat: "DVT Prophylaxis" },
      // Stress ulcer prophylaxis
      { id: "pantoprazole-iv", name: "Pantoprazole 40mg IV q12h", cat: "GI Prophylaxis" },
      { id: "pantoprazole-po", name: "Pantoprazole 40mg PO daily", cat: "GI Prophylaxis" },
      { id: "ppi-drip", name: "Pantoprazole drip 8mg/hr (after 80mg bolus)", cat: "GI (Active Bleed)" },
      // Pain
      { id: "acetaminophen-po", name: "Acetaminophen 650mg PO q6h PRN pain/fever", cat: "Pain" },
      { id: "acetaminophen-iv", name: "Acetaminophen 1g IV q6h PRN", cat: "Pain" },
      { id: "morphine-iv", name: "Morphine 2mg IV q4h PRN severe pain", cat: "Pain" },
      { id: "tramadol", name: "Tramadol 50mg PO q6h PRN moderate pain", cat: "Pain" },
      // Anti-emetic
      { id: "ondansetron-iv", name: "Ondansetron 4mg IV q6h PRN nausea", cat: "Anti-emetic" },
      { id: "ondansetron-po", name: "Ondansetron 4mg PO q6h PRN nausea", cat: "Anti-emetic" },
      // Insomnia / Anxiety
      { id: "melatonin", name: "Melatonin 3mg PO QHS PRN insomnia", cat: "Sleep" },
      { id: "trazodone", name: "Trazodone 50mg PO QHS PRN insomnia", cat: "Sleep" },
      // Bowel
      { id: "docusate", name: "Docusate 100mg PO BID", cat: "Bowel" },
      { id: "senna", name: "Senna 8.6mg PO QHS PRN constipation", cat: "Bowel" },
      { id: "miralax", name: "Polyethylene Glycol 17g PO daily PRN", cat: "Bowel" },
      // Cardiac
      { id: "furosemide-iv-40", name: "Furosemide 40mg IV q12h", cat: "Diuretic" },
      { id: "furosemide-iv-80", name: "Furosemide 80mg IV q12h", cat: "Diuretic" },
      { id: "carvedilol-6.25", name: "Carvedilol 6.25mg PO BID", cat: "Cardiac" },
      { id: "carvedilol-12.5", name: "Carvedilol 12.5mg PO BID", cat: "Cardiac" },
      { id: "lisinopril-10", name: "Lisinopril 10mg PO daily", cat: "Cardiac" },
      { id: "lisinopril-20", name: "Lisinopril 20mg PO daily", cat: "Cardiac" },
      { id: "metoprolol-25", name: "Metoprolol tartrate 25mg PO BID", cat: "Cardiac" },
      // Anticoagulation
      { id: "warfarin-5", name: "Warfarin 5mg PO nightly", cat: "Anticoagulation" },
      { id: "heparin-drip", name: "Heparin drip (per ACS/VTE protocol)", cat: "Anticoagulation" },
      // Endocrine
      { id: "insulin-drip", name: "Insulin drip per DKA protocol", cat: "Endocrine" },
      { id: "insulin-ss", name: "Insulin sliding scale (q6h AC + HS)", cat: "Endocrine" },
      { id: "insulin-lantus", name: "Insulin Glargine (dose per patient)", cat: "Endocrine" },
      { id: "metformin-500", name: "Metformin 500mg PO BID", cat: "Endocrine" },
      { id: "metformin-1000", name: "Metformin 1000mg PO BID", cat: "Endocrine" },
      // Antibiotics
      { id: "ceftriaxone-1g", name: "Ceftriaxone 1g IV daily", cat: "Antibiotic" },
      { id: "ceftriaxone-2g", name: "Ceftriaxone 2g IV daily", cat: "Antibiotic" },
      { id: "azithromycin-500-iv", name: "Azithromycin 500mg IV daily", cat: "Antibiotic" },
      { id: "azithromycin-500-po", name: "Azithromycin 500mg PO daily", cat: "Antibiotic" },
      { id: "vancomycin-iv", name: "Vancomycin 25mg/kg IV (pharmacy dosing)", cat: "Antibiotic" },
      { id: "pip-tazo", name: "Piperacillin-Tazobactam 4.5g IV q6h", cat: "Antibiotic" },
      { id: "levofloxacin", name: "Levofloxacin 750mg IV daily", cat: "Antibiotic" },
      // Respiratory
      { id: "albuterol-neb", name: "Albuterol 2.5mg Nebulizer q4h PRN", cat: "Respiratory" },
      { id: "ipratropium-neb", name: "Ipratropium 0.5mg Nebulizer q6h", cat: "Respiratory" },
      { id: "tiotropium", name: "Tiotropium 18mcg INH daily", cat: "Respiratory" },
      // Electrolytes
      { id: "kcl-20-po", name: "KCl 20mEq PO q2h PRN K <4.0", cat: "Electrolytes" },
      { id: "kcl-40-iv", name: "KCl 40mEq IV (over 4 hrs) for K <3.5", cat: "Electrolytes" },
      { id: "mag-2g-iv", name: "MgSO4 2g IV (over 2 hrs) for Mg <1.8", cat: "Electrolytes" },
      { id: "phos-replace", name: "K-Phos or Na-Phos IV for Phos <2.0", cat: "Electrolytes" },
      // Other
      { id: "atorvastatin-40", name: "Atorvastatin 40mg PO nightly", cat: "Other" },
      { id: "amlodipine-5", name: "Amlodipine 5mg PO daily", cat: "Other" }
    ]
  },
  labs: {
    label: "Labs",
    icon: "🧪",
    framework: "L",
    items: [
      { id: "am-labs-bmp", name: "AM Labs: BMP (tomorrow 0500)" },
      { id: "am-labs-cbc", name: "AM Labs: CBC (tomorrow 0500)" },
      { id: "am-labs-cmp", name: "AM Labs: CMP (tomorrow 0500)" },
      { id: "bmp-q2h", name: "BMP q2h (DKA protocol)" },
      { id: "serial-hh-q6h", name: "Serial H/H q6h" },
      { id: "serial-troponin", name: "Serial Troponin q3h x3" },
      { id: "repeat-lactate", name: "Repeat Lactate in 4-6 hours" },
      { id: "inr-am", name: "INR (tomorrow AM)" },
      { id: "am-mag-phos", name: "AM Labs: Mg/Phos (tomorrow 0500)" },
      { id: "blood-cx", name: "Blood Cultures x2 (if not already drawn)" },
      { id: "sputum-cx", name: "Sputum Culture" },
      { id: "ua-culture", name: "UA with Reflex Culture" },
      { id: "poc-glucose-q1h", name: "POC Glucose q1h" },
      { id: "hba1c", name: "Hemoglobin A1c" },
      { id: "iron-studies", name: "Iron Studies (Fe, TIBC, Ferritin)" },
      { id: "type-cross-2", name: "Type & Crossmatch 2 units pRBC" }
    ]
  },
  special: {
    label: "Special",
    icon: "⭐",
    framework: "S",
    items: [
      { id: "gi-consult", name: "GI Consult — Urgent EGD" },
      { id: "cards-consult", name: "Cardiology Consult" },
      { id: "endo-consult", name: "Endocrinology Consult" },
      { id: "pulm-consult", name: "Pulmonology Consult" },
      { id: "id-consult", name: "Infectious Disease Consult" },
      { id: "social-work", name: "Social Work Consult" },
      { id: "code-status", name: "Code Status Discussion" },
      { id: "transfuse-1", name: "Transfuse 1 unit pRBC" },
      { id: "transfuse-2", name: "Transfuse 2 units pRBC" },
      { id: "foley-insert", name: "Insert Foley Catheter" },
      { id: "ng-tube", name: "Insert Nasogastric Tube" },
      { id: "o2-nc", name: "O2 via Nasal Cannula (titrate to SpO2 ≥92%)" },
      { id: "o2-nrb", name: "O2 via Non-Rebreather 15 L/min" },
      { id: "bipap", name: "BiPAP (IPAP 10 / EPAP 5)" }
    ]
  }
};

const CODE_STATUS_OPTIONS = ["Full Code", "DNR/DNI", "DNR Only (allow intubation)", "Comfort Measures Only", "Pending Discussion"];
const LEVEL_OPTIONS = ["Medicine Floor", "Telemetry / Step-Down", "ICU"];

// ═══════════════════════════════════════════════════════════════
// AI PATIENT RESPONSE (Claude API)
// ═══════════════════════════════════════════════════════════════
function buildPatientPrompt(patient) {
  const v = patient.variant;
  const cf = v.clinicalFacts;
  const cc = cf.chiefComplaint;
  const p = v.patient;
  return `You are ${patient.name}, a ${patient.age}-year-old ${patient.gender} patient who has just been transferred from the Emergency Department to a hospital bed. You are being seen by the admitting team.

PERSONALITY: ${p.emotionalState}. ${p.communicationStyle}

YOUR SYMPTOMS:
- Chief complaint in your words: "${cc.patientPhrasing.join('" or "')}"
- Location: ${cc.location}
- Started: ${cc.onset}
- Duration: ${cc.duration}
- Severity: ${cc.severity}
- Worse with: ${cc.aggravating.join(', ')}
- Better with: ${cc.relieving.join(', ')}

ASSOCIATED SYMPTOMS YOU HAVE (confirm if asked):
${cf.associatedSymptoms.present.map(s => `- YES: ${s.name} → "${s.patientSays}"`).join('\n')}

PERTINENT NEGATIVES (deny if asked):
${cf.associatedSymptoms.absent.map(s => `- NO: ${s.name} → "${s.patientSays}"`).join('\n')}

MEDICAL HISTORY: ${cf.pmh.join('; ') || 'None'}
MEDICATIONS: ${cf.medications.map(m => `${m.name} ${m.dose} ("${m.patientSays}")`).join('; ') || 'None'}
ALLERGIES: ${cf.allergies?.map(a => `${a.allergen} → ${a.reaction}`).join('; ') || 'None'}
FAMILY HISTORY: ${cf.familyHistory?.join('; ') || 'None significant'}
SOCIAL: Smoking: ${cf.socialHistory.smoking}. Alcohol: ${cf.socialHistory.alcohol}. Drugs: ${cf.socialHistory.drugs}. Works as: ${cf.socialHistory.occupation}. Lives: ${cf.socialHistory.livingSituation}.

CONTEXT: You've already been seen in the ED. Some tests were done. You may feel slightly better or the same since arriving. The admitting doctor is a new person — you haven't met them before.

RULES:
1. Stay in character. Use everyday language, not medical terms.
2. Answer ONLY what is asked. Don't volunteer your entire history.
3. Show appropriate emotion. You're ${p.emotionalState.toLowerCase()}.
4. NEVER diagnose yourself or suggest tests.
5. Keep responses to 1-3 sentences.
6. Use the word choices above. AVOID: ${cc.avoidPhrasing?.join(', ') || 'none specified'}.
7. If asked something not specified, respond with reasonable uncertainty.`;
}

function buildCoachPrompt(patient) {
  const v = patient.variant;
  return `You are Dr. Chen, an experienced Internal Medicine attending physician supervising an intern on their admitting night. You use Socratic questioning — you NEVER give direct answers. Instead, you guide the student to discover the answer themselves.

PATIENT CONTEXT:
- ${patient.name}, ${patient.age}${patient.gender[0]}, admitted for: ${v.diagnosis}
- Expected level of care: ${v.expectedLevel}
- Key orders: ${v.teaching.keyOrders.join('; ')}
- Critical misses to watch for: ${v.teaching.criticalMiss.join('; ')}
- Correct diagnosis: ${v.teaching.correctDiagnosis}

COACHING HINTS: ${JSON.stringify(v.coachHints)}

STUDENT PROGRESS:
- Steps completed: ${JSON.stringify(patient.completionSteps)}
- Orders placed: ${patient.orderedMeds.length + patient.orderedNursing.length + patient.orderedFluids.length} total
- Exam performed: ${patient.examPerformed}
- Note started: ${patient.notes.length > 0}

RULES:
1. NEVER give direct answers. Always respond with a guiding question.
2. If the student is close, affirm their thinking and push deeper.
3. If the student is off-track, redirect with a question that highlights what they're missing.
4. Be warm but maintain high expectations. You're a teacher, not a co-worker.
5. Reference clinical frameworks when helpful (ADC VAAN DIMLS for orders, VINDICATE for DDx).
6. Keep responses to 2-4 sentences.
7. If the student hasn't done something important yet, ask "Have you thought about..." or "What about..."`;
}

async function getAIResponse(systemPrompt, question, history) {
  try {
    const messages = history.slice(-20).map(m => ({
      role: m.role === "student" || m.role === "user" ? "user" : "assistant",
      content: m.text
    }));
    messages.push({ role: "user", content: question });
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: systemPrompt, messages })
    });
    if (!response.ok) throw new Error(`API ${response.status}`);
    const data = await response.json();
    return data.content.map(b => b.text || "").join("");
  } catch (e) {
    console.warn("AI response failed:", e.message);
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════
// SCRIPTED RESPONSE FALLBACK
// ═══════════════════════════════════════════════════════════════
function getScriptedResponse(question, patient) {
  const q = question.toLowerCase().trim();
  const cf = patient.variant.clinicalFacts;
  const cc = cf.chiefComplaint;
  const r = patient.variant.responses || {};
  if (/what brings you|why are you here|what'?s wrong|what happened|how can i help|tell me/i.test(q)) return r.opening;
  if (/how bad|scale|1.to.10|severity|rate/i.test(q)) return r.severity;
  if (/where.*(pain|hurt|feel)|locat|point/i.test(q)) return r.location;
  if (/when.*start|how long|onset/i.test(q)) return r.onset;
  if (/what.*feel like|describe|character|quality|type of/i.test(q)) return r.character;
  if (/worse|aggravat|exacerbat/i.test(q)) return r.worse;
  if (/better|reliev|help|improve/i.test(q)) return r.better;
  if (/radiat|spread|travel|go anywhere/i.test(q)) return r.radiation;
  if (/constant|come and go|timing|pattern/i.test(q)) return r.timing;
  if (/medicat|medicine|pill|drug|prescription|taking/i.test(q)) return cf.medications.map(m => m.patientSays).join(" ");
  if (/allerg/i.test(q)) return cf.allergies.map(a => a.patientSays).join(". ") || "No allergies.";
  if (/past medical|medical history|pmh|health problem|condition|chronic/i.test(q)) return cf.pmh.join(". ");
  if (/family|mom|dad|mother|father|brother|sister|parent/i.test(q)) return cf.familyHistory.join(". ");
  if (/smok|tobacco|cigarette/i.test(q)) return cf.socialHistory.smoking;
  if (/alcohol|drink|beer|wine/i.test(q)) return cf.socialHistory.alcohol;
  if (/drug|marijuana|cocaine|recreational/i.test(q)) return cf.socialHistory.drugs;
  if (/work|job|occupation|retire/i.test(q)) return cf.socialHistory.occupation;
  if (/live|home|who.*with|married|spouse/i.test(q)) return cf.socialHistory.livingSituation;
  if (/surg|operation|procedure/i.test(q)) return "No surgeries.";
  for (const s of cf.associatedSymptoms.present) {
    if (q.includes(s.name.toLowerCase()) || q.includes(s.name.split(" ").pop().toLowerCase())) return s.patientSays;
  }
  for (const s of cf.associatedSymptoms.absent) {
    if (q.includes(s.name.toLowerCase()) || q.includes(s.name.split(" ").pop().toLowerCase())) return s.patientSays;
  }
  return "I'm not sure about that. Can you ask me another way?";
}

function simulateVitals(baseVitals) {
  const vary = (val, range) => { const n = parseInt(val); return isNaN(n) ? val : String(n + randInt(-range, range)); };
  const bp = baseVitals.BP.split("/");
  return {
    BP: `${vary(bp[0], 8)}/${vary(bp[1], 5)}`,
    HR: vary(baseVitals.HR, 6) + (baseVitals.HR.includes("irregular") ? " irregular" : ""),
    RR: vary(baseVitals.RR, 2),
    Temp: (parseFloat(baseVitals.Temp) + (Math.random() * 0.4 - 0.2)).toFixed(1) + "°F",
    SpO2: vary(baseVitals.SpO2.replace("%", ""), 1) + "%",
  };
}

function timeAgo(ts) {
  const mins = Math.round((Date.now() - new Date(ts).getTime()) / 60000);
  if (mins < 60) return `${mins}m ago`;
  return `${Math.floor(mins / 60)}h ${mins % 60}m ago`;
}

// ═══════════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════════
const S = {
  brand: "#2874A6", brandDark: "#1B4F72", brandLight: "#D4E6F1",
  bg: "#F0F4F8", card: "#FFFFFF", text: "#1E293B", textSec: "#64748B",
  border: "#E2E8F0", danger: "#DC2626", warning: "#F59E0B", success: "#16A34A",
  font: "'DM Sans', -apple-system, sans-serif",
};

const handoffColors = { situation: "#DC2626", background: "#2563EB", assessment: "#059669", recommendation: "#9333EA" };

// ═══════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════
export default function App() {
  const [patients, setPatients] = useState([]);
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("handoff");
  const [qInput, setQInput] = useState("");
  const [noteText, setNoteText] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [seenVariants, setSeenVariants] = useState({});
  const [completedCases, setCompletedCases] = useState(0);
  const [ddxInput, setDdxInput] = useState("");
  const [ddxConf, setDdxConf] = useState(50);
  const [useAI, setUseAI] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);
  const [orderCat, setOrderCat] = useState("admit");
  const [orderSearch, setOrderSearch] = useState("");
  const [showCoach, setShowCoach] = useState(false);
  const [coachInput, setCoachInput] = useState("");
  const [coachLoading, setCoachLoading] = useState(false);
  const [diagInput, setDiagInput] = useState("");
  const chatRef = useRef(null);
  const coachRef = useRef(null);

  // Persistence
  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem("rdx-admit-state") || "null");
      if (s) { setPatients(s.patients || []); setSeenVariants(s.seenVariants || {}); setCompletedCases(s.completedCases || 0); }
    } catch (e) {}
  }, []);
  useEffect(() => {
    if (patients.length > 0) localStorage.setItem("rdx-admit-state", JSON.stringify({ patients, seenVariants, completedCases }));
  }, [patients, seenVariants, completedCases]);
  useEffect(() => { chatRef.current?.scrollIntoView({ behavior: "smooth" }); }, [selected?.interviewHistory]);
  useEffect(() => { coachRef.current?.scrollIntoView({ behavior: "smooth" }); }, [selected?.coachHistory]);

  // Update helper
  const updatePatient = useCallback((updater) => {
    setSelected(prev => {
      if (!prev) return prev;
      const updated = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater };
      setPatients(pp => pp.map(p => p.id === updated.id ? updated : p));
      return updated;
    });
  }, []);

  // Add patient
  const addPatient = useCallback((templateId) => {
    const tmpl = CASE_TEMPLATES.find(t => t.id === templateId);
    if (!tmpl) return;
    const seen = seenVariants[templateId] || [];
    const unseen = tmpl.variants.filter(v => !seen.includes(v.id));
    const variant = randPick(unseen.length > 0 ? unseen : tmpl.variants);
    const pt = generatePatient(tmpl, variant);
    setPatients(prev => [...prev, pt]);
    setSeenVariants(prev => ({ ...prev, [templateId]: [...(prev[templateId] || []), variant.id] }));
    setShowAdd(false);
  }, [seenVariants]);

  // Select patient
  const selectPt = (pt) => {
    setSelected(pt);
    setTab(pt.status === "pending-acceptance" ? "handoff" : "interview");
    setNoteText("");
    setShowCoach(false);
  };

  // Accept handoff
  const acceptHandoff = () => {
    updatePatient(p => ({
      ...p,
      status: "admitted",
      acceptedAt: new Date().toISOString(),
      completionSteps: { ...p.completionSteps, accepted: true }
    }));
    setTab("interview");
  };

  // Ask patient question
  const askQuestion = async () => {
    if (!qInput.trim() || !selected || aiLoading) return;
    const q = qInput;
    setQInput("");
    const withQ = { ...selected, interviewHistory: [...selected.interviewHistory, { role: "student", text: q, ts: Date.now() }] };
    updatePatient(withQ);
    let response;
    if (useAI) {
      setAiLoading(true);
      response = await getAIResponse(buildPatientPrompt(selected), q, selected.interviewHistory);
      setAiLoading(false);
    }
    if (!response) response = getScriptedResponse(q, selected);
    updatePatient({ ...withQ, interviewHistory: [...withQ.interviewHistory, { role: "patient", text: response, ts: Date.now() }], aiCallCount: (withQ.aiCallCount || 0) + 1 });
  };

  // Ask coach
  const askCoach = async () => {
    if (!coachInput.trim() || !selected || coachLoading) return;
    const q = coachInput;
    setCoachInput("");
    const withQ = { ...selected, coachHistory: [...selected.coachHistory, { role: "user", text: q, ts: Date.now() }] };
    updatePatient(withQ);
    setCoachLoading(true);
    let response = await getAIResponse(buildCoachPrompt(selected), q, selected.coachHistory);
    setCoachLoading(false);
    if (!response) response = "Think about what the key findings are pointing to. What's the most likely unifying diagnosis?";
    updatePatient({ ...withQ, coachHistory: [...withQ.coachHistory, { role: "coach", text: response, ts: Date.now() }], coachCallCount: (withQ.coachCallCount || 0) + 1 });
  };

  // Order handlers
  const placeOrder = (item, category) => {
    if (!selected) return;
    const entry = { name: item.name, id: item.id, time: new Date().toISOString(), status: "active", category };
    const key = category === "medications" ? "orderedMeds" : category === "ivFluids" ? "orderedFluids" : 
                category === "special" && item.name.includes("Consult") ? "orderedConsults" : "orderedNursing";
    const arr = selected[key] || [];
    if (arr.some(o => o.id === item.id)) return;
    const updated = { ...selected, [key]: [...arr, entry] };
    updated.nursingNotes = [...(updated.nursingNotes || []), { time: new Date().toISOString(), author: "RN", text: `Order placed: ${item.name}` }];
    const totalOrders = (updated.orderedMeds?.length || 0) + (updated.orderedNursing?.length || 0) + (updated.orderedFluids?.length || 0) + (updated.orderedConsults?.length || 0);
    if (totalOrders >= 5) updated.completionSteps = { ...updated.completionSteps, orders: true };
    updatePatient(updated);
  };

  const setLevel = (level) => updatePatient(p => ({ ...p, selectedLevel: level, completionSteps: { ...p.completionSteps, level: true } }));
  const performExam = () => { updatePatient(p => ({ ...p, examPerformed: true, completionSteps: { ...p.completionSteps, exam: true } })); setTab("exam"); };
  const setCodeStatus = (s) => { updatePatient(p => ({ ...p, codeStatus: s })); };
  const recheckVitals = () => updatePatient(p => ({ ...p, vitalsLog: [...p.vitalsLog, { time: new Date().toISOString(), label: `Recheck #${p.vitalsLog.length}`, ...simulateVitals(p.physicalExam.vitalSigns), source: "RN" }] }));

  const saveNote = () => {
    if (!noteText.trim() || !selected) return;
    updatePatient(p => ({
      ...p,
      notes: [...p.notes, { id: `note-${Date.now()}`, text: noteText, type: "Admission H&P", author: "You (Admitting Intern)", ts: new Date().toISOString() }],
      completionSteps: { ...p.completionSteps, note: true }
    }));
    setNoteText("");
  };

  const addDdx = () => {
    if (!ddxInput.trim() || !selected) return;
    updatePatient(p => ({ ...p, ddxList: [...(p.ddxList || []), { id: `ddx-${Date.now()}`, diagnosis: ddxInput.trim(), confidence: ddxConf }] }));
    setDdxInput(""); setDdxConf(50);
  };

  const setMedDecision = (idx, decision) => {
    updatePatient(p => {
      const mr = [...p.medReconciliation];
      mr[idx] = { ...mr[idx], decision };
      return { ...p, medReconciliation: mr };
    });
  };

  const completeCase = () => {
    updatePatient(p => ({ ...p, status: "completed" }));
    setCompletedCases(c => c + 1);
    setTab("teaching");
  };

  const reset = () => { localStorage.removeItem("rdx-admit-state"); setPatients([]); setSelected(null); setSeenVariants({}); setCompletedCases(0); };

  // Completion check
  const completionPct = selected ? Object.values(selected.completionSteps).filter(Boolean).length / 6 * 100 : 0;

  const allTabs = [
    { id: "handoff", label: "📋 Handoff", show: true },
    { id: "interview", label: "💬 Interview", show: selected?.status !== "pending-acceptance" },
    { id: "exam", label: "🩺 Exam", show: selected?.status !== "pending-acceptance" },
    { id: "vitals", label: "📊 Vitals", show: true },
    { id: "orders", label: "📝 Orders", show: selected?.status !== "pending-acceptance" },
    { id: "results", label: "🧪 Results", show: true },
    { id: "chart", label: "📂 Chart", show: true },
    { id: "notes", label: "✍️ Notes", show: selected?.status !== "pending-acceptance" },
    { id: "ddx", label: "🧠 DDx", show: selected?.status !== "pending-acceptance" },
    { id: "teaching", label: "🎓 Teaching", show: selected?.status === "completed" }
  ];

  // ═════════════════════ RENDER ═════════════════════
  return (
    <div style={{ fontFamily: S.font, background: S.bg, minHeight: "100vh", color: S.text }}>
      {/* HEADER */}
      <div style={{ background: `linear-gradient(135deg, ${S.brandDark} 0%, ${S.brand} 100%)`, color: "white", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 22 }}>🏥</span>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Admitting Board</div>
            <div style={{ fontSize: 11, opacity: 0.8 }}>Internal Medicine</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {selected && <button onClick={() => setShowCoach(!showCoach)} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: showCoach ? "#F59E0B" : "rgba(255,255,255,0.2)", color: "white", cursor: "pointer", fontWeight: 600, fontSize: 12 }}>📞 {showCoach ? "Hide Coach" : "Call Attending"}</button>}
          <button onClick={() => setShowAdd(true)} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "rgba(255,255,255,0.2)", color: "white", cursor: "pointer", fontWeight: 600, fontSize: 12 }}>+ New Patient</button>
          <span style={{ fontSize: 11, opacity: 0.7 }}>Cases: {completedCases}</span>
          <button onClick={reset} style={{ padding: "4px 10px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "white", cursor: "pointer", fontSize: 10 }}>Reset</button>
        </div>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 52px)" }}>
        {/* PATIENT LIST */}
        <div style={{ width: 260, borderRight: `1px solid ${S.border}`, background: "white", overflowY: "auto", flexShrink: 0 }}>
          <div style={{ padding: "12px 14px", fontSize: 11, fontWeight: 700, color: S.textSec, textTransform: "uppercase", letterSpacing: "0.05em" }}>Admissions ({patients.filter(p => p.status !== "completed").length})</div>
          {patients.filter(p => p.status !== "completed").map(pt => (
            <div key={pt.id} onClick={() => selectPt(pt)} style={{ padding: "10px 14px", borderBottom: `1px solid ${S.border}`, cursor: "pointer", background: selected?.id === pt.id ? S.brandLight : "white", borderLeft: selected?.id === pt.id ? `3px solid ${S.brand}` : "3px solid transparent" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 600, fontSize: 13 }}>{pt.name}</span>
                <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 8, background: pt.status === "pending-acceptance" ? "#FEF3C7" : "#DCFCE7", color: pt.status === "pending-acceptance" ? "#92400E" : "#166534" }}>{pt.status === "pending-acceptance" ? "NEW" : "Active"}</span>
              </div>
              <div style={{ fontSize: 11, color: S.textSec, marginTop: 2 }}>{pt.age}{pt.gender[0]} — {pt.variant.diagnosis.split("(")[0].trim()}</div>
              <div style={{ fontSize: 10, color: S.textSec, marginTop: 2 }}>Arrived {timeAgo(pt.arrivalTime)}</div>
              {pt.status !== "pending-acceptance" && (
                <div style={{ marginTop: 4, height: 3, borderRadius: 2, background: "#E2E8F0" }}>
                  <div style={{ height: "100%", borderRadius: 2, background: S.brand, width: `${Object.values(pt.completionSteps).filter(Boolean).length / 6 * 100}%`, transition: "width 0.3s" }} />
                </div>
              )}
            </div>
          ))}
          {patients.filter(p => p.status === "completed").length > 0 && (
            <>
              <div style={{ padding: "12px 14px", fontSize: 11, fontWeight: 700, color: S.textSec, textTransform: "uppercase" }}>Completed ({patients.filter(p => p.status === "completed").length})</div>
              {patients.filter(p => p.status === "completed").map(pt => (
                <div key={pt.id} onClick={() => selectPt(pt)} style={{ padding: "10px 14px", borderBottom: `1px solid ${S.border}`, cursor: "pointer", background: selected?.id === pt.id ? S.brandLight : "#F8FAFC", opacity: 0.7 }}>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{pt.name}</div>
                  <div style={{ fontSize: 11, color: S.textSec }}>{pt.variant.diagnosis.split("(")[0].trim()}</div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {!selected ? (
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 48 }}>🏥</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: S.brandDark }}>Admitting Board</div>
              <div style={{ fontSize: 13, color: S.textSec, textAlign: "center", maxWidth: 400 }}>Select a patient from the sidebar to begin, or click "+ New Patient" to receive an ED handoff.</div>
              <button onClick={() => setShowAdd(true)} style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>+ New Patient</button>
            </div>
          ) : (
            <>
              {/* Patient Banner */}
              <div style={{ background: "white", borderBottom: `1px solid ${S.border}`, padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 15 }}>{selected.name}</span>
                    <span style={{ fontSize: 12, color: S.textSec, marginLeft: 8 }}>{selected.age}{selected.gender[0]} | {selected.mrn} | {selected.service}</span>
                  </div>
                  <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 8, background: selected.codeStatus === "Full Code" ? "#DCFCE7" : "#FEE2E2", fontWeight: 600 }}>{selected.codeStatus}</span>
                  {selected.selectedLevel && <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 8, background: S.brandLight, color: S.brandDark, fontWeight: 600 }}>📍 {selected.selectedLevel}</span>}
                </div>
                <div style={{ fontSize: 11, color: S.textSec }}>
                  Completion: {Math.round(completionPct)}%
                  {selected.status !== "completed" && completionPct === 100 && <button onClick={completeCase} style={{ marginLeft: 8, padding: "4px 12px", borderRadius: 6, border: "none", background: S.success, color: "white", cursor: "pointer", fontSize: 11, fontWeight: 600 }}>✓ Complete Case</button>}
                </div>
              </div>

              {/* TABS */}
              <div style={{ display: "flex", gap: 0, background: "white", borderBottom: `1px solid ${S.border}`, overflowX: "auto", flexShrink: 0 }}>
                {allTabs.filter(t => t.show).map(t => (
                  <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "8px 14px", border: "none", borderBottom: tab === t.id ? `2px solid ${S.brand}` : "2px solid transparent", background: "transparent", cursor: "pointer", fontSize: 12, fontWeight: tab === t.id ? 700 : 400, color: tab === t.id ? S.brand : S.textSec, whiteSpace: "nowrap" }}>{t.label}</button>
                ))}
              </div>

              {/* TAB CONTENT + COACH */}
              <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
                <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>

                  {/* HANDOFF TAB */}
                  {tab === "handoff" && (() => {
                    const h = selected.handoff;
                    const lvl = selected.handoffLevel;
                    return (
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                          <span style={{ fontSize: 16, fontWeight: 700 }}>ED Handoff</span>
                          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 8, fontWeight: 700, background: lvl === 1 ? "#FEE2E2" : lvl === 2 ? "#FEF3C7" : "#DCFCE7", color: lvl === 1 ? "#991B1B" : lvl === 2 ? "#92400E" : "#166534" }}>
                            {lvl === 1 ? "🔴 Minimal" : lvl === 2 ? "🟡 Partial" : "🟢 Full SBAR"}
                          </span>
                        </div>
                        {[{ key: "situation", label: "S — Situation", show: true },
                          { key: "background", label: "B — Background", show: lvl >= 2 },
                          { key: "assessment", label: "A — Assessment", show: lvl >= 3 },
                          { key: "recommendation", label: "R — Recommendation", show: lvl >= 3 }
                        ].filter(s => s.show && h[s.key]).map(s => (
                          <div key={s.key} style={{ marginBottom: 12, borderLeft: `4px solid ${handoffColors[s.key]}`, paddingLeft: 12 }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: handoffColors[s.key], textTransform: "uppercase", marginBottom: 4 }}>{s.label}</div>
                            <div style={{ fontSize: 13, lineHeight: 1.5 }}>"{h[s.key]}"</div>
                          </div>
                        ))}
                        {h.edSummary && (
                          <div style={{ marginTop: 12, padding: 10, background: "#F0F4F8", borderRadius: 8, fontSize: 12, color: S.textSec }}>
                            <strong>ED Actions:</strong> {h.edSummary}
                          </div>
                        )}
                        {lvl === 1 && <div style={{ marginTop: 12, padding: 10, background: "#FEF3C7", borderRadius: 8, fontSize: 12, color: "#92400E" }}>⚠️ This is a minimal handoff. You'll need to interview the patient, review the chart, and form your own assessment.</div>}
                        {selected.status === "pending-acceptance" && (
                          <button onClick={acceptHandoff} style={{ marginTop: 20, padding: "12px 28px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 700, fontSize: 14, display: "block", width: "100%" }}>Accept Admission</button>
                        )}
                      </div>
                    );
                  })()}

                  {/* INTERVIEW TAB */}
                  {tab === "interview" && (
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <span style={{ fontSize: 16, fontWeight: 700 }}>Patient Interview</span>
                        <button onClick={() => setUseAI(!useAI)} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, border: `1px solid ${S.border}`, background: useAI ? S.brandLight : "white", cursor: "pointer" }}>{useAI ? "🤖 AI On" : "📝 Scripted"}</button>
                      </div>
                      <div style={{ background: "white", border: `1px solid ${S.border}`, borderRadius: 10, height: 380, overflowY: "auto", padding: 12, marginBottom: 10 }}>
                        {selected.interviewHistory.length === 0 && <div style={{ color: S.textSec, fontSize: 13, textAlign: "center", marginTop: 40 }}>Start by asking the patient what brought them in.</div>}
                        {selected.interviewHistory.map((m, i) => (
                          <div key={i} style={{ display: "flex", justifyContent: m.role === "student" ? "flex-end" : "flex-start", marginBottom: 8 }}>
                            <div style={{ maxWidth: "75%", padding: "8px 12px", borderRadius: 12, background: m.role === "student" ? S.brand : "#F1F5F9", color: m.role === "student" ? "white" : S.text, fontSize: 13, lineHeight: 1.5 }}>{m.text}</div>
                          </div>
                        ))}
                        {aiLoading && <div style={{ fontSize: 12, color: S.textSec, fontStyle: "italic" }}>Patient is thinking...</div>}
                        <div ref={chatRef} />
                      </div>
                      <div style={{ display: "flex", gap: 8 }}>
                        <input value={qInput} onChange={e => setQInput(e.target.value)} onKeyDown={e => e.key === "Enter" && askQuestion()} placeholder="Ask the patient..." style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: `1px solid ${S.border}`, fontSize: 13, outline: "none" }} />
                        <button onClick={askQuestion} disabled={aiLoading} style={{ padding: "10px 20px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>Ask</button>
                      </div>
                    </div>
                  )}

                  {/* EXAM TAB */}
                  {tab === "exam" && (
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                        <span style={{ fontSize: 16, fontWeight: 700 }}>Physical Examination</span>
                        {!selected.examPerformed && <button onClick={performExam} style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 600, fontSize: 12 }}>Perform Exam</button>}
                      </div>
                      {!selected.examPerformed ? (
                        <div style={{ textAlign: "center", color: S.textSec, marginTop: 40 }}>Click "Perform Exam" to examine the patient.</div>
                      ) : (
                        Object.entries(selected.physicalExam).filter(([k]) => k !== "vitalSigns").map(([key, val]) => {
                          const abnormal = /crackle|wheeze|rhonchi|tender|edema|elevated|murmur|gallop|displaced|dull|bruit|erythema|reduced|diminished|irregular|distended|abnormal|guarding|rebound|egophony|hepatomegaly|JVP|tenting|delayed|sunken|Kussmaul|fruity|tarry|guaiac|stasis|pale/i.test(val);
                          return (
                            <div key={key} style={{ marginBottom: 8, padding: "8px 12px", borderRadius: 8, background: abnormal ? "#FEF2F2" : "#F8FAFC", borderLeft: abnormal ? "3px solid #DC2626" : "3px solid #E2E8F0" }}>
                              <span style={{ fontWeight: 700, fontSize: 12, textTransform: "capitalize", color: abnormal ? "#991B1B" : S.text }}>{key}: </span>
                              <span style={{ fontSize: 13 }}>{val}</span>
                            </div>
                          );
                        })
                      )}
                    </div>
                  )}

                  {/* VITALS TAB */}
                  {tab === "vitals" && (
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                        <span style={{ fontSize: 16, fontWeight: 700 }}>Vital Signs Flow Sheet</span>
                        <button onClick={recheckVitals} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 600, fontSize: 12 }}>Recheck Vitals</button>
                      </div>
                      <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                          <thead>
                            <tr style={{ background: S.brandLight }}>
                              <th style={{ padding: 8, textAlign: "left", fontWeight: 700 }}>Vital</th>
                              {(selected.vitalsLog || []).map((v, i) => <th key={i} style={{ padding: 8, textAlign: "center", fontWeight: 600, fontSize: 11 }}>{v.label}</th>)}
                            </tr>
                          </thead>
                          <tbody>
                            {["BP", "HR", "RR", "Temp", "SpO2"].map(vital => (
                              <tr key={vital} style={{ borderBottom: `1px solid ${S.border}` }}>
                                <td style={{ padding: 8, fontWeight: 600 }}>{vital}</td>
                                {(selected.vitalsLog || []).map((v, i) => {
                                  const val = v[vital] || "";
                                  const num = parseInt(val);
                                  const abn = (vital === "HR" && (num > 100 || num < 60)) || (vital === "RR" && (num > 20 || num < 12)) || (vital === "SpO2" && num < 94) || (vital === "Temp" && parseFloat(val) > 100.4) || (vital === "BP" && (parseInt(val.split("/")[0]) > 160 || parseInt(val.split("/")[0]) < 90));
                                  return <td key={i} style={{ padding: 8, textAlign: "center", color: abn ? S.danger : S.text, fontWeight: abn ? 700 : 400 }}>{val}</td>;
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* ORDERS TAB */}
                  {tab === "orders" && (
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <span style={{ fontSize: 16, fontWeight: 700 }}>Admission Orders (ADC VAAN DIMLS)</span>
                      </div>
                      {/* Level of Care */}
                      <div style={{ marginBottom: 12, padding: 10, background: "#F8FAFC", borderRadius: 8 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Level of Care</div>
                        <div style={{ display: "flex", gap: 8 }}>
                          {LEVEL_OPTIONS.map(l => (
                            <button key={l} onClick={() => setLevel(l)} style={{ padding: "6px 14px", borderRadius: 8, border: selected.selectedLevel === l ? `2px solid ${S.brand}` : `1px solid ${S.border}`, background: selected.selectedLevel === l ? S.brandLight : "white", cursor: "pointer", fontSize: 12, fontWeight: selected.selectedLevel === l ? 700 : 400 }}>{l}</button>
                          ))}
                        </div>
                      </div>
                      {/* Code Status */}
                      <div style={{ marginBottom: 12, padding: 10, background: "#F8FAFC", borderRadius: 8 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Code Status</div>
                        <select value={selected.codeStatus} onChange={e => setCodeStatus(e.target.value)} style={{ padding: "6px 10px", borderRadius: 6, border: `1px solid ${S.border}`, fontSize: 12 }}>
                          {CODE_STATUS_OPTIONS.map(cs => <option key={cs} value={cs}>{cs}</option>)}
                        </select>
                      </div>
                      {/* Admission Diagnosis */}
                      <div style={{ marginBottom: 12, padding: 10, background: "#F8FAFC", borderRadius: 8 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Admission Diagnosis</div>
                        <input value={diagInput} onChange={e => setDiagInput(e.target.value)} placeholder="e.g., Acute Decompensated Heart Failure" style={{ width: "100%", padding: "8px 12px", borderRadius: 6, border: `1px solid ${S.border}`, fontSize: 12, outline: "none" }} />
                      </div>
                      {/* Med Reconciliation */}
                      <div style={{ marginBottom: 12, padding: 10, background: "#FFF7ED", borderRadius: 8, borderLeft: `3px solid ${S.warning}` }}>
                        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>💊 Medication Reconciliation</div>
                        {(selected.medReconciliation || []).map((med, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, padding: "4px 0", borderBottom: `1px solid #FED7AA` }}>
                            <div style={{ flex: 1, fontSize: 12 }}>
                              <strong>{med.name}</strong> {med.dose}
                              {med.status && med.status !== "taking" && <span style={{ fontSize: 10, marginLeft: 6, color: S.danger, fontWeight: 600 }}>({med.status})</span>}
                            </div>
                            <div style={{ display: "flex", gap: 4 }}>
                              {["Continue", "Hold", "Modify", "D/C"].map(d => (
                                <button key={d} onClick={() => setMedDecision(i, d)} style={{ padding: "2px 8px", borderRadius: 4, border: med.decision === d ? `2px solid ${S.brand}` : `1px solid ${S.border}`, background: med.decision === d ? S.brandLight : "white", cursor: "pointer", fontSize: 10, fontWeight: med.decision === d ? 700 : 400 }}>{d}</button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Order Categories */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 10 }}>
                        {Object.entries(ADMISSION_ORDER_MENU).filter(([k]) => k !== "diagnosis" && k !== "allergies").map(([key, cat]) => (
                          <button key={key} onClick={() => setOrderCat(key)} style={{ padding: "4px 10px", borderRadius: 6, border: orderCat === key ? `2px solid ${S.brand}` : `1px solid ${S.border}`, background: orderCat === key ? S.brandLight : "white", cursor: "pointer", fontSize: 11, fontWeight: orderCat === key ? 700 : 400 }}>{cat.icon} {cat.label}</button>
                        ))}
                      </div>
                      <input value={orderSearch} onChange={e => setOrderSearch(e.target.value)} placeholder={`Search ${ADMISSION_ORDER_MENU[orderCat]?.label || "orders"}...`} style={{ width: "100%", padding: "8px 12px", borderRadius: 6, border: `1px solid ${S.border}`, fontSize: 12, marginBottom: 8, outline: "none" }} />
                      <div style={{ maxHeight: 200, overflowY: "auto", borderRadius: 8, border: `1px solid ${S.border}` }}>
                        {ADMISSION_ORDER_MENU[orderCat]?.items.filter(i => !orderSearch || i.name.toLowerCase().includes(orderSearch.toLowerCase())).map(item => {
                          const allOrders = [...(selected.orderedMeds || []), ...(selected.orderedNursing || []), ...(selected.orderedFluids || []), ...(selected.orderedConsults || [])];
                          const ordered = allOrders.some(o => o.id === item.id);
                          return (
                            <div key={item.id} onClick={() => !ordered && placeOrder(item, orderCat)} style={{ padding: "6px 12px", borderBottom: `1px solid ${S.border}`, cursor: ordered ? "default" : "pointer", opacity: ordered ? 0.5 : 1, background: ordered ? "#F0FDF4" : "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: 12 }}>{item.name}</span>
                              {item.cat && <span style={{ fontSize: 10, color: S.textSec }}>{item.cat}</span>}
                              {ordered && <span style={{ fontSize: 10, color: S.success }}>✓</span>}
                            </div>
                          );
                        })}
                      </div>
                      {/* Active Orders Summary */}
                      {(() => {
                        const all = [...(selected.orderedMeds || []), ...(selected.orderedNursing || []), ...(selected.orderedFluids || []), ...(selected.orderedConsults || [])];
                        return all.length > 0 && (
                          <div style={{ marginTop: 12, padding: 10, background: "#F0FDF4", borderRadius: 8 }}>
                            <div style={{ fontSize: 12, fontWeight: 700, color: S.success, marginBottom: 4 }}>Active Orders ({all.length})</div>
                            {all.map((o, i) => <div key={i} style={{ fontSize: 11, color: S.text, marginBottom: 2 }}>✓ {o.name}</div>)}
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* RESULTS TAB */}
                  {tab === "results" && (
                    <div>
                      <span style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, display: "block" }}>ED Results (Carried Forward)</span>
                      {selected.diagnostics.ecg && (
                        <div style={{ marginBottom: 12, padding: 10, background: "#F8FAFC", borderRadius: 8 }}>
                          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 4 }}>📊 ECG</div>
                          {selected.diagnostics.ecg.findings.map((f, i) => <div key={i} style={{ fontSize: 12, marginBottom: 2 }}>• {f}</div>)}
                          <div style={{ fontSize: 12, fontWeight: 600, marginTop: 4, color: S.brand }}>Interpretation: {selected.diagnostics.ecg.interpretation}</div>
                        </div>
                      )}
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Laboratory Results</div>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                          <thead><tr style={{ background: S.brandLight }}><th style={{ padding: 6, textAlign: "left" }}>Test</th><th style={{ padding: 6 }}>Value</th><th style={{ padding: 6 }}>Ref</th><th style={{ padding: 6 }}>Note</th></tr></thead>
                          <tbody>
                            {selected.diagnostics.labs.map((lab, i) => (
                              <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                                <td style={{ padding: 6, fontWeight: 500 }}>{lab.test}</td>
                                <td style={{ padding: 6, textAlign: "center", fontWeight: 700, color: lab.status === "critical" ? S.danger : lab.status === "abnormal" ? S.warning : S.success }}>{lab.value} {lab.unit}</td>
                                <td style={{ padding: 6, textAlign: "center", color: S.textSec, fontSize: 11 }}>{lab.ref}</td>
                                <td style={{ padding: 6, fontSize: 11, color: S.textSec }}>{lab.note || ""}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {(selected.diagnostics.imaging || []).map((img, i) => (
                        <div key={i} style={{ marginBottom: 8, padding: 10, background: "#F8FAFC", borderRadius: 8 }}>
                          <div style={{ fontSize: 12, fontWeight: 700 }}>📸 {img.study}</div>
                          <div style={{ fontSize: 12, marginTop: 4 }}><strong>Findings:</strong> {img.findings}</div>
                          <div style={{ fontSize: 12, marginTop: 2, color: S.brand }}><strong>Interpretation:</strong> {img.interpretation}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CHART TAB */}
                  {tab === "chart" && (
                    <div>
                      <span style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, display: "block" }}>Patient Chart</span>
                      <div style={{ padding: 10, background: S.brandLight, borderRadius: 8, marginBottom: 12, fontSize: 12 }}>
                        <strong>{selected.name}</strong> | {selected.age}{selected.gender[0]} | {selected.mrn} | {selected.service} | Code Status: {selected.codeStatus}
                        <br />Allergies: {selected.variant.clinicalFacts.allergies.map(a => `${a.allergen} (${a.reaction})`).join(", ") || "NKDA"}
                      </div>
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Home Medications</div>
                        {selected.variant.clinicalFacts.medications.map((m, i) => (
                          <div key={i} style={{ fontSize: 12, marginBottom: 4, padding: "4px 8px", borderRadius: 4, background: m.status === "taking" ? "#F0FDF4" : "#FEF2F2" }}>
                            <strong>{m.name}</strong> {m.dose} <span style={{ fontSize: 10, color: m.status === "taking" ? S.success : S.danger }}>({m.status})</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Nursing Notes</div>
                        {(selected.nursingNotes || []).map((n, i) => (
                          <div key={i} style={{ fontSize: 11, marginBottom: 4, padding: "4px 8px", background: "#F8FAFC", borderRadius: 4 }}>
                            <span style={{ color: S.textSec }}>{new Date(n.time).toLocaleTimeString()} — {n.author}:</span> {n.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* NOTES TAB */}
                  {tab === "notes" && (
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <span style={{ fontSize: 16, fontWeight: 700 }}>Admission H&P</span>
                        {!showCoach && <button onClick={() => { setShowCoach(true); setCoachInput("Help me with my note"); }} style={{ padding: "4px 12px", borderRadius: 6, border: `1px solid ${S.border}`, background: "white", cursor: "pointer", fontSize: 11 }}>📞 Note Help</button>}
                      </div>
                      <textarea value={noteText} onChange={e => setNoteText(e.target.value)} placeholder={`ADMISSION H&P — ${selected.name}\n\nCC:\n\nHPI:\n\nROS:\n\nPast Medical History:\n\nMedications:\n\nAllergies:\n\nSocial History:\n\nFamily History:\n\nPhysical Exam:\n\nAssessment:\n\nPlan:\n1.\n2.\n3.`} style={{ width: "100%", height: 400, padding: 12, borderRadius: 8, border: `1px solid ${S.border}`, fontFamily: "monospace", fontSize: 12, resize: "vertical", outline: "none" }} />
                      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                        <button onClick={saveNote} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>Save Note</button>
                      </div>
                      {selected.notes.length > 0 && (
                        <div style={{ marginTop: 16 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Saved Notes</div>
                          {selected.notes.map((n, i) => (
                            <div key={i} style={{ padding: 10, background: "#F8FAFC", borderRadius: 8, marginBottom: 8, fontSize: 12, whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
                              <div style={{ fontWeight: 700, marginBottom: 4 }}>{n.type} — {new Date(n.ts).toLocaleString()}</div>
                              {n.text}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* DDX TAB */}
                  {tab === "ddx" && (
                    <div>
                      <span style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, display: "block" }}>Differential Diagnosis</span>
                      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                        <input value={ddxInput} onChange={e => setDdxInput(e.target.value)} onKeyDown={e => e.key === "Enter" && addDdx()} placeholder="Add diagnosis..." style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: `1px solid ${S.border}`, fontSize: 13, outline: "none" }} />
                        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          <input type="range" min={5} max={95} value={ddxConf} onChange={e => setDdxConf(Number(e.target.value))} style={{ width: 80 }} />
                          <span style={{ fontSize: 11, width: 30 }}>{ddxConf}%</span>
                        </div>
                        <button onClick={addDdx} style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>Add</button>
                      </div>
                      {(selected.ddxList || []).sort((a, b) => b.confidence - a.confidence).map((d, i) => (
                        <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, padding: "6px 10px", background: i === 0 ? S.brandLight : "#F8FAFC", borderRadius: 6, borderLeft: `3px solid ${i === 0 ? S.brand : S.border}` }}>
                          <span style={{ fontWeight: 600, fontSize: 13, flex: 1 }}>{d.diagnosis}</span>
                          <div style={{ width: 60, height: 6, borderRadius: 3, background: "#E2E8F0" }}><div style={{ height: "100%", borderRadius: 3, background: S.brand, width: `${d.confidence}%` }} /></div>
                          <span style={{ fontSize: 11, color: S.textSec, width: 30 }}>{d.confidence}%</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TEACHING TAB */}
                  {tab === "teaching" && selected.status === "completed" && (() => {
                    const t = selected.variant.teaching;
                    const studentTop = (selected.ddxList || []).sort((a, b) => b.confidence - a.confidence)[0];
                    const gotIt = studentTop?.diagnosis?.toLowerCase().includes(t.correctDiagnosis.split("—")[0].trim().toLowerCase().split(" ").slice(0, 3).join(" "));
                    return (
                      <div>
                        <span style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, display: "block" }}>🎓 Case Teaching</span>
                        {/* Performance Summary */}
                        <div style={{ padding: 12, background: gotIt ? "#F0FDF4" : "#FEF2F2", borderRadius: 8, marginBottom: 16 }}>
                          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{gotIt ? "✅ Correct primary diagnosis!" : "❌ Primary diagnosis not identified"}</div>
                          <div style={{ fontSize: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                            <div>Interview questions: {selected.interviewHistory.filter(m => m.role === "student").length}</div>
                            <div>Exam performed: {selected.examPerformed ? "✅" : "❌"}</div>
                            <div>Orders placed: {(selected.orderedMeds?.length || 0) + (selected.orderedNursing?.length || 0) + (selected.orderedFluids?.length || 0)}</div>
                            <div>Note written: {selected.notes.length > 0 ? "✅" : "❌"}</div>
                            <div>Coach calls: {selected.coachCallCount || 0}</div>
                            <div>Level selected: {selected.selectedLevel || "None"} {selected.selectedLevel === selected.variant.expectedLevel ? "✅" : selected.selectedLevel ? "⚠️" : "❌"}</div>
                          </div>
                        </div>
                        {/* Expert Differential */}
                        <div style={{ marginBottom: 16 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Expert Differential</div>
                          {t.differentialRanked.map((d, i) => (
                            <div key={i} style={{ marginBottom: 6, padding: "6px 10px", background: i === 0 ? S.brandLight : "#F8FAFC", borderRadius: 6, borderLeft: `3px solid ${i === 0 ? S.brand : S.border}` }}>
                              <div style={{ fontWeight: 600, fontSize: 13 }}>{d.dx} ({d.probability}%)</div>
                              <div style={{ fontSize: 11, color: S.textSec }}>{d.key}</div>
                            </div>
                          ))}
                        </div>
                        {/* Key Orders */}
                        <div style={{ marginBottom: 16 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Key Admission Orders</div>
                          {t.keyOrders.map((o, i) => <div key={i} style={{ fontSize: 12, marginBottom: 3 }}>• {o}</div>)}
                        </div>
                        {/* Critical Misses */}
                        <div style={{ marginBottom: 16, padding: 10, background: "#FEF2F2", borderRadius: 8 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: S.danger, marginBottom: 4 }}>⚠️ Don't Miss</div>
                          {t.criticalMiss.map((c, i) => <div key={i} style={{ fontSize: 12, marginBottom: 2 }}>• {c}</div>)}
                        </div>
                        {/* Learning Points */}
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>📖 Learning Points</div>
                          {t.learningPoints.map((lp, i) => <div key={i} style={{ fontSize: 12, marginBottom: 6, padding: "6px 10px", background: "#F8FAFC", borderRadius: 6 }}>{lp}</div>)}
                        </div>
                        {/* Sources */}
                        <div style={{ marginTop: 16, padding: 10, background: "#F8FAFC", borderRadius: 8, fontSize: 11, color: S.textSec }}>
                          Sources: StatPearls/NCBI Bookshelf, AHA/ACC Guidelines, Cochrane Library. All content peer-reviewed and open-access.
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* COACH PANEL */}
                {showCoach && (
                  <div style={{ width: 320, borderLeft: `1px solid ${S.border}`, background: "#FFFBEB", display: "flex", flexDirection: "column", flexShrink: 0 }}>
                    <div style={{ padding: "10px 14px", borderBottom: "1px solid #FDE68A", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div><span style={{ fontWeight: 700, fontSize: 13 }}>📞 Dr. Chen</span><div style={{ fontSize: 10, color: "#92400E" }}>IM Attending (Socratic Coach)</div></div>
                      <button onClick={() => setShowCoach(false)} style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 16 }}>✕</button>
                    </div>
                    <div style={{ flex: 1, overflowY: "auto", padding: 12 }}>
                      {(selected?.coachHistory || []).length === 0 && (
                        <div style={{ fontSize: 12, color: "#92400E", marginBottom: 12 }}>Dr. Chen is available. Ask a question or select a prompt below.</div>
                      )}
                      {(selected?.coachHistory || []).map((m, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", marginBottom: 8 }}>
                          <div style={{ maxWidth: "85%", padding: "8px 10px", borderRadius: 10, background: m.role === "user" ? "#FDE68A" : "white", fontSize: 12, lineHeight: 1.5, border: m.role === "coach" ? "1px solid #FDE68A" : "none" }}>{m.text}</div>
                        </div>
                      ))}
                      {coachLoading && <div style={{ fontSize: 11, color: "#92400E", fontStyle: "italic" }}>Dr. Chen is thinking...</div>}
                      <div ref={coachRef} />
                    </div>
                    <div style={{ padding: 10, borderTop: "1px solid #FDE68A" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                        {["I'm stuck on the diagnosis", "Which orders am I missing?", "Help with my note", "Right level of care?"].map(p => (
                          <button key={p} onClick={() => { setCoachInput(p); }} style={{ padding: "3px 8px", borderRadius: 4, border: "1px solid #FDE68A", background: "white", cursor: "pointer", fontSize: 10 }}>{p}</button>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <input value={coachInput} onChange={e => setCoachInput(e.target.value)} onKeyDown={e => e.key === "Enter" && askCoach()} placeholder="Ask Dr. Chen..." style={{ flex: 1, padding: "8px 10px", borderRadius: 6, border: "1px solid #FDE68A", fontSize: 12, outline: "none" }} />
                        <button onClick={askCoach} disabled={coachLoading} style={{ padding: "8px 14px", borderRadius: 6, border: "none", background: "#F59E0B", color: "white", cursor: "pointer", fontWeight: 600, fontSize: 12 }}>Ask</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ADD PATIENT MODAL */}
      {showAdd && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }} onClick={() => setShowAdd(false)}>
          <div style={{ background: "white", borderRadius: 16, padding: 24, maxWidth: 440, width: "90%" }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>New Admission</div>
            <div style={{ fontSize: 13, color: S.textSec, marginBottom: 16 }}>Select a presentation to receive an ED handoff:</div>
            {CASE_TEMPLATES.map(t => (
              <button key={t.id} onClick={() => addPatient(t.id)} style={{ display: "block", width: "100%", padding: "12px 16px", marginBottom: 8, borderRadius: 8, border: `1px solid ${S.border}`, background: "white", cursor: "pointer", textAlign: "left" }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{t.presentation}</div>
                <div style={{ fontSize: 11, color: S.textSec, marginTop: 2 }}>{t.service} • Difficulty: {"★".repeat(t.difficulty)}{"☆".repeat(3-t.difficulty)} • Handoff: {t.handoffLevel === 1 ? "🔴 Minimal" : t.handoffLevel === 2 ? "🟡 Partial" : "🟢 Full"}</div>
              </button>
            ))}
            <button onClick={() => setShowAdd(false)} style={{ marginTop: 8, padding: "8px 16px", borderRadius: 8, border: `1px solid ${S.border}`, background: "white", cursor: "pointer", fontSize: 12 }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
