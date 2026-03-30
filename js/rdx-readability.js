/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx Readability Analyzer — rdx-readability.js
 * ═══════════════════════════════════════════════════════════════
 * Measures the reading/language level of student messages using
 * standard readability indices:
 *
 * - Flesch-Kincaid Grade Level (US grade level)
 * - Flesch Reading Ease (0-100, higher = easier)
 * - SMOG Index (years of education needed)
 * - Automated Readability Index (ARI)
 * - Average sentence length and word length
 *
 * Used to assess whether the student communicates at a level
 * the patient can understand. CDC recommends patient materials
 * at 6th-8th grade level. A student speaking at 14th grade
 * level to a patient is a communication gap.
 *
 * Also analyzes the readability of radiology reports for the
 * study — comparing standard vs simplified versions.
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  const Readability = {

    // ── CORE: Syllable Counter ──
    // Estimates syllable count using standard English heuristics
    _countSyllables: function(word) {
      word = word.toLowerCase().replace(/[^a-z]/g, '');
      if (word.length <= 2) return 1;

      // Common exceptions
      var exceptions = {
        'area': 3, 'idea': 3, 'real': 2, 'being': 2, 'create': 2,
        'every': 3, 'library': 3, 'different': 3, 'science': 2,
        'medicine': 3, 'patient': 2, 'treatment': 2, 'disease': 2,
        'diagnosis': 4, 'pneumonia': 4, 'bilateral': 4, 'auscultation': 5,
        'dyspnea': 3, 'tachycardia': 5, 'hypoxemia': 5, 'procalcitonin': 5
      };
      if (exceptions[word]) return exceptions[word];

      // Rule-based syllable counting
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
      word = word.replace(/^y/, '');
      var matches = word.match(/[aeiouy]{1,2}/g);
      return matches ? matches.length : 1;
    },

    // ── CORE: Text Statistics ──
    _getStats: function(text) {
      if (!text || text.trim().length === 0) {
        return { words: 0, sentences: 0, syllables: 0, polysyllables: 0, chars: 0, avgWordLength: 0, avgSentenceLength: 0 };
      }

      // Clean and split
      var clean = text.replace(/\s+/g, ' ').trim();
      var sentences = clean.split(/[.!?]+/).filter(function(s) { return s.trim().length > 0; });
      if (sentences.length === 0) sentences = [clean]; // treat as one sentence if no punctuation

      var words = clean.split(/\s+/).filter(function(w) { return w.replace(/[^a-zA-Z]/g, '').length > 0; });
      var totalSyllables = 0;
      var polysyllableCount = 0;
      var totalChars = 0;

      var self = this;
      words.forEach(function(w) {
        var cleaned = w.replace(/[^a-zA-Z]/g, '');
        if (cleaned.length === 0) return;
        totalChars += cleaned.length;
        var syllables = self._countSyllables(cleaned);
        totalSyllables += syllables;
        if (syllables >= 3) polysyllableCount++;
      });

      return {
        words: words.length,
        sentences: sentences.length,
        syllables: totalSyllables,
        polysyllables: polysyllableCount,
        chars: totalChars,
        avgWordLength: words.length > 0 ? Math.round(totalChars / words.length * 10) / 10 : 0,
        avgSentenceLength: sentences.length > 0 ? Math.round(words.length / sentences.length * 10) / 10 : 0
      };
    },

    // ── Flesch-Kincaid Grade Level ──
    // US school grade level needed to understand the text
    // Formula: 0.39 * (words/sentences) + 11.8 * (syllables/words) - 15.59
    fleschKincaidGrade: function(text) {
      var s = this._getStats(text);
      if (s.words === 0 || s.sentences === 0) return 0;
      var grade = 0.39 * (s.words / s.sentences) + 11.8 * (s.syllables / s.words) - 15.59;
      return Math.max(0, Math.round(grade * 10) / 10);
    },

    // ── Flesch Reading Ease ──
    // 0-100 scale. 60-70 = plain English. 30-50 = college level. <30 = graduate/professional
    // Formula: 206.835 - 1.015 * (words/sentences) - 84.6 * (syllables/words)
    fleschReadingEase: function(text) {
      var s = this._getStats(text);
      if (s.words === 0 || s.sentences === 0) return 100;
      var score = 206.835 - 1.015 * (s.words / s.sentences) - 84.6 * (s.syllables / s.words);
      return Math.max(0, Math.min(100, Math.round(score * 10) / 10));
    },

    // ── SMOG Index ──
    // Years of education needed. Requires 30+ sentences ideally, but works with fewer.
    // Formula: 3 + sqrt(polysyllables * (30/sentences))
    smogIndex: function(text) {
      var s = this._getStats(text);
      if (s.sentences === 0) return 0;
      var smog = 3 + Math.sqrt(s.polysyllables * (30 / s.sentences));
      return Math.round(smog * 10) / 10;
    },

    // ── Automated Readability Index ──
    // Formula: 4.71 * (chars/words) + 0.5 * (words/sentences) - 21.43
    ari: function(text) {
      var s = this._getStats(text);
      if (s.words === 0 || s.sentences === 0) return 0;
      var score = 4.71 * (s.chars / s.words) + 0.5 * (s.words / s.sentences) - 21.43;
      return Math.max(0, Math.round(score * 10) / 10);
    },

    // ── Comprehensive Analysis ──
    // Returns all metrics plus interpretation
    analyze: function(text) {
      var stats = this._getStats(text);
      var fkGrade = this.fleschKincaidGrade(text);
      var fre = this.fleschReadingEase(text);
      var smog = this.smogIndex(text);
      var ariScore = this.ari(text);

      // Consensus grade level (average of FK and SMOG)
      var consensusGrade = Math.round((fkGrade + smog) / 2 * 10) / 10;

      // Interpretation
      var level = 'unknown';
      var patientAppropriate = false;
      if (consensusGrade <= 6) { level = 'elementary'; patientAppropriate = true; }
      else if (consensusGrade <= 8) { level = 'middle_school'; patientAppropriate = true; }
      else if (consensusGrade <= 10) { level = 'high_school'; patientAppropriate = false; }
      else if (consensusGrade <= 12) { level = 'college_prep'; patientAppropriate = false; }
      else if (consensusGrade <= 16) { level = 'college'; patientAppropriate = false; }
      else { level = 'graduate_professional'; patientAppropriate = false; }

      return {
        stats: stats,
        fleschKincaidGrade: fkGrade,
        fleschReadingEase: fre,
        smogIndex: smog,
        ari: ariScore,
        consensusGrade: consensusGrade,
        level: level,
        patientAppropriate: patientAppropriate,
        interpretation: this._interpret(fre, consensusGrade)
      };
    },

    _interpret: function(fre, grade) {
      if (grade <= 6) return 'Easy to understand. Appropriate for most patients.';
      if (grade <= 8) return 'Fairly easy. Appropriate for patients with average literacy.';
      if (grade <= 10) return 'Somewhat complex. May be difficult for patients with limited health literacy.';
      if (grade <= 12) return 'Complex. Likely above most patients\' comprehension level.';
      if (grade <= 16) return 'Very complex. College-level language. Most patients would struggle to understand this.';
      return 'Extremely complex. Graduate/professional-level language. Inappropriate for patient communication.';
    },

    // ── Track Student Communication Over Time ──
    // Call this on each student message to build a session profile
    _sessionHistory: [],

    trackMessage: function(messageText, phase, turnNumber) {
      var analysis = this.analyze(messageText);
      var record = {
        turn: turnNumber,
        phase: phase,
        text: messageText.substring(0, 100),
        wordCount: analysis.stats.words,
        fleschKincaidGrade: analysis.fleschKincaidGrade,
        fleschReadingEase: analysis.fleschReadingEase,
        smogIndex: analysis.smogIndex,
        consensusGrade: analysis.consensusGrade,
        level: analysis.level,
        patientAppropriate: analysis.patientAppropriate,
        timestamp: new Date().toISOString()
      };
      this._sessionHistory.push(record);
      return record;
    },

    // ── Session Summary ──
    getSessionSummary: function() {
      if (this._sessionHistory.length === 0) return null;

      var patientPhase = this._sessionHistory.filter(function(h) { return h.phase === 3; }); // Phase 3 = talking to patient
      var nonPatient = this._sessionHistory.filter(function(h) { return h.phase !== 3; });

      var avgGradeAll = this._sessionHistory.reduce(function(a, h) { return a + h.consensusGrade; }, 0) / this._sessionHistory.length;
      var avgGradePatient = patientPhase.length > 0
        ? patientPhase.reduce(function(a, h) { return a + h.consensusGrade; }, 0) / patientPhase.length
        : null;
      var avgGradeAttending = nonPatient.length > 0
        ? nonPatient.reduce(function(a, h) { return a + h.consensusGrade; }, 0) / nonPatient.length
        : null;

      var patientAppropriateRate = patientPhase.length > 0
        ? Math.round(patientPhase.filter(function(h) { return h.patientAppropriate; }).length / patientPhase.length * 100)
        : null;

      // Did the student adjust language between attending and patient?
      var adjustsLanguage = (avgGradePatient !== null && avgGradeAttending !== null)
        ? avgGradePatient < avgGradeAttending - 1
        : null;

      return {
        totalMessages: this._sessionHistory.length,
        avgGradeAll: Math.round(avgGradeAll * 10) / 10,
        avgGradePatient: avgGradePatient !== null ? Math.round(avgGradePatient * 10) / 10 : null,
        avgGradeAttending: avgGradeAttending !== null ? Math.round(avgGradeAttending * 10) / 10 : null,
        patientAppropriateRate: patientAppropriateRate,
        adjustsLanguageForPatient: adjustsLanguage,
        highestGrade: Math.max.apply(null, this._sessionHistory.map(function(h) { return h.consensusGrade; })),
        lowestGrade: Math.min.apply(null, this._sessionHistory.map(function(h) { return h.consensusGrade; })),
        trend: this._getTrend(),
        history: this._sessionHistory
      };
    },

    _getTrend: function() {
      var h = this._sessionHistory;
      if (h.length < 4) return 'insufficient_data';
      var firstHalf = h.slice(0, Math.floor(h.length / 2));
      var secondHalf = h.slice(Math.floor(h.length / 2));
      var avgFirst = firstHalf.reduce(function(a, r) { return a + r.consensusGrade; }, 0) / firstHalf.length;
      var avgSecond = secondHalf.reduce(function(a, r) { return a + r.consensusGrade; }, 0) / secondHalf.length;
      if (avgSecond < avgFirst - 1) return 'simplifying'; // getting simpler = good for patient comm
      if (avgSecond > avgFirst + 1) return 'complexifying'; // getting more complex
      return 'stable';
    },

    // ── Compare Two Texts (for radiology report comparison) ──
    compareTexts: function(textA, textB, labelA, labelB) {
      var a = this.analyze(textA);
      var b = this.analyze(textB);
      return {
        [labelA || 'A']: {
          grade: a.consensusGrade,
          readingEase: a.fleschReadingEase,
          smog: a.smogIndex,
          level: a.level,
          wordCount: a.stats.words,
          avgSentenceLength: a.stats.avgSentenceLength
        },
        [labelB || 'B']: {
          grade: b.consensusGrade,
          readingEase: b.fleschReadingEase,
          smog: b.smogIndex,
          level: b.level,
          wordCount: b.stats.words,
          avgSentenceLength: b.stats.avgSentenceLength
        },
        gradeReduction: Math.round((a.consensusGrade - b.consensusGrade) * 10) / 10,
        readingEaseImprovement: Math.round((b.fleschReadingEase - a.fleschReadingEase) * 10) / 10,
        interpretation: a.consensusGrade > b.consensusGrade
          ? (labelB || 'B') + ' is ' + (a.consensusGrade - b.consensusGrade).toFixed(1) + ' grade levels easier to read than ' + (labelA || 'A')
          : 'Both texts are at similar reading levels'
      };
    },

    clear: function() { this._sessionHistory = []; }
  };

  window.RdxReadability = Readability;
})();
