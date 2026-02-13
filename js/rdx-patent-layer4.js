/**
 * RPFS Patent Portfolio — Layer 4: Gap-Filling Innovations
 * ==========================================================
 * 
 * These innovations address STRATEGIC GAPS in the existing portfolio:
 * 
 * GAP 1: Nothing PREDICTS future reasoning behavior
 *   → RPMM (Reasoning Pathway Markov Model)
 * 
 * GAP 2: Nothing selects WHICH case to present next based on reasoning
 *   → ACRE (Adaptive Case Routing Engine)
 * 
 * GAP 3: No detection of reasoning transfer ACROSS domains
 *   → CRTD (Cross-Case Reasoning Transfer Detection)
 * 
 * GAP 4: No compression/hashing for fingerprint storage at scale
 *   → RPCA (Reasoning Pathway Compression Algorithm)
 * 
 * GAP 5: No verifiable audit trail for competency claims
 *   → REAP (Reasoning Evidence Audit Protocol)
 * 
 * GAP 6: Fingerprinting only covers sequential reasoning, not visual
 *   → MMRI (Multi-Modal Reasoning Integration)
 * 
 * Depends on: rdx-patent-innovations.js, rdx-patent-enhanced.js,
 *             rdx-patent-extended.js, rdx-patent-layer3.js
 */

