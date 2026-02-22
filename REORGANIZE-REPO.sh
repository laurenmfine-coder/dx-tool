#!/bin/bash
#
# ReasonDx Repository Reorganization Script
# Run this in your local GitHub repo root
#
# This script moves ~2,900 old/legacy files to _legacy/ folder
# so they're preserved but NOT deployed by GitHub Pages
#

echo "=============================================="
echo "   ReasonDx Repository Reorganization"
echo "=============================================="
echo ""

# Safety check
if [ ! -f "index.html" ]; then
    echo "ERROR: Run this script from your repo root (where index.html is)"
    exit 1
fi

# Create _legacy structure
echo "Creating _legacy folder structure..."
mkdir -p _legacy/cases/adventure
mkdir -p _legacy/cases/expanded
mkdir -p _legacy/mechanism
mkdir -p _legacy/ConsentDx
mkdir -p _legacy/EPASystem
mkdir -p _legacy/old-ui
mkdir -p _legacy/features-on-hold
mkdir -p _legacy/scripts
mkdir -p _legacy/admin

# ============================================
# MOVE OLD UI VERSIONS
# ============================================
echo ""
echo "Moving old UI versions..."
mv index-backup.html _legacy/old-ui/ 2>/dev/null && echo "  ✓ index-backup.html"
mv index-with-tour.html _legacy/old-ui/ 2>/dev/null && echo "  ✓ index-with-tour.html"
mv index-old.html _legacy/old-ui/ 2>/dev/null && echo "  ✓ index-old.html"
mv training-new.html _legacy/old-ui/ 2>/dev/null && echo "  ✓ training-new.html"
mv training-slim.html _legacy/old-ui/ 2>/dev/null && echo "  ✓ training-slim.html"
mv training-backup.html _legacy/old-ui/ 2>/dev/null && echo "  ✓ training-backup.html"

# ============================================
# MOVE ADVENTURE CASES (ROOT LEVEL)
# ============================================
echo ""
echo "Moving root-level adventure cases..."
for f in *-adventure.html; do
    [ -f "$f" ] && mv "$f" _legacy/cases/adventure/ && echo "  ✓ $f"
done
mv adventure-hub.html _legacy/cases/adventure/ 2>/dev/null && echo "  ✓ adventure-hub.html"

# ============================================
# MOVE FEATURES NOT IN LAUNCH
# ============================================
echo ""
echo "Moving features not in launch..."
mv board-prep.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ board-prep.html"
mv board-prep-coverage.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ board-prep-coverage.html"
mv deep-dive-hub.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ deep-dive-hub.html"
mv deep-dive-player.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ deep-dive-player.html"
mv study-mode.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ study-mode.html"
mv raddx-hub.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ raddx-hub.html"
mv learn-hub.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ learn-hub.html"
mv module-catalog.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ module-catalog.html"
mv fingerprint-dashboard.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ fingerprint-dashboard.html"
mv analytics-dashboard.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ analytics-dashboard.html"
mv reasonlab.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ reasonlab.html"
mv reasonlab-submit.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ reasonlab-submit.html"
mv reasonlab-pathway-viewer.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ reasonlab-pathway-viewer.html"
mv patent-innovation-showcase.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ patent-innovation-showcase.html"
mv unified-scoreboard.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ unified-scoreboard.html"
mv quiz-engine.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ quiz-engine.html"
mv predict-labs-library.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ predict-labs-library.html"
mv quickref-hub.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ quickref-hub.html"
mv tour.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ tour.html"
mv start-here.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ start-here.html"
mv search.html _legacy/features-on-hold/ 2>/dev/null && echo "  ✓ search.html"

# ============================================
# MOVE ENTIRE FOLDERS
# ============================================
echo ""
echo "Moving entire folders to _legacy..."

# Mechanism (MechanismDx - should be embedded only)
if [ -d "mechanism" ]; then
    mv mechanism _legacy/ && echo "  ✓ mechanism/ (777 files)"
fi

# ConsentDx (IRB on hold)
if [ -d "ConsentDx" ]; then
    mv ConsentDx _legacy/ && echo "  ✓ ConsentDx/"
fi

# EPASystem (not in launch)
if [ -d "EPASystem" ]; then
    mv EPASystem _legacy/ && echo "  ✓ EPASystem/"
fi

# Scripts folder (if exists at root)
if [ -d "scripts" ] && [ ! -d "_legacy/scripts" ]; then
    mv scripts _legacy/ && echo "  ✓ scripts/"
fi

# Adventure-cases folder
if [ -d "adventure-cases" ]; then
    mv adventure-cases _legacy/cases/ && echo "  ✓ adventure-cases/"
fi

# Admin (check first)
if [ -d "admin" ]; then
    mv admin _legacy/ && echo "  ✓ admin/ (review if needed)"
fi

# ============================================
# MOVE CASES FOLDER ADVENTURE/EXPANDED
# ============================================
echo ""
echo "Moving old case formats from cases/ folder..."

if [ -d "cases" ]; then
    cd cases
    
    # Move adventure cases
    for f in *adventure*.html; do
        [ -f "$f" ] && mv "$f" ../_legacy/cases/adventure/
    done
    echo "  ✓ Moved adventure cases"
    
    # Move expanded cases (that aren't CRT)
    for f in *expanded*.html; do
        [ -f "$f" ] && mv "$f" ../_legacy/cases/expanded/
    done
    echo "  ✓ Moved expanded cases"
    
    cd ..
fi

# ============================================
# DELETE UNNECESSARY FILES
# ============================================
echo ""
echo "Removing build/dev files..."
rm -rf build-scripts 2>/dev/null && echo "  ✓ Removed build-scripts/"
rm -rf audit-work 2>/dev/null && echo "  ✓ Removed audit-work/"
rm -rf __pycache__ 2>/dev/null && echo "  ✓ Removed __pycache__/"
rm -f *.pyc 2>/dev/null

# ============================================
# SUMMARY
# ============================================
echo ""
echo "=============================================="
echo "   REORGANIZATION COMPLETE"
echo "=============================================="
echo ""
echo "Files moved to _legacy/ (not deployed):"
find _legacy -name "*.html" 2>/dev/null | wc -l
echo ""
echo "Files remaining in active repo:"
find . -name "*.html" -not -path "./_legacy/*" 2>/dev/null | wc -l
echo ""
echo "NEXT STEPS:"
echo "1. Replace training.html with the new version"
echo "2. Add rdx-gate.js to repo root"
echo "3. Review changes: git status"
echo "4. Commit: git add -A && git commit -m 'Reorganize: move legacy files to _legacy'"
echo "5. Push: git push"
echo "6. Clear Safari cache and test"
