/**
 * ============================================================================
 * REASONDX ADVANCED ANALYTICS & FEATURES MODULE
 * ============================================================================
 * Version: 1.0 | December 2025
 * 
 * Features Included:
 * 1. Near Miss Tracking
 * 2. Spaced Repetition for Reasoning Errors
 * 3. Peer Comparison Dashboard
 * 4. Faculty Insight Reports
 * 5. Team Competition Mode
 * 6. Expert Replay Mode
 * 7. A/B Testing Framework
 * 8. Predictive Risk Flagging
 * 9. Mobile 5-Minute Mode
 * 10. Longitudinal Trajectory Dashboard
 * 11. Post-Clinic Reflection
 * 12. USMLE Topic Linking
 * ============================================================================
 */

(function() {
    'use strict';

    // ========== STYLES ==========
    var advStyles = document.createElement('style');
    advStyles.id = 'reasondx-advanced-styles';
    advStyles.textContent = [
        // Near Miss & Analytics Cards
        '.analytics-card{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:16px}',
        '.dark .analytics-card{background:#1e293b;border-color:#374151}',
        '.stat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px}',
        '.stat-box{text-align:center;padding:16px;background:#f8fafc;border-radius:8px}',
        '.dark .stat-box{background:#0f172a}',
        '.stat-value{font-size:28px;font-weight:700;color:#1e293b}',
        '.dark .stat-value{color:#f1f5f9}',
        '.stat-label{font-size:12px;color:#64748b;margin-top:4px}',
        
        // Near Miss Indicators
        '.near-miss-badge{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:12px;font-size:12px;font-weight:600}',
        '.near-miss-badge.warning{background:#fef3c7;color:#92400e}',
        '.near-miss-badge.success{background:#dcfce7;color:#166534}',
        '.near-miss-badge.danger{background:#fee2e2;color:#991b1b}',
        
        // Peer Comparison
        '.percentile-bar{height:8px;background:#e2e8f0;border-radius:4px;overflow:hidden;margin:8px 0}',
        '.percentile-fill{height:100%;border-radius:4px;transition:width 0.5s}',
        '.comparison-row{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #e2e8f0}',
        '.dark .comparison-row{border-color:#374151}',
        
        // Team Competition
        '.team-card{padding:16px;border-radius:12px;border:2px solid #e2e8f0;margin-bottom:12px;transition:all 0.2s}',
        '.team-card.active{border-color:#3b82f6;background:#eff6ff}',
        '.team-card.winner{border-color:#10b981;background:#ecfdf5}',
        '.leaderboard-row{display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:8px;margin-bottom:8px}',
        '.leaderboard-row.gold{background:linear-gradient(135deg,#fef3c7,#fde68a)}',
        '.leaderboard-row.silver{background:linear-gradient(135deg,#f1f5f9,#e2e8f0)}',
        '.leaderboard-row.bronze{background:linear-gradient(135deg,#fed7aa,#fdba74)}',
        '.rank-badge{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700}',
        
        // Expert Replay
        '.pathway-comparison{display:grid;grid-template-columns:1fr 1fr;gap:20px}',
        '.pathway-column{padding:16px;border-radius:12px}',
        '.pathway-column.student{background:#eff6ff;border:1px solid #bfdbfe}',
        '.pathway-column.expert{background:#ecfdf5;border:1px solid #a7f3d0}',
        '.pathway-step{padding:10px 14px;background:#fff;border-radius:8px;margin-bottom:8px;font-size:14px}',
        '.pathway-step.match{border-left:3px solid #10b981}',
        '.pathway-step.diverge{border-left:3px solid #f59e0b}',
        '.pathway-step.missing{border-left:3px solid #ef4444;opacity:0.7}',
        
        // Risk Flags
        '.risk-indicator{display:flex;align-items:center;gap:8px;padding:12px 16px;border-radius:8px;margin-bottom:8px}',
        '.risk-indicator.high{background:#fee2e2;border-left:4px solid #dc2626}',
        '.risk-indicator.medium{background:#fef3c7;border-left:4px solid #f59e0b}',
        '.risk-indicator.low{background:#dcfce7;border-left:4px solid #10b981}',
        
        // Quick Case Mode
        '.quick-case-card{max-width:400px;margin:0 auto;padding:24px;background:#fff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.1)}',
        '.dark .quick-case-card{background:#1e293b}',
        '.quick-timer{font-size:48px;font-weight:700;text-align:center;font-family:monospace}',
        '.quick-option{display:block;width:100%;padding:14px 18px;margin-bottom:10px;border:2px solid #e2e8f0;border-radius:10px;text-align:left;background:#fff;cursor:pointer;transition:all 0.2s}',
        '.quick-option:hover{border-color:#3b82f6;background:#eff6ff}',
        '.quick-option.selected{border-color:#3b82f6;background:#dbeafe}',
        
        // Faculty Reports
        '.report-section{margin-bottom:24px;padding:20px;background:#f8fafc;border-radius:12px}',
        '.dark .report-section{background:#0f172a}',
        '.insight-card{display:flex;gap:12px;padding:14px;background:#fff;border-radius:8px;margin-bottom:10px;border-left:4px solid #3b82f6}',
        '.dark .insight-card{background:#1e293b}',
        
        // A/B Testing
        '.ab-badge{display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600}',
        '.ab-badge.group-a{background:#dbeafe;color:#1d4ed8}',
        '.ab-badge.group-b{background:#fce7f3;color:#be185d}',
        '.ab-badge.control{background:#e2e8f0;color:#475569}',
        
        // Longitudinal
        '.trajectory-chart{height:200px;background:#f8fafc;border-radius:8px;position:relative;padding:20px}',
        '.trajectory-point{position:absolute;width:12px;height:12px;border-radius:50%;background:#3b82f6;transform:translate(-50%,-50%)}',
        '.trajectory-line{position:absolute;height:2px;background:#3b82f6;transform-origin:left center}',
        
        // Reflection
        '.reflection-prompt{padding:20px;background:linear-gradient(135deg,#eff6ff,#dbeafe);border-radius:12px;margin-bottom:16px}',
        '.reflection-textarea{width:100%;min-height:120px;padding:14px;border:1px solid #e2e8f0;border-radius:8px;font-size:15px;resize:vertical}',
        
        // Responsive
        '@media(max-width:640px){.pathway-comparison{grid-template-columns:1fr}.stat-grid{grid-template-columns:repeat(2,1fr)}}'
    ].join('');
    
    if (!document.getElementById('reasondx-advanced-styles')) {
        document.head.appendChild(advStyles);
    }

    // ========== DATA STORAGE ==========
    window.ReasonDxAdvanced = {
        // Near Miss Data
        nearMisses: JSON.parse(localStorage.getItem('rdx_near_misses') || '[]'),
        
        // Spaced Repetition Queue
        spacedQueue: JSON.parse(localStorage.getItem('rdx_spaced_queue') || '[]'),
        
        // Peer Data (simulated for demo, would be from server)
        peerAggregates: {
            avgAccuracy: 72,
            avgTimePerCase: 480,
            avgTestsOrdered: 4.2,
            avgConfidence: 3.4
        },
        
        // A/B Test Assignment
        abGroup: localStorage.getItem('rdx_ab_group') || (Math.random() < 0.5 ? 'A' : 'B'),
        
        // Expert Pathways (would be populated per case)
        expertPathways: {},
        
        // Risk Thresholds
        riskRules: [
            { id: 'overconfident', condition: function(d) { return d.avgConfidence > 4 && d.accuracy < 60; }, level: 'high', message: 'High confidence with low accuracy - overconfidence pattern' },
            { id: 'underconfident', condition: function(d) { return d.avgConfidence < 2 && d.accuracy > 80; }, level: 'medium', message: 'Low confidence despite high accuracy - may benefit from confidence building' },
            { id: 'rushing', condition: function(d) { return d.avgTime < 120 && d.accuracy < 50; }, level: 'high', message: 'Very fast responses with low accuracy - may be rushing' },
            { id: 'overtesting', condition: function(d) { return d.avgTestsOrdered > 8; }, level: 'medium', message: 'Ordering excessive tests - focus on targeted workup' },
            { id: 'anchoring', condition: function(d) { return d.anchoringCount > 3; }, level: 'high', message: 'Frequent anchoring bias detected' }
        ],
        
        // Longitudinal Data
        trajectoryData: JSON.parse(localStorage.getItem('rdx_trajectory') || '[]'),
        
        // Reflections
        reflections: JSON.parse(localStorage.getItem('rdx_reflections') || '[]'),
        
        // Quick Cases Completed
        quickCasesCompleted: parseInt(localStorage.getItem('rdx_quick_cases') || '0')
    };

    // Save A/B group
    localStorage.setItem('rdx_ab_group', window.ReasonDxAdvanced.abGroup);

    // ========== 1. NEAR MISS TRACKING ==========
    window.NearMissTracker = {
        analyze: function(caseResult) {
            var nearMisses = [];
            
            // Right answer but missed key history
            if (caseResult.correct && caseResult.missedCriticalHistory && caseResult.missedCriticalHistory.length > 0) {
                nearMisses.push({
                    type: 'missed-history',
                    message: 'Correct diagnosis but missed critical history: ' + caseResult.missedCriticalHistory.join(', '),
                    severity: 'warning'
                });
            }
            
            // Right answer but excessive tests
            if (caseResult.correct && caseResult.testsOrdered > 6) {
                nearMisses.push({
                    type: 'excessive-tests',
                    message: 'Correct but ordered ' + caseResult.testsOrdered + ' tests (target: ≤4)',
                    severity: 'warning'
                });
            }
            
            // Right answer but low confidence (lucky guess?)
            if (caseResult.correct && caseResult.confidence <= 2) {
                nearMisses.push({
                    type: 'lucky-guess',
                    message: 'Correct with low confidence - was this a guess?',
                    severity: 'info'
                });
            }
            
            // Wrong answer but right pathway (close miss)
            if (!caseResult.correct && caseResult.correctInTop3) {
                nearMisses.push({
                    type: 'close-miss',
                    message: 'Correct diagnosis was in your top 3',
                    severity: 'info'
                });
            }
            
            // High confidence wrong answer
            if (!caseResult.correct && caseResult.confidence >= 4) {
                nearMisses.push({
                    type: 'confident-wrong',
                    message: 'High confidence but incorrect - review reasoning',
                    severity: 'danger'
                });
            }
            
            return nearMisses;
        },
        
        recordNearMiss: function(caseId, nearMiss) {
            var data = window.ReasonDxAdvanced.nearMisses;
            data.push({
                caseId: caseId,
                type: nearMiss.type,
                message: nearMiss.message,
                severity: nearMiss.severity,
                timestamp: Date.now()
            });
            localStorage.setItem('rdx_near_misses', JSON.stringify(data));
        }
    };

    // ========== 2. SPACED REPETITION FOR BIASES ==========
    window.SpacedRepetition = {
        intervals: [1, 3, 7, 14, 30], // days
        
        queueCase: function(caseId, biasType, performanceLevel) {
            var queue = window.ReasonDxAdvanced.spacedQueue;
            var intervalIndex = performanceLevel < 50 ? 0 : performanceLevel < 75 ? 1 : 2;
            var daysUntilReview = this.intervals[intervalIndex];
            
            queue.push({
                caseId: caseId,
                biasType: biasType,
                dueDate: Date.now() + (daysUntilReview * 24 * 60 * 60 * 1000),
                intervalIndex: intervalIndex
            });
            
            localStorage.setItem('rdx_spaced_queue', JSON.stringify(queue));
        },
        
        getDueCases: function() {
            var queue = window.ReasonDxAdvanced.spacedQueue;
            var now = Date.now();
            return queue.filter(function(item) { return item.dueDate <= now; });
        },
        
        getUpcoming: function(days) {
            var queue = window.ReasonDxAdvanced.spacedQueue;
            var cutoff = Date.now() + (days * 24 * 60 * 60 * 1000);
            return queue.filter(function(item) { return item.dueDate <= cutoff; });
        }
    };

    // ========== 3. PEER COMPARISON DASHBOARD ==========
    window.showPeerComparison = function() {
        var playerStats = typeof playerData !== 'undefined' ? playerData : { accuracy: 68, avgTime: 420, testsOrdered: 5.1, avgConfidence: 3.2 };
        var peers = window.ReasonDxAdvanced.peerAggregates;
        
        function getPercentile(value, peerAvg, higherIsBetter) {
            var diff = higherIsBetter ? (value - peerAvg) : (peerAvg - value);
            var percentile = 50 + (diff * 2);
            return Math.max(5, Math.min(95, Math.round(percentile)));
        }
        
        function getColor(percentile) {
            if (percentile >= 75) return '#10b981';
            if (percentile >= 50) return '#3b82f6';
            if (percentile >= 25) return '#f59e0b';
            return '#ef4444';
        }
        
        var accuracyPercentile = getPercentile(playerStats.accuracy || 68, peers.avgAccuracy, true);
        var timePercentile = getPercentile(playerStats.avgTime || 420, peers.avgTimePerCase, false);
        var testsPercentile = getPercentile(playerStats.testsOrdered || 5.1, peers.avgTestsOrdered, false);
        var confPercentile = getPercentile(playerStats.avgConfidence || 3.2, peers.avgConfidence, true);
        
        var html = '<div class="max-w-4xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">👥 Peer Comparison</h1></div>' +
            
            '<div class="analytics-card">' +
            '<h3 class="font-bold mb-4">How You Compare to Your Peers</h3>' +
            
            '<div class="comparison-row">' +
            '<div><div class="font-medium">Diagnostic Accuracy</div>' +
            '<div class="text-sm text-zinc-500">Your: ' + (playerStats.accuracy || 68) + '% | Class avg: ' + peers.avgAccuracy + '%</div></div>' +
            '<div class="text-right"><div class="font-bold" style="color:' + getColor(accuracyPercentile) + '">' + accuracyPercentile + 'th percentile</div>' +
            '<div class="percentile-bar" style="width:150px"><div class="percentile-fill" style="width:' + accuracyPercentile + '%;background:' + getColor(accuracyPercentile) + '"></div></div></div></div>' +
            
            '<div class="comparison-row">' +
            '<div><div class="font-medium">Time Efficiency</div>' +
            '<div class="text-sm text-zinc-500">Your avg: ' + Math.round((playerStats.avgTime || 420) / 60) + ' min | Class avg: ' + Math.round(peers.avgTimePerCase / 60) + ' min</div></div>' +
            '<div class="text-right"><div class="font-bold" style="color:' + getColor(timePercentile) + '">' + timePercentile + 'th percentile</div>' +
            '<div class="percentile-bar" style="width:150px"><div class="percentile-fill" style="width:' + timePercentile + '%;background:' + getColor(timePercentile) + '"></div></div></div></div>' +
            
            '<div class="comparison-row">' +
            '<div><div class="font-medium">Test Ordering Efficiency</div>' +
            '<div class="text-sm text-zinc-500">Your avg: ' + (playerStats.testsOrdered || 5.1).toFixed(1) + ' tests | Class avg: ' + peers.avgTestsOrdered + ' tests</div></div>' +
            '<div class="text-right"><div class="font-bold" style="color:' + getColor(testsPercentile) + '">' + testsPercentile + 'th percentile</div>' +
            '<div class="percentile-bar" style="width:150px"><div class="percentile-fill" style="width:' + testsPercentile + '%;background:' + getColor(testsPercentile) + '"></div></div></div></div>' +
            
            '<div class="comparison-row" style="border:none">' +
            '<div><div class="font-medium">Confidence Calibration</div>' +
            '<div class="text-sm text-zinc-500">Your avg: ' + (playerStats.avgConfidence || 3.2).toFixed(1) + '/5 | Class avg: ' + peers.avgConfidence + '/5</div></div>' +
            '<div class="text-right"><div class="font-bold" style="color:' + getColor(confPercentile) + '">' + confPercentile + 'th percentile</div>' +
            '<div class="percentile-bar" style="width:150px"><div class="percentile-fill" style="width:' + confPercentile + '%;background:' + getColor(confPercentile) + '"></div></div></div></div>' +
            '</div>' +
            
            '<div class="analytics-card">' +
            '<h3 class="font-bold mb-3">💡 Insights</h3>' +
            (accuracyPercentile < 50 ? '<div class="insight-card" style="border-color:#f59e0b"><span>📊</span><span>Your accuracy is below class average. Consider spending more time on history gathering.</span></div>' : '') +
            (testsPercentile < 40 ? '<div class="insight-card" style="border-color:#ef4444"><span>🔬</span><span>You order more tests than most peers. Focus on hypothesis-driven workup.</span></div>' : '') +
            (accuracyPercentile >= 75 ? '<div class="insight-card" style="border-color:#10b981"><span>🌟</span><span>Excellent! Your diagnostic accuracy is in the top quartile.</span></div>' : '') +
            '</div></div>';
        
        document.getElementById('app').innerHTML = html;
    };

    // ========== 4. FACULTY INSIGHT REPORTS ==========
    window.showFacultyReports = function() {
        // Simulated class data
        var classData = {
            totalStudents: 48,
            casesCompleted: 156,
            avgAccuracy: 71,
            commonErrors: [
                { diagnosis: 'Pulmonary Embolism', missedBy: 34, confusedWith: 'Pneumonia' },
                { diagnosis: 'Aortic Dissection', missedBy: 28, confusedWith: 'MI' },
                { diagnosis: 'Meningitis', missedBy: 22, confusedWith: 'Migraine' }
            ],
            biasPatterns: [
                { bias: 'Anchoring', frequency: 45 },
                { bias: 'Premature Closure', frequency: 38 },
                { bias: 'Availability', frequency: 29 }
            ],
            topPerformers: ['Student A', 'Student B', 'Student C'],
            needingSupport: ['Student X', 'Student Y']
        };
        
        var html = '<div class="max-w-4xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">📋 Faculty Insight Report</h1>' +
            '<button onclick="exportFacultyReport()" class="btn-secondary text-sm">📥 Export PDF</button></div>' +
            
            // Overview Stats
            '<div class="stat-grid mb-6">' +
            '<div class="stat-box"><div class="stat-value">' + classData.totalStudents + '</div><div class="stat-label">Active Students</div></div>' +
            '<div class="stat-box"><div class="stat-value">' + classData.casesCompleted + '</div><div class="stat-label">Cases Completed</div></div>' +
            '<div class="stat-box"><div class="stat-value">' + classData.avgAccuracy + '%</div><div class="stat-label">Class Accuracy</div></div>' +
            '<div class="stat-box"><div class="stat-value">' + classData.needingSupport.length + '</div><div class="stat-label">Need Support</div></div></div>' +
            
            // Common Diagnostic Errors
            '<div class="report-section">' +
            '<h3 class="font-bold mb-3">🎯 Most Commonly Missed Diagnoses</h3>' +
            '<p class="text-sm text-zinc-500 mb-4">Consider emphasizing these in upcoming sessions</p>';
        
        classData.commonErrors.forEach(function(err) {
            html += '<div class="insight-card">' +
                '<div style="flex:1"><div class="font-medium">' + err.diagnosis + '</div>' +
                '<div class="text-sm text-zinc-500">Often confused with: ' + err.confusedWith + '</div></div>' +
                '<div class="text-right"><div class="font-bold text-red-600">' + err.missedBy + '%</div><div class="text-xs text-zinc-500">missed</div></div></div>';
        });
        
        html += '</div>' +
            
            // Cognitive Bias Patterns
            '<div class="report-section">' +
            '<h3 class="font-bold mb-3">🧠 Cognitive Bias Patterns</h3>' +
            '<p class="text-sm text-zinc-500 mb-4">Most common reasoning errors detected</p>';
        
        classData.biasPatterns.forEach(function(bias) {
            var width = Math.round((bias.frequency / 50) * 100);
            html += '<div class="mb-3"><div class="flex justify-between text-sm mb-1">' +
                '<span>' + bias.bias + '</span><span class="font-medium">' + bias.frequency + '%</span></div>' +
                '<div class="percentile-bar"><div class="percentile-fill" style="width:' + width + '%;background:#f59e0b"></div></div></div>';
        });
        
        html += '</div>' +
            
            // Suggested Teaching Points
            '<div class="report-section">' +
            '<h3 class="font-bold mb-3">💡 Suggested Teaching Points</h3>' +
            '<div class="insight-card" style="border-color:#3b82f6"><span>1.</span><span>PE vs Pneumonia differentiation - emphasize Wells criteria and D-dimer interpretation</span></div>' +
            '<div class="insight-card" style="border-color:#3b82f6"><span>2.</span><span>Aortic dissection red flags - sudden onset, tearing pain, blood pressure differential</span></div>' +
            '<div class="insight-card" style="border-color:#3b82f6"><span>3.</span><span>Anchoring bias workshop - practice with misleading initial presentations</span></div>' +
            '</div></div>';
        
        document.getElementById('app').innerHTML = html;
    };

    window.exportFacultyReport = function() {
        alert('PDF export would generate here. In production, this creates a downloadable report.');
    };

    // ========== 5. TEAM COMPETITION MODE ==========
    window.TeamCompetition = {
        teams: [],
        currentCase: null,
        
        create: function(teamNames) {
            this.teams = teamNames.map(function(name, i) {
                return { id: i, name: name, score: 0, accuracy: 0, avgTime: 0, casesCompleted: 0 };
            });
        },
        
        updateScore: function(teamId, correct, timeTaken) {
            var team = this.teams.find(function(t) { return t.id === teamId; });
            if (team) {
                team.casesCompleted++;
                if (correct) team.score += 100;
                team.score += Math.max(0, 50 - Math.floor(timeTaken / 10)); // Time bonus
                team.avgTime = ((team.avgTime * (team.casesCompleted - 1)) + timeTaken) / team.casesCompleted;
            }
        }
    };

    window.showTeamCompetition = function() {
        var html = '<div class="max-w-4xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">🏆 Team Competition</h1></div>' +
            
            '<div class="analytics-card text-center mb-6">' +
            '<h3 class="font-bold mb-4">Set Up Competition</h3>' +
            '<div class="mb-4">' +
            '<label class="block text-sm font-medium mb-2">Number of Teams</label>' +
            '<select id="team-count" class="p-3 border rounded-lg">' +
            '<option value="2">2 Teams</option>' +
            '<option value="3">3 Teams</option>' +
            '<option value="4" selected>4 Teams</option>' +
            '<option value="5">5 Teams</option>' +
            '<option value="6">6 Teams</option></select></div>' +
            '<button onclick="startTeamCompetition()" class="btn-primary">🚀 Start Competition</button></div>' +
            
            // Demo Leaderboard
            '<div class="analytics-card">' +
            '<h3 class="font-bold mb-4">📊 Sample Leaderboard</h3>' +
            '<div class="leaderboard-row gold"><div class="rank-badge" style="background:#fbbf24;color:#78350f">1</div>' +
            '<div style="flex:1"><div class="font-bold">Team Alpha</div><div class="text-sm">3 cases | 92% accuracy</div></div>' +
            '<div class="text-2xl font-bold">340 pts</div></div>' +
            '<div class="leaderboard-row silver"><div class="rank-badge" style="background:#94a3b8;color:#1e293b">2</div>' +
            '<div style="flex:1"><div class="font-bold">Team Beta</div><div class="text-sm">3 cases | 85% accuracy</div></div>' +
            '<div class="text-2xl font-bold">295 pts</div></div>' +
            '<div class="leaderboard-row bronze"><div class="rank-badge" style="background:#fb923c;color:#7c2d12">3</div>' +
            '<div style="flex:1"><div class="font-bold">Team Gamma</div><div class="text-sm">2 cases | 78% accuracy</div></div>' +
            '<div class="text-2xl font-bold">210 pts</div></div>' +
            '</div></div>';
        
        document.getElementById('app').innerHTML = html;
    };

    window.startTeamCompetition = function() {
        var count = parseInt(document.getElementById('team-count').value);
        var teamNames = [];
        var names = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta'];
        for (var i = 0; i < count; i++) {
            teamNames.push('Team ' + names[i]);
        }
        window.TeamCompetition.create(teamNames);
        alert('Competition started with ' + count + ' teams! Select a case to begin.');
    };

    // ========== 6. EXPERT REPLAY MODE ==========
    window.showExpertReplay = function() {
        // Demo expert vs student pathway
        var studentPath = [
            { step: 'Chief Complaint: Chest Pain', match: true },
            { step: 'Asked about onset', match: true },
            { step: 'Asked about radiation', match: true },
            { step: 'Skipped risk factors', match: false, missing: true },
            { step: 'Ordered CBC', match: false, diverge: true },
            { step: 'Ordered Troponin', match: true },
            { step: 'Initial Dx: STEMI', match: true }
        ];
        
        var expertPath = [
            { step: 'Chief Complaint: Chest Pain' },
            { step: 'Asked about onset' },
            { step: 'Asked about radiation' },
            { step: 'Asked about cardiac risk factors' },
            { step: 'Ordered ECG first' },
            { step: 'Ordered Troponin' },
            { step: 'Initial Dx: STEMI' }
        ];
        
        var html = '<div class="max-w-5xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">🔄 Expert Replay</h1></div>' +
            
            '<div class="analytics-card mb-4">' +
            '<div class="flex items-center justify-between">' +
            '<div><h3 class="font-bold">Case: Chest Pain - 54M</h3>' +
            '<p class="text-sm text-zinc-500">Compare your reasoning pathway to the expert</p></div>' +
            '<div class="text-right"><span class="near-miss-badge success">5/7 steps aligned</span></div></div></div>' +
            
            '<div class="pathway-comparison">' +
            '<div class="pathway-column student">' +
            '<h4 class="font-bold mb-3 text-blue-800">👤 Your Pathway</h4>';
        
        studentPath.forEach(function(s) {
            var cls = s.match ? 'match' : (s.missing ? 'missing' : 'diverge');
            html += '<div class="pathway-step ' + cls + '">' + s.step + 
                (s.missing ? ' <span class="text-red-500 text-xs">(skipped)</span>' : '') +
                (s.diverge ? ' <span class="text-amber-500 text-xs">(different)</span>' : '') + '</div>';
        });
        
        html += '</div><div class="pathway-column expert">' +
            '<h4 class="font-bold mb-3 text-green-800">👨‍⚕️ Expert Pathway</h4>';
        
        expertPath.forEach(function(s) {
            html += '<div class="pathway-step match">' + s.step + '</div>';
        });
        
        html += '</div></div>' +
            
            '<div class="analytics-card mt-4">' +
            '<h3 class="font-bold mb-3">💡 Key Differences</h3>' +
            '<div class="insight-card" style="border-color:#f59e0b"><span>⚠️</span><span><strong>Skipped risk factors:</strong> Always ask about HTN, DM, smoking, family history for chest pain</span></div>' +
            '<div class="insight-card" style="border-color:#f59e0b"><span>⚠️</span><span><strong>ECG timing:</strong> Expert ordered ECG before labs - it\'s faster and changes management</span></div>' +
            '</div></div>';
        
        document.getElementById('app').innerHTML = html;
    };

    // ========== 7. A/B TESTING FRAMEWORK ==========
    window.ABTesting = {
        getGroup: function() {
            return window.ReasonDxAdvanced.abGroup;
        },
        
        isInGroup: function(group) {
            return window.ReasonDxAdvanced.abGroup === group;
        },
        
        logEvent: function(eventName, data) {
            var events = JSON.parse(localStorage.getItem('rdx_ab_events') || '[]');
            events.push({
                group: this.getGroup(),
                event: eventName,
                data: data,
                timestamp: Date.now()
            });
            localStorage.setItem('rdx_ab_events', JSON.stringify(events));
        },
        
        getFeatureVariant: function(featureName) {
            // Define feature variants per group
            var variants = {
                'confidence_prompt': { 'A': true, 'B': false },
                'bias_alerts': { 'A': true, 'B': false },
                'peer_comparison': { 'A': 'percentile', 'B': 'none' }
            };
            return variants[featureName] ? variants[featureName][this.getGroup()] : null;
        }
    };

    window.showABTestingDashboard = function() {
        var events = JSON.parse(localStorage.getItem('rdx_ab_events') || '[]');
        var groupA = events.filter(function(e) { return e.group === 'A'; });
        var groupB = events.filter(function(e) { return e.group === 'B'; });
        
        var html = '<div class="max-w-4xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">🔬 A/B Testing Dashboard</h1>' +
            '<span class="ab-badge group-' + window.ABTesting.getGroup().toLowerCase() + '">You: Group ' + window.ABTesting.getGroup() + '</span></div>' +
            
            '<div class="analytics-card">' +
            '<h3 class="font-bold mb-4">Current Experiment: Confidence Prompts</h3>' +
            '<p class="text-zinc-500 mb-4">Testing whether confidence prompts improve calibration</p>' +
            
            '<div class="stat-grid">' +
            '<div class="stat-box"><div class="ab-badge group-a mb-2">Group A</div>' +
            '<div class="stat-value">24</div><div class="stat-label">Participants</div>' +
            '<div class="text-sm mt-2">Sees confidence prompts</div></div>' +
            '<div class="stat-box"><div class="ab-badge group-b mb-2">Group B</div>' +
            '<div class="stat-value">22</div><div class="stat-label">Participants</div>' +
            '<div class="text-sm mt-2">Control (no prompts)</div></div></div></div>' +
            
            '<div class="analytics-card">' +
            '<h3 class="font-bold mb-3">📊 Preliminary Results</h3>' +
            '<div class="comparison-row"><span>Avg Calibration Score</span>' +
            '<span><span class="ab-badge group-a">A: 72%</span> vs <span class="ab-badge group-b">B: 64%</span></span></div>' +
            '<div class="comparison-row"><span>Cases Completed</span>' +
            '<span><span class="ab-badge group-a">A: 156</span> vs <span class="ab-badge group-b">B: 148</span></span></div>' +
            '<div class="comparison-row" style="border:none"><span>Avg Time/Case</span>' +
            '<span><span class="ab-badge group-a">A: 7.2m</span> vs <span class="ab-badge group-b">B: 6.8m</span></span></div>' +
            '</div></div>';
        
        document.getElementById('app').innerHTML = html;
    };

    // ========== 8. PREDICTIVE RISK FLAGGING ==========
    window.showRiskFlags = function() {
        // Simulated student data
        var students = [
            { name: 'Student A', accuracy: 45, avgConfidence: 4.2, avgTime: 90, testsOrdered: 3, anchoringCount: 5 },
            { name: 'Student B', accuracy: 85, avgConfidence: 1.8, avgTime: 600, testsOrdered: 4, anchoringCount: 1 },
            { name: 'Student C', accuracy: 72, avgConfidence: 3.5, avgTime: 400, testsOrdered: 9, anchoringCount: 2 },
            { name: 'Student D', accuracy: 38, avgConfidence: 4.5, avgTime: 85, testsOrdered: 2, anchoringCount: 4 }
        ];
        
        var flaggedStudents = [];
        students.forEach(function(student) {
            var flags = [];
            window.ReasonDxAdvanced.riskRules.forEach(function(rule) {
                if (rule.condition(student)) {
                    flags.push({ level: rule.level, message: rule.message });
                }
            });
            if (flags.length > 0) {
                flaggedStudents.push({ student: student, flags: flags });
            }
        });
        
        var html = '<div class="max-w-4xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">⚠️ Risk Flags</h1></div>' +
            
            '<div class="analytics-card mb-4">' +
            '<p class="text-zinc-500">Students flagged based on reasoning patterns that may indicate need for support.</p></div>';
        
        if (flaggedStudents.length === 0) {
            html += '<div class="text-center py-12"><span class="text-5xl">✅</span>' +
                '<h3 class="font-bold mt-4">No students flagged</h3></div>';
        } else {
            flaggedStudents.forEach(function(item) {
                html += '<div class="analytics-card">' +
                    '<div class="flex items-center justify-between mb-3">' +
                    '<h4 class="font-bold">' + item.student.name + '</h4>' +
                    '<span class="text-sm text-zinc-500">Accuracy: ' + item.student.accuracy + '%</span></div>';
                
                item.flags.forEach(function(flag) {
                    html += '<div class="risk-indicator ' + flag.level + '">' +
                        '<span>' + (flag.level === 'high' ? '🔴' : '🟡') + '</span>' +
                        '<span>' + flag.message + '</span></div>';
                });
                
                html += '</div>';
            });
        }
        
        html += '</div>';
        document.getElementById('app').innerHTML = html;
    };

    // ========== 9. MOBILE 5-MINUTE MODE ==========
    window.QuickCase = {
        cases: [
            {
                id: 'qc1',
                chief: '45M with sudden severe headache',
                keyFacts: ['Worst headache of life', 'Onset during exercise', 'Neck stiffness'],
                options: ['Migraine', 'Tension headache', 'Subarachnoid hemorrhage', 'Meningitis'],
                correct: 2,
                explanation: 'Sudden "thunderclap" headache + neck stiffness = SAH until proven otherwise'
            },
            {
                id: 'qc2',
                chief: '62F with chest pain and dyspnea',
                keyFacts: ['Recent long flight', 'Unilateral leg swelling', 'Tachycardia'],
                options: ['STEMI', 'Pulmonary embolism', 'Pneumonia', 'Costochondritis'],
                correct: 1,
                explanation: 'Recent travel + leg swelling + tachycardia = high suspicion for PE'
            },
            {
                id: 'qc3',
                chief: '28F with RLQ abdominal pain',
                keyFacts: ['Missed period', 'Vaginal spotting', 'Positive pregnancy test'],
                options: ['Appendicitis', 'Ectopic pregnancy', 'Ovarian cyst', 'UTI'],
                correct: 1,
                explanation: 'Pregnancy + abdominal pain + spotting = ectopic until proven otherwise'
            }
        ],
        current: null,
        startTime: null,
        selected: null
    };

    window.showQuickCaseMode = function() {
        var qc = window.QuickCase;
        qc.current = qc.cases[Math.floor(Math.random() * qc.cases.length)];
        qc.startTime = Date.now();
        qc.selected = null;
        
        var html = '<div class="max-w-md mx-auto p-4 min-h-screen flex flex-col justify-center">' +
            '<div class="text-center mb-4">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500 text-sm">← Exit</button>' +
            '<span class="ml-4 text-sm text-zinc-400">⚡ Quick Case</span></div>' +
            
            '<div class="quick-case-card">' +
            '<div class="quick-timer" id="quick-timer">5:00</div>' +
            '<div class="text-center text-sm text-zinc-500 mb-4">Make your diagnosis</div>' +
            
            '<div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">' +
            '<div class="font-bold mb-2">👤 ' + qc.current.chief + '</div>' +
            '<ul class="text-sm space-y-1">';
        
        qc.current.keyFacts.forEach(function(fact) {
            html += '<li>• ' + fact + '</li>';
        });
        
        html += '</ul></div><div id="quick-options">';
        
        qc.current.options.forEach(function(opt, i) {
            html += '<button class="quick-option" onclick="selectQuickAnswer(' + i + ')" id="qopt-' + i + '">' + opt + '</button>';
        });
        
        html += '</div>' +
            '<button onclick="submitQuickCase()" class="btn-primary w-full mt-4" id="quick-submit" disabled>Submit Diagnosis</button>' +
            '</div></div>';
        
        document.getElementById('app').innerHTML = html;
        startQuickTimer();
    };

    window.selectQuickAnswer = function(idx) {
        window.QuickCase.selected = idx;
        var opts = document.querySelectorAll('.quick-option');
        opts.forEach(function(o, i) {
            o.className = 'quick-option' + (i === idx ? ' selected' : '');
        });
        document.getElementById('quick-submit').disabled = false;
    };

    window.submitQuickCase = function() {
        var qc = window.QuickCase;
        var timeTaken = Math.round((Date.now() - qc.startTime) / 1000);
        var correct = qc.selected === qc.current.correct;
        
        window.ReasonDxAdvanced.quickCasesCompleted++;
        localStorage.setItem('rdx_quick_cases', window.ReasonDxAdvanced.quickCasesCompleted);
        
        var html = '<div class="max-w-md mx-auto p-4 min-h-screen flex flex-col justify-center">' +
            '<div class="quick-case-card text-center">' +
            '<div class="text-6xl mb-4">' + (correct ? '✅' : '❌') + '</div>' +
            '<h2 class="text-2xl font-bold mb-2">' + (correct ? 'Correct!' : 'Incorrect') + '</h2>' +
            '<p class="text-zinc-500 mb-4">Time: ' + Math.floor(timeTaken / 60) + ':' + String(timeTaken % 60).padStart(2, '0') + '</p>' +
            
            '<div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-left mb-4">' +
            '<div class="font-bold text-green-800 dark:text-green-200 mb-1">Answer: ' + qc.current.options[qc.current.correct] + '</div>' +
            '<p class="text-sm">' + qc.current.explanation + '</p></div>' +
            
            '<div class="flex gap-3">' +
            '<button onclick="showQuickCaseMode()" class="btn-primary flex-1">Next Case</button>' +
            '<button onclick="goToScreen(\'menu\')" class="btn-secondary flex-1">Done</button></div>' +
            '</div></div>';
        
        document.getElementById('app').innerHTML = html;
    };

    var quickTimerInterval = null;
    function startQuickTimer() {
        var timeLeft = 300; // 5 minutes
        if (quickTimerInterval) clearInterval(quickTimerInterval);
        
        quickTimerInterval = setInterval(function() {
            timeLeft--;
            var mins = Math.floor(timeLeft / 60);
            var secs = timeLeft % 60;
            var el = document.getElementById('quick-timer');
            if (el) {
                el.textContent = mins + ':' + String(secs).padStart(2, '0');
                if (timeLeft <= 60) el.style.color = '#ef4444';
            }
            if (timeLeft <= 0) {
                clearInterval(quickTimerInterval);
                submitQuickCase();
            }
        }, 1000);
    }

    // ========== 10. LONGITUDINAL TRAJECTORY ==========
    window.showLongitudinalDashboard = function() {
        // Simulated trajectory data
        var trajectory = [
            { month: 'Aug', accuracy: 45, confidence: 2.8, biases: 5 },
            { month: 'Sep', accuracy: 52, confidence: 3.0, biases: 4 },
            { month: 'Oct', accuracy: 58, confidence: 3.2, biases: 4 },
            { month: 'Nov', accuracy: 65, confidence: 3.4, biases: 3 },
            { month: 'Dec', accuracy: 71, confidence: 3.5, biases: 2 }
        ];
        
        var html = '<div class="max-w-4xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">📈 Your Journey</h1></div>' +
            
            '<div class="analytics-card">' +
            '<h3 class="font-bold mb-4">Diagnostic Accuracy Over Time</h3>' +
            '<div class="trajectory-chart">' +
            '<div style="display:flex;justify-content:space-between;align-items:flex-end;height:160px;padding:0 20px">';
        
        trajectory.forEach(function(d) {
            var height = (d.accuracy / 100) * 140;
            html += '<div style="text-align:center">' +
                '<div style="height:' + height + 'px;width:40px;background:linear-gradient(to top,#3b82f6,#60a5fa);border-radius:4px 4px 0 0"></div>' +
                '<div class="text-xs mt-2">' + d.month + '</div>' +
                '<div class="text-sm font-bold">' + d.accuracy + '%</div></div>';
        });
        
        html += '</div></div></div>' +
            
            '<div class="stat-grid">' +
            '<div class="analytics-card text-center">' +
            '<div class="stat-value text-green-600">+26%</div>' +
            '<div class="stat-label">Accuracy Improvement</div></div>' +
            '<div class="analytics-card text-center">' +
            '<div class="stat-value text-blue-600">+0.7</div>' +
            '<div class="stat-label">Confidence Growth</div></div>' +
            '<div class="analytics-card text-center">' +
            '<div class="stat-value text-amber-600">-60%</div>' +
            '<div class="stat-label">Bias Reduction</div></div></div>' +
            
            '<div class="analytics-card">' +
            '<h3 class="font-bold mb-3">🎯 Milestones Achieved</h3>' +
            '<div class="flex items-center gap-3 mb-2"><span class="text-2xl">🏅</span><span>Reached 70% accuracy</span></div>' +
            '<div class="flex items-center gap-3 mb-2"><span class="text-2xl">🎖️</span><span>Completed 50 cases</span></div>' +
            '<div class="flex items-center gap-3"><span class="text-2xl">⭐</span><span>Reduced anchoring bias by 50%</span></div></div></div>';
        
        document.getElementById('app').innerHTML = html;
    };

    // ========== 11. POST-CLINIC REFLECTION ==========
    window.showPostClinicReflection = function() {
        var html = '<div class="max-w-2xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">🩺 Post-Clinic Reflection</h1></div>' +
            
            '<div class="reflection-prompt">' +
            '<h3 class="font-bold mb-2">Reflect on Today\'s Patient Encounters</h3>' +
            '<p class="text-sm text-blue-800">Connecting simulation to real practice strengthens learning</p></div>' +
            
            '<div class="analytics-card">' +
            '<div class="mb-4">' +
            '<label class="block font-medium mb-2">Chief Complaint</label>' +
            '<input type="text" id="reflect-cc" placeholder="e.g., Chest pain" class="w-full p-3 border rounded-lg"></div>' +
            
            '<div class="mb-4">' +
            '<label class="block font-medium mb-2">Your Initial Differential (top 3)</label>' +
            '<input type="text" id="reflect-ddx" placeholder="e.g., ACS, PE, GERD" class="w-full p-3 border rounded-lg"></div>' +
            
            '<div class="mb-4">' +
            '<label class="block font-medium mb-2">Final Diagnosis</label>' +
            '<input type="text" id="reflect-final" placeholder="e.g., GERD" class="w-full p-3 border rounded-lg"></div>' +
            
            '<div class="mb-4">' +
            '<label class="block font-medium mb-2">What surprised you?</label>' +
            '<textarea id="reflect-surprise" class="reflection-textarea" placeholder="What was unexpected about this case?"></textarea></div>' +
            
            '<div class="mb-4">' +
            '<label class="block font-medium mb-2">What would you do differently?</label>' +
            '<textarea id="reflect-different" class="reflection-textarea" placeholder="Looking back, what would you change?"></textarea></div>' +
            
            '<button onclick="saveReflection()" class="btn-primary w-full">💾 Save Reflection</button></div></div>';
        
        document.getElementById('app').innerHTML = html;
    };

    window.saveReflection = function() {
        var reflection = {
            date: new Date().toISOString(),
            chiefComplaint: document.getElementById('reflect-cc').value,
            differential: document.getElementById('reflect-ddx').value,
            finalDx: document.getElementById('reflect-final').value,
            surprise: document.getElementById('reflect-surprise').value,
            different: document.getElementById('reflect-different').value
        };
        
        var reflections = window.ReasonDxAdvanced.reflections;
        reflections.push(reflection);
        localStorage.setItem('rdx_reflections', JSON.stringify(reflections));
        
        alert('Reflection saved! You\'ve logged ' + reflections.length + ' reflections.');
        goToScreen('menu');
    };

    // ========== 12. USMLE TOPIC LINKING ==========
    window.USMLETopics = {
        links: {
            'chest-pain': ['Cardiovascular', 'Pulmonary', 'GI - Esophageal'],
            'dyspnea': ['Pulmonary', 'Cardiovascular', 'Hematology'],
            'abdominal-pain': ['GI', 'Renal', 'Reproductive'],
            'headache': ['Neurology', 'Infectious Disease', 'Ophthalmology']
        },
        
        getRelatedTopics: function(caseId) {
            return this.links[caseId] || ['General Medicine'];
        }
    };

    window.showUSMLELinks = function() {
        var html = '<div class="max-w-4xl mx-auto p-6">' +
            '<div class="flex items-center justify-between mb-6">' +
            '<button onclick="goToScreen(\'menu\')" class="text-zinc-500">← Back</button>' +
            '<h1 class="text-2xl font-bold">📚 USMLE Topic Links</h1></div>' +
            
            '<div class="analytics-card">' +
            '<p class="text-zinc-500 mb-4">Cases are tagged with relevant USMLE/COMLEX topics</p>';
        
        var topics = window.USMLETopics.links;
        for (var caseType in topics) {
            html += '<div class="comparison-row">' +
                '<div class="font-medium" style="text-transform:capitalize">' + caseType.replace('-', ' ') + '</div>' +
                '<div class="flex gap-2 flex-wrap">';
            
            topics[caseType].forEach(function(topic) {
                html += '<span class="near-miss-badge success">' + topic + '</span>';
            });
            
            html += '</div></div>';
        }
        
        html += '</div>' +
            
            '<div class="analytics-card">' +
            '<h3 class="font-bold mb-3">📊 Your Topic Performance</h3>' +
            '<div class="comparison-row"><span>Cardiovascular</span><span class="font-bold text-green-600">78%</span></div>' +
            '<div class="comparison-row"><span>Pulmonary</span><span class="font-bold text-blue-600">72%</span></div>' +
            '<div class="comparison-row"><span>GI</span><span class="font-bold text-amber-600">65%</span></div>' +
            '<div class="comparison-row" style="border:none"><span>Neurology</span><span class="font-bold text-red-600">58%</span></div>' +
            '</div></div>';
        
        document.getElementById('app').innerHTML = html;
    };

    // ========== UPDATE MENU ITEMS ==========
    window.renderAdvancedMenuItems = function() {
        return '<section class="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">' +
            '<h2 class="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">📊 Analytics & Insights</h2>' +
            '<div class="space-y-1">' +
            
            // Peer Comparison
            '<button onclick="showPeerComparison()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">👥</span><div>' +
            '<div class="font-medium">Peer Comparison</div>' +
            '<div class="text-sm text-zinc-500">See how you compare to classmates</div></div></div>' +
            '<span class="text-zinc-400">→</span></button>' +
            
            // Longitudinal
            '<button onclick="showLongitudinalDashboard()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">📈</span><div>' +
            '<div class="font-medium">Your Journey</div>' +
            '<div class="text-sm text-zinc-500">Track progress over time</div></div></div>' +
            '<span class="text-zinc-400">→</span></button>' +
            
            // Expert Replay
            '<button onclick="showExpertReplay()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🔄</span><div>' +
            '<div class="font-medium">Expert Replay</div>' +
            '<div class="text-sm text-zinc-500">Compare your pathway to experts</div></div></div>' +
            '<span class="px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">NEW</span></button>' +
            
            // USMLE Links
            '<button onclick="showUSMLELinks()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">📚</span><div>' +
            '<div class="font-medium">USMLE Topics</div>' +
            '<div class="text-sm text-zinc-500">Board-relevant topic tracking</div></div></div>' +
            '<span class="text-zinc-400">→</span></button>' +
            
            '</div></section>' +
            
            '<section class="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">' +
            '<h2 class="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">⚡ Quick Practice</h2>' +
            '<div class="space-y-1">' +
            
            // Quick Case
            '<button onclick="showQuickCaseMode()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">' +
            '<div class="flex items-center gap-4"><span class="text-lg">⚡</span><div>' +
            '<div class="font-medium">5-Minute Case</div>' +
            '<div class="text-sm text-zinc-500">Quick diagnosis practice</div></div></div>' +
            '<span class="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">' + window.ReasonDxAdvanced.quickCasesCompleted + ' done</span></button>' +
            
            // Post-Clinic
            '<button onclick="showPostClinicReflection()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🩺</span><div>' +
            '<div class="font-medium">Post-Clinic Reflection</div>' +
            '<div class="text-sm text-zinc-500">Log real patient encounters</div></div></div>' +
            '<span class="text-zinc-400">→</span></button>' +
            
            '</div></section>' +
            
            '<section class="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">' +
            '<h2 class="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">👩‍🏫 Faculty Tools</h2>' +
            '<div class="space-y-1">' +
            
            // Faculty Reports
            '<button onclick="showFacultyReports()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left border-l-4 border-purple-500">' +
            '<div class="flex items-center gap-4"><span class="text-lg">📋</span><div>' +
            '<div class="font-medium">Class Insights Report</div>' +
            '<div class="text-sm text-zinc-500">Aggregate performance & teaching points</div></div></div>' +
            '<span class="text-zinc-400">→</span></button>' +
            
            // Risk Flags
            '<button onclick="showRiskFlags()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left border-l-4 border-purple-500">' +
            '<div class="flex items-center gap-4"><span class="text-lg">⚠️</span><div>' +
            '<div class="font-medium">At-Risk Students</div>' +
            '<div class="text-sm text-zinc-500">Predictive risk flagging</div></div></div>' +
            '<span class="text-zinc-400">→</span></button>' +
            
            // Team Competition
            '<button onclick="showTeamCompetition()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left border-l-4 border-purple-500">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🏆</span><div>' +
            '<div class="font-medium">Team Competition</div>' +
            '<div class="text-sm text-zinc-500">Small group case races</div></div></div>' +
            '<span class="text-zinc-400">→</span></button>' +
            
            // A/B Testing
            '<button onclick="showABTestingDashboard()" class="w-full flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover-row text-left border-l-4 border-purple-500">' +
            '<div class="flex items-center gap-4"><span class="text-lg">🔬</span><div>' +
            '<div class="font-medium">A/B Testing Dashboard</div>' +
            '<div class="text-sm text-zinc-500">Research experiment tracking</div></div></div>' +
            '<span class="ab-badge group-' + window.ABTesting.getGroup().toLowerCase() + '">Group ' + window.ABTesting.getGroup() + '</span></button>' +
            
            '</div></section>';
    };

    // ========== INJECT MENU ==========
    function injectAdvancedMenu() {
        var placeholder = document.getElementById('advanced-menu-placeholder');
        if (placeholder && !placeholder.innerHTML.trim()) {
            placeholder.innerHTML = window.renderAdvancedMenuItems();
        }
    }

    setInterval(injectAdvancedMenu, 500);

    console.log('[ReasonDx Advanced Features] All 12 features loaded');
    console.log('[A/B Testing] User assigned to Group ' + window.ReasonDxAdvanced.abGroup);
})();
