#!/usr/bin/env python3
"""Generate RadDx body system modules with 5-step clinical reasoning framework."""

# ============================================================
# MODULE DATA
# ============================================================

MODULES = {
    "cardiac": {
        "icon": "❤️",
        "title": "Cardiac Imaging",
        "badge": "CARDIOLOGY",
        "scenarios": [
            {
                "modality": "ECG + Coronary Angiography",
                "title": "Acute Coronary Syndrome",
                "vignette": "A <strong>58-year-old male</strong> presents to the ED with crushing substernal chest pain radiating to his left arm for 45 minutes. Diaphoretic, pale, nauseated. PMH: hypertension, hyperlipidemia, type 2 diabetes, 30 pack-year smoking history. Vitals: HR 98, BP 154/92, RR 22, SpO₂ 96%.",
                "context": {
                    "question": "Before you look at any test results, what epidemiological or exposure factors in this patient's history should raise your pre-test probability for ACS?",
                    "correct": "C",
                    "options": {
                        "A": "His age alone — ACS is rare under age 65",
                        "B": "His smoking history is the only relevant risk factor",
                        "C": "The clustering of diabetes, hypertension, hyperlipidemia, and smoking creates multiplicative risk — each factor compounds the others",
                        "D": "His sex is irrelevant to pre-test probability for ACS"
                    },
                    "explanation": "Epidemiological Context Matters",
                    "text": "Framingham risk factors are multiplicative, not additive. A 58-year-old male with diabetes, HTN, HLD, and heavy smoking has dramatically higher pre-test probability than any single factor suggests. Sex matters: men have higher ACS rates at this age, though women's risk is frequently underestimated (atypical presentations in women are a major diagnostic pitfall). <strong>Cocaine use</strong> should also be screened — it can cause ACS in young patients with zero traditional risk factors. Always ask about stimulant use, especially in patients under 45.",
                    "pearl": "Epidemiologic Pearl: In South Florida, the large Caribbean and Latin American populations have high rates of metabolic syndrome and often delayed presentation due to health access barriers. Consider that patients presenting with 'first MI' may have had years of uncontrolled risk factors without primary care."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "12-lead ECG immediately (within 10 minutes of arrival)",
                        "B": "Stat troponin first, then ECG based on results",
                        "C": "CXR to rule out aortic dissection first",
                        "D": "Echocardiogram at bedside"
                    },
                    "explanation": "ECG Within 10 Minutes",
                    "text": "ACC/AHA guidelines mandate ECG within 10 minutes of first medical contact. Troponin takes 1-3 hours to rise — it cannot rule out STEMI. ECG identifies ST-elevation that triggers cath lab activation. CXR is important but secondary. Echo is useful for wall motion abnormalities but shouldn't delay ECG.",
                    "pearl": "Modality Reasoning: ECG is the most time-sensitive test in medicine. Door-to-ECG time predicts door-to-balloon time. Every minute of delay = more myocardial death."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal sinus rhythm with nonspecific T-wave changes",
                        "B": "ST elevation in leads II, III, aVF with reciprocal ST depression in I, aVL",
                        "C": "Diffuse ST elevation with PR depression",
                        "D": "New left bundle branch block"
                    },
                    "explanation": "Territory-Based ECG Patterns",
                    "text": "The clinical picture (crushing substernal, radiation, diaphoresis, risk factors) with inferior leads (II, III, aVF) = RCA territory. Reciprocal changes in lateral leads (I, aVL) increase specificity for true STEMI. Option C describes pericarditis (diffuse + PR depression). New LBBB can indicate STEMI but is less common."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Activate cath lab for PCI within 90 minutes",
                        "B": "Give thrombolytics immediately since this is clearly STEMI",
                        "C": "Activate cath lab AND check right-sided leads (V4R) — inferior STEMI may involve the right ventricle",
                        "D": "Repeat ECG in 15 minutes to confirm before activating cath"
                    },
                    "explanation": "The Right Ventricle Question",
                    "text": "Inferior STEMI (RCA territory) frequently involves the right ventricle. V4R showing ST elevation confirms RV involvement, which has critical management implications: <strong>avoid nitrates and aggressive diuresis</strong> (RV is preload-dependent). IV fluids may be needed instead. This is a common board question and a real clinical trap.",
                    "pearl": "Clinical Pearl: RV infarct complicates ~30-50% of inferior STEMIs. The triad of hypotension + clear lungs + elevated JVP in inferior STEMI = RV involvement until proven otherwise."
                },
                "integrate": {
                    "correct": "B",
                    "options": {
                        "A": "PCI + dual antiplatelet therapy + aggressive IV furosemide",
                        "B": "PCI + dual antiplatelet therapy + cautious IV fluids (RV-dependent) + hold nitrates",
                        "C": "Thrombolytics + heparin + morphine",
                        "D": "Medical management with heparin and serial troponins"
                    },
                    "explanation": "RV-Aware Management",
                    "text": "With confirmed RV involvement, management shifts: fluids instead of diuretics, avoid nitrates (drops preload), PCI to open the culprit vessel ASAP. This is where imaging interpretation directly changes the treatment plan — the same STEMI requires completely different supportive care based on the V4R finding.",
                    "radiopaedia": "https://radiopaedia.org/articles/acute-coronary-syndrome"
                }
            },
            {
                "modality": "CXR + Echocardiogram",
                "title": "Acute Decompensated Heart Failure",
                "vignette": "A <strong>72-year-old woman</strong> with known HFrEF (EF 25%) presents with 3 days of worsening dyspnea, orthopnea (sleeps on 4 pillows), and 15-lb weight gain over 2 weeks. She ran out of her furosemide 10 days ago. Vitals: HR 108, BP 162/94, RR 28, SpO₂ 88% on room air. JVP elevated to ear, bilateral crackles to mid-lung fields, 3+ pitting edema to knees.",
                "context": {
                    "question": "What social and epidemiological factors are most critical to identify in this patient before proceeding?",
                    "correct": "D",
                    "options": {
                        "A": "Family history of cardiomyopathy",
                        "B": "Dietary sodium intake over the past month",
                        "C": "Whether she has been using NSAIDs for any reason",
                        "D": "All of the above — medication non-adherence, dietary indiscretion, NSAID use, and socioeconomic barriers to medication access are the top precipitants of HF decompensation"
                    },
                    "explanation": "Social Determinants Drive HF Exacerbations",
                    "text": "The most common cause of HF decompensation is <strong>medication non-adherence</strong>, often driven by cost, access, or health literacy barriers. This patient ran out of furosemide — was it cost? Transportation? Understanding of the medication's importance? NSAIDs (available OTC) cause fluid retention and are a hidden trigger. Dietary sodium excess is another major contributor. <strong>Understanding the 'why' behind the exacerbation is as important as treating the current episode.</strong>",
                    "pearl": "Epidemiologic Pearl: HF readmission rates are highest in low-income ZIP codes with limited pharmacy access. Identifying and addressing the social determinant (medication assistance programs, 90-day prescriptions, community health worker follow-up) reduces 30-day readmission more than any single medication change."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Portable AP chest X-ray + bedside echocardiogram",
                        "B": "CT chest with contrast",
                        "C": "Right heart catheterization",
                        "D": "Cardiac MRI for EF assessment"
                    },
                    "explanation": "CXR + Echo: The HF Workup",
                    "text": "Portable CXR assesses pulmonary edema severity, cardiomegaly, pleural effusions, and rules out pneumonia as a trigger. Bedside echo confirms EF, wall motion, valvular function, and pericardial effusion. This guides whether the patient needs IV diuretics alone vs. inotropes vs. mechanical support. CT adds radiation and contrast without changing management. RHC is for refractory cases."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Clear lung fields with normal cardiac silhouette",
                        "B": "Unilateral opacity suggesting pneumonia",
                        "C": "Cardiomegaly, cephalization, Kerley B lines, bilateral pleural effusions",
                        "D": "Widened mediastinum suggesting dissection"
                    },
                    "explanation": "The CXR Tells the Hemodynamic Story",
                    "text": "Classic CHF CXR progresses: <strong>(1) Cephalization</strong> (upper lobe vessel distension, PCWP 12-18) → <strong>(2) Interstitial edema/Kerley B lines</strong> (PCWP 18-25) → <strong>(3) Alveolar edema (bat-wing pattern)</strong> (PCWP >25) → <strong>(4) Pleural effusions</strong> (bilateral, R>L typical). Cardiomegaly (CTR >0.5) present in chronic HF."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "Start IV nitroglycerin for afterload reduction",
                        "B": "Assess the CXR in context of exam: bilateral effusions + edema = volume overload → IV diuresis is the priority; echo will assess whether inotropes are needed",
                        "C": "Order CT pulmonary angiography to rule out PE as the cause of dyspnea",
                        "D": "Perform emergent thoracentesis for the pleural effusions"
                    },
                    "explanation": "CXR Guides Diuretic Strategy",
                    "text": "The CXR confirms what the exam shows: severe volume overload. IV furosemide (bolus or drip) is first-line. Echo determines whether the heart needs inotropic support (severely depressed EF with cardiogenic shock signs) or if diuresis alone will suffice. Bilateral effusions in HF = transudative; thoracentesis only if asymmetric, febrile, or refractory to diuresis.",
                    "radiopaedia": "https://radiopaedia.org/articles/congestive-cardiac-failure"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Discharge once oxygen improved with plan for outpatient follow-up",
                        "B": "IV diuresis alone, discharge in 24 hours",
                        "C": "Add digoxin and metolazone, discharge in 48 hours",
                        "D": "IV diuresis to euvolemia, restart GDMT, address medication access barriers (cost, transportation), ensure follow-up within 7 days, and consider cardiology referral for device therapy evaluation given EF 25%"
                    },
                    "explanation": "Integration: Imaging + Social Context = Plan",
                    "text": "The imaging confirms severe decompensation. But the root cause was medication non-adherence due to running out. The discharge plan must address the precipitant: medication assistance programs, 90-day prescriptions, pharmacy delivery, health literacy about daily weights. EF 25% qualifies for ICD evaluation (primary prevention if EF ≤35% despite 3 months optimal medical therapy). The imaging findings trigger both acute management and long-term device consideration."
                }
            },
            {
                "modality": "Echocardiogram",
                "title": "Cardiac Tamponade",
                "vignette": "A <strong>45-year-old woman</strong> with recently diagnosed metastatic breast cancer presents with progressive dyspnea, light-headedness when standing, and muffled heart sounds. Vitals: HR 118, BP 92/70 (narrowed pulse pressure), RR 24, SpO₂ 93%. Pulsus paradoxus measured at 18 mmHg. Neck veins distended.",
                "context": {
                    "question": "What aspect of this patient's history most critically shifts the differential for her hemodynamic instability?",
                    "correct": "B",
                    "options": {
                        "A": "Her sex — women are more likely to have takotsubo cardiomyopathy",
                        "B": "Metastatic cancer is the most common cause of malignant pericardial effusion, and breast, lung, and lymphoma are the top three — this patient has a high pre-test probability for malignant tamponade",
                        "C": "She likely has PE from cancer-related hypercoagulability",
                        "D": "Her age suggests viral pericarditis as most likely"
                    },
                    "explanation": "Cancer Changes the Pericardial Differential",
                    "text": "In a patient with known malignancy, pericardial effusion has a different epidemiological profile than in the general population. <strong>Malignant effusions</strong> (breast, lung, lymphoma, melanoma) account for most symptomatic pericardial effusions in oncology patients. They tend to accumulate gradually, becoming hemodynamically significant at larger volumes. Radiation pericarditis (if prior chest radiation), drug-induced pericarditis (immune checkpoint inhibitors), and infectious causes (immunosuppression) must also be considered. The cancer history completely reframes the diagnostic approach.",
                    "pearl": "Epidemiologic Pearl: Immune checkpoint inhibitors (pembrolizumab, nivolumab) cause myocarditis and pericarditis in 1-2% of patients. Always ask about recent immunotherapy. Also consider that cancer patients on anticoagulation for VTE prophylaxis can develop hemorrhagic pericardial effusions."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Bedside echocardiogram (point-of-care)",
                        "B": "CT chest with contrast",
                        "C": "Chest X-ray followed by formal transthoracic echo",
                        "D": "Cardiac MRI"
                    },
                    "explanation": "Bedside Echo Is Emergent",
                    "text": "In suspected tamponade with hemodynamic compromise, bedside echo is diagnostic within minutes. You're looking for: (1) pericardial effusion, (2) RV diastolic collapse, (3) RA systolic collapse, (4) IVC plethora without respiratory variation, (5) respiratory variation in mitral/tricuspid inflow. CXR can show 'water bottle' heart but doesn't assess hemodynamic significance. CT delays care in an unstable patient."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Small pericardial effusion with normal RV function",
                        "B": "Dilated RV with septal bowing (PE pattern)",
                        "C": "Large circumferential effusion with RV diastolic collapse and IVC plethora",
                        "D": "Severe aortic stenosis with LVH"
                    },
                    "explanation": "Tamponade Echo Findings",
                    "text": "Malignant effusions are typically large and circumferential. Hemodynamic significance is determined by <strong>chamber collapse</strong> (RV diastolic collapse is most specific, RA systolic collapse is most sensitive) and <strong>IVC plethora</strong> (dilated IVC without respiratory variation = elevated RA pressure). The 'swinging heart' sign (electrical alternans on ECG) correlates with large effusions."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "Emergent pericardiocentesis — the echo confirms tamponade physiology with hemodynamic compromise",
                        "B": "Start IV fluids and observe — this could resolve spontaneously",
                        "C": "Consult cardiothoracic surgery for pericardial window — but this can wait until morning",
                        "D": "Order CT chest to characterize the effusion before draining"
                    },
                    "explanation": "Echo Drives Immediate Intervention",
                    "text": "Echo-guided pericardiocentesis is both diagnostic and therapeutic. In malignant tamponade, fluid analysis (cytology, tumor markers) helps confirm the cause. A pericardial drain is typically left in place until output drops below 25-50 mL/day. <strong>Pericardial window</strong> is definitive for recurrent malignant effusions but is a surgical procedure — not first-line in acute tamponade.",
                    "radiopaedia": "https://radiopaedia.org/articles/cardiac-tamponade"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "Pericardiocentesis and discharge with oncology follow-up",
                        "B": "Pericardiocentesis and radiation therapy to the pericardium",
                        "C": "Pericardiocentesis with drain placement, pericardial fluid cytology, oncology consultation for systemic therapy assessment, and discussion of goals of care given metastatic disease",
                        "D": "IV fluids and vasopressors as a bridge to surgery"
                    },
                    "explanation": "Imaging Triggers the Full Clinical Picture",
                    "text": "The echo finding of malignant tamponade triggers a cascade: acute intervention (pericardiocentesis), diagnostic workup (cytology to confirm malignant etiology), oncologic reassessment (is systemic therapy controlling disease?), and palliative care integration (this represents disease progression). For recurrent effusions, options include pericardial window, intrapericardial sclerotherapy, or indwelling catheter. The imaging doesn't just diagnose — it reframes the goals of care conversation."
                }
            },
            {
                "modality": "CTA Chest",
                "title": "Aortic Dissection",
                "vignette": "A <strong>62-year-old male</strong> with poorly controlled hypertension (takes medications 'sometimes') presents with sudden-onset 'tearing' chest pain radiating to his back. BP 210/110 in right arm, 170/90 in left arm. A <strong>new diastolic murmur</strong> is heard at the right sternal border. He appears acutely uncomfortable.",
                "context": {
                    "question": "What epidemiological and exposure risk factors make dissection more likely in this specific patient?",
                    "correct": "D",
                    "options": {
                        "A": "Only chronic hypertension matters — it accounts for 70% of dissections",
                        "B": "Age over 60 increases the risk, but sex is not relevant",
                        "C": "Cocaine use should be screened — it causes acute hypertensive surges that trigger dissection",
                        "D": "Chronic uncontrolled hypertension (the most common cause) PLUS medication non-adherence (likely cause of current BP crisis) PLUS screen for cocaine/stimulant use, connective tissue disorders (Marfan, Ehlers-Danlos if younger), and bicuspid aortic valve"
                    },
                    "explanation": "Dissection Risk Profiling",
                    "text": "Aortic dissection has a distinct epidemiological profile. <strong>Hypertension</strong> is present in 70-80% of cases and is the dominant modifiable risk factor. In patients under 40, consider <strong>connective tissue disease</strong> (Marfan, Loeys-Dietz, vascular EDS), <strong>bicuspid aortic valve</strong>, and <strong>cocaine/methamphetamine use</strong>. <strong>Pregnancy</strong> (third trimester and postpartum) is a risk factor due to aortic wall changes. Iatrogenic dissection occurs after cardiac surgery or catheterization. The BP differential between arms (>20 mmHg systolic) is itself an epidemiological red flag.",
                    "pearl": "Epidemiologic Pearl: Men are affected 2:1 over women, but women with dissection have higher mortality — partly because they present atypically and are diagnosed later. In patients with cocaine-related chest pain, dissection must be considered alongside ACS. Always ask about stimulant use."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "CXR first to look for widened mediastinum",
                        "B": "CT angiography of the chest, abdomen, and pelvis — the definitive test for dissection",
                        "C": "Transthoracic echocardiogram to assess the aortic root",
                        "D": "MRI of the aorta"
                    },
                    "explanation": "CTA Is the Gold Standard",
                    "text": "CTA has >95% sensitivity and specificity for dissection and can be obtained rapidly. It shows the intimal flap, true and false lumens, extent of dissection, branch vessel involvement, and complications (pericardial effusion, malperfusion). CXR is insensitive (~60% show widened mediastinum). TEE is an alternative in unstable patients who can't go to CT. MRI is most accurate but impractical in acute settings.",
                    "pearl": "Scan must include abdomen/pelvis — dissection can extend to iliac arteries, and branch vessel malperfusion (renal, mesenteric, limb) must be identified."
                },
                "expect": {
                    "correct": "A",
                    "options": {
                        "A": "Intimal flap in the ascending aorta with true and false lumens — Stanford Type A given the new aortic regurgitation murmur",
                        "B": "Intimal flap limited to the descending aorta distal to the left subclavian",
                        "C": "Ascending aortic aneurysm without dissection flap",
                        "D": "Normal aorta with pericardial effusion"
                    },
                    "explanation": "Stanford Classification Drives Surgery",
                    "text": "The new diastolic murmur (aortic regurgitation) + BP differential = ascending aortic involvement (Stanford Type A). The flap disrupts the aortic valve apparatus. <strong>Type A (involves ascending) = surgical emergency</strong>. Type B (descending only) = medical management unless complicated (malperfusion, rupture, refractory pain)."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "Emergent cardiothoracic surgery consultation — Type A dissection with aortic regurgitation has >50% 48-hour mortality without surgery",
                        "B": "Start IV esmolol and nitroprusside, admit to ICU for medical management",
                        "C": "Endovascular stent-graft placement",
                        "D": "Repeat CTA in 6 hours to assess progression"
                    },
                    "explanation": "Type A = Emergent Surgery",
                    "text": "Type A dissection is a surgical emergency with ~1-2% mortality per hour if untreated. While awaiting surgery: IV beta-blocker first (esmolol or labetalol to HR <60), then add nitroprusside if BP remains elevated. Target SBP 100-120. Avoid isolated nitroprusside (increases aortic wall shear stress without HR control). Pain control reduces sympathetic drive.",
                    "radiopaedia": "https://radiopaedia.org/articles/aortic-dissection"
                },
                "integrate": {
                    "correct": "B",
                    "options": {
                        "A": "Surgery alone is definitive — no long-term follow-up needed",
                        "B": "Emergent surgery + lifelong BP control + serial aortic imaging surveillance + screen first-degree relatives if connective tissue disease suspected + address medication non-adherence that contributed to this event",
                        "C": "Endovascular repair + anticoagulation",
                        "D": "Medical management only — surgery is too risky at age 62"
                    },
                    "explanation": "Imaging → Surgery → Lifelong Surveillance",
                    "text": "Post-repair, patients need lifelong aortic imaging surveillance (CTA or MRA annually) because the residual false lumen can expand. BP control is critical (target <130/80). If the patient is under 50, genetic testing for connective tissue disorders should be pursued. The underlying cause — medication non-adherence with uncontrolled hypertension — must be addressed to prevent recurrence."
                }
            },
            {
                "modality": "Echocardiogram (TTE/TEE)",
                "title": "Infective Endocarditis",
                "vignette": "A <strong>32-year-old male</strong> with a history of IV drug use presents with 2 weeks of fever, chills, night sweats, and new-onset pleuritic chest pain. Track marks on bilateral arms. Vitals: Temp 39.4°C, HR 112, BP 110/60. A <strong>new holosystolic murmur</strong> is best heard at the left lower sternal border, louder with inspiration. Splinter hemorrhages noted on exam.",
                "context": {
                    "question": "What epidemiological factors in this presentation shift your differential and guide empiric therapy?",
                    "correct": "C",
                    "options": {
                        "A": "IV drug use only affects the left-sided valves",
                        "B": "The patient's age makes endocarditis unlikely — it primarily affects the elderly",
                        "C": "IVDU-associated endocarditis typically involves the TRICUSPID valve (right-sided), most commonly from Staphylococcus aureus, and presents with septic pulmonary emboli rather than systemic emboli — this patient's pleuritic chest pain likely reflects septic lung infarcts",
                        "D": "Splinter hemorrhages are nonspecific and do not help narrow the differential"
                    },
                    "explanation": "IVDU Endocarditis Epidemiology",
                    "text": "The epidemiology of endocarditis varies dramatically by population. <strong>IVDU-associated</strong>: 50-70% tricuspid valve, S. aureus (including MRSA) in >60% of cases, presents with septic pulmonary emboli (pulmonary infiltrates, chest pain, hemoptysis). <strong>Non-IVDU native valve</strong>: mitral > aortic, viridans streptococci traditionally most common (though S. aureus is rising). <strong>Prosthetic valve</strong>: early (<60 days) = S. aureus, S. epidermidis; late = similar to native valve. Geography matters too: Coxiella burnetii (Q fever) is common in rural settings with livestock contact. Bartonella in homeless populations with louse exposure.",
                    "pearl": "Epidemiologic Pearl: The opioid epidemic has driven a surge in right-sided endocarditis in young adults. In communities with high IV drug use prevalence, any febrile IVDU with new murmur = endocarditis until proven otherwise. MRSA rates in IVDU endocarditis exceed 50% in many US regions — empiric vancomycin is essential."
                },
                "order": {
                    "correct": "C",
                    "options": {
                        "A": "CT chest to evaluate for septic emboli first",
                        "B": "Cardiac MRI for vegetation detection",
                        "C": "Blood cultures × 3 from separate sites PLUS transthoracic echocardiogram (TTE)",
                        "D": "Go directly to TEE — TTE misses most vegetations"
                    },
                    "explanation": "Modified Duke Criteria Imaging",
                    "text": "Blood cultures (3 sets, 30 min apart, before antibiotics) + TTE is the initial approach. TTE detects vegetations >2mm with ~70% sensitivity for native valves. If TTE is negative but clinical suspicion remains high, TEE increases sensitivity to >90%. For IVDU with suspected right-sided disease, TTE is actually quite good for tricuspid valve visualization. TEE is essential for prosthetic valves and left-sided disease."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Mitral valve vegetation with severe regurgitation",
                        "B": "Tricuspid valve vegetation with moderate-to-severe tricuspid regurgitation — consistent with IVDU-associated right-sided endocarditis",
                        "C": "Aortic root abscess",
                        "D": "Normal valves with pericardial effusion"
                    },
                    "explanation": "Right-Sided Endocarditis Pattern",
                    "text": "In IVDU endocarditis, the injected organisms hit the tricuspid valve first (venous return → right heart). The murmur increasing with inspiration (Carvallo sign) localizes to the tricuspid valve. Septic emboli from tricuspid vegetations seed the lungs → septic pulmonary infarcts → the patient's pleuritic chest pain."
                },
                "interpret": {
                    "correct": "D",
                    "options": {
                        "A": "Vegetation size doesn't matter — start antibiotics regardless",
                        "B": "Any vegetation means immediate surgery",
                        "C": "Only vegetation mobility predicts embolic risk",
                        "D": "Vegetation size (>10mm = higher embolic risk), mobility, and valve function all guide the surgical vs. medical decision"
                    },
                    "explanation": "Echo Findings Drive Surgery Decisions",
                    "text": "Echo provides three critical pieces: (1) <strong>Vegetation size</strong> — >10mm = increased embolic risk, >20mm = strong surgical indication; (2) <strong>Valve function</strong> — severe regurgitation with heart failure = surgery; (3) <strong>Complications</strong> — abscess, fistula, pseudoaneurysm = surgery. For isolated right-sided endocarditis, surgery is generally reserved for failure of medical therapy, large vegetations (>20mm), or recurrent septic PE despite antibiotics.",
                    "radiopaedia": "https://radiopaedia.org/articles/infective-endocarditis"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "IV antibiotics for 2 weeks and discharge",
                        "B": "Immediate surgery given the vegetation",
                        "C": "IV vancomycin + gentamicin empirically (high MRSA probability in IVDU), narrow based on culture results, 4-6 weeks of IV therapy, CXR for pulmonary emboli, addiction medicine consultation, and harm reduction counseling",
                        "D": "Oral antibiotics for 6 weeks as outpatient"
                    },
                    "explanation": "Comprehensive Treatment Plan",
                    "text": "Empiric vancomycin covers MRSA (most likely organism in IVDU endocarditis). The CXR will likely show septic emboli (multiple peripheral nodules ± cavitation). Treatment duration: right-sided = 4 weeks minimum, left-sided = 6 weeks. <strong>Addiction medicine consultation is essential</strong> — without addressing the underlying substance use disorder, reinfection rates are very high. Harm reduction strategies (naloxone, needle exchange referral, buprenorphine) are part of comprehensive care."
                }
            },
            {
                "modality": "Echocardiogram",
                "title": "Valvular Heart Disease — Aortic Stenosis",
                "vignette": "A <strong>78-year-old male</strong> presents after a syncopal episode while climbing stairs. Over the past 6 months, he has noticed progressive exertional dyspnea and one prior episode of exertional chest pressure. A <strong>crescendo-decrescendo systolic murmur</strong> radiating to the carotids is heard with diminished S2 and pulsus parvus et tardus. He is a retired construction worker.",
                "context": {
                    "question": "What epidemiological factors help narrow the etiology of this patient's likely aortic stenosis?",
                    "correct": "B",
                    "options": {
                        "A": "At age 78, rheumatic heart disease is the most common cause",
                        "B": "Degenerative calcific aortic stenosis is the most common cause over age 65, driven by the same atherosclerotic risk factors as CAD (age, smoking, hypertension, hyperlipidemia) — his construction work with possible silica/dust exposure may have accelerated chronic inflammation",
                        "C": "Bicuspid aortic valve is the most likely cause at any age",
                        "D": "This is likely radiation-induced valvular disease"
                    },
                    "explanation": "Age-Dependent Etiology of AS",
                    "text": "Aortic stenosis etiology shifts with age: <strong><40:</strong> congenital bicuspid valve (1-2% of population); <strong>40-65:</strong> bicuspid valve with superimposed calcification; <strong>>65:</strong> degenerative calcific disease of a trileaflet valve. Rheumatic AS (commissural fusion) is now uncommon in developed countries but remains a major cause globally. <strong>Occupational exposures</strong> that promote chronic systemic inflammation (silica, asbestos, diesel exhaust) may accelerate atherosclerotic-type valve calcification — an emerging area of research.",
                    "pearl": "Epidemiologic Pearl: Prior chest radiation (e.g., for Hodgkin lymphoma) causes radiation-associated valvular disease 10-20 years later, often affecting the aortic valve. Always ask about prior cancer treatment — 'survivor' patients are now presenting with late cardiac complications."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "CT calcium scoring to quantify valve calcification",
                        "B": "Transthoracic echocardiogram — the definitive test for valvular assessment",
                        "C": "Cardiac catheterization",
                        "D": "Chest X-ray first"
                    },
                    "explanation": "Echo Is the Valvular Gold Standard",
                    "text": "TTE provides valve area (by continuity equation), peak/mean gradient, jet velocity, LV function, wall thickness, and associated findings. Severe AS: valve area <1.0 cm², mean gradient >40 mmHg, peak velocity >4 m/s. Catheterization is reserved for discrepant echo/clinical findings or pre-surgical coronary assessment."
                },
                "expect": {
                    "correct": "A",
                    "options": {
                        "A": "Heavily calcified aortic valve with restricted leaflet motion, valve area <1.0 cm², mean gradient >40 mmHg, concentric LVH",
                        "B": "Mitral valve prolapse with moderate regurgitation",
                        "C": "Dilated cardiomyopathy with global hypokinesis",
                        "D": "Normal valve with dynamic LVOT obstruction (HCM)"
                    },
                    "explanation": "Severe Calcific AS Pattern",
                    "text": "Syncope + exertional dyspnea + exertional angina = the classic 'SAD' triad of severe AS. The murmur character (late peaking, diminished A2, parvus et tardus pulse) correlates with severity. Echo will confirm: calcified trileaflet valve with restricted opening, high gradient, and compensatory concentric LVH."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Medical management — aortic stenosis responds well to vasodilators",
                        "B": "Balloon valvuloplasty as definitive treatment",
                        "C": "Refer for aortic valve replacement (SAVR or TAVR) — severe symptomatic AS with syncope has >50% 1-year mortality without intervention",
                        "D": "Serial echocardiograms every 3 months to monitor progression"
                    },
                    "explanation": "Severe Symptomatic AS = Valve Replacement",
                    "text": "Severe symptomatic AS is a <strong>class I indication for valve replacement</strong>. Prognosis without intervention: average survival 5 years after angina onset, 3 years after syncope, 2 years after heart failure. TAVR vs SAVR decision depends on surgical risk score (STS), anatomy, age, and patient preference. At 78, TAVR is often preferred (lower procedural risk).",
                    "radiopaedia": "https://radiopaedia.org/articles/aortic-stenosis"
                },
                "integrate": {
                    "correct": "B",
                    "options": {
                        "A": "SAVR regardless of risk — it's the traditional gold standard",
                        "B": "Heart team discussion (cardiology, cardiac surgery) for SAVR vs TAVR based on STS score, pre-procedural coronary angiography, and assessment of comorbidities including occupational lung disease from construction exposure",
                        "C": "Medical management with diuretics and ACE inhibitors",
                        "D": "Palliative care only — he is too old for intervention"
                    },
                    "explanation": "Heart Team + Occupational History",
                    "text": "The 'heart team' approach is standard for severe AS. Coronary angiography is performed pre-operatively (PCI concurrent or staged with SAVR, or done before TAVR). His construction work history means screening for <strong>occupational lung disease</strong> is important — restrictive lung disease from silica/asbestos exposure affects surgical risk and anesthesia planning. TAVR may be preferred if pulmonary function testing shows significant impairment."
                }
            }
        ],
        "cross_links": [
            ("🫁 Chest Imaging", "raddx-chest.html", "Pneumonia, PE, pneumothorax"),
            ("🩻 Abdominal Imaging", "raddx-abdominal.html", "CT abdomen, US, HIDA"),
            ("🧠 Neuroimaging", "raddx-neuro.html", "CT/MRI brain, stroke"),
            ("← RadDx Hub", "raddx-hub.html", "All body systems"),
        ],
        "references": [
            ("ACS / STEMI Management — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK532281/"),
            ("AHA/ACC STEMI Guidelines 2013 (updated 2015)", "https://doi.org/10.1161/CIR.0000000000000336"),
            ("AHA/ACC/HFSA Heart Failure Guideline 2022", "https://doi.org/10.1161/CIR.0000000000001063"),
            ("AHA/ACC Valvular Heart Disease Guideline 2020", "https://doi.org/10.1161/CIR.0000000000000923"),
            ("ESC Infective Endocarditis Guidelines 2023", "https://doi.org/10.1093/eurheartj/ehad193"),
            ("Radiopaedia.org — Open-access radiology reference", "https://radiopaedia.org"),
        ]
    },
    "abdominal": {
        "icon": "🩻",
        "title": "Abdominal Imaging",
        "badge": "GI / SURGERY",
        "scenarios": [
            {
                "modality": "CT Abdomen/Pelvis (or US)",
                "title": "Acute Appendicitis",
                "vignette": "A <strong>24-year-old female</strong> presents with 18 hours of periumbilical pain that has migrated to the right lower quadrant. Low-grade fever (38.1°C), nausea without vomiting. Tenderness at McBurney's point with positive Rovsing sign. Last menstrual period was 6 weeks ago. Vitals: HR 94, BP 118/72.",
                "context": {
                    "question": "What epidemiological and patient-specific factors critically change your imaging and diagnostic approach here?",
                    "correct": "D",
                    "options": {
                        "A": "Her age makes appendicitis less likely — it peaks in children",
                        "B": "Rovsing sign is pathognomonic, so imaging is unnecessary",
                        "C": "Go straight to CT — it's the best test regardless of patient factors",
                        "D": "She is a reproductive-age female with LMP 6 weeks ago — you must rule out ectopic pregnancy (stat beta-hCG) and use ultrasound first instead of CT to avoid radiation to a potentially early pregnancy"
                    },
                    "explanation": "Reproductive Status Changes Everything",
                    "text": "In reproductive-age females with RLQ pain, <strong>ectopic pregnancy must be ruled out first</strong> — it is life-threatening and can mimic appendicitis. A stat beta-hCG is mandatory. If positive, transvaginal US is the next step. Even if negative, ultrasound (not CT) is first-line imaging in young women and children to minimize radiation. The Alvarado score helps stratify, but the epidemiological reality is that <strong>appendicitis mimics</strong> in young women include ectopic pregnancy, ruptured ovarian cyst, ovarian torsion, and PID — all best evaluated by ultrasound.",
                    "pearl": "Epidemiologic Pearl: Appendicitis peaks at ages 10-30 but the negative appendectomy rate is highest in reproductive-age women because of diagnostic overlap with gynecologic pathology. Using US first + CT only if US equivocal reduces unnecessary surgery without missing appendicitis."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "CT abdomen/pelvis with IV contrast — gold standard for appendicitis",
                        "B": "Stat beta-hCG → if negative, right lower quadrant ultrasound → CT only if US equivocal",
                        "C": "MRI abdomen — best for appendicitis in pregnancy",
                        "D": "No imaging needed — clinical diagnosis, proceed to OR"
                    },
                    "explanation": "Stepwise Imaging in Young Women",
                    "text": "Beta-hCG first (takes minutes, rules out ectopic). RLQ ultrasound: sensitivity 71-86% for appendicitis in thin patients, also evaluates ovarian pathology. If US shows dilated non-compressible appendix >6mm, you have your diagnosis. If US is equivocal, CT confirms. In confirmed pregnancy, MRI without contrast is the preferred second-line modality (no radiation)."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Free fluid in the pelvis only",
                        "B": "Normal appendix with large right ovarian cyst",
                        "C": "Non-compressible tubular structure >6mm in RLQ with surrounding echogenic fat (periappendiceal inflammation)",
                        "D": "Target sign suggesting intussusception"
                    },
                    "explanation": "Appendicitis on Ultrasound",
                    "text": "US criteria for appendicitis: non-compressible appendix >6mm diameter, appendicolith (hyperechoic with shadowing), periappendiceal fluid or fat stranding, and loss of the normal gut signature. If the appendix is visualized and normal (<6mm, compressible), appendicitis is effectively ruled out."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "Start IV antibiotics and observe — antibiotics alone may be sufficient",
                        "B": "The US confirms appendicitis with no signs of perforation → surgical consultation for appendectomy (laparoscopic preferred)",
                        "C": "Get CT to confirm the US finding before surgery",
                        "D": "Discharge with oral antibiotics and surgical follow-up"
                    },
                    "explanation": "US-Confirmed Appendicitis → Surgery",
                    "text": "When US clearly shows appendicitis, CT is not needed (avoids radiation and contrast). Laparoscopic appendectomy is standard. Antibiotics-first trials (CODA trial) show non-inferiority in uncomplicated appendicitis, but many patients ultimately need surgery within 1-2 years. For complicated appendicitis (perforation, abscess), CT is useful to plan the approach (immediate surgery vs. percutaneous drainage + interval appendectomy).",
                    "radiopaedia": "https://radiopaedia.org/articles/acute-appendicitis"
                },
                "integrate": {
                    "correct": "A",
                    "options": {
                        "A": "Laparoscopic appendectomy + perioperative antibiotics + pathology review (to rule out carcinoid or other appendiceal neoplasm) + ensure beta-hCG result is documented",
                        "B": "Open appendectomy — laparoscopic is not appropriate for acute appendicitis",
                        "C": "CT-guided percutaneous drainage",
                        "D": "Conservative management with IV antibiotics and 3-month follow-up CT"
                    },
                    "explanation": "Complete Surgical Plan",
                    "text": "Laparoscopic appendectomy is standard (shorter recovery, less wound infection, better cosmesis). Pathology review of the specimen is important — appendiceal carcinoid tumors and mucinous neoplasms are found in ~1% of appendectomy specimens. The beta-hCG documentation matters for medicolegal completeness and to guide post-operative care."
                }
            },
            {
                "modality": "RUQ Ultrasound ± HIDA",
                "title": "Acute Cholecystitis",
                "vignette": "A <strong>42-year-old woman</strong> from Guatemala, with BMI 34, presents with 8 hours of severe right upper quadrant pain after eating fried chicken. Pain radiates to her right scapula. She is febrile (38.6°C), tender in the RUQ with a positive Murphy's sign. Vitals: HR 96, BP 138/84. Labs: WBC 14,200, AST 45, ALT 52, total bilirubin 1.1, lipase normal.",
                "context": {
                    "question": "What epidemiological factors make gallstone disease and cholecystitis more likely in this patient?",
                    "correct": "C",
                    "options": {
                        "A": "Only obesity matters as a risk factor",
                        "B": "Her ethnicity is irrelevant to gallstone prevalence",
                        "C": "The '4 F's' (Female, Forty, Fertile, Fat) are traditional teaching, but ethnicity is the strongest predictor — Native American and Hispanic/Latina populations have 2-3× higher gallstone prevalence due to genetic differences in cholesterol metabolism and biliary motility",
                        "D": "Gallstone disease is equally distributed across all demographics"
                    },
                    "explanation": "Gallstone Epidemiology Is Not Equal",
                    "text": "Cholelithiasis has dramatic ethnic variation: <strong>Pima/Native American</strong> women have up to 75% prevalence by age 30 — the highest in the world. <strong>Hispanic/Latin American</strong> populations have prevalence rates 2-3× higher than European-ancestry populations. This is driven by genetic variants in ABCG5/G8 (cholesterol transporters) and LITH genes. Other risk factors: rapid weight loss (bariatric surgery patients, crash diets), estrogen (OCPs, pregnancy, HRT), cirrhosis, Crohn's disease (ileal bile salt malabsorption), and TPN. <strong>Diet accelerates but does not cause gallstones</strong> — genetics and metabolism are primary.",
                    "pearl": "Epidemiologic Pearl: In areas with high immigrant populations from Central America, gallstone disease may present at younger ages and with more complications (empyema, perforation) due to delayed care from barriers to healthcare access. Also consider parasitic causes (Clonorchis sinensis, Ascaris) in immigrants from Southeast Asia — these cause bile duct obstruction and cholangitis."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Right upper quadrant ultrasound — first-line for suspected cholecystitis",
                        "B": "CT abdomen/pelvis with IV contrast",
                        "C": "HIDA scan immediately",
                        "D": "MRCP to evaluate the common bile duct"
                    },
                    "explanation": "RUQ US Is First-Line",
                    "text": "RUQ ultrasound is fast, cheap, no radiation, and highly sensitive for gallstones (95%) and cholecystitis (sonographic Murphy sign, wall thickening >3mm, pericholecystic fluid). HIDA is reserved for equivocal US (non-filling of gallbladder at 60 min = cystic duct obstruction = cholecystitis). MRCP evaluates CBD stones if bilirubin rising or CBD dilation on US."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal gallbladder with CBD dilation to 12mm",
                        "B": "Gallstones with gallbladder wall thickening >3mm, pericholecystic fluid, and positive sonographic Murphy sign",
                        "C": "Pancreatic duct dilation with peripancreatic fluid",
                        "D": "Hepatic steatosis only"
                    },
                    "explanation": "Cholecystitis US Findings",
                    "text": "The triad of gallstones + wall thickening + sonographic Murphy sign has >90% positive predictive value for acute cholecystitis. Pericholecystic fluid indicates inflammation extending beyond the gallbladder wall. <strong>Check the CBD</strong> (normal <6mm, add 1mm per decade over 60) — if dilated, choledocholithiasis must be ruled out with MRCP or EUS before cholecystectomy."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Start oral antibiotics and observe as outpatient",
                        "B": "ERCP immediately for stone extraction",
                        "C": "Confirm cholecystitis (US positive) → IV antibiotics + surgical consultation for cholecystectomy within 72 hours (early cholecystectomy preferred)",
                        "D": "CT to further characterize before any surgical planning"
                    },
                    "explanation": "Early Cholecystectomy Is Standard",
                    "text": "Multiple RCTs support early laparoscopic cholecystectomy (within 72 hours of symptom onset) over delayed surgery — shorter hospital stay, lower complication rates, and no increased conversion to open. Tokyo Guidelines (TG18) grade severity: Grade I (uncomplicated) → early surgery; Grade II (moderate — WBC >18K, palpable mass, >72h symptoms) → early surgery or drainage; Grade III (severe — organ dysfunction) → gallbladder drainage first.",
                    "radiopaedia": "https://radiopaedia.org/articles/acute-cholecystitis"
                },
                "integrate": {
                    "correct": "A",
                    "options": {
                        "A": "IV antibiotics (piperacillin-tazobactam or ceftriaxone + metronidazole) + early laparoscopic cholecystectomy + intraoperative cholangiogram if CBD stone suspected + post-op dietary counseling",
                        "B": "Observation only — cholecystitis often resolves spontaneously",
                        "C": "Percutaneous cholecystostomy tube placement",
                        "D": "Medical dissolution therapy with ursodeoxycholic acid"
                    },
                    "explanation": "Comprehensive Cholecystitis Management",
                    "text": "Early surgery + antibiotics is standard for uncomplicated acute cholecystitis. Intraoperative cholangiogram (IOC) or preoperative MRCP is indicated if there's concern for CBD stones (elevated bilirubin/LFTs, CBD dilation). Cholecystostomy tubes are for patients too unstable for surgery (e.g., ICU patients, severe sepsis). For this patient, also consider health literacy and follow-up access for post-operative recovery."
                }
            },
            {
                "modality": "CT Abdomen/Pelvis",
                "title": "Small Bowel Obstruction",
                "vignette": "A <strong>67-year-old woman</strong> with prior open appendectomy (age 22) and hysterectomy (age 50) presents with 24 hours of crampy abdominal pain, bilious vomiting, abdominal distension, and no passage of flatus. High-pitched, hyperactive bowel sounds with diffuse tenderness but no peritoneal signs. Vitals: HR 102, BP 128/76, Temp 37.4°C.",
                "context": {
                    "question": "What in this patient's history most changes the differential for bowel obstruction?",
                    "correct": "A",
                    "options": {
                        "A": "Two prior open abdominal surgeries — adhesions are the cause of 60-75% of small bowel obstructions in developed countries, and open surgery creates more adhesions than laparoscopic",
                        "B": "Her age suggests malignancy as the most likely cause",
                        "C": "Bowel obstruction in women is usually from hernias",
                        "D": "Her symptoms are more consistent with large bowel obstruction"
                    },
                    "explanation": "Surgical History = Adhesion Risk",
                    "text": "<strong>Adhesive SBO</strong> accounts for 60-75% of cases in developed countries. Prior open surgery (especially pelvic operations) creates the most adhesions. In patients with NO surgical history, the differential shifts: hernias (examine ALL hernia sites — inguinal, femoral, incisional, umbilical, Spigelian), malignancy (especially colon cancer causing partial obstruction or carcinomatosis), Crohn's strictures, and internal hernias (post-bariatric surgery). <strong>In developing countries</strong>, hernias are the most common cause of SBO because many go unrepaired.",
                    "pearl": "Epidemiologic Pearl: After bariatric surgery (Roux-en-Y gastric bypass), INTERNAL hernias are a major cause of SBO — they occur at the Petersen defect or transverse mesocolon. These can be difficult to diagnose even on CT. Any post-bariatric patient with abdominal pain must have SBO considered, even if the CT is 'negative.' Also: gallstone ileus (SBO from gallstone eroding into bowel) is rare but classic in elderly women."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "Abdominal X-ray series (upright + supine)",
                        "B": "CT abdomen/pelvis with IV contrast (no oral contrast needed) — identifies transition point, cause, and complications",
                        "C": "Small bowel follow-through",
                        "D": "Ultrasound of the abdomen"
                    },
                    "explanation": "CT Is the SBO Workhorse",
                    "text": "CT with IV contrast is the gold standard for SBO evaluation. It identifies: (1) transition point (where dilated bowel meets decompressed), (2) cause (adhesive band, hernia, mass, stricture), (3) complications (closed-loop, strangulation — look for mesenteric haziness, lack of bowel wall enhancement, pneumatosis). Oral contrast is NOT needed and delays imaging. AXR shows air-fluid levels but can't identify the transition point or cause."
                },
                "expect": {
                    "correct": "A",
                    "options": {
                        "A": "Dilated small bowel loops (>3cm) with a discrete transition point in the pelvis, decompressed distal bowel, and no hernia or mass — consistent with adhesive SBO from prior pelvic surgery",
                        "B": "Large bowel dilation with competent ileocecal valve",
                        "C": "Pneumatosis intestinalis with portal venous gas",
                        "D": "Free air under the diaphragm"
                    },
                    "explanation": "Adhesive SBO CT Pattern",
                    "text": "Classic adhesive SBO: dilated proximal small bowel (>3cm), normal-caliber colon, and a transition point where bowel abruptly changes caliber without a visible mass or hernia. The 'small bowel feces sign' (particulate matter in dilated small bowel) indicates prolonged obstruction. The transition point is often in the pelvis, where the most adhesions form after pelvic surgery."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Immediate surgical exploration",
                        "B": "Gastrografin challenge — if contrast reaches the colon on 24-hour film, surgery can be avoided",
                        "C": "Assess for signs of strangulation on CT: non-enhancing bowel wall, mesenteric edema, closed-loop configuration, pneumatosis — if absent, trial of conservative management (NGT decompression, NPO, IV fluids) with water-soluble contrast follow-through",
                        "D": "Colonoscopy to rule out distal obstruction"
                    },
                    "explanation": "CT Determines Surgical Urgency",
                    "text": "The critical question CT answers: is there strangulation? <strong>Signs of strangulation</strong>: non-enhancing (ischemic) bowel wall, mesenteric haziness/fluid, closed-loop (C-shaped or U-shaped dilated segment with two adjacent collapsed transition points), pneumatosis (air in bowel wall), portal venous gas. If strangulation is present → emergent OR. If absent → conservative management succeeds in 65-80% of partial adhesive SBO. Water-soluble contrast (Gastrografin) challenge: if contrast reaches colon at 8-24h, non-operative management is likely to succeed.",
                    "radiopaedia": "https://radiopaedia.org/articles/small-bowel-obstruction"
                },
                "integrate": {
                    "correct": "B",
                    "options": {
                        "A": "Surgery immediately regardless of CT findings",
                        "B": "No strangulation → conservative management (NGT, NPO, IV fluids) + Gastrografin challenge + serial exams q4-6h + surgery if no improvement in 48-72h or if peritonitis develops",
                        "C": "Discharge with clear liquid diet and return precautions",
                        "D": "TPN and indefinite observation"
                    },
                    "explanation": "CT-Guided Management Algorithm",
                    "text": "Imaging stratifies patients into surgical vs. non-surgical pathways. Conservative management fails in 20-35% of adhesive SBO, and serial exams are critical — development of fever, peritonitis, or worsening distension on exam triggers surgical intervention even if initial CT showed no strangulation. The Gastrografin challenge serves double duty: therapeutic (osmotic effect reduces edema) and diagnostic (predicts resolution if contrast reaches colon)."
                }
            },
            {
                "modality": "CT Abdomen with Contrast",
                "title": "Acute Pancreatitis",
                "vignette": "A <strong>48-year-old male</strong> presents with severe epigastric pain radiating straight to his back, worse when lying flat, relieved by leaning forward. Onset 8 hours ago after heavy alcohol consumption. Vitals: HR 114, BP 100/64, RR 22, Temp 38.2°C. Lipase: 4,200 U/L (>3× ULN). Known to drink 12+ beers daily for 20 years.",
                "context": {
                    "question": "What epidemiological and exposure factors are critical for both the acute management and long-term plan for this patient?",
                    "correct": "C",
                    "options": {
                        "A": "Alcohol is the only cause of pancreatitis that matters here",
                        "B": "His heavy drinking means gallstones are unlikely",
                        "C": "Alcohol and gallstones together cause ~80% of acute pancreatitis — even in heavy drinkers, gallstones must be ruled out (RUQ US) because the treatment differs. Also assess for: medication-induced (valproate, azathioprine, thiazides), hypertriglyceridemia (>1000 mg/dL), and smoking (independent risk factor for pancreatitis AND pancreatic cancer)",
                        "D": "Heavy alcohol use means this is likely chronic pancreatitis, not acute"
                    },
                    "explanation": "Pancreatitis Etiology Workup",
                    "text": "Even in obvious alcohol-related pancreatitis, <strong>RUQ ultrasound is mandatory</strong> to evaluate for gallstones — the two etiologies coexist. Gallstone pancreatitis requires ERCP or cholecystectomy; alcoholic pancreatitis is managed supportively. Other important causes: hypertriglyceridemia (check fasting lipids — if TG >1000, urgent plasmapheresis may be needed), autoimmune pancreatitis (IgG4 elevation, sausage-shaped pancreas on CT), pancreatic divisum, and medications. <strong>Smoking doubles the risk of pancreatitis</strong> and is additive with alcohol — always address both.",
                    "pearl": "Epidemiologic Pearl: In South Florida, consider tropical/parasitic pancreatitis in immigrants from Southeast Asia and tropical regions (Ascaris obstructing the pancreatic duct). Also: post-ERCP pancreatitis is the most common iatrogenic cause. Geographic variation in pancreatitis etiology matters for your patient population."
                },
                "order": {
                    "correct": "C",
                    "options": {
                        "A": "CT abdomen with IV contrast immediately to confirm diagnosis",
                        "B": "MRCP to evaluate the pancreatic duct",
                        "C": "CT is NOT needed for diagnosis (clinical + lipase is sufficient) — order RUQ ultrasound to assess for gallstones. Reserve CT for 72-96 hours if the patient is not improving, to assess for necrosis or complications",
                        "D": "ERCP to evaluate the pancreatic duct"
                    },
                    "explanation": "When NOT to Image",
                    "text": "This is a critical teaching point: <strong>CT is not needed to diagnose pancreatitis</strong>. The diagnosis is clinical (2 of 3 criteria: characteristic pain, lipase >3× ULN, imaging findings). Early CT (<72h) can underestimate necrosis because it takes 48-72 hours for necrosis to fully declare. CT is indicated at 72-96h if: no clinical improvement, fever, rising WBC, organ failure, or suspected complications (abscess, pseudocyst, vascular complications)."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "CT at 72h shows normal pancreas — pancreatitis must be mild",
                        "B": "If CT obtained at 72-96h: pancreatic enlargement, peripancreatic fat stranding, fluid collections, and possible areas of non-enhancement indicating necrosis",
                        "C": "Massive pancreatic duct dilation with no parenchymal changes",
                        "D": "Calcifications throughout the pancreas"
                    },
                    "explanation": "CT Timing Matters",
                    "text": "At 72-96 hours, CT can differentiate: <strong>interstitial edematous pancreatitis</strong> (enhancing pancreas with peripancreatic inflammation — 80% of cases, good prognosis) vs. <strong>necrotizing pancreatitis</strong> (non-enhancing areas = necrosis — 20% of cases, high morbidity). The revised Atlanta classification uses CT to classify acute peripancreatic fluid collections, pseudocysts, acute necrotic collections, and walled-off necrosis."
                },
                "interpret": {
                    "correct": "D",
                    "options": {
                        "A": "Any necrosis requires immediate surgical debridement",
                        "B": "Necrosis means antibiotics are mandatory to prevent infection",
                        "C": "Necrosis percentage doesn't affect management",
                        "D": "Necrosis extent determines ICU vs floor disposition, but infected necrosis (gas bubbles on CT or positive FNA) is the main indication for intervention — sterile necrosis is managed conservatively"
                    },
                    "explanation": "Necrosis: Sterile vs. Infected",
                    "text": "CT distinguishes sterile from infected necrosis: <strong>gas bubbles within necrotic collection</strong> = infected until proven otherwise (or confirmed by CT-guided FNA). Infected necrosis requires drainage (step-up approach: percutaneous → endoscopic → surgical if needed). Sterile necrosis, even if extensive, is managed conservatively. Prophylactic antibiotics for sterile necrosis are NOT recommended (no mortality benefit, increases fungal infections).",
                    "radiopaedia": "https://radiopaedia.org/articles/acute-pancreatitis"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "Aggressive IV fluids, NPO for 7 days, and plan for surgery",
                        "B": "Early oral feeding, IV fluids, and discharge when eating",
                        "C": "Aggressive IV fluid resuscitation (goal-directed), early oral feeding when tolerated (not prolonged NPO), RUQ US to rule out gallstone etiology, CT at 72-96h if not improving, addiction medicine consultation for alcohol use disorder, and smoking cessation",
                        "D": "ERCP within 24 hours to decompress the pancreatic duct"
                    },
                    "explanation": "Evidence-Based Pancreatitis Management",
                    "text": "Modern pancreatitis management has evolved: early oral feeding (when tolerated) improves outcomes vs prolonged NPO. Goal-directed fluid resuscitation (Ringer's lactate preferred) prevents organ failure. ERCP is indicated only for gallstone pancreatitis with cholangitis or persistent biliary obstruction — not routine. The most impactful long-term intervention: treating the underlying alcohol use disorder (reduces recurrence by 50-60%). Imaging guides acute management; addressing the social/behavioral cause prevents recurrence."
                }
            },
            {
                "modality": "CT Abdomen/Pelvis",
                "title": "GI Perforation — Free Air",
                "vignette": "A <strong>72-year-old male</strong> with history of chronic NSAID use for osteoarthritis presents with sudden-onset severe diffuse abdominal pain. He is rigid on exam with rebound tenderness diffusely. Vitals: HR 120, BP 88/52, RR 28, Temp 38.8°C. Free air is suspected.",
                "context": {
                    "question": "What exposure history is most critical in determining the likely site and cause of perforation?",
                    "correct": "B",
                    "options": {
                        "A": "Age alone determines perforation risk",
                        "B": "Chronic NSAID use is the single biggest modifiable risk factor for peptic ulcer perforation — NSAIDs inhibit prostaglandin-mediated mucosal protection. Combined with age >65, this carries very high risk. Also screen for H. pylori status, corticosteroid use, anticoagulants, and smoking",
                        "C": "Only H. pylori causes ulcer perforation",
                        "D": "Perforation location doesn't change surgical approach"
                    },
                    "explanation": "NSAID Exposure and Ulcer Epidemiology",
                    "text": "Peptic ulcer perforation etiology: <strong>H. pylori</strong> (declining due to eradication therapy) and <strong>NSAID use</strong> (increasing as the population ages). NSAIDs + age >65 + corticosteroids = very high risk. The perforation location matters: <strong>anterior duodenal</strong> ulcers perforate into the peritoneum (free air); <strong>posterior</strong> ulcers erode into the gastroduodenal artery (massive hemorrhage). Other perforation causes by location: cecal (diverticulitis, typhoid in endemic areas), sigmoid (diverticulitis — most common in Western countries), and stercoral perforation (chronic constipation in elderly/immobilized patients).",
                    "pearl": "Epidemiologic Pearl: In developing countries, typhoid perforation (terminal ileum) remains a common cause of surgical abdomen. In the US, consider diverticular perforation in the elderly and medication-related perforations (NSAIDs, steroids, bevacizumab in oncology patients)."
                },
                "order": {
                    "correct": "C",
                    "options": {
                        "A": "Upright CXR is sufficient — if free air is seen, go to OR",
                        "B": "CT abdomen/pelvis with oral and IV contrast",
                        "C": "Upright CXR first (free air under diaphragm, takes 1 minute) → if positive with peritonitis, CT is optional but can help localize the perforation site; if equivocal, CT abdomen/pelvis with IV contrast (no oral needed)",
                        "D": "CT with oral contrast to confirm the leak site"
                    },
                    "explanation": "Rapid Surgical Diagnosis",
                    "text": "Upright CXR detects free air in ~75% of perforations (crescent of air under the diaphragm). In a patient with obvious peritonitis + free air on CXR, you have enough information for surgical decision-making. CT adds value by: localizing the perforation (duodenum vs colon), identifying the cause (perforated diverticulitis vs ulcer vs cancer), and detecting complications (abscess, fecal contamination). Oral contrast delays imaging and is not needed."
                },
                "expect": {
                    "correct": "A",
                    "options": {
                        "A": "Free intraperitoneal air (pneumoperitoneum) + anterior duodenal wall defect or discontinuity + surrounding inflammatory changes",
                        "B": "Contained abscess without free air",
                        "C": "Dilated bowel loops without perforation",
                        "D": "Normal CT despite clinical peritonitis"
                    },
                    "explanation": "Perforation CT Findings",
                    "text": "CT shows: extraluminal free air (often most prominent anteriorly and subdiaphragmatic), discontinuity in the bowel wall at the perforation site, surrounding inflammatory fat stranding, and free fluid (which may be purulent in delayed presentations). The location of maximal free air and inflammation helps identify the source — duodenal perforations concentrate air and inflammation in the anterior upper abdomen."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "Free air + peritonitis = emergent surgical consultation — this patient needs the operating room",
                        "B": "Start IV antibiotics and observe for 24 hours",
                        "C": "Interventional radiology-guided drainage",
                        "D": "Endoscopic clipping of the perforation site"
                    },
                    "explanation": "Perforation = OR",
                    "text": "Free perforation with peritonitis is a surgical emergency. <strong>Resuscitate first</strong> (IV fluids, broad-spectrum antibiotics — pip/tazo or meropenem), then OR for repair. Duodenal ulcer perforation: Graham patch (omental patch). Sigmoid diverticular perforation: Hartmann procedure or primary resection with anastomosis depending on contamination. Pre-operative CT helps the surgeon plan the approach.",
                    "radiopaedia": "https://radiopaedia.org/articles/pneumoperitoneum"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Surgery and discharge",
                        "B": "Surgery + PPI + antibiotics",
                        "C": "Surgery + PPI + stop NSAIDs only",
                        "D": "Emergent surgery (Graham patch for duodenal perforation) + IV PPI + broad-spectrum antibiotics + H. pylori testing/treatment + permanent NSAID cessation + alternative pain management (acetaminophen, physical therapy, topical NSAIDs, duloxetine for OA) + PPI prophylaxis if any future NSAID use is unavoidable"
                    },
                    "explanation": "Prevention of Recurrence",
                    "text": "Post-perforation management extends beyond the OR: stop the causative agent (NSAIDs), test and treat H. pylori (the other major ulcer cause), and provide a long-term alternative pain management strategy for the patient's osteoarthritis. Many patients are told to 'stop NSAIDs' without being given a viable alternative, leading to re-use. The imaging finding (perforation) triggered acute surgery, but addressing the underlying exposure (chronic NSAID use) prevents the next perforation."
                }
            },
            {
                "modality": "Ultrasound + CT/MRI",
                "title": "Liver Mass — Incidental Finding",
                "vignette": "A <strong>55-year-old male</strong> with known hepatitis C cirrhosis (genotype 1a, treated and achieved SVR 3 years ago) presents for routine HCC surveillance ultrasound. The US identifies a <strong>new 2.5 cm hyperechoic lesion</strong> in the right lobe that was not present on the US 6 months ago. He has no symptoms. AFP: 42 ng/mL (previously 8). He is a Vietnam-era veteran who also has a history of significant alcohol use.",
                "context": {
                    "question": "What epidemiological factors determine the pre-test probability that this lesion is HCC?",
                    "correct": "D",
                    "options": {
                        "A": "He achieved SVR for Hep C, so his HCC risk is now negligible",
                        "B": "Only active Hep C infection carries HCC risk",
                        "C": "Cirrhosis from any cause carries equal HCC risk",
                        "D": "Despite SVR, patients with established cirrhosis maintain significant HCC risk and require lifelong surveillance. His dual risk factors (HCV cirrhosis + prior heavy alcohol use) create synergistic hepatocarcinogenic risk. As a Vietnam veteran, Agent Orange exposure is an additional hepatotoxic risk factor to document"
                    },
                    "explanation": "HCC Risk Persists After SVR",
                    "text": "This is a critical epidemiological teaching point. SVR reduces but does NOT eliminate HCC risk in patients with established cirrhosis — annual HCC incidence remains 1-4% after cure. <strong>Dual etiologies</strong> (HCV + alcohol) create synergistic liver injury. <strong>Agent Orange (dioxin) exposure</strong> in Vietnam veterans is associated with hepatobiliary cancers and is a VA-recognized condition (important for benefits and care). Additionally, <strong>aflatoxin exposure</strong> (contaminated grain/peanuts in tropical regions) synergizes with viral hepatitis for HCC. The rising AFP + new lesion in a cirrhotic liver = HCC until proven otherwise.",
                    "pearl": "Epidemiologic Pearl: HCC incidence is rising in the US due to NASH/MAFLD, which will surpass HCV as the leading cause of HCC. Screen all cirrhotics regardless of etiology. In immigrant populations, Hepatitis B (vertical transmission in Asian/African populations) remains the leading global cause of HCC — and HBV can cause HCC even WITHOUT cirrhosis."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "CT-guided biopsy of the lesion",
                        "B": "Multiphasic CT or MRI with contrast (LI-RADS protocol) — the diagnostic imaging study for liver lesions in at-risk populations",
                        "C": "Repeat ultrasound in 3 months",
                        "D": "PET scan"
                    },
                    "explanation": "LI-RADS Protocol",
                    "text": "In patients at risk for HCC (cirrhosis of any etiology), a new lesion on surveillance US triggers <strong>multiphasic CT or MRI</strong> using the LI-RADS (Liver Imaging Reporting and Data System) protocol. LI-RADS categorizes lesions (LR-1 benign through LR-5 definite HCC) based on contrast enhancement patterns. <strong>Biopsy is NOT first-line</strong> in cirrhotic livers — imaging alone can diagnose HCC with high specificity if the lesion shows classic enhancement pattern, avoiding biopsy risks (bleeding, tumor seeding)."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "No enhancement in any phase — likely a cyst",
                        "B": "Persistent enhancement in all phases — likely hemangioma",
                        "C": "Arterial phase hyperenhancement with washout in portal venous or delayed phase — the hallmark LI-RADS 5 (definite HCC) pattern",
                        "D": "Peripheral nodular enhancement — typical of focal nodular hyperplasia"
                    },
                    "explanation": "HCC Enhancement Pattern",
                    "text": "The diagnostic hallmark of HCC is <strong>arterial phase hyperenhancement + portal venous/delayed phase washout</strong>. This reflects the tumor's exclusive arterial blood supply (vs. normal liver which is 75% portal venous). In a cirrhotic patient, a lesion ≥10mm with this pattern = LI-RADS 5 = HCC diagnosis without biopsy. Additional features: enhancing 'capsule,' threshold growth (>50% in <6 months)."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "LI-RADS 5 = immediate liver transplant listing",
                        "B": "LI-RADS 5 (definite HCC) at 2.5cm in cirrhosis → multidisciplinary tumor board (hepatology, transplant surgery, interventional radiology, oncology) for staging and treatment planning per BCLC criteria",
                        "C": "Chemotherapy as first-line treatment",
                        "D": "Repeat imaging in 6 months to confirm"
                    },
                    "explanation": "Imaging Drives the Treatment Algorithm",
                    "text": "LI-RADS 5 triggers the Barcelona Clinic Liver Cancer (BCLC) staging system: BCLC 0/A (early stage, single ≤5cm or up to 3 nodules ≤3cm, preserved liver function) → curative options: resection, transplant (Milan criteria), or ablation. BCLC B (intermediate) → TACE. BCLC C (advanced) → systemic therapy (atezolizumab + bevacizumab). BCLC D (terminal) → palliative care. This 2.5cm single lesion with good liver function is likely BCLC A.",
                    "radiopaedia": "https://radiopaedia.org/articles/hepatocellular-carcinoma"
                },
                "integrate": {
                    "correct": "A",
                    "options": {
                        "A": "Multidisciplinary tumor board discussion for curative options (resection vs ablation vs transplant based on liver function/portal hypertension), AFP trend monitoring, address alcohol abstinence, document Agent Orange exposure for VA benefits, and ensure HBV vaccination if not immune",
                        "B": "Start sorafenib immediately",
                        "C": "Palliative care referral only",
                        "D": "Observation with serial imaging"
                    },
                    "explanation": "Imaging → Staging → Curative Intent",
                    "text": "The imaging finding (LI-RADS 5) initiated a cascade from diagnosis through staging to treatment. The epidemiological context matters throughout: his veteran status and Agent Orange exposure qualify him for enhanced VA benefits; his alcohol history requires confirmed abstinence for transplant eligibility; his achieved SVR means his liver may still have reasonable function. A 2.5cm single HCC in a cirrhotic liver with preserved function often has excellent outcomes with curative treatment."
                }
            }
        ],
        "cross_links": [
            ("🫁 Chest Imaging", "raddx-chest.html", "Pneumonia, PE, pneumothorax"),
            ("❤️ Cardiac Imaging", "raddx-cardiac.html", "ECG, echo, angiography"),
            ("🧠 Neuroimaging", "raddx-neuro.html", "CT/MRI brain, stroke"),
            ("← RadDx Hub", "raddx-hub.html", "All body systems"),
        ],
        "references": [
            ("Acute Appendicitis — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK493193/"),
            ("ACG Cholecystitis Clinical Guidelines", "https://doi.org/10.14309/ajg.0000000000001318"),
            ("WSES SBO Guidelines 2017", "https://doi.org/10.1186/s13017-017-0149-0"),
            ("AGA Pancreatitis Clinical Practice Update 2024", "https://doi.org/10.1053/j.gastro.2024.02.003"),
            ("AASLD HCC Practice Guidance 2023", "https://doi.org/10.1002/hep.32689"),
            ("Radiopaedia.org — Open-access radiology reference", "https://radiopaedia.org"),
        ]
    },
    "neuro": {
        "icon": "🧠",
        "title": "Neuroimaging",
        "badge": "NEUROLOGY",
        "scenarios": [
            {
                "modality": "CT Head → CTA → CT Perfusion",
                "title": "Acute Ischemic Stroke",
                "vignette": "A <strong>68-year-old male</strong> with atrial fibrillation (not on anticoagulation — stopped it himself 3 months ago) presents with sudden-onset right-sided hemiplegia and aphasia. Symptoms began 90 minutes ago. NIHSS score: 18 (severe). Vitals: HR 88 (irregular), BP 178/96.",
                "context": {
                    "question": "What epidemiological and exposure factors are critical for both the acute management and understanding of this stroke?",
                    "correct": "D",
                    "options": {
                        "A": "His age is the only relevant risk factor",
                        "B": "Atrial fibrillation alone explains the stroke — no further workup needed",
                        "C": "Medication non-adherence is a personal choice and not relevant to clinical management",
                        "D": "AFib without anticoagulation is the most likely cause (cardioembolic stroke), but understanding WHY he stopped anticoagulation is critical — cost, bleeding concerns, lack of understanding? This same barrier will determine whether he remains protected after discharge. CHA₂DS₂-VASc score and bleeding risk stratification guide long-term therapy"
                    },
                    "explanation": "Stroke Epidemiology and Social Context",
                    "text": "Stroke etiology varies by demographics and geography. <strong>Cardioembolic</strong> (AFib, valvular disease) causes the largest, most disabling strokes. <strong>Large vessel atherosclerosis</strong> (carotid stenosis) is more common in patients with traditional cardiovascular risk factors. <strong>Small vessel (lacunar)</strong> strokes associate with hypertension and diabetes. <strong>Young stroke (<50)</strong> has a different differential: dissection (trauma, chiropractic manipulation), PFO with paradoxical embolism, hypercoagulable states, substance use (cocaine, amphetamines), and vasculitis. In this case, the social determinant — why he stopped anticoagulation — is as important as the acute imaging.",
                    "pearl": "Epidemiologic Pearl: Stroke disparities are profound: Black Americans have 2× the stroke incidence and higher mortality than White Americans, driven by hypertension prevalence, healthcare access, and time-to-treatment delays. Rural areas have longer door-to-needle times. Hispanic populations have higher stroke rates at younger ages. Social context determines both risk and treatment access."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Non-contrast CT head IMMEDIATELY (to exclude hemorrhage) → CTA head/neck (to identify large vessel occlusion) → CT perfusion if available (to assess salvageable penumbra)",
                        "B": "MRI brain with diffusion-weighted imaging",
                        "C": "Carotid duplex ultrasound",
                        "D": "CT with IV contrast"
                    },
                    "explanation": "Stroke Imaging Protocol",
                    "text": "The stroke imaging protocol is sequential and time-critical: (1) <strong>Non-contrast CT</strong> within 20 minutes of arrival — rules out hemorrhage (the absolute contraindication to tPA). (2) <strong>CTA head/neck</strong> — identifies large vessel occlusion (LVO) for thrombectomy candidacy. (3) <strong>CT perfusion</strong> (where available) — quantifies ischemic core vs salvageable penumbra, extending the thrombectomy window to 24 hours (DAWN/DEFUSE-3 criteria). MRI/DWI is more sensitive but takes longer and is less available emergently."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Large hyperdense area indicating hemorrhagic stroke",
                        "B": "Non-contrast CT may be normal or show early ischemic signs (hyperdense MCA sign, loss of insular ribbon, sulcal effacement); CTA will likely show left MCA occlusion given right hemiplegia + aphasia (left hemisphere)",
                        "C": "Large right MCA territory infarction",
                        "D": "Bilateral watershed infarcts"
                    },
                    "explanation": "Early CT Signs of Ischemia",
                    "text": "At 90 minutes, non-contrast CT may show subtle early ischemic changes: <strong>hyperdense MCA sign</strong> (thrombus visible as bright vessel), <strong>loss of the insular ribbon</strong> (early cortical edema), sulcal effacement. ASPECTS score (Alberta Stroke Program Early CT Score, 0-10) quantifies early changes — score ≤5 suggests large established infarct and poorer thrombectomy outcomes. CTA is the critical image: left MCA occlusion (M1 or M2 segment) explains this patient's right hemiplegia + aphasia."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Give IV tPA only — thrombectomy is experimental",
                        "B": "Thrombectomy only — tPA is outdated",
                        "C": "IV alteplase immediately (within 4.5h window) PLUS activate thrombectomy team for catheter-based clot retrieval (within 24h if favorable perfusion mismatch) — this is the current standard for LVO strokes",
                        "D": "Aspirin 325mg and admit for observation"
                    },
                    "explanation": "Dual Therapy: tPA + Thrombectomy",
                    "text": "For LVO strokes within 4.5 hours: <strong>IV tPA first (don't delay for thrombectomy)</strong> + mechanical thrombectomy. The evidence is overwhelming (MR CLEAN, ESCAPE, EXTEND-IA, SWIFT PRIME, REVASCAT trials): thrombectomy for anterior circulation LVO with NIHSS ≥6 and ASPECTS ≥6 within 6 hours — or up to 24 hours if CT perfusion shows favorable mismatch (DAWN, DEFUSE-3). The NNT for thrombectomy is approximately 2.6 — one of the most effective interventions in medicine.",
                    "radiopaedia": "https://radiopaedia.org/articles/ischaemic-stroke"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Thrombectomy and discharge on aspirin",
                        "B": "Thrombectomy and restart warfarin immediately",
                        "C": "Thrombectomy and observation only",
                        "D": "IV tPA + thrombectomy → post-procedure imaging (CT to rule out hemorrhagic transformation) → restart anticoagulation (DOAC preferred for non-valvular AFib, typically at 4-14 days based on infarct size) → address why anticoagulation was stopped → ensure affordable access to medications → stroke rehabilitation"
                    },
                    "explanation": "Acute Treatment + Root Cause + Prevention",
                    "text": "The imaging drove emergent intervention, but long-term stroke prevention requires understanding and fixing the root cause. This patient's stroke was preventable — he had a known indication for anticoagulation. The discharge plan must include: affordable DOAC access (patient assistance programs, generic apixaban), health literacy about stroke prevention, adherence support, and rehabilitation for the resulting deficits. The imaging finding (LVO) → acute treatment (tPA + thrombectomy) → secondary prevention (anticoagulation + addressing the social determinant that led to non-adherence)."
                }
            },
            {
                "modality": "CT Head → CTA → DSA",
                "title": "Subarachnoid Hemorrhage",
                "vignette": "A <strong>48-year-old woman</strong> presents with sudden-onset 'worst headache of my life' while straining during a bowel movement. She had a brief loss of consciousness and now has neck stiffness and photophobia. She smokes 1 pack per day and has poorly controlled hypertension. Her mother died of a 'brain bleed' at age 52. Vitals: HR 68, BP 192/104, Temp 37.8°C.",
                "context": {
                    "question": "What epidemiological and genetic factors significantly increase this patient's pre-test probability for aneurysmal SAH?",
                    "correct": "C",
                    "options": {
                        "A": "Only her headache severity matters — thunderclap headaches are always SAH",
                        "B": "Family history of brain hemorrhage is too nonspecific to be useful",
                        "C": "First-degree relative with aneurysmal SAH doubles her risk. Combined with smoking (strongest modifiable risk factor for aneurysm formation AND rupture), uncontrolled hypertension, and female sex (1.6× risk), her pre-test probability is very high. She should also be screened for polycystic kidney disease and connective tissue disorders",
                        "D": "At 48 she is too young for aneurysmal SAH"
                    },
                    "explanation": "SAH Risk Factor Clustering",
                    "text": "Aneurysmal SAH has identifiable risk factors: <strong>smoking</strong> is the strongest modifiable risk (2-3× increased risk, dose-dependent), <strong>hypertension</strong> promotes aneurysm growth and rupture, and <strong>family history</strong> (first-degree relative with SAH = 2× risk; ≥2 first-degree relatives = screening indication). <strong>Autosomal dominant polycystic kidney disease</strong> (ADPKD) carries 5-10% aneurysm prevalence. Connective tissue disorders (Ehlers-Danlos type IV, Marfan) increase risk. <strong>Cocaine/amphetamine use</strong> causes acute hypertensive surges that trigger rupture. Female sex, particularly post-menopause, is independently associated (estrogen may be protective).",
                    "pearl": "Epidemiologic Pearl: First-degree relatives of SAH patients should be offered screening MRA if ≥2 family members affected. Screening detects unruptured aneurysms in ~10% of first-degree relatives. Japanese and Finnish populations have higher SAH incidence than other groups, suggesting genetic predisposition beyond known risk factors."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Non-contrast CT head — >95% sensitive for SAH within 6 hours of onset; if negative, lumbar puncture for xanthochromia",
                        "B": "MRI brain with FLAIR sequences",
                        "C": "CTA head directly",
                        "D": "Lumbar puncture first — it's more sensitive than CT"
                    },
                    "explanation": "CT → LP → CTA Protocol",
                    "text": "Non-contrast CT head is >95% sensitive for SAH within 6 hours (drops to ~50% by day 5). If CT is positive → CTA to identify the aneurysm. If CT is negative but clinical suspicion remains → LP (xanthochromia in CSF supernatant confirms SAH). Modern CT at high-quality centers approaches 100% sensitivity at 6h, but LP remains the safety net. If SAH confirmed → digital subtraction angiography (DSA) is the gold standard for aneurysm characterization and treatment planning."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal CT — SAH is excluded",
                        "B": "Hyperdense blood in basal cisterns, sylvian fissures, and/or interhemispheric fissure — the distribution pattern suggests the aneurysm location",
                        "C": "Large intracerebral hemorrhage without subarachnoid blood",
                        "D": "Diffuse cerebral edema without hemorrhage"
                    },
                    "explanation": "SAH Distribution Pattern",
                    "text": "Blood distribution on CT suggests aneurysm location: <strong>basal cisterns + anterior interhemispheric fissure</strong> = AComm aneurysm (most common, 30-35%). <strong>Sylvian fissure (unilateral)</strong> = MCA aneurysm. <strong>Prepontine cistern</strong> = basilar tip. Fisher Grade (1-4) based on blood distribution predicts vasospasm risk: Grade 3 (thick subarachnoid clot >1mm) carries highest vasospasm risk."
                },
                "interpret": {
                    "correct": "D",
                    "options": {
                        "A": "Start anticoagulation to prevent further clotting",
                        "B": "Serial CT scans every 6 hours to monitor",
                        "C": "Immediate craniotomy for clot evacuation",
                        "D": "CTA identifies a 7mm AComm aneurysm → secure the aneurysm within 24-72 hours (endovascular coiling preferred in most cases, surgical clipping if anatomy unfavorable) + nimodipine for vasospasm prophylaxis + admit to neurosurgical ICU"
                    },
                    "explanation": "Imaging Guides Definitive Treatment",
                    "text": "CTA identifies aneurysm location, size, and morphology to plan treatment. <strong>Endovascular coiling</strong> is preferred when feasible (ISAT trial showed lower morbidity than clipping for most anterior circulation aneurysms). <strong>Surgical clipping</strong> for wide-necked aneurysms, MCA aneurysms, or aneurysms with significant hematoma requiring evacuation. <strong>Nimodipine 60mg q4h × 21 days</strong> reduces poor outcomes from vasospasm (the leading cause of delayed morbidity after SAH).",
                    "radiopaedia": "https://radiopaedia.org/articles/subarachnoid-haemorrhage-aneurysmal"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "Coil the aneurysm and discharge in 48 hours",
                        "B": "Coil the aneurysm + ICU monitoring for 14 days",
                        "C": "Secure aneurysm (coiling/clipping) + ICU × 14-21 days for vasospasm monitoring (TCDs, clinical exam, CT perfusion if symptomatic) + nimodipine + smoking cessation (critical for preventing new aneurysm formation) + BP control + screen for ADPKD given family history + consider screening MRA for siblings/children",
                        "D": "Observation with follow-up imaging"
                    },
                    "explanation": "Acute Treatment + Lifelong Surveillance",
                    "text": "SAH management extends weeks beyond the acute bleed: vasospasm peaks at days 7-10 and can cause devastating delayed infarction. The epidemiological context drives long-term care: smoking cessation is the single most impactful intervention for preventing new aneurysm formation; BP control prevents growth of any existing unruptured aneurysms; family history warrants genetic counseling and family screening. The imaging finding (SAH + AComm aneurysm) triggered immediate neurosurgical intervention and a lifelong surveillance program."
                }
            },
            {
                "modality": "CT Head → MRI",
                "title": "Epidural vs. Subdural Hematoma",
                "vignette": "Two patients arrive within an hour. <strong>Patient A:</strong> 22-year-old male after being hit in the temporal region with a baseball bat. Brief loss of consciousness, then 'lucid interval,' now rapidly deteriorating with blown left pupil. <strong>Patient B:</strong> 82-year-old woman on warfarin who fell 3 weeks ago, now with progressive confusion, gait instability, and right-sided weakness over 2 weeks.",
                "context": {
                    "question": "What epidemiological differences between these patients explain their dramatically different presentations?",
                    "correct": "C",
                    "options": {
                        "A": "Age is the only difference — head injuries are the same at any age",
                        "B": "Warfarin use is irrelevant to hematoma presentation",
                        "C": "Patient A has a classic epidural hematoma profile: young, temporal bone fracture → middle meningeal artery tear → rapid arterial bleeding. Patient B has a classic subdural hematoma profile: elderly + anticoagulation + brain atrophy (stretches bridging veins) + minor/forgotten trauma → slow venous bleeding over weeks. The epidemiology predicts the hematoma type before imaging",
                        "D": "Both patients likely have the same type of hemorrhage"
                    },
                    "explanation": "Epidemiology Predicts Hematoma Type",
                    "text": "<strong>Epidural hematoma</strong>: young patients (temporal bone is thinnest), trauma with fracture through middle meningeal artery groove, 90% have skull fracture. The classic 'lucid interval' occurs as arterial blood rapidly accumulates between skull and dura. <strong>Subdural hematoma</strong>: elderly (brain atrophy stretches bridging veins), anticoagulation (warfarin, DOACs, antiplatelets), trivial or forgotten trauma, alcohol use disorder (atrophy + falls + coagulopathy). <strong>The fastest-growing demographic for chronic SDH is elderly patients on anticoagulation</strong> — a direct consequence of aging population + widespread DOAC/antiplatelet use.",
                    "pearl": "Epidemiologic Pearl: Child abuse (non-accidental trauma) must be considered in infants with subdural hematoma, retinal hemorrhages, and inconsistent mechanism — this is a medicolegal obligation. In adults >65 on anticoagulation who present with any cognitive change, always consider chronic SDH, even without a remembered fall."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Non-contrast CT head for BOTH patients — fast, available, and the definitive acute imaging modality for intracranial hemorrhage",
                        "B": "MRI for both — better soft tissue resolution",
                        "C": "CT with IV contrast to look for active bleeding",
                        "D": "Skull X-rays for Patient A to check for fracture"
                    },
                    "explanation": "CT Is the Acute Hemorrhage Modality",
                    "text": "Non-contrast CT detects acute blood (hyperdense on CT) with >95% sensitivity. It differentiates epidural from subdural location, identifies mass effect and midline shift, and guides emergent surgical decision-making. MRI is superior for subacute/chronic SDH and for detecting diffuse axonal injury, but CT is faster and more available in emergencies. Skull X-rays are obsolete for trauma workup."
                },
                "expect": {
                    "correct": "D",
                    "options": {
                        "A": "Both show crescent-shaped collections crossing suture lines",
                        "B": "Both show biconvex (lens-shaped) collections",
                        "C": "Patient A: crescent-shaped; Patient B: biconvex",
                        "D": "Patient A: BICONVEX (lens-shaped) hyperdense collection in the temporal region, NOT crossing suture lines, with temporal bone fracture. Patient B: CRESCENT-shaped iso/hypodense collection crossing suture lines, with midline shift disproportionate to collection size due to brain atrophy"
                    },
                    "explanation": "EDH vs SDH: Shape Tells the Story",
                    "text": "<strong>Epidural</strong>: biconvex/lens-shaped because blood is confined between skull and tightly adherent dura (stops at suture lines where dura is firmly attached). Typically temporal location with associated fracture. <strong>Subdural</strong>: crescent-shaped because blood spreads freely in the subdural space (crosses suture lines, stops at falx and tentorium). Chronic SDH may be isodense or hypodense (same density as brain or darker), making it subtle. The 'swirl sign' (mixed density within hematoma) suggests active or recent bleeding."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "Patient A: emergent craniotomy for epidural evacuation (neurosurgical emergency — uncal herniation is imminent with blown pupil). Patient B: reverse anticoagulation (IV vitamin K + 4-factor PCC) + neurosurgical consultation for possible burr hole drainage depending on size and symptoms",
                        "B": "Both patients need emergent craniotomy",
                        "C": "Patient A can be observed; Patient B needs surgery",
                        "D": "Both patients should be managed conservatively with serial imaging"
                    },
                    "explanation": "Imaging Drives Urgency",
                    "text": "Patient A with epidural hematoma + blown pupil = immediate neurosurgical emergency. Mortality approaches 100% without evacuation, but outcomes are excellent if decompressed quickly. Patient B with chronic SDH: (1) reverse anticoagulation immediately, (2) neurosurgical decision depends on hematoma thickness (>10mm or midline shift >5mm typically warrants drainage via burr hole or craniotomy), (3) small chronic SDH may be observed with serial imaging.",
                    "radiopaedia": "https://radiopaedia.org/articles/epidural-haematoma"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "Surgery for both and discharge",
                        "B": "Surgery + restart anticoagulation immediately for Patient B",
                        "C": "Patient A: emergent evacuation → monitor for rebleed → concussion/TBI counseling → helmet safety education. Patient B: reverse anticoagulation → surgical drainage → multidisciplinary decision about resuming anticoagulation (balance SDH recurrence risk vs stroke risk from AFib if applicable) → fall risk assessment → medication reconciliation → elder abuse screening if circumstances concerning",
                        "D": "Medical management for both patients"
                    },
                    "explanation": "Two Different Clinical Trajectories",
                    "text": "The same imaging modality (CT head) reveals two fundamentally different disease processes driven by different epidemiological profiles. Patient A's trajectory is: trauma → rapid arterial bleed → surgical emergency → usually excellent recovery if treated quickly. Patient B's trajectory reflects a geriatric epidemic: anticoagulation + age-related atrophy + falls → chronic subdural → complex decision about anticoagulation resumption. The decision about whether and when to restart anticoagulation after SDH evacuation requires balancing stroke prevention against rebleeding risk — and is one of the most debated topics in neurology/neurosurgery."
                }
            },
            {
                "modality": "CT Head (pre-LP) → MRI",
                "title": "Meningitis — When to Image Before LP",
                "vignette": "A <strong>28-year-old male</strong> college student presents with 2 days of worsening headache, fever (39.6°C), and neck stiffness. His roommate says he has been 'not making sense' for the last few hours. On exam: lethargic, positive Kernig and Brudzinski signs, no focal neurological deficits. No rash. He lives in a dormitory and attended a large gathering last weekend.",
                "context": {
                    "question": "What epidemiological context is critical for both the empiric treatment and public health response?",
                    "correct": "D",
                    "options": {
                        "A": "College dormitory living is irrelevant — meningitis affects all populations equally",
                        "B": "Only children get bacterial meningitis",
                        "C": "The gathering is relevant only for viral meningitis",
                        "D": "College dormitory living + recent crowded gathering = high risk for Neisseria meningitidis (meningococcal meningitis). This is both a clinical emergency AND a public health emergency — close contacts need post-exposure prophylaxis (ciprofloxacin or rifampin). Vaccination status (MenACWY, MenB) must be checked. The most common bacterial causes shift by age group and setting"
                    },
                    "explanation": "Meningitis Epidemiology by Population",
                    "text": "Bacterial meningitis etiology varies by age and setting: <strong>Neonates:</strong> Group B Strep, E. coli, Listeria. <strong>Children 3mo-18yr:</strong> N. meningitidis, S. pneumoniae. <strong>18-50yr:</strong> S. pneumoniae (#1), N. meningitidis (#2). <strong>>50yr:</strong> S. pneumoniae, Listeria (immunosenescence), gram-negative bacilli. <strong>Immunocompromised:</strong> Listeria, Cryptococcus (HIV with CD4 <100), TB meningitis. <strong>Post-neurosurgery/VP shunt:</strong> S. aureus, gram-negatives. The dormitory setting raises meningococcal probability — and triggers public health notification and contact prophylaxis.",
                    "pearl": "Epidemiologic Pearl: Meningococcal outbreaks in college dorms, military barracks, and Hajj pilgrims follow predictable epidemiological patterns driven by close-quarter living. Serogroup B (MenB) is not covered by MenACWY vaccine — some universities now require both. Geographic variation: meningococcal meningitis belt in sub-Saharan Africa has seasonal epidemics during dry season."
                },
                "order": {
                    "correct": "C",
                    "options": {
                        "A": "CT head first, then LP, then antibiotics",
                        "B": "LP immediately without imaging",
                        "C": "Blood cultures + empiric antibiotics + dexamethasone IMMEDIATELY → then CT head (because he has altered mental status, which is an indication for imaging before LP) → LP once CT clears mass effect/herniation risk",
                        "D": "MRI brain first for better meningeal assessment"
                    },
                    "explanation": "Don't Delay Antibiotics for Imaging",
                    "text": "This is one of the most important teaching points in emergency medicine: <strong>NEVER delay antibiotics for imaging in suspected bacterial meningitis.</strong> Indications for CT before LP: (1) altered mental status, (2) immunocompromised, (3) history of CNS disease, (4) new-onset seizure, (5) papilledema, (6) focal neurological deficit. This patient has altered mental status → needs CT before LP. But antibiotics are given BEFORE the CT. Blood cultures should be drawn before antibiotics if it takes <2 minutes; otherwise, start antibiotics first."
                },
                "expect": {
                    "correct": "A",
                    "options": {
                        "A": "CT is likely NORMAL in uncomplicated bacterial meningitis — the purpose is to exclude mass effect that would make LP dangerous, not to diagnose meningitis",
                        "B": "Diffuse meningeal enhancement",
                        "C": "Hydrocephalus",
                        "D": "Brain abscess"
                    },
                    "explanation": "CT Is Often Normal in Meningitis",
                    "text": "CT in bacterial meningitis is usually normal or shows only subtle findings (cerebral edema, leptomeningeal enhancement with contrast). Its PURPOSE is not to diagnose meningitis but to rule out contraindications to LP (mass lesion, midline shift, obstructive hydrocephalus). If CT is normal → safe to proceed with LP. <strong>MRI with gadolinium</strong> is much more sensitive for meningeal inflammation and complications (ventriculitis, subdural empyema, cerebral infarction from vasculitis) but is obtained later, not as the initial imaging."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "Normal CT means meningitis is ruled out — discharge with oral antibiotics",
                        "B": "Normal CT = safe to perform LP → CSF analysis (cell count, protein, glucose, Gram stain, culture, PCR panels) will provide the diagnosis. Continue empiric antibiotics + dexamethasone until culture results return",
                        "C": "Repeat CT in 24 hours before deciding on LP",
                        "D": "The CT excluded meningitis so antibiotics can be stopped"
                    },
                    "explanation": "CT Clears for LP — LP Makes the Diagnosis",
                    "text": "The imaging role in meningitis is permissive (allows LP to be safely performed), not diagnostic. LP findings in bacterial meningitis: WBC >1000 (neutrophil predominant), protein >250 mg/dL, glucose <40 mg/dL (or CSF/serum ratio <0.4), positive Gram stain in ~60-90%. Empiric therapy: <strong>ceftriaxone + vancomycin + dexamethasone</strong> (dex before or with first antibiotic dose reduces mortality in pneumococcal meningitis). Add <strong>ampicillin</strong> if Listeria risk (neonates, elderly, immunocompromised, pregnancy).",
                    "radiopaedia": "https://radiopaedia.org/articles/meningitis"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Complete antibiotics and discharge",
                        "B": "Treat and notify only the roommate",
                        "C": "Wait for cultures before notifying public health",
                        "D": "Continue empiric antibiotics + dexamethasone → narrow based on CSF culture → notify public health department IMMEDIATELY for possible meningococcal disease → identify close contacts (roommates, intimate contacts, anyone sharing utensils) for post-exposure prophylaxis (ciprofloxacin 500mg × 1 or rifampin × 2 days) → verify university vaccination status → consider MRI if not improving to assess for complications"
                    },
                    "explanation": "Clinical + Public Health Response",
                    "text": "Meningitis management uniquely combines acute clinical care with public health response. The epidemiological context (college dormitory) amplifies the public health urgency. Close contacts of meningococcal cases have a 500-800× increased risk of disease in the following days. Post-exposure prophylaxis must begin within 24 hours of case identification. The imaging (CT clearing for LP) triggered the diagnostic cascade, which triggers both treatment and a public health intervention."
                }
            },
            {
                "modality": "CT Head → MRI → LP",
                "title": "Headache with Red Flags — Pseudotumor Cerebri",
                "vignette": "A <strong>26-year-old woman</strong> with BMI 38 presents with 6 weeks of progressive daily headaches, worse in the morning and with Valsalva maneuvers. She reports transient visual obscurations (brief 'graying out' of vision lasting seconds) and pulsatile tinnitus. On exam: <strong>bilateral papilledema</strong> on fundoscopy. Visual acuity is mildly reduced. She recently started oral contraceptives and tetracycline for acne.",
                "context": {
                    "question": "What epidemiological and medication exposure factors make idiopathic intracranial hypertension (IIH) the leading diagnosis?",
                    "correct": "D",
                    "options": {
                        "A": "Headache is common in young women — no special workup is needed",
                        "B": "Papilledema always indicates a brain tumor",
                        "C": "Obesity is the only risk factor for IIH",
                        "D": "IIH has a classic demographic profile: young, obese, female. Two of her medications are known triggers: tetracyclines (minocycline, doxycycline) and oral contraceptives are both associated with IIH. Weight gain itself is a risk factor. Vitamin A excess (isotretinoin, high-dose supplements) and growth hormone therapy are other medication triggers"
                    },
                    "explanation": "IIH Risk Factor Profile",
                    "text": "IIH (pseudotumor cerebri) has one of the most specific demographic profiles in neurology: <strong>90% are women of childbearing age</strong>, and <strong>obesity (BMI >30)</strong> is present in >90% of cases. The incidence increases with BMI: 19/100,000 in women with BMI >40 vs 1/100,000 in general population. <strong>Medication triggers</strong> are critical to identify because drug cessation may be curative: tetracycline antibiotics, oral contraceptives, retinoids (vitamin A, isotretinoin), corticosteroid withdrawal, lithium, and growth hormone. Recent weight gain of even 5-10% can precipitate IIH.",
                    "pearl": "Epidemiologic Pearl: IIH incidence is rising in parallel with the obesity epidemic. In men or atypical demographics presenting with elevated ICP, consider cerebral venous sinus thrombosis (MRV required to rule out) before diagnosing IIH — the treatment is completely different (anticoagulation vs acetazolamide)."
                },
                "order": {
                    "correct": "C",
                    "options": {
                        "A": "Lumbar puncture first — measure opening pressure",
                        "B": "MRI only — CT adds nothing",
                        "C": "CT or MRI first (to exclude mass lesion and venous sinus thrombosis) → then LP to measure opening pressure and analyze CSF",
                        "D": "Visual field testing only"
                    },
                    "explanation": "Image BEFORE LP in Papilledema",
                    "text": "Papilledema means elevated intracranial pressure — you must exclude a mass lesion or hydrocephalus before LP. <strong>MRI with MRV</strong> is preferred: it rules out mass, evaluates for empty sella and enlarged optic nerve sheaths (IIH signs), and critically excludes cerebral venous sinus thrombosis (which mimics IIH). If MRI is unavailable, CT with CT venography is acceptable. After imaging clears structural cause → LP with opening pressure measurement (>25 cmH₂O in lateral decubitus = elevated)."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Large posterior fossa tumor with hydrocephalus",
                        "B": "MRI shows empty sella, enlarged optic nerve sheaths with tortuous optic nerves, flattened posterior sclera, and PATENT cerebral venous sinuses (ruling out venous thrombosis) — all consistent with IIH",
                        "C": "MRI shows complete transverse sinus thrombosis",
                        "D": "Normal MRI with normal MRV"
                    },
                    "explanation": "IIH Imaging Signs",
                    "text": "MRI findings in IIH (none are required for diagnosis, but they increase confidence): (1) <strong>empty sella</strong> (CSF pressure compresses pituitary), (2) <strong>enlarged optic nerve sheaths</strong> (perioptic CSF distension), (3) <strong>flattened posterior sclera</strong>, (4) <strong>tortuous optic nerves</strong>, (5) <strong>bilateral transverse sinus stenosis</strong> (common in IIH, but don't confuse with thrombosis). The CRITICAL MRV finding: sinuses are patent (no thrombosis). If thrombosed → completely different treatment."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Start IV mannitol for acute ICP reduction",
                        "B": "The imaging alone confirms IIH — LP is not needed",
                        "C": "MRI/MRV excludes structural/vascular cause → LP with opening pressure confirms elevated ICP (>25 cmH₂O) + CSF composition is normal (required for IIH diagnosis) → treatment is acetazolamide + weight loss + stop offending medications (tetracycline, OCPs)",
                        "D": "Refer to neurosurgery for VP shunt placement"
                    },
                    "explanation": "LP Confirms + Initiates Treatment",
                    "text": "IIH diagnosis requires: (1) papilledema, (2) normal neurological exam except CN6 palsy (falsely localizing), (3) normal brain imaging, (4) opening pressure >25 cmH₂O, (5) normal CSF composition. Treatment: <strong>acetazolamide</strong> (reduces CSF production), <strong>weight loss</strong> (5-10% weight reduction can be curative — the most effective long-term intervention), <strong>stop offending medications</strong>. LP with large-volume CSF removal provides immediate symptomatic relief. VP shunt or optic nerve sheath fenestration reserved for refractory cases with progressive vision loss.",
                    "radiopaedia": "https://radiopaedia.org/articles/idiopathic-intracranial-hypertension"
                },
                "integrate": {
                    "correct": "B",
                    "options": {
                        "A": "Acetazolamide only and follow up in 6 months",
                        "B": "Stop tetracycline and OCPs (discuss alternative acne treatment and contraception) + start acetazolamide + formal ophthalmology follow-up with serial visual fields (to monitor for vision-threatening progression) + structured weight loss program (dietitian, consider GLP-1 agonist if eligible) + consider alternative contraception (IUD)",
                        "C": "VP shunt placement",
                        "D": "Optic nerve sheath fenestration immediately"
                    },
                    "explanation": "Medication Exposures Drive the Cure",
                    "text": "This case beautifully demonstrates how epidemiology and exposure history drive treatment. The imaging ruled out structural causes, LP confirmed the diagnosis, but the TREATMENT is fundamentally about modifying the risk factors: stopping causative medications and achieving weight loss. The ophthalmology follow-up is critical — IIH's most feared complication is progressive visual loss from chronic papilledema, which can lead to irreversible optic atrophy. Serial visual field testing (every 1-3 months initially) detects deterioration before irreversible damage occurs."
                }
            },
            {
                "modality": "CT Head → MRI",
                "title": "New-Onset Seizure in an Immigrant Patient",
                "vignette": "A <strong>34-year-old male</strong> from rural Mexico presents after a witnessed generalized tonic-clonic seizure. No prior seizure history. He is postictal and slowly recovering. No fever. He works as a farm laborer and has been in the US for 2 years. Family reports occasional headaches for the past few months. He has no access to regular healthcare.",
                "context": {
                    "question": "What epidemiological factors dramatically change the differential for new-onset seizures in this patient?",
                    "correct": "C",
                    "options": {
                        "A": "New-onset seizures in adults always mean brain tumor",
                        "B": "His immigration status is irrelevant to the medical workup",
                        "C": "Rural Mexico + farm work = high pre-test probability for neurocysticercosis (NCC), the most common cause of new-onset seizures in adults worldwide and the leading parasitic CNS infection in the US. Taenia solium infection from fecal-oral transmission (not from eating pork) causes parenchymal brain cysts that present as seizures",
                        "D": "Alcohol withdrawal is the most likely cause"
                    },
                    "explanation": "Geography Transforms the Seizure Differential",
                    "text": "Neurocysticercosis (NCC) is the most common cause of acquired epilepsy in Latin America, sub-Saharan Africa, and Southeast Asia. In the US, NCC is most prevalent in immigrants from endemic areas, particularly rural Mexico and Central America. <strong>Critical epidemiological nuance:</strong> NCC is acquired through fecal-oral transmission of T. solium eggs (from a human tapeworm carrier), NOT from eating undercooked pork (which causes intestinal taeniasis, not cysticercosis). This means a household contact who is a tapeworm carrier can transmit NCC to others — including US-born individuals. <strong>Screening household contacts for intestinal taeniasis is a public health intervention.</strong>",
                    "pearl": "Epidemiologic Pearl: Any immigrant from Latin America, sub-Saharan Africa, India, or Southeast Asia presenting with new-onset seizures should have NCC on the differential. In the US, NCC is estimated to cause 10-20% of seizure-related ED visits in areas with large immigrant populations (Southern California, Texas, Florida). Farm workers may also have co-infections: Chagas disease, hookworm, Strongyloides."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "CT head first (fast, available in ED) → MRI brain for definitive characterization → serology (cysticercosis antibodies)",
                        "B": "MRI only — CT cannot detect cysticercosis",
                        "C": "EEG as the most important initial test",
                        "D": "Lumbar puncture immediately"
                    },
                    "explanation": "CT → MRI Imaging Sequence",
                    "text": "CT head is the initial ED imaging for new-onset seizures — it detects calcified granulomas (dead cysts), hydrocephalus, and acute complications. <strong>MRI is essential for definitive NCC diagnosis</strong> — it shows cyst stages with exquisite detail (vesicular cysts with scolex, colloidal/degenerating cysts, calcified remnants) and detects intraventricular cysts that CT misses. <strong>Cysticercosis serology</strong> (enzyme-linked immunoelectrotransfer blot, EITB) has ~98% specificity but sensitivity varies by cyst burden (may be negative with single cyst)."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal CT and MRI — must be idiopathic epilepsy",
                        "B": "Large enhancing mass with surrounding edema (tumor)",
                        "C": "CT: scattered calcified lesions ± ring-enhancing lesion. MRI: multiple cysts in various stages — some with visible scolex ('hole-with-a-dot' sign), some with ring enhancement (degenerating), some calcified. This mixed-stage pattern is classic NCC",
                        "D": "Temporal lobe mesial sclerosis"
                    },
                    "explanation": "NCC Imaging Stages",
                    "text": "NCC has four MRI stages that often coexist: (1) <strong>Vesicular</strong>: well-defined cyst with clear fluid and visible scolex (eccentric nodule = 'hole-with-a-dot') — minimal surrounding edema, may not cause seizures. (2) <strong>Colloidal</strong>: cyst contents become turbid, ring enhancement, surrounding edema — this stage causes seizures and inflammation. (3) <strong>Granular-nodular</strong>: retracting cyst with thick wall, decreasing edema. (4) <strong>Calcified</strong>: small calcified granuloma (may continue to cause seizures)."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "Start anti-parasitic treatment immediately",
                        "B": "Start anti-epileptic medication (levetiracetam or carbamazepine) FIRST for seizure control → then evaluate cyst burden, location (parenchymal vs intraventricular vs subarachnoid), and stage on MRI to determine if antiparasitic therapy (albendazole ± praziquantel) is appropriate. Give corticosteroids (dexamethasone) BEFORE antiparasitics to prevent inflammatory worsening",
                        "C": "Surgical removal of all cysts",
                        "D": "Antiepileptic medication alone — no anti-parasitic treatment needed"
                    },
                    "explanation": "Treatment Depends on Imaging Stage",
                    "text": "NCC treatment is nuanced and imaging-guided: <strong>Active/viable cysts</strong>: antiparasitic therapy (albendazole 15mg/kg/day × 10-14 days ± praziquantel) + corticosteroids (started 1-2 days before antiparasitics to prevent cyst-death inflammatory flare). <strong>Single enhancing lesion</strong>: may be treated with AEDs alone or AEDs + antiparasitics. <strong>Calcified only</strong>: AEDs only (cysts are dead, antiparasitics won't help). <strong>Intraventricular cysts</strong>: may require endoscopic removal (risk of hydrocephalus). <strong>Subarachnoid (racemose)</strong>: most dangerous form, requires prolonged antiparasitic + anti-inflammatory therapy.",
                    "radiopaedia": "https://radiopaedia.org/articles/neurocysticercosis"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Treat with albendazole and discharge",
                        "B": "Antiepileptics only — the cysts will calcify on their own",
                        "C": "Refer to neurosurgery for cyst removal",
                        "D": "AED for seizure control + albendazole + dexamethasone (tapered) + screen household contacts for intestinal T. solium (stool ova & parasites) as a public health measure + treat any carrier to prevent ongoing transmission + connect to community health center for ongoing care + follow-up MRI in 6 months to assess treatment response"
                    },
                    "explanation": "Clinical + Public Health Integration",
                    "text": "Like meningitis, NCC management bridges clinical care and public health. The imaging identified the cause, but the complete plan addresses: acute seizure control, targeted antiparasitic therapy guided by cyst stage and location, household contact screening (tapeworm carriers perpetuate the cycle of transmission), and connection to healthcare for a patient who has had no regular medical care. The epidemiological context (rural Mexico, farm labor, no healthcare access) drove the differential, and addressing those same social factors is essential for preventing reinfection and ensuring treatment completion."
                }
            }
        ],
        "cross_links": [
            ("🫁 Chest Imaging", "raddx-chest.html", "Pneumonia, PE, pneumothorax"),
            ("❤️ Cardiac Imaging", "raddx-cardiac.html", "ECG, echo, angiography"),
            ("🩻 Abdominal Imaging", "raddx-abdominal.html", "CT abdomen, US, HIDA"),
            ("← RadDx Hub", "raddx-hub.html", "All body systems"),
        ],
        "references": [
            ("Ischemic Stroke — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK499997/"),
            ("AHA/ASA Acute Ischemic Stroke Guidelines 2019", "https://doi.org/10.1161/STR.0000000000000211"),
            ("Subarachnoid Hemorrhage — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK441958/"),
            ("AAN Meningitis Practice Parameter", "https://doi.org/10.1212/01.wnl.0000145580.59610.c3"),
            ("Neurocysticercosis Management — IDSA/ASTMH Guidelines", "https://doi.org/10.1093/cid/cix585"),
            ("Radiopaedia.org — Open-access radiology reference", "https://radiopaedia.org"),
        ]
    }
}

