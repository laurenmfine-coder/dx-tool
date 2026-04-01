# ReasonDx Cognitive Bias Detection — Evidence Base

## Overview

ReasonDx detects cognitive reasoning patterns in simulated clinical encounters.
Every detection rule is grounded in peer-reviewed literature on diagnostic error
and cognitive bias in medicine. This document maps each behavioral signal to its
evidence source and operationalization rationale.

**Important limitation:** ReasonDx detects *behavioral signals consistent with*
known bias patterns from the simulation transcript. It does not diagnose cognitive
bias with certainty — these are educational signals, not clinical judgments.
Multiple sessions are required before any pattern should be reported to a learner.

---

## Theoretical Framework

### Dual Process Theory
Croskerry, P. (2009). A universal model of diagnostic reasoning. *Academic Medicine,
84*(8), 1022–1028. https://doi.org/10.1097/ACM.0b013e3181ace703

Croskerry, P. (2009). Clinical cognition and diagnostic error: applications of a
dual process model of reasoning. *Advances in Health Sciences Education, 14*(S1),
27–35. https://doi.org/10.1007/s10459-009-9182-2

**Relevance:** The dual-process framework (System 1: fast, pattern-based; System 2:
deliberate, analytical) is the predominant theoretical model for understanding
cognitive errors in clinical reasoning. ReasonDx simulation is designed to elicit
System 2 behavior (explicit differential generation, justification, evidence
integration). Bias signals reflect moments where System 1 overrides appropriate
System 2 engagement.

### Diagnostic Error Taxonomy
Graber, M. L., Franklin, N., & Gordon, R. (2005). Diagnostic error in internal
medicine. *Archives of Internal Medicine, 165*(13), 1493–1499.
https://doi.org/10.1001/archinte.165.13.1493

**Relevance:** Foundational taxonomy of cognitive factors in diagnostic error.
Found cognitive factors in 74% of diagnostic errors; premature closure was the
single most common cause. ReasonDx detection targets the four most common
error types identified: premature closure, anchoring, faulty context generation,
and faulty synthesis.

---

## Signal Definitions and Detection Rules

### 1. Anchoring Bias

**Literature definition:**
"The tendency to adhere to an initial hypothesis, leading us to disregard or
discount evidence that disproves our favored theory."
— Annals of Internal Medicine (2020). Avoiding Cognitive Errors in Clinical
Decision Making. *Ann Intern Med, 172*, 747–751.
https://doi.org/10.7326/M19-3692

"Anchoring errors are when clinicians steadfastly cling to an initial impression
even as conflicting and contradictory data accumulate."
— Merck Manual Professional Edition. Cognitive Errors in Clinical Decision Making.
Reviewed July 2024.

"Anchoring bias (11.4% of ER diagnostic errors): the idea that one becomes focused
on their first thought and does not change their mind."
— Kunitomo, K., Harada, T., & Watari, T. (2022). Cognitive biases encountered by
physicians in the emergency room. *BMC Emergency Medicine, 22*, 148.
https://doi.org/10.1186/s12873-022-00708-3

**Operationalization in ReasonDx:**
Anchoring is flagged when ALL of the following conditions are met across a session:
1. The student's top diagnosis at Phase 1 (initial differential) matches the
   top diagnosis at Phase 6/7 (final differential) — indicating no rank-order shift
2. The student did NOT include the target diagnosis in their final differential
3. The student submitted a revised differential (Phase 4) — confirming exposure
   to new information that should have prompted reconsideration

**Rationale:** This operationalizes the core behavioral indicator — adherence to
initial impression despite accumulating contradictory evidence — without assuming
the initial impression was wrong. If the student's top diagnosis was correct AND
they maintained it, that is persistence, not anchoring.

**Confidence level:** Moderate. Requires minimum 3 sessions before reporting as a
pattern. Single-session flags are informational only.

---

### 2. Premature Closure

**Literature definition:**
"Premature closure: the failure to continue considering reasonable alternatives
after an initial diagnosis was reached — the single most common cognitive error
in diagnostic error."
— Graber et al. (2005). *Arch Intern Med.*

"Premature closure is narrowing the choice of diagnostic hypotheses too early in
the process, such that the correct diagnosis is never seriously considered."
— Berner, E. S., & Graber, M. L. (2008). Overconfidence as a cause of diagnostic
error in medicine. *Am J Med, 121*(5 Suppl), S2–S23.

