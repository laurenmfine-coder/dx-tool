/**
 * ReasonDx Searchable Orders Integration
 * Replaces the existing list-based workup UI with searchable orders
 * 
 * Last Updated: December 28, 2025
 */

(function() {
    'use strict';

    // Wait for dependencies
    function init() {
        if (typeof window.MASTER_ORDERS === 'undefined' || 
            typeof window.SearchableOrdersPanel === 'undefined') {
            setTimeout(init, 200);
            return;
        }
        
        console.log('[ReasonDx] Integrating Searchable Orders into workup phase...');
        patchWorkupFunctions();
        console.log('[ReasonDx] Searchable Orders integration complete.');
    }

    function patchWorkupFunctions() {
        // Store original function reference
        const originalRenderLabsPhase = window.renderLabsPhase;
        
        // Override renderLabsPhase to use new searchable UI
        window.renderLabsPhase = function(labs) {
            // Initialize the panel
            window.SearchableOrdersPanel.init();
            window.SearchableOrdersPanel.currentCategory = 'labs';
            
            // Get current differential for justification
            const currentDiff = window.state?.rankedDifferential?.map(d => d.name || d) || [];
            
            return `
                <h3 class="font-semibold text-gray-800 mb-2">🧪 Step 1: Order Laboratory Tests</h3>
                <p class="text-sm text-gray-600 mb-4">
                    Search and select the labs you need. <strong>You must justify each order</strong> by linking it to your differential diagnosis.
                </p>
                
                <div id="labs-orders-container">
                    ${window.SearchableOrdersPanel.render(currentDiff)}
                </div>
                
                <div class="mt-4">
                    <button onclick="submitSearchableLabsPhase()"
                            id="submit-labs-btn"
                            class="w-full py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 
                                   disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                            ${window.SearchableOrdersPanel.selectedOrders.length < 1 ? 'disabled' : ''}>
                        ${window.SearchableOrdersPanel.selectedOrders.length < 1 
                            ? 'Select at least 1 lab to continue' 
                            : `Send ${window.SearchableOrdersPanel.selectedOrders.length} Labs & View Results →`}
                    </button>
                </div>
            `;
        };

        // New submission function for searchable labs
        window.submitSearchableLabsPhase = function() {
            const selectedOrders = window.SearchableOrdersPanel.getSelectedOrders();
            
            if (selectedOrders.length === 0) {
                alert('Please select at least one lab test.');
                return;
            }
            
            // Map to existing state format
            state.selectedLabs = selectedOrders.map(o => o.id);
            state.labJustifications = window.SearchableOrdersPanel.orderJustifications;
            
            // Continue to results phase
            if (typeof advanceToLabsResults === 'function') {
                advanceToLabsResults();
            } else {
                state.workupPhase = 'labs-results';
                renderApp();
            }
        };

        // Override imaging phase similarly
        const originalRenderImagingPhase = window.renderImagingPhase;
        
        window.renderImagingPhaseFull = function(imaging) {
            window.SearchableOrdersPanel.init();
            window.SearchableOrdersPanel.currentCategory = 'imaging';
            
            const currentDiff = window.state?.rankedDifferential?.map(d => d.name || d) || [];
            
            return `
                <h3 class="font-semibold text-gray-800 mb-2">📷 Step 2: Order Imaging Studies</h3>
                <p class="text-sm text-gray-600 mb-4">
                    Search and select the imaging studies you need. <strong>Justify each order</strong> with your clinical reasoning.
                </p>
                
                <div id="imaging-orders-container">
                    ${window.SearchableOrdersPanel.render(currentDiff)}
                </div>
                
                <div class="mt-4">
                    <button onclick="submitSearchableImagingPhase()"
                            class="w-full py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 
                                   disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
                        ${window.SearchableOrdersPanel.selectedOrders.length === 0
                            ? 'Skip Imaging / Continue →'
                            : `Order ${window.SearchableOrdersPanel.selectedOrders.length} Studies & View Results →`}
                    </button>
                </div>
            `;
        };

        window.submitSearchableImagingPhase = function() {
            const selectedOrders = window.SearchableOrdersPanel.getSelectedOrders();
            
            state.selectedImaging = selectedOrders.map(o => o.id);
            state.imagingJustifications = window.SearchableOrdersPanel.orderJustifications;
            
            if (typeof advanceToImagingResults === 'function') {
                advanceToImagingResults();
            } else {
                state.workupPhase = 'imaging-results';
                renderApp();
            }
        };

        // Enhanced feedback that shows justification quality
        window.renderJustificationFeedback = function() {
            const labJustifications = state.labJustifications || {};
            const imagingJustifications = state.imagingJustifications || {};
            
            let feedbackHtml = '';
            let goodJustifications = 0;
            let totalOrders = 0;
            
            // Evaluate lab justifications
            Object.entries(labJustifications).forEach(([orderId, justif]) => {
                totalOrders++;
                const test = window.SearchableOrdersPanel.findTestById(orderId);
                const isGood = evaluateJustificationQuality(orderId, justif);
                if (isGood) goodJustifications++;
                
                feedbackHtml += `
                    <div class="p-2 rounded ${isGood ? 'bg-green-50' : 'bg-yellow-50'} mb-2">
                        <div class="font-medium">${test?.name || orderId}</div>
                        <div class="text-sm text-gray-600">
                            ${window.ORDER_JUSTIFICATIONS[justif.reason]?.label}: ${justif.diagnoses?.join(', ')}
                        </div>
                        ${!isGood ? `<div class="text-xs text-yellow-700 mt-1">💡 Consider: ${getJustificationSuggestion(orderId)}</div>` : ''}
                    </div>
                `;
            });
            
            const score = totalOrders > 0 ? Math.round((goodJustifications / totalOrders) * 100) : 0;
            
            return `
                <div class="bg-white rounded-lg border p-4 mt-4">
                    <h4 class="font-semibold text-gray-800 mb-2">🎯 Clinical Reasoning Score: ${score}%</h4>
                    <p class="text-sm text-gray-600 mb-3">
                        ${goodJustifications} of ${totalOrders} orders had well-justified reasoning.
                    </p>
                    <div class="space-y-2">
                        ${feedbackHtml || '<p class="text-gray-500">No orders to evaluate.</p>'}
                    </div>
                </div>
            `;
        };

        function evaluateJustificationQuality(orderId, justification) {
            // Basic evaluation - in production, this would be more sophisticated
            // Check if the justification makes clinical sense
            if (!justification || !justification.reason || !justification.diagnoses?.length) {
                return false;
            }
            return true;
        }

        function getJustificationSuggestion(orderId) {
            // Provide educational feedback
            const suggestions = {
                'troponin': 'Consider if this rules in/out ACS or helps assess cardiac injury severity',
                'cbc': 'Think about infection, anemia, or thrombocytopenia in your differential',
                'd_dimer': 'Most useful to rule OUT PE/DVT in low-probability patients',
                'ct_head_noncon': 'First-line for acute stroke, trauma, or suspected hemorrhage'
            };
            return suggestions[orderId] || 'Think about how this test changes your management.';
        }

        // Patch the SearchableOrdersPanel refresh to update submit button
        const originalRefresh = window.SearchableOrdersPanel.refreshUI;
        window.SearchableOrdersPanel.refreshUI = function() {
            const container = document.getElementById('labs-orders-container') || 
                             document.getElementById('imaging-orders-container');
            if (container) {
                const currentDiff = window.state?.rankedDifferential?.map(d => d.name || d) || [];
                container.innerHTML = this.render(currentDiff);
            }
            
            // Update submit button state
            const submitBtn = document.getElementById('submit-labs-btn');
            if (submitBtn) {
                if (this.selectedOrders.length >= 1) {
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-gray-300', 'cursor-not-allowed');
                    submitBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
                    submitBtn.textContent = `Send ${this.selectedOrders.length} Labs & View Results →`;
                } else {
                    submitBtn.disabled = true;
                    submitBtn.classList.add('bg-gray-300', 'cursor-not-allowed');
                    submitBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                    submitBtn.textContent = 'Select at least 1 lab to continue';
                }
            }
        };
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
