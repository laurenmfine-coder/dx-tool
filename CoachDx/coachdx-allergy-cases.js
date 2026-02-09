// ============================================================================
// COACHDX ALLERGY/IMMUNOLOGY CASE LIBRARY
// Specialty Clinical Reasoning Cases for All Learner Levels
// Created: January 2026
// Author: Lauren Fine, MD, FAAAAI
// ============================================================================
//
// Cases designed for: Medical students, Residents, Fellows, ARNPs, PAs, PharmDs
// Each case includes level-specific adaptations
//
// To integrate: Add to coachdx-cases-merged.js or load separately
// ============================================================================

const COACHDX_ALLERGY_CASES = {

// ============================================================================
// ANAPHYLAXIS & ACUTE REACTIONS (4 cases)
// ============================================================================

'ai-anaphylaxis-workup': {
    id: 'ai-anaphylaxis-workup',
    title: 'Post-Anaphylaxis Evaluation',
    category: 'Anaphylaxis',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'intermediate',
    patient: {
        name: 'Jennifer Martinez',
        age: 34,
        sex: 'Female',
        setting: 'Outpatient Allergy Clinic',
        chiefComplaint: 'Follow-up after anaphylaxis',
        acuity: 'Stable'
    },
    description: 'Patient presents for evaluation 3 weeks after emergency department visit for anaphylaxis. She developed diffuse urticaria, facial swelling, and difficulty breathing within 30 minutes of eating at a Thai restaurant. Received epinephrine x2 and was admitted for observation.',
    openingStatement: 'Ms. Martinez is here to figure out what caused her anaphylaxis. She\'s understandably anxious and wants answers. Where would you like to start?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Recognition of anaphylaxis criteria, understanding IgE-mediated reactions',
            initialPrompt: 'Let\'s start with the basics. What defines anaphylaxis, and why is it important to identify the trigger?',
            keyObjectives: ['Identify anaphylaxis criteria', 'Understand IgE mechanism', 'Learn about common food triggers']
        },
        'resident': {
            focus: 'Systematic workup approach, tryptase interpretation, referral timing',
            initialPrompt: 'Walk me through your approach to identifying the culprit allergen. What testing would you consider?',
            keyObjectives: ['Order appropriate testing', 'Interpret tryptase levels', 'Develop management plan']
        },
        'fellow': {
            focus: 'Component-resolved diagnostics, challenge protocols, cofactor assessment',
            initialPrompt: 'She had Thai food with multiple potential allergens. How would you use component testing to sort this out?',
            keyObjectives: ['Apply component-resolved diagnostics', 'Consider cofactors', 'Plan oral food challenge if indicated']
        },
        'arnp': {
            focus: 'When to refer, epinephrine autoinjector education, action plan creation',
            initialPrompt: 'You\'re seeing her in primary care before her allergy appointment. What education and safety planning can you provide now?',
            keyObjectives: ['Provide interim safety guidance', 'Educate on EAI use', 'Identify referral urgency']
        },
        'pharmd': {
            focus: 'Medication review for potential culprits, NSAID/drug cofactors',
            initialPrompt: 'She was taking ibuprofen that day for a headache. How might this factor into your assessment?',
            keyObjectives: ['Identify drug cofactors', 'Review medication cross-reactivity', 'Counsel on avoidance']
        }
    },
    
    conceptDomains: {
        'History': ['timing_of_reaction', 'all_foods_eaten', 'prior_tolerances', 'exercise_relation', 'medications_taken', 'alcohol_use'],
        'Anaphylaxis Criteria': ['skin_involvement', 'respiratory_symptoms', 'cardiovascular', 'gi_symptoms', 'biphasic_risk'],
        'Testing Strategy': ['skin_prick_testing', 'serum_specific_ige', 'component_testing', 'tryptase_baseline', 'oral_challenge'],
        'Cofactors': ['nsaids', 'exercise', 'alcohol', 'infection', 'menses'],
        'Management': ['allergen_avoidance', 'epinephrine_autoinjector', 'action_plan', 'medical_id', 'followup']
    },
    
    defined_responses: {
        'history': 'She ate spring rolls (contained shrimp and peanut sauce), pad thai with shrimp, and shared a dessert with coconut. Had a glass of wine. Took ibuprofen 400mg about an hour before dinner for a headache. She\'s eaten all these foods before without problems, though admits she doesn\'t eat Thai food often.',
        'timing': 'Symptoms started about 20-30 minutes after finishing the meal. First noticed itchy palms and feeling "hot," then hives appeared on her arms and trunk. Lip swelling and throat tightness followed within minutes.',
        'prior reactions': 'No known food allergies. Had a "rash" from amoxicillin as a child but tolerated penicillin since. No prior episodes like this.',
        'tryptase': 'ED tryptase at 2 hours post-reaction was 18.4 ng/mL. We should get a baseline tryptase now - if elevated at baseline, consider mastocytosis workup.',
        'skin testing': 'Good thought. Skin prick testing to shellfish (shrimp, crab, lobster), peanut, tree nuts, coconut, and wheat would be appropriate. Wait at least 4-6 weeks post-reaction for accurate results.',
        'component testing': 'For shrimp, tropomyosin (Pen a 1) is the major allergen and cross-reacts with other shellfish and dust mites. For peanut, Ara h 2 is most predictive of clinical reactivity. Components can help risk-stratify.',
        'cofactors': 'Excellent consideration! NSAIDs, alcohol, and exercise can act as cofactors that lower the threshold for anaphylaxis. She had both NSAIDs and alcohol - this may explain why she tolerated these foods before.',
        'epinephrine': 'She needs two epinephrine autoinjectors prescribed today, training on proper use, and a written anaphylaxis action plan. Should wear medical ID and avoid all potential triggers until testing clarifies.'
    },
    
    keyTeachingPoints: [
        'Anaphylaxis diagnosis: Acute onset (minutes to hours) with skin/mucosal involvement PLUS respiratory compromise OR hypotension OR severe GI symptoms',
        'Tryptase peaks 1-2 hours post-reaction; baseline needed to interpret (elevated baseline suggests mastocytosis)',
        'Cofactors (NSAIDs, alcohol, exercise) can unmask allergies to previously tolerated foods',
        'Component-resolved diagnostics improve specificity: Ara h 2 for peanut, tropomyosin for shellfish',
        'Wait 4-6 weeks post-reaction for skin testing to allow mast cell recovery',
        'ALL patients with anaphylaxis need epinephrine autoinjectors (2), action plan, medical ID, and allergy referral'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI Anaphylaxis Practice Parameter 2020; AAAAI/ACAAI Anaphylaxis Update 2023; WAO Anaphylaxis Guidelines 2021',
        openAccessLinks: [
            'https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Professional%20Education/Podcasts/Anaphylaxis-2020-grade-document.pdf',
            'https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Anaphylaxis-Practice-Paramaters-2023.pdf',
            'https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/'
        ],
        keyReferences: [
            {
                citation: 'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis - A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
                pmid: '32001253',
                openAccess: true,
                keyFinding: 'Comprehensive evidence-based guidelines for anaphylaxis diagnosis, acute management, and long-term care'
            },
            {
                citation: 'Golden DBK, Wang J, Engel M, et al. Anaphylaxis: A 2023 Practice Parameter Update. Ann Allergy Asthma Immunol. 2024;132(1):1-53.',
                openAccess: true,
                keyFinding: 'Updated diagnostic criteria, tryptase interpretation, pediatric considerations'
            },
            {
                citation: 'Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.',
                pmid: '33204386',
                openAccess: true,
                keyFinding: 'Global consensus on anaphylaxis recognition and management'
            }
        ],
        keyPoints: [
            'Serum tryptase should be measured within 4 hours of symptom onset',
            'Baseline tryptase >11.4 ng/mL warrants mastocytosis evaluation',
            'Epinephrine is first-line treatment; antihistamines are adjunctive only',
            'Observation period of 4-6 hours minimum recommended due to biphasic risk',
            'All patients require epinephrine autoinjector prescription, action plan, and allergy referral'
        ]
    },
    
    relatedContent: [
        { type: 'mechanism', title: 'Type I Hypersensitivity', link: '../mechanism/type1-hypersensitivity.html', reason: 'Understand IgE-mediated mast cell activation' },
        { type: 'parallel', title: 'MCAS vs Anaphylaxis', link: 'mentor-chat.html?case=ai-mcas-evaluation', reason: 'Compare with mast cell activation syndrome' },
        { type: 'coachdx', title: 'Drug Allergy Evaluation', link: 'mentor-chat.html?case=ai-drug-allergy-delabeling', reason: 'Related allergy workup approach' }
    ]
},

