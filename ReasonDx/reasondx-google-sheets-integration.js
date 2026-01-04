/**
 * ReasonDx Research Data Collection - Google Sheets Integration
 * 
 * This module sends research data to Google Sheets via a Google Apps Script web app.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Paste the Google Apps Script code (provided separately)
 * 4. Deploy as Web App
 * 5. Copy the Web App URL and paste it below
 */

(function() {
    'use strict';

    // ============================================================
    // CONFIGURATION - UPDATE THIS URL AFTER SETUP
    // ============================================================
    const GOOGLE_SHEETS_WEB_APP_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

    // ============================================================
    // ACCOUNT EXCLUSION - These accounts don't have data collected
    // ============================================================
    const EXCLUDED_PREFIXES = [
        'OWNER',   // Platform owner accounts
        'ADMIN',   // Administrator accounts
        'HELPER',  // Helper/assistant accounts
        'TEST',    // Test accounts
        'DEMO',    // Demo accounts
        'DEV',     // Developer accounts
        'DEBUG'    // Debug accounts
    ];

    // Accounts that ARE included (for research data)
    // - Regular student accounts
    // - FAC (Facilitator) accounts
    // - EXPERT accounts

    /**
     * Check if data should be collected for this user
     */
    function shouldCollectData(userId) {
        if (!userId) return false;
        const upperUserId = userId.toUpperCase();
        
        // Check if user ID starts with any excluded prefix
        for (const prefix of EXCLUDED_PREFIXES) {
            if (upperUserId.startsWith(prefix)) {
                console.log(`[Research] Data collection EXCLUDED for ${userId} (${prefix} account)`);
                return false;
            }
        }
        
        console.log(`[Research] Data collection ENABLED for ${userId}`);
        return true;
    }

    /**
     * Determine user role based on ID prefix
     */
    function getUserRole(userId) {
        if (!userId) return 'student';
        const upperUserId = userId.toUpperCase();
        
        if (upperUserId.startsWith('FAC')) return 'facilitator';
        if (upperUserId.startsWith('EXPERT')) return 'expert';
        return 'student';
    }

    /**
     * Generate a unique session ID
     */
    function generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    /**
     * Send data to Google Sheets
     */
    async function sendToGoogleSheets(data) {
        if (GOOGLE_SHEETS_WEB_APP_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
            console.warn('[Research] Google Sheets URL not configured. Data not sent.');
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

            console.log('[Research] Data sent to Google Sheets');
            return { success: true };
        } catch (error) {
            console.error('[Research] Failed to send data:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Collect and send session data
     */
    async function collectSessionData(sessionData) {
        const userId = sessionData.studentId || sessionData.userId;
        
        // Check if we should collect data for this user
        if (!shouldCollectData(userId)) {
            return { collected: false, reason: 'excluded_account' };
        }

        // Prepare the data payload
        const payload = {
            timestamp: new Date().toISOString(),
            sessionId: sessionData.sessionId || generateSessionId(),
            studentId: userId,
            role: getUserRole(userId),
            sessionType: sessionData.sessionType || 'voluntary',
            caseId: sessionData.caseId || '',
            caseTitle: sessionData.caseTitle || '',
            mode: sessionData.mode || 'individual',
            groupId: sessionData.groupId || '',
            startTime: sessionData.startTime || '',
            endTime: sessionData.endTime || new Date().toISOString(),
            durationMinutes: sessionData.durationMinutes || 0,
            interactionCount: sessionData.interactionCount || 0,
            finalDiagnosis: sessionData.finalDiagnosis || '',
            finalConfidence: sessionData.finalConfidence || 0,
            
            // JSON data fields (stringified)
            rpfsData: JSON.stringify(sessionData.rpfsData || {}),
            crdaData: JSON.stringify(sessionData.crdaData || {}),
            assessmentData: JSON.stringify(sessionData.assessmentData || {}),
            lscsData: JSON.stringify(sessionData.lscsData || {}),
            fullSessionJSON: JSON.stringify(sessionData)
        };

        // Send to Google Sheets
        const result = await sendToGoogleSheets(payload);
        
        return {
            collected: true,
            success: result.success,
            sessionId: payload.sessionId
        };
    }

    /**
     * Collect LSCS (Learner State Check-In) data separately
     */
    async function collectLSCSData(lscsData) {
        const userId = lscsData.studentId || lscsData.userId;
        
        if (!shouldCollectData(userId)) {
            return { collected: false, reason: 'excluded_account' };
        }

        const payload = {
            timestamp: new Date().toISOString(),
            dataType: 'LSCS',
            sessionId: lscsData.sessionId || generateSessionId(),
            studentId: userId,
            role: getUserRole(userId),
            energyLevel: lscsData.energyLevel || 0,
            stressLevel: lscsData.stressLevel || 0,
            confidenceLevel: lscsData.confidenceLevel || 0,
            checkInTime: lscsData.checkInTime || new Date().toISOString()
        };

        return await sendToGoogleSheets(payload);
    }

    /**
     * Test the connection to Google Sheets
     */
    async function testConnection() {
        const testData = {
            timestamp: new Date().toISOString(),
            dataType: 'CONNECTION_TEST',
            sessionId: 'test_' + Date.now(),
            studentId: 'TEST_CONNECTION',
            message: 'This is a test entry - can be deleted'
        };

        console.log('[Research] Testing Google Sheets connection...');
        const result = await sendToGoogleSheets(testData);
        
        if (result.success) {
            console.log('[Research] ✓ Connection test successful! Check your Google Sheet.');
        } else {
            console.error('[Research] ✗ Connection test failed:', result.error);
        }
        
        return result;
    }

    // ============================================================
    // EXPOSE GLOBAL API
    // ============================================================
    window.ResearchDataCollection = {
        // Core functions
        collectSessionData: collectSessionData,
        collectLSCSData: collectLSCSData,
        shouldCollectData: shouldCollectData,
        getUserRole: getUserRole,
        testConnection: testConnection,
        
        // Configuration
        setGoogleSheetsUrl: function(url) {
            // Note: This won't persist across page reloads
            // For permanent config, update the URL in the code
            console.log('[Research] Google Sheets URL updated (temporary)');
        },
        
        // Constants
        EXCLUDED_PREFIXES: EXCLUDED_PREFIXES
    };

    console.log('[Research] Google Sheets Data Collection module loaded');
    console.log('[Research] Excluded account prefixes:', EXCLUDED_PREFIXES.join(', '));

})();
