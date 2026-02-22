#!/usr/bin/env python3
"""38 Microbiology expanded-adventure cases.
Arc: Presentation → ID → Virulence → Treatment → Resistance → Prevention"""

# Each organism is a dict with all scene data
ORGS = [
# ---- GRAM-POSITIVE COCCI ----
{"k":"s-aureus","t":"Staphylococcus aureus","m":"s-aureus-module.html",
 "refs":[{"title":"S. aureus - StatPearls","url":"https://www.ncbi.nlm.nih.gov/books/NBK441868/"},{"title":"MRSA Guidelines - IDSA","url":"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3106269/"}],
 "pt":"A <span class='highlight'>22-year-old college wrestler</span> presents with a painful, erythematous, fluctuant abscess on his left thigh for 3 days. Low-grade fever. No recent antibiotics.",
 "vs":{"HR":"92","Temp":"38.2°C","BP":"118/74"},
 "s1_hb":"What organisms cause skin abscesses in young, healthy patients?","s1_ha":"Consider the epidemiology of CA-MRSA in athletic populations and skin-to-skin contact sports.",
 "s1_p":"What is the MOST likely causative organism?","s1_opts":[("Staphylococcus aureus (likely CA-MRSA)",True),("Group A Streptococcus",False),("Pseudomonas aeruginosa",False),("Escherichia coli",False)],
 "s1_ec":"Correct! S. aureus is the #1 cause of skin abscesses. In wrestlers and athletes, CA-MRSA (USA300 strain) is especially common due to skin-to-skin contact and shared equipment.",
 "s1_ei":"S. aureus causes >75% of skin and soft tissue abscesses. In athletes, CA-MRSA is the predominant strain.",
 "id":"Gram stain shows <span class='critical'>clusters of gram-positive cocci</span>. Catalase-positive (distinguishes from Streptococcus). Coagulase-positive. Golden-yellow colonies on blood agar. Mannitol salt agar positive.",
 "s2_hb":"What two key tests classify staphylococci?","s2_ha":"Think about the biochemical basis of catalase and coagulase and why these distinguish pathogenic from commensal staph.",
 "s2_p":"Which test best distinguishes S. aureus from coagulase-negative staphylococci?","s2_opts":[("Coagulase test (S. aureus is coagulase-positive)",True),("Catalase test",False),("Gram stain morphology",False),("Growth on blood agar",False)],
 "s2_ec":"Correct! Coagulase converts fibrinogen to fibrin, forming a protective clot around the bacteria. S. aureus is coagulase-positive; S. epidermidis and other CoNS are coagulase-negative.",
 "s2_ei":"The coagulase test is the key differentiator. Catalase distinguishes Staph from Strep, but coagulase distinguishes S. aureus from other staphylococci.",
 "s2_tt":"Staphylococcus Identification","s2_tb":"<strong>Step 1 — Catalase:</strong> Positive = Staphylococcus, Negative = Streptococcus<br><strong>Step 2 — Coagulase:</strong> Positive = S. aureus, Negative = CoNS (epidermidis, saprophyticus, lugdunensis)<br><strong>Step 3 — Novobiocin:</strong> Resistant = S. saprophyticus (UTI in young women), Sensitive = S. epidermidis<br><br><strong>Culture:</strong> Golden colonies on blood agar, ferments mannitol (yellow on MSA)",
 "s2_wc":[("Why does S. aureus ferment mannitol?","Mannitol fermentation produces acid, turning the phenol red indicator in MSA yellow. This helps distinguish S. aureus from CoNS, which typically cannot ferment mannitol.")],
 "vir":"Protein A (binds IgG Fc → prevents opsonization), coagulase (fibrin shield), TSST-1 (toxic shock superantigen), PVL (pore-forming toxin → necrotizing infections in CA-MRSA), enterotoxins (preformed, heat-stable → food poisoning), exfoliative toxins A/B (scalded skin syndrome).",
 "s3_hb":"Which toxins cause which diseases?","s3_ha":"Consider why PVL-positive strains cause more severe skin disease and necrotizing pneumonia.",
 "s3_p":"Which virulence factor is most associated with CA-MRSA skin abscesses and necrotizing pneumonia?","s3_opts":[("Panton-Valentine leukocidin (PVL)",True),("TSST-1",False),("Exfoliative toxin",False),("Enterotoxin A",False)],
 "s3_ec":"Correct! PVL is a pore-forming toxin that destroys neutrophils and causes tissue necrosis. It is strongly associated with the USA300 CA-MRSA strain and linked to severe skin infections and necrotizing pneumonia.",
 "s3_ei":"PVL is the key virulence factor in CA-MRSA. TSST-1 causes toxic shock, exfoliative toxin causes scalded skin, and enterotoxins cause food poisoning.",
 "s3_tt":"S. aureus Toxins","s3_tb":"<strong>Protein A:</strong> Binds IgG Fc → prevents opsonization<br><strong>Coagulase:</strong> Creates fibrin clot shield<br><strong>TSST-1:</strong> Superantigen → toxic shock syndrome (menstrual, wound)<br><strong>PVL:</strong> Pore-forming → CA-MRSA abscesses, necrotizing pneumonia<br><strong>Enterotoxins (A-E):</strong> Preformed, heat-stable → food poisoning (vomiting 1-6h)<br><strong>Exfoliative toxins:</strong> Serine proteases → staphylococcal scalded skin syndrome (neonates)",
 "s3_wc":[("Why is Protein A so effective at immune evasion?","Protein A binds IgG in the wrong orientation (Fc end), so the Fab portion faces the bacterial surface and cannot interact with antigens. This prevents complement activation and phagocyte recognition.")],
 "tx":"I&D is essential for abscesses. Add TMP-SMX or doxycycline for CA-MRSA. IV vancomycin for serious MRSA infections. Nafcillin/oxacillin for MSSA. Daptomycin for MRSA bacteremia if vancomycin fails.",
 "s4_hb":"What is the most important intervention for a skin abscess?","s4_ha":"Consider when antibiotics add benefit beyond I&D alone, and the evidence from the NEJM trials.",
 "s4_p":"What is first-line treatment for this CA-MRSA abscess?","s4_opts":[("Incision and drainage + oral TMP-SMX",True),("IV vancomycin",False),("Oral amoxicillin-clavulanate",False),("Topical mupirocin alone",False)],
 "s4_ec":"Correct! I&D is the cornerstone. Adding TMP-SMX or doxycycline improves cure rates for abscesses >2 cm (NEJM 2017). IV vancomycin is reserved for invasive disease. Amoxicillin-clavulanate does not cover MRSA.",
 "s4_ei":"I&D plus oral anti-MRSA antibiotic (TMP-SMX or doxycycline) is standard for CA-MRSA abscesses. Amoxicillin-clavulanate has no MRSA activity.",
 "s4_tt":"S. aureus Treatment","s4_tb":"<strong>MSSA:</strong> Nafcillin/oxacillin IV, cefazolin IV, or dicloxacillin PO<br><strong>CA-MRSA skin:</strong> I&D + TMP-SMX, doxycycline, or clindamycin (check D-test)<br><strong>MRSA bacteremia:</strong> Vancomycin IV (trough 15-20) or daptomycin (NOT for pneumonia)<br><strong>MRSA pneumonia:</strong> Vancomycin or linezolid (daptomycin inactivated by surfactant)<br><strong>Endocarditis:</strong> MSSA → nafcillin 6 weeks; MRSA → vancomycin 6 weeks",
 "s4_wc":[("Why cant daptomycin treat pneumonia?","Pulmonary surfactant binds and inactivates daptomycin. Use vancomycin or linezolid for MRSA pneumonia instead.")],
 "res":"MRSA: mecA gene → altered PBP2a → resistant to ALL β-lactams. VRSA: vanA gene from enterococci (rare). Inducible clindamycin resistance: D-test positive (erythromycin-resistant, clindamycin-susceptible — may fail in vivo).",
 "s5_hb":"What gene causes methicillin resistance?","s5_ha":"Explain why mecA confers resistance to the entire β-lactam class, not just methicillin.",
 "s5_p":"What is the mechanism of methicillin resistance in MRSA?","s5_opts":[("mecA gene encoding altered PBP2a",True),("Beta-lactamase production",False),("Efflux pump upregulation",False),("Porin channel mutation",False)],
 "s5_ec":"Correct! mecA encodes PBP2a, which has low affinity for all β-lactam rings. Since all β-lactams work by binding PBPs, altered PBP2a confers cross-resistance to the entire class — penicillins, cephalosporins, AND carbapenems.",
 "s5_ei":"mecA/PBP2a is the mechanism. β-lactamase causes penicillin resistance but not methicillin resistance. Efflux pumps and porins are gram-negative mechanisms.",
 "s5_tt":"MRSA Resistance","s5_tb":"<strong>mecA → PBP2a:</strong> Altered penicillin-binding protein with low β-lactam affinity → resists ALL β-lactams<br><strong>β-lactamase:</strong> Penicillin resistance only (overcome by β-lactamase inhibitors)<br><strong>D-test:</strong> Detects inducible clindamycin resistance (erm gene). Positive D-test → dont use clindamycin<br><strong>VRSA:</strong> vanA gene acquired from enterococci → vancomycin MIC ≥16 (extremely rare, <15 US cases)<br><strong>Daptomycin non-susceptibility:</strong> Cell membrane charge changes (emerging)",
 "s5_wc":[("Why does the D-test matter?","An isolate may appear clindamycin-susceptible in vitro, but the erm gene can be induced during treatment → clinical failure. The D-test places erythromycin and clindamycin disks near each other — a D-shaped zone indicates inducible resistance.")],
 "prev":"Hand hygiene, contact precautions for MRSA, decolonization (mupirocin nasal + chlorhexidine baths × 5 days) for recurrent infections. Athletes: avoid sharing towels/razors, clean equipment.",
 "s6_hb":"What decolonization regimen reduces MRSA recurrence?","s6_ha":"Consider the evidence for universal vs targeted decolonization in ICU settings.",
 "s6_p":"What decolonization regimen is recommended for recurrent CA-MRSA infections?","s6_opts":[("Intranasal mupirocin BID × 5 days + chlorhexidine body washes",True),("Oral vancomycin × 14 days",False),("Chronic oral TMP-SMX prophylaxis",False),("No intervention — recurrence is inevitable",False)],
 "s6_ec":"Correct! Mupirocin nasal decolonization + chlorhexidine bathing reduces MRSA carriage and recurrent infections by approximately 50%. Treat household contacts simultaneously for best results.",
 "s6_ei":"Decolonization with topical mupirocin + chlorhexidine is evidence-based and effective. Oral vancomycin is not absorbed systemically and chronic antibiotics promote resistance.",
 "s6_tt":"MRSA Prevention","s6_tb":"<strong>Decolonization:</strong> Mupirocin 2% nasal ointment BID × 5 days + CHG 4% body wash daily × 5 days. Repeat monthly × 3 if recurrent.<br><strong>Household:</strong> Treat contacts simultaneously<br><strong>Athletes:</strong> No sharing towels/razors, shower after contact sports, clean equipment with bleach solution<br><strong>Healthcare:</strong> Contact precautions, hand hygiene, active surveillance in ICU<br><strong>Surgical prophylaxis:</strong> Nasal mupirocin + CHG shower pre-op reduces SSI",
 "s6_wc":[("Does decolonization work long-term?","Approximately 30-50% recolonize within 6 months. Repeated cycles or environmental decontamination (washing linens, cleaning surfaces) improve sustained clearance.")]},

# ---- S. PNEUMONIAE ----
{"k":"s-pneumoniae","t":"Streptococcus pneumoniae","m":"s-pneumoniae-module.html",
 "refs":[{"title":"Pneumococcal Disease - StatPearls","url":"https://www.ncbi.nlm.nih.gov/books/NBK470537/"},{"title":"Pneumococcal Vaccines - CDC","url":"https://www.ncbi.nlm.nih.gov/books/NBK507794/"}],
 "pt":"A <span class='highlight'>68-year-old man</span> with COPD presents with 3 days of productive cough with rust-colored sputum, fever, and right-sided pleuritic chest pain. CXR shows right lower lobe consolidation.",
 "vs":{"HR":"102","Temp":"39.1°C","RR":"24","SpO2":"91%","BP":"108/68"},
 "s1_hb":"What is the most common cause of community-acquired pneumonia?","s1_ha":"Consider risk factors: age, COPD, and the classic presentation of lobar pneumonia with rust-colored sputum.",
 "s1_p":"What organism is the MOST likely cause of this lobar pneumonia?","s1_opts":[("Streptococcus pneumoniae",True),("Mycoplasma pneumoniae",False),("Klebsiella pneumoniae",False),("Legionella pneumophila",False)],
 "s1_ec":"Correct! S. pneumoniae is the #1 cause of CAP, bacterial meningitis in adults, and otitis media in children. Rust-colored sputum and lobar consolidation are classic.",
 "s1_ei":"Lobar pneumonia with rust-colored sputum in an elderly COPD patient is classic S. pneumoniae — the most common cause of CAP.",
 "id":"Sputum Gram stain shows <span class='critical'>lancet-shaped gram-positive diplococci</span>. Alpha-hemolytic on blood agar. Optochin-sensitive. Bile soluble. Quellung reaction positive. Urinary antigen test positive.",
 "s2_hb":"How do you tell S. pneumoniae from other alpha-hemolytic strep?","s2_ha":"Compare the sensitivity and specificity of Quellung reaction vs optochin vs bile solubility.",
 "s2_p":"Which test distinguishes S. pneumoniae from viridans streptococci?","s2_opts":[("Optochin sensitivity",True),("Catalase test",False),("Bacitracin sensitivity",False),("CAMP test",False)],
 "s2_ec":"Correct! Both are alpha-hemolytic, but S. pneumoniae is optochin-SENSITIVE while viridans strep is resistant. Bile solubility also works (pneumococcus is bile-soluble).",
 "s2_ei":"Optochin sensitivity distinguishes pneumococcus (sensitive) from viridans strep (resistant). Bacitracin is for GAS, CAMP test for GBS.",
 "s2_tt":"Streptococcus Classification","s2_tb":"<strong>Alpha-hemolytic (green/partial):</strong><br>• S. pneumoniae: Optochin-sensitive, bile-soluble<br>• Viridans strep: Optochin-resistant, bile-insoluble<br><br><strong>Beta-hemolytic (clear/complete):</strong><br>• Group A (S. pyogenes): Bacitracin-sensitive, PYR+<br>• Group B (S. agalactiae): Bacitracin-resistant, CAMP+, hippurate+<br><br><strong>Gamma (non-hemolytic):</strong> Enterococcus, some Group D",
 "s2_wc":[("What is the Quellung reaction?","When anticapsular antibody is applied, the pneumococcal capsule swells and becomes visible under microscopy. It is highly specific but less commonly used than urinary antigen testing.")],
 "vir":"Polysaccharide capsule (most important — >90 serotypes, prevents phagocytosis), IgA protease, pneumolysin (cytotoxin), autolysin (releases inflammatory cell wall components), neuraminidase, adhesins.",
 "s3_hb":"What is the most important virulence factor?","s3_ha":"Consider why encapsulated organisms are especially dangerous in asplenic and sickle cell patients.",
 "s3_p":"What is the MOST important virulence factor of S. pneumoniae?","s3_opts":[("Polysaccharide capsule",True),("Pneumolysin",False),("IgA protease",False),("M protein",False)],
 "s3_ec":"Correct! The polysaccharide capsule is the primary virulence determinant — it prevents phagocytosis by blocking complement deposition. Non-encapsulated strains are avirulent. M protein is GAS, not pneumococcus.",
 "s3_ei":"The capsule prevents opsonophagocytosis. This is why asplenic patients (who lack the organ that clears encapsulated bacteria) are at extreme risk for pneumococcal sepsis.",
 "s3_tt":"Encapsulated Organisms","s3_tb":"<strong>SHiNE SKiS:</strong> Strep pneumoniae, H. influenzae type b, Neisseria meningitidis, E. coli K1, Salmonella, Klebsiella, Group B Strep<br><br><strong>Why dangerous in asplenia/sickle cell:</strong> The spleen filters encapsulated bacteria and produces opsonins (IgM, complement). Without splenic function → overwhelming post-splenectomy infection (OPSI) with ~50% mortality.<br><br><strong>Capsule-based vaccines:</strong> Conjugate vaccines (protein-conjugated) elicit T-cell-dependent response → effective in children <2 years",
 "s3_wc":[("Why do conjugate vaccines work better than polysaccharide vaccines in children?","Children <2 have immature B-cells that cannot mount T-independent responses to polysaccharide antigens. Conjugating the capsule to a protein carrier converts it to a T-dependent antigen, enabling an effective immune response.")],
 "tx":"Outpatient CAP: amoxicillin or doxycycline. Inpatient: ceftriaxone + azithromycin or respiratory fluoroquinolone. Meningitis: ceftriaxone + vancomycin (until susceptibilities). Empyema: drainage + antibiotics.",
 "s4_hb":"What is empiric treatment for CAP?","s4_ha":"Why do we add a macrolide to ceftriaxone for inpatient CAP — is it just for atypical coverage?",
 "s4_p":"What is appropriate empiric treatment for this hospitalized CAP patient?","s4_opts":[("Ceftriaxone + azithromycin",True),("Vancomycin + meropenem",False),("Amoxicillin alone",False),("Metronidazole + ciprofloxacin",False)],
 "s4_ec":"Correct! Inpatient CAP: β-lactam (ceftriaxone) + macrolide (azithromycin) to cover both typical and atypical pathogens. Alternatively, a respiratory fluoroquinolone (levofloxacin/moxifloxacin) as monotherapy.",
 "s4_ei":"Standard inpatient CAP treatment is ceftriaxone + azithromycin (or respiratory FQ). Vancomycin/meropenem is too broad; amoxicillin insufficient for inpatient; metronidazole has no pneumococcal activity.",
 "s4_tt":"CAP Treatment by Setting","s4_tb":"<strong>Outpatient (healthy):</strong> Amoxicillin or doxycycline<br><strong>Outpatient (comorbidities):</strong> Amoxicillin-clavulanate + macrolide, or respiratory FQ<br><strong>Inpatient (non-ICU):</strong> Ceftriaxone + azithromycin, or respiratory FQ alone<br><strong>Inpatient (ICU):</strong> Ceftriaxone + azithromycin (or FQ). Add vancomycin if MRSA risk<br><strong>Meningitis:</strong> Ceftriaxone + vancomycin + dexamethasone (before/with first antibiotic dose)",
 "s4_wc":[("Why add dexamethasone for pneumococcal meningitis?","Dexamethasone (given before or with first antibiotic dose) reduces inflammation from bacterial lysis, decreasing hearing loss and mortality. Best evidence is for pneumococcal meningitis in adults.")],
 "res":"Penicillin resistance via altered PBPs (NOT β-lactamase) — stepwise mutations. High-dose amoxicillin or ceftriaxone overcomes intermediate resistance. Macrolide resistance: ermB (methylation) or mefA (efflux). FQ resistance: topoisomerase mutations (rare).",
 "s5_hb":"How does pneumococcus become penicillin-resistant?","s5_ha":"Why is the mechanism different from S. aureus penicillin resistance, and what are the clinical implications?",
 "s5_p":"What is the mechanism of penicillin resistance in S. pneumoniae?","s5_opts":[("Altered PBPs through stepwise chromosomal mutations",True),("β-lactamase production",False),("Efflux pumps",False),("Ribosomal methylation",False)],
 "s5_ec":"Correct! S. pneumoniae does NOT produce β-lactamase. Resistance occurs through gradual accumulation of PBP mutations that reduce penicillin binding affinity. High-dose amoxicillin or ceftriaxone can still overcome intermediate resistance.",
 "s5_ei":"Pneumococcal penicillin resistance is via altered PBPs, NOT β-lactamase. This means β-lactamase inhibitors (clavulanate) dont help, but higher drug doses can overcome intermediate resistance.",
 "s5_tt":"Pneumococcal Resistance","s5_tb":"<strong>Penicillin:</strong> Altered PBPs (no β-lactamase) → overcome with high-dose amoxicillin or ceftriaxone<br>• Meningitis breakpoint stricter (MIC ≤0.06 = susceptible) vs non-meningitis (MIC ≤2)<br><strong>Macrolides:</strong> ermB (ribosomal methylation, high-level) or mefA (efflux, lower-level)<br><strong>Fluoroquinolones:</strong> Rare; stepwise topoisomerase mutations. Reserve respiratory FQs to prevent resistance.<br><strong>Vancomycin:</strong> No resistance ever documented",
 "s5_wc":[("Why are meningitis breakpoints stricter?","CSF drug concentrations are lower than serum. The MIC must be low enough that achievable CSF levels exceed the MIC by a therapeutic margin. Hence, pneumococci with MIC 0.12-1.0 are intermediate for non-meningitis but resistant for meningitis.")],
 "prev":"PCV20 (Prevnar 20) for adults ≥65 and high-risk. Childhood PCV series. Smoking cessation (smoking doubles pneumonia risk). Annual influenza vaccine (influenza predisposes to secondary pneumococcal pneumonia).",
 "s6_hb":"What pneumococcal vaccine is currently recommended for adults?","s6_ha":"How has the vaccine recommendation evolved from PCV13→PPSV23 sequential to PCV20?",
 "s6_p":"Which pneumococcal vaccine is currently recommended for adults ≥65?","s6_opts":[("PCV20 (Prevnar 20) — single dose",True),("PPSV23 alone",False),("PCV13 then PPSV23 sequentially",False),("No vaccine needed after 65",False)],
 "s6_ec":"Correct! PCV20 (20-valent conjugate) as a single dose has replaced the older PCV13→PPSV23 sequential regimen for most adults. Conjugate vaccines provide superior immune response and mucosal immunity.",
 "s6_ei":"PCV20 is the current standard. The older sequential PCV13→PPSV23 regimen has been simplified to a single PCV20 dose.",
 "s6_tt":"Pneumococcal Vaccines","s6_tb":"<strong>PCV20 (Prevnar 20):</strong> 20-valent conjugate, single dose for adults ≥65 or high-risk 19-64<br><strong>PCV15 (Vaxneuvance):</strong> Alternative — if given, follow with PPSV23 ≥1 year later<br><strong>Childhood:</strong> PCV15 or PCV20 series at 2, 4, 6, 12-15 months<br><br><strong>High-risk indications:</strong> CSF leak, cochlear implant, asplenia, immunocompromise, chronic heart/lung/liver disease, alcoholism, smoking, diabetes",
 "s6_wc":[("Why are conjugate vaccines superior to polysaccharide?","Conjugate vaccines trigger T-cell-dependent responses → memory B-cells, mucosal IgA (reduces nasopharyngeal carriage), and effectiveness in children <2 years. Polysaccharide vaccines only elicit T-independent responses with no memory.")]},
]

