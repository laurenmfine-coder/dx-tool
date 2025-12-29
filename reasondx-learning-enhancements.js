// ============================================================
// ReasonDx Learning Enhancements
// Adds educational coaching moments throughout the case flow
// ============================================================

(function() {
    'use strict';
    
    // ============================================================
    // STAGE TRANSITION COACHING MESSAGES
    // ============================================================
    
    const TRANSITION_MESSAGES = {
        'differential-to-history': {
            title: '🎯 Moving to History',
            message: 'Good differential! Now gather history to test your hypotheses. Ask questions that would CHANGE your thinking - questions where the answer matters.',
            tip: 'Pro tip: Frame questions around your top 3 diagnoses. What history would make each MORE or LESS likely?'
        },
        'history-to-physical': {
            title: '🔍 Moving to Physical Exam',
            message: 'Based on the history, your differential should be narrowing. Now perform exam maneuvers that will further differentiate between remaining possibilities.',
            tip: 'Pro tip: Predict what you expect to find BEFORE examining. If findings don\'t match, reconsider your diagnosis.'
        },
        'physical-to-revised': {
            title: '🧠 Time to Update Your Thinking',
            message: 'You\'ve gathered data - now comes the critical reasoning step. How did the history and exam change your differential?',
            tip: 'Pro tip: Ask yourself: "What moved UP? What got ruled OUT? What did I miss initially?"'
        },
        'revised-to-workup': {
            title: '🧪 Planning Your Workup',
            message: 'Order tests that will confirm your leading diagnosis AND rule out dangerous alternatives. Every test should answer a specific question.',
            tip: 'Pro tip: Before ordering, ask: "How will this result change my management?"'
        }
    };
    
    // ============================================================
    // COGNITIVE BIAS WARNINGS
    // ============================================================
    
    const COGNITIVE_BIAS_CHECKS = {
        anchoring: {
            trigger: 'singleDiagnosisFocus',
            title: '⚓ Anchoring Alert',
            message: 'You seem focused on one diagnosis. Have you considered alternatives?',
            solution: 'Step back and ask: "What else could this be?"'
        },
        availability: {
            trigger: 'recentCaseSimilarity',
            title: '📺 Availability Bias Check',
            message: 'This might remind you of a recent case. Make sure you\'re evaluating THIS patient\'s unique features.',
            solution: 'Focus on what\'s DIFFERENT about this presentation.'
        },
        prematureClosure: {
            trigger: 'quickDifferentialSubmission',
            title: '🚪 Premature Closure Warning',
            message: 'You submitted quickly. Did you fully consider must-not-miss diagnoses?',
            solution: 'Always ask: "What\'s the worst thing this could be?"'
        },
        confirmationBias: {
            trigger: 'selectiveHistoryGathering',
            title: '✓ Confirmation Bias Check',
            message: 'Are you only asking questions that support your leading diagnosis?',
            solution: 'Actively seek disconfirming evidence. Ask: "What would make my leading diagnosis WRONG?"'
        },
        satisficing: {
            trigger: 'stoppedAfterFinding',
            title: '🛑 Search Satisficing Alert',
            message: 'You found something - but is there MORE to find? Multiple pathologies can coexist.',
            solution: 'Complete your systematic approach. Don\'t stop at the first abnormality.'
        }
    };
    
    // ============================================================
    // REFLECTION PROMPTS
    // ============================================================
    
    const REFLECTION_PROMPTS = {
        afterDifferential: [
            'What diagnosis would be WORST to miss in this case?',
            'Which diagnosis would you bet money on?',
            'What one piece of history would help you most?'
        ],
        afterHistory: [
            'Did the history confirm or challenge your initial impression?',
            'What diagnosis moved UP on your list? What moved DOWN?',
            'Is there anything you wish you had asked?'
        ],
        afterPhysical: [
            'Were the exam findings what you expected?',
            'Did you find any surprises?',
            'How confident are you in your leading diagnosis now?'
        ],
        afterWorkup: [
            'Did the results confirm your diagnosis?',
            'Were any results unexpected?',
            'What would you do differently next time?'
        ]
    };
    
    // ============================================================
    // LEARNING MOMENT POPUPS
    // ============================================================
    
    const LEARNING_MOMENTS = {
        vitalSignPattern: {
            patterns: [
                { 
                    condition: (vs) => vs.HR > 100 && vs.RR > 20 && parseFloat(vs.Temp) > 100.4,
                    message: '🌡️ SIRS Pattern: This vital sign pattern (tachycardia + tachypnea + fever) meets SIRS criteria. Consider infection/sepsis.'
                },
                {
                    condition: (vs) => parseInt(vs.HR) > parseInt(vs.BP?.split('/')[0] || 120),
                    message: '🩸 Shock Index: HR > SBP suggests significant volume loss or hemodynamic compromise.'
                },
                {
                    condition: (vs) => parseInt(vs.SpO2?.replace('%', '') || 100) < 92,
                    message: '💨 Hypoxemia Alert: SpO2 < 92% is significant. Consider the differential for hypoxemia.'
                }
            ]
        }
    };
    
    // ============================================================
    // QUESTION QUALITY FEEDBACK
    // ============================================================
    
    function analyzeQuestionQuality(questions, differential) {
        const feedback = {
            score: 0,
            strengths: [],
            improvements: []
        };
        
        // Check if questions target multiple diagnoses
        const dxCovered = new Set();
        questions.forEach(q => {
            if (q.linkedDx) {
                q.linkedDx.forEach(dx => dxCovered.add(dx));
            }
        });
        
        const coverage = dxCovered.size / Math.max(differential.length, 1);
        
        if (coverage > 0.7) {
            feedback.strengths.push('✓ Good differential coverage - you asked questions targeting multiple diagnoses');
            feedback.score += 20;
        } else {
            feedback.improvements.push('Consider asking questions that target MORE of your differential diagnoses');
        }
        
        // Check for must-not-miss coverage
        const mnmDx = differential.filter(d => d.cannotMiss);
        const mnmCovered = mnmDx.filter(d => dxCovered.has(d.name));
        
        if (mnmCovered.length === mnmDx.length && mnmDx.length > 0) {
            feedback.strengths.push('✓ Excellent - you gathered history for all must-not-miss diagnoses');
            feedback.score += 30;
        } else if (mnmDx.length > 0) {
            feedback.improvements.push(`You have ${mnmDx.length} must-not-miss diagnoses but only asked about ${mnmCovered.length}`);
        }
        
        return feedback;
    }
    
    // ============================================================
    // TIMING-BASED HINTS
    // ============================================================
    
    let stageStartTime = null;
    
    function startStageTimer() {
        stageStartTime = Date.now();
    }
    
    function checkTimingHint(stage) {
        if (!stageStartTime) return null;
        
        const elapsed = (Date.now() - stageStartTime) / 1000; // seconds
        
        const hints = {
            differential: {
                tooFast: { threshold: 30, message: 'You submitted quickly. Take time to consider all possibilities.' },
                tooSlow: { threshold: 300, message: 'Remember: In real life, time matters. Practice efficiency.' }
            },
            history: {
                tooFast: { threshold: 60, message: 'Did you ask enough questions to test your hypotheses?' },
                tooSlow: { threshold: 600, message: 'Focus on high-yield questions. Not every detail matters equally.' }
            },
            physical: {
                tooFast: { threshold: 45, message: 'A quick exam might miss important findings.' },
                tooSlow: { threshold: 300, message: 'Focus on exam components relevant to your differential.' }
            }
        };
        
        const stageHints = hints[stage];
        if (!stageHints) return null;
        
        if (elapsed < stageHints.tooFast?.threshold) {
            return { type: 'warning', message: stageHints.tooFast.message };
        }
        if (elapsed > stageHints.tooSlow?.threshold) {
            return { type: 'info', message: stageHints.tooSlow.message };
        }
        
        return null;
    }
    
    // ============================================================
    // EXPOSE TO GLOBAL SCOPE
    // ============================================================
    
    window.ReasonDxLearning = {
        TRANSITION_MESSAGES,
        COGNITIVE_BIAS_CHECKS,
        REFLECTION_PROMPTS,
        LEARNING_MOMENTS,
        analyzeQuestionQuality,
        startStageTimer,
        checkTimingHint,
        
        // Show transition message
        showTransition: function(fromStage, toStage) {
            const key = `${fromStage}-to-${toStage}`;
            const msg = TRANSITION_MESSAGES[key];
            if (msg && typeof showToast === 'function') {
                // Could show as modal or toast
                console.log(`[Learning] ${msg.title}: ${msg.message}`);
            }
            return msg;
        },
        
        // Get reflection prompts for stage
        getReflectionPrompts: function(stage) {
            return REFLECTION_PROMPTS[stage] || [];
        },
        
        // Check for cognitive biases
        checkBias: function(biasType, context) {
            const bias = COGNITIVE_BIAS_CHECKS[biasType];
            if (bias) {
                console.log(`[Bias Check] ${bias.title}: ${bias.message}`);
                return bias;
            }
            return null;
        }
    };
    
    console.log('✓ ReasonDx Learning Enhancements loaded');
    
})();
