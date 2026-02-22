import { useState, useEffect, useRef, useCallback } from "react";

// ═══════════════════════════════════════════════════════════════
// ReasonDx SP Trainer — Standardized Patient Practice + SBAR Handoff
// Modes: SP Practice (AI student interviews SP) | SBAR Handoff Practice
// Features: Microphone transcription, AI feedback, verbal delivery
// ═══════════════════════════════════════════════════════════════

const S = {
  brand: "#2874A6", brandDark: "#1B4F72", brandLight: "#D4E6F1",
  bg: "#F0F4F8", card: "#FFFFFF", text: "#1E293B", textSec: "#64748B",
  border: "#E2E8F0", danger: "#DC2626", warning: "#F59E0B", success: "#16A34A",
  font: "'DM Sans', -apple-system, sans-serif",
};

// ═══════════════════════════════════════════════════════════════
// SP CASE BRIEFS
// ═══════════════════════════════════════════════════════════════
const SP_CASES = [
  {
    id: "sp-chest-pain",
    title: "Chest Pain — Acute Coronary Syndrome",
    category: "Cardiology",
    difficulty: "Intermediate",
    setting: "Emergency Department",
    demographics: { name: "Robert Martinez", age: 58, gender: "Male" },
    openingStatement: "I've been having this really bad pressure in my chest for about two hours now.",
    briefing: {
      overview: "You are a 58-year-old man in the ED with chest pressure that started 2 hours ago while watching TV. You are frightened because your father died of a heart attack at 62.",
      hpiDetails: {
        onset: "Started gradually 2 hours ago while sitting on the couch. Built up over 10-15 minutes.",
        location: "Center of your chest, behind the breastbone. Point with a fist (Levine sign).",
        quality: "Pressure, tightness, heaviness — elephant sitting on chest. NOT sharp or stabbing.",
        severity: "8 out of 10. Worst chest discomfort ever.",
        radiation: "Goes to left shoulder, down left arm, and into jaw.",
        timing: "Constant since it started. Has NOT come and gone.",
        aggravating: "Nothing specific. NOT worse with deep breathing or movement.",
        relieving: "Tried Tums — no relief. Nothing helps.",
        associated: "Sweating (cold sweats), nauseous (no vomiting), short of breath. Sense of doom."
      },
      pmh: "Type 2 diabetes (10 years), hypertension (8 years), hyperlipidemia. Appendectomy at 25.",
      medications: "Metformin 1000mg BID, Lisinopril 20mg daily, Atorvastatin 40mg QHS, ASA 81mg daily.",
      allergies: "NKDA.",
      socialHx: "Office manager. Married, 2 adult children. Smoked 1 PPD x 20 years, quit 5 years ago. 1-2 beers on weekends. No drugs.",
      familyHx: "Father died MI at 62. Mother alive 80 with DM2. Brother has HTN.",
      ros: {
        admit: ["sweating", "nausea", "SOB", "lightheadedness", "anxiety", "left arm tingling"],
        deny: ["vomiting", "fever", "cough", "leg swelling", "travel", "syncope", "palpitations"]
      },
      emotionalCues: "Scared. Keeps thinking about father dying of MI. May ask 'Am I having a heart attack?'",
      physicalBehavior: "Sitting upright. Rubbing chest with fist. Diaphoretic. Pale."
    },
    keyPerformancePoints: [
      "Opening statement natural, not overly medical",
      "Describes pressure/tightness, NOT sharp/stabbing",
      "Radiates to left arm and jaw when asked",
      "Mentions father's death from MI in family history",
      "Expresses fear/anxiety appropriately",
      "Denies symptoms consistently (no pleuritic, no positional)",
      "Gives medication list with doses",
      "Does NOT volunteer unprompted"
    ],
    diagnostics: {
      ecg: {
        findings: ["Sinus tachycardia at 108 bpm", "ST elevations V2-V5 (2-3mm)", "Reciprocal ST depressions III, aVF", "No PR depression"],
        interpretation: "STEMI — Acute anterior ST-elevation MI. Activate cath lab."
      },
      labs: [
        { test: "Troponin I", value: "0.04", unit: "ng/mL", ref: "<0.04", status: "critical", note: "Borderline — repeat in 3 hours, but ECG is diagnostic" },
        { test: "WBC", value: "8.2", unit: "K/μL", ref: "4.5-11.0", status: "normal" },
        { test: "Hemoglobin", value: "14.1", unit: "g/dL", ref: "13.5-17.5", status: "normal" },
        { test: "Platelets", value: "245", unit: "K/μL", ref: "150-400", status: "normal" },
        { test: "Sodium", value: "140", unit: "mEq/L", ref: "136-145", status: "normal" },
        { test: "Potassium", value: "4.2", unit: "mEq/L", ref: "3.5-5.0", status: "normal" },
        { test: "Creatinine", value: "0.9", unit: "mg/dL", ref: "0.7-1.3", status: "normal" },
        { test: "Glucose", value: "188", unit: "mg/dL", ref: "70-100", status: "abnormal", note: "Elevated — known DM2, stress response" },
        { test: "BNP", value: "89", unit: "pg/mL", ref: "<100", status: "normal" },
        { test: "Magnesium", value: "2.0", unit: "mg/dL", ref: "1.7-2.2", status: "normal" }
      ],
      imaging: [
        { study: "Chest X-ray (Portable AP)", findings: "Heart size normal. Lungs clear bilaterally. No effusions. No pneumothorax. Mediastinal silhouette normal.", interpretation: "No acute cardiopulmonary process. Does NOT exclude ACS." }
      ]
    }
  },
  {
    id: "sp-appendicitis",
    title: "Abdominal Pain — Appendicitis",
    category: "Surgery",
    difficulty: "Beginner",
    setting: "Emergency Department",
    demographics: { name: "Aisha Johnson", age: 22, gender: "Female" },
    openingStatement: "My stomach has been hurting really bad since last night.",
    briefing: {
      overview: "22-year-old woman with abdominal pain that started 12 hours ago around belly button, now moved to right lower side. Nauseous, can't eat.",
      hpiDetails: {
        onset: "Started 12 hours ago around midnight. Woke you from sleep. Initially periumbilical.",
        location: "Initially around belly button. Past 6 hours, moved to RIGHT LOWER SIDE. Point to RLQ.",
        quality: "Started as dull ache, now sharp and constant in RLQ.",
        severity: "Started as 4/10, now 7-8/10.",
        radiation: "Does NOT radiate.",
        timing: "Constant. Progressively worse. Does NOT come in waves.",
        aggravating: "WORSE with walking, moving, coughing. Car ride bumps were painful.",
        relieving: "Lying still helps a little. Ibuprofen didn't help.",
        associated: "Nausea (no vomiting), loss of appetite, felt warm."
      },
      pmh: "No significant PMH. No surgeries.",
      medications: "OCPs. Occasional ibuprofen.",
      allergies: "Penicillin — rash as child.",
      socialHx: "College senior, biology major. 2 roommates. No smoking. Social drinking. Sexually active, one partner, OCPs.",
      familyHx: "Mother thyroid problems. Father healthy.",
      ros: {
        admit: ["nausea", "loss of appetite", "low-grade fever"],
        deny: ["vomiting", "diarrhea", "urinary symptoms", "vaginal bleeding/discharge", "chest pain"]
      },
      emotionalCues: "Worried about missing finals. Nervous about surgery if needed.",
      physicalBehavior: "Lying still. Winces with movement. Guards RLQ."
    },
    keyPerformancePoints: [
      "Pain migration: periumbilical → RLQ (classic appendicitis)",
      "Worse with movement (peritoneal signs)",
      "Reports penicillin allergy with reaction type",
      "Confirms LMP and sexual activity when asked",
      "Does NOT volunteer last menstrual period unprompted",
      "Winces/guards appropriately on exam"
    ],
    diagnostics: {
      ecg: null,
      labs: [
        { test: "WBC", value: "14.2", unit: "K/μL", ref: "4.5-11.0", status: "abnormal", note: "Elevated with left shift — consistent with acute infection" },
        { test: "Hemoglobin", value: "13.1", unit: "g/dL", ref: "12.0-16.0", status: "normal" },
        { test: "Platelets", value: "312", unit: "K/μL", ref: "150-400", status: "normal" },
        { test: "Sodium", value: "139", unit: "mEq/L", ref: "136-145", status: "normal" },
        { test: "Potassium", value: "3.9", unit: "mEq/L", ref: "3.5-5.0", status: "normal" },
        { test: "Creatinine", value: "0.7", unit: "mg/dL", ref: "0.5-1.1", status: "normal" },
        { test: "Glucose", value: "102", unit: "mg/dL", ref: "70-100", status: "normal" },
        { test: "Urinalysis", value: "Trace WBC", unit: "", ref: "Negative", status: "abnormal", note: "Trace WBC can be seen with appendiceal irritation near ureter" },
        { test: "β-hCG", value: "Negative", unit: "", ref: "Negative", status: "normal", note: "Rules out ectopic pregnancy" },
        { test: "Lipase", value: "32", unit: "U/L", ref: "10-140", status: "normal" },
        { test: "CRP", value: "8.4", unit: "mg/dL", ref: "<0.5", status: "abnormal", note: "Elevated, consistent with acute inflammation" }
      ],
      imaging: [
        { study: "CT Abdomen/Pelvis with IV Contrast", findings: "Dilated appendix measuring 11mm in diameter with periappendiceal fat stranding and mild free fluid in the right lower quadrant. No appendicolith identified. No evidence of perforation or abscess formation. No free air. Remainder of bowel is normal caliber without obstruction.", interpretation: "Acute uncomplicated appendicitis. No perforation or abscess." }
      ]
    }
  },
  {
    id: "sp-depression",
    title: "Depression Screening — Major Depressive Disorder",
    category: "Psychiatry",
    difficulty: "Advanced",
    setting: "Primary Care Office",
    demographics: { name: "David Chen", age: 34, gender: "Male" },
    openingStatement: "I just... haven't been feeling like myself lately.",
    briefing: {
      overview: "34-year-old man presenting for routine visit but actually struggling with depression for 3 months since divorce. Minimizes symptoms initially.",
      hpiDetails: {
        onset: "About 3 months ago. Divorce was finalized then.",
        location: "N/A — mood/emotional.",
        quality: "Everything feels heavy. No motivation. Going through the motions.",
        severity: "Started mild, now affecting work and daily functioning.",
        radiation: "N/A",
        timing: "Constant low mood. Worse in mornings. Some better days but mostly bad.",
        aggravating: "Being alone. Weekends. Seeing reminders of ex-wife.",
        relieving: "Work distracts. Talking to his sister helps somewhat.",
        associated: "Poor sleep (waking at 3AM), lost 12 pounds without trying, no concentration at work."
      },
      pmh: "None.",
      medications: "None.",
      allergies: "NKDA.",
      socialHx: "Software engineer. Divorced 3 months ago. Lives alone now. One sister nearby. Drinks 2-3 beers most nights (up from occasional). No drugs. No smoking.",
      familyHx: "Mother treated for depression. Father 'doesn't believe in therapy.'",
      ros: {
        admit: ["insomnia (early morning awakening)", "weight loss", "poor concentration", "fatigue", "anhedonia"],
        deny: ["suicidal ideation (initially — will admit to passive thoughts if asked sensitively)", "hallucinations", "mania"]
      },
      emotionalCues: "Will minimize initially ('I'm fine, just tired'). If the student creates a safe space and asks gently, will open up more. May tear up when discussing divorce. Does NOT have an active suicide plan but has had passing thoughts of 'everyone would be better off without me.'",
      physicalBehavior: "Slouched posture. Avoids eye contact initially. Flat affect. Speaks slowly."
    },
    keyPerformancePoints: [
      "Must create safe, non-judgmental space to elicit true symptoms",
      "Doesn't open up if questions are too clinical/rapid",
      "PHQ-9 screening elements covered naturally",
      "Safety assessment: admits passive SI only if asked sensitively",
      "Alcohol increase acknowledged if specifically asked",
      "Mother's depression mentioned in family history"
    ],
    diagnostics: {
      ecg: null,
      labs: [
        { test: "TSH", value: "2.4", unit: "mIU/L", ref: "0.4-4.0", status: "normal", note: "Rules out thyroid cause of depressive symptoms" },
        { test: "CBC", value: "WNL", unit: "", ref: "", status: "normal", note: "No anemia or infection" },
        { test: "BMP", value: "WNL", unit: "", ref: "", status: "normal" },
        { test: "Vitamin B12", value: "485", unit: "pg/mL", ref: "200-900", status: "normal" },
        { test: "Folate", value: "12.3", unit: "ng/mL", ref: ">3.0", status: "normal" },
        { test: "Hepatic Panel", value: "AST 42, ALT 48", unit: "U/L", ref: "10-40", status: "abnormal", note: "Mildly elevated — consistent with increased alcohol use" },
        { test: "GGT", value: "68", unit: "U/L", ref: "9-48", status: "abnormal", note: "Elevated — alcohol-sensitive marker" },
        { test: "Urine Drug Screen", value: "Negative", unit: "", ref: "Negative", status: "normal" },
        { test: "PHQ-9 Score", value: "18", unit: "/27", ref: "<5 normal", status: "critical", note: "Moderately severe depression" }
      ],
      imaging: []
    }
  },
  {
    id: "sp-headache",
    title: "Headache — Subarachnoid Hemorrhage",
    category: "Neurology",
    difficulty: "Intermediate",
    setting: "Emergency Department",
    demographics: { name: "Patricia Williams", age: 47, gender: "Female" },
    openingStatement: "I have the worst headache of my entire life. It just hit me out of nowhere.",
    briefing: {
      overview: "47-year-old woman with sudden-onset severe headache ('thunderclap') while exercising. Classic SAH presentation.",
      hpiDetails: {
        onset: "Exactly 3 hours ago. Was on treadmill at gym. Hit like a thunderclap — 0 to 10 instantly.",
        location: "Back of head initially, now all over. 'My whole head is exploding.'",
        quality: "Explosive, throbbing, worst pain ever experienced. Like being hit with a baseball bat.",
        severity: "10 out of 10. 'Nothing has ever hurt this bad.'",
        radiation: "Into the back of her neck. Her neck is stiff.",
        timing: "Constant since onset. Has not let up at all.",
        aggravating: "Light hurts eyes (photophobia). Moving head makes it worse. Bending forward.",
        relieving: "Nothing. Tried 2 Excedrin — no help.",
        associated: "Vomited twice. Neck stiffness. Light sensitivity. Brief episode where 'things went dark' for a few seconds."
      },
      pmh: "Migraines (but says this is COMPLETELY DIFFERENT). Hypertension (poorly controlled). Smoker.",
      medications: "Amlodipine 5mg (doesn't always take it). Sumatriptan PRN migraines.",
      allergies: "NKDA.",
      socialHx: "High school teacher. Married. 2 teenagers. Smokes 1/2 PPD x 15 years. Occasional wine.",
      familyHx: "Mother had brain aneurysm (ruptured, survived surgery). Father has HTN.",
      ros: {
        admit: ["vomiting", "photophobia", "neck stiffness", "brief vision loss", "severe headache"],
        deny: ["fever", "weakness", "numbness", "seizure", "chest pain", "trauma"]
      },
      emotionalCues: "Very scared. In significant distress. May be irritable due to pain. Keeps saying 'This is NOT my migraine.'",
      physicalBehavior: "Lying in dark room. Eyes closed. Vomiting into basin. Neck rigid. Winces with any movement."
    },
    keyPerformancePoints: [
      "Distinguishes this from previous migraines emphatically",
      "Thunderclap onset — 0 to max instantly",
      "Reports family history of brain aneurysm",
      "Reports brief vision loss (sentinel symptoms)",
      "Neck stiffness and photophobia",
      "Reports poorly controlled HTN when asked about meds"
    ],
    diagnostics: {
      ecg: {
        findings: ["Sinus rhythm at 82 bpm", "Normal axis", "No ST changes", "Diffuse T-wave inversions (can be seen with SAH)"],
        interpretation: "Sinus rhythm. Diffuse T-wave inversions — can be neurogenic in the setting of subarachnoid hemorrhage."
      },
      labs: [
        { test: "WBC", value: "11.8", unit: "K/μL", ref: "4.5-11.0", status: "abnormal", note: "Mild leukocytosis — stress response" },
        { test: "Hemoglobin", value: "13.2", unit: "g/dL", ref: "12.0-16.0", status: "normal" },
        { test: "Platelets", value: "198", unit: "K/μL", ref: "150-400", status: "normal" },
        { test: "Sodium", value: "137", unit: "mEq/L", ref: "136-145", status: "normal" },
        { test: "Potassium", value: "4.0", unit: "mEq/L", ref: "3.5-5.0", status: "normal" },
        { test: "Creatinine", value: "0.8", unit: "mg/dL", ref: "0.5-1.1", status: "normal" },
        { test: "Glucose", value: "142", unit: "mg/dL", ref: "70-100", status: "abnormal", note: "Stress hyperglycemia" },
        { test: "INR", value: "1.0", unit: "", ref: "0.8-1.1", status: "normal", note: "Important — not anticoagulated" },
        { test: "PTT", value: "28", unit: "sec", ref: "25-35", status: "normal" },
        { test: "Troponin I", value: "0.02", unit: "ng/mL", ref: "<0.04", status: "normal", note: "Troponin can elevate with SAH (neurogenic stunned myocardium)" },
        { test: "Type & Screen", value: "A+, Ab negative", unit: "", ref: "", status: "normal", note: "Available for transfusion if needed" }
      ],
      imaging: [
        { study: "CT Head without Contrast", findings: "Hyperdense material filling the basal cisterns (suprasellar, ambient, and quadrigeminal), bilateral sylvian fissures, and interhemispheric fissure. No intraparenchymal hemorrhage. No hydrocephalus. No midline shift. Modified Fisher Grade 3.", interpretation: "Acute diffuse subarachnoid hemorrhage. Neurosurgery consult STAT. CTA recommended to identify aneurysm." },
        { study: "CTA Head/Neck", findings: "6mm saccular aneurysm at the anterior communicating artery (AComA) with irregular contour suggesting recent rupture. Circle of Willis otherwise patent. No additional aneurysms identified. No dissection.", interpretation: "Ruptured AComA aneurysm. Recommend urgent neurosurgical intervention (clip vs. coil)." }
      ]
    }
  }
];

