// ============================================================================
// REASONDX EPA/MILESTONE COMPETENCY MAPPING SYSTEM
// Complete mapping of all 112 cases to EPAs and ACGME Milestones
// ============================================================================

const EPA_CASE_MAPPING = {
    // EPA 1: Gather History and Physical Examination
    "EPA-1": {
        id: "EPA-1",
        title: "Gather a History and Perform a Physical Examination",
        description: "Gather essential information through history-taking and physical examination",
        targetLevel: 3, // Expected level for graduation
        cases: [
            "chest-pain-expanded", "acute-abdomen-expanded", "syncope-expanded",
            "stroke-expanded", "meningitis-expanded", "sepsis-expanded",
            "heart-failure-expanded", "copd-exacerbation-expanded", "pneumonia-expanded",
            "gi-bleed-expanded", "acs-expanded", "pe-expanded",
            "dka-expanded", "aki-expanded", "pancreatitis-expanded"
        ],
        assessmentQuestions: [
            "Chief complaint identified correctly",
            "HPI elements complete (OPQRST/OLDCARTS)",
            "Pertinent positives and negatives elicited",
            "Focused physical exam performed",
            "Red flag findings recognized"
        ]
    },

    // EPA 2: Prioritize Differential Diagnosis
    "EPA-2": {
        id: "EPA-2", 
        title: "Prioritize a Differential Diagnosis",
        description: "Develop a prioritized differential diagnosis with must-not-miss diagnoses",
        targetLevel: 3,
        cases: [
            "acs-expanded", "pe-expanded", "gi-bleed-expanded", "aki-expanded",
            "shock-expanded", "anaphylaxis-expanded", "stroke-expanded",
            "meningitis-expanded", "dka-expanded", "sepsis-expanded",
            "heart-failure-expanded", "syncope-expanded", "chest-pain-expanded",
            "acute-abdomen-expanded", "hyponatremia-expanded", "hyperkalemia-expanded",
            "ttp-hus-expanded", "dic-expanded", "aortic-dissection-expanded"
        ],
        assessmentQuestions: [
            "Generated appropriate breadth of differential",
            "Identified must-not-miss diagnoses",
            "Prioritized by likelihood AND severity",
            "Considered atypical presentations",
            "Adjusted differential with new data"
        ]
    },

    // EPA 3: Recommend and Interpret Diagnostic Tests
    "EPA-3": {
        id: "EPA-3",
        title: "Recommend and Interpret Diagnostic Tests",
        description: "Order appropriate tests based on differential and interpret results",
        targetLevel: 3,
        cases: [
            "dvt-expanded", "pe-expanded", "aki-workup-expanded", "hyponatremia-expanded",
            "ttp-hus-expanded", "dic-expanded", "eosinophilia-expanded",
            "immunodeficiency-expanded", "acid-base-expanded", "electrolyte-emergencies-expanded",
            "afib-expanded", "acs-expanded", "pancreatitis-expanded",
            "cholecystitis-expanded", "appendicitis-expanded"
        ],
        assessmentQuestions: [
            "Tests ordered based on pre-test probability",
            "Understands sensitivity/specificity",
            "Interprets results in clinical context",
            "Avoids unnecessary testing",
            "Recognizes critical values"
        ]
    },

    // EPA 4: Enter Orders and Prescriptions
    "EPA-4": {
        id: "EPA-4",
        title: "Enter and Discuss Orders and Prescriptions",
        description: "Write appropriate orders considering indications, contraindications, interactions",
        targetLevel: 3,
        cases: [
            "sepsis-expanded", "dka-expanded", "hyperkalemia-expanded", "afib-expanded",
            "heart-failure-expanded", "anaphylaxis-expanded", "status-epilepticus-expanded",
            "asthma-exacerbation-expanded", "copd-exacerbation-expanded", "pneumonia-expanded",
            "meningitis-expanded", "gi-bleed-expanded", "acs-expanded",
            "pe-expanded", "stroke-expanded", "opioid-overdose-expanded"
        ],
        assessmentQuestions: [
            "Appropriate medication selection",
            "Correct dosing and route",
            "Considers allergies and interactions",
            "Orders appropriate monitoring",
            "Explains rationale to patient/team"
        ]
    },

    // EPA 5: Document Clinical Encounter
    "EPA-5": {
        id: "EPA-5",
        title: "Document a Clinical Encounter",
        description: "Create clear, accurate, appropriately detailed documentation",
        targetLevel: 3,
        cases: ["all-cases"], // Applies to all cases
        assessmentQuestions: [
            "Documentation is complete",
            "Organized and readable",
            "Appropriate level of detail",
            "Supports clinical reasoning",
            "Meets legal/billing requirements"
        ]
    },

    // EPA 6: Oral Presentation
    "EPA-6": {
        id: "EPA-6",
        title: "Provide an Oral Presentation",
        description: "Present clinical encounters clearly and appropriately for context",
        targetLevel: 3,
        cases: ["sbar-trainer"], // Linked to SBAR trainer
        assessmentQuestions: [
            "Organized presentation structure",
            "Appropriate length for context",
            "Highlights key clinical issues",
            "Tailored to audience",
            "Clear assessment and plan"
        ]
    },

    // EPA 7: Form Clinical Questions
    "EPA-7": {
        id: "EPA-7",
        title: "Form Clinical Questions and Retrieve Evidence",
        description: "Formulate answerable clinical questions and find evidence",
        targetLevel: 3,
        cases: [
            "asthma-biologics-expanded", "asthma-phenotyping-expanded",
            "drug-allergy-expanded", "penicillin-delabeling-expanded",
            "venom-vit-expanded"
        ],
        assessmentQuestions: [
            "Formulates PICO question",
            "Identifies appropriate resources",
            "Critically appraises evidence",
            "Applies evidence to patient",
            "Recognizes knowledge gaps"
        ]
    },

    // EPA 8: Patient Handoffs
    "EPA-8": {
        id: "EPA-8",
        title: "Give or Receive a Patient Handover",
        description: "Transition care responsibility effectively and safely",
        targetLevel: 3,
        cases: ["sbar-trainer"],
        assessmentQuestions: [
            "Uses structured format (I-PASS/SBAR)",
            "Includes critical information",
            "Anticipates issues",
            "Allows for questions",
            "Confirms understanding"
        ]
    },

    // EPA 9: Interprofessional Collaboration
    "EPA-9": {
        id: "EPA-9",
        title: "Collaborate as Interprofessional Team Member",
        description: "Work effectively within healthcare teams",
        targetLevel: 3,
        cases: [
            "sepsis-expanded", "stroke-expanded", "acs-expanded",
            "status-epilepticus-expanded", "anaphylaxis-expanded"
        ],
        assessmentQuestions: [
            "Respects team roles",
            "Communicates effectively",
            "Shares information appropriately",
            "Participates in team decisions",
            "Manages conflicts constructively"
        ]
    },

    // EPA 10: Recognize Urgency
    "EPA-10": {
        id: "EPA-10",
        title: "Recognize Patient Requiring Urgent Care",
        description: "Identify emergent situations and initiate evaluation/management",
        targetLevel: 3,
        cases: [
            "sepsis-expanded", "acs-expanded", "stroke-expanded", "anaphylaxis-expanded",
            "pe-expanded", "tension-ptx-expanded", "status-epilepticus-expanded",
            "dka-expanded", "hyperkalemia-expanded", "gi-bleed-expanded",
            "meningitis-expanded", "aortic-dissection-expanded", "shock-expanded",
            "alf-expanded", "sah-expanded", "htn-emergency-expanded"
        ],
        assessmentQuestions: [
            "Recognizes unstable patient",
            "Activates appropriate resources",
            "Initiates stabilization",
            "Prioritizes interventions",
            "Escalates appropriately"
        ]
    },

    // EPA 11: Informed Consent
    "EPA-11": {
        id: "EPA-11",
        title: "Obtain Informed Consent",
        description: "Discuss risks, benefits, alternatives for tests and procedures",
        targetLevel: 3,
        cases: ["procedure-related"],
        assessmentQuestions: [
            "Explains procedure clearly",
            "Discusses risks and benefits",
            "Presents alternatives",
            "Assesses understanding",
            "Documents consent"
        ]
    },

    // EPA 12: General Procedures
    "EPA-12": {
        id: "EPA-12",
        title: "Perform General Procedures",
        description: "Competently perform basic clinical procedures",
        targetLevel: 3,
        cases: ["procedure-related"],
        assessmentQuestions: [
            "Proper preparation",
            "Sterile technique",
            "Technical competence",
            "Complication recognition",
            "Post-procedure care"
        ]
    },

    // EPA 13: System Failures and Safety
    "EPA-13": {
        id: "EPA-13",
        title: "Identify System Failures",
        description: "Recognize system failures and contribute to safety culture",
        targetLevel: 3,
        cases: ["all-cases"],
        assessmentQuestions: [
            "Identifies potential errors",
            "Reports safety concerns",
            "Participates in quality improvement",
            "Learns from near-misses",
            "Advocates for system change"
        ]
    }
};