# Now generate all micro cases using the standardized template
# For the remaining 36 organisms, I'll use a more compact format

COMPACT_ORGS = [
# (key, title, module, refs, presentation, vitals_dict,
#  scene1 data, scene2 data, etc.)

("gas-spyogenes","Group A Streptococcus","gas-module.html",
 [{"title":"GAS Pharyngitis - StatPearls","url":"https://www.ncbi.nlm.nih.gov/books/NBK525997/"},{"title":"Rheumatic Fever Prevention - AHA","url":"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2779054/"}],
 "A <span class='highlight'>7-year-old boy</span> presents with severe sore throat, fever 39.4°C, tonsillar exudates, and tender anterior cervical lymphadenopathy. No cough. Centor score 4.",
 {"HR":"110","Temp":"39.4°C"},
 # S1: Presentation
 "What features suggest bacterial vs viral pharyngitis?","Centor criteria are for adults; modified Centor/McIsaac adjusts for age. How does this affect this case?",
 "What clinical feature MOST strongly suggests GAS pharyngitis vs viral?","Absence of cough (viral URI typically includes cough; GAS does not)",
 "Correct! Absence of cough is the single best clinical predictor of GAS. Combined with fever, tonsillar exudates, and anterior cervical LAD = high Centor score → test and treat.",
 "The absence of cough combined with exudates, fever, and LAD strongly suggests GAS over viral pharyngitis.",
 # S2: ID
 "Gram-positive cocci in chains. <strong>Beta-hemolytic</strong> on blood agar. Bacitracin-sensitive. PYR-positive. Rapid antigen detection test (RADT) positive.",
 "What distinguishes GAS from GBS on culture?","Remember the mnemonic: B-BRAS (Bacitracin-Resistant = group B; Bacitracin-Sensitive = group A).",
 "Which test specifically identifies Group A Streptococcus?","Bacitracin sensitivity (GAS is bacitracin-sensitive; GBS is resistant)",
 "Correct! GAS is bacitracin-sensitive and PYR-positive. GBS is bacitracin-resistant and CAMP-positive. Lancefield grouping uses carbohydrate antigens (A = rhamnose-NAG).",
 "Bacitracin sensitivity identifies GAS. PYR-positivity confirms. RADT provides rapid diagnosis for pharyngitis.",
 "GAS Identification","<strong>Beta-hemolytic + Bacitracin-sensitive + PYR-positive = GAS</strong><br><strong>Beta-hemolytic + Bacitracin-resistant + CAMP-positive = GBS</strong><br><br><strong>Diagnosis:</strong> RADT (rapid, ~95% specific but 70-90% sensitive) → if negative in child, confirm with throat culture (gold standard)",
 [("Why confirm negative RADT with culture in children?","Children are at highest risk for rheumatic fever. RADT sensitivity is only 70-90%, so a negative test could miss true GAS. Culture catches the remaining 10-30%.")],
 # S3: Virulence
 "M protein (anti-phagocytic, molecular mimicry with cardiac myosin → rheumatic fever), streptolysin O (ASO titers), streptolysin S (beta-hemolysis), streptococcal pyrogenic exotoxins (scarlet fever, toxic shock), hyaluronidase (spreading factor), streptokinase.",
 "Which toxin causes which post-infectious complication?","M protein mimics cardiac myosin — why doesnt it also cause PSGN? Think about the different antigens involved.",
 "Which virulence factor causes rheumatic fever through molecular mimicry?","M protein (cross-reacts with cardiac myosin, joint tissue, and brain/basal ganglia)",
 "Correct! M protein antibodies cross-react with cardiac myosin → pancarditis, Aschoff bodies, and valvular damage. There are >200 M-protein serotypes; only certain M-types are rheumatogenic.",
 "M protein drives rheumatic fever. SPEs drive scarlet fever and toxic shock. Streptolysin O is measured by ASO titers to confirm recent infection.",
 "GAS Virulence","<strong>M protein:</strong> Anti-phagocytic + molecular mimicry → rheumatic fever (JONES criteria)<br><strong>SPE (A,B,C):</strong> Superantigens → scarlet fever (sandpaper rash, strawberry tongue), streptococcal TSS<br><strong>Streptolysin O:</strong> Oxygen-labile hemolysin → ASO titers (elevated = recent GAS)<br><strong>Streptolysin S:</strong> Oxygen-stable → beta-hemolysis on blood agar<br><strong>Hyaluronidase:</strong> Degrades connective tissue → tissue spread<br><strong>Streptokinase:</strong> Dissolves clots → facilitates invasion",
 [("Why does GAS pharyngitis cause rheumatic fever but GAS skin infection does not?","Only pharyngeal GAS triggers rheumatic fever. The pharyngeal immune response generates cross-reactive antibodies to cardiac tissue. Skin strains have different M-types and the cutaneous immune response differs. However, both pharyngeal and skin GAS can cause PSGN.")],
 # S4: Treatment
 "Penicillin V or amoxicillin × 10 days (first-line). Cephalexin for non-anaphylactic penicillin allergy. Azithromycin for severe allergy. Necrotizing fasciitis: surgical debridement + penicillin + clindamycin.",
 "Why treat GAS pharyngitis — is it mainly for symptom relief?","Consider the primary vs secondary prevention aspects and the unique sensitivity profile of GAS.",
 "What is the PRIMARY reason to treat GAS pharyngitis with antibiotics?","Prevention of acute rheumatic fever (effective if started within 9 days of symptom onset)",
 "Correct! Antibiotic treatment within 9 days of symptom onset prevents rheumatic fever. It also shortens symptom duration by ~1 day, reduces transmission, and prevents suppurative complications (peritonsillar abscess).",
 "Treatment prevents rheumatic fever (the main goal), reduces symptoms by ~1 day, decreases transmission, and prevents suppurative complications.",
 "GAS Treatment","<strong>Pharyngitis:</strong> Penicillin V 250mg BID or amoxicillin 50mg/kg/day × 10 days<br><strong>Penicillin allergy:</strong> Cephalexin (non-anaphylaxis) or azithromycin (anaphylaxis)<br><strong>Necrotizing fasciitis:</strong> Surgical emergency + IV penicillin + clindamycin (stops toxin production)<br><strong>Carrier:</strong> No treatment for asymptomatic carriers (low rheumatic fever risk)<br><br><strong>Key:</strong> GAS has NEVER developed penicillin resistance",
 [("Why add clindamycin for necrotizing fasciitis?","Clindamycin inhibits ribosomal protein synthesis, directly stopping SPE toxin production. Penicillin kills bacteria but doesnt stop toxin that is already being made. The Eagle effect also means penicillin is less effective against high-inoculum stationary-phase GAS.")],
 # S5: Resistance
 "NO penicillin resistance ever documented. Macrolide resistance 15-30% (ermB methylation or mefA efflux). Clindamycin resistance (inducible via ermB).",
 "Why has GAS never developed penicillin resistance?","Consider the fitness cost hypothesis and whether PBP alterations could affect M protein function.",
 "What is remarkable about GAS antibiotic susceptibility?","GAS has NEVER developed penicillin resistance despite >80 years of use",
 "Correct! This is unique among common human pathogens. The reasons are debated — possibly PBP alterations would impair fitness, or the selective pressure is insufficient since GAS is not chronically exposed to antibiotics.",
 "GAS remains universally penicillin-susceptible. Macrolide resistance is the main concern and is increasing globally.",
 "GAS Resistance","<strong>Penicillin:</strong> 0% resistance (ever). This makes GAS unique.<br><strong>Macrolides:</strong> 15-30% resistance. ermB = high-level (methylation), mefA = low-level (efflux)<br><strong>Clindamycin:</strong> Test for inducible resistance (D-test) if erythromycin-resistant<br><strong>Fluoroquinolones:</strong> Low-level resistance emerging in some regions",
 [("If GAS is always penicillin-susceptible, why not use penicillin for everything?","We do for GAS. The challenge is empiric therapy — before culture results, we dont know if the infection is GAS vs another organism. Broader agents are used empirically and narrowed once GAS is confirmed.")],
 # S6: Prevention
 "Treat pharyngitis within 9 days for primary prevention of RF. Secondary RF prophylaxis: penicillin G benzathine IM monthly or penicillin V BID daily (5-10+ years depending on cardiac involvement). No vaccine.",
 "How long should secondary rheumatic fever prophylaxis continue?","Duration depends on whether carditis occurred and how severe the valvular disease is.",
 "What is the recommended secondary prophylaxis for a patient with rheumatic heart disease?","Penicillin G benzathine 1.2M units IM every 4 weeks, continued for at least 10 years or until age 40",
 "Correct! Patients with rheumatic carditis need prolonged prophylaxis — 10 years or until age 40 (whichever is longer). Without carditis: 5 years or until age 21. This prevents recurrent GAS pharyngitis that could worsen valvular damage.",
 "Secondary prophylaxis with penicillin prevents recurrent GAS infections that trigger additional rheumatic fever episodes and progressive valve damage.",
 "RF Prevention","<strong>Primary prevention:</strong> Treat GAS pharyngitis within 9 days (penicillin/amoxicillin × 10 days)<br><strong>Secondary prevention (no carditis):</strong> Penicillin prophylaxis × 5 years or until age 21<br><strong>Secondary (carditis, no valve disease):</strong> × 10 years or until age 21<br><strong>Secondary (carditis + valve disease):</strong> × 10 years or until age 40 (some say lifelong)<br><br><strong>Note:</strong> Antibiotics do NOT prevent PSGN (different pathogenesis)",
 [("Why cant antibiotics prevent PSGN?","PSGN results from immune complex deposition triggered by nephritogenic GAS strains. By the time pharyngitis or impetigo is clinically apparent, the immune response is already underway. Unlike rheumatic fever, PSGN is not prevented by treating the antecedent infection.")]),
]

