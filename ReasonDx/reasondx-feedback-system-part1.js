// ============================================================================
// REASONDX ULTIMATE FEEDBACK SYSTEM
// Comprehensive Student Coaching & Motivation Engine
// Version 1.0 - December 2025
// ============================================================================

// ============================================================================
// CORE FEEDBACK CONFIGURATION
// ============================================================================

const FeedbackConfig = {
    // Student personality/preference settings
    studentPreferences: {
        feedbackIntensity: 'balanced', // 'gentle', 'balanced', 'intense', 'board-mode'
        humorLevel: 'moderate',        // 'none', 'light', 'moderate', 'high'
        competitiveMode: true,         // Show peer comparisons
        celebrationLevel: 'full',      // 'minimal', 'moderate', 'full'
        mentorPersona: 'attending',    // 'attending', 'resident', 'peer', 'coach'
        focusAreas: []                 // Student-selected focus areas
    },
    
    // Feedback timing
    timing: {
        immediateDelay: 500,           // ms before showing immediate feedback
        reflectionPause: 2000,         // ms pause for reflection prompts
        celebrationDuration: 3000,     // ms for celebration animations
        coachingMomentDuration: 5000   // ms for detailed coaching
    },
    
    // Thresholds
    thresholds: {
        excellentPerformance: 90,
        goodPerformance: 75,
        needsWork: 50,
        struggling: 30
    }
};

// ============================================================================
// 1. CLINICAL ATTENDING PERSONA SYSTEM
// ============================================================================

