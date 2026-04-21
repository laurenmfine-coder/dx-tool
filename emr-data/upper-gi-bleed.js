/* emr-data/upper-gi-bleed.js
   Upper GI Bleed — Risk Stratification and Management
   Category: gi | Acuity: ESI-1
   Settings: ED, ICU, Floor
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Frank Donnelly",
      "patientHPI": "I vomited blood twice this morning — it was bright red and there was a lot of it. I've also had black tarry stools for two days. I've been taking a lot of ibuprofen for my back pain and I drink whiskey every night.",
      "dob": "08/11/1962",
      "age": "63",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-662411",
      "language": "English",
      "race": "White",
      "phone": "(617) 555-2411",
      "email": "",
      "address": "44 Dorchester Ave, Boston, MA 02125",
      "insurance": "MassHealth",
      "pcp": "None",
      "pharmacy": "CVS — Dorchester Ave",
      "emergencyContact": {
        "name": "Patrick Donnelly",
        "phone": "(617) 555-8844",
        "relationship": "Brother"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
      }
    ],
    "immunizations": [
      {
        "name": "Unknown — no records",
        "date": "",
        "lot": "",
        "site": ""
      }
    ],
    "familyHistory": [
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "NSAID use",
        "Ibuprofen 800mg TID x6 weeks for low back pain — major ulcer risk factor"
      ],
      [
        "Alcohol",
        "Daily whiskey — 8-10 drinks/day x20 years — cirrhosis risk, varices consideration"
      ],
      [
        "H. pylori",
        "Never tested — high risk given NSAID + alcohol"
      ],
      [
        "Aspirin",
        "None — but NSAIDs at ulcerogenic doses"
      ],
      [
        "Anticoagulation",
        "None"
      ],
      [
        "Smoking",
        "Current — 1 PPD x40 years"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "63M — hematemesis x2 + melena x2 days — NSAID use + heavy ETOH — HR 116 BP 96/62 — hemodynamically unstable — GBS score 12 (high risk) — urgent EGD",
        "diagnosis": "Upper GI Bleed — Likely Peptic Ulcer Disease — Hemodynamically Unstable"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Upper GI bleed — hematemesis (bright red blood or coffee grounds) + melena = UGIB until proven otherwise. Hemodynamically unstable: HR 116, BP 96/62, Hgb 7.8. Glasgow-Blatchford Score 12 = HIGH RISK (needs urgent EGD, likely intervention).",
          "status": "Active",
          "onset": "Acute",
          "icd10": "K92.0"
        },
        {
          "id": "prob-2",
          "description": "Likely etiology: peptic ulcer disease (NSAID-induced ± H. pylori). Differential includes Mallory-Weiss tear (alcohol + retching), variceal bleed (heavy ETOH — cirrhosis?), Dieulafoy lesion, gastric cancer.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "K25.4"
        },
        {
          "id": "prob-3",
          "description": "Variceal bleed consideration — heavy alcohol use. Must consider. If variceal: octreotide + antibiotic prophylaxis (norfloxacin/ceftriaxone) + urgent EGD with banding. TIPS if refractory.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "I85.00"
        },
        {
          "id": "prob-4",
          "description": "NSAID-induced ulcer — ibuprofen 800mg TID x6 weeks. COX-1 inhibition → decreased mucosal prostaglandins → impaired mucus/bicarbonate secretion → ulceration. Should have been on PPI if NSAID use >1-2 weeks.",
          "status": "Active",
          "onset": "Subacute",
          "icd10": "K25.4"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Pantoprazole (Protonix)",
          "dose": "80mg IV bolus → 8 mg/hr infusion",
          "route": "IV",
          "frequency": "High-dose PPI drip — standard pre-endoscopy for suspected peptic ulcer bleed. Raises gastric pH → stabilizes clot.",
          "status": "Active",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-2",
          "name": "Octreotide",
          "dose": "50mcg IV bolus → 50 mcg/hr infusion",
          "route": "IV",
          "frequency": "Pre-emptive if variceal bleed suspected (alcohol history). Reduces portal pressure. Keep running until EGD confirms non-variceal etiology.",
          "status": "Active",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-3",
          "name": "Ceftriaxone",
          "dose": "1g IV",
          "route": "IV",
          "frequency": "Q24H — antibiotic prophylaxis if cirrhotic/variceal. Continue x7 days if varices confirmed.",
          "status": "Active — cirrhosis cannot be excluded",
          "prescriber": "Dr. Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "10:00",
          "bp": "96/62",
          "hr": "116",
          "rr": "20",
          "temp": "37.0°C",
          "spo2": "97%",
          "pain": "2/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Hematemesis + melena — unstable UGIB — urgent GI",
          "hpi": "63M with heavy NSAID use and alcohol use presents with 2 episodes of hematemesis (estimated 300-400mL total) and 2 days of melena. BP 96/62, HR 116 — hemodynamically compromised.\n\nRISK STRATIFICATION:\nGLASGOW-BLATCHFORD SCORE:\n- BUN ≥25 (3pts), Hgb <10 (6pts), systolic BP <100 (3pts) → TOTAL ≥12 = very high risk\n→ ICU admission, urgent EGD within 12-24h\n\nPRE-ENDOSCOPY MANAGEMENT:\n1. 2 large-bore IVs (16g or larger)\n2. Type and crossmatch — target Hgb ≥7 (liberal transfusion worsens variceal outcomes)\n3. IV PPI — pantoprazole drip raises gastric pH, stabilizes clot\n4. Octreotide — vasoactive agent, reduces portal pressure. Use when variceal etiology possible.\n5. Antibiotic prophylaxis — norfloxacin or ceftriaxone for cirrhotic patients with UGIB\n6. Airway — consider intubation before EGD in massive hematemesis (aspiration risk)\n7. Avoid NG lavage — not therapeutic, can cause harm\n\nTRANSFUSION THRESHOLD:\n- UGIB: Hgb <7 (restrictive strategy) EXCEPT:\n  - Suspected variceal bleed: Hgb <7 is still threshold but be more conservative (overtransfusion worsens portal hypertension and rebleed)\n  - ACS/cerebrovascular disease: Hgb <8\n\nOCTREOTIDE — MECHANISM:\n- Reduces portal pressure by splanchnic vasoconstriction\n- Use for SUSPECTED varices — continue until EGD confirms etiology\n- Continue x5 days if varices confirmed",
          "assessment": "High-risk UGIB — GBS ≥12. Resuscitating. GI notified — urgent EGD within 12h. Admit ICU. Pantoprazole drip, octreotide drip, ceftriaxone prophylaxis. pRBCs if Hgb falls below 7.",
          "plan": "2 large-bore IVs. Type and crossmatch — 2 units pRBC on hold. NS 1L over 30 min. Pantoprazole 80mg IV bolus → 8 mg/hr. Octreotide 50mcg IV → 50 mcg/hr. Ceftriaxone 1g IV. GI consult — urgent EGD today. ICU admission. NPO. Foley catheter — strict I&Os. Repeat Hgb Q4H. Transfuse if Hgb <7. Platelet transfusion if <50k in active bleed."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "10:20",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-662411",
          "collected": "03/15/2026 10:15",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC AND COAGULATION",
              "results": [
                {
                  "test": "Hemoglobin",
                  "value": "7.8",
                  "unit": "g/dL",
                  "range": "13.5-17.5",
                  "flag": "L"
                },
                {
                  "test": "MCV",
                  "value": "102",
                  "unit": "fL",
                  "range": "80-100 (macrocytosis — alcohol)",
                  "flag": "H"
                },
                {
                  "test": "Platelets",
                  "value": "98",
                  "unit": "x10³/µL",
                  "range": "150-400 (thrombocytopenia — cirrhosis?)",
                  "flag": "L"
                },
                {
                  "test": "PT/INR",
                  "value": "1.6",
                  "unit": "",
                  "range": "<1.2 (elevated — hepatic coagulopathy?)",
                  "flag": "H"
                },
                {
                  "test": "aPTT",
                  "value": "42",
                  "unit": "sec",
                  "range": "25-35",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "METABOLIC AND LIVER",
              "results": [
                {
                  "test": "BUN",
                  "value": "42",
                  "unit": "mg/dL",
                  "range": "7-20 (elevated BUN:Cr ratio suggests UGIB — blood protein absorbed in gut)",
                  "flag": "H"
                },
                {
                  "test": "Creatinine",
                  "value": "1.1",
                  "unit": "mg/dL",
                  "range": "0.7-1.3",
                  "flag": ""
                },
                {
                  "test": "BUN:Cr ratio",
                  "value": "38:1",
                  "unit": "",
                  "range": ">30:1 suggests UGIB",
                  "flag": "H"
                },
                {
                  "test": "AST",
                  "value": "188",
                  "unit": "U/L",
                  "range": "10-40",
                  "flag": "H"
                },
                {
                  "test": "ALT",
                  "value": "68",
                  "unit": "U/L",
                  "range": "7-56",
                  "flag": "H"
                },
                {
                  "test": "AST:ALT ratio",
                  "value": "2.8:1",
                  "unit": "",
                  "range": "<2 non-alcoholic; >2 alcoholic liver disease",
                  "flag": "H"
                },
                {
                  "test": "Total Bilirubin",
                  "value": "2.8",
                  "unit": "mg/dL",
                  "range": "0.2-1.2",
                  "flag": "H"
                },
                {
                  "test": "Albumin",
                  "value": "2.6",
                  "unit": "g/dL",
                  "range": "3.5-5.0 (hypoalbuminemia — cirrhosis?)",
                  "flag": "L"
                }
              ]
            }
          ]
        }
      ],
      "imaging": []
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Post-EGD day 1 — duodenal ulcer with Forrest Ia bleeding — clipped + injected — hemostasis achieved",
        "diagnosis": "Duodenal Peptic Ulcer — Active Bleeding — Post-Endoscopic Hemostasis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Duodenal ulcer — posterior wall, 1.8cm, active spurting arterial bleed (Forrest Ia — highest rebleed risk without treatment). Hemostasis achieved with: epinephrine injection + hemoclip x2. H. pylori rapid urease test: POSITIVE. NOT VARICES.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "K26.4"
        },
        {
          "id": "prob-2",
          "description": "H. pylori positive — TREAT. Triple therapy: PPI + clarithromycin + amoxicillin x14 days. Confirm eradication with urea breath test 4 weeks after completing treatment (not H. pylori antigen test — less reliable after treatment).",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "B96.81"
        },
        {
          "id": "prob-3",
          "description": "Post-EGD rebleed risk — Forrest Ia has 55% rebleed risk without endoscopy, 15-20% after successful hemostasis. High-dose PPI infusion x72h standard after high-risk lesion treated.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "K26.4"
        },
        {
          "id": "prob-4",
          "description": "NSAIDs — STOP permanently. Ibuprofen caused/contributed to ulcer. If NSAID needed in future: use lowest dose with PPI co-administration. Consider COX-2 selective (celecoxib) with PPI — reduced GI risk.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "K25.4"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Pantoprazole",
          "dose": "40mg IV",
          "route": "IV",
          "frequency": "Q12H for 72h post-endoscopy (high-dose PPI reduces rebleed risk by 50% for high-risk lesions)",
          "status": "Active — post-EGD protocol",
          "prescriber": "Dr. GI Attending"
        },
        {
          "id": "med-2",
          "name": "Clarithromycin 500mg / Amoxicillin 1g / Omeprazole 20mg",
          "dose": "Per H. pylori triple therapy",
          "route": "PO",
          "frequency": "BID x14 days — starting when tolerating PO",
          "status": "NEW — H. pylori eradication",
          "prescriber": "Dr. GI Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "bp": "118/74",
          "hr": "88",
          "rr": "16",
          "temp": "37.2°C",
          "spo2": "98%",
          "pain": "2/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "GI Progress Note Post-EGD",
          "date": "03/16/2026",
          "provider": "Dr. GI Attending",
          "cc": "Day 1 post-hemostasis — duodenal ulcer, H. pylori positive",
          "hpi": "EGD yesterday: 1.8cm posterior duodenal ulcer, Forrest Ia (active arterial spurter). Successfully treated with epinephrine injection + hemoclip x2. No varices, no gastric ulcer, no Mallory-Weiss tear. H. pylori rapid urease test positive.\n\nNSAID AND PPI TEACHING:\n- If patient needs NSAIDs chronically: must use PPI co-administration\n- Misoprostol alternative for GI protection with NSAIDs\n- H. pylori eradication reduces ulcer recurrence dramatically\n- Confirm eradication: urea breath test or fecal antigen test 4+ weeks after completing antibiotics AND off PPI x2 weeks (PPI suppresses H. pylori, causing false-negative tests)",
          "assessment": "Post-EGD — hemostasis achieved. H. pylori positive — treating. No rebleed. Transition to oral PPI. Discharge in 48-72h if no rebleed.",
          "plan": "IV PPI x72h total then switch to PO pantoprazole 40mg daily. H. pylori triple therapy x14 days starting when tolerating soft diet. STOP NSAIDs permanently. Alcohol cessation counseling. Serial Hgb Q12H. If stable at 72h → discharge. Urea breath test 6 weeks post-treatment for eradication confirmation. GI follow-up 6 weeks with repeat EGD to confirm ulcer healing (posterior duodenal ulcer — cancer exclusion not routinely needed but healing confirmation important)."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. GI",
          "accession": "LAB-662412",
          "collected": "03/16/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "POST-PROCEDURE MONITORING",
              "results": [
                {
                  "test": "Hemoglobin",
                  "value": "8.4",
                  "unit": "g/dL",
                  "range": "Stable post-transfusion (received 2U pRBCs)",
                  "flag": "L"
                },
                {
                  "test": "Platelets",
                  "value": "102",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": "L"
                },
                {
                  "test": "H. pylori Rapid Urease (EGD biopsy)",
                  "value": "POSITIVE",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "ACG-UGIB-2021",
      "title": "ACG Clinical Guideline: Management of Patients with Acute Lower Gastrointestinal Bleeding",
      "authors": "Strate LL, Gralnek IM",
      "journal": "American Journal of Gastroenterology",
      "year": 2016,
      "doi": "10.1038/ajg.2016.121",
      "url": "https://journals.lww.com/ajg/fulltext/2016/04000/acg_clinical_guideline__management_of_patients.14.aspx",
      "openAccess": false,
      "validates": [
        "Glasgow-Blatchford Score",
        "Resuscitation targets",
        "PPI therapy",
        "Octreotide for variceal bleed",
        "Antibiotic prophylaxis in cirrhosis"
      ]
    },
    {
      "id": "StatPearls-UGIB",
      "title": "Gastrointestinal Bleeding",
      "authors": "Cappell MS, Friedel D",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK470513/",
      "openAccess": true,
      "validates": [
        "UGIB vs LGIB differentiation",
        "BUN:Cr ratio",
        "Forrest classification",
        "H. pylori eradication",
        "Transfusion threshold Hgb 7"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Upper GI Bleed — Risk Stratification and Management",
    "caseId": "upper-gi-bleed"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: upper gastrointestinal (GI) bleed requiring structured risk stratification and management. Key learning: (1) Upper GI bleeding (UGIB) is defined as bleeding proximal to the ligament of Treitz and presents with hematemesis (bright red blood or coffee-ground emesis), melena (black tarry stools), or occasionally hematochezia in massive bleeds. Etiologies: peptic ulcer disease (most common, ~40-50% — H. pylori, NSAIDs, stress ulceration), esophageal or gastric varices (portal hypertension — distinct management), Mallory-Weiss tear (after retching/vomiting), esophagitis, Dieulafoy lesion, gastric or esophageal cancer, AV malformation (including angiodysplasia), aortoenteric fistula (in patients with AAA repair), and medication-related (anticoagulants, NSAIDs, steroids). (2) Risk stratification. Glasgow-Blatchford score (GBS) at presentation: BUN, Hgb, SBP, HR, melena, syncope, liver disease, heart failure. Score 0-1 identifies very low-risk patients who may be managed outpatient (outside the US, commonly used). Rockall score (pre- and post-endoscopic) predicts mortality. Clinical severity: hemodynamic instability, active ongoing bleeding, advanced age, comorbidities, and coagulopathy define higher-risk patients needing urgent intervention. (3) Initial management. (a) Resuscitation: two large-bore IVs, crystalloid resuscitation, blood products (pRBCs for hemodynamic instability or Hgb <7 — <8 for cardiac ischemia; restrictive thresholds improve outcomes in UGIB per Villanueva et al.). (b) Airway protection for severe hematemesis or altered mental status. (c) NPO. (d) IV proton pump inhibitor (pantoprazole 80 mg bolus then 8 mg/hr infusion, or 40 mg BID) — reduces rebleed and surgery in ulcer bleeding. (e) Prokinetic (erythromycin or metoclopramide IV) before endoscopy — improves mucosal visualization by clearing gastric contents. (f) Correct coagulopathy and reverse anticoagulants (see elsewhere). (g) Hold antiplatelets and anticoagulants; decision about restarting made individually based on indication and rebleed risk. (h) Consultation with GI for urgent endoscopy (within 24 hours for most UGIB; within 12 hours for suspected variceal bleed). (4) Specific management by cause. Peptic ulcer bleeding: endoscopic hemostasis (epinephrine injection, thermal coagulation, clips, powder spray) for active bleeding (Forrest Ia/Ib) or visible vessel (Forrest IIa); continue PPI infusion; H. pylori testing and eradication; discontinue NSAIDs. Variceal bleeding: octreotide 50 mcg bolus then 50 mcg/hr infusion (reduces portal pressure); ceftriaxone or norfloxacin for prophylaxis against SBP in cirrhotics; endoscopic band ligation or sclerotherapy; TIPS for refractory; balloon tamponade (Blakemore, Minnesota) as last-resort bridge. Mallory-Weiss tear: usually self-limited; endoscopic clips for active bleeding. Massive rebleeding or failure of endoscopic therapy: interventional radiology embolization, surgery as last resort. Aortoenteric fistula: extremely lethal; emergent vascular/surgery consultation, massive transfusion, OR. (5) Post-bleed. Secondary prevention: PPI for ulcer history, variceal prevention with non-selective beta-blocker (propranolol, nadolol) and repeat banding, smoking cessation, alcohol cessation, NSAID avoidance, H. pylori eradication confirmation. Discuss restarting antiplatelets/anticoagulants — resume as soon as bleeding risk acceptable, typically within days to weeks depending on indication. Classic pitfalls: (a) under-resuscitating or transfusing too liberally — target Hgb 7 in most cases, 8 for cardiac. (b) Missing variceal bleeding as etiology in cirrhotic patients — treatment is different (octreotide, antibiotic prophylaxis, early endoscopy). (c) Holding PPI while awaiting endoscopy — start early. (d) Not searching for aortoenteric fistula in a patient with prior AAA repair presenting with GI bleed — mortality >90% if missed; emergent CTA. (e) Discharging without follow-up plan: H. pylori test, PPI duration, medication reconciliation, endoscopic surveillance for Barrett's or ulcer healing in appropriate cases."
    }
  }
};
