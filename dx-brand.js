/* dx-brand.js — Unified Dx brand styling
   Auto-applies two-tone color treatment to brand names:
   "Reason" in dark navy (#1A3A5C), "Dx" in ocean blue (#2874A6)
   Works for: ReasonDx, CoachDx, MechanismDx, SimRoomDx, RadDx, etc.
*/
(function(){
  var style = document.createElement('style');
  style.textContent = [
    '.dx-brand{font-weight:700;letter-spacing:-0.3px;white-space:nowrap}',
    '.dx-brand .dx-pre{color:#1A3A5C}',
    '.dx-brand .dx-suf{color:#2874A6}',
    '[data-theme="dark"] .dx-brand .dx-pre{color:#CBD5E1}',
    '[data-theme="dark"] .dx-brand .dx-suf{color:#5BA3CC}',
    '.dx-brand-light .dx-pre{color:#FFF}',
    '.dx-brand-light .dx-suf{color:#93C5E6}',
  ].join('\n');
  document.head.appendChild(style);
})();
