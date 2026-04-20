
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Ramon Delgado",
      "patientHPI": "I notice my chest gets tight and I start wheezing when I'm at work, but it seems to get better on weekends when I'm home.",
      "dob": "09/22/1986",
      "age": "38",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "RDX-2025-95112",
      "language": "English/Spanish (bilingual)",
      "race": "Hispanic or Latino",
      "phone": "(614) 555-5470",
      "email": "rdelgado@email.com",
      "address": "5517 N Kedzie Blvd, Louisville, KY 40204",
      "insurance": "Worker's Compensation / Aetna",
      "pcp": "Dr. Hector Fuentes, MD",
      "pharmacy": "CVS \u2014 Sample Rd",
      "emergencyContact": {
        "name": "Elena Delgado",
        "phone": "(412) 555-2845",
        "relationship": "Wife"
      },
      "chiefComplaint": "Chest tightness and wheezing that is worse at work and improves on weekends",
      "diagnosis": "Occupational asthma \u2014 isocyanate sensitization (TDI \u2014 toluene diisocyanate)"
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "None known",
        "severity": "N/A",
        "type": "N/A"
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025",
        "site": "Left deltoid"
      },
      {
        "name": "Tdap",
        "date": "2021",
        "site": "Right deltoid"
      }
    ],
    "familyHistory": [
      "No family history of asthma, atopy, or pulmonary disease",
      "Father: hypertension",
      "Mother: type 2 diabetes"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Former smoker \u2014 8 pack-year history, quit 5 years ago"
      ],
      [
        "Alcohol",
        "Occasional"
      ],
      [
        "Occupation",
        "Automotive spray painter \u2014 12 years total. Uses two-component polyurethane paint systems containing TDI (toluene diisocyanate). Adequate PPE: half-face respirator (but frequently worn incorrectly or removed during cleanup). Works in poorly ventilated spray booth \u2014 ventilation system malfunctioned 3 months ago, unrepaired."
      ],
      [
        "Exercise",
        "Soccer on weekends \u2014 no symptoms during outdoor play (key history)"
      ],
      [
        "Pets",
        "No pets"
      ],
      [
        "Hobbies",
        "Woodworking"
      ],
      [
        "Work pattern",
        "Symptoms began approximately 3 years after starting spray painting. Worse on Monday\u2013Friday. Improved over 3-week vacation last summer \u2014 symptom-free by day 5 of vacation."
      ]
    ]
  },
  "encounters": {
    "ed": {
      "cc": "Acute onset severe wheeze and dyspnea 45 minutes after starting spray painting session with new two-component polyurethane product. Co-workers called EMS.",
      "dx": "Acute severe occupational asthma exacerbation \u2014 TDI exposure",
      "problems": [
        {
          "id": "prob-1",
          "description": "Occupational asthma \u2014 work-related wheeze 3-year history, now acute exacerbation",
          "status": "Active"
        },
        {
          "id": "prob-2",
          "description": "TDI (toluene diisocyanate) exposure \u2014 automotive spray painter 12 years",
          "status": "Active"
        },
        {
          "id": "prob-3",
          "description": "Poorly fitting respirator \u2014 admitted not sealing properly",
          "status": "Active"
        },
        {
          "id": "prob-4",
          "description": "No home rescue inhaler \u2014 never prescribed",
          "status": "Active"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "None prescribed (first ED visit for asthma)",
          "dose": "N/A",
          "route": "N/A",
          "indication": "No prior asthma treatment"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "EMS arrival (workplace)",
            "bp": "156/98",
            "hr": "122",
            "rr": "30",
            "temp": "37.2",
            "spo2": "86% RA",
            "pef": "Not measured (unable)"
          },
          {
            "time": "ED triage (30 min later)",
            "bp": "148/92",
            "hr": "114",
            "rr": "26",
            "spo2": "91% 4L NC",
            "pef": "35% predicted"
          },
          {
            "time": "60 min post-treatment",
            "bp": "134/84",
            "hr": "88",
            "rr": "18",
            "spo2": "97% RA",
            "pef": "68% predicted"
          }
        ]
      },
      "labs": {
        "cbc": {
          "title": "CBC with Differential",
          "rows": [
            {
              "test": "WBC",
              "value": "11.2",
              "unit": "K/\u00b5L",
              "flag": "H",
              "ref": "4.5\u201311.0",
              "note": "Mild leukocytosis \u2014 stress response + albuterol effect"
            },
            {
              "test": "Eosinophils",
              "value": "4",
              "unit": "%",
              "ref": "1\u20134",
              "note": "Normal eosinophil count \u2014 expected in LMW sensitizer OA (non-IgE mechanism). Blood eosinophilia NOT required for OA diagnosis."
            },
            {
              "test": "Absolute Eosinophils",
              "value": "448",
              "unit": "cells/\u00b5L",
              "ref": "<500",
              "note": "Normal. LMW-sensitizer OA (isocyanates) is often NOT eosinophilic in blood \u2014 tissue eosinophilia may occur but peripheral count is frequently normal."
            }
          ]
        }
      },
      "imaging": [
        {
          "type": "Chest X-Ray (AP portable)",
          "findings": "Bilateral hyperinflation. Flattened diaphragms. No consolidation, pneumothorax, or pleural effusion. Peribronchial cuffing.",
          "impression": "Findings consistent with acute severe bronchospasm / asthma. No acute cardiopulmonary process."
        }
      ],
      "assessment": "38M automotive spray painter presenting with acute severe occupational asthma exacerbation following TDI exposure (new polyurethane paint product, poorly fitting respirator). PEF 35% on arrival = NAEPP Severe. History strongly suggestive of sensitizer-induced OA: 3-year latency from TDI exposure onset, work-related pattern, vacation improvement. LMW sensitizer (TDI) \u2192 non-IgE mechanism \u2192 expect negative SPT and normal peripheral eosinophils.",
      "plan": "1. SABA: albuterol 2.5 mg nebulized q20min \u00d7 3\n2. Ipratropium 0.5 mg q20min \u00d7 3\n3. Methylprednisolone 125 mg IV\n4. Supplemental O\u2082: titrate to SpO\u2082 \u226594%\n5. Observe 4 hours post-treatment\n6. Discharge medications: albuterol MDI + spacer (rescue), prednisolone 40 mg \u00d7 5 days, fluticasone/salmeterol 250/50 initiated\n7. CRITICAL: Instruct patient to NOT return to spray painting work until occupational medicine evaluation\n8. Workers' compensation paperwork initiated\n9. Refer: Occupational Medicine + Allergy/Immunology for definitive OA diagnosis and serial PEF monitoring\n10. Documentation: Exposure history, symptom-work relationship, OSHA notification discussed"
    },
    "office": {
      "cc": "Allergy/Immunology consultation for occupational asthma evaluation \u2014 2 weeks post-hospitalization. Serial PEF monitoring completed (4 weeks: 2 weeks at work on light duty, 2 weeks off work).",
      "dx": "Isocyanate (TDI) sensitizer-induced occupational asthma \u2014 confirmed by serial PEF monitoring showing >20% work-related variability",
      "problems": [
        {
          "id": "prob-1",
          "description": "Occupational asthma \u2014 TDI sensitization. Serial PEF confirms work-related pattern.",
          "status": "Active"
        },
        {
          "id": "prob-2",
          "description": "Inadequate respiratory protection at work \u2014 half-face respirator worn incorrectly",
          "status": "Active"
        },
        {
          "id": "prob-3",
          "description": "Legal/occupational implications \u2014 Workers' Comp claim pending",
          "status": "Active"
        },
        {
          "id": "prob-4",
          "description": "Financial concern \u2014 sole breadwinner, worried about job loss if removed from spray booth",
          "status": "Active"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone/salmeterol 250/50 mcg",
          "dose": "1 puff BID",
          "route": "Inhaled",
          "indication": "Controller \u2014 medium-dose ICS/LABA"
        },
        {
          "id": "med-2",
          "name": "Albuterol MDI 90 mcg",
          "dose": "2 puffs q4h PRN",
          "route": "Inhaled",
          "indication": "Rescue bronchodilator"
        },
        {
          "id": "med-3",
          "name": "Prednisolone 40 mg",
          "dose": "Completing 5-day course",
          "route": "Oral",
          "indication": "Exacerbation treatment"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "Office visit",
            "bp": "126/82",
            "hr": "74",
            "rr": "15",
            "spo2": "98% RA",
            "pef": "79% predicted (off work 1 week)"
          }
        ]
      },
      "labs": {
        "spirometry": {
          "title": "Spirometry \u2014 Allergy Office Visit (off work 1 week)",
          "rows": [
            {
              "test": "FVC",
              "value": "4.12 L (88% predicted)"
            },
            {
              "test": "FEV\u2081",
              "value": "3.31 L (79% predicted)",
              "flag": "L"
            },
            {
              "test": "FEV\u2081/FVC",
              "value": "0.80"
            },
            {
              "test": "Post-BD FEV\u2081",
              "value": "3.74 L (89% predicted)",
              "note": "+13% / +430 mL \u2014 POSITIVE reversibility"
            },
            {
              "test": "Methacholine PC20 (MCT)",
              "value": "3.2 mg/mL",
              "flag": "H",
              "note": "PC20 \u22644 mg/mL = significant AHR. Consistent with current active asthma. NOTE: MCT performed OFF work \u2014 would be even more positive during active work exposure."
            }
          ]
        },
        "allergy_testing": {
          "title": "Allergy Testing for OA Evaluation",
          "rows": [
            {
              "test": "SPT \u2014 TDI conjugate (if available)",
              "value": "NOT PERFORMED",
              "note": "Standardized TDI-SPT is not commercially available in US. LMW sensitizers (TDI) form haptens \u2014 require protein conjugation for skin testing. Research-use only. SPT is NOT the diagnostic test for isocyanate OA."
            },
            {
              "test": "TDI-specific IgE (serum)",
              "value": "0.18 kUA/L",
              "ref": "<0.35",
              "note": "NEGATIVE. Expected. Isocyanate OA is predominantly NON-IgE mediated \u2014 TDI-HSA conjugate IgE is often negative even in confirmed cases. Do NOT use to rule out TDI OA."
            },
            {
              "test": "Total IgE",
              "value": "58 IU/mL",
              "ref": "0\u2013100",
              "note": "Normal \u2014 consistent with non-atopic individual"
            },
            {
              "test": "Aeroallergen panel (SPT)",
              "value": "All negative (dust mite, cat, dog, grass, trees, molds)",
              "note": "Non-atopic. No evidence of allergic sensitization to environmental aeroallergens."
            }
          ],
          "note": "\u26a0\ufe0f KEY TEACHING: Isocyanate (TDI) OA is a NON-IgE-mediated sensitization. Negative SPT and negative TDI-specific IgE do NOT exclude isocyanate OA. The gold standard is serial PEF monitoring or specific inhalation challenge \u2014 NOT allergy skin testing."
        },
        "pef_monitoring": {
          "title": "Serial Peak Expiratory Flow (PEF) Monitoring \u2014 4 Weeks",
          "rows": [
            {
              "test": "Week 1\u20132 (light duty, spray booth area, PPE worn)",
              "value": "Mean PEF: 72% predicted on workdays; 84% on non-workdays",
              "flag": "H",
              "note": "Variability >20% between workdays and non-workdays = DIAGNOSTIC of work-related airway obstruction"
            },
            {
              "test": "Week 3\u20134 (off work \u2014 on medical leave)",
              "value": "Mean PEF: 86\u201391% predicted (improving trend)",
              "note": "Progressive PEF improvement with days off work. 19% improvement vs. at-work values."
            },
            {
              "test": "Peak variability (highest PEF \u2212 lowest PEF / highest PEF)",
              "value": "27%",
              "flag": "H",
              "note": "Threshold for significant work-related variability: >20%. 27% = POSITIVE. Criteria met for occupational asthma diagnosis."
            },
            {
              "test": "Symptom diary correlation",
              "value": "Symptoms scored 0\u201310: mean 7/10 on workdays; 1/10 on days off",
              "note": "Clear symptom-work correlation documented"
            }
          ],
          "note": "Serial PEF interpretation: OASYS software analysis (validated OA diagnostic tool) shows work-related pattern with improvement off work. Combined with work history, latency period, and negative aeroallergen SPT \u2014 isocyanate OA confirmed without need for specific inhalation challenge."
        }
      },
      "assessment": "Isocyanate (TDI) occupational asthma confirmed:\n\u2022 3-year latency from TDI exposure onset to symptom development (consistent with sensitizer-induced OA)\n\u2022 Work-related PEF pattern: 27% variability (>20% threshold) + symptom improvement off work\n\u2022 Non-atopic (negative aeroallergen SPT, normal IgE) \u2014 OA not confounded by allergic asthma\n\u2022 TDI-specific IgE negative \u2014 EXPECTED for LMW sensitizer (hapten mechanism, not IgE-mediated)\n\u2022 MCT PC20 3.2 mg/mL \u2014 significant AHR present\n\u2022 Diagnosis confirmed WITHOUT specific inhalation challenge (SIC) \u2014 not required when PEF data is diagnostic\n\nCRITICAL MANAGEMENT DECISION: Complete removal from TDI exposure recommended. Evidence: recovery of lung function and resolution of AHR is best (<1 year exposure from symptom onset) vs. permanent AHR if continued exposure (>2 years after diagnosis). Patient has financial concerns \u2014 counseling provided on Workers' Compensation rights, retraining options, and long-term disability risk of continued exposure.",
      "plan": "1. CONFIRM DIAGNOSIS: OA due to TDI \u2014 documented in medical record for Workers' Compensation\n2. WORKPLACE REMOVAL: Complete removal from spray painting recommended. Alternatives discussed:\n   a. Job transfer to non-spray booth role within same employer (strongly preferred)\n   b. Full workplace removal + retraining (if no safe alternative role available)\n   c. Continued exposure with enhanced PPE = NOT acceptable \u2014 no safe TDI exposure level after sensitization\n3. Asthma management: continue ICS/LABA. Add montelukast for residual inflammation.\n4. OSHA reporting: exposure levels above TDI PEL (0.02 ppm ceiling) suspected given ventilation failure \u2014 employer notified\n5. Workers' Compensation: medical documentation provided\n6. Occupational Medicine: co-management for workplace accommodation\n7. Return in 3 months to reassess lung function after workplace removal"
    },
    "inpatient": {
      "cc": "3-month follow-up \u2014 10 weeks after complete workplace removal from spray booth (transferred to administrative role at same dealership)",
      "dx": "Occupational asthma \u2014 isocyanate sensitization. Significant improvement after workplace removal. Residual AHR persisting \u2014 counseled that full recovery may not occur given 3+ years sensitized exposure.",
      "problems": [
        {
          "id": "prob-1",
          "description": "OA \u2014 improving post-removal. PEF normalized to 92% predicted. Residual AHR on MCT.",
          "status": "Improving"
        },
        {
          "id": "prob-2",
          "description": "Sensitization permanent \u2014 must NEVER return to isocyanate exposure (any form).",
          "status": "Permanent"
        },
        {
          "id": "prob-3",
          "description": "Workers' Compensation claim \u2014 settled. Permanent partial disability documented.",
          "status": "Resolved"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone 220 mcg (STEPPED DOWN to medium-dose ICS monotherapy)",
          "dose": "2 puffs BID",
          "route": "Inhaled",
          "indication": "Asthma controller \u2014 LABA removed given significant improvement"
        },
        {
          "id": "med-2",
          "name": "Albuterol MDI",
          "dose": "PRN (used 0\u20131\u00d7 per week)",
          "route": "Inhaled"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "3-month follow-up (10 weeks post-removal)",
            "bp": "120/76",
            "hr": "66",
            "rr": "13",
            "spo2": "99% RA",
            "pef": "92% predicted"
          }
        ]
      },
      "labs": {
        "follow_up_spirometry": {
          "title": "Spirometry \u2014 3 Months Post-Workplace Removal",
          "rows": [
            {
              "test": "FEV\u2081",
              "value": "3.89 L (93% predicted)",
              "note": "Improved from 79% \u2192 93% predicted. Near-normal."
            },
            {
              "test": "FEV\u2081/FVC",
              "value": "0.83",
              "note": "Normal. Obstruction resolved."
            },
            {
              "test": "Post-BD FEV\u2081",
              "value": "3.94 L (94% predicted)",
              "note": "Minimal bronchodilator response \u2014 obstruction largely resolved."
            },
            {
              "test": "Methacholine PC20 (MCT)",
              "value": "7.8 mg/mL",
              "note": "Improved from 3.2 \u2192 7.8 mg/mL. Still mildly elevated AHR (PC20 4\u201316 = borderline). Residual AHR may persist for months to years post-removal. Complete normalization less likely given >3 years sensitized exposure."
            }
          ],
          "note": "Residual AHR after workplace removal is common in OA \u2014 especially when diagnosis was delayed >2 years after symptom onset. Full normalization of PC20 occurs in ~30% within 2 years; ~70% retain some AHR permanently. This patient's delay (3 years exposure after symptoms began) makes full AHR resolution less likely."
        }
      },
      "assessment": "Significant recovery after TDI exposure removal: FEV\u2081 normalized (79% \u2192 93%), symptoms minimal, PEF 92% predicted. Residual AHR present (PC20 7.8 mg/mL) \u2014 expected given >3 year exposure delay. Permanent TDI sensitization confirmed \u2014 patient counseled that ANY future isocyanate exposure (TDI, MDI, HDI \u2014 any diisocyanate compound including adhesives, varnishes, foam) will trigger asthma attacks regardless of exposure level. This includes hobbies (model painting, polyurethane varnish use in woodworking).",
      "plan": "1. Step-down ICS to medium-dose monotherapy \u2014 LABA removed (significant improvement)\n2. LIFETIME avoidance: all isocyanate-containing products (TDI, MDI, HDI, NDI). Provide list of common products to avoid including: automotive paints, polyurethane foam, two-component adhesives, some floor varnishes, spray insulation\n3. Alert card: 'Isocyanate-sensitized \u2014 occupational asthma history. Avoid all diisocyanate compounds.'\n4. Woodworking hobby: avoid polyurethane varnishes. Use water-based alternatives.\n5. Annual spirometry monitoring\n6. Return: 6 months"
    }
  },
  "teachingPoints": {
    "keyLearning": [
      "Isocyanates (TDI, MDI) = most common occupational asthma cause in developed countries \u2014 LMW sensitizer, NON-IgE mechanism",
      "LMW sensitizer OA: SPT negative, specific IgE often negative \u2014 cannot use standard allergy testing to rule out",
      "Serial PEF monitoring (\u22654 weeks, 2 at work/2 off) is the primary diagnostic tool \u2014 >20% variability = positive",
      "Latency period (weeks to years) before sensitization \u2014 then any exposure level triggers attacks",
      "Early removal (<1 year after symptom onset) = best prognosis. Delayed removal = permanent AHR.",
      "Once sensitized to an isocyanate, ANY isocyanate compound (TDI, MDI, HDI) will trigger attacks \u2014 cross-reactivity within class"
    ],
    "boardPearls": [
      "Most common OA worldwide: flour (baker's asthma) \u2014 HMW, IgE-mediated",
      "Most common OA in developed countries: isocyanates \u2014 LMW, NON-IgE, SPT negative",
      "RADS: single massive irritant exposure \u2192 asthma within 24h. No latency. No sensitization. Not isocyanate-related.",
      "Serial PEF: \u22654 weeks total (\u22652 at work, \u22652 away). >20% variability = diagnostic.",
      "Gold standard for OA: specific inhalation challenge (SIC) \u2014 but rarely needed if PEF data diagnostic",
      "Western red cedar (plicatic acid): classic Canadian OA. LMW sensitizer. Non-IgE.",
      "Platinum salts: HMW sensitizer \u2014 IgE-mediated, SPT positive (unlike most LMW)",
      "Prognosis: removal <1 year \u2192 50\u201370% remission. Removal >2 years \u2192 persistent AHR in majority"
    ]
  },
  "references": [
    {
      "id": "StatPearls-OccAsthma",
      "title": "Occupational Asthma",
      "authors": "Vandenplas O, Wiszniewska M, Raulf M, et al.",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK541076/",
      "openAccess": true,
      "validates": [
        "HMW vs LMW sensitizer classification",
        "TDI/MDI as most common OA agents in developed countries",
        "Serial PEF monitoring protocol and >20% variability threshold",
        "Prognosis of early vs late workplace removal"
      ]
    },
    {
      "id": "StatPearls-Asthma",
      "title": "Asthma",
      "authors": "StatPearls Publishing",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK430901/",
      "openAccess": true,
      "validates": [
        "Methacholine challenge PC20 thresholds for AHR",
        "NAEPP acute severity classification and management",
        "Spirometry reversibility criteria"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Occupational Asthma \u2014 Isocyanate-Induced, Auto Body Painter, Workplace Exposure Confirmed",
    "caseId": "occupational-asthma-isocyanate"
  },
  "problems": [
    {
      "problem": "Occupational asthma \u2014 isocyanate sensitization",
      "icd": "J45.990",
      "onset": "2024",
      "status": "Active",
      "notes": "Auto body painter x8 years, work-related bronchospasm confirmed by serial PEF monitoring"
    },
    {
      "problem": "New-onset asthma in adult \u2014 red flag for occupational cause",
      "icd": "J45.20",
      "onset": "2022",
      "status": "Active",
      "notes": "New asthma at age 34 without childhood history \u2014 OA until proven otherwise in any new-onset adult asthma"
    },
    {
      "problem": "Isocyanate sensitization \u2014 permanent \u2014 cannot return to exposure",
      "icd": "J45.990",
      "onset": "2024",
      "status": "Active",
      "notes": "Once sensitized to isocyanate, any re-exposure causes severe bronchospasm \u2014 workplace removal mandatory"
    }
  ],
  "medications": [
    {
      "name": "Fluticasone-salmeterol 250/50 inhaled BID",
      "sig": "1 puff twice daily \u2014 ICS/LABA combination",
      "prescriber": "Pulmonology",
      "start": "11/2024",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Albuterol 90mcg MDI 2 puffs PRN",
      "sig": "Rescue inhaler as needed",
      "prescriber": "Pulmonology",
      "start": "11/2024",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Montelukast 10mg daily",
      "sig": "Take daily \u2014 leukotriene modifier adjunct",
      "prescriber": "Pulmonology",
      "start": "11/2024",
      "refills": 6,
      "status": "Active"
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Occupational Asthma Workup",
      "results": [
        {
          "test": "Spirometry FEV1 (work day)",
          "value": "2.1",
          "unit": "L",
          "ref": "Predicted 3.2L",
          "flag": "L"
        },
        {
          "test": "Spirometry FEV1 (off work, 2 weeks)",
          "value": "2.8",
          "unit": "L",
          "ref": "Predicted 3.2L",
          "flag": ""
        },
        {
          "test": "FEV1 improvement with off-work period",
          "value": "33%",
          "unit": "%",
          "ref": ">15% = work-related",
          "flag": "H"
        },
        {
          "test": "Methacholine challenge (off work)",
          "value": "PC20 4 mg/mL \u2014 nonspecific hyperresponsiveness",
          "unit": "",
          "ref": "<8 mg/mL = positive",
          "flag": "H"
        },
        {
          "test": "Isocyanate-specific IgE",
          "value": "Positive \u2014 0.42 kU/L",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "High-Resolution CT Chest",
      "indication": "Occupational asthma \u2014 rule out hypersensitivity pneumonitis from isocyanate",
      "findings": "Bilateral ground-glass opacities predominantly in lower lobes \u2014 mild. No honeycombing. No consolidation. Air trapping on expiratory phase.",
      "impression": "Bilateral ground-glass opacities may represent hypersensitivity pneumonitis component in addition to OA. Bronchoalveolar lavage considered if clinical suspicion high. Air trapping supports hyperresponsive airways."
    }
  ],
  "guided": {
    "ddxTargets": [
      "Occupational asthma \u2014 isocyanate sensitization (correct)",
      "Intrinsic asthma \u2014 no occupational relationship",
      "COPD \u2014 non-smoker, reversible airflow obstruction",
      "Work-exacerbated asthma \u2014 pre-existing asthma worsened by workplace (different from OA)",
      "Hypersensitivity pneumonitis \u2014 possible concurrent, CT ground-glass opacities",
      "Vocal cord dysfunction \u2014 episodic inspiratory stridor, not bronchospasm"
    ],
    "coachPrompts": {
      "final": "Diagnosis: occupational asthma, isocyanate-sensitized. Key learning: (1) Isocyanates (MDI, TDI, HDI in spray paints) are the #1 cause of OA worldwide. Painters, foamers, and plastics workers are highest risk. Once sensitized, trace exposures cause severe bronchospasm \u2014 LIFELONG workplace removal required. (2) Diagnosis criteria: (a) New or worsening asthma, (b) Temporal relationship to work exposure (worse at work, better on holidays), (c) Objective confirmation: serial PEF (>20% AM-PM variation on work vs non-work days), methacholine challenge off work vs at work, specific inhalation challenge (gold standard). (3) FEV1 improvement of 33% on 2-week off-work period = strong evidence for OA. Specific IgE to isocyanate = sensitization confirmed. (4) Workplace removal is medicine: removing the worker from isocyanate exposure is the most effective treatment \u2014 more effective than any drug. Duration of exposure before diagnosis correlates with permanence of airway changes. Early diagnosis saves lung function. (5) Compensation and legal implications: OA has workers' compensation and occupational disease reporting implications. Allergist/pulmonologist writes the medicolegal report. Patient may be entitled to retraining benefits."
    }
  }
};
