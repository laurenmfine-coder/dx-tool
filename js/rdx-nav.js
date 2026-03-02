/* rdx-nav.js — Unified ReasonDx Navigation v3 — Dropdowns, CoachDx, no theme dots */
(function() {
  'use strict';
  if (document.getElementById('rdx-unified-nav')) return;
  var path = window.location.pathname;
  var inSubdir = /\/(topics|modules|cases|tools|ecg|CoachDx|auth|data|mechanism|ReasonDx)\//i.test(path);
  var R = inSubdir ? '../' : './';
  var sec = 'home';
  if (/\/modules\/premed-|premed-hub/i.test(path)) sec = 'premed';
  else if (/\/modules\/raddx-|raddx-hub/i.test(path)) sec = 'raddx';
  else if (/\/modules\/|\/topics\/|\/mechanism\//i.test(path)) sec = 'learn';
  else if (/\/cases\/|training|adventure|consult-callback|\/CoachDx\//i.test(path)) sec = 'practice';
  else if (/hospital-3d|ed-3d|night-float|admissions|simroomdx|virtual-hospital/i.test(path)) sec = 'simulate';
  else if (/\/tools\/|\/ecg\//i.test(path)) sec = 'tools';
  var saved = 'light';
  document.documentElement.setAttribute('data-theme', 'light');

  function di(href, icon, title, desc) {
    return '<a href="'+href+'" class="rdx-dd-item"><span class="rdx-dd-icon">'+icon+'</span><div><strong>'+title+'</strong>'+(desc?'<small>'+desc+'</small>':'')+'</div></a>';
  }
  function dd(label, active, items) {
    return '<div class="rdx-dd"><button class="rdx-nav-top'+(active?' active':'')+'" aria-haspopup="true">'+label+' <svg width="10" height="6" viewBox="0 0 10 6" style="margin-left:3px;vertical-align:middle"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg></button><div class="rdx-dd-panel">'+items+'</div></div>';
  }

  var html =
    '<a href="'+R+'index.html" class="rdx-logo-link"><span class="rdx-logo-text">Reason<span class="rdx-logo-dx">Dx</span></span></a>'+
    '<button id="rdx-hamburger" aria-label="Menu">\u2630</button>'+
    '<div id="rdx-nav-menu">'+
      '<a href="'+R+'index.html" class="rdx-nav-top'+(sec==='home'?' active':'')+'">Home</a>'+
      '<a href="'+R+'case-browser.html" class="rdx-nav-top rdx-hub-link'+((/case-browser/i.test(path))?' active':'')+'">Platform Hub</a>'+
      dd('Learn', sec==='learn'||sec==='raddx'||sec==='premed',
        di(R+'study-mode.html','','Study Mode','316 clinical topics across all specialties')+
                        di(R+'allergy-pathway.html','','A/I Pathway','Allergy & Immunology — all cases & settings')
      )+
      dd('Practice', sec==='practice',
        di(R+'case-browser.html','','Platform Hub','Choose setting, pick your tool')+
        di(R+'crt-hub.html','','Clinical Reasoning Trainer','Step-by-step CRTs')+
        di(R+'CoachDx/index.html','','CoachDx','AI clinical coaching')+
        di(R+'consult-callback.html','','Consult Callback','Practice consult calls')
      )+
      dd('Simulate', sec==='simulate',
        di(R+'hospital-3d.html','','Virtual Hospital','3D walkthrough — all departments')+
        di(R+'ed-3d.html','','Emergency Department','8 patient rooms with full encounters')+
        di(R+'night-float.html','','Night Float','Overnight cross-cover with I-PASS')+
        di(R+'admissions.html','','Admissions','ED handoff, orders, H&P, presentation')+
        di(R+'simroomdx.html','','SimRoomDx','Morning rounds — 6 AI characters')
      )+
      dd('Tools', sec==='tools',
        di(R+'tools/index.html','','All Tools','Calculators & references')+
        di(R+'ecg/ecg-generator.html','','ECG Practice','Rhythm interpretation')+
        di(R+'analytics-dashboard.html','','Dashboard','Track your progress')
      )+
      '<div class="rdx-nav-right">'+
        '<button id="rdx-info-btn" class="rdx-nav-btn" title="About">\u2139\uFE0F</button>'+
        '<button id="rdx-theme-toggle" class="rdx-nav-btn">'+(saved==='dark'?'':'')+'</button>'+
        '<button id="rdx-logout-btn" class="rdx-nav-btn rdx-logout">Log out</button>'+
      '</div>'+
    '</div>';

  var style = document.createElement('style');
  style.textContent =
    '#rdx-unified-nav{background:var(--rdx-bg-nav,#fff);border-bottom:1px solid var(--rdx-border,#e2e8f0);padding:0 20px;height:56px;display:flex;align-items:center;position:sticky;top:0;z-index:9000;font-family:"IBM Plex Sans",-apple-system,BlinkMacSystemFont,sans-serif;box-shadow:0 1px 3px rgba(0,0,0,.04)}'+
    ''+
    '.rdx-logo-link{text-decoration:none;flex-shrink:0;margin-right:24px}'+
    '.rdx-logo-text{font-family:'IBM Plex Sans',-apple-system,sans-serif;font-size:22px;font-weight:700;color:#2f3640;letter-spacing:-.5px}'+
    '.rdx-logo-dx{border-bottom:2.5px solid #2874a6;padding-bottom:1px}'+
    ''+
    '#rdx-nav-menu{display:flex;align-items:center;gap:2px;margin-left:auto}'+
    '.rdx-nav-top{background:none;border:none;font-family:inherit;font-size:14px;font-weight:500;color:var(--rdx-text-muted,#64748b);padding:8px 14px;border-radius:8px;cursor:pointer;white-space:nowrap;transition:all .15s;display:inline-flex;align-items:center}'+
    '.rdx-nav-top:hover{color:#1f5f8b;background:#f0f7fc}.rdx-nav-top.active{color:#1f5f8b;font-weight:600;background:#f0f7fc}'+
    '.rdx-hub-link{color:#2874a6;font-weight:600}.rdx-hub-link:hover{background:#ebf5fb}'+
    'a.rdx-nav-top{text-decoration:none}'+
    ''+
    '.rdx-dd{position:relative}'+
    '.rdx-dd-panel{display:none;position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%);background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.1);padding:8px;min-width:265px;z-index:9100;animation:rdxDdIn .15s ease}'+
    '.rdx-dd:hover .rdx-dd-panel,.rdx-dd-panel:hover{display:block}'+
    ''+
    '@keyframes rdxDdIn{from{opacity:0;transform:translateX(-50%) translateY(-4px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}'+
    '.rdx-dd-item{display:flex;align-items:flex-start;gap:12px;padding:10px 14px;border-radius:8px;text-decoration:none;color:var(--rdx-text,#1e293b);transition:background .12s}'+
    '.rdx-dd-item:hover{background:#f0f7fc}'+
    '.rdx-dd-icon:empty{display:none}.rdx-dd-icon{font-size:18px;line-height:1;flex-shrink:0;margin-top:2px}'+
    '.rdx-dd-item strong{font-size:13px;font-weight:600;display:block;color:var(--rdx-text,#1e293b)}'+
    '.rdx-dd-item small{font-size:11px;color:var(--rdx-text-muted,#64748b);display:block;margin-top:1px}'+
    ''+
    '.rdx-nav-right{display:flex;align-items:center;gap:6px;margin-left:12px;padding-left:12px;border-left:1px solid var(--rdx-border,#e2e8f0)}'+
    '.rdx-nav-btn{background:none;border:none;border-radius:8px;padding:6px 8px;cursor:pointer;font-size:15px;line-height:1;color:var(--rdx-text-muted,#64748b);transition:all .15s}'+
    '.rdx-nav-btn:hover{background:#f0f7fc}'+
    '.rdx-logout{font-size:12px;font-family:inherit;padding:6px 12px;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px}'+
    '.rdx-logout:hover{border-color:#2874a6;color:#1f5f8b}'+
    ''+
    ''+
    '#rdx-hamburger{display:none;background:none;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:8px 10px;cursor:pointer;font-size:18px;color:var(--rdx-text-muted,#475569);margin-left:auto}'+
    '#rdx-about-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:10000;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px)}'+
    '#rdx-about-overlay.open{display:flex}'+
    '#rdx-about-modal{background:var(--rdx-bg-card,#fff);border-radius:20px;max-width:560px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 25px 60px rgba(0,0,0,.3);animation:rdxModalIn .2s ease}'+
    '@keyframes rdxModalIn{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}'+
    '.rdx-about-hdr{background:linear-gradient(135deg,#1f5f8b,#2874a6);padding:28px;border-radius:20px 20px 0 0;color:#fff;position:relative}'+
    '.rdx-about-hdr h2{margin:0 0 6px;font-size:22px;font-weight:700;font-family:Georgia,serif}.rdx-about-hdr p{margin:0;opacity:.9;font-size:14px}'+
    '.rdx-about-body{padding:24px 28px 28px;font-size:14px;line-height:1.7;color:var(--rdx-text-secondary,#475569)}'+
    '.rdx-about-body h3{font-size:15px;font-weight:700;color:var(--rdx-text,#1e293b);margin:20px 0 8px}.rdx-about-body h3:first-child{margin-top:0}'+
    '.rdx-about-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:12px 0}'+
    '.rdx-about-stat{background:#f0f7fc;border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:12px;text-align:center}'+
    '.rdx-about-stat .num{font-size:22px;font-weight:700;color:#1f5f8b}.rdx-about-stat .lbl{font-size:12px;color:var(--rdx-text-muted,#64748b)}'+
    '.rdx-about-close{position:absolute;top:16px;right:16px;background:rgba(255,255,255,.2);border:none;border-radius:8px;width:32px;height:32px;font-size:18px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center}'+
    '.rdx-about-tracks{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}'+
    '.rdx-about-pill{padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;border:1px solid var(--rdx-border,#e2e8f0);background:var(--rdx-bg-card,#fff);color:var(--rdx-text-secondary,#475569)}'+
    '@media(max-width:768px){'+
      '#rdx-hamburger{display:block!important}'+
      '#rdx-nav-menu{display:none!important;flex-direction:column;width:100%;gap:0;padding:8px 0 12px;border-top:1px solid var(--rdx-border,#e2e8f0)}'+
      '#rdx-nav-menu.open{display:flex!important}'+
      '#rdx-unified-nav{flex-wrap:wrap;height:auto;min-height:52px;padding:0 16px}'+
      '.rdx-dd{width:100%}.rdx-nav-top{width:100%;justify-content:space-between;padding:12px 16px;border-radius:12px;font-size:15px}'+
      'a.rdx-nav-top{display:flex;width:100%;padding:12px 16px;border-radius:12px;font-size:15px}'+
      '.rdx-dd-panel{position:static;transform:none;box-shadow:none;border:none;padding:0 0 0 16px;min-width:auto;display:none;animation:none}'+
      '.rdx-dd.open .rdx-dd-panel{display:block}'+
      '.rdx-nav-right{width:100%;justify-content:flex-end;margin-left:0;padding-left:0;padding-top:8px;border-left:none;border-top:1px solid var(--rdx-border,#e2e8f0)}'+
    '}';
  document.head.appendChild(style);

  var nav = document.createElement('nav');
  nav.id = 'rdx-unified-nav';
  nav.setAttribute('role','navigation');
  nav.innerHTML = html;

  function removeOldNavs() {
    ['nav.nav:not(#rdx-unified-nav)','nav.dx-nav','nav.rdx-nav:not(#rdx-unified-nav)','.dx-universal-nav'].forEach(function(s){
      document.querySelectorAll(s).forEach(function(el){el.remove()});
    });
  }

  function insert() {
    removeOldNavs();
    if (document.body.firstChild) document.body.insertBefore(nav, document.body.firstChild);
    else document.body.appendChild(nav);

    document.getElementById('rdx-hamburger').addEventListener('click', function(){
      document.getElementById('rdx-nav-menu').classList.toggle('open');
    });
    // Mobile: click to toggle dropdowns
    if (window.innerWidth <= 768) {
      nav.querySelectorAll('.rdx-dd > .rdx-nav-top').forEach(function(btn){
        btn.setAttribute('aria-expanded','false');
        btn.addEventListener('click', function(e){ e.preventDefault(); var p=this.parentElement; p.classList.toggle('open'); this.setAttribute('aria-expanded',p.classList.contains('open')?'true':'false'); });
      });
    }




      this.textContent = next === 'dark' ? '' : '';
    });
    document.getElementById('rdx-logout-btn').addEventListener('click', function(){
      localStorage.removeItem('reasondx-user');localStorage.removeItem('reasondx_student_code');localStorage.removeItem('rdx-progress');sessionStorage.clear();
      window.location.href = R + 'auth/register.html';
    });
    // About modal
    var ov = document.createElement('div'); ov.id = 'rdx-about-overlay';
    ov.innerHTML = '<div id="rdx-about-modal"><div class="rdx-about-hdr"><button class="rdx-about-close" id="rdx-about-x">\u00D7</button><h2>ReasonDx</h2><p>Clinical Reasoning Education Platform</p></div><div class="rdx-about-body"><h3>What is ReasonDx?</h3><p>A case-based clinical reasoning platform with interactive cases, pathophysiology modules, and AI coaching to build systematic diagnostic thinking.</p><div class="rdx-about-grid"><div class="rdx-about-stat"><div class="num">316</div><div class="lbl">Topics</div></div><div class="rdx-about-stat"><div class="num">256</div><div class="lbl">Cases</div></div><div class="rdx-about-stat"><div class="num">79</div><div class="lbl">CRTs</div></div><div class="rdx-about-stat"><div class="num">28</div><div class="lbl">Specialties</div></div></div><h3>Platform</h3><p><strong>MechanismDx</strong> \u2014 Pathophysiology modules<br><strong>CoachDx</strong> \u2014 AI clinical coaching<br><strong>RadDx</strong> \u2014 Imaging reasoning<br><strong>Clerkship Hub</strong> \u2014 ED Board, Night Float, SimRoomDx</p><h3>Tracks</h3><div class="rdx-about-tracks"><span class="rdx-about-pill">\uD83E\uDE7A Premed</span><span class="rdx-about-pill">\uD83D\uDCDA Pathophysiology</span><span class="rdx-about-pill">\uD83D\uDCDD Shelf Exams</span><span class="rdx-about-pill">\uD83C\uDFAF Step 2 / COMLEX</span></div><p style="margin-top:16px;padding-top:14px;border-top:1px solid var(--rdx-border,#e2e8f0);font-size:12px;color:var(--rdx-text-muted,#94a3b8);text-align:center">\u00A9 2025\u20132026 ReasonDx \u00B7 <a href="mailto:reasondx@laurenmfine.com" style="color:#2874a6">reasondx@laurenmfine.com</a></p></div></div>';
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e){ if (e.target === ov) ov.classList.remove('open'); });
    document.getElementById('rdx-about-x').addEventListener('click', function(){ ov.classList.remove('open'); });
    document.getElementById('rdx-info-btn').addEventListener('click', function(){ ov.classList.toggle('open'); });

    // ─── Auto-load breadcrumb ───
    var bcSrc = document.querySelector('script[src*="rdx-nav"]');
    if (bcSrc) {
      var bcPath = bcSrc.src.replace('rdx-nav', 'rdx-breadcrumb');
      var bc = document.createElement('script'); bc.src = bcPath; document.head.appendChild(bc);
    }
  }

  if (document.body) insert();
  else document.addEventListener('DOMContentLoaded', insert);
})();
