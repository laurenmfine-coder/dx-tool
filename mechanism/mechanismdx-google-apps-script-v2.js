/**
 * MechanismDx Research Data Collection - Google Apps Script v2
 * Updated: January 2026
 * 
 * Now includes all 13 body systems for comprehensive data collection
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this entire file
 * 4. Click "Deploy" > "New deployment"
 * 5. Select "Web app", set "Execute as: Me", "Who has access: Anyone"
 * 6. Copy the Web App URL
 * 7. Create these sheets: Summary_Data, Calibration_Detail, Cross_Platform, Raw
 */

// ============================================
// CONFIGURATION
// ============================================

const SHEET_NAMES = {
  SUMMARY: 'Summary_Data',
  CALIBRATION: 'Calibration_Detail',
  CROSS_PLATFORM: 'Cross_Platform',
  RAW: 'Raw'
};

// All 13 body systems tracked
const BODY_SYSTEMS = [
  'cardio', 'resp', 'renal', 'gi', 'neuro', 'endo', 'heme', 'id',
  'msk', 'derm', 'immune', 'tox', 'multi'
];

// ============================================
// MAIN HANDLER
// ============================================

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Always log to Raw sheet
    logToRaw(ss, data);
    
    // Route to appropriate sheet based on type
    switch (data.type) {
      case 'SUMMARY':
        logSummary(ss, data);
        break;
      case 'CALIBRATION':
        logCalibration(ss, data);
        break;
      case 'CONNECTION_TEST':
        // Just logged to Raw
        break;
      default:
        // Unknown type, just logged to Raw
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('MechanismDx Research Collection API v2 - POST data to this endpoint')
    .setMimeType(ContentService.MimeType.TEXT);
}

// ============================================
// SHEET LOGGING FUNCTIONS
// ============================================

function logToRaw(ss, data) {
  const sheet = ss.getSheetByName(SHEET_NAMES.RAW);
  if (!sheet) return;
  
  // Add header if empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'DataType', 'StudyID', 'RawJSON']);
  }
  
  sheet.appendRow([
    new Date().toISOString(),
    data.type || 'UNKNOWN',
    data.study_id || 'UNKNOWN',
    JSON.stringify(data)
  ]);
}

function logSummary(ss, data) {
  const sheet = ss.getSheetByName(SHEET_NAMES.SUMMARY);
  if (!sheet) return;
  
  // Check if header exists
  if (sheet.getLastRow() === 0) {
    // Build header with all 13 systems (53 columns total)
    const headers = [
      'export_date', 'study_id',
      'total_completed', 'total_mastered', 'total_learning', 'total_weak',
      'total_xp', 'max_streak', 'day_streak',
      'avg_confidence', 'avg_accuracy', 'calibration_error', 'calibration_status',
      // 6 challenge types
      'predict_attempted', 'predict_correct',
      'pathway_attempted', 'pathway_correct',
      'connector_attempted', 'connector_substantive',
      'whatif_attempted', 'whatif_correct',
      'mapping_attempted', 'mapping_correct',
      'integration_attempted', 'integration_correct',
      // 13 body systems (26 columns)
      'cardio_attempted', 'cardio_correct',
      'resp_attempted', 'resp_correct',
      'renal_attempted', 'renal_correct',
      'gi_attempted', 'gi_correct',
      'neuro_attempted', 'neuro_correct',
      'endo_attempted', 'endo_correct',
      'heme_attempted', 'heme_correct',
      'id_attempted', 'id_correct',
      'msk_attempted', 'msk_correct',
      'derm_attempted', 'derm_correct',
      'immune_attempted', 'immune_correct',
      'tox_attempted', 'tox_correct',
      'multi_attempted', 'multi_correct'
    ];
    sheet.appendRow(headers);
  }
  
  // Build row with all data
  const row = [
    data.export_date || new Date().toISOString(),
    data.study_id || 'UNKNOWN',
    data.total_completed || 0,
    data.total_mastered || 0,
    data.total_learning || 0,
    data.total_weak || 0,
    data.total_xp || 0,
    data.max_streak || 0,
    data.day_streak || 0,
    data.avg_confidence || 0,
    data.avg_accuracy || 0,
    data.calibration_error || 0,
    data.calibration_status || 'unknown',
    // Challenge types
    data.predict_attempted || 0,
    data.predict_correct || 0,
    data.pathway_attempted || 0,
    data.pathway_correct || 0,
    data.connector_attempted || 0,
    data.connector_substantive || 0,
    data.whatif_attempted || 0,
    data.whatif_correct || 0,
    data.mapping_attempted || 0,
    data.mapping_correct || 0,
    data.integration_attempted || 0,
    data.integration_correct || 0,
    // 13 body systems
    data.cardio_attempted || 0,
    data.cardio_correct || 0,
    data.resp_attempted || 0,
    data.resp_correct || 0,
    data.renal_attempted || 0,
    data.renal_correct || 0,
    data.gi_attempted || 0,
    data.gi_correct || 0,
    data.neuro_attempted || 0,
    data.neuro_correct || 0,
    data.endo_attempted || 0,
    data.endo_correct || 0,
    data.heme_attempted || 0,
    data.heme_correct || 0,
    data.id_attempted || 0,
    data.id_correct || 0,
    data.msk_attempted || 0,
    data.msk_correct || 0,
    data.derm_attempted || 0,
    data.derm_correct || 0,
    data.immune_attempted || 0,
    data.immune_correct || 0,
    data.tox_attempted || 0,
    data.tox_correct || 0,
    data.multi_attempted || 0,
    data.multi_correct || 0
  ];
  
  sheet.appendRow(row);
}