const AttendingPersona = {
    
    personas: {
        attending: {
            name: "Dr. Chen",
            title: "Attending Physician",
            avatar: "👨‍⚕️",
            style: "warm but rigorous",
            phrases: {
                excellent: [
                    "Excellent clinical reasoning! That's exactly how I'd approach this.",
                    "You're thinking like a senior resident. Very impressive.",
                    "Perfect. This is the kind of systematic approach that saves lives.",
                    "Textbook reasoning. You should feel proud of this."
                ],
                good: [
                    "Good thinking. Let me show you how to take it one step further.",
                    "You're on the right track. A few refinements and this would be perfect.",
                    "Solid approach. Let's polish this together.",
                    "Nice work. Now let me share what I've learned over the years..."
                ],
                needsWork: [
                    "I see your thinking, but let's walk through this together.",
                    "Good effort. This is tricky - let me show you a framework.",
                    "You're learning. Every attending made these same mistakes once.",
                    "Let's pause here. This is actually a great teaching moment."
                ],
                struggling: [
                    "This is challenging material. Let's break it down step by step.",
                    "Don't worry - I've seen brilliant physicians struggle with this exact concept.",
                    "Take a breath. We're going to work through this together.",
                    "Remember, confusion is the first step to understanding."
                ],
                socratic: [
                    "What made you think of that first?",
                    "If that's true, what else would you expect to see?",
                    "And if you're wrong about this, what's your backup plan?",
                    "Walk me through your reasoning step by step."
                ]
            }
        },
        resident: {
            name: "Dr. Patel",
            title: "Chief Resident",
            avatar: "👩‍⚕️",
            style: "peer mentor, recently in your shoes",
            phrases: {
                excellent: [
                    "Dude, that was CLEAN. Wish I'd been that sharp as an MS3.",
                    "Okay, show-off. That was actually perfect though. 😄",
                    "This is exactly what attendings want to see on rounds.",
                    "You're going to crush your sub-I. Seriously."
                ],
                good: [
                    "Nice! I made the same mistake for months before someone taught me this trick...",
                    "So close! Here's the pearl that finally made this click for me.",
                    "Good foundation. Let me share what I wish someone had told me.",
                    "You're getting it. This took me way longer to figure out."
                ],
                needsWork: [
                    "Okay, real talk - this one tripped me up too. Here's what helped.",
                    "No shame in this. I bombed this exact question on Step 2.",
                    "Let me show you the shortcut I wish I'd known.",
                    "Classic trap. Let's make sure you never fall for it again."
                ],
                struggling: [
                    "Hey, it's okay. Medicine is hard. Let's figure this out together.",
                    "I literally cried over acid-base as an MS2. You've got this.",
                    "Take it slow. I promise this will click eventually.",
                    "Want me to explain this like I'm explaining to my roommate?"
                ]
            }
        },
        coach: {
            name: "Coach K",
            title: "Performance Coach",
            avatar: "🏆",
            style: "motivational, growth-focused",
            phrases: {
                excellent: [
                    "THAT'S what I'm talking about! You're in the zone! 🔥",
                    "Champions are made in moments like this. Beautiful work.",
                    "You just leveled up. Feel that? That's growth.",
                    "This is peak performance. Remember this feeling."
                ],
                good: [
                    "Good rep! Now let's add some weight and go again.",
                    "You're building muscle memory. Keep pushing.",
                    "Progress, not perfection. And you're definitely progressing.",
                    "Every expert started exactly where you are right now."
                ],
                needsWork: [
                    "This is where champions are made - in the struggle.",
                    "Setback? No. Setup for a comeback. Let's go again.",
                    "The only failure is not trying. You showed up. Now let's learn.",
                    "This mistake just made you better. Seriously."
                ],
                struggling: [
                    "Hey. Look at me. You belong here. Let's take this one step at a time.",
                    "The struggle is part of the process. Embrace it.",
                    "You're not behind. You're exactly where you need to be.",
                    "Remember why you started. That person believes in you."
                ]
            }
        },
        socratic: {
            name: "Professor Maieutic",
            title: "Socratic Guide",
            avatar: "🦉",
            style: "questions, never tells answers directly",
            phrases: {
                excellent: [
                    "Interesting conclusion. What evidence led you there?",
                    "And how would you defend this position to a skeptic?",
                    "You seem confident. What could prove you wrong?",
                    "Excellent. Now, what's the next question you should ask?"
                ],
                good: [
                    "You're close. What assumption are you making?",
                    "If this is true, what else must be true?",
                    "What would the answer look like if you approached it differently?",
                    "You've found A answer. Is it THE answer?"
                ],
                needsWork: [
                    "Let's slow down. What do you actually know for certain?",
                    "Where did your reasoning first diverge from the evidence?",
                    "If a colleague presented this logic, what would you challenge?",
                    "What question should you have asked first?"
                ],
                struggling: [
                    "Start simpler. What is the one thing you're sure of?",
                    "Forget what you think the answer is. What is the question asking?",
                    "If you taught this to someone else, where would you begin?",
                    "What would help you see this more clearly?"
                ]
            }
        }
    },

    currentPersona: 'attending',

    setPersona: function(personaKey) {
        if (this.personas[personaKey]) {
            this.currentPersona = personaKey;
        }
    },

    getResponse: function(performanceLevel, context = {}) {
        const persona = this.personas[this.currentPersona];
        const phrases = persona.phrases[performanceLevel];
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        
        return {
            persona: persona,
            message: randomPhrase,
            avatar: persona.avatar,
            name: persona.name,
            style: performanceLevel
        };
    },

    // Generate contextual response with specific feedback
    generateFeedback: function(performanceLevel, specificFeedback, context = {}) {
        const base = this.getResponse(performanceLevel, context);
        
        return {
            ...base,
            specificFeedback: specificFeedback,
            followUp: this.getFollowUp(performanceLevel, context),
            timestamp: new Date().toISOString()
        };
    },

    getFollowUp: function(performanceLevel, context) {
        if (performanceLevel === 'excellent') {
            return {
                type: 'challenge',
                message: "Ready for a harder one? 💪"
            };
        } else if (performanceLevel === 'struggling') {
            return {
                type: 'support',
                message: "Want me to break this down differently?"
            };
        } else {
            return {
                type: 'continue',
                message: "Let's keep building on this."
            };
        }
    },

    renderFeedbackBubble: function(feedback) {
        const bgColors = {
            excellent: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800',
            good: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800',
            needsWork: 'bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800',
            struggling: 'bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800'
        };

        return `
            <div class="feedback-bubble ${bgColors[feedback.style]} border-2 rounded-2xl p-4 mb-4 animate-fade-in">
                <div class="flex items-start gap-3">
                    <div class="text-3xl">${feedback.avatar}</div>
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="font-bold text-zinc-800 dark:text-zinc-200">${feedback.name}</span>
                            <span class="text-xs text-zinc-500 dark:text-zinc-400">${feedback.persona.title}</span>
                        </div>
                        <p class="text-zinc-700 dark:text-zinc-300 mb-2">${feedback.message}</p>
                        ${feedback.specificFeedback ? `
                            <div class="mt-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg text-sm">
                                ${feedback.specificFeedback}
                            </div>
                        ` : ''}
                        ${feedback.followUp ? `
                            <div class="mt-3 flex items-center gap-2">
                                <button class="px-3 py-1.5 bg-white dark:bg-zinc-700 rounded-lg text-sm 
                                               shadow-sm hover:shadow-md transition-shadow">
                                    ${feedback.followUp.message}
                                </button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }
};


// ============================================================================
// 2. "YOUR FUTURE SELF" LETTERS SYSTEM
// ============================================================================

