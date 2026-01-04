/**
 * ReasonDx RxNorm Integration Module
 * Provides medication search using NIH's RxNorm API
 * Version 1.0 | December 2024
 * 
 * RxNorm API Documentation: https://lhncbc.nlm.nih.gov/RxNav/APIs/RxNormAPIs.html
 * No license required - free public API from National Library of Medicine
 * 
 * Features:
 * - Autocomplete drug names
 * - Search by generic or brand name
 * - Get drug details (ingredients, strengths, dosage forms)
 * - Get related drugs
 * - Drug class information
 */

const RxNormIntegration = {

    // ============================================================
    // CONFIGURATION
    // ============================================================
    config: {
        baseUrl: 'https://rxnav.nlm.nih.gov/REST',
        timeout: 10000,
        cacheEnabled: true,
        cacheDuration: 3600000, // 1 hour in milliseconds
        maxAutocompleteResults: 20
    },

    // Simple cache to reduce API calls
    cache: new Map(),

    // ============================================================
    // CORE API METHODS
    // ============================================================

    /**
     * Make API request to RxNorm
     * @param {string} endpoint - API endpoint
     * @param {object} params - Query parameters
     * @returns {Promise<object>} API response
     */
    async apiRequest(endpoint, params = {}) {
        const queryString = new URLSearchParams(params).toString();
        const url = `${this.config.baseUrl}${endpoint}.json${queryString ? '?' + queryString : ''}`;
        
        // Check cache first
        if (this.config.cacheEnabled && this.cache.has(url)) {
            const cached = this.cache.get(url);
            if (Date.now() - cached.timestamp < this.config.cacheDuration) {
                return cached.data;
            }
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Accept': 'application/json' },
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`RxNorm API error: ${response.status}`);
            }

            const data = await response.json();

            // Cache the response
            if (this.config.cacheEnabled) {
                this.cache.set(url, { data, timestamp: Date.now() });
            }

            return data;
        } catch (error) {
            console.error('RxNorm API request failed:', error);
            throw error;
        }
    },

    // ============================================================
    // AUTOCOMPLETE / SEARCH METHODS
    // ============================================================

    /**
     * Get autocomplete suggestions for drug names
     * Uses the displaynames endpoint which provides strings for UI autocomplete
     * @param {string} query - Search query
     * @returns {Promise<string[]>} Array of drug name suggestions
     */
    async getAutocompleteSuggestions(query) {
        if (!query || query.length < 2) return [];

        try {
            // Use approximate match for better fuzzy results
            const data = await this.apiRequest('/approximateTerm', { 
                term: query,
                maxEntries: this.config.maxAutocompleteResults
            });

            if (data.approximateGroup && data.approximateGroup.candidate) {
                return data.approximateGroup.candidate.map(c => ({
                    name: c.name,
                    rxcui: c.rxcui,
                    score: c.score
                }));
            }
            return [];
        } catch (error) {
            console.error('Autocomplete error:', error);
            return [];
        }
    },

    /**
     * Search for drugs by name (generic or brand)
     * @param {string} name - Drug name to search
     * @returns {Promise<object[]>} Array of drug objects
     */
    async searchDrugs(name) {
        if (!name) return [];

        try {
            const data = await this.apiRequest('/drugs', { name });
            
            if (data.drugGroup && data.drugGroup.conceptGroup) {
                const results = [];
                
                for (const group of data.drugGroup.conceptGroup) {
                    if (group.conceptProperties) {
                        for (const drug of group.conceptProperties) {
                            results.push({
                                rxcui: drug.rxcui,
                                name: drug.name,
                                synonym: drug.synonym,
                                tty: group.tty, // Term type (SBD, SCD, etc.)
                                termType: this.getTermTypeDescription(group.tty)
                            });
                        }
                    }
                }
                
                return results;
            }
            return [];
        } catch (error) {
            console.error('Drug search error:', error);
            return [];
        }
    },

    /**
     * Get spelling suggestions for misspelled drug names
     * @param {string} name - Potentially misspelled drug name
     * @returns {Promise<string[]>} Array of spelling suggestions
     */
    async getSpellingSuggestions(name) {
        if (!name) return [];

        try {
            const data = await this.apiRequest('/spellingsuggestions', { name });
            
            if (data.suggestionGroup && data.suggestionGroup.suggestionList) {
                return data.suggestionGroup.suggestionList.suggestion || [];
            }
            return [];
        } catch (error) {
            console.error('Spelling suggestions error:', error);
            return [];
        }
    },

    // ============================================================
    // DRUG DETAILS METHODS
    // ============================================================

    /**
     * Get detailed properties for a drug by RxCUI
     * @param {string} rxcui - RxNorm Concept Unique Identifier
     * @returns {Promise<object>} Drug properties
     */
    async getDrugProperties(rxcui) {
        if (!rxcui) return null;

        try {
            const data = await this.apiRequest(`/rxcui/${rxcui}/properties`);
            
            if (data.properties) {
                return {
                    rxcui: data.properties.rxcui,
                    name: data.properties.name,
                    synonym: data.properties.synonym,
                    termType: data.properties.tty,
                    termTypeDescription: this.getTermTypeDescription(data.properties.tty)
                };
            }
            return null;
        } catch (error) {
            console.error('Get drug properties error:', error);
            return null;
        }
    },

    /**
     * Get all properties for a drug including attributes
     * @param {string} rxcui - RxNorm Concept Unique Identifier
     * @returns {Promise<object>} Comprehensive drug properties
     */
    async getAllDrugProperties(rxcui) {
        if (!rxcui) return null;

        try {
            const data = await this.apiRequest(`/rxcui/${rxcui}/allProperties`, {
                prop: 'all'
            });
            
            if (data.propConceptGroup && data.propConceptGroup.propConcept) {
                const properties = {};
                
                for (const prop of data.propConceptGroup.propConcept) {
                    if (!properties[prop.propCategory]) {
                        properties[prop.propCategory] = [];
                    }
                    properties[prop.propCategory].push({
                        name: prop.propName,
                        value: prop.propValue
                    });
                }
                
                return properties;
            }
            return null;
        } catch (error) {
            console.error('Get all drug properties error:', error);
            return null;
        }
    },

    /**
     * Get related drugs (ingredients, brands, generics, etc.)
     * @param {string} rxcui - RxNorm Concept Unique Identifier
     * @returns {Promise<object>} Related drug concepts grouped by type
     */
    async getRelatedDrugs(rxcui) {
        if (!rxcui) return null;

        try {
            const data = await this.apiRequest(`/rxcui/${rxcui}/allrelated`);
            
            if (data.allRelatedGroup && data.allRelatedGroup.conceptGroup) {
                const related = {};
                
                for (const group of data.allRelatedGroup.conceptGroup) {
                    if (group.conceptProperties && group.conceptProperties.length > 0) {
                        related[group.tty] = {
                            termType: group.tty,
                            description: this.getTermTypeDescription(group.tty),
                            concepts: group.conceptProperties.map(c => ({
                                rxcui: c.rxcui,
                                name: c.name,
                                synonym: c.synonym
                            }))
                        };
                    }
                }
                
                return related;
            }
            return null;
        } catch (error) {
            console.error('Get related drugs error:', error);
            return null;
        }
    },

    /**
     * Get NDC codes for a drug
     * @param {string} rxcui - RxNorm Concept Unique Identifier
     * @returns {Promise<string[]>} Array of NDC codes
     */
    async getNDCs(rxcui) {
        if (!rxcui) return [];

        try {
            const data = await this.apiRequest(`/rxcui/${rxcui}/ndcs`);
            
            if (data.ndcGroup && data.ndcGroup.ndcList) {
                return data.ndcGroup.ndcList.ndc || [];
            }
            return [];
        } catch (error) {
            console.error('Get NDCs error:', error);
            return [];
        }
    },

    // ============================================================
    // DRUG CLASS METHODS (Uses RxClass API)
    // ============================================================

    /**
     * Get drug classes for a drug
     * @param {string} rxcui - RxNorm Concept Unique Identifier
     * @returns {Promise<object[]>} Array of drug classes
     */
    async getDrugClasses(rxcui) {
        if (!rxcui) return [];

        try {
            // RxClass API endpoint
            const response = await fetch(
                `https://rxnav.nlm.nih.gov/REST/rxclass/class/byRxcui.json?rxcui=${rxcui}`
            );
            const data = await response.json();
            
            if (data.rxclassDrugInfoList && data.rxclassDrugInfoList.rxclassDrugInfo) {
                return data.rxclassDrugInfoList.rxclassDrugInfo.map(info => ({
                    className: info.rxclassMinConceptItem.className,
                    classId: info.rxclassMinConceptItem.classId,
                    classType: info.rxclassMinConceptItem.classType
                }));
            }
            return [];
        } catch (error) {
            console.error('Get drug classes error:', error);
            return [];
        }
    },

    // ============================================================
    // HELPER METHODS
    // ============================================================

    /**
     * Get human-readable description for term type codes
     * @param {string} tty - Term type code
     * @returns {string} Term type description
     */
    getTermTypeDescription(tty) {
        const termTypes = {
            'IN': 'Ingredient',
            'PIN': 'Precise Ingredient',
            'MIN': 'Multiple Ingredients',
            'SCDC': 'Semantic Clinical Drug Component',
            'SCDF': 'Semantic Clinical Drug Form',
            'SCDG': 'Semantic Clinical Drug Group',
            'SCD': 'Semantic Clinical Drug',
            'BN': 'Brand Name',
            'SBDC': 'Semantic Branded Drug Component',
            'SBDF': 'Semantic Branded Drug Form',
            'SBDG': 'Semantic Branded Drug Group',
            'SBD': 'Semantic Branded Drug',
            'PSN': 'Prescribable Name',
            'SY': 'Synonym',
            'TMSY': 'Tall Man Lettering Synonym',
            'DF': 'Dose Form',
            'ET': 'Entry Term',
            'DFG': 'Dose Form Group',
            'GPCK': 'Generic Pack',
            'BPCK': 'Brand Name Pack'
        };
        return termTypes[tty] || tty;
    },

    /**
     * Format drug name for display (capitalize appropriately)
     * @param {string} name - Drug name
     * @returns {string} Formatted name
     */
    formatDrugName(name) {
        if (!name) return '';
        // Capitalize first letter of each word for brand names
        // Keep generic names lowercase (convention)
        return name;
    },

    /**
     * Clear the cache
     */
    clearCache() {
        this.cache.clear();
    },

    // ============================================================
    // HIGH-LEVEL SEARCH FOR REASONDX UI
    // ============================================================

    /**
     * Comprehensive drug search for ReasonDx UI
     * Combines multiple API calls for rich search results
     * @param {string} query - Search query
     * @returns {Promise<object[]>} Enriched search results
     */
    async comprehensiveSearch(query) {
        if (!query || query.length < 2) return [];

        try {
            // First, try direct drug search
            let results = await this.searchDrugs(query);

            // If no results, try spelling suggestions
            if (results.length === 0) {
                const suggestions = await this.getSpellingSuggestions(query);
                if (suggestions.length > 0) {
                    // Search with first suggestion
                    results = await this.searchDrugs(suggestions[0]);
                }
            }

            // If still no results, try approximate matching
            if (results.length === 0) {
                const approxResults = await this.getAutocompleteSuggestions(query);
                results = approxResults.map(r => ({
                    rxcui: r.rxcui,
                    name: r.name,
                    termType: 'Approximate Match'
                }));
            }

            // Deduplicate and sort by relevance
            const seen = new Set();
            const uniqueResults = results.filter(r => {
                const key = r.name.toLowerCase();
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });

            return uniqueResults.slice(0, this.config.maxAutocompleteResults);

        } catch (error) {
            console.error('Comprehensive search error:', error);
            return [];
        }
    },

    /**
     * Get full drug details for a selected medication
     * @param {string} rxcui - RxNorm Concept Unique Identifier
     * @returns {Promise<object>} Complete drug information
     */
    async getFullDrugDetails(rxcui) {
        if (!rxcui) return null;

        try {
            const [properties, related, classes, allProps] = await Promise.all([
                this.getDrugProperties(rxcui),
                this.getRelatedDrugs(rxcui),
                this.getDrugClasses(rxcui),
                this.getAllDrugProperties(rxcui)
            ]);

            return {
                rxcui,
                ...properties,
                related,
                classes,
                allProperties: allProps,
                
                // Extract useful info from allProperties
                ingredients: related?.IN?.concepts || related?.PIN?.concepts || [],
                brands: related?.BN?.concepts || [],
                doseForms: related?.DF?.concepts || [],
                strengths: allProps?.ATTRIBUTES?.filter(p => p.name === 'RXN_STRENGTH')?.map(p => p.value) || []
            };

        } catch (error) {
            console.error('Get full drug details error:', error);
            return null;
        }
    }
};

