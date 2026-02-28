# ReasonDx — Clinical Reasoning Education Platform

## Repository Structure

```
ReasonDx/
├── index.html                    # Landing page
├── hospital-3d.html              # 3D hospital navigation (entry point)
├── ed-3d.html                    # 3D ED navigation
├── ed-board-v2.html              # ED Board with AI patient encounters
├── simroomdx.html                # Sim room clinical reasoning trainer
├── night-float.html              # Night float simulation
├── case-browser.html             # Case library (200+ cases)
├── training.html                 # CoachDx training hub
├── crt-hub.html                  # Clinical reasoning trainer hub
├── adventure-hub.html            # Adventure-mode case hub
├── deep-dive-hub.html            # Deep dive study hub
├── deep-dive-player.html         # Deep dive case player
├── board-prep.html               # Board preparation module
├── study-mode.html               # Study mode interface
├── analytics-dashboard.html      # Learning analytics
├── consult-callback.html         # Consult callback trainer
├── ai-trainer-anaphylaxis-food.html  # AI anaphylaxis trainer
│
├── auth/                         # Authentication & billing
├── CoachDx/                      # AI coaching module
├── topics/                       # 316 clinical topic study pages
├── mechanism/                    # 23 pathophysiology/embryology modules
├── tools/                        # Clinical tools (SBAR, DDx, calculators, ECG, etc.)
├── ecg/                          # ECG module
├── js/                           # Shared JavaScript (single source of truth)
├── css/                          # Shared CSS
├── icons/                        # PWA icons
├── images/                       # Logo and images
├── archive/                      # Deprecated files (kept for reference)
└── README.md
```

## Key Entry Points

| URL | Purpose |
|-----|---------|
| `index.html` | Main landing page |
| `hospital-3d.html` | 3D hospital → department navigation |
| `ed-3d.html` | 3D ED → patient encounters |
| `case-browser.html` | Browse 200+ clinical cases |
| `auth/register.html` | User registration |

## External Dependencies

- **Cloudflare Worker**: `coachdx-attending.laurenmfine.workers.dev`
- **Supabase**: Authentication and user data
- **Stripe**: Subscription billing (Free / Pro tiers)
- **Google Analytics**: `G-EKCVJ1SMN3`

## Integration with Virtual EMR

The **Virtual EMR** (separate repo) serves as the clinical workspace hub. ReasonDx provides the immersive navigation layer (3D hospital, ED board) and content library (316 topics, 23 mechanism modules, 200+ cases) that feeds into the EMR's Clinical Reasoning module.

Navigation flow: `Hospital 3D → ED 3D → EMR Census → Patient Chart → Clinical Reasoning`