"Premature closure is the mistake of accepting a diagnosis before it has been
fully verified. Its consequences are reflected in the maxim: 'When the diagnosis
is made, the thinking stops.'"
— Croskerry, P. (2018). Premature Closure. In: *A Case-Based Guide to Critical
Thinking in Medicine.* Springer.

**Operationalization in ReasonDx:**
Premature closure is flagged when ALL of the following are met:
1. The student's revised differential (Phase 4) is substantively identical to
   their final differential (Phase 6/7) — no meaningful change despite receiving
   lab results, imaging, and radiology report
2. The student did NOT include the target diagnosis in their final differential
3. The student completed the labs/imaging phase — confirming they received
   additional information that should have prompted revision

**Rationale:** Premature closure requires both the behavioral signal (stopped
revising) and the outcome signal (missed target). A student who stopped revising
but got the right answer demonstrated appropriate closure, not premature closure.

**Confidence level:** Moderate. Importantly, premature closure and anchoring
frequently co-occur (Croskerry, 2018; Kunitomo et al., 2022), so both may be
flagged in the same session.

---

### 3. Missed Pivot History (History-Taking Gap)

**Literature definition:**
"A lack of formulation of a differential diagnosis was implicated in 80% of
diagnostic error cases... a diagnostic time-out may involve challenging the
diagnosis that originally came to mind, interpreting investigation results with
a fresh perspective."
— PMC5901151. Cognitive bias in clinical practice — nurturing healthy skepticism
among medical students. *Adv Med Educ Pract, 9*, 219–225.
https://pmc.ncbi.nlm.nih.gov/articles/PMC5901151/

"The most common cognitive biases described by students in their clinical reasoning
were anchoring bias, availability bias, and premature closure... students used
illness scripts and diagnostic frameworks."
— PMC9718553. Using an experiential learning model to teach clinical reasoning
theory and cognitive bias. *Med Educ Online, 28*, 2153782.
https://pmc.ncbi.nlm.nih.gov/articles/PMC9718553/

**Operationalization in ReasonDx:**
The "pivot history" is the case-specific exposure or contextual history element
that is critical to reaching the correct diagnosis (e.g., cocaine use in a young
patient with chest pain; bird exposure in HP; recent antibiotic use in C. diff).
This is encoded in each case's `signals.criticalHistory` array.

Flagged when: env_history_score === 0, meaning the student did not elicit any
of the pre-defined critical history elements during the history-taking phase.

**Rationale:** Failure to gather key history before forming or committing to a
differential is a root cause of anchoring and premature closure (Graber et al.,
2005). This signal specifically captures the "faulty context generation" error
type from Graber's taxonomy.

---

### 4. Differential Breadth (Narrow Opener / Broad Thinker)

**Literature definition:**
"A lack of formulation of a differential diagnosis was implicated in 80% of
diagnostic error cases."
— Ely, J. W., Graber, M. L., & Croskerry, P. (2011). Checklists to reduce
diagnostic errors. *Academic Medicine, 86*(3), 307–313.

"The most common cognitive biases... anchoring bias, availability bias, and premature
closure. Students rarely generated adequate differentials."
— PMC9718553. Using an experiential learning model.

**Operationalization in ReasonDx:**
- `narrow_opener`: average initial differential < 2 diagnoses across sessions
- `broad_thinker`: average initial differential > 5 diagnoses across sessions

Neither is inherently good or bad. Narrow openers may indicate pattern-matching
(System 1) without adequate hypothesis generation; broad thinkers may indicate
difficulty prioritizing. Both are reported descriptively, not pejoratively.

---

### 5. Confidence Calibration

**Literature definition:**
"Overconfidence bias: a universal tendency to believe that we know more than we do,
or to place too much faith in opinions rather than evidence."
— Croskerry, P. & Norman, G. R. (2008). Overconfidence in clinical decision making.
*Am J Med, 121*(5 Suppl), S24–S29.

"A moderate and positive correlation between accuracy and self-confidence was
observed (Rho = .623; p < .001) in the overall sample. Self-confidence was lowest
in beginners."
— Cross-sectional study using CRESCAT tool. *Clinical Reasoning and Self-Confidence
Among Preclinical Medical Students* (2023).

"Well-calibrated experts express appropriate uncertainty rather than maximal
confidence."
— Norman et al. (2014). Dual process models of clinical reasoning. J Eval Clin Pract.

