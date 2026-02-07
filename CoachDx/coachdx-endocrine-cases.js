// ============================================================================
// COACHDX ENDOCRINE CASE PACK
// SBAR scenarios for endocrine emergencies communication training
// Created: January 29, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================
//
// CASES INCLUDED:
// 1. DKA - Severe with Cerebral Edema Risk
// 2. HHS - Hyperosmolar Hyperglycemic State
// 3. Thyroid Storm
// 4. Myxedema Coma
// 5. Adrenal Crisis
//
// ============================================================================

const COACHDX_ENDOCRINE_CASES = {

// ============================================================================
// CASE 1: SEVERE DKA
// ============================================================================

'dka-severe': {
    id: 'dka-severe',
    title: 'DKA - Severe with Cerebral Edema Risk',
    category: 'Endocrine',
    isParallel: false,
    parallelCase: 'dka-moderate',
    parallelDescription: 'Moderate DKA - standard protocol',
    patient: { 
        name: 'Tyler Robinson', 
        age: 16, 
        sex: 'Male', 
        setting: 'Emergency → PICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Vomiting and Confusion' 
    },
    description: 'A 16-year-old boy with T1DM presents with 2 days of vomiting, polyuria, and now confusion. Found by parents lethargic. HR 128, BP 92/58, RR 36 (Kussmaul), dry mucous membranes. Glucose 684, pH 6.98, HCO3 4, anion gap 32, Na 128, K 5.8, BUN 42. Osmolality 312.',
    openingStatement: 'Tyler has severe DKA with profound acidosis - pH 6.98 is life-threatening. He\'s also a pediatric patient at high risk for cerebral edema. How do you manage this carefully and communicate with the ICU?',
    conceptDomains: {
        'Situation': ['acidosis_severity', 'mental_status', 'hemodynamic_status'],
        'Background': ['diabetes_history', 'insulin_compliance', 'precipitant'],
        'Assessment': ['dka_severity', 'cerebral_edema_risk', 'electrolyte_abnormalities'],
        'Recommendation': ['fluid_strategy', 'insulin_timing', 'monitoring_frequency']
    },
    quickActions: [
        'How severe is this DKA?',
        'Why is cerebral edema a risk?',
        'When do I start insulin?',
        'How fast should I correct?'
    ],
    keyTeachingPoints: [
        'Severe DKA: pH <7.0, HCO3 <5, altered mental status, hemodynamic instability',
        'Cerebral edema risk highest in: Pediatrics, new-onset diabetes, severe acidosis, rapid correction',
        'Fluids FIRST, then insulin after 1-2 hours of fluid resuscitation',
        'Goal: Gradual correction - glucose drop 50-100 mg/dL/hr, avoid rapid sodium changes',
        'Corrected Na = measured Na + 1.6 × [(glucose-100)/100]'
    ],
    sbarTemplate: {
        situation: 'I have a 16-year-old with severe DKA - pH 6.98, bicarb 4, glucose 684. He\'s confused and hypotensive. This is life-threatening acidosis with high cerebral edema risk.',
        background: 'He has Type 1 diabetes. His parents say he\'s been sick and vomiting for 2 days, probably not taking insulin. This appears to be an infection precipitating DKA.',
        assessment: 'This is severe DKA by all criteria. He\'s a pediatric patient with profound acidosis - high risk for cerebral edema. His potassium is 5.8 but will drop rapidly with insulin. Corrected sodium needs monitoring.',
        recommendation: 'Starting cautious fluid resuscitation - 10-20 mL/kg over first hour, not rapid boluses. Will start insulin at 0.1 units/kg/hr AFTER initial fluids. Need ICU admission with q1h labs and neuro checks for cerebral edema. Can PICU accept?'
    },
    defined_responses: {
        'dka severity': 'Severe DKA criteria: pH <7.0 (his is 6.98), HCO3 <5 (his is 4), anion gap >30 (his is 32), altered mental status (he\'s confused), hemodynamic compromise. He meets ALL severe criteria - this is life-threatening.',
        'cerebral edema risk': 'Cerebral edema occurs in ~1% of pediatric DKA but has 20-40% mortality. Risk factors: Age <5, new diagnosis, severe acidosis, high BUN, bicarbonate administration, rapid fluid administration, rapid sodium/osmolality changes. His profound acidosis and age put him at high risk.',
        'insulin timing': 'DO NOT rush insulin. Start fluids first for 1-2 hours. Insulin at 0.1 units/kg/hr (no bolus in peds). Starting insulin too early before volume resuscitation can cause rapid glucose drop, fluid shifts, and cerebral edema. Exception: Only if potassium is critically high.',
        'correction rate': 'Go SLOW. Target: Glucose drop 50-100 mg/dL/hr (not faster), Add dextrose to fluids when glucose <300 to continue insulin for acidosis, Monitor corrected sodium - should RISE as glucose falls (falling corrected Na = cerebral edema risk), pH correction over 12-24 hours.',
        'cerebral edema signs': 'Warning signs: Headache, vomiting, altered mental status, bradycardia, hypertension (Cushing response), pupil changes, posturing. If suspected: Elevate head, reduce fluids, give mannitol 0.5-1 g/kg or hypertonic saline 3%, CT head, neurosurgery consult.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'DKA Module', link: '../mechanism/diabetes-dka-module.html', reason: 'Understand DKA pathophysiology' },
        { type: 'reasondx', title: 'DKA Adventure', link: '../ReasonDx/adventure-cases/dka-expanded.html', reason: 'Practice DKA management' },
        { type: 'reasondx', title: 'Peds DKA Adventure', link: '../ReasonDx/adventure-cases/peds-dka-expanded.html', reason: 'Pediatric-specific considerations' }
    ],
    evidenceBase: {
        guidelines: ["ISPAD DKA Guidelines 2022", "ADA Standards of Care - DKA Section 2024"],
        keyEvidence: [
            "Cerebral edema risk increased with rapid fluid administration and bicarbonate use",
            "Corrected sodium should rise as glucose falls - failure to rise predicts cerebral edema",
            "Insulin initiation after initial fluid resuscitation is safer"
        ],
        openAccessLinks: ["https://onlinelibrary.wiley.com/doi/10.1111/pedi.13406"]
    }
},

// ============================================================================
// CASE 2: HHS - HYPEROSMOLAR HYPERGLYCEMIC STATE
// ============================================================================

'hhs-hyperosmolar': {
    id: 'hhs-hyperosmolar',
    title: 'HHS - Hyperosmolar Hyperglycemic State',
    category: 'Endocrine',
    isParallel: false,
    parallelCase: 'dka-severe',
    parallelDescription: 'DKA - ketoacidosis predominant',
    patient: { 
        name: 'Dorothy Adams', 
        age: 72, 
        sex: 'Female', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Confusion' 
    },
    description: 'A 72-year-old woman with T2DM found confused by family. Progressively lethargic over 1 week. HR 108, BP 98/62, dry mucous membranes. Glucose 1,124, Na 152, K 4.2, BUN 68, Cr 2.8. pH 7.32, HCO3 22, serum osm 388. Ketones trace.',
    openingStatement: 'Mrs. Adams has HHS - hyperosmolar hyperglycemic state. She\'s profoundly dehydrated with massive hyperglycemia and hyperosmolality. This has higher mortality than DKA. How do you manage her fluid resuscitation?',
    conceptDomains: {
        'Situation': ['glucose_level', 'osmolality', 'volume_status', 'mental_status'],
        'Background': ['diabetes_history', 'precipitant_workup', 'medication_list'],
        'Assessment': ['hhs_criteria', 'fluid_deficit', 'thrombosis_risk'],
        'Recommendation': ['aggressive_fluids', 'insulin_timing', 'electrolyte_monitoring']
    },
    quickActions: ['What defines HHS vs DKA?', 'How much fluid does she need?', 'When do I start insulin?', 'Why is mortality higher?'],
    keyTeachingPoints: [
        'HHS criteria: Glucose >600, osmolality >320, minimal/no ketones, pH >7.3 or HCO3 >18',
        'Fluid deficit often 8-12 liters - AGGRESSIVE resuscitation needed',
        'Insulin is SECONDARY to fluids - fluids alone drop glucose significantly',
        'Higher mortality than DKA (10-20% vs 1-5%)',
        'High thrombosis risk - consider DVT prophylaxis'
    ],
    sbarTemplate: {
        situation: 'I have a 72-year-old woman with HHS - glucose is 1,124, serum osmolality 388, and she\'s obtunded. She\'s severely dehydrated with hypotension.',
        background: 'She has Type 2 diabetes. Family says she\'s been confused for about a week. She likely has an infection or other precipitant.',
        assessment: 'This is HHS - profound hyperglycemia and hyperosmolality without significant ketoacidosis. She has maybe 8-10 liters of fluid deficit. High thrombosis risk.',
        recommendation: 'Starting aggressive normal saline - 1-1.5 L first hour. Insulin will be secondary after initial fluid resuscitation. She needs ICU and DVT prophylaxis once resuscitated.'
    },
    defined_responses: {
        'hhs vs dka': 'HHS: Glucose >600, osmolality >320, minimal ketones, pH >7.3, HCO3 >18. DKA: Glucose usually 300-800, significant ketones, pH <7.3, HCO3 <18. Her glucose 1124, osm 388, pH 7.32, HCO3 22 with trace ketones = HHS.',
        'fluid deficit': 'HHS patients are PROFOUNDLY dehydrated - typically 8-12 L deficit. Start aggressive: NS 1-1.5 L/hr for first 2-4 hours. Then 250-500 mL/hr. Total replacement over 24-48 hours.',
        'insulin timing': 'Insulin is LESS important in HHS than DKA. Fluids alone can drop glucose 100-200 mg/dL. Start insulin 0.05-0.1 units/kg/hr AFTER hemodynamic stabilization (1-2 hours of fluids).',
        'why higher mortality': 'HHS mortality 10-20% (vs DKA 1-5%): Older patients, more comorbidities, more severe dehydration, higher osmolality, often undiagnosed precipitant (MI, sepsis, stroke).'
    },
    relatedContent: [
        { type: 'mechanism', title: 'DKA/HHS Module', link: '../mechanism/diabetes-dka-module.html', reason: 'Compare DKA and HHS pathophysiology' },
        { type: 'reasondx', title: 'HHS-DKA Comparison', link: '../ReasonDx/adventure-cases/hhs-dka-comparison-expanded.html', reason: 'Differentiate and manage both' }
    ],
    evidenceBase: {
        guidelines: ["ADA Standards of Care - Hyperglycemic Crises 2024", "JBDS-IP HHS Guidelines 2023"],
        keyEvidence: ["Fluid resuscitation is more important than insulin in HHS", "Mortality 10-20% despite treatment", "Thromboembolism is common complication"],
        openAccessLinks: ["https://diabetesjournals.org/care/article/47/Supplement_1/S181/153949"]
    }
},

// ============================================================================
// CASE 3: THYROID STORM
// ============================================================================

'thyroid-storm': {
    id: 'thyroid-storm',
    title: 'Thyroid Storm',
    category: 'Endocrine',
    isParallel: false,
    parallelCase: 'thyrotoxicosis-mild',
    parallelDescription: 'Thyrotoxicosis without storm',
    patient: { 
        name: 'Jennifer Walsh', 
        age: 38, 
        sex: 'Female', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Racing Heart and Agitation' 
    },
    description: 'A 38-year-old woman with Graves disease (non-compliant with methimazole) presents 1 day after dental extraction with fever 39.8°C, HR 162 (AFib), BP 168/72, tremor, agitation, and confusion. TSH <0.01, FT4 >7.0. Burch-Wartofsky score 65.',
    openingStatement: 'Ms. Walsh has thyroid storm triggered by infection/surgery in the setting of untreated Graves disease. Her Burch-Wartofsky score confirms it. This has high mortality without treatment.',
    conceptDomains: {
        'Situation': ['vital_signs', 'mental_status', 'thyroid_labs'],
        'Background': ['graves_history', 'medication_compliance', 'precipitant'],
        'Assessment': ['burch_wartofsky_score', 'af_rvr_management', 'mortality_risk'],
        'Recommendation': ['multimodal_treatment', 'icu_admission', 'cardiology_involvement']
    },
    quickActions: ['What is the Burch-Wartofsky score?', 'What medications does she need?', 'Why PTU before iodine?', 'How do I treat her AFib?'],
    keyTeachingPoints: [
        'Thyroid storm: Life-threatening thyrotoxicosis with end-organ dysfunction',
        'Burch-Wartofsky score ≥45 = highly suggestive of storm',
        'Treatment order: PTU → Iodine (1 hour later) → Beta-blocker → Steroids → Cooling',
        'PTU preferred - also blocks T4→T3 conversion',
        'Iodine must come AFTER thionamide'
    ],
    sbarTemplate: {
        situation: 'I have a 38-year-old woman with thyroid storm. Burch-Wartofsky score is 65. She\'s febrile, in AFib with RVR at 162, and confused.',
        background: 'She has Graves disease but stopped her methimazole. She had dental extraction yesterday. TSH is undetectable and FT4 is off the scale.',
        assessment: 'This is thyroid storm - life-threatening thyrotoxicosis with cardiac and CNS involvement. Mortality is 10-30% without treatment.',
        recommendation: 'Starting PTU now, then iodine in one hour. Propranolol for rate control. Hydrocortisone for adrenal support. Cooling measures. She needs ICU.'
    },
    defined_responses: {
        'burch wartofsky': 'Burch-Wartofsky Point Scale scores: Temperature (0-30 points), CNS (0-30), GI-hepatic (0-20), CV (0-50), precipitant (0-10). Score ≥45 = highly suggestive, 25-44 = impending storm, <25 = unlikely. Her 65 confirms storm.',
        'medications': 'Treatment in ORDER: (1) PTU 500-1000mg load then 250mg q4h, (2) Iodine 1 HOUR after PTU, (3) Propranolol 60-80mg q4h, (4) Hydrocortisone 100mg q8h, (5) Cooling.',
        'ptu before iodine': 'CRITICAL: Iodine MUST come ≥1 hour AFTER PTU. Giving iodine first provides substrate for MORE hormone synthesis. PTU blocks synthesis first, then iodine safely blocks release.',
        'afib treatment': 'Beta-blocker is first-line (propranolol preferred - also inhibits T4→T3 conversion). May need high doses. AFib often converts once euthyroid.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Thyroid Module', link: '../mechanism/thyroid-module.html', reason: 'Understand thyroid hormone effects' },
        { type: 'reasondx', title: 'Thyroid Storm Adventure', link: '../ReasonDx/adventure-cases/thyroid-storm-adventure.html', reason: 'Practice thyroid storm management' }
    ],
    evidenceBase: {
        guidelines: ["ATA Guidelines on Hyperthyroidism 2016", "Japan Thyroid Association Thyroid Storm Guidelines"],
        keyEvidence: ["Burch-Wartofsky score helps diagnose thyroid storm", "PTU preferred due to peripheral conversion blockade", "Mortality 10-30% even with treatment"],
        openAccessLinks: ["https://www.liebertpub.com/doi/10.1089/thy.2016.0229"]
    }
},

