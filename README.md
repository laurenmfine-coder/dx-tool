# Clinical Reasoning Interactive Tool

An interactive web-based educational tool designed to help medical students develop clinical reasoning skills through case-based learning with structured feedback.

## 🎯 Purpose

This tool guides students through the clinical reasoning process using realistic patient scenarios, providing immediate feedback on their differential diagnosis, history-taking, and physical examination choices.

## 📋 Features

### Cases Available
- **Epigastric Pain** - 3 variants (male-58, female-58, female-28)
- **RLQ Pain** - 2 variants (female-28, male-28)
- **RUQ Pain** - 2 variants (female-38, male-50)

Each variant has unique patient demographics, risk factors, and clinical presentations to highlight different diagnostic considerations.

### Learning Modes

| Mode | Description |
|------|-------------|
| **Practice Mode** | Self-paced learning without time pressure |
| **Game Mode** | Timed challenges with XP, levels, and badges |
| **Enhanced Features** | Toggle between 4-stage and 8-stage workflows |

### Clinical Reasoning Stages

**4-Stage Workflow:**
1. Initial Differential Diagnosis
2. History Taking
3. Physical Examination
4. Final Diagnosis

**8-Stage Workflow (Enhanced):**
1. Initial Differential Diagnosis → Feedback
2. History Taking → Patient Responses
3. Differential Refinement #1
4. Physical Examination → Findings
5. Differential Refinement #2
6. Final Diagnosis & Teaching Points

### Tiered Question System

Questions and exam maneuvers are categorized by diagnostic value:

| Tier | Icon | Description |
|------|------|-------------|
| **Must-Ask** | ⭐ | Critical - don't miss these |
| **Should-Ask** | ✓ | Important for diagnosis |
| **Could-Ask** | ○ | Reasonable to ask |
| **Low-Yield** | − | Limited diagnostic value |

### Differential Diagnosis Categories

Each diagnosis is categorized with rationale:

| Category | Icon | Description |
|----------|------|-------------|
| **Most Likely** | 🎯 | High probability based on presentation |
| **Must Not Miss** | ⚠️ | Life-threatening - always rule out |
| **Less Likely** | ↓ | Lower probability but still consider |

### Comprehensive Review of Systems

All cases include a 13-system ROS:
- Constitutional
- Eyes
- ENT
- Cardiovascular
- Respiratory
- Gastrointestinal
- Genitourinary
- Musculoskeletal
- Skin
- Neurological
- Psychiatric
- Endocrine
- Hematologic

### Feedback System

**Differential Diagnosis Feedback:**
- Score cards showing Must Not Miss % and Most Likely % coverage
- Detailed rationale for each diagnosis
- Highlights critical diagnoses that were missed

**History & Physical Feedback:**
- Coverage percentages for Must-Ask and Should-Ask items
- Lists exactly which questions/maneuvers were selected vs. missed
- Explains why certain questions are critical

### Gamification (Game Mode)

- **XP System** - Earn points for good clinical decisions
- **Levels** - Progress from Medical Student to Attending
- **Badges** - Unlock achievements for milestones
- **Streaks** - Bonus points for consecutive good choices
- **Timer** - 5-minute stages to simulate real clinical pressure

## 🚀 Deployment

### GitHub Pages

1. Go to your GitHub repository (e.g., `dx-tool`)
2. Click **Add file** → **Upload files**
3. Upload `clinical-reasoning.html`
4. Commit to main branch
5. Enable GitHub Pages in Settings → Pages
6. Access at: `https://[username].github.io/dx-tool/clinical-reasoning.html`

### Substack Embedding

```html
<iframe 
  src="https://[username].github.io/dx-tool/clinical-reasoning.html" 
  width="100%" 
  height="900px" 
  style="border: 2px solid #e0e0e0; border-radius: 12px;">
</iframe>
```

## 📱 Compatibility

- Works on desktop, tablet, and mobile browsers
- No installation required
- Single HTML file with all dependencies embedded
- No server or database needed

## 🎓 Educational Design

### Learning Objectives

Students will be able to:
1. Generate appropriate differential diagnoses based on chief complaint, age, and gender
2. Identify "must-not-miss" diagnoses for common presentations
3. Select hypothesis-driven history questions
4. Choose targeted physical exam maneuvers
5. Refine differential diagnosis based on new information
6. Recognize classic clinical presentations

### Pedagogical Approach

- **Case-based learning** - Real-world scenarios
- **Immediate feedback** - Learn from mistakes in real-time
- **Scaffolded complexity** - Multiple patient variants per case
- **Active recall** - Students must select, not just recognize
- **Spaced repetition** - Game mode encourages repeated practice

## 📝 Case Details

### Epigastric Pain

| Variant | Key Features | Primary Diagnosis |
|---------|--------------|-------------------|
| Male, 58 | NSAID use, alcohol, dark stools | NSAID-induced Gastritis/PUD |
| Female, 58 | Post-menopausal, HTN, atypical MI risk | Gastritis with cardiac workup |
| Female, 28 | Delayed LMP, morning nausea | Early pregnancy with hyperemesis |

### RLQ Pain

| Variant | Key Features | Primary Diagnosis |
|---------|--------------|-------------------|
| Female, 28 | Pain migration, fever, GYN considerations | Acute Appendicitis |
| Male, 28 | Classic appendicitis, testicular exam needed | Acute Appendicitis |

### RUQ Pain

| Variant | Key Features | Primary Diagnosis |
|---------|--------------|-------------------|
| Female, 38 | Fatty meal trigger, Murphy's sign | Acute Cholecystitis |
| Male, 50 | Jaundice, Charcot's triad concern | Cholecystitis with possible Cholangitis |

## 🔧 Customization

The tool is a single HTML file that can be customized:

- **Add new cases** - Follow the existing case structure in the `CASES` array
- **Modify questions** - Edit `historyQuestions` and `physicalExamManeuvers` arrays
- **Adjust tiers** - Change question `quality` values
- **Update feedback** - Modify rationale text in differential objects

## 📄 License

Created for educational purposes at Nova Southeastern University MD Program.

## 👩‍⚕️ Author

Lauren Fine, MD
- Assistant Dean of Clinical Skills Education, NSU MD Program
- Faculty, Harvard Macy Institute

## 📧 Contact

For questions about using this tool in your curriculum, please reach out through NSU channels.

---

*Last updated: December 2024*
