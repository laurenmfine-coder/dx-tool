// ============================================================================
// REASONDX ULTIMATE FEEDBACK SYSTEM - PART 3
// Weekly Reports, Emotional Intelligence, Advanced Gamification
// ============================================================================

// ============================================================================
// 11. WEEKLY COACHING REPORT
// ============================================================================

const WeeklyCoachingReport = {
    
    generateReport: function(weekData) {
        const report = {
            generatedAt: new Date().toISOString(),
            weekOf: this.getWeekRange(),
            
            // Wins
            wins: this.identifyWins(weekData),
            
            // Growth areas
            growth: this.identifyGrowth(weekData),
            
            // Focus for next week
            focus: this.generateFocus(weekData),
            
            // Personal message
            message: this.generatePersonalMessage(weekData),
            
            // Stats
            stats: this.compileStats(weekData)
        };
        
        return report;
    },

    getWeekRange: function() {
        const now = new Date();
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        return {
            start: weekAgo.toLocaleDateString(),
            end: now.toLocaleDateString()
        };
    },

    identifyWins: function(weekData) {
        const wins = [];
        
        // Cases completed
        if (weekData.casesCompleted > weekData.weeklyGoal) {
            wins.push({
                icon: '🎯',
                title: `Completed ${weekData.casesCompleted} cases`,
                detail: `Above your goal of ${weekData.weeklyGoal}!`
            });
        }
        
        // Perfect scores
        if (weekData.perfectCases > 0) {
            wins.push({
                icon: '💯',
                title: `${weekData.perfectCases} perfect case${weekData.perfectCases > 1 ? 's' : ''}`,
                detail: 'Flawless diagnostic reasoning'
            });
        }
        
        // No missed critical diagnoses
        if (weekData.missedCritical === 0) {
            wins.push({
                icon: '🏆',
                title: 'Zero missed critical diagnoses',
                detail: 'Your patients are safe with you'
            });
        }
        
        // Fastest diagnosis
        if (weekData.fastestDiagnosis) {
            wins.push({
                icon: '⚡',
                title: `Fastest ${weekData.fastestDiagnosis.name} ever`,
                detail: `${weekData.fastestDiagnosis.time} seconds`
            });
        }
        
        // Streak
        if (weekData.currentStreak > 5) {
            wins.push({
                icon: '🔥',
                title: `${weekData.currentStreak}-day streak`,
                detail: 'Consistency builds expertise'
            });
        }
        
        // New mastery
        if (weekData.newMasteries && weekData.newMasteries.length > 0) {
            wins.push({
                icon: '🌟',
                title: `Mastered: ${weekData.newMasteries.join(', ')}`,
                detail: 'Added to your clinical toolkit'
            });
        }
        
        return wins;
    },

    identifyGrowth: function(weekData) {
        const growth = [];
        
        // Improving areas
        if (weekData.improvingTopics && weekData.improvingTopics.length > 0) {
            weekData.improvingTopics.forEach(topic => {
                growth.push({
                    icon: '📈',
                    title: `${topic.name} improving`,
                    detail: `+${topic.improvement}% this week`
                });
            });
        }
        
        // Better questioning
        if (weekData.historyTakingImproved) {
            growth.push({
                icon: '❓',
                title: 'Asking better questions',
                detail: 'Your history-taking efficiency improved'
            });
        }
        
        // Faster pattern recognition
        if (weekData.patternRecognitionSpeed) {
            growth.push({
                icon: '🧠',
                title: 'Faster pattern recognition',
                detail: `${weekData.patternRecognitionSpeed}% faster than last week`
            });
        }
        
        return growth;
    },

    generateFocus: function(weekData) {
        const focus = [];
        
        // Avoided topics
        if (weekData.avoidedTopics && weekData.avoidedTopics.length > 0) {
            focus.push({
                icon: '🎯',
                title: `${weekData.avoidedTopics[0]} - you've been avoiding this`,
                suggestion: 'Try one case this week'
            });
        }
        
        // Weak areas
        if (weekData.weakestArea) {
            focus.push({
                icon: '💪',
                title: `${weekData.weakestArea.name} needs attention`,
                suggestion: `${weekData.weakestArea.accuracy}% accuracy - aim for 80%`
            });
        }
        
        // Challenge suggestion
        if (weekData.readyForChallenge) {
            focus.push({
                icon: '🚀',
                title: 'Try one "hard mode" case',
                suggestion: "You're ready for more challenge"
            });
        }
        
        return focus;
    },

    generatePersonalMessage: function(weekData) {
        const messages = {
            excellent: [
                "You're building real clinical intuition. I noticed you've started checking lactate earlier in sepsis cases - that's exactly how experts think. Keep it up!",
                "Your diagnostic accuracy this week was exceptional. You're not just learning medicine - you're becoming a clinician.",
                "The improvement in your reasoning speed tells me the patterns are clicking. This is what deliberate practice looks like."
            ],
            good: [
                "Solid week of learning. Remember, consistency beats intensity. You're building something real here.",
                "You're making progress in all the right areas. Focus on that weak spot this week and you'll be in great shape.",
                "Every case you complete is another pattern in your mental library. Keep stacking them up."
            ],
            struggling: [
                "I know this week was tough. Medicine is hard, and everyone has weeks like this. What matters is that you're still here.",
                "Progress isn't always linear. Sometimes we have to sit with confusion before the breakthrough comes. You've got this.",
                "Remember why you started. That person who dreamed of becoming a doctor? They'd be proud you're still fighting."
            ],
            returning: [
                "Welcome back! Picking up where you left off shows real commitment. Let's build some momentum.",
                "Good to see you again. Even a small amount of practice keeps the neural pathways strong. Let's do this."
            ]
        };
        
        let category = 'good';
        if (weekData.accuracy > 85 && weekData.casesCompleted >= weekData.weeklyGoal) {
            category = 'excellent';
        } else if (weekData.accuracy < 60 || weekData.casesCompleted < weekData.weeklyGoal * 0.5) {
            category = 'struggling';
        } else if (weekData.daysAway > 7) {
            category = 'returning';
        }
        
        const options = messages[category];
        return options[Math.floor(Math.random() * options.length)];
    },

    compileStats: function(weekData) {
        return {
            casesCompleted: weekData.casesCompleted || 0,
            timeSpent: weekData.totalMinutes || 0,
            accuracy: weekData.accuracy || 0,
            streak: weekData.currentStreak || 0,
            savesThisWeek: weekData.saves || 0,
            learningMoments: weekData.learningMoments || 0
        };
    },

    renderReport: function(report) {
        return `
            <div class="weekly-report bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto">
                <!-- Header -->
                <div class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 text-white">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl">📋</span>
                        <div>
                            <h2 class="text-xl font-bold">Your Week in Review</h2>
                            <p class="text-purple-200 text-sm">
                                ${report.weekOf.start} - ${report.weekOf.end}
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Stats bar -->
                <div class="grid grid-cols-4 gap-2 p-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-zinc-900 dark:text-white">
                            ${report.stats.casesCompleted}
                        </div>
                        <div class="text-xs text-zinc-500">Cases</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-zinc-900 dark:text-white">
                            ${report.stats.accuracy}%
                        </div>
                        <div class="text-xs text-zinc-500">Accuracy</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-zinc-900 dark:text-white">
                            ${report.stats.streak}🔥
                        </div>
                        <div class="text-xs text-zinc-500">Streak</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-zinc-900 dark:text-white">
                            ${report.stats.savesThisWeek}
                        </div>
                        <div class="text-xs text-zinc-500">Saves</div>
                    </div>
                </div>
                
                <!-- Wins -->
                ${report.wins.length > 0 ? `
                    <div class="p-4 border-b border-zinc-200 dark:border-zinc-700">
                        <h3 class="font-bold text-zinc-800 dark:text-zinc-200 mb-3 flex items-center gap-2">
                            <span>🏆</span> Wins
                        </h3>
                        <div class="space-y-2">
                            ${report.wins.map(win => `
                                <div class="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                                    <span class="text-xl">${win.icon}</span>
                                    <div>
                                        <div class="font-medium text-green-800 dark:text-green-200">
                                            ${win.title}
                                        </div>
                                        <div class="text-sm text-green-600 dark:text-green-400">
                                            ${win.detail}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Growing -->
                ${report.growth.length > 0 ? `
                    <div class="p-4 border-b border-zinc-200 dark:border-zinc-700">
                        <h3 class="font-bold text-zinc-800 dark:text-zinc-200 mb-3 flex items-center gap-2">
                            <span>📈</span> Growing
                        </h3>
                        <div class="space-y-2">
                            ${report.growth.map(item => `
                                <div class="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                    <span class="text-xl">${item.icon}</span>
                                    <div>
                                        <div class="font-medium text-blue-800 dark:text-blue-200">
                                            ${item.title}
                                        </div>
                                        <div class="text-sm text-blue-600 dark:text-blue-400">
                                            ${item.detail}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Focus This Week -->
                ${report.focus.length > 0 ? `
                    <div class="p-4 border-b border-zinc-200 dark:border-zinc-700">
                        <h3 class="font-bold text-zinc-800 dark:text-zinc-200 mb-3 flex items-center gap-2">
                            <span>🎯</span> Focus This Week
                        </h3>
                        <div class="space-y-2">
                            ${report.focus.map(item => `
                                <div class="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                                    <span class="text-xl">${item.icon}</span>
                                    <div>
                                        <div class="font-medium text-amber-800 dark:text-amber-200">
                                            ${item.title}
                                        </div>
                                        <div class="text-sm text-amber-600 dark:text-amber-400">
                                            ${item.suggestion}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Personal Message from Dr. ReasonDx -->
                <div class="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30">
                    <div class="flex items-start gap-3">
                        <span class="text-3xl">👨‍⚕️</span>
                        <div>
                            <div class="font-medium text-purple-800 dark:text-purple-200 mb-1">
                                From Dr. ReasonDx
                            </div>
                            <p class="text-zinc-700 dark:text-zinc-300 italic">
                                "${report.message}"
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Actions -->
                <div class="p-4 flex gap-2 justify-center">
                    <button class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm">
                        📧 Email This Report
                    </button>
                    <button class="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm">
                        📤 Share Progress
                    </button>
                </div>
            </div>
        `;
    }
};


// ============================================================================
// 12. EMOTIONAL INTELLIGENCE FEEDBACK (For Patient Communication)
// ============================================================================

const EmotionalIntelligenceFeedback = {
    
    emotionalCues: {
        anxiety: ['worried', 'scared', 'nervous', 'anxious', 'fear', 'panic', 'terrified'],
        sadness: ['sad', 'depressed', 'down', 'hopeless', 'grief', 'loss', 'crying'],
        anger: ['angry', 'frustrated', 'upset', 'annoyed', 'mad', 'furious'],
        confusion: ['confused', 'don\'t understand', 'what does that mean', 'lost'],
        denial: ['can\'t be', 'impossible', 'wrong', 'mistake', 'not possible'],
        acceptance: ['understand', 'okay', 'ready', 'what do we do', 'next steps']
    },

    empathyTechniques: {
        naming: {
            description: "Name the emotion you observe",
            examples: [
                "I can see you're worried about this.",
                "This must be really scary for you.",
                "It sounds like you're feeling overwhelmed."
            ]
        },
        normalizing: {
            description: "Validate that their reaction is normal",
            examples: [
                "Most people feel this way when they hear news like this.",
                "It's completely normal to be scared right now.",
                "Many of my patients have felt exactly the same way."
            ]
        },
        partnering: {
            description: "Emphasize you're on their team",
            examples: [
                "We're going to figure this out together.",
                "You're not alone in this - I'm here to help.",
                "Let's work through this step by step."
            ]
        },
        respecting: {
            description: "Acknowledge their strength or efforts",
            examples: [
                "I can see you've been trying really hard to manage this.",
                "Coming in today was the right decision.",
                "You're handling this with a lot of courage."
            ]
        },
        supporting: {
            description: "Offer concrete support",
            examples: [
                "I'm going to make sure you have all the information you need.",
                "Let me tell you exactly what to expect.",
                "Here's what we're going to do to help you."
            ]
        }
    },

    analyzeResponse: function(studentResponse, patientContext) {
        const analysis = {
            detectedPatientEmotion: this.detectEmotion(patientContext.statement),
            empathyScore: 0,
            techniquesUsed: [],
            techniquesMissed: [],
            informationFirst: this.checkInformationFirst(studentResponse),
            suggestions: [],
            improvedResponse: ''
        };
        
        // Check for each empathy technique
        Object.entries(this.empathyTechniques).forEach(([technique, data]) => {
            if (this.usedTechnique(studentResponse, technique)) {
                analysis.techniquesUsed.push(technique);
                analysis.empathyScore += 20;
            } else {
                analysis.techniquesMissed.push(technique);
            }
        });
        
        // Penalty for information-first approach when emotion is high
        if (analysis.informationFirst && analysis.detectedPatientEmotion !== 'acceptance') {
            analysis.empathyScore = Math.max(0, analysis.empathyScore - 20);
            analysis.suggestions.push({
                type: 'order',
                message: 'Lead with acknowledgment before information',
                example: `Consider starting with: "${this.empathyTechniques.naming.examples[0]}"`
            });
        }
        
        // Generate suggestions
        if (analysis.techniquesMissed.length > 0) {
            const primaryMissed = analysis.techniquesMissed[0];
            analysis.suggestions.push({
                type: 'technique',
                message: `Try ${primaryMissed}: ${this.empathyTechniques[primaryMissed].description}`,
                example: this.empathyTechniques[primaryMissed].examples[0]
            });
        }
        
        // Generate improved response
        analysis.improvedResponse = this.generateImprovedResponse(
            studentResponse, 
            analysis.detectedPatientEmotion,
            analysis.techniquesMissed
        );
        
        return analysis;
    },

    detectEmotion: function(statement) {
        const lowered = statement.toLowerCase();
        
        for (const [emotion, cues] of Object.entries(this.emotionalCues)) {
            if (cues.some(cue => lowered.includes(cue))) {
                return emotion;
            }
        }
        return 'neutral';
    },

    usedTechnique: function(response, technique) {
        const lowered = response.toLowerCase();
        
        const patterns = {
            naming: ['i can see', 'sounds like', 'you seem', 'must be', 'i notice'],
            normalizing: ['normal to', 'common to', 'many people', 'most patients', 'natural to'],
            partnering: ['together', 'we\'ll', 'we will', 'team', 'i\'m here', 'with you'],
            respecting: ['strong', 'brave', 'courage', 'right decision', 'well done'],
            supporting: ['here\'s what', 'going to', 'plan is', 'next step', 'i will']
        };
        
        return patterns[technique]?.some(p => lowered.includes(p)) || false;
    },

    checkInformationFirst: function(response) {
        const firstSentence = response.split(/[.!?]/)[0].toLowerCase();
        const infoStarters = ['the test', 'your results', 'the diagnosis', 'you have', 'it shows'];
        return infoStarters.some(s => firstSentence.includes(s));
    },

    generateImprovedResponse: function(original, emotion, missedTechniques) {
        // Generate a model response incorporating missed techniques
        let improved = '';
        
        // Start with naming if missed
        if (missedTechniques.includes('naming')) {
            improved += this.empathyTechniques.naming.examples[0] + ' ';
        }
        
        // Add normalizing if missed
        if (missedTechniques.includes('normalizing')) {
            improved += this.empathyTechniques.normalizing.examples[0] + ' ';
        }
        
        // Add partnering
        if (missedTechniques.includes('partnering')) {
            improved += this.empathyTechniques.partnering.examples[0] + ' ';
        }
        
        // Add the information
        improved += 'Now, let me explain what we found and what it means for you.';
        
        return improved;
    },

    renderFeedback: function(analysis) {
        const scoreColor = analysis.empathyScore >= 80 ? 'green' : 
                          analysis.empathyScore >= 60 ? 'amber' : 'red';
        
        return `
            <div class="eq-feedback bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gradient-to-r from-pink-600 to-rose-600 p-4 text-white">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-lg font-bold">💚 Empathy Analysis</h3>
                            <p class="text-pink-200 text-sm">Patient Communication Feedback</p>
                        </div>
                        <div class="text-right">
                            <div class="text-3xl font-bold">${analysis.empathyScore}%</div>
                            <div class="text-pink-200 text-xs">Empathy Score</div>
                        </div>
                    </div>
                </div>
                
                <!-- Detected emotion -->
                <div class="p-4 border-b border-zinc-200 dark:border-zinc-700">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">
                            ${analysis.detectedPatientEmotion === 'anxiety' ? '😰' :
                              analysis.detectedPatientEmotion === 'sadness' ? '😢' :
                              analysis.detectedPatientEmotion === 'anger' ? '😠' :
                              analysis.detectedPatientEmotion === 'confusion' ? '😕' : '😐'}
                        </span>
                        <div>
                            <div class="text-sm text-zinc-500">Detected Patient Emotion</div>
                            <div class="font-medium text-zinc-800 dark:text-zinc-200 capitalize">
                                ${analysis.detectedPatientEmotion}
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Techniques used -->
                <div class="p-4 border-b border-zinc-200 dark:border-zinc-700">
                    <h4 class="font-medium text-zinc-800 dark:text-zinc-200 mb-3">
                        Empathy Techniques
                    </h4>
                    <div class="flex flex-wrap gap-2">
                        ${Object.keys(this.empathyTechniques).map(tech => {
                            const used = analysis.techniquesUsed.includes(tech);
                            return `
                                <span class="px-3 py-1 rounded-full text-sm ${used ? 
                                    'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 
                                    'bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400'}">
                                    ${used ? '✓' : '○'} ${tech}
                                </span>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <!-- Suggestions -->
                ${analysis.suggestions.length > 0 ? `
                    <div class="p-4 border-b border-zinc-200 dark:border-zinc-700">
                        <h4 class="font-medium text-zinc-800 dark:text-zinc-200 mb-3">
                            💡 Suggestions
                        </h4>
                        <div class="space-y-3">
                            ${analysis.suggestions.map(sug => `
                                <div class="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                                    <div class="text-sm font-medium text-amber-800 dark:text-amber-200">
                                        ${sug.message}
                                    </div>
                                    <div class="text-sm text-amber-600 dark:text-amber-400 mt-1 italic">
                                        "${sug.example}"
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Improved response -->
                <div class="p-4 bg-green-50 dark:bg-green-900/30">
                    <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">
                        ✨ Model Response
                    </h4>
                    <p class="text-zinc-700 dark:text-zinc-300 italic text-sm">
                        "${analysis.improvedResponse}"
                    </p>
                </div>
            </div>
        `;
    }
};


// ============================================================================
// 13. RIPPLE EFFECT VISUALIZER
// ============================================================================

const RippleEffect = {
    
    impacts: {
        early_antibiotics: {
            title: "Early Antibiotic Decision",
            metrics: [
                { label: "Mortality risk", value: "Reduced by ~7%", icon: "📉" },
                { label: "ICU days", value: "Likely reduced by 1-2 days", icon: "🏥" },
                { label: "Hospital cost", value: "Saved ~$4,000", icon: "💰" },
                { label: "Patient outcome", value: "Significantly improved", icon: "💚" }
            ],
            message: "This is why we drill the sepsis bundle. You're going to save lives."
        },
        door_to_balloon: {
            title: "Rapid Cath Lab Activation",
            metrics: [
                { label: "Myocardium saved", value: "~1.6g per 30 min faster", icon: "❤️" },
                { label: "EF preserved", value: "+5-10%", icon: "📈" },
                { label: "30-day mortality", value: "Reduced by 0.8% per 10 min", icon: "📉" },
                { label: "Quality of life", value: "Better long-term function", icon: "🏃" }
            ],
            message: "Time is muscle. Your quick recognition just changed this patient's future."
        },
        stroke_tpa: {
            title: "Timely tPA Administration",
            metrics: [
                { label: "NNT", value: "3-4 (very effective!)", icon: "🎯" },
                { label: "Disability", value: "30% more likely independent", icon: "🚶" },
                { label: "Quality of life", value: "Preserved", icon: "💚" },
                { label: "Every 15 min delay", value: "+5% disability", icon: "⏱️" }
            ],
            message: "Every minute counts in stroke. You just gave this patient their best chance."
        },
        caught_pe: {
            title: "PE Recognition",
            metrics: [
                { label: "Mortality", value: "Reduced from 30% to <5%", icon: "📉" },
                { label: "Recurrent VTE", value: "Prevented", icon: "🛡️" },
                { label: "Post-PE syndrome", value: "Minimized", icon: "🫁" },
                { label: "Patient safety", value: "Secured", icon: "✅" }
            ],
            message: "Untreated PE kills. You just prevented that."
        }
    },

    showRipple: function(impactType, customData = {}) {
        const impact = this.impacts[impactType];
        if (!impact) return;
        
        return this.renderRipple(impact, customData);
    },

    renderRipple: function(impact, customData) {
        return `
            <div class="ripple-effect bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 text-white">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl">🌊</span>
                        <div>
                            <h3 class="text-lg font-bold">Ripple Effect</h3>
                            <p class="text-cyan-200 text-sm">${impact.title}</p>
                        </div>
                    </div>
                </div>
                
                <!-- Impact metrics -->
                <div class="p-4">
                    <div class="space-y-3">
                        ${impact.metrics.map((metric, index) => `
                            <div class="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg
                                        transform transition-all duration-300"
                                 style="animation: slideIn 0.3s ease-out ${index * 0.1}s both">
                                <span class="text-xl">${metric.icon}</span>
                                <div class="flex-1">
                                    <div class="text-sm text-zinc-500 dark:text-zinc-400">
                                        ${metric.label}
                                    </div>
                                    <div class="font-medium text-zinc-800 dark:text-zinc-200">
                                        ${metric.value}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Message -->
                <div class="p-4 bg-gradient-to-r from-green-50 to-emerald-50 
                            dark:from-green-900/30 dark:to-emerald-900/30
                            border-t border-green-200 dark:border-green-800">
                    <div class="flex items-start gap-3">
                        <span class="text-2xl">🏥</span>
                        <p class="text-green-800 dark:text-green-200 font-medium">
                            ${impact.message}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};


// ============================================================================
// 14. ACHIEVEMENT & BADGE SYSTEM
// ============================================================================

const AchievementSystem = {
    
    badges: {
        // Diagnostic badges
        eagle_eye: {
            id: 'eagle_eye',
            name: 'Eagle Eye',
            icon: '🦅',
            description: 'Caught 5 subtle findings others missed',
            requirement: { subtleFindings: 5 },
            rarity: 'rare'
        },
        speed_demon: {
            id: 'speed_demon',
            name: 'Speed Demon',
            icon: '⚡',
            description: 'Diagnosed a case in under 2 minutes',
            requirement: { fastDiagnosis: 120 },
            rarity: 'uncommon'
        },
        perfectionist: {
            id: 'perfectionist',
            name: 'Perfectionist',
            icon: '💯',
            description: '10 perfect cases in a row',
            requirement: { perfectStreak: 10 },
            rarity: 'legendary'
        },
        life_saver: {
            id: 'life_saver',
            name: 'Life Saver',
            icon: '🏆',
            description: 'Never missed a critical diagnosis',
            requirement: { criticalMisses: 0, criticalCases: 20 },
            rarity: 'epic'
        },
        
        // Consistency badges
        dedicated: {
            id: 'dedicated',
            name: 'Dedicated',
            icon: '🔥',
            description: '7-day study streak',
            requirement: { streak: 7 },
            rarity: 'common'
        },
        unstoppable: {
            id: 'unstoppable',
            name: 'Unstoppable',
            icon: '🌟',
            description: '30-day study streak',
            requirement: { streak: 30 },
            rarity: 'legendary'
        },
        night_owl: {
            id: 'night_owl',
            name: 'Night Owl',
            icon: '🦉',
            description: 'Studied after midnight 5 times',
            requirement: { lateNightSessions: 5 },
            rarity: 'uncommon'
        },
        early_bird: {
            id: 'early_bird',
            name: 'Early Bird',
            icon: '🐦',
            description: 'Studied before 6 AM 5 times',
            requirement: { earlyMorningSessions: 5 },
            rarity: 'uncommon'
        },
        
        // Mastery badges
        cardiology_master: {
            id: 'cardiology_master',
            name: 'Cardiology Master',
            icon: '❤️',
            description: '90%+ accuracy on cardiology cases',
            requirement: { cardioAccuracy: 90, cardioCases: 10 },
            rarity: 'epic'
        },
        neuro_ninja: {
            id: 'neuro_ninja',
            name: 'Neuro Ninja',
            icon: '🧠',
            description: '90%+ accuracy on neurology cases',
            requirement: { neuroAccuracy: 90, neuroCases: 10 },
            rarity: 'epic'
        },
        
        // Special badges
        comeback_kid: {
            id: 'comeback_kid',
            name: 'Comeback Kid',
            icon: '🔄',
            description: 'Improved accuracy by 20% in one week',
            requirement: { weeklyImprovement: 20 },
            rarity: 'rare'
        },
        growth_mindset: {
            id: 'growth_mindset',
            name: 'Growth Mindset',
            icon: '🌱',
            description: 'Reviewed 50 learning moments',
            requirement: { learningMomentsReviewed: 50 },
            rarity: 'rare'
        }
    },

    earnedBadges: [],

    checkBadges: function(studentData) {
        const newBadges = [];
        
        Object.values(this.badges).forEach(badge => {
            if (this.earnedBadges.includes(badge.id)) return;
            
            if (this.meetsRequirement(badge, studentData)) {
                this.earnBadge(badge.id);
                newBadges.push(badge);
            }
        });
        
        return newBadges;
    },

    meetsRequirement: function(badge, data) {
        const req = badge.requirement;
        
        for (const [key, value] of Object.entries(req)) {
            if (data[key] === undefined) return false;
            if (typeof value === 'number') {
                if (key.includes('Misses') && data[key] > value) return false;
                if (!key.includes('Misses') && data[key] < value) return false;
            }
        }
        return true;
    },

    earnBadge: function(badgeId) {
        if (!this.earnedBadges.includes(badgeId)) {
            this.earnedBadges.push(badgeId);
            this.persist();
        }
    },

    showBadgeEarned: function(badge) {
        const rarityColors = {
            common: 'from-zinc-400 to-zinc-500',
            uncommon: 'from-green-400 to-emerald-500',
            rare: 'from-blue-400 to-indigo-500',
            epic: 'from-purple-400 to-pink-500',
            legendary: 'from-yellow-400 to-orange-500'
        };
        
        return `
            <div class="badge-earned fixed inset-0 flex items-center justify-center z-50 bg-black/70"
                 onclick="this.remove()">
                <div class="text-center animate-bounce-in">
                    <!-- Glowing badge icon -->
                    <div class="relative inline-block mb-4">
                        <div class="absolute inset-0 blur-xl bg-gradient-to-r ${rarityColors[badge.rarity]} 
                                    opacity-50 rounded-full"></div>
                        <div class="relative text-8xl">${badge.icon}</div>
                    </div>
                    
                    <!-- Badge info -->
                    <div class="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-2xl max-w-sm">
                        <div class="text-xs uppercase tracking-wider text-${badge.rarity === 'legendary' ? 'yellow' : 'purple'}-500 mb-2">
                            ${badge.rarity} Badge Earned!
                        </div>
                        <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                            ${badge.name}
                        </h2>
                        <p class="text-zinc-600 dark:text-zinc-400">
                            ${badge.description}
                        </p>
                        
                        <div class="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                            <button class="px-6 py-2 bg-gradient-to-r ${rarityColors[badge.rarity]} 
                                           text-white rounded-full font-medium">
                                Awesome! 🎉
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderBadgeCollection: function() {
        const earned = this.earnedBadges.map(id => this.badges[id]).filter(Boolean);
        const unearned = Object.values(this.badges).filter(b => !this.earnedBadges.includes(b.id));
        
        return `
            <div class="badge-collection">
                <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                    🏅 Badge Collection
                </h3>
                
                <!-- Earned badges -->
                <div class="mb-6">
                    <h4 class="font-medium text-zinc-700 dark:text-zinc-300 mb-3">
                        Earned (${earned.length}/${Object.keys(this.badges).length})
                    </h4>
                    <div class="grid grid-cols-4 md:grid-cols-6 gap-4">
                        ${earned.map(badge => `
                            <div class="text-center group cursor-pointer" 
                                 onclick="AchievementSystem.showBadgeDetail('${badge.id}')">
                                <div class="text-4xl mb-1 transform group-hover:scale-110 transition-transform">
                                    ${badge.icon}
                                </div>
                                <div class="text-xs text-zinc-600 dark:text-zinc-400 truncate">
                                    ${badge.name}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Locked badges -->
                <div>
                    <h4 class="font-medium text-zinc-500 dark:text-zinc-500 mb-3">
                        Locked
                    </h4>
                    <div class="grid grid-cols-4 md:grid-cols-6 gap-4">
                        ${unearned.map(badge => `
                            <div class="text-center opacity-40 cursor-pointer"
                                 onclick="AchievementSystem.showBadgeHint('${badge.id}')">
                                <div class="text-4xl mb-1 grayscale">
                                    ${badge.icon}
                                </div>
                                <div class="text-xs text-zinc-500 truncate">
                                    ???
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    showBadgeDetail: function(badgeId) {
        console.log('Showing badge detail:', badgeId);
    },

    showBadgeHint: function(badgeId) {
        const badge = this.badges[badgeId];
        console.log('Badge hint:', badge.description);
    },

    persist: function() {
        localStorage.setItem('reasondx_badges', JSON.stringify(this.earnedBadges));
    },

    load: function() {
        const saved = localStorage.getItem('reasondx_badges');
        if (saved) {
            this.earnedBadges = JSON.parse(saved);
        }
    }
};


// ============================================================================
// 15. BOARD EXAMINER MODE
// ============================================================================

const BoardExaminerMode = {
    
    enabled: false,

    examinerPersona: {
        name: "Dr. Board Examiner",
        style: "rigorous but fair",
        expectations: [
            "Lead with the most likely diagnosis",
            "Justify with specific findings",
            "Acknowledge uncertainty appropriately",
            "Prioritize your differential correctly"
        ]
    },

    scoringCriteria: {
        leadWithDiagnosis: {
            weight: 25,
            description: "Did you state the most likely diagnosis first?"
        },
        justification: {
            weight: 25,
            description: "Did you justify with specific findings?"
        },
        differentialOrder: {
            weight: 20,
            description: "Is your differential correctly prioritized?"
        },
        keyFeatures: {
            weight: 20,
            description: "Did you identify key/pathognomonic features?"
        },
        acknowledgingUncertainty: {
            weight: 10,
            description: "Did you appropriately acknowledge uncertainty?"
        }
    },

    toggle: function() {
        this.enabled = !this.enabled;
        return this.enabled;
    },

    evaluateResponse: function(studentResponse, caseData) {
        if (!this.enabled) return null;
        
        const evaluation = {
            scores: {},
            totalScore: 0,
            feedback: [],
            examTips: [],
            improvedAnswer: ''
        };
        
        // Check each criterion
        Object.entries(this.scoringCriteria).forEach(([criterion, config]) => {
            const score = this.scoreCriterion(criterion, studentResponse, caseData);
            evaluation.scores[criterion] = {
                score: score,
                maxScore: config.weight,
                description: config.description
            };
            evaluation.totalScore += score;
        });
        
        // Generate feedback
        evaluation.feedback = this.generateExaminerFeedback(evaluation, studentResponse, caseData);
        evaluation.examTips = this.generateExamTips(evaluation);
        evaluation.improvedAnswer = this.generateModelAnswer(caseData);
        
        return evaluation;
    },

    scoreCriterion: function(criterion, response, caseData) {
        const maxScore = this.scoringCriteria[criterion].weight;
        const lowered = response.toLowerCase();
        
        switch (criterion) {
            case 'leadWithDiagnosis':
                const firstSentence = response.split(/[.!?]/)[0];
                const startsWithDx = caseData.diagnosis && 
                    firstSentence.toLowerCase().includes(caseData.diagnosis.toLowerCase());
                return startsWithDx ? maxScore : maxScore * 0.4;
                
            case 'justification':
                const hasSpecifics = /\d/.test(response) || 
                    response.includes('because') || 
                    response.includes('given');
                return hasSpecifics ? maxScore : maxScore * 0.5;
                
            case 'differentialOrder':
                // Check if dangerous diagnoses are mentioned early
                return maxScore * 0.7; // Placeholder
                
            case 'keyFeatures':
                const keyFeatures = caseData.keyFeatures || [];
                const mentioned = keyFeatures.filter(f => 
                    lowered.includes(f.toLowerCase())
                ).length;
                return Math.round((mentioned / Math.max(keyFeatures.length, 1)) * maxScore);
                
            case 'acknowledgingUncertainty':
                const uncertaintyPhrases = ['could also be', 'less likely', 'consider', 'versus'];
                const hasUncertainty = uncertaintyPhrases.some(p => lowered.includes(p));
                return hasUncertainty ? maxScore : maxScore * 0.3;
                
            default:
                return maxScore * 0.5;
        }
    },

    generateExaminerFeedback: function(evaluation, response, caseData) {
        const feedback = [];
        
        if (evaluation.scores.leadWithDiagnosis.score < evaluation.scores.leadWithDiagnosis.maxScore * 0.8) {
            feedback.push({
                type: 'critical',
                message: "You didn't lead with the diagnosis. On Step 2, this costs points.",
                example: `Better: "Most likely ${caseData.diagnosis} given [key findings]"`
            });
        }
        
        if (evaluation.scores.justification.score < evaluation.scores.justification.maxScore * 0.8) {
            feedback.push({
                type: 'important',
                message: "Your justification lacked specifics. Use numbers and concrete findings.",
                example: "Include: vital signs, lab values, exam findings"
            });
        }
        
        return feedback;
    },

    generateExamTips: function(evaluation) {
        const tips = [];
        
        if (evaluation.totalScore < 70) {
            tips.push("Practice stating your diagnosis confidently in the first sentence.");
            tips.push("Always include 2-3 specific findings that support your diagnosis.");
        }
        
        tips.push("The examiners want to see you COMMIT with justification, then acknowledge alternatives.");
        
        return tips;
    },

    generateModelAnswer: function(caseData) {
        return `Most likely ${caseData.diagnosis} given [specific finding 1], [specific finding 2], and [key feature]. ` +
               `Also considering [differential 2] and [differential 3], though less likely because [reasoning].`;
    },

    renderFeedback: function(evaluation) {
        const passed = evaluation.totalScore >= 70;
        
        return `
            <div class="board-examiner-feedback bg-zinc-900 text-white rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gradient-to-r from-zinc-800 to-zinc-700 p-4 border-b border-zinc-600">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">🎓</span>
                            <div>
                                <h3 class="font-bold">Board Examiner Mode</h3>
                                <p class="text-zinc-400 text-sm">Rigorous evaluation</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-3xl font-bold ${passed ? 'text-green-400' : 'text-red-400'}">
                                ${evaluation.totalScore}%
                            </div>
                            <div class="text-xs text-zinc-400">${passed ? 'PASS' : 'NEEDS WORK'}</div>
                        </div>
                    </div>
                </div>
                
                <!-- Score breakdown -->
                <div class="p-4 space-y-2">
                    ${Object.entries(evaluation.scores).map(([criterion, data]) => `
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span class="text-zinc-400">${data.description}</span>
                                <span class="${data.score >= data.maxScore * 0.8 ? 'text-green-400' : 'text-amber-400'}">
                                    ${data.score}/${data.maxScore}
                                </span>
                            </div>
                            <div class="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                                <div class="h-full ${data.score >= data.maxScore * 0.8 ? 'bg-green-500' : 'bg-amber-500'}"
                                     style="width: ${(data.score / data.maxScore) * 100}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Feedback -->
                ${evaluation.feedback.length > 0 ? `
                    <div class="p-4 border-t border-zinc-700">
                        <h4 class="font-medium mb-3 text-zinc-300">Examiner Feedback</h4>
                        <div class="space-y-3">
                            ${evaluation.feedback.map(fb => `
                                <div class="p-3 bg-zinc-800 rounded-lg">
                                    <div class="text-${fb.type === 'critical' ? 'red' : 'amber'}-400 text-sm mb-1">
                                        ${fb.message}
                                    </div>
                                    ${fb.example ? `
                                        <div class="text-zinc-400 text-xs italic">
                                            ${fb.example}
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Model answer -->
                <div class="p-4 bg-zinc-800 border-t border-zinc-700">
                    <h4 class="font-medium mb-2 text-zinc-300">Model Answer Format</h4>
                    <p class="text-zinc-400 text-sm italic">
                        "${evaluation.improvedAnswer}"
                    </p>
                </div>
            </div>
        `;
    }
};


// ============================================================================
// EXPORT ALL FEEDBACK SYSTEMS
// ============================================================================

const ReasonDxFeedbackSystem = {
    // Core persona & messaging
    AttendingPersona,
    FutureSelfLetters,
    ThinkingAnnotations,
    
    // Progress & achievement
    SaveCounter,
    LearningMoments,
    AchievementSystem,
    
    // Visual feedback
    DifferentialDance,
    CognitiveReplay,
    RippleEffect,
    
    // Analytics
    PatternRecognitionTracker,
    ConstellationView,
    PeerComparison,
    WeeklyCoachingReport,
    
    // Advanced modes
    EmotionalIntelligenceFeedback,
    BoardExaminerMode,
    
    // Initialize all systems
    initialize: function() {
        SaveCounter.load();
        LearningMoments.load();
        PatternRecognitionTracker.load();
        ConstellationView.load();
        AchievementSystem.load();
        console.log('ReasonDx Feedback System initialized');
    }
};

// Auto-initialize in browser
if (typeof window !== 'undefined') {
    window.ReasonDxFeedbackSystem = ReasonDxFeedbackSystem;
    
    // Expose individual systems
    Object.keys(ReasonDxFeedbackSystem).forEach(key => {
        if (typeof ReasonDxFeedbackSystem[key] === 'object') {
            window[key] = ReasonDxFeedbackSystem[key];
        }
    });
}

console.log('✅ ReasonDx Ultimate Feedback System loaded successfully');
console.log('📚 15 feedback innovations ready');
