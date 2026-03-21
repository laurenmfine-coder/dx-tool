/* js/rdx-order-mode.js — Order Mode Selector + Free-Text EMR Interface
 * Shown before CRT orders load. Lets student choose:
 *   🌱 Guided   — curated checklist (current behavior)
 *   🎯 Standard — free-text search from order catalog
 *   🔥 Advanced — free-text search, no hints, time pressure
 */
(function() {
'use strict';

// ─── STATE ───────────────────────────────────────────────────────────────────
var ORDER_MODE_KEY = 'rdx-order-mode';

window.RDXOrderMode = {

  get: function() {
    try { return sessionStorage.getItem(ORDER_MODE_KEY) || null; } catch(e) { return null; }
  },

  set: function(mode) {
    try { sessionStorage.setItem(ORDER_MODE_KEY, mode); } catch(e) {}
    window.RDX_ORDER_MODE = mode;
  },

  clear: function() {
    try { sessionStorage.removeItem(ORDER_MODE_KEY); } catch(e) {}
    window.RDX_ORDER_MODE = null;
  },

  // ─── MODE SELECTOR CARD ────────────────────────────────────────────────────
  renderModeSelector: function(caseId, diagnosisName) {
    return [
      '<div class="rdx-order-mode-card" id="rdxOrderModeCard">',
        '<div class="rdx-order-mode-header">',
          '<div style="font-size:22px">⚙️</div>',
          '<div>',
            '<div style="font-size:15px;font-weight:800;color:#0F172A">Choose Your Ordering Mode</div>',
            '<div style="font-size:12px;color:#64748B;margin-top:2px">',
              diagnosisName
                ? 'How do you want to order for <strong>' + _esc(diagnosisName) + '</strong>?'
                : 'How do you want to work through the orders?',
            '</div>',
          '</div>',
        '</div>',

        '<div class="rdx-order-mode-options">',

          // Guided
          '<button class="rdx-mode-option rdx-mode-guided" onclick="RDXOrderMode._select(\'guided\',\'' + _esc(caseId) + '\')" >',
            '<div class="rdx-mode-icon">🌱</div>',
            '<div class="rdx-mode-body">',
              '<div class="rdx-mode-name">Guided</div>',
              '<div class="rdx-mode-tagline">M1–M2 · Foundational</div>',
              '<div class="rdx-mode-desc">A curated list of correct and incorrect orders — choose the right ones. Teaching feedback on every selection.</div>',
              '<div class="rdx-mode-tags">',
                '<span class="rdx-mode-tag">Checklist</span>',
                '<span class="rdx-mode-tag">Scaffolded</span>',
                '<span class="rdx-mode-tag">Immediate feedback</span>',
              '</div>',
            '</div>',
            '<div class="rdx-mode-arrow">→</div>',
          '</button>',

          // Standard
          '<button class="rdx-mode-option rdx-mode-standard" onclick="RDXOrderMode._select(\'standard\',\'' + _esc(caseId) + '\')" >',
            '<div class="rdx-mode-icon">🎯</div>',
            '<div class="rdx-mode-body">',
              '<div class="rdx-mode-name">Standard</div>',
              '<div class="rdx-mode-tagline">M3–M4 · Clerkship</div>',
              '<div class="rdx-mode-desc">Search a real order catalog. You decide what to order — no list provided. Compare against expert orders on submit.</div>',
              '<div class="rdx-mode-tags">',
                '<span class="rdx-mode-tag rdx-mode-tag-blue">Free-text search</span>',
                '<span class="rdx-mode-tag rdx-mode-tag-blue">Order catalog</span>',
                '<span class="rdx-mode-tag rdx-mode-tag-blue">Expert comparison</span>',
              '</div>',
            '</div>',
            '<div class="rdx-mode-arrow rdx-mode-arrow-blue">→</div>',
          '</button>',

          // Advanced
          '<button class="rdx-mode-option rdx-mode-advanced" onclick="RDXOrderMode._select(\'advanced\',\'' + _esc(caseId) + '\')" >',
            '<div class="rdx-mode-icon">🔥</div>',
            '<div class="rdx-mode-body">',
              '<div class="rdx-mode-name">Advanced</div>',
              '<div class="rdx-mode-tagline">Resident · Fellow</div>',
              '<div class="rdx-mode-desc">Same free-text search with no hints. Feedback withheld until the end. Your attending will push back on your reasoning.</div>',
              '<div class="rdx-mode-tags">',
                '<span class="rdx-mode-tag rdx-mode-tag-red">No hints</span>',
                '<span class="rdx-mode-tag rdx-mode-tag-red">Delayed feedback</span>',
                '<span class="rdx-mode-tag rdx-mode-tag-red">Attending pushback</span>',
              '</div>',
            '</div>',
            '<div class="rdx-mode-arrow rdx-mode-arrow-red">→</div>',
          '</button>',

        '</div>',
      '</div>',
    ].join('');
  },

  _select: function(mode, caseId) {
    RDXOrderMode.set(mode);
    // Re-render the CRT tab
    if (window.render) {
      render();
    } else if (window.CRTChart && CRTChart._refreshTab) {
      CRTChart._refreshTab();
    }
  },

  // ─── FREE-TEXT ORDER INTERFACE (Standard / Advanced) ─────────────────────
  renderFreeTextInterface: function(tx, state, caseId) {
    var mode = window.RDX_ORDER_MODE || RDXOrderMode.get() || 'standard';
    var isAdvanced = mode === 'advanced';
    var orderedIds = state.freeOrders || [];

    var html = [
      '<div class="rdx-freeorder-wrap">',

        // Mode badge + change link
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">',
          '<div style="display:flex;align-items:center;gap:8px">',
            '<span style="font-size:18px">' + (isAdvanced ? '🔥' : '🎯') + '</span>',
            '<div>',
              '<div style="font-size:13px;font-weight:700;color:#0F172A">' + (isAdvanced ? 'Advanced Mode' : 'Standard Mode') + '</div>',
              '<div style="font-size:11px;color:#64748B">' + (isAdvanced ? 'No hints — feedback after submit' : 'Search and order — compare against expert set') + '</div>',
            '</div>',
          '</div>',
          '<button onclick="RDXOrderMode.clear();if(window.render)render();" style="font-size:11px;color:#2874A6;background:none;border:none;cursor:pointer;padding:4px 8px;border-radius:6px;font-weight:600">⚙ Change mode</button>',
        '</div>',

        // Search box
        '<div class="rdx-order-search-wrap">',
          '<div style="position:relative">',
            '<span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:16px;color:#94A3B8">🔍</span>',
            '<input ',
              'id="rdxOrderSearchInput" ',
              'type="text" ',
              'class="rdx-order-search-input" ',
              'placeholder="Search orders — e.g. \'troponin\', \'heparin\', \'CT chest\', \'cardiology consult\'…" ',
              'autocomplete="off" ',
              'oninput="RDXOrderMode._onSearch(this.value,\'' + _esc(caseId) + '\')" ',
              'onkeydown="RDXOrderMode._onSearchKey(event)"',
            '>',
          '</div>',
          '<div id="rdxOrderSuggestions" class="rdx-order-suggestions" style="display:none"></div>',
        '</div>',

        // Category quick-filters
        '<div class="rdx-order-cats" id="rdxOrderCats">',
          ['Labs','Imaging','Medications','Consults','Procedures'].map(function(cat) {
            return '<button class="rdx-order-cat-btn" onclick="RDXOrderMode._filterCat(\'' + cat + '\',\'' + _esc(caseId) + '\')">' + _catIcon(cat) + ' ' + cat + '</button>';
          }).join(''),
        '</div>',

        // Active orders list
        '<div class="rdx-freeorder-panel">',
          '<div style="font-size:12px;font-weight:700;color:#0F172A;margin-bottom:10px;display:flex;align-items:center;gap:6px">',
            '📋 My Orders <span class="rdx-order-badge">' + orderedIds.length + '</span>',
          '</div>',
          orderedIds.length === 0
            ? '<div style="text-align:center;padding:24px;color:#94A3B8;font-size:13px">No orders placed yet — search above or browse by category.</div>'
            : '<div class="rdx-freeorder-list">' + RDXOrderMode._renderOrderList(orderedIds, state, tx, isAdvanced, caseId) + '</div>',
        '</div>',

        // Submit button
        orderedIds.length > 0 ? [
          '<div class="crt-action-bar">',
            '<button type="button" class="crt-btn crt-btn-primary" onclick="RDXOrderMode._submitFreeOrders(\'' + _esc(caseId) + '\')">',
              'Submit Orders (' + orderedIds.length + ')',
            '</button>',
            state.freeSubmitted ? '<button type="button" class="crt-btn crt-btn-outline" onclick="RDXOrderMode._reset(\'' + _esc(caseId) + '\')">↺ Reset</button>' : '',
          '</div>',
        ].join('') : '',

        // Results panel (shown after submit)
        state.freeSubmitted ? RDXOrderMode._renderResults(tx, state, isAdvanced) : '',

      '</div>',
    ].join('');

    return html;
  },

  _catIcon: function(cat) { return _catIcon(cat); },

  _renderOrderList: function(orderedIds, state, tx, isAdvanced, caseId) {
    return orderedIds.map(function(entry) {
      var isCustom = typeof entry === 'string' && entry.startsWith('custom:');
      var name = isCustom ? entry.replace('custom:', '') : (entry.name || entry);
      var id = isCustom ? entry : (entry.id || entry);

      var feedback = '';
      if (state.freeSubmitted && !isAdvanced) {
        // Match against CRT correct orders
        var tx_orders = (window.CRT_DATA && window.CRT_DATA[state.caseId]) ?
          (window.CRT_DATA[state.caseId].treatments || {}).orders || [] : [];

        // Find if this order matches any correct CRT order by name similarity
        var matchedOrder = _findCRTMatch(name, tx_orders);
        if (matchedOrder) {
          feedback = matchedOrder.correct
            ? '<div class="crt-order-feedback correct"><span class="crt-order-verdict">✅ Appropriate</span><div class="crt-order-teaching">' + _esc(matchedOrder.teaching) + '</div></div>'
            : '<div class="crt-order-feedback incorrect"><span class="crt-order-verdict">❌ Not recommended</span><div class="crt-order-teaching">' + _esc(matchedOrder.teaching) + '</div></div>';
        }
      }

      return [
        '<div class="rdx-freeorder-item">',
          '<div style="display:flex;align-items:center;justify-content:space-between">',
            '<span style="font-size:13px;font-weight:600;color:#0F172A">' + _esc(typeof name === 'string' ? name : (name.name || String(name))) + '</span>',
            !state.freeSubmitted
              ? '<button onclick="RDXOrderMode._removeOrder(\'' + (typeof id === 'string' ? id.replace(/'/g,"\\'") : id) + '\',\'' + _esc(caseId) + '\')" style="background:none;border:none;cursor:pointer;color:#94A3B8;font-size:16px;padding:2px 6px" title="Remove order">✕</button>'
              : '',
          '</div>',
          feedback,
        '</div>',
      ].join('');
    }).join('');
  },

  _renderResults: function(tx, state, isAdvanced) {
    var orderedNames = (state.freeOrders || []).map(function(e) {
      return typeof e === 'string' ? e.replace('custom:', '') : (e.name || e);
    });
    var crtOrders = tx ? (tx.orders || []) : [];
    var correctOrders = crtOrders.filter(function(o){ return o.correct; });

    // Find missed critical orders
    var missed = correctOrders.filter(function(co) {
      return !_orderListContains(orderedNames, co.name);
    });

    // Find correctly identified orders
    var hits = correctOrders.filter(function(co) {
      return _orderListContains(orderedNames, co.name);
    });

    var pct = correctOrders.length > 0 ? Math.round(hits.length / correctOrders.length * 100) : 0;

    return [
      '<div class="rdx-freeresults">',
        '<div class="rdx-freeresults-header">',
          '<div style="font-size:14px;font-weight:800">Order Review</div>',
          '<div class="rdx-score-circle ' + (pct >= 80 ? 'score-great' : pct >= 50 ? 'score-ok' : 'score-low') + '">' + pct + '%</div>',
        '</div>',

        hits.length > 0 ? [
          '<div class="rdx-freeresults-section">',
            '<div class="rdx-freeresults-label rdx-label-correct">✅ Appropriate orders you included (' + hits.length + '/' + correctOrders.length + ')</div>',
            hits.map(function(o) {
              return '<div class="rdx-freeresult-item rdx-result-correct"><strong>' + _esc(o.name) + '</strong>' + (!isAdvanced && o.teaching ? '<div style="font-size:12px;color:#047857;margin-top:4px">' + _esc(o.teaching) + '</div>' : '') + '</div>';
            }).join(''),
          '</div>',
        ].join('') : '',

        missed.length > 0 ? [
          '<div class="rdx-freeresults-section">',
            '<div class="rdx-freeresults-label rdx-label-missed">⚠️ Critical orders you missed (' + missed.length + ')</div>',
            missed.map(function(o) {
              return '<div class="rdx-freeresult-item rdx-result-missed"><strong>' + _esc(o.name) + '</strong>' + (!isAdvanced && o.teaching ? '<div style="font-size:12px;color:#B45309;margin-top:4px">' + _esc(o.teaching) + '</div>' : '') + '</div>';
            }).join(''),
          '</div>',
        ].join('') : '',

      '</div>',
    ].join('');
  },

  // ─── SEARCH HANDLERS ─────────────────────────────────────────────────────
  _onSearch: function(query, caseId) {
    var box = document.getElementById('rdxOrderSuggestions');
    if (!box) return;
    if (!query || query.trim().length < 2) { box.style.display = 'none'; return; }

    var results = window.RDX_ORDER_SEARCH ? window.RDX_ORDER_SEARCH(query, 12) : [];
    if (results.length === 0) {
      box.innerHTML = '<div class="rdx-suggestion-custom" onclick="RDXOrderMode._addCustom(\'' + _esc(query) + '\',\'' + _esc(caseId) + '\')">+ Add "' + _esc(query) + '" as free-text order</div>';
    } else {
      box.innerHTML = results.map(function(r, i) {
        return '<div class="rdx-suggestion-item" data-idx="' + i + '" onclick="RDXOrderMode._addFromCatalog(' + JSON.stringify({id:r.id,name:r.name,cat:r.cat,sub:r.sub}) + ',\'' + _esc(caseId) + '\')">' +
          '<span class="rdx-sug-cat rdx-sug-cat-' + (r.cat||'').toLowerCase().replace(/[^a-z]/g,'') + '">' + _catIcon(r.cat) + ' ' + (r.sub || r.cat) + '</span>' +
          '<span class="rdx-sug-name">' + _esc(r.name) + '</span>' +
          '</div>';
      }).join('');

      // Add free-text option at bottom
      box.innerHTML += '<div class="rdx-suggestion-custom" onclick="RDXOrderMode._addCustom(\'' + _esc(query) + '\',\'' + _esc(caseId) + '\')">+ Add "' + _esc(query) + '" as free-text order</div>';
    }
    box.style.display = 'block';
  },

  _onSearchKey: function(e) {
    if (e.key === 'Escape') {
      var box = document.getElementById('rdxOrderSuggestions');
      if (box) box.style.display = 'none';
    }
  },

  _filterCat: function(cat, caseId) {
    var input = document.getElementById('rdxOrderSearchInput');
    if (input) { input.value = cat; RDXOrderMode._onSearch(cat, caseId); input.focus(); }
  },

  _addFromCatalog: function(order, caseId) {
    _addOrderToState(order, caseId);
  },

  _addCustom: function(name, caseId) {
    _addOrderToState({ id: 'custom:' + name, name: name, cat: 'Custom', sub: 'Free-text' }, caseId);
  },

  _removeOrder: function(orderId, caseId) {
    var state = _getState(caseId);
    if (!state.freeOrders) return;
    state.freeOrders = state.freeOrders.filter(function(e) {
      var id = typeof e === 'string' ? e : (e.id || e);
      return id !== orderId;
    });
    _saveState(caseId, state);
    _refresh();
  },

  _submitFreeOrders: function(caseId) {
    var state = _getState(caseId);
    state.freeSubmitted = true;
    _saveState(caseId, state);
    _refresh();
    if (window.showToast) showToast('Orders submitted — see comparison below', 'success');
  },

  _reset: function(caseId) {
    var state = _getState(caseId);
    state.freeOrders = [];
    state.freeSubmitted = false;
    _saveState(caseId, state);
    _refresh();
  },

};

// ─── INTERNAL HELPERS ─────────────────────────────────────────────────────────
function _esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function _catIcon(cat) {
  var icons = { Labs:'🧪', Imaging:'🩻', Medications:'💊', Consults:'👥', Procedures:'🔧', Custom:'✏️' };
  return icons[cat] || '📋';
}

function _getState(caseId) {
  try {
    var key = 'rdx-crt-state-' + caseId;
    var stored = sessionStorage.getItem(key);
    return stored ? JSON.parse(stored) : { freeOrders: [], freeSubmitted: false };
  } catch(e) { return { freeOrders: [], freeSubmitted: false }; }
}

function _saveState(caseId, state) {
  try {
    sessionStorage.setItem('rdx-crt-state-' + caseId, JSON.stringify(state));
  } catch(e) {}
}

function _addOrderToState(order, caseId) {
  var state = _getState(caseId);
  if (!state.freeOrders) state.freeOrders = [];
  // Deduplicate
  var exists = state.freeOrders.some(function(e) {
    var id = typeof e === 'string' ? e : (e.id || e);
    return id === order.id;
  });
  if (!exists) {
    state.freeOrders.push(order);
    _saveState(caseId, state);
    if (window.showToast) showToast('Added: ' + order.name, 'success');
  } else {
    if (window.showToast) showToast('Already in your order list', 'info');
  }
  // Hide suggestions, clear input
  var box = document.getElementById('rdxOrderSuggestions');
  var input = document.getElementById('rdxOrderSearchInput');
  if (box) box.style.display = 'none';
  if (input) input.value = '';
  _refresh();
}

function _refresh() {
  if (window.render) render();
  else if (window.CRTChart && CRTChart._refreshTab) CRTChart._refreshTab();
}

function _findCRTMatch(searchName, crtOrders) {
  if (!searchName || !crtOrders) return null;
  var sn = searchName.toLowerCase();
  // Try exact match first
  var exact = crtOrders.find(function(o){ return o.name && o.name.toLowerCase() === sn; });
  if (exact) return exact;
  // Partial match — check if significant words overlap
  var searchWords = sn.split(/\s+/).filter(function(w){ return w.length > 3; });
  var best = null, bestScore = 0;
  crtOrders.forEach(function(o) {
    if (!o.name) return;
    var on = o.name.toLowerCase();
    var matches = searchWords.filter(function(w){ return on.includes(w); }).length;
    var score = searchWords.length > 0 ? matches / searchWords.length : 0;
    if (score > 0.5 && score > bestScore) { best = o; bestScore = score; }
  });
  return best;
}

function _orderListContains(orderedNames, targetName) {
  if (!targetName) return false;
  var target = targetName.toLowerCase();
  var targetWords = target.split(/\s+/).filter(function(w){ return w.length > 3; });
  return orderedNames.some(function(n) {
    if (!n) return false;
    var nl = String(n).toLowerCase();
    if (nl.includes(target) || target.includes(nl)) return true;
    var matches = targetWords.filter(function(w){ return nl.includes(w); }).length;
    return targetWords.length > 0 && matches / targetWords.length > 0.5;
  });
}

})();
