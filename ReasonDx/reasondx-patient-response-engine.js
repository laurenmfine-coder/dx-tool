/**
 * ReasonDx Patient Response Engine
 * Version 1.0 | December 2024
 * 
 * This module handles matching student questions to appropriate patient responses
 * using fuzzy matching and keyword detection. It mimics natural patient conversation
 * without requiring an LLM.
 * 
 * ARCHITECTURE:
 * 1. Student asks a question (free text)
 * 2. Engine detects question category using keyword matching
 * 3. Engine retrieves appropriate response from:
 *    a) Case-critical data (specific to diagnosis)
 *    b) Template libraries (by chief complaint)
 *    c) Background library (generic PMH, social history, etc.)
 * 4. Response is randomly selected from available options for variety
 */

const ReasonDxPatientResponseEngine = (function() {
    'use strict';

    // ============================================================
    // QUESTION CATEGORY PATTERNS
    // Maps keywords/phrases to response categories
    // ============================================================
    
    const questionPatterns = {
        // OLDCARTS - History of Present Illness
        onset: {
            keywords: ['when', 'start', 'began', 'begin', 'how long', 'first notice', 'first time', 'onset', 'happen'],
            phrases: ['when did', 'how long ago', 'when did this', 'when did it', 'tell me when'],
            category: 'onset'
        },
        location: {
            keywords: ['where', 'location', 'which part', 'point', 'show me', 'localize'],
            phrases: ['where does it', 'where is the', 'show me where', 'point to', 'which area'],
            category: 'location'
        },
        duration: {
            keywords: ['how long', 'duration', 'last', 'constant', 'continuous', 'intermittent'],
            phrases: ['how long does', 'is it constant', 'come and go', 'how long has'],
            category: 'duration'
        },
        character: {
            keywords: ['what does', 'describe', 'feel like', 'type', 'kind', 'quality', 'character', 'nature'],
            phrases: ['what kind of', 'describe the', 'feels like', 'what type', 'can you describe'],
            category: 'quality'
        },
        radiation: {
            keywords: ['radiate', 'spread', 'travel', 'move', 'go to', 'anywhere else', 'other places'],
            phrases: ['does it radiate', 'does it spread', 'go anywhere else', 'does it move', 'anywhere else'],
            category: 'radiation'
        },
        severity: {
            keywords: ['how bad', 'severity', 'scale', 'rate', 'worst', 'intense', 'severe', '1 to 10', 'out of 10'],
            phrases: ['on a scale', 'how severe', 'how bad is', 'rate your', '1 to 10', 'out of 10'],
            category: 'severity'
        },
        timing: {
            keywords: ['timing', 'pattern', 'episode', 'frequency', 'often', 'constant', 'comes and goes'],
            phrases: ['how often', 'is it constant', 'any pattern', 'come and go', 'wax and wane'],
            category: 'timing'
        },
        aggravating: {
            keywords: ['worse', 'worsen', 'aggravate', 'trigger', 'provoke', 'exacerbate', 'brings on'],
            phrases: ['what makes it worse', 'anything worsen', 'triggers it', 'brings it on', 'makes it worse'],
            category: 'aggravating'
        },
        alleviating: {
            keywords: ['better', 'relief', 'relieve', 'help', 'improve', 'ease', 'alleviate'],
            phrases: ['what makes it better', 'anything help', 'anything relieve', 'makes it better', 'tried anything'],
            category: 'alleviating'
        },
        associated: {
            keywords: ['other symptoms', 'associated', 'along with', 'besides', 'anything else', 'accompanying'],
            phrases: ['any other symptoms', 'anything else', 'other problems', 'associated with', 'noticed anything else'],
            category: 'associated'
        },

        // PAST MEDICAL HISTORY
        pmh: {
            keywords: ['medical history', 'medical problems', 'medical conditions', 'diagnosed', 'chronic', 'diseases', 'illnesses', 'health problems', 'pmh'],
            phrases: ['medical history', 'medical problems', 'other conditions', 'been diagnosed', 'any diseases', 'health issues', 'past medical'],
            category: 'pmh'
        },
        surgeries: {
            keywords: ['surgery', 'surgeries', 'operation', 'operations', 'surgical', 'procedure'],
            phrases: ['any surgeries', 'any operations', 'been under', 'surgical history', 'ever had surgery'],
            category: 'surgeries'
        },
        hospitalizations: {
            keywords: ['hospital', 'hospitalized', 'admitted', 'admission', 'inpatient', 'stay'],
            phrases: ['been hospitalized', 'hospital stays', 'ever admitted', 'been in the hospital'],
            category: 'hospitalizations'
        },

        // MEDICATIONS
        medications: {
            keywords: ['medication', 'medications', 'medicine', 'medicines', 'drugs', 'pills', 'taking', 'prescriptions', 'meds'],
            phrases: ['what medications', 'any medications', 'take any', 'on any medications', 'currently taking', 'prescription'],
            category: 'medications'
        },
        otc: {
            keywords: ['over the counter', 'otc', 'supplements', 'vitamins', 'herbal', 'natural'],
            phrases: ['over the counter', 'any supplements', 'vitamins', 'herbal remedies'],
            category: 'otc'
        },

        // ALLERGIES
        allergies: {
            keywords: ['allergy', 'allergies', 'allergic', 'reaction', 'sensitivity'],
            phrases: ['any allergies', 'allergic to', 'drug allergies', 'medication allergies', 'food allergies'],
            category: 'allergies'
        },

        // FAMILY HISTORY
        familyHistory: {
            keywords: ['family', 'relatives', 'parents', 'mother', 'father', 'siblings', 'brother', 'sister', 'grandparents', 'hereditary', 'genetic', 'runs in'],
            phrases: ['family history', 'run in your family', 'parents have', 'anyone in your family', 'hereditary'],
            category: 'familyHistory'
        },

        // SOCIAL HISTORY
        smoking: {
            keywords: ['smoke', 'smoking', 'cigarette', 'tobacco', 'vape', 'vaping', 'nicotine', 'pack'],
            phrases: ['do you smoke', 'ever smoked', 'smoking history', 'cigarettes', 'tobacco use', 'pack years'],
            category: 'smoking'
        },
        alcohol: {
            keywords: ['alcohol', 'drink', 'drinking', 'beer', 'wine', 'liquor', 'spirits', 'cocktail'],
            phrases: ['do you drink', 'alcohol use', 'how much alcohol', 'drink alcohol'],
            category: 'alcohol'
        },
        drugs: {
            keywords: ['drug', 'drugs', 'recreational', 'marijuana', 'cocaine', 'heroin', 'meth', 'opioids', 'substance', 'illicit'],
            phrases: ['recreational drugs', 'use drugs', 'any drugs', 'substance use', 'illegal drugs'],
            category: 'drugs'
        },
        occupation: {
            keywords: ['work', 'job', 'occupation', 'employed', 'career', 'profession', 'do for a living'],
            phrases: ['what do you do', 'for work', 'your job', 'occupation', 'employed'],
            category: 'occupation'
        },
        living: {
            keywords: ['live', 'living', 'home', 'house', 'apartment', 'alone', 'family', 'roommate', 'spouse', 'partner'],
            phrases: ['who do you live', 'living situation', 'at home', 'live alone', 'live with'],
            category: 'living'
        },
        exercise: {
            keywords: ['exercise', 'physical activity', 'workout', 'active', 'sedentary', 'gym', 'sports'],
            phrases: ['do you exercise', 'physically active', 'how active', 'work out'],
            category: 'exercise'
        },
        travel: {
            keywords: ['travel', 'traveled', 'trip', 'abroad', 'overseas', 'vacation', 'foreign', 'international'],
            phrases: ['recent travel', 'traveled anywhere', 'been anywhere', 'out of the country'],
            category: 'travel'
        },
        sexualHistory: {
            keywords: ['sexual', 'sex', 'partner', 'partners', 'intercourse', 'sexually active', 'protection', 'contraception'],
            phrases: ['sexually active', 'sexual history', 'any partners', 'use protection'],
            category: 'sexualHistory'
        },

        // REVIEW OF SYSTEMS - General
        fever: {
            keywords: ['fever', 'fevers', 'temperature', 'chills', 'sweats', 'hot', 'cold'],
            phrases: ['any fever', 'had fevers', 'night sweats', 'felt feverish'],
            category: 'fever'
        },
        weightChange: {
            keywords: ['weight', 'gained', 'lost', 'appetite', 'eating'],
            phrases: ['weight change', 'lost weight', 'gained weight', 'appetite changes'],
            category: 'weightChange'
        },
        fatigue: {
            keywords: ['tired', 'fatigue', 'energy', 'weak', 'exhausted', 'lethargy'],
            phrases: ['feeling tired', 'low energy', 'more tired', 'fatigue'],
            category: 'fatigue'
        },

        // REVIEW OF SYSTEMS - Cardiopulmonary
        shortnessOfBreath: {
            keywords: ['breath', 'breathing', 'breathless', 'dyspnea', 'winded', 'air', 'sob'],
            phrases: ['short of breath', 'trouble breathing', 'can\'t breathe', 'out of breath', 'catch your breath'],
            category: 'shortnessOfBreath'
        },
        cough: {
            keywords: ['cough', 'coughing', 'sputum', 'phlegm', 'mucus', 'productive'],
            phrases: ['any cough', 'been coughing', 'coughing up', 'phlegm'],
            category: 'cough'
        },
        chestPain: {
            keywords: ['chest pain', 'chest discomfort', 'chest pressure', 'chest tightness'],
            phrases: ['chest pain', 'chest discomfort', 'pain in chest'],
            category: 'chestPain'
        },
        palpitations: {
            keywords: ['palpitation', 'palpitations', 'racing', 'pounding', 'skipping', 'irregular', 'fluttering', 'heart beat'],
            phrases: ['heart racing', 'heart pounding', 'heart skipping', 'feel your heart', 'palpitations'],
            category: 'palpitations'
        },
        edema: {
            keywords: ['swelling', 'swollen', 'edema', 'puffy', 'fluid'],
            phrases: ['any swelling', 'leg swelling', 'ankle swelling', 'feet swelling'],
            category: 'edema'
        },

        // REVIEW OF SYSTEMS - GI
        nausea: {
            keywords: ['nausea', 'nauseous', 'queasy', 'sick to stomach', 'vomit', 'vomiting', 'throwing up', 'emesis'],
            phrases: ['feel nauseous', 'any nausea', 'throwing up', 'vomiting'],
            category: 'nausea'
        },
        abdominalPain: {
            keywords: ['stomach', 'belly', 'abdominal', 'abdomen', 'tummy', 'gut'],
            phrases: ['stomach pain', 'belly pain', 'abdominal pain', 'stomach hurt'],
            category: 'abdominalPain'
        },
        bowelChanges: {
            keywords: ['bowel', 'stool', 'diarrhea', 'constipation', 'blood in stool', 'black stool', 'movements'],
            phrases: ['bowel movements', 'any diarrhea', 'constipation', 'blood in stool'],
            category: 'bowelChanges'
        },

        // REVIEW OF SYSTEMS - GU
        urinarySymptoms: {
            keywords: ['urination', 'urinating', 'pee', 'peeing', 'urine', 'bladder', 'frequency', 'urgency', 'burning', 'dysuria'],
            phrases: ['trouble urinating', 'burning when', 'how often urinate', 'any blood in urine'],
            category: 'urinarySymptoms'
        },

        // REVIEW OF SYSTEMS - Neurological
        headache: {
            keywords: ['headache', 'headaches', 'head pain', 'migraine'],
            phrases: ['any headaches', 'head pain', 'having headaches'],
            category: 'headache'
        },
        dizziness: {
            keywords: ['dizzy', 'dizziness', 'lightheaded', 'vertigo', 'spinning', 'room spinning', 'unsteady', 'balance'],
            phrases: ['feel dizzy', 'lightheaded', 'room spinning', 'balance problems'],
            category: 'dizziness'
        },
        weakness: {
            keywords: ['weakness', 'weak', 'strength', 'numbness', 'tingling', 'pins and needles'],
            phrases: ['any weakness', 'feel weak', 'numbness or tingling', 'arm weakness', 'leg weakness'],
            category: 'weakness'
        },
        vision: {
            keywords: ['vision', 'see', 'sight', 'eyes', 'blurry', 'double', 'blind', 'visual'],
            phrases: ['vision changes', 'trouble seeing', 'blurry vision', 'double vision'],
            category: 'vision'
        },
        consciousness: {
            keywords: ['pass out', 'passed out', 'faint', 'fainting', 'blackout', 'unconscious', 'syncope', 'collapse'],
            phrases: ['ever passed out', 'lost consciousness', 'fainted', 'blacked out'],
            category: 'consciousness'
        },
        confusion: {
            keywords: ['confused', 'confusion', 'thinking', 'memory', 'concentrate', 'foggy', 'mental'],
            phrases: ['any confusion', 'trouble thinking', 'memory problems', 'feel confused'],
            category: 'confusion'
        },

        // REVIEW OF SYSTEMS - MSK
        jointPain: {
            keywords: ['joint', 'joints', 'arthritis', 'stiff', 'stiffness', 'ache', 'aches'],
            phrases: ['joint pain', 'joints hurt', 'stiff joints', 'any arthritis'],
            category: 'jointPain'
        },
        backPain: {
            keywords: ['back', 'spine', 'lumbar', 'thoracic', 'cervical', 'neck'],
            phrases: ['back pain', 'back hurt', 'neck pain', 'spine problems'],
            category: 'backPain'
        },

        // REVIEW OF SYSTEMS - Skin
        rash: {
            keywords: ['rash', 'skin', 'lesion', 'bump', 'spot', 'itchy', 'itching', 'hives'],
            phrases: ['any rash', 'skin changes', 'skin problems', 'noticed anything on skin'],
            category: 'rash'
        },

        // CONTEXT/META QUESTIONS
        priorEpisodes: {
            keywords: ['before', 'previous', 'prior', 'past', 'happened before', 'first time', 'ever had'],
            phrases: ['happened before', 'first time', 'ever had this', 'in the past'],
            category: 'priorEpisodes'
        },
        treatments: {
            keywords: ['tried', 'taken', 'helped', 'treatment', 'remedy', 'done for'],
            phrases: ['tried anything', 'taken anything', 'done anything for', 'what helped'],
            category: 'treatments'
        },
        concerns: {
            keywords: ['worried', 'concern', 'concerned', 'fear', 'afraid', 'think', 'hoping'],
            phrases: ['what are you worried', 'any concerns', 'what do you think', 'hoping we can'],
            category: 'concerns'
        },
        sickContacts: {
            keywords: ['sick', 'contacts', 'around', 'exposed', 'contagious', 'family sick', 'coworker sick'],
            phrases: ['anyone sick', 'been around', 'exposed to', 'sick contacts'],
            category: 'sickContacts'
        }
    };

    // ============================================================
    // QUESTION MATCHING FUNCTION
    // ============================================================
    
    function detectQuestionCategory(questionText) {
        const lowerQuestion = questionText.toLowerCase().trim();
        let bestMatch = null;
        let highestScore = 0;

        for (const [category, patterns] of Object.entries(questionPatterns)) {
            let score = 0;

            // Check phrases (higher weight - more specific)
            for (const phrase of patterns.phrases) {
                if (lowerQuestion.includes(phrase.toLowerCase())) {
                    score += 3;
                }
            }

            // Check keywords (lower weight)
            for (const keyword of patterns.keywords) {
                if (lowerQuestion.includes(keyword.toLowerCase())) {
                    score += 1;
                }
            }

            if (score > highestScore) {
                highestScore = score;
                bestMatch = patterns.category;
            }
        }

        return {
            category: bestMatch,
            confidence: highestScore
        };
    }

    // ============================================================
    // RESPONSE RETRIEVAL FUNCTION
    // ============================================================
    
    function getResponse(questionText, caseData, templateLibrary, backgroundLibrary) {
        const match = detectQuestionCategory(questionText);
        
        if (!match.category || match.confidence < 1) {
            return {
                response: "I'm not sure I understand what you're asking. Could you rephrase that?",
                category: 'unknown',
                source: 'fallback'
            };
        }

        // Priority 1: Check case-critical answers
        if (caseData.criticalAnswers && caseData.criticalAnswers[match.category]) {
            const answers = caseData.criticalAnswers[match.category];
            const response = Array.isArray(answers) ? 
                answers[Math.floor(Math.random() * answers.length)] : answers;
            return {
                response: response,
                category: match.category,
                source: 'case-critical'
            };
        }

        // Priority 2: Check template library for this chief complaint
        if (templateLibrary && templateLibrary.hpiTemplates) {
            const diagnosis = caseData.diagnosis || caseData.primaryDiagnosis;
            const diagnosisKey = getDiagnosisKey(diagnosis);
            
            if (templateLibrary.hpiTemplates[diagnosisKey] && 
                templateLibrary.hpiTemplates[diagnosisKey][match.category]) {
                const answers = templateLibrary.hpiTemplates[diagnosisKey][match.category];
                const response = Array.isArray(answers) ? 
                    answers[Math.floor(Math.random() * answers.length)] : answers;
                
                // Replace placeholders like {duration}
                const filledResponse = fillPlaceholders(response, caseData);
                
                return {
                    response: filledResponse,
                    category: match.category,
                    source: 'template'
                };
            }
        }

        // Priority 3: Check background library
        if (backgroundLibrary) {
            const patientProfile = caseData.patientProfile || {};
            const response = getBackgroundResponse(match.category, patientProfile, backgroundLibrary);
            if (response) {
                return {
                    response: response,
                    category: match.category,
                    source: 'background'
                };
            }
        }

        // Fallback
        return {
            response: "Hmm, I'm not really sure about that.",
            category: match.category,
            source: 'fallback'
        };
    }

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    
    function getDiagnosisKey(diagnosis) {
        if (!diagnosis) return null;
        
        const keyMap = {
            'acute coronary syndrome': 'acs',
            'acs': 'acs',
            'nstemi': 'acs',
            'stemi': 'acs',
            'myocardial infarction': 'acs',
            'heart attack': 'acs',
            'unstable angina': 'acs',
            'pulmonary embolism': 'pe',
            'pe': 'pe',
            'aortic dissection': 'aorticDissection',
            'pneumonia': 'pneumonia',
            'community-acquired pneumonia': 'pneumonia',
            'cap': 'pneumonia',
            'heart failure': 'heartFailure',
            'chf': 'heartFailure',
            'adhf': 'heartFailure',
            'copd exacerbation': 'copdExacerbation',
            'copd': 'copdExacerbation',
            'asthma': 'asthma',
            'asthma exacerbation': 'asthma',
            'appendicitis': 'appendicitis',
            'cholecystitis': 'cholecystitis',
            'pancreatitis': 'pancreatitis',
            'small bowel obstruction': 'sbo',
            'sbo': 'sbo',
            'subarachnoid hemorrhage': 'sah',
            'sah': 'sah',
            'meningitis': 'meningitis',
            'bacterial meningitis': 'meningitis',
            'migraine': 'migraine',
            'tension headache': 'tensionHeadache',
            'sepsis': 'sepsis',
            'uti': 'uti',
            'cystitis': 'uti',
            'pyelonephritis': 'pyelonephritis',
            'syncope': 'syncope',
            'vasovagal': 'vasovagalSyncope',
            'cardiac syncope': 'cardiacSyncope'
        };

        const lowerDx = diagnosis.toLowerCase();
        for (const [key, value] of Object.entries(keyMap)) {
            if (lowerDx.includes(key)) {
                return value;
            }
        }
        return null;
    }

    function fillPlaceholders(text, caseData) {
        if (!text || typeof text !== 'string') return text;
        
        const placeholders = {
            '{duration}': caseData.duration || '2 hours',
            '{activity}': caseData.activityAtOnset || 'resting',
            '{age}': caseData.age || '55',
            '{name}': caseData.patientName || 'the patient'
        };

        let result = text;
        for (const [placeholder, value] of Object.entries(placeholders)) {
            result = result.replace(new RegExp(placeholder, 'g'), value);
        }
        return result;
    }

    function getBackgroundResponse(category, patientProfile, backgroundLibrary) {
        // Map categories to background library sections
        const categoryMap = {
            'pmh': 'pastMedicalHistory',
            'medications': 'medications',
            'allergies': 'allergies',
            'surgeries': 'surgicalHistory',
            'familyHistory': 'familyHistory',
            'smoking': 'smoking',
            'alcohol': 'alcohol',
            'drugs': 'drugUse',
            'occupation': 'occupation',
            'living': 'livingSituation',
            'sexualHistory': 'sexualHistory'
        };

        const libSection = categoryMap[category];
        if (!libSection || !backgroundLibrary[libSection]) return null;

        // Determine which subcategory to use based on patient profile
        const section = backgroundLibrary[libSection];
        let subcategory = null;

        switch (category) {
            case 'medications':
                if (patientProfile.age < 40 && !patientProfile.comorbidities?.length) {
                    subcategory = 'healthyYoungAdult';
                } else if (patientProfile.age >= 65 || (patientProfile.comorbidities?.length > 2)) {
                    subcategory = 'elderlyPolypharmacy';
                } else if (patientProfile.comorbidities?.includes('CAD') || patientProfile.comorbidities?.includes('CHF')) {
                    subcategory = 'cardiacHistory';
                } else {
                    subcategory = 'middleAgedWithComorbidities';
                }
                break;
            case 'smoking':
                subcategory = patientProfile.smokingStatus || 'never';
                break;
            case 'alcohol':
                subcategory = patientProfile.alcoholUse || 'social';
                break;
            case 'drugs':
                subcategory = patientProfile.drugUse || 'none';
                break;
            case 'familyHistory':
                subcategory = patientProfile.familyHistoryType || 'noSignificant';
                break;
            case 'allergies':
                subcategory = patientProfile.allergyType || 'none';
                break;
            default:
                // Use first available subcategory
                subcategory = Object.keys(section)[0];
        }

        if (section[subcategory] && Array.isArray(section[subcategory])) {
            return section[subcategory][Math.floor(Math.random() * section[subcategory].length)];
        }

        return null;
    }

    // ============================================================
    // NEGATIVE RESPONSE GENERATION
    // Used when ruling out diagnoses
    // ============================================================
    
    const negativeResponses = {
        fever: [
            "No, I haven't had any fever.",
            "No fever that I've noticed.",
            "I've been checking - temperature has been normal.",
            "No, no fever or chills."
        ],
        chestPain: [
            "No chest pain at all.",
            "My chest feels fine.",
            "No, nothing in my chest."
        ],
        shortnessOfBreath: [
            "No, I'm breathing fine.",
            "My breathing is okay.",
            "No trouble breathing."
        ],
        nausea: [
            "No nausea or vomiting.",
            "My stomach feels fine.",
            "No, I haven't felt sick to my stomach."
        ],
        headache: [
            "No headaches.",
            "My head feels fine.",
            "No, no headaches."
        ],
        dizziness: [
            "No dizziness.",
            "I haven't felt lightheaded.",
            "No, I feel steady."
        ],
        edema: [
            "No swelling anywhere.",
            "My legs look normal.",
            "No, no swelling."
        ],
        cough: [
            "No cough.",
            "I haven't been coughing.",
            "No, no cough at all."
        ],
        rash: [
            "No rash or skin changes.",
            "My skin looks normal.",
            "No, nothing on my skin."
        ],
        consciousness: [
            "No, I've never passed out.",
            "I haven't fainted or anything.",
            "No blackouts or fainting."
        ],
        weakness: [
            "No weakness.",
            "I feel strong.",
            "No numbness or tingling either."
        ],
        vision: [
            "My vision is fine.",
            "No changes to my eyesight.",
            "I can see clearly."
        ]
    };

    function getNegativeResponse(category) {
        if (negativeResponses[category]) {
            const responses = negativeResponses[category];
            return responses[Math.floor(Math.random() * responses.length)];
        }
        return "No, I haven't noticed that.";
    }

    // ============================================================
    // PUBLIC API
    // ============================================================
    
    return {
        detectQuestionCategory: detectQuestionCategory,
        getResponse: getResponse,
        getNegativeResponse: getNegativeResponse,
        questionPatterns: questionPatterns
    };

})();

// Export for use in ReasonDx
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ReasonDxPatientResponseEngine;
}
if (typeof window !== 'undefined') {
    window.ReasonDxPatientResponseEngine = ReasonDxPatientResponseEngine;
}
