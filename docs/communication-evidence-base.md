# ReasonDx Communication Quality Assessment — Evidence Base

## Overview

ReasonDx assesses four dimensions of student communication during patient encounters:
(1) question type sequencing, (2) empathy and rapport behaviors, (3) implicit
confidence language, and (4) response latency as a proxy for cognitive load.
Each is grounded in validated frameworks from medical education and communication research.

---

## 1. Question Type Classification

### Theoretical Framework

**Calgary-Cambridge Guide to the Medical Interview**

Silverman, J., Kurtz, S., & Draper, J. (2005). *Skills for Communicating with
Patients* (2nd ed.). Radcliffe Publishing.

Kurtz, S., Silverman, J., Benson, J., & Draper, J. (2003). Marrying content and
process in clinical method teaching: enhancing the Calgary-Cambridge Guides.
*Academic Medicine, 78*(8), 802–809.
https://doi.org/10.1097/00001888-200308000-00011

**Relevance:** Calgary-Cambridge is the most widely used framework for medical
communication skills teaching and assessment worldwide. It specifies the optimal
sequencing of question types in history-taking: beginning with open questions to
elicit the patient's narrative, then transitioning to closed questions to clarify
specifics. This "open-to-closed cone" is the theoretical basis for ReasonDx's
`openingPattern` and `expertPattern` signals.

**SEGUE Framework**

Makoul, G. (2001). The SEGUE Framework for teaching and assessing communication
skills. *Patient Education and Counseling, 45*(1), 23–34.
https://doi.org/10.1016/S0738-3991(01)00136-7

**Relevance:** Validated 32-item checklist assessing five communication domains
(Set the stage, Elicit information, Give information, Understand the patient's
perspective, End the encounter). Question type diversity and sequence are scored
items. ReasonDx question type classifier operationalizes SEGUE's "Elicit
information" domain quantitatively.

### Question Type Definitions

**Open questions** — invite narrative responses; cannot be answered with yes/no.
Defined by starting patterns: "tell me," "describe," "what," "how," "explain."
*Source:* Calgary-Cambridge Guide; SEGUE Framework.

**Closed questions** — answerable with yes/no or a brief specific response.
Starting patterns: "do you," "have you," "are you," "is there," "did you."
*Source:* Calgary-Cambridge Guide.

**Leading questions** — suggest the desired answer; associated with confirmation
bias in clinical interviewing. Patterns: "right?", "don't you?", "isn't it?"
*Source:* Silverman et al. (2005). Leading questions are explicitly identified
as a communication deficit in Calgary-Cambridge assessment.

**Clarifying questions** — seek elaboration of what the patient already said.
Patterns: "when you say," "what do you mean by," "you mentioned."
*Source:* Calgary-Cambridge Guide. Clarifying is a distinct communication skill
that reflects active listening.

**Permission-seeking** — asks patient consent before proceeding. Patterns:
"is it okay if," "would you be comfortable with," "may I."
*Source:* Kalamazoo Consensus Statement (Makoul et al., 2001) — permission-seeking
is listed as an essential element of patient-centered communication.

### Expert Pattern

**Operationalization:** `expertPattern = true` when ≥ 2 of the first 3 questions
in the history-taking phase are open questions.

**Grounding:**
Langewitz, W., Denz, M., Keller, A., Kiss, A., Rüttimann, S., & Wössmer, B. (2002).
Spontaneous talking time at start of consultation in outpatient clinic: cohort
study. *BMJ, 325*(7366), 682–683. https://doi.org/10.1136/bmj.325.7366.682

Found that patients given uninterrupted time at the start of an encounter (enabled
by open questions) complete their opening statement in a median of 92 seconds and
provide more complete, clinically relevant information. The open-first pattern
is empirically associated with more complete history-gathering.

---

## 2. Empathy and Rapport Detection

### Theoretical Framework

**Kalamazoo Consensus Statement**

Makoul, G., & the participants in the Bayer-Fetzer Conference on Physician-Patient
Communication in Medical Education. (2001). Essential elements of communication
in medical encounters: the Kalamazoo Consensus Statement. *Academic Medicine,
76*(4), 390–393. https://doi.org/10.1097/00001888-200104000-00021

**Relevance:** Consensus statement from 21 medical education organizations defining
the seven essential elements of communication in medical encounters. ReasonDx
empathy signals map directly to these elements:

