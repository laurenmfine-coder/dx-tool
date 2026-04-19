'use strict';
const fs=require('fs'),path=require('path');
global.window=global;
function validateCase(filePath){
  const r={pass:[],fail:[],warn:[],file:path.basename(filePath)};
  const P=m=>r.pass.push(m),F=m=>r.fail.push(m),W=m=>r.warn.push(m);
  let data;
  try{const src=fs.readFileSync(filePath,'utf8');eval(src);data=global.EMR_DATA;
    if(!data){F('EMR_DATA not defined');return r;}P('parses OK');}
  catch(e){F('parse error: '+e.message);return r;}
  const pt=data.patient||{};
  ['name','dob','age','sex','mrn','chiefComplaint'].forEach(f=>{
    if(pt[f])P('patient.'+f);else F('patient.'+f+' missing');});
  if(pt.age&&(pt.age<1||pt.age>120))F('age implausible: '+pt.age);
  const probs=data.problems||[];
  if(probs.length)P('problems: '+probs.length);else W('no problems');
  probs.forEach((p,i)=>{if(!p.problem&&!p.description)F('problems['+i+'] no name');});
  const meds=data.medications||[];
  if(meds.length)P('medications: '+meds.length);else W('no medications');
  meds.forEach((m,i)=>{if(!m.name&&!m.medication)F('medications['+i+'] no name');});
  const allergies=data.allergies||[];
  if(allergies.length)P('allergies: '+allergies.length);else W('no allergies (confirm NKDA)');
  allergies.forEach((a,i)=>{if(!a.allergen)F('allergies['+i+'] no allergen');
    if(!a.reaction&&a.allergen!=='NKDA')W('allergies['+i+'] no reaction');});
  const vitals=data.vitals||[];
  if(vitals.length)P('vitals: '+vitals.length);else F('no vitals');
  vitals.forEach((v,i)=>{
    if(!v.bp)W('vitals['+i+'] no bp');if(!v.hr)W('vitals['+i+'] no hr');
    if(v.hr&&(v.hr<20||v.hr>300))F('vitals['+i+'] HR implausible: '+v.hr);
    if(v.bp){const p=v.bp.split('/');const s=parseInt(p[0]),d=parseInt(p[1]);
      if(s&&(s<50||s>280))F('vitals['+i+'] SBP implausible: '+v.bp);
      if(d&&d>=s)F('vitals['+i+'] DBP>=SBP: '+v.bp);}});
  const meta=data.meta||{};
  if(meta.caseId)P('meta.caseId: '+meta.caseId);else F('meta.caseId missing');
  if(meta.diagnosis)P('meta.diagnosis: '+meta.diagnosis);else F('meta.diagnosis missing');
  if(meta.acuity)P('meta.acuity');else W('meta.acuity missing');
  if(meta.category)P('meta.category');else W('meta.category missing');
  const guided=data.guided||{};
  if(guided.supported){
    P('guided supported');
    if(guided.patientPersona)P('patientPersona');else W('patientPersona missing');
    const resp=guided.patientResponses||{};
    const rc=Object.keys(resp).length;
    if(rc>=8)P('patientResponses: '+rc);
    else if(rc>=3)W('patientResponses thin: '+rc);
    else F('patientResponses critically thin: '+rc);
    if(!resp.default)W('patientResponses missing "default" fallback');
    const maneuvers=guided.examManeuvers||[];
    if(maneuvers.length>=5)P('examManeuvers: '+maneuvers.length);
    else W('examManeuvers thin: '+maneuvers.length);
    const findings=guided.examFindings||{};
    const fc=Object.keys(findings).length;
    if(fc>=5)P('examFindings: '+fc);else W('examFindings thin: '+fc);
    const targets=guided.ddxTargets||[];
    if(targets.length>=3)P('ddxTargets: '+targets.length);
    else F('ddxTargets too few: '+targets.length);
    if(targets.length&&meta.diagnosis){
      const dl=meta.diagnosis.toLowerCase();
      const inT=targets.some(t=>{const tl=t.toLowerCase();
        return tl.includes(dl.split(/\s+/)[0])||dl.includes(tl.split(/\s+/)[0]);});
      if(inT)P('diagnosis in ddxTargets');
      else W('diagnosis "'+meta.diagnosis+'" not obvious in ddxTargets');}
  } else W('guided not supported');
  return r;
}
function runAll(input){
  let files=[];
  if(fs.statSync(input).isDirectory()){
    files=fs.readdirSync(input).filter(f=>f.endsWith('.js')&&
      !['crt-data','rdx-','dx-database','day-','handoff','auto-','acls-','acid-base'].some(x=>f.startsWith(x)))
      .map(f=>path.join(input,f));
  } else files=[input];
  let tp=0,tf=0,tw=0;const failed=[];
  files.forEach(f=>{
    global.EMR_DATA=undefined;
    const r=validateCase(f);
    tp+=r.pass.length;tf+=r.fail.length;tw+=r.warn.length;
    if(files.length===1){
      console.log('\n'+'='.repeat(55));
      console.log('CASE: '+r.file);console.log('='.repeat(55));
      if(r.fail.length){console.log('\n🔴 FAILURES:');r.fail.forEach(x=>console.log('  • '+x));}
      if(r.warn.length){console.log('\n🟡 WARNINGS:');r.warn.forEach(x=>console.log('  • '+x));}
      console.log('\n✅ '+r.pass.length+' checks passed');
    } else {
      if(r.fail.length){failed.push({file:r.file,fails:r.fail});
        console.log('🔴 '+r.file+' — '+r.fail.length+' fail, '+r.warn.length+' warn');}
      else if(r.warn.length>4) console.log('🟡 '+r.file+' — '+r.warn.length+' warnings');
    }});
  if(files.length>1){
    console.log('\n'+'='.repeat(55));
    console.log('BATCH: '+files.length+' cases — '+tf+' failures in '+failed.length+' cases, '+tw+' warnings');
    if(failed.length){console.log('\nFailed cases:');
      failed.forEach(c=>{console.log('  '+c.file+':');c.fails.forEach(x=>console.log('    • '+x));});}
  }
}
const input=process.argv[2];
if(!input){console.log('Usage: node tests/case-validator.js <file.js|dir/>');process.exit(1);}
runAll(input);
