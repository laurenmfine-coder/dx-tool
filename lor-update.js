const fs = require('fs');
let html = fs.readFileSync('/home/claude/reasondx/modules/premed-lor.html','utf8');

// Add a 4th tab for evidence packet
html = html.replace(
  `<button class="tab" onclick="showTab('guide')">📖 Strategy Guide</button>`,
  `<button class="tab" onclick="showTab('packet')">📦 Evidence Packet</button>\n    <button class="tab" onclick="showTab('guide')">📖 Strategy Guide</button>`
);

// Add the packet tab content before tab-guide
const packetHTML = `
  <div id="tab-packet" class="hidden">
    <div class="card">
      <h3>📦 Generate Evidence Packet</h3>
      <p style="font-size:14px;color:var(--pm-muted);margin-bottom:16px;">When it's time to ask for a letter, this tool compiles everything your physician needs to write a specific, powerful letter. Select a physician to generate their packet.</p>
      <div class="form-row"><label>Select Physician</label><select id="packet-physician" onchange="previewPacket()"><option value="">Choose a physician...</option></select></div>
    </div>
    <div id="packet-preview" class="hidden">
      <div class="card" style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border-color:#fde68a;">
        <h3>📦 Evidence Packet Preview</h3>
        <div id="packet-content"></div>
        <div class="btn-row" style="margin-top:20px;">
          <button class="btn btn-secondary" onclick="exportPacket()">📤 Export as Text</button>
          <button class="btn btn-primary" onclick="exportPacket()">📋 Copy to Clipboard</button>
        </div>
      </div>
      <div class="tip"><h4>💡 How to Use This Packet</h4><p>Print or email this to your physician when you ask for the letter. Say: "I put together some notes about our time together and specific moments you might want to reference. I hope this makes writing the letter easier for you." Physicians LOVE this — it shows professionalism and makes their job easier.</p></div>
    </div>
  </div>`;
html = html.replace(`<div id="tab-guide"`, packetHTML + `\n  <div id="tab-guide"`);

// Update showTab to include packet
html = html.replace(
  `['track','add','guide'].forEach`,
  `['track','add','packet','guide'].forEach`
);

