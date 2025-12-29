/**
 * ReasonDx What-If Pathways System
 * Core What-If functionality is embedded in index.html
 * This file provides optional extensions and utilities
 * 
 * Last Updated: December 28, 2025
 */

(function() {
    'use strict';
    
    // What-If Pathways utilities
    window.WhatIfPathways = window.WhatIfPathways || {
        version: '1.0.0',
        
        // Utility to get all What-If scenarios for a case
        getScenariosForCase: function(caseId) {
            if (!window.cases) return [];
            const caseData = window.cases.find(c => c.id === caseId);
            return caseData?.whatIfScenarios || [];
        },
        
        // Utility to count total What-If scenarios
        getTotalScenarioCount: function() {
            if (!window.cases) return 0;
            return window.cases.reduce((total, c) => {
                return total + (c.whatIfScenarios?.length || 0);
            }, 0);
        },
        
        // Utility to get cases with What-If scenarios
        getCasesWithScenarios: function() {
            if (!window.cases) return [];
            return window.cases.filter(c => c.whatIfScenarios && c.whatIfScenarios.length > 0);
        },
        
        // Log What-If system status
        logStatus: function() {
            const total = this.getTotalScenarioCount();
            const casesWithScenarios = this.getCasesWithScenarios().length;
            console.log(`[WhatIfPathways] ${total} scenarios across ${casesWithScenarios} cases`);
        }
    };
    
    // Initialize on load
    function init() {
        if (typeof window.cases !== 'undefined') {
            window.WhatIfPathways.logStatus();
        } else {
            setTimeout(init, 500);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