'ai-anaphylaxis-acute': {
    id: 'ai-anaphylaxis-acute',
    title: 'Acute Anaphylaxis Management',
    category: 'Anaphylaxis',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'advanced',
    isCritical: true,
    patient: {
        name: 'David Park',
        age: 28,
        sex: 'Male',
        setting: 'Emergency Department',
        chiefComplaint: 'Allergic reaction after bee sting',
        acuity: 'Critical'
    },
    description: 'Young man brought in by EMS after being stung by a bee while hiking. Developed rapid onset of diffuse urticaria, angioedema of lips and tongue, wheezing, and lightheadedness. EMS gave epinephrine 0.3mg IM en route. Now in ED, still symptomatic.',
    openingStatement: 'EMS just rolled in with this patient. He\'s received one dose of epinephrine but is still wheezing with visible angioedema. BP is 88/54. What are your priorities?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'ABCs of anaphylaxis, recognizing severity, epinephrine importance',
            initialPrompt: 'This is a life-threatening emergency. What are the immediate priorities in anaphylaxis management?'
        },
        'resident': {
            focus: 'Refractory anaphylaxis management, vasopressor use, disposition',
            initialPrompt: 'He\'s had epinephrine but remains hypotensive. What\'s your next step?'
        },
        'fellow': {
            focus: 'Refractory cases, epinephrine infusion, glucagon for beta-blocked patients',
            initialPrompt: 'What factors might contribute to epinephrine-refractory anaphylaxis, and how do you manage it?'
        },
        'ems': {
            focus: 'Field recognition and treatment, repeat dosing decisions, transport',
            initialPrompt: 'You\'re the paramedic on scene. Walk me through your assessment and treatment approach.'
        }
    },
    
    conceptDomains: {
        'Immediate Assessment': ['airway_patency', 'breathing_work', 'circulation_status', 'skin_exam', 'mental_status'],
        'Acute Treatment': ['epinephrine_repeat', 'positioning', 'iv_access', 'fluid_resuscitation', 'adjunct_medications'],
        'Refractory Management': ['epinephrine_infusion', 'vasopressors', 'glucagon', 'airway_management'],
        'Monitoring': ['biphasic_reaction', 'observation_duration', 'discharge_criteria'],
        'Disposition': ['admission_criteria', 'discharge_education', 'referral']
    },
    
    defined_responses: {
        'vitals': 'BP 88/54, HR 122, RR 28, SpO2 91% on room air. Diffuse urticaria, lip and tongue swelling, audible wheezing.',
        'repeat epi': 'Absolutely correct. Give another 0.3-0.5mg epinephrine IM in the lateral thigh. Can repeat every 5-15 minutes as needed. Consider epinephrine infusion if no response after 2-3 IM doses.',
        'fluids': 'Yes - give NS or LR bolus 1-2L rapidly. Anaphylaxis causes distributive shock with significant third-spacing.',
        'positioning': 'Supine with legs elevated UNLESS respiratory distress predominates, then position of comfort. Do NOT have patient sit or stand - can precipitate cardiac arrest.',
        'adjuncts': 'H1 blocker (diphenhydramine 25-50mg IV), H2 blocker (famotidine 20mg IV), methylprednisolone 125mg IV. These are ADJUNCTS - never delay epinephrine for these.',
        'airway': 'Concerning for angioedema progression. Have airway equipment ready. If any signs of impending obstruction, call anesthesia/ENT and prepare for possible surgical airway. Early intubation is safer than emergent.',
        'glucagon': 'Important consideration if patient is on beta-blockers, which can cause epinephrine-resistant anaphylaxis. Glucagon 1-2mg IV/IM bypasses beta-receptors.',
        'observation': 'Minimum 4-6 hours observation. This severe reaction with hypotension warrants admission for 24 hours due to biphasic reaction risk (up to 20% in severe cases).',
        'discharge planning': 'Before any discharge: prescribe 2 EAIs, provide written action plan, recommend medical ID, arrange allergy follow-up for venom testing, and educate on biphasic reactions.'
    },
    
    keyTeachingPoints: [
        'Epinephrine IM (0.3-0.5mg) is FIRST-LINE - never delay for other medications',
        'Repeat epinephrine every 5-15 minutes if no improvement; no maximum dose in anaphylaxis',
        'Supine positioning is critical - upright posture can cause fatal "empty ventricle syndrome"',
        'Beta-blocker use can cause refractory anaphylaxis - treat with glucagon',
        'Biphasic reactions occur in 1-20% of cases, typically within 8-12 hours',
        'All patients with anaphylaxis need EAI prescription, action plan, and allergy referral'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI Anaphylaxis Practice Parameter 2020',
        keyPoints: [
            'Epinephrine is the only first-line treatment for anaphylaxis',
            'IM injection in lateral thigh provides fastest absorption',
            'Glucagon for beta-blocked patients: 1-5mg IV over 5 minutes',
            'Biphasic reactions more common with severe initial presentation or delayed epinephrine'
        ]
    }
},

// ============================================================================
// DRUG ALLERGY (3 cases)
// ============================================================================

'ai-drug-allergy-delabeling': {
    id: 'ai-drug-allergy-delabeling',
    title: 'Penicillin Allergy Evaluation',
    category: 'Drug Allergy',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'intermediate',
    patient: {
        name: 'Robert Thompson',
        age: 62,
        sex: 'Male',
        setting: 'Outpatient Allergy Clinic',
        chiefComplaint: 'Penicillin allergy evaluation',
        acuity: 'Stable'
    },
    description: 'Patient referred by his cardiologist prior to upcoming valve replacement surgery. Chart lists "penicillin allergy - rash" from childhood. He needs surgical prophylaxis and has had multiple antibiotic courses using alternatives due to this label. He cannot recall details of the original reaction.',
    openingStatement: 'Mr. Thompson has carried this penicillin allergy label for 50+ years but doesn\'t remember what actually happened. His surgery is in 3 weeks. How do you approach this?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding penicillin allergy prevalence, importance of delabeling',
            initialPrompt: 'About 10% of patients report penicillin allergy, but how many actually have a true IgE-mediated allergy?'
        },
        'resident': {
            focus: 'Risk stratification, testing approach, when to challenge',
            initialPrompt: 'How would you risk-stratify this patient\'s reported reaction, and what testing is appropriate?'
        },
        'fellow': {
            focus: 'Complex delabeling scenarios, direct challenge protocols, cross-reactivity',
            initialPrompt: 'Given his low-risk history and upcoming surgery, would you consider direct challenge? What\'s your protocol?'
        },
        'pharmd': {
            focus: 'Alternative antibiotic selection, cross-reactivity patterns, stewardship',
            initialPrompt: 'While awaiting allergy evaluation, what prophylaxis alternatives would you recommend? What are the stewardship implications of penicillin allergy labels?'
        },
        'arnp': {
            focus: 'Identifying candidates for delabeling, referral criteria',
            initialPrompt: 'In your primary care practice, how would you identify patients who might benefit from penicillin allergy evaluation?'
        }
    },
    
    conceptDomains: {
        'History': ['original_reaction', 'timing', 'treatment_required', 'subsequent_exposures', 'tolerance_history'],
        'Risk Stratification': ['low_risk_features', 'high_risk_features', 'pen_fast_score'],
        'Testing': ['skin_testing', 'specific_ige', 'drug_challenge'],
        'Cross-Reactivity': ['cephalosporins', 'carbapenems', 'side_chain_similarity'],
        'Implications': ['antibiotic_stewardship', 'surgical_prophylaxis', 'infection_outcomes']
    },
    
    defined_responses: {
        'history': 'He thinks he was around 8-10 years old and may have had a rash while taking penicillin for an ear infection. No hives, no swelling, no breathing problems, no hospitalization. Since then, he\'s received azithromycin, fluoroquinolones, and vancomycin for various infections without issues.',
        'prevalence': 'Great point to raise. While ~10% of patients report penicillin allergy, <1% of the general population has true IgE-mediated penicillin allergy. Over 90% of labeled patients can tolerate penicillins after proper evaluation.',
        'risk stratify': 'This is LOW RISK: remote childhood reaction (>10 years ago), non-urticarial rash, no systemic symptoms, tolerated other beta-lactams. PEN-FAST score helps: Penicillin 5+ years ago (0), rash (0), treatment required (0), severe/anaphylaxis (0) = Score 0, <1% positive test rate.',
        'testing': 'For low-risk patients like this, can consider direct amoxicillin challenge without skin testing. If prefer skin testing first: penicilloyl-polylysine (Pre-Pen), penicillin G, amoxicillin. Negative predictive value >95%.',
        'challenge': 'For direct challenge: Amoxicillin 250mg, observe 1 hour, then 500mg, observe 1 hour. If tolerates, he\'s delabeled and can receive any penicillin-class antibiotic.',
        'cross reactivity': 'Important teaching point! Cross-reactivity is about R1 side chain similarity, NOT the beta-lactam ring. Cephalosporins with similar side chains (cephalexin, cefadroxil) have ~2% cross-reactivity. Dissimilar side chains (ceftriaxone, cefepime) have <0.5% cross-reactivity.',
        'stewardship': 'Penicillin allergy labels lead to: increased use of broad-spectrum antibiotics, higher C. diff rates, increased MRSA/VRE, longer hospital stays, higher costs. Delabeling is an antibiotic stewardship priority.',
        'surgical implications': 'For cardiac surgery, cefazolin is preferred prophylaxis. With his unverified penicillin allergy, he\'d get vancomycin - which has inferior staph coverage and more side effects. Delabeling allows optimal prophylaxis.'
    },
    
    keyTeachingPoints: [
        '>90% of patients labeled penicillin-allergic can safely take penicillins after evaluation',
        'Risk stratification (PEN-FAST score) identifies candidates for direct challenge vs. skin testing',
        'Penicillin allergy wanes over time - 80% lose sensitivity after 10 years',
        'Cross-reactivity is determined by R1 side chain similarity, not beta-lactam ring',
        'Penicillin allergy labels increase morbidity: more C. diff, resistant organisms, surgical complications',
        'Delabeling is a patient safety AND antibiotic stewardship intervention'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI Drug Allergy Practice Parameter 2022; Joint Task Force on Practice Parameters',
        openAccessLinks: [
            'https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Drug-Allergy-2022.pdf',
            'https://www.jacionline.org/article/S0091-6749(22)01186-1/fulltext'
        ],
        keyReferences: [
            {
                citation: 'Khan DA, Banerji A, Blumenthal KG, et al. Drug Allergy: A 2022 Practice Parameter Update. J Allergy Clin Immunol. 2022;150(6):1333-1393.',
                pmid: '36122788',
                openAccess: true,
                keyFinding: 'Comprehensive update on drug allergy evaluation including penicillin allergy delabeling protocols'
            },
            {
                citation: 'Banerji A, Solensky R, Phillips EJ, Khan DA. Drug Allergy Practice Parameter Updates to Incorporate Into Your Clinical Practice. J Allergy Clin Immunol Pract. 2023;11(2):356-368.',
                pmid: '36563781',
                keyFinding: 'Clinical implementation guidance for the 2022 practice parameter'
            }
        ],
        keyPoints: [
            'Low-risk patients may undergo direct oral challenge without skin testing',
            'PEN-FAST score <3: direct oral challenge appropriate',
            'Negative skin test + challenge = remove allergy label from chart',
            'Document delabeling clearly in medical record and patient education',
            'Cross-reactivity is R1 side chain-based, not beta-lactam ring-based'
        ]
    }
},

