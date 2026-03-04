/* js/crt-ai-supplement.js — Final supplement
 * IgA deficiency + transfusion, Latex allergy, MechanismDx Pharmacology
 */
(function(){
'use strict';

window.CRT_AI_SUPPLEMENT = [

// ═══ SELECTIVE IgA DEFICIENCY ═══
{
  id:'iga-deficiency-transfusion',
  title:'Selective IgA Deficiency + Transfusion Reactions',
  category:'Immunology',
  tier:2, acuity:'mixed', setting:'Mixed',
  milestones:['PC1','PC3','MK1','MK2','SBP1'],
  patient:{name:'Rachel Mendez',age:'28F',
    vitals:{HR:78,RR:16,SpO2:99,Temp:'36.8°C',BP:'112/68'},
    cc:'IgA undetectable. Transfusion anaphylaxis history. Upcoming surgery.'},
  stages:[
    {phase:'Presentation',
     narrative:'28F, selective IgA deficiency (IgA <5, IgG/IgM normal). Has celiac disease (IgA-based serologies were falsely negative — diagnosed by IgG-based testing + biopsy). Age 22: received blood transfusion during C-section → anaphylaxis (urticaria, bronchospasm, hypotension). Now needs elective cholecystectomy.',
     question:'Why did she have transfusion anaphylaxis, and how do you prepare for surgery?',
     keyPoints:['Selective IgA deficiency: most common PID (1:300-700 Caucasians). Most asymptomatic. When symptomatic: sinopulmonary infections, autoimmune diseases (celiac, thyroiditis, SLE), atopy.',
       'Transfusion anaphylaxis mechanism: ~30% of IgA-deficient patients develop anti-IgA antibodies (IgG class). Standard blood products contain IgA → anti-IgA IgG triggers anaphylaxis. One of the few TRUE transfusion anaphylaxis mechanisms.',
       'Confirm: test for anti-IgA antibody level.',
       'Surgical preparation: (1) Notify blood bank: "IgA deficient, requires IgA-deficient products." (2) Request WASHED RBCs (removes >99% plasma IgA) or IgA-deficient donor units via Rare Donor Program. (3) IVIG is CONTRAINDICATED (contains trace IgA → anaphylaxis risk). (4) Anaphylaxis kit at bedside.',
       'American Red Cross Rare Donor Program maintains IgA-deficient donor units — allow 2+ weeks lead time for planned surgery.']},
    {phase:'Workup',
     narrative:'Anti-IgA antibodies: POSITIVE (high titer). Blood bank notified. IgA-deficient donor units crossmatched. Surgeon, anesthesia, blood bank all briefed.',
     question:'Complete the surgical safety plan.',
     keyPoints:['Pre-surgical checklist: (1) Anti-IgA documented prominently. (2) IgA-deficient or washed units available (minimum 2 for cholecystectomy). (3) Washed platelets/FFP from IgA-deficient donors if needed. (4) Anesthesia aware. (5) Crash cart bedside.',
       'If she ever needs immunoglobulin replacement: SCIG is safer than IVIG (less IgA, slower absorption). IgA-depleted IVIG products exist (Gammagard S/D).',
       'MedicAlert: "IgA deficiency with anti-IgA antibodies. Requires IgA-deficient or washed blood products." Critical for emergencies.',
       'Celiac connection: IgA deficiency → tTG-IgA and EMA-IgA are FALSELY NEGATIVE. Must use IgG-based tests (DGP-IgG, tTG-IgG) or biopsy.']},
    {phase:'Pivot',
     narrative:'Surgery uncomplicated, no transfusion needed. She asks about family risk and her recurrent sinus infections.',
     question:'Family screening and managing symptomatic IgA deficiency.',
     keyPoints:['Family: IgA deficiency has genetic predisposition (HLA-associated). First-degree relatives have ~7-20x increased risk. Screen siblings with IgA level.',
       'Her recurrent sinusitis: IgA is the dominant mucosal immunoglobulin. IgA deficiency → impaired mucosal defense → recurrent sinopulmonary infections. Treatment: treat infections normally (antibiotics as needed), optimize mucosal health (saline irrigation, nasal steroids), assess for concurrent IgG deficiency (some IgA-deficient patients progress to CVID — monitor IgG annually).',
       'DO NOT give IgA replacement — it does not exist as a standalone product, and IVIG/SCIG may contain enough IgA to trigger reactions in patients with anti-IgA antibodies.',
       'Vaccination: normal response expected to most vaccines (IgG and IgM are intact). May have poor mucosal IgA response to oral vaccines.',
       'Autoimmune screening: annual thyroid function (autoimmune thyroiditis is common), awareness of SLE symptoms.']},
    {phase:'Resolution',
     narrative:'She does well. Annual monitoring shows stable IgA <5, IgG normal. Sinusitis managed with nasal steroids and saline. Sister tested: IgA 12 (partial deficiency) — no anti-IgA antibodies, no transfusion precautions needed.',
     question:'Board pearls for IgA deficiency.',
     keyPoints:['IgA deficiency is the most common PID. Most are asymptomatic and found incidentally.',
       'Anti-IgA antibodies (in ~30%) cause transfusion anaphylaxis. Test before blood product exposure.',
       'IgA deficiency → falsely negative IgA-based celiac serologies. Use IgG-based tests.',
       'Monitor IgG annually — some patients evolve to CVID over years.',
       'IVIG is contraindicated if anti-IgA antibodies present. Use IgA-depleted products or SCIG if Ig replacement ever needed.',
       'Autoimmune associations: celiac, thyroiditis, SLE, RA, ITP, AIHA.']}
  ],
  teaching:'IgA deficiency: (1) Most common PID, usually asymptomatic. (2) Anti-IgA antibodies (30%) → transfusion anaphylaxis. Washed or IgA-deficient blood products required. (3) IgA-based celiac serologies are falsely negative — use IgG tests. (4) IVIG contraindicated with anti-IgA antibodies. (5) Monitor IgG annually (risk of progression to CVID). (6) MedicAlert bracelet is essential for emergency transfusion safety.'
},

// ═══ LATEX ALLERGY ═══
{
  id:'latex-allergy-comprehensive',
  title:'Latex Allergy — Healthcare Workers and Cross-Reactivity',
  category:'A/I Essential',
  tier:2, acuity:'clinic', setting:'Clinic',
  milestones:['PC1','PC3','MK2','SBP1'],
  patient:{name:'Maria Santos',age:'38F',
    vitals:{HR:76,RR:14,SpO2:99,Temp:'36.8°C',BP:'118/72'},
    cc:'OR nurse with hand dermatitis and 2 episodes of intraoperative urticaria/wheezing while scrubbed in.'},
  stages:[
    {phase:'Presentation',
     narrative:'38F, OR nurse × 12 years. Progressive hand dermatitis × 3 years — erythema, cracking, vesicles on dorsal hands. Worse during work weeks, improves on vacation. Two episodes in past 6 months of urticaria + wheezing within 30 minutes of gloving for surgery. First episode: diffuse hives, mild wheeze, resolved after removing gloves and taking antihistamine. Second episode: more severe — facial angioedema, significant bronchospasm, required epinephrine. She also reports oral itching after eating bananas and kiwi.',
     question:'An OR nurse with hand dermatitis + intraoperative anaphylaxis + oral allergy to tropical fruits. What are the TWO types of latex reactions, and which does she have?',
     keyPoints:['TWO distinct latex reactions: (1) Type IV (delayed, T-cell mediated): contact dermatitis from chemical ACCELERATORS in glove manufacturing (thiurams, carbamates, mercaptobenzothiazole). NOT from latex protein itself. Presents as hand eczema. Diagnosed by PATCH TESTING. (2) Type I (immediate, IgE-mediated): allergy to Hev b latex PROTEINS. Presents as urticaria, angioedema, bronchospasm, anaphylaxis within minutes of contact. Diagnosed by skin prick test or specific IgE.',
       'She has BOTH: Type IV (chronic hand dermatitis) AND Type I (intraoperative anaphylaxis). This is common — chronic glove dermatitis disrupts the skin barrier, facilitating IgE sensitization to latex proteins over time.',
       'Banana + kiwi oral symptoms = LATEX-FRUIT SYNDROME. Cross-reactivity between Hev b proteins and fruit proteins (banana, avocado, kiwi, chestnut are the "big four"). Also: potato, tomato, papaya, fig.',
       'Risk factors for latex allergy: healthcare workers (repeated exposure), rubber industry workers, spina bifida patients (multiple surgeries from birth), atopic individuals.',
       'The aerosol route matters: powdered latex gloves release latex protein particles into the air → inhalation → asthma/anaphylaxis. This is why she reacted while scrubbed in (inhaled latex particles from her own or colleagues\' gloves).']},
    {phase:'Workup',
     narrative:'Latex-specific IgE: 18.4 kUA/L (strongly positive). Skin prick to latex: 10mm wheal. Patch testing to rubber accelerators: positive to thiuram mix (2+) and carbamate mix (1+). Banana-specific IgE: 4.2 (positive). Kiwi: 3.8 (positive). Avocado: 2.1 (positive).',
     question:'She has confirmed Type I latex allergy + Type IV accelerator contact dermatitis + latex-fruit syndrome. Management plan?',
     keyPoints:['IMMEDIATE workplace modification: she CANNOT use latex gloves. Switch to NITRILE gloves (NOT vinyl — poor barrier protection for surgery). Her coworkers must ALSO switch to non-latex gloves in her OR (airborne latex particles from others\' gloves trigger her).',
       'Latex-free OR protocol: her institution must designate her cases as "latex-free" — remove ALL latex from the surgical suite (gloves, Foley catheters, IV tubing injection ports, tourniquets, vial stoppers). Many hospitals are now "latex-safe" by default — verify her institution\'s policy.',
       'Contact dermatitis: even with nitrile gloves, she may react to accelerators IN the nitrile gloves (thiurams/carbamates are used in nitrile manufacturing too). She may need ACCELERATOR-FREE nitrile gloves (available but more expensive: Biogel Skinsense, Ansell DermaPrene).',
       'Latex-fruit syndrome: counsel to AVOID banana, kiwi, avocado, and chestnut (highest cross-reactivity). Carry EpiPen — the fruit allergy can be severe. Other fruits to be cautious with: papaya, fig, passion fruit, pear.',
       'Occupational health: document as occupational allergy. She may qualify for accommodations under ADA (latex-free OR environment). Workers\' compensation may apply.',
       'MedicAlert: "Latex allergy — anaphylaxis risk. Latex-free surgical environment required."']},
    {phase:'Pivot',
     narrative:'Hospital switches to latex-free gloves hospital-wide (a trend nationally). Her hand dermatitis improves on accelerator-free nitrile gloves + emollients. No further intraoperative reactions. But she develops worsening asthma symptoms (cough, wheeze) over the next 6 months, even on latex-free protocol.',
     question:'New asthma in a latex-allergic healthcare worker. Could there be residual latex exposure?',
     keyPoints:['Occupational asthma from latex: even after removing latex gloves, latex protein can persist in the environment (fabric, upholstery, ventilation systems) for months. Requires thorough environmental remediation.',
       'Alternative explanation: she may have developed occupational asthma from OTHER operating room exposures (surgical smoke, glutaraldehyde, formaldehyde, methylmethacrylate).',
       'Workup: serial PEF monitoring (work-related pattern?), methacholine challenge (confirm asthma), occupational exposure assessment.',
       'If latex-related occupational asthma is confirmed and does not improve despite complete avoidance: she may need to leave the OR environment entirely. This is a career-altering diagnosis that requires sensitive counseling.',
       'The bigger picture: hospital-wide conversion to non-latex gloves has dramatically reduced new latex sensitization among healthcare workers. This is a public health SUCCESS story.']},
    {phase:'Resolution',
     narrative:'Asthma workup shows mild persistent asthma (likely pre-existing, unmasked by latex removal). Controlled on low-dose ICS. She continues working in the latex-free OR without further reactions. Hand dermatitis resolved.',
     question:'Board pearls for latex allergy.',
     keyPoints:['Type I (IgE, immediate) vs Type IV (T-cell, delayed contact dermatitis) — KNOW BOTH and that they can coexist.',
       'Latex-fruit syndrome: banana, avocado, kiwi, chestnut. Cross-reactive Hev b proteins.',
       'Powdered latex gloves are the PRIMARY route of sensitization (airborne protein). Removing powdered gloves from healthcare has been the most impactful intervention.',
       'Spina bifida patients: highest risk population (up to 68% latex allergy rate) due to multiple surgeries from infancy. ALL spina bifida patients should be treated as latex-allergic.',
       'Accelerator-free nitrile gloves exist for patients/workers with combined Type I + Type IV reactions.',
       'Declining incidence: new latex allergy is decreasing as hospitals switch to non-latex gloves. But existing latex-allergic patients need lifelong precautions.']}
  ],
  teaching:'Latex allergy: (1) Type I (IgE, anaphylaxis) vs Type IV (contact dermatitis from accelerators). (2) Latex-fruit cross-reactivity: banana, avocado, kiwi, chestnut. (3) Powdered gloves = airborne sensitization route. (4) Latex-free OR for Type I patients (including coworkers\' gloves). (5) Spina bifida = highest risk population. (6) Hospital-wide non-latex conversion has reduced new sensitization dramatically.'
}

];

// ═══ MECHANISMDX: A/I PHARMACOLOGY MODULE ═══
window.MECHANISMDX_PHARMACOLOGY = [
  { id:'ai-pharmacology', name:'A/I Pharmacology', icon:'💊', topics:[
    {id:'antihistamines',name:'Antihistamines',sub:'H1 inverse agonists: first-gen (diphenhydramine, hydroxyzine — sedating, anticholinergic) vs second-gen (cetirizine, loratadine, fexofenadine — non-sedating). H2 blockers (famotidine). Pharmacokinetics, updosing in urticaria, pregnancy safety.'},
    {id:'corticosteroids-moa',name:'Corticosteroid Mechanisms',sub:'Genomic (transcription factor modulation, NF-κB suppression) vs non-genomic (rapid membrane effects). Topical potency classes (I-VII), vehicle selection, tachyphylaxis, HPA axis suppression, steroid-sparing strategies.'},
    {id:'leukotriene-modifiers',name:'Leukotriene Modifiers',sub:'Montelukast (CysLT1 antagonist): mechanism, indications (asthma, EIA, AR), limited evidence in urticaria. Zileuton (5-LOX inhibitor): AERD rationale. FDA black box on montelukast (neuropsychiatric effects).'},
    {id:'immunotherapy-moa',name:'Immunotherapy Mechanisms',sub:'SCIT/SLIT: IgE to IgG4 class switching, Treg induction, T-cell anergy, mast cell/basophil desensitization. Dose-response, build-up vs maintenance, duration of disease modification.'},
    {id:'biologics-comprehensive',name:'Biologics in A/I — Complete Guide',sub:'Omalizumab (anti-IgE): asthma, CSU, CRSwNP, food allergy adjunct. Dupilumab (anti-IL-4Rα): AD, asthma, CRSwNP, EoE. Mepolizumab/benralizumab (anti-IL-5): asthma, EGPA, HES, CRSwNP. Tezepelumab (anti-TSLP): broad asthma. Mechanism, dosing, monitoring, side effects.'},
    {id:'immunosuppressants-ai',name:'Immunosuppressants in A/I',sub:'Cyclosporine (urticaria, AD), azathioprine (EGPA maintenance), methotrexate (EGPA, sarcoidosis), mycophenolate (CVID autoimmunity), cyclophosphamide (EGPA induction). Monitoring, toxicity, pregnancy category.'},
    {id:'epinephrine-pharmacology',name:'Epinephrine Pharmacology',sub:'Alpha-1 (vasoconstriction), beta-1 (chronotropy, inotropy), beta-2 (bronchodilation). IM vs IV dosing in anaphylaxis. Auto-injector devices (EpiPen, Auvi-Q, generic). Stability, storage, expiration.'},
    {id:'jak-inhibitors',name:'JAK Inhibitors in A/I',sub:'Mechanism: JAK1/2/3 and TYK2 signal transduction. Abrocitinib, upadacitinib (AD), baricitinib (AD), ruxolitinib (topical AD). Oral vs topical. Monitoring (CBC, lipids, VTE risk, infections). Comparison to biologics.'}
  ]}
];

})();
