# ReasonDx Research Foundation

**Platform:** ReasonDx (reasondx.com)  
**Institution:** NSU Dr. Kiran C. Patel College of Allopathic Medicine (KPCAM)  
**Developer:** Lauren Fine, MD, FAAAAI  
**Last updated:** April 2026

---

## Overview

ReasonDx is an AI-powered clinical reasoning education platform. It delivers
structured simulated patient encounters, collects passive behavioral data during
normal learning activities, and generates personalized longitudinal feedback.
This document describes every construct measured, the theoretical framework
grounding each measure, the operationalization, and the primary citations.

It is intended to serve as: (1) a methods reference for publications, (2) a
supplement for IRB submissions, and (3) a record of academic rigor for
institutional partnerships.

---

## Constructs Measured

### Domain 1: Diagnostic Reasoning

#### 1.1 Differential Diagnosis Quality

**Construct:** Breadth, accuracy, and evolution of the student's differential
diagnosis across a simulated encounter.

**Theoretical basis:** Hypothetico-deductive reasoning model (Elstein et al.,
1978); illness script theory (Schmidt & Rikers, 2007).

**Operationalization:**
- `dx_initial`: diagnoses listed at Phase 1 (pre-history)
- `dx_revised`: diagnoses listed at Phase 4 (post-history)
- `dx_final`: diagnoses at Phase 6/7 (post-labs/imaging)
- `target_in_initial`, `target_in_final`: binary accuracy flags
- `dx_count_initial`, `dx_count_final`: breadth metrics
- `dx_narrowed`: whether differential narrowed with evidence

**Primary citations:**
- Elstein, A. S., Shulman, L. S., & Sprafka, S. A. (1978). *Medical Problem Solving.* Harvard University Press.
- Schmidt, H. G., & Rikers, R. M. J. P. (2007). *Med Educ, 41*(12), 1133–1139.

---

#### 1.2 Reasoning Articulation Quality

**Construct:** Quality of justification for differential diagnoses, assessed on
a 4-point scale grounded in semantic qualifier theory.

**Theoretical basis:** Semantic qualifier framework (Bordage & Lemieux, 1991);
elaborated knowledge (Bordage, 1994); probabilistic reasoning (Richardson &
Glasziou, 2015).

**Operationalization:** 0–4 scale with one point each for:
(a) causal connectors (because, given that, based on)
(b) specific clinical finding referenced
(c) alternative considered (but, however, alternatively)
(d) probabilistic framing (more likely, less likely, rule out)

**Primary citations:**
- Bordage, G., & Lemieux, M. (1991). *Acad Med, 66*(9 Suppl), S70–S72.
- Bordage, G. (1994). *Acad Med, 69*(11), 883–885.

---

#### 1.3 Anchoring Bias

**Construct:** Tendency to maintain initial diagnosis despite accumulating
contradictory evidence (Croskerry, 2009; Graber et al., 2005).

**Operationalization:** Flagged when top initial diagnosis = top final diagnosis
AND target diagnosis not in final differential AND revised differential was
submitted. Single-session flags are informational only; pattern requires ≥3 sessions.

**Primary citations:**
- Croskerry, P. (2009). *Acad Med, 84*(8), 1022–1028.
- Graber, M. L., Franklin, N., & Gordon, R. (2005). *Arch Intern Med, 165*(13), 1493–1499.
- Kunitomo, K. et al. (2022). *BMC Emerg Med, 22*, 148.

See: `docs/cognitive-bias-evidence-base.md`

---

#### 1.4 Premature Closure

**Construct:** Failure to continue considering alternative diagnoses after an
initial hypothesis is formed (Graber et al., 2005; Berner & Graber, 2008).

**Operationalization:** Top-3 differential unchanged between Phase 4 and final
differential AND target not in final differential. Small ordering changes excluded.

**Primary citations:**
- Graber, M. L. et al. (2005). *Arch Intern Med, 165*(13), 1493–1499.
- Berner, E. S., & Graber, M. L. (2008). *Am J Med, 121*(5 Suppl), S2–S23.

See: `docs/cognitive-bias-evidence-base.md`

---

#### 1.5 Evidence Integration

**Construct:** Whether the student updated their diagnostic hypothesis after
receiving objective data (labs, imaging). Positive behavioral indicator per
Croskerry's (2009) debiasing framework.

**Operationalization:** Rank-order change in top-3 diagnoses between Phase 4
(post-history) and final differential (post-labs/imaging).

