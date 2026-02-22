# ReasonDx Virtual Hospital

**Immersive Clinical Simulation Platform for Medical Education**

## 🎯 Vision

A fully immersive virtual hospital simulation where medical students can:
- Rotate through different services (EM, Medicine, Surgery, OB/Gyn, Psych, Peds)
- Manage multiple patients simultaneously
- Experience multi-day continuity of care
- Write real clinical notes in a realistic EMR
- Interact with AI-powered patients grounded in evidence-based medicine

---

## 📁 Repository Structure

```
reasondx-virtual-hospital/
├── README.md                    # This file
├── HANDOFF.md                   # Continuation instructions for new chat
├── package.json                 # Node.js dependencies
│
├── docs/                        # Architecture & Design Documents
│   ├── Virtual-Hospital-Design.docx
│   ├── Virtual-Hospital-Architecture.docx
│   ├── AI-Patient-Responses.docx
│   └── CRT-Enhancement-Spec.docx
│
├── public/                      # Static files & landing page
│   └── index.html               # Marketing landing page with pricing
│
├── src/
│   ├── components/              # UI Components
│   │   └── (to be built)
│   │
│   ├── data/                    # Case templates & clinical content
│   │   ├── case-template-schema.json
│   │   └── cases/
│   │       └── chest-pain-stemi.json
│   │
│   ├── styles/                  # CSS
│   │   └── variables.css
│   │
│   └── utils/                   # Utilities
│       ├── patient-generator.js
│       ├── ai-patient-service.js
│       └── storage-service.js
│
└── legacy/                      # Existing CRT to integrate
    └── clinical-reasoning-trainer-enhanced.html
```

---

## 🏗️ Architecture Overview

### Core Data Models

| Entity | Description |
|--------|-------------|
| **User** | Student/instructor with progress tracking |
| **Hospital** | Simulation instance (ED board, census, time) |
| **Patient** | Generated from templates, has full EMR |
| **EMR** | Notes, labs, vitals, orders |
| **CaseTemplate** | Presentations with multiple variants |
| **Note** | Clinical documentation |

### Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Multi-player | Single-player + AI notes | Simpler MVP, add multiplayer later |
| Patient arrival | User-controlled | No pressure for learning |
| Patient responses | **AI-generated** | Natural conversation, grounded in peer-reviewed sources |
| Time simulation | Manual for MVP | User controls pace |
| Storage | IndexedDB + optional cloud sync | Works offline, persists |

---

## 🤖 AI-Powered Patient Responses

Patients respond naturally using Claude API, but are **constrained by clinical facts from open-access sources**:

### Sources Used (Open-Access, Peer-Reviewed Only)
- **StatPearls (NCBI)** - Primary clinical reference
- **PubMed Central** - Peer-reviewed research literature
- **CDC/AHA/ACC/ACOG Guidelines** - Evidence-based clinical standards
- **NCBI Bookshelf** - Peer-reviewed medical textbooks

### How It Works
1. Case template defines symptoms, history, behavior from literature
2. System prompt instructs AI to portray those facts naturally
3. AI generates conversational responses within constraints
4. Guardrails prevent self-diagnosis, contradictions

### Cost Model
- ~$0.04 per case (15 questions average)
- Free tier: Hybrid (common Q's scripted, 5 AI calls/case)
- Pro tier: Full AI for all responses

---

## 💰 Pricing Tiers

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 5 cases/month, ED only, basic features, hybrid AI |
| **Pro** | $14.99/mo or $99/yr | Unlimited cases, all rotations, full AI, documentation practice, analytics |
| **Institutional** | Custom quote | Everything in Pro + cohort management, LMS integration, custom cases |

---

## 🚀 MVP Scope

### Included ✅
1. ED Tracking Board UI
2. Patient generation (8-10 presentations × 3+ variants)
3. Full CRT integration (16 features already built)
4. AI-powered patient conversations
5. Disposition workflow (discharge/admit)
6. Note writing that persists
7. Variant tracking (don't repeat cases)
8. IndexedDB persistence

### Phase 2+ ❌
- Other rotations (Medicine, Surgery, etc.)
- Automatic time progression
- Paging system
- Multi-day continuity
- Cloud sync
- Instructor dashboard

---

## 📋 Build Order (MVP)

1. ☐ Case template JSON schema
2. ☐ Patient generator from templates
3. ☐ ED Board UI
4. ☐ IndexedDB persistence layer
5. ☐ AI patient service (Claude API integration)
6. ☐ CRT integration
7. ☐ Note persistence to EMR
8. ☐ Disposition workflow
9. ☐ Variant tracking

---

## 🔧 Development Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

---

## 📚 Documentation

See `/docs/` folder for detailed specifications:
- **Virtual-Hospital-Design.docx** - Overall vision and roadmap
- **Virtual-Hospital-Architecture.docx** - Data models, flows, storage
- **AI-Patient-Responses.docx** - AI system architecture
- **CRT-Enhancement-Spec.docx** - Clinical Reasoning Trainer features

---

## 🎨 Brand

- **Primary Color**: #2874A6 (Ocean Blue)
- **Font**: Inter
- **Logo**: 🏥 ReasonDx

---

## 📞 Contact

For institutional inquiries: institutions@reasondx.com

---

*Built with ❤️ for medical education*