| ReasonDx Signal | Kalamazoo Element |
|---|---|
| `expressesConcern` | Responds to emotions |
| `normalizes` | Responds to emotions |
| `validates` | Responds to emotions |
| `usesPatientName` | Builds relationship |
| `asksPermission` | Opens the discussion |
| `checksIn` | Builds relationship |
| `acknowledgesEmotion` | Responds to emotions |

**CARE Measure (Consultation and Relational Empathy)**

Mercer, S. W., Maxwell, M., Heaney, D., & Watt, G. C. M. (2004). The consultation
and relational empathy (CARE) measure: development and preliminary validation and
reliability of an empathy-based consultation process measure. *Family Practice,
21*(6), 699–705. https://doi.org/10.1093/fampra/cmh621

**Relevance:** Validated 10-item patient-rated empathy scale. Items include "making
you feel at ease," "showing care and compassion," and "being positive about your
ability to cope." The `normalizes` and `validates` signals in ReasonDx correspond
to CARE items 3 and 4 specifically.

**Patient Acknowledgment**

Levinson, W., Gorawara-Bhat, R., & Lamb, J. (2000). A study of patient clues and
physician responses in primary care and surgical settings. *JAMA, 284*(8), 1021–1027.
https://doi.org/10.1001/jama.284.8.1021

**Relevance:** Foundational study showing that physicians miss the majority of
patient emotional cues, and that acknowledgment of cues is associated with patient
satisfaction and disclosure. The `acknowledgesEmotion` signal operationalizes
cue-response behavior from this study.

**Use of Patient Name**

Silverman et al. (2005) Calgary-Cambridge Guide explicitly lists use of the
patient's name as a rapport-building behavior. ReasonDx implements this as a
binary signal per turn in the history-taking phase.

### Empathy Density

**Operationalization:** Average empathy signals per turn across the history-taking
phase. Higher = more consistent empathic communication.

**Grounding:** Rather than binary (empathic/not), ReasonDx uses density to capture
consistency — consistent with how OSCE empathy stations are typically rated
(not a single moment but a pattern across the encounter).

---

## 3. Implicit Confidence Language

### Theoretical Framework

**Epistemic Markers in Clinical Reasoning**

Lingard, L., Garwood, K., Schryer, C. F., & Spafford, M. M. (2003). A certain
art of uncertainty: case presentation and the development of professional identity.
*Social Science & Medicine, 57*(4), 603–616.
https://doi.org/10.1016/S0277-9536(02)00426-6

**Relevance:** Studied how medical trainees use language to signal certainty and
uncertainty in clinical presentations. Found that hedging language increases
appropriately with case complexity in expert clinicians. ReasonDx uses this
framework to classify language as hedging (uncertainty) vs. commitment (certainty).

Traynor, M. (2009). Humility and the practitioner. *Nursing Philosophy, 10*(2),
71–79. https://doi.org/10.1111/j.1466-769X.2008.00386.x

**Relevance:** Examined epistemic humility as a professional virtue in clinical
practice. Established that appropriate hedging is a sign of calibrated expertise,
not uncertainty avoidance.

### Operationalization

**Hedging markers:** "maybe," "possibly," "could be," "might be," "perhaps,"
"I think," "not sure," "uncertain," "I wonder," "I guess," "potentially,"
"it seems," "it appears," "I suppose," "I believe," "not certain."

**Commitment markers:** "definitely," "clearly," "certainly," "obviously,"
"this is," "I'm confident," "I'm sure," "without doubt," "no question,"
"must be," "has to be," "confirmed," "diagnostic of," "consistent with,"
"classic for," "textbook."

**Score:** `(commitment − hedging) / (commitment + hedging)` → range −1 to +1.
0 = neutral; positive = committed; negative = hedging.

**Trajectory interpretation:** Increasing confidence across phases may indicate
anchoring (per Croskerry, 2009); decreasing confidence may indicate appropriate
uncertainty as complexity increases (Lingard et al., 2003).

**Limitation:** This is a lexical proxy measure validated for face validity against
the Lingard et al. framework. It has not been independently validated as a
standalone instrument. It should be interpreted as one signal among several, not
as a standalone confidence score.

---

## 4. Response Latency

### Theoretical Framework

**Slowing Down When You Should**

