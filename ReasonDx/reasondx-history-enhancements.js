/**
 * ============================================================================
 * REASONDX HISTORY ENHANCEMENTS
 * ============================================================================
 * Version: 1.0 | December 2024
 * 
 * Features:
 * 1. Follow-up question prompts
 * 2. Patient personality variations
 * 3. Semantic question understanding
 * 4. Doorknob moment feature
 * 5. Time pressure mode
 * 6. Question category display
 * ============================================================================
 */

const HistoryEnhancements = (function() {
    'use strict';

    // ========================================================================
    // FOLLOW-UP QUESTION PROMPTS
    // Suggests follow-ups after positive responses
    // ========================================================================
    
    const followUpPrompts = {
        // Pain-related
        chest_pain: {
            prompts: [
                "Ask about character (sharp, pressure, burning, squeezing)",
                "Ask about radiation (arm, jaw, back, shoulder)",
                "Ask about exertional component",
                "Ask about associated symptoms (dyspnea, diaphoresis, nausea)"
            ],
            keywords: ["chest pain", "chest discomfort", "chest pressure"]
        },
        abdominal_pain: {
            prompts: [
                "Ask about exact location",
                "Ask about relation to meals",
                "Ask about bowel movement changes",
                "Ask about associated nausea/vomiting"
            ],
            keywords: ["abdominal pain", "stomach pain", "belly pain", "stomach hurts"]
        },
        back_pain: {
            prompts: [
                "Ask about radiation to legs",
                "Ask about bowel/bladder changes (RED FLAG)",
                "Ask about saddle anesthesia (RED FLAG)",
                "Ask about weakness in legs"
            ],
            keywords: ["back pain", "back hurts", "lower back"]
        },
        headache: {
            prompts: [
                "Ask if this is the worst headache of their life",
                "Ask about speed of onset (thunderclap?)",
                "Ask about neck stiffness",
                "Ask about visual changes or aura"
            ],
            keywords: ["headache", "head pain", "head hurts"]
        },
        
        // Symptoms
        shortness_of_breath: {
            prompts: [
                "Ask about onset (sudden vs gradual)",
                "Ask about orthopnea (worse lying flat)",
                "Ask about PND (waking up short of breath)",
                "Ask about leg swelling"
            ],
            keywords: ["short of breath", "shortness of breath", "trouble breathing", "can't breathe", "dyspnea"]
        },
        cough: {
            prompts: [
                "Ask about productivity (dry vs productive)",
                "Ask about sputum color if productive",
                "Ask about blood in sputum",
                "Ask about duration"
            ],
            keywords: ["cough", "coughing"]
        },
        fever: {
            prompts: [
                "Ask about maximum temperature",
                "Ask about chills or rigors",
                "Ask about associated symptoms",
                "Ask about possible infection source"
            ],
            keywords: ["fever", "temperature", "febrile", "chills"]
        },
        syncope: {
            prompts: [
                "Ask about prodrome (warning symptoms)",
                "Ask about position when occurred",
                "Ask about palpitations before",
                "Ask about recovery time"
            ],
            keywords: ["passed out", "fainted", "syncope", "lost consciousness", "blacked out"]
        },
        
        // Social history
        smoking_positive: {
            prompts: [
                "Ask how many packs per day",
                "Ask for how many years",
                "Calculate pack-years",
                "Ask if they've tried quitting"
            ],
            keywords: ["smoke", "smoker", "pack"]
        },
        alcohol_positive: {
            prompts: [
                "Ask how many drinks per week",
                "Ask what type of alcohol",
                "Ask about blackouts or withdrawal",
                "Use CAGE questions if concerned"
            ],
            keywords: ["drink", "alcohol", "beer", "wine", "liquor"]
        },
        drug_positive: {
            prompts: [
                "Ask which substances specifically",
                "Ask about frequency of use",
                "Ask about IV drug use",
                "Ask about sharing needles"
            ],
            keywords: ["drugs", "marijuana", "cocaine", "heroin", "meth", "opioid"]
        },
        
        // Generic
        pain_generic: {
            prompts: [
                "Use OLDCARTS to fully characterize",
                "Ask about prior episodes",
                "Ask what makes it better/worse",
                "Ask about severity (1-10)"
            ],
            keywords: ["pain", "hurts", "ache", "sore"]
        },
        positive_symptom: {
            prompts: [
                "Ask about onset and duration",
                "Ask about severity",
                "Ask about what makes it better/worse",
                "Ask about associated symptoms"
            ],
            keywords: ["yes", "i do", "i have", "been having"]
        }
    };

    /**
     * Get follow-up suggestions based on topic and response
     */
    function getFollowUpSuggestions(question, response) {
        const qLower = question.toLowerCase();
        const rLower = response.toLowerCase();
        
        // Check each category
        for (const [category, data] of Object.entries(followUpPrompts)) {
            if (data.keywords.some(kw => qLower.includes(kw) || rLower.includes(kw))) {
                return {
                    category: category,
                    prompts: data.prompts
                };
            }
        }
        
        // Check for generic positive response
        if (rLower.includes("yes") || rLower.includes("i do") || rLower.includes("i have")) {
            if (qLower.includes("pain") || rLower.includes("pain")) {
                return {
                    category: "pain_generic",
                    prompts: followUpPrompts.pain_generic.prompts
                };
            }
            return {
                category: "positive_symptom",
                prompts: followUpPrompts.positive_symptom.prompts
            };
        }
        
        return null;
    }

    // ========================================================================
    // PATIENT PERSONALITY SYSTEM
    // Different communication styles that affect responses
    // ========================================================================
    
    const patientPersonalities = {
        verbose: {
            name: "Verbose",
            description: "Gives extra information unprompted",
            frequency: 0.15, // 15% of cases
            modifyResponse: function(response) {
                const additions = [
                    " I should also mention that ",
                    " Oh, and another thing - ",
                    " While we're on the topic, ",
                    " I almost forgot to say, "
                ];
                const extras = [
                    "I've been more tired lately too.",
                    "my appetite hasn't been great either.",
                    "I've been under a lot of stress at work.",
                    "I haven't been sleeping well.",
                    "my spouse thinks I should have come in sooner.",
                    "I've also had some muscle aches.",
                    "I've been drinking more water than usual."
                ];
                if (Math.random() > 0.4) {
                    return response + additions[Math.floor(Math.random() * additions.length)] + 
                           extras[Math.floor(Math.random() * extras.length)];
                }
                return response;
            }
        },
        
        reserved: {
            name: "Reserved",
            description: "Gives minimal information, needs follow-up questions",
            frequency: 0.15,
            modifyResponse: function(response) {
                // Shorten to first sentence
                const firstSentence = response.split(/[.!?]/)[0] + '.';
                if (firstSentence.length < response.length * 0.7) {
                    return firstSentence;
                }
                return response;
            }
        },
        
        anxious: {
            name: "Anxious",
            description: "Expresses worry, seeks reassurance",
            frequency: 0.15,
            modifyResponse: function(response) {
                const worries = [
                    " I'm really worried it might be something serious.",
                    " Do you think this is bad, doctor?",
                    " I've been so anxious about this.",
                    " My friend had similar symptoms and it turned out to be cancer...",
                    " I've been reading online and I'm scared.",
                    " Is this going to be okay?",
                    " I hope it's nothing serious..."
                ];
                if (Math.random() > 0.5) {
                    return response + worries[Math.floor(Math.random() * worries.length)];
                }
                return response;
            }
        },
        
        poorHistorian: {
            name: "Poor Historian",
            description: "Vague timelines, uncertain details",
            frequency: 0.10,
            modifyResponse: function(response) {
                const replacements = [
                    { find: /(\d+) days?/gi, replace: "a few days" },
                    { find: /(\d+) weeks?/gi, replace: "a while" },
                    { find: /(\d+) months?/gi, replace: "some time" },
                    { find: /yesterday/gi, replace: "recently" },
                    { find: /last week/gi, replace: "sometime recently" },
                    { find: /last month/gi, replace: "a while back" },
                    { find: /this morning/gi, replace: "earlier" }
                ];
                
                let modified = response;
                replacements.forEach(r => {
                    modified = modified.replace(r.find, r.replace);
                });
                
                const uncertainties = [
                    "I think... ",
                    "I'm not entirely sure, but ",
                    "Maybe... ",
                    "It's hard to remember exactly, but ",
                    "Let me think... "
                ];
                
                if (Math.random() > 0.4) {
                    return uncertainties[Math.floor(Math.random() * uncertainties.length)] + 
                           modified.charAt(0).toLowerCase() + modified.slice(1);
                }
                return modified;
            }
        },
        
        stoic: {
            name: "Stoic",
            description: "Downplays symptoms",
            frequency: 0.10,
            modifyResponse: function(response) {
                const replacements = [
                    { find: /very|really|extremely|severely/gi, replace: "a bit" },
                    { find: /terrible|awful|horrible/gi, replace: "not great" },
                    { find: /10 out of 10|10\/10/gi, replace: "maybe a 5 or 6" },
                    { find: /9 out of 10|9\/10/gi, replace: "maybe a 5" },
                    { find: /8 out of 10|8\/10/gi, replace: "maybe a 4" },
                    { find: /worst/gi, replace: "pretty bad" },
                    { find: /excruciating/gi, replace: "uncomfortable" },
                    { find: /unbearable/gi, replace: "bothersome" }
                ];
                
                let modified = response;
                replacements.forEach(r => {
                    modified = modified.replace(r.find, r.replace);
                });
                
                const minimizers = [
                    " But I'm probably just being dramatic.",
                    " It's probably nothing.",
                    " I'm sure it'll go away on its own.",
                    " I didn't want to bother you with this."
                ];
                
                if (Math.random() > 0.6) {
                    return modified + minimizers[Math.floor(Math.random() * minimizers.length)];
                }
                return modified;
            }
        },
        
        tangential: {
            name: "Tangential",
            description: "Goes off on tangents, hard to redirect",
            frequency: 0.05,
            modifyResponse: function(response) {
                const tangents = [
                    " That reminds me of when my grandmother had something similar back in '92...",
                    " Speaking of which, my neighbor is a nurse and she said I should come in.",
                    " Oh, that reminds me - I also wanted to ask about this mole on my arm.",
                    " My cousin had the same thing and they gave him some pills, I forget which ones."
                ];
                
                if (Math.random() > 0.5) {
                    return response + tangents[Math.floor(Math.random() * tangents.length)];
                }
                return response;
            }
        },
        
        neutral: {
            name: "Neutral",
            description: "Standard communication style",
            frequency: 0.30,
            modifyResponse: function(response) {
                return response;
            }
        }
    };

    /**
     * Select a random personality based on frequencies
     */
    function selectRandomPersonality() {
        const rand = Math.random();
        let cumulative = 0;
        
        for (const [key, personality] of Object.entries(patientPersonalities)) {
            cumulative += personality.frequency;
            if (rand < cumulative) {
                return key;
            }
        }
        return 'neutral';
    }

    /**
     * Apply personality to response
     */
    function applyPersonality(response, personalityType) {
        const personality = patientPersonalities[personalityType];
        if (personality && personality.modifyResponse) {
            return personality.modifyResponse(response);
        }
        return response;
    }

    // ========================================================================
    // SEMANTIC QUESTION UNDERSTANDING
    // Understand questions asked in different ways
    // ========================================================================
    
    const semanticPatterns = {
        chiefComplaint: {
            patterns: [
                "what brings you in",
                "what's going on",
                "what's the problem",
                "what's bothering you",
                "why are you here",
                "tell me about",
                "how can i help",
                "what seems to be the trouble",
                "what can i do for you"
            ],
            intentType: "chief_complaint"
        },
        elaborate: {
            patterns: [
                "tell me more",
                "go on",
                "can you explain",
                "what do you mean",
                "elaborate",
                "describe that",
                "more detail",
                "expand on that",
                "keep going"
            ],
            intentType: "elaborate"
        },
        anythingElse: {
            patterns: [
                "anything else",
                "what else",
                "is there more",
                "something else",
                "other symptoms",
                "any other",
                "is that all",
                "is there anything else"
            ],
            intentType: "anything_else"
        },
        confirmation: {
            patterns: [
                "is that right",
                "did i understand",
                "so you're saying",
                "let me make sure",
                "to clarify",
                "you mean",
                "so basically"
            ],
            intentType: "confirmation"
        },
        timeline: {
            patterns: [
                "walk me through",
                "from the beginning",
                "what happened first",
                "sequence of events",
                "in order",
                "start from the beginning",
                "take me through"
            ],
            intentType: "timeline"
        },
        comparison: {
            patterns: [
                "compared to before",
                "compared to usual",
                "different from normal",
                "like last time",
                "same as before",
                "getting better or worse"
            ],
            intentType: "comparison"
        }
    };

    const semanticResponses = {
        chief_complaint: [
            "Well, I've been having this {symptom} for about {duration}...",
            "It started with {symptom}. That's mainly why I came in today.",
            "I'm here because of {symptom}. It's been bothering me for {duration}."
        ],
        elaborate: [
            "Sure. So basically, {elaboration}",
            "Well, to give you more detail... {elaboration}",
            "Let me explain further. {elaboration}",
            "Okay, so {elaboration}"
        ],
        anything_else: [
            "I think that covers the main things.",
            "That's about all I can think of right now.",
            "Let me think... no, I think that's it.",
            "Actually, now that you mention it, I also noticed {additional}.",
            "I think that's everything. Was there something specific you wanted to know?"
        ],
        confirmation: [
            "Yes, that's right.",
            "Exactly.",
            "You've got it.",
            "That's correct.",
            "Yes, that's what I meant."
        ],
        timeline: [
            "Okay, so it started about {duration} ago. First I noticed {first_symptom}...",
            "Let me start from the beginning. {timeline_narrative}",
            "So chronologically, it went like this: {timeline_narrative}"
        ],
        comparison: [
            "It's definitely worse than usual.",
            "This is different from my normal {symptom}.",
            "It's about the same as last time this happened.",
            "It's actually getting better, but I wanted to make sure.",
            "It's the worst it's ever been."
        ]
    };

    /**
     * Detect semantic intent of question
     */
    function detectSemanticIntent(question) {
        const qLower = question.toLowerCase();
        
        for (const [category, data] of Object.entries(semanticPatterns)) {
            if (data.patterns.some(p => qLower.includes(p))) {
                return data.intentType;
            }
        }
        return null;
    }

    /**
     * Get response for semantic question
     */
    function getSemanticResponse(intent, context) {
        const responses = semanticResponses[intent];
        if (responses && responses.length > 0) {
            let response = responses[Math.floor(Math.random() * responses.length)];
            
            // Replace placeholders if context provided
            if (context) {
                response = response.replace('{symptom}', context.chiefComplaint || 'this problem');
                response = response.replace('{duration}', context.duration || 'a while');
                response = response.replace('{elaboration}', context.elaboration || 'it\'s been bothering me quite a bit');
                response = response.replace('{additional}', context.additional || 'some other minor things');
                response = response.replace('{first_symptom}', context.firstSymptom || 'the main symptom');
                response = response.replace('{timeline_narrative}', context.timeline || 'it all started recently');
            }
            
            return response;
        }
        return null;
    }

    // ========================================================================
    // DOORKNOB MOMENT FEATURE
    // Patient mentions something important at the end
    // ========================================================================
    
    const doorknobStatements = [
        "Oh, one more thing - {symptom}.",
        "I almost forgot to mention - {symptom}.",
        "By the way, should I have told you about {symptom}?",
        "My wife wanted me to make sure I told you about {symptom}.",
        "Oh wait, before you go - {symptom}.",
        "I know this might not be related, but {symptom}."
    ];

    const doorknobSymptoms = {
        cardiac: [
            "I've also had some chest discomfort",
            "I've been more short of breath climbing stairs",
            "my heart has been racing sometimes"
        ],
        neuro: [
            "I've had some numbness in my hands",
            "I've been having headaches too",
            "I've felt dizzy a few times"
        ],
        gi: [
            "I've noticed some blood in my stool",
            "I've been losing weight without trying",
            "my appetite has been poor"
        ],
        general: [
            "I've been more tired than usual",
            "I've had night sweats",
            "I've been running a low-grade fever"
        ],
        redFlags: [
            "I've had blood in my stool once",
            "I woke up drenched in sweat last night",
            "I've lost about 10 pounds without trying"
        ]
    };

    /**
     * Generate doorknob moment based on case
     */
    function generateDoorknobMoment(variant, askedQuestions) {
        // Only trigger sometimes (30% chance)
        if (Math.random() > 0.3) return null;
        
        // Use case-specific doorknob if defined
        if (variant && variant.doorknobSymptom) {
            const statement = doorknobStatements[Math.floor(Math.random() * doorknobStatements.length)];
            return {
                statement: statement.replace('{symptom}', variant.doorknobSymptom),
                isRedFlag: variant.doorknobIsRedFlag || false,
                relatedDiagnoses: variant.doorknobRelatedDx || []
            };
        }
        
        // Generate based on chief complaint
        let symptomCategory = 'general';
        if (variant && variant.chiefComplaint) {
            const cc = variant.chiefComplaint.toLowerCase();
            if (cc.includes('chest') || cc.includes('heart') || cc.includes('breath')) {
                symptomCategory = 'cardiac';
            } else if (cc.includes('head') || cc.includes('dizz') || cc.includes('weak')) {
                symptomCategory = 'neuro';
            } else if (cc.includes('abdom') || cc.includes('nausea') || cc.includes('vomit')) {
                symptomCategory = 'gi';
            }
        }
        
        // 20% chance of red flag doorknob
        if (Math.random() < 0.2) {
            const symptomList = doorknobSymptoms.redFlags;
            const symptom = symptomList[Math.floor(Math.random() * symptomList.length)];
            const statement = doorknobStatements[Math.floor(Math.random() * doorknobStatements.length)];
            return {
                statement: statement.replace('{symptom}', symptom),
                isRedFlag: true,
                teachingPoint: "This is an important symptom that could indicate a serious condition. Always ask 'Is there anything else?' before moving on."
            };
        }
        
        // Regular doorknob
        const symptomList = doorknobSymptoms[symptomCategory] || doorknobSymptoms.general;
        const symptom = symptomList[Math.floor(Math.random() * symptomList.length)];
        const statement = doorknobStatements[Math.floor(Math.random() * doorknobStatements.length)];
        
        return {
            statement: statement.replace('{symptom}', symptom),
            isRedFlag: false
        };
    }

    /**
     * Check if user asked "anything else" to potentially trigger doorknob
     */
    function shouldTriggerDoorknob(question) {
        const q = question.toLowerCase();
        return q.includes('anything else') || 
               q.includes('is that all') || 
               q.includes('something else') ||
               q.includes('before i') ||
               q.includes('that everything');
    }

    // ========================================================================
    // TIME PRESSURE MODE
    // Optional mode with time limit for history taking
    // ========================================================================
    
    const timePressureSettings = {
        enabled: false,
        totalTimeSeconds: 300, // 5 minutes default
        warningAtSeconds: 60, // Warning at 1 minute left
        startTime: null,
        timerInterval: null
    };

    function startTimePressure(seconds) {
        timePressureSettings.enabled = true;
        timePressureSettings.totalTimeSeconds = seconds || 300;
        timePressureSettings.startTime = Date.now();
        
        return {
            enabled: true,
            totalTime: timePressureSettings.totalTimeSeconds,
            message: `Time pressure mode enabled. You have ${Math.floor(seconds/60)} minutes to complete your history.`
        };
    }

    function getTimeRemaining() {
        if (!timePressureSettings.enabled || !timePressureSettings.startTime) {
            return null;
        }
        
        const elapsed = (Date.now() - timePressureSettings.startTime) / 1000;
        const remaining = timePressureSettings.totalTimeSeconds - elapsed;
        
        return {
            remaining: Math.max(0, remaining),
            isWarning: remaining <= timePressureSettings.warningAtSeconds && remaining > 0,
            isExpired: remaining <= 0,
            formattedTime: formatTime(Math.max(0, remaining))
        };
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    function stopTimePressure() {
        timePressureSettings.enabled = false;
        timePressureSettings.startTime = null;
        if (timePressureSettings.timerInterval) {
            clearInterval(timePressureSettings.timerInterval);
        }
    }

    // ========================================================================
    // QUESTION CATEGORY DISPLAY
    // Shows students what categories they've covered
    // ========================================================================
    
    const questionCategories = {
        chiefComplaint: {
            name: "Chief Complaint Details",
            icon: "🎯",
            elements: ["onset", "location", "duration", "character", "aggravating", "relieving", "timing", "severity", "radiation", "associated"]
        },
        pmh: {
            name: "Past Medical History",
            icon: "📋",
            elements: ["medical_history", "surgical_history", "hospitalizations"]
        },
        medications: {
            name: "Medications & Allergies",
            icon: "💊",
            elements: ["medications", "allergies", "compliance"]
        },
        socialHistory: {
            name: "Social History",
            icon: "👥",
            elements: ["smoking", "alcohol", "drugs", "occupation", "living_situation", "sexual_history"]
        },
        familyHistory: {
            name: "Family History",
            icon: "👨‍👩‍👧",
            elements: ["family_history"]
        },
        ros: {
            name: "Review of Systems",
            icon: "🔍",
            elements: ["ros_constitutional", "ros_cardiovascular", "ros_respiratory", "ros_gi", "ros_neuro", "ros_other"]
        }
    };

    /**
     * Categorize a question
     */
    function categorizeQuestion(questionText) {
        const q = questionText.toLowerCase();
        
        // Chief complaint / OLDCARTS
        if (q.includes('when did') || q.includes('how long') || q.includes('start')) return { category: 'chiefComplaint', element: 'onset' };
        if (q.includes('where') || q.includes('location') || q.includes('point to')) return { category: 'chiefComplaint', element: 'location' };
        if (q.includes('last for') || q.includes('how long does each')) return { category: 'chiefComplaint', element: 'duration' };
        if (q.includes('feel like') || q.includes('describe') || q.includes('character') || q.includes('sharp') || q.includes('dull')) return { category: 'chiefComplaint', element: 'character' };
        if (q.includes('worse') || q.includes('aggravate') || q.includes('trigger')) return { category: 'chiefComplaint', element: 'aggravating' };
        if (q.includes('better') || q.includes('relieve') || q.includes('help')) return { category: 'chiefComplaint', element: 'relieving' };
        if (q.includes('constant') || q.includes('come and go') || q.includes('pattern')) return { category: 'chiefComplaint', element: 'timing' };
        if (q.includes('how bad') || q.includes('scale') || q.includes('rate') || q.includes('1 to 10')) return { category: 'chiefComplaint', element: 'severity' };
        if (q.includes('spread') || q.includes('radiate') || q.includes('move')) return { category: 'chiefComplaint', element: 'radiation' };
        if (q.includes('other symptom') || q.includes('along with') || q.includes('associated')) return { category: 'chiefComplaint', element: 'associated' };
        
        // PMH
        if (q.includes('medical history') || q.includes('condition') || q.includes('diagnos') || q.includes('health problem')) return { category: 'pmh', element: 'medical_history' };
        if (q.includes('surgery') || q.includes('operation')) return { category: 'pmh', element: 'surgical_history' };
        if (q.includes('hospital')) return { category: 'pmh', element: 'hospitalizations' };
        
        // Medications
        if (q.includes('medication') || q.includes('medicine') || q.includes('taking') || q.includes('prescription')) return { category: 'medications', element: 'medications' };
        if (q.includes('allerg')) return { category: 'medications', element: 'allergies' };
        if (q.includes('compliance') || q.includes('regularly') || q.includes('miss') || q.includes('skip')) return { category: 'medications', element: 'compliance' };
        
        // Social history
        if (q.includes('smoke') || q.includes('tobacco') || q.includes('cigarette')) return { category: 'socialHistory', element: 'smoking' };
        if (q.includes('alcohol') || q.includes('drink') || q.includes('beer') || q.includes('wine')) return { category: 'socialHistory', element: 'alcohol' };
        if (q.includes('drug') || q.includes('marijuana') || q.includes('cocaine') || q.includes('recreational')) return { category: 'socialHistory', element: 'drugs' };
        if (q.includes('work') || q.includes('job') || q.includes('occupation') || q.includes('employ')) return { category: 'socialHistory', element: 'occupation' };
        if (q.includes('live') || q.includes('home') || q.includes('who do you')) return { category: 'socialHistory', element: 'living_situation' };
        if (q.includes('sexual') || q.includes('partner') || q.includes('intercourse')) return { category: 'socialHistory', element: 'sexual_history' };
        
        // Family history
        if (q.includes('family') && (q.includes('history') || q.includes('anyone') || q.includes('parent') || q.includes('sibling'))) return { category: 'familyHistory', element: 'family_history' };
        
        // ROS
        if (q.includes('fever') || q.includes('weight') || q.includes('appetite') || q.includes('fatigue') || q.includes('night sweat')) return { category: 'ros', element: 'ros_constitutional' };
        if (q.includes('chest pain') || q.includes('palpitation') || q.includes('edema') || q.includes('leg swell')) return { category: 'ros', element: 'ros_cardiovascular' };
        if (q.includes('cough') || q.includes('wheeze') || q.includes('breath') || q.includes('sputum')) return { category: 'ros', element: 'ros_respiratory' };
        if (q.includes('nausea') || q.includes('vomit') || q.includes('diarrhea') || q.includes('constipat') || q.includes('bowel')) return { category: 'ros', element: 'ros_gi' };
        if (q.includes('headache') || q.includes('dizz') || q.includes('numb') || q.includes('weak') || q.includes('vision')) return { category: 'ros', element: 'ros_neuro' };
        
        return { category: 'other', element: 'other' };
    }

    /**
     * Track question coverage
     */
    function trackCoverage(askedQuestions) {
        const covered = {};
        
        for (const [catKey, catData] of Object.entries(questionCategories)) {
            covered[catKey] = {
                name: catData.name,
                icon: catData.icon,
                elements: {},
                count: 0,
                total: catData.elements.length
            };
            catData.elements.forEach(el => {
                covered[catKey].elements[el] = false;
            });
        }
        
        askedQuestions.forEach(q => {
            const { category, element } = categorizeQuestion(q.text || q.question || q);
            if (covered[category] && covered[category].elements.hasOwnProperty(element)) {
                if (!covered[category].elements[element]) {
                    covered[category].elements[element] = true;
                    covered[category].count++;
                }
            }
        });
        
        return covered;
    }

    /**
     * Render coverage display
     */
    function renderCoverageDisplay(coverage) {
        let html = '<div class="question-coverage">';
        
        for (const [key, data] of Object.entries(coverage)) {
            if (key === 'other') continue;
            
            const percentage = Math.round((data.count / data.total) * 100);
            const statusClass = percentage >= 80 ? 'complete' : percentage >= 50 ? 'partial' : 'incomplete';
            
            html += `
                <div class="coverage-category ${statusClass}">
                    <span class="icon">${data.icon}</span>
                    <span class="name">${data.name}</span>
                    <span class="progress">${data.count}/${data.total}</span>
                </div>
            `;
        }
        
        html += '</div>';
        return html;
    }

    // ========================================================================
    // PUBLIC API
    // ========================================================================
    
    return {
        // Follow-up prompts
        getFollowUpSuggestions,
        
        // Patient personalities
        patientPersonalities,
        selectRandomPersonality,
        applyPersonality,
        
        // Semantic understanding
        detectSemanticIntent,
        getSemanticResponse,
        
        // Doorknob moment
        generateDoorknobMoment,
        shouldTriggerDoorknob,
        
        // Time pressure
        startTimePressure,
        getTimeRemaining,
        stopTimePressure,
        
        // Question categories
        categorizeQuestion,
        trackCoverage,
        renderCoverageDisplay,
        questionCategories
    };
    
})();

// Export for Node.js if applicable
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HistoryEnhancements;
}

console.log("✓ ReasonDx History Enhancements: Initialized");
