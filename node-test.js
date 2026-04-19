
"use strict";

// ── Minimal stubs ─────────────────────────────────────────────────────────
global.window = global;
global.document = {
  getElementById: () => null,
  createElement: (t) => {
    const el = { _text: '', innerHTML: '' };
    Object.defineProperty(el, 'textContent', {
      set(v) { 
        this._text = v;
        // Simulate browser HTML encoding
        this.innerHTML = v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
      },
      get() { return this._text; }
    });
    return el;
  }
};
global.localStorage = (() => {
  const store = {};
  return { getItem: k => store[k]||null, setItem: (k,v) => store[k]=v, removeItem: k => delete store[k] };
})();
global.fetch = () => Promise.resolve({ json: () => Promise.resolve({ content: [{ text: '{}' }] }) });

// ── Paste in the functions we want to test ────────────────────────────────
function _fmtRemaining(ms) {
  if (ms <= 0) return 'Ready';
  var sec = Math.ceil(ms / 1000);
  if (sec < 60) return sec + 's';
  var min = Math.floor(sec / 60), s = sec % 60;
  return min + 'm' + (s > 0 ? ' ' + s + 's' : '');
}

function _parseTATtoMs(tatStr, setting) {
  var s = (tatStr || '').toLowerCase().trim();
  var realMinutes = 0;
  if (s.indexOf('min') >= 0) realMinutes = parseInt(s) || 15;
  else if (s.indexOf('hr') >= 0) realMinutes = (parseInt(s) || 1) * 60;
  else if (s.indexOf('day') >= 0) realMinutes = (parseInt(s) || 1) * 60 * 24;
  else realMinutes = 60; // default 1 hour

  // Setting-based compression factor
  var factor;
  switch (setting || 'ed') {
    case 'ed':       factor = 30;  break; // 1 hr → 2 min, 15 min → 30 sec
    case 'inpatient':
    case 'icu':      factor = 20;  break; // 1 hr → 3 min
    case 'consult':  factor = 20;  break;
    case 'clinic':   factor = 10;  break; // 1 hr → 6 min
    default:         factor = 15;
  }
  return Math.round((realMinutes / factor) * 60 * 1000); // milliseconds
}

function esc(s){if(!s)return"";const d=document.createElement("div");d.textContent=s;return d.innerHTML}
function badge(t,c){return'<span class="badge '+(c||"badge-primary")+'">'+esc(t)+'</span>'}
function sectionCard(title,icon,body,cls){const h=title?'<div class="section-header">'+(icon||"")+' <span class="section-header-title">'+esc(title)+'</span></div>':"";return'<div class="section-card '+(cls||"")+'">'+h+'<div class="section-body">'+body+'</div></div>'}
function tableHTML(hd,rows){return'<table class="data-table"><thead><tr>'+hd.map(h=>'<th>'+esc(h)+'</th>').join("")+'</tr></thead><tbody>'+rows.join("")+'</tbody></table>'}
function showToast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.add("visible");setTimeout(()=>t.classList.remove("visible"),4000)}
function totalWords(){return Object.values(S.noteFields).reduce((s,v)=>s+(v?v.split(/\s+/).filter(Boolean).length:0),0)}
function assembleNoteText(fields){const f=fields||S.noteFields;return getActiveNoteTemplate().map(s=>"["+s.label+"]\n"+(f[s.id]||"(empty)")+"\n").join("\n")}

