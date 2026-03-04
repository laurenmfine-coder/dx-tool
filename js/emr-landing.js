/* js/emr-landing.js — Virtual EMR Landing / Overview Page
 * Rich visual walkthrough: hero, features, stats, CTA.
 * Replaces the old setting selector cards with a proper product overview.
 * Shows when visiting virtual-emr.html with no ?case or ?setting params.
 */
(function() {
  'use strict';

  // Stats from manifest if available
  function _getStats() {
    var m = window.EMR_MANIFEST || [];
    var total = 0, cats = {};
    m.forEach(function(g) { g.cases.forEach(function(c) { total++; cats[c.category] = (cats[c.category]||0)+1; }); });
    return { cases: total, categories: Object.keys(cats).length, settings: 6, tools: 8 };
  }

  function _esc(s) { if(!s) return ''; var d=document.createElement('div'); d.textContent=s; return d.innerHTML; }

  window.EMRLanding = {
    render: function() {
      var stats = _getStats();
      var html = '';

      // ═══════════════════════════════════════════════════
      // FULL-PAGE LANDING
      // ═══════════════════════════════════════════════════
      html += '<div id="emr-landing" style="font-family:\'DM Sans\',\'IBM Plex Sans\',-apple-system,sans-serif;background:#0B1120;color:#E2E8F0;overflow-x:hidden">';

      // ─── Slim nav bar ───
      html += '<nav style="position:sticky;top:0;z-index:100;background:rgba(11,17,32,.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.06);padding:0 24px;height:52px;display:flex;align-items:center;justify-content:space-between">';
      html += '<div style="display:flex;align-items:center;gap:12px">';
      html += '<img src="icons/logo-white.png" alt="ReasonDx" style="height:20px;width:auto">';
      html += '<span style="width:1px;height:20px;background:rgba(255,255,255,.12)"></span>';
      html += '<span style="font-size:12px;color:#94A3B8;font-weight:500;letter-spacing:.5px;text-transform:uppercase">Virtual EMR</span>';
      html += '</div>';
      html += '<div style="display:flex;gap:6px">';
      html += '<a href="index.html" style="padding:6px 14px;border-radius:6px;font-size:12px;color:#94A3B8;text-decoration:none;font-weight:500">Home</a>';
      html += '<a href="consult-callback.html" style="padding:6px 14px;border-radius:6px;font-size:12px;color:#94A3B8;text-decoration:none;font-weight:500">CRT</a>';
      html += '</div>';
      html += '</nav>';

      // ─── HERO ───
      html += '<section style="position:relative;padding:80px 24px 60px;text-align:center;overflow:hidden">';
      // Subtle gradient mesh background
      html += '<div style="position:absolute;inset:0;background:radial-gradient(ellipse at 30% 20%,rgba(40,116,166,.15) 0%,transparent 50%),radial-gradient(ellipse at 70% 80%,rgba(93,173,226,.08) 0%,transparent 50%);pointer-events:none"></div>';
      // Grid pattern overlay
      html += '<div style="position:absolute;inset:0;opacity:.03;background-image:linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px);background-size:40px 40px;pointer-events:none"></div>';

      html += '<div style="position:relative;max-width:680px;margin:0 auto">';
      // Badge
      html += '<div style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:20px;background:rgba(40,116,166,.15);border:1px solid rgba(40,116,166,.25);margin-bottom:20px;animation:fadeInDown .6s both">';
      html += '<span style="width:6px;height:6px;border-radius:50%;background:#5DADE2;animation:pulse 2s infinite"></span>';
      html += '<span style="font-size:11px;font-weight:600;color:#85C1E9;letter-spacing:.3px">IMMERSIVE CLINICAL TRAINING</span>';
      html += '</div>';

      html += '<h1 style="font-size:clamp(32px,6vw,52px);font-weight:800;line-height:1.1;margin:0 0 16px;letter-spacing:-1.5px;animation:fadeInDown .6s .1s both">';
      html += 'Learn medicine<br><span style="background:linear-gradient(135deg,#5DADE2,#2874A6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">inside the chart</span>';
      html += '</h1>';

      html += '<p style="font-size:clamp(15px,2.5vw,18px);color:#94A3B8;line-height:1.6;max-width:520px;margin:0 auto 32px;animation:fadeInDown .6s .2s both">';
      html += 'A virtual EMR with real patient data, clinical reasoning tools, AI coaching, and documentation practice \u2014 all in one integrated environment.';
      html += '</p>';

      // CTA buttons
      html += '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;animation:fadeInDown .6s .3s both">';
      html += '<button type="button" onclick="EMRLanding._enter()" style="padding:14px 32px;border-radius:10px;background:linear-gradient(135deg,#2874A6,#1B5E8A);color:#fff;font-size:15px;font-weight:700;border:none;cursor:pointer;font-family:inherit;letter-spacing:-.2px;box-shadow:0 4px 20px rgba(40,116,166,.35);transition:all .2s" onmouseover="this.style.transform=\'translateY(-2px)\';this.style.boxShadow=\'0 8px 30px rgba(40,116,166,.45)\'" onmouseout="this.style.transform=\'none\';this.style.boxShadow=\'0 4px 20px rgba(40,116,166,.35)\'">Enter the EMR \u2192</button>';
      html += '<a href="#features" style="padding:14px 24px;border-radius:10px;border:1px solid rgba(255,255,255,.12);color:#94A3B8;font-size:14px;font-weight:500;text-decoration:none;font-family:inherit;transition:all .2s" onmouseover="this.style.borderColor=\'rgba(255,255,255,.25)\';this.style.color=\'#E2E8F0\'" onmouseout="this.style.borderColor=\'rgba(255,255,255,.12)\';this.style.color=\'#94A3B8\'">See what\u2019s inside \u2193</a>';
      html += '</div>';
      html += '</div>';

      // Stats strip
      html += '<div style="display:flex;gap:32px;justify-content:center;margin-top:48px;flex-wrap:wrap;animation:fadeInDown .6s .4s both">';
      var heroStats = [
        { val: stats.cases + '+', label: 'Patient Cases' },
        { val: stats.settings, label: 'Clinical Settings' },
        { val: stats.tools + '+', label: 'Integrated Tools' },
        { val: stats.categories, label: 'Specialties' }
      ];
      heroStats.forEach(function(s) {
        html += '<div style="text-align:center"><div style="font-size:28px;font-weight:800;color:#fff;letter-spacing:-1px">' + s.val + '</div>';
        html += '<div style="font-size:11px;color:#64748B;font-weight:500;text-transform:uppercase;letter-spacing:.5px;margin-top:2px">' + s.label + '</div></div>';
      });
      html += '</div>';
      html += '</section>';

      // ─── FEATURES SECTION ───
      html += '<section id="features" style="padding:64px 24px;background:linear-gradient(180deg,#0B1120 0%,#0F172A 100%)">';
      html += '<div style="max-width:1000px;margin:0 auto">';

      html += '<div style="text-align:center;margin-bottom:48px">';
      html += '<h2 style="font-size:clamp(22px,4vw,32px);font-weight:800;color:#fff;margin:0 0 12px;letter-spacing:-.5px">Everything a student needs, in one chart</h2>';
      html += '<p style="font-size:15px;color:#64748B;max-width:500px;margin:0 auto;line-height:1.5">No more jumping between apps. The Virtual EMR integrates every learning tool directly into the clinical workflow.</p>';
      html += '</div>';

      // Feature cards
      var features = [
        {
          icon: '\uD83D\uDCCB', title: 'Patient Charts',
          desc: 'Full EMR experience with demographics, vitals, labs, imaging, medications, and problem lists. Each case is a real clinical scenario with realistic data.',
          tags: ['113+ Cases', '6 Settings', 'Multi-Encounter'],
          color: '#2874A6'
        },
        {
          icon: '\uD83E\uDDE0', title: 'Clinical Reasoning',
          desc: 'Build differentials, test hypotheses, and refine your diagnostic thinking. DDx Builder, illness scripts, and Bayesian reasoning \u2014 embedded right in the chart.',
          tags: ['DDx Builder', 'CaseFrame', 'Illness Scripts'],
          color: '#6A1B9A'
        },
        {
          icon: '\u270D\uFE0F', title: 'Documentation Practice',
          desc: 'Write H&Ps, progress notes, and discharge summaries in setting-specific templates. Get AI feedback on your clinical writing.',
          tags: ['H&P', 'Progress Notes', 'SOAP', 'Discharge'],
          color: '#2E7D32'
        },
        {
          icon: '\uD83C\uDFAF', title: 'Mission Control',
          desc: 'Guided task checklist for every patient encounter. Know exactly what to do next \u2014 review the chart, build a differential, write orders, document.',
          tags: ['Task Tracking', 'Progress %', 'Guided Flow'],
          color: '#E65100'
        },
        {
          icon: '\uD83E\uDDEC', title: 'MechanismDx',
          desc: 'Interactive pathophysiology modules linked to your patients. Understand the mechanism behind the disease you\u2019re managing.',
          tags: ['6 Modules', 'Pathways', 'Visual Learning'],
          color: '#00838F'
        },
        {
          icon: '\uD83D\uDCAC', title: 'CoachDx',
          desc: 'AI-powered Socratic coaching that asks the right questions. Get real-time guidance without being given the answer.',
          tags: ['Socratic Method', 'Real-Time', 'Adaptive'],
          color: '#AD1457'
        },
        {
          icon: '\uD83D\uDCDE', title: 'Consult & Communication',
          desc: 'Practice consult callbacks, structured handoffs, and clinical presentations. Learn to communicate clearly under pressure.',
          tags: ['Consult Calls', 'SBAR Format', 'Handoffs'],
          color: '#D97706'
        },
        {
          icon: '\uD83D\uDCDA', title: 'Spaced Repetition',
          desc: 'Flashcards auto-generated from your cases. The Study Hub uses spaced repetition to lock in what you\u2019ve learned.',
          tags: ['Auto-Generated', 'SM-2 Algorithm', 'Board Prep'],
          color: '#1565C0'
        }
      ];

      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px">';
      features.forEach(function(f, i) {
        var delay = (i * 0.06).toFixed(2);
        html += '<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:24px;transition:all .25s;animation:fadeInUp .5s ' + delay + 's both" onmouseover="this.style.borderColor=\'' + f.color + '40\';this.style.background=\'rgba(255,255,255,.05)\'" onmouseout="this.style.borderColor=\'rgba(255,255,255,.06)\';this.style.background=\'rgba(255,255,255,.03)\'">';
        html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">';
        html += '<span style="font-size:24px">' + f.icon + '</span>';
        html += '<h3 style="font-size:16px;font-weight:700;color:#fff;margin:0">' + f.title + '</h3>';
        html += '</div>';
        html += '<p style="font-size:13px;color:#94A3B8;line-height:1.55;margin:0 0 12px">' + f.desc + '</p>';
        html += '<div style="display:flex;gap:5px;flex-wrap:wrap">';
        f.tags.forEach(function(t) {
          html += '<span style="padding:3px 8px;border-radius:6px;font-size:10px;font-weight:600;background:' + f.color + '18;color:' + f.color + ';border:1px solid ' + f.color + '25">' + t + '</span>';
        });
        html += '</div></div>';
      });
      html += '</div>';
      html += '</div></section>';

      // ─── SETTINGS SECTION ───
      html += '<section style="padding:64px 24px;background:#0F172A;border-top:1px solid rgba(255,255,255,.04)">';
      html += '<div style="max-width:900px;margin:0 auto;text-align:center">';
      html += '<h2 style="font-size:clamp(20px,4vw,28px);font-weight:800;color:#fff;margin:0 0 8px">Six clinical settings, one EMR</h2>';
      html += '<p style="font-size:14px;color:#64748B;margin:0 0 32px">Every chart, template, and workflow adapts to where you\u2019re working.</p>';

      var settings = [
        { id: 'ed', icon: '\uD83D\uDEA8', label: 'Emergency Department', desc: 'Diagnose, stabilize, dispo', color: '#C62828' },
        { id: 'inpatient', icon: '\uD83C\uDFE5', label: 'Inpatient Floor', desc: 'Admit, refine, manage', color: '#1565C0' },
        { id: 'icu', icon: '\uD83D\uDC93', label: 'ICU', desc: 'Critical care, hour-by-hour', color: '#AD1457' },
        { id: 'consult', icon: '\uD83D\uDCCB', label: 'Inpatient Consult', desc: 'Answer the clinical question', color: '#6A1B9A' },
        { id: 'clinic', icon: '\uD83E\uDE7A', label: 'Outpatient Clinic', desc: 'Longitudinal, preventive', color: '#2E7D32' },
        { id: 'post-discharge', icon: '\uD83D\uDD04', label: 'Post-Discharge', desc: 'Transitions of care', color: '#00838F' }
      ];

      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;margin-bottom:40px">';
      settings.forEach(function(s) {
        html += '<button type="button" onclick="EMRLanding._enterSetting(\'' + s.id + '\')" style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:20px 12px;border-radius:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);cursor:pointer;transition:all .2s;font-family:inherit" onmouseover="this.style.borderColor=\'' + s.color + '60\';this.style.background=\'' + s.color + '10\'" onmouseout="this.style.borderColor=\'rgba(255,255,255,.06)\';this.style.background=\'rgba(255,255,255,.03)\'">';
        html += '<span style="font-size:28px">' + s.icon + '</span>';
        html += '<span style="font-size:13px;font-weight:700;color:#fff">' + _esc(s.label) + '</span>';
        html += '<span style="font-size:11px;color:#64748B">' + _esc(s.desc) + '</span>';
        html += '</button>';
      });
      html += '</div>';

      // Big CTA
      html += '<button type="button" onclick="EMRLanding._enter()" style="padding:16px 40px;border-radius:12px;background:linear-gradient(135deg,#2874A6,#1B5E8A);color:#fff;font-size:16px;font-weight:700;border:none;cursor:pointer;font-family:inherit;letter-spacing:-.3px;box-shadow:0 4px 24px rgba(40,116,166,.35);transition:all .2s" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'none\'">Enter the EMR \u2192</button>';

      html += '</div></section>';

      // ─── FOOTER ───
      html += '<footer style="padding:24px;text-align:center;background:#0B1120;border-top:1px solid rgba(255,255,255,.04)">';
      html += '<p style="font-size:12px;color:#475569;margin:0"><img src="icons/logo-white.png" alt="ReasonDx" style="height:14px;width:auto;vertical-align:middle;margin-right:4px"> \u00B7 Clinical Education Platform \u00B7 NSU Dr. Kiran C. Patel College of Allopathic Medicine</p>';
      html += '</footer>';

      // ─── FONT + ANIMATIONS ───
      html += '<style>';
      html += '@keyframes fadeInDown{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:none}}';
      html += '@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}';
      html += '@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}';
      html += 'html{scroll-behavior:smooth}';
      html += '</style>';

      // Inject Google Fonts link if not already present
      if (!document.getElementById('rdx-dm-sans-font')) {
        var link = document.createElement('link');
        link.id = 'rdx-dm-sans-font';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap';
        document.head.appendChild(link);
      }

      html += '</div>';
      return html;
    },

    _enter: function() {
      // Go to EMR with default setting (floor) or last used
      var last = null;
      try { last = sessionStorage.getItem('rdx-last-setting'); } catch(e) {}
      var setting = last || 'ed';
      window.location.href = 'virtual-emr.html?setting=' + setting;
    },

    _enterSetting: function(id) {
      try { sessionStorage.setItem('rdx-last-setting', id); } catch(e) {}
      window.location.href = 'virtual-emr.html?setting=' + id;
    }
  };
})();
