/**
 * ============================================================================
 * REASONDX COLLABORATIVE LEARNING SUITE
 * ============================================================================
 * Version: 1.0 | December 2025
 * 
 * Complete integration of:
 * - Classroom Mode (facilitated large group)
 * - Small Group Mode (cross-group comparison)
 * - Async/Flipped Classroom
 * - Pathophysiology Deep Dives
 * - Enhanced Features (Wisdom of Crowds, Confidence Betting, My Patterns)
 * - Updated Navigation
 * 
 * Dr. Lauren Fine, Nova Southeastern University
 * ============================================================================
 */

// ============================================================================
// PART 1: CSS STYLES
// ============================================================================

(function injectStyles() {
    const styles = `
    /* ========== SESSION & ATTENDANCE ========== */
    .session-code-display {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 24px;
        background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
        border-radius: 12px;
        color: white;
        margin-bottom: 20px;
    }
    .session-code-display .label { font-size: 14px; opacity: 0.9; }
    .session-code-display .code { font-size: 32px; font-weight: bold; font-family: monospace; letter-spacing: 4px; }
    .session-code-display .copy-btn {
        padding: 8px 16px;
        background: rgba(255,255,255,0.2);
        border: none;
        border-radius: 8px;
        color: white;
        cursor: pointer;
    }
    
    .attendance-panel { margin: 24px 0; padding: 20px; background: #f8fafc; border-radius: 12px; }
    .dark .attendance-panel { background: #1e293b; }
    .attendance-bar { height: 12px; background: #e2e8f0; border-radius: 6px; overflow: hidden; margin: 12px 0; }
    .dark .attendance-bar { background: #334155; }
    .attendance-fill { height: 100%; background: linear-gradient(90deg, #10B981, #059669); transition: width 0.5s; }
    
    .student-chip, .member-chip {
        display: inline-block;
        padding: 4px 12px;
        background: #e2e8f0;
        border-radius: 16px;
        font-size: 12px;
        margin: 2px;
    }
    .dark .student-chip, .dark .member-chip { background: #374151; color: #e5e7eb; }

    /* ========== GROUP CARDS ========== */
    .groups-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin: 20px 0; }
    .groups-grid.large { grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); }
    
    .group-card { border: 2px solid #e2e8f0; border-radius: 12px; overflow: hidden; transition: transform 0.2s; }
    .group-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .group-header { padding: 12px 16px; color: white; font-weight: 600; display: flex; align-items: center; gap: 8px; }
    .group-body { padding: 16px; }
    
    .group-select-card {
        border: 2px solid #e2e8f0;
        border-radius: 16px;
        padding: 24px;
        background: white;
        cursor: pointer;
        text-align: center;
        transition: all 0.2s;
    }
    .group-select-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
    .group-icon-large {
        width: 64px; height: 64px;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 32px;
        margin: 0 auto 12px;
    }

    /* ========== PHASE DISPLAY ========== */
    .phase-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        background: #f8fafc;
        border-radius: 12px;
        margin-bottom: 20px;
    }
    .dark .phase-header { background: #1e293b; }
    
    .stage-badge { padding: 6px 12px; background: #3B82F6; color: white; border-radius: 20px; font-size: 14px; font-weight: 600; }
    .phase-badge { padding: 6px 12px; border-radius: 20px; font-size: 14px; }
    .phase-badge.individual { background: #FEF3C7; color: #92400E; }
    .phase-badge.reflection { background: #DBEAFE; color: #1E40AF; }
    .timer { margin-left: auto; font-size: 24px; font-weight: bold; font-family: monospace; }

    /* ========== CONFIDENCE SLIDER ========== */
    .confidence-slider-container { margin: 20px 0; padding: 16px; background: #f8fafc; border-radius: 12px; }
    .dark .confidence-slider-container { background: #1e293b; }
    .confidence-slider { width: 100%; height: 8px; -webkit-appearance: none; background: #e2e8f0; border-radius: 4px; }
    .confidence-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 24px; height: 24px; background: #3B82F6; border-radius: 50%; cursor: pointer; }
    .confidence-labels { display: flex; justify-content: space-between; margin-top: 8px; font-size: 11px; color: #64748b; }
    .confidence-labels span.active { color: #3B82F6; font-weight: 600; }
    .confidence-value { text-align: center; font-size: 24px; color: #F59E0B; margin-top: 8px; }

    /* ========== DISTRIBUTION CHART ========== */
    .distribution-chart { margin: 20px 0; }
    .distribution-row { display: flex; align-items: center; gap: 12px; margin: 8px 0; }
    .distribution-row .answer-label { width: 180px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .distribution-row .bar-container { flex: 1; height: 24px; background: #e2e8f0; border-radius: 4px; overflow: hidden; }
    .dark .distribution-row .bar-container { background: #374151; }
    .distribution-row .bar { height: 100%; border-radius: 4px; transition: width 0.5s; }
    .distribution-row .bar.primary { background: #3B82F6; }
    .distribution-row .bar.secondary { background: #60A5FA; }
    .distribution-row .percentage { width: 50px; text-align: right; font-weight: 600; }

    /* ========== CROSS-GROUP COMPARISON ========== */
    .cross-group-comparison { padding: 24px; }
    .groups-comparison-table table { width: 100%; border-collapse: collapse; }
    .groups-comparison-table th, .groups-comparison-table td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    .dark .groups-comparison-table th, .dark .groups-comparison-table td { border-color: #374151; }
    .groups-comparison-table th { background: #f8fafc; font-weight: 600; }
    .dark .groups-comparison-table th { background: #1e293b; }
    
    .group-badge-small { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 16px; color: white; font-size: 13px; }
    .consensus-bar { width: 100px; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden; display: inline-block; margin-right: 8px; }
    .consensus-fill { height: 100%; transition: width 0.3s; }

    /* ========== PROJECTOR MODE ========== */
    .projector-display { background: white; min-height: 80vh; padding: 32px; }
    .dark .projector-display { background: #0f172a; }
    .projector-header { display: flex; justify-content: space-between; padding-bottom: 16px; border-bottom: 2px solid #e2e8f0; margin-bottom: 24px; }
    
    .projector-individual-phase { text-align: center; padding: 40px; }
    .progress-circle { width: 200px; height: 200px; margin: 0 auto; position: relative; }
    .progress-circle svg { transform: rotate(-90deg); width: 100%; height: 100%; }
    .progress-circle .progress-bg { fill: none; stroke: #e2e8f0; stroke-width: 8; }
    .progress-circle .progress-fill { fill: none; stroke: #10B981; stroke-width: 8; stroke-linecap: round; stroke-dasharray: 283; transition: stroke-dashoffset 0.5s; }
    .progress-circle .progress-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
    .progress-circle .count { font-size: 48px; font-weight: bold; }
    .progress-circle .total { font-size: 24px; color: #64748b; }
    
    .timer-display { margin: 32px 0; }
    .timer-value { font-size: 64px; font-weight: bold; font-family: monospace; }

    /* ========== FACILITATOR PANEL ========== */
    .facilitator-panel {
        position: fixed;
        right: 0; top: 0;
        width: 350px; height: 100vh;
        background: #1e293b;
        color: white;
        padding: 20px;
        overflow-y: auto;
        transition: transform 0.3s;
        z-index: 100;
    }
    .facilitator-panel.hidden { transform: translateX(100%); }
    .facilitator-panel h3, .facilitator-panel h4 { color: white; }
    .facilitator-controls { margin: 16px 0; }
    .control-buttons { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; }
    
    .private-insights { margin-top: 24px; padding-top: 24px; border-top: 1px solid #334155; }
    .warning-insight { padding: 8px 12px; background: #FEF3C7; color: #92400E; border-radius: 8px; margin: 8px 0; }
    .info-insight { padding: 8px 12px; background: #DBEAFE; color: #1E40AF; border-radius: 8px; margin: 8px 0; }

    /* ========== BUTTONS ========== */
    .btn-primary {
        padding: 12px 24px;
        background: linear-gradient(135deg, #3B82F6, #1D4ED8);
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4); }
    .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
    
    .btn-secondary { padding: 12px 24px; background: #e2e8f0; color: #1e293b; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .dark .btn-secondary { background: #374151; color: #e5e7eb; }
    .btn-warning { padding: 12px 24px; background: #F59E0B; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .btn-large { padding: 16px 32px; font-size: 16px; }
    .btn-full { width: 100%; }

    /* ========== WAITING & LOBBY ========== */
    .waiting-card, .lobby-card, .submitted-card {
        max-width: 400px;
        margin: 60px auto;
        padding: 40px;
        background: white;
        border-radius: 16px;
        text-align: center;
        box-shadow: 0 4px 24px rgba(0,0,0,0.1);
    }
    .dark .waiting-card, .dark .lobby-card, .dark .submitted-card { background: #1e293b; }
    
    .checkmark-circle {
        width: 80px; height: 80px;
        background: #10B981;
        color: white;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 40px;
        margin: 0 auto 20px;
    }
    
    .loading-dots { display: flex; justify-content: center; gap: 8px; margin-top: 20px; }
    .loading-dots span { width: 12px; height: 12px; background: #3B82F6; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; }
    .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
    .loading-dots span:nth-child(2) { animation-delay: -0.16s; }
    @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }

    /* ========== RADIO CARDS ========== */
    .radio-card { display: block; cursor: pointer; }
    .radio-card input { display: none; }
    .radio-card .card-content {
        display: flex; align-items: center; gap: 12px;
        padding: 16px;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        transition: all 0.2s;
        margin-bottom: 8px;
    }
    .radio-card input:checked + .card-content { border-color: #3B82F6; background: #EFF6FF; }
    .dark .radio-card input:checked + .card-content { background: #1e3a5f; }

    /* ========== DEEP DIVE MODAL ========== */
    .deep-dive-btn {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 8px 16px;
        background: #EFF6FF;
        border: 1px solid #BFDBFE;
        border-radius: 20px;
        color: #1D4ED8;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.2s;
    }
    .deep-dive-btn:hover { background: #DBEAFE; transform: translateY(-1px); }
    
    .deep-dive-modal {
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: flex; align-items: center; justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
    }
    .deep-dive-modal.visible { opacity: 1; pointer-events: auto; }
    .deep-dive-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.5); }
    .deep-dive-content {
        position: relative;
        width: 90%; max-width: 600px; max-height: 80vh;
        background: white;
        border-radius: 16px;
        overflow: hidden;
        display: flex; flex-direction: column;
    }
    .dark .deep-dive-content { background: #1e293b; }
    
    .deep-dive-header {
        display: flex; align-items: center; gap: 12px;
        padding: 20px;
        background: linear-gradient(135deg, #8B5CF6, #6D28D9);
        color: white;
    }
    .deep-dive-header h2 { margin: 0; flex: 1; font-size: 18px; }
    .deep-dive-header .close-btn { background: none; border: none; color: white; font-size: 24px; cursor: pointer; }
    .deep-dive-body { padding: 20px; overflow-y: auto; flex: 1; }
    .deep-dive-footer { padding: 16px 20px; border-top: 1px solid #e2e8f0; text-align: right; }
    .dark .deep-dive-footer { border-color: #374151; }
    
    .short-answer { padding: 12px 16px; background: #F3F4F6; border-radius: 8px; margin-bottom: 16px; }
    .dark .short-answer { background: #374151; }
    .clinical-pearl-box {
        display: flex; gap: 12px;
        padding: 16px;
        background: #FEF3C7;
        border-left: 4px solid #F59E0B;
        border-radius: 0 8px 8px 0;
        margin: 16px 0;
    }
    .pearl-icon { font-size: 24px; }

    /* ========== PATTERNS DASHBOARD ========== */
    .pattern-card {
        padding: 20px;
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        margin-bottom: 16px;
    }
    .dark .pattern-card { background: #1e293b; border-color: #374151; }
    .pattern-card h4 { margin: 0 0 8px 0; }
    .pattern-card .card-description { color: #64748b; font-size: 14px; margin-bottom: 16px; }
    
    .calibration-row { display: flex; align-items: center; gap: 12px; margin: 8px 0; }
    .calibration-bar { flex: 1; height: 20px; background: #e2e8f0; border-radius: 4px; position: relative; overflow: hidden; }
    .dark .calibration-bar { background: #374151; }
    .expected-marker { position: absolute; width: 2px; height: 100%; background: #64748b; }
    .actual-bar { height: 100%; background: #3B82F6; }
    .actual-bar.calibrated { background: #10B981; }
    .actual-bar.miscalibrated { background: #F59E0B; }

    /* ========== TOAST ========== */
    .toast {
        position: fixed;
        bottom: 24px; right: 24px;
        padding: 12px 24px;
        background: #1e293b;
        color: white;
        border-radius: 8px;
        animation: slideIn 0.3s ease;
        z-index: 1000;
    }
    .toast.fade-out { animation: slideOut 0.3s ease forwards; }
    .toast-success { background: #10B981; }
    .toast-warning { background: #F59E0B; }
    .toast-error { background: #EF4444; }
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }

    /* ========== NAVIGATION ========== */
    .cases-category { border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 8px; }
    .dark .cases-category { border-color: #374151; }
    .category-header {
        width: 100%;
        display: flex; align-items: center; gap: 16px;
        padding: 16px 20px;
        background: white;
        border: none;
        cursor: pointer;
        text-align: left;
    }
    .dark .category-header { background: #1e293b; color: white; }
    .category-header:hover { background: #f8fafc; }
    .dark .category-header:hover { background: #374151; }
    .category-header .icon { font-size: 24px; }
    .category-header .text { flex: 1; }
    .category-header .label { font-weight: 600; }
    .category-header .description { font-size: 13px; color: #64748b; margin-top: 2px; }
    .category-header .expand-icon { color: #64748b; }
    .category-children { padding: 0 8px 8px 8px; background: #f8fafc; }
    .dark .category-children { background: #0f172a; }
    
    .nav-item-small {
        width: 100%;
        display: flex; align-items: center; gap: 12px;
        padding: 12px 16px;
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        margin-top: 8px;
        cursor: pointer;
        text-align: left;
    }
    .dark .nav-item-small { background: #1e293b; border-color: #374151; }
    .nav-item-small:hover { border-color: #3B82F6; background: #EFF6FF; }
    .dark .nav-item-small:hover { background: #1e3a5f; }
    `;

    if (!document.getElementById('reasondx-collab-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'reasondx-collab-styles';
        styleEl.textContent = styles;
        document.head.appendChild(styleEl);
    }
})();

console.log('[ReasonDx Collaborative Suite] Styles loaded');
// ============================================================================
// PART 2: CLASSROOM MODE CORE
// ============================================================================

(function() {
    'use strict';

    window.ClassroomMode = {
        version: '1.0.0',
        initialized: false,
        session: {
            id: null,
            code: null,
            facilitatorId: null,
            caseId: null,
            variantKey: null,
            status: 'inactive',
            type: 'classroom',
            createdAt: null,
            startedAt: null,
            participants: [],
            expectedCount: 65,
            currentStage: null,
            currentPhase: 'waiting',
            timerEnd: null,
            timerDuration: 90,
            autoAdvanceThreshold: 0.90,
            settings: {
                showStudentNames: false,
                allowLateJoin: true,
                requireReasoning: false,
                enableCrossGroupComparison: true,
                enablePathophysDeepDives: true,
                confidenceScale: 5
            }
        },
        responses: {},
        groups: [],
        facilitatorView: { showPrivatePanel: true, selectedStudent: null }
    };

    const CM = window.ClassroomMode;

    // Stage and Phase display names
    const STAGE_NAMES = {
        'differential': 'Initial Differential',
        'history': 'History Taking',
        'physical': 'Physical Examination',
        'revised-differential': 'Revised Differential',
        'workup': 'Diagnostic Workup',
        'diagnosis': 'Final Diagnosis',
        'management': 'Management Plan'
    };

    const PHASE_NAMES = {
        'waiting': 'Waiting to Start',
        'individual': 'Individual Thinking',
        'reveal': 'Results Revealed',
        'discussion': 'Group Discussion',
        'reflection': 'Post-Discussion Reflection',
        'complete': 'Stage Complete'
    };

    // Generate session code
    function generateSessionCode() {
        const adjectives = ['BLUE', 'RED', 'GREEN', 'GOLD', 'SWIFT', 'BRIGHT', 'CALM', 'BOLD'];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const num = Math.floor(Math.random() * 90) + 10;
        return `${adj}-${num}`;
    }

    // ========== SESSION MANAGEMENT ==========

    window.createClassroomSession = function(options = {}) {
        const facilitatorId = localStorage.getItem('reasondx_study_id') || 'facilitator';
        
        CM.session = {
            ...CM.session,
            id: 'session-' + Date.now(),
            code: options.code || generateSessionCode(),
            facilitatorId: facilitatorId,
            caseId: options.caseId || null,
            variantKey: options.variantKey || null,
            status: 'lobby',
            type: options.type || 'classroom',
            createdAt: new Date().toISOString(),
            expectedCount: options.expectedCount || 65,
            participants: [],
            currentStage: null,
            currentPhase: 'waiting',
            settings: { ...CM.session.settings, ...options.settings }
        };

        CM.responses = {};
        saveSessionState();
        showFacilitatorLobby();
        console.log('[ClassroomMode] Session created:', CM.session.code);
        return CM.session;
    };

    function showFacilitatorLobby() {
        const content = `
            <div class="max-w-4xl mx-auto p-6">
                <div class="flex items-center justify-between mb-6">
                    <button onclick="goToScreen('menu')" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                        ← Back to Menu
                    </button>
                    <h1 class="text-2xl font-bold">🏫 Classroom Session</h1>
                </div>

                <div class="session-code-display">
                    <span class="label">Session Code:</span>
                    <span class="code">${CM.session.code}</span>
                    <button onclick="copySessionCode()" class="copy-btn">📋 Copy</button>
                </div>

                <div class="attendance-panel">
                    <h3 class="font-semibold mb-2">👥 Attendance: <span id="participant-count">${CM.session.participants.length}</span>/${CM.session.expectedCount}</h3>
                    <div class="attendance-bar">
                        <div class="attendance-fill" id="attendance-fill" style="width: ${(CM.session.participants.length / CM.session.expectedCount) * 100}%"></div>
                    </div>
                    <div class="mt-4">
                        <h4 class="text-sm font-medium text-zinc-500 mb-2">Joined Students:</h4>
                        <div id="joined-students" class="flex flex-wrap gap-1">
                            ${CM.session.participants.map(p => `<span class="student-chip">${p.studentId}</span>`).join('') || '<span class="text-zinc-400 text-sm">Waiting for students...</span>'}
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-zinc-800 rounded-lg p-4 mb-6 border border-zinc-200 dark:border-zinc-700">
                    <h3 class="font-semibold mb-3">📚 Select Case</h3>
                    ${CM.session.caseId ? renderSelectedCase() : renderCaseSelector()}
                </div>

                <div class="flex gap-4">
                    <button onclick="startClassroomSession()" 
                            class="btn-primary btn-large flex-1"
                            ${!CM.session.caseId ? 'disabled title="Select a case first"' : ''}>
                        🚀 Start Session
                    </button>
                    <button onclick="cancelClassroomSession()" class="btn-secondary">
                        Cancel
                    </button>
                </div>

                <div class="mt-4 flex items-center gap-2">
                    <input type="checkbox" id="projector-mode" onchange="CM.session.settings.showStudentNames = !this.checked">
                    <label for="projector-mode" class="text-sm text-zinc-600 dark:text-zinc-400">
                        📽️ Projector Mode (hide student names on display)
                    </label>
                </div>
            </div>
        `;

        document.getElementById('app').innerHTML = content;
        startParticipantPolling();
    }

    function renderCaseSelector() {
        if (typeof cases === 'undefined') return '<p class="text-zinc-500">Loading cases...</p>';
        
        const casesByCategory = {};
        cases.forEach(c => {
            const cat = c.category || 'Other';
            if (!casesByCategory[cat]) casesByCategory[cat] = [];
            casesByCategory[cat].push(c);
        });

        let html = '<div class="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-64 overflow-y-auto">';
        for (const [category, categoryCases] of Object.entries(casesByCategory).slice(0, 5)) {
            categoryCases.slice(0, 4).forEach(c => {
                html += `
                    <button onclick="selectCaseForSession('${c.id}')" 
                            class="p-3 text-left border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-blue-500 transition">
                        <span class="text-lg">${c.icon || '📋'}</span>
                        <div class="text-sm font-medium truncate">${c.title}</div>
                        <div class="text-xs text-zinc-500">${category}</div>
                    </button>
                `;
            });
        }
        html += '</div>';
        return html;
    }

    function renderSelectedCase() {
        const caseData = cases.find(c => c.id === CM.session.caseId);
        if (!caseData) return '<p>Case not found</p>';
        const variant = caseData.variants[CM.session.variantKey || Object.keys(caseData.variants)[0]];

        return `
            <div class="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div class="flex items-center gap-3">
                    <span class="text-2xl">${caseData.icon || '📋'}</span>
                    <div>
                        <div class="font-medium">${variant?.name || 'Patient'}, ${variant?.age || '?'}${variant?.gender?.charAt(0).toUpperCase() || ''}</div>
                        <div class="text-sm text-zinc-600 dark:text-zinc-400">"${variant?.chiefComplaint?.substring(0, 50) || 'Chief complaint'}..."</div>
                    </div>
                </div>
                <button onclick="CM.session.caseId = null; showFacilitatorLobby();" class="text-sm text-blue-600 hover:underline">Change</button>
            </div>
        `;
    }

    window.selectCaseForSession = function(caseId) {
        CM.session.caseId = caseId;
        const caseData = cases.find(c => c.id === caseId);
        CM.session.variantKey = Object.keys(caseData?.variants || {})[0];
        saveSessionState();
        showFacilitatorLobby();
    };

    window.startClassroomSession = function() {
        if (!CM.session.caseId) {
            alert('Please select a case first');
            return;
        }
        
        CM.session.status = 'active';
        CM.session.startedAt = new Date().toISOString();
        CM.session.currentStage = 'differential';
        CM.session.currentPhase = 'individual';
        CM.session.timerEnd = Date.now() + (CM.session.timerDuration * 1000);
        CM.responses['differential'] = { individual: {}, postDiscussion: {} };
        
        saveSessionState();
        broadcastMessage({ type: 'session_started', stage: 'differential' });
        renderFacilitatorActiveView();
    };

    window.cancelClassroomSession = function() {
        if (confirm('Cancel this session?')) {
            localStorage.removeItem('reasondx_classroom_session');
            CM.session.status = 'inactive';
            goToScreen('menu');
        }
    };

    // ========== STUDENT JOIN FLOW ==========

    window.showJoinClassroomSession = function() {
        const studentId = localStorage.getItem('reasondx_study_id');
        
        const content = `
            <div class="max-w-md mx-auto p-6 mt-12">
                <div class="text-center mb-8">
                    <span class="text-6xl">🏫</span>
                    <h1 class="text-2xl font-bold mt-4">Join Classroom Session</h1>
                </div>

                <div class="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">
                    ${studentId ? `
                        <div class="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <span class="text-green-600">✓</span> Logged in as: <strong>${studentId}</strong>
                        </div>
                    ` : `
                        <div class="mb-4">
                            <label class="block text-sm font-medium mb-2">Your Student ID</label>
                            <input type="text" id="student-id-input" placeholder="e.g., Student001" 
                                   class="w-full p-3 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700">
                        </div>
                    `}

                    <div class="mb-6">
                        <label class="block text-sm font-medium mb-2">Session Code</label>
                        <input type="text" id="session-code-input" placeholder="e.g., BLUE-42" 
                               class="w-full p-4 text-2xl text-center font-mono uppercase tracking-widest border-2 border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700"
                               maxlength="10">
                        <p class="text-xs text-zinc-500 mt-2">Enter the code shown on the classroom screen</p>
                    </div>

                    <button onclick="joinClassroomSession()" class="btn-primary btn-large btn-full">
                        Join Session
                    </button>
                </div>

                <div class="text-center mt-4">
                    <button onclick="goToScreen('menu')" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-sm">
                        ← Back to Menu
                    </button>
                </div>
            </div>
        `;

        document.getElementById('app').innerHTML = content;
    };

    window.joinClassroomSession = function() {
        let studentId = localStorage.getItem('reasondx_study_id');
        const studentIdInput = document.getElementById('student-id-input');
        const codeInput = document.getElementById('session-code-input');

        if (!studentId && studentIdInput) {
            studentId = studentIdInput.value.trim();
            if (!studentId) { alert('Please enter your Student ID'); return; }
            localStorage.setItem('reasondx_study_id', studentId);
        }

        const sessionCode = codeInput?.value.trim().toUpperCase();
        if (!sessionCode) { alert('Please enter the session code'); return; }

        // Check for session in localStorage (same-device testing)
        const savedSession = localStorage.getItem('reasondx_classroom_session');
        if (savedSession) {
            const data = JSON.parse(savedSession);
            if (data.session.code === sessionCode) {
                addParticipant(studentId);
                CM.session = data.session;
                CM.responses = data.responses || {};
                
                if (CM.session.status === 'lobby') {
                    showStudentWaitingLobby();
                } else {
                    renderStudentActiveView();
                }
                return;
            }
        }
        
        alert('Session not found. Check the code and try again.');
    };

    function addParticipant(studentId) {
        loadSessionState();
        const existing = CM.session.participants.find(p => p.studentId === studentId);
        if (!existing) {
            CM.session.participants.push({
                studentId: studentId,
                joinedAt: new Date().toISOString(),
                isConnected: true,
                groupId: null
            });
        } else {
            existing.isConnected = true;
        }
        saveSessionState();
    }

    function showStudentWaitingLobby() {
        const content = `
            <div class="max-w-md mx-auto p-6 mt-12 text-center">
                <div class="waiting-card">
                    <div class="checkmark-circle">✓</div>
                    <h2 class="text-xl font-bold mb-2">You're In!</h2>
                    <p class="text-zinc-600 dark:text-zinc-400 mb-4">Session: ${CM.session.code}</p>
                    <p class="text-zinc-500">Waiting for facilitator to start...</p>
                    <div class="mt-4 text-3xl font-bold text-blue-600">${CM.session.participants.length}</div>
                    <p class="text-sm text-zinc-500">students joined</p>
                    <div class="loading-dots mt-6"><span></span><span></span><span></span></div>
                </div>
            </div>
        `;
        document.getElementById('app').innerHTML = content;
        startSessionStatusPolling();
    }

    // ========== ACTIVE SESSION VIEWS ==========

    function renderFacilitatorActiveView() {
        const stage = CM.session.currentStage;
        const phase = CM.session.currentPhase;
        const stageResponses = CM.responses[stage]?.individual || {};
        const responseCount = Object.keys(stageResponses).length;
        const participantCount = CM.session.participants.length;
        const progress = participantCount > 0 ? (responseCount / participantCount) * 100 : 0;

        const content = `
            <div class="flex h-screen">
                <!-- Main Projector View -->
                <div class="flex-1 projector-display" id="projector-display">
                    ${renderProjectorContent()}
                </div>

                <!-- Facilitator Panel -->
                <div class="facilitator-panel ${CM.facilitatorView.showPrivatePanel ? '' : 'hidden'}" id="facilitator-panel">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold">🔒 Facilitator Controls</h3>
                        <button onclick="toggleFacilitatorPanel()" class="text-zinc-400 hover:text-white">✕</button>
                    </div>

                    <div class="text-sm mb-4">
                        <p>Stage: <strong>${STAGE_NAMES[stage] || stage}</strong></p>
                        <p>Phase: <strong>${PHASE_NAMES[phase] || phase}</strong></p>
                        <p>Responses: <strong>${responseCount}/${participantCount}</strong> (${progress.toFixed(0)}%)</p>
                    </div>

                    <div class="control-buttons">
                        ${phase === 'individual' ? `
                            <button onclick="closeVotingEarly()" class="btn-warning btn-full">⏹️ Close & Reveal</button>
                            <button onclick="extendTimer(30)" class="btn-secondary btn-full">+30 sec</button>
                        ` : ''}
                        ${phase === 'reveal' ? `
                            <button onclick="startDiscussionPhase()" class="btn-primary btn-full">💬 Start Discussion</button>
                        ` : ''}
                        ${phase === 'discussion' ? `
                            <button onclick="startReflectionPhase()" class="btn-primary btn-full">🔄 Start Reflection</button>
                            <button onclick="showPathophysPauseUI()" class="btn-secondary btn-full">🔬 Pathophys Pause</button>
                        ` : ''}
                        ${phase === 'reflection' ? `
                            <button onclick="advanceToNextStage()" class="btn-primary btn-full">➡️ Next Stage</button>
                        ` : ''}
                    </div>

                    ${renderPrivateInsights()}
                </div>
            </div>

            <!-- Toggle Panel Button -->
            ${!CM.facilitatorView.showPrivatePanel ? `
                <button onclick="toggleFacilitatorPanel()" 
                        class="fixed right-4 top-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
                    🔒 Controls
                </button>
            ` : ''}
        `;

        document.getElementById('app').innerHTML = content;
        if (phase === 'individual') startPhaseTimer();
    }

    function renderProjectorContent() {
        const stage = CM.session.currentStage;
        const phase = CM.session.currentPhase;
        const caseData = typeof cases !== 'undefined' ? cases.find(c => c.id === CM.session.caseId) : null;
        const variant = caseData?.variants[CM.session.variantKey];

        let phaseContent = '';
        
        if (phase === 'individual') {
            const stageResponses = CM.responses[stage]?.individual || {};
            const responseCount = Object.keys(stageResponses).length;
            const participantCount = CM.session.participants.length;
            const progress = participantCount > 0 ? (responseCount / participantCount) * 100 : 0;
            const timeRemaining = CM.session.timerEnd ? Math.max(0, Math.floor((CM.session.timerEnd - Date.now()) / 1000)) : 0;

            phaseContent = `
                <div class="projector-individual-phase">
                    <div class="progress-circle">
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" class="progress-bg"/>
                            <circle cx="50" cy="50" r="45" class="progress-fill" style="stroke-dashoffset: ${283 - (283 * progress / 100)}"/>
                        </svg>
                        <div class="progress-text">
                            <span class="count">${responseCount}</span>
                            <span class="total">/${participantCount}</span>
                        </div>
                    </div>
                    <p class="mt-4 text-zinc-500">Responses Submitted</p>
                    
                    <div class="timer-display">
                        <div class="timer-value" id="projector-timer">${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60).toString().padStart(2, '0')}</div>
                    </div>
                    
                    <p class="text-xl mt-8">Enter your answer on your device</p>
                    <p class="text-zinc-500 mt-2">🔒 Results hidden until voting closes</p>
                </div>
            `;
        } else if (phase === 'reveal' || phase === 'discussion') {
            phaseContent = renderResultsReveal();
        } else if (phase === 'reflection') {
            phaseContent = `
                <div class="text-center py-12">
                    <h2 class="text-3xl font-bold mb-4">🔄 Reflection Time</h2>
                    <p class="text-xl text-zinc-600">Students are submitting their reflections...</p>
                    ${renderResultsReveal()}
                </div>
            `;
        }

        return `
            <div class="max-w-4xl mx-auto">
                <div class="projector-header">
                    <div>
                        <span class="font-bold">ReasonDx</span> | Session: ${CM.session.code}
                    </div>
                    <div class="text-right">
                        ${variant?.name || 'Patient'}, ${variant?.age || '?'}${variant?.gender?.charAt(0).toUpperCase() || ''}
                    </div>
                </div>

                <div class="text-center mb-6">
                    <div class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-lg mb-2">
                        "${variant?.chiefComplaint || 'Chief complaint'}"
                    </div>
                    <div class="flex justify-center gap-4 mt-4">
                        <span class="stage-badge">${STAGE_NAMES[stage] || stage}</span>
                        <span class="phase-badge ${phase === 'individual' ? 'individual' : 'reflection'}">${PHASE_NAMES[phase] || phase}</span>
                    </div>
                </div>

                ${phaseContent}
            </div>
        `;
    }

    function renderResultsReveal() {
        const stage = CM.session.currentStage;
        const responses = Object.values(CM.responses[stage]?.individual || {});
        if (responses.length === 0) return '<p class="text-center text-zinc-500">No responses yet</p>';

        const distribution = {};
        let totalConfidence = 0;
        responses.forEach(r => {
            const answer = r.primaryDiagnosis || r.answer || 'Other';
            distribution[answer] = (distribution[answer] || 0) + 1;
            totalConfidence += r.confidence || 0;
        });

        const sortedAnswers = Object.entries(distribution).sort((a, b) => b[1] - a[1]);
        const avgConfidence = (totalConfidence / responses.length).toFixed(1);

        return `
            <div class="mt-8">
                <h3 class="text-xl font-bold mb-4 text-center">📊 Class Results</h3>
                <div class="distribution-chart max-w-2xl mx-auto">
                    ${sortedAnswers.map(([answer, count], i) => {
                        const pct = ((count / responses.length) * 100).toFixed(0);
                        return `
                            <div class="distribution-row">
                                <div class="answer-label">${answer}</div>
                                <div class="bar-container">
                                    <div class="bar ${i === 0 ? 'primary' : 'secondary'}" style="width: ${pct}%"></div>
                                </div>
                                <div class="percentage">${pct}%</div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="text-center mt-4 text-zinc-600 dark:text-zinc-400">
                    Average Confidence: ${'★'.repeat(Math.round(avgConfidence))}${'☆'.repeat(5 - Math.round(avgConfidence))} (${avgConfidence}/5)
                </div>
            </div>
        `;
    }

    function renderPrivateInsights() {
        const stage = CM.session.currentStage;
        const caseData = typeof cases !== 'undefined' ? cases.find(c => c.id === CM.session.caseId) : null;
        const variant = caseData?.variants[CM.session.variantKey];
        const correctDx = variant?.allDiagnoses?.find(d => d.correctCategory === 'likely')?.name || 'Unknown';
        
        const responses = Object.values(CM.responses[stage]?.individual || {});
        const correctCount = responses.filter(r => (r.primaryDiagnosis || r.answer) === correctDx).length;
        const overconfidentWrong = responses.filter(r => (r.primaryDiagnosis || r.answer) !== correctDx && r.confidence >= 4);

        return `
            <div class="private-insights mt-6">
                <h4 class="font-semibold mb-3">🔒 Private Insights</h4>
                <div class="text-sm mb-2">
                    <span class="text-zinc-400">Correct Answer:</span>
                    <span class="font-medium text-green-400">${correctDx}</span>
                </div>
                <div class="text-sm mb-2">
                    <span class="text-zinc-400">Class Accuracy:</span>
                    <span class="font-medium">${responses.length > 0 ? Math.round((correctCount / responses.length) * 100) : 0}%</span>
                </div>
                ${overconfidentWrong.length > 0 ? `
                    <div class="warning-insight">
                        ⚠️ ${overconfidentWrong.length} student(s) confident but wrong
                    </div>
                ` : ''}
            </div>
        `;
    }

    // ========== STUDENT ACTIVE VIEW ==========

    function renderStudentActiveView() {
        loadSessionState();
        const phase = CM.session.currentPhase;
        
        let content = '';
        switch (phase) {
            case 'individual':
                content = renderStudentIndividualPhase();
                break;
            case 'reveal':
            case 'discussion':
                content = renderStudentDiscussionView();
                break;
            case 'reflection':
                content = renderStudentReflectionPhase();
                break;
            default:
                content = `<div class="text-center py-12"><p>Waiting for facilitator...</p><div class="loading-dots"><span></span><span></span><span></span></div></div>`;
        }

        document.getElementById('app').innerHTML = `<div class="max-w-2xl mx-auto p-6">${content}</div>`;
    }

    function renderStudentIndividualPhase() {
        const stage = CM.session.currentStage;
        const caseData = typeof cases !== 'undefined' ? cases.find(c => c.id === CM.session.caseId) : null;
        const variant = caseData?.variants[CM.session.variantKey];
        const diagnoses = variant?.allDiagnoses?.map(d => d.name) || ['Diagnosis 1', 'Diagnosis 2', 'Diagnosis 3'];

        return `
            <div class="phase-header">
                <span class="stage-badge">${STAGE_NAMES[stage] || stage}</span>
                <span class="phase-badge individual">🤔 Individual Thinking</span>
            </div>

            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
                <div class="font-medium">${variant?.name || 'Patient'}, ${variant?.age || '?'}${variant?.gender?.charAt(0).toUpperCase() || ''}</div>
                <div class="text-sm text-zinc-600 dark:text-zinc-400">"${variant?.chiefComplaint || 'Chief complaint'}"</div>
            </div>

            <div class="mb-6">
                <label class="block font-medium mb-2">What is your leading diagnosis?</label>
                <select id="primary-diagnosis-select" class="w-full p-3 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700">
                    <option value="">Select your answer...</option>
                    ${diagnoses.map(d => `<option value="${d}">${d}</option>`).join('')}
                </select>
            </div>

            <div class="confidence-slider-container">
                <label class="block font-medium mb-2">How confident are you?</label>
                <input type="range" min="1" max="5" value="3" class="confidence-slider" id="confidence-slider"
                       oninput="document.getElementById('conf-display').innerHTML = '★'.repeat(this.value) + '☆'.repeat(5 - this.value)">
                <div class="confidence-value" id="conf-display">★★★☆☆</div>
            </div>

            <div class="mb-6">
                <label class="block text-sm font-medium mb-2">Brief reasoning (optional):</label>
                <textarea id="reasoning-input" rows="2" placeholder="Why did you choose this?" 
                          class="w-full p-3 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700"></textarea>
            </div>

            <button onclick="submitIndividualResponse()" class="btn-primary btn-large btn-full">
                🔒 Lock In My Answer
            </button>
            <p class="text-center text-sm text-zinc-500 mt-2">🔒 Your answer is private until everyone submits</p>
        `;
    }

    window.submitIndividualResponse = function() {
        const stage = CM.session.currentStage;
        const studentId = localStorage.getItem('reasondx_study_id');
        const primaryDx = document.getElementById('primary-diagnosis-select')?.value;
        const confidence = parseInt(document.getElementById('confidence-slider')?.value || 3);
        const reasoning = document.getElementById('reasoning-input')?.value || '';

        if (!primaryDx) { alert('Please select your leading diagnosis'); return; }

        loadSessionState();
        if (!CM.responses[stage]) CM.responses[stage] = { individual: {}, postDiscussion: {} };
        CM.responses[stage].individual[studentId] = {
            studentId,
            primaryDiagnosis: primaryDx,
            confidence,
            reasoning,
            timestamp: new Date().toISOString()
        };
        saveSessionState();

        showWaitingForOthers();
    };

    function showWaitingForOthers() {
        const stage = CM.session.currentStage;
        loadSessionState();
        const stageResponses = CM.responses[stage]?.individual || {};
        const count = Object.keys(stageResponses).length;
        const total = CM.session.participants.length;

        document.getElementById('app').innerHTML = `
            <div class="max-w-md mx-auto p-6 mt-12 text-center">
                <div class="waiting-card">
                    <div class="checkmark-circle">✓</div>
                    <h2 class="text-xl font-bold mb-2">Answer Locked In!</h2>
                    <p class="text-zinc-600 dark:text-zinc-400 mb-4">Waiting for classmates...</p>
                    <div class="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-3 mb-2">
                        <div class="bg-blue-600 h-3 rounded-full transition-all" style="width: ${(count/total)*100}%"></div>
                    </div>
                    <p class="text-sm text-zinc-500">${count}/${total} submitted</p>
                </div>
            </div>
        `;
        startPhasePolling();
    }

    function renderStudentDiscussionView() {
        return `
            <div class="text-center py-12">
                <h2 class="text-2xl font-bold mb-4">💬 Group Discussion</h2>
                <p class="text-zinc-600 dark:text-zinc-400 mb-6">Look at the results on the screen and discuss with your classmates</p>
                <ul class="text-left max-w-md mx-auto space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>• Share your reasoning with the group</li>
                    <li>• Listen to alternative perspectives</li>
                    <li>• Consider what you might have missed</li>
                </ul>
                <div class="loading-dots mt-8"><span></span><span></span><span></span></div>
                <p class="text-sm text-zinc-500 mt-4">Waiting for facilitator to advance...</p>
            </div>
        `;
    }

    function renderStudentReflectionPhase() {
        const stage = CM.session.currentStage;
        const studentId = localStorage.getItem('reasondx_study_id');
        loadSessionState();
        const original = CM.responses[stage]?.individual[studentId];
        
        if (!original) return '<p>Error: Original response not found</p>';

        const caseData = typeof cases !== 'undefined' ? cases.find(c => c.id === CM.session.caseId) : null;
        const variant = caseData?.variants[CM.session.variantKey];
        const diagnoses = variant?.allDiagnoses?.map(d => d.name) || [];

        return `
            <div class="phase-header">
                <span class="stage-badge">${STAGE_NAMES[stage] || stage}</span>
                <span class="phase-badge reflection">🔄 Reflection</span>
            </div>

            <div class="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg mb-6">
                <p class="text-sm text-zinc-500 mb-1">Your original answer:</p>
                <p class="font-medium">${original.primaryDiagnosis}</p>
                <p class="text-sm">Confidence: ${'★'.repeat(original.confidence)}${'☆'.repeat(5 - original.confidence)}</p>
            </div>

            <div class="mb-6">
                <p class="font-medium mb-3">After discussing, would you change your answer?</p>
                <label class="radio-card">
                    <input type="radio" name="change-decision" value="keep" checked onchange="document.getElementById('new-answer-section').style.display='none'">
                    <div class="card-content"><span>✓</span><span>Keep my original answer</span></div>
                </label>
                <label class="radio-card">
                    <input type="radio" name="change-decision" value="change" onchange="document.getElementById('new-answer-section').style.display='block'">
                    <div class="card-content"><span>↻</span><span>Change my answer</span></div>
                </label>
            </div>

            <div id="new-answer-section" style="display: none;" class="mb-6">
                <label class="block font-medium mb-2">New Answer:</label>
                <select id="new-answer-select" class="w-full p-3 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700">
                    ${diagnoses.filter(d => d !== original.primaryDiagnosis).map(d => `<option value="${d}">${d}</option>`).join('')}
                </select>
            </div>

            <div class="confidence-slider-container">
                <label class="block font-medium mb-2">Your confidence now:</label>
                <input type="range" min="1" max="5" value="${original.confidence}" class="confidence-slider" id="new-confidence-slider"
                       oninput="document.getElementById('new-conf-display').innerHTML = '★'.repeat(this.value) + '☆'.repeat(5 - this.value)">
                <div class="confidence-value" id="new-conf-display">${'★'.repeat(original.confidence)}${'☆'.repeat(5 - original.confidence)}</div>
            </div>

            <div class="mb-6">
                <p class="font-medium mb-2">What influenced your thinking?</p>
                <div class="space-y-2">
                    <label class="flex items-center gap-2"><input type="checkbox" name="influence" value="peer_reasoning"> A classmate's reasoning</label>
                    <label class="flex items-center gap-2"><input type="checkbox" name="influence" value="group_consensus"> Seeing class agreement</label>
                    <label class="flex items-center gap-2"><input type="checkbox" name="influence" value="self_explanation"> Explaining helped me think</label>
                    <label class="flex items-center gap-2"><input type="checkbox" name="influence" value="new_information"> Heard new information</label>
                    <label class="flex items-center gap-2"><input type="checkbox" name="influence" value="facilitator_prompt"> Facilitator's question</label>
                </div>
            </div>

            <button onclick="submitReflection()" class="btn-primary btn-large btn-full">Submit Reflection</button>
        `;
    }

    window.submitReflection = function() {
        const stage = CM.session.currentStage;
        const studentId = localStorage.getItem('reasondx_study_id');
        loadSessionState();
        const original = CM.responses[stage]?.individual[studentId];
        
        const changed = document.querySelector('input[name="change-decision"]:checked')?.value === 'change';
        const newAnswer = changed ? document.getElementById('new-answer-select')?.value : original?.primaryDiagnosis;
        const newConfidence = parseInt(document.getElementById('new-confidence-slider')?.value || original?.confidence);
        const influences = Array.from(document.querySelectorAll('input[name="influence"]:checked')).map(cb => cb.value);

        if (!CM.responses[stage].postDiscussion) CM.responses[stage].postDiscussion = {};
        CM.responses[stage].postDiscussion[studentId] = {
            studentId,
            originalAnswer: original?.primaryDiagnosis,
            changedAnswer: changed,
            newAnswer,
            confidenceBefore: original?.confidence,
            confidenceAfter: newConfidence,
            influenceFactors: influences,
            timestamp: new Date().toISOString()
        };
        saveSessionState();

        document.getElementById('app').innerHTML = `
            <div class="max-w-md mx-auto p-6 mt-12 text-center">
                <div class="waiting-card">
                    <div class="checkmark-circle">✓</div>
                    <h2 class="text-xl font-bold mb-2">Reflection Submitted!</h2>
                    <p class="text-zinc-600 dark:text-zinc-400">Waiting for next stage...</p>
                    <div class="loading-dots mt-6"><span></span><span></span><span></span></div>
                </div>
            </div>
        `;
        startPhasePolling();
    };

    // ========== PHASE TRANSITIONS ==========

    let timerInterval = null;

    function startPhaseTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            const remaining = Math.max(0, CM.session.timerEnd - Date.now());
            const seconds = Math.floor(remaining / 1000);
            
            const timerEl = document.getElementById('projector-timer');
            if (timerEl) timerEl.textContent = `${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,'0')}`;

            // Auto-advance check
            loadSessionState();
            const stage = CM.session.currentStage;
            const responses = CM.responses[stage]?.individual || {};
            const responseCount = Object.keys(responses).length;
            const participantCount = CM.session.participants.length;
            const pct = participantCount > 0 ? responseCount / participantCount : 0;

            if (pct >= CM.session.autoAdvanceThreshold || remaining <= 0) {
                clearInterval(timerInterval);
                advanceToRevealPhase();
            }
        }, 1000);
    }

    function advanceToRevealPhase() {
        CM.session.currentPhase = 'reveal';
        CM.session.timerEnd = null;
        saveSessionState();
        broadcastMessage({ type: 'phase_change', phase: 'reveal' });
        renderFacilitatorActiveView();
    }

    window.closeVotingEarly = function() {
        clearInterval(timerInterval);
        advanceToRevealPhase();
    };

    window.extendTimer = function(seconds) {
        CM.session.timerEnd += seconds * 1000;
        saveSessionState();
        showToast(`Timer extended by ${seconds} seconds`, 'success');
    };

    window.startDiscussionPhase = function() {
        CM.session.currentPhase = 'discussion';
        saveSessionState();
        broadcastMessage({ type: 'phase_change', phase: 'discussion' });
        renderFacilitatorActiveView();
    };

    window.startReflectionPhase = function() {
        CM.session.currentPhase = 'reflection';
        saveSessionState();
        broadcastMessage({ type: 'phase_change', phase: 'reflection' });
        renderFacilitatorActiveView();
    };

    window.advanceToNextStage = function() {
        const stages = ['differential', 'history', 'physical', 'revised-differential', 'workup', 'diagnosis', 'management'];
        const idx = stages.indexOf(CM.session.currentStage);
        
        if (idx < stages.length - 1) {
            CM.session.currentStage = stages[idx + 1];
            CM.session.currentPhase = 'individual';
            CM.session.timerEnd = Date.now() + (CM.session.timerDuration * 1000);
            CM.responses[CM.session.currentStage] = { individual: {}, postDiscussion: {} };
            saveSessionState();
            broadcastMessage({ type: 'stage_change', stage: CM.session.currentStage });
            renderFacilitatorActiveView();
        } else {
            completeSession();
        }
    };

    function completeSession() {
        CM.session.status = 'completed';
        saveSessionState();
        document.getElementById('app').innerHTML = `
            <div class="max-w-2xl mx-auto p-6 mt-12 text-center">
                <h1 class="text-3xl font-bold mb-4">🎉 Session Complete!</h1>
                <p class="text-zinc-600 dark:text-zinc-400 mb-8">Great work everyone!</p>
                <button onclick="downloadSessionReport()" class="btn-primary">📥 Download Report</button>
                <button onclick="goToScreen('menu')" class="btn-secondary ml-4">Return to Menu</button>
            </div>
        `;
    }

    window.downloadSessionReport = function() {
        const report = { session: CM.session, responses: CM.responses };
        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `classroom-session-${CM.session.code}-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
    };

    // ========== PERSISTENCE & POLLING ==========

    function saveSessionState() {
        localStorage.setItem('reasondx_classroom_session', JSON.stringify({
            session: CM.session,
            responses: CM.responses,
            savedAt: new Date().toISOString()
        }));
    }

    function loadSessionState() {
        const saved = localStorage.getItem('reasondx_classroom_session');
        if (saved) {
            const data = JSON.parse(saved);
            CM.session = data.session;
            CM.responses = data.responses || {};
        }
    }

    function broadcastMessage(msg) {
        localStorage.setItem('reasondx_classroom_broadcast', JSON.stringify({ ...msg, timestamp: Date.now() }));
    }

    let pollingInterval = null;

    function startParticipantPolling() {
        if (pollingInterval) clearInterval(pollingInterval);
        pollingInterval = setInterval(() => {
            loadSessionState();
            const countEl = document.getElementById('participant-count');
            const fillEl = document.getElementById('attendance-fill');
            const listEl = document.getElementById('joined-students');
            if (countEl) countEl.textContent = CM.session.participants.length;
            if (fillEl) fillEl.style.width = `${(CM.session.participants.length / CM.session.expectedCount) * 100}%`;
            if (listEl) listEl.innerHTML = CM.session.participants.map(p => `<span class="student-chip">${p.studentId}</span>`).join('') || '<span class="text-zinc-400 text-sm">Waiting...</span>';
        }, 2000);
    }

    function startSessionStatusPolling() {
        if (pollingInterval) clearInterval(pollingInterval);
        pollingInterval = setInterval(() => {
            loadSessionState();
            if (CM.session.status === 'active') {
                clearInterval(pollingInterval);
                renderStudentActiveView();
            }
        }, 2000);
    }

    function startPhasePolling() {
        if (pollingInterval) clearInterval(pollingInterval);
        const lastPhase = CM.session.currentPhase;
        const lastStage = CM.session.currentStage;
        pollingInterval = setInterval(() => {
            loadSessionState();
            if (CM.session.currentPhase !== lastPhase || CM.session.currentStage !== lastStage) {
                clearInterval(pollingInterval);
                renderStudentActiveView();
            }
        }, 1500);
    }

    // ========== UTILITIES ==========

    window.copySessionCode = function() {
        navigator.clipboard.writeText(CM.session.code).then(() => showToast('Session code copied!', 'success'));
    };

    window.toggleFacilitatorPanel = function() {
        CM.facilitatorView.showPrivatePanel = !CM.facilitatorView.showPrivatePanel;
        renderFacilitatorActiveView();
    };

    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => { toast.classList.add('fade-out'); setTimeout(() => toast.remove(), 300); }, 3000);
    }

    window.showToast = showToast;

    // Initialize
    CM.initialized = true;
    console.log('[ClassroomMode] Initialized');
})();
// ============================================================================
// PART 3: SMALL GROUP MODE, ENHANCED FEATURES, NAVIGATION
// ============================================================================