// ============================================================================
// CASE 4: MYXEDEMA COMA
// ============================================================================

'myxedema-coma': {
    id: 'myxedema-coma',
    title: 'Myxedema Coma',
    category: 'Endocrine',
    isParallel: false,
    parallelCase: 'hypothyroid-severe',
    parallelDescription: 'Severe hypothyroidism without coma',
    patient: { 
        name: 'Margaret Thompson', 
        age: 78, 
        sex: 'Female', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Found Unresponsive' 
    },
    description: 'A 78-year-old woman with hypothyroidism (not taking levothyroxine for months) found unresponsive. Temp 34.2°C, HR 48, BP 88/54, RR 8, obtunded. Periorbital edema, delayed reflexes. TSH 98, FT4 <0.1. Na 118, glucose 52. Recent pneumonia.',
    openingStatement: 'Mrs. Thompson has myxedema coma - the most severe form of hypothyroidism. Despite the name, coma isn\'t required. She has altered mental status, hypothermia, and precipitating event. Mortality is high.',
    conceptDomains: {
        'Situation': ['mental_status', 'vitals', 'labs'],
        'Background': ['hypothyroid_history', 'medication_compliance', 'precipitant'],
        'Assessment': ['myxedema_coma_diagnosis', 'complications', 'adrenal_status'],
        'Recommendation': ['thyroid_hormone_replacement', 'steroid_coverage', 'supportive_care']
    },
    quickActions: ['Does she need to be in coma?', 'T4 or T3 or both?', 'Why give steroids?', 'How do I warm her?'],
    keyTeachingPoints: [
        'Myxedema coma: Decompensated hypothyroidism with AMS + hypothermia + precipitating event',
        'Coma not required - altered mental status sufficient',
        'Must give steroids BEFORE or WITH thyroid hormone',
        'IV T4 preferred; T3 is faster but more cardiac risk',
        'Treat precipitant aggressively - usually infection'
    ],
    sbarTemplate: {
        situation: 'I have a 78-year-old woman with myxedema coma. She\'s hypothermic at 34.2°C, bradycardic at 48, hypotensive, and obtunded. TSH is 98 with undetectable T4.',
        background: 'She has hypothyroidism but hasn\'t taken her levothyroxine for months. She recently had pneumonia, which is likely her precipitant. She also has hyponatremia and hypoglycemia.',
        assessment: 'This is myxedema coma - decompensated hypothyroidism with altered mental status, hypothermia, and infection as precipitant. Mortality is 30-60%. She needs thyroid hormone but also steroids to prevent adrenal crisis.',
        recommendation: 'Giving hydrocortisone 100mg IV first, then IV levothyroxine loading dose. Passive rewarming only - active warming can cause vasodilation and cardiovascular collapse. Treating her pneumonia aggressively. She needs ICU. Can endocrine consult urgently?'
    },
    defined_responses: {
        'coma required': 'NO - "myxedema coma" is a misnomer. Actual coma is present in only ~25% of cases. The diagnosis requires: (1) Altered mental status (any degree), (2) Hypothermia or absence of fever with infection, (3) Precipitating event (infection, cold exposure, sedatives, surgery). She meets all three.',
        't4 vs t3': 'IV T4 (levothyroxine) is preferred by most experts: Loading dose 200-400 mcg IV, then 50-100 mcg daily. T3 (liothyronine) works faster but has more cardiac risk (arrhythmias, ischemia). Some protocols use combination T4+T3. Oral absorption is poor in myxedema - use IV.',
        'why steroids': 'CRITICAL: Give stress-dose steroids BEFORE or WITH thyroid hormone. Reasons: (1) Hypothyroidism can mask adrenal insufficiency, (2) Thyroid hormone increases cortisol metabolism, (3) Can precipitate adrenal crisis if adrenals are insufficient. Hydrocortisone 100mg IV q8h until adrenal function confirmed.',
        'warming': 'PASSIVE rewarming only (blankets, warm room). AVOID active external rewarming (heating blankets, warm baths) - causes peripheral vasodilation → cardiovascular collapse in these hemodynamically fragile patients. Core rewarming okay if needed (warm IV fluids, airway).',
        'other supportive': 'Supportive care: (1) Treat hypoglycemia (her glucose is 52), (2) Treat hyponatremia carefully (her Na is 118 - fluid restrict, but she may also be volume depleted), (3) Ventilatory support if needed (hypoventilation common), (4) Pressors if hypotension persists despite fluids.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Thyroid Module', link: '../mechanism/thyroid-module.html', reason: 'Understand thyroid physiology' },
        { type: 'reasondx', title: 'Myxedema Coma Adventure', link: '../ReasonDx/adventure-cases/myxedema-coma-adventure.html', reason: 'Practice myxedema management' },
        { type: 'reasondx', title: 'Myxedema Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=myxedema-coma-deep-dive', reason: 'Treatment algorithms' }
    ],
    evidenceBase: {
        guidelines: [
            "ATA Guidelines on Hypothyroidism 2014",
            "Endocrine Society Clinical Practice Guidelines"
        ],
        keyEvidence: [
            "Mortality 30-60% even with treatment",
            "Steroids should be given before/with thyroid hormone",
            "IV T4 preferred due to poor GI absorption",
            "Active external rewarming can cause cardiovascular collapse"
        ],
        openAccessLinks: [
            "https://www.liebertpub.com/doi/10.1089/thy.2014.0028"
        ]
    }
},

