// ============================================================
// REASONDX CLINICAL SKILLS CASES MODULE
// For use with Standardized Patients in Clinical Skills Assessments
// ============================================================
//
// This module provides:
// 1. A dedicated section for Clinical Skills / SP cases
// 2. Single-user Assessment Mode (for summative assessments)
// 3. Easy data collection and export for grading
// 4. Integration with Small Group Mode for formative learning
// ============================================================

(function() {
    'use strict';
    
    // ============================================================
    // CLINICAL SKILLS CASE LIBRARY
    // ============================================================
    
    window.ClinicalSkillsCases = {
        // Case library - minimal data since SP provides the actual encounter
        cases: [
            // EXAMPLE CASES - Replace/add your actual SP cases here
            {
                id: 'cs_chest_pain_01',
                title: 'Chest Pain Evaluation',
                category: 'Cardiovascular',
                difficulty: 'intermediate',
                doorNote: {
                    name: 'Mr. Johnson',
                    age: 58,
                    gender: 'M',
                    chiefComplaint: 'Chest pain for 2 hours',
                    vitalSigns: {
                        BP: '158/92',
                        HR: '88',
                        RR: '18',
                        Temp: '98.6°F',
                        SpO2: '97%'
                    }
                },
                correctDiagnosis: 'Acute Coronary Syndrome',
                mustNotMissDiagnoses: ['STEMI', 'NSTEMI', 'Unstable Angina', 'Aortic Dissection', 'Pulmonary Embolism'],
                expectedFindings: {
                    history: ['onset', 'character', 'radiation', 'associated_symptoms', 'risk_factors', 'medications'],
                    physical: ['cardiac_auscultation', 'lung_sounds', 'peripheral_pulses', 'JVD_assessment'],
                    workup: ['ECG', 'Troponin', 'CXR', 'BMP']
                },
                learningObjectives: [
                    'Recognize ACS presentation',
                    'Identify cardiac risk factors',
                    'Prioritize time-sensitive workup'
                ],
                timeLimit: 15, // minutes for SP encounter
                assessmentWeight: { history: 30, physical: 25, differential: 25, workup: 20 }
            },
            {
                id: 'cs_abdominal_pain_01',
                title: 'Acute Abdominal Pain',
                category: 'Gastrointestinal',
                difficulty: 'intermediate',
                doorNote: {
                    name: 'Ms. Garcia',
                    age: 34,
                    gender: 'F',
                    chiefComplaint: 'Right lower quadrant pain for 1 day',
                    vitalSigns: {
                        BP: '124/78',
                        HR: '96',
                        RR: '16',
                        Temp: '100.8°F',
                        SpO2: '99%'
                    }
                },
                correctDiagnosis: 'Acute Appendicitis',
                mustNotMissDiagnoses: ['Appendicitis', 'Ectopic Pregnancy', 'Ovarian Torsion', 'Bowel Obstruction'],
                expectedFindings: {
                    history: ['onset', 'migration', 'nausea_vomiting', 'last_menstrual_period', 'sexual_history'],
                    physical: ['abdominal_palpation', 'rebound_tenderness', 'rovsing_sign', 'psoas_sign', 'pelvic_exam'],
                    workup: ['CBC', 'CMP', 'Urinalysis', 'Pregnancy_test', 'CT_abdomen']
                },
                learningObjectives: [
                    'Perform focused abdominal exam',
                    'Consider gynecologic causes in females',
                    'Recognize peritoneal signs'
                ],
                timeLimit: 15,
                assessmentWeight: { history: 30, physical: 30, differential: 20, workup: 20 }
            },
            {
                id: 'cs_headache_01',
                title: 'Severe Headache',
                category: 'Neurological',
                difficulty: 'intermediate',
                doorNote: {
                    name: 'Mr. Thompson',
                    age: 45,
                    gender: 'M',
                    chiefComplaint: 'Worst headache of my life, sudden onset',
                    vitalSigns: {
                        BP: '168/98',
                        HR: '72',
                        RR: '14',
                        Temp: '98.9°F',
                        SpO2: '98%'
                    }
                },
                correctDiagnosis: 'Subarachnoid Hemorrhage',
                mustNotMissDiagnoses: ['Subarachnoid Hemorrhage', 'Meningitis', 'Cerebral Venous Thrombosis', 'Hypertensive Emergency'],
                expectedFindings: {
                    history: ['onset_timing', 'severity', 'neck_stiffness', 'photophobia', 'previous_headaches', 'anticoagulation'],
                    physical: ['neurologic_exam', 'fundoscopy', 'neck_rigidity', 'kernig_brudzinski'],
                    workup: ['CT_head_noncontrast', 'Lumbar_puncture', 'CTA_head']
                },
                learningObjectives: [
                    'Recognize thunderclap headache red flags',
                    'Perform focused neurologic exam',
                    'Understand SAH workup pathway'
                ],
                timeLimit: 15,
                assessmentWeight: { history: 25, physical: 30, differential: 25, workup: 20 }
            },
            {
                id: 'cs_shortness_breath_01',
                title: 'Acute Dyspnea',
                category: 'Pulmonary',
                difficulty: 'intermediate',
                doorNote: {
                    name: 'Mrs. Williams',
                    age: 67,
                    gender: 'F',
                    chiefComplaint: 'Shortness of breath for 3 days, worsening',
                    vitalSigns: {
                        BP: '142/88',
                        HR: '110',
                        RR: '24',
                        Temp: '99.2°F',
                        SpO2: '91%'
                    }
                },
                correctDiagnosis: 'Heart Failure Exacerbation',
                mustNotMissDiagnoses: ['Pulmonary Embolism', 'Acute MI', 'Pneumonia', 'COPD Exacerbation', 'Pneumothorax'],
                expectedFindings: {
                    history: ['onset', 'orthopnea', 'PND', 'leg_swelling', 'chest_pain', 'medication_compliance'],
                    physical: ['lung_auscultation', 'cardiac_exam', 'JVD', 'peripheral_edema', 'hepatojugular_reflux'],
                    workup: ['CXR', 'BNP', 'ECG', 'Troponin', 'BMP']
                },
                learningObjectives: [
                    'Differentiate cardiac vs pulmonary dyspnea',
                    'Recognize heart failure signs',
                    'Appropriate initial workup for dyspnea'
                ],
                timeLimit: 15,
                assessmentWeight: { history: 30, physical: 30, differential: 20, workup: 20 }
            }
        ],
        
        // Get all CS cases
        getAllCases: function() {
            return this.cases;
        },
        
        // Get case by ID
        getCase: function(caseId) {
            return this.cases.find(c => c.id === caseId);
        },
        
        // Get cases by category
        getCasesByCategory: function(category) {
            return this.cases.filter(c => c.category === category);
        },
        
        // Get unique categories
        getCategories: function() {
            return [...new Set(this.cases.map(c => c.category))];
        },
        
        // Add a new case
        addCase: function(caseData) {
            if (!caseData.id) {
                caseData.id = 'cs_custom_' + Date.now();
            }
            this.cases.push(caseData);
            this.saveCasesToStorage();
            return caseData.id;
        },
        
        // Save to localStorage
        saveCasesToStorage: function() {
            localStorage.setItem('reasondx_cs_cases', JSON.stringify(this.cases));
        },
        
        // Load from localStorage
        loadCasesFromStorage: function() {
            const saved = localStorage.getItem('reasondx_cs_cases');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    // Merge with defaults, keeping custom cases
                    const defaultIds = this.cases.map(c => c.id);
                    const customCases = parsed.filter(c => !defaultIds.includes(c.id));
                    this.cases = [...this.cases, ...customCases];
                } catch (e) {
                    console.error('Error loading CS cases:', e);
                }
            }
        }
    };
    
    // Load any saved custom cases on init
    window.ClinicalSkillsCases.loadCasesFromStorage();
    
    // ============================================================
    // SINGLE-USER ASSESSMENT MODE
    // ============================================================
    
    window.AssessmentMode = {
        enabled: false,
        sessionId: null,
        caseId: null,
        studentId: null,
        startTime: null,
        
        // Submissions at each stage (like Small Group but no group phases)
        submissions: {
            initialDifferential: { data: null, confidence: null, timestamp: null },
            spEncounterStart: null,
            spEncounterEnd: null,
            historyFindings: { data: null, timestamp: null },
            physicalFindings: { data: null, timestamp: null },
            revisedDifferential: { data: null, confidence: null, timestamp: null },
            workupOrders: { data: null, timestamp: null },
            caseSummary: { data: null, timestamp: null },
            assessmentPlan: { data: null, confidence: null, timestamp: null },
            finalDiagnosis: { data: null, confidence: null, timestamp: null }
        },
        
        // Timing data
        timing: {
            totalTime: 0,
            stageTimings: {}
        },
        
        // SP encounter findings entered by student
        spFindings: {
            hpiSummary: '',
            historyDetails: {
                chiefComplaint: '',
                hpiElements: '',
                pmh: '',
                medications: '',
                allergies: '',
                socialHistory: '',
                familyHistory: '',
                ros: ''
            },
            physicalExam: {
                vitalSigns: { bp: '', hr: '', rr: '', temp: '', spo2: '', weight: '' },
                general: '',
                heent: '',
                neck: '',
                cardiovascular: '',
                respiratory: '',
                abdominal: '',
                extremities: '',
                neurological: '',
                skin: '',
                psychiatric: '',
                other: ''
            }
        }
    };
    
    const AM = window.AssessmentMode;
    
    // ============================================================
    // ASSESSMENT MODE FUNCTIONS
    // ============================================================
    
    window.startAssessmentMode = function(config = {}) {
        AM.enabled = true;
        AM.sessionId = config.sessionId || `assess_${Date.now()}`;
        AM.caseId = config.caseId;
        AM.studentId = config.studentId || localStorage.getItem('reasondx_display_name') || prompt('Enter your Student ID:');
        AM.startTime = Date.now();
        
        // Reset all submissions
        Object.keys(AM.submissions).forEach(key => {
            if (typeof AM.submissions[key] === 'object' && AM.submissions[key] !== null) {
                AM.submissions[key] = { data: null, confidence: null, timestamp: null };
            } else {
                AM.submissions[key] = null;
            }
        });
        
        // Reset SP findings
        AM.spFindings = {
            hpiSummary: '',
            historyDetails: {
                chiefComplaint: '', hpiElements: '', pmh: '', medications: '',
                allergies: '', socialHistory: '', familyHistory: '', ros: ''
            },
            physicalExam: {
                vitalSigns: { bp: '', hr: '', rr: '', temp: '', spo2: '', weight: '' },
                general: '', heent: '', neck: '', cardiovascular: '', respiratory: '',
                abdominal: '', extremities: '', neurological: '', skin: '', psychiatric: '', other: ''
            }
        };
        
        AM.timing = { totalTime: 0, stageTimings: {}, stageStartTime: Date.now() };
        
        console.log('Assessment Mode started:', AM.sessionId, AM.studentId);
        
        // Log start
        if (typeof rpfsLogInteraction === 'function') {
            rpfsLogInteraction('assessment_started', 'assessment', {
                sessionId: AM.sessionId,
                caseId: AM.caseId,
                studentId: AM.studentId
            });
        }
        
        return AM.sessionId;
    };
    
    window.endAssessmentMode = function() {
        if (!AM.enabled) return null;
        
        AM.timing.totalTime = Date.now() - AM.startTime;
        
        const report = generateAssessmentReport();
        
        // Log end
        if (typeof rpfsLogInteraction === 'function') {
            rpfsLogInteraction('assessment_completed', 'assessment', {
                sessionId: AM.sessionId,
                totalTimeMs: AM.timing.totalTime
            });
        }
        
        AM.enabled = false;
        
        return report;
    };
    
    // Record stage timing
    window.recordAssessmentStageTime = function(stageName) {
        if (!AM.enabled) return;
        
        const now = Date.now();
        if (AM.timing.stageStartTime) {
            AM.timing.stageTimings[stageName] = now - AM.timing.stageStartTime;
        }
        AM.timing.stageStartTime = now;
    };
    
    // Submit functions for each stage
    window.submitAssessmentDifferential = function(differential, confidence, isRevised = false) {
        if (!AM.enabled) return;
        
        const key = isRevised ? 'revisedDifferential' : 'initialDifferential';
        AM.submissions[key] = {
            data: JSON.parse(JSON.stringify(differential)),
            confidence: confidence,
            timestamp: Date.now()
        };
        
        recordAssessmentStageTime(key);
    };
    
    window.submitAssessmentSPFindings = function(findings) {
        if (!AM.enabled) return;
        
        AM.spFindings = JSON.parse(JSON.stringify(findings));
        AM.submissions.historyFindings = {
            data: findings.historyDetails,
            timestamp: Date.now()
        };
        AM.submissions.physicalFindings = {
            data: findings.physicalExam,
            timestamp: Date.now()
        };
        
        recordAssessmentStageTime('spFindings');
    };
    
    window.submitAssessmentWorkup = function(workupOrders) {
        if (!AM.enabled) return;
        
        AM.submissions.workupOrders = {
            data: JSON.parse(JSON.stringify(workupOrders)),
            timestamp: Date.now()
        };
        
        recordAssessmentStageTime('workup');
    };
    
    window.submitAssessmentSummary = function(summary) {
        if (!AM.enabled) return;
        
        AM.submissions.caseSummary = {
            data: summary,
            timestamp: Date.now()
        };
        
        recordAssessmentStageTime('caseSummary');
    };
    
    window.submitAssessmentPlan = function(assessmentPlan, finalDiagnosis, confidence) {
        if (!AM.enabled) return;
        
        AM.submissions.assessmentPlan = {
            data: assessmentPlan,
            timestamp: Date.now()
        };
        AM.submissions.finalDiagnosis = {
            data: finalDiagnosis,
            confidence: confidence,
            timestamp: Date.now()
        };
        
        recordAssessmentStageTime('assessmentPlan');
    };
    
    // ============================================================
    // ASSESSMENT REPORT GENERATION
    // ============================================================
    
    function generateAssessmentReport() {
        const caseData = window.ClinicalSkillsCases.getCase(AM.caseId);
        
        const report = {
            // Metadata
            meta: {
                sessionId: AM.sessionId,
                studentId: AM.studentId,
                caseId: AM.caseId,
                caseTitle: caseData?.title || 'Unknown Case',
                startTime: new Date(AM.startTime).toISOString(),
                endTime: new Date().toISOString(),
                totalTimeMinutes: Math.round(AM.timing.totalTime / 60000 * 10) / 10
            },
            
            // All submissions
            submissions: AM.submissions,
            
            // SP Findings entered
            spFindings: AM.spFindings,
            
            // Timing breakdown
            timing: {
                total: AM.timing.totalTime,
                byStage: AM.timing.stageTimings
            },
            
            // Scoring (if case has expected findings)
            scoring: caseData ? calculateAssessmentScore(caseData) : null,
            
            // Confidence trajectory
            confidenceTrajectory: {
                initial: AM.submissions.initialDifferential?.confidence,
                revised: AM.submissions.revisedDifferential?.confidence,
                final: AM.submissions.finalDiagnosis?.confidence,
                calibration: calculateConfidenceCalibration(caseData)
            }
        };
        
        return report;
    }
    
    function calculateAssessmentScore(caseData) {
        const scores = {
            differential: { earned: 0, possible: 0, details: [] },
            history: { earned: 0, possible: 0, details: [] },
            physical: { earned: 0, possible: 0, details: [] },
            workup: { earned: 0, possible: 0, details: [] },
            mustNotMiss: { earned: 0, possible: 0, details: [] },
            total: { earned: 0, possible: 100 }
        };
        
        // Score must-not-miss diagnoses
        if (caseData.mustNotMissDiagnoses && AM.submissions.initialDifferential?.data) {
            const studentDx = AM.submissions.initialDifferential.data.map(d => 
                (d.name || d).toLowerCase()
            );
            
            caseData.mustNotMissDiagnoses.forEach(mnm => {
                const found = studentDx.some(sd => 
                    sd.includes(mnm.toLowerCase()) || mnm.toLowerCase().includes(sd)
                );
                scores.mustNotMiss.possible += 5;
                if (found) {
                    scores.mustNotMiss.earned += 5;
                    scores.mustNotMiss.details.push({ item: mnm, found: true });
                } else {
                    scores.mustNotMiss.details.push({ item: mnm, found: false });
                }
            });
        }
        
        // Score based on weights
        const weights = caseData.assessmentWeight || { history: 25, physical: 25, differential: 25, workup: 25 };
        
        // For now, provide structure - actual scoring would compare to expected findings
        scores.total.earned = scores.mustNotMiss.earned; // Placeholder
        
        return scores;
    }
    
    function calculateConfidenceCalibration(caseData) {
        if (!caseData || !AM.submissions.finalDiagnosis) return null;
        
        const finalDx = AM.submissions.finalDiagnosis.data;
        const finalConf = AM.submissions.finalDiagnosis.confidence;
        const correctDx = caseData.correctDiagnosis;
        
        const isCorrect = finalDx && correctDx && 
            finalDx.toLowerCase().includes(correctDx.toLowerCase());
        
        return {
            finalConfidence: finalConf,
            wasCorrect: isCorrect,
            calibrationError: isCorrect ? (100 - finalConf) : finalConf,
            interpretation: isCorrect 
                ? (finalConf >= 70 ? 'Well calibrated' : 'Under-confident')
                : (finalConf >= 70 ? 'Over-confident' : 'Appropriately uncertain')
        };
    }
    
    // ============================================================
    // DATA EXPORT FUNCTIONS
    // ============================================================
    
    window.exportAssessmentData = function(format = 'json') {
        const report = AM.enabled ? generateAssessmentReport() : null;
        
        if (!report) {
            console.error('No active assessment to export');
            return null;
        }
        
        if (format === 'json') {
            return report;
        }
        
        if (format === 'csv') {
            return convertReportToCSV(report);
        }
        
        return report;
    };
    
    window.downloadAssessmentReport = function(format = 'json') {
        const report = exportAssessmentData(format);
        if (!report) return;
        
        let blob, filename;
        
        if (format === 'csv') {
            blob = new Blob([report], { type: 'text/csv' });
            filename = `assessment_${AM.sessionId}_${AM.studentId}.csv`;
        } else {
            blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
            filename = `assessment_${AM.sessionId}_${AM.studentId}.json`;
        }
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    };
    
    function convertReportToCSV(report) {
        const rows = [];
        
        // Header row
        rows.push([
            'Session ID', 'Student ID', 'Case ID', 'Case Title',
            'Total Time (min)', 'Initial Confidence', 'Final Confidence',
            'Final Diagnosis', 'Correct Diagnosis', 'Was Correct',
            'Calibration', 'Must-Not-Miss Score'
        ].join(','));
        
        // Data row
        rows.push([
            report.meta.sessionId,
            report.meta.studentId,
            report.meta.caseId,
            `"${report.meta.caseTitle}"`,
            report.meta.totalTimeMinutes,
            report.confidenceTrajectory.initial || '',
            report.confidenceTrajectory.final || '',
            `"${report.submissions.finalDiagnosis?.data || ''}"`,
            `"${window.ClinicalSkillsCases.getCase(report.meta.caseId)?.correctDiagnosis || ''}"`,
            report.confidenceTrajectory.calibration?.wasCorrect || '',
            report.confidenceTrajectory.calibration?.interpretation || '',
            report.scoring?.mustNotMiss?.earned || 0
        ].join(','));
        
        return rows.join('\n');
    };
    
    // Batch export for multiple assessments
    window.exportAllAssessments = function() {
        const saved = localStorage.getItem('reasondx_assessment_history') || '[]';
        return JSON.parse(saved);
    };
    
    // Save completed assessment to history
    window.saveAssessmentToHistory = function(report) {
        const history = JSON.parse(localStorage.getItem('reasondx_assessment_history') || '[]');
        history.push(report);
        localStorage.setItem('reasondx_assessment_history', JSON.stringify(history));
    };
    
    // ============================================================
    // ASSESSMENT SUBMISSION SYSTEM FOR GRADING
    // ============================================================
    
    // Configuration - SET THESE FOR YOUR INSTITUTION
    window.AssessmentSubmissionConfig = {
        // Google Form URL (create a form with a single "Long Answer" field)
        googleFormUrl: '', // e.g., 'https://docs.google.com/forms/d/e/XXXXX/viewform'
        googleFormFieldId: '', // e.g., 'entry.123456789'
        
        // LMS submission instructions
        lmsName: 'Canvas', // or 'Blackboard', 'Moodle', etc.
        lmsAssignmentUrl: '', // Direct link to assignment
        
        // Email submission (backup)
        submissionEmail: '', // e.g., 'clinicalskills@university.edu'
        
        // Verification code prefix (for anti-fraud)
        verificationPrefix: 'RDX'
    };
    
    // Generate a verification code that's hard to fake
    function generateVerificationCode(studentId, sessionId, timestamp) {
        const data = `${studentId}-${sessionId}-${timestamp}`;
        // Simple hash - in production you'd use a proper hash
        let hash = 0;
        for (let i = 0; i < data.length; i++) {
            const char = data.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return `${AssessmentSubmissionConfig.verificationPrefix}-${Math.abs(hash).toString(36).toUpperCase()}`;
    }
    
    // Generate submission package with verification
    window.generateSubmissionPackage = function() {
        if (!AM.enabled && !AM.sessionId) {
            console.error('No active assessment');
            return null;
        }
        
        const report = generateAssessmentReport();
        const verificationCode = generateVerificationCode(
            AM.studentId, 
            AM.sessionId, 
            AM.startTime
        );
        
        const submissionPackage = {
            // Header for easy identification
            _header: {
                type: 'ReasonDx Assessment Submission',
                version: '3.0',
                verificationCode: verificationCode,
                submittedAt: new Date().toISOString()
            },
            
            // Student identification
            student: {
                id: AM.studentId,
                sessionId: AM.sessionId
            },
            
            // Case information
            case: {
                id: AM.caseId,
                title: report.meta.caseTitle,
                startTime: report.meta.startTime,
                endTime: report.meta.endTime,
                totalMinutes: report.meta.totalTimeMinutes
            },
            
            // Core assessment data
            differential: {
                initial: AM.submissions.initialDifferential?.data?.map(d => d.name || d) || [],
                initialConfidence: AM.submissions.initialDifferential?.confidence,
                revised: AM.submissions.revisedDifferential?.data?.map(d => d.name || d) || [],
                revisedConfidence: AM.submissions.revisedDifferential?.confidence,
                final: AM.submissions.finalDiagnosis?.data,
                finalConfidence: AM.submissions.finalDiagnosis?.confidence
            },
            
            // SP encounter documentation
            spFindings: AM.spFindings,
            
            // Scoring
            scoring: report.scoring,
            calibration: report.confidenceTrajectory.calibration,
            
            // Full data (for detailed review)
            fullReport: report,
            
            // Verification
            _verification: {
                code: verificationCode,
                studentId: AM.studentId,
                timestamp: AM.startTime,
                checksum: btoa(AM.studentId + AM.sessionId).slice(0, 12)
            }
        };
        
        return submissionPackage;
    };
    
    // Render the submission screen
    window.renderAssessmentSubmissionScreen = function() {
        const pkg = generateSubmissionPackage();
        if (!pkg) return '<div class="p-8 text-center text-red-600">No assessment data found</div>';
        
        const jsonData = JSON.stringify(pkg, null, 2);
        const compactJson = JSON.stringify(pkg);
        const config = AssessmentSubmissionConfig;
        
        return `
            <div class="fade-in max-w-4xl mx-auto">
                <div class="card p-6 mb-6">
                    <div class="flex items-center gap-4 mb-4">
                        <span class="text-4xl">✅</span>
                        <div>
                            <h2 class="text-2xl font-bold text-gray-800">Assessment Complete!</h2>
                            <p class="text-gray-600">Submit your assessment for grading</p>
                        </div>
                    </div>
                    
                    <!-- Verification Code Box -->
                    <div class="bg-green-50 border-2 border-green-300 rounded-lg p-4 mb-6">
                        <div class="text-sm text-green-700 mb-1">Your Verification Code:</div>
                        <div class="text-2xl font-mono font-bold text-green-800">${pkg._header.verificationCode}</div>
                        <div class="text-xs text-green-600 mt-1">Keep this code - it proves you completed this assessment</div>
                    </div>
                    
                    <!-- Summary -->
                    <div class="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div class="bg-gray-50 rounded p-3">
                            <span class="text-gray-500">Student ID:</span>
                            <span class="font-semibold ml-2">${pkg.student.id}</span>
                        </div>
                        <div class="bg-gray-50 rounded p-3">
                            <span class="text-gray-500">Case:</span>
                            <span class="font-semibold ml-2">${pkg.case.title}</span>
                        </div>
                        <div class="bg-gray-50 rounded p-3">
                            <span class="text-gray-500">Time:</span>
                            <span class="font-semibold ml-2">${pkg.case.totalMinutes} minutes</span>
                        </div>
                        <div class="bg-gray-50 rounded p-3">
                            <span class="text-gray-500">Final Diagnosis:</span>
                            <span class="font-semibold ml-2">${pkg.differential.final || 'Not entered'}</span>
                        </div>
                    </div>
                </div>
                
                <!-- Submission Options -->
                <div class="card p-6 mb-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-4">📤 Submit Your Assessment</h3>
                    
                    <div class="space-y-4">
                        <!-- Option 1: Download & Upload to LMS -->
                        <div class="border rounded-lg p-4">
                            <div class="flex items-center justify-between mb-2">
                                <div>
                                    <div class="font-semibold text-gray-800">Option 1: Download & Upload to ${config.lmsName || 'LMS'}</div>
                                    <div class="text-sm text-gray-600">Download your submission file and upload to the course assignment</div>
                                </div>
                                <button onclick="downloadSubmissionFile()" class="btn-primary px-4 py-2">
                                    Download .json
                                </button>
                            </div>
                            ${config.lmsAssignmentUrl ? `
                                <a href="${config.lmsAssignmentUrl}" target="_blank" class="text-sm text-blue-600 hover:underline">
                                    → Open ${config.lmsName} Assignment
                                </a>
                            ` : ''}
                        </div>
                        
                        <!-- Option 2: Copy to Clipboard -->
                        <div class="border rounded-lg p-4">
                            <div class="flex items-center justify-between mb-2">
                                <div>
                                    <div class="font-semibold text-gray-800">Option 2: Copy & Paste</div>
                                    <div class="text-sm text-gray-600">Copy submission data and paste into assignment text box</div>
                                </div>
                                <button onclick="copySubmissionToClipboard()" class="btn-secondary px-4 py-2" id="copy-btn">
                                    Copy to Clipboard
                                </button>
                            </div>
                        </div>
                        
                        ${config.googleFormUrl ? `
                        <!-- Option 3: Google Form -->
                        <div class="border rounded-lg p-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="font-semibold text-gray-800">Option 3: Submit via Google Form</div>
                                    <div class="text-sm text-gray-600">Opens form with your data pre-filled</div>
                                </div>
                                <button onclick="submitToGoogleForm()" class="btn-secondary px-4 py-2">
                                    Open Form
                                </button>
                            </div>
                        </div>
                        ` : ''}
                        
                        ${config.submissionEmail ? `
                        <!-- Option 4: Email -->
                        <div class="border rounded-lg p-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="font-semibold text-gray-800">Option 4: Email Submission</div>
                                    <div class="text-sm text-gray-600">Send to ${config.submissionEmail}</div>
                                </div>
                                <button onclick="emailSubmission()" class="btn-secondary px-4 py-2">
                                    Compose Email
                                </button>
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
                
                <!-- Expandable Raw Data -->
                <div class="card p-6">
                    <details>
                        <summary class="cursor-pointer font-semibold text-gray-700 mb-2">
                            View Raw Submission Data
                        </summary>
                        <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-auto max-h-64 mt-2">${escapeHtml(jsonData)}</pre>
                    </details>
                </div>
                
                <!-- Hidden data for functions -->
                <textarea id="submission-data" class="hidden">${escapeHtml(compactJson)}</textarea>
                
                <div class="mt-6 text-center">
                    <button onclick="goToScreen('menu')" class="btn-secondary px-6 py-2">
                        Return to Main Menu
                    </button>
                </div>
            </div>
        `;
    };
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    window.downloadSubmissionFile = function() {
        const pkg = generateSubmissionPackage();
        if (!pkg) return;
        
        const blob = new Blob([JSON.stringify(pkg, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ReasonDx_Assessment_${pkg.student.id}_${pkg.case.id}_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        // Save to local history as well
        saveAssessmentToHistory(pkg.fullReport);
    };
    
    window.copySubmissionToClipboard = function() {
        const dataEl = document.getElementById('submission-data');
        if (!dataEl) return;
        
        navigator.clipboard.writeText(dataEl.value).then(() => {
            const btn = document.getElementById('copy-btn');
            if (btn) {
                btn.textContent = '✓ Copied!';
                btn.classList.add('bg-green-100', 'text-green-700');
                setTimeout(() => {
                    btn.textContent = 'Copy to Clipboard';
                    btn.classList.remove('bg-green-100', 'text-green-700');
                }, 2000);
            }
        });
    };
    
    window.submitToGoogleForm = function() {
        const config = AssessmentSubmissionConfig;
        if (!config.googleFormUrl || !config.googleFormFieldId) {
            alert('Google Form not configured');
            return;
        }
        
        const pkg = generateSubmissionPackage();
        const data = encodeURIComponent(JSON.stringify(pkg));
        const url = `${config.googleFormUrl}?${config.googleFormFieldId}=${data}`;
        window.open(url, '_blank');
    };
    
    window.emailSubmission = function() {
        const config = AssessmentSubmissionConfig;
        if (!config.submissionEmail) {
            alert('Email submission not configured');
            return;
        }
        
        const pkg = generateSubmissionPackage();
        const subject = encodeURIComponent(`ReasonDx Assessment: ${pkg.student.id} - ${pkg.case.title}`);
        const body = encodeURIComponent(`Verification Code: ${pkg._header.verificationCode}\n\nStudent ID: ${pkg.student.id}\nCase: ${pkg.case.title}\nTime: ${pkg.case.totalMinutes} minutes\n\n--- Full Data ---\n${JSON.stringify(pkg, null, 2)}`);
        
        window.location.href = `mailto:${config.submissionEmail}?subject=${subject}&body=${body}`;
    };
    
    // ============================================================
    // FACULTY GRADING DASHBOARD
    // ============================================================
    
    window.renderFacultyGradingDashboard = function() {
        return `
            <div class="fade-in max-w-5xl mx-auto">
                <div class="card p-6 mb-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-4">
                            <span class="text-4xl">📊</span>
                            <div>
                                <h2 class="text-2xl font-bold text-gray-800">Faculty Grading Dashboard</h2>
                                <p class="text-gray-600">Import and review student assessment submissions</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Import Section -->
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <h3 class="font-semibold text-blue-800 mb-2">Import Student Submissions</h3>
                        <div class="flex gap-4 items-center">
                            <input type="file" id="submission-import" accept=".json" multiple 
                                   onchange="importStudentSubmissions(this.files)"
                                   class="text-sm">
                            <span class="text-sm text-blue-600">Or paste JSON below:</span>
                        </div>
                        <textarea id="paste-submission" placeholder="Paste student submission JSON here..."
                                  class="w-full mt-2 p-2 border rounded text-sm" rows="3"></textarea>
                        <button onclick="importPastedSubmission()" class="btn-secondary mt-2 px-4 py-1 text-sm">
                            Import Pasted Data
                        </button>
                    </div>
                    
                    <!-- Imported Submissions Table -->
                    <div id="imported-submissions">
                        <h3 class="font-semibold text-gray-800 mb-2">Imported Submissions</h3>
                        <div id="submissions-table" class="text-sm">
                            <p class="text-gray-500 italic">No submissions imported yet</p>
                        </div>
                    </div>
                    
                    <!-- Export Options -->
                    <div class="mt-6 pt-4 border-t flex gap-4">
                        <button onclick="exportGradingCSV()" class="btn-secondary px-4 py-2 text-sm">
                            Export All as CSV
                        </button>
                        <button onclick="exportGradingJSON()" class="btn-secondary px-4 py-2 text-sm">
                            Export All as JSON
                        </button>
                    </div>
                </div>
            </div>
        `;
    };
    
    // Store imported submissions
    window.importedSubmissions = [];
    
    window.importStudentSubmissions = function(files) {
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    if (data._header?.type === 'ReasonDx Assessment Submission') {
                        window.importedSubmissions.push(data);
                        renderSubmissionsTable();
                    } else {
                        alert('Invalid submission file: ' + file.name);
                    }
                } catch (err) {
                    alert('Error parsing file: ' + file.name);
                }
            };
            reader.readAsText(file);
        });
    };
    
    window.importPastedSubmission = function() {
        const textarea = document.getElementById('paste-submission');
        if (!textarea || !textarea.value.trim()) return;
        
        try {
            const data = JSON.parse(textarea.value);
            if (data._header?.type === 'ReasonDx Assessment Submission') {
                window.importedSubmissions.push(data);
                textarea.value = '';
                renderSubmissionsTable();
            } else {
                alert('Invalid submission data');
            }
        } catch (err) {
            alert('Error parsing JSON: ' + err.message);
        }
    };
    
    function renderSubmissionsTable() {
        const container = document.getElementById('submissions-table');
        if (!container) return;
        
        if (window.importedSubmissions.length === 0) {
            container.innerHTML = '<p class="text-gray-500 italic">No submissions imported yet</p>';
            return;
        }
        
        container.innerHTML = `
            <table class="w-full border-collapse">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border p-2 text-left">Student ID</th>
                        <th class="border p-2 text-left">Case</th>
                        <th class="border p-2 text-center">Time</th>
                        <th class="border p-2 text-left">Final Dx</th>
                        <th class="border p-2 text-center">Confidence</th>
                        <th class="border p-2 text-center">MNM Score</th>
                        <th class="border p-2 text-center">Verified</th>
                        <th class="border p-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${window.importedSubmissions.map((sub, idx) => `
                        <tr class="hover:bg-gray-50">
                            <td class="border p-2 font-mono">${sub.student?.id || 'N/A'}</td>
                            <td class="border p-2">${sub.case?.title || 'N/A'}</td>
                            <td class="border p-2 text-center">${sub.case?.totalMinutes || 0} min</td>
                            <td class="border p-2">${sub.differential?.final || '-'}</td>
                            <td class="border p-2 text-center">${sub.differential?.finalConfidence || '-'}%</td>
                            <td class="border p-2 text-center">${sub.scoring?.mustNotMiss?.earned || 0}/${sub.scoring?.mustNotMiss?.possible || 0}</td>
                            <td class="border p-2 text-center">
                                <span class="text-green-600" title="${sub._header?.verificationCode}">✓</span>
                            </td>
                            <td class="border p-2 text-center">
                                <button onclick="viewSubmissionDetail(${idx})" class="text-blue-600 hover:underline text-xs">View</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    
    window.viewSubmissionDetail = function(idx) {
        const sub = window.importedSubmissions[idx];
        if (!sub) return;
        
        alert('Detailed view coming soon. For now, use Export JSON to view full data.\n\nVerification Code: ' + sub._header?.verificationCode);
    };
    
    window.exportGradingCSV = function() {
        if (window.importedSubmissions.length === 0) {
            alert('No submissions to export');
            return;
        }
        
        const headers = [
            'Student ID', 'Case ID', 'Case Title', 'Time (min)', 
            'Initial Dx 1', 'Initial Dx 2', 'Initial Dx 3', 'Initial Confidence',
            'Final Diagnosis', 'Final Confidence', 'Calibration',
            'MNM Earned', 'MNM Possible', 'Verification Code', 'Submitted At'
        ];
        
        const rows = window.importedSubmissions.map(sub => [
            sub.student?.id || '',
            sub.case?.id || '',
            `"${sub.case?.title || ''}"`,
            sub.case?.totalMinutes || 0,
            sub.differential?.initial?.[0] || '',
            sub.differential?.initial?.[1] || '',
            sub.differential?.initial?.[2] || '',
            sub.differential?.initialConfidence || '',
            `"${sub.differential?.final || ''}"`,
            sub.differential?.finalConfidence || '',
            sub.calibration?.interpretation || '',
            sub.scoring?.mustNotMiss?.earned || 0,
            sub.scoring?.mustNotMiss?.possible || 0,
            sub._header?.verificationCode || '',
            sub._header?.submittedAt || ''
        ].join(','));
        
        const csv = [headers.join(','), ...rows].join('\n');
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ReasonDx_Grading_Export_${Date.now()}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };
    
    window.exportGradingJSON = function() {
        if (window.importedSubmissions.length === 0) {
            alert('No submissions to export');
            return;
        }
        
        const blob = new Blob([JSON.stringify(window.importedSubmissions, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ReasonDx_Grading_Export_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    
    // ============================================================
    // UI RENDERING FOR CLINICAL SKILLS SECTION
    // ============================================================
    
    window.renderClinicalSkillsCaseSelect = function() {
        const cases = window.ClinicalSkillsCases.getAllCases();
        const categories = window.ClinicalSkillsCases.getCategories();
        
        return `
            <div class="fade-in max-w-4xl mx-auto">
                <button onclick="goToScreen('menu')" class="text-blue-200 hover:text-white mb-4 flex items-center gap-2">
                    ← Back to Main Menu
                </button>
                
                <div class="card p-6 mb-6">
                    <div class="flex items-center gap-4 mb-4">
                        <span class="text-4xl">🩺</span>
                        <div>
                            <h2 class="text-2xl font-bold text-gray-800">Clinical Skills Cases</h2>
                            <p class="text-gray-600">For use with Standardized Patient encounters</p>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <button onclick="selectCSMode('assessment')" 
                                class="p-4 rounded-lg border-2 border-green-300 bg-green-50 hover:bg-green-100 text-left">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">📝</span>
                                <div>
                                    <div class="font-semibold text-green-800">Assessment Mode</div>
                                    <div class="text-sm text-green-600">Individual assessment with SP</div>
                                </div>
                            </div>
                        </button>
                        
                        <button onclick="selectCSMode('smallgroup')"
                                class="p-4 rounded-lg border-2 border-blue-300 bg-blue-50 hover:bg-blue-100 text-left">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">👥</span>
                                <div>
                                    <div class="font-semibold text-blue-800">Small Group Mode</div>
                                    <div class="text-sm text-blue-600">Collaborative learning with SP</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                
                <div class="card p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-4">Available Cases</h3>
                    
                    ${categories.map(cat => `
                        <div class="mb-6">
                            <h4 class="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                                ${cat}
                            </h4>
                            <div class="space-y-2">
                                ${cases.filter(c => c.category === cat).map(c => `
                                    <button onclick="selectCSCase('${c.id}')"
                                            class="w-full p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-left flex items-center justify-between">
                                        <div>
                                            <div class="font-medium text-gray-800">${c.title}</div>
                                            <div class="text-sm text-gray-500">
                                                ${c.doorNote.age}${c.doorNote.gender} - "${c.doorNote.chiefComplaint}"
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span class="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">${c.difficulty}</span>
                                            <span class="text-xs px-2 py-1 rounded bg-blue-100 text-blue-600">${c.timeLimit} min</span>
                                        </div>
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                    
                    <div class="mt-6 pt-4 border-t">
                        <button onclick="showAddCSCaseModal()" class="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                            <span>+</span> Add Custom Clinical Skills Case
                        </button>
                    </div>
                </div>
            </div>
        `;
    };
    
    // Selected mode and case
    window.selectedCSMode = 'assessment';
    window.selectedCSCase = null;
    
    window.selectCSMode = function(mode) {
        window.selectedCSMode = mode;
        // Update UI to show selected
        document.querySelectorAll('[onclick^="selectCSMode"]').forEach(btn => {
            btn.classList.remove('ring-2', 'ring-offset-2');
        });
        event.target.closest('button').classList.add('ring-2', 'ring-offset-2', 
            mode === 'assessment' ? 'ring-green-500' : 'ring-blue-500');
    };
    
    window.selectCSCase = function(caseId) {
        window.selectedCSCase = caseId;
        
        const caseData = window.ClinicalSkillsCases.getCase(caseId);
        if (!caseData) return;
        
        if (window.selectedCSMode === 'assessment') {
            // Start Assessment Mode
            startAssessmentMode({
                caseId: caseId,
                sessionId: `assess_${caseId}_${Date.now()}`
            });
            
            // Set up state for the case
            if (window.state) {
                window.state.caseType = caseId;
                window.state.mode = 'osce-sp';
                window.state.osceSPMode = true;
                window.state.currentCSCase = caseData;
                window.state.screen = 'cs-assessment-start';
            }
        } else {
            // Start Small Group Mode
            if (typeof initSmallGroupMode === 'function') {
                initSmallGroupMode({
                    groupName: prompt('Enter your group name:') || 'Study Group'
                });
            }
            
            if (window.state) {
                window.state.caseType = caseId;
                window.state.mode = 'small-group';
                window.state.currentCSCase = caseData;
                window.state.screen = 'cs-smallgroup-start';
            }
        }
        
        if (typeof render === 'function') render();
    };
    
    // ============================================================
    // ASSESSMENT START SCREEN
    // ============================================================
    
    window.renderCSAssessmentStart = function() {
        const caseData = window.state?.currentCSCase;
        if (!caseData) return '<div>Case not found</div>';
        
        const doorNote = caseData.doorNote;
        
        return `
            <div class="fade-in max-w-3xl mx-auto">
                <div class="card p-6 mb-4">
                    <div class="flex items-center gap-4 mb-4">
                        <span class="text-4xl">📋</span>
                        <div>
                            <h2 class="text-xl font-bold text-gray-800">Clinical Skills Assessment</h2>
                            <p class="text-gray-600">${caseData.title}</p>
                        </div>
                    </div>
                    
                    <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-xl">⏱️</span>
                            <span class="font-semibold text-amber-800">Time Limit: ${caseData.timeLimit} minutes for SP encounter</span>
                        </div>
                        <p class="text-sm text-amber-700">Your session is being timed for assessment purposes.</p>
                    </div>
                </div>
                
                <div class="card p-6 mb-4">
                    <h3 class="font-semibold text-gray-800 mb-3">🚪 Door Note</h3>
                    
                    <div class="bg-gray-50 rounded-lg p-4 mb-4">
                        <div class="text-lg font-medium text-gray-800 mb-2">
                            ${doorNote.name}, ${doorNote.age}-year-old ${doorNote.gender === 'M' ? 'male' : 'female'}
                        </div>
                        <div class="text-gray-700 mb-4">
                            Chief Complaint: "${doorNote.chiefComplaint}"
                        </div>
                        
                        <div class="grid grid-cols-5 gap-2 text-sm">
                            <div class="text-center p-2 bg-white rounded">
                                <span class="text-gray-500 block">BP</span>
                                <strong>${doorNote.vitalSigns.BP}</strong>
                            </div>
                            <div class="text-center p-2 bg-white rounded">
                                <span class="text-gray-500 block">HR</span>
                                <strong>${doorNote.vitalSigns.HR}</strong>
                            </div>
                            <div class="text-center p-2 bg-white rounded">
                                <span class="text-gray-500 block">RR</span>
                                <strong>${doorNote.vitalSigns.RR}</strong>
                            </div>
                            <div class="text-center p-2 bg-white rounded">
                                <span class="text-gray-500 block">Temp</span>
                                <strong>${doorNote.vitalSigns.Temp}</strong>
                            </div>
                            <div class="text-center p-2 bg-white rounded">
                                <span class="text-gray-500 block">SpO2</span>
                                <strong>${doorNote.vitalSigns.SpO2}</strong>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-sm text-gray-600 mb-4">
                        <strong>Learning Objectives:</strong>
                        <ul class="list-disc list-inside mt-1">
                            ${(caseData.learningObjectives || []).map(obj => `<li>${obj}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="flex justify-center">
                    <button onclick="startCSAssessment()" class="btn-primary px-8 py-3 text-lg">
                        Begin Assessment → Form Initial Differential
                    </button>
                </div>
            </div>
        `;
    };
    
    window.startCSAssessment = function() {
        window.state.screen = 'differential';
        // Set up the case data in the format expected by the differential stage
        if (typeof render === 'function') render();
    };
    
    // ============================================================
    // FACULTY DATA DASHBOARD
    // ============================================================
    
    window.renderAssessmentDataDashboard = function() {
        const history = JSON.parse(localStorage.getItem('reasondx_assessment_history') || '[]');
        
        return `
            <div class="fade-in max-w-5xl mx-auto">
                <div class="card p-6 mb-4">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xl font-bold text-gray-800">📊 Assessment Data Dashboard</h2>
                        <div class="flex gap-2">
                            <button onclick="exportAllAssessmentsCSV()" class="btn-secondary px-4 py-2 text-sm">
                                Export All (CSV)
                            </button>
                            <button onclick="exportAllAssessmentsJSON()" class="btn-secondary px-4 py-2 text-sm">
                                Export All (JSON)
                            </button>
                        </div>
                    </div>
                    
                    <div class="text-sm text-gray-600 mb-4">
                        ${history.length} assessment${history.length !== 1 ? 's' : ''} recorded
                    </div>
                    
                    ${history.length > 0 ? `
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm">
                                <thead>
                                    <tr class="bg-gray-50">
                                        <th class="text-left p-2">Date</th>
                                        <th class="text-left p-2">Student</th>
                                        <th class="text-left p-2">Case</th>
                                        <th class="text-center p-2">Time</th>
                                        <th class="text-center p-2">Confidence</th>
                                        <th class="text-center p-2">Calibration</th>
                                        <th class="text-center p-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${history.map((r, idx) => `
                                        <tr class="border-b hover:bg-gray-50">
                                            <td class="p-2">${new Date(r.meta.startTime).toLocaleDateString()}</td>
                                            <td class="p-2">${r.meta.studentId}</td>
                                            <td class="p-2">${r.meta.caseTitle}</td>
                                            <td class="p-2 text-center">${r.meta.totalTimeMinutes} min</td>
                                            <td class="p-2 text-center">${r.confidenceTrajectory?.final || '-'}%</td>
                                            <td class="p-2 text-center">
                                                <span class="px-2 py-0.5 rounded text-xs ${
                                                    r.confidenceTrajectory?.calibration?.wasCorrect 
                                                        ? 'bg-green-100 text-green-700' 
                                                        : 'bg-red-100 text-red-700'
                                                }">
                                                    ${r.confidenceTrajectory?.calibration?.interpretation || '-'}
                                                </span>
                                            </td>
                                            <td class="p-2 text-center">
                                                <button onclick="viewAssessmentDetail(${idx})" class="text-blue-600 hover:underline">
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    ` : `
                        <div class="text-center py-8 text-gray-500">
                            No assessments recorded yet
                        </div>
                    `}
                </div>
            </div>
        `;
    };
    
    window.exportAllAssessmentsCSV = function() {
        const history = exportAllAssessments();
        if (history.length === 0) {
            alert('No assessments to export');
            return;
        }
        
        const headers = ['Date', 'Student ID', 'Case', 'Time (min)', 'Initial Confidence', 
                        'Final Confidence', 'Final Diagnosis', 'Was Correct', 'Calibration'];
        
        const rows = history.map(r => [
            new Date(r.meta.startTime).toLocaleDateString(),
            r.meta.studentId,
            r.meta.caseTitle,
            r.meta.totalTimeMinutes,
            r.confidenceTrajectory?.initial || '',
            r.confidenceTrajectory?.final || '',
            `"${r.submissions?.finalDiagnosis?.data || ''}"`,
            r.confidenceTrajectory?.calibration?.wasCorrect || '',
            r.confidenceTrajectory?.calibration?.interpretation || ''
        ].join(','));
        
        const csv = [headers.join(','), ...rows].join('\n');
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `all_assessments_${Date.now()}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };
    
    window.exportAllAssessmentsJSON = function() {
        const history = exportAllAssessments();
        const blob = new Blob([JSON.stringify(history, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `all_assessments_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    
    console.log('ReasonDx Clinical Skills Cases module loaded');
    console.log('Available cases:', window.ClinicalSkillsCases.getAllCases().length);
    
})();
