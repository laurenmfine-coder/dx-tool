
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Marcus Webb",
      "patientHPI": "I've been having these episodes where I just can't catch my breath, and they're getting worse and happening more often - this is the fourth time this year. I used my breathing machine at home like always, but it's not helping like it used to, and I'm really scared because I feel like I'm suffocating.",
      "dob": "05/14/1983",
      "age": "41",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "RDX-2025-94891",
      "language": "English",
      "race": "Black or African American",
      "phone": "(513) 555-4803",
      "email": "marcus.webb@email.com",
      "address": "9858 Larkspur Ln, Chicago, IL 60623",
      "insurance": "Blue Cross Blue Shield PPO",
      "pcp": "Dr. Angela Torres, MD",
      "pharmacy": "Walgreens \u2014 Oakland Park Blvd",
      "emergencyContact": {
        "name": "Denise Webb",
        "phone": "(313) 555-6580",
        "relationship": "Wife"
      },
      "chiefComplaint": "Severe asthma exacerbation \u2014 4th in 12 months, not responding to home nebulizer",
      "diagnosis": "Severe eosinophilic asthma, Type 2 high \u2014 Step 5 refractory"
    },
    "allergies": [
      {
        "allergen": "Aspirin/NSAIDs",
        "reaction": "Bronchospasm + nasal congestion within 30 min",
        "severity": "Severe",
        "type": "Drug/NSAID-ERD"
      },
      {
        "allergen": "Sulfonamides",
        "reaction": "Maculopapular rash",
        "severity": "Moderate",
        "type": "Drug"
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025",
        "lot": "FLU-25A",
        "site": "Left deltoid"
      },
      {
        "name": "Pneumococcal PCV20",
        "date": "03/2024",
        "lot": "PCV-24",
        "site": "Right deltoid"
      },
      {
        "name": "COVID-19 (bivalent)",
        "date": "09/2025",
        "lot": "CV-25B",
        "site": "Right deltoid"
      }
    ],
    "familyHistory": [
      "Mother: asthma \u2014 on inhaled steroids",
      "Father: hypertension, type 2 diabetes",
      "Sister: atopic dermatitis, seasonal allergic rhinitis"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Never smoker"
      ],
      [
        "Alcohol",
        "Occasional \u2014 2\u20133 drinks/week"
      ],
      [
        "Occupation",
        "Middle school teacher"
      ],
      [
        "Exercise",
        "Minimal \u2014 limited by asthma symptoms"
      ],
      [
        "Housing",
        "Single-family home; has 2 indoor cats and a dog"
      ],
      [
        "HEPA filter",
        "No home air filtration"
      ],
      [
        "Humidity",
        "Central AC maintained 70\u00b0F"
      ],
      [
        "Inhaler technique",
        "MDI \u2014 observed errors: no spacer, inadequate breath-hold"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "cc": "Progressive dyspnea and wheezing for 36 hours despite q2h home albuterol nebulizations. Productive cough with yellow mucus. Chest tightness. Unable to complete sentences.",
      "dx": "Acute severe asthma exacerbation (NAEPP Severe \u2014 FEV\u2081 32% predicted on presentation)",
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe eosinophilic asthma \u2014 Step 4 (high-dose ICS/LABA + LAMA)",
          "status": "Active",
          "onset": "Chronic"
        },
        {
          "id": "prob-2",
          "description": "Chronic rhinosinusitis with nasal polyps (CRSwNP) \u2014 diagnosed 2 years ago",
          "status": "Active",
          "onset": "Chronic"
        },
        {
          "id": "prob-3",
          "description": "NSAID-exacerbated respiratory disease (AERD / Samter's triad)",
          "status": "Active",
          "onset": "Chronic"
        },
        {
          "id": "prob-4",
          "description": "Obstructive sleep apnea \u2014 on CPAP 10 cmH\u2082O",
          "status": "Active",
          "onset": "Chronic"
        },
        {
          "id": "prob-5",
          "description": "Seasonal allergic rhinitis \u2014 sensitized to dust mite, cat, dog, grass pollen",
          "status": "Active",
          "onset": "Chronic"
        },
        {
          "id": "prob-6",
          "description": "Asthma exacerbations \u00d7 4 in past 12 months (March, June, September, present)",
          "status": "Active",
          "onset": "Recent"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone/salmeterol (Advair) 500/50 mcg",
          "dose": "1 puff BID",
          "route": "Inhaled",
          "indication": "Severe asthma \u2014 high-dose ICS/LABA"
        },
        {
          "id": "med-2",
          "name": "Tiotropium (Spiriva Respimat) 2.5 mcg",
          "dose": "2 puffs daily",
          "route": "Inhaled",
          "indication": "Add-on LAMA \u2014 Step 4 controller"
        },
        {
          "id": "med-3",
          "name": "Montelukast 10 mg",
          "dose": "Daily at bedtime",
          "route": "Oral",
          "indication": "LTRA for asthma + CRSwNP + NSAID-ERD"
        },
        {
          "id": "med-4",
          "name": "Fluticasone nasal spray 50 mcg",
          "dose": "2 sprays each nostril daily",
          "route": "Intranasal",
          "indication": "CRSwNP / allergic rhinitis"
        },
        {
          "id": "med-5",
          "name": "Albuterol sulfate 2.5 mg/3 mL",
          "dose": "q2h PRN (currently)",
          "route": "Nebulization",
          "indication": "Rescue bronchodilator"
        },
        {
          "id": "med-6",
          "name": "Cetirizine 10 mg",
          "dose": "Daily",
          "route": "Oral",
          "indication": "Allergic rhinitis / urticaria PRN"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "Triage",
            "bp": "148/94",
            "hr": "118",
            "rr": "28",
            "temp": "37.8",
            "spo2": "88% RA",
            "wt": "94 kg",
            "pef": "32% predicted"
          },
          {
            "time": "30 min post-Rx",
            "bp": "138/88",
            "hr": "102",
            "rr": "22",
            "temp": "37.8",
            "spo2": "94% 2L NC",
            "pef": "48% predicted"
          },
          {
            "time": "90 min post-Rx",
            "bp": "132/84",
            "hr": "96",
            "rr": "18",
            "temp": "37.6",
            "spo2": "96% RA",
            "pef": "58% predicted"
          }
        ]
      },
      "labs": {
        "cbc": {
          "title": "CBC with Differential",
          "time": "ED presentation",
          "rows": [
            {
              "test": "WBC",
              "value": "11.8",
              "unit": "K/\u00b5L",
              "ref": "4.5\u201311.0",
              "flag": "H"
            },
            {
              "test": "Neutrophils",
              "value": "62",
              "unit": "%",
              "ref": "50\u201370"
            },
            {
              "test": "Eosinophils",
              "value": "12",
              "unit": "%",
              "flag": "H",
              "ref": "1\u20134"
            },
            {
              "test": "Absolute Eosinophil Count",
              "value": "1,416",
              "unit": "cells/\u00b5L",
              "flag": "H",
              "ref": "<500"
            },
            {
              "test": "Lymphocytes",
              "value": "21",
              "unit": "%"
            },
            {
              "test": "Hemoglobin",
              "value": "14.2",
              "unit": "g/dL",
              "ref": "13.5\u201317.5"
            },
            {
              "test": "Platelets",
              "value": "312",
              "unit": "K/\u00b5L"
            }
          ],
          "note": "\u26a0\ufe0f Eosinophil count suppressed by systemic corticosteroids \u2014 baseline count will be measured OFF steroids at follow-up visit. Eosinophil count of 1,416 cells/\u00b5L represents a SUPPRESSED value (on OCS). Baseline pre-treatment likely >1,500\u20132,000 cells/\u00b5L."
        },
        "cmp": {
          "title": "Basic Metabolic Panel",
          "time": "ED presentation",
          "rows": [
            {
              "test": "Na",
              "value": "139",
              "unit": "mEq/L",
              "ref": "136\u2013145"
            },
            {
              "test": "K",
              "value": "3.4",
              "unit": "mEq/L",
              "ref": "3.5\u20135.0",
              "flag": "L"
            },
            {
              "test": "CO\u2082",
              "value": "24",
              "unit": "mEq/L",
              "ref": "22\u201329"
            },
            {
              "test": "Glucose",
              "value": "142",
              "unit": "mg/dL",
              "ref": "70\u2013100",
              "flag": "H",
              "note": "Corticosteroid effect"
            },
            {
              "test": "Creatinine",
              "value": "0.94",
              "unit": "mg/dL"
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL"
            }
          ]
        },
        "abg": {
          "title": "Arterial Blood Gas (on presentation)",
          "rows": [
            {
              "test": "pH",
              "value": "7.44",
              "unit": "",
              "ref": "7.35\u20137.45",
              "note": "High-normal \u2014 consistent with early respiratory alkalosis from hyperventilation"
            },
            {
              "test": "PaCO\u2082",
              "value": "36",
              "unit": "mmHg",
              "ref": "35\u201345",
              "note": "\u26a0\ufe0f 'Normal' PaCO\u2082 in setting of severe tachypnea and wheeze \u2014 CONCERNING. Expected low if patient compensating; normal suggests early fatigue."
            },
            {
              "test": "PaO\u2082",
              "value": "68",
              "unit": "mmHg",
              "ref": "80\u2013100",
              "flag": "L"
            },
            {
              "test": "HCO\u2083",
              "value": "24",
              "unit": "mEq/L"
            },
            {
              "test": "SpO\u2082 (co-oximetry)",
              "value": "93",
              "unit": "%"
            }
          ],
          "note": "Interpretation: Mild hypoxemia with 'normal' PaCO\u2082 in severe acute asthma = early respiratory muscle fatigue warning. A truly compensating patient would have PaCO\u2082 28\u201332. Normal PaCO\u2082 here signals impending respiratory failure."
        }
      },
      "imaging": [
        {
          "type": "Chest X-Ray (AP)",
          "time": "ED presentation",
          "findings": "Bilateral hyperinflation with flattening of hemidiaphragms. Increased AP diameter. No pneumothorax. No lobar consolidation. Mild peribronchial cuffing (airway wall thickening). Prominent mucus plugging right lower lobe bronchi.",
          "impression": "Severe acute asthma exacerbation with air trapping. No pneumonia or pneumothorax."
        }
      ],
      "assessment": "41-year-old male with known severe eosinophilic asthma, CRSwNP, and AERD presenting with 4th severe exacerbation in 12 months. FEV\u2081/PEF 32% on presentation = NAEPP Severe. Concerning for 'normal' PaCO\u2082 in context of severe work of breathing \u2014 close monitoring for respiratory fatigue. Currently on Step 4 (high-dose ICS/LABA + LAMA + LTRA) \u2014 inadequately controlled despite maximal non-biologic therapy.",
      "plan": "1. SABA: albuterol continuous nebulization \u00d7 1h, then q20min \u00d7 2\n2. Anticholinergic: ipratropium 0.5 mg q20min \u00d7 3 doses\n3. Systemic corticosteroids: methylprednisolone 125 mg IV now, then 60 mg IV q6h\n4. IV magnesium sulfate 2g over 20 min (FEV\u2081 <40%)\n5. Supplemental O\u2082: titrate to SpO\u2082 \u226594%\n6. Continuous pulse oximetry and repeat ABG in 60\u201390 min\n7. Serial PEF measurements q1h\n8. Admit to step-down unit for monitoring\n9. Plan: Allergy/Immunology consultation for biologic evaluation prior to discharge\n10. Note: Eosinophil count suppressed by steroids \u2014 request off-steroid labs at follow-up"
    },
    "office": {
      "cc": "Allergy/Immunology consultation for severe asthma biologic evaluation \u2014 3 weeks post-hospitalization, now off systemic corticosteroids \u00d7 2 weeks",
      "dx": "Severe eosinophilic asthma, Type 2 high \u2014 AERD + CRSwNP. GINA Step 5. Dupilumab initiated.",
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe eosinophilic asthma \u2014 GINA Step 5 candidate",
          "status": "Active"
        },
        {
          "id": "prob-2",
          "description": "CRSwNP \u2014 bilateral polyposis on prior CT sinus",
          "status": "Active"
        },
        {
          "id": "prob-3",
          "description": "NSAID-exacerbated respiratory disease (AERD)",
          "status": "Active"
        },
        {
          "id": "prob-4",
          "description": "Aspirin/NSAID avoidance \u2014 labels reviewed with patient",
          "status": "Active"
        },
        {
          "id": "prob-5",
          "description": "Cat/dog/dust mite sensitization \u2014 indoor allergens in home",
          "status": "Active"
        },
        {
          "id": "prob-6",
          "description": "OSA \u2014 CPAP adherence confirmed (90-day compliance 78%)",
          "status": "Active"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Budesonide/formoterol (Symbicort) 320/9 mcg",
          "dose": "2 puffs BID + 1 puff PRN (SMART therapy)",
          "route": "Inhaled",
          "indication": "Step 5 \u2014 high-dose ICS/LABA, GINA-preferred SMART regimen"
        },
        {
          "id": "med-2",
          "name": "Tiotropium (Spiriva) 2.5 mcg",
          "dose": "2 puffs daily",
          "route": "Inhaled",
          "indication": "LAMA add-on"
        },
        {
          "id": "med-3",
          "name": "Fluticasone nasal 50 mcg",
          "dose": "2 sprays each nostril daily",
          "route": "Intranasal",
          "indication": "CRSwNP"
        },
        {
          "id": "med-4",
          "name": "Saline nasal irrigation (NeilMed)",
          "dose": "BID",
          "route": "Intranasal",
          "indication": "CRSwNP maintenance"
        },
        {
          "id": "med-5",
          "name": "Cetirizine 10 mg",
          "dose": "Daily",
          "route": "Oral"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "Office visit",
            "bp": "128/80",
            "hr": "76",
            "rr": "16",
            "temp": "36.9",
            "spo2": "97% RA",
            "wt": "94 kg",
            "pef": "64% predicted"
          }
        ]
      },
      "labs": {
        "biomarkers": {
          "title": "Asthma Biomarker Panel (off systemic steroids \u00d7 2 weeks)",
          "time": "Allergy/Immunology visit",
          "rows": [
            {
              "test": "Blood Eosinophil Count",
              "value": "780",
              "unit": "cells/\u00b5L",
              "flag": "H",
              "ref": "<500",
              "note": "Type 2 HIGH \u2014 well above dupilumab threshold (\u2265150) and anti-IL-5 threshold (\u2265300)"
            },
            {
              "test": "FeNO (fractional exhaled NO)",
              "value": "62",
              "unit": "ppb",
              "flag": "H",
              "ref": "<25 ppb normal",
              "note": "High FeNO (>50 ppb) = IL-13-driven eosinophilic inflammation. Dupilumab threshold \u226525 ppb met. Predicts strong ICS and biologic response."
            },
            {
              "test": "Total IgE",
              "value": "412",
              "unit": "IU/mL",
              "ref": "0\u2013100",
              "flag": "H",
              "note": "Elevated, consistent with atopic asthma. Within omalizumab dosing range (30\u2013700 IU/mL) but AERD + CRSwNP comorbidity favors dupilumab."
            },
            {
              "test": "Aspergillus-specific IgE (f1)",
              "value": "0.12",
              "unit": "kUA/L",
              "ref": "<0.35",
              "note": "Negative \u2014 ABPA ruled out"
            },
            {
              "test": "Aspergillus-specific IgG (precipitins)",
              "value": "Negative",
              "unit": "",
              "note": "ABPA excluded"
            },
            {
              "test": "ANA",
              "value": "Negative",
              "unit": "",
              "note": "Rheumatologic cause of eosinophilia excluded"
            },
            {
              "test": "Serum tryptase (baseline)",
              "value": "4.2",
              "unit": "ng/mL",
              "ref": "<11.4",
              "note": "Normal \u2014 systemic mastocytosis excluded"
            }
          ],
          "note": "Biomarker profile: Blood eos 780 + FeNO 62 + IgE 412 = clear Type 2 HIGH endotype. Both anti-IL-5 and anti-IL-4R\u03b1 pathways are activated."
        },
        "spirometry": {
          "title": "Spirometry (post-hospitalization, off OCS)",
          "time": "Allergy/Immunology office visit",
          "rows": [
            {
              "test": "FVC",
              "value": "3.82 L (78% predicted)",
              "ref": "\u226580% = normal",
              "flag": "L"
            },
            {
              "test": "FEV\u2081",
              "value": "2.31 L (63% predicted)",
              "ref": "\u226580% = normal",
              "flag": "L"
            },
            {
              "test": "FEV\u2081/FVC",
              "value": "0.60",
              "ref": "\u22650.70",
              "flag": "L"
            },
            {
              "test": "Post-BD FEV\u2081",
              "value": "2.68 L (73% predicted)",
              "note": "+16% / +370 mL \u2192 POSITIVE reversibility (\u226512% AND \u2265200 mL)"
            },
            {
              "test": "Post-BD FEV\u2081/FVC",
              "value": "0.66",
              "note": "Persistent mild obstruction despite reversibility \u2014 remodeling component"
            },
            {
              "test": "DLCO",
              "value": "84% predicted",
              "note": "Preserved \u2014 no emphysema. Consistent with asthma, not COPD."
            }
          ],
          "note": "Interpretation: Moderate obstructive pattern (FEV\u2081 63%) with significant reversibility (+370 mL post-BD). Preserved DLCO confirms asthma over COPD. GINA Step 5 confirmed."
        },
        "allergy_panel": {
          "title": "Specific IgE Panel (ImmunoCAP)",
          "time": "Allergy/Immunology office visit",
          "rows": [
            {
              "test": "Dermatophagoides pteronyssinus (d1 \u2014 dust mite)",
              "value": "18.4",
              "unit": "kUA/L",
              "flag": "H",
              "ref": "<0.35",
              "note": "Class 5 \u2014 very high sensitization"
            },
            {
              "test": "Cat dander (e1)",
              "value": "6.8",
              "unit": "kUA/L",
              "flag": "H",
              "ref": "<0.35",
              "note": "Class 4 \u2014 high sensitization (2 indoor cats)"
            },
            {
              "test": "Dog dander (e5)",
              "value": "3.2",
              "unit": "kUA/L",
              "flag": "H",
              "ref": "<0.35",
              "note": "Class 3 \u2014 moderate sensitization"
            },
            {
              "test": "Grass mix (g6)",
              "value": "4.1",
              "unit": "kUA/L",
              "flag": "H",
              "ref": "<0.35",
              "note": "Class 4 \u2014 high sensitization"
            },
            {
              "test": "Aspergillus fumigatus (m3)",
              "value": "0.12",
              "unit": "kUA/L",
              "ref": "<0.35",
              "note": "Negative \u2014 ABPA excluded"
            },
            {
              "test": "Alternaria alternata (m6)",
              "value": "2.8",
              "unit": "kUA/L",
              "flag": "H",
              "ref": "<0.35",
              "note": "Class 3 \u2014 mold sensitization, exacerbation trigger"
            }
          ]
        }
      },
      "imaging": [
        {
          "type": "CT Sinus (without contrast) \u2014 8 months prior",
          "findings": "Bilateral nasal polyposis with polyps extending into nasal cavities bilaterally. Near-complete opacification of bilateral ethmoid sinuses and partial opacification of maxillary sinuses. No bony erosion. Osteomeatal complexes bilaterally obstructed.",
          "impression": "Moderate-severe CRSwNP. ENT consultation previously recommended."
        }
      ],
      "assessment": "41M with GINA Step 5 severe asthma confirmed: (1) adequate adherence confirmed via pharmacy records + observed inhaler technique corrected (MDI + spacer now prescribed); (2) comorbidities systematically addressed: OSA (CPAP compliant), CRSwNP (on INCS + saline), GERD ruled out (no symptoms, PPI not needed), VCD screened negative (no inspiratory stridor, flow-volume loop normal); (3) Type 2 biomarkers: eos 780, FeNO 62, IgE 412 \u2014 clear T2-HIGH; (4) AERD + CRSwNP comorbidity = dupilumab preferred over anti-IL-5 agents (dupilumab treats asthma + nasal polyps simultaneously; anti-IL-5 not approved for AERD); (5) Total IgE 412 within omalizumab range, but cat/dog in home + AERD + CRSwNP favors dupilumab. Omalizumab would not address polyp burden.",
      "plan": "BIOLOGIC INITIATION \u2014 Dupilumab (Dupixent) selected:\n\u2022 Rationale: (1) blood eos \u2265150 \u2713, FeNO \u226525 ppb \u2713 \u2014 approved thresholds met; (2) CRSwNP: dupilumab approved for CRSwNP (treats both asthma AND polyps); (3) AERD: dupilumab reduces leukotriene production, nasal eosinophilia, and polyp burden \u2014 first-line biologic in AERD; (4) OCS-sparing benefit in VENTURE trial\n\u2022 Dose: 400 mg SC (loading \u2014 2 \u00d7 200 mg injections) then 200 mg SC q2 weeks\n\u2022 Administration: office-administered first injection, then self-inject\n\u2022 Monitoring: blood eos, FeNO, spirometry at 3 months; asthma control test (ACT) at each visit\n\u2022 Allergen avoidance counseling: HEPA filter for bedroom + living room (dust mite/cat/dog); cat not removed (patient declined) but kept out of bedroom\n\u2022 ENT referral placed for FESS evaluation (CRSwNP)\n\u2022 Patient education: NSAID avoidance (all COX-1 inhibitors). Safe analgesic: acetaminophen. If procedure required: aspirin desensitization protocol post-FESS.\n\u2022 Insurance PA submitted: documented Step 5 failure, \u22652 exacerbations, blood eos \u2265300, FeNO \u226525\n\u2022 Return: 3 months for response assessment"
    },
    "inpatient": {
      "cc": "6-month follow-up \u2014 dupilumab response assessment",
      "dx": "Severe eosinophilic asthma \u2014 significantly improved on dupilumab 200 mg q2w. CRSwNP: partial response, ENT proceeding with FESS.",
      "problems": [
        {
          "id": "prob-1",
          "description": "Severe asthma \u2014 significant improvement. Zero exacerbations since dupilumab initiation.",
          "status": "Improving"
        },
        {
          "id": "prob-2",
          "description": "CRSwNP \u2014 partial response to dupilumab. FESS scheduled next month.",
          "status": "Active"
        },
        {
          "id": "prob-3",
          "description": "AERD \u2014 NSAID avoidance maintained. Aspirin desensitization planned post-FESS.",
          "status": "Active"
        },
        {
          "id": "prob-4",
          "description": "Injection site reactions (dupilumab) \u2014 mild erythema at injection sites, self-limiting. Resolved.",
          "status": "Resolved"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Dupilumab (Dupixent) 200 mg/1.14 mL",
          "dose": "200 mg SC q2 weeks (self-administered)",
          "route": "Subcutaneous",
          "indication": "Severe asthma + CRSwNP \u2014 biologic maintenance"
        },
        {
          "id": "med-2",
          "name": "Budesonide/formoterol 160/4.5 mcg (STEPPED DOWN)",
          "dose": "2 puffs BID (step-down from 320/9)",
          "route": "Inhaled",
          "indication": "ICS/LABA \u2014 dose reduced given biologic response"
        },
        {
          "id": "med-3",
          "name": "Tiotropium 2.5 mcg",
          "dose": "2 puffs daily (continuing)",
          "route": "Inhaled"
        },
        {
          "id": "med-4",
          "name": "Fluticasone nasal 50 mcg",
          "dose": "2 sprays each nostril daily (continuing)",
          "route": "Intranasal"
        }
      ],
      "vitals": {
        "rows": [
          {
            "time": "6-month follow-up",
            "bp": "124/78",
            "hr": "70",
            "rr": "14",
            "temp": "36.8",
            "spo2": "98% RA",
            "pef": "82% predicted"
          }
        ]
      },
      "labs": {
        "response_biomarkers": {
          "title": "6-Month Biomarker Response Assessment",
          "time": "Follow-up visit",
          "rows": [
            {
              "test": "Blood Eosinophil Count",
              "value": "180",
              "unit": "cells/\u00b5L",
              "ref": "Baseline: 780",
              "note": "77% reduction from baseline (780 \u2192 180). Expected: dupilumab reduces eosinophils ~40\u201350% by blocking IL-4/IL-13 recruitment signals. Note: anti-IL-5 would reduce further (to ~0\u201350 cells/\u00b5L)."
            },
            {
              "test": "FeNO",
              "value": "18",
              "unit": "ppb",
              "ref": "Baseline: 62 ppb",
              "note": "71% reduction (62 \u2192 18 ppb). IL-13-driven iNOS now blocked \u2192 less NO production. Normal range (<25 ppb) now achieved."
            },
            {
              "test": "Total IgE",
              "value": "890",
              "unit": "IU/mL",
              "ref": "Baseline: 412 IU/mL",
              "note": "\u26a0\ufe0f Paradoxical IgE RISE on dupilumab \u2014 expected and explained: dupilumab blocks IL-4-mediated class-switch of IgE back to IgG/IgM, so IgE accumulates in serum. This is NOT a treatment failure \u2014 it is a pharmacodynamic effect of blocking IL-4 recycling."
            },
            {
              "test": "FEV\u2081 (post-BD)",
              "value": "3.12 L (85% predicted)",
              "ref": "Baseline: 2.68 L (73%)",
              "note": "+16% improvement from baseline. FEV\u2081/FVC 0.71 \u2014 normalized."
            },
            {
              "test": "ACT score",
              "value": "21 / 25",
              "ref": "Baseline: 11/25",
              "note": "Improved from poorly controlled (\u226415) to well-controlled (\u226520). Patient reports: zero rescue inhaler use in past 4 weeks."
            }
          ],
          "note": "Key teaching: IgE rises on dupilumab \u2014 do NOT interpret as treatment failure. This is expected pharmacology. Use ACT, FEV\u2081, exacerbation rate, and FeNO (not IgE) to monitor dupilumab response."
        }
      },
      "assessment": "Excellent 6-month response to dupilumab: zero exacerbations (baseline: 4/year), FEV\u2081 improved from 63% to 85% predicted, ACT improved from 11 to 21, FeNO normalized. Paradoxical IgE rise (412 \u2192 890 IU/mL) noted \u2014 explained as expected dupilumab pharmacodynamics. ICS dose step-down completed safely. CRSwNP: partial improvement in nasal symptoms, polyp burden on endoscopy reduced but persistent \u2014 proceeding with FESS followed by aspirin desensitization for AERD.",
      "plan": "1. Continue dupilumab 200 mg SC q2w \u2014 excellent response\n2. ICS step-down maintained (budesonide/formoterol 160/4.5 BID)\n3. FESS next month with ENT \u2014 post-operative aspirin desensitization protocol for AERD\n4. Monitor: ACT, FEV\u2081, blood eos, FeNO at 12-month visit\n5. Do NOT use IgE level to monitor dupilumab response\n6. Patient education: continue NSAID avoidance until aspirin desensitization completed post-FESS\n7. Return: 12 months (or sooner PRN)"
    }
  },
  "teachingPoints": {
    "keyLearning": [
      "Type 2 HIGH biomarker profile (eos \u2265300 + FeNO \u226550 + elevated IgE) drives biologic selection",
      "AERD + CRSwNP comorbidity: dupilumab treats ALL three (asthma + CRSwNP + reduces leukotriene production) \u2014 superior to anti-IL-5 alone",
      "Paradoxical IgE rise on dupilumab is expected pharmacodynamics \u2014 NOT treatment failure",
      "Eosinophil count suppressed by systemic corticosteroids \u2014 always measure off OCS for accurate baseline",
      "GINA 2024: Step 5 evaluation must confirm adherence + technique + comorbidities before biologic initiation",
      "Biologic response assessed by: ACT score, exacerbation rate, FEV\u2081, FeNO \u2014 not IgE",
      "Aspirin desensitization for AERD: typically performed post-FESS (after polyp burden reduced)"
    ],
    "boardPearls": [
      "Dupilumab threshold: blood eos \u2265150 OR FeNO \u226525. OCS-dependent: any eos count.",
      "Dupilumab is only biologic approved for asthma + CRSwNP + atopic dermatitis + EoE \u2014 broadest comorbidity coverage",
      "Anti-IL-5 (mepolizumab/benralizumab): eos \u2265300 threshold, NOT approved for CRSwNP in AERD context",
      "Tezepelumab: no threshold \u2014 best for non-Type 2. Less preferred when clear Type 2 biomarkers present.",
      "AERD mechanism: COX-1 inhibition \u2192 block prostaglandin E\u2082 \u2192 remove brake on mast cell leukotriene synthesis \u2192 LTC\u2084/LTD\u2084 surge \u2192 bronchospasm + nasal congestion",
      "Urinary LTE\u2084 elevated in AERD \u2014 diagnostic biomarker if challenge not done",
      "IgE rises on dupilumab: IL-4 blockade prevents class switching back from IgE \u2192 IgE accumulates. Do not use IgE to monitor dupilumab.",
      "Normal PaCO\u2082 in severe acute asthma = WARNING sign (patient should be hypocapnic from hyperventilation; normal PaCO\u2082 means fatigue)"
    ]
  },
  "references": [
    {
      "id": "GINA-2024",
      "title": "Global Initiative for Asthma: Global Strategy for Asthma Management and Prevention",
      "authors": "GINA Board of Directors",
      "journal": "GINA Report",
      "year": 2024,
      "url": "https://ginasthma.org/gina-reports/",
      "openAccess": true,
      "validates": [
        "GINA Step 5 criteria and biologic evaluation framework",
        "SABA-free as-needed ICS-formoterol strategy",
        "Comorbidity assessment before biologic initiation",
        "Biologic selection by biomarker profile"
      ]
    },
    {
      "id": "StatPearls-Asthma",
      "title": "Asthma",
      "authors": "Fanta CH, Woolcock AJ.",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK430901/",
      "openAccess": true,
      "validates": [
        "Asthma pathophysiology and Type 2 inflammation",
        "Spirometry interpretation: reversibility criteria (\u226512% AND \u2265200 mL)",
        "Acute severe asthma management: SABA + ipratropium + IV Mg + systemic steroids",
        "DLCO preservation in asthma vs COPD"
      ]
    },
    {
      "id": "Agache-biologics-2021",
      "title": "Efficacy and safety of treatment with biologicals for severe chronic rhinosinusitis with nasal polyps: A systematic review for EAACI guidelines",
      "authors": "Agache I, Rocha C, Beltran J, et al.",
      "journal": "Allergy",
      "year": 2021,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8359391/",
      "openAccess": true,
      "validates": [
        "Dupilumab efficacy for CRSwNP in asthma patients",
        "Anti-IL-4R\u03b1 mechanism reducing nasal polyp burden",
        "Biologic choice in AERD + CRSwNP comorbidity"
      ]
    },
    {
      "id": "StatPearls-OccAsthma",
      "title": "Occupational Asthma",
      "authors": "Gautrin D, Ghezzo H.",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK541076/",
      "openAccess": true,
      "validates": [
        "NSAID-exacerbated respiratory disease (AERD) mechanism",
        "Aspirin desensitization protocol",
        "Urinary LTE\u2084 as diagnostic biomarker"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Severe Persistent Asthma \u2014 Eosinophilic Phenotype, Biologic Therapy (Dupilumab) Candidate",
    "caseId": "severe-asthma-biologics"
  },
  "problems": [
    {
      "problem": "Severe persistent asthma \u2014 uncontrolled on high-dose ICS/LABA",
      "icd": "J45.51",
      "onset": "2018",
      "status": "Active",
      "notes": "2 hospitalizations + 4 ED visits past year. FEV1 62% predicted on maximal inhaled therapy."
    },
    {
      "problem": "Eosinophilic asthma phenotype \u2014 biologic candidate",
      "icd": "J45.51",
      "onset": "2024",
      "status": "Active",
      "notes": "Blood eosinophils 480 cells/\u03bcL + FeNO 52 ppb = type 2 inflammatory phenotype"
    },
    {
      "problem": "Oral corticosteroid dependence \u2014 cumulative toxicity",
      "icd": "M81.8",
      "onset": "2024",
      "status": "Active",
      "notes": "4 prednisone courses this year = osteoporosis, hyperglycemia, adrenal suppression risk"
    }
  ],
  "medications": [
    {
      "name": "Fluticasone-Salmeterol 500/50mcg inhaled BID",
      "sig": "2 puffs twice daily \u2014 high-dose ICS/LABA",
      "prescriber": "Pulmonology",
      "start": "2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Tiotropium 18mcg inhaled daily \u2014 add-on LAMA",
      "sig": "1 capsule inhaled daily via HandiHaler",
      "prescriber": "Pulmonology",
      "start": "2023",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Dupilumab 300mg SQ q2 weeks \u2014 biologic PENDING approval",
      "sig": "Subcutaneous injection every 2 weeks \u2014 IL-4/IL-13 receptor antagonist",
      "prescriber": "Pulmonology/Allergy",
      "start": "11/2024",
      "refills": 0,
      "status": "Prior auth pending"
    },
    {
      "name": "Prednisone 40mg PO daily x5 days (exacerbation burst)",
      "sig": "Take daily for 5 days \u2014 current exacerbation",
      "prescriber": "Pulmonology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 current burst"
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Asthma Phenotyping",
      "results": [
        {
          "test": "Blood eosinophils",
          "value": "480",
          "unit": "cells/\u03bcL",
          "ref": "<150 normal",
          "flag": "H"
        },
        {
          "test": "Total IgE",
          "value": "420",
          "unit": "IU/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "FeNO (exhaled nitric oxide)",
          "value": "52",
          "unit": "ppb",
          "ref": "<25 normal",
          "flag": "H"
        },
        {
          "test": "FEV1 (% predicted)",
          "value": "62",
          "unit": "%",
          "ref": ">80%",
          "flag": "L"
        },
        {
          "test": "FEV1/FVC ratio",
          "value": "0.68",
          "unit": "",
          "ref": ">0.70",
          "flag": "L"
        },
        {
          "test": "Periostin",
          "value": "Elevated",
          "unit": "ng/mL",
          "ref": "<23",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "High-Resolution CT Chest",
      "indication": "Severe asthma \u2014 rule out structural disease, ABPA",
      "findings": "Mild mucus plugging bilateral lower lobes. No bronchiectasis. No consolidation. Air trapping on expiratory phase. No mediastinal adenopathy. No fungal infiltrates.",
      "impression": "CT consistent with severe asthma. No structural bronchiectasis. No ABPA features. Air trapping consistent with severe obstructive disease."
    }
  ],
  "guided": {
    "ddxTargets": [
      "Severe eosinophilic asthma \u2014 biologic candidate (correct)",
      "ABPA \u2014 IgE elevated but no bronchiectasis or fungal hyphae on CT",
      "Vocal cord dysfunction \u2014 spirometry flow-volume loop would show",
      "COPD \u2014 age and non-smoker history inconsistent",
      "Eosinophilic granulomatosis with polyangiitis (EGPA) \u2014 systemic vasculitis features absent",
      "Cardiac asthma \u2014 BNP normal, no effusion"
    ],
    "coachPrompts": {
      "final": "Diagnosis: severe eosinophilic asthma \u2014 biologic-eligible. Key learning: (1) Severe asthma definition: requires high-dose ICS + second controller AND remains uncontrolled, OR requires OCS to maintain control. This patient meets criteria (high-dose ICS/LABA/LAMA + 2 hospitalizations + OCS bursts). (2) Phenotyping guides biologic selection: Type 2 (T2) high = eosinophils \u2265150 cells/\u03bcL + FeNO >25 ppb \u2192 anti-IL-5 (mepolizumab, benralizumab) or anti-IL-4/IL-13 (dupilumab). Type 2 low/negative \u2192 thermoplasty or tezepelumab (TSLP inhibitor, works in both T2 high and low). (3) Biologic comparison for eosinophilic asthma: mepolizumab/benralizumab = anti-IL-5 (eosinophil clearance). Dupilumab = anti-IL-4R\u03b1 (blocks IL-4 + IL-13 signaling) \u2014 preferred if atopic dermatitis or eosinophilic esophagitis coexist. (4) Biologic efficacy: 50-60% reduction in exacerbations. May achieve OCS-free remission in some patients. Effect takes 3-6 months to fully develop. (5) OCS burden: 4 courses/year = significant cumulative toxicity. Biologic initiation is partially justified by OCS-sparing effect. Document OCS exposure formally (cumulative dose per year) \u2014 this supports prior authorization."
    }
  }
};
