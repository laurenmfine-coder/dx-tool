/**
 * ReasonDx Adventure Tracker
 * ==========================
 * Auto-hooks into adventure case completion (showDebrief) to:
 *   1. Record completion + score in DxProgress
 *   2. Record reasoning pathway (RPFS) from decisionPath
 *   3. Add navigation back to hub + dashboard
 *
 * Drop this script into any adventure page AFTER the adventure's own script.
 * It monkey-patches showDebrief() non-destructively.
 *
 * Requires: dx-progress.js loaded on the page (via ../../dx-progress.js)
 */
(function() {
    'use strict';

    // Derive topicId from the filename or page title
    function getTopicId() {
        // Check URL params first (?topic=acs or ?case=acs)
        const params = new URLSearchParams(window.location.search);
        const fromUrl = params.get('topic') || params.get('case') || params.get('module');
        if (fromUrl) return fromUrl;

        // Derive from filename: acs-expanded-adventure.html → acs
        const path = window.location.pathname;
        const filename = path.split('/').pop().replace('.html', '');
        // Strip common suffixes
        return filename
            .replace(/-expanded-adventure$/, '')
            .replace(/-expanded$/, '')
            .replace(/-adventure$/, '')
            .replace(/-crt$/, '');
    }

    // Extract RPFS-compatible pathway from adventure's decisionPath
    function extractPathway() {
        if (typeof decisionPath === 'undefined' || !Array.isArray(decisionPath)) return null;

        return decisionPath.map((d, i) => ({
            nodeId: `stage-${d.stage || i + 1}`,
            title: d.title || `Stage ${d.stage || i + 1}`,
            choice: d.choice || d.selectedText || 'unknown',
            isOptimal: !!d.isOptimal,
            points: d.points || 0,
            maxPoints: d.maxPoints || 10,
            timestamp: Date.now() - ((decisionPath.length - i) * 30000) // approximate timestamps
        }));
    }

    // Wait for DxProgress to load
    function whenReady(callback) {
        if (window.DxProgress) { callback(); return; }
        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            if (window.DxProgress) { clearInterval(check); callback(); }
            if (attempts > 50) clearInterval(check); // give up after 5s
        }, 100);
    }

    // Hook into showDebrief
    function installHook() {
        if (typeof window.showDebrief !== 'function') return;

        const originalShowDebrief = window.showDebrief;
        const startTime = Date.now();

        window.showDebrief = function() {
            // Call original first
            originalShowDebrief.apply(this, arguments);

            // Now record in DxProgress
            whenReady(() => {
                const topicId = getTopicId();
                const pct = (typeof score !== 'undefined' && typeof maxScore !== 'undefined' && maxScore > 0)
                    ? Math.round((score / maxScore) * 100)
                    : null;
                const timeSpent = Date.now() - startTime;

                // Record adventure completion
                DxProgress.recordCompletion(topicId, 'adventure', pct, {
                    timeSpent: timeSpent,
                    variant: new URLSearchParams(window.location.search).get('variant') || 'default'
                });

                // Record RPFS pathway
                const pathway = extractPathway();
                if (pathway && pathway.length > 0) {
                    const nodes = pathway.map(n => n.choice);
                    const timestamps = pathway.map(n => n.timestamp);
                    const pivotPoints = pathway.filter(n => !n.isOptimal).length;
                    const optimalCount = pathway.filter(n => n.isOptimal).length;

                    DxProgress.recordReasoningPathway(topicId + '-adventure', topicId, nodes, timestamps, {
                        score: pct,
                        duration: timeSpent,
                        diagnosisCorrect: pct >= 70,
                        differentialSize: pathway.length,
                        pivotPoints: pivotPoints,
                        metacogMoments: Math.floor(optimalCount / 2)
                    });
                }

                // Enhance the debrief with navigation buttons
                setTimeout(() => {
                    const debriefContent = document.getElementById('debriefContent');
                    if (debriefContent && !debriefContent.querySelector('.dx-nav-buttons')) {
                        const navDiv = document.createElement('div');
                        navDiv.className = 'dx-nav-buttons';
                        navDiv.style.cssText = 'display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-top: 16px;';
                        navDiv.innerHTML = `
                            <a href="../adventure-hub.html" style="padding: 10px 20px; background: #3b82f6; color: white; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 0.9rem;">🗂️ All Adventures</a>
                            <a href="../../tools/learning-dashboard.html" style="padding: 10px 20px; background: #059669; color: white; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 0.9rem;">📊 My Progress</a>
                            <a href="../deep-dive-player.html?module=${topicId}" style="padding: 10px 20px; background: #8b5cf6; color: white; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 0.9rem;">🔬 Deep Dive</a>
                        `;

                        // Insert after the try-again button
                        const tryAgainBtn = debriefContent.querySelector('.debrief-btn');
                        if (tryAgainBtn) {
                            tryAgainBtn.parentNode.insertBefore(navDiv, tryAgainBtn.nextSibling);
                        } else {
                            debriefContent.appendChild(navDiv);
                        }
                    }
                }, 200);

                console.log(`DxAdventureTracker: Recorded ${topicId} adventure — ${pct}% in ${Math.round(timeSpent/1000)}s`);
            });
        };

        console.log('DxAdventureTracker: Hook installed for', getTopicId());
    }

    // Install when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(installHook, 100));
    } else {
        setTimeout(installHook, 100);
    }

})();
