// ============================================================================
// DXSUITE DEVELOPMENTAL FEEDBACK SYSTEM
// Aligned with AAMC EPA Developmental Schematics and Foundational Competencies
// Supports MD and DO Programs
// ============================================================================

const DevelopmentalFeedbackSystem = {

    // =========================================================================
    // DEVELOPMENTAL LEVELS (Modified Chen Entrustment Scale)
    // =========================================================================
    entrustmentLevels: {
        '1b': { level: '1b', label: 'Observation', supervisorSays: 'Watch me do this', color: '#c0392b', category: 'pre-entrustable' },
        '2a': { level: '2a', label: 'Coactivity', supervisorSays: "Let's do this together", color: '#d35400', category: 'developing' },
        '2b': { level: '2b', label: 'Direct Supervision', supervisorSays: "I'll watch you", color: '#f39c12', category: 'developing' },
        '3a': { level: '3a', label: 'Indirect - Full Review', supervisorSays: "I'll double-check all findings", color: '#27ae60', category: 'near-entrustable' },
        '3b': { level: '3b', label: 'Entrustable', supervisorSays: "I'll double-check key findings", color: '#16a085', category: 'entrustable' }
    },

    // =========================================================================
    // FEEDBACK TEMPLATES BY EPA
    // =========================================================================
    feedbackTemplates: {
        EPA2: {
            name: 'Differential Diagnosis',
            correction: [
                { trigger: 'too_narrow', feedback: "Your differential needs broadening. Use a systematic framework (organ systems, anatomical, or pathophysiological) to ensure you haven't missed important diagnoses. Include 'can't miss' diagnoses even if less likely." },
                { trigger: 'too_broad', feedback: "Your differential is broad but needs refinement. Synthesize key clinical features into a problem representation that guides prioritization." },
                { trigger: 'anchoring', feedback: "Watch for anchoring bias. Consider what diagnoses would explain ALL the findings. What would make you change your mind?" }
            ],
            developing: [
                { trigger: 'weak_prioritization', feedback: "Good breadth in your differential. For prioritization, consider which diagnoses are most likely AND which are most dangerous if missed." },
                { trigger: 'missing_rationale', feedback: "Your prioritization shows good intuition. Strengthen it by citing specific evidence for each diagnosis." }
            ],
            entrustable: [
                { trigger: 'excellent', feedback: "Excellent clinical reasoning. Your differential appropriately balances common and can't-miss diagnoses with clear justification. Ready for residency-level reasoning." }
            ]
        },
        EPA3: {
            name: 'Diagnostic Testing',
            correction: [
                { trigger: 'shotgun', feedback: "Your testing appears unfocused. Before ordering, ask: 'How will this result change management?' Each test should target specific diagnoses." },
                { trigger: 'missed_critical', feedback: "A key diagnostic test was omitted that could have expedited diagnosis. Review the standard workup for this presentation." }
            ],
            developing: [
                { trigger: 'weak_interpretation', feedback: "Good test selection. Your interpretation would benefit from considering clinical context more fully." }
            ],
            entrustable: [
                { trigger: 'excellent', feedback: "Excellent diagnostic approach - hypothesis-driven, appropriately sequenced, with accurate interpretation in clinical context." }
            ]
        },
        EPA10: {
            name: 'Urgent/Emergent Care',
            correction: [
                { trigger: 'missed_urgency', feedback: "This patient required urgent evaluation that was not immediately recognized. In emergencies, pattern recognition of 'sick vs not sick' must be rapid." },
                { trigger: 'delayed_intervention', feedback: "You recognized urgency but stabilization was delayed. Walk through your checklist: Airway? Breathing? Circulation?" }
            ],
            developing: [
                { trigger: 'needs_structure', feedback: "Good recognition of acuity. Practice systematic approaches (ABCDE) so responses become organized under pressure." }
            ],
            entrustable: [
                { trigger: 'excellent', feedback: "Excellent emergency response - rapid identification, systematic stabilization, effective communication. Ready for intern-level emergency response." }
            ]
        },
        EPA6: {
            name: 'Oral Presentation',
            correction: [
                { trigger: 'disorganized', feedback: "Your presentation needs better organization. Follow: CC → HPI → Key PMH → Pertinent Exam → Data → Assessment → Plan. What's the one-liner?" }
            ],
            developing: [
                { trigger: 'needs_synthesis', feedback: "Good organization. Elevate by showing clinical reasoning - interpret data, don't just report it." }
            ],
            entrustable: [
                { trigger: 'excellent', feedback: "Excellent presentation - synthesized effectively with clear reasoning and appropriate adaptation to setting." }
            ]
        }
    },

    // =========================================================================
    // DO-SPECIFIC FEEDBACK PROMPTS
    // =========================================================================
    doFeedback: {
        bodyUnity: {
            prompt: "Consider how this presentation reflects interconnections between body systems.",
            question: "How does understanding the body as a unit change your approach?"
        },
        selfRegulation: {
            prompt: "What factors are supporting or impairing this patient's ability to heal?",
            question: "How can your treatment support natural healing mechanisms?"
        },
        structureFunction: {
            prompt: "How might structural findings inform your differential?",
            question: "What structural examination findings would you expect?"
        },
        omtConsideration: {
            prompt: "Would OMT be a useful adjunct for this condition?",
            question: "What OMT techniques might benefit this patient?"
        }
    },

    // =========================================================================
    // COMPETENCY-SPECIFIC FEEDBACK
    // =========================================================================
    competencyFeedback: {
        PC5: { developing: "Your differential could benefit from more systematic organization.", entrustable: "Excellent differential demonstrating mature clinical reasoning." },
        MK2: { developing: "Continue to connect mechanisms to clinical findings.", entrustable: "Strong mechanistic reasoning linking pathophysiology to presentation." },
        PC4: { developing: "Continue practicing rapid assessment and pattern recognition.", entrustable: "Excellent recognition of patient acuity with appropriate response." },
        ICS4: { developing: "Focus on the most clinically relevant information first.", entrustable: "Clear, concise, patient-centered communication." },
        PBLI1: { developing: "Continue asking specific questions to get targeted feedback.", entrustable: "Excellent self-directed learning and feedback integration." }
    },

    // =========================================================================
    // MAIN FEEDBACK GENERATION FUNCTION
    // =========================================================================
    generateFeedback: function(epaId, performanceData, options = {}) {
        const template = this.feedbackTemplates[epaId];
        if (!template) return { error: 'Unknown EPA' };

        const result = {
            epa: epaId,
            epaName: template.name,
            timestamp: new Date().toISOString(),
            level: 'developing',
            feedback: '',
            competencies: [],
            doFeedback: null,
            suggestedLevel: '2b'
        };

        // Determine feedback based on score/triggers
        const score = performanceData.score || 0;
        
        if (score < 60) {
            result.level = 'correction';
            result.feedback = template.correction[0]?.feedback || 'Review fundamentals for this activity.';
            result.suggestedLevel = '2a';
        } else if (score < 80) {
            result.level = 'developing';
            result.feedback = template.developing[0]?.feedback || 'Good progress - continue practicing.';
            result.suggestedLevel = '2b';
        } else {
            result.level = 'entrustable';
            result.feedback = template.entrustable[0]?.feedback || 'Excellent work - ready for next level.';
            result.suggestedLevel = score >= 90 ? '3b' : '3a';
        }

        // Add competency feedback
        if (performanceData.competencies) {
            performanceData.competencies.forEach(code => {
                if (this.competencyFeedback[code]) {
                    result.competencies.push({
                        code: code,
                        feedback: this.competencyFeedback[code][result.level === 'entrustable' ? 'entrustable' : 'developing']
                    });
                }
            });
        }

        // Add DO feedback if applicable
        if (options.program === 'do' && performanceData.doContext) {
            result.doFeedback = this.generateDOFeedback(performanceData.doContext);
        }

        return result;
    },

    generateDOFeedback: function(context) {
        const feedback = [];
        if (context.bodyUnity) feedback.push(this.doFeedback.bodyUnity);
        if (context.structureFunction) feedback.push(this.doFeedback.structureFunction);
        if (context.omtRelevant) feedback.push(this.doFeedback.omtConsideration);
        return feedback.length > 0 ? feedback : null;
    }
};

// Export
if (typeof module !== 'undefined') module.exports = DevelopmentalFeedbackSystem;
