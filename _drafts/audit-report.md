# ReasonDx Puzzle Audit Report

Generated: 2026-05-01 18:26 UTC

## Summary

- **Total puzzles**: 124
- **With keyConcepts**: 12 (10%)
- **With references**: 30 (24%)
- **With B-shape followUp**: 7 (6%)
- **Errors found**: 0
- **Warnings found**: 86
- **Puzzles flagged**: 22 of 124

## Findings by code

| Code | Severity | Count | Meaning |
|------|----------|-------|---------|
| PROMPT_ALIGNMENT | warn | 40 | keyConcept not invited by prompt — learner may not know to address it |
| SYNONYM_ECHO | warn | 31 | keyConcept synonym appears in scenario — free hit by parroting |
| POSSIBLE_DOSE | warn | 13 | Possible medication dose detected (verify it's not a vital sign or duration) |
| CLICHE | warn | 2 | Cliché phrase detected |

## ✅ No errors — schema is clean

## Per-puzzle findings

### Puzzle 1 — Lab Shift

> 52-year-old male with substernal chest pressure for 2 hours. Your differential: …

- ⚠️ `POSSIBLE_DOSE` — possible medication dose in followUp.teaching: "100mg" — context: "...) Systemic thrombolytics (tPA 100mg over 2h) — reserved for true ..."
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[2] "CT angiography" — no synonym or token word found in prompt. Learner may not know to address this.

### Puzzle 4 — Time Pressure

> You are the overnight resident. 78-year-old male found unresponsive. Nurse repor…

- ⚠️ `POSSIBLE_DOSE` — possible medication dose in teaching: "1g" — context: "...Head of bed 30°. (3) Mannitol 1g/kg or hypertonic saline 23.4%..."
- ⚠️ `POSSIBLE_DOSE` — possible medication dose in teaching: "30mL" — context: "...kg or hypertonic saline 23.4% 30mL IV push. (4) Call neurosurger..."

### Puzzle 5 — Distinguishing Case

> Two patients in your ED both present with "worst headache of my life." Patient A…

- ⚠️ `CLICHE` — cliché phrase detected: "worst headache of my life"

### Puzzle 14 — Anchoring Check

> 19-year-old with headache, fever, stiff neck. LP: WBC 840 (98% neutrophils), pro…

- ⚠️ `POSSIBLE_DOSE` — possible medication dose in followUp.teaching: "1 g" — context: "... saline bolus or mannitol 0.5–1 g/kg. (3) Avoid hypotonic fluid..."
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[0] "Vancomycin" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[1] "Dexamethasone" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — followUp keyConcept[0] "Raised ICP" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — followUp keyConcept[1] "Hyperosmolar therapy" — no synonym or token word found in prompt. Learner may not know to address this.

### Puzzle 25 — Anchoring Check

> 66-year-old admitted for "COPD exacerbation," day 2, responding poorly to bronch…

- ⚠️ `POSSIBLE_DOSE` — possible medication dose in teaching: "500mL" — context: "...rgent pericardiocentesis. (3) 500mL NS bolus — tamponade is prelo..."

### Puzzle 30 — Risk Priority

> ED waiting room: A) 72M syncope now asymptomatic. B) 28F worst headache of life,…

- ⚠️ `CLICHE` — cliché phrase detected: "crushing chest pain"

### Puzzle 39 — Lab Shift

> 72-year-old with pneumonia, day 3 of ceftriaxone. Temperature normalized, WBC 9,…

- ⚠️ `POSSIBLE_DOSE` — possible medication dose in teaching: "125mg" — context: "...r <1.5x baseline → vancomycin 125mg QID or fidaxomicin 200mg BID ..."

### Puzzle 45 — Source Check

> Your attending recommends high-dose aspirin (650mg TID) for an acute gout flare,…

- ⚠️ `POSSIBLE_DOSE` — possible medication dose in scenario: "650mg" — context: "...recommends high-dose aspirin (650mg TID) for an acute gout flare,..."
- ⚠️ `POSSIBLE_DOSE` — possible medication dose in teaching: "50mg" — context: "...te gout: NSAIDs (indomethacin 50mg TID or naproxen 500mg BID x 5..."

