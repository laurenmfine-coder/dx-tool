/*
 * rdx-beta-puzzles.js
 * ───────────────────────────────────────────────────────────────────
 * Beta puzzle pool: 5 profession-specific MCQ puzzles + 3 express
 * cases derived from existing CRT content. Used by puzzles.html in
 * the "Try a new format (beta)" section to test whether learners
 * engage with shorter, more structured practice formats.
 *
 * Schema:
 *   type:         'mcq' | 'express'
 *   id:           unique short slug
 *   profession:   target audience (medicine | pa | dental | nursing | ot | all)
 *   title:        card headline (serif rendering)
 *   teaser:       one-line subtitle on the card
 *   eyebrow:      uppercase label (e.g. "MCQ", "Express case")
 *   timeEstimate: rough completion time
 *
 *   For MCQ:
 *     stem:        the question
 *     options:     [string, string, string, string]
 *     answer:      0-based index of correct option
 *     explanation: shown after answering
 *
 *   For express cases:
 *     briefing:    multi-paragraph context the user reads first
 *     decision:    the question they must answer
 *     options:     [string, string, string, string]
 *     answer:      0-based index of correct option
 *     explanation: shown after answering
 *     relatedCaseId: full case to link to in the "go deeper" CTA
 *
 * Tracking events (all via gtag and RDXFunnelAgent if present):
 *   beta_card_opened:    user clicked into the beta puzzle
 *   beta_card_answered:  user submitted an answer
 *   beta_card_thumbs:    user gave thumbs up/down feedback
 */

