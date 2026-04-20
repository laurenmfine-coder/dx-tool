
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Fatima Al-Rashid",
      "patientHPI": "My breathing has been getting worse over the past few weeks even with my inhaler, and now I've got this fever that won't break - when I went to urgent care yesterday they did a chest X-ray and said there's some kind of spot on my lung that wasn't there before.",
      "dob": "03/18/1990",
      "age": "34",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "RDX-2025-95341",
      "language": "English/Arabic (bilingual)",
      "race": "Middle Eastern or North African",
      "phone": "(702) 555-7999",
      "email": "falrashid@email.com",
      "address": "869 Hollyhock Rd, Phoenix, AZ 85008",
      "insurance": "Aetna PPO",
      "pcp": "Dr. Rania Khalil, MD",
      "pharmacy": "Walgreens \u2014 Oakland Park Blvd",
      "emergencyContact": {
        "name": "Tariq Al-Rashid",
        "phone": "(619) 555-9120",
        "relationship": "Husband"
      },
      "chiefComplaint": "Worsening asthma, fever, and new 'spot on the lung' found on chest X-ray at urgent care",
      "diagnosis": "Allergic bronchopulmonary aspergillosis (ABPA) \u2014 Stage I (ABPA-S, pre-bronchiectasis)"
    },
    "allergies": [
      {
        "allergen": "Sulfonamides",
        "reaction": "Urticaria",
        "severity": "Moderate",
        "type": "Drug"
      },
      {
        "allergen": "Penicillin",
        "reaction": "Rash as child \u2014 never formally evaluated",
        "severity": "Unknown",
        "type": "Drug-unverified"
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025",
        "site": "Left deltoid"
      },
      {
        "name": "Pneumococcal PCV20",
        "date": "2023"
      },
      {
        "name": "COVID-19",
        "date": "09/2025"
      }
    ],
    "familyHistory": [
      "Mother: allergic rhinitis, asthma",
      "Father: type 2 diabetes",
      "No family history of cystic fibrosis"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Never smoker"
      ],
      [
        "Occupation",
        "Elementary school librarian"
      ],
      [
        "Housing",
        "Apartment \u2014 lives near a construction site with significant excavation; mold noted in bathroom"
      ],
      [
        "Humidity",
        "High \u2014 South Florida"
      ],
      [
        "Pets",
        "One indoor cat"
      ],
      [
        "Asthma history",
        "Diagnosed age 12. Usually mild-moderate \u2014 controlled on medium-dose ICS. 2 exacerbations in past 18 months, both required oral steroids. Treated twice for 'pneumonia' last year \u2014 retrospectively likely ABPA flares."
      ]
    ]
  },
  "encounters": {
    "ed": {
      "cc": "5-day history of productive cough with brownish mucus plugs, low-grade fever (38.1\u00b0C), worsening dyspnea, and decreased response to albuterol. Urgent care chest X-ray showed right upper lobe infiltrate \u2014 referred to ED.",
      "dx": "Pulmonary infiltrate with asthma exacerbation \u2014 ABPA high on differential",
      "problems": [
        {
          "id": "p1",
          "description": "Moderate-persistent asthma \u2014 on fluticasone 220 mcg/salmeterol 21 mcg BID, inadequately controlled",
          "status": "Active"
        },
        {
          "id": "p2",
          "description": "New right upper lobe pulmonary infiltrate on CXR \u2014 eosinophilic etiology vs. infection",
          "status": "Active"
        },
        {
          "id": "p3",
          "description": "Productive cough with brownish mucus plugs \u2014 classic ABPA symptom",
          "status": "Active"
        },
        {
          "id": "p4",
          "description": "Two prior 'pneumonia' episodes treated with antibiotics without cultures \u2014 possibly prior ABPA flares",
          "status": "Historical"
        },
        {
          "id": "p5",
          "description": "Mold exposure \u2014 bathroom mold + construction site near home",
          "status": "Active"
        }
      ],
      "medications": [
        {
          "id": "m1",
          "name": "Fluticasone 220 mcg/salmeterol 21 mcg (Advair Diskus)",
          "dose": "1 inhalation BID",
          "route": "Inhaled",
          "indication": "Asthma controller \u2014 medium/high ICS"
        },
        {
          "id": "m2",
          "name": "Albuterol MDI 90 mcg",
          "dose": "2 puffs q4h PRN",
          "route": "Inhaled",
          "indication": "Rescue \u2014 using q2h \u00d7 5 days"
        },
        {
          "id": "m3",
          "name": "Loratadine 10 mg",
          "dose": "Daily",
          "route": "Oral",
          "indication": "Allergic rhinitis"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "Triage",
            "bp": "122/78",
            "hr": "104",
            "rr": "24",
            "temp": "38.3\u00b0C",
            "spo2": "92% RA"
          },
          {
            "time": "60 min post-Rx",
            "bp": "118/76",
            "hr": "88",
            "rr": "18",
            "temp": "38.1\u00b0C",
            "spo2": "96% 2L NC"
          }
        ]
      },
      "labs": {
        "cbc": {
          "title": "CBC with Differential",
          "rows": [
            {
              "test": "WBC",
              "value": "13.4",
              "unit": "K/\u00b5L",
              "flag": "H",
              "ref": "4.5\u201311.0"
            },
            {
              "test": "Eosinophils %",
              "value": "18",
              "unit": "%",
              "flag": "H",
              "ref": "1\u20134"
            },
            {
              "test": "Absolute Eosinophil Count",
              "value": "2,412",
              "unit": "cells/\u00b5L",
              "flag": "H",
              "ref": "<500",
              "note": "Marked eosinophilia \u2014 highly suggestive of eosinophilic pulmonary process (ABPA, eosinophilic pneumonia, CEP, parasites)"
            },
            {
              "test": "Neutrophils",
              "value": "64",
              "unit": "%"
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "ref": "12.0\u201316.0"
            },
            {
              "test": "Platelets",
              "value": "298",
              "unit": "K/\u00b5L"
            }
          ]
        },
        "chemistry": {
          "title": "Basic Metabolic Panel",
          "rows": [
            {
              "test": "Sodium",
              "value": "138",
              "unit": "mEq/L"
            },
            {
              "test": "Creatinine",
              "value": "0.81",
              "unit": "mg/dL"
            },
            {
              "test": "Glucose",
              "value": "96",
              "unit": "mg/dL"
            }
          ]
        },
        "initial_fungal": {
          "title": "Initial Fungal / Allergy Screen (ED)",
          "rows": [
            {
              "test": "Total IgE (serum)",
              "value": "1,840",
              "unit": "IU/mL",
              "flag": "H",
              "ref": "0\u2013100",
              "note": "\u26a0\ufe0f MARKEDLY ELEVATED \u2014 ABPA threshold is >1000 IU/mL during active disease. 1,840 IU/mL = active ABPA exacerbation. Note: IgE will fall after corticosteroid treatment \u2014 this baseline value is critical."
            },
            {
              "test": "Aspergillus fumigatus skin prick test",
              "value": "DEFERRED to outpatient",
              "note": "SPT for A. fumigatus (if available) or serum-specific IgE ordered as outpatient"
            }
          ]
        }
      },
      "imaging": [
        {
          "type": "Chest X-Ray (PA/Lateral)",
          "time": "ED",
          "findings": "Right upper lobe patchy consolidation with air bronchograms. Left perihilar infiltrate. Bilateral hyperinflation. No pneumothorax. No pleural effusion. Subtle right upper lobe bronchial wall thickening.",
          "impression": "Bilateral pulmonary infiltrates \u2014 right upper lobe predominant. In context of asthma, eosinophilia, and elevated IgE: ABPA is the leading diagnosis. Cannot exclude atypical pneumonia or eosinophilic pneumonia without further workup."
        }
      ],
      "assessment": "34F with known asthma presenting with pulmonary infiltrates, marked eosinophilia (2,412 cells/\u00b5L), and total IgE 1,840 IU/mL. The combination of: (1) asthma + (2) pulmonary eosinophilia + (3) IgE >1000 + (4) brownish mucus plugs = ABPA until proven otherwise. Two prior 'pneumonia' episodes that did not respond to antibiotics are retrospectively likely prior ABPA flares. Admitted for IV steroids, further ABPA workup, and HRCT chest.",
      "plan": "1. IV methylprednisolone 60 mg q6h \u2014 both asthma exacerbation + likely ABPA\n2. Albuterol q4h + ipratropium q6h\n3. Supplemental O\u2082 titrate to SpO\u2082 \u226594%\n4. ADMIT to medicine/allergy service\n5. Inpatient workup:\n   \u2014 HRCT chest (high-resolution, thin cuts through bronchi)\n   \u2014 Aspergillus fumigatus serum-specific IgE (f6)\n   \u2014 Aspergillus fumigatus serum-specific IgG (precipitins)\n   \u2014 Sputum culture \u00d7 3 + fungal culture\n   \u2014 Serum galactomannan (if immunocompromised status uncertain)\n6. Allergy/Immunology consult placed\n7. Document baseline IgE (1,840 IU/mL) \u2014 critical for monitoring treatment response\n8. Flag: patient has unverified penicillin allergy \u2014 formal evaluation needed for future antibiotic stewardship"
    },
    "office": {
      "cc": "Allergy/Immunology outpatient follow-up \u2014 10 days post-discharge. Completed 14-day IV \u2192 oral prednisolone course. ABPA workup results reviewed.",
      "dx": "ABPA-S (seropositive, without central bronchiectasis) \u2014 Confirmed. Initiating itraconazole steroid-sparing therapy.",
      "problems": [
        {
          "id": "p1",
          "description": "ABPA-S confirmed \u2014 all Rosenberg-Patterson criteria met",
          "status": "Active"
        },
        {
          "id": "p2",
          "description": "Asthma \u2014 underlying condition, now with clearer etiology for recurrent exacerbations",
          "status": "Active"
        },
        {
          "id": "p3",
          "description": "Steroid-associated hyperglycemia during hospitalization \u2014 resolved",
          "status": "Resolved"
        },
        {
          "id": "p4",
          "description": "Mold remediation needed \u2014 bathroom mold + construction site",
          "status": "Active"
        }
      ],
      "medications": [
        {
          "id": "m1",
          "name": "Prednisolone 0.5 mg/kg/day (42 mg)",
          "dose": "Tapering \u2014 currently 30 mg/day, taper over 3 months total",
          "route": "Oral",
          "indication": "ABPA acute treatment \u2014 Greenberger protocol"
        },
        {
          "id": "m2",
          "name": "Fluticasone/salmeterol 250/50 mcg",
          "dose": "1 puff BID",
          "route": "Inhaled",
          "indication": "Asthma controller"
        },
        {
          "id": "m3",
          "name": "Albuterol",
          "dose": "PRN",
          "route": "Inhaled"
        },
        {
          "id": "m4",
          "name": "Itraconazole 200 mg",
          "dose": "BID \u00d7 16 weeks (starting today)",
          "route": "Oral",
          "indication": "Steroid-sparing antifungal \u2014 reduces Aspergillus fungal burden. STARTING TODAY after baseline LFTs obtained."
        },
        {
          "id": "m5",
          "name": "Omeprazole 20 mg",
          "dose": "30 min before itraconazole",
          "route": "Oral",
          "indication": "Acid increases itraconazole absorption \u2014 take with acidic beverage (cola) for optimal absorption"
        },
        {
          "id": "m6",
          "name": "Calcium 600 mg + Vitamin D3 1000 IU",
          "dose": "BID",
          "route": "Oral",
          "indication": "Bone protection \u2014 chronic corticosteroid use"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "Outpatient visit",
            "bp": "126/80",
            "hr": "72",
            "rr": "14",
            "spo2": "98% RA",
            "wt": "67 kg",
            "pef": "86% predicted"
          }
        ]
      },
      "labs": {
        "abpa_confirmation": {
          "title": "Full ABPA Diagnostic Panel (Inpatient + Outpatient)",
          "time": "Confirmed results",
          "rows": [
            {
              "test": "Total IgE (serum) \u2014 BASELINE before steroids",
              "value": "1,840",
              "unit": "IU/mL",
              "flag": "H",
              "ref": "ABPA threshold: >1000 IU/mL",
              "note": "\u2705 Criterion met. Baseline documented BEFORE steroid initiation \u2014 critical for monitoring."
            },
            {
              "test": "Aspergillus fumigatus specific IgE (f6)",
              "value": "4.8",
              "unit": "kUA/L",
              "flag": "H",
              "ref": "<0.35 kUA/L",
              "note": "\u2705 Class 4 sensitization \u2014 positive. Criterion met. Confirms AF sensitization (not just non-specific IgE elevation)."
            },
            {
              "test": "Aspergillus fumigatus specific IgG (precipitins)",
              "value": "Positive (2.4\u00d7 upper limit)",
              "flag": "H",
              "note": "\u2705 Criterion met. Aspergillus-specific IgG (precipitating antibodies) = Type III immune complex component. Distinguishes ABPA from simple AF sensitization."
            },
            {
              "test": "Blood eosinophils (off steroids, baseline)",
              "value": "2,412",
              "unit": "cells/\u00b5L",
              "flag": "H",
              "ref": "<500",
              "note": "\u2705 Supportive criterion met (>500 cells/\u00b5L). Marked eosinophilia."
            },
            {
              "test": "Aspergillus fumigatus skin prick test (SPT)",
              "value": "Performed \u2014 wheal 8mm / flare 18mm",
              "note": "\u2705 Positive SPT (wheal \u22653mm > saline control). Confirms IgE-mediated sensitization to A. fumigatus."
            },
            {
              "test": "Sputum culture (\u00d7 3 samples)",
              "value": "Aspergillus fumigatus isolated in 2/3 samples",
              "note": "Supportive \u2014 AF colonization in airways confirmed. Not required for diagnosis but consistent with ABPA."
            },
            {
              "test": "Sputum Gram stain",
              "value": "Many eosinophils, fungal hyphae seen (rare). No bacteria.",
              "note": "Eosinophil-rich sputum \u2014 inflammatory pattern consistent with ABPA."
            },
            {
              "test": "Serum galactomannan",
              "value": "0.3 (negative <0.5)",
              "note": "Negative \u2014 no invasive aspergillosis. Galactomannan positive in invasive disease, negative in ABPA (hypersensitivity, not tissue invasion)."
            },
            {
              "test": "Baseline LFTs (before itraconazole)",
              "value": "ALT 22, AST 19, ALP 78, Tbili 0.6",
              "note": "All normal \u2014 safe to initiate itraconazole. Monitor LFTs q4\u20136 weeks during therapy."
            }
          ],
          "note": "ABPA DIAGNOSIS CONFIRMED: All 5 Rosenberg-Patterson major criteria met: (1) Asthma \u2705 (2) AF sensitization \u2014 SPT positive \u2705 (3) Total IgE >1000 \u2705 (4) AF-specific IgE elevated \u2705 (5) AF-specific IgG (precipitins) positive \u2705. Supportive: eosinophilia \u2705, pulmonary infiltrates \u2705, Aspergillus in sputum \u2705. Classification: ABPA-S (seropositive) \u2014 HRCT shows no central bronchiectasis \u2192 Stage I / pre-bronchiectasis."
        },
        "hrct": {
          "title": "HRCT Chest \u2014 Thin Section (1.25mm cuts)",
          "time": "Inpatient",
          "rows": [
            {
              "test": "Bronchiectasis",
              "value": "ABSENT \u2014 no bronchial dilation or cylindrical/varicose changes",
              "note": "\u26a0\ufe0f KEY FINDING: No central bronchiectasis = ABPA-S (seropositive, Stage I). Early diagnosis \u2014 treatment may prevent progression to ABPA-CB (central bronchiectasis stage)."
            },
            {
              "test": "Mucus plugging",
              "value": "Right upper lobe and bilateral perihilar bronchi \u2014 mucus impaction. No high-attenuation mucus (HAM) \u2014 HAM present in ~30% of ABPA cases.",
              "flag": "H"
            },
            {
              "test": "Infiltrates",
              "value": "Right upper lobe consolidation and left perihilar atelectasis \u2014 consistent with mucus impaction and lobar collapse.",
              "flag": "H"
            },
            {
              "test": "Tree-in-bud",
              "value": "Focal right upper lobe \u2014 small airways disease from mucus plugging."
            },
            {
              "test": "Finger-in-glove opacities",
              "value": "Not present on this scan \u2014 may appear with more severe mucus plugging."
            },
            {
              "test": "Air trapping",
              "value": "Diffuse bilateral air trapping on expiratory sequences \u2014 consistent with underlying asthma."
            }
          ],
          "note": "HRCT interpretation: Mucus plugging without central bronchiectasis = ABPA-S (Stage I). Early diagnosis is critical \u2014 treatment at this stage may prevent progression to irreversible central bronchiectasis (ABPA-CB, Stage II). The absence of high-attenuation mucus (HAM, calcium-density) does not exclude ABPA \u2014 HAM is specific but only ~30% sensitive."
        }
      },
      "assessment": "ABPA-S confirmed in 34F with atopic asthma. All diagnostic criteria met. HRCT reassuringly shows NO central bronchiectasis \u2014 Stage I disease. No CF history or CF mutation testing required (no CF risk factors). Galactomannan negative \u2014 invasive aspergillosis excluded. Treatment plan: prednisolone taper (Greenberger protocol) + itraconazole 200 mg BID \u00d7 16 weeks (steroid-sparing). Key monitoring: serial total IgE \u2014 target \u226525\u201335% reduction from baseline (1,840 \u2192 <1,380 IU/mL) to confirm response. Itraconazole level at week 2 (target trough >0.5 mg/L).",
      "plan": "ABPA TREATMENT PROTOCOL:\n1. Prednisolone taper (Greenberger protocol):\n   \u2014 Week 1\u20132: 0.5 mg/kg/day (42 mg) \u2014 completed\n   \u2014 Week 3\u20138: 0.5 mg/kg every other day\n   \u2014 Week 9\u201312: taper by 5\u201310 mg/2 weeks\n   \u2014 Goal: discontinue by week 12\u201316 if IgE responding\n2. Itraconazole 200 mg BID \u00d7 16 weeks:\n   \u2014 Take with food + cola (acid enhances absorption)\n   \u2014 Check itraconazole trough level at week 2 (target 0.5\u20132.0 mg/L)\n   \u2014 LFTs q4 weeks\n   \u2014 Drug interactions: avoid CYP3A4 substrates (statins \u2014 clarithromycin caution)\n3. Monitoring IgE: total IgE at 4, 8, 12 weeks\n   \u2014 Response: \u226525\u201335% fall from baseline (1,840 IU/mL)\n   \u2014 Doubling of baseline IgE during remission = new exacerbation threshold\n4. Spirometry at each visit\n5. HRCT at 6 months to confirm no bronchiectasis development\n6. Mold remediation: professional bathroom remediation. N95 during construction exposure.\n7. Biologic consideration: omalizumab has evidence in ABPA. IgE 1,840 IU/mL exceeds standard asthma dosing range (>700 IU/mL limit). Consider dupilumab if inadequate response to itraconazole + steroids.\n8. Patient education: ABPA is not an infection \u2014 it is a hypersensitivity to Aspergillus. Antibiotics do NOT treat ABPA. This is why prior 'pneumonia' courses failed."
    },
    "inpatient": {
      "cc": "3-month follow-up \u2014 itraconazole course complete, prednisolone fully tapered. Response assessment.",
      "dx": "ABPA \u2014 good treatment response. IgE declined 62% from baseline. No central bronchiectasis on follow-up HRCT. Asthma control improved.",
      "problems": [
        {
          "id": "p1",
          "description": "ABPA \u2014 remission. IgE monitoring ongoing.",
          "status": "Improving"
        },
        {
          "id": "p2",
          "description": "Asthma \u2014 significantly improved. ICS/LABA continued.",
          "status": "Improving"
        },
        {
          "id": "p3",
          "description": "Itraconazole-related elevated LFTs (mild) \u2014 resolved after dose hold \u00d7 2 weeks, then resumed",
          "status": "Resolved"
        },
        {
          "id": "p4",
          "description": "Bathroom mold remediated. Avoiding construction site route.",
          "status": "Resolved"
        }
      ],
      "medications": [
        {
          "id": "m1",
          "name": "Fluticasone/salmeterol 250/50 mcg",
          "dose": "1 puff BID (continuing \u2014 asthma control maintained)",
          "route": "Inhaled"
        },
        {
          "id": "m2",
          "name": "Albuterol PRN",
          "dose": "PRN (used 0\u20131\u00d7/week)",
          "route": "Inhaled"
        },
        {
          "id": "m3",
          "name": "Itraconazole",
          "dose": "COMPLETED 16-week course",
          "route": "Oral",
          "indication": "Course finished \u2014 off itraconazole"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "3-month follow-up",
            "bp": "118/74",
            "hr": "68",
            "rr": "13",
            "spo2": "99% RA",
            "pef": "94% predicted"
          }
        ]
      },
      "labs": {
        "response_monitoring": {
          "title": "3-Month Response Assessment",
          "rows": [
            {
              "test": "Total IgE",
              "value": "702",
              "unit": "IU/mL",
              "ref": "Baseline 1,840 IU/mL",
              "note": "62% reduction from baseline (1,840 \u2192 702). Target was \u226525\u201335% reduction. EXCELLENT response. IgE will not return to normal \u2014 residual elevation expected. New baseline for monitoring: 702 IU/mL. Future IgE >1,404 (doubling of 702) = exacerbation threshold."
            },
            {
              "test": "Blood eosinophils",
              "value": "280",
              "unit": "cells/\u00b5L",
              "ref": "Baseline: 2,412",
              "note": "88% reduction from baseline. Near-normal. Reflects resolution of eosinophilic airway inflammation."
            },
            {
              "test": "FEV\u2081",
              "value": "2.98 L (91% predicted)",
              "ref": "Baseline: 2.41 L (73%)",
              "note": "Significant improvement. +24% from baseline."
            },
            {
              "test": "FEV\u2081/FVC",
              "value": "0.79",
              "note": "Normal. Obstruction resolved."
            },
            {
              "test": "LFTs (post-itraconazole)",
              "value": "ALT 28, AST 22 \u2014 Normal",
              "note": "Normalized after brief itraconazole hold at week 8. Completed full course."
            },
            {
              "test": "HRCT Chest (6 months)",
              "value": "PENDING \u2014 scheduled next week",
              "note": "Will confirm no new central bronchiectasis development. Key long-term monitoring tool."
            }
          ],
          "note": "Key teaching: After treatment, the target is a \u226525\u201335% REDUCTION in IgE from the pre-treatment baseline \u2014 NOT normalization. In ABPA remission, total IgE remains elevated above population normal. The new post-treatment IgE becomes the patient's personal baseline. A doubling of THIS value triggers treatment for a new exacerbation."
        }
      },
      "assessment": "Excellent ABPA treatment response: 62% IgE reduction, 88% eosinophil reduction, FEV\u2081 73%\u219291%, PEF normalized. Off systemic corticosteroids. Itraconazole course complete. Mild transient LFT elevation resolved. Asthma control markedly improved \u2014 recurrent 'pneumonia' episodes now explained and preventable with ABPA monitoring and early treatment.",
      "plan": "LONG-TERM ABPA MANAGEMENT:\n1. Serial IgE monitoring: q3\u20136 months. New baseline = 702 IU/mL. Doubling (>1,400 IU/mL) = initiate treatment for new exacerbation.\n2. Symptom monitoring: brown mucus plugs, infiltrates on CXR, worsening asthma = ABPA exacerbation until proven otherwise\n3. HRCT at 6 months (scheduled) \u2014 confirm no bronchiectasis\n4. Annual spirometry\n5. Allergen avoidance: mold-damp environments, compost, soil, construction sites\n6. Consider omalizumab or dupilumab if frequent exacerbations (>2/year) despite monitoring \u2014 IgE 702 now within omalizumab range (was 1,840 before treatment)\n7. Future exacerbation treatment: prednisolone 0.5 mg/kg \u00d7 2 weeks, then taper. Add itraconazole.\n8. Return: 3 months with repeat IgE"
    }
  },
  "teachingPoints": {
    "keyLearning": [
      "ABPA occurs in asthma and CF \u2014 not in healthy individuals. Aspergillus fumigatus is the causative organism >95%",
      "Diagnostic criteria (Rosenberg-Patterson): asthma + AF sensitization (SPT/sIgE) + IgE >1000 IU/mL + AF-specific IgE elevated + AF-specific IgG (precipitins)",
      "Brown mucus plugs = ABPA until proven otherwise in an asthmatic",
      "HRCT: central bronchiectasis (proximal, spares peripheral) is pathognomonic. High-attenuation mucus (30% of cases). Finger-in-glove opacities.",
      "Monitor with serial IgE: target \u226525\u201335% reduction from baseline. Doubling of post-treatment baseline = exacerbation threshold.",
      "IgE >700 IU/mL is outside standard omalizumab dosing for asthma \u2014 use dupilumab if biologic needed",
      "Galactomannan is NEGATIVE in ABPA \u2014 positive only in invasive aspergillosis. ABPA is hypersensitivity, not invasion."
    ],
    "boardPearls": [
      "ABPA triad for ABAI: asthma (or CF) + AF sensitization + IgE >1000 IU/mL",
      "AF-specific IgG (precipitins) positive = distinguishes ABPA from simple AF sensitization (sensitization alone can cause IgE elevation without ABPA)",
      "ABPA-S vs ABPA-CB: S = seropositive only (no bronchiectasis). CB = central bronchiectasis present. CB is irreversible.",
      "Treatment: prednisolone (acute) + itraconazole (steroid-sparing, 16 weeks). Voriconazole is alternative if itraconazole not tolerated.",
      "IgE monitoring: does NOT normalize in remission. Residual elevation expected. New baseline = post-treatment IgE. Doubling = treat.",
      "HLA-DR2 and HLA-DR5 = genetic risk factors for ABPA (increased susceptibility to AF sensitization)",
      "High-attenuation mucus (HAM) on HRCT: calcium-density plugs = highly specific for ABPA (~95%) but only ~30% sensitive",
      "Itraconazole drug interactions: CYP3A4 inhibitor \u2014 avoid concurrent simvastatin, lovastatin. Reduces tacrolimus levels."
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
      "validates": [
        "Rosenberg-Patterson diagnostic criteria",
        "IgE >1000 threshold",
        "ABPA-S vs ABPA-CB staging",
        "Prednisolone Greenberger protocol",
        "Serial IgE monitoring \u2014 25\u201335% reduction target"
      ]
    },
    {
      "id": "StatPearls-ABPA",
      "title": "Allergic Bronchopulmonary Aspergillosis",
      "authors": "StatPearls Publishing",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK430909/",
      "openAccess": true,
      "validates": [
        "ABPA pathophysiology \u2014 Type 1 + Type 3 mechanism",
        "HLA associations",
        "Itraconazole 16-week protocol",
        "High-attenuation mucus on HRCT",
        "Finger-in-glove opacities"
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
        "ABPA as asthma complication",
        "Eosinophilic pulmonary infiltrates in asthma",
        "Recurrent pneumonia as ABPA clue"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Allergic Bronchopulmonary Aspergillosis (ABPA)",
    "caseId": "abpa-aspergillus"
  },
  "problems": [
    {
      "problem": "ABPA \u2014 recurrent infiltrates, elevated IgE, eosinophilia",
      "icd": "B44.1",
      "onset": "2019",
      "status": "Active",
      "notes": "Maria Santos, 34F \u2014 poorly controlled asthma since childhood, 3 pneumonias in 2 years. IgE 2400, eosinophils 14%. CT: bilateral upper lobe bronchiectasis with mucus plugging. Aspergillus-specific IgE positive."
    },
    {
      "problem": "Moderate-severe asthma \u2014 baseline FEV1 62%",
      "icd": "J45.40",
      "onset": "2015",
      "status": "Active",
      "notes": "Asthma worsening over 2 years correlates with ABPA progression."
    },
    {
      "problem": "Central bronchiectasis \u2014 bilateral upper lobes",
      "icd": "J47.9",
      "onset": "2020",
      "status": "Active",
      "notes": "High-attenuation mucus plugs on CT = pathognomonic for ABPA. Irreversible structural damage."
    }
  ],
  "medications": [
    {
      "name": "Prednisone 0.5mg/kg/day (40mg) x2 weeks then taper",
      "sig": "Induction with systemic corticosteroids suppresses immune-mediated inflammation. Taper over 3-6 months guided by IgE levels.",
      "prescriber": "Pulmonology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 induction"
    },
    {
      "name": "Itraconazole 200mg BID x4 months",
      "sig": "Antifungal reduces Aspergillus burden \u2192 reduces ongoing immune stimulation. Allows steroid dose reduction. Monitor LFTs.",
      "prescriber": "Pulmonology",
      "start": "2024",
      "refills": 1,
      "status": "Active \u2014 steroid-sparing"
    },
    {
      "name": "High-dose ICS + LABA \u2014 fluticasone/salmeterol",
      "sig": "Maintenance asthma therapy. Continue throughout treatment.",
      "prescriber": "Pulmonology",
      "start": "2019",
      "refills": 3,
      "status": "Active"
    }
  ],
  "labs": [
    {
      "date": "03/2024",
      "panel": "ABPA Diagnostic Panel",
      "results": [
        {
          "test": "Total serum IgE",
          "value": "2400",
          "unit": "IU/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "Aspergillus-specific IgE",
          "value": "Positive 4+ (>3.5 kU/L)",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Eosinophil count",
          "value": "1.4",
          "unit": "K/\u03bcL (14%)",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "Aspergillus skin test",
          "value": "Positive \u2014 immediate wheal/flare",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Precipitating Aspergillus antibodies",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "FEV1",
          "value": "62",
          "unit": "% predicted",
          "ref": ">80%",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/2024",
      "study": "HRCT Chest",
      "findings": "Bilateral upper lobe bronchiectasis, central distribution. High-attenuation mucus plugs in right upper lobe (pathognomonic for ABPA). No cavitation. No pleural effusion.",
      "impression": "Findings consistent with ABPA. Central bronchiectasis with mucus plugging."
    }
  ],
  "guided": {
    "ddxTargets": [
      "ABPA (correct)",
      "Simple asthma \u2014 cannot explain bronchiectasis, elevated IgE, positive Aspergillus sensitization",
      "Invasive aspergillosis \u2014 immunocompetent patient, not invasive; classic ABPA pattern",
      "CF \u2014 check sweat chloride; can coexist; ABPA is common complication of CF",
      "Eosinophilic granulomatosis with polyangiitis (EGPA) \u2014 ANCA pattern, systemic vasculitis; different",
      "Hypersensitivity pneumonitis \u2014 different antigen source, IgG not IgE mechanism"
    ],
    "coachPrompts": {
      "final": "Diagnosis: ABPA. Key learning: (1) ABPA diagnostic criteria (modified Rosenberg-Patterson): asthma + Aspergillus sensitization (skin test or IgE) + elevated total IgE (>1000 IU/mL) + eosinophilia + central bronchiectasis + pulmonary infiltrates. Not all required simultaneously. (2) Pathophysiology: Aspergillus colonizes airways \u2192 IgE-mediated (Type I) + immune complex (Type III) hypersensitivity \u2192 mucus plugging \u2192 bronchiectasis \u2192 fibrosis. (3) High-attenuation mucus plugs on CT are essentially pathognomonic \u2014 high-density mucus from eosinophilic plugging is unique to ABPA. (4) Treatment goal: suppress immune response with corticosteroids + reduce fungal burden with itraconazole. Serial IgE monitoring tracks treatment response \u2014 IgE should fall \u226535% within 6-8 weeks of treatment. (5) Staging: Stage I (acute), II (remission), III (recurrent exacerbation), IV (corticosteroid-dependent asthma), V (fibrotic lung disease). Treatment strategy differs by stage."
    }
  }
};
