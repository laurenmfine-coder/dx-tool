/**
 * ====================================================================
 * REASONDX GOOGLE APPS SCRIPT - Data Collection Receiver
 * ====================================================================
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Create a new Google Sheet named "ReasonDx Research Data"
 * 
 * 2. Create these sheet tabs (worksheets):
 *    - "Sessions" (for main session data)
 *    - "LSCS" (for learner state check-ins)
 *    - "Raw" (for all raw incoming data)
 * 
 * 3. In your Google Sheet, go to: Extensions → Apps Script
 * 
 * 4. Delete any existing code and paste ALL of this code
 * 
 * 5. Click the disk icon to Save (or Ctrl+S)
 * 
 * 6. Click "Deploy" → "New deployment"
 * 
 * 7. Click the gear icon next to "Select type" → Choose "Web app"
 * 
 * 8. Set these options:
 *    - Description: "ReasonDx Data Collection"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 
 * 9. Click "Deploy"
 * 
 * 10. Click "Authorize access" and allow permissions
 * 
 * 11. Copy the "Web app URL" - this is what you'll put in ReasonDx
 * 
 * ====================================================================
 */

// ====================================================================
// MAIN FUNCTIONS
// ====================================================================

/**
 * Handle POST requests from ReasonDx
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Log to Raw sheet (everything)
    logToRawSheet(data);
    
    // Route to appropriate sheet based on data type
    if (data.dataType === 'LSCS') {
      logToLSCSSheet(data);
    } else if (data.dataType === 'CONNECTION_TEST') {
      // Just log to Raw, don't add to other sheets
      Logger.log('Connection test received');
    } else {
      // Default: session data
      logToSessionsSheet(data);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, timestamp: new Date().toISOString() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error processing request: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'ReasonDx Data Collection is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ====================================================================
// SHEET LOGGING FUNCTIONS
// ====================================================================

/**
 * Log all incoming data to Raw sheet
 */
function logToRawSheet(data) {
  const sheet = getOrCreateSheet('Raw', ['Timestamp', 'DataType', 'SessionID', 'StudentID', 'RawJSON']);
  
  sheet.appendRow([
    new Date().toISOString(),
    data.dataType || 'SESSION',
    data.sessionId || '',
    data.studentId || '',
    JSON.stringify(data)
  ]);
}

/**
 * Log session data to Sessions sheet
 */
function logToSessionsSheet(data) {
  const headers = [
    'Timestamp',
    'SessionID',
    'StudentID', 
    'Role',
    'SessionType',
    'CaseID',
    'CaseTitle',
    'Mode',
    'GroupID',
    'StartTime',
    'EndTime',
    'DurationMinutes',
    'InteractionCount',
    'FinalDiagnosis',
    'FinalConfidence',
    'RPFSData',
    'CRDAData',
    'AssessmentData',
    'LSCSData'
  ];
  
  const sheet = getOrCreateSheet('Sessions', headers);
  
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.sessionId || '',
    data.studentId || '',
    data.role || '',
    data.sessionType || '',
    data.caseId || '',
    data.caseTitle || '',
    data.mode || '',
    data.groupId || '',
    data.startTime || '',
    data.endTime || '',
    data.durationMinutes || 0,
    data.interactionCount || 0,
    data.finalDiagnosis || '',
    data.finalConfidence || 0,
    data.rpfsData || '',
    data.crdaData || '',
    data.assessmentData || '',
    data.lscsData || ''
  ]);
}

/**
 * Log LSCS data to LSCS sheet
 */
function logToLSCSSheet(data) {
  const headers = [
    'Timestamp',
    'SessionID',
    'StudentID',
    'Role',
    'EnergyLevel',
    'StressLevel', 
    'ConfidenceLevel',
    'CheckInTime'
  ];
  
  const sheet = getOrCreateSheet('LSCS', headers);
  
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.sessionId || '',
    data.studentId || '',
    data.role || '',
    data.energyLevel || 0,
    data.stressLevel || 0,
    data.confidenceLevel || 0,
    data.checkInTime || ''
  ]);
}

// ====================================================================
// HELPER FUNCTIONS
// ====================================================================

/**
 * Get or create a sheet with headers
 */
function getOrCreateSheet(sheetName, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    // Add headers
    if (headers && headers.length > 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    Logger.log('Created new sheet: ' + sheetName);
  }
  
  return sheet;
}

/**
 * Initialize all sheets (run this manually once)
 */
function initializeSheets() {
  getOrCreateSheet('Sessions', [
    'Timestamp', 'SessionID', 'StudentID', 'Role', 'SessionType',
    'CaseID', 'CaseTitle', 'Mode', 'GroupID', 'StartTime', 'EndTime',
    'DurationMinutes', 'InteractionCount', 'FinalDiagnosis', 'FinalConfidence',
    'RPFSData', 'CRDAData', 'AssessmentData', 'LSCSData'
  ]);
  
  getOrCreateSheet('LSCS', [
    'Timestamp', 'SessionID', 'StudentID', 'Role',
    'EnergyLevel', 'StressLevel', 'ConfidenceLevel', 'CheckInTime'
  ]);
  
  getOrCreateSheet('Raw', [
    'Timestamp', 'DataType', 'SessionID', 'StudentID', 'RawJSON'
  ]);
  
  Logger.log('All sheets initialized!');
}

/**
 * Test function - add a sample row
 */
function testAddRow() {
  const testData = {
    timestamp: new Date().toISOString(),
    sessionId: 'test_' + Date.now(),
    studentId: 'TEST_USER',
    role: 'student',
    sessionType: 'test',
    caseId: 'TEST_CASE',
    caseTitle: 'Test Case Title',
    mode: 'individual',
    durationMinutes: 5,
    finalDiagnosis: 'Test Diagnosis',
    finalConfidence: 85
  };
  
  logToSessionsSheet(testData);
  logToRawSheet(testData);
  Logger.log('Test row added!');
}
