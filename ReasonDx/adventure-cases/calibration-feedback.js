// ============================================================================
// REASONDX CALIBRATION & PROCESS FEEDBACK SYSTEM
// ============================================================================
// 
// This module provides:
// 1. Confidence calibration tracking (ask confidence before revealing answer)
// 2. Reasoning process feedback (identify specific cognitive errors)
// 3. Calibration analytics (are learners appropriately confident?)
// 4. DDx evolution tracking with process analysis
// ============================================================================

const CalibrationSystem = {
    storageKey: 'reasondx_calibration_data',
    
    // ========================================================================
    // CONFIDENCE TRACKING
    // ========================================================================
    
    // Initialize calibration data
    init() {
        let data = localStorage.getItem(this.storageKey);
        if (!data) {
            data = {
                responses: [],
                calibrationCurve: {},
                totalByConfidence: { 0: 0, 25: 0, 50: 0, 75: 0, 100: 0 },
                correctByConfidence: { 0: 0, 25: 0, 50: 0, 75: 0, 100: 0 },
                overallStats: {
                    totalQuestions: 0,
                    totalCorrect: 0,
                    avgConfidenceWhenCorrect: 0,
                    avgConfidenceWhenIncorrect: 0
                }
            };
            this.save(data);
        }
        return JSON.parse(typeof data === 'string' ? data : JSON.stringify(data));
    },
    
    // Record a confidence-rated response
    recordResponse(questionId, caseId, confidence, correct, category, epaId) {
        const data = this.init();
        
        // Round confidence to nearest bucket
        const bucket = Math.round(confidence / 25) * 25;
        
        const response = {
            questionId,
            caseId,
            confidence,
            bucket,
            correct,
            category,
            epaId,
            timestamp: new Date().toISOString()
        };
        
        data.responses.push(response);
        data.totalByConfidence[bucket]++;
        if (correct) data.correctByConfidence[bucket]++;
        
        // Update overall stats
        data.overallStats.totalQuestions++;
        if (correct) data.overallStats.totalCorrect++;
        
        // Update average confidence when correct/incorrect
        this.updateAverages(data);
        
        this.save(data);
        return this.getCalibrationScore(data);
    },
    
    updateAverages(data) {
        const correctResponses = data.responses.filter(r => r.correct);
        const incorrectResponses = data.responses.filter(r => !r.correct);
        
        if (correctResponses.length > 0) {
            data.overallStats.avgConfidenceWhenCorrect = 
                correctResponses.reduce((sum, r) => sum + r.confidence, 0) / correctResponses.length;
        }
        if (incorrectResponses.length > 0) {
            data.overallStats.avgConfidenceWhenIncorrect = 
                incorrectResponses.reduce((sum, r) => sum + r.confidence, 0) / incorrectResponses.length;
        }
    },
    
    // Calculate calibration score (0 = perfect, higher = worse calibration)
    getCalibrationScore(data) {
        if (!data) data = this.init();
        
        let totalDeviation = 0;
        let bucketCount = 0;
        
        [0, 25, 50, 75, 100].forEach(bucket => {
            if (data.totalByConfidence[bucket] > 0) {
                const expectedAccuracy = bucket / 100;
                const actualAccuracy = data.correctByConfidence[bucket] / data.totalByConfidence[bucket];
                totalDeviation += Math.abs(expectedAccuracy - actualAccuracy);
                bucketCount++;
            }
        });
        
        return bucketCount > 0 ? Math.round((totalDeviation / bucketCount) * 100) : null;
    },
    
    // Get calibration curve for visualization
    getCalibrationCurve() {
        const data = this.init();
        return [0, 25, 50, 75, 100].map(bucket => ({
            confidence: bucket,
            expectedAccuracy: bucket,
            actualAccuracy: data.totalByConfidence[bucket] > 0 
                ? Math.round((data.correctByConfidence[bucket] / data.totalByConfidence[bucket]) * 100)
                : null,
            n: data.totalByConfidence[bucket]
        }));
    },
    
    // Get calibration interpretation
    getCalibrationInterpretation() {
        const data = this.init();
        const score = this.getCalibrationScore(data);
        const curve = this.getCalibrationCurve();
        
        // Identify patterns
        let pattern = 'insufficient_data';
        let interpretation = '';
        let recommendation = '';
        
        if (data.overallStats.totalQuestions < 20) {
            pattern = 'insufficient_data';
            interpretation = 'Complete more cases to establish your calibration pattern.';
            recommendation = 'Keep practicing! We need at least 20 questions to assess your calibration.';
        } else {
            const avgConfCorrect = data.overallStats.avgConfidenceWhenCorrect;
            const avgConfIncorrect = data.overallStats.avgConfidenceWhenIncorrect;
            const discrimination = avgConfCorrect - avgConfIncorrect;
            
            if (score < 10 && discrimination > 20) {
                pattern = 'well_calibrated';
                interpretation = 'Your confidence matches your accuracy well. This is a sign of good metacognition.';
                recommendation = 'Excellent calibration! Continue trusting your instincts.';
            } else if (avgConfIncorrect > 60) {
                pattern = 'overconfident';
                interpretation = `You average ${Math.round(avgConfIncorrect)}% confidence when wrong. Overconfidence is a major source of diagnostic error.`;
                recommendation = 'Practice pausing before answering. Ask yourself: "What would make me wrong?"';
            } else if (avgConfCorrect < 50) {
                pattern = 'underconfident';
                interpretation = `You average only ${Math.round(avgConfCorrect)}% confidence even when correct. You may be second-guessing yourself.`;
                recommendation = 'Trust your training more. Your knowledge is better than you think.';
            } else if (discrimination < 10) {
                pattern = 'poor_discrimination';
                interpretation = 'Your confidence is similar whether right or wrong - you may have difficulty recognizing what you know vs. don\'t know.';
                recommendation = 'Focus on identifying your knowledge gaps. When uncertain, explicitly list what you\'re unsure about.';
            }
        }
        
        return { pattern, interpretation, recommendation, score, curve, stats: data.overallStats };
    },
    
    save(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
};

// ============================================================================
// COGNITIVE ERROR DETECTION
// ============================================================================

const CognitiveErrorDetector = {
    // Define cognitive error patterns
    errorPatterns: {
        premature_closure: {
            name: "Premature Closure",
            description: "Accepting a diagnosis before gathering sufficient information or considering alternatives",
            indicators: [
                "Removed diagnosis from differential before disconfirming evidence",
                "High confidence with incomplete workup",
                "Did not consider must-not-miss diagnoses"
            ],
            remediation: "Before finalizing a diagnosis, ask: 'What else could this be?' and 'What would change my mind?'"
        },
        anchoring: {
            name: "Anchoring Bias",
            description: "Fixating on initial impression despite contradictory information",
            indicators: [
                "Did not update differential after new information",
                "Ignored findings inconsistent with leading diagnosis",
                "Maintained same confidence despite conflicting data"
            ],
            remediation: "When new information arrives, explicitly ask: 'Does this support or refute my current thinking?'"
        },
        availability_bias: {
            name: "Availability Heuristic",
            description: "Overweighting diagnoses that come easily to mind (recent cases, memorable cases)",
            indicators: [
                "Chose common diagnosis when rare diagnosis had better fit",
                "Pattern not consistent with evidence",
                "Similar to recently seen case but different key features"
            ],
            remediation: "Consider: 'Am I choosing this because it fits, or because I've seen it recently?'"
        },
        confirmation_bias: {
            name: "Confirmation Bias",
            description: "Seeking or interpreting information to confirm pre-existing hypothesis",
            indicators: [
                "Ordered tests only for leading diagnosis",
                "Minimized findings that didn't fit",
                "Didn't pursue alternative explanations"
            ],
            remediation: "Actively seek disconfirming evidence. Ask: 'What test would prove me wrong?'"
        },
        base_rate_neglect: {
            name: "Base Rate Neglect",
            description: "Ignoring prevalence when estimating probability of diagnosis",
            indicators: [
                "Chose rare diagnosis without compelling specific evidence",
                "Ignored pre-test probability",
                "Over-ordered low-yield tests"
            ],
            remediation: "Always start with: 'How common is this diagnosis in this population?'"
        },
        representativeness: {
            name: "Representativeness Heuristic",
            description: "Judging likelihood based on how well case matches prototype, ignoring base rates",
            indicators: [
                "Classic presentation led to overconfidence",
                "Missed atypical presentations of common diseases",
                "Anchored on 'textbook' features"
            ],
            remediation: "Remember: Classic presentations are memorable but not always common. Consider atypical presentations."
        }
    },
    
    // Analyze DDx evolution for cognitive errors
    analyzeDDxEvolution(ddxSnapshots, correctDiagnosis, caseData) {
        const errors = [];
        const stages = Object.keys(ddxSnapshots);
        
        if (stages.length < 2) return errors;
        
        // Check for premature closure
        stages.forEach((stage, idx) => {
            const snapshot = ddxSnapshots[stage];
            const prevSnapshot = idx > 0 ? ddxSnapshots[stages[idx - 1]] : null;
            
            // Did they remove the correct diagnosis too early?
            if (prevSnapshot) {
                const hadCorrect = prevSnapshot.some(d => d.id === correctDiagnosis);
                const hasCorrect = snapshot.some(d => d.id === correctDiagnosis);
                
                if (hadCorrect && !hasCorrect) {
                    errors.push({
                        type: 'premature_closure',
                        stage,
                        detail: `Removed ${correctDiagnosis} from differential at ${stage} stage`,
                        severity: 'high'
                    });
                }
            }
            
            // Did they miss must-not-miss diagnoses?
            if (caseData.mustNotMiss) {
                const missingMNM = caseData.mustNotMiss.filter(
                    mnm => !snapshot.some(d => d.id === mnm)
                );
                if (missingMNM.length > 0 && stage === stages[0]) {
                    errors.push({
                        type: 'premature_closure',
                        stage,
                        detail: `Did not include must-not-miss diagnoses: ${missingMNM.join(', ')}`,
                        severity: 'high'
                    });
                }
            }
        });
        
        // Check for anchoring (no change despite new information)
        if (stages.length >= 3) {
            const firstDDx = ddxSnapshots[stages[0]].map(d => d.id).join(',');
            const lastDDx = ddxSnapshots[stages[stages.length - 1]].map(d => d.id).join(',');
            
            if (firstDDx === lastDDx && stages.length > 2) {
                errors.push({
                    type: 'anchoring',
                    stage: 'throughout',
                    detail: 'Differential did not change despite new information',
                    severity: 'medium'
                });
            }
        }
        
        return errors;
    },
    
    // Analyze single question response for cognitive errors
    analyzeResponse(response, questionData, caseContext) {
        const errors = [];
        
        // High confidence + wrong answer suggests overconfidence/premature closure
        if (!response.correct && response.confidence > 75) {
            errors.push({
                type: 'premature_closure',
                detail: `High confidence (${response.confidence}%) but incorrect - may indicate premature closure`,
                severity: 'medium'
            });
        }
        
        // Check for specific question-type errors
        if (questionData.type === 'test-selection' && !response.correct) {
            if (questionData.correctAnswer.includes('clinical-correlation')) {
                errors.push({
                    type: 'confirmation_bias',
                    detail: 'Ordered test without considering clinical context',
                    severity: 'low'
                });
            }
        }
        
        return errors;
    },
    
    // Get personalized feedback based on error patterns
    getPersonalizedFeedback(errorHistory) {
        const errorCounts = {};
        errorHistory.forEach(e => {
            errorCounts[e.type] = (errorCounts[e.type] || 0) + 1;
        });
        
        // Find most common error
        const sortedErrors = Object.entries(errorCounts)
            .sort((a, b) => b[1] - a[1]);
        
        if (sortedErrors.length === 0) {
            return {
                summary: "No specific cognitive error patterns detected yet.",
                recommendation: "Keep practicing and monitoring your reasoning process."
            };
        }
        
        const topError = sortedErrors[0][0];
        const pattern = this.errorPatterns[topError];
        
        return {
            summary: `Your most common reasoning error is ${pattern.name}`,
            description: pattern.description,
            frequency: `${errorCounts[topError]} instances detected`,
            indicators: pattern.indicators,
            recommendation: pattern.remediation,
            otherPatterns: sortedErrors.slice(1).map(([type, count]) => ({
                name: this.errorPatterns[type].name,
                count
            }))
        };
    }
};

// ============================================================================
// PROCESS FEEDBACK GENERATOR
// ============================================================================

const ProcessFeedback = {
    // Generate comprehensive feedback for a completed case
    generateCaseFeedback(caseData, userResponses, ddxSnapshots) {
        const feedback = {
            overall: {},
            byStage: [],
            cognitiveErrors: [],
            calibration: {},
            recommendations: []
        };
        
        // Overall performance
        const totalPoints = userResponses.reduce((sum, r) => sum + (r.points || 0), 0);
        const maxPoints = userResponses.reduce((sum, r) => sum + (r.maxPoints || 0), 0);
        feedback.overall = {
            score: totalPoints,
            maxScore: maxPoints,
            percentage: maxPoints > 0 ? Math.round((totalPoints / maxPoints) * 100) : 0,
            correctCount: userResponses.filter(r => r.correct).length,
            totalQuestions: userResponses.length
        };
        
        // Stage-by-stage analysis
        userResponses.forEach((response, idx) => {
            const stageFeedback = {
                stage: response.stage || idx + 1,
                question: response.questionText,
                yourAnswer: response.selectedText,
                correct: response.correct,
                points: response.points,
                confidence: response.confidence,
                feedback: this.generateStageFeedback(response, caseData)
            };
            feedback.byStage.push(stageFeedback);
        });
        
        // Cognitive error analysis
        if (ddxSnapshots && Object.keys(ddxSnapshots).length > 0) {
            feedback.cognitiveErrors = CognitiveErrorDetector.analyzeDDxEvolution(
                ddxSnapshots,
                caseData.finalDiagnosis,
                caseData
            );
        }
        
        // Add response-level error analysis
        userResponses.forEach(response => {
            const errors = CognitiveErrorDetector.analyzeResponse(
                response,
                response.questionData || {},
                caseData
            );
            feedback.cognitiveErrors.push(...errors);
        });
        
        // Calibration for this case
        const caseCalibration = this.analyzeCaseCalibration(userResponses);
        feedback.calibration = caseCalibration;
        
        // Generate recommendations
        feedback.recommendations = this.generateRecommendations(feedback);
        
        return feedback;
    },
    
    generateStageFeedback(response, caseData) {
        if (response.correct) {
            if (response.confidence >= 75) {
                return {
                    type: 'excellent',
                    message: 'Correct with appropriate confidence - well calibrated!',
                    icon: '✅'
                };
            } else {
                return {
                    type: 'underconfident',
                    message: 'Correct, but you were uncertain. Trust your knowledge more.',
                    icon: '✓'
                };
            }
        } else {
            if (response.confidence >= 75) {
                return {
                    type: 'overconfident_error',
                    message: 'Incorrect despite high confidence - this is where diagnostic errors happen.',
                    icon: '⚠️'
                };
            } else {
                return {
                    type: 'appropriate_uncertainty',
                    message: 'Incorrect, but your uncertainty was appropriate. Review this concept.',
                    icon: '📚'
                };
            }
        }
    },
    
    analyzeCaseCalibration(responses) {
        const withConfidence = responses.filter(r => r.confidence !== undefined);
        if (withConfidence.length === 0) return null;
        
        const correct = withConfidence.filter(r => r.correct);
        const incorrect = withConfidence.filter(r => !r.correct);
        
        return {
            avgConfidenceWhenCorrect: correct.length > 0 
                ? Math.round(correct.reduce((sum, r) => sum + r.confidence, 0) / correct.length)
                : null,
            avgConfidenceWhenIncorrect: incorrect.length > 0
                ? Math.round(incorrect.reduce((sum, r) => sum + r.confidence, 0) / incorrect.length)
                : null,
            discrimination: correct.length > 0 && incorrect.length > 0
                ? Math.round(
                    (correct.reduce((sum, r) => sum + r.confidence, 0) / correct.length) -
                    (incorrect.reduce((sum, r) => sum + r.confidence, 0) / incorrect.length)
                  )
                : null
        };
    },
    
    generateRecommendations(feedback) {
        const recommendations = [];
        
        // Based on overall score
        if (feedback.overall.percentage < 60) {
            recommendations.push({
                priority: 'high',
                type: 'knowledge',
                message: 'Review the core concepts for this topic before attempting similar cases.',
                action: 'Visit MechanismDx module for foundational review'
            });
        }
        
        // Based on cognitive errors
        if (feedback.cognitiveErrors.length > 0) {
            const errorTypes = [...new Set(feedback.cognitiveErrors.map(e => e.type))];
            errorTypes.forEach(type => {
                const pattern = CognitiveErrorDetector.errorPatterns[type];
                if (pattern) {
                    recommendations.push({
                        priority: 'high',
                        type: 'reasoning',
                        message: `Detected ${pattern.name}: ${pattern.description}`,
                        action: pattern.remediation
                    });
                }
            });
        }
        
        // Based on calibration
        if (feedback.calibration) {
            if (feedback.calibration.avgConfidenceWhenIncorrect > 70) {
                recommendations.push({
                    priority: 'medium',
                    type: 'calibration',
                    message: 'You showed overconfidence on incorrect answers.',
                    action: 'Before answering, pause and ask "What would make me wrong?"'
                });
            }
            if (feedback.calibration.discrimination !== null && feedback.calibration.discrimination < 10) {
                recommendations.push({
                    priority: 'medium',
                    type: 'calibration',
                    message: 'Your confidence was similar whether right or wrong.',
                    action: 'Practice identifying what you know vs. what you\'re uncertain about.'
                });
            }
        }
        
        return recommendations;
    }
};

// ============================================================================
// UI COMPONENTS - Confidence Slider
// ============================================================================

const ConfidenceUI = {
    // Generate confidence slider HTML
    generateSlider(questionId) {
        return `
            <div class="confidence-container" id="confidence-${questionId}">
                <div class="confidence-header">
                    <span class="confidence-icon">🎯</span>
                    <span class="confidence-label">How confident are you in your answer?</span>
                </div>
                <div class="confidence-slider-wrapper">
                    <input type="range" 
                           class="confidence-slider" 
                           id="confidence-slider-${questionId}" 
                           min="0" max="100" value="50"
                           oninput="ConfidenceUI.updateDisplay('${questionId}', this.value)">
                    <div class="confidence-labels">
                        <span>Guessing</span>
                        <span>Uncertain</span>
                        <span>Fairly Sure</span>
                        <span>Very Sure</span>
                        <span>Certain</span>
                    </div>
                </div>
                <div class="confidence-value" id="confidence-value-${questionId}">50%</div>
                <button class="confidence-submit" onclick="ConfidenceUI.submitWithConfidence('${questionId}')">
                    Submit Answer
                </button>
            </div>
        `;
    },
    
    // Update confidence display
    updateDisplay(questionId, value) {
        const display = document.getElementById(`confidence-value-${questionId}`);
        if (display) {
            display.textContent = `${value}%`;
            display.className = `confidence-value ${this.getConfidenceClass(value)}`;
        }
    },
    
    getConfidenceClass(value) {
        if (value <= 25) return 'confidence-low';
        if (value <= 50) return 'confidence-medium';
        if (value <= 75) return 'confidence-high';
        return 'confidence-very-high';
    },
    
    // Get current confidence value
    getConfidence(questionId) {
        const slider = document.getElementById(`confidence-slider-${questionId}`);
        return slider ? parseInt(slider.value) : 50;
    },
    
    // CSS for confidence slider
    getStyles() {
        return `
            .confidence-container {
                background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15));
                border: 1px solid rgba(59,130,246,0.3);
                border-radius: 12px;
                padding: 20px;
                margin: 16px 0;
            }
            .confidence-header {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 16px;
            }
            .confidence-icon { font-size: 1.2rem; }
            .confidence-label { 
                font-weight: 600; 
                color: var(--text-primary, #e2e8f0);
            }
            .confidence-slider-wrapper {
                position: relative;
                margin-bottom: 8px;
            }
            .confidence-slider {
                width: 100%;
                height: 8px;
                border-radius: 4px;
                background: rgba(255,255,255,0.1);
                outline: none;
                -webkit-appearance: none;
            }
            .confidence-slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                cursor: pointer;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            }
            .confidence-labels {
                display: flex;
                justify-content: space-between;
                font-size: 0.7rem;
                color: rgba(255,255,255,0.6);
                margin-top: 4px;
            }
            .confidence-value {
                text-align: center;
                font-size: 2rem;
                font-weight: 700;
                margin: 12px 0;
                transition: color 0.3s;
            }
            .confidence-low { color: #94a3b8; }
            .confidence-medium { color: #fbbf24; }
            .confidence-high { color: #22c55e; }
            .confidence-very-high { color: #3b82f6; }
            .confidence-submit {
                width: 100%;
                padding: 14px;
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                color: white;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                transition: transform 0.2s, box-shadow 0.2s;
            }
            .confidence-submit:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(59,130,246,0.4);
            }
            
            /* Calibration Feedback Badge */
            .calibration-badge {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 500;
            }
            .calibration-badge.excellent { 
                background: rgba(34,197,94,0.2); 
                color: #22c55e; 
            }
            .calibration-badge.overconfident { 
                background: rgba(239,68,68,0.2); 
                color: #ef4444; 
            }
            .calibration-badge.underconfident { 
                background: rgba(251,191,36,0.2); 
                color: #fbbf24; 
            }
        `;
    }
};

// ============================================================================
// EXPORT
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        CalibrationSystem, 
        CognitiveErrorDetector, 
        ProcessFeedback, 
        ConfidenceUI 
    };
}
