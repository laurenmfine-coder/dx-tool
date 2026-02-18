/* dx-progress.js — Student progress tracking (stub)
   Tracks module completion, quiz scores, XP, and achievements. */
window.DxProgress = {
  _data: null,
  init() { this._data = window.RdxPersist?.load('progress') || { xp: 0, completed: [], scores: {}, streak: 0 }; },
  addXP(amount) { if (!this._data) this.init(); this._data.xp += amount; this._save(); },
  markComplete(id) { if (!this._data) this.init(); if (!this._data.completed.includes(id)) this._data.completed.push(id); this._save(); },
  saveScore(id, score) { if (!this._data) this.init(); this._data.scores[id] = score; this._save(); },
  getProgress() { if (!this._data) this.init(); return this._data; },
  _save() { window.RdxPersist?.save('progress', this._data); }
};
DxProgress.init();
