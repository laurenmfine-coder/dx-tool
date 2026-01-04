/**
 * ReasonDx Comprehensive Library Integration
 * Version 1.0 | December 2024
 * 
 * This module connects all the standalone libraries to the main ReasonDx platform:
 * - DiagnosisLibrary (782 diagnoses)
 * - PhysicalExamLibrary (889 findings)
 * - HPIElementsLibrary (238 elements)
 * - RiskFactorsLibrary (212 factors)
 * - ClinicalScoresLibrary (65 scores)
 * - RxNormIntegration (155,000+ medications)
 */

(function() {
    'use strict';

    console.log('[ReasonDx Integration] Initializing library integration...');

    // ============================================================
    // DIAGNOSIS LIBRARY INTEGRATION
    // ============================================================
    // Connect the comprehensive 782-diagnosis library to the search UI

    // Check if the differential system has been loaded
    if (typeof window.ReasonDxDifferentialSystem === 'undefined') {
        console.warn('[ReasonDx Integration] ReasonDxDifferentialSystem not loaded. Diagnosis search will use fallback.');
    } else {
        console.log('[ReasonDx Integration] ✓ ReasonDxDifferentialSystem connected');
    }

    /**
     * Enhanced diagnosis search that uses the comprehensive library
     * This overrides any case-specific allDiagnoses array
     */
    window.handleDiagnosisSearch = function(query) {
        const resultsContainer = document.getElementById('diagnosis-search-results');
        if (!resultsContainer) return;

        if (!query || query.length < 2) {
            resultsContainer.classList.add('hidden');
            resultsContainer.innerHTML = '';
            return;
        }

        // Use the comprehensive library if available
        let results = [];
        
        if (window.ReasonDxDifferentialSystem && typeof window.ReasonDxDifferentialSystem.searchDiagnoses === 'function') {
            results = window.ReasonDxDifferentialSystem.searchDiagnoses(query);
        } else if (window.DiagnosisLibrary && typeof window.DiagnosisLibrary.search === 'function') {
            results = window.DiagnosisLibrary.search(query);
        } else {
            console.warn('[ReasonDx Integration] No diagnosis library found for search');
            results = [];
        }

        // Limit to top 20 results for performance
        results = results.slice(0, 20);

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="p-4 text-center text-gray-500">
                    <p>No matches found for "${query}"</p>
                    <p class="text-sm mt-1">Try a different term or use the category browser below</p>
                </div>
            `;
        } else {
            const currentDifferential = window.state?.rankedDifferential || [];
            
            resultsContainer.innerHTML = results.map((dx, idx) => {
                const isAlreadySelected = currentDifferential.some(d => 
                    d.name.toLowerCase() === dx.name.toLowerCase()
                );
                const categoryName = dx.categoryName || dx.category || 'General';
                const isMustNotMiss = dx.mustNotMiss === true;
                
                return `
                    <div class="flex items-center justify-between p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0
                                ${isAlreadySelected ? 'bg-green-50' : ''}"
                         onclick="window.addSearchResultToDifferential('${dx.name.replace(/'/g, "\\'")}', '${(dx.category || 'general').replace(/'/g, "\\'")}')"
                         data-index="${idx}">
                        <div class="flex-1">
                            <div class="font-medium ${isAlreadySelected ? 'text-green-700' : 'text-gray-800'} flex items-center gap-2">
                                ${dx.name}
                                ${isMustNotMiss ? '<span class="px-1.5 py-0.5 text-xs bg-red-100 text-red-700 rounded">MNM</span>' : ''}
                            </div>
                            <div class="text-xs text-gray-500">${categoryName}</div>
                        </div>
                        ${isAlreadySelected ? 
                            '<span class="text-green-600 text-sm">✓ Added</span>' :
                            '<button class="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-medium">+ Add</button>'
                        }
                    </div>
                `;
            }).join('');
        }

        resultsContainer.classList.remove('hidden');
    };

    /**
     * Add a diagnosis from search results to the differential
     */
    window.addSearchResultToDifferential = function(name, category) {
        if (!window.state) window.state = {};
        if (!window.state.rankedDifferential) window.state.rankedDifferential = [];

        // Check if already in list
        if (window.state.rankedDifferential.find(d => d.name.toLowerCase() === name.toLowerCase())) {
            console.log('[ReasonDx Integration] Diagnosis already in differential:', name);
            return;
        }

        // Check if this is a must-not-miss diagnosis
        let isMustNotMiss = false;
        if (window.ReasonDxDifferentialSystem) {
            const dxInfo = window.ReasonDxDifferentialSystem.findMatchingDiagnosis(name);
            if (dxInfo && dxInfo.mustNotMiss) {
                isMustNotMiss = true;
            }
        }

        window.state.rankedDifferential.push({
            name: name,
            category: category,
            likely: false,
            cannotMiss: isMustNotMiss, // Pre-tag must-not-miss diagnoses
            custom: false
        });

        console.log('[ReasonDx Integration] Added to differential:', name, '(MNM:', isMustNotMiss, ')');

        // Clear search and re-render
        const searchInput = document.getElementById('diagnosis-search-input');
        if (searchInput) {
            searchInput.value = '';
        }
        const resultsContainer = document.getElementById('diagnosis-search-results');
        if (resultsContainer) {
            resultsContainer.classList.add('hidden');
        }

        // Re-render
        if (typeof window.render === 'function') {
            window.render();
        }
    };

    /**
     * Add a custom diagnosis (not in library)
     */
    window.addCustomDiagnosis = function() {
        const input = document.getElementById('custom-diagnosis-input');
        if (!input || !input.value.trim()) return;

        const name = input.value.trim();

        if (!window.state) window.state = {};
        if (!window.state.rankedDifferential) window.state.rankedDifferential = [];

        // Check if already in list
        if (window.state.rankedDifferential.find(d => d.name.toLowerCase() === name.toLowerCase())) {
            alert('This diagnosis is already in your differential.');
            return;
        }

        window.state.rankedDifferential.push({
            name: name,
            category: 'custom',
            likely: false,
            cannotMiss: false,
            custom: true
        });

        console.log('[ReasonDx Integration] Added custom diagnosis:', name);

        input.value = '';

        if (typeof window.render === 'function') {
            window.render();
        }
    };

    /**
     * Toggle category browser visibility
     */
    window.toggleCategoryBrowser = function() {
        const browser = document.getElementById('category-browser');
        const icon = document.getElementById('category-browser-icon');
        
        if (browser) {
            const isHidden = browser.classList.contains('hidden');
            browser.classList.toggle('hidden');
            if (icon) {
                icon.textContent = isHidden ? '▼' : '▶';
            }
        }
    };

    /**
     * Show diagnoses for a specific category
     */
    window.showCategoryDiagnoses = function(categoryId) {
        const container = document.getElementById('category-diagnoses-list');
        if (!container) return;

        let diagnoses = [];
        
        if (window.ReasonDxDifferentialSystem && typeof window.ReasonDxDifferentialSystem.getDiagnosesByCategory === 'function') {
            diagnoses = window.ReasonDxDifferentialSystem.getDiagnosesByCategory(categoryId);
        } else if (window.DiagnosisLibrary) {
            // Fallback to direct library access
            const cat = window.DiagnosisLibrary[categoryId];
            if (cat && cat.diagnoses) {
                diagnoses = cat.diagnoses;
            }
        }

        if (diagnoses.length === 0) {
            container.innerHTML = '<p class="p-3 text-gray-500 text-sm text-center">No diagnoses found in this category</p>';
            return;
        }

        const currentDifferential = window.state?.rankedDifferential || [];

        container.innerHTML = diagnoses.map(dx => {
            const isAlreadySelected = currentDifferential.some(d => 
                d.name.toLowerCase() === dx.name.toLowerCase()
            );
            const isMustNotMiss = dx.mustNotMiss === true;

            return `
                <div class="flex items-center justify-between p-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0
                            ${isAlreadySelected ? 'bg-green-50' : ''}"
                     onclick="window.addSearchResultToDifferential('${dx.name.replace(/'/g, "\\'")}', '${categoryId}')">
                    <div class="flex-1">
                        <span class="${isAlreadySelected ? 'text-green-700' : ''}">${dx.name}</span>
                        ${isMustNotMiss ? '<span class="ml-2 px-1.5 py-0.5 text-xs bg-red-100 text-red-700 rounded">MNM</span>' : ''}
                    </div>
                    ${isAlreadySelected ? 
                        '<span class="text-green-600 text-xs">✓</span>' :
                        '<span class="text-blue-500 text-xs">+ Add</span>'
                    }
                </div>
            `;
        }).join('');

        // Update active button styling
        const buttons = document.querySelectorAll('#dx-category-buttons button');
        buttons.forEach(btn => {
            if (btn.onclick && btn.onclick.toString().includes(categoryId)) {
                btn.classList.add('bg-blue-500', 'text-white', 'border-blue-500');
                btn.classList.remove('bg-white', 'text-blue-700');
            } else {
                btn.classList.remove('bg-blue-500', 'text-white', 'border-blue-500');
                btn.classList.add('bg-white', 'text-blue-700');
            }
        });
    };

    // ============================================================
    // PHYSICAL EXAM LIBRARY INTEGRATION
    // ============================================================

    /**
     * Get physical exam findings from the comprehensive library
     */
    window.getPhysicalExamFindings = function(systemId) {
        if (window.PhysicalExamLibrary) {
            const system = window.PhysicalExamLibrary[systemId];
            if (system && system.findings) {
                return system.findings;
            }
        }
        return [];
    };

    /**
     * Search physical exam findings
     */
    window.searchPhysicalExamFindings = function(query) {
        if (!query || query.length < 2) return [];
        
        const results = [];
        const q = query.toLowerCase();

        if (window.PhysicalExamLibrary) {
            for (const [systemId, system] of Object.entries(window.PhysicalExamLibrary)) {
                if (!system.findings) continue;
                
                for (const finding of system.findings) {
                    if (finding.name.toLowerCase().includes(q) ||
                        (finding.description && finding.description.toLowerCase().includes(q)) ||
                        (finding.tags && finding.tags.some(t => t.toLowerCase().includes(q)))) {
                        results.push({
                            ...finding,
                            system: systemId,
                            systemName: system.name
                        });
                    }
                }
            }
        }

        return results.slice(0, 20);
    };

    // ============================================================
    // HPI ELEMENTS LIBRARY INTEGRATION
    // ============================================================

    /**
     * Get HPI elements by category (OPQRST)
     */
    window.getHPIElements = function(category) {
        if (window.HPIElementsLibrary) {
            const cat = window.HPIElementsLibrary[category];
            if (cat && cat.elements) {
                return cat.elements;
            }
        }
        return [];
    };

    /**
     * Search HPI elements
     */
    window.searchHPIElements = function(query) {
        if (!query || query.length < 2) return [];
        
        const results = [];
        const q = query.toLowerCase();

        if (window.HPIElementsLibrary) {
            for (const [catId, category] of Object.entries(window.HPIElementsLibrary)) {
                if (!category.elements) continue;
                
                for (const element of category.elements) {
                    if (element.term.toLowerCase().includes(q) ||
                        (element.description && element.description.toLowerCase().includes(q)) ||
                        (element.examples && element.examples.some(e => e.toLowerCase().includes(q)))) {
                        results.push({
                            ...element,
                            category: catId,
                            categoryName: category.name
                        });
                    }
                }
            }
        }

        return results.slice(0, 20);
    };

    // ============================================================
    // CLINICAL SCORES INTEGRATION
    // ============================================================

    /**
     * Get clinical score details
     */
    window.getClinicalScore = function(scoreId) {
        if (window.ClinicalScoresLibrary) {
            for (const category of Object.values(window.ClinicalScoresLibrary)) {
                if (!category.scores) continue;
                const score = category.scores.find(s => s.id === scoreId);
                if (score) return score;
            }
        }
        return null;
    };

    /**
     * Calculate a clinical score
     */
    window.calculateClinicalScore = function(scoreId, criteria) {
        const score = window.getClinicalScore(scoreId);
        if (!score || !score.criteria) return null;

        let total = 0;
        const matches = [];

        for (const criterion of score.criteria) {
            if (criteria[criterion.id]) {
                total += criterion.points || 1;
                matches.push(criterion);
            }
        }

        // Find interpretation
        let interpretation = null;
        if (score.interpretation) {
            for (const interp of score.interpretation) {
                if (total >= interp.min && total <= interp.max) {
                    interpretation = interp;
                    break;
                }
            }
        }

        return {
            score: total,
            maxScore: score.maxScore,
            matches: matches,
            interpretation: interpretation
        };
    };

    // ============================================================
    // RISK FACTORS INTEGRATION
    // ============================================================

    /**
     * Get risk factors by category
     */
    window.getRiskFactors = function(categoryId) {
        if (window.RiskFactorsLibrary) {
            const cat = window.RiskFactorsLibrary[categoryId];
            if (cat && cat.factors) {
                return cat.factors;
            }
        }
        return [];
    };

    /**
     * Search risk factors
     */
    window.searchRiskFactors = function(query) {
        if (!query || query.length < 2) return [];
        
        const results = [];
        const q = query.toLowerCase();

        if (window.RiskFactorsLibrary) {
            for (const [catId, category] of Object.entries(window.RiskFactorsLibrary)) {
                if (!category.factors) continue;
                
                for (const factor of category.factors) {
                    if (factor.name.toLowerCase().includes(q) ||
                        (factor.description && factor.description.toLowerCase().includes(q)) ||
                        (factor.conditions && factor.conditions.some(c => c.toLowerCase().includes(q)))) {
                        results.push({
                            ...factor,
                            category: catId,
                            categoryName: category.name
                        });
                    }
                }
            }
        }

        return results.slice(0, 20);
    };

    // ============================================================
    // RXNORM MEDICATION INTEGRATION
    // ============================================================

    /**
     * Search medications using RxNorm API
     */
    window.searchMedications = async function(query) {
        if (window.RxNormAPI && typeof window.RxNormAPI.searchDrugs === 'function') {
            return await window.RxNormAPI.searchDrugs(query);
        }
        return [];
    };

    // ============================================================
    // LIBRARY STATUS CHECK
    // ============================================================

    window.checkLibraryStatus = function() {
        const status = {
            diagnosisLibrary: {
                loaded: typeof window.ReasonDxDifferentialSystem !== 'undefined' || typeof window.DiagnosisLibrary !== 'undefined',
                count: 0
            },
            physicalExamLibrary: {
                loaded: typeof window.PhysicalExamLibrary !== 'undefined',
                count: 0
            },
            hpiElementsLibrary: {
                loaded: typeof window.HPIElementsLibrary !== 'undefined',
                count: 0
            },
            riskFactorsLibrary: {
                loaded: typeof window.RiskFactorsLibrary !== 'undefined',
                count: 0
            },
            clinicalScoresLibrary: {
                loaded: typeof window.ClinicalScoresLibrary !== 'undefined',
                count: 0
            },
            rxnormIntegration: {
                loaded: typeof window.RxNormAPI !== 'undefined',
                count: '155,000+ (API)'
            }
        };

        // Count items in each library
        if (window.ReasonDxDifferentialSystem) {
            try {
                const allDx = window.ReasonDxDifferentialSystem.getAllDiagnoses();
                status.diagnosisLibrary.count = allDx ? allDx.length : 0;
            } catch (e) {}
        }

        if (window.PhysicalExamLibrary) {
            for (const system of Object.values(window.PhysicalExamLibrary)) {
                if (system.findings) {
                    status.physicalExamLibrary.count += system.findings.length;
                }
            }
        }

        if (window.HPIElementsLibrary) {
            for (const cat of Object.values(window.HPIElementsLibrary)) {
                if (cat.elements) {
                    status.hpiElementsLibrary.count += cat.elements.length;
                }
            }
        }

        if (window.RiskFactorsLibrary) {
            for (const cat of Object.values(window.RiskFactorsLibrary)) {
                if (cat.factors) {
                    status.riskFactorsLibrary.count += cat.factors.length;
                }
            }
        }

        if (window.ClinicalScoresLibrary) {
            for (const cat of Object.values(window.ClinicalScoresLibrary)) {
                if (cat.scores) {
                    status.clinicalScoresLibrary.count += cat.scores.length;
                }
            }
        }

        console.log('[ReasonDx Integration] Library Status:', status);
        return status;
    };

    // Run status check on load
    setTimeout(() => {
        window.checkLibraryStatus();
    }, 1000);

    console.log('[ReasonDx Integration] ✓ Library integration module loaded');

})();
