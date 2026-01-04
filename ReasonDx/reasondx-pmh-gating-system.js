/**
 * ============================================================================
 * REASONDX PMH GATING SYSTEM
 * ============================================================================
 * Version: 1.0 | December 2024
 * 
 * Features:
 * 1. Vague initial PMH responses - doesn't give away case-relevant info
 * 2. Specific follow-up detection and appropriate responses
 * 3. Learning mode prompts when students don't dig deeper
 * 4. Hint system for relevant follow-up questions
 * ============================================================================
 */

const PMHGatingSystem = (function() {
    'use strict';

    // ========================================================================
    // VAGUE INITIAL RESPONSES
    // These are given when student asks general "What medical problems do you have?"
    // ========================================================================
    
    const vagueInitialResponses = {
        // Based on patient profile complexity
        healthy: [
            "I'm pretty healthy overall. I don't really have any major medical problems.",
            "Nothing major that I know of. I try to stay healthy.",
            "I'm generally healthy. I see my doctor once a year for a checkup."
        ],
        fewConditions: [
            "Well, I take a few medications for some things. Nothing too serious, I think.",
            "I have a couple of things I take pills for. My doctor monitors them.",
            "There are a few things I manage with medication. Is there something specific you want to know about?"
        ],
        multipleConditions: [
            "I have several medical conditions I take medications for. What specifically would you like to know?",
            "Well, I've got a few things going on. I take quite a few pills every day. Anything in particular?",
            "I've been dealing with some health issues for years. I see a few different doctors. What do you need to know?"
        ],
        elderly: [
            "Oh, you know how it is at my age. I've got a few things. What would you like to know about?",
            "Well, I take a handful of pills every morning. Comes with getting older, I suppose.",
            "I've accumulated a few conditions over the years. Is there something specific you're concerned about?"
        ]
    };

    // ========================================================================
    // CONDITION-SPECIFIC RESPONSES
    // When student asks about specific conditions
    // ========================================================================
    
    const conditionResponses = {
        // Cardiovascular
        hypertension: {
            positive: [
                "Yes, I have high blood pressure. I've been on medication for it for about {duration}.",
                "Yes, my blood pressure runs high. I take {med} for it.",
                "I do have hypertension. It's been controlled with medication."
            ],
            negative: [
                "No, my blood pressure has always been normal.",
                "No, I've never had issues with high blood pressure.",
                "Not that I know of. My doctor checks it and it's always been fine."
            ],
            followUps: {
                "how long": "I was diagnosed about {duration} ago.",
                "what medication": "I take {med} for it.",
                "controlled": "My doctor says it's {control_status} with the medication.",
                "highest": "The highest it's been was around {highest_bp}."
            }
        },
        
        diabetes: {
            positive: [
                "Yes, I have diabetes. Type {type}. I've had it for about {duration}.",
                "Yes, I'm diabetic. I {management} for it.",
                "I do have diabetes. My A1C is usually around {a1c}."
            ],
            negative: [
                "No, I don't have diabetes.",
                "No, my blood sugar has always been normal.",
                "Not that I know of. I've been tested and it's always been fine."
            ],
            followUps: {
                "type": "It's Type {type} diabetes.",
                "how long": "I was diagnosed about {duration} ago.",
                "a1c": "My last A1C was {a1c}.",
                "medication|insulin": "I {management} for it.",
                "complications": "I {complications_status}.",
                "check|monitor": "I check my blood sugar {frequency}."
            }
        },
        
        hyperlipidemia: {
            positive: [
                "Yes, I have high cholesterol. I take a statin for it.",
                "Yes, my cholesterol runs high. I'm on medication.",
                "I do have high cholesterol. Been on {med} for years."
            ],
            negative: [
                "No, my cholesterol has been okay.",
                "No, I've never had cholesterol problems.",
                "Not that I know of. My doctor checks it yearly."
            ],
            followUps: {
                "numbers|level": "Last time I checked, my total was around {total}, LDL was {ldl}.",
                "medication": "I take {med} for it.",
                "diet": "I try to {diet_status}."
            }
        },
        
        cad: {
            positive: [
                "Yes, I have heart disease. I had {event} about {duration} ago.",
                "Yes, I have coronary artery disease. I've had {procedures}.",
                "I do have heart problems. I see a cardiologist regularly."
            ],
            negative: [
                "No, I've never had any heart problems.",
                "No heart disease that I know of.",
                "No, my heart has always been healthy."
            ],
            keywords: ["heart disease", "coronary artery disease", "cad", "heart attack", "mi", "myocardial infarction", "stent", "bypass", "cabg", "angina"]
        },
        
        chf: {
            positive: [
                "Yes, I have heart failure. My heart doesn't pump as well as it should.",
                "Yes, I have congestive heart failure. I take several medications for it.",
                "I do have a weak heart. My ejection fraction is about {ef}%."
            ],
            negative: [
                "No, I don't have heart failure.",
                "No, my heart pumps fine as far as I know.",
                "No heart failure that I've been told about."
            ],
            keywords: ["heart failure", "chf", "congestive heart failure", "weak heart", "cardiomyopathy"]
        },
        
        afib: {
            positive: [
                "Yes, I have atrial fibrillation. My heart goes into an irregular rhythm sometimes.",
                "Yes, I have A-fib. I take {med} for it.",
                "I do have an irregular heartbeat. I'm on a blood thinner for it."
            ],
            negative: [
                "No, I don't have any irregular heartbeat.",
                "No, my heart rhythm has always been normal.",
                "Not that I know of."
            ],
            keywords: ["atrial fibrillation", "a-fib", "afib", "irregular heartbeat", "arrhythmia"]
        },
        
        // Pulmonary
        asthma: {
            positive: [
                "Yes, I have asthma. I've had it since {onset}.",
                "Yes, I use inhalers for asthma.",
                "I do have asthma. It's usually {severity}."
            ],
            negative: [
                "No, I don't have asthma.",
                "No, I've never had breathing problems like that.",
                "No asthma that I know of."
            ],
            followUps: {
                "how long|since when": "I've had it since {onset}.",
                "inhaler|medication": "I use {inhalers}.",
                "hospitalized|er|emergency": "I've {hospitalization_history}.",
                "triggers": "My triggers are usually {triggers}."
            }
        },
        
        copd: {
            positive: [
                "Yes, I have COPD. From years of smoking.",
                "Yes, I have emphysema/chronic bronchitis. I use inhalers.",
                "I do have COPD. I'm on {liters} liters of oxygen at home."
            ],
            negative: [
                "No, I don't have COPD.",
                "No, my lungs are fine.",
                "No lung disease that I know of."
            ],
            keywords: ["copd", "emphysema", "chronic bronchitis", "lung disease"]
        },
        
        // Endocrine
        thyroid: {
            positive: [
                "Yes, I have {thyroid_type}. I take medication for it.",
                "Yes, my thyroid is {thyroid_status}. I'm on {med}.",
                "I do have thyroid problems. Been on medication for years."
            ],
            negative: [
                "No, my thyroid is fine.",
                "No thyroid problems that I know of.",
                "No, I've been tested and it's normal."
            ],
            keywords: ["thyroid", "hypothyroid", "hyperthyroid", "hashimoto", "graves"]
        },
        
        // GI
        gerd: {
            positive: [
                "Yes, I have acid reflux. I take something for it.",
                "Yes, I have GERD. I'm on a PPI.",
                "I do get heartburn. I take {med} daily."
            ],
            negative: [
                "No, I don't have reflux problems.",
                "No, my stomach is usually fine.",
                "No heartburn issues."
            ],
            keywords: ["gerd", "acid reflux", "heartburn", "reflux"]
        },
        
        ulcer: {
            positive: [
                "Yes, I've had ulcers before. About {duration} ago.",
                "Yes, I had a stomach ulcer. Had to take antibiotics for H. pylori.",
                "I have had ulcer problems in the past."
            ],
            negative: [
                "No, I've never had ulcers.",
                "No stomach ulcers that I know of.",
                "No, nothing like that."
            ],
            keywords: ["ulcer", "peptic ulcer", "stomach ulcer", "duodenal ulcer", "h pylori"]
        },
        
        ibd: {
            positive: [
                "Yes, I have {ibd_type}. Diagnosed about {duration} ago.",
                "Yes, I have inflammatory bowel disease. I take {med} for it.",
                "I do have Crohn's/UC. It's {status} right now."
            ],
            negative: [
                "No, I don't have Crohn's or colitis.",
                "No inflammatory bowel disease.",
                "No, my bowels are generally fine."
            ],
            keywords: ["crohn", "colitis", "ulcerative colitis", "ibd", "inflammatory bowel"]
        },
        
        // Renal
        ckd: {
            positive: [
                "Yes, my kidneys don't work as well as they should. Stage {stage}.",
                "Yes, I have chronic kidney disease. My GFR is around {gfr}.",
                "I do have kidney problems. I see a nephrologist."
            ],
            negative: [
                "No, my kidneys are fine.",
                "No kidney problems that I know of.",
                "No, my kidney function has been normal."
            ],
            keywords: ["kidney disease", "ckd", "chronic kidney", "renal disease", "renal failure"]
        },
        
        kidney_stones: {
            positive: [
                "Yes, I've had kidney stones before. About {count} times.",
                "Yes, I get kidney stones. The last one was {duration} ago.",
                "I have had kidney stones. They run in my family."
            ],
            negative: [
                "No, I've never had kidney stones.",
                "No stones that I know of.",
                "No, nothing like that."
            ],
            keywords: ["kidney stone", "renal stone", "nephrolithiasis", "stones"]
        },
        
        // Neurological
        stroke: {
            positive: [
                "Yes, I had a stroke about {duration} ago.",
                "Yes, I've had a stroke/TIA. I'm on blood thinners now.",
                "I did have a stroke. I have some {deficits} from it."
            ],
            negative: [
                "No, I've never had a stroke.",
                "No strokes or TIAs.",
                "No, nothing like that."
            ],
            keywords: ["stroke", "tia", "transient ischemic", "cva", "brain attack"]
        },
        
        seizure: {
            positive: [
                "Yes, I have epilepsy/seizures. I take {med} for it.",
                "Yes, I've had seizures. Been controlled with medication.",
                "I do have a seizure disorder. Last seizure was {duration} ago."
            ],
            negative: [
                "No, I've never had seizures.",
                "No epilepsy or seizures.",
                "No, nothing like that."
            ],
            keywords: ["seizure", "epilepsy", "convulsion"]
        },
        
        migraine: {
            positive: [
                "Yes, I get migraines. Have for years.",
                "Yes, I have chronic migraines. I take {med} for them.",
                "I do get bad headaches. Migraines, they said."
            ],
            negative: [
                "No, I don't get migraines.",
                "No, just occasional regular headaches.",
                "No migraine problems."
            ],
            keywords: ["migraine", "migraines"]
        },
        
        // Psychiatric
        depression: {
            positive: [
                "Yes, I've dealt with depression. I'm on medication for it.",
                "Yes, I have depression. Been seeing a therapist too.",
                "I do struggle with depression sometimes."
            ],
            negative: [
                "No, I haven't had problems with depression.",
                "No, my mood is generally okay.",
                "Not really, no."
            ],
            keywords: ["depression", "depressed"]
        },
        
        anxiety: {
            positive: [
                "Yes, I have anxiety. I take something for it.",
                "Yes, I get anxious. I'm on {med}.",
                "I do have anxiety problems."
            ],
            negative: [
                "No, I don't have anxiety issues.",
                "No, I'm not particularly anxious.",
                "Not really."
            ],
            keywords: ["anxiety", "anxious", "panic"]
        },
        
        // Hematologic
        anemia: {
            positive: [
                "Yes, I have anemia. I take iron supplements.",
                "Yes, my blood count runs low. {type} anemia.",
                "I do have anemia. Been dealing with it for a while."
            ],
            negative: [
                "No, my blood count is normal.",
                "No anemia that I know of.",
                "No, I've never been told I'm anemic."
            ],
            keywords: ["anemia", "anemic", "low blood", "iron deficiency"]
        },
        
        clotting: {
            positive: [
                "Yes, I have a clotting disorder. I had a {event} before.",
                "Yes, I'm on blood thinners because of clot history.",
                "I have had blood clots. DVT/PE about {duration} ago."
            ],
            negative: [
                "No, I've never had blood clots.",
                "No clotting problems.",
                "No, nothing like that."
            ],
            keywords: ["dvt", "pe", "pulmonary embolism", "blood clot", "clotting disorder", "factor v", "deep vein"]
        },
        
        // Cancer
        cancer: {
            positive: [
                "Yes, I had {cancer_type} cancer about {duration} ago.",
                "Yes, I'm a cancer survivor. {cancer_type}, treated with {treatment}.",
                "I did have cancer. In remission now for {duration}."
            ],
            negative: [
                "No, I've never had cancer.",
                "No cancer that I know of.",
                "No, thankfully."
            ],
            keywords: ["cancer", "tumor", "malignancy", "oncology", "chemo", "radiation"]
        },
        
        // Autoimmune
        rheumatoid: {
            positive: [
                "Yes, I have rheumatoid arthritis. Take {med} for it.",
                "Yes, I have RA. Been dealing with it for {duration}.",
                "I do have rheumatoid arthritis. It affects my {joints}."
            ],
            negative: [
                "No, I don't have rheumatoid arthritis.",
                "No, just regular arthritis in my joints.",
                "No RA."
            ],
            keywords: ["rheumatoid", "ra ", "rheumatoid arthritis"]
        },
        
        lupus: {
            positive: [
                "Yes, I have lupus. Diagnosed about {duration} ago.",
                "Yes, I have SLE. I take {med} for it.",
                "I do have lupus. It's {status} right now."
            ],
            negative: [
                "No, I don't have lupus.",
                "No autoimmune diseases like that.",
                "No, I've been tested."
            ],
            keywords: ["lupus", "sle", "systemic lupus"]
        },
        
        // Musculoskeletal
        osteoarthritis: {
            positive: [
                "Yes, I have arthritis. Mostly in my {joints}.",
                "Yes, wear and tear arthritis. It bothers me sometimes.",
                "I do have osteoarthritis. Getting older, you know."
            ],
            negative: [
                "No, my joints are fine.",
                "No arthritis that bothers me.",
                "No, not really."
            ],
            keywords: ["arthritis", "osteoarthritis", "degenerative joint", "oa "]
        },
        
        osteoporosis: {
            positive: [
                "Yes, I have osteoporosis. I take {med} for my bones.",
                "Yes, my bones are thin. Had a DEXA scan.",
                "I do have osteoporosis. I take calcium and vitamin D."
            ],
            negative: [
                "No, my bones are fine.",
                "No osteoporosis.",
                "No, I've had a bone density test and it was normal."
            ],
            keywords: ["osteoporosis", "bone density", "thin bones", "osteopenia"]
        },
        
        gout: {
            positive: [
                "Yes, I have gout. Usually in my {joint}.",
                "Yes, I get gout attacks. Take {med} to prevent them.",
                "I do have gout. Last flare was {duration} ago."
            ],
            negative: [
                "No, I don't have gout.",
                "No gout problems.",
                "No, my uric acid is normal."
            ],
            keywords: ["gout", "uric acid", "gouty"]
        },
        
        // Sleep
        sleep_apnea: {
            positive: [
                "Yes, I have sleep apnea. I use a CPAP machine.",
                "Yes, I was diagnosed with sleep apnea. Sometimes I forget to use my CPAP.",
                "I do have sleep apnea. My spouse says I snore terribly."
            ],
            negative: [
                "No, I don't have sleep apnea.",
                "No, I sleep fine.",
                "No, I've never been tested for that."
            ],
            keywords: ["sleep apnea", "apnea", "cpap", "snoring"]
        }
    };

    // ========================================================================
    // DIAGNOSIS-LINKED RELEVANT CONDITIONS
    // What conditions are relevant to ask about for each chief complaint
    // ========================================================================
    
    const diagnosisRelevantConditions = {
        "chest_pain": ["hypertension", "diabetes", "hyperlipidemia", "cad", "chf", "afib", "gerd", "anxiety", "clotting", "smoking"],
        "shortness_of_breath": ["asthma", "copd", "chf", "cad", "afib", "clotting", "anemia", "sleep_apnea", "anxiety", "smoking"],
        "abdominal_pain": ["gerd", "ulcer", "ibd", "diabetes", "ckd", "kidney_stones", "cancer", "gallbladder"],
        "headache": ["hypertension", "migraine", "stroke", "depression", "anxiety", "sleep_apnea"],
        "syncope": ["cad", "chf", "afib", "diabetes", "seizure", "stroke", "anemia"],
        "fever": ["diabetes", "ckd", "cancer", "immunocompromised", "hiv"],
        "back_pain": ["osteoarthritis", "osteoporosis", "cancer", "ckd", "kidney_stones"],
        "leg_pain": ["clotting", "diabetes", "cad", "smoking", "osteoarthritis"],
        "weakness": ["stroke", "diabetes", "thyroid", "anemia", "cancer", "depression"],
        "dizziness": ["hypertension", "diabetes", "afib", "anemia", "anxiety"],
        "cough": ["asthma", "copd", "gerd", "chf", "smoking", "cancer"],
        "palpitations": ["afib", "thyroid", "anxiety", "anemia", "chf"],
        "altered_mental_status": ["diabetes", "ckd", "stroke", "seizure", "thyroid", "depression"]
    };

    // ========================================================================
    // FOLLOW-UP TRACKING
    // ========================================================================
    
    let followUpState = {
        askedGeneralPMH: false,
        specificConditionsAsked: [],
        relevantConditionsAsked: [],
        promptsShown: 0,
        hintsGiven: []
    };

    /**
     * Reset follow-up tracking state
     */
    function resetState() {
        followUpState = {
            askedGeneralPMH: false,
            specificConditionsAsked: [],
            relevantConditionsAsked: [],
            promptsShown: 0,
            hintsGiven: []
        };
    }

    /**
     * Detect if question is a general PMH question
     */
    function isGeneralPMHQuestion(question) {
        const q = question.toLowerCase();
        const generalPatterns = [
            "medical history",
            "medical problems",
            "health problems",
            "health conditions",
            "medical conditions",
            "any conditions",
            "any diseases",
            "past medical",
            "pmh",
            "what conditions",
            "other conditions",
            "any other medical",
            "diagnosed with anything"
        ];
        return generalPatterns.some(p => q.includes(p));
    }

    /**
     * Detect which specific condition is being asked about
     */
    function detectConditionAsked(question) {
        const q = question.toLowerCase();
        
        for (const [condition, data] of Object.entries(conditionResponses)) {
            // Check keywords if defined
            if (data.keywords && data.keywords.some(kw => q.includes(kw))) {
                return condition;
            }
            // Check condition name
            if (q.includes(condition.replace(/_/g, ' '))) {
                return condition;
            }
        }
        
        // Additional keyword mappings
        const additionalMappings = {
            "high blood pressure": "hypertension",
            "blood pressure": "hypertension",
            "sugar": "diabetes",
            "diabetic": "diabetes",
            "blood sugar": "diabetes",
            "cholesterol": "hyperlipidemia",
            "lipids": "hyperlipidemia",
            "heart attack": "cad",
            "heart disease": "cad",
            "heart problem": "cad",
            "breathing problems": "asthma",
            "lung problems": "copd",
            "kidney": "ckd",
            "liver": "liver_disease",
            "blood clot": "clotting",
            "clot": "clotting"
        };
        
        for (const [phrase, condition] of Object.entries(additionalMappings)) {
            if (q.includes(phrase)) {
                return condition;
            }
        }
        
        return null;
    }

    /**
     * Get vague initial PMH response based on patient profile
     */
    function getVagueResponse(patientProfile) {
        let category = 'fewConditions';
        
        if (patientProfile) {
            if (patientProfile.pmhCategory === 'healthy') {
                category = 'healthy';
            } else if (patientProfile.pmhCategory === 'multiple' || patientProfile.age > 70) {
                category = patientProfile.age > 70 ? 'elderly' : 'multipleConditions';
            }
        }
        
        const responses = vagueInitialResponses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    /**
     * Get response for specific condition question
     */
    function getConditionResponse(condition, hasCondition, caseData) {
        const conditionData = conditionResponses[condition];
        if (!conditionData) return null;
        
        const responses = hasCondition ? conditionData.positive : conditionData.negative;
        let response = responses[Math.floor(Math.random() * responses.length)];
        
        // Fill in placeholders from case data if available
        if (caseData && caseData[condition]) {
            const data = caseData[condition];
            response = response.replace('{duration}', data.duration || 'several years');
            response = response.replace('{med}', data.medication || 'medication');
            response = response.replace('{type}', data.type || '2');
            response = response.replace('{a1c}', data.a1c || '7');
            response = response.replace('{management}', data.management || 'take medication');
            response = response.replace('{control_status}', data.controlStatus || 'well controlled');
        }
        
        return response;
    }

    /**
     * Check if student should be prompted for follow-ups
     */
    function shouldPromptForFollowUp(chiefComplaint, questionsAsked) {
        if (!chiefComplaint) return null;
        
        // Map chief complaint to relevant conditions
        const relevantConditions = diagnosisRelevantConditions[chiefComplaint] || [];
        
        // Check which relevant conditions haven't been asked about
        const notAsked = relevantConditions.filter(c => 
            !followUpState.specificConditionsAsked.includes(c) &&
            !followUpState.hintsGiven.includes(c)
        );
        
        // If student asked general PMH but hasn't followed up on relevant conditions
        if (followUpState.askedGeneralPMH && notAsked.length > 0 && followUpState.promptsShown < 2) {
            return {
                shouldPrompt: true,
                message: "Consider asking about specific conditions relevant to this presentation...",
                missingConditions: notAsked.slice(0, 3) // Top 3 most relevant
            };
        }
        
        return null;
    }

    /**
     * Get hint for a specific condition
     */
    function getHint(condition) {
        const hints = {
            hypertension: "Have you asked about high blood pressure? It's a risk factor for many conditions.",
            diabetes: "Diabetes affects many organ systems. Have you asked about it?",
            hyperlipidemia: "High cholesterol is an important cardiac risk factor.",
            cad: "Prior heart disease significantly changes the differential.",
            chf: "Heart failure can cause many symptoms including shortness of breath and edema.",
            afib: "Atrial fibrillation is a common cause of stroke and palpitations.",
            asthma: "Asthma is common and can present with various respiratory symptoms.",
            copd: "COPD is common in smokers and causes dyspnea.",
            clotting: "Prior DVT/PE significantly increases risk for future clots.",
            cancer: "Cancer history can be relevant to many presentations.",
            smoking: "Smoking history affects cardiac, pulmonary, and vascular disease risk."
        };
        
        followUpState.hintsGiven.push(condition);
        return hints[condition] || `Consider asking about ${condition.replace(/_/g, ' ')}.`;
    }

    /**
     * Process a PMH-related question and return appropriate response
     */
    function processPMHQuestion(question, variant, patientProfile) {
        // Check if general PMH question
        if (isGeneralPMHQuestion(question)) {
            followUpState.askedGeneralPMH = true;
            return {
                response: getVagueResponse(patientProfile),
                isVague: true,
                promptFollowUp: true
            };
        }
        
        // Check if asking about specific condition
        const condition = detectConditionAsked(question);
        if (condition) {
            followUpState.specificConditionsAsked.push(condition);
            
            // Check if this condition is in the case
            const hasCondition = variant?.pmhConditions?.includes(condition) || 
                                variant?.patientProfile?.conditions?.includes(condition) ||
                                false;
            
            const caseConditionData = variant?.pmhDetails?.[condition] || null;
            
            return {
                response: getConditionResponse(condition, hasCondition, caseConditionData),
                condition: condition,
                hasCondition: hasCondition,
                isVague: false
            };
        }
        
        return null; // Not a PMH question
    }

    /**
     * Get prompt for learning mode
     */
    function getLearningModePrompt(chiefComplaint) {
        const prompt = shouldPromptForFollowUp(chiefComplaint, followUpState.specificConditionsAsked);
        
        if (prompt && prompt.shouldPrompt) {
            followUpState.promptsShown++;
            return {
                show: true,
                message: prompt.message,
                hintAvailable: true,
                conditions: prompt.missingConditions.map(c => ({
                    condition: c,
                    hint: getHint(c)
                }))
            };
        }
        
        return { show: false };
    }

    // ========================================================================
    // PUBLIC API
    // ========================================================================
    
    return {
        resetState,
        isGeneralPMHQuestion,
        detectConditionAsked,
        getVagueResponse,
        getConditionResponse,
        processPMHQuestion,
        shouldPromptForFollowUp,
        getHint,
        getLearningModePrompt,
        diagnosisRelevantConditions,
        conditionResponses,
        getFollowUpState: () => ({ ...followUpState })
    };
    
})();

// Export for Node.js if applicable
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PMHGatingSystem;
}

console.log("✓ ReasonDx PMH Gating System: Initialized");