// ═══════════════════════════════════════════════════════════════
// SBAR HANDOFF SCENARIOS
// ═══════════════════════════════════════════════════════════════
const SBAR_SCENARIOS = [
  {
    id: "ed-to-im",
    title: "ED → Internal Medicine Admission",
    description: "Hand off a CHF patient from the ED to the IM admitting team.",
    yourRole: "ED Resident",
    receiver: "IM Admitting Intern",
    receiverName: "Dr. Patel",
    patient: { name: "Margaret Sullivan", age: 68, sex: "F", room: "ED Bed 12", dx: "CHF Exacerbation" },
    context: "68F with known HFrEF (EF 30%) presenting with 4 days of worsening dyspnea, orthopnea, PND, and bilateral LE edema. Ran out of lasix and lisinopril 1 week ago. BNP 1842, Cr 1.8 (baseline 1.4), CXR with bilateral effusions. Gave 40mg lasix IV, on 2L NC, tele. Needs admission for IV diuresis.",
    expectedElements: {
      situation: ["calling to admit", "CHF", "heart failure", "exacerbation", "decompensated"],
      background: ["EF 30", "ran out of medications", "lasix", "lisinopril", "baseline creatinine", "known HFrEF"],
      assessment: ["volume overloaded", "BNP 1842", "acute on chronic", "kidney function", "creatinine 1.8", "non-adherence"],
      recommendation: ["telemetry", "diuresis", "IV lasix", "daily weights", "I&O", "restart medications", "cardiology"]
    },
    idealSBAR: {
      S: "Hi Dr. Patel, this is [name] calling from the ED. I have a patient I need to admit to medicine — Margaret Sullivan, a 68-year-old woman with acute decompensated heart failure.",
      B: "She has a history of HFrEF with an EF of 30%, CKD stage 3 with a baseline creatinine of 1.4, type 2 diabetes, hypertension, and atrial fibrillation on warfarin. She ran out of her lasix and lisinopril about a week ago and has been getting progressively more short of breath. She can't lie flat, she's had PND, and her legs are very swollen.",
      A: "She's clearly volume overloaded. Her BNP is 1842, creatinine is up to 1.8 from her baseline of 1.4, and her chest X-ray shows bilateral effusions with cephalization. I think this is a straightforward acute-on-chronic decompensation precipitated by medication non-adherence.",
      R: "She'll need telemetry for her AFib and monitoring during diuresis. I've given her 40mg of lasix IV so far — she's put out about 400cc. She'll need IV diuresis, daily weights, strict I&O, and her home meds restarted — though you'll want to hold the metformin given her AKI. She's on 2L nasal cannula, satting 93%. INR is therapeutic at 2.3."
    }
  },
  {
    id: "ed-to-surgery",
    title: "ED → Surgery Consult",
    description: "Call surgery for a patient with appendicitis.",
    yourRole: "ED Resident",
    receiver: "Surgery Chief Resident",
    receiverName: "Dr. Martinez",
    patient: { name: "Aisha Johnson", age: 22, sex: "F", room: "ED Bed 7", dx: "Acute Appendicitis" },
    context: "22F with 12 hours of periumbilical pain migrated to RLQ. WBC 14.2, CT shows dilated appendix 11mm with fat stranding, no perforation. bHCG negative. PCN allergy (rash). NPO since midnight. Pain 7-8/10.",
    expectedElements: {
      situation: ["appendicitis", "surgery consult", "22-year-old", "abdominal pain"],
      background: ["migrated", "periumbilical to RLQ", "12 hours", "no perforation", "WBC elevated"],
      assessment: ["CT confirmed", "uncomplicated appendicitis", "no perforation"],
      recommendation: ["OR", "appendectomy", "NPO", "antibiotics", "penicillin allergy"]
    },
    idealSBAR: {
      S: "Dr. Martinez, this is [name] in the ED. I have a 22-year-old woman with CT-confirmed acute appendicitis that I'd like surgery to evaluate.",
      B: "She presented with 12 hours of abdominal pain that started periumbilically and has migrated to the RLQ — classic migration pattern. She's been having nausea, anorexia, and has a low-grade fever. No significant PMH. She is allergic to penicillin — got a rash.",
      A: "Her WBC is 14.2 with a left shift. CT shows a dilated appendix at 11mm with periappendiceal fat stranding but no evidence of perforation or abscess. Beta-hCG is negative. This looks like uncomplicated acute appendicitis.",
      R: "She's NPO since midnight. I'd like surgery to come evaluate her for appendectomy. I haven't started antibiotics yet given the PCN allergy — I wanted to discuss coverage with you. She's got 2 IVs, her pain is controlled with morphine, and she's on IV fluids."
    }
  },
  {
    id: "nurse-call",
    title: "Nurse → On-Call Resident (Fever)",
    description: "Call the on-call resident about a post-op patient with new fever.",
    yourRole: "Floor Nurse",
    receiver: "On-Call Resident",
    receiverName: "Dr. Kim",
    patient: { name: "James Wilson", age: 65, sex: "M", room: "4218", dx: "POD 2 Right Hemicolectomy" },
    context: "65M POD2 right hemicolectomy for colon cancer. New temp 101.8°F in last 30 min. HR 98, BP 118/72. No previous fevers. Has foley, central line, and abdominal drain. Last BM was pre-op. Incision looks clean. Patient says he feels 'a little warm' but otherwise okay. Taking clears. Incentive spirometer use has been poor.",
    expectedElements: {
      situation: ["fever", "post-op", "new temperature", "101.8"],
      background: ["POD 2", "hemicolectomy", "colon cancer", "lines", "foley", "central line"],
      assessment: ["new fever", "vital signs", "lines in place", "poor incentive spirometry"],
      recommendation: ["evaluate", "blood cultures", "UA", "chest X-ray", "examine patient"]
    },
    idealSBAR: {
      S: "Dr. Kim, this is [name] on 4 South. I'm calling about Mr. Wilson in room 4218 — he's developed a new fever of 101.8.",
      B: "He's post-op day 2 from a right hemicolectomy for colon cancer. He has a foley catheter, a right IJ central line placed in the OR, and a JP drain. He's been on clears and ambulating once today. His incentive spirometry has been poor — he hasn't been using it much. His incision looks clean with no erythema or drainage.",
      A: "This is his first fever post-op. His heart rate is up slightly at 98, BP is stable at 118/72. He doesn't look toxic — he says he just feels warm. But given he's POD2 with multiple lines and poor IS use, I'm concerned about the usual post-op fever workup — could be atelectasis, UTI, line infection, or surgical site.",
      R: "Would you be able to come evaluate him? In the meantime, do you want me to send blood cultures, a UA, and a chest X-ray? Should I hold off on Tylenol until you see him?"
    }
  },
  {
    id: "shift-handoff",
    title: "End-of-Shift Handoff (IM Intern)",
    description: "Hand off your patients to the incoming night float intern.",
    yourRole: "Day Intern",
    receiver: "Night Float Intern",
    receiverName: "Dr. Reeves",
    patient: { name: "Walter Okonkwo", age: 74, sex: "M", room: "3102", dx: "CAP with Sepsis" },
    context: "Admitted this morning from ED. 74M with CAP, met sepsis criteria (lactate 2.8, hypotensive). Started on ceftriaxone + azithromycin. Got 2L NS, pressures improved to 110/68. Repeat lactate pending (ordered at 4pm). Blood cultures from ED still pending. Sputum culture sent. Overnight: watch for hemodynamic instability, check repeat lactate when results come back, call if MAP <65 or O2 requirement increases.",
    expectedElements: {
      situation: ["CAP", "pneumonia", "sepsis", "admitted today"],
      background: ["74-year-old", "COPD", "antibiotics", "ceftriaxone", "azithromycin", "fluid resuscitation"],
      assessment: ["improving", "repeat lactate pending", "cultures pending", "hemodynamics better"],
      recommendation: ["watch for", "MAP", "oxygen", "repeat lactate", "call if"]
    },
    idealSBAR: {
      S: "Next up is Mr. Okonkwo in room 3102 — 74-year-old man admitted today from the ED with community-acquired pneumonia and sepsis.",
      B: "He's got COPD, hypertension, and BPH. He came in febrile, tachycardic, hypotensive with right lower lobe consolidation on CXR. Initial lactate was 2.8. WBC 18.2 with a left shift. Procalcitonin 4.2. He's on ceftriaxone 1g daily and azithromycin 500mg IV daily, started at noon. He got 2L of NS in the ED and another liter here.",
      A: "He's looking better since fluids — pressures came up to 110/68, heart rate down to 96. He's on 2L NC, satting 95%. He's mentating well. I ordered a repeat lactate at 4pm — that result should be back soon. Blood cultures and sputum cultures are both still pending.",
      R: "Overnight, just watch his hemodynamics. If MAP drops below 65, he may need another fluid bolus or vasopressors — at that point escalate to the senior. Check the repeat lactate when it results — if it's not clearing, that changes things. His O2 requirement should be stable but call the senior if he needs more than 4L. Antibiotics are all on schedule, next doses at midnight."
    }
  }
];

