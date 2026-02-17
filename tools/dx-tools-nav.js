/**
 * DxSuite Floating Tools Menu
 * ============================
 * Drop-in navigation component that appears on every tool page.
 * Provides quick access to all tools without returning to the hub.
 * 
 * Usage: Include this script on any tools page:
 *   <script src="dx-tools-nav.js"></script>
 * 
 * It auto-detects which tool is active and highlights it.
 */
(function() {
    'use strict';

    // Tool registry
    const tools = [
        { id: 'dashboard',  icon: '📊', name: 'Dashboard',       href: 'learning-dashboard.html' },
        { id: 'calculator', icon: '🧮', name: 'Calculators',     href: 'calculator-hub.html' },
        { id: 'ddx',        icon: '🔍', name: 'DDx Builder',     href: 'ddx-builder.html' },
        { id: 'abg',        icon: '🫁', name: 'ABG Analyzer',    href: 'abg-analyzer.html' },
        { id: 'flashcard',  icon: '🎴', name: 'Flashcards',      href: 'flashcard-studio.html' },
        { id: 'sbar',       icon: '💬', name: 'SBAR Trainer',    href: 'sbar-trainer.html' },
        { id: 'ecg',        icon: '❤️', name: 'ECG Trainer',     href: 'ecg-integration.html' },
        { id: 'emr',        icon: '🖥️', name: 'EMR Simulator',  href: 'emr-simulator.html' },
        { id: 'referral',   icon: '📄', name: 'Referral Letter', href: 'referral-letter-generator.html' },
        { id: 'bookmarks',  icon: '📌', name: 'Bookmarks',       href: 'bookmarks-notes.html' },
        { id: 'planner',    icon: '📅', name: 'Study Planner',   href: 'study-planner.html' },
    ];

    // Detect current tool from URL
    function detectCurrent() {
        const path = location.pathname.toLowerCase();
        if (path.includes('dashboard') || path.includes('learning-dashboard')) return 'dashboard';
        if (path.includes('calculator')) return 'calculator';
        if (path.includes('ddx-builder')) return 'ddx';
        if (path.includes('abg-analyzer')) return 'abg';
        if (path.includes('flashcard')) return 'flashcard';
        if (path.includes('sbar')) return 'sbar';
        if (path.includes('ecg')) return 'ecg';
        if (path.includes('emr')) return 'emr';
        if (path.includes('referral')) return 'referral';
        if (path.includes('bookmarks') || path.includes('notes')) return 'bookmarks';
        if (path.includes('planner')) return 'planner';
        if (path.includes('index')) return 'hub';
        return null;
    }

    const currentTool = detectCurrent();

    // Don't inject on the hub page itself — it already has full navigation
    if (currentTool === 'hub') return;

    // ═══════════════════════════════════════════════
    // BREADCRUMB BAR (top of page)
    // ═══════════════════════════════════════════════
    const breadStyle = document.createElement('style');
    breadStyle.textContent = `
        .dx-breadcrumb-bar {
            background: #18181b;
            padding: 6px 16px;
            font-family: 'Inter', system-ui, sans-serif;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
        }
        .dx-breadcrumb-bar a {
            color: #a1a1aa;
            text-decoration: none;
            transition: color 0.15s;
        }
        .dx-breadcrumb-bar a:hover { color: #ffffff; }
        .dx-breadcrumb-left {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .dx-breadcrumb-sep { color: #52525b; }
        .dx-breadcrumb-current { color: #d4d4d8; font-weight: 500; }
        .dx-breadcrumb-right {
            display: flex;
            gap: 12px;
        }
    `;
    document.head.appendChild(breadStyle);

    const currentName = tools.find(t => t.id === currentTool)?.name || 'Tool';
    const breadcrumb = document.createElement('div');
    breadcrumb.className = 'dx-breadcrumb-bar';
    breadcrumb.innerHTML = 
        '<div class="dx-breadcrumb-left">' +
            '<a href="index.html">🛠️ Tools</a>' +
            '<span class="dx-breadcrumb-sep">›</span>' +
            '<span class="dx-breadcrumb-current">' + currentName + '</span>' +
        '</div>' +
        '<div class="dx-breadcrumb-right">' +
            '<a href="learning-dashboard.html">📊 Dashboard</a>' +
            '<a href="index.html">All Tools →</a>' +
        '</div>';
    document.body.insertBefore(breadcrumb, document.body.firstChild);

    // Inject CSS
    const style = document.createElement('style');
    style.textContent = `
        .dx-tools-fab {
            position: fixed;
            bottom: 24px;
            left: 24px;
            z-index: 9990;
            font-family: 'Inter', system-ui, sans-serif;
        }
        .dx-fab-btn {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: linear-gradient(135deg, #059669, #047857);
            border: none;
            color: white;
            font-size: 22px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(5,150,105,0.35);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .dx-fab-btn:hover {
            transform: scale(1.08);
            box-shadow: 0 6px 18px rgba(5,150,105,0.4);
        }
        .dx-fab-btn.open {
            background: #18181b;
        }
        .dx-tools-panel {
            position: absolute;
            bottom: 62px;
            left: 0;
            width: 240px;
            background: white;
            border: 1px solid #e4e4e7;
            border-radius: 14px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
            opacity: 0;
            transform: translateY(10px) scale(0.95);
            pointer-events: none;
            transition: opacity 0.2s, transform 0.2s;
            overflow: hidden;
        }
        .dx-tools-panel.show {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
        }
        .dx-panel-header {
            padding: 12px 16px 8px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #6b7280;
            font-weight: 600;
            border-bottom: 1px solid #f1f5f9;
        }
        .dx-panel-list {
            max-height: 340px;
            overflow-y: auto;
            padding: 4px 0;
        }
        .dx-panel-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 9px 16px;
            text-decoration: none;
            color: #18181b;
            font-size: 13px;
            transition: background 0.15s;
        }
        .dx-panel-item:hover {
            background: #f1f5f9;
        }
        .dx-panel-item.active {
            background: #dcfce7;
            font-weight: 600;
            color: #166534;
        }
        .dx-panel-item .dx-nav-icon {
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            border-radius: 6px;
            background: #f8fafc;
            flex-shrink: 0;
        }
        .dx-panel-item.active .dx-nav-icon {
            background: #bbf7d0;
        }
        .dx-panel-footer {
            border-top: 1px solid #f1f5f9;
            padding: 4px 0;
        }
        .dx-panel-footer .dx-panel-item {
            font-weight: 500;
            color: #059669;
        }
    `;
    document.head.appendChild(style);

    // Build HTML
    const container = document.createElement('div');
    container.className = 'dx-tools-fab';
    container.innerHTML = 
        '<div class="dx-tools-panel" id="dx-tools-panel">' +
            '<div class="dx-panel-header">Tools</div>' +
            '<div class="dx-panel-list">' +
                tools.map(t => 
                    '<a href="' + t.href + '" class="dx-panel-item' + (t.id === currentTool ? ' active' : '') + '">' +
                        '<span class="dx-nav-icon">' + t.icon + '</span>' +
                        '<span>' + t.name + '</span>' +
                    '</a>'
                ).join('') +
            '</div>' +
            '<div class="dx-panel-footer">' +
                '<a href="index.html" class="dx-panel-item">' +
                    '<span class="dx-nav-icon">🏠</span>' +
                    '<span>All Tools Hub</span>' +
                '</a>' +
            '</div>' +
        '</div>' +
        '<button class="dx-fab-btn" id="dx-fab-btn" title="Tools Menu">🛠️</button>';

    document.body.appendChild(container);

    // Toggle
    const btn = document.getElementById('dx-fab-btn');
    const panel = document.getElementById('dx-tools-panel');
    let isOpen = false;

    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        isOpen = !isOpen;
        panel.classList.toggle('show', isOpen);
        btn.classList.toggle('open', isOpen);
        btn.textContent = isOpen ? '✕' : '🛠️';
    });

    document.addEventListener('click', function(e) {
        if (isOpen && !container.contains(e.target)) {
            isOpen = false;
            panel.classList.remove('show');
            btn.classList.remove('open');
            btn.textContent = '🛠️';
        }
    });
})();
