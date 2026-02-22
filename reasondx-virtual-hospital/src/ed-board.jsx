import { useState, useEffect, useCallback, useRef } from "react";

// ═══════════════════════════════════════════════════════════════
// CASE DATA - Chest Pain (STEMI + Pericarditis variants)
// Sources: StatPearls (NCBI), 2021 AHA/ACC Chest Pain Guideline
// ═══════════════════════════════════════════════════════════════
const CASE_TEMPLATES = [
  {
    id: "chest-pain",
    presentation: "Chest Pain",
    category: "cardiovascular",
    difficulty: 3,
    rotations: ["em", "medicine"],
    demographics: {
      ageRange: [45, 75],
      genderDistribution: { male: 0.6, female: 0.4 },
      nameOptions: {
        male: ["John Smith", "Robert Johnson", "Michael Williams", "David Brown", "James Garcia"],
        female: ["Maria Santos", "Linda Chen", "Patricia Williams", "Susan Miller", "Jennifer Davis"]
      }
    },
    variants: [
      {
        id: "stemi-v1",
        diagnosis: "ST-Elevation Myocardial Infarction (STEMI)",
        acuity: 2,
        patient: {
          personalityTraits: ["anxious", "cooperative", "family-oriented"],
          communicationStyle: "Cooperative but frightened. Wants reassurance.",
          emotionalState: "Anxious, scared, sense of impending doom",
          medicalLiteracy: "moderate"
        },
        responses: {
          opening: "I've got this terrible pressure in my chest, right in the center. It feels like an elephant is sitting on me. It started about 2 or 3 hours ago while I was just sitting watching TV, and it hasn't let up since. I've been sweating like crazy too.",
          severity: "I'd say it's about an 8 out of 10. This is the worst my chest has ever felt. I've never had anything like this before.",
          location: "Right here, in the center of my chest. It also goes up into my left shoulder and down my left arm. And my jaw aches too.",
          onset: "It started about 2 or 3 hours ago. I was just sitting on the couch watching TV and it came on gradually over maybe 20 or 30 minutes. It's been constant ever since.",
          character: "It's like a pressure, or a tightness. Heavy. Like someone is squeezing my chest. Like an elephant sitting on me.",
          worse: "I can't really say anything specific makes it worse. It's just constant. It's not worse when I breathe or move around.",
          better: "Nothing helps. I tried an antacid thinking it was heartburn but that didn't do anything. Nothing makes it better.",
          radiation: "Yes, it goes up into my left shoulder and down my left arm. My jaw aches too, kind of on the left side.",
          timing: "It started while I was just sitting watching TV. Wasn't doing anything strenuous. It came on gradually and hasn't let up.",
        },
        clinicalFacts: {
          chiefComplaint: {
            patientPhrasing: ["tight", "pressure", "heavy", "squeezing", "elephant on my chest"],
            avoidPhrasing: ["sharp", "stabbing", "knife-like", "tearing"],
            location: "center of my chest",
            radiation: ["left shoulder", "left arm", "jaw"],
            onset: "about 2-3 hours ago, came on gradually over 20-30 minutes",
            duration: "constant since it started, hasn't let up",
            severity: "8 out of 10, worst chest discomfort I've ever had",
            timing: "started while I was just sitting watching TV",
            aggravating: ["nothing specific makes it worse", "it's not worse with breathing or moving"],
            relieving: ["nothing helps", "I tried an antacid but it didn't do anything"]
          },
          associatedSymptoms: {
            present: [
              { name: "diaphoresis", patientSays: "Yes, I've been sweating like crazy. Cold sweats." },
              { name: "nausea", patientSays: "Yeah, I feel like I might throw up but I haven't yet." },
              { name: "shortness of breath", patientSays: "A little bit, yeah. It's harder to take a deep breath." },
              { name: "anxiety", patientSays: "I feel like something really bad is happening. I can't explain it." },
              { name: "lightheadedness", patientSays: "A little dizzy, yeah. Especially when I stood up." }
            ],
            absent: [
              { name: "cough", patientSays: "No, no cough." },
              { name: "fever", patientSays: "No, I don't think I have a fever." },
              { name: "pleuritic pain", patientSays: "No, breathing doesn't really change it." },
              { name: "positional component", patientSays: "No, it doesn't matter if I sit up or lie down." },
              { name: "leg swelling", patientSays: "No, my legs are fine." },
              { name: "recent travel", patientSays: "No, I haven't traveled anywhere recently." },
              { name: "syncope", patientSays: "No, I haven't passed out." },
              { name: "palpitations", patientSays: "No, my heart doesn't feel like it's racing or skipping." }
            ]
          },
          pmh: ["Type 2 diabetes for about 10 years", "High blood pressure for 8 years", "High cholesterol for 5 years"],
          medications: [
            { name: "Metformin", dose: "500mg twice a day", patientSays: "I take a sugar pill, metformin, twice a day. Sometimes I forget the evening one." },
            { name: "Lisinopril", dose: "10mg daily", patientSays: "A blood pressure pill, lisinopril, every morning." },
            { name: "Atorvastatin", dose: "40mg at night", patientSays: "A cholesterol pill at bedtime." },
            { name: "Aspirin", dose: "81mg daily", patientSays: "A baby aspirin every day." }
          ],
          allergies: [{ allergen: "Penicillin", reaction: "rash", patientSays: "Penicillin — I got a rash from it when I was a kid." }],
          socialHistory: {
            smoking: "Never smoked",
            alcohol: "A glass of wine with dinner once or twice a week",
            drugs: "No, never",
            occupation: "I'm a teacher",
            livingSituation: "I live with my spouse"
          },
          familyHistory: [
            "My mother had a heart attack at 58 — she passed away from it",
            "My father has diabetes, he's 78",
            "My sister has high blood pressure, she's 55"
          ],
          riskFactors: {
            present: ["diabetes", "hypertension", "hyperlipidemia", "family history of premature CAD", "age > 45"],
            absent: ["smoking", "cocaine use", "recent surgery", "known CAD", "prior MI"]
          }
        },
        physicalExam: {
          vitalSigns: { BP: "168/102", HR: "108", RR: "22", Temp: "98.6°F", SpO2: "94%" },
          general: "Alert, anxious-appearing, diaphoretic, in moderate distress, clutching chest",
          heent: "Pupils equal and reactive. Mucous membranes moist.",
          neck: "Supple, no JVD, no carotid bruits",
          cardiovascular: "Tachycardic, regular rhythm, no murmurs/rubs/gallops. PMI non-displaced.",
          pulmonary: "Clear to auscultation bilaterally, no wheezes/rales/rhonchi",
          abdominal: "Soft, non-tender, non-distended, normoactive bowel sounds",
          extremities: "No edema, 2+ pulses bilaterally, warm and well-perfused",
          neurologic: "Alert and oriented ×4, no focal deficits",
          skin: "Diaphoretic, no rashes or lesions"
        },
        diagnostics: {
          ecg: {
            findings: ["Sinus tachycardia at 108 bpm", "ST elevations in V2-V5 (2-3mm)", "Reciprocal ST depressions in III, aVF", "No pathologic Q waves"],
            interpretation: "Anterior STEMI — likely LAD occlusion"
          },
          labs: [
            { test: "Troponin I (initial)", value: "0.04", unit: "ng/mL", ref: "<0.04", status: "abnormal", note: "Borderline elevated, early in course" },
            { test: "Troponin I (1 hour)", value: "0.58", unit: "ng/mL", ref: "<0.04", status: "critical", note: "Rising troponin confirms myocardial injury" },
            { test: "BNP", value: "180", unit: "pg/mL", ref: "<100", status: "abnormal", note: "Mildly elevated, cardiac stress" },
            { test: "Glucose", value: "186", unit: "mg/dL", ref: "70-100", status: "abnormal", note: "Elevated, known diabetic" },
            { test: "Creatinine", value: "1.1", unit: "mg/dL", ref: "0.7-1.3", status: "normal", note: "" },
            { test: "Potassium", value: "4.2", unit: "mEq/L", ref: "3.5-5.0", status: "normal", note: "" },
            { test: "CBC - WBC", value: "11.2", unit: "K/uL", ref: "4.5-11.0", status: "abnormal", note: "Mild leukocytosis, stress response" }
          ],
          imaging: [
            { study: "Chest X-ray (PA/Lat)", findings: "Cardiac silhouette upper limits of normal. Mild pulmonary vascular congestion. No focal consolidation or pneumothorax.", impression: "Mild cardiomegaly with early pulmonary congestion" }
          ]
        },
        teaching: {
          keyLearningPoints: [
            "Classic STEMI: substernal pressure + radiation + diaphoresis + nausea",
            "Time is muscle — door-to-balloon goal <90 minutes",
            "Rising troponin with ischemic symptoms = ACS",
            "Reciprocal ECG changes increase STEMI specificity"
          ],
          mustNotMiss: ["Aortic dissection", "Pulmonary embolism", "Tension pneumothorax"],
          expertDifferential: [
            { dx: "STEMI", pct: 75, why: "Classic presentation with risk factors" },
            { dx: "NSTEMI/UA", pct: 15, why: "Similar presentation, ECG differentiates" },
            { dx: "Aortic Dissection", pct: 5, why: "Severe, but no tearing/back pain" },
            { dx: "PE", pct: 3, why: "Less likely without pleuritic component" },
            { dx: "Pericarditis", pct: 2, why: "Would expect positional component" }
          ]
        }
      },
      {
        id: "pericarditis-v1",
        diagnosis: "Acute Pericarditis",
        acuity: 3,
        patient: {
          personalityTraits: ["young", "healthy", "anxious"],
          communicationStyle: "Generally healthy person surprised to be in the ED.",
          emotionalState: "Anxious but not in extremis",
          medicalLiteracy: "moderate"
        },
        responses: {
          opening: "I've got this sharp pain in my chest, on the left side. It started yesterday and it's been getting worse. It catches when I take a deep breath. I had a cold about a week ago and I thought I was over it, but then this started.",
          severity: "At its worst it's about a 7 out of 10. But if I sit still and lean forward, it drops to maybe a 3. Lying down makes it much worse.",
          location: "It's on the left side of my chest, kind of toward the front. It also goes into my left shoulder a bit.",
          onset: "It started yesterday. At first it was just a twinge, but it's been getting steadily worse. This morning was the worst so far.",
          character: "It's sharp, almost like a stabbing feeling. It catches when I breathe in deep. Totally different from a muscle ache.",
          worse: "Lying flat makes it way worse. And taking a deep breath, or coughing. I also notice it's worse in the morning.",
          better: "Sitting up and leaning forward helps. That's actually how I've been sitting since I got here — it's the most comfortable position.",
          radiation: "A little bit into my left shoulder. And sometimes I feel it between my shoulder blades in the back.",
          timing: "It comes and goes a bit, but it's been pretty constant today. Worse in the morning, and definitely worse when I lie down.",
        },
        clinicalFacts: {
            avoidPhrasing: ["pressure", "squeezing", "elephant"],
            location: "left side of my chest, kind of toward the front",
            radiation: ["left shoulder", "upper back between my shoulder blades"],
            onset: "started yesterday, been getting worse",
            duration: "comes and goes, worse with movement and breathing",
            severity: "7 out of 10 at worst, maybe 3 out of 10 when I sit still and lean forward",
            timing: "worse in the morning, and definitely worse when I lie down",
            aggravating: ["lying flat", "taking a deep breath", "coughing"],
            relieving: ["sitting up", "leaning forward"]
          },
          associatedSymptoms: {
            present: [
              { name: "recent viral illness", patientSays: "Yeah, I had a cold about a week ago. Sore throat, runny nose, felt kind of feverish." },
              { name: "low-grade fever", patientSays: "I think I have a slight fever. I felt warm this morning." },
              { name: "mild dyspnea", patientSays: "It hurts to take a deep breath, so I've been breathing shallowly." }
            ],
            absent: [
              { name: "diaphoresis", patientSays: "No, I'm not sweating unusually." },
              { name: "nausea", patientSays: "No nausea." },
              { name: "arm radiation", patientSays: "No, it doesn't go down my arm." },
              { name: "jaw pain", patientSays: "No jaw pain." },
              { name: "leg swelling", patientSays: "No, my legs are fine." },
              { name: "syncope", patientSays: "No, I haven't fainted." }
            ]
          },
          pmh: ["None, I've been pretty healthy"],
          medications: [{ name: "None", dose: "", patientSays: "I don't take any medications." }],
          allergies: [],
          socialHistory: {
            smoking: "Never",
            alcohol: "Socially, maybe 2-3 drinks a week",
            drugs: "No",
            occupation: "Graduate student",
            livingSituation: "Live with a roommate"
          },
          familyHistory: ["No heart disease in the family", "No sudden deaths"],
          riskFactors: {
            present: ["recent viral illness"],
            absent: ["cardiac risk factors", "autoimmune disease", "malignancy"]
          }
        },
        physicalExam: {
          vitalSigns: { BP: "122/78", HR: "88", RR: "18", Temp: "100.4°F", SpO2: "99%" },
          general: "Young adult, mildly uncomfortable, sitting forward in bed",
          heent: "Normal",
          neck: "Supple, no JVD",
          cardiovascular: "Regular rhythm, THREE-COMPONENT FRICTION RUB at left sternal border (scratchy sound best heard with patient leaning forward), no murmurs",
          pulmonary: "Clear to auscultation bilaterally",
          abdominal: "Soft, non-tender, non-distended",
          extremities: "No edema, pulses intact",
          neurologic: "Alert and oriented, no focal deficits",
          skin: "Warm, no rashes"
        },
        diagnostics: {
          ecg: {
            findings: ["Normal sinus rhythm at 88 bpm", "Diffuse ST elevations (concave up) in multiple leads", "PR depression in multiple leads", "No reciprocal changes"],
            interpretation: "Classic pericarditis pattern — diffuse concave-up ST elevation with PR depression"
          },
          labs: [
            { test: "Troponin I", value: "0.08", unit: "ng/mL", ref: "<0.04", status: "abnormal", note: "Mildly elevated — myopericarditis component" },
            { test: "CRP", value: "8.5", unit: "mg/dL", ref: "<0.5", status: "abnormal", note: "Elevated inflammatory marker" },
            { test: "ESR", value: "45", unit: "mm/hr", ref: "<20", status: "abnormal", note: "Elevated" },
            { test: "CBC - WBC", value: "10.8", unit: "K/uL", ref: "4.5-11.0", status: "normal", note: "" },
            { test: "BMP", value: "Normal", unit: "", ref: "", status: "normal", note: "All values within normal limits" }
          ],
          imaging: [
            { study: "Chest X-ray (PA/Lat)", findings: "Normal cardiac silhouette. Clear lungs. No effusion.", impression: "Normal" }
          ]
        },
        teaching: {
          keyLearningPoints: [
            "Pericarditis triad: sharp/pleuritic pain, friction rub, ECG changes",
            "ECG: diffuse concave-up ST elevation + PR depression (no reciprocal changes)",
            "Recent viral illness is the most common precipitant",
            "Friction rub is pathognomonic but may come and go",
            "Most cases are idiopathic/viral and self-limited"
          ],
          mustNotMiss: ["STEMI", "Aortic dissection", "Cardiac tamponade"],
          expertDifferential: [
            { dx: "Pericarditis", pct: 70, why: "Sharp/positional pain, viral prodrome, young age" },
            { dx: "Myocarditis", pct: 15, why: "Viral prodrome + troponin elevation" },
            { dx: "STEMI", pct: 5, why: "Must rule out despite low probability" },
            { dx: "PE", pct: 5, why: "Pleuritic component warrants consideration" },
            { dx: "Musculoskeletal", pct: 5, why: "Young patient, reproducible with movement" }
          ]
        }
      }
    ]
  },
  {
    id: "abdominal-pain",
    presentation: "Abdominal Pain",
    category: "gastrointestinal",
    difficulty: 3,
    rotations: ["em", "medicine", "surgery"],
    demographics: {
      ageRange: [25, 65],
      genderDistribution: { male: 0.5, female: 0.5 },
      nameOptions: {
        male: ["Carlos Rivera", "William Thompson", "Ahmad Hassan", "Thomas Lee", "Marcus Wright"],
        female: ["Angela Martinez", "Priya Patel", "Sarah O'Brien", "Diana Nguyen", "Rachel Kim"]
      }
    },
    variants: [
      {
        id: "appendicitis-v1",
        diagnosis: "Acute Appendicitis",
        acuity: 3,
        patient: {
          personalityTraits: ["stoic", "young adult", "slightly frustrated"],
          communicationStyle: "Tries to downplay pain initially. Becomes more forthcoming as interview progresses.",
          emotionalState: "Uncomfortable, slightly irritable from pain",
          medicalLiteracy: "low"
        },
        responses: {
          opening: "My stomach's been killing me. It started last night as kind of a dull ache around my belly button, but now it's moved down to my right side and it's gotten a lot worse. I almost didn't come in, but it just kept getting worse.",
          severity: "I'd say about a 6 out of 10 if I stay still. Maybe a 7 when I have to move. It's definitely getting worse, not better.",
          location: "It started up here around my belly button, but now it's moved down to the lower right side. That's where it really hurts now.",
          onset: "It started last night, maybe about 12 hours ago. At first it was just a dull ache and I thought it would pass, but it kept getting worse and moved to my right side.",
          character: "It started as kind of a dull, crampy ache. Now it's sharper and more constant, especially on my right side.",
          worse: "Walking makes it worse. Coughing too — I coughed earlier and it was awful. Even going over bumps in the car on the way here was terrible.",
          better: "Lying really still helps a little, but honestly nothing really makes it go away.",
          radiation: "No, it doesn't really go anywhere else. It's just in my lower right side now.",
          timing: "It started as a dull ache that came and went, but now it's pretty constant and sharper. Definitely getting worse over time.",
        },
        clinicalFacts: {
            avoidPhrasing: ["burning", "heartburn"],
            location: "started around my belly button, now it's moved down to my right side",
            radiation: ["no radiation"],
            onset: "started last night, maybe 12 hours ago",
            duration: "constant now, getting worse",
            severity: "6 out of 10, maybe 7 when I move",
            timing: "started as a dull ache, now it's sharper and more constant",
            aggravating: ["walking", "coughing", "going over bumps in the car"],
            relieving: ["lying still", "nothing really helps"]
          },
          associatedSymptoms: {
            present: [
              { name: "nausea", patientSays: "Yeah, I've felt queasy since this morning. Almost threw up once." },
              { name: "anorexia", patientSays: "I haven't wanted to eat anything all day. The thought of food makes me feel worse." },
              { name: "low-grade fever", patientSays: "I felt a little warm. My roommate said I felt hot." },
              { name: "pain migration", patientSays: "Yeah, it started more in the middle and moved to my right side." }
            ],
            absent: [
              { name: "diarrhea", patientSays: "No diarrhea." },
              { name: "constipation", patientSays: "I went to the bathroom normally yesterday." },
              { name: "vomiting", patientSays: "I've felt like I might, but I haven't actually thrown up." },
              { name: "urinary symptoms", patientSays: "No, peeing is fine." },
              { name: "blood in stool", patientSays: "No blood." },
              { name: "chest pain", patientSays: "No chest pain." }
            ]
          },
          pmh: ["None, I'm usually healthy"],
          medications: [{ name: "Ibuprofen", dose: "took 400mg this morning", patientSays: "I took some Advil this morning, didn't help much." }],
          allergies: [],
          socialHistory: {
            smoking: "No",
            alcohol: "Weekends, a few beers",
            drugs: "Marijuana occasionally",
            occupation: "Construction worker",
            livingSituation: "Live with roommates"
          },
          familyHistory: ["Nothing significant"],
          riskFactors: {
            present: ["age 20-30 peak incidence"],
            absent: ["prior abdominal surgery", "immunosuppression"]
          }
        },
        physicalExam: {
          vitalSigns: { BP: "128/78", HR: "96", RR: "18", Temp: "100.8°F", SpO2: "99%" },
          general: "Young adult lying still on gurney, appears uncomfortable, avoids movement",
          heent: "Dry mucous membranes",
          neck: "Supple",
          cardiovascular: "Tachycardic, regular, no murmurs",
          pulmonary: "Clear bilaterally",
          abdominal: "RLQ tenderness with voluntary guarding. Positive McBurney's point tenderness. Positive Rovsing's sign (pain in RLQ with palpation of LLQ). Positive psoas sign. No rebound tenderness yet. Hypoactive bowel sounds.",
          extremities: "Normal",
          neurologic: "Alert and oriented",
          skin: "Warm, slightly flushed"
        },
        diagnostics: {
          labs: [
            { test: "CBC - WBC", value: "14.2", unit: "K/uL", ref: "4.5-11.0", status: "abnormal", note: "Leukocytosis with left shift" },
            { test: "Neutrophils", value: "82%", unit: "", ref: "40-70%", status: "abnormal", note: "Left shift" },
            { test: "CRP", value: "4.8", unit: "mg/dL", ref: "<0.5", status: "abnormal", note: "Elevated" },
            { test: "Lipase", value: "32", unit: "U/L", ref: "10-140", status: "normal", note: "" },
            { test: "Urinalysis", value: "Normal", unit: "", ref: "", status: "normal", note: "No WBC, no bacteria, no blood" },
            { test: "BMP", value: "Normal", unit: "", ref: "", status: "normal", note: "" }
          ],
          imaging: [
            { study: "CT Abdomen/Pelvis with IV contrast", findings: "Dilated, fluid-filled appendix measuring 11mm with periappendiceal fat stranding. No appendicolith. No free fluid or abscess.", impression: "Acute uncomplicated appendicitis" }
          ]
        },
        teaching: {
          keyLearningPoints: [
            "Classic migration: periumbilical → RLQ (visceral → somatic pain)",
            "Anorexia is nearly universal in appendicitis",
            "Alvarado Score helps risk-stratify (migration, anorexia, nausea, RLQ tenderness, rebound, elevated temp, leukocytosis, left shift)",
            "CT is gold standard (sensitivity >95%) — but consider US first in young women and children"
          ],
          mustNotMiss: ["Ectopic pregnancy (reproductive-age women)", "Mesenteric ischemia", "Ovarian torsion"],
          expertDifferential: [
            { dx: "Acute Appendicitis", pct: 80, why: "Classic migration pattern, anorexia, low-grade fever, RLQ signs" },
            { dx: "Mesenteric lymphadenitis", pct: 8, why: "Similar age group, viral-like picture" },
            { dx: "Crohn's disease", pct: 5, why: "RLQ pain in young adult, but no chronic symptoms" },
            { dx: "Kidney stone", pct: 4, why: "Flank component possible, but UA normal" },
            { dx: "Gastroenteritis", pct: 3, why: "Nausea/anorexia, but focal RLQ tenderness atypical" }
          ]
        }
      }
    ]
  },
  {
    id: "shortness-of-breath",
    presentation: "Shortness of Breath",
    category: "pulmonary",
    difficulty: 3,
    rotations: ["em", "medicine"],
    demographics: {
      ageRange: [55, 80],
      genderDistribution: { male: 0.5, female: 0.5 },
      nameOptions: {
        male: ["George Patterson", "Walter Barnes", "Harold Mitchell", "Eugene Foster", "Raymond Clark"],
        female: ["Dorothy Hayes", "Margaret Turner", "Betty Campbell", "Ruth Edwards", "Helen Morris"]
      }
    },
    variants: [
      {
        id: "chf-exacerbation-v1",
        diagnosis: "Acute Decompensated Heart Failure (CHF Exacerbation)",
        acuity: 2,
        patient: {
          personalityTraits: ["elderly", "chronic illness experience", "cooperative", "worried"],
          communicationStyle: "Has been through this before. Can compare to previous episodes.",
          emotionalState: "Anxious, fatigued, struggling to speak in full sentences",
          medicalLiteracy: "moderate"
        },
        responses: {
          opening: "I can't... catch my breath. It's been getting worse over the past 3 or 4 days. I can't lie down to sleep anymore — I've been sleeping in my recliner the last two nights. My feet and ankles are all swollen up too. My wife made me come in.",
          severity: "It's bad. I can barely walk to the bathroom without getting completely winded. I'd say it's the worst it's been since I was first diagnosed with heart failure.",
          location: "It's not really a pain. I just can't get enough air. My whole chest feels tight when I try to breathe, but it's not a pain like a heart attack or anything.",
          onset: "It's been building up over the past 3 or 4 days. It started gradually — I noticed I was getting more winded walking around the house. Then it just kept getting worse each day.",
          character: "It's like I'm suffocating. Like I can't get a full breath. It's not a sharp pain or anything, I just can't get enough air in.",
          worse: "Lying flat makes it much worse — that's why I've been sleeping in my recliner. Any kind of exertion makes it worse too. Even walking to the bathroom winds me.",
          better: "Sitting upright helps. Propping myself up on a bunch of pillows helps some. But it doesn't really go away.",
          radiation: "It's not really a pain that goes anywhere. It's just hard to breathe.",
          timing: "It's worse at night. I woke up gasping for air around 3 AM two nights in a row. During the day it's a little better if I stay sitting up and don't move around much.",
        },
        clinicalFacts: {
          chiefComplaint: {
            patientPhrasing: ["can't catch my breath", "winded", "suffocating", "can't breathe lying down"],
            avoidPhrasing: ["sharp pain", "stabbing"],
            location: "not really a pain, just can't get enough air",
            radiation: [],
            onset: "been getting worse over the past 3-4 days",
            duration: "constant now, worse at night",
            severity: "really bad, I had to sleep sitting up in my recliner last 2 nights",
            timing: "worse at night, when I lie flat, and when I try to walk",
            aggravating: ["lying flat", "any exertion", "walking to the bathroom"],
            relieving: ["sitting upright", "propping up on pillows"]
          },
          associatedSymptoms: {
            present: [
              { name: "orthopnea", patientSays: "I can't lie flat at all. I've been sleeping in my recliner for two nights." },
              { name: "PND", patientSays: "I woke up gasping for air around 3 AM two nights in a row. Scared me half to death." },
              { name: "leg swelling", patientSays: "My ankles and feet are really swollen. My shoes don't fit anymore." },
              { name: "weight gain", patientSays: "I think I've gained about 8 pounds in the last week. My pants are tight." },
              { name: "fatigue", patientSays: "I'm exhausted. Can barely walk to the mailbox." },
              { name: "decreased urine output", patientSays: "Now that you mention it, I haven't been peeing as much." }
            ],
            absent: [
              { name: "chest pain", patientSays: "No real pain, just tightness sometimes when I can't breathe." },
              { name: "fever", patientSays: "No fever." },
              { name: "cough with blood", patientSays: "No blood when I cough." },
              { name: "leg pain/calf tenderness", patientSays: "My legs are swollen but they don't really hurt." },
              { name: "recent travel", patientSays: "No, I haven't gone anywhere." }
            ]
          },
          pmh: [
            "Heart failure — diagnosed about 3 years ago",
            "Atrial fibrillation",
            "High blood pressure for 20 years",
            "Type 2 diabetes",
            "Chronic kidney disease, stage 3"
          ],
          medications: [
            { name: "Furosemide", dose: "40mg daily", patientSays: "A water pill, furosemide. I ran out about 5 days ago and haven't been able to refill it." },
            { name: "Lisinopril", dose: "20mg daily", patientSays: "Blood pressure pill." },
            { name: "Carvedilol", dose: "12.5mg twice daily", patientSays: "A heart pill, I think it's called carvedilol." },
            { name: "Apixaban", dose: "5mg twice daily", patientSays: "A blood thinner for my irregular heartbeat." },
            { name: "Metformin", dose: "1000mg twice daily", patientSays: "Diabetes medicine." }
          ],
          allergies: [{ allergen: "Sulfa drugs", reaction: "hives", patientSays: "Sulfa — I broke out in hives." }],
          socialHistory: {
            smoking: "Quit 10 years ago, smoked a pack a day for 30 years",
            alcohol: "Stopped drinking when I got diagnosed with heart failure",
            drugs: "Never",
            occupation: "Retired electrician",
            livingSituation: "Live with my wife, she drove me in today"
          },
          familyHistory: [
            "Father died of heart failure at 72",
            "Mother had diabetes and a stroke"
          ],
          riskFactors: {
            present: ["known HF", "medication non-compliance", "AFib", "HTN", "DM", "CKD"],
            absent: ["recent MI", "valvular surgery"]
          }
        },
        physicalExam: {
          vitalSigns: { BP: "158/95", HR: "102 irregular", RR: "28", Temp: "98.2°F", SpO2: "89%" },
          general: "Elderly patient sitting upright, tripoding, speaking in 3-4 word sentences, appears fatigued and short of breath",
          heent: "Pupils equal, mucous membranes dry",
          neck: "JVD to angle of jaw at 45 degrees, no carotid bruits",
          cardiovascular: "Irregularly irregular rhythm (AFib), tachycardic, S3 gallop, 2/6 systolic murmur at apex (MR), no S4",
          pulmonary: "Bilateral crackles (rales) from bases to mid-lung fields. No wheezing.",
          abdominal: "Soft, mildly distended, tender RUQ (hepatic congestion), positive hepatojugular reflux",
          extremities: "3+ bilateral pitting edema to mid-shins, cool extremities",
          neurologic: "Alert and oriented, slightly confused about date",
          skin: "Cool, clammy, mottled lower extremities"
        },
        diagnostics: {
          ecg: {
            findings: ["Atrial fibrillation with rapid ventricular response at 102 bpm", "Left ventricular hypertrophy by voltage criteria", "Non-specific ST-T changes", "No acute ischemic changes"],
            interpretation: "AFib with RVR, LVH, no acute STEMI"
          },
          labs: [
            { test: "BNP", value: "1,840", unit: "pg/mL", ref: "<100", status: "critical", note: "Markedly elevated, consistent with acute decompensated HF" },
            { test: "Troponin I", value: "0.06", unit: "ng/mL", ref: "<0.04", status: "abnormal", note: "Mildly elevated — demand ischemia from tachycardia, not acute MI" },
            { test: "Creatinine", value: "1.9", unit: "mg/dL", ref: "0.7-1.3", status: "abnormal", note: "Elevated above baseline (1.4) — cardiorenal syndrome" },
            { test: "Potassium", value: "5.1", unit: "mEq/L", ref: "3.5-5.0", status: "abnormal", note: "Slightly elevated, monitor with diuresis" },
            { test: "Sodium", value: "132", unit: "mEq/L", ref: "136-145", status: "abnormal", note: "Mild hyponatremia — dilutional from volume overload" },
            { test: "CBC - WBC", value: "7.8", unit: "K/uL", ref: "4.5-11.0", status: "normal", note: "" },
            { test: "Hemoglobin", value: "11.2", unit: "g/dL", ref: "12-16", status: "abnormal", note: "Mild anemia — chronic disease" }
          ],
          imaging: [
            { study: "Chest X-ray (PA)", findings: "Cardiomegaly. Bilateral pleural effusions (R>L). Cephalization of pulmonary vasculature. Kerley B lines. Bilateral alveolar edema.", impression: "Acute pulmonary edema with bilateral pleural effusions, consistent with decompensated heart failure" }
          ]
        },
        teaching: {
          keyLearningPoints: [
            "Identify precipitants: medication non-compliance (ran out of diuretic) is the #1 cause",
            "Classic HF exam: JVD, S3, crackles, peripheral edema, hepatojugular reflux",
            "BNP >400 strongly suggests acute HF; >1000 = severe decompensation",
            "CXR findings: cephalization → interstitial edema → alveolar edema → effusions",
            "Acute management: IV diuretics (furosemide), oxygen, consider vasodilators"
          ],
          mustNotMiss: ["Acute MI causing new HF", "Pulmonary embolism", "Pneumonia as precipitant", "Flash pulmonary edema from hypertensive emergency"],
          expertDifferential: [
            { dx: "CHF Exacerbation", pct: 85, why: "Known HF, ran out of diuretic, classic exam and labs" },
            { dx: "Pneumonia", pct: 5, why: "Bilateral crackles, but no fever/productive cough" },
            { dx: "COPD Exacerbation", pct: 4, why: "Smoking history, but no wheezing" },
            { dx: "PE", pct: 3, why: "Dyspnea + tachycardia, but bilateral edema/effusions favor HF" },
            { dx: "ACS precipitating HF", pct: 3, why: "Mildly elevated troponin, but likely demand ischemia" }
          ]
        }
      }
    ]
  },
  {
    id: "headache",
    presentation: "Headache",
    category: "neurologic",
    difficulty: 3,
    rotations: ["em", "medicine"],
    demographics: {
      ageRange: [25, 65],
      genderDistribution: { male: 0.5, female: 0.5 },
      nameOptions: {
        male: ["Kevin Murphy", "Steven Ross", "Brian Powell", "Daniel Reed", "Jason Cooper"],
        female: ["Michelle Torres", "Stephanie Bell", "Rebecca Foster", "Christine Ward", "Amanda Price"]
      }
    },
    variants: [
      {
        id: "sah-v1",
        diagnosis: "Subarachnoid Hemorrhage (SAH)",
        acuity: 1,
        patient: {
          personalityTraits: ["distressed", "cooperative", "scared"],
          communicationStyle: "Clearly in severe pain. Keeps eyes closed, speaks softly. Photophobic.",
          emotionalState: "Terrified, in severe pain, nauseated",
          medicalLiteracy: "moderate"
        },
        responses: {
          opening: "My head... it's the worst headache of my entire life. It hit me all of a sudden about an hour ago. I was just at my desk at work and it felt like something exploded in the back of my head. I threw up right away. Can you turn the lights down? They're killing me.",
          severity: "It's a 10 out of 10. I've had migraines before and this is nothing like that. This is the worst pain I've ever experienced in my life.",
          location: "The back of my head, and it spread all over. The whole back of my head and my neck. It's everywhere now.",
          onset: "It came on all at once, about an hour ago. I was sitting at my desk at work and suddenly — boom — the worst headache of my life. Like a switch flipped. I actually thought something burst inside my head.",
          character: "Like an explosion. Like something popped or burst inside my head. It went from zero to the worst pain of my life in seconds.",
          worse: "Everything makes it worse. Light hurts my eyes. Any movement. When I threw up it was unbearable. Even talking makes it throb.",
          better: "Nothing. Absolutely nothing helps. I took some Tylenol but it didn't even touch it.",
          radiation: "It started in the back of my head and spread all over. My neck is really stiff and sore too.",
          timing: "It hit all at once. One second I was fine, the next second I had the worst headache of my life. It hasn't let up at all since.",
        },
        clinicalFacts: {
          chiefComplaint: {
            patientPhrasing: ["worst headache of my life", "thunderclap", "something exploded", "something burst"],
            avoidPhrasing: ["dull", "gradual", "mild", "throbbing like usual"],
            location: "back of my head, spread everywhere, neck is stiff",
            radiation: ["neck", "whole head"],
            onset: "sudden onset, about 1 hour ago, was at work sitting at desk",
            duration: "constant since onset, not improving",
            severity: "10/10, worst headache of entire life",
            timing: "instantaneous onset — thunderclap",
            aggravating: ["light", "movement", "noise", "vomiting"],
            relieving: ["nothing", "Tylenol had no effect"]
          },
          associatedSymptoms: {
            present: [
              { name: "vomiting", patientSays: "Yeah, I threw up right when it started. And once more on the way here." },
              { name: "photophobia", patientSays: "Yes, the light is really bothering me. Can you dim them please?" },
              { name: "neck stiffness", patientSays: "My neck is really stiff and sore. It hurts to bend it forward." },
              { name: "nausea", patientSays: "I still feel nauseated. I'm afraid I'll throw up again." },
              { name: "brief loss of consciousness", patientSays: "My coworker said I kind of slumped over for a few seconds right when it hit. I don't really remember." }
            ],
            absent: [
              { name: "fever", patientSays: "No, no fever." },
              { name: "visual aura", patientSays: "No, no zig-zag lines or anything. This is not like my usual migraines at all." },
              { name: "weakness", patientSays: "No, I can move everything. My arms and legs are fine." },
              { name: "numbness", patientSays: "No numbness anywhere." },
              { name: "speech difficulty", patientSays: "No, I can talk fine, it just hurts to talk." },
              { name: "recent trauma", patientSays: "No, I didn't hit my head or anything. I was just sitting at my desk." },
              { name: "rash", patientSays: "No rash." }
            ]
          },
          pmh: ["Migraines occasionally, maybe twice a year", "High blood pressure — not very well controlled"],
          medications: [
            { name: "Amlodipine", dose: "5mg daily", patientSays: "A blood pressure pill, amlodipine. I'll be honest, I don't always take it." },
            { name: "Sumatriptan", dose: "as needed for migraines", patientSays: "I have a migraine pill I take sometimes. Sumatriptan. I didn't take it this time because this feels completely different." }
          ],
          allergies: [],
          socialHistory: {
            smoking: "I smoke about half a pack a day. I know I should quit.",
            alcohol: "A few beers on weekends",
            drugs: "No",
            occupation: "I work in IT, desk job",
            livingSituation: "I live with my partner"
          },
          familyHistory: [
            "My mother had a brain aneurysm at 52 — she survived but it was scary",
            "Father has high blood pressure"
          ],
          riskFactors: {
            present: ["hypertension", "smoking", "family history of aneurysm"],
            absent: ["polycystic kidney disease", "connective tissue disorder", "cocaine use"]
          }
        },
        physicalExam: {
          vitalSigns: { BP: "182/108", HR: "92", RR: "18", Temp: "98.8°F", SpO2: "98%" },
          general: "Alert but in severe distress, lying with eyes closed, hand over forehead, avoids movement",
          heent: "Photophobic. Pupils equal and reactive. No papilledema on fundoscopic exam.",
          neck: "Nuchal rigidity — significant resistance to passive neck flexion. Positive Kernig's and Brudzinski's signs.",
          cardiovascular: "Regular rate and rhythm, no murmurs",
          pulmonary: "Clear to auscultation bilaterally",
          abdominal: "Soft, non-tender",
          extremities: "Normal",
          neurologic: "GCS 15. Alert and oriented ×4. Cranial nerves II-XII intact. No focal motor or sensory deficits. No pronator drift. Reflexes 2+ and symmetric. Gait not tested due to pain.",
          skin: "No rash, no petechiae"
        },
        diagnostics: {
          labs: [
            { test: "CBC - WBC", value: "9.4", unit: "K/uL", ref: "4.5-11.0", status: "normal", note: "" },
            { test: "Hemoglobin", value: "14.2", unit: "g/dL", ref: "12-16", status: "normal", note: "" },
            { test: "Platelets", value: "225", unit: "K/uL", ref: "150-400", status: "normal", note: "" },
            { test: "PT/INR", value: "1.0", unit: "", ref: "0.9-1.1", status: "normal", note: "Normal coagulation" },
            { test: "BMP", value: "Normal", unit: "", ref: "", status: "normal", note: "" },
            { test: "Troponin I", value: "<0.01", unit: "ng/mL", ref: "<0.04", status: "normal", note: "" }
          ],
          imaging: [
            { study: "CT Head without contrast", findings: "Hyperdense material in the basal cisterns, Sylvian fissures bilaterally, and interhemispheric fissure consistent with acute subarachnoid hemorrhage. No hydrocephalus. No midline shift.", impression: "Acute subarachnoid hemorrhage (Fisher Grade 3)" }
          ]
        },
        teaching: {
          keyLearningPoints: [
            "Thunderclap headache (maximal at onset) = SAH until proven otherwise",
            "'Worst headache of my life' + sudden onset is the classic presentation",
            "CT head sensitivity for SAH: ~95-100% within 6 hours, drops significantly after 12-24 hours",
            "If CT negative but clinical suspicion high: LP for xanthochromia (or CTA)",
            "Family history of aneurysm is a significant risk factor",
            "Nuchal rigidity develops within hours as blood irritates meninges"
          ],
          mustNotMiss: ["Bacterial meningitis", "Cervical artery dissection", "Cerebral venous thrombosis", "Hypertensive emergency with end-organ damage"],
          expertDifferential: [
            { dx: "Subarachnoid Hemorrhage", pct: 75, why: "Thunderclap onset, worst of life, nuchal rigidity, family hx" },
            { dx: "Migraine with atypical features", pct: 8, why: "History of migraines, but onset pattern is wrong" },
            { dx: "Meningitis", pct: 7, why: "Nuchal rigidity, but afebrile and sudden onset" },
            { dx: "Hypertensive emergency", pct: 5, why: "Severely elevated BP, but headache pattern favors SAH" },
            { dx: "Cervical artery dissection", pct: 5, why: "Sudden headache, but typically unilateral with neck pain" }
          ]
        }
      },
      {
        id: "meningitis-v1",
        diagnosis: "Bacterial Meningitis",
        acuity: 2,
        patient: {
          personalityTraits: ["young", "ill-appearing", "confused"],
          communicationStyle: "Lethargic, slow to respond. Becomes more confused over time.",
          emotionalState: "Drowsy, irritable, clearly unwell",
          medicalLiteracy: "moderate"
        },
        responses: {
          opening: "I feel really awful. I've had this terrible headache since yesterday and it keeps getting worse. I've been throwing up and I have a fever. My neck is so stiff I can barely move it. I just feel... really sick. My roommate brought me in because I was acting confused.",
          severity: "It's bad, maybe an 8 or 9 out of 10. And it just keeps getting worse. I can't even think straight.",
          location: "It's all over my head but especially the front and behind my eyes. And my neck is really stiff and painful too.",
          onset: "It started yesterday morning as a mild headache. By last night it was much worse and I started throwing up. I had a fever and my roommate said I wasn't making sense, so they brought me in.",
          character: "It's a constant pounding pain, all over my head. It's throbbing. And my whole body aches, especially my neck.",
          worse: "Light hurts. Bending my neck forward is terrible. Loud noises. Honestly everything makes it worse. I just want to lie in a dark room.",
          better: "Nothing really helps. Tylenol brought my fever down a little but the headache is still awful.",
          radiation: "My neck is really stiff and sore. The whole area from my head down to my neck and shoulders is painful.",
          timing: "It started yesterday morning and has just gotten steadily worse over 24 hours. The fever and vomiting started last night.",
        },
        clinicalFacts: {
          chiefComplaint: {
            patientPhrasing: ["terrible headache", "pounding", "stiff neck", "can't think straight"],
            avoidPhrasing: ["thunderclap", "instantaneous"],
            location: "all over, front and behind eyes, neck very stiff",
            radiation: ["neck", "shoulders"],
            onset: "started yesterday morning, gradually worsening over 24 hours",
            duration: "about 24 hours and getting worse",
            severity: "8-9/10 and worsening",
            timing: "gradual onset over 24 hours, progressively worse",
            aggravating: ["light", "neck flexion", "noise", "movement"],
            relieving: ["lying still in dark room", "Tylenol helped fever slightly"]
          },
          associatedSymptoms: {
            present: [
              { name: "fever", patientSays: "Yeah, I've had a fever since last night. I was shaking with chills." },
              { name: "vomiting", patientSays: "I've thrown up three or four times since last night." },
              { name: "neck stiffness", patientSays: "My neck is incredibly stiff. I can barely turn it." },
              { name: "photophobia", patientSays: "Yes, the light really hurts my eyes. Can you dim them?" },
              { name: "confusion", patientSays: "I don't know... I feel foggy. What day is it? I'm having trouble thinking." },
              { name: "body aches", patientSays: "My whole body aches, like the worst flu of my life." },
              { name: "recent upper respiratory infection", patientSays: "I had a sinus infection about a week and a half ago. The doctor gave me antibiotics but I only took them for a few days because I felt better." }
            ],
            absent: [
              { name: "rash", patientSays: "No, I don't think I have a rash. I haven't really looked." },
              { name: "seizure", patientSays: "No seizures. At least I don't think so." },
              { name: "weakness", patientSays: "I feel weak all over but I can move everything." },
              { name: "recent travel", patientSays: "No, haven't been anywhere." },
              { name: "sick contacts", patientSays: "Not that I know of. I'm a college student so I'm around a lot of people." }
            ]
          },
          pmh: ["Generally healthy", "Sinus infections a few times a year"],
          medications: [{ name: "None regularly", dose: "", patientSays: "Nothing regularly. I had some antibiotics for a sinus infection last week but I stopped taking them early." }],
          allergies: [],
          socialHistory: {
            smoking: "No",
            alcohol: "I'm a college student, so yeah, on weekends",
            drugs: "Marijuana sometimes",
            occupation: "College student, I live in a dorm",
            livingSituation: "I live in a dorm on campus with a roommate"
          },
          familyHistory: ["Nothing significant"],
          riskFactors: {
            present: ["college student (close living quarters)", "incomplete antibiotic course for recent sinusitis"],
            absent: ["immunocompromised", "recent neurosurgery", "CSF leak"]
          }
        },
        physicalExam: {
          vitalSigns: { BP: "108/62", HR: "118", RR: "22", Temp: "103.4°F", SpO2: "97%" },
          general: "Ill-appearing young adult, lying on side with eyes closed, lethargic but arousable",
          heent: "Photophobic. No papilledema. Sinuses non-tender.",
          neck: "Marked nuchal rigidity. Positive Kernig's sign (resistance and pain with knee extension when hip flexed). Positive Brudzinski's sign (hip flexion with passive neck flexion).",
          cardiovascular: "Tachycardic, regular rhythm, no murmurs",
          pulmonary: "Clear bilaterally, tachypneic",
          abdominal: "Soft, non-tender",
          extremities: "No rash, no petechiae, no purpura",
          neurologic: "GCS 14 (E3V5M6 — eyes open to voice). Oriented to person and place, not date. Cranial nerves intact. No focal deficits. Sluggish but follows commands.",
          skin: "No rash, no petechiae — important negative"
        },
        diagnostics: {
          labs: [
            { test: "CBC - WBC", value: "22.4", unit: "K/uL", ref: "4.5-11.0", status: "critical", note: "Marked leukocytosis" },
            { test: "Neutrophils", value: "89%", unit: "", ref: "40-70%", status: "abnormal", note: "Significant left shift" },
            { test: "Lactate", value: "3.2", unit: "mmol/L", ref: "<2.0", status: "abnormal", note: "Elevated — systemic infection" },
            { test: "CRP", value: "18.4", unit: "mg/dL", ref: "<0.5", status: "critical", note: "Markedly elevated" },
            { test: "Procalcitonin", value: "8.6", unit: "ng/mL", ref: "<0.1", status: "critical", note: "Strongly suggests bacterial infection" },
            { test: "Blood cultures", value: "Pending", unit: "", ref: "", status: "normal", note: "Drawn before antibiotics" },
            { test: "BMP", value: "Normal", unit: "", ref: "", status: "normal", note: "Glucose 118 (mildly elevated from stress)" }
          ],
          imaging: [
            { study: "CT Head without contrast", findings: "No intracranial hemorrhage. No mass or midline shift. No hydrocephalus. Mild mucosal thickening in right maxillary sinus.", impression: "No acute intracranial pathology. Proceed to LP if clinically indicated." }
          ]
        },
        teaching: {
          keyLearningPoints: [
            "Classic triad of bacterial meningitis: fever + headache + nuchal rigidity (present in ~44% per StatPearls)",
            "Altered mental status is present in ~70% — makes it a critical distinguishing feature",
            "Do NOT delay antibiotics for LP — give empiric ceftriaxone + vancomycin immediately if suspicion is high",
            "CT before LP is needed only if: immunocompromised, history of CNS disease, new-onset seizure, papilledema, altered consciousness, or focal neuro deficit",
            "Kernig's and Brudzinski's signs have low sensitivity (~5%) but high specificity — absence does NOT rule out meningitis",
            "Incomplete antibiotic course for sinusitis can predispose to contiguous spread"
          ],
          mustNotMiss: ["SAH (thunderclap onset pattern differentiates)", "Brain abscess", "Encephalitis", "Cerebral venous sinus thrombosis"],
          expertDifferential: [
            { dx: "Bacterial Meningitis", pct: 75, why: "Fever, nuchal rigidity, altered mental status, leukocytosis, recent sinusitis" },
            { dx: "Viral Meningitis", pct: 10, why: "Similar presentation but typically less toxic, lower WBC" },
            { dx: "Encephalitis", pct: 5, why: "Confusion prominent, but nuchal rigidity favors meningitis" },
            { dx: "SAH", pct: 5, why: "Nuchal rigidity + headache, but gradual onset and fever argue against" },
            { dx: "Brain abscess", pct: 5, why: "Post-sinusitis, but usually more focal findings" }
          ]
        }
      }
    ]
  },
  {
    id: "altered-mental-status",
    presentation: "Altered Mental Status",
    category: "neurologic",
    difficulty: 4,
    rotations: ["em", "medicine"],
    demographics: {
      ageRange: [50, 80],
      genderDistribution: { male: 0.5, female: 0.5 },
      nameOptions: {
        male: ["Frank Coleman", "Albert Price", "Roy Henderson", "Ernest Brooks", "Clarence Ward"],
        female: ["Virginia Sanders", "Irene Patterson", "Doris Griffin", "Evelyn Hughes", "Gladys Russell"]
      }
    },
    variants: [
      {
        id: "stroke-v1",
        diagnosis: "Acute Ischemic Stroke (Left MCA)",
        acuity: 1,
        patient: {
          personalityTraits: ["confused", "frustrated", "cooperative"],
          communicationStyle: "Expressive aphasia — knows what they want to say but words come out wrong or garbled. Gets frustrated trying to communicate. May use gestures.",
          emotionalState: "Frustrated, confused, aware something is wrong",
          medicalLiteracy: "moderate"
        },
        responses: {
          opening: "I... my... the words won't come out right. My wife... she called the... the van. My right side... it's not working. Something is very wrong.",
          severity: "I don't... I can't... it's very bad. My arm... [gestures to right arm, which is limp]. I can't make it work.",
          location: "My head doesn't really hurt. It's my... this side [gestures to right side]. My arm won't move. And the words... they won't come right.",
          onset: "My wife said... she found me this morning. I woke up and tried to get out of bed and I fell. My right side just... stopped working. And I can't say what I mean.",
          character: "It's not really pain. Everything on this side just... stopped. Like it's not mine anymore. And the words in my head are right but they come out wrong.",
          worse: "Trying to talk makes me frustrated. Trying to move my right arm — it just won't listen.",
          better: "Nothing... nothing makes it better.",
          radiation: "It's my whole right side. My arm more than my leg. And my face — my wife said my face is drooping.",
          timing: "My wife found me like this when I woke up. Maybe it started during the night. I don't know exactly when.",
        },
        clinicalFacts: {
          chiefComplaint: {
            patientPhrasing: ["words won't come out", "right side not working", "something is very wrong", "can't make arm work"],
            avoidPhrasing: ["terrible headache", "worst pain"],
            location: "right-sided weakness, difficulty speaking",
            radiation: [],
            onset: "found this morning by wife, possibly overnight onset",
            duration: "at least since waking, approximately 2-3 hours",
            severity: "unable to use right arm, difficulty speaking",
            timing: "wake-up stroke, last known normal was bedtime last night around 10 PM",
            aggravating: ["trying to speak or use right arm"],
            relieving: ["nothing"]
          },
          associatedSymptoms: {
            present: [
              { name: "right arm weakness", patientSays: "[tries to lift right arm, it falls back down] See? It won't... it doesn't work." },
              { name: "right leg weakness", patientSays: "[right leg can move slightly but clearly weak] The leg is a little... it's better than the arm but still not right." },
              { name: "facial droop", patientSays: "[right side of face drooping, asymmetric smile] My wife said my face looks funny." },
              { name: "difficulty finding words", patientSays: "I know what I want to... the words are in my head but they come out... wrong. It's so frustrating." },
              { name: "fall", patientSays: "I fell getting out of bed this morning. My right leg just... gave out." }
            ],
            absent: [
              { name: "headache", patientSays: "No... my head is OK. It's not a headache." },
              { name: "seizure", patientSays: "[wife answers] No, he didn't have a seizure. I found him trying to get up and he couldn't." },
              { name: "vision loss", patientSays: "I can see... I think. I'm not sure. Everything is just... confusing." },
              { name: "fever", patientSays: "No fever." },
              { name: "recent trauma", patientSays: "No... I just fell this morning because of my leg." }
            ]
          },
          pmh: [
            "Atrial fibrillation — diagnosed 2 years ago",
            "High blood pressure",
            "Type 2 diabetes",
            "High cholesterol"
          ],
          medications: [
            { name: "Warfarin", dose: "5mg daily", patientSays: "The... the blood... thinner. Warfarin." },
            { name: "Metoprolol", dose: "50mg twice daily", patientSays: "Heart pill... [gestures to wife for help]" },
            { name: "Lisinopril", dose: "20mg daily", patientSays: "[wife answers] He takes lisinopril for blood pressure." },
            { name: "Metformin", dose: "1000mg twice daily", patientSays: "[wife answers] And metformin for diabetes." },
            { name: "Atorvastatin", dose: "40mg nightly", patientSays: "[wife answers] And a cholesterol pill at night." }
          ],
          allergies: [{ allergen: "Codeine", reaction: "nausea", patientSays: "[wife answers] He can't take codeine, it makes him very sick." }],
          socialHistory: {
            smoking: "Quit 5 years ago, smoked for 30 years before that",
            alcohol: "A glass of wine with dinner occasionally",
            drugs: "Never",
            occupation: "Retired postal worker",
            livingSituation: "Lives with wife"
          },
          familyHistory: [
            "Father had a stroke at 68",
            "Mother had heart disease"
          ],
          riskFactors: {
            present: ["atrial fibrillation (major)", "hypertension", "diabetes", "hyperlipidemia", "prior smoking", "family history"],
            absent: ["recent surgery", "known carotid stenosis", "prior stroke"]
          }
        },
        physicalExam: {
          vitalSigns: { BP: "172/96", HR: "88 irregular", RR: "16", Temp: "98.4°F", SpO2: "97%" },
          general: "Elderly patient in bed, awake, frustrated, right facial droop obvious, right arm resting at side",
          heent: "Right lower facial droop (forehead sparing). Left gaze preference. Pupils equal and reactive.",
          neck: "Supple, no nuchal rigidity, no carotid bruits",
          cardiovascular: "Irregularly irregular (atrial fibrillation), no murmurs",
          pulmonary: "Clear bilaterally",
          abdominal: "Soft, non-tender",
          extremities: "Right upper extremity 1/5 strength (flaccid), right lower extremity 3/5 strength. Left side 5/5. No edema.",
          neurologic: "NIHSS: 14. Alert but aphasic (expressive aphasia — comprehension relatively preserved). Right facial droop (UMN pattern — forehead spared). Right hemiparesis (arm > leg). Right pronator drift. Sensation diminished on right. Left gaze preference.",
          skin: "No rashes"
        },
        diagnostics: {
          ecg: {
            findings: ["Atrial fibrillation with controlled ventricular rate at 88 bpm", "Left ventricular hypertrophy", "No acute ST changes"],
            interpretation: "Atrial fibrillation (known), no acute ischemic changes"
          },
          labs: [
            { test: "Glucose (POCT)", value: "142", unit: "mg/dL", ref: "70-100", status: "abnormal", note: "Elevated but not hypoglycemic — rules out glucose as cause" },
            { test: "INR", value: "1.4", unit: "", ref: "2.0-3.0 (therapeutic)", status: "abnormal", note: "SUBtherapeutic — patient on warfarin but not adequately anticoagulated" },
            { test: "CBC - WBC", value: "8.2", unit: "K/uL", ref: "4.5-11.0", status: "normal", note: "" },
            { test: "Platelets", value: "198", unit: "K/uL", ref: "150-400", status: "normal", note: "" },
            { test: "Creatinine", value: "1.2", unit: "mg/dL", ref: "0.7-1.3", status: "normal", note: "" },
            { test: "BMP", value: "Normal", unit: "", ref: "", status: "normal", note: "" }
          ],
          imaging: [
            { study: "CT Head without contrast", findings: "No intracranial hemorrhage. No mass or midline shift. Loss of grey-white differentiation in left insular cortex — subtle early ischemic changes.", impression: "No hemorrhage. Subtle early ischemic changes in left MCA territory. Clinical correlation for acute stroke." },
            { study: "CT Angiography (Head/Neck)", findings: "Occlusion of left M1 segment of middle cerebral artery. No significant carotid stenosis bilaterally. Circle of Willis otherwise patent.", impression: "Left M1 MCA occlusion — large vessel occlusion suitable for thrombectomy consideration" }
          ]
        },
        teaching: {
          keyLearningPoints: [
            "Stroke is a clinical diagnosis — act fast, imaging confirms and guides treatment",
            "NIHSS score guides severity and treatment decisions (>6 consider intervention)",
            "Left MCA stroke: right hemiparesis (arm > leg) + expressive aphasia + left gaze preference",
            "First CT: rule out hemorrhage. CT is often NORMAL early in ischemic stroke.",
            "Subtherapeutic INR in AFib patient = stroke risk. This is the likely mechanism (cardioembolic).",
            "Wake-up strokes: last known normal is critical — determines tPA/thrombectomy eligibility",
            "Time is brain: ~1.9 million neurons lost per minute of untreated large vessel occlusion"
          ],
          mustNotMiss: ["Hemorrhagic stroke (CT rules out)", "Hypoglycemia mimicking stroke (check glucose immediately)", "Todd's paralysis post-seizure", "Brain tumor"],
          expertDifferential: [
            { dx: "Acute Ischemic Stroke (L MCA)", pct: 90, why: "Acute onset right hemiparesis + aphasia + AFib + subtherapeutic INR" },
            { dx: "Hemorrhagic Stroke", pct: 5, why: "Similar presentation but CT differentiates" },
            { dx: "Todd's paralysis", pct: 2, why: "Post-ictal weakness, but no witnessed seizure" },
            { dx: "Hypoglycemia", pct: 2, why: "Can mimic stroke, glucose rules out" },
            { dx: "Brain tumor", pct: 1, why: "Usually more gradual, imaging differentiates" }
          ]
        }
      },
      {
        id: "hypoglycemia-v1",
        diagnosis: "Severe Hypoglycemia",
        acuity: 2,
        patient: {
          personalityTraits: ["confused", "diaphoretic", "agitated"],
          communicationStyle: "Altered, responds slowly, may be combative. Improves dramatically with glucose.",
          emotionalState: "Confused, tremulous, anxious, slightly combative",
          medicalLiteracy: "low"
        },
        responses: {
          opening: "I don't... where am I? I feel really shaky and weird. Everything is kind of... blurry. I'm sweating a lot. My daughter called 911 because she said I was talking nonsense and acting strange.",
          severity: "I feel really bad. I'm shaking all over. I feel like I might pass out. Everything is... foggy.",
          location: "I don't really have a specific pain. I just feel... wrong. Shaky all over. My head feels foggy.",
          onset: "I don't really know. My daughter said she called me on the phone and I wasn't making sense. When she came over I was sitting in my chair just sweating and mumbling. I don't remember much.",
          character: "It's not really a pain. I feel shaky, sweaty, my heart is racing. I can't think clearly. Everything feels wrong.",
          worse: "I can't really say. I just feel terrible. I haven't eaten... I don't think I ate today. Or maybe yesterday? I can't remember.",
          better: "I don't know. Can I have some juice or something? I think my sugar might be low. I'm diabetic.",
          radiation: "I don't have pain anywhere specific. I just feel awful all over.",
          timing: "My daughter said she talked to me this morning and I seemed fine. She called around noon and I wasn't making sense. She came over and found me like this.",
        },
        clinicalFacts: {
          chiefComplaint: {
            patientPhrasing: ["shaky", "feel weird", "sweating", "can't think straight", "feel like I might pass out"],
            avoidPhrasing: ["worst headache", "chest pain"],
            location: "generalized — no focal complaint",
            radiation: [],
            onset: "found confused by daughter around noon today",
            duration: "unclear, was fine this morning",
            severity: "confused, diaphoretic, tremulous",
            timing: "last known normal this morning, found altered at noon",
            aggravating: ["hasn't eaten"],
            relieving: ["asks for juice"]
          },
          associatedSymptoms: {
            present: [
              { name: "diaphoresis", patientSays: "Yeah, I'm soaking wet. I don't know why I'm sweating so much." },
              { name: "tremor", patientSays: "[holds out hand — visible tremor] See? I can't stop shaking." },
              { name: "confusion", patientSays: "I'm sorry, what did you ask me? My head is... foggy." },
              { name: "tachycardia", patientSays: "My heart is racing. I can feel it pounding." },
              { name: "blurred vision", patientSays: "Everything is kind of blurry. I can see you but it's not clear." },
              { name: "missed meals", patientSays: "I don't think I ate today. I wasn't hungry. Or maybe I forgot. I can't remember." }
            ],
            absent: [
              { name: "chest pain", patientSays: "No, my chest doesn't hurt." },
              { name: "weakness on one side", patientSays: "[can move both arms and legs, though tremulous] No, I can move everything. I'm just shaking." },
              { name: "headache", patientSays: "My head feels foggy but not really a headache." },
              { name: "fever", patientSays: "No, I don't think I have a fever. I'm sweating though." },
              { name: "seizure", patientSays: "I don't think so. My daughter didn't mention that." },
              { name: "slurred speech", patientSays: "Am I slurring? I feel like my brain is just... slow." }
            ]
          },
          pmh: [
            "Type 2 diabetes for 15 years — recently started insulin",
            "High blood pressure",
            "Chronic kidney disease, stage 3"
          ],
          medications: [
            { name: "Insulin glargine", dose: "30 units at bedtime", patientSays: "I take insulin at night. The long-acting one. 30 units." },
            { name: "Glipizide", dose: "10mg twice daily", patientSays: "And a diabetes pill... glipizide. Twice a day." },
            { name: "Metformin", dose: "500mg twice daily", patientSays: "And metformin." },
            { name: "Amlodipine", dose: "10mg daily", patientSays: "Blood pressure pill." }
          ],
          allergies: [],
          socialHistory: {
            smoking: "No",
            alcohol: "No",
            drugs: "No",
            occupation: "Retired, lives alone",
            livingSituation: "I live by myself. My daughter checks on me every day."
          },
          familyHistory: ["Mother had diabetes"],
          riskFactors: {
            present: ["insulin use", "sulfonylurea use (glipizide)", "CKD (impairs drug clearance)", "skipped meals", "lives alone"],
            absent: ["alcohol use", "liver disease", "intentional overdose"]
          }
        },
        physicalExam: {
          vitalSigns: { BP: "158/88", HR: "112", RR: "20", Temp: "97.8°F", SpO2: "98%" },
          general: "Elderly patient, diaphoretic, tremulous, confused but arousable, oriented to person only",
          heent: "Pupils equal and reactive. Diaphoretic face.",
          neck: "Supple, no nuchal rigidity",
          cardiovascular: "Tachycardic, regular rhythm, no murmurs",
          pulmonary: "Clear bilaterally",
          abdominal: "Soft, non-tender",
          extremities: "Symmetric movement, tremulous bilaterally, no focal weakness. Skin cool and clammy.",
          neurologic: "GCS 14 (E3V5M6). Oriented to person only. NO focal deficits — moves all extremities symmetrically. Diffuse tremor. No pronator drift. Reflexes symmetric.",
          skin: "Diaphoretic, cool, clammy. No rashes."
        },
        diagnostics: {
          labs: [
            { test: "Glucose (POCT)", value: "34", unit: "mg/dL", ref: "70-100", status: "critical", note: "CRITICAL LOW — severe hypoglycemia" },
            { test: "Glucose (repeat, post-treatment)", value: "128", unit: "mg/dL", ref: "70-100", status: "abnormal", note: "Improved after D50 administration" },
            { test: "HbA1c", value: "8.4", unit: "%", ref: "<7.0", status: "abnormal", note: "Poorly controlled — yet having hypoglycemia (medication adjustment needed)" },
            { test: "Creatinine", value: "1.8", unit: "mg/dL", ref: "0.7-1.3", status: "abnormal", note: "Elevated — CKD reduces clearance of insulin and glipizide" },
            { test: "BMP - Potassium", value: "4.8", unit: "mEq/L", ref: "3.5-5.0", status: "normal", note: "Monitor — K shifts with glucose correction" },
            { test: "CBC", value: "Normal", unit: "", ref: "", status: "normal", note: "No signs of infection" }
          ],
          imaging: [
            { study: "CT Head without contrast", findings: "No intracranial hemorrhage. No mass or acute changes. Age-appropriate atrophy.", impression: "No acute intracranial pathology" }
          ]
        },
        teaching: {
          keyLearningPoints: [
            "ALWAYS check point-of-care glucose immediately in any patient with altered mental status",
            "Hypoglycemia can perfectly mimic stroke — check glucose BEFORE activating stroke team",
            "Whipple's triad: symptoms + low glucose + resolution with glucose correction",
            "CKD reduces clearance of insulin and sulfonylureas — this patient has double risk",
            "Sulfonylurea hypoglycemia can be prolonged (12-24+ hours) — observe and recheck glucose",
            "Elderly patients living alone with insulin + sulfonylurea + CKD = high-risk combination"
          ],
          mustNotMiss: ["Stroke (check glucose first, then neuro exam for focality)", "Sepsis (fever, source of infection)", "Drug overdose/ingestion", "Seizure (post-ictal state)", "Adrenal crisis"],
          expertDifferential: [
            { dx: "Hypoglycemia", pct: 85, why: "Diabetic on insulin + glipizide, skipped meals, CKD, classic adrenergic symptoms" },
            { dx: "Stroke", pct: 5, why: "Altered mental status, elderly, risk factors — but NO focal deficits" },
            { dx: "Sepsis", pct: 4, why: "Altered, tachycardic, elderly — but afebrile, no source identified" },
            { dx: "Medication side effect", pct: 3, why: "Multiple medications, but glucose is the obvious culprit" },
            { dx: "Post-ictal state", pct: 3, why: "Confusion, but no witnessed seizure activity" }
          ]
        }
      }
    ]
  }
];