(function(window) {
    'use strict';

    // ================================================================
    //  1. RPMM — Reasoning Pathway Markov Model
    //
    //  PORTFOLIO GAP: Everything in the current portfolio is
    //  DESCRIPTIVE (what happened) or DIAGNOSTIC (what went wrong).
    //  Nothing is PREDICTIVE (what will happen next).
    //
    //  RPMM models the learner's reasoning process as a first-order
    //  Markov chain over cognitive states. Given where a learner IS
    //  in their reasoning sequence, the model predicts:
    //    - Which action they'll take next (and with what probability)
    //    - Whether they're heading toward the correct diagnosis
    //    - Where intervention will be most effective (highest-leverage
    //      state to redirect from)
    //
    //  ALICE DEFENSE: Markov chains are specific, well-defined
    //  mathematical objects. The claim is directed at BUILDING a
    //  particular type of probabilistic model from behavioral trace
    //  data — this is analogous to speech recognition patents (which
    //  build Hidden Markov Models from acoustic data) that consistently
    //  survive Alice.
    //
    //  Patent framing: "A method for constructing a probabilistic
    //  transition model of clinical reasoning behavior, comprising:
    //  (a) defining a state space from a temporal action encoding
    //  taxonomy; (b) computing transition probabilities from observed
    //  action sequences; (c) generating predictive distributions over
    //  next-actions at each cognitive state; and (d) identifying
    //  high-leverage intervention states where predicted pathways
    //  diverge from expert reference pathways."
    // ================================================================

    const RPMM = {
        /**
         * Build a Markov transition matrix from observed sessions.
         * 
         * @param {Array} sessions - Array of temporal encodings (from TemporalEncoder)
         * @param {Object} options - Configuration
         * @returns {Object} Markov model
         */
        buildModel(sessions, options = {}) {
            if (!sessions || sessions.length < 3) {
                return { status: 'insufficient_data', minimum: 3, actual: sessions?.length || 0 };
            }

            const order = options.order || 1; // First-order by default
            const smoothing = options.smoothing || 0.01; // Laplace smoothing

            // Collect all states from all sessions
            const allStates = new Set();
            const transitions = {};  // state -> { nextState -> count }

            sessions.forEach(session => {
                const codes = session.codeSequence || [];
                for (let i = 0; i < codes.length - order; i++) {
                    const state = this._getState(codes, i, order);
                    const nextState = codes[i + order].toString();
                    
                    allStates.add(state);
                    allStates.add(nextState);

                    if (!transitions[state]) transitions[state] = {};
                    transitions[state][nextState] = (transitions[state][nextState] || 0) + 1;
                }
            });

            const stateList = Array.from(allStates).sort();

            // Build transition probability matrix with Laplace smoothing
            const matrix = {};
            stateList.forEach(fromState => {
                matrix[fromState] = {};
                const counts = transitions[fromState] || {};
                const totalRaw = Object.values(counts).reduce((a, b) => a + b, 0);
                const total = totalRaw + smoothing * stateList.length;

                stateList.forEach(toState => {
                    matrix[fromState][toState] = +((
                        (counts[toState] || 0) + smoothing
                    ) / total).toFixed(6);
                });
            });

            // Compute stationary distribution (eigenvector of transition matrix)
            const stationaryDist = this._computeStationaryDistribution(matrix, stateList);

            // Identify absorbing/near-absorbing states
            const absorbingStates = this._findAbsorbingStates(matrix, stateList);

            return {
                order,
                states: stateList,
                transitionMatrix: matrix,
                stationaryDistribution: stationaryDist,
                absorbingStates,
                sessionCount: sessions.length,
                _builtAt: Date.now()
            };
        },

        _getState(codes, index, order) {
            if (order === 1) return codes[index].toString();
            return codes.slice(index, index + order).join('-');
        },

        /**
         * Power iteration to approximate stationary distribution.
         * The stationary distribution reveals which cognitive states
         * the learner "settles into" — their reasoning attractors.
         */
        _computeStationaryDistribution(matrix, states, maxIter = 100) {
            const n = states.length;
            if (n === 0) return {};

            // Initialize uniform distribution
            let dist = {};
            states.forEach(s => { dist[s] = 1 / n; });

            for (let iter = 0; iter < maxIter; iter++) {
                const newDist = {};
                states.forEach(s => { newDist[s] = 0; });

                states.forEach(toState => {
                    states.forEach(fromState => {
                        newDist[toState] += (dist[fromState] || 0) * (matrix[fromState]?.[toState] || 0);
                    });
                });

                // Check convergence
                let maxDelta = 0;
                states.forEach(s => {
                    maxDelta = Math.max(maxDelta, Math.abs(newDist[s] - (dist[s] || 0)));
                });
                dist = newDist;
                if (maxDelta < 1e-8) break;
            }

            return dist;
        },

        _findAbsorbingStates(matrix, states, threshold = 0.7) {
            return states.filter(s => (matrix[s]?.[s] || 0) > threshold);
        },

        /**
         * Predict next N actions from a given current state.
         * Returns probability distribution over possible action sequences.
         * 
         * Patent framing: "...wherein the predictive model generates
         * a ranked list of probable next-action sequences from a
         * current cognitive state, each annotated with a cumulative
         * probability and an expert-alignment score."
         */
        predictNext(model, currentState, steps = 3, expertModel = null) {
            if (!model || !model.transitionMatrix[currentState]) return null;

            const predictions = this._beamSearch(model, currentState, steps, 5);

            // If expert model provided, annotate each prediction with alignment
            if (expertModel) {
                predictions.forEach(pred => {
                    let expertProb = 1;
                    let state = currentState;
                    pred.sequence.forEach(nextState => {
                        expertProb *= (expertModel.transitionMatrix[state]?.[nextState] || 0.001);
                        state = nextState;
                    });
                    pred.expertAlignmentScore = +expertProb.toFixed(8);
                    pred.divergesFromExpert = pred.expertAlignmentScore < 0.001;
                });
            }

            return predictions;
        },

        /**
         * Beam search over Markov chain to find top-k most probable
         * action sequences of length N.
         */
        _beamSearch(model, startState, steps, beamWidth) {
            let beam = [{ sequence: [], state: startState, probability: 1.0 }];

            for (let step = 0; step < steps; step++) {
                const candidates = [];
                beam.forEach(item => {
                    const transitions = model.transitionMatrix[item.state] || {};
                    Object.entries(transitions).forEach(([nextState, prob]) => {
                        if (prob > 0.01) {  // Prune very low probability transitions
                            candidates.push({
                                sequence: [...item.sequence, nextState],
                                state: nextState,
                                probability: item.probability * prob
                            });
                        }
                    });
                });
                // Keep top beamWidth
                candidates.sort((a, b) => b.probability - a.probability);
                beam = candidates.slice(0, beamWidth);
            }

            return beam.map(b => ({
                sequence: b.sequence,
                probability: +b.probability.toFixed(8),
                terminalState: b.state
            }));
        },

        /**
         * Identify high-leverage intervention states: states where
         * the learner's predicted path diverges most from the expert's.
         * These are the points where a single intervention has maximum
         * impact on the reasoning trajectory.
         * 
         * Patent framing: "A method for identifying optimal intervention
         * points in a reasoning process, comprising comparing a learner's
         * Markov transition probabilities with an expert reference model
         * to identify states where the Jensen-Shannon divergence between
         * learner and expert transition distributions exceeds a threshold."
         */
        findInterventionPoints(learnerModel, expertModel) {
            if (!learnerModel || !expertModel) return null;

            const points = [];
            const commonStates = learnerModel.states.filter(s => 
                expertModel.states.includes(s)
            );

            commonStates.forEach(state => {
                const learnerDist = learnerModel.transitionMatrix[state] || {};
                const expertDist = expertModel.transitionMatrix[state] || {};

                // JSD between learner and expert transitions from this state
                const jsd = this._jsd(learnerDist, expertDist, commonStates);

                if (jsd > 0.15) {
                    // Find what the expert does differently
                    const expertTopActions = Object.entries(expertDist)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 3);
                    const learnerTopActions = Object.entries(learnerDist)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 3);

                    points.push({
                        state,
                        divergence: +jsd.toFixed(4),
                        learnerLikelyActions: learnerTopActions.map(([s, p]) => ({ action: s, probability: +p.toFixed(4) })),
                        expertLikelyActions: expertTopActions.map(([s, p]) => ({ action: s, probability: +p.toFixed(4) })),
                        interventionPriority: jsd > 0.4 ? 'high' : jsd > 0.25 ? 'medium' : 'low',
                        stationaryWeight: learnerModel.stationaryDistribution[state] || 0,
                        // Impact score: divergence * how often they visit this state
                        impactScore: +(jsd * (learnerModel.stationaryDistribution[state] || 0) * 100).toFixed(2)
                    });
                }
            });

            return points.sort((a, b) => b.impactScore - a.impactScore);
        },

        _jsd(p, q, keys) {
            const m = {};
            keys.forEach(k => { m[k] = ((p[k] || 0) + (q[k] || 0)) / 2; });
            let kl1 = 0, kl2 = 0;
            keys.forEach(k => {
                if ((p[k] || 0) > 0 && m[k] > 0) kl1 += p[k] * Math.log2(p[k] / m[k]);
                if ((q[k] || 0) > 0 && m[k] > 0) kl2 += q[k] * Math.log2(q[k] / m[k]);
            });
            return (kl1 + kl2) / 2;
        }
    };


    // ================================================================
    //  2. ACRE — Adaptive Case Routing Engine
    //
    //  PORTFOLIO GAP: RIRS handles WHEN to review (timing), but
    //  nothing handles WHICH case to present next based on reasoning
    //  quality gaps. Existing adaptive learning systems route based
    //  on CONTENT mastery (did you get the answer right?). ACRE
    //  routes based on REASONING gaps (which cognitive skills need
    //  development?).
    //
    //  Uses: Geometric Signature (what are the learner's weak
    //  dimensions?), Temporal Encoding (what reasoning phases do they
    //  skip?), Topology Map (what structural patterns are underdeveloped?),
    //  Markov Model (what reasoning transitions need practice?).
    //
    //  ALICE DEFENSE: This is a multi-signal recommendation engine
    //  with specific algorithmic steps for scoring and ranking cases.
    //  It is analogous to content recommendation patents (Netflix,
    //  Spotify) which survive Alice because they claim specific
    //  multi-feature scoring algorithms, not the abstract idea of
    //  "recommending things."
    //
    //  Patent framing: "A method for selecting clinical reasoning
    //  exercises from a case library, comprising: (a) computing a
    //  reasoning gap vector from the difference between a learner's
    //  geometric reasoning signature and a target proficiency profile;
    //  (b) scoring each available case by its potential to exercise
    //  the identified gap dimensions; (c) applying a diversity
    //  constraint to prevent overrepresentation of any single gap
    //  dimension; and (d) ranking cases by a composite routing score
    //  that balances gap remediation potential with zone-of-proximal-
    //  development appropriateness."
    // ================================================================

    const ACRE = {
        /**
         * Case metadata structure — each case in the library needs these
         * annotations for routing to work.
         */
        CASE_SCHEMA: {
            caseId: 'string',
            primaryDimensions: 'array',    // Which fingerprint dimensions this case exercises
            requiredPhases: 'array',       // Which reasoning phases (info, diag, decision, meta)
            difficulty: 'number',          // 0-100
            topologyComplexity: 'number',  // Expected node count in topology map
            biasVulnerabilities: 'array',  // Which cognitive biases this case can trigger
            contentDomain: 'string',       // Clinical domain (cardiology, etc.)
            structuralType: 'string'       // Reasoning structure type (rule-out, build-up, etc.)
        },

        /**
         * Select the optimal next case for a learner.
         * 
         * @param {Object} learnerProfile - Contains geometric signature, temporal encoding, fingerprint
         * @param {Array} caseLibrary - Available cases with metadata
         * @param {Object} options - Routing configuration
         * @returns {Array} Ranked case recommendations
         */
        selectNextCase(learnerProfile, caseLibrary, options = {}) {
            if (!learnerProfile || !caseLibrary?.length) return [];

            const targetProfile = options.targetProfile || this._defaultTarget();
            const recentCases = options.recentCases || [];
            const maxResults = options.maxResults || 5;

            // Step 1: Compute reasoning gap vector
            const gapVector = this._computeGapVector(learnerProfile, targetProfile);

            // Step 2: Score each case by gap remediation potential
            const scored = caseLibrary.map(c => ({
                ...c,
                gapScore: this._scoreGapRemediation(c, gapVector),
                zpdScore: this._scoreZPD(c, learnerProfile),
                diversityScore: this._scoreDiversity(c, recentCases),
                phaseGapScore: this._scorePhaseGaps(c, learnerProfile)
            }));

            // Step 3: Compute composite routing score
            scored.forEach(c => {
                c.routingScore = +(
                    0.35 * c.gapScore +
                    0.25 * c.zpdScore +
                    0.20 * c.diversityScore +
                    0.20 * c.phaseGapScore
                ).toFixed(4);
            });

            // Step 4: Rank and return
            scored.sort((a, b) => b.routingScore - a.routingScore);

            return scored.slice(0, maxResults).map(c => ({
                caseId: c.caseId,
                routingScore: c.routingScore,
                rationale: this._generateRationale(c, gapVector),
                components: {
                    gapRemediation: c.gapScore,
                    zoneOfProximalDev: c.zpdScore,
                    diversity: c.diversityScore,
                    phaseGap: c.phaseGapScore
                }
            }));
        },

        _defaultTarget() {
            return {
                thoroughness: 80, flexibility: 80, evidenceUse: 80,
                adaptability: 80, momentum: 80, metacognition: 70, overallQuality: 75
            };
        },

        _computeGapVector(learnerProfile, target) {
            const fp = learnerProfile.fingerprint || learnerProfile;
            const dims = ['thoroughness', 'flexibility', 'evidenceUse', 'adaptability', 'momentum', 'metacognition'];
            const gaps = {};
            dims.forEach(d => {
                gaps[d] = Math.max(0, (target[d] || 80) - (fp[d] || 0));
            });
            // Normalize to unit vector
            const magnitude = Math.sqrt(Object.values(gaps).reduce((s, v) => s + v * v, 0));
            if (magnitude > 0) {
                for (const d in gaps) gaps[d] = +(gaps[d] / magnitude).toFixed(4);
            }
            return gaps;
        },

        _scoreGapRemediation(caseData, gapVector) {
            const caseDims = caseData.primaryDimensions || [];
            let score = 0;
            caseDims.forEach(d => { score += (gapVector[d] || 0); });
            return +(score / Math.max(1, caseDims.length)).toFixed(4);
        },

        _scoreZPD(caseData, learnerProfile) {
            // Zone of Proximal Development: case should be challenging
            // but not overwhelming. Sweet spot: case difficulty slightly
            // above learner's current performance level.
            const fp = learnerProfile.fingerprint || learnerProfile;
            const learnerLevel = fp.overallQuality || 50;
            const caseDiff = caseData.difficulty || 50;
            const delta = caseDiff - learnerLevel;
            // Optimal: 5-20 points above current level
            if (delta >= 5 && delta <= 20) return 1.0;
            if (delta >= 0 && delta < 5) return 0.7;   // Slightly easy
            if (delta > 20 && delta <= 35) return 0.5;  // Stretching
            if (delta < 0) return 0.3;                   // Too easy
            return 0.2;                                   // Too hard
        },

        _scoreDiversity(caseData, recentCases) {
            if (recentCases.length === 0) return 1.0;
            // Penalize if same domain or structural type as recent cases
            const recentDomains = recentCases.map(c => c.contentDomain);
            const recentTypes = recentCases.map(c => c.structuralType);
            let penalty = 0;
            if (recentDomains.includes(caseData.contentDomain)) penalty += 0.4;
            if (recentTypes.includes(caseData.structuralType)) penalty += 0.3;
            return +(Math.max(0, 1 - penalty)).toFixed(4);
        },

        _scorePhaseGaps(caseData, learnerProfile) {
            const enc = learnerProfile.temporalEncoding;
            if (!enc) return 0.5;
            const dist = enc.sequenceFeatures?.categoryDistribution || {};
            const casePhases = caseData.requiredPhases || [];
            // Score higher if case requires phases the learner underuses
            let score = 0;
            casePhases.forEach(phase => {
                const learnerUsage = dist[phase] || 0;
                score += (1 - learnerUsage); // Higher score for underused phases
            });
            return +(score / Math.max(1, casePhases.length)).toFixed(4);
        },

        _generateRationale(caseData, gapVector) {
            const topGaps = Object.entries(gapVector)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 2)
                .map(([dim]) => dim);
            const caseDims = caseData.primaryDimensions || [];
            const matched = caseDims.filter(d => topGaps.includes(d));
            if (matched.length > 0) {
                return `Targets reasoning gap${matched.length > 1 ? 's' : ''}: ${matched.join(', ')}`;
            }
            return 'Provides reasoning diversity';
        }
    };


    // ================================================================
    //  3. CRTD — Cross-Case Reasoning Transfer Detection
    //
    //  PORTFOLIO GAP: Current analytics track improvement WITHIN a
    //  content domain. But the most valuable educational insight is
    //  whether reasoning skills TRANSFER across domains — does
    //  getting better at cardiac cases make you better at renal cases
    //  that share similar underlying reasoning structures?
    //
    //  Uses Topology Map comparison: if two cases in different
    //  clinical domains have structurally similar topology maps
    //  (similar node patterns, similar phase transitions, similar
    //  hypothesis evolution shapes), and a learner improves in one,
    //  CRTD detects whether that improvement transfers.
    //
    //  ALICE DEFENSE: This involves a multi-step computational
    //  pipeline: (1) abstract away clinical content to extract
    //  pure reasoning structure, (2) compute structural similarity
    //  across domains, (3) track performance longitudinally within
    //  each structural cluster, (4) detect correlated improvement
    //  across clusters. Each step involves specific data
    //  transformations.
    //
    //  Patent framing: "A method for detecting reasoning skill
    //  transfer across clinical content domains, comprising:
    //  (a) generating content-agnostic structural representations
    //  of reasoning processes within each domain; (b) clustering
    //  domains by structural similarity of their reasoning
    //  representations; (c) tracking performance trajectories
    //  within each cluster; and (d) computing cross-cluster
    //  correlation coefficients to detect reasoning transfer events."
    // ================================================================

    const CRTD = {
        /**
         * Abstract away clinical content to extract pure reasoning structure.
         * This is the key innovation: by removing content-specific labels,
         * we can compare reasoning STRUCTURES across domains.
         */
        abstractTopology(topologyMap) {
            if (!topologyMap) return null;

            return {
                // Structural features only — no clinical content
                nodeCount: topologyMap.graphMetrics?.totalNodes || 0,
                edgeCount: topologyMap.graphMetrics?.totalEdges || 0,
                pivotCount: topologyMap.graphMetrics?.pivotPointCount || 0,
                stability: topologyMap.graphMetrics?.hypothesisStability || 0,
                convergence: topologyMap.graphMetrics?.convergenceIndex || 0,
                metacogRatio: topologyMap.graphMetrics?.metacogNodeRatio || 0,
                avgEdgeWeight: topologyMap.graphMetrics?.avgEdgeWeight || 0,
                // Edge pattern: sequence of weights (structure of transitions)
                edgeWeightPattern: (topologyMap.edges || []).map(e => +(e.weight || 0).toFixed(2)),
                // Hypothesis change pattern: sequence of stable/pivoted labels
                changePattern: (topologyMap.edges || []).map(e => e.hypothesisChange || 'unknown'),
                // Phase: what fraction of nodes are in each phase
                nodePhaseDistribution: this._nodePhaseDistribution(topologyMap.nodes || [])
            };
        },

        _nodePhaseDistribution(nodes) {
            const n = nodes.length || 1;
            const phases = { initial: 0, info: 0, diagnostic: 0, decision: 0, metacog: 0 };
            nodes.forEach(node => {
                const type = (node.type || '').toLowerCase();
                if (type.includes('initial')) phases.initial++;
                else if (type.includes('stage_1') || type.includes('gathering')) phases.info++;
                else if (type.includes('stage_2') || type.includes('hypothesis') || type.includes('differential')) phases.diagnostic++;
                else if (type.includes('stage_3') || type.includes('decision') || type.includes('treatment')) phases.decision++;
                else if (type.includes('metacog') || type.includes('reflect')) phases.metacog++;
                else phases.info++; // default
            });
            for (const p in phases) phases[p] = +(phases[p] / n).toFixed(3);
            return phases;
        },

        /**
         * Compute structural similarity between two abstracted topologies.
         * Content-independent — only compares reasoning structure.
         */
        structuralSimilarity(absA, absB) {
            if (!absA || !absB) return null;

            const features = [
                { name: 'nodeCount', a: absA.nodeCount, b: absB.nodeCount, normalize: 20 },
                { name: 'pivotCount', a: absA.pivotCount, b: absB.pivotCount, normalize: 5 },
                { name: 'stability', a: absA.stability, b: absB.stability, normalize: 1 },
                { name: 'convergence', a: absA.convergence, b: absB.convergence, normalize: 1 },
                { name: 'metacogRatio', a: absA.metacogRatio, b: absB.metacogRatio, normalize: 1 },
                { name: 'avgEdgeWeight', a: absA.avgEdgeWeight, b: absB.avgEdgeWeight, normalize: 1 }
            ];

            const featureSimilarities = features.map(f => ({
                name: f.name,
                similarity: +(1 - Math.abs(f.a - f.b) / f.normalize).toFixed(3)
            }));

            // Change pattern similarity (sequence alignment)
            const patternSim = this._sequenceAlignmentScore(
                absA.changePattern, absB.changePattern
            );

            // Phase distribution similarity (cosine)
            const phaseSim = this._cosineSimilarity(
                Object.values(absA.nodePhaseDistribution),
                Object.values(absB.nodePhaseDistribution)
            );

            const avgFeatureSim = featureSimilarities.reduce((s, f) => s + f.similarity, 0) 
                / featureSimilarities.length;

            return {
                featureSimilarities,
                patternSimilarity: patternSim,
                phaseDistributionSimilarity: phaseSim,
                compositeSimilarity: +(
                    0.4 * avgFeatureSim + 
                    0.35 * patternSim + 
                    0.25 * phaseSim
                ).toFixed(4),
                structurallyEquivalent: avgFeatureSim > 0.8 && patternSim > 0.7
            };
        },

        _sequenceAlignmentScore(seqA, seqB) {
            if (!seqA?.length || !seqB?.length) return 0;
            const minLen = Math.min(seqA.length, seqB.length);
            const maxLen = Math.max(seqA.length, seqB.length);
            let matches = 0;
            for (let i = 0; i < minLen; i++) {
                if (seqA[i] === seqB[i]) matches++;
            }
            return +(matches / maxLen).toFixed(3);
        },

        _cosineSimilarity(a, b) {
            const n = Math.min(a.length, b.length);
            let dot = 0, normA = 0, normB = 0;
            for (let i = 0; i < n; i++) {
                dot += a[i] * b[i];
                normA += a[i] * a[i];
                normB += b[i] * b[i];
            }
            const denom = Math.sqrt(normA) * Math.sqrt(normB);
            return denom > 0 ? +(dot / denom).toFixed(4) : 0;
        },

        /**
         * Cluster clinical domains by reasoning structure similarity.
         * Cases in the same cluster share reasoning structure even though
         * they cover different clinical content.
         * 
         * @param {Array} caseSessions - Array of { domain, topologyMap }
         * @returns {Object} Domain clusters with structural similarity
         */
        clusterDomains(caseSessions) {
            // Aggregate abstracted topologies by domain
            const domainProfiles = {};
            caseSessions.forEach(s => {
                const domain = s.domain || 'unknown';
                if (!domainProfiles[domain]) domainProfiles[domain] = [];
                const abs = this.abstractTopology(s.topologyMap);
                if (abs) domainProfiles[domain].push(abs);
            });

            // Compute average profile per domain
            const domainAvg = {};
            for (const domain in domainProfiles) {
                const profiles = domainProfiles[domain];
                if (profiles.length === 0) continue;
                domainAvg[domain] = {
                    nodeCount: profiles.reduce((s, p) => s + p.nodeCount, 0) / profiles.length,
                    pivotCount: profiles.reduce((s, p) => s + p.pivotCount, 0) / profiles.length,
                    stability: profiles.reduce((s, p) => s + p.stability, 0) / profiles.length,
                    convergence: profiles.reduce((s, p) => s + p.convergence, 0) / profiles.length,
                    metacogRatio: profiles.reduce((s, p) => s + p.metacogRatio, 0) / profiles.length,
                    avgEdgeWeight: profiles.reduce((s, p) => s + p.avgEdgeWeight, 0) / profiles.length,
                    changePattern: profiles[0].changePattern, // Use first as representative
                    nodePhaseDistribution: profiles[0].nodePhaseDistribution,
                    sampleSize: profiles.length
                };
            }

            // Pairwise similarity between domains
            const domains = Object.keys(domainAvg);
            const similarities = [];
            for (let i = 0; i < domains.length; i++) {
                for (let j = i + 1; j < domains.length; j++) {
                    const sim = this.structuralSimilarity(domainAvg[domains[i]], domainAvg[domains[j]]);
                    similarities.push({
                        domainA: domains[i],
                        domainB: domains[j],
                        similarity: sim?.compositeSimilarity || 0,
                        structurallyEquivalent: sim?.structurallyEquivalent || false
                    });
                }
            }

            // Simple agglomerative clustering
            const clusters = this._agglomerativeCluster(domains, similarities, 0.65);

            return { domainProfiles: domainAvg, similarities, clusters };
        },

        _agglomerativeCluster(domains, similarities, threshold) {
            // Start with each domain in its own cluster
            const clusters = domains.map(d => [d]);

            // Merge clusters with similarity above threshold
            similarities
                .filter(s => s.similarity >= threshold)
                .sort((a, b) => b.similarity - a.similarity)
                .forEach(({ domainA, domainB }) => {
                    const clusterA = clusters.find(c => c.includes(domainA));
                    const clusterB = clusters.find(c => c.includes(domainB));
                    if (clusterA && clusterB && clusterA !== clusterB) {
                        // Merge B into A
                        clusterA.push(...clusterB);
                        clusters.splice(clusters.indexOf(clusterB), 1);
                    }
                });

            return clusters.map((c, i) => ({ id: i, domains: c, size: c.length }));
        },

        /**
         * Detect reasoning transfer: correlated improvement across domains
         * that share reasoning structure.
         * 
         * @param {Object} performanceHistory - { domain: [{ timestamp, score }] }
         * @param {Array} clusters - From clusterDomains()
         * @returns {Array} Detected transfer events
         */
        detectTransfer(performanceHistory, clusters) {
            const transfers = [];

            clusters.forEach(cluster => {
                if (cluster.domains.length < 2) return;

                // For each pair of domains in the cluster
                for (let i = 0; i < cluster.domains.length; i++) {
                    for (let j = i + 1; j < cluster.domains.length; j++) {
                        const domA = cluster.domains[i];
                        const domB = cluster.domains[j];
                        const histA = performanceHistory[domA] || [];
                        const histB = performanceHistory[domB] || [];

                        if (histA.length < 3 || histB.length < 3) continue;

                        // Compute correlation of improvement trajectories
                        const trendA = this._computeTrend(histA);
                        const trendB = this._computeTrend(histB);

                        // Detect if improvement in A precedes improvement in B
                        const lagCorrelation = this._laggedCorrelation(histA, histB);

                        if (lagCorrelation.maxCorrelation > 0.5) {
                            transfers.push({
                                sourceDomain: lagCorrelation.lag > 0 ? domA : domB,
                                targetDomain: lagCorrelation.lag > 0 ? domB : domA,
                                correlation: lagCorrelation.maxCorrelation,
                                lagSessions: Math.abs(lagCorrelation.lag),
                                clusterId: cluster.id,
                                sourceTrend: trendA.slope,
                                targetTrend: trendB.slope,
                                confidence: lagCorrelation.maxCorrelation > 0.7 ? 'high' : 'moderate'
                            });
                        }
                    }
                }
            });

            return transfers;
        },

        _computeTrend(history) {
            const n = history.length;
            const x = history.map((_, i) => i);
            const y = history.map(h => h.score || 0);
            const sumX = x.reduce((a, b) => a + b, 0);
            const sumY = y.reduce((a, b) => a + b, 0);
            const sumXY = x.reduce((s, xi, i) => s + xi * y[i], 0);
            const sumX2 = x.reduce((s, xi) => s + xi * xi, 0);
            const denom = n * sumX2 - sumX * sumX;
            const slope = denom !== 0 ? (n * sumXY - sumX * sumY) / denom : 0;
            return { slope: +slope.toFixed(4) };
        },

        _laggedCorrelation(histA, histB, maxLag = 3) {
            const scoresA = histA.map(h => h.score || 0);
            const scoresB = histB.map(h => h.score || 0);
            let bestLag = 0, bestCorr = 0;

            for (let lag = -maxLag; lag <= maxLag; lag++) {
                const pairs = [];
                for (let i = 0; i < scoresA.length; i++) {
                    const j = i + lag;
                    if (j >= 0 && j < scoresB.length) {
                        pairs.push([scoresA[i], scoresB[j]]);
                    }
                }
                if (pairs.length < 3) continue;
                const corr = this._pearson(pairs.map(p => p[0]), pairs.map(p => p[1]));
                if (Math.abs(corr) > Math.abs(bestCorr)) {
                    bestCorr = corr;
                    bestLag = lag;
                }
            }
            return { maxCorrelation: +bestCorr.toFixed(4), lag: bestLag };
        },

        _pearson(x, y) {
            const n = x.length;
            const mx = x.reduce((a, b) => a + b, 0) / n;
            const my = y.reduce((a, b) => a + b, 0) / n;
            let num = 0, dx2 = 0, dy2 = 0;
            for (let i = 0; i < n; i++) {
                const dx = x[i] - mx, dy = y[i] - my;
                num += dx * dy; dx2 += dx * dx; dy2 += dy * dy;
            }
            const den = Math.sqrt(dx2 * dy2);
            return den > 0 ? num / den : 0;
        }
    };


    // ================================================================
    //  4. RPCA — Reasoning Pathway Compression Algorithm
    //
    //  PORTFOLIO GAP: As the system scales to thousands of learners
    //  with hundreds of sessions each, raw fingerprint + topology +
    //  temporal encoding data becomes enormous. RPCA compresses a
    //  complete reasoning session into a fixed-size representation
    //  (a "reasoning hash") suitable for rapid storage, retrieval,
    //  and comparison.
    //
    //  ALICE DEFENSE: Data compression algorithms are one of the
    //  STRONGEST categories for surviving Alice — they are inherently
    //  technical processes that improve computer functionality
    //  (storage efficiency, comparison speed). Compression is never
    //  abstract. The Supreme Court in Alice explicitly noted that
    //  "improvements to the functioning of the computer itself" are
    //  patent-eligible.
    //
    //  Patent framing: "A method for compressing a clinical reasoning
    //  session into a fixed-size hash representation, comprising:
    //  (a) extracting structural features from a topology map;
    //  (b) encoding temporal features from a sequence analysis;
    //  (c) quantizing geometric signature properties into discrete
    //  bins; and (d) combining the quantized features into a
    //  fixed-length binary string optimized for Hamming distance
    //  comparison."
    // ================================================================

    const RPCA = {
        // Hash configuration
        HASH_LENGTH: 128, // bits
        BINS: {
            geometric: 32,   // bits for geometric signature
            temporal: 32,    // bits for temporal features
            topology: 32,    // bits for topology structure
            metadata: 32     // bits for session metadata
        },

        /**
         * Compress a full session analysis into a fixed-size hash.
         * 
         * @param {Object} analysis - Full analysis from RDX_Enhanced.fullAnalysis()
         * @returns {Object} Compressed hash with comparison methods
         */
        compress(analysis) {
            if (!analysis) return null;

            const geoBits = this._compressGeometric(analysis.geometricSignature);
            const tempBits = this._compressTemporal(analysis.temporalEncoding);
            const topoBits = this._compressTopology(analysis.topologyMap);
            const metaBits = this._compressMetadata(analysis);

            const fullHash = geoBits + tempBits + topoBits + metaBits;

            return {
                hash: fullHash,
                segments: {
                    geometric: geoBits,
                    temporal: tempBits,
                    topology: topoBits,
                    metadata: metaBits
                },
                length: fullHash.length,
                _compressedAt: Date.now()
            };
        },

        /**
         * Quantize geometric signature into binary representation.
         * Each dimension is quantized into bins; inter-dimensional
         * relationships encoded as direction bits.
         */
        _compressGeometric(sig) {
            if (!sig) return '0'.repeat(this.BINS.geometric);

            const bits = [];

            // Centroid position (8 bits: 4 for x quadrant, 4 for y quadrant)
            bits.push(...this._quantize(sig.centroid?.x || 0, -1, 1, 4));
            bits.push(...this._quantize(sig.centroid?.y || 0, -1, 1, 4));

            // Eccentricity (4 bits)
            bits.push(...this._quantize(sig.eccentricity || 0, 0, 1, 4));

            // Shape code → bit encoding (7 bits, one per displacement direction)
            const shapeCode = sig.shapeCode || '';
            for (let i = 0; i < 7; i++) {
                const ch = shapeCode[i] || 'P';
                if (ch === 'A') bits.push(1, 0);
                else if (ch === 'D') bits.push(0, 1);
                else bits.push(0, 0);
            }

            // Shape class (4 bits)
            const classMap = { 'EB': 0, 'NU': 1, 'TD': 2, 'FD': 3, 'SD': 4, 'EL': 5, 'MP': 6 };
            bits.push(...this._intToBits(classMap[sig.shapeClass?.code] || 6, 4));

            // Pad or truncate to target length
            while (bits.length < this.BINS.geometric) bits.push(0);
            return bits.slice(0, this.BINS.geometric).join('');
        },

        _compressTemporal(enc) {
            if (!enc) return '0'.repeat(this.BINS.temporal);

            const bits = [];

            // Category distribution (16 bits: 4 per category)
            const dist = enc.sequenceFeatures?.categoryDistribution || {};
            bits.push(...this._quantize(dist.informationGathering || 0, 0, 1, 4));
            bits.push(...this._quantize(dist.diagnosticReasoning || 0, 0, 1, 4));
            bits.push(...this._quantize(dist.decisionMaking || 0, 0, 1, 4));
            bits.push(...this._quantize(dist.metacognition || 0, 0, 1, 4));

            // Diversity entropy (4 bits)
            bits.push(...this._quantize(enc.sequenceFeatures?.diversity?.entropy || 0, 0, 4, 4));

            // Sequence length bucket (4 bits)
            bits.push(...this._quantize(enc.sequenceLength || 0, 0, 100, 4));

            // Phase transitions: count (4 bits)
            const transCount = enc.phaseTransitions?.length || 0;
            bits.push(...this._quantize(transCount, 0, 10, 4));

            while (bits.length < this.BINS.temporal) bits.push(0);
            return bits.slice(0, this.BINS.temporal).join('');
        },

        _compressTopology(topo) {
            if (!topo) return '0'.repeat(this.BINS.topology);

            const bits = [];
            const m = topo.graphMetrics || {};

            // Node count (5 bits, max 31)
            bits.push(...this._quantize(m.totalNodes || 0, 0, 31, 5));

            // Pivot count (4 bits)
            bits.push(...this._quantize(m.pivotPointCount || 0, 0, 15, 4));

            // Stability (5 bits)
            bits.push(...this._quantize(m.hypothesisStability || 0, 0, 1, 5));

            // Convergence (5 bits)
            bits.push(...this._quantize(m.convergenceIndex || 0, -0.5, 1, 5));

            // Metacog ratio (5 bits)
            bits.push(...this._quantize(m.metacogNodeRatio || 0, 0, 1, 5));

            // Avg edge weight (4 bits)
            bits.push(...this._quantize(m.avgEdgeWeight || 0, 0, 1, 4));

            while (bits.length < this.BINS.topology) bits.push(0);
            return bits.slice(0, this.BINS.topology).join('');
        },

        _compressMetadata(analysis) {
            const bits = [];

            // Intervention count (4 bits)
            const interventions = analysis.recommendedInterventions?.length || 0;
            bits.push(...this._quantize(interventions, 0, 5, 4));

            // Has high-priority intervention (1 bit)
            const hasHigh = analysis.recommendedInterventions?.some(
                i => i.category === 'cognitive_bias'
            ) ? 1 : 0;
            bits.push(hasHigh);

            // Timestamp bucketed by hour-of-day (5 bits, 0-23)
            const hour = new Date(analysis._analyzedAt || Date.now()).getHours();
            bits.push(...this._quantize(hour, 0, 23, 5));

            while (bits.length < this.BINS.metadata) bits.push(0);
            return bits.slice(0, this.BINS.metadata).join('');
        },

        /**
         * Quantize a continuous value into N bits.
         */
        _quantize(value, min, max, numBits) {
            const range = max - min;
            const clamped = Math.max(min, Math.min(max, value));
            const normalized = range > 0 ? (clamped - min) / range : 0;
            const maxBinValue = (1 << numBits) - 1;
            const binned = Math.round(normalized * maxBinValue);
            return this._intToBits(binned, numBits);
        },

        _intToBits(value, numBits) {
            const bits = [];
            for (let i = numBits - 1; i >= 0; i--) {
                bits.push((value >> i) & 1);
            }
            return bits;
        },

        /**
         * Compare two hashes using Hamming distance.
         * Hamming distance = number of differing bits.
         * Lower = more similar.
         * 
         * This enables O(1) similarity comparison between any two
         * sessions, regardless of the complexity of the underlying data.
         */
        compare(hashA, hashB) {
            if (!hashA?.hash || !hashB?.hash) return null;
            const a = hashA.hash;
            const b = hashB.hash;
            const len = Math.min(a.length, b.length);

            let totalDiff = 0;
            const segmentDiffs = {};

            // Overall Hamming distance
            for (let i = 0; i < len; i++) {
                if (a[i] !== b[i]) totalDiff++;
            }

            // Per-segment Hamming distance
            const segments = ['geometric', 'temporal', 'topology', 'metadata'];
            let offset = 0;
            segments.forEach(seg => {
                const segLen = this.BINS[seg];
                const segA = hashA.segments[seg] || '';
                const segB = hashB.segments[seg] || '';
                let diff = 0;
                for (let i = 0; i < segLen; i++) {
                    if ((segA[i] || '0') !== (segB[i] || '0')) diff++;
                }
                segmentDiffs[seg] = {
                    hammingDistance: diff,
                    similarity: +(1 - diff / segLen).toFixed(4)
                };
                offset += segLen;
            });

            return {
                hammingDistance: totalDiff,
                similarity: +(1 - totalDiff / len).toFixed(4),
                segmentComparison: segmentDiffs,
                mostSimilarSegment: Object.entries(segmentDiffs)
                    .sort((a, b) => b[1].similarity - a[1].similarity)[0]?.[0],
                mostDifferentSegment: Object.entries(segmentDiffs)
                    .sort((a, b) => a[1].similarity - b[1].similarity)[0]?.[0]
            };
        },

        /**
         * Batch comparison: find the K most similar sessions to a query
         * from a library of compressed hashes. O(N) scan with O(1) per
         * comparison — scales to millions of sessions.
         */
        findSimilar(queryHash, library, k = 5) {
            if (!queryHash?.hash || !library?.length) return [];

            const scored = library.map(entry => ({
                ...entry,
                comparison: this.compare(queryHash, entry)
            }));

            scored.sort((a, b) => a.comparison.hammingDistance - b.comparison.hammingDistance);
            return scored.slice(0, k);
        }
    };


    // ================================================================
    //  5. REAP — Reasoning Evidence Audit Protocol
    //
    //  PORTFOLIO GAP: No verifiable audit trail. For institutional
    //  adoption (medical schools, residency programs, accreditation),
    //  stakeholders need VERIFIABLE evidence that a learner's
    //  reasoning competency assessment is authentic and untampered.
    //
    //  REAP creates a hash chain where each reasoning session is
    //  cryptographically linked to the previous one, creating an
    //  immutable record. Think: blockchain for competency evidence,
    //  but without the blockchain overhead.
    //
    //  ALICE DEFENSE: Cryptographic hash chains are inherently
    //  technical — they are about computer functionality (data
    //  integrity, tamper detection), not about education. The
    //  educational context is incidental to the technical claims.
    //
    //  Patent framing: "A method for maintaining a verifiable audit
    //  trail of reasoning competency assessments, comprising:
    //  (a) generating a session evidence record containing a reasoning
    //  pathway hash, performance metrics, and a timestamp;
    //  (b) computing a chain hash by combining the session evidence
    //  with the previous chain hash; (c) storing the chained record
    //  in an append-only evidence log; and (d) providing a verification
    //  function that validates chain integrity by recomputing hashes."
    // ================================================================

    const REAP = {
        /**
         * Create a new evidence record linked to the previous chain.
         */
        createEvidenceRecord(sessionAnalysis, previousChainHash, learnerId) {
            const sessionEvidence = {
                learnerId,
                timestamp: Date.now(),
                // Core evidence from RPCA compressed hash
                reasoningHash: sessionAnalysis.hash || 'no_hash',
                // Performance summary
                performanceSummary: {
                    overallScore: sessionAnalysis.geometricSignature?.centroid?.distFromOrigin || 0,
                    shapeClass: sessionAnalysis.geometricSignature?.shapeClass?.code || 'unknown',
                    interventionCount: sessionAnalysis.recommendedInterventions?.length || 0,
                    topologyNodes: sessionAnalysis.topologyMap?.graphMetrics?.totalNodes || 0
                },
                // Link to previous record
                previousHash: previousChainHash || 'GENESIS'
            };

            // Compute chain hash (SHA-256 would be used in production;
            // here we use a deterministic hash function for demonstration)
            const evidenceString = JSON.stringify(sessionEvidence);
            const chainHash = this._deterministicHash(evidenceString);

            return {
                ...sessionEvidence,
                chainHash,
                _recordVersion: 1
            };
        },

        /**
         * Simple deterministic hash for demonstration.
         * In production, replace with Web Crypto API SHA-256.
         */
        _deterministicHash(str) {
            let hash = 0x811c9dc5; // FNV offset basis
            for (let i = 0; i < str.length; i++) {
                hash ^= str.charCodeAt(i);
                hash = (hash * 0x01000193) >>> 0; // FNV prime, unsigned
            }
            // Convert to hex string
            return hash.toString(16).padStart(8, '0');
        },

        /**
         * Verify the integrity of an evidence chain.
         * Recomputes each chain hash and checks for tampering.
         */
        verifyChain(evidenceLog) {
            if (!evidenceLog || evidenceLog.length === 0) {
                return { valid: false, reason: 'empty_log' };
            }

            const issues = [];

            for (let i = 0; i < evidenceLog.length; i++) {
                const record = evidenceLog[i];

                // Check previous hash linkage
                if (i === 0) {
                    if (record.previousHash !== 'GENESIS') {
                        issues.push({ index: i, issue: 'first_record_not_genesis' });
                    }
                } else {
                    if (record.previousHash !== evidenceLog[i - 1].chainHash) {
                        issues.push({ index: i, issue: 'broken_chain_link' });
                    }
                }

                // Check timestamp ordering
                if (i > 0 && record.timestamp < evidenceLog[i - 1].timestamp) {
                    issues.push({ index: i, issue: 'timestamp_regression' });
                }

                // Recompute chain hash
                const recomputed = this._recomputeHash(record);
                if (recomputed !== record.chainHash) {
                    issues.push({ index: i, issue: 'hash_mismatch', expected: recomputed, found: record.chainHash });
                }
            }

            return {
                valid: issues.length === 0,
                recordCount: evidenceLog.length,
                issues,
                chainSpan: evidenceLog.length > 0 ? {
                    from: new Date(evidenceLog[0].timestamp).toISOString(),
                    to: new Date(evidenceLog[evidenceLog.length - 1].timestamp).toISOString()
                } : null
            };
        },

        _recomputeHash(record) {
            const evidence = {
                learnerId: record.learnerId,
                timestamp: record.timestamp,
                reasoningHash: record.reasoningHash,
                performanceSummary: record.performanceSummary,
                previousHash: record.previousHash
            };
            return this._deterministicHash(JSON.stringify(evidence));
        },

        /**
         * Generate a competency attestation from the evidence chain.
         * This is a summary suitable for institutional reporting.
         */
        generateAttestation(evidenceLog, competencyThresholds) {
            const verification = this.verifyChain(evidenceLog);
            if (!verification.valid) {
                return { attestable: false, reason: 'chain_integrity_failure', issues: verification.issues };
            }

            const thresholds = competencyThresholds || {
                minimumSessions: 10,
                requiredShapeClass: ['EB', 'MP'], // Expert-Balanced or Mixed-Profile
                maxInterventionsPerSession: 3
            };

            const sessionCount = evidenceLog.length;
            const recentSessions = evidenceLog.slice(-5);
            const recentShapeClasses = recentSessions.map(r => r.performanceSummary?.shapeClass);
            const recentInterventions = recentSessions.map(r => r.performanceSummary?.interventionCount || 0);
            const avgInterventions = recentInterventions.reduce((a, b) => a + b, 0) / recentInterventions.length;

            const meetsMinSessions = sessionCount >= thresholds.minimumSessions;
            const meetsShapeClass = recentShapeClasses.some(sc => thresholds.requiredShapeClass.includes(sc));
            const meetsInterventions = avgInterventions <= thresholds.maxInterventionsPerSession;

            return {
                attestable: meetsMinSessions && meetsShapeClass && meetsInterventions,
                chainVerified: true,
                metrics: {
                    totalSessions: sessionCount,
                    recentShapeClasses,
                    avgRecentInterventions: +avgInterventions.toFixed(1),
                    chainSpan: verification.chainSpan
                },
                thresholdResults: {
                    minimumSessions: { required: thresholds.minimumSessions, actual: sessionCount, met: meetsMinSessions },
                    shapeClass: { required: thresholds.requiredShapeClass, actual: recentShapeClasses, met: meetsShapeClass },
                    interventionLimit: { required: thresholds.maxInterventionsPerSession, actual: +avgInterventions.toFixed(1), met: meetsInterventions }
                }
            };
        }
    };


    // ================================================================
    //  6. MMRI — Multi-Modal Reasoning Integration
    //
    //  PORTFOLIO GAP: All current fingerprinting covers SEQUENTIAL
    //  clinical reasoning (history → exam → labs → diagnosis). But
    //  clinical reasoning also involves VISUAL reasoning (interpreting
    //  ECGs, X-rays, pathology slides, dermatologic lesions). These
    //  require different cognitive processes and should produce
    //  different fingerprint dimensions.
    //
    //  MMRI extends the fingerprinting architecture to handle visual
    //  reasoning modalities, and provides a FUSION algorithm that
    //  combines sequential and visual reasoning fingerprints into
    //  a unified multi-modal profile.
    //
    //  ALICE DEFENSE: Multi-modal data fusion is a well-established
    //  category of patentable technology (see: sensor fusion patents,
    //  multi-modal biometrics, multi-spectral imaging). The claim is
    //  directed at a specific fusion algorithm, not at the abstract
    //  idea of "combining information."
    //
    //  Patent framing: "A system for generating a multi-modal
    //  clinical reasoning profile, comprising: (a) a sequential
    //  reasoning module that generates a geometric fingerprint from
    //  a temporal action sequence; (b) a visual reasoning module
    //  that generates a visual reasoning fingerprint from image
    //  interpretation behaviors; (c) a fusion module that combines
    //  the sequential and visual fingerprints using adaptive
    //  weighting based on the clinical context; and (d) a unified
    //  distance metric for comparing multi-modal profiles."
    // ================================================================

    const MMRI = {
        // Visual reasoning dimensions (different from sequential)
        VISUAL_DIMENSIONS: {
            systematicScan: 'Follows systematic review pattern vs. random fixation',
            patternRecognition: 'Speed and accuracy of pattern identification',
            featureIntegration: 'Ability to combine multiple visual features',
            normalVariantTolerance: 'Distinguishing abnormal from normal variant',
            spatialReasoning: 'Understanding anatomic relationships in images',
            comparativeAnalysis: 'Ability to compare with prior/reference images'
        },

        /**
         * Generate a visual reasoning fingerprint from image interpretation
         * behavior data (gaze patterns, click sequences, annotation data).
         * 
         * In a full implementation, this would receive eye-tracking or
         * click-tracking data. Here we model it from behavioral proxies
         * available in the platform (where they clicked, what they
         * annotated, in what order, how quickly).
         */
        generateVisualFingerprint(interpretationSession) {
            if (!interpretationSession) return null;

            const actions = interpretationSession.actions || [];
            const annotations = interpretationSession.annotations || [];
            const timing = interpretationSession.timing || {};

            // Systematic scan score: did they follow a consistent review pattern?
            const systematicScan = this._scoreScanPattern(actions);

            // Pattern recognition: how quickly did they identify the key finding?
            const patternRecognition = this._scorePatternRecognition(actions, timing);

            // Feature integration: did they note multiple findings and connect them?
            const featureIntegration = this._scoreFeatureIntegration(annotations);

            // Normal variant tolerance: did they flag normal variants as abnormal?
            const normalVariantTolerance = this._scoreNormalVariant(annotations, interpretationSession.findings || []);

            // Spatial reasoning: accuracy of anatomic localization
            const spatialReasoning = this._scoreSpatialReasoning(annotations);

            // Comparative analysis: did they reference comparisons?
            const comparativeAnalysis = this._scoreComparative(actions, annotations);

            return {
                type: 'visual',
                modality: interpretationSession.modality || 'unknown', // ECG, CXR, CT, path, derm
                dimensions: {
                    systematicScan: +systematicScan.toFixed(1),
                    patternRecognition: +patternRecognition.toFixed(1),
                    featureIntegration: +featureIntegration.toFixed(1),
                    normalVariantTolerance: +normalVariantTolerance.toFixed(1),
                    spatialReasoning: +spatialReasoning.toFixed(1),
                    comparativeAnalysis: +comparativeAnalysis.toFixed(1)
                },
                _generatedAt: Date.now()
            };
        },

        // Scoring methods — simplified versions for patent demonstration
        _scoreScanPattern(actions) {
            if (actions.length < 3) return 50;
            // Check if actions follow a consistent spatial pattern
            const regions = actions.map(a => a.region || a.area || 'unknown');
            const uniqueRegions = new Set(regions);
            const coverage = uniqueRegions.size;
            const revisits = regions.length - uniqueRegions.size;
            // Good: high coverage, low revisits (systematic)
            return Math.min(100, (coverage * 15) - (revisits * 5));
        },

        _scorePatternRecognition(actions, timing) {
            const timeToFirstFinding = timing.firstFindingMs || timing.timeToFirstAnnotation || 30000;
            // Faster = better pattern recognition (up to a point)
            if (timeToFirstFinding < 5000) return 90; // Very fast
            if (timeToFirstFinding < 15000) return 75;
            if (timeToFirstFinding < 30000) return 60;
            if (timeToFirstFinding < 60000) return 40;
            return 25;
        },

        _scoreFeatureIntegration(annotations) {
            const findingCount = annotations.filter(a => a.type === 'finding').length;
            const connections = annotations.filter(a => a.type === 'connection' || a.linkedTo).length;
            if (findingCount === 0) return 30;
            return Math.min(100, 40 + (findingCount * 10) + (connections * 15));
        },

        _scoreNormalVariant(annotations, actualFindings) {
            if (annotations.length === 0) return 50;
            const falsePositives = annotations.filter(a => 
                a.type === 'finding' && !actualFindings.some(f => f.id === a.findingId)
            ).length;
            return Math.max(0, 100 - (falsePositives * 20));
        },

        _scoreSpatialReasoning(annotations) {
            const localized = annotations.filter(a => a.location || a.coordinates).length;
            const total = annotations.length || 1;
            return Math.min(100, (localized / total) * 100);
        },

        _scoreComparative(actions, annotations) {
            const comparisons = actions.filter(a => 
                (a.type || '').includes('compare') || (a.type || '').includes('prior')
            ).length;
            const compAnnotations = annotations.filter(a => 
                (a.text || '').toLowerCase().includes('compared') || 
                (a.text || '').toLowerCase().includes('prior') ||
                (a.text || '').toLowerCase().includes('change')
            ).length;
            return Math.min(100, 30 + (comparisons + compAnnotations) * 20);
        },

        /**
         * FUSION: Combine sequential and visual fingerprints into
         * a unified multi-modal profile.
         * 
         * The fusion weights are ADAPTIVE — they depend on the clinical
         * context. For a case that's primarily image-interpretation
         * (radiology, pathology, dermatology), the visual fingerprint
         * is weighted more heavily. For a case that's primarily
         * history-driven (internal medicine, psychiatry), the sequential
         * fingerprint dominates.
         * 
         * Patent framing: "...wherein the fusion module applies
         * context-adaptive weights to each modality fingerprint based
         * on the clinical domain and case characteristics."
         */
        fuse(sequentialFingerprint, visualFingerprint, caseContext) {
            if (!sequentialFingerprint && !visualFingerprint) return null;
            if (!visualFingerprint) return { type: 'sequential_only', fingerprint: sequentialFingerprint };
            if (!sequentialFingerprint) return { type: 'visual_only', fingerprint: visualFingerprint };

            // Adaptive weights based on case context
            const weights = this._computeModalityWeights(caseContext);

            // Extract dimension values
            const seqDims = {
                thoroughness: sequentialFingerprint.thoroughness || 0,
                flexibility: sequentialFingerprint.flexibility || 0,
                evidenceUse: sequentialFingerprint.evidenceUse || 0,
                adaptability: sequentialFingerprint.adaptability || 0,
                momentum: sequentialFingerprint.momentum || 0,
                metacognition: sequentialFingerprint.metacognition || 0
            };

            const visDims = visualFingerprint.dimensions || {};

            // Fused profile: weighted combination of both modalities
            // plus cross-modal dimensions that emerge from the combination
            const fused = {
                type: 'multi_modal',
                modalityWeights: weights,
                // Sequential dimensions (weighted)
                sequential: {},
                // Visual dimensions (weighted)
                visual: {},
                // Cross-modal dimensions (emergent)
                crossModal: {},
                overallQuality: 0,
                _fusedAt: Date.now()
            };

            // Weighted sequential
            for (const dim in seqDims) {
                fused.sequential[dim] = +(seqDims[dim] * weights.sequential).toFixed(1);
            }

            // Weighted visual
            for (const dim in visDims) {
                fused.visual[dim] = +((visDims[dim] || 0) * weights.visual).toFixed(1);
            }

            // Cross-modal emergent dimensions
            // These represent reasoning capabilities that only emerge when
            // both modalities are present
            fused.crossModal = {
                // Evidence integration: using visual findings to inform sequential reasoning
                evidenceIntegration: +(
                    (seqDims.evidenceUse / 100) * ((visDims.featureIntegration || 50) / 100) * 100
                ).toFixed(1),
                // Diagnostic coherence: visual interpretation aligns with clinical reasoning
                diagnosticCoherence: +(
                    (seqDims.flexibility / 100) * ((visDims.patternRecognition || 50) / 100) * 100
                ).toFixed(1),
                // Systematic completeness: both modalities show systematic approach
                systematicCompleteness: +(
                    (seqDims.thoroughness / 100) * ((visDims.systematicScan || 50) / 100) * 100
                ).toFixed(1)
            };

            // Overall quality: weighted mean of all dimensions
            const allScores = [
                ...Object.values(fused.sequential),
                ...Object.values(fused.visual),
                ...Object.values(fused.crossModal)
            ];
            fused.overallQuality = +(allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(1);

            return fused;
        },

        _computeModalityWeights(context) {
            const domain = (context?.domain || '').toLowerCase();
            const caseType = (context?.type || '').toLowerCase();

            // Image-heavy specialties weight visual higher
            const imageHeavy = ['radiology', 'pathology', 'dermatology', 'ophthalmology'];
            const balanced = ['emergency', 'surgery', 'cardiology', 'neurology'];
            // Everything else defaults to sequential-heavy

            if (imageHeavy.some(s => domain.includes(s))) {
                return { sequential: 0.35, visual: 0.65 };
            }
            if (balanced.some(s => domain.includes(s))) {
                return { sequential: 0.50, visual: 0.50 };
            }
            // Default: sequential-dominant
            return { sequential: 0.70, visual: 0.30 };
        },

        /**
         * Distance metric for multi-modal profiles.
         * Compares sequential, visual, and cross-modal components separately,
         * then combines into a composite distance.
         */
        multiModalDistance(profileA, profileB) {
            if (!profileA || !profileB) return null;

            const seqDist = this._dimensionDistance(profileA.sequential || {}, profileB.sequential || {});
            const visDist = this._dimensionDistance(profileA.visual || {}, profileB.visual || {});
            const crossDist = this._dimensionDistance(profileA.crossModal || {}, profileB.crossModal || {});

            return {
                sequentialDistance: seqDist,
                visualDistance: visDist,
                crossModalDistance: crossDist,
                compositeDistance: +(0.35 * seqDist + 0.35 * visDist + 0.30 * crossDist).toFixed(4),
                mostDivergentModality: seqDist > visDist 
                    ? (seqDist > crossDist ? 'sequential' : 'crossModal')
                    : (visDist > crossDist ? 'visual' : 'crossModal')
            };
        },

        _dimensionDistance(dimsA, dimsB) {
            const allKeys = new Set([...Object.keys(dimsA), ...Object.keys(dimsB)]);
            let sumSq = 0, count = 0;
            allKeys.forEach(k => {
                const diff = ((dimsA[k] || 0) - (dimsB[k] || 0)) / 100;
                sumSq += diff * diff;
                count++;
            });
            return count > 0 ? +(Math.sqrt(sumSq / count)).toFixed(4) : 0;
        }
    };


    // ================================================================
    //  PUBLIC API — Layer 4 Modules
    // ================================================================
    window.RDX_Layer4 = {
        RPMM,
        ACRE,
        CRTD,
        RPCA,
        REAP,
        MMRI,

        /**
         * Full Layer 4 pipeline: run all new analyses.
         */
        fullLayer4Analysis(sessions, currentAnalysis, caseLibrary, evidenceLog) {
            const results = {};

            // Build Markov model from session history
            if (sessions?.length >= 3) {
                const encodings = sessions.map(s => s.temporalEncoding).filter(Boolean);
                results.markovModel = RPMM.buildModel(encodings);
            }

            // Route next case
            if (currentAnalysis && caseLibrary?.length) {
                results.caseRecommendations = ACRE.selectNextCase(currentAnalysis, caseLibrary);
            }

            // Compress current analysis
            if (currentAnalysis) {
                results.compressedHash = RPCA.compress(currentAnalysis);
            }

            // Add to evidence chain
            if (currentAnalysis && evidenceLog) {
                const prevHash = evidenceLog.length > 0 
                    ? evidenceLog[evidenceLog.length - 1].chainHash : null;
                results.evidenceRecord = REAP.createEvidenceRecord(
                    currentAnalysis, prevHash, 'current_learner'
                );
            }

            return results;
        }
    };

})(window);