// ============================================================================
// CASE 5: ADRENAL CRISIS
// ============================================================================

'adrenal-crisis': {
    id: 'adrenal-crisis',
    title: 'Adrenal Crisis',
    category: 'Endocrine',
    isParallel: false,
    parallelCase: 'adrenal-insufficiency-chronic',
    parallelDescription: 'Chronic adrenal insufficiency - stable',
    patient: { 
        name: 'David Miller', 
        age: 45, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Weakness and Confusion' 
    },
    description: 'A 45-year-old man with known Addison disease on hydrocortisone presents with 2 days of gastroenteritis, now with profound weakness and confusion. Ran out of hydrocortisone 3 days ago. HR 118, BP 72/48 (unresponsive to 2L fluids), temp 38.4°C. Na 128, K 6.2, glucose 58, Cr 1.8. Hyperpigmented.',
    openingStatement: 'Mr. Miller is in adrenal crisis - he has known adrenal insufficiency, stopped his steroids, and got sick. He\'s in refractory hypotensive shock. This is immediately life-threatening. What do you do?',
    conceptDomains: {
        'Situation': ['hemodynamic_status', 'mental_status', 'electrolytes'],
        'Background': ['adrenal_insufficiency_history', 'steroid_compliance', 'precipitant'],
        'Assessment': ['adrenal_crisis_diagnosis', 'fluid_refractory_shock'],
        'Recommendation': ['immediate_steroids', 'aggressive_fluids', 'treat_precipitant']
    },
    quickActions: [
        'Do I need to confirm with labs first?',
        'What steroid and dose?',
        'Why isn\'t he responding to fluids?',
        'How do I treat his hyperkalemia?'
    ],
    keyTeachingPoints: [
        'Adrenal crisis: Hypotension/shock refractory to fluids + glucocorticoid deficiency',
        'DO NOT wait for labs - treat empirically if clinical suspicion high',
        'Hydrocortisone 100mg IV bolus IMMEDIATELY, then 50-100mg q6-8h',
        'Hypotension from cortisol deficiency doesn\'t respond to fluids alone - needs steroids',
        'Classic labs: Hyponatremia, hyperkalemia, hypoglycemia, eosinophilia'
    ],
    sbarTemplate: {
        situation: 'I have a 45-year-old man with known Addison disease in adrenal crisis. He\'s hypotensive at 72/48 not responding to fluids, confused, and has classic electrolyte abnormalities.',
        background: 'He ran out of his hydrocortisone 3 days ago and then developed gastroenteritis. He couldn\'t keep anything down. The vomiting plus no steroids triggered this crisis.',
        assessment: 'This is adrenal crisis - he has the classic presentation of fluid-refractory hypotension in a patient with adrenal insufficiency. His sodium is 128, potassium 6.2, glucose 58. Without steroids, he will die.',
        recommendation: 'I\'m giving hydrocortisone 100mg IV NOW - don\'t wait for any labs. Continuing aggressive fluids with dextrose for hypoglycemia. The hyperkalemia should improve with steroids and fluids. He needs ICU monitoring.'
    },
    defined_responses: {
        'wait for labs': 'NO - DO NOT wait for cortisol levels if clinical suspicion is high. Adrenal crisis is rapidly fatal, and the treatment (hydrocortisone) is safe. If you want to check, draw cortisol and ACTH BEFORE giving steroids, but don\'t delay treatment for results. Random cortisol <15-18 in stressed patient suggests insufficiency.',
        'steroid choice': 'Hydrocortisone 100mg IV bolus immediately, then 50-100mg IV q6-8h (or continuous infusion 200mg/24h). Why hydrocortisone? At stress doses (>50mg), it has adequate mineralocorticoid activity. Dexamethasone can be used if you need to do ACTH stim test (doesn\'t cross-react), but lacks mineralocorticoid effect.',
        'fluid refractory': 'Cortisol is required for vascular tone - without it, catecholamines don\'t work properly on blood vessels. That\'s why he\'s hypotensive despite 2L fluids. He needs steroids to restore vascular responsiveness. Continue fluids (with dextrose for hypoglycemia), but steroids are the key intervention.',
        'hyperkalemia': 'His hyperkalemia (6.2) is from aldosterone deficiency (causes renal K retention). Treatment: (1) Steroids - hydrocortisone at high doses has mineralocorticoid effect, (2) Fluids with dextrose - dilution and glucose-mediated K shift, (3) If ECG changes, standard hyperK treatment (calcium, insulin). Usually improves rapidly with steroids.',
        'hyperpigmentation': 'His hyperpigmentation indicates PRIMARY adrenal insufficiency (Addison disease). High ACTH (trying to stimulate failed adrenals) cross-reacts with melanocyte receptors causing pigmentation. Secondary (pituitary) insufficiency doesn\'t have hyperpigmentation because ACTH is low.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Adrenal Crisis Module', link: '../mechanism/adrenal-crisis-module.html', reason: 'Understand HPA axis and crisis physiology' },
        { type: 'reasondx', title: 'Adrenal Crisis Adventure', link: '../ReasonDx/adventure-cases/adrenal-crisis-adventure.html', reason: 'Practice adrenal crisis management' },
        { type: 'reasondx', title: 'Adrenal Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=adrenal-crisis-deep-dive', reason: 'Diagnosis and treatment algorithms' }
    ],
    evidenceBase: {
        guidelines: [
            "Endocrine Society Guidelines on Adrenal Insufficiency 2016",
            "European Expert Consensus on Adrenal Crisis"
        ],
        keyEvidence: [
            "Adrenal crisis mortality ~6% even with treatment, higher if delayed",
            "Do not delay treatment for diagnostic confirmation",
            "Hydrocortisone at stress doses provides mineralocorticoid coverage",
            "Patient education on sick-day rules prevents most crises"
        ],
        openAccessLinks: [
            "https://academic.oup.com/jcem/article/101/2/364/2810222"
        ]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_ENDOCRINE_CASES;
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_ENDOCRINE_CASES);
}ant. She also has hyponatremia and hypoglycemia.',
        assessment: 'This is myxedema coma - decompensated hypothyroidism. Classic triad: altered mental status, hypothermia, precipitating event. Mortality is 30-60% without treatment. She needs IV thyroid hormone and stress-dose steroids.',
        recommendation: 'Giving hydrocortisone 100mg IV now - must give BEFORE thyroid hormone. Then IV levothyroxine loading dose. Passive rewarming only. Treating her hyponatremia and hypoglycemia. She needs ICU. Can endocrine consult urgently?'
    },
    defined_responses: {
        'coma required': 'No! Despite the name, actual coma is NOT required. The diagnostic criteria are: (1) Altered mental status (confusion to coma), (2) Hypothermia (often <35°C), (3) Precipitating event (infection, cold exposure, medications, stroke). She has all three - this is myxedema coma even though she\'s responsive to pain.',
        't4 vs t3': 'IV T4 (levothyroxine) is preferred by most experts: Loading dose 200-400 mcg IV, then 50-100 mcg daily. T3 (liothyronine) is faster acting but higher cardiac risk. Some use combination T4 + low-dose T3. Oral absorption is unreliable - must give IV. Improvement takes 24-72 hours.',
        'steroids why': 'CRITICAL: Give steroids BEFORE or WITH thyroid hormone. Many myxedema patients have concurrent adrenal insufficiency (Schmidt syndrome) or relative adrenal insufficiency. Thyroid hormone increases cortisol metabolism - giving it without steroids can precipitate adrenal crisis. Hydrocortisone 100mg IV, then 50-100mg q8h.',
        'warming': 'PASSIVE rewarming only - blankets, warm room. AVOID active rewarming (warming blankets, warm IV fluids). Active rewarming causes peripheral vasodilation → cardiovascular collapse in these fragile patients. Passive rewarming allows slow, safe temperature recovery as thyroid hormone takes effect.',
        'other issues': 'Her hyponatremia (118) is from SIADH/decreased free water clearance - will improve with thyroid hormone, may need hypertonic saline if severe/symptomatic. Hypoglycemia (52) common - give D50, monitor closely. Treat precipitant aggressively - her pneumonia needs antibiotics.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Thyroid Module', link: '../mechanism/thyroid-module.html', reason: 'Understand hypothyroidism pathophysiology' },
        { type: 'reasondx', title: 'Myxedema Coma Adventure', link: '../ReasonDx/adventure-cases/myxedema-coma-adventure.html', reason: 'Practice myxedema management' },
        { type: 'reasondx', title: 'Myxedema Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=myxedema-coma-deep-dive', reason: 'Treatment algorithms' }
    ],
    evidenceBase: {
        guidelines: [
            "ATA Guidelines on Hypothyroidism 2014",
            "Endocrine Society Clinical Practice Guidelines"
        ],
        keyEvidence: [
            "Mortality 30-60% even with treatment",
            "Steroids must be given before/with thyroid hormone",
            "IV administration required - oral absorption unreliable",
            "Passive rewarming only - active rewarming is dangerous"
        ],
        openAccessLinks: [
            "https://www.liebertpub.com/doi/10.1089/thy.2014.0028"
        ]
    }
},

