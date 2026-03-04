/* emr-data/allergic-rhinitis-immunotherapy.js
   Moderate-Severe Allergic Rhinitis → Allergen Immunotherapy (SCIT) + QOL Outcomes
   Patient: Tomás Reyes-Guzmán, 28M, first-generation college student / grad student
   Story: Perennial + seasonal AR, failed pharmacotherapy, SCIT initiated → near-systemic reaction → dose adjustment → success
   Encounters: A/I office (initial eval) → A/I office (SCIT reaction + management) → 3-year follow-up
   ABAI Domains 9 (rhinitis), 11 (immunotherapy)
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Tomás Reyes-Guzmán",
      "dob": "07/19/1996",
      "age": "28",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "RDX-2025-95621",
      "language": "English / Spanish (bilingual)",
      "race": "Hispanic or Latino",
      "phone": "(305) 814-6629",
      "email": "treyes@univ.edu",
      "address": "1204 SW 3rd Ave, Apt 6, Coral Gables, FL 33134",
      "insurance": "Student Health Plan (United Healthcare)",
      "pcp": "Student Health Center — Dr. Patricia Walsh, MD",
      "pharmacy": "University Pharmacy",
      "emergencyContact": { "name": "Carmen Reyes", "phone": "(305) 814-7101", "relationship": "Mother" },
      "chiefComplaint": "Persistent nasal congestion, sneezing, and itchy eyes — 'affects my focus during lectures and studying year-round'",
      "diagnosis": "Moderate-severe perennial allergic rhinitis (dust mite + mold-sensitized) with seasonal exacerbation (grass + tree pollen). Allergen immunotherapy (SCIT) candidate."
    },
    "allergies": [
      { "allergen": "NKDA", "reaction": "None", "severity": "N/A", "type": "N/A" }
    ],
    "immunizations": [
      { "name": "Influenza", "date": "10/2025", "site": "Left deltoid" },
      { "name": "COVID-19", "date": "09/2025" }
    ],
    "familyHistory": [
      "Mother: allergic rhinitis — on antihistamine daily",
      "Father: asthma — on ICS, controlled",
      "Sister (24F): atopic dermatitis"
    ],
    "socialHistory": [
      ["Tobacco", "Never"],
      ["Alcohol", "Occasional — weekends only"],
      ["Occupation", "PhD student — biochemistry. Works in university lab 60 hrs/week. Lives in on-campus graduate housing."],
      ["Housing", "Studio apartment. Carpet flooring (major dust mite reservoir). No HEPA filter. Air handling shared with building. No pets."],
      ["Exercise", "Runs outdoors 3×/week — symptoms dramatically worse during outdoor exercise in spring/fall"],
      ["Sleep", "Reports waking 2–3 nights/week from nasal congestion — mouth breathing, dry throat. Academic performance affected."],
      ["Symptom pattern", "Year-round baseline symptoms (perennial — dust mite/mold). Dramatic worsening March–May (tree pollen) and September–October (grass/ragweed). FL pollen calendar is unique: oak tree pollen peaks February–April; grass pollen peaks March–November (extended FL season)."],
      ["Prior medications", "Tried: loratadine (inadequate), cetirizine (better but sedation), fexofenadine (adequate, but incomplete relief), fluticasone nasal spray (prescribed 3 months — discontinued due to perceived inefficacy — adherence issue identified)"]
    ]
  },

  "encounters": {
    "ed": {
      "cc": "Initial A/I evaluation — 4-year history of progressive nasal symptoms. PCP referral after multiple failed antihistamines and reported failure of intranasal corticosteroid (adherence issue identified).",
      "dx": "Moderate-severe perennial allergic rhinitis (AR) + seasonal exacerbation. Dust mite (high), grass pollen (high), oak tree pollen (moderate), Alternaria mold (moderate) sensitization. SCIT candidate after optimized pharmacotherapy trial.",
      "problems": [
        { "id": "prob-1", "description": "Moderate-severe perennial AR — dust mite + mold sensitized. VAS nasal symptom score 7.2/10.", "status": "Active", "onset": "Chronic" },
        { "id": "prob-2", "description": "Seasonal AR exacerbation — grass pollen + oak tree pollen sensitized.", "status": "Active", "onset": "Seasonal" },
        { "id": "prob-3", "description": "Allergic conjunctivitis — bilateral. Concurrent with nasal symptoms.", "status": "Active", "onset": "Chronic" },
        { "id": "prob-4", "description": "Sleep disturbance — nasal congestion-related. Epworth Sleepiness Scale 11/24 (borderline excessive).", "status": "Active", "onset": "Chronic" },
        { "id": "prob-5", "description": "Academic impact — reports difficulty concentrating during lectures and studying due to symptoms.", "status": "Active", "onset": "Chronic" }
      ],
      "medications": [
        { "id": "med-1", "name": "Fexofenadine 180 mg", "dose": "Daily", "route": "Oral", "indication": "Allergic rhinitis — partial control only" },
        { "id": "med-2", "name": "Loratadine 10 mg", "dose": "PRN (backup)", "route": "Oral", "indication": "Allergic rhinitis PRN" }
      ],
      "vitals": {
        "rows": [
          { "time": "A/I office", "bp": "118/74", "hr": "64", "rr": "14", "temp": "36.8", "spo2": "99% RA", "wt": "78 kg" }
        ]
      },
      "labs": {
        "spt": {
          "title": "Skin Prick Testing (SPT) — Percutaneous Panel",
          "time": "A/I initial visit (fexofenadine held × 7 days, no antihistamine × 72h)",
          "rows": [
            { "test": "Histamine positive control", "value": "7mm wheal × 10mm flare", "note": "Valid — confirms skin reactivity preserved" },
            { "test": "Glycerin negative control", "value": "0mm wheal", "note": "Valid — no dermographism" },
            { "test": "Dermatophagoides pteronyssinus (dust mite d1)", "value": "9mm wheal", "flag": "H", "ref": "≥3mm = positive", "note": "Class 5 sensitization — primary perennial trigger. Carpet housing is major reservoir." },
            { "test": "Dermatophagoides farinae (dust mite d2)", "value": "8mm wheal", "flag": "H", "note": "Both dust mite species positive — include both in immunotherapy extract" },
            { "test": "Bermuda grass (g2)", "value": "7mm wheal", "flag": "H", "note": "High grass sensitization — dominant in FL year-round. Major seasonal exacerbation driver." },
            { "test": "Timothy grass (g6)", "value": "6mm wheal", "flag": "H" },
            { "test": "Oak tree (t7)", "value": "5mm wheal", "flag": "H", "note": "Moderate tree sensitization — FL oak pollen February–April" },
            { "test": "Alternaria alternata (m6)", "value": "5mm wheal", "flag": "H", "note": "Mold — perennial in humid FL climate. Contributes to year-round baseline." },
            { "test": "Cat dander (e1)", "value": "2mm wheal", "note": "Negative — no cats at home, clinically irrelevant" },
            { "test": "German cockroach (i6)", "value": "4mm wheal", "flag": "H", "note": "Clinically relevant in south FL housing — cockroach is a major perennial allergen in Miami. Will include in SCIT extract." },
            { "test": "Peanut, shrimp, latex", "value": "0mm all", "note": "Food/latex panel negative" }
          ],
          "note": "POSITIVE allergens for SCIT: dust mite (d1+d2), grass (Bermuda+Timothy), oak, Alternaria, cockroach. All clinically correlated with symptom history and exposures."
        },
        "spirometry": {
          "title": "Spirometry (screening for asthma — A/I standard of care at rhinitis evaluation)",
          "rows": [
            { "test": "FEV₁", "value": "4.18 L (98% predicted)", "note": "Normal" },
            { "test": "FEV₁/FVC", "value": "0.82", "note": "Normal" },
            { "test": "Post-BD FEV₁", "value": "4.22 L (+1%)", "note": "No significant reversibility — asthma not present at this time. Annual monitoring recommended given atopic background + family history." }
          ]
        }
      },
      "assessment": "28M with moderate-severe perennial + seasonal AR. SPT confirms clinically relevant sensitization to dust mite (perennial, high-degree), grass pollen (seasonal, high-degree), oak (seasonal, moderate), Alternaria (perennial, moderate), and cockroach (perennial, FL-specific). Spirometry normal — no asthma at this time.\n\nPharmacotherapy optimization first (ARIA guidelines): optimize intranasal corticosteroid use (education re: technique + adherence + minimum 4-week trial). Add intranasal antihistamine. Consider olopatadine nasal for combined nasal + ocular symptoms. If inadequate control at 6–8 weeks → SCIT initiated.\n\nSCIT indication: (1) inadequate symptom control despite optimized pharmacotherapy; (2) desire for disease-modifying treatment; (3) poly-sensitized (multiple relevant allergens); (4) willing to commit to 3–5 year treatment. Candidate confirmed — SCIT extract to include dust mite + grass + oak + Alternaria + cockroach (5-allergen extract).",
      "plan": "1. Pharmacotherapy optimization FIRST (per ARIA guidelines):\n   a. Fluticasone nasal 50 mcg — 2 sprays each nostril DAILY. Technique taught in office (angled away from septum, sniff gently, do NOT tilt head back). Expect 4–6 weeks for full effect.\n   b. Olopatadine nasal 665 mcg/spray — 2 sprays each nostril BID (combined nasal/ocular effect)\n   c. Fexofenadine 180 mg daily — continue\n   d. Sodium cromoglycate 4% ophthalmic — BID for ocular symptoms\n2. Environmental control counseling:\n   a. Allergen-proof mattress + pillow encasements (dust mite)\n   b. Wash bedding weekly in hot water (>130°F)\n   c. HEPA air purifier for bedroom\n   d. Remove bedroom carpet if possible; damp mop hard floors\n   e. Cockroach: boric acid baiting, seal cracks, no food left out\n3. Return 8 weeks: symptom reassessment. If incomplete control → SCIT initiation\n4. SCIT counseling: mechanism, timeline (3–5 years), systemic reaction risk, epinephrine auto-injector requirement"
    },

    "office": {
      "cc": "A/I follow-up — 8-week pharmacotherapy trial. Partial improvement but unacceptable symptom burden (TNSS 14/24 — was 19/24 at initial visit). Requesting allergen immunotherapy. Also: SCIT injection visit #7 — systemic reaction occurred today (see procedure note).",
      "dx": "AR — pharmacotherapy-optimized but inadequately controlled. SCIT initiated 7 weeks ago. Today: grade 2 systemic reaction to SCIT injection #7 (at buildup dose 0.3 mL of 1:10 concentrate). Managed with epinephrine 0.3 mg IM. Dose adjusted.",
      "problems": [
        { "id": "prob-1", "description": "Allergic rhinitis — SCIT buildup phase × 7 weeks. Systemic reaction at injection #7 today.", "status": "Active" },
        { "id": "prob-2", "description": "SCIT systemic reaction — grade 2 (generalized urticaria + mild angioedema, no cardiovascular/respiratory involvement). Treated and resolved.", "status": "Resolved" },
        { "id": "prob-3", "description": "Asthma screening: still negative on spirometry. Continue annual monitoring.", "status": "Monitoring" }
      ],
      "medications": [
        { "id": "med-1", "name": "Epinephrine 1:1000 0.3 mg", "dose": "0.3 mL IM — left lateral thigh, administered today for SCIT reaction", "route": "IM", "indication": "Grade 2 systemic SCIT reaction" },
        { "id": "med-2", "name": "Diphenhydramine 25 mg", "dose": "PO × 1 — after epinephrine for residual urticaria", "route": "Oral" },
        { "id": "med-3", "name": "Fluticasone nasal 50 mcg", "dose": "2 sprays each nostril daily", "route": "Intranasal" },
        { "id": "med-4", "name": "Olopatadine nasal 665 mcg", "dose": "2 sprays each nostril BID", "route": "Intranasal" },
        { "id": "med-5", "name": "Fexofenadine 180 mg", "dose": "Daily", "route": "Oral" }
      ],
      "vitals": {
        "rows": [
          { "time": "Pre-injection (10:15 AM)", "bp": "120/76", "hr": "66", "spo2": "99% RA" },
          { "time": "20 min post-injection (reaction onset)", "bp": "108/64", "hr": "104", "spo2": "97% RA", "note": "Diffuse urticaria, mild periorbital edema, pruritus — no wheeze, no laryngeal symptoms, no hypotension meeting anaphylaxis criteria. Grade 2 reaction." },
          { "time": "15 min post-epinephrine", "bp": "124/80", "hr": "88", "spo2": "99% RA", "note": "Urticaria resolving. Patient comfortable." },
          { "time": "60 min observation complete", "bp": "118/76", "hr": "72", "spo2": "99% RA", "note": "Full resolution. Discharged with observation instructions × 24h." }
        ]
      },
      "labs": {
        "scit_reaction_analysis": {
          "title": "SCIT Reaction Analysis & Dose Adjustment",
          "rows": [
            { "test": "Injection details", "value": "Extract: dust mite + grass + oak + Alternaria + cockroach (aqueous). Dose: 0.3 mL of 1:10 concentrate (buildup vial 4). This represents ~70% of goal maintenance dose.", "note": "Reaction occurred at a critical buildup transition — moving to concentrated extract. Sensitization dose threshold exceeded." },
            { "test": "Reaction grade (WAO classification)", "value": "Grade 2 — cutaneous (generalized urticaria + periorbital angioedema) without cardiovascular, respiratory, or GI involvement", "note": "Grade 1 = local large reactions / mild cutaneous. Grade 2 = systemic cutaneous. Grade 3 = single-organ respiratory/cardiovascular/GI. Grade 4 = anaphylaxis (multi-organ or severe single-organ). Grade 5 = fatal. This was Grade 2." },
            { "test": "Epinephrine timing", "value": "Administered 3 minutes after reaction onset. Patient under mandatory 30-min observation (office SCIT protocol) — reaction caught immediately.", "note": "30-minute post-injection observation period is mandatory per AAAAI/ACAAI practice parameters. This case illustrates why." },
            { "test": "Dose adjustment protocol", "value": "Per AAAAI/ACAAI guidelines: after grade 2+ reaction, return to LAST WELL-TOLERATED DOSE and resume buildup at 50% of reactive dose.", "note": "Next dose: 0.15 mL of 1:10 concentrate (50% of reactive dose 0.3 mL). Then increase by 10–20% per visit if tolerated." },
            { "test": "Trigger analysis", "value": "Risk factors for reaction identified in retrospect: (1) patient did not disclose he had started beta-blocker (propranolol 10 mg PRN for performance anxiety — SCIT systemic reaction risk factor); (2) allergen extract vial #4 had higher potency than previous vials (accelerated buildup schedule)", "note": "Beta-blockers are a relative contraindication to SCIT — they reduce effectiveness of epinephrine treatment if anaphylaxis occurs. Propranolol was discontinued and replaced with metoprolol (cardioselective — still a relative CI but lower risk than non-selective)." },
            { "test": "New EpiPen prescription", "value": "EpiPen 0.3 mg × 2 dispensed. Patient re-educated on self-administration technique. Medical alert bracelet ordered.", "note": "All SCIT patients require epinephrine auto-injector at ALL times for 30 min post-injection and throughout SCIT course." }
          ]
        }
      },
      "assessment": "Grade 2 SCIT systemic reaction managed appropriately with epinephrine IM — confirms office protocol compliance (30-min observation mandatory). Contributing factors: undisclosed non-selective beta-blocker (propranolol PRN — blocks epinephrine response) and higher-potency buildup vial. Dose adjusted per AAAAI/ACAAI guidelines: return to last tolerated dose, resume at 50% of reactive dose. Propranolol discontinued; patient counseled on disclosure requirement for ALL medications at every SCIT visit. Continued SCIT appropriate — systemic reactions do not automatically require SCIT discontinuation, but a dose adjustment plan is mandatory.",
      "plan": "1. Observe 60 minutes total post-epinephrine — completed, stable\n2. Discharge with: antihistamine, self-monitoring instructions × 24h\n3. Propranolol STOPPED — discuss with prescriber (performance anxiety alternative: SSRI if regular symptoms, or metoprolol 12.5 mg PRN if essential)\n4. SCIT dose adjustment: return to dose 0.2 mL of 1:10 (last tolerated). Resume buildup 10% increments per visit × 4 visits to reach maintenance.\n5. Reinforce: disclose ALL medications (including PRN, OTC, herbal) at every SCIT visit. Medication review at every injection visit now implemented.\n6. Annual peak FL pollen season (March–May): consider pre-seasonal antihistamine boost and slow buildup during high-pollen weeks\n7. Goal maintenance dose: 0.5 mL of 1:10 concentrate (10 allergen units per dose)"
    },

    "inpatient": {
      "cc": "3-year SCIT anniversary visit — efficacy and safety review. Patient has been on maintenance SCIT × 2 years. Considering treatment completion timeline.",
      "dx": "Allergic rhinitis — marked improvement on SCIT maintenance. TNSS reduced from 19/24 to 6/24 (68% reduction). Annual pollen exacerbations now mild. Considering completion of 3–5 year SCIT course.",
      "problems": [
        { "id": "prob-1", "description": "AR — markedly improved on SCIT. TNSS 6/24 (was 19/24). No systemic reactions × 27 months.", "status": "Controlled" },
        { "id": "prob-2", "description": "Asthma prevention: no asthma developed. Spirometry continues normal.", "status": "Stable" },
        { "id": "prob-3", "description": "New dog exposure — adopted a dog 4 months ago. Mild symptom uptick. Dog not in SPT panel — testing added today.", "status": "New concern" }
      ],
      "medications": [
        { "id": "med-1", "name": "SCIT maintenance extract", "dose": "0.5 mL 1:10 concentrate q4 weeks (maintenance phase)", "route": "Subcutaneous", "indication": "Allergen immunotherapy — maintenance" },
        { "id": "med-2", "name": "Fluticasone nasal 50 mcg", "dose": "1 spray each nostril daily (stepped down from 2 sprays)", "route": "Intranasal", "indication": "Maintenance — dose reduced due to SCIT response" },
        { "id": "med-3", "name": "Fexofenadine 180 mg", "dose": "PRN only (no longer daily)", "route": "Oral", "indication": "Seasonal rescue only" }
      ],
      "vitals": {
        "rows": [
          { "time": "3-year follow-up", "bp": "116/72", "hr": "62", "rr": "14", "spo2": "99% RA" }
        ]
      },
      "labs": {
        "outcomes": {
          "title": "3-Year SCIT Efficacy Assessment",
          "rows": [
            { "test": "TNSS (Total Nasal Symptom Score)", "value": "6 / 24 (was 19/24 at baseline)", "note": "68% reduction. Clinically meaningful improvement threshold = ≥30% reduction. Patient achieved 68%. Year 1: 14/24. Year 2: 9/24. Year 3: 6/24 — continued improvement on maintenance." },
            { "test": "Rhinoconjunctivitis Quality of Life (RQLQ)", "value": "0.8 / 6 (was 4.6/6 at baseline)", "note": "Minimal symptoms. Score <1.5 = well-controlled." },
            { "test": "Rescue antihistamine use", "value": "4 doses in past 3 months (peak pollen season) vs. daily use pre-SCIT", "note": "Near-complete elimination of daily antihistamine" },
            { "test": "Sleep quality", "value": "Epworth Sleepiness Scale: 6/24 (was 11/24). No nocturnal symptoms.", "note": "Significant sleep quality improvement" },
            { "test": "Nasal steroid", "value": "Stepped down to 1 spray/nostril/day (was 2 sprays). Further step-down planned.", "note": "Reduced medication burden — hallmark of SCIT disease modification" },
            { "test": "Asthma development", "value": "None. FEV1 4.22L (99% predicted). FEV1/FVC 0.83.", "note": "AR → asthma progression not observed. SCIT may be protective — reduces asthma development risk in atopic patients. Ongoing monitoring." },
            { "test": "New sensitization", "value": "SPT dog dander (e5): 4mm wheal — NEW positive (dog adopted 4 months ago)", "flag": "H", "note": "New sensitization to dog. Will add to SCIT extract if patient keeps dog. Counsel: dog bedroom exclusion, HEPA filter. If symptomatic, dog removal is most effective allergen avoidance." }
          ]
        },
        "immunologic_response": {
          "title": "Immunologic Changes — SCIT Mechanism Markers",
          "rows": [
            { "test": "Dust mite specific IgE (d1, ImmunoCAP)", "value": "6.2 kUA/L (was 22.4 kUA/L at baseline)", "note": "72% reduction. Expected: SCIT reduces specific IgE levels, though this is not the primary mechanism of benefit." },
            { "test": "Dust mite specific IgG4 (d1)", "value": "44 mgA/L (was 1.2 mgA/L)", "flag": "H", "note": "37-fold increase in blocking antibody (IgG4). IgG4 competes with IgE for allergen binding → reduced mast cell activation. This is a primary SCIT mechanism." },
            { "test": "Basophil activation test (BAT) — stimulation index", "value": "Stimulation index 1.8 (was 12.4 at baseline)", "note": "80% reduction in basophil reactivity. Basophil suppression = desensitization at the effector cell level." }
          ],
          "note": "Immunologic response confirms SCIT mechanism: (1) class switch from IgE → IgG4 (blocking antibody), (2) reduced mast cell/basophil reactivity, (3) Treg induction (not directly measured here). This is disease modification — not symptom masking."
        }
      },
      "assessment": "Excellent 3-year SCIT response: TNSS reduced 68%, RQLQ near-normal, antihistamine use eliminated, nasal steroid dose halved. Immunologic markers confirm disease modification. New dog sensitization requires management decision. No asthma development — protective effect possible.\n\nSCIT completion counseling: Standard course is 3–5 years maintenance. At 3 years, ~50–60% of patients maintain benefit after stopping; ~30–40% relapse within 3 years of stopping. Risk factors for relapse: severe baseline disease, polysensitization, ongoing heavy allergen exposure. Patient is polysensitized with new dog — recommend completing 5-year course.\n\nAlternative discussion: Sublingual immunotherapy (SLIT) reviewed. SLIT tablets available in US for dust mite (Odactra) and grass pollen (Grastek/Oralair). Patient prefers to complete SCIT (already established, responding, monthly visits only now on maintenance).",
      "plan": "1. Continue SCIT maintenance q4 weeks × 2 more years (5-year total course)\n2. Add dog dander (e5) to SCIT extract — discuss with patient. New extract blend prepared.\n3. Dog allergen avoidance counseling: bedroom exclusion (door closed), HEPA filter bedroom, dog bathed weekly\n4. Continue INCS — reduce to PRN seasonal if able in year 4\n5. No antihistamine routine — PRN only during peak pollen season\n6. Annual spirometry — asthma surveillance (atopic family history)\n7. SCIT stopping counseling: will revisit at year 5 (2028). Factors favoring stopping: stable benefit × 2 years, low allergen burden. Factor against: polysensitization, dog in home.\n8. If SCIT stopped in future and relapse: SLIT Odactra (dust mite) available as alternative maintenance"
    }
  },

  "teachingPoints": {
    "keyLearning": [
      "SCIT is the only disease-modifying treatment for allergic rhinitis — reduces sensitization, prevents new sensitization, reduces asthma risk.",
      "SCIT mechanism: IgE→IgG4 class switch (blocking antibody), Treg induction, mast cell/basophil suppression, reduced Th2 cytokine production.",
      "Beta-blockers are a relative contraindication to SCIT — non-selective (propranolol) > cardioselective (metoprolol). Reason: impaired epinephrine response if anaphylaxis occurs.",
      "Grade 2 SCIT systemic reaction: generalized urticaria ± angioedema, no respiratory/cardiovascular involvement. Treat with epinephrine IM (not antihistamine first). Dose adjust after any grade 2+ reaction.",
      "30-minute post-injection observation is mandatory per AAAAI/ACAAI practice parameters — catches majority of SCIT systemic reactions.",
      "Disclosure of all medications at every SCIT visit is mandatory — including PRN medications like beta-blockers.",
      "SLIT (sublingual IT): FDA-approved tablets for dust mite (Odactra), grass (Grastek, Oralair), ragweed (Ragwitek). Lower systemic reaction risk than SCIT but less efficacy data for polysensitized patients."
    ],
    "boardPearls": [
      "SCIT contraindications: severe/uncontrolled asthma (FEV1 <70%), active autoimmune disease, malignancy, pregnancy (relative CI — can continue maintenance if established, do NOT start new SCIT in pregnancy).",
      "Beta-blockers: relative CI for SCIT. Non-selective (propranolol, nadolol) = higher risk than cardioselective (metoprolol). ACE inhibitors also increase systemic reaction risk (impair kinin degradation).",
      "SCIT systemic reaction grading (WAO): Grade 1 = large local/mild systemic. Grade 2 = generalized urticaria/angioedema. Grade 3 = single-organ respiratory OR cardiovascular OR GI. Grade 4 = anaphylaxis. Grade 5 = fatal.",
      "Treatment hierarchy for SCIT reaction: Grade 1 = antihistamine + observation. Grade 2+ = EPINEPHRINE IM first, then antihistamine. Never antihistamine alone for grade 2+.",
      "SCIT dose adjustment after systemic reaction: return to last tolerated dose, resume buildup at 50% of reactive dose.",
      "SCIT timeline: buildup phase (weekly → biweekly, 6–12 months to maintenance). Maintenance phase (monthly q4w, 3–5 years).",
      "SLIT safety advantage: administered at home (no 30-min observation after first dose in office). Lower anaphylaxis rate than SCIT.",
      "New sensitization during SCIT: common with ongoing exposure. Can add new allergens to extract. Counsel on environmental control first."
    ]
  },

  "references": [
    {
      "id": "AAAAI-SCIT-2021",
      "title": "Allergen immunotherapy: A practice parameter third update",
      "authors": "Rank MA, Bernstein JA, Brandt SL, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2011,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3110694/",
      "openAccess": true,
      "validates": [
        "SCIT indications, contraindications, and protocol",
        "Systemic reaction grading (WAO classification)",
        "Dose adjustment after systemic reaction",
        "30-minute observation requirement",
        "Beta-blocker and ACE inhibitor contraindication rationale"
      ]
    },
    {
      "id": "StatPearls-AllergicRhinitis",
      "title": "Allergic Rhinitis",
      "authors": "StatPearls Publishing",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK538186/",
      "openAccess": true,
      "validates": [
        "ARIA classification (mild/moderate-severe, intermittent/persistent)",
        "Pharmacotherapy algorithm (INCS + antihistamine + LTRA)",
        "Skin prick testing interpretation",
        "Environmental control measures"
      ]
    },
    {
      "id": "ARIA-2022",
      "title": "Allergic Rhinitis and its Impact on Asthma (ARIA) guidelines — 2022 update",
      "authors": "Bousquet J, Pfaar O, Togias A, et al.",
      "journal": "Allergy",
      "year": 2022,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9048504/",
      "openAccess": true,
      "validates": [
        "ARIA classification and step therapy",
        "United airway disease — rhinitis and asthma link",
        "SCIT and SLIT evidence grading",
        "Asthma prevention through allergen immunotherapy"
      ]
    }
  ]
};
