# ReasonDx Readability & Health Literacy Assessment — Evidence Base

## Overview

ReasonDx measures the reading level and communication quality of student messages
during patient encounters. The core question: does the student adjust their language
when speaking to a patient versus an attending physician? This is a validated and
clinically important communication competency.

---

## Theoretical Framework

### Health Literacy and Plain Language in Medicine

Paasche-Orlow, M. K., & Wolf, M. S. (2007). The causal pathways linking health
literacy to health outcomes. *American Journal of Health Behavior, 31*(Suppl 1),
S19–S26. https://doi.org/10.5555/ajhb.2007.31.supp.S19

**Relevance:** Established the causal model linking provider communication complexity
to patient health outcomes. Poor health literacy is associated with worse medication
adherence, higher hospitalization rates, and increased mortality. Provider language
complexity is a modifiable upstream cause.

Centers for Disease Control and Prevention. (2016). *Health Literacy: Accurate,
Accessible and Actionable Health Information for All.*
https://www.cdc.gov/healthliteracy/

**Relevance:** CDC recommendation that patient-facing health materials be written at
the 6th–8th grade reading level. This is the benchmark used by ReasonDx to flag
patient-appropriate vs. inappropriate communication. The 6th–8th grade threshold
is the direct basis for `patientAppropriate` scoring in rdx-readability.js.

### Patient-Provider Communication in Medical Education

Makoul, G. (2001). The SEGUE Framework for teaching and assessing communication
skills. *Patient Education and Counseling, 45*(1), 23–34.
https://doi.org/10.1016/S0738-3991(01)00136-7

**Relevance:** SEGUE is a validated checklist for medical communication assessment
widely used in OSCE and clerkship evaluation. Includes language adaptation as a
scored item. ReasonDx readability scoring operationalizes this SEGUE domain
quantitatively rather than via rater observation.

---

## Readability Instruments

### 1. Flesch-Kincaid Grade Level

**Source:** Kincaid, J. P., Fishburne, R. P., Rogers, R. L., & Chissom, B. S. (1975).
*Derivation of new readability formulas (Automated Readability Index, Fog Count,
and Flesch Reading Ease Formula) for Navy enlisted personnel* (Research Branch
Report 8-75). Naval Air Station Memphis.

**Formula:** `0.39 × (words/sentences) + 11.8 × (syllables/words) − 15.59`

**Interpretation:** Outputs a US school grade level. Grade 6 = 6th grade reading
level. Originally validated on US Navy training documents; subsequently validated
across medical, patient education, and general-population texts.

**Use in ReasonDx:** Primary grade-level estimate for all student messages. Compared
against the CDC 6th–8th grade benchmark when student is speaking to the patient.

### 2. Flesch Reading Ease

**Source:** Flesch, R. (1948). A new readability yardstick. *Journal of Applied
Psychology, 32*(3), 221–233. https://doi.org/10.1037/h0057532

**Formula:** `206.835 − 1.015 × (words/sentences) − 84.6 × (syllables/words)`

**Scale:** 0–100. 60–70 = plain English (standard). 30–50 = college level. <30 =
graduate/professional. Higher = easier.

**Use in ReasonDx:** Supplementary metric. Not used for the primary grade-level
determination but included in the Communication Quality Report for completeness.

### 3. SMOG Index (Simple Measure of Gobbledygook)

**Source:** McLaughlin, G. H. (1969). SMOG grading: A new readability formula.
*Journal of Reading, 12*(8), 639–646.

**Formula:** `3 + √(polysyllabic words × 30/sentences)`

**Note:** Technically requires ≥ 30 sentences for full validity. ReasonDx applies
a proportional correction for shorter texts, consistent with the instrument's
published adaptation guidance.

**Use in ReasonDx:** Secondary estimate. Averaged with Flesch-Kincaid to produce
`consensusGrade`, which is the primary metric used for patient-appropriate scoring.

### 4. Automated Readability Index (ARI)

**Source:** Senter, R. J., & Smith, E. A. (1967). *Automated readability index*
(AMRL-TR-66-220). Wright-Patterson Air Force Base.

