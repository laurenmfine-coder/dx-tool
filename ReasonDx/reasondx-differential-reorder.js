// ============================================================
// REASONDX: DIFFERENTIAL DRAG-AND-DROP REORDERING
// Version: 1.0.0
// Date: December 27, 2025
// 
// This module adds drag-and-drop reordering capability to the
// ranked differential diagnosis list. Works with touch and mouse.
//
// INTEGRATION: Add this script tag to index.html after other
// ReasonDx modules (before </body>):
// <script src="reasondx-differential-reorder.js"></script>
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // STATE
    // ============================================================

    let dragState = {
        isDragging: false,
        draggedIndex: null,
        draggedElement: null,
        placeholder: null,
        startY: 0,
        currentY: 0,
        itemHeight: 0,
        items: [],
        container: null,
        touchStartX: 0,
        touchStartY: 0
    };

    // ============================================================
    // INITIALIZATION
    // ============================================================

    /**
     * Initialize drag-and-drop on the differential list
     * Called automatically when DOM is ready and after renders
     */
    function initDragDrop() {
        const container = document.getElementById('ranked-differential-list');
        if (!container) return;
        
        // Avoid re-initializing
        if (container.dataset.dragInitialized === 'true') return;
        container.dataset.dragInitialized = 'true';
        
        dragState.container = container;
        
        // Event delegation on container
        container.addEventListener('mousedown', handleDragStart, false);
        container.addEventListener('touchstart', handleTouchStart, { passive: false });
        
        console.log('✅ Differential drag-drop initialized');
    }

    /**
     * Re-initialize after DOM changes (called from render cycle)
     */
    window.reinitDifferentialDragDrop = function() {
        const container = document.getElementById('ranked-differential-list');
        if (container) {
            container.dataset.dragInitialized = 'false';
            initDragDrop();
        }
    };

    // ============================================================
    // EVENT HANDLERS
    // ============================================================

    /**
     * Handle touch start - determine if it's a drag gesture
     */
    function handleTouchStart(e) {
        const target = e.target.closest('.drag-handle, [data-drag-handle]');
        if (!target) return;
        
        const item = target.closest('.ranked-dx-item, [data-differential-index]');
        if (!item) return;
        
        e.preventDefault();
        
        const touch = e.touches[0];
        dragState.touchStartX = touch.clientX;
        dragState.touchStartY = touch.clientY;
        
        // Add touch move/end listeners
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd, false);
        document.addEventListener('touchcancel', handleTouchEnd, false);
        
        // Small delay to distinguish tap from drag
        setTimeout(() => {
            if (dragState.touchStartY !== null) {
                startDrag(item, touch.clientY);
            }
        }, 100);
    }

    /**
     * Handle mouse down - start drag
     */
    function handleDragStart(e) {
        // Only left mouse button
        if (e.button !== 0) return;
        
        const target = e.target.closest('.drag-handle, [data-drag-handle]');
        if (!target) return;
        
        const item = target.closest('.ranked-dx-item, [data-differential-index]');
        if (!item) return;
        
        e.preventDefault();
        
        startDrag(item, e.clientY);
        
        // Add mouse move/up listeners
        document.addEventListener('mousemove', handleMouseMove, false);
        document.addEventListener('mouseup', handleMouseUp, false);
    }

    /**
     * Start the drag operation
     */
    function startDrag(item, clientY) {
        const index = parseInt(item.dataset.differentialIndex || item.dataset.index, 10);
        if (isNaN(index)) return;
        
        dragState.isDragging = true;
        dragState.draggedIndex = index;
        dragState.draggedElement = item;
        dragState.startY = clientY;
        dragState.currentY = clientY;
        
        // Get item dimensions
        const rect = item.getBoundingClientRect();
        dragState.itemHeight = rect.height;
        
        // Get all items
        dragState.items = Array.from(dragState.container.querySelectorAll('.ranked-dx-item, [data-differential-index]'));
        
        // Add visual feedback
        item.classList.add('dragging');
        item.style.zIndex = '1000';
        item.style.position = 'relative';
        document.body.classList.add('is-dragging');
        
        // Create placeholder
        createPlaceholder(item);
        
        // Log for analytics
        if (typeof window.logRankingChange === 'function') {
            window.logRankingChange('drag_start', null, { fromIndex: index });
        }
    }

    /**
     * Handle mouse move during drag
     */
    function handleMouseMove(e) {
        if (!dragState.isDragging) return;
        
        e.preventDefault();
        updateDragPosition(e.clientY);
    }

    /**
     * Handle touch move during drag
     */
    function handleTouchMove(e) {
        if (!dragState.isDragging) return;
        
        e.preventDefault();
        const touch = e.touches[0];
        updateDragPosition(touch.clientY);
    }

    /**
     * Update dragged item position and check for swaps
     */
    function updateDragPosition(clientY) {
        dragState.currentY = clientY;
        const deltaY = clientY - dragState.startY;
        
        // Move the dragged element visually
        if (dragState.draggedElement) {
            dragState.draggedElement.style.transform = `translateY(${deltaY}px)`;
        }
        
        // Check for position swap
        checkForSwap(clientY);
    }

    /**
     * Check if we should swap positions with another item
     */
    function checkForSwap(clientY) {
        const items = dragState.items;
        const draggedIndex = dragState.draggedIndex;
        
        for (let i = 0; i < items.length; i++) {
            if (i === draggedIndex) continue;
            
            const item = items[i];
            const rect = item.getBoundingClientRect();
            const itemMiddle = rect.top + rect.height / 2;
            
            // Check if we've crossed the midpoint of another item
            if (draggedIndex < i && clientY > itemMiddle) {
                // Moving down - swap with item below
                swapItems(draggedIndex, i);
                break;
            } else if (draggedIndex > i && clientY < itemMiddle) {
                // Moving up - swap with item above
                swapItems(draggedIndex, i);
                break;
            }
        }
    }

    /**
     * Swap two items in the differential
     */
    function swapItems(fromIndex, toIndex) {
        if (!window.state || !window.state.rankedDifferential) return;
        
        const differential = window.state.rankedDifferential;
        
        // Swap in array
        const item = differential.splice(fromIndex, 1)[0];
        differential.splice(toIndex, 0, item);
        
        // Update drag state
        dragState.draggedIndex = toIndex;
        
        // Re-render the list without losing drag state
        updateListVisual();
        
        // Log the change
        if (typeof window.logRankingChange === 'function') {
            window.logRankingChange('reorder', item.name, { fromIndex, toIndex });
        }
    }

    /**
     * Update list visual during drag without full re-render
     */
    function updateListVisual() {
        const container = dragState.container;
        if (!container || !window.state?.rankedDifferential) return;
        
        // Get fresh item list
        dragState.items = Array.from(container.querySelectorAll('.ranked-dx-item, [data-differential-index]'));
        
        // Update rank numbers
        dragState.items.forEach((item, idx) => {
            const rankNum = item.querySelector('.rank-number, .w-8');
            if (rankNum) {
                rankNum.textContent = idx + 1;
            }
            item.dataset.differentialIndex = idx;
            item.dataset.index = idx;
        });
    }

    /**
     * Handle mouse up - end drag
     */
    function handleMouseUp(e) {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        endDrag();
    }

    /**
     * Handle touch end - end drag
     */
    function handleTouchEnd(e) {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('touchcancel', handleTouchEnd);
        
        dragState.touchStartX = null;
        dragState.touchStartY = null;
        
        if (dragState.isDragging) {
            endDrag();
        }
    }

    /**
     * End the drag operation
     */
    function endDrag() {
        if (!dragState.isDragging) return;
        
        // Reset styles on dragged element
        if (dragState.draggedElement) {
            dragState.draggedElement.classList.remove('dragging');
            dragState.draggedElement.style.transform = '';
            dragState.draggedElement.style.zIndex = '';
            dragState.draggedElement.style.position = '';
        }
        
        // Remove placeholder
        if (dragState.placeholder && dragState.placeholder.parentNode) {
            dragState.placeholder.parentNode.removeChild(dragState.placeholder);
        }
        
        document.body.classList.remove('is-dragging');
        
        // Log completion
        if (typeof window.logRankingChange === 'function') {
            window.logRankingChange('drag_end', null, { 
                finalIndex: dragState.draggedIndex 
            });
        }
        
        // Reset state
        dragState.isDragging = false;
        dragState.draggedIndex = null;
        dragState.draggedElement = null;
        dragState.placeholder = null;
        
        // Trigger full re-render to sync state
        if (typeof window.render === 'function') {
            window.render();
        }
    }

    /**
     * Create a placeholder element
     */
    function createPlaceholder(item) {
        const placeholder = document.createElement('div');
        placeholder.className = 'drag-placeholder';
        placeholder.style.height = dragState.itemHeight + 'px';
        placeholder.style.backgroundColor = '#e5e7eb';
        placeholder.style.borderRadius = '8px';
        placeholder.style.margin = '4px 0';
        placeholder.style.border = '2px dashed #9ca3af';
        
        dragState.placeholder = placeholder;
    }

    // ============================================================
    // CSS INJECTION
    // ============================================================

    function injectStyles() {
        if (document.getElementById('drag-drop-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'drag-drop-styles';
        style.textContent = `
            /* Drag handle cursor */
            .drag-handle,
            [data-drag-handle] {
                cursor: grab;
                touch-action: none;
            }
            
            .drag-handle:active,
            [data-drag-handle]:active {
                cursor: grabbing;
            }
            
            /* Dragging state */
            .ranked-dx-item.dragging {
                opacity: 0.9;
                box-shadow: 0 8px 24px rgba(0,0,0,0.2);
                transform: scale(1.02);
                background: white !important;
            }
            
            body.is-dragging {
                user-select: none;
                -webkit-user-select: none;
            }
            
            body.is-dragging * {
                cursor: grabbing !important;
            }
            
            /* Placeholder */
            .drag-placeholder {
                transition: height 0.2s ease;
            }
            
            /* Drop indicator */
            .ranked-dx-item.drag-over {
                border-top: 3px solid #3b82f6 !important;
            }
            
            /* Smooth reordering animation */
            .ranked-dx-item {
                transition: transform 0.15s ease, box-shadow 0.15s ease;
            }
            
            .ranked-dx-item.dragging {
                transition: none;
            }
        `;
        
        document.head.appendChild(style);
    }

    // ============================================================
    // ENHANCED RENDER FUNCTION
    // ============================================================

    /**
     * Enhanced version of renderRankedDifferentialItems that includes drag handles
     * This overrides the existing function if present
     */
    window.renderRankedDifferentialItemsWithDrag = function() {
        if (!window.state?.rankedDifferential) return '';
        
        return window.state.rankedDifferential.map((dx, index) => {
            const likelyClass = dx.likely ? 'bg-green-50 border-green-300' : '';
            const mustNotMissClass = dx.cannotMiss ? 'border-l-4 border-l-red-500' : '';
            
            return `
                <div class="ranked-dx-item flex items-center gap-2 p-3 mb-2 rounded-lg border-2 ${likelyClass} ${mustNotMissClass} bg-white border-gray-200 hover:shadow-md"
                     data-differential-index="${index}"
                     data-index="${index}"
                     draggable="false">
                    
                    <!-- Drag Handle -->
                    <div class="drag-handle flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 cursor-grab"
                         data-drag-handle="true"
                         title="Drag to reorder">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M7 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                        </svg>
                    </div>
                    
                    <!-- Rank Number -->
                    <div class="rank-number w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                                ${index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}">
                        ${index + 1}
                    </div>
                    
                    <!-- Diagnosis Name -->
                    <div class="flex-1 font-medium text-gray-800">
                        ${dx.name}
                        ${dx.isCustom ? '<span class="ml-1 text-xs text-purple-500">(custom)</span>' : ''}
                    </div>
                    
                    <!-- Classification Badges -->
                    <div class="flex items-center gap-1">
                        <!-- Likely Toggle -->
                        <label class="flex items-center gap-1 cursor-pointer px-2 py-1 rounded ${dx.likely ? 'bg-green-100' : 'bg-gray-100'}"
                               title="Mark as Likely">
                            <input type="checkbox" 
                                   ${dx.likely ? 'checked' : ''}
                                   onchange="window.toggleLikely && window.toggleLikely('${dx.name.replace(/'/g, "\\'")}', this.checked)"
                                   class="w-4 h-4 accent-green-600">
                            <span class="text-xs font-bold ${dx.likely ? 'text-green-700' : 'text-gray-500'}">L</span>
                        </label>
                        
                        <!-- Must-Not-Miss Toggle -->
                        <label class="flex items-center gap-1 cursor-pointer px-2 py-1 rounded ${dx.cannotMiss ? 'bg-red-100' : 'bg-gray-100'}"
                               title="Mark as Must-Not-Miss">
                            <input type="checkbox" 
                                   ${dx.cannotMiss ? 'checked' : ''}
                                   onchange="window.toggleMustNotMiss && window.toggleMustNotMiss('${dx.name.replace(/'/g, "\\'")}', this.checked)"
                                   class="w-4 h-4 accent-red-600">
                            <span class="text-xs font-bold ${dx.cannotMiss ? 'text-red-700' : 'text-gray-500'}">M</span>
                        </label>
                        
                        <!-- Remove Button -->
                        <button onclick="window.removeFromDifferential && window.removeFromDifferential('${dx.name.replace(/'/g, "\\'")}')"
                                class="ml-1 p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded"
                                title="Remove from differential">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    };

    // ============================================================
    // HELPER FUNCTIONS (if not already defined)
    // ============================================================

    // Toggle likely status
    if (typeof window.toggleLikely !== 'function') {
        window.toggleLikely = function(name, isLikely) {
            if (!window.state?.rankedDifferential) return;
            
            const dx = window.state.rankedDifferential.find(d => d.name === name);
            if (dx) {
                dx.likely = isLikely;
                if (typeof window.render === 'function') window.render();
            }
        };
    }

    // Toggle must-not-miss status
    if (typeof window.toggleMustNotMiss !== 'function') {
        window.toggleMustNotMiss = function(name, isMustNotMiss) {
            if (!window.state?.rankedDifferential) return;
            
            const dx = window.state.rankedDifferential.find(d => d.name === name);
            if (dx) {
                dx.cannotMiss = isMustNotMiss;
                if (typeof window.render === 'function') window.render();
            }
        };
    }

    // Remove from differential
    if (typeof window.removeFromDifferential !== 'function') {
        window.removeFromDifferential = function(name) {
            if (!window.state?.rankedDifferential) return;
            
            const index = window.state.rankedDifferential.findIndex(d => d.name === name);
            if (index !== -1) {
                window.state.rankedDifferential.splice(index, 1);
                if (typeof window.render === 'function') window.render();
            }
        };
    }

    // ============================================================
    // INTEGRATION HOOK
    // ============================================================

    /**
     * Hook into render cycle to reinitialize drag-drop
     */
    function hookIntoRender() {
        const originalRender = window.render;
        if (typeof originalRender !== 'function') {
            // Try again later if render not yet defined
            setTimeout(hookIntoRender, 500);
            return;
        }
        
        // Only hook once
        if (window.render._dragDropHooked) return;
        
        window.render = function() {
            const result = originalRender.apply(this, arguments);
            
            // Reinitialize drag-drop after render completes
            setTimeout(() => {
                const container = document.getElementById('ranked-differential-list');
                if (container) {
                    container.dataset.dragInitialized = 'false';
                    initDragDrop();
                }
            }, 50);
            
            return result;
        };
        
        window.render._dragDropHooked = true;
        console.log('✅ Drag-drop hooked into render cycle');
    }

    // ============================================================
    // INITIALIZATION
    // ============================================================

    // Inject styles
    injectStyles();
    
    // Hook into render when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hookIntoRender);
    } else {
        hookIntoRender();
    }
    
    // Initial setup
    setTimeout(initDragDrop, 500);
    
    // Expose for manual initialization
    window.initDifferentialDragDrop = initDragDrop;
    
    console.log('✅ ReasonDx Differential Drag-Drop module loaded');
    console.log('   - Drag items by the ⋮⋮ handle to reorder');
    console.log('   - Works with touch and mouse');

})();
