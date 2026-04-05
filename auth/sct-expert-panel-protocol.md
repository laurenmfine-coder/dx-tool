# SCT Expert Panel Protocol — ReasonDx Baseline Assessment
## Validity Requirement for IRB Submission

---

### Purpose
The Script Concordance Test (SCT) in baseline-assessment.html uses aggregate expert responses as the scoring key. This is standard SCT methodology (Charlin et al., 2000). Before the IRB is defensible to reviewers, you need 5–10 attending physicians to complete the same 24 SCT items.

### What Experts Do
1. Receive a link to `baseline-assessment.html?mode=expert&token=XXXXXXXX`
2. Complete Steps 1–3 only (the 3 clinical vignettes with SCT scoring)
3. Takes ~10 minutes
4. Responses are aggregated into a scoring key stored in Supabase

### Recommended Recruitment
**Target:** 8–10 attending physicians  
**Ideal breakdown:**
- 4–5 internal medicine / emergency medicine attendings
- 2–3 attendings from non-medicine professions (pharmacy, nursing, PA)
- 1–2 with formal clinical reasoning education expertise

**Where to recruit:**
- NSU KPCAM faculty with patient care responsibilities
- Broward Health attending contacts
- Former colleagues from clinical practice
- FCSC institutional contacts

### Script for Recruitment Email

Subject: 10-minute research participation — Clinical Reasoning Expert Panel

Hi [Name],

I'm seeking 8–10 experienced clinicians to serve as expert scorers for a clinical reasoning assessment tool I'm developing at NSU KPCAM. This is a validated method called the Script Concordance Test.

Your participation involves completing 24 clinical reasoning questions based on brief patient vignettes — approximately 10 minutes total. Your aggregate responses (combined with other experts) become the scoring benchmark against which medical students are measured.

No preparation needed. You'll receive a direct link to the assessment.

Would you be willing to participate? The link will be active through [DATE].

Thank you,
Lauren Fine, MD, FAAAAI
NSU KPCAM

---

### Implementation Notes
- Expert token system: add `?mode=expert&token=EXPERT_TOKEN` URL parameter
- expert_token list stored in Supabase `expert_tokens` table
- Expert responses saved to `sct_expert_responses` table (separate from student data)
- Scoring key = proportion of experts who selected each SCT response option
- Once ≥5 experts complete: auto-generate scoring key; log to `sct_scoring_keys` table

### Platform Work Required (~2 hours)
1. Add expert URL parameter handling to baseline-assessment.html
2. Route experts to Steps 1–3 only (skip background/CRT/PIF)
3. Save expert responses to `sct_expert_responses` Supabase table
4. Build scoring key aggregation function
5. Wire scoring key into student baseline scoring

### IRB Timing
- Expert panel should complete BEFORE first student IRB enrollment
- Expert responses do NOT require separate IRB approval (quality improvement activity)
- Recommend collecting expert responses 2–4 weeks before study launch
