/* js/ai-procedures-counseling.js — Categories H-J
 * I. Procedure Simulations (patch testing, SCIT dose adjustment, drug challenge)
 * J. Counseling Scenarios (AD diagnosis, OIT expectations, negative workup, SCIT duration)
 * H. Practice Management (penicillin de-labeling QI — integrated into drug challenge)
 */
(function(){
'use strict';

// ═══ I. PROCEDURE SIMULATIONS ═══
window.AI_PROCEDURES = [
  {
    id:'patch-test-interpretation',
    title:'Patch Testing Interpretation Simulator',
    category:'Procedure',
    milestones:['PC3','MK1'],
    steps:[
      {step:'Patient Setup',
       content:'42F hairdresser, chronic hand dermatitis × 2 years. 80-allergen NACDG panel applied to upper back.',
       task:'Anticipate likely positives based on occupation (hair dye chemicals, preservatives, fragrances, nickel in tools).'},
      {step:'48h Reading',
       content:'Nickel sulfate: 2+ (erythema+papules+vesicles). PPD: 1+ (erythema+papules). Ammonium persulfate: 2+. Fragrance mix I: 1+. Formaldehyde: (+?) faint erythema only. All others negative.',
       task:'Score each: (−), (+?), 1+, 2+, 3+. Note that (+?) and irritant reactions need 96h confirmation.'},
      {step:'96h Reading',
       content:'Nickel: 2+ persistent (crescendo→allergic). PPD: increased to 2+ (crescendo→allergic). Ammonium persulfate: decreased to 1+ (decrescendo→likely irritant). Fragrance mix I: 1+ stable. Formaldehyde: resolved (−) = was irritant.',
       task:'Crescendo = allergic. Decrescendo = irritant. Formaldehyde was false positive at 48h.'},
      {step:'Relevance',
       content:'TRUE POSITIVES: Nickel, PPD, Fragrance mix. IRRITANT: Formaldehyde. EQUIVOCAL: Ammonium persulfate (decrescendo BUT known occupational allergen in hairdressers — consider retesting). PPD is DIRECTLY relevant — present in hair dye. Nickel — scissors, tools. Fragrance — hair products.',
       task:'Determine which positives explain her clinical presentation.'},
      {step:'Counseling',
       content:'PPD avoidance: PPD-free hair dyes, nitrile gloves for all dye application. Nickel: coated tools/scissors, nickel spot test. Fragrance: fragrance-free products. Occupational implications: may qualify as occupational contact dermatitis (workers comp). If she cannot avoid PPD at work, career modification may be necessary.',
       task:'Write patch test report with clinical relevance and avoidance plan.'}
    ],
    teaching:'Patch testing: (1) Read at 48h AND 96h. (2) Crescendo=allergic, decrescendo=irritant. (3) Relevance determination is the hard part. (4) PPD cross-reacts with benzocaine, sulfonamides, PABA. (5) Occupational implications require documentation.'
  },
  {
    id:'scit-dose-adjustment',
    title:'SCIT Dose Adjustment Simulator',
    category:'Procedure',
    milestones:['PC3','PC4','SBP1'],
    steps:[
      {step:'Baseline',
       content:'Patient on conventional SCIT buildup (dust mite + grass + tree). Currently 0.3mL maintenance concentration. Weekly escalation 0.05mL/visit. Target: 0.5mL.',
       task:'Review standard escalation protocol.'},
      {step:'Large Local Reaction',
       content:'After 0.3mL injection: 8cm swelling at site, 30 min post. No systemic symptoms.',
       task:'ANSWER: Repeat SAME dose next visit. LLR common, no dose reduction unless persistent (3+ times at same dose). Pre-treat with antihistamine.'},
      {step:'Grade 1 Systemic Reaction',
       content:'At 0.35mL: generalized pruritus, 3-4 hives on trunk, 20 min post-injection. No respiratory/cardiovascular. Resolved with cetirizine in 30 min.',
       task:'ANSWER: Reduce 1-2 steps (back to 0.25-0.30mL). Pre-treat future injections. Resume cautious uptitration.'},
      {step:'Missed 3 Weeks (Buildup)',
       content:'Patient missed 3 weeks during buildup (was at 0.3mL).',
       task:'ANSWER: 1-2 weeks missed → repeat last dose. 2-3 weeks → reduce 1 step (0.25mL). >4 weeks → reduce 2+ steps. >3 months → may restart from beginning.'},
      {step:'Missed 6 Weeks (Maintenance)',
       content:'Patient on maintenance 0.5mL q4wk, missed 6 weeks.',
       task:'ANSWER: 4-6 weeks missed → reduce 25-50% (give 0.25-0.35mL). >8 weeks → reduce 50-75%. >6 months → re-escalate from low dose.'},
      {step:'Pollen Season',
       content:'Patient allergic to grass. In buildup during June (peak grass season). At 0.2mL.',
       task:'ANSWER: Slow or hold escalation during peak season for relevant allergens. Total allergen burden already high — advancing dose raises reaction risk. Resume normal escalation when season ends.'}
    ],
    teaching:'SCIT dose adjustments: (1) LLR → usually repeat dose. (2) Systemic → reduce 1-2 steps + premedicate. (3) Missed doses → longer gap = greater reduction. (4) Pollen season → slow/hold escalation. (5) Document every reaction and decision.'
  },
  {
    id:'drug-challenge-protocol',
    title:'Graded Drug Challenge Protocol Builder',
    category:'Procedure',
    milestones:['PC3','PC4','MK2'],
    steps:[
      {step:'Risk Stratification',
       content:'LOW RISK (proceed to challenge): vague history >10yr ago, GI-only, family history only, benign rash. MODERATE (skin test first if available): urticaria/angioedema, documented IgE reaction >5yr ago. HIGH (skin test required, may need desensitization): recent anaphylaxis. CONTRAINDICATED: SJS/TEN, DRESS, serum sickness — NEVER rechallenge.',
       task:'Classify the patient before proceeding.'},
      {step:'Amoxicillin Challenge',
       content:'35F, "penicillin allergy" since childhood (mother reports rash, no details). Penicillin skin test: NEGATIVE. Protocol: Step 1: 50mg (1/10th dose) → 30min. Step 2: 250mg (1/2) → 30min. Step 3: 500mg (full) → 60min. If tolerated: PASSED. Remove allergy from chart. Prescribe full amoxicillin course to reinforce tolerance.',
       task:'Execute 3-step amoxicillin challenge. Understand the antibiotic stewardship impact — penicillin de-labeling reduces C. diff risk, broadens antibiotic options, and saves healthcare costs.'},
      {step:'Celecoxib Challenge (NSAID-Sensitive)',
       content:'55F with COX-1-dependent NSAID hypersensitivity (angioedema from ibuprofen). Needs anti-inflammatory. Celecoxib (COX-2 selective) expected safe but must confirm. Protocol: 50mg → 60min → 100mg → 60min → 200mg → 60min. Longer intervals than amoxicillin because NSAID reactions can be delayed.',
       task:'Execute celecoxib challenge. Note: >98% of COX-1-sensitive patients tolerate celecoxib.'},
      {step:'Local Anesthetic Challenge',
       content:'42M, "allergy to lidocaine" — dizzy, racing heart during dental work. Almost certainly vasovagal or epinephrine effect (true local anesthetic allergy <1%). Protocol: Prick test lidocaine → 15min. Intradermal 0.1mL 1% lidocaine → 15min. SC 0.5mL → 30min. SC 1.0mL → 30min. If negative: NOT allergic.',
       task:'Execute challenge. True LA allergy is vanishingly rare.'},
      {step:'Reaction Management',
       content:'If reaction during ANY challenge: Mild (local urticaria) → observe, may cautiously continue. Moderate (generalized hives, angioedema) → STOP, antihistamine ± epi. Severe (anaphylaxis) → STOP, epi IM, IV access, fluids. Positive challenge = confirmed allergy. Negative = safe, de-label. Resuscitation equipment required for ALL challenges.',
       task:'Know the response protocol for each severity.'}
    ],
    teaching:'Drug challenges: (1) Risk-stratify first — SJS/TEN/DRESS are CONTRAINDICATIONS. (2) Skin test before challenge when available (penicillin best-validated). (3) Standard 3-step: 1/10 → 1/2 → full dose. (4) Penicillin de-labeling = high-value A/I service (stewardship, cost savings). (5) True local anesthetic allergy <1%. (6) Document everything.'
  }
];

// ═══ J. COUNSELING SCENARIOS ═══
window.AI_COUNSELING = [
  {
    id:'counseling-ad-diagnosis',
    title:'New Atopic Dermatitis Diagnosis — Parent Counseling',
    milestones:['ICS1','PC4'],
    setting:'Parents of 9-month-old with moderate AD.',
    patient:'9mo F, moderate AD (flexural, cheeks, BSA 20%). First-time parents, anxious, asking "What caused this? Is it food allergy? Are steroids safe?"',
    keyMessages:[
      'CAUSE: genetic (filaggrin mutations, immune dysregulation) — NOT caused by formula, detergents, or parenting.',
      'FOOD ALLERGY: AD is a risk factor FOR food allergy, but food allergy does not CAUSE AD in most cases. Do NOT order large food panels. Early introduction of allergens (peanut, egg) at 4-6mo is RECOMMENDED to PREVENT allergy.',
      'STEROID SAFETY: topical steroids are safe when used correctly. Steroid phobia → undertreatment → worse outcomes. Low-potency for face, medium for body.',
      'PROGNOSIS: ~60% improve by adolescence. Cannot predict individual course.',
      'DAILY CARE: moisturize 2x/day (cream not lotion), short lukewarm baths, pat dry, apply moisturizer within 3 min ("soak and seal"), fragrance-free everything.',
      'WHEN TO CALL: signs of skin infection (oozing, crusting, fever), sleep disruption from itch, rapid spread.'
    ],
    pitfalls:['Don\'t order IgE food panels "just to check" — false positives cause harm.','Don\'t minimize with "just moisturize" — AD is genuinely exhausting.','Don\'t say "eczema" and "atopic dermatitis" interchangeably without explaining they\'re the same.'],
    rubric:{empathy:'Validated parental anxiety?',accuracy:'Explained genetic basis, NOT caused by parenting?',actionable:'Provided concrete daily care plan?',anticipatory:'Addressed steroid phobia and food allergy myths?'}
  },
  {
    id:'counseling-oit-expectations',
    title:'Starting OIT — Setting Expectations',
    milestones:['ICS1','PC4'],
    setting:'Parents of 6-year-old starting peanut OIT (Palforzia).',
    patient:'6M with peanut anaphylaxis, Ara h 2 positive. Parents expect a "cure."',
    keyMessages:[
      'DESENSITIZATION, NOT CURE: raises reaction threshold for accidental exposure. He will still avoid peanut as primary food.',
      'DAILY COMMITMENT: dose EVERY DAY, same time, with food. Missing doses → loss of tolerance. Minimum 1-year updosing, then indefinite maintenance.',
      'REACTIONS EXPECTED: ~75% have some symptoms during updosing (oral itch, GI). ~14% need epinephrine at some point.',
      'RULES: no exercise 2h after dose, avoid dosing during illness, carry EpiPen always, contact us if >1 day missed.',
      'SUCCESS = safely tolerating accidental trace exposure. NOT eating PB&J sandwiches.',
      'EoE RISK: 3-5% develop eosinophilic esophagitis. Persistent GI symptoms → stop and evaluate.'
    ],
    pitfalls:['Don\'t promise a cure.','Don\'t minimize daily burden.','Don\'t proceed without BOTH parents understanding.','Don\'t forget EoE discussion.'],
    rubric:{empathy:'Acknowledged hope while being honest?',accuracy:'Explained desensitization vs cure, reaction rates, EoE?',actionable:'Outlined daily protocol and rules?',anticipatory:'Set realistic expectations for success?'}
  },
  {
    id:'counseling-negative-workup',
    title:'Explaining a Negative Allergy Workup',
    milestones:['ICS1','ICS2'],
    setting:'45F convinced she has food allergies. Naturopath did IgG panel showing 15 "sensitivities." Your testing is all negative.',
    patient:'45F with fatigue, bloating, brain fog. IgG panel from naturopath shows high IgG to dairy, gluten, eggs, soy, etc. She eliminated all 15 foods. SPT and specific IgE to all foods: NEGATIVE. Total IgE normal.',
    keyMessages:[
      'VALIDATE: "Your symptoms are real. I take them seriously."',
      'IgG PANELS: "IgG to foods reflects EXPOSURE, not allergy. Everyone has IgG to foods they eat. Not recommended by any major allergy organization."',
      'WHAT WE RULED OUT: "You do NOT have IgE-mediated food allergy. These foods are immunologically safe."',
      'WHAT ELSE TO CONSIDER: non-celiac gluten sensitivity (trial elimination of gluten alone), lactose intolerance (breath test), IBS/FODMAP, thyroid, sleep, iron deficiency, depression/anxiety.',
      'REINTRODUCTION: "Reintroduce eliminated foods one at a time, every 3-5 days. Unnecessary restriction → nutritional deficiency and disordered eating."',
      'REFERRAL: GI for GI symptoms, PCP for fatigue workup (thyroid, iron, sleep).'
    ],
    pitfalls:['Don\'t dismiss the naturopath or make her feel foolish.','Don\'t say "nothing is wrong" — her symptoms ARE real.','Don\'t order more allergy tests to appease.','Don\'t leave without a path forward.'],
    rubric:{empathy:'Validated symptoms while explaining testing limitations?',accuracy:'Correctly explained IgG panels are not diagnostically valid?',actionable:'Provided alternative explanations and referrals?',anticipatory:'Addressed risks of unnecessary food restriction?'}
  },
  {
    id:'counseling-scit-duration',
    title:'Immunotherapy Duration — Shared Decision-Making',
    milestones:['ICS1','PC4','PBLI1'],
    setting:'32M on SCIT × 3 years, rhinitis well-controlled, wants to know if he can stop.',
    patient:'32M on SCIT (dust mite + grass + tree) × 3 years for moderate-severe allergic rhinitis. Previously on daily fluticasone + cetirizine. Now: minimal symptoms on SCIT alone, no rescue antihistamines. Asks "Is 3 years enough?"',
    keyMessages:[
      'STANDARD RECOMMENDATION: 3-5 years is the guideline range. At 3 years, he has disease-modifying benefit but maximum benefit is at 4-5 years.',
      'EVIDENCE: after 3 years of SCIT, ~70% maintain benefit for 3-7 years post-discontinuation. After 5 years, duration of benefit is LONGER and more durable.',
      'HIS SITUATION: excellent response at 3 years is good, but for PERENNIAL allergens (dust mite), longer treatment may provide more durable benefit because exposure is continuous.',
      'OPTION A — STOP AT 3 YEARS: reasonable if he accepts ~30% chance of relapse within 3-5 years. Can restart if symptoms return.',
      'OPTION B — CONTINUE TO 5 YEARS: maximizes durability. Additional 2 years of monthly injections.',
      'OPTION C — SWITCH TO SLIT: sublingual tablets (dust mite SLIT — Odactra) allow home administration, less burden. Can continue for the remaining 2 years as SLIT instead of SCIT.',
      'SHARED DECISION: there is no single "right" answer. It depends on his symptom severity, quality of life impact, convenience, and risk tolerance.'
    ],
    pitfalls:['Don\'t give a single directive ("you must do 5 years") — this IS a shared decision.','Don\'t dismiss 3 years as "not enough" — it IS within guidelines.','Don\'t forget to mention SLIT as an alternative continuation strategy.','Don\'t oversell the relapse risk — 70% maintain benefit even at 3 years.'],
    rubric:{empathy:'Acknowledged the burden of ongoing injections?',accuracy:'Presented accurate duration data (3-5yr range, 70% maintenance)?',actionable:'Offered concrete options (stop, continue, switch to SLIT)?',anticipatory:'Discussed what happens if symptoms relapse?'}
  }
];

// ═══ H. PRACTICE MANAGEMENT — Penicillin De-labeling QI ═══
window.AI_PRACTICE_MGMT = [
  {
    id:'penicillin-delabeling-qi',
    title:'Penicillin De-labeling Quality Improvement Project',
    category:'SBP/QI',
    milestones:['SBP1','SBP3','PBLI1','PBLI2'],
    overview:'Design and implement a penicillin allergy de-labeling program for your institution.',
    sections:[
      {title:'The Problem',
       content:'~10% of patients carry a "penicillin allergy" label. Of these, >95% are NOT truly allergic (IgE wanes over time, original reaction was non-allergic, or label was never verified). The consequences: broader-spectrum antibiotics (vancomycin, fluoroquinolones, carbapenems) → increased C. diff risk (3x higher), more antibiotic resistance, higher costs ($30-50M annually per large hospital), longer hospital stays, surgical site infection rates higher in "penicillin-allergic" patients.'},
      {title:'Intervention Design',
       content:'Tier 1 (Low Risk — direct oral challenge): vague history, childhood rash >10yr ago, family history only, GI symptoms only, unknown reaction → amoxicillin graded challenge (no skin testing needed). Tier 2 (Moderate Risk — skin test + challenge): documented urticaria/angioedema, IgE-mediated reaction 5-10yr ago → penicillin skin test. If negative → amoxicillin challenge. Tier 3 (High Risk — allergist evaluation): recent anaphylaxis, SJS/TEN, DRESS → formal allergist consultation only.'},
      {title:'Implementation',
       content:'Phase 1: Identify patients with "penicillin allergy" in EMR (prevalence ~10% of admissions). Phase 2: Clinical pharmacist-led screening using standardized risk tool (PEN-FAST score). Phase 3: Low-risk patients → nurse-administered oral amoxicillin challenge (500mg × 1 dose, 60min observation). Moderate-risk → allergist skin testing + challenge. Phase 4: REMOVE allergy label from EMR, give patient de-labeling card, prescribe amoxicillin 500mg TID × 10 days to reinforce tolerance.'},
      {title:'Outcomes to Measure',
       content:'Primary: % of "penicillin-allergic" patients successfully de-labeled. Secondary: change in broad-spectrum antibiotic use (vancomycin, fluoroquinolone days of therapy), C. diff rates, antibiotic costs per admission, surgical prophylaxis concordance (cefazolin use instead of vancomycin/clindamycin). Process measures: time from allergy flag to de-labeling, % screened, patient satisfaction.'},
      {title:'Sustainability',
       content:'Embed in EMR: best practice alert for "penicillin allergy" on admission. Pharmacist-led screening on every admission. Standardized order set for graded challenge. Annual report to antimicrobial stewardship committee. Train hospitalists, surgeons, and anesthesiologists to recognize low-risk histories and refer for de-labeling.'}
    ],
    teaching:'Penicillin de-labeling: (1) >95% of labeled patients are NOT truly allergic. (2) This is the highest-impact QI project an allergist can lead. (3) PEN-FAST score risk-stratifies without skin testing. (4) Low-risk patients can be challenged directly (no skin test needed). (5) Metrics: de-labeling rate, broad-spectrum antibiotic use, C. diff, costs. (6) Embed in EMR workflows for sustainability.'
  }
];

})();
