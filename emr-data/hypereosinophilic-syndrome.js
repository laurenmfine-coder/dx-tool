/* emr-data/hypereosinophilic-syndrome.js
   Hypereosinophilic Syndrome (HES) — Myeloproliferative vs Lymphocytic
   Patient: Devon Okafor, 38M, progressive eosinophilia with cardiac + pulmonary organ damage
   Story: AEC >1500 × 4 months → organ damage workup → FIP1L1-PDGFRA fusion detected → imatinib initiation → complete hematologic/cardiac response
   Encounters: Heme/Allergy consult (ED) → workup and diagnosis → 3-month imatinib response
   ABAI Domain 1/Heme-AI crossover — HES classification, eosinophil-mediated organ damage, FISH/PCR for FIP1L1-PDGFRA, imatinib
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Devon Okafor",
      "dob": "03/14/1987",
      "age": "38",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "RDX-2025-95512",
      "phone": "(786) 204-9317",
      "address": "8821 Brickell Ave #14B, Miami, FL 33130",
      "insurance": "Cigna PPO",
      "pcp": "Dr. Alicia Torres, MD",
      "chiefComplaint": "Referred from PCP: eosinophil count 4,800 cells/µL on routine labs. Asymptomatic aside from fatigue. No travel history. No parasites on stool ova/parasite exam.",
      "diagnosis": "Myeloproliferative HES with FIP1L1-PDGFRA fusion. Eosinophilic endomyocarditis (Löffler endocarditis stage 2) and eosinophilic lung infiltration. Imatinib initiated — complete molecular remission at 3 months."
    },
    "allergies": [
      { "allergen": "NKDA", "reaction": "None", "severity": "None" }
    ],
    "immunizations": [
      { "name": "Influenza annual", "date": "10/2025" },
      { "name": "Hepatitis B series", "date": "Complete (childhood)" }
    ],
    "familyHistory": [
      "Father: hypertension",
      "No family history of hematologic malignancy, autoimmune disease, or atopy"
    ],
    "socialHistory": [
      ["Tobacco", "Never"],
      ["Alcohol", "Moderate — 2–3 drinks/week"],
      ["Occupation", "Software engineer — primarily indoor/office"],
      ["Travel", "No international travel in past 5 years. Trip to Costa Rica 6 years ago (completed anti-parasitic prophylaxis)."],
      ["Pets", "No pets"],
      ["Medications", "Ibuprofen PRN — stopped after eosinophilia detected. No recent new medications."],
      ["Atopy", "No personal or family history of atopy, asthma, eczema, or food allergy"]
    ]
  },

  "encounters": {
    "ed": {
      "cc": "Hematology + Allergy/Immunology co-consultation for persistent severe eosinophilia (AEC 4,800 cells/µL × 4 months). Referred for HES workup. Patient feels fatigued but has no rash, no diarrhea, no joint pain, no focal neurologic symptoms.",
      "dx": "Hypereosinophilic syndrome (HES) — workup initiated. Suspected myeloproliferative phenotype given persistent severe eosinophilia without atopic features. Rule out: parasitic infection, DRESS, drug reaction, T-cell lymphoma, FIP1L1-PDGFRA fusion.",
      "problems": [
        { "id": "prob-1", "description": "Severe persistent eosinophilia AEC 4,800 cells/µL × 4 months — cause unknown. HES criteria met: AEC ≥1500 × >1 month + organ involvement suspected.", "status": "Active" },
        { "id": "prob-2", "description": "Fatigue × 3 months — possibly eosinophil-mediated organ damage", "status": "Active" },
        { "id": "prob-3", "description": "Possible eosinophilic cardiac involvement: troponin borderline elevated on PCP labs (TnI 0.08 ng/mL). Echo ordered.", "status": "Active — pending workup" },
        { "id": "prob-4", "description": "Mild dry cough × 6 weeks — eosinophilic pulmonary infiltration vs incidental", "status": "Active" }
      ],
      "medications": [
        { "id": "med-1", "name": "Ibuprofen 400 mg PRN", "dose": "Stopped prior to workup", "note": "NSAID stopped — drug-induced eosinophilia must be excluded" }
      ],
      "vitals": {
        "rows": [
          { "time": "Consultation visit", "bp": "128/74", "hr": "78", "rr": "14", "temp": "36.8", "spo2": "97% RA" }
        ]
      },
      "labs": {
        "cbc": {
          "title": "CBC with Differential — Detailed",
          "rows": [
            { "test": "WBC", "value": "14,200", "unit": "cells/µL", "flag": "H", "ref": "4,500–11,000", "note": "Leukocytosis — driven by eosinophilia" },
            { "test": "Eosinophils (%)", "value": "34%", "flag": "H" },
            { "test": "Absolute Eosinophil Count (AEC)", "value": "4,828", "unit": "cells/µL", "flag": "H", "ref": "Normal <500; Mild 500–1,500; Moderate 1,500–5,000; Severe >5,000", "note": "⚠️ HES diagnostic threshold: AEC ≥1,500 cells/µL on 2 occasions ≥1 month apart + evidence of organ damage or dysfunction attributable to eosinophilia. AEC 4,828 = severe moderate/borderline severe range. FIP1L1-PDGFRA+ HES can cause organ damage at any AEC level." },
            { "test": "Neutrophils", "value": "58%", "note": "Normal differential in remainder" },
            { "test": "Hemoglobin", "value": "12.8 g/dL", "flag": "L", "note": "Mild anemia — may reflect chronic disease or bone marrow involvement" },
            { "test": "Platelets", "value": "148,000", "flag": "L", "note": "Low-normal. Thrombocytopenia in myeloproliferative HES." }
          ]
        },
        "workup": {
          "title": "HES Workup Panel",
          "rows": [
            { "test": "Serum tryptase", "value": "18.4 ng/mL", "flag": "H", "ref": "Normal <11.4 ng/mL", "note": "⚠️ Elevated tryptase: supports myeloid/mast cell expansion. In FIP1L1-PDGFRA+ HES, tryptase elevation common due to concomitant mast cell involvement (spindle-cell mastocytosis). Tryptase >11.4 in HES = strong predictor of myeloproliferative phenotype (vs lymphocytic)." },
            { "test": "Serum IgE", "value": "42 IU/mL", "note": "NORMAL. Key: myeloproliferative HES typically has NORMAL or LOW IgE. Lymphocytic HES (Th2 driven) has elevated IgE + elevated TARC. Atopic HES (asthma/eczema) has markedly elevated IgE. Normal IgE here supports myeloproliferative phenotype." },
            { "test": "TARC (thymus and activation-regulated chemokine / CCL17)", "value": "210 pg/mL", "ref": "Normal <450 pg/mL", "note": "Normal TARC. Elevated TARC (>450) + elevated IgE would suggest lymphocytic HES (clonal Th2 T cells). Normal here supports myeloproliferative." },
            { "test": "B12 (vitamin B12)", "value": "1,840 pg/mL", "flag": "H", "ref": "Normal 200–900 pg/mL", "note": "⚠️ Markedly elevated B12: HALLMARK of myeloproliferative/myeloid HES. Eosinophils and mast cells produce transcobalamin → elevated serum B12. Also elevated in CML and other myeloproliferative disorders." },
            { "test": "Troponin I", "value": "0.11 ng/mL", "flag": "H", "ref": "<0.04 ng/mL", "note": "Elevated troponin — eosinophilic endomyocarditis (Löffler endocarditis). Granule proteins (MBP, ECP, EPO) released from activated eosinophils → direct cardiac myocyte toxicity." },
            { "test": "Stool O&P × 3", "value": "Negative", "note": "Parasitic cause excluded" },
            { "test": "Strongyloides IgG", "value": "Negative", "note": "Negative — Strongyloides excluded (most important helminth in returning travelers)" },
            { "test": "Toxocara IgG", "value": "Negative" },
            { "test": "ANA", "value": "Negative" },
            { "test": "HIV", "value": "Negative" },
            { "test": "FIP1L1-PDGFRA FISH/RT-PCR", "value": "POSITIVE — FIP1L1-PDGFRA fusion gene detected", "flag": "H", "note": "⚠️ DIAGNOSTIC. FIP1L1-PDGFRA fusion (chromosome 4q12 deletion) = constitutively active PDGFRA tyrosine kinase → clonal mast cell/eosinophil expansion. Classifies as: MYELOPROLIFERATIVE HES / CEL-NOS (chronic eosinophilic leukemia, not otherwise specified). This mutation predicts DRAMATIC response to imatinib (TKI). Without TKI, these patients have very high risk of Löffler endomyocarditis → restrictive cardiomyopathy → death." },
            { "test": "BCR-ABL1 (Philadelphia chromosome)", "value": "Negative", "note": "Excludes CML as cause of eosinophilia" }
          ]
        }
      },
      "imaging": [
        {
          "type": "Echocardiogram",
          "findings": "Left ventricular ejection fraction 48% (mildly reduced from 55% estimated baseline). Posterior wall motion abnormality. Apical thickening and increased echogenicity consistent with endomyocardial fibrosis/thrombus formation. Mild mitral regurgitation (2+). No significant pericardial effusion.",
          "impression": "Findings consistent with Löffler endomyocarditis — eosinophilic endomyocardial disease. Apical thickening represents fibrotic/thrombotic stage (Stage 2 of Löffler: necrotic → thrombotic → fibrotic). EF reduced to 48%. Cardiology urgent consultation."
        },
        {
          "type": "CT Chest Without Contrast",
          "findings": "Bilateral ground-glass opacities in a peribronchovascular distribution. Mild bilateral pleural effusions. No honeycombing. No mediastinal lymphadenopathy.",
          "impression": "Bilateral eosinophilic pulmonary infiltrates. Pattern consistent with eosinophilic pneumonia in context of HES. Not reactive airways — no bronchospasm/air trapping."
        }
      ],
      "assessment": "38M with FIP1L1-PDGFRA+ myeloproliferative HES presenting with: (1) severe eosinophilia AEC 4,828; (2) elevated serum B12 (myeloproliferative marker); (3) elevated tryptase (mast cell involvement); (4) Löffler endomyocarditis Stage 2 (apical thrombus/fibrosis, EF 48%); (5) eosinophilic pulmonary infiltrates. URGENT imatinib initiation — FIP1L1-PDGFRA HES responds within days to imatinib. Mortality without treatment: cardiac complications (restrictive cardiomyopathy, intracardiac thrombus/stroke, arrhythmia). Anticoagulation for intracardiac thrombus. Cardiology co-management required.",
      "plan": "1. IMATINIB 100 mg daily — FIP1L1-PDGFRA HES requires much lower dose than CML (400 mg). Start 100 mg/day. Expected: AEC normalization within 1–2 weeks, molecular remission within 1–3 months.\n2. Anticoagulation: warfarin for intracardiac thrombus (Löffler stage 2). INR target 2–3.\n3. Prednisone 1 mg/kg × 1 week BEFORE imatinib start: prevent cytokine release syndrome from massive eosinophil death (imatinib-induced eosinophil apoptosis → degranulation cascade if not pre-treated)\n4. Cardiology co-management: serial echocardiograms, arrhythmia monitoring\n5. Pulmonology: eosinophilic pulmonary infiltrates expected to resolve with imatinib\n6. Hematology: bone marrow biopsy to confirm CEL-NOS diagnosis and document baseline"
    },

    "office": {
      "cc": "3-month follow-up on imatinib 100 mg daily. Fatigue resolved. Cough resolved. Checking response to therapy.",
      "dx": "FIP1L1-PDGFRA+ HES in complete hematologic + molecular remission on imatinib 100 mg/day. Cardiac function recovering. Anticoagulation continues.",
      "problems": [
        { "id": "prob-1", "description": "HES — complete hematologic remission on imatinib. AEC normalized to 180 cells/µL.", "status": "Remission" },
        { "id": "prob-2", "description": "Löffler endomyocarditis — EF recovering (48% → 56% on repeat echo). Apical thrombus partially resolved.", "status": "Improving" }
      ],
      "medications": [
        { "id": "med-1", "name": "Imatinib (Gleevec) 100 mg", "dose": "Once daily with meal", "route": "Oral", "indication": "TKI for FIP1L1-PDGFRA HES. Continue indefinitely — discontinuation leads to relapse in most." },
        { "id": "med-2", "name": "Warfarin", "dose": "Dose-adjusted to INR 2–3", "route": "Oral", "indication": "Intracardiac thrombus anticoagulation. Duration: until cardiac imaging confirms thrombus resolution." }
      ],
      "vitals": {
        "rows": [
          { "time": "3-month follow-up", "bp": "122/72", "hr": "70", "rr": "13", "spo2": "99% RA" }
        ]
      },
      "labs": {
        "response": {
          "title": "3-Month Treatment Response",
          "rows": [
            { "test": "Absolute Eosinophil Count", "value": "180", "unit": "cells/µL", "ref": "Baseline: 4,828", "note": "96% reduction. Complete hematologic remission (AEC <500)." },
            { "test": "FIP1L1-PDGFRA RT-PCR", "value": "NEGATIVE — undetectable", "note": "Complete molecular remission. Target: undetectable fusion transcript. Achieved at 3 months — excellent response." },
            { "test": "Serum tryptase", "value": "7.2 ng/mL", "ref": "Baseline: 18.4 ng/mL", "note": "Normalized (was 18.4). Confirms mast cell population also suppressed by imatinib." },
            { "test": "B12", "value": "420 pg/mL", "ref": "Baseline: 1,840 pg/mL", "note": "Normalized — myeloproliferative burden resolved." },
            { "test": "Troponin I", "value": "0.02 ng/mL", "note": "Normalized from 0.11 — cardiac injury resolved." },
            { "test": "Echo EF", "value": "56% (repeat echo)", "ref": "Baseline: 48%", "note": "Recovered toward normal. Apical thrombus partially resolved on anticoagulation + imatinib. Mitral regurgitation reduced to 1+." }
          ]
        }
      },
      "assessment": "Outstanding imatinib response. FIP1L1-PDGFRA+ myeloproliferative HES in complete hematologic and molecular remission at 3 months — expected outcome for this mutation. Cardiac recovery ongoing (EF 48% → 56%). Tryptase + B12 normalized confirming mast cell/myeloid suppression. Continue imatinib indefinitely — discontinuation leads to relapse in >80% within 12 months. Anticoagulation: continue until apical thrombus fully resolved on echo (estimated 3–6 more months).",
      "plan": "1. Continue imatinib 100 mg/day indefinitely. Dose increase to 400 mg only if molecular relapse.\n2. Annual FISH/RT-PCR for FIP1L1-PDGFRA to monitor molecular remission\n3. Annual echocardiogram — cardiac function monitoring\n4. Anticoagulation: continue warfarin until apical thrombus resolved on echo\n5. Return in 6 months for routine monitoring"
    },

    "inpatient": null
  },

  "teachingPoints": {
    "keyLearning": [
      "HES diagnosis requires: AEC ≥1,500 cells/µL on ≥2 occasions at least 1 month apart AND evidence of eosinophil-mediated organ damage",
      "FIP1L1-PDGFRA fusion (4q12 deletion) = constitutively active tyrosine kinase → myeloproliferative HES. Responds dramatically to imatinib 100 mg/day (far lower dose than CML).",
      "Myeloproliferative HES markers: elevated B12 (hallmark), elevated tryptase, normal/low IgE, normal TARC. Lymphocytic HES: elevated IgE + TARC, clonal CD3-CD4+ T cells secreting IL-5.",
      "Prednisone pretreatment BEFORE imatinib prevents cytokine release syndrome from rapid eosinophil apoptosis.",
      "Löffler endomyocarditis: 3 stages — necrotic (early, elevated troponin) → thrombotic (apical thrombus, stroke risk) → fibrotic (restrictive cardiomyopathy, irreversible). Early imatinib prevents fibrotic stage.",
      "Eosinophil granule proteins (MBP, ECP, EPO, EDN) are directly cardiotoxic — released by activated eosinophils in the myocardium."
    ],
    "boardPearls": [
      "HES AEC threshold: ≥1,500 cells/µL (not ≥500 — that's mild eosinophilia). Severe >5,000.",
      "FIP1L1-PDGFRA+ HES: imatinib 100 mg/day. NOT 400 mg (used in CML). Hyper-sensitive to TKI.",
      "Elevated serum B12 + elevated tryptase + normal IgE = myeloproliferative HES phenotype.",
      "Elevated IgE + elevated TARC + clonal CD3-CD4+ T cells = lymphocytic HES phenotype (treat with steroids/mepolizumab/alemtuzumab — NOT imatinib).",
      "Parasitic eosinophilia workup: always exclude Strongyloides (most dangerous — hyperinfection in immunosuppressed), Toxocara, Trichinella before treating with steroids.",
      "Löffler endomyocarditis: apical thrombus → stroke risk. Anticoagulate. Fibrotic stage = restrictive cardiomyopathy, poor prognosis.",
      "Mepolizumab (anti-IL-5): approved for FIP1L1-PDGFRA-negative HES when steroids inadequate. NOT for FIP1L1-PDGFRA+ (use imatinib)."
    ]
  },

  "references": [
    {
      "id": "StatPearls-HES",
      "title": "Hypereosinophilic Syndrome",
      "authors": "StatPearls Publishing",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK541011/",
      "openAccess": true,
      "validates": [
        "HES diagnostic criteria (AEC ≥1,500 × 2 occasions + organ damage)",
        "HES classification: myeloproliferative vs lymphocytic vs idiopathic",
        "Eosinophil-mediated organ damage mechanisms",
        "Löffler endomyocarditis stages"
      ]
    },
    {
      "id": "HES-Review-PMC",
      "title": "Hypereosinophilic Syndromes: A Review",
      "authors": "Gotlib J.",
      "journal": "Blood",
      "year": 2015,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4663225/",
      "openAccess": true,
      "validates": [
        "FIP1L1-PDGFRA mechanism and imatinib 100 mg dosing",
        "B12 and tryptase as myeloproliferative markers",
        "Molecular remission monitoring by RT-PCR",
        "Prednisone pretreatment before imatinib"
      ]
    },
    {
      "id": "Mepolizumab-HES",
      "title": "Mepolizumab Treatment in Patients with Hypereosinophilic Syndrome. NEJM 2017. PMC5538828.",
      "authors": "Rothenberg ME, et al.",
      "journal": "N Engl J Med",
      "year": 2017,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5538828/",
      "openAccess": true,
      "validates": [
        "Mepolizumab (anti-IL-5) approval for HES — FIP1L1-PDGFRA-negative patients",
        "Steroid-sparing effect",
        "Mechanism: anti-IL-5 reduces eosinophil production and survival"
      ]
    }
  ]
};
