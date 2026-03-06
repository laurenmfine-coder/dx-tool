/* emr-data/mcas-mast-cell.js
   Mast Cell Activation Syndrome (MCAS)
   Patient: Sofia Reyes, 35F, recurrent multisystem episodes
   Encounters: ED (acute episode) → Allergy office (MCAS workup/diagnosis) → Follow-up (management)
   ABAI Domain 14 — Mast Cell Disorders
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Sofia Reyes", "dob": "11/03/1989", "age": "35",
      "sex": "Female", "pronouns": "she/her", "mrn": "RDX-2025-95780",
      "language": "English/Spanish", "race": "Hispanic or Latino",
      "phone": "(804) 555-4697", "email": "sofia.reyes@email.com",
      "address": "6332 W Haddon Ave, Richmond, VA 23230",
      "insurance": "Florida Medicaid / Sunshine Health",
      "pcp": "Dr. Maria Delgado, MD",
      "pharmacy": "Sedano's Pharmacy — Calle Ocho",
      "emergencyContact": {"name": "Carlos Reyes", "phone": "(803) 555-9561", "relationship": "Husband"},
      "chiefComplaint": "Recurrent episodes of flushing, hives, abdominal pain, and near-syncope — 5th episode in 8 months",
      "diagnosis": "Mast cell activation syndrome (MCAS) — confirmed by elevated acute tryptase and symptom criteria"
      "patientHPI": "I keep having these really scary episodes where my whole body gets hot and flushed, I break out in itchy bumps all over, my stomach cramps up terribly, and I feel like I'm going to pass out. This is the fifth time it's happened in eight months and I'm getting really worried because they seem to be getting worse.",
    },
    "allergies": [
      {"allergen": "Aspirin/NSAIDs", "reaction": "Flushing and GI cramping (triggers episodes)", "severity": "Moderate", "type": "Drug — likely mast cell trigger"},
      {"allergen": "Codeine", "reaction": "Severe flushing, hives (mast cell degranulation trigger)", "severity": "Moderate", "type": "Drug — mast cell trigger"}
    ],
    "immunizations": [
      {"name": "Influenza", "date": "10/2025"},
      {"name": "COVID-19", "date": "09/2025"}
    ],
    "familyHistory": ["No family history of mastocytosis or MCAS", "Mother: fibromyalgia, chronic fatigue", "Sister: IBS and interstitial cystitis"],
    "socialHistory": [
      ["Tobacco", "Never"],
      ["Alcohol", "Triggers flushing — avoids"],
      ["Occupation", "Nurse — stress frequently triggers episodes"],
      ["Triggers identified", "NSAIDs, codeine, alcohol, extreme heat, stress, certain foods (shellfish, fermented foods, aged cheese, tomatoes — high histamine foods)"],
      ["Prior workup", "GI evaluation: normal endoscopy and colonoscopy. Cardiology: normal echo, Holter × 1 week. Gynecology: normal pelvic exam. Prior ED visits diagnosed as 'anxiety' × 3."],
      ["Quality of life", "Significantly impaired — avoids social events, unable to predict episodes, fear of anaphylaxis"]
    ]
  },
  "encounters": {
    "ed": {
      "cc": "Acute episode: diffuse flushing, urticaria, severe lower abdominal cramping, vomiting × 2, presyncope. Triggered by shellfish at restaurant 30 minutes ago. Self-administered diphenhydramine — partial improvement.",
      "dx": "Acute mast cell activation episode — MCAS vs systemic mastocytosis vs anaphylaxis (shellfish trigger must be excluded)",
      "problems": [
        {"id":"prob-1","description":"Recurrent MCAS episodes × 5 in 8 months — multisystem involvement","status":"Active"},
        {"id":"prob-2","description":"Shellfish as possible new IgE-mediated trigger vs MCAS trigger (high histamine in shellfish)","status":"Evaluation"},
        {"id":"prob-3","description":"Presyncope — cardiovascular involvement in this episode","status":"Acute"},
        {"id":"prob-4","description":"Prior misdiagnosis as anxiety × 3 ED visits","status":"Chronic"}
      ],
      "medications": [
        {"id":"med-1","name":"Diphenhydramine 50 mg (self-administered at restaurant)","dose":"1 dose","route":"Oral","indication":"Acute episode treatment"},
        {"id":"med-2","name":"Cetirizine 10 mg","dose":"Daily (baseline)","route":"Oral","indication":"MCAS prevention (prescribed by PCP)"},
        {"id":"med-3","name":"Omeprazole 20 mg","dose":"Daily","route":"Oral","indication":"GI symptoms / possible H2-related"}
      ],
      "vitals": {
        "rows": [
          {"time":"ED triage","bp":"88/54","hr":"118","rr":"22","temp":"37.4","spo2":"96% RA","note":"Hypotension + tachycardia — mast cell activation with cardiovascular involvement"},
          {"time":"60 min post-Rx","bp":"112/72","hr":"88","rr":"16","spo2":"99% RA"}
        ]
      },
      "labs": {
        "acute_tryptase": {
          "title": "Critical MCAS Diagnostic Labs — Acute + Baseline",
          "rows": [
            {"test":"Serum tryptase — ACUTE (drawn within 4h of episode)","value":"21.8","unit":"ng/mL","flag":"H","ref":"<11.4","note":"⚠️ ELEVATED ACUTE TRYPTASE — mast cell activation confirmed. MCAS diagnostic criterion requires: acute tryptase ≥ (2 × baseline + 2 ng/mL). Baseline tryptase needed at follow-up."},
            {"test":"Serum tryptase — BASELINE (drawn >24h after episode)","value":"8.4","unit":"ng/mL","ref":"<11.4","note":"Normal baseline tryptase. MCAS criteria: 2×8.4+2 = 18.8 ng/mL. Acute tryptase 21.8 > 18.8 ✅ Criterion met. NOTE: Normal baseline tryptase helps distinguish MCAS from systemic mastocytosis (SM baseline usually >20 ng/mL)."},
            {"test":"CBC","value":"WBC 8.2, Eosinophils 4% (328 cells/µL) — mildly elevated","note":"Mild eosinophilia consistent with mast cell/allergic spectrum"},
            {"test":"Shellfish (shrimp)-specific IgE","value":"0.14","unit":"kUA/L","ref":"<0.35","note":"Negative — shellfish IgE-mediated allergy excluded. This episode was MCAS triggered by high-histamine shellfish content, NOT new shellfish allergy."},
            {"test":"Total IgE","value":"48","unit":"IU/mL","ref":"<100","note":"Normal — MCAS is typically NOT IgE-mediated (unlike standard food allergy)"}
          ],
          "note": "MCAS Criteria (Valent 2012, modified): (1) recurrent multisystem symptoms (skin + GI + cardiovascular) ✅; (2) objective evidence of mast cell activation during episode: acute tryptase rise ≥2×baseline+2 ng/mL ✅ (21.8 > 18.8); (3) response to mast cell-targeted therapy ✅ (antihistamine partial relief); (4) no evidence of systemic mastocytosis (normal baseline tryptase, no urticaria pigmentosa) ✅"
        }
      },
      "assessment": "35F with recurrent multisystem episodes (flushing, urticaria, abdominal cramps, presyncope) meeting MCAS criteria: (1) multisystem mast cell mediator release pattern; (2) acute tryptase rise (21.8 ng/mL) > 2×baseline+2 (18.8 ng/mL); (3) antihistamine-responsive; (4) no IgE-mediated trigger identified (shellfish IgE negative). Systemic mastocytosis must be formally excluded at allergy follow-up (baseline tryptase 8.4 — below SM threshold of >20). Prior 'anxiety' diagnoses were likely unrecognized MCAS episodes.",
      "plan": "1. IV diphenhydramine 50 mg + famotidine 20 mg + methylprednisolone 40 mg\n2. 500 mL NS IV for hypotension\n3. Monitor × 4h for biphasic\n4. Prescribe: EpiPen 0.3 mg × 2 (cardiovascular involvement = anaphylaxis-grade episode)\n5. Update medication allergies: NSAIDs and codeine — mast cell triggers; add shellfish high-histamine note\n6. Allergy/Immunology urgent referral for MCAS formal workup\n7. Discharge: cetirizine 10 mg BID (increase dose) + famotidine 20 mg BID (add H2 blocker) + omeprazole 20 mg BID\n8. TRIGGER AVOIDANCE: NSAIDs, codeine, alcohol, extreme heat, high-histamine foods"
    },
    "office": {
      "cc": "Allergy/Immunology consultation for MCAS evaluation. Baseline tryptase obtained 48h post-episode = 8.4 ng/mL. No new episodes in 3 weeks.",
      "dx": "MCAS confirmed — all three diagnostic criteria met. Systemic mastocytosis excluded. Comprehensive trigger mapping completed.",
      "problems": [
        {"id":"prob-1","description":"MCAS — confirmed by tryptase criterion + symptom criteria. Idiopathic subtype.","status":"Active"},
        {"id":"prob-2","description":"Systemic mastocytosis excluded — baseline tryptase 8.4 (normal), no skin lesions, no organomegaly","status":"Ruled out"},
        {"id":"prob-3","description":"Trigger identification: NSAIDs, codeine, alcohol, heat, stress, high-histamine foods, shellfish (histamine content — not IgE)","status":"Active"}
      ],
      "medications": [
        {"id":"med-1","name":"Cetirizine 10 mg","dose":"BID (escalated)","route":"Oral","indication":"H1 antihistamine — MCAS baseline"},
        {"id":"med-2","name":"Famotidine 20 mg","dose":"BID","route":"Oral","indication":"H2 antihistamine — combined H1+H2 blockade for MCAS"},
        {"id":"med-3","name":"Montelukast 10 mg","dose":"Daily at bedtime","route":"Oral","indication":"Cysteinyl leukotriene receptor antagonist — mast cell mediator blockade"},
        {"id":"med-4","name":"EpiPen 0.3 mg","dose":"Carry 2 at all times","route":"IM PRN","indication":"Anaphylaxis emergency"}
      ],
      "vitals": {"rows": [{"time":"Allergy office","bp":"114/72","hr":"70","rr":"14","spo2":"99% RA"}]},
      "labs": {
        "mcas_exclusion_workup": {
          "title": "MCAS Workup — Exclude Systemic Mastocytosis and Mimics",
          "rows": [
            {"test":"Serum tryptase (baseline, confirmed)","value":"8.4","unit":"ng/mL","ref":"<11.4","note":"Normal. SM diagnostic criterion requires baseline tryptase >20 ng/mL as minor criterion. Normal baseline + no skin lesions makes SM unlikely without bone marrow biopsy."},
            {"test":"24-hour urine histamine","value":"68","unit":"µg/24h","flag":"H","ref":"<80 µg/24h","note":"Upper normal — mildly elevated histamine production consistent with MCAS. Significantly elevated 24h urine histamine (>3× normal) would suggest SM or carcinoid."},
            {"test":"24-hour urine N-methylhistamine","value":"312","unit":"µg/g creatinine","flag":"H","ref":"<200","note":"Elevated — N-methylhistamine is the major histamine metabolite. Elevated during symptomatic MCAS. Best collected during/after episodes."},
            {"test":"24-hour urine PGD₂ metabolite (11β-PGF2α)","value":"2,840","unit":"ng/24h","flag":"H","ref":"<900","note":"⚠️ Markedly elevated prostaglandin D₂ metabolite — PGD₂ is a primary mast cell mediator. This is one of the most specific MCAS urinary markers."},
            {"test":"Plasma chromogranin A","value":"Normal","note":"Elevated in carcinoid syndrome — excluded"},
            {"test":"24-hour urine 5-HIAA","value":"Normal","note":"Carcinoid syndrome excluded"},
            {"test":"ANA, anti-dsDNA","value":"Both negative","note":"Autoimmune urticaria/lupus excluded"},
            {"test":"Serum C3, C4","value":"Normal","note":"HAE excluded"},
            {"test":"Skin exam (dermoscopy)","value":"No urticaria pigmentosa, no Darier sign, no telangiectasias macularis eruptiva perstans","note":"Cutaneous mastocytosis excluded on clinical exam — no skin lesions. No KIT D816V testing ordered (bone marrow biopsy not indicated with normal baseline tryptase + no skin lesions + no organomegaly)."}
          ],
          "note": "MCAS confirmed — three criteria met:\n1. Multisystem symptoms compatible with mast cell mediator release ✅\n2. Acute tryptase criterion met (21.8 > 18.8) ✅\n3. Objective biochemical evidence: elevated urine N-methylhistamine + elevated PGD₂ metabolite ✅\n4. Response to mast cell-targeted therapy (antihistamines) ✅\n5. No SM, no carcinoid, no HAE, no autoimmune urticaria ✅"
        }
      },
      "assessment": "MCAS confirmed by all criteria. Systemic mastocytosis excluded clinically (normal baseline tryptase, no skin lesions, no organomegaly — bone marrow biopsy not indicated). Elevated urinary PGD₂ metabolite and N-methylhistamine confirm mast cell mediator overproduction. Treatment: combined H1+H2 antihistamine + leukotriene modifier. Consider mast cell stabilizer (cromolyn) and low-histamine diet.",
      "plan": "1. TRIPLE MEDIATOR BLOCKADE:\n   a. H1: cetirizine 10 mg BID\n   b. H2: famotidine 20 mg BID (replaces omeprazole for GI symptoms)\n   c. Leukotriene: montelukast 10 mg nightly\n2. MAST CELL STABILIZER: cromolyn sodium (oral) 200 mg QID before meals — for GI mast cell symptoms\n3. LOW-HISTAMINE DIET counseling: avoid aged cheese, fermented foods, alcohol, shellfish, tomatoes, spinach, smoked meats, leftovers. Fresh foods preferred.\n4. TRIGGER AVOIDANCE CARD provided — laminated for wallet\n5. EpiPen × 2 always\n6. ASPIRIN/NSAID: absolute avoidance — COX-1 inhibition → unopposed leukotriene synthesis → mast cell activation\n7. Codeine/opioids: avoid — direct mast cell degranulation. Safe alternative: tramadol (less mast cell effect), acetaminophen\n8. If inadequate control: consider aspirin desensitization (paradoxically used in select MCAS patients) OR omalizumab (off-label, growing evidence)\n9. Annual tryptase: monitoring for evolution toward systemic mastocytosis (rare)\n10. Return: 6–8 weeks"
    },
    "inpatient": {
      "cc": "6-month follow-up — MCAS management optimization. Reports significant improvement but still 1–2 minor episodes per month.",
      "dx": "MCAS — improved on triple mediator blockade. Omalizumab initiated for breakthrough episodes.",
      "problems": [
        {"id":"prob-1","description":"MCAS — significantly improved. Frequency 5/8months → 1–2/month. Severity reduced.","status":"Improving"},
        {"id":"prob-2","description":"Breakthrough episodes with high stress at work — stress is strong mast cell trigger","status":"Active"},
        {"id":"prob-3","description":"Quality of life: markedly improved. Returned to social events with trigger precautions.","status":"Improved"}
      ],
      "medications": [
        {"id":"med-1","name":"Cetirizine 10 mg","dose":"BID","route":"Oral"},
        {"id":"med-2","name":"Famotidine 20 mg","dose":"BID","route":"Oral"},
        {"id":"med-3","name":"Montelukast 10 mg","dose":"Nightly","route":"Oral"},
        {"id":"med-4","name":"Cromolyn sodium 200 mg","dose":"QID before meals","route":"Oral","indication":"Mast cell stabilizer for GI"},
        {"id":"med-5","name":"Omalizumab 300 mg","dose":"SC q4 weeks (initiated this visit)","route":"SC","indication":"Refractory MCAS — off-label, growing evidence"},
        {"id":"med-6","name":"EpiPen 0.3 mg × 2","dose":"Carry at all times","route":"IM PRN"}
      ],
      "vitals": {"rows": [{"time":"6-month follow-up","bp":"110/70","hr":"66","rr":"13","spo2":"99% RA"}]},
      "labs": {
        "monitoring": {
          "title": "6-Month MCAS Monitoring",
          "rows": [
            {"test":"Baseline tryptase","value":"8.1","unit":"ng/mL","ref":"<11.4 (stable)","note":"Stable, normal — no evolution toward systemic mastocytosis"},
            {"test":"Urine PGD₂ metabolite (between episodes)","value":"1,240","unit":"ng/24h","ref":"Baseline: 2,840","note":"56% reduction from symptomatic baseline — reflects improved mast cell mediator control on therapy"},
            {"test":"Patient-reported: MCAS-QoL score","value":"52/100 (improved from 18/100)","note":"Validated MCAS quality of life measure — significant improvement"}
          ]
        }
      },
      "assessment": "MCAS significantly improved on triple mediator blockade + cromolyn. Residual breakthrough episodes with stress. Omalizumab 300 mg initiated — growing evidence for IgE-independent mast cell stabilization in MCAS. Annual tryptase stable. Quality of life markedly improved.",
      "plan": "1. Continue all existing MCAS medications\n2. Omalizumab 300 mg SC q4 weeks — reassess breakthrough episode frequency at 3 months\n3. Stress management: cognitive behavioral therapy referral for stress-triggered episodes\n4. Annual tryptase monitoring (every 12 months)\n5. Emergency action plan reviewed: 1st episode sign → antihistamine. Cardiovascular symptoms → EpiPen immediately, call 911\n6. Return: 3 months"
    }
  },
  "teachingPoints": {
    "keyLearning": [
      "MCAS diagnostic criteria (Valent): (1) multisystem symptoms; (2) acute tryptase ≥ 2×baseline+2 ng/mL; (3) response to mast cell-targeted therapy",
      "Distinguishing MCAS from SM: MCAS has normal baseline tryptase (<20), no skin lesions, no organomegaly. SM has baseline tryptase >20, urticaria pigmentosa, KIT D816V mutation.",
      "MCAS mediator markers: acute serum tryptase (best — 60–90 min after event), urine N-methylhistamine, urine PGD₂ metabolite. Draw during/shortly after episodes.",
      "High-histamine foods trigger MCAS: aged cheese, fermented foods, alcohol, shellfish, tomatoes, spinach — not IgE allergy but direct histamine load",
      "NSAIDs in MCAS: COX-1 inhibition removes prostaglandin E₂ brake on mast cell leukotriene synthesis → triggers mast cell activation. Absolute contraindication.",
      "Codeine/opioids: direct mast cell degranulation (non-IgE) — contraindicated"
    ],
    "boardPearls": [
      "Tryptase 2n+2 rule: acute tryptase must be ≥ (2 × baseline + 2 ng/mL) to meet MCAS criterion",
      "Normal baseline tryptase (<11.4) makes systemic mastocytosis unlikely — SM usually has baseline >20",
      "SM diagnostic criteria: minor = tryptase >20. Major criteria include KIT D816V, bone marrow mast cell aggregates, abnormal mast cell morphology, CD25/CD2 expression.",
      "Mast cell mediators: histamine (H1, H2 receptors), PGD₂ (flushing, hypotension), leukotrienes LTC₄/LTD₄ (bronchoconstriction, GI cramps), tryptase (structural — best serum marker)",
      "Treatment ladder: H1+H2 antihistamine → + leukotriene modifier → + cromolyn → + omalizumab → (SM: midostaurin for KIT D816V)",
      "Aspirin desensitization: paradoxically can help select MCAS patients by desensitizing COX-1 pathway — specialist-supervised only",
      "Darier sign: stroking skin lesion in cutaneous mastocytosis → urticaria/wheal = diagnostic of urticaria pigmentosa"
    ]
  },
  "references": [
    {
      "id":"Afrin-MCAS-StatPearls",
      "title":"Mast Cell Activation Syndrome",
      "authors":"Afrin LB, Ackerley MB, Bluestein LS, et al.",
      "journal":"StatPearls [Internet]",
      "year":2024,
      "url":"https://www.ncbi.nlm.nih.gov/books/NBK545148/",
      "openAccess":true,
      "validates":["MCAS diagnostic criteria (Valent 2012)","Tryptase 2n+2 criterion","Urinary mediator markers (N-methylhistamine, PGD₂)","Treatment ladder: H1/H2/leukotriene/cromolyn/omalizumab","MCAS vs systemic mastocytosis distinction"]
    },
    {
      "id":"Valent-SM-WHO-2022",
      "title":"WHO Classification of Mastocytosis: Established Concepts and New Developments",
      "authors":"Valent P, Akin C, Hartmann K, et al.",
      "journal":"Blood",
      "year":2022,
      "url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC9479031/",
      "openAccess":true,
      "validates":["WHO diagnostic criteria for systemic mastocytosis","KIT D816V mutation role","Tryptase thresholds for SM diagnosis","Bone marrow criteria","Midostaurin for advanced SM"]
    }
  ]
};
