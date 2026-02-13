/* dx-epa-integration.js — EPA bridge for tool integration */
(function() {
  function whenReady(cb) {
    if (window.DxProgress) { cb(); return; }
    let n = 0;
    const c = setInterval(() => { n++; if (window.DxProgress) { clearInterval(c); cb(); } if (n > 50) clearInterval(c); }, 100);
  }
  whenReady(() => console.log('[EPA Integration] Bridge loaded'));
})();
