#!/usr/bin/env python3
"""Generate 4 new RadDx modules: Vascular, Breast, Head & Neck, Environmental/Occupational."""

import sys
sys.path.insert(0, '/home/claude/reasondx')
from importlib import import_module

# Reuse the generator function from the previous script
gen = import_module("gen-raddx-remaining")
generate_module = gen.generate_module

MODULES = {
    "vascular": {
        "icon": "🩸",
        "title": "Vascular Imaging",
        "badge": "VASCULAR SURGERY",
        "scenarios": [
            {
                "modality": "Compression Ultrasound",
                "title": "Deep Vein Thrombosis",
                "vignette": "A <strong>42-year-old woman</strong> presents with 3 days of progressive left calf swelling, warmth, and pain. She returned from a 14-hour flight from Tokyo 5 days ago. She takes combined oral contraceptives and smokes half a pack per day. BMI 34. On exam: left calf circumference 3 cm greater than right, positive Homan's sign, pitting edema to mid-calf.",
                "context": {
                    "question": "What epidemiological and exposure factors create this patient's VTE risk profile?",
                    "correct": "D",
                    "options": {
                        "A": "Long flights rarely cause DVT",
                        "B": "OCPs are the only relevant risk factor",
                        "C": "Smoking does not affect clotting risk",
                        "D": "Multiplicative risk factors: OCPs (3-4\u00d7 DVT risk, especially with estrogen), prolonged air travel >4 hours (2-3\u00d7 risk from immobility + dehydration + cabin pressure), smoking (activates coagulation cascade + endothelial damage), obesity (BMI >30 = 2-3\u00d7 risk from venous stasis and chronic inflammation). These risks are MULTIPLICATIVE, not additive \u2014 her combined risk is dramatically higher than any single factor. Wells score should be calculated to guide workup"
                    },
                    "explanation": "VTE Risk Factor Epidemiology",
                    "text": "VTE affects ~1-2 per 1,000 adults annually in the US, with incidence rising exponentially with age. <strong>Risk factors are multiplicative</strong>: estrogen-containing contraceptives (3-4\u00d7, higher with third-generation progestins and drospirenone), immobility/travel >4 hours (economy class syndrome), surgery within 3 months, active cancer (4-7\u00d7), pregnancy/postpartum (5\u00d7), obesity, smoking, thrombophilia (Factor V Leiden in 5% of Caucasians, prothrombin gene mutation). <strong>The Wells DVT score</strong> integrates clinical probability: active cancer (+1), paralysis/immobilization (+1), bedridden >3 days (+1), localized tenderness (+1), entire leg swollen (+1), calf >3cm larger (+1), pitting edema (+1), collateral veins (+1), prior DVT (+1), alternative diagnosis as likely (\u22122).",
                    "pearl": "Epidemiologic Pearl: The intersection of OCPs + smoking + obesity is one of the most common preventable VTE scenarios in young women. Combined OCPs are CONTRAINDICATED with BMI >35 or in smokers >35 years old per CDC Medical Eligibility Criteria. Progestin-only methods (IUD, implant) do not increase VTE risk and are the appropriate alternative. Counseling about VTE risk should be standard at every OCP prescription."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Compression ultrasound of the left lower extremity \u2014 the first-line diagnostic study for suspected DVT (sensitivity >95% for proximal DVT)",
                        "B": "CT venography",
                        "C": "D-dimer first in all patients",
                        "D": "MRI venography"
                    },
                    "explanation": "Wells Score Guides the Algorithm",
                    "text": "The diagnostic algorithm depends on the Wells DVT score: <strong>Score \u22652 (DVT likely)</strong>: proceed directly to compression US (D-dimer is unnecessary \u2014 it will be positive and wastes time). <strong>Score <2 (DVT unlikely)</strong>: D-dimer first \u2014 if negative, DVT is effectively excluded; if positive, proceed to compression US. This patient has multiple positive Wells criteria (calf >3cm, pitting edema, localized tenderness, recent travel) \u2192 Wells \u22652 \u2192 go directly to US. <strong>Compression US</strong> evaluates common femoral, femoral, popliteal, and calf veins \u2014 a vein that does not fully compress with probe pressure contains thrombus."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal compressibility of all veins \u2014 DVT excluded",
                        "B": "Non-compressible left popliteal vein or femoral vein with intraluminal echogenic material \u2014 confirming acute proximal DVT. Augmentation flow may be absent or diminished",
                        "C": "Superficial thrombophlebitis only",
                        "D": "Baker's cyst mimicking DVT"
                    },
                    "explanation": "Acute DVT Ultrasound Findings",
                    "text": "Acute DVT on compression US: the vein <strong>does not compress fully</strong> when pressure is applied with the probe (the hallmark finding). Additional signs: visible intraluminal thrombus (echogenic material), distended vein, absent augmentation (no flow increase with distal compression), and loss of normal phasicity with respiration. <strong>Acute vs chronic DVT</strong>: acute thrombus is hypoechoic (dark) and the vein is distended; chronic thrombus is echogenic (bright), the vein is contracted, and there may be collateral flow."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Aspirin and compression stockings only",
                        "B": "Warfarin alone starting immediately",
                        "C": "Proximal DVT confirmed \u2192 start anticoagulation immediately (DOAC preferred: rivaroxaban or apixaban as monotherapy, or LMWH bridged to warfarin). Assess for PE symptoms (dyspnea, tachycardia, pleuritic pain). Consider provoked vs unprovoked classification for treatment duration planning",
                        "D": "IVC filter placement for all DVTs"
                    },
                    "explanation": "Anticoagulation \u2014 Immediate and Duration-Dependent",
                    "text": "Treatment initiation should not wait for specialist consultation. <strong>First-line</strong>: DOACs (rivaroxaban 15mg BID \u00d7 21 days then 20mg daily, or apixaban 10mg BID \u00d7 7 days then 5mg BID). <strong>Duration</strong>: provoked DVT (identifiable transient risk factor like travel, surgery, OCP) \u2192 3 months. Unprovoked or recurrent \u2192 consider indefinite anticoagulation. <strong>IVC filter</strong>: only if anticoagulation is absolutely contraindicated (active hemorrhage, recent neurosurgery).",
                    "radiopaedia": "https://radiopaedia.org/articles/deep-vein-thrombosis"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Anticoagulation for 3 months then stop",
                        "B": "Anticoagulation and no lifestyle changes",
                        "C": "Heparin drip and admission for all DVTs",
                        "D": "Start DOAC + STOP combined OCPs immediately (switch to progestin-only or non-hormonal contraception) + smoking cessation counseling + weight management referral + assess for PE symptoms + provoked DVT (travel + OCPs) \u2192 plan for 3-month anticoagulation + thrombophilia testing after anticoagulation complete if considering future estrogen use + travel prophylaxis education (compression stockings, hydration, mobility for future flights)"
                    },
                    "explanation": "Treat + Remove Modifiable Risk Factors",
                    "text": "The US finding triggered anticoagulation, but the comprehensive plan removes every modifiable risk factor: OCPs stopped (the single most impactful intervention for recurrence prevention), smoking cessation, weight management, and travel prophylaxis education. Thrombophilia testing is NOT recommended during acute treatment (anticoagulation affects results) but may be considered later if results would change management (e.g., deciding about future estrogen use). This is a classic 'provoked' DVT with excellent prognosis if risk factors are addressed."
                }
            },
            {
                "modality": "Ultrasound Screening \u2192 CTA",
                "title": "Abdominal Aortic Aneurysm",
                "vignette": "A <strong>68-year-old male</strong> with a 45-pack-year smoking history presents for a routine visit. He has hypertension and mild COPD. He has never been screened for abdominal aortic aneurysm. During the visit, you palpate a pulsatile, non-tender abdominal mass. He is hemodynamically stable with no pain.",
                "context": {
                    "question": "What epidemiological factors make AAA screening and detection critical in this patient?",
                    "correct": "C",
                    "options": {
                        "A": "AAA only affects patients with known vascular disease",
                        "B": "Screening is recommended for all adults over 50",
                        "C": "USPSTF recommends one-time AAA screening ultrasound for men aged 65-75 who have EVER smoked. This patient is 68 with 45 pack-years \u2014 he should have been screened at 65. Smoking is by far the strongest risk factor (5-8\u00d7 risk), followed by male sex (6:1 M:F), age >65, family history (first-degree relative with AAA doubles risk), hypertension, and Caucasian race. Ruptured AAA has 80-90% mortality \u2014 screening prevents death",
                        "D": "A palpable mass always indicates rupture"
                    },
                    "explanation": "AAA Screening Epidemiology",
                    "text": "AAA (\u22653.0 cm aortic diameter) is present in 4-8% of men >65 who have ever smoked. <strong>USPSTF screening recommendation (Grade B)</strong>: one-time abdominal US for men aged 65-75 who have ever smoked. Screening reduces AAA-related mortality by ~40%. <strong>Risk factors</strong>: smoking (most powerful \u2014 duration matters more than intensity), male sex, age, family history, connective tissue disorders (Marfan, Ehlers-Danlos), hypertension. <strong>Rupture risk by size</strong>: <4cm = <1%/year; 4-5cm = 1-3%/year; 5-5.5cm = 3-15%/year; >5.5cm = 20-40%/year \u2192 repair threshold.",
                    "pearl": "Epidemiologic Pearl: AAA screening is one of the most cost-effective screening programs in medicine \u2014 the NNS (number needed to screen) is ~300 to prevent one AAA death over 10 years. However, screening in women is NOT routinely recommended (lower prevalence, smaller absolute benefit) except for those with family history + smoking. The USPSTF gives screening an 'I' (insufficient evidence) rating for women, creating an evidence gap for high-risk female smokers."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Abdominal ultrasound to measure aortic diameter \u2014 the initial diagnostic and screening modality (sensitivity >95% for AAA, no radiation, low cost)",
                        "B": "CTA abdomen immediately",
                        "C": "Abdominal X-ray (lateral view)",
                        "D": "MRI abdomen"
                    },
                    "explanation": "Ultrasound First",
                    "text": "Abdominal US is the ideal initial study: fast, accurate (\u226595% sensitivity), no radiation, and well-suited for serial surveillance. US measures the maximal anteroposterior diameter of the infrarenal aorta. <strong>If AAA is confirmed and approaching surgical threshold</strong>: CTA abdomen/pelvis provides detailed anatomy for surgical planning (neck length, iliac involvement, renal artery relationship, branch vessels). <strong>CTA is the preoperative standard</strong> for both open and endovascular repair (EVAR) planning."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal aortic diameter (<3.0 cm)",
                        "B": "Small AAA (3.0-3.9 cm) requiring surveillance only",
                        "C": "Given the palpable pulsatile mass in a 68-year-old smoker, expect a significant AAA (\u22654.5-5.5 cm). Mural thrombus is commonly seen lining the aneurysm wall. The US will measure the maximal AP diameter and identify if the aneurysm extends to the iliac arteries",
                        "D": "Aortic dissection"
                    },
                    "explanation": "AAA Size Classification",
                    "text": "AAA classification by maximal diameter: <strong>Small</strong> (3.0-4.4 cm): surveillance US every 6-12 months. <strong>Medium</strong> (4.5-5.4 cm): surveillance US every 6 months, consider referral to vascular surgery. <strong>Large</strong> (\u22655.5 cm in men, \u22655.0 cm in women): repair indicated (rupture risk exceeds surgical risk). <strong>Rapidly expanding</strong> (>0.5 cm/6 months): repair indicated regardless of size. Mural thrombus lines most AAAs but does NOT reduce rupture risk \u2014 the outer wall diameter is what matters."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "All AAAs need immediate surgery",
                        "B": "Management based on US diameter: <5.5 cm \u2192 surveillance + aggressive risk factor modification. \u22655.5 cm (or \u22655.0 in women, or rapid expansion, or symptomatic) \u2192 vascular surgery referral for elective repair. CTA for preoperative anatomy if repair indicated. EVAR (endovascular) vs open repair based on anatomy and patient factors",
                        "C": "Observation regardless of size",
                        "D": "Immediate open surgical repair for all aneurysms"
                    },
                    "explanation": "Size-Based Management Algorithm",
                    "text": "The US measurement drives the entire management algorithm. <strong>Below repair threshold</strong>: surveillance imaging + smoking cessation + blood pressure control + statin therapy. <strong>At repair threshold</strong>: CTA for anatomy \u2192 EVAR if anatomy suitable (short recovery, lower perioperative mortality) vs open repair (more durable, necessary for hostile neck anatomy). <strong>Elective repair mortality</strong>: EVAR ~1-2%, open ~4-5%. <strong>Ruptured AAA mortality</strong>: 80-90% overall, 40-50% even if reaching the OR. The entire rationale for screening is preventing rupture through elective repair.",
                    "radiopaedia": "https://radiopaedia.org/articles/abdominal-aortic-aneurysm"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "US surveillance only",
                        "B": "Surgery and no lifestyle changes",
                        "C": "Watchful waiting with no modifications",
                        "D": "Management per AAA size + AGGRESSIVE smoking cessation (the ONLY modifiable factor proven to slow AAA growth) + blood pressure optimization (target <130/80) + statin therapy (reduces cardiovascular events and may slow growth) + screen for other aneurysms (popliteal, thoracic \u2014 15-25% of AAA patients have concomitant aneurysms elsewhere) + cardiovascular risk assessment (AAA patients have high concurrent CAD and cerebrovascular disease) + family screening discussion (first-degree relatives should be screened)"
                    },
                    "explanation": "Surveillance + Risk Factor Elimination + Vascular Screening",
                    "text": "AAA is a marker of systemic vascular disease. The imaging finding triggers not just aneurysm management but comprehensive cardiovascular risk reduction. Smoking cessation is the ONLY intervention proven to slow AAA growth rate \u2014 this cannot be overstated. Concomitant aneurysm screening is important: 15-25% of AAA patients have popliteal aneurysms, and thoracic aneurysms are also more common. First-degree male relatives should be offered screening. The US finding initiated a cascade from local aneurysm management to systemic vascular health optimization."
                }
            },
            {
                "modality": "Carotid Duplex Ultrasound \u2192 CTA",
                "title": "Carotid Artery Stenosis \u2014 Stroke Prevention",
                "vignette": "A <strong>71-year-old male</strong> with hypertension, type 2 diabetes, and hyperlipidemia presents after a 20-minute episode of right-hand weakness and slurred speech yesterday that resolved completely. He has a left carotid bruit on exam. He smokes 1 pack per day. He did not seek care yesterday because 'it went away.'",
                "context": {
                    "question": "What makes this presentation a neurological emergency despite complete symptom resolution?",
                    "correct": "C",
                    "options": {
                        "A": "Resolved symptoms mean no further workup is needed",
                        "B": "A carotid bruit is a normal finding in elderly patients",
                        "C": "This was a TIA (transient ischemic attack) \u2014 a WARNING STROKE. The 90-day stroke risk after TIA is 10-20%, with highest risk in the first 48 hours. His ABCD2 score is high: Age \u226560 (+1), BP elevation (+1), Clinical features (unilateral weakness +2), Duration 10-59 min (+1), Diabetes (+1) = 6/7 (high risk). The left carotid bruit + right-sided symptoms localizes to left carotid territory. Carotid stenosis is the cause in ~15-20% of ischemic strokes \u2014 and is surgically preventable",
                        "D": "TIAs only occur in patients over 80"
                    },
                    "explanation": "TIA as a Stroke Warning",
                    "text": "TIA is a neurological emergency, not a benign event. <strong>Stroke risk after TIA</strong>: 5% at 48 hours, 10-20% at 90 days. The <strong>ABCD2 score</strong> stratifies risk: scores \u22654 warrant urgent evaluation (ideally within 24 hours). <strong>Carotid stenosis</strong> causes ~15-20% of ischemic strokes through artery-to-artery embolism (plaque rupture \u2192 thromboembolism to brain). <strong>Risk factors for carotid disease</strong> mirror atherosclerosis risk: smoking (#1 modifiable), hypertension, diabetes, hyperlipidemia, age, male sex. The carotid bruit is a clinical clue but has limited sensitivity/specificity \u2014 imaging is definitive.",
                    "pearl": "Epidemiologic Pearl: Carotid endarterectomy (CEA) for symptomatic stenosis \u226570% is one of the most evidence-based surgical interventions in medicine (NASCET, ECST trials). The NNT is only 6 to prevent one stroke over 2 years. However, the benefit depends on surgical complication rate being <6% \u2014 high-volume centers with experienced surgeons are essential. For asymptomatic stenosis, the benefit is much smaller (NNT ~20 over 5 years), and medical therapy alone is increasingly competitive."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Carotid duplex ultrasound \u2014 the first-line imaging study for carotid stenosis. Non-invasive, no radiation, measures stenosis severity by peak systolic velocity",
                        "B": "CT head only",
                        "C": "Conventional cerebral angiography",
                        "D": "MRI brain without vascular imaging"
                    },
                    "explanation": "Carotid Duplex + Brain Imaging",
                    "text": "The TIA workup includes both brain imaging and vascular imaging: <strong>CT head or MRI brain</strong> (rule out hemorrhage, detect acute infarction on DWI-MRI), <strong>carotid duplex US</strong> (first-line for extracranial carotid stenosis), and <strong>cardiac evaluation</strong> (ECG \u00b1 echocardiogram \u00b1 telemetry for AFib). Carotid US measures stenosis by <strong>peak systolic velocity (PSV)</strong>: PSV >125 cm/s suggests \u226550% stenosis; PSV >230 cm/s suggests \u226570% stenosis. CTA or MRA confirms the US findings before surgical planning."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal carotid velocities bilaterally",
                        "B": "Elevated peak systolic velocity (>230 cm/s) in the left internal carotid artery with visible echogenic plaque, consistent with \u226570% stenosis \u2014 correlating with the left-sided bruit and right-sided neurological symptoms",
                        "C": "Complete left ICA occlusion",
                        "D": "Vertebral artery stenosis"
                    },
                    "explanation": "Hemodynamically Significant Stenosis",
                    "text": "Carotid US grading: <strong>Normal</strong>: PSV <125 cm/s, no plaque. <strong>50-69% stenosis</strong>: PSV 125-230 cm/s. <strong>\u226570% stenosis</strong>: PSV >230 cm/s, end-diastolic velocity >100 cm/s. <strong>Near-occlusion</strong>: very high or paradoxically low velocities with string sign. <strong>Complete occlusion</strong>: no flow detected. Plaque characterization matters too: echolucent (lipid-rich, unstable) plaques are higher risk than calcified (stable) plaques. The combination of \u226570% stenosis + symptomatic TIA puts this patient in the highest-benefit category for intervention."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "Symptomatic \u226570% carotid stenosis = strongest indication for carotid endarterectomy (CEA). Confirm with CTA or MRA. Surgery should be performed within 2 weeks of the TIA for maximum benefit (stroke risk is front-loaded in the first days/weeks)",
                        "B": "Medical management alone is sufficient for all carotid stenosis",
                        "C": "Repeat imaging in 6 months before deciding",
                        "D": "Antiplatelet therapy only"
                    },
                    "explanation": "Symptomatic \u226570% = Surgery",
                    "text": "<strong>NASCET trial evidence</strong>: CEA for symptomatic stenosis \u226570% reduces 2-year stroke risk from 26% to 9% (NNT 6). For 50-69% symptomatic stenosis, benefit is moderate (NNT 15). For <50%, no surgical benefit. <strong>Timing matters</strong>: CEA within 2 weeks of TIA/minor stroke provides maximum benefit \u2014 the risk of recurrent stroke is highest early. <strong>Carotid artery stenting (CAS)</strong> is an alternative for patients with hostile neck anatomy, prior neck radiation, or high surgical risk, but CEA remains preferred for most patients per current guidelines.",
                    "radiopaedia": "https://radiopaedia.org/articles/internal-carotid-artery-stenosis"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "CEA and discharge with no further management",
                        "B": "Aspirin only and follow-up in 3 months",
                        "C": "Medical management without surgery",
                        "D": "Urgent CEA within 2 weeks + dual antiplatelet therapy (aspirin + clopidogrel for 21 days per POINT trial) + high-intensity statin (atorvastatin 80mg) + blood pressure optimization + diabetes management (HbA1c target <7%) + SMOKING CESSATION (the most critical modifiable factor) + screen for contralateral carotid stenosis and other vascular beds (coronary, peripheral, AAA) + long-term antiplatelet and statin therapy + driving restrictions per guidelines"
                    },
                    "explanation": "Urgent CEA + Comprehensive Vascular Risk Reduction",
                    "text": "The carotid US finding directed the most time-sensitive intervention (CEA within 2 weeks). But carotid stenosis is a marker of systemic atherosclerosis: these patients have high rates of concurrent CAD (50%+), peripheral arterial disease, and AAA. Comprehensive vascular risk reduction is as important as the surgery itself. Smoking cessation reduces recurrent stroke risk more than any medication. The imaging cascade (duplex US \u2192 CTA confirmation \u2192 CEA) is one of the best-validated pathways from screening to life-saving intervention in all of medicine."
                }
            },
            {
                "modality": "CTA \u2192 Conventional Angiography",
                "title": "Acute Mesenteric Ischemia",
                "vignette": "A <strong>74-year-old woman</strong> with atrial fibrillation (not on anticoagulation due to 'fall risk concerns') and heart failure presents with sudden-onset severe diffuse abdominal pain. She rates the pain 10/10 but her abdomen is surprisingly soft and non-tender on exam (\u201Cpain out of proportion to exam\u201D). Vitals: HR 110 (irregular), BP 100/60. Labs: lactate 5.8 mmol/L (elevated), WBC 19,000. She has been taking warfarin intermittently.",
                "context": {
                    "question": "What epidemiological factors make acute mesenteric ischemia the most dangerous diagnosis on this differential?",
                    "correct": "D",
                    "options": {
                        "A": "Abdominal pain in elderly patients is usually benign",
                        "B": "Atrial fibrillation is unrelated to abdominal emergencies",
                        "C": "A soft abdomen rules out serious pathology",
                        "D": "Acute mesenteric ischemia (AMI) is the 'abdominal stroke': non-anticoagulated AFib is the #1 risk factor for SMA embolism (accounting for 50% of AMI cases). The classic presentation is 'pain out of proportion to physical exam' \u2014 severe pain with minimal tenderness (early ischemia affects visceral afferents before peritoneal signs develop). Mortality is 60-80% overall and approaches 100% if bowel necrosis occurs before intervention. Her subtherapeutic anticoagulation was the preventable upstream cause"
                    },
                    "explanation": "Acute Mesenteric Ischemia \u2014 The Abdominal Stroke",
                    "text": "<strong>AMI causes</strong>: SMA embolism (50% \u2014 usually from AFib or LV thrombus), SMA thrombosis (25% \u2014 pre-existing atherosclerosis with acute occlusion), non-occlusive mesenteric ischemia (NOMI, 20% \u2014 low-flow states in heart failure, shock, vasopressors), and mesenteric venous thrombosis (5% \u2014 hypercoagulable states). <strong>The critical teaching point</strong>: 'pain out of proportion to exam' in an AFib patient should trigger immediate AMI consideration. Lactate elevation confirms tissue ischemia. Peritoneal signs (rebound, guarding) are LATE findings indicating bowel necrosis \u2014 the goal is diagnosis BEFORE necrosis.",
                    "pearl": "Epidemiologic Pearl: The decision not to anticoagulate AFib patients due to 'fall risk' is one of the most common and consequential errors in geriatric medicine. Studies show that the stroke/embolism risk from untreated AFib almost always exceeds the bleeding risk from anticoagulation, even in fall-prone elderly patients. DOACs have made this equation even more favorable. This patient's mesenteric embolism was a predictable consequence of undertreated AFib."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "CTA abdomen/pelvis with IV contrast \u2014 the gold standard for AMI diagnosis (sensitivity >95%). Arterial and venous phase imaging identifies the site and type of occlusion and assesses bowel viability",
                        "B": "Abdominal X-ray",
                        "C": "Mesenteric Doppler ultrasound",
                        "D": "Conventional angiography as the first study"
                    },
                    "explanation": "CTA \u2014 Fast and Definitive",
                    "text": "CTA is the first-line study: <strong>sensitivity >95%</strong> for SMA occlusion, shows the exact location and type of obstruction (embolism typically lodges 3-8 cm from the SMA origin, at the take-off of the middle colic artery), identifies bowel wall changes (non-enhancement = necrosis, pneumatosis = advanced ischemia), and evaluates for other causes of acute abdomen. <strong>Do not delay for US or X-ray</strong> \u2014 these are insensitive early in AMI. Conventional angiography is reserved for therapeutic intervention (catheter-directed thrombolysis, thrombectomy) after CTA diagnosis."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal mesenteric vasculature",
                        "B": "Aortic dissection extending to the SMA",
                        "C": "Filling defect (thrombus) in the SMA consistent with acute embolism, with non-enhancement of affected small bowel loops (suggesting ischemia). The embolus typically lodges at the first major branch point. Look for pneumatosis intestinalis and portal venous gas as signs of bowel necrosis",
                        "D": "SMA stenosis without acute occlusion"
                    },
                    "explanation": "CTA Findings in AMI",
                    "text": "CTA findings: <strong>Arterial phase</strong>: filling defect in SMA (embolism) or abrupt cutoff (thrombosis), SMA calcification (chronic atherosclerosis suggesting thrombotic cause). <strong>Bowel findings</strong>: non-enhancing bowel wall (ischemia), bowel wall thickening (edema), pneumatosis intestinalis (gas in bowel wall = necrosis), portal venous gas (very late, poor prognosis). <strong>Embolism vs thrombosis differentiation</strong>: embolism \u2192 occlusion 3-8 cm from origin (past first jejunal branches), proximal SMA normal. Thrombosis \u2192 occlusion at SMA origin with proximal atherosclerosis."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "CTA confirms SMA embolism = SURGICAL EMERGENCY. If no signs of bowel necrosis: emergent catheter-directed therapy (thrombectomy/thrombolysis) or surgical embolectomy + anticoagulation. If signs of necrosis (pneumatosis, non-enhancement): emergent laparotomy for resection of nonviable bowel + SMA revascularization",
                        "B": "Heparin drip and observation",
                        "C": "Outpatient vascular surgery referral",
                        "D": "Broad-spectrum antibiotics and NPO only"
                    },
                    "explanation": "Emergent Revascularization \u00b1 Bowel Resection",
                    "text": "AMI treatment is time-critical: <strong>No necrosis on CTA</strong> \u2192 endovascular first (catheter-directed aspiration thrombectomy or thrombolysis via SMA catheter) \u2014 less invasive, can be followed by surgical exploration if needed. <strong>Signs of necrosis</strong> \u2192 emergent laparotomy (resect nonviable bowel, SMA embolectomy, assess remaining bowel viability, second-look laparotomy at 24-48h). <strong>Anticoagulation</strong> (IV heparin) is started immediately to prevent clot propagation. The window between reversible ischemia and irreversible necrosis may be as short as 6-12 hours.",
                    "radiopaedia": "https://radiopaedia.org/articles/acute-mesenteric-ischaemia"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "Revascularization and discharge on aspirin",
                        "B": "Surgery and no anticoagulation changes",
                        "C": "Emergent revascularization (endovascular or surgical) + second-look laparotomy at 24-48h if bowel viability uncertain + START ANTICOAGULATION for AFib (DOAC long-term \u2014 the failure to anticoagulate caused this event) + evaluate for short bowel syndrome if extensive resection + nutritional support + address the 'fall risk' anticoagulation decision (structured fall risk assessment, DOACs have lower ICH risk than warfarin, benefits vs risks documentation) + cardiology consultation for rate/rhythm control",
                        "D": "Observation with serial lactate levels"
                    },
                    "explanation": "Revascularization + Correct the Upstream Cause",
                    "text": "The CTA finding directed emergent life-saving intervention. But the root cause \u2014 untreated AFib \u2014 must be addressed to prevent recurrence. The 'fall risk' justification for withholding anticoagulation requires re-evaluation: structured fall risk assessment tools (Timed Up and Go, STEADI) should replace subjective 'fall risk' labels, and DOACs (particularly apixaban) have lower intracranial hemorrhage rates than warfarin, tipping the benefit-risk balance further toward treatment. This catastrophic event was a predictable consequence of undertreated AFib."
                }
            },
            {
                "modality": "Ankle-Brachial Index \u2192 CTA \u2192 Angiography",
                "title": "Peripheral Arterial Disease \u2014 Critical Limb Ischemia",
                "vignette": "A <strong>66-year-old male</strong> with type 2 diabetes (HbA1c 9.1%), 40-pack-year smoking history (quit 2 years ago), and hypertension presents with a painful non-healing ulcer on his left great toe for 6 weeks. He also reports left calf pain after walking one block that resolves with rest (claudication that has progressed). On exam: left foot is cool, pallor with elevation, dependent rubor, absent dorsalis pedis and posterior tibial pulses, and a 1.5 cm punched-out ulcer on the great toe.",
                "context": {
                    "question": "What epidemiological and exposure factors make critical limb ischemia (CLI) the diagnosis driving this presentation?",
                    "correct": "D",
                    "options": {
                        "A": "A non-healing toe ulcer in a diabetic is always neuropathic",
                        "B": "He quit smoking 2 years ago, so vascular risk is normalized",
                        "C": "Claudication is a benign condition that doesn't require intervention",
                        "D": "PAD affects 12-20% of adults >65. This patient has CLI \u2014 the most severe manifestation (rest pain, non-healing ulcers, gangrene). His risk factors are synergistic: smoking (strongest risk factor, residual risk persists years after cessation), diabetes (accelerates atherosclerosis and causes coexisting neuropathy, masking ischemic symptoms), and hypertension. CLI carries a 25% major amputation rate and 25% mortality at 1 year without revascularization"
                    },
                    "explanation": "PAD and Critical Limb Ischemia Epidemiology",
                    "text": "PAD is dramatically underdiagnosed: ~50% of patients are asymptomatic. <strong>Fontaine classification</strong>: Stage I (asymptomatic), Stage II (claudication \u2014 IIa: >200m, IIb: <200m), Stage III (rest pain), Stage IV (tissue loss/gangrene). Stages III-IV = CLI. <strong>Risk factors</strong>: smoking (2-6\u00d7 risk, dose-dependent), diabetes (2-4\u00d7, accelerates progression), age >65, hypertension, dyslipidemia, CKD. <strong>Diabetic PAD is uniquely dangerous</strong>: coexisting neuropathy masks ischemic pain, causing late presentation; atherosclerosis is more distal (tibial vessels, harder to revascularize); and impaired wound healing creates a vicious cycle. <strong>CLI prognosis without treatment</strong>: 25% major amputation, 25% death at 1 year.",
                    "pearl": "Epidemiologic Pearl: PAD is the strongest marker of systemic atherosclerosis \u2014 patients with PAD have 3-6\u00d7 higher risk of MI and stroke compared to age-matched controls. The 5-year mortality of CLI is WORSE than most cancers (~50%). Yet PAD remains undertreated: fewer than 50% of PAD patients receive appropriate antiplatelet therapy, statins, and smoking cessation support. Every PAD diagnosis should trigger comprehensive cardiovascular risk management."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "MRI of the foot to evaluate the ulcer",
                        "B": "Ankle-brachial index (ABI) first as the bedside screening test, then CTA of the lower extremity arterial system for revascularization planning if CLI is confirmed",
                        "C": "Venous duplex ultrasound",
                        "D": "Bone scan to rule out osteomyelitis first"
                    },
                    "explanation": "ABI \u2192 CTA Pathway",
                    "text": "<strong>ABI</strong> (ankle systolic pressure / brachial systolic pressure) is the first-line diagnostic test: Normal 1.0-1.4; mild PAD 0.7-0.9; moderate 0.4-0.69; severe/CLI <0.4. <strong>Caveat in diabetics</strong>: calcified tibial arteries can falsely elevate ABI (>1.4 = non-compressible, unreliable) \u2014 use toe-brachial index (TBI) or transcutaneous oxygen measurement (TcPO2) instead. <strong>CTA lower extremity</strong> provides the roadmap for revascularization: identifies the level and extent of stenosis/occlusion, runoff vessels, and anatomy for surgical bypass or endovascular intervention."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal ABI (>0.9) and patent arteries on CTA",
                        "B": "DVT causing the ulcer",
                        "C": "ABI <0.4 (severe ischemia/CLI). CTA shows multilevel atherosclerotic disease: superficial femoral artery occlusion + tibial vessel stenosis with poor distal runoff to the foot \u2014 a pattern typical of diabetic PAD (distal predominance)",
                        "D": "Popliteal artery aneurysm"
                    },
                    "explanation": "Diabetic PAD Pattern on CTA",
                    "text": "Diabetic PAD has a characteristic <strong>distal pattern</strong>: tibial and peroneal arteries are preferentially affected (compared to non-diabetic PAD which tends to affect aortoiliac and femoropopliteal segments). CTA shows: SFA occlusion with reconstitution via collaterals, severely diseased tibial vessels, and limited pedal runoff. <strong>Runoff assessment is critical</strong>: at least one patent tibial vessel to the foot is needed for bypass graft success. The CTA identifies both the inflow lesion (for angioplasty/stenting) and the target vessel for distal bypass."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "CLI confirmed by ABI + CTA = urgent vascular surgery/interventional radiology referral for revascularization. Endovascular (angioplasty/stenting) is first-line for many lesions; surgical bypass (femoral-distal) for complex disease or endovascular failure. Amputation is the last resort, not the first option",
                        "B": "Amputation is the standard treatment for CLI",
                        "C": "Conservative wound care and observation",
                        "D": "Cilostazol for claudication and follow-up in 3 months"
                    },
                    "explanation": "Revascularization \u2014 Limb Salvage Priority",
                    "text": "CLI treatment prioritizes limb salvage through revascularization. <strong>Endovascular approach</strong>: angioplasty \u00b1 stenting of stenotic/occluded segments (SFA, tibial) \u2014 less invasive, suitable for focal lesions. <strong>Surgical bypass</strong>: femoral-popliteal or femoral-tibial bypass using autologous saphenous vein (gold standard conduit) \u2014 for long-segment occlusions or failed endovascular attempts. <strong>Hybrid approaches</strong> combining both are increasingly common. <strong>Primary amputation</strong> is reserved for extensive necrosis, non-reconstructable anatomy, or non-ambulatory patients with limited life expectancy.",
                    "radiopaedia": "https://radiopaedia.org/articles/peripheral-arterial-disease"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Revascularization and wound care only",
                        "B": "Major amputation as first-line",
                        "C": "Medical management without revascularization",
                        "D": "Revascularization (endovascular or surgical per CTA anatomy) + wound care (debridement, offloading, infection control) + aggressive diabetes management (endocrinology, target HbA1c <7%) + reinforce smoking cessation (even 2 years after quitting, residual risk remains) + antiplatelet therapy (aspirin or clopidogrel) + high-intensity statin + antihypertensive optimization + screen for coexisting CAD and cerebrovascular disease (stress test, carotid duplex) + supervised exercise program + podiatry follow-up + diabetic foot care education"
                    },
                    "explanation": "Limb Salvage + Systemic Vascular Risk Reduction",
                    "text": "The CTA roadmap enabled targeted revascularization for limb salvage. But PAD management extends far beyond the affected leg: these patients have the highest cardiovascular mortality of any atherosclerotic disease subgroup. The comprehensive plan addresses local (revascularization, wound care), metabolic (diabetes optimization), and systemic (antiplatelet, statin, BP control, smoking maintenance, cardiovascular screening) domains. Supervised exercise programs (structured walking to claudication threshold) are evidence-based and improve walking distance by 50-200% \u2014 yet are dramatically underutilized."
                }
            }
        ],
        "cross_links": [
            ("\u2764\ufe0f Cardiac Imaging", "raddx-cardiac.html", "ECG, echo, angiography"),
            ("\ud83e\udde0 Neuroimaging", "raddx-neuro.html", "CT/MRI brain, stroke"),
            ("\ud83e\uddb4 Musculoskeletal", "raddx-msk.html", "Fractures, compartment syndrome"),
            ("\u2190 RadDx Hub", "raddx-hub.html", "All body systems"),
        ],
        "references": [
            ("DVT \u2014 StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK507708/"),
            ("USPSTF AAA Screening Recommendation", "https://doi.org/10.1001/jama.2019.18928"),
            ("Carotid Stenosis NASCET Criteria \u2014 StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK470582/"),
            ("Acute Mesenteric Ischemia \u2014 StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK500014/"),
            ("PAD \u2014 AHA/ACC Guidelines 2016", "https://doi.org/10.1161/CIR.0000000000000470"),
            ("Radiopaedia.org", "https://radiopaedia.org"),
        ]
    },
    "breast": {
        "icon": "\ud83c\udf80",
        "title": "Breast Imaging",
        "badge": "BREAST / ONCOLOGY",
        "scenarios": [
            {
                "modality": "Mammography \u2192 US \u2192 Biopsy",
                "title": "Screening Mammography \u2014 BI-RADS Classification",
                "vignette": "A <strong>52-year-old woman</strong> presents for routine screening mammography. She has no breast complaints, no palpable masses, and no nipple discharge. PMH: menarche at age 11, nulliparous, no family history of breast cancer. She has heterogeneously dense breasts (BI-RADS density C) on prior mammograms. BMI 27. No prior biopsies.",
                "context": {
                    "question": "What epidemiological and patient-specific factors determine this woman\u2019s breast cancer risk and screening strategy?",
                    "correct": "D",
                    "options": {
                        "A": "Without family history, her risk is negligible",
                        "B": "Screening mammography is only needed after age 60",
                        "C": "Breast density has no impact on cancer risk or detection",
                        "D": "Multiple breast cancer risk factors: early menarche (<12 = longer estrogen exposure), nulliparity (no protective effect of pregnancy), heterogeneously dense breasts (both INCREASES cancer risk 1.5-2\u00d7 AND reduces mammographic sensitivity from ~85% to ~60% by masking lesions). Breast density is now reported on all mammograms per federal law (FDA Dense Breast Notification Act 2023). She may benefit from supplemental screening with breast MRI or US based on risk calculation"
                    },
                    "explanation": "Breast Cancer Risk Assessment and Dense Breast Screening",
                    "text": "Breast cancer affects 1 in 8 women (13% lifetime risk). <strong>Risk factors</strong>: age (#1), BRCA1/2 mutations (40-80% lifetime risk), first-degree family history (2\u00d7), early menarche/late menopause (prolonged estrogen exposure), nulliparity or late first pregnancy (>30), hormone replacement therapy, breast density, prior chest radiation, obesity (postmenopausal), alcohol. <strong>Breast density</strong> is a dual threat: it independently increases cancer risk AND reduces mammographic sensitivity. <strong>Dense breast legislation</strong> now requires patient notification in all US states, and many guidelines recommend supplemental screening (breast MRI for high-risk, US for intermediate-risk) in women with dense breasts.",
                    "pearl": "Epidemiologic Pearl: Mammographic screening reduces breast cancer mortality by ~20-30% in women 50-74. The screening age debate (USPSTF 2024 update recommends starting at 40, ACS recommends choice at 40-44 and annual at 45) reflects the trade-off between cancer detection benefit and false-positive/overdiagnosis harms. In Black women, breast cancer incidence is similar to White women but mortality is 40% higher \u2014 driven by higher rates of aggressive subtypes (triple-negative), later stage at diagnosis, and disparities in treatment access."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Standard 2D mammography or digital breast tomosynthesis (3D mammography) \u2014 the standard screening modality. Tomosynthesis reduces recall rates and improves cancer detection in dense breasts",
                        "B": "Breast MRI as first-line screening",
                        "C": "Breast ultrasound as the primary screening tool",
                        "D": "Thermography or molecular breast imaging"
                    },
                    "explanation": "Mammography as Standard Screening",
                    "text": "Standard screening: <strong>2D digital mammography</strong> (CC and MLO views of each breast) or <strong>digital breast tomosynthesis (DBT/3D)</strong>, which acquires multiple thin-slice images and reduces recall rates by 15-30% while increasing cancer detection by 20-40%, especially in dense breasts. <strong>Supplemental screening in dense breasts</strong>: breast MRI (highest sensitivity ~95% but expensive, requires contrast), contrast-enhanced mammography, or whole-breast ultrasound (increases cancer detection by 2-4 per 1,000 women but also increases false positives)."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "BI-RADS 1 (negative) \u2014 completely normal",
                        "B": "Possible findings in heterogeneously dense breasts: BI-RADS 0 (incomplete \u2014 needs additional imaging, common with density), or BI-RADS 4 (suspicious abnormality \u2014 irregular mass or microcalcifications requiring biopsy), or BI-RADS 2 (benign finding like a cyst or calcified fibroadenoma)",
                        "C": "BI-RADS 6 (known biopsy-proven malignancy)",
                        "D": "Mammography cannot detect cancer in dense breasts"
                    },
                    "explanation": "BI-RADS Classification System",
                    "text": "The <strong>BI-RADS</strong> (Breast Imaging Reporting and Data System) standardizes mammographic interpretation: <strong>0</strong>: Incomplete \u2014 need additional imaging. <strong>1</strong>: Negative. <strong>2</strong>: Benign. <strong>3</strong>: Probably benign (<2% malignancy risk, 6-month follow-up). <strong>4</strong>: Suspicious (2-95% malignancy risk, biopsy recommended). <strong>4A</strong>: low suspicion (2-10%), <strong>4B</strong>: moderate (10-50%), <strong>4C</strong>: high (50-95%). <strong>5</strong>: Highly suggestive of malignancy (\u226595%). <strong>6</strong>: Known malignancy. The BI-RADS category drives the next action \u2014 from routine screening to urgent biopsy."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "BI-RADS 0 or 3 \u2192 no action needed",
                        "B": "All abnormalities require surgical excision",
                        "C": "Management per BI-RADS category: BI-RADS 0 \u2192 additional views + targeted US. BI-RADS 3 \u2192 6-month short-interval follow-up. BI-RADS 4/5 \u2192 tissue sampling (image-guided core needle biopsy is standard, NOT surgical excision as the first step). Biopsy results determine definitive management",
                        "D": "Repeat mammogram in 1 year regardless of BI-RADS score"
                    },
                    "explanation": "BI-RADS \u2192 Action Algorithm",
                    "text": "Each BI-RADS category has a standardized management pathway. For suspicious findings (BI-RADS 4/5): <strong>image-guided core needle biopsy</strong> (US-guided, stereotactic, or MRI-guided depending on lesion type) is the standard of care \u2014 not surgical excision as the initial diagnostic step. Core biopsy provides tissue diagnosis, receptor status (ER, PR, HER2), and Ki-67 proliferation index \u2014 all essential for treatment planning before any surgery. <strong>Concordance assessment</strong>: the pathology must match the imaging appearance. Discordant results (benign pathology for a highly suspicious lesion) require re-biopsy or excision.",
                    "radiopaedia": "https://radiopaedia.org/articles/breast-imaging-reporting-and-data-system-bi-rads"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Mammogram and return in 1 year regardless of results",
                        "B": "Biopsy all abnormalities surgically",
                        "C": "Stop screening after one normal mammogram",
                        "D": "Management per BI-RADS + calculate formal lifetime breast cancer risk (Tyrer-Cuzick model) to determine if supplemental screening is indicated + discuss dense breast implications with patient + consider supplemental screening modality (breast MRI if lifetime risk >20%, US if 15-20%) + address modifiable risk factors (alcohol reduction, weight management, exercise \u2014 30 min/day reduces breast cancer risk by 10-20%) + continue age-appropriate screening per guidelines"
                    },
                    "explanation": "Personalized Screening Based on Risk + Density",
                    "text": "The mammographic finding (and density assessment) triggers a personalized screening strategy. Formal risk calculation (Tyrer-Cuzick includes density) determines: <strong>\u226520% lifetime risk</strong>: annual mammography + annual breast MRI. <strong>15-20%</strong>: consider supplemental US or MRI. <strong><15%</strong>: standard mammography per guidelines. Modifiable risk factor counseling is part of every screening visit: limiting alcohol to <1 drink/day (each drink increases risk 7-10%), maintaining healthy weight (postmenopausal obesity increases risk via estrogen production in adipose tissue), and regular exercise. The mammogram is both a cancer screening tool and an entry point to comprehensive breast health management."
                }
            },
            {
                "modality": "Mammography \u2192 US \u2192 MRI",
                "title": "BRCA Carrier \u2014 High-Risk Screening",
                "vignette": "A <strong>32-year-old woman</strong> tests positive for BRCA1 mutation after her mother was diagnosed with ovarian cancer at 48 and her maternal aunt died of breast cancer at 42. She has no personal history of breast cancer. She has extremely dense breasts (BI-RADS density D). She asks about screening and risk reduction options.",
                "context": {
                    "question": "What does BRCA1 status mean for her cancer risk and how should screening differ from average-risk women?",
                    "correct": "C",
                    "options": {
                        "A": "BRCA1 only slightly increases breast cancer risk",
                        "B": "Standard screening starting at 40 is sufficient",
                        "C": "BRCA1 carriers have 55-72% lifetime breast cancer risk and 39-44% lifetime ovarian cancer risk. Screening must start earlier and be more intensive: annual breast MRI starting at age 25 + annual mammography starting at age 30 (alternating every 6 months \u2014 so imaging every 6 months). Her extremely dense breasts make mammography alone inadequate (sensitivity drops to ~30-50%). She should also discuss risk-reducing surgery (bilateral mastectomy reduces risk by 90-95%) and ovarian cancer risk management",
                        "D": "Genetic testing results don't change clinical management"
                    },
                    "explanation": "BRCA and High-Risk Breast Cancer Genetics",
                    "text": "<strong>BRCA1</strong>: 55-72% breast cancer risk, 39-44% ovarian cancer risk. Often triple-negative subtype (aggressive, no targeted hormonal therapy). <strong>BRCA2</strong>: 45-69% breast cancer risk, 11-17% ovarian cancer risk. Often ER-positive (better prognosis, responds to endocrine therapy). <strong>NCCN high-risk screening</strong>: annual breast MRI starting at 25 + annual mammography starting at 30 (alternating modalities every 6 months), clinical breast exam every 6-12 months. <strong>Risk reduction options</strong>: bilateral risk-reducing mastectomy (reduces risk 90-95%), bilateral salpingo-oophorectomy (reduces ovarian cancer risk ~80% and breast cancer risk ~50% if done premenopausally), chemoprevention (tamoxifen or raloxifene reduces risk ~50% in BRCA2 carriers, less clear benefit in BRCA1).",
                    "pearl": "Epidemiologic Pearl: BRCA1/2 mutations are found in ~1 in 400 individuals in the general population but are much more common in certain populations: Ashkenazi Jewish (1 in 40 carry one of three founder mutations), Icelandic, and some Hispanic and African-American communities. USPSTF recommends genetic counseling and possible BRCA testing for women with a family history pattern suggestive of BRCA. Population-based BRCA screening (testing everyone regardless of family history) is debated but gaining support."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "Annual mammography only",
                        "B": "Alternating breast MRI and mammography every 6 months per NCCN guidelines: breast MRI with contrast is the most sensitive modality (~95% sensitivity) and is essential in dense-breasted BRCA carriers where mammography alone misses >50% of cancers",
                        "C": "Breast ultrasound only",
                        "D": "No imaging until age 40"
                    },
                    "explanation": "Alternating MRI + Mammography",
                    "text": "The alternating schedule ensures imaging every 6 months: <strong>Month 0</strong>: breast MRI \u2192 <strong>Month 6</strong>: mammography \u2192 <strong>Month 12</strong>: breast MRI \u2192 and so on. MRI sensitivity for breast cancer is ~95% compared to ~30-50% for mammography in extremely dense breasts. <strong>MRI limitations</strong>: lower specificity (more false positives), requires IV gadolinium (contraindicated in severe renal insufficiency), expensive, and less accessible. <strong>Contrast-enhanced mammography (CEM)</strong> is an emerging alternative that may approach MRI sensitivity at lower cost and greater availability."
                },
                "expect": {
                    "correct": "A",
                    "options": {
                        "A": "In a 32-year-old BRCA1 carrier without symptoms, expect either a normal MRI (most likely at this age, but annual screening catches cancers early when they develop) or a small enhancing lesion requiring further evaluation \u2014 BRCA1 cancers tend to be fast-growing, which is why frequent screening is critical",
                        "B": "MRI will definitely show cancer",
                        "C": "Dense breasts prevent any imaging modality from detecting cancer",
                        "D": "MRI is unnecessary if mammography is normal"
                    },
                    "explanation": "MRI in BRCA Carriers",
                    "text": "Breast MRI findings: <strong>Normal</strong>: background parenchymal enhancement (BPE) is common in young women and varies with menstrual cycle \u2014 MRI is best performed on days 7-14 of the cycle (when BPE is lowest). <strong>Suspicious findings</strong>: mass with irregular margins and heterogeneous enhancement, non-mass enhancement with segmental or linear distribution, rapid washout kinetics (contrast uptake peaks then washes out \u2014 Type III curve = suspicious). MRI detects BRCA-associated cancers at significantly earlier stages than mammography alone, which is why it reduces mortality in this population."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "MRI findings never require biopsy",
                        "B": "All enhancing lesions require mastectomy",
                        "C": "If MRI shows a suspicious finding (BI-RADS 4/5): MRI-guided core biopsy or second-look US to attempt US-guided biopsy. If normal: continue alternating MRI/mammography every 6 months. Concurrent discussion of risk-reducing surgery options (prophylactic bilateral mastectomy, bilateral salpingo-oophorectomy) based on patient values and life planning",
                        "D": "Watchful waiting for all MRI findings"
                    },
                    "explanation": "Biopsy + Risk Reduction Counseling",
                    "text": "Suspicious MRI findings in BRCA carriers warrant biopsy, not observation. The biopsy result determines: if cancer is found, BRCA status impacts surgical planning (strong consideration of bilateral mastectomy rather than lumpectomy due to high contralateral cancer risk of 40-60% over lifetime), and may influence systemic therapy (BRCA1 triple-negative cancers respond to platinum chemotherapy and PARP inhibitors like olaparib). <strong>Risk-reducing surgery discussion</strong> should be ongoing regardless of screening results: prophylactic bilateral mastectomy reduces breast cancer risk by 90-95%, and bilateral salpingo-oophorectomy is recommended by age 35-40 for BRCA1 carriers.",
                    "radiopaedia": "https://radiopaedia.org/articles/brca"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Screening only, no discussion of surgery",
                        "B": "Immediate bilateral mastectomy for all BRCA carriers",
                        "C": "Screening + chemoprevention only",
                        "D": "Continue alternating MRI/mammography every 6 months + ongoing genetic counseling + shared decision-making about risk-reducing surgery (respect patient autonomy and timing \u2014 many women choose surveillance until after completing childbearing) + discuss bilateral salpingo-oophorectomy by age 35-40 (ovarian cancer has no effective screening) + fertility preservation counseling if considering risk-reducing surgery + cascade genetic testing for at-risk family members + psychosocial support for cancer anxiety + chemoprevention discussion (tamoxifen in BRCA2)"
                    },
                    "explanation": "Comprehensive Hereditary Cancer Risk Management",
                    "text": "The imaging strategy is just one component of hereditary cancer risk management. The comprehensive plan includes: structured screening, risk-reducing surgery counseling (with respect for patient autonomy and life planning \u2014 many young women choose surveillance through childbearing years), ovarian cancer risk management (BSO recommended by 35-40 for BRCA1, by 40-45 for BRCA2 \u2014 there is NO effective ovarian cancer screening), cascade testing (each first-degree relative has 50% chance of carrying the mutation), and psychosocial support. The imaging finding \u2014 whether normal or abnormal \u2014 is a recurring touchpoint in this lifelong management relationship."
                }
            },
            {
                "modality": "Diagnostic Mammography \u2192 US \u2192 Biopsy",
                "title": "Palpable Breast Mass \u2014 Triple Assessment",
                "vignette": "A <strong>47-year-old woman</strong> found a hard, non-mobile lump in her left breast 3 weeks ago during self-exam. It has grown slightly since she first noticed it. On exam: 2.5 cm firm, irregular, non-mobile mass in the upper outer quadrant of the left breast with skin dimpling. No axillary lymphadenopathy palpated. Her last mammogram was 2 years ago (normal). Family history: mother with breast cancer at 58.",
                "context": {
                    "question": "What clinical features make malignancy the primary concern, and what is the triple assessment approach?",
                    "correct": "D",
                    "options": {
                        "A": "Most breast lumps in women under 50 are benign",
                        "B": "A normal mammogram 2 years ago makes cancer unlikely",
                        "C": "Skin dimpling is a normal finding",
                        "D": "Red flags for malignancy: hard, irregular, non-mobile mass (tethered to surrounding tissue), skin dimpling (Cooper ligament involvement), and recent growth. The 'triple assessment' approach (clinical exam + imaging + tissue sampling) is the standard of care for any palpable breast mass. All three must be concordant \u2014 a benign result on one does not override suspicious findings on another. Her family history (mother with breast cancer) adds to risk. A normal mammogram 2 years ago does NOT exclude cancer \u2014 interval cancers can develop between screenings"
                    },
                    "explanation": "Triple Assessment for Palpable Breast Mass",
                    "text": "The <strong>triple assessment</strong> is the cornerstone of breast lump evaluation: (1) <strong>Clinical examination</strong>: mass characteristics (hard vs soft, mobile vs fixed, regular vs irregular, skin changes, nipple changes). (2) <strong>Imaging</strong>: mammography + ultrasound (in women <30, US first due to breast density; in women \u226530, mammography + US). (3) <strong>Tissue sampling</strong>: core needle biopsy (preferred) or fine needle aspiration. All three must be concordant. <strong>Suspicious clinical features</strong>: hard, irregular, non-mobile, skin dimpling/peau d'orange, nipple retraction, bloody nipple discharge, fixed axillary lymphadenopathy.",
                    "pearl": "Epidemiologic Pearl: Upper outer quadrant is the most common location for breast cancer (~50% of cases) because it contains the most breast tissue and extends into the axillary tail. Interval cancers (developing between screening mammograms) account for 15-30% of screen-detected cancers and tend to be more aggressive (higher grade, more likely HER2+ or triple-negative). This underscores the importance of breast self-awareness and clinical breast exam between screening mammograms."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "Screening mammography at next scheduled appointment",
                        "B": "DIAGNOSTIC mammogram (not screening) + targeted breast ultrasound of the palpable mass. Diagnostic mammography includes additional spot compression and magnification views centered on the area of concern, plus evaluation of the contralateral breast",
                        "C": "MRI first",
                        "D": "Fine needle aspiration without imaging"
                    },
                    "explanation": "Diagnostic Mammography + Targeted US",
                    "text": "Important distinction: this patient needs a <strong>diagnostic</strong> mammogram (prompted by a clinical finding), not a screening mammogram (asymptomatic). Diagnostic mammography includes additional views (spot compression, magnification) focused on the palpable area. <strong>Targeted US</strong> of the mass evaluates: solid vs cystic, mass margins (irregular/spiculated = suspicious), orientation (taller-than-wide = suspicious), vascularity, and posterior acoustic features. US also evaluates axillary lymph nodes \u2014 if suspicious nodes are seen, US-guided FNA of the node can stage the axilla before surgery."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Simple cyst on US (BI-RADS 2)",
                        "B": "Normal mammogram and US \u2014 the lump is benign",
                        "C": "Spiculated mass with architectural distortion on mammography (BI-RADS 5) + irregular, hypoechoic, taller-than-wide solid mass with angular margins on US \u2014 highly suspicious for malignancy. Possible associated microcalcifications",
                        "D": "Fibroadenoma (well-circumscribed, oval, parallel)"
                    },
                    "explanation": "Malignant Imaging Features",
                    "text": "Malignant features on mammography: <strong>spiculated mass</strong> (the hallmark), architectural distortion, pleomorphic microcalcifications in a linear/segmental distribution, skin thickening, nipple retraction. On US: <strong>irregular hypoechoic mass</strong>, angular or spiculated margins, taller-than-wide orientation (growth crosses tissue planes), posterior acoustic shadowing, and vascularity. <strong>BI-RADS 5</strong> (\u226595% probability of malignancy): core needle biopsy is indicated. The imaging also evaluates for multifocal/multicentric disease and contralateral breast."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "BI-RADS 5 mass = US-guided core needle biopsy (14-gauge or vacuum-assisted). Biopsy provides: histological type (IDC, ILC, etc.), grade, receptor status (ER, PR, HER2), Ki-67 proliferation index \u2014 all essential for treatment planning BEFORE surgery",
                        "B": "Surgical excision as the diagnostic procedure",
                        "C": "Repeat imaging in 6 months",
                        "D": "Start chemotherapy based on imaging alone"
                    },
                    "explanation": "Core Biopsy Before Surgery",
                    "text": "Core needle biopsy is the standard diagnostic procedure \u2014 NOT surgical excision. The biopsy tissue provides: <strong>Histology</strong> (invasive ductal, invasive lobular, etc.), <strong>Grade</strong> (1-3), <strong>Receptor status</strong> (ER+/PR+: eligible for endocrine therapy; HER2+: eligible for trastuzumab; triple-negative: chemotherapy-dependent), <strong>Ki-67</strong> (proliferation marker). This information enables <strong>neoadjuvant treatment planning</strong>: many patients receive chemotherapy BEFORE surgery (especially HER2+ and triple-negative) to shrink the tumor and enable breast conservation. Starting surgery without this information is suboptimal care.",
                    "radiopaedia": "https://radiopaedia.org/articles/invasive-ductal-carcinoma-nos-1"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Biopsy and immediate mastectomy",
                        "B": "Biopsy and wait for patient to decide",
                        "C": "Lumpectomy without biopsy",
                        "D": "Core biopsy \u2192 multidisciplinary tumor board (surgery, medical oncology, radiation oncology, pathology, radiology) \u2192 treatment plan based on receptor status and stage: neoadjuvant chemotherapy if indicated (HER2+ or triple-negative) \u2192 breast MRI for extent of disease + contralateral evaluation \u2192 surgical planning (breast conservation vs mastectomy based on tumor-to-breast ratio, patient preference, genetic risk) \u2192 sentinel lymph node biopsy \u2192 adjuvant therapy per receptor status \u2192 genetic counseling (family history warrants BRCA testing)"
                    },
                    "explanation": "Multidisciplinary Team \u2192 Personalized Treatment",
                    "text": "The imaging and biopsy findings drive a multidisciplinary treatment plan. Modern breast cancer management is highly personalized: receptor-positive cancers receive endocrine therapy (\u00b1 CDK4/6 inhibitors), HER2+ cancers receive targeted therapy (trastuzumab), and triple-negative cancers depend on chemotherapy (\u00b1 immunotherapy with pembrolizumab per KEYNOTE-522). Neoadjuvant treatment before surgery can convert mastectomy candidates to breast conservation candidates. Genetic testing is indicated given her family history \u2014 BRCA status would influence surgical decisions (bilateral mastectomy consideration) and family screening recommendations."
                }
            },
            {
                "modality": "Mammography \u2192 Stereotactic Biopsy",
                "title": "Microcalcifications \u2014 DCIS Detection",
                "vignette": "A <strong>58-year-old woman</strong> has a routine screening mammogram that shows a new cluster of <strong>pleomorphic microcalcifications</strong> in a segmental distribution in the right breast. No palpable mass on exam. No nipple discharge. Prior mammograms (1 and 2 years ago) did not show these calcifications. She has scattered fibroglandular density (BI-RADS density B). She is on hormone replacement therapy (combined estrogen-progesterone) for menopausal symptoms.",
                "context": {
                    "question": "What epidemiological factors and imaging features make these calcifications concerning for DCIS or early invasive cancer?",
                    "correct": "C",
                    "options": {
                        "A": "All calcifications on mammography are benign",
                        "B": "New calcifications in a 58-year-old are always age-related",
                        "C": "Pleomorphic calcifications in a segmental distribution are BI-RADS 4B-4C (moderate-high suspicion). They are NEW (not on prior studies), which increases concern. Her HRT use (combined estrogen-progesterone) is a known breast cancer risk factor \u2014 the WHI trial showed a 26% increased breast cancer risk with combined HRT. DCIS (ductal carcinoma in situ) is the most common diagnosis associated with suspicious microcalcifications and represents a pre-invasive stage where intervention can prevent invasion",
                        "D": "HRT has no effect on breast cancer risk"
                    },
                    "explanation": "Microcalcification Morphology Drives Cancer Probability",
                    "text": "Microcalcifications are the most common mammographic finding leading to DCIS diagnosis. <strong>Morphology matters enormously</strong>: round/punctate = typically benign; amorphous = low suspicion; coarse heterogeneous = intermediate; fine pleomorphic = high suspicion (BI-RADS 4B); fine linear/branching = highest suspicion (BI-RADS 4C-5). <strong>Distribution matters</strong>: grouped = moderate concern; segmental or linear = high concern (follows a ductal distribution, suggesting intraductal process like DCIS). <strong>New calcifications</strong> (not present on priors) increase suspicion. <strong>HRT and DCIS</strong>: combined estrogen-progesterone HRT increases breast cancer risk (both DCIS and invasive) \u2014 this is why the WHI results changed HRT prescribing patterns dramatically.",
                    "pearl": "Epidemiologic Pearl: DCIS now accounts for ~25% of all breast cancers detected by screening mammography. The DCIS 'overdiagnosis' debate is one of the most active controversies in oncology: some low-grade DCIS may never progress to invasive cancer, yet treatment (surgery \u00b1 radiation \u00b1 endocrine therapy) carries real morbidity. Active surveillance trials for low-risk DCIS (COMET, LORD, LORIS) are ongoing and may change management. However, high-grade DCIS has a significant progression rate and clearly benefits from treatment."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Stereotactic (mammography-guided) vacuum-assisted core biopsy \u2014 the standard for sampling microcalcifications that are only visible on mammography (not visible on US)",
                        "B": "US-guided biopsy",
                        "C": "MRI for further characterization first",
                        "D": "Repeat mammogram in 6 months"
                    },
                    "explanation": "Stereotactic Biopsy for Calcifications",
                    "text": "Microcalcifications are frequently not visible on ultrasound \u2014 they require <strong>stereotactic biopsy</strong> (performed using mammographic guidance with the patient prone or upright). <strong>Vacuum-assisted biopsy</strong> (9-11 gauge) is preferred over spring-loaded core biopsy (14 gauge) for calcifications because it obtains more tissue and improves diagnostic accuracy. A <strong>specimen radiograph</strong> must confirm that the biopsied tissue contains the calcifications. A <strong>biopsy marker clip</strong> is placed at the site for future localization if surgery is needed. Post-biopsy mammogram confirms clip position."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Benign fibrocystic changes",
                        "B": "Pathology most likely shows DCIS (ductal carcinoma in situ) \u2014 the most common diagnosis associated with pleomorphic segmental microcalcifications. DCIS grade and extent will guide treatment: low-grade may warrant different management than high-grade with comedo necrosis",
                        "C": "Invasive ductal carcinoma",
                        "D": "Fat necrosis"
                    },
                    "explanation": "DCIS \u2014 Pre-Invasive Cancer",
                    "text": "DCIS represents malignant cells <strong>confined within the milk ducts</strong> (no basement membrane invasion). Calcifications form from necrotic cellular debris within the ducts. <strong>DCIS grading</strong>: low, intermediate, or high grade. <strong>Comedo necrosis</strong> (central necrosis with linear calcifications) indicates higher-grade DCIS with greater progression risk. <strong>Upgrade rate</strong>: 20-25% of DCIS on core biopsy is upgraded to invasive cancer on surgical excision \u2014 this is why excision follows core biopsy even when DCIS is confirmed."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "DCIS requires no treatment \u2014 it's 'pre-cancer'",
                        "B": "Mastectomy for all DCIS",
                        "C": "DCIS treatment depends on extent and grade: breast-conserving surgery (lumpectomy with wire or seed localization) + whole breast radiation reduces local recurrence from ~30% to ~15%. Radiation may be omitted for small (<2.5cm), low-grade DCIS with wide margins in patients >50 (per RTOG 9804). Endocrine therapy (tamoxifen or AI) further reduces recurrence. Discuss HRT discontinuation with her physician",
                        "D": "Chemotherapy for all DCIS"
                    },
                    "explanation": "DCIS \u2014 Personalized Treatment",
                    "text": "DCIS treatment is personalized using the <strong>Van Nuys Prognostic Index</strong> (VNPI): incorporates size, margin width, grade, and patient age. <strong>Low-risk DCIS</strong>: lumpectomy alone may suffice if wide margins (\u226510mm). <strong>Intermediate-risk</strong>: lumpectomy + radiation (standard). <strong>High-risk or extensive</strong>: mastectomy may be preferred. <strong>DCIS does NOT require chemotherapy</strong> (it's non-invasive), but endocrine therapy (tamoxifen for premenopausal, aromatase inhibitor for postmenopausal) reduces ipsilateral and contralateral breast cancer risk by ~50%. <strong>HRT should be discontinued</strong> given the breast cancer diagnosis.",
                    "radiopaedia": "https://radiopaedia.org/articles/ductal-carcinoma-in-situ"
                },
                "integrate": {
                    "correct": "A",
                    "options": {
                        "A": "Wire/seed-localized lumpectomy with margin assessment \u2192 radiation therapy per risk assessment \u2192 endocrine therapy discussion \u2192 DISCONTINUE HRT (the probable contributing factor) \u2192 discuss menopausal symptom alternatives (vaginal estrogen may be acceptable, non-hormonal options: SSRIs, gabapentin, lifestyle modifications) \u2192 annual mammography (both breasts) for surveillance \u2192 genetic counseling if family history warrants",
                        "B": "Biopsy only with no further treatment",
                        "C": "Mastectomy with chemotherapy",
                        "D": "Repeat biopsy in 6 months"
                    },
                    "explanation": "Treatment + HRT Discontinuation + Surveillance",
                    "text": "The mammographic finding (calcifications invisible on clinical exam) detected a pre-invasive cancer at its most treatable stage \u2014 this is screening mammography working exactly as intended. The treatment plan addresses the DCIS directly (surgery \u00b1 radiation \u00b1 endocrine therapy) AND removes the modifiable risk factor (HRT). The HRT conversation requires sensitivity: menopausal symptoms significantly impact quality of life, and alternative management strategies should be offered. Surveillance mammography is essential \u2014 DCIS recurrence risk continues for 10+ years, and the contralateral breast is also at elevated risk."
                }
            }
        ],
        "cross_links": [
            ("\ud83e\uddb4 Musculoskeletal", "raddx-msk.html", "X-ray, MRI, bone scan"),
            ("\ud83e\uded8 Renal/GU", "raddx-renal-gu.html", "CT KUB, ultrasound, Doppler"),
            ("\ud83e\udd30 OB/GYN Imaging", "raddx-ob.html", "Ectopic, previa, torsion, molar"),
            ("\u2190 RadDx Hub", "raddx-hub.html", "All body systems"),
        ],
        "references": [
            ("USPSTF Breast Cancer Screening 2024", "https://doi.org/10.1001/jama.2024.5534"),
            ("ACR BI-RADS Atlas 5th Edition", "https://www.acr.org/Clinical-Resources/Reporting-and-Data-Systems/Bi-Rads"),
            ("NCCN Breast Cancer Screening and Diagnosis Guidelines", "https://www.nccn.org/guidelines/guidelines-detail?category=2&id=1421"),
            ("BRCA Screening \u2014 StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK470239/"),
            ("DCIS \u2014 StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK567766/"),
            ("Radiopaedia.org", "https://radiopaedia.org"),
        ]
    },
    "ent": {
        "icon": "\ud83d\udc42",
        "title": "Head & Neck Imaging",
        "badge": "ENT / EMERGENCY",
        "scenarios": [
            {
                "modality": "CT Neck with Contrast",
                "title": "Peritonsillar Abscess",
                "vignette": "A <strong>22-year-old male</strong> college student presents with 5 days of progressively worsening sore throat, now with trismus (difficulty opening mouth), muffled 'hot potato' voice, drooling, and inability to swallow. He took amoxicillin from a roommate for 2 days without improvement. On exam: left tonsillar bulge with uvular deviation to the right, exquisite tenderness, fever 39.4\u00b0C. He smokes marijuana daily and vapes nicotine.",
                "context": {
                    "question": "What epidemiological and behavioral factors are relevant to peritonsillar abscess formation?",
                    "correct": "D",
                    "options": {
                        "A": "PTA only occurs after untreated strep pharyngitis",
                        "B": "His age makes deep space neck infections unlikely",
                        "C": "Vaping and marijuana have no ENT effects",
                        "D": "Peritonsillar abscess (PTA) is the most common deep space neck infection (peak age 20-40). Risk factors: undertreated pharyngitis/tonsillitis (he took incomplete antibiotic course without diagnosis), smoking/vaping (impairs mucosal immunity, 2-3\u00d7 increased risk), marijuana use (oropharyngeal mucosal inflammation and immunosuppression), dental disease, and immunosuppression. PTA can progress to parapharyngeal and retropharyngeal abscess or descend into the mediastinum (descending necrotizing mediastinitis) if untreated"
                    },
                    "explanation": "Deep Space Neck Infection Epidemiology",
                    "text": "PTA affects ~30 per 100,000 adults annually (most common deep neck space infection). The <strong>pharyngitis \u2192 peritonsillar cellulitis \u2192 PTA</strong> progression occurs over days when infection breaches the tonsillar capsule into the peritonsillar space. <strong>Smoking/vaping connection</strong>: tobacco and nicotine impair mucosal immune function, alter the oropharyngeal microbiome, and are independent risk factors for PTA. <strong>Marijuana</strong> causes pharyngeal inflammation and immune modulation. <strong>Incomplete antibiotic use</strong> (taking someone else's antibiotics without proper diagnosis or course completion) is a common pathway to abscess formation and contributes to antibiotic resistance.",
                    "pearl": "Epidemiologic Pearl: The rise of vaping among young adults (18-25) has been associated with increased rates of oropharyngeal infections, though the precise causal mechanism is still being studied. E-cigarette aerosol contains propylene glycol, vegetable glycerin, and flavoring chemicals that damage oropharyngeal epithelium. Combined vaping + marijuana use is increasingly common and likely amplifies oropharyngeal mucosal damage."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "Lateral neck X-ray",
                        "B": "CT neck with IV contrast \u2014 the gold standard for deep space neck infections. Identifies abscess vs cellulitis (drainable vs non-drainable), defines abscess location and extent, evaluates for extension to parapharyngeal/retropharyngeal spaces, and assesses airway compromise",
                        "C": "MRI neck",
                        "D": "Ultrasound of the neck"
                    },
                    "explanation": "CT Neck with Contrast",
                    "text": "CT with IV contrast differentiates <strong>abscess</strong> (rim-enhancing fluid collection \u2192 needs drainage) from <strong>cellulitis</strong> (diffuse enhancement without fluid collection \u2192 may respond to antibiotics alone). Critical evaluations: (1) abscess size and location (peritonsillar vs parapharyngeal vs retropharyngeal), (2) airway patency (is the abscess displacing/compressing the airway?), (3) vascular involvement (internal jugular vein thrombosis = Lemierre syndrome), (4) extension inferiorly toward the mediastinum. <strong>Intraoral US</strong> is an emerging bedside tool for PTA that can guide needle aspiration without CT if the diagnosis is clinically obvious."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal CT with pharyngitis only",
                        "B": "Retropharyngeal abscess",
                        "C": "Rim-enhancing fluid collection in the left peritonsillar space with surrounding inflammatory changes, mass effect displacing the oropharynx medially (explaining trismus and muffled voice), and preserved airway (no critical narrowing)",
                        "D": "Tonsillar malignancy"
                    },
                    "explanation": "PTA CT Findings",
                    "text": "PTA on CT: <strong>rim-enhancing hypodense collection</strong> (abscess cavity with surrounding enhancing wall) in the peritonsillar space, typically between the tonsillar capsule and the superior constrictor muscle. Associated findings: ipsilateral tonsillar enlargement, uvular deviation to the contralateral side, fat stranding in the parapharyngeal space, and cervical lymphadenopathy. <strong>Red flags on CT</strong>: extension beyond the peritonsillar space (parapharyngeal involvement), internal jugular vein thrombosis (Lemierre syndrome), gas within the collection (anaerobic infection), and mediastinal extension."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "CT confirms drainable PTA \u2192 needle aspiration or incision and drainage (I&D) + IV antibiotics (ampicillin-sulbactam or clindamycin for anaerobic coverage). ENT consultation for drainage. If recurrent PTA, discuss interval tonsillectomy",
                        "B": "Antibiotics alone for all peritonsillar abscesses",
                        "C": "Emergency tonsillectomy ('quinsy tonsillectomy')",
                        "D": "Observation and repeat CT in 48 hours"
                    },
                    "explanation": "Drainage + Antibiotics",
                    "text": "PTA treatment requires <strong>drainage + antibiotics</strong>: needle aspiration (can be done at bedside, 90-95% success rate) or formal I&D (for large abscesses or failed aspiration). IV antibiotics: ampicillin-sulbactam or clindamycin (covers strep, oral anaerobes, and staph). Send aspirate for culture. <strong>Airway management</strong> is the priority if CT shows significant airway compromise \u2014 intubation may be required before drainage. <strong>Quinsy tonsillectomy</strong> (immediate tonsillectomy) is occasionally performed for recurrent PTA or failed drainage but carries higher perioperative bleeding risk.",
                    "radiopaedia": "https://radiopaedia.org/articles/peritonsillar-abscess"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Drainage and discharge on oral antibiotics",
                        "B": "IV antibiotics only",
                        "C": "Surgery and discharge",
                        "D": "Drainage (needle aspiration or I&D) + IV antibiotics \u2192 transition to oral antibiotics when improving (amoxicillin-clavulanate or clindamycin for 10-14 days) + smoking/vaping/marijuana cessation counseling (modifiable risk factor for recurrence) + education about antibiotic stewardship (never take someone else's antibiotics) + ENT follow-up for possible interval tonsillectomy if recurrent + monitor for complications (airway compromise, Lemierre syndrome)"
                    },
                    "explanation": "Drainage + Antibiotics + Risk Factor Modification",
                    "text": "The CT finding directed the drainage procedure and ruled out dangerous extension. The comprehensive plan addresses: acute infection (drainage + antibiotics), modifiable risk factors (smoking/vaping/marijuana cessation \u2014 the most impactful prevention measure), antibiotic stewardship education (incomplete courses breed resistance and promote abscess formation), and long-term planning (interval tonsillectomy if \u22652 episodes of PTA or recurrent tonsillitis meeting Paradise criteria)."
                }
            },
            {
                "modality": "CT Orbits/Sinuses with Contrast",
                "title": "Orbital Cellulitis \u2014 The Dangerous Sinusitis Complication",
                "vignette": "An <strong>8-year-old boy</strong> presents with 3 days of worsening left periorbital swelling, now with proptosis (eye bulging forward), restricted eye movements (pain with extraocular motion), decreased visual acuity in the left eye, and fever 39.8\u00b0C. He had an upper respiratory infection with nasal congestion for the past week. On exam: chemosis (conjunctival swelling), afferent pupillary defect (Marcus Gunn pupil).",
                "context": {
                    "question": "What makes this presentation orbital cellulitis (a true emergency) rather than preseptal cellulitis (less dangerous)?",
                    "correct": "D",
                    "options": {
                        "A": "Periorbital swelling in children is always preseptal and benign",
                        "B": "The URI is unrelated to the orbital findings",
                        "C": "Visual acuity changes are common with allergic conjunctivitis",
                        "D": "The key differentiator is POST-SEPTAL involvement: proptosis, restricted extraocular movements, decreased visual acuity, and afferent pupillary defect ALL indicate orbital cellulitis (infection BEHIND the orbital septum) rather than preseptal cellulitis (infection ANTERIOR to the septum). Orbital cellulitis almost always results from extension of ethmoid sinusitis (the ethmoid sinus is separated from the orbit by the paper-thin lamina papyracea). Peak age 5-10 years, because sinus infections are common and the bony barriers are thinnest"
                    },
                    "explanation": "Preseptal vs Orbital Cellulitis",
                    "text": "The <strong>orbital septum</strong> (a fascial extension of the periosteum) is the critical anatomical landmark: infections anterior to it (preseptal cellulitis) are managed with oral antibiotics and outpatient follow-up. Infections posterior to it (orbital cellulitis) can cause <strong>vision loss</strong> (optic nerve compression), <strong>cavernous sinus thrombosis</strong> (intracranial extension via valveless ophthalmic veins), and <strong>intracranial abscess</strong>. <strong>The Chandler classification</strong>: Stage I (preseptal), Stage II (orbital cellulitis/phlegmon), Stage III (subperiosteal abscess), Stage IV (orbital abscess), Stage V (cavernous sinus thrombosis). Children aged 5-10 are most commonly affected because they have frequent sinusitis and the lamina papyracea is very thin.",
                    "pearl": "Epidemiologic Pearl: Since the introduction of the Haemophilus influenzae type B (Hib) vaccine, H. influenzae orbital cellulitis has dramatically decreased. Current pathogens are predominantly S. aureus (including MRSA in some regions), Streptococcus species, and anaerobes (especially in dental-origin infections). However, polymicrobial infections are common. MRSA coverage should be considered in regions with high community MRSA prevalence."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "CT orbits/sinuses with IV contrast \u2014 the first-line imaging study. Differentiates preseptal from postseptal infection, identifies subperiosteal or orbital abscess (drainable collections), evaluates the extent of sinusitis, and screens for intracranial complications",
                        "B": "Orbital ultrasound",
                        "C": "MRI orbits",
                        "D": "Sinus X-rays"
                    },
                    "explanation": "CT Orbits with Contrast \u2014 Emergent",
                    "text": "CT with contrast is the standard: <strong>evaluates</strong> the orbit for abscess (rim-enhancing collection), phlegmonous change, proptosis, extraocular muscle enlargement/displacement, optic nerve compression, extent of sinusitis (which sinuses involved), lamina papyracea dehiscence (route of orbital entry), and intracranial extension (cavernous sinus, epidural/subdural empyema, brain abscess). <strong>MRI is superior for intracranial complications</strong> and can be added if CT suggests cavernous sinus involvement or intracranial extension. CT is faster and more accessible emergently."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Preseptal swelling only with normal post-septal structures",
                        "B": "Orbital tumor",
                        "C": "Opacified left ethmoid sinus with dehiscent lamina papyracea and a subperiosteal abscess along the medial orbital wall, displacing the medial rectus and globe laterally, causing proptosis. Post-septal inflammatory changes confirm orbital cellulitis (Chandler Stage III)",
                        "D": "Normal CT with isolated preseptal cellulitis"
                    },
                    "explanation": "Subperiosteal Abscess \u2014 The Most Common Surgical Finding",
                    "text": "Subperiosteal abscess (SPA) is the most common surgical finding in orbital cellulitis: a rim-enhancing collection between the lamina papyracea and the medial periorbita, displacing the medial rectus and globe laterally. CT identifies: <strong>abscess size</strong> (determines surgical vs medical management), <strong>globe displacement/proptosis</strong> (degree of optic nerve stretch), <strong>extraocular muscle involvement</strong> (predicts motility recovery), and <strong>intracranial extension</strong> (epidural abscess, cavernous sinus thrombosis). <strong>On CT</strong>: the abscess appears as a low-density, rim-enhancing crescentic collection medial to the medial rectus."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "Oral antibiotics and outpatient management",
                        "B": "CT confirms Chandler Stage III (SPA) with visual compromise (afferent pupillary defect) = SURGICAL EMERGENCY. Urgent ENT/ophthalmology consultation for surgical drainage (endoscopic sinus surgery + abscess drainage). IV broad-spectrum antibiotics (vancomycin + ceftriaxone + metronidazole for MRSA, strep, and anaerobic coverage). Close visual acuity monitoring",
                        "C": "Repeat CT in 48 hours to see if the abscess resolves",
                        "D": "Steroids only to reduce swelling"
                    },
                    "explanation": "Surgical Drainage + IV Antibiotics",
                    "text": "Surgical indications: <strong>visual compromise</strong> (decreased acuity, afferent pupillary defect \u2014 indicates optic nerve compression), <strong>large SPA</strong> (>1cm or occupying >50% of the orbit), <strong>clinical deterioration despite 24-48h of IV antibiotics</strong>, and <strong>intracranial extension</strong>. The surgical approach is typically <strong>endoscopic sinus surgery</strong> with trans-ethmoid drainage of the SPA + opening of the opacified sinuses. Medical management (IV antibiotics alone) may be attempted for small SPA without visual compromise in patients who are clinically stable and closely monitored.",
                    "radiopaedia": "https://radiopaedia.org/articles/orbital-cellulitis"
                },
                "integrate": {
                    "correct": "A",
                    "options": {
                        "A": "Urgent surgical drainage + IV antibiotics (vancomycin + ceftriaxone + metronidazole) + ophthalmology co-management (serial visual acuity checks, IOP monitoring) + post-operative CT if clinical concern for residual/recurrent abscess + transition to oral antibiotics when improving (total 2-3 weeks) + follow-up with ENT for sinus management + consider adenoidectomy evaluation if recurrent sinusitis + vision follow-up to ensure complete visual recovery",
                        "B": "IV antibiotics for 2 weeks without surgery",
                        "C": "Oral antibiotics and discharge",
                        "D": "Surgery only if vision is lost"
                    },
                    "explanation": "Surgical Drainage + Vision Preservation",
                    "text": "The CT finding (SPA with visual compromise) directed emergent surgical intervention to preserve vision. The afferent pupillary defect indicates optic nerve dysfunction \u2014 delayed drainage risks permanent vision loss. Post-operative management includes serial visual acuity monitoring (to confirm improvement), IV antibiotics for the duration of hospitalization transitioning to oral, and ENT follow-up for underlying sinus disease management. Recurrent sinusitis in children may warrant adenoidectomy evaluation. The CT was the critical decision tool that differentiated surgical (Stage III-V) from medical (Stage I-II) management."
                }
            },
            {
                "modality": "Ultrasound \u2192 FNA",
                "title": "Thyroid Nodule \u2014 TI-RADS Classification",
                "vignette": "A <strong>45-year-old woman</strong> has a thyroid nodule found incidentally on a CT scan performed for a motor vehicle accident evaluation. The CT report notes a 2.2 cm right thyroid lobe nodule. She is asymptomatic \u2014 no dysphagia, hoarseness, or neck mass symptoms. She has no history of head/neck radiation. TSH is normal. She grew up near the Chernobyl exclusion zone in Ukraine and emigrated to the US at age 12.",
                "context": {
                    "question": "What epidemiological and exposure factors are critical for evaluating thyroid nodule malignancy risk?",
                    "correct": "D",
                    "options": {
                        "A": "Incidentally discovered thyroid nodules are always benign",
                        "B": "Her Chernobyl proximity is not clinically relevant decades later",
                        "C": "All thyroid nodules >1 cm require surgery",
                        "D": "Her childhood proximity to Chernobyl is the most critical risk factor: childhood radiation exposure is the STRONGEST known risk factor for thyroid cancer (linear dose-response, latency 5-40+ years). The Chernobyl disaster (1986) caused a dramatic increase in pediatric thyroid cancer in exposed populations, particularly from radioiodine (I-131). She was exposed as a young child during the critical thyroid development period. Thyroid nodules are common (50-60% of adults by ultrasound), but her radiation exposure shifts the pre-test probability of malignancy significantly"
                    },
                    "explanation": "Thyroid Nodule and Radiation Exposure Epidemiology",
                    "text": "Thyroid nodules are extremely common: palpable in 5% of adults, detectable on US in 50-60%. Most are benign (95%). <strong>Malignancy risk factors</strong>: childhood radiation exposure (strongest \u2014 Chernobyl, Fukushima, therapeutic radiation for childhood cancers), family history of thyroid cancer or MEN2, age <20 or >60, male sex, rapid growth, fixed mass, hoarseness, cervical lymphadenopathy. <strong>Chernobyl-specific</strong>: children exposed to I-131 fallout had 5-10\u00d7 increased thyroid cancer risk, with papillary thyroid carcinoma (often with RET/PTC rearrangements) being the predominant type. Latency is long \u2014 increased risk persists for decades.",
                    "pearl": "Epidemiologic Pearl: The Chernobyl thyroid cancer epidemic is the best-documented example of radiation-induced thyroid malignancy. Over 6,000 excess thyroid cancers have been attributed to the disaster, primarily in children exposed to I-131 through contaminated milk. This drove worldwide changes in nuclear emergency response \u2014 potassium iodide (KI) distribution is now standard to block thyroid I-131 uptake. Post-Fukushima thyroid screening in Japan detected many incidentalomas, raising overdiagnosis concerns."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Dedicated thyroid ultrasound with TI-RADS classification \u2014 the first-line imaging study for thyroid nodule characterization. US features determine whether FNA biopsy is indicated",
                        "B": "CT neck with contrast for better characterization",
                        "C": "Thyroid nuclear scan (I-123 uptake)",
                        "D": "PET scan"
                    },
                    "explanation": "Thyroid US with TI-RADS",
                    "text": "Thyroid US is the gold standard for nodule characterization using the <strong>ACR TI-RADS</strong> (Thyroid Imaging Reporting and Data System) scoring system. US features scored: composition (cystic/spongiform vs solid), echogenicity (hyperechoic vs hypoechoic vs very hypoechoic), shape (wider-than-tall vs taller-than-wide), margin (smooth vs irregular/extrathyroidal), and echogenic foci (none vs macrocalcifications vs peripheral vs punctate). <strong>TI-RADS categories</strong>: TR1 (benign) \u2192 TR5 (highly suspicious). The category + size determines FNA threshold. Nuclear scan (I-123) is reserved for nodules with suppressed TSH (to identify 'hot' autonomous nodules, which are almost never malignant)."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Simple cyst (TI-RADS 1, benign) \u2014 no FNA needed",
                        "B": "Given her radiation exposure history, any solid hypoechoic nodule is concerning. Expect a solid, hypoechoic nodule, possibly with punctate echogenic foci (microcalcifications) and irregular margins \u2014 features that would classify as TI-RADS 4 or 5 (moderately to highly suspicious), meeting the size threshold for FNA at 2.2 cm",
                        "C": "Diffuse thyroiditis pattern only",
                        "D": "Multinodular goiter without dominant nodule"
                    },
                    "explanation": "TI-RADS Scoring and FNA Thresholds",
                    "text": "TI-RADS FNA thresholds vary by suspicion level: <strong>TR2 (not suspicious)</strong>: no FNA regardless of size. <strong>TR3 (mildly suspicious)</strong>: FNA if \u22652.5 cm, follow-up if \u22651.5 cm. <strong>TR4 (moderately suspicious)</strong>: FNA if \u22651.5 cm, follow-up if \u22651.0 cm. <strong>TR5 (highly suspicious)</strong>: FNA if \u22651.0 cm, follow-up if \u22650.5 cm. This patient's 2.2 cm nodule meets FNA threshold for any TI-RADS \u22653 category. <strong>Suspicious US features</strong> (solid, hypoechoic, microcalcifications, taller-than-wide, irregular margins) increase the TI-RADS score and lower the FNA size threshold."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Repeat US in 1 year regardless of TI-RADS score",
                        "B": "Immediate thyroidectomy based on imaging alone",
                        "C": "US-guided FNA biopsy of the nodule with Bethesda classification of cytology results. Given her radiation exposure history, even Bethesda III (atypia of undetermined significance) should be treated with a lower threshold for surgical management than in the general population. Molecular testing (Afirma, ThyroSeq) can refine indeterminate cytology results",
                        "D": "No FNA needed if TSH is normal"
                    },
                    "explanation": "FNA + Bethesda Classification",
                    "text": "US-guided FNA yields cytology classified by the <strong>Bethesda System</strong>: <strong>I</strong> (non-diagnostic, repeat), <strong>II</strong> (benign, 0-3% malignancy), <strong>III</strong> (AUS/FLUS, 5-15%), <strong>IV</strong> (follicular neoplasm, 15-30%), <strong>V</strong> (suspicious for malignancy, 60-75%), <strong>VI</strong> (malignant, 97-99%). For indeterminate results (III-IV), <strong>molecular testing</strong> (Afirma GSC or ThyroSeq v3) helps guide surgical decisions. <strong>Radiation exposure history shifts management toward surgery</strong> for indeterminate results, because the pre-test probability of malignancy is higher than population averages used in standard molecular test interpretation.",
                    "radiopaedia": "https://radiopaedia.org/articles/thyroid-nodule"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "FNA and follow-up only",
                        "B": "Total thyroidectomy for all thyroid nodules",
                        "C": "Surveillance without FNA given normal TSH",
                        "D": "US-guided FNA \u2192 management per Bethesda + radiation exposure context (lower threshold for surgery in indeterminate results) \u2192 if Bethesda V-VI or indeterminate + high clinical suspicion: surgical referral (lobectomy vs total thyroidectomy depending on cytology, nodule size, and patient preference) \u2192 document childhood radiation exposure history thoroughly \u2192 evaluate contralateral lobe for additional nodules \u2192 long-term thyroid US surveillance regardless of FNA result \u2192 genetic counseling not typically needed for radiation-induced thyroid cancer (somatic, not germline mutations)"
                    },
                    "explanation": "FNA + Risk-Adjusted Management + Radiation Documentation",
                    "text": "The incidental CT finding triggered a thyroid-specific workup that uncovered a clinically significant nodule in a high-risk patient. Her Chernobyl radiation exposure is a critical piece of history that changes management thresholds: standard molecular testing algorithms were validated in populations without radiation exposure, so results should be interpreted more conservatively. Long-term surveillance is essential even if the current nodule is benign \u2014 radiation-induced thyroid cancer can develop with latency of decades, and new nodules may appear over time. This is a powerful example of how environmental exposure history fundamentally changes the clinical approach to a common imaging finding."
                }
            },
            {
                "modality": "CT Neck with Contrast \u2192 CT Chest",
                "title": "Neck Mass in an Adult \u2014 The Rule of 80s",
                "vignette": "A <strong>58-year-old male</strong> presents with a painless, firm, 3 cm left lateral neck mass that he noticed 6 weeks ago and has been growing. He has a 35-pack-year smoking history and drinks 2-3 beers daily. He reports progressive left ear pain (otalgia) without ear pathology, mild hoarseness, and unintentional 8-lb weight loss over 2 months. On exam: firm, non-tender, fixed mass in level II/III of the left neck. Oropharyngeal exam shows a subtle left tonsillar asymmetry.",
                "context": {
                    "question": "What epidemiological factors and clinical features make metastatic squamous cell carcinoma the leading diagnosis?",
                    "correct": "D",
                    "options": {
                        "A": "Neck masses in adults are usually benign reactive lymph nodes",
                        "B": "A painless mass is less concerning than a painful one",
                        "C": "Ear pain indicates an ear problem, not a neck problem",
                        "D": "The Rule of 80s applies to adult lateral neck masses: 80% are neoplastic, 80% of neoplastic masses are malignant, and 80% of malignant masses are metastatic SCC from a mucosal primary (oropharynx, larynx, hypopharynx). His risk factors: smoking (strongest risk for mucosal head/neck SCC), alcohol (synergistic with smoking \u2014 combined risk is MULTIPLICATIVE), male sex (3:1 M:F). Referred otalgia (ear pain without ear disease) indicates vagus nerve involvement. The tonsillar asymmetry may be the primary tumor. HPV-related oropharyngeal SCC is now the MOST COMMON head/neck SCC in the US"
                    },
                    "explanation": "Adult Neck Mass: The Rule of 80s",
                    "text": "In adults >40, a new lateral neck mass is <strong>metastatic SCC until proven otherwise</strong>. <strong>Smoking + alcohol synergy</strong>: combined use increases head/neck SCC risk 15-30\u00d7 (multiplicative, not additive). <strong>HPV-related oropharyngeal SCC</strong> has surpassed tobacco-related SCC in the US \u2014 driven primarily by HPV-16 infection of the tonsillar crypts and base of tongue. HPV+ cancers occur in younger, healthier patients (often non-smokers), have BETTER prognosis (80-90% 3-year survival), and are associated with sexual behavior (number of oral sex partners). <strong>Clinical red flags</strong>: firm/fixed mass, >6 weeks duration, unilateral otalgia, hoarseness, weight loss, cranial nerve deficits.",
                    "pearl": "Epidemiologic Pearl: HPV-related oropharyngeal SCC is an epidemic: incidence has increased 225% since the 1980s in the US, primarily in white males aged 40-60. The HPV vaccine (Gardasil 9) is expected to dramatically reduce this cancer, but the effect won't be seen for decades due to the long latency between HPV infection and cancer development. Meanwhile, p16 immunohistochemistry on biopsy is the standard surrogate marker for HPV status and is the single most important prognostic factor in oropharyngeal SCC."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "Excisional biopsy of the neck mass first",
                        "B": "CT neck with IV contrast (evaluate the mass, map lymphadenopathy, identify the primary tumor) + CT chest (metastatic screening, common second primary in smokers) + direct visualization with flexible nasopharyngolaryngoscopy + FNA of the neck mass for cytology and p16/HPV testing",
                        "C": "MRI neck only",
                        "D": "PET scan as the first study"
                    },
                    "explanation": "Imaging + Endoscopy + FNA: Never Open First",
                    "text": "The workup follows the <strong>'never open a neck mass first'</strong> principle: excisional biopsy without prior imaging and endoscopy risks incomplete staging, disrupts tissue planes (compromises future surgery), and may miss the primary tumor. <strong>CT neck with contrast</strong>: evaluates the mass (size, fixation, necrosis), maps cervical lymphadenopathy by level, and screens for the primary tumor (tonsillar/BOT asymmetry, piriform sinus, larynx). <strong>CT chest</strong>: metastatic screening + second primary (lung cancer is common in smokers). <strong>FNA of the neck mass</strong>: cytology (SCC?) + p16 immunostaining (HPV status). <strong>PET/CT</strong> is added later for staging and to identify occult primaries."
                },
                "expect": {
                    "correct": "A",
                    "options": {
                        "A": "CT shows a necrotic left level II/III lymph node mass consistent with metastatic disease, with an asymmetric left palatine tonsil showing subtle enhancement (likely primary tumor site). No distant metastases on CT chest. FNA confirms metastatic SCC, p16-positive (HPV-related oropharyngeal SCC)",
                        "B": "Lymphoma",
                        "C": "Branchial cleft cyst",
                        "D": "Thyroid pathology"
                    },
                    "explanation": "CT Identifies Primary + Staging",
                    "text": "Metastatic SCC on CT: <strong>necrotic lymph node</strong> (central low-density with peripheral enhancement) is highly suspicious for SCC metastasis (necrotic nodes in a smoker = SCC until proven otherwise). The tonsillar asymmetry is the likely primary. <strong>p16-positive</strong> SCC confirms HPV etiology \u2014 this dramatically changes prognosis and may change treatment (de-escalation protocols under investigation). <strong>CT staging</strong>: evaluates local extent, contralateral neck nodes, and distant metastases. PET/CT is subsequently used for more sensitive staging and to detect occult primaries if the tonsillar biopsy is negative."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Surgery immediately without further workup",
                        "B": "Antibiotics for a suspected infected lymph node",
                        "C": "FNA confirms metastatic p16+ SCC \u2192 complete staging (PET/CT, exam under anesthesia with directed biopsies of the oropharynx/tonsil) \u2192 multidisciplinary tumor board (head/neck surgery, radiation oncology, medical oncology) \u2192 treatment plan based on stage and HPV status: p16+ oropharyngeal SCC has excellent prognosis with primary radiation + concurrent cisplatin (organ-preserving approach)",
                        "D": "Watchful waiting for 3 months"
                    },
                    "explanation": "Staging \u2192 Multidisciplinary Treatment",
                    "text": "HPV-positive oropharyngeal SCC treatment is evolving rapidly. <strong>Standard of care</strong>: concurrent chemoradiation (definitive radiation + weekly cisplatin) is the organ-preserving approach for most patients \u2014 avoiding the morbidity of radical surgery. <strong>De-escalation trials</strong> (reducing radiation dose or substituting cisplatin with immunotherapy in HPV+ patients) are a major area of research, aiming to reduce treatment toxicity while maintaining excellent cure rates. <strong>Surgery-first approaches</strong> (transoral robotic surgery + selective neck dissection) are increasingly used for early-stage disease, with adjuvant radiation based on pathologic findings.",
                    "radiopaedia": "https://radiopaedia.org/articles/cervical-lymph-node-metastases"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Chemoradiation only, no further workup",
                        "B": "Radical neck dissection immediately",
                        "C": "Palliative care",
                        "D": "Complete staging (PET/CT + EUA with biopsies) \u2192 multidisciplinary tumor board treatment plan \u2192 likely primary chemoradiation (p16+ has excellent prognosis, 80-90% 3-year survival) \u2192 dental evaluation before radiation (prevent osteoradionecrosis) \u2192 nutrition/swallowing evaluation (dysphagia is major treatment toxicity) \u2192 smoking cessation (continued smoking reduces treatment efficacy and increases second primary risk) \u2192 alcohol cessation \u2192 HPV vaccination counseling for the patient's children/partners \u2192 survivorship planning"
                    },
                    "explanation": "Staging + Organ Preservation + Risk Reduction",
                    "text": "The CT and FNA findings enabled staging and treatment planning for a highly treatable cancer. The comprehensive plan addresses: definitive treatment (chemoradiation with organ preservation), pre-treatment preparation (dental clearance to prevent osteoradionecrosis of the mandible from radiation, nutrition optimization, speech/swallowing baseline), risk factor modification (smoking cessation improves treatment response and reduces second primary risk from 20% to 6%), and prevention (HPV vaccination for the patient's children and discussion with sexual partners). HPV+ oropharyngeal SCC is increasingly viewed as a preventable cancer through vaccination \u2014 another powerful connection between epidemiology and clinical care."
                }
            }
        ],
        "cross_links": [
            ("\ud83e\udec1 Chest Imaging", "raddx-chest.html", "Pneumonia, PE, TB"),
            ("\ud83e\udde0 Neuroimaging", "raddx-neuro.html", "CT/MRI brain, stroke"),
            ("\ud83d\udc76 Pediatric Imaging", "raddx-peds.html", "Pyloric stenosis, NAT, volvulus"),
            ("\u2190 RadDx Hub", "raddx-hub.html", "All body systems"),
        ],
        "references": [
            ("Peritonsillar Abscess \u2014 StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK519520/"),
            ("Orbital Cellulitis \u2014 StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK441928/"),
            ("ACR TI-RADS \u2014 Thyroid Nodule Assessment", "https://doi.org/10.1016/j.jacr.2017.01.046"),
            ("NCCN Head and Neck Cancer Guidelines", "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1437"),
            ("Radiopaedia.org", "https://radiopaedia.org"),
        ]
    },
    "environmental": {
        "icon": "\ud83c\udf0d",
        "title": "Environmental & Occupational Imaging",
        "badge": "ENV / OCC MEDICINE",
        "scenarios": [
            {
                "modality": "Chest X-ray \u2192 High-Resolution CT",
                "title": "Asbestosis and Mesothelioma Screening",
                "vignette": "A <strong>67-year-old retired shipyard worker</strong> presents with progressive dyspnea on exertion over 2 years. He worked in ship construction and repair for 35 years (1975-2010) with direct asbestos exposure during insulation removal and pipe lagging. He has never smoked. On exam: bibasilar inspiratory crackles. PFTs show a restrictive pattern with reduced DLCO. He asks about screening for 'asbestos-related disease.'",
                "context": {
                    "question": "What epidemiological and occupational exposure factors determine the spectrum and timing of asbestos-related diseases?",
                    "correct": "D",
                    "options": {
                        "A": "Asbestos exposure only causes lung cancer",
                        "B": "35 years since first exposure is too soon for asbestos-related disease",
                        "C": "Non-smokers are not at risk from asbestos",
                        "D": "Asbestos causes a spectrum of diseases with varying latency: (1) pleural plaques (most common, 10-20 years latency, benign marker of exposure), (2) asbestosis (pulmonary fibrosis, 15-30 years, dose-dependent), (3) malignant mesothelioma (20-50 years latency, NOT dose-dependent \u2014 even brief exposure can cause it), (4) lung cancer (synergistic with smoking \u2014 asbestos \u00d7 smoking = 50-90\u00d7 risk, but elevated even in non-smokers). Shipyard workers are one of the highest-exposure occupations. His progressive dyspnea + bibasilar crackles + restrictive PFTs + long latency = classic asbestosis"
                    },
                    "explanation": "Asbestos-Related Disease Spectrum",
                    "text": "<strong>Asbestos exposure occupations</strong>: shipyard workers, construction workers, brake mechanics, insulation workers, miners, demolition workers, military (Navy especially), firefighters. <strong>Disease spectrum by latency</strong>: benign pleural effusion (shortest, 5-20y), pleural plaques (10-20y), asbestosis (15-30y), lung cancer (15-35y), mesothelioma (20-50y \u2014 the longest latency). <strong>Key epidemiological points</strong>: mesothelioma is almost exclusively caused by asbestos (no other significant risk factor), lung cancer risk is synergistic with smoking (multiplicative), and asbestosis is a dose-dependent pneumoconiosis (fibrosis from fiber inhalation). Despite regulations since the 1970s, asbestos-related disease continues to present due to long latency.",
                    "pearl": "Epidemiologic Pearl: Asbestos is still not banned in the US (EPA attempted a ban in 1989 but it was overturned by courts; a new rule restricting chrysotile asbestos was finalized in 2024). Globally, asbestos kills ~250,000 people/year (WHO). Mesothelioma incidence in the US peaked around 2000-2010 but continues, with new cases occurring from historical exposures. Workers' compensation and VA disability claims for asbestos-related disease remain among the most common occupational disease claims."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "Standard PA/lateral chest X-ray only",
                        "B": "High-resolution CT (HRCT) chest \u2014 the gold standard for detecting and staging asbestos-related lung disease. Far more sensitive than CXR for early asbestosis, pleural plaques, and early mesothelioma. CXR is used for ILO classification in occupational surveillance but misses early disease",
                        "C": "PET-CT for cancer screening",
                        "D": "Bronchoscopy with BAL"
                    },
                    "explanation": "HRCT \u2014 The Asbestos Evaluation Standard",
                    "text": "HRCT provides detailed evaluation of the lung parenchyma and pleura: <strong>Asbestosis</strong>: subpleural reticular opacities, honeycombing (advanced), ground-glass opacities, predominantly lower lobe and posterior distribution (gravity-dependent, similar to UIP pattern). <strong>Pleural plaques</strong>: calcified or non-calcified thickening of the parietal pleura, typically bilateral, diaphragmatic, and posterolateral. <strong>Mesothelioma screening</strong>: HRCT detects early pleural thickening, nodularity, and effusion. <strong>ILO Classification</strong>: a standardized CXR reading system for occupational lung disease surveillance (profusion of opacities graded 0-3), used for workers' compensation and disability determination."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal HRCT",
                        "B": "Emphysema pattern (he's a non-smoker, so this is unlikely)",
                        "C": "Bilateral lower lobe subpleural reticular opacities with possible early honeycombing (asbestosis) + bilateral calcified pleural plaques (exposure markers) + possible pleural thickening. The combination of parenchymal fibrosis + pleural plaques in a patient with documented occupational exposure is diagnostic of asbestosis",
                        "D": "Solitary pulmonary nodule"
                    },
                    "explanation": "Asbestosis HRCT Pattern",
                    "text": "Asbestosis HRCT has a UIP-like pattern: <strong>subpleural reticular opacities</strong> (early), <strong>traction bronchiectasis</strong>, <strong>honeycombing</strong> (advanced), predominantly in the lower lobes and posterior regions. <strong>Pleural plaques</strong> (present in ~60% of exposed workers) are the imaging hallmark of asbestos exposure \u2014 they are benign themselves but serve as markers that the patient has had significant exposure. <strong>Key distinction</strong>: asbestosis (parenchymal fibrosis) vs pleural plaques (pleural thickening) \u2014 both indicate exposure, but asbestosis causes the respiratory impairment. Also evaluate for early mesothelioma: unilateral, nodular pleural thickening with effusion should raise immediate concern."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "No treatment is available for asbestosis",
                        "B": "HRCT confirms asbestosis with pleural plaques. Management: (1) no specific treatment for established fibrosis, but supportive care (pulmonary rehab, supplemental O2 if hypoxemic, vaccinations), (2) annual low-dose CT for lung cancer screening (LDCT) if criteria met, (3) monitor for mesothelioma (any new unilateral pleural effusion or nodular thickening requires urgent evaluation), (4) occupational medicine documentation for disability and workers' compensation",
                        "C": "Start immunosuppressive therapy as for IPF",
                        "D": "Repeat HRCT in 5 years"
                    },
                    "explanation": "Supportive Care + Screening + Documentation",
                    "text": "There is no cure for established asbestosis (the fibrosis is irreversible). Management focuses on: <strong>supportive care</strong> (pulmonary rehabilitation improves functional capacity, oxygen for hypoxemia, pneumococcal and influenza vaccination, avoid further exposure). <strong>Cancer screening</strong>: annual LDCT if eligible (asbestos exposure + \u226530 pack-years smoking = highest lung cancer risk group; even non-smokers with asbestosis may warrant screening, though guidelines are evolving). <strong>Mesothelioma surveillance</strong>: any new pleural effusion, chest pain, or weight loss requires urgent CT and possible thoracoscopic biopsy. <strong>Antifibrotic therapy</strong> (nintedanib, pirfenidone) \u2014 used for IPF \u2014 is under investigation for progressive fibrotic asbestosis.",
                    "radiopaedia": "https://radiopaedia.org/articles/asbestosis"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Supportive care only",
                        "B": "Workers' compensation filing only",
                        "C": "No follow-up needed",
                        "D": "Supportive care (pulmonary rehab, O2, vaccinations) + annual LDCT screening for lung cancer + mesothelioma surveillance (any new symptoms \u2192 urgent imaging) + occupational medicine referral for workers' compensation and disability documentation + ILO classification of CXR for medicolegal records + evaluate for associated conditions (pleural effusion, rounded atelectasis) + ensure no ongoing exposure (home renovation, brake work) + veteran benefits counseling if applicable + advance care planning discussion for progressive disease"
                    },
                    "explanation": "Comprehensive Occupational Disease Management",
                    "text": "The HRCT findings confirmed what the exposure history predicted. The comprehensive plan spans clinical care (supportive management, cancer screening), medicolegal documentation (ILO classification, workers' compensation, disability), and prevention (ensuring no ongoing inadvertent exposure \u2014 even home renovation in old buildings can re-expose patients through disturbing asbestos-containing materials). Asbestosis exemplifies the connection between occupational epidemiology, imaging, and patient advocacy \u2014 the physician must be both clinician and documentarian for the medicolegal process."
                }
            },
            {
                "modality": "Chest X-ray \u2192 HRCT",
                "title": "Silicosis \u2014 The Oldest Occupational Lung Disease",
                "vignette": "A <strong>55-year-old male</strong> construction worker presents with chronic cough and progressive dyspnea over 3 years. He has worked in concrete cutting and sandblasting for 25 years without consistent respiratory protection. He also reports significant fatigue and 10-lb weight loss. On exam: diminished breath sounds bilaterally, no clubbing. PFTs show a mixed obstructive-restrictive pattern. PPD: 18mm induration.",
                "context": {
                    "question": "What occupational exposure and co-infection risks make silicosis the primary diagnosis?",
                    "correct": "C",
                    "options": {
                        "A": "Concrete cutting doesn't generate silica dust",
                        "B": "25 years of exposure is too short for silicosis",
                        "C": "Silica exposure from concrete cutting and sandblasting is among the highest-risk occupations for silicosis. Crystalline silica (quartz) causes progressive lung fibrosis that is dose and duration-dependent. CRITICAL: silicosis dramatically increases TB risk (3-30\u00d7 higher) because silica particles impair alveolar macrophage function. His positive PPD with weight loss raises concern for active TB superimposed on silicosis (silicotuberculosis). New epidemic: artificial stone countertop fabrication workers (high silica content, young workers, accelerated silicosis)",
                        "D": "His symptoms are likely COPD from smoking"
                    },
                    "explanation": "Silicosis Epidemiology and TB Risk",
                    "text": "<strong>Silica-exposed occupations</strong>: mining, quarrying, sandblasting, concrete cutting, stone countertop fabrication, tunneling, foundry work, ceramics, glass manufacturing. <strong>Silicosis types</strong>: chronic (most common, >10 years exposure), accelerated (5-10 years, higher intensity), acute (weeks-months, massive exposure \u2014 silicoproteinosis). <strong>The silica-TB connection</strong>: silica impairs macrophage function, creating a unique susceptibility to Mycobacterium tuberculosis. <strong>Screening for TB in all silicosis patients is mandatory</strong>. The new epidemic of <strong>engineered stone silicosis</strong> in countertop workers (artificial quartz contains >90% silica vs ~30% in natural stone) is causing accelerated silicosis in young workers, particularly among immigrant laborers with limited workplace protections.",
                    "pearl": "Epidemiologic Pearl: The engineered stone countertop silicosis epidemic is the worst new occupational lung disease crisis in decades. Australia banned engineered stone in 2024 after documenting hundreds of cases in young workers. In the US, OSHA's permissible exposure limit for silica was halved in 2016, but enforcement gaps persist especially in small fabrication shops employing immigrant workers. This is a preventable disease caused by the failure of industrial hygiene \u2014 wet cutting and respiratory protection eliminate the risk."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "Chest X-ray only",
                        "B": "Chest X-ray (for ILO classification and initial assessment) + HRCT (for detailed parenchymal evaluation and staging) + sputum AFB smears and cultures (rule out active TB given positive PPD and constitutional symptoms) + QuantiFERON-TB Gold (confirm TB infection)",
                        "C": "PET-CT to evaluate the weight loss",
                        "D": "Bronchoscopy only"
                    },
                    "explanation": "Imaging + TB Evaluation",
                    "text": "Dual evaluation is essential: <strong>lung imaging</strong> for silicosis staging AND <strong>TB workup</strong> for possible silicotuberculosis. <strong>CXR</strong>: shows classic upper lobe predominant nodular opacities with 'eggshell' calcification of hilar lymph nodes (nearly pathognomonic for silicosis). <strong>HRCT</strong>: more sensitive \u2014 shows centrilobular nodules, progressive massive fibrosis (PMF) coalescence, and associated findings. <strong>TB workup</strong>: sputum AFB smear and culture (rule out active TB), QuantiFERON-TB Gold or T-SPOT (may be less reliable in silicosis due to impaired immune function). Weight loss + positive PPD + silicosis = active TB until proven otherwise."
                },
                "expect": {
                    "correct": "D",
                    "options": {
                        "A": "Normal CXR and HRCT",
                        "B": "Diffuse ground-glass opacities (acute silicosis)",
                        "C": "Lower lobe fibrosis pattern (like asbestosis)",
                        "D": "UPPER LOBE predominant small rounded opacities (1-3mm nodules) with bilateral hilar lymphadenopathy showing 'eggshell' calcification. If advanced: progressive massive fibrosis (PMF) \u2014 coalescent masses in the upper lobes with surrounding emphysema. The upper lobe predominance distinguishes silicosis from asbestosis (lower lobe)"
                    },
                    "explanation": "Classic Silicosis Imaging Pattern",
                    "text": "Silicosis imaging hallmarks: <strong>Simple silicosis</strong>: bilateral, symmetrical, small rounded opacities (1-3mm) predominantly in the upper and mid zones. <strong>Eggshell calcification</strong> of hilar/mediastinal lymph nodes (calcification of the peripheral rim with lucent center \u2014 nearly pathognomonic). <strong>Progressive massive fibrosis (PMF)</strong>: coalescence of nodules into large upper lobe masses (>1cm), often with surrounding emphysema and volume loss. PMF masses can cavitate (raising concern for TB or NTM superinfection). <strong>Key distinction</strong>: silicosis = upper lobe, asbestosis = lower lobe."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "HRCT confirms silicosis. CRITICAL next step: rule out active TB (sputum cultures take weeks \u2014 if high clinical suspicion with weight loss + positive PPD, start empiric RIPE therapy while awaiting cultures). For silicotuberculosis, treatment duration is extended (9-12 months vs standard 6 months). For silicosis itself: no cure, but remove from further exposure immediately",
                        "B": "Steroids for the lung inflammation",
                        "C": "Observation with annual CXR only",
                        "D": "Lung transplant evaluation for all silicosis"
                    },
                    "explanation": "TB Rule-Out + Exposure Removal",
                    "text": "Management priorities: <strong>(1) Rule out active TB</strong> \u2014 the combination of silicosis + positive PPD + constitutional symptoms warrants empiric RIPE therapy if suspicion is high, as sputum cultures take 6-8 weeks. Silicotuberculosis requires extended treatment (9-12 months). <strong>(2) Remove from exposure</strong> \u2014 immediately. Further silica exposure accelerates progression. <strong>(3) Treat latent TB</strong> if active TB is excluded \u2014 INH for 9 months (CDC recommends treating latent TB in all silicosis patients regardless of PPD size). <strong>(4) Supportive care</strong> for established fibrosis. <strong>(5) Lung transplant evaluation</strong> for advanced PMF with respiratory failure.",
                    "radiopaedia": "https://radiopaedia.org/articles/silicosis"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "Remove from work and no further management",
                        "B": "TB treatment only",
                        "C": "TB evaluation and treatment (active or latent) + immediate removal from silica exposure + occupational medicine referral for workers' compensation and disability documentation + OSHA workplace investigation (other workers are likely exposed) + pulmonary rehabilitation + annual TB screening (silicotics remain at elevated risk indefinitely) + cancer screening (silica is IARC Group 1 carcinogen for lung cancer) + ILO CXR classification for medicolegal documentation + advance care planning for progressive disease + workplace advocacy (exposure prevention for current co-workers)",
                        "D": "Supportive care and annual CXR only"
                    },
                    "explanation": "TB Treatment + Workplace Investigation + Advocacy",
                    "text": "The HRCT findings confirmed silicosis and the TB evaluation addresses the most dangerous complication. The comprehensive plan extends beyond the individual patient: <strong>workplace investigation</strong> is critical because other workers at the same site are likely exposed (OSHA reporting requirements). Silica is IARC Group 1 carcinogen \u2014 lung cancer screening should be considered. Workers' compensation documentation requires ILO classification and detailed exposure history. This case exemplifies the physician's dual role in occupational medicine: treating the patient AND advocating for workplace safety to prevent future cases. Every silicosis diagnosis represents a failure of prevention."
                }
            },
            {
                "modality": "Abdominal X-ray \u2192 Blood Lead Level",
                "title": "Lead Poisoning \u2014 Pediatric Environmental Exposure",
                "vignette": "A <strong>3-year-old boy</strong> is brought in by his parents because his daycare noticed developmental regression \u2014 he has lost some words he previously had and is increasingly irritable. He has constipation, poor appetite, and intermittent abdominal pain. He lives in a home built in 1920 in an urban neighborhood. His parents report peeling paint in his bedroom. On exam: pale, irritable, mild abdominal tenderness. CBC shows microcytic anemia with basophilic stippling on peripheral smear.",
                "context": {
                    "question": "What environmental exposure factors make lead poisoning the most important diagnosis to investigate?",
                    "correct": "D",
                    "options": {
                        "A": "Lead poisoning was eliminated in the US decades ago",
                        "B": "Developmental regression in toddlers is always autism",
                        "C": "Only industrial workers are at risk for lead exposure",
                        "D": "Lead poisoning remains a significant pediatric health crisis: homes built before 1978 contain lead-based paint (the #1 source for children). Toddlers (1-3 years) are at highest risk due to hand-to-mouth behavior + pica + peak exposure to deteriorating paint/dust. His pre-1978 home with peeling paint is the classic exposure scenario. Developmental regression + irritability + constipation + microcytic anemia with basophilic stippling = lead poisoning until proven otherwise. CDC reference level: \u22653.5 \u00b5g/dL (lowered from 5 in 2021). No level of lead is safe for children"
                    },
                    "explanation": "Pediatric Lead Poisoning Epidemiology",
                    "text": "Despite dramatic reductions since the ban on leaded gasoline (1996) and lead paint (1978), lead poisoning persists: <strong>~500,000 US children age 1-5 have BLL \u22655 \u00b5g/dL</strong>. <strong>Sources</strong>: deteriorating lead paint in pre-1978 homes (#1), contaminated water (Flint, Michigan and hundreds of other municipal systems), soil contamination (near former industrial sites, highways), imported spices/foods/remedies (turmeric, some Ayurvedic medicines, Mexican candy), occupational take-home exposure (parent works with lead), and ammunition/fishing sinkers. <strong>Racial/socioeconomic disparities</strong>: Black children have 2\u00d7 higher BLL than White children, driven by housing quality, poverty, and environmental racism (proximity to industrial pollution).",
                    "pearl": "Epidemiologic Pearl: The Flint water crisis (2014-present) exposed ~100,000 residents to lead-contaminated water after the city switched water sources without corrosion control treatment, leaching lead from pipes. This event demonstrated that lead in water infrastructure remains a national crisis \u2014 an estimated 9-12 million lead service lines still deliver drinking water to US homes. The Bipartisan Infrastructure Law (2021) allocated $15 billion for lead pipe replacement, but complete replacement will take decades."
                },
                "order": {
                    "correct": "C",
                    "options": {
                        "A": "Head CT for developmental regression",
                        "B": "Upper GI series for abdominal pain",
                        "C": "Venous blood lead level (BLL) \u2014 the definitive diagnostic test + abdominal X-ray (may show radio-opaque lead paint chips in the GI tract if recent ingestion, and 'lead lines' at the metaphyses of long bones on incidentally included bones) + CBC (microcytic anemia with basophilic stippling is characteristic) + free erythrocyte protoporphyrin (FEP) or zinc protoporphyrin (ZPP) for chronic exposure",
                        "D": "Genetic testing for autism"
                    },
                    "explanation": "Blood Lead Level + Abdominal X-ray",
                    "text": "<strong>Venous BLL</strong> is the gold standard (capillary testing has high false-positive rate and must be confirmed with venous sample). <strong>Abdominal X-ray</strong>: radio-opaque lead paint chips may be visible in the stomach or intestines if recent ingestion (indicates ongoing exposure and may warrant whole-bowel irrigation). <strong>'Lead lines'</strong> (dense metaphyseal bands on long bone X-rays) represent lead deposition at the growth plate \u2014 seen in chronic exposure. <strong>CDC BLL action levels</strong>: \u22653.5 \u00b5g/dL (case management), \u226545 \u00b5g/dL (chelation therapy), \u226570 \u00b5g/dL (medical emergency with potential for encephalopathy)."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal BLL and abdominal X-ray",
                        "B": "Elevated BLL (likely >20-45 \u00b5g/dL given his symptoms). Abdominal X-ray may show radio-opaque foreign material in the GI tract (lead paint chips). If long bone films obtained: dense metaphyseal bands ('lead lines') at the distal femur, proximal tibia, and distal radius",
                        "C": "Iron deficiency anemia only",
                        "D": "Appendicitis on imaging"
                    },
                    "explanation": "Lead Poisoning Imaging and Lab Findings",
                    "text": "<strong>Abdominal X-ray findings</strong>: radio-opaque material in the GI tract (lead is a heavy metal, radiodense) indicates recent ingestion. If present, whole-bowel irrigation (polyethylene glycol solution) is indicated to prevent further absorption. <strong>Skeletal findings</strong>: 'lead lines' (dense bands at the metaphyses) are classic but non-specific (also seen with bismuth, phosphorus). They indicate chronic exposure. <strong>BLL correlation with symptoms</strong>: 10-20 \u00b5g/dL: subtle cognitive effects; 20-45: abdominal pain, irritability, anemia, behavioral changes; 45-70: severe abdominal pain, nephropathy, peripheral neuropathy; >70: encephalopathy (seizures, coma, death)."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "BLL guides treatment: 3.5-44 \u00b5g/dL \u2192 environmental investigation and source removal (MOST IMPORTANT INTERVENTION) + nutritional optimization (iron, calcium, vitamin C reduce lead absorption). \u226545 \u00b5g/dL \u2192 chelation therapy (oral succimer/DMSA for BLL 45-69; IV CaNa2EDTA + IM dimercaprol for BLL \u226570 or encephalopathy). The X-ray showing GI lead chips \u2192 whole-bowel irrigation BEFORE chelation (chelation mobilizes GI lead, worsening absorption)",
                        "B": "Chelation therapy for all BLL levels",
                        "C": "Observation and recheck BLL in 6 months",
                        "D": "Iron supplementation only"
                    },
                    "explanation": "BLL-Guided Treatment Algorithm",
                    "text": "Treatment is tiered by BLL: <strong>Environmental remediation</strong> is the cornerstone for ALL levels \u2014 removing the child from the lead source is more important than any medication. <strong>Nutritional optimization</strong>: adequate iron, calcium, and vitamin C intake reduces GI lead absorption (lead competes with these minerals for absorption). <strong>Chelation</strong>: succimer (DMSA) oral chelation for BLL 45-69 \u00b5g/dL; CaNa2EDTA \u00b1 dimercaprol (BAL) for BLL \u226570 or encephalopathy. <strong>CRITICAL</strong>: if abdominal X-ray shows GI lead, perform whole-bowel irrigation first (chelation increases GI absorption of the lead that's still in the gut).",
                    "radiopaedia": "https://radiopaedia.org/articles/lead-poisoning"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Chelation and discharge to the same home",
                        "B": "Treatment of the anemia only",
                        "C": "Report to CPS and remove from home permanently",
                        "D": "Treatment per BLL + IMMEDIATE environmental investigation of the home (lead inspection by certified inspector, XRF testing of paint surfaces) + child CANNOT return to the home until lead hazards are remediated or interim controls are in place + mandatory reporting to local/state health department + test siblings and other children in the home + test household water for lead + nutritional optimization (iron, calcium, vitamin C) + developmental evaluation and early intervention services + serial BLL monitoring (every 1-4 weeks until declining) + Medicaid-funded lead remediation if eligible + screening questions about other sources (imported items, parental occupation, soil)"
                    },
                    "explanation": "Treatment + Environmental Remediation + Public Health Response",
                    "text": "The imaging and lab findings triggered a multi-level response. The most critical intervention is REMOVING THE SOURCE \u2014 medical treatment without environmental remediation is futile (the child will simply be re-exposed). Lead poisoning is a <strong>mandatory reportable condition</strong> in all states. The public health response includes: home inspection, abatement or interim controls, sibling testing, water testing, and community-level investigation (other homes in the neighborhood may have the same problem). The developmental regression may be partially reversible with treatment and early intervention services, but lead-induced cognitive damage is often permanent \u2014 making this a case where early detection through universal BLL screening is critical prevention."
                }
            },
            {
                "modality": "CXR \u2192 PFTs \u2192 HRCT",
                "title": "Hypersensitivity Pneumonitis \u2014 The Hidden Indoor Exposure",
                "vignette": "A <strong>48-year-old woman</strong>, a middle school teacher, presents with 6 months of progressive dyspnea, dry cough, and fatigue. Symptoms initially improve on weekends and vacations but have become persistent. She has no smoking history. She reports her school had a known mold problem after a roof leak last year, and several other staff members have respiratory complaints. On exam: bibasilar crackles. PFTs: restrictive pattern. CXR shows bilateral reticular opacities.",
                "context": {
                    "question": "What environmental exposure pattern makes hypersensitivity pneumonitis (HP) the leading diagnosis?",
                    "correct": "D",
                    "options": {
                        "A": "Mold exposure doesn't cause lung disease",
                        "B": "Her symptoms improving on weekends is coincidental",
                        "C": "Occupational lung disease only occurs in manual laborers",
                        "D": "The temporal pattern is diagnostic: symptoms improve away from work (weekends, vacations) but worsen during the work week = classic occupational HP pattern. Indoor mold (Aspergillus, Stachybotrys, Penicillium species) from the school's water damage is the likely antigen. HP occurs in non-industrial settings: teachers, office workers, musicians (saxophone lung from mold in instruments), bird fanciers, hot tub users (Mycobacterium avium complex). Multiple co-workers with respiratory symptoms confirms a building-related illness cluster requiring environmental investigation"
                    },
                    "explanation": "Hypersensitivity Pneumonitis \u2014 Environmental Pattern Recognition",
                    "text": "HP (formerly called extrinsic allergic alveolitis) is an immune-mediated lung disease caused by repeated inhalation of organic antigens. <strong>Classic occupational/environmental causes</strong>: moldy hay (farmer's lung), bird proteins (bird fancier's lung), Mycobacterium avium in hot tubs/water systems (hot tub lung), mold in water-damaged buildings (building-related HP), humidifier/HVAC contamination. <strong>The temporal pattern is key</strong>: acute HP (4-8 hours after exposure, flu-like with fever/chills/dyspnea, resolves when away), subacute HP (weeks-months, progressive dyspnea and cough with temporal work-related pattern), chronic HP (persistent fibrotic disease, may progress even after antigen removal). <strong>Cluster investigation</strong>: multiple symptomatic workers suggests a shared environmental source requiring public health intervention.",
                    "pearl": "Epidemiologic Pearl: 'Sick building syndrome' and building-related illness are increasingly recognized as water-damaged buildings become more common (climate change, deferred maintenance, aging infrastructure). HP from indoor mold exposure is likely significantly underdiagnosed because it mimics idiopathic pulmonary fibrosis (IPF), especially in the chronic fibrotic phase. The exposure history is the ONLY way to distinguish HP from IPF \u2014 always ask about environmental exposures, hobbies, and pets in any patient presenting with interstitial lung disease."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "Standard CXR and observation",
                        "B": "HRCT chest (the key imaging study for HP pattern recognition) + PFTs with DLCO + serum precipitins (IgG antibodies to suspected mold antigens) + complete exposure history with temporal correlation",
                        "C": "Bronchoscopy immediately",
                        "D": "Mold testing of the school before any patient workup"
                    },
                    "explanation": "HRCT + Serology + Exposure History",
                    "text": "The HP diagnostic workup: <strong>HRCT</strong> (characteristic patterns distinguish HP from other ILDs), <strong>serum precipitins</strong> (IgG antibodies to suspected antigens \u2014 positive results support the diagnosis but negative results don't exclude it), <strong>bronchoalveolar lavage</strong> (lymphocytosis >40% with low CD4/CD8 ratio supports HP), and <strong>lung biopsy</strong> if needed (poorly formed granulomas, giant cells, peribronchiolar inflammation). <strong>The exposure history with temporal correlation is the most important diagnostic tool</strong> \u2014 HRCT patterns can suggest HP, but only the history confirms the cause."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal HRCT",
                        "B": "Upper lobe emphysema",
                        "C": "HRCT shows a characteristic HP pattern: mosaic attenuation (geographic areas of different density reflecting air trapping), centrilobular ground-glass nodules, and possibly early fibrotic changes (reticulation). In subacute HP, the classic triad is: ground-glass opacities + centrilobular nodules + air trapping (mosaic attenuation on expiratory images). Distribution may be mid-lung predominant (unlike IPF which is basal)",
                        "D": "Consolidative pneumonia"
                    },
                    "explanation": "HP HRCT Pattern",
                    "text": "HP has characteristic HRCT patterns by phase: <strong>Acute/subacute HP</strong>: bilateral ground-glass opacities, centrilobular ill-defined nodules (not seen in IPF), mosaic attenuation (air trapping), mid-lung predominance. <strong>Chronic fibrotic HP</strong>: reticulation, traction bronchiectasis, and possible honeycombing \u2014 can be indistinguishable from IPF/UIP on imaging alone. <strong>Key distinguishing features from IPF</strong>: mid-lung or upper-lung predominance (vs lower lobe in IPF), relative subpleural sparing, mosaic attenuation (rarely seen in IPF), and centrilobular nodules. <strong>Expiratory images</strong> are critical \u2014 air trapping (mosaic attenuation) becomes more obvious on expiration.",
                    "radiopaedia": "https://radiopaedia.org/articles/hypersensitivity-pneumonitis"
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "HRCT pattern + temporal exposure history + positive mold precipitins = HP diagnosis. The MOST IMPORTANT treatment is ANTIGEN AVOIDANCE \u2014 she must be removed from the moldy environment. If symptoms are severe or persistent despite avoidance, systemic corticosteroids may be used. The school requires environmental remediation before she can return",
                        "B": "Antifungal therapy for mold infection",
                        "C": "Start antifibrotic therapy as for IPF",
                        "D": "Continue working with a mask and follow-up in 6 months"
                    },
                    "explanation": "Antigen Avoidance Is the Treatment",
                    "text": "The cornerstone of HP treatment is <strong>antigen identification and avoidance</strong>. Without this, no medication will be effective and fibrosis will progress. <strong>Corticosteroids</strong> (prednisone 0.5-1 mg/kg/day, tapered over months) accelerate recovery of acute/subacute HP but do NOT reverse established fibrosis. <strong>Immunosuppressive agents</strong> (mycophenolate, azathioprine) for chronic fibrotic HP that progresses despite antigen avoidance. <strong>Antifibrotics</strong> (nintedanib) approved for progressive fibrosing ILD including chronic fibrotic HP. <strong>The school environmental issue is also a public health matter</strong> \u2014 other symptomatic staff need evaluation, and the building requires professional mold remediation."
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Corticosteroids and return to work",
                        "B": "Antifungal treatment and continue working",
                        "C": "File workers' compensation and retire",
                        "D": "Remove from exposure (medical leave from the school) + corticosteroids if symptomatic + occupational medicine referral for workers' compensation + report building-related illness cluster to school administration and local health department + professional environmental assessment of the school (industrial hygienist, air quality testing, mold inspection) + school must remediate mold before she returns + serial PFTs and HRCT to monitor for improvement or progression + evaluate symptomatic co-workers + consider long-term antifibrotic therapy if chronic fibrotic phase + pulmonary rehabilitation"
                    },
                    "explanation": "Antigen Avoidance + Environmental Remediation + Worker Protection",
                    "text": "The HRCT findings combined with the exposure history directed both individual treatment (antigen avoidance + corticosteroids) and a public health response (school investigation and remediation). HP from building-related exposures affects multiple people simultaneously \u2014 the physician's responsibility extends beyond the individual patient to the co-workers and students in the affected building. Workers' compensation documentation, OSHA reporting if applicable, and environmental remediation are essential parallel tracks. This case exemplifies how environmental epidemiology intersects with clinical medicine: the imaging finding is only useful when interpreted in the context of the exposure history."
                }
            }
        ],
        "cross_links": [
            ("\ud83e\udec1 Chest Imaging", "raddx-chest.html", "Pneumonia, PE, TB"),
            ("\ud83e\ude7b Abdominal Imaging", "raddx-abdominal.html", "CT abdomen, US, liver masses"),
            ("\ud83d\udc76 Pediatric Imaging", "raddx-peds.html", "NAT, developmental conditions"),
            ("\u2190 RadDx Hub", "raddx-hub.html", "All body systems"),
        ],
        "references": [
            ("Asbestosis \u2014 StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK557680/"),
            ("Silicosis \u2014 StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK537341/"),
            ("CDC Lead Poisoning Prevention", "https://www.cdc.gov/lead-prevention/"),
            ("Hypersensitivity Pneumonitis \u2014 StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK499864/"),
            ("Radiopaedia.org", "https://radiopaedia.org"),
        ]
    }
}


import os
os.makedirs('modules', exist_ok=True)
for key, data in MODULES.items():
    html = generate_module(key, data)
    # Clean any surrogate characters
    html = html.encode('utf-8', errors='replace').decode('utf-8')
    filepath = f"modules/raddx-{key}.html"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated {filepath} ({len(html):,} bytes, {len(data['scenarios'])} scenarios)")

print("\nDone! 4 new specialty modules generated.")
