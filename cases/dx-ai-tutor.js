/* dx-ai-tutor.js — AI coaching integration (stub)
   Provides contextual hints and Socratic questioning during cases/modules. */
window.DxAiTutor = {
  isAvailable: false,
  init(config) { this.config = config || {}; },
  getHint(context) { return 'Think about what clinical findings would help narrow your differential.'; },
  askQuestion(topic) { return null; },
  renderWidget(containerId) {
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = '<div style="padding:12px;background:#f0f7fc;border:1px solid #a3cfe6;border-radius:8px;color:#2874a6;font-size:14px;">AI Tutor available in future update</div>';
  }
};
