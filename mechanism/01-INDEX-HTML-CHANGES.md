# HOW TO ADD MECHANISMX & USMLE NAVIGATOR TO YOUR INDEX.HTML

## Location: Line 77638-77648 (the navigation bar)

### CURRENT CODE (lines 77638-77648):
```html
<nav class="flex items-center gap-6 text-sm">
    <a href="#" onclick="goToScreen('menu'); return false;" class="text-zinc-900 dark:text-zinc-100 no-underline font-medium">Train</a>
    <a href="#" onclick="goToScreen('pom2-curriculum'); return false;" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 no-underline font-medium">POM 2</a>
    <a href="patient-trainer.html" class="text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200 no-underline font-medium">🩺 Interview</a>
    <a href="#" onclick="goToScreen('study-hub'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">Study Hub</a>
    <a href="#" onclick="goToScreen('stats'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">Progress</a>
    <a href="#" onclick="goToScreen('insights-dashboard'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">My Insights</a>
    <a href="#" onclick="goToScreen('image-quiz-select'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">Images</a>
    <a href="#" onclick="goToScreen('reference-cards'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">Reference</a>
    <a href="#" onclick="goToScreen('about'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">About</a>
</nav>
```

### REPLACE WITH (adds 3 new links with colors):
```html
<nav class="flex items-center gap-6 text-sm">
    <a href="#" onclick="goToScreen('menu'); return false;" class="text-zinc-900 dark:text-zinc-100 no-underline font-medium">Train</a>
    <a href="#" onclick="goToScreen('pom2-curriculum'); return false;" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 no-underline font-medium">POM 2</a>
    <a href="patient-trainer.html" class="text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200 no-underline font-medium">🩺 Interview</a>
    <a href="integration/learning-hub.html" class="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200 no-underline font-medium">🎯 Hub</a>
    <a href="mechanismx/index.html" class="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200 no-underline font-medium">⚙️ MechanismX</a>
    <a href="usmle-navigator/index.html" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 no-underline font-medium">🗺️ Blueprint</a>
    <a href="#" onclick="goToScreen('study-hub'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">Study Hub</a>
    <a href="#" onclick="goToScreen('stats'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">Progress</a>
    <a href="#" onclick="goToScreen('insights-dashboard'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">My Insights</a>
    <a href="#" onclick="goToScreen('image-quiz-select'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">Images</a>
    <a href="#" onclick="goToScreen('reference-cards'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">Reference</a>
    <a href="#" onclick="goToScreen('about'); return false;" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 no-underline">About</a>
</nav>
```

## The 3 new links added:
1. **🎯 Hub** → `integration/learning-hub.html` (purple) - Unified learning dashboard
2. **⚙️ MechanismX** → `mechanismx/index.html` (green) - Deep mechanism learning
3. **🗺️ Blueprint** → `usmle-navigator/index.html` (blue) - USMLE content map

---

## Alternative: Add a "More Tools" Dropdown

If the nav bar gets too crowded, you can add a dropdown instead:

### Add this CSS to your <style> section:
```css
/* Dropdown menu */
.nav-dropdown {
    position: relative;
    display: inline-block;
}
.nav-dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    min-width: 200px;
    z-index: 100;
    padding: 8px 0;
}
.dark .nav-dropdown-content {
    background: #1f2937;
    border-color: #374151;
}
.nav-dropdown:hover .nav-dropdown-content {
    display: block;
}
.nav-dropdown-item {
    display: block;
    padding: 10px 16px;
    text-decoration: none;
    color: #374151;
    transition: background 0.15s;
}
.nav-dropdown-item:hover {
    background: #f3f4f6;
}
.dark .nav-dropdown-item {
    color: #d1d5db;
}
.dark .nav-dropdown-item:hover {
    background: #374151;
}
```

### Then add this to the nav:
```html
<div class="nav-dropdown">
    <span class="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer">🧠 Learning Tools ▾</span>
    <div class="nav-dropdown-content">
        <a href="integration/learning-hub.html" class="nav-dropdown-item">🎯 Learning Hub</a>
        <a href="mechanismx/index.html" class="nav-dropdown-item">⚙️ MechanismX</a>
        <a href="usmle-navigator/index.html" class="nav-dropdown-item">🗺️ USMLE Blueprint</a>
    </div>
</div>
```

---

## Quick Copy-Paste Solution

Just add these 3 lines after line 77641 (after the Interview link):

```html
<a href="integration/learning-hub.html" class="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200 no-underline font-medium">🎯 Hub</a>
<a href="mechanismx/index.html" class="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200 no-underline font-medium">⚙️ MechanismX</a>
<a href="usmle-navigator/index.html" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 no-underline font-medium">🗺️ Blueprint</a>
```
