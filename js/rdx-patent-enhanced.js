/**
 * RPFS Enhanced — Reasoning Pathway Fingerprinting System
 * =========================================================
 * PATENT-STRENGTHENING ENHANCEMENTS
 * 
 * This module extends the base RPFS with technically specific algorithms
 * designed to survive Alice Corp scrutiny. Each enhancement addresses a
 * specific vulnerability in the abstract-idea analysis.
 * 
 * Key additions:
 *   1. Geometric fingerprint signatures (shape-based, not value-based)
 *   2. Temporal sequence encoding with n-gram analysis
 *   3. Weighted cosine distance metric for expert comparison
 *   4. Novel "Reasoning Topology Map" data structure
 *   5. Intervention classification taxonomy with selection algorithm
 * 
 * Depends on: rdx-patent-innovations.js (base RPFS, CRDA, LRDT)
 */

(function(window) {
    'use strict';

    // ================================================================
    //  1. GEOMETRIC FINGERPRINT SIGNATURE
    //     Instead of treating dimensions independently, encode the
    //     SHAPE of the reasoning profile as a single mathematical
    //     object. Two learners with the same average but different
    //     shapes produce different signatures.
    //
    //     Patent framing: "A method for generating a geometric
    //     signature from a multi-dimensional reasoning profile,
    //     wherein the signature encodes inter-dimensional
    //     relationships as angular displacement vectors."
    // ================================================================

    const GeometricSignature = {
        /**
         * Generate a shape-based fingerprint from dimension values.
         * Returns a signature object containing:
         *   - polarCoordinates: each dimension as angle + magnitude
         *   - angularDisplacements: pairwise angle differences (the "shape")
         *   - centroid: the profile's center of mass
         *   - eccentricity: how asymmetric the profile is (0 = uniform, 1 = extreme)
         *   - dominantAxis: which dimension pair dominates
         *   - shapeHash: a compact string encoding the shape class
         * 
         * @param {Object} fingerprint - From RPFS.generateFingerprint()
         * @returns {Object} geometric signature
         */
        fromFingerprint(fingerprint) {
            if (!fingerprint) return null;

            const dims = [
                { name: 'thoroughness',   value: fingerprint.thoroughness || 0 },
                { name: 'flexibility',    value: fingerprint.flexibility || 0 },
                { name: 'evidenceUse',    value: fingerprint.evidenceUse || 0 },
                { name: 'adaptability',   value: fingerprint.adaptability || 0 },
                { name: 'momentum',       value: fingerprint.momentum || 0 },
                { name: 'metacognition',  value: fingerprint.metacognition || 0 },
                { name: 'overallQuality', value: fingerprint.overallQuality || 0 }
            ];
            const n = dims.length;

            // Polar coordinates: evenly spaced angles, magnitude = normalized value
            const angleStep = (2 * Math.PI) / n;
            const polarCoordinates = dims.map((d, i) => ({
                dimension: d.name,
                angle: i * angleStep,
                magnitude: d.value / 100,  // normalize to 0-1
                x: (d.value / 100) * Math.cos(i * angleStep),
                y: (d.value / 100) * Math.sin(i * angleStep)
            }));

            // Angular displacements between adjacent dimensions
            // This IS the shape — it's what differentiates profiles
            const angularDisplacements = [];
            for (let i = 0; i < n; i++) {
                const curr = polarCoordinates[i];
                const next = polarCoordinates[(i + 1) % n];
                const magnitudeDelta = next.magnitude - curr.magnitude;
                const angleDelta = next.angle - curr.angle;
                angularDisplacements.push({
                    from: curr.dimension,
                    to: next.dimension,
                    magnitudeDelta: +magnitudeDelta.toFixed(4),
                    slope: angleDelta !== 0 ? +(magnitudeDelta / angleDelta).toFixed(4) : 0,
                    direction: magnitudeDelta > 0.05 ? 'ascending' : 
                               magnitudeDelta < -0.05 ? 'descending' : 'plateau'
                });
            }

            // Centroid (center of mass of the profile shape)
            const centroid = {
                x: +(polarCoordinates.reduce((s, p) => s + p.x, 0) / n).toFixed(4),
                y: +(polarCoordinates.reduce((s, p) => s + p.y, 0) / n).toFixed(4)
            };
            centroid.distFromOrigin = +Math.sqrt(centroid.x ** 2 + centroid.y ** 2).toFixed(4);
            centroid.angle = +Math.atan2(centroid.y, centroid.x).toFixed(4);

            // Eccentricity: how non-uniform the profile is
            const magnitudes = polarCoordinates.map(p => p.magnitude);
            const meanMag = magnitudes.reduce((a, b) => a + b, 0) / n;
            const variance = magnitudes.reduce((s, m) => s + (m - meanMag) ** 2, 0) / n;
            const eccentricity = meanMag > 0 ? +(Math.sqrt(variance) / meanMag).toFixed(4) : 0;

            // Dominant axis: which pair of opposing dimensions shows greatest difference
            const axisPairs = [];
            for (let i = 0; i < Math.floor(n / 2); i++) {
                const opp = (i + Math.floor(n / 2)) % n;
                axisPairs.push({
                    dimA: dims[i].name,
                    dimB: dims[opp].name,
                    imbalance: Math.abs(dims[i].value - dims[opp].value)
                });
            }
            axisPairs.sort((a, b) => b.imbalance - a.imbalance);
            const dominantAxis = axisPairs[0] || null;

            // Shape classification hash
            // Encode the profile shape as a sequence of transitions: ↑ ↓ →
            const shapeCode = angularDisplacements.map(ad => 
                ad.direction === 'ascending' ? 'A' : 
                ad.direction === 'descending' ? 'D' : 'P'
            ).join('');

            // Shape class taxonomy
            const shapeClass = this._classifyShape(shapeCode, eccentricity, magnitudes);

            return {
                polarCoordinates,
                angularDisplacements,
                centroid,
                eccentricity,
                dominantAxis,
                shapeCode,
                shapeClass,
                _generatedAt: Date.now(),
                _sessionCount: fingerprint._sessionCount
            };
        },

        /**
         * Classify the reasoning profile into a named phenotype.
         * Each phenotype represents a distinct reasoning approach.
         * 
         * Patent framing: "A classification system that assigns
         * reasoning phenotype labels based on the geometric properties
         * of the multi-dimensional reasoning signature."
         */
        _classifyShape(shapeCode, eccentricity, magnitudes) {
            const mean = magnitudes.reduce((a, b) => a + b, 0) / magnitudes.length;
            const max = Math.max(...magnitudes);
            const min = Math.min(...magnitudes);
            const range = max - min;

            // Phenotype classification rules
            if (eccentricity < 0.15 && mean > 0.7) return { 
                name: 'Expert-Balanced', code: 'EB',
                description: 'High and uniform across all dimensions — characteristic of expert reasoning' 
            };
            if (eccentricity < 0.15 && mean <= 0.7) return { 
                name: 'Novice-Uniform', code: 'NU',
                description: 'Uniformly developing — consistent but with room to grow across all areas' 
            };
            if (eccentricity > 0.4 && magnitudes[0] > 0.7) return { 
                name: 'Thoroughness-Dominant', code: 'TD',
                description: 'Strong data gathering but may lack flexibility or metacognition' 
            };
            if (eccentricity > 0.4 && magnitudes[1] > 0.7) return { 
                name: 'Flexibility-Dominant', code: 'FD',
                description: 'Excellent hypothesis revision but may lack systematic data gathering' 
            };
            if (range > 0.5) return { 
                name: 'Spiky-Developing', code: 'SD',
                description: 'Pronounced strengths and weaknesses — targeted coaching recommended' 
            };
            if (mean < 0.3) return { 
                name: 'Early-Learner', code: 'EL',
                description: 'Beginning stage — building foundational reasoning skills' 
            };
            return { 
                name: 'Mixed-Profile', code: 'MP',
                description: 'Moderate variation — progressing with area-specific development opportunities' 
            };
        },

        /**
         * Compute the geometric distance between two signatures.
         * This is NOT simple Euclidean distance — it accounts for
         * the shape of the profile, not just the values.
         * 
         * Patent framing: "A method for computing similarity between
         * two reasoning pathway fingerprints using a composite distance
         * metric that weights angular displacement similarity, centroid
         * proximity, and eccentricity agreement."
         */
        distance(sigA, sigB) {
            if (!sigA || !sigB) return null;

            // Component 1: Centroid distance (how similar the overall profiles are)
            const centroidDist = Math.sqrt(
                (sigA.centroid.x - sigB.centroid.x) ** 2 +
                (sigA.centroid.y - sigB.centroid.y) ** 2
            );

            // Component 2: Shape similarity (angular displacement correlation)
            const slopesA = sigA.angularDisplacements.map(ad => ad.slope);
            const slopesB = sigB.angularDisplacements.map(ad => ad.slope);
            const shapeSimilarity = this._pearsonCorrelation(slopesA, slopesB);

            // Component 3: Eccentricity agreement (are the profiles similarly uniform/spiky?)
            const eccentricityDelta = Math.abs(sigA.eccentricity - sigB.eccentricity);

            // Composite metric with empirical weights
            // Higher weight on shape similarity — this is the key innovation
            const compositeDistance = +(
                0.25 * centroidDist +
                0.50 * (1 - shapeSimilarity) +
                0.25 * eccentricityDelta
            ).toFixed(4);

            return {
                compositeDistance,
                components: {
                    centroidDistance: +centroidDist.toFixed(4),
                    shapeSimilarity: +shapeSimilarity.toFixed(4),
                    eccentricityDelta: +eccentricityDelta.toFixed(4)
                },
                interpretation: compositeDistance < 0.15 ? 'highly_similar' :
                               compositeDistance < 0.35 ? 'moderately_similar' :
                               compositeDistance < 0.55 ? 'moderately_different' : 'highly_different'
            };
        },

        _pearsonCorrelation(x, y) {
            const n = Math.min(x.length, y.length);
            if (n === 0) return 0;
            const meanX = x.reduce((a, b) => a + b, 0) / n;
            const meanY = y.reduce((a, b) => a + b, 0) / n;
            let num = 0, denX = 0, denY = 0;
            for (let i = 0; i < n; i++) {
                const dx = x[i] - meanX;
                const dy = y[i] - meanY;
                num += dx * dy;
                denX += dx * dx;
                denY += dy * dy;
            }
            const den = Math.sqrt(denX * denY);
            return den > 0 ? +(num / den).toFixed(4) : 0;
        }
    };


    // ================================================================
    //  2. TEMPORAL SEQUENCE ENCODING
    //     The ORDER of reasoning actions is the core innovation.
    //     This encoder converts a raw action sequence into an
    //     analyzable vector using n-gram extraction.
    //
    //     Patent framing: "A method for encoding a temporal sequence
    //     of clinical reasoning actions into a fixed-dimensional
    //     vector representation using action-type n-gram frequency
    //     analysis with positional weighting."
    // ================================================================

    const TemporalEncoder = {
        // Action Type Taxonomy (100-level codes)
        // Each code represents a category of clinical reasoning action
        ACTION_CODES: {
            // 100-199: Information Gathering
            HISTORY_REVIEW:     100,
            PHYSICAL_EXAM:      110,
            VITAL_SIGNS:        120,
            LAB_ORDER:          130,
            IMAGING_ORDER:      140,
            SPECIALTY_CONSULT:  150,
            CHART_REVIEW:       160,
            COLLATERAL_INFO:    170,

            // 200-299: Diagnostic Reasoning
            HYPOTHESIS_ADD:     200,
            HYPOTHESIS_REMOVE:  210,
            HYPOTHESIS_RERANK:  220,
            HYPOTHESIS_CONFIRM: 230,
            HYPOTHESIS_REJECT:  240,
            DIFFERENTIAL_REFINE:250,

            // 300-399: Decision Making
            TREATMENT_SELECT:   300,
            TREATMENT_MODIFY:   310,
            DISPOSITION_DECIDE: 320,
            RISK_ASSESS:        330,
            INFORMED_CONSENT:   340,

            // 400-499: Metacognition
            CONFIDENCE_REPORT:  400,
            UNCERTAINTY_ACKNOWLEDGE: 410,
            BIAS_RECOGNIZE:     420,
            REFLECTION_PAUSE:   430,
            HELP_SEEK:          440
        },

        /**
         * Encode a raw action sequence into a fixed-dimensional vector.
         * 
         * Steps:
         * 1. Map raw actions to taxonomy codes
         * 2. Extract bigrams and trigrams from the code sequence
         * 3. Weight by position (early actions weighted more heavily)
         * 4. Normalize to unit vector
         * 
         * @param {Array} actions - Raw action objects from session capture
         * @returns {Object} Encoded sequence representation
         */
        encode(actions) {
            if (!actions || actions.length === 0) return null;

            // Step 1: Map to codes
            const codeSequence = actions.map(a => this._mapToCode(a));

            // Step 2: Extract n-grams with positional weighting
            const bigrams = this._extractNgrams(codeSequence, 2);
            const trigrams = this._extractNgrams(codeSequence, 3);

            // Step 3: Build frequency vectors with position weights
            const bigramVector = this._buildWeightedVector(bigrams, actions.length);
            const trigramVector = this._buildWeightedVector(trigrams, actions.length);

            // Step 4: Compute sequence-level features
            const sequenceFeatures = this._computeSequenceFeatures(codeSequence, actions);

            // Step 5: Compute phase transition points
            // Where in the sequence does the learner shift from
            // information-gathering to diagnostic reasoning to decision-making?
            const phaseTransitions = this._detectPhaseTransitions(codeSequence);

            return {
                codeSequence,
                bigramVector,
                trigramVector,
                sequenceFeatures,
                phaseTransitions,
                sequenceLength: actions.length,
                _encodedAt: Date.now()
            };
        },

        _mapToCode(action) {
            const type = (action.action_type || action.type || '').toLowerCase();
            // Map common action types to taxonomy codes
            if (type.includes('history') || type.includes('hpi') || type.includes('pmh'))
                return this.ACTION_CODES.HISTORY_REVIEW;
            if (type.includes('exam') || type.includes('physical') || type.includes('auscult'))
                return this.ACTION_CODES.PHYSICAL_EXAM;
            if (type.includes('vital') || type.includes('bp') || type.includes('temp'))
                return this.ACTION_CODES.VITAL_SIGNS;
            if (type.includes('lab') || type.includes('cbc') || type.includes('cmp') || type.includes('blood'))
                return this.ACTION_CODES.LAB_ORDER;
            if (type.includes('imag') || type.includes('xray') || type.includes('ct') || type.includes('mri'))
                return this.ACTION_CODES.IMAGING_ORDER;
            if (type.includes('consult'))
                return this.ACTION_CODES.SPECIALTY_CONSULT;
            if (type.includes('hypothes') || type.includes('differential') || type.includes('consider'))
                return this.ACTION_CODES.HYPOTHESIS_ADD;
            if (type.includes('rank') || type.includes('reorder') || type.includes('priorit'))
                return this.ACTION_CODES.HYPOTHESIS_RERANK;
            if (type.includes('narrow') || type.includes('rule out') || type.includes('eliminate'))
                return this.ACTION_CODES.HYPOTHESIS_REMOVE;
            if (type.includes('treat') || type.includes('medic') || type.includes('prescri'))
                return this.ACTION_CODES.TREATMENT_SELECT;
            if (type.includes('confiden'))
                return this.ACTION_CODES.CONFIDENCE_REPORT;
            if (type.includes('uncertain') || type.includes('unsure'))
                return this.ACTION_CODES.UNCERTAINTY_ACKNOWLEDGE;
            if (type.includes('reflect') || type.includes('pause') || type.includes('reconsider'))
                return this.ACTION_CODES.REFLECTION_PAUSE;
            // Default: information gathering
            return this.ACTION_CODES.HISTORY_REVIEW;
        },

        _extractNgrams(codes, n) {
            const ngrams = [];
            for (let i = 0; i <= codes.length - n; i++) {
                const gram = codes.slice(i, i + n).join('-');
                const positionWeight = 1 - (i / codes.length) * 0.4; // Early = higher weight
                ngrams.push({ gram, position: i, weight: +positionWeight.toFixed(3) });
            }
            return ngrams;
        },

        _buildWeightedVector(ngrams, seqLength) {
            const freqMap = {};
            ngrams.forEach(ng => {
                if (!freqMap[ng.gram]) freqMap[ng.gram] = { count: 0, totalWeight: 0 };
                freqMap[ng.gram].count++;
                freqMap[ng.gram].totalWeight += ng.weight;
            });
            // Normalize
            const totalWeight = Object.values(freqMap).reduce((s, v) => s + v.totalWeight, 0);
            const vector = {};
            for (const gram in freqMap) {
                vector[gram] = +(freqMap[gram].totalWeight / (totalWeight || 1)).toFixed(4);
            }
            return vector;
        },

        _computeSequenceFeatures(codes, actions) {
            const n = codes.length;
            // Category distribution
            const infoGathering = codes.filter(c => c >= 100 && c < 200).length;
            const diagnostic = codes.filter(c => c >= 200 && c < 300).length;
            const decision = codes.filter(c => c >= 300 && c < 400).length;
            const metacog = codes.filter(c => c >= 400 && c < 500).length;

            // Timing features (inter-action intervals)
            const intervals = [];
            for (let i = 1; i < actions.length; i++) {
                const t1 = actions[i].timestamp || actions[i].time || 0;
                const t0 = actions[i - 1].timestamp || actions[i - 1].time || 0;
                if (t1 > t0) intervals.push(t1 - t0);
            }
            const avgInterval = intervals.length > 0 
                ? intervals.reduce((a, b) => a + b, 0) / intervals.length : 0;
            const intervalVariance = intervals.length > 0
                ? intervals.reduce((s, i) => s + (i - avgInterval) ** 2, 0) / intervals.length : 0;

            // Entropy of action type distribution (higher = more varied approach)
            const typeCounts = {};
            codes.forEach(c => { typeCounts[c] = (typeCounts[c] || 0) + 1; });
            let entropy = 0;
            for (const c in typeCounts) {
                const p = typeCounts[c] / n;
                if (p > 0) entropy -= p * Math.log2(p);
            }

            return {
                categoryDistribution: {
                    informationGathering: +(infoGathering / n).toFixed(3),
                    diagnosticReasoning: +(diagnostic / n).toFixed(3),
                    decisionMaking: +(decision / n).toFixed(3),
                    metacognition: +(metacog / n).toFixed(3)
                },
                timing: {
                    avgIntervalMs: Math.round(avgInterval),
                    intervalVariance: Math.round(intervalVariance),
                    rhythmScore: intervalVariance > 0 ? +(avgInterval / Math.sqrt(intervalVariance)).toFixed(2) : 0
                },
                diversity: {
                    entropy: +entropy.toFixed(3),
                    uniqueActionTypes: Object.keys(typeCounts).length,
                    dominantType: Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0]?.[0]
                }
            };
        },

        /**
         * Detect where in the action sequence the learner transitions
         * between reasoning phases. This is a key technical feature:
         * the TIMING of phase transitions carries diagnostic information.
         * 
         * Patent framing: "A method for detecting phase transition
         * boundaries within a temporal reasoning action sequence,
         * wherein the transition points are identified by detecting
         * shifts in the running distribution of action-type categories."
         */
        _detectPhaseTransitions(codes) {
            const windowSize = Math.max(3, Math.floor(codes.length / 5));
            const transitions = [];

            for (let i = windowSize; i < codes.length - windowSize; i++) {
                const beforeWindow = codes.slice(i - windowSize, i);
                const afterWindow = codes.slice(i, i + windowSize);

                const beforeDist = this._windowDistribution(beforeWindow);
                const afterDist = this._windowDistribution(afterWindow);

                // Compute Jensen-Shannon divergence between before/after
                const jsd = this._jensenShannonDivergence(beforeDist, afterDist);

                if (jsd > 0.3) {  // Significant distribution shift
                    transitions.push({
                        position: i,
                        normalizedPosition: +(i / codes.length).toFixed(3),
                        divergence: +jsd.toFixed(4),
                        beforeDominant: this._dominantCategory(beforeDist),
                        afterDominant: this._dominantCategory(afterDist),
                        transitionType: `${this._dominantCategory(beforeDist)}_to_${this._dominantCategory(afterDist)}`
                    });
                }
            }
            return transitions;
        },

        _windowDistribution(codes) {
            const dist = { info: 0, diag: 0, decision: 0, meta: 0 };
            codes.forEach(c => {
                if (c >= 100 && c < 200) dist.info++;
                else if (c >= 200 && c < 300) dist.diag++;
                else if (c >= 300 && c < 400) dist.decision++;
                else if (c >= 400) dist.meta++;
            });
            const total = codes.length || 1;
            for (const k in dist) dist[k] = dist[k] / total;
            return dist;
        },

        _dominantCategory(dist) {
            return Object.entries(dist).sort((a, b) => b[1] - a[1])[0]?.[0] || 'unknown';
        },

        _jensenShannonDivergence(p, q) {
            const keys = new Set([...Object.keys(p), ...Object.keys(q)]);
            const m = {};
            keys.forEach(k => { m[k] = ((p[k] || 0) + (q[k] || 0)) / 2; });
            const klPM = this._klDivergence(p, m);
            const klQM = this._klDivergence(q, m);
            return (klPM + klQM) / 2;
        },

        _klDivergence(p, q) {
            let kl = 0;
            for (const k in p) {
                if (p[k] > 0 && q[k] > 0) {
                    kl += p[k] * Math.log2(p[k] / q[k]);
                }
            }
            return kl;
        },

        /**
         * Compare two encoded sequences using weighted cosine similarity.
         * The weight on each n-gram reflects its discriminative power
         * (rare n-grams that appear in one sequence but not the other
         * are weighted more heavily).
         * 
         * Patent framing: "A method for computing similarity between
         * two temporal reasoning sequences using inverse-frequency-weighted
         * cosine similarity of positionally-weighted n-gram vectors."
         */
        sequenceSimilarity(encodingA, encodingB) {
            if (!encodingA || !encodingB) return null;

            // Combine bigram and trigram vectors
            const vecA = { ...encodingA.bigramVector, ...encodingA.trigramVector };
            const vecB = { ...encodingB.bigramVector, ...encodingB.trigramVector };

            // Build unified key set
            const allKeys = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);

            // Inverse document frequency weighting
            // N-grams that appear in both are less discriminative
            const idf = {};
            allKeys.forEach(k => {
                const inA = (vecA[k] || 0) > 0 ? 1 : 0;
                const inB = (vecB[k] || 0) > 0 ? 1 : 0;
                idf[k] = Math.log2(2 / (inA + inB + 0.5)); // Smoothed IDF
            });

            // Weighted cosine similarity
            let dotProduct = 0, normA = 0, normB = 0;
            allKeys.forEach(k => {
                const a = (vecA[k] || 0) * (idf[k] || 1);
                const b = (vecB[k] || 0) * (idf[k] || 1);
                dotProduct += a * b;
                normA += a * a;
                normB += b * b;
            });
            const denom = Math.sqrt(normA) * Math.sqrt(normB);
            const cosineSim = denom > 0 ? dotProduct / denom : 0;

            // Phase transition similarity
            const transA = encodingA.phaseTransitions || [];
            const transB = encodingB.phaseTransitions || [];
            const transPositionsA = transA.map(t => t.normalizedPosition);
            const transPositionsB = transB.map(t => t.normalizedPosition);
            let phaseSimilarity = 0;
            if (transPositionsA.length > 0 && transPositionsB.length > 0) {
                // Match transitions by proximity
                let matched = 0;
                transPositionsA.forEach(pa => {
                    const closest = transPositionsB.reduce((best, pb) => 
                        Math.abs(pb - pa) < Math.abs(best - pa) ? pb : best, transPositionsB[0]);
                    if (Math.abs(closest - pa) < 0.15) matched++;
                });
                phaseSimilarity = matched / Math.max(transPositionsA.length, transPositionsB.length);
            }

            return {
                ngramSimilarity: +cosineSim.toFixed(4),
                phaseTransitionSimilarity: +phaseSimilarity.toFixed(4),
                compositeSimilarity: +(0.6 * cosineSim + 0.4 * phaseSimilarity).toFixed(4),
                discriminativeNgrams: this._getDiscriminativeNgrams(vecA, vecB, idf)
            };
        },

        _getDiscriminativeNgrams(vecA, vecB, idf) {
            const discriminative = [];
            const allKeys = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);
            allKeys.forEach(k => {
                const diff = Math.abs((vecA[k] || 0) - (vecB[k] || 0)) * (idf[k] || 1);
                if (diff > 0.1) {
                    discriminative.push({
                        ngram: k,
                        weightedDifference: +diff.toFixed(4),
                        strongerIn: (vecA[k] || 0) > (vecB[k] || 0) ? 'A' : 'B'
                    });
                }
            });
            return discriminative.sort((a, b) => b.weightedDifference - a.weightedDifference).slice(0, 10);
        }
    };


    // ================================================================
    //  3. REASONING TOPOLOGY MAP
    //     A novel data structure that represents the complete reasoning
    //     journey as a directed graph. This is the "concrete technical
    //     artifact" that patent examiners can point to.
    //
    //     Patent framing: "A system for generating a directed acyclic
    //     graph representation of a clinical reasoning process, wherein
    //     nodes represent cognitive states and edges represent
    //     state-transitions triggered by data acquisition events."
    // ================================================================

    const TopologyMap = {
        /**
         * Generate a topology map from an RPFS session report.
         * The map is a directed graph where:
         *   - Nodes represent cognitive states (hypothesis + confidence + data)
         *   - Edges represent transitions (what action caused the state change)
         *   - Edge weights encode transition significance
         *   - Node metadata includes timing and metacognitive indicators
         * 
         * @param {Object} rpfsReport - Complete session report
         * @returns {Object} Topology map (DAG)
         */
        generate(rpfsReport) {
            if (!rpfsReport) return null;

            const nodes = [];
            const edges = [];
            const snapshots = rpfsReport.hypothesisEvolution?.snapshots || [];
            const actions = rpfsReport.dataGathering?.sequence || [];
            const confTrajectory = rpfsReport.confidence?.trajectory || [];

            // Create initial node
            nodes.push({
                id: 'n0',
                type: 'initial_state',
                timestamp: rpfsReport.session?.startTime || 0,
                hypotheses: [],
                confidence: confTrajectory[0]?.confidence || 50,
                dataAvailable: [],
                metacogActive: false
            });

            // Build nodes from hypothesis snapshots
            snapshots.forEach((snap, i) => {
                const nodeId = `n${i + 1}`;
                const confidence = this._findClosestConfidence(
                    confTrajectory, snap.timestamp || snap.time || 0
                );

                nodes.push({
                    id: nodeId,
                    type: snap.stage ? `stage_${snap.stage}` : 'hypothesis_update',
                    timestamp: snap.timestamp || snap.time || 0,
                    hypotheses: (snap.differential || []).map(d => ({
                        name: d.name || d.diagnosis,
                        rank: d.rank,
                        confidence: d.confidence
                    })),
                    confidence: confidence,
                    dataAvailable: this._getDataAtTime(actions, snap.timestamp || snap.time || 0),
                    metacogActive: this._wasMetacogActiveAt(rpfsReport, snap.timestamp || snap.time || 0),
                    pivotPoint: this._isPivotPoint(snapshots, i)
                });

                // Create edge from previous node
                const triggerAction = this._findTriggerAction(actions, snap);
                edges.push({
                    from: i === 0 ? 'n0' : `n${i}`,
                    to: nodeId,
                    trigger: triggerAction ? {
                        type: triggerAction.item || triggerAction.action_type || 'unknown',
                        category: triggerAction.category || 'unknown'
                    } : { type: 'implicit', category: 'reasoning' },
                    weight: this._computeEdgeWeight(nodes[nodes.length - 2], nodes[nodes.length - 1]),
                    hypothesisChange: this._detectHypothesisChange(
                        nodes.length >= 2 ? nodes[nodes.length - 2].hypotheses : [],
                        nodes[nodes.length - 1].hypotheses
                    )
                });
            });

            // Compute graph-level metrics
            const graphMetrics = {
                totalNodes: nodes.length,
                totalEdges: edges.length,
                pivotPointCount: nodes.filter(n => n.pivotPoint).length,
                metacogNodeRatio: nodes.filter(n => n.metacogActive).length / (nodes.length || 1),
                avgEdgeWeight: edges.length > 0 
                    ? +(edges.reduce((s, e) => s + e.weight, 0) / edges.length).toFixed(3) : 0,
                longestPathLength: nodes.length, // DAG, so it's linear in basic form
                hypothesisStability: this._computeHypothesisStability(nodes),
                convergenceIndex: this._computeConvergenceIndex(nodes)
            };

            return {
                nodes,
                edges,
                graphMetrics,
                caseId: rpfsReport.session?.caseId,
                _generatedAt: Date.now()
            };
        },

        _findClosestConfidence(trajectory, timestamp) {
            if (!trajectory || trajectory.length === 0) return 50;
            let closest = trajectory[0];
            trajectory.forEach(t => {
                if (Math.abs((t.timestamp || t.time || 0) - timestamp) < 
                    Math.abs((closest.timestamp || closest.time || 0) - timestamp)) {
                    closest = t;
                }
            });
            return closest.confidence || 50;
        },

        _getDataAtTime(actions, timestamp) {
            return (actions || [])
                .filter(a => (a.timestamp || a.time || 0) <= timestamp)
                .map(a => a.item || a.action_type || 'unknown');
        },

        _wasMetacogActiveAt(report, timestamp) {
            const events = report.metacognition?.events || [];
            return events.some(e => Math.abs((e.timestamp || e.time || 0) - timestamp) < 5000);
        },

        _isPivotPoint(snapshots, index) {
            if (index === 0 || index >= snapshots.length) return false;
            const prev = snapshots[index - 1]?.differential?.[0]?.name || '';
            const curr = snapshots[index]?.differential?.[0]?.name || '';
            return prev && curr && prev.toLowerCase() !== curr.toLowerCase();
        },

        _findTriggerAction(actions, snapshot) {
            const triggerSeq = snapshot.trigger_action || snapshot.triggerAction;
            if (triggerSeq != null) {
                return actions.find(a => a.sequence_number === triggerSeq || a.seq === triggerSeq);
            }
            return null;
        },

        _computeEdgeWeight(fromNode, toNode) {
            if (!fromNode || !toNode) return 0.5;
            let weight = 0.5;
            // Higher weight if hypothesis changed
            const prevTop = fromNode.hypotheses?.[0]?.name || '';
            const currTop = toNode.hypotheses?.[0]?.name || '';
            if (prevTop && currTop && prevTop !== currTop) weight += 0.3;
            // Higher weight if confidence changed significantly
            const confDelta = Math.abs((toNode.confidence || 50) - (fromNode.confidence || 50));
            if (confDelta > 20) weight += 0.2;
            return +Math.min(1, weight).toFixed(2);
        },

        _detectHypothesisChange(prevHypos, currHypos) {
            const prevTop = prevHypos?.[0]?.name || '';
            const currTop = currHypos?.[0]?.name || '';
            if (!prevTop && !currTop) return 'no_change';
            if (prevTop === currTop) return 'stable';
            if (!prevTop) return 'initial';
            return 'pivoted';
        },

        _computeHypothesisStability(nodes) {
            const tops = nodes.map(n => n.hypotheses?.[0]?.name || '').filter(Boolean);
            if (tops.length < 2) return 1;
            let changes = 0;
            for (let i = 1; i < tops.length; i++) {
                if (tops[i] !== tops[i - 1]) changes++;
            }
            return +((1 - changes / (tops.length - 1))).toFixed(3);
        },

        _computeConvergenceIndex(nodes) {
            // How much does the hypothesis list narrow over time?
            const sizes = nodes.map(n => n.hypotheses?.length || 0).filter(s => s > 0);
            if (sizes.length < 2) return 0;
            const first = sizes[0];
            const last = sizes[sizes.length - 1];
            return first > 0 ? +((first - last) / first).toFixed(3) : 0;
        },

        /**
         * Compare two topology maps to identify structural reasoning
         * differences. This goes beyond comparing answers — it compares
         * the STRUCTURE of how two people thought through a problem.
         * 
         * Patent framing: "A method for comparing directed acyclic graph
         * representations of clinical reasoning processes to identify
         * structural divergence in cognitive state transitions."
         */
        compareTopologies(mapA, mapB) {
            if (!mapA || !mapB) return null;
            return {
                graphSizeDifference: Math.abs(mapA.graphMetrics.totalNodes - mapB.graphMetrics.totalNodes),
                pivotPointDelta: Math.abs(mapA.graphMetrics.pivotPointCount - mapB.graphMetrics.pivotPointCount),
                stabilityDelta: Math.abs(mapA.graphMetrics.hypothesisStability - mapB.graphMetrics.hypothesisStability),
                convergenceDelta: Math.abs(mapA.graphMetrics.convergenceIndex - mapB.graphMetrics.convergenceIndex),
                metacogRatioDelta: Math.abs(mapA.graphMetrics.metacogNodeRatio - mapB.graphMetrics.metacogNodeRatio),
                structuralSimilarity: this._structuralSimilarity(mapA, mapB)
            };
        },

        _structuralSimilarity(mapA, mapB) {
            const metricsA = mapA.graphMetrics;
            const metricsB = mapB.graphMetrics;
            // Composite structural similarity from graph properties
            const diffs = [
                Math.abs(metricsA.hypothesisStability - metricsB.hypothesisStability),
                Math.abs(metricsA.convergenceIndex - metricsB.convergenceIndex),
                Math.abs(metricsA.metacogNodeRatio - metricsB.metacogNodeRatio),
                Math.abs(metricsA.avgEdgeWeight - metricsB.avgEdgeWeight)
            ];
            const avgDiff = diffs.reduce((a, b) => a + b, 0) / diffs.length;
            return +(1 - avgDiff).toFixed(3);
        }
    };


    // ================================================================
    //  4. INTERVENTION CLASSIFICATION ENGINE
    //     Automated selection of pedagogical interventions based on
    //     fingerprint analysis. This transforms CRDA divergence data
    //     into specific, classified intervention recommendations.
    //
    //     Patent framing: "An automated intervention selection system
    //     that classifies reasoning divergence patterns using a
    //     multi-dimensional taxonomy and selects targeted pedagogical
    //     responses from a structured intervention library."
    // ================================================================

    const InterventionEngine = {
        // Intervention taxonomy — each has defined triggers and responses
        TAXONOMY: {
            HYP_NARROW: {
                category: 'hypothesis_management',
                name: 'Premature Narrowing',
                trigger: (sig, enc) => sig?.eccentricity > 0.3 && 
                    (enc?.sequenceFeatures?.categoryDistribution?.diagnosticReasoning || 0) < 0.15,
                intervention: 'structured_expansion',
                prompt: 'What diagnoses have you not yet considered? What findings would you expect if your top diagnosis were wrong?',
                targetDimension: 'thoroughness'
            },
            CONF_MISCAL: {
                category: 'metacognition',
                name: 'Confidence Miscalibration',
                trigger: (sig, enc, rpfs) => {
                    const fp = rpfs?.generateFingerprint?.() || rpfs;
                    return fp && fp.metacognition < 30 && fp.overallQuality < 60;
                },
                intervention: 'calibration_exercise',
                prompt: 'Before revealing results, rate your confidence 1-10. After seeing the answer, reflect: was your confidence appropriate? What evidence supported or challenged your certainty?',
                targetDimension: 'metacognition'
            },
            DATA_SCATTER: {
                category: 'information_gathering',
                name: 'Unfocused Data Gathering',
                trigger: (sig, enc) => 
                    (enc?.sequenceFeatures?.diversity?.entropy || 0) > 2.5 &&
                    (enc?.sequenceFeatures?.categoryDistribution?.informationGathering || 0) > 0.6,
                intervention: 'hypothesis_driven_workup',
                prompt: 'You gathered data broadly. For each test you ordered, which specific hypothesis were you trying to confirm or rule out? Could you have reached the same conclusion with fewer tests?',
                targetDimension: 'evidenceUse'
            },
            ANCHOR_FIX: {
                category: 'cognitive_bias',
                name: 'Anchoring Detected',
                trigger: (sig, enc) => {
                    const transitions = enc?.phaseTransitions || [];
                    const earlyDiag = transitions.find(t => 
                        t.normalizedPosition < 0.2 && t.afterDominant === 'diag');
                    return !!earlyDiag;
                },
                intervention: 'anchor_disruption',
                prompt: 'You formed your primary hypothesis very early. What single finding, if present, would make you abandon this diagnosis entirely? Practice "thinking the opposite" before committing.',
                targetDimension: 'adaptability'
            },
            PHASE_SKIP: {
                category: 'process',
                name: 'Phase Skipping',
                trigger: (sig, enc) => {
                    const dist = enc?.sequenceFeatures?.categoryDistribution || {};
                    return dist.informationGathering < 0.2 || dist.diagnosticReasoning < 0.1;
                },
                intervention: 'process_scaffolding',
                prompt: 'Your reasoning may have skipped a key phase. Expert clinicians typically cycle through: gather → hypothesize → test → refine. Which phase might benefit from more attention?',
                targetDimension: 'overallQuality'
            }
        },

        /**
         * Select appropriate interventions based on current session data.
         * Returns ordered list of applicable interventions.
         */
        selectInterventions(geometricSignature, temporalEncoding, rpfsData) {
            const applicable = [];
            for (const key in this.TAXONOMY) {
                const intervention = this.TAXONOMY[key];
                try {
                    if (intervention.trigger(geometricSignature, temporalEncoding, rpfsData)) {
                        applicable.push({
                            id: key,
                            ...intervention,
                            trigger: undefined // Don't serialize the function
                        });
                    }
                } catch (e) {
                    // Skip on error — data may not have all fields
                }
            }
            return applicable;
        }
    };


    // ================================================================
    //  PUBLIC API — Expose enhanced modules
    // ================================================================
    window.RDX_Enhanced = {
        GeometricSignature,
        TemporalEncoder,
        TopologyMap,
        InterventionEngine,

        /**
         * Full enhanced pipeline: run all analyses on a session report.
         */
        fullAnalysis(rpfsReport, baseFingerprint) {
            const geometric = GeometricSignature.fromFingerprint(baseFingerprint);
            const temporal = TemporalEncoder.encode(rpfsReport?.dataGathering?.sequence || []);
            const topology = TopologyMap.generate(rpfsReport);
            const interventions = InterventionEngine.selectInterventions(
                geometric, temporal, baseFingerprint
            );

            return {
                geometricSignature: geometric,
                temporalEncoding: temporal,
                topologyMap: topology,
                recommendedInterventions: interventions,
                _analyzedAt: Date.now()
            };
        }
    };

})(window);
