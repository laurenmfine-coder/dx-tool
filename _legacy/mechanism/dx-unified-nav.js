/**
 * ReasonDx Unified Navigation System
 * Version: 1.0
 * 
 * Include this JS file after dx-unified-nav.css for full functionality.
 * 
 * Usage:
 * 1. Include CSS: <link rel="stylesheet" href="dx-unified-nav.css">
 * 2. Include JS: <script src="dx-unified-nav.js"></script>
 * 3. Add container: <div id="dx-nav"></div>
 * 4. Initialize: DxNav.init({ currentPage: 'reason' });
 */

const DxNav = {
    // Configuration
    config: {
        currentPage: null,  // 'home', 'mechanism', 'reason', 'coach', 'dashboard', 'reference'
        showDarkToggle: true,
        showUserMenu: false,
        userName: null,
        basePath: '',  // Set to '../' if in subfolder
    },

    // Navigation items
    navItems: [
        { id: 'home', label: 'Home', icon: '🏠', href: 'index.html', class: '' },
        { id: 'mechanism', label: 'MechanismDx', icon: '⚙️', href: 'mechanism/index.html', class: 'mechanism' },
        { id: 'reason', label: 'ReasonDx', icon: '🔬', href: 'ReasonDx/training.html', class: 'reason' },
        { id: 'coach', label: 'CoachDx', icon: '🧠', href: 'CoachDx/case-library.html', class: 'coach' },
        { id: 'reference', label: 'References', icon: '📚', href: 'reference-library.html', class: '' },
        { id: 'dashboard', label: 'Dashboard', icon: '📊', href: 'dx-dashboard.html', class: 'cta' },
    ],

    // Initialize navigation
    init(options = {}) {
        this.config = { ...this.config, ...options };
        this.detectBasePath();
        this.render();
        this.bindEvents();
        this.initDarkMode();
    },

    // Auto-detect base path based on current location
    detectBasePath() {
        const path = window.location.pathname;
        if (path.includes('/ReasonDx/') || path.includes('/CoachDx/') || path.includes('/mechanism/')) {
            this.config.basePath = '../';
        } else {
            this.config.basePath = '';
        }
    },

    // Render navigation HTML
    render() {
        const container = document.getElementById('dx-nav');
        if (!container) {
            console.warn('DxNav: No container found with id="dx-nav"');
            return;
        }

        const isDark = document.documentElement.classList.contains('dark') || 
                       localStorage.getItem('dx-dark-mode') === 'true';

        const navHTML = `
            <nav class="dx-unified-nav ${isDark ? 'dark' : ''}" id="dx-unified-nav">
                <div class="dx-unified-nav-inner">
                    <!-- Brand -->
                    <a href="${this.config.basePath}index.html" class="dx-nav-brand">
                        <span class="dx-nav-brand-icon">🏥</span>
                        <span class="dx-nav-brand-text">Dx Ecosystem</span>
                    </a>
                    
                    <!-- Mobile Toggle -->
                    <button class="dx-nav-mobile-toggle" id="dx-mobile-toggle" aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    
                    <!-- Nav Links -->
                    <div class="dx-nav-links" id="dx-nav-links">
                        ${this.renderNavItems()}
                    </div>
                    
                    <!-- Right Section -->
                    <div class="dx-nav-user">
                        ${this.config.showDarkToggle ? `
                            <button class="dx-nav-dark-toggle" id="dx-dark-toggle" aria-label="Toggle dark mode">
                                ${isDark ? '☀️' : '🌙'}
                            </button>
                        ` : ''}
                        ${this.config.showUserMenu && this.config.userName ? `
                            <div class="dx-nav-user-avatar">${this.config.userName.charAt(0).toUpperCase()}</div>
                            <span class="dx-nav-user-name">${this.config.userName}</span>
                        ` : ''}
                    </div>
                </div>
            </nav>
        `;

        container.innerHTML = navHTML;
    },

    // Render individual nav items
    renderNavItems() {
        return this.navItems.map(item => {
            const isActive = this.config.currentPage === item.id;
            const href = this.config.basePath + item.href;
            const classes = ['dx-nav-link', item.class, isActive ? 'active' : ''].filter(Boolean).join(' ');
            
            return `
                <a href="${href}" class="${classes}">
                    <span>${item.icon}</span>
                    <span>${item.label}</span>
                </a>
            `;
        }).join('');
    },

    // Bind event listeners
    bindEvents() {
        // Mobile toggle
        const mobileToggle = document.getElementById('dx-mobile-toggle');
        const navLinks = document.getElementById('dx-nav-links');
        
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('open');
            });
        }

        // Dark mode toggle
        const darkToggle = document.getElementById('dx-dark-toggle');
        if (darkToggle) {
            darkToggle.addEventListener('click', () => {
                this.toggleDarkMode();
            });
        }

        // Close mobile menu on link click
        const links = document.querySelectorAll('.dx-nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks) navLinks.classList.remove('open');
            });
        });

        // Close mobile menu on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dx-unified-nav') && navLinks) {
                navLinks.classList.remove('open');
            }
        });
    },

    // Initialize dark mode from storage
    initDarkMode() {
        const isDark = localStorage.getItem('dx-dark-mode') === 'true';
        if (isDark) {
            document.documentElement.classList.add('dark');
            this.updateDarkModeUI(true);
        }
    },

    // Toggle dark mode
    toggleDarkMode() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('dx-dark-mode', isDark);
        this.updateDarkModeUI(isDark);
    },

    // Update UI for dark mode
    updateDarkModeUI(isDark) {
        const nav = document.getElementById('dx-unified-nav');
        const toggle = document.getElementById('dx-dark-toggle');
        
        if (nav) {
            nav.classList.toggle('dark', isDark);
        }
        if (toggle) {
            toggle.textContent = isDark ? '☀️' : '🌙';
        }
    },

    // Set active page programmatically
    setActivePage(pageId) {
        this.config.currentPage = pageId;
        const links = document.querySelectorAll('.dx-nav-link');
        links.forEach(link => {
            const item = this.navItems.find(item => link.href.includes(item.href));
            if (item) {
                link.classList.toggle('active', item.id === pageId);
            }
        });
    },

    // Add custom nav item
    addNavItem(item) {
        this.navItems.push(item);
        this.render();
        this.bindEvents();
    },

    // Remove nav item by id
    removeNavItem(id) {
        this.navItems = this.navItems.filter(item => item.id !== id);
        this.render();
        this.bindEvents();
    }
};

// Auto-initialize if container exists on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dx-nav');
    if (container && container.dataset.autoInit !== 'false') {
        // Try to detect current page from URL
        const path = window.location.pathname.toLowerCase();
        let currentPage = 'home';
        
        if (path.includes('mechanism')) currentPage = 'mechanism';
        else if (path.includes('reasondx') || path.includes('training')) currentPage = 'reason';
        else if (path.includes('coachdx')) currentPage = 'coach';
        else if (path.includes('dashboard')) currentPage = 'dashboard';
        else if (path.includes('reference')) currentPage = 'reference';
        
        DxNav.init({ currentPage });
    }
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DxNav;
}
