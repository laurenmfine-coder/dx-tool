#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"aortic-aneurysm": {
  "diagnosis": "Symptomatic Abdominal Aortic Aneurysm",
  "problems": [
    {"problem":"Symptomatic AAA — urgent surgical evaluation","icd":"I71.4","onset":"2024","status":"Active","notes":"Harold Stevens, 72M — known 5.2cm AAA on surveillance. Now new onset pulsatile abdominal pain radiating to back. Hemodynamically stable. CT: 5.8cm AAA, no rupture, but new periaortic stranding = symptomatic."},
    {"problem":"Hypertension — major AAA risk factor","icd":"I10","onset":"2012","status":"Active","notes":"Poorly controlled SBP 162/90. BP control critical — target SBP <120 to slow expansion."},
    {"problem":"Tobacco use — 50 pack-year history","icd":"F17.210","onset":"1972","status":"Active","notes":"Smoking is the strongest modifiable risk factor for AAA formation and expansion. Each year of smoking increases risk."}
  ],
  "medications": [
    {"name":"Urgent vascular surgery consultation","sig":"Symptomatic AAA (new pain, tenderness) is a surgical emergency — repair indicated regardless of size. 50% of symptomatic AAAs rupture within 24-48 hours without repair.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"URGENT"},
    {"name":"IV access x2 large bore + type and cross 6 units pRBC","sig":"Prepare for emergent surgical repair. Rupture can occur at any moment. Blood bank notification.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Beta-blocker — metoprolol IV for BP/HR control","sig":"Reduce dP/dt. Target HR <60 and SBP <120 to reduce wall stress while awaiting OR.","prescriber":"Vascular Surgery/ICU","start":"2024","refills":0,"status":"Active — IV"}
  ],
  "labs": [{"date":"04/2024","panel":"Symptomatic AAA","results":[
    {"test":"Hemoglobin","value":"13.2","unit":"g/dL","ref":"13.5-17.5","flag":"L"},
    {"test":"Creatinine","value":"1.4","unit":"mg/dL","ref":"0.7-1.3","flag":"H"},
    {"test":"PT/INR","value":"1.1","unit":"","ref":"<1.2","flag":""},
    {"test":"Type and Screen","value":"O positive — crossmatch 6 units","unit":"","ref":"Done","flag":""},
    {"test":"BP","value":"162/90","unit":"mmHg","ref":"Target SBP <120","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Angiogram Abdomen/Pelvis","findings":"Infrarenal AAA 5.8cm maximum diameter (was 5.2cm 6 months ago). Periaortic stranding and new inflammatory changes. No free rupture. No retroperitoneal hematoma. Bilateral iliac arteries patent.","impression":"Symptomatic AAA with rapid expansion (6mm in 6 months). Urgent surgical repair indicated."}],
  "ddxTargets": ["Symptomatic AAA — urgent repair indicated (correct)","Ruptured AAA — no free blood on CT; hemodynamically stable; but symptomatic AAA is the pre-rupture state","Renal colic — lateral flank pain; no pulsatile mass; CT distinguishes","Acute aortic dissection — different CT pattern; Type B would show dissection flap; no flap here","Lumbar radiculopathy — can cause back pain; but pulsatile mass and CT findings are definitive"],
  "coachFinal": "Diagnosis: symptomatic AAA. Key learning: (1) AAA surveillance thresholds: <4cm = annual ultrasound. 4-5.4cm = every 6 months. ≥5.5cm = elective repair (or 5.0cm in women). Symptomatic = repair regardless of size. Rapid expansion (>0.5cm in 6 months or >1cm/year) = early repair. (2) Symptomatic AAA is a pre-rupture emergency: new abdominal/back pain + pulsatile mass + known AAA = symptomatic until proven otherwise. 50% rupture within 24-48 hours without repair. Stable hemodynamics do not exclude impending rupture. (3) Ruptured AAA classic triad: hypotension + pulsatile abdominal mass + back/flank pain. Mortality >80% for free rupture. The 'permissive hypotension' strategy (target SBP 50-80) is used for unstable ruptured AAA to avoid dislodging the retroperitoneal tamponade before the OR. (4) EVAR vs open repair: endovascular repair (EVAR) has lower 30-day mortality but higher reintervention rate. Open repair more durable. Patient anatomy determines eligibility. (5) Risk factors: male sex (6:1), age >65, smoking (strongest modifiable), hypertension, family history. Screening: one-time ultrasound in males 65-75 who have ever smoked."
},
"aortic-injury": {
  "diagnosis": "Blunt Traumatic Aortic Injury (Grade II — Intimal Tear)",
  "problems": [
    {"problem":"Blunt traumatic aortic injury — Grade II intimal tear","icd":"S35.00XA","onset":"2024","status":"Active","notes":"Kevin Park, 34M — high-speed MVA, unrestrained. CXR: widened mediastinum, left apical cap. CT angiography: intimal tear at aortic isthmus (ligamentum arteriosum). Hemodynamically stable."},
    {"problem":"Associated injuries — polytrauma screen required","icd":"S35.00XA","onset":"2024","status":"Active","notes":"Blunt aortic injury rarely occurs in isolation. Concomitant injuries: rib fractures, pulmonary contusion, pneumothorax, cardiac contusion (ECG, troponin). 90% of blunt aortic injuries occur at the isthmus."},
    {"problem":"Hemodynamic stability — grade determines urgency","icd":"S35.00XA","onset":"2024","status":"Active","notes":"Grade I = intimal tear (medical management). Grade II = intimal tear with hematoma. Grade III = partial tear (pseudoaneurysm). Grade IV = rupture (emergent)."}
  ],
  "medications": [
    {"name":"Esmolol IV — HR <60, SBP <120","sig":"Anti-impulse therapy reduces dP/dt and wall stress to prevent propagation. Same principle as aortic dissection. Strict HR and BP targets until definitive repair or observation confirms stability.","prescriber":"Trauma Surgery/Vascular","start":"2024","refills":0,"status":"Active — ICU"},
    {"name":"TEVAR — thoracic endovascular aortic repair (planned)","sig":"Grade II-III injuries that are stable can be repaired semi-urgently (within 24-72h). TEVAR has replaced open repair for most blunt aortic injuries.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Scheduled — 24h"},
    {"name":"Pain management + ICU monitoring","sig":"ICU admission with arterial line for continuous BP monitoring. Serial CT angiography if conservative management chosen for Grade I.","prescriber":"Trauma Surgery","start":"2024","refills":0,"status":"Active — ICU"}
  ],
  "labs": [{"date":"04/2024","panel":"Blunt Aortic Injury","results":[
    {"test":"Hemoglobin","value":"11.2","unit":"g/dL","ref":"13.5-17.5","flag":"L"},
    {"test":"Troponin I","value":"0.18","unit":"ng/mL","ref":"<0.04 (cardiac contusion)","flag":"H"},
    {"test":"CXR findings","value":"Widened mediastinum >8cm, left apical pleural cap","unit":"","ref":"Normal","flag":"H"},
    {"test":"BP right arm","value":"138/82","unit":"mmHg","ref":"","flag":""},
    {"test":"BP left arm","value":"104/68","unit":"mmHg","ref":"Differential >20mmHg = aortic injury","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Angiogram Chest","findings":"Intimal tear at aortic isthmus (distal to left subclavian artery). Small periaortic hematoma. No free extravasation. Mediastinal hematoma. No other aortic injury. Left pulmonary contusion.","impression":"Grade II blunt traumatic aortic injury at aortic isthmus. Anti-impulse therapy and semi-urgent TEVAR."}],
  "ddxTargets": ["Blunt traumatic aortic injury — Grade II (correct)","Traumatic aortic rupture (Grade IV) — free extravasation on CT; hemodynamically unstable; emergent repair","Mediastinal hematoma without aortic injury — CXR widening from venous bleeding; CT distinguishes","Cardiac contusion — troponin elevation here is from cardiac contusion; coexists with aortic injury","Aortic dissection (spontaneous) — mechanism; age; CT distinguishes intimal tear vs dissection flap"],
  "coachFinal": "Diagnosis: blunt traumatic aortic injury. Key learning: (1) Mechanism: rapid deceleration injury causes shear stress at fixed aortic points — the isthmus (ligamentum arteriosum, 90% of cases), the aortic root, or the diaphragmatic hiatus. Classic scenario: high-speed MVA, unrestrained driver. (2) CXR signs: widened mediastinum (>8cm at aortic knob) is the most sensitive finding. Others: left apical pleural cap, obliteration of aortic knob, tracheal deviation to right, left hemothorax. A normal CXR does NOT exclude blunt aortic injury in a high-mechanism trauma. (3) BP differential: upper extremity differential >20mmHg (right > left) in blunt chest trauma = aortic injury until proven otherwise. The isthmus injury can partially occlude the left subclavian outflow. (4) Grading and management: Grade I (intimal tear) = anti-impulse therapy ± observation. Grade II (intimal + hematoma) = semi-urgent TEVAR. Grade III (pseudoaneurysm) = urgent TEVAR. Grade IV (free rupture) = emergent repair. (5) Anti-impulse therapy (esmolol): same as aortic dissection — reduce HR <60 and SBP <120 to minimize wall stress until definitive repair."
},
"aortic-saddle-embolus": {
  "diagnosis": "Aortic Saddle Embolus — Bilateral Acute Limb Ischemia",
  "problems": [
    {"problem":"Aortic saddle embolus — bilateral ALI, Rutherford IIb","icd":"I74.09","onset":"2024","status":"Active","notes":"Dorothy Allen, 68F — known AFib, subtherapeutic anticoagulation. Sudden onset bilateral lower extremity pain, coldness, pulselessness. Classic 'saddle' embolus straddling aortic bifurcation."},
    {"problem":"Atrial fibrillation — cardioembolic source","icd":"I48.0","onset":"2018","status":"Active","notes":"INR 1.4 — subtherapeutic. Large left atrial thrombus = source of saddle embolus."},
    {"problem":"Bilateral motor deficit — Rutherford IIb, immediately threatened","icd":"I74.09","onset":"2024","status":"Active","notes":"Cannot move ankles or toes bilaterally. Bilateral motor deficit = Rutherford IIb × 2 = absolute emergency."}
  ],
  "medications": [
    {"name":"Heparin UFH 100 units/kg bolus — IMMEDIATE","sig":"Prevent propagation. Start before imaging if diagnosis obvious. Time is bilateral limbs.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Emergent bilateral surgical embolectomy — OR NOW","sig":"Bilateral Rutherford IIb from saddle embolus = surgical emergency. Bilateral transfemoral embolectomy with Fogarty catheter. Target OR within 1-2 hours.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"EMERGENT — OR"},
    {"name":"Bilateral fasciotomy — anticipate reperfusion injury","sig":"Bilateral leg fasciotomy at time of revascularization. Bilateral prolonged ischemia → severe reperfusion injury → bilateral compartment syndrome virtually certain.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Planned — intraoperative"}
  ],
  "labs": [{"date":"04/2024","panel":"Saddle Embolus","results":[
    {"test":"Lactate","value":"5.8","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"CK","value":"3200","unit":"U/L","ref":"<200","flag":"H"},
    {"test":"INR","value":"1.4","unit":"","ref":"2.0-3.0 (subtherapeutic)","flag":"L"},
    {"test":"Femoral Doppler — bilateral","value":"Absent bilateral","unit":"","ref":"Present","flag":"H"},
    {"test":"ECG","value":"Atrial fibrillation","unit":"","ref":"NSR","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Angiogram Aorta/Lower Extremities","findings":"Large filling defect straddling aortic bifurcation extending into bilateral common iliac arteries — saddle embolus. No flow in bilateral external iliacs or below. No significant atherosclerosis.","impression":"Aortic saddle embolus with bilateral limb ischemia. Emergent surgical embolectomy indicated."}],
  "ddxTargets": ["Aortic saddle embolus (correct)","Bilateral DVT — venous; no pulse loss; no ABI change","Aortic dissection extending to iliacs — dissection flap on CT; different mechanism","Leriche syndrome (atherosclerotic aortoiliac occlusion) — chronic gradual onset; claudication history; atherosclerosis on CTA","Phlegmasia cerulea dolens bilateral — massive venous thrombosis; pulseless but venous mechanism"],
  "coachFinal": "Diagnosis: aortic saddle embolus. Key learning: (1) Saddle embolus = embolus straddling the aortic bifurcation → bilateral acute limb ischemia. Classic presentation: sudden bilateral lower extremity pain + absent femoral pulses bilaterally. Almost always from cardiac source (AFib, recent MI). (2) Leriche syndrome distinction: chronic atherosclerotic aortoiliac occlusion (gradual claudication, erectile dysfunction, absent femoral pulses). Saddle embolus = acute catastrophic onset. CTA distinguishes (atherosclerosis vs clean vessels with acute filling defect). (3) Surgical urgency: bilateral Rutherford IIb (motor deficit) = emergent bilateral surgical embolectomy. Fogarty catheter embolectomy via bilateral groin incisions. No time for CDT in bilateral IIb — motor deficit means revascularize NOW. (4) Reperfusion injury: bilateral prolonged ischemia → bilateral massive reperfusion → hyperkalemia, myoglobinuric AKI, bilateral compartment syndrome. Anticipate: pre-hydration, NaHCO3 urine alkalinization, bilateral prophylactic fasciotomy at time of revascularization, continuous electrolyte monitoring. (5) Anticoagulation after repair: lifelong warfarin or DOAC for AF. This event occurred because anticoagulation was subtherapeutic — patient education critical."
},
"asthma-exacerbation": {
  "diagnosis": "Acute Severe Asthma Exacerbation (Near-Fatal Features)",
  "problems": [
    {"problem":"Acute severe asthma — NAEPP severity: severe","icd":"J45.41","onset":"2024","status":"Active","notes":"Maria Santos, 34F — known moderate-persistent asthma, viral URI trigger. Speaks in phrases, accessory muscle use, PEFR 40% predicted, SpO2 91% on room air. Silent chest on exam."},
    {"problem":"Silent chest — near-fatal feature","icd":"J45.41","onset":"2024","status":"Active","notes":"Absence of wheeze in severe asthma = airflow so restricted that no wheezing is generated. The 'quiet chest' is more dangerous than the loud wheeze. Do not be falsely reassured."},
    {"problem":"Hypoxemia — SpO2 91%, impending respiratory failure","icd":"J45.41","onset":"2024","status":"Active","notes":"SpO2 <92% in asthma exacerbation = severe. pH 7.36 with normal CO2 = compensated; rising CO2 in asthma = impending respiratory failure (patient tiring out)."}
  ],
  "medications": [
    {"name":"SABA: Albuterol 2.5mg nebulized continuous x 3 doses then q20min","sig":"Continuous or back-to-back short-acting beta-agonist is the cornerstone. Start immediately. IV or IM if unable to inhale.","prescriber":"Emergency/Pulmonology","start":"2024","refills":0,"status":"Active — continuous neb"},
    {"name":"Ipratropium 0.5mg nebulized q20min x 3 doses","sig":"Additive bronchodilation via anticholinergic mechanism. Add to SABA for first 1-2 hours in severe exacerbation.","prescriber":"Emergency","start":"2024","refills":0,"status":"Active — combined neb"},
    {"name":"Methylprednisolone 125mg IV — systemic steroid","sig":"Reduces airway inflammation. Full effect in 4-6 hours — does not provide immediate relief but critical for sustained improvement. Start immediately.","prescriber":"Emergency","start":"2024","refills":0,"status":"Administered"},
    {"name":"Magnesium sulfate 2g IV over 20 min — if inadequate response","sig":"Smooth muscle relaxation via calcium antagonism. Reduces hospitalization and intubation in severe/near-fatal asthma not responding to initial treatment.","prescriber":"Emergency","start":"2024","refills":0,"status":"Available — if no improvement 1h"}
  ],
  "labs": [{"date":"04/2024","panel":"Severe Asthma Assessment","results":[
    {"test":"PEFR","value":"40","unit":"% predicted","ref":"<40% = severe; <25% = near-fatal","flag":"H"},
    {"test":"SpO2","value":"91","unit":"%","ref":"≥95%","flag":"L"},
    {"test":"ABG — pH","value":"7.36","unit":"","ref":"7.35-7.45","flag":""},
    {"test":"ABG — pCO2","value":"42","unit":"mmHg","ref":"35-45 (normal pCO2 in severe asthma = concerning — patient tiring)","flag":"H"},
    {"test":"Heart rate","value":"126","unit":"bpm","ref":"<100","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Chest X-Ray","findings":"Hyperinflation. No pneumothorax. No infiltrate. No pleural effusion.","impression":"Hyperinflation consistent with severe asthma exacerbation. No pneumothorax."}],
  "ddxTargets": ["Acute severe asthma exacerbation (correct)","Anaphylaxis with bronchospasm — urticaria, angioedema, hypotension; allergen trigger; treat with epinephrine","COPD exacerbation — smoking history, age, spirometry; may coexist","Vocal cord dysfunction — inspiratory stridor, normal SpO2, variable flow-volume loop; not life-threatening","Pulmonary embolism with bronchospasm — V/Q mismatch; pleuritic pain; CT PE distinguishes","Foreign body aspiration — sudden onset, unilateral wheeze; bronchoscopy"],
  "coachFinal": "Diagnosis: acute severe asthma exacerbation. Key learning: (1) Severity assessment: mild (speaks in sentences, PEFR >70%), moderate (speaks in phrases, PEFR 40-69%), severe (speaks in words, PEFR <40%, SpO2 <92%), near-fatal (silent chest, cyanosis, bradycardia, altered consciousness). The silent chest is the most dangerous finding — absent wheeze = no airflow. (2) Normal or rising pCO2 in severe asthma = impending respiratory failure. Early in asthma, patients hyperventilate → low pCO2. Normalizing pCO2 means the patient is tiring and can no longer maintain hyperventilation. This is the signal to prepare for intubation. (3) Magnesium sulfate: smooth muscle relaxation via calcium channel antagonism. 2g IV over 20 minutes in severe/near-fatal asthma reduces intubation rate. Safe, effective. (4) Intubation in severe asthma is high-risk: dynamic hyperinflation, intrinsic PEEP, and risk of tension pneumothorax. If intubation required: ketamine (bronchodilator + dissociative), avoid succinylcholine if hypoxic, use low RR/low TV/'permissive hypercapnia' strategy to avoid auto-PEEP. (5) Helium-oxygen (heliox): lower density gas reduces turbulent flow in severe obstruction, improves drug delivery. Consider as bridge to treatment response."
},
"atypical-hus": {
  "diagnosis": "Atypical Hemolytic Uremic Syndrome (Complement-Mediated TMA)",
  "problems": [
    {"problem":"Atypical HUS — complement-mediated thrombotic microangiopathy","icd":"D59.3","onset":"2024","status":"Active","notes":"Emma Larson, 28F — microangiopathic hemolytic anemia (Hgb 7.2, schistocytes on smear), thrombocytopenia (platelets 42), AKI (Cr 4.8), no Shiga toxin. Complement activation pathway dysregulation."},
    {"problem":"AKI — severe, may require dialysis","icd":"N17.9","onset":"2024","status":"Active","notes":"Creatinine 4.8, oliguria <0.3mL/kg/hr. Renal involvement from complement-mediated thrombotic microangiopathy of renal microvasculature."},
    {"problem":"Microangiopathic hemolytic anemia — active hemolysis","icd":"D59.3","onset":"2024","status":"Active","notes":"Hgb 7.2, LDH 2800, haptoglobin undetectable, schistocytes 4% on peripheral smear. Mechanical hemolysis from fibrin strand cutting RBCs in thrombosed microvasculature."}
  ],
  "medications": [
    {"name":"Eculizumab (Soliris) — anti-C5 complement inhibitor","sig":"First-line for aHUS. Blocks terminal complement activation (C5a + C5b-9 MAC). Start as soon as diagnosis suspected — do not wait for genetic confirmation. Life-changing treatment.","prescriber":"Hematology/Nephrology","start":"2024","refills":0,"status":"Urgent — initiate"},
    {"name":"Meningococcal vaccine + prophylactic penicillin","sig":"Eculizumab blocks C5 → impairs killing of Neisseria meningitidis. Vaccinate against meningococcal disease (MenACWY + MenB) before or at start of eculizumab. Prophylactic penicillin V 250mg BID.","prescriber":"Hematology","start":"2024","refills":0,"status":"Initiated — pre-eculizumab"},
    {"name":"Dialysis — for refractory AKI","sig":"Indications: uremia, hyperkalemia, acidosis, volume overload. Dialysis supports but does not treat aHUS — eculizumab is the disease treatment.","prescriber":"Nephrology","start":"2024","refills":0,"status":"Likely needed"}
  ],
  "labs": [{"date":"04/2024","panel":"TMA/aHUS Workup","results":[
    {"test":"Hemoglobin","value":"7.2","unit":"g/dL","ref":"12-16","flag":"L"},
    {"test":"Platelets","value":"42","unit":"K/μL","ref":"150-400","flag":"L"},
    {"test":"Creatinine","value":"4.8","unit":"mg/dL","ref":"0.5-1.1","flag":"H"},
    {"test":"Shiga toxin (stool)","value":"Negative","unit":"","ref":"Negative (rules out typical HUS)","flag":""},
    {"test":"ADAMTS13 activity","value":"62%","unit":"","ref":">10% (rules out TTP)","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Atypical HUS — complement-mediated (correct)","TTP — ADAMTS13 <10%; microangiopathy + thrombocytopenia but different mechanism; treat with plasma exchange","Typical (STEC) HUS — Shiga toxin positive; E. coli O157:H7; bloody diarrhea; supportive care","DIC — underlying trigger; low fibrinogen; prolonged PT/PTT; coagulation panel distinguishes","Malignant hypertension with TMA — BP severely elevated; different mechanism; BP treatment"],
  "coachFinal": "Diagnosis: atypical HUS (complement-mediated TMA). Key learning: (1) TMA triad: microangiopathic hemolytic anemia (MAHA) + thrombocytopenia + organ dysfunction (often renal). The diagnosis is TMA first, then differentiate the cause. (2) TMA differential: TTP = ADAMTS13 <10% → plasma exchange. Typical HUS = STEC infection (Shiga toxin) → supportive care (no antibiotics — lyse bacteria and release more toxin). aHUS = complement dysregulation + negative ADAMTS13/Shiga toxin → eculizumab. (3) ADAMTS13 rules: <10% = TTP (treat with plasma exchange). >10% = TTP excluded. This patient's ADAMTS13 62% = not TTP. (4) Eculizumab (anti-C5): revolutionized aHUS treatment. Before eculizumab, most patients progressed to ESRD. Now 70-80% achieve complete TMA response. Must vaccinate against N. meningitidis before starting — terminal complement blockade dramatically increases meningococcal risk. (5) aHUS genetics: 50-60% have identifiable complement gene mutations (CFH, CFI, MCP, C3, CFB). Genetic testing guides prognosis and treatment duration."
},
"autoimmune-blistering-disease": {
  "diagnosis": "Bullous Pemphigoid — Generalized Tense Bullae",
  "problems": [
    {"problem":"Bullous pemphigoid — generalized, severe","icd":"L12.0","onset":"2024","status":"Active","notes":"Ruth Anderson, 78F — 3-week history of intensely pruritic urticarial plaques progressing to tense bullae on trunk, extremities, and thighs. Nikolsky sign negative. Biopsy: subepidermal blister with eosinophils. BP180/BP230 antibodies positive."},
    {"problem":"Medication trigger — review drug list","icd":"L12.0","onset":"2024","status":"Active","notes":"Drug-induced BP: dipeptidyl peptidase-4 inhibitors (gliptins), furosemide, penicillins, beta-blockers. Review medication list and stop potential triggers."},
    {"problem":"Secondary infection risk — open bullae","icd":"L12.0","onset":"2024","status":"Active","notes":"Ruptured bullae are portals of entry. Monitor for wound infection, sepsis. Careful wound care."}
  ],
  "medications": [
    {"name":"High-potency topical corticosteroids — clobetasol 0.05% ointment","sig":"Topical steroids are first-line for localized BP. For generalized disease: clobetasol applied to lesions BID. Non-inferior to systemic steroids in the TORCH trial with fewer systemic side effects.","prescriber":"Dermatology","start":"2024","refills":1,"status":"Active — BID"},
    {"name":"Prednisone 0.5mg/kg/day — for extensive disease","sig":"Systemic steroids for severe/generalized BP. Taper over months based on clinical response and antibody levels.","prescriber":"Dermatology","start":"2024","refills":0,"status":"Active"},
    {"name":"Doxycycline 100mg BID + niacinamide — steroid-sparing","sig":"Anti-inflammatory mechanism. Steroid-sparing alternative especially in elderly who cannot tolerate systemic steroids. Useful for mild-moderate disease.","prescriber":"Dermatology","start":"2024","refills":1,"status":"Alternative/adjunct"}
  ],
  "labs": [{"date":"04/2024","panel":"Bullous Pemphigoid Workup","results":[
    {"test":"BP180 (anti-NC16A) IgG","value":"Positive — 240 U/mL","unit":"","ref":"<9 U/mL","flag":"H"},
    {"test":"BP230 IgG","value":"Positive — 180 U/mL","unit":"","ref":"<9 U/mL","flag":"H"},
    {"test":"Skin biopsy — H&E","value":"Subepidermal blister with eosinophils","unit":"","ref":"Normal epidermis","flag":"H"},
    {"test":"DIF (direct immunofluorescence)","value":"Linear IgG and C3 at BMZ (dermal-epidermal junction)","unit":"","ref":"Negative","flag":"H"},
    {"test":"Eosinophils (peripheral)","value":"1.8","unit":"K/μL (18%)","ref":"<0.5","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Bullous pemphigoid (correct)","Pemphigus vulgaris — flaccid bullae; Nikolsky positive; supraepidermal blister; desmoglein 1/3 antibodies","Dermatitis herpetiformis — small grouped vesicles on extensor surfaces; gluten-sensitive enteropathy; IgA at tips of dermal papillae","Stevens-Johnson syndrome/TEN — drug-triggered; mucous membrane involvement; full-thickness epidermal necrosis; different DIF","Contact dermatitis bullous — localized; known allergen; negative DIF","Drug-induced linear IgA bullous dermatosis — vancomycin, lithium; linear IgA at BMZ; negative BP180/230"],
  "coachFinal": "Diagnosis: bullous pemphigoid. Key learning: (1) BP vs pemphigus vulgaris distinction: BP = TENSE bullae, Nikolsky NEGATIVE, SUBEPIDERMAL split, older patients, pruritus dominant. Pemphigus vulgaris = FLACCID bullae, Nikolsky POSITIVE, SUPRAEPIDERMAL (intraepidermal) split, mucosal involvement common, desmoglein antibodies. The Nikolsky sign (lateral pressure on intact skin causes separation) is the key clinical distinction. (2) BP pathophysiology: IgG antibodies against hemidesmosomal proteins BP180 (NC16A domain) and BP230 → complement activation → eosinophil recruitment → subepidermal split. BP180 antibodies correlate with disease severity. (3) DIF is diagnostic: linear IgG and C3 at the dermal-epidermal junction (basement membrane zone) = BP. IgA at dermal papillae tips = dermatitis herpetiformis. Intraepidermal IgG = pemphigus. (4) Drug-induced BP: DPP-4 inhibitors (gliptins — sitagliptin, saxagliptin) are the most common cause of drug-induced BP. Check medication list in every new BP diagnosis. (5) Treatment trend: topical steroids (clobetasol) ± doxycycline/niacinamide is increasingly used instead of systemic steroids to minimize side effects in elderly patients — TORCH trial showed non-inferiority."
},
"autoimmune-hemolytic-anemia": {
  "diagnosis": "Warm Autoimmune Hemolytic Anemia (Warm AIHA — CLL-Associated)",
  "problems": [
    {"problem":"Warm AIHA — CLL-associated secondary hemolysis","icd":"D59.11","onset":"2024","status":"Active","notes":"David Park, 62M — known CLL stage II. Progressive fatigue, pallor, jaundice. Hgb 6.8 from 12.4 over 2 months. DAT (direct Coombs) positive IgG + C3. LDH 3200, haptoglobin undetectable."},
    {"problem":"CLL — underlying disease driving AIHA","icd":"C91.10","onset":"2022","status":"Active","notes":"CLL is the most common cause of secondary warm AIHA (10-25% of CLL patients develop AIHA). Requires treatment of both the AIHA and the underlying CLL."},
    {"problem":"Symptomatic anemia — transfusion threshold assessment","icd":"D59.11","onset":"2024","status":"Active","notes":"Hgb 6.8 + symptoms (dyspnea on exertion, palpitations). Transfusion may be needed but challenging — autoantibodies react with all donor cells, making crossmatch difficult."}
  ],
  "medications": [
    {"name":"Prednisone 1mg/kg/day — first-line for warm AIHA","sig":"Corticosteroids suppress autoantibody production and reduce RBC destruction. 70-80% initial response rate. Taper over 4-6 months after Hgb stabilizes.","prescriber":"Hematology","start":"2024","refills":0,"status":"Active"},
    {"name":"Rituximab — second-line or steroid-sparing","sig":"Anti-CD20 depletes B-cells → reduces autoantibody production. Also treats underlying CLL. Combined rituximab + steroid increasingly first-line for severe AIHA.","prescriber":"Hematology/Oncology","start":"2024","refills":0,"status":"Planned — if steroid failure"},
    {"name":"Folate supplementation — 1mg daily","sig":"Compensatory erythropoiesis in hemolytic anemia depletes folate. Supplementation prevents megaloblastic change.","prescriber":"Hematology","start":"2024","refills":3,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"Warm AIHA Workup","results":[
    {"test":"Hemoglobin","value":"6.8","unit":"g/dL","ref":"13.5-17.5","flag":"L"},
    {"test":"Direct Coombs (DAT)","value":"Positive — IgG + C3d","unit":"","ref":"Negative","flag":"H"},
    {"test":"LDH","value":"3200","unit":"U/L","ref":"100-220","flag":"H"},
    {"test":"Haptoglobin","value":"Undetectable (<10)","unit":"mg/dL","ref":"30-200","flag":"L"},
    {"test":"Reticulocyte count","value":"18.2","unit":"%","ref":"0.5-2.0 (appropriate response)","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Warm AIHA — CLL-associated (correct)","Cold agglutinin disease — IgM; DAT positive C3 only (not IgG); cold-triggered symptoms; different treatment","Microangiopathic hemolytic anemia (TMA) — DAT negative; schistocytes; thrombocytopenia","Drug-induced immune hemolysis — medication history; DAT positive; stop offending drug","Hemolytic transfusion reaction — post-transfusion; IgM ABO incompatibility","Sickle cell crisis — hemolysis + pain crisis; sickle prep positive; different mechanism"],
  "coachFinal": "Diagnosis: warm AIHA, CLL-associated. Key learning: (1) Warm vs cold AIHA distinction: WARM (IgG, 37°C) = most common, DAT positive IgG ± C3, extravascular hemolysis (spleen), responds to steroids. COLD (IgM, cold temperatures) = DAT positive C3 only, intravascular hemolysis, avoid cold, chlorambucil/rituximab. The DAT result distinguishes them. (2) DAT (direct Coombs test): detects antibodies or complement coating the patient's RBCs. Positive IgG = warm AIHA. Positive C3 only = cold AIHA or PCH. Positive IgG + C3 = warm AIHA (as here). (3) Transfusion in warm AIHA: autoantibodies react with ALL donor RBCs (pan-reactive) → impossible to find compatible crossmatch. Blood bank provides 'least incompatible' units. Transfuse only if life-threatening anemia (Hgb <7 with symptoms) — transfused cells will also be hemolyzed. (4) CLL + AIHA: CLL produces dysfunctional B-cells that generate autoantibodies. Rituximab treats both conditions simultaneously — depletes malignant B-cells AND autoantibody-producing B-cells. (5) Steroid response monitoring: expect Hgb to rise within 1-3 weeks with steroids. Reticulocytosis (as here) indicates appropriate bone marrow response. LDH and haptoglobin normalize with treatment response."
},
"bacterial-meningitis": {
  "diagnosis": "Acute Bacterial Meningitis — Neisseria meningitidis",
  "problems": [
    {"problem":"Acute bacterial meningitis — presumed N. meningitidis","icd":"G00.1","onset":"2024","status":"Active","notes":"Tyler Brooks, 19M — college dormitory resident, sudden onset headache, fever 40.1°C, neck stiffness, photophobia, non-blanching petechial rash. Classic meningococcal presentation."},
    {"problem":"Petechial/purpuric rash — meningococcemia","icd":"A39.2","onset":"2024","status":"Active","notes":"Non-blanching petechiae and purpura = meningococcal bacteremia with DIC. Indicates systemic Neisseria meningitidis septicemia. Rapidly progressive — can develop in hours."},
    {"problem":"Rapidly progressive — DIC and septic shock risk","icd":"A39.0","onset":"2024","status":"Active","notes":"Meningococcal disease can progress from well to death in <24 hours. The rash spreading + hypotension = Waterhouse-Friderichsen syndrome risk (bilateral adrenal hemorrhage)."}
  ],
  "medications": [
    {"name":"Ceftriaxone 2g IV — IMMEDIATE, DO NOT DELAY FOR LP","sig":"Do not delay antibiotics for LP if the patient is deteriorating or has contraindications to LP (elevated ICP, focal neuro deficits, coagulopathy). Give antibiotics immediately, then LP if safe.","prescriber":"Emergency/Infectious Disease","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Dexamethasone 0.15mg/kg IV — BEFORE or WITH first antibiotic dose","sig":"Reduces neuroinflammation, decreases hearing loss (particularly in S. pneumoniae). Give before or with first dose of antibiotics — no benefit if given after. Continue 4 days.","prescriber":"Emergency/Infectious Disease","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Public health notification — contact prophylaxis","sig":"N. meningitidis is notifiable. Close contacts (household, dormitory, healthcare workers with face exposure) require ciprofloxacin 500mg x1 or rifampin prophylaxis within 24 hours of exposure.","prescriber":"Public Health","start":"2024","refills":0,"status":"Initiated — PH notification"}
  ],
  "labs": [{"date":"04/2024","panel":"Bacterial Meningitis Workup","results":[
    {"test":"CSF WBC","value":"4800","unit":"cells/μL (PMN predominant 92%)","ref":"0-5","flag":"H"},
    {"test":"CSF glucose","value":"18","unit":"mg/dL","ref":"40-70; CSF:serum ratio <0.4 = bacterial","flag":"L"},
    {"test":"CSF protein","value":"380","unit":"mg/dL","ref":"15-45","flag":"H"},
    {"test":"CSF Gram stain","value":"Gram-negative diplococci","unit":"","ref":"No organisms","flag":"H"},
    {"test":"Blood cultures","value":"Pending — drawn before antibiotics","unit":"","ref":"No growth","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Head Non-Contrast (pre-LP)","findings":"No midline shift. No herniation. No mass. Normal ventricles.","impression":"No contraindication to lumbar puncture. Proceed with LP."}],
  "ddxTargets": ["Acute bacterial meningitis — N. meningitidis (correct)","Viral meningitis — lymphocytic pleocytosis; normal glucose; less toxic; gram stain negative; enterovirus most common","Subarachnoid hemorrhage — thunderclap headache; bloody CSF; xanthochromia; CT may show blood","Herpes encephalitis — temporal lobe involvement on MRI; temporal CSF pleocytosis; treat with acyclovir empirically","Meningococcal meningitis vs meningococcemia — distinction: meningitis = CSF infected; meningococcemia = bloodstream; can coexist"],
  "coachFinal": "Diagnosis: acute bacterial meningitis, meningococcal. Key learning: (1) Classic triad: fever + headache + neck stiffness. Only 44% have all three. Add photophobia, phonophobia, altered consciousness, petechiae. Non-blanching petechial rash in a febrile patient = meningococcemia until proven otherwise — give ceftriaxone immediately even before any workup. (2) Do NOT delay antibiotics for LP: if CT is required first (focal deficits, immunocompromised, papilledema, GCS <13, new seizure, age >60), draw blood cultures and give antibiotics IMMEDIATELY, then get CT, then LP. Each 1-hour delay in antibiotics increases mortality significantly. (3) CSF pattern: bacterial = low glucose (<40mg/dL or CSF:serum <0.4), elevated protein (>100mg/dL), polymorphonuclear pleocytosis (>1000 WBC, PMN dominant), positive Gram stain (60-90% sensitivity). (4) Dexamethasone: reduces neuroinflammation and hearing loss, particularly for S. pneumoniae. Give before or with first antibiotic dose — benefit lost if given afterward. If not pneumococcal, can stop after 4 days. (5) Contact prophylaxis: ciprofloxacin 500mg × 1 dose or rifampin for household and close contacts within 24 hours of exposure. Healthcare workers only if direct mucosal exposure (resuscitation, intubation without mask)."
},
"cap-with-sepsis": {
  "diagnosis": "Community-Acquired Pneumonia with Sepsis (Streptococcus pneumoniae)",
  "problems": [
    {"problem":"CAP with sepsis — severe, PORT class IV","icd":"J18.9","onset":"2024","status":"Active","notes":"Robert Williams, 68M — 3 days fever, productive cough, dyspnea. HR 118, BP 96/62, RR 28, T 39.4, SpO2 88% on room air. Sepsis criteria met: suspected infection + ≥2 SIRS criteria + organ dysfunction."},
    {"problem":"Sepsis — hemodynamic compromise","icd":"A41.3","onset":"2024","status":"Active","notes":"MAP <65 mmHg despite initial 500mL NS. Lactate 3.8 mmol/L. Meets sepsis-3 criteria. ICU-level care required."},
    {"problem":"Hypoxemic respiratory failure — HFNC or intubation threshold","icd":"J96.01","onset":"2024","status":"Active","notes":"SpO2 88% on 15L NRB. Consider high-flow nasal cannula (HFNC) as bridge. Intubation if no improvement or deterioration."}
  ],
  "medications": [
    {"name":"Ceftriaxone 1g IV q24h + azithromycin 500mg IV q24h","sig":"IDSA CAP guidelines: beta-lactam (ceftriaxone) + macrolide (azithromycin) for hospitalized CAP. Covers typical (S. pneumoniae) and atypical organisms (Legionella, Mycoplasma). Levofloxacin 750mg daily is monotherapy alternative.","prescriber":"Pulmonology/Infectious Disease","start":"2024","refills":0,"status":"Active — IV"},
    {"name":"IV fluid resuscitation — 30mL/kg crystalloid initial bolus","sig":"Surviving Sepsis Campaign: 30mL/kg (total 2.1L for 70kg patient) within first 3 hours. Reassess volume status after bolus — avoid excess fluid causing pulmonary edema in bilateral CAP.","prescriber":"Medicine/Critical Care","start":"2024","refills":0,"status":"Active — 2L given"},
    {"name":"Norepinephrine — if MAP <65 after 2L fluid","sig":"First-line vasopressor for septic shock (Surviving Sepsis Campaign). Target MAP ≥65 mmHg.","prescriber":"Medicine/Critical Care","start":"2024","refills":0,"status":"Initiating — MAP 62 post-fluids"}
  ],
  "labs": [{"date":"04/2024","panel":"CAP/Sepsis Assessment","results":[
    {"test":"Lactate","value":"3.8","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"WBC","value":"24.6","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"Procalcitonin","value":"18.4","unit":"ng/mL","ref":"<0.25 (bacterial infection likely)","flag":"H"},
    {"test":"Blood cultures x2","value":"Pending — drawn before antibiotics","unit":"","ref":"","flag":""},
    {"test":"Urine Legionella antigen","value":"Negative","unit":"","ref":"Negative","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"Chest X-Ray","findings":"Dense right lower lobe consolidation with air bronchograms. No effusion. No pneumothorax. Left lung clear.","impression":"Right lower lobe pneumonia consistent with CAP. No empyema."}],
  "ddxTargets": ["CAP with sepsis — S. pneumoniae (correct)","Aspiration pneumonia — alcoholism, dysphagia, poor dentition; dependent segments; different flora coverage","Legionella pneumonia — Legionella antigen negative; atypical features (GI, neurologic); no response to beta-lactam alone","Hospital-acquired pneumonia — onset >48h after admission; broader Gram-negative coverage needed","PE with infarction — pleuritic pain; wedge-shaped opacity; CTA distinguishes","ARDS — bilateral infiltrates; different mechanism; CAP can trigger ARDS"],
  "coachFinal": "Diagnosis: CAP with sepsis. Key learning: (1) CAP severity scoring: PORT/PSI (pneumonia severity index) — 5 classes; Class IV-V = hospitalize, consider ICU. CURB-65: confusion + urea >7 + RR >30 + BP <90/60 + age ≥65; score ≥3 = severe. This patient: CURB-65 = 4 (age, BP, RR, O2). (2) Empiric antibiotic selection: outpatient (healthy): amoxicillin or doxycycline. Hospitalized non-severe: beta-lactam + macrolide (or respiratory fluoroquinolone). Hospitalized severe/ICU: beta-lactam + macrolide (or azithromycin) — dual coverage for atypical organisms reduces mortality. (3) Sepsis bundles (1-hour): draw blood cultures, give antibiotics, measure lactate, give 30mL/kg crystalloid if lactate >4 or hypotensive, vasopressor if MAP <65 after fluids. Time to antibiotics is the most impactful metric. (4) S. pneumoniae remains the most common bacterial cause of CAP. Gram-positive diplococcus on Gram stain. Pneumococcal urinary antigen test is rapid and specific. (5) Procalcitonin: elevated in bacterial infection, suppressed in viral pneumonia. Useful for antibiotic stewardship — guides discontinuation when normalizing. Not useful for initial antibiotic decision in severe CAP."
}
}

def enrich(slug, e):
    path = os.path.join(EMR_DIR, f"{slug}.js")
    if not os.path.exists(path): print(f"  SKIP {slug}"); return False
    with open(path) as f: src = f.read()
    m = re.search(r'window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;', src)
    if not m: print(f"  PARSE ERROR {slug}"); return False
    data = json.loads(m.group(1))
    if "meta" not in data: data["meta"] = {}
    if e.get("diagnosis"): data["meta"]["diagnosis"] = e["diagnosis"]
    data["meta"]["caseId"] = slug
    for k in ["problems","medications","labs","imaging"]:
        if k in e: data[k] = e[k]
    if "ddxTargets" in e:
        if "guided" not in data: data["guided"] = {}
        data["guided"]["ddxTargets"] = e["ddxTargets"]
    if "coachFinal" in e:
        if "guided" not in data: data["guided"] = {}
        if "coachPrompts" not in data["guided"]: data["guided"]["coachPrompts"] = {}
        data["guided"]["coachPrompts"]["final"] = e["coachFinal"]
    with open(path,'w') as f: f.write(f"\nwindow.EMR_DATA = {json.dumps(data,indent=2)};\n")
    return True

done = 0
for s,e in ENRICHMENTS.items():
    if enrich(s,e): print(f"✓ {s}"); done += 1
print(f"\nBatch 20: {done}/{len(ENRICHMENTS)} enriched")