'ai-nsaid-reaction': {
    id: 'ai-nsaid-reaction',
    title: 'NSAID Hypersensitivity Workup',
    category: 'Drug Allergy',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'intermediate',
    patient: {
        name: 'Maria Santos',
        age: 45,
        sex: 'Female',
        setting: 'Outpatient Allergy Clinic',
        chiefComplaint: 'Reactions to multiple pain medications',
        acuity: 'Stable'
    },
    description: 'Patient reports facial swelling with ibuprofen, hives with naproxen, and is now afraid to take any pain medications. She has chronic migraines and osteoarthritis and needs reliable pain management options. Also has a history of nasal polyps and asthma.',
    openingStatement: 'Ms. Santos has had reactions to two different NSAIDs and is worried she\'s "allergic to all pain medications." She also mentions she has asthma and nasal polyps. What\'s your approach?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding NSAID reaction classification, Samter\'s triad',
            initialPrompt: 'There are different types of NSAID reactions with different mechanisms. Her history of asthma and nasal polyps is an important clue - why?'
        },
        'resident': {
            focus: 'Phenotyping NSAID reactions, safe alternatives',
            initialPrompt: 'How would you classify her NSAID reaction phenotype, and how does that guide management?'
        },
        'fellow': {
            focus: 'Aspirin desensitization protocols, COX-2 selective agents',
            initialPrompt: 'If she has AERD, what treatment options exist? When would you consider aspirin desensitization?'
        },
        'pharmd': {
            focus: 'Safe analgesic alternatives, COX selectivity, acetaminophen safety',
            initialPrompt: 'She needs pain management. What options are safe, and what counseling would you provide?'
        }
    },
    
    conceptDomains: {
        'Classification': ['nsaid_erd', 'nsaid_exacerbated_urticaria', 'single_nsaid_allergy', 'cross_reactive_vs_selective'],
        'History': ['timing', 'all_nsaids_tried', 'respiratory_symptoms', 'underlying_conditions'],
        'Associated Conditions': ['asthma', 'nasal_polyps', 'chronic_rhinosinusitis', 'eosinophilia'],
        'Management': ['avoidance', 'safe_alternatives', 'desensitization'],
        'Testing': ['aspirin_challenge', 'cox2_challenge']
    },
    
    defined_responses: {
        'samters': 'Excellent recognition! Asthma + nasal polyps + NSAID reactions = AERD (Aspirin-Exacerbated Respiratory Disease, formerly Samter\'s triad). This is a COX-1 inhibition reaction, not IgE-mediated.',
        'classification': 'NSAID reactions fall into: (1) Cross-reactive (COX-1 mediated): AERD, NSAID-exacerbated urticaria/angioedema; (2) Selective (likely IgE): single NSAID only. Her reactions to two structurally different NSAIDs + respiratory disease = cross-reactive AERD phenotype.',
        'mechanism': 'In AERD, COX-1 inhibition shunts arachidonic acid to leukotriene pathway, causing bronchoconstriction, nasal congestion, and in skin-prone patients, urticaria/angioedema. It\'s a pharmacologic reaction, not immune-mediated.',
        'safe alternatives': 'Acetaminophen is safe at doses ≤1000mg (weak COX inhibitor). COX-2 selective agents (celecoxib) are typically tolerated - can do graded challenge in clinic to confirm. Avoid ALL traditional NSAIDs.',
        'desensitization': 'Aspirin desensitization can improve polyp disease and asthma control in AERD. Start with low dose, escalate over 1-2 days to 325-650mg twice daily. Must continue daily - protection lost within 48-72 hours of stopping.',
        'celecoxib challenge': 'Graded challenge: 1/10th dose (20mg), wait 1 hour, 1/4 dose (50mg), wait 1 hour, full dose (200mg). If tolerates, can use for pain management.'
    },
    
    keyTeachingPoints: [
        'AERD triad: asthma + nasal polyps + NSAID sensitivity (affects ~7% of asthmatics)',
        'Cross-reactive NSAID reactions are COX-1 mediated, not IgE-mediated',
        'Acetaminophen ≤1000mg and COX-2 inhibitors are typically safe in AERD',
        'Aspirin desensitization followed by daily aspirin can treat AERD - reduces polyp recurrence and improves asthma',
        'Single-NSAID reactors (one drug, one reaction) may have IgE-mediated allergy and can tolerate other NSAIDs'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI NSAID Hypersensitivity Practice Parameter; EAACI NSAID Hypersensitivity Position Paper 2019',
        keyReferences: [
            {
                citation: 'White AA, Stevenson DD, Simon RA. The blocking effect of essential controller medications during aspirin challenges in patients with aspirin-exacerbated respiratory disease. Ann Allergy Asthma Immunol. 2005;95:330-335.',
                keyFinding: 'Established aspirin desensitization protocols for AERD'
            }
        ],
        keyPoints: [
            'Phenotype classification (AERD vs single-NSAID) guides management approach',
            'COX-2 inhibitors tolerated by >90% of NSAID-sensitive patients',
            'Aspirin desensitization: 325-650mg BID maintenance for AERD',
            'Leukotriene modifiers helpful adjuncts in AERD management',
            'Acetaminophen safe at doses ≤1000mg in AERD patients'
        ]
    }
},

// ============================================================================
// CHRONIC URTICARIA & ANGIOEDEMA (3 cases)
// ============================================================================

