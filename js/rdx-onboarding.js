/* js/rdx-onboarding.js — First-visit welcome modal & guided tour
 * Shows once per user (tracked via localStorage).
 * Surfaces clear primary CTA based on user role.
 */
(function(){
'use strict';
var KEY='rdx-onboarded';
if(localStorage.getItem(KEY)) return;

// Don't show on auth pages
if(/auth\/|login|register|privacy|terms/i.test(location.pathname)) return;

var overlay=document.createElement('div');
overlay.id='rdx-onboard';
overlay.innerHTML=`
<div class="ob-backdrop"></div>
<div class="ob-modal">
  <div class="ob-header">
    <div class="ob-logo">Reason<span>Dx</span></div>
    <div class="ob-tagline">The Virtual Teaching Hospital</div>
  </div>
  <div class="ob-body" id="obBody">
    <div class="ob-step" id="obStep0">
      <h2>Welcome to ReasonDx</h2>
      <p>A clinical reasoning education platform built by medical educators. Before you dive in, tell us about yourself so we can point you in the right direction.</p>
      <div class="ob-roles">
        <button class="ob-role" onclick="obRole('student')">
          <span class="ob-role-icon">🩺</span>
          <span class="ob-role-title">Medical / PA / NP Student</span>
          <span class="ob-role-desc">Learning clinical reasoning</span>
        </button>
        <button class="ob-role" onclick="obRole('resident')">
          <span class="ob-role-icon">🏥</span>
          <span class="ob-role-title">Resident or Fellow</span>
          <span class="ob-role-desc">Sharpening diagnostic skills</span>
        </button>
        <button class="ob-role" onclick="obRole('educator')">
          <span class="ob-role-icon">📚</span>
          <span class="ob-role-title">Educator / Program Director</span>
          <span class="ob-role-desc">Curriculum & assessment tools</span>
        </button>
      </div>
    </div>
    <div class="ob-step" id="obStep1" style="display:none">
      <h2 id="obRoleTitle"></h2>
      <p id="obRoleDesc"></p>
      <div class="ob-path" id="obPath"></div>
      <div class="ob-actions">
        <button class="ob-btn-primary" id="obCTA" onclick="obStart()"></button>
        <button class="ob-btn-ghost" onclick="obDismiss()">Explore on my own</button>
      </div>
    </div>
  </div>
  <button class="ob-close" onclick="obDismiss()" aria-label="Close">✕</button>
</div>
`;

var style=document.createElement('style');
style.textContent=`
#rdx-onboard{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation:obFadeIn .3s ease}
@keyframes obFadeIn{from{opacity:0}to{opacity:1}}
.ob-backdrop{position:absolute;inset:0;background:rgba(15,23,42,.6);backdrop-filter:blur(4px)}
.ob-modal{position:relative;background:#fff;border-radius:20px;max-width:560px;width:100%;box-shadow:0 24px 80px rgba(0,0,0,.2);overflow:hidden;animation:obSlideUp .35s ease}
@keyframes obSlideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
.ob-header{background:linear-gradient(135deg,#EBF5FB,#F0F2F5);padding:28px 32px 20px;border-bottom:1px solid #E2E8F0}
.ob-logo{font-size:22px;font-weight:800;color:#1E293B;letter-spacing:-.5px}.ob-logo span{color:#2874A6;font-style:italic}
.ob-tagline{font-size:12px;color:#64748B;margin-top:2px;font-weight:500}
.ob-body{padding:28px 32px 32px}
.ob-step h2{font-size:20px;font-weight:800;color:#1E293B;margin-bottom:8px}
.ob-step p{font-size:14px;color:#64748B;line-height:1.6;margin-bottom:20px}
.ob-roles{display:flex;flex-direction:column;gap:8px}
.ob-role{display:flex;align-items:center;gap:14px;padding:14px 16px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;cursor:pointer;transition:all .15s;text-align:left;font-family:inherit;width:100%}
.ob-role:hover{border-color:#2874A6;background:#EBF5FB;transform:translateX(4px)}
.ob-role-icon{font-size:28px;flex-shrink:0}
.ob-role-title{font-size:14px;font-weight:700;color:#1E293B;display:block}
.ob-role-desc{font-size:11px;color:#94A3B8;display:block;margin-top:1px}
.ob-path{display:flex;flex-direction:column;gap:10px;margin-bottom:24px}
.ob-path-item{display:flex;gap:12px;align-items:flex-start;padding:12px;background:#F8FAFC;border-radius:10px;border:1px solid #E2E8F0}
.ob-path-num{width:24px;height:24px;border-radius:50%;background:#2874A6;color:#fff;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.ob-path-text{font-size:13px;color:#1E293B;line-height:1.5}.ob-path-text strong{font-weight:700}
.ob-actions{display:flex;gap:10px;flex-wrap:wrap}
.ob-btn-primary{padding:12px 24px;background:#2874A6;color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;transition:all .15s;font-family:inherit}
.ob-btn-primary:hover{background:#1B4F72;transform:translateY(-1px)}
.ob-btn-ghost{padding:12px 24px;background:transparent;color:#64748B;border:1px solid #E2E8F0;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;transition:all .15s;font-family:inherit}
.ob-btn-ghost:hover{border-color:#94A3B8;color:#1E293B}
.ob-close{position:absolute;top:16px;right:16px;background:none;border:none;font-size:18px;color:#94A3B8;cursor:pointer;width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;transition:all .1s}
.ob-close:hover{background:#F1F5F9;color:#1E293B}
@media(max-width:640px){.ob-modal{border-radius:16px}.ob-header,.ob-body{padding:20px 20px}}
`;
document.head.appendChild(style);

var selectedRole=null;
var PATHS={
  student:{
    title:'Your Learning Path',
    desc:'Here\'s the fastest way to build clinical reasoning skills:',
    steps:[
      {text:'<strong>Start a case</strong> — Pick a patient from the ED Track Board or browse by specialty in Study Mode.'},
      {text:'<strong>Work the EMR</strong> — Review the chart, order labs and imaging, build your differential.'},
      {text:'<strong>Get coached</strong> — CoachDx (Pro) gives real-time Socratic feedback on your reasoning.'},
      {text:'<strong>Learn the why</strong> — MechanismDx teaches pathophysiology behind every diagnosis.'}
    ],
    cta:'Start Your First Case',
    url:'virtual-emr.html?setting=ed'
  },
  resident:{
    title:'Sharpen Your Practice',
    desc:'Tools designed for advanced learners:',
    steps:[
      {text:'<strong>Night Float Simulator</strong> — Accept admissions, handle cross-cover pages, practice I-PASS handoffs.'},
      {text:'<strong>Clinical Reasoning Trainers</strong> — Specialty-specific reasoning practice across 271+ topics.'},
      {text:'<strong>Consult Callback</strong> — Practice consultant communication with AI-scored scenarios.'},
      {text:'<strong>Milestone Tracker</strong> — A/I fellows: track ACGME milestone progression across 19 subcompetencies.'}
    ],
    cta:'Open the Virtual Hospital',
    url:'virtual-emr.html'
  },
  educator:{
    title:'Tools for Your Program',
    desc:'Built for curriculum integration and assessment:',
    steps:[
      {text:'<strong>Milestone Tracker</strong> — Map fellow progress to ACGME subcompetencies with platform-generated evidence.'},
      {text:'<strong>CCC Report Generator</strong> — Auto-generate semi-annual reports with narrative scaffolding and gap analysis.'},
      {text:'<strong>Procedure Lab</strong> — Skin testing, OFC, and desensitization simulations for PC3 assessment.'},
      {text:'<strong>Institutional Licensing</strong> — Cohort analytics, LMS integration, custom cases.'}
    ],
    cta:'Explore the Dashboard',
    url:'milestone-tracker.html'
  }
};

window.obRole=function(role){
  selectedRole=role;
  var p=PATHS[role];
  document.getElementById('obStep0').style.display='none';
  document.getElementById('obStep1').style.display='block';
  document.getElementById('obRoleTitle').textContent=p.title;
  document.getElementById('obRoleDesc').textContent=p.desc;
  var pathHTML='';
  p.steps.forEach(function(s,i){
    pathHTML+='<div class="ob-path-item"><div class="ob-path-num">'+(i+1)+'</div><div class="ob-path-text">'+s.text+'</div></div>';
  });
  document.getElementById('obPath').innerHTML=pathHTML;
  document.getElementById('obCTA').textContent=p.cta;
};

window.obStart=function(){
  localStorage.setItem(KEY,'1');
  var url=PATHS[selectedRole].url;
  if(location.pathname.indexOf(url)<0) location.href=url;
  else obDismiss();
};

window.obDismiss=function(){
  localStorage.setItem(KEY,'1');
  var el=document.getElementById('rdx-onboard');
  if(el){el.style.opacity='0';el.style.transition='opacity .2s';setTimeout(function(){el.remove()},200)}
};

// Insert after page loads
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(overlay)});
} else {
  document.body.appendChild(overlay);
}
})();