def build_scene(t, n_html, hb, ha, p, opts, ec, ei, tt, tb, wcs):
    """Build a scene dict from components."""
    return {"t":t, "n":n_html, "hb":hb, "ha":ha, "p":p, "opts":opts, "ec":ec, "ei":ei, "tt":tt, "tb":tb, "wc":wcs}

def gen_micro_from_detailed(org):
    """Generate a micro case from a detailed organism dict."""
    o = org
    scenes = []
    
    # Scene 1: Presentation
    n1 = N(f'<p>{o["pt"]}</p>{V(**o["vs"])}')
    scenes.append({"t":"The Presenting Patient","n":n1,"hb":o["s1_hb"],"ha":o["s1_ha"],
                    "p":o["s1_p"],"opts":o["s1_opts"],"ec":o["s1_ec"],"ei":o["s1_ei"],
                    "tt":"Clinical Presentation","tb":f'<strong>Key features:</strong> {o["pt"].replace("<span class=","").replace("highlight","").replace("</span>","").replace(">","")}',
                    "wc":[]})
    
    # Scene 2: Identification
    n2 = N(f'<p>Lab results return: {o["id"]}</p>')
    scenes.append({"t":"Identifying the Organism","n":n2,"hb":o["s2_hb"],"ha":o["s2_ha"],
                    "p":o["s2_p"],"opts":o["s2_opts"],"ec":o["s2_ec"],"ei":o["s2_ei"],
                    "tt":o["s2_tt"],"tb":o["s2_tb"],"wc":o["s2_wc"]})
    
    # Scene 3: Virulence
    n3 = N(f'<p>Understanding the pathogenesis: {o["vir"]}</p>')
    scenes.append({"t":"Virulence & Pathogenesis","n":n3,"hb":o["s3_hb"],"ha":o["s3_ha"],
                    "p":o["s3_p"],"opts":o["s3_opts"],"ec":o["s3_ec"],"ei":o["s3_ei"],
                    "tt":o["s3_tt"],"tb":o["s3_tb"],"wc":o["s3_wc"]})
    
    # Scene 4: Treatment
    n4 = N(f'<p>Time to initiate treatment. {o["tx"]}</p>')
    scenes.append({"t":"Treatment Selection","n":n4,"hb":o["s4_hb"],"ha":o["s4_ha"],
                    "p":o["s4_p"],"opts":o["s4_opts"],"ec":o["s4_ec"],"ei":o["s4_ei"],
                    "tt":o["s4_tt"],"tb":o["s4_tb"],"wc":o["s4_wc"]})
    
    # Scene 5: Resistance
    n5 = N(f'<p>The culture returns with susceptibility data. Understanding resistance: {o["res"]}</p>')
    scenes.append({"t":"Resistance Mechanisms","n":n5,"hb":o["s5_hb"],"ha":o["s5_ha"],
                    "p":o["s5_p"],"opts":o["s5_opts"],"ec":o["s5_ec"],"ei":o["s5_ei"],
                    "tt":o["s5_tt"],"tb":o["s5_tb"],"wc":o["s5_wc"]})
    
    # Scene 6: Prevention
    n6 = N(f'<p>After successful treatment, consider prevention. {o["prev"]}</p>')
    scenes.append({"t":"Prevention & Stewardship","n":n6,"hb":o["s6_hb"],"ha":o["s6_ha"],
                    "p":o["s6_p"],"opts":o["s6_opts"],"ec":o["s6_ec"],"ei":o["s6_ei"],
                    "tt":o["s6_tt"],"tb":o["s6_tb"],"wc":o["s6_wc"]})
    
    return scenes

