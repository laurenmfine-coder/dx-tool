/**
 * DxSuite Cross-Tool Actions
 * ============================
 * Adds contextual action buttons between tools:
 * - ABG Analyzer → "Save as Flashcard"
 * - DDx Builder → "Save as Note"  
 * - Calculator Hub → "Save Result as Note"
 * - SBAR Trainer → "Bookmark Practice"
 * - Any tool → "Quick Bookmark This Page"
 *
 * Requires: dx-storage.js loaded before this script
 */
(function() {
    'use strict';

    // Wait for DxStorage
    function whenStorage(cb) {
        if (window.DxStorage) { cb(); return; }
        let n = 0;
        const c = setInterval(() => { n++; if (window.DxStorage) { clearInterval(c); cb(); } if (n > 50) clearInterval(c); }, 100);
    }

    // Inject CSS for cross-tool action buttons
    const style = document.createElement('style');
    style.textContent = `
        .dx-cross-action {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            background: linear-gradient(135deg, #f0fdf4, #dcfce7);
            border: 1px solid #a7f3d0;
            border-radius: 8px;
            color: #166534;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            font-family: 'Inter', system-ui, sans-serif;
            transition: all 0.2s;
            margin-top: 12px;
        }
        .dx-cross-action:hover {
            background: linear-gradient(135deg, #dcfce7, #bbf7d0);
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(5,150,105,0.15);
        }
        .dx-cross-action.saved {
            background: #dcfce7;
            border-color: #059669;
            pointer-events: none;
        }
        .dx-cross-toast {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            background: #166534;
            color: white;
            border-radius:12px;
            font-size: 14px;
            font-family: 'Inter', system-ui, sans-serif;
            box-shadow: 0 4px 16px rgba(0,0,0,0.2);
            z-index: 9999;
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s;
        }
        .dx-cross-toast.show {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Toast notification
    function showToast(msg) {
        let toast = document.getElementById('dx-cross-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'dx-cross-toast';
            toast.className = 'dx-cross-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }

    // ═══════════════════════════════════════════════
    // SAVE TO FLASHCARDS
    // ═══════════════════════════════════════════════
    window.dxSaveToFlashcard = function(question, answer, deckName, tags) {
        whenStorage(function() {
            // Find or create deck
            const TOOL = 'flashcards';
            let decks = DxStorage.load(TOOL, 'deck-index') || [];
            let deck = decks.find(d => d.name === deckName);
            if (!deck) {
                deck = {
                    id: 'deck-' + Date.now().toString(36),
                    name: deckName,
                    icon: '📋',
                    color: '#dbeafe'
                };
                decks.push(deck);
                DxStorage.save(TOOL, 'deck-index', decks);
            }

            // Add card
            const cards = DxStorage.load(TOOL, 'cards-' + deck.id) || [];
            cards.push({
                id: 'card-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 5),
                q: question,
                a: answer,
                tags: tags || [],
                srs: null
            });
            DxStorage.save(TOOL, 'cards-' + deck.id, cards);
            showToast('🎴 Saved to Flashcard Studio → ' + deckName);
        });
    };

    // ═══════════════════════════════════════════════
    // SAVE TO NOTES
    // ═══════════════════════════════════════════════
    window.dxSaveToNotes = function(title, content, tags) {
        whenStorage(function() {
            const id = DxStorage.generateId('note');
            DxStorage.save('notes', id, {
                title: title,
                content: content,
                tags: tags || [],
                color: 'default'
            });
            showToast('📝 Saved to Notes');
        });
    };

    // ═══════════════════════════════════════════════
    // QUICK BOOKMARK CURRENT PAGE
    // ═══════════════════════════════════════════════
    window.dxQuickBookmark = function(title, type) {
        whenStorage(function() {
            const id = DxStorage.generateId('bk');
            DxStorage.save('bookmarks', id, {
                title: title || document.title.replace(' | ReasonDx', '').replace(' | DxSuite', ''),
                url: location.href,
                type: type || 'general',
                tags: [],
                flagged: false
            });
            showToast('📌 Bookmarked!');
        });
    };

    // ═══════════════════════════════════════════════
    // ABG ANALYZER — Save result as flashcard
    // ═══════════════════════════════════════════════
    function hookABGAnalyzer() {
        const origAnalyze = window.analyzeABG;
        if (typeof origAnalyze !== 'function') return;

        window.analyzeABG = function() {
            origAnalyze.apply(this, arguments);

            // After analysis, add "Save as Flashcard" button if not already present
            setTimeout(function() {
                const resultArea = document.getElementById('results') || document.querySelector('.analysis-result, .result-box, [id*="result"]');
                if (!resultArea || document.getElementById('dx-abg-save-btn')) return;

                // Gather ABG values
                const ph = document.getElementById('ph')?.value || '';
                const pco2 = document.getElementById('pco2')?.value || '';
                const hco3 = document.getElementById('hco3')?.value || '';

                // Get the interpretation text
                const interpText = resultArea.textContent || '';
                const firstLine = interpText.split('\n').filter(l => l.trim()).slice(0, 3).join(' | ').substring(0, 300);

                const btn = document.createElement('button');
                btn.id = 'dx-abg-save-btn';
                btn.className = 'dx-cross-action';
                btn.innerHTML = '🎴 Save as Flashcard';
                btn.onclick = function() {
                    dxSaveToFlashcard(
                        'ABG: pH ' + ph + ', pCO₂ ' + pco2 + ', HCO₃ ' + hco3 + ' — What is the interpretation?',
                        firstLine || 'Analyze this ABG systematically',
                        'ABG Practice',
                        ['abg', 'acid-base']
                    );
                    btn.innerHTML = '✅ Saved!';
                    btn.classList.add('saved');
                };
                resultArea.appendChild(btn);
            }, 500);
        };
    }

    // ═══════════════════════════════════════════════
    // DDX BUILDER — Save differential as note
    // ═══════════════════════════════════════════════
    function hookDDxBuilder() {
        const origGenerate = window.generateDDx;
        if (typeof origGenerate !== 'function') return;

        window.generateDDx = function() {
            origGenerate.apply(this, arguments);

            setTimeout(function() {
                const results = document.getElementById('ddx-results');
                if (!results || document.getElementById('dx-ddx-save-btn')) return;

                const btn = document.createElement('button');
                btn.id = 'dx-ddx-save-btn';
                btn.className = 'dx-cross-action';
                btn.innerHTML = '📝 Save DDx as Note';
                btn.onclick = function() {
                    const symptoms = window.symptoms || [];
                    const ddxItems = results.querySelectorAll('.ddx-name, .ddx-item h3, .ddx-info .ddx-name');
                    const names = Array.from(ddxItems).map(el => el.textContent.trim()).slice(0, 10);

                    dxSaveToNotes(
                        'DDx: ' + symptoms.slice(0, 3).join(', '),
                        'Symptoms: ' + symptoms.join(', ') + '\n\nDifferential:\n' + names.map((n, i) => (i + 1) + '. ' + n).join('\n'),
                        ['ddx', 'clinical-reasoning']
                    );
                    btn.innerHTML = '✅ Saved!';
                    btn.classList.add('saved');
                };
                // Insert at top of results
                results.insertBefore(btn, results.firstChild);
            }, 300);
        };
    }

    // ═══════════════════════════════════════════════
    // CALCULATOR HUB — Save calc result as note
    // ═══════════════════════════════════════════════
    function hookCalculators() {
        // Hook all result boxes — add a small save button near each result
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(m) {
                m.addedNodes.forEach(function(node) {
                    if (node.nodeType !== 1) return;
                    // Look for result values that just appeared
                    const resultBoxes = node.querySelectorAll ? node.querySelectorAll('.result-value, .result-box') : [];
                    resultBoxes.forEach(addCalcSave);
                });
            });
        });

        // Also run once on existing elements
        document.querySelectorAll('.result-box').forEach(function(box) {
            if (box.querySelector('.dx-cross-action')) return;
            // Don't auto-add — only show after a calculation has been run
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    // ═══════════════════════════════════════════════
    // SBAR TRAINER — Save practice to bookmarks
    // ═══════════════════════════════════════════════
    function hookSBARTrainer() {
        // Watch for feedback generation
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(m) {
                if (m.target.id && m.target.id.includes('feedback') && m.target.innerHTML.length > 100) {
                    if (document.getElementById('dx-sbar-save-btn')) return;

                    const scoreEl = m.target.querySelector('.score-bar, [class*="score"]');
                    const scoreText = scoreEl ? scoreEl.textContent : '';

                    const btn = document.createElement('button');
                    btn.id = 'dx-sbar-save-btn';
                    btn.className = 'dx-cross-action';
                    btn.innerHTML = '📌 Bookmark This Practice';
                    btn.onclick = function() {
                        dxQuickBookmark(
                            'SBAR Practice' + (scoreText ? ' — ' + scoreText.substring(0, 30) : ''),
                            'general'
                        );
                        btn.innerHTML = '✅ Bookmarked!';
                        btn.classList.add('saved');
                    };
                    m.target.appendChild(btn);
                }
            });
        });
        const feedbackArea = document.getElementById('feedback') || document.getElementById('feedback-area');
        if (feedbackArea) {
            observer.observe(feedbackArea, { childList: true, subtree: true, characterData: true });
        }
    }

    // ═══════════════════════════════════════════════
    // INIT — detect tool and hook
    // ═══════════════════════════════════════════════
    whenStorage(function() {
        const path = location.pathname.toLowerCase();
        if (path.includes('abg-analyzer')) hookABGAnalyzer();
        if (path.includes('ddx-builder')) hookDDxBuilder();
        if (path.includes('calculator')) hookCalculators();
        if (path.includes('sbar-trainer')) hookSBARTrainer();
    });

})();
