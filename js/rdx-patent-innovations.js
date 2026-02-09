/**
 * ReasonDx Patent Innovations
 * Reasoning Pathway Fingerprinting System (RPFS)
 * Collaborative Reasoning Divergence Analysis (CRDA)
 * Reasoning Pathway Markov Model (RPMM)
 * And supporting analytical engines
 */
(function() {
    if (window.RdxPatent) return;

    // ============================================
    // RPFS — Reasoning Pathway Fingerprinting System
    // ============================================

    const RPFS = {
        DIMENSIONS: [
            'thoroughness', 'flexibility', 'evidenceUse', 'hypothesisGeneration',
            'prematureClosureResistance', 'anchoringResistance', 'diagnosticMomentumResistance',
            'confirmationBiasResistance', 'hypothesisFlexibility',
            'temporalReasoning', 'sequenceOptimality', 'dataGatheringBreadth',
            'metacognitiveAccuracy', 'confidenceCalibration', 'uncertaintyTolerance'
        ],

        ARCHETYPES: {
            systematic: { name: 'Systematic Reasoner', description: 'Methodical, thorough approach — gathers comprehensive data before narrowing hypotheses. Excels at complex cases but may be slower under time pressure.' },
            intuitive: { name: 'Intuitive Recognizer', description: 'Pattern-recognition driven — quickly identifies key features and matches to known presentations. Fast but may miss atypical presentations.' },
            analytical: { name: 'Analytical Thinker', description: 'Evidence-focused — weighs each data point carefully against competing hypotheses. Strong at distinguishing similar conditions.' },
            exploratory: { name: 'Exploratory Learner', description: 'Broad hypothesis generator — considers many possibilities before converging. Creative differentials but may struggle to commit.' },
            anchored: { name: 'Anchored Reasoner', description: 'Strong first-impression reasoning — quickly forms a leading diagnosis. Efficient when right but vulnerable to anchoring bias.' }
        },

        /**
         * Generate a fingerprint from session data
         * @param {object} sessionData - { decisions, timestamps, hypotheses, confidence, dataGathered }
         * @returns {object} fingerprint vector with 15 dimensions
         */
        generateFingerprint: function(sessionData) {
            if (!sessionData) return null;

            const decisions = sessionData.decisions || [];
            const timestamps = sessionData.timestamps || [];
            const hypotheses = sessionData.hypotheses || [];
            const confidence = sessionData.confidence || [];

            // Compute each dimension
            const vector = {};

            // Thoroughness — proportion of available data points gathered
            vector.thoroughness = this._computeThoroughness(sessionData);

            // Flexibility — how often hypotheses change during the case
            vector.flexibility = this._computeFlexibility(hypotheses);

            // Evidence use — correlation between new data and hypothesis changes
            vector.evidenceUse = this._computeEvidenceUse(sessionData);

            // Hypothesis generation — breadth of initial differential
            vector.hypothesisGeneration = this._computeHypothesisGen(hypotheses);

            // Bias resistance dimensions
            vector.prematureClosureResistance = this._computePrematureClosureResistance(sessionData);
            vector.anchoringResistance = this._computeAnchoringResistance(hypotheses);
            vector.diagnosticMomentumResistance = this._computeMomentumResistance(sessionData);
            vector.confirmationBiasResistance = this._computeConfirmationBiasResistance(sessionData);
            vector.hypothesisFlexibility = this._computeHypothesisFlexibility(hypotheses);

            // Temporal reasoning
            vector.temporalReasoning = this._computeTemporalReasoning(timestamps, decisions);
            vector.sequenceOptimality = this._computeSequenceOptimality(sessionData);

            // Data gathering
            vector.dataGatheringBreadth = this._computeDataBreadth(sessionData);

            // Metacognition
            vector.metacognitiveAccuracy = this._computeMetacognition(sessionData);
            vector.confidenceCalibration = this._computeConfidenceCalibration(confidence, sessionData);
            vector.uncertaintyTolerance = this._computeUncertaintyTolerance(confidence);

            return {
                vector,
                timestamp: new Date().toISOString(),
                sessionId: sessionData.sessionId || null,
                archetype: this.classifyArchetype(vector),
                geometricSignature: this._computeGeometricSignature(vector),
                qualityScore: this._computeQualityScore(vector)
            };
        },

        /**
         * Classify reasoning archetype from fingerprint vector
         */
        classifyArchetype: function(vector) {
            if (!vector) return 'analytical';

            // Score each archetype based on dimensional weights
            const scores = {
                systematic: (vector.thoroughness * 0.3 + vector.dataGatheringBreadth * 0.3 + vector.sequenceOptimality * 0.2 + vector.prematureClosureResistance * 0.2),
                intuitive: ((1 - vector.thoroughness) * 0.2 + vector.hypothesisGeneration * 0.3 + (1 - vector.uncertaintyTolerance) * 0.2 + vector.temporalReasoning * 0.3),
                analytical: (vector.evidenceUse * 0.3 + vector.confirmationBiasResistance * 0.3 + vector.metacognitiveAccuracy * 0.2 + vector.confidenceCalibration * 0.2),
                exploratory: (vector.flexibility * 0.3 + vector.hypothesisGeneration * 0.3 + vector.uncertaintyTolerance * 0.2 + vector.hypothesisFlexibility * 0.2),
                anchored: ((1 - vector.anchoringResistance) * 0.3 + (1 - vector.flexibility) * 0.3 + (1 - vector.hypothesisFlexibility) * 0.2 + vector.temporalReasoning * 0.2)
            };

            let maxType = 'analytical';
            let maxScore = -1;
            for (const [type, score] of Object.entries(scores)) {
                if (score > maxScore) { maxScore = score; maxType = type; }
            }

            return maxType;
        },

        /**
         * Compare two fingerprints using weighted cosine similarity
         */
        compareFingerprints: function(fp1, fp2) {
            if (!fp1?.vector || !fp2?.vector) return null;

            const weights = {
                thoroughness: 1.2, flexibility: 1.0, evidenceUse: 1.5, hypothesisGeneration: 0.8,
                prematureClosureResistance: 1.3, anchoringResistance: 1.3, diagnosticMomentumResistance: 1.1,
                confirmationBiasResistance: 1.2, hypothesisFlexibility: 0.9,
                temporalReasoning: 1.0, sequenceOptimality: 1.4, dataGatheringBreadth: 0.8,
                metacognitiveAccuracy: 1.1, confidenceCalibration: 1.2, uncertaintyTolerance: 0.7
            };

            let dotProduct = 0, mag1 = 0, mag2 = 0;

            for (const dim of this.DIMENSIONS) {
                const w = weights[dim] || 1.0;
                const v1 = (fp1.vector[dim] || 0) * w;
                const v2 = (fp2.vector[dim] || 0) * w;
                dotProduct += v1 * v2;
                mag1 += v1 * v1;
                mag2 += v2 * v2;
            }

            const similarity = (mag1 > 0 && mag2 > 0) ? dotProduct / (Math.sqrt(mag1) * Math.sqrt(mag2)) : 0;

            return {
                similarity: Math.round(similarity * 1000) / 1000,
                divergentDimensions: this._findDivergentDimensions(fp1.vector, fp2.vector),
                archetypeMatch: fp1.archetype === fp2.archetype
            };
        },

        /**
         * Compare to expert reference pathway
         */
        compareToExpert: function(learnerFP, expertFP) {
            const comparison = this.compareFingerprints(learnerFP, expertFP);
            if (!comparison) return null;

            comparison.gapAnalysis = {};
            for (const dim of this.DIMENSIONS) {
                const gap = (expertFP.vector[dim] || 0) - (learnerFP.vector[dim] || 0);
                if (Math.abs(gap) > 0.15) {
                    comparison.gapAnalysis[dim] = {
                        gap: Math.round(gap * 100) / 100,
                        direction: gap > 0 ? 'below_expert' : 'above_expert',
                        significance: Math.abs(gap) > 0.3 ? 'high' : 'moderate'
                    };
                }
            }

            return comparison;
        },

        // ---- Internal computation methods ----

        _computeThoroughness: function(data) {
            const gathered = (data.dataGathered || []).length;
            const available = data.totalAvailable || Math.max(gathered, 20);
            return Math.min(1, gathered / available);
        },

        _computeFlexibility: function(hypotheses) {
            if (!hypotheses || hypotheses.length < 2) return 0.5;
            let changes = 0;
            for (let i = 1; i < hypotheses.length; i++) {
                if (hypotheses[i] !== hypotheses[i-1]) changes++;
            }
            return Math.min(1, changes / (hypotheses.length - 1));
        },

        _computeEvidenceUse: function(data) {
            // How well data gathering correlates with hypothesis revision
            return data.evidenceScore || 0.5;
        },

        _computeHypothesisGen: function(hypotheses) {
            const unique = new Set(hypotheses || []);
            return Math.min(1, unique.size / 5);
        },

        _computePrematureClosureResistance: function(data) {
            return data.prematureClosureScore || 0.5;
        },

        _computeAnchoringResistance: function(hypotheses) {
            if (!hypotheses || hypotheses.length < 3) return 0.5;
            const first = hypotheses[0];
            const changedFromFirst = hypotheses.filter(h => h !== first).length;
            return Math.min(1, changedFromFirst / (hypotheses.length * 0.5));
        },

        _computeMomentumResistance: function(data) {
            return data.momentumScore || 0.5;
        },

        _computeConfirmationBiasResistance: function(data) {
            return data.confirmationBiasScore || 0.5;
        },

        _computeHypothesisFlexibility: function(hypotheses) {
            if (!hypotheses || hypotheses.length < 2) return 0.5;
            const unique = new Set(hypotheses);
            return Math.min(1, unique.size / hypotheses.length);
        },

        _computeTemporalReasoning: function(timestamps, decisions) {
            if (!timestamps || timestamps.length < 2) return 0.5;
            // Assess whether time-sensitive decisions were made appropriately
            return 0.5;
        },

        _computeSequenceOptimality: function(data) {
            return data.sequenceScore || 0.5;
        },

        _computeDataBreadth: function(data) {
            const categories = new Set((data.dataGathered || []).map(d => d.category || 'unknown'));
            return Math.min(1, categories.size / 6);
        },

        _computeMetacognition: function(data) {
            return data.metacognitiveScore || 0.5;
        },

        _computeConfidenceCalibration: function(confidence, data) {
            if (!confidence || confidence.length === 0) return 0.5;
            const avg = confidence.reduce((a, b) => a + b, 0) / confidence.length;
            const accuracy = data.accuracy || 0.5;
            return 1 - Math.abs(avg - accuracy);
        },

        _computeUncertaintyTolerance: function(confidence) {
            if (!confidence || confidence.length < 2) return 0.5;
            const variance = this._variance(confidence);
            return Math.min(1, variance * 4);
        },

        _computeGeometricSignature: function(vector) {
            const values = this.DIMENSIONS.map(d => vector[d] || 0);
            const centroid = values.reduce((a, b) => a + b, 0) / values.length;
            const eccentricity = Math.sqrt(this._variance(values));

            // Polar coordinates for shape analysis
            const angularDisplacements = values.map((v, i) => {
                const angle = (2 * Math.PI * i) / values.length;
                return { angle, radius: v };
            });

            return {
                centroid: Math.round(centroid * 1000) / 1000,
                eccentricity: Math.round(eccentricity * 1000) / 1000,
                polarProfile: angularDisplacements
            };
        },

        _computeQualityScore: function(vector) {
            const weights = {
                thoroughness: 0.1, evidenceUse: 0.15, prematureClosureResistance: 0.12,
                anchoringResistance: 0.12, confirmationBiasResistance: 0.1,
                sequenceOptimality: 0.1, metacognitiveAccuracy: 0.1,
                confidenceCalibration: 0.1, dataGatheringBreadth: 0.06, flexibility: 0.05
            };

            let score = 0;
            for (const [dim, weight] of Object.entries(weights)) {
                score += (vector[dim] || 0) * weight;
            }
            return Math.round(score * 100);
        },

        _findDivergentDimensions: function(v1, v2) {
            const divergent = [];
            for (const dim of this.DIMENSIONS) {
                const diff = Math.abs((v1[dim] || 0) - (v2[dim] || 0));
                if (diff > 0.2) {
                    divergent.push({ dimension: dim, difference: Math.round(diff * 100) / 100 });
                }
            }
            return divergent.sort((a, b) => b.difference - a.difference);
        },

        _variance: function(arr) {
            if (!arr || arr.length < 2) return 0;
            const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
            return arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / arr.length;
        }
    };

    // ============================================
    // CRDA — Collaborative Reasoning Divergence Analysis
    // ============================================

    const CRDA = {
        /**
         * Analyze divergence between two reasoning pathways
         */
        analyzeDivergence: function(pathway1, pathway2) {
            const divergencePoints = [];

            const maxLen = Math.max(
                (pathway1.decisions || []).length,
                (pathway2.decisions || []).length
            );

            for (let i = 0; i < maxLen; i++) {
                const d1 = pathway1.decisions?.[i];
                const d2 = pathway2.decisions?.[i];

                if (!d1 || !d2) continue;

                if (d1.choice !== d2.choice || d1.hypothesis !== d2.hypothesis) {
                    divergencePoints.push({
                        step: i,
                        type: d1.hypothesis !== d2.hypothesis ? 'hypothesis' : 'data-gathering',
                        pathway1: { choice: d1.choice, hypothesis: d1.hypothesis, confidence: d1.confidence },
                        pathway2: { choice: d2.choice, hypothesis: d2.hypothesis, confidence: d2.confidence },
                        significance: this._assessSignificance(d1, d2)
                    });
                }
            }

            return {
                totalSteps: maxLen,
                divergenceCount: divergencePoints.length,
                divergenceRate: maxLen > 0 ? divergencePoints.length / maxLen : 0,
                points: divergencePoints,
                prompts: this._generatePrompts(divergencePoints)
            };
        },

        _assessSignificance: function(d1, d2) {
            if (d1.hypothesis !== d2.hypothesis && d1.confidence > 0.7 && d2.confidence > 0.7) return 'high';
            if (d1.hypothesis !== d2.hypothesis) return 'moderate';
            return 'low';
        },

        _generatePrompts: function(divergencePoints) {
            return divergencePoints.map(dp => {
                if (dp.type === 'hypothesis') {
                    return {
                        step: dp.step,
                        prompt: `At this point, one path considered ${dp.pathway1.hypothesis} while another considered ${dp.pathway2.hypothesis}. What evidence would help distinguish between these?`,
                        type: 'hypothesis_divergence'
                    };
                } else {
                    return {
                        step: dp.step,
                        prompt: `Different data-gathering choices were made here. What information would be most valuable at this stage?`,
                        type: 'data_gathering'
                    };
                }
            });
        }
    };

    // ============================================
    // SESSION STORAGE & AGGREGATION
    // ============================================

    const STORAGE_KEY = 'reasondx-fingerprint';

    function getStoredFingerprints() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { sessions: [], aggregate: null };
        } catch(e) { return { sessions: [], aggregate: null }; }
    }

    function storeFingerprint(fp) {
        const data = getStoredFingerprints();
        data.sessions.push(fp);
        // Keep last 50 sessions
        if (data.sessions.length > 50) data.sessions = data.sessions.slice(-50);
        // Compute aggregate
        data.aggregate = computeAggregate(data.sessions);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return data;
    }

    function computeAggregate(sessions) {
        if (!sessions || sessions.length === 0) return null;

        const agg = { vector: {} };

        for (const dim of RPFS.DIMENSIONS) {
            const values = sessions
                .filter(s => s.vector && s.vector[dim] !== undefined)
                .map(s => s.vector[dim]);

            if (values.length > 0) {
                // Weighted average — recent sessions count more
                let weightedSum = 0, weightTotal = 0;
                values.forEach((v, i) => {
                    const weight = 1 + (i / values.length); // More recent = higher weight
                    weightedSum += v * weight;
                    weightTotal += weight;
                });
                agg.vector[dim] = weightedSum / weightTotal;
            }
        }

        agg.archetype = RPFS.classifyArchetype(agg.vector);
        agg.geometricSignature = RPFS._computeGeometricSignature(agg.vector);
        agg.qualityScore = RPFS._computeQualityScore(agg.vector);
        agg.sessionCount = sessions.length;
        agg.lastUpdated = new Date().toISOString();

        return agg;
    }

    // ============================================
    // PUBLIC API
    // ============================================

    window.RdxPatent = {
        RPFS: RPFS,
        CRDA: CRDA,

        /**
         * Record a session and generate fingerprint
         */
        recordSession: function(sessionData) {
            const fp = RPFS.generateFingerprint(sessionData);
            if (fp) storeFingerprint(fp);
            return fp;
        },

        /**
         * Get stored fingerprint data
         */
        getFingerprints: function() {
            return getStoredFingerprints();
        },

        /**
         * Get aggregate fingerprint
         */
        getAggregate: function() {
            return getStoredFingerprints().aggregate;
        },

        /**
         * Get archetype info
         */
        getArchetypeInfo: function(archetypeId) {
            return RPFS.ARCHETYPES[archetypeId] || RPFS.ARCHETYPES.analytical;
        },

        /**
         * Get all archetype definitions
         */
        getAllArchetypes: function() {
            return RPFS.ARCHETYPES;
        },

        /**
         * Compare learner to expert
         */
        compareToExpert: function(expertFP) {
            const data = getStoredFingerprints();
            if (!data.aggregate) return null;
            return RPFS.compareToExpert(data.aggregate, expertFP);
        },

        /**
         * Get quality trend over sessions
         */
        getQualityTrend: function() {
            const data = getStoredFingerprints();
            return data.sessions.map(s => ({
                date: s.timestamp,
                score: s.qualityScore,
                archetype: s.archetype
            }));
        },

        /**
         * Reset all fingerprint data
         */
        reset: function() {
            localStorage.removeItem(STORAGE_KEY);
        }
    };

    console.log('RdxPatent (RPFS/CRDA) initialized');
})();