// ═══════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════
export default function App() {
  const [mode, setMode] = useState(null); // null | "sp" | "sbar"
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSBAR, setSelectedSBAR] = useState(null);
  const [sessionActive, setSessionActive] = useState(false);

  // SP mode state
  const [showBrief, setShowBrief] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [messages, setMessages] = useState([]);
  const [spInput, setSpInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [feedback, setFeedback] = useState([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [score, setScore] = useState(null);

  // SBAR mode state
  const [sbarInputs, setSbarInputs] = useState({ S: "", B: "", A: "", R: "" });
  const [sbarFeedback, setSbarFeedback] = useState(null);
  const [sbarConversation, setSbarConversation] = useState([]);
  const [sbarConvInput, setSbarConvInput] = useState("");
  const [sbarPhase, setSbarPhase] = useState("write"); // write | feedback | verbal | conversation
  const [sbarConvLoading, setSbarConvLoading] = useState(false);

  // Microphone state
  const [isListening, setIsListening] = useState(false);
  const [micSupported, setMicSupported] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);

  const chatRef = useRef(null);
  const recognitionRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const activeInputRef = useRef("sp"); // which input gets mic text

  // Check for speech recognition support
  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      setMicSupported(true);
      const recognition = new SR();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";
      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        if (activeInputRef.current === "sp") {
          setSpInput(prev => {
            const base = prev.replace(/\[listening\.\.\.\]$/, "").trim();
            return base ? base + " " + transcript : transcript;
          });
        } else if (activeInputRef.current.startsWith("sbar-")) {
          const field = activeInputRef.current.replace("sbar-", "");
          setSbarInputs(prev => ({
            ...prev,
            [field]: prev[field].replace(/\[listening\.\.\.\]$/, "").trim() + (prev[field] ? " " : "") + transcript
          }));
        } else if (activeInputRef.current === "sbar-conv") {
          setSbarConvInput(prev => {
            const base = prev.replace(/\[listening\.\.\.\]$/, "").trim();
            return base ? base + " " + transcript : transcript;
          });
        }
      };
      recognition.onerror = (e) => { if (e.error !== "aborted") setIsListening(false); };
      recognition.onend = () => setIsListening(false);
      recognitionRef.current = recognition;
    }
  }, []);

  useEffect(() => { chatRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, sbarConversation]);

  const toggleMic = (target) => {
    activeInputRef.current = target;
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try { recognitionRef.current?.start(); setIsListening(true); } catch (e) {}
    }
  };

  // Audio recording for verbal delivery
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      audioChunksRef.current = [];
      mr.ondataavailable = (e) => audioChunksRef.current.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        stream.getTracks().forEach(t => t.stop());
      };
      mr.start();
      mediaRecorderRef.current = mr;
      setIsRecording(true);
      setRecordingTime(0);
      timerRef.current = setInterval(() => setRecordingTime(t => t + 1), 1000);
    } catch (e) { alert("Unable to access microphone. Please allow microphone access."); }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    clearInterval(timerRef.current);
    setIsRecording(false);
  };

  const toggleSection = (key) => setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));

  // ═══════════════ SP MODE — AI Student asks questions ═══════════════
  const startSPSession = () => {
    setSessionActive(true);
    setShowBrief(false);
    setShowResults(false);
    setMessages([]);
    setFeedback([]);
    setSessionComplete(false);
    setScore(null);
    // First AI student question
    generateStudentQuestion([]);
  };

  const generateStudentQuestion = async (history) => {
    setAiLoading(true);
    try {
      const caseData = selectedCase;
      const prompt = `You are a medical student conducting a patient interview in ${caseData.setting}. The patient is ${caseData.demographics.name}, ${caseData.demographics.age}${caseData.demographics.gender[0]}, presenting with: "${caseData.openingStatement}".

${history.length === 0 ? "This is the start of the encounter. Greet the patient and ask an appropriate opening question." : 
`You have asked ${history.filter(m => m.role === "student").length} questions so far. Based on the conversation, ask the NEXT logical clinical question. Follow a structured approach (chief complaint → HPI → PMH → meds → allergies → social → family → ROS).`}

Previous exchanges:
${history.map(m => `${m.role === "student" ? "Student" : "SP"}: ${m.text}`).join("\n")}

RULES:
1. Ask ONE question at a time.
2. Use professional but approachable language.
3. Follow a logical clinical progression.
4. After ~12-15 questions, wrap up the interview.
5. If the SP's response seems vague, follow up for more detail.
${history.filter(m => m.role === "student").length >= 14 ? "6. This should be your final question — wrap up the encounter." : ""}`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 300, messages: [{ role: "user", content: prompt }] })
      });
      const data = await response.json();
      const text = data.content.map(b => b.text || "").join("");
      setMessages(prev => [...prev, { role: "student", text, ts: Date.now() }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "student", text: "Hi, I'm the medical student. What brings you in today?", ts: Date.now() }]);
    }
    setAiLoading(false);
  };

  const submitSPResponse = async () => {
    if (!spInput.trim() || aiLoading) return;
    const text = spInput.trim();
    setSpInput("");
    if (isListening) { recognitionRef.current?.stop(); setIsListening(false); }

    const newMessages = [...messages, { role: "sp", text, ts: Date.now() }];
    setMessages(newMessages);

    // Evaluate SP response
    setAiLoading(true);
    try {
      const caseData = selectedCase;
      const evalPrompt = `You are evaluating a Standardized Patient's response during practice.

CASE: ${caseData.title}
PATIENT: ${caseData.demographics.name}, ${caseData.demographics.age}${caseData.demographics.gender[0]}
CASE BRIEF: ${JSON.stringify(caseData.briefing)}
KEY POINTS: ${caseData.keyPerformancePoints.join("; ")}

Student asked: "${newMessages[newMessages.length - 2]?.text}"
SP responded: "${text}"

Evaluate the SP's response. Return ONLY a JSON object:
{
  "rating": "excellent" | "good" | "needs-work" | "incorrect",
  "feedback": "Brief coaching tip (1-2 sentences max)",
  "shouldContinue": true/false
}

Rate as:
- excellent: Natural delivery, accurate to case, appropriate detail level
- good: Mostly accurate, minor issues with delivery or detail
- needs-work: Too vague, too detailed, wrong info, or broke character
- incorrect: Gave wrong clinical information or self-diagnosed`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 300, messages: [{ role: "user", content: evalPrompt }] })
      });
      const data = await response.json();
      const raw = data.content.map(b => b.text || "").join("").replace(/```json|```/g, "").trim();
      const evaluation = JSON.parse(raw);
      setFeedback(prev => [...prev, { questionIndex: newMessages.filter(m => m.role === "student").length - 1, ...evaluation }]);

      if (evaluation.shouldContinue && newMessages.filter(m => m.role === "student").length < 15) {
        setTimeout(() => generateStudentQuestion(newMessages), 1500);
      } else {
        setSessionComplete(true);
        calculateScore(newMessages, [...feedback, evaluation]);
      }
    } catch (e) {
      setFeedback(prev => [...prev, { rating: "good", feedback: "Response recorded.", questionIndex: newMessages.filter(m => m.role === "student").length - 1 }]);
      if (newMessages.filter(m => m.role === "student").length < 15) {
        setTimeout(() => generateStudentQuestion(newMessages), 1500);
      } else {
        setSessionComplete(true);
      }
    }
    setAiLoading(false);
  };

  const calculateScore = (msgs, fb) => {
    const ratings = fb.map(f => f.rating);
    const excellent = ratings.filter(r => r === "excellent").length;
    const good = ratings.filter(r => r === "good").length;
    const needsWork = ratings.filter(r => r === "needs-work").length;
    const incorrect = ratings.filter(r => r === "incorrect").length;
    const total = ratings.length || 1;
    const pct = Math.round(((excellent * 4 + good * 3 + needsWork * 1) / (total * 4)) * 100);
    setScore({ pct, excellent, good, needsWork, incorrect, total, exchanges: msgs.filter(m => m.role === "sp").length });
  };

  // ═══════════════ SBAR MODE ═══════════════
  const startSBARSession = () => {
    setSessionActive(true);
    setSbarInputs({ S: "", B: "", A: "", R: "" });
    setSbarFeedback(null);
    setSbarConversation([]);
    setSbarPhase("write");
    setAudioBlob(null);
  };

  const submitSBAR = async () => {
    setAiLoading(true);
    try {
      const scenario = selectedSBAR;
      const evalPrompt = `Evaluate this SBAR handoff for a medical education simulation.

SCENARIO: ${scenario.title}
YOUR ROLE: ${scenario.yourRole}
RECEIVER: ${scenario.receiver} (${scenario.receiverName})
PATIENT: ${scenario.patient.name}, ${scenario.patient.age}${scenario.patient.sex}, ${scenario.patient.dx}
CONTEXT: ${scenario.context}
IDEAL SBAR: ${JSON.stringify(scenario.idealSBAR)}
EXPECTED ELEMENTS: ${JSON.stringify(scenario.expectedElements)}

STUDENT WROTE:
S: ${sbarInputs.S}
B: ${sbarInputs.B}
A: ${sbarInputs.A}
R: ${sbarInputs.R}

Evaluate each section. Return ONLY JSON:
{
  "overall": "excellent" | "good" | "needs-work" | "poor",
  "overallScore": 0-100,
  "sections": {
    "S": { "score": 0-25, "missing": ["list of missing elements"], "feedback": "1 sentence" },
    "B": { "score": 0-25, "missing": [], "feedback": "" },
    "A": { "score": 0-25, "missing": [], "feedback": "" },
    "R": { "score": 0-25, "missing": [], "feedback": "" }
  },
  "strengths": ["list"],
  "improvements": ["list"],
  "receiverResponse": "What ${scenario.receiverName} would realistically say after hearing this SBAR (2-3 sentences)"
}`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 800, messages: [{ role: "user", content: evalPrompt }] })
      });
      const data = await response.json();
      const raw = data.content.map(b => b.text || "").join("").replace(/```json|```/g, "").trim();
      const fb = JSON.parse(raw);
      setSbarFeedback(fb);
      setSbarPhase("feedback");
      if (fb.receiverResponse) {
        setSbarConversation([{ role: "receiver", text: fb.receiverResponse, ts: Date.now() }]);
      }
    } catch (e) {
      setSbarFeedback({ overall: "good", overallScore: 75, sections: {}, strengths: ["Attempted all sections"], improvements: ["Could not evaluate — try again"], receiverResponse: "Thanks for the handoff. Can you clarify the assessment?" });
      setSbarPhase("feedback");
    }
    setAiLoading(false);
  };

  const sendSBARConvMessage = async () => {
    if (!sbarConvInput.trim() || sbarConvLoading) return;
    const text = sbarConvInput.trim();
    setSbarConvInput("");
    if (isListening) { recognitionRef.current?.stop(); setIsListening(false); }
    const newConv = [...sbarConversation, { role: "student", text, ts: Date.now() }];
    setSbarConversation(newConv);
    setSbarConvLoading(true);
    try {
      const scenario = selectedSBAR;
      const convPrompt = `You are ${scenario.receiverName}, the ${scenario.receiver}. A ${scenario.yourRole} just gave you an SBAR handoff about ${scenario.patient.name} (${scenario.patient.dx}). You are now in a follow-up conversation.

PATIENT CONTEXT: ${scenario.context}

Previous exchanges:
${newConv.map(m => `${m.role === "student" ? scenario.yourRole : scenario.receiverName}: ${m.text}`).join("\n")}

Respond as ${scenario.receiverName}. Be realistic — ask appropriate follow-up questions, clarify details, and give realistic orders or instructions. Keep responses to 2-3 sentences. Stay in character.`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 300, messages: [{ role: "user", content: convPrompt }] })
      });
      const data = await response.json();
      const rText = data.content.map(b => b.text || "").join("");
      setSbarConversation(prev => [...prev, { role: "receiver", text: rText, ts: Date.now() }]);
    } catch (e) {
      setSbarConversation(prev => [...prev, { role: "receiver", text: "Got it. Anything else I should know?", ts: Date.now() }]);
    }
    setSbarConvLoading(false);
  };

  const ratingColor = (r) => r === "excellent" ? S.success : r === "good" ? S.brand : r === "needs-work" ? S.warning : S.danger;
  const ratingIcon = (r) => r === "excellent" ? "🌟" : r === "good" ? "✅" : r === "needs-work" ? "⚠️" : "❌";
  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const MicButton = ({ target, small }) => micSupported ? (
    <button onClick={() => toggleMic(target)} title={isListening && activeInputRef.current === target ? "Stop listening" : "Start dictation"} style={{ padding: small ? "4px 8px" : "8px 14px", borderRadius: 8, border: "none", background: isListening && activeInputRef.current === target ? "#DC2626" : "#E2E8F0", color: isListening && activeInputRef.current === target ? "white" : S.text, cursor: "pointer", fontSize: small ? 12 : 14, animation: isListening && activeInputRef.current === target ? "pulse 1.5s infinite" : "none" }}>
      🎤{isListening && activeInputRef.current === target ? " Stop" : ""}
    </button>
  ) : null;

  // ═══════════════ RENDER ═══════════════
  return (
    <div style={{ fontFamily: S.font, background: S.bg, minHeight: "100vh", color: S.text }}>
      <style>{`@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }`}</style>

      {/* HEADER */}
      <div style={{ background: `linear-gradient(135deg, ${S.brandDark} 0%, ${S.brand} 100%)`, color: "white", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>{mode === "sbar" ? "📋" : "🎭"}</span>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{mode === "sbar" ? "SBAR Handoff Trainer" : mode === "sp" ? "SP Practice Trainer" : "ReasonDx Training"}</div>
            <div style={{ fontSize: 11, opacity: 0.8 }}>{mode === "sbar" ? "Practice clinical handoffs" : mode === "sp" ? "Standardized Patient Practice" : "Choose a training mode"}</div>
          </div>
        </div>
        {mode && <button onClick={() => { setMode(null); setSelectedCase(null); setSelectedSBAR(null); setSessionActive(false); }} style={{ padding: "6px 14px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "white", cursor: "pointer", fontSize: 12 }}>← Back</button>}
      </div>

      {/* MODE SELECTION */}
      {!mode && (
        <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🏥</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: S.brandDark }}>Clinical Communication Trainer</div>
            <div style={{ fontSize: 14, color: S.textSec, marginTop: 6 }}>Practice SP encounters and SBAR handoffs with AI feedback</div>
          </div>
          {[
            { id: "sp", icon: "🎭", title: "SP Practice Mode", desc: "An AI student interviews you as a standardized patient. Get real-time feedback on your responses — accuracy, delivery, detail level.", tags: ["AI Interviewer", "Instant Feedback", "🎤 Mic Support"] },
            { id: "sbar", icon: "📋", title: "SBAR Handoff Practice", desc: "Practice structured clinical handoffs. Write your SBAR, get scored, then continue the conversation with an AI receiver.", tags: ["ED→Floor", "Nurse→MD", "Shift Handoff", "🎤 Mic + Recording"] }
          ].map(m => (
            <div key={m.id} onClick={() => setMode(m.id)} style={{ background: "white", border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 12, cursor: "pointer", display: "flex", gap: 16, alignItems: "center", transition: "all 0.2s" }}>
              <div style={{ fontSize: 36, width: 56, textAlign: "center" }}>{m.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{m.title}</div>
                <div style={{ fontSize: 13, color: S.textSec, lineHeight: 1.5, marginBottom: 6 }}>{m.desc}</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {m.tags.map(t => <span key={t} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 8, background: S.brandLight, color: S.brandDark, fontWeight: 600 }}>{t}</span>)}
                </div>
              </div>
              <span style={{ fontSize: 20, color: S.brand }}>→</span>
            </div>
          ))}
        </div>
      )}

      {/* SP MODE — CASE SELECTION */}
      {mode === "sp" && !selectedCase && (
        <div style={{ maxWidth: 700, margin: "24px auto", padding: "0 20px" }}>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Select a Case</div>
          {SP_CASES.map(c => (
            <div key={c.id} onClick={() => { setSelectedCase(c); setShowBrief(true); setSessionActive(false); }} style={{ background: "white", border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 10, cursor: "pointer" }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{c.title}</div>
              <div style={{ fontSize: 12, color: S.textSec, marginTop: 2 }}>{c.demographics.name} — {c.demographics.age}{c.demographics.gender[0]} | {c.setting} | {c.difficulty}</div>
            </div>
          ))}
        </div>
      )}

      {/* SP MODE — CASE BRIEF + SESSION */}
      {mode === "sp" && selectedCase && (
        <div style={{ maxWidth: 800, margin: "20px auto", padding: "0 20px" }}>
          {/* Brief / Session / Results toggle */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <button onClick={() => setShowBrief(true)} style={{ padding: "8px 16px", borderRadius: 8, border: showBrief ? `2px solid ${S.brand}` : `1px solid ${S.border}`, background: showBrief ? S.brandLight : "white", cursor: "pointer", fontWeight: showBrief ? 700 : 400, fontSize: 13 }}>📋 Case Brief</button>
            <button onClick={() => { if (sessionActive) { setShowBrief(false); setShowResults(false); } else { startSPSession(); } }} style={{ padding: "8px 16px", borderRadius: 8, border: !showBrief && !showResults ? `2px solid ${S.brand}` : `1px solid ${S.border}`, background: !showBrief && !showResults ? S.brandLight : "white", cursor: "pointer", fontWeight: !showBrief && !showResults ? 700 : 400, fontSize: 13 }}>{sessionActive ? "💬 Session" : "▶️ Start Session"}</button>
            {sessionActive && selectedCase.diagnostics && (
              <button onClick={() => { setShowBrief(false); setShowResults(true); }} style={{ padding: "8px 16px", borderRadius: 8, border: showResults ? `2px solid ${S.brand}` : `1px solid ${S.border}`, background: showResults ? S.brandLight : "white", cursor: "pointer", fontWeight: showResults ? 700 : 400, fontSize: 13 }}>🧪 Results</button>
            )}
          </div>

          {showBrief && (
            <div style={{ background: "white", borderRadius: 12, border: `1px solid ${S.border}`, padding: 20 }}>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{selectedCase.title}</div>
              <div style={{ fontSize: 13, color: S.textSec, marginBottom: 12 }}>{selectedCase.demographics.name} | {selectedCase.demographics.age}{selectedCase.demographics.gender[0]} | {selectedCase.setting}</div>
              <div style={{ padding: 12, background: "#FEF3C7", borderRadius: 8, marginBottom: 16, fontSize: 13 }}>
                <strong>Opening Statement:</strong> "{selectedCase.openingStatement}"
              </div>
              <div style={{ fontSize: 14, marginBottom: 12 }}>{selectedCase.briefing.overview}</div>
              {/* Expandable sections */}
              {Object.entries({
                "HPI Details": selectedCase.briefing.hpiDetails ? Object.entries(selectedCase.briefing.hpiDetails).map(([k, v]) => `${k.charAt(0).toUpperCase() + k.slice(1)}: ${v}`).join("\n\n") : "",
                "Past Medical History": selectedCase.briefing.pmh,
                "Medications": selectedCase.briefing.medications,
                "Allergies": selectedCase.briefing.allergies,
                "Social History": selectedCase.briefing.socialHx,
                "Family History": selectedCase.briefing.familyHx,
                "ROS": selectedCase.briefing.ros ? `ADMIT: ${selectedCase.briefing.ros.admit.join(", ")}\nDENY: ${selectedCase.briefing.ros.deny.join(", ")}` : "",
                "Emotional Cues": selectedCase.briefing.emotionalCues,
                "Physical Behavior": selectedCase.briefing.physicalBehavior
              }).filter(([, v]) => v).map(([key, val]) => (
                <div key={key} style={{ marginBottom: 6 }}>
                  <div onClick={() => toggleSection(key)} style={{ padding: "8px 12px", background: "#F8FAFC", borderRadius: 6, cursor: "pointer", display: "flex", justifyContent: "space-between", fontWeight: 600, fontSize: 13 }}>
                    <span>{key}</span><span>{expandedSections[key] ? "▼" : "▶"}</span>
                  </div>
                  {expandedSections[key] && <div style={{ padding: "8px 12px", fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{val}</div>}
                </div>
              ))}
              {/* Key Performance Points */}
              <div style={{ marginTop: 12, padding: 12, background: S.brandLight, borderRadius: 8 }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, color: S.brandDark }}>Key Performance Points</div>
                {selectedCase.keyPerformancePoints.map((p, i) => <div key={i} style={{ fontSize: 12, marginBottom: 3 }}>✓ {p}</div>)}
              </div>
              {!sessionActive && <button onClick={startSPSession} style={{ marginTop: 16, padding: "12px 24px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 700, fontSize: 14, width: "100%" }}>▶️ Start Practice Session</button>}
            </div>
          )}

          {/* RESULTS PANEL */}
          {showResults && sessionActive && selectedCase.diagnostics && (
            <div style={{ background: "white", borderRadius: 12, border: `1px solid ${S.border}`, padding: 20 }}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: S.brandDark }}>🧪 Diagnostic Results</div>
              
              {/* ECG */}
              {selectedCase.diagnostics.ecg && (
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, color: S.brand }}>📟 ECG / EKG</div>
                  <div style={{ background: "#F8FAFC", borderRadius: 8, padding: 12, borderLeft: `4px solid ${S.brand}` }}>
                    {selectedCase.diagnostics.ecg.findings.map((f, i) => (
                      <div key={i} style={{ fontSize: 12, marginBottom: 3 }}>• {f}</div>
                    ))}
                    <div style={{ fontSize: 12, fontWeight: 600, marginTop: 8, padding: "6px 10px", background: "#FEF2F2", borderRadius: 6, color: "#991B1B" }}>
                      Interpretation: {selectedCase.diagnostics.ecg.interpretation}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Labs */}
              {selectedCase.diagnostics.labs?.length > 0 && (
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, color: S.brand }}>🔬 Laboratory Results</div>
                  <div style={{ borderRadius: 8, border: `1px solid ${S.border}`, overflow: "hidden" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                      <thead>
                        <tr style={{ background: "#F1F5F9" }}>
                          <th style={{ padding: "8px 10px", textAlign: "left", fontWeight: 700 }}>Test</th>
                          <th style={{ padding: "8px 10px", textAlign: "left", fontWeight: 700 }}>Value</th>
                          <th style={{ padding: "8px 10px", textAlign: "left", fontWeight: 700 }}>Reference</th>
                          <th style={{ padding: "8px 10px", textAlign: "left", fontWeight: 700 }}>Note</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedCase.diagnostics.labs.map((lab, i) => (
                          <tr key={i} style={{ borderTop: `1px solid ${S.border}`, background: lab.status === "critical" ? "#FEF2F2" : lab.status === "abnormal" ? "#FFFBEB" : "white" }}>
                            <td style={{ padding: "6px 10px", fontWeight: 600 }}>{lab.test}</td>
                            <td style={{ padding: "6px 10px", fontWeight: 700, color: lab.status === "critical" ? S.danger : lab.status === "abnormal" ? "#B45309" : S.success }}>
                              {lab.value}{lab.unit ? ` ${lab.unit}` : ""}
                              {lab.status === "critical" && " 🔴"}
                              {lab.status === "abnormal" && " ⚠️"}
                            </td>
                            <td style={{ padding: "6px 10px", color: S.textSec }}>{lab.ref}</td>
                            <td style={{ padding: "6px 10px", color: S.textSec, fontStyle: "italic", maxWidth: 200 }}>{lab.note || ""}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {/* Imaging */}
              {selectedCase.diagnostics.imaging?.length > 0 && (
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, color: S.brand }}>🩻 Imaging Studies</div>
                  {selectedCase.diagnostics.imaging.map((img, i) => (
                    <div key={i} style={{ background: "#F8FAFC", borderRadius: 8, padding: 14, marginBottom: 8, borderLeft: `4px solid ${S.brand}` }}>
                      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{img.study}</div>
                      <div style={{ fontSize: 12, marginBottom: 6 }}>
                        <span style={{ fontWeight: 600 }}>Findings: </span>{img.findings}
                      </div>
                      <div style={{ fontSize: 12, padding: "6px 10px", background: "#EBF5FB", borderRadius: 6, fontWeight: 500, color: S.brandDark }}>
                        Interpretation: {img.interpretation}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* No diagnostics available */}
              {!selectedCase.diagnostics.ecg && (!selectedCase.diagnostics.labs || selectedCase.diagnostics.labs.length === 0) && (!selectedCase.diagnostics.imaging || selectedCase.diagnostics.imaging.length === 0) && (
                <div style={{ textAlign: "center", padding: 24, color: S.textSec, fontSize: 13 }}>No diagnostic results available for this case.</div>
              )}
            </div>
          )}

          {!showBrief && !showResults && sessionActive && (
            <div>
              {/* Chat */}
              <div style={{ background: "white", border: `1px solid ${S.border}`, borderRadius: 12, height: 400, overflowY: "auto", padding: 14, marginBottom: 10 }}>
                {messages.map((m, i) => {
                  const fb = feedback.find(f => f.questionIndex === Math.floor(i / 2));
                  return (
                    <div key={i}>
                      <div style={{ display: "flex", justifyContent: m.role === "student" ? "flex-start" : "flex-end", marginBottom: 4 }}>
                        <div style={{ maxWidth: "75%", padding: "8px 12px", borderRadius: 12, background: m.role === "student" ? "#F1F5F9" : S.brand, color: m.role === "student" ? S.text : "white", fontSize: 13, lineHeight: 1.5 }}>
                          <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 2, opacity: 0.7 }}>{m.role === "student" ? "🧑‍⚕️ Student" : "🎭 You (SP)"}</div>
                          {m.text}
                        </div>
                      </div>
                      {m.role === "sp" && fb && (
                        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
                          <div style={{ fontSize: 11, padding: "4px 10px", borderRadius: 8, background: ratingColor(fb.rating) + "15", color: ratingColor(fb.rating), maxWidth: "70%", borderLeft: `3px solid ${ratingColor(fb.rating)}` }}>
                            {ratingIcon(fb.rating)} {fb.feedback}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                {aiLoading && <div style={{ fontSize: 12, color: S.textSec, fontStyle: "italic", padding: 8 }}>Student is thinking...</div>}
                <div ref={chatRef} />
              </div>

              {!sessionComplete ? (
                <div style={{ display: "flex", gap: 8 }}>
                  <input value={spInput} onChange={e => setSpInput(e.target.value)} onKeyDown={e => e.key === "Enter" && submitSPResponse()} placeholder="Respond as the patient..." style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: `1px solid ${S.border}`, fontSize: 13, outline: "none" }} />
                  <MicButton target="sp" />
                  <button onClick={submitSPResponse} disabled={aiLoading || !spInput.trim()} style={{ padding: "10px 20px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>Send</button>
                </div>
              ) : (
                <div style={{ background: "white", border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Session Complete</div>
                  {score && (
                    <div>
                      <div style={{ fontSize: 48, fontWeight: 800, color: score.pct >= 80 ? S.success : score.pct >= 60 ? S.warning : S.danger, textAlign: "center" }}>{score.pct}%</div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginTop: 12 }}>
                        {[["🌟", "Excellent", score.excellent], ["✅", "Good", score.good], ["⚠️", "Needs Work", score.needsWork], ["❌", "Incorrect", score.incorrect]].map(([icon, label, val]) => (
                          <div key={label} style={{ textAlign: "center", padding: 8, background: "#F8FAFC", borderRadius: 8 }}>
                            <div style={{ fontSize: 20 }}>{icon}</div>
                            <div style={{ fontSize: 18, fontWeight: 700 }}>{val}</div>
                            <div style={{ fontSize: 10, color: S.textSec }}>{label}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: 12, fontSize: 13, color: S.textSec }}>Exchanges: {score.exchanges} | Total evaluated: {score.total}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* SBAR MODE — SCENARIO SELECTION */}
      {mode === "sbar" && !selectedSBAR && (
        <div style={{ maxWidth: 700, margin: "24px auto", padding: "0 20px" }}>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Select a Handoff Scenario</div>
          {SBAR_SCENARIOS.map(s => (
            <div key={s.id} onClick={() => { setSelectedSBAR(s); startSBARSession(); }} style={{ background: "white", border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 10, cursor: "pointer" }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{s.title}</div>
              <div style={{ fontSize: 12, color: S.textSec, marginTop: 2 }}>You: {s.yourRole} → {s.receiver} ({s.receiverName})</div>
              <div style={{ fontSize: 12, color: S.textSec, marginTop: 2 }}>{s.patient.name}, {s.patient.age}{s.patient.sex} — {s.patient.dx}</div>
            </div>
          ))}
        </div>
      )}

      {/* SBAR MODE — ACTIVE SESSION */}
      {mode === "sbar" && selectedSBAR && sessionActive && (
        <div style={{ maxWidth: 800, margin: "20px auto", padding: "0 20px" }}>
          {/* Patient context banner */}
          <div style={{ background: S.brandLight, padding: "8px 14px", borderRadius: 8, marginBottom: 12, fontSize: 12, display: "flex", justifyContent: "space-between" }}>
            <span><strong>{selectedSBAR.patient.name}</strong> | {selectedSBAR.patient.age}{selectedSBAR.patient.sex} | {selectedSBAR.patient.room} | {selectedSBAR.patient.dx}</span>
            <span>You: <strong>{selectedSBAR.yourRole}</strong> → {selectedSBAR.receiverName} ({selectedSBAR.receiver})</span>
          </div>

          {/* Phase tabs */}
          <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
            {[["write", "✍️ Write SBAR"], ["feedback", "📊 Feedback"], ["verbal", "🎤 Verbal"], ["conversation", "💬 Conversation"]].map(([id, label]) => (
              <button key={id} onClick={() => sbarPhase === "write" && id !== "write" ? null : setSbarPhase(id)} style={{ padding: "6px 14px", borderRadius: 8, border: sbarPhase === id ? `2px solid ${S.brand}` : `1px solid ${S.border}`, background: sbarPhase === id ? S.brandLight : "white", cursor: (sbarPhase === "write" && id !== "write" && !sbarFeedback) ? "not-allowed" : "pointer", fontWeight: sbarPhase === id ? 700 : 400, fontSize: 12, opacity: (sbarPhase === "write" && id !== "write" && !sbarFeedback) ? 0.4 : 1 }}>{label}</button>
            ))}
          </div>

          {/* WRITE PHASE */}
          {sbarPhase === "write" && (
            <div style={{ background: "white", borderRadius: 12, border: `1px solid ${S.border}`, padding: 20 }}>
              <div style={{ padding: 10, background: "#F0F4F8", borderRadius: 8, marginBottom: 16, fontSize: 12, lineHeight: 1.6 }}>
                <strong>Scenario:</strong> {selectedSBAR.description}<br />
                <strong>Context:</strong> {selectedSBAR.context}
              </div>
              {[
                { key: "S", label: "Situation", color: "#DC2626", hint: "Who you are, who the patient is, what's happening now" },
                { key: "B", label: "Background", color: "#2563EB", hint: "Relevant history, what led to this, baseline status" },
                { key: "A", label: "Assessment", color: "#059669", hint: "YOUR clinical assessment — what do YOU think is going on?" },
                { key: "R", label: "Recommendation", color: "#9333EA", hint: "What you need — specific ask, orders, evaluation" }
              ].map(s => (
                <div key={s.key} style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <label style={{ fontWeight: 700, fontSize: 13, color: s.color }}>{s.key} — {s.label}</label>
                    <MicButton target={`sbar-${s.key}`} small />
                  </div>
                  <div style={{ fontSize: 11, color: S.textSec, marginBottom: 4 }}>{s.hint}</div>
                  <textarea value={sbarInputs[s.key]} onChange={e => setSbarInputs(prev => ({ ...prev, [s.key]: e.target.value }))} rows={3} style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: `1px solid ${S.border}`, borderLeft: `4px solid ${s.color}`, fontSize: 13, outline: "none", resize: "vertical", fontFamily: S.font }} />
                </div>
              ))}
              <button onClick={submitSBAR} disabled={aiLoading || Object.values(sbarInputs).every(v => !v.trim())} style={{ padding: "12px 24px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 700, fontSize: 14, width: "100%" }}>
                {aiLoading ? "Evaluating..." : "Submit SBAR for Feedback"}
              </button>
            </div>
          )}

          {/* FEEDBACK PHASE */}
          {sbarPhase === "feedback" && sbarFeedback && (
            <div style={{ background: "white", borderRadius: 12, border: `1px solid ${S.border}`, padding: 20 }}>
              <div style={{ textAlign: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: sbarFeedback.overallScore >= 80 ? S.success : sbarFeedback.overallScore >= 60 ? S.warning : S.danger }}>{sbarFeedback.overallScore}/100</div>
                <div style={{ fontSize: 14, fontWeight: 600, textTransform: "uppercase" }}>{sbarFeedback.overall}</div>
              </div>
              {sbarFeedback.sections && Object.entries(sbarFeedback.sections).map(([key, sec]) => (
                <div key={key} style={{ marginBottom: 8, padding: "8px 12px", borderRadius: 8, background: "#F8FAFC", borderLeft: `4px solid ${key === "S" ? "#DC2626" : key === "B" ? "#2563EB" : key === "A" ? "#059669" : "#9333EA"}` }}>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{key}: {sec.score}/25</div>
                  {sec.feedback && <div style={{ fontSize: 12, marginTop: 2 }}>{sec.feedback}</div>}
                  {sec.missing?.length > 0 && <div style={{ fontSize: 11, color: S.danger, marginTop: 2 }}>Missing: {sec.missing.join(", ")}</div>}
                </div>
              ))}
              {sbarFeedback.strengths?.length > 0 && (
                <div style={{ marginTop: 8, padding: 10, background: "#F0FDF4", borderRadius: 8 }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: S.success, marginBottom: 4 }}>Strengths</div>
                  {sbarFeedback.strengths.map((s, i) => <div key={i} style={{ fontSize: 12 }}>✅ {s}</div>)}
                </div>
              )}
              {sbarFeedback.improvements?.length > 0 && (
                <div style={{ marginTop: 8, padding: 10, background: "#FEF2F2", borderRadius: 8 }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: S.danger, marginBottom: 4 }}>Areas to Improve</div>
                  {sbarFeedback.improvements.map((s, i) => <div key={i} style={{ fontSize: 12 }}>→ {s}</div>)}
                </div>
              )}
              <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                <button onClick={() => setSbarPhase("verbal")} style={{ flex: 1, padding: "10px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>🎤 Practice Verbal Delivery</button>
                <button onClick={() => setSbarPhase("conversation")} style={{ flex: 1, padding: "10px", borderRadius: 8, border: `1px solid ${S.brand}`, background: "white", color: S.brand, cursor: "pointer", fontWeight: 600, fontSize: 13 }}>💬 Continue Conversation</button>
              </div>
            </div>
          )}

          {/* VERBAL PHASE */}
          {sbarPhase === "verbal" && (
            <div style={{ background: "white", borderRadius: 12, border: `1px solid ${S.border}`, padding: 20, textAlign: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>🎤 Verbal Delivery Practice</div>
              <div style={{ fontSize: 13, color: S.textSec, marginBottom: 16 }}>Record yourself delivering the SBAR verbally. Target: 60-90 seconds.</div>
              {!audioBlob ? (
                <div>
                  <button onClick={isRecording ? stopRecording : startRecording} style={{ width: 80, height: 80, borderRadius: "50%", border: "none", background: isRecording ? S.danger : S.brand, color: "white", cursor: "pointer", fontSize: 28 }}>
                    {isRecording ? "⏹️" : "🎤"}
                  </button>
                  {isRecording && <div style={{ fontSize: 24, fontWeight: 700, marginTop: 12 }}>{formatTime(recordingTime)}</div>}
                  <div style={{ fontSize: 12, color: S.textSec, marginTop: 8 }}>{isRecording ? "Recording... Click to stop" : "Click to start recording"}</div>
                </div>
              ) : (
                <div>
                  <audio controls src={URL.createObjectURL(audioBlob)} style={{ marginBottom: 12 }} />
                  <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 8, fontSize: 18 }}>
                    <div style={{ padding: "12px 20px", background: "#F0FDF4", borderRadius: 12 }}><div style={{ fontWeight: 700, color: S.success }}>{formatTime(recordingTime)}</div><div style={{ fontSize: 11 }}>Duration</div></div>
                    <div style={{ padding: "12px 20px", background: "#F0F4F8", borderRadius: 12 }}><div style={{ fontWeight: 700, color: S.brand }}>60-90s</div><div style={{ fontSize: 11 }}>Target</div></div>
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 16, justifyContent: "center" }}>
                    <button onClick={() => { setAudioBlob(null); setRecordingTime(0); }} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${S.border}`, background: "white", cursor: "pointer", fontSize: 12 }}>🔄 Re-record</button>
                    <button onClick={() => setSbarPhase("conversation")} style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 600, fontSize: 12 }}>💬 Continue to Conversation</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CONVERSATION PHASE */}
          {sbarPhase === "conversation" && (
            <div>
              <div style={{ background: "white", border: `1px solid ${S.border}`, borderRadius: 12, height: 380, overflowY: "auto", padding: 14, marginBottom: 10 }}>
                {sbarConversation.map((m, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: m.role === "student" ? "flex-end" : "flex-start", marginBottom: 8 }}>
                    <div style={{ maxWidth: "75%", padding: "8px 12px", borderRadius: 12, background: m.role === "student" ? S.brand : "#F1F5F9", color: m.role === "student" ? "white" : S.text, fontSize: 13, lineHeight: 1.5 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 2, opacity: 0.7 }}>{m.role === "student" ? `You (${selectedSBAR.yourRole})` : `${selectedSBAR.receiverName}`}</div>
                      {m.text}
                    </div>
                  </div>
                ))}
                {sbarConvLoading && <div style={{ fontSize: 12, color: S.textSec, fontStyle: "italic" }}>{selectedSBAR.receiverName} is responding...</div>}
                <div ref={chatRef} />
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input value={sbarConvInput} onChange={e => setSbarConvInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendSBARConvMessage()} placeholder={`Respond to ${selectedSBAR.receiverName}...`} style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: `1px solid ${S.border}`, fontSize: 13, outline: "none" }} />
                <MicButton target="sbar-conv" />
                <button onClick={sendSBARConvMessage} disabled={sbarConvLoading} style={{ padding: "10px 20px", borderRadius: 8, border: "none", background: S.brand, color: "white", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>Send</button>
              </div>
            </div>
          )}

          {/* View ideal SBAR (after feedback) */}
          {sbarFeedback && sbarPhase !== "write" && (
            <details style={{ marginTop: 12 }}>
              <summary style={{ cursor: "pointer", fontSize: 13, fontWeight: 600, color: S.brand }}>📖 View Example SBAR</summary>
              <div style={{ background: "white", border: `1px solid ${S.border}`, borderRadius: 8, padding: 14, marginTop: 8 }}>
                {Object.entries(selectedSBAR.idealSBAR).map(([key, val]) => (
                  <div key={key} style={{ marginBottom: 8, borderLeft: `4px solid ${key === "S" ? "#DC2626" : key === "B" ? "#2563EB" : key === "A" ? "#059669" : "#9333EA"}`, paddingLeft: 12 }}>
                    <div style={{ fontWeight: 700, fontSize: 12, textTransform: "uppercase" }}>{key}</div>
                    <div style={{ fontSize: 12, lineHeight: 1.5 }}>{val}</div>
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      )}
    </div>
  );
}
