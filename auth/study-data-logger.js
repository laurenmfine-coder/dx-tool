/**
 * DxSuite Study Data Logger
 * 
 * Logs anonymous learning data to Google Sheets for research purposes.
 * Data is linked to Study ID only — no PII (email, name) is logged.
 * 
 * SETUP:
 * 1. Create a Google Sheet with columns matching the data structure
 * 2. Go to Extensions → Apps Script
 * 3. Paste the Google Apps Script code (provided below)
 * 4. Deploy as Web App (access: Anyone)
 * 5. Copy the Web App URL and paste below
 */

// ============================================
// CONFIGURATION
// ============================================

// Your Google Apps Script Web App URL
const GOOGLE_SHEETS_WEBHOOK = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';

// Study configuration
const STUDY_CONFIG = {
    studyName: 'Clinical Reasoning Education Study',
    studyVersion: '1.0',
    startDate: '2026-01-01',
    endDate: '2026-06-30'
};

// ============================================
// DATA LOGGING FUNCTIONS
// ============================================

/**
 * Log an event to Google Sheets
 * @param {string} eventType - Type of event (see EVENT_TYPES)
 * @param {object} eventData - Additional data specific to the event
 */
async function logStudyEvent(eventType, eventData = {}) {
    // Get study ID from storage
    const studyId = getStudyId();
    if (!studyId) {
        console.warn('No study ID found - not logging event');
        return;
    }
    
    const payload = {
        // Core identifiers (anonymous)
        study_id: studyId,
        study_group: studyId.split('-')[1]?.charAt(0) || 'U', // A, B, C, or U for unknown
        
        // Event details
        event_type: eventType,
        timestamp: new Date().toISOString(),
        
        // Session info
        session_id: getSessionId(),
        
        // Spread additional event-specific data
        ...eventData
    };
    
    try {
        // Send to Google Sheets
        await fetch(GOOGLE_SHEETS_WEBHOOK, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        console.log('Study event logged:', eventType, payload);
    } catch (error) {
        console.error('Failed to log study event:', error);
        // Store locally for retry
        queueFailedEvent(payload);
    }
}

// ============================================
// EVENT TYPES & HELPERS
// ============================================

const EVENT_TYPES = {
    // Account events
    ACCOUNT_CREATED: 'account_created',
    LOGIN: 'login',
    LOGOUT: 'logout',
    
    // Learning events
    MODULE_STARTED: 'module_started',
    MODULE_COMPLETED: 'module_completed',
    MODULE_TIME_SPENT: 'module_time_spent',
    
    // Case events
    CASE_STARTED: 'case_started',
    CASE_COMPLETED: 'case_completed',
    CASE_QUESTION_ANSWERED: 'case_question_answered',
    CASE_DIAGNOSIS_SELECTED: 'case_diagnosis_selected',
    
    // Quiz events
    QUIZ_STARTED: 'quiz_started',
    QUIZ_COMPLETED: 'quiz_completed',
    QUIZ_QUESTION_ANSWERED: 'quiz_question_answered',
    
    // Tool usage
    CALCULATOR_USED: 'calculator_used',
    FLASHCARD_REVIEWED: 'flashcard_reviewed',
    AI_TUTOR_QUESTION: 'ai_tutor_question',
    
    // Progress events
    ACHIEVEMENT_EARNED: 'achievement_earned',
    STREAK_UPDATED: 'streak_updated'
};

// ============================================
// SPECIFIC LOGGING FUNCTIONS
// ============================================

/**
 * Log when a module is started
 */
function logModuleStarted(moduleId, moduleName, category) {
    logStudyEvent(EVENT_TYPES.MODULE_STARTED, {
        module_id: moduleId,
        module_name: moduleName,
        category: category
    });
}

/**
 * Log when a module is completed
 */
function logModuleCompleted(moduleId, moduleName, timeSpentSeconds, quizScore = null) {
    logStudyEvent(EVENT_TYPES.MODULE_COMPLETED, {
        module_id: moduleId,
        module_name: moduleName,
        time_spent_seconds: timeSpentSeconds,
        quiz_score: quizScore,
        quiz_score_percent: quizScore ? Math.round((quizScore.correct / quizScore.total) * 100) : null
    });
}

/**
 * Log when a clinical case is started
 */
function logCaseStarted(caseId, caseName, difficulty) {
    logStudyEvent(EVENT_TYPES.CASE_STARTED, {
        case_id: caseId,
        case_name: caseName,
        difficulty: difficulty
    });
}

/**
 * Log when a clinical case is completed
 */
function logCaseCompleted(caseId, caseName, result) {
    logStudyEvent(EVENT_TYPES.CASE_COMPLETED, {
        case_id: caseId,
        case_name: caseName,
        correct_diagnosis: result.correctDiagnosis,
        user_diagnosis: result.userDiagnosis,
        was_correct: result.wasCorrect,
        time_spent_seconds: result.timeSpent,
        hints_used: result.hintsUsed || 0,
        score: result.score
    });
}

/**
 * Log individual question answers (for detailed analysis)
 */
function logQuestionAnswered(context, questionId, isCorrect, timeToAnswer) {
    logStudyEvent(EVENT_TYPES.QUIZ_QUESTION_ANSWERED, {
        context: context, // 'module_quiz', 'case', 'quick_quiz', etc.
        question_id: questionId,
        is_correct: isCorrect,
        time_to_answer_seconds: timeToAnswer
    });
}

/**
 * Log AI tutor interactions
 */
function logAITutorQuestion(moduleId, questionText, responseLength) {
    logStudyEvent(EVENT_TYPES.AI_TUTOR_QUESTION, {
        module_id: moduleId,
        question_length: questionText.length,
        response_length: responseLength
        // Note: We don't log the actual question/response content to preserve anonymity
    });
}

// ============================================
// SESSION MANAGEMENT
// ============================================

function getStudyId() {
    // Check localStorage first
    let studyId = localStorage.getItem('dxsuite-study-id');
    
    // Also check if user is logged in with study account
    if (!studyId && window.DxAuth?.profile?.study_id) {
        studyId = window.DxAuth.profile.study_id;
    }
    
    return studyId;
}

function getSessionId() {
    let sessionId = sessionStorage.getItem('dxsuite-session-id');
    
    if (!sessionId) {
        sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
        sessionStorage.setItem('dxsuite-session-id', sessionId);
    }
    
    return sessionId;
}

// ============================================
// FAILED EVENT QUEUE (RETRY LOGIC)
// ============================================

function queueFailedEvent(payload) {
    const queue = JSON.parse(localStorage.getItem('dxsuite-event-queue') || '[]');
    queue.push(payload);
    localStorage.setItem('dxsuite-event-queue', JSON.stringify(queue));
}

async function retryFailedEvents() {
    const queue = JSON.parse(localStorage.getItem('dxsuite-event-queue') || '[]');
    
    if (queue.length === 0) return;
    
    const remaining = [];
    
    for (const payload of queue) {
        try {
            await fetch(GOOGLE_SHEETS_WEBHOOK, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch {
            remaining.push(payload);
        }
    }
    
    localStorage.setItem('dxsuite-event-queue', JSON.stringify(remaining));
}

// Retry failed events on page load
document.addEventListener('DOMContentLoaded', retryFailedEvents);

// ============================================
// TIME TRACKING
// ============================================

class TimeTracker {
    constructor() {
        this.startTime = null;
        this.moduleId = null;
        this.totalTime = 0;
        this.isActive = true;
        
        // Track visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pause();
            } else {
                this.resume();
            }
        });
    }
    
    start(moduleId) {
        this.moduleId = moduleId;
        this.startTime = Date.now();
        this.totalTime = 0;
        this.isActive = true;
    }
    
    pause() {
        if (this.isActive && this.startTime) {
            this.totalTime += (Date.now() - this.startTime) / 1000;
            this.isActive = false;
        }
    }
    
    resume() {
        if (!this.isActive) {
            this.startTime = Date.now();
            this.isActive = true;
        }
    }
    
    stop() {
        this.pause();
        return Math.round(this.totalTime);
    }
    
    getElapsed() {
        let elapsed = this.totalTime;
        if (this.isActive && this.startTime) {
            elapsed += (Date.now() - this.startTime) / 1000;
        }
        return Math.round(elapsed);
    }
}