// ============================================================
// UI COMPONENT FOR MEDICATION SEARCH
// ============================================================

/**
 * Create a medication search input with autocomplete
 * @param {string} containerId - ID of container element
 * @param {function} onSelect - Callback when medication is selected
 */
function createMedicationSearchUI(containerId, onSelect) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Create HTML structure
    container.innerHTML = `
        <div class="medication-search-container">
            <input type="text" 
                   id="medication-search-input" 
                   class="medication-search-input"
                   placeholder="Search medications (e.g., metformin, lisinopril)..."
                   autocomplete="off">
            <div id="medication-search-results" class="medication-search-results" style="display: none;"></div>
            <div id="medication-selected" class="medication-selected" style="display: none;"></div>
        </div>
    `;

    const input = document.getElementById('medication-search-input');
    const resultsDiv = document.getElementById('medication-search-results');
    const selectedDiv = document.getElementById('medication-selected');

    let debounceTimer;

    // Input event handler with debouncing
    input.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const query = e.target.value.trim();

        if (query.length < 2) {
            resultsDiv.style.display = 'none';
            return;
        }

        debounceTimer = setTimeout(async () => {
            resultsDiv.innerHTML = '<div class="searching">Searching...</div>';
            resultsDiv.style.display = 'block';

            const results = await RxNormIntegration.comprehensiveSearch(query);

            if (results.length === 0) {
                resultsDiv.innerHTML = '<div class="no-results">No medications found</div>';
            } else {
                resultsDiv.innerHTML = results.map(drug => `
                    <div class="medication-result" data-rxcui="${drug.rxcui}" data-name="${drug.name}">
                        <span class="drug-name">${drug.name}</span>
                        <span class="drug-type">${drug.termType || ''}</span>
                    </div>
                `).join('');

                // Add click handlers
                resultsDiv.querySelectorAll('.medication-result').forEach(el => {
                    el.addEventListener('click', async () => {
                        const rxcui = el.dataset.rxcui;
                        const name = el.dataset.name;
                        
                        input.value = name;
                        resultsDiv.style.display = 'none';

                        // Get full details
                        const details = await RxNormIntegration.getFullDrugDetails(rxcui);
                        
                        if (onSelect) {
                            onSelect({
                                rxcui,
                                name,
                                details
                            });
                        }

                        // Show selected medication details
                        if (details) {
                            selectedDiv.innerHTML = `
                                <div class="selected-medication">
                                    <h4>${details.name}</h4>
                                    ${details.classes.length > 0 ? 
                                        `<p><strong>Class:</strong> ${details.classes.map(c => c.className).join(', ')}</p>` : ''}
                                    ${details.ingredients.length > 0 ? 
                                        `<p><strong>Ingredients:</strong> ${details.ingredients.map(i => i.name).join(', ')}</p>` : ''}
                                    ${details.strengths.length > 0 ? 
                                        `<p><strong>Strengths:</strong> ${details.strengths.join(', ')}</p>` : ''}
                                </div>
                            `;
                            selectedDiv.style.display = 'block';
                        }
                    });
                });
            }
        }, 300); // 300ms debounce
    });

    // Hide results when clicking outside
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
            resultsDiv.style.display = 'none';
        }
    });
}

