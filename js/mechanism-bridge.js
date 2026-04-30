(function() {
  'use strict';

  var MODULE_MAP = {
    'acs-module':                  { caseId:'stemi-v1',                    caseLabel:'STEMI',                          coachId:'stemi' },
    'afib-module':                 { caseId:'new-onset-atrial-fibrillation',caseLabel:'New-Onset A-Fib',               coachId:'afib' },
    'aki-module':                  { caseId:'aki-differential',             caseLabel:'AKI Workup',                     coachId:'aki' },
    'allergen-immunotherapy-module':{ caseId:'allergic-rhinitis-immunotherapy',caseLabel:'Allergy Shot Reaction',       coachId:'allergic-rhinitis' },
    'anaphylaxis-module':          { caseId:'anaphylaxis',                  caseLabel:'Anaphylaxis',                    coachId:'anaphylaxis' },
    'asthma-module':               { caseId:'asthma-exacerbation',          caseLabel:'Asthma Exacerbation',            coachId:'asthma' },
    'atopic-derm-module':          { caseId:'atopic-dermatitis-severe',     caseLabel:'Severe Atopic Dermatitis',       coachId:'atopic-derm' },
    'cns-infections-gbs-module':   { caseId:'bacterial-meningitis',         caseLabel:'Bacterial Meningitis',           coachId:'meningitis' },
    'copd-module':                 { caseId:'copd-exacerbation-niv',        caseLabel:'COPD Exacerbation',              coachId:'copd' },
    'drug-allergy-module':         { caseId:'drug-allergy-vancomycin-rms',  caseLabel:'Drug Allergy — Vancomycin RMS',  coachId:'drug-allergy' },
    'electrolytes-acidbase-module':{ caseId:'hyperkalemia-with-concurrent-acs',caseLabel:'Hyperkalemia + ACS',          coachId:'hyperkalemia' },
    'endocrine-module':            { caseId:'dka-v1',                       caseLabel:'DKA',                            coachId:'dka-endo' },
    'eosinophilia-hp-module':      { caseId:'eoe-adult',                    caseLabel:'EoE Adult',                      coachId:'eosinophilia' },
    'food-allergy-module':         { caseId:'peanut-allergy-anaphylaxis',   caseLabel:'Peanut Anaphylaxis',             coachId:'food-allergy' },
    'gi-hepatology-module':        { caseId:'upper-gi-bleed',               caseLabel:'Upper GI Bleed',                 coachId:'gi-bleed' },
    'heart-failure-module':        { caseId:'chf-exacerbation',             caseLabel:'CHF Exacerbation',               coachId:'heart-failure' },
    'hematology-module':           { caseId:'autoimmune-hemolytic-anemia',  caseLabel:'Autoimmune Hemolytic Anemia',    coachId:'anemia' },
    'mastocytosis-mcas-module':    { caseId:'mastocytosis',                 caseLabel:'Mastocytosis / MCAS',            coachId:'mastocytosis' },
    'ob-module':                   { caseId:'ectopic-pregnancy-workup',     caseLabel:'Ectopic Pregnancy',              coachId:'ectopic' },
    'pid-module':                  { caseId:'cvid-presentation',            caseLabel:'CVID Workup',                    coachId:'cvid' },
    'pneumonia-module':            { caseId:'pneumonia',                    caseLabel:'Community-Acquired Pneumonia',   coachId:'pneumonia' },
    'psychiatry-module':           { caseId:'alcohol-withdrawal',           caseLabel:'Alcohol Withdrawal',             coachId:'substance-use' },
    'pulmonary-module':            { caseId:'massive-pe-with-rv-failure',   caseLabel:'Massive PE with RV Failure',     coachId:'pe-pulm' },
    'rheumatology-module':         { caseId:'sle-flare-with-cytopenias',    caseLabel:'SLE Flare',                      coachId:'sle' },
    'rhinitis-module':             { caseId:'allergic-rhinitis-uncontrolled',caseLabel:'Uncontrolled Allergic Rhinitis',coachId:'allergic-rhinitis' },
    'seizures-epilepsy-module':    { caseId:'new-onset-seizure',            caseLabel:'New-Onset Seizure',              coachId:'seizure' },
    'sepsis-module':               { caseId:'sepsisseptic-shock',           caseLabel:'Septic Shock',                   coachId:'sepsis-id' },
    'stroke-module':               { caseId:'acute-ischemic-stroke',        caseLabel:'Acute Ischemic Stroke',          coachId:'stroke-neuro' },
    'toxicology-module':           { caseId:'toxic-ingestion',              caseLabel:'Acetaminophen Overdose',         coachId:'overdose' },
    'urticaria-module':            { caseId:'hereditary-angioedema',        caseLabel:'Hereditary Angioedema',          coachId:'hae' },
    'ai-basic-science-module':     { caseId:'anaphylaxis',                  caseLabel:'Anaphylaxis',                    coachId:'anaphylaxis' },
    'ai-diagnostic-methods-module':{ caseId:'penicillin-allergy-delabeling',caseLabel:'PCN Allergy Delabeling',         coachId:'drug-allergy' },
    'clinic-ambulatory-module':    { caseId:'type2-diabetes-outpatient',    caseLabel:'T2DM Outpatient',                coachId:'diabetes' },

    // ── Bridge entries added April 2026 (closing the augmentation loop) ──
    'cognitive-rehabilitation-module':  { caseId:'dementia-with-acute-delirium',  caseLabel:'Dementia with Acute Delirium',   coachId:'delirium' },
    'dermatology-module':               { caseId:'sjs-ten',                       caseLabel:'SJS / TEN',                      coachId:'sjs-ten' },
    'environmental-occupational-module':{ caseId:'heat-stroke',                   caseLabel:'Exertional Heat Stroke',         coachId:'overdose' },
    'geriatrics-module':                { caseId:'dementia-with-acute-delirium',  caseLabel:'Geriatric Polypharmacy & Delirium', coachId:'falls' },
    'mcat-biochemistry-module':         { caseId:'mbs-dka-cascade',               caseLabel:'DKA Biochemistry Cascade',       coachId:'dka-endo' },
    'msk-orthopedic-module':            { caseId:'rhabdomyolysis',                caseLabel:'Rhabdomyolysis',                 coachId:'msk-red-flag-lbp' },
    'neuro-ophthalmology-module':       { caseId:'optic-neuritis',                caseLabel:'Optic Neuritis',                 coachId:'optic-nerve-disorders' },
    'neurologic-rehabilitation-module': { caseId:'tbi-return-to-work-ot',         caseLabel:'TBI Rehabilitation',             coachId:'stroke-neuro' },
    'oncology-module':                  { caseId:'febrile-neutropenia',           caseLabel:'Febrile Neutropenia',            coachId:'leukemia-lymphoma' },
    'ophthalmology-module':             { caseId:'neovascular-glaucoma-od',       caseLabel:'Neovascular Glaucoma',           coachId:'glaucoma-management' },
    'oral-medicine-module':             { caseId:'dental-ludwigs-angina',         caseLabel:"Ludwig's Angina",                coachId:'dental-emergency-triage' },
    'ot-clinical-reasoning-module':     { caseId:'sci-adl-goals-ot',              caseLabel:'SCI: ADL Goal Setting',          coachId:'ptot-goal-management' },
    'pain-management-module':           { caseId:'musculoskeletal-back-pain',     caseLabel:'Chronic Back Pain',              coachId:'pharm-opioid-risk' },
    'pediatrics-module':                { caseId:'croup-epiglottitis-ddx',        caseLabel:'Croup vs Epiglottitis',          coachId:'fever-peds' },
    'pharmacogenomics-module':          { caseId:'pharmacy-warfarin-cyp',         caseLabel:'Warfarin and CYP Genotype',      coachId:'pharmacogenomics' },
    'pharmacotherapy-module':           { caseId:'pharmacy-warfarin-cyp',         caseLabel:'Warfarin Pharmacotherapy',       coachId:'drug-allergy' },
    'psychiatric-pharmacotherapy-module':{ caseId:'serotonin-syndrome',           caseLabel:'Serotonin Syndrome',             coachId:'depression' },
    'pt-clinical-reasoning-module':     { caseId:'pt-rotator-cuff-rehab',         caseLabel:'Rotator Cuff Rehabilitation',    coachId:'msk-shoulder-impingement' },
    'retinal-disorders-module':         { caseId:'diabetic-retinopathy-od',       caseLabel:'Diabetic Retinopathy',           coachId:'diabetic-retinopathy' },
    'trauma-module':                    { caseId:'ot-polytrauma-tbi',             caseLabel:'Polytrauma with TBI',            coachId:'trauma' },
    'vascular-module':                  { caseId:'ruptured-aaa',                  caseLabel:'Ruptured AAA',                   coachId:'aortic-dissection' }
  };

  var COACH_LABELS = {
    'stemi':'STEMI','afib':'Atrial Fibrillation','aki':'Acute Kidney Injury',
    'allergic-rhinitis':'Allergic Rhinitis','anaphylaxis':'Anaphylaxis',
    'asthma':'Asthma','atopic-derm':'Atopic Dermatitis','meningitis':'Bacterial Meningitis',
    'copd':'COPD','drug-allergy':'Drug Allergy','hyperkalemia':'Hyperkalemia',
    'dka-endo':'DKA / HHS','eosinophilia':'Eosinophilia & HES','food-allergy':'Food Allergy',
    'gi-bleed':'GI Bleed','heart-failure':'Heart Failure','anemia':'Anemia',
    'mastocytosis':'Mastocytosis / MCAS','ectopic':'Ectopic Pregnancy','cvid':'CVID',
    'pneumonia':'Community-Acquired Pneumonia','substance-use':'Substance Use Disorders',
    'pe-pulm':'Pulmonary Embolism','sle':'Systemic Lupus Erythematosus',
    'seizure':'Seizures & Epilepsy','sepsis-id':'Sepsis & Septic Shock',
    'stroke-neuro':'Ischemic Stroke','overdose':'Toxicology / Overdose',
    'hae':'Hereditary Angioedema','diabetes':'Diabetes Management',
    'afib':'Atrial Fibrillation','mastocytosis':'Mastocytosis / MCAS',
    // Added April 2026
    'delirium':'Delirium','sjs-ten':'SJS / TEN','falls':'Falls & Frailty',
    'msk-red-flag-lbp':'Red Flag Back Pain','optic-nerve-disorders':'Optic Nerve Disorders',
    'leukemia-lymphoma':'Leukemia & Lymphoma','glaucoma-management':'Glaucoma',
    'dental-emergency-triage':'Dental Emergency Triage',
    'ptot-goal-management':'Goal Management Training','pharm-opioid-risk':'Opioid Risk Assessment',
    'fever-peds':'Pediatric Fever','pharmacogenomics':'Pharmacogenomics',
    'depression':'Depression','msk-shoulder-impingement':'Shoulder Impingement',
    'diabetic-retinopathy':'Diabetic Retinopathy','trauma':'Trauma & Massive Transfusion',
    'aortic-dissection':'Aortic Dissection'
  };

  var filename = window.location.pathname.split('/').pop().replace('.html', '');
  var rec = MODULE_MAP[filename];
  if (!rec) return;

  var params = new URLSearchParams(window.location.search);
  if (params.get('ref')) return;

  var coachLabel = COACH_LABELS[rec.coachId] || rec.coachId;

  function inject() {
    if (document.getElementById('mech-bridge-footer')) return;

    var footer = document.createElement('div');
    footer.id = 'mech-bridge-footer';
    footer.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:rgba(13,43,62,0.97);backdrop-filter:blur(12px);border-top:1px solid rgba(133,193,233,.15);padding:12px 24px;z-index:9999;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap';

    var label = document.createElement('div');
    label.style.cssText = 'font-size:12px;color:rgba(255,255,255,.55);flex-shrink:0';
    label.innerHTML = '<strong style="color:#fff;font-size:13px">Ready to apply this?</strong>';

    var btns = document.createElement('div');
    btns.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;align-items:center';

    var simLink = document.createElement('a');
    simLink.href = '../virtual-emr.html?case=' + encodeURIComponent(rec.caseId);
    simLink.style.cssText = 'font-size:12px;font-weight:700;padding:7px 14px;background:#2874A6;color:#fff;border-radius:7px;text-decoration:none;white-space:nowrap';
    simLink.textContent = 'Simulate \u2014 ' + rec.caseLabel + ' \u2192';

    var emrLink = document.createElement('a');
    emrLink.href = ((window.RDX_CASE_TOKENS&&window.RDX_CASE_TOKENS.slugToToken&&window.RDX_CASE_TOKENS.slugToToken[rec.caseId])?('../virtual-emr.html?cx='+window.RDX_CASE_TOKENS.slugToToken[rec.caseId]):('../virtual-emr.html?case='+encodeURIComponent(rec.caseId)));
    emrLink.style.cssText = 'font-size:12px;font-weight:600;padding:7px 14px;background:rgba(255,255,255,.08);color:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.15);border-radius:7px;text-decoration:none;white-space:nowrap';
    emrLink.textContent = 'Practice in Virtual EMR';

    var coachLink = document.createElement('a');
    coachLink.href = '../CoachDx/mentor-chat.html?topic=' + encodeURIComponent(coachLabel) + '&ref=mechanism&refModule=' + encodeURIComponent(filename);
    coachLink.style.cssText = 'font-size:12px;font-weight:600;padding:7px 14px;background:rgba(124,58,237,.15);color:#C4B5FD;border:1px solid rgba(124,58,237,.25);border-radius:7px;text-decoration:none;white-space:nowrap';
    coachLink.textContent = 'Discuss with Coach';

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.style.cssText = 'font-size:13px;padding:4px 8px;background:transparent;color:rgba(255,255,255,.25);border:none;cursor:pointer;flex-shrink:0;line-height:1';
    closeBtn.textContent = '\u00d7';
    closeBtn.onclick = function() {
      footer.remove();
      var page = document.querySelector('.page') || document.body;
      page.style.paddingBottom = '';
    };

    btns.appendChild(simLink);
    btns.appendChild(emrLink);
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
