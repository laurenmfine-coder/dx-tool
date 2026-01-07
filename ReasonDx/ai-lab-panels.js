/**
 * Allergy/Immunology Lab Prediction Data
 * Comprehensive lab panels, expected patterns, and interpretation guidance
 * 
 * EVIDENCE-BASED REFERENCES:
 * 
 * ANAPHYLAXIS:
 * - Shaker MS, et al. Anaphylaxis - A 2020 Practice Parameter Update. 
 *   J Allergy Clin Immunol. 2020;145(4):1082-1128. PMID: 32001253
 * - Golden DBK, et al. Anaphylaxis: A 2023 Practice Parameter Update. 
 *   J Allergy Clin Immunol. 2024;153(4):1000-1033. PMID: 38242747
 * - Cardona V, et al. WAO Anaphylaxis Guidance 2020. 
 *   World Allergy Organ J. 2020;13(10):100472. PMID: 33204386
 * 
 * DRUG ALLERGY:
 * - Khan DA, et al. Drug Allergy: A 2022 Practice Parameter Update. 
 *   J Allergy Clin Immunol. 2022;150(6):1333-1393. PMID: 36184304
 * - Trubiano JA, et al. PEN-FAST Decision Rule. 
 *   JAMA Intern Med. 2020;180(5):745-752. PMID: 32176247
 * 
 * URTICARIA/ANGIOEDEMA:
 * - Zuberbier T, et al. EAACI/GA2LEN/EuroGuiDerm Urticaria Guideline. 
 *   Allergy. 2022;77(3):734-766. PMID: 34536239
 * - Maurer M, et al. WAO/EAACI HAE Guideline 2021. 
 *   Allergy. 2022;77(7):1961-1990. PMID: 35006617
 * 
 * IMMUNODEFICIENCY:
 * - Bonilla FA, et al. Primary Immunodeficiency Practice Parameter. 
 *   J Allergy Clin Immunol. 2015;136(5):1186-1205. PMID: 26371839
 * 
 * EOSINOPHILIA:
 * - Klion AD. Eosinophilia: Diagnosis and Treatment. 
 *   Hematology Am Soc Hematol Educ Program. 2015;2015:92-97. PMID: 26637705
 * 
 * MAST CELL DISORDERS:
 * - Valent P, et al. Updated Mast Cell Disorder Classification. 
 *   J Allergy Clin Immunol. 2021;148(5):1107-1116. PMID: 34756878
 * 
 * ASTHMA:
 * - GINA Global Strategy for Asthma 2024. ginasthma.org
 * - GINA Severe Asthma Guide 2024. ginasthma.org/severe-asthma/
 */

