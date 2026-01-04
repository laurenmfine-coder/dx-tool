/**
 * ============================================================================
 * REASONDX LEARNING MODE PROMPT SYSTEM
 * ============================================================================
 * Version: 1.0 | December 2024
 * 
 * Features:
 * 1. Detects when students move on without asking follow-up questions
 * 2. Subtle hint button appears when needed
 * 3. Progressive hints (try first, then reveal)
 * 4. Tracks question depth and prompts appropriately
 * ============================================================================
 */

const LearningModePrompts = (function() {
    'use strict';

    // ========================================================================
    // STATE TRACKING
    // ========================================================================
    
    let promptState = {
        enabled: true, // Learning mode enabled
        questionsAskedSinceLastFollowUp: 0,
        topicsNeedingFollowUp: [], // Topics where student asked general but not specific
        hintsShown: [],
        hintsRevealed: [],
        lastQuestionCategory: null,
        lastQuestionTopic: null,
        promptsTriggered: 0
    };

    /**
     * Reset state for new case
     */
    function resetState() {
        promptState = {
            enabled: true,
            questionsAskedSinceLastFollowUp: 0,
            topicsNeedingFollowUp: [],
            hintsShown: [],
            hintsRevealed: [],
            lastQuestionCategory: null,
            lastQuestionTopic: null,
            promptsTriggered: 0
        };
    }

    /**
     * Enable/disable learning mode
     */
    function setLearningMode(enabled) {
        promptState.enabled = enabled;
    }

    // ========================================================================
    // TOPIC DEFINITIONS AND FOLLOW-UP REQUIREMENTS
    // ========================================================================
    
    const topicFollowUpRequirements = {
        // PMH - requires specific condition follow-ups
        pmh: {
            generalPatterns: ["medical history", "medical problems", "health problems", "conditions", "what do you have"],
            requiresFollowUp: true,
            followUpThreshold: 2, // After 2 non-specific questions, prompt
            hintIntro: "When a patient says they have medical conditions, consider asking about specific diseases relevant to their presentation.",
            followUpCategories: {
                chest_pain: ["diabetes", "high blood pressure", "high cholesterol", "heart disease", "blood clots"],
                shortness_of_breath: ["asthma", "COPD", "heart failure", "sleep apnea", "blood clots"],
                abdominal_pain: ["ulcers", "gallbladder", "liver disease", "kidney problems"],
                headache: ["high blood pressure", "migraines", "stroke"],
                syncope: ["heart problems", "seizures", "diabetes"],
                fever: ["diabetes", "kidney problems", "immunocompromise", "HIV"],
                back_pain: ["osteoporosis", "cancer", "kidney stones"],
                leg_pain: ["diabetes", "blood clots", "peripheral artery disease"]
            }
        },
        
        // Family History - requires specific condition questions
        familyHistory: {
            generalPatterns: ["family history", "run in your family", "anyone in your family"],
            requiresFollowUp: true,
            followUpThreshold: 1, // Prompt after 1 general question
            hintIntro: "Family history is most useful when you ask about specific conditions. Think about what diseases are relevant to this patient's presentation.",
            followUpCategories: {
                chest_pain: ["heart disease", "heart attack", "sudden death", "diabetes", "high cholesterol"],
                shortness_of_breath: ["asthma", "COPD", "blood clots", "heart disease"],
                headache: ["migraines", "aneurysm", "stroke"],
                abdominal_pain: ["colon cancer", "Crohn's", "gallbladder disease"],
                syncope: ["sudden cardiac death", "arrhythmias", "seizures"],
                breast_mass: ["breast cancer", "ovarian cancer"],
                gi_bleed: ["colon cancer", "bleeding disorders"]
            }
        },
        
        // Medications - may need follow-up on compliance, changes
        medications: {
            generalPatterns: ["what medications", "take any medications", "on any meds"],
            requiresFollowUp: true,
            followUpThreshold: 2,
            hintIntro: "After learning about medications, consider asking about compliance, recent changes, or if they're taking them correctly.",
            followUpPrompts: [
                "Are you taking your medications as prescribed?",
                "Have there been any recent changes to your medications?",
                "Are you taking any over-the-counter medications?",
                "Any herbal supplements or vitamins?"
            ]
        },
        
        // Social History - may need quantification
        smoking: {
            generalPatterns: ["do you smoke", "smoke cigarettes", "tobacco"],
            requiresFollowUp: true,
            followUpThreshold: 1,
            hintIntro: "For smoking history, quantifying is important for risk assessment.",
            followUpPrompts: [
                "How many packs per day?",
                "How many years have you smoked?",
                "Have you tried quitting?",
                "When did you quit?"
            ]
        },
        
        alcohol: {
            generalPatterns: ["drink alcohol", "how much do you drink", "alcohol"],
            requiresFollowUp: true,
            followUpThreshold: 1,
            hintIntro: "For alcohol use, quantifying helps assess health risks.",
            followUpPrompts: [
                "How many drinks per week?",
                "What type of alcohol?",
                "Have you ever had problems with alcohol?",
                "Any blackouts or withdrawal symptoms?"
            ]
        },
        
        // Pain - needs full OLDCARTS
        pain: {
            generalPatterns: ["tell me about the pain", "describe the pain", "where does it hurt"],
            requiresFollowUp: true,
            followUpThreshold: 2,
            hintIntro: "For any pain complaint, use OLDCARTS to fully characterize it.",
            followUpPrompts: [
                "When did it start? (Onset)",
                "Where exactly is it? (Location)",
                "How long does it last? (Duration)",
                "What does it feel like? (Character)",
                "What makes it worse? (Aggravating)",
                "What makes it better? (Relieving)",
                "Is it constant or does it come and go? (Timing)",
                "On a scale of 1-10, how bad is it? (Severity)"
            ]
        },
        
        // Health Maintenance
        healthMaintenance: {
            generalPatterns: ["up to date on screenings", "preventive care", "health maintenance"],
            requiresFollowUp: true,
            followUpThreshold: 1,
            hintIntro: "Health maintenance questions should be specific to age and gender-appropriate screenings.",
            followUpByAgeGender: {
                'F_45+': ["Have you had a mammogram?", "When was your last Pap smear?", "Have you had a colonoscopy?"],
                'F_21-44': ["When was your last Pap smear?", "Are you up to date on vaccinations?"],
                'M_50+': ["Have you had a colonoscopy?", "Have you discussed PSA screening?", "Have you had a bone density test?"],
                'M_45-49': ["Have you discussed colorectal cancer screening?", "Are your vaccinations up to date?"],
                'all_65+': ["Have you had your pneumonia vaccine?", "Have you had the shingles vaccine?", "Do you get yearly flu shots?"]
            }
        }
    };

    // ========================================================================
    // QUESTION ANALYSIS
    // ========================================================================

    /**
     * Detect the category/topic of a question
     */
    function categorizeQuestion(question) {
        const q = question.toLowerCase();
        
        for (const [topic, data] of Object.entries(topicFollowUpRequirements)) {
            if (data.generalPatterns.some(p => q.includes(p))) {
                return {
                    topic,
                    isGeneral: true,
                    data
                };
            }
        }
        
        // Check for specific follow-up questions
        // PMH specifics
        if (q.includes('diabetes') || q.includes('blood sugar')) {
            return { topic: 'pmh', isGeneral: false, specificCondition: 'diabetes' };
        }
        if (q.includes('blood pressure') || q.includes('hypertension')) {
            return { topic: 'pmh', isGeneral: false, specificCondition: 'hypertension' };
        }
        if (q.includes('cholesterol') || q.includes('lipid')) {
            return { topic: 'pmh', isGeneral: false, specificCondition: 'hyperlipidemia' };
        }
        if (q.includes('heart disease') || q.includes('heart attack') || q.includes('cardiac')) {
            return { topic: 'pmh', isGeneral: false, specificCondition: 'cad' };
        }
        
        // Family history specifics
        if (q.includes('family') && (q.includes('heart') || q.includes('cancer') || q.includes('diabetes'))) {
            return { topic: 'familyHistory', isGeneral: false };
        }
        
        // Pain follow-ups
        if (q.includes('scale') || q.includes('1 to 10') || q.includes('how bad')) {
            return { topic: 'pain', isGeneral: false, followUpType: 'severity' };
        }
        if (q.includes('worse') || q.includes('aggravat') || q.includes('trigger')) {
            return { topic: 'pain', isGeneral: false, followUpType: 'aggravating' };
        }
        if (q.includes('better') || q.includes('reliev') || q.includes('help')) {
            return { topic: 'pain', isGeneral: false, followUpType: 'relieving' };
        }
        
        // Smoking quantification
        if (q.includes('pack') || q.includes('how many cigarette') || q.includes('how long') && q.includes('smok')) {
            return { topic: 'smoking', isGeneral: false };
        }
        
        // Alcohol quantification
        if (q.includes('how many drinks') || q.includes('how much') && q.includes('drink')) {
            return { topic: 'alcohol', isGeneral: false };
        }
        
        return { topic: 'other', isGeneral: false };
    }

    /**
     * Track a question and determine if follow-up prompt is needed
     */
    function trackQuestion(question, chiefComplaint) {
        if (!promptState.enabled) return null;
        
        const category = categorizeQuestion(question);
        
        // Update state
        promptState.lastQuestionCategory = category.topic;
        
        if (category.isGeneral) {
            // Student asked a general question - may need follow-up
            if (category.data.requiresFollowUp) {
                if (!promptState.topicsNeedingFollowUp.some(t => t.topic === category.topic)) {
                    promptState.topicsNeedingFollowUp.push({
                        topic: category.topic,
                        questionsAfter: 0,
                        threshold: category.data.followUpThreshold,
                        hintIntro: category.data.hintIntro,
                        followUpPrompts: getFollowUpPrompts(category.topic, chiefComplaint)
                    });
                }
            }
        } else if (category.topic !== 'other') {
            // Student asked a specific follow-up - remove from needing follow-up
            promptState.topicsNeedingFollowUp = promptState.topicsNeedingFollowUp.filter(
                t => t.topic !== category.topic
            );
        }
        
        // Increment counter for topics needing follow-up
        promptState.topicsNeedingFollowUp.forEach(t => {
            t.questionsAfter++;
        });
        
        // Check if any topic has exceeded threshold
        const needsPrompt = promptState.topicsNeedingFollowUp.find(
            t => t.questionsAfter >= t.threshold && !promptState.hintsShown.includes(t.topic)
        );
        
        if (needsPrompt) {
            promptState.hintsShown.push(needsPrompt.topic);
            promptState.promptsTriggered++;
            return {
                shouldPrompt: true,
                topic: needsPrompt.topic,
                hintIntro: needsPrompt.hintIntro,
                followUpPrompts: needsPrompt.followUpPrompts
            };
        }
        
        return null;
    }

    /**
     * Get relevant follow-up prompts for a topic based on chief complaint
     */
    function getFollowUpPrompts(topic, chiefComplaint) {
        const topicData = topicFollowUpRequirements[topic];
        if (!topicData) return [];
        
        // Direct follow-up prompts
        if (topicData.followUpPrompts) {
            return topicData.followUpPrompts;
        }
        
        // Category-based prompts
        if (topicData.followUpCategories && chiefComplaint) {
            // Map chief complaint to category
            const ccLower = chiefComplaint.toLowerCase();
            for (const [category, prompts] of Object.entries(topicData.followUpCategories)) {
                if (ccLower.includes(category.replace(/_/g, ' '))) {
                    return prompts.map(p => `Ask about ${p}`);
                }
            }
            // Default to first category if no match
            const firstCategory = Object.keys(topicData.followUpCategories)[0];
            return topicData.followUpCategories[firstCategory].map(p => `Ask about ${p}`);
        }
        
        return [];
    }

    /**
     * Check if prompt should show when student tries to submit/move on
     */
    function checkOnSubmit(chiefComplaint, patientAge, patientGender) {
        if (!promptState.enabled) return null;
        
        // Check for unresolved topics needing follow-up
        const unresolvedTopics = promptState.topicsNeedingFollowUp.filter(
            t => !promptState.hintsRevealed.includes(t.topic)
        );
        
        if (unresolvedTopics.length > 0) {
            const topic = unresolvedTopics[0];
            return {
                shouldPrompt: true,
                blocking: false, // Don't block, just suggest
                topic: topic.topic,
                message: `Before moving on, consider asking more specific questions about ${topic.topic.replace(/([A-Z])/g, ' $1').toLowerCase()}.`,
                hintIntro: topic.hintIntro,
                followUpPrompts: topic.followUpPrompts
            };
        }
        
        return null;
    }

    /**
     * Mark a hint as revealed
     */
    function revealHint(topic) {
        if (!promptState.hintsRevealed.includes(topic)) {
            promptState.hintsRevealed.push(topic);
        }
    }

    /**
     * Get suggested follow-up questions based on current state
     */
    function getSuggestedFollowUps(chiefComplaint, patientAge, patientGender, askedQuestions) {
        const suggestions = [];
        
        // Check what hasn't been asked
        const askedCategories = new Set();
        askedQuestions.forEach(q => {
            const cat = categorizeQuestion(q.question || q);
            if (cat.topic !== 'other') {
                askedCategories.add(cat.topic);
            }
        });
        
        // Suggest PMH follow-ups if general PMH was asked
        if (askedCategories.has('pmh') && 
            !promptState.hintsRevealed.includes('pmh')) {
            const prompts = getFollowUpPrompts('pmh', chiefComplaint);
            if (prompts.length > 0) {
                suggestions.push({
                    category: 'Past Medical History',
                    prompts: prompts.slice(0, 3)
                });
            }
        }
        
        // Suggest family history follow-ups
        if (askedCategories.has('familyHistory') &&
            !promptState.hintsRevealed.includes('familyHistory')) {
            const prompts = getFollowUpPrompts('familyHistory', chiefComplaint);
            if (prompts.length > 0) {
                suggestions.push({
                    category: 'Family History',
                    prompts: prompts.slice(0, 3)
                });
            }
        }
        
        return suggestions;
    }

    // ========================================================================
    // UI RENDERING
    // ========================================================================

    /**
     * Render the subtle hint button
     */
    function renderHintButton(promptData) {
        return `
            <div class="learning-hint-container" id="learningHint_${promptData.topic}">
                <button onclick="LearningModePrompts.showHintDetail('${promptData.topic}')"
                        class="learning-hint-button">
                    <span class="hint-icon">💡</span>
                    <span class="hint-text">Dig deeper?</span>
                </button>
            </div>
        `;
    }

    /**
     * Render the full hint panel
     */
    function renderHintPanel(topic) {
        const topicData = promptState.topicsNeedingFollowUp.find(t => t.topic === topic);
        if (!topicData) return '';
        
        revealHint(topic);
        
        return `
            <div class="learning-hint-panel" id="hintPanel_${topic}">
                <div class="hint-header">
                    <span class="hint-icon">💡</span>
                    <span class="hint-title">Consider asking more specific questions</span>
                    <button onclick="LearningModePrompts.closeHintPanel('${topic}')" class="hint-close">✕</button>
                </div>
                <div class="hint-intro">
                    ${topicData.hintIntro}
                </div>
                <div class="hint-suggestions">
                    <p><strong>Try asking:</strong></p>
                    <ul>
                        ${topicData.followUpPrompts.slice(0, 4).map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
                <div class="hint-encouragement">
                    <em>Give it a try! Specific questions lead to more useful information.</em>
                </div>
            </div>
        `;
    }

    /**
     * Show hint detail (called from button click)
     */
    function showHintDetail(topic) {
        const container = document.getElementById(`learningHint_${topic}`);
        if (container) {
            container.innerHTML = renderHintPanel(topic);
        }
    }

    /**
     * Close hint panel
     */
    function closeHintPanel(topic) {
        const container = document.getElementById(`learningHint_${topic}`);
        if (container) {
            container.remove();
        }
    }

    /**
     * Get CSS styles for learning mode prompts
     */
    function getStyles() {
        return `
            .learning-hint-container {
                margin: 8px 0;
                animation: slideIn 0.3s ease;
            }
            
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .learning-hint-button {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 16px;
                background: linear-gradient(135deg, #fef3c7, #fde68a);
                border: 1px solid #f59e0b;
                border-radius: 20px;
                cursor: pointer;
                font-size: 0.875rem;
                color: #92400e;
                transition: all 0.2s ease;
            }
            
            .learning-hint-button:hover {
                background: linear-gradient(135deg, #fde68a, #fcd34d);
                transform: scale(1.02);
            }
            
            .learning-hint-panel {
                background: #fffbeb;
                border: 2px solid #f59e0b;
                border-radius: 12px;
                padding: 16px;
                margin: 12px 0;
            }
            
            .learning-hint-panel .hint-header {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 12px;
            }
            
            .learning-hint-panel .hint-title {
                flex: 1;
                font-weight: 600;
                color: #92400e;
            }
            
            .learning-hint-panel .hint-close {
                background: none;
                border: none;
                cursor: pointer;
                color: #92400e;
                font-size: 1.2rem;
            }
            
            .learning-hint-panel .hint-intro {
                color: #78350f;
                margin-bottom: 12px;
                font-size: 0.9rem;
            }
            
            .learning-hint-panel .hint-suggestions {
                background: white;
                padding: 12px;
                border-radius: 8px;
                margin-bottom: 12px;
            }
            
            .learning-hint-panel .hint-suggestions ul {
                margin: 8px 0 0 0;
                padding-left: 20px;
                color: #b45309;
            }
            
            .learning-hint-panel .hint-suggestions li {
                margin: 4px 0;
            }
            
            .learning-hint-panel .hint-encouragement {
                color: #78350f;
                font-size: 0.85rem;
                text-align: center;
            }
            
            .submit-prompt-banner {
                background: #fef3c7;
                border: 1px solid #f59e0b;
                border-radius: 8px;
                padding: 12px;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .submit-prompt-banner .prompt-icon {
                font-size: 1.5rem;
            }
            
            .submit-prompt-banner .prompt-text {
                flex: 1;
                color: #92400e;
                font-size: 0.9rem;
            }
            
            .submit-prompt-banner .prompt-action {
                padding: 6px 12px;
                background: #f59e0b;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 0.85rem;
            }
            
            .submit-prompt-banner .prompt-skip {
                padding: 6px 12px;
                background: transparent;
                color: #92400e;
                border: 1px solid #f59e0b;
                border-radius: 6px;
                cursor: pointer;
                font-size: 0.85rem;
            }
        `;
    }

    // ========================================================================
    // PUBLIC API
    // ========================================================================
    
    return {
        resetState,
        setLearningMode,
        trackQuestion,
        checkOnSubmit,
        revealHint,
        getSuggestedFollowUps,
        renderHintButton,
        renderHintPanel,
        showHintDetail,
        closeHintPanel,
        getStyles,
        getState: () => ({ ...promptState })
    };
    
})();

// Make functions available globally for onclick handlers
if (typeof window !== 'undefined') {
    window.LearningModePrompts = LearningModePrompts;
}

// Export for Node.js if applicable
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LearningModePrompts;
}

console.log("✓ ReasonDx Learning Mode Prompts: Initialized");
