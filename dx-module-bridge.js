/**
 * DxSuite Module Bridge
 * ======================
 * Lightweight DxProgress integration for SystemsDx, TeamDx, ConsentDx,
 * ProcedureDx and any other satellite modules that don't have built-in
 * progress recording.
 *
 * Detection strategy: monitors for score displays, completion indicators,
 * and user interactions, then writes to DxProgress.
 *
 * Usage: <script src="../dx-module-bridge.js"></script>
 *        Load AFTER dx-progress.js
 */
(function() {
    'use strict';

    function waitForProgress(cb) {
        if (window.DxProgress) { cb(); return; }
        let n = 0;
        const c = setInterval(() => { n++; if (window.DxProgress) { clearInterval(c); cb(); } if (n > 50) clearInterval(c); }, 100);
    }

    // Detect which module we're in
    function detectModule() {
        const path = window.location.pathname.toLowerCase();
        const title = document.title.toLowerCase();
        if (path.includes('systemsdx')) return { id: 'systemsdx', type: 'crt', topic: 'patient-safety' };
        if (path.includes('teamdx'))    return { id: 'teamdx', type: 'crt', topic: 'interprofessional-collaboration' };
        if (path.includes('consentdx')) return { id: 'consentdx', type: 'crt', topic: 'informed-consent' };
        if (path.includes('proceduredx'))return { id: 'proceduredx', type: 'crt', topic: 'clinical-procedures' };
        if (title.includes('safety'))   return { id: 'systemsdx', type: 'crt', topic: 'patient-safety' };
        if (title.includes('team'))     return { id: 'teamdx', type: 'crt', topic: 'interprofessional-collaboration' };
        return { id: 'unknown-module', type: 'crt', topic: 'general' };
    }

    // Track interaction metrics
    let metrics = {
        startTime: Date.now(),
        interactions: 0,
        phasesCompleted: 0,
        scoresSeen: [],
        recorded: false
    };

    // Monitor for score elements appearing in DOM
    function installScoreObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType !== 1) return;
                    const text = node.textContent || '';
                    // Look for score patterns like "Score: 85%", "85/100", "Excellent"
                    const scoreMatch = text.match(/(\d{1,3})(?:\s*[%/]|\s*out of\s*\d+)/i);
                    if (scoreMatch) {
                        const score = parseInt(scoreMatch[1]);
                        if (score >= 0 && score <= 100) {
                            metrics.scoresSeen.push(score);
                            metrics.phasesCompleted++;
                        }
                    }
                    // Completion keywords
                    if (/excellent|great work|well done|complete|finished|summary/i.test(text) && text.length < 200) {
                        metrics.phasesCompleted++;
                    }
                });
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Track clicks as engagement proxy
    function installClickTracker() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('button, [onclick], .option, .choice, .response-btn');
            if (target) metrics.interactions++;
        });
    }

    // Record to DxProgress on page unload
    function installUnloadRecorder() {
        const mod = detectModule();

        window.addEventListener('beforeunload', () => {
            if (metrics.recorded || metrics.interactions < 3) return; // Don't record if barely interacted
            metrics.recorded = true;

            const timeSpent = Date.now() - metrics.startTime;
            const avgScore = metrics.scoresSeen.length > 0
                ? Math.round(metrics.scoresSeen.reduce((a, b) => a + b, 0) / metrics.scoresSeen.length)
                : null;

            DxProgress.recordCompletion(mod.topic, mod.type, avgScore, {
                moduleId: mod.id,
                timeSpent: timeSpent,
                interactions: metrics.interactions,
                phasesCompleted: metrics.phasesCompleted,
                source: 'module-bridge'
            });
        });

        // Also record when a "complete" or "finish" button is clicked
        document.addEventListener('click', (e) => {
            const target = e.target.closest('button, a');
            if (!target) return;
            const text = (target.textContent || '').toLowerCase();
            if (/(finish|complete|done|submit final|view results|see summary)/i.test(text)) {
                if (metrics.recorded || metrics.interactions < 3) return;
                metrics.recorded = true;

                const timeSpent = Date.now() - metrics.startTime;
                const avgScore = metrics.scoresSeen.length > 0
                    ? Math.round(metrics.scoresSeen.reduce((a, b) => a + b, 0) / metrics.scoresSeen.length)
                    : null;

                DxProgress.recordCompletion(mod.topic, mod.type, avgScore, {
                    moduleId: mod.id,
                    timeSpent: timeSpent,
                    interactions: metrics.interactions,
                    phasesCompleted: metrics.phasesCompleted,
                    source: 'module-bridge'
                });
            }
        });
    }

    // Add quick nav footer
    function addModuleNav() {
        const mod = detectModule();
        const nav = document.createElement('div');
        nav.style.cssText = `
            position: fixed; bottom: 0; left: 0; right: 0;
            background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(12px);
            border-top: 1px solid rgba(255,255,255,0.1);
            padding: 8px 16px; display: flex; align-items: center;
            justify-content: center; gap: 8px; z-index: 9999; flex-wrap: wrap;
            font-family: -apple-system, sans-serif;
        `;
        nav.innerHTML = `
            <span style="color: #94a3b8; font-size: 0.75rem; margin-right: 8px;">${mod.id.replace('dx', 'Dx')}</span>
            <a href="../tools/learning-dashboard.html" style="padding: 6px 14px; background: rgba(5,150,105,0.2); border: 1px solid rgba(5,150,105,0.3); color: #86efac; border-radius: 8px; text-decoration: none; font-size: 0.78rem; font-weight: 600;">📊 Dashboard</a>
            <a href="../index.html" style="padding: 6px 14px; background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.3); color: #93c5fd; border-radius: 8px; text-decoration: none; font-size: 0.78rem; font-weight: 600;">🏠 Home</a>
            <button onclick="this.parentElement.remove();document.body.style.paddingBottom='0'" style="background: none; border: none; color: #64748b; font-size: 1.1rem; cursor: pointer; padding: 4px 8px;">×</button>
        `;
        document.body.appendChild(nav);
        document.body.style.paddingBottom = '52px';
    }

    // Initialize
    waitForProgress(() => {
        installScoreObserver();
        installClickTracker();
        installUnloadRecorder();
        addModuleNav();
        console.log(`DxModuleBridge: Active for ${detectModule().id}`);
    });

})();
