/**
 * ReasonDx - Input Sanitization Utility
 * Prevents XSS by escaping HTML entities in user-provided strings.
 * Include on any page that inserts user-controlled text into the DOM.
 */
(function() {
    'use strict';

    // HTML entity map for XSS prevention
    var ENTITY_MAP = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
        '`': '&#x60;'
    };

    var ENTITY_REGEX = /[&<>"'\/`]/g;

    /**
     * Escape HTML entities in a string.
     * Use this before inserting any user-controlled text via innerHTML.
     * @param {string} str - The string to escape
     * @returns {string} The escaped string, safe for HTML insertion
     */
    function escapeHtml(str) {
        if (typeof str !== 'string') return '';
        return str.replace(ENTITY_REGEX, function(char) {
            return ENTITY_MAP[char];
        });
    }

    /**
     * Safely set text content of an element (preferred over innerHTML for plain text).
     * @param {string} selector - CSS selector or element ID
     * @param {string} text - The text to set
     */
    function safeText(selector, text) {
        var el = typeof selector === 'string'
            ? document.querySelector(selector) || document.getElementById(selector)
            : selector;
        if (el) el.textContent = text;
    }

    /**
     * Sanitize an object's string values (useful for form data before display).
     * @param {Object} obj - Object with string values to sanitize
     * @returns {Object} New object with escaped string values
     */
    function sanitizeObject(obj) {
        var result = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = typeof obj[key] === 'string' ? escapeHtml(obj[key]) : obj[key];
            }
        }
        return result;
    }

    // Export globally
    window.RdxSanitize = {
        escapeHtml: escapeHtml,
        safeText: safeText,
        sanitizeObject: sanitizeObject
    };

    // Also export as standalone for convenience
    window.escapeHtml = escapeHtml;
})();
