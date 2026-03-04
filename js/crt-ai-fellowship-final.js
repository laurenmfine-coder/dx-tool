/* js/crt-ai-fellowship-final.js — Remaining Gap Closers
 * Completes ALL items from the A-J gap analysis.
 * CRT: AD skin of color, CRSwNP biologics, IgG subclass, vaccine reactions, HES, EIA, seminal plasma
 * Procedures: component-resolved diagnostics, spirometry interpretation
 * Counseling: food allergy 504 plans, wet wrap therapy
 */
(function(){
'use strict';

// ═══ CRT SCENARIOS ═══
window.CRT_AI_FINAL = [

// ── B. AD in Skin of Color ──
{
  id:'ad-skin-of-color',
  title:'Atopic Dermatitis in Skin of Color — Morphology & Disparities',
  category:'Atopic Dermatitis',
  tier:2, acuity:'clinic', setting:'Clinic',
  milestones:['PC1','MK1','ICS1','SBP1'],
  patient:{name:'Amara Osei',age:'8F',
    vitals:{HR:90,RR:18,SpO2:99,Temp:'36.7°C',BP:'94/58'},
    cc:'Itchy skin × 2 years, "dry patches." Two prior providers said it wasn\'t eczema. Mom brought photos.'},
  stages:[
    {phase:'Presentation',
     narrative:'8-year-old Black girl brought in by mother who says she\'s been itchy for 2 years. Two prior providers examined her and said her skin "didn\'t look like eczema." On exam (Fitzpatrick V-VI skin): widespread follicular-based papules on extensor surfaces and trunk, hyperpigmented lichenified plaques in flexural areas, papular eruption on the torso that is violaceous rather than erythematous. No classic "red" patches. The itch is severe — she scratches at night, has trouble concentrating in school. Mom has asthma; maternal aunt has AD.',
     question:'This IS atopic dermatitis. Why was it missed, and how does AD present differently in darker skin?',
     keyPoints:['AD in skin of color is UNDERDIAGNOSED because the classic teaching images show erythematous (red) patches on white skin. In dark skin, AD can present as: (1) Follicular/papular — follicular accentuation with tiny papules rather than confluent plaques. (2) Violaceous or hyperpigmented rather than erythematous — "redness" is not visible. (3) Lichenification that appears dark brown/black. (4) Extensor predominance (more common in Black children than the classic flexural pattern). (5) Perifollicular accentuation on the trunk.',
       'The two prior providers likely looked for the "textbook" erythematous flexural dermatitis and didn\'t recognize the follicular/papular variant.',
       'POST-INFLAMMATORY HYPERPIGMENTATION (PIH): in darker skin, AD leaves prominent dark patches even after inflammation resolves. PIH is a MAJOR concern for patients and families — it affects self-esteem, quality of life, and treatment adherence (some avoid steroids thinking they cause darkening, when actually it\'s untreated inflammation causing PIH).',
       'Atopic dermatitis DISPARITIES: Black children have higher prevalence (19.3% vs 16.1% white), higher severity, more ED visits, more missed school days, and LESS access to dermatology and allergy specialists. They are also underrepresented in clinical trials.',
       'Her family history (maternal asthma, aunt with AD) supports the atopic diathesis.']},
    {phase:'Workup',
     narrative:'You diagnose moderate AD based on distribution, morphology, pruritus, and family history. EASI score adapted for skin of color: 18 (moderate-severe — note that standard EASI may underestimate severity in darker skin because the erythema subscale is less reliable). She has not been on any treatment other than "lotion."',
     question:'How do you approach treatment, and what are the specific concerns in skin of color?',
     keyPoints:['Treatment is the SAME regardless of skin color — but counseling must be adapted:',
       'Moisturization: thick, fragrance-free cream or ointment. Avoid products with cocoa butter or shea butter if they contain fragrance (common in products marketed to Black skin). Petrolatum-based (Vaseline, Aquaphor) or ceramide-based are best.',
       'Topical steroids: address steroid phobia specifically. PIH is caused by UNTREATED inflammation, not by steroids. In fact, appropriate steroid use REDUCES PIH by controlling inflammation. However: chronic use of potent steroids CAN cause hypopigmentation in darker skin — use medium-potency for body, low-potency for face, and transition to calcineurin inhibitors for maintenance.',
       'Calcineurin inhibitors (tacrolimus, pimecrolimus): excellent maintenance option — no pigmentation risk, no skin atrophy.',
       'PIH treatment: once AD is controlled, PIH will gradually fade (months). Sunscreen accelerates improvement by preventing UV from darkening PIH. Azelaic acid can be added if PIH is distressing.',
       'Assessment tools: EASI and SCORAD underestimate severity in dark skin (erythema subscore is unreliable). Use POEM (patient-reported), DLQI/CDLQI (quality of life), and pruritus NRS which are not color-dependent.']},
    {phase:'Pivot',
     narrative:'After 8 weeks on mid-potency TCS + daily moisturizer + tacrolimus for face: itch significantly improved, active lesions clearing, but extensive PIH remains. Mom is concerned: "The dark spots are everywhere. Will they go away? Her classmates are starting to notice."',
     question:'Address the PIH concern and the psychosocial impact.',
     keyPoints:['PIH: reassure that it WILL fade now that inflammation is controlled, but this takes 3-6 months (sometimes longer in darker skin types). The best treatment for PIH is PREVENTING the inflammation that causes it — which they are now doing.',
       'Additional PIH measures: daily broad-spectrum sunscreen (SPF 30+, look for tinted formulations designed for darker skin tones), azelaic acid 15-20% for persistent PIH, vitamin C serum (adjunctive).',
       'Do NOT use hydroquinone in children (safety concerns, ochronosis risk with prolonged use).',
       'PSYCHOSOCIAL: AD in skin of color carries additional burden — visible PIH, hair and scalp involvement affecting hairstyling practices, and the frustration of prior misdiagnosis. Screen for: bullying, self-esteem issues, anxiety, depression.',
       'School: if she\'s missing school or unable to concentrate due to itch, this is an academic impact that may warrant a 504 plan (accommodations for chronic medical condition).',
       'Connect with support resources: National Eczema Association, Skin of Color Society, support groups for families managing AD.']},
    {phase:'Resolution',
     narrative:'At 6 months: AD well-controlled on tacrolimus maintenance + moisturizer. PIH fading significantly. She\'s sleeping through the night, doing well in school. Mom is now an advocate for AD awareness in their community.',
     question:'Key takeaways for the fellow.',
     keyPoints:['AD in skin of color teaching points: (1) Look for PAPULAR/FOLLICULAR morphology, not just classic eczematous patches. (2) Violaceous/hyperpigmented > erythematous in darker skin. (3) EASI/SCORAD underestimate severity — use patient-reported outcomes. (4) PIH is caused by inflammation, not steroids — treat aggressively to prevent it. (5) Steroid phobia is common and must be addressed directly. (6) Disparities in diagnosis, access, and clinical trial representation are real and actionable.',
       'This patient was misdiagnosed TWICE — a systems failure that disproportionately affects patients of color.',
       'As an allergist/immunologist, advocate for diverse skin images in teaching materials, use validated assessment tools that work across skin tones, and recognize that "classic" presentations in textbooks reflect a narrow demographic.']}
  ],
  teaching:'AD in skin of color: (1) Follicular/papular morphology, violaceous plaques, extensor predominance. (2) "Redness" is not visible — look for texture changes, lichenification, PIH. (3) EASI underestimates severity; use patient-reported outcomes. (4) PIH = inflammation → treat aggressively. Steroid phobia worsens outcomes. (5) Disparities: higher prevalence, more severe, less access, underrepresented in trials. (6) Advocate for diverse representation in medical education.'
},

// ── C. CRSwNP Biologics ──
{
  id:'crswnp-biologics',
  title:'CRSwNP Refractory to Surgery — Biologic Selection',
  category:'Rhinitis/Sinusitis',
  tier:2, acuity:'clinic', setting:'Clinic',
  milestones:['PC1','PC4','MK2','ICS1'],
  patient:{name:'Daniel Moreno',age:'46M',
    vitals:{HR:74,RR:14,SpO2:99,Temp:'36.8°C',BP:'128/78'},
    cc:'Nasal polyps recurred after 3rd surgery. Anosmia for 2 years. ENT says "no more surgeries." Wants biologic options.'},
  stages:[
    {phase:'Presentation',
     narrative:'46M with CRSwNP since age 35. Three endoscopic sinus surgeries (ESS) — polyps recurred within 6-18 months each time. On maximum medical therapy: mometasone nasal spray, budesonide sinus rinses, montelukast, short courses of oral steroids (3-4 per year). Complete anosmia for 2 years. SNOT-22 score: 68 (severe, normal <20). CT sinuses: Lund-Mackay score 22/24 (near-complete opacification). Comorbidities: moderate persistent asthma (on fluticasone/salmeterol), aspirin sensitivity (avoids all NSAIDs). Labs: eos 680, total IgE 280, FeNO 52.',
     question:'He has AERD with severe recalcitrant CRSwNP. What are the biologic options for nasal polyps?',
     keyPoints:['FDA-approved biologics for CRSwNP (as of current practice): (1) Dupilumab (anti-IL-4Rα) — FDA-approved for CRSwNP, moderate-severe AD, severe asthma, EoE. Blocks IL-4 AND IL-13. (2) Omalizumab (anti-IgE) — FDA-approved for CRSwNP and allergic asthma. (3) Mepolizumab (anti-IL-5) — FDA-approved for CRSwNP and severe eosinophilic asthma.',
       'For THIS patient (AERD + polyps + asthma + eosinophilia + elevated FeNO): DUPILUMAB is the strongest choice — it addresses ALL of his comorbidities simultaneously (polyps, asthma, eosinophilic inflammation).',
       'Dupilumab polyp data: reduces nasal polyp score by ~2.5 points, improves olfaction (60% regain some sense of smell), reduces need for surgery and oral steroids by ~75%, improves SNOT-22 significantly.',
       'Omalizumab: reduces polyp score ~1.5 points. May be better if allergic component is dominant. His IgE 280 qualifies.',
       'Mepolizumab: reduces polyp score ~1. Best if eosinophilia is the dominant driver.',
       'He should ALSO be considered for aspirin desensitization (AERD) in addition to biologic — the combination is the most comprehensive approach for AERD-driven polyps.']},
    {phase:'Workup',
     narrative:'You recommend dupilumab 300mg q2 weeks. Insurance requires prior authorization: documentation of failed ESS (×3), failed maximal medical therapy, polyp score, SNOT-22, CT evidence, and relevant biomarkers.',
     question:'He starts dupilumab. What are the expected outcomes and timeline?',
     keyPoints:['Timeline: nasal congestion improves within 2-4 weeks. Olfaction improvement is SLOWER — may take 2-4 months, and not all patients recover full smell. Maximum polyp reduction by 6-12 months.',
       'Monitor: SNOT-22 every 3 months (patient-reported outcome), nasal endoscopy q6 months (polyp score), olfaction testing (UPSIT), PFTs q6 months (also treating his asthma).',
       'Concomitant therapy: CONTINUE nasal steroids and budesonide rinses. Biologics work WITH, not instead of, topical therapy. Can attempt to wean oral steroid courses.',
       'Dupilumab side effects relevant to CRSwNP: injection site reactions (common, mild), nasopharyngitis (common), conjunctivitis (less common in CRSwNP than in AD indication).',
       'If dupilumab fails after 6 months: switch to omalizumab or mepolizumab. No head-to-head biologic trials exist for CRSwNP — selection is empirical and biomarker-guided.',
       'Aspirin desensitization: can be added to dupilumab for maximum polyp control in AERD. Aspirin 650mg BID reduces polyp recurrence, improves olfaction, and is synergistic with dupilumab.']},
    {phase:'Pivot',
     narrative:'At 6 months on dupilumab: SNOT-22 dropped from 68 to 22 (dramatic improvement). Polyp score reduced from 6 to 2. He can smell coffee for the first time in 2 years. Asthma also improved (stepped down to low-dose ICS). But he asks: "Is this forever? It\'s expensive."',
     question:'Duration of biologic therapy for CRSwNP and cost management.',
     keyPoints:['CRSwNP biologics: long-term therapy. Polyps recur in most patients within 3-6 months of stopping (similar to AD — the underlying T2 inflammation returns).',
       'No defined stopping point. Guidelines suggest: trial discontinuation after 12-24 months of excellent control. Most patients relapse and restart.',
       'Cost: dupilumab ~$36,000/year. Most insurance covers with prior authorization. Manufacturer copay assistance programs exist. For uninsured: Sanofi/Regeneron patient assistance.',
       'Cost-effectiveness: compare to the cost of repeated ESS ($15-25K per surgery), chronic oral steroids (side effects: osteoporosis, diabetes, adrenal suppression), and lost productivity from anosmia and chronic illness.',
       'If cost is prohibitive: omalizumab or mepolizumab may have different copay structures. Or trial aspirin desensitization as a lower-cost intervention (aspirin is cheap; the desensitization procedure is a one-time cost).',
       'NEVER stop dupilumab abruptly if he is also on it for asthma — asthma can flare. Taper asthma therapy separately if needed.']},
    {phase:'Resolution',
     narrative:'He continues dupilumab long-term + budesonide rinses + aspirin desensitization (added at 9 months). At 18 months: SNOT-22 = 14, olfaction 80% recovered, zero oral steroid courses, asthma on low-dose ICS only, no surgical discussions.',
     question:'Summary and board points.',
     keyPoints:['CRSwNP biologic selection: dupilumab is the most broadly effective (polyps + asthma + eosinophilic inflammation). Omalizumab for allergic-predominant. Mepolizumab for eosinophil-predominant.',
       'AERD: dupilumab + aspirin desensitization = maximum polyp control.',
       'Biologics have TRANSFORMED CRSwNP management — shifting from repeated surgery to medical management.',
       'Surgery is not obsolete — biologics reduce NEED for surgery but some patients still benefit from combined approach (surgery for debulking + biologic for maintenance).',
       'Board: know the three FDA-approved biologics for CRSwNP, their mechanisms, and how to choose based on comorbidities and biomarkers.']}
  ],
  teaching:'CRSwNP biologics: (1) Three FDA-approved: dupilumab (anti-IL-4Rα), omalizumab (anti-IgE), mepolizumab (anti-IL-5). (2) Dupilumab is most broadly effective — addresses polyps + asthma + eosinophilia. (3) AERD: dupilumab + aspirin desensitization is the most comprehensive strategy. (4) Biologics are long-term — polyps recur when stopped. (5) Continue topical therapy alongside biologics. (6) Olfaction recovery is possible but slow (2-4+ months).'
},

// ── E. IgG Subclass Deficiency ──
{
  id:'igg-subclass-deficiency',
  title:'IgG Subclass Deficiency — When to Treat vs Watch',
  category:'Immunology',
  tier:2, acuity:'clinic', setting:'Clinic',
  milestones:['PC1','PC3','MK1','MK2'],
  patient:{name:'Laura Simmons',age:'34F',
    vitals:{HR:70,RR:14,SpO2:99,Temp:'36.8°C',BP:'116/72'},
    cc:'Referred for "IgG subclass deficiency." Has 2-3 sinus infections per year. IgG2 is low.'},
  stages:[
    {phase:'Presentation',
     narrative:'34F referred by PCP who ordered IgG subclasses after 2-3 sinusitis episodes per year × 3 years (treated with antibiotics each time, all resolved). Total IgG: 820 (normal). IgA: 180 (normal). IgM: 95 (normal). IgG subclasses: IgG1 620 (normal), IgG2 85 (low, normal 150-640), IgG3 42 (normal), IgG4 18 (normal). She has no history of pneumonia, sepsis, or hospitalization for infection. No family history of immunodeficiency.',
     question:'Low IgG2 with a normal total IgG and mild sinusitis. Does she have a clinically significant immunodeficiency?',
     keyPoints:['IgG subclass deficiency is one of the MOST overdiagnosed and overinterpreted conditions in allergy/immunology.',
       'KEY PRINCIPLE: IgG subclass levels alone do NOT diagnose immunodeficiency. The question is FUNCTIONAL antibody competence — can she make antibodies to vaccine antigens?',
       'IgG2 is important for responses to polysaccharide antigens (pneumococcal capsular polysaccharides). Low IgG2 CAN be associated with recurrent sinopulmonary infections from encapsulated bacteria — but ONLY if accompanied by poor functional antibody responses.',
       '2-3 sinusitis episodes per year is NORMAL for an immunocompetent adult (average adult has 2-3 URIs/year, some of which become sinusitis). This does NOT suggest immunodeficiency.',
       'The PCP should NOT have ordered IgG subclasses without first demonstrating a clinical pattern suggestive of antibody deficiency (≥2 pneumonias, ≥2 serious infections, infections requiring IV antibiotics, unusual organisms).',
       'IgG subclass testing has WIDE normal ranges and poor interlaboratory reproducibility. A mildly low IgG2 in isolation is often clinically meaningless.']},
    {phase:'Workup',
     narrative:'You explain that IgG subclass levels alone don\'t diagnose immunodeficiency. To determine if her humoral immunity is functional, you check pneumococcal antibody responses.',
     question:'How do you assess functional antibody competence?',
     keyPoints:['Check pre-vaccination pneumococcal serotype-specific IgG titers (14 or 23 serotypes). If she was previously vaccinated, check EXISTING titers first.',
       'Her existing pneumococcal titers: 9/14 serotypes protective (>1.3 μg/mL). This demonstrates ADEQUATE functional antibody response to polysaccharide antigens despite the low IgG2.',
       'If her existing titers were poor (<70% protective): vaccinate with Pneumovax 23 (pure polysaccharide) and recheck titers 4-6 weeks later. Normal response = ≥70% of serotypes reach protective levels OR ≥4-fold rise.',
       'If post-vaccine titers remain poor: THEN she has specific antibody deficiency (SAD) — a form of primary immunodeficiency that may warrant treatment regardless of IgG subclass levels.',
       'Her total IgG is NORMAL (820). If total IgG were low (<600), the subclass deficiency would be more clinically significant because it reflects broader humoral dysfunction.',
       'In her case: normal total IgG + adequate pneumococcal titers + mild sinusitis = NO immunodeficiency. The low IgG2 is an incidental lab finding.']},
    {phase:'Pivot',
     narrative:'You reassure her that she does NOT have a clinically significant immunodeficiency. She is relieved but asks: "Then why do I keep getting sinus infections? And should I see you again?"',
     question:'Alternative explanations for her recurrent sinusitis and follow-up plan.',
     keyPoints:['Recurrent sinusitis causes (NOT immunodeficiency): (1) Allergic rhinitis (test if not already done — environmental allergens causing mucosal inflammation → sinus ostial obstruction). (2) Anatomic — deviated septum, concha bullosa, ostiomeatal complex narrowing. (3) Non-allergic rhinitis. (4) GERD (posterior laryngeal reflux → sinus inflammation). (5) Biofilm formation on sinus mucosa. (6) Smoking or secondhand smoke.',
       'Workup: skin prick testing for aeroallergens (if not done), nasal endoscopy (polyps? anatomic variants?), CT sinuses if recurrence continues despite medical management.',
       'If allergic: intranasal corticosteroid, allergen avoidance, consider SCIT.',
       'She does NOT need IgG replacement, does NOT need repeat IgG subclass testing, and does NOT need ongoing immunology follow-up for this finding.',
       'Send a letter to the referring PCP explaining: (1) Low IgG2 in isolation with normal functional antibody responses is NOT immunodeficiency, (2) IgG subclass testing should not be a first-line test for recurrent sinusitis, (3) The patient does not need immunology referral for this indication.',
       'This is an EDUCATIONAL opportunity — help the PCP understand the appropriate use of immunologic testing.']},
    {phase:'Resolution',
     narrative:'Allergy testing reveals dust mite allergy. Intranasal corticosteroid + dust mite avoidance measures initiated. Sinusitis frequency drops to 1/year.',
     question:'Teaching points on IgG subclass interpretation.',
     keyPoints:['IgG subclass deficiency: (1) IgG subclass levels ALONE are not diagnostic. FUNCTIONAL antibody responses (vaccine titers) are what matter. (2) Low IgG2 in isolation with normal total IgG and adequate vaccine responses = NOT immunodeficiency. (3) Indications for IgG replacement: recurrent SERIOUS infections (not just sinusitis) + poor functional antibody responses + documented clinical impact, regardless of subclass levels. (4) Specific antibody deficiency (SAD): poor vaccine responses with normal quantitative immunoglobulins — THIS is the clinically significant diagnosis. (5) IgG subclass testing is overused and misinterpreted — generates anxiety, unnecessary referrals, and occasionally inappropriate IgG replacement.',
       'Board pearl: IgG subclass levels vary by age and have wide normal ranges. IgG2 is the last subclass to mature (not adult levels until age 10-12). IgG4 is frequently undetectable in normal individuals.']}
  ],
  teaching:'IgG subclass deficiency: (1) Subclass levels alone DON\'T diagnose immunodeficiency — check FUNCTIONAL responses (vaccine titers). (2) Low IgG2 + normal total IgG + adequate vaccine responses = NOT immunodeficiency. (3) Specific antibody deficiency (poor vaccine responses) is the real diagnosis to look for. (4) IgG subclass testing is overused and overinterpreted. (5) Recurrent sinusitis is more often allergic, anatomic, or inflammatory than immunodeficient.'
},

// ── F. Vaccine Reactions ──
{
  id:'vaccine-allergy-evaluation',
  title:'Vaccine Reactions — Egg Allergy, PEG, Polysorbate',
  category:'Special Populations',
  tier:2, acuity:'clinic', setting:'Clinic',
  milestones:['PC1','PC3','MK2','SBP1'],
  patient:{name:'Sophia Reeves',age:'28F',
    vitals:{HR:76,RR:14,SpO2:99,Temp:'36.8°C',BP:'118/72'},
    cc:'Egg-allergic, history of anaphylaxis to first COVID mRNA vaccine dose. Needs flu shot and second COVID dose. PCP won\'t give either.'},
  stages:[
    {phase:'Presentation',
     narrative:'28F with IgE-mediated egg allergy (anaphylaxis age 5, positive skin test, avoids all egg). She received her first mRNA COVID vaccine (Pfizer) 2 years ago and developed anaphylaxis 10 minutes post-injection (urticaria, throat tightness, hypotension — treated with epinephrine, recovered). She has NOT received any vaccine since. Her PCP refuses to give influenza vaccine ("because of egg allergy") and refuses COVID booster ("because of the reaction"). She is now pregnant (12 weeks) and needs both.',
     question:'Address both misconceptions — egg allergy and flu vaccine, AND COVID vaccine anaphylaxis.',
     keyPoints:['EGG ALLERGY AND FLU VACCINE: Current guidelines (ACIP, AAAAI, ACAAI): ALL patients with egg allergy, INCLUDING those with a history of anaphylaxis to egg, can receive the influenza vaccine (inactivated injection) WITHOUT special precautions. No observation period beyond the standard 15 minutes. No need for allergist administration.',
       'The amount of egg protein (ovalbumin) in flu vaccines is <1 mcg per dose — far below the threshold to trigger a reaction even in severely egg-allergic individuals. Multiple large studies (thousands of egg-allergic patients) confirm safety.',
       'Cell-based (Flucelvax) and recombinant (Flublok) flu vaccines contain NO egg protein at all — can be used if desired, but standard egg-based flu vaccine is also safe.',
       'COVID VACCINE ANAPHYLAXIS: This is a SEPARATE issue from egg allergy. mRNA COVID vaccines contain NO egg. The likely culprit for her reaction was PEG (polyethylene glycol 2000) — an excipient in both Pfizer and Moderna mRNA vaccines.',
       'PEG allergy is rare but real. Cross-reactivity with polysorbate 80 (found in many other vaccines and medications) is possible but NOT guaranteed (~10-20% cross-react).',
       'She needs allergy evaluation: PEG and polysorbate skin testing to guide safe vaccine selection.']},
    {phase:'Workup',
     narrative:'You administer the flu vaccine (standard egg-based IIV) in your office with 15-min observation — she tolerates it perfectly. For the COVID vaccine reaction, you perform PEG and polysorbate skin testing. PEG 3350 skin prick: 8mm wheal (POSITIVE). Polysorbate 80 skin prick: 3mm (equivocal, same as negative control). Polysorbate 80 intradermal: 5mm (weakly positive).',
     question:'PEG positive, polysorbate equivocal. What does this mean for her remaining vaccines?',
     keyPoints:['PEG is confirmed as the likely culprit for her COVID vaccine anaphylaxis. PEG is in BOTH Pfizer (PEG 2000) and Moderna (PEG 2000) mRNA vaccines.',
       'Polysorbate 80 is in the J&J/Novavax COVID vaccines and many other vaccines (Tdap, HPV, flu, hepatitis B, etc.). Her polysorbate testing is equivocal — suggests possible but not definite cross-reactivity.',
       'Options for COVID vaccination: (1) Novavax (protein subunit) contains polysorbate 80, NOT PEG. Given her equivocal polysorbate testing, this can be given as a GRADED challenge (1/10 dose → full dose) in a monitored setting. (2) If she does NOT tolerate polysorbate → she may not be able to receive any current COVID vaccine. Provide a medical exemption letter.',
       'For OTHER vaccines containing polysorbate 80 (Tdap, HPV, etc.): graded challenge approach in a monitored setting, given her equivocal testing.',
       'PEG in everyday products: PEG is in many medications (MiraLAX = PEG 3350, injectable corticosteroids, some contrast agents), cosmetics, and personal care products. Counsel on reading labels and alerting providers.',
       'She is pregnant — Tdap at 27-36 weeks is recommended. Since Tdap contains polysorbate 80, she will need a graded challenge for that as well.']},
    {phase:'Pivot',
     narrative:'You perform a graded Novavax challenge (1/10 dose → observe 30min → remaining 9/10 dose → observe 60min). She tolerates it without reaction. She asks about future vaccines for herself and her baby.',
     question:'Long-term vaccine planning with PEG allergy.',
     keyPoints:['Document: CONFIRMED PEG ALLERGY (skin test positive, anaphylaxis to PEG-containing mRNA vaccine). Polysorbate 80 — tolerated via graded challenge (Novavax).',
       'Future COVID boosters: use Novavax (polysorbate-based) or any PEG-free formulation. AVOID mRNA vaccines (Pfizer, Moderna) unless PEG-free versions become available.',
       'Other PEG-containing medications to AVOID: MiraLAX, Golytely (bowel prep), some injectable steroids (methylprednisolone acetate contains PEG), some contrast agents. Provide a comprehensive list.',
       'Polysorbate-containing vaccines: she TOLERATED polysorbate via challenge — Tdap, HPV, hepatitis B, and other polysorbate-containing vaccines can be given with standard observation (30 min).',
       'Her infant: infant vaccines (DTaP, IPV, HepB, etc.) are for the BABY, not her — no PEG concern for the infant. Standard vaccination schedule.',
       'MedicAlert: PEG allergy documented. Carry the allergy card.']},
    {phase:'Resolution',
     narrative:'Flu vaccine and Novavax COVID booster completed. Tdap given at 28 weeks via graded challenge — tolerated. Healthy pregnancy. Baby born, vaccinated on standard schedule.',
     question:'Board summary.',
     keyPoints:['Vaccine allergy evaluation: (1) Egg allergy (even anaphylaxis) is NOT a contraindication to any vaccine including influenza. This myth persists despite clear guidelines. (2) COVID vaccine anaphylaxis → evaluate for PEG allergy (mRNA vaccines) or polysorbate allergy (adenoviral/protein vaccines). (3) PEG and polysorbate have ~10-20% cross-reactivity — test for both. (4) Graded vaccine challenge is safe and effective when performed by allergist in monitored setting. (5) PEG is ubiquitous in medications and personal products — counsel broadly. (6) Medical exemption letters should be rare and specific (not blanket "allergic to all vaccines").']}
  ],
  teaching:'Vaccine allergy: (1) Egg allergy is NOT a contraindication to flu vaccine — period. (2) COVID vaccine anaphylaxis is usually PEG-related. Skin test PEG and polysorbate. (3) PEG-polysorbate cross-reactivity ~10-20%. (4) Graded vaccine challenge is the solution, not avoidance. (5) PEG is in MiraLAX, bowel preps, some injectables — counsel broadly. (6) Allergists should ENABLE vaccination, not block it.'
},

// ── G. HES ──
{
  id:'hypereosinophilic-syndrome',
  title:'Hypereosinophilic Syndrome (HES) Workup',
  category:'Board Deep Cuts',
  tier:3, acuity:'inpatient', setting:'Mixed',
  milestones:['PC1','PC3','MK1','MK2'],
  patient:{name:'Victor Huang',age:'42M',
    vitals:{HR:96,RR:18,SpO2:96,Temp:'37.2°C',BP:'132/82'},
    cc:'Eosinophils 6,800 on routine labs. Cough, fatigue, rash. No known allergies. No travel.'},
  stages:[
    {phase:'Presentation',
     narrative:'42M found to have eosinophils 6,800 (28%) on routine labs ordered by PCP for fatigue. Also has: dry cough × 3 months, pruritic papular rash on trunk × 2 months, and intermittent chest tightness. No asthma, no allergies, no travel history, no new medications. No weight loss, no fevers. Stool O&P negative × 3. Strongyloides IgG negative. HIV negative. ANA negative. ANCA negative. CXR: bilateral patchy ground-glass opacities. Troponin: 0.08 (mildly elevated).',
     question:'Persistent eosinophilia >1,500 with end-organ involvement. What\'s the systematic workup?',
     keyPoints:['HES definition: blood eosinophils >1,500/μL on ≥2 occasions (≥1 month apart) OR tissue eosinophilia, PLUS eosinophil-mediated organ damage, AFTER excluding secondary causes.',
       'The MNEMONIC for eosinophilia workup — "CHINA DAMP": Connective tissue disease, Helminth/parasites, Idiopathic, Neoplastic (hematologic), Adrenal insufficiency, Drug reaction, Allergic/atopic, Myeloproliferative/clonal, Pulmonary (eosinophilic pneumonia, ABPA).',
       'His workup so far has excluded: parasites (O&P × 3, Strongyloides negative), HIV, autoimmune (ANA/ANCA negative), no drugs. No allergic history.',
       'Red flags for CLONAL (neoplastic) HES: no allergic history, organ damage (elevated troponin = cardiac, lung infiltrates = pulmonary), no obvious secondary cause.',
       'CRITICAL next steps: (1) FIP1L1-PDGFRA fusion gene (peripheral blood FISH or RT-PCR) — defines myeloid HES, responsive to imatinib. (2) Bone marrow biopsy with eosinophil morphology, cytogenetics, and flow cytometry. (3) Serum tryptase (elevated in myeloproliferative HES). (4) Vitamin B12 (elevated in myeloproliferative). (5) Echocardiogram and cardiac MRI (eosinophilic myocarditis). (6) PFTs (restrictive or obstructive pattern with eosinophilic lung disease).',
       'The mildly elevated troponin is CONCERNING — eosinophilic myocarditis/endomyocardial fibrosis is the #1 cause of morbidity and mortality in HES.']},
    {phase:'Workup',
     narrative:'FIP1L1-PDGFRA: NEGATIVE. Bone marrow: hypercellular with 35% eosinophils, no blast excess, no dysplasia, no clonal T-cell population. Tryptase: 8.2 (normal). B12: 380 (normal). Cardiac MRI: patchy late gadolinium enhancement in the subendocardium (consistent with early eosinophilic myocarditis). Echo: EF 50% (mildly reduced). PFTs: mild restriction.',
     question:'FIP1L1-PDGFRA negative, no clonal T cells, marrow without overt neoplasm. Diagnosis?',
     keyPoints:['This is IDIOPATHIC HES (iHES): persistent eosinophilia with end-organ damage (cardiac, pulmonary, skin), no identifiable secondary cause, and no clonal marker.',
       'HES classification: (1) Myeloproliferative (M-HES): FIP1L1-PDGFRA+, splenomegaly, elevated B12/tryptase → IMATINIB is curative. (2) Lymphocytic (L-HES): aberrant T-cell clone (CD3-CD4+ or TCR rearrangement) producing IL-5 → risk of T-cell lymphoma. (3) Idiopathic (iHES): no identified cause — most common. (4) EGPA-type: meets EGPA criteria. (5) Organ-restricted: eosinophilic GI disease, eosinophilic pneumonia.',
       'His cardiac involvement makes this URGENT. Eosinophilic myocarditis can progress to endomyocardial fibrosis → restrictive cardiomyopathy → heart failure → intracardiac thrombus → embolic stroke.',
       'Treatment for iHES with cardiac involvement: (1) HIGH-DOSE corticosteroids immediately (prednisone 1mg/kg) to reduce eosinophils and halt cardiac damage. (2) If steroid-dependent: mepolizumab (anti-IL-5, FDA-approved for HES), (3) If refractory: hydroxyurea, interferon-α, or imatinib trial (even in PDGFRA-negative, some respond).',
       'Mepolizumab 300mg q4 weeks: FDA-approved for HES (higher dose than asthma). Reduces eosinophils, allows steroid taper, reduces flares by ~50%.']},
    {phase:'Pivot',
     narrative:'Prednisone 60mg daily initiated. Within 2 weeks: eosinophils normalize (180), troponin normalizes, cough resolves, rash clearing. But at 3 months, as you taper below 20mg, eosinophils rise to 3,200.',
     question:'Steroid-dependent HES. Management?',
     keyPoints:['Steroid-dependent iHES is common. Long-term prednisone → unacceptable side effects (osteoporosis, diabetes, adrenal suppression, infections).',
       'Add mepolizumab 300mg SC q4 weeks as steroid-sparing. In the HES trial, mepolizumab reduced steroid dose by 50% and flare rate by 50%.',
       'Alternative/add-on steroid-sparing agents: hydroxyurea (500mg BID, monitor CBC), interferon-α (limited by side effects), benralizumab (anti-IL-5Rα, depletes eosinophils more completely than mepolizumab — used off-label for HES with case series support).',
       'Cardiac monitoring: serial echo and cardiac MRI. If EF worsens → consider anticoagulation (eosinophilic endomyocardial fibrosis increases intracardiac thrombus risk).',
       'If eosinophils remain refractory to mepolizumab + steroids: re-evaluate for evolving clonal disease. Repeat bone marrow with expanded genetics (next-gen sequencing for KIT, JAK2, other myeloid mutations).']},
    {phase:'Resolution',
     narrative:'Mepolizumab 300mg q4wk + prednisone taper. At 12 months: off prednisone, eos stable at 400, cardiac MRI improved (less enhancement), EF 55%, asymptomatic.',
     question:'Long-term and board points.',
     keyPoints:['HES requires lifelong monitoring even when controlled — eosinophilia can recur, organ damage can progress silently, and clonal disease can evolve years later.',
       'Monitoring: eosinophil count q3 months, annual echo, cardiac MRI as indicated, annual bone marrow if any clonal concern.',
       'Board framework: (1) Eosinophilia >1,500 → exclude secondary causes (parasites, drugs, allergy, autoimmune). (2) If no secondary cause → bone marrow + FIP1L1-PDGFRA + T-cell phenotyping. (3) PDGFRA+ → imatinib (curative). (4) PDGFRA- with organ damage → steroids + mepolizumab. (5) Cardiac involvement is the #1 cause of morbidity/mortality. (6) HES is a SPECTRUM — some patients evolve from idiopathic to myeloproliferative over time.']}
  ],
  teaching:'HES: (1) Eosinophils >1,500 + organ damage + exclusion of secondary causes. (2) FIP1L1-PDGFRA is the FIRST test — if positive, imatinib is curative. (3) Cardiac involvement (#1 cause of death): troponin, echo, cardiac MRI. (4) Idiopathic HES: steroids first, mepolizumab 300mg for steroid-sparing (FDA-approved). (5) Classify: myeloproliferative (clonal), lymphocytic (T-cell driven), idiopathic, organ-restricted. (6) Lifelong monitoring — clonal disease can evolve.'
},

// ── G. Exercise-Induced Anaphylaxis ──
{
  id:'exercise-induced-anaphylaxis',
  title:'Exercise-Induced Anaphylaxis (EIA)',
  category:'Board Deep Cuts',
  tier:2, acuity:'clinic', setting:'Clinic',
  milestones:['PC1','PC3','MK1','MK2'],
  patient:{name:'Megan Calloway',age:'24F',
    vitals:{HR:68,RR:14,SpO2:99,Temp:'36.8°C',BP:'108/66'},
    cc:'3 episodes of anaphylaxis during exercise over 2 years. No food trigger identified. All during running.'},
  stages:[
    {phase:'Presentation',
     narrative:'24F collegiate cross-country runner. Episode 1: 20 min into a race, developed urticaria, throat tightness, hypotension. Treated with EpiPen, recovered. Episode 2: 30 min into a training run, similar reaction. Episode 3: 15 min into a gym workout (treadmill), urticaria and near-syncope. She has been extensively questioned about food intake before each episode — no consistent food trigger identified. She sometimes runs without any reaction. No NSAID use. No menstrual pattern correlation. Baseline tryptase: 4.2 (normal). Skin testing to common food allergens: all negative. Omega-5 gliadin: negative.',
     question:'No food trigger = this is EIA (not food-dependent). How does EIA differ from FDEIA?',
     keyPoints:['Exercise-induced anaphylaxis (EIA): anaphylaxis triggered by exercise ALONE, without a required food cofactor. Distinguished from FDEIA (food-dependent) where a specific food must be consumed before exercise.',
       'Her extensive food evaluation (skin testing negative, omega-5 gliadin negative, no consistent food pattern) supports EIA rather than FDEIA.',
       'EIA characteristics: unpredictable (same exercise may or may not trigger reaction), typically occurs with vigorous exercise (running > walking), often starts with warmth/flushing → urticaria → progresses to anaphylaxis if exercise continues.',
       'Mechanism: incompletely understood. Likely mast cell activation triggered by exercise-induced physiologic changes (increased body temperature, altered blood flow, mast cell degranulation). NOT IgE-mediated in most cases.',
       'Normal baseline tryptase (4.2) argues against underlying mastocytosis — important to check.',
       'Cofactors that LOWER the threshold (even in EIA without food trigger): NSAIDs, alcohol, menstruation, extreme heat/humidity, sleep deprivation, emotional stress.']},
    {phase:'Workup',
     narrative:'Diagnosis: EIA without identified food trigger. She is devastated — running is her identity and her scholarship. She asks: "Do I have to stop running?"',
     question:'Management — can she keep running, and how do you reduce risk?',
     keyPoints:['She does NOT have to stop exercising entirely, but she must modify her approach:',
       '(1) NEVER exercise alone. Always with a partner who knows how to use epinephrine.',
       '(2) Carry EpiPen during ALL exercise — belt holster or partner carries.',
       '(3) STOP immediately at the FIRST sign of symptoms (warmth, flushing, pruritus, urticaria). Early cessation often prevents progression to full anaphylaxis.',
       '(4) Avoid cofactors before exercise: no NSAIDs for 24h, no alcohol for 12h, avoid extreme heat/humidity.',
       '(5) Warm up gradually — some patients can "run through" mild symptoms with a very slow warmup (controversial and not universally recommended).',
       '(6) Consider premedication: cetirizine 10-20mg 1h before exercise reduces urticaria but does NOT reliably prevent anaphylaxis. Montelukast may help as adjunct.',
       '(7) She CAN compete, but the coaching staff, athletic trainers, and team physician must all be aware and have epinephrine available.',
       'Her running scholarship and career are NOT over — but she must accept that the risk is unpredictable and cannot be eliminated.']},
    {phase:'Pivot',
     narrative:'She follows all precautions. Over the next year: 2 mild episodes (flushing + urticaria) that she caught early by stopping immediately — no progression to anaphylaxis. But she also had one episode where she developed throat tightness before she noticed skin symptoms (a "skin-skipping" episode).',
     question:'Skin-skipping anaphylaxis — what does this mean for management?',
     keyPoints:['Some EIA episodes skip the cutaneous phase and go directly to respiratory or cardiovascular symptoms. This makes early recognition harder.',
       'She needs to broaden her "stop" criteria: not just skin changes, but also any throat tightness, difficulty breathing, dizziness, chest tightness, or GI symptoms during exercise → STOP immediately and prepare EpiPen.',
       'Consider exercise treadmill challenge in a CONTROLLED setting (hospital, IV access, resuscitation equipment) to characterize her threshold and symptoms. This can help her understand her personal warning signs.',
       'Omalizumab: case reports and small series suggest omalizumab may reduce EIA frequency and severity. Mechanism: reduces mast cell surface IgE and FcεRI expression, making mast cells less reactive. This is OFF-LABEL but may be considered for severe, frequent EIA affecting quality of life and career.',
       'Psychological support: athletes with EIA often develop exercise anxiety and avoidance behavior. Sports psychology referral can help.',
       'Document for the athletic program: medical action plan, EpiPen at all practices/competitions, athletic trainer trained in anaphylaxis recognition.']},
    {phase:'Resolution',
     narrative:'With precautions, premedication, and early cessation protocol, she completes her collegiate career with only mild controlled episodes. She transitions to recreational running post-graduation.',
     question:'Board summary.',
     keyPoints:['EIA: (1) Exercise alone triggers anaphylaxis (no food cofactor). (2) Unpredictable — same exercise can be safe one day and trigger reaction the next. (3) Cofactors lower threshold: NSAIDs, alcohol, heat, menstruation. (4) STOP at first symptoms — early cessation prevents progression. (5) Carry EpiPen ALWAYS. Never exercise alone. (6) Does NOT require stopping exercise — requires modification and preparedness.',
       'Distinguish from FDEIA: specific food must be consumed 2-6h before exercise. Omega-5 gliadin (wheat) is most common. EIA has no food trigger.',
       'Distinguish from cholinergic urticaria: small punctate wheals (2-4mm) triggered by increased core body temperature (exercise, hot showers, emotional stress). Usually no anaphylaxis.',
       'Omalizumab: emerging therapy for severe/refractory EIA.']}
  ],
  teaching:'EIA: (1) Anaphylaxis from exercise alone — no food trigger. (2) Unpredictable — modify exercise, never exercise alone, carry EpiPen. (3) STOP at first symptoms (flushing, urticaria, ANY systemic symptom). (4) Cofactors: avoid NSAIDs, alcohol, extreme heat. (5) Does NOT require stopping exercise. (6) Distinguish from FDEIA (food-dependent) and cholinergic urticaria (small wheals, no anaphylaxis).'
}

];

// ═══ ADDITIONAL PROCEDURES ═══
window.AI_PROCEDURES_FINAL = [
  {
    id:'component-resolved-diagnostics',
    title:'Component-Resolved Diagnostics (CRD) Interpretation',
    category:'Procedure',
    milestones:['MK1','MK2','PC3'],
    steps:[
      {step:'Overview',
       content:'CRD uses purified or recombinant allergen COMPONENTS (individual proteins) rather than whole allergen extracts. This provides higher specificity than standard specific IgE testing and helps predict clinical reactivity, cross-reactivity, and severity.',
       task:'Understand when CRD adds value over standard IgE testing.'},
      {step:'Peanut CRD',
       content:'Patient: 5F with positive peanut SPT (8mm) and peanut-specific IgE 12 kUA/L. Never eaten peanut. Is she at risk for clinical reaction?\n\nComponent results:\n• Ara h 1 (vicilin storage protein): 0.4 kUA/L (low positive)\n• Ara h 2 (2S albumin): 15.2 kUA/L (STRONGLY positive)\n• Ara h 3 (legumin): 0.2 kUA/L (low)\n• Ara h 8 (PR-10, birch cross-reactive): <0.10 (negative)\n• Ara h 9 (LTP): <0.10 (negative)',
       task:'Interpret: Ara h 2 is the KEY component. Positive Ara h 2 (especially >2 kUA/L) has ~95% PPV for clinical peanut allergy. She is HIGHLY LIKELY to react to peanut. Ara h 8 (birch cross-reactive) is negative — this is NOT just birch pollen cross-reactivity. Ara h 9 (LTP) negative — not at risk for LTP syndrome (Mediterranean pattern). RECOMMENDATION: avoid peanut, prescribe EpiPen. Consider OIT candidacy.'},
      {step:'Tree Nut CRD — Cross-Reactivity',
       content:'Same patient also has positive cashew IgE (5.2) and walnut IgE (3.8). Is she allergic to these too, or is it cross-reactivity with peanut?\n\nComponents:\n• Ana o 3 (cashew 2S albumin): 4.8 kUA/L (positive)\n• Jug r 1 (walnut 2S albumin): 0.3 kUA/L (low)\n• CCD (cross-reactive carbohydrate determinant): 0.8 kUA/L (positive)',
       task:'Interpret: Ana o 3 positive = genuine cashew allergy. Jug r 1 low = likely cross-reactive (CCD positive confirms non-specific cross-reactivity is contributing). RECOMMENDATION: avoid cashew (genuinely allergic). Walnut: likely can tolerate — consider supervised OFC to confirm.'},
      {step:'Milk CRD — Baked Milk Tolerance',
       content:'Patient: 3M with milk allergy. Parents ask if he can have baked milk (e.g., muffins). Milk-specific IgE: 8.5 kUA/L.\n\nComponents:\n• Bos d 4 (α-lactalbumin): 1.2 kUA/L\n• Bos d 5 (β-lactoglobulin): 2.4 kUA/L\n• Bos d 8 (casein): 0.8 kUA/L (low)',
       task:'Interpret: Bos d 8 (casein) is HEAT-STABLE — high casein IgE predicts reactions to baked milk. His casein is LOW (0.8), while whey proteins (Bos d 4, 5) are heat-LABILE (destroyed by baking). RECOMMENDATION: he is a good candidate for a baked milk challenge. If Bos d 8 were >5 kUA/L, baked milk would likely NOT be tolerated.'},
      {step:'Shrimp CRD — Tropomyosin vs Dust Mite Cross-Reactivity',
       content:'Patient: 40M, dust mite allergic, positive shrimp IgE (4.2) but has eaten shrimp his whole life without reaction. Is he really allergic?\n\nComponents:\n• Pen a 1 (tropomyosin): 3.8 kUA/L (positive)\n• Der p 10 (dust mite tropomyosin): 4.1 kUA/L (positive)',
       task:'Interpret: Tropomyosin is a pan-allergen shared between dust mites, shrimp, cockroach, and other invertebrates. His shrimp IgE is driven by CROSS-REACTIVITY with dust mite tropomyosin, NOT genuine shrimp allergy (he tolerates shrimp clinically). RECOMMENDATION: he can continue eating shrimp. This is a FALSE POSITIVE on standard testing caused by tropomyosin cross-reactivity. CRD explains the discrepancy between positive test and clinical tolerance.'}
    ],
    teaching:'CRD interpretation: (1) Ara h 2 >2 kUA/L = ~95% PPV for clinical peanut allergy. Ara h 8 positive + Ara h 2 negative = likely birch cross-reactivity only. (2) Bos d 8 (casein) predicts baked milk tolerance — low casein = good candidate for baked challenge. (3) Tropomyosin (Pen a 1, Der p 10) is a cross-reactive pan-allergen — positive shrimp IgE in a dust mite allergic patient who tolerates shrimp is a false positive. (4) CRD increases SPECIFICITY and reduces unnecessary avoidance.'
  },
  {
    id:'spirometry-trainer',
    title:'Spirometry Interpretation for Allergists',
    category:'Procedure',
    milestones:['PC3','MK1'],
    steps:[
      {step:'Basic Pattern Recognition',
       content:'Three patterns: OBSTRUCTIVE (FEV1/FVC <0.70 or <LLN), RESTRICTIVE (FVC reduced, FEV1/FVC normal or elevated), MIXED (both reduced). For allergists: most relevant is obstructive (asthma) and assessing reversibility.',
       task:'Identify the pattern from FEV1, FVC, and FEV1/FVC.'},
      {step:'Case 1: Classic Asthma',
       content:'28F with intermittent wheeze. Pre-bronchodilator: FEV1 2.4L (72% predicted), FVC 3.8L (96%), FEV1/FVC 0.63 (reduced). Post-bronchodilator (albuterol 400mcg): FEV1 3.1L (93%), FVC 3.9L, FEV1/FVC 0.79.',
       task:'Obstructive pattern with SIGNIFICANT bronchodilator reversibility (FEV1 improved 700mL = 29%, threshold is ≥200mL AND ≥12%). Confirms asthma. Note: normal FVC argues against restriction.'},
      {step:'Case 2: Fixed Obstruction',
       content:'62M, former smoker, on LABA/ICS. Pre-BD: FEV1 1.6L (48%), FVC 3.2L (78%), FEV1/FVC 0.50. Post-BD: FEV1 1.7L (51%), FVC 3.3L, FEV1/FVC 0.52.',
       task:'Obstructive with MINIMAL reversibility (100mL = 6% change). This is FIXED obstruction — consistent with COPD or asthma-COPD overlap (ACO). In an A/I context: if this patient has eosinophilia/atopy, consider ACO and add ICS. If no allergic features, primarily COPD — refer to pulmonology.'},
      {step:'Case 3: Severe Asthma on Biologic',
       content:'48M on dupilumab for severe eosinophilic asthma + CRSwNP. Baseline FEV1 (before biologic): 62% predicted. After 6 months on dupilumab: FEV1 78% predicted.',
       task:'16% absolute improvement in FEV1 — this is a meaningful clinical response to biologic therapy. Most asthma biologics improve FEV1 by 5-15% absolute. Use serial FEV1 to track biologic efficacy alongside symptom scores (ACT), exacerbation rates, and biomarkers.'},
      {step:'Case 4: Normal Spirometry with Symptoms',
       content:'22F with exercise-triggered cough and chest tightness. Spirometry at rest: FEV1 3.4L (98%), FVC 3.8L (99%), FEV1/FVC 0.89. Post-BD: FEV1 3.5L (no significant change). All normal.',
       task:'Normal resting spirometry does NOT rule out asthma. Next steps: (1) Methacholine challenge (provocation test) — a positive result (PC20 <4 mg/mL) confirms airway hyperresponsiveness. (2) Exercise challenge (6-8 min maximal exercise, repeat spirometry at 5, 10, 15, 20 min post-exercise — ≥10% fall in FEV1 = positive). (3) FeNO — if >50 ppb, supports eosinophilic airway inflammation even with normal spirometry.'}
    ],
    teaching:'Spirometry for allergists: (1) Obstructive = FEV1/FVC <0.70 (or <LLN). (2) Reversibility = ≥200mL AND ≥12% improvement post-bronchodilator confirms asthma. (3) Fixed obstruction → COPD or remodeled asthma. (4) Normal resting spirometry doesn\'t exclude asthma — use methacholine or exercise challenge. (5) Serial FEV1 tracks biologic response. (6) FeNO complements spirometry for T2 assessment.'
  }
];

// ═══ ADDITIONAL COUNSELING ═══
window.AI_COUNSELING_FINAL = [
  {
    id:'counseling-504-plan',
    title:'Food Allergy in Schools — 504 Plans',
    milestones:['ICS1','SBP1'],
    setting:'Parents of 6-year-old entering kindergarten with peanut and tree nut allergies.',
    patient:'6M with peanut (anaphylaxis) and cashew (urticaria) allergies. Parents anxious about school safety. School nurse has never managed food allergy.',
    keyMessages:[
      'SECTION 504: food allergy qualifies as a disability under Section 504 of the Rehabilitation Act and ADA. Schools MUST provide reasonable accommodations. A 504 plan is a LEGAL document.',
      'WHAT TO INCLUDE: (1) Allergen avoidance strategies (peanut/nut-free table or classroom, no shared foods/utensils, hand-washing after meals), (2) Emergency action plan (specific to this child, with photo, signed by physician), (3) Epinephrine auto-injector storage and access (unlocked, quickly accessible, NOT in nurse\'s locked office), (4) Trained staff (at minimum: teacher, aide, cafeteria worker, bus driver), (5) Field trip protocols.',
      'EMERGENCY ACTION PLAN must specify: (1) Symptoms to watch for, (2) Give epinephrine FIRST for any systemic symptoms (do NOT wait for antihistamine to work), (3) Call 911 after epinephrine, (4) Parent contact, (5) No child should EVER be sent to the nurse\'s office alone during a reaction.',
      'EPINEPHRINE ACCESS: must be immediately available (within 1-2 minutes). Two auto-injectors. Staff must be trained and legally permitted to administer (varies by state — most now have stock epinephrine laws).',
      'COMMON SCHOOL MISTAKES: (1) Only the nurse can give epinephrine (too slow — nurse may not be on-site), (2) "Allergen-free school" (unenforceable — focus on individual child\'s proximity zone instead), (3) Antihistamine before epinephrine for suspected anaphylaxis (DANGEROUS delay), (4) EpiPen locked in nurse\'s office.',
      'EMOTIONAL SUPPORT: food-allergic children can feel isolated, anxious, or different. Encourage normalizing conversations, classroom education (without singling out the child), and inclusion strategies.'
    ],
    pitfalls:['Don\'t request a "peanut-free school" — unenforceable and creates false sense of security. DO request allergen-aware classroom and cafeteria.','Don\'t forget transportation (bus) — allergic reactions can happen anywhere.','Don\'t let the school put the entire burden on the child — accommodations are the school\'s responsibility.','Don\'t skip the 504 meeting — verbal agreements are not enforceable.'],
    rubric:{empathy:'Validated parental anxiety about school safety?',accuracy:'Correctly explained 504 rights, epinephrine access, emergency action plan?',actionable:'Provided specific 504 plan elements and school training recommendations?',anticipatory:'Addressed common school mistakes and emotional impact on child?'}
  },
  {
    id:'counseling-wet-wrap',
    title:'Wet Wrap Therapy Education',
    milestones:['ICS1','PC4'],
    setting:'Parents of 2-year-old with severe AD flare unresponsive to standard topical steroids.',
    patient:'2F with severe AD flare (BSA 40%, SCORAD 65). On mid-potency TCS × 2 weeks without improvement. Not sleeping. Scratching constantly. Parents exhausted. You want to teach wet wrap therapy before considering systemic therapy.',
    keyMessages:[
      'WHAT: Wet wrap therapy (WWT) is an occlusive dressing technique that dramatically enhances topical medication penetration and provides physical itch relief. It can control severe flares in 3-5 days.',
      'HOW: (1) Lukewarm bath × 15-20 minutes (soak). (2) Pat DAMP (not dry). (3) Apply topical steroid (diluted — mid-potency mixed 1:1 with moisturizer for children, or as directed) to all affected areas. (4) Apply liberal moisturizer to all non-steroid areas. (5) First layer: damp (not dripping) cotton pajamas, gauze wraps, or tubular bandages. (6) Second layer: dry pajamas or clothing over the wet layer. (7) Leave on for 2-4 hours (minimum) or overnight.',
      'DURATION: 3-7 days for acute flares. NOT for long-term daily use (steroid absorption is significantly increased under occlusion — monitor for skin atrophy).',
      'WHY IT WORKS: (1) Occlusion increases steroid penetration 10-100×. (2) Wet layer cools and soothes itchy skin. (3) Physical barrier prevents scratching. (4) Rehydrates skin. (5) Reduces S. aureus colonization.',
      'SAFETY: use DILUTED steroids under wet wraps (not full-strength high-potency). Do NOT use on infected skin (treat infection first). Do NOT use on face. Watch for systemic steroid absorption if used >5-7 days over large BSA.',
      'PRACTICAL TIPS: use soft cotton or tubular bandages (Tubifast). For very young children: damp cotton onesie + dry onesie. Prepare supplies at bedside. Do at night — child often sleeps MUCH better with wraps (the relief is immediate). It looks like a lot of work the first time but becomes routine quickly.'
    ],
    pitfalls:['Don\'t use full-strength high-potency steroids under wraps (absorption is dramatically increased — risk of skin atrophy and systemic absorption).','Don\'t apply to infected skin — treat infection first.','Don\'t use for >7 days continuously without reassessment.','Don\'t skip the demonstration — show parents how to do it in clinic, not just explain verbally.'],
    rubric:{empathy:'Acknowledged parental exhaustion and the severity of the child\'s suffering?',accuracy:'Correctly described the step-by-step WWT technique with diluted steroids?',actionable:'Provided practical tips (cotton onesie, nighttime use, supply list)?',anticipatory:'Addressed safety limits (duration, no infection, dilution) and set expectations for timeline (3-5 days)?'}
  }
];

})();
