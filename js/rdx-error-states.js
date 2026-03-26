/* eslint-disable no-console */ if(typeof window!=='undefined'&&!window.RDX_DEV){var _ce=console.error;console.error=function(){};}
/* rdx-error-states.js — Error boundaries, loading skeletons, and friendly
 * error messages throughout the ReasonDx Virtual EMR.
 * Wraps render functions so one broken module can't crash the whole app.
 * Adds loading feedback for async operations (CoachDx, case load, submit).
 */
(function() {
  'use strict';

  // ── Skeleton templates ────────────────────────────────────────────────────
  var SKELETONS = {
    card: function(lines) {
      lines = lines || 3;
      var bars = '';
      for (var i = 0; i < lines; i++) {
        var w = [90, 75, 60, 80, 50][i % 5];
        bars += '<div class="rdx-skel-bar" style="width:' + w + '%;margin-bottom:10px"></div>';
      }
      return '<div class="rdx-skeleton-card">' + bars + '</div>';
    },
    table: function(rows) {
      rows = rows || 4;
      var r = '';
      for (var i = 0; i < rows; i++) {
        r += '<div class="rdx-skel-row"><div class="rdx-skel-cell" style="width:35%"></div><div class="rdx-skel-cell" style="width:20%"></div><div class="rdx-skel-cell" style="width:30%"></div></div>';
      }
      return '<div class="rdx-skeleton-table">' + r + '</div>';
    },
    chat: function() {
      return '<div class="rdx-skeleton-chat">'
        + '<div class="rdx-skel-bubble right"></div>'
        + '<div class="rdx-skel-bubble left wide"></div>'
        + '<div class="rdx-skel-bubble right narrow"></div>'
        + '</div>';
    },
  };

  // ── CSS ───────────────────────────────────────────────────────────────────
  function injectCSS() {
    if (document.getElementById('rdx-error-css')) return;
    var s = document.createElement('style');
    s.id = 'rdx-error-css';
    s.textContent = [
      // Skeleton shimmer
      '@keyframes rdxShimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}',
      '.rdx-skel-bar,.rdx-skel-cell,.rdx-skel-bubble{background:linear-gradient(90deg,#F1F5F9 25%,#E2E8F0 50%,#F1F5F9 75%);background-size:800px 100%;animation:rdxShimmer 1.4s ease-in-out infinite;border-radius:6px}',
      '.rdx-skel-bar{height:14px;border-radius:6px}',
      '.rdx-skeleton-card{padding:20px;background:#fff;border-radius:12px;border:1px solid #E2E8F0}',
      '.rdx-skeleton-table{padding:12px;background:#fff;border-radius:12px;border:1px solid #E2E8F0}',
      '.rdx-skel-row{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid #F1F5F9}',
      '.rdx-skel-cell{height:12px;border-radius:4px}',
      '.rdx-skeleton-chat{display:flex;flex-direction:column;gap:12px;padding:16px}',
      '.rdx-skel-bubble{height:44px;border-radius:16px}',
      '.rdx-skel-bubble.right{width:65%;margin-left:auto;border-bottom-right-radius:4px}',
      '.rdx-skel-bubble.left{width:80%;border-bottom-left-radius:4px}',
      '.rdx-skel-bubble.wide{width:80%}',
      '.rdx-skel-bubble.narrow{width:40%;margin-left:auto}',

      // Error state
      '.rdx-error-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 24px;text-align:center;background:#fff;border-radius:12px;border:1px solid #FECACA;min-height:160px}',
      '.rdx-error-icon{font-size:32px;margin-bottom:10px}',
      '.rdx-error-title{font-size:15px;font-weight:700;color:#DC2626;margin-bottom:6px}',
      '.rdx-error-desc{font-size:13px;color:#64748B;line-height:1.6;margin-bottom:16px;max-width:320px}',
      '.rdx-error-btn{padding:8px 20px;background:#2874A6;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .15s}',
      '.rdx-error-btn:hover{background:#1B4F72}',

      // Loading overlay on buttons
      '.rdx-loading-btn{position:relative;pointer-events:none;opacity:.8}',
      '.rdx-loading-btn::after{content:\'\';position:absolute;top:50%;right:12px;width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;transform:translateY(-50%);animation:rdxSpin .7s linear infinite}',
      '@keyframes rdxSpin{to{transform:translateY(-50%) rotate(360deg)}}',

      // Inline loading indicator
      '.rdx-loading-inline{display:flex;align-items:center;gap:8px;padding:12px 16px;font-size:13px;color:#64748B}',
      '.rdx-loading-dots{display:flex;gap:4px}',
      '.rdx-loading-dot{width:6px;height:6px;border-radius:50%;background:#2874A6;animation:rdxDotBounce .8s ease-in-out infinite}',
      '.rdx-loading-dot:nth-child(2){animation-delay:.15s}',
      '.rdx-loading-dot:nth-child(3){animation-delay:.3s}',
      '@keyframes rdxDotBounce{0%,80%,100%{transform:scale(0.6);opacity:.4}40%{transform:scale(1);opacity:1}}',

      // Case load failure
      '.rdx-case-error{background:linear-gradient(135deg,#FEF2F2,#FFF);border:2px solid #FECACA;border-radius:16px;padding:32px;text-align:center;margin:24px}',

      // CoachDx thinking indicator (replaces default)
      '.rdx-coach-thinking{display:flex;align-items:flex-start;gap:10px;padding:12px 16px}',
      '.rdx-coach-think-avatar{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#2874A6,#1B5E3B);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}',
      '.rdx-coach-think-bubble{background:#F8FAFC;border:1px solid #E2E8F0;border-radius:16px;border-bottom-left-radius:4px;padding:12px 16px;display:flex;align-items:center;gap:8px}',
      '.rdx-coach-think-label{font-size:12px;color:#64748B;font-style:italic}',
    ].join('\n');
    document.head.appendChild(s);
  }

  injectCSS();

  // ── Public API ─────────────────────────────────────────────────────────────
  window.RDXErrors = {

    // Render a friendly error state
    errorState: function(opts) {
      opts = opts || {};
      var icon     = opts.icon     || '⚠️';
      var title    = opts.title    || 'Something went wrong';
      var desc     = opts.desc     || 'This section couldn\'t load. Try refreshing the page.';
      var retry    = opts.retry;
      var retryFn  = opts.retryFn  || 'location.reload()';

      var html = '<div class="rdx-error-state">';
      html += '<div class="rdx-error-icon">' + icon + '</div>';
      html += '<div class="rdx-error-title">' + desc + '</div>';
      if (retry) html += '<button class="rdx-error-btn" onclick="' + retryFn + '">' + retry + '</button>';
      html += '</div>';
      return html;
    },

    // Skeleton loaders
    skeleton: function(type, arg) {
      return SKELETONS[type] ? SKELETONS[type](arg) : SKELETONS.card();
    },

    // Wrap a render function with an error boundary
    wrap: function(renderFn, fallbackOpts) {
      return function() {
        try {
          var result = renderFn.apply(this, arguments);
          return result || '';
        } catch(e) {
          console.error('RDXErrors: render error in', renderFn.name, e);
          return window.RDXErrors.errorState(fallbackOpts || {
            icon: '⚙️',
            desc: 'This section couldn\'t load. The rest of the chart is still available.',
            retry: 'Try Again',
            retryFn: 'render()',
          });
        }
      };
    },

    // Show loading state on a button
    loadingBtn: function(btnId) {
      var btn = typeof btnId === 'string' ? document.getElementById(btnId) : btnId;
      if (btn) btn.classList.add('rdx-loading-btn');
    },
    doneBtn: function(btnId) {
      var btn = typeof btnId === 'string' ? document.getElementById(btnId) : btnId;
      if (btn) btn.classList.remove('rdx-loading-btn');
    },

    // CoachDx thinking indicator
    coachThinking: function() {
      return '<div class="rdx-coach-thinking">'
        + '<div class="rdx-coach-think-avatar">🧠</div>'
        + '<div class="rdx-coach-think-bubble">'
        + '<div class="rdx-loading-dots"><div class="rdx-loading-dot"></div><div class="rdx-loading-dot"></div><div class="rdx-loading-dot"></div></div>'
        + '<span class="rdx-coach-think-label">Your attending is thinking...</span>'
        + '</div></div>';
    },

    // Case load error (full-page)
    caseLoadError: function(caseId, retryFn) {
      return '<div class="rdx-case-error">'
        + '<div style="font-size:36px;margin-bottom:12px">🏥</div>'
        + '<div style="font-size:18px;font-weight:800;color:#DC2626;margin-bottom:8px">Case Couldn\'t Load</div>'
        + '<div style="font-size:14px;color:#64748B;line-height:1.6;margin-bottom:20px;max-width:400px;margin-left:auto;margin-right:auto">'
        + 'We couldn\'t load this patient case. This might be a temporary issue.'
        + (caseId ? '<br><span style="font-size:11px;font-family:monospace;color:#94A3B8;margin-top:4px;display:block">Case: ' + caseId + '</span>' : '')
        + '</div>'
        + '<div style="display:flex;gap:10px;justify-content:center">'
        + '<button onclick="location.reload()" style="padding:10px 20px;background:#2874A6;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit">↺ Retry</button>'
        + '<a href="choose-mode.html" style="padding:10px 20px;background:#F1F5F9;color:#374151;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;text-decoration:none">← Pick Another Case</a>'
        + '</div></div>';
    },

    // Network error toast
    networkError: function() {
      if (window.showToast) showToast('⚠️ Connection issue — check your internet and try again');
    },

    // Permission error
    permissionError: function(what) {
      return '<div class="rdx-error-state" style="border-color:#FDE68A;background:#FFFBEB">'
        + '<div class="rdx-error-icon">🔒</div>'
        + '<div class="rdx-error-title" style="color:#92400E">' + (what || 'This feature requires a Pro subscription') + '</div>'
        + '<div class="rdx-error-desc">Upgrade to Pro to unlock AI coaching, spaced repetition, and full analytics.</div>'
        + '<a href="index.html#pricing" style="padding:8px 20px;background:#2874A6;color:#fff;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none">View Plans →</a>'
        + '</div>';
    },

    // Empty state
    emptyState: function(icon, title, desc, action, actionUrl) {
      return '<div class="rdx-error-state" style="border-color:#E2E8F0">'
        + '<div class="rdx-error-icon">' + (icon||'📋') + '</div>'
        + '<div class="rdx-error-title" style="color:#1E293B">' + (title||'Nothing here yet') + '</div>'
        + (desc ? '<div class="rdx-error-desc">' + desc + '</div>' : '')
        + (action ? '<a href="' + (actionUrl||'#') + '" class="rdx-error-btn">' + action + '</a>' : '')
        + '</div>';
    },

  };

  // ── Auto-wrap EMR render functions after page load ─────────────────────────
  // Called after bootstrapApp() sets up all render functions
  function wrapRenderFunctions() {
    if (!window.RDXErrors) return;
    var fns = ['renderDemographics','renderProblems','renderVisits','renderMedications',
               'renderAllergies','renderLabs','renderImaging','renderVitals',
               'renderImmunizations','renderHistory','renderFeedback','renderGrading',
               'renderAdmin','renderHandoff','renderStudyHub'];
    fns.forEach(function(name) {
      if (typeof window[name] === 'function') {
        window[name] = RDXErrors.wrap(window[name], {
          icon: '⚙️',
          desc: 'This section couldn\'t load. Try switching to another tab and back.',
          retry: 'Reload section',
          retryFn: 'render()',
        });
      }
    });
  }

  // ── Patch CoachDx loading state ────────────────────────────────────────────
  // Replace the generic "loading..." with the animated thinking indicator
  function patchCoachLoading() {
    // Poll until coachMessages element exists
    var attempts = 0;
    var interval = setInterval(function() {
      attempts++;
      var coachMsgs = document.getElementById('coachMessages');
      if (coachMsgs || attempts > 20) clearInterval(interval);
    }, 500);
  }

  // ── Patch submit button ────────────────────────────────────────────────────
  // Add loading state to submit button during async operations
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn-submit');
    if (btn && btn.id === 'submitBtn') {
      RDXErrors.loadingBtn(btn);
      setTimeout(function() { RDXErrors.doneBtn(btn); }, 3000);
    }
  });

  // ── Patch case load failure ────────────────────────────────────────────────
  // If bootstrapApp errors, show friendly case load error instead of blank
  var _origBootstrap = null;
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      wrapRenderFunctions();
      // Check if app element is still empty after 5 seconds (case load failure)
      setTimeout(function() {
        var app = document.getElementById('app');
        if (app && app.innerHTML.trim() === '') {
          var params = new URLSearchParams(window.location.search);
          app.innerHTML = RDXErrors.caseLoadError(params.get('case'));
        }
      }, 5000);
    }, 1000);
  });

  // ── Global error handler ───────────────────────────────────────────────────
  window.addEventListener('error', function(e) {
    // Don't interfere with normal operation — just log
    if (e.filename && e.filename.indexOf('rdx') >= 0) {
      console.warn('RDXErrors caught:', e.message, 'in', e.filename, 'line', e.lineno);
    }
  });

  // ── Patch CoachDx thinking state ──────────────────────────────────────────
  // Replace S.coachLoading state with the animated indicator
  var _origRender = null;
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      // Patch renderCoachDx to use our thinking indicator
      if (typeof window.renderCoachDx === 'function') {
        var orig = window.renderCoachDx;
        window.renderCoachDx = function() {
          var result = orig.apply(this, arguments);
          if (window.S && S.coachLoading) {
            // Inject thinking indicator before the input
            result = result.replace(
              '<div class="coach-input-row"',
              RDXErrors.coachThinking() + '<div class="coach-input-row"'
            );
          }
          return result;
        };
      }
    }, 1500);
  });

})();
