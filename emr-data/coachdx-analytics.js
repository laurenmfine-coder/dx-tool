// ═══════════════════════════════════════════════════════════════
// COACHDX CONCEPT MAP & ANALYTICS
// Tracks reasoning concepts from coaching sessions and
// visualizes them as an interactive concept map
// Also provides analytics tracking for dashboard integration
// ═══════════════════════════════════════════════════════════════

window.COACHDX_ANALYTICS = {

  // ─── SESSION TRACKING ───
  sessions: [],
  currentSession: null,

  startSession: function(caseId, setting, specialty) {
    this.currentSession = {
      id: "session-" + Date.now(),
      caseId: caseId,
      setting: setting,
      specialty: specialty,
      startTime: new Date().toISOString(),
      endTime: null,
      messageCount: 0,
      learnerMessageCount: 0,
      coachMessageCount: 0,
      concepts: {},
      biasesDetected: [],
      correctReasoning: [],
      questionTypes: [],
      avgResponseTime: 0,
      responseTimes: []
    };
    this.sessions.push(this.currentSession);
    this._save();
    return this.currentSession;
  },

  trackMessage: function(role, content) {
    if (!this.currentSession) return;
    this.currentSession.messageCount++;
    if (role === "user") {
      this.currentSession.learnerMessageCount++;
      this.currentSession._lastUserTime = Date.now();
    } else {
      this.currentSession.coachMessageCount++;
      if (this.currentSession._lastUserTime) {
        var rt = Date.now() - this.currentSession._lastUserTime;
        this.currentSession.responseTimes.push(rt);
        this.currentSession.avgResponseTime = this.currentSession.responseTimes.reduce(function(a,b){return a+b},0) / this.currentSession.responseTimes.length;
      }
      // Extract concepts from coach response
      this._extractConcepts(content);
      this._detectBiases(content);
      this._detectCorrectReasoning(content);
      this._classifyQuestion(content);
    }
    this._save();
  },

  endSession: function() {
    if (!this.currentSession) return;
    this.currentSession.endTime = new Date().toISOString();
    this._save();
  },

  // ─── CONCEPT EXTRACTION ───
  _conceptPatterns: {
    "Differential Diagnosis": /differential|ddx|rule out|r\/o|consider|on your list/i,
    "Clinical Reasoning": /reasoning|clinical thinking|approach|framework|systematic/i,
    "History Taking": /history|hpi|symptom|onset|duration|character|aggravat|palliat/i,
    "Physical Exam": /exam|auscult|palp|percuss|inspect|sign|finding|murmur|tender/i,
    "Lab Interpretation": /lab|value|result|normal|abnormal|elevated|decreased|trend/i,
    "Imaging Interpretation": /imaging|x-ray|ct|mri|ultrasound|radiograph|finding/i,
    "Pharmacology": /medication|drug|dose|side effect|interaction|contraindic|prescri/i,
    "Pathophysiology": /mechanism|pathway|pathophys|cause|etiology|process/i,
    "Risk Stratification": /risk|stratif|severity|score|probability|likelihood|prognos/i,
    "Disposition": /dispo|admit|discharge|floor|icu|home|transfer|safe/i,
    "Emergency Management": /stabiliz|abc|resuscit|emergent|urgent|immediate|critical/i,
    "Evidence-Based Medicine": /evidence|guideline|recommendation|study|trial|data/i,
    "Patient Safety": /safety|error|miss|allergy|interaction|check|verify/i,
    "Transitions of Care": /handoff|transition|follow.up|discharge|continuity|communication/i,
    "Shared Decision-Making": /shared.decision|patient.prefer|discuss|option|informed/i,
    "Social Determinants": /social|sdoh|housing|food|insurance|transport|access|barrier/i,
    "Preventive Care": /screen|prevent|vaccin|immuniz|wellness|health.mainten/i,
    "Chronic Disease": /chronic|management|optimization|a1c|control|adherence|long.term/i,
    "Goals of Care": /goals|code.status|advance.directive|dnr|comfort|palliat|prognos/i,
    "Communication": /communicat|explain|counsel|educate|discuss|break.*news|empathy/i,
    "Procedural": /procedure|i.d|intub|line|drainage|biopsy|reduction|splint/i,
    "Wound Care": /wound|dressing|debride|closure|suture|heal|infection/i,
    "Ventilator Management": /vent|intubat|extubat|peep|fio2|tidal|wean|sbt/i,
    "Hemodynamics": /hemodynamic|map|cvp|svr|vasopressor|fluid.respons|shock/i,
    "Acid-Base": /acid.base|ph|bicarb|anion.gap|metabolic|respiratory.*acid|compens/i
  },

  _extractConcepts: function(text) {
    if (!this.currentSession || !text) return;
    var concepts = this.currentSession.concepts;
    for (var name in this._conceptPatterns) {
      if (this._conceptPatterns[name].test(text)) {
        concepts[name] = (concepts[name] || 0) + 1;
      }
    }
  },

  _biasPatterns: {
    "Anchoring Bias": /anchor|fixat|stuck on|locked in|first impression/i,
    "Premature Closure": /premature|closing|jumping|too quickly|hasty/i,
    "Availability Bias": /availability|recent experience|common|seen a lot of/i,
    "Confirmation Bias": /confirm|ignoring.*contrary|selective|fitting.*narrative/i,
    "Framing Effect": /frame|present|context.*affect|bias.*by/i,
    "Diagnosis Momentum": /momentum|inherit|prior.*diagnosis|carried forward/i
  },

  _detectBiases: function(text) {
    if (!this.currentSession || !text) return;
    for (var bias in this._biasPatterns) {
      if (this._biasPatterns[bias].test(text)) {
        this.currentSession.biasesDetected.push({
          type: bias,
          timestamp: new Date().toISOString()
        });
      }
    }
  },

  _detectCorrectReasoning: function(text) {
    if (!this.currentSession || !text) return;
    var positivePatterns = [
      /solid.*clinical|good.*reasoning|excellent|that's right|correct|well done/i,
      /strong.*thinking|exactly|nice.*catch|good.*pickup|astute/i
    ];
    for (var i = 0; i < positivePatterns.length; i++) {
      if (positivePatterns[i].test(text)) {
        this.currentSession.correctReasoning.push({
          timestamp: new Date().toISOString()
        });
        break;
      }
    }
  },

  _classifyQuestion: function(text) {
    if (!this.currentSession || !text) return;
    var types = {
      "Probing": /what.*about|tell me more|expand|elaborate|walk.*through/i,
      "Challenging": /but what if|consider|are you sure|what.*miss|devil/i,
      "Scaffolding": /hint|one.*clue|narrow|specific.*finding|look.*at/i,
      "Redirecting": /instead|different|step back|broader|another.*angle/i,
      "Affirming": /good|correct|right|exactly|solid|strong|excellent/i
    };
    for (var t in types) {
      if (types[t].test(text)) {
        this.currentSession.questionTypes.push(t);
        break;
      }
    }
  },

  // ─── CONCEPT MAP RENDERER ───
  renderConceptMap: function(containerId) {
    var concepts = this._getAggregatedConcepts();
    if (Object.keys(concepts).length === 0) {
      return '<div style="text-align:center;padding:40px;color:var(--text-muted)"><p style="font-size:14px">No concepts tracked yet.</p><p style="font-size:12px">Start a coaching session to see your reasoning concept map build over time.</p></div>';
    }

    // Sort by frequency
    var sorted = Object.keys(concepts).map(function(k) {
      return { name: k, count: concepts[k] };
    }).sort(function(a,b) { return b.count - a.count; });

    var maxCount = sorted[0].count;
    var html = '<div class="concept-map-container">';
    html += '<div class="concept-map-header"><h3 style="margin:0;font-size:14px;font-weight:600">Clinical Reasoning Concept Map</h3>';
    html += '<p style="margin:4px 0 0;font-size:12px;color:var(--text-muted)">Concepts explored across ' + this.sessions.length + ' coaching session' + (this.sessions.length !== 1 ? 's' : '') + '</p></div>';

    // Bubble visualization
    html += '<div class="concept-bubbles">';
    sorted.forEach(function(c) {
      var pct = Math.max(0.3, c.count / maxCount);
      var size = Math.round(36 + pct * 44);
      var opacity = 0.4 + pct * 0.6;
      var cat = getCategoryColor(c.name);
      html += '<div class="concept-bubble" style="' +
        'font-size:' + Math.round(10 + pct * 4) + 'px;' +
        'padding:' + Math.round(6 + pct * 8) + 'px ' + Math.round(10 + pct * 12) + 'px;' +
        'background:' + cat.bg + ';' +
        'color:' + cat.text + ';' +
        'border:1px solid ' + cat.border + ';' +
        'opacity:' + opacity.toFixed(2) + '" title="' + c.name + ': mentioned ' + c.count + ' time' + (c.count!==1?'s':'') + '">' +
        c.name + ' <span class="concept-count">' + c.count + '</span></div>';
    });
    html += '</div>';

    // Category summary
    var categories = this._categorizeConceptsByDomain(sorted);
    html += '<div class="concept-categories">';
    for (var cat in categories) {
      html += '<div class="concept-cat-row">';
      html += '<span class="concept-cat-label">' + cat + '</span>';
      html += '<div class="concept-cat-bar" style="width:' + Math.round(categories[cat].pct * 100) + '%"></div>';
      html += '<span class="concept-cat-pct">' + Math.round(categories[cat].pct * 100) + '%</span>';
      html += '</div>';
    }
    html += '</div></div>';
    return html;
  },

  _getAggregatedConcepts: function() {
    var all = {};
    this.sessions.forEach(function(s) {
      for (var c in s.concepts) {
        all[c] = (all[c] || 0) + s.concepts[c];
      }
    });
    return all;
  },

  _categorizeConceptsByDomain: function(sorted) {
    var domains = {
      "Diagnostic": ["Differential Diagnosis","Lab Interpretation","Imaging Interpretation","History Taking","Physical Exam"],
      "Therapeutic": ["Pharmacology","Emergency Management","Procedural","Wound Care","Ventilator Management"],
      "Systems Thinking": ["Risk Stratification","Evidence-Based Medicine","Patient Safety","Hemodynamics","Acid-Base"],
      "Communication": ["Transitions of Care","Shared Decision-Making","Communication","Goals of Care"],
      "Longitudinal": ["Preventive Care","Chronic Disease","Social Determinants"]
    };
    var total = sorted.reduce(function(s,c){return s+c.count},0) || 1;
    var result = {};
    for (var d in domains) {
      var domainNames = domains[d];
      var domainCount = sorted.filter(function(c){return domainNames.indexOf(c.name)>=0})
                              .reduce(function(s,c){return s+c.count},0);
      result[d] = { count: domainCount, pct: domainCount / total };
    }
    return result;
  },

  // ─── ANALYTICS SUMMARY FOR DASHBOARD ───
  getAnalyticsSummary: function() {
    var totalSessions = this.sessions.length;
    var totalMessages = this.sessions.reduce(function(s,se){return s+se.messageCount},0);
    var totalBiases = this.sessions.reduce(function(s,se){return s+se.biasesDetected.length},0);
    var totalCorrect = this.sessions.reduce(function(s,se){return s+se.correctReasoning.length},0);
    var avgMsgPerSession = totalSessions > 0 ? Math.round(totalMessages / totalSessions) : 0;
    var concepts = this._getAggregatedConcepts();
    var topConcepts = Object.keys(concepts).sort(function(a,b){return concepts[b]-concepts[a]}).slice(0,5);

    var settingBreakdown = {};
    this.sessions.forEach(function(s) {
      settingBreakdown[s.setting] = (settingBreakdown[s.setting] || 0) + 1;
    });

    return {
      totalSessions: totalSessions,
      totalMessages: totalMessages,
      avgMessagesPerSession: avgMsgPerSession,
      totalBiasesDetected: totalBiases,
      totalCorrectReasoning: totalCorrect,
      uniqueConceptsExplored: Object.keys(concepts).length,
      topConcepts: topConcepts,
      settingBreakdown: settingBreakdown,
      conceptMap: concepts
    };
  },

  // ─── PERSISTENCE ───
  _save: function() {
    try {
      localStorage.setItem("coachdx-analytics", JSON.stringify({
        sessions: this.sessions.slice(-50) // Keep last 50 sessions
      }));
    } catch(e) { /* storage unavailable */ }
  },

  _load: function() {
    try {
      var data = JSON.parse(localStorage.getItem("coachdx-analytics") || "{}");
      this.sessions = data.sessions || [];
    } catch(e) { this.sessions = []; }
  },

  init: function() {
    this._load();
  }
};

