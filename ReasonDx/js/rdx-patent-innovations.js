/**
 * ReasonDx Patent Innovations Library
 * ====================================
 * RPFS - Reasoning Pathway Fingerprinting System (persistence & visualization data)
 * CRDA - Collaborative Reasoning Divergence Analysis
 * LRDT - Longitudinal Reasoning Development Tracking
 * MMD  - Metacognitive Moment Detection
 * EPE  - Expert Pathway Extraction (data layer)
 *
 * All data persisted to localStorage for static-site architecture.
 * Key prefix: "rdx_" for all patent feature data.
 */

(function(window) {
    'use strict';

    const STORAGE_KEYS = {
        RPFS_SESSIONS: 'rdx_rpfs_sessions',
        RPFS_AGGREGATE: 'rdx_rpfs_aggregate',
        CRDA_COMPARISONS: 'rdx_crda_comparisons',
        CRDA_EXPERT_PATHS: 'rdx_crda_expert_paths',
        LRDT_TOPIC_MASTERY: 'rdx_lrdt_topic_mastery',
        LRDT_SESSIONS_LOG: 'rdx_lrdt_sessions_log',
        LRDT_GROWTH_CURVES: 'rdx_lrdt_growth_curves',
        MMD_EVENTS: 'rdx_mmd_events',
        EPE_PATHWAYS: 'rdx_epe_expert_pathways'
    };

    function safeGet(key, fallback) {
        try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
        catch(e) { return fallback; }
    }
    function safeSet(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); return true; }
        catch(e) { console.warn('Storage write failed:', e); return false; }
    }

    // ================================================================
    //  RPFS — Reasoning Pathway Fingerprinting System
    //  Persistence layer + aggregate analysis
    // ================================================================
    const RPFS = {
        /**
         * Save a completed case session's RPFS report.
         * Called from training.html after rpfsGenerateReport().
         */
        saveSession(report) {
            if (!report || !report.session) return false;
            const sessions = safeGet(STORAGE_KEYS.RPFS_SESSIONS, []);
            report._savedAt = Date.now();
            report._id = `rpfs_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
            sessions.push(report);
            // Keep last 200 sessions max
            if (sessions.length > 200) sessions.splice(0, sessions.length - 200);
            safeSet(STORAGE_KEYS.RPFS_SESSIONS, sessions);
            this.updateAggregate(sessions);
            // Also feed into LRDT
            LRDT.recordSession(report);
            return report._id;
        },

        /**
         * Compute aggregate fingerprint from all sessions.
         */
        updateAggregate(sessions) {
            if (!sessions || sessions.length === 0) return;
            const agg = {
                totalSessions: sessions.length,
                lastUpdated: Date.now(),
                // Cognitive bias averages
                biasProfile: {
                    prematureClosure: 0,
                    anchoring: 0,
                    diagnosticMomentum: 0,
                    confirmationBias: 0,
                    hypothesisFlexibility: 0
                },
                // Reasoning quality
                avgReasoningScore: 0,
                reasoningScoreTrend: [],
                // Timing patterns
                avgSessionDuration: 0,
                avgStageTime: {},
                // Hypothesis patterns
                avgDifferentialSize: 0,
                avgPivotPoints: 0,
                avgConfidenceVariance: 0,
                // Data gathering
                avgDataActions: 0,
                dataGatheringByType: {},
                // Metacognition
                avgMetacogMoments: 0,
                metacogResponseRate: 0,
                // Per-case breakdown
                casePerformance: {}
            };

            let biasCount = 0;
            sessions.forEach((s, i) => {
                // Reasoning score
                if (s.reasoningQualityScore != null) {
                    agg.avgReasoningScore += s.reasoningQualityScore;
                    agg.reasoningScoreTrend.push({
                        session: i + 1,
                        score: s.reasoningQualityScore,
                        caseId: s.session?.caseId,
                        date: s.session?.startTime || s._savedAt
                    });
                }
                // Cognitive patterns
                if (s.cognitivePatterns) {
                    biasCount++;
                    agg.biasProfile.prematureClosure += s.cognitivePatterns.prematureClosureScore || 0;
                    agg.biasProfile.anchoring += s.cognitivePatterns.anchoringScore || 0;
                    agg.biasProfile.diagnosticMomentum += s.cognitivePatterns.diagnosticMomentumScore || 0;
                    agg.biasProfile.confirmationBias += s.cognitivePatterns.confirmationBiasScore || 0;
                    agg.biasProfile.hypothesisFlexibility += s.cognitivePatterns.hypothesisFlexibilityScore || 0;
                }
                // Duration
                if (s.session?.duration) agg.avgSessionDuration += s.session.duration;
                // Hypothesis
                if (s.hypothesisEvolution?.totalChanges != null) agg.avgPivotPoints += (s.hypothesisEvolution.pivotPoints?.length || 0);
                if (s.hypothesisEvolution?.snapshots?.length) {
                    const last = s.hypothesisEvolution.snapshots[s.hypothesisEvolution.snapshots.length - 1];
                    if (last?.differential) agg.avgDifferentialSize += last.differential.length;
                }
                // Data gathering
                if (s.dataGathering?.totalActions) agg.avgDataActions += s.dataGathering.totalActions;
                // Metacognition
                if (s.metacognition?.momentsDetected) agg.avgMetacogMoments += s.metacognition.momentsDetected;
                // Per-case
                const caseId = s.session?.caseId || 'unknown';
                if (!agg.casePerformance[caseId]) {
                    agg.casePerformance[caseId] = { attempts: 0, scores: [], avgScore: 0 };
                }
                agg.casePerformance[caseId].attempts++;
                if (s.reasoningQualityScore != null) agg.casePerformance[caseId].scores.push(s.reasoningQualityScore);
            });

            const n = sessions.length;
            if (biasCount > 0) {
                for (const k in agg.biasProfile) agg.biasProfile[k] = Math.round(agg.biasProfile[k] / biasCount);
            }
            agg.avgReasoningScore = Math.round(agg.avgReasoningScore / n);
            agg.avgSessionDuration = Math.round(agg.avgSessionDuration / n);
            agg.avgPivotPoints = +(agg.avgPivotPoints / n).toFixed(1);
            agg.avgDifferentialSize = +(agg.avgDifferentialSize / n).toFixed(1);
            agg.avgDataActions = Math.round(agg.avgDataActions / n);
            agg.avgMetacogMoments = +(agg.avgMetacogMoments / n).toFixed(1);

            // Per-case averages
            for (const c in agg.casePerformance) {
                const cp = agg.casePerformance[c];
                cp.avgScore = cp.scores.length ? Math.round(cp.scores.reduce((a,b) => a+b, 0) / cp.scores.length) : 0;
            }

            safeSet(STORAGE_KEYS.RPFS_AGGREGATE, agg);
            return agg;
        },

        getAggregate() { return safeGet(STORAGE_KEYS.RPFS_AGGREGATE, null); },
        getSessions() { return safeGet(STORAGE_KEYS.RPFS_SESSIONS, []); },
        getRecentSessions(n = 10) { const s = this.getSessions(); return s.slice(-n); },

        /**
         * Generate the "fingerprint" — a normalized vector representing
         * this student's reasoning style across 7 dimensions.
         */
        generateFingerprint() {
            const agg = this.getAggregate();
            if (!agg) return null;
            // Normalize each dimension to 0-100
            const bp = agg.biasProfile;
            return {
                thoroughness: Math.min(100, Math.max(0, 100 - bp.prematureClosure)),
                flexibility: Math.min(100, Math.max(0, bp.hypothesisFlexibility)),
                evidenceUse: Math.min(100, Math.max(0, 100 - bp.confirmationBias)),
                adaptability: Math.min(100, Math.max(0, 100 - bp.anchoring)),
                momentum: Math.min(100, Math.max(0, 100 - bp.diagnosticMomentum)),
                metacognition: Math.min(100, Math.max(0, agg.avgMetacogMoments * 20)),
                overallQuality: agg.avgReasoningScore,
                _sessionCount: agg.totalSessions
            };
        },

        clearAll() {
            localStorage.removeItem(STORAGE_KEYS.RPFS_SESSIONS);
            localStorage.removeItem(STORAGE_KEYS.RPFS_AGGREGATE);
        }
    };

    // ================================================================
    //  CRDA — Collaborative Reasoning Divergence Analysis
    //  Detects and pedagogically leverages reasoning divergence
    // ================================================================
    const CRDA = {
        /**
         * Compare two RPFS session reports for the SAME case.
         * Returns divergence analysis.
         */
        analyzeDivergence(sessionA, sessionB) {
            if (!sessionA || !sessionB) return null;
            const result = {
                caseId: sessionA.session?.caseId || sessionB.session?.caseId,
                analyzedAt: Date.now(),
                studentA: sessionA._id,
                studentB: sessionB._id,
                divergencePoints: [],
                divergenceScore: 0,
                pedagogicalPrompts: [],
                convergencePoints: [],
                influenceOpportunities: []
            };

            // 1. Hypothesis divergence — compare differential lists at each stage
            const snapsA = sessionA.hypothesisEvolution?.snapshots || [];
            const snapsB = sessionB.hypothesisEvolution?.snapshots || [];
            const stagesA = {};
            const stagesB = {};
            snapsA.forEach(s => { if (s.stage) stagesA[s.stage] = s; });
            snapsB.forEach(s => { if (s.stage) stagesB[s.stage] = s; });

            const allStages = new Set([...Object.keys(stagesA), ...Object.keys(stagesB)]);
            allStages.forEach(stage => {
                const a = stagesA[stage];
                const b = stagesB[stage];
                if (a && b && a.differential && b.differential) {
                    const topA = a.differential[0]?.name || '';
                    const topB = b.differential[0]?.name || '';
                    if (topA && topB && topA.toLowerCase() !== topB.toLowerCase()) {
                        result.divergencePoints.push({
                            type: 'hypothesis_divergence',
                            stage,
                            studentA_top: topA,
                            studentB_top: topB,
                            studentA_differential: a.differential.map(d => d.name),
                            studentB_differential: b.differential.map(d => d.name),
                            significance: 'high'
                        });
                    } else if (topA === topB) {
                        result.convergencePoints.push({ stage, sharedTopDx: topA });
                    }
                }
            });

            // 2. Data gathering sequence divergence
            const seqA = (sessionA.dataGathering?.sequence || []).map(d => d.item);
            const seqB = (sessionB.dataGathering?.sequence || []).map(d => d.item);
            const uniqueToA = seqA.filter(x => !seqB.includes(x));
            const uniqueToB = seqB.filter(x => !seqA.includes(x));
            if (uniqueToA.length > 0 || uniqueToB.length > 0) {
                result.divergencePoints.push({
                    type: 'data_gathering_divergence',
                    onlyA: uniqueToA.slice(0, 5),
                    onlyB: uniqueToB.slice(0, 5),
                    overlapRatio: this._jaccardSimilarity(seqA, seqB),
                    significance: uniqueToA.length + uniqueToB.length > 5 ? 'high' : 'moderate'
                });
            }

            // 3. Confidence trajectory divergence
            const confA = sessionA.confidence?.trajectory || [];
            const confB = sessionB.confidence?.trajectory || [];
            if (confA.length > 0 && confB.length > 0) {
                const finalConfA = confA[confA.length - 1]?.confidence || 50;
                const finalConfB = confB[confB.length - 1]?.confidence || 50;
                if (Math.abs(finalConfA - finalConfB) > 25) {
                    result.divergencePoints.push({
                        type: 'confidence_divergence',
                        studentA_final: finalConfA,
                        studentB_final: finalConfB,
                        delta: Math.abs(finalConfA - finalConfB),
                        significance: Math.abs(finalConfA - finalConfB) > 40 ? 'high' : 'moderate'
                    });
                }
            }

            // 4. Cognitive bias pattern divergence
            const biasA = sessionA.cognitivePatterns || {};
            const biasB = sessionB.cognitivePatterns || {};
            const biasKeys = ['prematureClosureScore', 'anchoringScore', 'confirmationBiasScore', 'hypothesisFlexibilityScore'];
            biasKeys.forEach(key => {
                const diff = Math.abs((biasA[key] || 0) - (biasB[key] || 0));
                if (diff > 30) {
                    result.divergencePoints.push({
                        type: 'cognitive_pattern_divergence',
                        pattern: key.replace('Score', ''),
                        studentA: biasA[key] || 0,
                        studentB: biasB[key] || 0,
                        delta: diff,
                        significance: diff > 50 ? 'high' : 'moderate'
                    });
                }
            });

            // Calculate overall divergence score (0-100)
            const highDiv = result.divergencePoints.filter(d => d.significance === 'high').length;
            const modDiv = result.divergencePoints.filter(d => d.significance === 'moderate').length;
            result.divergenceScore = Math.min(100, highDiv * 25 + modDiv * 10);

            // Generate pedagogical prompts
            result.pedagogicalPrompts = this._generatePrompts(result);

            // Identify influence opportunities
            result.influenceOpportunities = this._identifyInfluenceOpportunities(sessionA, sessionB, result);

            // Save comparison
            const comparisons = safeGet(STORAGE_KEYS.CRDA_COMPARISONS, []);
            comparisons.push(result);
            if (comparisons.length > 100) comparisons.splice(0, comparisons.length - 100);
            safeSet(STORAGE_KEYS.CRDA_COMPARISONS, comparisons);

            return result;
        },

        _jaccardSimilarity(arrA, arrB) {
            const setA = new Set(arrA);
            const setB = new Set(arrB);
            const intersection = [...setA].filter(x => setB.has(x));
            const union = new Set([...setA, ...setB]);
            return union.size > 0 ? +(intersection.length / union.size).toFixed(2) : 1;
        },

        _generatePrompts(result) {
            const prompts = [];
            result.divergencePoints.forEach(dp => {
                if (dp.type === 'hypothesis_divergence') {
                    prompts.push({
                        type: 'hypothesis_discussion',
                        stage: dp.stage,
                        prompt: `At the ${dp.stage} stage, you prioritized "${dp.studentA_top}" while your partner prioritized "${dp.studentB_top}". What specific evidence led each of you to your primary hypothesis? What single finding would change your mind?`,
                        learningObjective: 'Explore diagnostic reasoning diversity and evidence weighting',
                        difficulty: 'high'
                    });
                }
                if (dp.type === 'data_gathering_divergence' && dp.overlapRatio < 0.5) {
                    prompts.push({
                        type: 'workup_comparison',
                        prompt: `Your diagnostic workups took different paths. Review what your partner ordered that you didn't. Would any of those tests have changed your differential? What drove your choices?`,
                        learningObjective: 'Understand hypothesis-driven data gathering strategies',
                        uniqueItems: { onlyA: dp.onlyA, onlyB: dp.onlyB },
                        difficulty: 'moderate'
                    });
                }
                if (dp.type === 'confidence_divergence') {
                    prompts.push({
                        type: 'calibration_reflection',
                        prompt: `Your final confidence levels differed significantly (${dp.studentA_final}% vs ${dp.studentB_final}%). Discuss: what made one of you more certain? Is higher confidence always better?`,
                        learningObjective: 'Calibrate confidence against evidence strength',
                        difficulty: 'moderate'
                    });
                }
            });
            return prompts;
        },

        _identifyInfluenceOpportunities(sessionA, sessionB, result) {
            const opportunities = [];
            const scoreA = sessionA.reasoningQualityScore || 0;
            const scoreB = sessionB.reasoningQualityScore || 0;
            if (Math.abs(scoreA - scoreB) > 15) {
                const stronger = scoreA > scoreB ? 'A' : 'B';
                const strongerBias = stronger === 'A' ? sessionA.cognitivePatterns : sessionB.cognitivePatterns;
                const weakerBias = stronger === 'A' ? sessionB.cognitivePatterns : sessionA.cognitivePatterns;
                opportunities.push({
                    type: 'peer_learning',
                    strongerStudent: stronger,
                    scoreDelta: Math.abs(scoreA - scoreB),
                    recommendation: `Student ${stronger} showed stronger reasoning on this case. Pair for peer teaching on: ${this._identifyStrengthAreas(strongerBias, weakerBias).join(', ')}`
                });
            }
            return opportunities;
        },

        _identifyStrengthAreas(strongBias, weakBias) {
            const areas = [];
            if ((weakBias?.prematureClosureScore || 0) > (strongBias?.prematureClosureScore || 0) + 15) areas.push('thoroughness');
            if ((weakBias?.anchoringScore || 0) > (strongBias?.anchoringScore || 0) + 15) areas.push('flexibility');
            if ((weakBias?.confirmationBiasScore || 0) > (strongBias?.confirmationBiasScore || 0) + 15) areas.push('evidence evaluation');
            return areas.length > 0 ? areas : ['overall reasoning quality'];
        },

        /**
         * Compare a student session against an expert pathway.
         */
        compareToExpert(studentSession, expertPathway) {
            if (!expertPathway) return null;
            const result = {
                alignmentScore: 0,
                divergenceFromExpert: [],
                expertDecisionPoints: expertPathway.keyDecisionPoints || [],
                matchedDecisions: 0,
                totalExpertDecisions: expertPathway.keyDecisionPoints?.length || 0
            };
            // Compare hypothesis at each expert decision point
            const studentSnaps = studentSession.hypothesisEvolution?.snapshots || [];
            (expertPathway.keyDecisionPoints || []).forEach(edp => {
                const studentAtStage = studentSnaps.find(s => s.stage === edp.stage);
                if (studentAtStage) {
                    const studentTop = studentAtStage.differential?.[0]?.name?.toLowerCase() || '';
                    const expertTop = (edp.expectedDiagnosis || '').toLowerCase();
                    if (studentTop === expertTop || studentTop.includes(expertTop) || expertTop.includes(studentTop)) {
                        result.matchedDecisions++;
                    } else {
                        result.divergenceFromExpert.push({
                            stage: edp.stage,
                            expertExpected: edp.expectedDiagnosis,
                            studentHad: studentAtStage.differential?.[0]?.name,
                            significance: edp.criticality || 'moderate'
                        });
                    }
                }
            });
            result.alignmentScore = result.totalExpertDecisions > 0
                ? Math.round((result.matchedDecisions / result.totalExpertDecisions) * 100) : 0;
            return result;
        },

        getComparisons() { return safeGet(STORAGE_KEYS.CRDA_COMPARISONS, []); },
        clearAll() { localStorage.removeItem(STORAGE_KEYS.CRDA_COMPARISONS); }
    };

    // ================================================================
    //  LRDT — Longitudinal Reasoning Development Tracking
    //  Tracks learning progression across topics over time
    // ================================================================
    const LRDT = {
        /**
         * Record a completed session for longitudinal tracking.
         * Called automatically by RPFS.saveSession().
         */
        recordSession(rpfsReport) {
            const caseId = rpfsReport.session?.caseId || 'unknown';
            const score = rpfsReport.reasoningQualityScore || 0;
            const biases = rpfsReport.cognitivePatterns || {};
            const timestamp = rpfsReport._savedAt || Date.now();

            // Update sessions log
            const log = safeGet(STORAGE_KEYS.LRDT_SESSIONS_LOG, []);
            log.push({
                caseId,
                score,
                biases: { ...biases },
                timestamp,
                duration: rpfsReport.session?.duration || 0,
                pivotPoints: rpfsReport.hypothesisEvolution?.pivotPoints?.length || 0,
                dataActions: rpfsReport.dataGathering?.totalActions || 0,
                metacogMoments: rpfsReport.metacognition?.momentsDetected || 0,
                correctDiagnosis: rpfsReport.hypothesisEvolution?.finalDiagnosis
            });
            if (log.length > 500) log.splice(0, log.length - 500);
            safeSet(STORAGE_KEYS.LRDT_SESSIONS_LOG, log);

            // Update topic mastery
            this._updateTopicMastery(caseId, score, biases, timestamp);

            // Recalculate growth curves
            this._updateGrowthCurves(log);
        },

        _updateTopicMastery(caseId, score, biases, timestamp) {
            const mastery = safeGet(STORAGE_KEYS.LRDT_TOPIC_MASTERY, {});
            if (!mastery[caseId]) {
                mastery[caseId] = {
                    firstAttempt: timestamp,
                    attempts: 0,
                    scores: [],
                    currentMastery: 0,
                    masteryLevel: 'novice', // novice → developing → competent → proficient → expert
                    lastAttempt: timestamp,
                    biasHistory: []
                };
            }
            const topic = mastery[caseId];
            topic.attempts++;
            topic.scores.push(score);
            topic.lastAttempt = timestamp;
            topic.biasHistory.push({ ...biases, timestamp });

            // Weighted mastery: recent attempts weighted more heavily
            const weights = topic.scores.map((_, i) => 0.5 + (0.5 * i / topic.scores.length));
            const totalWeight = weights.reduce((a, b) => a + b, 0);
            topic.currentMastery = Math.round(
                topic.scores.reduce((sum, s, i) => sum + s * weights[i], 0) / totalWeight
            );

            // Mastery level
            if (topic.currentMastery >= 90 && topic.attempts >= 3) topic.masteryLevel = 'expert';
            else if (topic.currentMastery >= 80 && topic.attempts >= 2) topic.masteryLevel = 'proficient';
            else if (topic.currentMastery >= 70) topic.masteryLevel = 'competent';
            else if (topic.currentMastery >= 50) topic.masteryLevel = 'developing';
            else topic.masteryLevel = 'novice';

            // Learning rate for this topic (score improvement per attempt)
            if (topic.scores.length >= 2) {
                const firstHalf = topic.scores.slice(0, Math.ceil(topic.scores.length / 2));
                const secondHalf = topic.scores.slice(Math.ceil(topic.scores.length / 2));
                const avgFirst = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
                const avgSecond = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
                topic.learningRate = +((avgSecond - avgFirst) / firstHalf.length).toFixed(2);
            }

            safeSet(STORAGE_KEYS.LRDT_TOPIC_MASTERY, mastery);
        },

        _updateGrowthCurves(log) {
            // Compute rolling averages for overall growth
            const windowSize = 5;
            const curves = {
                reasoningQuality: [],
                biasReduction: [],
                metacognition: [],
                timestamps: []
            };

            for (let i = 0; i < log.length; i++) {
                const windowStart = Math.max(0, i - windowSize + 1);
                const window = log.slice(windowStart, i + 1);

                curves.reasoningQuality.push({
                    session: i + 1,
                    value: Math.round(window.reduce((s, l) => s + l.score, 0) / window.length),
                    timestamp: log[i].timestamp
                });

                // Composite bias score (lower is better)
                const avgBias = window.reduce((s, l) => {
                    const b = l.biases || {};
                    return s + (b.prematureClosureScore || 0) + (b.anchoringScore || 0) +
                           (b.confirmationBiasScore || 0) + (b.diagnosticMomentumScore || 0);
                }, 0) / window.length;
                curves.biasReduction.push({
                    session: i + 1,
                    value: Math.round(100 - avgBias / 4), // Convert to "bias-free" percentage
                    timestamp: log[i].timestamp
                });

                curves.metacognition.push({
                    session: i + 1,
                    value: Math.round(window.reduce((s, l) => s + (l.metacogMoments || 0), 0) / window.length * 20),
                    timestamp: log[i].timestamp
                });

                curves.timestamps.push(log[i].timestamp);
            }

            safeSet(STORAGE_KEYS.LRDT_GROWTH_CURVES, curves);
        },

        getTopicMastery() { return safeGet(STORAGE_KEYS.LRDT_TOPIC_MASTERY, {}); },
        getGrowthCurves() { return safeGet(STORAGE_KEYS.LRDT_GROWTH_CURVES, null); },
        getSessionsLog() { return safeGet(STORAGE_KEYS.LRDT_SESSIONS_LOG, []); },

        /**
         * Get recommended topics for review (spaced repetition logic).
         */
        getRecommendedReview() {
            const mastery = this.getTopicMastery();
            const now = Date.now();
            const recommendations = [];

            for (const [caseId, topic] of Object.entries(mastery)) {
                // Days since last attempt
                const daysSince = (now - topic.lastAttempt) / (1000 * 60 * 60 * 24);
                // Review interval based on mastery level
                const intervals = { novice: 1, developing: 3, competent: 7, proficient: 14, expert: 30 };
                const interval = intervals[topic.masteryLevel] || 7;

                if (daysSince >= interval) {
                    recommendations.push({
                        caseId,
                        masteryLevel: topic.masteryLevel,
                        currentMastery: topic.currentMastery,
                        daysSinceReview: Math.round(daysSince),
                        urgency: daysSince >= interval * 2 ? 'high' : 'moderate',
                        attempts: topic.attempts
                    });
                }
            }

            // Sort by urgency then lowest mastery
            return recommendations.sort((a, b) => {
                if (a.urgency !== b.urgency) return a.urgency === 'high' ? -1 : 1;
                return a.currentMastery - b.currentMastery;
            });
        },

        /**
         * Generate a learning rate report for instructor dashboard.
         */
        generateInstructorReport() {
            const mastery = this.getTopicMastery();
            const log = this.getSessionsLog();
            const curves = this.getGrowthCurves();

            return {
                totalSessions: log.length,
                topicsCovered: Object.keys(mastery).length,
                masteryDistribution: {
                    expert: Object.values(mastery).filter(t => t.masteryLevel === 'expert').length,
                    proficient: Object.values(mastery).filter(t => t.masteryLevel === 'proficient').length,
                    competent: Object.values(mastery).filter(t => t.masteryLevel === 'competent').length,
                    developing: Object.values(mastery).filter(t => t.masteryLevel === 'developing').length,
                    novice: Object.values(mastery).filter(t => t.masteryLevel === 'novice').length
                },
                growthCurves: curves,
                topicDetails: mastery,
                recommendedReview: this.getRecommendedReview(),
                overallLearningRate: this._calculateOverallLearningRate(log)
            };
        },

        _calculateOverallLearningRate(log) {
            if (log.length < 4) return null;
            const firstQuarter = log.slice(0, Math.ceil(log.length / 4));
            const lastQuarter = log.slice(-Math.ceil(log.length / 4));
            const avgFirst = firstQuarter.reduce((s, l) => s + l.score, 0) / firstQuarter.length;
            const avgLast = lastQuarter.reduce((s, l) => s + l.score, 0) / lastQuarter.length;
            return {
                improvement: +(avgLast - avgFirst).toFixed(1),
                percentChange: avgFirst > 0 ? +((avgLast - avgFirst) / avgFirst * 100).toFixed(1) : 0,
                trend: avgLast > avgFirst ? 'improving' : avgLast === avgFirst ? 'stable' : 'declining'
            };
        },

        clearAll() {
            localStorage.removeItem(STORAGE_KEYS.LRDT_TOPIC_MASTERY);
            localStorage.removeItem(STORAGE_KEYS.LRDT_SESSIONS_LOG);
            localStorage.removeItem(STORAGE_KEYS.LRDT_GROWTH_CURVES);
        }
    };

    // ================================================================
    //  MMD — Metacognitive Moment Detection
    //  Detects and prompts for metacognitive reflection
    // ================================================================
    const MMD = {
        /**
         * Analyze current state for metacognitive trigger conditions.
         * Returns a prompt if a moment is detected, null otherwise.
         */
        detectMoment(state) {
            const moments = [];

            // Trigger: Confidence-evidence mismatch
            if (state.confidence > 80 && state.dataGatheringCount < 3) {
                moments.push({
                    type: 'confidence_evidence_mismatch',
                    prompt: 'You have high confidence but have gathered limited evidence. What specific findings support your leading diagnosis? What would make you reconsider?',
                    severity: 'important'
                });
            }

            // Trigger: Anchoring detection
            if (state.topDiagnosisUnchangedStages >= 3 && state.contraryEvidenceCount > 0) {
                moments.push({
                    type: 'potential_anchoring',
                    prompt: 'Your top diagnosis hasn\'t changed despite new information. Is there evidence you might be underweighting? What alternative diagnosis best explains ALL the findings?',
                    severity: 'critical'
                });
            }

            // Trigger: Premature closure
            if (state.differentialSize <= 1 && state.stage !== 'final' && state.dataGatheringCount < 5) {
                moments.push({
                    type: 'premature_closure',
                    prompt: 'You\'re working with a narrow differential early in the case. What are two other diagnoses that could present similarly? What findings would distinguish them?',
                    severity: 'important'
                });
            }

            // Trigger: Significant pivot opportunity
            if (state.newCriticalFinding && state.lastPivotStagesAgo >= 2) {
                moments.push({
                    type: 'pivot_opportunity',
                    prompt: 'A significant new finding just emerged. How does this change your thinking? Should your differential be restructured?',
                    severity: 'moderate'
                });
            }

            // Log detected moments
            if (moments.length > 0) {
                const events = safeGet(STORAGE_KEYS.MMD_EVENTS, []);
                moments.forEach(m => {
                    events.push({ ...m, timestamp: Date.now(), caseId: state.caseId });
                });
                safeSet(STORAGE_KEYS.MMD_EVENTS, events);
            }

            // Return highest severity moment
            const priority = { critical: 3, important: 2, moderate: 1 };
            moments.sort((a, b) => (priority[b.severity] || 0) - (priority[a.severity] || 0));
            return moments[0] || null;
        },

        getEvents() { return safeGet(STORAGE_KEYS.MMD_EVENTS, []); },
        clearAll() { localStorage.removeItem(STORAGE_KEYS.MMD_EVENTS); }
    };

    // ================================================================
    //  EPE — Expert Pathway Extraction (data layer)
    // ================================================================
    const EPE = {
        saveExpertPathway(pathway) {
            const paths = safeGet(STORAGE_KEYS.EPE_PATHWAYS, []);
            pathway._savedAt = Date.now();
            paths.push(pathway);
            safeSet(STORAGE_KEYS.EPE_PATHWAYS, paths);
        },
        getExpertPathways(caseId) {
            const paths = safeGet(STORAGE_KEYS.EPE_PATHWAYS, []);
            return caseId ? paths.filter(p => p.caseId === caseId) : paths;
        },
        clearAll() { localStorage.removeItem(STORAGE_KEYS.EPE_PATHWAYS); }
    };

    // ================================================================
    //  Public API
    // ================================================================
    window.RdxPatent = { RPFS, CRDA, LRDT, MMD, EPE, STORAGE_KEYS };

    console.log('ReasonDx Patent Innovations loaded: RPFS, CRDA, LRDT, MMD, EPE');

})(window);