function loadUserData(){
  if(!S.currentUser)return;
  const u=S.currentUser.username;

  // Admin impersonation via ?as= -- load that specific student's data
  var _urlP=new URLSearchParams(location.search);
  var asUid=_urlP.get('as');
  if(asUid && (S.currentUser.role==='admin'||S.currentUser.role==='faculty')){
    // Read directly from localStorage as fallback (quota errors can cause db() to return null)
    var _rawSubs=null;
    try{_rawSubs=JSON.parse(localStorage.getItem('subs-'+asUid));}catch(e){}
    const studentSubs=_rawSubs||db('subs-'+asUid)||[];
    S.allSubmissions=studentSubs.map(function(s){return Object.assign({},s,{studentName:asUid});});
    if(S.allSubmissions.length){
      const firstSub=S.allSubmissions[0];
      S.feedback=db('feedback-'+asUid+'-'+(firstSub.week||''))||null;
      S.annotations=db('annotations-'+asUid+'-'+(firstSub.week||''))||[];
      S.selectedSubmission=0; // auto-select first submission so grading panel opens immediately
    }
    S.activeTab='grading'; // always force grading tab for ?as= sessions
    return;
  }

  if(S.currentUser.role==="student"){
    const subs=db("subs-"+u)||[];
    S.submissions=subs;
    const c=subs.find(s=>s.week===S.encounterWeek);
    if(c){S.noteFields=c.fields||{};S.submitted=true}
    else{S.noteFields=db("draft-"+u+"-"+S.encounterWeek)||{};S.submitted=false}
    S.feedback=db("feedback-"+u+"-"+S.encounterWeek);
    S.annotations=db("annotations-"+u+"-"+S.encounterWeek)||[];
  }
  if(S.currentUser.role==="faculty"||S.currentUser.role==="admin"){
    const emrUsers=getUsers();
    const students=S.currentUser.role==="admin"?Object.values(emrUsers).filter(eu=>getEMRRole(eu.username)==="student").map(eu=>eu.username):getFacultyStudents(u);
    let all=[];
    students.forEach(sn=>{const subs=db("subs-"+sn)||[];all.push(...subs.map(s=>({...s,studentName:sn})))});
    S.allSubmissions=all;
  }
}
const S = window.S || {};
const NOTE_SECTIONS = [{id:"cc",label:"CHIEF COMPLAINT",hint:"e.g. \"Chest pain and shortness of breath\" — quote the patient's own words",size:""},{id:"hpi",label:"HISTORY OF PRESENT ILLNESS",hint:"OLDCARTS framework:\nOnset: When did it start?\nLocation: Where exactly?\nDuration: Constant or intermittent?\nCharacter: Sharp, dull, pressure, burning?\nAssociating symptoms: What else?\nRelieving/Aggravating: What makes it better or worse?\nTiming: Any prior episodes?\nSeverity: Rate 1–10\n\nEnd with pertinent positives and negatives.",size:"xlarge"},{id:"pmh",label:"PAST MEDICAL HISTORY",hint:"List active diagnoses, prior hospitalizations, chronic conditions\ne.g. Type 2 DM (dx 2018), Hypertension, Hyperlipidemia",size:""},{id:"psh",label:"PAST SURGICAL HISTORY",hint:"e.g. Appendectomy 2015, Cesarean section 2019 — include year if known",size:""},{id:"meds",label:"MEDICATIONS",hint:"Drug name — dose — route — frequency\ne.g. Metformin 1000mg PO BID, Lisinopril 10mg PO daily",size:"large"},{id:"allergies",label:"ALLERGIES",hint:"Drug/substance — reaction type — severity\ne.g. Penicillin — rash — moderate; NKDA if none",size:""},{id:"fhx",label:"FAMILY HISTORY",hint:"Focus on what is relevant to this presentation\ne.g. Father: MI age 52, Mother: DM2, Sister: healthy",size:""},{id:"shx",label:"SOCIAL HISTORY",hint:"Tobacco: pack-year history\nAlcohol: drinks/week\nSubstance use\nOccupation and exposures\nLiving situation\nSexual history if relevant",size:""},{id:"ros",label:"REVIEW OF SYSTEMS",hint:"Document pertinent positives AND negatives by system:\nConstitutional: fever, chills, weight loss, fatigue\nCV: chest pain, palpitations, edema\nResp: dyspnea, cough, hemoptysis\nGI: nausea, vomiting, abdominal pain, bowel changes\nGU: dysuria, frequency, discharge\nNeuro: headache, syncope, weakness, numbness\nMSK: joint pain, swelling",size:"large"},{id:"pe",label:"PHYSICAL EXAMINATION",hint:"Organize by system:\nGeneral: Alert, oriented x3, NAD or describe distress\nVitals: (see chart)\nHEENT: Normocephalic, atraumatic, PERRL\nNeck: Supple, no lymphadenopathy, no JVD\nCV: RRR, no murmurs/rubs/gallops\nResp: CTA bilaterally or describe findings\nAbdomen: Soft, NT/ND, +BS, no organomegaly\nExtremities: No edema, pulses intact\nNeuro: Grossly intact",size:"xlarge"},{id:"assess",label:"ASSESSMENT",hint:"Base your assessment on available results:\n1. [Primary diagnosis] — [supporting evidence from history + resulted labs/imaging]\n   DDx: [alternative 1] — less likely because [refuting evidence]\n2. [Secondary problem]\n\nOnly reference results that have come back. If an EKG showed ST elevations, say so. If troponin resulted, include the value.",size:"large"},{id:"plan",label:"PLAN",hint:"Address each problem. Distinguish between resulted and pending tests:\n1. [Primary diagnosis]:\n   - Completed: EKG → [findings], CXR → [findings]\n   - Awaiting: Troponin I (pending ~2 min) — will escalate to cath lab if positive\n   - Treatment: [medications, procedures started]\n   - Consults: Cardiology (ordered, pending)\n2. [Secondary problem]:\n\nFor each pending test, state what you will do based on the result.",size:"large"}];
function getActiveNoteTemplate() {
  // Day progression templates take priority for inpatient/ICU
  if (window.DAY_PROGRESSION && S.clinicalSetting && (S.clinicalSetting === 'inpatient' || S.clinicalSetting === 'icu')) {
    return DAY_PROGRESSION.getNoteTemplate(S.encounterDay || 1);
  }
  if (!S.clinicalSetting || S.clinicalSetting === "ed") return NOTE_SECTIONS;
  return SETTING_NOTE_TEMPLATES[S.clinicalSetting] || NOTE_SECTIONS;
}