// Add previewPacket and exportPacket functions
const newFunctions = `
function previewPacket(){
  const pid=document.getElementById('packet-physician').value;
  if(!pid){document.getElementById('packet-preview').classList.add('hidden');return;}
  const p=physicians.find(x=>x.id===parseInt(pid));
  if(!p){return;}
  const ints=interactions.filter(i=>i.physicianId===parseInt(pid)).sort((a,b)=>new Date(a.date)-new Date(b.date));
  const growthMoments=ints.filter(i=>i.growth);
  const totalTime=ints.length;
  const firstDate=ints[0]?.date||'N/A';
  const lastDate=ints[ints.length-1]?.date||'N/A';
  
  let html='';
  html+='<div style="padding:16px;background:rgba(255,255,255,.7);border-radius:10px;margin-bottom:12px;">';
  html+='<h4 style="font-size:15px;margin-bottom:8px;">1. Relationship Summary</h4>';
  html+='<p style="font-size:14px;line-height:1.6;">Dear Dr. '+p.name.replace('Dr. ','')+':<br><br>';
  html+='Thank you for agreeing to write a letter of recommendation for my medical school application. ';
  html+='We have worked together at <strong>'+p.setting+'</strong> ('+p.specialty+') since <strong>'+firstDate+'</strong>. ';
  html+='Over the course of our relationship, I have logged <strong>'+totalTime+' meaningful interactions</strong> ';
  html+='spanning from '+firstDate+' to '+lastDate+'. ';
  html+='Below are specific moments that demonstrate my growth, curiosity, and character that you may find helpful to reference.</p></div>';
  
  if(growthMoments.length){
    html+='<div style="padding:16px;background:rgba(255,255,255,.7);border-radius:10px;margin-bottom:12px;">';
    html+='<h4 style="font-size:15px;margin-bottom:8px;">2. Key Growth Moments ('+growthMoments.length+')</h4>';
    growthMoments.forEach((g,i)=>{
      html+='<div style="padding:10px;background:#fffbeb;border-radius:8px;margin-bottom:8px;border-left:3px solid #d97706;">';
      html+='<div style="font-size:12px;color:var(--pm-muted);margin-bottom:4px;">'+g.date+'</div>';
      html+='<div style="font-size:14px;margin-bottom:4px;"><strong>Interaction:</strong> '+g.notes+'</div>';
      html+='<div style="font-size:14px;color:#92400e;"><strong>Growth demonstrated:</strong> '+g.growth+'</div>';
      html+='</div>';
    });
    html+='</div>';
  }
  
  if(ints.length){
    html+='<div style="padding:16px;background:rgba(255,255,255,.7);border-radius:10px;margin-bottom:12px;">';
    html+='<h4 style="font-size:15px;margin-bottom:8px;">3. Complete Interaction Timeline</h4>';
    ints.forEach(i=>{
      html+='<div style="padding:8px;border-bottom:1px solid #fde68a;font-size:13px;">';
      html+='<strong>'+i.date+':</strong> '+i.notes;
      html+='</div>';
    });
    html+='</div>';
  }
  
  html+='<div style="padding:16px;background:rgba(255,255,255,.7);border-radius:10px;">';
  html+='<h4 style="font-size:15px;margin-bottom:8px;">4. Additional Context</h4>';
  html+='<p style="font-size:14px;line-height:1.6;">[Add your personal statement themes, schools you\\'re applying to, and deadlines here before sharing with your physician.]</p>';
  html+='</div>';
  
  document.getElementById('packet-content').innerHTML=html;
  document.getElementById('packet-preview').classList.remove('hidden');
  
  // Also populate the select in packet tab
  renderPacketSelect();
}

function renderPacketSelect(){
  const sel=document.getElementById('packet-physician');
  if(sel.options.length<=1){
    physicians.forEach(p=>{
      const opt=document.createElement('option');
      opt.value=p.id;opt.textContent=p.name+' — '+p.specialty;
      sel.appendChild(opt);
    });
  }
}

function exportPacket(){
  const pid=document.getElementById('packet-physician').value;
  const p=physicians.find(x=>x.id===parseInt(pid));
  if(!p)return;
  const ints=interactions.filter(i=>i.physicianId===parseInt(pid)).sort((a,b)=>new Date(a.date)-new Date(b.date));
  const growthMoments=ints.filter(i=>i.growth);
  
  let txt='LETTER OF RECOMMENDATION — EVIDENCE PACKET\\n';
  txt+='Prepared for: '+p.name+'\\n';
  txt+='Specialty: '+p.specialty+'\\n';
  txt+='Setting: '+p.setting+'\\n';
  txt+='Generated: '+new Date().toISOString().split('T')[0]+'\\n';
  txt+='\\n=== RELATIONSHIP SUMMARY ===\\n';
  txt+='Interactions logged: '+ints.length+'\\n';
  txt+='Date range: '+(ints[0]?.date||'N/A')+' to '+(ints[ints.length-1]?.date||'N/A')+'\\n';
  txt+='\\n=== KEY GROWTH MOMENTS ===\\n';
  growthMoments.forEach((g,i)=>{
    txt+='\\n['+(i+1)+'] '+g.date+'\\n';
    txt+='Interaction: '+g.notes+'\\n';
    txt+='Growth demonstrated: '+g.growth+'\\n';
  });
  txt+='\\n=== COMPLETE TIMELINE ===\\n';
  ints.forEach(i=>{txt+=i.date+': '+i.notes+'\\n';});
  
  const blob=new Blob([txt],{type:'text/plain'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download='LOR-Evidence-Packet-'+p.name.replace(/\\s+/g,'-')+'.txt';a.click();
}
`;
html = html.replace('renderPhysicians();\n</script>', 'renderPhysicians();\n' + newFunctions + '\n</script>');

fs.writeFileSync('/home/claude/reasondx/modules/premed-lor.html', html);
console.log('LOR updated: ' + html.length + ' bytes');
