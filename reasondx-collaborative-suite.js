/**
 * ReasonDx Collaborative Learning Suite - Mobile Safe Version
 * Classroom Mode, Small Groups, Enhanced Features
 */

(function() {
    'use strict';

    // ========== STYLES ==========
    var styles = document.createElement('style');
    styles.id = 'reasondx-collab-styles';
    styles.textContent = '.session-code-display{display:flex;align-items:center;gap:12px;padding:16px 24px;background:linear-gradient(135deg,#3B82F6,#1D4ED8);border-radius:12px;color:#fff;margin-bottom:20px}.session-code-display .code{font-size:32px;font-weight:700;font-family:monospace;letter-spacing:4px}.attendance-panel{margin:24px 0;padding:20px;background:#f8fafc;border-radius:12px}.dark .attendance-panel{background:#1e293b}.btn-primary{padding:12px 24px;background:linear-gradient(135deg,#3B82F6,#1D4ED8);color:#fff;border:none;border-radius:8px;font-weight:600;cursor:pointer}.btn-primary:disabled{opacity:0.5;cursor:not-allowed}.btn-secondary{padding:12px 24px;background:#e2e8f0;color:#1e293b;border:none;border-radius:8px;font-weight:600;cursor:pointer}.waiting-card{max-width:400px;margin:60px auto;padding:40px;background:#fff;border-radius:16px;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,0.1)}.dark .waiting-card{background:#1e293b}.checkmark-circle{width:80px;height:80px;background:#10B981;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:40px;margin:0 auto 20px}.pattern-card{padding:20px;background:#fff;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:16px}.dark .pattern-card{background:#1e293b;border-color:#374151}.deep-dive-btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:20px;color:#1D4ED8;font-size:13px;cursor:pointer}.deep-dive-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5)}.deep-dive-content{position:relative;width:90%;max-width:600px;max-height:80vh;background:#fff;border-radius:16px;overflow:hidden}.dark .deep-dive-content{background:#1e293b}.deep-dive-header{display:flex;align-items:center;gap:12px;padding:20px;background:linear-gradient(135deg,#8B5CF6,#6D28D9);color:#fff}.deep-dive-body{padding:20px;overflow-y:auto}.clinical-pearl-box{display:flex;gap:12px;padding:16px;background:#FEF3C7;border-left:4px solid #F59E0B;border-radius:0 8px 8px 0;margin:16px 0}';
    
    if (!document.getElementById('reasondx-collab-styles')) {
        document.head.appendChild(styles);
    }

    // ========== CLASSROOM MODE ==========
    window.ClassroomMode = {
        session: { id: null, code: null, status: 'inactive', participants: [], currentStage: null, currentPhase: 'waiting' },
        responses: {}
    };

    function generateSessionCode() {
        var adjs = ['BLUE', 'RED', 'GREEN', 'GOLD', 'SWIFT', 'BRIGHT'];
        var adj = adjs[Math.floor(Math.random() * adjs.length)];
        var num = Math.floor(Math.random() * 90) + 10;
        return adj + '-' + num;
    }

    window.createClassroomSession = function() {
        var CM = window.ClassroomMode;
        CM.session.id = 'session-' + Date.now();
        CM.session.code = generateSessionCode();
        CM.session.status = 'lobby';
        CM.session.participants = [];
        localStorage.setItem('reasondx_classroom_session', JSON.stringify(CM));
        
        document.getElementById('app').innerHTML = '<div class="max-w-4xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500 hover:text-zinc-900">← Back</button>' +
            '<h1 class="text-2xl font-bold">🏫 Classroom Session</h1></div>' +
            '<div class="session-code-display"><span>Session Code:</span><span class="code">' + CM.session.code + '</span></div>' +
            '<div class="attendance-panel"><h3 class="font-semibold mb-2">👥 Waiting for students...</h3>' +
            '<p class="text-zinc-500">Share the session code with your class</p></div>' +
            '<p class="text-center text-zinc-500 mt-8">Full classroom mode coming soon!</p>' +
            '<button onclick="goToScreen(\'menu\')" class="btn-secondary mt-4">← Back to Menu</button></div>';
    };

    window.showJoinClassroomSession = function() {
        document.getElementById('app').innerHTML = '<div class="max-w-md mx-auto p-6 mt-12">' +
            '<div class="text-center mb-8"><span class="text-6xl">🏫</span>' +
            '<h1 class="text-2xl font-bold mt-4">Join Classroom Session</h1></div>' +
            '<div class="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">' +
            '<div class="mb-6"><label class="block text-sm font-medium mb-2">Session Code</label>' +
            '<input type="text" id="session-code-input" placeholder="e.g., BLUE-42" ' +
            'class="w-full p-4 text-2xl text-center font-mono uppercase tracking-widest border-2 border-zinc-300 rounded-lg" maxlength="10"></div>' +
            '<button onclick="attemptJoinSession()" class="btn-primary w-full">Join Session</button></div>' +
            '<div class="text-center mt-4"><button onclick="goToScreen(\'menu\')" class="text-zinc-500 text-sm">← Back to Menu</button></div></div>';
    };

    window.attemptJoinSession = function() {
        var code = document.getElementById('session-code-input');
        if (code && code.value) {
            alert('Session joining coming soon! Code: ' + code.value.toUpperCase());
        } else {
            alert('Please enter a session code');
        }
    };

    // ========== ASYNC ASSIGNMENTS ==========
    window.showAsyncAssignments = function() {
        document.getElementById('app').innerHTML = '<div class="max-w-2xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">📝 Pre-Class Assignments</h1></div>' +
            '<div class="text-center py-12"><span class="text-6xl">📭</span>' +
            '<h3 class="text-xl font-bold mt-4">No Assignments Yet</h3>' +
            '<p class="text-zinc-500">Check back later for pre-class assignments</p></div></div>';
    };

    // ========== SMALL GROUPS ==========
    window.createSmallGroupSession = function() {
        document.getElementById('app').innerHTML = '<div class="max-w-2xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">👥 Small Group Session</h1></div>' +
            '<div class="text-center py-12"><span class="text-6xl">🤝</span>' +
            '<h3 class="text-xl font-bold mt-4">Team Differential</h3>' +
            '<p class="text-zinc-500">Small group collaborative learning coming soon!</p></div></div>';
    };

    // ========== MY PATTERNS ==========
    window.showMyPatterns = function() {
        document.getElementById('app').innerHTML = '<div class="max-w-4xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">🔄 My Patterns</h1></div>' +
            '<div class="grid md:grid-cols-2 gap-4">' +
            '<div class="pattern-card"><h4 class="font-bold">📊 Confidence Calibration</h4>' +
            '<p class="text-zinc-500 text-sm mt-2">Track your confidence vs accuracy over time</p>' +
            '<p class="text-zinc-400 text-sm mt-4">Complete more cases to see patterns</p></div>' +
            '<div class="pattern-card"><h4 class="font-bold">🎯 Answer Changes</h4>' +
            '<p class="text-zinc-500 text-sm mt-2">Do you change answers wisely?</p>' +
            '<p class="text-zinc-400 text-sm mt-4">Complete more cases to see patterns</p></div></div></div>';
    };

    // ========== PATHOPHYS LIBRARY ==========
    window.PathophysDeepDive = {
        concepts: {
            'fever': { title: 'Why Fever?', short: 'Pyrogens reset the hypothalamic thermostat', full: 'IL-1, IL-6, TNF-α reach hypothalamus, stimulate PGE2, raise set point.', pearl: 'NSAIDs block COX → less PGE2. Fever is protective!' },
            'crackles': { title: 'Why Crackles?', short: 'Fluid-filled alveoli snap open on inspiration', full: 'Alveoli collapse when filled with fluid, then pop open on inspiration.', pearl: 'Bilateral bases = CHF; Unilateral = pneumonia' },
            'elevated-lactate': { title: 'Why Elevated Lactate?', short: 'Tissue hypoperfusion → anaerobic metabolism', full: 'Hypoperfusion forces cells to anaerobic metabolism, producing lactate.', pearl: 'Lactate >4 = severe sepsis. Clearance is a good sign.' }
        }
    };

    window.showDeepDive = function(conceptId) {
        var c = window.PathophysDeepDive.concepts[conceptId];
        if (!c) return;

        var modal = document.createElement('div');
        modal.className = 'deep-dive-modal';
        modal.id = 'deep-dive-modal';
        modal.onclick = function(e) { if (e.target === modal) closeDeepDive(); };
        modal.innerHTML = '<div class="deep-dive-content">' +
            '<div class="deep-dive-header"><span>🔬</span><h2 style="flex:1;margin:0">' + c.title + '</h2>' +
            '<button onclick="closeDeepDive()" style="background:none;border:none;color:white;font-size:24px;cursor:pointer">×</button></div>' +
            '<div class="deep-dive-body"><p style="font-weight:600;margin-bottom:12px">' + c.short + '</p>' +
            '<p>' + c.full + '</p>' +
            (c.pearl ? '<div class="clinical-pearl-box"><span>💎</span><span>' + c.pearl + '</span></div>' : '') +
            '<button onclick="closeDeepDive()" class="btn-primary" style="margin-top:16px">Got it!</button></div></div>';
        document.body.appendChild(modal);
    };

    window.closeDeepDive = function() {
        var modal = document.getElementById('deep-dive-modal');
        if (modal) modal.remove();
    };

    window.showPathophysLibrary = function() {
        var concepts = window.PathophysDeepDive.concepts;
        var html = '<div class="max-w-4xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">🔬 Pathophysiology Library</h1></div>' +
            '<div class="grid md:grid-cols-2 gap-4">';
        
        for (var id in concepts) {
            var c = concepts[id];
            html += '<button onclick="showDeepDive(\'' + id + '\')" class="p-4 text-left border rounded-lg hover:border-purple-500">' +
                '<h4 class="font-medium">' + c.title + '</h4>' +
                '<p class="text-sm text-zinc-500 mt-1">' + c.short + '</p></button>';
        }
        
        html += '</div></div>';
        document.getElementById('app').innerHTML = html;
    };

    // ========== MENU ITEMS ==========
    window.renderCollaborativeMenuItems = function() {
        return '<section class="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">' +
            '<h2 class="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">👥 Collaborative Learning</h2>' +
            '<div class="space-y-1">' +
            '<button onclick="showJoinClassroomSession()" class="w-full flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🏫</span><div>' +
            '<div class="font-medium">Join Classroom Session</div>' +
            '<div class="text-sm text-zinc-500">Enter session code to join</div></div></div>' +
            '<span class="text-zinc-400">→</span></button>' +
            '<button onclick="showAsyncAssignments()" class="w-full flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">📝</span><div>' +
            '<div class="font-medium">Pre-Class Assignments</div>' +
            '<div class="text-sm text-zinc-500">Complete cases before class</div></div></div>' +
            '<span class="text-zinc-400">→</span></button>' +
            '<button onclick="createClassroomSession()" class="w-full flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover-row text-left border-l-4 border-purple-500">' +
            '<div class="flex items-center gap-4"><span class="text-lg">➕</span><div>' +
            '<div class="font-medium">Create Session (Faculty)</div>' +
            '<div class="text-sm text-zinc-500">Start a new classroom session</div></div></div>' +
            '<span class="text-zinc-400">→</span></button></div></section>' +
            '<section class="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">' +
            '<h2 class="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">📊 Learning Insights</h2>' +
            '<div class="space-y-1">' +
            '<button onclick="showMyPatterns()" class="w-full flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover-row text-left border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🔄</span><div>' +
            '<div class="font-medium text-indigo-900 dark:text-indigo-100">My Patterns</div>' +
            '<div class="text-sm text-indigo-700 dark:text-indigo-300">Track reasoning tendencies</div></div></div>' +
            '<span class="px-2 py-0.5 text-xs bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 rounded-full">NEW</span></button>' +
            '<button onclick="showPathophysLibrary()" class="w-full flex items-center justify-between py-4 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🔬</span><div>' +
            '<div class="font-medium">Pathophysiology Library</div>' +
            '<div class="text-sm text-zinc-500">Deep dives into mechanisms</div></div></div>' +
            '<span class="text-zinc-400">→</span></button></div></section>';
    };

    // ========== AUTO-INJECT MENU ==========
    function injectMenu() {
        var placeholder = document.getElementById('collaborative-menu-placeholder');
        if (placeholder && !placeholder.innerHTML.trim()) {
            placeholder.innerHTML = window.renderCollaborativeMenuItems();
        }
    }

    // Check periodically for menu placeholder
    setInterval(injectMenu, 500);

    console.log('[ReasonDx Collaborative Suite] Loaded (Mobile Safe)');
})();