// ═══════════════════════════════════════════════════════════════
// PATIENT GENERATOR
// ═══════════════════════════════════════════════════════════════
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randPick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const genMRN = () => String(randInt(100000, 999999));
const genBed = (used) => {
  const beds = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20];
  const avail = beds.filter(b => !used.includes(b));
  return avail.length > 0 ? randPick(avail) : randInt(21, 30);
};

function generatePatient(template, variant, usedBeds) {
  const demo = template.demographics;
  const gender = Math.random() < demo.genderDistribution.male ? "male" : "female";
  const name = randPick(demo.nameOptions[gender]);
  const age = randInt(demo.ageRange[0], demo.ageRange[1]);
  const id = `pt-${Date.now()}-${randInt(1000, 9999)}`;
  const now = new Date();
  const vs = variant.physicalExam.vitalSigns;
  return {
    id,
    name,
    age,
    gender,
    mrn: genMRN(),
    bed: genBed(usedBeds),
    templateId: template.id,
    variantId: variant.id,
    diagnosis: variant.diagnosis,
    chiefComplaint: template.presentation,
    acuity: variant.acuity,
    status: "ed-waiting",
    arrivalTime: now,
    variant,
    physicalExam: variant.physicalExam,
    diagnostics: variant.diagnostics,
    teaching: variant.teaching,
    interviewHistory: [],
    notes: [],
    orderedTests: [],
    completedTests: [],
    orderedMeds: [],
    orderedConsults: [],
    orderedNursing: [],
    examPerformed: false,
    dispositioned: false,
    disposition: null,
    ddxList: [],
    codeStatus: "Full Code",
    vitalsLog: [{ time: now.toISOString(), label: "Triage", ...vs, source: "Triage RN" }],
    triageNote: `${age}${gender === "male" ? "M" : "F"} presenting with ${template.presentation.toLowerCase()}. Patient is ${variant.patient.emotionalState.toLowerCase()}. VS: BP ${vs.BP}, HR ${vs.HR}, RR ${vs.RR}, T ${vs.Temp}, SpO2 ${vs.SpO2}. Acuity: ESI-${variant.acuity}. Assigned to Bed ${genBed(usedBeds)}.`,
    nursingNotes: [{ time: now.toISOString(), author: "Triage RN", text: `Patient arrived and triaged. Chief complaint: ${template.presentation}. IV access established. Patient placed on monitor.` }],
    aiCallCount: 0,
  };
}

