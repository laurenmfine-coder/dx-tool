/**
 * ============================================================================
 * REASONDX ENGAGEMENT FEATURES MODULE
 * ============================================================================
 * Version: 1.0 | December 2025
 * 
 * Features:
 * 1. Daily Streak Counter with Fire Animation
 * 2. Sound Effects System
 * 3. "Explain My Mistake" AI-Powered Analysis
 * ============================================================================
 */

(function() {
    'use strict';

    // ========== STYLES ==========
    var engagementStyles = document.createElement('style');
    engagementStyles.id = 'reasondx-engagement-styles';
    engagementStyles.textContent = [
        // Streak Display
        '.streak-display{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:linear-gradient(135deg,#fef3c7,#fde68a);border-radius:24px;font-weight:600;color:#92400e;box-shadow:0 2px 8px rgba(251,191,36,0.3)}',
        '.streak-display.inactive{background:linear-gradient(135deg,#f1f5f9,#e2e8f0);color:#64748b;box-shadow:none}',
        '.streak-fire{font-size:24px;animation:fireFlicker 0.5s ease-in-out infinite alternate}',
        '.streak-number{font-size:24px;font-weight:700}',
        '.streak-label{font-size:12px;opacity:0.8}',
        '@keyframes fireFlicker{0%{transform:scale(1) rotate(-5deg)}100%{transform:scale(1.1) rotate(5deg)}}',
        
        // Streak Milestone Modal
        '.streak-milestone-modal{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7)}',
        '.streak-milestone-content{background:linear-gradient(135deg,#fef3c7,#fde68a);border-radius:24px;padding:40px;text-align:center;max-width:360px;animation:streakPop 0.5s cubic-bezier(0.175,0.885,0.32,1.275)}',
        '@keyframes streakPop{0%{transform:scale(0.5);opacity:0}100%{transform:scale(1);opacity:1}}',
        '.streak-milestone-fire{font-size:80px;animation:fireFlicker 0.3s ease-in-out infinite alternate}',
        '.streak-milestone-number{font-size:64px;font-weight:800;color:#92400e;margin:16px 0}',
        '.streak-milestone-text{font-size:18px;color:#78350f;margin-bottom:24px}',
        
        // Explain My Mistake
        '.explain-mistake-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;background:linear-gradient(135deg,#fee2e2,#fecaca);border:2px solid #f87171;border-radius:12px;color:#b91c1c;font-weight:600;cursor:pointer;transition:all 0.2s}',
        '.explain-mistake-btn:hover{background:linear-gradient(135deg,#fecaca,#fca5a5);transform:translateY(-2px);box-shadow:0 4px 12px rgba(248,113,113,0.3)}',
        '.mistake-analysis{margin-top:20px;padding:20px;background:#fef2f2;border:1px solid #fecaca;border-radius:12px}',
        '.mistake-analysis-header{display:flex;align-items:center;gap:10px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #fecaca}',
        '.mistake-section{margin-bottom:16px}',
        '.mistake-section-title{font-weight:600;color:#991b1b;margin-bottom:8px;display:flex;align-items:center;gap:6px}',
        '.mistake-section-content{color:#7f1d1d;font-size:14px;line-height:1.6}',
        '.reasoning-step{display:flex;gap:10px;padding:8px 12px;background:#fff;border-radius:8px;margin-bottom:6px}',
        '.reasoning-step.correct{border-left:3px solid #10b981}',
        '.reasoning-step.incorrect{border-left:3px solid #ef4444}',
        '.reasoning-step.missed{border-left:3px solid #f59e0b;opacity:0.8}',
        
        // Sound Toggle
        '.sound-toggle{display:flex;align-items:center;gap:8px;padding:8px 12px;background:#f1f5f9;border-radius:8px;cursor:pointer;transition:all 0.2s}',
        '.sound-toggle:hover{background:#e2e8f0}',
        '.sound-toggle.muted{opacity:0.5}',
        '.sound-icon{font-size:20px}',
        
        // Achievement Toast
        '.achievement-toast{position:fixed;bottom:24px;right:24px;display:flex;align-items:center;gap:12px;padding:16px 24px;background:#fff;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.15);animation:toastSlide 0.5s cubic-bezier(0.175,0.885,0.32,1.275);z-index:9998}',
        '.dark .achievement-toast{background:#1e293b}',
        '@keyframes toastSlide{0%{transform:translateX(120%);opacity:0}100%{transform:translateX(0);opacity:1}}',
        '.toast-icon{font-size:32px}',
        '.toast-content{flex:1}',
        '.toast-title{font-weight:600;margin-bottom:2px}',
        '.toast-subtitle{font-size:13px;opacity:0.7}'
    ].join('');
    
    if (!document.getElementById('reasondx-engagement-styles')) {
        document.head.appendChild(engagementStyles);
    }

    // ========== 1. DAILY STREAK SYSTEM ==========
    window.StreakSystem = {
        data: null,
        
        init: function() {
            this.load();
            this.checkStreak();
        },
        
        load: function() {
            var stored = localStorage.getItem('rdx_streak_data');
            if (stored) {
                this.data = JSON.parse(stored);
            } else {
                this.data = {
                    currentStreak: 0,
                    longestStreak: 0,
                    lastActivityDate: null,
                    totalDaysActive: 0,
                    milestones: []
                };
            }
        },
        
        save: function() {
            localStorage.setItem('rdx_streak_data', JSON.stringify(this.data));
        },
        
        getTodayString: function() {
            return new Date().toISOString().split('T')[0];
        },
        
        getYesterdayString: function() {
            var yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return yesterday.toISOString().split('T')[0];
        },
        
        checkStreak: function() {
            var today = this.getTodayString();
            var yesterday = this.getYesterdayString();
            
            if (this.data.lastActivityDate === today) {
                // Already logged activity today
                return;
            }
            
            if (this.data.lastActivityDate === yesterday) {
                // Streak continues! Will be incremented on activity
            } else if (this.data.lastActivityDate && this.data.lastActivityDate !== today) {
                // Streak broken
                if (this.data.currentStreak > 0) {
                    this.data.currentStreak = 0;
                    this.save();
                }
            }
        },
        
        recordActivity: function() {
            var today = this.getTodayString();
            
            if (this.data.lastActivityDate === today) {
                // Already recorded today
                return false;
            }
            
            var yesterday = this.getYesterdayString();
            var isNewStreak = false;
            var isContinued = false;
            
            if (this.data.lastActivityDate === yesterday) {
                // Continue streak
                this.data.currentStreak++;
                isContinued = true;
            } else {
                // Start new streak
                this.data.currentStreak = 1;
                isNewStreak = true;
            }
            
            this.data.lastActivityDate = today;
            this.data.totalDaysActive++;
            
            // Check for longest streak
            if (this.data.currentStreak > this.data.longestStreak) {
                this.data.longestStreak = this.data.currentStreak;
            }
            
            this.save();
            
            // Check milestones
            this.checkMilestones();
            
            // Play sound
            if (isContinued && this.data.currentStreak > 1) {
                SoundSystem.play('streak');
            }
            
            return { isNew: isNewStreak, isContinued: isContinued, streak: this.data.currentStreak };
        },
        
        checkMilestones: function() {
            var milestones = [3, 7, 14, 30, 50, 100, 365];
            var streak = this.data.currentStreak;
            
            for (var i = 0; i < milestones.length; i++) {
                var m = milestones[i];
                if (streak === m && this.data.milestones.indexOf(m) === -1) {
                    this.data.milestones.push(m);
                    this.save();
                    this.showMilestoneModal(m);
                    SoundSystem.play('milestone');
                    break;
                }
            }
        },
        
        showMilestoneModal: function(days) {
            var messages = {
                3: "You're building a habit!",
                7: "One week strong! 💪",
                14: "Two weeks of dedication!",
                30: "A whole month! Incredible!",
                50: "50 days! You're unstoppable!",
                100: "100 DAYS! Legend status!",
                365: "ONE YEAR! 🏆 Master diagnostician!"
            };
            
            var modal = document.createElement('div');
            modal.className = 'streak-milestone-modal';
            modal.id = 'streak-milestone-modal';
            modal.onclick = function(e) { if (e.target === modal) modal.remove(); };
            modal.innerHTML = '<div class="streak-milestone-content">' +
                '<div class="streak-milestone-fire">🔥</div>' +
                '<div class="streak-milestone-number">' + days + '</div>' +
                '<div class="streak-milestone-text">' + (messages[days] || 'Amazing streak!') + '</div>' +
                '<button onclick="document.getElementById(\'streak-milestone-modal\').remove()" ' +
                'style="padding:12px 32px;background:#92400e;color:#fff;border:none;border-radius:24px;font-weight:600;cursor:pointer">' +
                'Keep Going!</button></div>';
            document.body.appendChild(modal);
        },
        
        renderStreakDisplay: function() {
            var streak = this.data.currentStreak;
            var isActive = this.data.lastActivityDate === this.getTodayString() || 
                          this.data.lastActivityDate === this.getYesterdayString();
            
            if (streak === 0 && !isActive) {
                return '<div class="streak-display inactive">' +
                    '<span class="streak-fire">🔥</span>' +
                    '<div><span class="streak-number">0</span>' +
                    '<div class="streak-label">Start your streak!</div></div></div>';
            }
            
            return '<div class="streak-display">' +
                '<span class="streak-fire">🔥</span>' +
                '<div><span class="streak-number">' + streak + '</span>' +
                '<div class="streak-label">day' + (streak !== 1 ? 's' : '') + ' streak</div></div></div>';
        }
    };

    // ========== 2. SOUND EFFECTS SYSTEM ==========
    window.SoundSystem = {
        enabled: localStorage.getItem('rdx_sounds_enabled') !== 'false',
        audioContext: null,
        
        init: function() {
            // Create audio context on first user interaction
            var self = this;
            document.addEventListener('click', function initAudio() {
                if (!self.audioContext) {
                    self.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                }
                document.removeEventListener('click', initAudio);
            }, { once: true });
        },
        
        toggle: function() {
            this.enabled = !this.enabled;
            localStorage.setItem('rdx_sounds_enabled', this.enabled);
            if (this.enabled) {
                this.play('click');
            }
            return this.enabled;
        },
        
        play: function(soundType) {
            if (!this.enabled) return;
            
            // Initialize audio context if needed
            if (!this.audioContext) {
                try {
                    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                } catch (e) {
                    return;
                }
            }
            
            var ctx = this.audioContext;
            var oscillator = ctx.createOscillator();
            var gainNode = ctx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            var now = ctx.currentTime;
            
            switch(soundType) {
                case 'correct':
                    // Happy ascending tone
                    oscillator.frequency.setValueAtTime(523.25, now); // C5
                    oscillator.frequency.setValueAtTime(659.25, now + 0.1); // E5
                    oscillator.frequency.setValueAtTime(783.99, now + 0.2); // G5
                    gainNode.gain.setValueAtTime(0.3, now);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
                    oscillator.start(now);
                    oscillator.stop(now + 0.4);
                    break;
                    
                case 'incorrect':
                    // Descending tone
                    oscillator.frequency.setValueAtTime(330, now);
                    oscillator.frequency.setValueAtTime(294, now + 0.15);
                    gainNode.gain.setValueAtTime(0.25, now);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                    oscillator.start(now);
                    oscillator.stop(now + 0.3);
                    break;
                    
                case 'click':
                    // Short click
                    oscillator.frequency.setValueAtTime(800, now);
                    gainNode.gain.setValueAtTime(0.1, now);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
                    oscillator.start(now);
                    oscillator.stop(now + 0.05);
                    break;
                    
                case 'levelup':
                    // Triumphant arpeggio
                    oscillator.frequency.setValueAtTime(523.25, now);
                    oscillator.frequency.setValueAtTime(659.25, now + 0.1);
                    oscillator.frequency.setValueAtTime(783.99, now + 0.2);
                    oscillator.frequency.setValueAtTime(1046.50, now + 0.3);
                    gainNode.gain.setValueAtTime(0.3, now);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
                    oscillator.start(now);
                    oscillator.stop(now + 0.6);
                    break;
                    
                case 'streak':
                    // Warm confirmation
                    oscillator.type = 'sine';
                    oscillator.frequency.setValueAtTime(440, now);
                    oscillator.frequency.setValueAtTime(554.37, now + 0.1);
                    oscillator.frequency.setValueAtTime(659.25, now + 0.2);
                    gainNode.gain.setValueAtTime(0.2, now);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
                    oscillator.start(now);
                    oscillator.stop(now + 0.4);
                    break;
                    
                case 'milestone':
                    // Fanfare
                    oscillator.type = 'square';
                    oscillator.frequency.setValueAtTime(523.25, now);
                    oscillator.frequency.setValueAtTime(523.25, now + 0.15);
                    oscillator.frequency.setValueAtTime(783.99, now + 0.3);
                    oscillator.frequency.setValueAtTime(1046.50, now + 0.45);
                    gainNode.gain.setValueAtTime(0.2, now);
                    gainNode.gain.setValueAtTime(0.25, now + 0.3);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
                    oscillator.start(now);
                    oscillator.stop(now + 0.8);
                    break;
                    
                case 'achievement':
                    // Chime
                    oscillator.type = 'sine';
                    oscillator.frequency.setValueAtTime(880, now);
                    oscillator.frequency.setValueAtTime(1108.73, now + 0.1);
                    oscillator.frequency.setValueAtTime(1318.51, now + 0.2);
                    gainNode.gain.setValueAtTime(0.15, now);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
                    oscillator.start(now);
                    oscillator.stop(now + 0.5);
                    break;
                    
                case 'timer':
                    // Tick
                    oscillator.frequency.setValueAtTime(1000, now);
                    gainNode.gain.setValueAtTime(0.05, now);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.03);
                    oscillator.start(now);
                    oscillator.stop(now + 0.03);
                    break;
            }
        },
        
        renderToggle: function() {
            return '<button onclick="SoundSystem.toggle(); this.querySelector(\'.sound-icon\').textContent = SoundSystem.enabled ? \'🔊\' : \'🔇\'; this.classList.toggle(\'muted\', !SoundSystem.enabled)" class="sound-toggle' + (this.enabled ? '' : ' muted') + '">' +
                '<span class="sound-icon">' + (this.enabled ? '🔊' : '🔇') + '</span>' +
                '<span class="text-sm">Sound</span></button>';
        }
    };

    // ========== 3. EXPLAIN MY MISTAKE SYSTEM ==========
    window.ExplainMistake = {
        analyzeError: function(caseData, userResponse) {
            // This generates a detailed analysis of what went wrong
            var analysis = {
                whatHappened: '',
                whyItMatters: '',
                correctApproach: '',
                keyLearning: '',
                biasDetected: null,
                reasoningSteps: []
            };
            
            // Analyze based on case data and user response
            if (!caseData || !userResponse) {
                analysis.whatHappened = 'Unable to analyze - missing case data.';
                return analysis;
            }
            
            var correctDx = caseData.finalDiagnosis || caseData.correctAnswer;
            var userDx = userResponse.selectedDiagnosis || userResponse.answer;
            var userConfidence = userResponse.confidence || 3;
            
            // What happened
            analysis.whatHappened = 'You selected "' + userDx + '" but the correct diagnosis was "' + correctDx + '".';
            
            if (userConfidence >= 4) {
                analysis.whatHappened += ' You were highly confident in your answer, which suggests a reasoning error rather than uncertainty.';
            }
            
            // Detect potential biases
            if (userResponse.timeSpent && userResponse.timeSpent < 60) {
                analysis.biasDetected = 'premature_closure';
                analysis.whatHappened += ' Your response time was very quick, which may indicate premature closure.';
            }
            
            if (userResponse.changedAnswer === false && userResponse.initialAnswer === userDx) {
                analysis.biasDetected = analysis.biasDetected || 'anchoring';
            }
            
            // Why it matters (clinical significance)
            analysis.whyItMatters = this.getClinicalSignificance(correctDx, userDx);
            
            // Correct approach
            analysis.correctApproach = this.getCorrectApproach(caseData);
            
            // Key learning point
            analysis.keyLearning = this.getKeyLearning(correctDx, userDx, analysis.biasDetected);
            
            // Reasoning steps comparison
            analysis.reasoningSteps = this.compareReasoningSteps(caseData, userResponse);
            
            return analysis;
        },
        
        getClinicalSignificance: function(correct, incorrect) {
            // Generic significance - in production this would be case-specific
            var significanceMap = {
                'Pulmonary Embolism': 'PE can be rapidly fatal if missed. Early anticoagulation is critical.',
                'Myocardial Infarction': 'MI requires urgent reperfusion. Door-to-balloon time directly impacts mortality.',
                'Meningitis': 'Bacterial meningitis mortality doubles with each hour of delayed antibiotics.',
                'Aortic Dissection': 'Type A dissection requires emergent surgery. Misdiagnosis as MI could be fatal.',
                'Ectopic Pregnancy': 'Ruptured ectopic can cause fatal hemorrhage within hours.',
                'Appendicitis': 'Perforation risk increases significantly after 24-48 hours.',
                'Subarachnoid Hemorrhage': 'Rebleeding risk is highest in first 24 hours. Mortality increases dramatically.',
                'Stroke': 'Thrombolytics only effective within 4.5 hours. Time is brain.'
            };
            
            return significanceMap[correct] || 
                'Accurate diagnosis guides appropriate treatment. Misdiagnosis can lead to delayed care, unnecessary testing, or harmful treatments.';
        },
        
        getCorrectApproach: function(caseData) {
            if (caseData.teachingPoints && caseData.teachingPoints.length > 0) {
                return caseData.teachingPoints[0];
            }
            
            return 'Review the key history findings, physical exam features, and test results that point to the correct diagnosis. Consider what questions or tests would have helped differentiate between your answer and the correct one.';
        },
        
        getKeyLearning: function(correct, incorrect, bias) {
            var biasLearnings = {
                'anchoring': 'Be willing to revise your initial impression as new information emerges.',
                'premature_closure': 'Take time to consider alternatives before committing to a diagnosis.',
                'availability': 'Don\'t let recent cases bias your assessment of this patient.',
                'confirmation': 'Actively seek information that could disprove your leading diagnosis.'
            };
            
            if (bias && biasLearnings[bias]) {
                return biasLearnings[bias];
            }
            
            return 'Focus on the distinguishing features between ' + correct + ' and ' + incorrect + '. What key findings would help you differentiate these in the future?';
        },
        
        compareReasoningSteps: function(caseData, userResponse) {
            var steps = [];
            
            // History gathering
            if (userResponse.historyAsked) {
                var criticalHistory = caseData.criticalHistory || [];
                var asked = userResponse.historyAsked || [];
                
                criticalHistory.forEach(function(item) {
                    var wasAsked = asked.indexOf(item) !== -1;
                    steps.push({
                        step: 'History: ' + item,
                        status: wasAsked ? 'correct' : 'missed',
                        note: wasAsked ? 'Good - you asked this' : 'Missed - this was critical'
                    });
                });
            }
            
            // Add generic steps if no specific data
            if (steps.length === 0) {
                steps = [
                    { step: 'Initial differential generation', status: 'correct', note: 'You generated a differential' },
                    { step: 'Key history questions', status: 'missed', note: 'Some critical questions may have been missed' },
                    { step: 'Physical exam focus', status: 'correct', note: 'Exam was performed' },
                    { step: 'Test interpretation', status: 'incorrect', note: 'Test results may have been misinterpreted' }
                ];
            }
            
            return steps;
        },
        
        renderAnalysis: function(analysis) {
            var html = '<div class="mistake-analysis">' +
                '<div class="mistake-analysis-header">' +
                '<span style="font-size:24px">🔍</span>' +
                '<span style="font-size:18px;font-weight:600;color:#991b1b">Understanding Your Mistake</span></div>';
            
            // What happened
            html += '<div class="mistake-section">' +
                '<div class="mistake-section-title"><span>📋</span> What Happened</div>' +
                '<div class="mistake-section-content">' + analysis.whatHappened + '</div></div>';
            
            // Why it matters
            html += '<div class="mistake-section">' +
                '<div class="mistake-section-title"><span>⚠️</span> Clinical Significance</div>' +
                '<div class="mistake-section-content">' + analysis.whyItMatters + '</div></div>';
            
            // Bias detected
            if (analysis.biasDetected) {
                var biasNames = {
                    'anchoring': 'Anchoring Bias',
                    'premature_closure': 'Premature Closure',
                    'availability': 'Availability Bias',
                    'confirmation': 'Confirmation Bias'
                };
                html += '<div class="mistake-section" style="background:#fef3c7;padding:12px;border-radius:8px;border-left:4px solid #f59e0b">' +
                    '<div class="mistake-section-title" style="color:#92400e"><span>🧠</span> Cognitive Bias Detected: ' + (biasNames[analysis.biasDetected] || analysis.biasDetected) + '</div>' +
                    '<div class="mistake-section-content" style="color:#78350f">' + analysis.keyLearning + '</div></div>';
            }
            
            // Reasoning steps
            if (analysis.reasoningSteps && analysis.reasoningSteps.length > 0) {
                html += '<div class="mistake-section">' +
                    '<div class="mistake-section-title"><span>👣</span> Your Reasoning Path</div>';
                
                analysis.reasoningSteps.forEach(function(step) {
                    html += '<div class="reasoning-step ' + step.status + '">' +
                        '<span>' + (step.status === 'correct' ? '✓' : step.status === 'incorrect' ? '✗' : '○') + '</span>' +
                        '<div><div style="font-weight:500">' + step.step + '</div>' +
                        '<div style="font-size:12px;opacity:0.8">' + step.note + '</div></div></div>';
                });
                
                html += '</div>';
            }
            
            // Key learning
            html += '<div class="mistake-section" style="background:#dcfce7;padding:12px;border-radius:8px;border-left:4px solid #10b981">' +
                '<div class="mistake-section-title" style="color:#166534"><span>💡</span> Key Takeaway</div>' +
                '<div class="mistake-section-content" style="color:#14532d">' + analysis.correctApproach + '</div></div>';
            
            html += '</div>';
            
            return html;
        },
        
        renderButton: function() {
            return '<button class="explain-mistake-btn" onclick="ExplainMistake.showForCurrentCase()">' +
                '<span>🔍</span> Explain My Mistake</button>';
        },
        
        showForCurrentCase: function() {
            // Get current case data from global state
            var caseData = window.currentCaseData || {};
            var userResponse = window.currentUserResponse || {};
            
            var analysis = this.analyzeError(caseData, userResponse);
            var container = document.getElementById('mistake-analysis-container');
            
            if (container) {
                container.innerHTML = this.renderAnalysis(analysis);
                container.style.display = 'block';
                SoundSystem.play('click');
            } else {
                // Create modal
                var modal = document.createElement('div');
                modal.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);padding:20px';
                modal.onclick = function(e) { if (e.target === modal) modal.remove(); };
                modal.innerHTML = '<div style="max-width:600px;max-height:80vh;overflow-y:auto;background:#fff;border-radius:16px;padding:24px;position:relative">' +
                    '<button onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:12px;right:12px;background:none;border:none;font-size:24px;cursor:pointer;opacity:0.5">×</button>' +
                    this.renderAnalysis(analysis) + '</div>';
                document.body.appendChild(modal);
            }
        }
    };

    // ========== ACHIEVEMENT TOAST SYSTEM ==========
    window.showAchievementToast = function(icon, title, subtitle) {
        var existing = document.querySelector('.achievement-toast');
        if (existing) existing.remove();
        
        var toast = document.createElement('div');
        toast.className = 'achievement-toast';
        toast.innerHTML = '<span class="toast-icon">' + icon + '</span>' +
            '<div class="toast-content"><div class="toast-title">' + title + '</div>' +
            '<div class="toast-subtitle">' + subtitle + '</div></div>';
        document.body.appendChild(toast);
        
        SoundSystem.play('achievement');
        
        setTimeout(function() {
            toast.style.animation = 'toastSlide 0.3s reverse forwards';
            setTimeout(function() { toast.remove(); }, 300);
        }, 4000);
    };

    // ========== INTEGRATION WITH MAIN APP ==========
    
    // Hook into case completion to record streak
    var originalCompleteCase = window.completeCase;
    if (typeof originalCompleteCase === 'function') {
        window.completeCase = function() {
            var result = StreakSystem.recordActivity();
            if (result && result.isContinued && result.streak > 1) {
                showAchievementToast('🔥', result.streak + ' Day Streak!', 'Keep up the great work!');
            }
            return originalCompleteCase.apply(this, arguments);
        };
    }
    
    // Initialize systems
    StreakSystem.init();
    SoundSystem.init();
    
    // Expose for menu rendering
    window.renderStreakDisplay = function() {
        return StreakSystem.renderStreakDisplay();
    };
    
    window.renderSoundToggle = function() {
        return SoundSystem.renderToggle();
    };

    console.log('[ReasonDx Engagement Features] Loaded - Streaks, Sounds, Explain My Mistake');
})();
