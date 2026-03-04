/* js/crt-ai-crossspecialty.js — A/I Cross-Specialty CRT Scenarios
 * High-yield fellowship content at the intersection of A/I with
 * dermatology, pulmonary, GI, infectious disease, and rheumatology.
 */
(function(){
'use strict';

window.CRT_AI_CROSS = [

  // ═══ DERM × A/I ═══
  {
    id:'sjs-ten-dress',
    title:'Drug Hypersensitivity — SJS/TEN vs DRESS vs AGEP',
    category:'Derm × A/I',
    tier:3,
    acuity:'emergent',
    setting:'Inpatient',
    milestones:['PC1','PC3','MK1','MK2'],
    patient:{
      name:'Danielle Okonkwo',age:'34F',
      vitals:{HR:102,RR:18,SpO2:97,Temp:'39.2°C',BP:'118/72'},
      cc:'Diffuse rash, mouth sores, eye pain × 3 days. Started allopurinol 4 weeks ago.'
    },
    stages:[
      {
        phase:'Presentation',
        narrative:'34-year-old woman started on allopurinol for hyperuricemia 4 weeks ago. Three days ago developed malaise, fever, and sore throat. Now has painful erosions on lips and buccal mucosa, bilateral conjunctival injection with purulent discharge, and dusky erythematous macules with central blistering on the trunk and proximal extremities. Nikolsky sign positive over several lesions. BSA involvement estimated at 12%. She is Black — relevant because HLA-B*5801 prevalence is higher in this population.',
        question:'What is the most likely diagnosis, and what differentiates it from the other severe cutaneous adverse reactions?',
        keyPoints:[
          'SJS (BSA <10%) vs SJS-TEN overlap (10-30%) vs TEN (>30%). This patient at 12% = SJS-TEN overlap',
          'Key features: mucosal involvement (≥2 sites), targetoid lesions with necrosis, positive Nikolsky, prodrome 1-3 weeks after drug initiation',
          'DRESS: different timeline (2-8 weeks), facial edema, eosinophilia, organ involvement (liver, kidney), NO epidermal necrosis',
          'AGEP: acute (within 48h of drug), hundreds of small sterile pustules on erythematous base, fever, neutrophilia, resolves quickly after drug withdrawal',
          'Allopurinol is the #1 cause of SJS/TEN in many populations. HLA-B*5801 testing should have been done BEFORE starting allopurinol in Black and Southeast Asian patients (FDA recommendation)',
          'SCORTEN score for prognosis: age, malignancy, BSA, tachycardia, BUN, glucose, bicarb'
        ]
      },
      {
        phase:'Workup',
        narrative:'You STOP allopurinol immediately. Labs: WBC 11.2 (no eosinophilia), Cr 0.9, hepatic panel normal, CRP 84. Skin biopsy shows full-thickness epidermal necrosis. Ophthalmology is consulted and finds pseudomembrane formation. SCORTEN = 2 (predicted mortality ~12%).',
        question:'How do you manage SJS-TEN? What does the evidence say about systemic therapy?',
        keyPoints:[
          'IMMEDIATE: Stop the offending drug (every day of delay increases mortality 3%)',
          'Supportive care is the MAINSTAY: burn unit or ICU, wound care, fluid/electrolyte management, pain control, nutrition',
          'Ophthalmology: URGENT — must debride pseudomembranes daily, topical steroids, prevent symblepharon (scarring = blindness)',
          'Systemic therapy: controversial. Cyclosporine (3-5 mg/kg/day for 10 days) has the best recent evidence for reducing mortality and progression. IVIG data is mixed. Systemic corticosteroids: debated — may help early but risk infection',
          'Do NOT rechallenge with allopurinol or cross-reactive drugs. Consider febuxostat as alternative (different structure)',
          'Long-term sequelae: ocular scarring (67%), skin pigmentation changes, vaginal/urethral strictures, PTSD'
        ]
      },
      {
        phase:'Pivot',
        narrative:'On day 3, her BSA involvement extends to 25%. New erosions appear on the vulvar mucosa. Temperature spikes to 40.1°C. Blood cultures are pending. She becomes increasingly anxious and asks if she is going to die.',
        question:'BSA is progressing. How do you address both the medical escalation and the patient\'s emotional state?',
        keyPoints:[
          'BSA progression = worse prognosis. Recalculate SCORTEN. Consider transfer to burn center if not already there',
          'Fever in SJS/TEN: always from the disease itself, but ALSO must rule out secondary infection (most common cause of death). Blood cultures, wound cultures, avoid prophylactic antibiotics (promote resistance)',
          'Initiate or escalate cyclosporine if not already on it. Some centers use etanercept based on emerging evidence',
          'Emotional support: be honest but compassionate. "This is serious, and I understand how frightening it is. We are doing everything we can." Involve palliative care for symptom management, social work, psychiatry for acute trauma response',
          'Vulvar/urethral involvement: Foley catheter to prevent adhesions, GYN consult, urethral stenting if needed',
          'Document drug allergy prominently in ALL records. Patient should carry a medical alert card/bracelet'
        ]
      },
      {
        phase:'Resolution',
        narrative:'With cyclosporine, wound care, and supportive management, re-epithelialization begins at day 8. BSA stabilizes at 28%. She is discharged at day 18 with ophthalmology follow-up (moderate corneal involvement), dermatology follow-up, and psychology referral.',
        question:'What is the outpatient plan, and how do you approach drug allergy documentation and prevention?',
        keyPoints:[
          'Drug allergy documentation: allopurinol → SJS/TEN, entered in ALL medical record systems, patient carries wallet card',
          'HLA-B*5801 testing now for the record — positive result also means her first-degree relatives should be tested before prescribing allopurinol',
          'Cross-reactivity: avoid all oxypurinol-related drugs. Febuxostat (different class) is generally safe',
          'Ophthalmology follow-up is CRITICAL: chronic dry eye, corneal scarring, symblepharon — may need long-term topical therapy or surgery',
          'Dermatology: monitor for post-inflammatory hyperpigmentation (especially in darker skin), nail dystrophy',
          'Psychology/psychiatry: SJS/TEN survivors have high rates of PTSD, depression, and anxiety. Proactive mental health support',
          'Genetic counseling: HLA-B*5801 is a pharmacogenomic marker. Family screening before any purine analogs'
        ]
      }
    ],
    teaching:'SJS/TEN key teaching: (1) SCORTEN predicts mortality — calculate on admission and day 3. (2) Allopurinol is the most common cause; HLA-B*5801 testing should be standard of care in high-risk populations BEFORE prescribing (Black, Southeast Asian, Korean). (3) Stop the drug IMMEDIATELY — every day matters. (4) Ophthalmology is the most common cause of long-term morbidity — consult urgently, daily exams. (5) Cyclosporine has the best emerging evidence for reducing progression. (6) This is a medical emergency with ~25% mortality for TEN. Burn unit care saves lives.'
  },

  {
    id:'chronic-urticaria-angioedema',
    title:'Chronic Urticaria & Angioedema — Classification and Stepwise Management',
    category:'Derm × A/I',
    tier:2,
    acuity:'outpatient',
    setting:'Clinic',
    milestones:['PC1','PC4','MK2','ICS1'],
    patient:{
      name:'Patricia Kowalski',age:'42F',
      vitals:{HR:78,RR:14,SpO2:99,Temp:'36.8°C',BP:'124/78'},
      cc:'Recurrent hives and lip swelling × 4 months. Daily antihistamines "not working."'
    },
    stages:[
      {
        phase:'Presentation',
        narrative:'42-year-old woman with 4 months of nearly daily wheals (raised, erythematous, pruritic, individual lesions resolve in <24 hours, no bruising). Episodes of lip and periorbital angioedema approximately 2x/month, lasting 24-48 hours. No identifiable trigger. No associated fever, arthralgias, or weight loss. Currently taking cetirizine 10mg daily with "maybe 30% improvement." She is frustrated and worried she has a serious allergy to something in her environment. No personal or family history of HAE. Not on ACE inhibitor. Complement levels (C4, C3) normal. CBC with differential normal. CRP 2.1 (normal). TSH normal.',
        question:'This is chronic spontaneous urticaria (CSU). Walk through the classification and the stepwise management approach.',
        keyPoints:[
          'CSU = urticaria ≥6 weeks without identifiable external trigger. This is the most common form of chronic urticaria',
          'Classification: CSU (spontaneous) vs CIndU (chronic inducible — cold, pressure, cholinergic, solar, etc.)',
          'Workup in CSU is MINIMAL: CBC with diff, CRP/ESR, TSH. Extensive allergy testing is NOT recommended and NOT helpful',
          'Individual wheals in CSU resolve in <24h and leave no bruising. If lesions persist >24h or leave purpura → biopsy for urticarial vasculitis',
          'The angioedema in CSU is histamine-mediated (mast cell) — NOT bradykinin-mediated. This distinction matters for treatment',
          'Step 1: second-gen H1 antihistamine (cetirizine, loratadine, fexofenadine) at standard dose. She is on this and failing.'
        ]
      },
      {
        phase:'Workup',
        narrative:'You explain that this is NOT caused by an environmental allergen and that extensive allergy testing would not be helpful. She is relieved but skeptical. You increase cetirizine to 20mg daily (2x standard dose). At follow-up in 4 weeks, she reports 50% improvement — fewer hives but still daily, and she had one angioedema episode.',
        question:'She\'s partially responding to updosed antihistamine. What\'s next in the stepwise approach?',
        keyPoints:[
          'Step 2: Updose second-gen H1 antihistamine to 2-4x standard dose (FDA-approved for up to 4x in international guidelines). She is at 2x. Can go to cetirizine 40mg/day (or switch to another agent)',
          'Step 3: Add omalizumab (anti-IgE, 300mg SC q4 weeks). This is FDA-approved for CSU refractory to antihistamines. Response rate ~65-80%. Can see improvement within 1-2 doses',
          'Step 4 (if omalizumab fails): cyclosporine (off-label, 3-5 mg/kg/day), with monitoring for renal function and BP',
          'DO NOT add: first-gen antihistamines chronically (sedation, anticholinergic), systemic corticosteroids chronically (side effects outweigh benefits for a self-limited disease), leukotriene modifiers (minimal evidence in CSU)',
          'Short course prednisone (5-7 days) is acceptable for severe flares or angioedema, but not as maintenance',
          'CSU is usually self-limited — median duration 2-5 years. Counsel on this: there IS light at the end of the tunnel'
        ]
      },
      {
        phase:'Pivot',
        narrative:'You uptitrate to cetirizine 40mg/day (4x standard dose). At 6-week follow-up, she still has hives 4 days/week. You recommend omalizumab. She asks: "Is this the same medication used for asthma? Will my insurance cover it? And what about the lip swelling — that scares me the most. Could I have hereditary angioedema?"',
        question:'Address her questions about omalizumab, insurance, and differentiate her angioedema from HAE.',
        keyPoints:[
          'Omalizumab: YES, same drug used for allergic asthma. In CSU it works differently — depletes free IgE, downregulates FcεRI on mast cells/basophils. FDA-approved for CSU at 150mg or 300mg q4 weeks',
          'Insurance: omalizumab requires prior authorization showing antihistamine failure. Most plans cover it for CSU. Manufacturer patient assistance programs exist. Cost ~$1,500-3,000/month without insurance',
          'Her angioedema is NOT HAE because: (1) C4 is normal (C4 is LOW in HAE types 1 and 2, even between attacks), (2) she has concurrent urticaria (HAE does NOT cause urticaria), (3) her angioedema responds partially to antihistamines (HAE does not)',
          'HAE angioedema: bradykinin-mediated, does NOT itch, NOT associated with urticaria, often involves gut (severe abdominal pain), does NOT respond to epinephrine/antihistamines/steroids. Treated with C1-INH concentrate, icatibant, or ecallantide',
          'ACE inhibitor angioedema: also bradykinin-mediated, similar presentation to HAE, onset can be delayed (months-years after starting ACE). She is not on one — confirmed.'
        ]
      },
      {
        phase:'Resolution',
        narrative:'She starts omalizumab 300mg q4 weeks. After the second injection, she reports 80% improvement — hives 1x/week, no angioedema episodes. By month 3, she is nearly symptom-free. At 6 months you discuss the plan.',
        question:'She is responding well. How long does she stay on omalizumab, and what does the long-term plan look like?',
        keyPoints:[
          'No defined duration for omalizumab in CSU. Guidelines suggest: treat for 6-12 months, then attempt dose reduction or discontinuation',
          'If symptoms recur after stopping: restart. Many patients need 12-24+ months of therapy',
          'Monitor: no routine labs required for omalizumab in CSU. Watch for injection site reactions (most common), rare anaphylaxis (0.1% — observe 30min for first 3 doses)',
          'Can attempt step-down: 300mg → 150mg → discontinue, with continued antihistamine',
          'Long-term counseling: CSU is an autoimmune/auto-allergic condition in ~40-50% of cases (IgG anti-FcεRI or anti-IgE autoantibodies). It is NOT caused by diet, stress, or environment. It will eventually remit in most patients.',
          'Urticaria Activity Score (UAS7): validated patient-reported outcome. Have her track weekly for objective measurement of control'
        ]
      }
    ],
    teaching:'CSU stepwise management per EAACI/GA2LEN: Step 1: standard-dose sgAH → Step 2: updose sgAH to 4x → Step 3: add omalizumab → Step 4: add cyclosporine. Key teaching: (1) Extensive allergy workup is NOT indicated. (2) Angioedema in CSU is mast cell/histamine-mediated, NOT bradykinin — distinguish from HAE (check C4). (3) Omalizumab response in CSU is dose-dependent and often rapid. (4) CSU is self-limited (median 2-5 years) — this is reassuring for patients. (5) First-gen antihistamines and chronic steroids are NOT recommended.'
  },

  // ═══ PULM × A/I ═══
  {
    id:'severe-asthma-biologics',
    title:'Severe Asthma — Phenotyping and Biologic Selection',
    category:'Pulm × A/I',
    tier:3,
    acuity:'outpatient',
    setting:'Clinic',
    milestones:['PC1','PC4','MK2','PBLI1'],
    patient:{
      name:'Marcus Jefferson',age:'48M',
      vitals:{HR:82,RR:16,SpO2:96,Temp:'36.9°C',BP:'132/82'},
      cc:'Asthma uncontrolled on high-dose ICS/LABA + LAMA. 3 exacerbations requiring prednisone in past year.'
    },
    stages:[
      {
        phase:'Presentation',
        narrative:'48-year-old man with adult-onset asthma (diagnosed age 38). Currently on fluticasone/vilanterol 200/25 daily + tiotropium. Still symptomatic: nighttime awakenings 3x/week, rescue inhaler 5x/week, FEV1 62% predicted. Three courses of oral prednisone in past 12 months. Nasal polyps removed surgically x2 (recurred both times). History of aspirin sensitivity (developed bronchospasm after ibuprofen 5 years ago). Total IgE: 380 IU/mL. Blood eosinophils: 620 cells/μL. FeNO: 58 ppb. Allergic to dust mite and cat on skin testing.',
        question:'This is severe asthma. What phenotype does he have, and which biomarkers guide your biologic selection?',
        keyPoints:[
          'Phenotype: T2-high severe asthma. Evidence: elevated eosinophils (≥150 is the threshold, his is 620), elevated FeNO (≥25 ppb, his is 58), elevated IgE, nasal polyposis, aspirin sensitivity',
          'He also has AERD (aspirin-exacerbated respiratory disease = asthma + nasal polyps + NSAID sensitivity). This is a specific T2-high endotype',
          'Key biomarkers for biologic selection: blood eosinophils (anti-IL-5 pathway), total IgE (omalizumab), FeNO (anti-IL-4/13), nasal polyps (dupilumab)',
          'T2-low asthma (no eosinophilia, low FeNO, low IgE): limited biologic options — tezepelumab (anti-TSLP) is the only biologic with data in T2-low',
          'Before biologics: confirm adherence (electronic monitoring or pharmacy refill data), confirm inhaler technique, treat comorbidities (GERD, OSA, obesity, rhinosinusitis)'
        ]
      },
      {
        phase:'Workup',
        narrative:'Adherence confirmed (pharmacy data shows 92% fill rate). Inhaler technique demonstrated correctly. GERD treated with PPI. OSA excluded. You confirm this is truly severe refractory T2-high asthma with AERD.',
        question:'Walk through the biologic options for this patient. Which would you recommend first and why?',
        keyPoints:[
          'DUPILUMAB (anti-IL-4Rα, blocks IL-4 and IL-13): Best choice here. Addresses eosinophilic inflammation, elevated FeNO, AND nasal polyps (FDA-approved for all three indications). Also treats his likely concurrent atopic dermatitis if present. Would reduce exacerbations ~50-70%, improve FEV1, and treat polyps simultaneously',
          'MEPOLIZUMAB / BENRALIZUMAB (anti-IL-5/IL-5Rα): Excellent for eosinophilic asthma. Would reduce exacerbations and eosinophils. BUT less effect on nasal polyps than dupilumab, and no effect on FeNO-driven inflammation',
          'OMALIZUMAB (anti-IgE): He qualifies (IgE 380, allergic sensitization). But less effective for nasal polyps and eosinophilic component compared to dupilumab',
          'TEZEPELUMAB (anti-TSLP): Broadest mechanism, works in T2-high AND T2-low. Could be considered but newer, less polyp data',
          'For AERD specifically: dupilumab + aspirin desensitization is the most comprehensive approach',
          'Insurance reality: most payers require step-through failure of at least one biologic before approving another. Start with the one most likely to address ALL his comorbidities'
        ]
      },
      {
        phase:'Pivot',
        narrative:'You start dupilumab 300mg q2 weeks. At 4 months: exacerbations zero, nighttime symptoms resolved, FEV1 improved to 78%, eosinophils dropped to 180, nasal polyp score improving. But he develops new bilateral conjunctivitis (itchy, tearing eyes) that wasn\'t present before dupilumab.',
        question:'He\'s responding beautifully but has new eye symptoms. What\'s happening?',
        keyPoints:[
          'Dupilumab-associated conjunctivitis: occurs in 5-28% of patients (higher in those with atopic dermatitis). Mechanism: IL-13 blockade may disinhibit OX40L on conjunctival goblet cells, causing Th1/Th17-mediated inflammation',
          'NOT a reason to stop dupilumab if asthma and polyps are well-controlled',
          'Management: ophthalmology referral, topical fluorometholone or tacrolimus eye drops, preservative-free artificial tears',
          'This is a known class effect and should be counseled about proactively when starting dupilumab',
          'Other dupilumab side effects: injection site reactions (common), eosinophilia (transient, usually clinically insignificant), arthralgia',
          'Monitor: blood eosinophils can paradoxically rise on dupilumab (IL-4 blockade reduces eosinophil trafficking into tissues → transient blood accumulation). Usually self-resolves. Concern only if >3,000-5,000 with symptoms'
        ]
      },
      {
        phase:'Resolution',
        narrative:'Conjunctivitis treated with topical tacrolimus drops. At 12 months on dupilumab: zero exacerbations, FEV1 82%, eosinophils stable at 200, nasal endoscopy shows minimal polyp recurrence, no longer needing nasal steroid spray. He asks about aspirin desensitization and whether he can ever stop the biologic.',
        question:'What\'s the long-term management plan, including aspirin desensitization and biologic duration?',
        keyPoints:[
          'Aspirin desensitization: now that his asthma is optimally controlled on dupilumab, he is an excellent candidate. Aspirin desensitization + maintenance (325-650mg BID) further reduces polyp recurrence and improves smell in AERD. Can be done as a 2-day protocol in monitored setting',
          'Biologic duration: no defined stopping point. Guidelines suggest trial off after 12-24 months of good control. However, most patients with severe T2-high asthma relapse within 3-6 months of stopping',
          'Step-down approach: while ON biologic, attempt to reduce ICS/LABA dose. If stable on medium-dose ICS/LABA + biologic, he may eventually step down further',
          'Do NOT stop the biologic and the ICS/LABA simultaneously — step down one at a time',
          'Ongoing monitoring: FEV1, FeNO, eosinophils, ACT score, exacerbation frequency, nasal polyp score',
          'If dupilumab ever loses efficacy: consider switching to anti-IL-5 (mepolizumab/benralizumab) or adding tezepelumab'
        ]
      }
    ],
    teaching:'Severe asthma biologic selection: (1) Phenotype FIRST — biomarkers determine which pathway to target. T2-high markers: eosinophils ≥150, FeNO ≥25, IgE elevated. (2) Match the biologic to the full clinical picture, not just one biomarker. Dupilumab is uniquely effective for the asthma + polyps + eosinophilia triad (AERD). (3) Dupilumab conjunctivitis is a known effect — manage, don\'t stop. (4) AERD is a specific endotype that benefits from combined biologic + aspirin desensitization approach. (5) Biologics are long-term therapy; most patients relapse when stopped.'
  },

  {
    id:'abpa-diagnosis',
    title:'ABPA — Allergic Bronchopulmonary Aspergillosis',
    category:'Pulm × A/I',
    tier:3,
    acuity:'outpatient',
    setting:'Clinic',
    milestones:['PC1','PC3','MK1','MK2'],
    patient:{
      name:'Keisha Williams',age:'29F',
      vitals:{HR:88,RR:18,SpO2:95,Temp:'37.4°C',BP:'116/72'},
      cc:'Worsening asthma, productive cough with brown mucus plugs, recurrent infiltrates on CXR.'
    },
    stages:[
      {
        phase:'Presentation',
        narrative:'29-year-old woman with asthma since age 12, usually well-controlled. Over the past 8 months: worsening wheeze, productive cough with thick brownish-green mucus plugs (she describes coughing up "casts"). Two courses of antibiotics for "pneumonia" with transient infiltrates that resolved then reappeared in different locations. She feels generally unwell, low-grade fevers. Current meds: fluticasone/salmeterol 250/50 BID, montelukast. CXR: upper lobe infiltrate with central bronchiectasis. CBC: WBC 9.8, eosinophils 1,800 (18%).',
        question:'Migratory infiltrates, mucus plugs, eosinophilia, and central bronchiectasis in an asthmatic. What\'s the diagnosis and what labs do you need?',
        keyPoints:[
          'Classic ABPA presentation: asthma + eosinophilia + migratory infiltrates + central bronchiectasis + mucus plugging',
          'ISHAM diagnostic criteria: (1) Predisposing condition (asthma or CF), (2) OBLIGATORY: elevated total IgE (>1000 IU/mL) AND positive Aspergillus-specific IgE or skin test, (3) SUPPORTING (need ≥2): Aspergillus-specific IgG elevated, eosinophils >500, radiographic findings consistent (central bronchiectasis, mucoid impaction, high-attenuation mucus)',
          'Order: total IgE (expect >1000), Aspergillus-specific IgE (ImmunoCAP), Aspergillus-specific IgG (precipitins), HRCT chest, eosinophil count already elevated',
          'The "brown mucus plugs" = allergic mucin containing eosinophils and fungal hyphae. Pathognomonic',
          'Central (proximal) bronchiectasis is characteristic of ABPA — spares peripheral airways. Different from post-infectious bronchiectasis which is often lower lobe/peripheral'
        ]
      },
      {
        phase:'Workup',
        narrative:'Total IgE: 3,200 IU/mL. Aspergillus-specific IgE: 18.5 kUA/L (positive). Aspergillus-specific IgG: elevated. HRCT: central bronchiectasis in bilateral upper lobes, high-attenuation mucoid impaction ("finger-in-glove" sign), scattered ground-glass opacities. Eosinophils: 1,800.',
        question:'Diagnosis confirmed. What is the staging system and how do you treat?',
        keyPoints:[
          'ABPA staging: Stage 1 (acute), Stage 2 (remission: IgE drops >35%), Stage 3 (exacerbation: IgE rises >100% over baseline), Stage 4 (glucocorticoid-dependent), Stage 5 (fibrotic — end-stage)',
          'She is in Stage 1 (acute). Treatment: systemic corticosteroids — prednisolone 0.5 mg/kg/day × 2 weeks, then taper over 3-5 months (multiple taper protocols exist)',
          'Add itraconazole 200mg BID × 16 weeks as STEROID-SPARING adjunct (reduces fungal burden, decreases eosinophilic inflammation). NOT an antifungal treatment per se — it\'s immunomodulatory in this context',
          'Monitor: total IgE every 6-8 weeks. A >35% decline confirms response. Use baseline IgE as the reference for future exacerbations (>100% rise = relapse)',
          'Optimize asthma control: continue ICS/LABA, consider adding LAMA',
          'Omalizumab: emerging evidence as steroid-sparing agent in ABPA. Works by reducing free IgE and downregulating mast cell/basophil activation. Consider for steroid-dependent patients'
        ]
      },
      {
        phase:'Pivot',
        narrative:'After 2 months of prednisone (now tapering at 10mg/day) + itraconazole, IgE drops from 3,200 → 1,400. Eosinophils normalize. CXR improving. But as you taper prednisone below 10mg, symptoms recur: wheeze worsens, IgE rises to 2,800.',
        question:'She\'s becoming glucocorticoid-dependent. What are your options?',
        keyPoints:[
          'Stage 4 (glucocorticoid-dependent ABPA). Each relapse with bronchiectasis progression causes cumulative lung damage',
          'Options for steroid sparing: (1) Continue itraconazole long-term (check azole levels, LFTs, drug interactions), (2) Omalizumab (anti-IgE) — reduces exacerbations and steroid requirement in ABPA, (3) Mepolizumab/benralizumab (anti-IL-5) — targets eosinophilic component, case series show benefit, (4) Dupilumab — emerging data, targets IL-4/13 pathway driving IgE and eosinophil production',
          'Omalizumab dosing in ABPA is challenging because IgE >1,500 is "off the dosing chart." In practice, many specialists use the maximum dose (375mg q2 weeks) regardless of IgE level. Some payers resist coverage for IgE >1,500 — requires PA with literature support',
          'Never stop itraconazole and taper steroids simultaneously — one change at a time',
          'Pulmonary function monitoring: FEV1 trend, serial HRCT annually to assess bronchiectasis progression'
        ]
      },
      {
        phase:'Resolution',
        narrative:'You add omalizumab 375mg q2 weeks while continuing itraconazole. Over 6 months, she successfully tapers off prednisone. IgE stabilizes around 1,000. FEV1 improves from 68% to 79%. HRCT shows stable bronchiectasis without new changes.',
        question:'What is her long-term monitoring plan?',
        keyPoints:[
          'Total IgE every 2-3 months as the primary biomarker. Her new "baseline" after treatment is ~1,000 — any doubling (>2,000) warrants evaluation for relapse',
          'Annual HRCT to monitor bronchiectasis progression',
          'PFTs every 6 months (FEV1, FVC, FEV1/FVC)',
          'Itraconazole: check azole trough levels (target >0.5 mcg/mL), LFTs q3 months, watch for drug interactions (statins, some immunosuppressants)',
          'Omalizumab: continue indefinitely as steroid-sparing. No defined stopping point in ABPA',
          'Environmental: CANNOT eliminate Aspergillus exposure (ubiquitous in environment). Avoid obvious sources: compost, damp buildings, marijuana use',
          'ABPA does NOT progress to invasive aspergillosis in immunocompetent patients — reassure the patient'
        ]
      }
    ],
    teaching:'ABPA: (1) Think of it in ANY asthmatic with eosinophilia + recurrent infiltrates. (2) Total IgE is the primary monitoring biomarker — not eosinophils, not imaging. (3) Itraconazole is a steroid-sparing adjunct, not primary antifungal therapy. (4) Central (proximal) bronchiectasis is the hallmark — not the same as other causes of bronchiectasis. (5) High-attenuation mucus on CT is nearly pathognomonic (mucus denser than skeletal muscle = high eosinophil/fungal content). (6) Omalizumab is increasingly used for steroid-dependent ABPA despite IgE being "off the dosing chart."'
  },

  // ═══ GI × A/I ═══
  {
    id:'eoe-fpies',
    title:'EoE and FPIES — Non-IgE GI Allergic Diseases',
    category:'GI × A/I',
    tier:2,
    acuity:'outpatient',
    setting:'Clinic',
    milestones:['PC1','PC3','MK1','MK2','ICS1'],
    patient:{
      name:'Oliver Chen',age:'4M',
      vitals:{HR:98,RR:22,SpO2:99,Temp:'36.7°C',BP:'88/58'},
      cc:'Refusing to eat, gagging on solid foods, poor weight gain. Parents also report "he vomited violently 2 hours after trying baked fish for the first time."'
    },
    stages:[
      {
        phase:'Presentation',
        narrative:'4-year-old boy with two separate problems. First: progressive food refusal and gagging with solid foods for 6+ months. Only eats soft/pureed foods. Has fallen from 50th percentile weight-for-age to 15th. No vomiting with these episodes — he just gags and spits out textured foods. He has eczema (well-controlled) and is sensitized to egg and milk on skin testing but tolerates both in baked form. Second: two weeks ago, he tried baked fish for the first time. Two hours later, he had projectile vomiting (8 episodes over 1 hour), became pale and lethargic, had no urticaria or respiratory symptoms, and was taken to the ED where he received IV fluids and recovered within 4 hours.',
        question:'This child has two separate GI allergic diseases. What are they?',
        keyPoints:[
          'Problem 1: EOSINOPHILIC ESOPHAGITIS (EoE) — chronic food refusal/aversion, gagging, dysphagia in a child with atopic history. NOT IgE-mediated. Diagnosis requires EGD with esophageal biopsies showing ≥15 eos/hpf',
          'Problem 2: FOOD PROTEIN-INDUCED ENTEROCOLITIS SYNDROME (FPIES) to fish — acute onset profuse vomiting 1-4 hours after ingestion, pallor, lethargy, no skin/respiratory symptoms, recovery with IV fluids. This is NOT IgE-mediated (no urticaria, no anaphylaxis)',
          'These are both non-IgE-mediated GI allergic diseases. Skin testing and specific IgE are NOT useful for diagnosis of either',
          'Key differentiator from anaphylaxis: FPIES = delayed onset (1-4 hours), NO urticaria/angioedema/wheezing, recovery with fluid resuscitation. Anaphylaxis = rapid onset (<1 hour), multisystem (skin + respiratory + cardiovascular)',
          'His egg/milk sensitization with baked tolerance = likely outgrowing IgE-mediated allergy (separate from his EoE and FPIES)'
        ]
      },
      {
        phase:'Workup',
        narrative:'EGD with biopsy: esophageal biopsies show 45 eos/hpf with microabscesses, basal zone hyperplasia, and furrows. Consistent with EoE. Regarding the fish FPIES: you counsel the family to strictly avoid ALL fish (finned fish cross-reactivity is common in FPIES). You plan an oral food challenge to shellfish in 6 months under supervised conditions to determine if crustaceans are safe.',
        question:'How do you treat EoE, and what is the approach to FPIES management?',
        keyPoints:[
          'EoE TREATMENT — 3 equivalent first-line options (shared decision-making with family): (1) Swallowed topical steroids: fluticasone MDI (swallowed, not inhaled) or budesonide slurry. Most families choose this. (2) PPI trial: some EoE is PPI-responsive (no longer considered a separate entity). (3) Dietary elimination: 2-food elimination (dairy + wheat most common triggers), 4-food, or 6-food elimination diet. More effective but harder to maintain in a 4-year-old.',
          'EoE monitoring: repeat EGD with biopsy after 8-12 weeks of treatment to assess histologic response. Target: <15 eos/hpf',
          'FPIES management: strict avoidance of the trigger food. NO epinephrine autoinjector needed (not IgE-mediated). Instead: ondansetron 0.15mg/kg IV/IM is the rescue medication for acute FPIES episodes (evidence-based, reduces vomiting)',
          'FPIES natural history: most children outgrow acute FPIES by age 3-5. Fish FPIES may persist longer. Supervised oral food challenge is the ONLY way to determine resolution — typically performed annually',
          'The family should have an FPIES action plan (different from anaphylaxis action plan): avoid trigger, ondansetron for accidental exposure, go to ED for IV fluids if severe'
        ]
      },
      {
        phase:'Pivot',
        narrative:'At 6-month follow-up: EoE is well-controlled on swallowed budesonide slurry (repeat EGD shows 4 eos/hpf). His food aversion is improving with feeding therapy. For FPIES: you schedule a supervised oral food challenge to baked cod in the office. During the challenge, 90 minutes after the cumulative dose, he vomits 3 times and becomes pale. You give ondansetron 0.15mg/kg IV — vomiting stops within 20 minutes. He perks up after IV fluids.',
        question:'The challenge was positive. How do you counsel the family, and what about other seafood?',
        keyPoints:[
          'Positive OFC confirms ongoing fish FPIES. Continue strict fish avoidance for another 12-18 months, then rechallenge',
          'Cross-reactivity in FPIES: fish (finned) are a group. If FPIES to one fish, avoid ALL finned fish. BUT shellfish (crustaceans and mollusks) are a SEPARATE group — not cross-reactive with finned fish',
          'A supervised shellfish challenge can be done to determine if shrimp/crab/lobster are safe (separate from fish FPIES)',
          'Ondansetron worked well — this is now the standard acute FPIES rescue. Family should have a prescription for oral ondansetron ODT for accidental exposures at home',
          'FPIES action plan: (1) Avoid all finned fish, (2) If accidental exposure: observe for 1-4 hours, give ondansetron if vomiting begins, go to ED if not improving or if lethargy develops, (3) This is NOT anaphylaxis — epinephrine will NOT help',
          'Importantly: FPIES can evolve to IgE-mediated allergy in ~5-10% of cases (called "atypical FPIES" or FPIES with IgE sensitization). Check fish-specific IgE annually. If positive, the disease phenotype may shift and epinephrine would then be indicated'
        ]
      },
      {
        phase:'Resolution',
        narrative:'Oliver continues budesonide slurry for EoE (histologic remission maintained), undergoes feeding therapy for food aversion, and strictly avoids finned fish. Shellfish challenge is passed successfully. At age 6, supervised baked cod challenge is passed — FPIES resolved.',
        question:'He outgrew FPIES. What\'s the long-term outlook for both conditions?',
        keyPoints:[
          'FPIES: most outgrow by age 5-7. Fish FPIES can persist longer. After passing OFC, gradual reintroduction of fish at home with 4-hour observation window after each new fish species',
          'EoE: chronic condition that does NOT resolve spontaneously. Will likely need long-term treatment (topical steroids or diet). If steroids are stopped, inflammation and symptoms recur in most patients',
          'EoE long-term risks: esophageal stricture, food impaction, nutritional deficiency from food avoidance',
          'Transition planning: as Oliver grows, he needs to learn to manage EoE himself — swallowing medication, recognizing food impaction, knowing when to seek care',
          'Monitor for new atopic march progression: his eczema is controlled, egg/milk allergy likely outgrown (baked tolerance), but he may develop allergic rhinitis or asthma',
          'Emerging EoE therapy: dupilumab is now FDA-approved for EoE (age ≥1 year, ≥40kg). Could be considered if topical steroids fail or for steroid-sparing'
        ]
      }
    ],
    teaching:'Non-IgE GI allergic diseases: (1) EoE diagnosis REQUIRES endoscopy with biopsy (≥15 eos/hpf). Skin testing does NOT diagnose EoE. (2) FPIES is characterized by DELAYED profuse vomiting without skin/respiratory symptoms. NOT anaphylaxis. Ondansetron is the rescue med, NOT epinephrine. (3) FPIES and IgE-mediated food allergy are different mechanisms that can coexist. (4) EoE is chronic; FPIES is usually outgrown. (5) Dupilumab is FDA-approved for EoE and may change the treatment landscape.'
  },

  // ═══ ID × A/I ═══
  {
    id:'immunodeficiency-vaccines-infections',
    title:'Immunodeficiency — Vaccines and Opportunistic Infections',
    category:'ID × A/I',
    tier:3,
    acuity:'outpatient',
    setting:'Clinic',
    milestones:['PC1','PC3','MK1','MK2','SBP1'],
    patient:{
      name:'Anna Petrova',age:'35F',
      vitals:{HR:76,RR:16,SpO2:98,Temp:'36.9°C',BP:'118/76'},
      cc:'Recently diagnosed with CVID. Asking about vaccines and travel safety.'
    },
    stages:[
      {
        phase:'Presentation',
        narrative:'35-year-old woman diagnosed with CVID 6 months ago after recurrent sinopulmonary infections. Now on subcutaneous immunoglobulin (SCIG) 10g weekly with IgG trough consistently >600 mg/dL. She feels well, no recent infections since starting replacement. She is asking three questions: (1) Can she get her annual flu shot? (2) She wants to travel to Peru — what about yellow fever vaccine? (3) Her 2-month-old nephew is about to get his rotavirus vaccine — is that safe for her to be around?',
        question:'Walk through the vaccine principles for primary immunodeficiency.',
        keyPoints:[
          'LIVE VACCINES are CONTRAINDICATED in most primary immunodeficiencies (including CVID): MMR, varicella, yellow fever, live-attenuated influenza (nasal spray), rotavirus, oral polio, BCG, oral typhoid',
          'INACTIVATED VACCINES are SAFE but may have reduced efficacy: IIV (flu shot), pneumococcal, Tdap, hepatitis A/B, meningococcal, HPV, COVID mRNA, inactivated polio',
          'Flu shot: YES — give the INJECTION (inactivated), NOT the nasal spray (live-attenuated). Will generate some response since T cells are intact in CVID even if antibody response is blunted',
          'Yellow fever: ABSOLUTELY NOT — live vaccine, potentially fatal in immunodeficient patients. She CANNOT travel to areas requiring yellow fever vaccination without a medical waiver letter',
          'Rotavirus (nephew): rotavirus is a LIVE oral vaccine. The vaccinated infant sheds live virus in stool for several weeks. For a CVID patient: this is generally low risk with normal hand hygiene, but she should avoid diaper changes for 2-4 weeks post-vaccination and wash hands carefully',
          'Her immunoglobulin replacement provides PASSIVE protection — the IgG she receives contains antibodies from the donor pool. This does NOT replace the need for vaccines in household contacts'
        ]
      },
      {
        phase:'Workup',
        narrative:'She understands the vaccine guidance. Now she asks: "My immunologist ordered a bunch of tests when I was diagnosed. What infections should I specifically worry about, and how do I know if my treatment is working?"',
        question:'Map the immune defect in CVID to the infection pattern. How do you monitor adequacy of replacement?',
        keyPoints:[
          'CVID = primarily antibody (B cell) deficiency. Susceptible to ENCAPSULATED bacteria: Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis. These cause sinusitis, pneumonia, bronchiectasis',
          'Also susceptible to: Giardia lamblia (GI), enteroviral meningoencephalitis (rare but devastating), Mycoplasma, Campylobacter',
          'NOT typically susceptible to: Pneumocystis, CMV, fungal infections, mycobacteria (these are T-cell deficiency infections)',
          'Monitoring replacement adequacy: IgG trough levels (target >500-700 mg/dL, some need >800), infection frequency (goal: ≤2-3 minor infections/year, zero hospitalizations for infection), PFTs annually (detect bronchiectasis progression)',
          'CVID complications beyond infection: autoimmunity (ITP, AIHA in 20-30%), granulomatous disease (GLILD — granulomatous lymphocytic interstitial lung disease), lymphoid hyperplasia, increased lymphoma risk, GI disease (nodular lymphoid hyperplasia, villous atrophy)',
          'Pattern-based infection thinking: Antibody deficiency → encapsulated bacteria. T-cell deficiency → intracellular pathogens, fungi, viruses. Combined → everything. Complement → Neisseria, SLE-like. Phagocyte → catalase-positive organisms (Staph, Aspergillus, Serratia)'
        ]
      },
      {
        phase:'Pivot',
        narrative:'One year later, Anna is doing well on SCIG (zero bacterial infections) but presents with 3 weeks of watery diarrhea, abdominal cramping, and 8-lb weight loss. Stool studies: negative for C. diff, negative for bacterial culture, negative for ova and parasites on standard microscopy.',
        question:'A CVID patient with chronic diarrhea and standard stool studies negative. What else do you look for?',
        keyPoints:[
          'GIARDIA: standard O&P may miss it. Need Giardia-specific antigen or PCR. This is the most common parasitic infection in CVID. Multiple stool samples may be needed',
          'Norovirus: can cause chronic persistent infection in CVID (unlike immunocompetent where it is self-limited). PCR testing. Very difficult to treat — no specific antiviral',
          'CMV colitis: less common in CVID than in T-cell deficiency, but can occur. Colonoscopy with biopsy for inclusion bodies',
          'CVID enteropathy: non-infectious autoimmune-like GI inflammation (villous atrophy, lymphocytic infiltration). Similar to celiac but NOT responsive to gluten-free diet. May respond to budesonide or immunosuppression',
          'Small intestinal bacterial overgrowth (SIBO): common in CVID due to immune dysregulation of gut flora. Treat with rifaximin',
          'Workup: Giardia antigen, norovirus PCR, consider colonoscopy if stool studies fully negative, celiac serologies (though unreliable in CVID due to antibody deficiency), assess IgG trough (is replacement adequate?)'
        ]
      },
      {
        phase:'Resolution',
        narrative:'Giardia antigen: POSITIVE. Treated with metronidazole 250mg TID × 7 days. Symptoms resolve within 5 days. Repeat Giardia antigen negative at 1 month.',
        question:'Classic CVID + Giardia. What\'s the take-home for the fellow about infection patterns in immunodeficiency?',
        keyPoints:[
          'The IMMUNE DEFECT PREDICTS THE INFECTION: Antibody → encapsulated bacteria and Giardia. T-cell → PJP, CMV, HSV, fungi, mycobacteria. Complement → Neisseria. Phagocyte → catalase-positive bacteria and Aspergillus',
          'In CVID specifically: Giardia is the #1 parasitic infection. Standard O&P is NOT sensitive enough — always order the antigen or PCR',
          'Norovirus chronic infection is emerging as a significant problem in CVID — can persist for months/years',
          'CVID GI disease: up to 20% of CVID patients have significant GI pathology. Always scope if diarrhea persists despite treating infection',
          'Household contacts: live vaccines in contacts are generally safe with standard hygiene precautions. The bigger risk is NOT vaccinating household contacts (cocoon strategy)',
          'Travel medicine in immunodeficiency: always consult travel medicine/immunology before travel. Some destinations may be contraindicated. Provide medical letter documenting live vaccine contraindications'
        ]
      }
    ],
    teaching:'Immunodeficiency and infection: (1) The immune defect predicts the infection pattern — this is CORE fellowship knowledge. (2) Live vaccines are contraindicated; inactivated vaccines are safe but may have blunted response. (3) Giardia is the classic parasitic infection in antibody deficiency — order the ANTIGEN, not just O&P. (4) CVID complications go beyond infection: autoimmunity, granulomatous disease, GI enteropathy, lymphoma risk. (5) IgG replacement prevents most bacterial infections but does NOT protect against intracellular pathogens or parasites.'
  },

  // ═══ A/I ESSENTIALS ═══
  {
    id:'hae-management',
    title:'Hereditary Angioedema — Acute and Prophylactic Management',
    category:'A/I Essential',
    tier:3,
    acuity:'ED + Clinic',
    setting:'Mixed',
    milestones:['PC1','PC3','PC4','MK1','MK2'],
    patient:{
      name:'David Kowalski',age:'26M',
      vitals:{HR:92,RR:20,SpO2:97,Temp:'37.0°C',BP:'128/78'},
      cc:'Severe face/lip swelling and abdominal pain. History of recurrent episodes since age 14. Mother has similar episodes.'
    },
    stages:[
      {
        phase:'Presentation',
        narrative:'26-year-old man presents to the ED with progressive face and lip swelling × 8 hours, now with throat tightness and muffled voice. Also has severe abdominal cramping with nausea. He reports similar episodes since age 14, occurring every 2-3 weeks, lasting 3-5 days, affecting extremities, face, or abdomen. His mother has "the same thing." He has been to multiple EDs — epinephrine, antihistamines, and steroids have NEVER helped. He has never been formally diagnosed. He is carrying a letter from a doctor saying "probable hereditary angioedema — needs C1 esterase inhibitor."',
        question:'This is HAE until proven otherwise. What makes this different from allergic/histaminergic angioedema, and what do you do RIGHT NOW?',
        keyPoints:[
          'HAE vs allergic angioedema: HAE is BRADYKININ-mediated. No urticaria ever. Does NOT respond to epinephrine, antihistamines, or corticosteroids. Family history of angioedema without urticaria.',
          'This patient has AIRWAY involvement (throat tightness, muffled voice) — this is a LIFE-THREATENING emergency. HAE-related laryngeal edema has ~30% mortality if untreated',
          'IMMEDIATE treatment: C1-inhibitor concentrate (Berinert 20 IU/kg IV or Cinryze) OR icatibant (bradykinin B2 receptor antagonist, 30mg SC) OR ecallantide (kallikrein inhibitor, 30mg SC). Any of these should be given NOW',
          'Do NOT waste time with epi/antihistamines/steroids — they will not work and delay life-saving treatment',
          'Prepare for intubation: have difficult airway equipment ready. If airway compromise progresses, secure the airway — pharmacotherapy takes 30-60 min to work',
          'His abdominal pain is from GI mucosal edema — common in HAE, can mimic acute abdomen. Has led to unnecessary surgeries'
        ]
      },
      {
        phase:'Workup',
        narrative:'You give Berinert 20 IU/kg IV. Within 45 minutes, his throat tightness improves and voice normalizes. Facial swelling begins to resolve. Abdominal pain improves over 2 hours. Confirmatory labs: C4: 5 mg/dL (low, normal 14-40), C1-INH level: 8 mg/dL (low, normal 21-39), C1-INH functional activity: 18% (low, normal >67%). C1q: normal.',
        question:'Interpret the labs. What type of HAE does he have?',
        keyPoints:[
          'C4 LOW + C1-INH level LOW + C1-INH function LOW + C1q NORMAL = HAE Type 1 (85% of HAE cases). Autosomal dominant, SERPING1 gene mutation',
          'HAE Type 2: C4 low, C1-INH level NORMAL or elevated, C1-INH function LOW. The protein is present but dysfunctional (15% of cases)',
          'HAE Type 3 (HAE with normal C1-INH): C4 normal, C1-INH normal, C1-INH function normal. Mutations in Factor XII, plasminogen, angiopoietin-1, or unknown. Diagnosis of exclusion',
          'Acquired angioedema (AAE): C4 low, C1-INH low, C1q LOW. Associated with lymphoproliferative disorders or autoantibodies. Key differentiator: C1q is NORMAL in hereditary but LOW in acquired',
          'C4 is the best SCREENING test — it is LOW even between attacks in HAE types 1 and 2. If C4 is normal between attacks, HAE types 1 and 2 are effectively excluded',
          'His mother should be tested — first-degree relatives have 50% risk'
        ]
      },
      {
        phase:'Pivot',
        narrative:'He is diagnosed with HAE Type 1, discharged with icatibant auto-injector for acute attacks. Over the next 3 months, he has attacks every 2-3 weeks. Some involve the airway. He misses significant work.',
        question:'His attack frequency warrants prophylaxis. What are the options?',
        keyPoints:[
          'Long-term prophylaxis options: (1) Lanadelumab (anti-kallikrein monoclonal antibody, 300mg SC q2 weeks — can extend to q4 weeks if controlled). Most effective, reduces attacks ~87%. (2) Berotralstat (oral kallikrein inhibitor, 150mg daily). Convenient oral option, reduces attacks ~44%. (3) C1-INH replacement (Cinryze IV q3-4 days, or Haegarda SC q3-4 days). Well-established.',
          'Lanadelumab is the most effective and increasingly first-line. Subcutaneous, self-administered',
          'Short-term prophylaxis (before dental procedures, surgery, or anticipated triggers): C1-INH concentrate 1-2 hours before procedure. OR danazol (attenuated androgen, increases C1-INH production — effective but significant side effects: virilization, hepatotoxicity, contraindicated in pregnancy)',
          'Trigger avoidance: estrogen-containing contraceptives can worsen HAE (avoid), ACE inhibitors are ABSOLUTELY CONTRAINDICATED (bradykinin accumulation), trauma/stress/infections can trigger attacks',
          'Every HAE patient needs an on-demand rescue medication at ALL times (icatibant auto-injector or C1-INH concentrate for self-administration). Even on prophylaxis, breakthrough attacks occur',
          'Genetic counseling: autosomal dominant, 50% risk to offspring. Prenatal testing available'
        ]
      },
      {
        phase:'Resolution',
        narrative:'He starts lanadelumab 300mg SC q2 weeks. Attack frequency drops from 2-3/month to 1 attack in 6 months (mild hand swelling, self-treated with icatibant at home). He returns to full work, travels internationally, and asks about starting a family.',
        question:'Counseling for family planning and long-term management.',
        keyPoints:[
          'Reproduction: HAE is autosomal dominant — 50% chance each child inherits. Genetic counseling recommended. Prenatal/preimplantation genetic testing is available',
          'Pregnancy considerations: lanadelumab should be discontinued before conception (limited pregnancy data). Pregnancy can either improve or worsen HAE. During pregnancy: C1-INH concentrate is the preferred treatment (pregnancy category B). Icatibant is contraindicated in pregnancy',
          'Peripartum: provide C1-INH concentrate at delivery (vaginal or cesarean) — prophylaxis for the physiologic stress of delivery',
          'Newborn: check C4 in the newborn (after 6 months of age — levels unreliable before then due to physiologic complement immaturity). If low → full workup',
          'Long-term: annual follow-up with immunologist, maintain on-demand rescue medication, update emergency action plan',
          'Emerging therapy: gene therapy/gene editing for HAE is in clinical trials — may be curative in the future'
        ]
      }
    ],
    teaching:'HAE essentials: (1) BRADYKININ-mediated — epinephrine/antihistamines/steroids do NOT work. (2) C4 is the screening test (low even between attacks). C1q differentiates hereditary (normal) from acquired (low). (3) Airway angioedema is a life-threatening emergency — treat with C1-INH, icatibant, or ecallantide immediately while preparing airway backup. (4) All patients need on-demand rescue AND assessment for prophylaxis. Lanadelumab is the most effective prophylactic agent. (5) ACE inhibitors and estrogen-containing contraceptives are contraindicated. (6) Family screening: first-degree relatives have 50% risk.'
  }
];
})();