// ============================================================
// CSS STYLES FOR MEDICATION SEARCH UI
// ============================================================
const medicationSearchStyles = `
<style>
.medication-search-container {
    position: relative;
    width: 100%;
    max-width: 500px;
}

.medication-search-input {
    width: 100%;
    padding: 12px 16px;
    font-size: 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s;
}

.medication-search-input:focus {
    border-color: #2196F3;
}

.medication-search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 300px;
    overflow-y: auto;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 1000;
    margin-top: 4px;
}

.medication-result {
    padding: 12px 16px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
}

.medication-result:last-child {
    border-bottom: none;
}

.medication-result:hover {
    background: #f5f5f5;
}

.drug-name {
    font-weight: 500;
    color: #333;
}

.drug-type {
    font-size: 12px;
    color: #888;
    background: #f0f0f0;
    padding: 2px 8px;
    border-radius: 4px;
}

.searching, .no-results {
    padding: 16px;
    text-align: center;
    color: #666;
}

.medication-selected {
    margin-top: 16px;
    padding: 16px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #2196F3;
}

.selected-medication h4 {
    margin: 0 0 8px 0;
    color: #1976D2;
}

.selected-medication p {
    margin: 4px 0;
    font-size: 14px;
}
</style>
`;

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RxNormIntegration, createMedicationSearchUI };
}
if (typeof window !== 'undefined') {
    window.RxNormIntegration = RxNormIntegration;
    window.createMedicationSearchUI = createMedicationSearchUI;
    
    // Inject styles
    if (document.head) {
        document.head.insertAdjacentHTML('beforeend', medicationSearchStyles);
    }
}