// ═══════════════════════════════════════════════════════════════
// STANDARD ED ORDER SETS
// ═══════════════════════════════════════════════════════════════
const ORDER_MENU = {
  labs: {
    label: "Laboratory",
    icon: "🧪",
    items: [
      { id: "cbc", name: "CBC with Differential", turnaround: 30 },
      { id: "bmp", name: "Basic Metabolic Panel (BMP)", turnaround: 30 },
      { id: "cmp", name: "Comprehensive Metabolic Panel (CMP)", turnaround: 35 },
      { id: "troponin", name: "Troponin I", turnaround: 45 },
      { id: "troponin-serial", name: "Serial Troponin (1hr / 3hr)", turnaround: 60 },
      { id: "bnp", name: "BNP / NT-proBNP", turnaround: 40 },
      { id: "coags", name: "PT/INR/PTT", turnaround: 25 },
      { id: "lactate", name: "Lactate", turnaround: 15 },
      { id: "lipase", name: "Lipase", turnaround: 30 },
      { id: "ua", name: "Urinalysis", turnaround: 20 },
      { id: "uds", name: "Urine Drug Screen", turnaround: 30 },
      { id: "bhcg", name: "Urine bHCG (Pregnancy Test)", turnaround: 15 },
      { id: "blood-cx", name: "Blood Cultures x2", turnaround: 120 },
      { id: "procalcitonin", name: "Procalcitonin", turnaround: 60 },
      { id: "crp", name: "CRP", turnaround: 30 },
      { id: "esr", name: "ESR", turnaround: 45 },
      { id: "d-dimer", name: "D-Dimer", turnaround: 30 },
      { id: "hba1c", name: "Hemoglobin A1c", turnaround: 60 },
      { id: "tsh", name: "TSH", turnaround: 60 },
      { id: "abg", name: "Arterial Blood Gas (ABG)", turnaround: 15 },
      { id: "vbg", name: "Venous Blood Gas (VBG)", turnaround: 15 },
      { id: "fibrinogen", name: "Fibrinogen", turnaround: 40 },
      { id: "type-screen", name: "Type & Screen", turnaround: 45 },
      { id: "type-cross", name: "Type & Crossmatch (2 units)", turnaround: 60 },
      { id: "glucose-poc", name: "Point-of-Care Glucose", turnaround: 2 },
    ]
  },
  imaging: {
    label: "Imaging",
    icon: "📸",
    items: [
      { id: "cxr", name: "Chest X-ray (PA/Lat)", turnaround: 20 },
      { id: "cxr-portable", name: "Chest X-ray (Portable)", turnaround: 15 },
      { id: "ct-head", name: "CT Head without Contrast", turnaround: 30 },
      { id: "ct-head-cta", name: "CT Head + CTA Head/Neck", turnaround: 40 },
      { id: "ct-chest-pe", name: "CT Chest (PE Protocol)", turnaround: 35 },
      { id: "ct-abd-pelvis", name: "CT Abdomen/Pelvis with IV Contrast", turnaround: 40 },
      { id: "us-ruq", name: "Ultrasound RUQ (Gallbladder)", turnaround: 30 },
      { id: "us-pelvis", name: "Ultrasound Pelvis (Transvaginal)", turnaround: 35 },
      { id: "xr-abd", name: "X-ray Abdomen (KUB)", turnaround: 15 },
      { id: "ct-spine-c", name: "CT C-Spine", turnaround: 25 },
      { id: "echo-bedside", name: "Bedside Echocardiogram (POCUS)", turnaround: 10 },
    ]
  },
  cardiac: {
    label: "Cardiac",
    icon: "❤️",
    items: [
      { id: "ecg-12", name: "12-Lead ECG", turnaround: 5 },
      { id: "ecg-serial", name: "Serial ECG (q15 min x4)", turnaround: 60 },
      { id: "tele", name: "Continuous Telemetry", turnaround: 2 },
      { id: "cardiac-monitor", name: "Cardiac Monitor", turnaround: 2 },
    ]
  },
  medications: {
    label: "Medications",
    icon: "💊",
    items: [
      // Cardiac
      { id: "asa-325", name: "Aspirin 325mg PO (chew)", cat: "Cardiac" },
      { id: "nitro-sl", name: "Nitroglycerin 0.4mg SL q5min x3", cat: "Cardiac" },
      { id: "heparin-bolus", name: "Heparin 60 units/kg IV bolus", cat: "Cardiac" },
      { id: "heparin-drip", name: "Heparin drip (per ACS protocol)", cat: "Cardiac" },
      { id: "metoprolol-iv", name: "Metoprolol 5mg IV q5min x3", cat: "Cardiac" },
      { id: "ticagrelor", name: "Ticagrelor 180mg PO loading", cat: "Cardiac" },
      // Pain
      { id: "morphine-iv", name: "Morphine 4mg IV q4h PRN pain", cat: "Pain" },
      { id: "fentanyl-iv", name: "Fentanyl 50mcg IV q30min PRN pain", cat: "Pain" },
      { id: "ketorolac", name: "Ketorolac 15mg IV x1", cat: "Pain" },
      { id: "acetaminophen-iv", name: "Acetaminophen 1g IV x1", cat: "Pain" },
      { id: "acetaminophen-po", name: "Acetaminophen 650mg PO q6h PRN", cat: "Pain" },
      { id: "ibuprofen", name: "Ibuprofen 600mg PO q6h", cat: "Pain/Anti-inflammatory" },
      // Anti-emetic
      { id: "ondansetron", name: "Ondansetron 4mg IV q6h PRN nausea", cat: "Anti-emetic" },
      { id: "promethazine", name: "Promethazine 12.5mg IV q6h PRN", cat: "Anti-emetic" },
      // Antibiotics
      { id: "ceftriaxone", name: "Ceftriaxone 2g IV", cat: "Antibiotic" },
      { id: "vancomycin", name: "Vancomycin 25mg/kg IV", cat: "Antibiotic" },
      { id: "piptazo", name: "Piperacillin-Tazobactam 4.5g IV q6h", cat: "Antibiotic" },
      { id: "ampicillin", name: "Ampicillin 2g IV q4h", cat: "Antibiotic" },
      { id: "dexamethasone", name: "Dexamethasone 0.15mg/kg IV", cat: "Steroid" },
      // Emergency
      { id: "epi-1mg", name: "Epinephrine 1mg IV (code dose)", cat: "Emergency" },
      { id: "atropine", name: "Atropine 0.5mg IV q3-5min", cat: "Emergency" },
      { id: "d50", name: "Dextrose 50% (D50) 25g IV push", cat: "Emergency" },
      { id: "glucagon", name: "Glucagon 1mg IM", cat: "Emergency" },
      { id: "naloxone", name: "Naloxone 0.4mg IV/IM/IN", cat: "Emergency" },
      { id: "tpa", name: "Alteplase (tPA) per stroke protocol", cat: "Thrombolytic" },
      // Respiratory
      { id: "albuterol-neb", name: "Albuterol 2.5mg Nebulizer q20min x3", cat: "Respiratory" },
      { id: "ipratropium", name: "Ipratropium 0.5mg Nebulizer", cat: "Respiratory" },
      // Sedation
      { id: "lorazepam", name: "Lorazepam 2mg IV PRN agitation/seizure", cat: "Sedation" },
      { id: "midazolam", name: "Midazolam 2mg IV PRN", cat: "Sedation" },
      // GI
      { id: "pantoprazole", name: "Pantoprazole 40mg IV", cat: "GI" },
      { id: "colchicine", name: "Colchicine 0.5mg PO BID", cat: "Anti-inflammatory" },
      // Diuretic
      { id: "furosemide-iv", name: "Furosemide 40mg IV", cat: "Diuretic" },
      { id: "furosemide-80", name: "Furosemide 80mg IV", cat: "Diuretic" },
    ]
  },
  fluids: {
    label: "IV Fluids",
    icon: "💧",
    items: [
      { id: "ns-bolus", name: "Normal Saline 1L IV bolus", cat: "Crystalloid" },
      { id: "ns-125", name: "Normal Saline 125 mL/hr", cat: "Crystalloid" },
      { id: "lr-bolus", name: "Lactated Ringer's 1L IV bolus", cat: "Crystalloid" },
      { id: "lr-125", name: "Lactated Ringer's 125 mL/hr", cat: "Crystalloid" },
      { id: "d5ns", name: "D5 Normal Saline 125 mL/hr", cat: "Dextrose" },
      { id: "d10", name: "D10W at 100 mL/hr", cat: "Dextrose" },
      { id: "ns-kvo", name: "Normal Saline KVO (10 mL/hr)", cat: "Maintenance" },
    ]
  },
  consults: {
    label: "Consults",
    icon: "👨‍⚕️",
    items: [
      { id: "cards", name: "Cardiology — Emergent" },
      { id: "cards-routine", name: "Cardiology — Routine" },
      { id: "neuro", name: "Neurology — Stroke Alert" },
      { id: "neuro-routine", name: "Neurology — Routine" },
      { id: "surgery", name: "General Surgery — Emergent" },
      { id: "surgery-routine", name: "General Surgery — Routine" },
      { id: "neurosurg", name: "Neurosurgery — Emergent" },
      { id: "icu", name: "ICU/Critical Care" },
      { id: "ir", name: "Interventional Radiology" },
      { id: "gi", name: "Gastroenterology" },
      { id: "pulm", name: "Pulmonology" },
      { id: "id", name: "Infectious Disease" },
      { id: "psych", name: "Psychiatry" },
      { id: "obgyn", name: "OB/GYN" },
      { id: "ortho", name: "Orthopedics" },
      { id: "social-work", name: "Social Work" },
      { id: "palliative", name: "Palliative Care" },
      { id: "chaplain", name: "Chaplain / Spiritual Care" },
    ]
  },
  nursing: {
    label: "Nursing Orders",
    icon: "🏥",
    items: [
      { id: "vs-q15", name: "Vital Signs q15 minutes" },
      { id: "vs-q30", name: "Vital Signs q30 minutes" },
      { id: "vs-q1h", name: "Vital Signs q1 hour" },
      { id: "vs-q4h", name: "Vital Signs q4 hours (routine)" },
      { id: "io", name: "Strict Intake & Output" },
      { id: "fall-precautions", name: "Fall Precautions" },
      { id: "seizure-precautions", name: "Seizure Precautions" },
      { id: "aspiration-precautions", name: "Aspiration Precautions" },
      { id: "npo", name: "NPO (Nothing by Mouth)" },
      { id: "clear-liquid", name: "Clear Liquid Diet" },
      { id: "regular-diet", name: "Regular Diet" },
      { id: "cardiac-diet", name: "Cardiac / Low Sodium Diet" },
      { id: "foley", name: "Insert Foley Catheter" },
      { id: "ng-tube", name: "Insert Nasogastric Tube" },
      { id: "o2-nc", name: "O2 via Nasal Cannula (2-6 L/min)" },
      { id: "o2-nrb", name: "O2 via Non-Rebreather Mask (15 L/min)" },
      { id: "o2-bipap", name: "BiPAP (IPAP 10 / EPAP 5)" },
      { id: "hob-30", name: "Head of Bed elevated ≥30°" },
      { id: "ambulate", name: "Ambulate with Assistance" },
      { id: "restraints", name: "Soft Restraints (bilateral wrist)" },
      { id: "blood-glucose-q1h", name: "Point-of-Care Glucose q1h" },
      { id: "neuro-checks-q1h", name: "Neuro Checks q1 hour" },
      { id: "neuro-checks-q15", name: "Neuro Checks q15 minutes" },
      { id: "wound-care", name: "Wound Care / Dressing Change" },
    ]
  }
};

