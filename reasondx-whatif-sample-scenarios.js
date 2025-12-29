/**
 * ReasonDx What-If Sample Scenarios
 * Sample scenarios are embedded directly in the case definitions in index.html
 * This file provides optional scenario additions and utilities
 * 
 * Last Updated: December 28, 2025
 */

(function() {
    'use strict';
    
    // Sample scenario utilities
    window.WhatIfSampleScenarios = window.WhatIfSampleScenarios || {
        version: '1.0.0',
        
        // Add a new scenario to an existing case
        addScenarioToCase: function(caseId, scenario) {
            if (!window.cases) return false;
            const caseData = window.cases.find(c => c.id === caseId);
            if (!caseData) return false;
            
            caseData.whatIfScenarios = caseData.whatIfScenarios || [];
            
            // Check if scenario already exists
            if (caseData.whatIfScenarios.some(s => s.id === scenario.id)) {
                console.log(`[WhatIfSampleScenarios] Scenario ${scenario.id} already exists`);
                return false;
            }
            
            caseData.whatIfScenarios.push(scenario);
            console.log(`[WhatIfSampleScenarios] Added scenario ${scenario.id} to ${caseId}`);
            return true;
        },
        
        // Get scenario by ID across all cases
        findScenarioById: function(scenarioId) {
            if (!window.cases) return null;
            for (const caseData of window.cases) {
                if (!caseData.whatIfScenarios) continue;
                const scenario = caseData.whatIfScenarios.find(s => s.id === scenarioId);
                if (scenario) {
                    return { caseId: caseData.id, scenario };
                }
            }
            return null;
        },
        
        // List all scenario IDs
        listAllScenarioIds: function() {
            if (!window.cases) return [];
            const ids = [];
            for (const caseData of window.cases) {
                if (!caseData.whatIfScenarios) continue;
                for (const scenario of caseData.whatIfScenarios) {
                    ids.push({
                        caseId: caseData.id,
                        scenarioId: scenario.id,
                        title: scenario.title
                    });
                }
            }
            return ids;
        }
    };
    
    console.log('[WhatIfSampleScenarios] Utilities loaded');
    
})();