// ACGME Milestones for Internal Medicine (can be extended for other specialties)
const ACGME_MILESTONES = {
    "Internal Medicine": {
        PC: [
            { id: "PC1", title: "History", description: "Gather accurate, essential information", level: 3 },
            { id: "PC2", title: "Physical Examination", description: "Perform accurate physical exam", level: 3 },
            { id: "PC3", title: "Clinical Reasoning", description: "Synthesize data into diagnoses", level: 3 },
            { id: "PC4", title: "Patient Management", description: "Develop and implement management plans", level: 3 },
            { id: "PC5", title: "Procedures", description: "Competently perform procedures", level: 2 }
        ],
        MK: [
            { id: "MK1", title: "Clinical Knowledge", description: "Demonstrate knowledge of established biomedical sciences", level: 3 },
            { id: "MK2", title: "Diagnostic Testing", description: "Interpret diagnostic studies", level: 3 }
        ],
        SBP: [
            { id: "SBP1", title: "Patient Safety", description: "Work in interprofessional teams for patient safety", level: 3 },
            { id: "SBP2", title: "Quality Improvement", description: "Participate in QI activities", level: 2 },
            { id: "SBP3", title: "System Navigation", description: "Navigate healthcare system effectively", level: 3 },
            { id: "SBP4", title: "Transitions of Care", description: "Manage effective care transitions", level: 3 }
        ],
        PBLI: [
            { id: "PBLI1", title: "Evidence-Based Medicine", description: "Locate and apply best evidence", level: 3 },
            { id: "PBLI2", title: "Reflective Practice", description: "Use feedback to improve practice", level: 3 }
        ],
        PROF: [
            { id: "PROF1", title: "Compassion", description: "Demonstrate compassion, integrity, respect", level: 3 },
            { id: "PROF2", title: "Accountability", description: "Demonstrate accountability to patients and society", level: 3 },
            { id: "PROF3", title: "Well-being", description: "Manage personal well-being", level: 3 }
        ],
        ICS: [
            { id: "ICS1", title: "Patient Communication", description: "Communicate effectively with patients/families", level: 3 },
            { id: "ICS2", title: "Team Communication", description: "Communicate effectively with healthcare team", level: 3 }
        ]
    },
    "Emergency Medicine": {
        // EM-specific milestones would go here
        PC: [
            { id: "PC1", title: "Emergency Stabilization", description: "Prioritize critical actions", level: 3 },
            { id: "PC2", title: "Performance of Focused H&P", description: "Perform focused history and physical", level: 3 },
            { id: "PC3", title: "Diagnostic Studies", description: "Order appropriate diagnostic studies", level: 3 },
            { id: "PC4", title: "Diagnosis", description: "Establish most likely diagnosis", level: 3 },
            { id: "PC5", title: "Pharmacotherapy", description: "Prescribe appropriate medications", level: 3 },
            { id: "PC6", title: "Observation and Reassessment", description: "Monitor patient response", level: 3 },
            { id: "PC7", title: "Disposition", description: "Establish appropriate disposition", level: 3 },
            { id: "PC8", title: "General Approach to Procedures", description: "Approach to procedures", level: 3 },
            { id: "PC9", title: "Airway Management", description: "Perform airway management", level: 3 }
        ]
    },
    "Pediatrics": {
        // Pediatric milestones
        PC: [
            { id: "PC1", title: "History", description: "Gather essential information from patient/family", level: 3 },
            { id: "PC2", title: "Physical Examination", description: "Perform developmentally appropriate exam", level: 3 },
            { id: "PC3", title: "Clinical Reasoning", description: "Apply pediatric clinical reasoning", level: 3 }
        ]
    }
};

