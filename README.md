# ReasonDx — Clinical Reasoning Education Platform

## Repository Structure

```
ReasonDx/
├── index.html                    # Landing page
├── hospital-3d.html              # 3D hospital navigation (entry point)
├── ed-3d.html                    # 3D ED track board with patient encounters
├── ed-board-v2.html              # ED Board — full track board simulation
├── night-float.html              # Night float simulation (pages, admissions, handoff)
├── admissions.html               # Admissions simulator (handoff, orders, H&P, presentation)
├── simroomdx.html                # Sim room — morning rounds with AI characters
├── case-browser.html             # Case library browser (256 cases)
├── virtual-emr.html              # Virtual EMR — SP encounter system
├── consult-callback.html         # Consult callback trainer
├── training.html                 # CoachDx training hub
├── crt-hub.html                  # Clinical reasoning trainer hub
├── study-mode.html               # Study mode interface
├── board-prep.html               # Board prep / shelf exam practice
├── analytics-dashboard.html      # Learning analytics dashboard
├── setting-selector.html         # Clinical setting selector
├── ai-trainer-anaphylaxis-food.html  # AI clinical trainer — anaphylaxis
│
├── auth/                         # Authentication & billing
│   ├── register.html             # Registration + plan selection
│   ├── login.html                # Login page
│   ├── account.html              # Account management
│   ├── auth-guard.js             # Centralized auth guard
│   ├── privacy.html              # Privacy policy
│   └── terms.html                # Terms of service
│
├── CoachDx/                      # AI coaching module
│   ├── index.html                # CoachDx launcher
│   ├── case-library.html         # Case library for coaching
│   └── mentor-chat.html          # Redirects to index.html
│
├── topics/                       # 316 clinical topic study pages
│   └── index.html                # Topic browser
│
├── mechanism/                    # 23 pathophysiology/embryology modules
│
├── tools/                        # Clinical tools
│   ├── index.html                # Tools hub
│   ├── sbar-trainer.html         # SBAR communication trainer
│   ├── learning-dashboard.html   # Learning progress dashboard
│   ├── abg-analyzer.html         # ABG interpretation tool
│   ├── calculator-hub.html       # Clinical calculators
│   ├── ddx-builder.html          # Differential diagnosis builder
│   ├── bookmarks-notes.html      # Bookmarks & notes
│   ├── ecg-integration.html      # ECG tools integration
│   ├── epa-dashboard.html        # EPA tracking dashboard
│   ├── flashcard-studio.html     # Flashcard creator
│   ├── referral-letter-generator.html  # Referral letter tool
│   ├── scoreboard.html           # Peer scoreboard
│   └── study-planner.html        # Study schedule planner
│
├── ecg/                          # ECG module
│   ├── index.html                # ECG hub
│   └── ecg-generator.html        # ECG generator (redirects to hub)
│
├── emr-data/                     # EMR case data (266 files)
│   ├── manifest.js               # Case manifest (256 cases, 28 batches)
│   ├── patient-names.js          # Patient names, sex, and ages
│   ├── handoff-data.js           # ED-to-floor structured handoffs
│   ├── auto-handoff.js           # Auto-generated handoff bridge
│   ├── clinical-settings.js      # Setting/specialty configuration
│   └── [case-id].js              # Individual EMR case files (256)
│
├── js/                           # Shared JavaScript modules
│   ├── rdx-nav.js                # Unified navigation bar
│   ├── rdx-help-widget.js        # Help widget
│   ├── rdx-persist.js            # LocalStorage persistence layer
│   ├── dx-feedback.js            # Feedback widget
│   ├── dx-user-bar.js            # User identity/XP bar
│   ├── dx-case-nav.js            # Case navigation
│   ├── rdx-breadcrumb.js         # Auto-generated breadcrumb navigation
│   └── [stubs]                   # Feature stubs (tutor, bias, progress, etc.)
│
├── css/                          # Shared stylesheets
│   ├── rdx-theme.css             # Unified design system (light/dark)
│   ├── dx-case-nav.css           # Case navigation styles
│   └── rdx-help-widget.css       # Help widget styles
│
├── mobile.css                    # Global mobile responsive styles
├── manifest.json                 # PWA manifest
├── sw.js                         # Service worker
├── favicon.svg                   # Site favicon
├── 404.html                      # Custom error page
├── robots.txt                    # Search engine directives
├── sitemap.xml                   # XML sitemap for SEO
├── emr-supabase.js               # Cloud sync (Supabase) fallback stub
├── .htaccess                     # Apache server configuration
├── _redirects                    # Netlify redirects
├── _headers                      # Netlify security headers
└── icons/                        # PWA icons
```

## Key Numbers

- **256** virtual EMR patient cases
- **316** clinical topic study pages
- **23** pathophysiology/embryology modules
- **79** clinical reasoning trainers (CRTs)
- **13** clinical tools
- **28** case batches across 28 specialties
- **5** clinical settings (ED, Inpatient, Consult, ICU, Clinic)

## Audit Status

All pages have been audited and include:
- Unified navigation (rdx-nav.js) with keyboard accessibility
- IBM Plex Sans font family (standardized)
- Design system (css/rdx-theme.css) with light + dark mode
- Skip-to-content links
- Open Graph + Twitter Card meta tags
- Canonical URLs + robots meta
- Noscript fallback warnings
- Print styles
- Focus-visible accessibility styles
- Font preconnect + display=swap performance hints
- Google Analytics (G-EKCVJ1SMN3)
- PWA manifest + service worker
- Auth guard
- Help widget

## Brand

- Primary color: `#2874A6` (ocean blue)
- Dark accent: `#1f5f8b`
- Font: IBM Plex Sans (body), IBM Plex Mono (code), Georgia (logo only)
- Design system: `css/rdx-theme.css` (light + dark themes)

## Infrastructure

All root pages include:
- Google Analytics (G-EKCVJ1SMN3)
- Theme-color meta tag (`#1f5f8b`)
- PWA manifest + service worker
- Favicon + apple-touch-icon
- Mobile responsive CSS
- Auth guard (`auth/auth-guard.js`)
- Unified navigation (`js/rdx-nav.js`)
- Help widget (`js/rdx-help-widget.js`)
- Open Graph meta tags
