// ============================================================================
// REASONDX EPA COMPETENCY MAPPING SYSTEM
// Aligned with AAMC Core Entrustable Professional Activities (EPAs)
// ============================================================================
// 
// This file provides:
// 1. Complete EPA definitions with behavioral anchors
// 2. Case-to-EPA mapping for all 112 ReasonDx cases
// 3. Question-level competency tagging
// 4. Assessment rubrics for each EPA level
// 5. Dashboard integration for progress tracking
// ============================================================================

const EPA_DEFINITIONS = {
    // EPA 1: Gather History and Perform Physical Examination
    "EPA-1": {
        id: "EPA-1",
        title: "Gather a History and Perform a Physical Examination",
        description: "Gather essential and accurate information about patients and their conditions through history-taking, physical examination, and the use of laboratory data, imaging, and other tests.",
        behavioralAnchors: {
            level1: "Requires direct supervision; may miss key findings",
            level2: "Gathers history with some gaps; needs prompting for focused exam",
            level3: "Consistently gathers complete, relevant history; performs appropriate focused exam",
            level4: "Efficiently gathers nuanced history; adapts exam to clinical context",
            level5: "Models expert history-taking; teaches technique to others"
        },
        assessmentCriteria: [
            "Obtains comprehensive history appropriate to clinical context",
            "Identifies pertinent positives and negatives",
            "Performs focused physical examination based on presentation",
            "Recognizes abnormal findings"
        ],
        relatedCases: ["chest-pain", "acute-abdomen", "syncope", "sepsis", "stroke", "meningitis"]
    },

    // EPA 2: Prioritize Differential Diagnosis
    "EPA-2": {
        id: "EPA-2",
        title: "Prioritize a Differential Diagnosis Following a Clinical Encounter",
        description: "Integrate patient information to develop a prioritized differential diagnosis, identifying must-not-miss diagnoses and most likely diagnoses.",
        behavioralAnchors: {
            level1: "Generates limited differential; may miss critical diagnoses",
            level2: "Develops differential but struggles with prioritization",
            level3: "Creates appropriate differential with must-not-miss considerations",
            level4: "Generates nuanced differential considering atypical presentations",
            level5: "Develops expert-level differentials; recognizes pattern breaks"
        },
        assessmentCriteria: [
            "Generates appropriate breadth of differential",
            "Identifies must-not-miss diagnoses",
            "Prioritizes based on likelihood and severity",
            "Adjusts differential as new information emerges",
            "Recognizes when working diagnosis is inadequate"
        ],
        relatedCases: ["acs", "pe", "gi-bleed", "aki", "hyponatremia", "shock", "anaphylaxis"]
    },

    // EPA 3: Recommend and Interpret Diagnostic Tests
    "EPA-3": {
        id: "EPA-3",
        title: "Recommend and Interpret Common Diagnostic and Screening Tests",
        description: "Based on differential diagnosis, recommend appropriate diagnostic tests considering pre-test probability, test characteristics, and cost-effectiveness.",
        behavioralAnchors: {
            level1: "Orders excessive/inappropriate tests; cannot interpret results",
            level2: "Orders standard workup but may miss key tests; basic interpretation",
            level3: "Orders targeted workup based on differential; interprets accurately",
            level4: "Optimizes test ordering; understands limitations and pre-test probability",
            level5: "Expert test utilization; teaches diagnostic stewardship"
        },
        assessmentCriteria: [
            "Selects tests based on pre-test probability",
            "Understands test characteristics (sensitivity, specificity)",
            "Interprets results in clinical context",
            "Avoids unnecessary testing",
            "Recognizes critical/abnormal results"
        ],
        relatedCases: ["dvt", "pe", "aki-workup", "hyponatremia", "ttp-hus", "dic", "eosinophilia"]
    },

    // EPA 4: Enter Orders and Prescriptions
    "EPA-4": {
        id: "EPA-4",
        title: "Enter and Discuss Orders and Prescriptions",
        description: "Write appropriate orders and prescriptions, understanding indications, contraindications, and interactions.",
        behavioralAnchors: {
            level1: "Requires direct supervision for all orders",
            level2: "Writes basic orders with oversight; may have dosing errors",
            level3: "Writes appropriate orders for common conditions",
            level4: "Handles complex prescribing; considers interactions reliably",
            level5: "Expert prescriber; teaches pharmacology principles"
        },
        assessmentCriteria: [
            "Writes legible, complete orders",
            "Selects appropriate medications",
            "Uses correct dosing and route",
            "Considers allergies and interactions",
            "Orders appropriate monitoring"
        ],
        relatedCases: ["sepsis", "dka", "hyperkalemia", "afib", "heart-failure", "anaphylaxis", "status-epilepticus"]
    },

    // EPA 5: Document Clinical Encounter
    "EPA-5": {
        id: "EPA-5",
        title: "Document a Clinical Encounter in the Patient Record",
        description: "Produce accurate, complete, and timely documentation that communicates clinical findings and reasoning.",
        behavioralAnchors: {
            level1: "Documentation incomplete or inaccurate",
            level2: "Documents basic information; may lack clinical reasoning",
            level3: "Produces complete, organized notes with clear reasoning",
            level4: "Efficient, high-quality documentation under time pressure",
            level5: "Models exemplary documentation; teaches documentation skills"
        },
        assessmentCriteria: [
            "Includes all relevant clinical information",
            "Documents clinical reasoning",
            "Notes are timely and legible",
            "Appropriate use of templates vs. free text"
        ],
        relatedCases: [] // Assessed through SBAR trainer, not adventure cases
    },

    // EPA 6: Oral Presentation
    "EPA-6": {
        id: "EPA-6",
        title: "Provide an Oral Presentation of a Clinical Encounter",
        description: "Present patient information in organized, accurate, and succinct manner appropriate to audience and context.",
        behavioralAnchors: {
            level1: "Disorganized, incomplete presentations",
            level2: "Basic structure but may include irrelevant details",
            level3: "Organized, complete presentations adapted to context",
            level4: "Efficient, focused presentations; highlights key decisions",
            level5: "Expert presenter; teaches presentation skills"
        },
        assessmentCriteria: [
            "Logical organization (SOAP, problem-based)",
            "Appropriate length for setting",
            "Highlights key findings and decisions",
            "Answers questions accurately"
        ],
        relatedCases: [] // Assessed through SBAR trainer
    },

    // EPA 7: Clinical Questions and Evidence
    "EPA-7": {
        id: "EPA-7",
        title: "Form Clinical Questions and Retrieve Evidence to Advance Patient Care",
        description: "Identify knowledge gaps, formulate answerable questions, and apply evidence to patient care decisions.",
        behavioralAnchors: {
            level1: "Does not recognize knowledge gaps",
            level2: "Recognizes gaps but struggles to find evidence",
            level3: "Formulates good questions; finds and applies evidence",
            level4: "Efficiently integrates evidence into real-time decisions",
            level5: "Teaches evidence-based medicine principles"
        },
        assessmentCriteria: [
            "Identifies knowledge gaps",
            "Formulates searchable clinical questions",
            "Finds relevant, high-quality evidence",
            "Applies evidence appropriately to patient"
        ],
        relatedCases: ["sepsis", "acs", "stroke", "pe", "afib", "heart-failure"]
    },

    // EPA 8: Patient Handoffs
    "EPA-8": {
        id: "EPA-8",
        title: "Give or Receive a Patient Handover to Transition Care Responsibility",
        description: "Perform safe, effective handoffs using standardized approaches, ensuring continuity of care.",
        behavioralAnchors: {
            level1: "Omits critical information; poor structure",
            level2: "Covers basics but may miss anticipatory guidance",
            level3: "Complete SBAR/I-PASS with appropriate detail",
            level4: "Efficient handoffs with excellent anticipatory guidance",
            level5: "Models exemplary handoffs; teaches handoff skills"
        },
        assessmentCriteria: [
            "Uses structured format (SBAR/I-PASS)",
            "Includes pending tasks and anticipatory guidance",
            "Confirms receiver understanding",
            "Documents handoff appropriately"
        ],
        relatedCases: [] // Assessed through SBAR trainer
    },

    // EPA 9: Collaborate as Member of Interprofessional Team
    "EPA-9": {
        id: "EPA-9",
        title: "Collaborate as a Member of an Interprofessional Team",
        description: "Work effectively with all members of the healthcare team, understanding roles and responsibilities.",
        behavioralAnchors: {
            level1: "Functions in isolation; does not engage team",
            level2: "Interacts with team but may not leverage expertise",
            level3: "Actively engages team members; respects roles",
            level4: "Leads interprofessional collaboration effectively",
            level5: "Models and teaches team-based care"
        },
        assessmentCriteria: [
            "Understands team member roles",
            "Communicates effectively with all team members",
            "Incorporates input from team",
            "Resolves conflicts constructively"
        ],
        relatedCases: ["sepsis", "code-situations", "stroke", "trauma"]
    },

    // EPA 10: Recognize Urgency
    "EPA-10": {
        id: "EPA-10",
        title: "Recognize a Patient Requiring Urgent or Emergent Care and Initiate Evaluation and Management",
        description: "Recognize signs of clinical deterioration, initiate stabilization, and seek appropriate help.",
        behavioralAnchors: {
            level1: "Does not recognize urgency; delays response",
            level2: "Recognizes obvious emergencies; may delay intervention",
            level3: "Recognizes urgency; initiates appropriate response",
            level4: "Anticipates deterioration; proactive management",
            level5: "Expert in emergency recognition; teaches resuscitation"
        },
        assessmentCriteria: [
            "Recognizes critical vital sign abnormalities",
            "Identifies patients needing immediate intervention",
            "Initiates stabilization measures",
            "Calls for appropriate help",
            "Prioritizes multiple patients appropriately"
        ],
        relatedCases: ["sepsis", "acs", "stroke", "pe", "anaphylaxis", "tension-ptx", "status-epilepticus", "gi-bleed", "dka"]
    },

    // EPA 11: Informed Consent
    "EPA-11": {
        id: "EPA-11",
        title: "Obtain Informed Consent for Tests and/or Procedures",
        description: "Explain procedures, risks, benefits, and alternatives to obtain voluntary informed consent.",
        behavioralAnchors: {
            level1: "Cannot explain procedures adequately",
            level2: "Basic explanation; may miss key risks",
            level3: "Complete, clear consent discussions",
            level4: "Handles complex consent situations",
            level5: "Teaches consent principles; handles ethical dilemmas"
        },
        assessmentCriteria: [
            "Explains procedure in understandable terms",
            "Discusses risks, benefits, alternatives",
            "Ensures patient understanding",
            "Documents appropriately"
        ],
        relatedCases: [] // Limited in current case set
    },

    // EPA 12: Procedures
    "EPA-12": {
        id: "EPA-12",
        title: "Perform General Procedures of a Physician",
        description: "Perform basic procedures safely using appropriate technique.",
        behavioralAnchors: {
            level1: "Cannot perform procedures independently",
            level2: "Performs with significant supervision",
            level3: "Performs common procedures independently",
            level4: "Handles difficult procedures and complications",
            level5: "Teaches procedural skills"
        },
        assessmentCriteria: [
            "Proper indication and patient selection",
            "Appropriate technique",
            "Recognition and management of complications",
            "Proper documentation"
        ],
        relatedCases: ["tension-ptx", "gi-bleed", "sepsis"]
    },

    // EPA 13: Safety and Quality
    "EPA-13": {
        id: "EPA-13",
        title: "Identify System Failures and Contribute to a Culture of Safety and Improvement",
        description: "Recognize and report errors, near-misses, and system failures to improve patient safety.",
        behavioralAnchors: {
            level1: "Does not recognize system issues",
            level2: "Recognizes obvious errors but does not report",
            level3: "Reports errors and participates in improvement",
            level4: "Leads safety initiatives",
            level5: "Champions safety culture; teaches QI methods"
        },
        assessmentCriteria: [
            "Recognizes errors and near-misses",
            "Reports safety concerns",
            "Participates in quality improvement",
            "Applies systems thinking"
        ],
        relatedCases: [] // Addressed through interruption training and SBAR
    }
};

