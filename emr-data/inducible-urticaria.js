/* emr-data/inducible-urticaria.js
   Inducible Urticaria — Cold Urticaria + Cholinergic Urticaria Overlap
   Patient: Priya Nair, 26F, college student
   Encounters: ED (near-drowning/anaphylaxis after cold water swim) → Office (cold urticaria diagnosis + ice cube test) → Follow-up (antihistamine optimization + swimming safety)
   ABAI Domain 5 — Urticaria/Angioedema (inducible subtypes)
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Priya Nair", "dob": "03/05/1999", "age": "26",
      "sex": "Female", "pronouns": "she/her", "mrn": "RDX-2025-95488",
      "language": "English", "race": "Asian",
      "phone": "(561) 774-2291", "email": "priya.nair@university.edu",
      "address": "210 Campus Dr Apt 4B, Boca Raton, FL 33431",
      "insurance": "Student Health Plan — Aetna",
      "pcp": "Student Health Services",
      "pharmacy": "Campus Pharmacy",
      "emergencyContact": {"name": "Ravi Nair (father)", "phone": "(561) 774-9002", "relationship": "Father"},
      "chiefComplaint": "Generalized hives, hypotension, and near-loss of consciousness while swimming in ocean",
      "diagnosis": "Cold urticaria with cold-induced anaphylaxis"
    },
    "allergies": [{"allergen": "NKDA", "reaction": "None known", "severity": "N/A", "type": "N/A"}],
    "immunizations": [
      {"name": "Influenza", "date": "09/2025"},
      {"name": "COVID-19", "date": "08/2025"}
    ],
    "familyHistory": ["No family history of urticaria, atopy, or cold-related illness", "Mother: seasonal allergic rhinitis"],
    "socialHistory": [
      ["Tobacco", "Never"],
      ["Occupation", "Graduate student — marine biology"],
      ["Exercise", "Daily ocean swimming — research fieldwork"],
      ["Alcohol", "Social"],
      ["Prior episodes", "3 previous episodes of hives after cold swimming in past 8 months — attributed to jellyfish; no prior evaluation"],
      ["Winter symptoms", "Hives on hands and face when washing dishes with cold water in winter"]
    ]
  },
  "encounters": {
    "ed": {
      "cc": "Acute onset generalized hives, facial angioedema, hypotension, and pre-syncope beginning within 3 minutes of entering 68°F ocean water for research dive. Bystander administered epinephrine auto-injector. EMS called.",
      "dx": "Cold urticaria with cold-induced anaphylaxis (Grade III anaphylaxis — cardiovascular involvement)",
      "problems": [
        {"id":"prob-1","description":"Cold urticaria — history of hives with cold water exposure × 8 months","status":"Active"},
        {"id":"prob-2","description":"Cold-induced anaphylaxis — cardiovascular collapse in cold water exposure","status":"Acute"},
        {"id":"prob-3","description":"Occupation-related: marine biology fieldwork requires ocean swimming — safety risk","status":"Active"}
      ],
      "medications": [
        {"id":"med-1","name":"Epinephrine 0.3 mg (EpiPen)","dose":"Administered by bystander IM left thigh at scene","route":"IM","indication":"Anaphylaxis emergency treatment"}
      ],
      "vitals": {
        "rows": [
          {"time":"EMS arrival (beach)","bp":"74/40","hr":"138","rr":"24","temp":"35.8","spo2":"92% RA","note":"Profound hypotension — anaphylaxis grade III"},
          {"time":"ED arrival (post-epinephrine + 1L NS)","bp":"98/62","hr":"112","rr":"20","spo2":"96% RA"},
          {"time":"2h post-Rx","bp":"118/74","hr":"84","rr":"16","spo2":"99% RA"}
        ]
      },
      "labs": {
        "anaphylaxis_workup": {
          "title": "Acute Anaphylaxis Labs",
          "rows": [
            {"test":"Serum tryptase (drawn at 1h post-event)","value":"28.4","unit":"ng/mL","flag":"H","ref":"<11.4","note":"⚠️ Elevated tryptase — confirms mast cell activation/anaphylaxis. Peak at 60–90 min post-event. Baseline tryptase needed at follow-up (>24h post-event) to rule out mastocytosis."},
            {"test":"CBC — Eosinophil Count","value":"280","unit":"cells/µL","ref":"<500","note":"Normal — not eosinophilic urticaria"},
            {"test":"Metabolic panel","value":"Normal","note":"No end-organ involvement"},
            {"test":"Beta-tryptase (baseline — drawn 48h later)","value":"4.1","unit":"ng/mL","ref":"<11.4","note":"Normal baseline tryptase — mastocytosis excluded"}
          ]
        }
      },
      "assessment": "26F marine biology student with 8-month history of cold water-triggered hives and now cold-induced anaphylaxis in 68°F ocean. Classic cold urticaria with severe cold-induced anaphylaxis. Immediate risk: ocean fieldwork requires cold water immersion — life-threatening risk without treatment and safety protocols. Serum tryptase 28.4 confirms mast cell activation. Baseline tryptase 4.1 (drawn 48h later) = mastocytosis excluded.",
      "plan": "1. Monitor for biphasic reaction × 4–6h\n2. Diphenhydramine 50 mg IV + famotidine 20 mg IV\n3. Prednisolone 40 mg × 3 days\n4. Prescribe 2× EpiPen 0.3 mg at discharge\n5. CRITICAL safety instruction: NO cold water exposure until evaluated by allergist\n6. Allergy/Immunology referral urgent: cold urticaria workup, antihistamine optimization, swimming safety protocol\n7. Notify university research department of occupational risk"
    },
    "office": {
      "cc": "Allergy/Immunology evaluation — cold urticaria, 2 weeks post-anaphylaxis. Also reporting separate episodes of small itchy hives during exercise (gym workouts) — different from cold-water hives.",
      "dx": "1. Cold urticaria (primary acquired) — confirmed by ice cube test. 2. Cholinergic urticaria — exercise/sweat-triggered. Two DISTINCT inducible urticaria subtypes.",
      "problems": [
        {"id":"prob-1","description":"Cold urticaria — ice cube test positive. Primary acquired type.","status":"Active"},
        {"id":"prob-2","description":"Cholinergic urticaria — exercise-triggered pinpoint hives (separate diagnosis)","status":"Active"},
        {"id":"prob-3","description":"Cold-induced anaphylaxis history — high-risk patient","status":"Active"},
        {"id":"prob-4","description":"Secondary causes of cold urticaria must be excluded (cryoglobulins, MGUS, infection)","status":"Evaluation"}
      ],
      "medications": [
        {"id":"med-1","name":"Cetirizine 10 mg","dose":"Daily (current)","route":"Oral","indication":"Antihistamine — inadequate dose for inducible urticaria"},
        {"id":"med-2","name":"EpiPen 0.3 mg","dose":"Carry 2 at all times","route":"IM PRN","indication":"Anaphylaxis emergency"}
      ],
      "vitals": {"rows": [{"time":"Office visit","bp":"112/70","hr":"68","rr":"14","spo2":"99% RA"}]},
      "labs": {
        "cold_urticaria_workup": {
          "title": "Cold Urticaria Secondary Cause Workup",
          "rows": [
            {"test":"Ice Cube Test","value":"POSITIVE","flag":"H","note":"Procedure: ice cube in thin plastic bag applied to volar forearm × 5 minutes. After removal, warm 5–10 min. POSITIVE: 5 × 8 mm wheal + flare at ice contact site. Confirms cold urticaria. Note: ice cube test has ~70% sensitivity — negative test does NOT exclude cold urticaria; cold stimulation test (cold water immersion of forearm) is more sensitive."},
            {"test":"Critical temperature threshold (cold water forearm test)","value":"18°C (64°F)","note":"Forearm immersed in water cooled from 20°C → critical wheal/flare response at 18°C. Temperatures above 18°C = safe. Ocean water <18°C = dangerous. 68°F ocean = 20°C = just at threshold — explains why anaphylaxis occurred."},
            {"test":"Cryoglobulins","value":"Not detected","note":"Negative — no cryoglobulinemia (excludes plasma cell dyscrasia, hepatitis C, lymphoma as secondary cause)"},
            {"test":"Cold agglutinins","value":"Negative","note":"Excludes cold agglutinin disease (Mycoplasma, lymphoma)"},
            {"test":"ANA","value":"1:40 speckled","note":"Low-titer ANA — not clinically significant for cold urticaria workup. Will repeat in 12 months if symptoms change."},
            {"test":"CBC + differential","value":"Normal","note":"No lymphocytosis, eosinophilia, or anemia"},
            {"test":"Hepatitis B surface antigen / anti-HCV","value":"Both negative","note":"Viral triggers of cold urticaria excluded"},
            {"test":"Serum protein electrophoresis (SPEP)","value":"Normal — no M-spike","note":"MGUS excluded"},
            {"test":"TSH","value":"1.8 mIU/L","note":"Normal — thyroid dysfunction excluded"}
          ],
          "note": "Secondary workup: all negative → PRIMARY ACQUIRED cold urticaria confirmed (no underlying systemic disease identified). Primary acquired cold urticaria accounts for ~95% of cases."
        },
        "inducible_urticaria_subtypes": {
          "title": "Inducible Urticaria Classification — Teaching Panel",
          "rows": [
            {"test":"THIS PATIENT — Cold urticaria","value":"Mast cell degranulation triggered by cold stimulus → histamine/LT release → hive at cold contact site. KEY DANGER: immersion in cold water → full-body mast cell activation → anaphylaxis. Critical threshold: 18°C in this patient.","note":""},
            {"test":"THIS PATIENT — Cholinergic urticaria","value":"Elevated core body temperature (exercise, hot bath, stress) → cholinergic nerve activation → ACh → mast cell degranulation → 2–3 mm pinpoint hives with large surrounding flare. Distinct from cold urticaria — separate mechanism, separate treatment.","note":""},
            {"test":"Dermographism (symptomatic)","value":"Linear whealing after skin stroking ('writing on skin'). Most common inducible urticaria (2–5% population). Diagnosis: dermographometer or firm stroking of volar forearm — wheal within 5 minutes.","note":"Not present in this patient"},
            {"test":"Pressure urticaria (delayed)","value":"Delayed whealing 2–6h after sustained pressure (e.g., tight waistband, prolonged sitting). Deeper swelling, often painful. Diagnosis: pressure test — 15 kg weight applied to shoulder × 15 min, read at 6h.","note":"Not present"},
            {"test":"Solar urticaria","value":"Whealing within minutes of UV/visible light exposure. Disappears in dark. Diagnosis: phototesting. Rare.","note":"Not present"},
            {"test":"Aquagenic urticaria","value":"Hives with water contact at any temperature. Extremely rare. Distinct from cold urticaria — cold water is the trigger in cold urticaria, NOT water itself.","note":"Not present"}
          ]
        }
      },
      "assessment": "Two inducible urticaria subtypes confirmed:\n1. PRIMARY ACQUIRED COLD URTICARIA: ice cube test positive, critical threshold 18°C, secondary causes excluded. High-risk: cold-induced anaphylaxis history.\n2. CHOLINERGIC URTICARIA: exercise-triggered pinpoint hives — separate mechanism (cholinergic, not IgE-mediated).\n\nTreatment plan: high-dose non-sedating antihistamine + EpiPen education + critical temperature avoidance protocol. Academic accommodation letter provided.",
      "plan": "1. ANTIHISTAMINE ESCALATION: cetirizine 10 mg BID (standard dose insufficient for cold urticaria; up to 4× standard dose per EAACI guidelines). Consider bilastine or rupatadine (anti-PAF properties — shown to have additional benefit in cold urticaria).\n2. EpiPen: carry 2 at all times. Auto-injection training reviewed.\n3. CRITICAL TEMPERATURE PROTOCOL: avoid water/environments below 18°C (64°F). Pre-warm with antihistamine before any cold exposure. Never swim alone.\n4. CHOLINERGIC URTICARIA: cetirizine 10 mg BID also helps. Pre-treat with antihistamine before exercise. Cool shower trigger (cold water) to be avoided separately.\n5. ACADEMIC ACCOMMODATION: letter provided — alternative to ocean fieldwork while treatment optimized. Laboratory-based research until safe threshold established.\n6. OMALIZUMAB: if H1-antihistamine optimized dose fails → anti-IgE therapy. Strong evidence in cold urticaria and cholinergic urticaria.\n7. Return: 6 weeks to reassess control"
    },
    "inpatient": {
      "cc": "6-week follow-up — antihistamine dose optimization complete. Patient wants to return to ocean fieldwork.",
      "dx": "Cold urticaria — improved with high-dose cetirizine 20 mg BID. Critical temperature threshold unchanged. Omalizumab initiated for cold-induced anaphylaxis prevention.",
      "problems": [
        {"id":"prob-1","description":"Cold urticaria — partially controlled on H1-antihistamine 4× dose. Still symptomatic with cold wind.","status":"Active/Improving"},
        {"id":"prob-2","description":"Ocean fieldwork: critical temperature unchanged at 18°C — ocean temps average 78°F (26°C) in summer. Safer window identified.","status":"Active"},
        {"id":"prob-3","description":"Cholinergic urticaria — well-controlled on cetirizine 20 mg BID.","status":"Controlled"}
      ],
      "medications": [
        {"id":"med-1","name":"Cetirizine 10 mg","dose":"BID (20 mg/day — 2× standard)","route":"Oral","indication":"Cold urticaria + cholinergic urticaria"},
        {"id":"med-2","name":"Omalizumab 300 mg","dose":"SC monthly (initiated this visit)","route":"SC","indication":"Refractory cold urticaria with anaphylaxis history — anti-IgE therapy"},
        {"id":"med-3","name":"EpiPen 0.3 mg × 2","dose":"Carry at all times","route":"IM PRN"}
      ],
      "vitals": {"rows": [{"time":"Follow-up","bp":"108/68","hr":"66","rr":"13","spo2":"99% RA"}]},
      "labs": {
        "omalizumab_initiation": {
          "title": "Omalizumab Eligibility for Cold Urticaria",
          "rows": [
            {"test":"Total IgE","value":"62","unit":"IU/mL","note":"Normal IgE — IMPORTANT: omalizumab for CHRONIC URTICARIA (CSU, cold urticaria, cholinergic urticaria) is APPROVED regardless of IgE level and WITHOUT requiring sensitization. This is different from omalizumab for ASTHMA (which requires IgE 30–700 + positive SPT). Urticaria approval: 150 mg or 300 mg SC q4 weeks regardless of IgE or weight."},
            {"test":"Cold stimulation test (repeat after 6 weeks cetirizine)","value":"Critical threshold still 18°C — unchanged","note":"High-dose antihistamine does not shift critical temperature threshold in cold urticaria — only reduces symptom severity at threshold. Omalizumab can raise or eliminate critical temperature threshold in responders."}
          ],
          "note": "Omalizumab in inducible urticaria: APPROVED for CSU (chronic spontaneous urticaria). OFF-LABEL but strong evidence for cold urticaria, cholinergic urticaria, symptomatic dermographism. The COLD2 trial showed omalizumab 300 mg raised critical temperature threshold from 18°C to >30°C in cold urticaria responders within 4 weeks."
        }
      },
      "assessment": "Cold urticaria partially controlled on cetirizine 20 mg/day — cholinergic urticaria well-controlled. Critical temperature threshold unchanged. Omalizumab 300 mg SC initiated — expected to raise critical temperature threshold within 4–8 weeks. Ocean fieldwork safety protocol: Florida summer ocean temperatures average 82–86°F (28–30°C) — well above current 18°C threshold and especially above anticipated omalizumab-raised threshold. Supervised return to ocean work planned at 8 weeks post-omalizumab.",
      "plan": "1. Omalizumab 300 mg SC q4 weeks — continue cetirizine 20 mg/day concurrently\n2. Critical temperature re-testing: 8 weeks post-omalizumab initiation\n3. Ocean return criteria: critical temperature threshold >25°C (77°F) AND pre-treated with antihistamine AND supervised buddy diving protocol\n4. EpiPen protocol: carry 2 at all times; inject at any systemic symptom (not just wait for hypotension)\n5. Cholinergic urticaria: maintain cetirizine, pre-treat before exercise\n6. Return: 8 weeks with critical temperature retest"
    }
  },
  "teachingPoints": {
    "keyLearning": [
      "Cold urticaria: mast cell degranulation triggered by cold stimulus. Ice cube test: wheal at ice contact site after 5 min application + 5–10 min rewarming.",
      "Critical temperature threshold: water temperature that triggers whealing — measured by cold water forearm test. Key safety parameter.",
      "Cold-induced anaphylaxis: total body immersion in cold water → massive simultaneous mast cell activation → cardiovascular collapse. Most dangerous scenario.",
      "Secondary cold urticaria workup: cryoglobulins, cold agglutinins, SPEP, hepatitis panel, ANA, CBC. Primary acquired = all negative.",
      "Omalizumab for urticaria: approved for CSU regardless of IgE level. Strong off-label evidence for cold urticaria — raises critical temperature threshold.",
      "Inducible urticaria subtypes: cold, cholinergic, dermographism, pressure, solar, aquagenic — each has distinct trigger, mechanism, and diagnostic test"
    ],
    "boardPearls": [
      "Ice cube test: positive = wheal at ice contact site. Sensitivity ~70% — cold water test more sensitive.",
      "Cold urticaria ≠ aquagenic urticaria: cold water triggers cold urticaria; any water temperature triggers aquagenic.",
      "Cholinergic urticaria: 2–3 mm pinpoint hives with large flare, triggered by core temperature rise (exercise, hot bath, emotion). Small hive size is pathognomonic.",
      "Dermographism: most common inducible urticaria (2–5% of population). Linear wheal after stroking skin.",
      "Omalizumab for CSU: 150 mg or 300 mg SC q4 weeks. Does NOT require IgE threshold or allergen sensitization — completely different eligibility vs. asthma indication.",
      "Serum tryptase in anaphylaxis: draw at 60–90 min post-event. Baseline >24h later. If baseline elevated: evaluate for mastocytosis.",
      "EAACI guidelines: H1-antihistamine up to 4× standard dose before escalating to omalizumab in inducible urticaria."
    ]
  },
  "references": [
    {
      "id":"StatPearls-ColdUrticaria",
      "title":"Cold Urticaria",
      "authors":"Riedl MA, Ballow M.",
      "journal":"StatPearls [Internet]",
      "year":2024,
      "url":"https://www.ncbi.nlm.nih.gov/books/NBK532966/",
      "openAccess":true,
      "validates":["Ice cube test procedure and interpretation","Cold-induced anaphylaxis mechanism","Secondary cause workup (cryoglobulins, hepatitis, SPEP)","Critical temperature threshold testing","Primary vs secondary cold urticaria classification"]
    },
    {
      "id":"Magerl-EAACI-Urticaria-2022",
      "title":"The definition, diagnostic testing, and management of chronic inducible urticarias — The EAACI/GA2LEN/EuroGuiDerm/APAAACI guideline 2022",
      "authors":"Magerl M, Altrichter S, Borzova E, et al.",
      "journal":"Allergy",
      "year":2022,
      "url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC9299767/",
      "openAccess":true,
      "validates":["All inducible urticaria subtypes and diagnostic tests","Antihistamine up to 4× dose recommendation","Omalizumab in refractory inducible urticaria","Cold stimulation test protocol and critical threshold","Dermographism, cholinergic, pressure, solar, aquagenic classification"]
    }
  ]
};
