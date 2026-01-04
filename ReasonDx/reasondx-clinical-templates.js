/**
 * ReasonDx Clinical Templates - Stub Version
 * This is a minimal stub to prevent JavaScript errors.
 * Full templates will be restored in a future update.
 */

// ChestPainCaseTemplates stub
const ChestPainCaseTemplates = {
    hpiTemplates: {},
    riskFactorResponses: {},
    expectedExamFindings: {},
    expectedWorkup: {},
    negativeResponses: {},
    differentialByLocation: {},
    getRandomResponse: function(arr) { return arr && arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : ''; }
};

// AbdominalPainTemplates stub
const AbdominalPainTemplates = {
    urgentCauses: [],
    hpiTemplates: {},
    riskFactorResponses: {},
    expectedExamFindings: {},
    expectedWorkup: {},
    negativeResponses: {},
    differentialByLocation: {}
};

// DyspneaTemplates stub
const DyspneaTemplates = {
    lifeThreatening: [],
    dangerSigns: {},
    hpiTemplates: {},
    physicalExamFindings: {},
    workupTemplates: {}
};

// HeadacheTemplates stub
const HeadacheTemplates = {
    clinicalDangerSigns: {},
    hpiTemplates: {},
    examFindings: {},
    workupTemplates: {}
};

// Export all templates
if (typeof window !== 'undefined') {
    window.ChestPainCaseTemplates = ChestPainCaseTemplates;
    window.AbdominalPainTemplates = AbdominalPainTemplates;
    window.DyspneaTemplates = DyspneaTemplates;
    window.HeadacheTemplates = HeadacheTemplates;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ChestPainCaseTemplates,
        AbdominalPainTemplates,
        DyspneaTemplates,
        HeadacheTemplates
    };
}

console.log('✓ ReasonDx Clinical Templates: Loaded (stub version)');
