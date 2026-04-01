/**
 * rdx-meta-reasoning.js — ReasonDx Meta-Reasoning Agent
 * ═══════════════════════════════════════════════════════════════
 * A supervisory agent that watches all other agents, maintains a
 * live theory of what the student is doing and why, and acts on
 * that theory across three output channels:
 *
 *   1. THEORY OF STUDENT MIND — synthesizes all six Student Model
 *      Bus layers into a single structured hypothesis about the
 *      student's current cognitive state, dominant error mode, and
 *      likely next failure point.
 *
 *   2. CASE SELECTION — replaces the stub recommendNextCase() with
 *      a principled algorithm that matches case properties to the
 *      student's error profile to create deliberate productive
 *      challenge (cf. Kapur, 2016; Mylopoulos et al., 2016).
 *
 *   3. DIFFICULTY CALIBRATION — dynamically adjusts difficulty
 *      based on within-session and cross-session performance signals,
 *      implementing a zone-of-proximal-development targeting algorithm
 *      (Vygotsky, 1978; van Merriënboer & Sweller, 2010).
 *
 * Theoretical grounding (Society of Mind / supervisory architecture):
 *   Minsky, M. (1986). Society of Mind. Simon & Schuster.
 *     — specialist agents coordinated by a supervisory process
 *   Anderson, J. R. et al. (2004). ACT-R. Psychol Rev, 111(4), 1036.
 *     — declarative + procedural memory integration
 *   Croskerry, P. (2009). Universal model of diagnostic reasoning.
 *     Acad Med, 84(8), 1022–1028.
 *     — dual process model informs error mode classification
 *   Kapur, M. (2016). Examining productive failure.
 *     Educ Psychol, 51(2), 289–299.
 *     — deliberate challenge-first case sequencing
 *   Mylopoulos, M. et al. (2016). Preparing students for future
 *     learning with deliberate innovation. Med Educ, 50(7), 711.
 *   Vygotsky, L. S. (1978). Mind in Society. Harvard University Press.
 *     — zone of proximal development
 *   van Merriënboer, J. & Sweller, J. (2010). Cognitive load theory
 *     and complex learning. Educ Psychol Rev.
 *
 * Public API:
 *   MetaReasoning.synthesize(bus, explainableLog, aarReview)
 *     → { theory, errorMode, confidence, urgency }
 *   MetaReasoning.selectCase(theory, availableCases, completedCases)
 *     → { caseId, rationale, targetedBias, expectedChallenge }
 *   MetaReasoning.calibrateDifficulty(theory, currentDifficulty)
 *     → { difficulty, direction, rationale }
 *   MetaReasoning.getAttendingBrief(theory)
 *     → string — compact attending guidance based on current theory
 *   MetaReasoning.getResearchRecord()
 *     → structured object for Supabase storage
 * ═══════════════════════════════════════════════════════════════
 */