const CODE_STATUS_OPTIONS = ["Full Code", "DNR/DNI", "DNR Only (allow intubation)", "Comfort Measures Only", "Pending Discussion"];

// ═══════════════════════════════════════════════════════════════
// AI PATIENT RESPONSE (Claude API)
// ═══════════════════════════════════════════════════════════════
function buildSystemPrompt(patient) {
  const v = patient.variant;
  const cf = v.clinicalFacts;
  const cc = cf.chiefComplaint;
  const p = v.patient;
  return `You are ${patient.name}, a ${patient.age}-year-old ${patient.gender} patient in the emergency department.

PERSONALITY: ${p.emotionalState}. ${p.communicationStyle}

YOUR SYMPTOMS:
- Chief complaint in your words: "${cc.patientPhrasing.join('" or "')}"
- Location: ${cc.location}
- Started: ${cc.onset}
- Duration: ${cc.duration}
- Severity: ${cc.severity}
- Worse with: ${cc.aggravating.join(', ')}
- Better with: ${cc.relieving.join(', ')}
${cc.radiation?.length > 0 ? `- Radiates to: ${cc.radiation.join(', ')}` : ''}

ASSOCIATED SYMPTOMS YOU HAVE (confirm if asked):
${cf.associatedSymptoms.present.map(s => `- YES: ${s.name} → "${s.patientSays}"`).join('\n')}

PERTINENT NEGATIVES (deny if asked):
${cf.associatedSymptoms.absent.map(s => `- NO: ${s.name} → "${s.patientSays}"`).join('\n')}

MEDICAL HISTORY: ${cf.pmh.join('; ') || 'None'}
MEDICATIONS: ${cf.medications.map(m => `${m.name} ${m.dose} ("${m.patientSays}")`).join('; ') || 'None'}
ALLERGIES: ${cf.allergies?.map(a => `${a.allergen} → ${a.reaction}`).join('; ') || 'None'}
FAMILY HISTORY: ${cf.familyHistory?.join('; ') || 'None significant'}
SOCIAL: Smoking: ${cf.socialHistory.smoking}. Alcohol: ${cf.socialHistory.alcohol}. Drugs: ${cf.socialHistory.drugs}. Works as: ${cf.socialHistory.occupation}. Lives: ${cf.socialHistory.livingSituation}.

RULES:
1. Stay in character. Use everyday language, not medical terms.
2. Answer ONLY what is asked. Don't volunteer your entire history.
3. Show appropriate emotion. You're ${p.emotionalState.toLowerCase()}.
4. NEVER diagnose yourself or suggest what tests to order.
5. NEVER give the student medical advice.
6. Keep responses to 1-3 sentences unless more detail is specifically requested.
7. Use the word choices above. AVOID: ${cc.avoidPhrasing?.join(', ') || 'none specified'}.
8. If asked about something not specified, respond with reasonable uncertainty as a real patient would.`;
}

