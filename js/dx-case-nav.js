/**
 * DxSuite Case Navigation System
 * Provides consistent navigation for adventure cases and content pages
 * 
 * Usage: Include this script and call DxCaseNav.init() with config options
 */

const DxCaseNav = {
    config: {
        showBreadcrumb: true,
        showProgress: true,
        showQuickNav: true,
        confirmExit: true,
        parentPage: '../case-browser.html',
        parentName: 'Case Library',
        platformRoot: '../',
        caseTitle: null, // Auto-detected from page title
        currentProgress: 0,
        totalSteps: 0
    },

    // Initialize navigation
    init(options = {}) {
        this.config = { ...this.config, ...options };
        
        // Auto-detect case title from page
        if (!this.config.caseTitle) {
            const titleEl = document.querySelector('title');
            if (titleEl) {
                this.config.caseTitle = titleEl.textContent.split(' - ')[0] || titleEl.textContent;
            }
        }

        // Detect what type of page we're on
        this.detectPageType();
        
        // Inject CSS if not already present
        this.injectStyles();
        
        // Create and insert navigation
        this.createNavigation();
        
        // Add body class for padding
        document.body.classList.add('has-dx-nav');
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Create quick nav if enabled
        if (this.config.showQuickNav) {
            this.createQuickNav();
        }
        
        // Create exit modal
        if (this.config.confirmExit) {
            this.createExitModal();
        }
    },

    detectPageType() {
        const path = window.location.pathname;
        
        if (path.includes('adventure-cases') || path.includes('-expanded') || path.includes('-adventure')) {
            this.pageType = 'adventure-case';
            this.config.parentPage = '../case-browser.html';
            this.config.parentName = 'Cases';
        } else if (path.includes('mechanism') || path.includes('-module')) {
            this.pageType = 'mechanism-module';
            this.config.parentPage = 'index.html';
            this.config.parentName = 'MechanismDx';
        } else if (path.includes('CoachDx') || path.includes('mentor-chat')) {
            this.pageType = 'coach-case';
            this.config.parentPage = 'case-library.html';
            this.config.parentName = 'CoachDx Cases';
        } else if (path.includes('ecg')) {
            this.pageType = 'ecg-tool';
            this.config.parentPage = '../training.html';
            this.config.parentName = 'ReasonDx';
        } else {
            this.pageType = 'general';
        }
    },

    injectStyles() {
        if (document.getElementById('dx-case-nav-styles')) return;
        
        const link = document.createElement('link');
        link.id = 'dx-case-nav-styles';
        link.rel = 'stylesheet';
        link.href = this.getRelativePath('dx-case-nav.css');
        document.head.appendChild(link);
    },

    getRelativePath(filename) {
        const path = window.location.pathname;
        if (path.includes('/cases/')) {
            return '../' + filename;
        } else if (path.includes('/ecg/')) {
            return '../' + filename;
        }
        return filename;
    },

    createNavigation() {
        const nav = document.createElement('div');
        nav.className = 'dx-case-nav';
        nav.id = 'dx-case-nav';
        
        nav.innerHTML = `
            <div class="dx-case-nav-inner">
                <div class="dx-nav-left">
                    <a href="${this.config.parentPage}" class="dx-back-btn" id="dx-back-btn">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                        <span>${this.config.parentName}</span>
                    </a>
                    ${this.config.showBreadcrumb ? this.createBreadcrumb() : ''}
                </div>
                
                ${this.config.showProgress && this.config.totalSteps > 0 ? `
                <div class="dx-nav-center">
                    <div class="dx-progress-mini">
                        <span id="dx-progress-text">${this.config.currentProgress}/${this.config.totalSteps}</span>
                        <div class="dx-progress-bar-mini">
                            <div class="dx-progress-fill-mini" id="dx-progress-fill" style="width: ${(this.config.currentProgress / this.config.totalSteps) * 100}%"></div>
                        </div>
                    </div>
                </div>
                ` : ''}
                
                <div class="dx-nav-right">
                    <div class="dx-menu-dropdown" id="dx-menu">
                        <button class="dx-nav-btn" id="dx-menu-toggle">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            <span>Menu</span>
                        </button>
                        <div class="dx-menu-content">
                            ${this.createMenuContent()}
                        </div>
                    </div>
                    
                    <button class="dx-nav-btn dx-exit-btn" id="dx-exit-btn">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                        <span>Exit</span>
                    </button>
                </div>
            </div>
        `;
        
        document.body.insertBefore(nav, document.body.firstChild);
    },

    createBreadcrumb() {
        const crumbs = [];
        
        // Platform root
        crumbs.push(`<a href="${this.config.platformRoot}index.html">DxSuite</a>`);
        
        // Section based on page type
        if (this.pageType === 'adventure-case') {
            crumbs.push(`<a href="../index.html">ReasonDx</a>`);
            crumbs.push(`<a href="../case-browser.html">Cases</a>`);
        } else if (this.pageType === 'mechanism-module') {
            crumbs.push(`<a href="index.html">MechanismDx</a>`);
        } else if (this.pageType === 'coach-case') {
            crumbs.push(`<a href="index.html">CoachDx</a>`);
        } else if (this.pageType === 'ecg-tool') {
            crumbs.push(`<a href="../index.html">ReasonDx</a>`);
            crumbs.push(`<a href="../training.html">Training</a>`);
        }
        
        // Current page
        if (this.config.caseTitle) {
            crumbs.push(`<span class="dx-breadcrumb-current">${this.truncateTitle(this.config.caseTitle, 30)}</span>`);
        }
        
        return `<div class="dx-breadcrumb">${crumbs.join('<span class="dx-breadcrumb-sep">›</span>')}</div>`;
    },

    createMenuContent() {
        const platformRoot = this.config.platformRoot;
        
        return `
            <div class="dx-menu-section">
                <div class="dx-menu-section-title">Navigate</div>
                <a href="${platformRoot}index.html" class="dx-menu-item">
                    <span class="dx-menu-item-icon">🏠</span>
                    Home
                </a>
                <a href="${this.config.parentPage}" class="dx-menu-item">
                    <span class="dx-menu-item-icon">↩️</span>
                    Back to ${this.config.parentName}
                </a>
            </div>
            
            <div class="dx-menu-section">
                <div class="dx-menu-section-title">Platform</div>
                <a href="${platformRoot}ReasonDx/index.html" class="dx-menu-item">
                    <span class="dx-menu-item-icon">🩺</span>
                    ReasonDx Cases
                </a>
                <a href="${platformRoot}case-browser.html" class="dx-menu-item">
                    <span class="dx-menu-item-icon">⚙️</span>
                    MechanismDx
                </a>
                <a href="${platformRoot}CoachDx/index.html" class="dx-menu-item">
                    <span class="dx-menu-item-icon">🗣️</span>
                    CoachDx
                </a>
            </div>
            
            <div class="dx-menu-section">
                <div class="dx-menu-section-title">Tools</div>
                <a href="${platformRoot}ReasonDx/ecg/ecg-generator.html" class="dx-menu-item">
                    <span class="dx-menu-item-icon">💓</span>
                    ECG Generator
                </a>
                <a href="${platformRoot}#" class="dx-menu-item">
                    <span class="dx-menu-item-icon">📚</span>
                    Reference Library
                </a>
                <a href="${platformRoot}dx-dashboard.html" class="dx-menu-item">
                    <span class="dx-menu-item-icon">📊</span>
                    Dashboard
                </a>
            </div>
        `;
    },

    createQuickNav() {
        const quickNav = document.createElement('div');
        quickNav.className = 'dx-quick-nav';
        quickNav.id = 'dx-quick-nav';
        
        quickNav.innerHTML = `
            <button class="dx-quick-btn" id="dx-quick-toggle">☰</button>
            <div class="dx-quick-menu">
                <a href="${this.config.parentPage}" class="dx-quick-item">
                    <span class="dx-quick-item-icon">↩️</span>
                    Back to ${this.config.parentName}
                </a>
                <a href="${this.config.platformRoot}index.html" class="dx-quick-item">
                    <span class="dx-quick-item-icon">🏠</span>
                    Home
                </a>
                <a href="javascript:location.reload()" class="dx-quick-item">
                    <span class="dx-quick-item-icon">🔄</span>
                    Restart Case
                </a>
            </div>
        `;
        
        document.body.appendChild(quickNav);
    },

    createExitModal() {
        const modal = document.createElement('div');
        modal.className = 'dx-exit-modal';
        modal.id = 'dx-exit-modal';
        
        modal.innerHTML = `
            <div class="dx-exit-modal-content">
                <div class="dx-exit-modal-title">Exit Case?</div>
                <div class="dx-exit-modal-text">
                    Your progress in this case will not be saved. Are you sure you want to exit?
                </div>
                <div class="dx-exit-modal-btns">
                    <button class="dx-exit-modal-btn cancel" id="dx-exit-cancel">Continue Case</button>
                    <button class="dx-exit-modal-btn confirm" id="dx-exit-confirm">Exit</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    },

    setupEventListeners() {
        // Menu toggle
        const menuToggle = document.getElementById('dx-menu-toggle');
        const menu = document.getElementById('dx-menu');
        
        if (menuToggle && menu) {
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                menu.classList.toggle('open');
            });
            
            document.addEventListener('click', (e) => {
                if (!menu.contains(e.target)) {
                    menu.classList.remove('open');
                }
            });
        }
        
        // Quick nav toggle
        const quickToggle = document.getElementById('dx-quick-toggle');
        const quickNav = document.getElementById('dx-quick-nav');
        
        if (quickToggle && quickNav) {
            quickToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                quickNav.classList.toggle('open');
            });
            
            document.addEventListener('click', (e) => {
                if (!quickNav.contains(e.target)) {
                    quickNav.classList.remove('open');
                }
            });
        }
        
        // Exit button
        const exitBtn = document.getElementById('dx-exit-btn');
        if (exitBtn) {
            exitBtn.addEventListener('click', () => {
                if (this.config.confirmExit) {
                    this.showExitModal();
                } else {
                    window.location.href = this.config.parentPage;
                }
            });
        }
        
        // Exit modal buttons
        const exitCancel = document.getElementById('dx-exit-cancel');
        const exitConfirm = document.getElementById('dx-exit-confirm');
        
        if (exitCancel) {
            exitCancel.addEventListener('click', () => this.hideExitModal());
        }
        
        if (exitConfirm) {
            exitConfirm.addEventListener('click', () => {
                window.location.href = this.config.parentPage;
            });
        }
        
        // Close modal on backdrop click
        const exitModal = document.getElementById('dx-exit-modal');
        if (exitModal) {
            exitModal.addEventListener('click', (e) => {
                if (e.target === exitModal) {
                    this.hideExitModal();
                }
            });
        }
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Escape to show exit modal
            if (e.key === 'Escape' && this.config.confirmExit) {
                const modal = document.getElementById('dx-exit-modal');
                if (modal && modal.classList.contains('show')) {
                    this.hideExitModal();
                } else {
                    this.showExitModal();
                }
            }
        });
    },

    showExitModal() {
        const modal = document.getElementById('dx-exit-modal');
        if (modal) {
            modal.classList.add('show');
        }
    },

    hideExitModal() {
        const modal = document.getElementById('dx-exit-modal');
        if (modal) {
            modal.classList.remove('show');
        }
    },

    // Update progress (call this from your case logic)
    updateProgress(current, total) {
        this.config.currentProgress = current;
        this.config.totalSteps = total || this.config.totalSteps;
        
        const progressText = document.getElementById('dx-progress-text');
        const progressFill = document.getElementById('dx-progress-fill');
        
        if (progressText) {
            progressText.textContent = `${current}/${this.config.totalSteps}`;
        }
        
        if (progressFill) {
            progressFill.style.width = `${(current / this.config.totalSteps) * 100}%`;
        }
    },

    truncateTitle(title, maxLength) {
        if (title.length <= maxLength) return title;
        return title.substring(0, maxLength - 3) + '...';
    }
};

// Auto-initialize on DOM ready if data attribute present
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.hasAttribute('data-dx-nav')) {
        const options = {};
        
        // Parse data attributes
        if (document.body.dataset.dxParent) {
            options.parentPage = document.body.dataset.dxParent;
        }
        if (document.body.dataset.dxParentName) {
            options.parentName = document.body.dataset.dxParentName;
        }
        if (document.body.dataset.dxTitle) {
            options.caseTitle = document.body.dataset.dxTitle;
        }
        if (document.body.dataset.dxProgress) {
            const [current, total] = document.body.dataset.dxProgress.split('/');
            options.currentProgress = parseInt(current) || 0;
            options.totalSteps = parseInt(total) || 0;
        }
        
        DxCaseNav.init(options);
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DxCaseNav;
}
