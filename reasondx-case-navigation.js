/**
 * ReasonDx Case Navigation - Mobile Safe Version
 * Adds exit button and stage navigation to all case screens
 */

(function() {
    'use strict';

    // Inject styles
    var navStyles = document.createElement('style');
    navStyles.id = 'reasondx-case-nav-styles';
    navStyles.textContent = '.case-nav-bar{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#fff;border-bottom:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(0,0,0,0.05)}.dark .case-nav-bar{background:#1e293b;border-color:#334155}.case-nav-exit-btn{display:flex;align-items:center;gap:6px;padding:8px 16px;background:#fee2e2;color:#dc2626;border:1px solid #fecaca;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer}.case-nav-exit-btn:hover{background:#fecaca}.case-nav-patient{display:flex;align-items:center;gap:8px;padding:6px 12px;background:#f1f5f9;border-radius:8px;font-size:13px}.dark .case-nav-patient{background:#334155}.case-nav-patient-name{font-weight:600}.case-stage-stepper{display:flex;align-items:center;gap:4px;padding:8px 16px;background:#f8fafc;border-bottom:1px solid #e2e8f0;overflow-x:auto}.dark .case-stage-stepper{background:#0f172a;border-color:#334155}.stage-step{display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:6px;font-size:13px;white-space:nowrap}.stage-step.completed{background:#dcfce7;color:#166534;cursor:pointer}.stage-step.current{background:#dbeafe;color:#1d4ed8;font-weight:600}.stage-step.upcoming{color:#94a3b8}';
    
    if (!document.getElementById('reasondx-case-nav-styles')) {
        document.head.appendChild(navStyles);
    }

    var CASE_STAGES = [
        { id: 'differential', label: 'Differential', icon: '🎯' },
        { id: 'history', label: 'History', icon: '📝' },
        { id: 'physical', label: 'Physical', icon: '🩺' },
        { id: 'revised-differential', label: 'Revised', icon: '🔄' },
        { id: 'workup', label: 'Workup', icon: '🔬' },
        { id: 'summary', label: 'Summary', icon: '📊' }
    ];

    function getStageIndex(screenId) {
        for (var i = 0; i < CASE_STAGES.length; i++) {
            if (CASE_STAGES[i].id === screenId) return i;
        }
        return -1;
    }

    function isInCaseStage() {
        if (typeof state === 'undefined') return false;
        return getStageIndex(state.screen) !== -1;
    }

    window.renderCaseNavBar = function() {
        if (typeof state === 'undefined' || typeof cases === 'undefined') return '';
        if (!isInCaseStage()) return '';

        var caseData = null;
        for (var i = 0; i < cases.length; i++) {
            if (cases[i].id === state.caseType) { caseData = cases[i]; break; }
        }
        if (!caseData) return '';
        
        var variant = caseData.variants[state.variantKey];
        if (!variant) return '';

        var patientIcon = variant.gender === 'female' ? '👩' : '👨';

        return '<div class="case-nav-bar">' +
            '<button onclick="confirmExitCase()" class="case-nav-exit-btn"><span>✕</span><span>Exit</span></button>' +
            '<div class="case-nav-patient"><span>' + patientIcon + '</span>' +
            '<span class="case-nav-patient-name">' + variant.name + ', ' + variant.age + (variant.gender === 'female' ? 'F' : 'M') + '</span></div>' +
            '</div>';
    };

    window.renderCaseStageStepper = function() {
        if (typeof state === 'undefined') return '';
        if (!isInCaseStage()) return '';

        var currentIndex = getStageIndex(state.screen);
        var html = '<div class="case-stage-stepper">';

        for (var i = 0; i < CASE_STAGES.length; i++) {
            var stage = CASE_STAGES[i];
            var statusClass = 'upcoming';
            if (i < currentIndex) statusClass = 'completed';
            if (i === currentIndex) statusClass = 'current';
            
            var clickHandler = statusClass === 'completed' ? ' onclick="navigateToCompletedStage(\'' + stage.id + '\')"' : '';
            var icon = statusClass === 'completed' ? '✓' : stage.icon;
            
            html += '<div class="stage-step ' + statusClass + '"' + clickHandler + '>' +
                '<span>' + icon + '</span><span>' + stage.label + '</span></div>';
        }

        html += '</div>';
        return html;
    };

    window.navigateToCompletedStage = function(stageId) {
        if (typeof state === 'undefined') return;
        var currentIndex = getStageIndex(state.screen);
        var targetIndex = getStageIndex(stageId);
        
        if (targetIndex < currentIndex && targetIndex >= 0) {
            state.screen = stageId;
            if (typeof render === 'function') render();
        }
    };

    if (typeof window.confirmExitCase === 'undefined') {
        window.confirmExitCase = function() {
            if (confirm('Exit this case?')) {
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

    // Simple injection - check every 500ms when in a case
    setInterval(function() {
        if (isInCaseStage()) {
            var app = document.getElementById('app');
            if (app && !app.querySelector('.case-nav-bar')) {
                var navHtml = window.renderCaseNavBar() + window.renderCaseStageStepper();
                app.insertAdjacentHTML('afterbegin', navHtml);
            }
        }
    }, 500);

    console.log('[ReasonDx Case Navigation] Loaded');
})();
