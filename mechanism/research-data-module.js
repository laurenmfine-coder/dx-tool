// =============================================
// MechanismDx Research Data Module v1.0
// Integrates challenges.html with fingerprint-dashboard.html
// Provides export functionality for Google Sheets
// =============================================

// Enhanced State Schema for Research
const RESEARCH_STATE_SCHEMA = {
    // Meta
    version: '1.0',
    user_id: null, // Set from Study ID input
    created_at: null,
    
    // Basic Progress (existing)
    currentChallenge: 'predict',
    currentSystem: 'all',
    predictIndex: 0,
    pathwayIndex: 0,
    connectorIndex: 0,
    whatifIndex: 0,
    completed: 0,
    correct: 0,
    streak: 0,
    maxStreak: 0,
    xp: 0,
    
    // Session Tracking
    sessions: [], // Array of {start, end, challenges_completed}
    dayStreak: 0,
    lastActiveDate: null,
    
    // Calibration Data (CCTS alignment)
    calibrationData: [], // {confidence: 0-100, accuracy: 0-100, timestamp, challenge_type, challenge_id}
    
    // Detailed Attempt Logs (for research export)
    attempts: {
        predict: [],  // Full attempt records
        pathway: [],
        connector: [],
        whatif: []
    },
    
    // System-Level Performance (for fingerprint)
    systemPerformance: {
        cardio: { attempted: 0, correct: 0, avgConfidence: 0, avgAccuracy: 0 },
        resp: { attempted: 0, correct: 0, avgConfidence: 0, avgAccuracy: 0 },
        renal: { attempted: 0, correct: 0, avgConfidence: 0, avgAccuracy: 0 },
        gi: { attempted: 0, correct: 0, avgConfidence: 0, avgAccuracy: 0 },
        neuro: { attempted: 0, correct: 0, avgConfidence: 0, avgAccuracy: 0 },
        endo: { attempted: 0, correct: 0, avgConfidence: 0, avgAccuracy: 0 },
        heme: { attempted: 0, correct: 0, avgConfidence: 0, avgAccuracy: 0 },
        id: { attempted: 0, correct: 0, avgConfidence: 0, avgAccuracy: 0 }
    },
    
    // Connection Mastery (granular for fingerprint visualization)
    connections: {}, // {connection_id: {attempts, correct, lastAttempt, mastery_level}}
    
    // Misconception Tracking
    misconceptions: [], // {challenge_id, incorrect_choice, correct_choice, count, last_occurrence}
    
    // Challenge Type Performance
    challengeTypePerformance: {
        predict: { attempted: 0, correct: 0 },
        pathway: { attempted: 0, correct: 0 },
        connector: { attempted: 0, substantive: 0 },
        whatif: { attempted: 0, correct: 0 }
    }
};

// =============================================
// Data Recording Functions
// =============================================

