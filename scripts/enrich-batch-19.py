#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"acute-psychosis": {
  "diagnosis": "First-Episode Psychosis — Schizophrenia vs Substance-Induced vs Medical",
  "problems": [
    {"problem":"First-episode psychosis — differential workup required","icd":"F29","onset":"2024","status":"Active","notes":"Alex Torres, 22M — 3 weeks disorganized behavior, auditory hallucinations, social withdrawal. No prior psychiatric history. Rule out medical and substance causes before psychiatric diagnosis."},
    {"problem":"Cannabis use disorder — daily for 2 years","icd":"F12.20","onset":"2022","status":"Active","notes":"THC can trigger psychosis in genetically vulnerable individuals. Cannot diagnose schizophrenia with active heavy cannabis use."},
    {"problem":"Medical causes ruled out — anti-NMDA, metabolic, structural","icd":"F29","onset":"2024","status":"Active","notes":"Anti-NMDA receptor encephalitis antibodies negative. MRI brain normal. TSH, B12, glucose, electrolytes normal."}
  ],
  "medications": [
    {"name":"Risperidone 0.5mg QHS — titrate slowly","sig":"Start low in first episode — higher sensitivity to antipsychotics and EPS. Target 2-4mg/day. First-episode protocol.","prescriber":"Psychiatry","start":"2024","refills":1,"status":"Active"},
    {"name":"Lorazepam 1mg IM PRN — acute agitation","sig":"Behavioral control for acute agitation while workup proceeds.","prescriber":"Psychiatry","start":"2024","refills":0,"status":"PRN"},
    {"name":"Cannabis cessation counseling","sig":"Cannot diagnose schizophrenia with active heavy use. Cessation required for differential diagnosis.","prescriber":"Psychiatry","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"First-Episode Psychosis Workup","results":[
    {"test":"Urine drug screen","value":"THC positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"TSH","value":"2.4","unit":"mIU/L","ref":"0.4-4.0","flag":""},
    {"test":"B12","value":"312","unit":"pg/mL","ref":"200-900","flag":""},
    {"test":"Anti-NMDA receptor antibodies","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Glucose","value":"94","unit":"mg/dL","ref":"70-100","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"MRI Brain with and without Contrast","findings":"No structural abnormality. No midline shift, mass, or white matter changes. Normal hippocampal volumes.","impression":"Normal MRI brain. No structural cause for psychosis identified."}],
  "ddxTargets": ["First-episode schizophrenia (working diagnosis pending cannabis cessation and time)","Cannabis-induced psychotic disorder — heavy daily use; cannot distinguish from schizophrenia with active use","Anti-NMDA receptor encephalitis — autoimmune; antibodies negative here; must rule out","Bipolar I with psychotic features — assess for prior manic episodes; longitudinal diagnosis","Brief psychotic disorder — duration less than 1 month; approaching schizophreniform threshold"],
  "coachFinal": "Diagnosis: first-episode psychosis workup. Key learning: (1) First-episode psychosis requires mandatory medical workup before psychiatric diagnosis: UDS, metabolic panel, TSH, B12, RPR, HIV, anti-NMDA receptor antibodies, MRI brain. Anti-NMDA receptor encephalitis is treatable and mimics schizophrenia — missing it is catastrophic. (2) Cannabis and psychosis: THC is a major modifiable risk factor for psychosis, especially with early-onset heavy use. Heavy adolescent cannabis use increases lifetime schizophrenia risk 2-4x. Cannot diagnose schizophrenia with active heavy use — DSM-5 requires 1 month drug-free period. (3) Schizophrenia criteria: two or more of hallucinations, delusions, disorganized speech/behavior, negative symptoms for ≥1 month + social/occupational dysfunction ≥6 months. Schizophreniform = 1-6 months. (4) First-episode antipsychotic dosing: start LOW — first-episode patients are exquisitely sensitive to dopamine blockade and EPS. Use lowest effective dose. (5) Early intervention is critical — Coordinated Specialty Care (CSC) programs for first-episode psychosis are associated with significantly better long-term outcomes."
},
"acute-sma-embolism": {
  "diagnosis": "Acute Superior Mesenteric Artery Embolism — Mesenteric Ischemia",
  "problems": [
    {"problem":"Acute SMA embolism — mesenteric ischemia","icd":"K55.011","onset":"2024","status":"Active","notes":"Charles Kim, 72M — known AFib, not anticoagulated. Sudden severe periumbilical pain 4h ago, out of proportion to exam, nausea, vomiting, elevated lactate. AFib source most likely."},
    {"problem":"Atrial fibrillation — cardioembolic source","icd":"I48.0","onset":"2019","status":"Active","notes":"CHA2DS2-VASc 5. On aspirin only — subtherapeutic. Embolus from left atrial thrombus."},
    {"problem":"Pain out of proportion to exam — cardinal sign","icd":"K55.011","onset":"2024","status":"Active","notes":"Hallmark of mesenteric ischemia. Peritonitis appears LATE when bowel necrosis has occurred."}
  ],
  "medications": [
    {"name":"Heparin UFH 80 units/kg bolus + infusion — IMMEDIATE","sig":"Prevents clot propagation. Start before imaging if diagnosis suspected — every minute counts.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Emergent CT angiography abdomen — STAT","sig":"CTA with arterial phase is the diagnostic test of choice. Confirms SMA occlusion and guides intervention.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Ordered STAT"},
    {"name":"Surgical embolectomy OR catheter-directed thrombolysis","sig":"Embolic SMA: surgical embolectomy preferred if bowel viable. CDT if partial occlusion without peritoneal signs. Peritonitis = laparotomy + bowel resection.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Decision pending imaging"}
  ],
  "labs": [{"date":"04/2024","panel":"Mesenteric Ischemia","results":[
    {"test":"Lactate","value":"4.2","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"WBC","value":"22.4","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"D-dimer","value":"5200","unit":"ng/mL","ref":"<500","flag":"H"},
    {"test":"Phosphate","value":"5.8","unit":"mg/dL","ref":"2.5-4.5","flag":"H"},
    {"test":"ECG","value":"Atrial fibrillation — irregular, HR 104","unit":"","ref":"NSR","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Angiogram Abdomen — Arterial Phase","findings":"Filling defect in SMA approximately 6cm from origin — acute embolus. Small bowel loops showing early ischemic changes. No free air, no pneumatosis yet.","impression":"Acute SMA embolism with early small bowel ischemia. No perforation. Emergent surgical consultation."}],
  "ddxTargets": ["Acute SMA embolism — mesenteric ischemia (correct)","SMA thrombosis — atherosclerotic disease on CTA; gradual history of food fear; different from acute embolism","Non-occlusive mesenteric ischemia — low-flow state; no filling defect on CTA","Acute pancreatitis — lipase elevated; no SMA filling defect","Perforated peptic ulcer — free air on CT; peritoneal signs"],
  "coachFinal": "Diagnosis: acute SMA embolism. Key learning: (1) Cardinal sign: pain out of proportion to physical exam. Peritoneal signs are LATE — they appear when bowel necrosis and perforation have already occurred. Severe abdominal pain with a soft abdomen = mesenteric ischemia until proven otherwise. (2) Lactate is a late and non-specific marker — normal lactate does NOT rule out early mesenteric ischemia. Phosphate elevation reflects ischemic cell death and is also a late marker. (3) CTA arterial phase: filling defect in SMA (embolic) vs irregular vessel wall without discrete cutoff (thrombotic). Embolic occlusion usually at the first jejunal branch. (4) Time is bowel: bowel tolerates warm ischemia for approximately 6-12 hours before irreversible necrosis. From symptom onset to revascularization is the key metric. (5) Embolic vs thrombotic management: embolic → surgical embolectomy (fast, definitive). Thrombotic → endovascular stenting ± CDT. Non-occlusive (NOMI) → treat underlying low-flow state + papaverine infusion."
},
"acute-sma-thrombosis": {
  "diagnosis": "Acute SMA Thrombosis on Chronic Atherosclerotic Disease (Acute-on-Chronic Mesenteric Ischemia)",
  "problems": [
    {"problem":"Acute SMA thrombosis — atherosclerotic, acute-on-chronic","icd":"K55.012","onset":"2024","status":"Active","notes":"Helen Foster, 68F — known PAD, hypertension, diabetes. 6-month history of postprandial pain, food fear, 15 lb weight loss. Now acute severe pain — acute thrombosis superimposed on chronic stenosis."},
    {"problem":"Chronic mesenteric ischemia — intestinal angina preceding acute event","icd":"K55.1","onset":"2023","status":"Active","notes":"Classic intestinal angina: postprandial cramping 30-60 min after eating, food fear, weight loss from malabsorption. These symptoms warn of impending acute event."},
    {"problem":"Peripheral arterial disease — multisite atherosclerosis","icd":"I70.221","onset":"2010","status":"Active","notes":"Known CAD + PAD. SMA atherosclerosis is part of diffuse cardiovascular disease."}
  ],
  "medications": [
    {"name":"Heparin UFH — systemic anticoagulation","sig":"Prevents further propagation. Bridge to endovascular intervention.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Endovascular stenting + thrombus aspiration","sig":"SMA thrombosis: stent placement to restore patency. Thrombus aspiration if acute thrombus on plaque. Surgical bypass if endovascular fails.","prescriber":"Vascular Surgery/IR","start":"2024","refills":0,"status":"Procedure"},
    {"name":"Aspirin + clopidogrel — long-term antiplatelet","sig":"Post-stent dual antiplatelet. Minimum 1-6 months then reassess.","prescriber":"Vascular Surgery","start":"2024","refills":3,"status":"Planned"}
  ],
  "labs": [{"date":"04/2024","panel":"Acute Mesenteric Thrombosis","results":[
    {"test":"Lactate","value":"3.6","unit":"mmol/L","ref":"<2.0","flag":"H"},
    {"test":"WBC","value":"18.6","unit":"K/μL","ref":"4.5-11","flag":"H"},
    {"test":"ABI","value":"0.62 bilateral","unit":"","ref":"0.9-1.3","flag":"L"},
    {"test":"Weight trend","value":"15 lb loss over 6 months","unit":"","ref":"Stable","flag":"H"},
    {"test":"Albumin","value":"2.8","unit":"g/dL","ref":"3.5-5.0","flag":"L"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Angiogram Abdomen","findings":"Severe SMA atherosclerosis with >90% stenosis at origin plus acute occlusion. Diffuse atherosclerosis of mesenteric vessels. Bowel wall thickening. No free air.","impression":"Acute-on-chronic SMA thrombosis. Severe underlying atherosclerotic stenosis. No perforation."}],
  "ddxTargets": ["Acute SMA thrombosis — acute-on-chronic (correct)","Acute SMA embolism — no cardiac source; atherosclerotic CTA pattern distinguishes","Ischemic colitis — left colon distribution; different vessel territory","Non-occlusive mesenteric ischemia — no cardiac output failure state here","Chronic mesenteric ischemia alone — acute component now present"],
  "coachFinal": "Diagnosis: acute SMA thrombosis, acute-on-chronic. Key learning: (1) Chronic vs acute mesenteric ischemia: chronic = atherosclerotic stenosis, develops collaterals, food fear (postprandial pain), weight loss over months. Acute thrombotic = acute-on-chronic plaque rupture, often preceded by months of chronic symptoms — the warning signs that were missed. (2) Intestinal angina triad: postprandial pain (30-60 min after eating) + food fear (stops eating to avoid pain) + weight loss. This triad warrants CTA before acute event occurs — these patients can be stented electively. (3) Embolic vs thrombotic distinction on CTA: embolic = filling defect distal to first jejunal branch, no atherosclerosis, cardiac source. Thrombotic = origin-level occlusion, diffuse atherosclerosis, no cardiac source. (4) Management: endovascular stenting first-line for thrombotic occlusion. Second-look laparotomy in 24h standard after revascularization to assess bowel viability. (5) Weight loss and hypoalbuminemia are markers of chronic malabsorption from mesenteric ischemia — these should have prompted earlier investigation."
},
"acute-thrombotic-occlusion": {
  "diagnosis": "Acute Popliteal Artery Thrombosis from Popliteal Artery Aneurysm — Rutherford IIa",
  "problems": [
    {"problem":"Acute popliteal artery thrombosis — Rutherford IIa","icd":"I74.3","onset":"2024","status":"Active","notes":"Walter Davis, 71M — known PAD, prior claudication. Woke with cold right foot, weak pulses, paresthesias but no paralysis. Rutherford IIa — marginally threatened."},
    {"problem":"Popliteal artery aneurysm — thrombotic source","icd":"I72.4","onset":"2024","status":"Active","notes":"20% of acute limb ischemia from PAD has popliteal aneurysm as culprit — mural thrombus embolizes distally. Must be surgically excluded once limb salvaged."},
    {"problem":"Peripheral arterial disease — right lower extremity","icd":"I70.221","onset":"2019","status":"Active","notes":"Claudication at 1 block baseline. ABI 0.55. Atherosclerotic disease throughout the lower extremity arterial tree."}
  ],
  "medications": [
    {"name":"Heparin UFH — anticoagulation","sig":"Prevents propagation. Start immediately once diagnosis established.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Active"},
    {"name":"Catheter-directed thrombolysis — intra-arterial tPA","sig":"Rutherford IIa without motor deficit → CDT appropriate. Infuse tPA directly into clot for 12-24h.","prescriber":"Vascular Surgery/IR","start":"2024","refills":0,"status":"CDT procedure"},
    {"name":"Surgical popliteal aneurysm exclusion — after limb salvaged","sig":"Popliteal aneurysm must be surgically excluded (bypass graft + ligation) to prevent recurrent thromboembolism.","prescriber":"Vascular Surgery","start":"2024","refills":0,"status":"Planned — after CDT"}
  ],
  "labs": [{"date":"04/2024","panel":"ALI Assessment","results":[
    {"test":"ABI right (acute)","value":"0.22","unit":"","ref":"0.9-1.3 (was 0.55 baseline)","flag":"L"},
    {"test":"CK","value":"680","unit":"U/L","ref":"<200","flag":"H"},
    {"test":"Popliteal Duplex (bedside)","value":"Aneurysm 2.8cm right popliteal with intraluminal thrombus","unit":"","ref":"No aneurysm","flag":"H"},
    {"test":"Motor deficit","value":"None — plantar flexion and dorsiflexion intact","unit":"","ref":"Intact","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Angiogram — Right Lower Extremity","findings":"Right popliteal artery aneurysm 2.8cm with intraluminal thrombus. Occlusion of below-knee trifurcation vessels. Preserved femoral vessels. Moderate atherosclerosis throughout.","impression":"Popliteal artery aneurysm with acute thrombosis of below-knee run-off vessels. Rutherford IIa."}],
  "ddxTargets": ["Acute popliteal thrombosis from aneurysm — Rutherford IIa (correct)","Acute cardioembolic embolism — no AFib or cardiac source; atherosclerotic CTA pattern","DVT — venous, no ABI change, Homan sign different presentation","Peripheral arterial disease worsening — ABI drop from 0.55 to 0.22 = acute event, not gradual progression"],
  "coachFinal": "Diagnosis: acute popliteal artery thrombosis from popliteal aneurysm. Key learning: (1) Popliteal artery aneurysm is the most common peripheral aneurysm and the most dangerous — 25% of untreated popliteal aneurysms cause limb-threatening ischemia from thrombosis or embolization. Always look for popliteal aneurysm in acute limb ischemia. (2) Rutherford classification: IIa (marginally threatened) = paresthesias but NO paralysis, Doppler signals present. IIb (immediately threatened) = motor deficit. IIa → CDT appropriate. IIb → emergent surgery. (3) CDT rationale: in Rutherford IIa without motor deficit, CDT lysed over 12-24h opens distal run-off vessels and improves the surgical field for subsequent bypass. TOPAS trial showed similar outcomes to surgery with lower amputation rate. (4) Popliteal aneurysm management: after limb salvage, the aneurysm MUST be surgically excluded (bypass graft + proximal/distal ligation). Simply treating the acute thrombosis without excluding the aneurysm → near-certain recurrence. (5) Bilateral disease: 50% of popliteal aneurysms are bilateral — always image the contralateral limb."
},
"acute-viral-hepatitis": {
  "diagnosis": "Acute Hepatitis A — Foodborne, Occupational Shellfish Exposure",
  "problems": [
    {"problem":"Acute hepatitis A — icteric phase","icd":"B15.9","onset":"2024","status":"Active","notes":"Marco Rodriguez, 34M — restaurant worker, ate raw oysters 4 weeks ago. Now jaundice, dark urine, RUQ discomfort, fatigue. ALT 2400, AST 1800, bilirubin 8.2."},
    {"problem":"Occupational exposure — food service worker","icd":"Z57.5","onset":"2024","status":"Active","notes":"Unvaccinated food handler. HAV spreads via fecal-oral route. Public health notification required — coworkers and patrons may need post-exposure prophylaxis."},
    {"problem":"Coagulopathy monitoring — fulminant hepatitis risk","icd":"B15.9","onset":"2024","status":"Active","notes":"PT/INR 1.3 — borderline. Monitor closely. PT elevation signals hepatic synthetic dysfunction → risk of fulminant hepatitis."}
  ],
  "medications": [
    {"name":"Supportive care — IV hydration, antiemetics","sig":"No antiviral therapy for HAV. Treatment is supportive. Maintain hydration and nutrition. Avoid hepatotoxic drugs (acetaminophen, alcohol, NSAIDs).","prescriber":"Medicine/GI","start":"2024","refills":0,"status":"Active"},
    {"name":"Avoid all hepatotoxins — alcohol, acetaminophen, NSAIDs","sig":"Injured hepatocytes are vulnerable to further damage. Reinforce with patient — even standard doses of acetaminophen can cause harm during acute hepatitis.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active — counseling"},
    {"name":"HAV post-exposure prophylaxis for contacts","sig":"Contacts within 2 weeks of exposure: HAV vaccine (preferred, age <40) or IGIM. Notify public health department for contact tracing.","prescriber":"Public Health","start":"2024","refills":0,"status":"Initiated — PH notification"}
  ],
  "labs": [{"date":"04/2024","panel":"Acute Hepatitis Workup","results":[
    {"test":"ALT","value":"2400","unit":"U/L","ref":"7-56","flag":"H"},
    {"test":"AST","value":"1800","unit":"U/L","ref":"10-40","flag":"H"},
    {"test":"Total bilirubin","value":"8.2","unit":"mg/dL","ref":"0.2-1.2","flag":"H"},
    {"test":"HAV IgM antibody","value":"Positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"PT/INR","value":"1.3","unit":"","ref":"<1.2","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Right Upper Quadrant Ultrasound","findings":"Hepatomegaly. Increased hepatic echogenicity. No biliary dilation. No focal lesions. Normal spleen.","impression":"Hepatomegaly consistent with acute hepatitis. No obstructive cause."}],
  "ddxTargets": ["Acute hepatitis A — icteric phase (correct)","Acute hepatitis E — fecal-oral, similar presentation; common in developing countries; HEV serology distinguishes","Toxic hepatitis — drug or alcohol; history and toxicology distinguish; similar aminotransferase elevation","Acute hepatitis B — HBsAg, HBcAb-IgM; sexual/parenteral exposure history","Biliary obstruction — alkaline phosphatase-dominant pattern; CBD stone on ultrasound","Autoimmune hepatitis — ANA, ASMA; typically chronic presentation"],
  "coachFinal": "Diagnosis: acute hepatitis A. Key learning: (1) HAV transmission: fecal-oral route — contaminated food/water, person-to-person. Classic vehicles: raw shellfish (oysters, clams concentrate HAV), raw produce, contaminated water. Incubation 15-50 days (average 28 days). (2) Clinical phases: prodrome (fatigue, nausea, anorexia, RUQ discomfort) → icteric phase (jaundice, dark urine, pale stools, pruritus) → recovery. Self-limited in immunocompetent patients. No chronic carrier state. (3) Diagnosis: HAV IgM = acute infection (positive during acute illness and for ~6 months). HAV IgG = prior infection or vaccination. (4) Fulminant hepatitis risk factors: age >50, underlying liver disease, hepatitis C coinfection, immunosuppression. Monitor PT/INR — rising INR signals hepatic synthetic failure → transplant evaluation. (5) Public health obligations: HAV is a notifiable disease. Food handlers require public health notification, work exclusion until non-infectious (1 week after jaundice onset), and contact tracing. Post-exposure prophylaxis (vaccine or IGIM) within 2 weeks of exposure."
},
"adrenal-insufficiency": {
  "diagnosis": "Acute Adrenal Crisis (Addisonian Crisis) with Hyperkalemia",
  "problems": [
    {"problem":"Acute adrenal crisis — life-threatening","icd":"E27.2","onset":"2024","status":"Active","notes":"Patricia Moore, 48F — known Addison's disease, missed hydrocortisone for 3 days during GI illness. BP 72/44, HR 124, Na 128, K 6.2, glucose 54. Classic crisis precipitated by physiologic stress without sick-day dose increase."},
    {"problem":"Hyperkalemia 6.2 — from mineralocorticoid deficiency","icd":"E87.5","onset":"2024","status":"Active","notes":"Lack of aldosterone → renal potassium retention → hyperkalemia. ECG monitoring required."},
    {"problem":"Hyponatremia 128 — from mineralocorticoid and glucocorticoid deficiency","icd":"E87.1","onset":"2024","status":"Active","notes":"Mineralocorticoid deficiency → sodium wasting. Glucocorticoid deficiency impairs free water excretion."}
  ],
  "medications": [
    {"name":"Hydrocortisone 100mg IV bolus — IMMEDIATELY","sig":"Do NOT wait for lab confirmation. Give empirically if clinical suspicion high. Hydrocortisone at stress doses has mineralocorticoid activity — covers both glucocorticoid and mineralocorticoid needs acutely.","prescriber":"Emergency/Endocrinology","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Normal saline 1L IV bolus — IMMEDIATELY","sig":"Volume resuscitation. Use NS (not D5W) to correct hyponatremia and hypotension. Glucose also in IV fluid if hypoglycemic.","prescriber":"Emergency","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Fludrocortisone 0.1mg daily — after stabilization","sig":"Mineralocorticoid replacement for ongoing management. Not needed acutely if hydrocortisone dose is sufficient (>50mg has mineralocorticoid effect).","prescriber":"Endocrinology","start":"2024","refills":3,"status":"Resuming — after stabilization"}
  ],
  "labs": [{"date":"04/2024","panel":"Adrenal Crisis","results":[
    {"test":"Sodium","value":"128","unit":"mEq/L","ref":"136-145","flag":"L"},
    {"test":"Potassium","value":"6.2","unit":"mEq/L","ref":"3.5-5.0","flag":"H"},
    {"test":"Glucose","value":"54","unit":"mg/dL","ref":"70-100","flag":"L"},
    {"test":"Cortisol (random — do not delay treatment)","value":"2.1","unit":"μg/dL","ref":"Morning >18 μg/dL","flag":"L"},
    {"test":"ACTH","value":"<5","unit":"pg/mL","ref":"10-60 (low = secondary/central)","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Acute adrenal crisis — primary adrenal insufficiency (correct)","Septic shock — similar hemodynamics; but cortisol critically low; adrenal crisis can present identically","Hypovolemic shock — no classic electrolyte pattern; no known adrenal disease","Secondary adrenal insufficiency — ACTH low (as here); pituitary/hypothalamic cause; no hyperkalemia (aldosterone intact)","Hypoglycemia alone — glucose low but does not explain BP, sodium, potassium pattern"],
  "coachFinal": "Diagnosis: acute adrenal crisis. Key learning: (1) Treat first, test later. Never delay hydrocortisone while waiting for cortisol levels — a patient in adrenal crisis can die within hours. If diagnosis is uncertain, a random cortisol <18 μg/dL during stress is highly suggestive; <3 μg/dL is diagnostic. (2) Classic electrolyte triad: hyponatremia + hyperkalemia + hypoglycemia. This pattern in a hypotensive patient = adrenal crisis until proven otherwise. Primary adrenal insufficiency (Addison's): all three present (mineralocorticoid + glucocorticoid deficiency). Secondary adrenal insufficiency: no hyperkalemia (aldosterone intact, only glucocorticoid deficient). (3) Precipitating stressors: illness, surgery, trauma, or simply missing doses during GI illness when absorption is impaired. The 'sick-day rule': double or triple maintenance hydrocortisone dose during illness. (4) Hydrocortisone 100mg IV provides both glucocorticoid AND mineralocorticoid coverage acutely — fludrocortisone is not needed emergently. (5) After stabilization: identify and treat the precipitating cause, educate on sick-day rules, provide a steroid emergency card and injectable hydrocortisone kit for home."
},
"aki-differential": {
  "diagnosis": "Acute Kidney Injury — Prerenal vs Intrinsic (ATN) Differentiation",
  "problems": [
    {"problem":"Acute kidney injury — etiology undetermined","icd":"N17.9","onset":"2024","status":"Active","notes":"Robert Chen, 64M — creatinine 3.8 (baseline 1.1), BUN 68, oliguria. Recent NSAID use for back pain, CT contrast 3 days ago, hypotensive episode during GI illness. Multiple possible etiologies."},
    {"problem":"Oliguria — urine output <0.5mL/kg/hr","icd":"R34","onset":"2024","status":"Active","notes":"Key clinical marker. Prerenal and ATN both cause oliguria — urine indices distinguish."},
    {"problem":"Multiple nephrotoxin exposures — NSAIDs + contrast","icd":"N14.1","onset":"2024","status":"Active","notes":"NSAIDs reduce prostaglandin-mediated afferent arteriolar dilation → prerenal pattern. IV contrast → tubular toxicity (especially with volume depletion)."}
  ],
  "medications": [
    {"name":"IV fluid challenge — NS 500mL bolus","sig":"Diagnostic and therapeutic. Prerenal AKI will respond with urine output increase. ATN will not. Monitor urine output hourly.","prescriber":"Medicine/Nephrology","start":"2024","refills":0,"status":"Active"},
    {"name":"Hold all nephrotoxins — NSAIDs, contrast, ACE inhibitors","sig":"Remove all ongoing renal insults immediately. NSAIDs → afferent vasoconstriction. ACE inhibitors → efferent vasodilation → reduced GFR in already compromised kidney.","prescriber":"Medicine/Nephrology","start":"2024","refills":0,"status":"Active — held"},
    {"name":"Nephrology consultation","sig":"AKI with creatinine >3x baseline or oliguria >6h warrants nephrology involvement.","prescriber":"Medicine","start":"2024","refills":0,"status":"Consulted"}
  ],
  "labs": [{"date":"04/2024","panel":"AKI Differentiation","results":[
    {"test":"Creatinine","value":"3.8","unit":"mg/dL","ref":"0.7-1.3 (baseline 1.1)","flag":"H"},
    {"test":"BUN:Cr ratio","value":"17.9","unit":"","ref":">20 = prerenal; <20 = intrinsic","flag":""},
    {"test":"Urine sodium","value":"48","unit":"mEq/L","ref":"<20 = prerenal; >40 = ATN","flag":"H"},
    {"test":"FENa","value":"2.8","unit":"%","ref":"<1% = prerenal; >2% = ATN","flag":"H"},
    {"test":"Urine osmolality","value":"310","unit":"mOsm/kg","ref":">500 = prerenal; <350 = ATN","flag":"L"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Renal Ultrasound","findings":"Bilateral kidneys normal size, 11cm. No hydronephrosis. Normal cortical echogenicity. No stones or masses.","impression":"No obstructive uropathy. Normal renal size suggests acute rather than chronic process."}],
  "ddxTargets": ["ATN — contrast + NSAID nephrotoxicity + volume depletion (correct)","Prerenal AKI — BUN:Cr borderline; but FENa 2.8% and urine osmolality 310 = tubular dysfunction, not prerenal","Postrenal obstruction — ultrasound no hydronephrosis; rules out","Contrast-induced nephropathy alone — timing fits (3 days post-contrast); contributed but likely multifactorial","NSAID-induced prerenal — would show FENa <1%; FENa 2.8% indicates established ATN"],
  "coachFinal": "Diagnosis: acute tubular necrosis (ATN) — multifactorial. Key learning: (1) AKI differentiation: the three categories are prerenal (reduced perfusion, tubules intact), intrinsic (tubular/glomerular/vascular damage), and postrenal (obstruction). The urinary indices distinguish prerenal from ATN. (2) Key indices: FENa <1% = prerenal (tubules avidly reabsorbing sodium). FENa >2% = ATN (tubules damaged, cannot reabsorb). BUN:Cr >20 = prerenal (concentrated urine, BUN elevated from urea reabsorption). Urine osmolality >500 = prerenal (concentrating ability intact). (3) Caveat: FENa can be falsely low (<1%) in ATN from contrast, myoglobin, or early obstruction — use FEUrea (<35% = prerenal) in these cases. (4) Mud-brown granular casts on urinalysis = ATN (sloughed tubular epithelial cells). Hyaline casts = prerenal. RBC casts = glomerulonephritis. (5) Recovery from ATN: oliguric phase (days to weeks) → diuretic phase (polyuria from tubular recovery, risk of volume depletion and electrolyte abnormalities) → recovery phase."
},
"alcohol-withdrawal-seizures": {
  "diagnosis": "Alcohol Withdrawal Seizure — High-Risk for Delirium Tremens",
  "problems": [
    {"problem":"Alcohol withdrawal seizure — GTC, 48 hours post-cessation","icd":"F10.231","onset":"2024","status":"Active","notes":"Marcus Williams, 45M — daily alcohol use (>12 drinks/day) x 10 years. Last drink 48h ago. Witnessed GTC seizure x1. CIWA score 22. High risk for delirium tremens."},
    {"problem":"Delirium tremens risk — CIWA 22, prior DTs history","icd":"F10.231","onset":"2024","status":"Active","notes":"Risk factors for DTs: prior DTs, CIWA >15, concurrent benzodiazepine use, older age, poor nutritional status. DTs carries 5-15% mortality if untreated."},
    {"problem":"Thiamine deficiency — Wernicke risk","icd":"E51.2","onset":"2024","status":"Active","notes":"Chronic alcohol use → thiamine depletion. Glucose administration before thiamine → can precipitate Wernicke encephalopathy. Always give thiamine before dextrose."}
  ],
  "medications": [
    {"name":"Lorazepam 2mg IV — FIRST-LINE for seizure and withdrawal","sig":"Benzodiazepines are the gold standard for alcohol withdrawal seizure prevention and DTs. IV preferred for seizure. Symptom-triggered CIWA protocol after initial stabilization.","prescriber":"Emergency/Medicine","start":"2024","refills":0,"status":"Active — CIWA protocol"},
    {"name":"Thiamine 500mg IV TID x 3 days — BEFORE any dextrose","sig":"Thiamine before glucose is mandatory in any alcoholic patient. Glucose without thiamine → Wernicke encephalopathy (confusion, ophthalmoplegia, ataxia — the triad). Give thiamine first, always.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active — IV TID"},
    {"name":"Phenobarbital — adjunct for refractory withdrawal","sig":"For patients requiring very high benzodiazepine doses. Phenobarbital has GABA-A activity; useful for benzo-resistant withdrawal.","prescriber":"Medicine","start":"2024","refills":0,"status":"Available PRN"}
  ],
  "labs": [{"date":"04/2024","panel":"Alcohol Withdrawal Assessment","results":[
    {"test":"BAL","value":"0","unit":"mg/dL","ref":"0","flag":""},
    {"test":"Magnesium","value":"1.2","unit":"mg/dL","ref":"1.7-2.2","flag":"L"},
    {"test":"Phosphate","value":"1.8","unit":"mg/dL","ref":"2.5-4.5","flag":"L"},
    {"test":"CIWA score","value":"22","unit":"","ref":"<8 = mild; >15 = severe","flag":"H"},
    {"test":"Thiamine level","value":"Low","unit":"","ref":"Normal","flag":"L"}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Head Non-Contrast","findings":"No intracranial hemorrhage. No acute ischemic changes. No mass effect. Mild cerebral atrophy consistent with chronic alcohol use.","impression":"No structural cause for seizure. Findings consistent with alcohol withdrawal seizure."}],
  "ddxTargets": ["Alcohol withdrawal seizure — high risk DTs (correct)","New-onset epilepsy — consider if no clear alcohol history; EEG, MRI; but timing and history here = withdrawal","Subdural hematoma — trauma risk in alcoholics; CT head to rule out (done — normal)","Wernicke encephalopathy — encephalopathy + ophthalmoplegia + ataxia; treat empirically with thiamine anyway","Hypoglycemia — glucose before and after seizure; must rule out in any alcoholic patient"],
  "coachFinal": "Diagnosis: alcohol withdrawal seizure, high-risk for DTs. Key learning: (1) Alcohol withdrawal timeline: minor symptoms (tremor, anxiety, diaphoresis) 6-24h → seizures peak 24-48h → delirium tremens 48-72h (can occur up to 7 days). One seizure predicts risk for more and for DTs — treat aggressively. (2) Benzodiazepines are first-line: GABA-A agonism counteracts the GABA withdrawal state. Symptom-triggered CIWA protocol reduces total benzo dose and ICU days vs fixed schedule. CIWA >15 = severe, monitor continuously. (3) DTs: the most severe withdrawal syndrome. Autonomic hyperactivity (tachycardia, hypertension, fever, diaphoresis) + confusion + visual hallucinations. Mortality 5-15% untreated, <1% with treatment. CIWA >20 and prior DTs history = high risk. (4) Thiamine before glucose — always. Glucose administration in thiamine-deficient patient → pyruvate metabolism overwhelms residual thiamine → Wernicke encephalopathy (confusion, ophthalmoplegia, ataxia). Give 500mg IV thiamine TID for 3 days in severe withdrawal. (5) Phenobarbital adjunct: for benzo-resistant or high-dose benzo-requiring patients, phenobarbital provides additional GABA-A activity and reduces ICU admission rates."
},
"alcoholic-hepatitis": {
  "diagnosis": "Severe Alcoholic Hepatitis (Maddrey Discriminant Function >32)",
  "problems": [
    {"problem":"Severe alcoholic hepatitis — MDF 52","icd":"K70.10","onset":"2024","status":"Active","notes":"James O'Brien, 48M — 20-year heavy alcohol use, drinking until 2 weeks ago. Jaundice, hepatic encephalopathy grade II, tender hepatomegaly. MDF 52 (>32 = severe, 30-day mortality >50% without treatment)."},
    {"problem":"Hepatic encephalopathy — grade II","icd":"K72.00","onset":"2024","status":"Active","notes":"Asterixis present. Oriented to person and place but not time. Ammonia 94. Precipitated by GI bleed? Infection? Constipation?"},
    {"problem":"Infection risk — spontaneous bacterial peritonitis, pneumonia","icd":"K70.10","onset":"2024","status":"Active","notes":"Alcoholic hepatitis → immunosuppression. Screen for SBP (diagnostic paracentesis if ascites), UTI, pneumonia before starting steroids."}
  ],
  "medications": [
    {"name":"Prednisolone 40mg daily x 28 days — if no contraindications","sig":"Steroids improve 28-day survival in severe AH (MDF >32). Contraindications: active infection, GI bleeding, HBV/HCV coinfection (reactivation risk), renal failure. Lille score at day 7 predicts response.","prescriber":"Hepatology/GI","start":"2024","refills":0,"status":"Active — after infection ruled out"},
    {"name":"Pentoxifylline 400mg TID — if steroids contraindicated","sig":"Anti-TNF mechanism. Reduces hepatorenal syndrome risk. Used when steroids contraindicated. Less evidence than steroids but safer profile.","prescriber":"Hepatology/GI","start":"2024","refills":1,"status":"Alternative"},
    {"name":"Lactulose 30mL TID — hepatic encephalopathy","sig":"Reduces ammonia production. Titrate to 2-3 soft stools per day. Rifaximin 550mg BID can be added for refractory encephalopathy.","prescriber":"Hepatology","start":"2024","refills":1,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"Severe Alcoholic Hepatitis","results":[
    {"test":"Maddrey Discriminant Function","value":"52","unit":"","ref":"<32 = mild/moderate; >32 = severe","flag":"H"},
    {"test":"AST:ALT ratio","value":"2.8:1","unit":"","ref":">2:1 = alcoholic hepatitis","flag":"H"},
    {"test":"Total bilirubin","value":"18.4","unit":"mg/dL","ref":"0.2-1.2","flag":"H"},
    {"test":"PT/INR","value":"2.1","unit":"","ref":"<1.2","flag":"H"},
    {"test":"Ammonia","value":"94","unit":"μmol/L","ref":"<35","flag":"H"}
  ]}],
  "imaging": [{"date":"04/2024","study":"Right Upper Quadrant Ultrasound","findings":"Hepatomegaly with increased echogenicity consistent with fatty infiltration. Moderate ascites. No focal lesions. Normal bile ducts.","impression":"Hepatomegaly with ascites. Pattern consistent with alcoholic liver disease."}],
  "ddxTargets": ["Severe alcoholic hepatitis — MDF 52 (correct)","Autoimmune hepatitis — ANA, ASMA; responds to steroids but different patient profile and lab pattern","Acute hepatitis B — HBsAg; important to rule out before steroids (reactivation risk)","Acute-on-chronic liver failure — can coexist; alcoholic hepatitis is a common precipitant","Drug-induced liver injury — medication history; AST:ALT pattern can be similar"],
  "coachFinal": "Diagnosis: severe alcoholic hepatitis. Key learning: (1) Maddrey Discriminant Function (MDF) = 4.6 × (PT - control PT) + total bilirubin. MDF >32 = severe, 30-day mortality 30-50% without treatment. MELD >20 is an alternative severity marker. (2) AST:ALT ratio >2:1 is characteristic of alcoholic hepatitis — alcohol injures mitochondria → preferential AST release. ALT rarely exceeds 300 in alcoholic hepatitis. (3) Steroids in severe AH: prednisolone 40mg/day × 28 days improves 28-day survival. Must rule out: active infection (SBP, UTI, pneumonia), GI bleeding, renal failure, HBV coinfection. Lille score at day 7: if bilirubin not decreasing → non-responder → stop steroids. (4) Hepatic encephalopathy management: identify and treat precipitants (infection, GI bleed, constipation, medications). Lactulose + rifaximin. Avoid benzodiazepines and sedatives. (5) Prognosis: 90-day mortality for severe AH is 30-50%. Transplant evaluation controversial in acute AH — most centers require 6 months sobriety."
},
"alcoholic-ketoacidosis": {
  "diagnosis": "Alcoholic Ketoacidosis (AKA)",
  "problems": [
    {"problem":"Alcoholic ketoacidosis — high anion gap metabolic acidosis","icd":"E15","onset":"2024","status":"Active","notes":"Danny Walsh, 38M — chronic heavy alcohol use, stopped drinking 24h ago after 2 days of vomiting. Now confused, tachycardic, diffuse abdominal pain. AG 24, pH 7.22, ketones strongly positive, glucose 68."},
    {"problem":"Hypoglycemia 68 — impaired gluconeogenesis","icd":"E16.0","onset":"2024","status":"Active","notes":"Alcohol inhibits gluconeogenesis. Low glycogen stores from poor nutrition. Glucose may be low or normal in AKA (unlike DKA where glucose is elevated)."},
    {"problem":"Thiamine deficiency — Wernicke risk","icd":"E51.2","onset":"2024","status":"Active","notes":"Give thiamine before dextrose — essential in all alcoholic patients."}
  ],
  "medications": [
    {"name":"Thiamine 500mg IV — BEFORE dextrose","sig":"Mandatory. Glucose before thiamine in thiamine-depleted patient → Wernicke encephalopathy.","prescriber":"Emergency","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"D5 normal saline — dextrose + volume","sig":"Glucose corrects hypoglycemia and suppresses lipolysis → reduces ketone production. Volume corrects dehydration. Do NOT use insulin (not DKA — insulin not indicated and dangerous).","prescriber":"Emergency","start":"2024","refills":0,"status":"Active — IV infusion"},
    {"name":"Antiemetics — ondansetron 4mg IV","sig":"Control vomiting to allow resumption of oral intake. Continued vomiting perpetuates the cycle.","prescriber":"Emergency","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"04/2024","panel":"AKA Assessment","results":[
    {"test":"pH (venous)","value":"7.22","unit":"","ref":"7.32-7.42","flag":"L"},
    {"test":"Anion gap","value":"24","unit":"mEq/L","ref":"8-12","flag":"H"},
    {"test":"Glucose","value":"68","unit":"mg/dL","ref":"70-100","flag":"L"},
    {"test":"Beta-hydroxybutyrate","value":"Strongly positive","unit":"","ref":"Negative","flag":"H"},
    {"test":"Lactate","value":"2.8","unit":"mmol/L","ref":"<2.0","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Alcoholic ketoacidosis (correct)","DKA — glucose elevated (not low/normal); type 1 or 2 diabetes history; insulin deficiency","Starvation ketosis — ketonemia without acidosis; milder; no alcohol history","Lactic acidosis — lactate elevated here but not dominant; sepsis, metformin, cyanide","Methanol/ethylene glycol poisoning — osmolar gap elevated; specific toxicology screen"],
  "coachFinal": "Diagnosis: alcoholic ketoacidosis. Key learning: (1) AKA mechanism: alcohol inhibits gluconeogenesis + poor oral intake → glycogen depletion → lipolysis → free fatty acid oxidation → ketone production (predominantly beta-hydroxybutyrate). The NADH/NAD+ ratio shift from alcohol metabolism drives the process. (2) AKA vs DKA: key distinction is glucose. AKA = low or normal glucose. DKA = elevated glucose. Both have anion gap metabolic acidosis and ketonemia. AKA does NOT require insulin — giving insulin in AKA risks worsening hypoglycemia. (3) Beta-hydroxybutyrate dominates over acetoacetate in AKA (due to high NADH). Standard urine/serum ketone tests detect acetoacetate — may UNDERESTIMATE ketone burden in AKA. Serum beta-hydroxybutyrate is the correct test. (4) Treatment: thiamine THEN dextrose (corrects hypoglycemia and suppresses lipolysis), volume resuscitation, antiemetics, electrolyte repletion (Mg, K, phosphate — all depleted in alcoholics). Ketosis resolves within 12-24h with treatment. (5) Wernicke rule: thiamine 500mg IV BEFORE any glucose in every alcoholic patient, every time."
},
"alcoholrelated-pancreatitis": {
  "diagnosis": "Alcohol-Related Acute Pancreatitis",
  "problems": [
    {"problem":"Acute pancreatitis — alcohol-related, moderately severe","icd":"K85.20","onset":"2024","status":"Active","notes":"Sean Murphy, 38M — 10-year heavy alcohol use, 3rd episode. Severe epigastric pain radiating to back, lipase 3200, SIRS criteria met (HR 114, WBC 16, temp 38.2). BISAP score 2."},
    {"problem":"SIRS — early systemic inflammatory response","icd":"R65.10","onset":"2024","status":"Active","notes":"Two or more SIRS criteria = moderate-severe. Organ failure assessment crucial in first 24-48h."},
    {"problem":"Alcohol use disorder — driving recurrent pancreatitis","icd":"F10.20","onset":"2019","status":"Active","notes":"Three episodes in 3 years. Each episode causes permanent pancreatic damage. Progression to chronic pancreatitis and exocrine/endocrine insufficiency is inevitable with continued drinking."}
  ],
  "medications": [
    {"name":"Lactated Ringer's 250-500mL/hr — aggressive early hydration","sig":"LR superior to normal saline (reduces SIRS, acidosis — WATERFALL trial). Goal-directed: target BUN decrease, urine output 0.5-1mL/kg/hr. Avoid over-resuscitation → abdominal compartment syndrome.","prescriber":"Medicine/Surgery","start":"2024","refills":0,"status":"Active — LR at 300mL/hr"},
    {"name":"Early enteral nutrition — within 24-48h if tolerated","sig":"Nasojejunal tube feeds maintain gut barrier, reduce bacterial translocation, reduce infected necrosis risk. Superior to NPO + TPN. Low-fat diet if tolerating PO.","prescriber":"Medicine/Nutrition","start":"2024","refills":0,"status":"Active — low fat diet tolerated"},
    {"name":"Alcohol cessation counseling + naltrexone","sig":"Further alcohol use guarantees progression to chronic pancreatitis, exocrine insufficiency (steatorrhea), and pancreatic diabetes. Naltrexone reduces craving. Addiction referral.","prescriber":"Medicine/Addiction","start":"2024","refills":2,"status":"Initiated"}
  ],
  "labs": [{"date":"04/2024","panel":"Acute Pancreatitis Severity","results":[
    {"test":"Lipase","value":"3200","unit":"U/L","ref":"10-140","flag":"H"},
    {"test":"CRP (48h)","value":"220","unit":"mg/L","ref":"<10 (peaks 48-72h)","flag":"H"},
    {"test":"BUN","value":"22","unit":"mg/dL","ref":"7-20","flag":"H"},
    {"test":"Triglycerides","value":"280","unit":"mg/dL","ref":"<150","flag":"H"},
    {"test":"ALT","value":"38","unit":"U/L","ref":"7-56 (not elevated = not gallstone AP)","flag":""}
  ]}],
  "imaging": [{"date":"04/2024","study":"CT Abdomen/Pelvis with Contrast","findings":"Pancreatic edema and peripancreatic stranding. No pancreatic necrosis. No fluid collections. CTSI score 4 (moderate).","impression":"Moderate acute pancreatitis. No necrosis. Interstitial edematous pancreatitis."}],
  "ddxTargets": ["Alcohol-related acute pancreatitis (correct)","Gallstone pancreatitis — ALT >150 U/L suggests biliary; ALT normal here; ultrasound no CBD stone","Hypertriglyceridemia pancreatitis — TG 280 here is elevated but below 1000 threshold for TG-induced AP; contributing factor","Idiopathic pancreatitis — alcohol history is clear here","Peptic ulcer disease with perforation — free air on CT; different presentation"],
  "coachFinal": "Diagnosis: alcohol-related acute pancreatitis. Key learning: (1) Alcohol is the second most common cause of acute pancreatitis after gallstones (20-30% of cases). Mechanism: alcohol causes premature intracellular activation of trypsinogen → autodigestion. (2) Severity scoring: Revised Atlanta (organ failure duration), BISAP (BUN >25, impaired mental status, SIRS, age >60, pleural effusion — score 0-5), CTSI. Persistent organ failure (>48h) = severe. Transient organ failure or local complications = moderately severe. (3) Fluid choice: LR is superior to NS in acute pancreatitis — reduces SIRS and acidosis. WATERFALL trial confirmed this. Goal-directed fluid therapy is better than fixed rates. (4) Early EN rule: enteral nutrition within 24-48h reduces infected necrosis, ICU complications, and mortality. The old 'NPO + bowel rest' is harmful in moderately severe and severe AP. (5) Antibiotic rule: prophylactic antibiotics do NOT prevent infected necrosis (three RCTs failed). Only use antibiotics when infected necrosis confirmed by CT (gas in necrosis) or FNA."
},
"allergic-rhinitis-immunotherapy": {
  "diagnosis": "Allergic Rhinitis Refractory to Pharmacotherapy — Allergen Immunotherapy Candidate",
  "problems": [
    {"problem":"Moderate-severe allergic rhinitis — poorly controlled on maximal pharmacotherapy","icd":"J30.1","onset":"2018","status":"Active","notes":"Sarah Johnson, 28F — 6-year history perennial allergic rhinitis with tree/grass/dust mite sensitization. Tried intranasal steroids, antihistamines, montelukast without adequate control. Significantly affecting work and sleep."},
    {"problem":"Allergic sensitization — multiple aeroallergens confirmed","icd":"J30.1","onset":"2018","status":"Active","notes":"Skin prick testing: positive to dust mite (3+), oak (3+), timothy grass (2+), cat dander (2+). Multi-sensitized patient — appropriate for immunotherapy."},
    {"problem":"Sleep disruption and work impairment — quality of life impact","icd":"J30.1","onset":"2019","status":"Active","notes":"Nasal congestion disrupts sleep 4-5 nights/week. Cognitive impairment from poor sleep and antihistamines affecting performance."}
  ],
  "medications": [
    {"name":"Allergen immunotherapy — SCIT or SLIT","sig":"Subcutaneous immunotherapy (SCIT): build-up phase injections 1-2x/week x 4-6 months, then monthly maintenance x 3-5 years. SLIT (sublingual): daily under-tongue tablets/drops. Both modify underlying disease — unlike pharmacotherapy which only manages symptoms.","prescriber":"Allergy/Immunology","start":"2024","refills":0,"status":"Initiating — informed consent"},
    {"name":"Continue intranasal fluticasone — daily","sig":"Continue pharmacotherapy during build-up phase of immunotherapy. Can taper medications as immunotherapy takes effect (typically 6-12 months into maintenance).","prescriber":"Allergy/Immunology","start":"2020","refills":3,"status":"Active — continue"},
    {"name":"Cetirizine 10mg PRN — antihistamine rescue","sig":"As-needed for breakthrough symptoms during build-up phase and allergen exposures. Loratadine preferred if driving.","prescriber":"Allergy/Immunology","start":"2020","refills":3,"status":"PRN"}
  ],
  "labs": [{"date":"04/2024","panel":"Allergy Workup","results":[
    {"test":"Skin prick test — dust mite","value":"3+ (8mm wheal)","unit":"","ref":"Negative","flag":"H"},
    {"test":"Skin prick test — oak tree","value":"3+ (9mm wheal)","unit":"","ref":"Negative","flag":"H"},
    {"test":"Skin prick test — timothy grass","value":"2+ (6mm wheal)","unit":"","ref":"Negative","flag":"H"},
    {"test":"Total IgE","value":"280","unit":"IU/mL","ref":"<100","flag":"H"},
    {"test":"Spirometry","value":"Normal FEV1/FVC ratio","unit":"","ref":"No asthma component","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Allergic rhinitis refractory to pharmacotherapy — immunotherapy candidate (correct)","Non-allergic rhinitis (vasomotor) — skin testing negative; triggered by irritants not allergens","Chronic rhinosinusitis — CT sinus shows mucosal thickening; different management","Nasal polyps — endoscopy findings; anosmia; may coexist with allergic rhinitis","Deviated septum — structural; unilateral symptoms; surgical candidate"],
  "coachFinal": "Diagnosis: allergic rhinitis refractory to pharmacotherapy — allergen immunotherapy indicated. Key learning: (1) Immunotherapy is the only disease-modifying treatment for allergic rhinitis — it changes the underlying immune response rather than managing symptoms. Indications: inadequate control on pharmacotherapy, significant quality of life impairment, desire to reduce long-term medication burden, prevention of asthma development. (2) SCIT vs SLIT: SCIT (subcutaneous) has the strongest evidence, requires clinic visits, rare risk of systemic reaction (always observe 20-30 minutes post-injection). SLIT (sublingual) is self-administered at home, lower risk of systemic reactions, FDA-approved tablets for grass and dust mite. (3) Mechanism: immunotherapy induces tolerance by shifting TH2 (allergic) to TH1 and regulatory T-cell responses, increases blocking IgG4 antibodies, and reduces mast cell and basophil sensitivity. (4) Duration: 3-5 years of maintenance therapy provides long-lasting benefit (persisting years after stopping). Discontinuing early → relapse. (5) Asthma prevention: immunotherapy in allergic rhinitis reduces the risk of developing asthma (the allergic march). This is a key argument for early initiation in young patients."
},
"anticholinergic-toxicity": {
  "diagnosis": "Anticholinergic Toxidrome — Cumulative Anticholinergic Burden",
  "problems": [
    {"problem":"Anticholinergic toxidrome — polypharmacy-induced","icd":"T44.3X1A","onset":"2024","status":"Active","notes":"Eleanor Hayes, 78F — admitted for urinary retention, confusion, tachycardia. On oxybutynin (OAB), diphenhydramine (sleep), amitriptyline (pain), promethazine (nausea). Cumulative anticholinergic burden toxic."},
    {"problem":"Urinary retention — from anticholinergic bladder effect","icd":"R33.9","onset":"2024","status":"Active","notes":"Bladder detrusor inhibition from anticholinergic medications → urinary retention. Catheterization provides immediate relief."},
    {"problem":"Delirium — anticholinergic CNS effects","icd":"F05","onset":"2024","status":"Active","notes":"Confusion, agitation, visual hallucinations. Central anticholinergic syndrome from blood-brain barrier penetration (especially diphenhydramine and amitriptyline)."}
  ],
  "medications": [
    {"name":"Discontinue all anticholinergic medications — IMMEDIATE","sig":"Remove ALL offending agents: oxybutynin, diphenhydramine, amitriptyline, promethazine. The cumulative burden is toxic. Safer alternatives for each indication exist.","prescriber":"Medicine/Geriatrics","start":"STOP","refills":0,"status":"DISCONTINUED"},
    {"name":"Physostigmine 1-2mg IV slow push — for severe toxidrome","sig":"Reversible acetylcholinesterase inhibitor — crosses BBB, reverses central anticholinergic effects. Use for life-threatening delirium, seizures, severe hyperthermia. Not routine — have atropine available.","prescriber":"Medicine/Toxicology","start":"2024","refills":0,"status":"Available — severe cases"},
    {"name":"Urinary catheterization — immediate relief","sig":"Straight catheter or Foley for urinary retention. Residual volume >300mL confirms retention.","prescriber":"Medicine","start":"2024","refills":0,"status":"Done — 450mL residual"}
  ],
  "labs": [{"date":"04/2024","panel":"Anticholinergic Toxidrome","results":[
    {"test":"Heart rate","value":"118","unit":"bpm","ref":"60-100","flag":"H"},
    {"test":"Temperature","value":"38.3","unit":"°C","ref":"36.5-37.5","flag":"H"},
    {"test":"Post-void residual (catheterization)","value":"450","unit":"mL","ref":"<50 mL","flag":"H"},
    {"test":"Anticholinergic Drug Scale (ADS) score","value":"9 (4 medications × high burden)","unit":"","ref":"0-3 = low risk","flag":"H"},
    {"test":"ECG","value":"Sinus tachycardia, QTc 470ms","unit":"","ref":"QTc <450ms","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Anticholinergic toxidrome — cumulative burden (correct)","Sepsis with delirium — fever + tachycardia could suggest; but medication list and dry skin/urinary retention pattern","Serotonin syndrome — hyperreflexia, clonus, diaphoresis; NOT dry skin; different toxidrome","Neuroleptic malignant syndrome — severe rigidity, hyperthermia; recent antipsychotic; different","Delirium from other cause — UTI, hypoxia, metabolic; but medication list is the key finding here"],
  "coachFinal": "Diagnosis: anticholinergic toxidrome from cumulative drug burden. Key learning: (1) Anticholinergic mnemonic: 'Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter, full as a flask.' Hot (hyperthermia), blind (mydriasis), dry (dry skin, dry mouth, decreased secretions), red (flushing), mad (delirium, agitation), full (urinary retention). (2) Cumulative anticholinergic burden: single medications at therapeutic doses may not cause toxidrome; multiple medications with anticholinergic properties combined can cause severe toxicity. Beers Criteria lists medications to avoid in elderly — diphenhydramine, oxybutynin, amitriptyline, and promethazine are all high on this list. (3) Anticholinergic vs cholinergic toxidrome distinction: anticholinergic = dry skin, urinary retention, no secretions. Cholinergic (organophosphate) = SLUDGE (salivation, lacrimation, urination, defecation, GI distress, emesis) + diaphoresis. (4) Physostigmine: reverses central and peripheral anticholinergic effects. Reserved for severe cases — seizures, severe agitation, hemodynamic compromise. Have atropine at bedside (physostigmine can cause cholinergic crisis if overdosed). (5) QTc prolongation: amitriptyline and many antipsychotics prolong QTc via sodium channel blockade — monitor ECG and avoid other QTc-prolonging agents."
},
"anxiety-panic-attack": {
  "diagnosis": "Panic Attack with Hyperventilation Syndrome",
  "problems": [
    {"problem":"Panic attack — acute presentation, must rule out medical causes","icd":"F41.0","onset":"2024","status":"Active","notes":"Jennifer Kim, 26F — sudden onset palpitations, chest tightness, shortness of breath, dizziness, perioral numbness, fear of dying. No cardiac history. Must rule out PE, ACS, dysrhythmia before psychiatric diagnosis."},
    {"problem":"Hyperventilation-induced hypocapnia — respiratory alkalosis","icd":"R06.4","onset":"2024","status":"Active","notes":"Anxiety → hyperventilation → CO2 loss → respiratory alkalosis → hypocalcemia (ionized) → paresthesias, carpopedal spasm, dizziness. A self-reinforcing cycle."},
    {"problem":"Panic disorder — recurrent attacks affecting function","icd":"F41.0","onset":"2023","status":"Active","notes":"Third episode in 2 months. Avoidance behavior developing. Referral for CBT and consideration of SSRI treatment."}
  ],
  "medications": [
    {"name":"Lorazepam 0.5-1mg PO/SL — acute episode","sig":"Benzodiazepine for acute panic attack. Short-term only — risk of dependence with chronic use. Cognitive-behavioral therapy is the definitive treatment.","prescriber":"Emergency/Psychiatry","start":"2024","refills":0,"status":"PRN acute"},
    {"name":"Controlled breathing — rebreathing technique","sig":"Breathe through pursed lips or into cupped hands. Restores CO2, corrects respiratory alkalosis, breaks the hyperventilation cycle. First-line non-pharmacologic.","prescriber":"Emergency","start":"2024","refills":0,"status":"Taught"},
    {"name":"Sertraline 25mg daily — titrate to 50-200mg","sig":"SSRI first-line for panic disorder. Start low to avoid initial activation/anxiety. Full effect 4-6 weeks.","prescriber":"Psychiatry","start":"2024","refills":3,"status":"Initiating"}
  ],
  "labs": [{"date":"04/2024","panel":"Panic Attack Workup","results":[
    {"test":"ECG","value":"Sinus tachycardia 112 bpm. No ST changes. No delta waves.","unit":"","ref":"Normal","flag":"H"},
    {"test":"D-dimer","value":"0.38","unit":"mg/L","ref":"<0.5","flag":""},
    {"test":"Troponin I","value":"<0.01","unit":"ng/mL","ref":"<0.04","flag":""},
    {"test":"TSH","value":"1.8","unit":"mIU/L","ref":"0.4-4.0","flag":""},
    {"test":"ABG — pH","value":"7.52","unit":"","ref":"7.35-7.45 (respiratory alkalosis)","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Panic attack with hyperventilation (correct)","Pulmonary embolism — dyspnea + chest pain + tachycardia; D-dimer negative here = low risk (Wells score low)","Supraventricular tachycardia — episodic palpitations; ECG during episode distinguishes; sinus tachycardia here","Hyperthyroidism — anxiety, palpitations, weight loss; TSH normal","Pheochromocytoma — episodic hypertension + palpitations + diaphoresis; rare; 24h urine catecholamines if recurrent","ACS — troponin negative, ECG normal, young patient"],
  "coachFinal": "Diagnosis: panic attack with hyperventilation syndrome. Key learning: (1) Panic attack cannot be a primary diagnosis until medical causes are ruled out. The 'can't miss' diagnoses that mimic panic: PE (Wells criteria + D-dimer), SVT (ECG during episode), hyperthyroidism (TSH), hypoglycemia (glucose), pheochromocytoma (recurrent episodic hypertension), cocaine/stimulant use (UDS). (2) Hyperventilation physiology: anxiety → increased respiratory rate → CO2 loss → respiratory alkalosis (pH 7.52 as here) → decreased ionized calcium → perioral numbness, carpopedal spasm, tetany, dizziness. The symptoms reinforce anxiety → more hyperventilation — a viscous cycle. Correction: raise CO2 by breathing control. (3) DSM-5 panic disorder: recurrent unexpected panic attacks + ≥1 month of persistent concern about future attacks or maladaptive behavioral change. (4) Treatment: acute = benzodiazepine + breathing control. Long-term = CBT (first-line, addresses avoidance behavior) + SSRI (sertraline, escitalopram — prevent attacks). Combined CBT + SSRI superior to either alone. (5) Avoidance behavior is the most disabling consequence of panic disorder — CBT specifically targets this through systematic desensitization."
},
"anxietypanic-attack": {
  "diagnosis": "Acute Panic Attack with Hyperventilation Syndrome (Dyspnea-Predominant)",
  "problems": [
    {"problem":"Panic attack — dyspnea predominant presentation","icd":"F41.0","onset":"2024","status":"Active","notes":"Michael Chen, 31M — acute onset dyspnea, chest tightness, dizziness, perioral tingling. SpO2 99%. This presentation requires ruling out PE and cardiac causes before panic diagnosis."},
    {"problem":"Respiratory alkalosis — hyperventilation-induced","icd":"E87.3","onset":"2024","status":"Active","notes":"pH 7.54, pCO2 28. Classic hyperventilation pattern. Symptoms driven by hypocapnia and ionized hypocalcemia."},
    {"problem":"Panic disorder — third episode, work-related triggers","icd":"F41.0","onset":"2023","status":"Active","notes":"Attacks typically at work during high-stress situations. Avoidance of workplace presentations developing."}
  ],
  "medications": [
    {"name":"Controlled breathing coaching — first-line","sig":"Slow diaphragmatic breathing 4-6 breaths/min. Pursed-lip breathing or paper bag breathing restores CO2. Non-pharmacologic, no side effects, teaches self-management.","prescriber":"Emergency","start":"2024","refills":0,"status":"Taught — effective"},
    {"name":"Lorazepam 1mg SL — acute rescue","sig":"For breakthrough attacks not responding to breathing techniques. Limit to acute use only.","prescriber":"Emergency","start":"2024","refills":0,"status":"PRN"},
    {"name":"Escitalopram 5mg daily → 10-20mg — panic disorder","sig":"SSRI for panic disorder maintenance. Start low (5mg) to avoid initial anxiety. Full benefit 4-6 weeks.","prescriber":"Psychiatry","start":"2024","refills":3,"status":"Initiating"}
  ],
  "labs": [{"date":"04/2024","panel":"Dyspnea/Panic Workup","results":[
    {"test":"SpO2","value":"99","unit":"%","ref":"≥95%","flag":""},
    {"test":"ABG — pH","value":"7.54","unit":"","ref":"7.35-7.45","flag":"H"},
    {"test":"ABG — pCO2","value":"28","unit":"mmHg","ref":"35-45","flag":"L"},
    {"test":"D-dimer","value":"0.31","unit":"mg/L","ref":"<0.5","flag":""},
    {"test":"ECG","value":"Sinus tachycardia 108. Normal intervals. No ST changes.","unit":"","ref":"Normal","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Panic attack with hyperventilation — dyspnea predominant (correct)","PE — dyspnea + chest tightness + tachycardia; D-dimer negative, SpO2 99%, Wells score low = rules out","Asthma — wheeze, prolonged expiration; SpO2 normal; peak flow normal","Cardiac dysrhythmia — SVT; ECG during episode shows sinus tachycardia not SVT","Hyperthyroidism — anxiety + palpitations + heat intolerance; TSH normal"],
  "coachFinal": "Diagnosis: panic attack with hyperventilation. Key learning: (1) Dyspnea-predominant panic attacks are common diagnostic pitfalls — they trigger full PE/cardiac workups. The key is Bayesian reasoning: pretest probability matters. Young patient, no risk factors, SpO2 99%, normal ECG, negative D-dimer = low PE probability. But if ANY atypical feature, work it up. (2) Hyperventilation alkalosis: pCO2 28, pH 7.54 = primary respiratory alkalosis. This confirms hyperventilation as the driver. Ionized calcium falls with alkalosis → paresthesias, tingling, tetany. CO2 correction reverses all symptoms. (3) Panic attack vs anxiety attack: panic attacks are acute, often unexpected, peak within 10 minutes, involve intense physical symptoms. Generalized anxiety is chronic, cognitive/worry-dominant, not episodic. Different treatments. (4) Work-related panic triggers: situational panic often responds better to exposure therapy (CBT component) than medication alone. Avoidance of triggering situations → increasing disability. Early CBT prevents avoidance entrenchment. (5) SSRI mechanism in panic: reduces amygdala sensitivity to threat signals over 4-6 weeks. Paradoxically, SSRIs can worsen anxiety in the first 1-2 weeks — start low, warn patient."
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
print(f"\nBatch 19: {done}/{len(ENRICHMENTS)} enriched")
