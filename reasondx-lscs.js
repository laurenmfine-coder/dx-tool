/**
 * ReasonDx - Learner State Check-In System (LSCS)
 * Version: 1.0
 * Author: Lauren Fine, MD, FAAAAI
 * 
 * Patent-Pending Innovation:
 * "System for collecting and correlating learner physiological and psychological 
 * state data with clinical reasoning performance"
 * 
 * Features:
 * - Pre-case state assessment (stress, energy, confidence, time estimate, HR)
 * - Adaptive mid-case check-ins
 * - Post-case reflection and difficulty rating
 * - Skip tracking for engagement analysis
 * - Data persistence for longitudinal analysis
 */

const ReasonDxLSCS = (function() {
    'use strict';

    // ==========================================
    // Configuration
    // ==========================================
    const CONFIG = {
        version: '1.0.0',
        storageKey: 'rdx_lscs_data',
        checkInDuration: {
            pre: 30,    // seconds estimated
            mid: 15,
            post: 45
        },
        midCaseThresholds: {
            timeElapsed: 300,      // 5 minutes for timed cases
            afterDifferential: true,
            betweenDays: true       // for longitudinal cases
        }
    };

    // ==========================================
    // State Management
    // ==========================================
    let state = {
        currentSession: null,
        checkInData: {
            pre: null,
            mid: null,
            post: null
        },
        completionHistory: [],
        engagementMetrics: {
            preCompleted: 0,
            preSkipped: 0,
            midCompleted: 0,
            midSkipped: 0,
            postCompleted: 0,
            postSkipped: 0
        }
    };

    // ==========================================
    // Initialization
    // ==========================================
    function init() {
        loadFromStorage();
        createModalContainer();
        console.log('[LSCS] Learner State Check-In System initialized v' + CONFIG.version);
    }

    function loadFromStorage() {
        try {
            const stored = localStorage.getItem(CONFIG.storageKey);
            if (stored) {
                const data = JSON.parse(stored);
                state.completionHistory = data.completionHistory || [];
                state.engagementMetrics = data.engagementMetrics || state.engagementMetrics;
            }
        } catch (e) {
            console.warn('[LSCS] Could not load from storage:', e);
        }
    }

    function saveToStorage() {
        try {
            const data = {
                completionHistory: state.completionHistory.slice(-100), // Keep last 100
                engagementMetrics: state.engagementMetrics
            };
            localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
        } catch (e) {
            console.warn('[LSCS] Could not save to storage:', e);
        }
    }

    // ==========================================
    // Modal Container
    // ==========================================
    function createModalContainer() {
        if (document.getElementById('rdx-lscs-container')) return;
        
        const container = document.createElement('div');
        container.id = 'rdx-lscs-container';
        document.body.appendChild(container);
    }

    // ==========================================
    // Pre-Case Check-In
    // ==========================================
    function showPreCaseCheckIn(caseInfo = {}) {
        return new Promise((resolve) => {
            state.currentSession = {
                caseId: caseInfo.caseId || 'unknown',
                caseName: caseInfo.caseName || 'Case',
                caseType: caseInfo.caseType || 'standard',
                startTime: Date.now()
            };

            const modal = createModal({
                id: 'rdx-precheckin',
                title: '🎯 Quick Check-In',
                subtitle: 'How are you feeling before starting?',
                content: `
                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">How are you feeling right now?</label>
                        <div class="rdx-emoji-scale" data-field="mood">
                            <div class="rdx-emoji-option" data-value="1">
                                <span class="emoji">😫</span>
                                <span class="label">Stressed</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="2">
                                <span class="emoji">😕</span>
                                <span class="label">Tense</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="3">
                                <span class="emoji">😐</span>
                                <span class="label">Neutral</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="4">
                                <span class="emoji">🙂</span>
                                <span class="label">Good</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="5">
                                <span class="emoji">😊</span>
                                <span class="label">Great</span>
                            </div>
                        </div>
                    </div>

                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">Energy level?</label>
                        <div class="rdx-energy-scale" data-field="energy">
                            <div class="rdx-energy-option" data-value="1">
                                <span class="battery">🪫</span>
                                <span class="level">Empty</span>
                            </div>
                            <div class="rdx-energy-option" data-value="2">
                                <span class="battery">🔋</span>
                                <span class="level">Low</span>
                            </div>
                            <div class="rdx-energy-option" data-value="3">
                                <span class="battery">🔋</span>
                                <span class="level">Medium</span>
                            </div>
                            <div class="rdx-energy-option" data-value="4">
                                <span class="battery">🔋</span>
                                <span class="level">Good</span>
                            </div>
                            <div class="rdx-energy-option" data-value="5">
                                <span class="battery">⚡</span>
                                <span class="level">Full</span>
                            </div>
                        </div>
                    </div>

                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">How confident are you that you'll solve this case?</label>
                        <div class="rdx-slider-container">
                            <input type="range" class="rdx-slider" id="rdx-confidence-slider" 
                                   min="0" max="100" value="50" data-field="confidence">
                            <span class="rdx-slider-value" id="rdx-confidence-value">50%</span>
                        </div>
                    </div>

                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">How long do you think this will take?</label>
                        <div class="rdx-number-input">
                            <input type="number" id="rdx-time-estimate" min="1" max="60" value="10" 
                                   data-field="timeEstimate">
                            <span class="unit">minutes</span>
                        </div>
                    </div>

                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">Heart rate (optional - check your watch)</label>
                        <div class="rdx-number-input">
                            <input type="number" id="rdx-hr-pre" min="40" max="200" placeholder="72" 
                                   data-field="heartRate">
                            <span class="unit">bpm</span>
                        </div>
                    </div>
                `,
                primaryBtn: "Let's Go! →",
                skipBtn: 'Skip',
                onPrimary: () => {
                    const data = collectCheckInData('pre');
                    state.checkInData.pre = data;
                    state.engagementMetrics.preCompleted++;
                    recordCompletion('pre', true, data);
                    closeModal('rdx-precheckin');
                    resolve({ completed: true, data });
                },
                onSkip: () => {
                    state.engagementMetrics.preSkipped++;
                    recordCompletion('pre', false, null);
                    closeModal('rdx-precheckin');
                    resolve({ completed: false, data: null });
                }
            });

            // Set up slider interaction
            const slider = modal.querySelector('#rdx-confidence-slider');
            const sliderValue = modal.querySelector('#rdx-confidence-value');
            slider.addEventListener('input', () => {
                sliderValue.textContent = slider.value + '%';
            });

            // Set up emoji/energy selection
            setupSelectionGroups(modal);
        });
    }

    // ==========================================
    // Mid-Case Check-In
    // ==========================================
    function showMidCaseCheckIn(trigger = 'manual') {
        return new Promise((resolve) => {
            if (!state.currentSession) {
                resolve({ completed: false, data: null, error: 'No active session' });
                return;
            }

            const modal = createModal({
                id: 'rdx-midcheckin',
                title: '⏸️ Quick Check',
                subtitle: 'Just 15 seconds - how\'s it going?',
                content: `
                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">Current stress level?</label>
                        <div class="rdx-emoji-scale" data-field="mood">
                            <div class="rdx-emoji-option" data-value="1">
                                <span class="emoji">😫</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="2">
                                <span class="emoji">😕</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="3">
                                <span class="emoji">😐</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="4">
                                <span class="emoji">🙂</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="5">
                                <span class="emoji">😊</span>
                            </div>
                        </div>
                    </div>

                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">How's it going?</label>
                        <div class="rdx-flow-buttons" data-field="flowState">
                            <button class="rdx-flow-btn stuck" data-value="stuck">
                                🤔 Stuck
                            </button>
                            <button class="rdx-flow-btn uncertain" data-value="uncertain">
                                🔄 Working through it
                            </button>
                            <button class="rdx-flow-btn flowing" data-value="flowing">
                                ✨ Flowing
                            </button>
                        </div>
                    </div>

                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">Heart rate now? (optional)</label>
                        <div class="rdx-number-input">
                            <input type="number" id="rdx-hr-mid" min="40" max="200" placeholder="--" 
                                   data-field="heartRate">
                            <span class="unit">bpm</span>
                        </div>
                    </div>
                `,
                primaryBtn: 'Continue →',
                skipBtn: 'Skip',
                onPrimary: () => {
                    const data = collectCheckInData('mid');
                    data.trigger = trigger;
                    data.timeInCase = Date.now() - state.currentSession.startTime;
                    state.checkInData.mid = data;
                    state.engagementMetrics.midCompleted++;
                    recordCompletion('mid', true, data);
                    closeModal('rdx-midcheckin');
                    resolve({ completed: true, data });
                },
                onSkip: () => {
                    state.engagementMetrics.midSkipped++;
                    recordCompletion('mid', false, null);
                    closeModal('rdx-midcheckin');
                    resolve({ completed: false, data: null });
                }
            });

            setupSelectionGroups(modal);
            setupFlowButtons(modal);
        });
    }

    // ==========================================
    // Post-Case Check-In
    // ==========================================
    function showPostCaseCheckIn(caseResults = {}) {
        return new Promise((resolve) => {
            if (!state.currentSession) {
                resolve({ completed: false, data: null, error: 'No active session' });
                return;
            }

            const actualTime = Math.round((Date.now() - state.currentSession.startTime) / 60000);
            const estimatedTime = state.checkInData.pre?.timeEstimate || '?';

            const modal = createModal({
                id: 'rdx-postcheckin',
                title: '📊 Reflection',
                subtitle: 'Help us help you improve!',
                content: `
                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">How mentally demanding was this case?</label>
                        <div class="rdx-slider-container">
                            <input type="range" class="rdx-slider" id="rdx-cognitive-load" 
                                   min="1" max="10" value="5" data-field="cognitiveLoad">
                            <span class="rdx-slider-value" id="rdx-load-value">5/10</span>
                        </div>
                    </div>

                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">How do you feel now?</label>
                        <div class="rdx-emoji-scale" data-field="mood">
                            <div class="rdx-emoji-option" data-value="1">
                                <span class="emoji">😫</span>
                                <span class="label">Drained</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="2">
                                <span class="emoji">😕</span>
                                <span class="label">Tired</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="3">
                                <span class="emoji">😐</span>
                                <span class="label">Okay</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="4">
                                <span class="emoji">🙂</span>
                                <span class="label">Good</span>
                            </div>
                            <div class="rdx-emoji-option" data-value="5">
                                <span class="emoji">😊</span>
                                <span class="label">Energized</span>
                            </div>
                        </div>
                    </div>

                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">How was the difficulty?</label>
                        <div class="rdx-difficulty-buttons" data-field="difficulty">
                            <button class="rdx-difficulty-btn easy" data-value="too_easy">
                                Too Easy
                            </button>
                            <button class="rdx-difficulty-btn right" data-value="just_right">
                                Just Right
                            </button>
                            <button class="rdx-difficulty-btn hard" data-value="too_hard">
                                Too Hard
                            </button>
                        </div>
                    </div>

                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">Heart rate now? (optional)</label>
                        <div class="rdx-number-input">
                            <input type="number" id="rdx-hr-post" min="40" max="200" placeholder="--" 
                                   data-field="heartRate">
                            <span class="unit">bpm</span>
                        </div>
                    </div>

                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">What was the hardest part?</label>
                        <textarea class="rdx-text-input" id="rdx-hardest" 
                                  placeholder="e.g., narrowing the differential, interpreting the labs..."
                                  data-field="hardestPart"></textarea>
                    </div>

                    <div class="rdx-checkin-field">
                        <label class="rdx-checkin-label">What would you do differently? (optional)</label>
                        <textarea class="rdx-text-input" id="rdx-differently" 
                                  placeholder="Reflecting helps solidify learning..."
                                  data-field="doingDifferently"></textarea>
                    </div>

                    <div class="rdx-pattern-stat" style="display: flex; justify-content: space-around;">
                        <div style="text-align: center;">
                            <div class="rdx-pattern-stat-label">Time Estimate</div>
                            <div class="rdx-pattern-stat-value">${estimatedTime} min</div>
                        </div>
                        <div style="text-align: center;">
                            <div class="rdx-pattern-stat-label">Actual Time</div>
                            <div class="rdx-pattern-stat-value">${actualTime} min</div>
                        </div>
                    </div>
                `,
                primaryBtn: 'See My Insights →',
                skipBtn: 'Skip reflection',
                onPrimary: () => {
                    const data = collectCheckInData('post');
                    data.actualTime = actualTime;
                    data.caseResults = caseResults;
                    state.checkInData.post = data;
                    state.engagementMetrics.postCompleted++;
                    recordCompletion('post', true, data);
                    closeModal('rdx-postcheckin');
                    
                    // Return all session data
                    const sessionData = compileSessionData();
                    resolve({ completed: true, data: sessionData });
                },
                onSkip: () => {
                    state.engagementMetrics.postSkipped++;
                    recordCompletion('post', false, null);
                    closeModal('rdx-postcheckin');
                    resolve({ completed: false, data: null });
                }
            });

            // Set up slider interaction
            const slider = modal.querySelector('#rdx-cognitive-load');
            const sliderValue = modal.querySelector('#rdx-load-value');
            slider.addEventListener('input', () => {
                sliderValue.textContent = slider.value + '/10';
            });

            setupSelectionGroups(modal);
            setupDifficultyButtons(modal);
        });
    }

    // ==========================================
    // Helper Functions
    // ==========================================
    function createModal({ id, title, subtitle, content, primaryBtn, skipBtn, onPrimary, onSkip }) {
        // Remove existing modal if any
        const existing = document.getElementById(id);
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.id = id;
        overlay.className = 'rdx-modal-overlay';
        overlay.innerHTML = `
            <div class="rdx-modal">
                <div class="rdx-modal-header">
                    <div>
                        <div class="rdx-modal-title">${title}</div>
                        <div class="rdx-modal-subtitle">${subtitle}</div>
                    </div>
                </div>
                <div class="rdx-modal-body">
                    ${content}
                </div>
                <div class="rdx-modal-footer">
                    <button class="rdx-btn rdx-btn-skip" id="${id}-skip">${skipBtn}</button>
                    <button class="rdx-btn rdx-btn-primary" id="${id}-primary">${primaryBtn}</button>
                </div>
            </div>
        `;

        document.getElementById('rdx-lscs-container').appendChild(overlay);

        // Trigger animation
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });

        // Event listeners
        overlay.querySelector(`#${id}-primary`).addEventListener('click', onPrimary);
        overlay.querySelector(`#${id}-skip`).addEventListener('click', onSkip);

        return overlay;
    }

    function closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }

    function setupSelectionGroups(container) {
        const emojiScales = container.querySelectorAll('.rdx-emoji-scale');
        emojiScales.forEach(scale => {
            const options = scale.querySelectorAll('.rdx-emoji-option');
            options.forEach(option => {
                option.addEventListener('click', () => {
                    options.forEach(o => o.classList.remove('selected'));
                    option.classList.add('selected');
                });
            });
        });

        const energyScales = container.querySelectorAll('.rdx-energy-scale');
        energyScales.forEach(scale => {
            const options = scale.querySelectorAll('.rdx-energy-option');
            options.forEach(option => {
                option.addEventListener('click', () => {
                    options.forEach(o => o.classList.remove('selected'));
                    option.classList.add('selected');
                });
            });
        });
    }

    function setupFlowButtons(container) {
        const flowButtons = container.querySelectorAll('.rdx-flow-btn');
        flowButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                flowButtons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            });
        });
    }

    function setupDifficultyButtons(container) {
        const diffButtons = container.querySelectorAll('.rdx-difficulty-btn');
        diffButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                diffButtons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            });
        });
    }

    function collectCheckInData(phase) {
        const container = document.querySelector(`#rdx-${phase}checkin`);
        if (!container) return {};

        const data = {
            phase,
            timestamp: Date.now()
        };

        // Collect emoji/energy selections
        const selectedEmoji = container.querySelector('.rdx-emoji-scale .rdx-emoji-option.selected');
        if (selectedEmoji) {
            data.mood = parseInt(selectedEmoji.dataset.value);
        }

        const selectedEnergy = container.querySelector('.rdx-energy-scale .rdx-energy-option.selected');
        if (selectedEnergy) {
            data.energy = parseInt(selectedEnergy.dataset.value);
        }

        // Collect flow state
        const selectedFlow = container.querySelector('.rdx-flow-btn.selected');
        if (selectedFlow) {
            data.flowState = selectedFlow.dataset.value;
        }

        // Collect difficulty
        const selectedDifficulty = container.querySelector('.rdx-difficulty-btn.selected');
        if (selectedDifficulty) {
            data.difficulty = selectedDifficulty.dataset.value;
        }

        // Collect sliders
        const confidenceSlider = container.querySelector('#rdx-confidence-slider');
        if (confidenceSlider) {
            data.confidence = parseInt(confidenceSlider.value);
        }

        const loadSlider = container.querySelector('#rdx-cognitive-load');
        if (loadSlider) {
            data.cognitiveLoad = parseInt(loadSlider.value);
        }

        // Collect number inputs
        const timeEstimate = container.querySelector('#rdx-time-estimate');
        if (timeEstimate && timeEstimate.value) {
            data.timeEstimate = parseInt(timeEstimate.value);
        }

        const hrInputs = container.querySelectorAll('input[data-field="heartRate"]');
        hrInputs.forEach(input => {
            if (input.value) {
                data.heartRate = parseInt(input.value);
            }
        });

        // Collect text inputs
        const hardest = container.querySelector('#rdx-hardest');
        if (hardest && hardest.value.trim()) {
            data.hardestPart = hardest.value.trim();
        }

        const differently = container.querySelector('#rdx-differently');
        if (differently && differently.value.trim()) {
            data.doingDifferently = differently.value.trim();
        }

        return data;
    }

    function compileSessionData() {
        return {
            session: state.currentSession,
            checkIns: {
                pre: state.checkInData.pre,
                mid: state.checkInData.mid,
                post: state.checkInData.post
            },
            computed: computeSessionInsights()
        };
    }

    function computeSessionInsights() {
        const insights = {};
        const pre = state.checkInData.pre;
        const mid = state.checkInData.mid;
        const post = state.checkInData.post;

        // Confidence calibration
        if (pre?.confidence !== undefined && post?.caseResults?.score !== undefined) {
            insights.confidenceCalibration = {
                predicted: pre.confidence,
                actual: post.caseResults.score,
                difference: post.caseResults.score - pre.confidence,
                assessment: getCalibrationAssessment(pre.confidence, post.caseResults.score)
            };
        }

        // Time estimation accuracy
        if (pre?.timeEstimate && post?.actualTime) {
            insights.timeCalibration = {
                estimated: pre.timeEstimate,
                actual: post.actualTime,
                ratio: (post.actualTime / pre.timeEstimate).toFixed(2),
                assessment: getTimeAssessment(pre.timeEstimate, post.actualTime)
            };
        }

        // Heart rate trajectory
        if (pre?.heartRate || mid?.heartRate || post?.heartRate) {
            insights.heartRateTrajectory = {
                pre: pre?.heartRate || null,
                mid: mid?.heartRate || null,
                post: post?.heartRate || null,
                peakChange: calculatePeakHRChange(pre?.heartRate, mid?.heartRate, post?.heartRate)
            };
        }

        // Stress trajectory
        if (pre?.mood || mid?.mood || post?.mood) {
            insights.stressTrajectory = {
                pre: pre?.mood || null,
                mid: mid?.mood || null,
                post: post?.mood || null
            };
        }

        // Energy change
        if (pre?.energy && post?.mood) {
            insights.energyChange = {
                start: pre.energy,
                end: post.mood, // Using mood as proxy for post-case state
                assessment: getEnergyAssessment(pre.energy, post.mood)
            };
        }

        return insights;
    }

    function getCalibrationAssessment(predicted, actual) {
        const diff = actual - predicted;
        if (Math.abs(diff) <= 10) return { type: 'well_calibrated', message: 'Great calibration!' };
        if (diff > 20) return { type: 'underconfident', message: 'You\'re underselling yourself! Trust your instincts more.' };
        if (diff > 0) return { type: 'slightly_underconfident', message: 'You did better than you expected!' };
        if (diff < -20) return { type: 'overconfident', message: 'Consider being more cautious in your confidence.' };
        return { type: 'slightly_overconfident', message: 'Slightly optimistic, but close!' };
    }

    function getTimeAssessment(estimated, actual) {
        const ratio = actual / estimated;
        if (ratio >= 0.8 && ratio <= 1.2) return { type: 'accurate', message: 'Good time estimation!' };
        if (ratio > 1.5) return { type: 'underestimate', message: `You tend to underestimate by ${Math.round((ratio - 1) * 100)}%` };
        if (ratio < 0.7) return { type: 'overestimate', message: 'You finished faster than expected!' };
        return { type: 'close', message: 'Pretty close estimate!' };
    }

    function calculatePeakHRChange(pre, mid, post) {
        const values = [pre, mid, post].filter(v => v !== null && v !== undefined);
        if (values.length < 2) return null;
        const max = Math.max(...values);
        const min = Math.min(...values);
        return {
            change: max - min,
            percentChange: Math.round(((max - min) / min) * 100)
        };
    }

    function getEnergyAssessment(start, end) {
        const diff = end - start;
        if (diff >= 1) return { type: 'energized', message: 'This case energized you!' };
        if (diff <= -2) return { type: 'drained', message: 'This case was draining. Consider a break.' };
        return { type: 'stable', message: 'Energy level stayed stable.' };
    }

    function recordCompletion(phase, completed, data) {
        state.completionHistory.push({
            phase,
            completed,
            timestamp: Date.now(),
            caseId: state.currentSession?.caseId,
            dataCollected: completed ? Object.keys(data || {}) : []
        });
        saveToStorage();
    }

    // ==========================================
    // Public API
    // ==========================================
    function getEngagementMetrics() {
        const metrics = state.engagementMetrics;
        return {
            ...metrics,
            rates: {
                pre: metrics.preCompleted / (metrics.preCompleted + metrics.preSkipped) || 0,
                mid: metrics.midCompleted / (metrics.midCompleted + metrics.midSkipped) || 0,
                post: metrics.postCompleted / (metrics.postCompleted + metrics.postSkipped) || 0
            },
            overall: calculateOverallEngagement()
        };
    }

    function calculateOverallEngagement() {
        const m = state.engagementMetrics;
        const totalCompleted = m.preCompleted + m.midCompleted + m.postCompleted;
        const totalAttempts = totalCompleted + m.preSkipped + m.midSkipped + m.postSkipped;
        return totalAttempts > 0 ? (totalCompleted / totalAttempts) : 0;
    }

    function getCurrentSessionData() {
        return compileSessionData();
    }

    function resetSession() {
        state.currentSession = null;
        state.checkInData = { pre: null, mid: null, post: null };
    }

    function shouldShowMidCheckIn(context = {}) {
        // Determine if mid-case check-in should appear based on context
        if (context.trigger === 'differential_submitted') {
            return CONFIG.midCaseThresholds.afterDifferential;
        }
        if (context.trigger === 'day_completed') {
            return CONFIG.midCaseThresholds.betweenDays;
        }
        if (context.timeElapsed && context.timeElapsed >= CONFIG.midCaseThresholds.timeElapsed) {
            return true;
        }
        return false;
    }

    // ==========================================
    // Initialize and Export
    // ==========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return {
        // Check-in methods
        showPreCaseCheckIn,
        showMidCaseCheckIn,
        showPostCaseCheckIn,
        
        // Utility methods
        shouldShowMidCheckIn,
        getCurrentSessionData,
        getEngagementMetrics,
        resetSession,
        
        // Configuration
        getConfig: () => ({ ...CONFIG }),
        
        // Version
        version: CONFIG.version
    };

})();

// Make available globally
window.ReasonDxLSCS = ReasonDxLSCS;