'ai-chronic-urticaria': {
    id: 'ai-chronic-urticaria',
    title: 'Chronic Spontaneous Urticaria',
    category: 'Urticaria/Angioedema',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'intermediate',
    patient: {
        name: 'Sarah Kim',
        age: 38,
        sex: 'Female',
        setting: 'Outpatient Allergy Clinic',
        chiefComplaint: 'Hives for 4 months',
        acuity: 'Stable'
    },
    description: 'Patient presents with daily or near-daily hives for the past 4 months. Wheals appear randomly on trunk and extremities, last a few hours, then resolve without scarring. No clear triggers identified. Previously healthy, now frustrated and not sleeping well due to itching.',
    openingStatement: 'Ms. Kim is desperate for answers. She\'s convinced something is causing her hives and wants allergy testing to "find the cause." She\'s been keeping a detailed food diary. How do you approach this?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Differentiating acute vs chronic urticaria, understanding CSU is rarely allergic',
            initialPrompt: 'She\'s had hives for 4 months. How does this change your thinking compared to someone with hives for a few days?'
        },
        'resident': {
            focus: 'Workup approach, when to test (and when not to), treatment ladder',
            initialPrompt: 'She wants extensive allergy testing. What testing, if any, is actually indicated for chronic urticaria?'
        },
        'fellow': {
            focus: 'Autoimmune mechanisms, biologics, refractory cases',
            initialPrompt: 'First-line antihistamines have failed. Walk me through your escalation approach, including when you\'d consider omalizumab.'
        },
        'arnp': {
            focus: 'First-line management, when to refer',
            initialPrompt: 'You\'re seeing her in primary care. What can you initiate, and what are your referral triggers?'
        },
        'pharmd': {
            focus: 'Antihistamine dosing, drug interactions, biologic considerations',
            initialPrompt: 'She\'s been taking cetirizine 10mg daily without relief. What dosing adjustments and alternatives would you recommend?'
        }
    },
    
    conceptDomains: {
        'Definition': ['chronic_vs_acute', 'spontaneous_vs_inducible', 'csu_mechanism'],
        'History': ['duration', 'frequency', 'triggers_identified', 'associated_symptoms', 'medications'],
        'Workup': ['limited_labs', 'avoid_extensive_testing', 'when_to_test_more'],
        'Treatment': ['antihistamine_ladder', 'omalizumab', 'other_biologics', 'avoid_steroids'],
        'Assessment Tools': ['uas7', 'aas', 'uct']
    },
    
    defined_responses: {
        'definition': 'Chronic urticaria = hives occurring most days for >6 weeks. Chronic spontaneous urticaria (CSU) has no identifiable external trigger. Important: CSU is NOT allergic urticaria - it\'s usually autoimmune (autoantibodies against IgE or FcεRI).',
        'allergy testing': 'This is crucial patient education. Per the AAAAI/ACAAI Urticaria Practice Parameter, extensive allergy testing is NOT recommended in CSU - it\'s low yield and creates confusion. Food allergy doesn\'t cause chronic urticaria. Allergy testing indicated only if history suggests specific trigger (acute urticaria pattern).',
        'labs': 'Limited workup per AAAAI guidelines: CBC with differential, TSH, CMP. Consider CRP/ESR if systemic symptoms. That\'s it for most patients. Reserve extensive workup for atypical features (individual lesions lasting >24 hours, bruising, systemic symptoms suggesting urticarial vasculitis).',
        'treatment': 'Per AAAAI/ACAAI Practice Parameter: Step 1: Second-generation H1 antihistamine (cetirizine, loratadine, fexofenadine) daily - not PRN. Step 2: Increase to 2-4x standard dose (approved up to 4x for CSU). Step 3: Add omalizumab if inadequate response at 4 weeks. Avoid chronic systemic corticosteroids.',
        'omalizumab': 'Omalizumab 300mg SC every 4 weeks. The 2025 Chu et al. network meta-analysis in JACI showed omalizumab has the best efficacy-safety profile among biologics for CSU, with high certainty of moderate-large improvement in UAS7. Works regardless of IgE level. ~70% respond well.',
        'steroids': 'AVOID chronic oral corticosteroids! The 2024 Chu et al. systematic review in JACI Practice found systemic corticosteroids provide only short-term benefit with significant adverse effects. Short bursts (3-5 days) for severe flares only. Step up antihistamines or add omalizumab instead.',
        'topical steroids': 'The 2024 Chu et al. Bayesian meta-analysis in Annals of Allergy found topical corticosteroids do NOT reduce itch or hive severity in urticaria - they are not recommended for CSU treatment.',
        'ltra': 'What about adding montelukast? The 2024 Rayner/Chu et al. JACI systematic review showed leukotriene receptor antagonists as add-on to antihistamines provide little to no benefit for most urticaria patients. May consider in NSAID-sensitive patients or those with concurrent asthma, but not routine.',
        'uas7': 'UAS7 (Urticaria Activity Score) - patient scores hives (0-3) and itch (0-3) daily for 7 days. Range 0-42. Useful for tracking response. UAS7 >16 indicates moderate-severe disease warranting treatment escalation.',
        'other biologics': 'Per the 2025 Chu et al. network meta-analysis: Ligelizumab and remibrutinib showed efficacy but omalizumab remains first-line biologic. Dupilumab showed benefit in some trials. Cyclosporine is effective but has more safety concerns than omalizumab.'
    },
    
    keyTeachingPoints: [
        'Chronic spontaneous urticaria (>6 weeks) is usually autoimmune, NOT allergic - avoid extensive allergy testing',
        'Limited labs sufficient: CBC, TSH, CMP; extensive panels not recommended per AAAAI guidelines',
        'Treatment ladder per AAAAI: antihistamine → up to 4x dosing → omalizumab',
        'Systemic corticosteroids provide only short-term benefit with significant harms - avoid chronic use (Chu 2024)',
        'Topical corticosteroids are NOT effective for urticaria (Chu 2024)',
        'Leukotriene antagonists add little benefit for most patients (Rayner/Chu 2024)',
        'Omalizumab has best efficacy-safety profile among biologics (Chu 2025 network meta-analysis)',
        'CSU is self-limited in most (50% resolve in 1 year, 80% by 5 years)'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI Urticaria Practice Parameter 2022; International EAACI/GA²LEN/EuroGuiDerm/APAAACI Guideline 2022',
        openAccessLinks: [
            'https://onlinelibrary.wiley.com/doi/10.1111/all.15090',
            'https://www.jacionline.org/article/S0091-6749(22)01341-0/fulltext'
        ],
        keyReferences: [
            {
                citation: 'Zuberbier T, Abdul Latiff AH, Abuzakouk M, et al. The international EAACI/GA²LEN/EuroGuiDerm/APAAACI guideline for the definition, classification, diagnosis, and management of urticaria. Allergy. 2022;77(3):734-766.',
                pmid: '34536239',
                openAccess: true,
                keyFinding: 'International consensus on CSU definition, workup, and stepwise treatment algorithm'
            },
            {
                citation: 'Chu AWL, Oykhman P, Chu X, et al. Comparative efficacy and safety of biologics and systemic immunomodulatory treatments for chronic urticaria: Systematic review and network meta-analysis. J Allergy Clin Immunol. 2025;156(4):1008-1023.',
                pmid: '40663028',
                keyFinding: 'Omalizumab has best efficacy-safety profile; high certainty for moderate-large UAS7 improvement'
            },
            {
                citation: 'Chu AWL, Rayner DG, Chu X, et al. Topical corticosteroids for hives and itch (urticaria): Systematic review and Bayesian meta-analysis. Ann Allergy Asthma Immunol. 2024;133(4):437-444.e18.',
                pmid: '38901542',
                keyFinding: 'Topical corticosteroids do not reduce itch or hive severity in urticaria'
            },
            {
                citation: 'Rayner DG, Liu M, Chu AWL, et al. Leukotriene receptor antagonists as add-on therapy to antihistamines for urticaria: Systematic review and meta-analysis. J Allergy Clin Immunol. 2024;154(4):996-1007.',
                pmid: '38852861',
                keyFinding: 'LTRAs provide little to no added benefit for most urticaria patients'
            },
            {
                citation: 'Chu X, Wang J, Ologundudu L, et al. Efficacy and Safety of Systemic Corticosteroids for Urticaria: Systematic Review and Meta-Analysis. J Allergy Clin Immunol Pract. 2024;12(7):1879-1889.e8.',
                pmid: '38642709',
                keyFinding: 'Systemic corticosteroids provide short-term benefit but significant adverse effects; avoid chronic use'
            }
        ],
        keyPoints: [
            'Second-generation H1 antihistamines first-line; can dose up to 4x standard',
            'Omalizumab recommended before cyclosporine in algorithm',
            'Routine extensive testing not recommended',
            'Avoid chronic systemic corticosteroids',
            'UAS7 score helps assess severity and treatment response'
        ]
    },
    
    relatedContent: [
        { type: 'mechanism', title: 'Mast Cell Biology', link: '../mechanism/mast-cell.html', reason: 'Understand CSU pathophysiology' },
        { type: 'parallel', title: 'Angioedema Without Urticaria', link: 'mentor-chat.html?case=ai-angioedema-workup', reason: 'Compare bradykinin-mediated angioedema' },
        { type: 'coachdx', title: 'Anaphylaxis Workup', link: 'mentor-chat.html?case=ai-anaphylaxis-workup', reason: 'Acute allergic reactions - different mechanism' }
    ]
},

'ai-angioedema-workup': {
    id: 'ai-angioedema-workup',
    title: 'Recurrent Angioedema Without Urticaria',
    category: 'Urticaria/Angioedema',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'advanced',
    patient: {
        name: 'James Wilson',
        age: 52,
        sex: 'Male',
        setting: 'Outpatient Allergy Clinic',
        chiefComplaint: 'Recurring facial and tongue swelling',
        acuity: 'Stable'
    },
    description: 'Patient with 3 episodes of facial/lip/tongue swelling over the past year. No hives accompany the swelling. Episodes last 2-3 days and resolve spontaneously. Takes lisinopril for hypertension. No family history of similar episodes. Most recent episode prompted ER visit where he received epinephrine and steroids.',
    openingStatement: 'Mr. Wilson is here because his ER doctor recommended allergy evaluation after his third swelling episode. He\'s worried about his airway. What stands out to you in this history?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Angioedema types, ACE-inhibitor connection',
            initialPrompt: 'Angioedema without urticaria has a different differential than angioedema with hives. And he takes lisinopril - why is that important?'
        },
        'resident': {
            focus: 'Bradykinin vs histamine-mediated, workup approach',
            initialPrompt: 'How do you differentiate histamine-mediated from bradykinin-mediated angioedema, and why does it matter?'
        },
        'fellow': {
            focus: 'HAE workup, acquired angioedema, treatment algorithms',
            initialPrompt: 'His swelling lasts 2-3 days, doesn\'t respond to antihistamines, and has no urticaria. What\'s your diagnostic approach?'
        },
        'pharmd': {
            focus: 'Drug-induced angioedema, ACE-I vs ARB, management differences',
            initialPrompt: 'He\'s on lisinopril. How common is ACE-I angioedema, and can he switch to an ARB safely?'
        }
    },
    
    conceptDomains: {
        'Classification': ['histamine_mediated', 'bradykinin_mediated', 'hereditary', 'acquired', 'drug_induced'],
        'Key Features': ['urticaria_presence', 'duration', 'response_to_antihistamines', 'family_history'],
        'Workup': ['c4_screening', 'c1_inhibitor_level_function', 'c1q', 'tryptase'],
        'ACE-I Angioedema': ['mechanism', 'timing', 'arb_cross_reactivity', 'management'],
        'Treatment': ['acute_management', 'prophylaxis', 'on_demand']
    },
    
    defined_responses: {
        'acei': 'ACE-inhibitor angioedema! This is the most common cause of angioedema seen in EDs. Occurs in ~0.5% of ACE-I users, higher in African Americans. Can happen after years of use (he\'s been on lisinopril 5 years). Mechanism: ACE breaks down bradykinin; inhibition leads to bradykinin accumulation.',
        'key features': 'Bradykinin-mediated angioedema clues: NO urticaria, longer duration (2-3 days vs hours for histamine), poor response to antihistamines/steroids/epinephrine. His ER treatments likely didn\'t help much - the episode resolved on its own.',
        'workup': 'Initial screen: C4 level (if normal between attacks, HAE very unlikely). If low C4 or strong suspicion: C1-inhibitor level and function, C1q. Tryptase useful if concerned about mast cell disorder but less helpful here.',
        'c4': 'C4 is a great screening test - low during AND between attacks in >95% of HAE patients. If C4 is normal between attacks, HAE essentially ruled out. His C4 came back normal at 28 mg/dL (normal 14-40).',
        'arb': 'Important question! ARBs have ~10% cross-reactivity for angioedema in ACE-I angioedema patients. Can consider ARB with caution and close monitoring, but many allergists recommend alternative BP agents (CCB, thiazide) as first choice.',
        'management': 'Stop the ACE-I - that\'s most important. Switch to alternative antihypertensive. Episodes may continue for weeks to months after discontinuation. For acute severe episodes, icatibant or C1-INH concentrate may help (bradykinin pathway targeted), though often given empirically.',
        'hereditary': 'Even though C4 is normal, always ask family history. HAE can present later in life. Types: HAE-1 (low C1-INH level), HAE-2 (dysfunctional C1-INH), HAE with normal C1-INH (rare, often F12 mutation).'
    },
    
    keyTeachingPoints: [
        'Angioedema WITHOUT urticaria = think bradykinin-mediated (ACE-I, HAE)',
        'ACE-I angioedema can occur after years of use; 0.5% incidence overall, higher in Black patients',
        'Bradykinin-mediated angioedema: longer duration, no response to antihistamines/steroids/epinephrine',
        'C4 is an excellent HAE screening test - normal C4 between attacks essentially rules out HAE',
        'After stopping ACE-I, ~10% still react to ARBs - consider alternative BP medications',
        'HAE acute treatment: C1-INH concentrate, icatibant, ecallantide - NOT effective in histamine-mediated angioedema'
    ],
    
    guidelines: {
        source: 'WAO/EAACI HAE Guideline 2021; ACAAI Angioedema Practice Parameter',
        openAccessLinks: [
            'https://www.worldallergyorganizationjournal.org/article/S1939-4551(22)00003-5/fulltext',
            'https://haei.org/wp-content/uploads/2012/12/Allergy-2022-Maurer-The-international-WAO-EAACI-guideline-for-the-management-of-hereditary-angioedema-The-2021.pdf'
        ],
        keyReferences: [
            {
                citation: 'Maurer M, Magerl M, Betschel S, et al. The international WAO/EAACI guideline for the management of hereditary angioedema - The 2021 revision and update. World Allergy Organ J. 2022;15(3):100627.',
                pmid: '35006617',
                openAccess: true,
                keyFinding: '28 evidence-based recommendations for HAE diagnosis and management'
            }
        ],
        keyPoints: [
            'ACE-I must be discontinued - no dose adjustment or switching to another ACE-I',
            'C4 as screening test has >95% sensitivity for HAE',
            'ARB cross-reactivity ~10% - discuss risks/benefits with patient',
            'Acute HAE/bradykinin-mediated: icatibant or C1-INH concentrate',
            'Angioedema WITHOUT urticaria = think bradykinin (not histamine) pathway'
        ]
    }
},