// Category colors for concept bubbles
function getCategoryColor(conceptName) {
  var colors = {
    "Differential Diagnosis": {bg:"#E3F2FD",text:"#1565C0",border:"#90CAF9"},
    "Clinical Reasoning": {bg:"#E8EAF6",text:"#283593",border:"#9FA8DA"},
    "History Taking": {bg:"#F3E5F5",text:"#6A1B9A",border:"#CE93D8"},
    "Physical Exam": {bg:"#FCE4EC",text:"#AD1457",border:"#F48FB1"},
    "Lab Interpretation": {bg:"#E0F7FA",text:"#00695C",border:"#80CBC4"},
    "Imaging Interpretation": {bg:"#FFF3E0",text:"#E65100",border:"#FFCC80"},
    "Pharmacology": {bg:"#FFEBEE",text:"#C62828",border:"#EF9A9A"},
    "Pathophysiology": {bg:"#F1F8E9",text:"#33691E",border:"#AED581"},
    "Risk Stratification": {bg:"#FFF8E1",text:"#F57F17",border:"#FFE082"},
    "Disposition": {bg:"#E0F2F1",text:"#004D40",border:"#80CBC4"},
    "Emergency Management": {bg:"#FFEBEE",text:"#B71C1C",border:"#EF9A9A"},
    "Evidence-Based Medicine": {bg:"#E8EAF6",text:"#1A237E",border:"#9FA8DA"},
    "Patient Safety": {bg:"#FBE9E7",text:"#BF360C",border:"#FFAB91"},
    "Transitions of Care": {bg:"#E0F7FA",text:"#006064",border:"#80DEEA"},
    "Communication": {bg:"#F3E5F5",text:"#4A148C",border:"#CE93D8"}
  };
  return colors[conceptName] || {bg:"#F5F5F5",text:"#424242",border:"#BDBDBD"};
}

// Auto-initialize
if (typeof document !== "undefined") {
  COACHDX_ANALYTICS.init();
}