function recordAttempt(challengeType, attemptData) {
    const state = loadResearchState();
    
    // Create full attempt record
    const record = {
        timestamp: new Date().toISOString(),
        session_id: state.currentSessionId,
        ...attemptData
    };
    
    // Add to attempts log
    state.attempts[challengeType].push(record);
    
    // Update system performance
    if (attemptData.system && state.systemPerformance[attemptData.system]) {
        state.systemPerformance[attemptData.system].attempted++;
        if (attemptData.is_correct) {
            state.systemPerformance[attemptData.system].correct++;
        }
    }
    
    // Update challenge type performance
    if (state.challengeTypePerformance[challengeType]) {
        state.challengeTypePerformance[challengeType].attempted++;
        if (attemptData.is_correct || (challengeType === 'connector' && attemptData.is_substantive)) {
            if (challengeType === 'connector') {
                state.challengeTypePerformance[challengeType].substantive++;
            } else {
                state.challengeTypePerformance[challengeType].correct++;
            }
        }
    }
    
    // Update connection mastery
    if (attemptData.challenge_id) {
        const connKey = attemptData.system + '_' + attemptData.challenge_id;
        if (!state.connections[connKey]) {
            state.connections[connKey] = {
                challenge_id: attemptData.challenge_id,
                challenge_type: challengeType,
                system: attemptData.system,
                module: attemptData.module,
                attempts: 0,
                correct: 0,
                lastAttempt: null,
                mastery_level: 'not_started'
            };
        }
        state.connections[connKey].attempts++;
        if (attemptData.is_correct) state.connections[connKey].correct++;
        state.connections[connKey].lastAttempt = new Date().toISOString();
        
        // Calculate mastery level
        const conn = state.connections[connKey];
        const ratio = conn.correct / conn.attempts;
        if (conn.attempts >= 3 && ratio >= 0.8) conn.mastery_level = 'mastered';
        else if (conn.attempts >= 1 && ratio >= 0.5) conn.mastery_level = 'learning';
        else if (conn.attempts >= 1) conn.mastery_level = 'weak';
    }
    
    // Record calibration data point
    if (attemptData.confidence !== undefined && attemptData.accuracy !== undefined) {
        state.calibrationData.push({
            confidence: attemptData.confidence,
            accuracy: attemptData.accuracy,
            timestamp: new Date().toISOString(),
            challenge_type: challengeType,
            challenge_id: attemptData.challenge_id,
            system: attemptData.system
        });
    }
    
    // Track misconceptions for predict/whatif (wrong answers)
    if (!attemptData.is_correct && attemptData.selected_option !== undefined && attemptData.correct_option !== undefined) {
        const miscKey = attemptData.challenge_id + '_' + attemptData.selected_option;
        const existing = state.misconceptions.find(m => m.key === miscKey);
        if (existing) {
            existing.count++;
            existing.last_occurrence = new Date().toISOString();
        } else {
            state.misconceptions.push({
                key: miscKey,
                challenge_id: attemptData.challenge_id,
                challenge_type: challengeType,
                system: attemptData.system,
                incorrect_choice: attemptData.selected_option,
                correct_choice: attemptData.correct_option,
                count: 1,
                last_occurrence: new Date().toISOString()
            });
        }
    }
    
    saveResearchState(state);
    return record;
}

function recordCalibration(confidence, accuracy, challengeType, challengeId, system) {
    const state = loadResearchState();
    state.calibrationData.push({
        confidence,
        accuracy,
        timestamp: new Date().toISOString(),
        challenge_type: challengeType,
        challenge_id: challengeId,
        system
    });
    saveResearchState(state);
}

// =============================================
// State Management
// =============================================

function loadResearchState() {
    const saved = localStorage.getItem('mechanismdx_research_v1');
    if (saved) {
        return JSON.parse(saved);
    }
    
    // Initialize new state
    const newState = JSON.parse(JSON.stringify(RESEARCH_STATE_SCHEMA));
    newState.created_at = new Date().toISOString();
    newState.currentSessionId = generateSessionId();
    newState.sessions.push({
        id: newState.currentSessionId,
        start: new Date().toISOString(),
        end: null,
        challenges_completed: 0
    });
    
    saveResearchState(newState);
    return newState;
}

function saveResearchState(state) {
    state.lastActiveDate = new Date().toISOString();
    localStorage.setItem('mechanismdx_research_v1', JSON.stringify(state));
}

