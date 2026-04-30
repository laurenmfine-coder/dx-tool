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
    // ── allergy ──
    'ace-angioedema':                                         { mechanismModule: 'urticaria-module', coachTopic: 'hae', category: 'allergy' },
    'ace-angioedema-v2':                                      { mechanismModule: 'urticaria-module', coachTopic: 'hae', category: 'allergy' },
    'acne-management':                                        { mechanismModule: 'dermatology-module', coachTopic: 'atopic-derm', category: 'allergy' },
    'acquired-c1esterase-inhibitor-deficiency':               { mechanismModule: 'urticaria-module', coachTopic: 'hae', category: 'allergy' },
    'acquired-c1esterase-inhibitor-deficiency-v2':            { mechanismModule: 'urticaria-module', coachTopic: 'hae', category: 'allergy' },
    'acute-urticaria':                                        { mechanismModule: 'urticaria-module', coachTopic: 'urticaria', category: 'allergy' },
    'acute-urticaria-v2':                                     { mechanismModule: 'urticaria-module', coachTopic: 'urticaria', category: 'allergy' },
    'allergic-angioedema':                                    { mechanismModule: 'urticaria-module', coachTopic: 'hae', category: 'allergy' },
    'allergic-angioedema-v2':                                 { mechanismModule: 'urticaria-module', coachTopic: 'hae', category: 'allergy' },
    'allergic-conjunctivitis-severe':                         { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'allergic-conjunctivitis-severe-v2':                      { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'allergic-rhinitis-immunotherapy':                        { mechanismModule: 'rhinitis-module', coachTopic: 'allergic-rhinitis', category: 'allergy' },
    'allergic-rhinitis-uncontrolled':                         { mechanismModule: 'rhinitis-module', coachTopic: 'allergic-rhinitis', category: 'allergy' },
    'allergic-rhinitis-uncontrolled-v2':                      { mechanismModule: 'rhinitis-module', coachTopic: 'allergic-rhinitis', category: 'allergy' },
    'anaphylaxis':                                            { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'anaphylaxis-v2':                                         { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'anaphylaxis-v3':                                         { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'anaphylaxis-v4':                                         { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'anaphylaxis-v5':                                         { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'atopic-dermatitis-severe':                               { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'atopic-dermatitis-severe-v2':                            { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'autoimmune-blistering-disease':                          { mechanismModule: 'dermatology-module', coachTopic: 'atopic-derm', category: 'allergy' },
    'chronic-spontaneous-urticaria':                          { mechanismModule: 'urticaria-module', coachTopic: 'urticaria', category: 'allergy' },
    'chronic-spontaneous-urticaria-v2':                       { mechanismModule: 'urticaria-module', coachTopic: 'urticaria', category: 'allergy' },
    'contact-dermatitis-occupational':                        { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'contact-dermatitis-occupational-v2':                     { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'crswnp-biologics':                                       { mechanismModule: 'rhinitis-module', coachTopic: 'allergic-rhinitis', category: 'allergy' },
    'crswnp-dupilumab':                                       { mechanismModule: 'rhinitis-module', coachTopic: 'allergic-rhinitis', category: 'allergy' },
    'cvid-presentation':                                      { mechanismModule: 'pid-module', coachTopic: 'cvid', category: 'allergy' },
    'cvid-presentation-v2':                                   { mechanismModule: 'pid-module', coachTopic: 'cvid', category: 'allergy' },
    'digeorge-22q11':                                         { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'dress-syndrome':                                         { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'dress-syndrome-v2':                                      { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'drug-allergy-vancomycin-rms':                            { mechanismModule: 'drug-allergy-module', coachTopic: 'drug-allergy', category: 'allergy' },
    'drug-allergy-vancomycin-rms-v2':                         { mechanismModule: 'drug-allergy-module', coachTopic: 'drug-allergy', category: 'allergy' },
    'eczema-herpeticum':                                      { mechanismModule: 'atopic-derm-module', coachTopic: 'atopic-derm', category: 'allergy' },
    'eczema-herpeticum-v2':                                   { mechanismModule: 'atopic-derm-module', coachTopic: 'atopic-derm', category: 'allergy' },
    'eoe-adult':                                              { mechanismModule: 'eosinophilia-hp-module', coachTopic: 'eoe', category: 'allergy' },
    'eoe-adult-v2':                                           { mechanismModule: 'eosinophilia-hp-module', coachTopic: 'eoe', category: 'allergy' },
    'eoe-pediatric':                                          { mechanismModule: 'eosinophilia-hp-module', coachTopic: 'eoe', category: 'allergy' },
    'eoe-pediatric-v2':                                       { mechanismModule: 'eosinophilia-hp-module', coachTopic: 'eoe', category: 'allergy' },
    'erythema-multiforme-major':                              { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'erythema-multiforme-major-v2':                           { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'food-allergy-oit-reaction':                              { mechanismModule: 'food-allergy-module', coachTopic: 'food-allergy', category: 'allergy' },
    'food-allergy-oit-reaction-v2':                           { mechanismModule: 'food-allergy-module', coachTopic: 'food-allergy', category: 'allergy' },
    'fpies-acute':                                            { mechanismModule: 'food-allergy-module', coachTopic: 'food-allergy', category: 'allergy' },
    'fpies-acute-v2':                                         { mechanismModule: 'food-allergy-module', coachTopic: 'food-allergy', category: 'allergy' },
    'fpies-chronic':                                          { mechanismModule: 'food-allergy-module', coachTopic: 'food-allergy', category: 'allergy' },
    'fpies-chronic-v2':                                       { mechanismModule: 'food-allergy-module', coachTopic: 'food-allergy', category: 'allergy' },
    'hae-genetics':                                           { mechanismModule: 'urticaria-module', coachTopic: 'hae', category: 'allergy' },
    'hereditary-angioedema':                                  { mechanismModule: 'urticaria-module', coachTopic: 'hae', category: 'allergy' },
    'hereditary-angioedema-v2':                               { mechanismModule: 'urticaria-module', coachTopic: 'hae', category: 'allergy' },
    'hypereosinophilic-syndrome':                             { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'idiopathic-angioedema':                                  { mechanismModule: 'urticaria-module', coachTopic: 'hae', category: 'allergy' },
    'idiopathic-angioedema-v2':                               { mechanismModule: 'urticaria-module', coachTopic: 'hae', category: 'allergy' },
    'inducible-urticaria':                                    { mechanismModule: 'urticaria-module', coachTopic: 'urticaria', category: 'allergy' },
    'insect-sting-anaphylaxis':                               { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'insect-sting-anaphylaxis-v2':                            { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'mastocytosis':                                           { mechanismModule: 'mastocytosis-mcas-module', coachTopic: 'mastocytosis', category: 'allergy' },
    'mastocytosis-v2':                                        { mechanismModule: 'mastocytosis-mcas-module', coachTopic: 'mastocytosis', category: 'allergy' },
    'mbs-anaphylaxis-cascade':                                { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'mcas-mast-cell':                                         { mechanismModule: 'mastocytosis-mcas-module', coachTopic: 'mastocytosis', category: 'allergy' },
    'milk-allergy-infant':                                    { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'milk-allergy-infant-v2':                                 { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'nec-fasciitis':                                          { mechanismModule: 'dermatology-module', coachTopic: 'atopic-derm', category: 'allergy' },
    'nsaid-hypersensitivity':                                 { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'nsaid-hypersensitivity-v2':                              { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'ot-burn-rehabilitation':                                 { mechanismModule: 'dermatology-module', coachTopic: 'atopic-derm', category: 'allergy' },
    'peanut-allergy-anaphylaxis':                             { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'peanut-allergy-anaphylaxis-v2':                          { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'penicillin-allergy-delabeling':                          { mechanismModule: 'drug-allergy-module', coachTopic: 'drug-allergy', category: 'allergy' },
    'penicillin-allergy-delabeling-v2':                       { mechanismModule: 'drug-allergy-module', coachTopic: 'drug-allergy', category: 'allergy' },
    'psoriasis-moderate-severe':                              { mechanismModule: 'dermatology-module', coachTopic: 'atopic-derm', category: 'allergy' },
    'scid-ada':                                               { mechanismModule: 'pid-module', coachTopic: 'cvid', category: 'allergy' },
    'severe-allergic-reaction':                               { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'severe-allergic-reaction-v2':                            { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'severe-allergic-reaction-v3':                            { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'sjs-ten':                                                { mechanismModule: 'drug-allergy-module', coachTopic: 'sjs-ten', category: 'allergy' },
    'sjs-ten-v2':                                             { mechanismModule: 'drug-allergy-module', coachTopic: 'sjs-ten', category: 'allergy' },
    'sjsten-overlap':                                         { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'sjsten-overlap-v2':                                      { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'staphylococcal-scalded-skin-syndrome':                   { mechanismModule: 'dermatology-module', coachTopic: 'atopic-derm', category: 'allergy' },
    'venom-immunotherapy-reaction':                           { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'venom-immunotherapy-reaction-v2':                        { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'vet-anaphylaxis-bee-sting':                              { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },
    'xla-brutons':                                            { mechanismModule: 'anaphylaxis-module', coachTopic: 'anaphylaxis', category: 'allergy' },

    // ── cardiovascular ──
    'acute-coronary-syndrome':                                { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'acute-mi':                                               { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'acute-mi-dyspnea':                                       { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'acute-mi-with-av-block':                                 { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'arc-hf-medicine':                                        { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'arc-hf-nursing':                                         { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'arc-hf-ot':                                              { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'arc-hf-pharmacy':                                        { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'arc-hf-pt':                                              { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'cardiac-syncope':                                        { mechanismModule: 'acs-module', coachTopic: 'cardiac-syncope', category: 'cardiovascular' },
    'cardiac-tamponade':                                      { mechanismModule: 'acs-module', coachTopic: 'cardiac-syncope', category: 'cardiovascular' },
    'chf-exacerbation':                                       { mechanismModule: 'heart-failure-module', coachTopic: 'heart-failure', category: 'cardiovascular' },
    'chf-exacerbation-v2':                                    { mechanismModule: 'heart-failure-module', coachTopic: 'heart-failure', category: 'cardiovascular' },
    'chf-v1':                                                 { mechanismModule: 'heart-failure-module', coachTopic: 'heart-failure', category: 'cardiovascular' },
    'complete-heart-block':                                   { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'complete-heart-block-v2':                                { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'cross-jaw-chest':                                        { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'cross-postop-deterioration':                             { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'druginduced-av-block':                                   { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'gi-bleed-syncope':                                       { mechanismModule: 'acs-module', coachTopic: 'cardiac-syncope', category: 'cardiovascular' },
    'hcm':                                                    { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'heart-failure-hfpef':                                    { mechanismModule: 'heart-failure-module', coachTopic: 'heart-failure', category: 'cardiovascular' },
    'hypertensive-emergency':                                 { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'infiltrative-cardiomyopathy':                            { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'long-qt-syndrome':                                       { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'myocarditis':                                            { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'new-onset-atrial-fibrillation':                          { mechanismModule: 'afib-module', coachTopic: 'afib', category: 'cardiovascular' },
    'nstemi-v1':                                              { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'nstemiunstable-angina':                                  { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'orthostatic-hypotension':                                { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'pa-chest-pain-scope':                                    { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'pa-consult-interpretation':                              { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'pericarditis-v1':                                        { mechanismModule: 'acs-module', coachTopic: 'cardiac-syncope', category: 'cardiovascular' },
    'pt-cardiac-rehab-post-mi':                               { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'pulmonary-embolism-syncope':                             { mechanismModule: 'acs-module', coachTopic: 'cardiac-syncope', category: 'cardiovascular' },
    'stemi-v1':                                               { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'takotsubo-cardiomyopathy':                               { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'type-2-mi':                                              { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'unstable-angina':                                        { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },
    'vasovagal-syncope':                                      { mechanismModule: 'acs-module', coachTopic: 'cardiac-syncope', category: 'cardiovascular' },
    'vet-cardiac-chf-dog':                                    { mechanismModule: 'heart-failure-module', coachTopic: 'heart-failure', category: 'cardiovascular' },
    'vt-syncope':                                             { mechanismModule: 'acs-module', coachTopic: 'cardiac-syncope', category: 'cardiovascular' },
    'wpw-syndrome':                                           { mechanismModule: 'acs-module', coachTopic: 'stemi', category: 'cardiovascular' },

    // ── endocrine ──
    'adrenal-crisis':                                         { mechanismModule: 'endocrine-module', coachTopic: 'adrenal', category: 'endocrine' },
    'adrenal-insufficiency':                                  { mechanismModule: 'endocrine-module', coachTopic: 'adrenal', category: 'endocrine' },
    'alcoholic-ketoacidosis':                                 { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'arc-diabetes-medicine':                                  { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'arc-diabetes-nursing':                                   { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'arc-diabetes-pharmacy':                                  { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'arc-diabetes-pt':                                        { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'cross-diabetic-triad':                                   { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'dka-v1':                                                 { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'dka-v2':                                                 { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'dka-v3':                                                 { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'hyperkalemic-cardiac-emergency':                         { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'hypoglycemia':                                           { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'hypovolemic-shock-from-gastroenteritis':                 { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'inpatient-diabetes-management':                          { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'layer2-nursing-insulin-drip':                            { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'mbs-dka-cascade':                                        { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'metabolic':                                              { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'myxedema-coma':                                          { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'pharmacy-insulin-cost':                                  { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'pheochromocytoma':                                       { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'thyroid-eye-disease-od':                                 { mechanismModule: 'endocrine-module', coachTopic: 'thyroid', category: 'endocrine' },
    'thyroid-storm':                                          { mechanismModule: 'endocrine-module', coachTopic: 'thyroid', category: 'endocrine' },
    'type2-diabetes-outpatient':                              { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'vet-diabetic-ketoacidosis-cat':                          { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },
    'vet-hyperthyroidism-cat':                                { mechanismModule: 'endocrine-module', coachTopic: 'dka-endo', category: 'endocrine' },

    // ── environmental ──
    'lightning-strike-injury':                                { mechanismModule: 'environmental-occupational-module', coachTopic: 'overdose', category: 'environmental' },
    'severe-hypothermia':                                     { mechanismModule: 'environmental-occupational-module', coachTopic: 'overdose', category: 'environmental' },
    'submersion-injury':                                      { mechanismModule: 'environmental-occupational-module', coachTopic: 'overdose', category: 'environmental' },

    // ── gastrointestinal ──
    'acute-cholecystitis':                                    { mechanismModule: 'gi-hepatology-module', coachTopic: 'pancreatitis', category: 'gastrointestinal' },
    'acute-necrotizing-gallstone-pancreatitis':               { mechanismModule: 'gi-hepatology-module', coachTopic: 'pancreatitis', category: 'gastrointestinal' },
    'acute-pancreatitis':                                     { mechanismModule: 'gi-hepatology-module', coachTopic: 'pancreatitis', category: 'gastrointestinal' },
    'acute-viral-hepatitis':                                  { mechanismModule: 'gi-hepatology-module', coachTopic: 'hepatitis', category: 'gastrointestinal' },
    'alcoholic-hepatitis':                                    { mechanismModule: 'gi-hepatology-module', coachTopic: 'hepatitis', category: 'gastrointestinal' },
    'alcoholrelated-pancreatitis':                            { mechanismModule: 'gi-hepatology-module', coachTopic: 'pancreatitis', category: 'gastrointestinal' },
    'appendicitis-v1':                                        { mechanismModule: 'gi-hepatology-module', coachTopic: 'appendicitis', category: 'gastrointestinal' },
    'cholelithiasis-cholecystitis':                           { mechanismModule: 'gi-hepatology-module', coachTopic: 'pancreatitis', category: 'gastrointestinal' },
    'crohn-flare':                                            { mechanismModule: 'gi-hepatology-module', coachTopic: 'ibd', category: 'gastrointestinal' },
    'gastric-malignancy':                                     { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'ibs-management':                                         { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'incarcerated-incisional-hernia':                         { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'mesenteric-lymphadenitis':                               { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'perforated-peptic-ulcer':                                { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'sbo-strangulation':                                      { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'sbo-with-strangulation':                                 { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'severe-pancreatitis':                                    { mechanismModule: 'gi-hepatology-module', coachTopic: 'pancreatitis', category: 'gastrointestinal' },
    'simple-sbo':                                             { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'small-bowel-volvulus':                                   { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'upper-gi-bleed':                                         { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'vet-equine-colic':                                       { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'vet-gi-stasis-rabbit':                                   { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },
    'vet-hemorrhagic-gastroenteritis':                        { mechanismModule: 'gi-hepatology-module', coachTopic: 'gi-bleed', category: 'gastrointestinal' },

    // ── geriatric ──
    'arc-hip-fracture-medicine':                              { mechanismModule: 'geriatrics-module', coachTopic: 'falls', category: 'geriatric' },
    'arc-hip-fracture-nursing':                               { mechanismModule: 'geriatrics-module', coachTopic: 'falls', category: 'geriatric' },
    'arc-hip-fracture-ot':                                    { mechanismModule: 'geriatrics-module', coachTopic: 'falls', category: 'geriatric' },
    'arc-hip-fracture-pa':                                    { mechanismModule: 'geriatrics-module', coachTopic: 'falls', category: 'geriatric' },
    'cross-falls-polypharmacy':                               { mechanismModule: 'geriatrics-module', coachTopic: 'falls', category: 'geriatric' },
    'dementia-sundowning-ot':                                 { mechanismModule: 'geriatrics-module', coachTopic: 'dementia', category: 'geriatric' },
    'hip-fracture-anticoag':                                  { mechanismModule: 'geriatrics-module', coachTopic: 'falls', category: 'geriatric' },
    'hip-fracture-home-ot':                                   { mechanismModule: 'geriatrics-module', coachTopic: 'falls', category: 'geriatric' },
    'nursing-fall-prevention-night':                          { mechanismModule: 'geriatrics-module', coachTopic: 'falls', category: 'geriatric' },
    'pa-geriatric-polypharmacy':                              { mechanismModule: 'geriatrics-module', coachTopic: 'falls', category: 'geriatric' },
    'subdural-hematoma':                                      { mechanismModule: 'geriatrics-module', coachTopic: 'falls', category: 'geriatric' },

    // ── hematologic ──
    'acute-hemolytic-transfusion-reaction':                   { mechanismModule: 'hematology-module', coachTopic: 'anemia', category: 'hematologic' },
    'atypical-hus':                                           { mechanismModule: 'hematology-module', coachTopic: 'anemia', category: 'hematologic' },
    'autoimmune-hemolytic-anemia':                            { mechanismModule: 'hematology-module', coachTopic: 'anemia', category: 'hematologic' },
    'deep-vein-thrombosis':                                   { mechanismModule: 'hematology-module', coachTopic: 'anticoagulation', category: 'hematologic' },
    'dic-from-traumasurgery-with-hemorrhagic':                { mechanismModule: 'hematology-module', coachTopic: 'anemia', category: 'hematologic' },
    'dic-massive-transfusion':                                { mechanismModule: 'hematology-module', coachTopic: 'anemia', category: 'hematologic' },
    'dilutional-coagulopathy':                                { mechanismModule: 'hematology-module', coachTopic: 'anemia', category: 'hematologic' },
    'dvt-with-phlegmasia':                                    { mechanismModule: 'hematology-module', coachTopic: 'anticoagulation', category: 'hematologic' },
    'inherited-coagulopathy':                                 { mechanismModule: 'hematology-module', coachTopic: 'anemia', category: 'hematologic' },
    'surgical-bleeding':                                      { mechanismModule: 'hematology-module', coachTopic: 'anemia', category: 'hematologic' },
    'ttp':                                                    { mechanismModule: 'hematology-module', coachTopic: 'anemia', category: 'hematologic' },
    'vet-rodenticide-coagulopathy':                           { mechanismModule: 'hematology-module', coachTopic: 'anemia', category: 'hematologic' },

    // ── infectious ──
    'arc-sepsis-mbs':                                         { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'arc-sepsis-medicine':                                    { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'arc-sepsis-nursing':                                     { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'arc-sepsis-ot':                                          { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'arc-sepsis-pharmacy':                                    { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'arc-sepsis-pt':                                          { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'bacterial-meningitis':                                   { mechanismModule: 'cns-infections-gbs-module', coachTopic: 'meningitis', category: 'infectious' },
    'bacterial-tracheitis':                                   { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'cns-infection':                                          { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'cross-oral-sepsis':                                      { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'croup-epiglottitis-ddx':                                 { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'dental-antibiotic-allergy':                              { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'dental-ludwigs-angina':                                  { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'dental-space-infection':                                 { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'encephalitis':                                           { mechanismModule: 'cns-infections-gbs-module', coachTopic: 'meningitis', category: 'infectious' },
    'epidural-abscess':                                       { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'gas-gangrene':                                           { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'gastroenteritis':                                        { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'gonococcal-arthritis':                                   { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'infectious-mononucleosis-with-tonsillar-hypertrophy':    { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'infective-endocarditis':                                 { mechanismModule: 'sepsis-module', coachTopic: 'endocarditis', category: 'infectious' },
    'layer2-dental-hiv-oral':                                 { mechanismModule: 'sepsis-module', coachTopic: 'hiv', category: 'infectious' },
    'layer2-nursing-rapid-response':                          { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'lyme-carditis':                                          { mechanismModule: 'sepsis-module', coachTopic: 'lyme', category: 'infectious' },
    'mbs-strep-virulence':                                    { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'meningitis-v1':                                          { mechanismModule: 'cns-infections-gbs-module', coachTopic: 'meningitis', category: 'infectious' },
    'necrotizing-fasciitis':                                  { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'necrotizing-fasciitis-of-neck':                          { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'nursing-sepsis-surveillance':                            { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'pa-urgent-care-uti':                                     { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'pa-wound-complication':                                  { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'pcp-hiv-adult':                                          { mechanismModule: 'sepsis-module', coachTopic: 'hiv', category: 'infectious' },
    'peritonsillar-abscess-v2':                               { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'peritonsillar-cellulitis':                               { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'pharmacy-vaccine-immunosuppressed':                      { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'pyelonephritis-sepsis':                                  { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'pyelonephritis-urosepsis':                               { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'retropharyngeal-abscess':                                { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'sepsis-with-rigidity':                                   { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'sepsisseptic-shock':                                     { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'septic-arthritis':                                       { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'septic-arthritis-v2':                                    { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'septic-shock-urosepsis':                                 { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'severe-cellulitis':                                      { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'spontaneous-bacterial-peritonitis':                      { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'submandibular-sialolithiasis-with-secondary-infection':  { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'tb-immigration':                                         { mechanismModule: 'pulmonary-module', coachTopic: 'pneumonia', category: 'infectious' },
    'tick-borne-illness':                                     { mechanismModule: 'sepsis-module', coachTopic: 'lyme', category: 'infectious' },
    'vet-parvovirus':                                         { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'vet-salmonella-zoonosis':                                { mechanismModule: 'sepsis-module', coachTopic: 'sepsis-id', category: 'infectious' },
    'viral-meningitis':                                       { mechanismModule: 'cns-infections-gbs-module', coachTopic: 'meningitis', category: 'infectious' },

    // ── musculoskeletal ──
    'acl-return-to-sport-pt':                                 { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-acl-return-sport', category: 'musculoskeletal' },
    'acute-compartment-syndrome':                             { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'arc-hip-fracture-pharmacy':                              { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'arc-hip-fracture-pt':                                    { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'arc-pain-medicine':                                      { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'arc-pain-nursing':                                       { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'arc-pain-ot':                                            { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'arc-pain-pharmacy':                                      { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'arc-pain-pt':                                            { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'cauda-equina':                                           { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'cervical-myelopathy-screen-pt':                          { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'compartment-syndrome':                                   { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'displaced-femoral-neck-fracture':                        { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'fear-avoidance-lbp-pt':                                  { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'fracture-pain':                                          { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'hand-injury-splinting-ot':                               { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'hip-dislocation':                                        { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'intertrochanteric-fracture':                             { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'musculoskeletal':                                        { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'musculoskeletal-back-pain':                              { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'pathologic-fracture':                                    { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'post-tkr-rehab-pt':                                      { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'pt-chronic-ankle-instability':                           { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'pt-rotator-cuff-rehab':                                  { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-shoulder-impingement', category: 'musculoskeletal' },
    'pt-total-shoulder-replacement':                          { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-shoulder-impingement', category: 'musculoskeletal' },
    'pubic-ramus-fracture':                                   { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'rhabdomyolysis':                                         { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'musculoskeletal' },
    'shoulder-impingement-pt':                                { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-shoulder-impingement', category: 'musculoskeletal' },

    // ── neurologic ──
    'acute-ischemic-stroke':                                  { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'acute-ischemic-stroke-tpa':                              { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'arc-stroke-medicine':                                    { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'arc-stroke-nursing':                                     { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'arc-stroke-optometry':                                   { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'arc-stroke-ot':                                          { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'arc-stroke-pharmacy':                                    { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'arc-stroke-pt':                                          { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'bilateral-lumbar-radiculopathy':                         { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'brain-abscess':                                          { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'brain-masstumor':                                        { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'cerebral-salt-wasting':                                  { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'cervical-artery-dissection':                             { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'complex-migraine':                                       { mechanismModule: 'stroke-module', coachTopic: 'headache', category: 'neurologic' },
    'exertional-heat-stroke':                                 { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'guillain-barre':                                         { mechanismModule: 'cns-infections-gbs-module', coachTopic: 'guillain-barre', category: 'neurologic' },
    'heat-stroke':                                            { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'hemorrhagic-stroke':                                     { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'migraine':                                               { mechanismModule: 'stroke-module', coachTopic: 'headache', category: 'neurologic' },
    'migraine-management':                                    { mechanismModule: 'stroke-module', coachTopic: 'headache', category: 'neurologic' },
    'migraine-with-aura':                                     { mechanismModule: 'stroke-module', coachTopic: 'headache', category: 'neurologic' },
    'new-onset-seizure':                                      { mechanismModule: 'seizures-epilepsy-module', coachTopic: 'seizure', category: 'neurologic' },
    'new-seizure-mass':                                       { mechanismModule: 'seizures-epilepsy-module', coachTopic: 'seizure', category: 'neurologic' },
    'normal-pressure-hydrocephalus':                          { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'ot-als-als-equipment':                                   { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'ot-driver-rehabilitation':                               { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'ot-polytrauma-tbi':                                      { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'parkinson-falls-pt':                                     { mechanismModule: 'stroke-module', coachTopic: 'parkinson', category: 'neurologic' },
    'pt-spinal-cord-injury-incomplete':                       { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'pt-vestibular-rehab':                                    { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'sah-v1':                                                 { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'sci-adl-goals-ot':                                       { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'status-epilepticus':                                     { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'stroke-ot-profile':                                      { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'stroke-pt-goals':                                        { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'stroke-v1':                                              { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'stroke-v2':                                              { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'stroke-v3':                                              { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'tbi-return-to-work-ot':                                  { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'todd-paralysis':                                         { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },
    'vet-intervertebral-disc-disease':                        { mechanismModule: 'stroke-module', coachTopic: 'stroke-neuro', category: 'neurologic' },

    // ── obstetric ──
    'eclampsia':                                              { mechanismModule: 'ob-module', coachTopic: 'eclampsia', category: 'obstetric' },
    'ectopic-pregnancy':                                      { mechanismModule: 'ob-module', coachTopic: 'ectopic', category: 'obstetric' },
    'ectopic-pregnancy-workup':                               { mechanismModule: 'ob-module', coachTopic: 'ectopic', category: 'obstetric' },
    'layer2-dental-pregnancy':                                { mechanismModule: 'ob-module', coachTopic: 'ectopic', category: 'obstetric' },
    'nursing-postpartum-emergency':                           { mechanismModule: 'ob-module', coachTopic: 'postpartum', category: 'obstetric' },
    'ovarian-pathology':                                      { mechanismModule: 'ob-module', coachTopic: 'ectopic', category: 'obstetric' },
    'pharmacy-mtx-pregnancy':                                 { mechanismModule: 'ob-module', coachTopic: 'ectopic', category: 'obstetric' },
    'vet-dystocia-dog':                                       { mechanismModule: 'ob-module', coachTopic: 'ectopic', category: 'obstetric' },

    // ── oncologic ──
    'arc-cancer-dentistry':                                   { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'brain-metastasis':                                       { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'cns-lymphoma':                                           { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'conus-medullaris-syndrome':                              { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'dental-xerostomia-radiation':                            { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'febrile-neutropenia':                                    { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'hypercalcemia':                                          { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'layer2-dental-bisphosphonate-emergency':                 { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'meningioma':                                             { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'neutropenic-fever':                                      { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'primary-brain-tumor':                                    { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'spinal-metastasis':                                      { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'superior-vena-cava-syndrome':                            { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },
    'tonsillar-malignancy':                                   { mechanismModule: 'oncology-module', coachTopic: 'leukemia-lymphoma', category: 'oncologic' },

    // ── ophthalmology ──
    'acute-anterior-uveitis':                                 { mechanismModule: 'ophthalmology-module', coachTopic: 'anterior-uveitis', category: 'ophthalmology' },
    'angle-closure-glaucoma':                                 { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'anterior-uveitis-hlab27-od':                             { mechanismModule: 'ophthalmology-module', coachTopic: 'anterior-uveitis', category: 'ophthalmology' },
    'arc-diabetes-optometry':                                 { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'contact-lens-keratitis-od':                              { mechanismModule: 'ophthalmology-module', coachTopic: 'contact-lens-complications', category: 'ophthalmology' },
    'corneal-abrasionkeratitis':                              { mechanismModule: 'ophthalmology-module', coachTopic: 'contact-lens-complications', category: 'ophthalmology' },
    'crao':                                                   { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'crao-systemic-workup-od':                                { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'diabetic-retinopathy-od':                                { mechanismModule: 'retinal-disorders-module', coachTopic: 'diabetic-retinopathy', category: 'ophthalmology' },
    'dry-eye-sjogrens-od':                                    { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'giant-cell-arteritis-with-ophthalmic':                   { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'glaucoma-progression-od':                                { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'hypertensive-retinopathy-od':                            { mechanismModule: 'retinal-disorders-module', coachTopic: 'diabetic-retinopathy', category: 'ophthalmology' },
    'macular-hole-staging-od':                                { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'ms-optic-neuritis-od':                                   { mechanismModule: 'neuro-ophthalmology-module', coachTopic: 'optic-nerve-disorders', category: 'ophthalmology' },
    'neovascular-glaucoma-od':                                { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'ocular-hypertension-corneal-thickness-od':               { mechanismModule: 'ophthalmology-module', coachTopic: 'contact-lens-complications', category: 'ophthalmology' },
    'optic-neuritis':                                         { mechanismModule: 'neuro-ophthalmology-module', coachTopic: 'optic-nerve-disorders', category: 'ophthalmology' },
    'ot-low-vision-rehab':                                    { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'papilledema-od':                                         { mechanismModule: 'neuro-ophthalmology-module', coachTopic: 'optic-nerve-disorders', category: 'ophthalmology' },
    'pediatric-amblyopia-od':                                 { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'retinal-detachment':                                     { mechanismModule: 'retinal-disorders-module', coachTopic: 'diabetic-retinopathy', category: 'ophthalmology' },
    'temporal-arteritis':                                     { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },
    'vitreous-hemorrhage':                                    { mechanismModule: 'ophthalmology-module', coachTopic: 'glaucoma-management', category: 'ophthalmology' },

    // ── other ──
    'alpha-gal-syndrome':                                     { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'cgd-xlinked':                                            { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'dental-bruxism-tmd':                                     { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'dental-dry-socket':                                      { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'dental-extraction-anticoag':                             { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'dental-fluorosis-vs-hypoplasia':                         { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'dental-implant-failure':                                 { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'dental-mronj-risk':                                      { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'dental-oral-cancer-screen':                              { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'dental-perio-diabetes':                                  { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'dental-pulpitis':                                        { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'dental-referred-cardiac-pain':                           { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'layer2-dental-anticoag-dilemma':                         { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'layer2-nursing-family-refusal':                          { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'layer2-nursing-handoff-omission':                        { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'ludwigs-angina':                                         { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'mbs-marfan-ecm':                                         { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'mbs-mtx-enzyme':                                         { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'mbs-pku-pathway':                                        { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'nursing-patient-refusal-blood':                          { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'pa-annual-wellness':                                     { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },
    'peritonsillar-abscess':                                  { mechanismModule: 'ai-diagnostic-methods-module', coachTopic: 'ddx-framework', category: 'other' },

    // ── pediatric ──
    'aadc-deficiency':                                        { mechanismModule: 'pediatrics-module', coachTopic: 'fever-peds', category: 'pediatric' },
    'angelman-syndrome':                                      { mechanismModule: 'pediatrics-module', coachTopic: 'fever-peds', category: 'pediatric' },
    'dental-pediatric-dental-fear':                           { mechanismModule: 'pediatrics-module', coachTopic: 'fever-peds', category: 'pediatric' },
    'epiglottitis':                                           { mechanismModule: 'pediatrics-module', coachTopic: 'fever-peds', category: 'pediatric' },
    'intussusception':                                        { mechanismModule: 'pediatrics-module', coachTopic: 'intussusception', category: 'pediatric' },
    'layer2-dental-pediatric-neglect':                        { mechanismModule: 'pediatrics-module', coachTopic: 'fever-peds', category: 'pediatric' },
    'nursing-peds-pain-nonverbal':                            { mechanismModule: 'pediatrics-module', coachTopic: 'fever-peds', category: 'pediatric' },
    'ot-neonatal-icu':                                        { mechanismModule: 'pediatrics-module', coachTopic: 'fever-peds', category: 'pediatric' },
    'pa-febrile-child':                                       { mechanismModule: 'pediatrics-module', coachTopic: 'fever-peds', category: 'pediatric' },
    'pediatric-sensory-ot':                                   { mechanismModule: 'pediatrics-module', coachTopic: 'fever-peds', category: 'pediatric' },
    'pt-pediatric-cp':                                        { mechanismModule: 'pediatrics-module', coachTopic: 'fever-peds', category: 'pediatric' },
    'study-pediatric-tachycardia':                            { mechanismModule: 'pediatrics-module', coachTopic: 'fever-peds', category: 'pediatric' },

    // ── psychiatric ──
    'acute-psychosis':                                        { mechanismModule: 'psychiatry-module', coachTopic: 'psychosis', category: 'psychiatric' },
    'anxiety-panic-attack':                                   { mechanismModule: 'psychiatry-module', coachTopic: 'depression', category: 'psychiatric' },
    'anxietypanic-attack':                                    { mechanismModule: 'psychiatry-module', coachTopic: 'depression', category: 'psychiatric' },
    'delirium-elderly':                                       { mechanismModule: 'psychiatry-module', coachTopic: 'delirium', category: 'psychiatric' },
    'dementia-with-acute-delirium':                           { mechanismModule: 'psychiatry-module', coachTopic: 'delirium', category: 'psychiatric' },
    'lethal-catatonia':                                       { mechanismModule: 'psychiatry-module', coachTopic: 'depression', category: 'psychiatric' },
    'nms':                                                    { mechanismModule: 'psychiatry-module', coachTopic: 'depression', category: 'psychiatric' },
    'nursing-therapeutic-relationship':                       { mechanismModule: 'psychiatry-module', coachTopic: 'depression', category: 'psychiatric' },
    'ot-mental-health-clubhouse':                             { mechanismModule: 'psychiatry-module', coachTopic: 'depression', category: 'psychiatric' },
    'pa-behavioral-health':                                   { mechanismModule: 'psychiatry-module', coachTopic: 'depression', category: 'psychiatric' },
    'psychiatric-discharge-ot':                               { mechanismModule: 'psychiatry-module', coachTopic: 'depression', category: 'psychiatric' },
    'psychogenic-polydipsia':                                 { mechanismModule: 'psychiatry-module', coachTopic: 'depression', category: 'psychiatric' },
    'serotonin-syndrome':                                     { mechanismModule: 'psychiatry-module', coachTopic: 'depression', category: 'psychiatric' },

    // ── pulmonary ──
    'abpa-aspergillus':                                       { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'asthma-exacerbation':                                    { mechanismModule: 'asthma-module', coachTopic: 'asthma', category: 'pulmonary' },
    'cap-with-sepsis':                                        { mechanismModule: 'pneumonia-module', coachTopic: 'pneumonia', category: 'pulmonary' },
    'copd-exacerbation-niv':                                  { mechanismModule: 'copd-module', coachTopic: 'copd', category: 'pulmonary' },
    'copd-pulm-rehab-pt':                                     { mechanismModule: 'copd-module', coachTopic: 'copd', category: 'pulmonary' },
    'copd-v1':                                                { mechanismModule: 'copd-module', coachTopic: 'copd', category: 'pulmonary' },
    'evali-vaping':                                           { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'hypersensitivity-pneumonitis':                           { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'lung-cancer-post-obstructive':                           { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'lung-cancer-staging':                                    { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'lung-cancer-with-postobstructive-process':               { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'maria-santos':                                           { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'massive-pe-with-rv-failure':                             { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'occupational-asthma-isocyanate':                         { mechanismModule: 'asthma-module', coachTopic: 'asthma', category: 'pulmonary' },
    'pe-v1':                                                  { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'pe-v2':                                                  { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'pe-v3':                                                  { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'pneumonia':                                              { mechanismModule: 'pneumonia-module', coachTopic: 'pneumonia', category: 'pulmonary' },
    'pneumonia-on-copd':                                      { mechanismModule: 'copd-module', coachTopic: 'copd', category: 'pulmonary' },
    'pneumonia-on-copd-v2':                                   { mechanismModule: 'copd-module', coachTopic: 'copd', category: 'pulmonary' },
    'pneumonia-v2':                                           { mechanismModule: 'pneumonia-module', coachTopic: 'pneumonia', category: 'pulmonary' },
    'pneumothorax':                                           { mechanismModule: 'pulmonary-module', coachTopic: 'pneumothorax', category: 'pulmonary' },
    'severe-asthma-biologics':                                { mechanismModule: 'asthma-module', coachTopic: 'asthma', category: 'pulmonary' },
    'severe-croup':                                           { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },
    'vocal-cord-dysfunction':                                 { mechanismModule: 'pulmonary-module', coachTopic: 'pe-pulm', category: 'pulmonary' },

    // ── renal ──
    'aki-differential':                                       { mechanismModule: 'aki-module', coachTopic: 'aki', category: 'renal' },
    'cellulitis':                                             { mechanismModule: 'aki-module', coachTopic: 'uti-pyelo', category: 'renal' },
    'epididymitis':                                           { mechanismModule: 'aki-module', coachTopic: 'uti-pyelo', category: 'renal' },
    'epididymoorchitis':                                      { mechanismModule: 'aki-module', coachTopic: 'uti-pyelo', category: 'renal' },
    'fournier-gangrene':                                      { mechanismModule: 'aki-module', coachTopic: 'uti-pyelo', category: 'renal' },
    'hyperkalemia-cardiac':                                   { mechanismModule: 'electrolytes-acidbase-module', coachTopic: 'hyperkalemia', category: 'renal' },
    'hyperkalemia-with-concurrent-acs':                       { mechanismModule: 'electrolytes-acidbase-module', coachTopic: 'hyperkalemia', category: 'renal' },
    'hypothyroidismrelated-hyponatremia':                     { mechanismModule: 'electrolytes-acidbase-module', coachTopic: 'hyponatremia', category: 'renal' },
    'incarcerated-hernia-with-strangulation':                 { mechanismModule: 'aki-module', coachTopic: 'uti-pyelo', category: 'renal' },
    'mbs-cisplatin-tubule':                                   { mechanismModule: 'aki-module', coachTopic: 'aki', category: 'renal' },
    'perianal-abscess':                                       { mechanismModule: 'aki-module', coachTopic: 'uti-pyelo', category: 'renal' },
    'renal-colic':                                            { mechanismModule: 'aki-module', coachTopic: 'aki', category: 'renal' },
    'rhabdomyolysisinduced-hyperkalemia':                     { mechanismModule: 'electrolytes-acidbase-module', coachTopic: 'hyperkalemia', category: 'renal' },
    'severe-hyperkalemia-from-missed-dialysis':               { mechanismModule: 'aki-module', coachTopic: 'ckd', category: 'renal' },
    'severe-hyponatremia':                                    { mechanismModule: 'electrolytes-acidbase-module', coachTopic: 'hyponatremia', category: 'renal' },
    'siadh':                                                  { mechanismModule: 'electrolytes-acidbase-module', coachTopic: 'hyponatremia', category: 'renal' },
    'testicular-traumarupture':                               { mechanismModule: 'aki-module', coachTopic: 'uti-pyelo', category: 'renal' },
    'thiazideinduced-hyponatremia':                           { mechanismModule: 'electrolytes-acidbase-module', coachTopic: 'hyponatremia', category: 'renal' },
    'torsion-of-appendix-testis':                             { mechanismModule: 'aki-module', coachTopic: 'uti-pyelo', category: 'renal' },
    'uremic-encephalopathy':                                  { mechanismModule: 'aki-module', coachTopic: 'aki', category: 'renal' },
    'ureterolithiasis':                                       { mechanismModule: 'aki-module', coachTopic: 'aki', category: 'renal' },
    'vet-feline-urethral-obstruction':                        { mechanismModule: 'aki-module', coachTopic: 'aki', category: 'renal' },

    // ── rheumatologic ──
    'gout-flare':                                             { mechanismModule: 'rheumatology-module', coachTopic: 'gout', category: 'rheumatologic' },
    'pseudogout':                                             { mechanismModule: 'rheumatology-module', coachTopic: 'sle', category: 'rheumatologic' },
    'reactive-arthritis':                                     { mechanismModule: 'rheumatology-module', coachTopic: 'sle', category: 'rheumatologic' },
    'rheumatoid-arthritis-new':                               { mechanismModule: 'rheumatology-module', coachTopic: 'ra', category: 'rheumatologic' },
    'sle-flare-with-cytopenias':                              { mechanismModule: 'rheumatology-module', coachTopic: 'sle', category: 'rheumatologic' },
    'urticarial-vasculitis':                                  { mechanismModule: 'rheumatology-module', coachTopic: 'vasculitis', category: 'rheumatologic' },
    'urticarial-vasculitis-v2':                               { mechanismModule: 'rheumatology-module', coachTopic: 'vasculitis', category: 'rheumatologic' },

    // ── surgical ──
    'incarcerated-inguinal-hernia':                           { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'surgical' },
    'meckel-diverticulum':                                    { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'surgical' },
    'midgut-volvulus':                                        { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'surgical' },
    'testicular-torsion':                                     { mechanismModule: 'msk-orthopedic-module', coachTopic: 'msk-red-flag-lbp', category: 'surgical' },
    'vet-gastric-dilatation-volvulus':                        { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'surgical' },

    // ── toxicologic ──
    'alcohol-withdrawal':                                     { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'alcohol-withdrawal-seizures':                            { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'anticholinergic-toxicity':                               { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'apap-overdose':                                          { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'chronic-salicylate-toxicity':                            { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'coral-snake-envenomation':                               { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'hyperthermia-nms':                                       { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'layer2-nursing-culture-safety':                          { mechanismModule: 'pharmacotherapy-module', coachTopic: 'overdose', category: 'toxicologic' },
    'malignant-hyperthermia':                                 { mechanismModule: 'pharmacotherapy-module', coachTopic: 'overdose', category: 'toxicologic' },
    'mbs-bb-receptor':                                        { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'medication-overdose':                                    { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'mixed-overdose':                                         { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'nursing-med-reconciliation':                             { mechanismModule: 'pharmacotherapy-module', coachTopic: 'overdose', category: 'toxicologic' },
    'pharmacy-linezolid-ssri':                                { mechanismModule: 'pharmacotherapy-module', coachTopic: 'overdose', category: 'toxicologic' },
    'pharmacy-otc-hypertension':                              { mechanismModule: 'pharmacotherapy-module', coachTopic: 'overdose', category: 'toxicologic' },
    'pharmacy-warfarin-cyp':                                  { mechanismModule: 'pharmacotherapy-module', coachTopic: 'overdose', category: 'toxicologic' },
    'salicylate-toxicity':                                    { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'sympathomimetic-toxicity':                               { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'toxic-ingestion':                                        { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },
    'vet-xylitol-toxicity':                                   { mechanismModule: 'toxicology-module', coachTopic: 'overdose', category: 'toxicologic' },

    // ── trauma ──
    'aortic-injury':                                          { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'trauma' },
    'cerebral-contusion':                                     { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'trauma' },
    'diffuse-axonal-injury':                                  { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'trauma' },
    'epidural-hematoma':                                      { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'trauma' },
    'flail-chest':                                            { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'trauma' },
    'massive-hemothorax':                                     { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'trauma' },
    'postconcussion-with-intracranial-hypertension':          { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'trauma' },
    'tension-ptx':                                            { mechanismModule: 'trauma-module', coachTopic: 'trauma', category: 'trauma' },

    // ── vascular ──
    'aaa-v1':                                                 { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'acute-aortic-dissection':                                { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'acute-embolic-limb-ischemia':                            { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'acute-limb-ischemia':                                    { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'acute-sma-embolism':                                     { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'acute-sma-thrombosis':                                   { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'acute-thrombotic-occlusion':                             { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'aortic-aneurysm':                                        { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'aortic-dissection-back':                                 { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'aortic-saddle-embolus':                                  { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'mesenteric-ischemia':                                    { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'nonocclusive-mesenteric-ischemia':                       { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'phlegmasia-cerulea-dolens':                              { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'ruptured-aaa':                                           { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'structural-lesion':                                      { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' },
    'vascular-injury-with-limb-ischemia':                     { mechanismModule: 'vascular-module', coachTopic: 'aortic-dissection', category: 'vascular' }

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

    // Look up the curated mapping. As of this commit every case has an
    // entry in CASE_TO_PILLARS (520/520 coverage). If a brand new case
    // is added later without a mapping, surface that in console rather
    // than silently rendering a generic fallback.
    var pillars = CASE_TO_PILLARS[caseId];
    if (!pillars) {
      if (window.console && console.warn) {
        console.warn('[rdx-pillar-switcher] No mapping for case "' + caseId +
          '" — add it to CASE_TO_PILLARS in js/rdx-pillar-switcher.js');
      }
      return;
    }

    var humanizedSlug = caseId.replace(/-/g,' ').replace(/\b\w/g, function(c){ return c.toUpperCase(); });
    var mechLabel    = MODULE_LABELS[pillars.mechanismModule] || 'Pathophysiology';
    var mechSubLabel = 'MechanismDx: ' + mechLabel;
    var coachLabel   = COACH_LABELS[pillars.coachTopic] || humanizedSlug;
    var mechHref     = '/mechanism/' + pillars.mechanismModule + '.html?return=virtual-emr&case=' + encodeURIComponent(caseId);
    var coachHref    = '/CoachDx/mentor-chat.html?topic=' + encodeURIComponent(coachLabel) + '&ref=virtual-emr&caseId=' + encodeURIComponent(caseId);
    var browseHref   = '/browse.html?cat=' + encodeURIComponent(pillars.category) + '&exclude=' + encodeURIComponent(caseId);
    var browseSub    = 'More ' + (pillars.category || 'similar') + ' cases';

    // FAB — labeled pill so its purpose is obvious at a glance.
    // The previous design was a 48px ⇄ circle with no label, which
    // tested poorly for discoverability with new users.
    var fab = document.createElement('button');
    fab.id = 'rdx-pillar-fab';
    fab.setAttribute('aria-label', 'Switch to MechanismDx, CoachDx, or another case');
    fab.title = 'Switch to MechanismDx, CoachDx, or another case';
    fab.innerHTML = '<span style="font-size:15px;line-height:1">⇄</span><span style="font-size:13px;font-weight:700;letter-spacing:.01em">Mechanism · Coach</span>';
    fab.style.cssText = [
      'position:fixed','left:24px',
      'padding:11px 16px 11px 14px','gap:8px',
      'border-radius:999px','background:#2874A6','color:#fff','border:none',
      'cursor:pointer','box-shadow:0 4px 16px rgba(40,116,166,.35)','z-index:9000',
      'display:flex','align-items:center','justify-content:center',
      'font-family:inherit','transition:transform .15s, background .15s, box-shadow .15s, bottom .2s',
      'min-height:44px'
    ].join(';');
    fab.onmouseover = function() { fab.style.background = '#1B4F72'; fab.style.transform = 'scale(1.03)'; fab.style.boxShadow = '0 6px 20px rgba(40,116,166,.5)'; };
    fab.onmouseout  = function() { fab.style.background = '#2874A6'; fab.style.transform = 'scale(1)'; fab.style.boxShadow = '0 4px 16px rgba(40,116,166,.35)'; };

    // Position the FAB above any sticky bottom banner (guest nudge, save
    // resume button, etc.). On Lauren's mobile screenshot the bottom
    // 24px slot was completely covered by the guest "Create a free
    // account" banner and the FAB was effectively invisible.
    function positionFab() {
      var banner = document.getElementById('rdx-guest-banner');
      var bannerH = 0;
      if (banner && banner.offsetHeight) {
        bannerH = banner.offsetHeight;
      }
      // Base offset of 24px, plus banner height if present, plus a
      // small breathing gap.
      var bottom = 24 + (bannerH ? bannerH + 8 : 0);
      fab.style.bottom = bottom + 'px';
      // Keep popover anchored above the FAB (FAB is roughly 44-50px tall)
      var popEl = document.getElementById('rdx-pillar-pop');
      if (popEl) popEl.style.bottom = (bottom + 60) + 'px';
    }
    positionFab();
    // The banner appears asynchronously via guest-nudge.js setTimeout,
    // so re-check a few times after first paint and on resize.
    setTimeout(positionFab, 1500);
    setTimeout(positionFab, 4000);
    window.addEventListener('resize', positionFab);
    // Watch for banner add/remove via MutationObserver if available
    if (window.MutationObserver) {
      var mo = new MutationObserver(positionFab);
      mo.observe(document.body, { childList: true, subtree: false });
    }

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

    pop.innerHTML = [
      '<div class="rdx-pp-header">Currently in: ' + caseLabel + '</div>',
      '<a href="' + mechHref + '">',
      '  <div class="rdx-pp-icon">🔬</div>',
      '  <div>',
      '    <div class="rdx-pp-title">Review the mechanism</div>',
      '    <div class="rdx-pp-sub">' + mechSubLabel + '</div>',
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
      '    <div class="rdx-pp-sub">' + browseSub + '</div>',
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