// ============================================================================
// CASE 5: ADRENAL CRISIS
// ============================================================================

'adrenal-crisis': {
    id: 'adrenal-crisis',
    title: 'Adrenal Crisis',
    category: 'Endocrine',
    isParallel: false,
    parallelCase: 'adrenal-insufficiency-chronic',
    parallelDescription: 'Chronic adrenal insufficiency - stable',
    patient: { 
        name: 'David Martinez', 
        age: 45, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Weakness and Vomiting' 
    },
    description: 'A 45-year-old man on chronic prednisone for lupus presents with 2 days of gastroenteritis. Ran out of prednisone 4 days ago. HR 112, BP 72/48 unresponsive to 2L fluids, weak. Hyperpigmented skin creases. Na 126, K 6.2, glucose 58, Cr 1.8. Random cortisol 2.1 µg/dL.',
    openingStatement: 'Mr. Martinez has adrenal crisis - he\'s in refractory hypotensive shock from cortisol deficiency after stopping his chronic steroids during illness. This is immediately life-threatening. How do you recognize and treat this?',
    conceptDomains: {
        'Situation': ['hemodynamic_status', 'fluid_responsiveness', 'electrolytes'],
        'Background': ['steroid_history', 'recent_illness', 'primary_vs_secondary'],
        'Assessment': ['adrenal_crisis_diagnosis', 'precipitant', 'cortisol_level'],
        'Recommendation': ['immediate_steroids', 'fluid_resuscitation', 'treat_precipitant']
    },
    quickActions: [
        'How do I diagnose adrenal crisis?',
        'What steroid and what dose?',
        'Why is he hyperkalemic?',
        'Do I need to confirm with stim test first?'
    ],
    keyTeachingPoints: [
        'Adrenal crisis: Acute cortisol deficiency → refractory hypotension, hyponatremia, hyperkalemia, hypoglycemia',
        'Most common cause: Abrupt steroid withdrawal or failure to stress-dose during illness',
        'Treatment: Hydrocortisone 100mg IV bolus immediately - don\'t wait for labs',
        'Primary vs secondary: Primary (Addison\'s) has hyperpigmentation and hyperkalemia; secondary doesn\'t',
        'Random cortisol <3 µg/dL during stress is diagnostic'
    ],
    sbarTemplate: {
        situation: 'I have a 45-year-old man in adrenal crisis. He\'s hypotensive at 72/48 despite 2 liters of fluid, and has the classic electrolyte pattern - low sodium, high potassium, low glucose.',
        background: 'He has lupus and has been on chronic prednisone for years, but ran out 4 days ago. He then developed gastroenteritis - the stress without cortisol precipitated this crisis. Random cortisol is only 2.1.',
        assessment: 'This is adrenal crisis from steroid withdrawal during acute illness. His adrenals are suppressed from chronic steroid use and can\'t respond to stress. He won\'t respond to fluids alone - he needs steroids.',
        recommendation: 'Giving hydrocortisone 100mg IV push now. Continuing aggressive fluid resuscitation. Treating his hyperkalemia. He needs ICU monitoring. Once stable, will need steroid taper education. Can ICU accept?'
    },
    defined_responses: {
        'diagnosis': 'Adrenal crisis is a CLINICAL diagnosis. Classic features: (1) Refractory hypotension (doesn\'t respond to fluids alone), (2) Hyponatremia, (3) Hyperkalemia (primary only), (4) Hypoglycemia, (5) History of steroid use or adrenal disease, (6) Precipitating stressor. His random cortisol of 2.1 during stress confirms it (should be >18-20 if adrenals are working).',
        'steroid choice': 'Hydrocortisone 100mg IV push immediately, then 50-100mg IV q6-8h (or 200mg/day continuous infusion). Hydrocortisone preferred because it has mineralocorticoid activity (helps with Na/K/volume). Dexamethasone 4mg is alternative but lacks mineralocorticoid effect and interferes with cortisol testing.',
        'hyperkalemia why': 'Aldosterone deficiency. In PRIMARY adrenal insufficiency (his chronic steroid use suppressed his adrenals = secondary, but can act like primary), you lose both cortisol AND aldosterone. Aldosterone retains sodium and excretes potassium. Without it: hyponatremia + hyperkalemia. This is why he has K of 6.2.',
        'stim test first': 'NO! Do NOT wait for cosyntropin stimulation test before treating. Adrenal crisis is immediately life-threatening - treat empirically based on clinical picture. You can draw a random cortisol before giving steroids (his was 2.1 = diagnostic), but don\'t delay treatment. Stim test can be done later to confirm chronic diagnosis.',
        'hyperpigmentation': 'Hyperpigmentation (skin creases, gums, scars) occurs in PRIMARY adrenal insufficiency. The pituitary makes ACTH to try to stimulate the failing adrenals. ACTH is cleaved from same precursor as MSH (melanocyte-stimulating hormone) → darkening. His hyperpigmentation suggests his adrenals may now be completely suppressed/damaged.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Adrenal Crisis Module', link: '../mechanism/adrenal-crisis-module.html', reason: 'Understand HPA axis and cortisol physiology' },
        { type: 'reasondx', title: 'Adrenal Crisis Adventure', link: '../ReasonDx/adventure-cases/adrenal-crisis-adventure.html', reason: 'Practice adrenal crisis management' },
        { type: 'reasondx', title: 'Adrenal Crisis Deep Dive', link: '../ReasonDx/deep-dive-player.html?module=adrenal-crisis-deep-dive', reason: 'Primary vs secondary, stress dosing' }
    ],
    evidenceBase: {
        guidelines: [
            "Endocrine Society Adrenal Insufficiency Guidelines 2016",
            "European Guidelines on Adrenal Insufficiency"
        ],
        keyEvidence: [
            "Hydrocortisone is first-line due to mineralocorticoid activity",
            "Mortality from untreated adrenal crisis approaches 100%",
            "Random cortisol <3 µg/dL during stress is diagnostic",
            "Most crises occur in known adrenal insufficiency patients during illness"
        ],
        openAccessLinks: [
            "https://academic.oup.com/jcem/article/101/2/364/2810222"
        ]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_ENDOCRINE_CASES;
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_ENDOCRINE_CASES);
}ant. She also has hyponatremia and hypoglycemia.',
        assessment: 'This is myxedema coma - decompensated hypothyroidism with altered mental status, hypothermia, and a precipitating infection. Mortality is 30-60% even with treatment.',
        recommendation: 'Giving hydrocortisone 100mg IV NOW before thyroid hormone. Then IV levothyroxine loading dose. Passive rewarming only. Treating her pneumonia. She needs ICU.'
    },
    defined_responses: {
        'coma required': 'NO - coma is not required. "Myxedema coma" is a misnomer. Altered mental status ranges from confusion to lethargy to coma. Key features: Altered mentation + hypothermia + precipitating event + severe hypothyroidism.',
        't4 vs t3': 'IV T4 (levothyroxine) preferred: Loading dose 200-400 mcg IV, then 50-100 mcg daily. T3 is faster but higher cardiac risk. Some use combination.',
        'why steroids': 'CRITICAL: Give steroids BEFORE or WITH thyroid hormone. Hypothyroidism can mask adrenal insufficiency. Giving thyroid hormone can precipitate adrenal crisis. Give hydrocortisone 100mg IV q8h.',
        'warming': 'PASSIVE warming only (blankets, warm room). AVOID active external warming - causes vasodilation and cardiovascular collapse.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Thyroid Module', link: '../mechanism/thyroid-module.html', reason: 'Understand thyroid hormone physiology' },
        { type: 'reasondx', title: 'Myxedema Coma Adventure', link: '../ReasonDx/adventure-cases/myxedema-coma-adventure.html', reason: 'Practice myxedema coma management' }
    ],
    evidenceBase: {
        guidelines: ["ATA Guidelines on Hypothyroidism 2014", "Endocrine Society Clinical Practice Guidelines"],
        keyEvidence: ["Mortality 30-60% even with treatment", "Steroids should precede or accompany thyroid hormone", "Passive rewarming preferred"],
        openAccessLinks: ["https://www.liebertpub.com/doi/10.1089/thy.2014.0028"]
    }
},

