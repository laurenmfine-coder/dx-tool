/*
 * rdx-reasoning-tools.js — Advanced Clinical Reasoning Frameworks
 * ReasonDx · Lauren Fine, MD, FAAAAI
 *
 * Integrates 8 cross-disciplinary reasoning tools into the simulation engine:
 *
 * DURING ENCOUNTER:
 *   1. ACH Matrix — Analysis of Competing Hypotheses (military intelligence)
 *   2. FMEA Risk Matrix — Failure Mode & Effects Analysis (engineering)
 *   3. Source Triangulation — Three-source evidence rule (journalism)
 *   4. Devil's Advocate — Adversarial reasoning (law)
 *
 * POST-ENCOUNTER:
 *   5. After-Action Review — 4-question structured debrief (aviation/military)
 *   6. Post-Game Analysis — Expert pathway comparison (chess)
 *   7. Case Pairing — Similar-presenting case recommendation (law: distinguishing cases)
 *   8. Tactical Puzzles — Micro-challenges (chess: tactical training)
 *
 * All tools produce structured data for the researcher dashboard.
 */

(function(window) {
  'use strict';

  var RdxReasoning = {};

  // ════════════════════════════════════════════════════════════════
  // 1. ACH MATRIX — Analysis of Competing Hypotheses
  // ════════════════════════════════════════════════════════════════
  //
  // Military intelligence framework. Students map each piece of evidence
  // against each diagnosis in their differential:
  //   ++ strongly supports, + supports, 0 neutral, - inconsistent, -- strongly refutes
  //
  // Purpose: Forces explicit reasoning. Prevents anchoring by making
  // students evaluate ALL evidence against ALL hypotheses, not just
  // cherry-picking evidence for their favorite diagnosis.

  RdxReasoning.ACH = {
    _matrix: null,

    create: function(diagnoses, evidence) {
      this._matrix = {
        diagnoses: diagnoses.map(function(d) { return { name: d, score: 0 }; }),
        evidence: evidence.map(function(e) { return { text: e, ratings: {} }; }),
        createdAt: new Date().toISOString()
      };
      return this._matrix;
    },

    // Rate a piece of evidence against a diagnosis
    // rating: -2 (strongly refutes), -1 (inconsistent), 0 (neutral), 1 (supports), 2 (strongly supports)
    rate: function(evidenceIndex, diagnosisName, rating) {
      if (!this._matrix || !this._matrix.evidence[evidenceIndex]) return;
      this._matrix.evidence[evidenceIndex].ratings[diagnosisName] = rating;
      this._recalculate();
    },

    _recalculate: function() {
      var m = this._matrix;
      m.diagnoses.forEach(function(dx) {
        var total = 0, inconsistent = 0;
        m.evidence.forEach(function(ev) {
          var r = ev.ratings[dx.name];
          if (r !== undefined) {
            total += r;
            if (r < 0) inconsistent++;
          }
        });
        dx.score = total;
        dx.inconsistentCount = inconsistent;
      });
      // Sort by score descending
      m.ranked = m.diagnoses.slice().sort(function(a, b) { return b.score - a.score; });
    },

    // Detect reasoning biases
    analyze: function() {
      if (!this._matrix) return null;
      var m = this._matrix;
      var analysis = { biases: [], insights: [] };

      // Check for confirmation bias: if top diagnosis has only positive ratings
      var top = m.ranked && m.ranked[0];
      if (top) {
        var topRatings = [];
        m.evidence.forEach(function(ev) {
          if (ev.ratings[top.name] !== undefined) topRatings.push(ev.ratings[top.name]);
        });
        if (topRatings.length > 0 && topRatings.every(function(r) { return r >= 0; })) {
          analysis.biases.push({
            type: 'confirmation_bias',
            message: 'Your leading diagnosis has no inconsistent evidence rated. Consider what findings would argue AGAINST ' + top.name + '.'
          });
        }
      }

      // Check for anchoring: if all evidence rated the same for top dx
      if (top && m.evidence.length > 3) {
        var allSame = m.evidence.every(function(ev) {
          return ev.ratings[top.name] === m.evidence[0].ratings[top.name];
        });
        if (allSame) {
          analysis.biases.push({
            type: 'anchoring',
            message: 'All evidence rated identically for ' + top.name + '. Are you anchoring? Re-evaluate each piece independently.'
          });
        }
      }

      // Check for neglected hypothesis: diagnosis with no ratings
      m.diagnoses.forEach(function(dx) {
        var rated = 0;
        m.evidence.forEach(function(ev) { if (ev.ratings[dx.name] !== undefined) rated++; });
        if (rated === 0 && m.evidence.length > 0) {
          analysis.biases.push({
            type: 'neglected_hypothesis',
            message: dx.name + ' has no evidence rated. Evaluate at least the key findings against this diagnosis.'
          });
        }
      });

      // Insight: which diagnosis has the least inconsistent evidence?
      var leastInconsistent = m.diagnoses.slice().sort(function(a, b) { return (a.inconsistentCount || 0) - (b.inconsistentCount || 0); })[0];
      if (leastInconsistent && leastInconsistent !== top) {
        analysis.insights.push('ACH suggests ' + leastInconsistent.name + ' has the fewest inconsistent findings — consider whether it should be ranked higher.');
      }

      return analysis;
    },

    getMatrix: function() { return this._matrix; },

    // Render as HTML table
    renderHTML: function() {
      var m = this._matrix;
      if (!m) return '<div>No ACH matrix created yet.</div>';
      var html = '<div class="ach-matrix" style="overflow-x:auto;font-size:12px">';
      html += '<table style="border-collapse:collapse;width:100%;min-width:400px">';
      html += '<thead><tr><th style="padding:8px;border:1px solid #E2E8F0;background:#F8FAFC;text-align:left;font-weight:700">Evidence</th>';
      m.diagnoses.forEach(function(dx) {
        var bg = m.ranked && m.ranked[0] === dx ? '#EBF5FB' : '#F8FAFC';
        html += '<th style="padding:8px;border:1px solid #E2E8F0;background:' + bg + ';text-align:center;font-weight:700;min-width:80px">' + dx.name + '</th>';
      });
      html += '</tr></thead><tbody>';
      m.evidence.forEach(function(ev, i) {
        html += '<tr>';
        html += '<td style="padding:8px;border:1px solid #E2E8F0;font-size:11px">' + ev.text + '</td>';
        m.diagnoses.forEach(function(dx) {
          var r = ev.ratings[dx.name];
          var display = r === undefined ? '-' : r > 0 ? '+'.repeat(r) : r < 0 ? '\u2212'.repeat(Math.abs(r)) : '0';
          var color = r > 0 ? '#059669' : r < 0 ? '#DC2626' : '#94A3B8';
          html += '<td style="padding:8px;border:1px solid #E2E8F0;text-align:center;font-weight:700;color:' + color + '">' + display + '</td>';
        });
        html += '</tr>';
      });
      // Score row
      html += '<tr style="background:#F1F5F9"><td style="padding:8px;border:1px solid #E2E8F0;font-weight:700">Total Score</td>';
      m.diagnoses.forEach(function(dx) {
        html += '<td style="padding:8px;border:1px solid #E2E8F0;text-align:center;font-weight:700">' + (dx.score || 0) + '</td>';
      });
      html += '</tr></tbody></table></div>';
      return html;
    }
  };


  // ════════════════════════════════════════════════════════════════
  // 2. FMEA RISK MATRIX — Failure Mode & Effects Analysis
  // ════════════════════════════════════════════════════════════════
  //
  // Engineering framework adapted for clinical reasoning.
  // For each diagnosis the student is considering:
  //   Probability (1-5): How likely is this diagnosis given the evidence?
  //   Severity (1-5): If I miss this, how bad is the outcome?
  //   Detectability (1-5): How easy is it to catch later? (5 = hard to detect)
  //   RPN = P × S × D
  //
  // Purpose: Forces students to think about CONSEQUENCES, not just likelihood.
  // A rare diagnosis with catastrophic outcome should rank higher than a
  // common diagnosis with benign course. This is the "must-not-miss" concept
  // made quantitative.

  RdxReasoning.FMEA = {
    _entries: [],

    addDiagnosis: function(name, probability, severity, detectability) {
      var rpn = probability * severity * detectability;
      this._entries.push({
        diagnosis: name,
        probability: probability,   // 1=very unlikely, 5=very likely
        severity: severity,         // 1=benign, 5=fatal if missed
        detectability: detectability, // 1=easy to catch later, 5=hard to catch
        rpn: rpn,
        addedAt: new Date().toISOString()
      });
      this._entries.sort(function(a, b) { return b.rpn - a.rpn; });
      return rpn;
    },

    // Detect if student is ignoring high-severity low-probability diagnoses
    analyze: function() {
      var analysis = { alerts: [], mustNotMiss: [] };
      this._entries.forEach(function(e) {
        if (e.severity >= 4 && e.probability <= 2) {
          analysis.mustNotMiss.push({
            diagnosis: e.diagnosis,
            message: e.diagnosis + ': low probability but high severity if missed. RPN=' + e.rpn + '. Have you ruled this out?'
          });
        }
        if (e.rpn >= 50) {
          analysis.alerts.push({
            diagnosis: e.diagnosis,
            rpn: e.rpn,
            message: e.diagnosis + ' has RPN ' + e.rpn + ' — this should be actively worked up, not just watched.'
          });
        }
      });
      return analysis;
    },

    getEntries: function() { return this._entries; },

    renderHTML: function() {
      if (this._entries.length === 0) return '<div>No FMEA entries yet.</div>';
      var html = '<div style="font-size:12px">';
      this._entries.forEach(function(e) {
        var rpnColor = e.rpn >= 50 ? '#DC2626' : e.rpn >= 25 ? '#D97706' : '#059669';
        html += '<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid #E2E8F0;border-radius:8px;margin-bottom:6px">';
        html += '<div style="font-weight:700;flex:1">' + e.diagnosis + '</div>';
        html += '<div style="display:flex;gap:4px;font-size:11px">';
        html += '<span style="background:#F1F5F9;padding:2px 6px;border-radius:4px">P:' + e.probability + '</span>';
        html += '<span style="background:#F1F5F9;padding:2px 6px;border-radius:4px">S:' + e.severity + '</span>';
        html += '<span style="background:#F1F5F9;padding:2px 6px;border-radius:4px">D:' + e.detectability + '</span>';
        html += '</div>';
        html += '<div style="font-weight:700;color:' + rpnColor + ';min-width:50px;text-align:right">RPN ' + e.rpn + '</div>';
        html += '</div>';
      });
      html += '</div>';
      return html;
    }
  };


  // ════════════════════════════════════════════════════════════════
  // 3. SOURCE TRIANGULATION — Three-Source Evidence Rule
  // ════════════════════════════════════════════════════════════════
  //
  // Journalism principle: never publish based on a single source.
  // In clinical reasoning: never commit to a diagnosis based on a
  // single category of evidence. Require 3 independent lines:
  //   - History (what the patient tells you)
  //   - Physical Exam (what you find)
  //   - Diagnostics (labs, imaging, studies)
  //
  // Purpose: Catches premature closure. If a student orders treatment
  // based on history alone without exam or diagnostics, the system flags it.

  RdxReasoning.Triangulation = {
    _evidence: { history: [], exam: [], diagnostics: [] },
    _commitments: [],

    addEvidence: function(category, finding) {
      if (!this._evidence[category]) this._evidence[category] = [];
      this._evidence[category].push({
        finding: finding,
        timestamp: new Date().toISOString()
      });
    },

    // Called when student commits to a diagnosis
    recordCommitment: function(diagnosis, phase) {
      var sources = 0;
      var sourcesUsed = [];
      if (this._evidence.history.length > 0) { sources++; sourcesUsed.push('history'); }
      if (this._evidence.exam.length > 0) { sources++; sourcesUsed.push('exam'); }
      if (this._evidence.diagnostics.length > 0) { sources++; sourcesUsed.push('diagnostics'); }

      var commitment = {
        diagnosis: diagnosis,
        phase: phase,
        sourceCount: sources,
        sourcesUsed: sourcesUsed,
        sourcesMissing: ['history', 'exam', 'diagnostics'].filter(function(s) { return sourcesUsed.indexOf(s) === -1; }),
        prematureClosure: sources < 2,
        fullTriangulation: sources >= 3,
        timestamp: new Date().toISOString()
      };
      this._commitments.push(commitment);
      return commitment;
    },

    // Check current triangulation status
    getStatus: function() {
      var h = this._evidence.history.length;
      var e = this._evidence.exam.length;
      var d = this._evidence.diagnostics.length;
      return {
        history: h, exam: e, diagnostics: d,
        totalSources: (h > 0 ? 1 : 0) + (e > 0 ? 1 : 0) + (d > 0 ? 1 : 0),
        ready: h > 0 && e > 0 && d > 0
      };
    },

    getCommitments: function() { return this._commitments; },
    getEvidence: function() { return this._evidence; },

    renderStatusHTML: function() {
      var s = this.getStatus();
      var colors = { 0: '#DC2626', 1: '#D97706', 2: '#D97706', 3: '#059669' };
      var html = '<div style="display:flex;gap:8px;font-size:12px">';
      ['history', 'exam', 'diagnostics'].forEach(function(cat) {
        var count = s[cat];
        var active = count > 0;
        html += '<div style="flex:1;padding:8px;border-radius:8px;text-align:center;border:1.5px solid ' + (active ? '#059669' : '#E2E8F0') + ';background:' + (active ? '#ECFDF5' : '#F8FAFC') + '">';
        html += '<div style="font-weight:700;color:' + (active ? '#059669' : '#94A3B8') + '">' + cat.charAt(0).toUpperCase() + cat.slice(1) + '</div>';
        html += '<div style="font-size:11px;color:#64748B">' + count + ' finding' + (count !== 1 ? 's' : '') + '</div>';
        html += '</div>';
      });
      html += '</div>';
      html += '<div style="text-align:center;margin-top:6px;font-size:11px;font-weight:600;color:' + colors[s.totalSources] + '">';
      html += s.totalSources + '/3 evidence sources';
      if (s.totalSources < 3) html += ' — gather more before committing';
      else html += ' — triangulated';
      html += '</div>';
      return html;
    }
  };


  // ════════════════════════════════════════════════════════════════
  // 4. DEVIL'S ADVOCATE — Adversarial Reasoning Protocol
  // ════════════════════════════════════════════════════════════════
  //
  // Legal reasoning technique. After the student commits to a diagnosis,
  // they must argue AGAINST it. "Convince me this is NOT [diagnosis]."
  //
  // Purpose: Tests depth of understanding. If you can't articulate why
  // your diagnosis might be wrong, you don't fully understand the evidence.
  // Also directly counters confirmation bias.

  RdxReasoning.DevilsAdvocate = {
    _sessions: [],
    _currentSession: null,

    // Start a DA challenge for a specific diagnosis
    startChallenge: function(diagnosis, supportingEvidence) {
      this._currentSession = {
        diagnosis: diagnosis,
        supportingEvidence: supportingEvidence || [],
        counterArguments: [],
        startedAt: new Date().toISOString(),
        quality: null
      };
      return {
        prompt: 'You believe this is ' + diagnosis + '. Now argue against yourself: what evidence would you expect to see if this were NOT ' + diagnosis + '? What findings are missing? What alternative explains the evidence better?'
      };
    },

    // Record the student's counter-argument
    addCounterArgument: function(text) {
      if (!this._currentSession) return;
      this._currentSession.counterArguments.push({
        text: text,
        timestamp: new Date().toISOString()
      });
    },

    // Score the DA session
    evaluate: function(targetDiagnosis, differentials) {
      if (!this._currentSession) return null;
      var session = this._currentSession;
      var args = session.counterArguments;

      var evaluation = {
        argumentCount: args.length,
        totalWords: args.reduce(function(sum, a) { return sum + a.text.split(/\s+/).length; }, 0),
        mentionsAlternative: false,
        mentionsMissingEvidence: false,
        mentionsDisconfirming: false,
        quality: 'insufficient'
      };

      var allText = args.map(function(a) { return a.text; }).join(' ').toLowerCase();

      // Check for key elements of good adversarial reasoning
      if (/but|however|although|alternatively|instead|could also|might be|consider/.test(allText)) {
        evaluation.mentionsAlternative = true;
      }
      if (/missing|absent|don't see|didn't find|no evidence|would expect|should see/.test(allText)) {
        evaluation.mentionsMissingEvidence = true;
      }
      if (/against|argue|refute|inconsistent|doesn't fit|unusual|atypical|doesn't explain/.test(allText)) {
        evaluation.mentionsDisconfirming = true;
      }

      // Score
      var score = 0;
      if (evaluation.mentionsAlternative) score++;
      if (evaluation.mentionsMissingEvidence) score++;
      if (evaluation.mentionsDisconfirming) score++;
      if (evaluation.totalWords > 50) score++;

      evaluation.quality = score >= 3 ? 'excellent' : score >= 2 ? 'good' : score >= 1 ? 'partial' : 'insufficient';
      session.quality = evaluation.quality;
      session.evaluation = evaluation;
      session.completedAt = new Date().toISOString();

      this._sessions.push(session);
      this._currentSession = null;
      return evaluation;
    },

    getSessions: function() { return this._sessions; },
    getCurrentSession: function() { return this._currentSession; }
  };


  // ════════════════════════════════════════════════════════════════
  // 5. AFTER-ACTION REVIEW — Structured Debrief (Aviation/Military)
  // ════════════════════════════════════════════════════════════════
  //
  // Four questions, answered in order:
  //   1. What was the plan? (What did you think was going on?)
  //   2. What actually happened? (What did the evidence show?)
  //   3. Why was it different? (Where did your reasoning diverge?)
  //   4. What will you do next time? (What's the takeaway?)

  RdxReasoning.AAR = {
    _review: null,

    start: function(caseId, initialDiagnosis, finalDiagnosis) {
      this._review = {
        caseId: caseId,
        initialDiagnosis: initialDiagnosis,
        finalDiagnosis: finalDiagnosis,
        diagnosisChanged: initialDiagnosis !== finalDiagnosis,
        responses: {},
        startedAt: new Date().toISOString()
      };
      return this._review;
    },

    respond: function(question, text) {
      if (!this._review) return;
      this._review.responses[question] = {
        text: text,
        wordCount: text.split(/\s+/).length,
        timestamp: new Date().toISOString()
      };
    },

    getQuestions: function() {
      return [
        { id: 'plan', label: 'What was your initial assessment?', prompt: 'What did you think was going on when you first saw this patient? What was your leading diagnosis and why?' },
        { id: 'reality', label: 'What did the evidence show?', prompt: 'As you gathered more information — history, exam, labs, imaging — what did the evidence actually point to? Where did it confirm or surprise you?' },
        { id: 'gap', label: 'Why was it different?', prompt: 'If your initial assessment differed from the final diagnosis, where did your reasoning go wrong? What did you miss or weight incorrectly? If you were right, what was the key evidence that confirmed it?' },
        { id: 'next', label: 'What will you do differently?', prompt: 'Next time you see a similar presentation, what will you do differently? What pattern will you recognize? What question will you ask that you didn\'t ask this time?' }
      ];
    },

    evaluate: function() {
      if (!this._review) return null;
      var r = this._review;
      var quality = {
        completeness: Object.keys(r.responses).length / 4,
        totalWords: Object.values(r.responses).reduce(function(sum, resp) { return sum + (resp.wordCount || 0); }, 0),
        reflectiveDepth: 'surface'
      };

      var allText = Object.values(r.responses).map(function(resp) { return resp.text || ''; }).join(' ').toLowerCase();

      // Check for deep reflection markers
      if (/because|reason|thought process|assumption|bias|mistake|lesson|pattern|recognize/.test(allText)) {
        quality.reflectiveDepth = quality.totalWords > 100 ? 'deep' : 'moderate';
      }

      r.quality = quality;
      r.completedAt = new Date().toISOString();
      return quality;
    },

    getReview: function() { return this._review; }
  };


  // ════════════════════════════════════════════════════════════════
  // 6. POST-GAME ANALYSIS — Expert Pathway Comparison
  // ════════════════════════════════════════════════════════════════
  //
  // Chess engine comparison: show the expert's reasoning pathway
  // alongside the student's, highlighting divergence points.

  RdxReasoning.PostGame = {
    generate: function(studentData, caseData) {
      if (!studentData || !caseData) return null;

      var analysis = {
        caseId: caseData.caseId,
        diagnosis: caseData.targetDiagnosis,
        divergences: [],
        strengths: [],
        missedSteps: []
      };

      // Compare student's initial DDx to the target
      var initialDdx = (studentData.differentials && studentData.differentials.initial) || [];
      var hadCorrect = initialDdx.some(function(d) {
        return d.diagnosis && d.diagnosis.toLowerCase().includes(caseData.targetDiagnosis.toLowerCase().split(' ')[0]);
      });

      if (hadCorrect) {
        analysis.strengths.push('Correct diagnosis was in your initial differential — good pattern recognition.');
      } else {
        analysis.divergences.push({
          phase: 'Initial DDx',
          student: initialDdx.slice(0, 3).map(function(d) { return d.diagnosis; }).join(', ') || 'none recorded',
          expert: caseData.targetDiagnosis + ' should have been considered based on chief complaint and demographics.',
          impact: 'high'
        });
      }

      // Check critical orders
      if (caseData.managementData && caseData.managementData.criticalActions) {
        caseData.managementData.criticalActions.forEach(function(action) {
          analysis.missedSteps.push({
            action: action.action || action.name,
            category: 'critical_order',
            teaching: action.teaching || ''
          });
        });
      }

      // Check must-not-miss
      if (caseData.mustNotMiss) {
        analysis.mustNotMissItems = caseData.mustNotMiss;
      }

      return analysis;
    },

    renderHTML: function(analysis) {
      if (!analysis) return '';
      var html = '<div style="font-size:13px">';

      if (analysis.strengths.length > 0) {
        html += '<div style="background:#ECFDF5;border:1px solid #A7F3D0;border-radius:8px;padding:12px;margin-bottom:10px">';
        html += '<div style="font-weight:700;color:#059669;margin-bottom:4px">Strengths</div>';
        analysis.strengths.forEach(function(s) { html += '<div style="font-size:12px">' + s + '</div>'; });
        html += '</div>';
      }

      if (analysis.divergences.length > 0) {
        html += '<div style="background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:12px;margin-bottom:10px">';
        html += '<div style="font-weight:700;color:#DC2626;margin-bottom:4px">Divergence Points</div>';
        analysis.divergences.forEach(function(d) {
          html += '<div style="font-size:12px;margin-bottom:6px"><strong>' + d.phase + ':</strong> ' + d.expert + '</div>';
        });
        html += '</div>';
      }

      html += '</div>';
      return html;
    }
  };


  // ════════════════════════════════════════════════════════════════
  // 7. CASE PAIRING — Similar-Presenting Case Recommendation
  // ════════════════════════════════════════════════════════════════

  RdxReasoning.CasePairing = {
    // Find cases with similar chief complaints but different diagnoses
    findPair: function(completedCaseId, crtIndex) {
      if (!crtIndex) return null;
      var completed = crtIndex[completedCaseId];
      if (!completed) return null;

      var cc = (completed.chiefComplaint || '').toLowerCase().split('/')[0].trim();
      if (!cc) return null;

      // Find cases with overlapping chief complaint but different ID
      var candidates = [];
      Object.entries(crtIndex).forEach(function(e) {
        var id = e[0], c = e[1];
        if (id === completedCaseId) return;
        var otherCC = (c.chiefComplaint || '').toLowerCase().split('/')[0].trim();
        if (otherCC === cc || otherCC.includes(cc) || cc.includes(otherCC)) {
          candidates.push({ id: id, chiefComplaint: c.chiefComplaint, category: c.category, acuity: c.acuity });
        }
      });

      if (candidates.length === 0) return null;

      // Prefer different category (truly distinguishing case)
      var diffCat = candidates.filter(function(c) { return c.category !== completed.category; });
      var pick = diffCat.length > 0 ? diffCat[Math.floor(Math.random() * diffCat.length)] : candidates[Math.floor(Math.random() * candidates.length)];

      return {
        completedCase: completedCaseId,
        recommendedCase: pick.id,
        chiefComplaint: pick.chiefComplaint,
        reason: 'Similar chief complaint (' + cc + ') — different diagnosis. Can you distinguish them?',
        samePresentationDifferentDiagnosis: pick.category !== completed.category
      };
    }
  };


  // ════════════════════════════════════════════════════════════════
  // 8. TACTICAL PUZZLES — Micro-Challenge Generator
  // ════════════════════════════════════════════════════════════════

  RdxReasoning.Puzzles = {
    _templates: [
      {
        type: 'lab_shift',
        prompt: function(dx, lab, value, ddx) {
          return 'Your differential includes ' + ddx.join(', ') + '. The ' + lab + ' comes back ' + value + '. What changes?';
        }
      },
      {
        type: 'pe_finding',
        prompt: function(dx, finding, ddx) {
          return 'On exam you find: ' + finding + '. Your differential was ' + ddx.join(', ') + '. Does this change your ranking?';
        }
      },
      {
        type: 'missing_evidence',
        prompt: function(dx) {
          return 'A colleague says "this is definitely ' + dx + '." What single finding, if present, would make you disagree?';
        }
      },
      {
        type: 'time_pressure',
        prompt: function(dx, ddx) {
          return 'You have 60 seconds. The patient is decompensating. Your differential is ' + ddx.join(', ') + '. What do you do RIGHT NOW and why?';
        }
      }
    ],

    generate: function(caseData) {
      if (!caseData) return null;
      var template = this._templates[Math.floor(Math.random() * this._templates.length)];
      var dx = caseData.targetDiagnosis || 'the diagnosis';
      var ddx = ['PE', 'pneumonia', 'ACS']; // fallback

      if (caseData.differentials && caseData.differentials.initial) {
        ddx = caseData.differentials.initial.slice(0, 3).map(function(d) { return d.diagnosis || d; });
      }

      return {
        type: template.type,
        prompt: template.prompt(dx, 'troponin', '0.04 ng/mL', ddx),
        targetDiagnosis: dx,
        generatedAt: new Date().toISOString()
      };
    }
  };


  // ════════════════════════════════════════════════════════════════
  // SUMMARY — Aggregate all tool data for researcher dashboard
  // ════════════════════════════════════════════════════════════════

  RdxReasoning.getSummary = function() {
    return {
      ach: RdxReasoning.ACH.getMatrix(),
      achAnalysis: RdxReasoning.ACH.analyze(),
      fmea: RdxReasoning.FMEA.getEntries(),
      fmeaAnalysis: RdxReasoning.FMEA.analyze(),
      triangulation: RdxReasoning.Triangulation.getStatus(),
      triangulationCommitments: RdxReasoning.Triangulation.getCommitments(),
      devilsAdvocate: RdxReasoning.DevilsAdvocate.getSessions(),
      aar: RdxReasoning.AAR.getReview(),
      postGame: null, // populated at debrief
      casePairing: null // populated at completion
    };
  };

  window.RdxReasoning = RdxReasoning;

})(window);