// ============================================================================
// IMMUNODEFICIENCY (2 cases)
// ============================================================================

'ai-recurrent-infections': {
    id: 'ai-recurrent-infections',
    title: 'Recurrent Sinopulmonary Infections',
    category: 'Immunodeficiency',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'advanced',
    patient: {
        name: 'Emily Chen',
        age: 34,
        sex: 'Female',
        setting: 'Outpatient Allergy/Immunology Clinic',
        chiefComplaint: 'Recurrent sinus and lung infections',
        acuity: 'Stable'
    },
    description: 'Young woman referred for evaluation of recurrent infections. She reports 4-5 sinus infections per year requiring antibiotics, plus 2 pneumonias in the past 3 years. Recently diagnosed with bronchiectasis on CT. No significant childhood infections. Previously healthy until her mid-20s.',
    openingStatement: 'Dr. Chen\'s PCP is concerned about immunodeficiency given her recurrent infections and new bronchiectasis diagnosis. She\'s otherwise healthy and has no family history of immune problems. How do you approach this?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Warning signs of immunodeficiency, basic categories',
            initialPrompt: 'What features in her history suggest this might be more than just "bad luck" with infections?'
        },
        'resident': {
            focus: 'Immunodeficiency workup, interpreting results',
            initialPrompt: 'What initial testing would you order, and what are you looking for?'
        },
        'fellow': {
            focus: 'CVID diagnosis, management, complications',
            initialPrompt: 'Her IgG is 380 (low). Walk me through confirming the diagnosis and your management approach.'
        }
    },
    
    conceptDomains: {
        'Warning Signs': ['infection_frequency', 'infection_severity', 'infection_types', 'antibiotic_dependence', 'end_organ_damage'],
        'Initial Workup': ['quantitative_immunoglobulins', 'cbc', 'vaccine_responses'],
        'Advanced Testing': ['lymphocyte_subsets', 'specific_antibody_responses', 'complement'],
        'CVID Criteria': ['low_igg', 'low_iga_or_igm', 'poor_vaccine_response', 'exclusion'],
        'Management': ['igg_replacement', 'prophylactic_antibiotics', 'monitoring']
    },
    
    defined_responses: {
        'warning signs': 'Several red flags: (1) 4+ sinus infections/year needing antibiotics, (2) 2+ pneumonias, (3) Bronchiectasis = end-organ damage from recurrent/chronic infection. The "10 Warning Signs" from Jeffrey Modell Foundation are a helpful framework.',
        'initial labs': 'Start with: Quantitative immunoglobulins (IgG, IgA, IgM), CBC with differential. Her results: IgG 380 mg/dL (low, normal 700-1600), IgA 45 mg/dL (low), IgM 35 mg/dL (low-normal). CBC shows normal lymphocyte count.',
        'vaccine responses': 'Critical next step: Check antibody responses to protein (tetanus, diphtheria) AND polysaccharide (pneumococcal serotypes) antigens. Vaccinate with Pneumovax if not recent, check titers 4-6 weeks later. CVID patients have impaired responses to both.',
        'cvid diagnosis': 'CVID criteria: (1) Low IgG + low IgA and/or IgM, (2) Poor vaccine responses, (3) Onset usually after age 2, (4) Exclusion of other causes (medications, protein loss, other PID). She meets criteria pending vaccine response testing.',
        'differential': 'Consider: Secondary causes (medications - check for rituximab history, protein-losing conditions), Specific antibody deficiency (normal total IgG but poor vaccine responses), Good syndrome (thymoma + immunodeficiency - get CT chest).',
        'treatment': 'IgG replacement therapy - IV (IVIG every 3-4 weeks) or subcutaneous (SCIG weekly or biweekly). Target trough IgG >700-800 or 500+ above baseline. Also: prophylactic azithromycin, aggressive treatment of infections, monitoring for autoimmune complications.',
        'complications': 'CVID patients need monitoring for: Autoimmune disease (25% - cytopenias, arthritis), Granulomatous disease (lung, liver, lymph nodes), Lymphoma (10x increased risk), GI disease (IBD-like, nodular lymphoid hyperplasia), Bronchiectasis progression.'
    },
    
    keyTeachingPoints: [
        'CVID is the most common symptomatic primary immunodeficiency in adults',
        'Diagnosis requires low IgG + low IgA or IgM + poor vaccine responses + exclusion of secondary causes',
        'Vaccine response testing essential - protein AND polysaccharide antigens',
        'IgG replacement is mainstay of treatment - reduces infection frequency by 70-80%',
        'Monitor for autoimmune disease, granulomatous disease, lymphoma',
        'Bronchiectasis indicates delayed diagnosis - earlier recognition improves outcomes'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI Immunodeficiency Practice Parameter; ICON CVID Guidelines 2015',
        keyPoints: [
            'IgG replacement reduces serious infections by >70%',
            'Trough IgG target individualized; typically 700-800 mg/dL or 500 above baseline',
            'Pneumococcal serotype responses (not just total antibody) needed for diagnosis',
            'Screen for bronchiectasis, autoimmune disease, malignancy at diagnosis and periodically'
        ]
    }
},

// ============================================================================
// ASTHMA (2 cases)
// ============================================================================

