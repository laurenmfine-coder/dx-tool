/* emr-data/alpha-gal-syndrome.js
   Alpha-Gal Syndrome (AGS) — Lone Star Tick-Induced Red Meat Allergy
   Patient: Charles Whitmore, 52M, outdoor worker
   Encounters: ED (delayed anaphylaxis after steak dinner) → Office (alpha-gal diagnosis) → Follow-up (tick avoidance + dietary counseling)
   ABAI Domain 8 — Food Allergy (emerging/non-classical)
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Charles Whitmore", "dob": "02/28/1972", "age": "52",
      "sex": "Male", "pronouns": "he/him", "mrn": "RDX-2025-95644",
      "language": "English", "race": "White",
      "phone": "(615) 555-5911", "email": "cwhitmore@landscaping.com",
      "address": "6135 Birch Ln, Pittsburgh, PA 15212",
      "insurance": "Cigna PPO",
      "pcp": "Dr. James Ostrowski, MD",
      "pharmacy": "Walgreens — Glades Rd",
      "emergencyContact": {"name": "Janet Whitmore", "phone": "(615) 555-1272", "relationship": "Wife"},
      "chiefComplaint": "Generalized hives, vomiting, and throat tightness beginning 3–4 hours after eating steak dinner",
      "diagnosis": "Alpha-gal syndrome — IgE-mediated allergy to galactose-alpha-1,3-galactose (mammalian red meat antigen)",
      "patientHPI": "About three hours after dinner last night, I started breaking out in hives all over my body and threw up, then my throat started feeling tight and scratchy. We had steak for dinner but I eat beef all the time without any problems.",
    },
    "allergies": [{"allergen": "NKDA (prior to this visit)", "reaction": "None previously identified", "severity": "N/A", "type": "N/A"}],
    "immunizations": [
      {"name": "Influenza", "date": "10/2025"},
      {"name": "Td", "date": "2022"}
    ],
    "familyHistory": ["No family history of food allergy", "Father: coronary artery disease", "Mother: type 2 diabetes"],
    "socialHistory": [
      ["Tobacco", "Former 15 pack-year, quit 8 years ago"],
      ["Alcohol", "Occasional — wine with dinner"],
      ["Occupation", "Landscape contractor — outdoor work daily in brush/wooded areas of South Florida and North Carolina mountains (seasonal contracts)"],
      ["Tick exposure", "Multiple tick bites over career — most recently 6–8 weeks ago in North Carolina mountains (found embedded tick removed after ~24h)"],
      ["Diet", "Heavy red meat consumer — steak 4–5×/week, hamburgers frequently"],
      ["Prior reactions", "3 episodes in past 14 months of 'hives and upset stomach' after dinner — attributed to 'bad meat' or 'food poisoning.' This is 4th and most severe episode."],
      ["Timing pattern", "All reactions began 3–4 hours after eating — not immediately. 'Delayed' pattern not recognized as allergic until tonight."]
    ]
  },
  "encounters": {
    "ed": {
      "cc": "3h after eating ribeye steak + butter: generalized urticaria, nausea/vomiting, throat tightness, lightheadedness. Wife administered EpiPen (patient carries from prior 'food intolerance' evaluation 6 months ago). Partially improved. Second dose given by EMS.",
      "dx": "Anaphylaxis grade III — alpha-gal syndrome suspected (delayed onset, red meat trigger, tick exposure history)",
      "problems": [
        {"id":"prob-1","description":"Anaphylaxis — grade III, red meat-triggered, 3–4h delayed onset","status":"Acute"},
        {"id":"prob-2","description":"Alpha-gal syndrome suspected — tick bite 6–8 weeks ago, multiple prior milder reactions","status":"Suspected"},
        {"id":"prob-3","description":"Hypertension — on lisinopril 10 mg daily (NOTE: ACE inhibitor may worsen allergic reactions + causes bradykinin angioedema risk)","status":"Active"},
        {"id":"prob-4","description":"4 prior episodes unrecognized as allergic — pattern: delayed hives/GI after red meat","status":"Chronic"}
      ],
      "medications": [
        {"id":"med-1","name":"Lisinopril 10 mg","dose":"Daily","route":"Oral","indication":"Hypertension — will need to address ACE inhibitor use in setting of anaphylaxis"},
        {"id":"med-2","name":"Atorvastatin 40 mg","dose":"Daily","route":"Oral","indication":"Hyperlipidemia"},
        {"id":"med-3","name":"EpiPen 0.3 mg","dose":"2 doses given (wife at home + EMS)","route":"IM","indication":"Anaphylaxis"}
      ],
      "vitals": {
        "rows": [
          {"time":"EMS arrival","bp":"88/56","hr":"126","rr":"22","temp":"37.1","spo2":"94% RA","note":"Hypotension, tachycardia — anaphylaxis grade III"},
          {"time":"ED triage (post-2 EpiPen doses)","bp":"106/68","hr":"104","rr":"18","spo2":"97% RA"},
          {"time":"2h post-Rx","bp":"128/82","hr":"78","rr":"14","spo2":"99% RA"}
        ]
      },
      "labs": {
        "anaphylaxis_workup": {
          "title": "ED Anaphylaxis Workup",
          "rows": [
            {"test":"Serum tryptase (drawn 1h post-event)","value":"34.2","unit":"ng/mL","flag":"H","ref":"<11.4","note":"Elevated — confirms mast cell activation. Will obtain baseline tryptase 24h later to rule out mastocytosis."},
            {"test":"CBC","value":"WBC 12.1 (mild leukocytosis — stress response). Eosinophils 6% (672 cells/µL) — mildly elevated.","note":"Eosinophilia consistent with allergic/atopic state"},
            {"test":"Basic metabolic panel","value":"Normal. Creatinine 1.1.","note":"No end-organ injury"},
            {"test":"ECG","value":"Sinus tachycardia, rate 104. No ischemic changes.","note":"Anaphylaxis can cause Kounis syndrome (allergic MI) — ECG normal here"}
          ]
        }
      },
      "assessment": "52M outdoor worker with multiple delayed (3–4h) anaphylactic reactions after red meat consumption + Lone Star tick bite 6–8 weeks ago = CLASSIC alpha-gal syndrome presentation. KEY features: (1) delayed onset 2–6h after red meat (not immediate); (2) Lone Star tick bite history; (3) reaction to mammalian red meat (beef, pork, lamb); (4) currently on ACE inhibitor (lisinopril) — increases anaphylaxis severity; recommend ACE inhibitor substitution. Tryptase 34.2 confirms mast cell activation.",
      "plan": "1. Diphenhydramine 50 mg IV + famotidine 20 mg IV\n2. Methylprednisolone 125 mg IV\n3. Admit for observation × 12h (biphasic risk + hemodynamic instability)\n4. Baseline tryptase 24h post-event: draw tomorrow morning\n5. Allergy/Immunology: schedule alpha-gal IgE testing + formal evaluation\n6. ACE inhibitor: discuss substitution with PCP — ACE inhibitors increase bradykinin levels, worsening anaphylactic reactions and reducing response to epinephrine. Recommend switch to ARB (losartan) or calcium channel blocker for blood pressure.\n7. Prescription: EpiPen × 2 at discharge + cetirizine 10 mg BID\n8. INTERIM DIETARY RESTRICTION: avoid all mammalian meat (beef, pork, lamb, venison, bison) and mammalian-derived products (gelatin, lard) until allergy evaluation"
    },
    "office": {
      "cc": "Allergy/Immunology consultation — alpha-gal syndrome workup, 10 days post-ED visit. Off systemic steroids × 1 week. Lisinopril switched to amlodipine 5 mg by PCP.",
      "dx": "Alpha-gal syndrome confirmed — alpha-gal IgE strongly positive. Primary Lone Star tick sensitization.",
      "problems": [
        {"id":"prob-1","description":"Alpha-gal syndrome confirmed — IgE to galactose-alpha-1,3-galactose (Gal alpha 1-3 Gal b 1-4 GlcNAc-R)","status":"Active"},
        {"id":"prob-2","description":"Occupation high-risk — daily tick exposure in landscaping. Repeat tick bites will perpetuate/worsen sensitization.","status":"Active"},
        {"id":"prob-3","description":"ACE inhibitor substituted — amlodipine 5 mg started","status":"Resolved"},
        {"id":"prob-4","description":"Dietary adjustment: red meat eliminated. Patient distressed — 'steak was my favorite food'","status":"Active"}
    ],
      "medications": [
        {"id":"med-1","name":"Cetirizine 10 mg","dose":"BID","route":"Oral","indication":"Alpha-gal pruritus prevention"},
        {"id":"med-2","name":"Amlodipine 5 mg","dose":"Daily","route":"Oral","indication":"Hypertension (replaced lisinopril)"},
        {"id":"med-3","name":"EpiPen 0.3 mg","dose":"Carry 2 at all times","route":"IM PRN","indication":"Anaphylaxis"},
        {"id":"med-4","name":"Atorvastatin 40 mg","dose":"Daily","route":"Oral","indication":"Hyperlipidemia"}
      ],
      "vitals": {"rows": [{"time":"Office visit","bp":"126/80","hr":"72","rr":"14","spo2":"99% RA"}]},
      "labs": {
        "alpha_gal_panel": {
          "title": "Alpha-Gal Syndrome Diagnostic Panel",
          "rows": [
            {"test":"Alpha-gal IgE (Galactose-alpha-1,3-galactose, cat-IgA)","value":"28.4","unit":"kUA/L","flag":"H","ref":"<0.35","note":"Class 5 — STRONGLY POSITIVE. Confirms alpha-gal syndrome. Alpha-gal = carbohydrate epitope on mammalian cells (beef, pork, lamb) NOT present in primates/humans. Lone Star tick saliva delivers alpha-gal into bloodstream during feeding → IgE sensitization."},
            {"test":"Beef-specific IgE","value":"14.2","unit":"kUA/L","flag":"H","ref":"<0.35","note":"Strongly positive — confirms beef allergy component"},
            {"test":"Pork-specific IgE","value":"11.8","unit":"kUA/L","flag":"H","ref":"<0.35","note":"Strongly positive — pork also affected (ALL mammalian red meats contain alpha-gal)"},
            {"test":"Cat-specific IgE","value":"3.4","unit":"kUA/L","flag":"H","ref":"<0.35","note":"⚠️ Cat dander CROSS-REACTIVITY with alpha-gal: cat albumin contains alpha-gal. Patients with alpha-gal syndrome often have elevated cat IgE — may experience reactions to cat dander. Distinct from standard cat allergy."},
            {"test":"Chicken-specific IgE","value":"0.08","unit":"kUA/L","ref":"<0.35","note":"Negative — poultry does NOT contain alpha-gal (birds lack the enzyme). Chicken, turkey, duck = SAFE for alpha-gal patients."},
            {"test":"Fish-specific IgE (cod, salmon)","value":"<0.1","unit":"kUA/L","note":"Negative — fish = SAFE. Marine animals lack alpha-gal."},
            {"test":"Cetuximab (chimeric monoclonal antibody) note","value":"Contains alpha-gal in Fab region — CONTRAINDICATED in alpha-gal syndrome","note":"Cetuximab (Erbitux) is a chimeric monoclonal antibody with alpha-gal in its Fab region. Patients with alpha-gal syndrome have a RISK of severe hypersensitivity reactions to cetuximab. This association was first recognized by researchers studying cetuximab reactions in the southeastern US (Lone Star tick belt). Document as medication contraindication."}
          ],
          "note": "Alpha-gal syndrome mechanism: Lone Star tick (Amblyomma americanum) bite → tick saliva contains alpha-gal + unknown co-factor → IgE sensitization to alpha-gal epitope → subsequent red meat exposure delivers alpha-gal in gut → DELAYED absorption of lipid-bound alpha-gal (3–6h) → delayed mast cell activation → delayed anaphylaxis. Delay distinguishes from IgE-mediated food allergy (typically immediate 0–2h)."
        },
        "baseline_tryptase": {
          "title": "Baseline Serum Tryptase (24h post-event)",
          "rows": [
            {"test":"Baseline serum tryptase","value":"5.8","unit":"ng/mL","ref":"<11.4","note":"Normal baseline — mastocytosis excluded. 2n+11.4 rule: if 2 × baseline + 1.4 < acute tryptase, confirms anaphylaxis (2×5.8+1.4=13.0 < 34.2 ✓)"}
          ]
        }
      },
      "assessment": "Alpha-gal syndrome confirmed with very high alpha-gal IgE (28.4 kUA/L). Lone Star tick sensitization — patient's landscaping career represents ongoing high-risk tick exposure that will perpetuate sensitization. Key counseling points: (1) ALL mammalian red meats (beef, pork, lamb, venison, bison, rabbit) must be avoided — not all animal proteins; (2) poultry and fish are safe; (3) dairy products: most patients tolerate dairy, but some react to mammalian milk products (casein contains alpha-gal) — trial elimination recommended; (4) tick avoidance is the ONLY intervention that may allow sensitization to wane over months–years; (5) cetuximab contraindicated (document in chart).",
      "plan": "1. STRICT MAMMALIAN RED MEAT AVOIDANCE: beef, pork, lamb, venison, bison, rabbit, kangaroo, game meat\n2. Dairy: trial elimination × 4 weeks then reintroduction to assess tolerance (some patients react, most tolerate)\n3. Gelatin products: may contain porcine gelatin — avoid initially; reintroduce cautiously\n4. SAFE: poultry (chicken, turkey, duck), fish/seafood, plant proteins\n5. TICK AVOIDANCE (critical — sensitization can wane 1–3 years after last tick bite):\n   a. DEET 30–40% or permethrin-treated clothing for all outdoor work\n   b. Full-body tick check after every outdoor shift\n   c. Shower within 2h of outdoor work\n   d. Consider occupational exposure modification (protective clothing, buddy tick checks)\n6. Cetuximab: document as CONTRAINDICATED medication in chart\n7. EpiPen × 2: always carry. If eating at restaurants: ask specifically about beef fat, lard, pork-based sauces in 'non-meat' dishes\n8. Medical alert bracelet: 'Alpha-Gal Syndrome — No Mammalian Red Meat'\n9. Alpha-gal IgE: recheck in 12–18 months — may decline with strict tick avoidance\n10. Return: 6 months"
    },
    "inpatient": {
      "cc": "12-month follow-up. Strict red meat avoidance maintained. Increased tick protection at work. Alpha-gal IgE declining.",
      "dx": "Alpha-gal syndrome — significant improvement. IgE declining with tick avoidance. No reactions in 12 months. Beginning cautious reintroduction discussions.",
      "problems": [
        {"id":"prob-1","description":"Alpha-gal syndrome — alpha-gal IgE declining 28.4 → 9.2 kUA/L (68% reduction) with strict tick avoidance","status":"Improving"},
        {"id":"prob-2","description":"Diet: mammalian red meat avoided. Dairy tolerated without reaction. Patient adapted well.","status":"Controlled"},
        {"id":"prob-3","description":"Tick avoidance: permethrin-treated work clothing, DEET 40%, daily tick checks. Zero tick bites reported in 12 months.","status":"Active"}
      ],
      "medications": [
        {"id":"med-1","name":"Cetirizine 10 mg","dose":"Daily (reduced from BID)","route":"Oral"},
        {"id":"med-2","name":"EpiPen 0.3 mg","dose":"Carry 2 at all times","route":"IM PRN"},
        {"id":"med-3","name":"Amlodipine 5 mg","dose":"Daily","route":"Oral","indication":"Hypertension"}
      ],
      "vitals": {"rows": [{"time":"12-month follow-up","bp":"122/76","hr":"68","rr":"13","spo2":"99% RA"}]},
      "labs": {
        "follow_up": {
          "title": "12-Month Alpha-Gal Monitoring",
          "rows": [
            {"test":"Alpha-gal IgE","value":"9.2","unit":"kUA/L","ref":"Baseline: 28.4 kUA/L","note":"68% reduction over 12 months of strict tick avoidance. Natural history of alpha-gal syndrome: sensitization can wane when tick exposure eliminated. Some patients achieve full tolerance in 3–5 years. IgE decline does not mean safe to eat red meat yet — functional tolerance testing needed."},
            {"test":"Beef-specific IgE","value":"3.8","unit":"kUA/L","ref":"Baseline: 14.2","note":"73% reduction — parallel decline with alpha-gal IgE"},
            {"test":"Serum tryptase baseline","value":"5.4","unit":"ng/mL","ref":"Normal","note":"Stable — no mastocytosis development"}
          ],
          "note": "Alpha-gal IgE declining significantly. When alpha-gal IgE reaches <1.0–2.0 kUA/L with ongoing tick avoidance, consider supervised food challenge with small amount of mammalian meat to assess tolerance. This is not yet appropriate at current levels."
        }
      },
      "assessment": "Excellent adaptation to alpha-gal syndrome. Zero reactions in 12 months. IgE declining 28.4 → 9.2 kUA/L with strict tick avoidance — expected trajectory toward eventual desensitization. Patient reports successful dietary transition (fish, poultry, plant protein). Landscaping company adopted full tick protection protocols for all employees.",
      "plan": "1. Continue strict mammalian red meat avoidance until alpha-gal IgE <2.0 kUA/L\n2. Continue strict tick avoidance — this is the primary therapeutic intervention\n3. Annual alpha-gal IgE monitoring\n4. When IgE <2.0 kUA/L: discuss supervised challenge protocol in allergy office\n5. EpiPen: continue carrying — sensitization not fully resolved\n6. Return: 12 months or sooner if any reactions"
    }
  },
  "teachingPoints": {
    "keyLearning": [
      "Alpha-gal syndrome: DELAYED anaphylaxis (3–6h) after mammalian red meat — distinguishes from all other IgE-mediated food allergies (typically 0–2h)",
      "Causative tick: Lone Star tick (Amblyomma americanum) in US. Endemic in southeastern and south-central US. Other Ixodes ticks in Europe/Australia.",
      "Alpha-gal = carbohydrate antigen on mammalian cells. NOT present in primates, birds, fish — explains why poultry and seafood are SAFE.",
      "Fat-rich meals worsen alpha-gal reactions: fat promotes delayed absorption of lipid-bound alpha-gal → timing of symptoms correlates with lipid absorption.",
      "Cetuximab (chimeric antibody) contains alpha-gal in Fab region → severe reactions in alpha-gal-sensitized patients. First identified in southeastern US tumor patients.",
      "Tick avoidance is therapeutic — alpha-gal IgE declines over 1–5 years without re-exposure. Only way to achieve tolerance."
    ],
    "boardPearls": [
      "Alpha-gal is ONLY food allergy caused by tick bite (not by food exposure directly)",
      "Delayed onset 3–6h (vs 0–2h for classic IgE food allergy) = most testable distinguishing feature",
      "Safe foods in alpha-gal: poultry (chicken, turkey), fish, shellfish — all lack alpha-gal epitope",
      "Avoid in alpha-gal: beef, pork, lamb, venison, bison, rabbit, lard, gelatin (porcine)",
      "Dairy: usually tolerated (alpha-gal in casein less bioavailable) but some patients react — individualize",
      "ACE inhibitors contraindicated in anaphylaxis-prone patients — worsen severity, reduce epinephrine response. Switch to ARB or CCB.",
      "Cetuximab contraindicated: document in allergy record. Other monoclonal antibodies safe (no alpha-gal in fully humanized antibodies).",
      "Alpha-gal IgE may cross-react with cat albumin — cat allergy testing can be positive in alpha-gal patients"
    ]
  },
  "references": [
    {
      "id":"NIH-AlphaGal-2023",
      "title":"Alpha-gal syndrome: new insights into the tick-borne allergy",
      "authors":"Commins SP.",
      "journal":"J Allergy Clin Immunol",
      "year":2020,
      "url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC7047548/",
      "openAccess":true,
      "validates":["Alpha-gal mechanism — Lone Star tick sensitization","Delayed 3–6h onset after red meat","Safe vs unsafe foods (poultry/fish safe)","Declining IgE with tick avoidance","Cetuximab cross-reactivity"]
    },
    {
      "id":"CDC-AlphaGal",
      "title":"Alpha-gal syndrome — CDC information and guidance",
      "authors":"Centers for Disease Control and Prevention",
      "journal":"CDC Health Topics",
      "year":2024,
      "url":"https://www.cdc.gov/ticks/alpha-gal/index.html",
      "openAccess":true,
      "validates":["Lone Star tick geographic distribution (southeastern US)","Tick avoidance recommendations","Diagnosis criteria and IgE testing","Dietary restrictions and safe proteins"]
    }
  ]
};