function logCalibration(ss, data) {
  const sheet = ss.getSheetByName(SHEET_NAMES.CALIBRATION);
  if (!sheet) return;
  
  // Add header if empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'study_id', 'timestamp', 'challenge_type', 'challenge_id', 
      'system', 'confidence', 'accuracy', 'calibration_error'
    ]);
  }
  
  sheet.appendRow([
    data.study_id || 'UNKNOWN',
    data.timestamp || new Date().toISOString(),
    data.challenge_type || '',
    data.challenge_id || '',
    data.system || '',
    data.confidence || 0,
    data.accuracy || 0,
    data.calibration_error || Math.abs((data.confidence || 0) - (data.accuracy || 0))
  ]);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Initialize sheets with headers - run this once manually
 */
function initializeSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Create Summary_Data sheet
  let summarySheet = ss.getSheetByName(SHEET_NAMES.SUMMARY);
  if (!summarySheet) {
    summarySheet = ss.insertSheet(SHEET_NAMES.SUMMARY);
  }
  
  // Create Calibration_Detail sheet
  let calibrationSheet = ss.getSheetByName(SHEET_NAMES.CALIBRATION);
  if (!calibrationSheet) {
    calibrationSheet = ss.insertSheet(SHEET_NAMES.CALIBRATION);
  }
  
  // Create Cross_Platform sheet
  let crossPlatformSheet = ss.getSheetByName(SHEET_NAMES.CROSS_PLATFORM);
  if (!crossPlatformSheet) {
    crossPlatformSheet = ss.insertSheet(SHEET_NAMES.CROSS_PLATFORM);
    // Add header for cross-platform analysis
    crossPlatformSheet.appendRow([
      'study_id',
      'mechanismdx_calibration_error',
      'reasondx_calibration_error',
      'correlation_notes'
    ]);
  }
  
  // Create Raw sheet
  let rawSheet = ss.getSheetByName(SHEET_NAMES.RAW);
  if (!rawSheet) {
    rawSheet = ss.insertSheet(SHEET_NAMES.RAW);
  }
  
  Logger.log('Sheets initialized successfully');
}

/**
 * Add formulas to Summary_Data sheet - run this once manually
 */
function addSummaryFormulas() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.SUMMARY);
  
  if (!sheet || sheet.getLastRow() < 2) {
    Logger.log('No data in Summary sheet yet');
    return;
  }
  
  // Find the last column with data
  const lastCol = sheet.getLastColumn();
  const formulaCol = lastCol + 2; // Leave a gap
  
  // Add calculated metrics header
  sheet.getRange(1, formulaCol).setValue('total_accuracy_rate');
  sheet.getRange(1, formulaCol + 1).setValue('system_coverage');
  
  // Add formulas for each row (starting from row 2)
  const lastRow = sheet.getLastRow();
  for (let row = 2; row <= lastRow; row++) {
    // Total accuracy rate formula
    sheet.getRange(row, formulaCol).setFormula(
      `=IF(C${row}>0, (D${row})/C${row}, 0)`
    );
    // System coverage (count of systems attempted > 0)
    sheet.getRange(row, formulaCol + 1).setFormula(
      `=COUNTIF(AA${row}:AZ${row},">0")/13`
    );
  }
  
  Logger.log('Formulas added to Summary sheet');
}

/**
 * Get summary statistics - useful for dashboard
 */
function getSummaryStats() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.SUMMARY);
  
  if (!sheet || sheet.getLastRow() < 2) {
    return { error: 'No data available' };
  }
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);
  
  // Calculate aggregate stats
  const uniqueStudents = [...new Set(rows.map(r => r[1]))].length;
  const totalChallenges = rows.reduce((sum, r) => sum + (r[2] || 0), 0);
  const avgCalibrationError = rows.reduce((sum, r) => sum + (r[11] || 0), 0) / rows.length;
  
  return {
    unique_students: uniqueStudents,
    total_challenges_completed: totalChallenges,
    average_calibration_error: avgCalibrationError.toFixed(3),
    total_records: rows.length,
    body_systems_tracked: BODY_SYSTEMS.length
  };
}
