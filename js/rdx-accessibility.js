/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

/**
 * rdx-accessibility.js — WCAG Contrast & Accessibility Runtime Monitor
 * 
 * Runs in dev/admin mode only (not in production for regular users).
 * Scans rendered page for contrast violations and logs to console.
 * 
 * Activate: add ?a11y=1 to any URL, or call RDXAccessibility.audit()
 * 
 * WCAG AA thresholds:
 *   Normal text (< 18pt / < 14pt bold): contrast ratio >= 4.5:1
 *   Large text (>= 18pt / >= 14pt bold): contrast ratio >= 3:1
 */

(function(window) {
  'use strict';

  // ── Colour math ───────────────────────────────────────────────────
  function hexToRgb(hex) {
    var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return r ? { r: parseInt(r[1],16), g: parseInt(r[2],16), b: parseInt(r[3],16) } : null;
  }

  function parseColor(str) {
    if (!str || str === 'transparent') return null;
    if (str.startsWith('#')) return hexToRgb(str);
    var m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (m) return { r:+m[1], g:+m[2], b:+m[3], a: m[4] !== undefined ? +m[4] : 1 };
    return null;
  }

  function relativeLuminance(rgb) {
    var vals = ['r','g','b'].map(function(c) {
      var v = rgb[c] / 255;
      return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4);
    });
    return 0.2126*vals[0] + 0.7152*vals[1] + 0.0722*vals[2];
  }

  function contrastRatio(fg, bg) {
    if (!fg || !bg) return null;
    var l1 = relativeLuminance(fg);
    var l2 = relativeLuminance(bg);
    var lighter = Math.max(l1, l2), darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  // ── Get effective background walking up the DOM ───────────────────
  function getEffectiveBg(el) {
    var node = el;
    while (node && node !== document.body) {
      var bg = window.getComputedStyle(node).backgroundColor;
      var rgb = parseColor(bg);
      if (rgb && (rgb.a === undefined || rgb.a > 0.1)) {
        if (rgb.r + rgb.g + rgb.b < 765) return rgb; // not white/transparent
      }
      node = node.parentElement;
    }
    // Default to body background
    var bodyBg = window.getComputedStyle(document.body).backgroundColor;
    return parseColor(bodyBg) || { r:255, g:255, b:255 };
  }

  // ── Main audit ────────────────────────────────────────────────────
  function audit() {
    var violations = [];
    var textEls = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, button, label, li, td, th');

    textEls.forEach(function(el) {
      // Skip invisible or empty
      if (!el.offsetParent || !el.textContent.trim()) return;
      if (el.children.length > 3) return; // skip containers

      var style = window.getComputedStyle(el);
      var color = parseColor(style.color);
      if (!color) return;

      var bg = getEffectiveBg(el);
      var ratio = contrastRatio(color, bg);
      if (!ratio) return;

      var fontSize = parseFloat(style.fontSize);
      var fontWeight = parseInt(style.fontWeight);
      var isLarge = fontSize >= 24 || (fontSize >= 18.67 && fontWeight >= 700);
      var threshold = isLarge ? 3.0 : 4.5;

      if (ratio < threshold) {
        violations.push({
          el: el,
          text: el.textContent.trim().slice(0, 60),
          ratio: Math.round(ratio * 100) / 100,
          threshold: threshold,
          selector: el.tagName.toLowerCase() + (el.className ? '.' + el.className.split(' ')[0] : ''),
        });
      }
    });

    if (violations.length === 0) {
      rdxLog('%c✅ RDXAccessibility: No contrast violations found', 'color:green;font-weight:bold');
      return violations;
    }

    console.group('%c⚠ RDXAccessibility: ' + violations.length + ' contrast violations', 'color:orange;font-weight:bold');
    violations.forEach(function(v) {
      console.warn(
        v.selector + ' — ratio ' + v.ratio + ':1 (need ' + v.threshold + ':1)\n' +
        'Text: "' + v.text + '"'
      );
      rdxLog(v.el);
    });
    console.groupEnd();

    return violations;
  }

  // ── Panel UI for admin/dev ────────────────────────────────────────
  function showPanel(violations) {
    var existing = document.getElementById('rdx-a11y-panel');
    if (existing) existing.remove();

    var panel = document.createElement('div');
    panel.id = 'rdx-a11y-panel';
    panel.style.cssText = [
      'position:fixed', 'bottom:16px', 'right:16px', 'z-index:99999',
      'background:#1E293B', 'color:#E2E8F0', 'border-radius:12px',
      'padding:16px 20px', 'max-width:360px', 'max-height:400px',
      'overflow-y:auto', 'font-size:12px', 'font-family:monospace',
      'box-shadow:0 8px 32px rgba(0,0,0,.4)', 'line-height:1.5',
    ].join(';');

    var header = document.createElement('div');
    header.style.cssText = 'font-weight:700;font-size:13px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center';
    header.innerHTML = '🔍 Contrast Audit — ' + (violations.length === 0 ? '✅ All Pass' : '⚠ ' + violations.length + ' violations') + 
      '<button onclick="document.getElementById(\'rdx-a11y-panel\').remove()" style="background:none;border:none;color:#94A3B8;cursor:pointer;font-size:16px">×</button>';
    panel.appendChild(header);

    if (violations.length === 0) {
      panel.innerHTML += '<div style="color:#4ADE80">No WCAG AA contrast violations found on this page.</div>';
    } else {
      violations.slice(0, 15).forEach(function(v) {
        var item = document.createElement('div');
        item.style.cssText = 'border-top:1px solid rgba(255,255,255,.08);padding:8px 0';
        item.innerHTML = '<span style="color:#FCA5A5">' + v.ratio + ':1</span> (need ' + v.threshold + ':1)<br>' +
          '<span style="color:#94A3B8">' + v.selector + '</span><br>' +
          '<span style="color:#CBD5E1">"' + v.text.slice(0, 50) + (v.text.length > 50 ? '…' : '') + '"</span>';
        panel.appendChild(item);
      });
      if (violations.length > 15) {
        var more = document.createElement('div');
        more.style.cssText = 'color:#94A3B8;padding-top:8px';
        more.textContent = '+ ' + (violations.length - 15) + ' more (see console)';
        panel.appendChild(more);
      }
    }

    document.body.appendChild(panel);
  }

  // ── Auto-run if ?a11y=1 in URL ────────────────────────────────────
  if (window.location.search.indexOf('a11y=1') !== -1) {
    window.addEventListener('load', function() {
      setTimeout(function() {
        var violations = audit();
        showPanel(violations);
      }, 1000);
    });
  }

  window.RDXAccessibility = { audit: audit, showPanel: showPanel };

})(window);
