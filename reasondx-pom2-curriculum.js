// ============================================================
// ReasonDx POM 2 Clinical Skills Curriculum Module v2
// With Teaching Mode Integration
// ============================================================

(function() {
    'use strict';
    
    const POM2_CURRICULUM = {
        title: "POM 2 Clinical Skills",
        subtitle: "NSU Kiran Patel College of Allopathic Medicine",
        academicYear: "2025-2026",
        
        passcodes: {
            csa1: "CSA1-DM2025",
            csa2: "CSA2-AS2025", 
            csa3: "CSA3-RESP2025",
            osce1a: "OSCE1-A-2025",
            osce1b: "OSCE1-B-2025",
            osce2a: "OSCE2-A-2025",
            osce2b: "OSCE2-B-2025",
            facultyMaster: "FACULTY-MASTER-2025"
        },
        
        weeks: [
            {
                weekNumber: 2, dates: "Jan 12-16", topic: "Epigastric Pain", icon: "🔥",
                description: "Hypothesis-driven approach to upper abdominal pain",
                facilitatorGuideKey: "week-2",
                cases: {
                    preClass: { id: "pom2-w2-preclass", title: "Pre-Class: Epigastric Pain", description: "Gastritis vs PUD vs cardiac", existingCaseId: "epigastric" },
                    inClass: { id: "pom2-w2-inclass", title: "In-Class: Abdominal Exam", description: "Core exam + rebound, aortic bruit", isExamTechnique: true },
                    spCase: { id: "pom2-w2-sp", title: "SP: Gastritis", patientName: "Alexander Price", age: 62, gender: "male", existingCaseId: "epigastric" }
                }
            },
            {
                weekNumber: 3, dates: "Jan 19-23", topic: "Nausea and Vomiting", icon: "🤢",
                description: "Common vs dangerous causes of N/V",
                facilitatorGuideKey: "week-3",
                cases: {
                    preClass: { id: "pom2-w3-preclass", title: "Pre-Class: N/V Differential", description: "SBO, ICP, DKA, pregnancy", existingCaseId: "nausea-vomiting" },
                    inClass: { id: "pom2-w3-inclass", title: "In-Class: Hydration Assessment", description: "Dehydration signs, bowel sounds", isExamTechnique: true },
                    spCase: { id: "pom2-w3-sp", title: "SP: Hyperemesis", patientName: "Samantha Reyes", age: 34, gender: "female", existingCaseId: "nausea-vomiting" }
                }
            },
            {
                weekNumber: 4, dates: "Jan 26-30", topic: "RLQ Pain", icon: "🔪",
                description: "Appendicitis vs gynecologic emergencies",
                facilitatorGuideKey: "week-4",
                cases: {
                    preClass: { id: "pom2-w4-preclass", title: "Pre-Class: RLQ Differential", description: "Appendicitis vs GYN causes", existingCaseId: "rlq-appendicitis" },
                    inClass: { id: "pom2-w4-inclass", title: "In-Class: RLQ Exam", description: "McBurney's, Rovsing's, Psoas, Obturator", isExamTechnique: true },
                    spCase: { id: "pom2-w4-sp", title: "SP: Appendicitis", patientName: "Jessica Martin", age: 28, gender: "female", existingCaseId: "rlq-appendicitis" }
                },
                morningReport: { topic: "Diarrhea/Constipation Clinical Reasoning", faculty: "Amanda" }
            },
            {
                weekNumber: 5, dates: "Feb 2-6", topic: "RUQ Pain", icon: "🟡",
                description: "Biliary disease spectrum",
                facilitatorGuideKey: "week-5",
                cases: {
                    preClass: { id: "pom2-w5-preclass", title: "Pre-Class: RUQ Differential", description: "Biliary colic vs cholecystitis", existingCaseId: "ruq-cholecystitis" },
                    inClass: { id: "pom2-w5-inclass", title: "In-Class: Hepatobiliary Exam", description: "Murphy's sign, liver span", isExamTechnique: true },
                    spCase: { id: "pom2-w5-sp", title: "SP: Cholecystitis", patientName: "Maria Torres", age: 38, gender: "female", existingCaseId: "ruq-cholecystitis" }
                }
            },
            {
                weekNumber: 6, dates: "Feb 9-13", topic: "GI Bleeding", icon: "🩸",
                description: "Upper vs Lower GI Bleed",
                facilitatorGuideKey: "week-6",
                cases: {
                    preClass: { id: "pom2-w6-preclass", title: "Pre-Class: GI Bleed", description: "UGIB vs LGIB assessment", existingCaseId: "upper-gi-bleed" },
                    inClass: { id: "pom2-w6-inclass", title: "In-Class: GI Bleed Assessment", description: "DRE, liver stigmata, hemodynamics", isExamTechnique: true },
                    spCase: { id: "pom2-w6-sp", title: "SP: Lower GI Bleed", patientName: "A. Price", age: 46, gender: "flexible" }
                }
            },
            {
                weekNumber: 7, dates: "Feb 16-20", topic: "Diabetes Management", icon: "💉",
                description: "Diabetic foot exam, routine follow-up",
                facilitatorGuideKey: "week-7",
                cases: {
                    preClass: { id: "pom2-w7-preclass", title: "Pre-Class: DM Complications", description: "Micro/macrovascular complications" },
                    inClass: { id: "pom2-w7-inclass", title: "In-Class: Diabetic Exam", description: "Foot exam, monofilament, visual acuity", isExamTechnique: true },
                    spCase: { id: "pom2-w7-sp", title: "SP: DM Follow-Up", patientName: "Michael Thompson", age: 52, gender: "male" }
                },
                morningReport: { topic: "DKA/Diabetes Simulation", location: "Broward SIM" }
            },
            {
                weekNumber: 8, dates: "Feb 23-27", topic: "GU Exams", icon: "🔬",
                description: "Male & Female GU exam techniques",
                underDevelopment: true,
                cases: {
                    inClass: { id: "pom2-w8-inclass", title: "3-Station Rotation", description: "Male GU, Female GU, Formative Abdominal", isExamTechnique: true }
                }
            },
            {
                weekNumber: 9, dates: "Mar 9-13", topic: "Reproductive Endocrinology", icon: "🌸",
                description: "Amenorrhea and galactorrhea workup",
                facilitatorGuideKey: "week-9",
                cases: {
                    preClass: { id: "pom2-w9-preclass", title: "Pre-Class: Amenorrhea", description: "Primary vs secondary causes", existingCaseId: "amenorrhea" },
                    inClass: { id: "pom2-w9-inclass", title: "In-Class: Endocrine Exam", description: "Thyroid, breast, visual fields", isExamTechnique: true },
                    spCase: { id: "pom2-w9-sp", title: "SP: Amenorrhea", patientName: "Jessica Ramirez", age: 28, gender: "female", existingCaseId: "amenorrhea" }
                }
            },
            {
                weekNumber: 10, dates: "Mar 16-20", topic: "CSA 1: New Onset Diabetes", icon: "📋",
                description: "SUMMATIVE ASSESSMENT", isAssessment: true,
                cases: {
                    preClass: { id: "pom2-w10-preclass", title: "Pre-Class: Polyuria", description: "New onset diabetes workup" },
                    assessment: { id: "csa-1", title: "CSA 1: New Onset Diabetes", type: "CSA", secured: true, patientName: "Lisa Edwards", age: 38 }
                }
            },
            {
                weekNumber: 11, dates: "Mar 23-27", topic: "OSCE 1", icon: "🎯",
                description: "SUMMATIVE ASSESSMENT - 2 Stations", isAssessment: true,
                cases: {
                    assessment: { type: "OSCE", secured: true, stations: [
                        { id: "osce-1a", title: "Station 1: Ectopic Pregnancy", patientName: "Emily Roberts", age: 27 },
                        { id: "osce-1b", title: "Station 2: Gallstone Pancreatitis" }
                    ]}
                }
            },
            {
                weekNumber: 12, dates: "Mar 30-Apr 3", topic: "Chest Pain", icon: "💔",
                description: "Atypical presentations in diabetics",
                facilitatorGuideKey: "week-12",
                cases: {
                    preClass: { id: "pom2-w12-preclass", title: "Pre-Class: Chest Pain", description: "ACS vs GERD vs MSK", existingCaseId: "chest-pain" },
                    inClass: { id: "pom2-w12-inclass", title: "In-Class: Cardiac Exam + ECG", description: "Auscultation, ECG basics", isExamTechnique: true },
                    spCase: { id: "pom2-w12-sp", title: "SP: Atypical Chest Pain", patientName: "Jordan Quincy", age: 58, gender: "flexible", existingCaseId: "chest-pain" }
                }
            },
            {
                weekNumber: 13, dates: "Apr 6-10", topic: "Syncope", icon: "😵",
                description: "Cardiac vs vasovagal syncope",
                facilitatorGuideKey: "week-13",
                cases: {
                    preClass: { id: "pom2-w13-preclass", title: "Pre-Class: Syncope", description: "Cardiac vs reflex causes" },
                    inClass: { id: "pom2-w13-inclass", title: "In-Class: Murmur Assessment", description: "Auscultation, orthostatics", isExamTechnique: true },
                    spCase: { id: "pom2-w13-sp", title: "SP: Exertional Syncope", patientName: "Michael Hayes", age: 42, gender: "flexible" }
                },
                morningReport: { topic: "Arrhythmia/Palpitations" }
            }
        ],
        
        assessments: [
            { id: "csa-1", title: "CSA 1: New Onset Diabetes", week: 10, type: "CSA", secured: true, topic: "Polyuria/Polydipsia" },
            { id: "csa-2", title: "CSA 2: Aortic Stenosis", week: 16, type: "CSA", secured: true, topic: "DOE + Chest Pain" },
            { id: "csa-3", title: "CSA 3: Respiratory", week: 21, type: "CSA", secured: true, topic: "Asthma vs Bronchitis vs Pneumonia" },
            { id: "osce-1", title: "OSCE 1", week: 11, type: "OSCE", secured: true, topic: "Ectopic + Pancreatitis" },
            { id: "osce-2", title: "OSCE 2", week: 24, type: "OSCE", secured: true, topic: "Kidney Stone + Respiratory" }
        ]
    };
    
    let unlockedAssessments = new Set();
    let selectedWeekForTeaching = null;
    
    function renderPOM2CurriculumScreen() {
        var darkClass = playerData && playerData.darkMode ? 'dark' : '';
        var teachingModeActive = typeof isTeachingModeActive === 'function' && isTeachingModeActive();
        var isCDMode = typeof isCourseDirector === 'function' && isCourseDirector();
        
        var weekCardsHtml = POM2_CURRICULUM.weeks.map(function(week) {
            return renderWeekCard(week, teachingModeActive, isCDMode);
        }).join('');
        
        var assessmentCardsHtml = POM2_CURRICULUM.assessments.map(function(assessment) {
            return renderAssessmentCard(assessment);
        }).join('');
        
        var teachingToggle = typeof renderTeachingModeToggle === 'function' ? renderTeachingModeToggle() : '';
        
        // Teaching panel if a week is selected
        var teachingPanelHtml = '';
        if (teachingModeActive && selectedWeekForTeaching) {
            var weekConfig = POM2_CURRICULUM.weeks.find(function(w) { return w.weekNumber === selectedWeekForTeaching; });
            if (weekConfig && weekConfig.facilitatorGuideKey) {
                teachingPanelHtml = '<div class="mt-6">' +
                    '<button onclick="closeTeachingPanel()" class="mb-4 text-sm text-blue-600 hover:underline">← Close Teaching Panel</button>';
                
                if (isCDMode && typeof renderLargeGroupGuidePanel === 'function') {
                    teachingPanelHtml += renderLargeGroupGuidePanel(weekConfig.facilitatorGuideKey);
                }
                if (typeof renderFacilitatorGuidePanel === 'function') {
                    teachingPanelHtml += renderFacilitatorGuidePanel(weekConfig.facilitatorGuideKey);
                }
                teachingPanelHtml += '</div>';
            }
        }
        
        return '<div class="' + darkClass + '">' +
            '<div class="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-800">' +
            
            // Header
            '<header class="bg-blue-900 text-white py-6 px-6">' +
                '<div class="max-w-4xl mx-auto">' +
                    '<div class="flex items-center justify-between mb-4">' +
                        '<button onclick="goToScreen(\'menu\')" class="text-blue-200 hover:text-white flex items-center gap-2">← Back to Main Menu</button>' +
                        teachingToggle +
                    '</div>' +
                    '<div class="flex items-center gap-4">' +
                        '<span class="text-4xl">🩺</span>' +
                        '<div>' +
                            '<h1 class="text-2xl font-bold">' + POM2_CURRICULUM.title + '</h1>' +
                            '<p class="text-blue-200">' + POM2_CURRICULUM.subtitle + ' · ' + POM2_CURRICULUM.academicYear + '</p>' +
                        '</div>' +
                    '</div>' +
                    (teachingModeActive ? '<div class="mt-2 px-3 py-1 bg-yellow-500 text-yellow-900 rounded-full text-sm inline-block">📋 Teaching Mode Active</div>' : '') +
                '</div>' +
            '</header>' +
            
            // Main Content
            '<main class="max-w-4xl mx-auto px-6 py-8">' +
                // Teaching Panel (if open)
                teachingPanelHtml +
                
                // Instructions
                '<div class="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 mb-8">' +
                    '<h2 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">📚 How to Use This Curriculum</h2>' +
                    '<div class="grid md:grid-cols-4 gap-3 text-sm">' +
                        '<div class="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg"><div class="font-medium text-green-800 dark:text-green-200 mb-1">📖 Pre-Class</div><p class="text-green-700 dark:text-green-300 text-xs">Complete BEFORE Tuesday class.</p></div>' +
                        '<div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg"><div class="font-medium text-blue-800 dark:text-blue-200 mb-1">🏥 In-Class</div><p class="text-blue-700 dark:text-blue-300 text-xs">Tuesday review - exam technique focus.</p></div>' +
                        '<div class="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg"><div class="font-medium text-purple-800 dark:text-purple-200 mb-1">🎭 SP Case</div><p class="text-purple-700 dark:text-purple-300 text-xs">Practice for SP encounters.</p></div>' +
                        '<div class="bg-orange-50 dark:bg-orange-900/30 p-3 rounded-lg"><div class="font-medium text-orange-800 dark:text-orange-200 mb-1">📊 Morning Report</div><p class="text-orange-700 dark:text-orange-300 text-xs">Thursday clinical correlations.</p></div>' +
                    '</div>' +
                '</div>' +
                
                // Weekly Modules
                '<h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Weekly Modules</h2>' +
                '<div class="space-y-4 mb-8">' + weekCardsHtml + '</div>' +
                
                // Assessments
                '<h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">🔒 Assessments</h2>' +
                '<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">' +
                    '<p class="text-sm text-red-700 dark:text-red-300 mb-4"><strong>⚠️ Secure:</strong> Passcode required on exam day.</p>' +
                    '<div class="grid md:grid-cols-2 gap-4">' + assessmentCardsHtml + '</div>' +
                '</div>' +
            '</main>' +
            '</div></div>';
    }
    
    function renderWeekCard(week, teachingModeActive, isCDMode) {
        var cases = week.cases || {};
        var headerBg = week.isAssessment ? 'bg-gradient-to-r from-red-600 to-red-700' : 
                       week.underDevelopment ? 'bg-gradient-to-r from-gray-500 to-gray-600' : 
                       'bg-gradient-to-r from-blue-600 to-blue-700';
        
        var casesHtml = '';
        
        if (cases.preClass) {
            casesHtml += '<button onclick="startPOM2Case(\'' + cases.preClass.id + '\', \'' + (cases.preClass.existingCaseId || '') + '\')" class="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg hover:bg-green-100 transition text-left">' +
                '<span class="text-xl">📖</span><div><div class="font-medium text-green-800 dark:text-green-200 text-sm">Pre-Class</div>' +
                '<div class="text-xs text-green-600 dark:text-green-400">' + cases.preClass.description + '</div></div></button>';
        }
        
        if (cases.inClass) {
            var inClassIcon = cases.inClass.isExamTechnique ? '🔍' : '🏥';
            casesHtml += '<button onclick="startExamTechniqueCase(\'' + cases.inClass.id + '\', ' + week.weekNumber + ')" class="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 transition text-left">' +
                '<span class="text-xl">' + inClassIcon + '</span><div><div class="font-medium text-blue-800 dark:text-blue-200 text-sm">In-Class</div>' +
                '<div class="text-xs text-blue-600 dark:text-blue-400">' + cases.inClass.description + '</div></div></button>';
        }
        
        if (cases.spCase) {
            casesHtml += '<button onclick="startPOM2Case(\'' + cases.spCase.id + '\', \'' + (cases.spCase.existingCaseId || '') + '\')" class="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-purple-100 transition text-left">' +
                '<span class="text-xl">🎭</span><div><div class="font-medium text-purple-800 dark:text-purple-200 text-sm">SP Case</div>' +
                '<div class="text-xs text-purple-600 dark:text-purple-400">' + cases.spCase.patientName + ', ' + cases.spCase.age + '</div></div></button>';
        }
        
        if (cases.assessment) {
            casesHtml += '<button onclick="unlockAssessment(\'' + (cases.assessment.id || 'assessment') + '\')" class="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/30 rounded-lg hover:bg-red-100 transition text-left col-span-full">' +
                '<span class="text-xl">🔒</span><div><div class="font-medium text-red-800 dark:text-red-200 text-sm">' + (cases.assessment.title || cases.assessment.type) + '</div>' +
                '<div class="text-xs text-red-600 dark:text-red-400">Requires passcode</div></div></button>';
        }
        
        // Teaching buttons (only visible in teaching mode)
        var teachingButtonsHtml = '';
        if (teachingModeActive && week.facilitatorGuideKey) {
            teachingButtonsHtml = '<div class="px-4 pb-4 border-t border-yellow-200 pt-3 bg-yellow-50 dark:bg-yellow-900/20">' +
                '<div class="flex gap-2">' +
                    (isCDMode ? '<button onclick="openTeachingPanel(' + week.weekNumber + ', true)" class="flex-1 text-xs px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">📋 Large Group Guide</button>' : '') +
                    '<button onclick="openTeachingPanel(' + week.weekNumber + ', false)" class="flex-1 text-xs px-3 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">👨‍⚕️ Facilitator Guide</button>' +
                '</div>' +
            '</div>';
        }
        
        var morningReportHtml = '';
        if (week.morningReport && !week.morningReport.noCase) {
            morningReportHtml = '<div class="px-4 pb-4"><div class="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg">' +
                '<span class="text-xl">📊</span><div><div class="font-medium text-orange-800 dark:text-orange-200 text-sm">Morning Report</div>' +
                '<div class="text-xs text-orange-600 dark:text-orange-400">' + week.morningReport.topic + '</div></div></div></div>';
        }
        
        return '<div class="bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden">' +
            '<div class="' + headerBg + ' text-white px-6 py-4">' +
                '<div class="flex items-center gap-3"><span class="text-2xl">' + week.icon + '</span>' +
                '<div><h3 class="font-bold">Week ' + week.weekNumber + ': ' + week.topic + '</h3>' +
                '<p class="text-white/80 text-sm">' + week.dates + '</p></div></div>' +
                '<p class="text-white/80 text-sm mt-2">' + week.description + '</p>' +
            '</div>' +
            '<div class="p-4 grid md:grid-cols-3 gap-3">' + casesHtml + '</div>' +
            morningReportHtml +
            teachingButtonsHtml +
        '</div>';
    }
    
    function renderAssessmentCard(assessment) {
        var isUnlocked = unlockedAssessments.has(assessment.id);
        var lockIcon = isUnlocked ? '🔓' : '🔒';
        var bgClass = isUnlocked ? 'bg-green-100 dark:bg-green-900/30 border-green-300' : 'bg-gray-100 dark:bg-gray-800 border-gray-300';
        var buttonHtml = isUnlocked ?
            '<button onclick="startPOM2Assessment(\'' + assessment.id + '\')" class="w-full text-xs px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700">Start</button>' :
            '<button onclick="unlockAssessment(\'' + assessment.id + '\')" class="w-full text-xs px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Enter Passcode</button>';
        
        return '<div class="border ' + bgClass + ' dark:border-gray-700 rounded-lg p-4">' +
            '<div class="flex items-center justify-between mb-2"><span class="text-lg">' + lockIcon + '</span>' +
            '<span class="text-xs px-2 py-1 rounded-full ' + (assessment.type === 'CSA' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800') + '">' + assessment.type + '</span></div>' +
            '<h4 class="font-medium text-sm text-gray-800 dark:text-gray-200">' + assessment.title + '</h4>' +
            '<p class="text-xs text-gray-600 dark:text-gray-400 mb-3">Week ' + assessment.week + '</p>' +
            buttonHtml +
        '</div>';
    }
    
    // Navigation functions
    function startPOM2Case(caseId, existingCaseId) {
        if (existingCaseId && typeof cases !== 'undefined') {
            var existingCase = cases.find(function(c) { return c.id === existingCaseId; });
            if (existingCase) {
                var variantKey = Object.keys(existingCase.variants)[0];
                state.caseType = existingCaseId;
                state.variantKey = variantKey;
                state.currentCase = existingCase;
                if (typeof resetCaseState === 'function') resetCaseState();
                goToScreen('differential');
                return;
            }
        }
        if (typeof showToast === 'function') {
            showToast('Case "' + caseId + '" - Coming soon!', 'info');
        }
    }
    
    function startExamTechniqueCase(caseId, weekNumber) {
        // Launch the exam technique mini-case
        if (typeof showExamTechniqueCase === 'function') {
            showExamTechniqueCase(caseId, weekNumber);
        } else if (typeof showToast === 'function') {
            showToast('Exam technique case launching...', 'info');
        }
    }
    
    function unlockAssessment(assessmentId) {
        var passcode = prompt('Enter assessment passcode:');
        if (!passcode) return;
        
        var validPasscodes = Object.values(POM2_CURRICULUM.passcodes);
        if (validPasscodes.indexOf(passcode) !== -1) {
            unlockedAssessments.add(assessmentId);
            if (typeof showToast === 'function') showToast('Assessment unlocked! ✓', 'success');
            if (typeof render === 'function') render();
        } else {
            if (typeof showToast === 'function') showToast('Incorrect passcode', 'error');
        }
    }
    
    function startPOM2Assessment(assessmentId) {
        if (!unlockedAssessments.has(assessmentId)) {
            if (typeof showToast === 'function') showToast('Please unlock first', 'warning');
            return;
        }
        if (typeof showToast === 'function') showToast('Starting assessment...', 'info');
    }
    
    function openTeachingPanel(weekNumber, isLargeGroup) {
        selectedWeekForTeaching = weekNumber;
        if (typeof render === 'function') render();
        // Scroll to top to show teaching panel
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function closeTeachingPanel() {
        selectedWeekForTeaching = null;
        if (typeof render === 'function') render();
    }
    
    // Expose to global
    window.POM2_CURRICULUM = POM2_CURRICULUM;
    window.renderPOM2CurriculumScreen = renderPOM2CurriculumScreen;
    window.startPOM2Case = startPOM2Case;
    window.startExamTechniqueCase = startExamTechniqueCase;
    window.unlockAssessment = unlockAssessment;
    window.startPOM2Assessment = startPOM2Assessment;
    window.openTeachingPanel = openTeachingPanel;
    window.closeTeachingPanel = closeTeachingPanel;
    
    console.log('✓ POM 2 Curriculum Module v2 loaded');
})();
