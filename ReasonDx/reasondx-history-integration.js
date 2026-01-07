/**
 * ReasonDx History Integration Module
 * Version 1.0 | December 2024
 * 
 * This module integrates:
 * - Patient Response Engine (question matching)
 * - Patient Background Library (social history, PMH, etc.)
 * - Chief Complaint Templates (diagnosis-specific HPI)
 * 
 * USAGE:
 * 1. Each case defines minimal "criticalAnswers" for diagnosis-specific content
 * 2. Each case defines a "patientProfile" for background generation
 * 3. The system matches student questions and generates appropriate responses
 */

const ReasonDxHistoryIntegration = (function() {
    'use strict';

    // ============================================================
    // CASE DATA SCHEMA
    // This is the structure each case should follow
    // ============================================================
    
    const caseDataSchema = {
        // Required: Basic case info
        caseId: "string",
        diagnosis: "string",  // Primary diagnosis
        chiefComplaint: "string",
        
        // Required: Patient demographics
        patientProfile: {
            name: "string",
            age: "number",
            gender: "string",
            
            // For background library selection
            smokingStatus: "never|former|current|social|vaping",
            alcoholUse: "none|social|moderate|heavy|inRecovery",
            drugUse: "none|marijuana|pastUse|current",
            occupationType: "office|healthcare|blueCollar|service|retired|student|unemployed",
            livingType: "withFamily|alone|withRoommates|assistedLiving|homeless",
            
            // Medical background
            pmhCategory: "healthy|hypertension|diabetes|cardiac|pulmonary|multipleComorbidities",
            surgicalCategory: "none|common|cardiac|orthopedic|multiple",
            allergyType: "none|common|multiple|serious|environmental",
            familyHistoryType: "noSignificant|cardiac|cancer|diabetes|mixed|psychiatric|unknown",
            
            // Flags for medication selection
            hasComorbidities: "boolean",
            hasCardiacHistory: "boolean",
            hasPsychHistory: "boolean",
            hasPainCondition: "boolean"
        },
        
        // Required: Case-critical answers that MUST be specific to this case
        // These override template/background responses
        criticalAnswers: {
            // HPI elements specific to this presentation
            onset: "string or array",
            location: "string or array",
            quality: "string or array",
            radiation: "string or array",
            severity: "string or array",
            timing: "string or array",
            aggravating: "string or array",
            alleviating: "string or array",
            associated: "string or array",
            
            // Any PMH/meds/allergies critical to the case
            medications: "string (if case-critical)",
            allergies: "string (if case-critical)",
            pmh: "string (if case-critical)"
        },
        
        // Optional: Specific medications for this patient
        specificMedications: ["list of actual meds"],
        
        // Optional: Placeholders for template filling
        duration: "string (e.g., '2 hours')",
        activityAtOnset: "string (e.g., 'climbing stairs')"
    };

    // ============================================================
    // EXAMPLE CASE: Chest Pain - ACS
    // ============================================================
    
    const exampleCaseACS = {
        caseId: "chest-pain-acs-001",
        diagnosis: "NSTEMI",
        chiefComplaint: "Chest pressure for 2 hours",
        
        patientProfile: {
            name: "Robert",
            age: 62,
            gender: "male",
            smokingStatus: "former",
            alcoholUse: "social",
            drugUse: "none",
            occupationType: "retired",
            livingType: "withFamily",
            pmhCategory: "multipleComorbidities",
            surgicalCategory: "none",
            allergyType: "none",
            familyHistoryType: "cardiac",
            hasComorbidities: true,
            hasCardiacHistory: false,  // First cardiac event
            hasPsychHistory: false,
            hasPainCondition: false
        },
        
        // These are case-critical - they define THIS patient's presentation
        criticalAnswers: {
            onset: [
                "It started about 2 hours ago while I was mowing the lawn.",
                "Started a couple hours ago. I was doing yard work.",
                "It came on gradually about 2 hours ago while I was outside working."
            ],
            location: [
                "Right here in the center of my chest. [places whole hand on sternum]",
                "All across my chest - hard to point to one spot."
            ],
            quality: [
                "Like a pressure, like someone sitting on my chest.",
                "Heavy, squeezing feeling. Not really a sharp pain.",
                "Like an elephant sitting on my chest."
            ],
            radiation: [
                "Yes, down my left arm to my wrist.",
                "My left arm feels heavy and tingly."
            ],
            severity: [
                "Maybe a 7 or 8 out of 10.",
                "Pretty bad - worst chest discomfort I've ever had."
            ],
            timing: [
                "It's been constant for 2 hours. Hasn't gone away.",
                "It's been there since it started - doesn't let up."
            ],
            aggravating: [
                "Walking makes it worse. I had to sit down.",
                "Any exertion makes it worse."
            ],
            alleviating: [
                "Resting helps a little but it doesn't go away completely.",
                "Nothing really makes it better. I tried antacids - didn't help."
            ],
            associated: [
                "I'm sweating a lot and feel nauseous.",
                "I feel short of breath and broke out in a cold sweat.",
                "I'm nauseated and my arm is tingling."
            ],
            
            // Case-critical medical info
            pmh: "I have high blood pressure, diabetes, and high cholesterol.",
            medications: "Lisinopril, metformin, and atorvastatin. Also baby aspirin.",
            allergies: "No allergies to medications.",
            familyHistory: "My father had a heart attack at 58. My brother had one at 52."
        },
        
        duration: "2 hours",
        activityAtOnset: "mowing the lawn"
    };

    // ============================================================
    // EXAMPLE CASE: Syncope - Vasovagal
    // ============================================================
    
    const exampleCaseVasovagal = {
        caseId: "syncope-vasovagal-001",
        diagnosis: "Vasovagal Syncope",
        chiefComplaint: "I passed out at the doctor's office",
        
        patientProfile: {
            name: "Jennifer",
            age: 28,
            gender: "female",
            smokingStatus: "never",
            alcoholUse: "social",
            drugUse: "none",
            occupationType: "office",
            livingType: "withFamily",
            pmhCategory: "healthy",
            surgicalCategory: "none",
            allergyType: "none",
            familyHistoryType: "noSignificant",
            hasComorbidities: false,
            hasCardiacHistory: false,
            hasPsychHistory: false,
            hasPainCondition: false
        },
        
        criticalAnswers: {
            onset: [
                "It happened about an hour ago at my doctor's office. I was getting blood drawn.",
                "I was at my annual checkup, getting blood work done, and next thing I knew I was on the floor."
            ],
            prodrome: [
                "I started feeling warm and sweaty, then my vision went gray around the edges.",
                "I felt lightheaded and nauseated, then everything went black.",
                "I felt hot, started sweating, my hearing got muffled, then I woke up on the floor."
            ],
            duration: [
                "I was only out for a few seconds - maybe 10 or 15 seconds.",
                "The nurse said I was out for less than a minute."
            ],
            recovery: [
                "I felt tired and weak for about 30 minutes afterward, but then I was fine.",
                "I was sweaty and a little nauseous after, but recovered pretty quickly."
            ],
            priorEpisodes: [
                "This has happened before when I've gotten blood drawn. Maybe twice before.",
                "I've always been prone to fainting around blood or needles."
            ],
            trigger: [
                "It was the blood draw. I'm not good with needles.",
                "Definitely the needle. I looked away but still felt queasy."
            ],
            
            // Case-critical negatives
            exertional: "No, it only happened at the doctor's office. Never with exercise.",
            chestPain: "No chest pain at all.",
            palpitations: "No racing or pounding heart before it happened.",
            familyHistory: "No one in my family has died suddenly or anything like that."
        },
        
        duration: "a few seconds"
    };

    // ============================================================
    // MAIN INTEGRATION FUNCTION
    // This is called when a student asks a question
    // ============================================================
    
    function handleStudentQuestion(questionText, caseData) {
        // Step 1: Detect what category of question this is
        const match = window.ReasonDxPatientResponseEngine.detectQuestionCategory(questionText);
        
        if (!match.category || match.confidence < 1) {
            return {
                response: generateConfusedResponse(),
                source: 'fallback',
                category: 'unknown'
            };
        }

        // Step 2: Check case-critical answers first
        if (caseData.criticalAnswers && caseData.criticalAnswers[match.category]) {
            const answers = caseData.criticalAnswers[match.category];
            const response = Array.isArray(answers) ? 
                selectRandom(answers) : answers;
            return {
                response: fillPlaceholders(response, caseData),
                source: 'case-critical',
                category: match.category
            };
        }

        // Step 3: Check diagnosis-specific template
        const templateLib = getTemplateLibrary(caseData.chiefComplaint);
        if (templateLib) {
            const diagnosisKey = getDiagnosisKey(caseData.diagnosis);
            if (templateLib.hpiTemplates && 
                templateLib.hpiTemplates[diagnosisKey] &&
                templateLib.hpiTemplates[diagnosisKey][match.category]) {
                const answers = templateLib.hpiTemplates[diagnosisKey][match.category];
                const response = Array.isArray(answers) ? 
                    selectRandom(answers) : answers;
                return {
                    response: fillPlaceholders(response, caseData),
                    source: 'template',
                    category: match.category
                };
            }
        }

        // Step 4: Check background library
        const backgroundResponse = getBackgroundResponse(match.category, caseData.patientProfile);
        if (backgroundResponse) {
            return {
                response: backgroundResponse,
                source: 'background',
                category: match.category
            };
        }

        // Step 5: Generate a reasonable fallback
        return {
            response: generateGenericResponse(match.category),
            source: 'fallback',
            category: match.category
        };
    }

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    
    function selectRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function fillPlaceholders(text, caseData) {
        if (!text || typeof text !== 'string') return text;
        
        return text
            .replace(/{duration}/g, caseData.duration || '2 hours')
            .replace(/{activity}/g, caseData.activityAtOnset || 'resting')
            .replace(/{age}/g, caseData.patientProfile?.age || '55')
            .replace(/{name}/g, caseData.patientProfile?.name || 'the patient');
    }

    function getTemplateLibrary(chiefComplaint) {
        const lowerCC = chiefComplaint.toLowerCase();
        
        if (lowerCC.includes('chest') || lowerCC.includes('pressure')) {
            return window.ChestPainCaseTemplates;
        } else if (lowerCC.includes('breath') || lowerCC.includes('dyspnea') || lowerCC.includes('cough')) {
            return window.DyspneaTemplates;
        } else if (lowerCC.includes('headache') || lowerCC.includes('head')) {
            return window.HeadacheTemplates;
        } else if (lowerCC.includes('abdominal') || lowerCC.includes('stomach') || lowerCC.includes('belly')) {
            return window.AbdominalPainTemplates;
        } else if (lowerCC.includes('fever') || lowerCC.includes('infection')) {
            return window.FeverTemplates;
        } else if (lowerCC.includes('syncope') || lowerCC.includes('passed out') || lowerCC.includes('faint')) {
            return window.SyncopeTemplates;
        }
        
        return null;
    }

    function getDiagnosisKey(diagnosis) {
        if (!diagnosis) return null;
        const lowerDx = diagnosis.toLowerCase();
        
        // Map diagnosis strings to template keys
        const keyMap = {
            'acs': ['acs', 'acute coronary', 'nstemi', 'stemi', 'heart attack', 'mi ', 'myocardial'],
            'pe': ['pulmonary embolism', 'pe'],
            'aorticDissection': ['dissection', 'aortic'],
            'pneumonia': ['pneumonia', 'cap'],
            'heartFailure': ['heart failure', 'chf', 'adhf'],
            'copdExacerbation': ['copd', 'chronic obstructive'],
            'asthma': ['asthma'],
            'appendicitis': ['appendicitis', 'appendix'],
            'cholecystitis': ['cholecystitis', 'gallbladder'],
            'pancreatitis': ['pancreatitis'],
            'sbo': ['bowel obstruction', 'sbo', 'obstruction'],
            'sah': ['subarachnoid', 'sah', 'aneurysm'],
            'meningitis': ['meningitis'],
            'migraine': ['migraine'],
            'sepsis': ['sepsis', 'septic'],
            'uti': ['uti', 'urinary tract', 'cystitis'],
            'vasovagalSyncope': ['vasovagal', 'fainting', 'blood draw'],
            'cardiacSyncope': ['cardiac syncope', 'arrhythmia']
        };

        for (const [key, patterns] of Object.entries(keyMap)) {
            for (const pattern of patterns) {
                if (lowerDx.includes(pattern)) {
                    return key;
                }
            }
        }
        return null;
    }

    function getBackgroundResponse(category, patientProfile) {
        if (!window.PatientBackgroundLibrary) return null;
        
        const lib = window.PatientBackgroundLibrary;
        return lib.getResponseForProfile(category, patientProfile || {});
    }

    function generateConfusedResponse() {
        const responses = [
            "I'm not sure I understand what you're asking.",
            "Could you rephrase that?",
            "I don't quite follow - can you ask that differently?",
            "Hmm, I'm not sure what you mean.",
            "What do you mean exactly?"
        ];
        return selectRandom(responses);
    }

    function generateGenericResponse(category) {
        const responses = {
            pmh: "I'm pretty healthy overall.",
            medications: "Just the usual - nothing special.",
            allergies: "No allergies that I know of.",
            familyHistory: "No major diseases run in my family.",
            smoking: "No, I don't smoke.",
            alcohol: "Just socially, nothing heavy.",
            drugs: "No recreational drugs.",
            default: "I'm not sure about that."
        };
        
        return responses[category] || responses.default;
    }

    // ============================================================
    // PUBLIC API
    // ============================================================
    
    return {
        handleStudentQuestion: handleStudentQuestion,
        caseDataSchema: caseDataSchema,
        exampleCases: {
            acs: exampleCaseACS,
            vasovagal: exampleCaseVasovagal
        }
    };

})();

// Export for use in ReasonDx
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ReasonDxHistoryIntegration;
}
if (typeof window !== 'undefined') {
    window.ReasonDxHistoryIntegration = ReasonDxHistoryIntegration;
}
