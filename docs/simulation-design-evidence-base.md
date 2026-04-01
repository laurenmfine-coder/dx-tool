# ReasonDx Simulation Design & Reasoning Assessment — Evidence Base

## Overview

This document grounds three interconnected design decisions: (1) the 10-phase
simulation structure, (2) differential quality and articulation scoring, and
(3) uncertainty calibration. Together these reflect a coherent theoretical model
of clinical reasoning development grounded in cognitive and educational psychology.

---

## 1. Simulation Phase Structure

### The 10-Phase Orchestration

ReasonDx simulations follow a structured 10-phase sequence:
1. Initial Differential
2. Differential Justification
3. History-Taking (patient encounter)
4. Revised Differential
5. Physical Examination
6. Labs & Imaging
7. Report Comparison
8. Closing Reflection
9. Management Plan
10. Complete (debrief)

### Theoretical Grounding

**Hypothetico-Deductive Reasoning Model**

Elstein, A. S., Shulman, L. S., & Sprafka, S. A. (1978). *Medical Problem Solving:
An Analysis of Clinical Reasoning.* Harvard University Press.

This landmark empirical study of how clinicians actually reason established the
hypothetico-deductive model: clinicians generate a small set of hypotheses early
(corresponding to ReasonDx Phase 1), then gather data selectively to test and
refine them (Phases 3–6). The phase structure mirrors this empirically-validated
reasoning process.

**Dual Process Theory — Applied to Phase Design**

Croskerry, P. (2009). A universal model of diagnostic reasoning. *Academic Medicine,
84*(8), 1022–1028. https://doi.org/10.1097/ACM.0b013e3181ace703

Phases 1–2 (Initial Differential and Justification) are designed to elicit and
make explicit the student's System 1 (pattern recognition) response, then
immediately require System 2 (deliberate analysis) justification. This is
a pedagogical instantiation of Croskerry's toggle between systems.

**Illness Script Theory**

Schmidt, H. G., Rikers, R. M. J. P. (2007). How expertise develops in medicine:
knowledge encapsulation and illness script formation. *Medical Education, 41*(12),
1133–1139. https://doi.org/10.1111/j.1365-2923.2007.02915.x

Illness scripts are structured knowledge packages experts use for pattern
recognition — they include enabling conditions, fault, and consequences.
The simulation's phase progression mirrors illness script development:
enabling conditions (history, Phase 3), fault identification (differential
revision, Phase 4), and consequences (management, Phase 9).

**SNAPPS Model**

Wolpaw, T. M., Wolpaw, D. R., & Papp, K. K. (2003). SNAPPS: a learner-centered
model for outpatient education. *Academic Medicine, 78*(9), 893–898.
https://doi.org/10.1097/00001888-200309000-00010

SNAPPS (Summarize, Narrow, Analyze, Probe, Plan, Select) is a validated
learner-centered model for clinical presentations. ReasonDx Phase 8 (Closing
Reflection) mirrors the SNAPPS "Probe" step — self-directed identification
of uncertainties — and Phase 9 mirrors the "Plan" step.

**Clinical Reasoning Assessment in Simulation**

Trowbridge, R. L. (2008). Twelve tips for teaching avoidance of diagnostic errors.
*Medical Teacher, 30*(5), 496–500.
https://doi.org/10.1080/01421590801965137

Provides evidence-based recommendations for simulation design to teach diagnostic
reasoning, including the value of requiring justification before providing
additional information (the basis for Phases 1→2 sequencing in ReasonDx).

---

## 2. Differential Quality Scoring (Articulation)

### Framework

The `scoreArticulation` function evaluates the quality of a student's reasoning
justification on a 0–4 scale using four markers:

| Score Component | Criterion | Theoretical Basis |
|---|---|---|
| +1 | Uses causal connectors (because, given that, based on) | Semantic qualifier framework |
| +1 | References specific clinical finding | Illness script — fault identification |
| +1 | Considers alternatives (but, however, alternatively) | Hypothetico-deductive model |
| +1 | Probabilistic language (more likely, rule out) | Bayesian clinical reasoning |

### Semantic Qualifiers

