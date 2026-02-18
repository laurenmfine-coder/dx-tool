/**
 * ReasonDx Patent Innovations Library — Enhanced
 * ================================================
 * ALICE-RESISTANT IMPLEMENTATION
 * 
 * This version implements technically specific algorithms that transform
 * raw interaction data into machine-analyzable representations through
 * novel data processing methods. Each component performs operations that
 * are computationally intensive and cannot be replicated by a human
 * with pen and paper at meaningful scale.
 * 
 * RPFS  - Reasoning Pathway Fingerprinting System
 * CRDA  - Collaborative Reasoning Divergence Analysis
 * LRDT  - Longitudinal Reasoning Development Tracking
 * MMD   - Metacognitive Moment Detection
 * EPE   - Expert Pathway Extraction
 * SAE   - Sequential Action Encoding (NEW — patent claim R2.1)
 * DTW   - Dynamic Time Warping pathway comparison (NEW)
 * AFC   - Adaptive Feedback Controller (NEW — closed-loop system)
 *
 * Key prefix: "rdx_" for all patent feature data.
 */

(function(window) {
    'use strict';

    const STORAGE_KEYS = {
        RPFS_SESSIONS: 'rdx_rpfs_sessions',
        RPFS_AGGREGATE: 'rdx_rpfs_aggregate',
        RPFS_FINGERPRINT_CACHE: 'rdx_rpfs_fingerprint_cache',
        CRDA_COMPARISONS: 'rdx_crda_comparisons',
        CRDA_EXPERT_PATHS: 'rdx_crda_expert_paths',
        LRDT_TOPIC_MASTERY: 'rdx_lrdt_topic_mastery',
        LRDT_SESSIONS_LOG: 'rdx_lrdt_sessions_log',
        LRDT_GROWTH_CURVES: 'rdx_lrdt_growth_curves',
        MMD_EVENTS: 'rdx_mmd_events',
        MMD_STATE_HISTORY: 'rdx_mmd_state_history',
        EPE_PATHWAYS: 'rdx_epe_expert_pathways',
        SAE_ENCODED_SESSIONS: 'rdx_sae_encoded',
        AFC_ADAPTATION_LOG: 'rdx_afc_adaptations'
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
    //  SAE — Sequential Action Encoding (Patent Claim R2.1)
    //  Concrete taxonomy + n-gram extraction + vector generation
    // ================================================================
    const SAE = {
        TAXONOMY: {
            100:'history_chief_complaint',101:'history_hpi_onset',102:'history_hpi_duration',
            103:'history_hpi_quality',104:'history_hpi_severity',105:'history_hpi_location',
            106:'history_hpi_radiation',107:'history_hpi_timing',108:'history_hpi_context',
            109:'history_hpi_modifying',110:'history_hpi_associated',111:'history_past_medical',
            112:'history_medications',113:'history_allergies',114:'history_family',
            115:'history_social',116:'history_surgical',117:'history_review_systems',
            120:'exam_vitals',121:'exam_general_appearance',122:'exam_heent',
            123:'exam_cardiovascular',124:'exam_pulmonary',125:'exam_abdominal',
            126:'exam_neurological',127:'exam_musculoskeletal',128:'exam_skin',
            129:'exam_psychiatric',130:'exam_genitourinary',
            140:'lab_cbc',141:'lab_cmp',142:'lab_coagulation',143:'lab_urinalysis',
            144:'lab_blood_gas',145:'lab_cardiac_enzymes',146:'lab_liver_panel',
            147:'lab_thyroid',148:'lab_inflammatory',149:'lab_cultures',150:'lab_toxicology',
            160:'imaging_xray',161:'imaging_ct',162:'imaging_mri',163:'imaging_ultrasound',
            164:'imaging_echocardiogram',165:'imaging_nuclear',
            170:'procedure_ecg',171:'procedure_lumbar_puncture',172:'procedure_paracentesis',
            173:'procedure_thoracentesis',174:'procedure_biopsy',
            200:'dx_add_hypothesis',201:'dx_remove_hypothesis',202:'dx_promote_hypothesis',
            203:'dx_demote_hypothesis',204:'dx_reorder_differential',205:'dx_set_leading_diagnosis',
            206:'dx_lock_diagnosis',210:'dx_request_confirmation_test',211:'dx_request_exclusion_test',
            300:'tx_medication_order',301:'tx_iv_fluid',302:'tx_oxygen',303:'tx_procedure',
            304:'tx_consult',305:'tx_disposition_admit',306:'tx_disposition_discharge',307:'tx_monitoring',
            400:'meta_confidence_update',401:'meta_uncertainty_expressed',402:'meta_differential_review',
            403:'meta_why_chain_initiated',404:'meta_hypothesis_challenged',405:'meta_evidence_weighed',
            406:'meta_timeout_reflection',407:'meta_strategy_shift'
        },

        encodeAction(rawAction) {
            if (!rawAction) return null;
            const type = (rawAction.type || rawAction.action_type || '').toLowerCase();
            const target = (rawAction.target || rawAction.item || '').toLowerCase();
            for (const [code, label] of Object.entries(this.TAXONOMY)) {
                const parts = label.split('_');
                const category = parts[0];
                const subcategory = parts.slice(1).join('_');
                if (type.includes(category) && (target.includes(subcategory) || type.includes(subcategory))) {
                    return parseInt(code);
                }
            }
            if (type.includes('history') || type.includes('hpi') || type.includes('subjective')) return 100;
            if (type.includes('exam') || type.includes('physical')) return 120;
            if (type.includes('lab') || type.includes('test') || type.includes('order')) return 140;
            if (type.includes('imaging') || type.includes('xray') || type.includes('ct') || type.includes('mri')) return 160;
            if (type.includes('diagnosis') || type.includes('differential') || type.includes('hypothesis')) return 200;
            if (type.includes('treat') || type.includes('medication') || type.includes('prescri')) return 300;
            if (type.includes('confidence') || type.includes('reflect') || type.includes('meta') || type.includes('why')) return 400;
            return null;
        },

        encodeSession(actions) {
            if (!actions || !actions.length) return null;
            const startTime = actions[0].timestamp || 0;
            const encoded = { sequence: [], timestamps: [], durations: [], raw_count: actions.length, encoded_count: 0 };
            actions.forEach((action, i) => {
                const code = this.encodeAction(action);
                if (code !== null) {
                    encoded.sequence.push(code);
                    encoded.timestamps.push((action.timestamp || 0) - startTime);
                    encoded.durations.push(action.duration || (i < actions.length - 1 ? (actions[i+1].timestamp || 0) - (action.timestamp || 0) : 0));
                    encoded.encoded_count++;
                }
            });
            const counts = { info: 0, dx: 0, tx: 0, meta: 0 };
            encoded.sequence.forEach(code => { if (code < 200) counts.info++; else if (code < 300) counts.dx++; else if (code < 400) counts.tx++; else counts.meta++; });
            const total = encoded.sequence.length || 1;
            encoded.categoryProfile = {
                informationGathering: +(counts.info / total).toFixed(3),
                diagnosticReasoning: +(counts.dx / total).toFixed(3),
                therapeuticAction: +(counts.tx / total).toFixed(3),
                metacognitive: +(counts.meta / total).toFixed(3)
            };
            encoded.sequenceHash = this._hashSequence(encoded.sequence);
            return encoded;
        },

        extractNGrams(sequence, nValues = [2, 3, 4]) {
            const ngrams = {};
            const totalCounts = {};
            nValues.forEach(n => {
                totalCounts[n] = 0;
                for (let i = 0; i <= sequence.length - n; i++) {
                    const gram = sequence.slice(i, i + n).join('-');
                    ngrams[gram] = (ngrams[gram] || 0) + 1;
                    totalCounts[n]++;
                }
            });
            const normalized = {};
            for (const [gram, count] of Object.entries(ngrams)) {
                const n = gram.split('-').length;
                normalized[gram] = +(count / (totalCounts[n] || 1)).toFixed(4);
            }
            return normalized;
        },

        ngramToVector(ngramProfile, vocabularySize = 64) {
            const sorted = Object.entries(ngramProfile).sort((a, b) => b[1] - a[1]).slice(0, vocabularySize);
            const vector = new Array(vocabularySize).fill(0);
            sorted.forEach(([gram, freq], i) => { vector[i] = freq; });
            const magnitude = Math.sqrt(vector.reduce((sum, v) => sum + v * v, 0));
            if (magnitude > 0) { for (let i = 0; i < vector.length; i++) vector[i] = +(vector[i] / magnitude).toFixed(6); }
            return vector;
        },

        _hashSequence(sequence) {
            let hash = 0;
            const str = sequence.join(',');
            for (let i = 0; i < str.length; i++) { const char = str.charCodeAt(i); hash = ((hash << 5) - hash) + char; hash = hash & hash; }
            return Math.abs(hash).toString(36);
        },

        extractTemporalNGrams(sequence, timestamps, n = 3) {
            const temporalGrams = {};
            for (let i = 0; i <= sequence.length - n; i++) {
                const gram = sequence.slice(i, i + n).join('-');
                let totalGap = 0;
                for (let j = 1; j < n; j++) totalGap += (timestamps[i + j] || 0) - (timestamps[i + j - 1] || 0);
                const meanGap = totalGap / (n - 1);
                const coupling = 1 / (1 + Math.exp((meanGap - 5000) / 2000));
                if (!temporalGrams[gram]) temporalGrams[gram] = { count: 0, totalCoupling: 0, avgCoupling: 0 };
                temporalGrams[gram].count++;
                temporalGrams[gram].totalCoupling += coupling;
                temporalGrams[gram].avgCoupling = +(temporalGrams[gram].totalCoupling / temporalGrams[gram].count).toFixed(4);
            }
            return temporalGrams;
        }
    };

    // ================================================================
    //  DTW — Dynamic Time Warping for Expert Pathway Comparison
    // ================================================================
    const DTW = {
        compute(seqA, seqB, costFn) {
            if (!seqA || !seqB || seqA.length === 0 || seqB.length === 0) return { distance: Infinity, path: [], alignmentScore: 0 };
            const n = seqA.length, m = seqB.length;
            const cost = costFn || this._defaultCost;
            const dtw = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(Infinity));
            dtw[0][0] = 0;
            for (let i = 1; i <= n; i++) {
                for (let j = 1; j <= m; j++) {
                    const c = cost(seqA[i-1], seqB[j-1]);
                    dtw[i][j] = c + Math.min(dtw[i-1][j], dtw[i][j-1], dtw[i-1][j-1]);
                }
            }
            const path = this._backtrack(dtw, n, m);
            const rawDistance = dtw[n][m];
            const normalizedDistance = rawDistance / path.length;
            const alignmentScore = Math.max(0, Math.round((1 - normalizedDistance / 4) * 100));
            return { distance: +normalizedDistance.toFixed(4), rawDistance: +rawDistance.toFixed(4), path, pathLength: path.length, alignmentScore };
        },

        _defaultCost(codeA, codeB) {
            if (codeA === codeB) return 0;
            if (Math.floor(codeA / 10) === Math.floor(codeB / 10)) return 0.5;
            const catA = Math.floor(codeA / 100), catB = Math.floor(codeB / 100);
            if (catA === catB) return 1;
            return Math.min(4, Math.abs(catA - catB) * 1.5);
        },

        _backtrack(dtw, n, m) {
            const path = []; let i = n, j = m; path.push([i, j]);
            while (i > 1 || j > 1) {
                if (i === 1) { j--; } else if (j === 1) { i--; }
                else {
                    const c = [{ cost: dtw[i-1][j-1], ni: i-1, nj: j-1 }, { cost: dtw[i-1][j], ni: i-1, nj: j }, { cost: dtw[i][j-1], ni: i, nj: j-1 }];
                    c.sort((a, b) => a.cost - b.cost);
                    i = c[0].ni; j = c[0].nj;
                }
                path.unshift([i, j]);
            }
            return path;
        },

        compareToExpert(studentEncoding, expertEncoding) {
            if (!studentEncoding?.sequence || !expertEncoding?.sequence) return null;
            const result = this.compute(studentEncoding.sequence, expertEncoding.sequence);
            const divergences = [];
            result.path.forEach(([si, ei]) => {
                if (si > 0 && ei > 0) {
                    const sCat = Math.floor(studentEncoding.sequence[si-1] / 100);
                    const eCat = Math.floor(expertEncoding.sequence[ei-1] / 100);
                    if (sCat !== eCat) divergences.push({ studentStep: si, expertStep: ei, studentAction: studentEncoding.sequence[si-1], expertAction: expertEncoding.sequence[ei-1], type: sCat < eCat ? 'student_behind' : 'student_ahead' });
                }
            });
            return { ...result, divergencePoints: divergences, divergenceRate: +(divergences.length / result.path.length).toFixed(3) };
        }
    };

    // ================================================================
    //  RPFS — Reasoning Pathway Fingerprinting System (Enhanced)
    // ================================================================
    const RPFS = {
        saveSession(report) {
            if (!report || !report.session) return false;
            const sessions = safeGet(STORAGE_KEYS.RPFS_SESSIONS, []);
            report._savedAt = Date.now();
            report._id = `rpfs_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
            if (report.dataGathering?.sequence || report.actions) {
                const rawActions = report.actions || report.dataGathering.sequence || [];
                report._saeEncoding = SAE.encodeSession(rawActions);
                if (report._saeEncoding && report._saeEncoding.sequence.length >= 3) {
                    report._ngramProfile = SAE.extractNGrams(report._saeEncoding.sequence);
                    report._ngramVector = SAE.ngramToVector(report._ngramProfile);
                    report._temporalNGrams = SAE.extractTemporalNGrams(report._saeEncoding.sequence, report._saeEncoding.timestamps);
                }
            }
            report._fingerprint = this._generateSessionFingerprint(report);
            sessions.push(report);
            if (sessions.length > 200) sessions.splice(0, sessions.length - 200);
            safeSet(STORAGE_KEYS.RPFS_SESSIONS, sessions);
            this.updateAggregate(sessions);
            LRDT.recordSession(report);
            AFC.onSessionComplete(report);
            return report._id;
        },

        /**
         * 15-DIMENSIONAL FINGERPRINT GENERATION
         * Dim 0-4:   Cognitive bias indicators (sigmoid-normalized)
         * Dim 5-7:   Temporal reasoning profile
         * Dim 8-10:  Information gathering strategy
         * Dim 11-12: Hypothesis management style
         * Dim 13-14: Metacognitive engagement
         */
        _generateSessionFingerprint(report) {
            const fp = new Array(15).fill(0);
            const cp = report.cognitivePatterns || {};
            const he = report.hypothesisEvolution || {};
            const mc = report.metacognition || {};
            const sae = report._saeEncoding || {};
            const timing = report.session || {};

            fp[0] = this._sigmoid(100 - (cp.prematureClosureScore || 50), 50, 15);
            fp[1] = this._sigmoid(100 - (cp.anchoringScore || 50), 50, 15);
            fp[2] = this._sigmoid(100 - (cp.diagnosticMomentumScore || 50), 50, 15);
            fp[3] = this._sigmoid(100 - (cp.confirmationBiasScore || 50), 50, 15);
            fp[4] = this._sigmoid(cp.hypothesisFlexibilityScore || 50, 50, 15);

            const duration = timing.duration || 60000;
            const earlyActions = (sae.timestamps || []).filter(t => t < duration * 0.33).length;
            const totalActions = (sae.timestamps || []).length || 1;
            fp[5] = this._sigmoid(earlyActions / totalActions * 100, 40, 20);

            const gaps = [];
            const ts = sae.timestamps || [];
            for (let i = 1; i < ts.length; i++) gaps.push(ts[i] - ts[i-1]);
            if (gaps.length > 2) {
                const meanGap = gaps.reduce((a,b) => a+b, 0) / gaps.length;
                const variance = gaps.reduce((s, g) => s + (g - meanGap) ** 2, 0) / gaps.length;
                const cv = meanGap > 0 ? Math.sqrt(variance) / meanGap : 1;
                fp[6] = this._sigmoid(100 - cv * 50, 50, 20);
            }

            fp[7] = this._sigmoid((sae.categoryProfile?.diagnosticReasoning || 0) * 200, 30, 15);

            const uniqueCategories = new Set([...(sae.sequence || [])].map(c => Math.floor(c / 10) * 10));
            fp[8] = this._sigmoid(uniqueCategories.size * 10, 40, 15);
            fp[9] = this._sigmoid(((report.dataGathering?.relevantActions || totalActions) / totalActions) * 100, 60, 20);

            const categorySeq = (sae.sequence || []).map(c => Math.floor(c / 100));
            let transitions = 0;
            for (let i = 1; i < categorySeq.length; i++) { if (categorySeq[i] !== categorySeq[i-1]) transitions++; }
            const transitionRate = categorySeq.length > 1 ? transitions / (categorySeq.length - 1) : 0;
            fp[10] = Math.max(0, Math.min(1, 1 - Math.abs(transitionRate - 0.4) * 2));

            const snapshots = he.snapshots || [];
            const avgDiffSize = snapshots.length > 0 ? snapshots.reduce((s, snap) => s + (snap.differential?.length || 0), 0) / snapshots.length : 1;
            fp[11] = Math.max(0, Math.min(1, 1 - Math.abs(avgDiffSize - 4) * 0.2));

            const pivots = (he.pivotPoints || []).length;
            const newInfoCount = (sae.sequence || []).filter(c => c >= 140 && c < 200).length || 1;
            fp[12] = this._sigmoid(pivots / newInfoCount * 100, 30, 15);

            fp[13] = this._sigmoid((mc.momentsDetected || 0) * 20, 40, 15);

            const metaActions = (sae.sequence || []).reduce((idx, code, i) => { if (code >= 400) idx.push(i); return idx; }, []);
            const dxActions = (sae.sequence || []).reduce((idx, code, i) => { if (code >= 200 && code < 300) idx.push(i); return idx; }, []);
            if (metaActions.length > 0 && dxActions.length > 0) {
                let nearDx = 0;
                metaActions.forEach(mi => { if (dxActions.some(di => Math.abs(mi - di) <= 2)) nearDx++; });
                fp[14] = nearDx / metaActions.length;
            }

            return fp.map(v => +v.toFixed(4));
        },

        _sigmoid(x, center, steepness) {
            return +(1 / (1 + Math.exp(-(x - center) / steepness))).toFixed(4);
        },

        updateAggregate(sessions) {
            if (!sessions || sessions.length === 0) return;
            const agg = {
                totalSessions: sessions.length, lastUpdated: Date.now(),
                biasProfile: { prematureClosure: 0, anchoring: 0, diagnosticMomentum: 0, confirmationBias: 0, hypothesisFlexibility: 0 },
                avgReasoningScore: 0, reasoningScoreTrend: [], avgSessionDuration: 0,
                avgPivotPoints: 0, avgDifferentialSize: 0, avgDataActions: 0, avgMetacogMoments: 0,
                casePerformance: {},
                aggregateFingerprint: new Array(15).fill(0),
                fingerprintVariance: new Array(15).fill(0),
                aggregateNGramProfile: {},
                reasoningStyleLabel: null, reasoningStyleConfidence: 0
            };
            let biasCount = 0, fpCount = 0;
            const allFingerprints = [];
            sessions.forEach((s, i) => {
                if (s.reasoningQualityScore != null) {
                    agg.avgReasoningScore += s.reasoningQualityScore;
                    agg.reasoningScoreTrend.push({ session: i + 1, score: s.reasoningQualityScore, caseId: s.session?.caseId, date: s.session?.startTime || s._savedAt });
                }
                if (s.cognitivePatterns) {
                    biasCount++;
                    agg.biasProfile.prematureClosure += s.cognitivePatterns.prematureClosureScore || 0;
                    agg.biasProfile.anchoring += s.cognitivePatterns.anchoringScore || 0;
                    agg.biasProfile.diagnosticMomentum += s.cognitivePatterns.diagnosticMomentumScore || 0;
                    agg.biasProfile.confirmationBias += s.cognitivePatterns.confirmationBiasScore || 0;
                    agg.biasProfile.hypothesisFlexibility += s.cognitivePatterns.hypothesisFlexibilityScore || 0;
                }
                if (s.session?.duration) agg.avgSessionDuration += s.session.duration;
                if (s.hypothesisEvolution?.pivotPoints) agg.avgPivotPoints += s.hypothesisEvolution.pivotPoints.length;
                if (s.dataGathering?.totalActions) agg.avgDataActions += s.dataGathering.totalActions;
                if (s.metacognition?.momentsDetected) agg.avgMetacogMoments += s.metacognition.momentsDetected;
                if (s._fingerprint && s._fingerprint.length === 15) {
                    fpCount++; allFingerprints.push(s._fingerprint);
                    for (let d = 0; d < 15; d++) agg.aggregateFingerprint[d] += s._fingerprint[d];
                }
                if (s._ngramProfile) { for (const [gram, freq] of Object.entries(s._ngramProfile)) agg.aggregateNGramProfile[gram] = (agg.aggregateNGramProfile[gram] || 0) + freq; }
                const caseId = s.session?.caseId || 'unknown';
                if (!agg.casePerformance[caseId]) agg.casePerformance[caseId] = { attempts: 0, scores: [], avgScore: 0 };
                agg.casePerformance[caseId].attempts++;
                if (s.reasoningQualityScore != null) agg.casePerformance[caseId].scores.push(s.reasoningQualityScore);
            });
            const n = sessions.length;
            if (biasCount > 0) { for (const k in agg.biasProfile) agg.biasProfile[k] = Math.round(agg.biasProfile[k] / biasCount); }
            agg.avgReasoningScore = Math.round(agg.avgReasoningScore / n);
            agg.avgSessionDuration = Math.round(agg.avgSessionDuration / n);
            agg.avgPivotPoints = +(agg.avgPivotPoints / n).toFixed(1);
            agg.avgDataActions = Math.round(agg.avgDataActions / n);
            agg.avgMetacogMoments = +(agg.avgMetacogMoments / n).toFixed(1);
            if (fpCount > 0) {
                for (let d = 0; d < 15; d++) agg.aggregateFingerprint[d] = +(agg.aggregateFingerprint[d] / fpCount).toFixed(4);
                for (let d = 0; d < 15; d++) { const mean = agg.aggregateFingerprint[d]; agg.fingerprintVariance[d] = +(allFingerprints.reduce((s, fp) => s + (fp[d] - mean) ** 2, 0) / fpCount).toFixed(4); }
                const style = this._classifyReasoningStyle(agg.aggregateFingerprint);
                agg.reasoningStyleLabel = style.label; agg.reasoningStyleConfidence = style.confidence;
            }
            const gramTotal = Object.values(agg.aggregateNGramProfile).reduce((s, v) => s + v, 0) || 1;
            for (const gram in agg.aggregateNGramProfile) agg.aggregateNGramProfile[gram] = +(agg.aggregateNGramProfile[gram] / gramTotal).toFixed(6);
            for (const c in agg.casePerformance) { const cp = agg.casePerformance[c]; cp.avgScore = cp.scores.length ? Math.round(cp.scores.reduce((a,b) => a+b, 0) / cp.scores.length) : 0; }
            safeSet(STORAGE_KEYS.RPFS_AGGREGATE, agg);
            return agg;
        },

        _classifyReasoningStyle(fingerprint) {
            const archetypes = {
                systematic:  [0.8, 0.7, 0.7, 0.8, 0.7, 0.7, 0.8, 0.5, 0.8, 0.7, 0.8, 0.7, 0.5, 0.6, 0.5],
                intuitive:   [0.6, 0.5, 0.6, 0.5, 0.8, 0.8, 0.5, 0.6, 0.5, 0.6, 0.4, 0.5, 0.8, 0.4, 0.3],
                analytical:  [0.7, 0.8, 0.8, 0.7, 0.6, 0.5, 0.7, 0.8, 0.6, 0.8, 0.6, 0.4, 0.6, 0.7, 0.7],
                exploratory: [0.5, 0.4, 0.5, 0.4, 0.9, 0.4, 0.4, 0.4, 0.9, 0.5, 0.7, 0.9, 0.7, 0.9, 0.8],
                anchored:    [0.2, 0.2, 0.3, 0.2, 0.3, 0.7, 0.6, 0.3, 0.3, 0.4, 0.2, 0.2, 0.2, 0.2, 0.1]
            };
            let bestLabel = 'unclassified', bestSim = -1;
            for (const [label, archetype] of Object.entries(archetypes)) {
                const sim = this.cosineSimilarity(fingerprint, archetype);
                if (sim > bestSim) { bestSim = sim; bestLabel = label; }
            }
            return { label: bestLabel, confidence: +bestSim.toFixed(3) };
        },

        cosineSimilarity(vecA, vecB) {
            if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
            let dot = 0, magA = 0, magB = 0;
            for (let i = 0; i < vecA.length; i++) { dot += vecA[i] * vecB[i]; magA += vecA[i] ** 2; magB += vecB[i] ** 2; }
            const denom = Math.sqrt(magA) * Math.sqrt(magB);
            return denom > 0 ? dot / denom : 0;
        },

        euclideanDistance(fpA, fpB) {
            if (!fpA || !fpB || fpA.length !== fpB.length) return Infinity;
            return Math.sqrt(fpA.reduce((sum, a, i) => sum + (a - fpB[i]) ** 2, 0));
        },

        generateFingerprint() {
            const agg = this.getAggregate();
            if (!agg || !agg.aggregateFingerprint) return null;
            const fp = agg.aggregateFingerprint;
            return {
                thoroughness: Math.round(fp[0] * 100), flexibility: Math.round(fp[4] * 100),
                evidenceUse: Math.round(fp[3] * 100), adaptability: Math.round(fp[1] * 100),
                momentum: Math.round(fp[2] * 100), metacognition: Math.round(fp[13] * 100),
                overallQuality: agg.avgReasoningScore,
                reasoningStyle: agg.reasoningStyleLabel, styleConfidence: agg.reasoningStyleConfidence,
                _rawVector: fp, _variance: agg.fingerprintVariance, _sessionCount: agg.totalSessions,
                _dimensions: ['bias_premature_closure','bias_anchoring','bias_momentum','bias_confirmation',
                    'hypothesis_flexibility','temporal_front_loading','temporal_consistency','deliberation_ratio',
                    'gathering_breadth','gathering_efficiency','systematic_coverage',
                    'differential_appropriateness','pivot_responsiveness','metacog_density','metacog_timing']
            };
        },

        getAggregate() { return safeGet(STORAGE_KEYS.RPFS_AGGREGATE, null); },
        getSessions() { return safeGet(STORAGE_KEYS.RPFS_SESSIONS, []); },
        getRecentSessions(n = 10) { return this.getSessions().slice(-n); },
        clearAll() { localStorage.removeItem(STORAGE_KEYS.RPFS_SESSIONS); localStorage.removeItem(STORAGE_KEYS.RPFS_AGGREGATE); localStorage.removeItem(STORAGE_KEYS.RPFS_FINGERPRINT_CACHE); }
    };

    // ================================================================
    //  AFC — Adaptive Feedback Controller (Closed-Loop System)
    //  Critical for Alice defense: the system modifies how the
    //  computer itself operates based on computed analysis results.
    // ================================================================
    const AFC = {
        onSessionComplete(report) {
            const adaptations = this._computeAdaptations(report);
            if (adaptations.length === 0) return;
            const log = safeGet(STORAGE_KEYS.AFC_ADAPTATION_LOG, []);
            log.push({ sessionId: report._id, caseId: report.session?.caseId, timestamp: Date.now(), adaptations, fingerprint: report._fingerprint });
            if (log.length > 100) log.splice(0, log.length - 100);
            safeSet(STORAGE_KEYS.AFC_ADAPTATION_LOG, log);
            safeSet('rdx_afc_active', adaptations);
        },

        _computeAdaptations(report) {
            const adaptations = [];
            const fp = report._fingerprint;
            if (!fp || fp.length < 15) return adaptations;

            if (fp[0] < 0.3) adaptations.push({ type: 'mmd_threshold_adjust', parameter: 'prematureClosureThreshold', value: 1, reason: 'Detected pattern of premature diagnostic closure', confidence: +(1 - fp[0]).toFixed(2) });
            if (fp[9] < 0.4) adaptations.push({ type: 'case_hint_frequency', parameter: 'targetedHintRate', value: 'increased', reason: 'Student gathering many low-yield data points', confidence: +(1 - fp[9]).toFixed(2) });

            const agg = RPFS.getAggregate();
            if (agg && agg.reasoningScoreTrend && agg.reasoningScoreTrend.length >= 3) {
                const recent = agg.reasoningScoreTrend.slice(-3);
                const trend = recent[2].score - recent[0].score;
                if (trend > 15) adaptations.push({ type: 'case_complexity_adjust', parameter: 'recommendedDifficulty', value: 'increase', reason: 'Positive score trend — ready for more complexity', confidence: Math.min(0.9, trend / 30) });
                else if (trend < -10) adaptations.push({ type: 'case_complexity_adjust', parameter: 'recommendedDifficulty', value: 'decrease', reason: 'Declining performance — consolidate', confidence: Math.min(0.9, Math.abs(trend) / 30) });
            }

            if (fp[13] < 0.3 && fp[14] < 0.3) adaptations.push({ type: 'metacognitive_scaffold', parameter: 'forcedReflectionPoints', value: ['after_initial_data', 'before_final_diagnosis'], reason: 'Low spontaneous metacognition', confidence: +(1 - (fp[13] + fp[14]) / 2).toFixed(2) });

            if (report.session?.caseId) {
                const mastery = safeGet(STORAGE_KEYS.LRDT_TOPIC_MASTERY, {});
                const cm = mastery[report.session.caseId];
                if (cm && cm.learningRate < 0) adaptations.push({ type: 'spaced_rep_adjust', parameter: 'reviewInterval', value: 'shorten', caseId: report.session.caseId, reason: 'Negative learning rate', confidence: Math.min(0.9, Math.abs(cm.learningRate) / 5) });
            }

            return adaptations;
        },

        getActiveAdaptations() { return safeGet('rdx_afc_active', []); },
        getAdaptationLog() { return safeGet(STORAGE_KEYS.AFC_ADAPTATION_LOG, []); },
        clearAll() { localStorage.removeItem(STORAGE_KEYS.AFC_ADAPTATION_LOG); localStorage.removeItem('rdx_afc_active'); }
    };

    // ================================================================
    //  CRDA — Collaborative Reasoning Divergence Analysis (Enhanced)
    // ================================================================
    const CRDA = {
        analyzeDivergence(sessionA, sessionB) {
            if (!sessionA || !sessionB) return null;
            const result = { caseId: sessionA.session?.caseId || sessionB.session?.caseId, analyzedAt: Date.now(), studentA: sessionA._id, studentB: sessionB._id, divergencePoints: [], divergenceScore: 0, pedagogicalPrompts: [], convergencePoints: [], influenceOpportunities: [], fingerprintSimilarity: 0, pathwayAlignmentScore: 0, ngramOverlap: 0 };

            if (sessionA._fingerprint && sessionB._fingerprint) result.fingerprintSimilarity = +RPFS.cosineSimilarity(sessionA._fingerprint, sessionB._fingerprint).toFixed(3);

            if (sessionA._saeEncoding && sessionB._saeEncoding) {
                const dtwResult = DTW.compute(sessionA._saeEncoding.sequence, sessionB._saeEncoding.sequence);
                result.pathwayAlignmentScore = dtwResult.alignmentScore;
                dtwResult.path.forEach(([si, ei]) => {
                    if (si > 0 && ei > 0) {
                        const sCat = Math.floor(sessionA._saeEncoding.sequence[si-1] / 100);
                        const eCat = Math.floor(sessionB._saeEncoding.sequence[ei-1] / 100);
                        if (sCat !== eCat) result.divergencePoints.push({ type: 'pathway_divergence', stepA: si, stepB: ei, actionA: sessionA._saeEncoding.sequence[si-1], actionB: sessionB._saeEncoding.sequence[ei-1], significance: Math.abs(sCat - eCat) >= 2 ? 'high' : 'moderate' });
                    }
                });
            }

            if (sessionA._ngramProfile && sessionB._ngramProfile) {
                const gramsA = new Set(Object.keys(sessionA._ngramProfile));
                const gramsB = new Set(Object.keys(sessionB._ngramProfile));
                const intersection = [...gramsA].filter(g => gramsB.has(g));
                const union = new Set([...gramsA, ...gramsB]);
                result.ngramOverlap = +(intersection.length / (union.size || 1)).toFixed(3);
            }

            const snapsA = sessionA.hypothesisEvolution?.snapshots || [], snapsB = sessionB.hypothesisEvolution?.snapshots || [];
            const stagesA = {}, stagesB = {};
            snapsA.forEach(s => { if (s.stage) stagesA[s.stage] = s; }); snapsB.forEach(s => { if (s.stage) stagesB[s.stage] = s; });
            new Set([...Object.keys(stagesA), ...Object.keys(stagesB)]).forEach(stage => {
                const a = stagesA[stage], b = stagesB[stage];
                if (a && b && a.differential && b.differential) {
                    const topA = a.differential[0]?.name || '', topB = b.differential[0]?.name || '';
                    if (topA && topB && topA.toLowerCase() !== topB.toLowerCase()) result.divergencePoints.push({ type: 'hypothesis_divergence', stage, studentA_top: topA, studentB_top: topB, significance: 'high' });
                    else if (topA === topB) result.convergencePoints.push({ stage, sharedTopDx: topA });
                }
            });

            const confA = sessionA.confidence?.trajectory || [], confB = sessionB.confidence?.trajectory || [];
            if (confA.length > 0 && confB.length > 0) {
                const fA = confA[confA.length-1]?.confidence || 50, fB = confB[confB.length-1]?.confidence || 50;
                if (Math.abs(fA - fB) > 25) result.divergencePoints.push({ type: 'confidence_divergence', studentA_final: fA, studentB_final: fB, delta: Math.abs(fA - fB), significance: Math.abs(fA - fB) > 40 ? 'high' : 'moderate' });
            }

            const highDiv = result.divergencePoints.filter(d => d.significance === 'high').length;
            const modDiv = result.divergencePoints.filter(d => d.significance === 'moderate').length;
            result.divergenceScore = Math.min(100, Math.round(highDiv * 15 + modDiv * 5 + (1 - result.fingerprintSimilarity) * 30 + (100 - result.pathwayAlignmentScore) * 0.3));

            result.pedagogicalPrompts = this._generatePrompts(result);
            result.influenceOpportunities = this._identifyInfluenceOpportunities(sessionA, sessionB, result);

            const comparisons = safeGet(STORAGE_KEYS.CRDA_COMPARISONS, []);
            comparisons.push(result); if (comparisons.length > 100) comparisons.splice(0, comparisons.length - 100);
            safeSet(STORAGE_KEYS.CRDA_COMPARISONS, comparisons);
            return result;
        },

        _generatePrompts(result) {
            const prompts = [];
            result.divergencePoints.forEach(dp => {
                if (dp.type === 'hypothesis_divergence') prompts.push({ type: 'hypothesis_discussion', stage: dp.stage, prompt: `At the ${dp.stage} stage, you prioritized "${dp.studentA_top}" while your partner prioritized "${dp.studentB_top}". What specific evidence led each of you to your primary hypothesis?`, learningObjective: 'Explore diagnostic reasoning diversity' });
                if (dp.type === 'pathway_divergence' && dp.significance === 'high') {
                    const catNames = { 1: 'information gathering', 2: 'diagnostic reasoning', 3: 'treatment', 4: 'metacognition' };
                    prompts.push({ type: 'strategy_comparison', prompt: `At this point, you were focused on ${catNames[dp.categoryA] || 'one activity'} while your partner was doing ${catNames[dp.categoryB] || 'something different'}. What drove your decision?`, learningObjective: 'Compare reasoning strategies' });
                }
            });
            if (result.ngramOverlap < 0.3) prompts.push({ type: 'approach_discussion', prompt: 'Your reasoning sequences were quite different. Walk each other through your thought process step by step.', learningObjective: 'Recognize multiple valid reasoning paths' });
            return prompts;
        },

        _identifyInfluenceOpportunities(sessionA, sessionB, result) {
            const opportunities = [];
            const scoreA = sessionA.reasoningQualityScore || 0, scoreB = sessionB.reasoningQualityScore || 0;
            if (Math.abs(scoreA - scoreB) > 15) {
                const stronger = scoreA > scoreB ? 'A' : 'B';
                opportunities.push({ type: 'peer_learning', strongerStudent: stronger, scoreDelta: Math.abs(scoreA - scoreB), fingerprintSimilarity: result.fingerprintSimilarity,
                    recommendation: result.fingerprintSimilarity < 0.5 ? 'Very different reasoning styles — high-value peer learning opportunity' : 'Similar styles but different outcomes — targeted skill gap likely' });
            }
            return opportunities;
        },

        compareToExpert(studentSession, expertPathway) {
            if (!expertPathway) return null;
            if (studentSession._saeEncoding && expertPathway._saeEncoding) return DTW.compareToExpert(studentSession._saeEncoding, expertPathway._saeEncoding);
            const result = { alignmentScore: 0, divergenceFromExpert: [], matchedDecisions: 0, totalExpertDecisions: expertPathway.keyDecisionPoints?.length || 0 };
            const studentSnaps = studentSession.hypothesisEvolution?.snapshots || [];
            (expertPathway.keyDecisionPoints || []).forEach(edp => {
                const ss = studentSnaps.find(s => s.stage === edp.stage);
                if (ss) { const st = ss.differential?.[0]?.name?.toLowerCase() || '', et = (edp.expectedDiagnosis || '').toLowerCase(); if (st === et || st.includes(et) || et.includes(st)) result.matchedDecisions++; else result.divergenceFromExpert.push({ stage: edp.stage, expertExpected: edp.expectedDiagnosis, studentHad: ss.differential?.[0]?.name }); }
            });
            result.alignmentScore = result.totalExpertDecisions > 0 ? Math.round((result.matchedDecisions / result.totalExpertDecisions) * 100) : 0;
            return result;
        },

        getComparisons() { return safeGet(STORAGE_KEYS.CRDA_COMPARISONS, []); },
        clearAll() { localStorage.removeItem(STORAGE_KEYS.CRDA_COMPARISONS); }
    };

    // ================================================================
    //  LRDT — Longitudinal Reasoning Development Tracking
    // ================================================================
    const LRDT = {
        recordSession(rpfsReport) {
            const caseId = rpfsReport.session?.caseId || 'unknown';
            const score = rpfsReport.reasoningQualityScore || 0;
            const biases = rpfsReport.cognitivePatterns || {};
            const timestamp = rpfsReport._savedAt || Date.now();
            const log = safeGet(STORAGE_KEYS.LRDT_SESSIONS_LOG, []);
            const entry = { caseId, score, biases: { ...biases }, timestamp, duration: rpfsReport.session?.duration || 0, pivotPoints: rpfsReport.hypothesisEvolution?.pivotPoints?.length || 0, dataActions: rpfsReport.dataGathering?.totalActions || 0, metacogMoments: rpfsReport.metacognition?.momentsDetected || 0, correctDiagnosis: rpfsReport.hypothesisEvolution?.finalDiagnosis, fingerprint: rpfsReport._fingerprint || null, reasoningStyle: null };
            if (rpfsReport._fingerprint) { const style = RPFS._classifyReasoningStyle(rpfsReport._fingerprint); entry.reasoningStyle = style.label; }
            log.push(entry); if (log.length > 500) log.splice(0, log.length - 500);
            safeSet(STORAGE_KEYS.LRDT_SESSIONS_LOG, log);
            this._updateTopicMastery(caseId, score, biases, timestamp);
            this._updateGrowthCurves(log);
        },

        _updateTopicMastery(caseId, score, biases, timestamp) {
            const mastery = safeGet(STORAGE_KEYS.LRDT_TOPIC_MASTERY, {});
            if (!mastery[caseId]) mastery[caseId] = { firstAttempt: timestamp, attempts: 0, scores: [], currentMastery: 0, masteryLevel: 'novice', lastAttempt: timestamp, biasHistory: [] };
            const topic = mastery[caseId];
            topic.attempts++; topic.scores.push(score); topic.lastAttempt = timestamp; topic.biasHistory.push({ ...biases, timestamp });
            const weights = topic.scores.map((_, i) => 0.5 + (0.5 * i / topic.scores.length));
            const totalWeight = weights.reduce((a, b) => a + b, 0);
            topic.currentMastery = Math.round(topic.scores.reduce((sum, s, i) => sum + s * weights[i], 0) / totalWeight);
            if (topic.currentMastery >= 90 && topic.attempts >= 3) topic.masteryLevel = 'expert';
            else if (topic.currentMastery >= 80 && topic.attempts >= 2) topic.masteryLevel = 'proficient';
            else if (topic.currentMastery >= 70) topic.masteryLevel = 'competent';
            else if (topic.currentMastery >= 50) topic.masteryLevel = 'developing';
            else topic.masteryLevel = 'novice';
            if (topic.scores.length >= 2) { const fh = topic.scores.slice(0, Math.ceil(topic.scores.length / 2)); const sh = topic.scores.slice(Math.ceil(topic.scores.length / 2)); topic.learningRate = +((sh.reduce((a,b)=>a+b,0)/sh.length - fh.reduce((a,b)=>a+b,0)/fh.length) / fh.length).toFixed(2); }
            safeSet(STORAGE_KEYS.LRDT_TOPIC_MASTERY, mastery);
        },

        _updateGrowthCurves(log) {
            const windowSize = 5;
            const curves = { reasoningQuality: [], biasReduction: [], metacognition: [], timestamps: [], styleProgression: [] };
            for (let i = 0; i < log.length; i++) {
                const w = log.slice(Math.max(0, i - windowSize + 1), i + 1);
                curves.reasoningQuality.push({ session: i+1, value: Math.round(w.reduce((s,l) => s+l.score, 0) / w.length), timestamp: log[i].timestamp });
                const avgBias = w.reduce((s, l) => { const b = l.biases || {}; return s + (b.prematureClosureScore||0) + (b.anchoringScore||0) + (b.confirmationBiasScore||0) + (b.diagnosticMomentumScore||0); }, 0) / w.length;
                curves.biasReduction.push({ session: i+1, value: Math.round(100 - avgBias / 4), timestamp: log[i].timestamp });
                curves.metacognition.push({ session: i+1, value: Math.round(w.reduce((s, l) => s + (l.metacogMoments||0), 0) / w.length * 20), timestamp: log[i].timestamp });
                if (log[i].reasoningStyle) curves.styleProgression.push({ session: i+1, style: log[i].reasoningStyle, timestamp: log[i].timestamp });
                curves.timestamps.push(log[i].timestamp);
            }
            safeSet(STORAGE_KEYS.LRDT_GROWTH_CURVES, curves);
        },

        getTopicMastery() { return safeGet(STORAGE_KEYS.LRDT_TOPIC_MASTERY, {}); },
        getGrowthCurves() { return safeGet(STORAGE_KEYS.LRDT_GROWTH_CURVES, null); },
        getSessionsLog() { return safeGet(STORAGE_KEYS.LRDT_SESSIONS_LOG, []); },
        getRecommendedReview() {
            const mastery = this.getTopicMastery(); const now = Date.now(); const recs = [];
            for (const [caseId, topic] of Object.entries(mastery)) {
                const daysSince = (now - topic.lastAttempt) / 86400000;
                const interval = { novice: 1, developing: 3, competent: 7, proficient: 14, expert: 30 }[topic.masteryLevel] || 7;
                if (daysSince >= interval) recs.push({ caseId, masteryLevel: topic.masteryLevel, currentMastery: topic.currentMastery, daysSinceReview: Math.round(daysSince), urgency: daysSince >= interval * 2 ? 'high' : 'moderate', attempts: topic.attempts });
            }
            return recs.sort((a, b) => a.urgency !== b.urgency ? (a.urgency === 'high' ? -1 : 1) : a.currentMastery - b.currentMastery);
        },
        generateInstructorReport() {
            const mastery = this.getTopicMastery(); const log = this.getSessionsLog(); const curves = this.getGrowthCurves();
            const lr = log.length < 4 ? null : (() => { const fq = log.slice(0, Math.ceil(log.length/4)); const lq = log.slice(-Math.ceil(log.length/4)); const af = fq.reduce((s,l)=>s+l.score,0)/fq.length; const al = lq.reduce((s,l)=>s+l.score,0)/lq.length; return { improvement: +(al-af).toFixed(1), percentChange: af>0?+((al-af)/af*100).toFixed(1):0, trend: al>af?'improving':al===af?'stable':'declining' }; })();
            return { totalSessions: log.length, topicsCovered: Object.keys(mastery).length, masteryDistribution: { expert: Object.values(mastery).filter(t=>t.masteryLevel==='expert').length, proficient: Object.values(mastery).filter(t=>t.masteryLevel==='proficient').length, competent: Object.values(mastery).filter(t=>t.masteryLevel==='competent').length, developing: Object.values(mastery).filter(t=>t.masteryLevel==='developing').length, novice: Object.values(mastery).filter(t=>t.masteryLevel==='novice').length }, growthCurves: curves, topicDetails: mastery, recommendedReview: this.getRecommendedReview(), overallLearningRate: lr, styleEvolution: curves?.styleProgression || [] };
        },
        clearAll() { localStorage.removeItem(STORAGE_KEYS.LRDT_TOPIC_MASTERY); localStorage.removeItem(STORAGE_KEYS.LRDT_SESSIONS_LOG); localStorage.removeItem(STORAGE_KEYS.LRDT_GROWTH_CURVES); }
    };

    // ================================================================
    //  MMD — Metacognitive Moment Detection (Enhanced)
    // ================================================================
    const MMD = {
        detectMoment(state) {
            const moments = [];
            const adaptations = AFC.getActiveAdaptations();
            const premCloseThreshold = this._getAdaptedThreshold(adaptations, 'prematureClosureThreshold', 1);

            if (state.confidence > 80 && state.dataGatheringCount < 3) moments.push({ type: 'confidence_evidence_mismatch', prompt: 'You have high confidence but have gathered limited evidence. What specific findings support your leading diagnosis?', severity: 'important' });
            if (state.topDiagnosisUnchangedStages >= 3 && state.contraryEvidenceCount > 0) moments.push({ type: 'potential_anchoring', prompt: 'Your top diagnosis hasn\'t changed despite new information. What alternative diagnosis best explains ALL the findings?', severity: 'critical' });
            if (state.differentialSize <= premCloseThreshold && state.stage !== 'final' && state.dataGatheringCount < 5) moments.push({ type: 'premature_closure', prompt: 'You\'re working with a narrow differential early in the case. What are two other diagnoses that could present similarly?', severity: 'important', _adaptedThreshold: premCloseThreshold });
            if (state.newCriticalFinding && state.lastPivotStagesAgo >= 2) moments.push({ type: 'pivot_opportunity', prompt: 'A significant new finding just emerged. How does this change your thinking?', severity: 'moderate' });

            if (state.currentActionSequence && state.currentActionSequence.length >= 3) {
                const recentGram = state.currentActionSequence.slice(-3).join('-');
                const stateHistory = safeGet(STORAGE_KEYS.MMD_STATE_HISTORY, {});
                if (stateHistory.errorGrams && stateHistory.errorGrams[recentGram]) moments.push({ type: 'pattern_warning', prompt: 'You\'re following a reasoning pattern similar to previous cases where your diagnosis was incorrect. Consider pausing to reassess.', severity: 'important', _triggerGram: recentGram });
            }

            if (moments.length > 0) { const events = safeGet(STORAGE_KEYS.MMD_EVENTS, []); moments.forEach(m => { events.push({ ...m, timestamp: Date.now(), caseId: state.caseId }); }); safeSet(STORAGE_KEYS.MMD_EVENTS, events); }
            const priority = { critical: 3, important: 2, moderate: 1 };
            moments.sort((a, b) => (priority[b.severity] || 0) - (priority[a.severity] || 0));
            return moments[0] || null;
        },

        _getAdaptedThreshold(adaptations, paramName, defaultValue) { const a = adaptations.find(a => a.parameter === paramName); return a ? a.value : defaultValue; },

        recordErrorPatterns(report) {
            if (!report._saeEncoding || !report.session) return;
            if (report.hypothesisEvolution?.diagnosticAccuracy === true) return;
            const history = safeGet(STORAGE_KEYS.MMD_STATE_HISTORY, { errorGrams: {} });
            const ngrams = SAE.extractNGrams(report._saeEncoding.sequence, [3]);
            for (const [gram, freq] of Object.entries(ngrams)) { if (freq > 0.05) history.errorGrams[gram] = (history.errorGrams[gram] || 0) + 1; }
            safeSet(STORAGE_KEYS.MMD_STATE_HISTORY, history);
        },

        getEvents() { return safeGet(STORAGE_KEYS.MMD_EVENTS, []); },
        clearAll() { localStorage.removeItem(STORAGE_KEYS.MMD_EVENTS); localStorage.removeItem(STORAGE_KEYS.MMD_STATE_HISTORY); }
    };

    // ================================================================
    //  EPE — Expert Pathway Extraction
    // ================================================================
    const EPE = {
        saveExpertPathway(pathway) {
            const paths = safeGet(STORAGE_KEYS.EPE_PATHWAYS, []);
            pathway._savedAt = Date.now();
            if (pathway.actions) { pathway._saeEncoding = SAE.encodeSession(pathway.actions); if (pathway._saeEncoding) pathway._ngramProfile = SAE.extractNGrams(pathway._saeEncoding.sequence); }
            paths.push(pathway); safeSet(STORAGE_KEYS.EPE_PATHWAYS, paths);
        },
        getExpertPathways(caseId) { const paths = safeGet(STORAGE_KEYS.EPE_PATHWAYS, []); return caseId ? paths.filter(p => p.caseId === caseId) : paths; },
        clearAll() { localStorage.removeItem(STORAGE_KEYS.EPE_PATHWAYS); }
    };

    // ================================================================
    //  Public API
    // ================================================================
    window.RdxPatent = { RPFS, CRDA, LRDT, MMD, EPE, SAE, DTW, AFC, STORAGE_KEYS };
loaded: RPFS, CRDA, LRDT, MMD, EPE, SAE, DTW, AFC');

})(window);
