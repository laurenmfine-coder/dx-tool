/**
 * RDX Study Sequencer
 * Controls mandatory case ordering for the prior-profession research protocol.
 * 
 * Sequence:
 *   Layer 1  → all students, 16 cases (Blocks A/B/C interleaved)
 *   Layer 2  → gated by priorExperience: nursing→5 cases, dental→5 cases
 *   Layer 3  → all students, 5 cross-disciplinary cases
 *   Unlocked → free exploration of full library
 * 
 * Cases are delivered through study-protocol.html only.
 * Browse shows "Study Protocol Required" badge until sequence complete.
 */

(function() {
'use strict';

// ── Helpers ──────────────────────────────────────────────────────────────────
function getUserProfile() {
  try { return JSON.parse(localStorage.getItem('reasondx-user') || '{}'); }
  catch(e) { return {}; }
}
function saveUserProfile(u) {
  try { localStorage.setItem('reasondx-user', JSON.stringify(u)); } catch(e) {}
}

// ── Prior-profession detection ────────────────────────────────────────────────
const NURSING_PRIORS  = ['Registered Nurse (RN)','Licensed Practical Nurse (LPN)'];
const DENTAL_PRIORS   = ['Dental Student / DDS / DMD','Dental Hygienist'];

function hasPrior(profile, type) {
  const pe = profile.priorExperience || [];
  if (type === 'nursing') return NURSING_PRIORS.some(p => pe.includes(p));
  if (type === 'dental')  return DENTAL_PRIORS.some(p => pe.includes(p));
  return false;
}

// ── Case set builders ─────────────────────────────────────────────────────────
function getLayer1Cases() {
  if (!window.CRT_INDEX) return [];
  const blocks = {A:[],B:[],C:[]};
  Object.entries(CRT_INDEX).forEach(([id,c]) => {
    if (c.studyCase && !c.studyLayer && blocks[c.studyBlock]) {
      blocks[c.studyBlock].push({id,...c});
    }
  });
  // Interleave C/A/B so no block is obvious
  const shuffle = a => a.sort(() => Math.random() - 0.5);
  const [sa,sb,sc] = [shuffle([...blocks.A]),shuffle([...blocks.B]),shuffle([...blocks.C])];
  const out = [];
  const len = Math.max(sa.length,sb.length,sc.length);
  for (let i=0;i<len;i++) {
    if (sc[i]) out.push(sc[i]); // neutral first in each trio
    if (sa[i]) out.push(sa[i]);
    if (sb[i]) out.push(sb[i]);
  }
  return out;
}

function getLayer2Cases(profile) {
  if (!window.CRT_INDEX) return [];
  const isNursing = hasPrior(profile,'nursing');
  const isDental  = hasPrior(profile,'dental');
  const cases = [];
  Object.entries(CRT_INDEX).forEach(([id,c]) => {
    if (!c.studyCase || c.studyLayer !== 'layer2') return;
    if (c.studyBlock === 'A' && isNursing) cases.push({id,...c});
    if (c.studyBlock === 'B' && isDental)  cases.push({id,...c});
  });
  return cases.sort(() => Math.random() - 0.5);
}

function getLayer3Cases() {
  if (!window.CRT_INDEX) return [];
  return Object.entries(CRT_INDEX)
    .filter(([,c]) => c.studyCase && c.studyLayer === 'layer3')
    .map(([id,c]) => ({id,...c}))
    .sort(() => Math.random() - 0.5);
}

// ── Sequence state ─────────────────────────────────────────────────────────────
function getSequenceState(profile) {
  const sp = profile.studyProtocol || {};
  const completed = new Set(sp.completedCases || []);
  const isNursing = hasPrior(profile,'nursing');
  const isDental  = hasPrior(profile,'dental');
  const hasLayer2 = isNursing || isDental;

  const l1 = getLayer1Cases();
  const l2 = getLayer2Cases(profile);
  const l3 = getLayer3Cases();

  const l1done = l1.every(c => completed.has(c.id));
  const l2done = !hasLayer2 || l2.every(c => completed.has(c.id));
  const l3done = l3.every(c => completed.has(c.id));

  if (!sp.startedAt) return {
    phase: 'not_started',
    currentLayer: 1,
    nextCases: l1,
    totalRequired: l1.length + l2.length + l3.length,
    completed: 0,
    unlocked: false
  };

  if (!l1done) return {
    phase: 'layer1',
    currentLayer: 1,
    nextCases: l1.filter(c => !completed.has(c.id)),
    totalRequired: l1.length + l2.length + l3.length,
    completed: completed.size,
    unlocked: false
  };

  if (hasLayer2 && !l2done) return {
    phase: 'layer2',
    currentLayer: 2,
    nextCases: l2.filter(c => !completed.has(c.id)),
    totalRequired: l1.length + l2.length + l3.length,
    completed: completed.size,
    unlocked: false,
    layerLabel: isNursing && isDental ? 'Nursing & Dental Extension'
              : isNursing ? 'Nursing Extension'
              : 'Dental Extension'
  };

  if (!l3done) return {
    phase: 'layer3',
    currentLayer: 3,
    nextCases: l3.filter(c => !completed.has(c.id)),
    totalRequired: l1.length + l2.length + l3.length,
    completed: completed.size,
    unlocked: false,
    layerLabel: 'Cross-Disciplinary Cases'
  };

  return {
    phase: 'complete',
    currentLayer: null,
    nextCases: [],
    totalRequired: l1.length + l2.length + l3.length,
    completed: completed.size,
    unlocked: true
  };
}

// ── Mark a case complete and advance sequence ─────────────────────────────────
function markCaseComplete(caseId) {
  const profile = getUserProfile();
  if (!profile.studyProtocol) profile.studyProtocol = { startedAt: new Date().toISOString() };
  const completed = new Set(profile.studyProtocol.completedCases || []);
  completed.add(caseId);
  profile.studyProtocol.completedCases = Array.from(completed);

  // Check if fully done
  const state = getSequenceState(profile);
  if (state.phase === 'complete') {
    profile.studyProtocol.completedAt = new Date().toISOString();
    profile.studyComplete = true;
  }
  saveUserProfile(profile);
  return getSequenceState(profile);
}

// ── Start the protocol (record start time) ────────────────────────────────────
function startProtocol() {
  const profile = getUserProfile();
  if (!profile.studyProtocol) {
    profile.studyProtocol = { startedAt: new Date().toISOString(), completedCases: [] };
    saveUserProfile(profile);
  }
  return getSequenceState(profile);
}

// ── Browse gate: is this case accessible in free exploration? ─────────────────
function isCaseFreelyAccessible(caseId) {
  const profile = getUserProfile();
  if (profile.studyComplete) return true; // fully done → all unlocked
  const sp = profile.studyProtocol || {};
  const completed = new Set(sp.completedCases || []);
  // Study cases only accessible through study-protocol.html
  const entry = window.CRT_INDEX && CRT_INDEX[caseId];
  if (!entry || !entry.studyCase) return true; // non-study cases always accessible
  return completed.has(caseId); // study cases: accessible only after completion
}

// ── Progress summary for dashboard badge ──────────────────────────────────────
function getProgressSummary() {
  const profile = getUserProfile();
  const state   = getSequenceState(profile);
  const isNursing = hasPrior(profile,'nursing');
  const isDental  = hasPrior(profile,'dental');

  return {
    phase: state.phase,
    completed: state.completed,
    total: state.totalRequired,
    pct: state.totalRequired > 0
         ? Math.round((state.completed/state.totalRequired)*100) : 0,
    unlocked: state.unlocked,
    hasPriorNursing: isNursing,
    hasPriorDental: isDental,
    layerLabel: state.layerLabel || null,
    nextCount: state.nextCases ? state.nextCases.length : 0
  };
}

// ── Public API ────────────────────────────────────────────────────────────────
window.RDXStudySequencer = {
  getState:              () => getSequenceState(getUserProfile()),
  startProtocol,
  markCaseComplete,
  isCaseFreelyAccessible,
  getProgressSummary,
  hasPriorNursing:       () => hasPrior(getUserProfile(),'nursing'),
  hasPriorDental:        () => hasPrior(getUserProfile(),'dental'),
  getLayer1Cases,
  getLayer2Cases:        () => getLayer2Cases(getUserProfile()),
  getLayer3Cases,
};

})();
