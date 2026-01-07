/**
 * Interprofessional Collaboration Framework
 * Maps A/I conditions to collaborating specialties, communication needs, and shared care responsibilities
 * Part of the Dx Learning Ecosystem
 */

const INTERPROFESSIONAL_COLLABORATION = {

    // ============================================================================
    // CONDITION-BASED COLLABORATION MAPS
    // ============================================================================
    
    conditionCollaborators: {
        
        'anaphylaxis': {
            condition: 'Anaphylaxis',
            category: 'acute',
            leadSpecialty: 'allergy-immunology',
            
            primaryCollaborators: [
                {
                    specialty: 'emergency-medicine',
                    role: 'Acute stabilization and treatment',
                    whenToInvolve: 'Immediate - all acute anaphylaxis',
                    communicationFocus: ['Epinephrine given?', 'Vitals trajectory', 'Trigger identified?', 'Biphasic risk'],
                    handoffElements: ['Time of reaction', 'Epinephrine doses/times', 'Response to treatment', 'Observation period needed']
                },
                {
                    specialty: 'ems',
                    role: 'Prehospital recognition and treatment',
                    whenToInvolve: 'Field anaphylaxis cases',
                    communicationFocus: ['STEMI-like urgency', 'Epi given prehospital', 'Vitals en route'],
                    handoffElements: ['Suspected trigger', 'Onset time', 'Treatments given', 'Patient response']
                },
                {
                    specialty: 'pcp',
                    role: 'Follow-up coordination, EpiPen renewal',
                    whenToInvolve: 'Post-reaction follow-up',
                    communicationFocus: ['Action plan in chart', 'EpiPen prescription', 'Allergy referral placed'],
                    handoffElements: ['Confirmed trigger', 'Testing results', 'Avoidance instructions', 'When to re-refer']
                },
                {
                    specialty: 'nursing',
                    role: 'EpiPen training, action plan education',
                    whenToInvolve: 'All patients prescribed EpiPen',
                    communicationFocus: ['Teach-back completed', 'Trainer device used', 'Action plan reviewed'],
                    handoffElements: ['Patient confidence level', 'Barriers identified', 'Follow-up education needs']
                }
            ],
            
            secondaryCollaborators: [
                {
                    specialty: 'school-nurse',
                    role: '504 plan, school action plan, staff training',
                    whenToInvolve: 'All school-age children with anaphylaxis risk',
                    communicationFocus: ['504 accommodation letter', 'Action plan for school', 'Staff training needs'],
                    keyDocuments: ['Emergency Action Plan', '504 Plan', 'Medication Authorization']
                },
                {
                    specialty: 'dietitian',
                    role: 'Food avoidance education, label reading',
                    whenToInvolve: 'Food-triggered anaphylaxis',
                    communicationFocus: ['Hidden allergen sources', 'Cross-contact risks', 'Nutritional adequacy'],
                    keyDocuments: ['Avoidance guide', 'Safe food list', 'Restaurant guidance']
                },
                {
                    specialty: 'psychology',
                    role: 'Anxiety management, quality of life',
                    whenToInvolve: 'Significant anxiety, PTSD symptoms, quality of life impact',
                    communicationFocus: ['Anxiety screening results', 'Impact on daily function', 'Avoidance behaviors'],
                    keyDocuments: ['FAQL scores', 'Anxiety assessment', 'Treatment recommendations']
                },
                {
                    specialty: 'pharmacy',
                    role: 'EpiPen access, drug interaction review',
                    whenToInvolve: 'All patients - EpiPen counseling',
                    communicationFocus: ['Insurance coverage', 'Generic vs brand', 'Expiration tracking', 'Beta-blocker review'],
                    keyDocuments: ['Medication list review', 'Interaction check', 'Cost assistance resources']
                }
            ],
            
            teamHuddleTopics: [
                'Is action plan complete and distributed to all caregivers?',
                'Does patient have 2 EpiPens and know how to use them?',
                'Has trigger been identified and confirmed?',
                'Are there any medication interactions (beta-blockers, ACE-I)?',
                'Is mental health support needed?',
                'For children: Is school 504 plan in place?'
            ],
            
            qualityMetrics: [
                'EpiPen prescribed at discharge',
                'Action plan provided',
                'Allergy referral placed',
                'Teach-back documented',
                '504 plan for school-age children'
            ]
        },
        
        'food-allergy': {
            condition: 'Food Allergy',
            category: 'chronic',
            leadSpecialty: 'allergy-immunology',
            
            primaryCollaborators: [
                {
                    specialty: 'gastroenterology',
                    role: 'EoE evaluation, FPIES workup, GI symptoms',
                    whenToInvolve: 'GI symptoms beyond IgE-mediated, suspected EoE, FPIES',
                    communicationFocus: ['Scope findings', 'Eosinophil counts', 'Elimination diet response'],
                    handoffElements: ['Biopsy results', 'Diet trial outcomes', 'Reintroduction plan']
                },
                {
                    specialty: 'dietitian',
                    role: 'Elimination diet, nutritional adequacy, reintroduction',
                    whenToInvolve: 'All food allergy patients, especially multiple allergens',
                    communicationFocus: ['Growth parameters', 'Nutritional gaps', 'Diet compliance'],
                    handoffElements: ['Diet plan', 'Substitution guide', 'Reintroduction protocol']
                },
                {
                    specialty: 'pcp-pediatrics',
                    role: 'Growth monitoring, routine care, EpiPen renewals',
                    whenToInvolve: 'Ongoing - all patients',
                    communicationFocus: ['Growth curves', 'Reaction history', 'Action plan updates'],
                    handoffElements: ['Testing results', 'Challenge outcomes', 'Outgrown allergens']
                }
            ],
            
            secondaryCollaborators: [
                {
                    specialty: 'ot-feeding',
                    role: 'Feeding therapy, food aversion, texture progression',
                    whenToInvolve: 'Food aversion, texture issues, reintroduction difficulty',
                    communicationFocus: ['Feeding behaviors', 'Texture tolerance', 'Oral motor skills'],
                    keyDocuments: ['Feeding evaluation', 'Therapy goals', 'Home program']
                },
                {
                    specialty: 'speech-therapy',
                    role: 'Oral motor, swallowing evaluation',
                    whenToInvolve: 'Swallowing concerns, EoE with dysphagia',
                    communicationFocus: ['Swallow safety', 'Aspiration risk', 'Diet texture recommendations'],
                    keyDocuments: ['Swallow study results', 'Diet texture level', 'Therapy plan']
                },
                {
                    specialty: 'psychology',
                    role: 'Food anxiety, mealtime stress, family dynamics',
                    whenToInvolve: 'Significant anxiety, avoidant eating, family stress',
                    communicationFocus: ['Anxiety level', 'Family coping', 'Mealtime behaviors'],
                    keyDocuments: ['Assessment results', 'Treatment plan', 'Family guidance']
                },
                {
                    specialty: 'school-nurse',
                    role: 'School safety, cafeteria planning, field trips',
                    whenToInvolve: 'All school-age children',
                    communicationFocus: ['Action plan', 'Cafeteria accommodations', 'Staff training'],
                    keyDocuments: ['504 Plan', 'Emergency Action Plan', 'Field trip protocol']
                }
            ],
            
            teamHuddleTopics: [
                'Are all triggers confirmed by testing + history?',
                'Is nutritional status adequate with eliminations?',
                'Is patient candidate for OIT or other therapy?',
                'Are there signs of EoE or other non-IgE condition?',
                'Is anxiety/quality of life being addressed?',
                'Is school/daycare prepared?'
            ]
        },
        
        'asthma': {
            condition: 'Asthma (Allergic/Severe)',
            category: 'chronic',
            leadSpecialty: 'allergy-immunology',
            sharedLead: 'pulmonology',
            
            primaryCollaborators: [
                {
                    specialty: 'pulmonology',
                    role: 'Severe asthma phenotyping, bronchoscopy, biologics co-management',
                    whenToInvolve: 'Severe/difficult-to-treat asthma, unclear diagnosis',
                    communicationFocus: ['Phenotype (T2 vs non-T2)', 'Biologic selection', 'Bronchoscopy findings'],
                    handoffElements: ['Spirometry trends', 'Biomarkers (IgE, eos, FeNO)', 'Biologic response']
                },
                {
                    specialty: 'respiratory-therapy',
                    role: 'Inhaler technique, nebulizer education, PFT administration',
                    whenToInvolve: 'All asthma patients - inhaler training',
                    communicationFocus: ['Technique assessment', 'Device selection', 'Spacer use'],
                    handoffElements: ['Technique score', 'Device preference', 'Education completed']
                },
                {
                    specialty: 'pcp',
                    role: 'Routine monitoring, controller adherence, acute exacerbations',
                    whenToInvolve: 'Ongoing co-management',
                    communicationFocus: ['ACT scores', 'Exacerbation frequency', 'Adherence concerns'],
                    handoffElements: ['Step therapy level', 'Biologic status', 'Action plan']
                }
            ],
            
            secondaryCollaborators: [
                {
                    specialty: 'ent',
                    role: 'Chronic rhinosinusitis, nasal polyps, VCD evaluation',
                    whenToInvolve: 'Refractory symptoms, nasal polyps, suspected VCD',
                    communicationFocus: ['Sinus CT findings', 'Polyp grade', 'Laryngoscopy results'],
                    keyDocuments: ['Imaging reports', 'Scope findings', 'Surgical recommendations']
                },
                {
                    specialty: 'speech-therapy',
                    role: 'VCD/ILO therapy, breathing retraining',
                    whenToInvolve: 'Confirmed or suspected VCD',
                    communicationFocus: ['VCD triggers', 'Breathing technique progress', 'Symptom control'],
                    keyDocuments: ['Laryngoscopy during symptoms', 'Therapy progress', 'Home exercises']
                },
                {
                    specialty: 'sleep-medicine',
                    role: 'OSA evaluation, nocturnal symptoms',
                    whenToInvolve: 'Nocturnal symptoms, obesity, snoring, daytime sleepiness',
                    communicationFocus: ['Sleep study results', 'CPAP compliance', 'Nocturnal asthma vs OSA'],
                    keyDocuments: ['Polysomnography', 'CPAP data', 'Treatment recommendations']
                },
                {
                    specialty: 'pharmacy',
                    role: 'Inhaler selection, biologic administration, drug interactions',
                    whenToInvolve: 'Complex regimens, biologic starts',
                    communicationFocus: ['Device options', 'Insurance coverage', 'Administration training'],
                    keyDocuments: ['Medication reconciliation', 'Prior auth status', 'Cost assistance']
                },
                {
                    specialty: 'psychology',
                    role: 'Anxiety comorbidity, adherence barriers',
                    whenToInvolve: 'Poor adherence, significant anxiety, panic attacks',
                    communicationFocus: ['Anxiety screening', 'Adherence barriers', 'Panic vs asthma'],
                    keyDocuments: ['Assessment', 'Treatment plan', 'Behavioral strategies']
                }
            ],
            
            teamHuddleTopics: [
                'Is this truly refractory asthma or poor technique/adherence?',
                'What is the phenotype (T2-high vs T2-low)?',
                'Has VCD been ruled out?',
                'Are comorbidities controlled (GERD, rhinitis, OSA)?',
                'Is patient candidate for biologic therapy?',
                'Is inhaler technique optimized?'
            ]
        },
        
        'eczema': {
            condition: 'Atopic Dermatitis/Eczema',
            category: 'chronic',
            leadSpecialty: 'allergy-immunology',
            sharedLead: 'dermatology',
            
            primaryCollaborators: [
                {
                    specialty: 'dermatology',
                    role: 'Severe AD management, systemic therapy, phototherapy',
                    whenToInvolve: 'Moderate-severe AD, systemic therapy consideration',
                    communicationFocus: ['SCORAD/EASI scores', 'Topical regimen', 'Systemic options'],
                    handoffElements: ['Current topicals', 'Prior treatments', 'Patch test results']
                },
                {
                    specialty: 'pcp-pediatrics',
                    role: 'Mild AD management, maintenance, flare recognition',
                    whenToInvolve: 'Ongoing - mild cases, maintenance',
                    communicationFocus: ['Flare frequency', 'Topical adherence', 'Trigger identification'],
                    handoffElements: ['Step-up criteria', 'When to refer back', 'Food allergy testing results']
                }
            ],
            
            secondaryCollaborators: [
                {
                    specialty: 'nursing',
                    role: 'Wet wrap teaching, skincare education',
                    whenToInvolve: 'Moderate-severe AD, wet wrap candidates',
                    communicationFocus: ['Wet wrap technique', 'Bathing routine', 'Moisturizer application'],
                    keyDocuments: ['Wet wrap instructions', 'Skincare routine', 'Teach-back documentation']
                },
                {
                    specialty: 'psychology',
                    role: 'Itch-scratch cycle, sleep disturbance, QOL',
                    whenToInvolve: 'Significant itch, sleep disruption, behavioral issues',
                    communicationFocus: ['Sleep quality', 'Scratching behaviors', 'Family stress'],
                    keyDocuments: ['DLQI/CDLQI scores', 'Sleep assessment', 'Behavioral plan']
                },
                {
                    specialty: 'dietitian',
                    role: 'Food trigger evaluation (if applicable)',
                    whenToInvolve: 'Suspected food triggers, elimination diet trials',
                    communicationFocus: ['Food diary review', 'Elimination outcomes', 'Nutritional status'],
                    keyDocuments: ['Food diary', 'Elimination protocol', 'Reintroduction results']
                },
                {
                    specialty: 'infectious-disease',
                    role: 'Recurrent skin infections, eczema herpeticum',
                    whenToInvolve: 'Recurrent staph infections, suspected viral superinfection',
                    communicationFocus: ['Culture results', 'Decolonization protocol', 'Antiviral needs'],
                    keyDocuments: ['Culture data', 'Treatment protocol', 'Prevention strategies']
                }
            ],
            
            teamHuddleTopics: [
                'Is baseline skincare routine optimized?',
                'Are topical steroids being used correctly (not phobia)?',
                'Should food allergy testing be pursued?',
                'Is patient candidate for dupilumab or other biologic?',
                'Are sleep and quality of life being addressed?',
                'Is there secondary infection?'
            ]
        },
        
        'urticaria-angioedema': {
            condition: 'Urticaria and Angioedema',
            category: 'chronic',
            leadSpecialty: 'allergy-immunology',
            
            primaryCollaborators: [
                {
                    specialty: 'dermatology',
                    role: 'Urticarial vasculitis, autoimmune urticaria, biopsy',
                    whenToInvolve: 'Lesions >24h, bruising, systemic symptoms, biopsy needed',
                    communicationFocus: ['Lesion duration', 'Biopsy findings', 'Vasculitis workup'],
                    handoffElements: ['Pathology results', 'Autoimmune workup', 'Treatment response']
                },
                {
                    specialty: 'emergency-medicine',
                    role: 'Acute angioedema, airway management',
                    whenToInvolve: 'Airway angioedema, anaphylaxis concern',
                    communicationFocus: ['Airway status', 'ACE-I history', 'Treatment response'],
                    handoffElements: ['Trigger identified', 'Treatments given', 'Follow-up plan']
                },
                {
                    specialty: 'pcp',
                    role: 'Medication review (ACE-I), chronic management',
                    whenToInvolve: 'Medication-induced angioedema, ongoing CSU management',
                    communicationFocus: ['ACE-I stopped', 'Alternative antihypertensive', 'Antihistamine regimen'],
                    handoffElements: ['Confirmed trigger', 'Treatment plan', 'When to escalate']
                }
            ],
            
            secondaryCollaborators: [
                {
                    specialty: 'hematology',
                    role: 'Mast cell disorders, systemic mastocytosis',
                    whenToInvolve: 'Elevated tryptase, suspected mastocytosis',
                    communicationFocus: ['Tryptase levels', 'Bone marrow results', 'KIT mutation status'],
                    keyDocuments: ['Bone marrow biopsy', 'Flow cytometry', 'Treatment plan']
                },
                {
                    specialty: 'rheumatology',
                    role: 'Autoimmune workup, complement-mediated angioedema',
                    whenToInvolve: 'Suspected autoimmune etiology, low complement',
                    communicationFocus: ['ANA, complement levels', 'Autoimmune markers', 'Systemic symptoms'],
                    keyDocuments: ['Serologic workup', 'Diagnosis', 'Treatment recommendations']
                },
                {
                    specialty: 'ent',
                    role: 'Laryngeal angioedema evaluation',
                    whenToInvolve: 'Recurrent laryngeal involvement, voice changes',
                    communicationFocus: ['Laryngoscopy findings', 'Airway assessment', 'Emergency plan'],
                    keyDocuments: ['Scope images', 'Airway grading', 'Intervention threshold']
                }
            ],
            
            teamHuddleTopics: [
                'Is this CSU, inducible urticaria, or something else?',
                'Has ACE-I been ruled out as cause of angioedema?',
                'Is there urticaria WITH the angioedema (histamine) or WITHOUT (bradykinin)?',
                'Should HAE workup be done (C4, C1-INH)?',
                'Is tryptase elevated (mastocytosis)?',
                'Is patient candidate for omalizumab?'
            ]
        },
        
        'eosinophilic-gi': {
            condition: 'Eosinophilic GI Disorders (EoE, EG, EC)',
            category: 'chronic',
            leadSpecialty: 'gastroenterology',
            sharedLead: 'allergy-immunology',
            
            primaryCollaborators: [
                {
                    specialty: 'gastroenterology',
                    role: 'Endoscopy, biopsy, PPI trial, dilation',
                    whenToInvolve: 'Diagnosis confirmation, treatment monitoring, strictures',
                    communicationFocus: ['Eosinophil counts', 'Endoscopic findings', 'Response to treatment'],
                    handoffElements: ['Biopsy results', 'Diet trial protocol', 'Scope schedule']
                },
                {
                    specialty: 'dietitian',
                    role: 'Elimination diets, food reintroduction protocol',
                    whenToInvolve: 'All EoE patients on dietary management',
                    communicationFocus: ['Diet compliance', 'Nutritional adequacy', 'Reintroduction sequence'],
                    handoffElements: ['Diet protocol', 'Trigger foods identified', 'Nutritional supplements']
                },
                {
                    specialty: 'allergy-immunology',
                    role: 'Food allergy testing, atopic comorbidities',
                    whenToInvolve: 'Guiding elimination diet, managing comorbidities',
                    communicationFocus: ['SPT/IgE results', 'Atopic march history', 'Environmental allergies'],
                    handoffElements: ['Testing results', 'Diet recommendations', 'Biologic candidacy']
                }
            ],
            
            secondaryCollaborators: [
                {
                    specialty: 'ot-feeding',
                    role: 'Feeding therapy, texture advancement, food aversion',
                    whenToInvolve: 'Food aversion, texture difficulties, reintroduction challenges',
                    communicationFocus: ['Feeding behaviors', 'Texture tolerance', 'Mealtime dynamics'],
                    keyDocuments: ['Feeding evaluation', 'Therapy plan', 'Home program']
                },
                {
                    specialty: 'speech-therapy',
                    role: 'Dysphagia evaluation, swallowing therapy',
                    whenToInvolve: 'Dysphagia, food impaction history, swallowing concerns',
                    communicationFocus: ['Swallow function', 'Aspiration risk', 'Diet texture level'],
                    keyDocuments: ['Swallow study', 'Dysphagia severity', 'Recommendations']
                },
                {
                    specialty: 'psychology',
                    role: 'Coping with chronic disease, food anxiety',
                    whenToInvolve: 'Quality of life impact, food anxiety, adherence issues',
                    communicationFocus: ['QOL assessment', 'Coping strategies', 'Family support'],
                    keyDocuments: ['PedsQL-EoE', 'Treatment plan', 'Family guidance']
                }
            ],
            
            teamHuddleTopics: [
                'Is diagnosis confirmed (≥15 eos/hpf + symptoms)?',
                'Has PPI-responsive EoE been ruled out?',
                'What is the dietary approach (empiric vs testing-directed)?',
                'How is nutritional status?',
                'Are there swallowing difficulties or food impactions?',
                'Is patient candidate for dupilumab?'
            ]
        },
        
        'sinusitis': {
            condition: 'Chronic Rhinosinusitis (with/without Polyps)',
            category: 'chronic',
            leadSpecialty: 'allergy-immunology',
            sharedLead: 'ent',
            
            primaryCollaborators: [
                {
                    specialty: 'ent',
                    role: 'Nasal endoscopy, sinus surgery, polyp management',
                    whenToInvolve: 'Nasal polyps, surgical candidate, structural issues',
                    communicationFocus: ['Endoscopic findings', 'Polyp grade', 'Surgical plan'],
                    handoffElements: ['CT findings', 'Scope photos', 'Post-op care']
                },
                {
                    specialty: 'allergy-immunology',
                    role: 'Allergic rhinitis management, AERD evaluation, biologics',
                    whenToInvolve: 'Allergic component, AERD suspected, biologic candidacy',
                    communicationFocus: ['Allergy testing', 'AERD diagnosis', 'Biologic response'],
                    handoffElements: ['Testing results', 'Immunotherapy status', 'Biologic plan']
                }
            ],
            
            secondaryCollaborators: [
                {
                    specialty: 'pulmonology',
                    role: 'Asthma management in AERD, lower airway assessment',
                    whenToInvolve: 'Asthma comorbidity, AERD',
                    communicationFocus: ['Asthma control', 'Aspirin desensitization candidacy'],
                    keyDocuments: ['Spirometry', 'Asthma severity', 'Treatment plan']
                },
                {
                    specialty: 'infectious-disease',
                    role: 'Recurrent infections, culture-directed therapy',
                    whenToInvolve: 'Recurrent bacterial sinusitis, unusual organisms',
                    communicationFocus: ['Culture results', 'Antibiotic selection', 'Prophylaxis'],
                    keyDocuments: ['Culture data', 'Sensitivity patterns', 'Treatment history']
                }
            ],
            
            teamHuddleTopics: [
                'Is this CRSsNP or CRSwNP?',
                'Has AERD been considered (asthma + polyps + NSAID sensitivity)?',
                'Is there an allergic component?',
                'Would immunodeficiency workup be helpful (recurrent infections)?',
                'Is patient candidate for surgery vs biologic vs both?',
                'Has aspirin desensitization been considered for AERD?'
            ]
        },
        
        'drug-allergy': {
            condition: 'Drug Allergy',
            category: 'acute-chronic',
            leadSpecialty: 'allergy-immunology',
            
            primaryCollaborators: [
                {
                    specialty: 'infectious-disease',
                    role: 'Antibiotic selection, alternative agents',
                    whenToInvolve: 'Antibiotic allergy limiting treatment options',
                    communicationFocus: ['Required antibiotic', 'Alternatives', 'Desensitization need'],
                    handoffElements: ['Testing results', 'Safe alternatives', 'Desensitization protocol']
                },
                {
                    specialty: 'pharmacy',
                    role: 'Cross-reactivity assessment, desensitization protocols',
                    whenToInvolve: 'All drug allergy consultations',
                    communicationFocus: ['Cross-reactivity risk', 'Protocol development', 'Monitoring plan'],
                    handoffElements: ['Drug interaction check', 'Protocol details', 'Emergency kit']
                },
                {
                    specialty: 'requesting-service',
                    role: 'Clinical context, urgency, alternative options',
                    whenToInvolve: 'Initial consult',
                    communicationFocus: ['Why this drug needed', 'Timeline', 'Acceptable alternatives'],
                    handoffElements: ['Testing plan', 'Timeline for results', 'Safe to proceed or not']
                }
            ],
            
            secondaryCollaborators: [
                {
                    specialty: 'oncology',
                    role: 'Chemotherapy reactions, desensitization',
                    whenToInvolve: 'Chemotherapy allergy, carboplatin, taxanes',
                    communicationFocus: ['Reaction severity', 'Treatment protocol', 'Desensitization success'],
                    keyDocuments: ['Reaction documentation', 'Desensitization protocol', 'Premedication orders']
                },
                {
                    specialty: 'anesthesia',
                    role: 'Perioperative allergies, NMBA reactions',
                    whenToInvolve: 'Perioperative anaphylaxis, NMBA allergy',
                    communicationFocus: ['Safe anesthetic agents', 'Testing results', 'Perioperative plan'],
                    keyDocuments: ['Testing results', 'Safe agent list', 'Preoperative note']
                },
                {
                    specialty: 'surgery',
                    role: 'Perioperative antibiotic alternatives',
                    whenToInvolve: 'Surgical prophylaxis in penicillin-allergic patients',
                    communicationFocus: ['Safe antibiotic for prophylaxis', 'Delabeling completed?'],
                    keyDocuments: ['Testing results', 'Safe alternatives', 'Allergy update']
                },
                {
                    specialty: 'dermatology',
                    role: 'Severe cutaneous reactions (SJS/TEN, DRESS)',
                    whenToInvolve: 'Suspected SJS/TEN, DRESS syndrome',
                    communicationFocus: ['Severity assessment', 'Causative agent', 'Wound care needs'],
                    keyDocuments: ['Reaction documentation', 'Biopsy if done', 'Contraindicated drugs']
                }
            ],
            
            teamHuddleTopics: [
                'What exactly was the reaction (timeline, symptoms, treatment)?',
                'Is this truly IgE-mediated or another mechanism?',
                'Can the patient be delabeled (penicillin)?',
                'Is desensitization indicated and feasible?',
                'What are truly safe alternatives?',
                'Has the medical record been updated correctly?'
            ]
        },
        
        'immunodeficiency': {
            condition: 'Primary Immunodeficiency',
            category: 'chronic',
            leadSpecialty: 'allergy-immunology',
            
            primaryCollaborators: [
                {
                    specialty: 'infectious-disease',
                    role: 'Infection management, prophylaxis, vaccination guidance',
                    whenToInvolve: 'Active infections, prophylaxis planning',
                    communicationFocus: ['Current infections', 'Prophylaxis regimen', 'Vaccine safety'],
                    handoffElements: ['Culture data', 'Antibiotic history', 'Prophylaxis protocol']
                },
                {
                    specialty: 'hematology',
                    role: 'Bone marrow evaluation, lymphoproliferative complications',
                    whenToInvolve: 'Cytopenias, lymphadenopathy, lymphoma surveillance',
                    communicationFocus: ['CBC trends', 'Lymphoma risk', 'Bone marrow findings'],
                    handoffElements: ['Bone marrow results', 'Surveillance plan', 'Treatment needs']
                },
                {
                    specialty: 'pulmonology',
                    role: 'Bronchiectasis management, pulmonary function',
                    whenToInvolve: 'Structural lung disease, recurrent pneumonia',
                    communicationFocus: ['CT findings', 'PFT trends', 'Airway clearance'],
                    handoffElements: ['Imaging', 'PFTs', 'Bronchiectasis management plan']
                }
            ],
            
            secondaryCollaborators: [
                {
                    specialty: 'gastroenterology',
                    role: 'GI complications (CVID enteropathy, nodular hyperplasia)',
                    whenToInvolve: 'Chronic diarrhea, malabsorption, GI symptoms',
                    communicationFocus: ['Endoscopy findings', 'Biopsy results', 'Nutritional status'],
                    keyDocuments: ['Scope reports', 'Pathology', 'Nutrition plan']
                },
                {
                    specialty: 'rheumatology',
                    role: 'Autoimmune complications',
                    whenToInvolve: 'Autoimmune cytopenias, inflammatory arthritis, granulomas',
                    communicationFocus: ['Autoimmune manifestations', 'Treatment options'],
                    keyDocuments: ['Autoimmune workup', 'Treatment plan']
                },
                {
                    specialty: 'pharmacy',
                    role: 'Ig replacement logistics, home infusion',
                    whenToInvolve: 'Ig replacement initiation, ongoing management',
                    communicationFocus: ['Product selection', 'Route (IV vs SC)', 'Home infusion setup'],
                    keyDocuments: ['Ig dosing', 'Infusion schedule', 'Reaction management']
                }
            ],
            
            teamHuddleTopics: [
                'Is Ig replacement adequately dosing (trough >800)?',
                'Is prophylactic antibiotic coverage appropriate?',
                'Are there signs of autoimmune or granulomatous complications?',
                'Is lymphoma surveillance being done?',
                'Are live vaccines being avoided?',
                'Is bronchiectasis being managed with airway clearance?'
            ]
        },
        
        'mast-cell-disease': {
            condition: 'Mast Cell Disorders (Mastocytosis, MCAS)',
            category: 'chronic',
            leadSpecialty: 'allergy-immunology',
            sharedLead: 'hematology',
            
            primaryCollaborators: [
                {
                    specialty: 'hematology',
                    role: 'Bone marrow evaluation, systemic mastocytosis management',
                    whenToInvolve: 'Elevated tryptase, suspected systemic mastocytosis',
                    communicationFocus: ['Bone marrow results', 'KIT mutation', 'Disease category'],
                    handoffElements: ['WHO classification', 'Treatment plan', 'Monitoring schedule']
                },
                {
                    specialty: 'dermatology',
                    role: 'Cutaneous mastocytosis, urticaria pigmentosa',
                    whenToInvolve: 'Skin lesions, Darier sign positive',
                    communicationFocus: ['Skin biopsy results', 'Extent of involvement', 'Skin-directed therapy'],
                    handoffElements: ['Biopsy pathology', 'Skin management plan']
                }
            ],
            
            secondaryCollaborators: [
                {
                    specialty: 'gastroenterology',
                    role: 'GI symptoms, GI mast cell infiltration',
                    whenToInvolve: 'Abdominal pain, diarrhea, GI biopsies',
                    communicationFocus: ['GI symptoms', 'Biopsy mast cell counts', 'Diet modifications'],
                    keyDocuments: ['Endoscopy reports', 'Pathology with mast cell stains']
                },
                {
                    specialty: 'cardiology',
                    role: 'Anaphylaxis-related cardiac events, Kounis syndrome',
                    whenToInvolve: 'Cardiac symptoms during episodes, troponin elevation',
                    communicationFocus: ['Cardiac workup', 'Anaphylaxis-related ACS', 'Beta-blocker caution'],
                    keyDocuments: ['Echo', 'Troponin trends', 'Anaphylaxis cardiac protocol']
                },
                {
                    specialty: 'anesthesia',
                    role: 'Perioperative management',
                    whenToInvolve: 'Any surgical procedure',
                    communicationFocus: ['Premedication protocol', 'Safe anesthetics', 'Trigger avoidance'],
                    keyDocuments: ['Perioperative protocol', 'Emergency plan', 'Safe medication list']
                }
            ],
            
            teamHuddleTopics: [
                'Is this cutaneous mastocytosis, systemic mastocytosis, or MCAS?',
                'Has bone marrow been done (if tryptase >20 or systemic symptoms)?',
                'Is patient on appropriate anti-mediator therapy?',
                'Does patient have venom allergy (common in mastocytosis)?',
                'Is there a perioperative protocol in place?',
                'Is patient carrying epinephrine?'
            ]
        },
        
        'vcd': {
            condition: 'Vocal Cord Dysfunction / Inducible Laryngeal Obstruction',
            category: 'chronic',
            leadSpecialty: 'allergy-immunology',
            sharedLead: 'pulmonology',
            
            primaryCollaborators: [
                {
                    specialty: 'speech-therapy',
                    role: 'Respiratory retraining, laryngeal control techniques',
                    whenToInvolve: 'All confirmed VCD patients',
                    communicationFocus: ['Technique acquisition', 'Trigger management', 'Symptom control'],
                    handoffElements: ['Therapy progress', 'Home exercises', 'Rescue techniques']
                },
                {
                    specialty: 'ent',
                    role: 'Laryngoscopy, structural evaluation',
                    whenToInvolve: 'Diagnosis confirmation, structural abnormality concern',
                    communicationFocus: ['Laryngoscopy findings', 'VCD during symptoms', 'Structural issues'],
                    handoffElements: ['Scope video/images', 'Diagnosis confirmation', 'Structural issues']
                },
                {
                    specialty: 'pulmonology',
                    role: 'Differentiate from asthma, exercise testing',
                    whenToInvolve: 'Diagnostic uncertainty, concurrent asthma',
                    communicationFocus: ['PFTs', 'Exercise challenge', 'Asthma component'],
                    handoffElements: ['Spirometry', 'Challenge results', 'Treatment plan']
                }
            ],
            
            secondaryCollaborators: [
                {
                    specialty: 'psychology',
                    role: 'Anxiety/stress triggers, behavioral component',
                    whenToInvolve: 'Significant anxiety, stress-triggered VCD',
                    communicationFocus: ['Anxiety assessment', 'Stress management', 'Behavioral triggers'],
                    keyDocuments: ['Assessment', 'Treatment plan', 'Integration with speech therapy']
                },
                {
                    specialty: 'gastroenterology',
                    role: 'GERD evaluation (common trigger)',
                    whenToInvolve: 'GERD symptoms, laryngeal irritation',
                    communicationFocus: ['GERD workup', 'Treatment response', 'LPR consideration'],
                    keyDocuments: ['pH study if done', 'Treatment plan']
                }
            ],
            
            teamHuddleTopics: [
                'Has diagnosis been confirmed with laryngoscopy during symptoms?',
                'Is there coexistent asthma (common)?',
                'What are the triggers (exercise, irritants, stress)?',
                'Is patient engaged in speech therapy?',
                'Has GERD been addressed?',
                'Is anxiety/stress a major contributor?'
            ]
        }
    },

    // ============================================================================
    // SPECIALTY-BASED COLLABORATION REFERENCE
    // ============================================================================
    
    specialtyToAIConditions: {
        'gastroenterology': {
            conditions: ['eosinophilic-gi', 'food-allergy', 'immunodeficiency', 'mast-cell-disease'],
            commonConsults: ['EoE evaluation', 'FPIES workup', 'CVID enteropathy', 'GI mast cell infiltration'],
            communicationTemplate: 'gi-to-ai-consult'
        },
        'dermatology': {
            conditions: ['eczema', 'urticaria-angioedema', 'mast-cell-disease', 'drug-allergy'],
            commonConsults: ['Atopic dermatitis co-management', 'Urticarial vasculitis', 'Cutaneous mastocytosis', 'SJS/TEN/DRESS'],
            communicationTemplate: 'derm-to-ai-consult'
        },
        'pulmonology': {
            conditions: ['asthma', 'immunodeficiency', 'vcd'],
            commonConsults: ['Severe asthma phenotyping', 'Bronchiectasis in CVID', 'VCD vs asthma'],
            communicationTemplate: 'pulm-to-ai-consult'
        },
        'ent': {
            conditions: ['sinusitis', 'vcd', 'asthma'],
            commonConsults: ['CRS with polyps', 'Allergic fungal sinusitis', 'VCD diagnosis', 'AERD workup'],
            communicationTemplate: 'ent-to-ai-consult'
        },
        'hematology': {
            conditions: ['mast-cell-disease', 'immunodeficiency', 'eosinophilia'],
            commonConsults: ['Systemic mastocytosis', 'CVID complications', 'Hypereosinophilic syndrome'],
            communicationTemplate: 'heme-to-ai-consult'
        },
        'infectious-disease': {
            conditions: ['drug-allergy', 'immunodeficiency'],
            commonConsults: ['Penicillin allergy in endocarditis', 'Antibiotic alternatives', 'PID infection management'],
            communicationTemplate: 'id-to-ai-consult'
        },
        'rheumatology': {
            conditions: ['urticaria-angioedema', 'immunodeficiency', 'eosinophilia'],
            commonConsults: ['Complement-mediated angioedema', 'Autoimmune in CVID', 'EGPA workup'],
            communicationTemplate: 'rheum-to-ai-consult'
        },
        'emergency-medicine': {
            conditions: ['anaphylaxis', 'urticaria-angioedema', 'drug-allergy'],
            commonConsults: ['Post-anaphylaxis workup', 'Angioedema management', 'Acute drug reaction'],
            communicationTemplate: 'ed-to-ai-consult'
        },
        'pediatrics': {
            conditions: ['anaphylaxis', 'food-allergy', 'asthma', 'eczema'],
            commonConsults: ['Food allergy evaluation', 'Asthma management', 'Atopic march', 'Recurrent infections'],
            communicationTemplate: 'peds-to-ai-consult'
        },
        'internal-medicine': {
            conditions: ['anaphylaxis', 'drug-allergy', 'asthma', 'urticaria-angioedema', 'immunodeficiency'],
            commonConsults: ['Drug allergy evaluation', 'ACE-I angioedema', 'Adult-onset asthma', 'Recurrent infections'],
            communicationTemplate: 'im-to-ai-consult'
        },
        'oncology': {
            conditions: ['drug-allergy'],
            commonConsults: ['Chemotherapy desensitization', 'Biologic reactions', 'Carboplatin allergy'],
            communicationTemplate: 'onc-to-ai-consult'
        },
        'anesthesia': {
            conditions: ['drug-allergy', 'mast-cell-disease'],
            commonConsults: ['Perioperative anaphylaxis', 'NMBA allergy', 'Mastocytosis perioperative'],
            communicationTemplate: 'anes-to-ai-consult'
        },
        'speech-therapy': {
            conditions: ['food-allergy', 'eosinophilic-gi', 'vcd'],
            commonConsults: ['Feeding therapy for food allergy', 'EoE dysphagia', 'VCD respiratory retraining'],
            communicationTemplate: 'slp-to-ai-consult'
        },
        'occupational-therapy': {
            conditions: ['food-allergy', 'eosinophilic-gi'],
            commonConsults: ['Feeding therapy', 'Food reintroduction', 'Sensory food issues'],
            communicationTemplate: 'ot-to-ai-consult'
        },
        'respiratory-therapy': {
            conditions: ['asthma', 'anaphylaxis'],
            commonConsults: ['Inhaler technique', 'Asthma action plan', 'Acute bronchospasm management'],
            communicationTemplate: 'rt-to-ai-consult'
        },
        'pharmacy': {
            conditions: ['drug-allergy', 'asthma', 'immunodeficiency', 'anaphylaxis'],
            commonConsults: ['Drug cross-reactivity', 'Desensitization protocols', 'Biologic administration', 'EpiPen counseling'],
            communicationTemplate: 'pharmd-to-ai-consult'
        },
        'sleep-medicine': {
            conditions: ['asthma'],
            commonConsults: ['Nocturnal asthma vs OSA', 'CPAP in severe asthma'],
            communicationTemplate: 'sleep-to-ai-consult'
        },
        'psychology': {
            conditions: ['anaphylaxis', 'food-allergy', 'eczema', 'vcd'],
            commonConsults: ['Food allergy anxiety', 'Anaphylaxis PTSD', 'Itch-scratch behavior', 'VCD stress component'],
            communicationTemplate: 'psych-to-ai-consult'
        },
        'school-nursing': {
            conditions: ['anaphylaxis', 'food-allergy', 'asthma'],
            commonConsults: ['504 plan development', 'Action plan implementation', 'Emergency preparedness'],
            communicationTemplate: 'school-to-ai-consult'
        },
        'dietitian': {
            conditions: ['food-allergy', 'eosinophilic-gi', 'eczema'],
            commonConsults: ['Elimination diet guidance', 'Nutritional adequacy', 'Food reintroduction protocols'],
            communicationTemplate: 'rd-to-ai-consult'
        }
    },

    // ============================================================================
    // COMMUNICATION TEMPLATES
    // ============================================================================
    
    consultTemplates: {
        'ai-to-specialty': {
            structure: [
                'Patient identifier and demographics',
                'Primary A/I diagnosis',
                'Specific question/request',
                'Relevant history and workup',
                'Current management',
                'Urgency level'
            ],
            example: `Dear [Specialty] Colleague,

I am referring [Patient Name] for evaluation of [specific issue].

PRIMARY A/I DIAGNOSIS: [Diagnosis]

REASON FOR REFERRAL: [Specific question]

RELEVANT HISTORY: [Key points]

CURRENT MANAGEMENT: [Treatments]

SPECIFIC QUESTIONS:
1. [Question 1]
2. [Question 2]

Please contact me at [number] if you have questions.

Thank you,
[A/I Provider]`
        },
        
        'specialty-to-ai': {
            structure: [
                'Patient identifier',
                'Reason for allergy/immunology consult',
                'Clinical scenario/reaction details',
                'Urgency (emergent/urgent/routine)',
                'Specific questions'
            ],
            example: `ALLERGY/IMMUNOLOGY CONSULT REQUEST

PATIENT: [Name, DOB, MRN]
SERVICE: [Requesting service]
URGENCY: [Emergent/Urgent/Routine]

CONSULT QUESTION: [Primary question]

CLINICAL SCENARIO:
[Description of reaction/issue]

RELEVANT HISTORY:
- Allergies listed: [List]
- Prior reactions: [Details]
- Current medications: [List]

SPECIFIC QUESTIONS:
1. [Question 1]
2. [Question 2]

CONTACT: [Provider name, pager/phone]`
        },
        
        'huddle-format': {
            structure: [
                'Patient identifier (one sentence)',
                'Primary issue being discussed',
                'Input needed from each specialty',
                'Decision points',
                'Action items with owners'
            ],
            duration: '2-3 minutes per patient'
        }
    },

    // ============================================================================
    // QUALITY METRICS FOR COLLABORATION
    // ============================================================================
    
    collaborationMetrics: {
        'anaphylaxis': [
            { metric: 'EpiPen prescribed', target: '100%', owner: 'AI/ED/PCP' },
            { metric: 'Action plan provided', target: '100%', owner: 'AI/Nursing' },
            { metric: 'Allergy referral placed', target: '100%', owner: 'ED/PCP' },
            { metric: '504 plan for students', target: '100%', owner: 'School Nurse/AI' }
        ],
        'asthma': [
            { metric: 'Inhaler technique assessed', target: '100%', owner: 'RT/AI/Nursing' },
            { metric: 'Action plan provided', target: '100%', owner: 'AI/PCP' },
            { metric: 'Trigger assessment done', target: '100%', owner: 'AI' },
            { metric: 'VCD ruled out if refractory', target: '>90%', owner: 'AI/Pulm/SLP' }
        ],
        'drug-allergy': [
            { metric: 'Reaction clearly documented', target: '100%', owner: 'All' },
            { metric: 'Appropriate testing done', target: '>90%', owner: 'AI' },
            { metric: 'Allergy list updated', target: '100%', owner: 'AI/Pharmacy' },
            { metric: 'Safe alternatives identified', target: '100%', owner: 'AI/Pharmacy' }
        ]
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = INTERPROFESSIONAL_COLLABORATION;
}
