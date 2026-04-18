/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

/**
 * RDX Session Manager - Anonymous Session Tracking
 * 
 * Tracks user progress without requiring login
 * Converts to authenticated session on email capture
 */

window.RDXSessionManager = (function() {
  'use strict';

  const STORAGE_KEYS = {
    SESSION_ID: 'rdx-session-id',
    CASE_HISTORY: 'rdx-case-history',
    USER_EMAIL: 'rdx-user-email',
    FIRST_VISIT: 'rdx-first-visit'
  };

  // Generate unique session ID
  function generateSessionId() {
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Initialize session
  function initSession() {
    let sessionId = localStorage.getItem(STORAGE_KEYS.SESSION_ID);
    
    if (!sessionId) {
      sessionId = generateSessionId();
      localStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
      localStorage.setItem(STORAGE_KEYS.FIRST_VISIT, new Date().toISOString());
      
      // Track new session
      trackEvent('session_started', {
        sessionId: sessionId,
        source: document.referrer || 'direct'
      });
    }
    
    return sessionId;
  }

  // Get current session
  function getSession() {
    return {
      sessionId: localStorage.getItem(STORAGE_KEYS.SESSION_ID),
      userEmail: localStorage.getItem(STORAGE_KEYS.USER_EMAIL),
      firstVisit: localStorage.getItem(STORAGE_KEYS.FIRST_VISIT),
      isAuthenticated: !!localStorage.getItem(STORAGE_KEYS.USER_EMAIL)
    };
  }

  // Track case completion
  function trackCaseCompletion(caseId, data) {
    const history = getCaseHistory();
    
    const caseRecord = {
      caseId: caseId,
      timestamp: new Date().toISOString(),
      score: data.score || null,
      timeSpent: data.timeSpent || null,
      ddxSubmitted: data.ddxSubmitted || [],
      correctDiagnosis: data.correctDiagnosis || null
    };
    
    history.cases.push(caseRecord);
    history.totalCases = history.cases.length;
    history.lastCaseId = caseId;
    history.lastActivityAt = caseRecord.timestamp;
    
    // Calculate average score
    const scores = history.cases.filter(c => c.score !== null).map(c => c.score);
    if (scores.length > 0) {
      history.averageScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    }
    
    localStorage.setItem(STORAGE_KEYS.CASE_HISTORY, JSON.stringify(history));
    
    // Track event
    trackEvent('case_completed', {
      caseId: caseId,
      casesCompleted: history.totalCases,
      score: data.score
    });
    
    return history;
  }

  // Get case history
  function getCaseHistory() {
    const stored = localStorage.getItem(STORAGE_KEYS.CASE_HISTORY);
    
    if (stored) {
      return JSON.parse(stored);
    }
    
    return {
      cases: [],
      totalCases: 0,
      averageScore: null,
      lastCaseId: null,
      lastActivityAt: null
    };
  }

  // Capture email and upgrade session
  async function captureEmail(email, source = 'unknown') {
    const session = getSession();
    const history = getCaseHistory();
    
    // Store email locally
    localStorage.setItem(STORAGE_KEYS.USER_EMAIL, email);
    
    // Send to Supabase
    try {
      const { data, error } = await supabase
        .from('user_sessions')
        .insert({
          session_id: session.sessionId,
          email: email,
          first_visit: session.firstVisit,
          cases_completed: history.totalCases,
          average_score: history.averageScore,
          last_case_id: history.lastCaseId,
          signup_source: source,
          case_history: history.cases
        });
      
      if (error) throw error;
      
      // Track conversion
      trackEvent('email_captured', {
        source: source,
        casesCompleted: history.totalCases,
        averageScore: history.averageScore
      });
      
      return { success: true, data };
    } catch (error) {
      console.error('Error capturing email:', error);
      return { success: false, error };
    }
  }

  // Check if email capture should trigger
  function shouldShowEmailCapture() {
    const session = getSession();
    const history = getCaseHistory();
    
    // Already has email
    if (session.isAuthenticated) return false;
    
    // Trigger points:
    // 1. After first case
    if (history.totalCases === 1) return true;
    
    // 2. After 3 cases (second chance)
    if (history.totalCases === 3) return true;
    
    // 3. Every 5 cases after that
    if (history.totalCases > 3 && history.totalCases % 5 === 0) return true;
    
    return false;
  }

  // Track events (send to Google Analytics)
  function trackEvent(eventName, params = {}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        ...params,
        session_id: getSession().sessionId
      });
    }
    
    // Also log to console in development
    if (window.location.hostname === 'localhost') {
      rdxLog('📊 Event:', eventName, params);
    }
  }

  // Public API
  return {
    init: initSession,
    getSession: getSession,
    getCaseHistory: getCaseHistory,
    trackCaseCompletion: trackCaseCompletion,
    captureEmail: captureEmail,
    shouldShowEmailCapture: shouldShowEmailCapture,
    trackEvent: trackEvent
  };
})();

// Auto-initialize on load
document.addEventListener('DOMContentLoaded', function() {
  window.RDXSessionManager.init();
});
