/**
 * ============================================================================
 * REASONDX LEG SWELLING / DVT CLINICAL TEMPLATES - VERSION 2
 * ============================================================================
 * Version: 2.0 | December 2024
 * 
 * ENHANCED with UpToDate Evidence Integration:
 * - DVT diagnosis and evaluation (UpToDate 2025)
 * - Edema evaluation approach (UpToDate 2025)
 * - Heart failure clinical manifestations (UpToDate 2025)
 * 
 * Chief Complaint: Leg Swelling / Leg Pain / Lower Extremity Edema
 * 
 * Covers:
 * - Deep Vein Thrombosis (DVT) - URGENT
 * - Chronic Venous Insufficiency
 * - Heart Failure (CHF/HFrEF/HFpEF)
 * - Nephrotic Syndrome
 * - Lymphedema
 * - Cellulitis
 * - Baker's Cyst (ruptured)
 * - Medication-Induced Edema
 * - Pulmonary Hypertension
 * - Drug-Induced Edema
 * ============================================================================
 */

const LegSwellingTemplatesV2 = {
    chiefComplaint: "Leg Swelling",
    version: "2.0",
    lastUpdated: "December 2024",
    
    // ========================================================================
    // EPIDEMIOLOGY (UpToDate Evidence)
    // ========================================================================
    epidemiology: {
        vte: {
            incidence: "~1 per 1000 annually in adults",
            dvtProportion: "Two-thirds of VTE episodes manifest as DVT",
            genderPredominance: "Slight male preponderance",
            source: "UpToDate - Clinical presentation and diagnosis of DVT"
        },
        suspectedDVT: {
            actualDVTRate: "More than 75% of patients with suspected DVT have ANOTHER cause",
            alternativeEtiologies: {
                muscleTear: "40%",
                paralyzedLimb: "9%",
                lymphangitis: "7%",
                venousInsufficiency: "7%",
                bakersCyst: "5%",
                cellulitis: "3%",
                kneeAbnormality: "2%",
                unknown: "26%"
            }
        },
        heartFailure: {
            note: "Most common cause of chronic bilateral edema along with chronic venous disease",
            underdiagnosis: "Pulmonary hypertension (often from sleep apnea) is commonly missed"
        }
    },

    // ========================================================================
    // KEY DIFFERENTIATING FEATURES (UpToDate Enhanced)
    // ========================================================================
    keyDifferentiators: {
        unilateralVsBilateral: {
            acuteUnilateral: {
                consider: ["DVT (first!)", "Cellulitis", "Baker's cyst rupture", "Muscle tear", "May-Thurner syndrome"],
                approach: "FIRST determine DVT probability using Wells score, then test accordingly"
            },
            chronicUnilateral: {
                consider: ["Chronic venous disease (most common)", "Lymphedema", "Pelvic mass", "Complex regional pain syndrome"],
                clue: "Skin changes (pigmentation, ulceration) suggest venous disease"
            },
            acuteBilateral: {
                consider: ["Medication effect (esp CCBs)", "Acute HF", "Acute nephrotic syndrome", "Bilateral DVT (rare, often malignancy)"],
                approach: "Review meds first, then assess for HF, proteinuria, DVT"
            },
            chronicBilateral: {
                mostCommon: "Chronic venous disease",
                frequentlyMissed: ["Pulmonary hypertension", "Heart failure"],
                overdiagnosed: "Chronic venous disease (often assumed without confirming)",
                keyStudy: "In one study, 33% had HF and 42% had pulmonary HTN - initially missed"
            }
        },
        pittingVsNonPitting: {
            pitting: {
                mechanism: "Excess interstitial water moves in response to pressure",
                technique: "Apply firm pressure for at least 5 seconds",
                causes: ["DVT", "CHF", "Nephrotic", "Venous insufficiency", "Medication-induced", "Cirrhosis"]
            },
            nonPitting: {
                causes: ["Lymphedema (moderate-severe)", "Myxedema (thyroid disease)"],
                note: "Early/mild lymphedema CAN be pitting",
                myxedema: "Accumulation of glycosaminoglycans in dermis - localized, associated with Graves or severe hypothyroidism"
            }
        },
        painfulVsPainless: {
            painful: ["DVT", "Cellulitis", "Baker's cyst rupture", "Muscle tear", "Necrotizing fasciitis"],
            painless: ["CHF", "Nephrotic syndrome", "Lymphedema", "Chronic venous insufficiency", "Medication-induced"]
        }
    },

    // ========================================================================
    // DVT - COMPREHENSIVE EVALUATION (UpToDate)
    // ========================================================================
    dvt: {
        clinicalFeatures: {
            symptoms: {
                swelling: { sensitivity: "97%", specificity: "33%" },
                pain: { sensitivity: "86%", specificity: "19%" },
                warmth: { sensitivity: "72%", specificity: "48%" }
            },
            exam: {
                mostUseful: "Difference in calf circumference",
                homansSign: "UNRELIABLE - do not rely on this",
                classicFindings: [
                    "Unilateral edema/swelling with calf or thigh circumference difference",
                    "Unilateral warmth, tenderness, erythema",
                    "Tenderness along course of involved veins (tender cords)",
                    "Dilated superficial veins",
                    "Signs of malignancy (inguinal mass)"
                ]
            },
            proximalVsDistal: {
                distal: "Symptoms confined to calf",
                proximal: "Calf or whole-leg symptoms",
                iliac: "Massive upper leg swelling + buttock pain → consider phlegmasia"
            }
        },

        wellsScore: {
            name: "Wells Score for DVT (calculator available)",
            components: [
                { criterion: "Active cancer (treatment within 6mo or palliative)", points: 1 },
                { criterion: "Paralysis/paresis/recent cast immobilization of leg", points: 1 },
                { criterion: "Recently bedridden >3 days OR major surgery <12 weeks", points: 1 },
                { criterion: "Localized tenderness along deep venous system", points: 1 },
                { criterion: "Entire leg swollen", points: 1 },
                { criterion: "Calf swelling >3cm vs asymptomatic leg (10cm below tibial tuberosity)", points: 1 },
                { criterion: "Pitting edema (greater in symptomatic leg)", points: 1 },
                { criterion: "Collateral superficial veins (non-varicose)", points: 1 },
                { criterion: "Previously documented DVT", points: 1 },
                { criterion: "Alternative diagnosis at least as likely as DVT", points: -2 }
            ],
            interpretation: {
                low: { score: "≤0", prevalence: "3%", approach: "D-dimer → if negative, DVT excluded" },
                moderate: { score: "1-2", prevalence: "17%", approach: "D-dimer → if negative, DVT excluded (with high-sensitivity assay)" },
                high: { score: "≥3", prevalence: "50-75%", approach: "Proceed directly to CUS - D-dimer cannot reliably exclude" }
            },
            modifiedWells: {
                unlikely: { score: "≤1", approach: "D-dimer → if negative, DVT excluded" },
                likely: { score: "≥2", approach: "Proceed to imaging" }
            },
            limitations: [
                "May perform differently in elderly (higher DVT rate even with low score in one study)",
                "May perform differently with prior DVT",
                "May perform differently with comorbidities"
            ]
        },

        dDimer: {
            cutoff: "Typically <500 ng/mL is negative",
            interpretation: {
                negativeResult: "With low/moderate PTP, EXCLUDES DVT - no further testing needed",
                positiveResult: "NOT diagnostic - indicates need for imaging (CUS)"
            },
            ageAdjusted: {
                description: "Age (years) × 10 ng/mL for patients >50 years",
                example: "70-year-old: cutoff = 700 ng/mL",
                benefit: "Improves specificity in elderly (specificity 44% vs 24% for >80yo using age-adjusted)",
                evidence: "Meta-analysis of 13 studies, 12,497 patients"
            },
            ptpAdjusted: {
                description: "Alternative approach being validated",
                lowPTP: "D-dimer <1000 ng/mL excludes DVT",
                moderatePTP: "D-dimer <500 ng/mL excludes DVT",
                benefit: "May reduce need for imaging by 8-21%"
            },
            whenNotToOrder: {
                description: "D-dimer expected to be positive due to another condition",
                conditions: [
                    "Recent surgery",
                    "Trauma",
                    "Pregnancy",
                    "Cancer",
                    "Sepsis/infection",
                    "Liver disease",
                    "Advanced age",
                    "Hospitalized patients (often elevated)"
                ],
                alternative: "Proceed directly to CUS"
            },
            assayTypes: {
                highSensitivity: {
                    examples: ["ELISA (96%)", "Microplate ELISA (94%)", "Immunoturbidimetric (93%)"],
                    use: "Can reliably exclude DVT in low AND moderate PTP"
                },
                moderateSensitivity: {
                    examples: ["Whole blood D-dimer", "Latex semiquantitative"],
                    sensitivity: "83-85%",
                    use: "Only reliable for excluding DVT in LOW PTP, not moderate"
                }
            }
        },

        compressionUltrasound: {
            technique: {
                proximalCUS: "Evaluates common femoral, femoral, popliteal veins",
                wholeleg: "Also evaluates calf veins (peroneal, posterior/anterior tibial, muscular)",
                duration: "Proximal: 5-10 min; Whole-leg: 15-20 min"
            },
            interpretation: {
                positive: "Non-compressibility of vein with probe pressure = DIAGNOSTIC",
                negative: "Full compressibility of all imaged veins",
                nonDiagnostic: "Uncertainty about DVT presence (more common in inpatients, <5% outpatients)"
            },
            performance: {
                proximalDVT: "Sensitivity and specificity >95%",
                calfVeins: "Less sensitive (harder to compress)",
                iliacVeins: "Less sensitive (harder to assess)"
            },
            ifNegativeProximalCUS: {
                lowPTP: "DVT excluded, no further testing",
                moderatePTP: "Options: whole-leg CUS, OR repeat proximal CUS at 7 days",
                highPTP: "Further testing: whole-leg CUS, serial CUS at 3 and 7 days, OR alternative imaging"
            },
            wholeVsProximal: {
                wholeLegAdvantage: "Detects distal DVT, may reduce need for serial testing",
                wholeLegDisadvantage: "More operator-dependent, may identify DVT that doesn't need treatment",
                proximalAdvantage: "Identifies clinically actionable DVT, technically easier",
                proximalDisadvantage: "May miss distal DVT (which sometimes extends)"
            },
            freeFloatingThrombus: "No strict criteria - treat same as adherent thrombus"
        },

        serialTesting: {
            indication: "Negative proximal CUS but moderate/high suspicion for DVT",
            schedule: "Repeat at 7 days (some protocols: 3 and 7 days)",
            rationale: "2% of patients with negative initial CUS have proximal DVT at 7 days",
            alternative: "Whole-leg CUS instead of serial testing",
            dDimerAfterNegativeCUS: "Negative D-dimer after negative CUS removes need for serial testing"
        },

        alternativeImaging: {
            indication: "CUS nondiagnostic or inconclusive + high suspicion",
            options: {
                ctVenography: {
                    use: "If CUS unhelpful, particularly for iliac vein thrombosis",
                    caution: "Contrast exposure, radiation"
                },
                mrVenography: {
                    use: "Alternative to CTV, particularly for recurrent ipsilateral DVT",
                    mrdti: "MR Direct Thrombus Imaging - can distinguish old vs new clot"
                },
                iliacDoppler: {
                    indication: "Suspected iliac vein thrombosis (massive upper leg swelling, buttock pain)"
                }
            }
        },

        recurrentDVT: {
            contralateral: "Same workup as first DVT",
            ipsilateral: {
                challenge: "Residual thrombus persists in 25-50% at 1 year, 80% at 3 months",
                approach: "Compare to prior CUS if available",
                newThrombus: [
                    "New non-compressibility of previously normal segment",
                    "Increase in residual venous diameter (RVD) ≥4mm",
                    "Substantial thrombus extension (>10cm)"
                ],
                noNewThrombus: "All segments compressible OR RVD increase <2mm",
                uncertain: "RVD increase 2-4mm OR extension <10cm → serial CUS or alternative imaging",
                mrdti: "Useful when no prior CUS - can distinguish old from new thrombus"
            }
        },

        riskFactors: {
            provoked: {
                major: ["Recent surgery", "Hospitalization", "Immobilization", "Trauma"],
                minor: ["Travel >4h", "Oral contraceptives", "HRT", "Pregnancy/postpartum"]
            },
            unprovoked: "No identifiable risk factor - consider thrombophilia workup, occult malignancy",
            specific: [
                { factor: "Prior DVT/PE", strength: "Strongest risk factor" },
                { factor: "Cancer", strength: "Major - hypercoagulable state" },
                { factor: "Immobility", strength: "Major" },
                { factor: "Recent surgery", strength: "Major" },
                { factor: "Thrombophilia", strength: "Variable" },
                { factor: "Obesity", strength: "Moderate" },
                { factor: "Age >60", strength: "Moderate" }
            ]
        },

        adverseOutcomes: [
            "Pulmonary embolism (can be fatal or cause chronic pulmonary HTN)",
            "Post-thrombotic syndrome (chronic venous insufficiency)",
            "Paradoxical embolization/stroke (if PFO present)"
        ],

        empiricAnticoagulation: {
            indication: "High PTP + waiting for diagnostic testing + low bleeding risk",
            alternative: "Emergency referral if concerns about safety/feasibility",
            note: "Testing should not be delayed while empirically treating"
        }
    },

    // ========================================================================
    // HEART FAILURE EVALUATION (UpToDate)
    // ========================================================================
    heartFailure: {
        definition: "Heart cannot pump blood commensurate with body's needs, or can only do so at cost of high filling pressures",
        
        classification: {
            byEF: {
                HFrEF: { ef: "≤40%", name: "Heart failure with reduced EF" },
                HFmrEF: { ef: "41-49%", name: "Heart failure with mid-range EF" },
                HFpEF: { ef: "≥50%", name: "Heart failure with preserved EF" }
            },
            byNYHA: {
                I: "No limitation - ordinary activity doesn't cause symptoms",
                II: "Slight limitation - comfortable at rest, ordinary activity causes symptoms",
                III: "Marked limitation - comfortable at rest, less than ordinary activity causes symptoms",
                IV: "Unable to carry on any activity without symptoms, symptoms at rest"
            },
            byStage: {
                A: "At risk, no structural disease or symptoms",
                B: "Structural disease, no symptoms",
                C: "Structural disease with current or prior symptoms",
                D: "Refractory requiring advanced therapies"
            }
        },

        symptoms: {
            fluidAccumulation: [
                "Dyspnea (sensitivity 89%, specificity 51%)",
                "Orthopnea (specificity 89%, sensitivity 44%)",
                "Edema",
                "Hepatic congestion pain",
                "Abdominal distension from ascites"
            ],
            reducedOutput: ["Fatigue", "Weakness", "Exercise intolerance"],
            presentations: {
                acute: {
                    symptoms: ["Shortness of breath at rest/exertion", "Orthopnea", "PND", "RUQ discomfort (hepatic congestion)"],
                    timeframe: "Days to weeks"
                },
                chronic: {
                    symptoms: ["Fatigue more prominent than dyspnea", "Anorexia", "Abdominal distension", "Peripheral edema"],
                    note: "Dyspnea may be subtle/exertional as pulmonary capacitance adapts",
                    timeframe: "Months"
                }
            }
        },

        physicalExam: {
            volumeOverload: {
                pulmonaryCongestion: {
                    rales: "More prominent in acute HF; may be ABSENT in chronic HF due to adaptation",
                    pleural: "Chronic elevated pulmonary venous pressure can cause effusions"
                },
                rightSided: [
                    "Peripheral edema (legs when upright, sacrum when supine)",
                    "Elevated JVP",
                    "Hepatomegaly",
                    "Ascites",
                    "Hepatojugular reflux (sustained >3cm JVP elevation with RUQ compression)"
                ],
                jvp: {
                    technique: "Patient at 45°, observe internal jugular vein pulsations",
                    significance: "Usually elevated if peripheral edema is from HF"
                }
            },
            cardiac: {
                laterallyDisplacedApex: "Indicates LV enlargement - best single predictor of HFrEF in primary care",
                S3: {
                    significance: "Associated with LAP >20 mmHg, elevated LVEDP >15 mmHg",
                    performance: "Low sensitivity (11-40%) but HIGH specificity (90-99%)"
                },
                sustainedApicalImpulse: "LV dysfunction",
                parasternal: "RV hypertrophy/enlargement",
                murmurs: "May indicate valvular cause"
            },
            decreasedOutput: {
                signs: ["Resting sinus tachycardia", "Narrow pulse pressure (<25 mmHg)", "Cool extremities", "Diaphoresis"],
                pulsusAlternans: {
                    description: "Alternating strong and weak pulses",
                    significance: "Virtually PATHOGNOMONIC of severe LV systolic dysfunction"
                }
            }
        },

        initialTesting: {
            ecg: {
                role: "Most patients with HFrEF have significant ECG abnormality",
                normalECG: "Makes LV systolic dysfunction UNLIKELY (98% NPV)",
                hfpef: "May be normal in HFpEF, though AF or paced rhythm increases probability",
                findings: "May suggest etiology (Q waves = prior MI, low voltage = amyloid)"
            },
            labs: [
                { test: "Natriuretic peptide (BNP or NT-proBNP)", rationale: "Key diagnostic test" },
                { test: "Troponin", rationale: "If acute decompensated HF or ACS suspected" },
                { test: "CBC", rationale: "Anemia can exacerbate HF" },
                { test: "BMP", rationale: "Renal function, electrolytes (hyponatremia = severe HF)" },
                { test: "LFTs", rationale: "Hepatic congestion" },
                { test: "TSH", rationale: "Thyroid disease" },
                { test: "Fasting glucose", rationale: "Screen for diabetes" }
            ],
            cxr: {
                findings: ["Cardiomegaly (cardiac:thoracic ratio >50%)", "Cephalization", "Kerley B lines", "Pleural effusions"],
                limitation: "Patients with chronic HF may have CLEAR lung fields despite high filling pressures (due to adaptation)"
            }
        },

        natriureticPeptides: {
            bnp: {
                interpretation: {
                    normal: "<100 pg/mL → High NPV for excluding HF as cause of dyspnea",
                    elevated: ">400 pg/mL → Most dyspneic patients with HF",
                    intermediate: "100-400 pg/mL → Not sensitive or specific; consider PE, LVH, cor pulmonale"
                },
                atrialFibrillation: {
                    issue: "Higher levels in AF even without HF",
                    adjustment: "Use cutoff ≥200 pg/mL in AF (improves specificity from 40% to 73%)"
                }
            },
            ntProBnp: {
                ageAdjustedCutoffs: {
                    under50: "450 pg/mL",
                    age50to75: "900 pg/mL",
                    over75: "1800 pg/mL"
                },
                ruleOut: "<300 pg/mL excludes HF (98% NPV)",
                performance: "Sensitivity 93%, Specificity 65%"
            },
            limitations: [
                "BNP/NT-proBNP may be NORMAL in many patients with HFpEF",
                "Elevated in right HF, pulmonary hypertension, renal failure, sepsis",
                "Lower levels in obese patients",
                "NT-proBNP more elevated than BNP in renal failure",
                "Sacubitril-valsartan elevates BNP (inhibits degradation) but NOT NT-proBNP"
            ],
            clinicalUse: "Should NOT be used alone to diagnose or exclude HF - interpret with clinical context"
        },

        echocardiography: {
            role: "Does not establish/exclude diagnosis alone but identifies findings consistent with HF and causes",
            findings: [
                "LV/RV size (dilation suggests chronicity, cardiomyopathy)",
                "LVEF (reduced, mid-range, preserved)",
                "Diastolic function",
                "Regional wall motion abnormalities (coronary distribution suggests CAD)",
                "Valvular disease",
                "Pericardial disease",
                "Estimated filling pressures (E/e' >15 suggests PCWP >15)"
            ],
            hemodynamicAssessment: {
                fillingPressures: "E/e' ratio estimates PCWP",
                rvPressure: "Tricuspid regurgitation velocity estimates PA pressure",
                cardiacOutput: "Can estimate from LVOT pulsed-wave Doppler"
            }
        },

        diagnosticGoldStandard: {
            description: "Right heart catheterization with hemodynamic exercise test",
            criteria: "PCWP ≥15 mmHg at rest OR ≥25 mmHg during exercise",
            indication: "Selected patients with suspected HF and uncertain diagnosis after non-invasive evaluation",
            note: "Not required for most patients"
        }
    },

    // ========================================================================
    // CHRONIC BILATERAL EDEMA WORKUP (UpToDate Algorithm)
    // ========================================================================
    chronicBilateralEdemaWorkup: {
        step1: {
            action: "Initial history and exam - look for suggestive features",
            conditions: {
                heartFailure: ["Dyspnea", "Orthopnea", "PND", "Fatigue", "Elevated JVP", "S3", "Hepatomegaly", "Displaced apex"],
                pulmonaryHypertension: ["Symptoms may overlap with HF", "Often related to sleep apnea", "Commonly MISSED"],
                renalDisease: ["Proteinuria", "Elevated creatinine", "Other uremic symptoms"],
                liverDisease: ["Ascites", "Spider angiomata", "Jaundice", "Gynecomastia", "History of alcohol use"]
            }
        },
        step2: {
            ifNotSuggestive: "Order basic labs",
            labs: [
                "Urine dipstick for protein",
                "Serum creatinine",
                "Serum albumin",
                "PT/INR",
                "Liver function tests",
                "TSH"
            ]
        },
        step3: {
            ifLabsSuggestive: "Pursue renal, liver, or thyroid workup as indicated",
            ifLabsUnrevealing: "Order echocardiogram",
            echoAssesses: ["LV function (HFrEF vs HFpEF)", "Pulmonary hypertension", "Valvular disease"]
        },
        step4: {
            ifEchoUnrevealing: "Assess for chronic venous disease",
            cviFindings: ["Skin pigmentation changes", "Induration", "Ulceration", "Varicose veins"],
            ifCviLikely: "Presumptive diagnosis of chronic venous disease",
            ifCviUnlikely: "Image pelvis to exclude mass/outflow obstruction"
        },
        pelvicImaging: {
            ifOvarianConcern: "Transvaginal ultrasound",
            otherwise: "Contrast-enhanced CT pelvis"
        }
    },

    // ========================================================================
    // MEDICATION-INDUCED EDEMA
    // ========================================================================
    medicationInducedEdema: {
        commonCulprits: {
            calciumChannelBlockers: {
                class: "Dihydropyridine CCBs",
                examples: ["Amlodipine", "Nifedipine", "Felodipine"],
                mechanism: "Arteriolar vasodilation → increased capillary pressure",
                management: "Discontinue if possible; edema usually resolves"
            },
            other: [
                { drug: "NSAIDs", mechanism: "Sodium retention" },
                { drug: "Gabapentin/Pregabalin", mechanism: "Peripheral edema common side effect" },
                { drug: "Pioglitazone/TZDs", mechanism: "Fluid retention" },
                { drug: "Estrogen/HRT", mechanism: "Sodium retention" },
                { drug: "Corticosteroids", mechanism: "Sodium retention" },
                { drug: "Minoxidil", mechanism: "Vasodilation" }
            ]
        },
        approach: {
            ifSuspected: "Discontinue medication if possible",
            timeline: "Spontaneous resolution expected; if not, reconsider diagnosis"
        }
    },

    // ========================================================================
    // CELLULITIS VS DVT DIFFERENTIATION
    // ========================================================================
    cellulitisVsDVT: {
        cellulitis: {
            characteristics: [
                "Warmth and redness often SKIP areas (patchy)",
                "May have constitutional symptoms (fever)",
                "Often in patients with chronic leg swelling or lymphedema"
            ],
            caveat: "Fever can also be present in DVT"
        },
        dvt: {
            characteristics: [
                "Unilateral swelling with circumference difference",
                "Pain along course of deep veins",
                "Risk factors present"
            ]
        },
        overlap: "Both can coexist - DVT may complicate cellulitis"
    },

    // ========================================================================
    // BAKER'S CYST
    // ========================================================================
    bakersCyst: {
        mechanism: "Distention of bursa by fluid from knee joint OR posterior herniation of joint capsule",
        presentation: {
            symptomatic: "Usually when leaking or ruptured",
            distinguishingFromDVT: [
                "Posterior knee pain",
                "Knee stiffness",
                "Swelling/mass behind knee (especially with extension)",
                "Bruising around ankle"
            ]
        },
        complication: "Popliteal vein compression can cause secondary DVT",
        evaluation: "Knee/popliteal ultrasound if suspected"
    },

    // ========================================================================
    // LYMPHEDEMA
    // ========================================================================
    lymphedema: {
        causes: {
            primary: "Usually presents in childhood",
            secondary: {
                developed: "Axillary or inguinal lymph node dissection (breast cancer, melanoma), radiation",
                worldwide: "Filariasis (most common globally)"
            }
        },
        characteristics: {
            early: "May be pitting",
            late: "Becomes non-pitting due to cutaneous fibrosis and adipose deposition",
            hallmarks: [
                "Cutaneous and subcutaneous thickening",
                "Peau d'orange",
                "Positive Stemmer sign (inability to tent skin at base of digits)"
            ]
        },
        evaluation: {
            clinical: "Often sufficient for diagnosis",
            imaging: "Duplex US to rule out DVT; lymphoscintigraphy if uncertain"
        }
    },

    // ========================================================================
    // SPECIAL PRESENTATIONS
    // ========================================================================
    specialPresentations: {
        mayThurnerSyndrome: {
            epidemiology: "Young women (2nd-3rd decade)",
            presentation: "Acute pain and swelling of ENTIRE LEFT lower extremity, with or without DVT",
            mechanism: "Left common iliac vein compressed by right common iliac artery against L5 vertebra"
        },
        phlegmasia: {
            description: "Uncommon form of massive proximal DVT",
            presentation: "Limb-threatening - massive swelling, may have arterial compromise",
            urgency: "EMERGENCY - needs immediate vascular surgery consultation"
        },
        complexRegionalPain: {
            presentation: "Usually 4-6 weeks after limb trauma",
            features: ["Pain", "Edema", "Altered skin color", "Temperature changes"]
        }
    },

    // ========================================================================
    // DIAGNOSTIC ALGORITHMS
    // ========================================================================
    diagnosticAlgorithms: {
        acuteUnilateralEdema: {
            step1: "Calculate Wells score",
            step2: {
                lowModerate: "Check D-dimer",
                high: "Proceed directly to CUS"
            },
            step3: {
                dDimerNegative: "DVT excluded (if using high-sensitivity assay)",
                dDimerPositive: "Obtain CUS"
            },
            step4: {
                cusPositive: "DVT diagnosed - treat",
                cusNegative: {
                    lowPTP: "DVT excluded",
                    moderatePTP: "Consider whole-leg CUS or repeat in 7 days",
                    highPTP: "Serial CUS, whole-leg CUS, or alternative imaging"
                }
            },
            step5: "If DVT excluded, consider other causes (muscle tear 40%, venous insufficiency 7%, Baker's cyst 5%, cellulitis 3%)"
        },
        chronicUnilateralEdema: {
            step1: "Clinical assessment for venous disease, lymphedema, complex regional pain",
            step2: {
                ifSuggestive: "Diagnose based on clinical features",
                ifUnclear: "Duplex ultrasound with Doppler"
            },
            step3: {
                ifPelvicObstruction: "Image pelvis for mass (transvaginal US or CT)"
            }
        },
        acuteBilateralEdema: {
            step1: "Review medications (especially CCBs)",
            step2: "Assess for DVT if clinically likely",
            step3: "Evaluate for acute HF (dyspnea, orthopnea, elevated JVP)",
            step4: "Check urine protein for nephrotic syndrome"
        },
        chronicBilateralEdema: {
            step1: "History and exam for suggestive features",
            step2: "Labs: urine dipstick, creatinine, albumin, PT, LFTs, TSH",
            step3: "If unrevealing: echocardiogram",
            step4: "If echo unrevealing: assess for chronic venous disease",
            step5: "If CVI unlikely: pelvic imaging"
        }
    },

    // ========================================================================
    // WORKUP BY DIAGNOSIS
    // ========================================================================
    workupByDiagnosis: {
        dvt: {
            initial: [
                { test: "D-dimer", condition: "Low/moderate PTP only", interpretation: "<500 ng/mL excludes DVT" },
                { test: "Compression ultrasound", indication: "Positive D-dimer, high PTP, or D-dimer expected positive" }
            ],
            ifCUSNegativeHighSuspicion: ["Repeat CUS at 7 days", "Whole-leg CUS", "CT or MR venography", "Iliac Doppler"],
            forRecurrentIpsilateral: ["Compare to prior CUS", "MR direct thrombus imaging if no prior"]
        },
        heartFailure: {
            initial: [
                { test: "ECG", finding: "Abnormal in most HFrEF; normal has 98% NPV" },
                { test: "BNP or NT-proBNP", interpretation: "BNP <100 or NT-proBNP <300 helps exclude" },
                { test: "CXR", finding: "Cardiomegaly, cephalization, Kerley B lines, effusions" }
            ],
            confirmatory: [
                { test: "Echocardiogram", purpose: "Assess EF, diastolic function, valves, filling pressures" }
            ],
            ifUncertain: [
                { test: "Hemodynamic exercise test (RHC)", goldStandard: "PCWP ≥15 rest or ≥25 exercise = HF" }
            ]
        },
        chronicVenousInsufficiency: {
            initial: [
                { test: "Venous duplex ultrasound", purpose: "Assess reflux, rule out DVT" }
            ],
            ifUlcer: ["Wound culture if infected", "ABI to assess arterial component"]
        },
        nephroticSyndrome: {
            initial: [
                { test: "Urine dipstick", finding: "Proteinuria" },
                { test: "Urine protein:creatinine ratio", purpose: "Quantify proteinuria" },
                { test: "Serum albumin", finding: "Hypoalbuminemia" },
                { test: "Lipid panel", finding: "Hyperlipidemia typical" }
            ]
        },
        cellulitis: {
            initial: [
                { test: "Clinical diagnosis often sufficient", note: "No routine cultures needed for uncomplicated" },
                { test: "CUS", indication: "If DVT also suspected" }
            ],
            ifSevere: [
                { test: "Blood cultures", indication: "Systemic symptoms" },
                { test: "CT/MRI", indication: "Necrotizing fasciitis concern" }
            ]
        },
        lymphedema: {
            initial: [
                { test: "Clinical diagnosis usually sufficient", basis: "History and exam" },
                { test: "Duplex ultrasound", purpose: "Rule out DVT" }
            ],
            ifUnclear: ["Lymphoscintigraphy", "CT/MRI if malignancy concern"]
        }
    },

    // ========================================================================
    // RED FLAGS
    // ========================================================================
    redFlags: {
        dvt: {
            name: "Deep Vein Thrombosis",
            flags: [
                { flag: "Unilateral leg swelling", significance: "Classic DVT presentation" },
                { flag: "Calf pain/tenderness along deep veins", significance: "Tender cords" },
                { flag: "Recent immobility/surgery/hospitalization", significance: "Major risk factor" },
                { flag: "Cancer history", significance: "Hypercoagulable state" },
                { flag: "Prior DVT/PE", significance: "Strongest risk factor" },
                { flag: "Calf circumference >3cm difference", significance: "Wells criterion" }
            ],
            concern: "PE risk if untreated - can be fatal or cause chronic pulmonary HTN"
        },
        peSymptoms: {
            name: "Concurrent PE Symptoms",
            flags: [
                { flag: "Dyspnea", significance: "May indicate PE" },
                { flag: "Pleuritic chest pain", significance: "PE symptom" },
                { flag: "Hemoptysis", significance: "PE with infarction" },
                { flag: "Syncope", significance: "Massive PE - EMERGENCY" },
                { flag: "Tachycardia", significance: "PE sign" }
            ],
            urgency: "EMERGENCY if PE suspected"
        },
        necrotizingFasciitis: {
            name: "Necrotizing Fasciitis",
            flags: [
                { flag: "Pain out of proportion to exam", significance: "CLASSIC early sign" },
                { flag: "Rapid progression (hours not days)", significance: "Characteristic" },
                { flag: "Systemic toxicity", significance: "Sepsis" },
                { flag: "Crepitus", significance: "Gas-forming organisms" },
                { flag: "Skin necrosis/bullae", significance: "Late sign - don't wait for this" }
            ],
            urgency: "SURGICAL EMERGENCY - call surgery immediately"
        },
        phlegmasia: {
            name: "Phlegmasia Cerulea/Alba Dolens",
            flags: [
                { flag: "Massive proximal DVT", significance: "Near-total venous occlusion" },
                { flag: "Extreme swelling", significance: "Limb-threatening" },
                { flag: "Cyanosis or pallor", significance: "Arterial compromise possible" },
                { flag: "Absent pulses", significance: "Arterial insufficiency" }
            ],
            urgency: "VASCULAR EMERGENCY - immediate consultation"
        }
    },

    // ========================================================================
    // PATIENT RESPONSE TEMPLATES
    // ========================================================================
    patientResponses: {
        laterality: {
            unilateral: [
                "Just the {side} leg",
                "Only one leg is swollen",
                "The other leg is fine"
            ],
            bilateral: [
                "Both legs",
                "They're both swollen",
                "Both ankles and feet"
            ]
        },
        
        timing: {
            acute: [
                "Started a few days ago",
                "Just noticed it this week",
                "Came on over 2-3 days"
            ],
            chronic: [
                "I've had this for months",
                "It's been going on a long time",
                "Gradually getting worse over time"
            ]
        },
        
        dvtRiskFactors: {
            immobility: {
                positive: [
                    "I just had surgery {duration} ago",
                    "I was on a long flight/car ride",
                    "I've been on bed rest",
                    "I was hospitalized recently"
                ],
                negative: [
                    "No recent immobility",
                    "I've been active as usual",
                    "No surgery or travel"
                ]
            },
            cancer: {
                positive: [
                    "I'm being treated for {type} cancer",
                    "I have a history of cancer",
                    "Yes, I have cancer"
                ],
                negative: [
                    "No cancer",
                    "No history of cancer",
                    "Never had cancer"
                ]
            },
            priorClots: {
                positive: [
                    "I've had blood clots before",
                    "I had a DVT {duration} ago",
                    "Yes, I have a clotting history"
                ],
                negative: [
                    "No blood clots before",
                    "This is the first time",
                    "No prior clots"
                ]
            },
            hormones: {
                positive: [
                    "I'm on birth control",
                    "I take estrogen/HRT",
                    "I'm pregnant"
                ],
                negative: [
                    "No hormones",
                    "Not on birth control",
                    "No estrogen"
                ]
            }
        },
        
        heartFailureSymptoms: {
            orthopnea: {
                positive: [
                    "I have to sleep on 3-4 pillows",
                    "Can't lie flat - I get short of breath",
                    "I sleep in my recliner"
                ],
                negative: [
                    "No, I can lie flat fine",
                    "I sleep with one pillow",
                    "No trouble lying down"
                ]
            },
            pnd: {
                positive: [
                    "I wake up at night gasping for air",
                    "Have to sit up suddenly at night",
                    "Wake up short of breath"
                ],
                negative: [
                    "No, I sleep through the night",
                    "Don't wake up breathless",
                    "No nighttime breathing problems"
                ]
            },
            doe: {
                positive: [
                    "I get winded walking to the mailbox",
                    "Can't climb stairs without stopping",
                    "Short of breath with minimal activity"
                ],
                negative: [
                    "I can walk fine",
                    "No shortness of breath with activity",
                    "Exercise tolerance is good"
                ]
            },
            fatigue: {
                positive: [
                    "I'm exhausted all the time",
                    "Can barely get through the day",
                    "No energy for anything"
                ],
                negative: [
                    "Energy is fine",
                    "Not particularly tired",
                    "Normal energy level"
                ]
            }
        },
        
        urineChanges: {
            foamy: [
                "My urine has been really foamy",
                "Lots of bubbles when I urinate",
                "It looks like there's soap in the toilet"
            ],
            normal: [
                "My urine looks normal",
                "No changes in my urine",
                "Nothing unusual"
            ]
        },
        
        skinChanges: {
            cellulitis: [
                "It's red, hot, and spreading",
                "The redness has gotten bigger since yesterday",
                "Very red and warm to touch"
            ],
            venous: [
                "The skin on my legs is brownish",
                "I have varicose veins",
                "The skin is discolored and thick"
            ],
            lymphedema: [
                "The skin is thick and rough",
                "My toes look square",
                "Can't pinch the skin anymore"
            ]
        },

        medications: {
            ccb: [
                "I take amlodipine for blood pressure",
                "I'm on a calcium channel blocker",
                "They started me on a new blood pressure med recently"
            ],
            other: [
                "I take gabapentin",
                "I'm on an NSAID regularly",
                "I use hormone therapy"
            ],
            none: [
                "No new medications",
                "Been on the same meds for years",
                "Nothing new"
            ]
        }
    },

    // ========================================================================
    // TEACHING PEARLS
    // ========================================================================
    teachingPearls: [
        "WELLS SCORE is key for DVT evaluation - calculate it before ordering tests",
        "D-dimer should NOT be ordered if it's expected to be positive (surgery, cancer, pregnancy, hospitalization)",
        "Age-adjusted D-dimer (age × 10 for patients >50) improves specificity in elderly",
        "More than 75% of suspected DVTs are NOT DVT - muscle tears (40%) and other causes common",
        "Chronic bilateral edema: pulmonary hypertension (often from sleep apnea) is frequently MISSED",
        "Venous disease is commonly OVERDIAGNOSED; HF and pulmonary HTN UNDERDIAGNOSED",
        "Normal ECG makes HFrEF very unlikely (98% NPV)",
        "BNP/NT-proBNP can be NORMAL in HFpEF - don't rule out HF based on normal levels alone",
        "Pulsus alternans is virtually PATHOGNOMONIC of severe LV systolic dysfunction",
        "S3 gallop has low sensitivity but HIGH specificity (90-99%) for elevated filling pressures",
        "Homans sign is UNRELIABLE - don't rely on it for DVT diagnosis",
        "Calf circumference difference is the most useful exam finding for DVT",
        "Recurrent ipsilateral DVT is challenging - compare to prior CUS or use MR direct thrombus imaging",
        "May-Thurner syndrome: young women with LEFT leg swelling - consider if unexplained"
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LegSwellingTemplatesV2;
}

if (typeof window !== 'undefined') {
    window.LegSwellingTemplatesV2 = LegSwellingTemplatesV2;
}

console.log("✓ ReasonDx Leg Swelling/DVT Templates v2 with UpToDate Evidence: Loaded");
