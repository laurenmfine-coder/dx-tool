/**
 * rdx-case-tagger.js
 * ReasonDx Case Tagging — Profession-Aware Case Filtering
 *
 * DROP-IN: <script src="/rdx-case-tagger.js"></script> on browse.html
 *
 * WHAT IT DOES:
 *  1. Reads profession profile from localStorage
 *  2. Scores every case in CRT_INDEX by profession relevance
 *  3. Injects a "For You" sort mode into browse.html
 *  4. Exposes RDX_CaseTagger globally for other modules
 */

(function() {
'use strict';

// ── PROFESSION → CATEGORY RELEVANCE MAP ──────────────────────────────────────
// Score 0-3: 3=core curriculum, 2=high relevance, 1=adjacent, 0=not typical
// Used to reorder case cards when profession filter is active

const PROF_CAT_SCORES = {
  medicine: {
    cardiovascular:3, cardiology:3, pulmonary:3, neurologic:3, neurology:3,
    infectious:3, gastrointestinal:3, gi:3, endocrine:3, renal:3,
    hematologic:3, hematology:3, emergency:3, psychiatric:3, pediatric:3,
    obstetric:3, rheumatologic:3, dermatologic:3, musculoskeletal:3,
    allergy:2, allergy_immunology:2, immunologic:2, ophthalmologic:2,
    ophthalmic:2, ent:2, urologic:2, vascular:2, oncologic:2, geriatric:2,
    toxicology:3, toxicologic:3, environmental:2, trauma:3, surgical:2,
    orthopedic:2, gynecologic:3, respiratory:3, neurological:3, other:2,
    anesthetic:1, cardiorenal:3, pharmacologic:2, cardiac:3,
  },
  pa: {
    cardiovascular:3, cardiology:3, pulmonary:3, neurologic:3, neurology:3,
    infectious:3, gastrointestinal:3, gi:3, endocrine:3, renal:3,
    hematologic:2, hematology:2, emergency:3, psychiatric:3, pediatric:3,
    obstetric:2, rheumatologic:2, dermatologic:2, musculoskeletal:3,
    allergy:2, allergy_immunology:2, ophthalmologic:1, ophthalmic:1,
    ent:2, urologic:2, vascular:2, oncologic:2, geriatric:3,
    toxicology:3, toxicologic:3, environmental:2, trauma:3, surgical:2,
    orthopedic:2, gynecologic:2, respiratory:3, neurological:3, other:2,
    anesthetic:1, cardiorenal:2, pharmacologic:2, cardiac:3,
  },
  pharmacy: {
    cardiovascular:3, cardiology:3, endocrine:3, infectious:3,
    renal:3, hematologic:3, hematology:3, psychiatric:3,
    pulmonary:3, gastrointestinal:2, gi:2, neurologic:2, neurology:2,
    allergy:2, allergy_immunology:2, toxicology:3, toxicologic:3,
    rheumatologic:2, dermatologic:1, musculoskeletal:1, oncologic:2,
    vascular:2, obstetric:2, pediatric:2, geriatric:2,
    pharmacologic:3, emergency:2, trauma:1, orthopedic:1,
    ophthalmologic:1, ophthalmic:1, ent:1, urologic:1,
    cardiorenal:3, environmental:1, other:2, respiratory:2,
    surgical:1, gynecologic:1, anesthetic:2,
  },
  optometry: {
    ophthalmologic:3, ophthalmic:3, neurologic:3, neurology:3,
    endocrine:3, rheumatologic:3, cardiovascular:2, cardiology:2,
    hematologic:2, hematology:2, infectious:2, dermatologic:2,
    hypertension:3, vascular:2, oncologic:2,
    gastrointestinal:1, gi:1, pulmonary:1, renal:1,
    psychiatric:1, pediatric:2, geriatric:2, musculoskeletal:1,
    allergy:2, allergy_immunology:2, emergency:2, other:1,
    toxicology:1, toxicologic:1, trauma:1, cardiorenal:1,
  },
  dentistry: {
    infectious:3, endocrine:3, cardiovascular:2, cardiology:2,
    hematologic:3, hematology:3, neurologic:2, neurology:2,
    pharmacologic:3, allergy:3, allergy_immunology:3,
    dermatologic:2, gastrointestinal:1, gi:1, pulmonary:1,
    renal:1, psychiatric:2, toxicology:2, toxicologic:2,
    rheumatologic:2, musculoskeletal:2, ent:2, vascular:1,
    emergency:2, oncologic:2, other:2,
  },
  pt: {
    musculoskeletal:3, neurologic:3, neurology:3, cardiovascular:2,
    cardiology:2, pulmonary:2, respiratory:2, pediatric:3, geriatric:3,
    orthopedic:3, trauma:3, vascular:2, rheumatologic:3,
    oncologic:2, renal:1, endocrine:2, infectious:1,
    dermatologic:1, psychiatric:2, hematologic:1, hematology:1,
    emergency:2, surgical:2, environmental:2, other:2,
    cardiorenal:1, allergy:1, allergy_immunology:1,
  },
  ot: {
    neurologic:3, neurology:3, psychiatric:3, musculoskeletal:3,
    orthopedic:3, pediatric:3, geriatric:3, cardiovascular:2,
    cardiology:2, cognitive:3, burns:3, rheumatologic:2,
    oncologic:2, dermatologic:2, trauma:2, pulmonary:1,
    renal:1, endocrine:1, hematologic:1, hematology:1,
    infectious:1, emergency:1, other:2, allergy:1,
  },
  nursing: {
    cardiovascular:3, cardiology:3, pulmonary:3, neurologic:3,
    neurology:3, infectious:3, gastrointestinal:3, gi:3, endocrine:3,
    renal:3, hematologic:2, hematology:2, emergency:3, psychiatric:3,
    pediatric:3, obstetric:3, geriatric:3, oncologic:2,
    dermatologic:2, musculoskeletal:2, allergy:2, allergy_immunology:2,
    toxicology:2, toxicologic:2, vascular:2, trauma:3,
    surgical:2, orthopedic:1, ent:1, urologic:2,
    cardiorenal:2, pharmacologic:2, other:2, respiratory:3,
  },
  mbs: {
    cardiovascular:3, cardiology:3, pulmonary:3, neurologic:3,
    neurology:3, infectious:3, gastrointestinal:3, gi:3, endocrine:3,
    renal:3, hematologic:2, hematology:2, allergy:2, allergy_immunology:2,
    toxicology:2, toxicologic:2, rheumatologic:2, dermatologic:2,
    musculoskeletal:2, pediatric:2, obstetric:2, emergency:2,
    psychiatric:2, other:2, pharmacologic:3, respiratory:3,
    vascular:2, geriatric:1, trauma:1, surgical:1,
  },
  other: {
    cardiovascular:2, cardiology:2, pulmonary:2, neurologic:2,
    neurology:2, infectious:2, gastrointestinal:2, gi:2, endocrine:2,
    renal:2, emergency:2, other:2,
  }
};

// ── CASE TAGGER CLASS ─────────────────────────────────────────────────────────

class CaseTagger {
  constructor() {
    this._profile = null;
    this._scoreCache = {};
    this._ready = false;
    this._init();
  }

  _init() {
    // Load profession profile
    try {
      const user = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
      this._profile = user.professionProfile || null;
    } catch(e) {}

    // Listen for profession changes
    document.addEventListener('rdx:professionSet', (e) => {
      this._profile = e.detail && e.detail.profile ? e.detail.profile : null;
      this._scoreCache = {};
      this._applyToBrowse();
    });

    this._ready = true;
  }

  get professionId() {
    return this._profile ? this._profile.professionId : null;
  }

  get hasProfile() {
    return !!(this._profile && this._profile.professionId);
  }

  // Score a case by category relevance for the current profession
  scoreCase(caseObj) {
    if (!this.hasProfile) return 1; // neutral if no profession
    const prof = this.professionId;
    const cat = (caseObj.cat || caseObj.category || '').toLowerCase();
    const scores = PROF_CAT_SCORES[prof] || PROF_CAT_SCORES['other'];
    return scores[cat] !== undefined ? scores[cat] : 1;
  }

  // Sort a case array by profession relevance (descending), preserving acuity sort within tier
  sortByRelevance(cases) {
    return [...cases].sort((a, b) => {
      const sa = this.scoreCase(a);
      const sb = this.scoreCase(b);
      if (sb !== sa) return sb - sa;
      // Within same relevance tier: featured first, then acuity
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (a.acuity || 3) - (b.acuity || 3);
    });
  }

  // Filter cases to only high-relevance (score >= threshold)
  filterByRelevance(cases, threshold = 2) {
    if (!this.hasProfile) return cases;
    return cases.filter(c => this.scoreCase(c) >= threshold);
  }

  // Get profession display label for UI
  getProfessionLabel() {
    if (!this._profile) return null;
    const labels = {
      medicine:'Medicine', pa:'Physician Assistant', pharmacy:'Pharmacy',
      optometry:'Optometry', dentistry:'Dentistry', pt:'Physical Therapy',
      ot:'Occupational Therapy', nursing:'Nursing', mbs:'Biomedical Sciences',
      other:'Health Professional'
    };
    return labels[this._profile.professionId] || 'Health Professional';
  }

  // Inject "For You" filter button into browse.html filter bar
  _applyToBrowse() {
    if (!this.hasProfile) return;
    if (typeof window.render !== 'function') return; // not on browse page

    // Patch the global render function to apply profession sorting
    this._patchBrowseRender();
    this._injectForYouButton();
  }

  _patchBrowseRender() {
    if (this._renderPatched) return;
    this._renderPatched = true;

    const tagger = this;
    const originalRender = window.render;
    if (!originalRender) return;

    window.render = function() {
      originalRender.apply(this, arguments);

      // If "For You" mode is active, re-sort the rendered cards
      if (window._RDX_FOR_YOU_ACTIVE && tagger.hasProfile) {
        tagger._resortGrid();
      }
    };
  }

  _resortGrid() {
    const grid = document.getElementById('grid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.card'));
    if (cards.length === 0) return;

    // We need the underlying data — read from data attributes or re-sort from source
    // Since browse.html renders from filtered arrays, we patch getData instead
  }

  _injectForYouButton() {
    if (!this.hasProfile) return;

    // Wait for DOM
    const tryInject = () => {
      const filterBtns = document.getElementById('filterBtns');
      if (!filterBtns) { setTimeout(tryInject, 300); return; }

      // Don't inject twice
      if (document.getElementById('rdx-for-you-btn')) return;

      const label = this.getProfessionLabel();
      const btn = document.createElement('button');
      btn.id = 'rdx-for-you-btn';
      btn.className = 'fbtn';
      btn.innerHTML = `⭐ For ${label}`;
      btn.style.cssText = 'background:#EBF5FB;color:#1A5276;border-color:#AED6F1;';
      btn.title = `Show cases most relevant to ${label} programs`;

      btn.addEventListener('click', () => {
        window._RDX_FOR_YOU_ACTIVE = !window._RDX_FOR_YOU_ACTIVE;
        btn.style.background = window._RDX_FOR_YOU_ACTIVE ? '#2874A6' : '#EBF5FB';
        btn.style.color = window._RDX_FOR_YOU_ACTIVE ? 'white' : '#1A5276';
        this._applyForYouSort();
      });

      // Insert before other filter buttons
      filterBtns.insertBefore(btn, filterBtns.firstChild);
    };

    tryInject();
  }

  _applyForYouSort() {
    if (!window._RDX_FOR_YOU_ACTIVE) {
      // Re-render normally
      if (typeof window.render === 'function') window.render();
      return;
    }

    const grid = document.getElementById('grid');
    if (!grid) return;

    // Patch getData temporarily to inject relevance scoring into case sort
    const tagger = this;
    const origGetData = window.getData;
    if (!origGetData) return;

    window._rdx_getDataPatched = true;
    const origData = origGetData();
    const sorted = tagger.sortByRelevance(origData);

    // Re-render grid with sorted data
    const empty = document.getElementById('empty');
    if (sorted.length === 0) {
      grid.innerHTML = '';
      if (empty) empty.style.display = 'block';
      return;
    }
    if (empty) empty.style.display = 'none';

    // Use browse.html's own card renderer if available
    if (typeof window._renderCards === 'function') {
      window._renderCards(sorted);
    } else {
      // Fallback: re-invoke render which will use the patched sort
      if (typeof window.render === 'function') window.render();
    }
  }

  // Public API: tag a single case object with profession metadata
  tagCase(caseObj) {
    return {
      ...caseObj,
      profRelevance: this.scoreCase(caseObj),
      profRelevanceLabel: this._relevanceLabel(this.scoreCase(caseObj)),
    };
  }

  _relevanceLabel(score) {
    if (score >= 3) return 'core';
    if (score >= 2) return 'high';
    if (score >= 1) return 'adjacent';
    return 'low';
  }
}

// ── SUPABASE MIGRATION SQL ────────────────────────────────────────────────────
// Add to profiles table. Run once in Supabase SQL editor.
/*
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS baseline_complete        BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS baseline_scores          JSONB,
  ADD COLUMN IF NOT EXISTS baseline_responses       JSONB,
  ADD COLUMN IF NOT EXISTS baseline_completed_at    TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS baseline_duration_ms     INTEGER,
  ADD COLUMN IF NOT EXISTS baseline_version         TEXT DEFAULT '1.0';

CREATE INDEX IF NOT EXISTS idx_profiles_baseline ON profiles(baseline_complete);
*/

// ── INIT ──────────────────────────────────────────────────────────────────────

const tagger = new CaseTagger();
window.RDX_CaseTagger = tagger;

// Auto-apply on browse page when DOM is ready
function applyOnBrowse() {
  if (!document.getElementById('grid')) return; // not on browse page
  tagger._patchBrowseRender();
  tagger._injectForYouButton();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyOnBrowse);
} else {
  setTimeout(applyOnBrowse, 100); // give browse.html's setMode() time to run
}

// ── BASELINE GATE ─────────────────────────────────────────────────────────────
// After profession is set, check if baseline assessment is needed
// Fires after login redirect to index.html

document.addEventListener('DOMContentLoaded', function() {
  // Only run on index.html or pages that aren't the assessment itself
  if (window.location.pathname.includes('baseline-assessment')) return;

  const user = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
  if (!user || !user.email) return; // not logged in
  if (user.baselineComplete) return; // already done
  if (!user.professionProfile || !user.professionProfile.professionId) return; // profession not set yet

  // Profession set but baseline not done — redirect after a brief delay
  // (allows profession onboarding to complete first if running simultaneously)
  const params = new URLSearchParams(window.location.search);
  if (params.get('skip-baseline') === '1') return;

  // Only redirect from index.html, not from mid-session pages
  const isIndex = window.location.pathname === '/' ||
                  window.location.pathname === '/index.html' ||
                  window.location.pathname.endsWith('/index.html');

  if (isIndex) {
    setTimeout(() => {
      // Re-check in case onboarding just completed
      const u2 = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
      if (!u2.baselineComplete && u2.professionProfile && u2.professionProfile.professionId) {
        window.location.href = '/baseline-assessment.html';
      }
    }, 1500);
  }
});

})();