'ai-severe-asthma-phenotyping': {
    id: 'ai-severe-asthma-phenotyping',
    title: 'Severe Asthma Phenotyping',
    category: 'Asthma',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'advanced',
    patient: {
        name: 'Michael Johnson',
        age: 45,
        sex: 'Male',
        setting: 'Outpatient Allergy/Pulmonology Clinic',
        chiefComplaint: 'Uncontrolled asthma',
        acuity: 'Stable'
    },
    description: 'Patient with asthma since childhood, now requiring high-dose ICS/LABA plus montelukast. Still has frequent exacerbations (3 ER visits, 2 prednisone bursts in past year). History of nasal polyps, ASA sensitivity, no environmental allergies on skin testing. Eosinophils 650, total IgE 85.',
    openingStatement: 'Mr. Johnson has "severe asthma" but not all severe asthma is the same. Before jumping to biologics, we need to phenotype him. What information do you need, and what phenotype does his current picture suggest?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Asthma phenotypes exist - not one disease',
            initialPrompt: 'We used to think of asthma as one disease. Now we know there are distinct phenotypes. What are the main categories?'
        },
        'resident': {
            focus: 'Phenotyping approach, T2 vs non-T2',
            initialPrompt: 'What biomarkers help distinguish T2-high from T2-low asthma, and why does this matter for treatment?'
        },
        'fellow': {
            focus: 'Biologic selection, AERD overlap, treatment algorithm',
            initialPrompt: 'He has eosinophilic asthma with AERD features but low IgE. Which biologic would you recommend and why?'
        }
    },
    
    conceptDomains: {
        'Phenotypes': ['allergic_asthma', 'eosinophilic_asthma', 'aerd', 'obesity_related', 'neutrophilic'],
        'Biomarkers': ['blood_eosinophils', 'feno', 'total_ige', 'periostin'],
        'T2 Inflammation': ['il4', 'il5', 'il13', 'ige_pathway'],
        'Biologics': ['omalizumab', 'mepolizumab', 'benralizumab', 'dupilumab', 'tezepelumab'],
        'AERD': ['triad', 'cox1_mechanism', 'eosinophilic', 'aspirin_desensitization']
    },
    
    defined_responses: {
        'phenotypes': 'Major phenotypes: (1) Allergic/T2-high: elevated IgE, positive allergen testing, (2) Eosinophilic/T2-high: elevated eosinophils ± elevated FeNO, may not be allergic, (3) AERD: eosinophilic + nasal polyps + NSAID sensitivity, (4) T2-low: neutrophilic or paucigranulocytic, obesity-related.',
        'his phenotype': 'He fits EOSINOPHILIC ASTHMA with AERD: (1) Elevated eos (650), (2) Nasal polyps, (3) ASA sensitivity, (4) Normal/low IgE with negative allergies. This is T2-high but not classic allergic asthma.',
        'biomarkers': 'T2-high markers: Blood eos ≥150-300, FeNO ≥25-50 ppb, elevated IgE (if allergic). His eos 650 and nasal polyps confirm T2-high. Low IgE suggests eosinophilic > allergic pathway dominant.',
        'biologics': 'For eosinophilic asthma with AERD: Anti-IL5/IL5R best fit (mepolizumab, benralizumab). Dupilumab (anti-IL4Rα) also excellent and helps polyps. Omalizumab less ideal - low IgE, no allergic component. Choice: mepolizumab or dupilumab.',
        'dupilumab': 'Dupilumab is particularly attractive here - treats BOTH asthma and nasal polyps (indicated for both). IL-4/IL-13 blockade reduces eosinophilic inflammation. Added benefit: may help if any atopic dermatitis component.',
        'aspirin desensitization': 'For AERD specifically, aspirin desensitization followed by daily aspirin (325-650mg BID) can improve polyp disease and asthma. Can be done in addition to biologic therapy. Reduces polyp recurrence, decreases systemic steroid needs.'
    },
    
    keyTeachingPoints: [
        'Severe asthma requires phenotyping before biologic selection',
        'T2-high biomarkers: eosinophils ≥150-300, FeNO ≥25-50, elevated IgE',
        'AERD (asthma + polyps + NSAID sensitivity) = eosinophilic phenotype',
        'Biologic selection: Match mechanism to phenotype (anti-IgE vs anti-IL5 vs anti-IL4Rα)',
        'Dupilumab uniquely treats both severe asthma AND nasal polyps',
        'Aspirin desensitization is adjunct therapy for AERD'
    ],
    
    guidelines: {
        source: 'GINA 2023; ATS/ERS Severe Asthma Guidelines; AAAAI/ACAAI Asthma Practice Parameter',
        keyPoints: [
            'Confirm diagnosis and adherence before labeling "severe"',
            'Phenotype with blood eos, FeNO, total IgE, allergen testing',
            'T2-high patients eligible for biologics: eos ≥150 or FeNO ≥25 or allergen-driven',
            'Consider overlap syndromes (AERD, ABPA, EGPA)'
        ]
    }
},

'ai-allergic-rhinitis': {
    id: 'ai-allergic-rhinitis',
    title: 'Allergic Rhinitis Management',
    category: 'Rhinitis',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'beginner',
    patient: {
        name: 'Amanda Foster',
        age: 28,
        sex: 'Female',
        setting: 'Outpatient Primary Care/Allergy Clinic',
        chiefComplaint: 'Constant runny nose and sneezing',
        acuity: 'Stable'
    },
    description: 'Young woman with year-round nasal congestion, clear rhinorrhea, sneezing, and itchy eyes. Symptoms worse in spring but present throughout the year. Has tried OTC antihistamines with partial relief. Two cats at home. Affecting her sleep and work productivity.',
    openingStatement: 'Ms. Foster says she\'s "tried everything" for her allergies but nothing works completely. She\'s here to see if allergy shots might help. Before we discuss immunotherapy, what else should we address?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Allergic rhinitis diagnosis, first-line treatments',
            initialPrompt: 'What features confirm this is allergic (vs. non-allergic) rhinitis, and what are first-line treatments?'
        },
        'resident': {
            focus: 'Step-up therapy, intranasal steroids, when to test',
            initialPrompt: 'She\'s tried oral antihistamines. What would you add or change next?'
        },
        'fellow': {
            focus: 'Immunotherapy candidacy, SCIT vs SLIT, allergen selection',
            initialPrompt: 'Her skin testing shows strong positives to cat, dust mite, and tree pollen. How do you determine if she\'s a good immunotherapy candidate?'
        },
        'arnp': {
            focus: 'First-line management, environmental controls, referral criteria',
            initialPrompt: 'You\'re seeing her in primary care. What can you optimize before considering allergy referral?'
        }
    },
    
    conceptDomains: {
        'Diagnosis': ['symptoms', 'triggers', 'seasonal_vs_perennial', 'physical_exam'],
        'Testing': ['skin_prick', 'serum_ige', 'when_to_test'],
        'Pharmacotherapy': ['intranasal_steroids', 'antihistamines', 'combination_therapy', 'decongestants'],
        'Environmental Control': ['allergen_avoidance', 'air_filtration', 'pet_strategies'],
        'Immunotherapy': ['scit', 'slit', 'indications', 'contraindications', 'efficacy']
    },
    
    defined_responses: {
        'diagnosis': 'Classic allergic rhinitis: Sneezing, itching, clear rhinorrhea, nasal congestion + eye symptoms. Perennial symptoms (year-round) suggest indoor allergens (dust mites, pets). Seasonal worsening adds outdoor allergens (pollen). Exam: pale, boggy turbinates, allergic shiners, nasal crease.',
        'ins': 'Intranasal corticosteroids are MOST effective for allergic rhinitis - more than antihistamines. Options: fluticasone, mometasone, triamcinolone (all OTC). Use daily, not PRN. Takes 1-2 weeks for full effect. Proper technique essential - aim laterally, not toward septum.',
        'antihistamines': 'Second-generation preferred (non-sedating): cetirizine, loratadine, fexofenadine. Can add to INS if not controlled. First-gen (diphenhydramine, chlorpheniramine) effective but sedating - avoid in students, drivers.',
        'cats': 'Two cats = major ongoing allergen exposure. Cat allergen is sticky and persists for months even after cat removal. Options: (1) Remove cats (most effective but often rejected), (2) Keep cats out of bedroom, (3) HEPA filter, (4) Wash cats weekly (minimally effective), (5) Accept ongoing symptoms.',
        'immunotherapy': 'Immunotherapy indicated for: (1) Moderate-severe symptoms, (2) Inadequate response to pharmacotherapy, (3) Desire to reduce medication burden, (4) IgE-mediated disease confirmed by testing. She\'s a candidate - poor control despite treatment, quality of life impact.',
        'scit vs slit': 'SCIT (subcutaneous/allergy shots): Most effective, broadest allergen coverage, requires office visits (weekly→monthly), anaphylaxis risk (~1/million). SLIT (sublingual tablets): Convenient daily home use, indicated for grass, ragweed, dust mite, no anaphylaxis risk, single-allergen only.',
        'timeline': 'Immunotherapy is a 3-5 year commitment. Benefits often seen in year 1, continue to improve through year 3. Can provide lasting benefit after discontinuation (unlike medications). Reduces risk of asthma development and new sensitizations in children.'
    },
    
    keyTeachingPoints: [
        'Intranasal corticosteroids are first-line for moderate-severe allergic rhinitis',
        'Daily scheduled use is more effective than PRN for chronic symptoms',
        'Environmental controls for perennial allergens are challenging but important',
        'Immunotherapy indicated when pharmacotherapy insufficient + QOL impact',
        'SCIT more effective/broader than SLIT but requires office visits',
        '3-5 year immunotherapy commitment can provide lasting disease modification'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI Rhinitis Practice Parameter 2020; ARIA Guidelines',
        keyPoints: [
            'INS superior to oral antihistamines for nasal symptoms',
            'Combination INS + intranasal antihistamine (Dymista) for refractory cases',
            'Allergen immunotherapy modifies disease course - only disease-modifying treatment',
            'Consider comorbidities: asthma, sinusitis, sleep disturbance'
        ]
    }
},

// ============================================================================
// FOOD ALLERGY (2 cases - Parallel Pair)
// ============================================================================

