/* RDX_BRANCHED — Library of branched decision cases.
 *
 * Each case is a clinical scenario where the user makes 3-5 choices,
 * each choice has consequences (good/warn/bad) and embedded teaching,
 * and the path branches based on what they pick. The format complements
 * the daily reasoning puzzle: where the daily puzzle is "answer in a
 * textbox and reflect," the branched format is "decide and live with
 * the consequence."
 *
 * AUTHORING NOTES
 *
 * Each case is genuinely 5x the writing cost of a daily puzzle. Three
 * choices per node × 3-5 nodes = 9-15 mini-teaching blocks instead of 1.
 * That's the whole point — the dramatic structure IS the engagement
 * mechanic. Don't add a branched case unless the scenario has real
 * decision tension at every node.
 *
 * Case shape:
 *   id           — kebab-case slug, used in URL (?id=...)
 *   title        — short title for the library card
 *   summary      — 1-2 sentence card description (no spoilers)
 *   category     — one of: 'cardiovascular', 'neurologic', 'respiratory',
 *                  'gi', 'renal', 'heme', 'infectious', 'endocrine',
 *                  'pediatric', 'tox', 'rheum', 'general'
 *   acuity       — 1 (routine) to 4 (life-threatening, time-critical)
 *   timeEstimate — minutes (typical run-through), e.g. 4
 *   scenarioTag  — short atmospheric tag shown above the scenario
 *   scenario     — full clinical setup text
 *   timerStrip   — optional ⚠ banner shown when acuity ≥ 3
 *   nodes        — { nodeId: { prompt, choices } }
 *   choices      — array of { label, hint, tone, consequenceHead,
 *                            consequence, teaching, next }
 *   tone         — 'good' | 'warn' | 'bad'
 *   next         — node id of next prompt, or 'end-good'/'end-bad'/etc.
 *   endings      — { endingId: { title, verdict } }
 *   references   — same shape as the daily puzzles' references array
 *                  (citation + url, plain text, no hyperlinks)
 *
 * SOURCE POLICY
 * Strict open-access, same as daily puzzles:
 *   - StatPearls (NIH Bookshelf NBK URLs)
 *   - AHA/ACC published guidelines (ahajournals.org)
 *   - NIH Bookshelf chapters
 * Nothing else without explicit policy expansion.
 */

