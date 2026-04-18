/**
 * RDX Email Capture - Modal UI for converting anonymous users
 * 
 * Shows at strategic moments to capture emails
 */

window.RDXEmailCapture = (function() {
  'use strict';

  // Modal HTML template
  const MODAL_TEMPLATE = `
    <div id="rdx-email-modal" class="rdx-modal-overlay" style="display: none;">
      <div class="rdx-modal-content rdx-email-capture-modal">
        <div class="rdx-modal-header">
          <div class="rdx-success-icon">✓</div>
          <h2 id="rdx-email-modal-title">Great reasoning on this case!</h2>
          <button class="rdx-modal-close" onclick="RDXEmailCapture.dismiss()">&times;</button>
        </div>
        
        <div class="rdx-modal-body">
          <div id="rdx-email-modal-stats" class="rdx-case-stats">
            <!-- Stats injected here -->
          </div>
          
          <div class="rdx-email-divider">
            <span>Save Your Progress</span>
          </div>
          
          <p class="rdx-email-pitch" id="rdx-email-modal-pitch">
            Create a free account to track your progress and access 393 more cases.
          </p>
          
          <form id="rdx-email-capture-form" class="rdx-email-form">
            <input 
              type="email" 
              id="rdx-email-input" 
              placeholder="Your email address" 
              required 
              autocomplete="email"
            />
            <button type="submit" class="rdx-btn rdx-btn-accent rdx-btn-block">
              Continue with Email →
            </button>
          </form>
          
          <p class="rdx-email-disclaimer">
            Free forever. No credit card required.
          </p>
          
          <div class="rdx-modal-footer">
            <a href="#" onclick="RDXEmailCapture.dismiss(); return false;" class="rdx-text-link">
              or Browse More Cases
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  // CSS styles
  const MODAL_STYLES = `
    <style>
      .rdx-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 20, 40, 0.85);
        backdrop-filter: blur(4px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: rdx-fade-in 0.2s ease;
      }
      
      @keyframes rdx-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .rdx-email-capture-modal {
        background: white;
        border-radius: 16px;
        max-width: 520px;
        width: 100%;
        box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3);
        animation: rdx-slide-up 0.3s ease;
        max-height: 90vh;
        overflow-y: auto;
      }
      
      @keyframes rdx-slide-up {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      .rdx-modal-header {
        padding: 32px 32px 24px;
        text-align: center;
        position: relative;
      }
      
      .rdx-success-icon {
        width: 56px;
        height: 56px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        color: white;
        margin: 0 auto 16px;
      }
      
      .rdx-modal-header h2 {
        font-family: var(--rdx-font-serif, Georgia, serif);
        font-size: 1.75rem;
        color: var(--rdx-ocean-dark, #1e3a5f);
        margin: 0;
        line-height: 1.3;
      }
      
      .rdx-modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        font-size: 28px;
        color: #94a3b8;
        cursor: pointer;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        transition: all 0.15s;
      }
      
      .rdx-modal-close:hover {
        background: #f1f5f9;
        color: #475569;
      }
      
      .rdx-modal-body {
        padding: 0 32px 32px;
      }
      
      .rdx-case-stats {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 24px;
      }
      
      .rdx-stat-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid #e2e8f0;
      }
      
      .rdx-stat-row:last-child {
        border-bottom: none;
      }
      
      .rdx-stat-label {
        font-size: 0.875rem;
        color: #64748b;
      }
      
      .rdx-stat-value {
        font-weight: 700;
        font-size: 1.125rem;
        color: #2874A6;
      }
      
      .rdx-email-divider {
        text-align: center;
        margin: 28px 0 20px;
        position: relative;
      }
      
      .rdx-email-divider::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        height: 1px;
        background: #e2e8f0;
      }
      
      .rdx-email-divider span {
        position: relative;
        background: white;
        padding: 0 16px;
        font-size: 0.875rem;
        font-weight: 600;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .rdx-email-pitch {
        font-size: 1rem;
        color: #334155;
        text-align: center;
        margin-bottom: 24px;
        line-height: 1.6;
      }
      
      .rdx-email-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      
      #rdx-email-input {
        padding: 14px 16px;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.15s;
        outline: none;
      }
      
      #rdx-email-input:focus {
        border-color: #2874A6;
        box-shadow: 0 0 0 3px rgba(40, 116, 166, 0.1);
      }
      
      .rdx-btn-block {
        width: 100%;
        padding: 14px;
        font-size: 1rem;
      }
      
      .rdx-email-disclaimer {
        font-size: 0.8rem;
        color: #94a3b8;
        text-align: center;
        margin: 12px 0 0;
      }
      
      .rdx-modal-footer {
        text-align: center;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #f1f5f9;
      }
      
      .rdx-text-link {
        color: #64748b;
        font-size: 0.875rem;
        text-decoration: none;
        transition: color 0.15s;
      }
      
      .rdx-text-link:hover {
        color: #2874A6;
      }
      
      @media (max-width: 640px) {
        .rdx-email-capture-modal {
          margin: 0;
          border-radius: 0;
          max-height: 100vh;
        }
        
        .rdx-modal-header,
        .rdx-modal-body {
          padding-left: 24px;
          padding-right: 24px;
        }
      }
    </style>
  `;

  let isInitialized = false;
  let currentSource = 'unknown';

  // Initialize modal
  function init() {
    if (isInitialized) return;
    
    // Inject styles
    const styleEl = document.createElement('div');
    styleEl.innerHTML = MODAL_STYLES;
    document.head.appendChild(styleEl);
    
    // Inject modal
    const modalEl = document.createElement('div');
    modalEl.innerHTML = MODAL_TEMPLATE;
    document.body.appendChild(modalEl.firstElementChild);
    
    // Setup form handler
    document.getElementById('rdx-email-capture-form').addEventListener('submit', handleSubmit);
    
    isInitialized = true;
  }

  // Show modal
  function show(options = {}) {
    if (!isInitialized) init();
    
    const modal = document.getElementById('rdx-email-modal');
    const history = window.RDXSessionManager.getCaseHistory();
    
    // Update title
    const title = options.title || 'Great reasoning on this case!';
    document.getElementById('rdx-email-modal-title').textContent = title;
    
    // Update stats
    const statsHtml = generateStatsHtml(options.stats || {}, history);
    document.getElementById('rdx-email-modal-stats').innerHTML = statsHtml;
    
    // Update pitch
    const pitch = options.pitch || `Create a free account to track your progress and access ${394 - history.totalCases} more cases.`;
    document.getElementById('rdx-email-modal-pitch').textContent = pitch;
    
    // Store source
    currentSource = options.source || 'post-case';
    
    // Show modal
    modal.style.display = 'flex';
    if (window.RDXFunnelAgent) RDXFunnelAgent.emailCaptureShown(currentSource || '', 'debrief');
    document.body.style.overflow = 'hidden';
    
    // Focus email input
    setTimeout(() => {
      document.getElementById('rdx-email-input').focus();
    }, 300);
    
    // Track modal shown
    window.RDXSessionManager.trackEvent('email_modal_shown', {
      source: currentSource,
      casesCompleted: history.totalCases
    });
  }

  // Generate stats HTML
  function generateStatsHtml(stats, history) {
    const rows = [];
    
    if (stats.diagnosis) {
      rows.push(`
        <div class="rdx-stat-row">
          <span class="rdx-stat-label">Diagnosis</span>
          <span class="rdx-stat-value">${stats.diagnosis}</span>
        </div>
      `);
    }
    
    if (stats.score !== undefined) {
      rows.push(`
        <div class="rdx-stat-row">
          <span class="rdx-stat-label">Reasoning Score</span>
          <span class="rdx-stat-value">${stats.score}/100</span>
        </div>
      `);
    }
    
    if (stats.timeSpent) {
      rows.push(`
        <div class="rdx-stat-row">
          <span class="rdx-stat-label">Time to Diagnosis</span>
          <span class="rdx-stat-value">${stats.timeSpent}</span>
        </div>
      `);
    }
    
    if (history.totalCases > 0) {
      rows.push(`
        <div class="rdx-stat-row">
          <span class="rdx-stat-label">Cases Completed</span>
          <span class="rdx-stat-value">${history.totalCases}</span>
        </div>
      `);
    }
    
    if (history.averageScore) {
      rows.push(`
        <div class="rdx-stat-row">
          <span class="rdx-stat-label">Average Score</span>
          <span class="rdx-stat-value">${history.averageScore}%</span>
        </div>
      `);
    }
    
    return rows.join('');
  }

  // Dismiss modal
  function dismiss() {
    const modal = document.getElementById('rdx-email-modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
    
    // Track dismissal
    window.RDXSessionManager.trackEvent('email_modal_dismissed', {
      source: currentSource
    });
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('rdx-email-input');
    const email = emailInput.value.trim();
    
    if (!email) return;
    
    // Disable form
    emailInput.disabled = true;
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Saving...';
    submitBtn.disabled = true;
    
    // Save to session manager
    const result = await window.RDXSessionManager.captureEmail(email, currentSource);
    
    // ALSO send to Loops worker (existing email system)
    const history = window.RDXSessionManager.getCaseHistory();
    try {
      await fetch('https://rdx-email.laurenmfine.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventType: 'browse_signup',
          email: email,
          firstName: email.split('@')[0], // Extract name from email
          data: {
            totalCompleted: history.totalCases,
            lastCaseId: history.lastCaseId,
            source: currentSource
          }
        })
      });
    } catch (loopsError) {
      console.warn('Loops notification failed (non-fatal):', loopsError);
    }
    
    if (result.success) {
      // Funnel: email capture converted
      if (window.RDXFunnelAgent) RDXFunnelAgent.emailCaptureConverted(currentSource || '');
      // Success!
      submitBtn.textContent = '✓ Saved!';
      submitBtn.style.background = '#10b981';
      
      setTimeout(() => {
        dismiss();
        
        // Show welcome message or redirect
        if (window.RDXEmailCapture.onSuccess) {
          window.RDXEmailCapture.onSuccess(email);
        }
      }, 800);
    } else {
      // Error
      alert('Error saving email. Please try again.');
      emailInput.disabled = false;
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }

  // Public API
  return {
    init: init,
    show: show,
    dismiss: dismiss,
    onSuccess: null // Can be set by calling code
  };
})();
