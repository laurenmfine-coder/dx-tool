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
          { label: "Etomidate 0.3 mg/kg + rocuronium, head of bed 30°, hyperventilate to PaCO2 30",
            hint: "Neuro-protective RSI",
            tone: 'good',
            consequenceHead: "Tubed cleanly. ICP optimized.",
            consequence: "Etomidate maintains hemodynamics. The mild hyperventilation buys you ICP reduction while the mannitol takes effect. Head of bed up improves venous drainage.",
            teaching: "Neuro-protective RSI: avoid agents that raise ICP or drop cerebral perfusion pressure. Etomidate is hemodynamically neutral. Brief hyperventilation (PaCO2 30-35) reduces ICP via cerebral vasoconstriction — useful as a bridge but NOT sustained (rebound). Rocuronium > succinylcholine here (succinylcholine can transiently raise ICP).",
            next: 'n3'
          },
          { label: "Ketamine 2 mg/kg + succinylcholine, head flat for line access",
            hint: "Standard ED RSI",
            tone: 'bad',
            consequenceHead: "ICP spikes during induction.",
            consequence: "Succinylcholine fasciculations transiently raise ICP. Head flat compromises venous drainage further. The patient's pupil exam worsens as you place the tube.",
            teaching: "Two errors. Ketamine has historically been considered ICP-raising though the modern evidence is more nuanced — but in a clear herniation picture, etomidate is safer. Succinylcholine causes a transient ICP rise from fasciculations, which is the last thing this patient needs. And HOB flat reduces venous drainage. Always elevate the head in suspected ICP elevation.",
            next: 'n3'
          },
          { label: "Propofol 2 mg/kg + rocuronium",
            hint: "Drops ICP via sedation",
            tone: 'warn',
            consequenceHead: "Tubed, but the BP dropped.",
            consequence: "Propofol does reduce ICP, but it also dropped this patient's MAP from 130 to 70. Cerebral perfusion pressure (MAP minus ICP) just collapsed.",
            teaching: "Propofol reduces ICP — true. But it also drops MAP, and in a herniating patient with already-compromised cerebral perfusion, hypotension is catastrophic. CPP = MAP − ICP. If you lower ICP by 10 but lower MAP by 60, you've made perfusion worse. Etomidate preserves hemodynamics; that matters more than the modest ICP benefit.",
            next: 'n3'
          }
        ]
      },

      n3: {
        prompt: "You have one more decision before neurosurgery arrives. Pick your osmotherapy.",
        choices: [
          { label: "Mannitol 1 g/kg IV bolus over 10 minutes",
            hint: "Classic choice",
            tone: 'good',
            consequenceHead: "Pupil starts to react. Buying time.",
            consequence: "Within 5 minutes the right pupil shrinks from 6mm to 4mm and shows sluggish reactivity. You've bought a window for the OR. Neurosurgery walks in.",
            teaching: "Mannitol 1 g/kg is the most evidence-supported osmotic agent for emergent ICP reduction. Effect onset 5-10 minutes, peak 30-60 minutes. Watch for hypotension (osmotic diuresis) and follow serum osmolality — keep <320 mOsm/kg.",
            next: 'end-good'
          },
          { label: "Hypertonic saline 23.4% 30 mL IV push via central line",
            hint: "More potent in some cases",
            tone: 'good',
            consequenceHead: "Pupil reacts. Excellent choice.",
            consequence: "Hypertonic saline takes effect rapidly. The right pupil shrinks to 4mm. Neurosurgery arrives and takes the patient to the OR.",
            teaching: "Hypertonic saline (23.4% via central access, or 3% via peripheral) is increasingly preferred over mannitol in some institutions: faster onset, no diuresis-induced hypotension, sustained effect. The evidence base for HTS in herniation is growing. Either is defensible. Both are correct.",
            next: 'end-good'
          },
          { label: "Hold osmotherapy until neurosurgery arrives and decides",
            hint: "Defer to specialist",
            tone: 'bad',
            consequenceHead: "Patient herniates further.",
            consequence: "By the time neurosurgery arrives 4 minutes later, both pupils are fixed. The decompression is performed but the prognosis is poor.",
            teaching: "Osmotherapy is not a specialist decision in an unstable herniating patient. The evidence is unambiguous: mannitol or HTS, immediately, while waiting for neurosurgery. Deferring 'because the specialist isn't here yet' is the deferential trap that kills patients in time-critical decisions. Treat to the standard of care; let the specialist refine, not initiate.",
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
  }

  // ── ADDITIONAL CASES ─────────────────────────────────────────────
  // Author cases #2 and #3 in subsequent commits. Style template is
  // case #1 above. Time-pressure framing is optional — use timerStrip
  // and acuity ≥ 3 only when the clinical scenario is genuinely
  // time-critical. Non-urgent decision cases (e.g. outpatient
  // medication reconciliation, complex consent) are valid too.

];
