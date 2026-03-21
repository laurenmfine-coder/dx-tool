/* js/rdx-order-catalog.js — ReasonDx Order Catalog
 * Full EMR-style order database for Standard/Advanced difficulty modes.
 * Categories: Labs, Imaging, Medications, Consults, Procedures
 * ~300 orders covering all major clinical scenarios
 */
(function() {
'use strict';

window.RDX_ORDER_CATALOG = [

  // ════════════════════════════════════════════════════════
  // LABS
  // ════════════════════════════════════════════════════════

  // Chemistry
  { id:'lab-bmp',         name:'Basic Metabolic Panel (BMP)',          cat:'Labs', sub:'Chemistry',     aliases:['bmp','chem7','basic metabolic','sodium potassium creatinine'] },
  { id:'lab-cmp',         name:'Comprehensive Metabolic Panel (CMP)',  cat:'Labs', sub:'Chemistry',     aliases:['cmp','comprehensive metabolic','liver function'] },
  { id:'lab-na',          name:'Sodium (Na)',                           cat:'Labs', sub:'Chemistry',     aliases:['sodium','na','hyponatremia'] },
  { id:'lab-k',           name:'Potassium (K)',                         cat:'Labs', sub:'Chemistry',     aliases:['potassium','k','hypo hyperkalemia'] },
  { id:'lab-bicarb',      name:'Bicarbonate (HCO3)',                    cat:'Labs', sub:'Chemistry',     aliases:['bicarb','bicarbonate','hco3','co2'] },
  { id:'lab-cr',          name:'Creatinine + BUN',                     cat:'Labs', sub:'Chemistry',     aliases:['creatinine','bun','renal function','kidney'] },
  { id:'lab-glucose',     name:'Glucose',                              cat:'Labs', sub:'Chemistry',     aliases:['glucose','sugar','blood sugar'] },
  { id:'lab-ca',          name:'Calcium',                              cat:'Labs', sub:'Chemistry',     aliases:['calcium','ca','hypercalcemia'] },
  { id:'lab-mg',          name:'Magnesium',                            cat:'Labs', sub:'Chemistry',     aliases:['magnesium','mg'] },
  { id:'lab-phos',        name:'Phosphate',                            cat:'Labs', sub:'Chemistry',     aliases:['phosphate','phos','phosphorus'] },
  { id:'lab-uric',        name:'Uric Acid',                            cat:'Labs', sub:'Chemistry',     aliases:['uric acid','gout','urate'] },
  { id:'lab-lfts',        name:'Liver Function Tests (LFTs)',          cat:'Labs', sub:'Chemistry',     aliases:['lft','liver','alt ast alp bilirubin','hepatic'] },
  { id:'lab-bili',        name:'Bilirubin (Total + Direct)',           cat:'Labs', sub:'Chemistry',     aliases:['bilirubin','bili','jaundice'] },
  { id:'lab-ammonia',     name:'Ammonia',                              cat:'Labs', sub:'Chemistry',     aliases:['ammonia','hepatic encephalopathy'] },
  { id:'lab-lipase',      name:'Lipase',                               cat:'Labs', sub:'Chemistry',     aliases:['lipase','pancreatitis','pancreatic'] },
  { id:'lab-amylase',     name:'Amylase',                              cat:'Labs', sub:'Chemistry',     aliases:['amylase','pancreatitis'] },
  { id:'lab-ldh',         name:'LDH',                                  cat:'Labs', sub:'Chemistry',     aliases:['ldh','lactate dehydrogenase','hemolysis'] },
  { id:'lab-albumin',     name:'Albumin',                              cat:'Labs', sub:'Chemistry',     aliases:['albumin','nutrition','protein'] },
  { id:'lab-tsh',         name:'TSH',                                  cat:'Labs', sub:'Chemistry',     aliases:['tsh','thyroid stimulating','thyroid function'] },
  { id:'lab-ft4',         name:'Free T4',                              cat:'Labs', sub:'Chemistry',     aliases:['free t4','ft4','thyroxine'] },
  { id:'lab-cortisol',    name:'Cortisol (AM)',                        cat:'Labs', sub:'Chemistry',     aliases:['cortisol','adrenal','addison'] },
  { id:'lab-hba1c',       name:'HbA1c',                               cat:'Labs', sub:'Chemistry',     aliases:['a1c','hba1c','hemoglobin a1c','diabetes'] },
  { id:'lab-iron',        name:'Iron Studies (Fe, TIBC, Ferritin)',    cat:'Labs', sub:'Chemistry',     aliases:['iron','ferritin','tibc','transferrin','anemia'] },
  { id:'lab-b12-folate',  name:'B12 + Folate',                        cat:'Labs', sub:'Chemistry',     aliases:['b12','folate','vitamin b12','macrocytic'] },
  { id:'lab-uricacid',    name:'Uric Acid',                           cat:'Labs', sub:'Chemistry',     aliases:['uric acid','urate','gout'] },

  // Hematology
  { id:'lab-cbc',         name:'Complete Blood Count (CBC)',           cat:'Labs', sub:'Hematology',   aliases:['cbc','complete blood count','wbc rbc hemoglobin hematocrit platelets'] },
  { id:'lab-cbc-diff',    name:'CBC with Differential',               cat:'Labs', sub:'Hematology',   aliases:['cbc diff','differential','neutrophils bands lymphocytes'] },
  { id:'lab-coags',       name:'PT/INR + aPTT',                       cat:'Labs', sub:'Hematology',   aliases:['coags','coagulation','pt inr aptt','clotting'] },
  { id:'lab-fibrinogen',  name:'Fibrinogen',                          cat:'Labs', sub:'Hematology',   aliases:['fibrinogen','dic','coagulopathy'] },
  { id:'lab-ddimer',      name:'D-Dimer',                             cat:'Labs', sub:'Hematology',   aliases:['d dimer','dvt','pe','thrombosis'] },
  { id:'lab-retic',       name:'Reticulocyte Count',                  cat:'Labs', sub:'Hematology',   aliases:['reticulocyte','retic','anemia workup'] },
  { id:'lab-haptoglobin', name:'Haptoglobin',                         cat:'Labs', sub:'Hematology',   aliases:['haptoglobin','hemolysis','aiha'] },
  { id:'lab-coombs',      name:'Direct Coombs (DAT)',                 cat:'Labs', sub:'Hematology',   aliases:['coombs','dat','direct antiglobulin','hemolysis'] },
  { id:'lab-pfa',         name:'Peripheral Blood Smear',              cat:'Labs', sub:'Hematology',   aliases:['peripheral smear','blood smear','morphology'] },
  { id:'lab-type-screen', name:'Type & Screen',                       cat:'Labs', sub:'Hematology',   aliases:['type screen','blood type','abo','crossmatch'] },
  { id:'lab-type-cross',  name:'Type & Crossmatch',                   cat:'Labs', sub:'Hematology',   aliases:['type crossmatch','cross match','blood product','transfusion'] },
  { id:'lab-tryptase',    name:'Serum Tryptase',                      cat:'Labs', sub:'Hematology',   aliases:['tryptase','mast cell','mastocytosis','anaphylaxis'] },

  // Cardiac
  { id:'lab-trop',        name:'Troponin I (High Sensitivity)',       cat:'Labs', sub:'Cardiac',      aliases:['troponin','trop','troponin i','mi','acs','nstemi'] },
  { id:'lab-bnp',         name:'BNP',                                 cat:'Labs', sub:'Cardiac',      aliases:['bnp','brain natriuretic','heart failure','chf'] },
  { id:'lab-ntprobnp',    name:'NT-proBNP',                           cat:'Labs', sub:'Cardiac',      aliases:['nt probnp','proBNP','heart failure'] },
  { id:'lab-ck',          name:'CK (CPK)',                            cat:'Labs', sub:'Cardiac',      aliases:['ck','cpk','creatine kinase','muscle','rhabdo'] },
  { id:'lab-ckmb',        name:'CK-MB',                              cat:'Labs', sub:'Cardiac',      aliases:['ck mb','ckmb','cardiac enzyme'] },

  // Infectious
  { id:'lab-bc-1',        name:'Blood Culture x2',                   cat:'Labs', sub:'Infectious',   aliases:['blood culture','cultures','bacteremia','sepsis'] },
  { id:'lab-ua',          name:'Urinalysis (UA)',                     cat:'Labs', sub:'Infectious',   aliases:['ua','urinalysis','urine','uti'] },
  { id:'lab-uc',          name:'Urine Culture',                      cat:'Labs', sub:'Infectious',   aliases:['urine culture','uc','uti','bacteria urine'] },
  { id:'lab-sputum',      name:'Sputum Culture + Gram Stain',        cat:'Labs', sub:'Infectious',   aliases:['sputum','respiratory culture','pneumonia gram stain'] },
  { id:'lab-csf',         name:'CSF Analysis (Lumbar Puncture)',     cat:'Labs', sub:'Infectious',   aliases:['csf','lumbar puncture','lp','meningitis','spinal fluid'] },
  { id:'lab-rp',          name:'Respiratory Panel (PCR)',             cat:'Labs', sub:'Infectious',   aliases:['respiratory panel','respiratory pcr','flu rsv covid'] },
  { id:'lab-covid',       name:'COVID-19 PCR',                       cat:'Labs', sub:'Infectious',   aliases:['covid','covid-19','sars','pcr'] },
  { id:'lab-flu',         name:'Influenza A/B',                      cat:'Labs', sub:'Infectious',   aliases:['flu','influenza','oseltamivir'] },
  { id:'lab-strep',       name:'Strep Throat Rapid',                 cat:'Labs', sub:'Infectious',   aliases:['strep','group a strep','rapid strep'] },
  { id:'lab-mono',        name:'Monospot / EBV Titers',              cat:'Labs', sub:'Infectious',   aliases:['monospot','ebv','mono','epstein barr'] },
  { id:'lab-hiv',         name:'HIV Ag/Ab (4th Gen)',                cat:'Labs', sub:'Infectious',   aliases:['hiv','hiv test','aids'] },
  { id:'lab-hepatitis',   name:'Hepatitis Panel (A, B, C)',          cat:'Labs', sub:'Infectious',   aliases:['hepatitis','hep b','hep c','liver virus'] },
  { id:'lab-rpr',         name:'RPR (Syphilis Screen)',              cat:'Labs', sub:'Infectious',   aliases:['rpr','syphilis','vdrl','treponema'] },
  { id:'lab-lyme',        name:'Lyme Serology (ELISA)',              cat:'Labs', sub:'Infectious',   aliases:['lyme','borrelia','tick','elisa western blot'] },
  { id:'lab-procalcitonin',name:'Procalcitonin',                     cat:'Labs', sub:'Infectious',   aliases:['procalcitonin','pct','bacterial','sepsis'] },
  { id:'lab-crp',         name:'C-Reactive Protein (CRP)',          cat:'Labs', sub:'Infectious',   aliases:['crp','c reactive protein','inflammation'] },
  { id:'lab-esr',         name:'ESR',                               cat:'Labs', sub:'Infectious',   aliases:['esr','sedimentation rate','inflammation'] },
  { id:'lab-cdiff',       name:'C. diff Toxin PCR',                 cat:'Labs', sub:'Infectious',   aliases:['c diff','cdiff','clostridium','diarrhea toxin'] },

  // ABG / Pulmonary
  { id:'lab-abg',         name:'Arterial Blood Gas (ABG)',           cat:'Labs', sub:'Pulmonary',    aliases:['abg','arterial blood gas','ph pco2 po2','acid base'] },
  { id:'lab-vbg',         name:'Venous Blood Gas (VBG)',             cat:'Labs', sub:'Pulmonary',    aliases:['vbg','venous blood gas'] },
  { id:'lab-lactate',     name:'Lactate',                            cat:'Labs', sub:'Pulmonary',    aliases:['lactate','lactic acid','sepsis','shock'] },
  { id:'lab-methemo',     name:'Methemoglobin Level',               cat:'Labs', sub:'Pulmonary',    aliases:['methemoglobin','methemo','co poisoning'] },
  { id:'lab-carboxyhgb',  name:'Carboxyhemoglobin',                 cat:'Labs', sub:'Pulmonary',    aliases:['carboxyhemoglobin','co','carbon monoxide'] },

  // Rheum/Immunology
  { id:'lab-ana',         name:'ANA with Reflex',                    cat:'Labs', sub:'Rheum/Immuno', aliases:['ana','antinuclear','lupus','autoimmune'] },
  { id:'lab-anti-dsdna',  name:'Anti-dsDNA',                        cat:'Labs', sub:'Rheum/Immuno', aliases:['anti dsdna','sle','lupus nephritis'] },
  { id:'lab-complement',  name:'Complement (C3, C4)',               cat:'Labs', sub:'Rheum/Immuno', aliases:['complement','c3 c4','lupus','vasculitis'] },
  { id:'lab-rf',          name:'Rheumatoid Factor (RF)',            cat:'Labs', sub:'Rheum/Immuno', aliases:['rf','rheumatoid factor','ra'] },
  { id:'lab-anti-ccp',    name:'Anti-CCP',                          cat:'Labs', sub:'Rheum/Immuno', aliases:['anti ccp','cyclic citrullinated peptide','ra'] },
  { id:'lab-anca',        name:'ANCA (c-ANCA, p-ANCA)',             cat:'Labs', sub:'Rheum/Immuno', aliases:['anca','c-anca p-anca','vasculitis','granulomatosis'] },
  { id:'lab-ige',         name:'Total IgE',                         cat:'Labs', sub:'Rheum/Immuno', aliases:['ige','total ige','allergy','atopy'] },
  { id:'lab-igg',         name:'Quantitative Immunoglobulins',      cat:'Labs', sub:'Rheum/Immuno', aliases:['igg iga igm','immunoglobulins','cvid','hypogammaglobulinemia'] },
  { id:'lab-c1inh',       name:'C1-Esterase Inhibitor Level + Function', cat:'Labs', sub:'Rheum/Immuno', aliases:['c1 inhibitor','c1inh','hae','angioedema'] },
  { id:'lab-adamts13',    name:'ADAMTS13 Level + Inhibitor',        cat:'Labs', sub:'Rheum/Immuno', aliases:['adamts13','ttp','thrombotic thrombocytopenic'] },

  // Toxicology
  { id:'lab-utox',        name:'Urine Toxicology Screen',           cat:'Labs', sub:'Toxicology',   aliases:['urine tox','utox','drug screen','overdose','toxicology'] },
  { id:'lab-etoh',        name:'Serum Ethanol Level',               cat:'Labs', sub:'Toxicology',   aliases:['ethanol','alcohol level','etoh','blood alcohol'] },
  { id:'lab-apap',        name:'Acetaminophen Level',               cat:'Labs', sub:'Toxicology',   aliases:['acetaminophen','apap','tylenol','overdose'] },
  { id:'lab-salicylate',  name:'Salicylate Level',                  cat:'Labs', sub:'Toxicology',   aliases:['salicylate','aspirin level','overdose'] },
  { id:'lab-digoxin',     name:'Digoxin Level',                     cat:'Labs', sub:'Toxicology',   aliases:['digoxin','digitalis','level'] },
  { id:'lab-vanc-trough', name:'Vancomycin Trough',                 cat:'Labs', sub:'Toxicology',   aliases:['vancomycin trough','vanco level','therapeutic monitoring'] },
  { id:'lab-phenytoin',   name:'Phenytoin Level',                   cat:'Labs', sub:'Toxicology',   aliases:['phenytoin','dilantin','level','seizure'] },

  // ════════════════════════════════════════════════════════
  // IMAGING
  // ════════════════════════════════════════════════════════

  { id:'img-cxr',         name:'Chest X-Ray (PA + Lateral)',         cat:'Imaging', sub:'X-Ray',    aliases:['cxr','chest x ray','chest radiograph','xray'] },
  { id:'img-cxr-ap',      name:'Chest X-Ray (AP — Portable)',        cat:'Imaging', sub:'X-Ray',    aliases:['portable cxr','ap cxr','supine xray'] },
  { id:'img-abdo-xr',     name:'Abdominal X-Ray (KUB)',              cat:'Imaging', sub:'X-Ray',    aliases:['kub','abdominal xray','flat upright','obstruction'] },
  { id:'img-pelvis-xr',   name:'Pelvis X-Ray',                       cat:'Imaging', sub:'X-Ray',    aliases:['pelvis xray','hip fracture','pelvis trauma'] },
  { id:'img-spine-xr',    name:'Spine X-Ray (C/T/L-spine)',         cat:'Imaging', sub:'X-Ray',    aliases:['spine xray','c-spine','lumbar xray','vertebral'] },
  { id:'img-extremity-xr',name:'Extremity X-Ray',                   cat:'Imaging', sub:'X-Ray',    aliases:['extremity xray','fracture','long bone','wrist ankle'] },

  { id:'img-ct-head',     name:'CT Head (Non-Contrast)',             cat:'Imaging', sub:'CT',       aliases:['ct head','head ct','brain ct','stroke bleed'] },
  { id:'img-ct-head-con', name:'CT Head with Contrast',             cat:'Imaging', sub:'CT',       aliases:['ct head contrast','enhanced brain','tumor abscess'] },
  { id:'img-cta-head',    name:'CTA Head + Neck',                   cat:'Imaging', sub:'CT',       aliases:['cta head','ct angiography','aneurysm','lvo','stroke'] },
  { id:'img-ct-chest',    name:'CT Chest',                          cat:'Imaging', sub:'CT',       aliases:['ct chest','chest ct','lung','nodule','pe'] },
  { id:'img-ctpa',        name:'CT Pulmonary Angiography (CTPA)',   cat:'Imaging', sub:'CT',       aliases:['ctpa','ct pulmonary angiography','pulmonary embolism','pe'] },
  { id:'img-ct-abd-pel',  name:'CT Abdomen + Pelvis (with contrast)', cat:'Imaging', sub:'CT',    aliases:['ct abdomen pelvis','ct ap','appendicitis','bowel'] },
  { id:'img-ct-abd-wo',   name:'CT Abdomen + Pelvis (without contrast)', cat:'Imaging', sub:'CT', aliases:['ct abdomen without contrast','kidney stone','urolithiasis'] },
  { id:'img-cta-abd',     name:'CTA Abdomen/Pelvis (Vascular)',     cat:'Imaging', sub:'CT',       aliases:['cta abdomen','mesenteric ischemia','aaa','aortic aneurysm'] },
  { id:'img-ct-spine',    name:'CT Spine (C/T/L)',                  cat:'Imaging', sub:'CT',       aliases:['ct spine','cervical','lumbar','cord compression'] },
  { id:'img-ct-sinus',    name:'CT Sinuses',                        cat:'Imaging', sub:'CT',       aliases:['ct sinus','sinusitis','maxillary','ethmoid'] },
  { id:'img-ct-neck',     name:'CT Neck with Contrast',             cat:'Imaging', sub:'CT',       aliases:['ct neck','neck mass','abscess','ludwig'] },

  { id:'img-mri-brain',   name:'MRI Brain with/without Gadolinium', cat:'Imaging', sub:'MRI',     aliases:['mri brain','brain mri','stroke ms tumor','gadolinium'] },
  { id:'img-mri-spine',   name:'MRI Spine (C/T/L)',                cat:'Imaging', sub:'MRI',     aliases:['mri spine','cord compression','cauda equina','disc'] },
  { id:'img-mri-heart',   name:'Cardiac MRI',                      cat:'Imaging', sub:'MRI',     aliases:['cardiac mri','cmr','myocarditis','cardiomyopathy'] },
  { id:'img-mrcp',        name:'MRCP',                             cat:'Imaging', sub:'MRI',     aliases:['mrcp','biliary','pancreatic duct','choledocholithiasis'] },

  { id:'img-echo-tte',    name:'Echocardiogram (TTE)',              cat:'Imaging', sub:'Ultrasound', aliases:['echo','tte','transthoracic echocardiogram','heart function','ef'] },
  { id:'img-echo-tee',    name:'Transesophageal Echo (TEE)',        cat:'Imaging', sub:'Ultrasound', aliases:['tee','transesophageal','endocarditis vegetation'] },
  { id:'img-us-abd',      name:'Abdominal Ultrasound',             cat:'Imaging', sub:'Ultrasound', aliases:['abdominal ultrasound','ruo pain','gallbladder','liver us'] },
  { id:'img-us-ruo',      name:'RUQ Ultrasound',                   cat:'Imaging', sub:'Ultrasound', aliases:['ruq ultrasound','right upper quadrant','gallbladder','bile duct'] },
  { id:'img-us-renal',    name:'Renal Ultrasound',                 cat:'Imaging', sub:'Ultrasound', aliases:['renal ultrasound','kidney us','hydronephrosis','obstruction'] },
  { id:'img-us-dvt',      name:'Lower Extremity Duplex (DVT)',     cat:'Imaging', sub:'Ultrasound', aliases:['leg doppler','dvt','duplex ultrasound','lower extremity us'] },
  { id:'img-us-carotid',  name:'Carotid Duplex Ultrasound',        cat:'Imaging', sub:'Ultrasound', aliases:['carotid ultrasound','duplex','carotid stenosis'] },
  { id:'img-us-pelvis',   name:'Pelvic Ultrasound (Transabdominal)', cat:'Imaging', sub:'Ultrasound', aliases:['pelvic ultrasound','pelvis us','ovary uterus','ectopic'] },
  { id:'img-us-tvus',     name:'Transvaginal Ultrasound (TVUS)',   cat:'Imaging', sub:'Ultrasound', aliases:['tvus','transvaginal','ectopic pregnancy','beta hcg'] },
  { id:'img-pocus',       name:'Point of Care Ultrasound (POCUS)', cat:'Imaging', sub:'Ultrasound', aliases:['pocus','bedside ultrasound','fast exam','trauma us'] },

  { id:'img-ekg',         name:'12-Lead ECG/EKG',                  cat:'Imaging', sub:'Cardiac',  aliases:['ekg','ecg','12 lead','electrocardiogram','arrhythmia','stemi'] },
  { id:'img-tele',        name:'Continuous Cardiac Telemetry',     cat:'Imaging', sub:'Cardiac',  aliases:['telemetry','continuous monitoring','cardiac monitor'] },
  { id:'img-holter',      name:'Holter Monitor (24-48h)',          cat:'Imaging', sub:'Cardiac',  aliases:['holter','ambulatory monitoring','arrhythmia outpatient'] },
  { id:'img-stress',      name:'Stress Test (Exercise)',           cat:'Imaging', sub:'Cardiac',  aliases:['stress test','exercise stress','treadmill','ischemia'] },
  { id:'img-nuc-stress',  name:'Nuclear Stress Test',             cat:'Imaging', sub:'Cardiac',  aliases:['nuclear stress','myocardial perfusion','spect','adenosine'] },

  { id:'img-vq',          name:'V/Q Scan',                        cat:'Imaging', sub:'Nuclear',  aliases:['v/q scan','ventilation perfusion','pe alternative','pulmonary embolism'] },
  { id:'img-bone-scan',   name:'Bone Scan',                       cat:'Imaging', sub:'Nuclear',  aliases:['bone scan','nuclear bone','metastasis','osteomyelitis'] },
  { id:'img-pet',         name:'PET Scan',                        cat:'Imaging', sub:'Nuclear',  aliases:['pet scan','pet ct','malignancy staging','fdg'] },

  // ════════════════════════════════════════════════════════
  // MEDICATIONS
  // ════════════════════════════════════════════════════════

  // Cardiac / Antihypertensive
  { id:'med-asa',         name:'Aspirin 325mg PO (chewed)',        cat:'Medications', sub:'Cardiac',       aliases:['aspirin','asa','325mg','antiplatelet'] },
  { id:'med-asa-81',      name:'Aspirin 81mg PO daily',           cat:'Medications', sub:'Cardiac',       aliases:['aspirin 81','baby aspirin','low dose asa'] },
  { id:'med-ticagrelor',  name:'Ticagrelor 180mg PO (load)',      cat:'Medications', sub:'Cardiac',       aliases:['ticagrelor','brilinta','p2y12','acs load'] },
  { id:'med-clopidogrel', name:'Clopidogrel 600mg PO (load)',     cat:'Medications', sub:'Cardiac',       aliases:['clopidogrel','plavix','p2y12','acs'] },
  { id:'med-heparin',     name:'Heparin 60u/kg IV bolus + drip', cat:'Medications', sub:'Cardiac',       aliases:['heparin','ufh','unfractionated','anticoagulation acs'] },
  { id:'med-enox',        name:'Enoxaparin (Lovenox) SQ',         cat:'Medications', sub:'Cardiac',       aliases:['enoxaparin','lovenox','lmwh','low molecular weight heparin','dvt pe'] },
  { id:'med-apixaban',    name:'Apixaban (Eliquis)',              cat:'Medications', sub:'Cardiac',       aliases:['apixaban','eliquis','doac','factor xa','af dvt'] },
  { id:'med-rivaroxaban', name:'Rivaroxaban (Xarelto)',           cat:'Medications', sub:'Cardiac',       aliases:['rivaroxaban','xarelto','doac','factor xa'] },
  { id:'med-warfarin',    name:'Warfarin (dose per INR)',         cat:'Medications', sub:'Cardiac',       aliases:['warfarin','coumadin','inr','vitamin k antagonist'] },
  { id:'med-ntg-sl',      name:'Nitroglycerin 0.4mg SL q5min x3', cat:'Medications', sub:'Cardiac',    aliases:['nitroglycerin','ntg','nitro sl','chest pain angina'] },
  { id:'med-ntg-drip',    name:'Nitroglycerin IV drip',           cat:'Medications', sub:'Cardiac',       aliases:['nitro drip','nitroglycerin iv','hypertensive emergency'] },
  { id:'med-metop-iv',    name:'Metoprolol 5mg IV push',          cat:'Medications', sub:'Cardiac',       aliases:['metoprolol iv','lopressor iv','beta blocker rate','afib'] },
  { id:'med-metop-po',    name:'Metoprolol Succinate 25mg PO',   cat:'Medications', sub:'Cardiac',       aliases:['metoprolol po','toprol','succinate','beta blocker'] },
  { id:'med-labetalol',   name:'Labetalol 20mg IV',              cat:'Medications', sub:'Cardiac',       aliases:['labetalol','trandate','alpha beta blocker','hypertensive'] },
  { id:'med-nicardipine', name:'Nicardipine IV drip',            cat:'Medications', sub:'Cardiac',       aliases:['nicardipine','calcium channel blocker','hypertensive emergency'] },
  { id:'med-amiodarone',  name:'Amiodarone 150mg IV (load)',     cat:'Medications', sub:'Cardiac',       aliases:['amiodarone','cordarone','vt vtach afib','antiarrhythmic'] },
  { id:'med-esmolol',     name:'Esmolol IV drip',                cat:'Medications', sub:'Cardiac',       aliases:['esmolol','brevibloc','rate control','aortic dissection'] },
  { id:'med-digoxin',     name:'Digoxin 0.25mg IV/PO',          cat:'Medications', sub:'Cardiac',       aliases:['digoxin','digitalis','afib rate','heart failure'] },
  { id:'med-furosemide',  name:'Furosemide (Lasix) 40mg IV',    cat:'Medications', sub:'Cardiac',       aliases:['furosemide','lasix','diuretic','chf','pulmonary edema'] },
  { id:'med-spiro',       name:'Spironolactone 25mg PO',         cat:'Medications', sub:'Cardiac',       aliases:['spironolactone','aldactone','aldosterone antagonist','hfref'] },
  { id:'med-lisinopril',  name:'Lisinopril 5mg PO',             cat:'Medications', sub:'Cardiac',       aliases:['lisinopril','ace inhibitor','acei','heart failure','htn'] },
  { id:'med-atorvastatin',name:'Atorvastatin 80mg PO',          cat:'Medications', sub:'Cardiac',       aliases:['atorvastatin','lipitor','statin','acs','lipid'] },
  { id:'med-tpa',         name:'Alteplase (tPA) — Dose per indication', cat:'Medications', sub:'Cardiac', aliases:['tpa','alteplase','thrombolytics','stroke pe stemi','fibrinolytic'] },
  { id:'med-pcc',         name:'4-Factor PCC (Kcentra) — Dose per INR', cat:'Medications', sub:'Cardiac', aliases:['pcc','kcentra','prothrombin complex','reversal','warfarin reversal','ich'] },
  { id:'med-andexanet',   name:'Andexanet Alfa (Andexxa)',       cat:'Medications', sub:'Cardiac',       aliases:['andexanet','andexxa','factor xa reversal','apixaban rivaroxaban reversal'] },

  // Vasopressors
  { id:'med-norepi',      name:'Norepinephrine IV drip',         cat:'Medications', sub:'Vasopressors',  aliases:['norepinephrine','levophed','norepi','vasopressor','septic shock'] },
  { id:'med-phenyl',      name:'Phenylephrine IV drip',          cat:'Medications', sub:'Vasopressors',  aliases:['phenylephrine','neo','vasopressor','distributive shock'] },
  { id:'med-vasopressin', name:'Vasopressin 0.03u/min IV',      cat:'Medications', sub:'Vasopressors',  aliases:['vasopressin','avp','septic shock','vasopressor'] },
  { id:'med-dopamine',    name:'Dopamine IV drip',               cat:'Medications', sub:'Vasopressors',  aliases:['dopamine','inopressor','cardiogenic shock'] },
  { id:'med-dobutamine',  name:'Dobutamine IV drip',             cat:'Medications', sub:'Vasopressors',  aliases:['dobutamine','inotrope','cardiogenic shock','heart failure'] },
  { id:'med-epi-drip',    name:'Epinephrine IV drip',            cat:'Medications', sub:'Vasopressors',  aliases:['epinephrine drip','adrenaline','cardiac arrest','refractory shock'] },

  // Pulmonary
  { id:'med-albuterol',   name:'Albuterol 2.5mg Nebulizer',     cat:'Medications', sub:'Pulmonary',     aliases:['albuterol','saba','bronchodilator','asthma','copd'] },
  { id:'med-ipratropium', name:'Ipratropium Nebulizer',         cat:'Medications', sub:'Pulmonary',     aliases:['ipratropium','atrovent','anticholinergic','copd','sama'] },
  { id:'med-duonebs',     name:'Albuterol + Ipratropium (DuoNeb)', cat:'Medications', sub:'Pulmonary',  aliases:['duonebs','combivent','albuterol ipratropium','combined nebs'] },
  { id:'med-methylpred',  name:'Methylprednisolone 125mg IV',   cat:'Medications', sub:'Pulmonary',     aliases:['methylprednisolone','solumedrol','steroids iv','asthma copd exacerbation'] },
  { id:'med-heliox',      name:'Heliox 70:30',                  cat:'Medications', sub:'Pulmonary',     aliases:['heliox','helium oxygen','severe asthma','status asthmaticus'] },
  { id:'med-mgso4',       name:'Magnesium Sulfate 2g IV',       cat:'Medications', sub:'Pulmonary',     aliases:['magnesium sulfate','mg so4','asthma bronchospasm','eclampsia'] },

  // Antibiotics
  { id:'med-vanc',        name:'Vancomycin IV (weight-based)',   cat:'Medications', sub:'Antibiotics',   aliases:['vancomycin','vanco','mrsa','gram positive'] },
  { id:'med-pip-tazo',    name:'Piperacillin-Tazobactam (Zosyn) IV', cat:'Medications', sub:'Antibiotics', aliases:['pip tazo','zosyn','broad spectrum','gram negative pseudomonas'] },
  { id:'med-ceftriaxone', name:'Ceftriaxone 1g IV',             cat:'Medications', sub:'Antibiotics',   aliases:['ceftriaxone','rocephin','cap','meningitis','uti'] },
  { id:'med-cefepime',    name:'Cefepime 2g IV',                cat:'Medications', sub:'Antibiotics',   aliases:['cefepime','maxipime','febrile neutropenia','pseudomonas'] },
  { id:'med-meropenem',   name:'Meropenem 1g IV',               cat:'Medications', sub:'Antibiotics',   aliases:['meropenem','merrem','carbapenem','resistant organisms'] },
  { id:'med-metronidazole',name:'Metronidazole 500mg IV/PO',    cat:'Medications', sub:'Antibiotics',   aliases:['metronidazole','flagyl','anaerobes','cdiff','intraabdominal'] },
  { id:'med-azithromycin',name:'Azithromycin 500mg IV/PO',      cat:'Medications', sub:'Antibiotics',   aliases:['azithromycin','zpack','z-pak','atypical','cap'] },
  { id:'med-ampicillin',  name:'Ampicillin-Sulbactam (Unasyn) IV', cat:'Medications', sub:'Antibiotics', aliases:['ampicillin sulbactam','unasyn','aspiration pneumonia','anaerobes'] },
  { id:'med-doxycycline', name:'Doxycycline 100mg PO/IV',       cat:'Medications', sub:'Antibiotics',   aliases:['doxycycline','lyme','atypicals','community acquired'] },
  { id:'med-cipro',       name:'Ciprofloxacin 400mg IV',        cat:'Medications', sub:'Antibiotics',   aliases:['ciprofloxacin','cipro','fluoroquinolone','uti gram negative'] },
  { id:'med-acyclovir',   name:'Acyclovir 10mg/kg IV q8h',      cat:'Medications', sub:'Antibiotics',   aliases:['acyclovir','zovirax','hsv','encephalitis','eczema herpeticum'] },
  { id:'med-trimethoprim',name:'TMP-SMX (Bactrim) IV',          cat:'Medications', sub:'Antibiotics',   aliases:['tmp smx','bactrim','trimethoprim sulfamethoxazole','pcp prophylaxis'] },
  { id:'med-fluconazole', name:'Fluconazole 400mg IV/PO',       cat:'Medications', sub:'Antibiotics',   aliases:['fluconazole','diflucan','candida','fungal'] },
  { id:'med-micafungin',  name:'Micafungin 100mg IV',           cat:'Medications', sub:'Antibiotics',   aliases:['micafungin','mycamine','echinocandin','candida','febrile neutropenia'] },

  // Neurology
  { id:'med-lorazepam',   name:'Lorazepam 2mg IV/IM',           cat:'Medications', sub:'Neurology',     aliases:['lorazepam','ativan','benzo','seizure','status epilepticus'] },
  { id:'med-diazepam',    name:'Diazepam 5mg IV',               cat:'Medications', sub:'Neurology',     aliases:['diazepam','valium','benzo','seizure'] },
  { id:'med-levetiracetam',name:'Levetiracetam (Keppra) 60mg/kg IV', cat:'Medications', sub:'Neurology', aliases:['levetiracetam','keppra','seizure','epilepsy','second line'] },
  { id:'med-valproate',   name:'Valproate IV 40mg/kg',          cat:'Medications', sub:'Neurology',     aliases:['valproate','depakote','vpa','seizure status epilepticus'] },
  { id:'med-mannitol',    name:'Mannitol 0.5-1g/kg IV',         cat:'Medications', sub:'Neurology',     aliases:['mannitol','osmotic diuretic','icp','herniation','cerebral edema'] },
  { id:'med-hts',         name:'3% Hypertonic Saline',          cat:'Medications', sub:'Neurology',     aliases:['hypertonic saline','3%','hts','icp','herniation','hyponatremia'] },
  { id:'med-dexamethasone',name:'Dexamethasone 10mg IV',        cat:'Medications', sub:'Neurology',     aliases:['dexamethasone','decadron','steroid','cerebral edema','meningitis'] },

  // Allergy / Anaphylaxis
  { id:'med-epi-im',      name:'Epinephrine 0.3mg IM (EpiPen)',  cat:'Medications', sub:'Allergy',      aliases:['epinephrine','epipen','anaphylaxis','0.3mg im','adrenaline'] },
  { id:'med-diphenhydramine',name:'Diphenhydramine 25mg IV/IM',  cat:'Medications', sub:'Allergy',      aliases:['diphenhydramine','benadryl','antihistamine','h1 blocker'] },
  { id:'med-famotidine',  name:'Famotidine 20mg IV',             cat:'Medications', sub:'Allergy',      aliases:['famotidine','pepcid','h2 blocker','anaphylaxis','heartburn'] },
  { id:'med-hydrocort',   name:'Hydrocortisone 200mg IV',        cat:'Medications', sub:'Allergy',      aliases:['hydrocortisone','cortisol','steroid iv','anaphylaxis','adrenal crisis'] },
  { id:'med-cetirizine',  name:'Cetirizine 10mg PO',            cat:'Medications', sub:'Allergy',      aliases:['cetirizine','zyrtec','antihistamine','h1','urticaria'] },
  { id:'med-icatibant',   name:'Icatibant 30mg SQ',             cat:'Medications', sub:'Allergy',      aliases:['icatibant','firazyr','bradykinin','hae','angioedema'] },
  { id:'med-c1inh-conc',  name:'C1-INH Concentrate (Berinert/Haegarda)', cat:'Medications', sub:'Allergy', aliases:['c1 inhibitor','berinert','haegarda','hae treatment','angioedema'] },

  // Pain / Sedation
  { id:'med-morphine',    name:'Morphine 4mg IV q4h PRN',        cat:'Medications', sub:'Pain/Sedation', aliases:['morphine','ms contin','opioid','pain','chest pain'] },
  { id:'med-hydromorphone',name:'Hydromorphone (Dilaudid) 0.5mg IV', cat:'Medications', sub:'Pain/Sedation', aliases:['hydromorphone','dilaudid','opioid','pain','analgesic'] },
  { id:'med-ketorolac',   name:'Ketorolac 15mg IV',             cat:'Medications', sub:'Pain/Sedation', aliases:['ketorolac','toradol','nsaid','pain','renal colic','anti-inflammatory'] },
  { id:'med-ibuprofen',   name:'Ibuprofen 600mg PO',            cat:'Medications', sub:'Pain/Sedation', aliases:['ibuprofen','advil','nsaid','anti-inflammatory','pericarditis'] },
  { id:'med-acetaminophen',name:'Acetaminophen 1g IV/PO',       cat:'Medications', sub:'Pain/Sedation', aliases:['acetaminophen','tylenol','apap','fever','pain'] },
  { id:'med-colchicine',  name:'Colchicine 0.6mg PO',          cat:'Medications', sub:'Pain/Sedation', aliases:['colchicine','gout','pericarditis','anti-inflammatory'] },
  { id:'med-propofol',    name:'Propofol IV drip',              cat:'Medications', sub:'Pain/Sedation', aliases:['propofol','diprivan','sedation','icu','intubation'] },
  { id:'med-ketamine',    name:'Ketamine 1-2mg/kg IV',          cat:'Medications', sub:'Pain/Sedation', aliases:['ketamine','dissociative','rsi induction','procedural sedation','pain'] },
  { id:'med-fentanyl',    name:'Fentanyl 1mcg/kg IV',          cat:'Medications', sub:'Pain/Sedation', aliases:['fentanyl','opioid','procedural sedation','intubation analgesia'] },
  { id:'med-midazolam',   name:'Midazolam 2mg IV',             cat:'Medications', sub:'Pain/Sedation', aliases:['midazolam','versed','benzo','procedural sedation','seizure'] },

  // GI
  { id:'med-ppi-iv',      name:'Pantoprazole 40mg IV',          cat:'Medications', sub:'GI',            aliases:['pantoprazole','ppi','protonix','gi bleed','ulcer'] },
  { id:'med-octreotide',  name:'Octreotide 50mcg IV + drip',   cat:'Medications', sub:'GI',            aliases:['octreotide','sandostatin','variceal','gi bleed','portal hypertension'] },
  { id:'med-ondansetron', name:'Ondansetron (Zofran) 4mg IV',  cat:'Medications', sub:'GI',            aliases:['ondansetron','zofran','antiemetic','nausea vomiting','fpies'] },
  { id:'med-promethazine',name:'Promethazine 25mg IV',         cat:'Medications', sub:'GI',            aliases:['promethazine','phenergan','antiemetic','nausea migraine'] },
  { id:'med-prochlorperazine',name:'Prochlorperazine 10mg IV', cat:'Medications', sub:'GI',            aliases:['prochlorperazine','compazine','antiemetic','migraine','nausea'] },
  { id:'med-neostig',     name:'Neostigmine IV (Ileus)',        cat:'Medications', sub:'GI',            aliases:['neostigmine','ileus','ogilvie','colonic pseudo-obstruction'] },
  { id:'med-lactulose',   name:'Lactulose 30mL PO/PR',         cat:'Medications', sub:'GI',            aliases:['lactulose','hepatic encephalopathy','ammonia','laxative'] },
  { id:'med-rifaximin',   name:'Rifaximin 550mg PO',           cat:'Medications', sub:'GI',            aliases:['rifaximin','xifaxan','hepatic encephalopathy','prevention'] },

  // Endocrine
  { id:'med-insulin-drip',name:'Regular Insulin IV drip',      cat:'Medications', sub:'Endocrine',     aliases:['insulin drip','regular insulin','dka','iii hyperkalemia'] },
  { id:'med-dextrose',    name:'Dextrose 50% (D50) 1 amp IV',  cat:'Medications', sub:'Endocrine',     aliases:['d50','dextrose','glucose','hypoglycemia'] },
  { id:'med-levothyroxine',name:'Levothyroxine IV',             cat:'Medications', sub:'Endocrine',     aliases:['levothyroxine','synthroid','hypothyroid','myxedema coma'] },
  { id:'med-ptu',         name:'PTU 200mg PO',                  cat:'Medications', sub:'Endocrine',     aliases:['ptu','propylthiouracil','thyroid storm','hyperthyroid'] },
  { id:'med-methimazole', name:'Methimazole 20mg PO',           cat:'Medications', sub:'Endocrine',     aliases:['methimazole','tapazole','hyperthyroid','graves disease'] },
  { id:'med-glucagon',    name:'Glucagon 1mg IM',               cat:'Medications', sub:'Endocrine',     aliases:['glucagon','hypoglycemia','beta blocker overdose'] },

  // Antidotes
  { id:'med-nac',         name:'N-Acetylcysteine (NAC) IV/PO', cat:'Medications', sub:'Antidotes',     aliases:['nac','n acetylcysteine','acetylcysteine','tylenol overdose','acetaminophen'] },
  { id:'med-naloxone',    name:'Naloxone 0.4mg IV/IM/IN',      cat:'Medications', sub:'Antidotes',     aliases:['naloxone','narcan','opioid reversal','overdose'] },
  { id:'med-flumazenil',  name:'Flumazenil 0.2mg IV',           cat:'Medications', sub:'Antidotes',     aliases:['flumazenil','romazicon','benzo reversal'] },
  { id:'med-atropine',    name:'Atropine 0.5mg IV',             cat:'Medications', sub:'Antidotes',     aliases:['atropine','organophosphate','bradycardia','cholinergic toxidrome'] },
  { id:'med-pralidoxime', name:'Pralidoxime (2-PAM) IV',        cat:'Medications', sub:'Antidotes',     aliases:['pralidoxime','2-pam','organophosphate','nerve agent'] },
  { id:'med-sodium-bicarb',name:'Sodium Bicarbonate 1mEq/kg IV', cat:'Medications', sub:'Antidotes',   aliases:['sodium bicarbonate','bicarb drip','tca overdose','salicylate','acidosis'] },
  { id:'med-cyproheptadine',name:'Cyproheptadine 12mg PO',      cat:'Medications', sub:'Antidotes',    aliases:['cyproheptadine','periactin','serotonin syndrome','5-ht antagonist'] },
  { id:'med-dantrolene',  name:'Dantrolene 2.5mg/kg IV',        cat:'Medications', sub:'Antidotes',     aliases:['dantrolene','nms','malignant hyperthermia','muscle relaxant'] },

  // ════════════════════════════════════════════════════════
  // CONSULTS
  // ════════════════════════════════════════════════════════

  { id:'con-cardiology',  name:'Cardiology Consult',             cat:'Consults', sub:'Medical',       aliases:['cardiology','cardiologist','acs','heart failure','arrhythmia','cardiac'] },
  { id:'con-ep',          name:'Electrophysiology (EP) Consult', cat:'Consults', sub:'Medical',      aliases:['ep consult','electrophysiology','arrhythmia icd','pacemaker'] },
  { id:'con-pulm',        name:'Pulmonology Consult',            cat:'Consults', sub:'Medical',       aliases:['pulmonology','pulm','respiratory','bronchoscopy','ards','ild'] },
  { id:'con-nephro',      name:'Nephrology Consult',             cat:'Consults', sub:'Medical',       aliases:['nephrology','nephro','aki ckd','dialysis','glomerulonephritis'] },
  { id:'con-gi',          name:'Gastroenterology Consult',       cat:'Consults', sub:'Medical',       aliases:['gastroenterology','gi','endoscopy','gi bleed','hepatology'] },
  { id:'con-hepatology',  name:'Hepatology Consult',             cat:'Consults', sub:'Medical',       aliases:['hepatology','liver','cirrhosis','transplant','hepatitis'] },
  { id:'con-neuro',       name:'Neurology Consult',              cat:'Consults', sub:'Medical',       aliases:['neurology','neurologist','stroke','seizure','ms','guillain barre'] },
  { id:'con-neurosurg',   name:'Neurosurgery Consult',           cat:'Consults', sub:'Surgical',      aliases:['neurosurgery','brain surgery','craniotomy','spinal','epidural hematoma'] },
  { id:'con-rheum',       name:'Rheumatology Consult',           cat:'Consults', sub:'Medical',       aliases:['rheumatology','rheum','sle','ra','vasculitis','inflammatory arthritis'] },
  { id:'con-id',          name:'Infectious Disease Consult',     cat:'Consults', sub:'Medical',       aliases:['infectious disease','id consult','bacteremia','endocarditis','osteomyelitis'] },
  { id:'con-heme',        name:'Hematology/Oncology Consult',    cat:'Consults', sub:'Medical',       aliases:['hematology','oncology','heme onc','ttp','dic','leukemia','anticoagulation'] },
  { id:'con-endo',        name:'Endocrinology Consult',          cat:'Consults', sub:'Medical',       aliases:['endocrinology','endo','thyroid','diabetes','adrenal','pituitary'] },
  { id:'con-allergy',     name:'Allergy/Immunology Consult',     cat:'Consults', sub:'Medical',       aliases:['allergy','immunology','ai consult','anaphylaxis','vit','drug allergy'] },
  { id:'con-palliative',  name:'Palliative Care Consult',        cat:'Consults', sub:'Medical',       aliases:['palliative','comfort care','goals of care','hospice','eol'] },
  { id:'con-psychiatry',  name:'Psychiatry Consult',             cat:'Consults', sub:'Medical',       aliases:['psychiatry','psych','suicidal','mental health','capacity'] },
  { id:'con-gen-surg',    name:'General Surgery Consult',        cat:'Consults', sub:'Surgical',      aliases:['general surgery','surgery consult','appendicitis','bowel','peritonitis'] },
  { id:'con-vasc-surg',   name:'Vascular Surgery Consult',       cat:'Consults', sub:'Surgical',      aliases:['vascular surgery','aaa','dissection','limb ischemia','bypass'] },
  { id:'con-cardiothoracic',name:'Cardiothoracic Surgery Consult', cat:'Consults', sub:'Surgical',   aliases:['ct surgery','cardiothoracic','cabg','valve surgery','aortic'] },
  { id:'con-ortho',       name:'Orthopedic Surgery Consult',     cat:'Consults', sub:'Surgical',      aliases:['orthopedics','ortho','fracture','joint','septic arthritis'] },
  { id:'con-obgyn',       name:'OB/GYN Consult',                cat:'Consults', sub:'Surgical',       aliases:['obgyn','obstetrics gynecology','ectopic','eclampsia','pregnancy'] },
  { id:'con-urology',     name:'Urology Consult',                cat:'Consults', sub:'Surgical',      aliases:['urology','urologist','torsion','urinary obstruction','bladder'] },
  { id:'con-icu',         name:'ICU/Critical Care Consult',      cat:'Consults', sub:'Medical',       aliases:['icu','critical care','intensivist','intubation','shock'] },
  { id:'con-pert',        name:'PERT (PE Response Team)',        cat:'Consults', sub:'Medical',       aliases:['pert','pulmonary embolism response team','pe team','massive pe'] },
  { id:'con-tox',         name:'Toxicology Consult / Poison Control', cat:'Consults', sub:'Medical', aliases:['toxicology','poison control','overdose','antidote','tox'] },
  { id:'con-sw',          name:'Social Work Consult',            cat:'Consults', sub:'Support',       aliases:['social work','sw','discharge planning','substance abuse','sdoh'] },
  { id:'con-pt',          name:'Physical Therapy (PT)',          cat:'Consults', sub:'Support',       aliases:['physical therapy','pt','mobility','rehabilitation','fall risk'] },
  { id:'con-ot',          name:'Occupational Therapy (OT)',      cat:'Consults', sub:'Support',       aliases:['occupational therapy','ot','adl','fine motor','rehab'] },
  { id:'con-slp',         name:'Speech & Swallowing (SLP)',      cat:'Consults', sub:'Support',       aliases:['speech','slp','swallowing','dysphagia','modified barium'] },
  { id:'con-ophth',       name:'Ophthalmology Consult',          cat:'Consults', sub:'Medical',       aliases:['ophthalmology','eye','crao','glaucoma','visual loss'] },
  { id:'con-derm',        name:'Dermatology Consult',            cat:'Consults', sub:'Medical',       aliases:['dermatology','derm','skin biopsy','sjs ten','dress','rash'] },
  { id:'con-mfm',         name:'Maternal-Fetal Medicine (MFM)', cat:'Consults', sub:'Medical',       aliases:['mfm','maternal fetal','high risk obstetrics','perinatology'] },

  // ════════════════════════════════════════════════════════
  // PROCEDURES
  // ════════════════════════════════════════════════════════

  { id:'proc-ivaccess',   name:'IV Access (Large Bore x2)',      cat:'Procedures', sub:'Access',      aliases:['iv access','large bore','18g','peripheral iv','access'] },
  { id:'proc-cvl',        name:'Central Venous Line (CVC)',      cat:'Procedures', sub:'Access',      aliases:['central line','cvl','central venous','triple lumen','subclavian jugular femoral'] },
  { id:'proc-art-line',   name:'Arterial Line',                  cat:'Procedures', sub:'Access',      aliases:['arterial line','art line','radial arterial','continuous bp monitoring'] },
  { id:'proc-io',         name:'Intraosseous Access (IO)',       cat:'Procedures', sub:'Access',      aliases:['intraosseous','io','ez-io','emergency access','cardiac arrest'] },
  { id:'proc-picc',       name:'PICC Line',                      cat:'Procedures', sub:'Access',      aliases:['picc','peripherally inserted central catheter','long term access'] },

  { id:'proc-intubation', name:'Rapid Sequence Intubation (RSI)', cat:'Procedures', sub:'Airway',   aliases:['intubation','rsi','endotracheal tube','ett','airway management','succinylcholine'] },
  { id:'proc-bipap',      name:'BiPAP (Non-Invasive Ventilation)', cat:'Procedures', sub:'Airway',  aliases:['bipap','niv','non invasive ventilation','cpap','copd chf'] },
  { id:'proc-hfnc',       name:'High Flow Nasal Cannula (HFNC)', cat:'Procedures', sub:'Airway',    aliases:['high flow','hfnc','optiflow','heated humidified','hypoxemia'] },
  { id:'proc-needle-decomp',name:'Needle Decompression',          cat:'Procedures', sub:'Airway',   aliases:['needle decompression','tension pneumothorax','2nd ics','14g needle'] },
  { id:'proc-chest-tube', name:'Chest Tube (Tube Thoracostomy)', cat:'Procedures', sub:'Airway',    aliases:['chest tube','thoracostomy','pneumothorax','hemothorax','pleural'] },
  { id:'proc-thoracentesis',name:'Thoracentesis',                 cat:'Procedures', sub:'Airway',   aliases:['thoracentesis','pleural tap','effusion','lights criteria'] },

  { id:'proc-defib',      name:'Defibrillation',                 cat:'Procedures', sub:'Cardiac',   aliases:['defibrillation','defib','shock','vf','pulseless vt','cardiac arrest'] },
  { id:'proc-cardiovert', name:'Synchronized Cardioversion',     cat:'Procedures', sub:'Cardiac',   aliases:['cardioversion','synchronized shock','unstable afib','vt with pulse'] },
  { id:'proc-pacer',      name:'Transcutaneous Pacing',          cat:'Procedures', sub:'Cardiac',   aliases:['pacing','transcutaneous pacemaker','bradycardia','complete heart block'] },
  { id:'proc-pericardio', name:'Pericardiocentesis',             cat:'Procedures', sub:'Cardiac',   aliases:['pericardiocentesis','pericardial tap','tamponade','beck triad'] },
  { id:'proc-cpr',        name:'CPR / ACLS Protocol',            cat:'Procedures', sub:'Cardiac',   aliases:['cpr','acls','cardiac arrest','code','resuscitation','chest compressions'] },

  { id:'proc-lp',         name:'Lumbar Puncture (LP)',           cat:'Procedures', sub:'Neuro',     aliases:['lumbar puncture','lp','spinal tap','csf','meningitis','xanthochromia'] },

  { id:'proc-paracentesis',name:'Paracentesis',                  cat:'Procedures', sub:'GI',         aliases:['paracentesis','abdominal tap','ascites','sbe','sbp'] },
  { id:'proc-ngt',        name:'Nasogastric Tube (NGT)',         cat:'Procedures', sub:'GI',         aliases:['ngt','ng tube','nasogastric','lavage','decompression'] },

  { id:'proc-foley',      name:'Foley Catheter',                 cat:'Procedures', sub:'Urology',   aliases:['foley','urinary catheter','urine output','retention','bladder'] },

  { id:'proc-joint-asp',  name:'Joint Aspiration (Arthrocentesis)', cat:'Procedures', sub:'Ortho',  aliases:['arthrocentesis','joint aspiration','joint tap','gout','septic arthritis'] },

  { id:'proc-wound-care', name:'Wound Care / Dressing Change',  cat:'Procedures', sub:'Wound',     aliases:['wound care','dressing','debridement','wound'] },
  { id:'proc-incision',   name:'Incision & Drainage (I&D)',      cat:'Procedures', sub:'Wound',     aliases:['incision drainage','i&d','abscess','fluctuant','pus'] },

  { id:'proc-iv-fluids',  name:'IV Fluids — Normal Saline 1L',  cat:'Procedures', sub:'Fluids',    aliases:['normal saline','ns','0.9% nacl','iv fluids','hydration','resuscitation'] },
  { id:'proc-lr',         name:'IV Fluids — Lactated Ringers 1L', cat:'Procedures', sub:'Fluids',  aliases:['lactated ringers','lr','balanced crystalloid','fluids','resuscitation'] },
  { id:'proc-d5w',        name:'IV Fluids — D5W',               cat:'Procedures', sub:'Fluids',    aliases:['d5w','dextrose water','maintenance fluids','hyponatremia'] },
  { id:'proc-prbc',       name:'Packed Red Blood Cells (pRBC)',  cat:'Procedures', sub:'Blood',     aliases:['prbc','blood transfusion','packed red cells','anemia hemorrhage transfuse'] },
  { id:'proc-ffp',        name:'Fresh Frozen Plasma (FFP)',      cat:'Procedures', sub:'Blood',     aliases:['ffp','fresh frozen plasma','coagulopathy','reversal','dic'] },
  { id:'proc-platelets',  name:'Platelet Transfusion',           cat:'Procedures', sub:'Blood',     aliases:['platelets','platelet transfusion','thrombocytopenia','bleeding'] },
  { id:'proc-cryo',       name:'Cryoprecipitate',               cat:'Procedures', sub:'Blood',     aliases:['cryo','cryoprecipitate','fibrinogen','dic','massive transfusion'] },
  { id:'proc-mtp',        name:'Massive Transfusion Protocol (MTP)', cat:'Procedures', sub:'Blood', aliases:['mtp','massive transfusion','1:1:1','hemorrhagic shock','trauma'] },
];

// ─── SEARCH ENGINE ───────────────────────────────────────────────────────────
window.RDX_ORDER_SEARCH = function(query, maxResults) {
  if (!query || query.trim().length < 2) return [];
  maxResults = maxResults || 10;
  var q = query.toLowerCase().trim();
  var scored = [];

  window.RDX_ORDER_CATALOG.forEach(function(order) {
    var score = 0;
    var name = order.name.toLowerCase();
    var aliases = order.aliases || [];

    // Exact name match = highest score
    if (name === q) score = 100;
    // Name starts with query
    else if (name.startsWith(q)) score = 80;
    // Name contains query
    else if (name.includes(q)) score = 60;
    // Category or subcategory match
    else if ((order.cat || '').toLowerCase().includes(q)) score = 30;
    else if ((order.sub || '').toLowerCase().includes(q)) score = 25;

    // Alias matches
    if (score === 0) {
      for (var i = 0; i < aliases.length; i++) {
        var alias = aliases[i].toLowerCase();
        if (alias.includes(q)) {
          score = Math.max(score, alias.startsWith(q) ? 50 : 40);
        }
      }
    }

    // Multi-word query — split and score each word
    if (score === 0 && q.includes(' ')) {
      var words = q.split(' ').filter(function(w){ return w.length > 1; });
      var wordMatches = words.filter(function(w) {
        return name.includes(w) || aliases.some(function(a){ return a.toLowerCase().includes(w); });
      });
      if (wordMatches.length > 0) score = Math.round(30 * wordMatches.length / words.length);
    }

    if (score > 0) scored.push({ order: order, score: score });
  });

  // Sort by score descending, then alphabetically
  scored.sort(function(a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return a.order.name.localeCompare(b.order.name);
  });

  return scored.slice(0, maxResults).map(function(s){ return s.order; });
};

})();
