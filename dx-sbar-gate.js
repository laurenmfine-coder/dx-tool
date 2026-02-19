/**
 * SBAR Trainer — Plan Gate Integration Snippet
 * ==============================================
 * Add this script block to tools/sbar-trainer.html AFTER the dx-plan-gate.js 
 * script tag to enable Free vs Pro gating for SBAR feedback.
 *
 * WHAT THIS DOES:
 * - Free users: Can view SBAR scenarios and templates, but AI-scored 
 *   interactive feedback is locked. They see a summary/template only.
 * - Pro users: Full interactive SBAR practice with AI scoring and 
 *   detailed feedback on each section.
 *
 * WHERE TO ADD:
 * After: <script src="../dx-plan-gate.js"></script>
 * Add:   <script src="../dx-sbar-gate.js"></script>  (this file)
 *
 * OR paste the contents directly into sbar-trainer.html in a <script> block.
 */
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        if (typeof DxPlanGate === 'undefined') return;

        // Run autoGate for page-level checks
        DxPlanGate.autoGate();

        // If free user, intercept the feedback/scoring submission
        if (!DxPlanGate.isPro()) {
            applyFreeTierRestrictions();
        }
    });

    function applyFreeTierRestrictions() {
        // Strategy: Let free users see the scenario and SBAR template,
        // but replace the interactive scoring UI with a summary + upgrade prompt.

        // 1. Find and modify the scoring/feedback section
        // Look for common patterns in the SBAR trainer UI
        var scoreBtn = document.querySelector('[onclick*="scoreSBAR"], [onclick*="submitSBAR"], .score-btn, .submit-sbar, #scoreSbarBtn, #submitBtn');
        
        if (scoreBtn) {
            var originalOnclick = scoreBtn.onclick;
            scoreBtn.onclick = null;
            scoreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                DxPlanGate.showUpgradeModal({
                    reason: 'AI-scored SBAR feedback is a Pro feature. Free users can review SBAR templates and structure.',
                    type: 'sbarFeedback'
                });
            });
            // Visual indicator
            scoreBtn.innerHTML = '🔒 Score My SBAR (Pro)';
            scoreBtn.title = 'AI scoring requires Pro';
        }

        // 2. Add a banner above the SBAR form
        var container = document.querySelector('.sbar-container, .patient-chart, main, .container');
        if (container) {
            var banner = document.createElement('div');
            banner.style.cssText = 'background:#f0f7fc;border:1px solid #bfdbfe;border-radius:12px;padding:14px 20px;margin-bottom:16px;display:flex;align-items:center;gap:12px;font-size:14px;color:#1e3a5f;';
            banner.innerHTML = '<span style="font-size:18px;">📋</span>' +
                '<div><strong>Free Tier:</strong> You can explore SBAR templates and scenario structure. ' +
                '<a href="' + getUpgradePath() + '" style="color:#2874A6;font-weight:600;">Upgrade to Pro</a> for AI-scored feedback on your communication.</div>';
            container.insertBefore(banner, container.firstChild);
        }

        // 3. Track the SBAR session for usage stats
        var scenarioId = new URLSearchParams(window.location.search).get('scenario') || 'sbar-session';
        DxPlanGate.trackUsage('sbar', scenarioId);
    }

    function getUpgradePath() {
        var depth = (location.pathname.split('/').length) - 2;
        var prefix = '';
        for (var i = 0; i < depth; i++) prefix += '../';
        return prefix + 'auth/register.html';
    }
})();
