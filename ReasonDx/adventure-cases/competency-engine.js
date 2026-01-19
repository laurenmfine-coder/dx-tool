/**
 * ReasonDx Unified Competency Assessment Engine
 * Handles both EPAs (UME) and ACGME Milestones (GME)
 * Based on stakeholder analysis requirements
 */

const UnifiedCompetencyEngine = {
    // Learner profile
    profile: null,
    
    // Initialize from localStorage or set defaults
    init() {
        const saved = localStorage.getItem('reasondx_profile');
        if (saved) {
            this.profile = JSON.parse(saved);
        }
        return this.profile;
    },
    
    // Set learner profile
    setProfile(profile) {
        this.profile = profile;
        localStorage.setItem('reasondx_profile', JSON.stringify(profile));
    },
    
    // EPA Definitions (AAMC Core EPAs)
    EPAs: {
        'EPA-1': {
            title: 'Gather History & Perform Physical Exam',
            description: 'Gather a history and perform a physical examination',
            levels: {
                1: 'Requires direct supervision for all components',
                2: 'Performs with coaching; misses key findings',
                3: 'Performs independently; occasional gaps',
                4: 'Performs thoroughly and efficiently',
                5: 'Role model; teaches others'
            }
        },
        'EPA-2': {
            title: 'Prioritize Differential Diagnosis',
            description: 'Prioritize a differential diagnosis following a clinical encounter',
            levels: {
                1: 'Limited differential; misses key diagnoses',
                2: 'Generates list but poor prioritization',
                3: 'Appropriate DDx with reasonable prioritization',
                4: 'Expert prioritization using Bayesian reasoning',
                5: 'Teaches diagnostic reasoning to others'
            }
        },
        'EPA-3': {
            title: 'Recommend & Interpret Tests',
            description: 'Recommend and interpret common diagnostic and screening tests',
            levels: {
                1: 'Orders inappropriately; cannot interpret',
                2: 'Basic ordering; limited interpretation',
                3: 'Appropriate ordering; accurate interpretation',
                4: 'Optimal test selection considering pretest probability',
                5: 'Expert stewardship; teaches interpretation'
            }
        },
        'EPA-4': {
            title: 'Enter Orders & Prescriptions',
            description: 'Enter and discuss orders and prescriptions',
            levels: {
                1: 'Requires step-by-step guidance',
                2: 'Enters with supervision; some errors',
                3: 'Independent ordering with appropriate safety checks',
                4: 'Efficient, safe ordering; anticipates needs',
                5: 'Optimizes workflows; teaches others'
            }
        },
        'EPA-5': {
            title: 'Document Clinical Encounter',
            description: 'Document a clinical encounter in the patient record',
            levels: {
                1: 'Incomplete or disorganized notes',
                2: 'Complete but verbose or unfocused',
                3: 'Clear, accurate, appropriately detailed',
                4: 'Exemplary documentation; efficient',
                5: 'Sets documentation standards'
            }
        },
        'EPA-6': {
            title: 'Oral Presentation',
            description: 'Provide an oral presentation of a clinical encounter',
            levels: {
                1: 'Disorganized; misses key information',
                2: 'Follows structure but inefficient',
                3: 'Clear, organized, appropriate detail',
                4: 'Tailors to audience; highlights key issues',
                5: 'Expert presenter; teaches presentation skills'
            }
        },
        'EPA-7': {
            title: 'Form Clinical Questions',
            description: 'Form clinical questions and retrieve evidence',
            levels: {
                1: 'Cannot formulate searchable questions',
                2: 'Basic PICO; limited search skills',
                3: 'Well-formed questions; finds relevant evidence',
                4: 'Efficient evidence retrieval; appraises critically',
                5: 'Leads evidence-based practice initiatives'
            }
        },
        'EPA-8': {
            title: 'Patient Handoffs',
            description: 'Give or receive a patient handover to transition care responsibility',
            levels: {
                1: 'Incomplete; misses critical information',
                2: 'Uses structure but gaps in content',
                3: 'Comprehensive, structured handoffs',
                4: 'Anticipates contingencies; ensures understanding',
                5: 'Designs handoff systems; teaches others'
            }
        },
        'EPA-9': {
            title: 'Collaborate as Team Member',
            description: 'Collaborate as a member of an interprofessional team',
            levels: {
                1: 'Works in isolation; poor communication',
                2: 'Participates but limited initiative',
                3: 'Active team member; respects roles',
                4: 'Facilitates team function; resolves conflicts',
                5: 'Leads interprofessional initiatives'
            }
        },
        'EPA-10': {
            title: 'Recognize Urgency',
            description: 'Recognize a patient requiring urgent care and initiate evaluation',
            levels: {
                1: 'Fails to recognize urgency',
                2: 'Recognizes obvious emergencies only',
                3: 'Identifies most urgent situations; initiates care',
                4: 'Early recognition; efficient stabilization',
                5: 'Leads resuscitations; teaches emergency care'
            }
        },
        'EPA-11': {
            title: 'Informed Consent',
            description: 'Obtain informed consent for tests and/or procedures',
            levels: {
                1: 'Incomplete disclosure; poor communication',
                2: 'Covers basics but misses nuances',
                3: 'Thorough consent process; answers questions',
                4: 'Excellent shared decision-making',
                5: 'Teaches consent skills; handles complex cases'
            }
        },
        'EPA-12': {
            title: 'Perform General Procedures',
            description: 'Perform general procedures of a physician',
            levels: {
                1: 'Requires direct supervision throughout',
                2: 'Performs with guidance; technique developing',
                3: 'Independent for common procedures',
                4: 'Proficient; manages complications',
                5: 'Expert proceduralist; teaches others'
            }
        },
        'EPA-13': {
            title: 'Patient Safety & Quality',
            description: 'Identify system failures and contribute to a culture of safety',
            levels: {
                1: 'Does not recognize system issues',
                2: 'Identifies obvious failures',
                3: 'Reports safety concerns; participates in QI',
                4: 'Leads safety initiatives',
                5: 'Designs system improvements'
            }
        }
    },
    
    // ACGME Milestones by Specialty
    Milestones: {
        'IM': { // Internal Medicine
            name: 'Internal Medicine',
            milestones: {
                'PC-1': { title: 'History & Physical', category: 'Patient Care' },
                'PC-2': { title: 'Clinical Reasoning', category: 'Patient Care' },
                'PC-3': { title: 'Organize & Prioritize', category: 'Patient Care' },
                'PC-4': { title: 'Consultation', category: 'Patient Care' },
                'PC-5': { title: 'Patient Management', category: 'Patient Care' },
                'PC-6': { title: 'Procedures', category: 'Patient Care' },
                'PC-7': { title: 'Transitions of Care', category: 'Patient Care' },
                'MK-1': { title: 'Knowledge Application', category: 'Medical Knowledge' },
                'MK-2': { title: 'Diagnostic Testing', category: 'Medical Knowledge' },
                'SBP-1': { title: 'Patient Safety', category: 'Systems-Based Practice' },
                'SBP-2': { title: 'Resource Stewardship', category: 'Systems-Based Practice' },
                'PBLI-1': { title: 'Evidence-Based Medicine', category: 'Practice-Based Learning' },
                'ICS-1': { title: 'Patient Communication', category: 'Interpersonal Skills' },
                'ICS-2': { title: 'Team Communication', category: 'Interpersonal Skills' }
            }
        },
        'FM': { // Family Medicine
            name: 'Family Medicine',
            milestones: {
                'PC-1': { title: 'Acute Care', category: 'Patient Care' },
                'PC-2': { title: 'Chronic Care', category: 'Patient Care' },
                'PC-3': { title: 'Clinical Reasoning', category: 'Patient Care' },
                'MK-1': { title: 'Medical Knowledge', category: 'Medical Knowledge' },
                'MK-2': { title: 'Diagnostic Reasoning', category: 'Medical Knowledge' }
            }
        },
        'EM': { // Emergency Medicine
            name: 'Emergency Medicine',
            milestones: {
                'PC-1': { title: 'Emergency Stabilization', category: 'Patient Care' },
                'PC-2': { title: 'Performance of Procedures', category: 'Patient Care' },
                'PC-3': { title: 'Diagnostic Studies', category: 'Patient Care' },
                'PC-4': { title: 'Diagnosis', category: 'Patient Care' },
                'PC-5': { title: 'Pharmacotherapy', category: 'Patient Care' },
                'PC-6': { title: 'Disposition', category: 'Patient Care' },
                'PC-7': { title: 'Multitasking', category: 'Patient Care' },
                'MK-1': { title: 'Medical Knowledge', category: 'Medical Knowledge' }
            }
        },
        'PED': { // Pediatrics
            name: 'Pediatrics',
            milestones: {
                'PC-1': { title: 'History & Physical', category: 'Patient Care' },
                'PC-2': { title: 'Clinical Reasoning', category: 'Patient Care' },
                'PC-3': { title: 'Patient Management', category: 'Patient Care' },
                'PC-4': { title: 'Urgent Care', category: 'Patient Care' },
                'PC-5': { title: 'Chronic Care', category: 'Patient Care' },
                'MK-1': { title: 'Medical Knowledge', category: 'Medical Knowledge' }
            }
        },
        'PSYCH': { // Psychiatry
            name: 'Psychiatry',
            milestones: {
                'PC-1': { title: 'Psychiatric Evaluation', category: 'Patient Care' },
                'PC-2': { title: 'Psychiatric Formulation', category: 'Patient Care' },
                'PC-3': { title: 'Treatment Planning', category: 'Patient Care' },
                'PC-4': { title: 'Medical Psychiatry', category: 'Patient Care' },
                'PC-5': { title: 'Emergency Psychiatry', category: 'Patient Care' },
                'MK-1': { title: 'Medical Knowledge', category: 'Medical Knowledge' }
            }
        },
        'OBGYN': { // OB/GYN
            name: 'OB/GYN',
            milestones: {
                'PC-1': { title: 'Obstetric Care', category: 'Patient Care' },
                'PC-2': { title: 'Gynecologic Care', category: 'Patient Care' },
                'PC-3': { title: 'Surgical Skills', category: 'Patient Care' },
                'PC-4': { title: 'Emergency Care', category: 'Patient Care' },
                'MK-1': { title: 'Medical Knowledge', category: 'Medical Knowledge' }
            }
        }
    },
    
    // Case category to competency mapping
    caseMapping: {
        'sepsis': {
            EPAs: ['EPA-2', 'EPA-3', 'EPA-4', 'EPA-10'],
            IM: ['PC-2', 'PC-3', 'PC-5', 'MK-1', 'MK-2'],
            FM: ['PC-1', 'PC-3', 'MK-1', 'MK-2'],
            EM: ['PC-1', 'PC-3', 'PC-4', 'PC-5', 'PC-6'],
            PED: ['PC-2', 'PC-4', 'PC-5', 'MK-1']
        },
        'acs': {
            EPAs: ['EPA-2', 'EPA-3', 'EPA-4', 'EPA-10'],
            IM: ['PC-2', 'PC-3', 'PC-5', 'MK-1', 'MK-2'],
            FM: ['PC-1', 'PC-3', 'MK-1'],
            EM: ['PC-1', 'PC-3', 'PC-4', 'PC-5', 'PC-6']
        },
        'stroke': {
            EPAs: ['EPA-1', 'EPA-2', 'EPA-3', 'EPA-10'],
            IM: ['PC-2', 'PC-5', 'MK-1', 'MK-2'],
            FM: ['PC-1', 'PC-3', 'MK-1'],
            EM: ['PC-1', 'PC-3', 'PC-4', 'PC-6']
        },
        'pe': {
            EPAs: ['EPA-2', 'EPA-3', 'EPA-10'],
            IM: ['PC-2', 'PC-5', 'MK-2'],
            FM: ['PC-1', 'PC-3', 'MK-1'],
            EM: ['PC-1', 'PC-3', 'PC-4']
        },
        'gi_bleed': {
            EPAs: ['EPA-2', 'EPA-3', 'EPA-4', 'EPA-10'],
            IM: ['PC-2', 'PC-3', 'PC-5', 'MK-1'],
            FM: ['PC-1', 'MK-1'],
            EM: ['PC-1', 'PC-3', 'PC-5', 'PC-6']
        },
        'dka': {
            EPAs: ['EPA-2', 'EPA-3', 'EPA-4', 'EPA-10'],
            IM: ['PC-2', 'PC-5', 'MK-1'],
            FM: ['PC-1', 'PC-3', 'MK-1'],
            EM: ['PC-1', 'PC-4', 'PC-5'],
            PED: ['PC-2', 'PC-4', 'MK-1']
        },
        'pneumonia': {
            EPAs: ['EPA-1', 'EPA-2', 'EPA-3', 'EPA-4'],
            IM: ['PC-1', 'PC-2', 'PC-5', 'MK-1'],
            FM: ['PC-1', 'PC-2', 'MK-1'],
            EM: ['PC-2', 'PC-3', 'PC-4'],
            PED: ['PC-1', 'PC-3', 'MK-1']
        },
        'anaphylaxis': {
            EPAs: ['EPA-4', 'EPA-10', 'EPA-12'],
            IM: ['PC-5', 'MK-1'],
            FM: ['PC-1', 'MK-1'],
            EM: ['PC-1', 'PC-5', 'PC-6'],
            PED: ['PC-4', 'MK-1']
        },
        'meningitis': {
            EPAs: ['EPA-1', 'EPA-2', 'EPA-3', 'EPA-10'],
            IM: ['PC-2', 'PC-5', 'MK-1', 'MK-2'],
            FM: ['PC-1', 'PC-3', 'MK-1'],
            EM: ['PC-1', 'PC-3', 'PC-4', 'PC-5'],
            PED: ['PC-2', 'PC-4', 'MK-1']
        },
        'aki': {
            EPAs: ['EPA-2', 'EPA-3', 'EPA-4'],
            IM: ['PC-2', 'PC-5', 'MK-1', 'MK-2'],
            FM: ['PC-2', 'MK-1'],
            EM: ['PC-3', 'PC-4']
        }
    },
    
    // Get competencies for a case based on profile
    getCompetenciesForCase(caseCategory) {
        const mapping = this.caseMapping[caseCategory];
        if (!mapping) return { primary: [], secondary: [] };
        
        if (!this.profile || this.profile.type === 'student') {
            // Return EPAs for medical students
            return {
                type: 'EPA',
                primary: mapping.EPAs.slice(0, 2),
                secondary: mapping.EPAs.slice(2)
            };
        } else {
            // Return specialty-specific milestones for residents
            const specialty = this.profile.specialty || 'IM';
            const milestones = mapping[specialty] || mapping.IM;
            return {
                type: 'Milestone',
                specialty: specialty,
                primary: milestones.slice(0, 2),
                secondary: milestones.slice(2)
            };
        }
    },
    
    // Get competency details
    getCompetencyDetails(code) {
        if (code.startsWith('EPA-')) {
            return this.EPAs[code];
        } else {
            // It's a milestone - find in specialty
            const specialty = this.profile?.specialty || 'IM';
            const milestones = this.Milestones[specialty]?.milestones;
            return milestones?.[code];
        }
    }
};

