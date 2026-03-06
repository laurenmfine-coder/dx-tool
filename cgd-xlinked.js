/* emr-data/cgd-xlinked.js — PID Case: Chronic Granulomatous Disease (X-linked, CYBB mutation) */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Jordan Whitfield",
  "patientHPI": "My son keeps getting these infections that other kids just don't seem to get. He had a really bad infection in his liver when he was two that needed surgery, then pneumonia that took forever to clear up, and he's had swollen lymph nodes multiple times that get infected and need antibiotics.",
      "dob": "05/22/2020",
      "age": "5",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-714039",
      "language": "English",
      "race": "Black or African American",
      "phone": "(720) 555-6531",
      "email": "whitfield.family@email.com",
      "address": "564 Cottonwood Ave, Indianapolis, IN 46222",
      "insurance": "Medicaid",
      "pcp": "Dr. Terrence Hill, MD (Pediatrics)",
      "pharmacy": "Walmart Pharmacy — Holden Ave",
      "emergencyContact": {
        "name": "Denise Whitfield",
        "phone": "(620) 555-1674",
        "relationship": "Mother"
      }
    },
    "allergies": [
      { "allergen": "NKDA", "reaction": "", "severity": "", "type": "Drug" }
    ],
    "immunizations": [
      { "name": "All routine vaccines up to date", "date": "01/2025", "lot": "", "site": "" }
    ],
    "familyHistory": [
      "Maternal uncle: died of 'recurrent lung infections' at age 8 (1995, no formal diagnosis)",
      "No other known immunodeficiency"
    ],
    "socialHistory": [
      ["Infection history", "Staphylococcus aureus liver abscess age 2. Aspergillus fumigatus pneumonia age 3. Recurrent lymphadenitis × 3 episodes since age 18 months. BCG adenitis at 8 months (received BCG at birth — international travel)."],
      ["Key", "Catalase-positive organisms + granuloma formation + absent oxidative burst = CGD. DHR test diagnostic."]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "5-year-old male — 3rd episode of suppurative lymphadenitis, now with fever and neck mass × 5 days",
        "diagnosis": "Chronic Granulomatous Disease (CGD)"
      },
      "problems": [
        { "id": "prob-1", "description": "Suppurative cervical lymphadenitis — 3rd episode (Serratia marcescens on prior culture)", "status": "Active", "onset": "Acute", "icd10": "L04.0" },
        { "id": "prob-2", "description": "Prior: S. aureus liver abscess (age 2)", "status": "Resolved", "onset": "Past", "icd10": "" },
        { "id": "prob-3", "description": "Prior: Aspergillus fumigatus pneumonia (age 3)", "status": "Resolved", "onset": "Past", "icd10": "" },
        { "id": "prob-4", "description": "Prior: BCG-itis/adenitis (age 8 months — received BCG at birth)", "status": "Resolved", "onset": "Past", "icd10": "" },
        { "id": "prob-5", "description": "Chronic granulomatous disease — awaiting DHR confirmation", "status": "Active", "onset": "Congenital", "icd10": "D71" }
      ],
      "medications": [
        { "id": "med-1", "name": "TMP-SMX (Bactrim)", "dose": "5 mg/kg TMP component", "route": "PO", "frequency": "Daily — bacterial prophylaxis (started 3 months ago)", "status": "Active", "prescriber": "Dr. Pediatric Immunology" },
        { "id": "med-2", "name": "Itraconazole", "dose": "5 mg/kg/day", "route": "PO", "frequency": "Daily — antifungal prophylaxis", "status": "Active", "prescriber": "Dr. Pediatric Immunology" }
      ],
      "vitals": [
        { "date": "03/02/2026", "time": "11:00", "bp": "102/64", "hr": "118", "rr": "24", "temp": "39.1°C", "spo2": "98%", "pain": "5/10" }
      ],
      "labs": [
        {
          "date": "03/02/2026", "time": "11:15", "status": "Final",
          "orderedBy": "Dr. ED Attending", "accession": "LAB-502938",
          "collected": "03/02/2026 11:10", "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center", "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                { "test": "WBC", "value": "18.2", "unit": "x10³/µL", "range": "5.0-15.5 (children)", "flag": "H" },
                { "test": "Neutrophils (Absolute)", "value": "14,200", "unit": "cells/µL", "range": "1800-8000", "flag": "H" },
                { "test": "Lymphocytes", "value": "22%", "unit": "%", "range": "25-50", "flag": "L" },
                { "test": "Hemoglobin", "value": "10.4", "unit": "g/dL", "range": "11.5-14.5 (age 5)", "flag": "L" },
                { "test": "Platelets", "value": "488", "unit": "x10³/µL", "range": "150-400", "flag": "H" },
                { "test": "ESR", "value": "88", "unit": "mm/hr", "range": "<20", "flag": "H" },
                { "test": "CRP", "value": "14.2", "unit": "mg/dL", "range": "<1.0", "flag": "H" }
              ]
            },
            {
              "name": "IMMUNOGLOBULINS",
              "results": [
                { "test": "IgG", "value": "1,840", "unit": "mg/dL", "range": "608-1572 (age 5)", "flag": "H" },
                { "test": "IgA", "value": "188", "unit": "mg/dL", "range": "24-192 (age 5)", "flag": "" },
                { "test": "IgM", "value": "214", "unit": "mg/dL", "range": "48-207 (age 5)", "flag": "H" },
                { "test": "IgE Total", "value": "12", "unit": "IU/mL", "range": "0-60 (age 5)", "flag": "" },
                { "test": "Interpretation", "value": "Hypergammaglobulinemia — elevated IgG, IgM. This is a reactive pattern seen in CGD from chronic infection/inflammation. NOT an antibody deficiency. CGD has normal to elevated immunoglobulins.", "unit": "", "range": "", "flag": "A" }
              ]
            },
            {
              "name": "LYMPHOCYTE SUBSETS",
              "results": [
                { "test": "CD3+ T Cells", "value": "68%", "unit": "%", "range": "60-85", "flag": "" },
                { "test": "CD4+ T Cells", "value": "42%", "unit": "%", "range": "30-60", "flag": "" },
                { "test": "CD19+ B Cells", "value": "22%", "unit": "%", "range": "15-30", "flag": "" },
                { "test": "NK Cells", "value": "10%", "unit": "%", "range": "5-20", "flag": "" },
                { "test": "Interpretation", "value": "Normal lymphocyte subsets. CGD = neutrophil killing defect, NOT lymphocyte/antibody deficiency. T and B cells are normal.", "unit": "", "range": "", "flag": "A" }
              ]
            },
            {
              "name": "DIHYDRORHODAMINE (DHR) OXIDATIVE BURST TEST",
              "results": [
                { "test": "DHR Mean Fluorescence Index (Patient)", "value": "1.8 (Stimulation Index)", "unit": "Stimulation Index", "range": "Normal: SI >100", "flag": "L" },
                { "test": "DHR Mean Fluorescence Index (Normal Control)", "value": "142 (Stimulation Index)", "unit": "Stimulation Index", "range": ">100", "flag": "" },
                { "test": "Interpretation", "value": "ABSENT oxidative burst (SI 1.8 vs normal >100). Patient neutrophils fail to oxidize DHR to fluorescent rhodamine-123 upon PMA stimulation. Confirms absent NADPH oxidase function — diagnostic of CGD. X-linked pattern on DHR histogram (single non-fluorescent peak) consistent with X-linked CGD (vs AR-CGD which shows dimorphic pattern in carrier mothers).", "unit": "", "range": "", "flag": "A" }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1", "date": "03/02/2026", "study": "Neck Ultrasound",
          "status": "Final", "priority": "Stat",
          "orderedBy": "Dr. ED Attending", "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center", "accession": "IMG-581830",
          "clinical": "Suppurative cervical lymphadenitis — CGD",
          "technique": "B-mode and Doppler ultrasound",
          "findings": "Left level II/III cervical lymphadenopathy with central liquefaction consistent with suppurative lymphadenitis. Largest node 3.2 × 2.8 cm. No deep space involvement. No airway compromise.",
          "impression": "Suppurative cervical lymphadenitis with liquefaction — aspiration/drainage recommended for culture and therapeutic decompression.",
          "dictated": "03/02/2026 11:45", "verified": "03/02/2026 12:00"
        }
      ],
      "visits": [
        {
          "id": "visit-1", "type": "Emergency Visit",
          "date": "03/02/2026", "provider": "Dr. ED Attending",
          "cc": "Recurrent suppurative lymphadenitis in child with suspected CGD",
          "hpi": "Jordan Whitfield is a 5-year-old male with a history of: (1) S. aureus liver abscess at age 2 requiring surgical drainage; (2) Aspergillus fumigatus pneumonia at age 3 requiring IV voriconazole; (3) BCG adenitis at 8 months (received BCG abroad); (4) Three episodes of suppurative lymphadenitis — second episode grew Serratia marcescens. Now presents with 5 days of fever and progressive left neck mass. DHR test performed today: absent oxidative burst (SI 1.8) — confirms CGD. CYBB gene testing pending (expected X-linked given mother's dimorphic pattern). Mother is obligate carrier (maternal uncle died of recurrent infections aged 8 — almost certainly undiagnosed CGD).\n\nPattern recognition: catalase-positive organisms (S. aureus, Serratia, Aspergillus, Nocardia, Burkholderia) — these organisms produce their own H2O2, which CGD patients cannot use for killing since they cannot generate additional superoxide to amplify the oxidative burst. Catalase-negative organisms (Streptococcus — produce H2O2 themselves) — CGD patients can kill these normally because the organism\'s own H2O2 provides the substrate.",
          "exam": "Ill-appearing 5-year-old. Temp 39.1°C. Left neck: 3 cm fluctuant, erythematous, tender mass. Left level II/III lymphadenopathy. No airway stridor. No hepatosplenomegaly acutely. Scarring on abdomen from prior liver abscess surgery.",
          "assessment": "Suppurative cervical lymphadenitis (3rd episode) in CGD (DHR-confirmed). Likely catalase-positive organism again.",
          "plan": "Admit. Ultrasound-guided aspiration for culture — send gram stain, culture/sensitivity, fungal culture, AFB. IV meropenem empirically (covers Serratia and gram-negatives). Add voriconazole IV if fungal suspected. IFN-γ-1b (interferon gamma) therapy discussion with family — reduces serious infections by ~70% in CGD. Heme/Immunology joint follow-up. CYBB mutation testing. Consider HSCT discussion — only curative option."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted — suppurative lymphadenitis with Serratia marcescens; CGD confirmed; IFN-γ initiated",
        "diagnosis": "CGD — Serratia lymphadenitis, IFN-γ-1b initiated"
      },
      "problems": [
        { "id": "prob-1", "description": "Serratia marcescens suppurative lymphadenitis — responding to meropenem", "status": "Active", "onset": "Acute", "icd10": "L04.0" },
        { "id": "prob-2", "description": "CGD (X-linked, CYBB) — confirmed DHR, gene testing pending", "status": "Active", "onset": "Congenital", "icd10": "D71" }
      ],
      "medications": [
        { "id": "med-1", "name": "Meropenem", "dose": "20 mg/kg", "route": "IV", "frequency": "Q8H", "status": "Active", "prescriber": "Dr. Pediatric Infectious Disease" },
        { "id": "med-2", "name": "TMP-SMX", "dose": "5 mg/kg TMP", "route": "PO", "frequency": "Daily — continue lifelong", "status": "Active", "prescriber": "Dr. Pediatric Immunology" },
        { "id": "med-3", "name": "Itraconazole", "dose": "5 mg/kg/day", "route": "PO", "frequency": "Daily — continue lifelong", "status": "Active", "prescriber": "Dr. Pediatric Immunology" },
        { "id": "med-4", "name": "Interferon gamma-1b (Actimmune)", "dose": "50 mcg/m² BSA", "route": "SC", "frequency": "3×/week — lifelong prophylaxis", "status": "Active", "prescriber": "Dr. Pediatric Immunology" }
      ],
      "vitals": [
        { "date": "03/05/2026", "time": "08:00", "bp": "104/66", "hr": "100", "rr": "20", "temp": "37.3°C", "spo2": "99%", "pain": "2/10" }
      ],
      "labs": [
        {
          "date": "03/05/2026", "time": "07:30", "status": "Final",
          "orderedBy": "Dr. Pediatric Immunology", "accession": "LAB-518049",
          "collected": "03/05/2026 07:25", "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center", "specimenType": "Blood",
          "groups": [
            {
              "name": "LYMPH NODE CULTURE — Final",
              "results": [
                { "test": "Culture Result", "value": "Serratia marcescens — heavy growth", "unit": "", "range": "No growth", "flag": "A" },
                { "test": "Sensitivities", "value": "Sensitive: meropenem, cefepime, TMP-SMX. Intermediate: ciprofloxacin. Resistant: ampicillin, 1st-gen cephalosporins.", "unit": "", "range": "", "flag": "A" },
                { "test": "Fungal Culture", "value": "Negative at 5 days", "unit": "", "range": "No growth", "flag": "" },
                { "test": "AFB Smear/Culture", "value": "Negative at 5 days (final pending)", "unit": "", "range": "No growth", "flag": "" }
              ]
            },
            {
              "name": "CYBB GENE SEQUENCING (Send-out)",
              "results": [
                { "test": "CYBB Mutation", "value": "Hemizygous deletion exons 7-9 of CYBB gene (gp91phox). Loss-of-function — absent gp91phox expression expected.", "unit": "", "range": "Normal — no mutation", "flag": "A" },
                { "test": "Interpretation", "value": "Confirms X-linked CGD (CYBB gene encodes gp91phox — the large subunit of NADPH oxidase flavocytochrome b558). Hemizygous (X-linked) — fully affected. Mother is obligate carrier. 50% risk for brothers.", "unit": "", "range": "", "flag": "A" }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-2", "type": "Inpatient Progress Note — Day 3", "date": "03/05/2026",
          "provider": "Dr. Pediatric Immunology",
          "cc": "CGD confirmed CYBB mutation — Serratia responding — IFN-γ initiated",
          "hpi": "Day 3 of admission. Serratia marcescens confirmed from lymph node aspirate — sensitive to meropenem, responding clinically. CYBB gene sequencing confirms X-linked CGD (gp91phox deficiency). Began IFN-γ-1b (interferon gamma) today — reduces serious infections by ~70% and hospitalization rates in CGD via mechanism: IFN-γ activates residual NADPH oxidase activity in X-linked CGD carriers (partial function) and upregulates phagocyte killing via non-oxidative pathways (defensins, lactoferrin, enhanced phagosomal acidification). HSCT counseling provided to family: HSCT is the only curative treatment for CGD. Current 5-year overall survival with HSCT: >90% at experienced centers when performed electively (not during active infection). Best outcomes with HLA-matched sibling donor. Risk-benefit: weigh HSCT morbidity vs lifetime risk of fatal invasive aspergillosis (15-20% lifetime mortality without HSCT in XL-CGD).",
          "exam": "Improved. Afebrile. Left neck mass smaller (2.1 cm, less fluctuant). Drain site healing.",
          "assessment": "CGD (X-linked, CYBB) — Serratia lymphadenitis responding. IFN-γ initiated. HSCT discussion ongoing.",
          "plan": "Complete 4-week course TMP-SMX for Serratia (oral step-down to TMP-SMX day 7 if improving). Continue lifelong TMP-SMX + itraconazole prophylaxis. IFN-γ 3×/week lifelong. HSCT consult — BMT team to see family. No live BCG (already administered — BCG-itis was first clue to diagnose). Avoid decaying organic matter (mulch, hay, compost — Aspergillus source). Pit of decaying organic matter in the air: check home environment."
        }
      ]
    },
    "office": {
      "patient": {
        "chiefComplaint": "3-month follow-up — CGD stable on prophylaxis, HSCT decision",
        "diagnosis": "CGD (X-linked, CYBB) — on TMP-SMX + itraconazole + IFN-γ"
      },
      "problems": [
        { "id": "prob-1", "description": "CGD (X-linked) — stable on triple prophylaxis", "status": "Active", "onset": "Congenital", "icd10": "D71" },
        { "id": "prob-2", "description": "HSCT decision — family deferred, monitoring", "status": "Active", "onset": "", "icd10": "" },
        { "id": "prob-3", "description": "Inflammatory bowel disease-like colitis — under evaluation (CGD-associated)", "status": "Active", "onset": "Chronic", "icd10": "" }
      ],
      "medications": [
        { "id": "med-1", "name": "TMP-SMX", "dose": "5 mg/kg TMP", "route": "PO", "frequency": "Daily lifelong", "status": "Active", "prescriber": "Dr. Pediatric Immunology" },
        { "id": "med-2", "name": "Itraconazole", "dose": "5 mg/kg/day", "route": "PO", "frequency": "Daily lifelong", "status": "Active", "prescriber": "Dr. Pediatric Immunology" },
        { "id": "med-3", "name": "Interferon gamma-1b (Actimmune)", "dose": "50 mcg/m²", "route": "SC", "frequency": "3×/week lifelong", "status": "Active", "prescriber": "Dr. Pediatric Immunology" }
      ],
      "vitals": [
        { "date": "06/02/2026", "time": "10:00", "bp": "106/66", "hr": "92", "rr": "18", "temp": "36.8°C", "spo2": "99%", "pain": "0/10" }
      ],
      "labs": [
        {
          "date": "06/02/2026", "time": "10:15", "status": "Final",
          "orderedBy": "Dr. Pediatric Immunology", "accession": "LAB-558011",
          "collected": "06/02/2026 10:10", "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center", "specimenType": "Blood",
          "groups": [
            {
              "name": "MONITORING LABS",
              "results": [
                { "test": "CBC", "value": "WBC 8.4, Hgb 11.8, Plt 322 — all normal range", "unit": "", "range": "Normal", "flag": "" },
                { "test": "CRP", "value": "0.8", "unit": "mg/dL", "range": "<1.0", "flag": "" },
                { "test": "LFTs (Itraconazole monitoring)", "value": "ALT 24, AST 22, ALP 188 — normal", "unit": "", "range": "Normal", "flag": "" },
                { "test": "Itraconazole Level", "value": "1.8", "unit": "µg/mL", "range": "Target >1.0 µg/mL for prophylaxis", "flag": "" },
                { "test": "Calprotectin (Stool)", "value": "820", "unit": "µg/g", "range": "<50", "flag": "H" }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-3", "type": "Office Visit — Immunology", "date": "06/02/2026",
          "provider": "Dr. Pediatric Immunology",
          "cc": "CGD stable — new IBD-like colitis evaluation",
          "hpi": "Jordan is doing well on triple prophylaxis — no new infections in 3 months. However, parents report 6 weeks of intermittent loose stools, mild abdominal cramping, and weight plateau. Stool calprotectin markedly elevated (820 µg/g). This raises concern for CGD-associated colitis — an inflammatory bowel disease-like manifestation that occurs in 40-50% of XL-CGD patients. CGD-associated colitis shares histological features with Crohn\'s disease (granulomas, transmural inflammation) but is mechanistically distinct — driven by impaired neutrophil clearance of intraluminal bacteria → chronic granulomatous inflammation. Treatment: systemic corticosteroids (first-line), then azathioprine or anti-TNF if refractory. Colonoscopy with biopsy referral placed. Gastroenterology consulted.\n\nHSCT update: Family is considering HSCT. No HLA-matched sibling donor — evaluating MUD. BMT team to present risk/benefit: CGD prognosis on prophylaxis vs HSCT cure. Key point: HSCT should be performed during stable disease, not during active infection. Next serious infection will be the deciding moment for many families.',",
          "exam": "Well-appearing child. Mild periumbilical tenderness. No rebound. Mild hepatomegaly. No active lymphadenopathy.",
          "assessment": "CGD stable on prophylaxis. New IBD-like colitis — likely CGD-associated colitis. HSCT decision pending.",
          "plan": "GI referral — colonoscopy + biopsy. Likely start oral prednisone after biopsy confirms CGD colitis. Continue triple prophylaxis. HSCT workup continuing. Genetic counseling: offer carrier testing to maternal aunts and female cousins. Environmental counseling reinforced: avoid compost, mulch, leaf piles, construction zones (Aspergillus sources)."
        }
      ]
    }
  },
  "references": [
    {
      "id": "AAAAI-PID-PP-2015",
      "title": "Practice parameter for the diagnosis and management of primary immunodeficiency",
      "authors": "Bonilla FA, Barlan I, Chapel H, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2015,
      "doi": "10.1016/j.jaci.2015.04.049",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4837186/",
      "openAccess": true,
      "validates": [
        "CGD diagnostic criteria: DHR absent/markedly reduced oxidative burst",
        "X-linked CGD: CYBB (gp91phox). AR-CGD: p22phox, p47phox, p67phox, p40phox",
        "Prophylaxis: TMP-SMX (bacterial) + itraconazole (fungal) + IFN-γ (reduces infections 70%)",
        "Catalase-positive organisms: S. aureus, Serratia, Aspergillus, Nocardia, Burkholderia cepacia, Chromobacterium",
        "CGD-associated colitis: IBD-like, treat with steroids",
        "HSCT: only curative treatment; best outcomes electively before major infection"
      ]
    },
    {
      "id": "Holland-CGD-2010",
      "title": "Chronic granulomatous disease",
      "authors": "Holland SM.",
      "journal": "Clin Rev Allergy Immunol",
      "year": 2010,
      "doi": "10.1007/s12016-010-8184-4",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3039524/",
      "openAccess": true,
      "validates": [
        "NADPH oxidase complex: gp91phox (CYBB), p22phox (CYBA), p47phox, p67phox, p40phox, Rac2",
        "DHR vs NBT: DHR is more sensitive and preferred. NBT (nitroblue tetrazolium) is historical",
        "IFN-γ mechanism in CGD: upregulates residual NADPH oxidase + non-oxidative killing",
        "CGD colitis: 40-50% of XL-CGD; granulomatous; responds to steroids"
      ]
    }
  ]
,

  "teachingPoints": {
    "keyLearning": [
      "CGD is caused by defective NADPH oxidase → failure to produce reactive oxygen species (respiratory burst) → impaired intracellular killing of catalase-positive organisms (S. aureus, Aspergillus, Nocardia, Burkholderia cepacia, Serratia). Normal killing of catalase-negative organisms (Streptococcus) — they produce H₂O₂ that neutrophils use.",
      "NBT (nitroblue tetrazolium) test: measures oxidative burst. Normal neutrophils → NBT turns blue (formazan). CGD neutrophils → NBT remains yellow (no oxidative burst). DHR (dihydrorhodamine) flow cytometry: more sensitive and specific — measures neutrophil oxidative burst directly.",
      "Prophylaxis in CGD: TMP-SMX daily (bacterial), itraconazole daily (fungal), and IFN-γ (reduces severe infections by 70%). HSCT is curative — considered in severe/refractory CGD."
    ],
    "boardPearls": [
      "CGD: NADPH oxidase deficiency → no respiratory burst → impaired killing of catalase-positive organisms.",
      "X-linked CGD (gp91phox mutation, CYBB gene): most common (70%), most severe. AR forms: p47phox, p67phox, p22phox, p40phox mutations.",
      "Classic pathogens: Staphylococcus aureus (#1), Aspergillus (#1 fungal), Nocardia, Burkholderia cepacia, Serratia marcescens.",
      "Catalase-positive = makes own H₂O₂ enzyme that destroys the H₂O₂ → no substrate for CGD neutrophil killing.",
      "Diagnosis: DHR flow cytometry (preferred) or NBT test. DHR: normal = bright fluorescence; CGD = dim/absent.",
      "Granulomas: CGD hallmark — obstruction of GI/GU tract from granulomatous inflammation. Gastric outlet, esophageal, colonic involvement.",
      "Treatment/prophylaxis: TMP-SMX + itraconazole daily. IFN-γ SC 3×/week. HSCT: curative."
    ]
  }
};