**Operationalization in ReasonDx:**
Confidence is captured via the Likert scale (1–5) presented after the reflection
phase confidence question. Two patterns are flagged longitudinally:
- `underconfident`: avg Likert < 3.0 AND avg target_in_final > 70% — accurate
  but systematically underestimates their own reasoning
- High confidence + low accuracy is noted but not tagged (insufficient sessions
  for reliable pattern detection; flagged for future development)

**Rationale:** Based on Sætrevik et al. (2024), which operationalized overconfidence
as an increase in confidence when no further clarifying information was provided,
and confirmed confirmation bias and anchoring interact with confidence. The Likert
instrument aligns with CRESCAT validation work.

---

### 6. Evidence Integration

**Literature definition:**
"Clinicians should regard any conflicting data as evidence of the need to continue
to seek an alternative diagnosis rather than as anomalies to be disregarded."
— Merck Manual Professional. Cognitive Errors in Clinical Decision Making (2024).

**Operationalization in ReasonDx:**
Flagged as `integrated_evidence = true` when the student's differential rank-order
changes between Phase 4 (post-history) and Phase 6/7 (post-labs/imaging). This
indicates the student used new information to update their clinical hypothesis —
the core behavior Croskerry's debiasing strategies target.

---

## Pattern Tags and Thresholds

All pattern tags require a minimum of 3 completed sessions before being reported.
Thresholds were set conservatively to minimize false positives:

| Tag | Threshold | Rationale |
|-----|-----------|-----------|
| `anchoring_tendency` | >40% of sessions | Consistent with literature showing anchoring in ~40-60% of diagnostic errors |
| `premature_closure` | >30% of sessions | Premature closure is the most common single error; lower threshold reflects base rate |
| `history_gap` | >50% of sessions | Majority of sessions missing pivot history before flagging |
| `narrow_opener` | avg < 2.0 dx | Below minimum recommended differential breadth |
| `broad_thinker` | avg > 5.0 dx | Above practical clinical threshold for focused reasoning |
| `strong_accuracy` | >80% sessions with target in final dx | Conservative high-performance threshold |
| `underconfident` | Likert < 3.0 AND accuracy > 70% | Misalignment between performance and self-assessment |

---

## Limitations and Safeguards

1. **Signal ≠ diagnosis.** These are behavioral signals consistent with known bias
   patterns, not confirmed diagnoses of cognitive bias. Cognitive biases are often
   invisible to the person experiencing them (Croskerry, 2009).

2. **Simulation fidelity.** Signals are extracted from a text-based simulation.
   Real clinical encounters involve time pressure, affect, fatigue, and sensory
   input that this platform cannot fully replicate.

3. **Case dependency.** Some cases are designed to elicit specific biases (anchoring
   cases have salient misleading features). Pattern detection accounts for case
   context where possible but cannot fully control for case difficulty effects.

4. **Minimum session requirement.** No pattern tags are computed or reported until
   a student has completed ≥ 3 sessions. Single-session signals are stored but
   treated as informational, not diagnostic.

5. **Debiasing is the goal, not labeling.** Per Croskerry & Singhal (2013), debiasing
   strategies must include awareness, metacognitive reflection, and system-level
   supports. ReasonDx uses pattern tags to personalize debrief content and case
   recommendations — not to evaluate or grade students.

---

## Key References (Abbreviated)

- Croskerry, P. (2009). A universal model of diagnostic reasoning. *Acad Med, 84*(8), 1022–1028.
- Graber, M. L., Franklin, N., & Gordon, R. (2005). Diagnostic error in internal medicine. *Arch Intern Med, 165*(13), 1493–1499.
- Berner, E. S., & Graber, M. L. (2008). Overconfidence as a cause of diagnostic error. *Am J Med, 121*(5 Suppl), S2–S23.
- Kunitomo et al. (2022). Cognitive biases in the emergency room. *BMC Emerg Med, 22*, 148.
- Sætrevik et al. (2024). Anchoring, confirmation and confidence bias among medical decision-makers. *Collabra: Psychology, 10*(1), 126223.
- PMC9718553. Using an experiential learning model to teach cognitive bias. *Med Educ Online, 28*, 2153782.
- PMC5901151. Cognitive bias in clinical practice. *Adv Med Educ Pract, 9*, 219–225.
- Ely, Graber & Croskerry (2011). Checklists to reduce diagnostic errors. *Acad Med, 86*(3), 307–313.