**Formula:** `4.71 × (characters/words) + 0.5 × (words/sentences) − 21.43`

**Use in ReasonDx:** Tertiary estimate. Included in detailed analytics output.
Character-based formula provides different sensitivity to technical vocabulary
than syllable-based formulas.

### Consensus Grade Level

ReasonDx uses the average of Flesch-Kincaid and SMOG as the `consensusGrade`
— a multi-instrument consensus approach consistent with published recommendations
for medical text assessment (Paasche-Orlow et al., 2003).

Paasche-Orlow, M., Taylor, H. A., & Brancati, F. L. (2003). Readability standards
for informed-consent forms as compared with actual readability. *New England Journal
of Medicine, 348*(8), 721–726. https://doi.org/10.1056/NEJMsa021212

---

## Language Adaptation Assessment

### Adjusts Language for Patient

**Operationalization:** `adjustsLanguageForPatient = true` when the student's
average consensus grade level to the patient (Phase 3: History-Taking) is ≥ 1.5
grade levels lower than their average to the attending (all other phases).

**Grounding:**
Cegala, D. J., & Lenzmeier Broz, S. (2002). Physician communication skills training:
a review of theoretical backgrounds, objectives and skills. *Medical Education,
36*(11), 1004–1016. https://doi.org/10.1046/j.1365-2923.2002.01332.x

Found that language register adaptation is a core communication competency and
that medical students consistently fail to sufficiently simplify language for
patients. The 1.5-grade threshold represents a meaningful reduction consistent
with the literature.

### Patient-Appropriate Rate

**Operationalization:** Percentage of patient-directed messages at ≤ 8th grade
level (consensus grade ≤ 8). Threshold: ≥ 80% = patient-appropriate.

**Grounding:** CDC health literacy recommendation (2016); Paasche-Orlow & Wolf (2007).

---

## Jargon Detection

Medical jargon is flagged using a curated lexicon of high-frequency clinical terms
that are unlikely to be understood by patients without a medical background.

**Grounding:**
Boyle, C. M. (1970). Difference between patients' and doctors' interpretation of
some common medical terms. *British Medical Journal, 2*(5704), 286–289.
https://doi.org/10.1136/bmj.2.5704.286

Classic study demonstrating large discrepancies between physician and patient
interpretation of common medical terms. ReasonDx jargon lexicon was constructed
to include terms shown in this and subsequent studies to be misunderstood.

---

## Limitations

1. **Short-text validity.** Readability formulas were validated on multi-paragraph
   texts. Single-sentence clinical communications (common in this simulation) may
   produce unstable estimates. ReasonDx reports session-level averages across
   multiple turns to mitigate this.

2. **Clinical register complexity.** Standard readability formulas do not capture
   all dimensions of comprehensibility relevant to clinical communication (e.g.,
   emotional tone, use of analogies, chunking of information). They are best
   treated as proxy measures.

3. **Simulation fidelity.** Text-based simulation removes prosodic cues (tone,
   pace, volume) that are important in real patient communication. Scores reflect
   lexical and syntactic complexity only.

---

## Key References

- Flesch, R. (1948). A new readability yardstick. *J Appl Psychol, 32*(3), 221–233.
- Kincaid et al. (1975). *Derivation of new readability formulas.* Naval Air Station Memphis.
- McLaughlin, G. H. (1969). SMOG grading. *J Reading, 12*(8), 639–646.
- Senter & Smith (1967). *Automated readability index.* WPAFB.
- CDC (2016). *Health Literacy: Accurate, Accessible and Actionable.*
- Paasche-Orlow, M. K., & Wolf, M. S. (2007). *Am J Health Behav, 31*(S1), S19–S26.
- Paasche-Orlow et al. (2003). Readability of informed-consent forms. *NEJM, 348*(8), 721–726.
- Makoul, G. (2001). SEGUE Framework. *Patient Educ Couns, 45*(1), 23–34.
- Boyle, C. M. (1970). Medical jargon comprehension. *BMJ, 2*(5704), 286–289.