const FutureSelfLetters = {
    
    templates: {
        breakthrough: {
            subject: "You finally got it!",
            template: (data) => `
Dear ${data.timeAgo} Self,

Remember when ${data.concept} seemed impossible? When you stared at ${data.specificStruggle} and felt completely lost?

Look at you now. You just ${data.achievement}.

${data.encouragement}

The attending on your ${data.futureRotation} is going to love you.

Keep going,
Future You (${data.futureRole})

P.S. ${data.postScript}
            `
        },
        milestone: {
            subject: "Look how far you've come",
            template: (data) => `
Dear Past Me,

I'm writing from ${data.futureContext}. You won't believe what just happened - ${data.recentWin}.

Remember when you completed your first ${data.firstMilestone}? You were so nervous. Now you've done ${data.currentCount}, and they feel like second nature.

${data.specificGrowth}

Trust the process. Every case matters.

Proud of you,
Future You

P.S. That thing you're worried about right now? It works out. Promise.
            `
        },
        encouragement: {
            subject: "A note for the hard days",
            template: (data) => `
Hey,

I know today was tough. ${data.struggle} is genuinely hard, and it's okay to feel frustrated.

But I need you to know something: ${data.reassurance}

In ${data.timeframe}, you're going to ${data.futureSuccess}. This struggle is part of that journey.

${data.practicalAdvice}

You've got this,
The You Who Made It

P.S. Go easy on yourself tonight. Rest is part of learning too.
            `
        }
    },

    generateLetter: function(type, userData) {
        const template = this.templates[type];
        if (!template) return null;

        const letterData = this.buildLetterData(type, userData);
        const content = template.template(letterData);

        return {
            subject: template.subject,
            content: content.trim(),
            type: type,
            generatedAt: new Date().toISOString(),
            canShare: true
        };
    },

    buildLetterData: function(type, userData) {
        // Build contextual data based on user's actual progress
        const data = {
            timeAgo: this.getTimeAgo(userData.startDate),
            concept: userData.currentTopic || "clinical reasoning",
            specificStruggle: userData.recentChallenge || "complex cases",
            achievement: userData.recentAchievement || "mastered a difficult concept",
            encouragement: this.getEncouragement(userData.performanceLevel),
            futureRotation: this.getNextRotation(userData.year),
            futureRole: this.getFutureRole(userData.year),
            postScript: this.getPostScript(userData),
            futureContext: this.getFutureContext(userData.year),
            recentWin: userData.recentWin || "helped your first patient",
            firstMilestone: userData.firstMilestone || "case",
            currentCount: userData.totalCasesCompleted || 0,
            specificGrowth: this.getGrowthNarrative(userData),
            struggle: userData.currentStruggle || "This material",
            reassurance: this.getReassurance(userData),
            timeframe: this.getTimeframe(userData),
            futureSuccess: this.getFutureSuccess(userData),
            practicalAdvice: this.getPracticalAdvice(userData)
        };

        return data;
    },

    getTimeAgo: function(startDate) {
        // Calculate relative time
        if (!startDate) return "Earlier";
        const days = Math.floor((Date.now() - new Date(startDate)) / (1000 * 60 * 60 * 24));
        if (days < 7) return "Last week's";
        if (days < 30) return "Last month's";
        return "Earlier this year's";
    },

    getEncouragement: function(level) {
        const phrases = {
            excellent: "You're not just passing - you're excelling. The hard work is paying off.",
            good: "You're building something real. Every case is making you sharper.",
            needsWork: "The fact that you're still here, still trying, means everything.",
            struggling: "This confusion you're feeling? It's your brain literally growing. Keep going."
        };
        return phrases[level] || phrases.good;
    },

    getNextRotation: function(year) {
        const rotations = {
            'MS1': 'clinical skills course',
            'MS2': 'Step 1 prep',
            'MS3': 'internal medicine clerkship',
            'MS4': 'sub-internship'
        };
        return rotations[year] || 'next rotation';
    },

    getFutureRole: function(year) {
        const roles = {
            'MS1': 'MS2, crushing pathophysiology',
            'MS2': 'MS3, seeing real patients',
            'MS3': 'MS4, getting into your top program',
            'MS4': 'PGY-1, actually a doctor (!)'
        };
        return roles[year] || 'future physician';
    },

    getPostScript: function(userData) {
        const options = [
            "That coffee you're about to get? Get the large. You've earned it.",
            "Text that friend you've been meaning to catch up with. Balance matters.",
            "The imposter syndrome never fully goes away. But you'll learn it lies.",
            "Your patients are going to be lucky to have you."
        ];
        return options[Math.floor(Math.random() * options.length)];
    },

    getFutureContext: function(year) {
        const contexts = {
            'MS1': 'the anatomy lab (yes, you survive it)',
            'MS2': 'the library during Step 1 dedicated',
            'MS3': 'the hospital on your first overnight call',
            'MS4': 'interview season (you got multiple interviews!)'
        };
        return contexts[year] || 'the future';
    },

    getGrowthNarrative: function(userData) {
        if (!userData.improvements) {
            return "Your diagnostic accuracy has improved significantly. Your reasoning is more systematic. You're becoming a clinician.";
        }
        return `Your ${userData.improvements.join(' and ')} have improved dramatically. You're not the same learner you were.`;
    },

    getReassurance: function(userData) {
        return "every physician you admire once felt exactly like you do right now. Confused. Overwhelmed. Wondering if they'd ever get it. They did. You will too.";
    },

    getTimeframe: function(userData) {
        return "a few weeks";
    },

    getFutureSuccess: function(userData) {
        const successes = [
            "diagnose something that everyone else missed",
            "have an attending compliment your presentation",
            "feel genuinely confident for the first time",
            "help a patient who really needed you"
        ];
        return successes[Math.floor(Math.random() * successes.length)];
    },

    getPracticalAdvice: function(userData) {
        const advice = [
            "Review the case one more time tomorrow. Sleep consolidates memory.",
            "Try teaching this concept to someone else - it clarifies everything.",
            "Sometimes the best thing you can do is step away and come back fresh.",
            "Write down exactly what confuses you. Named problems are solvable problems."
        ];
        return advice[Math.floor(Math.random() * advice.length)];
    },

    renderLetter: function(letter) {
        return `
            <div class="future-self-letter bg-gradient-to-br from-amber-50 to-orange-50 
                        dark:from-amber-900/20 dark:to-orange-900/20 
                        rounded-xl shadow-lg overflow-hidden max-w-lg mx-auto">
                <!-- Envelope animation -->
                <div class="bg-amber-100 dark:bg-amber-800/50 px-6 py-3 border-b border-amber-200 dark:border-amber-700">
                    <div class="flex items-center gap-2">
                        <span class="text-2xl">✉️</span>
                        <span class="font-medium text-amber-800 dark:text-amber-200">
                            Letter from Your Future Self
                        </span>
                    </div>
                </div>
                
                <!-- Letter content -->
                <div class="p-6">
                    <div class="font-serif text-zinc-800 dark:text-zinc-200 whitespace-pre-line leading-relaxed">
                        ${letter.content}
                    </div>
                </div>
                
                <!-- Actions -->
                <div class="px-6 pb-6 flex gap-2">
                    <button onclick="FutureSelfLetters.saveLetter()" 
                            class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm">
                        💾 Save to Journal
                    </button>
                    <button onclick="FutureSelfLetters.shareLetter()"
                            class="px-4 py-2 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 
                                   rounded-lg text-sm border border-zinc-200 dark:border-zinc-600">
                        📤 Share (Anonymous)
                    </button>
                </div>
            </div>
        `;
    },

    saveLetter: function() {
        // Save to localStorage journal
        console.log('Letter saved to journal');
    },

    shareLetter: function() {
        // Share anonymously
        console.log('Letter shared anonymously');
    }
};