// Global time tracker instance
const studyTimeTracker = new TimeTracker();

// ============================================
// EXPORT
// ============================================

window.DxStudyLogger = {
    // Core logging
    logEvent: logStudyEvent,
    EVENT_TYPES,
    
    // Specific loggers
    logModuleStarted,
    logModuleCompleted,
    logCaseStarted,
    logCaseCompleted,
    logQuestionAnswered,
    logAITutorQuestion,
    
    // Time tracking
    timeTracker: studyTimeTracker,
    
    // Utilities
    getStudyId,
    getSessionId,
    
    // Config
    STUDY_CONFIG
};


// ============================================
// GOOGLE APPS SCRIPT CODE
// ============================================
/*
 * INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Delete default code and paste this
 * 4. Click Deploy → New Deployment
 * 5. Type: Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Deploy and copy the URL
 *
 * SHEET STRUCTURE (create these columns in Row 1):
 * A: timestamp
 * B: study_id
 * C: study_group
 * D: session_id
 * E: event_type
 * F: module_id
 * G: module_name
 * H: category
 * I: case_id
 * J: case_name
 * K: difficulty
 * L: time_spent_seconds
 * M: quiz_score_correct
 * N: quiz_score_total
 * O: quiz_score_percent
 * P: is_correct
 * Q: was_correct
 * R: user_diagnosis
 * S: correct_diagnosis
 * T: hints_used
 * U: score
 * V: context
 * W: question_id
 * X: question_length
 * Y: response_length

// === PASTE THIS IN GOOGLE APPS SCRIPT ===

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append row with data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.study_id || '',
      data.study_group || '',
      data.session_id || '',
      data.event_type || '',
      data.module_id || '',
      data.module_name || '',
      data.category || '',
      data.case_id || '',
      data.case_name || '',
      data.difficulty || '',
      data.time_spent_seconds || '',
      data.quiz_score?.correct || '',
      data.quiz_score?.total || '',
      data.quiz_score_percent || '',
      data.is_correct || '',
      data.was_correct || '',
      data.user_diagnosis || '',
      data.correct_diagnosis || '',
      data.hints_used || '',
      data.score || '',
      data.context || '',
      data.question_id || '',
      data.question_length || '',
      data.response_length || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('DxSuite Study Data Logger is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// === END GOOGLE APPS SCRIPT ===

*/
