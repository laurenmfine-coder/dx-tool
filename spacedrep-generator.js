/* spacedrep-generator.js — Spaced Repetition Card Generator
 *
 * Generates and schedules review cards from completed simulation sessions
 * using the SM-2 algorithm (Wozniak, 1990 — the same algorithm used by Anki).
 *
 * Cards are stored in localStorage under keys 'radStudy_cards_<caseId>'
 * and read by rdx-agent-core.js _getDueCardCount() and the Study Hub.
 *
 * Evidence basis:
 *   Wozniak, P. A. (1990). Optimization of Learning (Master's thesis).
 *   University of Technology, Poznan. SM-2 algorithm.
 *   Kerfoot, B. P., & Brotschi, E. (2009). Online spaced education to teach
 *   urology to medical students. Am J Surg, 197(1), 89–95.
 */
(function () {
  'use strict';

  var STORAGE_PREFIX = 'radStudy_cards_';

  // ── SM-2 Algorithm ─────────────────────────────────────────────
  // quality: 0-5 (5=perfect recall, 0=complete blackout)
  // Returns updated card with new interval, repetition, easeFactor, nextReview
  function sm2Update(card, quality) {
    quality = Math.max(0, Math.min(5, quality));

    var ef  = card.easeFactor || 2.5;
    var rep = card.repetition || 0;
    var interval = card.interval || 1;

    if (quality >= 3) {
      // Correct response
      if (rep === 0)      interval = 1;
      else if (rep === 1) interval = 6;
      else                interval = Math.round(interval * ef);
      rep++;
    } else {
      // Incorrect — reset
      rep = 0;
      interval = 1;
    }

    // Update ease factor (min 1.3)
    ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    ef = Math.max(1.3, Math.round(ef * 100) / 100);

    var nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    return Object.assign({}, card, {
      repetition:  rep,
      interval:    interval,
      easeFactor:  ef,
      nextReview:  nextReview.toISOString(),
      lastReviewed: new Date().toISOString()
    });
  }

  // ── Generate cards from session gaps ──────────────────────────
  // gaps: array from rdx-agent-tools.generateSpacedRepCards()
  function generateCards(gapsOrCaseData, sessionId) {
    // Support being called with raw caseData (legacy) or gap array
    var gaps = Array.isArray(gapsOrCaseData) ? gapsOrCaseData : [];

    if (!Array.isArray(gaps) || gaps.length === 0) return [];

    var now = new Date().toISOString();
    return gaps
      .filter(function (g) { return g.front || g.spacedRepPrompt; })
      .map(function (g, i) {
        return {
          cardId:       (sessionId || 'session') + '-' + (g.id || i),
          caseId:       g.caseId || null,
          sessionId:    sessionId || null,
          category:     g.category || 'general',
          severity:     g.severity || 'medium',
          front:        g.front || g.spacedRepPrompt || '',
          back:         g.back  || g.spacedRepAnswer || '',
          teachingPoint: g.teachingPoint || '',
          relatedTopics: g.relatedTopics || [],
          createdAt:    now,
          // SM-2 initial values
          interval:     1,
          repetition:   0,
          easeFactor:   2.5,
          nextReview:   now   // due immediately on creation
        };
      });
  }

  // ── Save cards to localStorage ────────────────────────────────
  function saveCards(caseId, cards) {
    if (!caseId || !cards || cards.length === 0) return;
    try {
      var key     = STORAGE_PREFIX + caseId;
      var existing = JSON.parse(localStorage.getItem(key) || '[]');
      // Merge — avoid duplicating cards by cardId
      var existingIds = new Set(existing.map(function (c) { return c.cardId; }));
      var newCards = cards.filter(function (c) { return !existingIds.has(c.cardId); });
      var merged = existing.concat(newCards);
      // Cap at 50 cards per case to avoid localStorage bloat
      if (merged.length > 50) merged = merged.slice(-50);
      localStorage.setItem(key, JSON.stringify(merged));
    } catch (e) {}
  }

  // ── Get due cards ─────────────────────────────────────────────
  function getDueCards(caseId) {
    try {
      var now  = new Date().toISOString();
      var key  = caseId ? STORAGE_PREFIX + caseId : null;
      var all  = [];

      if (key) {
        all = JSON.parse(localStorage.getItem(key) || '[]');
      } else {
        // All cases
        for (var i = 0; i < localStorage.length; i++) {
          var k = localStorage.key(i);
          if (k && k.startsWith(STORAGE_PREFIX)) {
            all = all.concat(JSON.parse(localStorage.getItem(k) || '[]'));
          }
        }
      }
      return all.filter(function (c) { return c.nextReview <= now; });
    } catch (e) { return []; }
  }

  // ── Get next review date for a card ──────────────────────────
  function getNextReview(cardId) {
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.startsWith(STORAGE_PREFIX)) {
          var cards = JSON.parse(localStorage.getItem(k) || '[]');
          var card  = cards.find(function (c) { return c.cardId === cardId; });
          if (card) return new Date(card.nextReview);
        }
      }
      return null;
    } catch (e) { return null; }
  }

  // ── Record review and apply SM-2 ──────────────────────────────
  // quality: 0-5 (pass 4 for 'got it', 2 for 'hard', 0 for 'missed')
  function recordReview(cardId, quality) {
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.startsWith(STORAGE_PREFIX)) {
          var cards = JSON.parse(localStorage.getItem(k) || '[]');
          var idx   = cards.findIndex(function (c) { return c.cardId === cardId; });
          if (idx !== -1) {
            cards[idx] = sm2Update(cards[idx], quality);
            localStorage.setItem(k, JSON.stringify(cards));
            return cards[idx];
          }
        }
      }
      return null;
    } catch (e) { return null; }
  }

  // ── Get all card stats (for Study Hub display) ────────────────
  function getStats() {
    try {
      var now   = new Date().toISOString();
      var total = 0, due = 0, learned = 0;
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.startsWith(STORAGE_PREFIX)) {
          var cards = JSON.parse(localStorage.getItem(k) || '[]');
          total   += cards.length;
          due     += cards.filter(function (c) { return c.nextReview <= now; }).length;
          learned += cards.filter(function (c) { return c.repetition >= 2; }).length;
        }
      }
      return { total: total, due: due, learned: learned };
    } catch (e) { return { total: 0, due: 0, learned: 0 }; }
  }

  // ── Export ─────────────────────────────────────────────────────
  window.SpacedRepGenerator = {
    generateCards:  generateCards,
    saveCards:      saveCards,
    getDueCards:    getDueCards,
    getNextReview:  getNextReview,
    recordReview:   recordReview,
    getStats:       getStats,
    sm2Update:      sm2Update   // exposed for testing
  };

})();
