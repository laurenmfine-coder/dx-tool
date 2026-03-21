# ReasonDx Design System — Rules & Standards

> **The single source of truth for all visual decisions on the ReasonDx platform.**  
> Every page, every component, every future build follows these rules.  
> Last updated: March 2026

---

## 1. The Core Philosophy

ReasonDx is a *clinical reasoning* platform — the design should feel like the best medical textbook meets a modern software product. It is:

- **Authoritative without being cold** — DM Serif Display gives gravitas; DM Sans keeps it approachable
- **Focused without being sparse** — high information density, but controlled hierarchy
- **Rewarding without being gamey** — XP and progress feel earned, not cheap

**One rule above all:** Every page must feel like it belongs to the same product. If a new page looks noticeably different from `genetics-module.html` or `genetics-demo-case.html`, it needs to be revised.

---

## 2. Always Import This First

Every HTML page must have this in the `<head>` before any other styles:

```html
<link rel="stylesheet" href="/css/rdx-design-system.css">
```

And this before `</body>`:

```html
<script src="/js/nav-global.js"></script>
```

**Never** redefine `:root` variables or nav styles inline. Override only when absolutely necessary, and document why.

---

## 3. Typography Rules

### Fonts — Two fonts only, forever

| Font | Use | Never use for |
|------|-----|---------------|
| **DM Serif Display** | Page titles, case titles, hero headlines, score numbers, stat values | Body text, labels, buttons, UI chrome |
| **DM Sans** | Everything else — body, labels, buttons, nav, cards | Decorative headlines |
| **JetBrains Mono** | Code, clinical data (lab values, vitals), unlock codes | General text |

### Classes to use

```html
<!-- Page/case titles -->
<h1 class="rdx-display">The Child Who Keeps Falling</h1>

<!-- Section headings -->
<h2 class="rdx-h2">Patient Presentation</h2>

<!-- Labels above sections -->
<div class="rdx-label">Genetics Module</div>

<!-- Supporting body text -->
<p class="rdx-body">The patient presents with...</p>

<!-- Captions / metadata -->
<span class="rdx-caption">5 questions · 120 XP</span>
```

### ❌ Never do this
```html
<!-- Never hardcode font families inline -->
<h1 style="font-family: 'Playfair Display'">...</h1>

<!-- Never use Inter, Roboto, Arial, or system fonts -->
<!-- Never use more than these 3 font families -->
```

---

## 4. Color Rules

### The palette — use CSS variables only

```css
/* PRIMARY BRAND */
--rdx-ocean-deep:  #0d2b3e  /* Nav chrome ONLY */
--rdx-ocean-dark:  #1a5276  /* Section headers, dark surfaces */
--rdx-ocean:       #2874A6  /* Primary actions, links, focus */
--rdx-ocean-mid:   #85c1e9  /* Accents on dark backgrounds */
--rdx-ocean-light: #d6eaf8  /* Tints, hover states, selected */

/* ACCENT — rewards, CTAs, highlights */
--rdx-accent:      #e67e22
--rdx-accent-light:#fef0e0

/* SEMANTIC — clinical feedback */
--rdx-success / --rdx-success-bg   /* Correct answers, completed */
--rdx-danger  / --rdx-danger-bg    /* Wrong answers, critical flags */
--rdx-warning / --rdx-warning-bg   /* Caution, intermediate */
--rdx-info    / --rdx-info-bg      /* Neutral clinical notes */
```

