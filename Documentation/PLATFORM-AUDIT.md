# DxSuite Platform Audit & Simplification Recommendations

## Current State: Too Complex

The platform has grown organically with overlapping tools scattered across directories. A new learner would be overwhelmed trying to figure out where to start.

---

## INVENTORY OF ALL TOOLS/SECTIONS

### 🔴 TOP-LEVEL FILES (21 HTML files at root)
| File | Purpose | Recommendation |
|------|---------|----------------|
| `index.html` | Main homepage | KEEP - Simplify |
| `search.html` | Global search | KEEP - Essential |
| `start-here.html` | Onboarding | KEEP - Important |
| `tour.html` | Platform tour | KEEP - But simplify |
| `dx-dashboard.html` | Progress dashboard | MERGE → tools/dashboard |
| `dx-achievements.html` | Gamification badges | CONSIDER - Nice but not essential |
| `unified-scoreboard.html` | Leaderboard | REMOVE - Clutter |
| `fingerprint-dashboard.html` | Reasoning patterns | REMOVE - Too specialized |
| `reference-library.html` | Reference links | KEEP - Useful |
| `reasondx-learn-hub.html` | Learning hub | MERGE → main index |
| `knowledge-web-navigator.html` | Concept map | CONSIDER - Cool but complex |
| `ecg-integration.html` | ECG tool | KEEP - Move to tools/ |
| `emr-simulator.html` | EMR practice | KEEP - Move to tools/ |
| `biologics-selector.html` | A/I specialty | MOVE → specialty area |
| `allergy-immunology-hub.html` | A/I hub | MOVE → specialty area |
| `nursing-ivig-scig-guide.html` | Nursing guide | MOVE → specialty area |
| `referral-letter-generator.html` | Letter tool | KEEP - Move to tools/ |
| `team-huddle-trainer.html` | Team training | MOVE → CoachDx |
| `mobile-test.html` | Dev testing | REMOVE |
| `ai-tutor-demo.html` | Demo | REMOVE |
| `ReasonDx-Features-Section.html` | Marketing | REMOVE |

### 🟡 ReasonDx/ Directory (11 files + adventure-cases/)
| File | Purpose | Recommendation |
|------|---------|----------------|
| `index.html` | ReasonDx homepage | SIMPLIFY |
| `training.html` | Case training (4.3MB!) | KEEP - Core feature |
| `study-mode.html` | Study mode | MERGE with training |
| `board-prep.html` | Board prep mode | MERGE with training |
| `adventure-hub.html` | Case hub | REDUNDANT - Remove |
| `ReasonDx-adventure-hub.html` | Another hub | REDUNDANT - Remove |
| `deep-dive-hub.html` | Deep dive launcher | SIMPLIFY |
| `deep-dive-player.html` | Deep dive player | KEEP |
| `deep-dive-player-integrated.html` | Another player | REDUNDANT - Remove |
| `analytics-dashboard.html` | Analytics | MERGE → tools/dashboard |
| `predict-labs-library.html` | Lab prediction | KEEP - Nice feature |

### 🟢 mechanism/ Directory (206 files)
Most are actual content modules (KEEP ALL).

Duplicates/Tools to address:
| File | Purpose | Recommendation |
|------|---------|----------------|
| `index.html` | MechanismDx home | SIMPLIFY |
| `analytics-dashboard.html` | Duplicate dashboard | REMOVE |
| `adventure-hub.html` | Duplicate | REMOVE |
| `ReasonDx-adventure-hub.html` | Duplicate | REMOVE |
| `deep-dive-hub.html` | Duplicate | REMOVE |
| `deep-dive-player.html` | Duplicate | REMOVE |
| `deep-dive-player-integrated.html` | Duplicate | REMOVE |
| `study-mode.html` | Duplicate | REMOVE |
| `fingerprint-dashboard.html` | Duplicate | REMOVE |
| `coachdx-dashboard.html` | Misplaced | MOVE → CoachDx |
| `coachdx-dashboard-mddo.html` | Misplaced | MOVE → CoachDx |
| `coachdx-index-backup.html` | Backup | REMOVE |
| `instructor-dashboard.html` | Instructor tool | MOVE → admin/ |
| `abg-analyzer.html` | ABG tool | MOVE → tools/ |
| `academic-resources-library.html` | Resources | MERGE → reference-library |
| `case-library.html` | Case browser | MERGE → ReasonDx |
| `sbar-trainer.html` | Communication trainer | MOVE → tools/ |

### 🔵 Other Directories
| Directory | Files | Recommendation |
|-----------|-------|----------------|
| `CoachDx/` | 7 | KEEP - Simplify entry |
| `ConsentDx/` | 2 | KEEP - Specialized |
| `EPASystem/` | 3 | KEEP - Assessment tracking |
| `ProcedureDx/` | 2 | KEEP - Procedures |
| `SystemsDx/` | 2 | EVALUATE - May be redundant |
| `TeamDx/` | 2 | MERGE → CoachDx |
| `tools/` | 7 | KEEP - New centralized tools |
| `microbiology/` | 40+ | KEEP - Content |
| `pharmacology/` | 16 | KEEP - Content |

