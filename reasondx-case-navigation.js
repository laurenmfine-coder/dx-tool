/**
 * ============================================================================
 * REASONDX CASE NAVIGATION FIX
 * ============================================================================
 * Version: 1.0 | December 2025
 * 
 * Adds persistent navigation to all case screens:
 * - Exit button always visible
 * - Stage stepper with clickable completed stages
 * - Consistent header across all render paths
 * ============================================================================
 */

(function() {
    'use strict';

    // Inject styles for the persistent navigation bar
    const navStyles = `
    /* ========== PERSISTENT CASE NAVIGATION BAR ========== */
    .case-nav-bar {
        position: sticky;
        top: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: linear-gradient(to bottom, #ffffff, #f8fafc);
        border-bottom: 1px solid #e2e8f0;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .dark .case-nav-bar {
        background: linear-gradient(to bottom, #1e293b, #0f172a);
        border-color: #334155;
    }

    .case-nav-left {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .case-nav-exit-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        background: #fee2e2;
        color: #dc2626;
        border: 1px solid #fecaca;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
    }
    .case-nav-exit-btn:hover {
        background: #fecaca;
        border-color: #f87171;
    }
    .dark .case-nav-exit-btn {
        background: #7f1d1d;
        color: #fecaca;
        border-color: #991b1b;
    }
    .dark .case-nav-exit-btn:hover {
        background: #991b1b;
    }

    .case-nav-patient {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        background: #f1f5f9;
        border-radius: 8px;
    }
    .dark .case-nav-patient {
        background: #334155;
    }
    .case-nav-patient-icon {
        font-size: 20px;
    }
    .case-nav-patient-info {
        font-size: 13px;
        line-height: 1.3;
    }
    .case-nav-patient-name {
        font-weight: 600;
        color: #1e293b;
    }
    .dark .case-nav-patient-name {
        color: #f1f5f9;
    }
    .case-nav-patient-cc {
        color: #64748b;
        font-size: 12px;
    }

    .case-nav-right {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .case-nav-mode-badge {
        padding: 4px 10px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 12px;
        background: #dbeafe;
        color: #1d4ed8;
    }
    .dark .case-nav-mode-badge {
        background: #1e3a5f;
        color: #93c5fd;
    }

    /* ========== STAGE STEPPER (Horizontal) ========== */
    .case-stage-stepper {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 8px 16px;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
    .dark .case-stage-stepper {
        background: #0f172a;
        border-color: #334155;
    }

    .stage-step {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 13px;
        white-space: nowrap;
        transition: all 0.2s;
    }

    .stage-step.completed {
        background: #dcfce7;
        color: #166534;
        cursor: pointer;
    }
    .stage-step.completed:hover {
        background: #bbf7d0;
    }
    .dark .stage-step.completed {
        background: #14532d;
        color: #86efac;
    }

    .stage-step.current {
        background: #dbeafe;
        color: #1d4ed8;
        font-weight: 600;
    }
    .dark .stage-step.current {
        background: #1e3a5f;
        color: #93c5fd;
    }

    .stage-step.upcoming {
        color: #94a3b8;
    }
    .dark .stage-step.upcoming {
        color: #64748b;
    }

    .stage-step-icon {
        font-size: 14px;
    }

    .stage-connector {
        width: 16px;
        height: 2px;
        background: #e2e8f0;
    }
    .dark .stage-connector {
        background: #334155;
    }
    .stage-connector.completed {
        background: #86efac;
    }

    /* ========== RESPONSIVE ========== */
    @media (max-width: 640px) {
        .case-nav-bar {
            flex-wrap: wrap;
            gap: 8px;
        }
        .case-nav-patient-cc {
            display: none;
        }
        .stage-step span:not(.stage-step-icon) {
            display: none;
        }
        .stage-step {
            padding: 8px;
        }
    }
    `;

    // Inject styles
    if (!document.getElementById('reasondx-case-nav-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'reasondx-case-nav-styles';
        styleEl.textContent = navStyles;
        document.head.appendChild(styleEl);
    }

    // Stage configuration
    const CASE_STAGES = [
        { id: 'differential', label: 'Differential', icon: '🎯', shortLabel: 'Dx' },
        { id: 'history', label: 'History', icon: '📝', shortLabel: 'Hx' },
        { id: 'physical', label: 'Physical Exam', icon: '🩺', shortLabel: 'PE' },
        { id: 'revised-differential', label: 'Revised Dx', icon: '🔄', shortLabel: 'RDx' },
        { id: 'workup', label: 'Workup', icon: '🔬', shortLabel: 'Wx' },
        { id: 'summary', label: 'Summary', icon: '📊', shortLabel: 'Sum' }
    ];

    function getStageIndex(screenId) {
        return CASE_STAGES.findIndex(s => s.id === screenId);
    }

    function isInCaseStage() {
        if (typeof state === 'undefined') return false;
        return getStageIndex(state.screen) !== -1;
    }

    // Render the persistent navigation bar
    window.renderCaseNavBar = function() {
        if (typeof state === 'undefined' || typeof cases === 'undefined') return '';
        if (!isInCaseStage()) return '';

        const caseData = cases.find(c => c.id === state.caseType);
        if (!caseData) return '';
        
        const variant = caseData.variants[state.variantKey];
        if (!variant) return '';

        const patientIcon = variant.gender === 'female' ? '👩' : '👨';
        const modeLabel = state.mode === 'practice' ? 'Learning' : 
                         state.mode === 'quiz' ? 'Clinical' : 
                         state.mode === 'timed' ? 'OSCE' : 
                         state.mode || 'Practice';

        return `
            <div class="case-nav-bar">
                <div class="case-nav-left">
                    <button onclick="confirmExitCase()" class="case-nav-exit-btn" title="Exit to main menu">
                        <span>✕</span>
                        <span>Exit</span>
                    </button>
                    <div class="case-nav-patient">
                        <span class="case-nav-patient-icon">${patientIcon}</span>
                        <div class="case-nav-patient-info">
                            <div class="case-nav-patient-name">${variant.name}, ${variant.age}${variant.gender === 'female' ? 'F' : 'M'}</div>
                            <div class="case-nav-patient-cc">${(variant.chiefComplaint || '').substring(0, 30)}${(variant.chiefComplaint || '').length > 30 ? '...' : ''}</div>
                        </div>
                    </div>
                </div>
                <div class="case-nav-right">
                    <span class="case-nav-mode-badge">${modeLabel}</span>
                </div>
            </div>
        `;
    };

    // Render the stage stepper
    window.renderCaseStageStepper = function() {
        if (typeof state === 'undefined') return '';
        if (!isInCaseStage()) return '';

        const currentIndex = getStageIndex(state.screen);

        return `
            <div class="case-stage-stepper">
                ${CASE_STAGES.map((stage, idx) => {
                    let statusClass = 'upcoming';
                    if (idx < currentIndex) statusClass = 'completed';
                    if (idx === currentIndex) statusClass = 'current';
                    
                    const clickHandler = statusClass === 'completed' 
                        ? `onclick="navigateToCompletedStage('${stage.id}')"`
                        : '';
                    
                    return `
                        ${idx > 0 ? `<div class="stage-connector ${idx <= currentIndex ? 'completed' : ''}"></div>` : ''}
                        <div class="stage-step ${statusClass}" ${clickHandler} title="${stage.label}">
                            <span class="stage-step-icon">${statusClass === 'completed' ? '✓' : stage.icon}</span>
                            <span>${stage.label}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    };

    // Navigate to a completed stage (view-only)
    window.navigateToCompletedStage = function(stageId) {
        if (typeof state === 'undefined') return;
        
        const currentIndex = getStageIndex(state.screen);
        const targetIndex = getStageIndex(stageId);
        
        if (targetIndex < currentIndex && targetIndex >= 0) {
            state.screen = stageId;
            if (typeof render === 'function') {
                render();
            }
        }
    };

    // Ensure confirmExitCase exists
    if (typeof window.confirmExitCase === 'undefined') {
        window.confirmExitCase = function() {
            if (confirm('Are you sure you want to exit this case? Your progress will be saved.')) {
                if (typeof resetAndGoToMenu === 'function') {
                    resetAndGoToMenu();
                } else if (typeof goToScreen === 'function') {
                    goToScreen('menu');
                } else if (typeof state !== 'undefined') {
                    state.screen = 'menu';
                    if (typeof render === 'function') render();
                }
            }
        };
    }

    // Hook into the render function to inject navigation
    const originalRender = window.render;
    if (typeof originalRender === 'function') {
        window.render = function() {
            // Call original render
            originalRender.apply(this, arguments);
            
            // Inject navigation bar if in a case stage
            if (isInCaseStage()) {
                const app = document.getElementById('app');
                if (app) {
                    // Check if navigation already exists
                    if (!app.querySelector('.case-nav-bar')) {
                        const navHtml = renderCaseNavBar() + renderCaseStageStepper();
                        app.insertAdjacentHTML('afterbegin', navHtml);
                    }
                }
            }
        };
    }

    // Also provide a manual injection function for cases where render hook doesn't work
    window.injectCaseNavigation = function() {
        if (!isInCaseStage()) return;
        
        const app = document.getElementById('app');
        if (app && !app.querySelector('.case-nav-bar')) {
            const navHtml = renderCaseNavBar() + renderCaseStageStepper();
            app.insertAdjacentHTML('afterbegin', navHtml);
        }
    };

    // Auto-inject on DOM changes (fallback)
    const observer = new MutationObserver((mutations) => {
        if (isInCaseStage()) {
            const app = document.getElementById('app');
            if (app && !app.querySelector('.case-nav-bar')) {
                // Debounce to avoid infinite loops
                setTimeout(() => {
                    if (app && !app.querySelector('.case-nav-bar')) {
                        const navHtml = renderCaseNavBar() + renderCaseStageStepper();
                        app.insertAdjacentHTML('afterbegin', navHtml);
                    }
                }, 50);
            }
        }
    });

    // Start observing once DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            const app = document.getElementById('app');
            if (app) {
                observer.observe(app, { childList: true, subtree: false });
            }
        });
    } else {
        const app = document.getElementById('app');
        if (app) {
            observer.observe(app, { childList: true, subtree: false });
        }
    }

    console.log('[ReasonDx Case Navigation] Initialized - Exit button and stage stepper will appear on all case screens');
})();
