/* dx-user-bar.js — User identity bar (stub)
   Shows user name, avatar, XP level, and quick settings. */
window.DxUserBar = {
  render(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const progress = window.DxProgress?.getProgress() || { xp: 0 };
    const level = Math.floor(progress.xp / 100) + 1;
    el.innerHTML = '<div style="display:flex;align-items:center;gap:8px;padding:6px 12px;background:#f8fafc;border-radius:6px;font-size:13px;color:#475569;">Level ' + level + ' &middot; ' + progress.xp + ' XP</div>';
  }
};
console.log('[DxUserBar] Loaded');