### Puzzle 76 — Medication Safety

> You are preparing to administer vancomycin 1250mg IV to a 68-year-old with MRSA …

- ⚠️ `POSSIBLE_DOSE` — possible medication dose in scenario: "1250mg" — context: "...ring to administer vancomycin 1250mg IV to a 68-year-old with MRSA..."

### Puzzle 99 — Risk Priority

> A 5-day-old breastfed term infant is brought in for "yellow color" noted by pare…

- ⚠️ `POSSIBLE_DOSE` — possible medication dose in scenario: "0.4 mg" — context: "...ly indirect), direct fraction 0.4 mg/dL. Normal vitals...."

### Puzzle 102 — Time Pressure

> A 68-year-old woman presents with 3 days of new-onset right-sided headache, scal…

- ⚠️ `POSSIBLE_DOSE` — possible medication dose in teaching: "60mg" — context: "...oids immediately — prednisone 60mg/day or IV methylprednisolone ..."

### Puzzle 109 — Mechanism First

> A 63-year-old woman is admitted with septic shock from urosepsis. Initial labs: …

- ⚠️ `POSSIBLE_DOSE` — possible medication dose in scenario: "12 mcg" — context: "...drawn at admission returns at 12 mcg/dL...."

### Puzzle 115 — Distinguishing Case

> A 22-year-old woman presents to urgent care 30 minutes after eating at a new res…

- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[1] "Hypotension or cardiovascular" — no synonym or token word found in prompt. Learner may not know to address this.

### Puzzle 116 — Distinguishing Case

> Two patients arrive within an hour of each other to the ED. Patient A: 24-year-o…

- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[0] "Peak severity in seconds" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[1] "Fever and subacute course" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[2] "Subarachnoid hemorrhage" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[3] "Meningitis" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[0] "Peak severity in seconds" — synonym "seconds" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[0] "Peak severity in seconds" — synonym "within seconds" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[1] "Fever and subacute course" — synonym "fever" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[1] "Fever and subacute course" — synonym "6 hours" appears in scenario; learner gets a free hit by parroting.

### Puzzle 117 — Missing Evidence

> A 26-year-old woman presents with 8 hours of right-sided lower abdominal pain. T…

- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[1] "Missed period or LMP" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[2] "Lateralized pain in reproductive age" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[1] "Missed period or LMP" — synonym "5 weeks" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[2] "Lateralized pain in reproductive age" — synonym "right lower" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[2] "Lateralized pain in reproductive age" — synonym "right-sided" appears in scenario; learner gets a free hit by parroting.

### Puzzle 118 — Anchoring Check

> An 83-year-old woman is brought in by her daughter for "confusion" that started …

- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[0] "UTI or urinary infection" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[1] "Relative hypotension from baseline" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[2] "Blunted fever response" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[1] "Relative hypotension from baseline" — synonym "her baseline is" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[2] "Blunted fever response" — synonym "no fever" appears in scenario; learner gets a free hit by parroting.

### Puzzle 119 — Risk Priority

> A 6-year-old previously healthy boy is brought in by his mother for a 4-day limp…

- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[0] "Transient synovitis" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[1] "Septic arthritis" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[2] "Legg-Calve-Perthes" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[3] "Osteomyelitis" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — followUp keyConcept[1] "One criterion met" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — followUp keyConcept[3] "Postviral pattern" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — followUp keyConcept[4] "Observation or further imaging" — no synonym or token word found in prompt. Learner may not know to address this.

### Puzzle 120 — Risk Priority

> A 16-year-old previously healthy girl is brought in by her parents for fatigue, …

- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[1] "Insulin-driven electrolyte shift" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[2] "Phosphate depletion" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[3] "Bradycardia and hypothermia as adaptation" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[2] "Phosphate depletion" — synonym "phosphate" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[3] "Bradycardia and hypothermia as adaptation" — synonym "hr 52" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[3] "Bradycardia and hypothermia as adaptation" — synonym "35.7" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[4] "Orthostatic findings" — synonym "standing" appears in scenario; learner gets a free hit by parroting.

