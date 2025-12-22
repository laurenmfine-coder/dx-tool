# ReasonDx - Clinical Reasoning Training Platform

## Overview

ReasonDx is a comprehensive clinical reasoning training platform designed for medical education across all levels of training. The platform features 206 clinical case variants with gamification, SBAR communication training, and a **tiered learning architecture** that adapts to learner level.

## 🎓 Tiered Learning Architecture (NEW)

The platform now supports three distinct learner levels with calibrated feedback, scoring, and instructions:

### Learner Levels

| Level | Target | Icon | Focus |
|-------|--------|------|-------|
| **UME** | Medical Students (M1-M4) | 🎓 | History/physical foundations, heavy scaffolding |
| **GME** | Residents (PGY1-5) | 🏥 | Efficiency, management decisions, less hand-holding |
| **CME** | Practicing Physicians | ⚕️ | Guideline updates, edge cases, assumes competence |

### Level-Aware Features

#### 1. Stage Instructions
Each stage displays level-appropriate instructions:

| Stage | UME Example | GME Example |
|-------|-------------|-------------|
| Differential | "Build your differential... Include 'must-not-miss' conditions" | "Generate your differential. Prioritize by probability and risk" |
| History | "Think OLDCARTS and pertinent positives/negatives" | "Focused history. What's essential?" |
| Physical | "Which maneuvers will help differentiate?" | "What findings will change your management?" |
| Revised DDx | "How has your thinking changed?" | "What moved up? What's ruled out?" |
| Workup | "What tests will help confirm your diagnosis?" | "Consider test characteristics, cost, and time" |

#### 2. Scoring Weights

| Component | UME | GME | CME |
|-----------|-----|-----|-----|
| History | 25% | 20% | 15% |
| ROS | 10% | 10% | 5% |
| Physical | 25% | 20% | 15% |
| Must-Not-Miss | 40% | 50% | **65%** |

#### 3. Penalties & Bonuses

| Factor | UME | GME | CME |
|--------|-----|-----|-----|
| Missed Essential Penalty | 80% credit | 60% credit | 50% credit |
| Efficiency Bonus | None | +5 pts | +10 pts |
| Thoroughness Bonus | +5 pts | None | -5 pts (penalty) |

#### 4. Grade Thresholds

| Grade | UME | GME | CME |
|-------|-----|-----|-----|
| Excellent | ≥85% | ≥90% | ≥95% |
| Good | ≥70% | ≥80% | ≥90% |
| Satisfactory | ≥55% | ≥70% | ≥80% |

#### 5. Tier Label Adaptation

Same action, different feedback labels:
- **UME**: "✓ Essential" / "○ Helpful" / "△ Less helpful"
- **GME**: "✓ Expected" / "○ Reasonable" / "△ Inefficient"  
- **CME**: "✓ Indicated" / "○ Consider" / "△ Reconsider"

#### 6. SBAR Calibration

| Feature | UME | GME | CME |
|---------|-----|-----|-----|
| Time Target | 5:00 | 2:00 | 1:30 |
| Show Hints | ✅ Detailed | ❌ | ❌ |
| Model SBAR | Always | Optional | On request |
| Feedback Depth | Detailed | Focused | Minimal |

## 📁 File Structure

```
index.html          # Single-file application (7.2 MB, ~100,800 lines)
├── CSS Styles      # Tailwind-based styling
├── State Management # Central state object with localStorage persistence
├── Case Data       # 206 clinical case variants
├── SBAR Cases      # 7+ SBAR communication scenarios
├── Gamification    # XP, levels, badges, streaks
└── Learner Levels  # UME/GME/CME configuration
```

## 🎮 Features

### Core Training
- **Case-Based Learning**: 206 variants across multiple organ systems
- **Full Clinical Workflow**: Differential → History → Physical → Revised DDx → Workup → Summary
- **SBAR Communication**: Practice presenting to consultants
- **Image Quiz**: Radiology and clinical image interpretation

### Gamification
- XP progression with 10 levels
- 20+ achievement badges
- Case of the Day
- Streaks and challenges
- Team competitions

### Study Hub
- Flashcards by chapter
- Quiz mode
- Framework references
- Bookmarks

## 🚀 Getting Started

### For Users
1. Open `index.html` in a modern browser
2. Select your learner level (UME/GME/CME) from the main menu
3. Choose a training mode and case
4. Progress through clinical stages

### For Developers
The application is a single HTML file with embedded CSS and JavaScript. No build process required.

Key functions:
```javascript
// Learner Level
setLearnerLevel('ume' | 'gme' | 'cme')
getLearnerLevelConfig()
getLevelStageInstructions(stage)
getLevelTierLabel(tier, stage)

// Scoring
calculateLevelAdjustedScore(history, ros, exam, mustNotMiss, metadata)
getLevelGrade(score)
getLevelPerformanceFeedback(score, metadata)

// SBAR
getSbarLevelConfig()
getSbarLevelFeedback(score, maxScore)
getSbarTimeFeedback(seconds)
```

## 📊 Data Structure

### Case Format
```javascript
{
  id: 'case-id',
  title: 'Case Title',
  category: 'Cardiovascular',
  difficulty: 'foundational' | 'intermediate' | 'advanced',
  urgency: 'routine' | 'urgent' | 'emergent',
  variants: {
    'variant-key': {
      name: 'Patient Name',
      age: 45,
      chiefComplaint: '...',
      vitalSigns: { BP, HR, RR, Temp, SpO2 },
      allDiagnoses: [...],
      historyQuestions: [...],  // with tier: 'essential' | 'helpful' | 'neutral'
      physicalExam: [...],      // with tier
      workup: { labs, imaging, treatments, consults, disposition }
    }
  }
}
```

### Learner Level Config
```javascript
{
  id: 'ume',
  name: 'Medical Student',
  shortName: 'UME',
  icon: '🎓',
  color: '#6366f1',
  emphasis: { history: 'high', physical: 'high', ... },
  feedbackStyle: 'teaching',
  scaffolding: 'high',
  expectCompetence: false
}
```

## 🔧 Configuration

### Enable/Disable Features
```javascript
const REQUIRE_UNLOCK_CODES = false;  // Case unlock codes
playerData.darkMode = true;          // Dark mode
```

### LocalStorage Keys
- `reasondx_learner_level` - Selected level (ume/gme/cme)
- `clinicalReasoningPlayerData` - XP, badges, stats
- `reasondx_case_progress` - In-progress case state
- `osceOnboardingComplete` - Tutorial completion

## 📅 Roadmap

### Pending Content (Need from Lauren)
- [ ] Bates' Guide integration (critical)
- [ ] Medical images
- [ ] Clinical reasoning chapters

### Future Enhancements
- [ ] More cases (target: 300+)
- [ ] Audio heart/lung sounds
- [ ] Instructor dashboard expansion
- [ ] API integration for LMS

## 📝 Version History

### December 2025
- Added tiered learning architecture (UME/GME/CME)
- Level-aware scoring weights and grade thresholds
- Level-specific stage instructions for all 6 stages
- Level-aware tier labels for history, physical, labs, imaging
- SBAR calibration by level (hints, timing, feedback depth)
- Level indicator on case select and summary screens
- Bug fixes: JavaScript syntax, case validation

### Earlier
- 206 clinical case variants
- SBAR communication trainer
- Gamification system
- Study Hub integration
- Image quiz module

## 📄 License

Proprietary - Nova Southeastern University Dr. Kiran C. Patel College of Allopathic Medicine

## 👩‍⚕️ Contact

Lauren - Assistant Dean of Clinical Skills Education, NSU MD