(function (window) {
  'use strict';

  // ─── Error mode taxonomy ──────────────────────────────────────────────────
  // Grounded in Croskerry (2009) dual process + Graber et al. (2005) taxonomy.
  // Each mode has a signature across bus layers, a targeted case property,
  // and a specific attending tactic.

  var ERROR_MODES = {

    ANCHORING: {
      id: 'ANCHORING',
      label: 'Anchoring Bias',
      description: 'Student locks onto initial hypothesis and fails to update despite contradicting evidence',
      citation: 'Croskerry (2009); Graber et al. (2005)',
      // Detection signals (AND logic within layer, OR across layers)
      signals: {
        procedural: ['anchoring_tendency'],
        episodic: function(ep) {
          return ep.recentSessions.filter(function(s) { return s.anchoringDetected; }).length >= 2;
        },
        affective: function(aff) { return aff.ersRiskFlag; }
      },
      // Case property to target — case should present with a compelling mimic that tempts anchoring
      targetCaseProperty: 'hasAnchoringTrap',
      // Attending tactic
      attendingTactic: 'After initial differential: "What single finding would completely change your leading diagnosis?" Force explicit falsification.',
      // Zone of proximal development: select a case slightly harder than recent accuracy
      caseChallenge: 'high'
    },

    PREMATURE_CLOSURE: {
      id: 'PREMATURE_CLOSURE',
      label: 'Premature Closure',
      description: 'Student stops revising differential before fully evaluating all evidence',
      citation: 'Graber et al. (2005); Berner & Graber (2008)',
      signals: {
        procedural: ['premature_closure'],
        working: function(w) { return w.currentDx.length <= 1 && w.currentPhase >= 4; }
      },
      targetCaseProperty: 'hasMultipleMimics',
      attendingTactic: 'After revised differential: "What are you still holding on your list that you haven\'t fully ruled out? Walk me through one of them."',
      caseChallenge: 'high'
    },

    HISTORY_GAP: {
      id: 'HISTORY_GAP',
      label: 'Faulty Context Generation',
      description: 'Student misses critical contextual history elements that change the diagnosis',
      citation: 'Graber et al. (2005) — faulty context generation error type',
      signals: {
        procedural: ['history_gap'],
        affective: function(aff) { return aff.questionPattern === 'closed_first'; }
      },
      targetCaseProperty: 'hasCriticalEnvironmentalHistory',
      attendingTactic: 'If student has not asked about occupation, home environment, or social context by turn 6: "Before we move on — is there anything in the patient\'s daily life or environment that might be relevant here?"',
      caseChallenge: 'standard'
    },

    NARROW_OPENER: {
      id: 'NARROW_OPENER',
      label: 'Narrow Initial Hypothesis',
      description: 'Student generates insufficient differential breadth at case opening',
      citation: 'Elstein et al. (1978) — initial hypothesis set size',
      signals: {
        procedural: ['narrow_opener'],
        working: function(w) { return w.currentDx.length < 2 && w.currentPhase <= 2; }
      },
      targetCaseProperty: 'hasBroadDifferential',
      attendingTactic: 'At Phase 1: "You have one diagnosis. Give me three more — even ones that are less likely. What else could explain every symptom simultaneously?"',
      caseChallenge: 'standard'
    },

    UNDERCONFIDENT: {
      id: 'UNDERCONFIDENT',
      label: 'Confidence-Competence Mismatch',
      description: 'Student performs well but systematically underestimates their own reasoning',
      citation: 'Berner & Graber (2008); Eva & Regehr (2005)',
      signals: {
        procedural: ['underconfident'],
        affective: function(aff) { return aff.currentValence < -0.2 && aff.currentArousal < 0.4; }
      },
      targetCaseProperty: null,  // any case; tactic matters more than case
      attendingTactic: 'When student hedges excessively after correct reasoning: "Stop — you just said something correct. Walk me through why that\'s right. Own the reasoning."',
      caseChallenge: 'standard'
    },

    HIGH_COGNITIVE_LOAD: {
      id: 'HIGH_COGNITIVE_LOAD',
      label: 'Cognitive Overload',
      description: 'Student\'s working memory appears saturated — load is high and escalating',
      citation: 'Sweller (1988); Moulton et al. (2007)',
      signals: {
        load: function(ld) {
          return ld.currentLoadCategory === 'high' && ld.trajectory === 'escalating';
        }
      },
      targetCaseProperty: null,
      attendingTactic: 'Immediately: "Pause. Tell me your working diagnosis in one sentence. Just one." Then rebuild from there.',
      caseChallenge: 'reduce'  // signal to lower difficulty
    },

    AFFECT_DISRUPTION: {
      id: 'AFFECT_DISRUPTION',
      label: 'Affect-Reasoning Disruption',
      description: 'Negative activated affect during history-taking predicts downstream anchoring',
      citation: 'Croskerry et al. (2010); Lerner et al. (2015)',
      signals: {
        affective: function(aff) {
          return aff.ersRiskFlag ||
            (aff.phase3AvgValence !== null && aff.phase3AvgValence < -0.3 &&
             aff.phase3AvgArousal !== null && aff.phase3AvgArousal > 0.6);
        }
      },
      targetCaseProperty: null,
      attendingTactic: 'After history phase: "Before you finalize your differential — what was most surprising or concerning about that interview? Name one thing that made you uncertain." Surface the affective signal before it silently drives anchoring.',
      caseChallenge: 'standard'
    },

    CALIBRATED: {
      id: 'CALIBRATED',
      label: 'Well-Calibrated Reasoner',
      description: 'No dominant error mode detected — student is performing at or above expected level',
      citation: 'Eva & Regehr (2005) — self-assessment calibration',
      signals: {},
      targetCaseProperty: 'hasHighComplexity',
      attendingTactic: 'Challenge upward: "You\'ve reasoned through the obvious diagnosis. What\'s the one thing about this presentation that doesn\'t fit perfectly — and what does that mean?"',
      caseChallenge: 'advance'
    }
  };

  // ─── Case property index ──────────────────────────────────────────────────
  // Maps case IDs to their properties for meta-reasoning selection.
  // Properties are inferred from case metadata (scoringCriteria, nearMisses, signals).
  // Extended at runtime via MetaReasoning.registerCase().

  var _caseIndex = {};

  // ─── Internal state ───────────────────────────────────────────────────────

  var _state = {
    currentTheory:    null,
    theoryHistory:    [],    // rolling last 10 theories
    lastSynthesisAt:  null,
    sessionCount:     0
  };

  // ─── synthesize() ─────────────────────────────────────────────────────────
  // Core function. Reads all six bus layers + ExplainableAgent log + AAR
  // and returns a structured theory of the student's current cognitive state.

  function synthesize(bus, explainableLog, aarReview) {
    if (!bus) return null;

    var raw = bus.getRaw ? bus.getRaw() : {};
    var working    = raw.working    || {};
    var episodic   = raw.episodic   || {};
    var procedural = raw.procedural || {};
    var affective  = raw.affective  || {};
    var load       = raw.load       || {};

    // ── Step 1: Score each error mode ──────────────────────────────────────
    var modeScores = {};

    Object.keys(ERROR_MODES).forEach(function(modeId) {
      var mode   = ERROR_MODES[modeId];
      var score  = 0;
      var evidence = [];

      // Procedural signals (pattern_tags from longitudinal profile)
      if (mode.signals.procedural && procedural.patternTags) {
        var matchedTags = mode.signals.procedural.filter(function(tag) {
          return procedural.patternTags.indexOf(tag) !== -1;
        });
        if (matchedTags.length > 0) {
          score += 3;  // longitudinal pattern = strong signal
          evidence.push('Longitudinal pattern: ' + matchedTags.join(', '));
        }
      }

      // Episodic signals (recent session history)
      if (typeof mode.signals.episodic === 'function' && episodic.recentSessions) {
        if (mode.signals.episodic(episodic)) {
          score += 2;
          evidence.push('Recent session history confirms');
        }
      }

      // Working memory signals (live session state)
      if (typeof mode.signals.working === 'function') {
        if (mode.signals.working(working)) {
          score += 2;
          evidence.push('Current session behavior');
        }
      }

      // Affective signals (ERS from Agent 7)
      if (typeof mode.signals.affective === 'function') {
        if (mode.signals.affective(affective)) {
          score += 2;
          evidence.push('Affective state signal');
        }
      }

      // Load signals (CLT from Agent 5)
      if (typeof mode.signals.load === 'function') {
        if (mode.signals.load(load)) {
          score += 3;  // real-time overload = urgent signal
          evidence.push('Cognitive load signature');
        }
      }

      // ExplainableAgent log — look for corroborating bias detections
      if (explainableLog && Array.isArray(explainableLog)) {
        var relevantEntries = explainableLog.filter(function(entry) {
          return entry.type === 'bias_detected' &&
            entry.outputs && entry.outputs.biasType &&
            entry.outputs.biasType.toLowerCase().indexOf(
              modeId.toLowerCase().replace(/_/g, ' ').split(' ')[0]
            ) !== -1;
        });
        if (relevantEntries.length > 0) {
          score += relevantEntries.length;
          evidence.push('Detected in session: ' + relevantEntries.length + ' instance(s)');
        }
      }

      // AAR reflection — poor reflective depth on the gap area adds signal
      if (aarReview && aarReview.quality) {
        if (aarReview.quality.reflectiveDepth === 'surface' && score > 0) {
          score += 1;
          evidence.push('Shallow AAR reflection on this pattern');
        }
      }

      modeScores[modeId] = { score: score, evidence: evidence };
    });

    // HIGH_COGNITIVE_LOAD overrides everything if active — urgent intervention
    if (modeScores['HIGH_COGNITIVE_LOAD'] && modeScores['HIGH_COGNITIVE_LOAD'].score >= 3) {
      modeScores['HIGH_COGNITIVE_LOAD'].score = 99;
    }

    // ── Step 2: Select dominant mode ───────────────────────────────────────
    var dominantMode = 'CALIBRATED';
    var dominantScore = 0;
    var secondaryModes = [];

    Object.keys(modeScores).forEach(function(modeId) {
      var s = modeScores[modeId].score;
      if (modeId === 'CALIBRATED') return;
      if (s > dominantScore) {
        if (dominantScore > 0) secondaryModes.push(dominantMode);
        dominantMode  = modeId;
        dominantScore = s;
      } else if (s > 0 && s >= dominantScore - 1) {
        secondaryModes.push(modeId);
      }
    });

    var mode = ERROR_MODES[dominantMode];

    // ── Step 3: Confidence in the theory ───────────────────────────────────
    // High confidence = multiple corroborating layers; low = single signal
    var evidenceCount = modeScores[dominantMode].evidence.length;
    var confidence = dominantScore === 0 ? 0.5 :
                     dominantScore >= 6  ? 0.9 :
                     dominantScore >= 4  ? 0.75 :
                     dominantScore >= 2  ? 0.6  : 0.45;

    // ── Step 4: Urgency ─────────────────────────────────────────────────────
    var urgency = dominantMode === 'HIGH_COGNITIVE_LOAD'   ? 'immediate' :
                  dominantMode === 'AFFECT_DISRUPTION' && affective.ersRiskFlag ? 'high' :
                  dominantScore >= 5                        ? 'high'      :
                  dominantScore >= 3                        ? 'moderate'  : 'low';

    // ── Step 5: Narrative theory ────────────────────────────────────────────
    var narrative = _buildNarrative(working, procedural, affective, load,
                                    dominantMode, secondaryModes, modeScores);

    var theory = {
      dominantErrorMode:  dominantMode,
      dominantModeLabel:  mode.label,
      dominantModeScore:  dominantScore,
      secondaryModes:     secondaryModes,
      confidence:         confidence,
      urgency:            urgency,
      evidence:           modeScores[dominantMode].evidence,
      narrative:          narrative,
      attendingTactic:    mode.attendingTactic,
      caseChallenge:      mode.caseChallenge,
      synthesizedAt:      new Date().toISOString(),
      busSnapshot: {
        phase:          working.currentPhase,
        turn:           working.turnCount,
        loadCategory:   load.currentLoadCategory,
        ersRiskFlag:    affective.ersRiskFlag,
        patternTags:    procedural.patternTags
      }
    };

    // ── Store theory ─────────────────────────────────────────────────────────
    _state.currentTheory = theory;
    _state.theoryHistory.push(theory);
    if (_state.theoryHistory.length > 10) _state.theoryHistory.shift();
    _state.lastSynthesisAt = theory.synthesizedAt;

    return theory;
  }

  function _buildNarrative(working, procedural, affective, load,
                            dominantMode, secondaryModes, modeScores) {
    var parts = [];
    var name  = working.studentName || 'This student';

    // Opening: phase context
    if (working.phaseLabel) {
      parts.push(name + ' is at ' + working.phaseLabel + ' (turn ' + (working.turnCount || '?') + ').');
    }

    // Dominant mode
    var mode = ERROR_MODES[dominantMode];
    if (dominantMode !== 'CALIBRATED' && modeScores[dominantMode].score > 0) {
      parts.push('Dominant error mode: ' + mode.label + '. ' + mode.description + '.');
    } else {
      parts.push('No dominant error mode detected — student appears well-calibrated for current phase.');
    }

    // Supporting evidence from active layers
    if (procedural.patternTags && procedural.patternTags.length > 0) {
      parts.push('Longitudinal profile tags: ' + procedural.patternTags.join(', ') + '.');
    }
    if (affective.ersRiskFlag) {
      parts.push('ERS flag active — negative arousal during history predicted; anchoring risk elevated.');
    }
    if (load.currentLoadCategory === 'high' || load.currentLoadCategory === 'elevated') {
      parts.push('Cognitive load ' + load.currentLoadCategory +
        (load.peakLoadLabel ? ' — peak at ' + load.peakLoadLabel : '') + '.');
    }
    if (load.trajectory === 'escalating') {
      parts.push('Load trajectory escalating — student may be approaching working memory ceiling.');
    }

    // Secondary modes
    if (secondaryModes.length > 0) {
      var secLabels = secondaryModes.map(function(m) { return ERROR_MODES[m].label; });
      parts.push('Secondary signals: ' + secLabels.join(', ') + '.');
    }

    return parts.join(' ');
  }

  // ─── selectCase() ─────────────────────────────────────────────────────────
  // Selects the next case to assign based on the current theory.
  // Implements deliberate productive challenge (Kapur, 2016).

  function selectCase(theory, availableCases, completedCases) {
    availableCases = availableCases || [];
    completedCases = completedCases || [];

    // Filter out completed cases
    var candidates = availableCases.filter(function(c) {
      var cid = (c.caseId || c.id || c);
      return completedCases.indexOf(cid) === -1;
    });

    if (candidates.length === 0) {
      return {
        caseId: null,
        rationale: 'All available cases completed.',
        targetedBias: null,
        expectedChallenge: null
      };
    }

    if (!theory || theory.dominantErrorMode === 'CALIBRATED') {
      // Well-calibrated: pick highest complexity case not yet done
      var complex = candidates.filter(function(c) {
        var props = _caseIndex[c.caseId || c.id || c] || {};
        return props.hasHighComplexity;
      });
      var pick = complex[0] || candidates[0];
      return {
        caseId: _id(pick),
        rationale: 'Student is well-calibrated — advancing to higher complexity case.',
        targetedBias: null,
        expectedChallenge: 'high'
      };
    }

    var mode = ERROR_MODES[theory.dominantErrorMode];
    var targetProp = mode.targetCaseProperty;

    // Try to find a case that directly targets the error mode
    var targeted = [];
    if (targetProp) {
      targeted = candidates.filter(function(c) {
        var props = _caseIndex[_id(c)] || {};
        return props[targetProp] === true;
      });
    }

    // Zone of proximal development calibration:
    // If challenge = 'reduce', find an easier case; 'advance' = harder
    var challengeFilter = null;
    if (theory.caseChallenge === 'reduce') {
      challengeFilter = function(c) {
        var props = _caseIndex[_id(c)] || {};
        return props.difficulty === 'guided' || props.acuity >= 4;
      };
    } else if (theory.caseChallenge === 'high' || theory.caseChallenge === 'advance') {
      challengeFilter = function(c) {
        var props = _caseIndex[_id(c)] || {};
        return props.difficulty === 'advanced' || props.acuity <= 2;
      };
    }

    // Selection priority: targeted + challenge > targeted only > challenge only > any
    var pool = targeted;
    if (challengeFilter && pool.length > 0) {
      var refined = pool.filter(challengeFilter);
      if (refined.length > 0) pool = refined;
    }
    if (pool.length === 0 && challengeFilter) {
      pool = candidates.filter(challengeFilter);
    }
    if (pool.length === 0) pool = candidates;

    // Pick from pool — randomize to prevent always picking first
    var selected = pool[Math.floor(Math.random() * Math.min(pool.length, 3))];

    return {
      caseId: _id(selected),
      rationale: 'Selected to target ' + mode.label + '.' +
        (targetProp ? ' Case has property: ' + targetProp + '.' : '') +
        ' Challenge level: ' + (theory.caseChallenge || 'standard') + '.',
      targetedBias: theory.dominantErrorMode,
      expectedChallenge: theory.caseChallenge,
      theoryCitation: mode.citation
    };
  }

  // ─── calibrateDifficulty() ────────────────────────────────────────────────
  // Recommends difficulty adjustment based on theory.
  // Implements ZPD targeting: keep student in productive struggle zone.

  function calibrateDifficulty(theory, currentDifficulty) {
    var current = currentDifficulty || 'standard';
    var levels  = ['guided', 'standard', 'advanced'];
    var idx     = levels.indexOf(current);

    if (!theory) return { difficulty: current, direction: 'hold', rationale: 'No theory available.' };

    // High cognitive load → step down
    if (theory.dominantErrorMode === 'HIGH_COGNITIVE_LOAD') {
      var down = levels[Math.max(0, idx - 1)];
      return {
        difficulty: down,
        direction: down === current ? 'hold' : 'decrease',
        rationale: 'Cognitive overload detected — reducing difficulty to restore working memory capacity.',
        citation: 'Sweller (1988); van Merriënboer & Sweller (2010)'
      };
    }

    // Well-calibrated + recent accuracy > 80% → step up
    if (theory.dominantErrorMode === 'CALIBRATED' && theory.caseChallenge === 'advance') {
      var up = levels[Math.min(levels.length - 1, idx + 1)];
      return {
        difficulty: up,
        direction: up === current ? 'hold' : 'increase',
        rationale: 'Student performing above expected level — advancing difficulty to maintain productive challenge.',
        citation: 'Kapur (2016); Mylopoulos et al. (2016)'
      };
    }

    // Dominant error mode with low confidence → hold (more data needed)
    if (theory.confidence < 0.6) {
      return {
        difficulty: current,
        direction: 'hold',
        rationale: 'Theory confidence low (' + Math.round(theory.confidence * 100) + '%) — holding difficulty until pattern stabilizes.',
        citation: null
      };
    }

    // Anchoring or premature closure under standard → stay standard
    // (these errors benefit from challenge, not reduction)
    if (['ANCHORING', 'PREMATURE_CLOSURE'].indexOf(theory.dominantErrorMode) !== -1) {
      return {
        difficulty: current,
        direction: 'hold',
        rationale: 'Bias-targeted error mode — maintaining current difficulty; case selection is the intervention, not difficulty reduction.',
        citation: 'Kapur (2016)'
      };
    }

    return { difficulty: current, direction: 'hold', rationale: 'No calibration signal — holding.' };
  }

  // ─── getAttendingBrief() ──────────────────────────────────────────────────
  // Returns a compact attending guidance string for injection into
  // the student model bus (attending role). Called per-turn.

  function getAttendingBrief(theory) {
    if (!theory || theory.dominantErrorMode === 'CALIBRATED') {
      return 'Student appears well-calibrated. Challenge upward — press for mechanistic explanation and edge-case reasoning.';
    }

    var mode = ERROR_MODES[theory.dominantErrorMode];
    var brief = '[Meta-Reasoning: ' + mode.label + ' detected';
    if (theory.urgency === 'immediate') brief += ' — URGENT INTERVENTION';
    else if (theory.urgency === 'high') brief += ' — high priority';
    brief += ']\n' + mode.attendingTactic;

    return brief;
  }

  // ─── registerCase() ───────────────────────────────────────────────────────
  // Called at case load time to index case properties for selection.
  // Infers properties from CRT case data structure.

  function registerCase(caseId, caseData) {
    if (!caseId || !caseData) return;

    var props = {
      caseId: caseId,
      difficulty: 'standard',
      acuity: caseData.acuity || 3,
      category: caseData.category || 'general',
      targetDiagnosis: caseData.diagnosis || caseData.targetDiagnosis || '',

      // Infer case properties from metadata
      hasAnchoringTrap:              false,
      hasMultipleMimics:             false,
      hasCriticalEnvironmentalHistory: false,
      hasBroadDifferential:          false,
      hasHighComplexity:             false
    };

    // Infer from nearMisses
    var nearMisses = caseData.nearMisses || [];
    nearMisses.forEach(function(nm) {
      var cat = (nm.category || '').toLowerCase();
      if (cat.indexOf('anchor') !== -1 || cat.indexOf('mimic') !== -1) {
        props.hasAnchoringTrap = true;
      }
      if (cat.indexOf('reasoning') !== -1 || cat.indexOf('alternative') !== -1) {
        props.hasMultipleMimics = true;
      }
    });

    // Infer from signals
    var signals = caseData.signals || {};
    var critHist = signals.criticalHistory || signals.environmentalHistory || [];
    if (critHist.length > 0) props.hasCriticalEnvironmentalHistory = true;

    // Infer from scoringCriteria
    var sc = caseData.scoringCriteria || {};
    var critElements = sc.criticalHistoryElements || [];
    if (critElements.some(function(e) {
      return /(drug|alcohol|exposure|occupation|environmental|travel|contact)/i.test(e);
    })) {
      props.hasCriticalEnvironmentalHistory = true;
    }

    // High complexity: acuity 1-2 AND multiple near misses
    props.hasHighComplexity = props.acuity <= 2 && nearMisses.length >= 2;

    // Broad differential cases: those with 5+ diagnoses in the DDx pool
    var ddxCount = (caseData.ddxPool || []).length ||
                   (caseData.treatments && caseData.treatments.orders ? 0 : 0);
    props.hasBroadDifferential = ddxCount >= 5 || props.hasMultipleMimics;

    _caseIndex[caseId] = props;
  }

  // ─── getResearchRecord() ──────────────────────────────────────────────────
  // Returns structured data for Supabase storage.

  function getResearchRecord() {
    return {
      currentTheory:      _state.currentTheory,
      theoryHistoryCount: _state.theoryHistory.length,
      dominantModeHistory: _state.theoryHistory.map(function(t) {
        return {
          mode:       t.dominantErrorMode,
          score:      t.dominantModeScore,
          confidence: t.confidence,
          urgency:    t.urgency,
          phase:      t.busSnapshot && t.busSnapshot.phase,
          turn:       t.busSnapshot && t.busSnapshot.turn,
          at:         t.synthesizedAt
        };
      }),
      lastSynthesisAt: _state.lastSynthesisAt
    };
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  function _id(c) { return c && (c.caseId || c.id || c); }

  // ─── Export ───────────────────────────────────────────────────────────────
  window.MetaReasoning = {
    synthesize:          synthesize,
    selectCase:          selectCase,
    calibrateDifficulty: calibrateDifficulty,
    getAttendingBrief:   getAttendingBrief,
    registerCase:        registerCase,
    getResearchRecord:   getResearchRecord,
    ERROR_MODES:         ERROR_MODES,
    // For debugging
    _state: _state
  };

})(window);
