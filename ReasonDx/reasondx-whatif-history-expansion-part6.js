/**
 * ReasonDx What-If History Q&A Expansion - Part 6
 * Last Updated: December 28, 2025
 */
(function() {
    'use strict';
    function init() {
        if (typeof window.cases === 'undefined') { setTimeout(init, 450); return; }
        expand();
    }
    function e(caseId, scenarioId, a) {
        const c = window.cases?.find(x => x.id === caseId);
        if (!c?.whatIfScenarios) return;
        const s = c.whatIfScenarios.find(x => x.id === scenarioId);
        if (s) { s.modifications = s.modifications || {}; s.modifications.historyAnswers = { ...s.modifications.historyAnswers, ...a }; }
    }
    function expand() {
        e('red-eye-conjunctivitis', 'whatif_conjunctivitis_gonococcal', {"discharge": "Thick purulent discharge.", "purulent": "Lots of pus, yellow-green.", "swelling": "Eyelids very swollen.", "sexually active": "Yes, new partner 2 weeks ago.", "urethral": "Yes, discharge from penis too."});
        e('red-eye-conjunctivitis', 'whatif_conjunctivitis_herpes', {"pain": "Significant eye pain.", "photophobia": "Very light sensitive.", "vesicles": "Blisters on my eyelid.", "cold sores": "Yes, I get cold sores.", "one eye": "Just one eye."});
        e('red-eye-conjunctivitis', 'whatif_conjunctivitis_contact_lens', {"contact lenses": "Yes, soft contacts.", "overwear": "I sometimes sleep in them.", "cleaning": "Not always good about cleaning.", "water": "I've rinsed with tap water.", "ulcer": "Could I have an ulcer?"});
        e('copd-exacerbation', 'whatif_copd_chest_pain', {"chest pain": "Pressure in my chest.", "radiation": "Goes to left arm.", "sweating": "Yes, sweating.", "copd": "Yes, I have COPD.", "risk factors": "Smoked 40 years, diabetes."});
        e('copd-exacerbation', 'whatif_copd_leg_swelling', {"leg swelling": "Both legs very swollen.", "short of breath": "More short of breath.", "oxygen": "On home oxygen, 4 liters.", "pulmonary hypertension": "They mentioned that."});
        e('delirium', 'whatif_delirium_alcohol', {"agitated": "Very agitated.", "hallucinations": "Sees bugs crawling.", "tremor": "Hands shaking.", "alcohol": "Pint of vodka daily.", "last drink": "Stopped 2 days ago."});
        e('delirium', 'whatif_delirium_focal_neuro', {"confusion": "Confused with right-sided weakness.", "facial droop": "Right face droop.", "speech": "Slurred speech.", "afib": "Yes, has AFib.", "stroke": "Could he be having a stroke?"});
        e('depression-mdd', 'whatif_depression_active_si', {"suicidal": "Yes, I think about suicide daily.", "plan": "Yes, I have a plan - pills.", "means": "Yes, I have pills.", "hopeless": "I feel hopeless.", "safe": "I don't feel safe."});
        e('depression-mdd', 'whatif_depression_elderly', {"interest": "Lost interest in everything.", "spouse": "My wife died last year.", "lonely": "Very lonely.", "suicidal": "Thought about joining my wife.", "passive": "Wish I wouldn't wake up."});
        e('depression-mdd', 'whatif_depression_mania', {"great": "I feel amazing!", "sleep": "Only need 2-3 hours.", "spending": "Spent thousands.", "antidepressant": "Just started Lexapro 3 weeks ago."});
        e('diarrhea-acute', 'whatif_diarrhea_cdiff', {"diarrhea": "10-15 times daily, watery.", "smell": "Very foul smelling.", "antibiotics": "Just finished clindamycin.", "hospital": "Was hospitalized last month."});
        e('diarrhea-acute', 'whatif_diarrhea_bloody_febrile', {"blood": "Significant blood in stool.", "fever": "101°F.", "travel": "Went to Mexico last week.", "tenesmus": "Feel like I need to go but nothing comes."});
        e('diarrhea-acute', 'whatif_diarrhea_traveler', {"travel": "Went to India.", "watery": "Yes, watery diarrhea.", "food": "Ate some street food.", "cipro": "I have Cipro but haven't taken it."});
        e('dka', 'whatif_dka_low_potassium', {"vomiting": "Vomiting 10-15 times.", "weakness": "Legs very weak.", "palpitations": "Heart fluttering.", "pump": "Insulin pump malfunctioned.", "sugar": "Over 500."});
        e('new-onset-diabetes', 'whatif_dm_dka', {"polyuria": "Urinating constantly.", "weight loss": "Lost 20 pounds in a month.", "fruity breath": "Breath smells fruity.", "age": "I'm 22."});
        e('new-onset-diabetes', 'whatif_dm_pancreatic_cancer', {"new diabetes": "Just diagnosed at 65.", "weight loss": "Lost 15 pounds.", "jaundice": "Turning yellow.", "back pain": "Upper belly pain to back."});
        e('new-onset-diabetes', 'whatif_dm_type1', {"age": "I'm 16.", "weight loss": "Lost 15 pounds.", "eating more": "Eating more but losing weight.", "autoimmune": "I have thyroid disease."});
        e('dvt', 'whatif_dvt_calf_only', {"swelling": "Just my calf is swollen.", "location": "Calf only, not thigh.", "recent travel": "Long flight last week.", "how long flight": "12 hours."});
        e('rlq-ectopic', 'whatif_ectopic_stable', {"pain": "Right-sided pelvic pain, 5/10.", "bleeding": "Light spotting.", "pregnant": "Positive test.", "stable": "I feel okay otherwise."});
        e('rlq-ectopic', 'whatif_ectopic_puo', {"bleeding": "Vaginal bleeding getting heavier.", "clots": "Yes, some clots.", "tissue": "I might have passed tissue.", "complete": "I don't know if it's complete."});
        e('rlq-ectopic', 'whatif_ectopic_heterotopic', {"ivf": "Yes, I did IVF.", "embryos transferred": "They transferred 2.", "one in uterus": "Confirmed one in uterus.", "pain": "But now I have right-sided pain."});
        e('epigastric', 'whatif_epigastric_acs', {"epigastric pain": "Burning in upper stomach.", "sweating": "Yes, sweating.", "diabetic": "Yes, I'm diabetic.", "thought heartburn": "Thought it was heartburn."});
        e('epigastric', 'whatif_epigastric_pancreatitis', {"pain": "Severe, goes to back.", "position": "Better leaning forward.", "alcohol": "I drink heavily.", "fatty food": "Ate a big greasy meal."});
        e('epigastric', 'whatif_epigastric_perforation', {"pain": "Sudden severe abdominal pain.", "rigid": "My belly feels hard.", "ulcer": "Yes, I have an ulcer.", "nsaids": "I take a lot of ibuprofen."});
        e('falls-elderly', 'whatif_falls_hip_fracture', {"hip pain": "My hip really hurts.", "walk": "No, I can't walk.", "shortened": "My leg looks shorter.", "rotated": "It's turned outward.", "osteoporosis": "Yes, I have osteoporosis."});
        e('falls-elderly', 'whatif_falls_subdural', {"fell": "Fell and hit head a week ago.", "felt fine after": "Felt okay at first.", "now": "Now having symptoms.", "blood thinner": "Yes, I take Coumadin."});
        e('falls-elderly', 'whatif_falls_syncope', {"passed out": "I think I passed out first.", "before falling": "Felt lightheaded then woke up on floor.", "cardiac history": "I have heart problems.", "orthostatic": "I get dizzy when I stand."});
        e('chronic-fatigue-anemia', 'whatif_fatigue_anemia_transfusion', {"fatigue": "Extremely tired.", "bleeding": "Heavy periods.", "how heavy": "Soaking pads every hour.", "hemoglobin": "Blood count very low, 5 or 6."});
        e('chronic-fatigue-anemia', 'whatif_fatigue_b12_neuro', {"numbness": "Numbness in hands and feet.", "balance": "Trouble with balance.", "diet": "I'm vegan.", "b12": "Don't take B12 supplements."});
        e('chronic-fatigue-anemia', 'whatif_fatigue_pancytopenia', {"bruising": "Bruising easily.", "bleeding": "Gums bleeding.", "infections": "Several infections.", "night sweats": "Yes, night sweats.", "lymph nodes": "Lumps in neck and armpits."});
    }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
