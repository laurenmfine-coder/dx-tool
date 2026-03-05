# ReasonDx Tools

## MCQ Generation

### ✅ generate_public_mcqs.py — USE THIS FOR PUBLIC LIBRARY
Generates MCQs using ONLY verified public-domain sources:
- NIAID (niaid.nih.gov)
- NHLBI (nhlbi.nih.gov)  
- AHRQ (effectivehealthcare.ahrq.gov)
- CDC (cdc.gov)

Safe for the public library and Pro tier (M&A clean).

```bash
export ANTHROPIC_API_KEY=sk-ant-...

# Pilot run (5 cases, verify quality first)
python3 tools/generate_public_mcqs.py \
  --cases anaphylaxis,asthma-exacerbation,peanut-allergy-anaphylaxis,cvid-presentation,penicillin-allergy-delabeling \
  --mcqs-per-case 2

# Full run (49 cases, 3 MCQs each = 147 total, ~30 min)
python3 tools/generate_public_mcqs.py --mcqs-per-case 3

# Resume if interrupted
python3 tools/generate_public_mcqs.py --mcqs-per-case 3 --resume
```

Output: `rdx-public-mcq-library.js` in repo root

---

### ⚠️ generate_mcq_library.py — PRIVATE LIBRARY ONLY
Uses whatever DOI sources are in the case files (may include Elsevier/Wiley).
Only use for the personal/private study library, NOT the public library.

---

## Source Compliance

### audit_sources.py
Scans all DOIs in emr-data/ and topics/ for license status.
```bash
python3 tools/audit_sources.py --fast   # heuristics only
python3 tools/audit_sources.py          # full Unpaywall API check
```

### apply_remediation.py
Converts restricted DOI links to plain-text "Suggested Reading" citations.
```bash
python3 tools/apply_remediation.py --apply --backup
```
