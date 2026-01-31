/**
 * ReasonDx Unified Navigation Injector
 * Version 2.0
 * 
 * This script can be added to ANY existing page to inject consistent navigation.
 * It will replace or enhance existing navigation without requiring page rewrites.
 * 
 * Usage: Add before closing </body> tag:
 * <script src="/dx-nav.js"></script>
 * 
 * Optional configuration via window.DxNavConfig before loading:
 * window.DxNavConfig = {
 *   active: 'learn',
 *   showStats: true,
 *   userInitials: 'LF',
 *   streak: 7
 * };
 */

(function() {
  'use strict';

  // ============ CONFIGURATION ============
  const DEFAULT_CONFIG = {
    active: '',
    showStats: false,
    userInitials: 'U',
    streak: 0,
    replaceExisting: true,
    theme: 'light' // 'light' or 'dark'
  };

  // Merge with any user-provided config
  const config = Object.assign({}, DEFAULT_CONFIG, window.DxNavConfig || {});

  // ============ PATH RESOLUTION ============
  function getBasePath() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('/reasondx/')) return '..';
    if (path.includes('/mechanism/')) return '..';
    if (path.includes('/coachdx/')) return '..';
    return '.';
  }

  const BASE = getBasePath();

  const PATHS = {
    home: `${BASE}/index.html`,
    learn: `${BASE}/ReasonDx/reasondx-learn-hub.html`,
    studyMode: `${BASE}/ReasonDx/study-mode.html`,
    cases: `${BASE}/ReasonDx/training.html`,
    deepDive: `${BASE}/ReasonDx/reasondx-learn-hub.html`,
    mechanism: `${BASE}/mechanism/index.html`,
    boardPrep: `${BASE}/ReasonDx/board-prep.html`,
    review: `${BASE}/ReasonDx/training.html`,
    progress: `${BASE}/dx-dashboard.html`,
    reference: `${BASE}/mechanism/index.html`,
    coach: `${BASE}/CoachDx/coachdx-dashboard.html`,
  };

  // ============ AUTO-DETECT ACTIVE PAGE ============
  function detectActivePage() {
    const path = window.location.pathname.toLowerCase();
    const filename = path.split('/').pop();
    
    if (filename === 'index.html' && !path.includes('mechanism') && !path.includes('reason')) return 'home';
    if (path.includes('learn-hub') || path.includes('deep-dive')) return 'learn';
    if (path.includes('training') || path.includes('clinical-reasoning')) return 'learn';
    if (path.includes('board-prep')) return 'learn';
    if (path.includes('mechanism')) return 'reference';
    if (path.includes('dashboard') || path.includes('progress') || path.includes('achievement')) return 'progress';
    if (path.includes('coach')) return 'review';
    
    return config.active || '';
  }

  // ============ CSS STYLES ============
  const NAV_STYLES = `
    <style id="dx-nav-styles">
      /* Reset for nav area */
      .dx-unified-nav * { box-sizing: border-box; margin: 0; padding: 0; }
      
      .dx-unified-nav {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        position: sticky;
        top: 0;
        z-index: 9999;
        background: #ffffff;
        border-bottom: 1px solid #e2e8f0;
      }
      
      .dx-unified-nav.dark {
        background: #1e293b;
        border-bottom-color: #334155;
      }
      
      .dx-nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1.5rem;
        max-width: 1600px;
        margin: 0 auto;
      }
      
      .dx-nav-left {
        display: flex;
        align-items: center;
        gap: 2rem;
      }
      
      .dx-nav-logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none !important;
        font-weight: 700;
        font-size: 1.25rem;
        color: #1e293b;
      }
      
      .dx-unified-nav.dark .dx-nav-logo { color: #f1f5f9; }
      
      .dx-nav-logo svg {
        flex-shrink: 0;
      }
      
      .dx-nav-logo-accent { color: #14b8a6; }
      
      .dx-nav-links {
        display: flex;
        gap: 0.25rem;
      }
      
      .dx-nav-link {
        color: #64748b;
        text-decoration: none !important;
        font-weight: 500;
        font-size: 0.9375rem;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        transition: all 0.15s ease;
        position: relative;
      }
      
      .dx-nav-link:hover {
        color: #1e293b;
        background: #f1f5f9;
      }
      
      .dx-unified-nav.dark .dx-nav-link { color: #94a3b8; }
      .dx-unified-nav.dark .dx-nav-link:hover { color: #f1f5f9; background: #334155; }
      
      .dx-nav-link.active {
        color: white !important;
        background: #14b8a6 !important;
      }
      
      /* Dropdown */
      .dx-nav-dropdown {
        position: relative;
      }
      
      .dx-nav-dropdown-trigger::after {
        content: ' ▾';
        font-size: 0.75rem;
        opacity: 0.7;
      }
      
      .dx-nav-dropdown-menu {
        display: none;
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        min-width: 200px;
        padding: 0.5rem;
        z-index: 100;
      }
      
      .dx-unified-nav.dark .dx-nav-dropdown-menu {
        background: #1e293b;
        border-color: #334155;
      }
      
      .dx-nav-dropdown:hover .dx-nav-dropdown-menu {
        display: block;
      }
      
      .dx-nav-dropdown-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.625rem 0.875rem;
        color: #64748b;
        text-decoration: none !important;
        border-radius: 6px;
        font-size: 0.9375rem;
        transition: all 0.15s ease;
      }
      
      .dx-nav-dropdown-item:hover {
        background: #f0fdfa;
        color: #0d9488;
      }
      
      .dx-nav-dropdown-item.dx-nav-study-mode {
        background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%);
        border-left: 3px solid #14b8a6;
        margin-bottom: 4px;
      }
      
      .dx-nav-dropdown-item.dx-nav-study-mode:hover {
        background: linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%);
      }
      
      .dx-unified-nav.dark .dx-nav-dropdown-item { color: #94a3b8; }
      .dx-unified-nav.dark .dx-nav-dropdown-item:hover { background: #334155; color: #5eead4; }
      
      .dx-nav-dropdown-icon {
        font-size: 1rem;
      }
      
      /* Right side */
      .dx-nav-right {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .dx-nav-stat {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        padding: 0.375rem 0.75rem;
        background: #f1f5f9;
        border-radius: 6px;
        font-weight: 500;
        font-size: 0.875rem;
        color: #64748b;
      }
      
      .dx-unified-nav.dark .dx-nav-stat { background: #334155; color: #94a3b8; }
      
      .dx-nav-streak {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.375rem 0.75rem;
        background: #fef3c7;
        border-radius: 20px;
        font-weight: 600;
        font-size: 0.875rem;
        color: #d97706;
      }
      
      .dx-nav-avatar {
        width: 36px;
        height: 36px;
        background: #ccfbf1;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.875rem;
        color: #14b8a6;
        cursor: pointer;
        transition: transform 0.15s ease;
      }
      
      .dx-nav-avatar:hover {
        transform: scale(1.05);
      }
      
      /* Mobile */
      .dx-nav-mobile-btn {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.25rem;
        color: #64748b;
      }
      
      @media (max-width: 768px) {
        .dx-nav-links { display: none; }
        .dx-nav-mobile-btn { display: block; }
        .dx-nav-stat { display: none; }
        
        .dx-nav-links.mobile-open {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          padding: 1rem;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .dx-unified-nav.dark .dx-nav-links.mobile-open {
          background: #1e293b;
          border-bottom-color: #334155;
        }
        
        .dx-nav-dropdown-menu {
          position: static;
          box-shadow: none;
          border: none;
          padding-left: 1rem;
        }
        
        .dx-nav-dropdown:hover .dx-nav-dropdown-menu {
          display: none;
        }
        
        .dx-nav-dropdown.mobile-open .dx-nav-dropdown-menu {
          display: block;
        }
      }
    </style>
  `;

  // ============ HTML TEMPLATE ============
  function createNavHTML() {
    const active = config.active || detectActivePage();
    const isActive = (page) => active === page ? 'active' : '';
    const isLearnActive = ['learn', 'cases', 'deepdive', 'boardprep'].includes(active.toLowerCase());
    
    const streak = parseInt(localStorage.getItem('dx-streak')) || config.streak || 0;
    const initials = localStorage.getItem('dx-user-initials') || config.userInitials || 'U';
    
    // Stethoscope X logo SVG (inline for reliability)
    const logoSVG = `<img src="${BASE}/Logos/dxsuite-logo-final.svg" alt="Dx Suite" style="height: 32px;">`;
    
    return `
      <div class="dx-unified-nav ${config.theme === 'dark' ? 'dark' : ''}">
        <div class="dx-nav-container">
          <div class="dx-nav-left">
            <a href="${PATHS.home}" class="dx-nav-logo">
              ${logoSVG}
            </a>
            
            <nav class="dx-nav-links" id="dx-nav-links">
              <a href="${PATHS.home}" class="dx-nav-link ${isActive('home')}">Home</a>
              
              <div class="dx-nav-dropdown">
                <a href="${PATHS.learn}" class="dx-nav-link dx-nav-dropdown-trigger ${isLearnActive ? 'active' : ''}">Learn</a>
                <div class="dx-nav-dropdown-menu">
                  <a href="${PATHS.studyMode}" class="dx-nav-dropdown-item dx-nav-study-mode">
                    <span class="dx-nav-dropdown-icon">🎯</span>
                    <span><strong>Study Mode</strong></span>
                  </a>
                  <a href="${PATHS.cases}" class="dx-nav-dropdown-item">
                    <span class="dx-nav-dropdown-icon">📋</span>
                    <span>Cases</span>
                  </a>
                  <a href="${PATHS.deepDive}" class="dx-nav-dropdown-item">
                    <span class="dx-nav-dropdown-icon">🔬</span>
                    <span>Deep Dive</span>
                  </a>
                  <a href="${PATHS.mechanism}" class="dx-nav-dropdown-item">
                    <span class="dx-nav-dropdown-icon">⚙️</span>
                    <span>MechanismDx</span>
                  </a>
                  <a href="${PATHS.boardPrep}" class="dx-nav-dropdown-item">
                    <span class="dx-nav-dropdown-icon">📝</span>
                    <span>Board Prep</span>
                  </a>
                </div>
              </div>
              
              <a href="${PATHS.coach}" class="dx-nav-link ${isActive('review')}">Review</a>
              <a href="${PATHS.progress}" class="dx-nav-link ${isActive('progress')}">Progress</a>
              <a href="${PATHS.reference}" class="dx-nav-link ${isActive('reference')}">Reference</a>
            </nav>
          </div>
          
          <div class="dx-nav-right">
            ${config.showStats ? `
              <div class="dx-nav-stat">
                <span>⏱️</span>
                <span id="dx-nav-timer">00:00</span>
              </div>
              <div class="dx-nav-stat">
                <span>✓</span>
                <span id="dx-nav-score">0/0</span>
              </div>
            ` : ''}
            ${streak > 0 ? `<div class="dx-nav-streak">🔥 ${streak}</div>` : ''}
            <button class="dx-nav-mobile-btn" id="dx-nav-mobile-btn" aria-label="Toggle menu">☰</button>
            <div class="dx-nav-avatar" id="dx-nav-avatar" title="Profile">${initials}</div>
          </div>
        </div>
      </div>
    `;
  }

  // ============ INJECTION ============
  function injectNav() {
    // Add styles if not already present
    if (!document.getElementById('dx-nav-styles')) {
      document.head.insertAdjacentHTML('beforeend', NAV_STYLES);
    }
    
    // Find or create nav container
    let navContainer = document.getElementById('dx-nav');
    
    if (!navContainer && config.replaceExisting) {
      // Try to find existing nav and replace it
      const existingNav = document.querySelector('nav, .nav, .landing-nav, .dx-nav, .top-nav, [class*="navigation"]');
      
      if (existingNav) {
        // Create wrapper and insert before existing nav
        navContainer = document.createElement('div');
        navContainer.id = 'dx-nav';
        existingNav.parentNode.insertBefore(navContainer, existingNav);
        existingNav.style.display = 'none'; // Hide old nav
      }
    }
    
    if (!navContainer) {
      // Insert at top of body
      navContainer = document.createElement('div');
      navContainer.id = 'dx-nav';
      document.body.insertBefore(navContainer, document.body.firstChild);
    }
    
    // Inject nav HTML
    navContainer.innerHTML = createNavHTML();
    
    // Setup mobile menu toggle
    const mobileBtn = document.getElementById('dx-nav-mobile-btn');
    const navLinks = document.getElementById('dx-nav-links');
    
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
        mobileBtn.textContent = navLinks.classList.contains('mobile-open') ? '✕' : '☰';
      });
    }
    
    // Setup dropdown toggle on mobile
    const dropdowns = document.querySelectorAll('.dx-nav-dropdown');
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.dx-nav-dropdown-trigger');
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('mobile-open');
          }
        });
      }
    });
  }

  // ============ PUBLIC API ============
  window.DxNav = {
    updateTimer: function(time) {
      const el = document.getElementById('dx-nav-timer');
      if (el) el.textContent = time;
    },
    
    updateScore: function(score) {
      const el = document.getElementById('dx-nav-score');
      if (el) el.textContent = score;
    },
    
    setStreak: function(streak) {
      localStorage.setItem('dx-streak', streak);
    },
    
    setUserInitials: function(initials) {
      localStorage.setItem('dx-user-initials', initials);
      const el = document.getElementById('dx-nav-avatar');
      if (el) el.textContent = initials;
    },
    
    setTheme: function(theme) {
      const nav = document.querySelector('.dx-unified-nav');
      if (nav) {
        nav.classList.toggle('dark', theme === 'dark');
      }
    },
    
    refresh: function() {
      injectNav();
    }
  };

  // ============ INITIALIZE ============
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }

})();