(function() {
    'use strict';

    // ========================================================================
    // SMALL GROUP MODE
    // ========================================================================

    window.SmallGroupMode = {
        version: '1.0.0',
        groups: [],
        studentGroups: {},
        groupResponses: {},
        groupColors: {
            'blue': { name: 'Blue Team', color: '#3B82F6', icon: '🔵' },
            'red': { name: 'Red Team', color: '#EF4444', icon: '🔴' },
            'green': { name: 'Green Team', color: '#10B981', icon: '🟢' },
            'yellow': { name: 'Yellow Team', color: '#F59E0B', icon: '🟡' },
            'purple': { name: 'Purple Team', color: '#8B5CF6', icon: '🟣' },
            'orange': { name: 'Orange Team', color: '#F97316', icon: '🟠' }
        }
    };

    const SGM = window.SmallGroupMode;

    function generateGroups(count) {
        const keys = Object.keys(SGM.groupColors);
        return keys.slice(0, count).map((key, i) => ({
            id: key, name: SGM.groupColors[key].name, color: SGM.groupColors[key].color,
            icon: SGM.groupColors[key].icon, members: [], roomNumber: i + 1
        }));
    }

    window.createSmallGroupSession = function(options = {}) {
        SGM.groups = options.groups || generateGroups(options.groupCount || 6);
        window.createClassroomSession({ ...options, type: 'small-group' });
    };

    window.renderCrossGroupComparison = function() {
        const CM = window.ClassroomMode;
        if (!CM) return '';
        const stage = CM.session.currentStage;
        
        const metrics = SGM.groups.map(group => {
            const responses = group.members.map(m => CM.responses[stage]?.individual[m]).filter(r => r);
            const dist = {};
            responses.forEach(r => { const a = r.primaryDiagnosis || r.answer; if (a) dist[a] = (dist[a] || 0) + 1; });
            const sorted = Object.entries(dist).sort((a, b) => b[1] - a[1]);
            return {
                group, consensus: sorted[0]?.[0], consensusPct: responses.length > 0 && sorted[0] ? sorted[0][1] / responses.length * 100 : 0,
                avgConf: responses.length > 0 ? responses.reduce((s, r) => s + (r.confidence || 0), 0) / responses.length : 0
            };
        });

        return `
            <div class="cross-group-comparison">
                <h3 class="text-xl font-bold mb-4">📊 Cross-Group Comparison</h3>
                <table class="w-full"><thead><tr><th class="text-left p-2">Group</th><th class="text-left p-2">Top Answer</th><th class="text-left p-2">Confidence</th><th class="text-left p-2">Consensus</th></tr></thead>
                <tbody>${metrics.map(m => `<tr><td class="p-2"><span class="group-badge-small" style="background:${m.group.color}">${m.group.icon} ${m.group.name}</span></td>
                <td class="p-2">${m.consensus || '—'}</td><td class="p-2">${'★'.repeat(Math.round(m.avgConf))}${'☆'.repeat(5 - Math.round(m.avgConf))}</td>
                <td class="p-2"><div class="consensus-bar"><div class="consensus-fill" style="width:${m.consensusPct}%;background:${m.group.color}"></div></div>${m.consensusPct.toFixed(0)}%</td></tr>`).join('')}</tbody></table>
            </div>`;
    };

    // ========================================================================
    // PATHOPHYSIOLOGY DEEP DIVES
    // ========================================================================

    window.PathophysDeepDive = {
        concepts: {
            'fever': { title: "Why Fever?", short: "Pyrogens reset the hypothalamic thermostat", full: "<p>IL-1, IL-6, TNF-α → hypothalamus → PGE2 → raises set point → shivering.</p>", pearl: "NSAIDs block COX → less PGE2. Fever is protective!" },
            'crackles': { title: "Why Crackles?", short: "Fluid-filled alveoli snap open on inspiration", full: "<p>Alveoli collapse when filled with fluid, then 'pop' open = crackles.</p>", pearl: "Bilateral bases = CHF; Unilateral = pneumonia" },
            'elevated-lactate': { title: "Why Elevated Lactate?", short: "Tissue hypoperfusion → anaerobic metabolism", full: "<p>Hypoperfusion → anaerobic → lactate. Also impaired clearance.</p>", pearl: "Lactate >4 = severe sepsis. Clearance is good sign." },
            'consolidation': { title: "Why Consolidation?", short: "Alveoli fill with inflammatory exudate", full: "<p>Infection → immune response → exudate fills alveoli → dense on imaging.</p>", pearl: "Bronchial breath sounds, egophony, increased fremitus" },
            'troponin': { title: "Why Elevated Troponin?", short: "Myocyte death releases cardiac proteins", full: "<p>Ischemia → cell death → troponin leaks → detectable 3-6 hours, peaks 12-24h.</p>", pearl: "High-sensitivity detects small infarcts but also rises in PE, sepsis" },
            'jvd': { title: "Why JVD in Heart Failure?", short: "Elevated RA pressure backs up to jugular veins", full: "<p>Heart failure → blood backs up → elevated RA pressure → JVP rises.</p>", pearl: "JVD + edema + hepatomegaly = right heart failure" }
        }
    };

    window.renderDeepDiveButton = function(conceptId) {
        return `<button class="deep-dive-btn" onclick="showDeepDive('${conceptId}')">🔬 Why does this happen?</button>`;
    };

    window.showDeepDive = function(conceptId) {
        const c = window.PathophysDeepDive.concepts[conceptId];
        if (!c) return;
        const modal = document.createElement('div');
        modal.className = 'deep-dive-modal'; modal.id = 'deep-dive-modal';
        modal.innerHTML = `<div class="deep-dive-overlay" onclick="closeDeepDive()"></div>
            <div class="deep-dive-content"><div class="deep-dive-header"><span>🔬</span><h2>${c.title}</h2><button class="close-btn" onclick="closeDeepDive()">×</button></div>
            <div class="deep-dive-body"><div class="short-answer"><strong>Quick:</strong> ${c.short}</div><div class="mt-4">${c.full}</div>
            ${c.pearl ? `<div class="clinical-pearl-box"><span class="pearl-icon">💎</span><div>${c.pearl}</div></div>` : ''}</div>
            <div class="deep-dive-footer"><button onclick="closeDeepDive()" class="btn-primary">Got it!</button></div></div>`;
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('visible'), 10);
    };

    window.closeDeepDive = function() {
        const m = document.getElementById('deep-dive-modal');
        if (m) { m.classList.remove('visible'); setTimeout(() => m.remove(), 300); }
    };

    window.showPathophysPauseUI = function() {
        const qs = [{ q: "Why does sepsis cause elevated lactate?", c: "elevated-lactate" }, { q: "What causes crackles?", c: "crackles" }, { q: "Why the fever?", c: "fever" }];
        const s = qs[Math.floor(Math.random() * qs.length)];
        const p = document.getElementById('projector-display');
        if (p) p.innerHTML = `<div class="text-center py-12"><h1 class="text-4xl font-bold text-purple-600 mb-8">🔬 PATHOPHYS PAUSE</h1><p class="text-2xl mb-8">"${s.q}"</p><p class="text-zinc-500 mb-8">Discuss with your neighbor.</p><button onclick="showDeepDive('${s.c}')" class="btn-primary btn-large">Reveal</button></div>`;
    };

    // ========================================================================
    // ENHANCED FEATURES
    // ========================================================================

    window.EnhancedFeatures = { confidenceHistory: [], userPatterns: { bySystem: {}, confidenceCalibration: [], commonMisses: [], answerChangePatterns: [] } };
    const EF = window.EnhancedFeatures;

    window.renderWisdomOfCrowds = function(responses, correctAnswer) {
        const dist = {}; responses.forEach(r => { const a = r.primaryDiagnosis || r.answer; if (a) dist[a] = (dist[a] || 0) + 1; });
        const sorted = Object.entries(dist).sort((a, b) => b[1] - a[1]);
        const crowd = sorted[0]?.[0], correct = crowd === correctAnswer;
        return `<div class="mt-6 p-4 rounded-lg ${correct ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}">
            <h4 class="font-bold mb-2">🧠 Wisdom of the Crowd</h4><p>Class chose: <strong>${crowd || 'N/A'}</strong></p>
            <p class="text-lg mt-2">${correct ? '✅ Crowd got it!' : '❌ Crowd missed it'}</p></div>`;
    };

    window.renderConfidenceBet = function() {
        return `<div class="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg"><h4 class="font-bold mb-2">🎲 Would you bet $10?</h4>
            <div class="flex gap-2"><button onclick="recordBet('yes')" class="flex-1 py-2 bg-green-500 text-white rounded">💰 Yes</button>
            <button onclick="recordBet('maybe')" class="flex-1 py-2 bg-yellow-500 text-white rounded">🤔 Maybe</button>
            <button onclick="recordBet('no')" class="flex-1 py-2 bg-red-500 text-white rounded">❌ No</button></div></div>`;
    };

    window.recordBet = function(bet) { EF.confidenceHistory.push({ bet, timestamp: new Date().toISOString() }); localStorage.setItem('reasondx_enhanced', JSON.stringify(EF)); showToast('Recorded!', 'success'); };

    window.showMyPatterns = function() {
        const saved = localStorage.getItem('reasondx_enhanced'); if (saved) Object.assign(EF, JSON.parse(saved));
        const cal = EF.userPatterns.confidenceCalibration || [], byC = {1:{c:0,t:0},2:{c:0,t:0},3:{c:0,t:0},4:{c:0,t:0},5:{c:0,t:0}};
        cal.forEach(d => { byC[d.confidence].t++; if (d.wasCorrect) byC[d.confidence].c++; });
        const chg = EF.userPatterns.answerChangePatterns || [];

        document.getElementById('app').innerHTML = `<div class="max-w-4xl mx-auto p-6">
            <div class="flex items-center justify-between mb-6"><button onclick="goToScreen('menu')" class="text-zinc-500 hover:text-zinc-900">← Back</button><h1 class="text-2xl font-bold">🔄 My Patterns</h1></div>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="pattern-card"><h4>📊 Confidence Calibration</h4><p class="card-description">Are you calibrated?</p>
                    ${[1,2,3,4,5].map(l => { const d = byC[l], acc = d.t > 0 ? d.c/d.t*100 : 0, exp = l*20; return `<div class="calibration-row"><span class="w-20 text-sm">${'★'.repeat(l)}${'☆'.repeat(5-l)}</span><div class="calibration-bar"><div class="expected-marker" style="left:${exp}%"></div><div class="actual-bar ${Math.abs(acc-exp)<15?'calibrated':'miscalibrated'}" style="width:${acc}%"></div></div><span class="w-12 text-right text-sm">${d.t>0?acc.toFixed(0)+'%':'—'}</span></div>`; }).join('')}
                </div>
                <div class="pattern-card"><h4>🎯 Answer Changes</h4><p class="card-description">Do you change wisely?</p>
                    <div class="space-y-2 mt-4"><div class="flex justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded"><span>Changed to correct</span><span class="font-bold text-green-600">${chg.filter(c=>c.changedToCorrect).length}</span></div>
                    <div class="flex justify-between p-2 bg-red-50 dark:bg-red-900/20 rounded"><span>Changed to wrong</span><span class="font-bold text-red-600">${chg.filter(c=>c.changedToWrong).length}</span></div>
                    <div class="flex justify-between p-2 bg-zinc-100 dark:bg-zinc-800 rounded"><span>Kept correct</span><span class="font-bold">${chg.filter(c=>!c.changed&&c.wasCorrect).length}</span></div></div>
                </div>
            </div></div>`;
    };

    window.recordForPatterns = function(data) {
        const saved = localStorage.getItem('reasondx_enhanced'); if (saved) Object.assign(EF, JSON.parse(saved));
        if (data.confidence !== undefined && data.wasCorrect !== undefined) EF.userPatterns.confidenceCalibration.push({ confidence: data.confidence, wasCorrect: data.wasCorrect });
        if (data.system) { if (!EF.userPatterns.bySystem[data.system]) EF.userPatterns.bySystem[data.system] = { correct: 0, total: 0 }; EF.userPatterns.bySystem[data.system].total++; if (data.wasCorrect) EF.userPatterns.bySystem[data.system].correct++; }
        if (!data.wasCorrect && data.correctAnswer) EF.userPatterns.commonMisses.push({ correctAnswer: data.correctAnswer, yourAnswer: data.yourAnswer });
        if (data.changed !== undefined) EF.userPatterns.answerChangePatterns.push({ changed: data.changed, changedToCorrect: data.changed && data.newAnswerCorrect, changedToWrong: data.changed && !data.newAnswerCorrect, wasCorrect: !data.changed && data.originalCorrect });
        localStorage.setItem('reasondx_enhanced', JSON.stringify(EF));
    };

    // ========================================================================
    // ASYNC ASSIGNMENTS
    // ========================================================================

    window.AsyncClassroom = { assignments: [], completedAssignments: {} };

    window.showAsyncAssignments = function() {
        const AC = window.AsyncClassroom, saved = localStorage.getItem('reasondx_async'); if (saved) Object.assign(AC, JSON.parse(saved));
        const now = new Date(), upcoming = AC.assignments.filter(a => new Date(a.deadline) > now && !AC.completedAssignments[a.id]);
        document.getElementById('app').innerHTML = `<div class="max-w-2xl mx-auto p-6">
            <div class="flex items-center justify-between mb-6"><button onclick="goToScreen('menu')" class="text-zinc-500">← Back</button><h1 class="text-2xl font-bold">📝 Pre-Class Assignments</h1></div>
            ${upcoming.length > 0 ? `<div class="space-y-4">${upcoming.map(a => `<div class="p-4 border rounded-lg"><h3 class="font-medium">${a.title}</h3><button onclick="startAsyncAssignment('${a.id}')" class="btn-primary mt-2">Start</button></div>`).join('')}</div>` : '<div class="text-center py-12"><span class="text-6xl">📭</span><h3 class="text-xl font-bold mt-4">No Assignments</h3></div>'}</div>`;
    };

    // ========================================================================
    // MENU INTEGRATION
    // ========================================================================

    window.renderCollaborativeMenuItems = function() {
        return `
            <section class="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">
                <h2 class="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">👥 Collaborative Learning</h2>
                <div class="space-y-1">
                    <div class="cases-category">
                        <button class="category-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">
                            <span class="icon">🏫</span><div class="text"><div class="label">Classroom Session</div><div class="description">Join or create facilitated sessions</div></div><span class="expand-icon">▶</span>
                        </button>
                        <div class="category-children" style="display: none;">
                            <button onclick="showJoinClassroomSession()" class="nav-item-small"><span class="icon">📱</span><div class="text"><div class="label">Join Live Session</div></div></button>
                            <button onclick="showAsyncAssignments()" class="nav-item-small"><span class="icon">📝</span><div class="text"><div class="label">Pre-Class Assignments</div></div></button>
                            <button onclick="createClassroomSession()" class="nav-item-small border-l-4 border-purple-500"><span class="icon">➕</span><div class="text"><div class="label">Create Session (Faculty)</div></div></button>
                        </div>
                    </div>
                    <div class="cases-category">
                        <button class="category-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">
                            <span class="icon">👥</span><div class="text"><div class="label">Small Group Practice</div><div class="description">Team-based learning</div></div><span class="expand-icon">▶</span>
                        </button>
                        <div class="category-children" style="display: none;">
                            <button onclick="createSmallGroupSession()" class="nav-item-small"><span class="icon">🤝</span><div class="text"><div class="label">Team Differential</div></div></button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">
                <h2 class="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">📊 Learning Insights</h2>
                <div class="space-y-1">
                    <button onclick="showMyPatterns()" class="w-full flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover-row text-left border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20">
                        <div class="flex items-center gap-4"><span class="text-lg">🔄</span><div><div class="font-medium text-indigo-900 dark:text-indigo-100">My Patterns</div><div class="text-sm text-indigo-700 dark:text-indigo-300">Track reasoning tendencies</div></div></div>
                        <span class="px-2 py-0.5 text-xs bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 rounded-full">NEW</span>
                    </button>
                    <button onclick="showPathophysLibrary()" class="w-full flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover-row text-left">
                        <div class="flex items-center gap-4"><span class="text-lg">🔬</span><div><div class="font-medium">Pathophysiology Library</div><div class="text-sm text-zinc-500">Deep dives into mechanisms</div></div></div><span class="text-zinc-400">→</span>
                    </button>
                </div>
            </section>`;
    };

    window.showPathophysLibrary = function() {
        const concepts = Object.entries(window.PathophysDeepDive.concepts);
        document.getElementById('app').innerHTML = `<div class="max-w-4xl mx-auto p-6">
            <div class="flex items-center justify-between mb-6"><button onclick="goToScreen('menu')" class="text-zinc-500">← Back</button><h1 class="text-2xl font-bold">🔬 Pathophysiology Library</h1></div>
            <div class="grid md:grid-cols-2 gap-4">${concepts.map(([id, c]) => `<button onclick="showDeepDive('${id}')" class="p-4 text-left border rounded-lg hover:border-purple-500"><h4 class="font-medium">${c.title}</h4><p class="text-sm text-zinc-500 mt-1">${c.short}</p></button>`).join('')}</div></div>`;
    };

    console.log('[ReasonDx Collaborative Suite] Part 3 loaded');
})();
