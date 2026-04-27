/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx Navigator Widget — rdx-navigator-widget.js
 * ═══════════════════════════════════════════════════════════════
 * A floating "What should I do next?" panel that appears on any
 * ReasonDx page. Uses RdxAgent.Navigator and RdxAgent.LearningProfile
 * to generate personalized, context-aware recommendations.
 *
 * Include AFTER rdx-agent-core.js:
 *   <script src="js/rdx-agent-core.js"></script>
 *   <script src="js/rdx-navigator-widget.js"></script>
 *
 * Auto-initializes on DOMContentLoaded. No manual setup needed.
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  // Don't run on virtual-emr.html or rad-study.html (they have their own flow)
  if (window.location.pathname.includes('simulation-engine') || window.location.pathname.includes('rad-study.html')) return;
  if (window.location.pathname.includes('rad-study-dashboard.html')) return;

  // Wait for RdxAgent to be available
  function init() {
    if (!window.RdxAgent) {
      rdxLog('Navigator widget: RdxAgent not loaded, skipping.');
      return;
    }

    // Track this page visit
    var pageKey = detectCurrentModule();
    if (pageKey) window.RdxAgent.Navigator.trackModuleVisit(pageKey);

    // Inject CSS
    var style = document.createElement('style');
    style.textContent = NAV_CSS;
    document.head.appendChild(style);

    // Create the floating button
    var btn = document.createElement('button');
    btn.id = 'rdx-nav-fab';
    btn.innerHTML = '\uD83E\uDDE0';
    btn.title = 'What should I do next?';
    btn.onclick = togglePanel;
    document.body.appendChild(btn);

    // Create the panel (hidden by default)
    var panel = document.createElement('div');
    panel.id = 'rdx-nav-panel';
    panel.className = 'rdx-nav-hidden';
    panel.innerHTML = '<div class="rdx-nav-header"><span class="rdx-nav-title">\uD83E\uDDE0 What\u2019s Next?</span><button class="rdx-nav-close" onclick="document.getElementById(\'rdx-nav-panel\').classList.add(\'rdx-nav-hidden\')">\u2715</button></div><div id="rdx-nav-content" class="rdx-nav-content"><div class="rdx-nav-loading">Thinking...</div></div>';
    document.body.appendChild(panel);
  }

  function togglePanel() {
    var panel = document.getElementById('rdx-nav-panel');
    if (!panel) return;
    var isHidden = panel.classList.contains('rdx-nav-hidden');
    if (isHidden) {
      panel.classList.remove('rdx-nav-hidden');
      loadRecommendations();
    } else {
      panel.classList.add('rdx-nav-hidden');
    }
  }

  async function loadRecommendations() {
    var content = document.getElementById('rdx-nav-content');
    if (!content) return;
    content.innerHTML = '<div class="rdx-nav-loading">Thinking...</div>';

    try {
      // Get student name from localStorage or auth
      var studentName = null;
      try {
        var authData = JSON.parse(localStorage.getItem('rdx_user') || '{}');
        studentName = authData.name || authData.email || null;
      } catch(e) {}

      // Build learning profile
      var profile = await window.RdxAgent.LearningProfile.build(studentName);

      // Get rule-based recommendations
      var currentPage = detectCurrentModule();
      var recs = window.RdxAgent.Navigator.getRecommendations(profile, currentPage);

      // Get AI recommendation (async, fills in after)
      var aiRecPromise = window.RdxAgent.Navigator.getAIRecommendation(profile, currentPage);

      // Render rule-based recommendations immediately
      var html = '';

      // Profile summary
      if (profile.sessionsCompleted > 0) {
        html += '<div class="rdx-nav-profile">';
        html += '<div class="rdx-nav-profile-stat">' + profile.sessionsCompleted + ' sessions completed</div>';
        if (profile.strengthAreas.length > 0) {
          html += '<div class="rdx-nav-profile-strengths">\u2705 Strengths: ' + profile.strengthAreas.join(', ') + '</div>';
        }
        if (profile.topGaps.length > 0) {
          html += '<div class="rdx-nav-profile-gaps">\uD83C\uDFAF Focus areas: ' + profile.topGaps.map(function(g) { return g.title; }).join(', ') + '</div>';
        }
        html += '</div>';
      }

      // AI recommendation (placeholder, fills async)
      html += '<div id="rdx-nav-ai-rec" class="rdx-nav-ai-rec"><div class="rdx-nav-ai-loading">Getting personalized suggestion...</div></div>';

      // Module recommendations
      if (recs.length > 0) {
        html += '<div class="rdx-nav-recs">';
        recs.forEach(function(rec) {
          html += '<a href="' + rec.url + '" class="rdx-nav-rec">';
          html += '<span class="rdx-nav-rec-icon">' + (rec.module.icon || '\uD83D\uDCDA') + '</span>';
          html += '<div class="rdx-nav-rec-body">';
          html += '<div class="rdx-nav-rec-name">' + rec.module.name + '</div>';
          html += '<div class="rdx-nav-rec-reason">' + rec.reason + '</div>';
          html += '</div>';
          html += '</a>';
        });
        html += '</div>';
      } else {
        html += '<div class="rdx-nav-empty">No specific recommendations right now. Explore any module!</div>';
      }

      // Quick links
      html += '<div class="rdx-nav-quick">';
      html += '<a href="/browse.html" class="rdx-nav-quick-link">Home</a>';
      html += '<a href="/CoachDx/mentor-chat.html" class="rdx-nav-quick-link">CoachDx</a>';
      html += '<a href="/casedx.html" class="rdx-nav-quick-link">Cases</a>';
      html += '<a href="/mechanism/index.html" class="rdx-nav-quick-link">Mechanisms</a>';
      html += '</div>';

      content.innerHTML = html;

      // Fill in AI recommendation when ready
      aiRecPromise.then(function(aiRec) {
        var el = document.getElementById('rdx-nav-ai-rec');
        if (el && aiRec) {
          el.innerHTML = '<div class="rdx-nav-ai-text">' + aiRec + '</div>';
        } else if (el) {
          el.style.display = 'none';
        }
      }).catch(function() {
        var el = document.getElementById('rdx-nav-ai-rec');
        if (el) el.style.display = 'none';
      });

    } catch(e) {
      console.error('Navigator widget error:', e);
      content.innerHTML = '<div class="rdx-nav-empty">Explore <a href="/browse.html">all modules</a> to get started.</div>';
    }
  }

  function detectCurrentModule() {
    var path = window.location.pathname.toLowerCase();
    if (path.includes('mentor-chat') || path.includes('coachdx')) return 'coachdx';
    if (path.includes('casedx') || path.includes('case-browser')) return 'casedx';
    if (path.includes('mechanism')) return 'mechanismdx';
    if (path.includes('virtual-emr') || path.includes('ed-board')) return 'edboard';
    if (path.includes('clinic-board')) return 'clinicboard';
    if (path.includes('rad-study')) return 'radstudy';
    if (path.includes('study-hub')) return 'studyhub';
    if (path.includes('ecg')) return 'ecg';
    if (path.includes('start')) return 'start';
    return null;
  }

  // ── CSS ──
  var NAV_CSS = '\n\
#rdx-nav-fab {\n\
  position: fixed; bottom: 24px; right: 24px; z-index: 9999;\n\
  width: 56px; height: 56px; border-radius: 50%;\n\
  background: linear-gradient(135deg, #1B4F72, #0D7A67);\n\
  border: none; cursor: pointer; font-size: 24px;\n\
  box-shadow: 0 4px 16px rgba(0,0,0,.2);\n\
  transition: transform .2s, box-shadow .2s;\n\
  display: flex; align-items: center; justify-content: center;\n\
}\n\
#rdx-nav-fab:hover { transform: scale(1.1); box-shadow: 0 6px 24px rgba(0,0,0,.3); }\n\
\n\
#rdx-nav-panel {\n\
  position: fixed; bottom: 92px; right: 24px; z-index: 9998;\n\
  width: 360px; max-height: 520px; overflow-y: auto;\n\
  background: #fff; border-radius: 16px;\n\
  box-shadow: 0 12px 48px rgba(0,0,0,.18);\n\
  font-family: "DM Sans", -apple-system, sans-serif;\n\
  transition: opacity .2s, transform .2s;\n\
}\n\
#rdx-nav-panel.rdx-nav-hidden { display: none; }\n\
\n\
.rdx-nav-header {\n\
  display: flex; align-items: center; justify-content: space-between;\n\
  padding: 16px 20px; border-bottom: 1px solid #eee;\n\
}\n\
.rdx-nav-title { font-size: 15px; font-weight: 700; color: #1a1a2e; }\n\
.rdx-nav-close { background: none; border: none; font-size: 16px; cursor: pointer; color: #999; padding: 4px; }\n\
.rdx-nav-content { padding: 16px 20px; }\n\
.rdx-nav-loading { text-align: center; color: #999; font-size: 13px; padding: 20px 0; }\n\
\n\
.rdx-nav-profile {\n\
  background: #f7f9fc; border-radius: 10px; padding: 12px 14px; margin-bottom: 14px;\n\
  font-size: 12px; line-height: 1.6;\n\
}\n\
.rdx-nav-profile-stat { font-weight: 700; color: #1a1a2e; }\n\
.rdx-nav-profile-strengths { color: #27AE60; }\n\
.rdx-nav-profile-gaps { color: #E67E22; }\n\
\n\
.rdx-nav-ai-rec {\n\
  background: linear-gradient(135deg, #EBF5FB, #E8F8F5); border-radius: 10px;\n\
  padding: 14px 16px; margin-bottom: 14px;\n\
}\n\
.rdx-nav-ai-loading { font-size: 12px; color: #999; }\n\
.rdx-nav-ai-text { font-size: 13px; color: #1a1a2e; line-height: 1.6; }\n\
\n\
.rdx-nav-recs { display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px; }\n\
.rdx-nav-rec {\n\
  display: flex; align-items: flex-start; gap: 12px;\n\
  padding: 12px 14px; border-radius: 10px;\n\
  border: 1px solid #eee; text-decoration: none;\n\
  transition: border-color .15s, background .15s;\n\
}\n\
.rdx-nav-rec:hover { border-color: #2874A6; background: #f7f9fc; }\n\
.rdx-nav-rec-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }\n\
.rdx-nav-rec-name { font-size: 13px; font-weight: 700; color: #1a1a2e; }\n\
.rdx-nav-rec-reason { font-size: 12px; color: #666; line-height: 1.5; margin-top: 2px; }\n\
\n\
.rdx-nav-quick {\n\
  display: flex; gap: 6px; flex-wrap: wrap; padding-top: 10px; border-top: 1px solid #eee;\n\
}\n\
.rdx-nav-quick-link {\n\
  font-size: 11px; font-weight: 600; padding: 4px 10px;\n\
  border-radius: 12px; background: #f0f4f8; color: #2874A6;\n\
  text-decoration: none; transition: background .15s;\n\
}\n\
.rdx-nav-quick-link:hover { background: #dbeafe; }\n\
.rdx-nav-empty { font-size: 13px; color: #666; text-align: center; padding: 20px 0; }\n\
.rdx-nav-empty a { color: #2874A6; }\n\
\n\
@media (max-width: 480px) {\n\
  #rdx-nav-panel { width: calc(100vw - 32px); right: 16px; bottom: 84px; }\n\
  #rdx-nav-fab { bottom: 16px; right: 16px; width: 48px; height: 48px; font-size: 20px; }\n\
}\n';

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