'ai-food-allergy-ige': {
    id: 'ai-food-allergy-ige',
    title: 'IgE-Mediated Food Allergy',
    category: 'Food Allergy',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'intermediate',
    isParallel: false,
    parallelCase: 'ai-food-intolerance',
    parallelDescription: 'Compare with food intolerance (non-IgE) - similar symptoms, different mechanism',
    patient: {
        name: 'Tyler Morrison',
        age: 8,
        sex: 'Male',
        setting: 'Outpatient Allergy Clinic',
        chiefComplaint: 'Reaction after eating peanuts',
        acuity: 'Stable'
    },
    description: 'Child brought in by parents after developing hives, lip swelling, and vomiting within 15 minutes of eating a cookie that contained peanuts at a birthday party. Parents gave Benadryl and symptoms resolved in 2 hours. No prior known food allergies.',
    openingStatement: 'Tyler\'s parents are understandably worried. They want to know if this was a "true allergy" and what they should do going forward. What information do you need?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Recognizing IgE-mediated food allergy, distinguishing from other reactions',
            initialPrompt: 'What features of this reaction suggest it was IgE-mediated rather than another type of food reaction?'
        },
        'resident': {
            focus: 'Testing interpretation, management plan',
            initialPrompt: 'How would you confirm peanut allergy and counsel the family on management?'
        },
        'fellow': {
            focus: 'Component testing, OIT candidacy, cross-reactivity',
            initialPrompt: 'His peanut IgE is 45 kU/L. Would you order component testing? Is he a candidate for oral immunotherapy?'
        }
    },
    
    conceptDomains: {
        'History': ['timing', 'symptoms', 'amount_ingested', 'prior_tolerance', 'cofactors'],
        'IgE Features': ['rapid_onset', 'skin_involvement', 'gi_symptoms', 'respiratory_symptoms'],
        'Testing': ['skin_prick', 'specific_ige', 'component_testing', 'oral_food_challenge'],
        'Management': ['strict_avoidance', 'eai_prescription', 'action_plan', 'school_planning'],
        'Emerging Therapies': ['oral_immunotherapy', 'palforzia', 'biologics']
    },
    
    defined_responses: {
        'ige features': 'Classic IgE-mediated food allergy: rapid onset (within minutes to 2 hours), involvement of multiple systems (skin = hives, GI = vomiting, could have respiratory = wheezing). Quick resolution with antihistamines/time also typical.',
        'testing': 'Skin prick testing or serum specific IgE to peanut will help confirm. Higher values correlate with likelihood of clinical reactivity. Positive test + convincing history = diagnosis confirmed without need for oral challenge.',
        'components': 'Peanut component testing helps risk-stratify: Ara h 2 positive = high risk for clinical reactions. Ara h 8 positive only (PR-10 protein) = pollen cross-reactivity, usually mild/oral symptoms only. Very helpful for counseling.',
        'epi': 'ALL children with IgE-mediated food allergy need epinephrine autoinjectors (2), written action plan, and education for parents/school. This was anaphylaxis (2+ systems involved) - epinephrine should have been given.',
        'oit': 'Oral immunotherapy (Palforzia) indicated for peanut allergy ages 4-17. Doesn\'t cure allergy but raises threshold for reaction - provides protection against accidental exposures. Requires commitment - daily dosing, monthly clinic visits.',
        'avoidance': 'Strict peanut avoidance: Read ALL labels (including "may contain"), inform restaurants, separate preparation areas. Peanut is one of "Big 9" allergens requiring labeling. Cross-contact risk at shared facilities.'
    },
    
    keyTeachingPoints: [
        'IgE-mediated food allergy: rapid onset (minutes to 2 hours), multi-system involvement',
        'Any reaction with 2+ systems (skin + GI, or + respiratory, or + cardiovascular) = anaphylaxis',
        'Component testing helps risk-stratify: Ara h 2 = high risk, Ara h 8 alone = low risk',
        'ALL food allergic patients need epinephrine autoinjectors and action plan',
        'Oral immunotherapy (OIT) raises reaction threshold but doesn\'t cure allergy'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI Food Allergy Practice Parameter; NIAID Food Allergy Guidelines',
        keyPoints: [
            'Epinephrine is first-line for food-induced anaphylaxis',
            'Positive test + convincing history = confirmed diagnosis',
            'Component testing improves risk assessment',
            'OIT indicated for patients wanting additional protection beyond avoidance'
        ]
    },
    
    relatedContent: [
        { type: 'parallel', title: 'Food Intolerance (Non-IgE)', link: 'mentor-chat.html?case=ai-food-intolerance', reason: 'Compare IgE vs non-IgE food reactions' },
        { type: 'mechanism', title: 'Type I Hypersensitivity', link: '../mechanism/type1-hypersensitivity.html', reason: 'Understand IgE-mediated mechanism' }
    ]
},

'ai-food-intolerance': {
    id: 'ai-food-intolerance',
    title: 'Food Intolerance vs Food Allergy',
    category: 'Food Allergy',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'intermediate',
    isParallel: true,
    parallelCase: 'ai-food-allergy-ige',
    parallelDescription: 'Compare with IgE-mediated food allergy - different mechanism, different management',
    patient: {
        name: 'Karen Walsh',
        age: 34,
        sex: 'Female',
        setting: 'Outpatient Allergy Clinic',
        chiefComplaint: 'Thinks she\'s allergic to multiple foods',
        acuity: 'Stable'
    },
    description: 'Woman presents reporting she\'s "allergic to everything" - dairy, gluten, soy, eggs. Symptoms include bloating, fatigue, headaches, and "brain fog" 2-6 hours after eating these foods. She\'s eliminated them all and feels somewhat better. No hives, swelling, or breathing problems.',
    openingStatement: 'Ms. Walsh has eliminated many foods and wants allergy testing to "prove" her allergies so her family will take her symptoms seriously. How do you approach this conversation?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Distinguishing food allergy from food intolerance',
            initialPrompt: 'Her symptoms don\'t sound like typical IgE-mediated food allergy. What features are different?'
        },
        'resident': {
            focus: 'Appropriate workup, avoiding unnecessary testing',
            initialPrompt: 'She wants "food allergy panels." What testing, if any, is appropriate here?'
        },
        'fellow': {
            focus: 'Non-IgE food reactions, celiac workup, management',
            initialPrompt: 'How do you differentiate food intolerance, celiac disease, and IBS? What\'s your systematic approach?'
        }
    },
    
    conceptDomains: {
        'Distinguishing Features': ['timing', 'symptoms', 'dose_dependence', 'reproducibility'],
        'Food Intolerance Types': ['lactose_intolerance', 'fodmap_sensitivity', 'histamine_intolerance'],
        'Non-IgE Immune': ['celiac_disease', 'eosinophilic_gi', 'fpies'],
        'Testing Pitfalls': ['igg_panels', 'unvalidated_tests', 'false_positives'],
        'Management': ['elimination_diet', 'reintroduction', 'dietitian_referral']
    },
    
    defined_responses: {
        'not allergy': 'Key features that make IgE-mediated allergy unlikely: (1) Delayed onset (2-6 hours), (2) GI symptoms only without skin/respiratory, (3) Dose-dependent (small amounts OK), (4) Multiple unrelated foods. IgE-allergy is rapid-onset, multi-system, triggered by trace amounts.',
        'igg panels': 'Food IgG panels are NOT validated for diagnosing food allergy or intolerance. IgG to foods is a normal physiologic response to eating - it indicates exposure, not disease. These tests lead to unnecessary restriction and are NOT recommended by any allergy organization.',
        'celiac': 'Celiac disease is worth ruling out - it\'s IgA-mediated, not IgE. Check tTG-IgA (plus total IgA). Patient must be eating gluten for valid testing. If positive, refer GI for endoscopy confirmation.',
        'lactose': 'Lactose intolerance is very common (65% of world population). Mechanism: lactase enzyme deficiency, not immune. Symptoms: bloating, gas, diarrhea 30 min - 2 hours after dairy. Dose-dependent. Diagnosed by hydrogen breath test or trial elimination.',
        'fodmap': 'FODMAP sensitivity may explain multiple food triggers. FODMAPs = fermentable carbohydrates that cause GI symptoms in susceptible individuals (often IBS). Dietitian-guided low FODMAP diet with systematic reintroduction is diagnostic and therapeutic.',
        'management': 'Approach: (1) Rule out celiac, (2) Consider lactose intolerance testing, (3) Refer to GI-specialized dietitian, (4) Structured elimination/reintroduction rather than empiric multi-food avoidance. Avoid IgG panels.'
    },
    
    keyTeachingPoints: [
        'Food intolerance ≠ food allergy - different mechanism, different symptoms, different testing',
        'IgE food allergy: rapid onset, multi-system, trace amounts trigger; intolerance: delayed, GI only, dose-dependent',
        'Food IgG panels are NOT validated and should NOT be ordered',
        'Rule out celiac disease in patients with GI symptoms and multiple food avoidances',
        'FODMAP sensitivity common in IBS patients with multiple food triggers',
        'Dietitian-guided elimination/reintroduction is gold standard for food intolerance'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI Food Allergy Practice Parameter; EAACI Food Allergy Guidelines',
        keyPoints: [
            'Food-specific IgG testing is NOT recommended for diagnosis',
            'Celiac serology should be checked before eliminating gluten',
            'Structured elimination diets superior to empiric multi-food avoidance',
            'Dietitian involvement improves outcomes'
        ]
    },
    
    relatedContent: [
        { type: 'parallel', title: 'IgE-Mediated Food Allergy', link: 'mentor-chat.html?case=ai-food-allergy-ige', reason: 'Compare with true IgE-mediated food allergy' }
    ]
},

// ============================================================================
// VENOM ALLERGY (1 case)
// ============================================================================

