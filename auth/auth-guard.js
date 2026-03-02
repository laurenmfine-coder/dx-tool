/* auth-guard.js — ReasonDx Authentication Guard */
(function(){
  'use strict';
  var user = localStorage.getItem('reasondx-user');
  // In development/preview, allow access without auth
  // In production, uncomment the redirect below:
  // if (!user) { window.location.href = (window.location.pathname.indexOf('/auth/') === -1 ? '' : '../') + 'auth/register.html'; }
})();