// ============================================================================
// CASE-TO-EPA MAPPING
// Maps each case to primary and secondary EPAs assessed
// ============================================================================

const CASE_EPA_MAP = {
    // Emergency/Critical Care Cases
    "sepsis": {
        primaryEPAs: ["EPA-10", "EPA-2", "EPA-4"],
        secondaryEPAs: ["EPA-1", "EPA-3", "EPA-7"],
        competencyFocus: "Recognize sepsis, prioritize differential, initiate Hour-1 Bundle",
        assessmentPoints: {
            "EPA-10": ["Recognizes septic shock", "Initiates resuscitation", "Calls for appropriate help"],
            "EPA-2": ["Identifies source of infection", "Considers mimics", "Prioritizes based on severity"],
            "EPA-4": ["Orders appropriate antibiotics", "Manages vasopressors", "Fluid resuscitation"]
        }
    },
    "acs": {
        primaryEPAs: ["EPA-10", "EPA-2", "EPA-3"],
        secondaryEPAs: ["EPA-1", "EPA-4", "EPA-7"],
        competencyFocus: "Recognize ACS presentations, risk stratify, initiate management",
        assessmentPoints: {
            "EPA-10": ["Recognizes STEMI criteria", "Activates cath lab", "Initiates MONA"],
            "EPA-2": ["Differentiates STEMI vs NSTEMI vs UA", "Considers aortic dissection", "Risk stratification"],
            "EPA-3": ["ECG interpretation", "Troponin timing", "Appropriate imaging"]
        }
    },
    "stroke": {
        primaryEPAs: ["EPA-10", "EPA-2", "EPA-3"],
        secondaryEPAs: ["EPA-1", "EPA-4", "EPA-7"],
        competencyFocus: "Recognize stroke, determine eligibility for intervention",
        assessmentPoints: {
            "EPA-10": ["Time-sensitive recognition", "Activates stroke team", "BP management"],
            "EPA-2": ["Ischemic vs hemorrhagic", "Stroke mimics", "NIHSS application"],
            "EPA-3": ["CT interpretation", "LKW determination", "tPA criteria"]
        }
    },
    "pe": {
        primaryEPAs: ["EPA-2", "EPA-3", "EPA-10"],
        secondaryEPAs: ["EPA-1", "EPA-4"],
        competencyFocus: "Risk stratify PE, apply diagnostic algorithms",
        assessmentPoints: {
            "EPA-2": ["Uses Wells/Geneva criteria", "Identifies massive vs submassive", "Considers alternatives"],
            "EPA-3": ["D-dimer interpretation", "CTPA vs V/Q", "Echo findings"],
            "EPA-10": ["Recognizes massive PE", "Initiates anticoagulation", "Considers lytics"]
        }
    },
    "anaphylaxis": {
        primaryEPAs: ["EPA-10", "EPA-4", "EPA-2"],
        secondaryEPAs: ["EPA-1", "EPA-3"],
        competencyFocus: "Immediate recognition and treatment of anaphylaxis",
        assessmentPoints: {
            "EPA-10": ["Immediate epinephrine", "Airway assessment", "Calls for help"],
            "EPA-4": ["IM epinephrine dosing", "Adjunctive therapies", "Observation period"],
            "EPA-2": ["Identifies trigger", "Differentiates from mimics", "Biphasic reaction risk"]
        }
    },
    "gi-bleed": {
        primaryEPAs: ["EPA-10", "EPA-2", "EPA-4"],
        secondaryEPAs: ["EPA-3", "EPA-12"],
        competencyFocus: "Resuscitate, risk stratify, determine intervention timing",
        assessmentPoints: {
            "EPA-10": ["Recognizes hemodynamic instability", "Initiates resuscitation", "Activates GI"],
            "EPA-2": ["Upper vs lower", "Variceal vs non-variceal", "Risk stratification"],
            "EPA-4": ["Transfusion thresholds", "PPI dosing", "Octreotide for varices"]
        }
    },
    "dka": {
        primaryEPAs: ["EPA-10", "EPA-4", "EPA-3"],
        secondaryEPAs: ["EPA-2", "EPA-1"],
        competencyFocus: "DKA management, monitoring, transition to subcutaneous",
        assessmentPoints: {
            "EPA-10": ["Recognizes severity", "Initiates treatment", "Monitors for complications"],
            "EPA-4": ["Insulin protocol", "Fluid management", "Potassium replacement"],
            "EPA-3": ["Anion gap calculation", "AG closure monitoring", "Identifies precipitant"]
        }
    },
    "aki": {
        primaryEPAs: ["EPA-3", "EPA-2", "EPA-4"],
        secondaryEPAs: ["EPA-1", "EPA-10"],
        competencyFocus: "Classify AKI, identify etiology, prevent progression",
        assessmentPoints: {
            "EPA-3": ["FENa calculation", "Urine studies", "Imaging appropriateness"],
            "EPA-2": ["Pre-renal vs intrinsic vs post-renal", "Specific causes", "Drug-induced"],
            "EPA-4": ["Medication adjustment", "Fluid management", "Dialysis indications"]
        }
    },
    "hyponatremia": {
        primaryEPAs: ["EPA-3", "EPA-2", "EPA-4"],
        secondaryEPAs: ["EPA-1", "EPA-10"],
        competencyFocus: "Classify hyponatremia, treat based on volume status",
        assessmentPoints: {
            "EPA-3": ["Volume assessment", "Urine studies", "Osmolality interpretation"],
            "EPA-2": ["Hypo vs eu vs hyper-volemic", "SIADH criteria", "Pseudohyponatremia"],
            "EPA-4": ["Correction rate", "Fluid restriction", "Hypertonic saline indications"]
        }
    },
    "shock": {
        primaryEPAs: ["EPA-10", "EPA-2", "EPA-4"],
        secondaryEPAs: ["EPA-1", "EPA-3"],
        competencyFocus: "Classify shock type, initiate appropriate treatment",
        assessmentPoints: {
            "EPA-10": ["Recognizes shock", "Initiates resuscitation", "Monitors response"],
            "EPA-2": ["Distributive vs cardiogenic vs hypovolemic vs obstructive", "Identifies cause"],
            "EPA-4": ["Fluid vs vasopressor", "Agent selection", "Monitors response"]
        }
    },
    // Allergy/Immunology Cases (Your specialty)
    "drug-allergy": {
        primaryEPAs: ["EPA-1", "EPA-2", "EPA-4"],
        secondaryEPAs: ["EPA-3", "EPA-7"],
        competencyFocus: "Assess drug allergy history, determine cross-reactivity risk",
        assessmentPoints: {
            "EPA-1": ["Detailed allergy history", "Reaction characteristics", "Timeline"],
            "EPA-2": ["True allergy vs intolerance", "Cross-reactivity", "Risk assessment"],
            "EPA-4": ["Safe alternatives", "Desensitization indication", "Documentation"]
        }
    },
    "urticaria": {
        primaryEPAs: ["EPA-2", "EPA-3", "EPA-4"],
        secondaryEPAs: ["EPA-1", "EPA-7"],
        competencyFocus: "Acute vs chronic urticaria workup and management",
        assessmentPoints: {
            "EPA-2": ["Acute vs chronic", "Identify triggers", "Associated conditions"],
            "EPA-3": ["Appropriate workup for chronic", "When to test for causes"],
            "EPA-4": ["H1/H2 antihistamines", "Omalizumab criteria", "Avoidance counseling"]
        }
    },
    "immunodeficiency": {
        primaryEPAs: ["EPA-2", "EPA-3", "EPA-1"],
        secondaryEPAs: ["EPA-4", "EPA-7"],
        competencyFocus: "Recognize immunodeficiency patterns, order appropriate workup",
        assessmentPoints: {
            "EPA-2": ["Primary vs secondary", "Infection patterns", "Warning signs"],
            "EPA-3": ["Screening vs confirmatory tests", "Interpretation"],
            "EPA-1": ["Comprehensive infection history", "Family history", "Associated features"]
        }
    },
    "eosinophilia": {
        primaryEPAs: ["EPA-2", "EPA-3"],
        secondaryEPAs: ["EPA-1", "EPA-4"],
        competencyFocus: "Systematic approach to eosinophilia workup",
        assessmentPoints: {
            "EPA-2": ["NAACP mnemonic", "Primary vs reactive", "Organ involvement"],
            "EPA-3": ["Stepwise workup", "When to refer", "Bone marrow indications"]
        }
    },
    // Add more cases as needed...
};