### Color rules
- **Nav background** = `--rdx-ocean-deep` always. Never white, never gray.
- **Page background** = `--rdx-bg` (#f0f4f8). Never pure white.
- **Cards** = `--rdx-surface` (white) on the `--rdx-bg` background.
- **Correct answer feedback** = `--rdx-success-bg` + `--rdx-success` text. Never green hex values directly.
- **Wrong answer feedback** = `--rdx-danger-bg` + `--rdx-danger` text.
- **XP / reward moments** = `--rdx-accent` (orange). This is the only place orange appears.

### ❌ Never do this
```css
/* Never hardcode brand colors */
color: #2874A6;        /* use var(--rdx-ocean) */
background: #1a5276;   /* use var(--rdx-ocean-dark) */
color: green;          /* use var(--rdx-success) */

/* Never introduce new brand colors */
/* Never use purple gradients — this is not a generic AI product */
```

---

## 5. Component Rules

### Cards
```html
<!-- Standard card -->
<div class="rdx-card">
  <div class="rdx-card-body">content</div>
</div>

<!-- Card with dark header -->
<div class="rdx-card rdx-card-dark-header">
  <div>Header content (auto-styled dark)</div>
  <div class="rdx-card-body">Body content</div>
</div>

<!-- Featured/highlighted card (full dark gradient) -->
<div class="rdx-card rdx-card-featured rdx-card-body">content</div>
```

### Buttons — use classes, never style inline
```html
<button class="rdx-btn rdx-btn-primary">Primary Action</button>
<button class="rdx-btn rdx-btn-accent">Start Case ▶</button>
<button class="rdx-btn rdx-btn-ghost">Secondary</button>
<button class="rdx-btn rdx-btn-sm rdx-btn-primary">Small Button</button>
<button class="rdx-btn rdx-btn-lg rdx-btn-accent">Large CTA</button>
```

### Badges
```html
<span class="rdx-badge rdx-badge-ocean">🧬 Genetics</span>
<span class="rdx-badge rdx-badge-success">✓ Completed</span>
<span class="rdx-badge rdx-badge-danger">⚡ Advanced</span>
<span class="rdx-xp-pill">+120 XP</span>
<span class="rdx-diff-intro">Introductory</span>
<span class="rdx-diff-inter">Intermediate</span>
<span class="rdx-diff-advanced">Advanced</span>
```

### Section labels
```html
<!-- Always use this pattern above sections, not custom h tags -->
<div class="rdx-label">Clinical Reasoning</div>
<h2 class="rdx-h2">What comes next?</h2>
```

---

## 6. Page Structure — Every Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title — ReasonDx</title>

  <!-- ALWAYS FIRST — design system -->
  <link rel="stylesheet" href="/css/rdx-design-system.css">

  <!-- Page-specific styles AFTER, using CSS variables -->
  <style>
    /* Only page-specific layout here */
    /* Never redefine :root variables */
    /* Never redeclare fonts or brand colors */
  </style>
</head>
<body>

  <!-- Main content — body already has padding-top for nav -->
  <div class="rdx-container rdx-section">
    <!-- content -->
  </div>

  <!-- ALWAYS LAST — injects nav -->
  <script src="/js/nav-global.js"></script>
</body>
</html>
```

---

## 7. Hero Sections

Use the `.rdx-hero` class for all module/feature landing pages:

```html
<div class="rdx-hero">
  <div class="rdx-hero-inner">
    <div class="rdx-hero-tag">🧬 Module · Genetics</div>
    <h1 class="rdx-hero-title">Think Genetically.<br><em>Before</em> the Geneticist Does.</h1>
    <p class="rdx-hero-sub">Supporting description here.</p>
    <!-- CTAs -->
    <div class="rdx-flex rdx-gap-3">
      <button class="rdx-btn rdx-btn-accent rdx-btn-lg">Start Case</button>
      <button class="rdx-btn rdx-btn-ghost-white">View Path</button>
    </div>
  </div>
  <!-- Wave divider -->
  <svg class="rdx-hero-wave" viewBox="0 0 1440 48" preserveAspectRatio="none">
    <path d="M0,32 C360,56 1080,0 1440,28 L1440,48 L0,48 Z" fill="#f0f4f8"/>
  </svg>
</div>
```

---

## 8. Clinical Case Pages — Required Structure

Every case/quiz page must have these five elements:

1. **Patient Snapshot** — grid of `.rdx-patient-stat` items
2. **Vignette** — `.rdx-vignette` with `.highlight` and `.flag` spans
3. **Progress bar** — `.rdx-progress-track` + `.rdx-progress-fill`
4. **Question + answer buttons** — `.rdx-answer-btn` with `.rdx-choice-letter`
5. **Feedback box** — `.rdx-feedback.correct` or `.rdx-feedback.wrong` with `.rdx-pearls`

Answer states are always applied as classes, never inline styles:
```javascript
btn.classList.add('correct');  // or 'wrong' or 'dimmed'
feedback.classList.add('show', 'correct');  // or 'wrong'
```

---

## 9. Spacing — 8pt Grid

Always use spacing variables. Never hardcode pixel values for margins/padding:

```css
/* Correct */
padding: var(--rdx-space-6);    /* 24px */
margin-bottom: var(--rdx-space-4);  /* 16px */
gap: var(--rdx-space-3);        /* 12px */

/* Wrong */
padding: 24px;
margin-bottom: 16px;
```

---

## 10. Adding New Pages — Checklist

Before committing any new page:

- [ ] Imports `/css/rdx-design-system.css` as the first stylesheet
- [ ] Loads `/js/nav-global.js` before `</body>`
- [ ] Uses `--rdx-*` CSS variables for all colors
- [ ] Uses `DM Serif Display` only for display/title text
- [ ] Uses `DM Sans` for all body/UI text
- [ ] Nav background is `--rdx-ocean-deep` (not white)
- [ ] Page background is `--rdx-bg` (not white)
- [ ] All buttons use `.rdx-btn-*` classes
- [ ] All badges use `.rdx-badge-*` classes
- [ ] Mobile breakpoint tested at 375px

---

## 11. Adding to the Nav

Edit `/js/nav-global.js` to add new sections. Use the dropdown pattern for grouped features:

```javascript
// Add a new top-level link
<a class="rdx-nav-link" href="/new-page.html">New Section</a>

// Add a dropdown for grouped features
<div class="rdx-nav-dropdown">
  <button class="rdx-nav-dropdown-btn">Section Name</button>
  <div class="rdx-dropdown-menu">
    <a class="rdx-dropdown-item" href="/feature.html">
      <span class="rdx-dropdown-item-title">🔬 Feature Name</span>
      <span class="rdx-dropdown-item-sub">Short description</span>
    </a>
  </div>
</div>
```

---

## 12. What to Do With Old Pages

The platform has 435 HTML files. Many use inline styles and old font/color conventions. The migration path:

1. **New pages** — build with design system from scratch (this doc)
2. **High-traffic pages** — migrate by adding design system import + replacing inline colors with variables
3. **Legacy pages** — add design system import at minimum for nav consistency
4. **Run** `rdx-apply-design.ps1` locally to inject the stylesheet link across all files in one shot

Priority migration order:
1. `index.html` ← most visible
2. `casedx.html`, `virtual-emr.html`
3. `CoachDx/index.html`, `CoachDx/mentor-chat.html`
4. Analytics suite (faculty-dashboard, cohort-analytics, etc.)
5. Mechanism pages
6. Topics pages (lowest priority — high volume, lower visibility)

---

*These rules exist so the platform looks like one product, not 50 separate projects.*  
*When in doubt: match the genetics module. That's the reference implementation.*
