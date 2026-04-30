/* eslint-disable no-console */
/**
 * rdx-pillar-switcher.js
 * ════════════════════════════════════════════════════════════════════
 * In-case pillar switcher: floating button + popover that lets a learner
 * pause their current case and jump to the matched MechanismDx module,
 * CoachDx topic, or a related case — without losing their place.
 *
 * Loads only on virtual-emr.html. The case ID is detected from the URL,
 * mapped to a target mechanism module + coach topic via CASE_TO_PILLARS
 * (the inverse of mechanism-bridge.js's MODULE_MAP).
 *
 * UX notes:
 *  - Floating button at bottom-left (right is occupied by toast/return-float)
 *  - Single tap opens a small popover with 3 actions
 *  - "Review mechanism" deep-links with ?return parameter so banner shows
 *  - "Ask coach" pre-loads the matched topic in mentor-chat
 *  - "Try a related case" routes to /browse.html filtered to the same category
 *  - Closes if user taps outside the popover
 *  - Hidden if no case is loaded (e.g. user hasn't picked one yet)
 */

(function() {
  'use strict';

  // ──────────────────────────────────────────────────────────────
  // CASE → PILLARS MAPPING
  // Inverse of mechanism-bridge.js MODULE_MAP. Maps caseId to:
  //   - mechanismModule: which mech module to deep-link
  //   - coachTopic: which CoachDx topic to pre-load
  //   - category: case category for "related cases" filter
  // ──────────────────────────────────────────────────────────────
  var CASE_TO_PILLARS = {
    // Cardiology
    'stemi-v1':                     { mechanismModule: 'acs-module',                  coachTopic: 'stemi',          category: 'cardiovascular' },
    'new-onset-atrial-fibrillation':{ mechanismModule: 'afib-module',                 coachTopic: 'afib',           category: 'cardiovascular' },
    'chf-exacerbation':             { mechanismModule: 'heart-failure-module',        coachTopic: 'heart-failure',  category: 'cardiovascular' },

    // Renal
    'aki-differential':             { mechanismModule: 'aki-module',                  coachTopic: 'aki',            category: 'renal' },
    'hyperkalemia-with-concurrent-acs': { mechanismModule: 'electrolytes-acidbase-module', coachTopic: 'hyperkalemia', category: 'renal' },

    // Allergy / Immunology
    'allergic-rhinitis-immunotherapy':  { mechanismModule: 'allergen-immunotherapy-module', coachTopic: 'allergic-rhinitis', category: 'allergy' },
    'anaphylaxis':                  { mechanismModule: 'anaphylaxis-module',          coachTopic: 'anaphylaxis',    category: 'allergy' },
    'asthma-exacerbation':          { mechanismModule: 'asthma-module',               coachTopic: 'asthma',         category: 'allergy' },
    'atopic-dermatitis-severe':     { mechanismModule: 'atopic-derm-module',          coachTopic: 'atopic-derm',    category: 'allergy' },
    'drug-allergy-vancomycin-rms':  { mechanismModule: 'drug-allergy-module',         coachTopic: 'drug-allergy',   category: 'allergy' },
    'eoe-adult':                    { mechanismModule: 'eosinophilia-hp-module',      coachTopic: 'eosinophilia',   category: 'allergy' },
    'peanut-allergy-anaphylaxis':   { mechanismModule: 'food-allergy-module',         coachTopic: 'food-allergy',   category: 'allergy' },
    'mastocytosis':                 { mechanismModule: 'mastocytosis-mcas-module',    coachTopic: 'mastocytosis',   category: 'allergy' },
    'cvid-presentation':            { mechanismModule: 'pid-module',                  coachTopic: 'cvid',           category: 'allergy' },
    'allergic-rhinitis-uncontrolled':{ mechanismModule: 'rhinitis-module',            coachTopic: 'allergic-rhinitis', category: 'allergy' },
    'hereditary-angioedema':        { mechanismModule: 'urticaria-module',            coachTopic: 'hae',            category: 'allergy' },
    'penicillin-allergy-delabeling':{ mechanismModule: 'ai-diagnostic-methods-module',coachTopic: 'drug-allergy',   category: 'allergy' },

    // Pulmonary / Infectious
    'bacterial-meningitis':         { mechanismModule: 'cns-infections-gbs-module',   coachTopic: 'meningitis',     category: 'infectious' },
    'copd-exacerbation-niv':        { mechanismModule: 'copd-module',                 coachTopic: 'copd',           category: 'pulmonary' },
    'pneumonia':                    { mechanismModule: 'pneumonia-module',            coachTopic: 'pneumonia',      category: 'infectious' },
    'massive-pe-with-rv-failure':   { mechanismModule: 'pulmonary-module',            coachTopic: 'pe-pulm',        category: 'pulmonary' },
    'sepsisseptic-shock':           { mechanismModule: 'sepsis-module',               coachTopic: 'sepsis-id',      category: 'infectious' },

    // Endocrine
    'dka-v1':                       { mechanismModule: 'endocrine-module',            coachTopic: 'dka-endo',       category: 'endocrine' },
    'mbs-dka-cascade':              { mechanismModule: 'mcat-biochemistry-module',    coachTopic: 'dka-endo',       category: 'endocrine' },
    'type2-diabetes-outpatient':    { mechanismModule: 'clinic-ambulatory-module',    coachTopic: 'diabetes',       category: 'endocrine' },

    // Neuro
    'acute-ischemic-stroke':        { mechanismModule: 'stroke-module',               coachTopic: 'stroke-neuro',   category: 'neurologic' },
    'new-onset-seizure':            { mechanismModule: 'seizures-epilepsy-module',    coachTopic: 'seizure',        category: 'neurologic' },
    'optic-neuritis':               { mechanismModule: 'neuro-ophthalmology-module',  coachTopic: 'optic-nerve-disorders', category: 'neurologic' },
    'tbi-return-to-work-ot':        { mechanismModule: 'neurologic-rehabilitation-module', coachTopic: 'stroke-neuro', category: 'neurologic' },

    // GI / Hepatology
    'upper-gi-bleed':               { mechanismModule: 'gi-hepatology-module',        coachTopic: 'gi-bleed',       category: 'gastrointestinal' },

    // Hematology
    'autoimmune-hemolytic-anemia':  { mechanismModule: 'hematology-module',           coachTopic: 'anemia',         category: 'hematologic' },

    // Tox / Psych
    'toxic-ingestion':              { mechanismModule: 'toxicology-module',           coachTopic: 'overdose',       category: 'toxicologic' },
    'alcohol-withdrawal':           { mechanismModule: 'psychiatry-module',           coachTopic: 'substance-use',  category: 'psychiatric' },
    'serotonin-syndrome':           { mechanismModule: 'psychiatric-pharmacotherapy-module', coachTopic: 'depression', category: 'psychiatric' },

    // OB / Rheum
    'ectopic-pregnancy-workup':     { mechanismModule: 'ob-module',                   coachTopic: 'ectopic',        category: 'obstetric' },
    'sle-flare-with-cytopenias':    { mechanismModule: 'rheumatology-module',         coachTopic: 'sle',            category: 'rheumatologic' },

    // Newly bridged (April 2026)
    'dementia-with-acute-delirium': { mechanismModule: 'cognitive-rehabilitation-module', coachTopic: 'delirium',   category: 'geriatric' },
    'sjs-ten':                      { mechanismModule: 'dermatology-module',          coachTopic: 'sjs-ten',        category: 'dermatologic' },
    'heat-stroke':                  { mechanismModule: 'environmental-occupational-module', coachTopic: 'overdose', category: 'emergency' },
    'rhabdomyolysis':               { mechanismModule: 'msk-orthopedic-module',       coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'febrile-neutropenia':          { mechanismModule: 'oncology-module',             coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'neovascular-glaucoma-od':      { mechanismModule: 'ophthalmology-module',        coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'dental-ludwigs-angina':        { mechanismModule: 'oral-medicine-module',        coachTopic: 'dental-emergency-triage', category: 'dental' },
    'sci-adl-goals-ot':             { mechanismModule: 'ot-clinical-reasoning-module',coachTopic: 'ptot-goal-management', category: 'rehabilitation' },
    'musculoskeletal-back-pain':    { mechanismModule: 'pain-management-module',      coachTopic: 'pharm-opioid-risk', category: 'musculoskeletal' },
    'croup-epiglottitis-ddx':       { mechanismModule: 'pediatrics-module',           coachTopic: 'fever-peds',     category: 'pediatric' },
    'pharmacy-warfarin-cyp':        { mechanismModule: 'pharmacogenomics-module',     coachTopic: 'pharmacogenomics', category: 'pharmacology' },
    'pt-rotator-cuff-rehab':        { mechanismModule: 'pt-clinical-reasoning-module',coachTopic: 'msk-shoulder-impingement', category: 'musculoskeletal' },
    'diabetic-retinopathy-od':      { mechanismModule: 'retinal-disorders-module',    coachTopic: 'diabetic-retinopathy', category: 'ophthalmology' },
    'ot-polytrauma-tbi':            { mechanismModule: 'trauma-module',               coachTopic: 'trauma',         category: 'rehabilitation' },
    'ruptured-aaa':                 { mechanismModule: 'vascular-module',             coachTopic: 'aortic-dissection', category: 'vascular' }
  };

  // Display labels
  var COACH_LABELS = {
    'stemi':'STEMI','afib':'Atrial Fibrillation','aki':'Acute Kidney Injury',
    'allergic-rhinitis':'Allergic Rhinitis','anaphylaxis':'Anaphylaxis',
    'asthma':'Asthma','atopic-derm':'Atopic Dermatitis','meningitis':'Bacterial Meningitis',
    'copd':'COPD','drug-allergy':'Drug Allergy','hyperkalemia':'Hyperkalemia',
    'dka-endo':'DKA / HHS','eosinophilia':'Eosinophilia & HES','food-allergy':'Food Allergy',
    'gi-bleed':'GI Bleed','heart-failure':'Heart Failure','anemia':'Anemia',
    'mastocytosis':'Mastocytosis / MCAS','ectopic':'Ectopic Pregnancy','cvid':'CVID',
    'pneumonia':'Community-Acquired Pneumonia','substance-use':'Substance Use',
    'pe-pulm':'Pulmonary Embolism','sle':'SLE','seizure':'Seizures & Epilepsy',
    'sepsis-id':'Sepsis & Septic Shock','stroke-neuro':'Ischemic Stroke',
    'overdose':'Toxicology / Overdose','hae':'Hereditary Angioedema',
    'diabetes':'Diabetes Management','delirium':'Delirium','sjs-ten':'SJS / TEN',
    'falls':'Falls & Frailty','msk-red-flag-lbp':'Red Flag Back Pain',
    'optic-nerve-disorders':'Optic Nerve Disorders','leukemia-lymphoma':'Leukemia & Lymphoma',
    'glaucoma-management':'Glaucoma','dental-emergency-triage':'Dental Emergency Triage',
    'ptot-goal-management':'Goal Management','pharm-opioid-risk':'Opioid Risk',
    'fever-peds':'Pediatric Fever','pharmacogenomics':'Pharmacogenomics',
    'depression':'Depression','msk-shoulder-impingement':'Shoulder Impingement',
    'diabetic-retinopathy':'Diabetic Retinopathy','trauma':'Trauma','aortic-dissection':'Aortic Dissection'
  };

  var MODULE_LABELS = {
    'acs-module':'ACS','afib-module':'Atrial Fibrillation','heart-failure-module':'Heart Failure',
    'aki-module':'AKI','allergen-immunotherapy-module':'Allergen Immunotherapy',
    'anaphylaxis-module':'Anaphylaxis','asthma-module':'Asthma','atopic-derm-module':'Atopic Dermatitis',
    'cns-infections-gbs-module':'CNS Infections & GBS','copd-module':'COPD',
    'drug-allergy-module':'Drug Allergy','electrolytes-acidbase-module':'Electrolytes & Acid-Base',
    'endocrine-module':'Endocrine','eosinophilia-hp-module':'Eosinophilia & HP',
    'food-allergy-module':'Food Allergy','gi-hepatology-module':'GI & Hepatology',
    'hematology-module':'Hematology','mastocytosis-mcas-module':'Mastocytosis & MCAS',
    'ob-module':'Obstetrics','pid-module':'Primary Immunodeficiency',
    'pneumonia-module':'Pneumonia','psychiatry-module':'Psychiatry',
    'pulmonary-module':'Pulmonary','rheumatology-module':'Rheumatology',
    'rhinitis-module':'Rhinitis','seizures-epilepsy-module':'Seizures & Epilepsy',
    'sepsis-module':'Sepsis','stroke-module':'Stroke','toxicology-module':'Toxicology',
    'urticaria-module':'Urticaria & Angioedema','ai-diagnostic-methods-module':'A/I Diagnostic Methods',
    'clinic-ambulatory-module':'Ambulatory Reasoning','mcat-biochemistry-module':'Biochemistry',
    'cognitive-rehabilitation-module':'Cognitive Rehabilitation','dermatology-module':'Dermatology',
    'environmental-occupational-module':'Environmental Medicine','msk-orthopedic-module':'MSK & Orthopedics',
    'oncology-module':'Oncology','ophthalmology-module':'Ophthalmology',
    'oral-medicine-module':'Oral Medicine','ot-clinical-reasoning-module':'OT Clinical Reasoning',
    'pain-management-module':'Pain Management','pediatrics-module':'Pediatrics',
    'pharmacogenomics-module':'Pharmacogenomics','psychiatric-pharmacotherapy-module':'Psychiatric Pharmacotherapy',
    'pt-clinical-reasoning-module':'PT Clinical Reasoning','retinal-disorders-module':'Retinal Disorders',
    'trauma-module':'Trauma','vascular-module':'Vascular','neuro-ophthalmology-module':'Neuro-Ophthalmology',
    'neurologic-rehabilitation-module':'Neurologic Rehabilitation','geriatrics-module':'Geriatrics'
  };

  // ──────────────────────────────────────────────────────────────
  // Resolve current case from URL
  // Supports: ?case=<slug>, ?cx=<token>
  // ──────────────────────────────────────────────────────────────
  function resolveCaseId() {
    var p = new URLSearchParams(window.location.search);
    var slug = p.get('case');
    if (slug) return slug;
    var tk = p.get('cx');
    if (tk && window.RDX_CASE_TOKENS && window.RDX_CASE_TOKENS.tokenToSlug) {
      return window.RDX_CASE_TOKENS.tokenToSlug[tk] || null;
    }
    return null;
  }

  // ──────────────────────────────────────────────────────────────
  // Build and inject UI
  // ──────────────────────────────────────────────────────────────
  function injectUI() {
    if (document.getElementById('rdx-pillar-fab')) return;
    var caseId = resolveCaseId();
    if (!caseId) return; // no case loaded yet
    var pillars = CASE_TO_PILLARS[caseId];
    if (!pillars) return; // case not in map; skip silently

    var mechLabel  = MODULE_LABELS[pillars.mechanismModule] || 'Pathophysiology';
    var coachLabel = COACH_LABELS[pillars.coachTopic] || 'this case';

    // FAB
    var fab = document.createElement('button');
    fab.id = 'rdx-pillar-fab';
    fab.setAttribute('aria-label', 'Switch pillars');
    fab.title = 'Switch to MechanismDx, CoachDx, or related cases';
    fab.innerHTML = '<span style="font-size:18px;line-height:1">⇄</span>';
    fab.style.cssText = [
      'position:fixed','bottom:24px','left:24px','width:48px','height:48px',
      'border-radius:50%','background:#2874A6','color:#fff','border:none',
      'cursor:pointer','box-shadow:0 4px 16px rgba(0,0,0,.25)','z-index:9000',
      'display:flex','align-items:center','justify-content:center',
      'font-family:inherit','transition:transform .15s, background .15s'
    ].join(';');
    fab.onmouseover = function() { fab.style.background = '#1B4F72'; fab.style.transform = 'scale(1.05)'; };
    fab.onmouseout  = function() { fab.style.background = '#2874A6'; fab.style.transform = 'scale(1)'; };

    // Popover
    var pop = document.createElement('div');
    pop.id = 'rdx-pillar-pop';
    pop.style.cssText = [
      'position:fixed','bottom:84px','left:24px','width:280px',
      'background:#fff','border-radius:14px','box-shadow:0 12px 40px rgba(0,0,0,.18)',
      'padding:14px','z-index:9001','display:none','flex-direction:column','gap:8px',
      'border:1px solid rgba(0,0,0,.06)','font-family:inherit',
      'animation:rdxPillarPopIn .18s ease-out'
    ].join(';');

    // Animation keyframes (one-time)
    if (!document.getElementById('rdx-pillar-style')) {
      var st = document.createElement('style');
      st.id = 'rdx-pillar-style';
      st.textContent = [
        '@keyframes rdxPillarPopIn { from { opacity:0; transform:translateY(6px) } to { opacity:1; transform:translateY(0) } }',
        '#rdx-pillar-pop a { display:flex; align-items:flex-start; gap:10px; padding:10px 12px; border-radius:10px; text-decoration:none; color:#1E293B; transition:background .12s; }',
        '#rdx-pillar-pop a:hover { background:#F0F6FC; }',
        '#rdx-pillar-pop .rdx-pp-title { font-size:13px; font-weight:700; line-height:1.3; color:#1B4F72; }',
        '#rdx-pillar-pop .rdx-pp-sub { font-size:11.5px; color:#64748B; line-height:1.4; margin-top:2px; }',
        '#rdx-pillar-pop .rdx-pp-icon { font-size:20px; flex-shrink:0; margin-top:1px; }',
        '#rdx-pillar-pop .rdx-pp-header { font-size:10.5px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:#94A3B8; padding:2px 12px 6px; border-bottom:1px solid #F1F5F9; margin-bottom:4px; }',
        '@media (max-width:480px) {',
        '  #rdx-pillar-pop { width:calc(100vw - 32px); left:16px; bottom:80px; }',
        '  #rdx-pillar-fab { bottom:16px; left:16px; }',
        '}'
      ].join('\n');
      document.head.appendChild(st);
    }

    var caseLabel = caseId.replace(/-/g,' ').replace(/\b\w/g, function(c){ return c.toUpperCase(); });

    var returnUrl = encodeURIComponent(window.location.pathname + window.location.search);
    var mechHref  = '/mechanism/' + pillars.mechanismModule + '.html?return=virtual-emr&case=' + encodeURIComponent(caseId);
    var coachHref = '/CoachDx/mentor-chat.html?topic=' + encodeURIComponent(coachLabel) + '&ref=virtual-emr&caseId=' + encodeURIComponent(caseId);
    var browseHref= '/browse.html?cat=' + encodeURIComponent(pillars.category) + '&exclude=' + encodeURIComponent(caseId);

    pop.innerHTML = [
      '<div class="rdx-pp-header">Currently in: ' + caseLabel + '</div>',
      '<a href="' + mechHref + '">',
      '  <div class="rdx-pp-icon">🔬</div>',
      '  <div>',
      '    <div class="rdx-pp-title">Review the mechanism</div>',
      '    <div class="rdx-pp-sub">MechanismDx: ' + mechLabel + '</div>',
      '  </div>',
      '</a>',
      '<a href="' + coachHref + '">',
      '  <div class="rdx-pp-icon">🧠</div>',
      '  <div>',
      '    <div class="rdx-pp-title">Ask the coach</div>',
      '    <div class="rdx-pp-sub">CoachDx: ' + coachLabel + '</div>',
      '  </div>',
      '</a>',
      '<a href="' + browseHref + '">',
      '  <div class="rdx-pp-icon">📋</div>',
      '  <div>',
      '    <div class="rdx-pp-title">Try a related case</div>',
      '    <div class="rdx-pp-sub">More ' + (pillars.category || 'similar') + ' cases</div>',
      '  </div>',
      '</a>'
    ].join('');

    document.body.appendChild(fab);
    document.body.appendChild(pop);

    // Toggle behavior
    fab.addEventListener('click', function(e) {
      e.stopPropagation();
      var open = pop.style.display === 'flex';
      pop.style.display = open ? 'none' : 'flex';
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (pop.style.display !== 'flex') return;
      if (!pop.contains(e.target) && e.target !== fab && !fab.contains(e.target)) {
        pop.style.display = 'none';
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && pop.style.display === 'flex') pop.style.display = 'none';
    });
  }

  // Wait for DOM ready, then for the case to be resolved (URL might be rewritten async)
  function init() {
    // Try immediately, then again after URL token resolution (1.5s)
    setTimeout(injectUI, 600);
    setTimeout(injectUI, 1800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
