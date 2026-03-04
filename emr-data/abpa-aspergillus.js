/* emr-data/abpa-aspergillus.js
   Allergic Bronchopulmonary Aspergillosis (ABPA) in Asthma
   Patient: Fatima Al-Rashid, 34F, asthmatic, no CF
   Story: Refractory asthma with pulmonary infiltrates → ABPA diagnosis → oral steroid + itraconazole
   Encounters: ED (infiltrate + wheeze) → Allergy/Pulm office (ABPA workup + diagnosis) → 3-month follow-up
   ABAI Domain 7 — Asthma complications / Fungal hypersensitivity
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Fatima Al-Rashid",
      "dob": "03/18/1990",
      "age": "34",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "RDX-2025-95341",
      "language": "English/Arabic (bilingual)",
      "race": "Middle Eastern or North African",
      "phone": "(954) 771-0293",
      "email": "falrashid@email.com",
      "address": "5512 Cypress Creek Pkwy, Fort Lauderdale, FL 33309",
      "insurance": "Aetna PPO",
      "pcp": "Dr. Rania Khalil, MD",
      "pharmacy": "Walgreens — Oakland Park Blvd",
      "emergencyContact": {"name": "Tariq Al-Rashid", "phone": "(954) 771-0447", "relationship": "Husband"},
      "chiefComplaint": "Worsening asthma, fever, and new 'spot on the lung' found on chest X-ray at urgent care",
      "diagnosis": "Allergic bronchopulmonary aspergillosis (ABPA) — Stage I (ABPA-S, pre-bronchiectasis)"
    },
    "allergies": [
      {"allergen": "Sulfonamides", "reaction": "Urticaria", "severity": "Moderate", "type": "Drug"},
      {"allergen": "Penicillin", "reaction": "Rash as child — never formally evaluated", "severity": "Unknown", "type": "Drug-unverified"}
    ],
    "immunizations": [
      {"name": "Influenza", "date": "10/2025", "site": "Left deltoid"},
      {"name": "Pneumococcal PCV20", "date": "2023"},
      {"name": "COVID-19", "date": "09/2025"}
    ],
    "familyHistory": [
      "Mother: allergic rhinitis, asthma",
      "Father: type 2 diabetes",
      "No family history of cystic fibrosis"
    ],
    "socialHistory": [
      ["Tobacco", "Never smoker"],
      ["Occupation", "Elementary school librarian"],
      ["Housing", "Apartment — lives near a construction site with significant excavation; mold noted in bathroom"],
      ["Humidity", "High — South Florida"],
      ["Pets", "One indoor cat"],
      ["Asthma history", "Diagnosed age 12. Usually mild-moderate — controlled on medium-dose ICS. 2 exacerbations in past 18 months, both required oral steroids. Treated twice for 'pneumonia' last year — retrospectively likely ABPA flares."]
    ]
  },

  "encounters": {
    "ed": {
      "cc": "5-day history of productive cough with brownish mucus plugs, low-grade fever (38.1°C), worsening dyspnea, and decreased response to albuterol. Urgent care chest X-ray showed right upper lobe infiltrate — referred to ED.",
      "dx": "Pulmonary infiltrate with asthma exacerbation — ABPA high on differential",
      "problems": [
        {"id":"p1","description":"Moderate-persistent asthma — on fluticasone 220 mcg/salmeterol 21 mcg BID, inadequately controlled","status":"Active"},
        {"id":"p2","description":"New right upper lobe pulmonary infiltrate on CXR — eosinophilic etiology vs. infection","status":"Active"},
        {"id":"p3","description":"Productive cough with brownish mucus plugs — classic ABPA symptom","status":"Active"},
        {"id":"p4","description":"Two prior 'pneumonia' episodes treated with antibiotics without cultures — possibly prior ABPA flares","status":"Historical"},
        {"id":"p5","description":"Mold exposure — bathroom mold + construction site near home","status":"Active"}
      ],
      "medications": [
        {"id":"m1","name":"Fluticasone 220 mcg/salmeterol 21 mcg (Advair Diskus)","dose":"1 inhalation BID","route":"Inhaled","indication":"Asthma controller — medium/high ICS"},
        {"id":"m2","name":"Albuterol MDI 90 mcg","dose":"2 puffs q4h PRN","route":"Inhaled","indication":"Rescue — using q2h × 5 days"},
        {"id":"m3","name":"Loratadine 10 mg","dose":"Daily","route":"Oral","indication":"Allergic rhinitis"}
      ],
      "vitals": {"rows":[
        {"time":"Triage","bp":"122/78","hr":"104","rr":"24","temp":"38.3°C","spo2":"92% RA"},
        {"time":"60 min post-Rx","bp":"118/76","hr":"88","rr":"18","temp":"38.1°C","spo2":"96% 2L NC"}
      ]},
      "labs": {
        "cbc": {
          "title": "CBC with Differential",
          "rows": [
            {"test":"WBC","value":"13.4","unit":"K/µL","flag":"H","ref":"4.5–11.0"},
            {"test":"Eosinophils %","value":"18","unit":"%","flag":"H","ref":"1–4"},
            {"test":"Absolute Eosinophil Count","value":"2,412","unit":"cells/µL","flag":"H","ref":"<500","note":"Marked eosinophilia — highly suggestive of eosinophilic pulmonary process (ABPA, eosinophilic pneumonia, CEP, parasites)"},
            {"test":"Neutrophils","value":"64","unit":"%"},
            {"test":"Hemoglobin","value":"12.8","unit":"g/dL","ref":"12.0–16.0"},
            {"test":"Platelets","value":"298","unit":"K/µL"}
          ]
        },
        "chemistry": {
          "title": "Basic Metabolic Panel",
          "rows": [
            {"test":"Sodium","value":"138","unit":"mEq/L"},
            {"test":"Creatinine","value":"0.81","unit":"mg/dL"},
            {"test":"Glucose","value":"96","unit":"mg/dL"}
          ]
        },
        "initial_fungal": {
          "title": "Initial Fungal / Allergy Screen (ED)",
          "rows": [
            {"test":"Total IgE (serum)","value":"1,840","unit":"IU/mL","flag":"H","ref":"0–100","note":"⚠️ MARKEDLY ELEVATED — ABPA threshold is >1000 IU/mL during active disease. 1,840 IU/mL = active ABPA exacerbation. Note: IgE will fall after corticosteroid treatment — this baseline value is critical."},
            {"test":"Aspergillus fumigatus skin prick test","value":"DEFERRED to outpatient","note":"SPT for A. fumigatus (if available) or serum-specific IgE ordered as outpatient"}
          ]
        }
      },
      "imaging": [
        {
          "type": "Chest X-Ray (PA/Lateral)",
          "time": "ED",
          "findings": "Right upper lobe patchy consolidation with air bronchograms. Left perihilar infiltrate. Bilateral hyperinflation. No pneumothorax. No pleural effusion. Subtle right upper lobe bronchial wall thickening.",
          "impression": "Bilateral pulmonary infiltrates — right upper lobe predominant. In context of asthma, eosinophilia, and elevated IgE: ABPA is the leading diagnosis. Cannot exclude atypical pneumonia or eosinophilic pneumonia without further workup."
        }
      ],
      "assessment": "34F with known asthma presenting with pulmonary infiltrates, marked eosinophilia (2,412 cells/µL), and total IgE 1,840 IU/mL. The combination of: (1) asthma + (2) pulmonary eosinophilia + (3) IgE >1000 + (4) brownish mucus plugs = ABPA until proven otherwise. Two prior 'pneumonia' episodes that did not respond to antibiotics are retrospectively likely prior ABPA flares. Admitted for IV steroids, further ABPA workup, and HRCT chest.",
      "plan": "1. IV methylprednisolone 60 mg q6h — both asthma exacerbation + likely ABPA\n2. Albuterol q4h + ipratropium q6h\n3. Supplemental O₂ titrate to SpO₂ ≥94%\n4. ADMIT to medicine/allergy service\n5. Inpatient workup:\n   — HRCT chest (high-resolution, thin cuts through bronchi)\n   — Aspergillus fumigatus serum-specific IgE (f6)\n   — Aspergillus fumigatus serum-specific IgG (precipitins)\n   — Sputum culture × 3 + fungal culture\n   — Serum galactomannan (if immunocompromised status uncertain)\n6. Allergy/Immunology consult placed\n7. Document baseline IgE (1,840 IU/mL) — critical for monitoring treatment response\n8. Flag: patient has unverified penicillin allergy — formal evaluation needed for future antibiotic stewardship"
    },

    "office": {
      "cc": "Allergy/Immunology outpatient follow-up — 10 days post-discharge. Completed 14-day IV → oral prednisolone course. ABPA workup results reviewed.",
      "dx": "ABPA-S (seropositive, without central bronchiectasis) — Confirmed. Initiating itraconazole steroid-sparing therapy.",
      "problems": [
        {"id":"p1","description":"ABPA-S confirmed — all Rosenberg-Patterson criteria met","status":"Active"},
        {"id":"p2","description":"Asthma — underlying condition, now with clearer etiology for recurrent exacerbations","status":"Active"},
        {"id":"p3","description":"Steroid-associated hyperglycemia during hospitalization — resolved","status":"Resolved"},
        {"id":"p4","description":"Mold remediation needed — bathroom mold + construction site","status":"Active"}
      ],
      "medications": [
        {"id":"m1","name":"Prednisolone 0.5 mg/kg/day (42 mg)","dose":"Tapering — currently 30 mg/day, taper over 3 months total","route":"Oral","indication":"ABPA acute treatment — Greenberger protocol"},
        {"id":"m2","name":"Fluticasone/salmeterol 250/50 mcg","dose":"1 puff BID","route":"Inhaled","indication":"Asthma controller"},
        {"id":"m3","name":"Albuterol","dose":"PRN","route":"Inhaled"},
        {"id":"m4","name":"Itraconazole 200 mg","dose":"BID × 16 weeks (starting today)","route":"Oral","indication":"Steroid-sparing antifungal — reduces Aspergillus fungal burden. STARTING TODAY after baseline LFTs obtained."},
        {"id":"m5","name":"Omeprazole 20 mg","dose":"30 min before itraconazole","route":"Oral","indication":"Acid increases itraconazole absorption — take with acidic beverage (cola) for optimal absorption"},
        {"id":"m6","name":"Calcium 600 mg + Vitamin D3 1000 IU","dose":"BID","route":"Oral","indication":"Bone protection — chronic corticosteroid use"}
      ],
      "vitals": {"rows":[
        {"time":"Outpatient visit","bp":"126/80","hr":"72","rr":"14","spo2":"98% RA","wt":"67 kg","pef":"86% predicted"}
      ]},
      "labs": {
        "abpa_confirmation": {
          "title": "Full ABPA Diagnostic Panel (Inpatient + Outpatient)",
          "time": "Confirmed results",
          "rows": [
            {"test":"Total IgE (serum) — BASELINE before steroids","value":"1,840","unit":"IU/mL","flag":"H","ref":"ABPA threshold: >1000 IU/mL","note":"✅ Criterion met. Baseline documented BEFORE steroid initiation — critical for monitoring."},
            {"test":"Aspergillus fumigatus specific IgE (f6)","value":"4.8","unit":"kUA/L","flag":"H","ref":"<0.35 kUA/L","note":"✅ Class 4 sensitization — positive. Criterion met. Confirms AF sensitization (not just non-specific IgE elevation)."},
            {"test":"Aspergillus fumigatus specific IgG (precipitins)","value":"Positive (2.4× upper limit)","flag":"H","note":"✅ Criterion met. Aspergillus-specific IgG (precipitating antibodies) = Type III immune complex component. Distinguishes ABPA from simple AF sensitization."},
            {"test":"Blood eosinophils (off steroids, baseline)","value":"2,412","unit":"cells/µL","flag":"H","ref":"<500","note":"✅ Supportive criterion met (>500 cells/µL). Marked eosinophilia."},
            {"test":"Aspergillus fumigatus skin prick test (SPT)","value":"Performed — wheal 8mm / flare 18mm","note":"✅ Positive SPT (wheal ≥3mm > saline control). Confirms IgE-mediated sensitization to A. fumigatus."},
            {"test":"Sputum culture (× 3 samples)","value":"Aspergillus fumigatus isolated in 2/3 samples","note":"Supportive — AF colonization in airways confirmed. Not required for diagnosis but consistent with ABPA."},
            {"test":"Sputum Gram stain","value":"Many eosinophils, fungal hyphae seen (rare). No bacteria.","note":"Eosinophil-rich sputum — inflammatory pattern consistent with ABPA."},
            {"test":"Serum galactomannan","value":"0.3 (negative <0.5)","note":"Negative — no invasive aspergillosis. Galactomannan positive in invasive disease, negative in ABPA (hypersensitivity, not tissue invasion)."},
            {"test":"Baseline LFTs (before itraconazole)","value":"ALT 22, AST 19, ALP 78, Tbili 0.6","note":"All normal — safe to initiate itraconazole. Monitor LFTs q4–6 weeks during therapy."}
          ],
          "note": "ABPA DIAGNOSIS CONFIRMED: All 5 Rosenberg-Patterson major criteria met: (1) Asthma ✅ (2) AF sensitization — SPT positive ✅ (3) Total IgE >1000 ✅ (4) AF-specific IgE elevated ✅ (5) AF-specific IgG (precipitins) positive ✅. Supportive: eosinophilia ✅, pulmonary infiltrates ✅, Aspergillus in sputum ✅. Classification: ABPA-S (seropositive) — HRCT shows no central bronchiectasis → Stage I / pre-bronchiectasis."
        },
        "hrct": {
          "title": "HRCT Chest — Thin Section (1.25mm cuts)",
          "time": "Inpatient",
          "rows": [
            {"test":"Bronchiectasis","value":"ABSENT — no bronchial dilation or cylindrical/varicose changes","note":"⚠️ KEY FINDING: No central bronchiectasis = ABPA-S (seropositive, Stage I). Early diagnosis — treatment may prevent progression to ABPA-CB (central bronchiectasis stage)."},
            {"test":"Mucus plugging","value":"Right upper lobe and bilateral perihilar bronchi — mucus impaction. No high-attenuation mucus (HAM) — HAM present in ~30% of ABPA cases.","flag":"H"},
            {"test":"Infiltrates","value":"Right upper lobe consolidation and left perihilar atelectasis — consistent with mucus impaction and lobar collapse.","flag":"H"},
            {"test":"Tree-in-bud","value":"Focal right upper lobe — small airways disease from mucus plugging."},
            {"test":"Finger-in-glove opacities","value":"Not present on this scan — may appear with more severe mucus plugging."},
            {"test":"Air trapping","value":"Diffuse bilateral air trapping on expiratory sequences — consistent with underlying asthma."}
          ],
          "note": "HRCT interpretation: Mucus plugging without central bronchiectasis = ABPA-S (Stage I). Early diagnosis is critical — treatment at this stage may prevent progression to irreversible central bronchiectasis (ABPA-CB, Stage II). The absence of high-attenuation mucus (HAM, calcium-density) does not exclude ABPA — HAM is specific but only ~30% sensitive."
        }
      },
      "assessment": "ABPA-S confirmed in 34F with atopic asthma. All diagnostic criteria met. HRCT reassuringly shows NO central bronchiectasis — Stage I disease. No CF history or CF mutation testing required (no CF risk factors). Galactomannan negative — invasive aspergillosis excluded. Treatment plan: prednisolone taper (Greenberger protocol) + itraconazole 200 mg BID × 16 weeks (steroid-sparing). Key monitoring: serial total IgE — target ≥25–35% reduction from baseline (1,840 → <1,380 IU/mL) to confirm response. Itraconazole level at week 2 (target trough >0.5 mg/L).",
      "plan": "ABPA TREATMENT PROTOCOL:\n1. Prednisolone taper (Greenberger protocol):\n   — Week 1–2: 0.5 mg/kg/day (42 mg) — completed\n   — Week 3–8: 0.5 mg/kg every other day\n   — Week 9–12: taper by 5–10 mg/2 weeks\n   — Goal: discontinue by week 12–16 if IgE responding\n2. Itraconazole 200 mg BID × 16 weeks:\n   — Take with food + cola (acid enhances absorption)\n   — Check itraconazole trough level at week 2 (target 0.5–2.0 mg/L)\n   — LFTs q4 weeks\n   — Drug interactions: avoid CYP3A4 substrates (statins — clarithromycin caution)\n3. Monitoring IgE: total IgE at 4, 8, 12 weeks\n   — Response: ≥25–35% fall from baseline (1,840 IU/mL)\n   — Doubling of baseline IgE during remission = new exacerbation threshold\n4. Spirometry at each visit\n5. HRCT at 6 months to confirm no bronchiectasis development\n6. Mold remediation: professional bathroom remediation. N95 during construction exposure.\n7. Biologic consideration: omalizumab has evidence in ABPA. IgE 1,840 IU/mL exceeds standard asthma dosing range (>700 IU/mL limit). Consider dupilumab if inadequate response to itraconazole + steroids.\n8. Patient education: ABPA is not an infection — it is a hypersensitivity to Aspergillus. Antibiotics do NOT treat ABPA. This is why prior 'pneumonia' courses failed."
    },

    "inpatient": {
      "cc": "3-month follow-up — itraconazole course complete, prednisolone fully tapered. Response assessment.",
      "dx": "ABPA — good treatment response. IgE declined 62% from baseline. No central bronchiectasis on follow-up HRCT. Asthma control improved.",
      "problems": [
        {"id":"p1","description":"ABPA — remission. IgE monitoring ongoing.","status":"Improving"},
        {"id":"p2","description":"Asthma — significantly improved. ICS/LABA continued.","status":"Improving"},
        {"id":"p3","description":"Itraconazole-related elevated LFTs (mild) — resolved after dose hold × 2 weeks, then resumed","status":"Resolved"},
        {"id":"p4","description":"Bathroom mold remediated. Avoiding construction site route.","status":"Resolved"}
      ],
      "medications": [
        {"id":"m1","name":"Fluticasone/salmeterol 250/50 mcg","dose":"1 puff BID (continuing — asthma control maintained)","route":"Inhaled"},
        {"id":"m2","name":"Albuterol PRN","dose":"PRN (used 0–1×/week)","route":"Inhaled"},
        {"id":"m3","name":"Itraconazole","dose":"COMPLETED 16-week course","route":"Oral","indication":"Course finished — off itraconazole"}
      ],
      "vitals": {"rows":[
        {"time":"3-month follow-up","bp":"118/74","hr":"68","rr":"13","spo2":"99% RA","pef":"94% predicted"}
      ]},
      "labs": {
        "response_monitoring": {
          "title": "3-Month Response Assessment",
          "rows": [
            {"test":"Total IgE","value":"702","unit":"IU/mL","ref":"Baseline 1,840 IU/mL","note":"62% reduction from baseline (1,840 → 702). Target was ≥25–35% reduction. EXCELLENT response. IgE will not return to normal — residual elevation expected. New baseline for monitoring: 702 IU/mL. Future IgE >1,404 (doubling of 702) = exacerbation threshold."},
            {"test":"Blood eosinophils","value":"280","unit":"cells/µL","ref":"Baseline: 2,412","note":"88% reduction from baseline. Near-normal. Reflects resolution of eosinophilic airway inflammation."},
            {"test":"FEV₁","value":"2.98 L (91% predicted)","ref":"Baseline: 2.41 L (73%)", "note":"Significant improvement. +24% from baseline."},
            {"test":"FEV₁/FVC","value":"0.79","note":"Normal. Obstruction resolved."},
            {"test":"LFTs (post-itraconazole)","value":"ALT 28, AST 22 — Normal","note":"Normalized after brief itraconazole hold at week 8. Completed full course."},
            {"test":"HRCT Chest (6 months)","value":"PENDING — scheduled next week","note":"Will confirm no new central bronchiectasis development. Key long-term monitoring tool."}
          ],
          "note": "Key teaching: After treatment, the target is a ≥25–35% REDUCTION in IgE from the pre-treatment baseline — NOT normalization. In ABPA remission, total IgE remains elevated above population normal. The new post-treatment IgE becomes the patient's personal baseline. A doubling of THIS value triggers treatment for a new exacerbation."
        }
      },
      "assessment": "Excellent ABPA treatment response: 62% IgE reduction, 88% eosinophil reduction, FEV₁ 73%→91%, PEF normalized. Off systemic corticosteroids. Itraconazole course complete. Mild transient LFT elevation resolved. Asthma control markedly improved — recurrent 'pneumonia' episodes now explained and preventable with ABPA monitoring and early treatment.",
      "plan": "LONG-TERM ABPA MANAGEMENT:\n1. Serial IgE monitoring: q3–6 months. New baseline = 702 IU/mL. Doubling (>1,400 IU/mL) = initiate treatment for new exacerbation.\n2. Symptom monitoring: brown mucus plugs, infiltrates on CXR, worsening asthma = ABPA exacerbation until proven otherwise\n3. HRCT at 6 months (scheduled) — confirm no bronchiectasis\n4. Annual spirometry\n5. Allergen avoidance: mold-damp environments, compost, soil, construction sites\n6. Consider omalizumab or dupilumab if frequent exacerbations (>2/year) despite monitoring — IgE 702 now within omalizumab range (was 1,840 before treatment)\n7. Future exacerbation treatment: prednisolone 0.5 mg/kg × 2 weeks, then taper. Add itraconazole.\n8. Return: 3 months with repeat IgE"
    }
  },

  "teachingPoints": {
    "keyLearning": [
      "ABPA occurs in asthma and CF — not in healthy individuals. Aspergillus fumigatus is the causative organism >95%",
      "Diagnostic criteria (Rosenberg-Patterson): asthma + AF sensitization (SPT/sIgE) + IgE >1000 IU/mL + AF-specific IgE elevated + AF-specific IgG (precipitins)",
      "Brown mucus plugs = ABPA until proven otherwise in an asthmatic",
      "HRCT: central bronchiectasis (proximal, spares peripheral) is pathognomonic. High-attenuation mucus (30% of cases). Finger-in-glove opacities.",
      "Monitor with serial IgE: target ≥25–35% reduction from baseline. Doubling of post-treatment baseline = exacerbation threshold.",
      "IgE >700 IU/mL is outside standard omalizumab dosing for asthma — use dupilumab if biologic needed",
      "Galactomannan is NEGATIVE in ABPA — positive only in invasive aspergillosis. ABPA is hypersensitivity, not invasion."
    ],
    "boardPearls": [
      "ABPA triad for ABAI: asthma (or CF) + AF sensitization + IgE >1000 IU/mL",
      "AF-specific IgG (precipitins) positive = distinguishes ABPA from simple AF sensitization (sensitization alone can cause IgE elevation without ABPA)",
      "ABPA-S vs ABPA-CB: S = seropositive only (no bronchiectasis). CB = central bronchiectasis present. CB is irreversible.",
      "Treatment: prednisolone (acute) + itraconazole (steroid-sparing, 16 weeks). Voriconazole is alternative if itraconazole not tolerated.",
      "IgE monitoring: does NOT normalize in remission. Residual elevation expected. New baseline = post-treatment IgE. Doubling = treat.",
      "HLA-DR2 and HLA-DR5 = genetic risk factors for ABPA (increased susceptibility to AF sensitization)",
      "High-attenuation mucus (HAM) on HRCT: calcium-density plugs = highly specific for ABPA (~95%) but only ~30% sensitive",
      "Itraconazole drug interactions: CYP3A4 inhibitor — avoid concurrent simvastatin, lovastatin. Reduces tacrolimus levels."
    ]
  },

  "references": [
    {
      "id": "Greenberger-ABPA-PMC",
      "title": "Allergic bronchopulmonary aspergillosis",
      "authors": "Greenberger PA, Bush RK, Demain JG, et al.",
      "journal": "J Allergy Clin Immunol Pract",
      "year": 2014,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3468979/",
      "openAccess": true,
      "validates": ["Rosenberg-Patterson diagnostic criteria","IgE >1000 threshold","ABPA-S vs ABPA-CB staging","Prednisolone Greenberger protocol","Serial IgE monitoring — 25–35% reduction target"]
    },
    {
      "id": "StatPearls-ABPA",
      "title": "Allergic Bronchopulmonary Aspergillosis",
      "authors": "StatPearls Publishing",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK430909/",
      "openAccess": true,
      "validates": ["ABPA pathophysiology — Type 1 + Type 3 mechanism","HLA associations","Itraconazole 16-week protocol","High-attenuation mucus on HRCT","Finger-in-glove opacities"]
    },
    {
      "id": "StatPearls-Asthma",
      "title": "Asthma",
      "authors": "StatPearls Publishing",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK430901/",
      "openAccess": true,
      "validates": ["ABPA as asthma complication","Eosinophilic pulmonary infiltrates in asthma","Recurrent pneumonia as ABPA clue"]
    }
  ]
};
