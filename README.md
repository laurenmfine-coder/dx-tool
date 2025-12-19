# ReasonDx

**Clinical Reasoning Trainer for Medical Education**

A comprehensive, interactive web application designed to help medical students and residents develop clinical reasoning skills through case-based learning, diagnostic practice, and communication training.

🌐 **Live Site:** [reasondx.com](https://reasondx.com)

---

## Features

### 🏥 Case-Based Learning

**Full Cases** — Work through detailed patient presentations with:
- Chief complaint and history of present illness
- Past medical/surgical history, medications, allergies
- Physical examination findings
- Laboratory and imaging results
- Differential diagnosis building
- Management decision-making

**Quick Match** — Rapid-fire diagnostic practice matching clinical vignettes to diagnoses

**Weekly Challenge** — Curated cases for regular practice

### 🩺 Clinical Skills Training

**SBAR Practice (Consult Trainer)** — Comprehensive communication training with:
- 7 diverse clinical scenarios across settings (ER, floor, ICU, clinic)
- Rich patient data including full HPI, PMH, exam, labs, and imaging
- Interactive selection of pertinent positives and negatives
- Free-text SBAR construction
- Rubric-based scoring and feedback
- Model SBAR examples for comparison

| Case | Setting | Consultant |
|------|---------|------------|
| Acute Chest Pain | Medical Floor | Cardiology |
| Post-op Fever | Surgical Floor | Infectious Disease |
| ICU Decompensation | MICU | Pulm/Critical Care |
| Clinic to ER Transfer | Primary Care | Emergency Dept |
| Chronic Migraine | Primary Care | Neurology |
| Uncontrolled Asthma | Primary Care | Pulmonology |
| Clinic Emergency | Urgent Care | EMS/911 |

**Enhanced Imaging Quiz** — Visual diagnosis practice with:
- Real medical images (X-rays, CT scans)
- Multi-stage diagnostic reasoning
- Pattern recognition training

### 📚 Reference Tools

- **Differential Diagnosis Cards** — Organized by chief complaint
- **Clinical Pearls** — High-yield facts and mnemonics
- **Command Palette Search** — Quick access to any feature (press `/`)

### 📊 Progress Tracking

- Performance analytics across all modules
- Spaced repetition for weak areas
- Session statistics and streaks

---

## SBAR Rubric

The SBAR Practice module uses a 100-point rubric:

| Section | Points | Key Criteria |
|---------|--------|--------------|
| **Situation** | 25 | Identity, patient ID, acute concern, urgency level, reason for call |
| **Background** | 30 | Pertinent positives, pertinent negatives, exam findings, labs/imaging, conciseness |
| **Assessment** | 25 | Clinical impression, supported by background, clinical reasoning |
| **Recommendation** | 20 | Specific request, follows from assessment, what's been done |

---

## Technology

- Pure HTML/CSS/JavaScript (no build step required)
- Tailwind CSS for styling
- Local storage for progress persistence
- Mobile-responsive design
- Works offline after initial load

---

## Deployment

The application is a single `index.html` file that can be:
- Hosted on GitHub Pages
- Served from any static file host
- Run locally by opening in a browser

### GitHub Pages Setup

1. Push `index.html` to your repository
2. Go to Settings → Pages
3. Select branch and save
4. Configure custom domain (optional)

### Custom Domain (GoDaddy)

DNS records for apex domain:
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   yourusername.github.io
```

---

## Development

To modify the application:

1. Edit `clinical-reasoning.html` (source file)
2. Test locally in browser
3. Copy to `index.html` for deployment
4. Push to GitHub

The application is self-contained with all JavaScript inline for simplicity.

---

## License

Educational use. Created for medical education purposes.

---

## Acknowledgments

Built to support medical education and improve patient safety through better clinical reasoning and communication skills.
