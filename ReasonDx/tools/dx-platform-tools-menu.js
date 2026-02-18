/**
 * DxSuite Tools — Platform Nav Integration
 * ==========================================
 * Drop this script into ANY platform page to add a "🛠️ Tools" 
 * dropdown in the navigation. Works with the unified nav bar.
 * 
 * Usage (from any page at any depth):
 *   <script src="tools/dx-platform-tools-menu.js"></script>
 * 
 * The script auto-detects its own path depth and creates 
 * correct relative links to the tools directory.
 */
(function() {
    'use strict';

    // Calculate path to tools directory
    function getToolsPath() {
        const scriptTags = document.querySelectorAll('script[src*="dx-platform-tools-menu"]');
        if (scriptTags.length > 0) {
            const src = scriptTags[scriptTags.length - 1].src;
            const dir = src.substring(0, src.lastIndexOf('/') + 1);
            return dir;
        }
        // Fallback: try relative from current page
        const depth = (location.pathname.match(/\//g) || []).length - 1;
        let prefix = '';
        for (let i = 0; i < depth; i++) prefix += '../';
        return prefix + 'tools/';
    }

    const toolsBase = getToolsPath();

    // Core tools to show in nav dropdown (most-used first)
    const navTools = [
        { icon: '🧮', name: 'Calculator Hub',    href: 'calculator-hub.html',     desc: '22 clinical calculators' },
        { icon: '🔍', name: 'DDx Builder',       href: 'ddx-builder.html',        desc: '62 diagnoses, symptom matching' },
        { icon: '🫁', name: 'ABG Analyzer',      href: 'abg-analyzer.html',       desc: 'Systematic ABG interpretation' },
        { icon: '🎴', name: 'Flashcard Studio',  href: 'flashcard-studio.html',   desc: 'SM-2 spaced repetition' },
        { icon: '💬', name: 'SBAR Trainer',      href: 'sbar-trainer.html',       desc: 'Clinical communication practice' },
        { icon: '📊', name: 'My Dashboard',      href: 'learning-dashboard.html', desc: 'Track your progress' },
    ];

    // Inject CSS
    const style = document.createElement('style');
    style.textContent = `
        .dx-nav-tools-trigger {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 8px 14px;
            color: inherit;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            border: none;
            background: none;
            font-family: inherit;
            border-radius: 8px;
            transition: background 0.15s;
        }
        .dx-nav-tools-trigger:hover {
            background: rgba(0,0,0,0.08);
        }
        .dx-nav-tools-trigger .caret {
            font-size: 10px;
            transition: transform 0.2s;
        }
        .dx-nav-tools-trigger.open .caret {
            transform: rotate(180deg);
        }
        .dx-nav-tools-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            min-width: 280px;
            background: white;
            border: 1px solid #e4e4e7;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
            padding: 6px 0;
            z-index: 9995;
            opacity: 0;
            transform: translateY(4px);
            pointer-events: none;
            transition: opacity 0.2s, transform 0.2s;
        }
        .dx-nav-tools-dropdown.show {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }
        .dx-nav-tools-dropdown a {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 16px;
            color: #18181b;
            text-decoration: none;
            font-size: 13px;
            transition: background 0.15s;
        }
        .dx-nav-tools-dropdown a:hover {
            background: #f1f5f9;
        }
        .dx-nav-tools-dropdown .tool-icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: #f1f5f9;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            flex-shrink: 0;
        }
        .dx-nav-tools-dropdown .tool-name {
            font-weight: 500;
        }
        .dx-nav-tools-dropdown .tool-desc {
            font-size: 11px;
            color: #6b7280;
        }
        .dx-nav-tools-dropdown .divider {
            height: 1px;
            background: #f1f5f9;
            margin: 4px 0;
        }
        .dx-nav-tools-dropdown .all-tools {
            font-weight: 600;
            color: #1f5f8b;
        }
    `;
    document.head.appendChild(style);

    // Create dropdown trigger
    const trigger = document.createElement('button');
    trigger.className = 'dx-nav-tools-trigger';
    trigger.innerHTML = '🛠️ Tools <span class="caret">▾</span>';

    // Create dropdown panel
    const dropdown = document.createElement('div');
    dropdown.className = 'dx-nav-tools-dropdown';
    dropdown.innerHTML = navTools.map(t =>
        '<a href="' + toolsBase + t.href + '">' +
            '<span class="tool-icon">' + t.icon + '</span>' +
            '<div><div class="tool-name">' + t.name + '</div>' +
            '<div class="tool-desc">' + t.desc + '</div></div>' +
        '</a>'
    ).join('') +
    '<div class="divider"></div>' +
    '<a href="' + toolsBase + 'index.html" class="all-tools">' +
        '<span class="tool-icon">🏠</span>' +
        '<div><div class="tool-name">All Tools Hub →</div>' +
        '<div class="tool-desc">12 tools for clinical reasoning</div></div>' +
    '</a>';

    trigger.appendChild(dropdown);

    // Toggle behavior
    let isOpen = false;
    trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        isOpen = !isOpen;
        dropdown.classList.toggle('show', isOpen);
        trigger.classList.toggle('open', isOpen);
    });
    document.addEventListener('click', function() {
        if (isOpen) {
            isOpen = false;
            dropdown.classList.remove('show');
            trigger.classList.remove('open');
        }
    });

    // ═══════════════════════════════════════════════
    // AUTO-INSERT INTO NAVIGATION
    // ═══════════════════════════════════════════════
    // Strategy: Look for common nav patterns and insert the trigger
    
    function insertIntoNav() {
        // Pattern 1: Look for the "More" dropdown/button
        const moreBtn = document.querySelector('[data-nav="more"], .nav-more, .more-menu, button:has(.fa-bars), [aria-label="More"]');
        if (moreBtn) {
            moreBtn.parentElement.insertBefore(trigger, moreBtn);
            return true;
        }

        // Pattern 2: Look for unified nav tabs (Train / Learn / Progress / More)
        const navBar = document.querySelector('.bottom-nav, .nav-tabs, .nav-bar, nav[class*="bottom"], nav[class*="main"]');
        if (navBar) {
            navBar.appendChild(trigger);
            return true;
        }

        // Pattern 3: Look for any header nav
        const headerNav = document.querySelector('header nav, .header-nav, .top-nav');
        if (headerNav) {
            headerNav.appendChild(trigger);
            return true;
        }

        // Pattern 4: DxSuite-specific — look for the user bar
        const userBar = document.querySelector('.dx-user-bar, #dx-user-bar');
        if (userBar) {
            userBar.insertBefore(trigger, userBar.firstChild);
            return true;
        }

        return false;
    }

    // Try to insert immediately, then watch for dynamic nav loading
    if (!insertIntoNav()) {
        let attempts = 0;
        const interval = setInterval(function() {
            if (insertIntoNav() || ++attempts > 30) clearInterval(interval);
        }, 200);
    }

    // Expose for manual integration
    window.DxToolsMenu = {
        trigger: trigger,
        dropdown: dropdown,
        toolsPath: toolsBase,
        insertInto: function(selector) {
            const target = document.querySelector(selector);
            if (target) target.appendChild(trigger);
        }
    };
})();
