/* dx-rate-limiter.js — Prevents API/storage abuse */
(function() {
  const limits = {};
  window.DxRateLimiter = {
    check: function(key, maxPerMinute) {
      const now = Date.now();
      if (!limits[key]) limits[key] = [];
      limits[key] = limits[key].filter(t => now - t < 60000);
      if (limits[key].length >= (maxPerMinute || 30)) return false;
      limits[key].push(now);
      return true;
    }
  };
})();
