# EXACT FOLDER STRUCTURE FOR YOUR dx-tool REPO

## Your Current Structure
```
dx-tool/
├── ReasonDx-References/          ← Existing folder
├── CNAME
├── README.md
├── index.html                    ← Main entry point
├── patient-trainer.html
├── reasondx-case-builder.html
├── reasondx-*.js                 ← Your JS files
├── gout-case-enhancements.js
└── ... other files
```

## NEW Structure (Add These Folders)
```
dx-tool/
├── ReasonDx-References/          ← Keep as-is
│
├── mechanismx/                   ← NEW FOLDER #1
│   ├── index.html                ← MechanismX entry page
│   ├── components/
│   │   ├── mechanism-map.js
│   │   ├── reasoning-trainer.js
│   │   └── dashboard.js
│   ├── modules/
│   │   ├── heart-failure.js
│   │   ├── aki.js
│   │   └── pneumonia.js
│   ├── data/
│   │   └── mechanism-fingerprints.js
│   └── css/
│       └── mechanismx.css
│
├── usmle-navigator/              ← NEW FOLDER #2
│   ├── index.html                ← Blueprint Navigator entry page
│   ├── components/
│   │   ├── navigator.js
│   │   ├── domain-view.js
│   │   └── topic-detail.js
│   ├── data/
│   │   ├── blueprint-structure.js
│   │   └── interconnection-web.js
│   └── css/
│       └── navigator.css
│
├── integration/                  ← NEW FOLDER #3
│   ├── learning-hub.html         ← Unified entry point
│   ├── gap-detection.js
│   ├── progress-sync.js
│   └── recommendations.js
│
├── index.html                    ← MODIFY: Add links to new systems
├── ... your existing files
```

## Step-by-Step Instructions

### Step 1: Create the folders in GitHub

**Option A: Via GitHub Web Interface**
1. Go to your repo: https://github.com/laurenmfine-coder/dx-tool
2. Click "Add file" → "Create new file"
3. Type: `mechanismx/index.html` (this creates the folder AND file)
4. Repeat for `usmle-navigator/index.html` and `integration/learning-hub.html`

**Option B: Via Command Line**
```bash
cd dx-tool
mkdir -p mechanismx/{components,modules,data,css}
mkdir -p usmle-navigator/{components,data,css}
mkdir -p integration
```

### Step 2: Add the files (I'll create these ready-to-use)

### Step 3: Update your main index.html to link to the new systems

---

## Important Notes for YOUR Setup

Since your repo uses:
- **Plain HTML/JS** (not React)
- **GitHub Pages** for hosting
- **Flat file structure**

I'll convert the React components to **vanilla JavaScript** that works with your setup!

The files will be:
- Self-contained HTML pages
- Vanilla JS with no build step required
- CSS included
- Works immediately on GitHub Pages

---

Let me now create the actual files converted for your setup...
