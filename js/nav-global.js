(function(){
  // If the unified nav is already loaded, don't render the legacy nav
  if (document.getElementById('rdx-unified-nav')) return;
  var NAV=[
    {l:'Dashboard',h:'dashboard.html',i:'\u{1F3E0}'},
    {l:'ED',h:'ed-board-v2.html',i:'\u{1F3E5}'},
    {l:'Sim Lab',h:'simroomdx.html',i:'\u{1FA7A}'},
    {l:'Night Float',h:'night-float.html',i:'\u{1F319}'},
    {l:'EMR',h:'virtual-emr.html',i:'\u{1F4BB}'},
    {l:'Board Review',h:'board-prep.html',i:'\u{1F4DD}'},
    {l:'Progress',h:'analytics-dashboard.html',i:'\u{1F4CA}'}
  ];
  var p=window.location.pathname;
  var cf=p.split('/').pop()||'index.html';
  var MAP={
    'ed-board-v2.html':'ed-board-v2.html',
    'virtual-emr.html':'virtual-emr.html',
    'simroomdx.html':'simroomdx.html',
    'night-float.html':'night-float.html',
    'board-prep.html':'board-prep.html',
    'analytics-dashboard.html':'analytics-dashboard.html',
    'dashboard.html':'dashboard.html',
    'admissions.html':'dashboard.html',
    'consult-callback.html':'dashboard.html',
    'study-mode.html':'dashboard.html',
    'index.html':'dashboard.html'
  };
  var active=MAP[cf]||'';
  var pre='';
  if(p.indexOf('/tools/')>-1||p.indexOf('/CoachDx/')>-1||p.indexOf('/ecg/')>-1||p.indexOf('/auth/')>-1||p.indexOf('/topics/')>-1) pre='../';
  var h='<nav id="rdx-nav" style="position:sticky;top:0;z-index:9999;background:rgba(6,10,16,.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.06);font-family:IBM Plex Sans,-apple-system,sans-serif">';
  h+='<div style="max-width:1200px;margin:0 auto;display:flex;align-items:center;height:52px;padding:0 16px;gap:4px;overflow-x:auto">';
  h+='<a href="'+pre+'dashboard.html" style="display:flex;align-items:center;gap:6px;text-decoration:none;font-size:15px;font-weight:800;color:#fff;letter-spacing:-.3px;margin-right:16px;flex-shrink:0"><span style="color:#2874A6">R</span>eason<span style="color:#2874A6">Dx</span></a>';
  NAV.forEach(function(n){
    var hr=pre+n.h;
    var a=(n.h===active);
    h+='<a href="'+hr+'" style="display:flex;align-items:center;gap:5px;padding:6px 12px;border-radius:8px;font-size:13px;';
    h+='font-weight:'+(a?'700':'500')+';color:'+(a?'#fff':'rgba(255,255,255,.5)')+';';
    h+='background:'+(a?'rgba(40,116,166,.15)':'transparent')+';';
    h+='border:1px solid '+(a?'rgba(40,116,166,.25)':'transparent')+';';
    h+='text-decoration:none;white-space:nowrap;flex-shrink:0;transition:all .15s">';
    h+='<span style="font-size:14px">'+n.i+'</span>'+n.l+'</a>';
  });
  h+='</div></nav>';
  var t=document.getElementById('global-nav');
  if(t){t.outerHTML=h}else{document.body.insertAdjacentHTML('afterbegin',h)}
})();