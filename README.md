# ReasonDx Virtual Hospital

The most immersive clinical simulation platform for medical education. Built by educators, for educators.

## Overview

ReasonDx Virtual Hospital is a comprehensive hospital simulation platform where medical students manage patients across every phase of hospital-based care — from ED triage to admission, overnight cross-cover, and daily rounds. Every interaction features AI-powered patients, realistic EMRs, and structured clinical reasoning feedback.

## Platform Architecture

### Hospital Simulation Boards

| Board | File | Description | Cases |
|-------|------|-------------|-------|
| **ED Board** | `src/ed-board.jsx` | Emergency Department tracking board — triage, workup, stabilize, disposition | 8 templates with variants |
| **Admitting Board** | `src/admitting-board.jsx` | Receive ED handoffs, admission orders (ADC VAAN DIMLS), H&P, med reconciliation | 4 IM cases with tiered SBAR handoffs |
| **On-Call Board** | *(in development)* | Cross-cover overnight pages — fevers, falls, critical labs, acute decompensation | 12 scenarios planned |
| **Rounding Board** | *(in development)* | Daily rounds, progress notes, discharge planning, multi-day continuity | Planned |

### Communication Training Tools

| Tool | File | Description |
|------|------|-------------|
| **SP Practice Trainer** | `src/sp-trainer.jsx` | Practice as a standardized patient with AI medical student interviewer. Microphone dictation via Web Speech API, real-time accuracy feedback, SBAR handoff practice mode with verbal recording. |
| **SBAR Handoff Trainer** | *(integrated in sp-trainer.jsx)* | Structured SBAR handoff practice — ED→Floor, Nurse→MD, shift sign-out, surgery consults. Write → Score → Record verbal → Continue AI conversation. |
| **Case Selector** | `src/case-selector.jsx` | Central navigation hub — select boards, browse case libraries, filter by rotation/specialty/difficulty, launch all training tools. |
| **CRT Hub** | `src/crt-hub.html` | Clinical Reasoning Trainer hub — focused case modules across all specialties with labs, imaging, and expert differentials. |

### Shared Infrastructure

| File | Description |
|------|-------------|
| `src/utils/ai-patient-service.js` | Claude API integration for AI patient responses |
| `src/utils/patient-generator.js` | Dynamic patient generation with demographic variation |
| `src/utils/storage-service.js` | LocalStorage persistence for case state |
| `src/data/case-template-schema.json` | JSON schema for case template validation |
| `src/data/cases/chest-pain.json` | Example case data file |
| `src/styles/variables.css` | Shared CSS variables (ocean blue brand) |

## Key Features

### Clinical Simulation
- **AI-Powered Patients**: Claude API integration with clinically grounded responses and scripted fallback
- **CoachDx Attending**: Socratic AI attending (Dr. Chen) provides guidance without giving direct answers
- **Realistic Labs & Imaging**: Full lab panels with reference ranges, abnormal flagging, ECG interpretations, and imaging reports
- **Vital Signs Simulation**: Dynamic vitals with realistic physiologic variation

### Hospital Workflow
- **Multi-Patient Management**: Track board with multiple active patients simultaneously
- **Tiered SBAR Handoffs**: Level 1 (minimal), Level 2 (partial), Level 3 (full) handoff information
- **ADC VAAN DIMLS Orders**: Complete admission order framework with 142 order items across 12 categories
- **Medication Reconciliation**: Continue/Hold/Modify/D/C decisions for home medications
- **Documentation**: H&P notes, progress notes with structured templates

### Communication Training
- **Microphone Dictation**: Web Speech API for real-time speech-to-text in SP Trainer and SBAR Trainer
- **Verbal Recording**: MediaRecorder API for recording and reviewing verbal SBAR deliveries
- **SBAR Scoring**: AI evaluation of written SBAR with section-by-section feedback
- **AI Conversation Continuation**: After SBAR submission, continue the handoff conversation with the AI receiver

### Assessment
- **Completion Tracking**: 6-step checklist per case (accept, service, level, exam, orders, note)
- **Expert Teaching Tab**: Correct diagnosis, ranked differential, key orders, critical misses, learning points
- **Performance Scoring**: SP accuracy ratings, SBAR section scores, overall percentages

## Tech Stack

- **Frontend**: React (JSX) with inline styles, no external CSS frameworks
- **AI**: Anthropic Claude API (claude-sonnet-4-20250514) for patient responses, coaching, and evaluation
- **Persistence**: LocalStorage with JSON serialization
- **Speech**: Web Speech API (SpeechRecognition) + MediaRecorder API
- **Design**: Ocean blue brand (#2874A6), DM Sans font family

## File Structure

```
reasondx-virtual-hospital/
├── public/
│   ├── index.html              # Landing page (reasondx.com)
│   ├── auth/
│   │   ├── register.html       # Registration + Stripe checkout
│   │   ├── login.html          # Login page
│   │   ├── account.html        # Account management
│   │   ├── auth-system.js      # Supabase auth logic
│   │   ├── auth-guard.js       # Route protection
│   │   ├── email-service.js    # Transactional email
│   │   ├── stripe-integration.js        # Payment processing
│   │   ├── stripe-referral-coupons.js   # Referral system (REF-XX0000)
│   │   ├── google-apps-script-v2.js     # Google integration
│   │   ├── supabase-edge-functions.ts   # Edge functions
│   │   ├── privacy.html        # Privacy policy
│   │   └── terms.html          # Terms of service
│   ├── data/
│   │   └── rdx-persist.js      # Client-side persistence
│   ├── dx-user-bar.js          # Authenticated user bar
│   ├── dx-progress.js          # Progress tracking
│   ├── dx-sanitize.js          # Input sanitization
│   ├── dx-feedback.js          # Feedback widget
│   └── rdx-site-stats.js       # Analytics
├── src/
│   ├── ed-board.jsx            # ED Board (2,707 lines)
│   ├── admitting-board.jsx     # Admitting Board (1,773 lines)
│   ├── sp-trainer.jsx          # SP Trainer + SBAR Handoff Trainer
│   ├── case-selector.jsx       # Navigation hub / case browser
│   ├── crt-hub.html            # Clinical Reasoning Trainer hub
│   ├── data/
│   │   ├── case-template-schema.json
│   │   └── cases/
│   │       └── chest-pain.json
│   ├── utils/
│   │   ├── ai-patient-service.js
│   │   ├── patient-generator.js
│   │   └── storage-service.js
│   └── styles/
│       └── variables.css
├── docs/
│   ├── ReasonDx-Virtual-Hospital-Design.docx
│   ├── ReasonDx-Virtual-Hospital-Architecture.docx
│   ├── ReasonDx-Virtual-Hospital-Board-Expansion.docx
│   └── ReasonDx-AI-Patient-Responses.docx
├── legacy/
│   ├── ed-board-v1.html        # Original ED board (HTML version)
│   └── clinical-reasoning-trainer-enhanced.html
├── HANDOFF.md
├── README.md
└── package.json
```

## Getting Started

Each `.jsx` file is a self-contained React component that can be rendered independently. They use the Claude API at `https://api.anthropic.com/v1/messages` — no API key is needed when running inside Claude.ai artifacts.

For standalone deployment:
1. Import any board component into a React app
2. Configure Claude API key for AI patient responses
3. Components fall back to scripted responses when API is unavailable

## Clinical Content Sources

All clinical content is grounded in open-access, peer-reviewed sources:
- StatPearls (NCBI)
- AHA/ACC Guidelines
- Cochrane Reviews
- IDSA Guidelines
- ADA Standards of Care

## License

Proprietary — ReasonDx © 2026. All rights reserved.
