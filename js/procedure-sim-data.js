/* js/procedure-sim-data.js — Data for A/I Procedure Lab simulations */
(function(){
'use strict';

// ═══ SKIN TEST SCENARIOS ═══
var SKIN_SCENARIOS = [
  {
    id:'environmental-rhinitis',
    patient:{name:'Derek Patel',age:'32M',cc:'Chronic nasal congestion, sneezing, itchy eyes x 3 years. Worse in spring and fall. Cat at home. Failed OTC antihistamines.'},
    history:'No asthma. No drug allergies. No prior allergy testing. Works in office. Symptoms year-round but peak March–May and September–October.',
    correctPanel:['histamine','saline','dust-mite','cat','dog','tree-mix','grass-mix','ragweed','mold-mix','cockroach'],
    results:{
      'histamine':{w:5,f:15,pos:true,ctrl:true},'saline':{w:0,f:0,pos:false,ctrl:true},
      'dust-mite':{w:8,f:22,pos:true},'cat':{w:12,f:30,pos:true},'dog':{w:3,f:8,pos:false},
      'tree-mix':{w:7,f:18,pos:true},'grass-mix':{w:6,f:16,pos:true},'ragweed':{w:10,f:25,pos:true},
      'mold-mix':{w:4,f:10,pos:true},'cockroach':{w:2,f:5,pos:false},
      'peanut':{w:0,f:0,pos:false},'milk':{w:0,f:0,pos:false},'egg-white':{w:0,f:0,pos:false},
      'egg-yolk':{w:0,f:0,pos:false},'ovomucoid':{w:0,f:0,pos:false},'wheat':{w:0,f:0,pos:false},
      'soy':{w:0,f:0,pos:false},'shellfish':{w:0,f:0,pos:false},'latex':{w:0,f:0,pos:false},'penicillin':{w:0,f:0,pos:false}
    },
    teaching:'For allergic rhinitis: always include histamine (positive) and saline (negative) controls. Panel guided by history — year-round symptoms suggest perennial allergens (dust mite, cat, dog, mold, cockroach) plus seasonal peaks (tree, grass, ragweed). Food allergens NOT indicated for rhinitis. Wheal ≥3mm above negative control = positive. This patient: dust mite, cat, trees, grass, ragweed, mold all positive — cat highest sensitization, consistent with year-round symptoms from indoor cat.'
  },
  {
    id:'food-allergy-peds',
    patient:{name:'Olivia Nguyen',age:'4F',cc:'Hives and vomiting 30 min after scrambled eggs at age 2. Avoiding all egg since. Tolerates baked goods with egg. Referred for possible food challenge.'},
    history:'No prior allergy testing. Tolerates cake and muffins with egg. No other food allergies. Mild eczema controlled with emollients. No asthma.',
    correctPanel:['histamine','saline','egg-white','egg-yolk','ovomucoid','milk','peanut'],
    results:{
      'histamine':{w:4,f:12,pos:true,ctrl:true},'saline':{w:0,f:0,pos:false,ctrl:true},
      'egg-white':{w:5,f:14,pos:true},'egg-yolk':{w:2,f:4,pos:false},'ovomucoid':{w:2,f:5,pos:false},
      'milk':{w:0,f:0,pos:false},'peanut':{w:0,f:0,pos:false},
      'dust-mite':{w:3,f:8,pos:true},'cat':{w:0,f:0,pos:false},'dog':{w:0,f:0,pos:false},
      'tree-mix':{w:0,f:0,pos:false},'grass-mix':{w:2,f:4,pos:false},'ragweed':{w:0,f:0,pos:false},
      'mold-mix':{w:0,f:0,pos:false},'cockroach':{w:0,f:0,pos:false},
      'wheat':{w:0,f:0,pos:false},'soy':{w:0,f:0,pos:false},'shellfish':{w:0,f:0,pos:false},
      'latex':{w:0,f:0,pos:false},'penicillin':{w:0,f:0,pos:false}
    },
    teaching:'For egg allergy with baked egg tolerance: component testing is key. Ovomucoid (Gal d 1) is heat-STABLE — negative ovomucoid suggests patient tolerates heated egg. This child: positive egg white SPT but NEGATIVE ovomucoid, consistent with baked egg tolerance. Candidate for graded egg challenge to lightly cooked egg. Always test common pediatric food allergens (milk, peanut) even if not the primary concern.'
  }
];

// ═══ OFC SCENARIOS ═══
var OFC_SCENARIOS = [
  {
    id:'peanut-ofc',
    patient:{name:'Jayden Park',age:'8M',cc:'Peanut allergy dx age 3. SPT 6mm wheal. sIgE peanut 8.5 kUA/L (Ara h 2: 3.2). Last reaction: hives age 3. Parents want to know if outgrown.'},
    correct:{
      food:'peanut-flour',
      protocol:'7-log',
      interval:'20',
      monitoring:'120',
      ivAccess:'yes',
      epiReady:'yes',
      antihistamineHeld:'yes',
      consent:'yes'
    },
    doses:['1mg','10mg','30mg','100mg','300mg','1000mg','3000mg'],
    stoppingCriteria:'Objective symptoms: ≥3 urticarial lesions, angioedema, vomiting, wheezing/stridor/persistent cough, or hypotension. Subjective: severe abdominal pain, throat tightness (but continue monitoring before stopping for subjective alone).',
    emergencyPrep:'IV access established, epinephrine 0.01mg/kg drawn up, diphenhydramine, famotidine, albuterol MDI, prednisolone, monitoring equipment, crash cart.',
    teaching:'Peanut OFC: Use defatted peanut flour or peanut butter in vehicle. Standard 7-dose log increment. Ara h 2 positivity = strongest predictor of clinical reactivity — this child has significant probability of reacting. Pre-challenge: well, no illness, asthma controlled, antihistamines held 5–7 days, no exercise after. IV access REQUIRED. Monitor ≥2 hours post-final dose. Have all treatment ready BEFORE starting. Document informed consent including anaphylaxis risk.'
  }
];

// ═══ DESENSITIZATION SCENARIOS ═══
var DESENS_SCENARIOS = [
  {
    id:'aspirin-desens',
    patient:{name:'Vanessa Takahashi',age:'38F',cc:'AERD (Samter\'s Triad): asthma, nasal polyposis, NSAID-exacerbated respiratory disease. Recurrent polyps despite surgery x2. Referred for aspirin desensitization.'},
    history:'FEV1 82% predicted. On fluticasone/salmeterol, montelukast. No recent exacerbation. Last polypectomy 6 months ago, polyps already recurring. No beta-blocker use. No pregnancy.',
    protocol:{
      day1:['20.25mg','40.5mg','81mg','162.5mg'],
      day2:['325mg','then 325mg BID maintenance'],
      setting:'Monitored clinic or hospital — NOT outpatient',
      interval:'90 minutes between doses (Day 1), check FEV1 before each dose',
      monitoring:'FEV1 q90min, vitals q30min, nasal/ocular symptoms, lower respiratory symptoms',
      holdCriteria:'FEV1 decline >15% from baseline, significant bronchospasm, naso-ocular reaction (treat and re-challenge at same dose)',
      stopCriteria:'FEV1 decline >20%, severe bronchospasm not responsive to albuterol, anaphylaxis',
      preReqs:'Stable asthma (FEV1 ≥70%), no exacerbation in 4 weeks, no beta-blockers, montelukast continued, baseline FEV1 documented'
    },
    teaching:'Aspirin desensitization for AERD: This is a TREATMENT, not a diagnostic test. Mechanism: chronic COX-1 inhibition shifts prostaglandin metabolism, reducing eosinophilic inflammation over time. Protocol: typically 2-day, starting at sub-therapeutic doses with 90-min intervals. Must monitor FEV1 before each dose — respiratory reactions are common during desensitization (expected, manageable). Keep montelukast on board (reduces reaction severity). Reactions typically occur at 60–100mg range. Once desensitized to 325mg, patient takes 325mg BID indefinitely — if they miss >48 hours, must RE-desensitize. Maintenance aspirin reduces polyp recurrence, improves smell, and reduces asthma exacerbations.'
  },
  {
    id:'penicillin-challenge',
    patient:{name:'Patricia O\'Brien',age:'58F',cc:'Reports "penicillin allergy" since childhood. States she had a rash. No details available. Needs aortic valve replacement — surgeon wants cefazolin prophylaxis. Currently listed as penicillin-allergic.'},
    history:'No anaphylaxis history. No prior allergist evaluation. Reaction was >40 years ago. Has received cephalosporins (cephalexin for UTI 5 years ago) without issue.',
    protocol:{
      step1:'Penicillin skin test: major determinant (penicilloyl-polylysine/Pre-Pen) and minor determinants (penicillin G, MDM)',
      step2:'If skin test NEGATIVE → direct oral amoxicillin challenge: 250mg single dose, observe 60 minutes',
      step3:'If challenge negative → de-label allergy, clear for cefazolin',
      step4:'If skin test POSITIVE → graded dose penicillin challenge in monitored setting, or use vancomycin alternative',
      keyPoint:'She already tolerated a cephalosporin — cross-reactivity risk is <2%. Even without skin testing, cefazolin could likely be given safely with a graded dose approach.'
    },
    teaching:'Penicillin de-labeling: >90% of patients with reported penicillin allergy are NOT truly allergic. Skin testing has excellent negative predictive value (>98%). Protocol: Pre-Pen (major determinant) + penicillin G (minor determinant) intradermal. If negative → single-dose oral amoxicillin challenge (250mg), observe 60 min. If this patient already tolerated cephalexin without reaction, cross-reactivity risk is extremely low. De-labeling saves healthcare costs (penicillin-allergic patients get broader-spectrum, more expensive, more toxic antibiotics like vancomycin). Document de-labeling in EMR prominently. This is a high-value, low-risk intervention.'
  }
];

// ═══ ALLERGEN CATEGORIES (for skin test panel) ═══
var ALLERGEN_CATS = {
  'Controls':['histamine','saline'],
  'Indoor Aeroallergens':['dust-mite','cat','dog','cockroach','mold-mix'],
  'Outdoor Aeroallergens':['tree-mix','grass-mix','ragweed'],
  'Foods':['peanut','milk','egg-white','egg-yolk','ovomucoid','wheat','soy','shellfish'],
  'Other':['latex','penicillin']
};

window.PROC_DATA = {
  skin: SKIN_SCENARIOS,
  ofc: OFC_SCENARIOS,
  desens: DESENS_SCENARIOS,
  allergenCats: ALLERGEN_CATS
};
})();
