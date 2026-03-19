/* rdx-nav.js — ReasonDx Navigation v6 — 3-Pillar Architecture */
(function() {
  'use strict';
  if (document.getElementById('rdx-unified-nav')) return;
  var path = window.location.pathname;
  var inSubdir = /\/(topics|modules|cases|tools|ecg|CoachDx|auth|data|mechanism|ReasonDx)\//i.test(path);
  var R = inSubdir ? '../' : './';
  window.R = R;

  var sec = 'home';
  if (/casedx|case-browser|virtual-emr|ed-3d|ed-trackboard|night-float|admissions|simroomdx|hospital-3d|training|setting-selector|choose-mode|crt-hub|consult-callback|counseling-scenarios|procedure-lab|board-prep/i.test(path)) sec = 'casedx';
  else if (/CoachDx|coachdx|mentor-chat|ai-trainer/i.test(path)) sec = 'coachdx';
  else if (/pathway|allergy-pathway|\/modules\/|\/topics\/|\/mechanism\/|study-mode/i.test(path)) sec = 'mechanismdx';
  else if (/dashboard|analytics|milestone|cohort|learning-analytics|ilp/i.test(path)) sec = 'analytics';

  document.documentElement.setAttribute('data-theme','light');

  function di(href,icon,title,desc){return '<a href="'+href+'" class="rdx-dd-item"><span class="rdx-dd-icon">'+icon+'</span><div><strong>'+title+'</strong>'+(desc?'<small>'+desc+'</small>':'')+'</div></a>';}
  function dd(label,active,color,items){return '<div class="rdx-dd"><button class="rdx-nav-top rdx-pillar-btn'+(active?' active':'')+'" style="'+(active?'color:'+color+';background:'+color+'18':'')+'" aria-haspopup="true">'+label+' <svg width="10" height="6" viewBox="0 0 10 6" style="margin-left:3px;vertical-align:middle"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg></button><div class="rdx-dd-panel"><div class="rdx-dd-panel-inner">'+items+'</div></div></div>';}
  function sl(t){return '<div class="rdx-dd-sl">'+t+'</div>';}
  function hr(){return '<div class="rdx-dd-hr"></div>';}

  var html =
    '<a href="'+R+'index.html" class="rdx-logo-link"><img src="'+R+'icons/logo-transparent.png" alt="ReasonDx" class="rdx-logo-img" onerror="this.style.display=\'none\'"></a>'+
    '<button id="rdx-hamburger" aria-label="Menu">&#9776;</button>'+
    '<div id="rdx-nav-menu">'+
    dd('🩺 CaseDx',sec==='casedx','#C0392B',
      sl('Case Library')+
      di(R+'casedx.html','📋','Browse All Cases','145 cases · 23 specialties')+
      di(R+'virtual-emr.html?setting=ed','🚨','Emergency Dept','Full EMR + AI coaching')+
      di(R+'virtual-emr.html?setting=inpatient','🏥','Inpatient','Rounds, cross-cover, admissions')+
      di(R+'virtual-emr.html?setting=clinic','🩺','Outpatient Clinic','Primary care & specialty visits')+
      hr()+sl('Immersive Simulations')+
      di(R+'ed-3d.html','⚡','ED Track Board','8-room board with real-time arrivals')+
      di(R+'night-float.html','🌙','Night Float','Overnight cross-cover with I-PASS')+
      di(R+'simroomdx.html','🎤','Morning Rounds','Present to the AI attending')+
      hr()+sl('Clinical Skills')+
      
      di(R+'procedure-lab.html','🔬','Procedure Lab','Skin testing, OFC, spirometry')+
      di(R+'counseling-scenarios.html','💬','Patient Counseling','Communication practice')
    )+
    dd('🧑‍⚕️ CoachDx',sec==='coachdx','#6D28D9',
      sl('Start a Session')+
      di(R+'CoachDx/index.html','✨','Open CoachDx','Free-form AI coaching — any topic')+
      di(R+'CoachDx/mentor-chat.html','💬','Mentor Chat','Ongoing coaching conversation')+
      di(R+'demo-coachdx.html','▶','Watch Demo','See CoachDx in action — no login')+
      hr()+sl('Specialty Coaching')+
      
    )+
    dd('🧬 MechanismDx',sec==='mechanismdx','#0E7490',
      sl('Explore')+
      di(R+'pathway.html','🧬','Pathophysiology Hub','670 topics · 93 systems')+
      di(R+'allergy-pathway.html','🌿','A/I Pathway','Allergy & Immunology curriculum')+
      
      hr()+sl('Deep Dives')+
      di(R+'mechanism/anaphylaxis-module.html','⚡','Anaphylaxis','Full mechanism module')+
      di(R+'mechanism/asthma-module.html','💨','Asthma','Pathophysiology + clinical links')+
      )+
    '<div class="rdx-dd">'+
      '<button class="rdx-nav-top" aria-haspopup="true" style="font-size:12px">Tools <svg width="10" height="6" viewBox="0 0 10 6" style="margin-left:3px;vertical-align:middle"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg></button>'+
      '<div class="rdx-dd-panel"><div class="rdx-dd-panel-inner">'+
        di(R+'tools/calculator-hub.html','🔢','Calculators','GCS, Wells, CURB-65, CHADS-VASc')+
        di(R+'ecg/index.html','❤️','ECG Trainer','12-lead interpretation')+
        di(R+'tools/abg-analyzer.html','🫁','ABG Analyzer','Blood gas interpretation')+
        di(R+'tools/ddx-builder.html','🔍','DDx Builder','Differential diagnosis tool')+
      '</div></div>'+
    '</div>'+
    '<div class="rdx-nav-right">'+
      '<button id="rdx-exp-toggle" class="rdx-nav-btn" onclick="window.rdxToggleExp&&window.rdxToggleExp()" style="font-size:11px;font-weight:600;padding:5px 10px;border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;display:flex;align-items:center;gap:5px;color:#64748b;font-family:inherit"><span id="rdx-exp-dot" style="width:7px;height:7px;border-radius:50%;background:#0E9F6E;display:inline-block"></span><span id="rdx-exp-label">Beginner</span></button>'+
      '<button id="rdx-info-btn" class="rdx-nav-btn" title="About">&#9432;&#xFE0F;</button>'+
      '<button id="rdx-logout-btn" class="rdx-nav-btn rdx-logout">Log out</button>'+
    '</div>'+
    '</div>';

  var style=document.createElement('style');
  style.textContent=
    '#rdx-unified-nav{background:#fff;border-bottom:1px solid #e2e8f0;padding:0 20px;height:56px;display:flex;align-items:center;position:sticky;top:0;z-index:9000;font-family:"IBM Plex Sans",-apple-system,BlinkMacSystemFont,sans-serif;box-shadow:0 1px 3px rgba(0,0,0,.04)}'+
    '.rdx-logo-link{text-decoration:none;flex-shrink:0;margin-right:16px;display:flex;align-items:center}'+
    '.rdx-logo-img{height:28px;width:auto;display:block}'+
    '#rdx-nav-menu{display:flex;align-items:center;gap:2px;flex:1}'+
    '.rdx-nav-top{background:none;border:none;font-family:inherit;font-size:13px;font-weight:600;color:#64748b;padding:7px 12px;border-radius:8px;cursor:pointer;white-space:nowrap;transition:all .15s;display:inline-flex;align-items:center}'+
    '.rdx-nav-top:hover{color:#1e293b;background:#f1f5f9}a.rdx-nav-top{text-decoration:none}'+
    '.rdx-dd{position:relative}'+
    '.rdx-dd-panel{display:none;position:absolute;top:100%;padding-top:8px;left:50%;transform:translateX(-50%);min-width:280px;z-index:9100}'+
    '.rdx-dd-panel-inner{background:#fff;border:1px solid #e2e8f0;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.12);padding:8px;animation:rdxDdIn .15s ease}'+
    '.rdx-dd:hover .rdx-dd-panel,.rdx-dd-panel:hover{display:block}'+
    '@keyframes rdxDdIn{from{opacity:0;transform:translateX(-50%) translateY(-4px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}'+
    '.rdx-dd-item{display:flex;align-items:flex-start;gap:10px;padding:8px 12px;border-radius:8px;text-decoration:none;color:#1e293b;transition:background .12s}'+
    '.rdx-dd-item:hover{background:#f8fafc}'+
    '.rdx-dd-icon{font-size:15px;line-height:1;flex-shrink:0;margin-top:2px;width:18px;text-align:center}'+
    '.rdx-dd-item strong{font-size:13px;font-weight:600;display:block}'+
    '.rdx-dd-item small{font-size:11px;color:#64748b;display:block;margin-top:1px}'+
    '.rdx-dd-sl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;padding:8px 12px 3px}'+
    '.rdx-dd-sl:first-child{padding-top:4px}'+
    '.rdx-dd-hr{height:1px;background:#e2e8f0;margin:4px 8px}'+
    '.rdx-nav-right{display:flex;align-items:center;gap:6px;margin-left:auto;padding-left:12px;border-left:1px solid #e2e8f0}'+
    '.rdx-nav-btn{background:none;border:none;border-radius:8px;padding:6px 8px;cursor:pointer;font-size:15px;line-height:1;color:#64748b;transition:all .15s;font-family:inherit}'+
    '.rdx-nav-btn:hover{background:#f1f5f9}'+
    '.rdx-logout{font-size:12px;padding:6px 12px;border:1px solid #e2e8f0!important;border-radius:8px}'+
    '.rdx-logout:hover{border-color:#2874a6!important;color:#1f5f8b}'+
    '#rdx-hamburger{display:none;background:none;border:1px solid #e2e8f0;border-radius:8px;padding:8px 10px;cursor:pointer;font-size:18px;color:#475569;margin-left:auto}'+
    '#rdx-about-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:10000;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px)}'+
    '#rdx-about-overlay.open{display:flex}'+
    '#rdx-about-modal{background:#fff;border-radius:20px;max-width:540px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 25px 60px rgba(0,0,0,.3);animation:rdxModalIn .2s ease}'+
    '@keyframes rdxModalIn{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}'+
    '.rdx-about-hdr{background:linear-gradient(135deg,#1f5f8b,#2874a6);padding:28px;border-radius:20px 20px 0 0;color:#fff;position:relative}'+
    '.rdx-about-hdr h2{margin:0 0 4px;font-size:21px;font-weight:700;font-family:inherit}.rdx-about-hdr p{margin:0;opacity:.85;font-size:13px}'+
    '.rdx-about-body{padding:24px 28px 28px;font-size:14px;line-height:1.7;color:#475569}'+
    '.rdx-about-body h3{font-size:14px;font-weight:700;color:#1e293b;margin:18px 0 8px}.rdx-about-body h3:first-child{margin-top:0}'+
    '.rdx-about-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:10px 0}'+
    '.rdx-about-stat{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:14px 10px;text-align:center}'+
    '.rdx-about-stat .num{font-size:18px;font-weight:700;margin-bottom:4px}.rdx-about-stat .lbl{font-size:11px;color:#64748b;line-height:1.4}'+
    '.rdx-about-close{position:absolute;top:14px;right:14px;background:rgba(255,255,255,.2);border:none;border-radius:8px;width:30px;height:30px;font-size:18px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center}'+
    '@media(max-width:900px){'+
      '#rdx-hamburger{display:block!important}'+
      '#rdx-nav-menu{display:none!important;flex-direction:column;position:absolute;top:56px;left:0;right:0;background:#fff;border-bottom:1px solid #e2e8f0;padding:8px 0 12px;z-index:8999;box-shadow:0 8px 24px rgba(0,0,0,.1)}'+
      '#rdx-nav-menu.open{display:flex!important}'+
      '#rdx-unified-nav{flex-wrap:nowrap}'+
      '.rdx-dd{width:100%}.rdx-nav-top{width:100%;justify-content:space-between;padding:12px 20px;border-radius:0;font-size:15px}'+
      'a.rdx-nav-top{display:flex;width:100%;padding:12px 20px;font-size:15px}'+
      '.rdx-dd-panel{position:static;transform:none;box-shadow:none;border:none;padding:0 0 0 20px;min-width:auto;display:none;animation:none}'+
      '.rdx-dd.open .rdx-dd-panel{display:block}'+
      '.rdx-nav-right{display:none}'+
    '}';
  document.head.appendChild(style);

  var nav=document.createElement('nav');
  nav.id='rdx-unified-nav';
  nav.setAttribute('role','navigation');
  nav.setAttribute('aria-label','Main navigation');
  nav.innerHTML=html;

  function removeOldNavs(){['nav.nav:not(#rdx-unified-nav)','nav.dx-nav','nav.rdx-nav:not(#rdx-unified-nav)','.dx-universal-nav','#rdx-nav','#global-nav'].forEach(function(s){document.querySelectorAll(s).forEach(function(el){el.remove();});});}

  function insert(){
    removeOldNavs();
    if(document.body.firstChild) document.body.insertBefore(nav,document.body.firstChild);
    else document.body.appendChild(nav);

    document.getElementById('rdx-hamburger').addEventListener('click',function(){document.getElementById('rdx-nav-menu').classList.toggle('open');});
    if(window.innerWidth<=900){nav.querySelectorAll('.rdx-dd>.rdx-nav-top').forEach(function(btn){btn.setAttribute('aria-expanded','false');btn.addEventListener('click',function(e){e.preventDefault();var p=this.parentElement;p.classList.toggle('open');this.setAttribute('aria-expanded',p.classList.contains('open')?'true':'false');});});}

    document.getElementById('rdx-logout-btn').addEventListener('click',function(){localStorage.removeItem('reasondx-user');localStorage.removeItem('reasondx_student_code');localStorage.removeItem('rdx-progress');sessionStorage.clear();window.location.href=R+'auth/login.html';});

    function rdxApplyExp(){var lvl=localStorage.getItem('rdx-exp-level')||'beginner';var dot=document.getElementById('rdx-exp-dot'),lbl=document.getElementById('rdx-exp-label');if(dot)dot.style.background=lvl==='veteran'?'#2874A6':'#0E9F6E';if(lbl)lbl.textContent=lvl==='veteran'?'Veteran':'Beginner';document.querySelectorAll('[data-rdx-level="advanced"]').forEach(function(el){el.style.display=lvl==='veteran'?'':'none';});window.RDX_EXP_LEVEL=lvl;}
    window.rdxToggleExp=function(){var cur=localStorage.getItem('rdx-exp-level')||'beginner';localStorage.setItem('rdx-exp-level',cur==='beginner'?'veteran':'beginner');rdxApplyExp();};
    rdxApplyExp();

    var ov=document.createElement('div');ov.id='rdx-about-overlay';
    ov.innerHTML='<div id="rdx-about-modal"><div class="rdx-about-hdr"><button class="rdx-about-close" id="rdx-about-x">&times;</button><h2>ReasonDx</h2><p>Clinical Reasoning Education Platform</p></div><div class="rdx-about-body"><h3>Three ways to build clinical reasoning</h3><div class="rdx-about-grid"><div class="rdx-about-stat" style="border-top:3px solid #C0392B"><div class="num" style="color:#C0392B">🩺</div><div class="lbl"><strong style="color:#C0392B;display:block">CaseDx</strong>Work clinical cases in the Virtual EMR</div></div><div class="rdx-about-stat" style="border-top:3px solid #6D28D9"><div class="num" style="color:#6D28D9">🧑‍⚕️</div><div class="lbl"><strong style="color:#6D28D9;display:block">CoachDx</strong>Socratic AI coaching on any topic</div></div><div class="rdx-about-stat" style="border-top:3px solid #0E7490"><div class="num" style="color:#0E7490">🧬</div><div class="lbl"><strong style="color:#0E7490;display:block">MechanismDx</strong>Pathophysiology explorer · 670 topics</div></div></div><p style="margin-top:16px;padding-top:14px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;text-align:center">&copy; 2025&ndash;2026 ReasonDx &middot; <a href="mailto:hello@reasondx.com" style="color:#2874a6">hello@reasondx.com</a></p></div></div>';
    document.body.appendChild(ov);
    ov.addEventListener('click',function(e){if(e.target===ov)ov.classList.remove('open');});
    document.getElementById('rdx-about-x').addEventListener('click',function(){ov.classList.remove('open');});
    document.getElementById('rdx-info-btn').addEventListener('click',function(){ov.classList.toggle('open');});

    var bcSrc=document.querySelector('script[src*="rdx-nav"]');
    if(bcSrc){var bcPath=bcSrc.src.replace('rdx-nav','rdx-breadcrumb');var bc=document.createElement('script');bc.src=bcPath;document.head.appendChild(bc);}
  }

  if(document.body) insert();
  else document.addEventListener('DOMContentLoaded',insert);
})();