function assembleNoteText(fields){const f=fields||S.noteFields;return getActiveNoteTemplate().map(s=>"["+s.label+"]\n"+(f[s.id]||"(empty)")+"\n").join("\n")}

function loadUserData(){
  if(!S.currentUser)return;
  const u=S.currentUser.username;

  // Admin impersonation via ?as= -- load that specific student's data
  var _urlP=new URLSearchParams(location.search);
  var asUid=_urlP.get('as');
  if(asUid && (S.currentUser.role==='admin'||S.currentUser.role==='faculty')){
    // Read directly from localStorage as fallback (quota errors can cause db() to return null)
    var _rawSubs=null;
    try{_rawSubs=JSON.parse(localStorage.getItem('subs-'+asUid));}catch(e){}
    const studentSubs=_rawSubs||db('subs-'+asUid)||[];
    S.allSubmissions=studentSubs.map(function(s){return Object.assign({},s,{studentName:asUid});});
    if(S.allSubmissions.length){
      const firstSub=S.allSubmissions[0];
      S.feedback=db('feedback-'+asUid+'-'+(firstSub.week||''))||null;
      S.annotations=db('annotations-'+asUid+'-'+(firstSub.week||''))||[];
      S.selectedSubmission=0; // auto-select first submission so grading panel opens immediately
    }
    S.activeTab='grading'; // always force grading tab for ?as= sessions
    return;
  }

  if(S.currentUser.role==="student"){
    const subs=db("subs-"+u)||[];
    S.submissions=subs;
    const c=subs.find(s=>s.week===S.encounterWeek);
    if(c){S.noteFields=c.fields||{};S.submitted=true}
    else{S.noteFields=db("draft-"+u+"-"+S.encounterWeek)||{};S.submitted=false}
    S.feedback=db("feedback-"+u+"-"+S.encounterWeek);
    S.annotations=db("annotations-"+u+"-"+S.encounterWeek)||[];
  }
  if(S.currentUser.role==="faculty"||S.currentUser.role==="admin"){
    const emrUsers=getUsers();
    const students=S.currentUser.role==="admin"?Object.values(emrUsers).filter(eu=>getEMRRole(eu.username)==="student").map(eu=>eu.username):getFacultyStudents(u);
    let all=[];
    students.forEach(sn=>{const subs=db("subs-"+sn)||[];all.push(...subs.map(s=>({...s,studentName:sn})))});
    S.allSubmissions=all;
  }
}