// ============================================================================
// QUESTION-LEVEL EPA TAGGING
// Each question type maps to specific EPA assessment
// ============================================================================

const QUESTION_TYPE_EPA_MAP = {
    "initial-assessment": {
        primaryEPA: "EPA-1",
        description: "Assesses ability to gather relevant history and physical findings"
    },
    "differential-generation": {
        primaryEPA: "EPA-2",
        description: "Assesses ability to generate and prioritize differential diagnosis"
    },
    "differential-refinement": {
        primaryEPA: "EPA-2",
        description: "Assesses ability to update differential based on new information"
    },
    "test-selection": {
        primaryEPA: "EPA-3",
        description: "Assesses ability to select appropriate diagnostic tests"
    },
    "test-interpretation": {
        primaryEPA: "EPA-3",
        description: "Assesses ability to interpret diagnostic results"
    },
    "medication-ordering": {
        primaryEPA: "EPA-4",
        description: "Assesses ability to order appropriate medications"
    },
    "urgency-recognition": {
        primaryEPA: "EPA-10",
        description: "Assesses ability to recognize and respond to urgency"
    },
    "evidence-application": {
        primaryEPA: "EPA-7",
        description: "Assesses ability to apply evidence to clinical decisions"
    }
};

// ============================================================================
// EPA PROGRESS TRACKING
// Functions to track learner progress on each EPA
// ============================================================================

