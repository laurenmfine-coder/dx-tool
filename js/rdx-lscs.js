/**
 * rdx-lscs.js — Learner State Check-In System (LSCS)
 * ════════════════════════════════════════════════════
 * Three-stage adaptive check-in (pre / mid / post case) capturing
 * learner psychological state at time of clinical reasoning performance.
 *
 * RESEARCH RATIONALE:
 * Cognitive load, affect, and fatigue are known moderators of diagnostic
 * accuracy (Croskerry, 2002; Chew et al., 2004). This is the first platform
 * to ask "how did you feel when you made that error?" with sub-minute burden.
 *
 * RESEARCH DESIGN (LSCS Sub-Study):
 * IV: Pre-case state (mood, energy, confidence, cognitive load)
 * DV: Case performance (RPFS bias score, diagnostic accuracy, management safety)
 * Research question: Does physiological/psychological state at time of case
 * completion correlate with reasoning performance?
 *
 * STAGES:
 *   Pre-case (30s):  mood, energy level, confidence prediction
 *   Mid-case (15s):  stress level, "in the flow?" (optional interrupt)
 *   Post-case (30s): perceived difficulty, cognitive load, mood delta
 *
 * DATA: Stored in rad_study_sessions.lscs_data (JSONB) alongside all
 * other session data — no additional table needed.
 *
 * NOTE: IRB amendment needed before LSCS data is used in publications.
 * The system collects data but the research use requires separate approval.
 *
 * USED BY: virtual-emr.html
 */

