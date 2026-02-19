/**
 * CoachDx Dashboard — Plan Gate Integration Snippet
 * ===================================================
 * Add this script block to CoachDx/coachdx-dashboard.html AFTER the 
 * dx-plan-gate.js script tag to enable Free vs Pro gating.
 *
 * WHAT THIS DOES:
 * - Free users: See a summary debrief (top-level performance overview) but
 *   detailed pattern analysis, reasoning blind spots, and full metacognitive
 *   debrief sections are blurred/locked behind upgrade prompt.
 * - Pro users: Full CoachDx debrief with personalized pattern analysis,
 *   reasoning trajectory, and detailed metacognitive coaching feedback.
 *
 * WHERE TO ADD:
 * After: <script src="../dx-plan-gate.js"></script>
 * Add:   <script src="../dx-coach-gate.js"></script>  (this file)
 */
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        if (typeof DxPlanGate === 'undefined') return;

        if (!DxPlanGate.isPro()) {
            applyFreeTierRestrictions();
        }
    });

    function applyFreeTierRestrictions() {
        // Track the coaching session
        var sessionId = new URLSearchParams(window.location.search).get('session') || 'coach-session-' + Date.now();
        DxPlanGate.trackUsage('coach', sessionId);

        // Limit session history to last 3
        limitSessionHistory();

        // Lock detailed debrief sections
        lockDetailedSections();

        // Lock Reasoning Fingerprint
        lockFingerprint();

        // Lock export functionality
        lockExports();
    }

    function limitSessionHistory() {
        var limit = DxPlanGate.getSessionHistoryLimit();
        // Find session history lists and limit visible items
        var historyContainers = document.querySelectorAll('.session-list, .history-list, [id*="session-history"], [id*="sessionHistory"]');
        historyContainers.forEach(function(container) {
            var items = container.children;
            for (var i = limit; i < items.length; i++) {
                items[i].style.filter = 'blur(4px)';
                items[i].style.pointerEvents = 'none';
                items[i].style.position = 'relative';
            }
            if (items.length > limit) {
                var overlay = document.createElement('div');
                overlay.style.cssText = 'text-align:center;padding:16px;margin-top:8px;';
                overlay.innerHTML = DxPlanGate.lockBadge() + 
                    ' <span style="font-size:13px;color:#64748b;margin-left:8px;">Showing last ' + limit + ' sessions. <a href="' + getUpgradePath() + '" style="color:#2874A6;font-weight:600;">Upgrade for full history</a></span>';
                container.appendChild(overlay);
            }
        });
    }

    function lockDetailedSections() {
        // Common patterns for detailed analysis sections in coaching dashboards
        var selectors = [
            '.detailed-analysis', '.pattern-analysis', '.metacognitive-debrief',
            '.reasoning-patterns', '.blind-spots', '.growth-areas',
            '[id*="detailed"], [id*="pattern"], [id*="metacognit"], [id*="blindspot"]',
            '.debrief-full, .coaching-detail'
        ];

        selectors.forEach(function(sel) {
            var sections = document.querySelectorAll(sel);
            sections.forEach(function(section) {
                section.style.position = 'relative';
                section.style.filter = 'blur(4px)';
                section.style.pointerEvents = 'none';
                section.style.userSelect = 'none';

                var lock = document.createElement('div');
                lock.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10;text-align:center;background:rgba(255,255,255,0.95);padding:24px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.1);';
                lock.innerHTML = '<div style="font-size:24px;margin-bottom:8px;">🔒</div>' +
                    '<div style="font-weight:600;color:#1e3a5f;margin-bottom:4px;">Full Debrief — Pro Only</div>' +
                    '<div style="font-size:13px;color:#64748b;margin-bottom:12px;">Unlock detailed pattern analysis and metacognitive coaching</div>' +
                    '<a href="' + getUpgradePath() + '" style="display:inline-block;padding:10px 24px;background:#2874A6;color:white;border-radius:20px;text-decoration:none;font-weight:600;font-size:13px;">Upgrade to Pro</a>';
                section.parentNode.insertBefore(lock, section);
                section.parentNode.style.position = 'relative';
            });
        });
    }

    function lockFingerprint() {
        if (DxPlanGate.canViewFingerprint()) return;
        var fpSelectors = ['.fingerprint', '.reasoning-fingerprint', '[id*="fingerprint"], [id*="rpfs"]', '.rpfs-chart'];
        fpSelectors.forEach(function(sel) {
            var els = document.querySelectorAll(sel);
            els.forEach(function(el) {
                el.style.filter = 'blur(6px)';
                el.style.pointerEvents = 'none';
                var lock = document.createElement('div');
                lock.style.cssText = 'text-align:center;padding:12px;';
                lock.innerHTML = DxPlanGate.lockBadge() + ' <span style="font-size:13px;color:#64748b;margin-left:8px;">Reasoning Fingerprint requires Pro</span>';
                el.parentNode.insertBefore(lock, el);
            });
        });
    }

    function lockExports() {
        var exportBtns = document.querySelectorAll('[onclick*="export"], .export-btn, [id*="export"], button[title*="Export"]');
        exportBtns.forEach(function(btn) {
            btn.onclick = null;
            btn.removeAttribute('onclick');
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                DxPlanGate.showUpgradeModal({
                    reason: 'Exportable progress reports are available with Pro.',
                    type: 'export'
                });
            });
            btn.style.opacity = '0.6';
            btn.title = 'Export requires Pro';
        });
    }

    function getUpgradePath() {
        var depth = (location.pathname.split('/').length) - 2;
        var prefix = '';
        for (var i = 0; i < depth; i++) prefix += '../';
        return prefix + 'auth/register.html';
    }
})();