const EPATracker = {
    storageKey: 'reasondx_epa_progress',
    
    // Initialize or load EPA progress data
    init() {
        let data = localStorage.getItem(this.storageKey);
        if (!data) {
            data = this.createDefaultProgress();
            this.save(data);
        }
        return JSON.parse(data);
    },
    
    createDefaultProgress() {
        const progress = {};
        Object.keys(EPA_DEFINITIONS).forEach(epaId => {
            progress[epaId] = {
                questionsAttempted: 0,
                questionsCorrect: 0,
                casesCompleted: [],
                assessmentScores: [],
                currentLevel: 1,
                lastAssessed: null,
                strengthAreas: [],
                gapAreas: []
            };
        });
        return JSON.stringify(progress);
    },
    
    // Record an EPA assessment from a question
    recordAssessment(epaId, questionId, correct, caseId, questionType) {
        const data = this.init();
        if (!data[epaId]) return;
        
        data[epaId].questionsAttempted++;
        if (correct) data[epaId].questionsCorrect++;
        if (caseId && !data[epaId].casesCompleted.includes(caseId)) {
            data[epaId].casesCompleted.push(caseId);
        }
        data[epaId].lastAssessed = new Date().toISOString();
        
        // Calculate mastery level
        this.updateLevel(data[epaId]);
        
        this.save(data);
        return data[epaId];
    },
    
    updateLevel(epaData) {
        const accuracy = epaData.questionsCorrect / epaData.questionsAttempted;
        const volume = epaData.questionsAttempted;
        
        // Level progression based on accuracy and volume
        if (volume >= 30 && accuracy >= 0.9) epaData.currentLevel = 5;
        else if (volume >= 20 && accuracy >= 0.85) epaData.currentLevel = 4;
        else if (volume >= 15 && accuracy >= 0.75) epaData.currentLevel = 3;
        else if (volume >= 8 && accuracy >= 0.65) epaData.currentLevel = 2;
        else epaData.currentLevel = 1;
    },
    
    save(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    },
    
    // Get summary for dashboard
    getSummary() {
        const data = this.init();
        return Object.keys(data).map(epaId => ({
            epaId,
            title: EPA_DEFINITIONS[epaId]?.title || epaId,
            level: data[epaId].currentLevel,
            accuracy: data[epaId].questionsAttempted > 0 
                ? Math.round((data[epaId].questionsCorrect / data[epaId].questionsAttempted) * 100) 
                : 0,
            casesCompleted: data[epaId].casesCompleted.length,
            questionsAttempted: data[epaId].questionsAttempted
        }));
    },
    
    // Get detailed EPA report for a specific EPA
    getDetailedReport(epaId) {
        const data = this.init();
        const epaData = data[epaId];
        const definition = EPA_DEFINITIONS[epaId];
        
        return {
            ...epaData,
            definition,
            levelDescription: definition?.behavioralAnchors[`level${epaData.currentLevel}`],
            nextLevelCriteria: this.getNextLevelCriteria(epaData),
            recommendedCases: definition?.relatedCases.filter(c => !epaData.casesCompleted.includes(c))
        };
    },
    
    getNextLevelCriteria(epaData) {
        const currentLevel = epaData.currentLevel;
        const accuracy = epaData.questionsCorrect / epaData.questionsAttempted || 0;
        const volume = epaData.questionsAttempted;
        
        const requirements = {
            2: { volume: 8, accuracy: 0.65 },
            3: { volume: 15, accuracy: 0.75 },
            4: { volume: 20, accuracy: 0.85 },
            5: { volume: 30, accuracy: 0.9 }
        };
        
        const nextReq = requirements[currentLevel + 1];
        if (!nextReq) return { message: "Maximum level achieved!" };
        
        return {
            questionsNeeded: Math.max(0, nextReq.volume - volume),
            accuracyNeeded: Math.max(0, Math.round((nextReq.accuracy - accuracy) * 100)),
            currentAccuracy: Math.round(accuracy * 100),
            targetAccuracy: Math.round(nextReq.accuracy * 100)
        };
    }
};

// ============================================================================
// EXPORT FOR USE IN CASES
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EPA_DEFINITIONS, CASE_EPA_MAP, QUESTION_TYPE_EPA_MAP, EPATracker };
}
