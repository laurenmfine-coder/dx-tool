/**
 * DxSuite View Toggle
 * Allows users to switch between Desktop, Tablet, and Mobile optimized views
 * 
 * Usage: Add to any page:
 * <script src="/dx-view-toggle.js"></script>
 * 
 * The toggle will appear in the bottom-right corner on supported pages.
 */

(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        storageKey: 'dxsuite-view-preference',
        views: {
            auto: { label: '📱 Auto', class: '', desc: 'Automatic based on device' },
            desktop: { label: '🖥️ Desktop', class: 'force-desktop', desc: 'Desktop layout' },
            tablet: { label: '📱 Tablet', class: 'force-tablet', desc: 'Tablet optimized' },
            mobile: { label: '📲 Mobile', class: 'force-mobile', desc: 'Mobile optimized' },
            compact: { label: '🔲 Compact', class: 'force-compact', desc: 'Minimal UI' }
        }
    };
    
    // CSS for forced views
    const viewStyles = `
        /* Force Desktop View */
        .force-desktop {
            min-width: 1024px !important;
        }
        .force-desktop .container { max-width: 1200px; }
        .force-desktop .nav-links { display: flex !important; }
        
        /* Force Tablet View */
        .force-tablet {
            max-width: 768px !important;
            margin: 0 auto;
        }
        .force-tablet .container { padding: 1rem; }
        
        /* Force Mobile View */
        .force-mobile {
            max-width: 430px !important;
            margin: 0 auto;
        }
        .force-mobile .vitals { grid-template-columns: repeat(3, 1fr) !important; }
        .force-mobile .option { padding: 1rem !important; }
        .force-mobile .btn { width: 100%; padding: 1rem; }
        
        /* Force Compact View */
        .force-compact .header { padding: 0.5rem; }
        .force-compact .scene { padding: 0.75rem; }
        .force-compact h1 { font-size: 1.25rem; }
        .force-compact .teaching-point { display: none; }
        .force-compact .peds-toggle { display: none; }
        
        /* View Toggle Button */
        #dx-view-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            background: #1e293b;
            color: white;
            border: none;
            border-radius: 50px;
            padding: 12px 16px;
            font-size: 14px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s;
        }
        #dx-view-toggle:hover {
            background: #334155;
            transform: scale(1.05);
        }
        
        /* View Toggle Menu */
        #dx-view-menu {
            position: fixed;
            bottom: 80px;
            right: 20px;
            z-index: 9998;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            padding: 8px;
            display: none;
            min-width: 180px;
        }
        #dx-view-menu.show { display: block; }
        
        .dx-view-option {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.2s;
        }
        .dx-view-option:hover { background: #f1f5f9; }
        .dx-view-option.active { background: #e0f2fe; }
        .dx-view-option-label { font-weight: 500; }
        .dx-view-option-desc { font-size: 11px; color: #64748b; }
        
        /* Safe area padding for the toggle */
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
            #dx-view-toggle {
                bottom: calc(20px + env(safe-area-inset-bottom));
            }
            #dx-view-menu {
                bottom: calc(80px + env(safe-area-inset-bottom));
            }
        }
    `;
    
    // Initialize
    function init() {
        // Add styles
        const styleEl = document.createElement('style');
        styleEl.textContent = viewStyles;
        document.head.appendChild(styleEl);
        
        // Create toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'dx-view-toggle';
        toggleBtn.innerHTML = '👁️ View';
        toggleBtn.setAttribute('aria-label', 'Toggle view mode');
        toggleBtn.onclick = toggleMenu;
        document.body.appendChild(toggleBtn);
        
        // Create menu
        const menu = document.createElement('div');
        menu.id = 'dx-view-menu';
        menu.innerHTML = Object.entries(CONFIG.views).map(([key, view]) => `
            <div class="dx-view-option" data-view="${key}">
                <span>${view.label}</span>
                <div>
                    <div class="dx-view-option-label">${view.label.split(' ')[1]}</div>
                    <div class="dx-view-option-desc">${view.desc}</div>
                </div>
            </div>
        `).join('');
        document.body.appendChild(menu);
        
        // Add click handlers
        menu.querySelectorAll('.dx-view-option').forEach(opt => {
            opt.onclick = () => setView(opt.dataset.view);
        });
        
        // Load saved preference
        const saved = localStorage.getItem(CONFIG.storageKey) || 'auto';
        setView(saved, false);
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#dx-view-toggle') && !e.target.closest('#dx-view-menu')) {
                document.getElementById('dx-view-menu').classList.remove('show');
            }
        });
    }
    
    function toggleMenu() {
        document.getElementById('dx-view-menu').classList.toggle('show');
    }
    
    function setView(viewKey, save = true) {
        const view = CONFIG.views[viewKey];
        if (!view) return;
        
        // Remove all view classes
        Object.values(CONFIG.views).forEach(v => {
            if (v.class) document.body.classList.remove(v.class);
        });
        
        // Add new view class
        if (view.class) {
            document.body.classList.add(view.class);
        }
        
        // Update button text
        document.getElementById('dx-view-toggle').innerHTML = view.label;
        
        // Update active state
        document.querySelectorAll('.dx-view-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.view === viewKey);
        });
        
        // Save preference
        if (save) {
            localStorage.setItem(CONFIG.storageKey, viewKey);
        }
        
        // Close menu
        document.getElementById('dx-view-menu').classList.remove('show');
    }
    
    // Auto-detect and suggest view
    function detectDevice() {
        const ua = navigator.userAgent;
        const width = window.innerWidth;
        
        if (/iPhone|iPad|iPod/.test(ua)) {
            return width <= 430 ? 'mobile' : 'tablet';
        }
        if (/Android/.test(ua)) {
            return width <= 480 ? 'mobile' : 'tablet';
        }
        return 'auto';
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