---

#### 1.6 History-Taking Completeness (Pivot History)

**Construct:** Elicitation of the case-critical contextual history element.
Maps to Graber's (2005) "faulty context generation" error type.

**Operationalization:** `env_history_score` — 0 (not elicited), 1 (elicited but
not integrated into differential), 2 (elicited and integrated). Score computed
from case-specific `signals.criticalHistory` array.

---

### Domain 2: Communication Quality

#### 2.1 Language Adaptation (Readability)

**Construct:** Adjustment of language complexity when speaking to patients vs.
attending physicians. CDC recommends 6th–8th grade for patient materials.

**Instruments:** Flesch-Kincaid Grade Level (Kincaid et al., 1975); SMOG Index
(McLaughlin, 1969); Automated Readability Index (Senter & Smith, 1967).
Consensus grade = mean(FK, SMOG).

**Operationalization:**
- `avg_grade_patient`: average consensus grade in Phase 3 (History-Taking)
- `avg_grade_attending`: average consensus grade in all other phases
- `adjusts_language`: patient grade ≥ 1.5 levels lower than attending grade
- `patient_appropriate_rate`: % patient messages at ≤ 8th grade level

**Primary citations:**
- Kincaid, J. P. et al. (1975). *Derivation of new readability formulas.* Naval Air Station Memphis.
- McLaughlin, G. H. (1969). *J Reading, 12*(8), 639–646.
- CDC (2016). *Health Literacy.* cdc.gov/healthliteracy
- Paasche-Orlow, M. K., & Wolf, M. S. (2007). *Am J Health Behav, 31*(S1), S19–S26.

See: `docs/readability-evidence-base.md`

---

#### 2.2 Question Type Sequencing

**Construct:** Whether the student uses the expert open-to-closed questioning
sequence during history-taking (Calgary-Cambridge Guide; SEGUE Framework).

**Operationalization:** Classification of each question as open/closed/leading/
clarifying/permission using pattern matching. `expertPattern = true` when ≥2
of first 3 questions are open.

**Primary citations:**
- Silverman, J., Kurtz, S., & Draper, J. (2005). *Skills for Communicating with Patients* (2nd ed.).
- Makoul, G. (2001). *Patient Educ Couns, 45*(1), 23–34.
- Langewitz, W. et al. (2002). *BMJ, 325*(7366), 682–683.

See: `docs/communication-evidence-base.md`

---

#### 2.3 Empathy and Rapport Behaviors

**Construct:** Expression of empathic behaviors aligned with the Kalamazoo
Consensus Statement's seven essential communication elements.

**Operationalization:** Binary detection per turn of 7 signals: expresses concern,
normalizes, validates, uses patient name, asks permission, checks in, acknowledges
emotion. `empathy_density` = average signals per patient-facing turn.

**Primary citations:**
- Makoul, G. et al. (2001). Kalamazoo Consensus Statement. *Acad Med, 76*(4), 390–393.
- Mercer, S. W. et al. (2004). CARE Measure. *Fam Pract, 21*(6), 699–705.
- Levinson, W. et al. (2000). *JAMA, 284*(8), 1021–1027.

See: `docs/communication-evidence-base.md`

---

#### 2.4 Implicit Confidence Language

**Construct:** Linguistic expression of certainty vs. uncertainty via epistemic
markers (Lingard et al., 2003). Proxy measure for confidence calibration.

**Operationalization:** Score = (commitment markers − hedging markers) /
(commitment + hedging). Range −1 (very uncertain) to +1 (very certain).

**Primary citations:**
- Lingard, L. et al. (2003). *Soc Sci Med, 57*(4), 603–616.
- Traynor, M. (2009). *Nurs Philos, 10*(2), 71–79.

---

### Domain 3: Metacognition and Self-Assessment

#### 3.1 Confidence Calibration

**Construct:** Alignment between self-rated confidence and objective diagnostic
accuracy. Poor calibration (overconfidence or underconfidence) is associated with
diagnostic error (Berner & Graber, 2008; Eva & Regehr, 2005).

**Instrument:** 5-point Likert scale presented after confidence question in the
reflection phase. Scale consistent with Sætrevik et al. (2024) CRESCAT validation.

**Operationalization:**
- `confidence_score`: 1–5 Likert rating per session
- `underconfident` pattern: avg Likert < 3 AND avg accuracy > 70%
- Overconfident signal: Likert ≥ 4 AND target not in differential