'ai-venom-allergy': {
    id: 'ai-venom-allergy',
    title: 'Insect Sting Allergy and VIT',
    category: 'Venom Allergy',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'intermediate',
    patient: {
        name: 'Richard Palmer',
        age: 58,
        sex: 'Male',
        setting: 'Outpatient Allergy Clinic',
        chiefComplaint: 'Bee sting reaction, considering allergy shots',
        acuity: 'Stable'
    },
    description: 'Man stung by a yellow jacket 6 weeks ago while golfing. Within 10 minutes developed generalized hives, lip swelling, and felt lightheaded. Used EpiPen (which he carries for previous sting reaction 5 years ago) and went to ED. Now referred for venom immunotherapy evaluation.',
    openingStatement: 'Mr. Palmer had a systemic reaction to a sting 5 years ago and again now. He golfs regularly and is worried about future stings. Let\'s discuss whether he\'s a candidate for venom immunotherapy.',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Types of sting reactions, who needs workup',
            initialPrompt: 'Not everyone who reacts to a sting needs allergy testing. What types of reactions warrant evaluation?'
        },
        'resident': {
            focus: 'Testing approach, VIT indications',
            initialPrompt: 'How do you test for venom allergy, and what are the indications for venom immunotherapy?'
        },
        'fellow': {
            focus: 'VIT protocols, special populations, discontinuation',
            initialPrompt: 'He\'s on lisinopril and metoprolol. How does this affect your VIT recommendation and protocol?'
        }
    },
    
    conceptDomains: {
        'Reaction Classification': ['local', 'large_local', 'systemic', 'anaphylaxis'],
        'Testing': ['skin_testing', 'specific_ige', 'timing', 'interpretation'],
        'VIT': ['indications', 'contraindications', 'efficacy', 'duration'],
        'Special Considerations': ['mastocytosis', 'ace_inhibitors', 'beta_blockers']
    },
    
    defined_responses: {
        'classification': 'Sting reactions: (1) Normal local - redness/swelling <10cm, (2) Large local - swelling >10cm lasting >24 hours, (3) Systemic - symptoms beyond sting site (his: hives, angioedema, lightheadedness). Systemic reactions warrant evaluation; large local generally don\'t.',
        'testing': 'Test 4-6 weeks post-reaction (allows IgE to recover). Skin testing is gold standard - test honeybee, yellow jacket, wasp, hornet, white-faced hornet. If skin tests negative but history convincing, add serum specific IgE. His positive to yellow jacket confirms diagnosis.',
        'vit indication': 'VIT indicated for: (1) History of systemic reaction (he has this), AND (2) Positive venom testing (confirmed). VIT is 95-98% effective at preventing future systemic reactions - one of most effective treatments in allergy.',
        'beta blocker': 'Beta-blockers were previously considered relative contraindication due to concern for refractory anaphylaxis. Current guidelines (per AAAAI 2020) suggest VIT can be continued with shared decision-making - benefits often outweigh risks. Have epinephrine, glucagon available.',
        'ace inhibitor': 'ACE-I use during VIT is more controversial - some data suggest worse reactions to stings in ACE-I users. Discuss with patient, consider switching to ARB during VIT if cardiologist agrees.',
        'duration': 'VIT typically continued 3-5 years. Can consider stopping after 5 years if: (1) No systemic reactions during VIT, (2) Not severe initial reaction, (3) Not mastocytosis. Lifelong VIT for mastocytosis patients or very severe initial reactions.',
        'mastocytosis': 'Always check baseline tryptase! Elevated tryptase (>11.4 ng/mL) suggests mastocytosis - these patients have more severe sting reactions and need lifelong VIT. Mastocytosis prevalence increased in venom allergy population.'
    },
    
    keyTeachingPoints: [
        'Systemic reactions (not large local) warrant allergy evaluation',
        'Test 4-6 weeks post-reaction; skin testing is gold standard',
        'VIT is 95-98% effective - one of most effective allergy treatments',
        'Check baseline tryptase - elevated levels suggest mastocytosis',
        'Beta-blockers and ACE-I require careful consideration but are not absolute contraindications',
        'VIT duration: typically 3-5 years; lifelong for mastocytosis'
    ],
    
    guidelines: {
        source: 'AAAAI/ACAAI Stinging Insect Hypersensitivity Practice Parameter 2016; AAAAI Anaphylaxis Parameter 2020',
        keyPoints: [
            'VIT recommended for history of systemic reaction + positive testing',
            'Skin testing preferred over serum IgE for sensitivity',
            'Baseline tryptase should be checked in all patients',
            'Duration 3-5 years for most; lifelong for mastocytosis'
        ]
    }
},

// ============================================================================
// EOSINOPHILIA (1 case)
// ============================================================================

'ai-eosinophilia': {
    id: 'ai-eosinophilia',
    title: 'Peripheral Eosinophilia Workup',
    category: 'Immunology',
    specialty: 'allergy-immunology',
    discipline: 'medical',
    difficulty: 'advanced',
    patient: {
        name: 'Patricia Nguyen',
        age: 45,
        sex: 'Female',
        setting: 'Outpatient Allergy/Immunology Clinic',
        chiefComplaint: 'Elevated eosinophils on routine labs',
        acuity: 'Stable'
    },
    description: 'Woman referred for evaluation of persistent eosinophilia found incidentally on routine CBC. Absolute eosinophil count 2,200/μL (normal <500). She reports mild asthma treated with albuterol PRN, occasional GI upset, and diffuse itching for the past 6 months. No recent travel, no new medications.',
    openingStatement: 'Dr. Nguyen\'s PCP found eosinophilia on her annual labs and isn\'t sure what to do with it. She feels "mostly fine" but does have some symptoms. How do you approach eosinophilia workup?',
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Causes of eosinophilia, systematic approach',
            initialPrompt: 'The differential for eosinophilia is broad. What are the major categories of causes?'
        },
        'resident': {
            focus: 'Workup approach, when to worry',
            initialPrompt: 'Her eos are 2,200. Is this mild, moderate, or severe? What workup do you initiate?'
        },
        'fellow': {
            focus: 'EGPA vs HES, bone marrow indications, management',
            initialPrompt: 'She has asthma, eosinophilia, GI symptoms, and skin itching. Are you concerned about EGPA? What distinguishes it from other causes?'
        }
    },
    
    conceptDomains: {
        'Classification': ['mild', 'moderate', 'severe', 'hypereosinophilia'],
        'Differential': ['allergic', 'parasitic', 'drug_induced', 'autoimmune', 'malignancy', 'hes'],
        'Workup': ['history', 'labs', 'imaging', 'bone_marrow'],
        'Specific Conditions': ['egpa', 'hes', 'eosinophilic_gi', 'parasites'],
        'Management': ['treat_underlying', 'steroids', 'biologics']
    },
    
    defined_responses: {
        'classification': 'Eosinophilia classification: Mild 500-1500/μL, Moderate 1500-5000/μL, Severe >5000/μL. Hypereosinophilia = >1500/μL on two occasions OR tissue eosinophilia with damage. Hers at 2,200 = moderate.',
        'differential': 'Major categories - "NAACP": Neoplastic (HES, lymphoma, solid tumors), Allergic (asthma, atopic dermatitis, allergic rhinitis), Addison\'s disease, Connective tissue (EGPA, eosinophilic fasciitis), Parasitic (especially tissue-invasive helminths). Drug reaction also common.',
        'initial workup': 'Start with: Detailed med list (any new drugs?), travel history (parasites?), stool O&P x3, comprehensive metabolic, LDH, B12, tryptase, IgE level. For her with asthma + GI + skin: also check ANCA.',
        'anca': 'ANCA is important here. She has: asthma + eosinophilia + GI + skin involvement. EGPA (Churg-Strauss) presents exactly this way. ~40% EGPA patients are ANCA positive (MPO/p-ANCA). Negative ANCA doesn\'t rule out EGPA.',
        'egpa': 'EGPA diagnostic criteria: Asthma + eosinophilia (>10% or >1500) + 2 of: migratory pulmonary infiltrates, paranasal sinus abnormality, mono/polyneuropathy, extravascular eosinophils on biopsy. She may have early EGPA - needs rheum involvement.',
        'hes': 'HES = hypereosinophilia + end-organ damage without identified cause. Check for cardiac involvement (echo - eosinophilic myocarditis), pulmonary (CT chest), GI (consider EGD with biopsies). If no secondary cause found and >1500 persistent, may need bone marrow.',
        'bone marrow': 'Bone marrow indications: (1) Severe/persistent hypereosinophilia, (2) Suspicion for myeloid neoplasm (anemia, thrombocytopenia, splenomegaly), (3) No clear secondary cause. Looking for clonal eosinophilia (FIP1L1-PDGFRA fusion, other abnormalities).'
    },
    
    keyTeachingPoints: [
        'Eosinophilia classification: Mild <1500, Moderate 1500-5000, Severe >5000',
        'NAACP mnemonic: Neoplastic, Allergic, Addison, Connective tissue, Parasitic',
        'Always ask about medications, travel, and parasitic exposures',
        'EGPA triad: asthma + eosinophilia + vasculitis features; check ANCA',
        'HES = hypereosinophilia + end-organ damage without secondary cause',
        'Bone marrow for severe/persistent eosinophilia without explanation'
    ],
    
    guidelines: {
        source: 'ASH Eosinophilia Guidelines; AAAAI Practice Parameter',
        keyPoints: [
            'Systematic approach to identify secondary causes before considering HES',
            'EGPA should be considered in any asthmatic with eosinophilia + systemic symptoms',
            'End-organ assessment (cardiac, pulmonary, GI) essential in hypereosinophilia',
            'FIP1L1-PDGFRA testing indicated if clonal eosinophilia suspected'
        ]
    }
}

};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_ALLERGY_CASES;
}

// Make available globally for case-library.html
if (typeof window !== 'undefined') {
    window.COACHDX_ALLERGY_CASES = COACHDX_ALLERGY_CASES;
}