const AI_LAB_PANELS = {

    // ============================================================================
    // ANAPHYLAXIS WORKUP LABS
    // ============================================================================
    
    anaphylaxis: {
        name: 'Anaphylaxis Workup',
        description: 'Labs for post-anaphylaxis evaluation and trigger identification',
        
        acuteLabs: {
            tryptase: {
                name: 'Serum Tryptase (Acute)',
                timing: 'Draw 1-2 hours after symptom onset (peaks 1-2hr, normalizes by 24hr)',
                normalRange: '< 11.4 ng/mL',
                interpretation: {
                    elevated: 'Supports anaphylaxis diagnosis. Compare to baseline.',
                    normal: 'Does not rule out anaphylaxis - sensitivity ~70%',
                    formula: 'Acute tryptase >1.2x baseline + 2 ng/mL suggests mast cell activation'
                },
                clinicalPearls: [
                    'Tryptase can be normal in food-induced anaphylaxis',
                    'Always get baseline 24+ hours later for comparison',
                    'Elevated baseline suggests clonal mast cell disorder'
                ]
            },
            histamine: {
                name: 'Plasma Histamine',
                timing: 'Draw within 15-60 minutes (very short half-life)',
                normalRange: '< 1 ng/mL',
                interpretation: {
                    elevated: 'Supports mast cell/basophil degranulation',
                    normal: 'Often missed due to rapid metabolism'
                },
                clinicalPearls: [
                    'Rarely useful clinically due to timing constraints',
                    'Requires special handling (ice, rapid processing)'
                ]
            }
        },
        
        baselineLabs: {
            tryptaseBaseline: {
                name: 'Baseline Tryptase',
                timing: '24+ hours after resolution of acute symptoms',
                normalRange: '< 11.4 ng/mL',
                interpretation: {
                    elevated_11_20: 'Mild elevation - consider repeat, rule out clonal disease',
                    elevated_20_plus: 'WHO minor criterion for mastocytosis - bone marrow indicated',
                    normal: 'Expected in typical anaphylaxis without mastocytosis'
                },
                clinicalPearls: [
                    'Baseline tryptase >20 = bone marrow biopsy',
                    'Mastocytosis patients need lifelong VIT if venom-allergic',
                    'Hereditary alpha-tryptasemia can cause mild elevations'
                ]
            },
            totalIgE: {
                name: 'Total IgE',
                normalRange: '< 100 kU/L (varies by age)',
                interpretation: {
                    elevated: 'Suggests atopic predisposition, parasites, or other conditions',
                    normal: 'Does not rule out specific IgE sensitization',
                    very_high: '>1000 kU/L - consider ABPA, parasites, hyper-IgE syndrome'
                }
            }
        },
        
        triggerIdentification: {
            specificIgE: {
                name: 'Allergen-Specific IgE',
                classes: {
                    0: '< 0.35 kU/A - Negative',
                    1: '0.35-0.70 - Low',
                    2: '0.71-3.50 - Moderate',
                    3: '3.51-17.50 - High',
                    4: '17.51-50.00 - Very High',
                    5: '50.01-100.00 - Very High',
                    6: '> 100.00 - Very High'
                },
                interpretation: 'Higher levels generally correlate with clinical reactivity but thresholds vary by allergen',
                clinicalPearls: [
                    'Sensitization ≠ clinical allergy',
                    'Component testing improves specificity',
                    'Negative sIgE with positive history → consider skin testing'
                ]
            },
            componentTesting: {
                name: 'Component-Resolved Diagnostics',
                examples: {
                    peanut: {
                        'Ara h 2': 'Storage protein - HIGH risk for systemic reactions',
                        'Ara h 1, 3': 'Storage proteins - moderate-high risk',
                        'Ara h 8': 'PR-10 protein - usually OAS only, low systemic risk',
                        'Ara h 9': 'LTP - can cause severe reactions (Mediterranean)'
                    },
                    treeNut: {
                        'Storage proteins': 'High risk for systemic reactions',
                        'PR-10': 'Cross-reactive with birch, usually OAS'
                    },
                    milk: {
                        'Casein': 'Heat-stable, higher risk',
                        'α-lactalbumin, β-lactoglobulin': 'Whey proteins, may tolerate baked'
                    },
                    egg: {
                        'Ovomucoid (Gal d 1)': 'Heat-stable, may not tolerate baked egg',
                        'Ovalbumin (Gal d 2)': 'Heat-labile, may tolerate baked egg'
                    }
                }
            }
        },
        
        predictions: [
            {
                scenario: '8yo with peanut anaphylaxis 2 weeks ago',
                question: 'What would you expect for baseline tryptase?',
                answer: 'Normal (< 11.4 ng/mL)',
                teaching: 'Baseline tryptase is normal in typical anaphylaxis. Only elevated during acute episode (peaks 1-2hr). [Shaker 2020, PMID: 32001253]',
                reference: 'Shaker MS, et al. J Allergy Clin Immunol. 2020;145(4):1082-1128.'
            },
            {
                scenario: 'Same patient - Ara h 2 = 28 kU/A, Ara h 8 = 0.8 kU/A',
                question: 'What does this component pattern predict?',
                answer: 'High risk for severe systemic reactions',
                teaching: 'Ara h 2 positivity = high risk storage protein sensitization. Ara h 8 alone would suggest just OAS. [Nicolaou 2010, PMID: 20109746]',
                reference: 'Nicolaou N, et al. J Allergy Clin Immunol. 2010;125(1):191-197.'
            }
        ]
    },

    // ============================================================================
    // ANGIOEDEMA WORKUP
    // ============================================================================
    
    angioedema: {
        name: 'Angioedema Workup',
        description: 'Differentiate histamine vs bradykinin-mediated angioedema',
        
        keyPrinciple: 'Angioedema WITHOUT urticaria = think bradykinin (ACE-I, HAE)',
        
        complementPanel: {
            c4: {
                name: 'C4',
                normalRange: '16-47 mg/dL',
                interpretation: {
                    low: 'Sensitive screen for HAE (>95% have low C4 even between attacks)',
                    normal: 'Argues against HAE, supports ACE-I or idiopathic'
                },
                clinicalPearls: [
                    'C4 is the best screening test for HAE',
                    'Low C4 + normal C3 = classic pattern for HAE',
                    'Always check when angioedema occurs WITHOUT urticaria'
                ]
            },
            c1Inhibitor: {
                name: 'C1-Inhibitor Level',
                normalRange: '21-39 mg/dL',
                interpretation: {
                    low: 'HAE Type 1 (85% of HAE)',
                    normal_with_low_function: 'HAE Type 2 (15% of HAE)',
                    normal: 'If C4 normal, HAE unlikely'
                }
            },
            c1InhibitorFunction: {
                name: 'C1-Inhibitor Functional Assay',
                normalRange: '> 67%',
                interpretation: {
                    low: 'HAE Type 2 (normal level, low function)',
                    normal: 'Rules out HAE Type 2'
                },
                clinicalPearls: [
                    'Always check function if HAE suspected but level normal',
                    'Type 2 HAE has normal/elevated level but low function',
                    'Acquired angioedema (AAE) has low C1q (HAE has normal C1q)'
                ]
            },
            c1q: {
                name: 'C1q',
                normalRange: '11-23 mg/dL',
                interpretation: {
                    low: 'Acquired angioedema (AAE) - associated with lymphoproliferative disorders',
                    normal: 'HAE (hereditary) - C1q is normal'
                }
            }
        },
        
        diagnosticAlgorithm: {
            step1: 'Is there urticaria WITH the angioedema?',
            ifYes: 'Likely histamine-mediated → check tryptase, IgE',
            ifNo: 'Likely bradykinin-mediated → complement workup',
            step2: 'Check C4 level',
            c4Low: 'Check C1-INH level and function → HAE Type 1 vs 2',
            c4Normal: 'On ACE-I? → ACE-I angioedema. Not on ACE-I? → Idiopathic'
        },
        
        aceInhibitorAngioedema: {
            labs: 'All complement studies NORMAL',
            mechanism: 'ACE degrades bradykinin. ACE inhibition → bradykinin accumulation',
            timing: 'Can occur after years of use (median onset ~1 year)',
            management: 'Discontinue ACE-I permanently. ARB cross-reactivity ~10%.'
        },
        
        predictions: [
            {
                scenario: '62yo man on lisinopril x 3 years with lip/tongue swelling, NO urticaria',
                question: 'What would you expect for C4?',
                answer: 'Normal',
                teaching: 'ACE-I angioedema has NORMAL complement. C4 is only low in HAE. [Zuraw 2008, PMID: 18768946]',
                reference: 'Zuraw BL, et al. N Engl J Med. 2008;359(10):1027-1036.'
            },
            {
                scenario: 'Young woman with recurrent angioedema, family history positive',
                question: 'If C4 is low and C1-INH level is low, diagnosis?',
                answer: 'HAE Type 1',
                teaching: 'Low C4 + Low C1-INH level = HAE Type 1 (85% of HAE cases). [Maurer 2022, PMID: 35006617]',
                reference: 'Maurer M, et al. Allergy. 2022;77(7):1961-1990.'
            }
        ]
    },

    // ============================================================================
    // IMMUNODEFICIENCY WORKUP
    // ============================================================================
    
    immunodeficiency: {
        name: 'Primary Immunodeficiency Workup',
        description: 'Evaluate recurrent infections for antibody or cellular deficiency',
        
        warningSignsForPID: [
            '≥4 ear infections in 1 year',
            '≥2 serious sinus infections in 1 year',
            '≥2 months on antibiotics with little effect',
            '≥2 pneumonias in 1 year',
            'Failure to gain weight or grow normally',
            'Recurrent deep skin or organ abscesses',
            'Persistent thrush or fungal infections',
            'Need for IV antibiotics',
            'Family history of immunodeficiency'
        ],
        
        screeningPanel: {
            immunoglobulins: {
                igg: {
                    name: 'IgG',
                    normalRange: '700-1600 mg/dL (adult)',
                    interpretation: {
                        low: '<500 = significant. CVID requires low IgG + low IgA and/or IgM',
                        very_low: '<200 = severe hypogammaglobulinemia'
                    }
                },
                iga: {
                    name: 'IgA',
                    normalRange: '70-400 mg/dL',
                    interpretation: {
                        undetectable: 'IgA deficiency (1:500 prevalence) - usually asymptomatic',
                        low: 'May indicate CVID if IgG also low'
                    }
                },
                igm: {
                    name: 'IgM',
                    normalRange: '40-230 mg/dL',
                    interpretation: {
                        low: 'Consider CVID, hyper-IgM syndrome if isolated elevation'
                    }
                }
            },
            cbc: {
                lymphocytes: 'Total lymphocyte count - low suggests T-cell defect',
                normalRange: '1000-4000 cells/μL (adult)'
            }
        },
        
        functionalAntibodies: {
            tetanusAb: {
                name: 'Tetanus Antibody',
                protective: '> 0.1 IU/mL',
                interpretation: 'Tests response to protein antigen'
            },
            pneumococcalAb: {
                name: 'Pneumococcal Antibodies',
                protective: '> 1.3 μg/mL per serotype',
                goal: '≥70% of serotypes protective',
                interpretation: 'Tests response to polysaccharide antigens',
                notes: 'Check pre and 4-6 weeks post-Pneumovax'
            },
            diphtheriaAb: {
                name: 'Diphtheria Antibody',
                protective: '> 0.1 IU/mL'
            }
        },
        
        lymphocyteSubsets: {
            cd4: { name: 'CD4+ T cells', range: '500-1500 cells/μL' },
            cd8: { name: 'CD8+ T cells', range: '150-1000 cells/μL' },
            cd19: { name: 'CD19+ B cells', range: '100-500 cells/μL' },
            cd56: { name: 'CD56+ NK cells', range: '50-400 cells/μL' }
        },
        
        cvidDiagnosticCriteria: [
            'Low IgG (usually <500) AND low IgA and/or IgM',
            'Poor response to protein AND polysaccharide vaccines',
            'Exclusion of secondary causes (medications, protein loss)',
            'Age >4 years (to exclude transient hypogammaglobulinemia)'
        ],
        
        predictions: [
            {
                scenario: '34yo woman with 4 pneumonias in 2 years',
                question: 'If IgG = 285 mg/dL and pneumococcal response poor, diagnosis?',
                answer: 'CVID (if IgA/IgM also low and secondary causes excluded)',
                teaching: 'CVID requires low IgG + impaired vaccine responses. Treatment is Ig replacement. [Bonilla 2015, PMID: 26371839]',
                reference: 'Bonilla FA, et al. J Allergy Clin Immunol. 2015;136(5):1186-1205.'
            },
            {
                scenario: 'Child with recurrent pyogenic infections, IgG/IgA normal, IgM low',
                question: 'What additional test is critical?',
                answer: 'Vaccine responses (functional antibodies)',
                teaching: 'Normal immunoglobulin levels can have deficient function. Must test vaccine responses. [Orange 2012, PMID: 22935057]',
                reference: 'Orange JS, et al. J Allergy Clin Immunol. 2012;130(3 Suppl):S1-24.'
            }
        ]
    },

    // ============================================================================
    // EOSINOPHILIA WORKUP
    // ============================================================================
    
    eosinophilia: {
        name: 'Eosinophilia Workup',
        description: 'Evaluate elevated eosinophils using NAACP differential',
        
        definitions: {
            mild: '500-1500 cells/μL',
            moderate: '1500-5000 cells/μL',
            severe: '>5000 cells/μL'
        },
        
        naacp_differential: {
            N: 'Neoplastic (HES, leukemia, lymphoma)',
            A: 'Allergic (asthma, atopic dermatitis, allergic rhinitis)',
            A2: 'Addison\'s disease (adrenal insufficiency)',
            C: 'Collagen vascular (EGPA, other vasculitis)',
            P: 'Parasitic (helminths, especially Strongyloides)'
        },
        
        initialWorkup: {
            cbc: 'Absolute eosinophil count (AEC)',
            peripheralSmear: 'Look for abnormal eosinophils, blasts',
            totalIgE: 'High suggests allergic/parasitic; normal suggests clonal',
            tryptase: 'Elevated suggests mast cell component',
            cmp: 'Organ function',
            esr_crp: 'Inflammation markers',
            stoolOP: 'Ova and parasites (3 samples)',
            strongyloidesAb: 'Serology more sensitive than stool for Strongyloides'
        },
        
        secondaryWorkup: {
            ifPersistent: [
                'B12 (elevated in myeloproliferative)',
                'LDH (elevated in clonal disease)',
                'ANCA (EGPA)',
                'Echocardiogram (eosinophilic myocarditis)',
                'Bone marrow with cytogenetics',
                'FIP1L1-PDGFRA fusion (hypereosinophilic syndrome)'
            ]
        },
        
        strongyloidesImportance: 'MUST rule out before immunosuppression - can cause hyperinfection syndrome',
        
        predictions: [
            {
                scenario: '45yo with eos 2800, recent travel to Central America, elevated IgE',
                question: 'What diagnosis is most important to rule out?',
                answer: 'Strongyloides',
                teaching: 'Strongyloides can persist for decades and cause fatal hyperinfection if steroids given. [Nutman 2017, PMID: 28411318; Klion 2015, PMID: 26637705]',
                reference: 'Nutman TB. Clin Microbiol Rev. 2017;30(1):255-273.'
            },
            {
                scenario: 'Patient with eos 8000, normal IgE, no parasites found',
                question: 'What should you consider?',
                answer: 'Clonal eosinophilia (HES, myeloid neoplasm)',
                teaching: 'Very high eos with normal IgE suggests clonal disease. Bone marrow indicated. [Gotlib 2017, PMID: 28028032]',
                reference: 'Gotlib J. Blood. 2017;129(6):680-691.'
            }
        ]
    },

    // ============================================================================
    // MAST CELL DISORDERS
    // ============================================================================
    
    mastCellDisorders: {
        name: 'Mast Cell Disorder Workup',
        description: 'Evaluate for mastocytosis and MCAS',
        
        indications: [
            'Severe/recurrent anaphylaxis (especially idiopathic or hymenoptera)',
            'Elevated baseline tryptase (>11.4, especially >20)',
            'Urticaria pigmentosa (skin lesions)',
            'Unexplained flushing, GI symptoms, bone pain'
        ],
        
        labs: {
            tryptase: {
                name: 'Baseline Tryptase',
                interpretation: {
                    normal: '< 11.4 ng/mL',
                    mildlyElevated: '11.4-20 ng/mL - repeat, consider HAT or early mastocytosis',
                    elevated: '>20 ng/mL - WHO minor criterion, bone marrow indicated'
                },
                clinicalPearls: [
                    'Baseline (not acute) tryptase is key',
                    '>20 is WHO minor criterion for SM',
                    'Hereditary alpha-tryptasemia (HAT) can cause mild elevation'
                ]
            },
            n_methylHistamine: {
                name: '24-hour Urine N-methylhistamine',
                interpretation: 'Elevated suggests increased mast cell burden'
            },
            prostaglandinD2: {
                name: '24-hour Urine Prostaglandin D2',
                interpretation: 'Elevated in systemic mastocytosis'
            }
        },
        
        boneMarrowFindings: {
            majorCriterion: 'Multifocal, dense infiltrates of mast cells (≥15 in aggregates)',
            minorCriteria: [
                '>25% spindle-shaped or atypical mast cells',
                'KIT D816V mutation',
                'CD25 and/or CD2 expression on mast cells',
                'Baseline tryptase >20 ng/mL'
            ],
            diagnosis: 'Major + 1 minor OR 3 minor criteria = Systemic Mastocytosis'
        },
        
        mcasVsMastocytosis: {
            mastocytosis: 'Clonal mast cells (meets WHO criteria)',
            mcas: 'Mast cell activation without clonal population - diagnosis of exclusion'
        },
        
        predictions: [
            {
                scenario: '58yo man with 2 severe yellow jacket anaphylaxis episodes, baseline tryptase 18.5',
                question: 'What is the next step?',
                answer: 'Bone marrow biopsy',
                teaching: 'Severe venom anaphylaxis + elevated baseline tryptase = high risk for mastocytosis. Affects VIT duration (lifelong if SM). [Valent 2021, PMID: 34756878; Bonadonna 2021, PMID: 33929376]',
                reference: 'Valent P, et al. J Allergy Clin Immunol. 2021;148(5):1107-1116.'
            }
        ]
    },

    // ============================================================================
    // ASTHMA BIOMARKERS
    // ============================================================================
    
    asthmaBiomarkers: {
        name: 'Asthma Phenotyping Labs',
        description: 'Biomarkers for phenotyping and biologic selection',
        
        t2_biomarkers: {
            bloodEosinophils: {
                name: 'Blood Eosinophils',
                thresholds: {
                    t2High: '≥150-300 cells/μL',
                    severeAsthma: '≥150 predicts response to anti-IL5, ≥300 for dupilumab'
                }
            },
            feno: {
                name: 'FeNO (Fractional Exhaled Nitric Oxide)',
                thresholds: {
                    low: '<25 ppb (adult)',
                    intermediate: '25-50 ppb',
                    high: '>50 ppb - supports T2 inflammation and steroid responsiveness'
                }
            },
            totalIgE: {
                name: 'Total IgE',
                useForOmalizumab: '30-1500 IU/mL for omalizumab dosing',
                interpretation: 'Higher IgE suggests allergic phenotype'
            },
            periostin: {
                name: 'Periostin',
                interpretation: 'Elevated suggests T2 inflammation (less commonly used)'
            }
        },
        
        phenotypes: {
            t2High: {
                markers: 'Eos ≥150, FeNO ≥25, elevated IgE, allergic sensitization',
                biologicOptions: 'Omalizumab, mepolizumab, benralizumab, dupilumab, tezepelumab'
            },
            t2Low: {
                markers: 'Normal eos, normal FeNO, normal IgE',
                biologicOptions: 'Tezepelumab (only approved for T2-low), bronchial thermoplasty'
            }
        },
        
        biologicSelection: {
            allergicAsthma: 'Omalizumab (anti-IgE)',
            eosinophilic: 'Mepolizumab/benralizumab (anti-IL5/IL5R)',
            t2_broad: 'Dupilumab (anti-IL4/IL13) - also helps nasal polyps, AD',
            anyPhenotype: 'Tezepelumab (anti-TSLP)'
        },
        
        predictions: [
            {
                scenario: 'Severe asthma patient: Eos 650, FeNO 55, IgE 320, has nasal polyps',
                question: 'What phenotype and what biologic is ideal?',
                answer: 'T2-high. Dupilumab - addresses asthma AND nasal polyps',
                teaching: 'Dupilumab (anti-IL4/IL13) is particularly useful when asthma + nasal polyps + eczema overlap. [GINA 2024; Holguin 2020, PMID: 31558662]',
                reference: 'GINA 2024. ginasthma.org; Holguin F, et al. Eur Respir J. 2020;55(1):1900588.'
            }
        ]
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AI_LAB_PANELS;
}
