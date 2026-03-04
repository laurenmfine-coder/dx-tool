/* js/procedure-sim-data.js — A/I Procedure Lab: Guideline-Based Protocol Builder
 * Architecture: Learner selects a published source → answers are scored against that source.
 * Multiple valid protocol variants are supported per module.
 * All citations are open-access or freely available.
 */
(function(){
'use strict';

// ═══════════════════════════════════════════════════════════════════════
// SHARED CITATION LIBRARY
// ═══════════════════════════════════════════════════════════════════════
var CITATIONS = {
  'aaaai-diag-2008': {
    id: 'aaaai-diag-2008',
    short: 'AAAAI/ACAAI Allergy Diagnostic Testing PP (2008)',
    full: 'Bernstein IL et al. Allergy diagnostic testing: an updated practice parameter. Ann Allergy Asthma Immunol. 2008;100(3 Suppl 3):S1-148.',
    url: 'https://www.aaaai.org/aaaai/media/medialibrary/pdf%20documents/practice%20and%20parameters/allergy-diagnostic-testing-an-updated-practice-parameter.pdf',
    note: 'Free — AAAAI.org'
  },
  'aaaai-ofc-2020': {
    id: 'aaaai-ofc-2020',
    short: 'AAAAI Work Group: Conducting an OFC (2020)',
    full: 'Shaker MS, et al. Conducting an Oral Food Challenge: An Update to the 2009 Adverse Reactions to Foods Committee Work Group Report. J Allergy Clin Immunol Pract. 2020;8(1):75-90.e17.',
    url: 'https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Jan-2020-Conducting-an-Oral-Food-Challenge.pdf',
    note: 'Free — AAAAI.org'
  },
  'practall-2024': {
    id: 'practall-2024',
    short: 'AAAAI–EAACI PRACTALL: Standardizing OFCs (2024)',
    full: 'Sampson HA, et al. AAAAI–EAACI PRACTALL: Standardizing oral food challenges—2024 Update. J Allergy Clin Immunol. 2024.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39560049/',
    note: 'Free abstract — PubMed; full text via institutional access'
  },
  'aaaai-aerd-2021': {
    id: 'aaaai-aerd-2021',
    short: 'AAAAI Work Group: Aspirin Desensitization in AERD (2021)',
    full: 'White AA, et al. The role of aspirin desensitization followed by oral aspirin therapy in managing patients with aspirin-exacerbated respiratory disease. J Allergy Clin Immunol. 2021;147(3):827-844.',
    url: 'https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/PIIS0091674920317085.pdf',
    note: 'Free — AAAAI.org'
  },
  'cahill-2019': {
    id: 'cahill-2019',
    short: 'Cahill & Laidlaw: 1-Day 90-Min Aspirin Protocol (2019)',
    full: 'Cahill KN, Laidlaw TM. A 1-Day, 90-Minute Aspirin Challenge and Desensitization Protocol in Aspirin-Exacerbated Respiratory Disease. J Allergy Clin Immunol Pract. 2019;7(4):1174-1180.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6456426/',
    note: 'Free — PubMed Central'
  },
  'drug-allergy-2022': {
    id: 'drug-allergy-2022',
    short: 'AAAAI/ACAAI Drug Allergy Practice Parameter (2022)',
    full: 'Khan DA, et al. Drug Allergy: A 2022 Practice Parameter Update. J Allergy Clin Immunol. 2022;150(6):1333-1393.',
    url: 'https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Drug-Allergy-PP-9-2022.pdf',
    note: 'Free — AAAAI.org'
  },
  'pen-position-2023': {
    id: 'pen-position-2023',
    short: 'AAAAI Penicillin Allergy Position Statement (2023)',
    full: 'AAAAI Position Statement: Penicillin Allergy Evaluation Should Be Performed. 2023.',
    url: 'https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Penicillin-Allergy-Position-Statement_Approved-08-31-2023.pdf',
    note: 'Free — AAAAI.org'
  },
  'crswnp-grade-2022': {
    id: 'crswnp-grade-2022',
    short: 'AAAAI/ACAAI GRADE Guidelines: CRSwNP (2022)',
    full: 'Rank MA, et al. GRADE guidelines for the medical management of chronic rhinosinusitis with nasal polyposis. J Allergy Clin Immunol. 2023;151(2):386-398.',
    url: 'https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/The-Joint-Task-Force-on-Practice-Parameters-GRADE-guidelines-for-the-medical-management-of-chronic-rhinosinusitis-with-nasal-polyposis.pdf',
    note: 'Free — AAAAI.org'
  }
};

// ═══════════════════════════════════════════════════════════════════════
// SKIN TESTING MODULE
// ═══════════════════════════════════════════════════════════════════════
var SKIN_SCENARIOS = [
  {
    id: 'env-rhinitis',
    patient: {
      name: 'Derek Patel', age: '32M',
      cc: 'Chronic nasal congestion, sneezing, itchy eyes × 3 years. Worse in spring and fall. Cat at home. Failed OTC antihistamines.'
    },
    history: 'No asthma. No drug allergies. No prior allergy testing. Works in an office environment. Symptoms are year-round but peak March–May and September–October.',
    task: 'Build an appropriate skin prick test panel for this patient. Select allergens, interpret results, and identify the positive threshold.',
    // Learner selects reference sources from this list
    availableSources: ['aaaai-diag-2008'],
    // Protocol variants keyed by sourceId
    protocols: {
      'aaaai-diag-2008': {
        positiveThreshold: '3mm',
        thresholdExplanation: 'Positive SPT = wheal ≥3 mm greater than the negative (saline) control, measured as the mean of the two longest perpendicular diameters.',
        controlsRequired: ['histamine','saline'],
        controlsRationale: 'Histamine (positive control) confirms skin reactivity; saline (negative control) establishes baseline and detects dermatographism. Both are mandatory.',
        recommendedPanel: ['histamine','saline','dust-mite','cat','dog','tree-mix','grass-mix','ragweed','mold-mix','cockroach'],
        panelRationale: 'Panel is guided by history. Year-round perennial symptoms + seasonal peaks → perennial allergens (dust mite, cat, dog, mold, cockroach) + seasonal (tree, grass, ragweed). Food allergens are NOT indicated for isolated rhinitis symptoms — testing without a history of IgE-mediated food reactions leads to false positives and overdiagnosis.',
        foodAllergenWarning: 'Food allergen testing without a food allergy history is not supported by AAAAI/ACAAI guidelines and risks misclassification.',
        keyPrinciples: [
          'Always include both controls before interpreting any allergen results.',
          'Panel selection must be driven by clinical history — avoid untargeted screening panels.',
          'A positive SPT indicates IgE sensitization, not necessarily clinical allergy; results must be interpreted in context.',
          'Intradermal testing is NOT recommended for inhalant allergen evaluation in routine practice.'
        ]
      }
    },
    // Actual SPT results for this patient (shown after panel selection)
    results: {
      'histamine':  {w:5,  f:15, pos:true,  ctrl:true},
      'saline':     {w:0,  f:0,  pos:false, ctrl:true},
      'dust-mite':  {w:8,  f:22, pos:true},
      'cat':        {w:12, f:30, pos:true},
      'dog':        {w:3,  f:8,  pos:false},
      'tree-mix':   {w:7,  f:18, pos:true},
      'grass-mix':  {w:6,  f:16, pos:true},
      'ragweed':    {w:10, f:25, pos:true},
      'mold-mix':   {w:4,  f:10, pos:true},
      'cockroach':  {w:2,  f:5,  pos:false},
      'peanut':     {w:0,  f:0,  pos:false},
      'milk':       {w:0,  f:0,  pos:false},
      'egg-white':  {w:0,  f:0,  pos:false},
      'wheat':      {w:0,  f:0,  pos:false},
      'soy':        {w:0,  f:0,  pos:false},
      'shellfish':  {w:0,  f:0,  pos:false},
      'latex':      {w:0,  f:0,  pos:false},
      'penicillin': {w:0,  f:0,  pos:false}
    }
  },
  {
    id: 'food-allergy-peds',
    patient: {
      name: 'Olivia Nguyen', age: '4F',
      cc: 'Hives and vomiting 30 min after scrambled eggs at age 2. Avoiding all egg since. Tolerates baked goods containing egg. Referred for possible food challenge evaluation.'
    },
    history: 'No prior allergy testing. Tolerates cake and muffins with egg. No other suspected food allergies. Mild eczema, controlled with emollients. No asthma.',
    task: 'Design an appropriate SPT panel for this patient. Consider component allergens where clinically relevant.',
    availableSources: ['aaaai-diag-2008'],
    protocols: {
      'aaaai-diag-2008': {
        positiveThreshold: '3mm',
        thresholdExplanation: 'Positive SPT = wheal ≥3 mm greater than the negative (saline) control.',
        controlsRequired: ['histamine','saline'],
        controlsRationale: 'Controls are mandatory before any allergen interpretation.',
        recommendedPanel: ['histamine','saline','egg-white','egg-yolk','ovomucoid','milk','peanut'],
        panelRationale: 'History of IgE-mediated egg reaction → egg panel is appropriate. Ovomucoid (Gal d 1) is heat-stable; negativity correlates with baked egg tolerance but does not replace oral food challenge for confirmation. Milk and peanut testing appropriate given frequent co-sensitization in pediatric eczema/egg allergy. Environmental allergens not indicated without respiratory or rhinitis symptoms.',
        componentNote: 'Ovomucoid (Gal d 1) is the heat-stable egg white component. A negative ovomucoid result suggests possible baked egg tolerance, but OFC remains the gold standard to confirm. Do not advise baked egg introduction without challenge confirmation.',
        keyPrinciples: [
          'Component testing adds clinical nuance but does not replace OFC for definitive diagnosis.',
          'Test only foods supported by clinical history — do not screen with broad food panels.',
          'A positive test indicates sensitization; clinical allergy is confirmed by history or challenge.',
          'Shared decision-making with the family is essential before proceeding to OFC.'
        ]
      }
    },
    results: {
      'histamine':  {w:4,  f:12, pos:true,  ctrl:true},
      'saline':     {w:0,  f:0,  pos:false, ctrl:true},
      'egg-white':  {w:5,  f:14, pos:true},
      'egg-yolk':   {w:2,  f:4,  pos:false},
      'ovomucoid':  {w:2,  f:5,  pos:false},
      'milk':       {w:0,  f:0,  pos:false},
      'peanut':     {w:0,  f:0,  pos:false},
      'dust-mite':  {w:3,  f:8,  pos:true},
      'cat':        {w:0,  f:0,  pos:false},
      'dog':        {w:0,  f:0,  pos:false},
      'tree-mix':   {w:0,  f:0,  pos:false},
      'grass-mix':  {w:2,  f:4,  pos:false},
      'ragweed':    {w:0,  f:0,  pos:false},
      'wheat':      {w:0,  f:0,  pos:false},
      'soy':        {w:0,  f:0,  pos:false},
      'shellfish':  {w:0,  f:0,  pos:false},
      'latex':      {w:0,  f:0,  pos:false},
      'penicillin': {w:0,  f:0,  pos:false}
    }
  }
];

// ═══════════════════════════════════════════════════════════════════════
// OFC MODULE
// ═══════════════════════════════════════════════════════════════════════
var OFC_SCENARIOS = [
  {
    id: 'peanut-ofc',
    patient: {
      name: 'Jayden Park', age: '8M',
      cc: 'Peanut allergy diagnosed age 3. SPT 6mm wheal. sIgE peanut 8.5 kUA/L; Ara h 2: 3.2 kUA/L. Last reaction: hives only, age 3. Parents requesting re-evaluation — asking whether he may have outgrown the allergy.'
    },
    history: 'No reactions since age 3. Well-controlled environment. No other food allergies. No asthma. No eczema currently. Antihistamines last taken 6 days ago.',
    task: 'Design a peanut oral food challenge protocol for this patient. Select your reference source, then build the protocol: food vehicle, dose series, intervals, monitoring duration, and required safety preparations.',
    availableSources: ['aaaai-ofc-2020', 'practall-2024'],
    protocols: {
      'aaaai-ofc-2020': {
        vehicle: 'Defatted peanut flour (or peanut butter) in a disguising vehicle',
        vehicleRationale: 'Peanut flour standardizes protein delivery. Peanut butter is acceptable when protein content is verified. Vehicle (applesauce, pudding) masks flavor and texture.',
        doses: ['1mg','3mg','10mg','30mg','100mg','300mg','1000mg','3000mg'],
        doseRationale: 'Semi-logarithmic incremental dosing based on peanut protein content. 8-dose protocol per Bird et al. (referenced in AAAAI 2020 WG). Starting at 1mg minimizes severe early reactions.',
        interval: '20–30 min between doses',
        intervalRationale: 'Allows adequate time to observe objective symptoms before each dose escalation.',
        postFinalMonitoring: '≥2 hours after the final dose',
        monitoringRationale: 'Delayed reactions can occur; 2-hour minimum observation post-final dose is required regardless of outcome.',
        safetyPrep: [
          'IV or IM access established before starting',
          'Epinephrine (weight-based dose) drawn up and immediately available',
          'H1 antihistamine available',
          'H2 antihistamine available',
          'Albuterol MDI available',
          'Systemic corticosteroid available',
          'Resuscitation equipment present',
          'Physician immediately available throughout'
        ],
        preChallengeCriteria: [
          'Patient is well on the day of challenge (no active illness)',
          'Asthma well-controlled if present (spirometry if indicated)',
          'Antihistamines held ≥5–7 days prior',
          'No exercise within 2 hours of challenge',
          'Informed consent documented'
        ],
        stoppingCriteria: {
          objective: 'Stop and treat: ≥2 urticarial lesions, angioedema, vomiting, wheezing, stridor, persistent cough, hypotension, altered consciousness',
          subjective: 'Subjective-only symptoms (e.g., oral tingling without objective signs) require clinical judgment — do not escalate without reassessment'
        },
        keyPrinciples: [
          'Ara h 2 ≥0.35 kUA/L is the strongest single predictor of clinical peanut reactivity (higher levels increase probability but do not preclude challenge in appropriate clinical context).',
          'OFC is the gold standard for confirming or ruling out food allergy — SPT and sIgE alone cannot determine clinical reactivity.',
          'Epinephrine is the first-line treatment for anaphylaxis — antihistamines are adjunctive only.',
          'Corticosteroids are adjunctive and do not replace epinephrine for anaphylaxis management.'
        ]
      },
      'practall-2024': {
        vehicle: 'Defatted peanut flour in a disguising vehicle',
        vehicleRationale: 'PRACTALL 2024 recommends protein-standardized vehicles. Peanut flour allows precise protein dosing.',
        doses: ['3mg','10mg','30mg','100mg','300mg','1000mg','3000mg'],
        doseRationale: 'PRACTALL 2024 recommends semi-logarithmic incremental dosing. A 30mg starting dose is acceptable for clinical (non-research) OFC where threshold precision is less critical. Research settings may use lower starting doses (1–3mg) to better define NOAEL/LOAEL.',
        interval: '20–30 min between doses',
        intervalRationale: 'PRACTALL 2024: 20–30 min intervals for IgE-mediated food allergy protocols.',
        postFinalMonitoring: '≥2 hours after the final dose',
        monitoringRationale: 'Standard minimum observation period following final dose.',
        safetyPrep: [
          'Epinephrine immediately available (weight-based dosing)',
          'IV or IM access',
          'H1 antihistamine available',
          'Albuterol MDI available',
          'Resuscitation equipment and physician present'
        ],
        preChallengeCriteria: [
          'Patient well on day of challenge',
          'Antihistamines held per protocol',
          'Asthma controlled',
          'Informed consent documented'
        ],
        stoppingCriteria: {
          objective: 'Stop and treat: objective signs of allergic reaction (urticaria, angioedema, vomiting, bronchospasm, hypotension, anaphylaxis)',
          subjective: 'Subjective symptoms alone require clinical reassessment before dose escalation'
        },
        keyPrinciples: [
          'PRACTALL 2024 distinguishes research OFC (lower starting doses for threshold definition) from clinical OFC (higher starting dose acceptable when threshold precision not required).',
          'Semi-logarithmic dosing approximates population-based dose distributions for peanut-allergic individuals.',
          'OFC remains the gold standard for food allergy diagnosis and evaluation of tolerance development.'
        ]
      }
    }
  }
];

// ═══════════════════════════════════════════════════════════════════════
// DESENSITIZATION MODULE
// ═══════════════════════════════════════════════════════════════════════
var DESENS_SCENARIOS = [
  {
    id: 'aspirin-aerd',
    patient: {
      name: 'Vanessa Takahashi', age: '38F',
      cc: 'AERD (aspirin-exacerbated respiratory disease): asthma, nasal polyposis, and respiratory reactions to NSAIDs. Recurrent polyps despite 2 prior sinus surgeries. Referred for aspirin desensitization evaluation.'
    },
    history: 'FEV1 82% predicted (stable). On fluticasone/salmeterol, montelukast 10mg daily (ongoing ×3 weeks). No beta-blocker use. No pregnancy. Last polypectomy 6 months ago; polyps already recurring. No GI ulcer history. No bleeding disorder.',
    task: 'Design an aspirin desensitization protocol for this patient. Select your reference source, then build the protocol: doses, intervals, monitoring parameters, stop/hold criteria, maintenance dose, and required pre-procedure optimization.',
    availableSources: ['aaaai-aerd-2021', 'cahill-2019', 'drug-allergy-2022'],
    protocols: {
      'aaaai-aerd-2021': {
        settingOptions: ['Monitored allergy clinic','Hospital inpatient'],
        settingRationale: 'AAAAI 2021 WG: Desensitization must occur in a monitored setting with access to emergency management. Not suitable for standard outpatient or home.',
        preProcedureRequirements: [
          'FEV1 ≥70% predicted AND ≥1.5 L (prebronchodilator)',
          'Asthma stable — no exacerbation, hospitalization, or ED visit in prior 6 weeks',
          'Leukotriene modifier (montelukast or zileuton) on board for ≥1–2 weeks prior',
          'No beta-blockers (impairs epinephrine response to reactions)',
          'Antihistamines discontinued 1 week before procedure (may mask early reaction symptoms)',
          'Inhaled corticosteroids and LABAs continued',
          'No active GI ulcer or bleeding disorder',
          'Informed consent documented'
        ],
        dayOneDoses: ['20.25mg','40.5mg','81mg','162.5mg'],
        dayOneRationale: 'Traditional protocol starting at sub-threshold doses. Multiple published protocols exist; starting doses vary by center. Reactions commonly occur in the 60–162mg range.',
        interval: '90 min between doses (traditional protocol)',
        intervalRationale: 'AAAAI 2021 WG cites traditional 3-hour and newer 90-minute protocols. 90-minute is supported by evidence (Cahill 2019) and endorsed in the Work Group Report.',
        monitoringParameters: [
          'FEV1 (spirometry) before each dose',
          'Vital signs every 30 min',
          'Naso-ocular symptom assessment before each dose',
          'Lower respiratory symptoms assessed continuously'
        ],
        holdCriteria: 'FEV1 decline ≥20% from baseline, or significant naso-ocular reaction: treat at same dose, repeat dose when stabilized',
        stopCriteria: 'Severe bronchospasm not responsive to albuterol; FEV1 decline ≥20% with failure to respond to treatment; anaphylaxis',
        maintenanceOptions: ['325mg BID (650mg/day total)', '650mg BID (1300mg/day) — used at some centers'],
        maintenanceRationale: 'Aspirin therapy after desensitization (ATAD) must continue indefinitely without interruption. If >48 hours is missed, re-desensitization is required before resuming high-dose aspirin.',
        keyPrinciples: [
          'Aspirin desensitization is a TREATMENT for AERD, not a diagnostic test — the diagnosis should be established before proceeding.',
          'Leukotriene modifiers (montelukast, zileuton) reduce reaction severity during desensitization and should be continued throughout.',
          'Beta-blockers are a contraindication — they impair the epinephrine response needed to treat reactions.',
          'The precise mechanism of ATAD benefit is not fully established; chronic COX-1 inhibition is the proposed mechanism but the cellular basis remains an active area of research.',
          'AAAAI/ACAAI GRADE 2022 guidelines conditionally recommend ATAD over no ATAD for CRSwNP with AERD (moderate certainty), with shared decision-making regarding GI risks and biologic alternatives.'
        ]
      },
      'cahill-2019': {
        settingOptions: ['Outpatient monitored allergy clinic (1-day protocol)'],
        settingRationale: 'Cahill & Laidlaw (JACI-IP 2019): 93% of patients completed desensitization in 1 day using the 90-minute protocol. Appropriate for outpatient monitored allergy clinic.',
        preProcedureRequirements: [
          'FEV1 ≥70% predicted (baseline prebronchodilator)',
          'Stable asthma — no hospitalization or ED visit for asthma in prior 6 months',
          'Montelukast 10mg daily for ≥2 weeks before challenge',
          'Stable asthma treatment regimen for ≥4 weeks',
          'No beta-blockers',
          'Informed consent'
        ],
        dayOneDoses: ['40.5mg','81mg','162.5mg','325mg'],
        dayOneRationale: 'Cahill 2019 protocol: starting dose 40.5mg, escalating at 90-min intervals to 81 → 162.5 → 325mg. At provocative dose: treat, then repeat same dose. Once patient tolerates repeated provocative dose + 1 subsequent dose reaching ≥325mg cumulative, desensitization is complete.',
        interval: '90 min between doses',
        intervalRationale: 'Cahill 2019: 90-min escalation. Average protocol completion time 9.5 hours. 93% completed in 1 day.',
        monitoringParameters: [
          'FEV1 before each dose',
          'TNSS (Total Nasal Symptom Score) every 30 min after provocation',
          'Vital signs throughout',
          'Continuous symptom assessment'
        ],
        holdCriteria: 'Reaction provoked → treat at provocative dose, observe 3 hours post-reaction, then repeat provocative dose to confirm tolerance',
        stopCriteria: 'Severe bronchospasm unresponsive to treatment; anaphylaxis; GI symptoms preventing continuation',
        maintenanceOptions: ['325mg BID (650mg/day) — standard maintenance'],
        maintenanceRationale: 'Maintenance must be taken daily without >48-hour interruption. If lapsed, re-desensitization required.',
        keyPrinciples: [
          'Cahill 2019 defines desensitization as tolerating the repeated provocative dose plus at least 1 subsequent dose, reaching ≥325mg cumulative on day 1.',
          'Reactions are expected and manageable — they are part of the desensitization process, not treatment failures.',
          'This protocol is supported by prospective data at Brigham and Women\'s Hospital (n=44); 93% completed in 1 day without hospitalization or epinephrine use.',
          'Patients with FEV1 <70% have been desensitized with this protocol at some centers, but the published eligibility criterion is ≥70%.'
        ]
      },
      'drug-allergy-2022': {
        settingOptions: ['Monitored allergy clinic', 'Hospital (if higher risk)'],
        settingRationale: 'Drug Allergy 2022 PP: Aspirin desensitization requires monitored setting. Protocol selection is individualized based on patient risk factors.',
        preProcedureRequirements: [
          'Stable asthma with FEV1 ≥70%',
          'No beta-blockers',
          'Leukotriene modifier on board',
          'No active GI ulcer or bleeding disorder',
          'Informed consent with discussion of GI risk of long-term aspirin, biologic alternatives, and shared decision-making'
        ],
        dayOneDoses: ['Multiple protocols accepted — institutional variation is recognized'],
        dayOneRationale: 'Drug Allergy 2022 PP acknowledges that "several different protocols for aspirin desensitization exist" and does not mandate a single dose sequence. Center-specific validated protocols are appropriate.',
        interval: 'Varies by protocol (90 min to 3 hours documented)',
        intervalRationale: '2022 PP does not prescribe a specific interval; defers to institutional protocols supported by published evidence.',
        monitoringParameters: [
          'FEV1 monitoring',
          'Symptom assessment',
          'Vital signs'
        ],
        holdCriteria: 'Per institutional protocol and clinical judgment',
        stopCriteria: 'Severe bronchospasm, anaphylaxis, or inability to tolerate continued escalation',
        maintenanceOptions: ['325mg BID', '650mg BID — per individual response and tolerance'],
        maintenanceRationale: 'Daily aspirin must be maintained indefinitely. 2022 PP notes ATAD is conditionally recommended by the GRADE CRSwNP guidelines and that biologics may be preferred in certain patients (high GI risk, preference for fewer daily medications).',
        keyPrinciples: [
          '2022 PP: Aspirin desensitization followed by aspirin therapy can control nasal polyp regrowth and allow aspirin use for cardioprotection or NSAID analgesia.',
          'In patients with high GI risk or who prefer the most efficacious therapy without a strict daily oral regimen, biologics may be preferred over ATAD.',
          'An aspirin challenge is NOT required to confirm AERD diagnosis when clinical history is unambiguous (classic triad + documented NSAID reactions).',
          'Aspirin desensitization is contraindicated during pregnancy, with active GI ulcers, or with bleeding disorders.'
        ]
      }
    }
  },

  {
    id: 'penicillin-delabel',
    patient: {
      name: 'Patricia O\'Brien', age: '58F',
      cc: 'Reported penicillin allergy since childhood — "had a rash." No further details available. Needs aortic valve replacement; surgeon requesting cefazolin prophylaxis. Currently listed as penicillin-allergic in EMR.'
    },
    history: 'No history of anaphylaxis, angioedema, or severe cutaneous reaction. Reaction was >40 years ago. Has since received cephalexin for a UTI 5 years ago without adverse event. No prior allergist evaluation.',
    task: 'Design a penicillin allergy evaluation and de-labeling plan for this patient. Select your reference source, then determine: risk stratification, evaluation approach (skin test vs. direct challenge vs. history alone), challenge agent and dose, observation period, and EMR documentation.',
    availableSources: ['drug-allergy-2022', 'pen-position-2023'],
    protocols: {
      'drug-allergy-2022': {
        riskStratification: 'Low risk',
        riskRationale: 'Remote (>40 year) history, benign reaction (rash only — not anaphylaxis, angioedema, or immediate urticaria), no recent exposure, prior cephalosporin tolerance. This profile does not suggest IgE-mediated reaction.',
        approachOptions: [
          {
            name: 'Direct oral amoxicillin challenge (preferred for low-risk adults)',
            description: 'Single-dose oral amoxicillin challenge without preceding skin testing. Preferred approach per 2022 PP for adults with remote, benign penicillin reaction history.',
            steps: [
              'Confirm low-risk history (remote, benign, non-IgE-type)',
              'Administer amoxicillin single treatment dose (500mg or full therapeutic dose)',
              'Observe for ≥60 minutes post-dose',
              'If no reaction → de-label penicillin allergy in EMR',
              'Document de-labeling with clinical rationale'
            ]
          },
          {
            name: 'Penicillin skin test (reserved for higher-risk histories)',
            description: 'Skin testing is best reserved for patients with history of anaphylaxis or recent IgE-suspected reaction (immediate urticaria). Not required for this patient\'s profile.',
            steps: [
              'Penicilloyl-polylysine (Pre-Pen/PPL) — major determinant',
              'Penicillin G (minor determinant — note: MDM not commercially available in US)',
              'If skin test negative → oral amoxicillin challenge',
              'If skin test positive → individualized management'
            ]
          },
          {
            name: 'De-label by history alone (for inconsistent histories)',
            description: 'Patients with histories clearly inconsistent with penicillin allergy (e.g., family history only, GI side effect, headache) may be de-labeled without testing. Not applicable here — a rash history warrants at minimum a direct challenge.',
            steps: [
              'Confirm history is clearly non-allergic (e.g., side effect, family report only)',
              'Counsel patient',
              'De-label in EMR with documented rationale'
            ]
          }
        ],
        recommendedApproach: 'Direct oral amoxicillin challenge (without prior skin testing)',
        challengeAgent: 'Amoxicillin',
        challengeDose: 'Single full treatment dose (500mg, or 250mg is also supported)',
        observationPeriod: '≥60 min post-dose',
        cefazolinNote: 'This patient already tolerated cephalexin. Per 2022 PP: for patients with a history of non-immediate, non-anaphylactic penicillin reactions, cefazolin can typically be administered directly without prior evaluation — cefazolin shares no side chain with amoxicillin/ampicillin and has a very low cross-reactivity risk.',
        emrDocumentation: [
          'Document de-labeling in allergy section with rationale',
          'Note date of challenge, agent, dose, observation result',
          'Inform patient they are no longer labeled penicillin-allergic',
          'Advise patient that future reactions to any antibiotic should still be reported'
        ],
        keyPrinciples: [
          '2022 PP: Direct oral amoxicillin challenge is the preferred approach for most low-risk adults with benign, remote penicillin allergy histories — skin testing is no longer the default.',
          'Skin testing is best reserved for anaphylaxis history or recent suspected IgE-mediated reactions.',
          'Patients with histories inconsistent with allergy (headache, GI upset, family report) may be de-labeled by history alone.',
          '>90% of penicillin-allergic labeled patients are not truly allergic — de-labeling improves antibiotic stewardship, reduces healthcare costs, and prevents use of broader-spectrum, more toxic alternatives.',
          'Contraindications to evaluation: history of Stevens-Johnson Syndrome, TEN, or DRESS — these patients should NOT be challenged.'
        ]
      },
      'pen-position-2023': {
        riskStratification: 'Low risk — consistent with PEN-FAST score ≤2',
        riskRationale: 'AAAAI 2023 Position Statement: Remote reaction (>5 years), benign cutaneous (not anaphylaxis), prior cephalosporin tolerance without reaction. PEN-FAST is a validated low-risk stratification tool.',
        approachOptions: [
          {
            name: 'Direct oral amoxicillin challenge (preferred)',
            description: 'Direct challenge without skin testing — recommended for low-risk pediatric and adult patients. Addresses both penicillin re-labeling prevention and antibiotic stewardship goals.',
            steps: [
              'Confirm low-risk by history (PEN-FAST or clinical assessment)',
              'Administer single-dose oral amoxicillin',
              'Observe ≥60 minutes',
              'If negative → de-label and update EMR'
            ]
          },
          {
            name: 'Penicillin skin testing (higher-risk patients)',
            description: 'More commonly used for patients with anaphylaxis history or recent IgE-suspected reactions. Rate of positive skin tests has been declining since the 1990s.',
            steps: [
              'PPL (Pre-Pen) — major determinant',
              'Penicillin G as minor determinant (MDM not available in US)',
              'If negative → oral challenge',
              'If positive → individualized management'
            ]
          }
        ],
        recommendedApproach: 'Direct oral amoxicillin challenge',
        challengeAgent: 'Amoxicillin',
        challengeDose: 'Single treatment dose',
        observationPeriod: '≥60 min post-dose',
        cefazolinNote: '2023 Position Statement: Penicillin evaluation should be offered proactively, including prior to surgeries requiring antibiotic prophylaxis. Cefazolin has no R1 side chain cross-reactivity with aminopenicillins and may be used directly in patients with non-anaphylactic penicillin histories in many clinical guidelines.',
        emrDocumentation: [
          'Update allergy field promptly after de-labeling',
          'Document clinical rationale and challenge details',
          'Inform patient of de-label status and future risk considerations'
        ],
        keyPrinciples: [
          'AAAAI 2023: Proactive penicillin allergy evaluation should be offered routinely — including during clinic visits, pre-operatively, and for inpatients.',
          'PEN-FAST (Five criteria: Penicillin allergy label, Exposure within 5 years, Anaphylaxis/angioedema, Severe cutaneous reaction, Treatment required) stratifies low vs. high risk.',
          'Direct oral challenges without skin testing are safe and effective, with reaction rates of 4–10% in low-risk patients (mostly mild, manageable).',
          'De-labeling is an antibiotic stewardship intervention — penicillin-allergic labels are associated with increased hospital LOS, surgical site infections, and overall mortality when suboptimal antibiotics are used.'
        ]
      }
    }
  }
];

// ═══════════════════════════════════════════════════════════════════════
// ALLERGEN CATEGORIES
// ═══════════════════════════════════════════════════════════════════════
var ALLERGEN_CATS = {
  'Controls':               ['histamine','saline'],
  'Indoor Aeroallergens':   ['dust-mite','cat','dog','cockroach','mold-mix'],
  'Outdoor Aeroallergens':  ['tree-mix','grass-mix','ragweed'],
  'Foods':                  ['peanut','milk','egg-white','egg-yolk','ovomucoid','wheat','soy','shellfish'],
  'Other':                  ['latex','penicillin']
};

// ═══════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════
window.PROC_DATA = {
  skin:        SKIN_SCENARIOS,
  ofc:         OFC_SCENARIOS,
  desens:      DESENS_SCENARIOS,
  allergenCats: ALLERGEN_CATS,
  citations:   CITATIONS
};

})();