(function(window) {
  'use strict';

  var _data = {
    pre: null,
    mid: null,
    post: null
  };
  var _midCheckTimer = null;

  // ── UI HELPERS ──────────────────────────────────────────────────────────────

  function _injectStyles() {
    if (document.getElementById('lscs-styles')) return;
    var style = document.createElement('style');
    style.id = 'lscs-styles';
    style.textContent = `
      .lscs-overlay {
        position: fixed; inset: 0; z-index: 9000;
        background: rgba(0,0,0,0.45); backdrop-filter: blur(3px);
        display: flex; align-items: center; justify-content: center;
        animation: lscs-fade-in .2s ease;
      }
      @keyframes lscs-fade-in { from { opacity:0; } to { opacity:1; } }
      .lscs-card {
        background: #fff; border-radius: 16px;
        padding: 24px 28px; max-width: 440px; width: 90%;
        box-shadow: 0 20px 60px rgba(0,0,0,0.25);
      }
      .lscs-title {
        font-size: 15px; font-weight: 700; color: #1a1a2e;
        margin-bottom: 4px;
      }
      .lscs-sub {
        font-size: 12px; color: #8892a4; margin-bottom: 18px;
      }
      .lscs-item { margin-bottom: 16px; }
      .lscs-label {
        font-size: 13px; font-weight: 600; color: #3d3d5c;
        margin-bottom: 8px; display: block;
      }
      .lscs-scale {
        display: flex; gap: 6px; align-items: center;
      }
      .lscs-anchor {
        font-size: 10px; color: #8892a4; min-width: 46px;
      }
      .lscs-anchor.hi { text-align: right; }
      .lscs-btns { display: flex; gap: 5px; flex: 1; justify-content: center; }
      .lscs-btn {
        width: 34px; height: 34px; border-radius: 50%;
        border: 2px solid #e2e8f0; background: #fff;
        font-size: 12px; font-weight: 700; cursor: pointer;
        transition: all .15s; color: #64748b;
      }
      .lscs-btn:hover { border-color: #2874A6; color: #2874A6; }
      .lscs-btn.sel { background: #2874A6; border-color: #2874A6; color: #fff; }
      .lscs-footer {
        display: flex; justify-content: space-between;
        align-items: center; margin-top: 20px; padding-top: 16px;
        border-top: 1px solid #e2e8f0;
      }
      .lscs-skip {
        font-size: 12px; color: #8892a4; cursor: pointer;
        background: none; border: none; padding: 0;
      }
      .lscs-skip:hover { color: #475569; }
      .lscs-next {
        padding: 9px 20px; background: #2874A6; color: #fff;
        border: none; border-radius: 8px; font-size: 13px;
        font-weight: 600; cursor: pointer; transition: all .15s;
      }
      .lscs-next:hover { background: #1a5c8a; }
      .lscs-next:disabled { opacity: .45; cursor: not-allowed; }
      .lscs-badge {
        font-size: 10px; font-weight: 700; color: #64748b;
        background: #f1f5f9; border-radius: 12px;
        padding: 2px 9px; letter-spacing: .04em;
        text-transform: uppercase;
      }
    `;
    document.head.appendChild(style);
  }

  function _makeScale(itemId, lo, hi, onChange) {
    var html = '<div class="lscs-scale">';
    html += '<span class="lscs-anchor lo">' + lo + '</span>';
    html += '<div class="lscs-btns" id="lscs-scale-' + itemId + '">';
    for (var i = 1; i <= 5; i++) {
      html += '<button class="lscs-btn" data-val="' + i + '" onclick="window.__lscsSelect(\'' + itemId + '\',' + i + ')">' + i + '</button>';
    }
    html += '</div>';
    html += '<span class="lscs-anchor hi">' + hi + '</span>';
    html += '</div>';
    return html;
  }

  window.__lscsSelect = function(itemId, val) {
    var container = document.getElementById('lscs-scale-' + itemId);
    if (!container) return;
    container.querySelectorAll('.lscs-btn').forEach(function(btn) {
      btn.classList.toggle('sel', parseInt(btn.dataset.val) === val);
    });
    window.__lscsValues = window.__lscsValues || {};
    window.__lscsValues[itemId] = val;
    // Enable submit if all required items filled
    var submitBtn = document.getElementById('lscs-submit');
    if (submitBtn && window.__lscsRequired) {
      var allFilled = window.__lscsRequired.every(function(id) {
        return window.__lscsValues[id] !== undefined;
      });
      submitBtn.disabled = !allFilled;
    }
  };

  // ── PRE-CASE CHECK-IN ───────────────────────────────────────────────────────

  /**
   * Shows the pre-case check-in modal.
   * Call this just before the simulation starts (after case loads, before phase 1).
   * @param {function} onComplete - called with { mood, energy, confidence, timestamp }
   */
  function showPreCase(onComplete) {
    _injectStyles();
    window.__lscsValues = {};
    window.__lscsRequired = ['mood', 'energy', 'confidence'];

    var overlay = document.createElement('div');
    overlay.className = 'lscs-overlay';
    overlay.id = 'lscs-overlay';
    overlay.innerHTML = `
      <div class="lscs-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px">
          <div>
            <div class="lscs-title">Quick Check-In</div>
            <div class="lscs-sub">30 seconds • How are you feeling right now?</div>
          </div>
          <span class="lscs-badge">Pre-Case</span>
        </div>

        <div class="lscs-item">
          <span class="lscs-label">Mood</span>
          ${_makeScale('mood', 'Low', 'Great')}
        </div>
        <div class="lscs-item">
          <span class="lscs-label">Energy level</span>
          ${_makeScale('energy', 'Exhausted', 'Energized')}
        </div>
        <div class="lscs-item">
          <span class="lscs-label">How confident do you feel about this type of case?</span>
          ${_makeScale('confidence', 'Not confident', 'Very confident')}
        </div>

        <div class="lscs-footer">
          <button class="lscs-skip" onclick="window.__lscsSkip()">Skip check-in</button>
          <button class="lscs-next" id="lscs-submit" disabled onclick="window.__lscsSubmitPre()">
            Start Case →
          </button>
        </div>
      </div>`;

    document.body.appendChild(overlay);

    window.__lscsSubmitPre = function() {
      var v = window.__lscsValues;
      _data.pre = {
        mood:       v.mood || null,
        energy:     v.energy || null,
        confidence: v.confidence || null,
        timestamp:  new Date().toISOString()
      };
      document.getElementById('lscs-overlay').remove();
      delete window.__lscsSubmitPre;
      if (onComplete) onComplete(_data.pre);
    };

    window.__lscsSkip = function() {
      document.getElementById('lscs-overlay').remove();
      delete window.__lscsSkip;
      _data.pre = { skipped: true, timestamp: new Date().toISOString() };
      if (onComplete) onComplete(_data.pre);
    };
  }

  // ── MID-CASE CHECK-IN ───────────────────────────────────────────────────────

  /**
   * Schedules an optional mid-case check-in after a delay.
   * Non-intrusive: tiny floating pill that expands on click.
   * @param {number} delayMs - milliseconds after case start (default 5 min)
   */
  function scheduleMidCase(delayMs) {
    if (_midCheckTimer) clearTimeout(_midCheckTimer);
    _midCheckTimer = setTimeout(function() {
      _showMidCasePill();
    }, delayMs || 5 * 60 * 1000);
  }

  function _showMidCasePill() {
    _injectStyles();
    if (document.getElementById('lscs-mid-pill')) return;

    var pill = document.createElement('div');
    pill.id = 'lscs-mid-pill';
    pill.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:8000;' +
      'background:#2874A6;color:#fff;border-radius:20px;padding:8px 16px;' +
      'font-size:12px;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(40,116,166,.4);' +
      'transition:all .2s;';
    pill.textContent = '⏸ Quick check-in?';
    pill.onclick = function() {
      pill.remove();
      _showMidCaseModal();
    };
    document.body.appendChild(pill);

    // Auto-dismiss after 60s
    setTimeout(function() {
      if (document.getElementById('lscs-mid-pill')) {
        document.getElementById('lscs-mid-pill').remove();
        _data.mid = { skipped: true, timestamp: new Date().toISOString() };
      }
    }, 60000);
  }

  function _showMidCaseModal() {
    window.__lscsValues = {};
    window.__lscsRequired = ['stress'];

    var overlay = document.createElement('div');
    overlay.className = 'lscs-overlay';
    overlay.id = 'lscs-overlay';
    overlay.innerHTML = `
      <div class="lscs-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px">
          <div>
            <div class="lscs-title">Mid-Case Check-In</div>
            <div class="lscs-sub">15 seconds</div>
          </div>
          <span class="lscs-badge">Mid-Case</span>
        </div>
        <div class="lscs-item">
          <span class="lscs-label">Stress level right now</span>
          ${_makeScale('stress', 'Calm', 'Very stressed')}
        </div>
        <div class="lscs-item">
          <span class="lscs-label">Are you in a flow state?</span>
          ${_makeScale('flow', 'Struggling', 'In the zone')}
        </div>
        <div class="lscs-footer">
          <button class="lscs-skip" onclick="window.__lscsMidSkip()">Skip</button>
          <button class="lscs-next" id="lscs-submit" disabled onclick="window.__lscsMidSubmit()">
            Continue Case →
          </button>
        </div>
      </div>`;

    document.body.appendChild(overlay);
    // flow is optional, so enable submit when stress is filled
    window.__lscsRequired = ['stress'];

    window.__lscsMidSubmit = function() {
      var v = window.__lscsValues;
      _data.mid = {
        stress:    v.stress || null,
        flow:      v.flow || null,
        timestamp: new Date().toISOString()
      };
      document.getElementById('lscs-overlay').remove();
      delete window.__lscsMidSubmit;
    };

    window.__lscsMidSkip = function() {
      document.getElementById('lscs-overlay').remove();
      _data.mid = { skipped: true, timestamp: new Date().toISOString() };
    };
  }

  // ── POST-CASE CHECK-IN ──────────────────────────────────────────────────────

  /**
   * Shows the post-case check-in modal.
   * Call this just before the debrief renders (end of phase 10).
   * @param {function} onComplete - called with full LSCS data object
   */
  function showPostCase(onComplete) {
    _injectStyles();
    if (_midCheckTimer) { clearTimeout(_midCheckTimer); _midCheckTimer = null; }
    window.__lscsValues = {};
    window.__lscsRequired = ['difficulty', 'cognitive_load'];

    var overlay = document.createElement('div');
    overlay.className = 'lscs-overlay';
    overlay.id = 'lscs-overlay';
    overlay.innerHTML = `
      <div class="lscs-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px">
          <div>
            <div class="lscs-title">Post-Case Check-In</div>
            <div class="lscs-sub">30 seconds • How was that?</div>
          </div>
          <span class="lscs-badge">Post-Case</span>
        </div>
        <div class="lscs-item">
          <span class="lscs-label">How difficult was this case?</span>
          ${_makeScale('difficulty', 'Very easy', 'Very hard')}
        </div>
        <div class="lscs-item">
          <span class="lscs-label">Mental effort required</span>
          ${_makeScale('cognitive_load', 'Effortless', 'Mentally draining')}
        </div>
        <div class="lscs-item">
          <span class="lscs-label">Mood after the case</span>
          ${_makeScale('mood_post', 'Low', 'Great')}
        </div>
        <div class="lscs-footer">
          <button class="lscs-skip" onclick="window.__lscsPostSkip()">Skip</button>
          <button class="lscs-next" id="lscs-submit" disabled onclick="window.__lscsPostSubmit()">
            See Debrief →
          </button>
        </div>
      </div>`;

    document.body.appendChild(overlay);

    window.__lscsPostSubmit = function() {
      var v = window.__lscsValues;
      _data.post = {
        difficulty:     v.difficulty || null,
        cognitive_load: v.cognitive_load || null,
        mood_post:      v.mood_post || null,
        timestamp:      new Date().toISOString()
      };
      document.getElementById('lscs-overlay').remove();
      delete window.__lscsPostSubmit;
      if (onComplete) onComplete(getFullData());
    };

    window.__lscsPostSkip = function() {
      document.getElementById('lscs-overlay').remove();
      _data.post = { skipped: true, timestamp: new Date().toISOString() };
      if (onComplete) onComplete(getFullData());
    };
  }

  // ── DATA ACCESS ─────────────────────────────────────────────────────────────

  /**
   * Returns the complete LSCS dataset for inclusion in Supabase.
   * Add to exportStudyData() payload as `lscs_data`.
   */
  function getFullData() {
    return {
      pre:  _data.pre,
      mid:  _data.mid,
      post: _data.post,
      // Derived: mood delta (post - pre), if both present
      mood_delta: (_data.pre && _data.post &&
                   _data.pre.mood && _data.post.mood_post)
        ? _data.post.mood_post - _data.pre.mood
        : null,
      // Flag: any stage skipped
      any_skipped: [_data.pre, _data.mid, _data.post]
        .some(function(s) { return s && s.skipped; })
    };
  }

  /** Reset for new session */
  function reset() {
    _data = { pre: null, mid: null, post: null };
    if (_midCheckTimer) { clearTimeout(_midCheckTimer); _midCheckTimer = null; }
  }

  // ── PUBLIC API ──────────────────────────────────────────────────────────────
  window.RdxLSCS = {
    showPreCase:       showPreCase,
    scheduleMidCase:   scheduleMidCase,
    showPostCase:      showPostCase,
    getFullData:       getFullData,
    reset:             reset
  };

})(window);