# ============================================================
# HTML GENERATOR
# ============================================================

def generate_module(key, data):
    """Generate a complete RadDx module HTML file."""

    scenarios_html = ""
    for i, s in enumerate(data["scenarios"], 1):
        # Build each step
        def make_choices(step_data, correct_key="correct"):
            opts = step_data.get("options", {})
            correct = step_data.get(correct_key, step_data.get("correct", "A"))
            html = f'<div class="choices" data-correct="{correct}">'
            for letter, text in opts.items():
                html += f'<div class="choice" onclick="selectChoice(this,\'{letter}\')"><span class="choice-letter">{letter}.</span><span>{text}</span></div>'
            html += '</div>'
            return html

        def make_explanation(step_data, include_pearl=True, include_radiopaedia=False):
            html = '<div class="explanation">'
            html += f'<h5>{step_data.get("explanation", "Explanation")}</h5>'
            html += f'<p>{step_data.get("text", "")}</p>'
            if include_pearl and "pearl" in step_data:
                html += f'<div class="pearl"><strong>🌍 {step_data["pearl"].split(":")[0]}:</strong> {"".join(step_data["pearl"].split(":")[1:])}</div>'
            if include_radiopaedia and "radiopaedia" in step_data:
                html += f'<a href="{step_data["radiopaedia"]}" target="_blank" rel="noopener" class="radiopaedia-link">📚 Explore on Radiopaedia →</a>'
            html += '</div>'
            return html

        scenario_html = f'''
<!-- SCENARIO {i}: {s["title"].upper()} -->
<div class="scenario"><div class="scenario-header"><span class="scenario-modality">{s["modality"]}</span><span class="scenario-title">{s["title"]}</span></div>
<div class="scenario-body">
<div class="vignette"><div class="vignette-label">Clinical Vignette</div>{s["vignette"]}</div>
<div class="reasoning-steps">

<!-- STEP 0: CONTEXT -->
<div class="reasoning-step step-0"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">🌍</span><span>Epidemiological Context</span><span class="step-arrow">▾</span></button>
<div class="step-content">
{make_choices(s["context"])}
{make_explanation(s["context"])}
</div></div>

<!-- STEP 1: ORDER -->
<div class="reasoning-step step-1"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">1</span><span>What imaging would you order?</span><span class="step-arrow">▾</span></button>
<div class="step-content">
{make_choices(s["order"])}
{make_explanation(s["order"])}
</div></div>

<!-- STEP 2: EXPECT -->
<div class="reasoning-step step-2"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">2</span><span>What findings do you expect?</span><span class="step-arrow">▾</span></button>
<div class="step-content">
{make_choices(s["expect"])}
{make_explanation(s["expect"], include_pearl=False)}
</div></div>

<!-- STEP 3: INTERPRET -->
<div class="reasoning-step step-3"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">3</span><span>How do you interpret these findings?</span><span class="step-arrow">▾</span></button>
<div class="step-content">
{make_choices(s["interpret"])}
{make_explanation(s["interpret"], include_pearl="pearl" in s["interpret"], include_radiopaedia=True)}
</div></div>

<!-- STEP 4: INTEGRATE -->
<div class="reasoning-step step-4"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">4</span><span>How does this change your management?</span><span class="step-arrow">▾</span></button>
<div class="step-content">
{make_choices(s["integrate"])}
{make_explanation(s["integrate"], include_pearl=False, include_radiopaedia="radiopaedia" in s["integrate"])}
</div></div>

</div></div></div>'''
        scenarios_html += scenario_html

    # Cross-links
    cross_html = '<div style="margin-top:32px"><h3 style="font-size:1rem;color:var(--rdx-teal);margin-bottom:12px">Related RadDx Modules</h3>\n<div class="cross-links">'
    for title, href, desc in data["cross_links"]:
        cross_html += f'<a href="{href}" class="cross-link"><div class="cross-link-title">{title}</div><div class="cross-link-desc">{desc}</div></a>'
    cross_html += '</div></div>'

    # References
    refs_html = '<div style="margin-top:32px;padding-top:20px;border-top:1px solid var(--rdx-border)"><h4 style="font-size:.85rem;color:var(--rdx-text-muted);margin-bottom:8px">References</h4>\n<ol style="font-size:.8rem;color:var(--rdx-text-muted);padding-left:18px;line-height:1.8">'
    for title, url in data["references"]:
        refs_html += f'<li><a href="{url}" target="_blank">{title}</a></li>'
    refs_html += '</ol></div>'

    html = f'''<!DOCTYPE html>
<html data-theme="light" lang="en">
<head>
<script>(function(){{var K="reasondx-user";function g(){{var d=(location.pathname.match(/\\//g)||[]).length-1,p="";for(var i=0;i<d;i++)p+="../";return p+"auth/login.html"}}function a(){{try{{var u=localStorage.getItem(K);if(u){{var j=JSON.parse(u);return j&&j.email&&j.name}}}}catch(e){{}}return false}}if(!a()){{sessionStorage.setItem("reasondx-redirect",location.href);location.replace(g())}}}})();</script>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>RadDx: {data["title"]} | ReasonDx</title>
<link rel="stylesheet" href="../css/rdx-theme.css">
<style>
body{{font-family:'DM Sans',sans-serif;background:var(--rdx-bg);color:var(--rdx-text);line-height:1.7}}
.header{{background:linear-gradient(135deg,#0f766e,#0d9488);padding:12px 20px;position:sticky;top:56px;z-index:100}}
.header-row{{display:flex;justify-content:space-between;align-items:center;max-width:900px;margin:0 auto}}
.header-title{{font-size:1.1rem;font-weight:600;color:#fff}}
.badge{{background:rgba(255,255,255,.2);padding:3px 10px;border-radius:4px;font-size:.7rem;margin-left:10px;color:#fff}}
.main{{max-width:900px;margin:0 auto;padding:24px}}
.framework-intro{{background:linear-gradient(135deg,rgba(217,119,6,.08),rgba(245,158,11,.08));border:1px solid rgba(217,119,6,.2);border-radius:16px;padding:24px;margin-bottom:28px}}
.framework-intro h3{{font-size:1rem;color:#92400e;margin-bottom:8px}}
.framework-intro p{{font-size:.9rem;color:var(--rdx-text);margin:0}}
.framework-steps{{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}}
.framework-step{{padding:6px 14px;border-radius:20px;font-size:.8rem;font-weight:600;color:#fff}}
.framework-step.ctx{{background:#d97706}}.framework-step.ord{{background:#0d9488}}.framework-step.exp{{background:#0891b2}}.framework-step.int{{background:#7c3aed}}.framework-step.mgmt{{background:#dc2626}}
.scenario{{background:var(--rdx-bg-card);border:1px solid var(--rdx-border);border-radius:16px;margin-bottom:28px;overflow:hidden}}
.scenario-header{{padding:20px 24px;border-bottom:1px solid var(--rdx-border);display:flex;align-items:center;gap:12px}}
.scenario-modality{{background:var(--rdx-teal-50);color:var(--rdx-teal-dark);font-size:.75rem;font-weight:700;padding:4px 10px;border-radius:6px;text-transform:uppercase;letter-spacing:.5px}}
.scenario-title{{font-size:1.2rem;font-weight:700}}
.scenario-body{{padding:24px}}
.vignette{{background:var(--rdx-bg-hover);border-left:4px solid var(--rdx-teal);padding:16px 20px;border-radius:0 12px 12px 0;margin-bottom:20px;font-size:.95rem}}
.vignette-label{{font-size:.75rem;font-weight:700;color:var(--rdx-teal);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}}
.reasoning-steps{{display:flex;flex-direction:column;gap:16px}}
.reasoning-step{{border:1px solid var(--rdx-border);border-radius:12px;overflow:hidden}}
.step-trigger{{width:100%;display:flex;align-items:center;gap:12px;padding:14px 20px;background:var(--rdx-bg-card);border:none;cursor:pointer;font-family:inherit;font-size:.95rem;font-weight:600;color:var(--rdx-text);text-align:left;transition:background .15s}}
.step-trigger:hover{{background:var(--rdx-teal-50)}}
.step-num-badge{{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;color:#fff;flex-shrink:0}}
.step-0 .step-num-badge{{background:#d97706;font-size:1rem}}.step-1 .step-num-badge{{background:#0d9488}}.step-2 .step-num-badge{{background:#0891b2}}.step-3 .step-num-badge{{background:#7c3aed}}.step-4 .step-num-badge{{background:#dc2626}}
.step-arrow{{margin-left:auto;font-size:1.2rem;color:var(--rdx-text-muted);transition:transform .2s}}
.step-trigger[aria-expanded="true"] .step-arrow{{transform:rotate(180deg)}}
.step-content{{padding:0 20px 20px;display:none}}.step-content.open{{display:block}}
.choices{{display:grid;gap:10px;margin:12px 0}}
.choice{{background:var(--rdx-bg-card);border:2px solid var(--rdx-border);padding:12px 16px;border-radius:10px;cursor:pointer;display:flex;align-items:flex-start;gap:10px;transition:all .2s;font-size:.9rem}}
.choice:hover{{border-color:var(--rdx-teal);transform:translateX(3px)}}
.choice.correct{{border-color:var(--rdx-success);background:rgba(34,197,94,.08);pointer-events:none}}
.choice.wrong{{border-color:var(--rdx-danger);background:rgba(239,68,68,.08);pointer-events:none}}
.choice-letter{{font-weight:700;min-width:20px;color:var(--rdx-teal)}}
.explanation{{background:var(--rdx-teal-50);border:1px solid var(--rdx-teal);border-radius:10px;padding:16px;margin-top:12px;font-size:.9rem;display:none}}.explanation.show{{display:block}}
.explanation h5{{color:var(--rdx-teal-dark);margin-bottom:6px;font-size:.85rem;text-transform:uppercase;letter-spacing:.5px}}
.pearl{{background:linear-gradient(135deg,rgba(217,119,6,.1),rgba(245,158,11,.1));border-left:4px solid #d97706;padding:14px 16px;border-radius:0 10px 10px 0;margin:12px 0;font-size:.9rem}}
.pearl strong{{color:#92400e}}
.danger-box{{background:linear-gradient(135deg,rgba(220,38,38,.08),rgba(239,68,68,.08));border-left:4px solid var(--rdx-danger);padding:14px 16px;border-radius:0 10px 10px 0;margin:12px 0;font-size:.9rem}}
.danger-box strong{{color:var(--rdx-danger)}}
.radiopaedia-link{{display:inline-flex;align-items:center;gap:8px;background:var(--rdx-bg-hover);border:1px solid var(--rdx-border);border-radius:8px;padding:10px 16px;margin-top:16px;text-decoration:none;color:var(--rdx-teal);font-size:.85rem;font-weight:600;transition:all .15s}}
.radiopaedia-link:hover{{border-color:var(--rdx-teal);background:var(--rdx-teal-50)}}
.cross-links{{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:24px}}
.cross-link{{padding:14px;background:var(--rdx-teal-50);border:1px solid var(--rdx-border);border-radius:10px;text-decoration:none;color:var(--rdx-text);transition:all .15s}}
.cross-link:hover{{border-color:var(--rdx-teal)}}
.cross-link-title{{font-weight:600;font-size:.9rem}}.cross-link-desc{{font-size:.8rem;color:var(--rdx-text-muted);margin-top:2px}}
@media(max-width:640px){{.main{{padding:16px}}.scenario-body{{padding:16px}}.vignette{{padding:12px 14px}}.framework-steps{{gap:4px}}.framework-step{{font-size:.7rem;padding:4px 10px}}}}
</style>
</head>
<body>

<div class="header"><div class="header-row"><div class="header-title">{data["icon"]} RadDx: {data["title"]}<span class="badge">{data["badge"]}</span></div></div></div>
<div class="main">

<!-- FRAMEWORK INTRODUCTION -->
<div class="framework-intro">
<h3>5-Step Imaging Reasoning Framework</h3>
<p>Each scenario uses a structured approach that begins with epidemiological context before imaging decisions. This reflects real clinical practice — knowing <em>who</em> the patient is changes <em>what</em> you look for.</p>
<div class="framework-steps">
<span class="framework-step ctx">🌍 Context</span>
<span class="framework-step ord">1. Order</span>
<span class="framework-step exp">2. Expect</span>
<span class="framework-step int">3. Interpret</span>
<span class="framework-step mgmt">4. Integrate</span>
</div>
</div>

{scenarios_html}

{cross_html}
{refs_html}
</div>

<script>
function toggleStep(btn){{const e=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',!e);btn.nextElementSibling.classList.toggle('open')}}
function selectChoice(el,letter){{const c=el.closest('.choices'),correct=c.dataset.correct;c.querySelectorAll('.choice').forEach(ch=>{{ch.style.pointerEvents='none';const l=ch.querySelector('.choice-letter').textContent.trim().replace('.','');if(l===correct)ch.classList.add('correct');else if(ch===el&&l!==correct)ch.classList.add('wrong')}});const ex=c.nextElementSibling;if(ex&&ex.classList.contains('explanation'))ex.classList.add('show')}}
</script>
<script src="../js/rdx-nav.js" defer></script>
</body></html>'''

    return html


# ============================================================
# GENERATE ALL MODULES
# ============================================================

import os
for key, data in MODULES.items():
    html = generate_module(key, data)
    filepath = f"modules/raddx-{key}.html"
    with open(filepath, 'w') as f:
        f.write(html)
    print(f"Generated {filepath} ({len(html):,} bytes, {len(data['scenarios'])} scenarios)")

print("\nDone! 3 RadDx body system modules generated with 5-step CONTEXT→ORDER→EXPECT→INTERPRET→INTEGRATE framework.")
