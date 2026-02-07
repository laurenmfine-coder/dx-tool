/**
 * DxSuite Start-Here Personalization
 * ====================================
 * Detects returning users and adds a personalized dashboard summary
 * above the navigator wizard. Shows progress stats and quick-resume links.
 */
(function() {
    'use strict';

    function init() {
        if (!window.DxProgress) return;

        let progress;
        try {
            progress = DxProgress.getProgressData ? DxProgress.getProgressData() : null;
        } catch (e) { return; }

        if (!progress || !progress.topics || Object.keys(progress.topics).length === 0) return;

        // User has prior progress — show welcome-back card
        const topics = progress.topics;
        const topicCount = Object.keys(topics).length;
        const completedCount = Object.values(topics).filter(t =>
            t.mechanism?.completed || t.adventure?.completed || t.deepDive?.completed || t.coachdx?.completed
        ).length;

        // Get user name
        let userName = 'there';
        try {
            const auth = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
            if (auth.name) userName = auth.name.split(' ')[0];
        } catch (e) {}

        // Find most recent topics
        const recentTopics = Object.entries(topics)
            .filter(([_, t]) => t.lastAccess)
            .sort((a, b) => new Date(b[1].lastAccess) - new Date(a[1].lastAccess))
            .slice(0, 3)
            .map(([id, _]) => id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()));

        // Get due reviews
        const dueCount = DxProgress.getDueForReview ? DxProgress.getDueForReview().length : 0;

        const container = document.querySelector('.container');
        if (!container) return;

        const card = document.createElement('div');
        card.style.cssText = `
            background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
            border-radius: 16px; padding: 28px; margin-bottom: 24px; color: white;
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        `;

        card.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
                <div>
                    <h2 style="font-size: 1.5rem; margin-bottom: 4px;">Welcome back, ${userName}! 👋</h2>
                    <p style="color: #94a3b8; font-size: 0.9rem;">Pick up where you left off or explore something new.</p>
                </div>
                <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                    <div style="text-align: center;">
                        <div style="font-size: 1.8rem; font-weight: 800; color: #4ade80;">${completedCount}</div>
                        <div style="font-size: 0.7rem; color: #94a3b8;">Completed</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 1.8rem; font-weight: 800; color: #60a5fa;">${topicCount}</div>
                        <div style="font-size: 0.7rem; color: #94a3b8;">Topics</div>
                    </div>
                    ${dueCount > 0 ? `<div style="text-align: center;">
                        <div style="font-size: 1.8rem; font-weight: 800; color: #fbbf24;">${dueCount}</div>
                        <div style="font-size: 0.7rem; color: #94a3b8;">Due Review</div>
                    </div>` : ''}
                </div>
            </div>
            ${recentTopics.length > 0 ? `
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
                    <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 8px;">Recently Studied</div>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        ${recentTopics.map(t => `<span style="padding: 4px 12px; background: rgba(255,255,255,0.1); border-radius: 20px; font-size: 0.78rem;">${t}</span>`).join('')}
                    </div>
                </div>` : ''}
            <div style="display: flex; gap: 10px; margin-top: 16px; flex-wrap: wrap;">
                <a href="tools/learning-dashboard.html" style="padding: 10px 20px; background: rgba(5,150,105,0.3); border: 1px solid rgba(5,150,105,0.5); color: #86efac; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 0.85rem;">📊 My Dashboard</a>
                <a href="fingerprint-dashboard.html" style="padding: 10px 20px; background: rgba(59,130,246,0.2); border: 1px solid rgba(59,130,246,0.4); color: #93c5fd; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 0.85rem;">🧬 My Fingerprint</a>
                <a href="EPASystem/epa-dashboard.html" style="padding: 10px 20px; background: rgba(139,92,246,0.2); border: 1px solid rgba(139,92,246,0.4); color: #c4b5fd; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 0.85rem;">🎓 EPA Progress</a>
            </div>
        `;

        container.insertBefore(card, container.firstChild);
    }

    if (document.readyState === 'complete') {
        setTimeout(init, 150);
    } else {
        window.addEventListener('load', () => setTimeout(init, 150));
    }
})();
