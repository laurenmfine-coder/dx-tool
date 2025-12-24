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