**Primary citations:**
- Berner, E. S., & Graber, M. L. (2008). *Am J Med, 121*(5 Suppl), S2–S23.
- Eva, K. W., & Regehr, G. (2005). *Acad Med, 80*(10 Suppl), S46–S54.
- Sætrevik, B. et al. (2024). *Collabra: Psychol, 10*(1), 126223.

See: `docs/simulation-design-evidence-base.md`

---

#### 3.2 Reasoning Pathway Fingerprint (RPFS)

**Construct:** Semantic embedding of a student's full reasoning pathway across
a simulation, enabling cross-session comparison and longitudinal pattern detection.

**Operationalization:** Text description of reasoning pathway encoded as a
384-dimensional vector via BGE-small-en-v1.5 (BAAI, 2023). Stored in
`reasoning_fingerprints` table. Cosine similarity enables identification of
students with similar reasoning patterns.

**Theoretical basis:** Extends analogical reasoning research (Gentner, 1983)
to clinical reasoning — similar reasoning trajectories may indicate shared
cognitive schema. Novel contribution of this platform.

---

### Domain 4: Evidence Retrieval (RAG)

#### 4.1 Guideline-Grounded Debrief

**Construct:** Accuracy and relevance of post-simulation teaching content.

**Implementation:** Retrieval-Augmented Generation (Lewis et al., 2020) over
a curated database of open-access clinical guidelines. All sources are
CC-BY, CC-BY-NC, or free-access society guidelines.

**Retrieval:** BGE-small-en-v1.5 embeddings; cosine similarity via pgvector;
top-3 chunks injected into Claude prompt.

**Primary citations:**
- Lewis, P. et al. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. *NeurIPS 2020.*
- BAAI (2023). BGE embedding models. https://huggingface.co/BAAI/bge-small-en-v1.5

---

## AI Model Usage

**Claude (Anthropic):** Serves as the attending physician (Dr. Patel), patient
voice, debrief generator, and case author. All clinical content generated by
Claude is grounded in human-authored case data or retrieved guidelines.
Claude does not generate novel clinical facts without grounding.

**Model:** claude-sonnet-4-20250514 (or current equivalent).

**Safeguards:**
- System prompts prohibit introducing clinical information the student has not
  encountered in the case
- RAG context is open-access only; no proprietary or copyrighted content
- Debrief content is explicitly framed as educational, not diagnostic

---

## Data Collected

| Data Type | Storage | Purpose |
|---|---|---|
| Simulation transcripts | Supabase `rad_study_sessions` | Research, analytics |
| Reasoning fingerprints | Supabase `reasoning_fingerprints` | Longitudinal profiling |
| Student cognitive profiles | Supabase `student_cognitive_profiles` | Adaptive learning |
| Guideline embeddings | Supabase `guidelines_embeddings` | RAG retrieval |
| Readability scores | Supabase `rad_study_sessions` (JSONB) | Communication research |
| Passive behavioral data | Supabase `rad_study_sessions` (JSONB) | Communication research |

All data is stored in a Supabase (PostgreSQL) instance. No PHI is collected.
Student names are self-reported pseudonyms or first names only.

---

## Detailed Evidence Base Documents

| Module | Document |
|---|---|
| Cognitive bias detection | `docs/cognitive-bias-evidence-base.md` |
| Readability & health literacy | `docs/readability-evidence-base.md` |
| Communication quality | `docs/communication-evidence-base.md` |
| Simulation design & reasoning | `docs/simulation-design-evidence-base.md` |
| Clinical guidelines (RAG) | `supabase/migrations/guidelines-rag.sql` (inline comments) |

---

## Limitations (Global)

1. **Text-based simulation fidelity.** Real clinical encounters involve time
   pressure, physical examination, non-verbal communication, and emotional
   load that text-based simulation cannot fully replicate.

2. **AI-mediated patient.** The patient voice is generated by a large language
   model. Patient responses are realistic but not drawn from real patient data.

3. **Self-selected sample.** Students who use ReasonDx voluntarily may differ
   systematically from those who do not (motivation, prior clinical exposure).

4. **Proxy measures.** All behavioral signals are proxies for latent constructs
   (cognitive bias, empathy, calibration). They are best interpreted as
   educational signals, not clinical assessments.

5. **Minimum sessions.** Longitudinal pattern detection requires ≥3 completed
   simulations per student. Single-session data is collected but not used for
   pattern reporting.

