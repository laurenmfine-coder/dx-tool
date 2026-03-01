// ═══════════════════════════════════════════════════════════════
// SPACEDREP FLASHCARD GENERATOR — Phase 4 Integration
// Harvests learning gaps from Phase 1 (Chart Review Tracking),
// Phase 2 (Order Validation), and Phase 3 (CaseFrame Analysis)
// to generate patient-anchored spaced repetition flashcards.
// Uses SM-2 algorithm for scheduling.
// ═══════════════════════════════════════════════════════════════

window.VEMR_SPACEDREP = {

  STORAGE_KEY: "vemr-spacedrep-cards",
  cards: [],

  // ─── CARD CATEGORIES ───
  CATEGORIES: {
    PITFALL:        { label: "Pitfall",          color: "#C62828", icon: "⚠️" },
    CONTRAINDICATION:{ label: "Contraindication", color: "#AD1457", icon: "🚫" },
    MUST_NOT_MISS:  { label: "Must-Not-Miss",    color: "#E65100", icon: "🔴" },
    DIAGNOSTIC_GAP: { label: "Diagnostic Gap",   color: "#F57F17", icon: "🔍" },
    CHART_REVIEW:   { label: "Chart Review",     color: "#1565C0", icon: "📋" },
    WORKUP_GAP:     { label: "Workup Gap",       color: "#6A1B9A", icon: "🧪" },
    TREATMENT_GAP:  { label: "Treatment Gap",    color: "#00695C", icon: "💊" },
    REINFORCEMENT:  { label: "Reinforcement",    color: "#2E7D32", icon: "✅" }
  },

  // ─── INITIALIZE ───
  init: function() {
    var saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try { this.cards = JSON.parse(saved); } catch(e) { this.cards = []; }
    }
    return this;
  },

  // ─── HARVEST GAPS FROM PHASE 1: CHART REVIEW ───
  harvestChartReviewGaps: function(caseId, patientName) {
    if (!window.CHART_TRACKING) return [];
    var gaps = [];
    var tracking = CHART_TRACKING.getTrackingData ? CHART_TRACKING.getTrackingData() : null;
    if (!tracking) return [];

    // Identify unreviewed tabs
    var tabs = ["problems", "medications", "allergies", "vitals", "visits", "labs", "imaging", "immunizations", "familyHistory", "socialHistory"];
    tabs.forEach(function(tab) {
      if (!tracking.tabsViewed || !tracking.tabsViewed[tab]) {
        gaps.push({
          category: "CHART_REVIEW",
          front: "When admitting a patient, why is reviewing the " + tab.replace(/([A-Z])/g, " $1").toLowerCase() + " tab critical?",
          back: "The " + tab + " tab can reveal crucial information that affects diagnosis and treatment. For " + patientName + ", reviewing this tab was important because unreviewed data may contain key findings that change management.",
          caseId: caseId,
          patientName: patientName,
          source: "Phase 1 — Chart Review Tracking"
        });
      }
    });

    // Time-in-chart gaps
    if (tracking.totalTimeSeconds && tracking.totalTimeSeconds < 120) {
      gaps.push({
        category: "CHART_REVIEW",
        front: "What are the risks of spending insufficient time on chart review before clinical decision-making?",
        back: "Inadequate chart review can lead to missed allergies, drug interactions, relevant PMH, or prior workup results. Best practice: review medications, allergies, and problem list BEFORE placing orders.",
        caseId: caseId,
        patientName: patientName,
        source: "Phase 1 — Insufficient review time"
      });
    }

    return gaps;
  },

  // ─── HARVEST GAPS FROM PHASE 2: ORDER VALIDATION ───
  harvestOrderValidationGaps: function(caseId, patientName) {
    if (!window.ORDER_VALIDATION) return [];
    var gaps = [];
    var alerts = ORDER_VALIDATION.triggeredAlerts || [];

    alerts.forEach(function(alert) {
      if (alert.severity === "critical" || alert.severity === "high") {
        var cat = alert.type === "allergy" ? "CONTRAINDICATION" :
                  alert.type === "duplicate" ? "PITFALL" :
                  alert.type === "interaction" ? "CONTRAINDICATION" : "TREATMENT_GAP";

        gaps.push({
          category: cat,
          front: alert.message || ("Why was this order flagged for " + patientName + "?"),
          back: alert.explanation || ("This order triggered a " + alert.severity + " " + alert.type + " alert. Always verify medication safety against allergies, current medications, and renal function before ordering."),
          caseId: caseId,
          patientName: patientName,
          source: "Phase 2 — Order Validation Alert"
        });
      }
    });

    return gaps;
  },

  // ─── HARVEST GAPS FROM PHASE 3: CASEFRAME ANALYSIS ───
  harvestCaseFrameGaps: function(caseId, patientName) {
    if (!window.CASEFRAME_ENGINE) return [];
    var gaps = [];
    var analysis = CASEFRAME_ENGINE.getAnalysis ? CASEFRAME_ENGINE.getAnalysis(caseId) : null;
    if (!analysis) return [];

    // Missed illness script elements
    if (analysis.missedFindings && analysis.missedFindings.length > 0) {
      analysis.missedFindings.forEach(function(finding) {
        gaps.push({
          category: "DIAGNOSTIC_GAP",
          front: "What key finding was missed in the workup of " + patientName + "?",
          back: finding.description + "\n\nClinical significance: " + (finding.significance || "This finding is part of the illness script and helps confirm or refute the diagnosis."),
          caseId: caseId,
          patientName: patientName,
          source: "Phase 3 — CaseFrame Missed Finding"
        });
      });
    }

    // Missed must-not-miss diagnoses
    if (analysis.missedMustNotMiss && analysis.missedMustNotMiss.length > 0) {
      analysis.missedMustNotMiss.forEach(function(dx) {
        gaps.push({
          category: "MUST_NOT_MISS",
          front: "For " + patientName + "'s presentation, what must-not-miss diagnosis was not considered?",
          back: dx.diagnosis + "\n\nWhy it matters: " + (dx.rationale || "This diagnosis can be life-threatening if missed and should always be considered in this clinical context."),
          caseId: caseId,
          patientName: patientName,
          source: "Phase 3 — Must-Not-Miss DDx"
        });
      });
    }

    // Workup gaps
    if (analysis.missedWorkup && analysis.missedWorkup.length > 0) {
      analysis.missedWorkup.forEach(function(item) {
        gaps.push({
          category: "WORKUP_GAP",
          front: "What diagnostic test or study was omitted in the evaluation of " + patientName + "?",
          back: item.test + "\n\nRationale: " + (item.rationale || "This test is part of the standard workup for this presentation and helps differentiate between diagnoses on the differential."),
          caseId: caseId,
          patientName: patientName,
          source: "Phase 3 — Workup Gap"
        });
      });
    }

    return gaps;
  },

  // ─── HARVEST ALL GAPS AND CREATE CARDS ───
  harvestAndGenerate: function(caseId, patientName) {
    var allGaps = [];
    allGaps = allGaps.concat(this.harvestChartReviewGaps(caseId, patientName));
    allGaps = allGaps.concat(this.harvestOrderValidationGaps(caseId, patientName));
    allGaps = allGaps.concat(this.harvestCaseFrameGaps(caseId, patientName));

    // Create cards with SM-2 scheduling
    var newCards = [];
    var self = this;
    allGaps.forEach(function(gap) {
      // Avoid duplicates
      var exists = self.cards.some(function(c) {
        return c.caseId === gap.caseId && c.front === gap.front;
      });
      if (exists) return;

      var card = {
        id: "card-" + Date.now() + "-" + Math.random().toString(36).substr(2, 6),
        category: gap.category,
        front: gap.front,
        back: gap.back,
        caseId: gap.caseId,
        patientName: gap.patientName,
        source: gap.source,
        created: new Date().toISOString(),

        // SM-2 Algorithm fields
        interval: 1,         // Days until next review
        repetition: 0,       // Times reviewed
        easeFactor: 2.5,     // Ease factor (2.5 default)
        nextReview: new Date().toISOString(), // Due immediately
        lastReview: null,
        quality: null         // Last review quality (0-5)
      };

      newCards.push(card);
      self.cards.push(card);
    });

    this._save();
    return newCards;
  },

  // ─── SM-2 REVIEW ───
  reviewCard: function(cardId, quality) {
    // quality: 0=complete blackout, 1=incorrect, 2=incorrect but close,
    //          3=correct with difficulty, 4=correct, 5=perfect
    var card = this.cards.find(function(c) { return c.id === cardId; });
    if (!card) return null;

    card.lastReview = new Date().toISOString();
    card.quality = quality;

    if (quality >= 3) {
      // Correct response
      if (card.repetition === 0) {
        card.interval = 1;
      } else if (card.repetition === 1) {
        card.interval = 6;
      } else {
        card.interval = Math.round(card.interval * card.easeFactor);
      }
      card.repetition++;
    } else {
      // Incorrect — reset
      card.repetition = 0;
      card.interval = 1;
    }

    // Update ease factor (SM-2 formula)
    card.easeFactor = Math.max(1.3,
      card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );

    // Set next review date
    var next = new Date();
    next.setDate(next.getDate() + card.interval);
    card.nextReview = next.toISOString();

    this._save();
    return card;
  },

  // ─── GET DUE CARDS ───
  getDueCards: function(limit) {
    var now = new Date().toISOString();
    var due = this.cards.filter(function(c) {
      return c.nextReview <= now;
    });
    // Sort by urgency (oldest due first)
    due.sort(function(a, b) {
      return a.nextReview.localeCompare(b.nextReview);
    });
    return limit ? due.slice(0, limit) : due;
  },

  // ─── GET CARDS BY CATEGORY ───
  getCardsByCategory: function(category) {
    return this.cards.filter(function(c) { return c.category === category; });
  },

  // ─── GET CARDS BY CASE ───
  getCardsByCase: function(caseId) {
    return this.cards.filter(function(c) { return c.caseId === caseId; });
  },

  // ─── ANALYTICS SUMMARY ───
  getSummary: function() {
    var total = this.cards.length;
    var due = this.getDueCards().length;
    var mastered = this.cards.filter(function(c) { return c.repetition >= 3 && c.easeFactor >= 2.3; }).length;
    var struggling = this.cards.filter(function(c) { return c.repetition > 0 && c.easeFactor < 1.8; }).length;

    var byCat = {};
    var self = this;
    Object.keys(this.CATEGORIES).forEach(function(key) {
      byCat[key] = self.cards.filter(function(c) { return c.category === key; }).length;
    });

    return {
      totalCards: total,
      dueCards: due,
      mastered: mastered,
      struggling: struggling,
      byCategory: byCat,
      averageEase: total > 0 ? (this.cards.reduce(function(s, c) { return s + c.easeFactor; }, 0) / total).toFixed(2) : "N/A"
    };
  },

  // ─── RENDER STUDY HUB ───
  renderStudyHub: function() {
    var summary = this.getSummary();
    var dueCards = this.getDueCards(10);
    var cats = this.CATEGORIES;

    var html = '<div class="spacedrep-hub">';
    html += '<div class="sr-header"><h3>📚 Study Hub — Spaced Repetition</h3>';
    html += '<div class="sr-stats">';
    html += '<span class="sr-stat"><strong>' + summary.totalCards + '</strong> Total Cards</span>';
    html += '<span class="sr-stat due"><strong>' + summary.dueCards + '</strong> Due Now</span>';
    html += '<span class="sr-stat mastered"><strong>' + summary.mastered + '</strong> Mastered</span>';
    html += '</div></div>';

    // Category breakdown
    html += '<div class="sr-categories">';
    Object.keys(cats).forEach(function(key) {
      if (summary.byCategory[key] > 0) {
        html += '<span class="sr-cat-badge" style="background:' + cats[key].color + '20;color:' + cats[key].color + ';">';
        html += cats[key].icon + ' ' + cats[key].label + ': ' + summary.byCategory[key];
        html += '</span>';
      }
    });
    html += '</div>';

    // Due cards queue
    if (dueCards.length > 0) {
      html += '<div class="sr-queue"><h4>Review Queue</h4>';
      dueCards.forEach(function(card) {
        var cat = cats[card.category] || cats.REINFORCEMENT;
        html += '<div class="sr-card-preview" data-card-id="' + card.id + '">';
        html += '<span class="sr-card-cat" style="background:' + cat.color + ';">' + cat.icon + '</span>';
        html += '<div class="sr-card-content">';
        html += '<div class="sr-card-front">' + card.front.substring(0, 100) + (card.front.length > 100 ? '…' : '') + '</div>';
        html += '<div class="sr-card-meta">' + card.patientName + ' • Rep #' + card.repetition + '</div>';
        html += '</div></div>';
      });
      html += '</div>';
    } else if (summary.totalCards > 0) {
      html += '<div class="sr-empty">🎉 All caught up! No cards due right now.</div>';
    } else {
      html += '<div class="sr-empty">Complete cases in the Virtual EMR to generate flashcards based on your learning gaps.</div>';
    }

    html += '</div>';
    return html;
  },

  // ─── FACULTY SUMMARY VIEW ───
  renderFacultySummary: function() {
    var summary = this.getSummary();
    var html = '<div class="sr-faculty">';
    html += '<h4>SpacedRep Summary (Faculty View)</h4>';
    html += '<table class="sr-faculty-table"><tr><th>Category</th><th>Cards</th><th>Status</th></tr>';

    var cats = this.CATEGORIES;
    var self = this;
    Object.keys(cats).forEach(function(key) {
      var count = summary.byCategory[key] || 0;
      if (count === 0) return;
      var mastered = self.cards.filter(function(c) { return c.category === key && c.repetition >= 3; }).length;
      html += '<tr><td>' + cats[key].icon + ' ' + cats[key].label + '</td>';
      html += '<td>' + count + '</td>';
      html += '<td>' + mastered + '/' + count + ' mastered</td></tr>';
    });

    html += '</table>';
    html += '<div class="sr-faculty-note">Average Ease Factor: ' + summary.averageEase + ' (2.5 = baseline, <1.8 = struggling)</div>';
    html += '</div>';
    return html;
  },

  // ─── PERSISTENCE ───
  _save: function() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cards));
    } catch(e) { console.warn("SpacedRep save failed:", e); }
  }
};

// Auto-initialize
VEMR_SPACEDREP.init();