---

## RECOMMENDED SIMPLIFIED STRUCTURE

### New Clean Architecture

```
DxSuite/
├── index.html                    # Simple, clean homepage
├── start-here.html               # Onboarding for new users
│
├── learn/                        # ALL LEARNING CONTENT
│   ├── index.html                # Learning hub
│   ├── cases/                    # Clinical cases (from ReasonDx)
│   │   ├── index.html
│   │   └── [case files]
│   ├── mechanisms/               # Pathophysiology (from mechanism/)
│   │   ├── index.html
│   │   └── [module files]
│   ├── microbiology/             # Micro modules
│   ├── pharmacology/             # Pharm modules
│   └── procedures/               # From ProcedureDx
│
├── tools/                        # ALL TOOLS IN ONE PLACE
│   ├── index.html                # Tools hub
│   ├── dashboard.html            # Personal dashboard (consolidated)
│   ├── calculator-hub.html       # Clinical calculators
│   ├── flashcard-studio.html     # Flashcards
│   ├── study-planner.html        # Study planning
│   ├── bookmarks-notes.html      # Notes/bookmarks
│   ├── ddx-builder.html          # Differential builder
│   ├── abg-analyzer.html         # ABG analysis
│   ├── ecg-trainer.html          # ECG practice
│   ├── sbar-trainer.html         # Communication
│   └── emr-simulator.html        # EMR practice
│
├── coach/                        # COACHING/FEEDBACK (from CoachDx)
│   ├── index.html
│   └── [coaching tools]
│
├── assess/                       # ASSESSMENT (from EPASystem)
│   ├── index.html
│   └── [EPA tracking]
│
├── reference/                    # QUICK REFERENCE
│   ├── index.html
│   └── [reference materials]
│
└── admin/                        # INSTRUCTOR TOOLS (hidden from students)
    ├── instructor-dashboard.html
    └── [admin tools]
```

---

## SIMPLIFIED USER EXPERIENCE

### New Homepage Cards (Only 4-5 Main Options)

1. **📚 Learn** → `/learn/`
   - Cases, Mechanisms, Micro, Pharm all in one place
   - "Start with what interests you"

2. **🛠️ Tools** → `/tools/`
   - Dashboard, Calculators, Flashcards, Planners
   - "Track progress & study smarter"

3. **🧠 Practice** → `/learn/cases/`
   - Direct link to case practice
   - "Work through clinical scenarios"

4. **📊 My Progress** → `/tools/dashboard.html`
   - Quick access to personal dashboard
   - "See how you're doing"

### Remove from Main Navigation
- EPA Tracker (move to submenu)
- CoachDx (integrate into tools)
- Fingerprint analysis (remove or hide)
- Multiple dashboards (consolidate to one)
- All duplicate hubs

---

## IMMEDIATE ACTIONS

### Phase 1: Quick Wins (Do Now)
1. ✅ Already done: Created `/tools/` with consolidated tools
2. Delete duplicate files in mechanism/ that are copies of ReasonDx
3. Create simplified main index.html
4. Consolidate dashboards into one

### Phase 2: Restructure (Next)
1. Move content into `/learn/` structure
2. Update all internal links
3. Create simple onboarding flow
4. Test user journey

### Phase 3: Polish
1. Consistent navigation across all pages
2. Mobile optimization
3. Remove all dead links
4. Final cleanup

---

## FILES TO DELETE (Immediate)

```
# Duplicates in mechanism/
mechanism/analytics-dashboard.html
mechanism/adventure-hub.html
mechanism/ReasonDx-adventure-hub.html
mechanism/deep-dive-hub.html
mechanism/deep-dive-player.html
mechanism/deep-dive-player-integrated.html
mechanism/study-mode.html
mechanism/fingerprint-dashboard.html
mechanism/coachdx-index-backup.html

# Duplicates in ReasonDx/
ReasonDx/adventure-hub.html
ReasonDx/ReasonDx-adventure-hub.html
ReasonDx/deep-dive-player-integrated.html

# Root level cleanup
mobile-test.html
ai-tutor-demo.html
ReasonDx-Features-Section.html
unified-scoreboard.html
fingerprint-dashboard.html
```

---

## SUMMARY

**Current:** 50+ entry points, confusing navigation, duplicate tools everywhere
**Goal:** 4-5 clear entry points, one place for tools, one place for content

The key insight: **Learners don't care about our internal organization. They want to:**
1. Learn something
2. Practice cases
3. Track their progress
4. Use helpful tools

Everything else is friction.
