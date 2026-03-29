/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx RAG Layer — rdx-rag.js
 * ═══════════════════════════════════════════════════════════════
 * Retrieval-Augmented Generation for grounding Claude's responses
 * in verified, open-access medical guidelines.
 *
 * Instead of relying on Claude's training data (which can hallucinate),
 * this layer retrieves relevant guideline content BEFORE the Claude
 * call and injects it as grounding context in the system prompt.
 *
 * Claude sees: "When discussing findings, reference these verified sources:
 * [guideline excerpts]. Do not generate medical claims beyond what these
 * sources support."
 *
 * The agent navigates to sources. It is never the source itself.
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  const RAG = {

    /**
     * Retrieve relevant guidelines for the current case and phase.
     * Returns a grounding block to inject into Claude's system prompt.
     *
     * @param {string} caseId - Current case ID
     * @param {string} diagnosis - Target or working diagnosis
     * @param {number} phase - Current simulation phase
     * @param {string[]} studentMentions - Topics the student has raised
     * @returns {string} Grounding text for system prompt injection
     */
    getGroundingContext: function(caseId, diagnosis, phase, studentMentions) {
      if (!window.GUIDELINES_LIBRARY) return '';

      var relevant = [];

      // Search all categories for case or diagnosis matches
      Object.entries(window.GUIDELINES_LIBRARY).forEach(function(entry) {
        var category = entry[0];
        var guidelines = entry[1];
        guidelines.forEach(function(g) {
          var score = 0;

          // Match by case ID
          if (g.cases && g.cases.some(function(c) {
            return c.toLowerCase().includes(caseId.toLowerCase().replace(/-/g, ''));
          })) score += 3;

          // Match by diagnosis keywords
          if (diagnosis && g.title.toLowerCase().includes(diagnosis.toLowerCase())) score += 2;
          if (diagnosis && g.validates && g.validates.some(function(v) {
            return v.toLowerCase().includes(diagnosis.toLowerCase());
          })) score += 2;

          // Match by student mentions
          if (studentMentions && studentMentions.length > 0) {
            studentMentions.forEach(function(mention) {
              if (g.title.toLowerCase().includes(mention.toLowerCase())) score += 1;
              if (g.validates && g.validates.some(function(v) {
                return v.toLowerCase().includes(mention.toLowerCase());
              })) score += 1;
            });
          }

          if (score > 0) {
            relevant.push({
              score: score,
              id: g.id,
              title: g.title,
              journal: g.journal,
              year: g.year,
              validates: g.validates || [],
              license: g.license || 'verify'
            });
          }
        });
      });

      // Sort by relevance score, take top 3
      relevant.sort(function(a, b) { return b.score - a.score; });
      relevant = relevant.slice(0, 3);

      if (relevant.length === 0) return '';

      // Build grounding block
      var lines = [
        '\n── VERIFIED REFERENCE CONTEXT (RAG) ──',
        'The following validated content points come from peer-reviewed, open-access guidelines.',
        'When discussing clinical findings, you may reference these points.',
        'Do NOT generate medical claims beyond what these sources support.',
        'Do NOT cite these sources to the student — they are for YOUR grounding only.\n'
      ];

      relevant.forEach(function(g) {
        lines.push('Source: ' + g.title + ' (' + g.journal + ', ' + g.year + ')');
        if (g.validates.length > 0) {
          lines.push('Validated points:');
          g.validates.forEach(function(v) {
            lines.push('  \u2022 ' + v);
          });
        }
        lines.push('');
      });

      lines.push('── END REFERENCE CONTEXT ──');
      return lines.join('\n');
    },

    /**
     * Phase-aware grounding: only inject relevant content for the phase.
     * During history-taking, no clinical grounding needed (patient is talking).
     * During labs/imaging and management, grounding is critical.
     */
    getPhaseGrounding: function(caseData, phase, state) {
      // No grounding needed during patient interview
      if (phase <= 3) return '';

      // Light grounding for differential discussion
      if (phase === 4 || phase === 2) {
        return this.getGroundingContext(
          caseData.caseId,
          null, // don't ground on target diagnosis — avoid confirmation bias
          phase,
          this._extractStudentTopics(state)
        );
      }

      // Full grounding for labs, imaging, management
      if (phase >= 5) {
        // Still don't inject target diagnosis into grounding
        // Use the student's own differential as search terms
        var studentDx = [];
        Object.values(state.differentials || {}).forEach(function(phaseList) {
          if (Array.isArray(phaseList)) {
            phaseList.forEach(function(d) {
              if (d.diagnosis) studentDx.push(d.diagnosis);
            });
          }
        });

        return this.getGroundingContext(
          caseData.caseId,
          studentDx.join(' '),
          phase,
          this._extractStudentTopics(state)
        );
      }

      return '';
    },

    /**
     * Extract topics the student has mentioned (for relevance matching).
     */
    _extractStudentTopics: function(state) {
      if (!state || !state.turns) return [];
      var topics = new Set();
      state.turns.forEach(function(t) {
        if (t.role !== 'student') return;
        var msg = t.content.toLowerCase();
        // Extract medical terms mentioned by student
        var patterns = [
          /\b(asthma|copd|pneumonia|pe\b|chf|heart failure|sarcoidosis|tb|tuberculosis)\b/gi,
          /\b(ild|interstitial|fibrosis|hp\b|hypersensitivity)\b/gi,
          /\b(evali|vaping|cocaine|vasospasm|pcp|hiv|aids)\b/gi,
          /\b(anaphylaxis|urticaria|angioedema|drug reaction|allergy)\b/gi
        ];
        patterns.forEach(function(p) {
          var matches = msg.match(p);
          if (matches) matches.forEach(function(m) { topics.add(m.toLowerCase()); });
        });
      });
      return Array.from(topics);
    },

    /**
     * Get a grounding disclaimer for the debrief phase.
     * Ensures AI-generated teaching content stays within verified bounds.
     */
    getDebriefGrounding: function(caseData, gaps) {
      var context = this.getGroundingContext(
        caseData.caseId,
        caseData.targetDiagnosis,
        99, // debrief phase
        gaps.map(function(g) { return g.title; })
      );

      if (!context) return '';

      return context + '\n\nIMPORTANT: Your teaching debrief should only reference clinical facts that are supported by the verified sources above. If a teaching point is not supported by these sources, phrase it as a general recommendation to review the topic rather than stating clinical facts.';
    }
  };

  window.RdxRAG = RAG;
})();
