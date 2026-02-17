/* rdx-persist.js — ReasonDx Data Persistence Layer
   Provides localStorage abstraction with event bus for cross-tool communication.
   All tools read/write through this layer so progress is shared and persistent. */

window.RdxPersist = (() => {
  const PREFIX = 'rdx_';
  const listeners = {};

  function save(key, data) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify({ v: 1, ts: Date.now(), data }));
      emit(key, data);
      return true;
    } catch(e) { console.warn('[RdxPersist] Save failed:', key, e); return false; }
  }

  function load(key, fallback = null) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed.data !== undefined ? parsed.data : parsed;
    } catch(e) { return fallback; }
  }

  function remove(key) {
    try { localStorage.removeItem(PREFIX + key); emit(key, null); } catch(e) {}
  }

  function clear() {
    try {
      Object.keys(localStorage)
        .filter(k => k.startsWith(PREFIX))
        .forEach(k => localStorage.removeItem(k));
    } catch(e) {}
  }

  function keys() {
    try {
      return Object.keys(localStorage)
        .filter(k => k.startsWith(PREFIX))
        .map(k => k.slice(PREFIX.length));
    } catch(e) { return []; }
  }

  // Event bus for cross-tool reactivity
  function on(key, fn) {
    if (!listeners[key]) listeners[key] = [];
    listeners[key].push(fn);
  }

  function emit(key, data) {
    (listeners[key] || []).forEach(fn => fn(data));
    (listeners['*'] || []).forEach(fn => fn(key, data));
  }

  return { save, load, remove, clear, keys, on };
})();

