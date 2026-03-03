/* js/ddx-builder.js — Differential Diagnosis Builder for ReasonDx Virtual EMR
 * Provides a ranked DDx interface with supporting/refuting evidence per diagnosis.
 * Integrates with MissionControl for task tracking.
 */
(function() {
  'use strict';

  window.DdxBuilder = {

    renderTab: function() {
      var entries = (window.MissionControl && MissionControl.getDdxEntries) ? MissionControl.getDdxEntries() : [];
      var tipHtml = (window.MissionControl && MissionControl.renderTipBar) ? MissionControl.renderTipBar('ddx') : '';

      var html = tipHtml;
      html += '<div class="section-card"><div class="section-header"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> <span class="section-header-title">Differential Diagnosis Builder</span></div><div class="section-body">';
      
      html += '<div style="font-size:12px;color:var(--text-secondary);margin-bottom:16px">Rank your differential by likelihood. For each diagnosis, note the key supporting evidence and anything that argues against it.</div>';

      // Entries
      if (entries.length > 0) {
        entries.forEach(function(e, i) {
          var rank = i + 1;
          var borderColor = rank === 1 ? '#2874A6' : rank === 2 ? '#00897B' : '#DFE1E6';
          html += '<div style="border:2px solid ' + borderColor + ';border-radius:8px;padding:14px;margin-bottom:12px;position:relative;background:#fff">';
          
          // Header row
          html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">';
          html += '<span style="width:28px;height:28px;border-radius:50%;background:' + (rank <= 2 ? borderColor : '#F7F8FA') + ';color:' + (rank <= 2 ? '#fff' : '#5A6178') + ';display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0">#' + rank + '</span>';
          html += '<input type="text" value="' + _esc(e.diagnosis || '') + '" placeholder="Diagnosis name" onchange="DdxBuilder._update(' + i + ',\'diagnosis\',this.value)" style="flex:1;padding:6px 10px;border:1px solid var(--border);border-radius:6px;font-size:14px;font-weight:600;font-family:inherit">';
          
          // Move + delete buttons
          html += '<div style="display:flex;gap:4px">';
          if (i > 0) html += '<button type="button" onclick="DdxBuilder._move(' + i + ',-1)" style="padding:3px 6px;border:1px solid var(--border);border-radius:4px;background:#fff;cursor:pointer;font-size:11px;font-family:inherit" title="Move up">\u2191</button>';
          if (i < entries.length - 1) html += '<button type="button" onclick="DdxBuilder._move(' + i + ',1)" style="padding:3px 6px;border:1px solid var(--border);border-radius:4px;background:#fff;cursor:pointer;font-size:11px;font-family:inherit" title="Move down">\u2193</button>';
          html += '<button type="button" onclick="DdxBuilder._remove(' + i + ')" style="padding:3px 6px;border:1px solid var(--danger-light,#FFEBEE);border-radius:4px;background:var(--danger-light,#FFEBEE);cursor:pointer;font-size:11px;color:var(--danger,#C62828);font-family:inherit" title="Remove">\u2715</button>';
          html += '</div></div>';

          // Confidence slider
          var conf = e.confidence || 50;
          html += '<div style="margin-bottom:10px;display:flex;align-items:center;gap:8px">';
          html += '<span style="font-size:10px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;min-width:72px">Likelihood</span>';
          html += '<input type="range" min="0" max="100" value="' + conf + '" oninput="DdxBuilder._update(' + i + ',\'confidence\',parseInt(this.value));this.nextElementSibling.textContent=this.value+\'%\'" style="flex:1;accent-color:#2874A6">';
          html += '<span style="font-size:11px;font-weight:600;color:var(--primary);min-width:32px;font-family:\'IBM Plex Mono\',monospace">' + conf + '%</span>';
          html += '</div>';

          // Supporting evidence
          html += '<div style="margin-bottom:8px">';
          html += '<div style="font-size:10px;font-weight:700;color:#1B7A3D;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">\u2705 Supporting Evidence</div>';
          html += '<textarea placeholder="What findings support this diagnosis?" onchange="DdxBuilder._update(' + i + ',\'supporting\',this.value)" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:6px;font-size:12px;font-family:inherit;min-height:48px;resize:vertical;line-height:1.5">' + _esc(e.supporting || '') + '</textarea>';
          html += '</div>';

          // Refuting evidence
          html += '<div>';
          html += '<div style="font-size:10px;font-weight:700;color:#C62828;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">\u274C Refuting Evidence</div>';
          html += '<textarea placeholder="What argues against this diagnosis?" onchange="DdxBuilder._update(' + i + ',\'refuting\',this.value)" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:6px;font-size:12px;font-family:inherit;min-height:48px;resize:vertical;line-height:1.5">' + _esc(e.refuting || '') + '</textarea>';
          html += '</div>';

          html += '</div>';
        });
      } else {
        html += '<div style="text-align:center;padding:24px 0;color:var(--text-muted)"><div style="font-size:32px;margin-bottom:8px">\uD83E\uDE7A</div><p style="font-size:13px">No diagnoses yet. Start building your differential below.</p></div>';
      }

      // Add button
      html += '<button type="button" onclick="DdxBuilder._add()" style="width:100%;padding:10px;border:2px dashed var(--border);border-radius:8px;background:transparent;font-size:13px;font-weight:600;color:var(--primary);cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px;transition:all .15s;margin-top:8px">';
      html += '+ Add Diagnosis to Differential';
      html += '</button>';

      // Summary
      if (entries.length >= 2) {
        html += '<div style="margin-top:20px;padding:14px;background:var(--surface-alt);border-radius:8px">';
        html += '<div style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">DDx Summary</div>';
        html += '<div style="font-size:12px;color:var(--text);line-height:1.6">';
        entries.forEach(function(e, i) {
          if (e.diagnosis) {
            html += '<div style="margin-bottom:4px"><strong>#' + (i + 1) + ' ' + _esc(e.diagnosis) + '</strong>';
            html += ' <span style="color:var(--primary);font-family:\'IBM Plex Mono\',monospace;font-size:11px">(' + (e.confidence || 50) + '%)</span>';
            html += '</div>';
          }
        });
        html += '</div></div>';
      }

      html += '</div></div>';
      return html;
    },

    // ═══════════════════════════════════════════════════════
    // INTERNAL ACTIONS
    // ═══════════════════════════════════════════════════════
    _add: function() {
      var entries = MissionControl.getDdxEntries();
      entries.push({ diagnosis: '', confidence: 50, supporting: '', refuting: '' });
      MissionControl.setDdxEntries(entries);
      if (window.render) render();
    },

    _remove: function(idx) {
      MissionControl.removeDdxEntry(idx);
      if (window.render) render();
    },

    _update: function(idx, field, value) {
      var entries = MissionControl.getDdxEntries();
      if (entries[idx]) {
        entries[idx][field] = value;
        MissionControl.setDdxEntries(entries);
      }
    },

    _move: function(idx, direction) {
      var entries = MissionControl.getDdxEntries();
      var newIdx = idx + direction;
      if (newIdx < 0 || newIdx >= entries.length) return;
      var temp = entries[idx];
      entries[idx] = entries[newIdx];
      entries[newIdx] = temp;
      MissionControl.setDdxEntries(entries);
      if (window.render) render();
    }
  };

  function _esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

})();
