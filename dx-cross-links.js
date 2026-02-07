/**
 * DxSuite Cross-Link Navigator
 * ==============================
 * Adds "Continue Learning" links to mechanism, adventure, and deep dive pages.
 * Shows related content types the user hasn't completed yet.
 *
 * Auto-detects the current page type and topicId, then renders
 * links to the other content types for the same topic.
 *
 * Usage: Drop <script src="dx-cross-links.js"></script> into any page.
 * It auto-renders at page bottom in a floating bar.
 *
 * Requires: dx-progress.js, data/topic-map.json
 */
(function() {
    'use strict';

    let topicMap = null;

    async function loadTopicMap() {
        const paths = ['data/topic-map.json', '../data/topic-map.json', '../../data/topic-map.json'];
        for (const p of paths) {
            try {
                const r = await fetch(p);
                if (r.ok) {
                    const d = await r.json();
                    return d.topics || d;
                }
            } catch (e) { continue; }
        }
        return {};
    }

    function detectContext() {
        const path = window.location.pathname.toLowerCase();
        const params = new URLSearchParams(window.location.search);
        const filename = path.split('/').pop().replace('.html', '');

        let pageType = 'unknown';
        let topicId = params.get('module') || params.get('topic') || params.get('case') || null;

        if (path.includes('adventure-cases') || path.includes('adventure')) {
            pageType = 'adventure';
            if (!topicId) {
                topicId = filename
                    .replace(/-expanded-adventure$/, '')
                    .replace(/-expanded$/, '')
                    .replace(/-adventure$/, '')
                    .replace(/-crt$/, '');
            }
        } else if (path.includes('deep-dive-player')) {
            pageType = 'deepDive';
        } else if (path.includes('mechanism/') && filename.includes('-module')) {
            pageType = 'mechanism';
            if (!topicId) {
                topicId = filename.replace(/-module$/, '');
            }
        }

        return { pageType, topicId };
    }

    function findTopicInMap(topicId, tm) {
        // Direct match
        if (tm[topicId]) return { id: topicId, ...tm[topicId] };

        // Fuzzy match — try partial matching
        for (const [id, val] of Object.entries(tm)) {
            if (id.includes(topicId) || topicId.includes(id)) {
                return { id, ...val };
            }
            // Check mechanism filename
            if (val.mechanism && val.mechanism.includes(topicId)) {
                return { id, ...val };
            }
        }
        return null;
    }

    async function renderCrossLinks() {
        const { pageType, topicId } = detectContext();
        if (!topicId || pageType === 'unknown') return;

        topicMap = await loadTopicMap();
        const topic = findTopicInMap(topicId, topicMap);
        if (!topic) return;

        const progress = window.DxProgress ? DxProgress.getTopicProgress(topic.id) : null;

        // Build links for content types the user hasn't done yet
        const links = [];

        // Determine relative path prefix
        const path = window.location.pathname;
        let prefix = '';
        if (path.includes('/adventure-cases/')) prefix = '../../';
        else if (path.includes('/ReasonDx/')) prefix = '../';
        else if (path.includes('/mechanism/')) prefix = '../';
        else if (path.includes('/tools/')) prefix = '../';

        // Mechanism link
        if (pageType !== 'mechanism' && topic.mechanism) {
            const done = progress?.mechanism?.completed;
            links.push({
                url: `${prefix}mechanism/${topic.mechanism}`,
                label: done ? '✅ Mechanism' : '⚙️ Learn Mechanism',
                done: done,
                type: 'mechanism'
            });
        }

        // Adventure link
        if (pageType !== 'adventure' && topic.adventure) {
            const done = progress?.adventure?.completed;
            const adventurePath = topic.adventure.startsWith('adventure-cases/')
                ? topic.adventure
                : `adventure-cases/${topic.adventure}`;
            links.push({
                url: `${prefix}ReasonDx/${adventurePath}`,
                label: done ? '✅ Adventure' : '🗺️ Try Adventure',
                done: done,
                type: 'adventure'
            });
        }

        // Deep Dive link
        if (pageType !== 'deepDive' && topic.deepDive) {
            const done = progress?.deepDive?.completed;
            links.push({
                url: `${prefix}ReasonDx/deep-dive-player.html?module=${topic.id}`,
                label: done ? '✅ Deep Dive' : '🔬 Deep Dive',
                done: done,
                type: 'deepDive'
            });
        }

        // Quiz link
        links.push({
            url: `${prefix}quiz-engine.html?topic=${topic.category || topic.id}`,
            label: '📝 Quiz',
            done: false,
            type: 'quiz'
        });

        if (links.length === 0) return;

        // Render floating bar
        const bar = document.createElement('div');
        bar.id = 'dx-cross-links';
        bar.style.cssText = `
            position: fixed; bottom: 0; left: 0; right: 0;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(12px);
            border-top: 1px solid rgba(255,255,255,0.1);
            padding: 10px 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            z-index: 9999;
            flex-wrap: wrap;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;

        const titleSpan = document.createElement('span');
        titleSpan.style.cssText = 'color: #94a3b8; font-size: 0.8rem; margin-right: 8px; white-space: nowrap;';
        titleSpan.textContent = `${topic.displayName || topic.id} →`;
        bar.appendChild(titleSpan);

        links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.style.cssText = `
                padding: 6px 14px;
                background: ${link.done ? 'rgba(34, 197, 94, 0.15)' : 'rgba(59, 130, 246, 0.15)'};
                border: 1px solid ${link.done ? 'rgba(34, 197, 94, 0.3)' : 'rgba(59, 130, 246, 0.3)'};
                color: ${link.done ? '#86efac' : '#93c5fd'};
                border-radius: 8px;
                text-decoration: none;
                font-size: 0.78rem;
                font-weight: 600;
                white-space: nowrap;
                transition: all 0.15s;
            `;
            a.textContent = link.label;
            a.onmouseenter = function() { this.style.transform = 'translateY(-1px)'; };
            a.onmouseleave = function() { this.style.transform = ''; };
            bar.appendChild(a);
        });

        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '×';
        closeBtn.style.cssText = 'background: none; border: none; color: #64748b; font-size: 1.2rem; cursor: pointer; padding: 4px 8px; margin-left: 8px;';
        closeBtn.onclick = () => bar.remove();
        bar.appendChild(closeBtn);

        document.body.appendChild(bar);

        // Add bottom padding to body so content isn't hidden
        document.body.style.paddingBottom = '60px';
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(renderCrossLinks, 500));
    } else {
        setTimeout(renderCrossLinks, 500);
    }

})();
