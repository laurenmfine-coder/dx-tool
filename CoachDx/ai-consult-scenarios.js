/**
 * Bidirectional A/I Consult SBAR Scenarios
 * Practice both requesting AND receiving A/I consultations
 */

const AI_COMedical SchoolLT_SCENARIOS = {

    // ============================================================================
    // COMedical SchoolLTS TO ALLERGY/IMMUNOLOGY (Other specialties calling A/I)
    // ============================================================================
    
    consultsToAI: {
        
        'id-penicillin-endocarditis': {
            id: 'id-penicillin-endocarditis',
            title: 'ID → A/I: Penicillin Allergy in Endocarditis',
            urgency: 'urgent',
            consultingService: 'Infectious Disease',
            consultingRole: 'ID Fellow',
            
            scenario: {
                patient: {
                    name: 'Robert Chen',
                    age: 58,
                    sex: 'M',
                    location: '6 South, Room 612',
                    diagnosis: 'MSSA Endocarditis'
                },
                clinicalContext: 'Patient with MSSA endocarditis on day 5 of vancomycin. Not clearing bacteremia. Would strongly prefer nafcillin but patient has documented "penicillin allergy" - chart says childhood rash 30 years ago.',
                specificQuestion: 'Can this patient be safely tested and potentially delabeled to receive nafcillin?',
                relevantHistory: [
                    'Penicillin allergy documented since childhood',
                    'Described as "rash" - no further details',
                    'No subsequent beta-lactam exposures',
                    'Currently tolerating vancomycin without issue',
                    'Persistent MSSA bacteremia despite 5 days treatment'
                ],
                urgencyRationale: 'Patient not responding optimally to vancomycin. Nafcillin has better outcomes for MSSA endocarditis.'
            },
            
            expectedSBAR: {
                situation: [
                    'Requesting A/I consult for penicillin allergy evaluation',
                    'Patient with MSSA endocarditis not clearing on vancomycin',
                    'Need to determine if nafcillin can be used safely'
                ],
                background: [
                    'History of "penicillin allergy" documented 30 years ago',
                    'Described as childhood rash - no anaphylaxis features',
                    'No details available about severity or treatment',
                    'No subsequent penicillin exposures',
                    'Currently day 5 of vancomycin, persistent bacteremia'
                ],
                assessment: [
                    'Low-risk penicillin allergy history by description',
                    'Clinical need for optimal MSSA coverage',
                    'Patient stable for testing if appropriate'
                ],
                recommendation: [
                    'Evaluate for penicillin skin testing',
                    'Consider direct challenge if appropriate',
                    'Need answer within 24-48 hours given clinical situation',
                    'If positive, need alternative recommendations'
                ]
            },
            
            aiResponseGuidance: {
                keyQuestions: [
                    'Exact timeline of original reaction?',
                    'Symptoms beyond rash (swelling, breathing, hypotension)?',
                    'Any beta-lactam use since?',
                    'Any cephalosporin tolerance?'
                ],
                likelyPlan: 'Given remote, vague rash history - likely candidate for penicillin skin testing followed by oral challenge. If negative, nafcillin can be used.',
                penFastScore: 'Likely PEN-FAST 0-1 (low risk)'
            }
        },
        
        'ed-angioedema-ace': {
            id: 'ed-angioedema-ace',
            title: 'ED → A/I: ACE-I Angioedema',
            urgency: 'urgent',
            consultingService: 'Emergency Medicine',
            consultingRole: 'ED Resident',
            
            scenario: {
                patient: {
                    name: 'James Wilson',
                    age: 62,
                    sex: 'M',
                    location: 'ED Bay 4',
                    diagnosis: 'Angioedema - ?ACE-I related'
                },
                clinicalContext: 'Patient presents with tongue and lip swelling x4 hours. On lisinopril x3 years. No urticaria. Received epinephrine, diphenhydramine, methylprednisolone with minimal improvement. Airway currently stable.',
                specificQuestion: 'Is this ACE-I angioedema? What additional treatment? Safe to discharge?',
                relevantHistory: [
                    'Lisinopril 10mg daily x 3 years',
                    'No prior angioedema episodes',
                    'No known allergies',
                    'HTN, DM2',
                    'No urticaria with current episode'
                ],
                urgencyRationale: 'Airway involvement, incomplete response to standard treatment.'
            },
            
            expectedSBAR: {
                situation: [
                    'A/I consult for angioedema management',
                    'Patient with tongue/lip swelling on ACE-I',
                    'Not responding to antihistamines/steroids'
                ],
                background: [
                    'On lisinopril 3 years, no prior angioedema',
                    'No urticaria present (isolated angioedema)',
                    'Received epi, Benadryl, Solu-Medrol',
                    'Minimal improvement over 2 hours'
                ],
                assessment: [
                    'Likely bradykinin-mediated (ACE-I) angioedema',
                    'Absence of urticaria supports bradykinin mechanism',
                    'Poor response to antihistamines consistent with non-histamine pathway',
                    'Airway stable but need close monitoring'
                ],
                recommendation: [
                    'Confirm this is ACE-I angioedema vs other causes',
                    'Additional treatment options?',
                    'Observation duration needed?',
                    'Long-term management plan'
                ]
            },
            
            aiResponseGuidance: {
                keyTeaching: 'Angioedema WITHOUT urticaria = think bradykinin (ACE-I, HAE), not histamine',
                recommendedActions: [
                    'Discontinue ACE-I permanently',
                    'Consider icatibant (Firazyr) if available for severe cases',
                    'FFP can help if bradykinin-mediated and severe',
                    'Observation 6-8+ hours - can worsen',
                    'ARB cross-reactivity ~10% - discuss risks'
                ],
                haWorkup: 'If recurrent or family history, check C4, C1-INH level and function'
            }
        },
        
        'peds-recurrent-infections': {
            id: 'peds-recurrent-infections',
            title: 'Pediatrics → A/I: Recurrent Infections',
            urgency: 'routine',
            consultingService: 'Pediatrics',
            consultingRole: 'Pediatric Resident',
            
            scenario: {
                patient: {
                    name: 'Sophia Martinez',
                    age: 4,
                    sex: 'F',
                    location: 'Pediatric Clinic',
                    diagnosis: 'Recurrent sinopulmonary infections'
                },
                clinicalContext: 'Child with 6 episodes of sinusitis and 2 pneumonias in past 18 months. Normal growth. No unusual organisms. Parents concerned about "weak immune system."',
                specificQuestion: 'Does this child need immunodeficiency workup?',
                relevantHistory: [
                    '6 sinus infections, 2 pneumonias in 18 months',
                    'All responded to antibiotics',
                    'No hospitalizations',
                    'In daycare since age 2',
                    'Normal growth and development',
                    'No family history of immunodeficiency',
                    'No unusual organisms'
                ],
                urgencyRationale: 'Routine - child is well between infections, parents seeking reassurance and evaluation.'
            },
            
            expectedSBAR: {
                situation: [
                    'Requesting A/I evaluation for recurrent infections',
                    '4yo with multiple sinopulmonary infections',
                    'Parents concerned about immunodeficiency'
                ],
                background: [
                    '6 sinusitis, 2 pneumonias over 18 months',
                    'Started daycare at age 2',
                    'All infections responded to antibiotics',
                    'Normal growth, development, no hospitalizations',
                    'No unusual organisms or sites'
                ],
                assessment: [
                    'Frequency at upper limit of normal for daycare-age child',
                    'No red flags for immunodeficiency (normal growth, responds to treatment)',
                    'Daycare exposure likely contributing'
                ],
                recommendation: [
                    'Evaluate need for immunodeficiency workup',
                    'Provide guidance on expected infection frequency',
                    'Identify any red flags that warrant testing'
                ]
            },
            
            aiResponseGuidance: {
                normalRange: '6-8 URIs/year normal for daycare-age children',
                redFlags: [
                    '≥2 serious bacterial infections (sepsis, meningitis)',
                    '≥4 ear infections in 1 year',
                    '≥2 pneumonias in 1 year',
                    'Failure to thrive',
                    'Infections with unusual organisms',
                    'Need for IV antibiotics'
                ],
                likelyPlan: 'This child is borderline. Consider screening labs (CBC, IgG/A/M) but likely normal given good response to treatment and normal growth.'
            }
        },
        
        'onc-carboplatin-reaction': {
            id: 'onc-carboplatin-reaction',
            title: 'Oncology → A/I: Carboplatin Desensitization',
            urgency: 'urgent',
            consultingService: 'Oncology',
            consultingRole: 'Oncology Fellow',
            
            scenario: {
                patient: {
                    name: 'Patricia Adams',
                    age: 58,
                    sex: 'F',
                    location: 'Infusion Center',
                    diagnosis: 'Ovarian Cancer - Carboplatin hypersensitivity'
                },
                clinicalContext: 'Patient on 8th cycle of carboplatin for ovarian cancer. Today developed flushing, chest tightness, and hypotension 20 minutes into infusion. Required epinephrine. Tumor responding well to carboplatin - oncology wants to continue.',
                specificQuestion: 'Can we desensitize to continue carboplatin?',
                relevantHistory: [
                    'Ovarian cancer stage IIIC',
                    'Cycle 8 of carboplatin/paclitaxel',
                    'Excellent tumor response',
                    'Today: flushing, chest tightness, BP 80/50',
                    'Required epinephrine, resolved',
                    'No prior reactions to carboplatin',
                    'Tolerated cycles 1-7 without issue'
                ],
                urgencyRationale: 'Need to determine if patient can continue carboplatin - affects cancer treatment plan.'
            },
            
            expectedSBAR: {
                situation: [
                    'A/I consult for carboplatin hypersensitivity reaction',
                    'Ovarian cancer patient with good tumor response',
                    'Oncology wants to continue carboplatin if possible'
                ],
                background: [
                    'Cycle 8 of carboplatin - tolerated cycles 1-7',
                    'Today: flushing, chest tightness, hypotension',
                    'Required epinephrine, full recovery',
                    'Excellent oncologic response to regimen'
                ],
                assessment: [
                    'Likely IgE-mediated hypersensitivity (timing, symptoms)',
                    'Risk will increase with each subsequent exposure',
                    'Desensitization may allow continued treatment'
                ],
                recommendation: [
                    'Can this patient be desensitized?',
                    'What is the protocol?',
                    'Success rate expected?',
                    'Risks vs benefits'
                ]
            },
            
            aiResponseGuidance: {
                desensitizationCandidacy: 'Yes - patient with IgE-mediated reaction who needs the drug and has no safe alternative',
                protocol: '12-step desensitization protocol in ICU/monitored setting',
                successRate: '>90% can complete infusion with desensitization',
                considerations: 'Desensitization needed for EACH subsequent dose'
            }
        },
        
        'gi-eoe-consult': {
            id: 'gi-eoe-consult',
            title: 'GI → A/I: EoE Food Allergy Guidance',
            urgency: 'routine',
            consultingService: 'Gastroenterology',
            consultingRole: 'GI Fellow',
            
            scenario: {
                patient: {
                    name: 'Jake Thompson',
                    age: 12,
                    sex: 'M',
                    location: 'GI Clinic',
                    diagnosis: 'Eosinophilic Esophagitis'
                },
                clinicalContext: 'Newly diagnosed EoE (75 eos/hpf). Failed PPI trial. Planning elimination diet but need guidance on which foods to eliminate. Has history of eczema and environmental allergies.',
                specificQuestion: 'Should we do allergy testing to guide elimination diet, or use empiric elimination?',
                relevantHistory: [
                    'Dysphagia and food impaction x 2 years',
                    'EGD: linear furrows, ≥75 eos/hpf',
                    'PPI x 8 weeks - no improvement',
                    'History of eczema (controlled)',
                    'Known environmental allergies (dust mites, cats)',
                    'No known food allergies'
                ],
                urgencyRationale: 'Routine - need to coordinate approach before starting elimination diet.'
            },
            
            expectedSBAR: {
                situation: [
                    'A/I consult for EoE dietary management guidance',
                    'Newly diagnosed EoE, failed PPI',
                    'Need direction on elimination approach'
                ],
                background: [
                    'Age 12, dysphagia and food impaction',
                    'EGD confirmed EoE (75 eos/hpf)',
                    'PPI non-responder',
                    'Atopic history (eczema, environmental allergies)',
                    'No known food allergies'
                ],
                assessment: [
                    'EoE confirmed, dietary therapy indicated',
                    'Atopic background may increase likelihood of food triggers',
                    'Options: allergy testing-directed vs empiric elimination'
                ],
                recommendation: [
                    'Allergy testing to guide diet, or empiric 6-food elimination?',
                    'Which foods should we prioritize?',
                    'How should we reintroduce?',
                    'Shared management going forward?'
                ]
            },
            
            aiResponseGuidance: {
                testingRole: 'Allergy testing has limited PPV for EoE but can help prioritize eliminations',
                approach: 'Consider testing-directed elimination first (less restrictive), advance to empiric if fails',
                commonTriggers: 'Milk (most common), wheat, egg, soy in children',
                reintroduction: 'Single food every 6-8 weeks with EGD to assess'
            }
        }
    },
    
    // ============================================================================
    // COMedical SchoolLTS FROM ALLERGY/IMMUNOLOGY (A/I calling other specialties)
    // ============================================================================
    
    consultsFromAI: {
        
        'ai-to-gi-eoe': {
            id: 'ai-to-gi-eoe',
            title: 'A/I → GI: Suspected EoE Referral',
            urgency: 'routine',
            receivingService: 'Gastroenterology',
            
            scenario: {
                patient: {
                    name: 'Brandon Lee',
                    age: 14,
                    sex: 'M',
                    location: 'A/I Clinic',
                    diagnosis: 'Food allergies, suspected EoE'
                },
                clinicalContext: 'Adolescent with multiple IgE-mediated food allergies presenting with new dysphagia and "food getting stuck." Describes having to drink water to get food down. You suspect EoE.',
                specificQuestion: 'Requesting EGD to evaluate for EoE',
                relevantHistory: [
                    'Known allergies: peanut, tree nuts, egg',
                    'History of eczema and allergic rhinitis',
                    'New onset dysphagia x 6 months',
                    'Chews food thoroughly, avoids certain textures',
                    'One episode of food impaction (resolved spontaneously)'
                ]
            },
            
            expectedSBAR: {
                situation: [
                    'Requesting GI evaluation for suspected EoE',
                    'Adolescent with food allergies and new dysphagia',
                    'Need EGD with biopsies'
                ],
                background: [
                    'Multiple IgE-mediated food allergies',
                    'Atopic (eczema, rhinitis, food allergy)',
                    '6 months progressive dysphagia',
                    'One food impaction episode',
                    'Currently avoids certain textures'
                ],
                assessment: [
                    'High suspicion for EoE given atopic background',
                    'Classic symptoms (dysphagia, impaction)',
                    'Multiple risk factors present'
                ],
                recommendation: [
                    'EGD with esophageal biopsies (proximal and distal)',
                    'Coordinate timing - may need to continue PPI vs off PPI',
                    'Will help guide dietary approach from A/I side',
                    'Plan for co-management once diagnosed'
                ]
            }
        },
        
        'ai-to-ent-polyps': {
            id: 'ai-to-ent-polyps',
            title: 'A/I → ENT: CRS with Nasal Polyps',
            urgency: 'routine',
            receivingService: 'ENT',
            
            scenario: {
                patient: {
                    name: 'Maria Santos',
                    age: 38,
                    sex: 'F',
                    location: 'A/I Clinic',
                    diagnosis: 'Severe asthma, CRS with nasal polyps, ?AERD'
                },
                clinicalContext: 'Patient with severe eosinophilic asthma being considered for dupilumab. Also has chronic sinusitis with polyps and reports worsening with ibuprofen. Need ENT assessment for surgical candidacy and AERD confirmation.',
                specificQuestion: 'Evaluate CRS with polyps, surgical candidacy, AERD confirmation',
                relevantHistory: [
                    'Severe persistent asthma (on high-dose ICS/LABA)',
                    'Eosinophilia (blood eos 650)',
                    'Chronic nasal congestion, anosmia',
                    'Reports facial pressure and post-nasal drip',
                    'Avoids NSAIDs - "makes breathing worse"',
                    'No prior sinus surgery'
                ]
            },
            
            expectedSBAR: {
                situation: [
                    'Requesting ENT evaluation for CRS with polyps',
                    'Considering dupilumab for asthma - need polyp assessment',
                    'Also evaluate for AERD'
                ],
                background: [
                    'Severe eosinophilic asthma on maximal inhaled therapy',
                    'Chronic sinusitis symptoms with anosmia',
                    'Reports NSAID-exacerbated respiratory symptoms',
                    'No prior sinus surgery',
                    'Considering biologic therapy'
                ],
                assessment: [
                    'Likely CRSwNP given symptoms and asthma phenotype',
                    'Possible AERD (asthma + polyps + NSAID sensitivity)',
                    'Will affect biologic selection (dupilumab helps both)',
                    'May need coordinated surgical + medical approach'
                ],
                recommendation: [
                    'Nasal endoscopy to assess polyp burden',
                    'CT sinuses if not recent',
                    'Input on surgical vs medical management sequence',
                    'AERD confirmation if possible',
                    'Coordinate biologic timing if surgery planned'
                ]
            }
        },
        
        'ai-to-speech-vcd': {
            id: 'ai-to-speech-vcd',
            title: 'A/I → Speech Therapy: VCD Treatment',
            urgency: 'routine',
            receivingService: 'Speech-Language Pathology',
            
            scenario: {
                patient: {
                    name: 'Emma Davis',
                    age: 16,
                    sex: 'F',
                    location: 'A/I Clinic',
                    diagnosis: 'Vocal Cord Dysfunction'
                },
                clinicalContext: 'Teen athlete diagnosed with VCD after workup for "exercise-induced asthma" not responding to inhalers. Laryngoscopy confirmed paradoxical vocal cord movement. Needs respiratory retraining.',
                specificQuestion: 'Initiate speech therapy for VCD/ILO',
                relevantHistory: [
                    'Competitive swimmer',
                    'Episodes of throat tightness and stridor with exercise',
                    'Not responding to albuterol',
                    'Laryngoscopy during symptoms: paradoxical VCD',
                    'Some anxiety around competition',
                    'Spirometry normal at baseline'
                ]
            },
            
            expectedSBAR: {
                situation: [
                    'Referring for speech therapy for confirmed VCD',
                    'Teen athlete with exercise-induced laryngeal obstruction',
                    'Needs breathing retraining techniques'
                ],
                background: [
                    'Competitive swimmer with throat tightness during exercise',
                    'Laryngoscopy confirmed paradoxical VCD',
                    'Not responding to asthma medications',
                    'Some performance anxiety component',
                    'Normal spirometry between episodes'
                ],
                assessment: [
                    'Confirmed VCD by laryngoscopy',
                    'Exercise is primary trigger',
                    'Anxiety may be contributing factor',
                    'No concurrent asthma identified'
                ],
                recommendation: [
                    'Respiratory retraining for VCD',
                    'Teach rescue breathing techniques',
                    'Exercise-specific strategies',
                    'Coordinate with psychology if indicated',
                    'Goal: return to competitive swimming'
                ]
            }
        },
        
        'ai-to-heme-tryptase': {
            id: 'ai-to-heme-tryptase',
            title: 'A/I → Hematology: Elevated Tryptase',
            urgency: 'routine',
            receivingService: 'Hematology',
            
            scenario: {
                patient: {
                    name: 'Richard Palmer',
                    age: 58,
                    sex: 'M',
                    location: 'A/I Clinic',
                    diagnosis: 'Venom anaphylaxis, elevated tryptase'
                },
                clinicalContext: 'Man with recurrent severe anaphylaxis to yellow jacket stings. Baseline tryptase found to be 18.5 ng/mL (elevated). Need evaluation for systemic mastocytosis before starting venom immunotherapy.',
                specificQuestion: 'Evaluate for systemic mastocytosis',
                relevantHistory: [
                    'Two episodes of severe anaphylaxis to yellow jacket stings',
                    'Required epinephrine and ED visits',
                    'Positive venom skin testing',
                    'Baseline tryptase 18.5 ng/mL (normal <11.4)',
                    'No skin lesions',
                    'No GI symptoms or bone pain',
                    'Planned for venom immunotherapy'
                ]
            },
            
            expectedSBAR: {
                situation: [
                    'Requesting hematology evaluation for possible mastocytosis',
                    'Patient with severe venom anaphylaxis and elevated baseline tryptase',
                    'Need to evaluate before starting VIT'
                ],
                background: [
                    'Recurrent severe anaphylaxis to yellow jacket stings',
                    'Baseline tryptase elevated at 18.5',
                    'No cutaneous mastocytosis signs',
                    'No systemic symptoms (bone pain, GI)',
                    'Planned for venom immunotherapy'
                ],
                assessment: [
                    'Elevated baseline tryptase raises concern for clonal mast cell disease',
                    'Mastocytosis increases risk of severe reactions',
                    'Would impact VIT duration (lifelong if mastocytosis)',
                    'Need bone marrow for definitive diagnosis'
                ],
                recommendation: [
                    'Bone marrow biopsy with mast cell stains and flow',
                    'KIT D816V mutation testing',
                    'Will proceed with VIT regardless, but duration depends on results',
                    'If mastocytosis confirmed, will coordinate long-term management'
                ]
            }
        }
    },

    // ============================================================================
    // SBAR TEMPLATES FOR COMedical SchoolLTS
    // ============================================================================
    
    templates: {
        consultToAI: `ALLERGY/IMMUNOLOGY COMedical SchoolLTATION REQUEST

DATE/TIME: [Current]
URGENCY: [ ] Emergent  [ ] Urgent  [ ] Routine

PATIENT: [Name], [Age] [Sex]
MRN: [MRN]
LOCATION: [Unit/Room]

REQUESTING SERVICE: [Service]
REQUESTING PROVIDER: [Name, Pager]

REASON FOR COMedical SchoolLTATION:
[Primary question/concern]

SITUATION:
• [Brief statement of why consult needed now]

BACKGROUND:
• Pertinent history: [Key history]
• Relevant allergies listed: [Current allergy list]
• Description of reaction(s): [Details]
• Current medications: [Relevant meds]

ASSESSMENT:
• Current clinical status: [Status]
• My concern/impression: [Your assessment]

RECOMMENDATION/QUESTION:
• Specific questions: 
  1. [Question 1]
  2. [Question 2]
• Urgency rationale: [Why this timeline]

CONTACT: [Your name, pager/phone]`,

        consultFromAI: `[SPECIALTY] COMedical SchoolLTATION REQUEST

DATE/TIME: [Current]
URGENCY: [ ] Emergent  [ ] Urgent  [ ] Routine

PATIENT: [Name], [Age] [Sex]
MRN: [MRN]
LOCATION: [Unit/Room]

FROM: Allergy/Immunology
PROVIDER: [Name, Contact]

REASON FOR COMedical SchoolLTATION:
[Primary question]

RELEVANT A/I DIAGNOSES:
• [Diagnosis 1]
• [Diagnosis 2]

SITUATION:
• [Why referring now]

BACKGROUND:
• A/I history: [Relevant history]
• Testing results: [Pertinent results]
• Current management: [Treatments]

ASSESSMENT:
• A/I impression: [Your assessment]
• Why specialty input needed: [Rationale]

SPECIFIC QUESTIONS:
1. [Question 1]
2. [Question 2]

COORDINATION PLAN:
• [How you'll work together]

CONTACT: [Name, pager/phone]`
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AI_COMedical SchoolLT_SCENARIOS;
}
