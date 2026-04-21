/* emr-data/hypersensitivity-pneumonitis.js
   Hypersensitivity Pneumonitis — Bird Fancier's Lung (Chronic Fibrotic HP)
   Patient: Eleanor Vasquez, 67F, lifelong bird breeder
   Story: Progressive dyspnea + UIP-pattern on CT → HP vs IPF diagnostic challenge → antigen avoidance trial → nintedanib initiated
   Encounters: Office (initial pulm/allergy referral) → CT/BAL workup → 6-month follow-up (partial response)
   ABAI Domain 7 extension — HP classification, antigen identification, serum precipitins, BAL lymphocytosis, fibrotic vs non-fibrotic
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Eleanor Vasquez",
      "patientHPI": "I've been getting more and more short of breath when I walk upstairs or do things around the house, and it's been going on for over a year now. I also have this dry cough that won't go away, and I've lost about 12 pounds without trying. I love my birds - I have over 40 parakeets that I take care of every day, and they bring me so much joy.",
      "dob": "07/22/1957",
      "age": "67",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "RDX-2025-95447",
      "phone": "(619) 555-1224",
      "address": "9148 Magnolia Blvd, Baltimore, MD 21214",
      "insurance": "Medicare + AARP Supplement",
      "pcp": "Dr. Marcus Hill, MD",
      "chiefComplaint": "Progressive dyspnea on exertion × 14 months, dry cough, 12 lb weight loss. Owns 40+ birds (parakeets, cockatiels, African Greys) for 25 years.",
      "diagnosis": "Chronic fibrotic hypersensitivity pneumonitis (Bird Fancier's Lung). Antigen: avian proteins (bloom, feather, serum). Progressive fibrosis on HRCT. Antigen avoidance initiated. Nintedanib added for fibrotic progression."
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Rash — reported childhood. Never formally evaluated.",
        "severity": "Unknown"
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025"
      },
      {
        "name": "Pneumococcal PCV20",
        "date": "2023"
      },
      {
        "name": "COVID-19 (bivalent)",
        "date": "09/2025"
      }
    ],
    "familyHistory": [
      "Mother: lung cancer (smoker)",
      "No family history of pulmonary fibrosis, autoimmune disease, or inflammatory bowel disease"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Never smoker"
      ],
      [
        "Alcohol",
        "Social — 1–2 drinks/week"
      ],
      [
        "Occupation",
        "Retired schoolteacher"
      ],
      [
        "Avian exposure",
        "Bird breeder × 25 years. Currently owns 40+ birds (parakeets, cockatiels, 2 African Greys). Birds housed in a dedicated aviary room. Cleans cages daily. Sleeps adjacent to aviary room."
      ],
      [
        "Other antigens",
        "No hot tub, no occupational mold/dust exposure, no feather bedding (replaced 3 years ago — no improvement)"
      ],
      [
        "Exercise tolerance",
        "Baseline walked 2 miles/day. Now limited to 200 feet before stopping due to dyspnea."
      ]
    ]
  },
  "encounters": {
    "ed": {
      "cc": "Allergy/Immunology + Pulmonology co-consultation. Referred by PCP for progressive unexplained dyspnea. PFTs ordered by PCP show restrictive pattern. CT ordered — results pending. Question: is this HP, IPF, or another ILD?",
      "dx": "Chronic fibrotic hypersensitivity pneumonitis — bird fancier's lung strongly suspected. Radiographic pattern awaiting final read. Serum precipitins and BAL ordered. Antigen avoidance counseled urgently.",
      "problems": [
        {
          "id": "prob-1",
          "description": "Progressive exertional dyspnea × 14 months — worsening. Now SOB walking to mailbox.",
          "status": "Active"
        },
        {
          "id": "prob-2",
          "description": "Chronic dry cough × 18 months — precedes dyspnea onset",
          "status": "Active"
        },
        {
          "id": "prob-3",
          "description": "Unintentional weight loss 12 lbs × 8 months",
          "status": "Active"
        },
        {
          "id": "prob-4",
          "description": "Avian antigen exposure × 25 years (bird breeder — 40+ birds). Chronic fibrotic HP leading diagnosis.",
          "status": "Active"
        },
        {
          "id": "prob-5",
          "description": "Restrictive spirometry pattern on PFTs (PCP). HRCT of chest ordered — pending.",
          "status": "Active"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lisinopril 10 mg",
          "dose": "Daily",
          "route": "Oral",
          "indication": "Hypertension"
        },
        {
          "id": "med-2",
          "name": "Atorvastatin 40 mg",
          "dose": "Daily",
          "route": "Oral"
        },
        {
          "id": "med-3",
          "name": "Albuterol MDI",
          "dose": "PRN (minimal relief)",
          "route": "Inhaled",
          "note": "Minimal bronchodilator response — consistent with fibrotic/restrictive disease"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "Clinic visit",
            "bp": "136/82",
            "hr": "88",
            "rr": "18",
            "temp": "37.1",
            "spo2": "93% RA at rest",
            "note": "⚠️ SpO₂ drops to 84% with 6-minute walk test (desaturation with exertion — fibrotic pattern)"
          }
        ]
      },
      "labs": {
        "pfts": {
          "title": "Pulmonary Function Tests (PCP-ordered, 3 weeks prior)",
          "rows": [
            {
              "test": "FVC",
              "value": "1.98 L (58% predicted)",
              "flag": "L",
              "note": "Reduced — restrictive physiology"
            },
            {
              "test": "FEV₁",
              "value": "1.61 L (62% predicted)",
              "flag": "L"
            },
            {
              "test": "FEV₁/FVC",
              "value": "0.81",
              "note": "Normal ratio — NOT obstructive. Restrictive pattern confirmed."
            },
            {
              "test": "TLC (body pleth)",
              "value": "3.8 L (62% predicted)",
              "flag": "L",
              "note": "Reduced TLC confirms restriction"
            },
            {
              "test": "DLCO",
              "value": "38% predicted",
              "flag": "L",
              "note": "⚠️ Severely reduced DLCO — impaired gas exchange. Correlates with fibrotic parenchymal destruction. Key severity marker in HP."
            },
            {
              "test": "Post-BD FEV₁ change",
              "value": "+3% / +60 mL",
              "note": "No significant bronchodilator response — not asthma/COPD"
            }
          ]
        },
        "serology": {
          "title": "HP Serology Panel",
          "time": "Drawn at initial consultation",
          "rows": [
            {
              "test": "Avian serum precipitins (budgerigar/parakeet IgG)",
              "value": "POSITIVE",
              "flag": "H",
              "note": "⚠️ Positive serum precipitins (IgG antibodies to avian proteins). Confirms sensitization to avian antigens. Does NOT diagnose HP alone — 40–50% of bird owners have precipitins without HP. But in context of clinical syndrome + HRCT findings = highly supportive of bird fancier's lung."
            },
            {
              "test": "Avian serum precipitins (pigeon IgG)",
              "value": "POSITIVE",
              "flag": "H"
            },
            {
              "test": "Farmer's lung precipitins (thermophilic actinomycetes)",
              "value": "Negative"
            },
            {
              "test": "Hot tub lung panel (M. avium complex)",
              "value": "Negative"
            },
            {
              "test": "ANA",
              "value": "1:40 (speckled)",
              "note": "Low-titer, non-specific. Repeat in 3 months if fibrosis confirmed — CTD-ILD must be excluded."
            },
            {
              "test": "Anti-CCP",
              "value": "Negative"
            },
            {
              "test": "Anti-MDA5",
              "value": "Negative",
              "note": "Important: MDA5-positive RP-ILD can mimic HP — excluded"
            },
            {
              "test": "RF",
              "value": "14 IU/mL (borderline)",
              "note": "Non-specific at this level"
            },
            {
              "test": "CBC with differential",
              "value": "WBC 8.4k, Eosinophils 3% (252/µL)",
              "note": "Eosinophilia NOT a feature of HP (key distinguishing point from eosinophilic pneumonia)"
            }
          ]
        }
      },
      "imaging": [
        {
          "type": "HRCT Chest Without Contrast",
          "findings": "Bilateral reticular opacities predominating in the lower lobes with subpleural and peribronchovascular distribution. Honeycombing with traction bronchiectasis in lower lobe subpleural regions bilaterally — fibrotic component. Upper lobe predominant ground-glass opacities with mosaic attenuation (air-trapping on expiratory views) — inflammatory/non-fibrotic component. No pleural effusion. No mediastinal lymphadenopathy. Centrilobular nodules present in upper lobes.",
          "impression": "Mixed pattern ILD: lower lobe fibrotic component (UIP-like) + upper/mid lobe inflammatory component (centrilobular nodules, GGO, mosaic attenuation). Pattern MOST CONSISTENT with chronic fibrotic hypersensitivity pneumonitis. Key distinguishing features from IPF: upper lobe GGO/nodules (HP), mosaic attenuation from air-trapping (HP), bilateral distribution without strict basal predominance. IPF: strict basal/subpleural honeycombing, no GGO, no upper lobe nodules."
        }
      ],
      "assessment": "67F with 25-year avian antigen exposure, chronic progressive restrictive ILD, positive avian precipitins, and HRCT showing mixed fibrotic/inflammatory pattern — DIAGNOSIS: Chronic fibrotic hypersensitivity pneumonitis (Bird Fancier's Lung). ATS/ERS 2020 HP classification: HIGH CONFIDENCE HP (positive antigen exposure history + HRCT consistent with HP + positive serum precipitins). Bronchoscopy with BAL planned to confirm lymphocyte-predominant alveolitis. The key diagnostic challenge: chronic fibrotic HP can appear UIP-like on HRCT and be misdiagnosed as IPF — the distinguishing features are: (1) identified causative antigen, (2) upper lobe GGO/nodules, (3) mosaic attenuation (air trapping). Prognosis: fibrotic HP has mortality similar to IPF. ANTIGEN AVOIDANCE IS URGENT — most important intervention.",
      "plan": "1. ANTIGEN AVOIDANCE — URGENT: all birds must be removed from home and ideally re-homed. NOT partial reduction — complete removal required. Even 'weekend trips away from birds' will not achieve sufficient antigen reduction in a chronic fibrotic pattern.\n2. Bronchoscopy + BAL: scheduled in 1 week. Expected: lymphocyte-predominant BAL (>30% lymphocytes), CD4:CD8 ratio typically <1 in HP (inverted from sarcoidosis where CD4:CD8 >3.5)\n3. Multidisciplinary ILD team (MDD) review: radiologist + pulmonologist + pathologist review for IPF vs chronic HP diagnosis\n4. PFTs with DLCO every 6 months — DLCO is best functional severity marker\n5. Hold antifibrotics pending MDD and antigen avoidance trial\n6. Pulmonary rehabilitation referral\n7. Supplemental O₂: prescribed 2L NC for exertion and nocturnal use (SpO₂ 84% on 6MWT)"
    },
    "office": {
      "cc": "Follow-up after bronchoscopy/BAL results. 3 months post-initial consultation. All birds removed from home × 10 weeks. Patient reports minimal symptomatic improvement so far.",
      "dx": "Chronic fibrotic HP confirmed by BAL lymphocytosis + MDD. Antigen avoidance ongoing. Fibrotic progression documented — nintedanib initiated.",
      "problems": [
        {
          "id": "prob-1",
          "description": "HP — antigen avoidance × 10 weeks. Partial symptomatic improvement (dyspnea at 600 feet vs 200 feet). Fibrotic pattern on HRCT — antifibrotic therapy indicated.",
          "status": "Active — progressing"
        },
        {
          "id": "prob-2",
          "description": "BAL: lymphocytosis 42% — confirms HP (normal BAL <15% lymphocytes; HP typically >30%)",
          "status": "Resolved — confirmed HP"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Nintedanib (Ofev) 150 mg",
          "dose": "BID with food",
          "route": "Oral",
          "indication": "Antifibrotic — FDA-approved for progressive fibrosing ILD including fibrotic HP. Slows FVC decline. NOT a cure — does not reverse fibrosis."
        },
        {
          "id": "med-2",
          "name": "Prednisone 40 mg",
          "dose": "Daily (6-week taper)",
          "route": "Oral",
          "indication": "Short-course OCS for inflammatory component — if HP has active alveolitis. Fibrotic disease responds poorly to steroids. Taper: 40mg × 2wk → 30mg × 2wk → 20mg → 10mg → off."
        },
        {
          "id": "med-3",
          "name": "All prior medications continued",
          "dose": "Unchanged"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "3-month follow-up",
            "bp": "130/78",
            "hr": "82",
            "rr": "16",
            "spo2": "94% RA at rest (93% at initial visit)",
            "note": "Marginal SpO₂ improvement at rest"
          }
        ]
      },
      "labs": {
        "bal": {
          "title": "Bronchoalveolar Lavage (BAL) — performed 1 week after initial visit",
          "rows": [
            {
              "test": "BAL Lymphocytes",
              "value": "42%",
              "flag": "H",
              "ref": "Normal <15%",
              "note": "⚠️ Markedly elevated BAL lymphocytes = lymphocyte-predominant alveolitis — HALLMARK of HP. Confirms active alveolitis. In chronic fibrotic HP, BAL lymphocytosis may be less dramatic than acute/subacute HP (can be 20–30% in fibrotic phase)."
            },
            {
              "test": "BAL CD4:CD8 ratio",
              "value": "0.8",
              "ref": "Normal >1.5",
              "note": "INVERTED CD4:CD8 ratio (<1) = characteristic of HP. Contrast: sarcoidosis CD4:CD8 typically >3.5 (CD4-predominant). This helps distinguish HP from sarcoidosis when both present with granulomatous ILD."
            },
            {
              "test": "BAL Neutrophils",
              "value": "8%",
              "note": "Mild elevation — consistent with fibrotic component"
            },
            {
              "test": "BAL Eosinophils",
              "value": "1%",
              "note": "NOT elevated — helps exclude eosinophilic pneumonia"
            },
            {
              "test": "BAL Culture",
              "value": "No growth"
            },
            {
              "test": "BAL Mycobacteria",
              "value": "Negative AFB/culture"
            },
            {
              "test": "BAL Cytology",
              "value": "No malignant cells"
            }
          ],
          "note": "BAL profile: lymphocyte-predominant (42%) with inverted CD4:CD8 (0.8). Together with HRCT pattern and avian antigen exposure → HIGH CONFIDENCE chronic fibrotic HP (ATS/ERS 2020 criteria). Surgical lung biopsy NOT required given high-confidence diagnosis."
        },
        "pfts_repeat": {
          "title": "Repeat PFTs — 3 months after antigen avoidance",
          "rows": [
            {
              "test": "FVC",
              "value": "1.88 L (55% predicted)",
              "flag": "L",
              "note": "Declined from 58% → 55% predicted despite antigen avoidance. Fibrotic progression ongoing."
            },
            {
              "test": "DLCO",
              "value": "35% predicted",
              "flag": "L",
              "note": "Declined from 38% → 35%. Progressive impairment in gas exchange. Indicates need for antifibrotic therapy."
            }
          ],
          "note": "FVC decline of 3 percentage points + DLCO decline = progressive fibrosing ILD despite 10 weeks of antigen avoidance. ATS/ERS guidance: antifibrotic therapy (nintedanib or pirfenidone) indicated for progressive fibrosing HP with documented FVC decline."
        }
      },
      "assessment": "Confirmed chronic fibrotic HP with progressive fibrosis despite antigen avoidance. BAL lymphocytosis 42% + inverted CD4:CD8 confirms alveolitis. FVC declined 55% (from 58%) and DLCO 35% (from 38%) in 3 months. MDD conclusion: chronic fibrotic HP with progressive fibrosing phenotype. Two-pronged therapy: (1) antifibrotic — nintedanib 150 mg BID (FDA-approved for progressive fibrosing ILD, INBUILD trial data: reduced FVC decline 57%); (2) anti-inflammatory — short prednisone taper for active alveolitis component. Lung transplant evaluation: FVC <50% + DLCO <35% predicted = referral threshold. Currently at threshold — transplant center referral initiated.",
      "plan": "1. Nintedanib 150 mg BID started (with food to reduce GI side effects: diarrhea most common — manage with loperamide PRN)\n2. Prednisone taper 40 mg → off over 6 weeks\n3. CONFIRM complete antigen avoidance: home visit by environmental health nurse recommended. Avian antigen persists in home dust for 12–18 months after bird removal — HEPA filtration and deep cleaning critical\n4. Lung transplant evaluation: referral to UF Health Transplant Center\n5. Pulmonary rehab: enrolled (3×/week)\n6. Repeat PFTs with DLCO in 6 months\n7. Nintedanib monitoring: LFTs at 1 month, 3 months, then q6 months (hepatotoxicity risk)"
    },
    "inpatient": {
      "cc": "6-month follow-up on nintedanib. Assessment of antifibrotic response, lung transplant evaluation status, exercise tolerance.",
      "dx": "Chronic fibrotic HP on nintedanib. FVC stabilized (minimal decline). Lung transplant evaluation ongoing. Listed for transplant.",
      "problems": [
        {
          "id": "prob-1",
          "description": "HP — antigen avoidance × 7 months. Complete bird removal. Nintedanib × 6 months.",
          "status": "Chronic — stable on therapy"
        },
        {
          "id": "prob-2",
          "description": "Lung transplant evaluation complete. Listed for bilateral lung transplant.",
          "status": "Active"
        },
        {
          "id": "prob-3",
          "description": "Nintedanib GI side effects: diarrhea grade 1 managed with loperamide PRN. LFTs mildly elevated (1.5× ULN) — monitoring.",
          "status": "Active"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Nintedanib 150 mg BID — continued"
        },
        {
          "id": "med-2",
          "name": "Loperamide 2 mg PRN diarrhea"
        },
        {
          "id": "med-3",
          "name": "Supplemental O₂ 2L NC with exertion (now requiring 3L for ADLs)"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "6-month follow-up",
            "bp": "128/76",
            "hr": "86",
            "rr": "17",
            "spo2": "92% RA at rest",
            "note": "SpO₂ 92% at rest — has declined from 94% (3-month visit). Requiring higher O₂."
          }
        ]
      },
      "labs": {
        "pfts_6mo": {
          "title": "PFTs at 6 Months (nintedanib × 6 months)",
          "rows": [
            {
              "test": "FVC",
              "value": "1.84 L (54% predicted)",
              "flag": "L",
              "note": "Minimal decline 55% → 54% (1 percentage point in 6 months on nintedanib vs 3 points in 3 months off antifibrotic). Stabilization response."
            },
            {
              "test": "DLCO",
              "value": "33% predicted",
              "flag": "L",
              "note": "33% (was 35%). Continued slow decline but markedly slower than pre-treatment trajectory."
            },
            {
              "test": "6MWT distance",
              "value": "210 meters",
              "ref": "Baseline ~350m (estimated from prior activity)",
              "note": "Significant exercise limitation. SpO₂ nadir 81% on 6MWT — supplemental O₂ during walk required."
            }
          ],
          "note": "Nintedanib response: FVC decline slowed from 3pp/3 months to ~2pp/6 months. Consistent with INBUILD trial results. Not disease reversal — antifibrotics slow progression, do not improve or cure fibrosis. Continued listing for bilateral lung transplant."
        },
        "lfts": {
          "title": "Nintedanib Safety Labs",
          "rows": [
            {
              "test": "ALT",
              "value": "52 U/L",
              "flag": "H",
              "ref": "7–35 U/L",
              "note": "1.5× ULN — mild elevation. Monitor. Dose reduce to 100 mg BID if >3× ULN. Discontinue if >5× ULN."
            },
            {
              "test": "AST",
              "value": "44 U/L",
              "flag": "H",
              "ref": "10–40 U/L"
            },
            {
              "test": "Total bilirubin",
              "value": "0.8 mg/dL",
              "note": "Normal"
            }
          ]
        }
      },
      "assessment": "Fibrotic HP with partial nintedanib response — FVC decline slowed but not halted. DLCO continues gradual decline. Resting SpO₂ now 92% — progressive respiratory failure. Lung transplant listing confirmed: bilateral lung transplant preferred over single lung for HP/fibrotic ILD (better survival outcomes). Prognosis: median survival for fibrotic HP listed for transplant is ~2.5–3 years without transplant. Transplant offers meaningful survival benefit in eligible patients.",
      "plan": "1. Continue nintedanib 150 mg BID\n2. LFTs: mild elevation (<2× ULN) — continue current dose, recheck in 6 weeks\n3. O₂ prescription updated: 3L NC at rest, 4L NC with exertion\n4. Bilateral lung transplant: active on list\n5. Palliative care consultation: for symptom management, goals of care discussion\n6. Repeat PFTs in 6 months\n7. Antigen avoidance verification: repeat avian-specific IgG at 12 months (should decrease with continued avoidance)"
    }
  },
  "teachingPoints": {
    "keyLearning": [
      "Chronic fibrotic HP can appear UIP-like on HRCT — distinguished from IPF by: identified causative antigen, upper lobe GGO/nodules, mosaic attenuation (air-trapping), inverted BAL CD4:CD8 ratio",
      "BAL lymphocytosis >30% with inverted CD4:CD8 (<1.0) is the hallmark of HP — contrast with sarcoidosis (CD4:CD8 >3.5)",
      "Serum precipitins (IgG antibodies) confirm sensitization but do NOT diagnose HP — 40–50% of asymptomatically exposed individuals have positive precipitins",
      "Antigen avoidance is the single most important therapeutic intervention — must be COMPLETE, not partial. Avian antigen persists in home dust 12–18 months after bird removal.",
      "Fibrotic HP responds poorly to steroids (unlike non-fibrotic HP) — antifibrotics (nintedanib) indicated for progressive fibrosing phenotype",
      "DLCO is the most sensitive functional measure of HP severity and progression — tracks parenchymal gas exchange loss",
      "Lung transplant referral threshold: FVC <50% OR DLCO <35% predicted"
    ],
    "boardPearls": [
      "HP classifications (ATS/ERS 2020): non-fibrotic HP (reversible alveolitis) vs fibrotic HP (progressive, poor prognosis similar to IPF).",
      "Classic HP antigens: Bird Fancier's Lung (avian proteins/bloom); Farmer's Lung (Saccharopolyspora rectivirgula — thermophilic actinomycetes in moldy hay); Hot Tub Lung (Mycobacterium avium complex); Humidifier Lung; Chemical HP (isocyanates — MDI, TDI, HDI).",
      "BAL: HP = lymphocyte-predominant (>30%) with CD4:CD8 <1.0. Sarcoidosis = CD4:CD8 >3.5. Eosinophilic pneumonia = eosinophil-predominant (>25%). IPF = neutrophil-predominant.",
      "HRCT HP vs IPF: HP has upper lobe GGO + centrilobular nodules + mosaic attenuation. IPF is strict basal subpleural honeycombing, no GGO.",
      "Nintedanib (INBUILD trial): reduces FVC decline in progressive fibrosing ILD (non-IPF) by 57%. Approved for fibrotic HP.",
      "Isocyanate HP: same sensitizing agent as occupational asthma (TDI) but different clinical syndrome — HP causes parenchymal ILD, not bronchospasm. Both require antigen avoidance."
    ]
  },
  "references": [
    {
      "id": "ATS-HP-2020",
      "title": "An Official ATS/JRS/ALAT Clinical Practice Guideline: Diagnosis of Hypersensitivity Pneumonitis in Adults",
      "authors": "Raghu G, et al.",
      "journal": "Am J Respir Crit Care Med",
      "year": 2020,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7301733/",
      "openAccess": true,
      "validates": [
        "HP classification (non-fibrotic vs fibrotic)",
        "Diagnostic confidence levels (high/low confidence)",
        "BAL lymphocytosis criteria",
        "Serum precipitins interpretation",
        "HRCT patterns for HP"
      ]
    },
    {
      "id": "StatPearls-HP",
      "title": "Hypersensitivity Pneumonitis",
      "authors": "StatPearls Publishing",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK538137/",
      "openAccess": true,
      "validates": [
        "HP antigen classification (Bird Fancier, Farmer's Lung, Hot Tub Lung)",
        "Immune mechanisms (Th1/Th17 T-cell mediated, Type III immune complex)",
        "PFT restrictive pattern and DLCO reduction",
        "Antigen avoidance as primary treatment"
      ]
    },
    {
      "id": "INBUILD-Trial",
      "title": "Nintedanib in Progressive Fibrosing Interstitial Lung Diseases (INBUILD)",
      "authors": "Flaherty KR, et al.",
      "journal": "N Engl J Med",
      "year": 2019,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7227440/",
      "openAccess": true,
      "validates": [
        "Nintedanib 57% reduction in FVC decline for progressive fibrosing ILD",
        "Fibrotic HP included in INBUILD study population",
        "GI side effects (diarrhea) and LFT monitoring requirements"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Chronic Fibrotic Hypersensitivity Pneumonitis (Bird Fancier's Lung)",
    "caseId": "hypersensitivity-pneumonitis"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: chronic fibrotic hypersensitivity pneumonitis (bird fancier's lung) from prolonged avian antigen exposure. Key learning: (1) Hypersensitivity pneumonitis (HP) is a type III and type IV immune response to inhaled organic antigens, now classified into two phenotypes: non-fibrotic (acute/subacute) and fibrotic (chronic). Classic antigens: bird proteins (bloom, feathers, droppings) causing bird fancier's/bird breeder's lung; thermophilic actinomycetes in moldy hay causing farmer's lung; Aspergillus and Penicillium in water-damaged buildings; isocyanates in spray painting; metalworking fluids; hot tub use (Mycobacterium avium complex). (2) Presentation varies. Non-fibrotic HP resembles a flu-like illness 4-8 hours after exposure with cough, dyspnea, fever, and myalgias that improve with removal. Fibrotic HP presents like IPF: insidious exertional dyspnea, chronic cough, weight loss, and bibasilar crackles over months to years. The diagnostic challenge is that by the time fibrosis develops, many patients do not remember or report the exposure, and the history must be taken with extraordinary care — ask specifically about birds, down pillows, feather duvets, humidifiers, hot tubs, water damage, and occupational exposures. (3) Diagnostic workup. HRCT is central: classic findings are ground-glass opacities, centrilobular nodules, and the 'three-density' or 'headcheese' sign (regions of ground-glass, normal lung, and air-trapping/mosaic attenuation). Fibrotic HP adds traction bronchiectasis, reticulation, and honeycombing, often with upper/mid-lung predominance (in contrast to IPF's basal predominance). Serum precipitating IgG antibodies to suspected antigens support the diagnosis but are neither sensitive nor specific. Bronchoalveolar lavage typically shows lymphocytosis (over 30%, often over 50%), which strongly supports HP. Surgical or transbronchial lung biopsy may be needed when imaging is atypical — classic histology is poorly formed non-necrotizing granulomas, bronchiolocentric lymphoid infiltrates, and giant cells. (4) Management. Antigen avoidance is the single most important intervention and can reverse non-fibrotic disease and halt progression in fibrotic disease. In this case, that means permanent removal of all birds from the home, thorough environmental cleaning, and vigilance against other avian exposures. Systemic corticosteroids (prednisone 0.5 mg/kg for 4-8 weeks with taper) help symptoms and gas exchange in non-fibrotic HP but have less impact on established fibrosis. Antifibrotics — nintedanib (INBUILD trial demonstrated slowing of FVC decline in progressive fibrosing ILDs including HP) and pirfenidone — are now standard for progressive fibrotic HP. Mycophenolate and azathioprine are options for steroid-sparing maintenance. (5) Classic pitfalls: (a) misdiagnosing fibrotic HP as IPF and missing the reversible component — always take a meticulous exposure history in any patient with ILD. (b) Allowing continued exposure even after diagnosis — many patients struggle to give up beloved pets; a structured family discussion and often a social work consult help. (c) Failing to investigate household exposures in a spouse or co-resident. (d) Forgetting that down pillows, feather duvets, and feather comforters are hidden avian exposures that can sustain disease long after visible birds are removed."
    }
  }
};
