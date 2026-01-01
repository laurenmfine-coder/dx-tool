/**
 * MechanismDx Research Data Collection - Google Sheets Integration
 * 
 * This module automatically sends research data to Google Sheets.
 * Add this script to your MechanismDx platform.
 * 
 * SETUP:
 * 1. Deploy the Google Apps Script (mechanismdx-google-apps-script.js)
 * 2. Copy the Web App URL
 * 3. Paste the URL below where it says 'YOUR_WEB_APP_URL_HERE'
 * 4. Upload this file to your MechanismDx GitHub repo
 * 
 * Version 1.0 | January 2026
 */

(function() {
    'use strict';

    // ============================================================
    // CONFIGURATION - UPDATE THIS URL AFTER DEPLOYING APPS SCRIPT
    // ============================================================
    const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxJQRYCzmH8VJSHaA2-q6JvykqtYDlfgDOQzmMDqM5jWMwRehFkHjFb5mBuVZ6J1_5H/exec';

    // ============================================================
    // ACCOUNT EXCLUSION - These accounts don't have data collected
    // ============================================================
    const EXCLUDED_PREFIXES = [
        'OWNER',   // Platform owner accounts
        'ADMIN',   // Administrator accounts
        'TEST',    // Test accounts
        'DEMO',    // Demo accounts
        'DEV'      // Developer accounts
    ];

    /**
     * Check if data should be collected for this user
     */
    function shouldCollectData(studyId) {
        if (!studyId) return false;
        const upperStudyId = studyId.toUpperCase();
        
        for (const prefix of EXCLUDED_PREFIXES) {
            if (upperStudyId.startsWith(prefix)) {
                console.log(`[MechanismDx Research] Data collection EXCLUDED for ${studyId}`);
                return false;
            }
        }
        return true;
    }

    /**
     * Send data to Google Sheets
     */
    async function sendToGoogleSheets(data) {
        if (GOOGLE_SHEETS_WEB_APP_URL === 'https://script.google.com/macros/s/AKfycbxJQRYCzmH8VJSHaA2-q6JvykqtYDlfgDOQzmMDqM5jWMwRehFkHjFb5mBuVZ6J1_5H/exec') {
            console.warn('[MechanismDx Research] Google Sheets URL not configured. Data not sent.');
            return { success: false, error: 'URL not configured' };
        }

        try {
            const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            console.log('[MechanismDx Research] Data sent to Google Sheets');
            return { success: true };
        } catch (error) {
            console.error('[MechanismDx Research] Failed to send data:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get current research state from localStorage
     */
    function getResearchState() {
        const saved = localStorage.getItem('mechanismdx_research_v1');
        return saved ? JSON.parse(saved) : null;
    }

    /**
     * Collect and send summary data to Google Sheets
     */
    async function sendSummaryData() {
        const state = getResearchState();
        if (!state) {
            console.log('[MechanismDx Research] No data to send');
            return { success: false, error: 'No data' };
        }

        if (!shouldCollectData(state.user_id)) {
            return { success: false, error: 'Excluded account' };
        }

        // Build summary payload matching the Google Sheet columns
        const challengeTypes = state.challengeTypePerformance || {};
        const systems = state.systemPerformance || {};
        const calibration = state.calibrationData || [];
        
        // Calculate calibration metrics
        let avgConfidence = 0, avgAccuracy = 0;
        if (calibration.length > 0) {
            avgConfidence = Math.round(calibration.reduce((a, b) => a + b.confidence, 0) / calibration.length);
            avgAccuracy = Math.round(calibration.reduce((a, b) => a + b.accuracy, 0) / calibration.length);
        }
        const calibrationError = Math.abs(avgConfidence - avgAccuracy);
        const calibrationStatus = calibrationError < 10 ? 'well_calibrated' : 
                                  avgConfidence > avgAccuracy ? 'overconfident' : 'underconfident';

        // Count connections by mastery level
        const connections = state.connections ? Object.values(state.connections) : [];
        const mastered = connections.filter(c => c.mastery_level === 'mastered').length;
        const learning = connections.filter(c => c.mastery_level === 'learning').length;
        const weak = connections.filter(c => c.mastery_level === 'weak').length;

        const payload = {
            dataType: 'SUMMARY',
            export_date: new Date().toISOString(),
            study_id: state.user_id || '',
            total_completed: connections.length,
            total_mastered: mastered,
            total_learning: learning,
            total_weak: weak,
            total_xp: state.xp || 0,
            max_streak: state.maxStreak || 0,
            day_streak: state.dayStreak || 0,
            avg_confidence: avgConfidence,
            avg_accuracy: avgAccuracy,
            calibration_error: calibrationError,
            calibration_status: calibrationStatus,
            predict_attempted: challengeTypes.predict?.attempted || 0,
            predict_correct: challengeTypes.predict?.correct || 0,
            pathway_attempted: challengeTypes.pathway?.attempted || 0,
            pathway_correct: challengeTypes.pathway?.correct || 0,
            connector_attempted: challengeTypes.connector?.attempted || 0,
            connector_substantive: challengeTypes.connector?.substantive || 0,
            whatif_attempted: challengeTypes.whatif?.attempted || 0,
            whatif_correct: challengeTypes.whatif?.correct || 0,
            cardio_attempted: systems.cardio?.attempted || 0,
            cardio_correct: systems.cardio?.correct || 0,
            resp_attempted: systems.resp?.attempted || 0,
            resp_correct: systems.resp?.correct || 0,
            renal_attempted: systems.renal?.attempted || 0,
            renal_correct: systems.renal?.correct || 0,
            gi_attempted: systems.gi?.attempted || 0,
            gi_correct: systems.gi?.correct || 0,
            neuro_attempted: systems.neuro?.attempted || 0,
            neuro_correct: systems.neuro?.correct || 0,
            endo_attempted: systems.endo?.attempted || 0,
            endo_correct: systems.endo?.correct || 0,
            heme_attempted: systems.heme?.attempted || 0,
            heme_correct: systems.heme?.correct || 0,
            id_attempted: systems.id?.attempted || 0,
            id_correct: systems.id?.correct || 0
        };

        return await sendToGoogleSheets(payload);
    }

    /**
     * Send calibration detail data
     */
    async function sendCalibrationData() {
        const state = getResearchState();
        if (!state || !state.calibrationData || state.calibrationData.length === 0) {
            return { success: false, error: 'No calibration data' };
        }

        if (!shouldCollectData(state.user_id)) {
            return { success: false, error: 'Excluded account' };
        }

        const payload = {
            dataType: 'CALIBRATION',
            study_id: state.user_id || '',
            calibration_points: state.calibrationData
        };

        return await sendToGoogleSheets(payload);
    }

    /**
     * Test connection to Google Sheets
     */
    async function testConnection() {
        const testData = {
            dataType: 'CONNECTION_TEST',
            timestamp: new Date().toISOString(),
            study_id: 'TEST_CONNECTION',
            message: 'MechanismDx connection test successful'
        };

        console.log('[MechanismDx Research] Testing connection...');
        const result = await sendToGoogleSheets(testData);
        
        if (result.success) {
            console.log('[MechanismDx Research] ✓ Connection test sent! Check your Google Sheet Raw tab.');
        } else {
            console.error('[MechanismDx Research] ✗ Connection test failed:', result.error);
        }
        
        return result;
    }

    /**
     * Auto-send data when user leaves the page or periodically
     */
    function setupAutoSend() {
        // Send data when user leaves page
        window.addEventListener('beforeunload', function() {
            const state = getResearchState();
            if (state && state.user_id && shouldCollectData(state.user_id)) {
                // Use sendBeacon for reliable delivery on page close
                if (navigator.sendBeacon && GOOGLE_SHEETS_WEB_APP_URL !== 'https://script.google.com/macros/s/AKfycbxJQRYCzmH8VJSHaA2-q6JvykqtYDlfgDOQzmMDqM5jWMwRehFkHjFb5mBuVZ6J1_5H/exec') {
                    const payload = JSON.stringify({
                        dataType: 'SESSION_END',
                        study_id: state.user_id,
                        timestamp: new Date().toISOString()
                    });
                    navigator.sendBeacon(GOOGLE_SHEETS_WEB_APP_URL, payload);
                }
            }
        });

        // Also send summary data every 5 minutes if user is active
        setInterval(function() {
            const state = getResearchState();
            if (state && state.user_id && document.visibilityState === 'visible') {
                sendSummaryData();
            }
        }, 5 * 60 * 1000); // 5 minutes
    }

    // ============================================================
    // EXPOSE GLOBAL API
    // ============================================================
    window.MechanismDxResearchCollection = {
        sendSummary: sendSummaryData,
        sendCalibration: sendCalibrationData,
        testConnection: testConnection,
        shouldCollectData: shouldCollectData,
        
        // Manual trigger for export button
        exportToSheets: async function() {
            console.log('[MechanismDx Research] Exporting to Google Sheets...');
            const summaryResult = await sendSummaryData();
            const calibrationResult = await sendCalibrationData();
            
            if (summaryResult.success && calibrationResult.success) {
                alert('Data exported to Google Sheets successfully!');
            } else if (summaryResult.success) {
                alert('Summary data exported. Calibration data may have issues.');
            } else {
                alert('Export failed. Check console for details.');
            }
            
            return { summary: summaryResult, calibration: calibrationResult };
        }
    };

    // Setup auto-send on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupAutoSend);
    } else {
        setupAutoSend();
    }

    console.log('[MechanismDx Research] Google Sheets integration loaded');
    console.log('[MechanismDx Research] Test with: MechanismDxResearchCollection.testConnection()');

})();