const EXPECTED = {
  // CC: chest pain/shortness of breath — exactly what's in the chart
  cc_terms: ["chest pain","shortness of breath","chest","pain","dyspnea","SOB"],
  // HPI: STEMI presentation — what Jennifer says in the interview
  hpi_terms: ["pressure","heavy","chest","left arm","jaw","diaphoresis","nausea","onset","rest","two hours","aspirin","Tums"],
  hpi_pertinent_pos: ["pressure-like","left arm","jaw","diaphoresis","nausea","sweating","at rest","sudden onset","no prior episodes"],
  hpi_pertinent_neg: ["denies fever","denies cough","denies pleuritic","no recent travel","no prior cardiac","no palpitations"],
  // PMH: exactly what's in Problems list
  problems_expected: ["type 2 diabetes","diabetes mellitus","hypertension","HTN","hyperlipidemia"],
  // Meds: exactly what's in the chart (4 meds only — no sertraline, cetirizine etc.)
  meds_expected: [
    {name:"metformin",  dose:"500",  freq:"twice daily|BID|bid"},
    {name:"lisinopril", dose:"10",   freq:"daily"},
    {name:"atorvastatin",dose:"40",  freq:"QHS|bedtime|daily"},
    {name:"aspirin",    dose:"81",   freq:"daily"},
  ],
  // Allergies: only Penicillin (rash) — not sulfa, shellfish etc.
  allergies_expected: ["penicillin"],
  allergy_reactions: {penicillin:"rash|urticaria|hives|reaction"},
  // FH: mother MI at 58, father T2DM, sister HTN
  fh_terms: ["mother","MI","myocardial infarction","heart attack","father","diabetes","DM","sister","hypertension","HTN"],
  // SH: teacher, married, never smoker (quit 5yr ago — revealed only in interview), occasional wine
  sh_terms: ["teacher","married","never smoked","non-smoker","no tobacco","quit smoking","wine","occasional","denies drugs","exercise"],
  // ROS: pertinent systems for chest pain
  ros_systems: ["constitutional","cardiovascular","cardiac","CV","respiratory","pulmonary","GI","gastrointestinal","neurological","musculoskeletal"],
  pe_systems: {
    general:     ["diaphoretic","uncomfortable","distress","moderate distress"],
    cv:          ["RRR","regular rate","rhythm","murmur","S1","S2","JVD","peripheral pulses"],
    lungs:       ["CTA","clear","auscultation","wheezes","crackles","rhonchi"],
    abdomen:     ["soft","tender","distend","bowel sounds"],
    extremities: ["edema","pulses","cyanosis"],
    neuro:       ["alert","oriented"],
  },
  pe_bad_terms: ["WNL","wnl","within normal limits","unremarkable","benign","nonfocal"],
  // Assessment: STEMI DDx
  assessment_problems: ["STEMI","ST-elevation","myocardial infarction","ACS","acute coronary","NSTEMI","unstable angina","aortic dissection","pulmonary embolism","PE"],
  ddx_terms: ["differential","DDx","most likely","consider","rule out","versus","vs","less likely"],
  // Plan: appropriate STEMI workup and treatment
  plan_appropriate: ["EKG","electrocardiogram","troponin","aspirin","cardiology","heparin","anticoagul","cath","PCI","NPO","IV access","monitoring","telemetry","oxygen"],
  plan_overtesting: ["MRI brain","colonoscopy","thyroid","pap smear"],
};

// ── Tests ─────────────────────────────────────────────────────────────────
let pass = 0, fail = 0;

function test(name, fn) {
  try {
    const result = fn();
    if (result === true) { console.log("  ✓ " + name); pass++; }
    else { console.log("  ✗ " + name + " → " + JSON.stringify(result)); fail++; }
  } catch(e) { console.log("  ✗ " + name + " threw: " + e.message); fail++; }
}