window.RDX_BETA_PUZZLES = [
  // ──────────────────────────────────────────────────────────────
  // MCQ PUZZLES (5 of the 8 drafted in _drafts; picked the strongest)
  // ──────────────────────────────────────────────────────────────
  {
    type: 'mcq',
    id: 'mcq-pa-cap',
    profession: 'pa',
    eyebrow: 'MCQ · PA scope',
    title: 'A 45-year-old with productive cough, fever 38.6, and unilateral crackles',
    teaser: 'CXR shows RLL consolidation. The supervising physician is unreachable. What do you do?',
    timeEstimate: '60 sec',
    stem: 'A PA in urgent care sees a 45-year-old with productive cough, fever 38.6, and unilateral crackles. CXR shows RLL consolidation. O2 sat 97%. She asks about antibiotic choice. The PA is solo and cannot reach the supervising physician. Which is the MOST appropriate PA action?',
    options: [
      'Wait until the attending is available before treating',
      'Prescribe azithromycin per standard CAP protocol and document the clinical reasoning',
      'Transfer to the ED because this exceeds PA scope',
      'Order labs and send home without antibiotics until review'
    ],
    answer: 1,
    explanation: 'PA scope includes managing CAP per evidence-based protocols. Azithromycin for outpatient CAP in a low-risk patient (CURB-65 = 1) is within PA scope. Withholding treatment causes harm; waiting for attending is not required for routine decisions within protocol.',
    biasTarget: 'authority deference',
    relatedTopic: 'pneumonia'
  },

  {
    type: 'mcq',
    id: 'mcq-dental-leukoplakia',
    profession: 'dentistry',
    eyebrow: 'MCQ · Oral oncology',
    title: 'A 55-year-old smoker with a 1cm white patch on the lateral tongue, 3 weeks',
    teaser: 'Cannot be wiped off. Vital staining shows irregular uptake. What is the next step?',
    timeEstimate: '60 sec',
    stem: 'A 55-year-old male presents with a 1cm white patch on the lateral tongue that cannot be wiped off. He has smoked 1 ppd for 30 years. The lesion has been present for 3 weeks. Vital staining shows irregular uptake in one area. What is the MOST appropriate next step?',
    options: [
      'Reassure the patient and recheck in 6 months',
      'Prescribe antifungal and recheck in 2 weeks',
      'Refer for incisional biopsy within 1-2 weeks',
      'Counsel on smoking cessation only'
    ],
    answer: 2,
    explanation: 'A non-wipeable white patch (leukoplakia) in a heavy smoker with 3-week duration and irregular vital stain uptake has significant malignant potential. Incisional biopsy is indicated. The lateral tongue is a high-risk site for squamous cell carcinoma. Watchful waiting for more than 2 weeks is inappropriate.',
    biasTarget: 'premature closure',
    relatedTopic: 'oral cancer'
  },

  {
    type: 'mcq',
    id: 'mcq-nursing-postpartum-pe',
    profession: 'nursing',
    eyebrow: 'MCQ · Postpartum',
    title: 'A postpartum patient 20 hours after delivery calls for a headache',
    teaser: 'BP 158/106, new RUQ discomfort, urine output 45mL over 2 hours. Priority?',
    timeEstimate: '60 sec',
    stem: 'You are the RN caring for a postpartum patient 20 hours after vaginal delivery. She calls you for a headache. Her BP is 158/106 (was 112/70 in labor). She has new RUQ discomfort and her urine output was 45mL over the last 2 hours. What is the PRIORITY nursing action?',
    options: [
      'Administer acetaminophen per PRN order and reassess in 1 hour',
      'Notify the physician immediately and prepare for possible magnesium sulfate administration',
      'Document the finding and continue routine assessments',
      'Encourage oral hydration to improve urine output'
    ],
    answer: 1,
    explanation: 'This presentation — new hypertension, severe headache, RUQ pain (hepatic capsule distension), and oliguria in the postpartum period — meets criteria for severe postpartum preeclampsia. This is a medical emergency requiring immediate physician notification. Magnesium sulfate for seizure prophylaxis and antihypertensives may be needed urgently. Delaying by giving acetaminophen first could be catastrophic.',
    biasTarget: 'availability bias',
    relatedTopic: 'preeclampsia'
  },

  {
    type: 'mcq',
    id: 'mcq-nursing-fall-restraint',
    profession: 'nursing',
    eyebrow: 'MCQ · Geriatric care',
    title: 'A 79-year-old with dementia is climbing out of bed at 0300',
    teaser: 'Morse Fall Risk 70. Sitter unavailable. Which intervention has the strongest evidence?',
    timeEstimate: '60 sec',
    stem: 'A 79-year-old patient with dementia is agitated at 0300, trying to climb out of bed, and has pulled out his IV. The Morse Fall Risk Score is 70. A one-to-one sitter is unavailable. Which intervention has the STRONGEST evidence for preventing falls in this situation?',
    options: [
      'Apply wrist restraints to prevent IV removal',
      'Move the patient to a room closer to the nurses station and activate bed/chair alarm',
      'Administer haloperidol 0.5mg IM for behavioral management',
      'Apply a vest restraint for postural support'
    ],
    answer: 1,
    explanation: 'Physical restraints paradoxically increase fall risk in delirious elderly patients (increased agitation, muscle deconditioning). The HELP protocol and hospital fall prevention evidence support environmental modifications: proximity to nursing station, bed in lowest position, alarm systems, and frequent rounding. Pharmacological sedation carries aspiration and delirium-prolongation risks. Restraints are a last resort and require a physician order.',
    biasTarget: 'action bias',
    relatedTopic: 'delirium'
  },

  {
    type: 'mcq',
    id: 'mcq-ot-sensory',
    profession: 'ot',
    eyebrow: 'MCQ · Sensory processing',
    title: 'A 7-year-old with ASD covers his ears and avoids the cafeteria',
    teaser: 'Has meltdowns during transitions. Which Dunn quadrant fits his profile?',
    timeEstimate: '60 sec',
    stem: "A 7-year-old boy with autism spectrum disorder (ASD) covers his ears constantly, avoids the cafeteria, and has meltdowns during transitions. Based on Dunn's Sensory Processing Model, which quadrant BEST describes his profile?",
    options: [
      'Low Registration — he misses sensory input others notice',
      'Sensation Seeking — he craves intense sensory experiences',
      'Sensory Sensitivity — he notices and is bothered by stimuli others ignore',
      'Sensation Avoiding — he actively limits or controls sensory input'
    ],
    answer: 3,
    explanation: 'Sensation Avoiding (low threshold + active self-regulation): this child has a low neurological threshold and actively controls input to stay below it — covering ears, avoiding the cafeteria, and using routines and rituals. Sensory Sensitivity (low threshold + passive response) would show distress without behavioral control strategies. The distinction changes intervention: Sensation Avoiding needs predictability and control; Sensory Sensitivity needs graded desensitization.',
    biasTarget: 'pattern recognition',
    relatedTopic: 'sensory processing'
  },

  // ──────────────────────────────────────────────────────────────
  // EXPRESS CASES (3 — derived from STEMI, anaphylaxis, DKA)
  // 5-minute format: briefing → 1 decision → expert analysis → next step
  // ──────────────────────────────────────────────────────────────
  {
    type: 'express',
    id: 'express-stemi',
    profession: 'medicine',
    eyebrow: 'Express case · 5 min',
    title: 'A 52-year-old with crushing substernal chest pain',
    teaser: 'You walk in 30 minutes after arrival. Here is what has happened so far.',
    timeEstimate: '5 min',
    briefing: "You're picking up a patient mid-shift. Here's what's already happened:\n\n**Chief complaint.** A 52-year-old man arrived 30 minutes ago with substernal chest pain that started 90 minutes ago while mowing the lawn. Pain radiates to his left arm and is associated with diaphoresis and nausea.\n\n**History.** Hypertension, hyperlipidemia, ex-smoker (quit 5 years ago, 20 pack-year history). Family history of MI in his father at 54. Takes lisinopril and atorvastatin.\n\n**On arrival.** BP 148/92, HR 102, RR 20, SpO2 96% on room air. Diaphoretic, anxious. Lung exam clear. Cardiac exam: regular rhythm, no murmurs.\n\n**Workup so far.** ECG done at 5 minutes shows 3mm ST elevation in II, III, aVF with reciprocal depression in I and aVL. First troponin pending. Aspirin 324mg given. IV access established. Cath lab has been activated.\n\n**Right now.** Troponin came back at 4.2 ng/mL. The cath lab calls — they'll be ready in 25 minutes. The patient is asking what's happening.",
    decision: 'In the next 5 minutes, what is your single highest-priority action?',
    options: [
      'Give a beta-blocker now to reduce myocardial oxygen demand',
      'Confirm dual antiplatelet loading and ensure heparin is started, then get the patient to cath',
      'Order a CT chest to rule out aortic dissection before sending to cath',
      'Repeat the ECG to confirm ST elevation is persistent'
    ],
    answer: 1,
    explanation: "This is an inferior STEMI with a confirmed elevated troponin. The single action that changes outcome is **getting him to the cath lab as quickly as possible** with appropriate antithrombotic therapy on board. Door-to-balloon under 90 minutes is the metric that matters.\n\n**Why not the others:**\n- Beta-blocker: appropriate later, but in an inferior MI with possible RV involvement, premature beta-blockade can drop preload and crash the patient. Not the priority right now.\n- CT chest: dissection is the right thing to consider, but the ECG and clinical picture are classic STEMI. Adding CT delays cath and risks myocardium. The history (no tearing pain, no pulse differential implied) doesn't suggest dissection.\n- Repeat ECG: you have the diagnosis. Repeating delays definitive treatment.\n\n**The teaching point:** in confirmed STEMI, the question is not 'is the diagnosis right?' — it's 'what slows me getting to the cath lab?' Anything that doesn't speed that up is wrong.",
    biasTarget: 'thoroughness as procrastination',
    relatedCaseId: 'stemi-v1',
    relatedCaseLabel: 'Run the full STEMI case'
  },

  {
    type: 'express',
    id: 'express-anaphylaxis',
    profession: 'medicine',
    eyebrow: 'Express case · 5 min',
    title: 'A 19-year-old with throat swelling 20 minutes after a shellfish meal',
    teaser: 'BP 88/52, audible stridor. Resident hands you a syringe. Pick the right move.',
    timeEstimate: '5 min',
    briefing: "You're the supervising attending. The resident has been managing the patient for 8 minutes. Here's where things stand:\n\n**Presentation.** A 19-year-old college student arrived 20 minutes ago after eating shrimp at a restaurant. Within 15 minutes of the meal she developed lip swelling, then throat tightness and difficulty breathing. By the time she reached the ED she was hoarse with audible stridor.\n\n**History.** Known shellfish allergy diagnosed at age 10. Has used an EpiPen twice in the past, both times for milder reactions. EpiPen at home but did not bring it.\n\n**On arrival.** BP 88/52, HR 124, RR 28, SpO2 91% on room air. Diffuse urticaria on her trunk and arms. Lip and tongue swelling. Audible inspiratory stridor.\n\n**What's happened so far.** IV access established. The resident gave 50mg IV diphenhydramine and 125mg IV methylprednisolone. Started 1L NS bolus. Placed her on 6L NC. Now 8 minutes in, she looks worse. Stridor is louder. SpO2 89%.\n\n**Right now.** The resident says, 'Should we intubate?' He's holding a syringe of IM epinephrine 0.3mg.",
    decision: 'What is your single most important next action?',
    options: [
      'Intubate now — she will lose her airway',
      'Take the syringe and give the IM epinephrine yourself, then reassess in 2 minutes',
      'Switch to nebulized albuterol for the stridor',
      'Give a second dose of diphenhydramine and methylprednisolone IV'
    ],
    answer: 1,
    explanation: "**Epinephrine, given IM, immediately.** This patient is in anaphylactic shock and has not yet received epinephrine. Diphenhydramine and steroids are adjuncts — they do nothing in the next 2 minutes. Epinephrine is the only intervention that addresses the actual physiology: it reverses bronchoconstriction, vasoconstricts, and stabilizes mast cells.\n\n**Why not the others:**\n- Intubation: she's getting worse because she hasn't had epi. Intubating an actively-deteriorating anaphylaxis patient without first giving epi is a setup for a difficult airway with edematous tissues. Give epi first, then reassess airway in 60-90 seconds.\n- Nebulized albuterol: helps bronchospasm but does nothing for the laryngeal edema causing stridor. Useful adjunct, not first move.\n- Repeat antihistamines/steroids: these are the wrong category of drug for this physiology. They don't reverse shock.\n\n**The teaching point:** the most common error in anaphylaxis management is delayed epinephrine while clinicians give 'safer-feeling' interventions first. The mortality data is unambiguous — every minute of epinephrine delay raises mortality. Epi is the answer; everything else is supportive.",
    biasTarget: 'safer-feeling interventions',
    relatedCaseId: 'anaphylaxis',
    relatedCaseLabel: 'Run the full anaphylaxis case'
  },

  {
    type: 'express',
    id: 'express-dka',
    profession: 'medicine',
    eyebrow: 'Express case · 5 min',
    title: 'A 24-year-old with type 1 diabetes, vomiting and altered',
    teaser: 'Glucose 612, pH 7.18, K+ 5.8. The resident wants to start insulin. Should you?',
    timeEstimate: '5 min',
    briefing: "You're the senior covering the floor. The night intern is admitting a patient and wants to start insulin. Here's the situation:\n\n**Presentation.** A 24-year-old woman with type 1 diabetes since age 9 was brought in by her boyfriend after 2 days of vomiting and progressive lethargy. He noticed her breathing changed about 6 hours ago — fast and deep.\n\n**History.** T1DM on insulin pump. She's been having vomiting from a presumed viral gastroenteritis for 2 days, ate little, and turned her pump basal rate down to half because 'I wasn't eating.'\n\n**On arrival.** BP 96/58, HR 118, RR 28 (Kussmaul), Temp 37.8. Drowsy but rousable. Mucous membranes dry, skin tenting. Fruity breath odor.\n\n**Labs back.** Glucose 612, Na 132, K **5.8**, Cl 96, HCO3 7, BUN 38, Cr 1.4. ABG: pH 7.18, pCO2 22, HCO3 8. Beta-hydroxybutyrate 6.2. UA: large ketones, glucose 4+.\n\n**Right now.** The intern has written orders for 1L NS bolus (already running) and is about to enter an order for IV insulin drip at 0.1 units/kg/hr. He asks if you want to add anything before he signs.",
    decision: 'What is the single most important change you make to this plan before insulin starts?',
    options: [
      "Add IV potassium replacement to the orders before insulin starts — she's about to crash her potassium",
      'Start the insulin drip now and recheck potassium in 1 hour',
      'Hold insulin until the second liter of fluids is in',
      "Start an insulin bolus first, not just a drip — she's profoundly acidotic"
    ],
    answer: 0,
    explanation: "**Her potassium is going to crash, and insulin will accelerate it.** A K of 5.8 in DKA is misleading. She's actually severely total-body potassium depleted — acidosis has shifted potassium out of cells, masking the deficit. The moment insulin starts, potassium shifts back in, and she can plummet from 5.8 to dangerous hypokalemia within an hour.\n\nThe ADA DKA protocol is explicit: if K is between 3.3 and 5.3, replace potassium concurrently with insulin. If K is below 3.3, hold insulin entirely until K is replaced. K of 5.8 sounds like a contraindication to replacement, but the trajectory matters more than the snapshot.\n\n**The right plan:** continue fluids, start insulin at 0.1 u/kg/hr, AND add 20-40 mEq KCl per liter to the IVF. Recheck K every 2 hours.\n\n**Why not the others:**\n- Start insulin and recheck in 1 hour: by then she may be in cardiac arrhythmia from hypokalemia.\n- Hold insulin until 2 liters in: delays correction of the acidosis without addressing the K problem at all.\n- Insulin bolus: not recommended in DKA — increases risk of hypoglycemia and hypokalemia without faster acidosis correction. The drip alone is adequate.\n\n**The teaching point:** in DKA, the question on insulin is never 'how fast can I start it' — it's 'have I prepared the patient's electrolytes for what insulin will do.'",
    biasTarget: 'snapshot vs trajectory thinking',
    relatedCaseId: 'dka-v1',
    relatedCaseLabel: 'Run the full DKA case'
  }
];