// ============================================================================
// 3. REAL-TIME "THINKING ANNOTATIONS" SYSTEM
// ============================================================================

const ThinkingAnnotations = {
    
    // Expert thinking patterns for different actions
    thinkingPatterns: {
        orderTest: {
            'troponin': [
                "Good instinct. With this presentation, I'm calculating my pretest probability for ACS. I'm expecting either a clear positive or a gray-zone value that needs serial measurements.",
                "Troponin is my pivot point here. If it's positive, we're activating certain pathways. If negative, I'm thinking about what else could cause this.",
                "I always think about timing with troponin. Has enough time passed since symptom onset for it to rise?"
            ],
            'cbc': [
                "I'm looking for three things: Is there infection (WBC)? Is there bleeding or anemia (Hgb)? Are platelets okay for procedures?",
                "The CBC tells a story. I'm already forming hypotheses about what I'll find.",
                "This is my screening test. It rarely gives the diagnosis but often points me in the right direction."
            ],
            'd-dimer': [
                "D-dimer is tricky. I only order it when I want to RULE OUT, not rule in. Is my pretest probability low enough?",
                "If this is positive, it doesn't confirm PE - it just means I can't rule it out. If negative, I'm done.",
                "I'm thinking about what will happen with each result before I even order it."
            ],
            'lactate': [
                "Lactate tells me about tissue perfusion. If this is elevated, I'm worried about shock even if vitals look okay.",
                "This is my 'how sick is this patient really' test. It changes my urgency level.",
                "I'm already planning my response to high vs normal lactate."
            ],
            'abg': [
                "ABG gives me the full picture: oxygenation, ventilation, and acid-base. I'm looking for patterns.",
                "I'm going to calculate the A-a gradient and check for compensation. The story is in the details.",
                "This tells me what the lungs are doing and whether the body is compensating."
            ]
        },
        selectDiagnosis: {
            'high_confidence': [
                "I'm fairly confident, but I'm keeping my differential open until I have more data.",
                "This fits well, but I'm asking myself: what would prove me wrong?",
                "My gut says this, but I've learned to trust-but-verify my instincts."
            ],
            'moderate_confidence': [
                "I'm between a few possibilities. I need a discriminating test or finding.",
                "The pattern isn't quite clicking yet. What am I missing?",
                "This is where systematic thinking beats intuition. Let me work through this."
            ],
            'low_confidence': [
                "Something doesn't fit. I'm going back to basics: what do I actually know?",
                "When I'm stuck, I restart from the chief complaint. What brought them in?",
                "Time to broaden my differential. What haven't I considered?"
            ]
        },
        clinicalReasoning: {
            'pattern_recognition': [
                "I've seen this pattern before. Classic presentation of...",
                "This reminds me of a case from residency. Let me test that hypothesis.",
                "The gestalt is pointing one direction. Now to confirm with data."
            ],
            'analytical': [
                "I'm working through this systematically. First principles.",
                "Let me build this up from pathophysiology. What causes these findings?",
                "I'm going to think about mechanisms, not just pattern match."
            ],
            'bayesian': [
                "Given the pretest probability and this finding, I'm revising my estimate to...",
                "This finding has a high likelihood ratio. It significantly changes my thinking.",
                "I'm updating my probability estimate with each new piece of information."
            ]
        }
    },

    currentAnnotation: null,

    // Get expert thinking for an action
    getThinking: function(action, context) {
        let patterns;
        
        if (action.type === 'orderTest') {
            patterns = this.thinkingPatterns.orderTest[action.test] || 
                       this.thinkingPatterns.orderTest['generic'] ||
                       ["I'm thinking about what this test will tell me and what I'll do with each result."];
        } else if (action.type === 'selectDiagnosis') {
            const confidenceLevel = context.confidence > 80 ? 'high_confidence' : 
                                   context.confidence > 50 ? 'moderate_confidence' : 'low_confidence';
            patterns = this.thinkingPatterns.selectDiagnosis[confidenceLevel];
        } else if (action.type === 'clinicalReasoning') {
            patterns = this.thinkingPatterns.clinicalReasoning[context.reasoningType] ||
                       this.thinkingPatterns.clinicalReasoning['analytical'];
        }

        const thought = patterns[Math.floor(Math.random() * patterns.length)];
        
        this.currentAnnotation = {
            thought: thought,
            action: action,
            context: context,
            timestamp: Date.now()
        };

        return this.currentAnnotation;
    },

    // Compare student thinking to expert thinking
    compareThinking: function(studentAction, expertAction) {
        const comparison = {
            aligned: false,
            feedback: '',
            expertThought: '',
            gap: null
        };

        // Check if actions align
        if (studentAction.type === expertAction.type) {
            if (studentAction.value === expertAction.value) {
                comparison.aligned = true;
                comparison.feedback = "You're thinking like an expert here!";
                comparison.expertThought = `I was thinking the same thing: ${this.getThinking(expertAction, {}).thought}`;
            } else {
                comparison.aligned = false;
                comparison.gap = 'different_choice';
                comparison.feedback = "Interesting choice. Here's what I was considering...";
                comparison.expertThought = this.getThinking(expertAction, {}).thought;
            }
        } else {
            comparison.aligned = false;
            comparison.gap = 'different_approach';
            comparison.feedback = "You took a different approach. Let me share my thinking...";
            comparison.expertThought = this.getThinking(expertAction, {}).thought;
        }

        return comparison;
    },

    renderAnnotation: function(annotation, position = 'inline') {
        const positionStyles = {
            inline: 'relative',
            floating: 'fixed bottom-4 right-4 max-w-sm',
            sidebar: 'absolute right-0 top-0 w-64'
        };

        return `
            <div class="thinking-annotation ${positionStyles[position]} 
                        bg-gradient-to-r from-blue-50 to-indigo-50 
                        dark:from-blue-900/30 dark:to-indigo-900/30
                        border border-blue-200 dark:border-blue-800 
                        rounded-lg p-4 shadow-lg animate-fade-in">
                <div class="flex items-start gap-3">
                    <div class="text-2xl animate-pulse">💭</div>
                    <div>
                        <div class="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">
                            Expert Thinking
                        </div>
                        <p class="text-zinc-700 dark:text-zinc-300 text-sm italic">
                            "${annotation.thought}"
                        </p>
                    </div>
                </div>
            </div>
        `;
    },

    renderComparison: function(comparison) {
        return `
            <div class="thinking-comparison bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
                <div class="p-4 ${comparison.aligned ? 
                    'bg-green-50 dark:bg-green-900/30' : 
                    'bg-amber-50 dark:bg-amber-900/30'}">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-xl">${comparison.aligned ? '🎯' : '🤔'}</span>
                        <span class="font-medium text-zinc-800 dark:text-zinc-200">
                            ${comparison.feedback}
                        </span>
                    </div>
                    <div class="pl-8 text-sm text-zinc-600 dark:text-zinc-400 italic">
                        "${comparison.expertThought}"
                    </div>
                </div>
            </div>
        `;
    }
};


