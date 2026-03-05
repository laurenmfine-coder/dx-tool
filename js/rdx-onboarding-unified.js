/* rdx-onboarding-unified.js — Single, role-aware first-time onboarding
 * Replaces rdx-onboarding.js + rdx-orientation.js collision.
 * Fires ONCE per user. 3 steps max. Ends with learner inside their first case.
 * Faculty path → faculty-dashboard.html
 * Student path → first case in under 90 seconds
 */
(function() {
  'use strict';

  var KEY = 'rdx-onboarded-v2';
  var ROLE_KEY = 'rdx-onboard-role';

  // Don't fire on auth pages, terms, or faculty dashboard itself
  if (/auth\/|login|register|privacy|terms|faculty-dashboard/i.test(location.pathname)) return;
  // Only fire once
  if (localStorage.getItem(KEY)) return;
  // Don't stack with other modals - brief delay
  var DELAY = 800;

  var selectedRole = null;

  var PATHS = {
    student: {
      emoji: '🩺',
      title: 'Medical / PA / NP Student',
      subtitle: 'Learning clinical reasoning',
      headline: "Here's your fastest path to better clinical reasoning:",
      steps: [
        { icon: '🔍', text: '<strong>Review the chart</strong> — Labs, vitals, meds. Something is always abnormal. Find it.' },
        { icon: '💡', text: '<strong>Write your differential</strong> — Commit before you take the history. This is where anchoring bias starts.' },
        { icon: '🧠', text: '<strong>Talk to your AI attending (CoachDx)</strong> — Defend your reasoning. Get questioned like a real attending would.' },
        { icon: '🧬', text: '<strong>Learn the why (MechanismDx)</strong> — Pathophysiology behind every diagnosis, surface automatically.' },
      ],
      cta: 'Start Your First Case →',
      url: 'virtual-emr.html?setting=ed',
    },
    resident: {
      emoji: '🏥',
      title: 'Resident or Fellow',
      subtitle: 'Sharpening diagnostic skills',
      headline: 'Advanced tools built for your level:',
      steps: [
        { icon: '🌙', text: '<strong>Night Float Simulator</strong> — Cross-cover, nurse pages, I-PASS handoffs.' },
        { icon: '⚡', text: '<strong>Clinical Reasoning Trainers</strong> — Specialty-specific pitfall-based cases.' },
        { icon: '📞', text: '<strong>Consult Callback</strong> — AI-scored consultant communication scenarios.' },
        { icon: '📊', text: '<strong>Milestone Tracker</strong> — ACGME subcompetency progression for A/I fellows.' },
      ],
      cta: 'Open the Virtual Hospital →',
      url: 'dashboard.html',
    },
    educator: {
      emoji: '📚',
      title: 'Educator / Faculty / PD',
      subtitle: 'Curriculum & assessment tools',
      headline: 'Built for curriculum integration and assessment:',
      steps: [
        { icon: '📊', text: '<strong>Faculty Dashboard</strong> — Student roster, submission queue, batch grading.' },
        { icon: '🎓', text: '<strong>Cohort Analytics</strong> — Class-level performance, reasoning gaps, rubric averages.' },
        { icon: '📋', text: '<strong>Milestone Tracker</strong> — Map fellow progress to ACGME subcompetencies.' },
        { icon: '🏥', text: '<strong>Institutional Licensing</strong> — LMS integration, custom cases, cohort management.' },
      ],
      cta: 'Open Faculty Dashboard →',
      url: 'faculty-dashboard.html',
    },
  };

  // ── Build modal ────────────────────────────────────────────────────────────
  function buildCSS() {
    var s = document.createElement('style');
    s.textContent = [
      '.rdx-ob-overlay{position:fixed;inset:0;background:rgba(15,23,42,.6);backdrop-filter:blur(4px);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px}',
      '@keyframes rdxObIn{from{opacity:0;transform:scale(.94) translateY(12px)}to{opacity:1;transform:scale(1) translateY(0)}}',
      '.rdx-ob-modal{background:#fff;border-radius:20px;width:100%;max-width:520px;box-shadow:0 24px 80px rgba(0,0,0,.22);overflow:hidden;animation:rdxObIn .32s ease;position:relative}',
      '.rdx-ob-header{background:linear-gradient(135deg,#1B3A5C,#2874A6);padding:28px 32px 24px;color:#fff}',
      '.rdx-ob-logo{display:flex;align-items:center;gap:8px;margin-bottom:20px}',
      '.rdx-ob-logo-text{font-size:18px;font-weight:800;letter-spacing:-.3px}',
      '.rdx-ob-logo-sub{font-size:11px;opacity:.6;margin-left:4px}',
      '.rdx-ob-step-indicator{display:flex;gap:6px;margin-bottom:0}',
      '.rdx-ob-dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.3);transition:all .2s}',
      '.rdx-ob-dot.active{background:#fff;width:20px;border-radius:3px}',
      '.rdx-ob-body{padding:28px 32px 32px}',
      '.rdx-ob-title{font-size:20px;font-weight:800;color:#1E293B;margin-bottom:8px;letter-spacing:-.2px}',
      '.rdx-ob-desc{font-size:14px;color:#64748B;line-height:1.6;margin-bottom:24px}',
      // Role cards
      '.rdx-ob-roles{display:flex;flex-direction:column;gap:8px}',
      '.rdx-ob-role{display:flex;align-items:center;gap:14px;padding:14px 16px;background:#F8FAFC;border:1.5px solid #E2E8F0;border-radius:12px;cursor:pointer;transition:all .15s;text-align:left;font-family:inherit;width:100%}',
      '.rdx-ob-role:hover{border-color:#2874A6;background:#EBF5FB;transform:translateX(4px)}',
      '.rdx-ob-role.selected{border-color:#2874A6;background:#EBF5FB}',
      '.rdx-ob-role-emoji{font-size:26px;flex-shrink:0}',
      '.rdx-ob-role-title{font-size:14px;font-weight:700;color:#1E293B;display:block}',
      '.rdx-ob-role-sub{font-size:11px;color:#94A3B8;display:block;margin-top:2px}',
      // Steps
      '.rdx-ob-steps{display:flex;flex-direction:column;gap:10px;margin-bottom:24px}',
      '.rdx-ob-step{display:flex;align-items:flex-start;gap:12px;padding:12px 14px;background:#F8FAFC;border-radius:10px;border:1px solid #E2E8F0}',
      '.rdx-ob-step-icon{font-size:18px;flex-shrink:0;margin-top:1px}',
      '.rdx-ob-step-text{font-size:13px;color:#374151;line-height:1.55}',
      // Actions
      '.rdx-ob-actions{display:flex;gap:10px;flex-wrap:wrap}',
      '.rdx-ob-btn-primary{flex:1;padding:13px 20px;background:#2874A6;color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;transition:all .15s;font-family:inherit;text-align:center}',
      '.rdx-ob-btn-primary:hover{background:#1B4F72;transform:translateY(-1px)}',
      '.rdx-ob-btn-ghost{padding:13px 18px;background:transparent;color:#64748B;border:1.5px solid #E2E8F0;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;transition:all .15s;font-family:inherit}',
      '.rdx-ob-btn-ghost:hover{border-color:#94A3B8;color:#1E293B}',
      '.rdx-ob-close{position:absolute;top:14px;right:16px;background:rgba(255,255,255,.15);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;font-family:inherit;transition:all .15s}',
      '.rdx-ob-close:hover{background:rgba(255,255,255,.25)}',
      // Progress bar at very top
      '.rdx-ob-progress{height:3px;background:rgba(255,255,255,.2);position:relative}',
      '.rdx-ob-progress-fill{height:100%;background:#fff;transition:width .3s ease}',
      '@media(max-width:560px){.rdx-ob-header,.rdx-ob-body{padding:20px}.rdx-ob-modal{border-radius:16px}}',
    ].join('');
    document.head.appendChild(s);
  }

  function buildModal() {
    var overlay = document.createElement('div');
    overlay.className = 'rdx-ob-overlay';
    overlay.id = 'rdxObOverlay';
    overlay.innerHTML = renderStep0();
    return overlay;
  }

  // ── Step renderers ─────────────────────────────────────────────────────────
  function renderStep0() {
    return '<div class="rdx-ob-modal">'
      + '<div class="rdx-ob-header">'
      + '<button class="rdx-ob-close" onclick="RDXOnboard.dismiss()" aria-label="Close">×</button>'
      + '<div class="rdx-ob-progress"><div class="rdx-ob-progress-fill" style="width:33%"></div></div>'
      + '<div style="padding:24px 28px 20px">'
      + '<div class="rdx-ob-logo"><span style="font-size:22px;font-weight:900;color:#fff;letter-spacing:-.5px">Reason<em style="font-style:normal;opacity:.7">Dx</em></span><span class="rdx-ob-logo-sub">The Virtual Teaching Hospital</span></div>'
      + '<div style="font-size:22px;font-weight:800;margin-bottom:4px">Welcome 👋</div>'
      + '<div style="font-size:14px;opacity:.75">Tell us about yourself — we\'ll point you in the right direction.</div>'
      + '</div></div>'
      + '<div class="rdx-ob-body">'
      + '<div class="rdx-ob-roles">'
      + renderRoleBtn('student')
      + renderRoleBtn('resident')
      + renderRoleBtn('educator')
      + '</div>'
      + '</div></div>';
  }

  function renderRoleBtn(role) {
    var p = PATHS[role];
    return '<button class="rdx-ob-role" onclick="RDXOnboard.selectRole(\'' + role + '\')">'
      + '<span class="rdx-ob-role-emoji">' + p.emoji + '</span>'
      + '<span><span class="rdx-ob-role-title">' + p.title + '</span>'
      + '<span class="rdx-ob-role-sub">' + p.subtitle + '</span></span>'
      + '<span style="margin-left:auto;color:#94A3B8;font-size:18px">›</span>'
      + '</button>';
  }

  function renderStep1(role) {
    var p = PATHS[role];
    var stepsHtml = p.steps.map(function(s) {
      return '<div class="rdx-ob-step"><span class="rdx-ob-step-icon">' + s.icon + '</span>'
        + '<span class="rdx-ob-step-text">' + s.text + '</span></div>';
    }).join('');

    return '<div class="rdx-ob-modal">'
      + '<div class="rdx-ob-header">'
      + '<button class="rdx-ob-close" onclick="RDXOnboard.dismiss()" aria-label="Close">×</button>'
      + '<div class="rdx-ob-progress"><div class="rdx-ob-progress-fill" style="width:66%"></div></div>'
      + '<div style="padding:24px 28px 20px">'
      + '<div style="font-size:28px;margin-bottom:8px">' + p.emoji + '</div>'
      + '<div style="font-size:20px;font-weight:800;margin-bottom:4px">' + p.title + '</div>'
      + '<div style="font-size:14px;opacity:.75">' + p.headline + '</div>'
      + '</div></div>'
      + '<div class="rdx-ob-body">'
      + '<div class="rdx-ob-steps">' + stepsHtml + '</div>'
      + '<div class="rdx-ob-actions">'
      + '<button class="rdx-ob-btn-primary" onclick="RDXOnboard.start(\'' + role + '\')">' + p.cta + '</button>'
      + '<button class="rdx-ob-btn-ghost" onclick="RDXOnboard.dismiss()">Explore on my own</button>'
      + '</div></div></div>';
  }

  // ── Controller ──────────────────────────────────────────────────────────────
  window.RDXOnboard = {
    selectRole: function(role) {
      selectedRole = role;
      localStorage.setItem(ROLE_KEY, role);
      var overlay = document.getElementById('rdxObOverlay');
      if (!overlay) return;
      overlay.innerHTML = renderStep1(role);
    },

    start: function(role) {
      localStorage.setItem(KEY, '1');
      var p = PATHS[role || selectedRole || 'student'];
      var url = p ? p.url : 'virtual-emr.html?setting=ed';
      var overlay = document.getElementById('rdxObOverlay');
      if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity .2s';
      }
      setTimeout(function() {
        if (overlay) overlay.remove();
        if (location.pathname.indexOf(url.split('?')[0]) < 0) {
          window.location.href = url;
        }
      }, 200);
    },

    dismiss: function() {
      localStorage.setItem(KEY, '1');
      var overlay = document.getElementById('rdxObOverlay');
      if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity .2s';
        setTimeout(function() { if (overlay) overlay.remove(); }, 220);
      }
    },

    // Force re-show (e.g. from help menu)
    reset: function() {
      localStorage.removeItem(KEY);
      localStorage.removeItem(ROLE_KEY);
      var existing = document.getElementById('rdxObOverlay');
      if (existing) existing.remove();
      buildCSS();
      var overlay = buildModal();
      document.body.appendChild(overlay);
    },
  };

  // ── Init ───────────────────────────────────────────────────────────────────
  function init() {
    // Suppress the old onboarding and orientation modals if they fire
    var _origObDismiss = window.obDismiss;
    if (typeof _origObDismiss === 'function') {
      // They both check their own localStorage keys — our key is different
      // so they won't be suppressed automatically. Force their keys.
      try { localStorage.setItem('rdx-onboarded', '1'); } catch(e) {}
      try { localStorage.setItem('rdx-orientation-seen', 'true'); } catch(e) {}
    }

    buildCSS();
    var overlay = buildModal();

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() { document.body.appendChild(overlay); }, DELAY);
      });
    } else {
      setTimeout(function() { document.body.appendChild(overlay); }, DELAY);
    }
  }

  init();

})();
