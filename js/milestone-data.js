/* js/milestone-data.js — ACGME A/I Milestone Framework for ReasonDx
 * Maps all A/I cases to milestone subcompetencies and complexity tiers.
 * Used by milestone-tracker.html for fellowship PD dashboards.
 */
(function() {
'use strict';

// ─── ACGME A/I Subcompetencies (19 total) ───
var SUBCOMPETENCIES = {
  'PC1':  { code:'PC1',  domain:'Patient Care', name:'H&P — Adult A/I Patients', short:'H&P Adult' },
  'PC2':  { code:'PC2',  domain:'Patient Care', name:'H&P — Pediatric A/I Patients', short:'H&P Peds' },
  'PC3':  { code:'PC3',  domain:'Patient Care', name:'Diagnostic Tests & Procedures', short:'Dx Tests' },
  'PC4':  { code:'PC4',  domain:'Patient Care', name:'Management Plan', short:'Management' },
  'MK1':  { code:'MK1',  domain:'Medical Knowledge', name:'Basic Science of A/I', short:'Basic Science' },
  'MK2':  { code:'MK2',  domain:'Medical Knowledge', name:'Clinical Science of A/I', short:'Clinical Science' },
  'MK3':  { code:'MK3',  domain:'Medical Knowledge', name:'Research & Scholarly Activity', short:'Research' },
  'SBP1': { code:'SBP1', domain:'Systems-Based Practice', name:'Patient Safety & QI', short:'Safety/QI' },
  'SBP2': { code:'SBP2', domain:'Systems-Based Practice', name:'System Navigation for Patient-Centered Care', short:'Care Coord' },
  'SBP3': { code:'SBP3', domain:'Systems-Based Practice', name:'Physician Role in Health Care Systems', short:'HC Systems' },
  'SBP4': { code:'SBP4', domain:'Systems-Based Practice', name:'Community & Population Health', short:'Population' },
  'PBLI1':{ code:'PBLI1',domain:'Practice-Based Learning', name:'Evidence-Based & Informed Practice', short:'EBM' },
  'PBLI2':{ code:'PBLI2',domain:'Practice-Based Learning', name:'Reflective Practice & Personal Growth', short:'Reflection' },
  'PROF1':{ code:'PROF1',domain:'Professionalism', name:'Professional Behavior & Ethical Principles', short:'Ethics' },
  'PROF2':{ code:'PROF2',domain:'Professionalism', name:'Accountability/Conscientiousness', short:'Accountability' },
  'PROF3':{ code:'PROF3',domain:'Professionalism', name:'Self-Awareness & Help-Seeking', short:'Wellness' },
  'ICS1': { code:'ICS1', domain:'Interpersonal & Communication', name:'Patient- & Family-Centered Communication', short:'Patient Comm' },
  'ICS2': { code:'ICS2', domain:'Interpersonal & Communication', name:'Interprofessional & Team Communication', short:'Team Comm' },
  'ICS3': { code:'ICS3', domain:'Interpersonal & Communication', name:'Communication within Health Care Systems', short:'System Comm' }
};

// ─── Complexity Tiers (map to ACGME Levels) ───
// Tier 1-2: Common conditions, supervised → ACGME Level 1-2
// Tier 3: Complex conditions, minimal supervision → ACGME Level 3
// Tier 4: Independent practice, graduation-ready → ACGME Level 4
// Tier 5: Expert-level diagnostic dilemmas → ACGME Level 5
var TIERS = {
  1: { label:'Foundational', color:'#059669', desc:'Common conditions, supervised practice' },
  2: { label:'Developing', color:'#2874A6', desc:'Common conditions with nuance' },
  3: { label:'Proficient', color:'#D97706', desc:'Complex conditions, minimal supervision' },
  4: { label:'Independent', color:'#DC2626', desc:'Graduation-ready, unsupervised practice' },
  5: { label:'Expert', color:'#7C3AED', desc:'Diagnostic dilemmas, edge cases' }
};

// ─── Case → Milestone Mapping ───
// Each case tagged with: tier, primary subcompetencies, population (adult/peds/both)
var CASE_MILESTONES = {
  // ── ANAPHYLAXIS & ACUTE ──
  'anaphylaxis':                 { tier:2, sub:['PC1','PC3','PC4','MK2','ICS1'], pop:'adult', category:'Anaphylaxis & Acute' },
  'anaphylaxis-v2':              { tier:4, sub:['PC1','PC3','PC4','MK2','SBP2'], pop:'adult', category:'Anaphylaxis & Acute', note:'Elderly + beta-blocker complication' },
  'anaphylaxis-v3':              { tier:3, sub:['PC1','PC3','PC4','MK2','ICS1'], pop:'adult', category:'Anaphylaxis & Acute', note:'Latex, occupational exposure' },
  'anaphylaxis-v4':              { tier:3, sub:['PC2','PC3','PC4','MK2','ICS1'], pop:'peds', category:'Anaphylaxis & Acute', note:'Adolescent presentation' },
  'anaphylaxis-v5':              { tier:4, sub:['PC2','PC3','PC4','MK2','ICS1','SBP4'], pop:'peds', category:'Anaphylaxis & Acute', note:'Pediatric, cultural/language barriers' },
  'severe-allergic-reaction':    { tier:2, sub:['PC1','PC3','PC4','MK2'], pop:'adult', category:'Anaphylaxis & Acute' },
  'severe-allergic-reaction-v2': { tier:3, sub:['PC1','PC3','PC4','MK2','SBP2'], pop:'adult', category:'Anaphylaxis & Acute' },
  'severe-allergic-reaction-v3': { tier:2, sub:['PC1','PC3','PC4','MK2'], pop:'adult', category:'Anaphylaxis & Acute' },
  'insect-sting-anaphylaxis':    { tier:2, sub:['PC1','PC3','PC4','MK2','ICS1'], pop:'adult', category:'Anaphylaxis & Acute' },
  'insect-sting-anaphylaxis-v2': { tier:3, sub:['PC1','PC3','PC4','MK2','PBLI1'], pop:'adult', category:'Anaphylaxis & Acute' },
  'peanut-allergy-anaphylaxis':  { tier:2, sub:['PC2','PC3','PC4','MK2','ICS1'], pop:'peds', category:'Anaphylaxis & Acute' },
  'peanut-allergy-anaphylaxis-v2':{ tier:3, sub:['PC2','PC3','PC4','MK2','ICS1'], pop:'peds', category:'Anaphylaxis & Acute', note:'Toddler, high-anxiety parent' },

  // ── DRUG HYPERSENSITIVITY ──
  'penicillin-allergy-delabeling':   { tier:2, sub:['PC1','PC3','PC4','MK2','PBLI1','SBP3'], pop:'adult', category:'Drug Hypersensitivity' },
  'penicillin-allergy-delabeling-v2':{ tier:3, sub:['PC1','PC3','PC4','MK2','PBLI1','ICS1'], pop:'adult', category:'Drug Hypersensitivity' },
  'drug-allergy-vancomycin-rms':     { tier:2, sub:['PC1','PC3','PC4','MK1','ICS2'], pop:'adult', category:'Drug Hypersensitivity' },
  'drug-allergy-vancomycin-rms-v2':  { tier:3, sub:['PC1','PC3','PC4','MK1','ICS2'], pop:'adult', category:'Drug Hypersensitivity' },
  'nsaid-hypersensitivity':          { tier:3, sub:['PC1','PC3','PC4','MK1','MK2'], pop:'adult', category:'Drug Hypersensitivity' },
  'nsaid-hypersensitivity-v2':       { tier:4, sub:['PC1','PC3','PC4','MK1','MK2','PBLI1'], pop:'adult', category:'Drug Hypersensitivity', note:'AERD, aspirin desensitization' },
  'dress-syndrome':                  { tier:3, sub:['PC1','PC3','PC4','MK1','MK2','SBP2'], pop:'adult', category:'Drug Hypersensitivity' },
  'dress-syndrome-v2':               { tier:4, sub:['PC1','PC3','PC4','MK1','MK2','SBP2'], pop:'adult', category:'Drug Hypersensitivity', note:'HLA-associated, complex management' },
  'sjs-ten':                         { tier:3, sub:['PC1','PC3','PC4','MK1','MK2','SBP1'], pop:'adult', category:'Drug Hypersensitivity' },
  'sjs-ten-v2':                      { tier:4, sub:['PC1','PC3','PC4','MK1','MK2','SBP1'], pop:'adult', category:'Drug Hypersensitivity', note:'SCORTEN scoring, burn unit coordination' },
  'sjsten-overlap':                  { tier:4, sub:['PC1','PC3','PC4','MK1','MK2','SBP1','SBP2'], pop:'adult', category:'Drug Hypersensitivity' },
  'sjsten-overlap-v2':               { tier:5, sub:['PC1','PC3','PC4','MK1','MK2','SBP1','SBP2','PBLI1'], pop:'adult', category:'Drug Hypersensitivity', note:'Diagnostic dilemma, atypical features' },
  'erythema-multiforme-major':       { tier:2, sub:['PC1','PC3','PC4','MK2'], pop:'adult', category:'Drug Hypersensitivity' },
  'erythema-multiforme-major-v2':    { tier:3, sub:['PC1','PC3','PC4','MK2','MK1'], pop:'adult', category:'Drug Hypersensitivity' },

  // ── ANGIOEDEMA ──
  'allergic-angioedema':             { tier:1, sub:['PC1','PC3','PC4','MK2'], pop:'adult', category:'Angioedema' },
  'allergic-angioedema-v2':          { tier:2, sub:['PC1','PC3','PC4','MK2','ICS1'], pop:'adult', category:'Angioedema' },
  'hereditary-angioedema':           { tier:3, sub:['PC1','PC3','PC4','MK1','MK2','PBLI1'], pop:'adult', category:'Angioedema' },
  'hereditary-angioedema-v2':        { tier:4, sub:['PC1','PC3','PC4','MK1','MK2','PBLI1','SBP3'], pop:'adult', category:'Angioedema', note:'Acute attack management, C1-INH pathway' },
  'ace-angioedema':                  { tier:2, sub:['PC1','PC3','PC4','MK1','SBP1'], pop:'adult', category:'Angioedema' },
  'ace-angioedema-v2':               { tier:3, sub:['PC1','PC3','PC4','MK1','SBP1','SBP3'], pop:'adult', category:'Angioedema' },
  'idiopathic-angioedema':           { tier:3, sub:['PC1','PC3','PC4','MK2','PBLI1'], pop:'adult', category:'Angioedema' },
  'idiopathic-angioedema-v2':        { tier:4, sub:['PC1','PC3','PC4','MK2','PBLI1','MK1'], pop:'adult', category:'Angioedema', note:'Exclusion diagnosis, chronic management' },

  // ── URTICARIA ──
  'acute-urticaria':                 { tier:1, sub:['PC1','PC3','PC4','MK2'], pop:'adult', category:'Urticaria' },
  'acute-urticaria-v2':              { tier:2, sub:['PC2','PC3','PC4','MK2','ICS1'], pop:'peds', category:'Urticaria' },
  'chronic-spontaneous-urticaria':   { tier:3, sub:['PC1','PC3','PC4','MK1','MK2','PBLI1'], pop:'adult', category:'Urticaria' },
  'chronic-spontaneous-urticaria-v2':{ tier:4, sub:['PC1','PC3','PC4','MK1','MK2','PBLI1','SBP3'], pop:'adult', category:'Urticaria', note:'Biologic selection, omalizumab monitoring' },
  'urticarial-vasculitis':           { tier:4, sub:['PC1','PC3','PC4','MK1','MK2','SBP2'], pop:'adult', category:'Urticaria' },
  'urticarial-vasculitis-v2':        { tier:5, sub:['PC1','PC3','PC4','MK1','MK2','SBP2','PBLI1'], pop:'adult', category:'Urticaria', note:'Hypocomplementemic UV, systemic workup' },

  // ── FOOD ALLERGY ──
  'food-allergy-oit-reaction':       { tier:3, sub:['PC2','PC3','PC4','MK2','ICS1','SBP1'], pop:'peds', category:'Food Allergy' },
  'food-allergy-oit-reaction-v2':    { tier:4, sub:['PC2','PC3','PC4','MK2','ICS1','SBP1','PBLI1'], pop:'peds', category:'Food Allergy', note:'OIT adverse event management' },
  'milk-allergy-infant':             { tier:2, sub:['PC2','PC3','PC4','MK2','ICS1'], pop:'peds', category:'Food Allergy' },
  'milk-allergy-infant-v2':          { tier:2, sub:['PC2','PC3','PC4','MK2','ICS1'], pop:'peds', category:'Food Allergy' },
  'fpies-acute':                     { tier:3, sub:['PC2','PC3','PC4','MK1','MK2'], pop:'peds', category:'Food Allergy' },
  'fpies-acute-v2':                  { tier:3, sub:['PC2','PC3','PC4','MK1','MK2','ICS1'], pop:'peds', category:'Food Allergy' },
  'fpies-chronic':                   { tier:3, sub:['PC2','PC3','PC4','MK1','MK2','SBP2'], pop:'peds', category:'Food Allergy' },
  'fpies-chronic-v2':                { tier:4, sub:['PC2','PC3','PC4','MK1','MK2','SBP2','PBLI1'], pop:'peds', category:'Food Allergy', note:'Natural history, OFC timing decisions' },
  'eoe-adult':                       { tier:2, sub:['PC1','PC3','PC4','MK2'], pop:'adult', category:'Food Allergy' },
  'eoe-adult-v2':                    { tier:3, sub:['PC1','PC3','PC4','MK2','PBLI1'], pop:'adult', category:'Food Allergy' },
  'eoe-pediatric':                   { tier:2, sub:['PC2','PC3','PC4','MK2'], pop:'peds', category:'Food Allergy' },
  'eoe-pediatric-v2':                { tier:3, sub:['PC2','PC3','PC4','MK2','PBLI1','SBP2'], pop:'peds', category:'Food Allergy' },

  // ── ATOPIC & CONTACT DERMATITIS ──
  'atopic-dermatitis-severe':        { tier:2, sub:['PC2','PC3','PC4','MK2','ICS1'], pop:'peds', category:'Dermatitis' },
  'atopic-dermatitis-severe-v2':     { tier:3, sub:['PC2','PC3','PC4','MK1','MK2','ICS1'], pop:'peds', category:'Dermatitis', note:'Biologic candidacy, dupilumab' },
  'eczema-herpeticum':               { tier:3, sub:['PC2','PC3','PC4','MK2','SBP1'], pop:'peds', category:'Dermatitis' },
  'eczema-herpeticum-v2':            { tier:3, sub:['PC2','PC3','PC4','MK2','SBP1'], pop:'peds', category:'Dermatitis' },
  'contact-dermatitis-occupational': { tier:2, sub:['PC1','PC3','PC4','MK2','SBP4'], pop:'adult', category:'Dermatitis' },
  'contact-dermatitis-occupational-v2':{ tier:3, sub:['PC1','PC3','PC4','MK2','SBP4','SBP3'], pop:'adult', category:'Dermatitis', note:'Occupational exposure, patch testing' },

  // ── ALLERGIC RHINITIS & CONJUNCTIVITIS ──
  'allergic-rhinitis-uncontrolled':    { tier:1, sub:['PC1','PC3','PC4','MK2'], pop:'adult', category:'Rhinitis & Conjunctivitis' },
  'allergic-rhinitis-uncontrolled-v2': { tier:2, sub:['PC1','PC3','PC4','MK2','ICS1'], pop:'adult', category:'Rhinitis & Conjunctivitis' },
  'allergic-conjunctivitis-severe':    { tier:2, sub:['PC2','PC3','PC4','MK2'], pop:'peds', category:'Rhinitis & Conjunctivitis' },
  'allergic-conjunctivitis-severe-v2': { tier:3, sub:['PC2','PC3','PC4','MK2','SBP2'], pop:'peds', category:'Rhinitis & Conjunctivitis', note:'Vernal keratoconjunctivitis, ophthalmology coordination' },

  // ── IMMUNODEFICIENCY ──
  'cvid-presentation':               { tier:3, sub:['PC1','PC3','PC4','MK1','MK2','SBP2'], pop:'adult', category:'Immunodeficiency' },
  'cvid-presentation-v2':            { tier:4, sub:['PC1','PC3','PC4','MK1','MK2','SBP2','PBLI1','ICS1'], pop:'adult', category:'Immunodeficiency', note:'IVIG initiation, infection prevention counseling' },

  // ── MAST CELL DISORDERS ──
  'mastocytosis':                    { tier:4, sub:['PC1','PC3','PC4','MK1','MK2','PBLI1'], pop:'adult', category:'Mast Cell Disorders' },
  'mastocytosis-v2':                 { tier:5, sub:['PC1','PC3','PC4','MK1','MK2','PBLI1','SBP2'], pop:'adult', category:'Mast Cell Disorders', note:'MCAS vs mastocytosis, tryptase interpretation' },

  // ── IMMUNOTHERAPY ──
  'venom-immunotherapy-reaction':    { tier:3, sub:['PC1','PC3','PC4','MK2','SBP1','ICS1'], pop:'adult', category:'Immunotherapy' },
  'venom-immunotherapy-reaction-v2': { tier:4, sub:['PC1','PC3','PC4','MK2','SBP1','ICS1','PBLI1'], pop:'adult', category:'Immunotherapy', note:'Systemic reaction during VIT, protocol adjustment' }
};

// ─── Assessment Tool Mapping ───
// Which ReasonDx tools provide evidence for each subcompetency
var TOOL_MAP = {
  'PC1':  ['virtual-emr','coachdx','simroomdx'],
  'PC2':  ['virtual-emr','coachdx','simroomdx'],
  'PC3':  ['virtual-emr','crt','mechanismdx'],
  'PC4':  ['virtual-emr','crt','coachdx'],
  'MK1':  ['mechanismdx'],
  'MK2':  ['crt','virtual-emr','coachdx','board-prep'],
  'MK3':  [],
  'SBP1': ['virtual-emr','crt'],
  'SBP2': ['consult-callback','night-float','virtual-emr'],
  'SBP3': ['virtual-emr','coachdx'],
  'SBP4': ['virtual-emr','coachdx'],
  'PBLI1':['crt','mechanismdx','board-prep'],
  'PBLI2':['analytics-dashboard'],
  'PROF1':[],
  'PROF2':[],
  'PROF3':[],
  'ICS1': ['coachdx','simroomdx'],
  'ICS2': ['consult-callback','night-float'],
  'ICS3': ['virtual-emr','simroomdx']
};

// ─── Public API ───
window.MILESTONE_DATA = {
  subcompetencies: SUBCOMPETENCIES,
  tiers: TIERS,
  cases: CASE_MILESTONES,
  tools: TOOL_MAP,

  // Get all cases for a given tier
  byTier: function(t) {
    var r = [];
    for (var id in CASE_MILESTONES) { if (CASE_MILESTONES[id].tier === t) r.push(id); }
    return r;
  },

  // Get all cases that address a given subcompetency
  bySub: function(code) {
    var r = [];
    for (var id in CASE_MILESTONES) { if (CASE_MILESTONES[id].sub.indexOf(code) >= 0) r.push(id); }
    return r;
  },

  // Get all cases for a category
  byCategory: function(cat) {
    var r = [];
    for (var id in CASE_MILESTONES) { if (CASE_MILESTONES[id].category === cat) r.push(id); }
    return r;
  },

  // Get all unique categories
  categories: function() {
    var cats = {};
    for (var id in CASE_MILESTONES) { cats[CASE_MILESTONES[id].category] = true; }
    return Object.keys(cats).sort();
  },

  // Get population filter (adult/peds/both)
  byPop: function(pop) {
    var r = [];
    for (var id in CASE_MILESTONES) { if (CASE_MILESTONES[id].pop === pop) r.push(id); }
    return r;
  },

  // Summary stats
  stats: function() {
    var total = 0, byTier = {1:0,2:0,3:0,4:0,5:0}, bySub = {}, byCat = {};
    for (var id in CASE_MILESTONES) {
      var c = CASE_MILESTONES[id];
      total++;
      byTier[c.tier]++;
      c.sub.forEach(function(s) { bySub[s] = (bySub[s]||0) + 1; });
      byCat[c.category] = (byCat[c.category]||0) + 1;
    }
    return { total:total, byTier:byTier, bySubcompetency:bySub, byCategory:byCat };
  }
};

})();
