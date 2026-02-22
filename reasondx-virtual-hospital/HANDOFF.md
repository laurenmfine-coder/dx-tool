# ReasonDx Virtual Hospital - Handoff Document

## How to Continue Development

Copy and paste this prompt into a new Claude chat to continue building:

---

### CONTINUATION PROMPT

```
I'm building ReasonDx Virtual Hospital, an immersive clinical simulation platform for medical education. I have a complete handoff package from a previous session.

## What's Been Completed:

1. **Clinical Reasoning Trainer (CRT)** - Legacy standalone (6,597 lines):
   - OLDCARTS depth tracking, 15+ symptom trees
   - Must-Not-Miss DDx tagging with probability sliders
   - Case Fingerprint, achievement system, hint system
   - Full EMR navigation, expert comparison
   - Located: legacy/clinical-reasoning-trainer-enhanced.html

2. **ED Board + Virtual Hospital MVP** (2,707 lines, React artifact):
   - 5 presentations, 8 case variants with full clinical data
   - Claude API integration (AI patient interviews with scripted fallback)
   - 9-tab EMR: Interview, Exam, Vitals, Orders, Results, Chart, Notes, DDx, Teaching
   - Comprehensive order menu: 7 categories, 122+ items
   - Vital signs flow sheet with recheck simulation
   - Chart tab: triage note, nursing notes, MAR, consults
   - Code status documentation
   - Interview progress tracker (OLDCARTS + history coverage)
   - DDx builder with expert comparison
   - Teaching tab with case performance summary
   - Located: src/ed-board.jsx

3. **Architecture Documents** - Complete specs
   - Located: docs/

4. **AI Patient Service** - Spec + working implementation
   - Located: src/utils/ai-patient-service.js (spec), src/ed-board.jsx (working)

5. **Landing Page** - Complete
   - Located: public/index.html

## Case Library (8 variants across 5 presentations):

| Presentation | Variant | Acuity |
|---|---|---|
| Chest Pain | STEMI | ESI-1 |
| Chest Pain | Pericarditis | ESI-3 |
| Abdominal Pain | Appendicitis | ESI-3 |
| Shortness of Breath | CHF Exacerbation | ESI-2 |
| Headache | SAH | ESI-1 |
| Headache | Bacterial Meningitis | ESI-2 |
| Altered Mental Status | Acute Ischemic Stroke | ESI-1 |
| Altered Mental Status | Severe Hypoglycemia | ESI-2 |

## What Needs to Be Built Next:

1. More cases (fever, syncope, back pain, PE, GI bleed)
2. CRT <> ED Board integration
3. Multi-day progression
4. Service rotations (Medicine, Surgery, OB, Psych, Peds)
5. Cloud sync (IndexedDB spec exists)
6. SBAR handoff practice
7. Note templates (H&P, progress note, discharge summary)

## Key Decisions:
- Single-player with AI-generated other provider notes
- User-controlled patient arrival
- AI responses grounded in peer-reviewed literature only
- Manual time for MVP
- Brand color: #2874A6
- Source policy: StatPearls, PubMed Central, NCBI Bookshelf, CDC, AHA/ACC, ACOG, Cochrane ONLY

Please review the attached files and continue building from where we left off. Start with [SPECIFY WHAT YOU WANT TO BUILD NEXT].
```

---

## Files to Upload

When starting a new chat, upload these files:

### Required
1. `HANDOFF.md` - This document
2. `src/ed-board.jsx` - The working ED Board prototype (180KB)
3. `README.md` - Project overview

### Recommended
4. `legacy/clinical-reasoning-trainer-enhanced.html` - CRT (312KB)
5. `docs/ReasonDx-AI-Patient-Responses.docx` - AI system spec
6. `docs/ReasonDx-Virtual-Hospital-Architecture.docx` - Full technical spec

### Optional
7. `src/data/case-template-schema.json`
8. `src/utils/ai-patient-service.js`
9. `public/index.html`

---

## Project Status Summary

| Component | Status | Notes |
|-----------|--------|-------|
| Vision & Design | Complete | 3 architecture docs |
| CRT Core | Complete | 16 features, 6,597 lines |
| Landing Page | Complete | 3 pricing tiers |
| Case Library | Complete | 8 variants, 5 presentations |
| Patient Generator | Complete | Variant tracking, demographics, full EMR fields |
| ED Board UI | Complete | 9-tab EMR, tracking board, disposition |
| AI Patient Service | Working | Claude Sonnet API + scripted fallback |
| Order System | Complete | 7 categories, 122+ items |
| Vitals Flow Sheet | Complete | Trending with recheck simulation |
| Code Status | Complete | Full Code / DNR / CMO with nursing doc |
| Chart (Triage/Nursing/MAR) | Complete | Auto-populated from orders |
| Interview Progress | Complete | OLDCARTS + history + ROS tracking |
| DDx Builder | Complete | Confidence sliders, expert comparison |
| Teaching/Performance | Complete | Case summary with metrics |
| Source Cleanup | Complete | All non-peer-reviewed sources removed |
| Storage Service | Spec only | IndexedDB layer defined, not wired |
| CRT Integration | Planned | Connect board to CRT trainer |
| Additional Cases | Planned | Fever, syncope, back pain, PE, GI bleed |
| Multi-day Progression | Planned | Patient status changes over time |
| Service Rotations | Planned | Medicine, Surgery, OB, Psych, Peds |
| SBAR Handoff | Planned | Communication practice module |
| Note Templates | Planned | H&P, progress note, discharge summary |
| Cloud Sync | Planned | Optional cloud persistence |

---

## Repository Structure

```
reasondx-virtual-hospital/
├── README.md
├── HANDOFF.md
├── package.json
├── public/
│   └── index.html               Landing page
├── src/
│   ├── ed-board.jsx             ED Board MVP (2,707 lines, current)
│   ├── ed-board-v1.html         ED Board v1 (archived)
│   ├── data/
│   │   ├── case-template-schema.json
│   │   └── cases/chest-pain.json
│   ├── styles/
│   │   └── variables.css
│   └── utils/
│       ├── ai-patient-service.js
│       ├── patient-generator.js
│       └── storage-service.js
├── legacy/
│   └── clinical-reasoning-trainer-enhanced.html  CRT (6,597 lines)
└── docs/
    ├── ReasonDx-AI-Patient-Responses.docx
    ├── ReasonDx-Virtual-Hospital-Architecture.docx
    └── ReasonDx-Virtual-Hospital-Design.docx
```

---

## Important Context

- **Brand Color**: #2874A6
- **Pricing**: Free ($0), Pro ($14.99/mo or $99/yr), Institutional (custom)
- **Source Policy**: Open-access peer-reviewed only (StatPearls, PubMed Central, CDC, AHA/ACC, NCBI Bookshelf, Cochrane, ACOG). NOT allowed: WikEM, LITFL, Core EM, Wikipedia
- **No version numbers** in filenames or documents
- **Word docs preferred** over markdown for formal documents

---

*Last updated: February 22, 2026*
