/* dx-adventure-tracker.js — Adventure case progress tracking (stub)
   Tracks current stage, choices made, and completion state per adventure. */
window.DxAdventureTracker = {
  _state: {},
  start(caseId) { this._state[caseId] = { started: Date.now(), stage: 0, choices: [] }; this._save(); },
  advance(caseId, stage, choice) { 
    if (!this._state[caseId]) this.start(caseId);
    this._state[caseId].stage = stage; 
    if (choice) this._state[caseId].choices.push(choice);
    this._save();
  },
  complete(caseId, score) {
    if (!this._state[caseId]) this.start(caseId);
    this._state[caseId].completed = Date.now();
    this._state[caseId].score = score;
    this._save();
    window.DxProgress?.markComplete(caseId);
    window.DxProgress?.addXP(score >= 80 ? 50 : 25);
  },
  getState(caseId) { return this._state[caseId] || null; },
  _save() { window.RdxPersist?.save('adventures', this._state); },
  _load() { this._state = window.RdxPersist?.load('adventures') || {}; }
};
DxAdventureTracker._load();
