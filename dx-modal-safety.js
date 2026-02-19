/**
 * dx-modal-safety.js — Universal Modal Escape Hatch
 * ====================================================
 * Drop this on ANY page. It watches for modals/overlays/popups 
 * and ensures every one has:
 *   1. A visible × close button
 *   2. Escape key dismissal
 *   3. Click-outside-to-close on overlays
 *
 * Designed as a safety net — it won't duplicate existing close 
 * buttons, and it won't interfere with modals that already work.
 *
 * USAGE: Add to every page:
 *   <script src="dx-modal-safety.js"></script>
 */
(function() {
    'use strict';

    // ─── CONFIG ────────────────────────────────────────────────
    // CSS selectors that identify modals, overlays, or popups
    var MODAL_SELECTORS = [
        '[id*="modal" i]',
        '[id*="overlay" i]',
        '[id*="popup" i]',
        '[id*="dialog" i]',
        '[class*="modal" i]',
        '[class*="overlay" i]',
        '[class*="popup" i]',
        '[role="dialog"]',
        '[role="alertdialog"]'
    ].join(',');

    // Selectors for existing close buttons (don't duplicate these)
    var CLOSE_SELECTORS = [
        'button[class*="close" i]',
        'button[aria-label*="close" i]',
        '[class*="dismiss" i]',
        'button:has(> .close-icon)',
        '.popup-close',
        '.rdx-about-close'
    ].join(',');

    var SAFETY_ATTR = 'data-dx-safety-close';
    var injectedStyle = false;

    // ─── STYLE INJECTION ───────────────────────────────────────
    function injectStyles() {
        if (injectedStyle) return;
        injectedStyle = true;
        var style = document.createElement('style');
        style.id = 'dx-modal-safety-styles';
        style.textContent =
            '.dx-safety-close{position:absolute;top:12px;right:12px;width:32px;height:32px;' +
            'background:rgba(0,0,0,0.06);border:none;border-radius:8px;font-size:20px;' +
            'line-height:1;color:#64748B;cursor:pointer;display:flex;align-items:center;' +
            'justify-content:center;z-index:999999;transition:all 0.15s;}' +
            '.dx-safety-close:hover{background:rgba(0,0,0,0.12);color:#1E293B;}' +
            /* On dark backgrounds, use light version */
            '.dx-safety-close-light{background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.7);}' +
            '.dx-safety-close-light:hover{background:rgba(255,255,255,0.25);color:#fff;}';
        document.head.appendChild(style);
    }

    // ─── CLOSE LOGIC ───────────────────────────────────────────
    function closeElement(el) {
        // Try common close patterns
        if (el.classList.contains('active')) { el.classList.remove('active'); return; }
        if (el.classList.contains('open')) { el.classList.remove('open'); return; }
        if (el.classList.contains('show')) { el.classList.remove('show'); return; }
        if (el.style.display === 'flex' || el.style.display === 'block') { el.style.display = 'none'; return; }
        // Check computed visibility
        var cs = window.getComputedStyle(el);
        if (cs.display !== 'none' && cs.visibility !== 'hidden') {
            el.style.display = 'none';
            return;
        }
        // Nuclear option
        el.remove();
    }

    function findVisibleModals() {
        var candidates = document.querySelectorAll(MODAL_SELECTORS);
        var visible = [];
        candidates.forEach(function(el) {
            var cs = window.getComputedStyle(el);
            if (cs.display !== 'none' && cs.visibility !== 'hidden' && cs.opacity !== '0') {
                // Must be position fixed or have high z-index (real overlay)
                if (cs.position === 'fixed' || cs.position === 'absolute' || parseInt(cs.zIndex) > 100) {
                    visible.push(el);
                }
            }
        });
        return visible;
    }

    // ─── CLOSE BUTTON INJECTION ────────────────────────────────
    function hasCloseButton(el) {
        // Check for existing close buttons
        if (el.querySelector(CLOSE_SELECTORS)) return true;
        if (el.querySelector('[' + SAFETY_ATTR + ']')) return true;
        // Check for × characters in buttons
        var buttons = el.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            var text = buttons[i].textContent.trim();
            if (text === '×' || text === '✕' || text === '✖' || text === '&times;' || text === 'X' || text === 'x') return true;
        }
        return false;
    }

    function ensureCloseButton(el) {
        if (hasCloseButton(el)) return;

        injectStyles();

        // Find the inner content box (not the overlay itself)
        var target = el;
        var children = el.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var cs = window.getComputedStyle(child);
            if (cs.position === 'relative' || cs.borderRadius !== '0px' || cs.padding !== '0px') {
                target = child;
                break;
            }
        }

        // Ensure target has relative positioning for absolute button
        var targetCs = window.getComputedStyle(target);
        if (targetCs.position === 'static') {
            target.style.position = 'relative';
        }

        // Determine if background is dark
        var bgColor = targetCs.backgroundColor;
        var isDark = false;
        if (bgColor && bgColor !== 'transparent' && bgColor !== 'rgba(0, 0, 0, 0)') {
            var match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
                var brightness = (parseInt(match[1]) * 299 + parseInt(match[2]) * 587 + parseInt(match[3]) * 114) / 1000;
                isDark = brightness < 128;
            }
        }

        var btn = document.createElement('button');
        btn.className = 'dx-safety-close' + (isDark ? ' dx-safety-close-light' : '');
        btn.setAttribute(SAFETY_ATTR, 'true');
        btn.setAttribute('aria-label', 'Close');
        btn.innerHTML = '×';
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeElement(el);
        });

        target.appendChild(btn);
    }

    // ─── CLICK OUTSIDE TO CLOSE ────────────────────────────────
    function ensureClickOutside(el) {
        if (el.getAttribute('data-dx-click-outside')) return;
        el.setAttribute('data-dx-click-outside', 'true');

        el.addEventListener('click', function(e) {
            if (e.target === el) {
                closeElement(el);
            }
        });
    }

    // ─── ESCAPE KEY ────────────────────────────────────────────
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            var modals = findVisibleModals();
            if (modals.length > 0) {
                // Close the topmost (last in DOM or highest z-index)
                var topModal = modals[modals.length - 1];
                closeElement(topModal);
                e.preventDefault();
            }
        }
    });

    // ─── MUTATION OBSERVER ─────────────────────────────────────
    // Watch for new modals appearing in the DOM
    function scan() {
        var modals = findVisibleModals();
        modals.forEach(function(modal) {
            ensureCloseButton(modal);
            ensureClickOutside(modal);
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scan);
    } else {
        scan();
    }

    // Watch for dynamically created modals
    var observer = new MutationObserver(function(mutations) {
        var shouldScan = false;
        for (var i = 0; i < mutations.length; i++) {
            var m = mutations[i];
            if (m.addedNodes.length > 0) { shouldScan = true; break; }
            if (m.type === 'attributes' && (m.attributeName === 'style' || m.attributeName === 'class')) {
                shouldScan = true; break;
            }
        }
        if (shouldScan) {
            // Debounce
            clearTimeout(observer._timer);
            observer._timer = setTimeout(scan, 200);
        }
    });

    observer.observe(document.body || document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });

})();
