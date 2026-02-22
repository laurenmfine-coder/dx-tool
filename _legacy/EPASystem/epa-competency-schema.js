// ============================================================================
// DXSUITE EPA & COMPETENCY TAGGING SYSTEM
// Foundational Competencies for UME (2024) - MD and DO Compatible
// ============================================================================

const EPACompetencySchema = {
    
    // =========================================================================
    // EPA DEFINITIONS (13 Core EPAs)
    // =========================================================================
    epas: {
        EPA1: {
            id: 'EPA1',
            title: 'Gather a History and Perform a Physical Examination',
            shortName: 'History & Physical',
            description: 'Gather essential and accurate information about patients and their conditions through history-taking, physical examination, and the use of laboratory data, imaging, and other tests.',
            keyFunctions: [
                'Perform patient-centered interview',
                'Gather relevant history using multiple data sources',
                'Perform appropriate physical examination',
                'Recognize patient acuity',
                'Identify pertinent positives and negatives'
            ],
            entrustmentCriteria: {
                '1b': 'Observe faculty/resident performing H&P',
                '2a': 'Perform H&P with direct supervision checking each step',
                '2b': 'Perform H&P with supervisor in room/nearby',
                '3a': 'Perform H&P independently; supervisor reviews all findings',
                '3b': 'Perform H&P independently; supervisor spot-checks key findings'
            },
            dxsuiteModules: ['ReasonDx', 'CoachDx'],
            relatedCompetencies: ['PC2', 'PC3', 'ICS1', 'ICS3']
        },
        EPA2: {
            id: 'EPA2',
            title: 'Prioritize a Differential Diagnosis Following a Clinical Encounter',
            shortName: 'Differential Diagnosis',
            description: 'Given a patient encounter, create a prioritized differential diagnosis that includes most likely and must-not-miss diagnoses.',
            keyFunctions: [
                'Synthesize essential information to define problem representation',
                'Develop problem-specific differential diagnosis',
                'Prioritize by likelihood and severity',
                'Consider patient-specific factors',
                'Avoid anchoring and premature closure'
            ],
            entrustmentCriteria: {
                '1b': 'Observe clinical reasoning process',
                '2a': 'Create differential with step-by-step guidance',
                '2b': 'Create differential with supervisor ready to assist',
                '3a': 'Create differential independently; supervisor reviews entire list',
                '3b': 'Create differential independently; supervisor reviews key diagnoses'
            },
            dxsuiteModules: ['ReasonDx', 'CoachDx', 'MechanismDx'],
            relatedCompetencies: ['PC5', 'MK2', 'PBLI4']
        },
        EPA3: {
            id: 'EPA3',
            title: 'Recommend and Interpret Common Diagnostic and Screening Tests',
            shortName: 'Diagnostic Tests',
            description: 'Recommend appropriate diagnostic tests using evidence-based medicine and interpret results in clinical context.',
            keyFunctions: [
                'Apply principles of diagnostic testing (sensitivity, specificity)',
                'Select cost-effective tests',
                'Interpret results in clinical context',
                'Recognize critical values',
                'Communicate results appropriately'
            ],
            entrustmentCriteria: {
                '1b': 'Observe test ordering and interpretation',
                '2a': 'Recommend tests with guidance on rationale',
                '2b': 'Recommend tests; supervisor verifies appropriateness',
                '3a': 'Order and interpret independently; full review',
                '3b': 'Order and interpret independently; spot-check critical findings'
            },
            dxsuiteModules: ['ReasonDx', 'MechanismDx'],
            relatedCompetencies: ['PC6', 'MK2', 'MK4', 'PBLI4']
        },
        EPA4: {
            id: 'EPA4',
            title: 'Enter and Discuss Orders and Prescriptions',
            shortName: 'Orders & Prescriptions',
            description: 'Enter orders and prescriptions that are safe, timely, and appropriate.',
            keyFunctions: [
                'Apply pharmacological principles',
                'Consider patient-specific factors (allergies, interactions)',
                'Use clinical decision support appropriately',
                'Communicate orders to team',
                'Monitor for adverse effects'
            ],
            entrustmentCriteria: {
                '1b': 'Observe order entry process',
                '2a': 'Enter orders with direct verification',
                '2b': 'Enter orders; supervisor reviews before submission',
                '3a': 'Enter orders independently; full cosignature review',
                '3b': 'Enter orders independently; supervisor reviews select orders'
            },
            dxsuiteModules: ['ReasonDx'],
            relatedCompetencies: ['PC7', 'MK2', 'SBP5', 'SBP6']
        },
        EPA5: {
            id: 'EPA5',
            title: 'Document a Clinical Encounter in the Patient Record',
            shortName: 'Documentation',
            description: 'Document clinical encounters accurately, comprehensively, and in a timely manner.',
            keyFunctions: [
                'Create accurate, organized notes',
                'Document clinical reasoning',
                'Meet billing and legal requirements',
                'Use appropriate medical terminology',
                'Balance completeness with efficiency'
            ],
            entrustmentCriteria: {
                '1b': 'Review faculty documentation',
                '2a': 'Draft notes with significant editing',
                '2b': 'Draft notes; supervisor reviews and provides feedback',
                '3a': 'Write notes independently; full review',
                '3b': 'Write notes independently; supervisor reviews key elements'
            },
            dxsuiteModules: ['CoachDx'],
            relatedCompetencies: ['ICS4', 'Prof10', 'SBP6']
        },
        EPA6: {
            id: 'EPA6',
            title: 'Provide an Oral Presentation of a Clinical Encounter',
            shortName: 'Oral Presentation',
            description: 'Organize and deliver a clear, concise oral presentation of a patient encounter.',
            keyFunctions: [
                'Organize information logically',
                'Adapt to audience and setting',
                'Highlight key clinical features',
                'Present clinical reasoning',
                'Accept and integrate feedback'
            ],
            entrustmentCriteria: {
                '1b': 'Observe oral presentations',
                '2a': 'Present with significant prompting',
                '2b': 'Present with minimal prompting',
                '3a': 'Present independently; feedback provided after',
                '3b': 'Present independently; minimal feedback needed'
            },
            dxsuiteModules: ['CoachDx'],
            relatedCompetencies: ['ICS4', 'ICS5', 'PBLI1']
        },
        EPA7: {
            id: 'EPA7',
            title: 'Form Clinical Questions and Retrieve Evidence',
            shortName: 'Clinical Questions & Evidence',
            description: 'Identify clinical questions and retrieve evidence to advance patient care.',
            keyFunctions: [
                'Recognize knowledge gaps',
                'Formulate answerable clinical questions (PICO)',
                'Search appropriate resources efficiently',
                'Critically appraise evidence',
                'Apply evidence to patient care'
            ],
            entrustmentCriteria: {
                '1b': 'Observe evidence retrieval process',
                '2a': 'Search with guidance on resources and strategy',
                '2b': 'Search independently; supervisor checks sources',
                '3a': 'Search and appraise independently; supervisor reviews conclusions',
                '3b': 'Search and apply independently; supervisor spot-checks'
            },
            dxsuiteModules: ['MechanismDx', 'ReasonDx'],
            relatedCompetencies: ['MK3', 'MK4', 'MK5', 'PBLI4', 'PBLI5']
        },
        EPA8: {
            id: 'EPA8',
            title: 'Give or Receive a Patient Handover',
            shortName: 'Patient Handover',
            description: 'Communicate effectively to ensure safe transitions of care.',
            keyFunctions: [
                'Use structured handover format (I-PASS, SBAR)',
                'Identify critical information',
                'Anticipate potential problems',
                'Verify understanding',
                'Document handover when appropriate'
            ],
            entrustmentCriteria: {
                '1b': 'Observe handover communications',
                '2a': 'Participate with significant guidance',
                '2b': 'Perform handover with supervisor present',
                '3a': 'Perform independently; supervisor receives handover summary',
                '3b': 'Perform independently; occasional spot-checks'
            },
            dxsuiteModules: ['TeamDx', 'CoachDx'],
            relatedCompetencies: ['ICS2', 'ICS4', 'SBP4', 'Prof10']
        },
        EPA9: {
            id: 'EPA9',
            title: 'Collaborate as a Member of an Interprofessional Team',
            shortName: 'Interprofessional Collaboration',
            description: 'Work effectively within interprofessional teams to provide safe, high-quality care.',
            keyFunctions: [
                'Understand team roles and responsibilities',
                'Communicate respectfully with all team members',
                'Share information appropriately',
                'Resolve conflicts constructively',
                'Contribute to team function'
            ],
            entrustmentCriteria: {
                '1b': 'Observe team interactions',
                '2a': 'Participate with prompting on role and contributions',
                '2b': 'Participate with occasional guidance',
                '3a': 'Collaborate independently; supervisor monitors interactions',
                '3b': 'Collaborate independently; minimal oversight'
            },
            dxsuiteModules: ['TeamDx', 'CoachDx'],
            relatedCompetencies: ['ICS1', 'ICS2', 'ICS6', 'Prof1', 'Prof8']
        },
        EPA10: {
            id: 'EPA10',
            title: 'Recognize a Patient Requiring Urgent or Emergent Care',
            shortName: 'Urgent/Emergent Care',
            description: 'Recognize patients requiring urgent or emergent care, initiate evaluation and management, and seek help.',
            keyFunctions: [
                'Identify unstable patients rapidly',
                'Initiate appropriate stabilization',
                'Activate emergency response when needed',
                'Communicate urgency effectively',
                'Stay calm under pressure'
            ],
            entrustmentCriteria: {
                '1b': 'Observe emergency responses',
                '2a': 'Recognize urgency with prompting; assist with management',
                '2b': 'Recognize urgency; initiate management with backup',
                '3a': 'Recognize and initiate independently; supervisor available',
                '3b': 'Recognize and initiate independently; supervisor arrives for complex cases'
            },
            dxsuiteModules: ['ReasonDx', 'MechanismDx'],
            relatedCompetencies: ['PC4', 'MK2', 'ICS4', 'SBP3']
        },
        EPA11: {
            id: 'EPA11',
            title: 'Obtain Informed Consent for Tests and/or Procedures',
            shortName: 'Informed Consent',
            description: 'Engage patients in shared decision-making and obtain informed consent.',
            keyFunctions: [
                'Explain procedures clearly',
                'Discuss risks, benefits, alternatives',
                'Assess patient understanding',
                'Respect patient autonomy',
                'Document consent appropriately'
            ],
            entrustmentCriteria: {
                '1b': 'Observe consent conversations',
                '2a': 'Obtain consent with supervisor present throughout',
                '2b': 'Obtain consent; supervisor available for questions',
                '3a': 'Obtain consent independently; supervisor confirms',
                '3b': 'Obtain consent independently; supervisor spot-checks'
            },
            dxsuiteModules: ['ConsentDx'],
            relatedCompetencies: ['Prof2', 'Prof3', 'PC8', 'ICS1', 'ICS5']
        },
        EPA12: {
            id: 'EPA12',
            title: 'Perform General Procedures of a Physician',
            shortName: 'General Procedures',
            description: 'Perform common procedures safely and effectively.',
            keyFunctions: [
                'Demonstrate proper technique',
                'Maintain sterile field when required',
                'Recognize complications',
                'Document procedures appropriately',
                'Seek help when needed'
            ],
            entrustmentCriteria: {
                '1b': 'Observe procedures',
                '2a': 'Perform with hands-on guidance',
                '2b': 'Perform with supervisor ready to intervene',
                '3a': 'Perform independently; supervisor present in room',
                '3b': 'Perform independently; supervisor available if needed'
            },
            dxsuiteModules: ['ProcedureDx'],
            relatedCompetencies: ['PC9', 'Prof6', 'SBP6']
        },
        EPA13: {
            id: 'EPA13',
            title: 'Identify System Failures and Contribute to a Culture of Safety',
            shortName: 'Systems & Safety',
            description: 'Identify system failures and contribute to patient safety and quality improvement.',
            keyFunctions: [
                'Recognize system-level factors affecting care',
                'Report safety concerns appropriately',
                'Participate in quality improvement',
                'Apply systems thinking',
                'Promote culture of safety'
            ],
            entrustmentCriteria: {
                '1b': 'Learn about safety systems',
                '2a': 'Identify issues with guidance',
                '2b': 'Identify and report issues with prompting',
                '3a': 'Identify, report, and propose solutions; supervisor reviews',
                '3b': 'Identify, report, and implement solutions; supervisor approves'
            },
            dxsuiteModules: ['SystemsDx'],
            relatedCompetencies: ['SBP6', 'Prof5', 'ICS6', 'PBLI3']
        }
    },

    // =========================================================================
    // COMPETENCY DEFINITIONS (45 MD + 4 DO)
    // =========================================================================
    competencies: {
        // PROFESSIONALISM (10 + 1 DO)
        professionalism: {
            name: 'Professionalism',
            description: 'Demonstrates integrity, respect, and ethical reasoning, and promotes inclusion of differences in all interactions.',
            subcompetencies: {
                Prof1: { code: 'Prof1', name: 'Respect and compassion', full: 'Demonstrates respect and compassion for patients, caregivers, families, and team members' },
                Prof2: { code: 'Prof2', name: 'Privacy and autonomy', full: 'Safeguards patient privacy, confidentiality, and autonomy' },
                Prof3: { code: 'Prof3', name: 'Ethical reasoning', full: 'Uses ethical principles and reasoning to guide behavior' },
                Prof4: { code: 'Prof4', name: 'Situational adaptation', full: 'Adapts actions and communication according to the situation' },
                Prof5: { code: 'Prof5', name: 'Accountability', full: 'Takes ownership of mistakes and acts to address them' },
                Prof6: { code: 'Prof6', name: 'Knows limits', full: 'Identifies personal limits of knowledge and skills and seeks help appropriately' },
                Prof7: { code: 'Prof7', name: 'Bias mitigation', full: 'Identifies biases and strategies to mitigate their effects' },
                Prof8: { code: 'Prof8', name: 'Humility', full: 'Demonstrates humility and willingness to learn from others with different backgrounds' },
                Prof9: { code: 'Prof9', name: 'Personal wellness', full: 'Recognizes and addresses personal well-being needs that may impact professional performance' },
                Prof10: { code: 'Prof10', name: 'Reliability', full: 'Completes duties and tasks in a thorough, reliable, and timely manner' }
            },
            doSpecific: {
                'DO-Prof11': { code: 'DO-Prof11', name: 'Osteopathic philosophy', full: 'Demonstrates the philosophy of osteopathic medicine by promoting its four tenets', doOnly: true }
            }
        },
        
        // PATIENT CARE (11 + 2 DO)
        patientCare: {
            name: 'Patient Care and Procedural Skills',
            description: 'Demonstrates compassionate, effective, holistic, evidence-informed, equitable, and patient-centered care.',
            subcompetencies: {
                PC1: { code: 'PC1', name: 'Patient-centered care', full: 'Integrates patient and caregiver context, needs, values, preferences, and experiences into patient care' },
                PC2: { code: 'PC2', name: 'History gathering', full: 'Gathers relevant patient histories from multiple data sources' },
                PC3: { code: 'PC3', name: 'Physical examination', full: 'Performs relevant physical examinations using appropriate techniques and tools' },
                PC4: { code: 'PC4', name: 'Urgent care recognition', full: 'Identifies patients in need of urgent or emergent care, seeks assistance, and recommends initial management' },
                PC5: { code: 'PC5', name: 'Differential diagnosis', full: 'Creates and prioritizes differential diagnoses' },
                PC6: { code: 'PC6', name: 'Diagnostic testing', full: 'Proposes hypothesis-driven diagnostic testing and interprets results' },
                PC7: { code: 'PC7', name: 'Therapeutic management', full: 'Formulates therapeutic management plans for commonly encountered clinical conditions' },
                PC8: { code: 'PC8', name: 'Patient communication', full: 'Uses patient-centered language to describe common diagnostic and therapeutic interventions' },
                PC9: { code: 'PC9', name: 'Procedural skills', full: 'Demonstrates basic procedural techniques' },
                PC10: { code: 'PC10', name: 'Health promotion', full: 'Incorporates health promotion and disease prevention into patient care plans' },
                PC11: { code: 'PC11', name: 'Health determinants', full: 'Identifies individual and structural factors that impact health and wellness' }
            },
            doSpecific: {
                'DO-PC12': { code: 'DO-PC12', name: 'OMM integration', full: 'Incorporates osteopathic principles, practices, and tenets into patient care', doOnly: true },
                'DO-PC13': { code: 'DO-PC13', name: 'Structural exam & OMT', full: 'Performs osteopathic structural examination and treats somatic dysfunction with OMT', doOnly: true }
            }
        },
        
        // MEDICAL KNOWLEDGE (5 + 1 DO)
        medicalKnowledge: {
            name: 'Medical Knowledge',
            description: 'Applies and integrates foundational knowledge to improve health care for patients and populations.',
            subcompetencies: {
                MK1: { code: 'MK1', name: 'Foundational sciences', full: 'Demonstrates knowledge of basic, clinical, pathophysiologic, social, and health systems sciences' },
                MK2: { code: 'MK2', name: 'Clinical reasoning', full: 'Applies foundational knowledge for clinical problem-solving, diagnostic reasoning, and decision-making' },
                MK3: { code: 'MK3', name: 'Information accuracy', full: 'Discerns the accuracy of information and relevance to clinical problems' },
                MK4: { code: 'MK4', name: 'Research literacy', full: 'Demonstrates knowledge of research design, interpretation, and application to clinical questions' },
                MK5: { code: 'MK5', name: 'Knowledge resources', full: 'Accesses knowledge relevant to clinical problems using appropriate resources, including emerging technologies' }
            },
            doSpecific: {
                'DO-MK6': { code: 'DO-MK6', name: 'OMM knowledge', full: 'Demonstrates knowledge of how to integrate osteopathic principles, practices, and tenets into patient care', doOnly: true }
            }
        },
        
        // PRACTICE-BASED LEARNING (5)
        pbli: {
            name: 'Practice-Based Learning and Improvement',
            description: 'Integrates feedback, evidence, and reflection to adapt behavior, foster improvement, and cultivate lifelong learning.',
            subcompetencies: {
                PBLI1: { code: 'PBLI1', name: 'Seeks feedback', full: 'Actively seeks and incorporates feedback and assessment data to improve performance' },
                PBLI2: { code: 'PBLI2', name: 'Self-assessment', full: 'Identifies opportunities for growth through informed self-assessment and reflective practice' },
                PBLI3: { code: 'PBLI3', name: 'Learning goals', full: 'Develops, implements, and reassesses learning and improvement goals' },
                PBLI4: { code: 'PBLI4', name: 'Evidence appraisal', full: 'Locates, critically appraises, and synthesizes information to support evidence-informed decisions' },
                PBLI5: { code: 'PBLI5', name: 'Inquiry', full: 'Demonstrates inquiry and ability to grow and seek new knowledge' }
            }
        },
        
        // INTERPERSONAL & COMMUNICATION (6)
        ics: {
            name: 'Interpersonal and Communication Skills',
            description: 'Effectively communicates and interacts with patients, caregivers, and the health care team.',
            subcompetencies: {
                ICS1: { code: 'ICS1', name: 'Therapeutic relationship', full: 'Collaborates with patients, caregivers, and team members to enhance the therapeutic relationship' },
                ICS2: { code: 'ICS2', name: 'Team collaboration', full: 'Collaborates with health care and administrative team members to enhance team and organizational function' },
                ICS3: { code: 'ICS3', name: 'Active listening', full: 'Demonstrates active listening' },
                ICS4: { code: 'ICS4', name: 'Clear communication', full: 'Communicates clearly, accurately, and compassionately in verbal, nonverbal, written, and electronic formats' },
                ICS5: { code: 'ICS5', name: 'Patient education', full: 'Demonstrates skills in educating patients, caregivers, peers, and team members' },
                ICS6: { code: 'ICS6', name: 'Feedback skills', full: 'Formulates and shares feedback constructively with others' }
            }
        },
        
        // SYSTEMS-BASED PRACTICE (8)
        sbp: {
            name: 'Systems-Based Practice',
            description: 'Applies knowledge of the larger context of health, including its social and structural determinants.',
            subcompetencies: {
                SBP1: { code: 'SBP1', name: 'Social determinants', full: 'Applies knowledge of social and structural drivers of health' },
                SBP2: { code: 'SBP2', name: 'Reducing disparities', full: 'Recognizes mechanisms to reduce disparities in patient care and health care systems' },
                SBP3: { code: 'SBP3', name: 'System adaptation', full: 'Adapts performance to various health care teams, delivery settings, and systems' },
                SBP4: { code: 'SBP4', name: 'Care transitions', full: 'Collaborates in transitions and coordination of patient care' },
                SBP5: { code: 'SBP5', name: 'Technology assessment', full: 'Evaluates the risks and benefits of using current and emerging technologies in patient care' },
                SBP6: { code: 'SBP6', name: 'Patient safety/QI', full: 'Identifies patient safety concerns, systems issues, and opportunities for quality improvement' },
                SBP7: { code: 'SBP7', name: 'Health policy', full: 'Describes health policy and the financial context of health care' },
                SBP8: { code: 'SBP8', name: 'Community health', full: 'Applies knowledge of local population and community health needs, disparities, and resources' }
            }
        }
    },

    // =========================================================================
    // OSTEOPATHIC TENETS (for DO programs)
    // =========================================================================
    osteopathicTenets: {
        bodyUnit: {
            id: 'bodyUnit',
            name: 'Body Unity',
            description: 'The body is a unit; the person is a unit of body, mind, and spirit'
        },
        selfRegulation: {
            id: 'selfRegulation',
            name: 'Self-Regulation',
            description: 'The body is capable of self-regulation, self-healing, and health maintenance'
        },
        structureFunction: {
            id: 'structureFunction',
            name: 'Structure-Function',
            description: 'Structure and function are reciprocally interrelated'
        },
        rationalTreatment: {
            id: 'rationalTreatment',
            name: 'Rational Treatment',
            description: 'Rational treatment is based on understanding body unity, self-regulation, and structure-function interrelationship'
        }
    },

    // =========================================================================
    // CASE TAGGING FUNCTIONS
    // =========================================================================
    
    /**
     * Create a new case metadata object
     */
    createCaseMetadata: function(caseId, title, options = {}) {
        return {
            caseId: caseId,
            title: title,
            version: '1.0',
            lastUpdated: new Date().toISOString(),
            
            // EPA mappings
            primaryEPAs: options.primaryEPAs || [],
            secondaryEPAs: options.secondaryEPAs || [],
            
            // Competency mappings
            competencies: {
                professionalism: options.professionalism || [],
                patientCare: options.patientCare || [],
                medicalKnowledge: options.medicalKnowledge || [],
                pbli: options.pbli || [],
                ics: options.ics || [],
                sbp: options.sbp || []
            },
            
            // DO-specific (only populated for DO-relevant cases)
            doSpecific: {
                applicable: options.doApplicable || false,
                competencies: options.doCompetencies || [],
                tenetsAddressed: options.tenets || [],
                ommRelevance: options.ommRelevance || null,
                omtConsideration: options.omtConsideration || false
            },
            
            // Case characteristics
            difficulty: options.difficulty || 'intermediate', // beginner, intermediate, advanced
            clinicalSetting: options.clinicalSetting || 'mixed', // emergency, inpatient, outpatient, mixed
            estimatedTime: options.estimatedTime || 20, // minutes
            specialty: options.specialty || 'general',
            
            // Learning objectives
            learningObjectives: options.learningObjectives || [],
            
            // Assessment criteria
            assessmentCriteria: options.assessmentCriteria || []
        };
    },

    /**
     * Validate case metadata against schema
     */
    validateCaseMetadata: function(metadata) {
        const errors = [];
        
        // Check required fields
        if (!metadata.caseId) errors.push('Missing caseId');
        if (!metadata.title) errors.push('Missing title');
        if (!metadata.primaryEPAs || metadata.primaryEPAs.length === 0) {
            errors.push('At least one primary EPA required');
        }
        
        // Validate EPA codes
        const validEPAs = Object.keys(this.epas);
        metadata.primaryEPAs?.forEach(epa => {
            if (!validEPAs.includes(epa)) errors.push(`Invalid EPA: ${epa}`);
        });
        
        // Validate competency codes
        Object.entries(metadata.competencies || {}).forEach(([domain, codes]) => {
            const validCodes = Object.keys(this.competencies[domain]?.subcompetencies || {});
            codes.forEach(code => {
                if (!validCodes.includes(code)) errors.push(`Invalid competency: ${code}`);
            });
        });
        
        return {
            valid: errors.length === 0,
            errors: errors
        };
    },

    /**
     * Get all EPAs associated with a DxSuite module
     */
    getEPAsByModule: function(moduleName) {
        return Object.values(this.epas).filter(epa => 
            epa.dxsuiteModules.includes(moduleName)
        );
    },

    /**
     * Get competencies for a specific EPA
     */
    getCompetenciesForEPA: function(epaId) {
        const epa = this.epas[epaId];
        if (!epa) return null;
        
        const competencies = [];
        epa.relatedCompetencies.forEach(code => {
            // Find which domain contains this competency
            for (const [domain, data] of Object.entries(this.competencies)) {
                if (data.subcompetencies[code]) {
                    competencies.push({
                        domain: domain,
                        ...data.subcompetencies[code]
                    });
                }
            }
        });
        
        return competencies;
    },

    /**
     * Calculate entrustment level from assessment data
     */
    calculateEntrustmentLevel: function(assessmentData) {
        // Modified Chen scale calculation
        const scores = assessmentData.scores || [];
        if (scores.length === 0) return null;
        
        const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
        
        if (avgScore >= 4.5) return '3b';
        if (avgScore >= 4.0) return '3a';
        if (avgScore >= 3.0) return '2b';
        if (avgScore >= 2.0) return '2a';
        return '1b';
    }
};