### Puzzle 121 — Risk Priority

> A 34-year-old woman presents with 2 days of fever, malaise, and a rash that star…

- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[2] "Mucosal multi-site involvement" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[4] "Systemic illness" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — followUp keyConcept[2] "Desmoglein-1" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — followUp keyConcept[3] "Intraepidermal cleavage" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[3] "Drug-induced timeline" — synonym "medication" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[4] "Systemic illness" — synonym "fever" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[4] "Systemic illness" — synonym "malaise" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[4] "Systemic illness" — synonym "ill-appearing" appears in scenario; learner gets a free hit by parroting.

### Puzzle 122 — Anchoring Check

> A 58-year-old man with hypertension and a 30-pack-year smoking history presents …

- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[1] "Angina pectoris (named)" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — followUp keyConcept[0] "Aortic dissection" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[2] "Risk factors raise pretest probability" — synonym "smoking" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[2] "Risk factors raise pretest probability" — synonym "hypertension" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[3] "Radiation and autonomic features" — synonym "radiating" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[3] "Radiation and autonomic features" — synonym "left arm" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[3] "Radiation and autonomic features" — synonym "diaphoresis" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[3] "Radiation and autonomic features" — synonym "nausea" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — followUp keyConcepts[1] "Sudden onset at rest plus radiation to back" — synonym "at rest" appears in scenario; learner gets a free hit by parroting.

### Puzzle 123 — Missing Evidence

> A 19-year-old college student with type 1 diabetes presents to the ED with 2 day…

- ⚠️ `POSSIBLE_DOSE` — possible medication dose in teaching: "250 mg" — context: "...(1) hyperglycemia (typically >250 mg/dL, though "euglycemic DKA" e..."
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[0] "DKA" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[1] "Kussmaul respirations (named)" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[5] "Counter-regulatory hormones" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — followUp keyConcept[0] "Euglycemic DKA" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[2] "Three diagnostic criteria" — synonym "anion gap" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[2] "Three diagnostic criteria" — synonym "ketones" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[3] "Infection trigger" — synonym "upper respiratory" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[4] "Pump or insulin delivery failure" — synonym "pump" appears in scenario; learner gets a free hit by parroting.

### Puzzle 124 — Distinguishing Case

> A 64-year-old man presents to the ED with three episodes of dark, tarry stools o…

- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[0] "Melena (named)" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[2] "Protein digestion drives BUN" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[3] "Coffee-ground emesis" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — main keyConcept[4] "NSAID risk for peptic ulcer" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `PROMPT_ALIGNMENT` — followUp keyConcept[1] "Portal hypertension" — no synonym or token word found in prompt. Learner may not know to address this.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[4] "NSAID risk for peptic ulcer" — synonym "nsaid" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[4] "NSAID risk for peptic ulcer" — synonym "nsaid use" appears in scenario; learner gets a free hit by parroting.
- ⚠️ `SYNONYM_ECHO` — main keyConcepts[5] "Orthostatic detects compensated shock" — synonym "standing" appears in scenario; learner gets a free hit by parroting.

---

## How to use this report

1. **Errors (🔴) first.** These are schema bugs that may break rendering or scoring.
2. **`POSSIBLE_DOSE` warnings** — confirm each one. Many will be false positives (vital signs, durations, percentages); strip the real ones.
3. **`PROMPT_ALIGNMENT` warnings** — read the prompt and the flagged concept; if the prompt genuinely doesn't invite the concept, either rewrite the prompt or remove the concept.
4. **`SYNONYM_ECHO` warnings** — tighten the synonym list to require reasoning words, not just terms that appear in the scenario.
5. **`NON_ALLOWLIST_REF` warnings** — replace with a StatPearls/AHA-ACC equivalent if possible, or remove.
6. **Cliché warnings** — rephrase using objective trajectory language.

No auto-fixes are applied. Every change should be human-reviewed.