console.log("\n── _fmtRemaining ──");
test("negative ms → Ready",    () => _fmtRemaining(-1000) === "Ready");
test("30s",                     () => _fmtRemaining(30000) === "30s");
test("90s → 1m 30s",           () => _fmtRemaining(90000) === "1m 30s");
test("180s → 3m",              () => _fmtRemaining(180000) === "3m");

console.log("\n── _parseTATtoMs (ED setting) ──");
test("15 min ÷30 ≈ 30s",       () => Math.abs(_parseTATtoMs("15 min","ed") - 30000) < 5000);
test("1 hr ÷30 ≈ 2min",        () => Math.abs(_parseTATtoMs("1 hr","ed") - 120000) < 5000);
test("2 hrs ÷30 ≈ 4min",       () => Math.abs(_parseTATtoMs("2 hrs","ed") - 240000) < 5000);
test("4 hrs ÷30 ≈ 8min",       () => Math.abs(_parseTATtoMs("4 hrs","ed") - 480000) < 5000);
test("48-72 hrs ÷30 ≈ 96min",  () => _parseTATtoMs("48-72 hrs","ed") > 4000000);

console.log("\n── esc() ──");
test("escapes <", () => esc("<b>") === "&lt;b&gt;");
test("escapes &", () => esc("AT&T") === "AT&amp;T");
test("empty",     () => esc("") === "");

console.log("\n── EXPECTED terms (STEMI-specific) ──");
test("cc has 'chest pain'",       () => EXPECTED.cc_terms.includes("chest pain"));
test("cc no 'follow-up'",         () => !EXPECTED.cc_terms.includes("follow-up"));
test("cc no 'anxiety'",           () => !EXPECTED.cc_terms.includes("anxiety"));
test("meds no sertraline",        () => !EXPECTED.meds_expected.some(m => m.name === "sertraline"));
test("meds no cetirizine",        () => !EXPECTED.meds_expected.some(m => m.name === "cetirizine"));
test("meds has metformin",        () => EXPECTED.meds_expected.some(m => m.name === "metformin"));
test("meds has lisinopril",       () => EXPECTED.meds_expected.some(m => m.name === "lisinopril"));
test("allergies: penicillin only",() => EXPECTED.allergies_expected.length === 1 && EXPECTED.allergies_expected[0] === "penicillin");
test("fh has MI",                 () => EXPECTED.fh_terms.some(t => t.includes("MI") || t.includes("myocardial")));

console.log("\n── NOTE_SECTIONS ──");
test("has cc section",     () => NOTE_SECTIONS.some(s => s.id === "cc"));
test("has hpi section",    () => NOTE_SECTIONS.some(s => s.id === "hpi"));
test("has assess section", () => NOTE_SECTIONS.some(s => s.id === "assess"));
test("has plan section",   () => NOTE_SECTIONS.some(s => s.id === "plan"));
test("assess hint references results", 
  () => NOTE_SECTIONS.find(s => s.id==="assess")?.hint?.includes("results") || false);
test("plan hint references pending",   
  () => NOTE_SECTIONS.find(s => s.id==="plan")?.hint?.includes("pending") || false);

console.log("\n── assembleNoteText ──");
const testFields = { cc: "Chest pain", hpi: "Two hours", assess: "STEMI", plan: "EKG stat" };
window.S = { noteFields: testFields, clinicalSetting: "ed" };
window.SETTING_NOTE_TEMPLATES = { ed: null };
window.DAY_PROGRESSION = null;
try {
  const assembled = assembleNoteText(testFields);
  test("assembles non-empty text", () => assembled && assembled.length > 20);
  test("contains cc content",     () => assembled.includes("Chest pain"));
  test("contains plan content",   () => assembled.includes("EKG stat"));
} catch(e) { console.log("  ✗ assembleNoteText: " + e.message); fail += 3; }

console.log("\n" + "=".repeat(50));
console.log("TOTAL: " + pass + " pass, " + fail + " fail");
process.exit(fail > 0 ? 1 : 0);
