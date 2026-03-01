// ═══════════════════════════════════════════════════════════════
// DX-USER-BAR — Cross-page navigation and user status bar
// Auto-injected into all ReasonDx pages via script loader
// ═══════════════════════════════════════════════════════════════

(function() {
  // Don't inject if virtual-emr (has its own header)
  if (location.pathname.includes('virtual-emr')) return;

  // Determine base path
  var depth = (location.pathname.match(/\//g) || []).length - 1;
  var base = '';
  for (var i = 0; i < depth; i++) base += '../';

  // Check login state
  var session = null;
  try {
    session = JSON.parse(localStorage.getItem('vemr-session'));
  } catch(e) {}

  var userName = session ? session.displayName || session.username : null;

  // Build bar
  var bar = document.createElement('div');
  bar.id = 'dx-user-bar';
  bar.style.cssText = 'position:fixed;top:0;left:0;right:0;height:36px;background:#0f172a;display:flex;align-items:center;justify-content:space-between;padding:0 16px;z-index:9999;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:12px;border-bottom:1px solid rgba(255,255,255,0.08);';

  // Left: Logo + Nav
  var left = document.createElement('div');
  left.style.cssText = 'display:flex;align-items:center;gap:16px;';

  var logo = document.createElement('a');
  logo.href = base + 'index.html';
  logo.style.cssText = 'color:#2874A6;font-weight:700;font-size:13px;text-decoration:none;letter-spacing:0.3px;';
  logo.textContent = 'ReasonDx';
  left.appendChild(logo);

  var nav = [
    { label: '🏥 Hospital', href: 'hospital-3d.html' },
    { label: '📋 Cases', href: 'case-browser.html' },
    { label: '📊 Dashboard', href: 'analytics-dashboard.html' },
    { label: '🧪 Board Prep', href: 'board-prep.html' }
  ];

  nav.forEach(function(item) {
    var a = document.createElement('a');
    a.href = base + item.href;
    a.style.cssText = 'color:rgba(255,255,255,0.5);text-decoration:none;font-size:11px;transition:color 0.15s;';
    a.textContent = item.label;
    a.onmouseenter = function() { this.style.color = 'rgba(255,255,255,0.9)'; };
    a.onmouseleave = function() { this.style.color = 'rgba(255,255,255,0.5)'; };
    // Highlight current
    if (location.pathname.includes(item.href.replace('.html',''))) {
      a.style.color = '#2874A6';
    }
    left.appendChild(a);
  });

  bar.appendChild(left);

  // Right: User info
  var right = document.createElement('div');
  right.style.cssText = 'display:flex;align-items:center;gap:10px;';

  if (userName) {
    var userSpan = document.createElement('span');
    userSpan.style.cssText = 'color:rgba(255,255,255,0.6);font-size:11px;';
    userSpan.textContent = '🎓 ' + userName;
    right.appendChild(userSpan);

    var signOut = document.createElement('a');
    signOut.href = '#';
    signOut.style.cssText = 'color:rgba(255,255,255,0.35);font-size:10px;text-decoration:none;';
    signOut.textContent = 'Sign Out';
    signOut.onclick = function(e) {
      e.preventDefault();
      localStorage.removeItem('vemr-session');
      location.reload();
    };
    right.appendChild(signOut);
  } else {
    var loginLink = document.createElement('a');
    loginLink.href = base + 'auth/login.html';
    loginLink.style.cssText = 'color:#2874A6;font-size:11px;text-decoration:none;font-weight:600;';
    loginLink.textContent = 'Sign In';
    right.appendChild(loginLink);
  }

  bar.appendChild(right);

  // Inject and offset body
  document.body.insertBefore(bar, document.body.firstChild);
  document.body.style.paddingTop = '36px';

  // Mobile: hide nav links on very small screens
  var style = document.createElement('style');
  style.textContent = '@media(max-width:600px){#dx-user-bar a:not(:first-child){display:none}#dx-user-bar{padding:0 10px;height:32px}}';
  document.head.appendChild(style);
})();