/**
 * Confidence Calibration System
 */
const CalibrationSystem = {
    // Store responses with confidence
    responses: [],
    
    // Record a response
    record(questionId, isCorrect, confidence) {
        this.responses.push({
            questionId,
            isCorrect,
            confidence,
            timestamp: Date.now()
        });
        this.saveToStorage();
    },
    
    // Calculate calibration score (lower is better)
    getCalibrationScore() {
        if (this.responses.length === 0) return null;
        
        let totalError = 0;
        this.responses.forEach(r => {
            const expected = r.confidence / 100;
            const actual = r.isCorrect ? 1 : 0;
            totalError += Math.abs(expected - actual);
        });
        
        return (totalError / this.responses.length * 100).toFixed(1);
    },
    
    // Get calibration feedback
    getFeedback(isCorrect, confidence) {
        if (confidence >= 80 && !isCorrect) {
            return {
                type: 'overconfident',
                message: '⚠️ Overconfidence detected. High confidence but incorrect answer. Consider what led to this certainty.',
                color: '#f87171'
            };
        } else if (confidence <= 40 && isCorrect) {
            return {
                type: 'underconfident',
                message: '💡 Trust your knowledge more! You got this right despite low confidence.',
                color: '#60a5fa'
            };
        } else if (confidence >= 70 && isCorrect) {
            return {
                type: 'well_calibrated',
                message: '✓ Well calibrated. High confidence matched by correct answer.',
                color: '#4ade80'
            };
        } else if (confidence <= 50 && !isCorrect) {
            return {
                type: 'appropriate_uncertainty',
                message: '📊 Appropriate uncertainty. You recognized you weren\'t sure.',
                color: '#a78bfa'
            };
        }
        return null;
    },
    
    // Save to localStorage
    saveToStorage() {
        const data = {
            responses: this.responses,
            lastUpdated: Date.now()
        };
        localStorage.setItem('reasondx_calibration', JSON.stringify(data));
    },
    
    // Load from localStorage
    loadFromStorage() {
        const saved = localStorage.getItem('reasondx_calibration');
        if (saved) {
            const data = JSON.parse(saved);
            this.responses = data.responses || [];
        }
    }
};