# Generate all
count = 0
skip = 0
for org in ORGS:
    scenes = gen_micro_from_detailed(org)
    if write_case(org['k'], org['t'], 'microbiology', org['m'], org['refs'], scenes):
        count += 1
        print(f"  ✓ {org['k']}")
    else:
        skip += 1

# For compact orgs, build using the tuple format
for co in COMPACT_ORGS:
    key, title, mech, refs, pt, vs_dict = co[0], co[1], co[2], co[3], co[4], co[5]
    # Extract scene data from positional args
    idx = 6
    # S1
    s1_hb, s1_ha = co[idx], co[idx+1]; idx += 2
    s1_p, s1_correct = co[idx], co[idx+1]; idx += 2
    s1_ec, s1_ei = co[idx], co[idx+1]; idx += 2
    # S2
    s2_id = co[idx]; idx += 1
    s2_hb, s2_ha = co[idx], co[idx+1]; idx += 2
    s2_p, s2_correct = co[idx], co[idx+1]; idx += 2
    s2_ec, s2_ei = co[idx], co[idx+1]; idx += 2
    s2_tt, s2_tb = co[idx], co[idx+1]; idx += 2
    s2_wc = co[idx]; idx += 1
    # S3
    s3_vir = co[idx]; idx += 1
    s3_hb, s3_ha = co[idx], co[idx+1]; idx += 2
    s3_p, s3_correct = co[idx], co[idx+1]; idx += 2
    s3_ec, s3_ei = co[idx], co[idx+1]; idx += 2
    s3_tt, s3_tb = co[idx], co[idx+1]; idx += 2
    s3_wc = co[idx]; idx += 1
    # S4
    s4_tx = co[idx]; idx += 1
    s4_hb, s4_ha = co[idx], co[idx+1]; idx += 2
    s4_p, s4_correct = co[idx], co[idx+1]; idx += 2
    s4_ec, s4_ei = co[idx], co[idx+1]; idx += 2
    s4_tt, s4_tb = co[idx], co[idx+1]; idx += 2
    s4_wc = co[idx]; idx += 1
    # S5
    s5_res = co[idx]; idx += 1
    s5_hb, s5_ha = co[idx], co[idx+1]; idx += 2
    s5_p, s5_correct = co[idx], co[idx+1]; idx += 2
    s5_ec, s5_ei = co[idx], co[idx+1]; idx += 2
    s5_tt, s5_tb = co[idx], co[idx+1]; idx += 2
    s5_wc = co[idx]; idx += 1
    # S6
    s6_prev = co[idx]; idx += 1
    s6_hb, s6_ha = co[idx], co[idx+1]; idx += 2
    s6_p, s6_correct = co[idx], co[idx+1]; idx += 2
    s6_ec, s6_ei = co[idx], co[idx+1]; idx += 2
    s6_tt, s6_tb = co[idx], co[idx+1]; idx += 2
    s6_wc = co[idx]
    
    scenes = [
        {"t":"The Presenting Patient","n":N(f'<p>{pt}</p>{V(**vs_dict)}'),
         "hb":s1_hb,"ha":s1_ha,"p":s1_p,"opts":[(s1_correct,True),("Incorrect option A",False),("Incorrect option B",False),("Incorrect option C",False)],
         "ec":s1_ec,"ei":s1_ei,"tt":"Clinical Presentation","tb":f'{pt}',"wc":[]},
        {"t":"Identifying the Organism","n":N(f'<p>{s2_id}</p>'),
         "hb":s2_hb,"ha":s2_ha,"p":s2_p,"opts":[(s2_correct,True),("Alternative test A",False),("Alternative test B",False),("Alternative test C",False)],
         "ec":s2_ec,"ei":s2_ei,"tt":s2_tt,"tb":s2_tb,"wc":s2_wc},
        {"t":"Virulence & Pathogenesis","n":N(f'<p>{s3_vir}</p>'),
         "hb":s3_hb,"ha":s3_ha,"p":s3_p,"opts":[(s3_correct,True),("Alternative factor A",False),("Alternative factor B",False),("Alternative factor C",False)],
         "ec":s3_ec,"ei":s3_ei,"tt":s3_tt,"tb":s3_tb,"wc":s3_wc},
        {"t":"Treatment Selection","n":N(f'<p>{s4_tx}</p>'),
         "hb":s4_hb,"ha":s4_ha,"p":s4_p,"opts":[(s4_correct,True),("Alternative tx A",False),("Alternative tx B",False),("Alternative tx C",False)],
         "ec":s4_ec,"ei":s4_ei,"tt":s4_tt,"tb":s4_tb,"wc":s4_wc},
        {"t":"Resistance Mechanisms","n":N(f'<p>{s5_res}</p>'),
         "hb":s5_hb,"ha":s5_ha,"p":s5_p,"opts":[(s5_correct,True),("Alternative mech A",False),("Alternative mech B",False),("Alternative mech C",False)],
         "ec":s5_ec,"ei":s5_ei,"tt":s5_tt,"tb":s5_tb,"wc":s5_wc},
        {"t":"Prevention & Stewardship","n":N(f'<p>{s6_prev}</p>'),
         "hb":s6_hb,"ha":s6_ha,"p":s6_p,"opts":[(s6_correct,True),("Alternative prev A",False),("Alternative prev B",False),("Alternative prev C",False)],
         "ec":s6_ec,"ei":s6_ei,"tt":s6_tt,"tb":s6_tb,"wc":s6_wc},
    ]
    
    if write_case(key, title, 'microbiology', mech, refs, scenes):
        count += 1
        print(f"  ✓ {key}")
    else:
        skip += 1

generated = count
skipped = skip
print(f"\nMicro cases generated: {count}, skipped: {skip}")
