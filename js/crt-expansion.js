/* js/crt-expansion.js — 4 new CRT (Clinical Reasoning Trainer) scenarios
 * These get merged into the existing CRT scenario library.
 * Each scenario follows the standard CRT structure:
 *   presentation → hypothesis generation → targeted workup → 
 *   evolving data → narrowing → diagnosis → management
 */
(function(){
'use strict';

window.CRT_EXPANSION = [
  {
    id:'peds-asthma-exacerbation',
    title:'Pediatric Asthma Exacerbation',
    category:'Pediatrics',
    tier:2,
    acuity:'urgent',
    setting:'ED',
    milestones:['PC1','PC4','MK2'],
    patient:{
      name:'Aiden Okafor',age:'6M',
      vitals:{HR:128,RR:36,SpO2:89,Temp:'37.8°C',BP:'90/58'},
      cc:'Wheezing and difficulty breathing × 12 hours'
    },
    stages:[
      {
        phase:'Presentation',
        narrative:'6-year-old boy brought in by mother. Coughing and wheezing since last night, getting worse. Using his inhaler (albuterol MDI with spacer) every 2 hours with minimal relief. Previous history of 3 ED visits for wheezing in the past year but no hospitalizations. Not on a controller medication. Mom says he also had a runny nose and low-grade fever for 2 days. On exam: diffuse bilateral wheezing with intercostal retractions, speaking in short phrases, nasal flaring.',
        question:'What is your initial assessment of severity, and what do you want to do in the first 10 minutes?',
        keyPoints:['Moderate-to-severe exacerbation (SpO2 89%, retractions, short phrases, tachypnea for age)','Immediate: continuous albuterol nebulization, ipratropium (first hour), systemic corticosteroids','Assess for respiratory failure: accessory muscle use, ability to speak, mental status','This child has uncontrolled persistent asthma (3 ED visits, no controller) — flag for step-up after acute management']
      },
      {
        phase:'Workup',
        narrative:'You start continuous albuterol + ipratropium and give oral prednisolone 2mg/kg. After 1 hour: HR 118, RR 30, SpO2 93% on 2L NC. Still wheezing but speaking in sentences now. Retractions improved. CXR shows hyperinflation, peribronchial thickening, no focal consolidation or pneumothorax.',
        question:'He\'s responding but not fully cleared. What\'s your next move and what are your criteria for admission vs discharge?',
        keyPoints:['Partial responder — continue albuterol q1-2h, reassess in 2-4 hours','CXR findings consistent with asthma exacerbation (hyperinflation, peribronchial cuffing)','Admission criteria: persistent SpO2 <92%, continued moderate-severe distress, poor response to 3 rounds of albuterol, prior ICU admission, unreliable home situation','If improving: space albuterol to q2-4h, observe for sustained improvement over 4+ hours','Discharge planning must include: controller medication initiation, PCP follow-up in 1-2 weeks, asthma action plan, spacer technique education']
      },
      {
        phase:'Pivot',
        narrative:'At hour 3, he suddenly worsens: SpO2 drops to 86%, RR increases to 44, and you notice decreased air movement on the right side. He becomes more anxious and is now only saying single words.',
        question:'What just happened, and what do you do immediately?',
        keyPoints:['Sudden asymmetric change = consider pneumothorax, mucus plugging, or foreign body','With decreased air movement on right: pneumothorax until proven otherwise in this context','Immediate: STAT portable CXR, prepare for needle decompression if tension physiology','If pneumothorax confirmed: needle decompression (2nd ICS midclavicular) → chest tube','Other considerations: could also be atelectasis from mucus plug (common in severe asthma) — CXR will differentiate']
      },
      {
        phase:'Resolution',
        narrative:'CXR shows right-sided atelectasis from mucus plugging (no pneumothorax). You suction, give hypertonic saline neb, and his SpO2 recovers to 92%. He\'s admitted to the pediatric floor. Over the next 24 hours he improves on scheduled albuterol q4h and prednisolone.',
        question:'Before discharge, what must you address to prevent the next ED visit?',
        keyPoints:['START a controller: low-dose ICS (fluticasone 44mcg/puff 2 puffs BID) — this child has uncontrolled persistent asthma','Written asthma action plan (green/yellow/red zones) reviewed with mother','Spacer technique demonstration with teach-back','PCP follow-up within 1-2 weeks for reassessment','Discuss triggers: viral URI triggered this episode — consider adding montelukast during cold season','Address adherence: explain that controllers work over weeks, must be taken daily even when feeling well','Referral to allergist/pulmonologist if not controlled on Step 2 therapy']
      }
    ],
    teaching:'Pediatric asthma severity assessment: Use PRAM or PASS scores. SpO2 <92% = severe. Key error: treating only the acute episode without addressing the underlying uncontrolled persistent asthma. Any child with ≥2 exacerbations requiring systemic steroids in 6 months needs a controller. The "frequent flyer" without a controller is a systems failure, not just a clinical encounter.'
  },
  {
    id:'adult-sepsis-unknown-source',
    title:'Adult Sepsis — Source Unknown',
    category:'Critical Care',
    tier:3,
    acuity:'emergent',
    setting:'ED',
    milestones:['PC1','PC3','PC4','MK2'],
    patient:{
      name:'Gloria Hernandez',age:'72F',
      vitals:{HR:112,RR:24,SpO2:94,Temp:'38.9°C',BP:'82/48'},
      cc:'Confusion and fever × 1 day, found on floor by neighbor'
    },
    stages:[
      {
        phase:'Presentation',
        narrative:'72-year-old woman found on her kitchen floor by a neighbor. Lives alone. Usually independent. Neighbor says she was fine 2 days ago. Now confused, mumbling, unable to give clear history. Vitals: T 38.9°C, HR 112, BP 82/48, RR 24, SpO2 94% on RA. Exam: dry mucous membranes, no obvious skin infection, no abdominal guarding, lungs with bibasilar crackles but no frank consolidation. Foley placement yields 100mL concentrated urine.',
        question:'This meets sepsis criteria. What are your first 60 minutes going to look like?',
        keyPoints:['Hour-1 bundle: blood cultures (2 sets from 2 sites) BEFORE antibiotics, broad-spectrum ABx within 1 hour, 30mL/kg crystalloid bolus (start immediately for MAP <65), lactate level','Source identification: UA + urine culture, CXR, blood cultures. Consider CT abdomen if source unclear','Initial labs: CBC, BMP, lactate, hepatic panel, coagulation, urinalysis, blood cultures x2','Empiric antibiotics: broad-spectrum (e.g., piperacillin-tazobactam or meropenem + vancomycin) — tailor when source identified','Assess end-organ perfusion: mental status, urine output, lactate']
      },
      {
        phase:'Workup',
        narrative:'Labs return: WBC 18.2 (89% neutrophils, 3% bands), Cr 2.1 (baseline 0.9), lactate 4.8, BMP otherwise unremarkable. UA: large leukocyte esterase, positive nitrites, >100 WBCs, many bacteria. CXR: mild bibasilar atelectasis, no consolidation. Blood cultures pending. You gave 2L NS, ceftriaxone 2g IV, and vancomycin 25mg/kg.',
        question:'Source is likely UTI/urosepsis. Lactate is 4.8 and she\'s still hypotensive after 2L. What now?',
        keyPoints:['Urosepsis with septic shock (hypotension + lactate >4 despite fluids)','If still hypotensive after 30mL/kg: START vasopressors — norepinephrine first-line, target MAP ≥65','Do NOT keep bolusing fluids indefinitely — fluid responsiveness diminishes and overload causes harm','Narrow antibiotics once UA/culture results are clear — UTI source may allow de-escalation to ceftriaxone alone','Recheck lactate in 2-4 hours — failure to clear by >10% is associated with worse outcomes','Assess for obstructive uropathy: if not improving, consider renal ultrasound for hydronephrosis (stone, mass)']
      },
      {
        phase:'Pivot',
        narrative:'MAP is 58 after 3L fluids. You start norepinephrine. CT abdomen (obtained due to persistent shock) shows left hydronephrosis with a 12mm proximal ureteral stone and perinephric stranding. No abscess. Repeat lactate is 5.2 (rising).',
        question:'The source is obstructive urosepsis. What changes about your management?',
        keyPoints:['Obstructive urosepsis is a urologic EMERGENCY — antibiotics alone won\'t clear an infected obstructed system','STAT urology consult for decompression: percutaneous nephrostomy or ureteral stent','This is source control — analogous to draining an abscess. Without decompression, she will continue to deteriorate','Escalate vasopressor support, consider adding vasopressin as second agent if norepinephrine >0.5 mcg/kg/min','Stress-dose hydrocortisone (50mg IV q6h) if remaining hypotensive on 2+ vasopressors','ICU admission for hemodynamic monitoring and ongoing resuscitation']
      },
      {
        phase:'Resolution',
        narrative:'Urology places emergent percutaneous nephrostomy. Purulent urine drains immediately. Over the next 12 hours: lactate clears to 2.1, norepinephrine weaning, mental status improving. Urine culture grows E. coli resistant to fluoroquinolones, sensitive to ceftriaxone.',
        question:'She\'s improving. How do you manage the next 48-72 hours?',
        keyPoints:['Narrow antibiotics to ceftriaxone (based on sensitivities) — de-escalation is critical for stewardship','Continue nephrostomy drainage until stone is addressed (typically after sepsis resolves)','Wean vasopressors targeting MAP ≥65 — wean in 10-20% decrements q30-60min','Track lactate to normal, urine output >0.5mL/kg/h, mental status return to baseline','Stone management: definitive treatment (ureteroscopy or lithotripsy) after 2-4 weeks when infection fully resolved','Address disposition: may need rehab given functional decline from ICU stay']
      }
    ],
    teaching:'Sepsis source identification: UTI is the most common source in elderly women, but don\'t assume — the bibasilar crackles could have been pneumonia. Key teaching point: obstructive urosepsis requires SOURCE CONTROL (drainage), not just antibiotics. Rising lactate despite appropriate antibiotics and fluid resuscitation should trigger a search for undrained infection or missed source. The hour-1 bundle (cultures → antibiotics → fluids → lactate) saves lives.'
  },
  {
    id:'chest-pain-triple-ruleout',
    title:'Chest Pain — Triple Rule-Out',
    category:'Cardiovascular',
    tier:3,
    acuity:'emergent',
    setting:'ED',
    milestones:['PC1','PC3','MK2','PC4'],
    patient:{
      name:'Robert Tanner',age:'55M',
      vitals:{HR:105,RR:22,SpO2:96,Temp:'37.1°C',BP:'158/92 R arm, 142/88 L arm'},
      cc:'Sudden severe chest pain radiating to back × 2 hours'
    },
    stages:[
      {
        phase:'Presentation',
        narrative:'55-year-old man with hypertension (poorly controlled, not taking meds) and 30-pack-year smoking history. Sudden onset of severe, tearing chest pain radiating to his back 2 hours ago while lifting boxes. Pain is 9/10, constant. He appears diaphoretic and in distress. Notable: BP discrepancy between arms (158/92 right, 142/88 left). ECG shows sinus tachycardia with LVH, no ST elevation. Troponin I: 0.04 (normal <0.03).',
        question:'You have a 55-year-old with sudden tearing chest pain to the back, BP discrepancy, and hypertension. What are the three diagnoses you must rule out simultaneously, and what do you order?',
        keyPoints:['Triple threat: Aortic dissection (most concerning given presentation), acute MI, pulmonary embolism','BP discrepancy between arms = dissection until proven otherwise','Initial troponin minimally elevated — could be from dissection extending to coronary ostia, or demand ischemia','STAT CT angiogram (chest/abdomen/pelvis with arterial phase) — triple rule-out protocol if available','D-dimer: elevated in dissection AND PE — not helpful for differentiation but negative rules out PE','Immediate BP control: target SBP <120 and HR <60 — IV esmolol (beta-blocker FIRST, then nitroprusside if needed). Beta-blocker before vasodilator to prevent reflex tachycardia','Do NOT give anticoagulation or thrombolytics until dissection is ruled out — could be fatal']
      },
      {
        phase:'Workup',
        narrative:'CTA shows Stanford Type B aortic dissection originating just distal to the left subclavian artery, extending to the renal arteries. True lumen compressed. Left renal artery partially occluded by the false lumen. No Type A extension. D-dimer: 12,500. Repeat troponin: 0.08.',
        question:'It\'s a Type B dissection with left renal malperfusion. What\'s your management plan and who do you call?',
        keyPoints:['Uncomplicated Type B = medical management. BUT this has renal malperfusion = COMPLICATED Type B','STAT vascular surgery consult — renal malperfusion may require endovascular intervention (TEVAR or fenestration)','Aggressive BP control: IV esmolol drip to HR <60, then add clevidipine/nitroprusside to SBP 100-120','Pain control: IV morphine (also reduces sympathetic drive)','Monitor renal function closely: Cr trend, urine output (malperfused kidney)','ICU admission for hemodynamic monitoring, serial imaging','Rising troponin: likely demand ischemia from tachycardia/hypoperfusion, not primary ACS — do NOT give anticoagulation']
      },
      {
        phase:'Pivot',
        narrative:'In the ICU, his BP is controlled at 118/72, HR 58. But 6 hours later, his left leg becomes cool, pale, and pulseless. Cr rises to 2.4 from 1.0.',
        question:'What\'s happening and what\'s the urgency?',
        keyPoints:['Dynamic malperfusion syndrome: the dissection flap is now compromising the left iliac artery (leg ischemia) and worsening renal malperfusion','This is a surgical/endovascular emergency — acute limb ischemia + organ malperfusion','Emergent vascular surgery: likely needs TEVAR (thoracic endovascular aortic repair) and possibly iliac fenestration/stenting','6 Ps of acute limb ischemia: pain, pallor, pulselessness, poikilothermia, paresthesia, paralysis','Time is critical: >6 hours of warm ischemia → irreversible muscle damage','Monitor for reperfusion injury and compartment syndrome after revascularization']
      },
      {
        phase:'Resolution',
        narrative:'Emergent TEVAR is performed with left renal stenting and left iliac fenestration. Left leg reperfuses, pulses return. Cr peaks at 3.1 then trends down. He is stabilized in the ICU on IV esmolol and amlodipine.',
        question:'What does his long-term management look like?',
        keyPoints:['Lifelong BP control — target <130/80, ideally <120/80. Beta-blocker is the foundation','Smoking cessation — absolutely critical to prevent aneurysmal degeneration of the false lumen','Serial imaging: CTA at 1, 3, 6, 12 months then annually to monitor false lumen and stent graft','Activity restrictions: avoid heavy lifting, isometric exercise, stimulant drugs','Genetic screening: consider Marfan, Loeys-Dietz, Ehlers-Danlos if any phenotypic features (he\'s 55 with HTN so likely degenerative)','Medication adherence: emphasize that uncontrolled hypertension directly caused this event']
      }
    ],
    teaching:'Aortic dissection: The classic triad (tearing pain, BP discrepancy, widened mediastinum) is present in <50% of cases. Key teaching: ALWAYS control heart rate with beta-blocker BEFORE adding a vasodilator. Never give anticoagulation or thrombolytics until dissection is excluded. Type A (ascending) = emergent surgery. Type B (descending) = medical management UNLESS complicated by malperfusion, rupture, or refractory pain/HTN. Dynamic malperfusion can evolve over hours — serial assessment is essential.'
  },
  {
    id:'aki-workup',
    title:'Acute Kidney Injury — Systematic Workup',
    category:'Renal',
    tier:2,
    acuity:'urgent',
    setting:'Inpatient',
    milestones:['PC1','PC3','MK1','MK2'],
    patient:{
      name:'Dorothy Feng',age:'68F',
      vitals:{HR:88,RR:18,SpO2:97,Temp:'37.2°C',BP:'148/86'},
      cc:'Creatinine rose from 1.0 to 3.2 over 3 days'
    },
    stages:[
      {
        phase:'Presentation',
        narrative:'68-year-old woman admitted 3 days ago for cellulitis of the left lower extremity. Started on IV vancomycin and piperacillin-tazobactam. Cr on admission: 1.0, now 3.2 (yesterday was 2.1). Urine output has dropped to 15mL/hr (was 40mL/hr). BP has been well-controlled. She has a history of hypertension, Type 2 DM, and mild CKD (baseline Cr 1.0). She received a contrast CT of her leg on admission day.',
        question:'Cr tripled in 3 days. Walk through the systematic AKI workup: pre-renal, intrinsic, and post-renal causes.',
        keyPoints:['Pre-renal: assess volume status (mucous membranes, JVP, skin turgor, orthostatics), check BUN/Cr ratio (>20:1 suggests pre-renal), FeNa or FeUrea','Intrinsic: ATN (most likely here — multiple nephrotoxins), AIN (drug-induced — vancomycin, pip-tazo both causes), glomerulonephritis (less likely given context)','Post-renal: renal ultrasound to rule out obstruction — quick, non-invasive, should be done early','Nephrotoxin exposure: IV contrast (day of admission), vancomycin (nephrotoxic, need trough levels), pip-tazo (synergistic nephrotoxicity WITH vancomycin — well-documented)','The vancomycin + pip-tazo combination is a known driver of AKI — this is the most likely culprit']
      },
      {
        phase:'Workup',
        narrative:'Renal US: no hydronephrosis, normal-sized kidneys. BUN 48, Cr 3.2 (BUN/Cr ~15:1). Vancomycin trough: 28 (goal 15-20, supratherapeutic). Urinalysis: 1+ protein, few granular casts, no RBC casts or dysmorphic RBCs. FeNa: 3.2%. Urine eosinophils: pending.',
        question:'What\'s the most likely diagnosis and what do you change right now?',
        keyPoints:['Vancomycin trough 28 = supratherapeutic and nephrotoxic. Combined with pip-tazo = high AKI risk','FeNa >2% with granular casts = intrinsic AKI (ATN), not pre-renal','No RBC casts = not glomerulonephritis. Granular casts = tubular injury','Immediate action: STOP vancomycin. Switch pip-tazo to alternative (cefazolin or ceftriaxone for cellulitis). Hold any other nephrotoxins (NSAIDs, contrast)','Adjust all renally-dosed medications','Aggressive IV hydration if not volume overloaded','Monitor Cr daily, trend urine output hourly','If AIN suspected (eosinophiluria, rash, eosinophilia): consider dexamethasone']
      },
      {
        phase:'Pivot',
        narrative:'After stopping vancomycin and switching antibiotics, Cr continues to rise: 3.2 → 3.8 → 4.5 over 48 hours. Potassium rises to 5.8. She develops mild pulmonary edema on CXR despite fluid restriction.',
        question:'She\'s getting worse despite removing the offending agents. When do you call nephrology, and what are the indications for dialysis?',
        keyPoints:['Nephrology consult is indicated: worsening AKI despite intervention, hyperkalemia, volume overload','ATN takes time to recover — the insult has already occurred. Cr may continue to rise for days before improving','Emergent dialysis indications (AEIOU): Acidosis (pH <7.1), Electrolytes (K >6.5 or refractory), Ingestion (toxic), Overload (pulmonary edema refractory to diuretics), Uremia (encephalopathy, pericarditis)','K+ 5.8 with pulmonary edema: give calcium gluconate (membrane stabilizer), insulin + dextrose (shift K+), kayexalate controversial, consider urgent dialysis','Temporize hyperkalemia while arranging dialysis access','This K+ 5.8 is not yet at the emergent threshold (6.5+) but the TREND plus volume overload argues for early dialysis consult']
      },
      {
        phase:'Resolution',
        narrative:'Nephrology is consulted. They recommend aggressive diuresis with IV furosemide 80mg, which produces 1.5L urine over 6 hours. K+ drops to 5.1. Pulmonary edema improves. Cr peaks at 4.8 then starts to trend down: 4.5, 3.8, 3.2 over the next week. Dialysis is avoided.',
        question:'She\'s recovering. What do you document, what do you tell the patient, and what\'s the outpatient plan?',
        keyPoints:['Document the AKI cause clearly: vancomycin + piperacillin-tazobactam synergistic nephrotoxicity + possible contrast contribution','Drug allergy/adverse reaction list: document vancomycin-induced AKI — NOT an allergy, but a documented adverse effect','Patient education: explain that her kidneys were injured by a combination of medications, they are recovering, and she should avoid unnecessary nephrotoxins going forward','Outpatient plan: recheck BMP in 1 week, then monthly until Cr returns to baseline','May not return to baseline 1.0 — sustained injury may result in new baseline around 1.2-1.5','Avoid vancomycin + pip-tazo in the future; if vancomycin needed, use with cefepime or meropenem instead','This is an increasingly recognized drug safety issue and a teaching opportunity about antibiotic stewardship']
      }
    ],
    teaching:'AKI systematic approach: Always think pre-renal → intrinsic → post-renal. Get a renal US early (even if obstruction seems unlikely — it\'s quick and changes management). The vancomycin + piperacillin-tazobactam combination has a well-documented synergistic nephrotoxicity risk (OR ~3-4 compared to vancomycin + cefepime). Check vancomycin AUC/MIC or troughs. FeNa >2% with granular ("muddy brown") casts = ATN. Know the dialysis indications (AEIOU). ATN recovery takes days to weeks — don\'t expect immediate improvement after removing the insult.'
  }
];
})();
