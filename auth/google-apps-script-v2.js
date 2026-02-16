/**
 * ============================================================
 * REASONDX REGISTRATION SYSTEM - Google Apps Script
 * ============================================================
 * 
 * SIMPLIFIED FLOW:
 * 1. User enters .edu email → verification code sent
 * 2. User verifies email → completes profile
 * 3. System auto-assigns Study ID (DX01-L### or DX01-F###)
 * 4. All users are anonymous (ID ↔ identity stored in secure key)
 * 
 * TWO TRACKS:
 * - Learners (L prefix): Students, residents, etc.
 * - Faculty (F prefix): Educators, physicians
 * 
 * SHEETS CREATED:
 * - Users: All registered users (ID, email, profile)
 * - Study_Key: ID ↔ identity mapping (KEEP SECURE)
 * - Learning_Data: Anonymous learning events
 * - Referrals: Referral code tracking
 * - Verification_Log: Email verification attempts
 * ============================================================
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date().toISOString();
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    switch(data.action) {
      case 'consent_verified':
        return logConsentVerified(ss, data, timestamp);
      
      case 'verification_sent':
        return logVerification(ss, data, timestamp);
      
      case 'email_verified':
        return logEmailVerified(ss, data, timestamp);
      
      case 'registration':
        return handleRegistration(ss, data, timestamp);
      
      case 'referral_used':
        return logReferralUsed(ss, data, timestamp);
      
      case 'learning_event':
        return logLearningEvent(ss, data, timestamp);
      
      case 'login':
        return handleLogin(ss, data, timestamp);
      
      case 'password_reset':
        return handlePasswordReset(ss, data, timestamp);
      
      default:
        // Legacy support
        if (data.study_id) {
          return logLearningEvent(ss, data, timestamp);
        }
        return jsonResponse({ success: false, error: 'Unknown action' });
    }
    
  } catch (error) {
    console.error('Error:', error);
    return jsonResponse({ success: false, error: error.toString() });
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    'ReasonDx Registration System Active\n' +
    'Tracks: Learner, Faculty\n' +
    'Email verification required (.edu)\n' +
    'Status: Running'
  );
}

// ============================================================
// CONSENT TRACKING
// ============================================================

function logConsentVerified(ss, data, timestamp) {
  const sheet = getOrCreateSheet(ss, 'Consent_Log', [
    'Timestamp', 'Consent_Code', 'IP_Hash', 'Status'
  ]);
  
  sheet.appendRow([timestamp, data.consent_code, '', 'verified']);
  
  return jsonResponse({ success: true });
}

// ============================================================
// VERIFICATION HANDLERS
// ============================================================

function logVerification(ss, data, timestamp) {
  const sheet = getOrCreateSheet(ss, 'Verification_Log', [
    'Timestamp', 'Email', 'Track', 'Status'
  ]);
  
  sheet.appendRow([timestamp, data.email, data.track, 'code_sent']);
  
  return jsonResponse({ success: true });
}

function logEmailVerified(ss, data, timestamp) {
  const sheet = ss.getSheetByName('Verification_Log');
  if (sheet) {
    sheet.appendRow([timestamp, data.email, data.track, 'verified']);
  }
  
  return jsonResponse({ success: true });
}

// ============================================================
// REGISTRATION HANDLER
// ============================================================

function handleRegistration(ss, data, timestamp) {
  // 1. Create user record
  const usersSheet = getOrCreateSheet(ss, 'Users', [
    'Timestamp', 'Study_ID', 'Track', 'Email', 'Role', 'Institution',
    'Consent_Code', 'Referral_Code_Used', 'Referral_Code_Generated', 'Status'
  ]);
  
  usersSheet.appendRow([
    timestamp,
    data.study_id,
    data.type, // 'learner' or 'faculty'
    data.email,
    data.role || '',
    data.institution || '',
    data.consent_code || '',
    data.referral_code || '',
    data.referral_code_generated || '',
    'active'
  ]);
  
  // 2. Add to Study_Key (ID ↔ identity mapping)
  const keySheet = getOrCreateSheet(ss, 'Study_Key', [
    'Timestamp', 'Study_ID', 'Full_Name', 'Email', 'Track', 'Role', 
    'Institution', 'Credentials', 'Expertise', 'Consent_Code', 'Notes'
  ]);
  
  keySheet.appendRow([
    timestamp,
    data.study_id,
    data.full_name || '',
    data.email,
    data.type,
    data.role || '',
    data.institution || '',
    data.credentials || '',
    data.expertise || '',
    data.consent_code || '',
    data.type === 'faculty' ? 'Faculty member' : 'Study participant'
  ]);
  
  // 3. If faculty, add to Faculty sheet
  if (data.type === 'faculty') {
    const facSheet = getOrCreateSheet(ss, 'Faculty', [
      'Timestamp', 'Faculty_ID', 'Full_Name', 'Credentials', 'Email',
      'Role', 'Years', 'Institution', 'Expertise', 'Website',
      'Referral_Code', 'Students_Referred', 'Status'
    ]);
    
    facSheet.appendRow([
      timestamp,
      data.study_id,
      data.full_name || '',
      data.credentials || '',
      data.email,
      data.role || '',
      data.years || '',
      data.institution || '',
      data.expertise || '',
      data.website || '',
      data.referral_code_generated || '',
      0, // students_referred starts at 0
      'active'
    ]);
  }
  
  return jsonResponse({ 
    success: true, 
    study_id: data.study_id 
  });
}

// ============================================================
// REFERRAL TRACKING
// ============================================================

function logReferralUsed(ss, data, timestamp) {
  const refSheet = getOrCreateSheet(ss, 'Referrals', [
    'Timestamp', 'Referral_Code', 'Referred_ID', 'Referrer_ID'
  ]);
  
  refSheet.appendRow([
    timestamp,
    data.referral_code,
    data.referred_id,
    '' // We'll look up the referrer
  ]);
  
  // Update referrer's count in Faculty sheet
  const facSheet = ss.getSheetByName('Faculty');
  if (facSheet) {
    const dataRange = facSheet.getDataRange();
    const values = dataRange.getValues();
    
    for (let i = 1; i < values.length; i++) {
      if (values[i][10] === data.referral_code) { // Referral_Code column
        const currentCount = values[i][11] || 0;
        facSheet.getRange(i + 1, 12).setValue(currentCount + 1);
        
        // Also update referrer ID in Referrals sheet
        refSheet.getRange(refSheet.getLastRow(), 4).setValue(values[i][1]); // Faculty_ID
        break;
      }
    }
  }
  
  return jsonResponse({ success: true });
}

// ============================================================
// LEARNING DATA (ANONYMOUS)
// ============================================================

function logLearningEvent(ss, data, timestamp) {
  const dataSheet = getOrCreateSheet(ss, 'Learning_Data', [
    'Timestamp', 'Study_ID', 'Session_ID', 'Event_Type',
    'Module_ID', 'Module_Name', 'Category',
    'Case_ID', 'Case_Name', 'Difficulty',
    'Time_Spent_Sec', 'Score', 'Is_Correct',
    'Quiz_Correct', 'Quiz_Total', 'Hints_Used'
  ]);
  
  dataSheet.appendRow([
    timestamp,
    data.study_id || 'UNKNOWN',
    data.session_id || '',
    data.event_type || '',
    data.module_id || '',
    data.module_name || '',
    data.category || '',
    data.case_id || '',
    data.case_name || '',
    data.difficulty || '',
    data.time_spent_seconds || '',
    data.score || '',
    data.is_correct || '',
    data.quiz_correct || '',
    data.quiz_total || '',
    data.hints_used || ''
  ]);
  
  return jsonResponse({ success: true });
}

// ============================================================
// AUTH HANDLERS (for production with real auth)
// ============================================================

function handleLogin(ss, data, timestamp) {
  // In production, verify credentials against your auth system
  // This logs login attempts
  const logSheet = getOrCreateSheet(ss, 'Auth_Log', [
    'Timestamp', 'Email', 'Action', 'Status'
  ]);
  
  logSheet.appendRow([timestamp, data.email, 'login', 'attempted']);
  
  return jsonResponse({ success: true });
}

function handlePasswordReset(ss, data, timestamp) {
  // Log password reset requests
  const logSheet = getOrCreateSheet(ss, 'Auth_Log', [
    'Timestamp', 'Email', 'Action', 'Status'
  ]);
  
  logSheet.appendRow([timestamp, data.email, 'password_reset', 'requested']);
  
  return jsonResponse({ success: true });
}

// ============================================================
// UTILITIES
// ============================================================

function getOrCreateSheet(ss, sheetName, headers) {
  let sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    if (headers && headers.length > 0) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
  }
  
  return sheet;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================================
// ADMIN FUNCTIONS (run manually from script editor)
// ============================================================

/**
 * Initialize all sheets with headers
 * Run this once after setting up the script
 */
function initializeSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  getOrCreateSheet(ss, 'Users', [
    'Timestamp', 'Study_ID', 'Track', 'Email', 'Role', 'Institution',
    'Referral_Code_Used', 'Referral_Code_Generated', 'Status'
  ]);
  
  getOrCreateSheet(ss, 'Study_Key', [
    'Timestamp', 'Study_ID', 'Full_Name', 'Email', 'Track', 'Role', 
    'Institution', 'Credentials', 'Expertise', 'Notes'
  ]);
  
  getOrCreateSheet(ss, 'Faculty', [
    'Timestamp', 'Faculty_ID', 'Full_Name', 'Credentials', 'Email',
    'Role', 'Years', 'Institution', 'Expertise', 'Website',
    'Referral_Code', 'Students_Referred', 'Status'
  ]);
  
  getOrCreateSheet(ss, 'Learning_Data', [
    'Timestamp', 'Study_ID', 'Session_ID', 'Event_Type',
    'Module_ID', 'Module_Name', 'Category',
    'Case_ID', 'Case_Name', 'Difficulty',
    'Time_Spent_Sec', 'Score', 'Is_Correct',
    'Quiz_Correct', 'Quiz_Total', 'Hints_Used'
  ]);
  
  getOrCreateSheet(ss, 'Referrals', [
    'Timestamp', 'Referral_Code', 'Referred_ID', 'Referrer_ID'
  ]);
  
  getOrCreateSheet(ss, 'Verification_Log', [
    'Timestamp', 'Email', 'Track', 'Status'
  ]);
  
  getOrCreateSheet(ss, 'Auth_Log', [
    'Timestamp', 'Email', 'Action', 'Status'
  ]);
  
  SpreadsheetApp.getUi().alert('All sheets initialized!');
}

/**
 * Generate study statistics
 */
function generateStats() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  const usersSheet = ss.getSheetByName('Users');
  const dataSheet = ss.getSheetByName('Learning_Data');
  const facSheet = ss.getSheetByName('Faculty');
  
  let learners = 0, faculty = 0, events = 0;
  
  if (usersSheet) {
    const values = usersSheet.getDataRange().getValues();
    for (let i = 1; i < values.length; i++) {
      if (values[i][2] === 'learner') learners++;
      if (values[i][2] === 'faculty') faculty++;
    }
  }
  
  if (dataSheet) {
    events = dataSheet.getLastRow() - 1;
  }
  
  SpreadsheetApp.getUi().alert(
    'Study Statistics\n\n' +
    'Learners: ' + learners + '\n' +
    'Faculty: ' + faculty + '\n' +
    'Learning Events: ' + events
  );
}

/**
 * Create menu
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('ReasonDx')
    .addItem('Initialize Sheets', 'initializeSheets')
    .addItem('Generate Stats', 'generateStats')
    .addToUi();
}