// ============================================================================
// SAMPLE CASE METADATA EXAMPLES
// ============================================================================
const SampleCaseMetadata = {
    
    sepsis: EPACompetencySchema.createCaseMetadata('sepsis-expanded-adventure', 'Sepsis Recognition and Management', {
        primaryEPAs: ['EPA2', 'EPA4', 'EPA10'],
        secondaryEPAs: ['EPA3', 'EPA5'],
        patientCare: ['PC4', 'PC5', 'PC6', 'PC7'],
        medicalKnowledge: ['MK1', 'MK2'],
        sbp: ['SBP4', 'SBP6'],
        doApplicable: true,
        tenets: ['bodyUnit', 'selfRegulation'],
        ommRelevance: 'Sepsis disrupts body homeostasis; structure-function relationships in end-organ damage',
        difficulty: 'advanced',
        clinicalSetting: 'emergency',
        estimatedTime: 30,
        specialty: 'emergency-medicine',
        learningObjectives: [
            'Recognize signs of sepsis using qSOFA and SIRS criteria',
            'Initiate appropriate sepsis bundle within first hour',
            'Prioritize differential diagnosis for infection source',
            'Order and interpret appropriate diagnostic tests'
        ]
    }),
    
    differentialDx: EPACompetencySchema.createCaseMetadata('chest-pain-expanded', 'Chest Pain Differential', {
        primaryEPAs: ['EPA2', 'EPA1'],
        secondaryEPAs: ['EPA3', 'EPA10'],
        patientCare: ['PC2', 'PC3', 'PC4', 'PC5'],
        medicalKnowledge: ['MK2'],
        ics: ['ICS3'],
        doApplicable: true,
        tenets: ['structureFunction'],
        ommRelevance: 'Structural exam may reveal somatic dysfunction contributing to musculoskeletal chest pain',
        omtConsideration: true,
        difficulty: 'intermediate',
        clinicalSetting: 'emergency',
        estimatedTime: 25,
        specialty: 'cardiology',
        learningObjectives: [
            'Systematically generate chest pain differential',
            'Prioritize life-threatening causes (ACS, PE, dissection)',
            'Identify key history and exam findings',
            'Apply clinical decision rules appropriately'
        ]
    })
};

// Export for use in other modules
// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EPACompetencySchema, SampleCaseMetadata };
}

// Browser export
if (typeof window !== 'undefined') {
    window.EPACompetencySchema = EPACompetencySchema;
    window.SampleCaseMetadata = SampleCaseMetadata;
}
