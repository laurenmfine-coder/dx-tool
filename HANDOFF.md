# DxSuite Platform - Comprehensive Handoff Document
## January 24, 2026

---

## Platform Overview

DxSuite is a comprehensive clinical reasoning education platform designed for medical students and residents. It integrates multiple learning modalities including interactive case adventures, mechanism-based pathophysiology modules, deep dive assessments, and clinical reasoning trainers.

### Current Status: 90% Complete (89/99 topics fully covered)

---

## Directory Structure

```
DxSuite/
├── index.html                    # Main landing page
├── search.html                   # Unified search hub
├── dx-design-system.css          # Global styles
├── data/
│   └── topic-map.json            # Central topic registry (99 topics)
├── ReasonDx/                     # Clinical reasoning module
│   ├── index.html                # ReasonDx landing
│   ├── adventure-hub.html        # Adventure case launcher
│   ├── training.html             # Training dashboard
│   ├── deep-dive-player-integrated.html  # Deep dive player
│   ├── adventure-cases/          # 32 interactive adventures
│   └── data/
│       └── deep-dives/           # 106 deep dive JSON files
├── mechanism/                    # MechanismDx module
│   ├── index.html                # Mechanism hub
│   └── [174 mechanism modules]   # Individual pathophysiology pages
├── CoachDx/                      # AI coaching module (31 libraries)
├── ConsentDx/                    # Informed consent training
├── ProcedureDx/                  # Procedural skills
├── TeamDx/                       # Team-based learning
├── SystemsDx/                    # Systems-based practice
├── clinical-reasoning-trainer/   # CRT module (226 cases, 23 categories)
└── assets/                       # Images and media
```

---

## Content Inventory

| Content Type | Count | Location |
|--------------|-------|----------|
| Interactive Adventures | 32 | /ReasonDx/adventure-cases/ |
| Deep Dive Modules | 106 | /ReasonDx/data/deep-dives/ |
| MechanismDx Modules | 174 | /mechanism/ |
| CRT Cases | 226 | /clinical-reasoning-trainer/ |
| CoachDx Libraries | 31 | /CoachDx/ |
| Indexed Topics | 99 | /data/topic-map.json |

---

## Topics by Category

### Fully Complete (89 topics)
All have: Mechanism + Deep Dive + Adventure/CRT Cases

**Cardiology:** ACS, Chest Pain, Heart Failure, AFib, Cardiac Tamponade, Syncope, SVT/WPW, ACLS Rhythms

**Critical Care:** Sepsis, Shock, Status Epilepticus, Acid-Base

**Pulmonary:** PE, Pneumonia, Asthma, COPD

**Neurology:** Stroke, Meningitis, Seizures, GBS, SAH, NMS, Serotonin Syndrome, TBI/ICP, Spinal Cord Compression

**Endocrine:** DKA, HHS, Thyroid Storm, Adrenal Crisis, Hypoglycemia

**GI:** GI Bleed, Pancreatitis, Cholecystitis, Acute Abdomen

**Renal:** AKI, Rhabdomyolysis

**Heme/Onc:** Tumor Lysis Syndrome, Hypercalcemia of Malignancy

**Infectious Disease:** Sepsis, Meningitis, Pyelonephritis, C. diff, Endocarditis

**OB/GYN:** Preeclampsia, Ectopic, PPH, Abruption, Torsion, PID

**Pediatrics:** Bronchiolitis, Croup, Kawasaki, Febrile Seizures, Intussusception, Pyloric Stenosis

**Psychiatry:** Depression, Psychosis, Bipolar, Delirium

**Toxicology:** Toxidromes, APAP Overdose, Opioid Overdose, Alcohol Withdrawal, Serotonin Syndrome

**Allergy/Immunology:** Anaphylaxis, HAE, FPIES, + 11 A/I specialty cases

**Other:** Derm emergencies, Eye emergencies, ENT emergencies, Rheum emergencies

### Partial (10 topics - need Adventures only)
- ARDS
- Guillain-Barré Syndrome  
- Encephalitis
- Infective Endocarditis
- Myasthenic Crisis
- Myxedema Coma
- Hypercalcemia of Malignancy
- Osteomyelitis
- Acute Sinusitis
- FPIES

---

## Key Files to Know

### Navigation & Search
- `index.html` - Main entry point
- `search.html` - Full-text search across all content
- `data/topic-map.json` - Central registry of all topics

### Content Players
- `ReasonDx/adventure-hub.html` - Launches interactive cases
- `ReasonDx/deep-dive-player-integrated.html` - Plays deep dive assessments
- `mechanism/index.html` - MechanismDx hub

### Data Files
- `ReasonDx/data/deep-dives/*.json` - Deep dive content
- `data/topic-map.json` - Topic metadata and cross-references

---

## Development Patterns

### Adding a New Mechanism Module
1. Create HTML file in `/mechanism/` using existing template
2. Update `data/topic-map.json` with mechanism reference
3. Add link to `mechanism/index.html` if needed

### Adding a New Deep Dive
1. Create JSON file in `/ReasonDx/data/deep-dives/`
2. Follow existing schema (see any existing file)
3. Update `data/topic-map.json` with deepDive reference

### Adding a New Adventure
1. Create HTML file in `/ReasonDx/adventure-cases/`
2. Follow dual-pathway adventure template
3. Update `data/topic-map.json` with adventure reference
4. Add to `ReasonDx/adventure-hub.html`

---

## Remaining Work Priority

### High Priority (Complete the 10 partial topics)
Create Interactive Adventures for:
1. **ARDS** - Critical care case with ventilator management
2. **Myasthenic Crisis** - Neuro emergency with respiratory focus
3. **Endocarditis** - Fever workup with embolic complications
4. **Encephalitis** - HSV case with temporal lobe focus
5. **GBS** - Progressive weakness with respiratory monitoring

### Medium Priority
6. Myxedema Coma - Endocrine emergency
7. Hypercalcemia - Oncologic emergency
8. Osteomyelitis - Diabetic foot case
9. Sinusitis - Complications focus
10. FPIES - Pediatric food allergy

### Enhancement Opportunities
- Add pediatric toggles to existing adventures
- Create learning pathways by specialty
- Add spaced repetition system
- Implement progress tracking dashboard

---

## Technical Notes

### Deployment
- Static site - can deploy to GitHub Pages, Vercel, Netlify
- No backend required
- All data stored in JSON files

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile

### External Dependencies
- None required for core functionality
- Optional: CDN for icons (Lucide)

---

## Generator Scripts (in /home/claude/)

These Node.js scripts were used to batch-generate content:
- `generate-mechanisms-*.js` - Mechanism module generators
- `generate-deepdives-*.js` - Deep dive generators
- `audit-platform.js` - Platform audit tool

To run audit: `node audit-platform.js`

---

## Contact & Resources

- Platform designed for NSU Dr. Kiran C. Patel College of Allopathic Medicine
- IRB study launching January 2026 with ~240 students
- Related patents: RPFS, CRDA (see patent documentation)

---

*Document generated: January 24, 2026*
