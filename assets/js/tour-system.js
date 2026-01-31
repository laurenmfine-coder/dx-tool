/**
 * DxSuite Guided Tour System
 * 
 * A lightweight, reusable tour system that can be added to any page.
 * 
 * USAGE:
 * 1. Include this script: <script src="tour-system.js"></script>
 * 2. Include the CSS: <link rel="stylesheet" href="tour-system.css">
 * 3. Add data-tour attributes to elements you want to highlight
 * 4. Call DxTour.start() to begin the tour
 * 
 * EXAMPLE:
 * <button data-tour="step1" 
 *         data-tour-title="Welcome!" 
 *         data-tour-desc="This is the first step"
 *         data-tour-tip="Click here to get started"
 *         data-tour-position="bottom">
 *   Click Me
 * </button>
 */

const DxTour = (function() {
    let steps = [];
    let currentStep = 0;
    let isActive = false;
    let elements = {};
    
    // Default configuration
    const config = {
        storageKey: 'dxsuite-tour-completed',
        showOnFirstVisit: true,
        allowKeyboardNav: true,
        scrollBehavior: 'smooth',
        overlayOpacity: 0.6
    };
    
    // Create tour UI elements
    function createUI() {
        // Check if already created
        if (document.getElementById('dx-tour-overlay')) return;
        
        // Overlay
        const overlay = document.createElement('div');
        overlay.id = 'dx-tour-overlay';
        overlay.className = 'dx-tour-overlay';
        document.body.appendChild(overlay);
        elements.overlay = overlay;
        
        // Spotlight
        const spotlight = document.createElement('div');
        spotlight.id = 'dx-tour-spotlight';
        spotlight.className = 'dx-tour-spotlight';
        document.body.appendChild(spotlight);
        elements.spotlight = spotlight;
        
        // Tooltip
        const tooltip = document.createElement('div');
        tooltip.id = 'dx-tour-tooltip';
        tooltip.className = 'dx-tour-tooltip';
        tooltip.innerHTML = `
            <div class="dx-tour-tooltip-header">
                <span class="dx-tour-step-indicator"></span>
                <h3 class="dx-tour-title"></h3>
            </div>
            <div class="dx-tour-tooltip-body">
                <p class="dx-tour-description"></p>
                <div class="dx-tour-tip">
                    <span class="dx-tour-tip-icon">💡</span>
                    <span class="dx-tour-tip-text"></span>
                </div>
            </div>
            <div class="dx-tour-tooltip-footer">
                <div class="dx-tour-progress"></div>
                <div class="dx-tour-buttons">
                    <button class="dx-tour-btn dx-tour-btn-back">Back</button>
                    <button class="dx-tour-btn dx-tour-btn-next">Next</button>
                </div>
            </div>
        `;
        document.body.appendChild(tooltip);
        elements.tooltip = tooltip;
        
        // Skip button
        const skipBtn = document.createElement('button');
        skipBtn.id = 'dx-tour-skip';
        skipBtn.className = 'dx-tour-skip';
        skipBtn.textContent = '✕ Skip Tour';
        skipBtn.onclick = end;
        document.body.appendChild(skipBtn);
        elements.skipBtn = skipBtn;
        
        // Event listeners
        tooltip.querySelector('.dx-tour-btn-back').onclick = prev;
        tooltip.querySelector('.dx-tour-btn-next').onclick = next;
        
        // Keyboard navigation
        if (config.allowKeyboardNav) {
            document.addEventListener('keydown', handleKeyboard);
        }
        
        // Window resize
        window.addEventListener('resize', () => {
            if (isActive) showStep(currentStep);
        });
    }
    
    // Collect steps from DOM
    function collectSteps() {
        steps = [];
        const tourElements = document.querySelectorAll('[data-tour]');
        
        tourElements.forEach(el => {
            steps.push({
                element: el,
                id: el.dataset.tour,
                title: el.dataset.tourTitle || 'Step',
                description: el.dataset.tourDesc || '',
                tip: el.dataset.tourTip || '',
                position: el.dataset.tourPosition || 'bottom',
                order: parseInt(el.dataset.tourOrder) || 0
            });
        });
        
        // Sort by order
        steps.sort((a, b) => a.order - b.order);
    }
    
    // Show a specific step
    function showStep(index) {
        if (index < 0 || index >= steps.length) return;
        
        const step = steps[index];
        const target = step.element;
        const rect = target.getBoundingClientRect();
        
        // Update spotlight
        elements.spotlight.style.cssText = `
            display: block;
            top: ${rect.top + window.scrollY - 8}px;
            left: ${rect.left - 8}px;
            width: ${rect.width + 16}px;
            height: ${rect.height + 16}px;
        `;
        
        // Update tooltip content
        elements.tooltip.querySelector('.dx-tour-step-indicator').textContent = 
            `Step ${index + 1} of ${steps.length}`;
        elements.tooltip.querySelector('.dx-tour-title').textContent = step.title;
        elements.tooltip.querySelector('.dx-tour-description').textContent = step.description;
        
        const tipEl = elements.tooltip.querySelector('.dx-tour-tip');
        if (step.tip) {
            tipEl.style.display = 'flex';
            elements.tooltip.querySelector('.dx-tour-tip-text').textContent = step.tip;
        } else {
            tipEl.style.display = 'none';
        }
        
        // Update progress dots
        const progressEl = elements.tooltip.querySelector('.dx-tour-progress');
        progressEl.innerHTML = steps.map((_, i) => {
            let cls = 'dx-tour-dot';
            if (i < index) cls += ' completed';
            if (i === index) cls += ' active';
            return `<span class="${cls}"></span>`;
        }).join('');
        
        // Update buttons
        const backBtn = elements.tooltip.querySelector('.dx-tour-btn-back');
        const nextBtn = elements.tooltip.querySelector('.dx-tour-btn-next');
        backBtn.style.display = index === 0 ? 'none' : 'inline-block';
        nextBtn.textContent = index === steps.length - 1 ? 'Finish' : 'Next';
        
        // Position tooltip
        positionTooltip(rect, step.position);
        
        // Scroll into view
        target.scrollIntoView({ behavior: config.scrollBehavior, block: 'center' });
    }
    
    // Position tooltip relative to target
    function positionTooltip(rect, position) {
        const tooltip = elements.tooltip;
        const tooltipRect = tooltip.getBoundingClientRect();
        let top, left;
        
        switch (position) {
            case 'top':
                top = rect.top + window.scrollY - tooltipRect.height - 20;
                left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
                break;
            case 'bottom':
                top = rect.bottom + window.scrollY + 20;
                left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
                break;
            case 'left':
                top = rect.top + window.scrollY + (rect.height / 2) - (tooltipRect.height / 2);
                left = rect.left - tooltipRect.width - 20;
                break;
            case 'right':
                top = rect.top + window.scrollY + (rect.height / 2) - (tooltipRect.height / 2);
                left = rect.right + 20;
                break;
        }
        
        // Keep in viewport
        left = Math.max(20, Math.min(left, window.innerWidth - tooltipRect.width - 20));
        top = Math.max(20, top);
        
        tooltip.style.top = top + 'px';
        tooltip.style.left = left + 'px';
    }
    
    // Handle keyboard navigation
    function handleKeyboard(e) {
        if (!isActive) return;
        
        switch (e.key) {
            case 'ArrowRight':
            case 'Enter':
                next();
                break;
            case 'ArrowLeft':
                prev();
                break;
            case 'Escape':
                end();
                break;
        }
    }
    
    // Public methods
    function start() {
        createUI();
        collectSteps();
        
        if (steps.length === 0) {
            console.warn('DxTour: No tour steps found. Add data-tour attributes to elements.');
            return;
        }
        
        currentStep = 0;
        isActive = true;
        
        elements.overlay.classList.add('active');
        elements.tooltip.classList.add('active');
        elements.skipBtn.classList.add('active');
        
        showStep(0);
    }
    
    function end() {
        isActive = false;
        
        elements.overlay.classList.remove('active');
        elements.tooltip.classList.remove('active');
        elements.skipBtn.classList.remove('active');
        elements.spotlight.style.display = 'none';
        
        localStorage.setItem(config.storageKey, 'true');
    }
    
    function next() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        } else {
            end();
        }
    }
    
    function prev() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }
    
    function checkFirstVisit() {
        if (config.showOnFirstVisit && !localStorage.getItem(config.storageKey)) {
            setTimeout(start, 1000);
        }
    }
    
    function reset() {
        localStorage.removeItem(config.storageKey);
    }
    
    // Auto-initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkFirstVisit);
    } else {
        checkFirstVisit();
    }
    
    // Public API
    return {
        start,
        end,
        next,
        prev,
        reset,
        config
    };
})();

// Make available globally
window.DxTour = DxTour;