// ============================================================================
// 4. "THE SAVE" COUNTER SYSTEM
// ============================================================================

const SaveCounter = {
    
    data: {
        totalSaves: 0,
        savesByCategory: {},
        recentSaves: [],
        saveRate: 0,
        rank: null,
        streak: 0
    },

    saveTypes: {
        'missed_stemi': {
            title: 'STEMI Recognition',
            icon: '❤️',
            severity: 'critical',
            narrative: 'would have died from a missed heart attack',
            impact: 'Door-to-balloon time optimized. Myocardium saved.'
        },
        'missed_pe': {
            title: 'PE Detection',
            icon: '🫁',
            severity: 'critical',
            narrative: 'would have arrested from a massive PE',
            impact: 'Anticoagulation started. Clot burden reduced.'
        },
        'missed_sepsis': {
            title: 'Sepsis Recognition',
            icon: '🦠',
            severity: 'critical',
            narrative: 'was heading toward septic shock',
            impact: 'Antibiotics within 1 hour. Mortality reduced by 7% per hour saved.'
        },
        'missed_meningitis': {
            title: 'Meningitis Catch',
            icon: '🧠',
            severity: 'critical',
            narrative: 'would have suffered permanent brain damage',
            impact: 'LP and antibiotics expedited. Neurologic outcome preserved.'
        },
        'missed_dka': {
            title: 'DKA Management',
            icon: '💉',
            severity: 'high',
            narrative: 'was developing cerebral edema',
            impact: 'Appropriate fluid and insulin management. Electrolytes corrected safely.'
        },
        'missed_aortic_dissection': {
            title: 'Dissection Recognition',
            icon: '🫀',
            severity: 'critical',
            narrative: 'would have ruptured and died',
            impact: 'Blood pressure controlled. Surgery consulted emergently.'
        },
        'medication_error_prevented': {
            title: 'Med Error Prevented',
            icon: '💊',
            severity: 'high',
            narrative: 'would have received a harmful medication',
            impact: 'Allergy/interaction caught. Harm prevented.'
        },
        'early_deterioration': {
            title: 'Deterioration Caught',
            icon: '📉',
            severity: 'high',
            narrative: 'was about to crash',
            impact: 'Rapid response activated. ICU transfer arranged.'
        }
    },

    recordSave: function(saveType, context = {}) {
        const saveInfo = this.saveTypes[saveType];
        if (!saveInfo) return;

        const save = {
            id: `save_${Date.now()}`,
            type: saveType,
            info: saveInfo,
            context: context,
            timestamp: new Date().toISOString()
        };

        this.data.totalSaves++;
        this.data.savesByCategory[saveType] = (this.data.savesByCategory[saveType] || 0) + 1;
        this.data.recentSaves.unshift(save);
        if (this.data.recentSaves.length > 10) {
            this.data.recentSaves.pop();
        }
        this.data.streak++;

        // Save to localStorage
        this.persist();

        // Show celebration
        this.showSaveCelebration(save);

        return save;
    },

    showSaveCelebration: function(save) {
        const html = this.renderSaveCelebration(save);
        // In production, inject into DOM
        console.log('SAVE!', save);
        return html;
    },

    renderSaveCelebration: function(save) {
        return `
            <div class="save-celebration fixed inset-0 flex items-center justify-center z-50 
                        bg-black/50 animate-fade-in" onclick="this.remove()">
                <div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl p-8 max-w-md 
                            transform animate-bounce-in text-center">
                    <!-- Big icon with pulse -->
                    <div class="text-6xl mb-4 animate-pulse">
                        ${save.info.icon}
                    </div>
                    
                    <!-- Save badge -->
                    <div class="inline-block px-4 py-1 bg-red-600 text-white rounded-full 
                                text-sm font-bold uppercase tracking-wider mb-4">
                        🏆 Save #${this.data.totalSaves}
                    </div>
                    
                    <!-- Title -->
                    <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                        ${save.info.title}!
                    </h2>
                    
                    <!-- Narrative -->
                    <p class="text-zinc-600 dark:text-zinc-400 mb-4">
                        This patient <span class="font-medium text-red-600">${save.info.narrative}</span>.
                        <br>You caught it.
                    </p>
                    
                    <!-- Impact -->
                    <div class="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-6">
                        <div class="text-sm text-green-800 dark:text-green-200">
                            <strong>Impact:</strong> ${save.info.impact}
                        </div>
                    </div>
                    
                    <!-- Stats -->
                    <div class="flex justify-center gap-6 text-sm">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-zinc-900 dark:text-white">
                                ${this.data.totalSaves}
                            </div>
                            <div class="text-zinc-500">Total Saves</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-zinc-900 dark:text-white">
                                ${this.data.streak}🔥
                            </div>
                            <div class="text-zinc-500">Streak</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-green-600">
                                ${Math.round(this.data.saveRate)}%
                            </div>
                            <div class="text-zinc-500">Save Rate</div>
                        </div>
                    </div>
                    
                    <!-- Dismiss -->
                    <p class="text-xs text-zinc-400 mt-6">Tap anywhere to continue</p>
                </div>
            </div>
        `;
    },

    renderSavesDashboard: function() {
        return `
            <div class="saves-dashboard bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
                <!-- Header -->
                <div class="bg-gradient-to-r from-red-600 to-pink-600 p-6 text-white">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-xl font-bold">🏆 Your Saves</h3>
                            <p class="text-red-200">Patients whose lives you've changed</p>
                        </div>
                        <div class="text-right">
                            <div class="text-4xl font-bold">${this.data.totalSaves}</div>
                            <div class="text-red-200 text-sm">Lives Saved</div>
                        </div>
                    </div>
                </div>
                
                <!-- Stats grid -->
                <div class="grid grid-cols-3 gap-4 p-4 border-b border-zinc-200 dark:border-zinc-700">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-zinc-900 dark:text-white">
                            ${Math.round(this.data.saveRate)}%
                        </div>
                        <div class="text-xs text-zinc-500">Save Rate</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-zinc-900 dark:text-white">
                            ${this.data.streak}
                        </div>
                        <div class="text-xs text-zinc-500">Current Streak</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-zinc-900 dark:text-white">
                            ${this.data.rank || 'Top 20%'}
                        </div>
                        <div class="text-xs text-zinc-500">Your Rank</div>
                    </div>
                </div>
                
                <!-- Recent saves -->
                <div class="p-4">
                    <h4 class="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Recent Saves</h4>
                    <div class="space-y-2">
                        ${this.data.recentSaves.slice(0, 5).map(save => `
                            <div class="flex items-center gap-3 p-2 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                                <span class="text-xl">${save.info.icon}</span>
                                <div class="flex-1">
                                    <div class="font-medium text-sm text-zinc-800 dark:text-zinc-200">
                                        ${save.info.title}
                                    </div>
                                    <div class="text-xs text-zinc-500">
                                        ${new Date(save.timestamp).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    persist: function() {
        localStorage.setItem('reasondx_saves', JSON.stringify(this.data));
    },

    load: function() {
        const saved = localStorage.getItem('reasondx_saves');
        if (saved) {
            this.data = JSON.parse(saved);
        }
    }
};


// ============================================================================
// 5. LEARNING MOMENTS (MISTAKE REFRAMING) SYSTEM
// ============================================================================

const LearningMoments = {
    
    moments: [],

    recordMoment: function(mistake, correction, context) {
        const moment = {
            id: `moment_${Date.now()}`,
            timestamp: new Date().toISOString(),
            category: context.category || 'general',
            topic: context.topic,
            
            // What happened
            original: {
                answer: mistake.studentAnswer,
                reasoning: mistake.studentReasoning
            },
            
            // The learning
            lesson: {
                correctAnswer: correction.correctAnswer,
                explanation: correction.explanation,
                keyInsight: correction.keyInsight,
                clinicalPearl: correction.clinicalPearl
            },
            
            // Growth tracking
            subsequentAttempts: [],
            mastered: false,
            masteredDate: null
        };

        this.moments.unshift(moment);
        this.persist();

        return moment;
    },

    recordSubsequentAttempt: function(momentId, correct) {
        const moment = this.moments.find(m => m.id === momentId);
        if (moment) {
            moment.subsequentAttempts.push({
                timestamp: new Date().toISOString(),
                correct: correct
            });

            // Check for mastery (3 correct in a row)
            const recent = moment.subsequentAttempts.slice(-3);
            if (recent.length >= 3 && recent.every(a => a.correct)) {
                moment.mastered = true;
                moment.masteredDate = new Date().toISOString();
            }

            this.persist();
        }
    },

    generateReframedFeedback: function(mistake, correction, context) {
        const templates = [
            {
                opener: "Interesting thinking!",
                body: `You chose ${mistake.studentAnswer}, which shows you're considering ${this.inferReasoning(mistake)}. The key distinction here is...`,
                closer: "This is exactly the kind of nuance that separates good from great clinicians."
            },
            {
                opener: "Good instinct, small adjustment needed.",
                body: `Your answer of ${mistake.studentAnswer} isn't wrong in another context. Here, though...`,
                closer: "Filing this away will serve you well on the wards."
            },
            {
                opener: "This is a classic teaching point!",
                body: `Many students (and residents!) make this exact association. Here's the pearl...`,
                closer: "You won't make this mistake again. Guaranteed."
            },
            {
                opener: "Let me show you a framework.",
                body: `When you see ${context.clinicalFeature || 'this pattern'}, your first thought should be...`,
                closer: "Add this to your mental toolkit."
            }
        ];

        const template = templates[Math.floor(Math.random() * templates.length)];

        return {
            opener: template.opener,
            body: template.body.replace(/\.\.\./g, correction.explanation),
            closer: template.closer,
            keyInsight: correction.keyInsight,
            clinicalPearl: correction.clinicalPearl,
            addToReview: true
        };
    },

    inferReasoning: function(mistake) {
        // Try to understand why student made this choice
        // In production, would use more sophisticated analysis
        return "an important differential";
    },

    renderFeedback: function(feedback) {
        return `
            <div class="learning-moment bg-gradient-to-r from-purple-50 to-pink-50 
                        dark:from-purple-900/30 dark:to-pink-900/30
                        border-l-4 border-purple-500 rounded-r-xl p-5 my-4 animate-slide-in">
                <!-- Opener -->
                <div class="flex items-center gap-2 mb-3">
                    <span class="text-2xl">💡</span>
                    <span class="font-bold text-purple-800 dark:text-purple-200 text-lg">
                        ${feedback.opener}
                    </span>
                </div>
                
                <!-- Body -->
                <p class="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
                    ${feedback.body}
                </p>
                
                <!-- Key insight box -->
                ${feedback.keyInsight ? `
                    <div class="bg-white/60 dark:bg-black/20 rounded-lg p-4 mb-4">
                        <div class="text-sm font-medium text-purple-700 dark:text-purple-300 mb-1">
                            🔑 Key Insight
                        </div>
                        <div class="text-zinc-800 dark:text-zinc-200">
                            ${feedback.keyInsight}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Clinical pearl -->
                ${feedback.clinicalPearl ? `
                    <div class="bg-amber-50 dark:bg-amber-900/30 rounded-lg p-4 mb-4">
                        <div class="text-sm font-medium text-amber-700 dark:text-amber-300 mb-1">
                            💎 Clinical Pearl
                        </div>
                        <div class="text-zinc-800 dark:text-zinc-200">
                            ${feedback.clinicalPearl}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Closer -->
                <p class="text-zinc-600 dark:text-zinc-400 text-sm italic">
                    ${feedback.closer}
                </p>
                
                <!-- Action buttons -->
                <div class="flex gap-2 mt-4">
                    <button onclick="LearningMoments.addToReview()"
                            class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm">
                        📝 Add to Review List
                    </button>
                    <button onclick="LearningMoments.explainMore()"
                            class="px-4 py-2 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 
                                   rounded-lg text-sm border border-zinc-200 dark:border-zinc-600">
                        🤔 Explain More
                    </button>
                </div>
            </div>
        `;
    },

    renderMomentMuseum: function() {
        const mastered = this.moments.filter(m => m.mastered);
        const learning = this.moments.filter(m => !m.mastered);

        return `
            <div class="moment-museum bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                    <h3 class="text-xl font-bold">🏛️ Your Learning Moments Museum</h3>
                    <p class="text-purple-200">Every mistake is a step forward</p>
                </div>
                
                <div class="p-4">
                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-4 mb-6">
                        <div class="text-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                            <div class="text-2xl font-bold text-purple-600">${this.moments.length}</div>
                            <div class="text-xs text-zinc-500">Total Moments</div>
                        </div>
                        <div class="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                            <div class="text-2xl font-bold text-green-600">${mastered.length}</div>
                            <div class="text-xs text-zinc-500">Mastered ✓</div>
                        </div>
                        <div class="text-center p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                            <div class="text-2xl font-bold text-amber-600">${learning.length}</div>
                            <div class="text-xs text-zinc-500">In Progress</div>
                        </div>
                    </div>
                    
                    <!-- Recent moments -->
                    <h4 class="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Recent Learning</h4>
                    <div class="space-y-3">
                        ${this.moments.slice(0, 5).map(m => `
                            <div class="p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="font-medium text-zinc-800 dark:text-zinc-200">
                                        ${m.topic}
                                    </span>
                                    ${m.mastered ? 
                                        '<span class="text-green-600 text-sm">✓ Mastered</span>' :
                                        `<span class="text-amber-600 text-sm">${m.subsequentAttempts.filter(a => a.correct).length}/3</span>`
                                    }
                                </div>
                                <p class="text-sm text-zinc-600 dark:text-zinc-400">
                                    ${m.lesson.keyInsight}
                                </p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    persist: function() {
        localStorage.setItem('reasondx_learning_moments', JSON.stringify(this.moments));
    },

    load: function() {
        const saved = localStorage.getItem('reasondx_learning_moments');
        if (saved) {
            this.moments = JSON.parse(saved);
        }
    },

    addToReview: function() {
        console.log('Added to review list');
    },

    explainMore: function() {
        console.log('Explaining more...');
    }
};

// Continue in Part 2...
console.log('ReasonDx Feedback System Part 1 loaded');
