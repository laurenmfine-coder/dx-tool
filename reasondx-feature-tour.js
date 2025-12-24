// ============================================================
// ReasonDx Interactive Feature Tour & Demo Walkthrough
// ============================================================
// Matches the clean, minimal ReasonDx aesthetic
// Uses Tailwind-compatible zinc/indigo color scheme

const ReasonDxFeatureTour = (function() {
    
    const STORAGE_KEY = 'reasondx_feature_tour_completed';
    const TOUR_VERSION = '1.0';
    
    // ============================================================
    // TOUR SLIDES - Matching ReasonDx content
    // ============================================================
    
    const tourSlides = [
        {
            id: 'welcome',
            title: 'Welcome to ReasonDx',
            subtitle: 'Clinical Reasoning Training Platform',
            icon: '🏥',
            content: `
                <p>ReasonDx helps you develop expert-level clinical reasoning through 
                <strong>200+ interactive patient cases</strong>.</p>
                <p class="tour-muted">This quick tour shows you how to get the most out of the platform. Takes about 2 minutes.</p>
            `,
            features: [
                { icon: '🎯', text: 'Practice clinical reasoning with real cases' },
                { icon: '📊', text: 'Track your progress and identify weak areas' },
                { icon: '🏆', text: 'Earn XP and achievements as you learn' },
                { icon: '📚', text: 'Access integrated study resources' }
            ]
        },
        {
            id: 'case-selection',
            title: 'Choosing a Case',
            subtitle: 'Browse 200+ Clinical Scenarios',
            icon: '📋',
            content: `<p>Start by selecting a case from the <strong>Case Library</strong>. Cases are organized by:</p>`,
            features: [
                { icon: '🏷️', text: '<strong>Organ System</strong> — Cardiology, Pulmonary, GI, etc.' },
                { icon: '📈', text: '<strong>Difficulty</strong> — Beginner → Expert' },
                { icon: '⚡', text: '<strong>Challenge Type</strong> — Standard, Timed, Mystery' },
                { icon: '🔍', text: '<strong>Search</strong> — Find specific topics quickly' }
            ],
            tip: 'New users: Start with "Beginner" cases to learn the workflow!'
        },
        {
            id: 'patient-presentation',
            title: 'Patient Presentation',
            subtitle: 'Gather the Chief Complaint',
            icon: '👤',
            content: `<p>Each case begins with a <strong>patient presentation</strong> — just like in real clinical practice.</p>`,
            features: [
                { icon: '📍', text: 'Presenting complaint and setting (ED, clinic, etc.)' },
                { icon: '⏱️', text: 'Duration and acuity of symptoms' },
                { icon: '🎯', text: 'Key details that guide your initial thinking' },
                { icon: '🎤', text: 'Practice your oral presentation skills' }
            ],
            tip: 'Pay attention to red flags and time course — they matter!'
        },
        {
            id: 'history-taking',
            title: 'History Taking',
            subtitle: 'Ask the Right Questions',
            icon: '📝',
            content: `<p>Take a thorough history using <strong>OLDCARTS</strong> and explore relevant past medical, social, and family history.</p>`,
            features: [
                { icon: '🔍', text: '<strong>Search</strong> for questions or browse categories' },
                { icon: '⭐', text: '<strong>Essential vs. Supporting</strong> questions identified' },
                { icon: '💰', text: '<strong>Time cost</strong> — be efficient like real practice' },
                { icon: '📊', text: '<strong>Scoring</strong> — get credit for thorough history' }
            ],
            tip: 'Don\'t just shotgun questions — think about what you need to know!'
        },
        {
            id: 'physical-exam',
            title: 'Physical Examination',
            subtitle: 'Focused & Systematic',
            icon: '🩺',
            content: `<p>Perform a <strong>targeted physical exam</strong> based on your differential diagnosis.</p>`,
            features: [
                { icon: '🔬', text: 'Select exam maneuvers by body system' },
                { icon: '📋', text: 'Receive realistic findings (normal and abnormal)' },
                { icon: '⚖️', text: 'Balance thoroughness with efficiency' },
                { icon: '🎯', text: 'Key findings linked to diagnoses' }
            ],
            tip: 'A good clinician knows which exam findings will change management!'
        },
        {
            id: 'workup',
            title: 'Diagnostic Workup',
            subtitle: 'Labs, Imaging & Procedures',
            icon: '🧪',
            content: `<p>Order the <strong>right tests</strong> to confirm or rule out your differential diagnoses.</p>`,
            features: [
                { icon: '🧪', text: '<strong>200+ lab tests</strong> with realistic results' },
                { icon: '📷', text: '<strong>150+ imaging studies</strong> with findings' },
                { icon: '💉', text: 'Procedures when indicated' },
                { icon: '💰', text: '<strong>Cost awareness</strong> — healthcare isn\'t free!' }
            ],
            tip: 'Order tests that will change your management, not just "everything"!'
        },
        {
            id: 'differential',
            title: 'Differential Diagnosis',
            subtitle: 'Rank Your Diagnoses',
            icon: '🧠',
            content: `<p>Build and <strong>rank your differential</strong> based on all the information you've gathered.</p>`,
            features: [
                { icon: '📊', text: '<strong>Drag to rank</strong> from most to least likely' },
                { icon: '🚨', text: '<strong>Must-not-miss</strong> diagnoses flagged' },
                { icon: '🎖️', text: '<strong>Tiered scoring</strong> — partial credit for good thinking' },
                { icon: '💡', text: '<strong>Suggest additions</strong> — help improve the platform!' }
            ],
            tip: 'Always include "can\'t miss" diagnoses even if less likely!'
        },
        {
            id: 'scoring',
            title: 'Scoring & Feedback',
            subtitle: 'Learn from Every Case',
            icon: '📊',
            content: `<p>After each case, receive <strong>detailed feedback</strong> on your clinical reasoning.</p>`,
            features: [
                { icon: '✅', text: 'What you did well' },
                { icon: '📈', text: 'Areas for improvement' },
                { icon: '🔗', text: 'Links to related learning resources' },
                { icon: '📚', text: 'Expert reasoning pathway comparison' }
            ],
            tip: 'Review the "missed" items — that\'s where the real learning happens!'
        },
        {
            id: 'gamification',
            title: 'Gamification & Progress',
            subtitle: 'Level Up Your Skills',
            icon: '🎮',
            content: `<p>Stay motivated with <strong>XP, achievements, and streaks</strong>!</p>`,
            features: [
                { icon: '⚡', text: '<strong>XP System</strong> — earn points for every action' },
                { icon: '🔥', text: '<strong>Daily Streaks</strong> — consistency builds mastery' },
                { icon: '🏅', text: '<strong>Achievements</strong> — unlock badges for milestones' },
                { icon: '📊', text: '<strong>Leaderboards</strong> — see how you compare' }
            ],
            tip: 'Try to maintain a daily streak — even 1 case per day adds up!'
        },
        {
            id: 'study-hub',
            title: 'Study Hub',
            subtitle: 'Your Personal Learning Center',
            icon: '📚',
            content: `<p>Access integrated <strong>study resources</strong> including Bates' Guide content and AI-powered tools.</p>`,
            features: [
                { icon: '📕', text: '<strong>Bates\' Guide</strong> chapters on history & physical' },
                { icon: '🤖', text: '<strong>AI Study Tools</strong> — generate flashcards, summaries' },
                { icon: '📤', text: '<strong>Upload your materials</strong> — integrate your notes' },
                { icon: '🃏', text: '<strong>Anki integration</strong> — export flashcards' }
            ],
            tip: 'Use Study Hub to review before tackling difficult cases!'
        },
        {
            id: 'special-features',
            title: 'Special Features',
            subtitle: 'Advanced Learning Tools',
            icon: '✨',
            content: `<p>Explore these <strong>additional features</strong> to enhance your learning:</p>`,
            features: [
                { icon: '👨‍⚕️', text: '<strong>Consult System</strong> — know when to call for help' },
                { icon: '⏱️', text: '<strong>Challenge Mode</strong> — timed cases for exam prep' },
                { icon: '🔬', text: '<strong>SBAR Practice</strong> — master clinical communication' },
                { icon: '🌍', text: '<strong>Environmental Medicine</strong> — occupational exposures' }
            ],
            tip: 'Challenge Mode is great prep for shelf exams and boards!'
        },
        {
            id: 'get-started',
            title: 'You\'re Ready!',
            subtitle: 'Start Your First Case',
            icon: '🚀',
            content: `
                <p>That's it! You now know how to use <strong>ReasonDx</strong>.</p>
                <p class="tour-muted">Remember: The goal isn't to get everything right — it's to 
                <strong>develop your clinical reasoning</strong> through practice.</p>
            `,
            features: [
                { icon: '✅', text: 'Start with a Beginner case to learn the flow' },
                { icon: '✅', text: 'Don\'t rush — think through each step' },
                { icon: '✅', text: 'Review feedback to learn from mistakes' },
                { icon: '✅', text: 'Come back daily to build your streak!' }
            ],
            finalNote: 'Questions? Click the <strong>❓ Help</strong> button anytime to see this tour again.'
        }
    ];
    
    // ============================================================
    // STATE
    // ============================================================
    
    let currentSlide = 0;
    let isOpen = false;
    
    // ============================================================
    // STORAGE
    // ============================================================
    
    function hasCompletedTour() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) return false;
            const data = JSON.parse(stored);
            return data.version === TOUR_VERSION && data.completed === true;
        } catch (e) {
            return false;
        }
    }
    
    function markTourCompleted() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                completed: true,
                version: TOUR_VERSION,
                completedAt: new Date().toISOString()
            }));
        } catch (e) {
            console.warn('Could not save tour completion state');
        }
    }
    
    function resetTourState() {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (e) {
            console.warn('Could not reset tour state');
        }
    }
    
    // ============================================================
    // UI - Matching ReasonDx Clean Aesthetic
    // ============================================================
    
    function createTourOverlay() {
        const existing = document.getElementById('reasondx-tour-overlay');
        if (existing) existing.remove();
        
        const overlay = document.createElement('div');
        overlay.id = 'reasondx-tour-overlay';
        overlay.innerHTML = `
            <style>
                #reasondx-tour-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(24, 24, 27, 0.8);
                    backdrop-filter: blur(4px);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 16px;
                    animation: tourFadeIn 0.2s ease;
                    font-family: 'Inter', system-ui, sans-serif;
                }
                
                @keyframes tourFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                .tour-modal {
                    background: white;
                    border-radius: 16px;
                    max-width: 520px;
                    width: 100%;
                    max-height: 85vh;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    animation: tourSlideUp 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }
                
                .dark .tour-modal {
                    background: #18181b;
                    border: 1px solid #27272a;
                }
                
                @keyframes tourSlideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .tour-header {
                    padding: 24px 24px 20px;
                    border-bottom: 1px solid #e4e4e7;
                    position: relative;
                }
                
                .dark .tour-header {
                    border-color: #27272a;
                }
                
                .tour-icon {
                    font-size: 2.5rem;
                    margin-bottom: 12px;
                    display: block;
                }
                
                .tour-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #18181b;
                    margin: 0 0 4px 0;
                    line-height: 1.3;
                }
                
                .dark .tour-title {
                    color: #fafafa;
                }
                
                .tour-subtitle {
                    font-size: 0.875rem;
                    color: #71717a;
                    margin: 0;
                }
                
                .dark .tour-subtitle {
                    color: #a1a1aa;
                }
                
                .tour-close {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: #f4f4f5;
                    border: none;
                    color: #71717a;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1.25rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.15s;
                }
                
                .tour-close:hover {
                    background: #e4e4e7;
                    color: #18181b;
                }
                
                .dark .tour-close {
                    background: #27272a;
                    color: #a1a1aa;
                }
                
                .dark .tour-close:hover {
                    background: #3f3f46;
                    color: #fafafa;
                }
                
                .tour-body {
                    padding: 20px 24px;
                    flex: 1;
                    overflow-y: auto;
                }
                
                .tour-content {
                    color: #3f3f46;
                    line-height: 1.6;
                    font-size: 0.9375rem;
                }
                
                .tour-content p {
                    margin: 0 0 12px 0;
                }
                
                .tour-content p:last-child {
                    margin-bottom: 0;
                }
                
                .dark .tour-content {
                    color: #d4d4d8;
                }
                
                .tour-muted {
                    color: #71717a !important;
                    font-size: 0.875rem !important;
                }
                
                .dark .tour-muted {
                    color: #a1a1aa !important;
                }
                
                .tour-features {
                    list-style: none;
                    padding: 0;
                    margin: 16px 0 0 0;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                
                .tour-feature {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 10px 12px;
                    background: #f4f4f5;
                    border-radius: 10px;
                    font-size: 0.875rem;
                    color: #3f3f46;
                    line-height: 1.5;
                }
                
                .dark .tour-feature {
                    background: #27272a;
                    color: #d4d4d8;
                }
                
                .tour-feature-icon {
                    flex-shrink: 0;
                    font-size: 1rem;
                }
                
                .tour-tip {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    background: #fef3c7;
                    border-left: 3px solid #f59e0b;
                    border-radius: 0 8px 8px 0;
                    padding: 12px 14px;
                    margin-top: 16px;
                    font-size: 0.8125rem;
                    color: #92400e;
                    line-height: 1.5;
                }
                
                .dark .tour-tip {
                    background: rgba(245, 158, 11, 0.15);
                    color: #fcd34d;
                }
                
                .tour-final-note {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    background: #eff6ff;
                    border-left: 3px solid #3b82f6;
                    border-radius: 0 8px 8px 0;
                    padding: 12px 14px;
                    margin-top: 16px;
                    font-size: 0.8125rem;
                    color: #1e40af;
                    line-height: 1.5;
                }
                
                .dark .tour-final-note {
                    background: rgba(59, 130, 246, 0.15);
                    color: #93c5fd;
                }
                
                .tour-footer {
                    padding: 16px 24px;
                    background: #fafafa;
                    border-top: 1px solid #e4e4e7;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                }
                
                .dark .tour-footer {
                    background: #0f0f10;
                    border-color: #27272a;
                }
                
                .tour-dots {
                    display: flex;
                    gap: 6px;
                    flex-wrap: wrap;
                }
                
                .tour-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #d4d4d8;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    transition: all 0.15s;
                }
                
                .tour-dot:hover:not(.active) {
                    background: #a1a1aa;
                }
                
                .tour-dot.active {
                    background: #18181b;
                    transform: scale(1.25);
                }
                
                .dark .tour-dot {
                    background: #52525b;
                }
                
                .dark .tour-dot:hover:not(.active) {
                    background: #71717a;
                }
                
                .dark .tour-dot.active {
                    background: #fafafa;
                }
                
                .tour-nav {
                    display: flex;
                    gap: 8px;
                }
                
                .tour-btn {
                    padding: 10px 20px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 0.875rem;
                    transition: all 0.15s;
                    font-family: inherit;
                }
                
                .tour-btn-secondary {
                    background: #f4f4f5;
                    color: #3f3f46;
                }
                
                .tour-btn-secondary:hover {
                    background: #e4e4e7;
                }
                
                .dark .tour-btn-secondary {
                    background: #27272a;
                    color: #d4d4d8;
                }
                
                .dark .tour-btn-secondary:hover {
                    background: #3f3f46;
                }
                
                .tour-btn-primary {
                    background: #18181b;
                    color: white;
                }
                
                .tour-btn-primary:hover {
                    background: #27272a;
                }
                
                .dark .tour-btn-primary {
                    background: #fafafa;
                    color: #18181b;
                }
                
                .dark .tour-btn-primary:hover {
                    background: #e4e4e7;
                }
                
                .tour-btn-success {
                    background: #10b981;
                    color: white;
                }
                
                .tour-btn-success:hover {
                    background: #059669;
                }
                
                .tour-checkbox-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 16px;
                    padding-top: 16px;
                    border-top: 1px solid #e4e4e7;
                }
                
                .dark .tour-checkbox-row {
                    border-color: #27272a;
                }
                
                .tour-checkbox-row input[type="checkbox"] {
                    width: 16px;
                    height: 16px;
                    cursor: pointer;
                    accent-color: #18181b;
                }
                
                .tour-checkbox-row label {
                    color: #71717a;
                    font-size: 0.8125rem;
                    cursor: pointer;
                    user-select: none;
                }
                
                .dark .tour-checkbox-row label {
                    color: #a1a1aa;
                }
                
                .tour-skip {
                    color: #a1a1aa;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 0.75rem;
                    padding: 4px 8px;
                    transition: color 0.15s;
                    font-family: inherit;
                }
                
                .tour-skip:hover {
                    color: #71717a;
                }
                
                .dark .tour-skip:hover {
                    color: #d4d4d8;
                }
                
                .tour-progress {
                    font-size: 0.75rem;
                    color: #a1a1aa;
                    margin-right: auto;
                }
                
                @media (max-width: 480px) {
                    .tour-modal {
                        max-height: 90vh;
                    }
                    
                    .tour-header {
                        padding: 20px 20px 16px;
                    }
                    
                    .tour-body {
                        padding: 16px 20px;
                    }
                    
                    .tour-footer {
                        padding: 12px 20px;
                        flex-wrap: wrap;
                    }
                    
                    .tour-dots {
                        order: 3;
                        width: 100%;
                        justify-content: center;
                        margin-top: 8px;
                    }
                    
                    .tour-nav {
                        flex: 1;
                    }
                    
                    .tour-btn {
                        flex: 1;
                        text-align: center;
                    }
                }
            </style>
            
            <div class="tour-modal" role="dialog" aria-modal="true" aria-labelledby="tour-title">
                <div class="tour-header">
                    <button class="tour-close" onclick="ReasonDxFeatureTour.close()" aria-label="Close tour">×</button>
                    <span class="tour-icon" id="tour-icon"></span>
                    <h2 class="tour-title" id="tour-title"></h2>
                    <p class="tour-subtitle" id="tour-subtitle"></p>
                </div>
                
                <div class="tour-body">
                    <div class="tour-content" id="tour-content"></div>
                    <ul class="tour-features" id="tour-features"></ul>
                    <div id="tour-tip"></div>
                    <div id="tour-final-note"></div>
                    <div id="tour-checkbox"></div>
                </div>
                
                <div class="tour-footer">
                    <button class="tour-skip" onclick="ReasonDxFeatureTour.skip()">Skip tour</button>
                    <span class="tour-progress" id="tour-progress"></span>
                    <div class="tour-dots" id="tour-dots"></div>
                    <div class="tour-nav">
                        <button class="tour-btn tour-btn-secondary" id="tour-prev" onclick="ReasonDxFeatureTour.prev()">Back</button>
                        <button class="tour-btn tour-btn-primary" id="tour-next" onclick="ReasonDxFeatureTour.next()">Next</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Check for dark mode
        if (document.body.classList.contains('dark-mode') || document.documentElement.classList.contains('dark')) {
            overlay.querySelector('.tour-modal').classList.add('dark');
        }
        
        return overlay;
    }
    
    function renderSlide() {
        const slide = tourSlides[currentSlide];
        const isFirst = currentSlide === 0;
        const isLast = currentSlide === tourSlides.length - 1;
        
        // Header
        document.getElementById('tour-icon').textContent = slide.icon;
        document.getElementById('tour-title').textContent = slide.title;
        document.getElementById('tour-subtitle').textContent = slide.subtitle;
        
        // Content
        document.getElementById('tour-content').innerHTML = slide.content;
        
        // Features
        const featuresEl = document.getElementById('tour-features');
        if (slide.features && slide.features.length > 0) {
            featuresEl.innerHTML = slide.features.map(f => `
                <li class="tour-feature">
                    <span class="tour-feature-icon">${f.icon}</span>
                    <span>${f.text}</span>
                </li>
            `).join('');
            featuresEl.style.display = 'flex';
        } else {
            featuresEl.style.display = 'none';
        }
        
        // Tip
        const tipEl = document.getElementById('tour-tip');
        if (slide.tip) {
            tipEl.innerHTML = `<div class="tour-tip"><span>💡</span><span>${slide.tip}</span></div>`;
        } else {
            tipEl.innerHTML = '';
        }
        
        // Final note
        const finalNoteEl = document.getElementById('tour-final-note');
        if (slide.finalNote) {
            finalNoteEl.innerHTML = `<div class="tour-final-note"><span>💬</span><span>${slide.finalNote}</span></div>`;
        } else {
            finalNoteEl.innerHTML = '';
        }
        
        // Checkbox on last slide
        const checkboxEl = document.getElementById('tour-checkbox');
        if (isLast) {
            checkboxEl.innerHTML = `
                <div class="tour-checkbox-row">
                    <input type="checkbox" id="tour-dont-show" checked>
                    <label for="tour-dont-show">Don't show this tour again</label>
                </div>
            `;
        } else {
            checkboxEl.innerHTML = '';
        }
        
        // Progress
        document.getElementById('tour-progress').textContent = `${currentSlide + 1} of ${tourSlides.length}`;
        
        // Dots
        const dotsEl = document.getElementById('tour-dots');
        dotsEl.innerHTML = tourSlides.map((_, i) => 
            `<button class="tour-dot ${i === currentSlide ? 'active' : ''}" 
                     onclick="ReasonDxFeatureTour.goTo(${i})" 
                     aria-label="Go to slide ${i + 1}"></button>`
        ).join('');
        
        // Navigation
        const prevBtn = document.getElementById('tour-prev');
        const nextBtn = document.getElementById('tour-next');
        
        prevBtn.style.display = isFirst ? 'none' : 'block';
        
        if (isLast) {
            nextBtn.textContent = 'Get Started';
            nextBtn.className = 'tour-btn tour-btn-success';
        } else {
            nextBtn.textContent = 'Next';
            nextBtn.className = 'tour-btn tour-btn-primary';
        }
    }
    
    // ============================================================
    // PUBLIC API
    // ============================================================
    
    function open(forceShow = false) {
        if (!forceShow && hasCompletedTour()) {
            return false;
        }
        
        currentSlide = 0;
        isOpen = true;
        createTourOverlay();
        renderSlide();
        document.body.style.overflow = 'hidden';
        return true;
    }
    
    function close() {
        const overlay = document.getElementById('reasondx-tour-overlay');
        if (overlay) overlay.remove();
        isOpen = false;
        document.body.style.overflow = '';
    }
    
    function next() {
        if (currentSlide < tourSlides.length - 1) {
            currentSlide++;
            renderSlide();
        } else {
            const dontShowCheckbox = document.getElementById('tour-dont-show');
            if (dontShowCheckbox && dontShowCheckbox.checked) {
                markTourCompleted();
            }
            close();
        }
    }
    
    function prev() {
        if (currentSlide > 0) {
            currentSlide--;
            renderSlide();
        }
    }
    
    function goTo(slideIndex) {
        if (slideIndex >= 0 && slideIndex < tourSlides.length) {
            currentSlide = slideIndex;
            renderSlide();
        }
    }
    
    function skip() {
        markTourCompleted();
        close();
    }
    
    function reset() {
        resetTourState();
    }
    
    // ============================================================
    // HELP BUTTON - Minimal style matching ReasonDx
    // ============================================================
    
    function createHelpButton() {
        if (document.getElementById('rdx-tour-help-btn')) return;
        
        const helpBtn = document.createElement('button');
        helpBtn.id = 'rdx-tour-help-btn';
        helpBtn.innerHTML = '?';
        helpBtn.title = 'Platform Tour';
        helpBtn.setAttribute('aria-label', 'Open feature tour');
        
        helpBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: #18181b;
            color: white;
            border: none;
            font-size: 1.25rem;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            transition: all 0.2s ease;
            font-family: 'Inter', system-ui, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        helpBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
        });
        
        helpBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });
        
        helpBtn.addEventListener('click', () => open(true));
        
        document.body.appendChild(helpBtn);
        
        // Update for dark mode
        const updateDarkMode = () => {
            const isDark = document.body.classList.contains('dark-mode') || document.documentElement.classList.contains('dark');
            helpBtn.style.background = isDark ? '#fafafa' : '#18181b';
            helpBtn.style.color = isDark ? '#18181b' : 'white';
        };
        
        updateDarkMode();
        
        // Watch for dark mode changes
        const observer = new MutationObserver(updateDarkMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    }
    
    // ============================================================
    // AUTO-INIT
    // ============================================================
    
    function autoInit() {
        if (!hasCompletedTour()) {
            setTimeout(() => open(), 800);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            createHelpButton();
            autoInit();
        });
    } else {
        createHelpButton();
        autoInit();
    }
    
    return {
        open,
        close,
        next,
        prev,
        goTo,
        skip,
        reset,
        hasCompleted: hasCompletedTour,
        createHelpButton
    };
    
})();

window.ReasonDxFeatureTour = ReasonDxFeatureTour;