window.RDX_BRANCHED = [

  // ── CASE 1: HERNIATION OVERNIGHT ─────────────────────────────────
  // Promoted from puzzle-branched-demo.html. Original prototype case;
  // demonstrates the format with real time-pressure decisions.
  {
    id: 'herniation-overnight',
    title: 'Herniation, overnight',
    summary: 'You are alone with a patient showing Cushing triad and a blown pupil. Six minutes until the attending arrives.',
    category: 'neurologic',
    acuity: 4,
    timeEstimate: 4,

    scenarioTag: 'Overnight, you are alone',
    scenario: "78-year-old male found unresponsive on the floor of his hospital room. Nurse reports sudden onset 10 minutes ago. GCS 7 (E1V2M4). Right pupil 6mm fixed; left pupil 3mm reactive. Vitals: BP 188/104, HR 52, RR 8 and irregular. The attending is 6 minutes away.",
    timerStrip: 'Cushing triad + blown pupil. Every minute matters.',

    nodes: {
      n1: {
        prompt: "What do you do FIRST?",
        choices: [
          { label: "Call neurosurgery STAT and start emergent treatment in parallel",
            hint: "Treat and call simultaneously",
            tone: 'good',
            consequenceHead: "Right move.",
            consequence: "You hit the page button while moving. The nurse is already at the head of the bed. You ask her to bring up mannitol and prepare for intubation while you call.",
            teaching: "In a herniation syndrome you cannot afford to do steps sequentially. Treatment, imaging, and consultation all start at once. The blown pupil + Cushing triad (hypertension, bradycardia, irregular respiration) is a clinical diagnosis — you do not wait for CT to start treatment.",
            next: 'n2'
          },
          { label: "Order STAT CT head, then decide treatment based on results",
            hint: "Image first to confirm",
            tone: 'bad',
            consequenceHead: "Patient deteriorates while in CT.",
            consequence: "By the time the scan is read, the patient has bilateral fixed pupils and is posturing. The herniation has progressed past the salvageable window.",
            teaching: "Imaging is critical for surgical planning but it is NEVER the first step in a presumed herniation. The clinical signs (blown pupil + Cushing triad + decreased GCS) are diagnostic enough to start treatment. Imaging happens DURING treatment, not before it.",
            next: 'end-bad'
          },
          { label: "Reassess GCS to confirm the decline before acting",
            hint: "Verify before treating",
            tone: 'warn',
            consequenceHead: "Lost minutes you didn't have.",
            consequence: "You spend 90 seconds on a careful neuro exam. The findings are unchanged. You now begin treatment — but the herniation has progressed and the prognosis is worse.",
            teaching: "Repeating the exam is a defensible instinct, but in a clear herniation picture (asymmetric blown pupil + decreased GCS + abnormal vitals) the diagnosis is already made. The exam window should be seconds, not minutes. Your finding will not change; your patient's brain will.",
            next: 'n2'
          }
        ]
      },

      n2: {
        prompt: "Neurosurgery is on the way. The patient is bagged and ready for intubation. What is your induction plan?",
        choices: [
          { label: "Etomidate + rocuronium, head of bed elevated, mild hyperventilation",
            hint: "Neuro-protective RSI",
            tone: 'good',
            consequenceHead: "Tubed cleanly. ICP optimized.",
            consequence: "Etomidate maintains hemodynamics. The mild hyperventilation buys you ICP reduction while the osmotherapy takes effect. Head of bed up improves venous drainage.",
            teaching: "Neuro-protective RSI: avoid agents that raise ICP or drop cerebral perfusion pressure. Etomidate is hemodynamically neutral. Brief mild hyperventilation reduces ICP via cerebral vasoconstriction — useful as a bridge but NOT sustained (rebound). Rocuronium is preferred over succinylcholine here because succinylcholine can transiently raise ICP.",
            next: 'n3'
          },
          { label: "Ketamine + succinylcholine, head flat for line access",
            hint: "Standard ED RSI",
            tone: 'bad',
            consequenceHead: "ICP spikes during induction.",
            consequence: "Succinylcholine fasciculations transiently raise ICP. Head flat compromises venous drainage further. The patient's pupil exam worsens as you place the tube.",
            teaching: "Two errors. Ketamine has historically been considered ICP-raising though the modern evidence is more nuanced — but in a clear herniation picture, etomidate is safer. Succinylcholine causes a transient ICP rise from fasciculations, which is the last thing this patient needs. And HOB flat reduces venous drainage. Always elevate the head in suspected ICP elevation.",
            next: 'n3'
          },
          { label: "Propofol + rocuronium",
            hint: "Drops ICP via sedation",
            tone: 'warn',
            consequenceHead: "Tubed, but the BP dropped.",
            consequence: "Propofol does reduce ICP, but it also dropped this patient's MAP substantially. Cerebral perfusion pressure (MAP minus ICP) just collapsed.",
            teaching: "Propofol reduces ICP — true. But it also drops MAP, and in a herniating patient with already-compromised cerebral perfusion, hypotension is catastrophic. CPP = MAP − ICP. If you lower ICP modestly but lower MAP profoundly, you've made perfusion worse. Etomidate preserves hemodynamics; that matters more than the modest ICP benefit.",
            next: 'n3'
          }
        ]
      },

      n3: {
        prompt: "You have one more decision before neurosurgery arrives. Pick your osmotherapy.",
        choices: [
          { label: "Mannitol IV bolus",
            hint: "Classic choice",
            tone: 'good',
            consequenceHead: "Pupil starts to react. Buying time.",
            consequence: "Within minutes the right pupil shrinks from 6mm to 4mm and shows sluggish reactivity. You've bought a window for the OR. Neurosurgery walks in.",
            teaching: "Mannitol is the most evidence-supported osmotic agent for emergent ICP reduction. Onset is rapid; effect peaks over the following half hour or so. Watch for hypotension from the osmotic diuresis and follow serum osmolality.",
            next: 'end-good'
          },
          { label: "Hypertonic saline IV push via central line",
            hint: "More potent in some cases",
            tone: 'good',
            consequenceHead: "Pupil reacts. Excellent choice.",
            consequence: "Hypertonic saline takes effect rapidly. The right pupil shrinks to 4mm. Neurosurgery arrives and takes the patient to the OR.",
            teaching: "Hypertonic saline (concentrated formulations require central access; more dilute formulations can run peripheral) is increasingly preferred over mannitol in some institutions: faster onset, no diuresis-induced hypotension, sustained effect. The evidence base for HTS in herniation is growing. Either is defensible. Both are correct.",
            next: 'end-good'
          },
          { label: "Hold osmotherapy until neurosurgery arrives and decides",
            hint: "Defer to specialist",
            tone: 'bad',
            consequenceHead: "Patient herniates further.",
            consequence: "By the time neurosurgery arrives a few minutes later, both pupils are fixed. The decompression is performed but the prognosis is poor.",
            teaching: "Osmotherapy is not a specialist decision in an unstable herniating patient. The evidence is unambiguous: mannitol or HTS, immediately, while waiting for neurosurgery. Deferring 'because the specialist isn't here yet' is the deferential trap that costs minutes in time-critical decisions. Treat to the standard of care; let the specialist refine, not initiate.",
            next: 'end-bad'
          }
        ]
      }
    },

    endings: {
      'end-good': {
        title: 'Patient to OR with reactive pupil.',
        verdict: 'You ran the herniation algorithm cleanly. Treatment in parallel with diagnosis, neuro-protective induction, osmotherapy started before the specialist arrived. The patient has a fighting chance.'
      },
      'end-bad': {
        title: 'Outcome: bilateral fixed pupils on arrival to OR.',
        verdict: 'Time was the limiting reagent. The specific choice that cost minutes is what to revisit. The clinical picture was unambiguous from the start; the question was always whether you would treat in parallel or sequentially.'
      }
    },

    references: [
      {
        citation: 'Patel S, M Das J. Cerebral Herniation. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK542246/'
      }
    ]
  },

  // ── CASE 2: CHEST PAIN AT 2 AM ───────────────────────────────────
  // Diagnostic reasoning under uncertainty. ACS vs aortic dissection
  // vs PE share an opening presentation but diverge on workup, and
  // the wrong workup for any one of them harms the patient. Target
  // learner: M3/M4. Tests parallel workup, anchoring resistance, and
  // probability updating when a discriminating finding lands.
  {
    id: 'chest-pain-2am',
    title: 'Chest pain at 2 AM',
    summary: 'A 58-year-old presents with chest pain. The vitals are subtle, the story is murky, and three different killers are on your differential.',
    category: 'cardiovascular',
    acuity: 3,
    timeEstimate: 5,

    scenarioTag: 'ED, overnight, mid-shift',
    scenario: "58-year-old man, no prior cardiac history, presents at 2 AM with substernal chest pain that began 90 minutes ago while watching TV. He describes it as a deep ache, constant since onset, not clearly worse with exertion or breathing. He has hypertension, takes lisinopril, and smokes a pack a day. Vitals: BP 168/94 right arm, HR 102, RR 20, SpO2 95% on room air, afebrile. He looks uncomfortable but not in extremis. The first ECG shows sinus tachycardia with nonspecific T-wave flattening in the lateral leads. Initial troponin pending.",
    timerStrip: 'Three killers on the differential. The wrong workup for any of them harms the patient.',

    nodes: {
      n1: {
        prompt: "What do you do FIRST?",
        choices: [
          { label: "Aspirin and heparin now, repeat ECG in 15 minutes, troponin trend",
            hint: "Treat presumed ACS empirically",
            tone: 'warn',
            consequenceHead: "You started an ACS pathway on a differential that is not narrowed yet.",
            consequence: "Aspirin is reasonable. Heparin commits you to one diagnosis before you have ruled out the alternatives. The patient receives the first dose while you wait on the second troponin.",
            teaching: "Aspirin alone is defensible early in an undifferentiated chest pain workup with concerning features. Full anticoagulation (heparin) is a different commitment: it makes one of your top three differentials (aortic dissection) catastrophically worse. The discipline early in an undifferentiated presentation is to treat what is reversibly time-critical (oxygen if hypoxic, aspirin if no contraindication) while you actively narrow the differential, not to lock into one diagnosis on the first ECG.",
            next: 'n2'
          },
          { label: "Parallel workup: aspirin, both-arm BP, bedside ultrasound, CXR, troponin trend, D-dimer if low pretest probability for PE",
            hint: "Run the discriminators in parallel",
            tone: 'good',
            consequenceHead: "Right move. You are narrowing all three differentials at once.",
            consequence: "Aspirin is given. The nurse cycles the right arm cuff while you grab the ultrasound. The X-ray tech is on the way. You are buying yourself the discriminating data you need before you commit to a pathway.",
            teaching: "When the differential includes ACS, aortic dissection, and PE, sequential workup costs you time on whichever diagnosis you did not pick first. Parallel workup uses cheap, fast tests as discriminators: both-arm BP (asymmetry suggests dissection), CXR (mediastinal width, pneumothorax, effusion), bedside echo (pericardial effusion, RV strain), and a focused history for PE risk factors. You commit to a pathway after the discriminators come back, not before.",
            next: 'n2'
          },
          { label: "Activate the cath lab based on the lateral T-wave changes",
            hint: "Treat as STEMI-equivalent",
            tone: 'bad',
            consequenceHead: "Cath lab activated on nonspecific findings.",
            consequence: "The interventional cardiologist arrives, reviews the ECG, and pushes back. Nonspecific lateral T-wave flattening in a tachycardic patient is not a STEMI-equivalent. The activation is stood down, and you have lost trust on a shift where you may need it again.",
            teaching: "Cath lab activation criteria are specific: ST elevation meeting criteria, posterior MI pattern, new LBBB with concerning features (Sgarbossa), or specific high-risk patterns like de Winter T-waves or Wellens. Nonspecific T-wave changes in a tachycardic patient are not on that list. Over-activation degrades the system's response to real STEMIs and signals diagnostic anchoring.",
            next: 'n2'
          }
        ]
      },

      n2: {
        prompt: "Discriminators come back. Right arm BP 168/94, left arm BP 142/82. CXR shows a subtly widened mediastinum that the radiologist on call calls 'borderline, recommend correlation.' Troponin returns at the upper limit of normal. The patient now mentions the pain radiates between his shoulder blades. What is your next move?",
        choices: [
          { label: "CT angiography of the chest with aortic protocol",
            hint: "Image for dissection",
            tone: 'good',
            consequenceHead: "Right pivot. You updated on the new data.",
            consequence: "CTA shows a Stanford type A dissection extending from the aortic root to the descending aorta. Cardiothoracic surgery is paged. The patient is moved to the OR within the hour.",
            teaching: "Three findings just shifted your probabilities: inter-arm BP differential (greater than 20 mmHg systolic is concerning), a borderline-widened mediastinum, and interscapular pain radiation. None alone is diagnostic; together they raise dissection from 'on the differential' to 'rule out now.' The right test is CT angiography of the chest with aortic protocol. A normal troponin does not rule out dissection (and a slightly elevated one can occur with coronary involvement of the dissection flap). This is the case where anchoring on ACS would have been catastrophic if heparin had been given.",
            next: 'n3'
          },
          { label: "Continue ACS workup: serial troponins, repeat ECG, start heparin given the borderline troponin",
            hint: "Borderline troponin = ACS",
            tone: 'bad',
            consequenceHead: "Heparin started on a dissection.",
            consequence: "Within 30 minutes the patient becomes hypotensive and diaphoretic. A bedside echo shows a pericardial effusion with tamponade physiology. The CT you finally order shows a type A dissection that is now bleeding into the pericardium. The heparin made the bleeding worse.",
            teaching: "An upper-limit-of-normal troponin in the setting of inter-arm BP asymmetry, mediastinal widening, and interscapular pain is not an ACS picture. The discriminating data has moved you off ACS, but you stayed anchored. Anticoagulation in an aortic dissection is catastrophic: it accelerates bleeding into the false lumen, the pericardium, or the mediastinum. The lesson is that probability updating goes both ways: new data should move your differential, not just confirm your starting hypothesis.",
            next: 'end-bad'
          },
          { label: "Order a D-dimer to evaluate for PE before imaging",
            hint: "Rule out PE first",
            tone: 'warn',
            consequenceHead: "D-dimer ordered, but you are slow-walking a dissection.",
            consequence: "The D-dimer comes back elevated (as it often does in dissection). You now have a positive screen with multiple possible explanations and have not advanced toward the diagnosis. The patient is becoming more uncomfortable.",
            teaching: "D-dimer is a screening test for PE in low-pretest-probability patients. In a patient whose discriminators (inter-arm BP, mediastinal widening, interscapular radiation) point toward dissection, D-dimer is not the right next test, and an elevated result will not tell you which of your two top differentials it represents. D-dimer is also frequently elevated in dissection itself, which is one of the reasons it is not used to rule dissection in or out. Move directly to CT angiography when dissection is the leading diagnosis.",
            next: 'n3'
          }
        ]
      },

      n3: {
        prompt: "CT angiography confirms a Stanford type A aortic dissection. The patient's BP is now 172/98, HR 108, and he is more anxious. Cardiothoracic surgery is en route. What is your management while you wait?",
        choices: [
          { label: "IV beta blocker first, then a vasodilator if BP remains elevated, target HR under 60 and SBP 100 to 120",
            hint: "Rate first, then pressure",
            tone: 'good',
            consequenceHead: "Hemodynamics controlled. Patient stable for OR.",
            consequence: "The beta blocker brings the heart rate down and reduces aortic wall stress. BP comes down with the addition of a vasodilator. The patient is stable when surgery arrives.",
            teaching: "In aortic dissection, the priority is reducing aortic wall stress, which is a function of both blood pressure AND the rate of pressure rise (dP/dt). Heart rate matters as much as systolic pressure: a fast heart rate with a high pressure produces a high dP/dt and propagates the dissection. Beta blockade comes first. A vasodilator alone causes reflex tachycardia, which raises dP/dt and worsens the dissection. The standard targets are heart rate under 60 and systolic blood pressure between 100 and 120 mmHg.",
            next: 'end-good'
          },
          { label: "IV vasodilator alone to bring the systolic pressure down quickly",
            hint: "Drop the pressure first",
            tone: 'bad',
            consequenceHead: "Reflex tachycardia. Patient deteriorates.",
            consequence: "The blood pressure comes down but the heart rate climbs to 130. The patient becomes diaphoretic. A repeat scan shows the dissection has propagated.",
            teaching: "Vasodilator monotherapy in dissection causes reflex tachycardia, which increases dP/dt and worsens the dissection. The principle is rate before pressure: a beta blocker (or another agent that controls heart rate) goes first, and a vasodilator is added if pressure remains elevated. This is one of the most counterintuitive points in dissection management because the high blood pressure feels like the obvious target.",
            next: 'end-bad'
          },
          { label: "Hold all antihypertensives and let surgery decide on arrival",
            hint: "Defer to specialist",
            tone: 'bad',
            consequenceHead: "Dissection propagates while you wait.",
            consequence: "Over the next 20 minutes the patient becomes hypotensive. A bedside echo shows new pericardial effusion. The dissection has extended into the pericardium.",
            teaching: "Hemodynamic control in a confirmed aortic dissection is not a specialist-only decision. The standard of care is immediate rate and pressure control while awaiting surgery; deferring loses the window when control is most achievable. The same deferential trap applies in herniation, in massive PE, and in any time-critical condition where the consultant is minutes away.",
            next: 'end-bad'
          }
        ]
      }
    },

    endings: {
      'end-good': {
        title: 'Patient to OR with controlled hemodynamics.',
        verdict: 'You ran an undifferentiated chest pain workup the way it should be run: parallel discriminators early, probability updating when the data moved, and the right specific intervention once the diagnosis was clear. Each of the three killers required a different next step, and you avoided the trap of treating any of them before the differential narrowed.'
      },
      'end-bad': {
        title: 'Outcome: hemodynamic instability before OR.',
        verdict: 'The opening was undifferentiated but the discriminators were doing real work. The choice that cost the most was the one where the data had already moved the diagnosis but the workup had not moved with it. In a three-killer differential, anchoring is the most expensive error because the wrong treatment for the wrong diagnosis is actively harmful, not just inefficient.'
      }
    },

    references: [
      {
        citation: 'Levy D, Sharma S, Grigorova Y, et al. Aortic Dissection. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK441963/'
      },
      {
        citation: 'Isselbacher EM, Preventza O, Hamilton Black J 3rd, et al. 2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation.',
        url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106'
      }
    ]
  },

  // ── CASE 3: HEMATEMESIS IN CIRRHOSIS ─────────────────────────────
  // Diagnostic reasoning under uncertainty in a cirrhotic with upper
  // GI bleed. Variceal vs peptic vs Mallory-Weiss share the opening
  // (hematemesis, hypotension), but the cirrhosis-specific
  // resuscitation rules diverge sharply from "give blood until the
  // hemoglobin is up." Tests restrictive transfusion strategy,
  // pre-endoscopy octreotide and antibiotic prophylaxis, and
  // post-banding rebleed risk stratification. M3/M4 target.
  {
    id: 'cirrhosis-gi-bleed',
    title: 'Hematemesis at 11 PM',
    summary: 'A cirrhotic patient arrives in shock with hematemesis. Aggressive resuscitation feels right and is exactly the wrong instinct.',
    category: 'gi',
    acuity: 4,
    timeEstimate: 5,

    scenarioTag: 'ED resus bay, evening',
    scenario: "54-year-old woman with cirrhosis (Child-Pugh B, alcohol use disorder, last drink yesterday) brought in by EMS after vomiting bright red blood twice at home. She is pale and diaphoretic but answering questions. Vitals: BP 92/58, HR 118, RR 22, SpO2 96% on room air, afebrile. Abdomen distended with shifting dullness, no peritoneal signs. Two large-bore IVs are in. Initial labs pending. The nurse is asking what you want for resuscitation.",
    timerStrip: 'Cirrhotic GI bleed. The resuscitation rules are not the trauma rules.',

    nodes: {
      n1: {
        prompt: "What is your resuscitation strategy?",
        choices: [
          { label: "Restrictive transfusion: target hemoglobin around 7, balanced crystalloid for perfusion, type and cross",
            hint: "Permissive low hemoglobin",
            tone: 'good',
            consequenceHead: "Right strategy. You are not making the bleed worse.",
            consequence: "You hold off on empiric blood products. The first hemoglobin returns at 8.2. The patient's mental status holds, perfusion improves with measured crystalloid, and you have not raised her portal pressure.",
            teaching: "In acute upper GI bleed in cirrhosis, the evidence supports a restrictive transfusion strategy with a hemoglobin trigger around 7 g/dL (higher only with significant comorbid cardiovascular disease or hemodynamic instability not responsive to volume). Aggressive transfusion to a higher hemoglobin paradoxically raises portal pressure and increases the rate of rebleeding from varices. The trauma instinct (transfuse to a higher target) actively worsens outcomes here. The Villanueva trial established this in 2013 and the finding has held up in subsequent guidelines.",
            next: 'n2'
          },
          { label: "Massive transfusion protocol: PRBCs, FFP, and platelets in a 1:1:1 ratio to keep up with the bleeding",
            hint: "Hemorrhagic shock = MTP",
            tone: 'bad',
            consequenceHead: "Portal pressure climbs. The bleed worsens.",
            consequence: "Three units of PRBCs and matched FFP go in over the next hour. The hemoglobin reaches 10. Within 20 minutes the patient vomits another large volume of blood and her blood pressure drops further.",
            teaching: "Massive transfusion protocols are designed for traumatic hemorrhagic shock, where the priority is replacing what is being lost while controlling the source. In cirrhotic variceal bleeding, the same approach raises portal pressure as the intravascular volume is restored, and the variceal bleed accelerates. Restrictive transfusion (target around 7) is the evidence-based approach. The instinct to transfuse aggressively in a hypotensive bleeding patient is a trauma rule that does not transfer to this physiology.",
            next: 'end-bad'
          },
          { label: "Aggressive crystalloid resuscitation, hold blood products until hemoglobin is known",
            hint: "Crystalloid first",
            tone: 'warn',
            consequenceHead: "Volume on board, but you over-resuscitated.",
            consequence: "Several liters of crystalloid go in quickly. The blood pressure improves. The hemoglobin returns at 7.8 but the patient now appears more distended and her oxygen saturation is dropping.",
            teaching: "Large-volume crystalloid in a cirrhotic with portal hypertension worsens ascites, can precipitate hepatic hydrothorax or pulmonary edema, and dilutes clotting factors that are already low. Targeted, measured crystalloid for perfusion (not aggressive volume loading) plus selective transfusion at a hemoglobin around 7 is the right balance. Crystalloid is not free in a cirrhotic in the way it can feel free in a young trauma patient.",
            next: 'n2'
          }
        ]
      },

      n2: {
        prompt: "Hemoglobin is 8.2. The patient is hemodynamically stabilized on measured resuscitation. GI is en route for endoscopy in 90 minutes. What do you start now, before the scope?",
        choices: [
          { label: "Octreotide infusion AND ceftriaxone, plus pantoprazole",
            hint: "Vasoactive + antibiotic + acid suppression",
            tone: 'good',
            consequenceHead: "All three go in. You have covered the differential.",
            consequence: "The octreotide drip is started. Ceftriaxone is given. Pantoprazole goes in. By the time GI arrives, the patient has had every pre-endoscopy intervention that reduces mortality.",
            teaching: "Three pre-endoscopy interventions in a cirrhotic with upper GI bleed: vasoactive agent (octreotide reduces splanchnic blood flow and helps with variceal bleeding even before the diagnosis is confirmed), prophylactic antibiotics (ceftriaxone reduces mortality independent of whether infection is present, because cirrhotics with GI bleed have a high rate of bacterial translocation and SBP), and a PPI (covers the peptic component of the differential). All three are started empirically before endoscopy because you do not know yet whether the source is variceal, peptic, or both, and the first two have mortality benefit specifically in cirrhosis.",
            next: 'n3'
          },
          { label: "Pantoprazole only, hold octreotide and antibiotics until endoscopy confirms a variceal source",
            hint: "Wait for the diagnosis",
            tone: 'bad',
            consequenceHead: "Mortality-reducing interventions delayed.",
            consequence: "The pantoprazole goes in. Endoscopy in 90 minutes confirms variceal bleeding, which is then banded. On hospital day 2, the patient develops fever and altered mental status; ascitic fluid analysis shows SBP. She had not received antibiotic prophylaxis on admission.",
            teaching: "Antibiotic prophylaxis (typically ceftriaxone) in cirrhotic GI bleed is not contingent on the source being variceal. The mortality benefit comes from preventing SBP and other bacterial infections, which are common in cirrhotics with GI bleed regardless of bleeding source. Octreotide is similarly started empirically because (a) you do not yet know the source, (b) the side effect profile is benign, and (c) waiting for endoscopy to confirm variceal bleeding before starting it gives up the early treatment window.",
            next: 'end-bad'
          },
          { label: "Octreotide and pantoprazole, hold antibiotics unless there is fever or signs of infection",
            hint: "Antibiotics only if infected",
            tone: 'bad',
            consequenceHead: "You missed the prophylactic indication.",
            consequence: "The octreotide and pantoprazole go in. Endoscopy confirms varices, banded successfully. Two days later the patient develops SBP and decompensates further.",
            teaching: "The antibiotic indication in cirrhotic GI bleed is prophylactic, not therapeutic: you give it to prevent SBP and other bacterial infections that are common in cirrhotics with GI bleed even when no infection is clinically apparent at presentation. Ceftriaxone is the standard agent. Waiting for fever or signs of infection misses the point of the intervention; by the time SBP is clinically apparent, the prophylaxis window has closed and the mortality benefit is lost.",
            next: 'n3'
          }
        ]
      },

      n3: {
        prompt: "Endoscopy reveals actively bleeding esophageal varices, which are banded successfully. The patient is admitted to the ICU. On hospital day 1, she is hemodynamically stable but her Child-Pugh score is now C and her HVPG (hepatic venous pressure gradient) was estimated at greater than 20 mmHg during the procedure. What do you recommend next?",
        choices: [
          { label: "Early TIPS within 72 hours given high-risk features",
            hint: "Pre-emptive TIPS for high rebleed risk",
            tone: 'good',
            consequenceHead: "Right call for a high-risk patient.",
            consequence: "Hepatology and IR agree. The TIPS is placed within 72 hours of the index bleed. The patient does well and is discharged on day 7 with secondary prophylaxis arranged.",
            teaching: "Early (pre-emptive) TIPS within 72 hours of presentation is recommended for high-risk variceal bleeders: Child-Pugh C up to a threshold (commonly cited as up to 13 points), or Child-Pugh B with active bleeding at endoscopy, or HVPG above 20 mmHg. The Garcia-Pagan trial and subsequent data show reduced rebleeding and mortality versus standard secondary prophylaxis in this group. The instinct to default to medical management plus elective evaluation undertreats the high-risk subset.",
            next: 'end-good'
          },
          { label: "Standard secondary prophylaxis: nonselective beta blocker plus a planned repeat banding session, no TIPS",
            hint: "Medical management default",
            tone: 'warn',
            consequenceHead: "Defensible for an average patient, suboptimal here.",
            consequence: "The patient is started on a nonselective beta blocker and scheduled for surveillance banding. On day 5 she rebleeds and requires emergent TIPS under less favorable conditions.",
            teaching: "Nonselective beta blocker plus surveillance banding is the standard secondary prophylaxis for an average-risk variceal bleeder. The error here is missing the high-risk features (Child-Pugh C, HVPG above 20) that change the recommendation to early pre-emptive TIPS. The data show that the high-risk group has a much higher rebleed rate without TIPS, and emergent TIPS after rebleed has worse outcomes than pre-emptive TIPS within 72 hours.",
            next: 'end-bad'
          },
          { label: "Place a Sengstaken-Blakemore tube prophylactically in case of rebleed",
            hint: "Balloon tamponade as bridge",
            tone: 'bad',
            consequenceHead: "Wrong indication. Real risk added.",
            consequence: "The tube is placed. The patient develops esophageal pressure necrosis after several hours and the tube is removed. No rebleed has occurred but you have introduced a complication where there was none.",
            teaching: "Balloon tamponade (Sengstaken-Blakemore or Minnesota tube) is a temporizing rescue measure for uncontrolled variceal bleeding when endoscopic control has failed and definitive therapy (TIPS or surgery) is being arranged. It is not used prophylactically. Complications include esophageal pressure necrosis, perforation, and aspiration. Prophylactic placement adds risk without benefit. The right pre-emptive measure for a high-rebleed-risk patient is early TIPS, not balloon tamponade.",
            next: 'end-bad'
          }
        ]
      }
    },

    endings: {
      'end-good': {
        title: 'Patient stabilized, early TIPS placed, discharged with secondary prophylaxis.',
        verdict: 'You ran the cirrhotic GI bleed playbook the way it should be run: restrictive transfusion (not the trauma rule), the three pre-endoscopy interventions empirically before the source was known, and pre-emptive TIPS for the high-risk subset rather than defaulting to standard medical management. Each of those decisions is a place where the average instinct is wrong, and each has mortality data behind it.'
      },
      'end-bad': {
        title: 'Outcome: rebleed or preventable complication.',
        verdict: 'The cirrhotic GI bleed has rules that diverge from both general resuscitation instincts and average-risk variceal management. The choices that cost the most are the ones where the trauma instinct (transfuse aggressively) or the wait-for-the-diagnosis instinct (hold antibiotics until source is known) overrode the cirrhosis-specific evidence. Restrictive transfusion, empiric octreotide and ceftriaxone, and pre-emptive TIPS for high-risk patients are the three highest-yield teaching points in this case.'
      }
    },

    references: [
      {
        citation: 'Cagir B, Cirino LM. Esophageal Variceal Hemorrhage. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK448078/'
      },
      {
        citation: 'Pedersen JS, Bendtsen F, Moller S. Management of cirrhotic ascites. StatPearls. NIH Bookshelf. Updated 2023.',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK430832/'
      }
    ]
  }

  // ── ADDITIONAL CASES ─────────────────────────────────────────────
  // Author cases #2 and #3 in subsequent commits. Style template is
  // case #1 above. Time-pressure framing is optional — use timerStrip
  // and acuity ≥ 3 only when the clinical scenario is genuinely
  // time-critical. Non-urgent decision cases (e.g. outpatient
  // medication reconciliation, complex consent) are valid too.

];
