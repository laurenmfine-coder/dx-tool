(function() {
  'use strict';

  var MODULE_MAP = {
    'aki-module':           { caseId:'aki-prerenal',              caseLabel:'AKI Workup',                coachId:'aki' },
    'anaphylaxis-module':   { caseId:'anaphylaxis',               caseLabel:'Anaphylaxis ED',             coachId:'anaphylaxis' },
    'copd-module':          { caseId:'copd-v1',                   caseLabel:'COPD Exacerbation',          coachId:'copd-em' },
    'endocrine-module':     { caseId:'dka-v1',                    caseLabel:'DKA Emergency Dept',         coachId:'dka-em' },
    'gi-hepatology-module': { caseId:'alcoholic-hepatitis',       caseLabel:'Alcoholic Hepatitis',        coachId:'liver-id' },
    'heart-failure-module': { caseId:'chf-exacerbation',          caseLabel:'CHF Exacerbation ED',        coachId:'heart-failure' },
    'hematology-module':    { caseId:'sickle-cell-disease',       caseLabel:'Sickle Cell Crisis',         coachId:'ttp-tma' },
    'ob-module':            { caseId:'eclampsia',                 caseLabel:'Eclampsia L&D',              coachId:'ob-em' },
    'psychiatry-module':    { caseId:'alcohol-withdrawal',        caseLabel:'Alcohol Withdrawal',         coachId:'alcohol-withdrawal' },
    'pulmonary-module':     { caseId:'asthma-exacerbation',       caseLabel:'Asthma Exacerbation',        coachId:'asthma' },
    'rheumatology-module':  { caseId:'sle-flare-with-cytopenias', caseLabel:'SLE Flare Inpatient',        coachId:'sle-rheum' },
    'sepsis-module':        { caseId:'sepsisseptic-shock',        caseLabel:'Septic Shock MICU',          coachId:'sepsis-em' },
    'stroke-module':        { caseId:'stroke-v1',                 caseLabel:'Ischemic Stroke ED',         coachId:'stroke-em' },
    'toxicology-module':    { caseId:'apap-overdose',             caseLabel:'APAP Overdose ED',           coachId:'tox-em' }
  };

  var filename = window.location.pathname.split('/').pop().replace('.html', '');
  var rec = MODULE_MAP[filename];
  if (!rec) return;

  var params = new URLSearchParams(window.location.search);
  if (params.get('ref')) return;

  function inject() {
    if (document.getElementById('mech-bridge-footer')) return;

    var footer = document.createElement('div');
    footer.id = 'mech-bridge-footer';
    footer.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:rgba(15,23,42,0.97);backdrop-filter:blur(12px);border-top:1px solid rgba(255,255,255,.1);padding:12px 20px;z-index:9999;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap';

    var label = document.createElement('div');
    label.style.cssText = 'font-size:12px;color:rgba(255,255,255,.6);flex-shrink:0';
    label.innerHTML = '\uD83E\uDDE0 <strong style="color:#fff">Ready to apply this?</strong>';

    var btns = document.createElement('div');
    btns.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap';

    var caseLink = document.createElement('a');
    caseLink.href = '../virtual-emr.html?case=' + rec.caseId;
    caseLink.style.cssText = 'font-size:12px;font-weight:700;padding:7px 14px;background:#2874A6;color:#fff;border-radius:7px;text-decoration:none;white-space:nowrap';
    caseLink.textContent = '\uD83C\uDFE5 ' + rec.caseLabel + ' \u2192';

    var coachLink = document.createElement('a');
    coachLink.href = '../CoachDx/mentor-chat.html?topic=' + rec.coachId;
    coachLink.style.cssText = 'font-size:12px;font-weight:700;padding:7px 14px;background:transparent;color:#94A3B8;border:1px solid rgba(255,255,255,.15);border-radius:7px;text-decoration:none;white-space:nowrap';
    coachLink.textContent = '\uD83E\uDD16 Discuss with CoachDx';

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.style.cssText = 'font-size:11px;padding:7px 10px;background:transparent;color:rgba(255,255,255,.3);border:none;cursor:pointer;flex-shrink:0';
    closeBtn.textContent = '\u2715';
    closeBtn.onclick = function() { footer.remove(); };

    btns.appendChild(caseLink);
    btns.appendChild(coachLink);
    btns.appendChild(closeBtn);
    footer.appendChild(label);
    footer.appendChild(btns);
    document.body.appendChild(footer);

    var page = document.querySelector('.page') || document.body;
    var cur = parseInt(page.style.paddingBottom || '0') || 0;
    if (cur < 70) page.style.paddingBottom = '70px';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(inject, 800); });
  } else {
    setTimeout(inject, 800);
  }

})();
