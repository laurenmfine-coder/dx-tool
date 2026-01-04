/**
 * ============================================================================
 * REASONDX BACK PAIN CLINICAL TEMPLATES
 * ============================================================================
 * Version: 2.0 | December 2024
 * Evidence Sources: 
 *   - UpToDate: Evaluation of Low Back Pain in Adults
 *   - UpToDate: Acute Lumbosacral Radiculopathy
 *   - UpToDate: Vertebral Osteomyelitis - Clinical Manifestations and Diagnosis
 *   - UpToDate: Vertebral Osteomyelitis - Treatment
 *   - UpToDate: Spinal Epidural Abscess
 * 
 * EPIDEMIOLOGY (from UpToDate):
 * - Up to 84% of adults have low back pain at some time
 * - >85% of patients in primary care have NONSPECIFIC low back pain
 * - <1% have serious etiology (cancer, infection, cauda equina)
 * - ~4% have vertebral compression fracture
 * - ~3-4% have symptomatic disc herniation or spinal stenosis
 * - L5 and S1 radiculopathies account for >90% of radiculopathies
 * - L4-L5 and L5-S1 = 90-95% of compressive radiculopathies
 * ============================================================================
 */

const BackPainTemplates = {
    chiefComplaint: "Back Pain",
    
    // ========================================================================
    // EPIDEMIOLOGY
    // ========================================================================
    epidemiology: {
        lifetimePrevalence: "Up to 84% of adults",
        nonspecificBackPain: ">85% in primary care - no specific identifiable cause",
        seriousEtiology: "<1% (cancer, infection, cauda equina)",
        compressionFracture: "~4% in primary care",
        discHerniationOrStenosis: "~3-4%",
        radiculopathy: {
            lifetimePrevalence: "3-5% of adults",
            mostCommonLevels: "L5 and S1 (>90%)",
            L4L5_L5S1: "90-95% of compressive radiculopathies"
        },
        riskFactors: [
            "Smoking",
            "Obesity", 
            "Age",
            "Female sex",
            "Physically strenuous work",
            "Sedentary work",
            "Psychologically strenuous work",
            "Job dissatisfaction",
            "Psychological factors (somatization, anxiety, depression)"
        ]
    },

    // ========================================================================
    // RED FLAGS - DANGEROUS CAUSES
    // ========================================================================
    redFlags: {
        
        // ----- CAUDA EQUINA SYNDROME -----
        caudaEquina: {
            name: "Cauda Equina Syndrome",
            definition: "Compression of >2 lumbosacral nerve roots below conus medullaris",
            mostCommonCause: "Herniation of intervertebral disc",
            otherCauses: ["Lumbar puncture", "Ankylosing spondylitis", "Trauma", "Malignancy", "Infection"],
            
            clinicalFeatures: [
                { finding: "Saddle anesthesia", description: "Numbness S2-S4 dermatomes (perineum)", significance: "PATHOGNOMONIC" },
                { finding: "Urinary retention", description: "Inability to void, overflow incontinence", significance: "Critical finding" },
                { finding: "Fecal incontinence", description: "Loss of anal sphincter control", significance: "Late finding" },
                { finding: "Bilateral leg weakness", description: "Motor deficits in L3-S1 distributions", significance: "Multiple root involvement" },
                { finding: "Sexual dysfunction", description: "New erectile dysfunction", significance: "S2-S4 involvement" }
            ],
            
            physicalExamFindings: [
                { finding: "Decreased rectal tone", significance: "CRITICAL - high specificity" },
                { finding: "Absent anal wink reflex", significance: "S2-S4 involvement" },
                { finding: "Decreased bulbocavernosus reflex", significance: "S2-S4 involvement" },
                { finding: "Saddle anesthesia on sensory exam", significance: "Bilateral S2-S4 loss" },
                { finding: "Bilateral ankle reflex loss", significance: "S1 involvement" },
                { finding: "Distended bladder on palpation", significance: "Urinary retention" }
            ],
            
            urgency: "EMERGENCY - Immediate MRI, surgical decompression",
            imaging: "MRI lumbar spine without contrast; with contrast if cancer/infection suspected",
            keyPoint: "Once paralysis develops, may become irreversible within 24-48 hours"
        },

        // ----- SPINAL EPIDURAL ABSCESS -----
        epiduralAbscess: {
            name: "Spinal Epidural Abscess (SEA)",
            incidence: "5.1 per 10,000 admissions (increasing)",
            medianAge: "~50 years",
            location: "Most common in thoracolumbar area (larger epidural space)",
            
            microbiology: {
                sAureus: { percent: 63, note: "MRSA 25-68% of S. aureus" },
                gramNegative: { percent: 16 },
                streptococci: { percent: 9 },
                coagNegStaph: { percent: 3, note: "Often with prior instrumentation" },
                anaerobes: { percent: 2 },
                tbAndFungi: { percent: 1 }
            },
            
            classicTriad: {
                components: ["Fever", "Back pain", "Neurologic deficits"],
                note: "Only small proportion have all three at presentation"
            },
            
            typicalProgression: [
                "Stage 1: Back pain (focal, severe) - 70-100% have this",
                "Stage 2: Nerve root pain ('shooting', 'electric shocks')",
                "Stage 3: Motor weakness, sensory changes, bladder/bowel dysfunction",
                "Stage 4: Paralysis (may quickly become irreversible)"
            ],
            
            riskFactors: [
                { factor: "IV drug use", significance: "Major - hematogenous spread" },
                { factor: "Diabetes mellitus", significance: "Immunocompromise" },
                { factor: "Epidural catheter", significance: "Direct inoculation" },
                { factor: "Recent spinal procedure", significance: "Direct inoculation" },
                { factor: "Indwelling vascular catheter", significance: "Bacteremia source" },
                { factor: "Recent bacteremia/infection", significance: "Hematogenous seeding" },
                { factor: "Immunosuppression", significance: "HIV, steroids, chemo" },
                { factor: "Alcoholism", significance: "Immunocompromise" },
                { factor: "Renal failure/hemodialysis", significance: "Multiple risk factors" }
            ],
            
            labFindings: {
                wbc: "May be elevated or NORMAL",
                esr: "Usually elevated (>20 suggests infection)",
                crp: "Usually elevated",
                note: "ESR and CRP nonspecific - can raise suspicion but don't confirm"
            },
            
            fever: {
                present: "~48-52% at presentation",
                note: "Absence of fever does NOT rule out SEA"
            },
            
            imaging: "MRI with gadolinium contrast - preferred",
            urgency: "EMERGENCY - Antibiotics + surgical decompression for most",
            
            empiricAntibiotics: {
                regimen: "Vancomycin + (Ceftriaxone OR Cefepime)",
                coverageFor: ["MRSA", "Streptococci", "Gram-negative bacilli"],
                addPseudomonasCoverage: "If ICU, invasive device, immunocompromised"
            }
        },

        // ----- VERTEBRAL OSTEOMYELITIS -----
        vertebralOsteomyelitis: {
            name: "Vertebral Osteomyelitis/Discitis",
            incidence: "2.9-5.4 per 100,000 (increasing)",
            predominantAge: ">50 years",
            location: "Lumbar > Thoracic > Cervical",
            
            pathogenesis: {
                mostCommon: "Hematogenous spread",
                pattern: "Usually involves 2 adjacent vertebral bodies + disc between",
                sources: ["Skin/soft tissue infection", "UTI", "Endocarditis", "IV drug use", "Unknown (1/3)"]
            },
            
            microbiology: {
                sAureus: "Most common pathogen",
                gramNegative: "Common, especially post-UTI",
                streptococci: "Including groups B, C, G, viridans, S. bovis, enterococci",
                tbAndBrucella: "Consider in endemic areas"
            },
            
            clinicalFeatures: {
                backPain: {
                    description: "Insidious onset, progressively worsens over days to weeks",
                    character: "Localized to site, worse with activity/palpation",
                    timing: "Often worse at night, may initially improve with rest"
                },
                fever: {
                    present: "~52% at presentation",
                    note: "Inconsistent finding"
                },
                neuroDeficits: {
                    present: "~40% at diagnosis",
                    note: "Suggests epidural extension"
                }
            },
            
            physicalExam: {
                spinalTenderness: "Most useful sign - tender to percussion",
                note: "Sensitive but not specific"
            },
            
            labFindings: {
                esr: { elevated: ">80%", sensitivity: "0.76-0.95" },
                crp: { elevated: ">80%", sensitivity: "0.82-0.98" },
                wbc: "May be elevated or normal",
                bloodCultures: "Positive in up to 50%",
                note: "ESR <20 makes infection very unlikely"
            },
            
            imaging: {
                preferred: "MRI with and without contrast",
                findings: [
                    "T1: Decreased signal in vertebral body and disc",
                    "T1 with contrast: Enhancement of bone/soft tissue",
                    "T2: Increased signal in disc and soft tissue",
                    "Loss of endplate definition"
                ],
                timing: "MRI positive in 91-96% even with <2 weeks symptoms"
            },
            
            diagnosis: {
                definitive: "Isolation of organism from bone biopsy + histologic inflammation",
                presumptive: "Clinical + imaging + positive blood cultures with typical pathogen"
            },
            
            treatmentDuration: "4-8 weeks antibiotics",
            complications: ["Epidural abscess (38%)", "Psoas abscess (12%)", "Paralysis"]
        },

        // ----- MALIGNANCY -----
        malignancy: {
            name: "Metastatic Spinal Disease",
            primaryCancersWithBoneMetastases: ["Breast (80%)", "Prostate", "Lung", "Thyroid", "Kidney", "Multiple myeloma"],
            
            redFlags: [
                { finding: "History of cancer", sensitivity: 0.95, note: "Strongest predictor" },
                { finding: "Age >50 with new pain", sensitivity: 0.50 },
                { finding: "Unexplained weight loss (>10 lbs)", sensitivity: 0.60 },
                { finding: "Pain worse at night", sensitivity: 0.70, note: "Not relieved by rest" },
                { finding: "Pain at rest", sensitivity: 0.65 },
                { finding: "Duration >6 weeks without improvement", sensitivity: 0.40 },
                { finding: "Failure to improve with conservative treatment", sensitivity: 0.50 }
            ],
            
            workup: {
                initial: "Plain radiographs + ESR/CRP",
                note: "Cancer very unlikely if ESR <20 and ≤1 risk factor",
                advanced: "MRI with contrast if high suspicion or elevated markers"
            },
            
            urgency: "Urgent if neurologic deficits - risk of cord compression"
        },

        // ----- COMPRESSION FRACTURE -----
        compressionFracture: {
            name: "Vertebral Compression Fracture",
            prevalence: "~4% of primary care back pain patients",
            
            riskFactors: [
                { factor: "Osteoporosis", note: "Major risk factor" },
                { factor: "Age >70", note: "Especially women" },
                { factor: "Prolonged glucocorticoid use", note: "Strong association" },
                { factor: "Prior fragility fracture", note: "Strongest predictor of future fracture" },
                { factor: "Minor trauma", note: "Even bending/coughing can cause fracture" }
            ],
            
            clinicalFeatures: [
                "Sudden onset localized back pain",
                "Pain with palpation over specific vertebra",
                "Pain worse with movement",
                "May radiate to flank/abdomen (NOT typical leg radiation)"
            ],
            
            imaging: "Plain radiographs initially; MRI if need to assess acuity",
            treatment: "Pain control, bracing, consider vertebroplasty/kyphoplasty if severe"
        },

        // ----- AAA -----
        aaa: {
            name: "Abdominal Aortic Aneurysm",
            
            redFlags: [
                { finding: "Age >60", significance: "Major risk factor" },
                { finding: "Smoking history", significance: "Strongest modifiable risk" },
                { finding: "Abdominal pain", significance: "Concurrent symptom" },
                { finding: "Pulsatile abdominal mass", sensitivity: 0.50 },
                { finding: "Hypotension", significance: "Sign of rupture - EMERGENCY" },
                { finding: "Sudden severe 'tearing' pain", significance: "Suggests rupture/leak" }
            ],
            
            presentation: {
                unruptured: "Indolent, nonspecific pain (back, abdomen, flank)",
                ruptured: "Acute, severe pain + hemodynamic instability"
            },
            
            imaging: "CT angiography if suspected",
            urgency: "EMERGENCY if rupturing - immediate vascular surgery"
        }
    },

    // ========================================================================
    // LUMBOSACRAL RADICULOPATHY
    // ========================================================================
    radiculopathy: {
        
        definition: "Symptoms/impairments related to spinal nerve root dysfunction",
        mostCommonLevels: "L5 and S1 (>90% of radiculopathies)",
        mostCommonCause: "Disc herniation or degenerative spondylosis",
        
        byLevel: {
            L1: {
                sensory: "Inguinal region",
                motor: "Mild hip flexion weakness (rare)",
                reflex: "None reliably tested",
                note: "Uncommon - minimal mechanical stress at this level"
            },
            L2_L3_L4: {
                sensory: "Anterior thigh (L2-3), medial leg to arch (L4)",
                motor: "Hip flexion, hip adduction, knee extension",
                reflex: "Knee (patellar) - DECREASED",
                note: "Significant overlap - hard to distinguish clinically",
                typicalPresentation: "Back pain radiating to anterior thigh/knee"
            },
            L5: {
                sensory: "Lateral leg, dorsum of foot, web space 1st-2nd toe",
                motor: "Foot dorsiflexion (tibialis anterior), toe extension, foot inversion/eversion",
                reflex: "Internal hamstring (difficult to elicit)",
                note: "MOST COMMON radiculopathy",
                typicalPresentation: "Back pain radiating down lateral leg to dorsum of foot",
                footDrop: "Classic finding with severe L5 radiculopathy"
            },
            S1: {
                sensory: "Posterior leg, lateral foot, sole",
                motor: "Plantar flexion (gastrocnemius/soleus), hip extension, knee flexion",
                reflex: "Ankle (Achilles) - DECREASED/ABSENT",
                typicalPresentation: "Back pain radiating down posterior leg to lateral foot",
                note: "Second most common radiculopathy"
            },
            S2_S3_S4: {
                sensory: "Perineum (saddle area)",
                motor: "Minimal somatic weakness; bladder/bowel/sexual dysfunction",
                note: "Rare structural cause; consider cauda equina if bilateral"
            }
        },
        
        physicalExamManeuvers: {
            straightLegRaise: {
                technique: "Patient supine, raise leg with knee extended, foot dorsiflexed",
                positive: "Radicular pain at 30-60 degrees hip flexion",
                sensitivity: 0.91,
                specificity: 0.26,
                note: "Sensitive but not specific for disc herniation",
                testedRoots: "L5 and S1"
            },
            crossedStraightLegRaise: {
                technique: "Raise UNAFFECTED leg",
                positive: "Reproduces pain in AFFECTED leg",
                sensitivity: "Low",
                specificity: 0.88,
                note: "Highly specific for disc herniation"
            },
            reverseStraightLegRaise: {
                technique: "Patient prone or lateral, extend hip with knee flexed",
                testedRoots: "L2, L3, L4",
                note: "Femoral stretch test"
            }
        },
        
        imaging: {
            when: "Not needed initially if no red flags; obtain if symptoms persist >4-6 weeks",
            modality: "MRI without contrast preferred",
            caveat: "22-67% of asymptomatic adults have disc herniations on MRI"
        },
        
        prognosis: "Most improve with conservative management within 6 weeks"
    },

    // ========================================================================
    // NONSPECIFIC LOW BACK PAIN
    // ========================================================================
    nonspecificBackPain: {
        definition: "Back pain in absence of specific identifiable cause (>85% of cases)",
        synonyms: ["Mechanical back pain", "Musculoskeletal strain"],
        diagnosis: "Presumptive - made when red flags excluded",
        
        typicalFeatures: [
            "Pain localized to lower back +/- buttocks",
            "Pain worse with activity, better with rest",
            "No neurologic deficits",
            "No red flag symptoms",
            "Normal or age-appropriate imaging findings"
        ],
        
        imagingGuidance: {
            initial: "NO imaging needed for first 4-6 weeks if no red flags",
            rationale: [
                "No improvement in outcomes with early imaging",
                "Incidental findings common and cause confusion",
                "Early imaging associated with more opioid use, procedures, costs"
            ],
            when: "If no improvement after 4-6 weeks conservative management"
        },
        
        prognosis: "90% improve within 6 weeks",
        treatment: "NSAIDs, activity as tolerated, physical therapy"
    },

    // ========================================================================
    // IMAGING DECISION RULES
    // ========================================================================
    imagingDecisions: {
        
        immediateImaging: [
            "Cauda equina symptoms (saddle anesthesia, retention, incontinence)",
            "Severe or progressive neurologic deficits",
            "Suspected spinal infection (fever + back pain + risk factors)",
            "Suspected malignancy (cancer history + new back pain)"
        ],
        
        noImagingNeeded: [
            "Acute nonspecific back pain (<4 weeks) without red flags",
            "Mechanical pain improving with conservative measures"
        ],
        
        delayedImaging: [
            "Symptoms persistent >4-6 weeks despite conservative treatment",
            "Radiculopathy not improving with conservative treatment"
        ],
        
        imagingModalities: {
            mri: {
                when: "Suspected infection, malignancy, cauda equina, radiculopathy",
                contrast: "Add contrast if infection or malignancy suspected"
            },
            plainFilms: {
                when: "Suspected compression fracture, spondyloarthritis, gross instability",
                note: "Cannot visualize discs or soft tissue"
            },
            ct: {
                when: "MRI contraindicated; better for bony detail",
                note: "Higher radiation, less soft tissue detail than MRI"
            }
        },
        
        findingsOfUncertainSignificance: [
            "Degenerative changes (common, don't correlate with symptoms)",
            "Annular fissures (38% of asymptomatic patients)",
            "Schmorl's nodes (~20% of asymptomatic patients)",
            "Modic changes (6-10% of asymptomatic adults)",
            "Disc bulges without nerve compression"
        ]
    },

    // ========================================================================
    // PATIENT RESPONSE TEMPLATES
    // ========================================================================
    patientResponses: {
        
        saddleAnesthesia: {
            positive: [
                "Yes, I can't feel anything in my groin area - it's completely numb",
                "When I wipe after using the bathroom, I can't feel the toilet paper",
                "That whole area between my legs is numb, like sitting on a bicycle too long but it won't go away"
            ],
            negative: [
                "No, I can feel everything down there normally",
                "No numbness in that area at all"
            ]
        },
        
        bladderSymptoms: {
            retention: [
                "I can't tell when I need to urinate anymore",
                "I tried to go but couldn't start the stream - nothing would come out",
                "I feel like my bladder is full but I can't empty it"
            ],
            incontinence: [
                "I've been having accidents - I can't hold my urine",
                "I'm leaking urine without realizing it"
            ],
            normal: [
                "No, I'm urinating normally",
                "My bladder function is fine"
            ]
        },
        
        bowelSymptoms: {
            positive: [
                "I had an accident - couldn't control my bowels",
                "I've been leaking stool without realizing it"
            ],
            negative: [
                "No, my bowels are normal",
                "No problems with bowel control"
            ]
        },
        
        fever: {
            present: [
                "Yes, I've had fevers - up to 101-102",
                "I've been having chills and feeling feverish",
                "I've had night sweats soaking my sheets"
            ],
            absent: [
                "No fever that I've noticed",
                "I've been checking - my temperature has been normal"
            ]
        },
        
        ivDrugUse: {
            positive: [
                "Yes, I inject drugs",
                "I use IV heroin",
                "Yes, I've been using needles"
            ],
            negative: [
                "No, I don't use IV drugs",
                "I've never injected anything"
            ]
        },
        
        cancerHistory: {
            positive: [
                "Yes, I had {cancer_type} about {duration} ago",
                "I'm currently being treated for cancer",
                "I was diagnosed with cancer last year"
            ],
            negative: [
                "No, I've never had cancer",
                "No cancer history"
            ]
        },
        
        recentSpinalProcedure: {
            positive: [
                "I had an epidural steroid injection about {duration} ago",
                "I had back surgery {duration} ago",
                "I had a spinal tap last month"
            ],
            negative: [
                "No, I haven't had any procedures on my spine",
                "No back surgeries or injections"
            ]
        },
        
        legWeakness: {
            bilateral: [
                "Both of my legs feel weak",
                "I'm having trouble walking - both legs won't cooperate",
                "I can barely lift my feet when I walk"
            ],
            unilateral: [
                "Just my {side} leg is weak",
                "I'm dragging my {side} foot",
                "Only one leg is affected"
            ],
            none: [
                "No weakness - my legs feel normal strength",
                "I can walk fine, it just hurts"
            ]
        },
        
        painCharacter: {
            radicular: [
                "The pain shoots down my leg like an electric shock",
                "It goes from my back all the way down to my foot",
                "Sharp shooting pain down the back of my leg"
            ],
            mechanical: [
                "It's a dull ache across my lower back",
                "Worse when I bend or lift, better when I rest",
                "Just stiff and sore in my back"
            ],
            nightPain: [
                "It's actually worse at night - wakes me up",
                "I can't find a comfortable position to sleep",
                "The pain is constant, even at rest"
            ]
        },
        
        weightLoss: {
            positive: [
                "Yes, I've lost about {amount} pounds without trying",
                "I've noticed my clothes are looser",
                "I haven't had much appetite and I'm losing weight"
            ],
            negative: [
                "No, my weight has been stable",
                "I haven't lost any weight"
            ]
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BackPainTemplates;
}

if (typeof window !== 'undefined') {
    window.BackPainTemplates = BackPainTemplates;
}

console.log("✓ ReasonDx Back Pain Templates v2.0: Loaded (with UpToDate evidence)");
