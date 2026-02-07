/**
 * DxSuite Recommendation Engine
 * ===============================
 * Personalized "What Should I Study Next?" recommendations.
 * Reads from DxProgress to identify:
 *   - Topics never attempted
 *   - Topics with low quiz scores
 *   - Topics where reasoning diverged from expert pathways
 *   - Topics due for spaced repetition review
 *   - Topics aligned with the student's exam prep goal
 *
 * No competitor (UWorld, Amboss, Aquifer, Sketchy) does this
 * with reasoning pathway data.
 *
 * Requires: dx-progress.js, data/topic-map.json
 */
(function(window) {
    'use strict';

    let topicMapCache = null;
    let topicMapLoading = null;

    // ================================================================
    //  Topic Map Loader
    // ================================================================
    async function loadTopicMap() {
        if (topicMapCache) return topicMapCache;
        if (topicMapLoading) return topicMapLoading;

        topicMapLoading = (async () => {
            // Try multiple paths depending on page location
            const paths = [
                'data/topic-map.json',
                '../data/topic-map.json',
                '../../data/topic-map.json'
            ];
            for (const path of paths) {
                try {
                    const response = await fetch(path);
                    if (response.ok) {
                        const data = await response.json();
                        // Topic map has a 'topics' object containing all topic entries
                        if (data.topics && typeof data.topics === 'object') {
                            topicMapCache = data.topics;
                            return data.topics;
                        }
                        // Fallback: look for entries with displayName at top level
                        const topics = {};
                        for (const [key, val] of Object.entries(data)) {
                            if (val && typeof val === 'object' && val.displayName) {
                                topics[key] = val;
                            }
                        }
                        topicMapCache = topics;
                        return topics;
                    }
                } catch (e) { continue; }
            }
            console.warn('DxRecommend: Could not load topic-map.json');
            return {};
        })();

        return topicMapLoading;
    }

    // ================================================================
    //  Recommendation Strategies
    // ================================================================

    /**
     * Strategy 1: Spaced Repetition — topics overdue for review.
     * Reason: "Due for review — last studied X days ago"
     */
    function getSpacedRepRecommendations(maxItems = 3) {
        if (!window.DxProgress) return [];
        const dueTopics = DxProgress.getDueForReview();
        return dueTopics.slice(0, maxItems).map(item => ({
            topicId: item.topicId,
            strategy: 'spaced-rep',
            priority: item.urgency === 'high' ? 95 : item.urgency === 'medium' ? 80 : 65,
            reason: `Due for review — last studied ${item.daysPast} day${item.daysPast !== 1 ? 's' : ''} ago`,
            icon: '🔄',
            urgency: item.urgency
        }));
    }

    /**
     * Strategy 2: Low Performance — topics with poor quiz scores.
     * Reason: "Your accuracy is X% — revisit to strengthen"
     */
    function getLowPerformanceRecommendations(maxItems = 3) {
        if (!window.DxProgress) return [];
        const lowTopics = DxProgress.getLowPerformanceTopics(70);
        return lowTopics.slice(0, maxItems).map(item => ({
            topicId: item.topicId,
            strategy: 'low-performance',
            priority: 90 - item.accuracy, // lower accuracy = higher priority
            reason: `Your accuracy is ${item.accuracy}% — revisit to strengthen`,
            icon: '📉',
            urgency: item.accuracy < 50 ? 'high' : 'medium'
        }));
    }

    /**
     * Strategy 3: Reasoning Divergence — topics where pathways diverged.
     * Reason: "Your reasoning diverged from experts on X decision points"
     */
    function getDivergenceRecommendations(maxItems = 2) {
        if (!window.DxProgress) return [];
        const divergent = DxProgress.getDivergentReasoningTopics();
        return divergent.slice(0, maxItems).map(item => ({
            topicId: item.topicId,
            strategy: 'divergence',
            priority: 75,
            reason: item.diagnosisCorrect === false
                ? 'Diagnosis was incorrect — review the reasoning pathway'
                : `Your reasoning diverged from experts on ${item.pivotPoints} decision points`,
            icon: '🧬',
            urgency: item.diagnosisCorrect === false ? 'high' : 'medium'
        }));
    }

    /**
     * Strategy 4: Unattempted High-Yield — topics never tried, filtered by exam relevance.
     * Reason: "High-yield for [exam] — not yet started"
     */
    async function getUnattemptedRecommendations(maxItems = 3) {
        if (!window.DxProgress) return [];
        const topicMap = await loadTopicMap();
        const unattempted = DxProgress.getUnattemptedTopics(topicMap);
        if (unattempted.length === 0) return [];

        // Get user's study goal / exam target
        const profile = DxProgress.getProfile();
        const studyGoal = profile.studyGoal || 'both';
        const trainingLevel = profile.trainingLevel || '';

        // Determine target exams based on profile
        let targetExams = [];
        if (studyGoal === 'board-prep' || studyGoal === 'both') {
            if (['ms1', 'ms2'].includes(trainingLevel)) {
                targetExams = ['step1'];
            } else if (['ms3', 'ms4'].includes(trainingLevel)) {
                targetExams = ['step2', 'shelf-internal-medicine', 'shelf-surgery', 'shelf-pediatrics'];
            } else {
                targetExams = ['step1', 'step2'];
            }
        }

        // Score unattempted topics by exam relevance
        const scored = unattempted.map(topic => {
            let relevanceScore = 50; // base score for any unattempted topic
            if (targetExams.length > 0 && topic.examRelevance) {
                const matchCount = topic.examRelevance.filter(e => targetExams.includes(e)).length;
                relevanceScore = 50 + (matchCount * 15);
            }
            return { ...topic, relevanceScore };
        });

        // Sort by relevance, then shuffle within same-score groups for variety
        scored.sort((a, b) => b.relevanceScore - a.relevanceScore);

        const examLabel = targetExams.length > 0
            ? targetExams[0].replace('step', 'Step ').replace('shelf-', 'Shelf: ').replace(/-/g, ' ')
            : 'your prep';

        return scored.slice(0, maxItems).map(item => ({
            topicId: item.topicId,
            strategy: 'unattempted',
            priority: item.relevanceScore,
            reason: item.relevanceScore > 65
                ? `High-yield for ${examLabel} — not yet started`
                : 'New topic — expand your coverage',
            icon: '🆕',
            urgency: 'low',
            displayName: item.displayName,
            category: item.category
        }));
    }

    /**
     * Strategy 5: Incomplete Topics — started but not finished all content types.
     * Reason: "You've done the mechanism but haven't tried the adventure yet"
     */
    function getIncompleteRecommendations(maxItems = 2) {
        if (!window.DxProgress) return [];
        const allProgress = DxProgress.getAllProgress();
        const incomplete = [];

        Object.entries(allProgress).forEach(([topicId, topic]) => {
            const done = [];
            const missing = [];
            if (topic.mechanism?.completed) done.push('mechanism'); else missing.push('mechanism');
            if (topic.adventure?.completed) done.push('adventure'); else missing.push('adventure');
            if (topic.deepDive?.completed) done.push('deep dive'); else missing.push('deep dive');

            // Only recommend if they've done at least one thing but not everything
            if (done.length > 0 && missing.length > 0) {
                incomplete.push({
                    topicId,
                    done,
                    missing,
                    priority: 60 + (done.length * 10) // more done = more value in completing
                });
            }
        });

        incomplete.sort((a, b) => b.priority - a.priority);

        return incomplete.slice(0, maxItems).map(item => ({
            topicId: item.topicId,
            strategy: 'incomplete',
            priority: item.priority,
            reason: `Completed ${item.done.join(', ')} — try the ${item.missing[0]} next`,
            icon: '🧩',
            urgency: 'low'
        }));
    }

    // ================================================================
    //  Main Recommendation Generator
    // ================================================================
    const DxRecommend = {

        /**
         * Get personalized recommendations, ranked by priority.
         * @param {number} maxItems - Maximum recommendations to return (default 5)
         * @returns {Promise<Array>} Array of recommendation objects
         */
        async getRecommendations(maxItems = 5) {
            if (!window.DxProgress) {
                console.warn('DxRecommend: DxProgress not available');
                return [];
            }

            // Gather candidates from all strategies
            const [unattempted] = await Promise.all([
                getUnattemptedRecommendations(5)
            ]);

            const spacedRep = getSpacedRepRecommendations(3);
            const lowPerf = getLowPerformanceRecommendations(3);
            const divergence = getDivergenceRecommendations(2);
            const incomplete = getIncompleteRecommendations(2);

            // Combine all candidates
            let all = [...spacedRep, ...lowPerf, ...divergence, ...unattempted, ...incomplete];

            // Deduplicate by topicId (keep highest priority)
            const seen = new Map();
            all.forEach(rec => {
                if (!seen.has(rec.topicId) || seen.get(rec.topicId).priority < rec.priority) {
                    seen.set(rec.topicId, rec);
                }
            });
            all = Array.from(seen.values());

            // Enrich with display names from topic map
            const topicMap = await loadTopicMap();
            all.forEach(rec => {
                if (!rec.displayName && topicMap[rec.topicId]) {
                    rec.displayName = topicMap[rec.topicId].displayName;
                    rec.category = topicMap[rec.topicId].category;
                }
                if (!rec.displayName) {
                    rec.displayName = rec.topicId.replace(/-/g, ' ')
                        .replace(/\b\w/g, c => c.toUpperCase());
                }
            });

            // Sort by priority (highest first), with urgency as tiebreaker
            const urgencyOrder = { high: 3, medium: 2, low: 1 };
            all.sort((a, b) => {
                if (b.priority !== a.priority) return b.priority - a.priority;
                return (urgencyOrder[b.urgency] || 0) - (urgencyOrder[a.urgency] || 0);
            });

            return all.slice(0, maxItems);
        },

        /**
         * Build a link to the best content for a topic.
         * @param {string} topicId
         * @returns {object} { url, label, contentType }
         */
        async getTopicLink(topicId) {
            const topicMap = await loadTopicMap();
            const topic = topicMap[topicId];
            if (!topic) return { url: '#', label: 'Study', contentType: 'unknown' };

            // Check what the user has/hasn't done
            const progress = window.DxProgress ? DxProgress.getTopicProgress(topicId) : null;

            // Priority: mechanism first if not done, then adventure, then deep dive
            if (!progress?.mechanism?.completed && topic.mechanism) {
                return {
                    url: `mechanism/${topic.mechanism}`,
                    label: 'Learn Mechanism',
                    contentType: 'mechanism'
                };
            }
            if (!progress?.adventure?.completed && topic.adventure) {
                return {
                    url: topic.adventure.startsWith('adventure-cases/')
                        ? `ReasonDx/${topic.adventure}`
                        : `ReasonDx/adventure-cases/${topic.adventure}`,
                    label: 'Try Adventure',
                    contentType: 'adventure'
                };
            }
            if (!progress?.deepDive?.completed && topic.deepDive) {
                return {
                    url: `ReasonDx/deep-dive-player.html?module=${topicId}`,
                    label: 'Deep Dive',
                    contentType: 'deepDive'
                };
            }
            // All done — point to quiz for review
            return {
                url: `quiz-engine.html?topic=${topic.category || topicId}`,
                label: 'Review Quiz',
                contentType: 'quiz'
            };
        },

        /**
         * Render recommendations into a container element.
         * @param {string|HTMLElement} container - Selector or element
         * @param {object} options - { maxItems, showHeader, compact }
         */
        async render(container, options = {}) {
            const el = typeof container === 'string' ? document.querySelector(container) : container;
            if (!el) return;

            const maxItems = options.maxItems || 5;
            const showHeader = options.showHeader !== false;
            const compact = options.compact || false;

            const recs = await this.getRecommendations(maxItems);

            if (recs.length === 0) {
                el.innerHTML = `
                    <div style="text-align: center; padding: 32px; color: #64748b;">
                        <div style="font-size: 2rem; margin-bottom: 8px;">🎯</div>
                        <p>Complete some modules to get personalized recommendations!</p>
                        <a href="learn-hub.html" style="color: #059669; font-weight: 600;">Start Learning →</a>
                    </div>
                `;
                return;
            }

            const urgencyColors = {
                high: { bg: '#FEF2F2', border: '#EF4444', text: '#991B1B' },
                medium: { bg: '#FFFBEB', border: '#F59E0B', text: '#92400E' },
                low: { bg: '#F0FDF4', border: '#10B981', text: '#065F46' }
            };

            let html = '';
            if (showHeader) {
                html += `
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
                        <span style="font-size: 1.3rem;">🎯</span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; color: #1E3A5F; margin: 0;">What Should I Study Next?</h3>
                    </div>
                `;
            }

            for (const rec of recs) {
                const colors = urgencyColors[rec.urgency] || urgencyColors.low;
                const link = await this.getTopicLink(rec.topicId);

                if (compact) {
                    html += `
                        <a href="${link.url}" style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; margin-bottom: 6px; border-radius: 10px; background: ${colors.bg}; border-left: 3px solid ${colors.border}; text-decoration: none; color: inherit; transition: transform 0.15s;">
                            <span style="font-size: 1.1rem; flex-shrink: 0;">${rec.icon}</span>
                            <div style="flex: 1; min-width: 0;">
                                <div style="font-weight: 600; font-size: 0.88rem; color: #1E293B; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${rec.displayName}</div>
                                <div style="font-size: 0.75rem; color: ${colors.text};">${rec.reason}</div>
                            </div>
                            <span style="font-size: 0.75rem; color: #64748b; flex-shrink: 0;">${link.label} →</span>
                        </a>
                    `;
                } else {
                    html += `
                        <a href="${link.url}" style="display: block; padding: 16px; margin-bottom: 10px; border-radius: 12px; background: ${colors.bg}; border-left: 4px solid ${colors.border}; text-decoration: none; color: inherit; transition: transform 0.15s, box-shadow 0.15s;"
                           onmouseenter="this.style.transform='translateX(4px)';this.style.boxShadow='0 2px 8px rgba(0,0,0,0.08)'"
                           onmouseleave="this.style.transform='';this.style.boxShadow=''">
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="font-size: 1.4rem; flex-shrink: 0; margin-top: 2px;">${rec.icon}</span>
                                <div style="flex: 1;">
                                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                                        <span style="font-weight: 600; font-size: 0.95rem; color: #1E293B;">${rec.displayName}</span>
                                        ${rec.category ? `<span style="font-size: 0.7rem; padding: 2px 8px; border-radius: 10px; background: rgba(0,0,0,0.06); color: #64748b;">${rec.category}</span>` : ''}
                                    </div>
                                    <div style="font-size: 0.82rem; color: ${colors.text}; margin-bottom: 8px;">${rec.reason}</div>
                                    <span style="font-size: 0.8rem; font-weight: 600; color: #059669;">${link.label} →</span>
                                </div>
                            </div>
                        </a>
                    `;
                }
            }

            el.innerHTML = html;
        }
    };

    window.DxRecommend = DxRecommend;
    console.log('DxRecommend recommendation engine loaded');

})(window);
