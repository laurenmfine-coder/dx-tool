/**
 * Study Planner DxProgress Enhancement
 * Adds smart recommendations, spaced rep due items, weak area prioritization,
 * and patches generateSchedule to use real progress data.
 */
(function() {
    'use strict';

    function whenReady(cb) {
        if (window.DxProgress && window.DxRecommend) { cb(); return; }
        let n = 0;
        const c = setInterval(() => {
            n++;
            if (window.DxProgress && window.DxRecommend) { clearInterval(c); cb(); }
            if (n > 60) clearInterval(c);
        }, 100);
    }

    whenReady(async () => {
        const setupSection = document.getElementById('setup-section');
        if (!setupSection) return;

        const store = DxProgress.getAllProgress ? DxProgress.getAllProgress() : {};
        const topics = store.topics || {};
        const dueTopics = DxProgress.getDueForReview ? DxProgress.getDueForReview() : [];
        const lowPerf = DxProgress.getLowPerformanceTopics ? DxProgress.getLowPerformanceTopics(70) : [];
        const recs = await DxRecommend.getRecommendations(8);

        // ============================================================
        //  Smart Insights Card (before setup form)
        // ============================================================
        const insightCard = document.createElement('div');
        insightCard.className = 'card';
        insightCard.style.cssText = 'background: linear-gradient(135deg, #1e3a5f 0%, #2d5f8a 100%); color: white; border: none;';

        let html = '<h2 style="color: white;">🧠 Smart Study Insights</h2>';

        // Spaced rep due items
        if (dueTopics.length > 0) {
            html += `<div style="margin-bottom: 16px;">
                <h3 style="font-size: 14px; color: #93c5fd; margin-bottom: 8px;">🔄 Due for Review (${dueTopics.length} topics)</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">`;
            dueTopics.slice(0, 8).forEach(t => {
                const urgencyColor = t.urgency === 'high' ? '#fca5a5' : t.urgency === 'medium' ? '#fcd34d' : '#86efac';
                html += `<span style="padding: 4px 10px; background: rgba(255,255,255,0.15); border-radius: 6px;
                                font-size: 0.8rem; border-left: 3px solid ${urgencyColor};">
                    ${t.topicId || t.topic || 'Topic'}
                </span>`;
            });
            html += '</div></div>';
        }

        // Low performance areas
        if (lowPerf.length > 0) {
            html += `<div style="margin-bottom: 16px;">
                <h3 style="font-size: 14px; color: #fca5a5; margin-bottom: 8px;">⚠️ Weak Areas (${lowPerf.length})</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">`;
            lowPerf.slice(0, 6).forEach(t => {
                html += `<span style="padding: 4px 10px; background: rgba(252,165,165,0.15); border-radius: 6px;
                                font-size: 0.8rem; border-left: 3px solid #fca5a5;">
                    ${t.topicId || 'Topic'} (${t.score || 0}%)
                </span>`;
            });
            html += '</div></div>';
        }

        // Recommendations
        if (recs.length > 0) {
            html += `<div style="margin-bottom: 16px;">
                <h3 style="font-size: 14px; color: #93c5fd; margin-bottom: 8px;">📈 Recommended Next</h3>
                <div style="display: grid; gap: 6px;">`;
            recs.slice(0, 5).forEach(r => {
                html += `<a href="${r.url || '#'}" style="display: flex; align-items: center; gap: 8px;
                            padding: 8px 12px; background: rgba(255,255,255,0.08); border-radius: 8px;
                            text-decoration: none; color: white; font-size: 0.85rem;">
                    <span>${r.icon || '📚'}</span>
                    <div style="flex: 1;">
                        <div style="font-weight: 600;">${r.displayName || r.topicId}</div>
                        <div style="font-size: 0.75rem; color: #94a3b8;">${r.reason || ''}</div>
                    </div>
                </a>`;
            });
            html += '</div></div>';
        }

        // Quick stats
        const topicCount = Object.keys(topics).length;
        if (topicCount > 0) {
            const completedCount = Object.values(topics).filter(t =>
                t.mechanism?.completed || t.adventure?.completed || t.deepDive?.completed
            ).length;
            html += `<div style="display: flex; gap: 16px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.15);">
                <div><div style="font-size: 1.5rem; font-weight: 700;">${completedCount}</div><div style="font-size: 0.75rem; color: #93c5fd;">Topics Studied</div></div>
                <div><div style="font-size: 1.5rem; font-weight: 700;">${dueTopics.length}</div><div style="font-size: 0.75rem; color: #93c5fd;">Due for Review</div></div>
                <div><div style="font-size: 1.5rem; font-weight: 700;">${297 - completedCount}</div><div style="font-size: 0.75rem; color: #93c5fd;">Remaining</div></div>
            </div>`;
        }

        if (recs.length === 0 && dueTopics.length === 0 && topicCount === 0) {
            html += '<p style="color: #93c5fd; font-size: 0.9rem;">Start studying to see personalized insights here!</p>';
        }

        // Dashboard link
        html += `<div style="text-align: center; margin-top: 12px;">
            <a href="learning-dashboard.html" style="display: inline-block; padding: 10px 24px;
               background: rgba(255,255,255,0.15); color: white; border-radius:12px; text-decoration: none;
               font-weight: 600; font-size: 0.9rem;">📊 Full Learning Dashboard</a>
        </div>`;

        insightCard.innerHTML = html;
        setupSection.insertBefore(insightCard, setupSection.firstChild);

        // ============================================================
        //  Auto-check topics that have weak performance or are due
        // ============================================================
        const topicCheckboxes = document.querySelectorAll('#topics .checkbox-item');
        const weakTopicNames = new Set();

        // Collect weak/due topic category names
        lowPerf.forEach(t => {
            const name = (t.topicId || '').replace(/-/g, ' ').toLowerCase();
            weakTopicNames.add(name);
        });
        dueTopics.forEach(t => {
            const name = (t.topicId || t.topic || '').replace(/-/g, ' ').toLowerCase();
            weakTopicNames.add(name);
        });

        // Category keywords that match study planner labels
        const categoryKeywords = {
            'Cardiology': ['acs', 'heart', 'afib', 'stemi', 'syncope', 'hypertens'],
            'Pulmonology': ['copd', 'asthma', 'pneumonia', 'ards', 'pe', 'pulmon'],
            'Neurology': ['stroke', 'seizure', 'meningitis', 'mental status', 'neuro'],
            'GI': ['gi bleed', 'liver', 'pancreatitis', 'bowel', 'hepat', 'cholecyst', 'appendic'],
            'Endocrine': ['dka', 'thyroid', 'adrenal', 'hypoglyc', 'diabet'],
            'Renal': ['aki', 'ckd', 'hyperkalemia', 'hyponatremia', 'electrolyte'],
            'Microbiology': ['staph', 'strep', 'candida', 'aspergill', 'hiv', 'tb'],
            'Pharmacology': ['beta-lactam', 'vancomycin', 'aminoglyc', 'fluoroquin', 'antifung']
        };

        topicCheckboxes.forEach(item => {
            const label = item.textContent.trim();
            const keywords = categoryKeywords[label] || [];
            const shouldCheck = keywords.some(kw =>
                [...weakTopicNames].some(wt => wt.includes(kw))
            );
            if (shouldCheck) {
                const checkbox = item.querySelector('input');
                if (checkbox && !checkbox.checked) {
                    checkbox.checked = true;
                    item.classList.add('checked');
                }
            }
        });

        // ============================================================
        //  Patch generateSchedule to prioritize weak/due topics first
        // ============================================================
        const originalGenerate = window.generateSchedule;
        if (typeof originalGenerate === 'function') {
            window.generateSchedule = function() {
                // Call original to render UI
                originalGenerate();

                // Post-process: add priority badges to schedule tasks
                const tasks = document.querySelectorAll('.schedule-task .task-title');
                const dueNames = new Set(dueTopics.map(t => (t.topicId || '').replace(/-/g, ' ').toLowerCase()));
                const weakNames = new Set(lowPerf.map(t => (t.topicId || '').replace(/-/g, ' ').toLowerCase()));

                tasks.forEach(task => {
                    const name = task.textContent.trim().toLowerCase();
                    const isDue = [...dueNames].some(d => name.includes(d) || d.includes(name));
                    const isWeak = [...weakNames].some(w => name.includes(w) || w.includes(name));

                    if (isDue) {
                        task.innerHTML += ' <span style="font-size:0.7rem;background:#fef3c7;color:#92400e;padding:2px 6px;border-radius:4px;margin-left:4px;">Review Due</span>';
                    }
                    if (isWeak) {
                        task.innerHTML += ' <span style="font-size:0.7rem;background:#fee2e2;color:#991b1b;padding:2px 6px;border-radius:4px;margin-left:4px;">Weak Area</span>';
                    }
                });

                // Add "Due for Review" block at top of schedule if items exist
                if (dueTopics.length > 0) {
                    const grid = document.getElementById('schedule-grid');
                    if (grid && grid.firstChild) {
                        const reviewCard = document.createElement('div');
                        reviewCard.className = 'schedule-day';
                        reviewCard.style.cssText = 'background: linear-gradient(135deg,#fef3c7,#fde68a); border: 2px solid #f59e0b;';
                        reviewCard.innerHTML = `
                            <div class="schedule-day-header">
                                <span class="date">🔄 Spaced Rep Review</span>
                                <span class="badge" style="background:#f59e0b;color:white;">${dueTopics.length} due</span>
                            </div>
                            <div class="schedule-tasks">
                                <div style="font-size:0.85rem;color:#78350f;padding:8px 0;">
                                    ${dueTopics.slice(0, 5).map(t =>
                                        `<div style="padding:4px 0;">• ${(t.topicId || 'Topic').replace(/-/g, ' ')}</div>`
                                    ).join('')}
                                    ${dueTopics.length > 5 ? `<div style="padding:4px 0;color:#92400e;">...and ${dueTopics.length - 5} more</div>` : ''}
                                </div>
                            </div>`;
                        grid.insertBefore(reviewCard, grid.firstChild);
                    }
                }
            };
        }
    });
})();