Moulton, C. A., Regehr, G., Mylopoulos, M., & MacRae, H. M. (2007). Slowing down
when you should: a new model of expert judgment. *Academic Medicine, 82*(10 Suppl),
S109–S116. https://doi.org/10.1097/ACM.0b013e3181405a76

**Relevance:** Demonstrated that expert surgeons deliberately slow down at critical
decision points — a behavior the authors call "intraoperative hesitation." Slow
response in the context of a clinical decision may indicate appropriate System 2
engagement rather than difficulty. This is the theoretical basis for NOT treating
slow latency as uniformly negative in ReasonDx.

**Cognitive Load Theory**

Sweller, J. (1988). Cognitive load during problem solving: effects on learning.
*Cognitive Science, 12*(2), 257–285. https://doi.org/10.1207/s15516709cog1202_4

**Relevance:** Foundational theory establishing that response time is a proxy for
working memory load. In medical education, cognitive load has been operationalized
via latency in procedural skill training (Leppink et al., 2013). ReasonDx applies
this principle to diagnostic reasoning.

### Operationalization

| Category | Threshold | Interpretation | Basis |
|---|---|---|---|
| Fast | < 5 seconds | Pattern recognition (System 1); possible automaticity | Croskerry (2009) System 1 |
| Moderate | 5–15 seconds | Typical deliberate reasoning; adequate processing time | Pragmatic cutpoint |
| Slow | 15–30 seconds | Possible deliberate System 2 engagement at a decision point | Moulton et al. (2007) |
| Very slow | > 30 seconds | Possible cognitive overload or working memory demand | Sweller (1988) |

**Critical limitation:** In text-based simulation, latency includes typing time and
is therefore confounded by typing speed. These thresholds are pragmatic cutpoints
consistent with simulation literature but have not been independently validated for
text-based digital platforms. Latency data is reported descriptively only and is
**never used for grading or competency determination.**

---

## 5. Cue Utilization

**Baron, R. M., & Ensley, M. D. (2006). Perceived opportunities for entrepreneurial
action: Linking the 17 opportunity-recognition literatures. *Management Science,
52*(9), 1331–1344.**

The concept of cue utilization in medical decision-making has a different origin:

**Elstein, A. S., Shulman, L. S., & Sprafka, S. A. (1978). *Medical Problem Solving:
An Analysis of Clinical Reasoning.* Harvard University Press.**

**Relevance:** Foundational study of clinical reasoning showing that expert
clinicians generate hypotheses early and test them through targeted information
gathering. Cue utilization — following up on information the patient provides —
is central to this hypothesis-testing model. ReasonDx tracks whether students
follow up on patient-volunteered cues as a proxy for active hypothesis testing.

---

## Limitations

1. All passive communication measures are extracted from text. Tone, prosody,
   facial expression, and physical touch — core components of real-world empathy
   assessment — are not captured.
2. The question type classifier uses pattern matching on sentence structure. Complex
   or compound questions may be misclassified.
3. Latency is confounded by typing speed in a text-based simulation environment.
4. All measures are session-level proxies requiring multiple data points before
   reliable patterns can be reported.

---

## Key References

- Makoul, G. (2001). SEGUE Framework. *Patient Educ Couns, 45*(1), 23–34.
- Makoul, G. et al. (2001). Kalamazoo Consensus Statement. *Acad Med, 76*(4), 390–393.
- Silverman, J., Kurtz, S., & Draper, J. (2005). *Skills for Communicating with Patients* (2nd ed.).
- Mercer, S. W. et al. (2004). CARE Measure. *Fam Pract, 21*(6), 699–705.
- Levinson, W. et al. (2000). Patient clues and physician responses. *JAMA, 284*(8), 1021–1027.
- Lingard, L. et al. (2003). Epistemic uncertainty in clinical presentations. *Soc Sci Med, 57*(4), 603–616.
- Moulton, C. A. et al. (2007). Slowing down when you should. *Acad Med, 82*(S10), S109–S116.
- Langewitz, W. et al. (2002). Spontaneous talking time. *BMJ, 325*(7366), 682–683.
- Sweller, J. (1988). Cognitive load during problem solving. *Cogn Sci, 12*(2), 257–285.
- Elstein, A. S. et al. (1978). *Medical Problem Solving.* Harvard University Press.
