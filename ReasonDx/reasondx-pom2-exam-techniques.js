// ============================================================
// ReasonDx POM 2 Exam Technique Cases - Simplified
// ============================================================

(function() {
    'use strict';
    
    const EXAM_TECHNIQUE_CASES = {
        'pom2-w2-inclass': { title: "Abdominal Exam", focus: "Core exam + aortic palpation + rebound", weekNumber: 2 },
        'pom2-w3-inclass': { title: "Hydration Assessment", focus: "Skin turgor, mucous membranes, orthostatics", weekNumber: 3 },
        'pom2-w4-inclass': { title: "RLQ Special Maneuvers", focus: "McBurney's, Rovsing's, Psoas, Obturator", weekNumber: 4 },
        'pom2-w5-inclass': { title: "Hepatobiliary Exam", focus: "Murphy's sign, liver span, ascites", weekNumber: 5 },
        'pom2-w6-inclass': { title: "GI Bleed Assessment", focus: "DRE, liver stigmata, orthostatics", weekNumber: 6 },
        'pom2-w7-inclass': { title: "Diabetic Foot Exam", focus: "Monofilament, vibration, pulses", weekNumber: 7 },
        'pom2-w9-inclass': { title: "Endocrine Exam", focus: "Thyroid, visual fields, galactorrhea", weekNumber: 9 },
        'pom2-w12-inclass': { title: "Cardiac Exam", focus: "Auscultation, JVP, ECG basics", weekNumber: 12 },
        'pom2-w13-inclass': { title: "Syncope Assessment", focus: "Murmurs, carotid pulse, orthostatics", weekNumber: 13 }
    };
    
    function showExamTechniqueCase(caseId, weekNumber) {
        var examCase = EXAM_TECHNIQUE_CASES[caseId];
        if (!examCase) {
            if (typeof showToast === 'function') showToast('Coming soon!', 'info');
            return;
        }
        if (typeof showToast === 'function') {
            showToast(examCase.title + ': ' + examCase.focus, 'info');
        }
    }
    
    window.EXAM_TECHNIQUE_CASES = EXAM_TECHNIQUE_CASES;
    window.showExamTechniqueCase = showExamTechniqueCase;
    
    console.log('✓ Exam Technique Cases loaded');
})();
