/* emr-data/auto-handoff.js — Auto-Generated Handoff Bridge
 * Generates structured handoffs from EMR case data.
 */
var AutoHandoff = window.AutoHandoff || {
  generate: function(caseData) {
    return {
      oneLiner: caseData.chiefComplaint || '',
      ipass: { illness: '', patientSummary: '', actionList: '', situationAwareness: '', synthesis: '' },
      activeProblems: [],
      pendingTasks: []
    };
  }
};