/**
 * EPA Portfolio Tracker
 */
const EPAPortfolio = {
    assessments: [],
    
    // Record an assessment
    recordAssessment(epaCode, level, caseId, caseName) {
        this.assessments.push({
            epaCode,
            level,
            caseId,
            caseName,
            timestamp: Date.now()
        });
        this.saveToStorage();
    },
    
    // Get current level for an EPA (average of last 5 assessments)
    getCurrentLevel(epaCode) {
        const relevant = this.assessments
            .filter(a => a.epaCode === epaCode)
            .slice(-5);
        
        if (relevant.length === 0) return null;
        
        const avg = relevant.reduce((sum, a) => sum + a.level, 0) / relevant.length;
        return Math.round(avg * 10) / 10;
    },
    
    // Get EPA summary
    getSummary() {
        const summary = {};
        Object.keys(UnifiedCompetencyEngine.EPAs).forEach(epa => {
            summary[epa] = {
                ...UnifiedCompetencyEngine.EPAs[epa],
                currentLevel: this.getCurrentLevel(epa),
                assessmentCount: this.assessments.filter(a => a.epaCode === epa).length
            };
        });
        return summary;
    },
    
    // Save/Load
    saveToStorage() {
        localStorage.setItem('reasondx_portfolio', JSON.stringify(this.assessments));
    },
    
    loadFromStorage() {
        const saved = localStorage.getItem('reasondx_portfolio');
        if (saved) {
            this.assessments = JSON.parse(saved);
        }
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    UnifiedCompetencyEngine.init();
    CalibrationSystem.loadFromStorage();
    EPAPortfolio.loadFromStorage();
});

// Export for use
window.UnifiedCompetencyEngine = UnifiedCompetencyEngine;
window.CalibrationSystem = CalibrationSystem;
window.EPAPortfolio = EPAPortfolio;
