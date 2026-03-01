// ═══════════════════════════════════════════════════════════════
// CHART TRACKER — Phase 1 Chart Review Analytics
// API: ChartTracker.{start,trackSection,trackExpand,trackDocStart,
//      trackDocEdit,stop,bundleForSubmission,renderSummary}
// ═══════════════════════════════════════════════════════════════
window.ChartTracker = {
  _active:false, _caseId:null, _username:null, _startTime:null, _data:null,

  start:function(caseId,username){
    this._caseId=caseId;this._username=username;this._startTime=Date.now();this._active=true;
    this._data={caseId:caseId,username:username,startTime:this._startTime,
      sections:{},sectionOrder:[],expands:{},docStartTime:null,docEdits:[],
      totalTimeMs:0,highValueCoverage:0,_currentSection:null};
  },

  trackSection:function(tabId){
    if(!this._active)return;var now=Date.now();
    if(this._data._currentSection){
      var p=this._data.sections[this._data._currentSection];
      if(p&&p._enter){p.totalMs+=now-p._enter;delete p._enter}
    }
    if(!this._data.sections[tabId]){
      this._data.sections[tabId]={views:0,totalMs:0,firstView:now};
      this._data.sectionOrder.push(tabId);
    }
    this._data.sections[tabId].views++;
    this._data.sections[tabId]._enter=now;
    this._data._currentSection=tabId;
  },

  trackExpand:function(key,opened){
    if(!this._active)return;
    if(!this._data.expands[key])this._data.expands[key]={open:0,close:0};
    if(opened)this._data.expands[key].open++;else this._data.expands[key].close++;
  },

  trackDocStart:function(){if(this._active)this._data.docStartTime=Date.now()},
  trackDocEdit:function(fid){if(this._active)this._data.docEdits.push({field:fid,time:Date.now()})},

  stop:function(){
    if(!this._active)return;var now=Date.now();
    if(this._data._currentSection){
      var p=this._data.sections[this._data._currentSection];
      if(p&&p._enter){p.totalMs+=now-p._enter;delete p._enter}
    }
    this._data.totalTimeMs=now-this._startTime;
    this._data.highValueCoverage=this._hvc();
    delete this._data._currentSection;
    try{localStorage.setItem("vemr-tracking-"+this._caseId+"-"+this._username,JSON.stringify(this._data))}catch(e){}
    this._active=false;
  },

  bundleForSubmission:function(){
    if(this._active)this.stop();
    return{chartReview:this._data,highValueCoverage:this._data?this._data.highValueCoverage:0};
  },

  renderSummary:function(data){
    if(!data)return"";var d=data.chartReview||data;var s=d.sections||{};
    var keys=Object.keys(s);var ts=Math.round((d.totalTimeMs||0)/1000);
    var cov=d.highValueCoverage||0;
    var h='<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;margin:8px 0">';
    h+='<h5 style="margin:0 0 8px;color:#334155">📋 Chart Review Analytics</h5>';
    h+='<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:8px">';
    h+='<span style="font-size:0.85rem"><strong>'+keys.length+'</strong> sections</span>';
    h+='<span style="font-size:0.85rem"><strong>'+ts+'s</strong> time</span>';
    h+='<span style="font-size:0.85rem"><strong>'+cov+'%</strong> coverage</span></div>';
    h+='<div style="display:flex;flex-wrap:wrap;gap:4px">';
    ["problems","medications","allergies","vitals","visits","labs","imaging","familyHistory","socialHistory"].forEach(function(t){
      var v=!!s[t];h+='<span style="font-size:0.7rem;padding:2px 6px;border-radius:4px;background:'+(v?"#E8F5E9":"#F5F5F5")+';color:'+(v?"#2E7D32":"#9E9E9E")+'">'+(v?"✓":"○")+" "+t+"</span>";
    });
    h+='</div></div>';return h;
  },

  _hvc:function(){
    if(!this._data)return 0;var hv=["problems","medications","allergies","labs","imaging","visits"];var n=0;
    hv.forEach(function(s){if(this._data.sections[s])n++}.bind(this));
    return Math.round(n/hv.length*100);
  }
};
