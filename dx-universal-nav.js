/**
 * DxSuite Universal Navigation Component
 * Add to any page with: <script src="/dx-universal-nav.js"></script>
 * Place <div id="dx-nav"></div> at the top of your body, or it will auto-inject
 */

(function() {
    const NAV_HTML = `
    <nav class="dx-universal-nav" id="dxUniversalNav">
        <div class="dx-nav-container">
            <a href="/" class="dx-nav-brand">
                <span class="dx-nav-logo">Dx</span>
                <span class="dx-nav-title">Learning Ecosystem</span>
            </a>
            
            <button class="dx-nav-toggle" onclick="DxNav.toggleMenu()" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
            
            <div class="dx-nav-menu" id="dxNavMenu">
                <div class="dx-nav-links">
                    <div class="dx-nav-dropdown">
                        <button class="dx-nav-link dx-nav-dropdown-toggle" onclick="DxNav.toggleDropdown(this)">
                            Learn <span class="dx-nav-arrow">▼</span>
                        </button>
                        <div class="dx-nav-dropdown-menu">
                            <a href="/mechanism/index.html" class="dx-nav-dropdown-item">
                                <span class="dx-nav-icon">🧠</span>
                                <div>
                                    <strong>MechanismDx</strong>
                                    <small>Pathophysiology modules</small>
                                </div>
                            </a>
                            <a href="/ReasonDx/index.html" class="dx-nav-dropdown-item">
                                <span class="dx-nav-icon">🔍</span>
                                <div>
                                    <strong>ReasonDx</strong>
                                    <small>Clinical reasoning cases</small>
                                </div>
                            </a>
                            <a href="/ReasonDx/training.html" class="dx-nav-dropdown-item">
                                <span class="dx-nav-icon">🎯</span>
                                <div>
                                    <strong>Clinical Trainer</strong>
                                    <small>AI-powered case practice</small>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div class="dx-nav-dropdown">
                        <button class="dx-nav-link dx-nav-dropdown-toggle" onclick="DxNav.toggleDropdown(this)">
                            Practice <span class="dx-nav-arrow">▼</span>
                        </button>
                        <div class="dx-nav-dropdown-menu">
                            <a href="/CoachDx/index.html" class="dx-nav-dropdown-item">
                                <span class="dx-nav-icon">👨‍⚕️</span>
                                <div>
                                    <strong>CoachDx</strong>
                                    <small>AI attending simulation</small>
                                </div>
                            </a>
                            <a href="/ProcedureDx/index.html" class="dx-nav-dropdown-item">
                                <span class="dx-nav-icon">🔧</span>
                                <div>
                                    <strong>ProcedureDx</strong>
                                    <small>Procedure preparation</small>
                                </div>
                            </a>
                            <a href="/ConsentDx/index.html" class="dx-nav-dropdown-item">
                                <span class="dx-nav-icon">📋</span>
                                <div>
                                    <strong>ConsentDx</strong>
                                    <small>Informed consent training</small>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div class="dx-nav-dropdown">
                        <button class="dx-nav-link dx-nav-dropdown-toggle" onclick="DxNav.toggleDropdown(this)">
                            Collaborate <span class="dx-nav-arrow">▼</span>
                        </button>
                        <div class="dx-nav-dropdown-menu">
                            <a href="/TeamDx/index.html" class="dx-nav-dropdown-item">
                                <span class="dx-nav-icon">👥</span>
                                <div>
                                    <strong>TeamDx</strong>
                                    <small>Interprofessional scenarios</small>
                                </div>
                            </a>
                            <a href="/SystemsDx/index.html" class="dx-nav-dropdown-item">
                                <span class="dx-nav-icon">🏥</span>
                                <div>
                                    <strong>SystemsDx</strong>
                                    <small>Healthcare systems</small>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <a href="/dx-dashboard.html" class="dx-nav-link">Dashboard</a>
                </div>
                
                <a href="/" class="dx-nav-home-btn">🏠 Home</a>
            </div>
        </div>
    </nav>
    `;

    const NAV_STYLES = `
    <style id="dx-universal-nav-styles">
        .dx-universal-nav {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            padding: 0;
            position: sticky;
            top: 0;
            z-index: 9999;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        .dx-nav-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 64px;
        }
        .dx-nav-brand {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            color: #fff;
        }
        .dx-nav-logo {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: #fff;
            font-weight: 800;
            font-size: 1.2rem;
            padding: 6px 10px;
            border-radius: 8px;
        }
        .dx-nav-title {
            font-weight: 600;
            font-size: 1.1rem;
            color: #e2e8f0;
        }
        @media (max-width: 600px) {
            .dx-nav-title { display: none; }
        }
        
        .dx-nav-menu {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .dx-nav-links {
            display: flex;
            align-items: center;
            gap: 4px;
        }
        .dx-nav-link {
            color: #cbd5e1;
            text-decoration: none;
            padding: 10px 16px;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.2s;
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .dx-nav-link:hover {
            background: rgba(255,255,255,0.1);
            color: #fff;
        }
        .dx-nav-arrow {
            font-size: 0.6rem;
            transition: transform 0.2s;
        }
        .dx-nav-dropdown {
            position: relative;
        }
        .dx-nav-dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background: #1e293b;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            padding: 8px;
            min-width: 260px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.2s;
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        }
        .dx-nav-dropdown.open .dx-nav-dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        .dx-nav-dropdown.open .dx-nav-arrow {
            transform: rotate(180deg);
        }
        .dx-nav-dropdown-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 14px;
            color: #e2e8f0;
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.2s;
        }
        .dx-nav-dropdown-item:hover {
            background: rgba(59,130,246,0.2);
        }
        .dx-nav-dropdown-item .dx-nav-icon {
            font-size: 1.5rem;
        }
        .dx-nav-dropdown-item strong {
            display: block;
            font-size: 0.9rem;
            color: #fff;
        }
        .dx-nav-dropdown-item small {
            font-size: 0.75rem;
            color: #94a3b8;
        }
        
        .dx-nav-home-btn {
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
            color: #fff;
            padding: 8px 16px;
            border-radius: 8px;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
            margin-left: 12px;
            transition: all 0.2s;
        }
        .dx-nav-home-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(59,130,246,0.4);
        }
        
        .dx-nav-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            padding: 8px;
            background: none;
            border: none;
            cursor: pointer;
        }
        .dx-nav-toggle span {
            display: block;
            width: 24px;
            height: 2px;
            background: #fff;
            border-radius: 1px;
            transition: all 0.2s;
        }
        
        @media (max-width: 900px) {
            .dx-nav-toggle { display: flex; }
            .dx-nav-menu {
                position: fixed;
                top: 64px;
                left: 0;
                right: 0;
                bottom: 0;
                background: #0f172a;
                flex-direction: column;
                align-items: stretch;
                padding: 24px;
                gap: 16px;
                transform: translateX(100%);
                transition: transform 0.3s;
                overflow-y: auto;
            }
            .dx-nav-menu.open {
                transform: translateX(0);
            }
            .dx-nav-links {
                flex-direction: column;
                align-items: stretch;
            }
            .dx-nav-dropdown-menu {
                position: static;
                opacity: 1;
                visibility: visible;
                transform: none;
                margin-top: 8px;
                display: none;
            }
            .dx-nav-dropdown.open .dx-nav-dropdown-menu {
                display: block;
            }
            .dx-nav-home-btn {
                margin: 16px 0 0 0;
                text-align: center;
            }
        }
    </style>
    `;

    // Navigation controller
    window.DxNav = {
        toggleMenu: function() {
            document.getElementById('dxNavMenu').classList.toggle('open');
        },
        toggleDropdown: function(btn) {
            const dropdown = btn.closest('.dx-nav-dropdown');
            const wasOpen = dropdown.classList.contains('open');
            
            // Close all dropdowns
            document.querySelectorAll('.dx-nav-dropdown').forEach(d => d.classList.remove('open'));
            
            // Toggle this one
            if (!wasOpen) {
                dropdown.classList.add('open');
            }
        },
        closeDropdowns: function(e) {
            if (!e.target.closest('.dx-nav-dropdown')) {
                document.querySelectorAll('.dx-nav-dropdown').forEach(d => d.classList.remove('open'));
            }
        },
        highlightCurrent: function() {
            const path = window.location.pathname;
            document.querySelectorAll('.dx-nav-dropdown-item').forEach(item => {
                if (item.getAttribute('href') && path.includes(item.getAttribute('href').split('/')[1])) {
                    item.style.background = 'rgba(59,130,246,0.3)';
                }
            });
        }
    };

    // Initialize
    function init() {
        // Add styles
        if (!document.getElementById('dx-universal-nav-styles')) {
            document.head.insertAdjacentHTML('beforeend', NAV_STYLES);
        }
        
        // Add nav
        const existingNav = document.getElementById('dx-nav');
        if (existingNav) {
            existingNav.innerHTML = NAV_HTML;
        } else {
            document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
        }
        
        // Event listeners
        document.addEventListener('click', DxNav.closeDropdowns);
        
        // Highlight current page
        DxNav.highlightCurrent();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
