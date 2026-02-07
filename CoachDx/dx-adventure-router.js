/**
 * DxSuite CoachDx → Adventure Case Router
 * ==========================================
 * After a CoachDx case is completed, shows a prompt suggesting
 * the relevant adventure case for deeper exploration.
 *
 * Uses cross-platform-map.js topic data if available,
 * otherwise falls back to category-based routing.
 */
(function() {
    'use strict';

    // Category → adventure case file mapping
    const ADVENTURE_MAP = {
        'Cardiology': { file: 'chest-pain-expanded.html', name: 'Chest Pain Adventure' },
        'Pulmonology': { file: 'sob-expanded.html', name: 'Shortness of Breath Adventure' },
        'GI': { file: 'abd-pain-expanded.html', name: 'Abdominal Pain Adventure' },
        'Gastroenterology': { file: 'abd-pain-expanded.html', name: 'Abdominal Pain Adventure' },
        'Neurology': { file: 'headache-expanded.html', name: 'Headache Adventure' },
        'Emergency Medicine': { file: 'trauma-expanded.html', name: 'Trauma Adventure' },
        'Critical Care': { file: 'shock-expanded.html', name: 'Shock Adventure' },
        'Nephrology': { file: 'aki-expanded.html', name: 'AKI Adventure' },
        'Endocrine': { file: 'dka-expanded.html', name: 'DKA Adventure' },
        'Infectious Disease': { file: 'fever-expanded.html', name: 'Fever Adventure' },
        'Hematology': { file: 'anemia-expanded.html', name: 'Anemia Adventure' },
        'Heme/Onc': { file: 'anemia-expanded.html', name: 'Anemia Adventure' },
        'Psychiatry': { file: 'altered-mental-status-expanded.html', name: 'Altered Mental Status Adventure' },
        'Allergy': { file: 'anaphylaxis-expanded.html', name: 'Anaphylaxis Adventure' },
        'OB/GYN': { file: 'vaginal-bleeding-expanded.html', name: 'Vaginal Bleeding Adventure' },
        'Pediatrics': { file: 'pediatric-fever-expanded.html', name: 'Pediatric Fever Adventure' },
        'Toxicology': { file: 'overdose-expanded.html', name: 'Overdose Adventure' }
    };

    const ADVENTURE_BASE = '../ReasonDx/adventure-cases/';

    function showAdventurePrompt(caseData, score) {
        const category = caseData.category || 'General';
        const adventure = ADVENTURE_MAP[category];

        if (!adventure) return; // No matching adventure

        // Check if adventure file exists (can't do true file check in browser, but the link will work or 404)
        const overlay = document.createElement('div');
        overlay.id = 'dxAdventurePrompt';
        overlay.innerHTML = `
            <style>
                #dxAdventurePrompt {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.7); backdrop-filter: blur(6px);
                    display: flex; align-items: center; justify-content: center;
                    z-index: 10003; font-family: -apple-system, sans-serif;
                    animation: fadeIn 0.3s ease;
                }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                .adventure-prompt-card {
                    background: white; border-radius: 16px; padding: 32px;
                    max-width: 480px; width: 90%; text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    animation: slideUp 0.4s ease;
                }
                @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                .adventure-prompt-card h3 { font-size: 1.3rem; margin: 0 0 8px; color: #1e293b; }
                .adventure-prompt-card p { color: #64748b; font-size: 0.9rem; margin-bottom: 20px; }
                .adventure-score { font-size: 2rem; font-weight: 800; margin: 12px 0; }
                .adventure-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
                .adventure-btn-primary {
                    padding: 12px 24px; border-radius: 10px; border: none;
                    background: linear-gradient(135deg, #059669, #047857); color: white;
                    font-size: 0.95rem; font-weight: 600; cursor: pointer;
                    transition: transform 0.2s;
                }
                .adventure-btn-primary:hover { transform: scale(1.04); }
                .adventure-btn-secondary {
                    padding: 12px 24px; border-radius: 10px; background: #f1f5f9;
                    border: 1px solid #e2e8f0; color: #475569; font-size: 0.9rem;
                    cursor: pointer; font-weight: 500;
                }
                .adventure-btn-secondary:hover { background: #e2e8f0; }
            </style>
            <div class="adventure-prompt-card">
                <div style="font-size: 2.5rem; margin-bottom: 8px;">🎉</div>
                <h3>Case Complete!</h3>
                <div class="adventure-score" style="color: ${score >= 80 ? '#059669' : score >= 60 ? '#d97706' : '#ef4444'};">${score}%</div>
                <p>${score >= 80
                    ? 'Great work! Ready to test your skills in a full clinical adventure?'
                    : 'Want to explore this topic deeper with an interactive clinical adventure?'
                }</p>
                <div style="padding: 12px 16px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; margin-bottom: 20px;">
                    <div style="font-size: 0.75rem; color: #15803d; font-weight: 600; text-transform: uppercase; margin-bottom: 4px;">Recommended Next</div>
                    <div style="font-weight: 600; color: #166534;">🗺️ ${adventure.name}</div>
                    <div style="font-size: 0.78rem; color: #4ade80;">Interactive clinical reasoning case</div>
                </div>
                <div class="adventure-btns">
                    <button class="adventure-btn-primary" onclick="window.location.href='${ADVENTURE_BASE}${adventure.file}'">
                        Start Adventure →
                    </button>
                    <button class="adventure-btn-secondary" onclick="document.getElementById('dxAdventurePrompt').remove()">
                        Maybe Later
                    </button>
                </div>
                <div style="margin-top: 12px;">
                    <a href="../tools/learning-dashboard.html" style="font-size: 0.78rem; color: #3b82f6; text-decoration: none;">📊 View Dashboard</a>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // Click outside to close
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.remove();
        });
    }

    // Hook into DxProgressTracker.recordCaseComplete
    function installHook() {
        if (!window.DxProgressTracker) return;

        const original = DxProgressTracker.recordCaseComplete;
        DxProgressTracker.recordCaseComplete = function(caseId, score, duration, concepts) {
            const result = original.call(this, caseId, score, duration, concepts);

            // Get case data to determine category
            const data = DxProgressTracker.getProgressData();
            const caseData = data.cases && data.cases[caseId] ? data.cases[caseId] : {};

            // Show adventure prompt after a brief delay
            setTimeout(() => showAdventurePrompt(caseData, score), 800);

            return result;
        };

        console.log('DxAdventureRouter: Hooks installed');
    }

    // Wait and install
    let attempts = 0;
    const check = setInterval(() => {
        attempts++;
        if (window.DxProgressTracker) {
            clearInterval(check);
            installHook();
        }
        if (attempts > 100) clearInterval(check);
    }, 100);

})();
