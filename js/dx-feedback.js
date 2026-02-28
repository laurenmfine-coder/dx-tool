// dx-feedback.js — ReasonDx Feedback Widget
// Provides inline feedback button on topic and mechanism pages
(function(){
  'use strict';
  
  // Only initialize if not already present
  if(window.__rdxFeedback) return;
  window.__rdxFeedback = true;
  
  // Create feedback button
  const btn = document.createElement('button');
  btn.id = 'rdx-feedback-btn';
  btn.innerHTML = '💬 Feedback';
  btn.setAttribute('aria-label', 'Send feedback about this page');
  Object.assign(btn.style, {
    position: 'fixed', bottom: '20px', right: '20px', zIndex: '9999',
    padding: '10px 18px', borderRadius: '24px', border: 'none',
    background: '#1565C0', color: '#fff', fontSize: '13px', fontWeight: '600',
    fontFamily: "'DM Sans', sans-serif", cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(21,101,192,0.3)', transition: 'all 0.2s'
  });
  btn.onmouseenter = () => { btn.style.transform = 'scale(1.05)'; btn.style.boxShadow = '0 6px 16px rgba(21,101,192,0.4)'; };
  btn.onmouseleave = () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = '0 4px 12px rgba(21,101,192,0.3)'; };
  
  // Feedback modal
  btn.onclick = () => {
    if(document.getElementById('rdx-feedback-modal')) return;
    const overlay = document.createElement('div');
    overlay.id = 'rdx-feedback-modal';
    Object.assign(overlay.style, {
      position:'fixed',top:'0',left:'0',right:'0',bottom:'0',
      background:'rgba(0,0,0,0.4)',zIndex:'10000',display:'flex',
      alignItems:'center',justifyContent:'center',padding:'20px'
    });
    const page = document.title || window.location.pathname;
    overlay.innerHTML = `
      <div style="background:#fff;border-radius:16px;padding:32px;max-width:440px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.2);font-family:'DM Sans',sans-serif">
        <div style="font-size:18px;font-weight:700;margin-bottom:4px">Page Feedback</div>
        <div style="font-size:12px;color:#5A6178;margin-bottom:16px">${page}</div>
        <div style="margin-bottom:12px">
          <label style="font-size:12px;font-weight:600;color:#5A6178;display:block;margin-bottom:4px">What type of feedback?</label>
          <select id="rdx-fb-type" style="width:100%;padding:10px;border:1px solid #DFE1E6;border-radius:8px;font-size:14px;font-family:'DM Sans',sans-serif">
            <option>Content accuracy issue</option>
            <option>Missing information</option>
            <option>UI/formatting issue</option>
            <option>Great content — keep it up!</option>
            <option>Suggestion</option>
          </select>
        </div>
        <div style="margin-bottom:16px">
          <label style="font-size:12px;font-weight:600;color:#5A6178;display:block;margin-bottom:4px">Details</label>
          <textarea id="rdx-fb-text" rows="4" style="width:100%;padding:10px;border:1px solid #DFE1E6;border-radius:8px;font-size:14px;font-family:'DM Sans',sans-serif;resize:vertical" placeholder="Tell us more..."></textarea>
        </div>
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button id="rdx-fb-cancel" style="padding:10px 20px;border-radius:8px;border:1px solid #DFE1E6;background:#fff;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif">Cancel</button>
          <button id="rdx-fb-send" style="padding:10px 20px;border-radius:8px;border:none;background:#1565C0;color:#fff;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif">Send Feedback</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.onclick = (e) => { if(e.target === overlay) overlay.remove(); };
    document.getElementById('rdx-fb-cancel').onclick = () => overlay.remove();
    document.getElementById('rdx-fb-send').onclick = () => {
      const type = document.getElementById('rdx-fb-type').value;
      const text = document.getElementById('rdx-fb-text').value;
      // Store locally for now
      const feedback = JSON.parse(localStorage.getItem('rdx-feedback') || '[]');
      feedback.push({ page, type, text, timestamp: new Date().toISOString() });
      localStorage.setItem('rdx-feedback', JSON.stringify(feedback));
      overlay.innerHTML = '<div style="background:#fff;border-radius:16px;padding:48px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.2)"><div style="font-size:32px;margin-bottom:12px">✓</div><div style="font-size:16px;font-weight:600">Thank you!</div><div style="font-size:13px;color:#5A6178;margin-top:4px">Your feedback has been recorded.</div></div>';
      setTimeout(() => overlay.remove(), 1500);
    };
  };
  
  document.body.appendChild(btn);
})();