function generateSessionId() {
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function setStudyId(studyId) {
    const state = loadResearchState();
    state.user_id = studyId;
    saveResearchState(state);
}

// =============================================
// Fingerprint Data Generation
// =============================================

function generateFingerprintData() {
    const state = loadResearchState();
    
    // Calculate summary stats
    const totalAttempts = Object.values(state.challengeTypePerformance).reduce((a, b) => a + b.attempted, 0);
    const totalCorrect = state.challengeTypePerformance.predict.correct + 
                        state.challengeTypePerformance.pathway.correct +
                        state.challengeTypePerformance.whatif.correct +
                        state.challengeTypePerformance.connector.substantive;
    
    // Calculate calibration metrics
    let avgConfidence = 0, avgAccuracy = 0, calibrationError = 0;
    if (state.calibrationData.length > 0) {
        avgConfidence = state.calibrationData.reduce((a, b) => a + b.confidence, 0) / state.calibrationData.length;
        avgAccuracy = state.calibrationData.reduce((a, b) => a + b.accuracy, 0) / state.calibrationData.length;
        calibrationError = Math.abs(avgConfidence - avgAccuracy);
    }
    
    // Build domain mastery array
    const domainMastery = Object.entries(state.systemPerformance).map(([system, data]) => ({
        system,
        name: getSystemName(system),
        attempted: data.attempted,
        correct: data.correct,
        mastery: data.attempted > 0 ? data.correct / data.attempted : 0
    })).filter(d => d.attempted > 0);
    
    // Build connection list
    const connections = Object.values(state.connections).map(conn => ({
        id: conn.challenge_id,
        system: conn.system,
        module: conn.module,
        type: conn.challenge_type,
        attempts: conn.attempts,
        correct: conn.correct,
        strength: conn.attempts > 0 ? conn.correct / conn.attempts : 0,
        status: conn.mastery_level,
        lastAttempt: conn.lastAttempt
    }));
    
    // Identify gaps (low mastery or not attempted)
    const gaps = [];
    connections.forEach(conn => {
        if (conn.status === 'weak' || (conn.attempts > 0 && conn.strength < 0.5)) {
            gaps.push({
                topic: conn.id,
                domain: conn.system,
                priority: conn.strength < 0.3 ? 'high' : 'medium',
                reason: conn.strength < 0.3 ? `Only ${Math.round(conn.strength * 100)}% correct` : 'Needs practice'
            });
        }
    });
    
    // Get top misconceptions
    const topMisconceptions = state.misconceptions
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    
    // Calculate learning velocity (connections per day)
    const daysSinceStart = state.created_at ? 
        Math.max(1, Math.ceil((Date.now() - new Date(state.created_at).getTime()) / (1000 * 60 * 60 * 24))) : 1;
    const velocity = connections.length / daysSinceStart;
    
    return {
        // Summary
        stats: {
            totalConnections: connections.length,
            mastered: connections.filter(c => c.status === 'mastered').length,
            learning: connections.filter(c => c.status === 'learning').length,
            weak: connections.filter(c => c.status === 'weak').length,
            dayStreak: state.dayStreak,
            totalXP: state.xp,
            maxStreak: state.maxStreak,
            velocity: velocity
        },
        
        // Calibration
        calibration: {
            avgConfidence: Math.round(avgConfidence),
            avgAccuracy: Math.round(avgAccuracy),
            calibrationError: Math.round(calibrationError),
            dataPoints: state.calibrationData.length,
            status: calibrationError < 10 ? 'well_calibrated' : 
                    avgConfidence > avgAccuracy ? 'overconfident' : 'underconfident'
        },
        
        // Domain mastery
        domainMastery,
        
        // All connections
        connections,
        
        // Priority gaps
        gaps: gaps.slice(0, 5),
        
        // Misconceptions
        misconceptions: topMisconceptions,
        
        // Predictions
        predictions: {
            mechanism: Math.round(avgAccuracy * 0.9 + velocity * 2), // Simple heuristic
            clinical: Math.round(avgAccuracy * 0.95 + velocity * 3)
        },
        
        // Challenge type breakdown
        challengeTypes: state.challengeTypePerformance
    };
}

function getSystemName(code) {
    const names = {
        cardio: 'Cardiovascular',
        resp: 'Respiratory',
        renal: 'Renal',
        gi: 'GI/Hepatic',
        neuro: 'Neurological',
        endo: 'Endocrine',
        heme: 'Hematology',
        id: 'Infectious Disease'
    };
    return names[code] || code;
}

// =============================================
// Export Functions
// =============================================

function exportToJSON() {
    const state = loadResearchState();
    const fingerprint = generateFingerprintData();
    
    const exportData = {
        export_meta: {
            version: '1.0',
            export_timestamp: new Date().toISOString(),
            user_id: state.user_id,
            platform: 'MechanismDx'
        },
        summary: fingerprint.stats,
        calibration: fingerprint.calibration,
        system_performance: state.systemPerformance,
        challenge_performance: state.challengeTypePerformance,
        connections: fingerprint.connections,
        gaps: fingerprint.gaps,
        misconceptions: fingerprint.misconceptions,
        detailed_attempts: state.attempts,
        raw_calibration: state.calibrationData
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mechanismdx_export_${state.user_id || 'anonymous'}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function exportToCSV() {
    const state = loadResearchState();
    const fingerprint = generateFingerprintData();
    
    // Create summary CSV
    const summaryRows = [
        ['MechanismDx Research Export'],
        ['Export Date', new Date().toISOString()],
        ['User ID', state.user_id || 'anonymous'],
        [''],
        ['SUMMARY METRICS'],
        ['Total Challenges', fingerprint.stats.totalConnections],
        ['Mastered', fingerprint.stats.mastered],
        ['Learning', fingerprint.stats.learning],
        ['Weak', fingerprint.stats.weak],
        ['Total XP', fingerprint.stats.totalXP],
        ['Max Streak', fingerprint.stats.maxStreak],
        ['Day Streak', fingerprint.stats.dayStreak],
        [''],
        ['CALIBRATION'],
        ['Average Confidence', fingerprint.calibration.avgConfidence + '%'],
        ['Average Accuracy', fingerprint.calibration.avgAccuracy + '%'],
        ['Calibration Error', fingerprint.calibration.calibrationError + '%'],
        ['Status', fingerprint.calibration.status],
        ['Data Points', fingerprint.calibration.dataPoints],
        [''],
        ['SYSTEM PERFORMANCE'],
        ['System', 'Attempted', 'Correct', 'Accuracy']
    ];
    
    Object.entries(state.systemPerformance).forEach(([sys, data]) => {
        if (data.attempted > 0) {
            summaryRows.push([
                getSystemName(sys),
                data.attempted,
                data.correct,
                Math.round((data.correct / data.attempted) * 100) + '%'
            ]);
        }
    });
    
    summaryRows.push(['']);
    summaryRows.push(['CHALLENGE TYPE PERFORMANCE']);
    summaryRows.push(['Type', 'Attempted', 'Correct/Substantive', 'Rate']);
    
    Object.entries(state.challengeTypePerformance).forEach(([type, data]) => {
        const correct = type === 'connector' ? data.substantive : data.correct;
        summaryRows.push([
            type,
            data.attempted,
            correct,
            data.attempted > 0 ? Math.round((correct / data.attempted) * 100) + '%' : 'N/A'
        ]);
    });
    
    // Create calibration detail CSV
    const calibrationRows = [
        ['Timestamp', 'Challenge Type', 'Challenge ID', 'System', 'Confidence', 'Accuracy']
    ];
    
    state.calibrationData.forEach(c => {
        calibrationRows.push([
            c.timestamp,
            c.challenge_type,
            c.challenge_id,
            c.system,
            c.confidence,
            c.accuracy
        ]);
    });
    
    // Download summary
    downloadCSV(summaryRows, `mechanismdx_summary_${state.user_id || 'anonymous'}_${new Date().toISOString().split('T')[0]}.csv`);
    
    // Download calibration detail (after short delay)
    setTimeout(() => {
        downloadCSV(calibrationRows, `mechanismdx_calibration_${state.user_id || 'anonymous'}_${new Date().toISOString().split('T')[0]}.csv`);
    }, 500);
}

function downloadCSV(rows, filename) {
    const csv = rows.map(row => row.map(cell => 
        typeof cell === 'string' && cell.includes(',') ? `"${cell}"` : cell
    ).join(',')).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

function exportForGoogleSheets() {
    const state = loadResearchState();
    const fingerprint = generateFingerprintData();
    
    // Create single-row format for appending to Google Sheet
    const row = {
        export_date: new Date().toISOString(),
        user_id: state.user_id || '',
        total_completed: fingerprint.stats.totalConnections,
        total_mastered: fingerprint.stats.mastered,
        total_learning: fingerprint.stats.learning,
        total_weak: fingerprint.stats.weak,
        total_xp: fingerprint.stats.totalXP,
        max_streak: fingerprint.stats.maxStreak,
        day_streak: fingerprint.stats.dayStreak,
        avg_confidence: fingerprint.calibration.avgConfidence,
        avg_accuracy: fingerprint.calibration.avgAccuracy,
        calibration_error: fingerprint.calibration.calibrationError,
        calibration_status: fingerprint.calibration.status,
        // Challenge types
        predict_attempted: state.challengeTypePerformance.predict.attempted,
        predict_correct: state.challengeTypePerformance.predict.correct,
        pathway_attempted: state.challengeTypePerformance.pathway.attempted,
        pathway_correct: state.challengeTypePerformance.pathway.correct,
        connector_attempted: state.challengeTypePerformance.connector.attempted,
        connector_substantive: state.challengeTypePerformance.connector.substantive,
        whatif_attempted: state.challengeTypePerformance.whatif.attempted,
        whatif_correct: state.challengeTypePerformance.whatif.correct,
        // Systems
        cardio_attempted: state.systemPerformance.cardio.attempted,
        cardio_correct: state.systemPerformance.cardio.correct,
        resp_attempted: state.systemPerformance.resp.attempted,
        resp_correct: state.systemPerformance.resp.correct,
        renal_attempted: state.systemPerformance.renal.attempted,
        renal_correct: state.systemPerformance.renal.correct,
        gi_attempted: state.systemPerformance.gi.attempted,
        gi_correct: state.systemPerformance.gi.correct,
        neuro_attempted: state.systemPerformance.neuro.attempted,
        neuro_correct: state.systemPerformance.neuro.correct,
        endo_attempted: state.systemPerformance.endo.attempted,
        endo_correct: state.systemPerformance.endo.correct,
        heme_attempted: state.systemPerformance.heme.attempted,
        heme_correct: state.systemPerformance.heme.correct,
        id_attempted: state.systemPerformance.id.attempted,
        id_correct: state.systemPerformance.id.correct
    };
    
    // Create CSV with headers
    const headers = Object.keys(row);
    const values = Object.values(row);
    const csv = headers.join(',') + '\n' + values.join(',');
    
    downloadCSV([headers, values], `mechanismdx_sheets_${state.user_id || 'anonymous'}_${new Date().toISOString().split('T')[0]}.csv`);
    
    // Also copy to clipboard for easy pasting
    const clipboardText = values.join('\t');
    navigator.clipboard.writeText(clipboardText).then(() => {
        alert('Data row copied to clipboard! You can paste directly into Google Sheets.\n\nAlso downloading CSV file as backup.');
    }).catch(() => {
        alert('CSV file downloaded. Copy the values from the file to paste into Google Sheets.');
    });
}

// =============================================
// Utility Functions
// =============================================

function clearAllData() {
    if (confirm('This will delete ALL your MechanismDx progress and data. Are you sure?')) {
        localStorage.removeItem('mechanismdx_research_v1');
        localStorage.removeItem('mechanismdx_state'); // Old key if exists
        location.reload();
    }
}

function getDataSummary() {
    const fingerprint = generateFingerprintData();
    console.log('MechanismDx Data Summary:', fingerprint);
    return fingerprint;
}

// Make functions available globally
window.MechanismDxResearch = {
    recordAttempt,
    recordCalibration,
    loadState: loadResearchState,
    saveState: saveResearchState,
    setStudyId,
    generateFingerprint: generateFingerprintData,
    exportJSON: exportToJSON,
    exportCSV: exportToCSV,
    exportSheets: exportForGoogleSheets,
    clearData: clearAllData,
    getSummary: getDataSummary
};

console.log('MechanismDx Research Module loaded. Access via window.MechanismDxResearch');
