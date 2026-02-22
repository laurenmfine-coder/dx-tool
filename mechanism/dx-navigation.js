// ============================================================================
// DX LEARNING ECOSYSTEM - GLOBAL NAVIGATION COMPONENT
// Last Modified: January 7, 2026
// Author: Lauren Fine, MD, FAAAAI
// ============================================================================

/**
 * Injects the global navigation bar into any page
 * Include this script and call DxNav.init() after DOM is ready
 */

const DxNav = {
    // Configuration - adjust paths based on your deployment structure
    config: {
        // Set basePath based on where the current page is located
        // '' for root, '../' for pages in subfolders
        basePath: '',
        
        // Navigation links
        links: [
            { label: 'Home', href: 'index.html', icon: '🏠' },
            { label: 'ReasonDx', href: 'ReasonDx/index.html', icon: '🩺' },
            { label: 'MechanismDx', href: 'mechanism/index.html', icon: '🔬' },
            { label: 'CoachDx', href: 'CoachDx/index.html', icon: '💬' },
            { label: 'Scoreboard', href: 'unified-scoreboard.html', icon: '📊' },
            { label: 'Fingerprint', href: 'fingerprint-dashboard.html', icon: '🔍' }
        ],
        
        // Specialty hubs (shown in mobile menu)
        specialtyHubs: [
            { label: 'Allergy/Immunology Hub', href: 'allergy-immunology-hub.html', icon: '🛡️' }
        ]
    },
    
    // Search index (populated by search indexer)
    searchIndex: [],
    
    /**
     * Initialize navigation
     * @param {Object} options - Override default config
     */
    init(options = {}) {
        // Merge options with config
        if (options.basePath !== undefined) {
            this.config.basePath = options.basePath;
        }
        
        // Detect basePath from current location if not specified
        if (!options.basePath) {
            this.detectBasePath();
        }
        
        // Inject navigation HTML
        this.injectNavigation();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Mark current page as active
        this.setActivePage();
        
        // Load search index
        this.loadSearchIndex();
    },
    
    /**
     * Detect base path based on current page location
     */
    detectBasePath() {
        const path = window.location.pathname;
        
        if (path.includes('/html/') || path.includes('/ReasonDx/') || 
            path.includes('/CoachDx/') || path.includes('/mechanism/')) {
            this.config.basePath = '../';
        } else {
            this.config.basePath = '';
        }
    },
    
    /**
     * Get full path with base path prepended
     */
    getPath(href) {
        return this.config.basePath + href;
    },
    
    /**
     * Inject navigation HTML into the page
     */
    injectNavigation() {
        const navHTML = `
            <nav class="dx-nav-container" id="dxNavContainer">
                <div class="dx-nav-inner">
                    <a href="${this.getPath('index.html')}" class="dx-logo">
                        <span class="dx-logo-icon">🎯</span>
                        <span>Dx<span> Ecosystem</span></span>
                    </a>
                    
                    <div class="dx-nav-links" id="dxNavLinks">
                        ${this.config.links.map(link => `
                            <a href="${this.getPath(link.href)}" data-nav="${link.label}">${link.label}</a>
                        `).join('')}
                        <button class="dx-search-btn" id="dxSearchBtn" aria-label="Search">🔍</button>
                    </div>
                    
                    <button class="dx-hamburger" id="dxHamburger" aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
            
            <div class="dx-mobile-menu" id="dxMobileMenu">
                <div class="dx-mobile-section-title">Main Navigation</div>
                ${this.config.links.map(link => `
                    <a href="${this.getPath(link.href)}" data-nav="${link.label}">
                        ${link.icon} ${link.label}
                    </a>
                `).join('')}
                
                <div class="dx-mobile-section">
                    <div class="dx-mobile-section-title">Specialty Hubs</div>
                    ${this.config.specialtyHubs.map(hub => `
                        <a href="${this.getPath(hub.href)}">
                            ${hub.icon} ${hub.label}
                        </a>
                    `).join('')}
                </div>
                
                <div class="dx-mobile-section">
                    <div class="dx-mobile-section-title">Quick Actions</div>
                    <a href="#" id="dxMobileSearch">🔍 Search All Content</a>
                </div>
            </div>
            
            <div class="dx-search-modal" id="dxSearchModal">
                <div class="dx-search-container">
                    <div class="dx-search-input-wrapper">
                        <span class="dx-search-icon">🔍</span>
                        <input type="text" 
                               class="dx-search-input" 
                               id="dxSearchInput" 
                               placeholder="Search cases, modules, topics..."
                               autocomplete="off">
                        <button class="dx-search-close" id="dxSearchClose">&times;</button>
                    </div>
                    <div class="dx-search-results" id="dxSearchResults">
                        <p style="padding: 20px; color: #94a3b8; text-align: center;">
                            Start typing to search...
                        </p>
                    </div>
                </div>
            </div>
        `;
        
        // Insert at start of body
        document.body.insertAdjacentHTML('afterbegin', navHTML);
        
        // Add CSS if not already present
        if (!document.getElementById('dxNavStyles')) {
            const link = document.createElement('link');
            link.id = 'dxNavStyles';
            link.rel = 'stylesheet';
            link.href = this.getPath('dx-responsive.css');
            document.head.appendChild(link);
        }
    },
    
    /**
     * Set up event listeners
     */
    setupEventListeners() {
        // Hamburger menu toggle
        const hamburger = document.getElementById('dxHamburger');
        const mobileMenu = document.getElementById('dxMobileMenu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        });
        
        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Search modal
        const searchBtn = document.getElementById('dxSearchBtn');
        const mobileSearch = document.getElementById('dxMobileSearch');
        const searchModal = document.getElementById('dxSearchModal');
        const searchClose = document.getElementById('dxSearchClose');
        const searchInput = document.getElementById('dxSearchInput');
        
        const openSearch = () => {
            searchModal.classList.add('open');
            searchInput.focus();
            // Close mobile menu if open
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.classList.remove('menu-open');
        };
        
        const closeSearch = () => {
            searchModal.classList.remove('open');
            searchInput.value = '';
            document.getElementById('dxSearchResults').innerHTML = `
                <p style="padding: 20px; color: #94a3b8; text-align: center;">
                    Start typing to search...
                </p>
            `;
        };
        
        searchBtn.addEventListener('click', openSearch);
        mobileSearch.addEventListener('click', (e) => {
            e.preventDefault();
            openSearch();
        });
        searchClose.addEventListener('click', closeSearch);
        
        // Close modal on backdrop click
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                closeSearch();
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeSearch();
            }
            // Open search with Cmd/Ctrl + K
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                openSearch();
            }
        });
        
        // Search input handler with debounce
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value);
            }, 200);
        });
    },
    
    /**
     * Mark the current page as active in navigation
     */
    setActivePage() {
        const currentPath = window.location.pathname;
        
        document.querySelectorAll('[data-nav]').forEach(link => {
            const href = link.getAttribute('href');
            if (currentPath.includes(href) || 
                (href === 'index.html' && currentPath.endsWith('/'))) {
                link.classList.add('active');
            }
        });
    },
    
    /**
     * Load the search index
     */
    async loadSearchIndex() {
        try {
            // Try to load pre-built search index
            const response = await fetch(this.getPath('dx-search-index.json'));
            if (response.ok) {
                this.searchIndex = await response.json();
            }
        } catch (e) {
            // Use fallback minimal index
            this.searchIndex = this.getFallbackIndex();
        }
    },
    
    /**
     * Get fallback search index if JSON not available
     */
    getFallbackIndex() {
        return [
            // MechanismDx modules
            { title: 'Sepsis & Shock', type: 'MechanismDx', href: 'sepsis-shock-module.html', keywords: 'sepsis shock critical care vasopressor lactate' },
            { title: 'ACS & STEMI', type: 'MechanismDx', href: 'acs-module.html', keywords: 'acs stemi nstemi troponin chest pain cardiac' },
            { title: 'Heart Failure', type: 'MechanismDx', href: 'hf-module.html', keywords: 'heart failure chf hfref hfpef bnp ejection fraction' },
            { title: 'Pneumonia', type: 'MechanismDx', href: 'pneumonia-module.html', keywords: 'pneumonia cap hap vap respiratory infection' },
            { title: 'Stroke', type: 'MechanismDx', href: 'stroke-module.html', keywords: 'stroke cva tpa thrombectomy ischemic hemorrhagic' },
            { title: 'DKA & Diabetes', type: 'MechanismDx', href: 'diabetes-dka-module.html', keywords: 'dka diabetes ketoacidosis insulin glucose' },
            { title: 'AKI', type: 'MechanismDx', href: 'aki-module.html', keywords: 'aki acute kidney injury creatinine gfr renal' },
            { title: 'Hyponatremia', type: 'MechanismDx', href: 'hyponatremia-module.html', keywords: 'hyponatremia sodium siadh osmolality' },
            { title: 'Potassium Disorders', type: 'MechanismDx', href: 'potassium-module.html', keywords: 'potassium hyperkalemia hypokalemia ecg' },
            { title: 'Type I Hypersensitivity', type: 'MechanismDx', href: 'type1-hypersensitivity.html', keywords: 'allergy ige mast cell anaphylaxis hypersensitivity' },
            { title: 'Allergy & Immunology', type: 'MechanismDx', href: 'allergy-immunology.html', keywords: 'allergy immunology immunodeficiency' },
            
            // Specialty hubs
            { title: 'Allergy/Immunology Hub', type: 'Hub', href: 'allergy-immunology-hub.html', keywords: 'allergy immunology specialty hub' },
            
            // CoachDx
            { title: 'Anaphylaxis Workup', type: 'CoachDx', href: 'CoachDx/mentor-chat.html?case=ai-anaphylaxis-workup', keywords: 'anaphylaxis allergy reaction epinephrine' },
            { title: 'Drug Allergy Evaluation', type: 'CoachDx', href: 'CoachDx/mentor-chat.html?case=ai-drug-allergy-delabeling', keywords: 'drug allergy penicillin delabeling' },
            { title: 'CVID Case', type: 'CoachDx', href: 'CoachDx/mentor-chat.html?case=ai-cvid-evaluation', keywords: 'cvid immunodeficiency recurrent infection' },
            
            // ReasonDx cases
            { title: 'Chest Pain Cases', type: 'ReasonDx', href: 'ReasonDx/training.html?category=chest-pain', keywords: 'chest pain acs angina mi cardiac' },
            { title: 'Dyspnea Cases', type: 'ReasonDx', href: 'ReasonDx/training.html?category=dyspnea', keywords: 'dyspnea shortness of breath respiratory' },
            { title: 'Abdominal Pain Cases', type: 'ReasonDx', href: 'ReasonDx/training.html?category=abdominal-pain', keywords: 'abdominal pain gi appendicitis' }
        ];
    },
    
    /**
     * Perform search and display results
     */
    performSearch(query) {
        const resultsContainer = document.getElementById('dxSearchResults');
        
        if (!query || query.length < 2) {
            resultsContainer.innerHTML = `
                <p style="padding: 20px; color: #94a3b8; text-align: center;">
                    Start typing to search...
                </p>
            `;
            return;
        }
        
        const queryLower = query.toLowerCase();
        const results = this.searchIndex.filter(item => {
            return item.title.toLowerCase().includes(queryLower) ||
                   (item.keywords && item.keywords.toLowerCase().includes(queryLower));
        }).slice(0, 10);
        
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <p style="padding: 20px; color: #94a3b8; text-align: center;">
                    No results found for "${query}"
                </p>
            `;
            return;
        }
        
        resultsContainer.innerHTML = results.map(item => `
            <a href="${this.getPath(item.href)}" class="dx-search-result-item">
                <div>
                    <span class="dx-search-result-type">${item.type}</span>
                    <span class="dx-search-result-title">${item.title}</span>
                </div>
                ${item.description ? `<div class="dx-search-result-desc">${item.description}</div>` : ''}
            </a>
        `).join('');
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => DxNav.init());
} else {
    DxNav.init();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DxNav;
}
