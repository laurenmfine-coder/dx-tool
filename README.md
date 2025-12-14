# Clinical Reasoning Interactive Tool

An interactive web-based educational tool designed to help medical students develop clinical reasoning skills through case-based learning with structured feedback.

## 🎯 Purpose

This tool guides students through the clinical reasoning process using realistic patient scenarios, providing immediate feedback on their differential diagnosis, history-taking, and physical examination choices.

## 📋 Features

### Cases Available

**Abdominal Pain Cases:**
- **Epigastric Pain** - 3 variants (male-58, female-58, female-28)
- **RLQ Pain** - 2 variants (female-28, male-28)
- **RUQ Pain** - 2 variants (female-38, male-50)

**GI Cases:**
- **GI Bleed (BRBPR)** - 3 variants:
  - 46yo with hemorrhoids + family history requiring colonoscopy
  - 24yo with new-onset IBD (ulcerative colitis) with extraintestinal manifestations
  - 72yo with ischemic colitis (extensive vascular disease)
- **Nausea & Vomiting** - 3 variants:
  - 34yo female with early pregnancy/hyperemesis gravidarum
  - 67yo male with adhesive small bowel obstruction
  - 28yo with viral gastroenteritis
- **Acute Diarrhea** - 2 variants:
  - 65yo post-antibiotic C. difficile colitis
  - 32yo with ulcerative colitis flare
- **Constipation with Weight Loss** - 1 variant (55yo with red flags for colorectal cancer)

**Total: 16 case variants across 7 case types**

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

### Differential Diagnosis System

**Dynamic Target Selection**

For each case, students must identify ALL diagnoses that are either "Must Not Miss" or "Most Likely." The tool automatically calculates this target number and tells students exactly how many to select.

Example for a 58yo male with epigastric pain:
- 3 Most Likely diagnoses (GERD, PUD, Gastritis)
- 4 Must Not Miss diagnoses (MI, AAA, Aortic Dissection, Mesenteric Ischemia)
- **Target: Select 7 diagnoses**

Each diagnosis falls into one of four categories:

| Category | Points | Description |
|----------|--------|-------------|
| 🎯 **Most Likely** | +100 | High probability based on presentation |
| ⚠️ **Must Not Miss** | +100 | Life-threatening - always rule out |
| ↓ **Less Likely** | +25 | Reasonable but lower probability |
| ✗ **Unreasonable** | -50 | Does not fit this presentation |

**Scoring Logic:**
- Earn points for selecting Most Likely and Must Not Miss diagnoses
- Small points for Less Likely selections (not penalized)
- Lose points for Unreasonable selections
- Bonus +50 points for catching ALL Must Not Miss diagnoses
- No visual feedback during selection - feedback only after submission
- Must select exactly the target number before submitting

**Expanded Differential Options Include:**
- Classic diagnoses for each presentation
- Dangerous "can't miss" diagnoses (MI, AAA, aortic dissection, ectopic pregnancy, etc.)
- Anatomically related alternatives
- Decoy diagnoses that don't fit the presentation (to test clinical reasoning)

### Tiered Question System

Questions and exam maneuvers are categorized by diagnostic value:

| Tier | Icon | Description |
|------|------|-------------|
| **Must-Ask** | ⭐ | Critical - don't miss these |
| **Should-Ask** | ✓ | Important for diagnosis |
| **Could-Ask** | ○ | Reasonable to ask |
| **Low-Yield** | − | Limited diagnostic value |

### Strategic Thinking Prompts

The tool includes guided reflection prompts at key decision points to encourage hypothesis-driven clinical reasoning:

**Before History Taking (after differential feedback):**
Students are prompted to think about:
- ⚠️ What questions would help **rule OUT dangerous diagnoses**?
- 🎯 What questions would help **rule IN the most likely diagnoses**?
- 💡 What questions help **differentiate between similar conditions**?

**Before Physical Exam (after history refinement):**
Students are prompted to think about:
- ⚠️ What exam findings would indicate **life-threatening conditions**?
- 🎯 What **classic physical exam signs** would support top diagnoses?
- 🔍 Are there **related areas to examine** that might reveal additional pathology?

These prompts reinforce the principle that clinical reasoning should be hypothesis-driven - each question and exam maneuver should be selected with a specific purpose in mind.

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
