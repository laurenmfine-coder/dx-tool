/**
 * ReasonDx Tools Integration
 * ==========================
 * Lightweight hooks for tools that aren't primary learning modules
 * but should still contribute to the learner profile.
 *
 * - Flashcard Studio: tracks study sessions, cards reviewed, ratings
 * - DDx Builder: records differential reasoning sessions for RPFS
 * - Calculator Hub: logs tool usage for engagement metrics
 * - All tools: adds "Back to Dashboard" nav
 */
(function() {
    'use strict';

    function whenReady(cb) {
        if (window.DxProgress) { cb(); return; }
        let n = 0;
        const c = setInterval(() => { n++; if (window.DxProgress) { clearInterval(c); cb(); } if (n > 50) clearInterval(c); }, 100);
    }

    // Detect which tool we're on
    function detectTool() {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('flashcard')) return 'flashcard';
        if (path.includes('ddx-builder')) return 'ddx';
        if (path.includes('calculator')) return 'calculator';
        if (path.includes('abg-analyzer')) return 'abg';
        if (path.includes('ecg-integration')) return 'ecg';
        if (path.includes('emr-simulator')) return 'emr';
        if (path.includes('bookmarks')) return 'bookmarks';
        if (path.includes('referral-letter')) return 'referral';
        return 'tool';
    }

    // Hook flashcard rating
    function hookFlashcards() {
        const originalRate = window.rateCard;
        if (typeof originalRate !== 'function') return;

        let sessionCards = 0;
        let sessionCorrect = 0;
        const sessionStart = Date.now();

        window.rateCard = function(rating) {
            originalRate.apply(this, arguments);
            sessionCards++;
            if (rating >= 3) sessionCorrect++;

            // Record session after every 5 cards or on page unload
            if (sessionCards % 5 === 0) {
                recordFlashcardSession();
            }
        };

        function recordFlashcardSession() {
            if (sessionCards === 0) return;
            const accuracy = Math.round((sessionCorrect / sessionCards) * 100);
            DxProgress.recordCompletion('flashcard-review', 'tool', accuracy, {
                cardsReviewed: sessionCards,
                correct: sessionCorrect,
                timeSpent: Date.now() - sessionStart,
                toolType: 'flashcard'
            });
        }

        // Also record on page unload
        window.addEventListener('beforeunload', recordFlashcardSession);
        console.log('DxToolsIntegration: Flashcard tracking active');
    }

    // Hook DDx builder
    function hookDDxBuilder() {
        const originalGenerate = window.generateDDx;
        if (typeof originalGenerate !== 'function') return;

        window.generateDDx = function() {
            originalGenerate.apply(this, arguments);

            // Capture DDx data for reasoning profile
            try {
                const symptoms = [];
                document.querySelectorAll('.symptom-tag, #symptom-list span, #symptoms .chip').forEach(el => {
                    symptoms.push(el.textContent.trim());
                });

                if (symptoms.length > 0) {
                    DxProgress.recordCompletion('ddx-reasoning', 'tool', null, {
                        symptoms: symptoms,
                        symptomCount: symptoms.length,
                        toolType: 'ddx-builder',
                        timestamp: Date.now()
                    });

                    // If RPFS is available, record as reasoning pathway
                    if (DxProgress.recordReasoningPathway) {
                        DxProgress.recordReasoningPathway('ddx-session-' + Date.now(), 'ddx-builder', symptoms, [Date.now()], {
                            differentialSize: symptoms.length,
                            toolGenerated: true
                        });
                    }
                }
            } catch (e) {
                // Silent fail
            }
        };
        console.log('DxToolsIntegration: DDx builder tracking active');
    }

    // Log calculator usage
    function hookCalculators() {
        // Wrap all calc functions to track usage
        const calcFunctions = ['calcCrCl', 'calcFENa', 'calcBUNCr', 'calcAnionGap', 'calcDeltaDelta',
            'calcWinter', 'calcOsm', 'calcCorrectedCa', 'calcCorrectedNa', 'calcFWD', 'calcTTKG'];
        
        let calcCount = 0;
        calcFunctions.forEach(fname => {
            const original = window[fname];
            if (typeof original !== 'function') return;
            window[fname] = function() {
                original.apply(this, arguments);
                calcCount++;
                // Batch record every 3 calculations
                if (calcCount % 3 === 0) {
                    DxProgress.recordCompletion('clinical-calculators', 'tool', null, {
                        calculationsRun: calcCount,
                        toolType: 'calculator'
                    });
                }
            };
        });
        if (calcCount === 0) {
            console.log('DxToolsIntegration: Calculator tracking active');
        }
    }

    // Add navigation bar to all tools
    function addToolNav() {
        const nav = document.createElement('div');
        nav.style.cssText = `
            position: fixed; bottom: 0; left: 0; right: 0;
            background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(12px);
            border-top: 1px solid rgba(255,255,255,0.1);
            padding: 8px 16px; display: flex; align-items: center;
            justify-content: center; gap: 8px; z-index: 9999;
            flex-wrap: wrap; font-family: -apple-system, sans-serif;
        `;
        nav.innerHTML = `
            <a href="learning-dashboard.html" style="padding: 6px 14px; background: rgba(5,150,105,0.2); border: 1px solid rgba(5,150,105,0.3); color: #86efac; border-radius: 8px; text-decoration: none; font-size: 0.78rem; font-weight: 600;">📊 Dashboard</a>
            <a href="../index.html" style="padding: 6px 14px; background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.3); color: #93c5fd; border-radius: 8px; text-decoration: none; font-size: 0.78rem; font-weight: 600;">🏠 Home</a>
            <a href="index.html" style="padding: 6px 14px; background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3); color: #c4b5fd; border-radius: 8px; text-decoration: none; font-size: 0.78rem; font-weight: 600;">🧰 All Tools</a>
            <button onclick="this.parentElement.remove()" style="background: none; border: none; color: #64748b; font-size: 1.1rem; cursor: pointer; padding: 4px 8px; margin-left: 4px;">×</button>
        `;
        document.body.appendChild(nav);
        document.body.style.paddingBottom = '52px';
    }

    // Initialize
    whenReady(() => {
        const tool = detectTool();
        
        if (tool === 'flashcard') hookFlashcards();
        if (tool === 'ddx') hookDDxBuilder();
        if (tool === 'calculator' || tool === 'abg') hookCalculators();

        addToolNav();

        // Record tool access for engagement
        DxProgress.recordCompletion('tool-usage', 'tool', null, {
            toolType: tool,
            accessTime: Date.now()
        });

        console.log(`DxToolsIntegration: Active for ${tool}`);
    });

})();
