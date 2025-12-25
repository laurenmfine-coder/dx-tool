/**
 * ============================================================================
 * REASONDX LEG SWELLING / DVT CLINICAL TEMPLATES
 * ============================================================================
 * Version: 1.0 | December 2024
 * 
 * Chief Complaint: Leg Swelling / Leg Pain
 * 
 * Covers:
 * - Deep Vein Thrombosis (DVT) - URGENT
 * - Chronic Venous Insufficiency
 * - Heart Failure (CHF)
 * - Nephrotic Syndrome
 * - Lymphedema
 * - Cellulitis
 * - Baker's Cyst (ruptured)
 * - Medication-Induced Edema
 * ============================================================================
 */

const LegSwellingTemplates = {
    chiefComplaint: "Leg Swelling",
    
    // ========================================================================
    // KEY DIFFERENTIATING FEATURES
    // ========================================================================
    keyDifferentiators: {
        unilateralVsBilateral: {
            unilateral: ["DVT", "Cellulitis", "Baker's cyst", "Lymphedema (early)", "Chronic venous insufficiency"],
            bilateral: ["CHF", "Nephrotic syndrome", "Cirrhosis", "Medication-induced", "Lymphedema (late)"]
        },
        painfulVsPainless: {
            painful: ["DVT", "Cellulitis", "Baker's cyst rupture"],
            painless: ["CHF", "Nephrotic syndrome", "Lymphedema", "Chronic venous insufficiency", "Medication-induced"]
        },
        pittingVsNonPitting: {
            pitting: ["DVT", "CHF", "Nephrotic", "Venous insufficiency", "Medication-induced"],
            nonPitting: ["Lymphedema (late stage)", "Myxedema"]
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
                { flag: "Calf pain/tenderness", significance: "Common symptom" },
                { flag: "Recent immobility", significance: "Major risk factor" },
                { flag: "Recent surgery", significance: "Major risk factor" },
                { flag: "Cancer history", significance: "Hypercoagulable state" },
                { flag: "Prior DVT/PE", significance: "Strongest risk factor" },
                { flag: "Warmth and erythema", significance: "Local inflammation" }
            ],
            concern: "PE risk if untreated"
        },
        peSymptoms: {
            name: "PE Symptoms (with leg symptoms)",
            flags: [
                { flag: "Dyspnea", significance: "May indicate concurrent PE" },
                { flag: "Chest pain (pleuritic)", significance: "PE symptom" },
                { flag: "Hemoptysis", significance: "PE with infarction" },
                { flag: "Syncope", significance: "Massive PE" },
                { flag: "Tachycardia", significance: "PE sign" }
            ],
            urgency: "EMERGENCY if PE suspected"
        },
        necrotizingFasciitis: {
            name: "Necrotizing Fasciitis",
            flags: [
                { flag: "Pain out of proportion to exam", significance: "Classic early sign" },
                { flag: "Rapid progression", significance: "Hours, not days" },
                { flag: "Systemic toxicity (fever, tachycardia)", significance: "Sepsis" },
                { flag: "Crepitus", significance: "Gas in tissue" },
                { flag: "Skin necrosis/bullae", significance: "Late sign" }
            ],
            urgency: "SURGICAL EMERGENCY"
        }
    },

    // ========================================================================
    // HPI ELEMENTS BY DIAGNOSIS
    // ========================================================================
    hpiByDiagnosis: {
        dvt: {
            onset: [
                "Started about {duration} ago",
                "Noticed it a few days ago and it's getting worse",
                "Came on over 2-3 days"
            ],
            location: [
                "Just the left/right leg",
                "The whole calf is swollen",
                "Starts at my ankle and goes up to my knee"
            ],
            character: [
                "Swollen and tight feeling",
                "Aching pain in my calf",
                "Feels like a charley horse that won't go away"
            ],
            associatedSymptoms: {
                pain: [
                    "It hurts, especially when I walk",
                    "Cramping pain in my calf",
                    "Tender to touch"
                ],
                warmth: [
                    "That leg feels warmer than the other",
                    "It's warm to touch",
                    "Red and warm"
                ],
                dyspnea: [
                    "I've also been a little short of breath",
                    "Some trouble breathing",
                    "No breathing problems"
                ]
            },
            riskFactors: {
                immobility: [
                    "I just had surgery {duration} ago",
                    "I was on a long flight last week",
                    "I've been on bed rest",
                    "I was in the hospital recently"
                ],
                cancer: [
                    "I'm being treated for cancer",
                    "I have a history of {cancer_type}",
                    "No cancer history"
                ],
                priorClots: [
                    "I've had blood clots before",
                    "I had a DVT/PE {duration} ago",
                    "No prior clots"
                ],
                hormones: [
                    "I'm on birth control pills",
                    "I take hormone replacement",
                    "I'm pregnant"
                ],
                familyHistory: [
                    "My {relative} had blood clots",
                    "Clotting problems run in my family",
                    "No family history of clots"
                ]
            }
        },
        
        chf: {
            onset: [
                "Both legs have been swelling for weeks/months",
                "It's been getting gradually worse",
                "Worse over the past few weeks"
            ],
            location: [
                "Both legs, worse at the end of the day",
                "Bilateral, up to my knees",
                "Both ankles and feet"
            ],
            character: [
                "Puffy and swollen",
                "Leave marks when I press on them",
                "Heavy feeling legs"
            ],
            timing: [
                "Worse at the end of the day",
                "Better in the morning after sleeping",
                "Gets worse as the day goes on"
            ],
            associatedSymptoms: {
                dyspnea: [
                    "I get short of breath with activity",
                    "Can't walk as far as I used to",
                    "I need to stop and rest when walking"
                ],
                orthopnea: [
                    "I have to sleep propped up on pillows",
                    "Can't lie flat - I get short of breath",
                    "I sleep in my recliner now"
                ],
                pnd: [
                    "I wake up at night gasping for air",
                    "I get short of breath that wakes me up",
                    "Have to sit up at night to breathe"
                ],
                weightGain: [
                    "I've gained {amount} pounds recently",
                    "My weight has gone up",
                    "Clothes are tighter"
                ],
                fatigue: [
                    "I'm exhausted all the time",
                    "No energy",
                    "Very tired"
                ]
            },
            priorHistory: [
                "I have heart failure",
                "I had a heart attack before",
                "I have cardiomyopathy"
            ]
        },
        
        nephroticSyndrome: {
            onset: [
                "The swelling started gradually",
                "I noticed puffiness first in my face, then my legs",
                "Been going on for weeks"
            ],
            location: [
                "Both legs, but also my face and hands",
                "Everywhere - periorbital in the morning, legs at night",
                "Generalized swelling"
            ],
            character: [
                "Very puffy, especially around my eyes in the morning",
                "Soft swelling that leaves deep marks",
                "Significant edema"
            ],
            associatedSymptoms: {
                urineChanges: [
                    "My urine has been foamy",
                    "Noticed bubbles in the toilet",
                    "Urine looks different"
                ],
                weightGain: [
                    "I've gained a lot of weight from fluid",
                    "Up {amount} pounds",
                    "Rapid weight gain"
                ],
                fatigue: [
                    "Very tired",
                    "Low energy",
                    "Weak"
                ]
            }
        },
        
        cellulitis: {
            onset: [
                "Started a few days ago and spread quickly",
                "Got worse over 2-3 days",
                "Noticed redness that's spreading"
            ],
            location: [
                "One leg - started small and spread",
                "The redness has grown since yesterday",
                "Lower leg mostly"
            ],
            character: [
                "Red, hot, and swollen",
                "Painful to touch",
                "Spreading redness with warmth"
            ],
            portal: [
                "I have a cut/wound on that leg",
                "I have athlete's foot",
                "I scraped my leg a few days ago",
                "I have chronic wounds/ulcers there"
            ],
            associatedSymptoms: {
                fever: [
                    "I've had fevers",
                    "I feel feverish",
                    "Chills and fever"
                ],
                systemicSymptoms: [
                    "I feel sick overall",
                    "Body aches",
                    "Feeling unwell"
                ],
                drainage: [
                    "There's some pus draining",
                    "The wound is oozing",
                    "No drainage"
                ]
            },
            riskFactors: [
                "I have diabetes",
                "I have chronic leg swelling",
                "I've had cellulitis before"
            ]
        },
        
        chronicVenousInsufficiency: {
            onset: [
                "I've had swelling for years",
                "Gradually getting worse over time",
                "Longstanding problem"
            ],
            location: [
                "One leg is worse than the other",
                "Around my ankles mostly",
                "Lower legs bilaterally but asymmetric"
            ],
            character: [
                "Aching, heavy feeling",
                "Worse with standing",
                "Gets better when I elevate my legs"
            ],
            associatedFindings: {
                skinChanges: [
                    "The skin on my lower leg is discolored - brownish",
                    "I have varicose veins",
                    "The skin is thickened and leathery"
                ],
                ulcers: [
                    "I get wounds on my ankles that won't heal",
                    "I have venous ulcers",
                    "Chronic sores above my ankles"
                ]
            },
            aggravating: [
                "Worse with prolonged standing",
                "Worse at the end of the day",
                "Hot weather makes it worse"
            ],
            relieving: [
                "Better when I elevate my legs",
                "Compression stockings help",
                "Better in the morning"
            ]
        },
        
        lymphedema: {
            onset: [
                "Started after my {surgery/radiation}",
                "Been progressive over months/years",
                "Gradual onset"
            ],
            location: [
                "One leg, starting at the foot",
                "Involves my toes - they look square",
                "From foot up to thigh"
            ],
            character: [
                "Heavy, full feeling",
                "Doesn't pit like it used to",
                "Firm swelling"
            ],
            priorHistory: [
                "I had lymph nodes removed for cancer",
                "I had radiation to my pelvis/groin",
                "I've had repeated cellulitis in that leg"
            ],
            associatedFindings: {
                skinChanges: [
                    "The skin is thick and rough",
                    "I can't pick up the skin on my toes",
                    "Warty appearance"
                ]
            }
        },
        
        medicationInduced: {
            onset: [
                "Started after I began {medication}",
                "Noticed it a few weeks after starting my new medication",
                "Related to medication change"
            ],
            location: [
                "Both ankles and feet",
                "Symmetric swelling",
                "Both legs equally"
            ],
            character: [
                "Soft, pitting edema",
                "Not painful",
                "Just swollen"
            ],
            medications: {
                ccb: [
                    "I take amlodipine",
                    "I'm on a calcium channel blocker",
                    "Blood pressure medication that ends in -dipine"
                ],
                nsaids: [
                    "I take ibuprofen regularly",
                    "I use NSAIDs for pain",
                    "I take naproxen"
                ],
                steroids: [
                    "I'm on prednisone",
                    "I take steroids",
                    "Corticosteroids for {condition}"
                ],
                other: [
                    "Gabapentin/pregabalin",
                    "Pioglitazone",
                    "Minoxidil"
                ]
            }
        },
        
        bakersCyst: {
            onset: [
                "Sudden onset of calf swelling and pain",
                "I felt a pop behind my knee, then my calf swelled",
                "Acute onset"
            ],
            location: [
                "Behind my knee and into my calf",
                "Calf swelling below the knee",
                "Started in back of knee"
            ],
            character: [
                "Sharp pain then swelling",
                "Calf feels full and tight",
                "Like fluid ran down my leg"
            ],
            priorHistory: [
                "I have knee arthritis",
                "I've had swelling behind my knee before",
                "Known Baker's cyst"
            ]
        }
    },

    // ========================================================================
    // PHYSICAL EXAM FINDINGS
    // ========================================================================
    physicalExamFindings: {
        dvt: {
            inspection: [
                { finding: "Unilateral leg swelling", significance: "Classic finding" },
                { finding: "Erythema over affected vein", significance: "Inflammation" },
                { finding: "Distended superficial veins", significance: "Collaterals forming" }
            ],
            palpation: [
                { finding: "Pitting edema", significance: "Increased interstitial fluid" },
                { finding: "Calf tenderness", significance: "Common but nonspecific" },
                { finding: "Warmth", significance: "Inflammation" },
                { finding: "Palpable cord", significance: "Thrombosed vein" }
            ],
            measurements: [
                { finding: "Calf circumference >3cm difference", significance: "Significant asymmetry" }
            ],
            specialTests: [
                { finding: "Homan's sign (calf pain with dorsiflexion)", significance: "Poor sensitivity and specificity - not reliable" }
            ]
        },
        
        chf: {
            inspection: [
                { finding: "Bilateral symmetric edema", significance: "Systemic fluid overload" },
                { finding: "JVD", significance: "Right heart failure/elevated CVP" },
                { finding: "S3 gallop", significance: "Volume overload" }
            ],
            palpation: [
                { finding: "Pitting edema bilateral", significance: "Symmetric" },
                { finding: "Hepatomegaly", significance: "Right heart failure" },
                { finding: "Hepatojugular reflux", significance: "Elevated right-sided pressures" }
            ],
            auscultation: [
                { finding: "Crackles in lungs", significance: "Pulmonary edema" },
                { finding: "S3 gallop", significance: "LV dysfunction" },
                { finding: "Murmur", significance: "Valvular etiology" }
            ]
        },
        
        cellulitis: {
            inspection: [
                { finding: "Erythema with defined or spreading borders", significance: "Infection" },
                { finding: "Swelling", significance: "Inflammation" },
                { finding: "Skin breakdown/portal of entry", significance: "Source" }
            ],
            palpation: [
                { finding: "Warmth", significance: "Inflammation/infection" },
                { finding: "Tenderness", significance: "Infection" },
                { finding: "NO crepitus", significance: "Rules out nec fasc (if present = emergency)" }
            ],
            lymphatic: [
                { finding: "Lymphangitic streaking", significance: "Spreading infection" },
                { finding: "Regional lymphadenopathy", significance: "Immune response" }
            ]
        },
        
        nephroticSyndrome: {
            inspection: [
                { finding: "Periorbital edema (morning)", significance: "Characteristic" },
                { finding: "Bilateral leg edema", significance: "Dependent edema" },
                { finding: "Anasarca (severe cases)", significance: "Generalized edema" }
            ],
            palpation: [
                { finding: "Pitting edema", significance: "Low oncotic pressure" },
                { finding: "Ascites", significance: "Severe hypoalbuminemia" }
            ]
        },
        
        lymphedema: {
            inspection: [
                { finding: "Non-pitting edema (late stage)", significance: "Fibrosis" },
                { finding: "Stemmer's sign positive", significance: "Can't pinch skin on dorsum of 2nd toe" },
                { finding: "Square toes", significance: "Lymphedema pattern" },
                { finding: "Peau d'orange skin", significance: "Dermal lymphatic obstruction" }
            ],
            palpation: [
                { finding: "Firm, non-pitting (late)", significance: "Fibrotic changes" },
                { finding: "Pitting (early)", significance: "Early lymphedema can pit" }
            ]
        },
        
        chronicVenousInsufficiency: {
            inspection: [
                { finding: "Varicose veins", significance: "Venous incompetence" },
                { finding: "Hemosiderin staining (brown discoloration)", significance: "Chronic extravasation" },
                { finding: "Lipodermatosclerosis", significance: "Chronic changes" },
                { finding: "Venous ulcers (medial malleolus)", significance: "Severe CVI" }
            ],
            palpation: [
                { finding: "Pitting edema", significance: "Venous congestion" },
                { finding: "Warmth (if ulcerated)", significance: "Secondary infection risk" }
            ]
        }
    },

    // ========================================================================
    // CLINICAL DECISION RULES
    // ========================================================================
    clinicalDecisionRules: {
        wellsScoreDVT: {
            name: "Wells Score for DVT",
            criteria: [
                { criterion: "Active cancer (treatment within 6 months)", points: 1 },
                { criterion: "Paralysis/paresis/recent cast of lower extremity", points: 1 },
                { criterion: "Bedridden >3 days or major surgery within 12 weeks", points: 1 },
                { criterion: "Localized tenderness along deep venous system", points: 1 },
                { criterion: "Entire leg swollen", points: 1 },
                { criterion: "Calf swelling >3cm vs asymptomatic leg", points: 1 },
                { criterion: "Pitting edema confined to symptomatic leg", points: 1 },
                { criterion: "Collateral superficial veins", points: 1 },
                { criterion: "Previously documented DVT", points: 1 },
                { criterion: "Alternative diagnosis as likely or more likely than DVT", points: -2 }
            ],
            interpretation: [
                { score: "≤0", probability: "Low (5%)", action: "D-dimer; if negative, DVT excluded" },
                { score: "1-2", probability: "Moderate (17%)", action: "D-dimer; if negative, DVT excluded; if positive, ultrasound" },
                { score: "≥3", probability: "High (53%)", action: "Ultrasound (D-dimer not sufficient to rule out)" }
            ]
        },
        
        dDimerUse: {
            name: "D-Dimer Use in DVT",
            keyPoints: [
                "High sensitivity (~95%), low specificity (~50%)",
                "Useful to RULE OUT DVT in low/moderate pretest probability",
                "NOT useful to rule in DVT",
                "Elevated in: infection, cancer, pregnancy, recent surgery, inflammation",
                "Age-adjusted cutoff: age x 10 (if >50 years)"
            ]
        }
    },

    // ========================================================================
    // WORKUP
    // ========================================================================
    workupByDiagnosis: {
        dvt: {
            initial: [
                { test: "Calculate Wells Score", rationale: "Determine pretest probability" },
                { test: "D-dimer", rationale: "If low/moderate probability - negative excludes DVT" },
                { test: "Compression ultrasound", rationale: "Gold standard imaging; if high probability or D-dimer positive" }
            ],
            ifPositive: [
                { test: "Consider PE evaluation", rationale: "If any cardiopulmonary symptoms" },
                { test: "Thrombophilia workup", rationale: "If unprovoked, recurrent, or young patient (defer until after treatment)" }
            ],
            labs: ["CBC", "BMP", "PT/INR (baseline)", "Consider age-appropriate cancer screening if unprovoked"]
        },
        
        chf: {
            initial: [
                { test: "BNP or NT-proBNP", rationale: "Elevated in heart failure" },
                { test: "Echocardiogram", rationale: "Assess EF, structure, valves" },
                { test: "ECG", rationale: "Rhythm, ischemia, hypertrophy" },
                { test: "Chest X-ray", rationale: "Cardiomegaly, pulmonary edema" }
            ],
            labs: ["BMP (renal function, electrolytes)", "CBC", "LFTs", "TSH", "Lipid panel"],
            ifNewDiagnosis: ["Coronary evaluation if ischemic etiology suspected"]
        },
        
        nephroticSyndrome: {
            initial: [
                { test: "Urinalysis", rationale: "Proteinuria" },
                { test: "Spot urine protein/creatinine ratio", rationale: "Quantify proteinuria" },
                { test: "24-hour urine protein", rationale: ">3.5g/day = nephrotic range" },
                { test: "Serum albumin", rationale: "Low in nephrotic syndrome" },
                { test: "Lipid panel", rationale: "Hyperlipidemia common" }
            ],
            labs: ["BMP (creatinine)", "CBC", "Hepatitis B/C serologies", "HIV", "ANA, complement"],
            imaging: ["Renal ultrasound"],
            definitive: ["Kidney biopsy (usually needed for definitive diagnosis)"]
        },
        
        cellulitis: {
            routine: ["Clinical diagnosis - labs often not needed for uncomplicated"],
            ifSevere: [
                { test: "CBC", rationale: "Leukocytosis" },
                { test: "BMP", rationale: "Baseline" },
                { test: "Blood cultures", rationale: "If systemic symptoms" },
                { test: "CRP/ESR", rationale: "Inflammatory markers" }
            ],
            imaging: [
                { test: "Ultrasound", rationale: "If abscess suspected" },
                { test: "CT/MRI", rationale: "If necrotizing fasciitis concern" }
            ]
        },
        
        chronicVenousInsufficiency: {
            initial: [
                { test: "Venous duplex ultrasound", rationale: "Assess for reflux, DVT" }
            ],
            ifUlcer: ["Wound culture if infected", "ABI to assess arterial component"]
        },
        
        lymphedema: {
            initial: [
                { test: "Clinical diagnosis often sufficient", rationale: "Based on history and exam" },
                { test: "Duplex ultrasound", rationale: "Rule out DVT" }
            ],
            ifUnclear: ["Lymphoscintigraphy", "CT/MRI if malignancy concern"]
        }
    },

    // ========================================================================
    // PATIENT RESPONSE TEMPLATES
    // ========================================================================
    patientResponses: {
        unilateralVsBilateral: {
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
                "I've had this for months/years",
                "It's been going on a long time",
                "Gradually getting worse over time"
            ]
        },
        
        riskFactorsDVT: {
            immobility: {
                positive: [
                    "I just had surgery {duration} ago",
                    "I was on a long flight/car ride",
                    "I've been on bed rest",
                    "I was hospitalized recently"
                ],
                negative: [
                    "No recent immobility",
                    "I've been active",
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
                    "First time",
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
        
        chfSymptoms: {
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
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LegSwellingTemplates;
}

if (typeof window !== 'undefined') {
    window.LegSwellingTemplates = LegSwellingTemplates;
}

console.log("✓ ReasonDx Leg Swelling/DVT Templates: Loaded");