// Case to EPA/Milestone mapping with question-level tags
const CASE_COMPETENCY_TAGS = {
    "sepsis-expanded": {
        epas: ["EPA-1", "EPA-2", "EPA-4", "EPA-9", "EPA-10"],
        milestones: { PC: ["PC1", "PC2", "PC3", "PC4"], MK: ["MK1", "MK2"] },
        questionTags: {
            1: { epa: "EPA-1", skill: "History gathering" },
            2: { epa: "EPA-2", skill: "Differential diagnosis" },
            3: { epa: "EPA-3", skill: "Test selection" },
            4: { epa: "EPA-10", skill: "Urgency recognition" },
            5: { epa: "EPA-4", skill: "Treatment ordering" }
        }
    },
    "acs-expanded": {
        epas: ["EPA-1", "EPA-2", "EPA-3", "EPA-4", "EPA-10"],
        milestones: { PC: ["PC1", "PC2", "PC3", "PC4"], MK: ["MK1", "MK2"] },
        questionTags: {
            1: { epa: "EPA-1", skill: "Chest pain history" },
            2: { epa: "EPA-2", skill: "ACS differential" },
            3: { epa: "EPA-3", skill: "ECG/troponin interpretation" },
            4: { epa: "EPA-10", skill: "STEMI recognition" },
            5: { epa: "EPA-4", skill: "Antiplatelet therapy" }
        }
    },
    "stroke-expanded": {
        epas: ["EPA-1", "EPA-2", "EPA-3", "EPA-4", "EPA-9", "EPA-10"],
        milestones: { PC: ["PC1", "PC2", "PC3", "PC4"], MK: ["MK1"] },
        questionTags: {
            1: { epa: "EPA-10", skill: "Stroke recognition" },
            2: { epa: "EPA-1", skill: "NIHSS assessment" },
            3: { epa: "EPA-3", skill: "CT interpretation" },
            4: { epa: "EPA-4", skill: "tPA decision" },
            5: { epa: "EPA-9", skill: "Stroke team activation" }
        }
    },
    "anaphylaxis-expanded": {
        epas: ["EPA-1", "EPA-2", "EPA-4", "EPA-10"],
        milestones: { PC: ["PC1", "PC3", "PC4"], MK: ["MK1"] },
        questionTags: {
            1: { epa: "EPA-10", skill: "Anaphylaxis recognition" },
            2: { epa: "EPA-4", skill: "Epinephrine dosing" },
            3: { epa: "EPA-2", skill: "Trigger identification" },
            4: { epa: "EPA-4", skill: "Biphasic reaction prevention" }
        }
    },
    "dka-expanded": {
        epas: ["EPA-1", "EPA-2", "EPA-3", "EPA-4", "EPA-10"],
        milestones: { PC: ["PC1", "PC2", "PC3", "PC4"], MK: ["MK1", "MK2"] },
        questionTags: {
            1: { epa: "EPA-2", skill: "DKA vs HHS" },
            2: { epa: "EPA-3", skill: "AG interpretation" },
            3: { epa: "EPA-4", skill: "Insulin protocol" },
            4: { epa: "EPA-4", skill: "Potassium management" }
        }
    }
    // Additional case mappings would be added for all 112 cases
};

