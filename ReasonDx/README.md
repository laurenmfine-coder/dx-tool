# ReasonDx

**Clinical Reasoning Education Platform**

ReasonDx is an interactive, browser-based medical education platform designed to teach clinical reasoning through case-based learning, pathophysiology modules, and board-style practice questions. Built as a progressive web app (PWA) for offline-capable, mobile-friendly access.

## Platform Overview

| Content Type | Count | Description |
|---|---|---|
| Clinical Topics | 316 | Searchable topic pages with integrated learning paths |
| Interactive Cases | 196 | Expanded adventure-style clinical scenarios with scoring |
| Pathophysiology Modules | 401 | Mechanism-based teaching modules |
| Deep Dives | 278 | In-depth explorations of high-yield topics |
| Board-Prep Questions | 615 | MCQ bank with balanced answer distributions |
| Clinical Reasoning Trainers | 79 | Focused diagnostic reasoning exercises |
| ECG Modules | 4 | Interactive electrocardiogram interpretation |
| CoachDx Tools | 3 | Coaching and self-assessment dashboards |
| Utility Tools | 17 | Calculators, dashboards, study aids |

## Architecture

```
reasondx/
├── index.html              # Landing page (search-first, PWA install)
├── adventure-hub.html      # Central hub for all interactive cases
├── board-prep.html         # Board-style question bank entry
├── help.html               # User guide and site map
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker for offline access
│
├── cases/                  # 196 interactive expanded-adventure cases
│   ├── {topic}-expanded-adventure.html
│   └── ...
│
├── modules/                # 401 pathophysiology teaching modules
│   ├── index.html          # Browse by specialty
│   ├── {topic}-mechanism.html
│   └── ...
│
├── topics/                 # 316 topic overview pages
│   └── {topic}.html
│
├── data/                   # JSON data stores
│   ├── topic-map.json      # Master topic index with cross-links
│   ├── board-prep-questions.json  # 615 MCQs
│   ├── deep-dives/         # 278 deep-dive JSON files
│   ├── crt-cases/          # 31 clinical reasoning trainer datasets
│   └── ...
│
├── css/                    # Stylesheets
│   ├── rdx-theme.css       # Unified design system
│   ├── rdx-a11y.css        # Accessibility styles
│   ├── mobile.css           # Mobile-responsive overrides
│   └── ...
│
├── js/                     # Shared JavaScript
│   ├── rdx-nav.js          # Unified navigation
│   ├── rdx-search-index.js # Search index (283 entries + abbreviations)
│   ├── rdx-help-widget.js  # Floating help/dashboard widget
│   └── ...
│
├── tools/                  # Utility tools and dashboards
│   ├── learning-dashboard.html
│   ├── dx-dashboard.html
│   └── ...
│
├── ecg/                    # ECG interpretation modules
├── CoachDx/                # Coaching dashboards
├── icons/                  # PWA icons
│
└── scripts/                # Build and generation scripts
    ├── master-gen.py        # Case generation engine
    ├── cases_micro.py       # Microbiology case data (38 organisms)
    └── ...
```

## Features

### Interactive Cases
- **6-scene clinical adventures** with branching narratives and vital signs
- **Difficulty selector** (Beginner / Standard / Advanced) toggles hints
- **Score tracking** with mastery levels (Developing → Competent → Proficient → Mastery)
- **Progress persistence** via localStorage
- **Balanced answer positions** — correct answers distributed 25% across A/B/C/D
- **Why-chains** — Socratic follow-up questions that teach the reasoning behind each answer
- **Mechanism teaching boxes** — embedded pathophysiology explanations within cases

### Case Categories
- **Clinical** (46 topics): Emergency medicine, cardiology, GI, neuro, heme, endocrine, psychiatry, surgery, OB/GYN, pediatrics, pulmonary, rheumatology, urology, toxicology
- **Microbiology** (38 organisms): Full organism arc — Presentation → Identification → Virulence → Treatment → Resistance → Prevention
- **Pharmacology** (15 drug classes): MOA → Spectrum → Dosing → Adverse Effects → Resistance → Clinical Application
- **Embryology** (8 systems): Development → Normal formation → What goes wrong → Clinical presentation → Diagnosis → Management

### Design System
- **Teal-based color palette** with CSS custom properties (`--rdx-teal`, `--rdx-purple`, etc.)
- **DM Sans / DM Serif** font stack
- **3-tier border radius** system (8px / 12px / 16px)
- **Mobile-first responsive** design with safe-area support
- **Floating help widget** on all pages (📊 dashboard + ? help)

### PWA Support
- Full offline capability via service worker
- Session-based install prompt (modal + inline banner)
- iOS step-by-step Add to Home Screen guide
- Android native install via beforeinstallprompt API

## Content Standards

All cases follow a **Gold Standard Specification**:
- 6 scenes per case, 6 questions (4 options each)
- 6 mechanism teaching boxes with why-chains
- 6 hint pairs (beginner + advanced)
- Vital signs display where clinically appropriate
- 2+ open-access references (StatPearls, PubMed, CDC, etc.)
- Cross-links to mechanism modules and board prep
- Completion screen with score, mastery level, retry, and navigation

### Content Policy
- **Open-access sources only** — no paywalled references
- **Original educational content** — all text is original, not copied from any source
- **Answer balance enforced** — algorithmic distribution prevents position bias
- **Evidence-based** — treatment recommendations follow current guidelines

## Development

### Case Generation
The `scripts/master-gen.py` engine generates HTML cases from structured data:

```bash
cd scripts
python3 master-gen.py
```

Case data is organized by category:
- `cases_micro.py` — 38 microbiology organisms
- Pharmacology and clinical cases defined inline in generation scripts

### Serving Locally
ReasonDx is a static site — serve with any HTTP server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Data Files

| File | Description |
|---|---|
| `data/topic-map.json` | Master index of all 316 topics with cross-links, adventures, modules |
| `data/board-prep-questions.json` | 615 board-style MCQs across all specialties |
| `data/deep-dives/*.json` | 278 deep-dive content files |
| `data/crt-cases/*.json` | 31 clinical reasoning trainer datasets |
| `data/quiz-bank.json` | Additional quiz content |
| `js/rdx-search-index.js` | Search index with 283 entries + 29 abbreviation tags |

## Browser Support

- Chrome / Edge 90+
- Safari 15+ (iOS and macOS)
- Firefox 90+
- PWA install supported on Chrome, Edge, and Safari (iOS)

## Copyright

© 2025–2026 ReasonDx. All rights reserved.

Content is intended for educational purposes. Clinical information should not be used as a substitute for professional medical judgment.