async function getAIResponse(question, patient, history) {
  try {
    const messages = history.slice(-20).map(m => ({
      role: m.role === "student" ? "user" : "assistant",
      content: m.text
    }));
    messages.push({ role: "user", content: question });

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: buildSystemPrompt(patient),
        messages
      })
    });
    if (!response.ok) throw new Error(`API ${response.status}`);
    const data = await response.json();
    let text = data.content.map(b => b.text || "").join("");
    // Validate: strip self-diagnosis
    text = text.replace(/i think i('m| am) having a heart attack/gi, "I'm really scared about what's happening");
    text = text.replace(/i think i have /gi, "I'm worried I might have ");
    text = text.replace(/you should order /gi, "Is there something you can do? ");
    return text;
  } catch (e) {
    console.warn("AI response failed, using scripted:", e.message);
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════
// VITAL SIGNS SIMULATOR
// ═══════════════════════════════════════════════════════════════
function simulateVitals(baseVitals) {
  const vary = (val, range) => {
    const num = parseInt(val);
    if (isNaN(num)) return val;
    return String(num + randInt(-range, range));
  };
  const bp = baseVitals.BP.split("/");
  return {
    BP: `${vary(bp[0], 8)}/${vary(bp[1], 5)}`,
    HR: vary(baseVitals.HR, 6) + (baseVitals.HR.includes("irregular") ? " irregular" : ""),
    RR: vary(baseVitals.RR, 2),
    Temp: (parseFloat(baseVitals.Temp) + (Math.random() * 0.4 - 0.2)).toFixed(1) + "°F",
    SpO2: vary(baseVitals.SpO2, 1) + "%",
  };
}

// ═══════════════════════════════════════════════════════════════
// INTERVIEW ENGINE
// ═══════════════════════════════════════════════════════════════
function getResponse(question, patient) {
  const q = question.toLowerCase().trim();
  const cf = patient.variant.clinicalFacts;
  const cc = cf.chiefComplaint;
  const r = patient.variant.responses || {};

  // Chief complaint / opening
  if (/what brings you|why are you here|what'?s wrong|what happened|how can i help|tell me about/i.test(q)) {
    return r.opening || `I've got this ${cc.patientPhrasing[0]} in my ${cc.location}. It started ${cc.onset}.`;
  }
  // Pain/severity scale
  if (/how bad|scale|1.to.10|rate.*pain|severity|how much.*hurt|how much.*bother/i.test(q)) {
    return r.severity || cc.severity || "It's pretty bad, I'd say a 7 or 8.";
  }
  // Location
  if (/where.*(pain|hurt|bother|feel)|point|show me|locat/i.test(q)) {
    return r.location || `It's in my ${cc.location}.`;
  }
  // Onset / when
  if (/when.*(start|begin|first|notice)|how long|onset/i.test(q)) {
    return r.onset || `It started ${cc.onset}. It's been ${cc.duration}.`;
  }
  // Character / quality
  if (/describe|what does it feel|character|quality|type of|kind of/i.test(q)) {
    return r.character || `It feels ${cc.patientPhrasing.slice(0, 2).join(", kind of ")}.`;
  }
  // Worse
  if (/worse|aggravat|exacerbat|increase/i.test(q)) {
    return r.worse || (cc.aggravating?.length ? `It gets worse when ${cc.aggravating.join(" or when ")}.` : "Nothing specific makes it worse.");
  }
  // Better
  if (/better|reliev|help|improv|decreas/i.test(q)) {
    return r.better || (cc.relieving?.length ? `${cc.relieving.join(" and ")} seem to help.` : "Nothing really helps.");
  }
  // Radiation
  if (/radiat|spread|travel|go.*anywhere|move.*anywhere/i.test(q)) {
    return r.radiation || (cc.radiation?.length > 0 && cc.radiation[0] !== "no radiation" ? `Yes, it goes to my ${cc.radiation.join(" and ")}.` : "No, it stays in one spot.");
  }
  // Timing
  if (/timing|when does it|time of day|pattern|constant|come and go|intermit/i.test(q)) {
    return r.timing || cc.timing || "It's been pretty constant.";
  }

  // Associated symptoms — check each
  const allSymptoms = [...cf.associatedSymptoms.present, ...cf.associatedSymptoms.absent];
  for (const s of allSymptoms) {
    const keywords = s.name.toLowerCase().split(/[\s/(),-]+/).filter(w => w.length > 3);
    if (keywords.some(kw => q.includes(kw))) {
      return s.patientSays;
    }
  }
  // Generic symptom questions
  if (/nausea|vomit|throw up|sick to/i.test(q)) {
    const ns = allSymptoms.find(s => s.name.toLowerCase().includes("nausea"));
    if (ns) return ns.patientSays;
  }
  if (/sweat|diaphor/i.test(q)) {
    const ds = allSymptoms.find(s => s.name.toLowerCase().includes("diaphor") || s.name.toLowerCase().includes("sweat"));
    if (ds) return ds.patientSays;
  }
  if (/breath|dyspnea|short of|winded|SOB/i.test(q)) {
    const bs = allSymptoms.find(s => s.name.toLowerCase().includes("dyspnea") || s.name.toLowerCase().includes("breath") || s.name.toLowerCase().includes("orthopnea"));
    if (bs) return bs.patientSays;
  }
  if (/dizz|lightheaded|faint|syncope|pass out/i.test(q)) {
    const ls = allSymptoms.find(s => /dizz|lightheaded|syncope/i.test(s.name));
    if (ls) return ls.patientSays;
  }
  if (/cough/i.test(q)) {
    const cs = allSymptoms.find(s => s.name.toLowerCase().includes("cough"));
    if (cs) return cs.patientSays;
  }
  if (/fever|temperature|chills/i.test(q)) {
    const fs = allSymptoms.find(s => s.name.toLowerCase().includes("fever"));
    if (fs) return fs.patientSays;
  }
  if (/swell|edema|ankle|feet|leg/i.test(q)) {
    const ls = allSymptoms.find(s => s.name.toLowerCase().includes("swell") || s.name.toLowerCase().includes("edema") || s.name.toLowerCase().includes("leg"));
    if (ls) return ls.patientSays;
  }
  if (/travel|trip|fly|plane/i.test(q)) {
    const ts = allSymptoms.find(s => s.name.toLowerCase().includes("travel"));
    if (ts) return ts.patientSays;
  }
  if (/weight|gain|pound/i.test(q)) {
    const ws = allSymptoms.find(s => s.name.toLowerCase().includes("weight"));
    if (ws) return ws.patientSays;
  }
  if (/urine|pee|urinar|void/i.test(q)) {
    const us = allSymptoms.find(s => s.name.toLowerCase().includes("urin"));
    if (us) return us.patientSays;
  }
  if (/sleep|pillow|flat|lie down|lying|reclin|PND|paroxysmal/i.test(q)) {
    const os = allSymptoms.find(s => s.name.toLowerCase().includes("orthopnea") || s.name.toLowerCase().includes("pnd") || s.name.toLowerCase().includes("positional"));
    if (os) return os.patientSays;
  }
  if (/viral|cold|flu|sick recently|ill recently|infection/i.test(q)) {
    const vs = allSymptoms.find(s => s.name.toLowerCase().includes("viral") || s.name.toLowerCase().includes("upper respiratory") || s.name.toLowerCase().includes("recent"));
    if (vs) return vs.patientSays;
  }
  // Weakness / motor
  if (/weak|strength|move|lift.*arm|lift.*leg|grip|motor|paralyz|paralys/i.test(q)) {
    const ws = allSymptoms.find(s => /weak|strength|arm|hemipar|motor|paralys/i.test(s.name));
    if (ws) return ws.patientSays;
  }
  // Facial droop / asymmetry
  if (/face|facial|droop|smile|asymmetr/i.test(q)) {
    const fs = allSymptoms.find(s => /facial|droop|face/i.test(s.name));
    if (fs) return fs.patientSays;
  }
  // Speech / aphasia
  if (/speech|speak|talk|word|aphasi|slur|language/i.test(q)) {
    const ss = allSymptoms.find(s => /speech|word|aphasi|slur|language|finding words/i.test(s.name));
    if (ss) return ss.patientSays;
  }
  // Confusion / mental status
  if (/confus|orient|mental status|think|foggy|clear.*head|altered|aware/i.test(q)) {
    const cs = allSymptoms.find(s => /confus|mental|altered|orient/i.test(s.name));
    if (cs) return cs.patientSays;
  }
  // Vision
  if (/vision|see|sight|blind|blur|double|visual/i.test(q)) {
    const vs = allSymptoms.find(s => /vision|visual|blur|sight|aura/i.test(s.name));
    if (vs) return vs.patientSays;
  }
  // Seizure
  if (/seizure|convuls|shak|fit|jerk|epilep/i.test(q) && !/shaky/i.test(q)) {
    const ss = allSymptoms.find(s => /seizure|convuls/i.test(s.name));
    if (ss) return ss.patientSays;
  }
  // Neck stiffness
  if (/neck|stiff|nuchal|meningeal/i.test(q)) {
    const ns = allSymptoms.find(s => /neck|stiff|nuchal/i.test(s.name));
    if (ns) return ns.patientSays;
  }
  // Rash / petechiae
  if (/rash|petechiae|purpur|spots|skin|bruise/i.test(q)) {
    const rs = allSymptoms.find(s => /rash|petechiae|purpur/i.test(s.name));
    if (rs) return rs.patientSays;
  }
  // Tremor / shaking
  if (/tremor|shak|trembl/i.test(q)) {
    const ts = allSymptoms.find(s => /tremor|shak|trembl/i.test(s.name));
    if (ts) return ts.patientSays;
  }
  // Loss of consciousness / syncope
  if (/pass out|black out|faint|consciousness|LOC|unrespons|slump/i.test(q)) {
    const ls = allSymptoms.find(s => /consciousness|syncope|LOC|pass out|slump/i.test(s.name));
    if (ls) return ls.patientSays;
  }
  // Fall
  if (/fall|fell|trip|stumbl/i.test(q)) {
    const fs = allSymptoms.find(s => /fall|fell/i.test(s.name));
    if (fs) return fs.patientSays;
  }
  // Headache for neuro cases
  if (/headache|head hurt|head pain|migraine/i.test(q)) {
    const hs = allSymptoms.find(s => /headache|head/i.test(s.name));
    if (hs) return hs.patientSays;
    // Fall back to chief complaint if this IS a headache case
    if (patient.chiefComplaint === "Headache") return r.opening || "Yes, that's the main problem.";
  }
  // Body aches
  if (/body.*ache|myalgia|muscle.*pain|ache all over/i.test(q)) {
    const bs = allSymptoms.find(s => /body.*ache|myalgia/i.test(s.name));
    if (bs) return bs.patientSays;
  }
  // Missed meals / eating (for hypoglycemia)
  if (/eat|meal|food|last ate|NPO|hungry|appetite/i.test(q)) {
    const ms = allSymptoms.find(s => /meal|eat|anorexia|appetite/i.test(s.name));
    if (ms) return ms.patientSays;
    return "I had a little something this morning, maybe around 7 AM. Wasn't very hungry though.";
  }

  // Medications
  if (/medic|medicine|pill|prescription|taking|drug/i.test(q) && !/illicit|illegal|street|recreational/i.test(q)) {
    if (cf.medications.length && cf.medications[0].name !== "None") {
      return cf.medications.map(m => m.patientSays).join(" ");
    }
    return "I don't take any medications.";
  }
  // Specific medication compliance
  if (/compli|take.*regular|miss|run out|refill/i.test(q)) {
    const nonCompliant = cf.medications.find(m => m.patientSays && /forget|ran out|miss/i.test(m.patientSays));
    if (nonCompliant) return nonCompliant.patientSays;
    return "I take everything like I'm supposed to.";
  }
  // Allergies
  if (/allerg/i.test(q)) {
    return cf.allergies?.length ? cf.allergies.map(a => a.patientSays).join(" ") : "No allergies that I know of.";
  }
  // PMH
  if (/medical history|health problem|medical problem|past.*history|chronic|condition|diagnos/i.test(q)) {
    return cf.pmh?.length ? cf.pmh.join(". ") + "." : "I've been pretty healthy overall.";
  }
  // Surgical history
  if (/surg|operation|procedure/i.test(q)) {
    return "No surgeries.";
  }
  // Family history
  if (/family|mother|father|parent|sibling|brother|sister|heredit|genetic/i.test(q)) {
    return cf.familyHistory?.length ? cf.familyHistory.join(". ") + "." : "Nothing significant in my family.";
  }
  // Social history - smoking
  if (/smok|tobacco|cigarette|vape|nicotine/i.test(q)) {
    return cf.socialHistory.smoking;
  }
  // Social history - alcohol
  if (/alcohol|drink|beer|wine|liquor/i.test(q)) {
    return cf.socialHistory.alcohol;
  }
  // Social history - drugs
  if (/illicit|illegal|street drug|recreational|cocaine|marijuana|heroin|meth/i.test(q)) {
    return cf.socialHistory.drugs;
  }
  // Occupation
  if (/work|job|occupation|employ|do for a living/i.test(q)) {
    return cf.socialHistory.occupation;
  }
  // Living situation
  if (/live|home|who.*with|alone|married|spouse|partner/i.test(q)) {
    return cf.socialHistory.livingSituation;
  }
  // Code status / wishes
  if (/code status|DNR|resuscit|advance directive|living will/i.test(q)) {
    return "I... I haven't really thought about that. I want everything done. Full code, I guess.";
  }

  // Generic fallbacks
  const fallbacks = [
    "I'm not sure about that. Can you ask me differently?",
    "Hmm, I don't think so? Can you be more specific?",
    "I'm not sure how to answer that. What do you mean exactly?",
    "I don't think that's a problem for me. Is there something specific you're worried about?"
  ];
  return randPick(fallbacks);
}

// ═══════════════════════════════════════════════════════════════
// INTERVIEW PROGRESS TRACKER
// ═══════════════════════════════════════════════════════════════
function analyzeProgress(interviewHistory, patient) {
  const questions = interviewHistory.filter(m => m.role === "student").map(m => m.text.toLowerCase());
  const allQ = questions.join(" ");
  const cf = patient.variant.clinicalFacts;

  // OLDCARTS tracking
  const oldcarts = {
    onset: { label: "Onset", covered: /when.*(start|begin)|how long|onset|how did.*(start|begin)/.test(allQ) },
    location: { label: "Location", covered: /where.*(hurt|pain|bother|feel)|locat|point|show me/.test(allQ) },
    duration: { label: "Duration", covered: /how long|duration|how many (day|hour|minute)|since when|still/.test(allQ) },
    character: { label: "Character", covered: /describe|what does it feel|character|quality|type of|kind of|what is it like/.test(allQ) },
    aggravating: { label: "Aggravating", covered: /worse|aggravat|exacerbat|increase|trigger/.test(allQ) },
    relieving: { label: "Relieving", covered: /better|reliev|help|improv|ease/.test(allQ) },
    timing: { label: "Timing", covered: /timing|when does it|time of day|pattern|constant|come and go|intermit|how often/.test(allQ) },
    severity: { label: "Severity", covered: /how bad|scale|1.to.10|rate|severity|how much/.test(allQ) },
  };

  // History components
  const history = {
    cc: { label: "Chief Complaint", covered: /what brings|why are you|what'?s wrong|what happened|how can i help|tell me about/.test(allQ) },
    pmh: { label: "Past Medical Hx", covered: /medical history|health problem|medical problem|past.*history|chronic|condition|diagnos/.test(allQ) },
    meds: { label: "Medications", covered: /medic|medicine|pill|prescription|taking/.test(allQ) && !/illicit|illegal/.test(allQ) },
    allergies: { label: "Allergies", covered: /allerg/.test(allQ) },
    family: { label: "Family History", covered: /family|mother|father|parent|sibling|brother|sister/.test(allQ) },
    social: { label: "Social History", covered: /smok|tobacco|alcohol|drink|drug|illicit|occupation|work|job|live|home|married/.test(allQ) },
    surgical: { label: "Surgical History", covered: /surg|operation|procedure/.test(allQ) },
  };

  // Associated symptoms explored
  const allSymptoms = [...cf.associatedSymptoms.present, ...cf.associatedSymptoms.absent];
  const symptomsAsked = allSymptoms.filter(s => {
    const keywords = s.name.toLowerCase().split(/[\s/(),-]+/).filter(w => w.length > 3);
    return keywords.some(kw => allQ.includes(kw));
  });
  const symptomsTotal = allSymptoms.length;

  const oldcartsCount = Object.values(oldcarts).filter(o => o.covered).length;
  const historyCount = Object.values(history).filter(h => h.covered).length;
  const overallPct = Math.round(((oldcartsCount + historyCount + symptomsAsked.length) / (8 + 7 + symptomsTotal)) * 100);

  return { oldcarts, history, symptomsAsked, symptomsTotal, oldcartsCount, historyCount, overallPct };
}

// ═══════════════════════════════════════════════════════════════
// TIME DISPLAY
// ═══════════════════════════════════════════════════════════════
function timeAgo(date) {
  const mins = Math.floor((Date.now() - new Date(date).getTime()) / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m`;
  return `${Math.floor(mins / 60)}h ${mins % 60}m`;
}

// ═══════════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════════
const acuityColors = {
  1: { bg: "#FEE2E2", border: "#DC2626", text: "#991B1B", dot: "#DC2626", label: "ESI-1 Resuscitation" },
  2: { bg: "#FEE2E2", border: "#EF4444", text: "#991B1B", dot: "#EF4444", label: "ESI-2 Emergent" },
  3: { bg: "#FEF3C7", border: "#F59E0B", text: "#92400E", dot: "#F59E0B", label: "ESI-3 Urgent" },
  4: { bg: "#DCFCE7", border: "#22C55E", text: "#166534", dot: "#22C55E", label: "ESI-4 Less Urgent" },
  5: { bg: "#DBEAFE", border: "#3B82F6", text: "#1E40AF", dot: "#3B82F6", label: "ESI-5 Non-Urgent" },
};

const statusLabels = {
  "ed-waiting": "Waiting",
  "ed-being-seen": "Being Seen",
  "ed-labs-pending": "Labs Pending",
  "ed-imaging-pending": "Imaging Pending",
  "ed-results-ready": "Results Ready",
  "ed-disposition-pending": "Dispo Pending",
  "discharged": "Discharged",
  "admitted": "Admitted",
};

// ═══════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════
export default function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [activeTab, setActiveTab] = useState("interview");
  const [questionInput, setQuestionInput] = useState("");
  const [seenVariants, setSeenVariants] = useState({});
  const [noteText, setNoteText] = useState("");
  const [showTeaching, setShowTeaching] = useState(false);
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [completedCases, setCompletedCases] = useState(0);
  const [showProgress, setShowProgress] = useState(true);
  const [ddxInput, setDdxInput] = useState("");
  const [ddxConfidence, setDdxConfidence] = useState(50);
  const [useAI, setUseAI] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);
  const [orderCategory, setOrderCategory] = useState("labs");
  const [orderSearch, setOrderSearch] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("rdx-vh-state") || "null");
      if (saved) {
        setPatients(saved.patients || []);
        setSeenVariants(saved.seenVariants || {});
        setCompletedCases(saved.completedCases || 0);
      }
    } catch (e) { /* fresh start */ }
  }, []);

  useEffect(() => {
    if (patients.length > 0 || Object.keys(seenVariants).length > 0) {
      localStorage.setItem("rdx-vh-state", JSON.stringify({ patients, seenVariants, completedCases }));
    }
  }, [patients, seenVariants, completedCases]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedPatient?.interviewHistory]);

  const addPatient = useCallback((templateId) => {
    const template = CASE_TEMPLATES.find(t => t.id === templateId);
    if (!template) return;
    const seen = seenVariants[templateId] || [];
    const unseen = template.variants.filter(v => !seen.includes(v.id));
    const pool = unseen.length > 0 ? unseen : template.variants;
    const variant = randPick(pool);
    const usedBeds = patients.filter(p => !p.dispositioned).map(p => p.bed);
    const pt = generatePatient(template, variant, usedBeds);
    setPatients(prev => [...prev, pt]);
    setSeenVariants(prev => ({
      ...prev,
      [templateId]: [...(prev[templateId] || []), variant.id]
    }));
    setShowAddPatient(false);
  }, [patients, seenVariants]);

  const selectPatient = (pt) => {
    if (pt.status === "ed-waiting") {
      setPatients(prev => prev.map(p => p.id === pt.id ? { ...p, status: "ed-being-seen" } : p));
    }
    setSelectedPatient(pt);
    setActiveTab("interview");
    setShowTeaching(false);
    setNoteText("");
  };

  const askQuestion = async () => {
    if (!questionInput.trim() || !selectedPatient || aiLoading) return;
    const q = questionInput;
    setQuestionInput("");

    // Add student message immediately
    const withQuestion = {
      ...selectedPatient,
      interviewHistory: [...selectedPatient.interviewHistory, { role: "student", text: q, ts: Date.now() }]
    };
    setSelectedPatient(withQuestion);
    setPatients(prev => prev.map(p => p.id === withQuestion.id ? withQuestion : p));

    // Try AI first, fall back to scripted
    let response;
    if (useAI) {
      setAiLoading(true);
      response = await getAIResponse(q, selectedPatient, selectedPatient.interviewHistory);
      setAiLoading(false);
    }
    if (!response) {
      response = getResponse(q, selectedPatient);
    }

    const updated = {
      ...withQuestion,
      interviewHistory: [...withQuestion.interviewHistory, { role: "patient", text: response, ts: Date.now(), ai: useAI && !!response }],
      aiCallCount: (withQuestion.aiCallCount || 0) + (useAI ? 1 : 0)
    };
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const orderTest = (testName) => {
    if (!selectedPatient || selectedPatient.orderedTests.includes(testName)) return;
    const updated = { ...selectedPatient, orderedTests: [...selectedPatient.orderedTests, testName] };
    if (["ed-being-seen", "ed-waiting"].includes(selectedPatient.status)) {
      updated.status = /x-ray|ct |us |echo|imaging/i.test(testName) ? "ed-imaging-pending" : "ed-labs-pending";
    }
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
    // Simulate turnaround
    const menuItem = Object.values(ORDER_MENU).flatMap(c => c.items).find(i => i.name === testName);
    const delay = (menuItem?.turnaround || 30) * 100; // Compressed time
    setTimeout(() => {
      setSelectedPatient(prev => {
        if (!prev || prev.id !== updated.id) return prev;
        const u2 = { ...prev, completedTests: [...prev.completedTests, testName], status: "ed-results-ready" };
        setPatients(pp => pp.map(p => p.id === u2.id ? u2 : p));
        return u2;
      });
    }, Math.min(delay, 5000));
  };

  const orderMed = (medName) => {
    if (!selectedPatient) return;
    const entry = { name: medName, time: new Date().toISOString(), status: "administered" };
    const updated = { ...selectedPatient, orderedMeds: [...(selectedPatient.orderedMeds || []), entry] };
    // Add nursing note for med
    updated.nursingNotes = [...(updated.nursingNotes || []), { time: new Date().toISOString(), author: "RN", text: `Administered: ${medName}` }];
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const orderConsult = (consultName) => {
    if (!selectedPatient) return;
    const entry = { name: consultName, time: new Date().toISOString(), status: "pending" };
    const updated = { ...selectedPatient, orderedConsults: [...(selectedPatient.orderedConsults || []), entry] };
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const orderNursing = (orderName) => {
    if (!selectedPatient) return;
    const entry = { name: orderName, time: new Date().toISOString(), status: "active" };
    const updated = { ...selectedPatient, orderedNursing: [...(selectedPatient.orderedNursing || []), entry] };
    updated.nursingNotes = [...(updated.nursingNotes || []), { time: new Date().toISOString(), author: "RN", text: `Order acknowledged: ${orderName}` }];
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const orderFluid = (fluidName) => {
    if (!selectedPatient) return;
    const entry = { name: fluidName, time: new Date().toISOString(), status: "infusing" };
    const updated = { ...selectedPatient, orderedMeds: [...(selectedPatient.orderedMeds || []), entry] };
    updated.nursingNotes = [...(updated.nursingNotes || []), { time: new Date().toISOString(), author: "RN", text: `IV started: ${fluidName}` }];
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const setCodeStatus = (status) => {
    if (!selectedPatient) return;
    const updated = { ...selectedPatient, codeStatus: status };
    updated.nursingNotes = [...(updated.nursingNotes || []), { time: new Date().toISOString(), author: "RN", text: `Code status updated: ${status}` }];
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const recheckVitals = () => {
    if (!selectedPatient) return;
    const newVitals = simulateVitals(selectedPatient.physicalExam.vitalSigns);
    const entry = { time: new Date().toISOString(), label: `Recheck #${(selectedPatient.vitalsLog || []).length}`, ...newVitals, source: "RN" };
    const updated = { ...selectedPatient, vitalsLog: [...(selectedPatient.vitalsLog || []), entry] };
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const performExam = () => {
    if (!selectedPatient) return;
    const updated = { ...selectedPatient, examPerformed: true };
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
    setActiveTab("exam");
  };

  const saveNote = () => {
    if (!noteText.trim() || !selectedPatient) return;
    const note = { id: `note-${Date.now()}`, text: noteText, type: "ED Physician Note", author: "You (Medical Student)", ts: new Date().toISOString() };
    const updated = { ...selectedPatient, notes: [...selectedPatient.notes, note] };
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
    setNoteText("");
  };

  const addDdx = () => {
    if (!ddxInput.trim() || !selectedPatient) return;
    const entry = { id: `ddx-${Date.now()}`, diagnosis: ddxInput.trim(), confidence: ddxConfidence, ts: Date.now() };
    const ddxList = selectedPatient.ddxList || [];
    const updated = { ...selectedPatient, ddxList: [...ddxList, entry] };
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
    setDdxInput("");
    setDdxConfidence(50);
  };

  const removeDdx = (ddxId) => {
    if (!selectedPatient) return;
    const updated = { ...selectedPatient, ddxList: (selectedPatient.ddxList || []).filter(d => d.id !== ddxId) };
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const updateDdxConfidence = (ddxId, newConf) => {
    if (!selectedPatient) return;
    const updated = { ...selectedPatient, ddxList: (selectedPatient.ddxList || []).map(d => d.id === ddxId ? { ...d, confidence: newConf } : d) };
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const dispositionPatient = (type) => {
    if (!selectedPatient) return;
    const updated = { ...selectedPatient, dispositioned: true, disposition: type, status: type === "discharge" ? "discharged" : "admitted" };
    setSelectedPatient(updated);
    setPatients(prev => prev.map(p => p.id === updated.id ? updated : p));
    setCompletedCases(prev => prev + 1);
    setShowTeaching(true);
  };

  const resetAll = () => {
    localStorage.removeItem("rdx-vh-state");
    setPatients([]);
    setSelectedPatient(null);
    setSeenVariants({});
    setCompletedCases(0);
  };

  const activePatients = patients.filter(p => !p.dispositioned);
  const completedPatients = patients.filter(p => p.dispositioned);

  // ═════════════════════════════════════════════════
  // RENDER
  // ═════════════════════════════════════════════════
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: "#F1F5F9", minHeight: "100vh", color: "#1a1a2e" }}>
      {/* ─── HEADER ─── */}
      <div style={{ background: "linear-gradient(135deg, #1B4F72 0%, #2874A6 100%)", color: "white", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>🏥</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em" }}>ReasonDx Virtual Hospital</div>
            <div style={{ fontSize: 11, opacity: 0.8 }}>Emergency Department</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 12 }}>
          <span style={{ background: "rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: 20, fontSize: 11 }}>
            Cases: {completedCases}
          </span>
          <button onClick={resetAll} style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "none", padding: "4px 10px", borderRadius: 6, cursor: "pointer", fontSize: 11 }}>Reset</button>
        </div>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 52px)" }}>
        {/* ─── ED BOARD (LEFT PANEL) ─── */}
        <div style={{ width: selectedPatient ? 320 : "100%", borderRight: "1px solid #E2E8F0", background: "white", overflowY: "auto", transition: "width 0.3s ease", flexShrink: 0 }}>
          <div style={{ padding: "12px 16px", borderBottom: "1px solid #E2E8F0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: "#1B4F72" }}>ED Tracking Board</div>
            <button onClick={() => setShowAddPatient(true)} style={{ background: "#2874A6", color: "white", border: "none", padding: "6px 12px", borderRadius: 6, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>+ New Patient</button>
          </div>

          {showAddPatient && (
            <div style={{ padding: 12, borderBottom: "1px solid #E2E8F0", background: "#F8FAFC" }}>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, color: "#64748B" }}>Select Presentation:</div>
              {CASE_TEMPLATES.map(t => {
                const seen = seenVariants[t.id] || [];
                const totalV = t.variants.length;
                return (
                  <button key={t.id} onClick={() => addPatient(t.id)} style={{ display: "block", width: "100%", padding: "8px 12px", marginBottom: 4, background: "white", border: "1px solid #E2E8F0", borderRadius: 6, cursor: "pointer", textAlign: "left", fontSize: 13 }}>
                    <span style={{ fontWeight: 500 }}>{t.presentation}</span>
                    <span style={{ float: "right", fontSize: 11, color: "#64748B" }}>{seen.length}/{totalV} seen</span>
                  </button>
                );
              })}
              <button onClick={() => setShowAddPatient(false)} style={{ marginTop: 4, fontSize: 11, color: "#64748B", background: "none", border: "none", cursor: "pointer" }}>Cancel</button>
            </div>
          )}

          {activePatients.length === 0 && !showAddPatient && (
            <div style={{ padding: 40, textAlign: "center", color: "#94A3B8" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>🏥</div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>ED Board is Empty</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>Click "+ New Patient" to start your shift</div>
            </div>
          )}

          {activePatients.map(pt => {
            const ac = acuityColors[pt.acuity] || acuityColors[3];
            const isSelected = selectedPatient?.id === pt.id;
            return (
              <div key={pt.id} onClick={() => selectPatient(pt)} style={{ padding: "10px 16px", borderBottom: "1px solid #F1F5F9", cursor: "pointer", background: isSelected ? "#EBF5FB" : "white", borderLeft: `3px solid ${ac.dot}`, transition: "background 0.15s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#64748B" }}>Bed {pt.bed}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, marginLeft: 8 }}>{pt.name}</span>
                    <span style={{ fontSize: 12, color: "#64748B", marginLeft: 6 }}>{pt.age}{pt.gender === "male" ? "M" : "F"}</span>
                  </div>
                  <span style={{ fontSize: 10, color: "#94A3B8" }}>{timeAgo(pt.arrivalTime)}</span>
                </div>
                <div style={{ marginTop: 4, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 12, color: "#334155" }}>{pt.chiefComplaint}</span>
                </div>
                <div style={{ marginTop: 4, display: "flex", gap: 6 }}>
                  <span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 10, background: ac.bg, color: ac.text, fontWeight: 600, border: `1px solid ${ac.border}` }}>{ac.label}</span>
                  <span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 10, background: "#F1F5F9", color: "#475569" }}>{statusLabels[pt.status]}</span>
                </div>
              </div>
            );
          })}

          {completedPatients.length > 0 && (
            <>
              <div style={{ padding: "8px 16px", fontSize: 11, fontWeight: 600, color: "#94A3B8", background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>COMPLETED ({completedPatients.length})</div>
              {completedPatients.slice(-5).reverse().map(pt => (
                <div key={pt.id} onClick={() => { setSelectedPatient(pt); setShowTeaching(true); }} style={{ padding: "8px 16px", borderBottom: "1px solid #F8FAFC", cursor: "pointer", opacity: 0.6, fontSize: 12 }}>
                  <span style={{ fontWeight: 500 }}>{pt.name}</span> — <span style={{ color: pt.disposition === "discharge" ? "#22C55E" : "#3B82F6" }}>{pt.disposition === "discharge" ? "Discharged" : "Admitted"}</span>
                  <span style={{ fontSize: 10, color: "#94A3B8", marginLeft: 8 }}>Dx: {pt.diagnosis}</span>
                </div>
              ))}
            </>
          )}
        </div>

        {/* ─── PATIENT DETAIL (RIGHT PANEL) ─── */}
        {selectedPatient && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Patient Banner */}
            <div style={{ padding: "10px 20px", background: "white", borderBottom: "1px solid #E2E8F0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span style={{ fontWeight: 700, fontSize: 15 }}>{selectedPatient.name}</span>
                <span style={{ color: "#64748B", fontSize: 13, marginLeft: 8 }}>{selectedPatient.age}{selectedPatient.gender === "male" ? "M" : "F"}</span>
                <span style={{ color: "#94A3B8", fontSize: 12, marginLeft: 8 }}>MRN: {selectedPatient.mrn}</span>
                <span style={{ color: "#94A3B8", fontSize: 12, marginLeft: 8 }}>Bed {selectedPatient.bed}</span>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {!selectedPatient.dispositioned && (
                  <>
                    <button onClick={() => dispositionPatient("discharge")} style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid #22C55E", background: "#DCFCE7", color: "#166534", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Discharge</button>
                    <button onClick={() => dispositionPatient("admit")} style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid #3B82F6", background: "#DBEAFE", color: "#1E40AF", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Admit</button>
                  </>
                )}
                <button onClick={() => setSelectedPatient(null)} style={{ padding: "5px 10px", borderRadius: 6, border: "1px solid #E2E8F0", background: "white", color: "#64748B", fontSize: 12, cursor: "pointer" }}>✕</button>
              </div>
            </div>

            {/* Vitals Bar */}
            <div style={{ padding: "6px 20px", background: "#F8FAFC", borderBottom: "1px solid #E2E8F0", display: "flex", gap: 16, fontSize: 12 }}>
              {Object.entries(selectedPatient.physicalExam.vitalSigns).map(([k, v]) => (
                <span key={k}><strong>{k}:</strong> <span style={{ color: v.includes("irregular") || (k === "SpO2" && parseInt(v) < 93) || (k === "HR" && parseInt(v) > 100) || (k === "RR" && parseInt(v) > 20) ? "#DC2626" : "#334155" }}>{v}</span></span>
              ))}
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", borderBottom: "1px solid #E2E8F0", background: "white", overflowX: "auto" }}>
              {["interview", "exam", "vitals", "orders", "results", "chart", "notes", "ddx", "teaching"].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: "8px 12px", fontSize: 11, fontWeight: activeTab === tab ? 600 : 400, color: activeTab === tab ? "#2874A6" : "#64748B", background: "none", border: "none", borderBottom: activeTab === tab ? "2px solid #2874A6" : "2px solid transparent", cursor: "pointer", whiteSpace: "nowrap" }}>
                  {tab === "interview" ? "🗣 Interview" : tab === "exam" ? "🩺 Exam" : tab === "vitals" ? "📊 Vitals" : tab === "orders" ? "📋 Orders" : tab === "results" ? "🔬 Results" : tab === "chart" ? "📂 Chart" : tab === "notes" ? "📝 Notes" : tab === "ddx" ? "🧠 DDx" : "📚 Teaching"}
                  {tab === "results" && selectedPatient.completedTests.length > 0 && (
                    <span style={{ marginLeft: 4, background: "#DC2626", color: "white", borderRadius: 10, padding: "1px 5px", fontSize: 10 }}>{selectedPatient.completedTests.length}</span>
                  )}
                  {tab === "orders" && (selectedPatient.orderedTests.length + (selectedPatient.orderedMeds||[]).length + (selectedPatient.orderedConsults||[]).length) > 0 && (
                    <span style={{ marginLeft: 4, background: "#2874A6", color: "white", borderRadius: 10, padding: "1px 5px", fontSize: 10 }}>{selectedPatient.orderedTests.length + (selectedPatient.orderedMeds||[]).length + (selectedPatient.orderedConsults||[]).length}</span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>

              {/* ─── INTERVIEW TAB ─── */}
              {activeTab === "interview" && (() => {
                const progress = selectedPatient.interviewHistory.length > 0 ? analyzeProgress(selectedPatient.interviewHistory, selectedPatient) : null;
                return (
                <div style={{ display: "flex", gap: 0, height: "100%" }}>
                  {/* Chat area */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    {selectedPatient.interviewHistory.length === 0 && (
                      <div style={{ padding: 20, textAlign: "center", color: "#94A3B8", background: "#F8FAFC", borderRadius: 8, marginBottom: 16 }}>
                        <div style={{ fontSize: 14, fontWeight: 500 }}>Patient is in Bed {selectedPatient.bed}</div>
                        <div style={{ fontSize: 12, marginTop: 4 }}>{selectedPatient.variant.patient.emotionalState}</div>
                        <div style={{ fontSize: 12, marginTop: 8, fontStyle: "italic" }}>Ask a question to begin the interview.</div>
                      </div>
                    )}
                    <div style={{ flex: 1, overflowY: "auto", marginBottom: 80 }}>
                      {selectedPatient.interviewHistory.map((msg, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: msg.role === "student" ? "flex-end" : "flex-start", marginBottom: 8 }}>
                          <div style={{ maxWidth: showProgress && progress ? "90%" : "80%", padding: "8px 12px", borderRadius: msg.role === "student" ? "12px 12px 2px 12px" : "12px 12px 12px 2px", background: msg.role === "student" ? "#2874A6" : "white", color: msg.role === "student" ? "white" : "#1a1a2e", fontSize: 13, lineHeight: 1.5, border: msg.role === "patient" ? "1px solid #E2E8F0" : "none", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                      <div ref={chatEndRef} />
                      {aiLoading && (
                        <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 8 }}>
                          <div style={{ padding: "8px 16px", borderRadius: "12px 12px 12px 2px", background: "white", border: "1px solid #E2E8F0", fontSize: 13, color: "#94A3B8" }}>
                            <span style={{ animation: "pulse 1.5s infinite" }}>Patient is thinking...</span>
                          </div>
                        </div>
                      )}
                    </div>
                    {!selectedPatient.dispositioned && (
                      <div style={{ position: "sticky", bottom: 0, background: "#F1F5F9", padding: "12px 0" }}>
                        <div style={{ display: "flex", gap: 8 }}>
                          <input value={questionInput} onChange={e => setQuestionInput(e.target.value)} onKeyDown={e => e.key === "Enter" && !aiLoading && askQuestion()} placeholder={aiLoading ? "Waiting for response..." : "Ask the patient a question..."} disabled={aiLoading} style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13, outline: "none", opacity: aiLoading ? 0.6 : 1 }} />
                          <button onClick={askQuestion} disabled={aiLoading} style={{ padding: "10px 18px", borderRadius: 8, background: aiLoading ? "#94A3B8" : "#2874A6", color: "white", border: "none", cursor: aiLoading ? "wait" : "pointer", fontWeight: 600, fontSize: 13 }}>{aiLoading ? "..." : "Ask"}</button>
                        </div>
                        <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap", alignItems: "center" }}>
                          {["What brings you in?", "Medical history?", "Medications?", "Allergies?", "Family history?", "How bad is it?", "What makes it worse?", "What makes it better?"].map(q => (
                            <button key={q} onClick={() => { setQuestionInput(q); }} style={{ padding: "4px 10px", borderRadius: 14, background: "white", border: "1px solid #E2E8F0", fontSize: 11, color: "#64748B", cursor: "pointer" }}>{q}</button>
                          ))}
                          <span style={{ marginLeft: "auto" }}>
                            <button onClick={() => setUseAI(!useAI)} style={{ padding: "3px 8px", borderRadius: 4, background: useAI ? "#DCFCE7" : "#F1F5F9", border: `1px solid ${useAI ? "#22C55E" : "#CBD5E1"}`, fontSize: 10, color: useAI ? "#166534" : "#94A3B8", cursor: "pointer", fontWeight: 600 }}>
                              {useAI ? "🤖 AI On" : "📝 Scripted"}
                            </button>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Progress Tracker Panel */}
                  {progress && showProgress && (
                    <div style={{ width: 220, borderLeft: "1px solid #E2E8F0", background: "#FAFBFC", overflowY: "auto", padding: 12, flexShrink: 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#1B4F72", textTransform: "uppercase", letterSpacing: "0.05em" }}>Progress</div>
                        <button onClick={() => setShowProgress(false)} style={{ background: "none", border: "none", color: "#94A3B8", cursor: "pointer", fontSize: 14, lineHeight: 1 }}>×</button>
                      </div>

                      {/* Overall Score */}
                      <div style={{ textAlign: "center", marginBottom: 12, padding: 10, background: "white", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                        <div style={{ fontSize: 28, fontWeight: 800, color: progress.overallPct >= 70 ? "#22C55E" : progress.overallPct >= 40 ? "#F59E0B" : "#94A3B8" }}>{progress.overallPct}%</div>
                        <div style={{ fontSize: 10, color: "#64748B" }}>Interview Completeness</div>
                      </div>

                      {/* OLDCARTS */}
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#2874A6", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>OLDCARTS ({progress.oldcartsCount}/8)</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                          {Object.entries(progress.oldcarts).map(([key, val]) => (
                            <span key={key} style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: val.covered ? "#DCFCE7" : "#F1F5F9", color: val.covered ? "#166534" : "#94A3B8", fontWeight: val.covered ? 600 : 400, border: `1px solid ${val.covered ? "#BBF7D0" : "#E2E8F0"}` }}>
                              {val.covered ? "✓" : "○"} {val.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* History */}
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#2874A6", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>History ({progress.historyCount}/7)</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                          {Object.entries(progress.history).map(([key, val]) => (
                            <span key={key} style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: val.covered ? "#DCFCE7" : "#F1F5F9", color: val.covered ? "#166534" : "#94A3B8", fontWeight: val.covered ? 600 : 400, border: `1px solid ${val.covered ? "#BBF7D0" : "#E2E8F0"}` }}>
                              {val.covered ? "✓" : "○"} {val.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Associated Symptoms */}
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#2874A6", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>Assoc. Symptoms ({progress.symptomsAsked.length}/{progress.symptomsTotal})</div>
                        <div style={{ background: "#E2E8F0", borderRadius: 4, height: 6, overflow: "hidden" }}>
                          <div style={{ background: progress.symptomsAsked.length / progress.symptomsTotal >= 0.6 ? "#22C55E" : "#F59E0B", height: "100%", width: `${(progress.symptomsAsked.length / progress.symptomsTotal) * 100}%`, borderRadius: 4, transition: "width 0.3s ease" }} />
                        </div>
                        <div style={{ fontSize: 10, color: "#94A3B8", marginTop: 4 }}>
                          {progress.symptomsAsked.map(s => s.name).join(", ") || "None yet"}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Toggle progress panel button when hidden */}
                  {progress && !showProgress && (
                    <button onClick={() => setShowProgress(true)} style={{ position: "absolute", right: 8, top: 8, background: "#2874A6", color: "white", border: "none", borderRadius: 6, padding: "4px 8px", fontSize: 10, cursor: "pointer", fontWeight: 600, zIndex: 10 }}>📊</button>
                  )}
                </div>
                );
              })()}


              {/* ─── EXAM TAB ─── */}
              {activeTab === "exam" && (
                <div>
                  {!selectedPatient.examPerformed ? (
                    <div style={{ textAlign: "center", padding: 30 }}>
                      <button onClick={performExam} style={{ padding: "12px 28px", borderRadius: 8, background: "#2874A6", color: "white", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600 }}>🩺 Perform Physical Exam</button>
                    </div>
                  ) : (
                    <div>
                      {Object.entries(selectedPatient.physicalExam).filter(([k]) => k !== "vitalSigns").map(([system, finding]) => (
                        <div key={system} style={{ marginBottom: 12, padding: "10px 14px", background: "white", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                          <div style={{ fontSize: 12, fontWeight: 600, color: "#2874A6", textTransform: "capitalize", marginBottom: 4 }}>{system.replace(/([A-Z])/g, " $1")}</div>
                          <div style={{ fontSize: 13, lineHeight: 1.5, color: /FRICTION RUB|JVD|S3 gallop|crackles|rales|pitting edema|guarding|McBurney|Rovsing|psoas|diaphoretic|tripoding|nuchal rigidity|Kernig|Brudzinski|facial droop|hemiparesis|flaccid|1\/5|3\/5|aphasi|tremul|NIHSS|GCS 1[0-4]|mottled|photophobic|lethargic|Hypoactive|cool extremities|ill-appearing|gaze preference|pronator drift|clammy/.test(finding) ? "#DC2626" : "#334155" }}>{finding}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─── VITALS FLOW SHEET TAB ─── */}
              {activeTab === "vitals" && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1B4F72" }}>Vital Signs Flow Sheet</div>
                    {!selectedPatient.dispositioned && (
                      <button onClick={recheckVitals} style={{ padding: "6px 14px", borderRadius: 6, background: "#2874A6", color: "white", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>🔄 Recheck Vitals</button>
                    )}
                  </div>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse", minWidth: 400 }}>
                      <thead>
                        <tr style={{ borderBottom: "2px solid #2874A6", background: "#F8FAFC" }}>
                          <th style={{ textAlign: "left", padding: "6px 8px", color: "#1B4F72", fontWeight: 700, position: "sticky", left: 0, background: "#F8FAFC" }}>Parameter</th>
                          {(selectedPatient.vitalsLog || []).map((v, i) => (
                            <th key={i} style={{ textAlign: "center", padding: "6px 8px", color: "#64748B", fontWeight: 600, minWidth: 80 }}>
                              <div>{v.label}</div>
                              <div style={{ fontSize: 10, fontWeight: 400 }}>{new Date(v.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {["BP", "HR", "RR", "Temp", "SpO2"].map(param => (
                          <tr key={param} style={{ borderBottom: "1px solid #E2E8F0" }}>
                            <td style={{ padding: "6px 8px", fontWeight: 600, color: "#1B4F72", position: "sticky", left: 0, background: "white" }}>{param}</td>
                            {(selectedPatient.vitalsLog || []).map((v, i) => {
                              const val = v[param];
                              const isAbnormal = (param === "HR" && (parseInt(val) > 100 || parseInt(val) < 60)) || (param === "BP" && (parseInt(val?.split("/")[0]) > 160 || parseInt(val?.split("/")[0]) < 90)) || (param === "RR" && (parseInt(val) > 20 || parseInt(val) < 12)) || (param === "SpO2" && parseInt(val) < 94) || (param === "Temp" && parseFloat(val) > 100.4);
                              return (
                                <td key={i} style={{ textAlign: "center", padding: "6px 8px", color: isAbnormal ? "#DC2626" : "#334155", fontWeight: isAbnormal ? 700 : 400 }}>{val}</td>
                              );
                            })}
                          </tr>
                        ))}
                        <tr style={{ borderBottom: "1px solid #E2E8F0" }}>
                          <td style={{ padding: "6px 8px", fontWeight: 600, color: "#1B4F72", position: "sticky", left: 0, background: "white" }}>Source</td>
                          {(selectedPatient.vitalsLog || []).map((v, i) => (
                            <td key={i} style={{ textAlign: "center", padding: "6px 8px", fontSize: 10, color: "#94A3B8" }}>{v.source}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ─── ORDERS TAB (COMPREHENSIVE) ─── */}
              {activeTab === "orders" && (
                <div>
                  {/* Code Status Banner */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, padding: "8px 12px", background: selectedPatient.codeStatus === "Full Code" ? "#DCFCE7" : selectedPatient.codeStatus === "DNR/DNI" ? "#FEE2E2" : "#FEF3C7", borderRadius: 8, border: `1px solid ${selectedPatient.codeStatus === "Full Code" ? "#BBF7D0" : selectedPatient.codeStatus === "DNR/DNI" ? "#FECACA" : "#FDE68A"}` }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: selectedPatient.codeStatus === "Full Code" ? "#166534" : "#991B1B" }}>
                      Code Status: {selectedPatient.codeStatus}
                    </div>
                    {!selectedPatient.dispositioned && (
                      <select value={selectedPatient.codeStatus} onChange={e => setCodeStatus(e.target.value)} style={{ padding: "4px 8px", borderRadius: 4, border: "1px solid #CBD5E1", fontSize: 11, background: "white" }}>
                        {CODE_STATUS_OPTIONS.map(cs => <option key={cs} value={cs}>{cs}</option>)}
                      </select>
                    )}
                  </div>

                  {/* Order Category Tabs */}
                  <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
                    {Object.entries(ORDER_MENU).map(([key, cat]) => (
                      <button key={key} onClick={() => { setOrderCategory(key); setOrderSearch(""); }} style={{ padding: "5px 10px", borderRadius: 6, fontSize: 11, fontWeight: orderCategory === key ? 700 : 400, background: orderCategory === key ? "#2874A6" : "white", color: orderCategory === key ? "white" : "#64748B", border: `1px solid ${orderCategory === key ? "#2874A6" : "#E2E8F0"}`, cursor: "pointer" }}>
                        {cat.icon} {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Search */}
                  <input value={orderSearch} onChange={e => setOrderSearch(e.target.value)} placeholder={`Search ${ORDER_MENU[orderCategory]?.label || "orders"}...`} style={{ width: "100%", padding: "8px 12px", borderRadius: 6, border: "1px solid #CBD5E1", fontSize: 12, marginBottom: 10, outline: "none" }} />

                  {/* Order Items */}
                  <div style={{ maxHeight: 300, overflowY: "auto" }}>
                    {(() => {
                      const cat = ORDER_MENU[orderCategory];
                      if (!cat) return null;
                      const items = cat.items.filter(i => !orderSearch || i.name.toLowerCase().includes(orderSearch.toLowerCase()) || (i.cat && i.cat.toLowerCase().includes(orderSearch.toLowerCase())));
                      // Group by cat if medications
                      if (orderCategory === "medications" || orderCategory === "fluids") {
                        const groups = {};
                        items.forEach(i => { const g = i.cat || "Other"; if (!groups[g]) groups[g] = []; groups[g].push(i); });
                        return Object.entries(groups).map(([g, gItems]) => (
                          <div key={g} style={{ marginBottom: 10 }}>
                            <div style={{ fontSize: 10, fontWeight: 700, color: "#2874A6", textTransform: "uppercase", marginBottom: 4, letterSpacing: "0.05em" }}>{g}</div>
                            {gItems.map(item => {
                              const alreadyOrdered = (selectedPatient.orderedMeds || []).some(m => m.name === item.name);
                              return (
                                <button key={item.id} onClick={() => !alreadyOrdered && (orderCategory === "fluids" ? orderFluid(item.name) : orderMed(item.name))} disabled={alreadyOrdered || selectedPatient.dispositioned} style={{ display: "block", width: "100%", textAlign: "left", padding: "6px 10px", marginBottom: 2, borderRadius: 4, fontSize: 12, border: `1px solid ${alreadyOrdered ? "#BBF7D0" : "#E2E8F0"}`, background: alreadyOrdered ? "#DCFCE7" : "white", color: alreadyOrdered ? "#166534" : "#334155", cursor: alreadyOrdered || selectedPatient.dispositioned ? "default" : "pointer" }}>
                                  {alreadyOrdered ? "✓ " : "+"} {item.name}
                                </button>
                              );
                            })}
                          </div>
                        ));
                      }
                      if (orderCategory === "consults") {
                        return items.map(item => {
                          const alreadyOrdered = (selectedPatient.orderedConsults || []).some(c => c.name === item.name);
                          return (
                            <button key={item.id} onClick={() => !alreadyOrdered && orderConsult(item.name)} disabled={alreadyOrdered || selectedPatient.dispositioned} style={{ display: "block", width: "100%", textAlign: "left", padding: "6px 10px", marginBottom: 2, borderRadius: 4, fontSize: 12, border: `1px solid ${alreadyOrdered ? "#BBF7D0" : "#E2E8F0"}`, background: alreadyOrdered ? "#DCFCE7" : "white", color: alreadyOrdered ? "#166534" : "#334155", cursor: alreadyOrdered || selectedPatient.dispositioned ? "default" : "pointer" }}>
                              {alreadyOrdered ? "✓ " : "+"} {item.name}
                            </button>
                          );
                        });
                      }
                      if (orderCategory === "nursing") {
                        return items.map(item => {
                          const alreadyOrdered = (selectedPatient.orderedNursing || []).some(n => n.name === item.name);
                          return (
                            <button key={item.id} onClick={() => !alreadyOrdered && orderNursing(item.name)} disabled={alreadyOrdered || selectedPatient.dispositioned} style={{ display: "block", width: "100%", textAlign: "left", padding: "6px 10px", marginBottom: 2, borderRadius: 4, fontSize: 12, border: `1px solid ${alreadyOrdered ? "#BBF7D0" : "#E2E8F0"}`, background: alreadyOrdered ? "#DCFCE7" : "white", color: alreadyOrdered ? "#166534" : "#334155", cursor: alreadyOrdered || selectedPatient.dispositioned ? "default" : "pointer" }}>
                              {alreadyOrdered ? "✓ " : "+"} {item.name}
                            </button>
                          );
                        });
                      }
                      // Labs, imaging, cardiac
                      return items.map(item => {
                        const ordered = selectedPatient.orderedTests.includes(item.name);
                        const completed = selectedPatient.completedTests.includes(item.name);
                        return (
                          <button key={item.id} onClick={() => !ordered && orderTest(item.name)} disabled={ordered || selectedPatient.dispositioned} style={{ display: "block", width: "100%", textAlign: "left", padding: "6px 10px", marginBottom: 2, borderRadius: 4, fontSize: 12, border: `1px solid ${completed ? "#BBF7D0" : ordered ? "#FDE68A" : "#E2E8F0"}`, background: completed ? "#DCFCE7" : ordered ? "#FEF3C7" : "white", color: completed ? "#166534" : ordered ? "#92400E" : "#334155", cursor: ordered || selectedPatient.dispositioned ? "default" : "pointer" }}>
                            {completed ? "✓ " : ordered ? "⏳ " : "+"} {item.name} {item.turnaround ? `(~${item.turnaround} min)` : ""}
                          </button>
                        );
                      });
                    })()}
                  </div>

                  {/* Active Orders Summary */}
                  {((selectedPatient.orderedTests.length + (selectedPatient.orderedMeds||[]).length + (selectedPatient.orderedConsults||[]).length + (selectedPatient.orderedNursing||[]).length) > 0) && (
                    <div style={{ marginTop: 12, padding: 10, background: "#F8FAFC", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#1B4F72", marginBottom: 6 }}>Active Orders ({selectedPatient.orderedTests.length + (selectedPatient.orderedMeds||[]).length + (selectedPatient.orderedConsults||[]).length + (selectedPatient.orderedNursing||[]).length})</div>
                      <div style={{ fontSize: 11, color: "#64748B", maxHeight: 100, overflowY: "auto" }}>
                        {selectedPatient.orderedTests.map((t, i) => <div key={`t${i}`}>🧪 {t} {selectedPatient.completedTests.includes(t) ? "✓" : "⏳"}</div>)}
                        {(selectedPatient.orderedMeds||[]).map((m, i) => <div key={`m${i}`}>💊 {m.name} — {m.status}</div>)}
                        {(selectedPatient.orderedConsults||[]).map((c, i) => <div key={`c${i}`}>👨‍⚕️ {c.name} — {c.status}</div>)}
                        {(selectedPatient.orderedNursing||[]).map((n, i) => <div key={`n${i}`}>🏥 {n.name} — {n.status}</div>)}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ─── RESULTS TAB ─── */}
              {activeTab === "results" && (
                <div>
                  {selectedPatient.completedTests.length === 0 ? (
                    <div style={{ textAlign: "center", padding: 30, color: "#94A3B8", fontSize: 13 }}>No results yet. Order tests from the Orders tab.</div>
                  ) : (
                    <div>
                      {/* ECG */}
                      {selectedPatient.completedTests.some(t => /ecg|ekg/i.test(t)) && selectedPatient.diagnostics.ecg && (
                        <div style={{ marginBottom: 16, padding: 14, background: "white", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                          <div style={{ fontWeight: 600, fontSize: 13, color: "#1B4F72", marginBottom: 8 }}>12-Lead ECG</div>
                          {selectedPatient.diagnostics.ecg.findings.map((f, i) => (
                            <div key={i} style={{ fontSize: 13, padding: "2px 0", color: f.includes("ST elevation") || f.includes("ST depression") || f.includes("PR depression") ? "#DC2626" : "#334155" }}>• {f}</div>
                          ))}
                          <div style={{ marginTop: 8, padding: "6px 10px", background: "#FEF2F2", borderRadius: 6, fontSize: 12, fontWeight: 500, color: "#991B1B" }}>Interpretation: {selectedPatient.diagnostics.ecg.interpretation}</div>
                        </div>
                      )}
                      {/* Labs */}
                      {selectedPatient.completedTests.some(t => selectedPatient.diagnostics.labs.some(l => l.test === t || t.toLowerCase().includes("cbc") || t.toLowerCase().includes("bmp") || t.toLowerCase().includes("cmp") || t.toLowerCase().includes("troponin") || t.toLowerCase().includes("lactate") || t.toLowerCase().includes("glucose"))) && (
                        <div style={{ marginBottom: 16, padding: 14, background: "white", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                          <div style={{ fontWeight: 600, fontSize: 13, color: "#1B4F72", marginBottom: 8 }}>Laboratory Results</div>
                          <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
                            <thead>
                              <tr style={{ borderBottom: "1px solid #E2E8F0" }}>
                                <th style={{ textAlign: "left", padding: "4px 8px", color: "#64748B", fontWeight: 600 }}>Test</th>
                                <th style={{ textAlign: "left", padding: "4px 8px", color: "#64748B", fontWeight: 600 }}>Value</th>
                                <th style={{ textAlign: "left", padding: "4px 8px", color: "#64748B", fontWeight: 600 }}>Ref</th>
                                <th style={{ textAlign: "left", padding: "4px 8px", color: "#64748B", fontWeight: 600 }}>Flag</th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectedPatient.diagnostics.labs.map((l, i) => (
                                <tr key={i} style={{ borderBottom: "1px solid #F1F5F9" }}>
                                  <td style={{ padding: "6px 8px" }}>{l.test}</td>
                                  <td style={{ padding: "6px 8px", fontWeight: 600, color: l.status === "critical" ? "#DC2626" : l.status === "abnormal" ? "#F59E0B" : "#334155" }}>{l.value} {l.unit}</td>
                                  <td style={{ padding: "6px 8px", color: "#94A3B8" }}>{l.ref}</td>
                                  <td style={{ padding: "6px 8px" }}>
                                    <span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 10, background: l.status === "critical" ? "#FEE2E2" : l.status === "abnormal" ? "#FEF3C7" : "#DCFCE7", color: l.status === "critical" ? "#991B1B" : l.status === "abnormal" ? "#92400E" : "#166534", fontWeight: 600 }}>
                                      {l.status === "critical" ? "⚠ CRITICAL" : l.status === "abnormal" ? "↑ Abnormal" : "Normal"}
                                    </span>
                                    {l.note && <div style={{ fontSize: 10, color: "#94A3B8", marginTop: 2 }}>{l.note}</div>}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      {/* Imaging */}
                      {selectedPatient.diagnostics.imaging.filter(img => selectedPatient.completedTests.some(t => t.toLowerCase().includes(img.study.toLowerCase().split(" ")[0].toLowerCase()) || img.study.toLowerCase().includes(t.toLowerCase().split(" ")[0].toLowerCase()))).map((img, i) => (
                        <div key={i} style={{ marginBottom: 16, padding: 14, background: "white", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                          <div style={{ fontWeight: 600, fontSize: 13, color: "#1B4F72", marginBottom: 8 }}>{img.study}</div>
                          <div style={{ fontSize: 12, color: "#334155", marginBottom: 6 }}><strong>Findings:</strong> {img.findings}</div>
                          <div style={{ padding: "6px 10px", background: "#EBF5FB", borderRadius: 6, fontSize: 12, fontWeight: 500, color: "#1B4F72" }}>Impression: {img.impression}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─── CHART TAB (Triage, Nursing, Code Status) ─── */}
              {activeTab === "chart" && (
                <div>
                  {/* Patient Banner */}
                  <div style={{ padding: 10, background: "#EBF5FB", borderRadius: 8, border: "1px solid #AED6F1", marginBottom: 12, fontSize: 12 }}>
                    <div style={{ fontWeight: 700, color: "#1B4F72" }}>{selectedPatient.name} — {selectedPatient.age}{selectedPatient.gender === "male" ? "M" : "F"} — MRN: {selectedPatient.mrn} — Bed {selectedPatient.bed}</div>
                    <div style={{ color: "#64748B", marginTop: 2 }}>Code Status: <strong style={{ color: selectedPatient.codeStatus === "Full Code" ? "#166534" : "#DC2626" }}>{selectedPatient.codeStatus}</strong> | Allergies: <strong style={{ color: selectedPatient.variant.clinicalFacts.allergies?.length ? "#DC2626" : "#166534" }}>{selectedPatient.variant.clinicalFacts.allergies?.length ? selectedPatient.variant.clinicalFacts.allergies.map(a => a.allergen).join(", ") : "NKDA"}</strong></div>
                  </div>

                  {/* Triage Note */}
                  <div style={{ marginBottom: 16, padding: 14, background: "white", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#2874A6", marginBottom: 6 }}>Triage Note</div>
                    <div style={{ fontSize: 12, color: "#334155", lineHeight: 1.6 }}>{selectedPatient.triageNote}</div>
                  </div>

                  {/* Nursing Notes */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#2874A6", marginBottom: 8 }}>Nursing Notes</div>
                    {(selectedPatient.nursingNotes || []).map((note, i) => (
                      <div key={i} style={{ padding: "8px 12px", background: i % 2 === 0 ? "white" : "#F8FAFC", borderRadius: 6, border: "1px solid #E2E8F0", marginBottom: 4, fontSize: 12 }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ fontWeight: 600, color: "#1B4F72" }}>{note.author}</span>
                          <span style={{ color: "#94A3B8", fontSize: 10 }}>{new Date(note.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <div style={{ color: "#334155", marginTop: 2 }}>{note.text}</div>
                      </div>
                    ))}
                  </div>

                  {/* Medication Administration Record */}
                  {(selectedPatient.orderedMeds || []).length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#2874A6", marginBottom: 8 }}>Medication Administration Record (MAR)</div>
                      <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
                        <thead>
                          <tr style={{ borderBottom: "1px solid #E2E8F0", background: "#F8FAFC" }}>
                            <th style={{ textAlign: "left", padding: "4px 8px", color: "#64748B" }}>Medication</th>
                            <th style={{ textAlign: "left", padding: "4px 8px", color: "#64748B" }}>Time</th>
                            <th style={{ textAlign: "left", padding: "4px 8px", color: "#64748B" }}>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(selectedPatient.orderedMeds || []).map((m, i) => (
                            <tr key={i} style={{ borderBottom: "1px solid #F1F5F9" }}>
                              <td style={{ padding: "6px 8px" }}>{m.name}</td>
                              <td style={{ padding: "6px 8px", color: "#94A3B8" }}>{new Date(m.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                              <td style={{ padding: "6px 8px" }}><span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 10, background: "#DCFCE7", color: "#166534", fontWeight: 600 }}>{m.status}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Active Consults */}
                  {(selectedPatient.orderedConsults || []).length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#2874A6", marginBottom: 8 }}>Consults</div>
                      {(selectedPatient.orderedConsults || []).map((c, i) => (
                        <div key={i} style={{ padding: "6px 10px", background: "white", borderRadius: 6, border: "1px solid #E2E8F0", marginBottom: 4, fontSize: 12, display: "flex", justifyContent: "space-between" }}>
                          <span>{c.name}</span>
                          <span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 10, background: "#FEF3C7", color: "#92400E", fontWeight: 600 }}>{c.status}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─── NOTES TAB ─── */}
              {activeTab === "notes" && (
                <div>
                  {!selectedPatient.dispositioned && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#1B4F72", marginBottom: 8 }}>Write ED Note</div>
                      <textarea value={noteText} onChange={e => setNoteText(e.target.value)} placeholder={"CC: " + selectedPatient.chiefComplaint + "\n\nHPI:\n\nROS:\n\nPhysical Exam:\n\nAssessment/Plan:"} style={{ width: "100%", height: 200, padding: 12, borderRadius: 8, border: "1px solid #CBD5E1", fontSize: 13, fontFamily: "monospace", lineHeight: 1.6, resize: "vertical", outline: "none" }} />
                      <button onClick={saveNote} disabled={!noteText.trim()} style={{ marginTop: 8, padding: "8px 20px", borderRadius: 6, background: noteText.trim() ? "#2874A6" : "#CBD5E1", color: "white", border: "none", cursor: noteText.trim() ? "pointer" : "default", fontSize: 13, fontWeight: 600 }}>Save Note</button>
                    </div>
                  )}
                  {selectedPatient.notes.length > 0 && (
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#1B4F72", marginBottom: 8 }}>Saved Notes</div>
                      {selectedPatient.notes.map(note => (
                        <div key={note.id} style={{ marginBottom: 12, padding: 14, background: "white", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                            <span style={{ fontSize: 12, fontWeight: 600, color: "#2874A6" }}>{note.type}</span>
                            <span style={{ fontSize: 11, color: "#94A3B8" }}>{new Date(note.ts).toLocaleString()}</span>
                          </div>
                          <pre style={{ fontSize: 12, fontFamily: "monospace", whiteSpace: "pre-wrap", lineHeight: 1.5, color: "#334155", margin: 0 }}>{note.text}</pre>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─── DDx BUILDER TAB ─── */}
              {activeTab === "ddx" && (
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1B4F72", marginBottom: 4 }}>Build Your Differential Diagnosis</div>
                  <div style={{ fontSize: 12, color: "#64748B", marginBottom: 12 }}>List your differential diagnoses in order of likelihood. Adjust confidence sliders to reflect your clinical reasoning.</div>

                  {!selectedPatient.dispositioned && (
                    <div style={{ marginBottom: 16, padding: 14, background: "white", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                        <input value={ddxInput} onChange={e => setDdxInput(e.target.value)} onKeyDown={e => e.key === "Enter" && addDdx()} placeholder="Enter a diagnosis (e.g., STEMI, PE, Aortic Dissection)..." style={{ flex: 1, padding: "8px 12px", borderRadius: 6, border: "1px solid #CBD5E1", fontSize: 13, outline: "none" }} />
                        <button onClick={addDdx} disabled={!ddxInput.trim()} style={{ padding: "8px 16px", borderRadius: 6, background: ddxInput.trim() ? "#2874A6" : "#CBD5E1", color: "white", border: "none", cursor: ddxInput.trim() ? "pointer" : "default", fontWeight: 600, fontSize: 12 }}>Add</button>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12 }}>
                        <span style={{ color: "#64748B", minWidth: 80 }}>Confidence:</span>
                        <input type="range" min="5" max="95" value={ddxConfidence} onChange={e => setDdxConfidence(parseInt(e.target.value))} style={{ flex: 1, accentColor: "#2874A6" }} />
                        <span style={{ fontWeight: 600, color: "#2874A6", minWidth: 35, textAlign: "right" }}>{ddxConfidence}%</span>
                      </div>
                    </div>
                  )}

                  {(selectedPatient.ddxList || []).length === 0 ? (
                    <div style={{ textAlign: "center", padding: 30, color: "#94A3B8", fontSize: 13 }}>
                      No diagnoses added yet. Build your differential as you gather information.
                    </div>
                  ) : (
                    <div>
                      {(selectedPatient.ddxList || []).sort((a, b) => b.confidence - a.confidence).map((d, i) => (
                        <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, padding: "10px 14px", background: "white", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                          <div style={{ fontSize: 16, fontWeight: 800, color: i === 0 ? "#2874A6" : "#94A3B8", minWidth: 24, textAlign: "center" }}>#{i + 1}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>{d.diagnosis}</div>
                            {!selectedPatient.dispositioned ? (
                              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                                <input type="range" min="5" max="95" value={d.confidence} onChange={e => updateDdxConfidence(d.id, parseInt(e.target.value))} style={{ flex: 1, accentColor: "#2874A6", height: 4 }} />
                                <span style={{ fontSize: 12, fontWeight: 600, color: "#2874A6", minWidth: 35, textAlign: "right" }}>{d.confidence}%</span>
                              </div>
                            ) : (
                              <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>Your confidence: {d.confidence}%</div>
                            )}
                          </div>
                          {!selectedPatient.dispositioned && (
                            <button onClick={() => removeDdx(d.id)} style={{ background: "none", border: "none", color: "#DC2626", cursor: "pointer", fontSize: 16, padding: 4 }}>×</button>
                          )}
                        </div>
                      ))}

                      {/* Total confidence warning */}
                      {(() => {
                        const total = (selectedPatient.ddxList || []).reduce((sum, d) => sum + d.confidence, 0);
                        return total > 100 ? (
                          <div style={{ padding: 8, background: "#FEF3C7", borderRadius: 6, fontSize: 11, color: "#92400E", marginTop: 8 }}>
                            Your total confidence is {total}% — this should ideally sum to ~100%. Consider redistributing.
                          </div>
                        ) : null;
                      })()}
                    </div>
                  )}

                  {/* DDx comparison shown after disposition */}
                  {selectedPatient.dispositioned && (selectedPatient.ddxList || []).length > 0 && (
                    <div style={{ marginTop: 20, padding: 14, background: "#EBF5FB", borderRadius: 8, border: "1px solid #2874A6" }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#1B4F72", marginBottom: 10 }}>Your DDx vs. Expert DDx</div>
                      <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
                        <thead>
                          <tr style={{ borderBottom: "2px solid #2874A6" }}>
                            <th style={{ textAlign: "left", padding: "4px 8px", color: "#1B4F72" }}>Diagnosis</th>
                            <th style={{ textAlign: "center", padding: "4px 8px", color: "#1B4F72", width: 80 }}>Your %</th>
                            <th style={{ textAlign: "center", padding: "4px 8px", color: "#1B4F72", width: 80 }}>Expert %</th>
                            <th style={{ textAlign: "center", padding: "4px 8px", color: "#1B4F72", width: 60 }}>Match</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedPatient.teaching.expertDifferential.map((ed, i) => {
                            const studentMatch = (selectedPatient.ddxList || []).find(d => d.diagnosis.toLowerCase().includes(ed.dx.toLowerCase().split(" ")[0]) || ed.dx.toLowerCase().includes(d.diagnosis.toLowerCase().split(" ")[0]));
                            return (
                              <tr key={i} style={{ borderBottom: "1px solid #E2E8F0", background: i === 0 ? "#DCFCE7" : "white" }}>
                                <td style={{ padding: "6px 8px", fontWeight: i === 0 ? 600 : 400 }}>{ed.dx}</td>
                                <td style={{ padding: "6px 8px", textAlign: "center", fontWeight: 600, color: studentMatch ? "#2874A6" : "#DC2626" }}>{studentMatch ? `${studentMatch.confidence}%` : "—"}</td>
                                <td style={{ padding: "6px 8px", textAlign: "center", color: "#64748B" }}>{ed.pct}%</td>
                                <td style={{ padding: "6px 8px", textAlign: "center" }}>{studentMatch ? "✓" : "✗"}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      {(() => {
                        const expertDxNames = selectedPatient.teaching.expertDifferential.map(e => e.dx.toLowerCase().split(" ")[0]);
                        const studentDxNames = (selectedPatient.ddxList || []).map(d => d.diagnosis.toLowerCase().split(" ")[0]);
                        const matched = expertDxNames.filter(e => studentDxNames.some(s => e.includes(s) || s.includes(e))).length;
                        const topMatch = (selectedPatient.ddxList || []).sort((a, b) => b.confidence - a.confidence)[0];
                        const expertTop = selectedPatient.teaching.expertDifferential[0];
                        const gotTopRight = topMatch && (topMatch.diagnosis.toLowerCase().includes(expertTop.dx.toLowerCase().split(" ")[0]) || expertTop.dx.toLowerCase().includes(topMatch.diagnosis.toLowerCase().split(" ")[0]));
                        return (
                          <div style={{ marginTop: 10, fontSize: 12 }}>
                            <div style={{ color: gotTopRight ? "#166534" : "#DC2626", fontWeight: 600 }}>
                              {gotTopRight ? "✓ You correctly identified the most likely diagnosis!" : `✗ The most likely diagnosis was ${expertTop.dx}.`}
                            </div>
                            <div style={{ color: "#64748B", marginTop: 4 }}>
                              You identified {matched} of {expertDxNames.length} expert differential diagnoses.
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              )}

              {/* ─── TEACHING TAB ─── */}
              {activeTab === "teaching" && (
                <div>
                  {(showTeaching || selectedPatient.dispositioned) ? (
                    <div>
                      <div style={{ padding: 14, background: "#EBF5FB", borderRadius: 8, border: "1px solid #2874A6", marginBottom: 16 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#1B4F72" }}>Diagnosis: {selectedPatient.diagnosis}</div>
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#1B4F72", marginBottom: 8 }}>Expert Differential Diagnosis</div>
                        {selectedPatient.teaching.expertDifferential.map((d, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, padding: "6px 10px", background: i === 0 ? "#DCFCE7" : "white", borderRadius: 6, border: "1px solid #E2E8F0" }}>
                            <div style={{ width: 40, textAlign: "right", fontWeight: 700, fontSize: 14, color: i === 0 ? "#166534" : "#64748B" }}>{d.pct}%</div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 13, fontWeight: 600 }}>{d.dx}</div>
                              <div style={{ fontSize: 11, color: "#64748B" }}>{d.why}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#1B4F72", marginBottom: 8 }}>Key Learning Points</div>
                        {selectedPatient.teaching.keyLearningPoints.map((pt, i) => (
                          <div key={i} style={{ fontSize: 12, padding: "4px 0", color: "#334155" }}>• {pt}</div>
                        ))}
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#DC2626", marginBottom: 8 }}>Must-Not-Miss Diagnoses</div>
                        {selectedPatient.teaching.mustNotMiss.map((m, i) => (
                          <div key={i} style={{ fontSize: 12, padding: "4px 0", color: "#991B1B" }}>⚠ {m}</div>
                        ))}
                      </div>

                      {/* Case Performance Summary */}
                      {selectedPatient.interviewHistory.length > 0 && (() => {
                        const perf = analyzeProgress(selectedPatient.interviewHistory, selectedPatient);
                        const ddxList = selectedPatient.ddxList || [];
                        const expertTop = selectedPatient.teaching.expertDifferential[0];
                        const topDdx = ddxList.sort((a, b) => b.confidence - a.confidence)[0];
                        const gotTop = topDdx && (topDdx.diagnosis.toLowerCase().includes(expertTop.dx.toLowerCase().split(" ")[0]) || expertTop.dx.toLowerCase().includes(topDdx.diagnosis.toLowerCase().split(" ")[0]));
                        const questionsAsked = selectedPatient.interviewHistory.filter(m => m.role === "student").length;
                        return (
                          <div style={{ marginBottom: 16, padding: 14, background: "white", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                            <div style={{ fontSize: 13, fontWeight: 600, color: "#1B4F72", marginBottom: 10 }}>Your Case Performance</div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 10 }}>
                              <div style={{ textAlign: "center", padding: 10, background: "#F8FAFC", borderRadius: 6 }}>
                                <div style={{ fontSize: 22, fontWeight: 800, color: perf.overallPct >= 70 ? "#22C55E" : perf.overallPct >= 40 ? "#F59E0B" : "#DC2626" }}>{perf.overallPct}%</div>
                                <div style={{ fontSize: 10, color: "#64748B" }}>Interview Completeness</div>
                              </div>
                              <div style={{ textAlign: "center", padding: 10, background: "#F8FAFC", borderRadius: 6 }}>
                                <div style={{ fontSize: 22, fontWeight: 800, color: "#2874A6" }}>{questionsAsked}</div>
                                <div style={{ fontSize: 10, color: "#64748B" }}>Questions Asked</div>
                              </div>
                              <div style={{ textAlign: "center", padding: 10, background: "#F8FAFC", borderRadius: 6 }}>
                                <div style={{ fontSize: 22, fontWeight: 800, color: gotTop ? "#22C55E" : ddxList.length > 0 ? "#F59E0B" : "#94A3B8" }}>{gotTop ? "✓" : ddxList.length > 0 ? "✗" : "—"}</div>
                                <div style={{ fontSize: 10, color: "#64748B" }}>#1 Diagnosis</div>
                              </div>
                            </div>
                            <div style={{ fontSize: 12, color: "#64748B" }}>
                              <div>OLDCARTS: {perf.oldcartsCount}/8 elements explored</div>
                              <div>History: {perf.historyCount}/7 components covered</div>
                              <div>ROS: {perf.symptomsAsked.length}/{perf.symptomsTotal} associated symptoms asked about</div>
                              {!selectedPatient.examPerformed && <div style={{ color: "#DC2626" }}>Physical exam was not performed</div>}
                              {selectedPatient.notes.length === 0 && <div style={{ color: "#F59E0B" }}>No clinical notes written</div>}
                              {ddxList.length === 0 && <div style={{ color: "#F59E0B" }}>No differential diagnosis built</div>}
                            </div>
                          </div>
                        );
                      })()}

                      <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 20, padding: 10, background: "#F8FAFC", borderRadius: 6 }}>
                        Sources: StatPearls (NCBI), PubMed Central, AHA/ACC Guidelines — open-access, peer-reviewed academic resources only.
                      </div>
                    </div>
                  ) : (
                    <div style={{ textAlign: "center", padding: 30, color: "#94A3B8", fontSize: 13 }}>
                      Complete the case (discharge or admit) to see teaching points and expert analysis.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