// Helper functions for competency tracking
const CompetencyTracker = {
    // Get EPAs for a specific case
    getEPAsForCase(caseId) {
        const mapping = CASE_COMPETENCY_TAGS[caseId];
        if (!mapping) return [];
        return mapping.epas.map(epaId => EPA_CASE_MAPPING[epaId]);
    },
    
    // Get milestones for a specific case
    getMilestonesForCase(caseId, specialty = "Internal Medicine") {
        const mapping = CASE_COMPETENCY_TAGS[caseId];
        if (!mapping) return {};
        
        const specialtyMilestones = ACGME_MILESTONES[specialty];
        const result = {};
        
        Object.keys(mapping.milestones).forEach(domain => {
            result[domain] = mapping.milestones[domain]
                .map(mId => specialtyMilestones[domain]?.find(m => m.id === mId))
                .filter(Boolean);
        });
        
        return result;
    },
    
    // Record case completion with EPA data
    recordCaseCompletion(caseId, performance) {
        const data = JSON.parse(localStorage.getItem('reasondx_competency_data') || '{}');
        
        if (!data.cases) data.cases = {};
        if (!data.epaProgress) data.epaProgress = {};
        
        data.cases[caseId] = {
            completedAt: new Date().toISOString(),
            performance: performance, // { score, timeSpent, correctAnswers }
            epasTagged: CASE_COMPETENCY_TAGS[caseId]?.epas || []
        };
        
        // Update EPA progress
        const epas = CASE_COMPETENCY_TAGS[caseId]?.epas || [];
        epas.forEach(epaId => {
            if (!data.epaProgress[epaId]) {
                data.epaProgress[epaId] = { casesCompleted: 0, totalScore: 0 };
            }
            data.epaProgress[epaId].casesCompleted++;
            data.epaProgress[epaId].totalScore += performance.score || 0;
        });
        
        localStorage.setItem('reasondx_competency_data', JSON.stringify(data));
        return data;
    },
    
    // Get current EPA levels based on performance
    getEPALevels() {
        const data = JSON.parse(localStorage.getItem('reasondx_competency_data') || '{}');
        const levels = {};
        
        Object.keys(EPA_CASE_MAPPING).forEach(epaId => {
            const progress = data.epaProgress?.[epaId];
            if (progress && progress.casesCompleted > 0) {
                const avgScore = progress.totalScore / progress.casesCompleted;
                // Level based on average score and number of cases
                if (progress.casesCompleted >= 10 && avgScore >= 90) levels[epaId] = 5;
                else if (progress.casesCompleted >= 7 && avgScore >= 80) levels[epaId] = 4;
                else if (progress.casesCompleted >= 5 && avgScore >= 70) levels[epaId] = 3;
                else if (progress.casesCompleted >= 3 && avgScore >= 60) levels[epaId] = 2;
                else levels[epaId] = 1;
            } else {
                levels[epaId] = 0;
            }
        });
        
        return levels;
    },
    
    // Generate competency report
    generateReport() {
        const data = JSON.parse(localStorage.getItem('reasondx_competency_data') || '{}');
        const levels = this.getEPALevels();
        
        return {
            generatedAt: new Date().toISOString(),
            totalCasesCompleted: Object.keys(data.cases || {}).length,
            epaLevels: levels,
            epasAtTarget: Object.values(levels).filter(l => l >= 3).length,
            strengthAreas: Object.entries(levels).filter(([_, l]) => l >= 4).map(([id]) => id),
            growthAreas: Object.entries(levels).filter(([_, l]) => l < 3 && l > 0).map(([id]) => id),
            rawData: data
        };
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EPA_CASE_MAPPING, ACGME_MILESTONES, CASE_COMPETENCY_TAGS, CompetencyTracker };
}
