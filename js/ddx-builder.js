/* js/ddx-builder.js — Enhanced Differential Diagnosis Builder for ReasonDx
 * Searchable diagnosis database + likely/must-not-miss categorization.
 * Integrates with MissionControl for task tracking.
 * Uses DX_DATABASE + CRT_DATA for fuzzy search.
 */
(function() {
  'use strict';

  function _scoreMatch(query, name, aliases) {
    var score = 0, nameLower = name.toLowerCase();
    if (nameLower === query) return 100;
    if (nameLower.startsWith(query)) return 80;
    if (nameLower.includes(query)) score = Math.max(score, 60);
    for (var i = 0; i < (aliases || []).length; i++) {
      var a = aliases[i].toLowerCase();
      if (a === query) return 90;
      if (a.startsWith(query)) score = Math.max(score, 70);
      if (a.includes(query)) score = Math.max(score, 50);
    }
    if (score === 0 && query.includes(' ')) {
      var words = query.split(' ').filter(function(w){return w.length>1;}), allText = nameLower+' '+(aliases||[]).join(' ').toLowerCase();
      var matched = words.filter(function(w){return allText.includes(w);});
      if (matched.length > 0) score = Math.round(40*matched.length/words.length);
    }
    if (score === 0) { var nw = nameLower.split(/[\s\-\/\(]+/); for (var j=0;j<nw.length;j++) { if (nw[j].startsWith(query)){score=55;break;} } }
    return score;
  }

  function _searchDx(query, max) {
    if (!query||query.length<2) return [];
    var q=query.toLowerCase().trim(), scored=[], seen=new Set();
    (window.DX_DATABASE||[]).forEach(function(dx){ var s=_scoreMatch(q,dx.n,dx.a); if(s>0&&!seen.has(dx.n.toLowerCase())){seen.add(dx.n.toLowerCase());scored.push({name:dx.n,sys:dx.s,score:s});} });
    if(window.CRT_DATA) Object.values(window.CRT_DATA).forEach(function(c){ if(!c.diagnosis)return; if(seen.has(c.diagnosis.toLowerCase()))return; var s=_scoreMatch(q,c.diagnosis,[]); if(s>0){seen.add(c.diagnosis.toLowerCase());scored.push({name:c.diagnosis,sys:(c.category||'clinical').toLowerCase(),score:s-5});} });
    scored.sort(function(a,b){return b.score!==a.score?b.score-a.score:a.name.localeCompare(b.name);});
    return scored.slice(0,max||10);
  }

  var SC = {cardiovascular:'#DC2626',pulmonary:'#2563EB',infectious:'#D97706',gi:'#059669',renal:'#7C3AED',neuro:'#BE185D',endocrine:'#0891B2',heme:'#9333EA',rheum:'#EA580C',tox:'#4F46E5',psych:'#0D9488',derm:'#DB2777',msk:'#65A30D',obgyn:'#E11D48',ent:'#6366F1',clinical:'#6B7280',misc:'#6B7280'};

  window.DdxBuilder = {
    renderTab: function() {
      var entries = (window.MissionControl&&MissionControl.getDdxEntries)?MissionControl.getDdxEntries():[];
      var tipHtml = (window.MissionControl&&MissionControl.renderTipBar)?MissionControl.renderTipBar('ddx'):'';
      var html = tipHtml;
      html += '<div class="section-card"><div class="section-header"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> <span class="section-header-title">Differential Diagnosis Builder</span></div><div class="section-body">';

      // Search bar
      html += '<div style="margin-bottom:14px;position:relative">';
      html += '<input type="text" id="ddxSearchBox" placeholder="Search 670+ diagnoses..." autocomplete="off" oninput="DdxBuilder._onSearch(this.value)" onfocus="DdxBuilder._onSearch(this.value)" style="width:100%;padding:10px 14px;border:2px solid var(--border,#D0D5DD);border-radius:8px;font-size:14px;font-family:inherit;box-sizing:border-box">';
      html += '<div id="ddxSearchSuggestions" style="display:none;position:absolute;top:100%;left:0;right:0;max-height:220px;overflow-y:auto;background:#fff;border:1px solid #D0D5DD;border-top:none;border-radius:0 0 8px 8px;z-index:100;box-shadow:0 4px 12px rgba(0,0,0,.1)"></div>';
      html += '</div>';

      html += '<div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px">Rank by priority. Tag each as <strong style="color:#2874A6">LIKELY</strong>, <strong style="color:#DC2626">MUST NOT MISS</strong>, or <strong style="color:#9333EA">BOTH</strong>. Tap the tag to cycle.</div>';

      if (entries.length > 0) {
        entries.forEach(function(e, i) {
          var rank=i+1, cat=e.category||'likely';
          var catColor=cat==='must-not-miss'?'#DC2626':cat==='both'?'#9333EA':'#2874A6';
          var catBg=cat==='must-not-miss'?'#FEF2F2':cat==='both'?'#F3E8FF':'#EBF5FB';
          var catLabel=cat==='must-not-miss'?'MNM':cat==='both'?'BOTH':'LIKELY';
          var bc=rank===1?'#2874A6':rank===2?'#00897B':'#DFE1E6';

          html += '<div style="border:2px solid '+bc+';border-radius:8px;padding:14px;margin-bottom:10px;background:#fff">';
          html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">';
          html += '<span style="width:28px;height:28px;border-radius:50%;background:'+(rank<=2?bc:'#F7F8FA')+';color:'+(rank<=2?'#fff':'#5A6178')+';display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0">#'+rank+'</span>';
          html += '<div style="flex:1;font-size:14px;font-weight:600;color:#1a1a2e;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+_esc(e.diagnosis||'Unnamed')+'</div>';
          html += '<button type="button" onclick="DdxBuilder._toggleCat('+i+')" style="padding:4px 10px;border:1px solid '+catColor+';border-radius:12px;background:'+catBg+';color:'+catColor+';font-size:10px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;letter-spacing:.3px">'+catLabel+'</button>';
          html += '<div style="display:flex;gap:3px">';
          if(i>0) html += '<button type="button" onclick="DdxBuilder._move('+i+',-1)" style="padding:3px 6px;border:1px solid var(--border);border-radius:4px;background:#fff;cursor:pointer;font-size:11px;font-family:inherit" title="Move up">\u2191</button>';
          if(i<entries.length-1) html += '<button type="button" onclick="DdxBuilder._move('+i+',1)" style="padding:3px 6px;border:1px solid var(--border);border-radius:4px;background:#fff;cursor:pointer;font-size:11px;font-family:inherit" title="Move down">\u2193</button>';
          html += '<button type="button" onclick="DdxBuilder._remove('+i+')" style="padding:3px 6px;border:1px solid var(--danger-light,#FFEBEE);border-radius:4px;background:var(--danger-light,#FFEBEE);cursor:pointer;font-size:11px;color:var(--danger,#C62828);font-family:inherit" title="Remove">\u2715</button>';
          html += '</div></div>';

          var conf=e.confidence||50;
          html += '<div style="margin-bottom:10px;display:flex;align-items:center;gap:8px">';
          html += '<span style="font-size:10px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;min-width:72px">Likelihood</span>';
          html += '<input type="range" min="0" max="100" value="'+conf+'" oninput="DdxBuilder._update('+i+',\'confidence\',parseInt(this.value));this.nextElementSibling.textContent=this.value+\'%\'" style="flex:1;accent-color:#2874A6">';
          html += '<span style="font-size:11px;font-weight:600;color:var(--primary);min-width:32px;font-family:\'IBM Plex Mono\',monospace">'+conf+'%</span>';
          html += '</div>';

          html += '<div style="margin-bottom:8px"><div style="font-size:10px;font-weight:700;color:#1B7A3D;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">\u2705 Supporting Evidence</div>';
          html += '<textarea placeholder="What findings support this diagnosis?" onchange="DdxBuilder._update('+i+',\'supporting\',this.value)" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:6px;font-size:12px;font-family:inherit;min-height:48px;resize:vertical;line-height:1.5;box-sizing:border-box">'+_esc(e.supporting||'')+'</textarea></div>';

          html += '<div><div style="font-size:10px;font-weight:700;color:#C62828;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">\u274C Refuting Evidence</div>';
          html += '<textarea placeholder="What argues against this diagnosis?" onchange="DdxBuilder._update('+i+',\'refuting\',this.value)" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:6px;font-size:12px;font-family:inherit;min-height:48px;resize:vertical;line-height:1.5;box-sizing:border-box">'+_esc(e.refuting||'')+'</textarea></div>';

          html += '</div>';
        });
      } else {
        html += '<div style="text-align:center;padding:24px 0;color:var(--text-muted)"><div style="font-size:32px;margin-bottom:8px">\uD83E\uDE7A</div><p style="font-size:13px">No diagnoses yet. Search above to start building your differential.</p></div>';
      }

      if (entries.length >= 2) {
        html += '<div style="margin-top:16px;padding:14px;background:var(--surface-alt,#F8FAFC);border-radius:8px">';
        html += '<div style="font-size:11px;font-weight:700;color:var(--primary,#2874A6);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">DDx Summary</div>';
        html += '<div style="font-size:12px;color:var(--text);line-height:1.8">';
        entries.forEach(function(e,i){
          if(e.diagnosis){
            var cat=e.category||'likely';
            var tag=cat==='must-not-miss'?' <span style="color:#DC2626;font-size:10px;font-weight:700">[MNM]</span>':cat==='both'?' <span style="color:#9333EA;font-size:10px;font-weight:700">[LIKELY+MNM]</span>':'';
            html += '<div style="margin-bottom:2px"><strong>#'+(i+1)+' '+_esc(e.diagnosis)+'</strong> <span style="color:var(--primary);font-family:\'IBM Plex Mono\',monospace;font-size:11px">('+( e.confidence||50)+'%)</span>'+tag+'</div>';
          }
        });
        html += '</div></div>';
      }
      html += '</div></div>';
      return html;
    },

    _onSearch: function(query) {
      var box=document.getElementById('ddxSearchSuggestions'); if(!box)return;
      if(!query||query.trim().length<2){box.style.display='none';return;}
      var existing=(window.MissionControl&&MissionControl.getDdxEntries)?MissionControl.getDdxEntries():[];
      var exNames=existing.map(function(e){return(e.diagnosis||'').toLowerCase();});
      var results=_searchDx(query,10).filter(function(r){return exNames.indexOf(r.name.toLowerCase())===-1;});
      var html='';
      results.forEach(function(r){
        var c=SC[r.sys]||'#6B7280';
        html += '<div onclick="DdxBuilder._addDx(\''+_esc(r.name).replace(/'/g,"\\'")+'\',\''+_esc(r.sys)+'\')" style="padding:10px 14px;cursor:pointer;font-size:13px;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:8px" onmouseover="this.style.background=\'#F8FAFC\'" onmouseout="this.style.background=\'#fff\'">';
        html += '<span style="width:8px;height:8px;border-radius:50%;background:'+c+';flex-shrink:0"></span>';
        html += '<span style="flex:1">'+_esc(r.name)+'</span>';
        html += '<span style="font-size:10px;color:#94A3B8;text-transform:uppercase">'+_esc(r.sys).substring(0,15)+'</span></div>';
      });
      html += '<div onclick="DdxBuilder._addDx(\''+_esc(query).replace(/'/g,"\\'")+'\',\'custom\')" style="padding:10px 14px;cursor:pointer;font-size:12px;color:#64748B;border-top:2px solid #F1F5F9" onmouseover="this.style.background=\'#F8FAFC\'" onmouseout="this.style.background=\'#fff\'">+ Add custom: "'+_esc(query)+'"</div>';
      box.innerHTML=html; box.style.display='block';
    },

    _addDx: function(name, sys) {
      var entries=(window.MissionControl&&MissionControl.getDdxEntries)?MissionControl.getDdxEntries():[];
      entries.push({diagnosis:name,confidence:50,supporting:'',refuting:'',category:'likely',system:sys||'custom'});
      if(window.MissionControl)MissionControl.setDdxEntries(entries);
      var sb=document.getElementById('ddxSearchBox'); if(sb)sb.value='';
      var sg=document.getElementById('ddxSearchSuggestions'); if(sg)sg.style.display='none';
      if(window.render)render();
    },

    _add: function() {
      var entries=MissionControl.getDdxEntries();
      entries.push({diagnosis:'',confidence:50,supporting:'',refuting:'',category:'likely'});
      MissionControl.setDdxEntries(entries);
      if(window.render)render();
    },
    _remove: function(idx) { MissionControl.removeDdxEntry(idx); if(window.render)render(); },
    _update: function(idx,field,value) {
      var entries=MissionControl.getDdxEntries();
      if(entries[idx]){entries[idx][field]=value;MissionControl.setDdxEntries(entries);}
    },
    _move: function(idx,direction) {
      var entries=MissionControl.getDdxEntries(); var newIdx=idx+direction;
      if(newIdx<0||newIdx>=entries.length)return;
      var temp=entries[idx]; entries[idx]=entries[newIdx]; entries[newIdx]=temp;
      MissionControl.setDdxEntries(entries); if(window.render)render();
    },
    _toggleCat: function(idx) {
      var entries=MissionControl.getDdxEntries(); if(!entries[idx])return;
      var c=entries[idx].category||'likely';
      entries[idx].category = c==='likely'?'must-not-miss':c==='must-not-miss'?'both':'likely';
      MissionControl.setDdxEntries(entries); if(window.render)render();
    }
  };

  function _esc(s){if(!s)return'';var d=document.createElement('div');d.textContent=s;return d.innerHTML;}

  document.addEventListener('click',function(e){
    var box=document.getElementById('ddxSearchSuggestions'), inp=document.getElementById('ddxSearchBox');
    if(box&&!box.contains(e.target)&&e.target!==inp) box.style.display='none';
  });
})();
