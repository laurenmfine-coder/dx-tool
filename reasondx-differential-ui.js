// ============================================================
// REASONDX SEARCHABLE DIFFERENTIAL UI
// ============================================================
// Replaces the limited diagnosis list with a comprehensive
// searchable interface using the 800+ diagnosis database
// ============================================================

(function() {
    'use strict';
    
    // ============================================================
    // RENDER SEARCHABLE DIFFERENTIAL
    // ============================================================
    
    window.renderSearchableDifferentialUI = function(variant) {
        const totalSelected = (window.state?.rankedDifferential || []).length;
        
        return `
            <div class="mb-4">
                <h4 class="font-semibold text-gray-700 mb-2">Your Ranked Differential</h4>
                <div id="ranked-differential-list" class="min-h-[100px] bg-gray-50 rounded-lg p-2 ${totalSelected === 0 ? 'flex items-center justify-center' : ''}">
                    ${totalSelected === 0 ? 
                        '<p class="text-gray-400 text-sm text-center">Search and add diagnoses below</p>' :
                        window.renderRankedDifferentialItems()
                    }
                </div>
            </div>
            
            <!-- Searchable Diagnosis Entry -->
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 mb-4">
                <h4 class="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <span>🔍</span> Search 800+ Diagnoses
                </h4>
                
                <!-- Search Input -->
                <div class="relative mb-3">
                    <input type="text" 
                           id="diagnosis-search-input"
                           placeholder="Type to search (e.g., 'chest pain', 'PE', 'pneumonia')..."
                           class="w-full px-4 py-3 pl-10 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base"
                           oninput="window.handleDiagnosisSearch(this.value)"
                           onkeydown="window.handleSearchKeydown(event)"
                           autocomplete="off">
                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400">🔍</span>
                </div>
                
                <!-- Search Results -->
                <div id="diagnosis-search-results" class="max-h-[300px] overflow-y-auto rounded-lg border border-blue-200 bg-white hidden">
                    <!-- Results will be populated dynamically -->
                </div>
                
                <!-- Category Browser Toggle -->
                <button type="button" 
                        onclick="window.toggleCategoryBrowser()"
                        class="mt-3 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <span id="category-browser-icon">▶</span> Browse by organ system
                </button>
                
                <!-- Category Browser (hidden by default) -->
                <div id="category-browser" class="hidden mt-3">
                    <div class="flex flex-wrap gap-2 mb-3">
                        ${window.ReasonDxDifferentialSystem.getCategories().map(cat => `
                            <button type="button"
                                    onclick="window.showCategoryDiagnoses('${cat.id}')"
                                    class="px-3 py-1.5 text-sm rounded-full border border-blue-300 hover:bg-blue-100 transition
                                           ${cat.id === window.selectedDxCategory ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-blue-700'}">
                                ${cat.name} <span class="text-xs opacity-70">(${cat.count})</span>
                            </button>
                        `).join('')}
                    </div>
                    <div id="category-diagnoses-list" class="max-h-[250px] overflow-y-auto rounded-lg border border-blue-200 bg-white">
                        <p class="p-3 text-gray-500 text-sm text-center">Select a category above to browse diagnoses</p>
                    </div>
                </div>
            </div>
            
            <!-- Custom Entry (for truly novel diagnoses) -->
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                <h4 class="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                    <span>💡</span> Can't Find Your Diagnosis?
                </h4>
                <p class="text-sm text-purple-600 mb-2">Enter a custom diagnosis if it's not in our database.</p>
                <div class="flex gap-2">
                    <input type="text" 
                           id="custom-diagnosis-input"
                           placeholder="Enter custom diagnosis..."
                           class="flex-1 px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                           onkeypress="if(event.key === 'Enter') window.addCustomDiagnosis()">
                    <button type="button" 
                            onclick="window.addCustomDiagnosis()"
                            class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium cursor-pointer">
                        + Add
                    </button>
                </div>
                <p class="text-xs text-purple-500 mt-2">Custom entries are reviewed - you'll still receive partial credit for reasonable diagnoses!</p>
            </div>
        `;
    };
    
    // ============================================================
    // SEARCH HANDLER
    // ============================================================
    
    let searchTimeout = null;
    
    window.handleDiagnosisSearch = function(query) {
        clearTimeout(searchTimeout);
        
        const resultsContainer = document.getElementById('diagnosis-search-results');
        
        if (!query || query.length < 2) {
            resultsContainer.classList.add('hidden');
            return;
        }
        
        // Debounce search
        searchTimeout = setTimeout(() => {
            const results = window.ReasonDxDifferentialSystem.searchDiagnoses(query);
            
            if (results.length === 0) {
                resultsContainer.innerHTML = `
                    <div class="p-4 text-center text-gray-500">
                        <p>No matches found for "${query}"</p>
                        <p class="text-sm mt-1">Try a different term or add as custom diagnosis below</p>
                    </div>
                `;
            } else {
                resultsContainer.innerHTML = results.map((dx, idx) => {
                    const isAlreadySelected = (window.state?.rankedDifferential || []).some(d => 
                        d.name.toLowerCase() === dx.name.toLowerCase()
                    );
                    
                    return `
                        <div class="flex items-center justify-between p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0
                                    ${isAlreadySelected ? 'bg-green-50' : ''} ${idx === window.searchHighlightIndex ? 'bg-blue-100' : ''}"
                             onclick="window.addSearchResultToDifferential('${dx.name.replace(/'/g, "\\'")}', '${dx.category}')"
                             data-index="${idx}">
                            <div class="flex-1">
                                <div class="font-medium ${isAlreadySelected ? 'text-green-700' : 'text-gray-800'}">
                                    ${dx.name}
                                </div>
                                <div class="text-xs text-gray-500">${dx.categoryName}</div>
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
            window.searchHighlightIndex = 0;
        }, 150);
    };
    
    // Keyboard navigation in search results
    window.searchHighlightIndex = 0;
    
    window.handleSearchKeydown = function(event) {
        const resultsContainer = document.getElementById('diagnosis-search-results');
        if (resultsContainer.classList.contains('hidden')) return;
        
        const items = resultsContainer.querySelectorAll('[data-index]');
        if (items.length === 0) return;
        
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            window.searchHighlightIndex = Math.min(window.searchHighlightIndex + 1, items.length - 1);
            updateSearchHighlight(items);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            window.searchHighlightIndex = Math.max(window.searchHighlightIndex - 1, 0);
            updateSearchHighlight(items);
        } else if (event.key === 'Enter') {
            event.preventDefault();
            const highlighted = items[window.searchHighlightIndex];
            if (highlighted) highlighted.click();
        } else if (event.key === 'Escape') {
            resultsContainer.classList.add('hidden');
        }
    };
    
    function updateSearchHighlight(items) {
        items.forEach((item, idx) => {
            if (idx === window.searchHighlightIndex) {
                item.classList.add('bg-blue-100');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('bg-blue-100');
            }
        });
    }
    
    // ============================================================
    // ADD FROM SEARCH RESULTS
    // ============================================================
    
    window.addSearchResultToDifferential = function(name, category) {
        // Use the existing app function to add to differential
        if (typeof window.addToRankedDifferential === 'function') {
            window.addToRankedDifferential(name);
        } else {
            // Fallback if function not available
            console.warn('addToRankedDifferential not found, using fallback');
            if (!window.state) window.state = {};
            if (!window.state.rankedDifferential) window.state.rankedDifferential = [];
            
            if (window.state.rankedDifferential.find(d => d.name === name)) {
                return; // Already in list
            }
            
            window.state.rankedDifferential.push({
                name: name,
                category: category,
                likely: false,
                cannotMiss: false,
                custom: false
            });
            
            if (typeof window.render === 'function') {
                window.render();
            }
        }
        
        // Clear search
        const searchInput = document.getElementById('diagnosis-search-input');
        if (searchInput) {
            searchInput.value = '';
            searchInput.focus();
        }
        
        const resultsContainer = document.getElementById('diagnosis-search-results');
        if (resultsContainer) {
            resultsContainer.classList.add('hidden');
        }
    };
    
    // ============================================================
    // CATEGORY BROWSER
    // ============================================================
    
    window.selectedDxCategory = null;
    
    window.toggleCategoryBrowser = function() {
        const browser = document.getElementById('category-browser');
        const icon = document.getElementById('category-browser-icon');
        
        if (browser.classList.contains('hidden')) {
            browser.classList.remove('hidden');
            icon.textContent = '▼';
        } else {
            browser.classList.add('hidden');
            icon.textContent = '▶';
        }
    };
    
    window.showCategoryDiagnoses = function(categoryId) {
        window.selectedDxCategory = categoryId;
        
        const diagnoses = window.ReasonDxDifferentialSystem.getDiagnosesByCategory(categoryId);
        const container = document.getElementById('category-diagnoses-list');
        
        // Update category button styles
        document.querySelectorAll('#category-browser button').forEach(btn => {
            if (btn.onclick && btn.onclick.toString().includes(categoryId)) {
                btn.classList.add('bg-blue-500', 'text-white', 'border-blue-500');
                btn.classList.remove('bg-white', 'text-blue-700');
            } else {
                btn.classList.remove('bg-blue-500', 'text-white', 'border-blue-500');
                btn.classList.add('bg-white', 'text-blue-700');
            }
        });
        
        container.innerHTML = diagnoses.map(dx => {
            const isAlreadySelected = (window.state?.rankedDifferential || []).some(d => 
                d.name.toLowerCase() === dx.name.toLowerCase()
            );
            
            return `
                <div class="flex items-center justify-between p-2.5 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0
                            ${isAlreadySelected ? 'bg-green-50' : ''}"
                     onclick="window.addSearchResultToDifferential('${dx.name.replace(/'/g, "\\'")}', '${dx.category}')">
                    <div class="flex-1">
                        <span class="${isAlreadySelected ? 'text-green-700' : 'text-gray-800'}">
                            ${dx.name}
                        </span>
                    </div>
                    ${isAlreadySelected ? 
                        '<span class="text-green-600 text-xs">✓</span>' :
                        '<button class="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200">+ Add</button>'
                    }
                </div>
            `;
        }).join('');
    };
    
    // ============================================================
    // CUSTOM DIAGNOSIS (override existing if present)
    // ============================================================
    
    window.addCustomDiagnosis = function() {
        const input = document.getElementById('custom-diagnosis-input');
        if (!input) return;
        
        const name = input.value.trim();
        if (!name) return;
        
        // Check if it matches something in our database first
        let finalName = name;
        if (window.ReasonDxDifferentialSystem) {
            const match = window.ReasonDxDifferentialSystem.findMatchingDiagnosis(name);
            if (match) {
                finalName = match.name; // Use standardized name
            }
        }
        
        // Use existing app function if available
        if (typeof window.addCustomDiagnosisToDifferential === 'function') {
            window.addCustomDiagnosisToDifferential(finalName);
        } else if (typeof window.addToRankedDifferential === 'function') {
            window.addToRankedDifferential(finalName);
        } else {
            // Fallback
            console.warn('No add function found, using fallback');
            if (!window.state) window.state = {};
            if (!window.state.rankedDifferential) window.state.rankedDifferential = [];
            
            if (window.state.rankedDifferential.find(d => d.name.toLowerCase() === finalName.toLowerCase())) {
                alert('This diagnosis is already in your differential.');
                return;
            }
            
            window.state.rankedDifferential.push({
                name: finalName,
                category: 'custom',
                likely: false,
                cannotMiss: false,
                custom: true
            });
            
            if (typeof window.render === 'function') {
                window.render();
            }
        }
        
        input.value = '';
    };
    
    console.log('ReasonDx Searchable Differential UI loaded');
    
})();