// ============================================================================
// CASE 5: ADRENAL CRISIS
// ============================================================================

'adrenal-crisis': {
    id: 'adrenal-crisis',
    title: 'Adrenal Crisis',
    category: 'Endocrine',
    isParallel: false,
    parallelCase: 'adrenal-insufficiency-chronic',
    parallelDescription: 'Chronic adrenal insufficiency - stable',
    patient: { 
        name: 'David Martinez', 
        age: 45, 
        sex: 'Male', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Weakness and Vomiting' 
    },
    description: 'A 45-year-old man on chronic prednisone for lupus (recently tapered himself off over 1 week) presents with 3 days of weakness, nausea, vomiting, and abdominal pain after a viral illness. HR 112, BP 74/48 (not responding to 2L fluids). Na 128, K 6.2, glucose 58. Random cortisol 2.1 mcg/dL.',
    openingStatement: 'Mr. Martinez has adrenal crisis from abrupt steroid withdrawal in the setting of illness. He\'s in refractory shock. This will kill him without immediate steroids.',
    conceptDomains: {
        'Situation': ['shock_refractory_to_fluids', 'electrolyte_pattern', 'cortisol_level'],
        'Background': ['steroid_history', 'taper_story', 'precipitant'],
        'Assessment': ['primary_vs_secondary', 'crisis_diagnosis', 'steroid_dosing'],
        'Recommendation': ['immediate_steroids', 'fluid_resuscitation', 'electrolyte_management']
    },
    quickActions: ['What\'s the classic electrolyte pattern?', 'Which steroid do I give?', 'Do I wait for cortisol level?', 'Why isn\'t he responding to fluids?'],
    keyTeachingPoints: [
        'Adrenal crisis: Hypotension refractory to fluids + GI symptoms + electrolyte abnormalities',
        'Classic labs: Hyponatremia, hyperkalemia, hypoglycemia',
        'DON\'T wait for cortisol level - give steroids empirically',
        'Hydrocortisone 100mg IV bolus, then 50-100mg q6-8h',
        'Stress-dose steroids needed for ANY stressor if on chronic steroids'
    ],
    sbarTemplate: {
        situation: 'I have a 45-year-old man in adrenal crisis. He\'s in refractory hypotensive shock - BP 74/48 not responding to 2 liters of fluid. Random cortisol is only 2.1.',
        background: 'He has lupus on chronic prednisone but tapered himself off over the past week. He then got a viral illness. Classic setup for adrenal crisis.',
        assessment: 'This is adrenal crisis - refractory shock, hyponatremia, hyperkalemia, hypoglycemia, and low cortisol in a patient with suppressed HPA axis.',
        recommendation: 'Giving hydrocortisone 100mg IV push right now. Continuing aggressive fluids with normal saline and dextrose for his hypoglycemia. Treating his hyperkalemia. He needs ICU monitoring.'
    },
    defined_responses: {
        'electrolyte pattern': 'Classic triad: (1) Hyponatremia (from cortisol/aldosterone deficiency), (2) Hyperkalemia (from aldosterone deficiency), (3) Hypoglycemia (cortisol is counterregulatory). He has all three: Na 128, K 6.2, glucose 58.',
        'which steroid': 'HYDROCORTISONE 100mg IV bolus, then 50-100mg IV q6-8h. Hydrocortisone has mineralocorticoid activity at high doses. Dexamethasone works for cortisol deficiency but NO mineralocorticoid activity.',
        'wait for cortisol': 'NO! Do NOT wait. Adrenal crisis can kill in hours. Give steroids immediately. Random cortisol <3 during stress strongly suggests insufficiency.',
        'why fluids fail': 'Cortisol is required for vascular tone and catecholamine responsiveness. Without cortisol, blood vessels can\'t constrict properly. Steroids restore vascular responsiveness.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Adrenal Crisis Module', link: '../mechanism/adrenal-crisis-module.html', reason: 'Understand HPA axis and cortisol physiology' },
        { type: 'reasondx', title: 'Adrenal Crisis Adventure', link: '../ReasonDx/adventure-cases/adrenal-crisis-adventure.html', reason: 'Practice adrenal crisis management' }
    ],
    evidenceBase: {
        guidelines: ["Endocrine Society Adrenal Insufficiency Guidelines 2016", "European Guidelines on Adrenal Insufficiency 2021"],
        keyEvidence: ["Empiric treatment should not be delayed for diagnostic testing", "Hydrocortisone preferred for mineralocorticoid activity", "Mortality without treatment approaches 100%"],
        openAccessLinks: ["https://academic.oup.com/jcem/article/101/2/364/2810222"]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_ENDOCRINE_CASES;
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_ENDOCRINE_CASES);
}