---

## Master Reference List

Berner, E. S., & Graber, M. L. (2008). Overconfidence as a cause of diagnostic error. *Am J Med, 121*(5 Suppl), S2–S23.

Bordage, G. (1994). Elaborated knowledge. *Acad Med, 69*(11), 883–885.

Bordage, G., & Lemieux, M. (1991). Semantic qualifiers. *Acad Med, 66*(9 Suppl), S70–S72.

CDC (2016). *Health Literacy: Accurate, Accessible and Actionable Health Information for All.* cdc.gov/healthliteracy

Croskerry, P. (2009). A universal model of diagnostic reasoning. *Acad Med, 84*(8), 1022–1028.

Croskerry, P., & Norman, G. (2008). Overconfidence in clinical decision making. *Am J Med, 121*(5 Suppl), S24–S29.

Elstein, A. S., Shulman, L. S., & Sprafka, S. A. (1978). *Medical Problem Solving.* Harvard University Press.

Eva, K. W., & Regehr, G. (2005). Self-assessment in the health professions. *Acad Med, 80*(10 Suppl), S46–S54.

Eva, K. W., & Regehr, G. (2008). "I'll never play professional football." *J Contin Educ Health Prof, 28*(1), 14–19.

Flesch, R. (1948). A new readability yardstick. *J Appl Psychol, 32*(3), 221–233.

Graber, M. L., Franklin, N., & Gordon, R. (2005). Diagnostic error in internal medicine. *Arch Intern Med, 165*(13), 1493–1499.

Kerfoot, B. P., & Brotschi, E. (2009). Online spaced education. *Am J Surg, 197*(1), 89–95.

Kincaid, J. P. et al. (1975). *Derivation of new readability formulas.* Naval Air Station Memphis.

Kunitomo, K., Harada, T., & Watari, T. (2022). Cognitive biases in the emergency room. *BMC Emerg Med, 22*, 148.

Kurtz, S., Silverman, J., Benson, J., & Draper, J. (2003). Marrying content and process. *Acad Med, 78*(8), 802–809.

Langewitz, W. et al. (2002). Spontaneous talking time. *BMJ, 325*(7366), 682–683.

Levinson, W., Gorawara-Bhat, R., & Lamb, J. (2000). Patient clues and physician responses. *JAMA, 284*(8), 1021–1027.

Lewis, P. et al. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. *NeurIPS 2020.*

Lingard, L. et al. (2003). A certain art of uncertainty. *Soc Sci Med, 57*(4), 603–616.

Makoul, G. (2001). The SEGUE Framework. *Patient Educ Couns, 45*(1), 23–34.

Makoul, G. et al. (2001). Kalamazoo Consensus Statement. *Acad Med, 76*(4), 390–393.

McLaughlin, G. H. (1969). SMOG grading. *J Reading, 12*(8), 639–646.

Mercer, S. W. et al. (2004). CARE Measure. *Fam Pract, 21*(6), 699–705.

Moulton, C. A. et al. (2007). Slowing down when you should. *Acad Med, 82*(S10), S109–S116.

Paasche-Orlow, M. K., & Wolf, M. S. (2007). Causal pathways linking health literacy to outcomes. *Am J Health Behav, 31*(S1), S19–S26.

Paasche-Orlow, M. et al. (2003). Readability of informed-consent forms. *NEJM, 348*(8), 721–726.

Sætrevik, B. et al. (2024). Anchoring, confirmation and confidence bias. *Collabra: Psychol, 10*(1), 126223.

Schmidt, H. G., & Rikers, R. M. J. P. (2007). Illness script formation. *Med Educ, 41*(12), 1133–1139.

Senter, R. J., & Smith, E. A. (1967). *Automated readability index.* WPAFB.

Silverman, J., Kurtz, S., & Draper, J. (2005). *Skills for Communicating with Patients* (2nd ed.). Radcliffe.

Sweller, J. (1988). Cognitive load during problem solving. *Cogn Sci, 12*(2), 257–285.

Trowbridge, R. L. (2008). Twelve tips for teaching avoidance of diagnostic errors. *Med Teach, 30*(5), 496–500.

Wolpaw, T. M. et al. (2003). SNAPPS. *Acad Med, 78*(9), 893–898.

Wozniak, P. A. (1990). *Optimization of Learning* (Master's thesis). University of Technology, Poznan.
