/**
 * rdx-source-guardian.js — ReasonDx Source License Guardian
 * ============================================================
 * Enforces open-access / license compliance across the platform:
 *
 *  1. DISPLAY LAYER — converts restricted DOI links to plain-text
 *     "Suggested Reading" labels on page load (catches anything the
 *     remediation script may have missed, and protects dynamically
 *     rendered content)
 *
 *  2. SUBMISSION GUARD — intercepts MCQ/case submissions to the
 *     public library and warns / blocks restricted sources
 *
 *  3. MCQ GENERATOR GUARD — warns users pasting restricted content
 *     into the StudyDx generator for public library submission
 *
 * Include on every page after rdx-nav.js:
 *   <script src="js/rdx-source-guardian.js"></script>
 */

(function () {
'use strict';

// ── License classification ───────────────────────────────────────────────────

/** DOI prefixes that are always safe (CC BY or US Gov public domain) */
var SAFE_PREFIXES = [
  '10.1186/',   // BioMed Central — CC BY
  '10.1371/',   // PLOS — CC BY
  '10.7554/',   // eLife — CC BY
  '10.1101/',   // bioRxiv
  '10.21203/',  // ResearchSquare preprints
  '10.1093/ofid/',   // Open Forum Infectious Diseases
];

/** Domain roots that are always safe (US Government) */
var SAFE_DOMAINS = [
  'nih.gov', 'ncbi.nlm.nih.gov', 'pubmed.ncbi.nlm.nih.gov',
  'cdc.gov', 'ahrq.gov', 'cms.gov', 'fda.gov', 'hhs.gov',
  'nhlbi.nih.gov', 'niddk.nih.gov', 'niaid.nih.gov',
];

/** Publishers known to use restrictive licenses for most content */
var RISKY_PREFIXES = [
  '10.1016/',  // Elsevier (JACI, JAAD, JAIP, etc.)
  '10.1111/',  // Wiley
  '10.1002/',  // Wiley
  '10.1056/',  // NEJM
  '10.1001/',  // JAMA Network
  '10.1136/',  // BMJ
  '10.1097/',  // Wolters Kluwer / LWW
  '10.1007/',  // Springer Nature
  '10.1080/',  // Taylor & Francis
  '10.1183/',  // European Respiratory Society
  '10.1164/',  // ATS / AJRCCM
  '10.1053/',  // Elsevier Saunders
  '10.1046/',  // Wiley-Blackwell
  '10.1093/',  // Oxford University Press
  '10.1177/',  // SAGE
  '10.1161/',  // AHA / Circulation
  '10.1210/',  // Endocrine Society
  '10.14309/', // Wolters Kluwer ACG
  '10.2337/',  // ADA
  '10.1176/',  // APA
  '10.1182/',  // ASH / Blood
  '10.1038/',  // Nature
  '10.1212/',  // AAN / Neurology
  '10.1681/',  // ASN
  '10.1542/',  // AAP / Pediatrics
  '10.3949/',  // Cleveland Clinic Journal
  '10.4158/',  // AACE
  '10.1089/',  // Mary Ann Liebert
  '10.1530/',  // Bioscientifica
  '10.1192/',  // RCPsych
];

/**
 * Classify a DOI or URL.
 * Returns: 'safe' | 'risky' | 'unknown'
 */
function classifySource(doiOrUrl) {
  if (!doiOrUrl) return 'unknown';
  var s = doiOrUrl.toLowerCase().trim();

  // Check safe domains
  for (var i = 0; i < SAFE_DOMAINS.length; i++) {
    if (s.indexOf(SAFE_DOMAINS[i]) >= 0) return 'safe';
  }

  // Extract DOI from URL if needed
  var doi = s;
  var doiMatch = s.match(/doi\.org\/(10\.[^\s"'>,]+)/);
  if (doiMatch) doi = doiMatch[1];

  // Check safe DOI prefixes
  for (var i = 0; i < SAFE_PREFIXES.length; i++) {
    if (doi.indexOf(SAFE_PREFIXES[i]) === 0) return 'safe';
  }

  // Check risky prefixes
  for (var i = 0; i < RISKY_PREFIXES.length; i++) {
    if (doi.indexOf(RISKY_PREFIXES[i]) === 0) return 'risky';
  }

  return 'unknown';
}

window.RDXSourceGuardian = { classifySource: classifySource };


// ── 1. DISPLAY LAYER — convert restricted links on page load ─────────────────

function addSuggestedReadingStyles() {
  if (document.getElementById('rdx-sg-styles')) return;
  var style = document.createElement('style');
  style.id = 'rdx-sg-styles';
  style.textContent = [
    '.rdx-suggested-reading {',
    '  display: inline;',
    '  color: var(--rdx-text-secondary, #475569);',
    '  font-style: italic;',
    '}',
    '.rdx-suggested-reading::before {',
    '  content: "📖 Suggested Reading: ";',
    '  font-style: normal;',
    '  font-weight: 600;',
    '  color: var(--rdx-text-muted, #64748b);',
    '  font-size: 0.9em;',
    '}',
    '.rdx-source-safe-link {',
    '  color: var(--rdx-blue, #2874A6);',
    '}',
    '.rdx-source-warning {',
    '  display: inline-flex;',
    '  align-items: center;',
    '  gap: 4px;',
    '  font-size: 11px;',
    '  color: #92400e;',
    '  background: #fef3c7;',
    '  border: 1px solid #fcd34d;',
    '  border-radius: 4px;',
    '  padding: 2px 6px;',
    '  margin-left: 4px;',
    '}',
  ].join('\n');
  document.head.appendChild(style);
}

/**
 * Scan all <a> tags on the page.
 * - Safe sources: add .rdx-source-safe-link class (keep link)
 * - Risky/unknown sources pointing to journal DOIs: convert to span
 */
function auditPageLinks() {
  addSuggestedReadingStyles();
  var links = document.querySelectorAll('a[href*="doi.org"], a[href*="pubmed"], a[href*="ncbi.nlm"]');
  links.forEach(function (a) {
    var href = a.getAttribute('href') || '';
    var status = classifySource(href);

    if (status === 'safe') {
      a.classList.add('rdx-source-safe-link');
    } else if (status === 'risky') {
      // Convert to suggested reading span
      var span = document.createElement('span');
      span.className = 'rdx-suggested-reading';
      span.setAttribute('data-doi', href);
      span.textContent = a.textContent;
      a.parentNode.replaceChild(span, a);
    }
    // 'unknown' — leave as-is but don't add safe class
  });

  // Also handle spans already marked by remediation script
  document.querySelectorAll('span.rdx-suggested-reading').forEach(function (span) {
    addSuggestedReadingStyles();
  });
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', auditPageLinks);
} else {
  auditPageLinks();
}

// Re-run after dynamic content loads (e.g., StudyDx rendering)
var _sgObserver = new MutationObserver(function (mutations) {
  var hasNewLinks = mutations.some(function (m) {
    return Array.from(m.addedNodes).some(function (n) {
      return n.nodeType === 1 && (
        n.querySelector && n.querySelector('a[href*="doi.org"]') ||
        (n.tagName === 'A' && n.href && n.href.indexOf('doi.org') >= 0)
      );
    });
  });
  if (hasNewLinks) auditPageLinks();
});
_sgObserver.observe(document.body || document.documentElement, { childList: true, subtree: true });


// ── 2. SUBMISSION GUARD — validate sources before public library submission ──

/**
 * Validate a source citation string before public library submission.
 * Returns: { ok: bool, level: 'safe'|'risky'|'unknown', message: string }
 */
function validateSubmissionSource(sourceText) {
  if (!sourceText || !sourceText.trim()) {
    return {
      ok: false,
      level: 'unknown',
      message: 'A source citation is required for public library submissions.'
    };
  }

  var s = sourceText.trim();

  // Extract DOI if present
  var doiMatch = s.match(/10\.\d{4,}\/[^\s,;]+/);
  var urlMatch = s.match(/https?:\/\/[^\s,;]+/);
  var source   = doiMatch ? doiMatch[0] : (urlMatch ? urlMatch[0] : s);

  var status = classifySource(source);

  if (status === 'safe') {
    return {
      ok: true,
      level: 'safe',
      message: '✅ Source verified as open access / public domain.'
    };
  } else if (status === 'risky') {
    return {
      ok: false,
      level: 'risky',
      message: '🔴 This source appears to be from a restricted-access publisher ' +
               '(Elsevier, Wiley, NEJM, etc.). Only CC BY or US Government ' +
               'sources may be used for public library submissions. ' +
               'You may still save this to your personal library for private use.'
    };
  } else {
    return {
      ok: false,
      level: 'unknown',
      message: '⚠️ Could not verify this source\'s license. Please use a ' +
               'CC BY article (BioMed Central, PLOS, eLife) or a US Government ' +
               'source (NIH, CDC, AHRQ) for public submissions. ' +
               'You may save this to your personal library for private use.'
    };
  }
}

window.RDXSourceGuardian.validateSubmissionSource = validateSubmissionSource;


// ── 3. HOOK INTO STUDYDX SUBMISSION FLOW ────────────────────────────────────
// Intercepts the submitToLibrary call to validate source before allowing
// public submission.

var _sgHookAttempts = 0;
function hookStudyDxSubmission() {
  if (!window.SDX) {
    if (_sgHookAttempts++ < 20) setTimeout(hookStudyDxSubmission, 300);
    return;
  }

  var _originalSaveQuestion = window.SDX.saveQuestion;
  if (_originalSaveQuestion && _originalSaveQuestion._sgHooked) return;

  window.SDX.saveQuestion = function (idx) {
    var savePubEl = document.getElementById('save-pub-' + idx);
    if (!savePubEl || !savePubEl.checked) {
      // Personal save only — no source check needed
      return _originalSaveQuestion.call(this, idx);
    }

    var srcEl = document.getElementById('src-' + idx);
    var source = srcEl ? srcEl.value.trim() : '';
    var validation = validateSubmissionSource(source);

    if (!validation.ok) {
      // Show warning inline
      var existingWarn = document.getElementById('sg-warn-' + idx);
      if (existingWarn) existingWarn.remove();
      var warn = document.createElement('div');
      warn.id = 'sg-warn-' + idx;
      warn.style.cssText = 'margin-top:8px;padding:10px 14px;background:#fef3c7;border:1.5px solid #f59e0b;border-radius:8px;font-size:12px;color:#92400e;line-height:1.5';
      warn.innerHTML = validation.message + '<br><small style="color:#78350f;margin-top:4px;display:block">You can still save to <strong>My Library</strong> for personal use by unchecking "Submit to Public Library".</small>';
      if (srcEl && srcEl.parentNode) {
        srcEl.parentNode.insertBefore(warn, srcEl.nextSibling);
      }
      // Uncheck public submission automatically
      savePubEl.checked = false;
      return;
    }

    return _originalSaveQuestion.call(this, idx);
  };
  window.SDX.saveQuestion._sgHooked = true;
}

setTimeout(hookStudyDxSubmission, 500);


// ── 4. CONTENT LIBRARY SUBMISSION GUARD ─────────────────────────────────────
// Adds real-time source validation feedback to the content library
// submission source field.

function hookContentLibrarySource() {
  // Watch for source input fields in content-library.html
  document.addEventListener('input', function (e) {
    if (!e.target || e.target.id !== 'new-source-input') return;
    var val = e.target.value.trim();
    if (!val) return;

    var existing = document.getElementById('rdx-sg-source-feedback');
    if (!existing) {
      existing = document.createElement('div');
      existing.id = 'rdx-sg-source-feedback';
      existing.style.cssText = 'font-size:11px;margin-top:4px;padding:4px 8px;border-radius:4px';
      e.target.parentNode.appendChild(existing);
    }

    var validation = validateSubmissionSource(val);
    if (validation.level === 'safe') {
      existing.style.background = '#f0fdf4';
      existing.style.color = '#16a34a';
      existing.style.border = '1px solid #86efac';
      existing.textContent = '✅ Open access source — safe for public library';
    } else if (validation.level === 'risky') {
      existing.style.background = '#fef2f2';
      existing.style.color = '#dc2626';
      existing.style.border = '1px solid #fca5a5';
      existing.textContent = '🔴 Restricted publisher — personal use only';
    } else {
      existing.style.background = '#fefce8';
      existing.style.color = '#ca8a04';
      existing.style.border = '1px solid #fde047';
      existing.textContent = '⚠️ License unverified — use CC BY or US Gov sources for public library';
    }
  });
}

document.addEventListener('DOMContentLoaded', hookContentLibrarySource);

})();
