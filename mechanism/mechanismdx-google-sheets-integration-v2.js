/**
 * MechanismDx Research Data Collection - Google Sheets Integration v2
 * Updated: January 2026
 * 
 * Now includes all 13 body systems for comprehensive data collection
 * Automatically sends learning data to Google Sheets for IRB-approved research
 */

(function() {
    'use strict';

    // ============================================
    // CONFIGURATION
    // ============================================
    
    const CONFIG = {
        // Google Apps Script Web App URL
        WEB_APP_URL: 'https://script.google.com/macros/s/AKfycbxJQRYCzmH8VJSHaA2-q6JvykqtYDlfgDOQzmMDqM5jWMwRehFkHjFb5mBuVZ6J1_5H/exec',
        
        // Local storage key for MechanismDx data
        STORAGE_KEY: 'mechanismdx_research_v1',
        
        // How often to auto-send data (milliseconds) - 5 minutes
        AUTO_SEND_INTERVAL: 5 * 60 * 1000,
        
        // Study ID prefixes to EXCLUDE from research (owner/admin accounts)
        EXCLUDED_PREFIXES: ['OWNER', 'ADMIN', 'TEST', 'DEMO', 'DEV'],
        
        // All 13 body systems tracked by MechanismDx
        BODY_SYSTEMS: [
            'cardio',      // Cardiovascular
            'resp',        // Respiratory
            'renal',       // Renal
            'gi',          // Gastrointestinal
            'neuro',       // Neurological
            'endo',        // Endocrine
            'heme',        // Hematology
            'id',          // Infectious Disease
            'msk',         // Musculoskeletal
            'derm',        // Dermatology
            'immune',      // Immunology/Allergy
            'tox',         // Toxicology
            'multi'        // Multi-System
        ],
        
        // Debug mode - set to true to see console logs
        DEBUG: true
    };

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    
    function log(message, data = null) {
        if (CONFIG.DEBUG) {
            if (data) {
                console.log(`[MechanismDx Research] ${message}`, data);
            } else {
                console.log(`[MechanismDx Research] ${message}`);
            }
        }
    }

    function getStudyId() {
        // Try to get study ID from MechanismDx data
        try {
            const data = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY) || '{}');
            return data.visitorId || data.visitorID || data.studyId || 'UNKNOWN';
        } catch (e) {
            return 'UNKNOWN';
        }
    }

    function isExcludedUser() {
        const studyId = getStudyId();
        return CONFIG.EXCLUDED_PREFIXES.some(prefix => 
            studyId.toUpperCase().startsWith(prefix)
        );
    }

    function getMechanismDxData() {
        try {
            return JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY) || '{}');
        } catch (e) {
            log('Error reading MechanismDx data', e);
            return {};
        }
    }

    // ============================================
    // DATA EXTRACTION FUNCTIONS
    // ============================================

    function extractSummaryData() {
        const data = getMechanismDxData();
        const challenges = data.challenges || {};
        const calibration = data.calibration || {};
        
        // Count challenges by type and system
        let totalCompleted = 0;
        let totalMastered = 0;
        let totalLearning = 0;
        let totalWeak = 0;
        
        // Challenge type counts
        let predictAttempted = 0, predictCorrect = 0;
        let pathwayAttempted = 0, pathwayCorrect = 0;
        let connectorAttempted = 0, connectorSubstantive = 0;
        let whatifAttempted = 0, whatifCorrect = 0;
        let mappingAttempted = 0, mappingCorrect = 0;
        let integrationAttempted = 0, integrationCorrect = 0;
        
        // Initialize system counts for all 13 systems
        const systemCounts = {};
        CONFIG.BODY_SYSTEMS.forEach(sys => {
            systemCounts[sys] = { attempted: 0, correct: 0 };
        });
        
        // Process challenges
        Object.values(challenges).forEach(challenge => {
            if (challenge.completed) {
                totalCompleted++;
                
                // Mastery status
                if (challenge.masteryLevel === 'mastered') totalMastered++;
                else if (challenge.masteryLevel === 'learning') totalLearning++;
                else if (challenge.masteryLevel === 'weak') totalWeak++;
                
                // By type
                const type = (challenge.type || '').toLowerCase();
                const correct = challenge.correct || challenge.accuracy > 0.7;
                
                if (type.includes('predict')) {
                    predictAttempted++;
                    if (correct) predictCorrect++;
                } else if (type.includes('pathway') || type.includes('complete')) {
                    pathwayAttempted++;
                    if (correct) pathwayCorrect++;
                } else if (type.includes('connector') || type.includes('connection')) {
                    connectorAttempted++;
                    if (challenge.substantive || correct) connectorSubstantive++;
                } else if (type.includes('whatif') || type.includes('what-if')) {
                    whatifAttempted++;
                    if (correct) whatifCorrect++;
                } else if (type.includes('mapping') || type.includes('map')) {
                    mappingAttempted++;
                    if (correct) mappingCorrect++;
                } else if (type.includes('integration') || type.includes('multi')) {
                    integrationAttempted++;
                    if (correct) integrationCorrect++;
                }
                
                // By system - check all 13 systems
                const system = (challenge.system || '').toLowerCase();
                CONFIG.BODY_SYSTEMS.forEach(sys => {
                    // Match system codes and common variations
                    const sysPatterns = {
                        'cardio': ['cardio', 'cardiac', 'heart', 'cardiovascular'],
                        'resp': ['resp', 'respiratory', 'pulm', 'lung'],
                        'renal': ['renal', 'kidney', 'nephro'],
                        'gi': ['gi', 'gastro', 'hepat', 'liver', 'pancrea', 'intestin'],
                        'neuro': ['neuro', 'brain', 'cns', 'stroke'],
                        'endo': ['endo', 'thyroid', 'adrenal', 'diabet', 'metabol'],
                        'heme': ['heme', 'hemat', 'blood', 'coag', 'anemia'],
                        'id': ['id', 'infect', 'sepsis', 'bacteria', 'viral'],
                        'msk': ['msk', 'musculo', 'ortho', 'joint', 'bone', 'rheum'],
                        'derm': ['derm', 'skin', 'rash', 'cutane'],
                        'immune': ['immune', 'allerg', 'anaphy', 'autoimmune', 'ige'],
                        'tox': ['tox', 'poison', 'overdose', 'drug'],
                        'multi': ['multi', 'cross', 'acid-base', 'electrolyte']
                    };
                    
                    const patterns = sysPatterns[sys] || [sys];
                    if (patterns.some(p => system.includes(p))) {
                        systemCounts[sys].attempted++;
                        if (correct) systemCounts[sys].correct++;
                    }
                });
            }
        });
        
        // Build summary object with all 13 systems
        const summary = {
            type: 'SUMMARY',
            export_date: new Date().toISOString(),
            study_id: getStudyId(),
            
            // Overall progress
            total_completed: totalCompleted,
            total_mastered: totalMastered,
            total_learning: totalLearning,
            total_weak: totalWeak,
            total_xp: data.totalXP || 0,
            max_streak: data.maxStreak || 0,
            day_streak: data.dayStreak || 0,
            
            // Calibration metrics
            avg_confidence: calibration.avgConfidence || 0,
            avg_accuracy: calibration.avgAccuracy || 0,
            calibration_error: calibration.calibrationError || 0,
            calibration_status: calibration.status || 'unknown',
            
            // By challenge type (6 types)
            predict_attempted: predictAttempted,
            predict_correct: predictCorrect,
            pathway_attempted: pathwayAttempted,
            pathway_correct: pathwayCorrect,
            connector_attempted: connectorAttempted,
            connector_substantive: connectorSubstantive,
            whatif_attempted: whatifAttempted,
            whatif_correct: whatifCorrect,
            mapping_attempted: mappingAttempted,
            mapping_correct: mappingCorrect,
            integration_attempted: integrationAttempted,
            integration_correct: integrationCorrect,
            
            // By system (all 13)
            cardio_attempted: systemCounts.cardio.attempted,
            cardio_correct: systemCounts.cardio.correct,
            resp_attempted: systemCounts.resp.attempted,
            resp_correct: systemCounts.resp.correct,
            renal_attempted: systemCounts.renal.attempted,
            renal_correct: systemCounts.renal.correct,
            gi_attempted: systemCounts.gi.attempted,
            gi_correct: systemCounts.gi.correct,
            neuro_attempted: systemCounts.neuro.attempted,
            neuro_correct: systemCounts.neuro.correct,
            endo_attempted: systemCounts.endo.attempted,
            endo_correct: systemCounts.endo.correct,
            heme_attempted: systemCounts.heme.attempted,
            heme_correct: systemCounts.heme.correct,
            id_attempted: systemCounts.id.attempted,
            id_correct: systemCounts.id.correct,
            msk_attempted: systemCounts.msk.attempted,
            msk_correct: systemCounts.msk.correct,
            derm_attempted: systemCounts.derm.attempted,
            derm_correct: systemCounts.derm.correct,
            immune_attempted: systemCounts.immune.attempted,
            immune_correct: systemCounts.immune.correct,
            tox_attempted: systemCounts.tox.attempted,
            tox_correct: systemCounts.tox.correct,
            multi_attempted: systemCounts.multi.attempted,
            multi_correct: systemCounts.multi.correct
        };
        
        return summary;
    }

    function extractCalibrationData() {
        const data = getMechanismDxData();
        const calibrationHistory = data.calibrationHistory || [];
        
        return calibrationHistory.map(entry => ({
            type: 'CALIBRATION',
            study_id: getStudyId(),
            timestamp: entry.timestamp || new Date().toISOString(),
            challenge_type: entry.challengeType || '',
            challenge_id: entry.challengeId || '',
            system: entry.system || '',
            confidence: entry.confidence || 0,
            accuracy: entry.accuracy || 0,
            calibration_error: Math.abs((entry.confidence || 0) - (entry.accuracy || 0))
        }));
    }

    // ============================================
    // DATA SENDING FUNCTIONS
    // ============================================

    async function sendToGoogleSheets(payload) {
        if (!CONFIG.WEB_APP_URL || CONFIG.WEB_APP_URL.includes('YOUR_WEB_APP_URL')) {
            log('Web App URL not configured');
            return false;
        }

        try {
            const response = await fetch(CONFIG.WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            
            log('Data sent successfully', payload.type);
            return true;
        } catch (error) {
            log('Error sending data', error);
            return false;
        }
    }

    function sendWithBeacon(payload) {
        if (!CONFIG.WEB_APP_URL || CONFIG.WEB_APP_URL.includes('YOUR_WEB_APP_URL')) {
            return false;
        }

        try {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(CONFIG.WEB_APP_URL, blob);
            log('Beacon sent', payload.type);
            return true;
        } catch (error) {
            log('Beacon error', error);
            return false;
        }
    }

    // ============================================
    // PUBLIC API
    // ============================================

    async function sendSummaryData() {
        if (isExcludedUser()) {
            log('Excluded user, not sending data');
            return false;
        }

        const summaryData = extractSummaryData();
        return await sendToGoogleSheets(summaryData);
    }

    async function sendCalibrationData() {
        if (isExcludedUser()) {
            log('Excluded user, not sending data');
            return false;
        }

        const calibrationEntries = extractCalibrationData();
        let success = true;
        
        for (const entry of calibrationEntries) {
            const result = await sendToGoogleSheets(entry);
            if (!result) success = false;
        }
        
        return success;
    }

    async function sendAllData() {
        log('Sending all data...');
        const summaryResult = await sendSummaryData();
        const calibrationResult = await sendCalibrationData();
        return summaryResult && calibrationResult;
    }

    async function testConnection() {
        log('Testing connection...');
        
        const testPayload = {
            type: 'CONNECTION_TEST',
            timestamp: new Date().toISOString(),
            study_id: getStudyId(),
            message: 'MechanismDx connection test v2',
            systems_tracked: CONFIG.BODY_SYSTEMS.length
        };
        
        const result = await sendToGoogleSheets(testPayload);
        
        if (result) {
            log('Connection test successful!');
            alert('✅ Connection successful! Check your Google Sheet "Raw" tab for the test entry.\n\nNow tracking ' + CONFIG.BODY_SYSTEMS.length + ' body systems.');
        } else {
            log('Connection test failed');
            alert('❌ Connection failed. Check console for details.');
        }
        
        return result;
    }

    function exportToSheets() {
        // Manual export button handler
        sendAllData().then(success => {
            if (success) {
                alert('✅ Data exported to Google Sheets!');
            } else {
                alert('❌ Export failed. Please try again.');
            }
        });
    }
    
    function getSystemsList() {
        return CONFIG.BODY_SYSTEMS;
    }

    // ============================================
    // AUTO-SEND SETUP
    // ============================================

    function setupAutoSend() {
        // Send on page close/navigation
        window.addEventListener('beforeunload', () => {
            if (!isExcludedUser()) {
                const summaryData = extractSummaryData();
                sendWithBeacon(summaryData);
            }
        });

        // Send periodically while page is open
        setInterval(() => {
            if (!document.hidden && !isExcludedUser()) {
                sendSummaryData();
            }
        }, CONFIG.AUTO_SEND_INTERVAL);

        // Send when page becomes hidden (user switches tabs)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && !isExcludedUser()) {
                const summaryData = extractSummaryData();
                sendWithBeacon(summaryData);
            }
        });

        log('Auto-send configured');
    }

    // ============================================
    // INITIALIZATION
    // ============================================

    function init() {
        log('Initializing MechanismDx Research Data Collection v2...');
        log('Web App URL:', CONFIG.WEB_APP_URL);
        log('Tracking ' + CONFIG.BODY_SYSTEMS.length + ' body systems:', CONFIG.BODY_SYSTEMS);
        
        // Setup auto-send
        setupAutoSend();
        
        // Expose public API
        window.MechanismDxResearchCollection = {
            sendSummaryData,
            sendCalibrationData,
            sendAllData,
            testConnection,
            exportToSheets,
            getStudyId,
            isExcludedUser,
            getSystemsList
        };
        
        log('Ready! Use MechanismDxResearchCollection.testConnection() to verify setup.');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
