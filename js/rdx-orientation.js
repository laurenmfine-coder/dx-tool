/* js/rdx-orientation.js — Learner Orientation for Clinical Continuity
 * Shows a one-time (dismissible) orientation explaining:
 * 1. Shared patient universe — same patients appear across settings
 * 2. Dynamic dates — chart dates are always relative to today
 * 3. Cross-setting continuity — charts accumulate encounter history
 *
 * Usage:
 *   ClinicalOrientation.show()     → shows modal if not previously dismissed
 *   ClinicalOrientation.forceShow() → always shows modal
 *   ClinicalOrientation.reset()    → clears dismissed state
 */
(function() {
  'use strict';

  var PREF_KEY = 'rdx-orientation-seen';
  var DE = null; // DateEngine reference, loaded lazily

  function _wasSeen() {
    try { return localStorage.getItem(PREF_KEY) === 'true'; } catch(e) { return false; }
  }

  function _markSeen() {
    try { localStorage.setItem(PREF_KEY, 'true'); } catch(e) {}
  }

  function _getDE() {
    if (!DE && window.DateEngine) DE = window.DateEngine;
    return DE;
  }

  function _buildModal() {
    var de = _getDE();
    var todayStr = de ? de.today('narrative') : 'Today';

    var html = '';
    html += '<div id="rdx-orient-overlay" class="rdx-orient-overlay">';
    html += '<div class="rdx-orient-modal">';

    // Header
    html += '<div class="rdx-orient-hdr">';
    html += '<div class="rdx-orient-badge">\uD83C\uDFE5</div>';
    html += '<h2>Welcome to Your Clinical Shift</h2>';
    html += '<p>' + todayStr + '</p>';
    html += '</div>';

    // Content
    html += '<div class="rdx-orient-body">';

    // Concept 1: Shared Patient Universe
    html += '<div class="rdx-orient-concept">';
    html += '<div class="rdx-orient-icon">\uD83D\uDC65</div>';
    html += '<div>';
    html += '<h3>Shared Patient Universe</h3>';
    html += '<p>Some patients appear <strong>across multiple clinical settings</strong> with connected encounter histories. A patient you see in clinic for routine follow-up might later present to the ED with an acute decompensation. When this happens, their chart includes notes from the prior visit \u2014 just like a real EMR. Other patients are <strong>setting-specific</strong>, meaning they exist only within one department. You\u2019ll know a patient has cross-setting history when you see the \u201CPrior Encounters\u201D section in their chart.</p>';
    html += '</div>';
    html += '</div>';

    // Concept 2: Dynamic Dates
    html += '<div class="rdx-orient-concept">';
    html += '<div class="rdx-orient-icon">\uD83D\uDCC5</div>';
    html += '<div>';
    html += '<h3>Dynamic Chart Dates</h3>';
    html += '<p>All dates in the chart are <strong>relative to today\u2019s actual date</strong>. A clinic visit that happened \u201C3 weeks ago\u201D will always show the correct calendar date. This keeps cases current and realistic \u2014 you\u2019ll never see outdated timestamps.</p>';
    html += '</div>';
    html += '</div>';

    // Concept 3: Encounter History
    html += '<div class="rdx-orient-concept">';
    html += '<div class="rdx-orient-icon">\uD83D\uDCC1</div>';
    html += '<div>';
    html += '<h3>Cumulative Encounter History</h3>';
    html += '<p>When a patient has prior visits, their chart includes <strong>historical notes from previous encounters</strong>. Just like a real EMR, you\u2019ll review prior clinic notes, lab trends, and previous assessments to inform your current clinical decisions. Look for the \u201CPrior Encounters\u201D section in the chart.</p>';
    html += '</div>';
    html += '</div>';

    // Concept 4: Spoiler-free
    html += '<div class="rdx-orient-concept">';
    html += '<div class="rdx-orient-icon">\uD83E\uDDE0</div>';
    html += '<div>';
    html += '<h3>Your Job: Reason Through It</h3>';
    html += '<p>Diagnoses are <strong>hidden by default</strong>. You\u2019ll see the chief complaint, vitals, and history \u2014 but the diagnosis is yours to figure out. Review the chart, build your differential, order the workup, and arrive at the answer through your own clinical reasoning.</p>';
    html += '</div>';
    html += '</div>';

    html += '</div>'; // body

    // Example timeline
    html += '<div class="rdx-orient-example">';
    html += '<div class="rdx-orient-example-title">\uD83D\uDD0D Example: Patient Seen Across Settings</div>';
    html += '<div class="rdx-orient-timeline">';
    if (de) {
      html += '<div class="rdx-orient-tl-item"><span class="rdx-orient-tl-dot" style="background:#22C55E"></span><span class="rdx-orient-tl-date">' + de.daysAgo(21, 'short') + '</span><span class="rdx-orient-tl-text">Cardiology Clinic \u2014 Routine follow-up, medication adjustment</span></div>';
      html += '<div class="rdx-orient-tl-item"><span class="rdx-orient-tl-dot" style="background:#F59E0B"></span><span class="rdx-orient-tl-date">' + de.daysAgo(7, 'short') + '</span><span class="rdx-orient-tl-text">Urgent Nurse Visit \u2014 Weight gain, increased diuretic</span></div>';
      html += '<div class="rdx-orient-tl-item"><span class="rdx-orient-tl-dot" style="background:#DC2626"></span><span class="rdx-orient-tl-date">' + de.today('short') + '</span><span class="rdx-orient-tl-text">ED Presentation \u2014 Acute decompensation <em>(your encounter)</em></span></div>';
    } else {
      html += '<div class="rdx-orient-tl-item"><span class="rdx-orient-tl-dot" style="background:#22C55E"></span><span class="rdx-orient-tl-text">Cardiology Clinic \u2014 Routine follow-up</span></div>';
      html += '<div class="rdx-orient-tl-item"><span class="rdx-orient-tl-dot" style="background:#F59E0B"></span><span class="rdx-orient-tl-text">Urgent Visit \u2014 Worsening symptoms</span></div>';
      html += '<div class="rdx-orient-tl-item"><span class="rdx-orient-tl-dot" style="background:#DC2626"></span><span class="rdx-orient-tl-text">ED Presentation \u2014 Your encounter</span></div>';
    }
    html += '</div>';
    html += '</div>';

    // Footer
    html += '<div class="rdx-orient-footer">';
    html += '<label class="rdx-orient-check"><input type="checkbox" id="rdx-orient-dismiss" checked> Don\u2019t show this again</label>';
    html += '<button type="button" class="rdx-orient-btn" onclick="ClinicalOrientation._close()">Start My Shift \u2192</button>';
    html += '</div>';

    html += '</div>'; // modal
    html += '</div>'; // overlay

    // Styles
    html += '<style>';
    html += '.rdx-orient-overlay{position:fixed;inset:0;z-index:10000;background:rgba(15,23,42,.7);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:20px;animation:rdxOrientFadeIn .3s ease}';
    html += '@keyframes rdxOrientFadeIn{from{opacity:0}to{opacity:1}}';
    html += '.rdx-orient-modal{background:#fff;border-radius:16px;max-width:600px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 25px 50px rgba(0,0,0,.25);animation:rdxOrientSlideUp .4s ease}';
    html += '@keyframes rdxOrientSlideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}';
    html += '.rdx-orient-hdr{background:linear-gradient(135deg,#1A2332,#2874A6);padding:28px 24px;text-align:center;color:#fff;border-radius:16px 16px 0 0}';
    html += '.rdx-orient-badge{font-size:36px;margin-bottom:8px}';
    html += '.rdx-orient-hdr h2{font-size:20px;font-weight:800;margin:0 0 4px;letter-spacing:-.3px}';
    html += '.rdx-orient-hdr p{font-size:13px;color:#93C5FD;margin:0;font-family:"IBM Plex Mono",monospace}';
    html += '.rdx-orient-body{padding:24px}';
    html += '.rdx-orient-concept{display:flex;gap:14px;margin-bottom:20px}';
    html += '.rdx-orient-concept:last-child{margin-bottom:0}';
    html += '.rdx-orient-icon{font-size:24px;flex-shrink:0;width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:#F0F4F8;border-radius:10px}';
    html += '.rdx-orient-concept h3{font-size:14px;font-weight:700;color:#1E293B;margin:0 0 4px}';
    html += '.rdx-orient-concept p{font-size:13px;color:#475569;line-height:1.6;margin:0}';
    html += '.rdx-orient-example{margin:0 24px 20px;padding:16px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px}';
    html += '.rdx-orient-example-title{font-size:12px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px}';
    html += '.rdx-orient-timeline{display:flex;flex-direction:column;gap:10px}';
    html += '.rdx-orient-tl-item{display:flex;align-items:center;gap:10px;font-size:12px;color:#334155}';
    html += '.rdx-orient-tl-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}';
    html += '.rdx-orient-tl-date{font-family:"IBM Plex Mono",monospace;font-weight:600;color:#1E293B;min-width:55px}';
    html += '.rdx-orient-tl-text{line-height:1.4}';
    html += '.rdx-orient-footer{padding:16px 24px;border-top:1px solid #E2E8F0;display:flex;align-items:center;justify-content:space-between;gap:12px}';
    html += '.rdx-orient-check{font-size:12px;color:#64748B;display:flex;align-items:center;gap:6px;cursor:pointer}';
    html += '.rdx-orient-check input{cursor:pointer}';
    html += '.rdx-orient-btn{padding:10px 24px;border:none;border-radius:8px;background:#2874A6;color:#fff;font-size:14px;font-weight:700;cursor:pointer;transition:background .15s;font-family:inherit}';
    html += '.rdx-orient-btn:hover{background:#1B4F72}';
    html += '@media(max-width:500px){.rdx-orient-modal{max-height:95vh}.rdx-orient-body{padding:16px}.rdx-orient-concept{flex-direction:column;gap:8px}.rdx-orient-icon{width:auto;height:auto;background:none;justify-content:flex-start}}';
    html += '</style>';

    return html;
  }

  window.ClinicalOrientation = {
    show: function() {
      if (_wasSeen()) return;
      ClinicalOrientation.forceShow();
    },

    forceShow: function() {
      // Remove existing if any
      var existing = document.getElementById('rdx-orient-overlay');
      if (existing) existing.remove();
      // Insert
      var container = document.createElement('div');
      container.innerHTML = _buildModal();
      document.body.appendChild(container.firstChild);
      // Transfer style tag too
      var style = container.querySelector('style');
      if (style) document.body.appendChild(style);
    },

    _close: function() {
      var checkbox = document.getElementById('rdx-orient-dismiss');
      if (checkbox && checkbox.checked) {
        _markSeen();
      }
      var overlay = document.getElementById('rdx-orient-overlay');
      if (overlay) {
        overlay.style.transition = 'opacity .2s';
        overlay.style.opacity = '0';
        setTimeout(function() { overlay.remove(); }, 200);
      }
    },

    reset: function() {
      try { localStorage.removeItem(PREF_KEY); } catch(e) {}
    }
  };

})();
