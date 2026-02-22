/**
 * MechanismDx Enhanced Sidebar JavaScript
 * Handles: Save for later, localStorage persistence, sidebar interactions
 */

(function() {
    'use strict';
    
    // Storage key prefix
    const STORAGE_KEY = 'mechanismdx_saved_';
    
    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', initSidebar);
    
    function initSidebar() {
        initSaveButtons();
        initCollapsibleSections();
        updateSavedStates();
    }
    
    // ========================================
    // SAVE FOR LATER FUNCTIONALITY
    // ========================================
    
    function initSaveButtons() {
        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.addEventListener('click', handleSaveClick);
        });
        
        // Also handle inline save buttons
        document.querySelectorAll('[data-save-item]').forEach(btn => {
            btn.addEventListener('click', handleInlineSave);
        });
    }
    
    function handleSaveClick(e) {
        const btn = e.currentTarget;
        const itemId = btn.dataset.itemId || window.location.pathname;
        const itemType = btn.dataset.itemType || 'module';
        const itemTitle = btn.dataset.itemTitle || document.title;
        const itemDesc = btn.dataset.itemDesc || '';
        
        if (isItemSaved(itemId)) {
            removeFromSaved(itemId);
            updateButtonState(btn, false);
            showToast('Removed from saved items');
        } else {
            saveItem({
                id: itemId,
                type: itemType,
                title: itemTitle,
                description: itemDesc,
                url: window.location.href,
                savedAt: new Date().toISOString()
            });
            updateButtonState(btn, true);
            showToast('Saved! View in your Saved Items →');
        }
    }
    
    function handleInlineSave(e) {
        e.preventDefault();
        const btn = e.currentTarget;
        const itemId = btn.dataset.saveItem;
        const itemType = btn.dataset.saveType || 'concept';
        const itemTitle = btn.dataset.saveTitle || btn.textContent;
        
        if (isItemSaved(itemId)) {
            removeFromSaved(itemId);
            btn.classList.remove('saved');
            btn.title = 'Save for later';
        } else {
            saveItem({
                id: itemId,
                type: itemType,
                title: itemTitle,
                url: window.location.href + '#' + itemId,
                savedAt: new Date().toISOString()
            });
            btn.classList.add('saved');
            btn.title = 'Saved!';
        }
    }
    
    function saveItem(item) {
        const saved = getSavedItems();
        saved[item.id] = item;
        localStorage.setItem(STORAGE_KEY + 'items', JSON.stringify(saved));
    }
    
    function removeFromSaved(itemId) {
        const saved = getSavedItems();
        delete saved[itemId];
        localStorage.setItem(STORAGE_KEY + 'items', JSON.stringify(saved));
    }
    
    function getSavedItems() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY + 'items')) || {};
        } catch (e) {
            return {};
        }
    }
    
    function isItemSaved(itemId) {
        const saved = getSavedItems();
        return !!saved[itemId];
    }
    
    function updateSavedStates() {
        // Update main save buttons
        document.querySelectorAll('.save-btn').forEach(btn => {
            const itemId = btn.dataset.itemId || window.location.pathname;
            updateButtonState(btn, isItemSaved(itemId));
        });
        
        // Update inline save buttons
        document.querySelectorAll('[data-save-item]').forEach(btn => {
            if (isItemSaved(btn.dataset.saveItem)) {
                btn.classList.add('saved');
            }
        });
        
        // Update saved count badge if present
        const countBadge = document.querySelector('.saved-count-badge');
        if (countBadge) {
            const count = Object.keys(getSavedItems()).length;
            countBadge.textContent = count;
            countBadge.style.display = count > 0 ? 'inline' : 'none';
        }
    }
    
    function updateButtonState(btn, isSaved) {
        if (isSaved) {
            btn.classList.add('saved');
            btn.innerHTML = '<span class="save-btn-icon">✓</span> Saved';
        } else {
            btn.classList.remove('saved');
            btn.innerHTML = '<span class="save-btn-icon">🔖</span> Save for Later';
        }
    }
    
    // ========================================
    // COLLAPSIBLE SECTIONS (Mobile)
    // ========================================
    
    function initCollapsibleSections() {
        document.querySelectorAll('.sidebar-section.collapsible').forEach(section => {
            const header = section.querySelector('.sidebar-section-header');
            if (header) {
                header.addEventListener('click', () => {
                    section.classList.toggle('expanded');
                });
            }
        });
    }
    
    // ========================================
    // TOAST NOTIFICATIONS
    // ========================================
    
    function showToast(message) {
        // Remove existing toast
        const existing = document.querySelector('.dx-toast');
        if (existing) existing.remove();
        
        // Create toast
        const toast = document.createElement('div');
        toast.className = 'dx-toast';
        toast.innerHTML = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            background: #1e293b;
            color: #fff;
            padding: 14px 24px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: toastIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        // Add animation keyframes if not present
        if (!document.querySelector('#toast-styles')) {
            const style = document.createElement('style');
            style.id = 'toast-styles';
            style.textContent = `
                @keyframes toastIn {
                    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
                    to { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
                @keyframes toastOut {
                    from { opacity: 1; transform: translateX(-50%) translateY(0); }
                    to { opacity: 0; transform: translateX(-50%) translateY(20px); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Remove after delay
        setTimeout(() => {
            toast.style.animation = 'toastOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    // ========================================
    // PROGRESS TRACKING
    // ========================================
    
    function markSectionComplete(sectionId) {
        const moduleId = window.location.pathname;
        const progress = getModuleProgress(moduleId);
        if (!progress.completed.includes(sectionId)) {
            progress.completed.push(sectionId);
            progress.lastUpdated = new Date().toISOString();
            saveModuleProgress(moduleId, progress);
        }
    }
    
    function getModuleProgress(moduleId) {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY + 'progress_' + moduleId)) || {
                completed: [],
                lastUpdated: null
            };
        } catch (e) {
            return { completed: [], lastUpdated: null };
        }
    }
    
    function saveModuleProgress(moduleId, progress) {
        localStorage.setItem(STORAGE_KEY + 'progress_' + moduleId, JSON.stringify(progress));
    }
    
    // Expose functions globally
    window.MechanismDxSidebar = {
        saveItem,
        removeFromSaved,
        getSavedItems,
        isItemSaved,
        markSectionComplete,
        getModuleProgress,
        showToast
    };
    
})();