/* DxProgress — Student progress tracker (uses RdxPersist) */
window.DxProgress = (() => {
  const KEY = 'progress';
  let _data = null;

  function _load() {
    _data = RdxPersist.load(KEY, {
      xp: 0, level: 1, streak: 0, lastStudy: null,
      completed: { modules: [], cases: [], quizzes: [] },
      scores: {},
      activities: [],
      badges: {},
      specialtyProgress: {},
      epaObservations: {}
    });
    _updateStreak();
  }

  function _save() { RdxPersist.save(KEY, _data); }

  function _updateStreak() {
    const today = new Date().toDateString();
    const last = _data.lastStudy;
    if (!last) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (last !== today && last !== yesterday) {
      _data.streak = 0; // Streak broken
    }
  }

  function addXP(amount, source) {
    if (!_data) _load();
    _data.xp += amount;
    _data.level = Math.floor(_data.xp / 100) + 1;
    _data.lastStudy = new Date().toDateString();
    
    // Update streak
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (_data.lastStudy === yesterday || !_data.lastStudy) {
      _data.streak += 1;
    } else if (_data.lastStudy !== today) {
      _data.streak = 1;
    }
    _data.lastStudy = today;
    
    // Log activity
    _logActivity(source || 'study', `Earned ${amount} XP`, amount);
    _checkBadges();
    _save();
  }

  function markComplete(type, id, score, specialty) {
    if (!_data) _load();
    const list = _data.completed[type] || [];
    if (!list.includes(id)) {
      list.push(id);
      _data.completed[type] = list;
    }
    if (score !== undefined) {
      _data.scores[id] = { score, date: Date.now(), type };
    }
    if (specialty) {
      if (!_data.specialtyProgress[specialty]) _data.specialtyProgress[specialty] = { completed: 0, total: 0, scores: [] };
      _data.specialtyProgress[specialty].completed += 1;
      if (score) _data.specialtyProgress[specialty].scores.push(score);
    }
    _save();
  }

  function addEpaObservation(epaId, observation) {
    if (!_data) _load();
    if (!_data.epaObservations[epaId]) _data.epaObservations[epaId] = [];
    _data.epaObservations[epaId].push({ ...observation, date: new Date().toISOString() });
    _save();
  }

  function getEpaObservations() {
    if (!_data) _load();
    return _data.epaObservations;
  }

  function _logActivity(type, desc, xp) {
    _data.activities.unshift({ type, desc, xp: xp || 0, ts: Date.now() });
    if (_data.activities.length > 50) _data.activities = _data.activities.slice(0, 50);
  }

  function _checkBadges() {
    const b = _data.badges;
    const c = _data.completed;
    const total = (c.modules?.length || 0) + (c.cases?.length || 0) + (c.quizzes?.length || 0);
    
    if (c.cases?.length >= 1 && !b.firstCase) { b.firstCase = Date.now(); }
    if (_data.streak >= 7 && !b.streak7) { b.streak7 = Date.now(); }
    if (total >= 100 && !b.scholar) { b.scholar = Date.now(); }
    if (c.quizzes?.length >= 500 && !b.boardReady) { b.boardReady = Date.now(); }
    
    // Check for perfect score
    Object.values(_data.scores).forEach(s => {
      if (s.score === 100 && !b.perfectScore) b.perfectScore = Date.now();
    });
    
    _data.badges = b;
  }

  function get() { if (!_data) _load(); return _data; }
  function reset() { _data = null; RdxPersist.remove(KEY); _load(); }

  // Initialize on load
  _load();

  function getDashboardSummary() {
    if (!_data) _load();
    var c = _data.completed || {};
    var modCount = (c.modules || []).length;
    var caseCount = (c.cases || []).length;
    var quizCount = (c.quizzes || []).length;

    // Calculate hours from activities
    var totalMs = 0;
    (_data.activities || []).forEach(function(a) { if (a.ts) totalMs += 300000; }); // estimate 5min per activity
    var hours = Math.round((totalMs / 3600000) * 10) / 10;

    // Calculate quiz accuracy
    var scores = Object.values(_data.scores || {});
    var quizScores = scores.filter(function(s) { return s.score !== undefined; });
    var avgScore = quizScores.length > 0
      ? Math.round(quizScores.reduce(function(sum, s) { return sum + s.score; }, 0) / quizScores.length)
      : 0;

    // Build activity calendar (last 28 days)
    var activeDates = {};
    (_data.activities || []).forEach(function(a) {
      if (a.ts) {
        var d = new Date(a.ts).toDateString();
        activeDates[d] = true;
      }
    });
    // Also check lastStudy
    if (_data.lastStudy) activeDates[_data.lastStudy] = true;

    var cal = [];
    var today = new Date();
    for (var i = 27; i >= 0; i--) {
      var d = new Date(today.getTime() - i * 86400000);
      cal.push({
        date: d.toISOString(),
        active: !!activeDates[d.toDateString()],
        isToday: i === 0
      });
    }

    return {
      modulesCompleted: modCount,
      casesCompleted: caseCount,
      quizzesCompleted: quizCount,
      totalCompleted: modCount + caseCount + quizCount,
      hoursStudied: hours,
      quizAccuracy: avgScore,
      currentStreak: _data.streak || 0,
      xp: _data.xp || 0,
      level: _data.level || 1,
      activityCalendar: cal,
      specialtyProgress: _data.specialtyProgress || {},
      badges: _data.badges || {}
    };
  }

  function getSummary() { return getDashboardSummary(); }

  function getDueForReview() {
    if (!_data) _load();
    var due = [];
    var now = Date.now();
    var scores = _data.scores || {};
    Object.keys(scores).forEach(function(id) {
      var s = scores[id];
      if (!s || !s.date) return;
      // Items with score < 80 or studied > 7 days ago are due
      var daysSince = (now - s.date) / 86400000;
      if (s.score < 80 || daysSince > 7) {
        due.push({ id: id, score: s.score, daysSince: Math.round(daysSince), type: s.type });
      }
    });
    due.sort(function(a, b) { return a.score - b.score; }); // lowest scores first
    return due.slice(0, 10);
  }

  return { addXP, markComplete, addEpaObservation, getEpaObservations, get, reset, getDashboardSummary, getSummary, getDueForReview };
})();
