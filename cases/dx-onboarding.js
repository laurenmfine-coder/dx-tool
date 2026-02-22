/**
 * Dx Learning Ecosystem - First-Time User Onboarding
 * Shows a welcome flow for new users to maximize engagement
 */

const DxOnboarding = {
    STORAGE_KEY: 'dx_onboarding_complete',
    
    steps: [
        {
            id: 'welcome',
            icon: '👋',
            title: 'Welcome to Dx Learning Ecosystem!',
            text: 'Master clinical reasoning with interactive cases, pathophysiology modules, and AI coaching.',
            cta: 'Get Started'
        },
        {
            id: 'level',
            icon: '🎓',
            title: 'What\'s your level?',
            text: 'Help us personalize your experience.',
            options: [
                { value: 'ms1', label: 'MS1 - First Year' },
                { value: 'ms2', label: 'MS2 - Second Year' },
                { value: 'ms3', label: 'MS3 - Clinical Rotations' },
                { value: 'ms4', label: 'MS4 - Fourth Year' },
                { value: 'resident', label: 'Resident' },
                { value: 'other', label: 'Other Healthcare Professional' }
            ],
            cta: 'Continue'
        },
        {
            id: 'features',
            icon: '✨',
            title: 'Three Ways to Learn',
            features: [
                { icon: '🔬', name: 'ReasonDx', desc: 'Practice with real clinical cases' },
                { icon: '📚', name: 'MechanismDx', desc: 'Master the pathophysiology' },
                { icon: '🧠', name: 'CoachDx', desc: 'Get AI-powered feedback' }
            ],
            cta: 'Next'
        },
        {
            id: 'gamification',
            icon: '🏆',
            title: 'Track Your Progress',
            text: 'Earn XP, maintain streaks, and unlock achievements as you learn. See your growth over time!',
            cta: 'Start Learning!'
        }
    ],
    
    currentStep: 0,
    userLevel: null,
    
    shouldShow() {
        return !localStorage.getItem(this.STORAGE_KEY);
    },
    
    init() {
        if (!this.shouldShow()) return;
        this.render();
        this.show();
    },
    
    render() {
        const overlay = document.createElement('div');
        overlay.id = 'dx-onboarding-overlay';
        overlay.innerHTML = `
            <style>
                #dx-onboarding-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }
                #dx-onboarding-overlay.visible {
                    opacity: 1;
                    visibility: visible;
                }
                .dx-onboarding-modal {
                    background: white;
                    border-radius: 24px;
                    padding: 48px;
                    max-width: 480px;
                    width: 90%;
                    text-align: center;
                    transform: scale(0.9) translateY(20px);
                    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }
                #dx-onboarding-overlay.visible .dx-onboarding-modal {
                    transform: scale(1) translateY(0);
                }
                .dx-onboarding-icon {
                    font-size: 64px;
                    margin-bottom: 24px;
                    animation: dx-bounce-in 0.6s ease-out;
                }
                @keyframes dx-bounce-in {
                    0% { transform: scale(0); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
                .dx-onboarding-title {
                    font-size: 28px;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 16px;
                    font-family: 'Inter', -apple-system, sans-serif;
                }
                .dx-onboarding-text {
                    font-size: 16px;
                    color: #64748b;
                    margin-bottom: 32px;
                    line-height: 1.6;
                    font-family: 'Inter', -apple-system, sans-serif;
                }
                .dx-onboarding-options {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    margin-bottom: 32px;
                }
                .dx-onboarding-option {
                    padding: 14px 16px;
                    border: 2px solid #e2e8f0;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-size: 14px;
                    font-weight: 500;
                    color: #475569;
                    background: white;
                    font-family: 'Inter', -apple-system, sans-serif;
                }
                .dx-onboarding-option:hover {
                    border-color: #3b82f6;
                    background: #eff6ff;
                }
                .dx-onboarding-option.selected {
                    border-color: #3b82f6;
                    background: #3b82f6;
                    color: white;
                }
                .dx-onboarding-features {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    margin-bottom: 32px;
                    text-align: left;
                }
                .dx-onboarding-feature {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 16px;
                    background: #f8fafc;
                    border-radius: 12px;
                }
                .dx-onboarding-feature-icon {
                    font-size: 32px;
                    flex-shrink: 0;
                }
                .dx-onboarding-feature-name {
                    font-weight: 600;
                    color: #1e293b;
                    font-size: 15px;
                }
                .dx-onboarding-feature-desc {
                    font-size: 13px;
                    color: #64748b;
                }
                .dx-onboarding-cta {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 16px 48px;
                    background: linear-gradient(135deg, #3b82f6, #2563eb);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-family: 'Inter', -apple-system, sans-serif;
                    box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
                }
                .dx-onboarding-cta:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
                }
                .dx-onboarding-cta:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                }
                .dx-onboarding-skip {
                    display: block;
                    margin-top: 16px;
                    color: #94a3b8;
                    font-size: 14px;
                    cursor: pointer;
                    border: none;
                    background: none;
                    font-family: 'Inter', -apple-system, sans-serif;
                }
                .dx-onboarding-skip:hover {
                    color: #64748b;
                }
                .dx-onboarding-progress {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    margin-bottom: 32px;
                }
                .dx-onboarding-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #e2e8f0;
                    transition: all 0.3s;
                }
                .dx-onboarding-dot.active {
                    background: #3b82f6;
                    width: 24px;
                    border-radius: 4px;
                }
                .dx-onboarding-dot.complete {
                    background: #10b981;
                }
            </style>
            <div class="dx-onboarding-modal">
                <div class="dx-onboarding-progress" id="onboarding-progress"></div>
                <div id="onboarding-content"></div>
            </div>
        `;
        document.body.appendChild(overlay);
        this.updateContent();
    },
    
    updateContent() {
        const step = this.steps[this.currentStep];
        const content = document.getElementById('onboarding-content');
        const progress = document.getElementById('onboarding-progress');
        
        // Update progress dots
        progress.innerHTML = this.steps.map((s, i) => 
            `<div class="dx-onboarding-dot ${i < this.currentStep ? 'complete' : ''} ${i === this.currentStep ? 'active' : ''}"></div>`
        ).join('');
        
        let html = `<div class="dx-onboarding-icon">${step.icon}</div>`;
        html += `<h2 class="dx-onboarding-title">${step.title}</h2>`;
        
        if (step.text) {
            html += `<p class="dx-onboarding-text">${step.text}</p>`;
        }
        
        if (step.options) {
            html += `<div class="dx-onboarding-options">`;
            step.options.forEach(opt => {
                html += `<button class="dx-onboarding-option" data-value="${opt.value}">${opt.label}</button>`;
            });
            html += `</div>`;
        }
        
        if (step.features) {
            html += `<div class="dx-onboarding-features">`;
            step.features.forEach(f => {
                html += `
                    <div class="dx-onboarding-feature">
                        <span class="dx-onboarding-feature-icon">${f.icon}</span>
                        <div>
                            <div class="dx-onboarding-feature-name">${f.name}</div>
                            <div class="dx-onboarding-feature-desc">${f.desc}</div>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }
        
        const needsSelection = step.options && !this.userLevel;
        html += `<button class="dx-onboarding-cta" id="onboarding-cta" ${needsSelection ? 'disabled' : ''}>${step.cta}</button>`;
        html += `<button class="dx-onboarding-skip" id="onboarding-skip">Skip intro</button>`;
        
        content.innerHTML = html;
        
        // Bind events
        document.getElementById('onboarding-cta').addEventListener('click', () => this.next());
        document.getElementById('onboarding-skip').addEventListener('click', () => this.complete());
        
        if (step.options) {
            document.querySelectorAll('.dx-onboarding-option').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.dx-onboarding-option').forEach(b => b.classList.remove('selected'));
                    e.target.classList.add('selected');
                    this.userLevel = e.target.dataset.value;
                    document.getElementById('onboarding-cta').disabled = false;
                });
            });
        }
    },
    
    show() {
        setTimeout(() => {
            document.getElementById('dx-onboarding-overlay').classList.add('visible');
        }, 500);
    },
    
    next() {
        if (this.currentStep < this.steps.length - 1) {
            this.currentStep++;
            this.updateContent();
        } else {
            this.complete();
        }
    },
    
    complete() {
        localStorage.setItem(this.STORAGE_KEY, 'true');
        if (this.userLevel) {
            localStorage.setItem('dx_user_level', this.userLevel);
        }
        const overlay = document.getElementById('dx-onboarding-overlay');
        overlay.classList.remove('visible');
        setTimeout(() => overlay.remove(), 300);
        
        // Show a quick celebration
        if (typeof DxScoring !== 'undefined') {
            DxScoring.updateStreak();
        }
    }
};

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => DxOnboarding.init());