Bordage, G., & Lemieux, M. (1991). Semantic structures and diagnostic thinking of
experts and novices. *Academic Medicine, 66*(9 Suppl), S70–S72.
https://doi.org/10.1097/00001888-199109000-00045

**Relevance:** Foundational study showing that expert clinicians use richer, more
contrastive semantic qualifiers when describing cases (e.g., "acute rather than
chronic," "unilateral not bilateral") compared to novices. The use of causal
connectors and contrastive language ("however," "although") in ReasonDx
articulation scoring operationalizes this finding.

Bordage, G. (1994). Elaborated knowledge: a key to successful diagnostic thinking.
*Academic Medicine, 69*(11), 883–885.
https://doi.org/10.1097/00001888-199411000-00004

**Relevance:** Extended the semantic qualifier work to show that elaborated,
connected knowledge structures predict diagnostic accuracy. The articulation
score rewards elaboration through the causal connector criterion.

### Probabilistic Reasoning

Richardson, W. S., & Glasziou, P. (2015). Evidence-based clinical diagnosis.
In G. Guyatt, D. Rennie, M. O. Meade, & D. J. Cook (Eds.), *Users' Guides to
the Medical Literature* (3rd ed.). JAMA Network.

**Relevance:** Probabilistic reasoning — explicitly framing diagnoses in terms of
likelihood (more likely, less likely, rules out) — is a core evidence-based
medicine competency. The articulation score rewards this language explicitly.

### Score Interpretation

- 0–1 (Developing): Minimal elaboration; student states diagnoses without connecting
  to clinical evidence
- 2 (Adequate): Some elaboration; evidence cited but alternatives not considered
- 3–4 (Strong): Full elaboration; evidence cited, alternatives considered,
  probabilistic framing used

---

## 3. Uncertainty Calibration

### Theoretical Framework

**Overconfidence in Medical Decision-Making**

Berner, E. S., & Graber, M. L. (2008). Overconfidence as a cause of diagnostic
error in medicine. *American Journal of Medicine, 121*(5 Suppl), S2–S23.
https://doi.org/10.1016/j.amjmed.2008.01.001

**Relevance:** Comprehensive review establishing overconfidence as a leading cause
of diagnostic error. Found that physicians are poorly calibrated — more certain
than their accuracy warrants — and that this overconfidence is associated with
failure to order appropriate confirmatory testing. This is the direct evidence
basis for flagging high confidence with incorrect differential as a teaching moment.

**Self-Assessment in Medical Education**

Eva, K. W., & Regehr, G. (2005). Self-assessment in the health professions:
a reformulation and research agenda. *Academic Medicine, 80*(10 Suppl), S46–S54.
https://doi.org/10.1097/00001888-200510001-00015

Eva, K. W., & Regehr, G. (2008). "I'll never play professional football" and other
fallacies of self-assessment. *Journal of Continuing Education in the Health
Professions, 28*(1), 14–19. https://doi.org/10.1002/chp.150

**Relevance:** These papers established that self-assessment is systematically
inaccurate in medical trainees — novices tend toward overconfidence, while some
advanced learners become underconfident. The implication for medical education is
that self-assessment should be calibrated against external performance data rather
than relied on as a standalone measure. ReasonDx implements this by comparing
Likert-rated confidence against objective differential accuracy.

**Confidence-Accuracy Correlation in Medical Students**

Cross-sectional study using CRESCAT tool (2023). Clinical Reasoning and Self-Confidence
Among Preclinical Medical Students, Internal Medicine Specialists and Artificial
Intelligence. Brazilian multi-site study.

Found a moderate positive correlation between accuracy and self-confidence
(Rho = 0.623; p < .001) with self-confidence lowest in beginners and highest
in specialists. ReasonDx uses the same direction of correlation in the
`underconfident` pattern tag — high accuracy + low confidence — which is the
opposite of the dangerous pattern (low accuracy + high confidence).

**Calibration in Diagnostic Reasoning**

Sætrevik, B., Seeligmann, V. T., Frotvedt, T. F., & Bondevik, Ø. K. (2024).
Anchoring, confirmation and confidence bias among medical decision-makers.
*Collabra: Psychology, 10*(1), 126223.
https://doi.org/10.1525/collabra.126223

**Relevance:** Preregistered experimental study (N=224 trained medical students)
operationalizing overconfidence as an increase in confidence when no new
clarifying information was provided. This operationalization informed ReasonDx's
confidence trajectory analysis in `rdx-agent-enhancements.js`.

### Operationalization

**Overconfidence signal:** High confidence expressed at a point where the correct
diagnosis is NOT in the student's active differential.
- Threshold: confidence ≥ 7/10 (or ≥ 4/5 Likert) AND target not in differential
- Grounding: Berner & Graber (2008) overconfidence definition

**Underconfidence signal (session level):** Low Likert score despite high accuracy.
- Threshold: avg Likert < 3/5 AND target in final differential > 70% of sessions
- Grounding: Eva & Regehr (2005, 2008); CRESCAT correlation data

**Calibration quality:**
- Good: ≥ 60% of turns show matched confidence-accuracy
- Overconfident: > 1 turn with high confidence but wrong differential
- Underconfident: > 1 turn with low confidence but correct differential

### Teaching Points

Teaching points triggered by each calibration pattern are adapted from:

Croskerry, P., & Norman, G. (2008). Overconfidence in clinical decision making.
*American Journal of Medicine, 121*(5 Suppl), S24–S29.
https://doi.org/10.1016/j.amjmed.2008.01.002

Specific language: "What would I do if I am wrong?" is drawn directly from
Croskerry's recommended cognitive forcing strategy for overconfident clinicians.

---

## 4. SpacedRep Card Generation

### Spaced Repetition in Medical Education

Kerfoot, B. P., & Brotschi, E. (2009). Online spaced education to teach urology
to medical students: a multi-institutional randomized trial. *American Journal of
Surgery, 197*(1), 89–95. https://doi.org/10.1016/j.amjsurg.2007.09.026

**Relevance:** Randomized trial demonstrating superiority of spaced repetition over
massed practice for medical knowledge retention. ReasonDx generates spaced
repetition cards from identified reasoning gaps — study material is derived from
the student's own performance rather than a generic curriculum.

Kornell, N., & Bjork, R. A. (2008). Learning concepts and categories: is spacing
the "enemy of induction"? *Psychological Science, 19*(6), 585–592.
https://doi.org/10.1111/j.1467-9280.2008.02127.x

**Relevance:** Established theoretical basis for spaced practice in concept learning.
ReasonDx's gap-derived card generation ensures that cards target the specific
concepts missed by each individual student (personalized spaced practice).

### SM-2 Algorithm

Wozniak, P. A. (1990). *Optimization of Learning* (Master's thesis). University of
Technology, Poznan.

The SM-2 (SuperMemo 2) algorithm governs review intervals for generated cards,
using an ease factor that adjusts based on recall performance. This is the same
algorithm used in Anki, the most widely validated spaced repetition platform in
medical education.

---

## Key References

- Elstein, A. S. et al. (1978). *Medical Problem Solving.* Harvard University Press.
- Schmidt, H. G., & Rikers, R. M. J. P. (2007). Illness script formation. *Med Educ, 41*(12), 1133–1139.
- Croskerry, P. (2009). Universal model of diagnostic reasoning. *Acad Med, 84*(8), 1022–1028.
- Bordage, G., & Lemieux, M. (1991). Semantic qualifiers. *Acad Med, 66*(9 Suppl), S70–S72.
- Bordage, G. (1994). Elaborated knowledge. *Acad Med, 69*(11), 883–885.
- Berner, E. S., & Graber, M. L. (2008). Overconfidence. *Am J Med, 121*(5 Suppl), S2–S23.
- Eva, K. W., & Regehr, G. (2005). Self-assessment. *Acad Med, 80*(10 Suppl), S46–S54.
- Sætrevik et al. (2024). Confidence bias. *Collabra: Psychol, 10*(1), 126223.
- Wolpaw, T. M. et al. (2003). SNAPPS. *Acad Med, 78*(9), 893–898.
- Kerfoot, B. P. & Brotschi, E. (2009). Spaced education. *Am J Surg, 197*(1), 89–95.
