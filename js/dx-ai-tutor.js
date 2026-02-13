/* dx-ai-tutor.js — AI coaching integration (stub)
   Provides contextual hints and Socratic questioning during cases/modules. */
window.DxAiTutor = {
  isAvailable: false,
  init(config) { this.config = config || {}; },
  getHint(context) { return 'Think about what clinical findings would help narrow your differential.'; },
  askQuestion(topic) { return null; },
  renderWidget(containerId) {
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = '<div style="padding:12px;background:#f0fdfa;border:1px solid #99f6e4;border-radius:8px;color:#0d9488;font-size:14px;">AI Tutor available in future update</div>';
  }
};
console.log('[DxAiTutor] Loaded');
