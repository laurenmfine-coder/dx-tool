/**
 * REASONDX PODIATRY (DPM) CASES - EXPANDED
 * Additional Podiatry cases beyond the initial 5
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 * For PRG Grant - Multi-Institutional Validation Study
 */

const REASONDX_PODIATRY_CASES_EXPANDED = {

// ============================================================================
// DPM-006: ACUTE GOUT ATTACK
// ============================================================================
"DPM-006": {
    id: "DPM-006",
    title: "Acute Gouty Arthritis - First MTP",
    category: "Inflammatory Arthritis",
    difficulty: "Intermediate",
    profession: "dpm",
    
    patient: {
        name: "Richard Martinez",
        age: 54,
        sex: "Male",
        BMI: 32,
        medicalHistory: ["Hypertension", "Hyperlipidemia"],
        medications: ["Hydrochlorothiazide 25mg daily", "Atorvastatin 20mg daily"],
        setting: "Podiatry Clinic - Urgent Visit"
    },
    
    chiefComplaint: "Severe big toe pain woke me up at 2 AM",
    
    clinicalScenario: `Mr. Martinez presents as an urgent add-on with excruciating right first 
MTP joint pain that began suddenly at 2 AM. He describes it as the worst pain he's ever 
experienced. He cannot bear weight or tolerate even a bed sheet touching his toe. He had a 
steak dinner with several beers last night. This is his first episode. He notes he recently 
started hydrochlorothiazide for blood pressure.`,

    historyOfPresentIllness: {
        onset: "Sudden, 2 AM while sleeping",
        location: "Right first MTP joint",
        severity: "10/10 - worst pain ever",
        character: "Throbbing, burning",
        aggravating: "Any touch, weight bearing, movement",
        relieving: "Nothing",
        priorEpisodes: "None - first attack",
        triggers: "Red meat and alcohol last night, recently started thiazide diuretic"
    },

    physicalExamination: {
        vitalSigns: { temp: "99.8°F", HR: "92", BP: "148/94" },
        rightFirstMTP: {
            inspection: "Dramatic erythema, swelling extending to midfoot",
            palpation: "Exquisitely tender - patient withdraws to light touch",
            ROM: "Unable to assess due to pain",
            skin: "Shiny, taut, warm to touch"
        },
        otherJoints: "No involvement of other joints",
        vascularExam: "Pulses 2+ bilaterally"
    },

    differentialDiagnosis: [
        { diagnosis: "Acute Gout", likelihood: "Most Likely", reasoning: "Classic podagra presentation, risk factors (male, thiazide, alcohol, diet)" },
        { diagnosis: "Septic Arthritis", likelihood: "Must Exclude", reasoning: "Acute monoarthritis always requires consideration; aspiration if uncertain" },
        { diagnosis: "Cellulitis", likelihood: "Less Likely", reasoning: "Joint-centered, no portal of entry, no lymphangitis" },
        { diagnosis: "Pseudogout (CPPD)", likelihood: "Less Likely", reasoning: "Usually affects larger joints, less common in 1st MTP" },
        { diagnosis: "Trauma/Fracture", likelihood: "Unlikely", reasoning: "No trauma history, sudden nocturnal onset classic for gout" }
    ],

    diagnosticWorkup: {
        jointAspiration: {
            indication: "Gold standard - should be performed if any doubt",
            findings: "Needle-shaped, negatively birefringent crystals = definitive diagnosis",
            cellCount: "Typically 20,000-100,000 WBC (rule out septic if >50,000)"
        },
        labWork: {
            serumUricAcid: "May be normal during acute attack - don't rely on this",
            CBC: "Leukocytosis common",
            ESR_CRP: "Elevated",
            BMP: "Assess renal function before treatment"
        },
        imaging: {
            xray: "May show soft tissue swelling; chronic gout shows erosions with overhanging edges",
            dualEnergyCT: "Can detect urate deposits if diagnosis uncertain"
        }
    },

    diagnosis: {
        primary: "Acute Gouty Arthritis - First Episode, Right 1st MTP (Podagra)",
        contributingFactors: [
            "Thiazide diuretic (decreases urate excretion)",
            "Dietary triggers (purine-rich foods, alcohol)",
            "Male sex, obesity"
        ]
    },

    treatmentPlan: {
        acuteManagement: [
            {
                option: "Colchicine",
                dose: "1.2mg initially, then 0.6mg one hour later (total 1.8mg day 1)",
                continuation: "0.6mg daily or BID until resolution",
                bestFor: "Within 36 hours of onset",
                caution: "Reduce dose in renal impairment, avoid with strong CYP3A4 inhibitors"
            },
            {
                option: "NSAIDs",
                dose: "Indomethacin 50mg TID or Naproxen 500mg BID",
                duration: "Until attack resolves (typically 5-7 days)",
                caution: "Avoid if CKD, CHF, GI bleeding risk"
            },
            {
                option: "Corticosteroids",
                dose: "Prednisone 30-40mg daily x 5 days, or intra-articular injection",
                indication: "If colchicine/NSAIDs contraindicated",
                note: "Very effective, consider if renal impairment"
            }
        ],
        adjunctive: [
            "Rest and elevation",
            "Ice (if tolerated)",
            "Avoid alcohol during attack",
            "Hydration"
        ],
        chronicManagement: {
            timing: "Discuss urate-lowering therapy (ULT) 2-4 weeks after attack resolves",
            indication: "≥2 attacks/year, tophi, CKD, urolithiasis",
            options: ["Allopurinol (start low 100mg, titrate to goal)", "Febuxostat if allopurinol intolerant"],
            targetUricAcid: "<6 mg/dL (or <5 if tophi)",
            diureticDiscussion: "Discuss with PCP about switching from thiazide"
        }
    },

    keyTeachingPoints: [
        "Podagra (1st MTP gout) is classic presentation - 50% of first attacks",
        "Serum uric acid may be NORMAL during acute attack - don't exclude gout based on this",
        "Joint aspiration is gold standard - always consider if septic arthritis possible",
        "Thiazide diuretics, loop diuretics raise uric acid - common precipitant",
        "Don't start ULT during acute attack - can prolong/worsen symptoms",
        "Prophylactic colchicine when starting ULT prevents mobilization flares"
    ],

    evidenceBase: {
        guidelines: ["ACR Gout Guidelines 2020", "EULAR Gout Recommendations 2016"],
        keyEvidence: [
            "Low-dose colchicine as effective as high-dose with fewer GI effects",
            "ULT reduces recurrent attacks and prevents tophi progression",
            "Target uric acid <6 achieves crystal dissolution"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "gout-module", title: "Gout Pathophysiology" },
        coachdx: { id: "dpm-inflammatory-case", title: "Inflammatory Arthritis Discussion" }
    }
},

// ============================================================================
// DPM-007: POSTERIOR TIBIAL TENDON DYSFUNCTION
// ============================================================================
"DPM-007": {
    id: "DPM-007",
    title: "Posterior Tibial Tendon Dysfunction (PTTD)",
    category: "Tendon Pathology",
    difficulty: "Intermediate",
    profession: "dpm",
    
    patient: {
        name: "Barbara Thompson",
        age: 58,
        sex: "Female",
        BMI: 34,
        medicalHistory: ["Type 2 Diabetes", "Hypertension"],
        setting: "Podiatry Clinic"
    },
    
    chiefComplaint: "My arch is collapsing and my ankle hurts",
    
    clinicalScenario: `Mrs. Thompson presents with progressive left medial ankle pain and 
noticed her arch "falling" over the past year. She has difficulty walking long distances 
and her shoes wear unevenly. She recalls no specific injury. Pain is worse with activity 
and at the end of the day. She has gained 30 pounds over the past 2 years.`,

    historyOfPresentIllness: {
        onset: "Gradual over 12 months",
        location: "Left medial ankle, along PTT course",
        severity: "5-7/10 with activity",
        aggravating: "Walking, standing, stairs, uneven surfaces",
        relieving: "Rest, elevation, NSAIDs",
        functionalImpact: "Can only walk 2 blocks before needing to rest"
    },

    physicalExamination: {
        observation: {
            standing: "Left hindfoot valgus, forefoot abduction ('too many toes' sign positive)",
            arch: "Medial longitudinal arch collapsed compared to right",
            gait: "Antalgic, decreased push-off left"
        },
        palpation: {
            PTT: "Tenderness along PTT from medial malleolus to navicular",
            swelling: "Mild fullness along PTT sheath"
        },
        rangeOfMotion: {
            ankle: "Dorsiflexion 5° (limited by tight gastrocnemius)",
            subtalar: "Eversion > inversion, valgus bias",
            forefoot: "Flexible forefoot varus"
        },
        strengthTesting: {
            singleHeelRise: "Unable to perform on left",
            PTTResisted: "4-/5 with pain",
            comparison: "Right side performs 10 single heel rises easily"
        },
        specialTests: {
            tooManyToesSign: "Positive left - 3 toes visible laterally from behind",
            firstRayMobility: "Hypermobile",
            silfverskioldTest: "Positive - gastrocnemius tightness"
        },
        vascularExam: "Pulses 2+ bilaterally",
        neurologicExam: "Sensation intact, reflexes normal"
    },

    diagnosticImaging: {
        weightBearingXrays: {
            AP: "Talar head uncovering, talonavicular subluxation",
            lateral: "Decreased calcaneal pitch, talar declination increased",
            measurements: "Meary's angle broken (talus-first MT axis)"
        },
        MRI: {
            indication: "If surgical planning or diagnosis uncertain",
            expectedFindings: "PTT thickening, intratendinous degeneration, possible partial tear"
        }
    },

    classification: {
        system: "Johnson and Strom / Myerson Classification",
        stage: "Stage II (flexible flatfoot deformity)",
        substage: "IIB - hindfoot valgus >10°, forefoot abduction >40% talar uncovering",
        characteristics: "PTT dysfunction with flexible deformity, unable to single heel rise"
    },

    treatmentPlan: {
        conservative: {
            indication: "First-line for Stage I-II",
            components: [
                {
                    intervention: "Orthotic Management",
                    type: "UCBL or Arizona brace for Stage II",
                    rationale: "Control hindfoot valgus, support medial arch"
                },
                {
                    intervention: "Physical Therapy",
                    focus: ["PTT strengthening", "Gastrocnemius stretching", "Intrinsic foot strengthening", "Proprioception"],
                    duration: "12 weeks minimum"
                },
                {
                    intervention: "Activity Modification",
                    recommendations: ["Weight loss counseling", "Low-impact exercise", "Avoid prolonged standing"]
                },
                {
                    intervention: "Immobilization",
                    indication: "Acute flare or severe symptoms",
                    type: "CAM boot 4-6 weeks"
                }
            ]
        },
        surgical: {
            indication: "Failed 3-6 months conservative treatment, progressive deformity",
            options: {
                stageII: [
                    "Flexor digitorum longus (FDL) tendon transfer",
                    "Medial displacement calcaneal osteotomy",
                    "Gastrocnemius recession",
                    "Possible lateral column lengthening"
                ]
            }
        }
    },

    keyTeachingPoints: [
        "PTTD is most common cause of acquired adult flatfoot deformity",
        "Single heel rise test is key clinical assessment - inability = PTT dysfunction",
        "'Too many toes' sign indicates forefoot abduction from hindfoot valgus",
        "Stage determines treatment - early stages respond to conservative care",
        "Weight and diabetes are significant risk factors",
        "Gastrocnemius tightness often contributes - address with stretching or recession"
    ],

    evidenceBase: {
        guidelines: ["ACFAS PTTD Clinical Consensus Statement 2020"],
        keyEvidence: [
            "Orthotic management effective in early stages",
            "FDL transfer + calcaneal osteotomy good outcomes for Stage II",
            "Progression can be prevented with early intervention"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "foot-biomechanics-module", title: "Foot Biomechanics" },
        coachdx: { id: "dpm-flatfoot-case", title: "Adult Flatfoot Discussion" }
    }
},

// ============================================================================
// DPM-008: MORTON'S NEUROMA
// ============================================================================
"DPM-008": {
    id: "DPM-008",
    title: "Morton's Neuroma",
    category: "Nerve Pathology",
    difficulty: "Intermediate",
    profession: "dpm",
    
    patient: {
        name: "Christine Lee",
        age: 45,
        sex: "Female",
        occupation: "Restaurant server",
        setting: "Podiatry Clinic"
    },
    
    chiefComplaint: "Burning pain in ball of foot, feels like walking on a pebble",
    
    clinicalScenario: `Ms. Lee is a restaurant server who presents with 4 months of right 
forefoot pain localized between the 3rd and 4th toes. She describes burning, tingling, and 
the sensation of "walking on a marble." Symptoms are worse at work (8-hour shifts in dress 
shoes) and relieved by removing her shoes and massaging her foot.`,

    historyOfPresentIllness: {
        onset: "Gradual over 4 months",
        location: "Right 3rd interspace, radiating to 3rd and 4th toes",
        character: "Burning, sharp, tingling, 'walking on a pebble'",
        severity: "6/10 at end of work shift",
        aggravating: "Narrow shoes, high heels, prolonged standing",
        relieving: "Removing shoes, massaging forefoot, going barefoot",
        numbness: "Intermittent tingling in 3rd and 4th toes"
    },

    physicalExamination: {
        inspection: "No visible deformity or swelling",
        palpation: {
            thirdInterspace: "Reproduction of symptoms with direct pressure",
            otherInterspaces: "Non-tender",
            metatarsalHeads: "Non-tender"
        },
        specialTests: {
            mulderSign: "Positive - palpable click with lateral compression of metatarsal heads",
            thumbIndexFingerSqueeze: "Positive - reproduces radiating symptoms"
        },
        neurovascular: {
            sensation: "Diminished light touch 3rd interdigital space",
            pulses: "Normal",
            capillaryRefill: "Normal"
        },
        footwearExamination: "Narrow toe box, 2-inch heel height"
    },

    differentialDiagnosis: [
        { diagnosis: "Morton's Neuroma (Intermetatarsal Neuroma)", likelihood: "Most Likely", reasoning: "Classic location, Mulder's positive, character of symptoms" },
        { diagnosis: "Metatarsalgia", likelihood: "Consider", reasoning: "Pain in forefoot, but typically more diffuse" },
        { diagnosis: "Stress Fracture", likelihood: "Less Likely", reasoning: "No point tenderness over bone, no bruising" },
        { diagnosis: "MTP Joint Synovitis", likelihood: "Less Likely", reasoning: "Pain is interdigital, not joint-centered" },
        { diagnosis: "Tarsal Tunnel Syndrome", likelihood: "Unlikely", reasoning: "Would have more proximal symptoms, wider distribution" }
    ],

    diagnosticImaging: {
        ultrasound: {
            indication: "Confirm diagnosis, assess size",
            findings: "Hypoechoic mass in 3rd interspace",
            sizePrognostic: ">5mm typically symptomatic"
        },
        MRI: {
            indication: "If diagnosis uncertain or multiple interspaces involved",
            findings: "T1 hypointense, T2 hypointense dumbbell-shaped mass"
        },
        xray: {
            indication: "Rule out other pathology",
            expectedFindings: "Usually normal, may show divergence of metatarsals"
        }
    },

    diagnosis: {
        primary: "Morton's Neuroma - Right 3rd Interspace",
        pathophysiology: "Perineural fibrosis of common digital nerve, not true neuroma"
    },

    treatmentPlan: {
        conservative: {
            firstLine: [
                {
                    intervention: "Footwear Modification",
                    recommendations: ["Wide toe box shoes", "Low heel (<1 inch)", "Avoid pointed shoes"],
                    rationale: "Reduces compression on interspace"
                },
                {
                    intervention: "Metatarsal Pad",
                    placement: "Proximal to metatarsal heads",
                    rationale: "Separates metatarsals, reduces nerve compression"
                },
                {
                    intervention: "Custom Orthotics",
                    features: ["Metatarsal support", "Neuroma accommodation"],
                    indication: "If OTC padding insufficient"
                }
            ],
            secondLine: [
                {
                    intervention: "Corticosteroid Injection",
                    technique: "Dorsal approach into interspace",
                    expectedResponse: "60-70% relief, may need repeat",
                    caution: "Limit to 3 injections to avoid fat pad atrophy"
                },
                {
                    intervention: "Alcohol Sclerosing Injections",
                    protocol: "Series of 3-7 injections, 4% alcohol",
                    success: "60-80% in some studies"
                }
            ]
        },
        surgical: {
            indication: "Failed conservative treatment 6+ months",
            options: [
                { procedure: "Neurectomy", approach: "Dorsal or plantar", success: "80-85%", complication: "Stump neuroma 15-20%" },
                { procedure: "Nerve Decompression", approach: "Release transverse metatarsal ligament", success: "Similar to neurectomy, preserves sensation" }
            ]
        }
    },

    keyTeachingPoints: [
        "Morton's neuroma is most common in 3rd interspace (65%), then 2nd",
        "Mulder's sign (click with lateral squeeze) is highly specific",
        "Not a true neuroma - perineural fibrosis from chronic compression",
        "Women affected 8-10x more than men (shoe-wear patterns)",
        "Metatarsal pad PROXIMAL to heads (not under) is key positioning",
        "Multiple interspaces involved should raise suspicion for other pathology"
    ],

    evidenceBase: {
        guidelines: ["ACFAS Morton's Neuroma Position Statement"],
        keyEvidence: [
            "Conservative management successful in 40-50%",
            "Corticosteroid injection provides temporary relief in majority",
            "Neurectomy long-term satisfaction 70-85%"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "peripheral-nerve-module", title: "Peripheral Nerve Pathology" },
        coachdx: { id: "dpm-neuroma-case", title: "Forefoot Pain Discussion" }
    }
},

// ============================================================================
// DPM-009: ANKLE SPRAIN - LATERAL
// ============================================================================
"DPM-009": {
    id: "DPM-009",
    title: "Acute Lateral Ankle Sprain",
    category: "Sports Medicine",
    difficulty: "Beginner",
    profession: "dpm",
    
    patient: {
        name: "Marcus Johnson",
        age: 22,
        sex: "Male",
        occupation: "College basketball player",
        setting: "Sports Medicine Clinic - Same Day Visit"
    },
    
    chiefComplaint: "Rolled my ankle during practice today",
    
    clinicalScenario: `Marcus is a 22-year-old college basketball player who inverted his right 
ankle landing from a rebound 3 hours ago. He heard a "pop" and had immediate pain and swelling. 
He was able to walk off the court with assistance. He has ice on the ankle. He has a history 
of a left ankle sprain 2 years ago that was treated with a brace. He has a game in 5 days 
and wants to know if he can play.`,

    historyOfPresentIllness: {
        mechanism: "Inversion injury landing from jump",
        onset: "Immediate pain and swelling",
        sound: "Audible 'pop' at time of injury",
        weightBearing: "Painful but able to walk with limp",
        swelling: "Immediate, worse over past 3 hours",
        priorInjuries: "Left ankle sprain 2 years ago - different ankle"
    },

    physicalExamination: {
        inspection: {
            swelling: "Moderate swelling lateral ankle, extending to dorsum",
            ecchymosis: "Early bruising inferior to lateral malleolus",
            deformity: "None"
        },
        palpation: {
            ATFL: "Point tender over ATFL (anterior to lateral malleolus)",
            CFL: "Mildly tender",
            posteriorMalleolus: "Non-tender",
            medialMalleolus: "Non-tender",
            base5thMet: "Non-tender",
            navicular: "Non-tender"
        },
        rangeOfMotion: {
            dorsiflexion: "Limited by pain and swelling",
            plantarflexion: "Limited",
            inversion: "Guarded, painful"
        },
        specialTests: {
            anteriorDrawer: "Mildly positive (increased translation vs left, soft endpoint)",
            talarTilt: "Mildly positive",
            squeeze: "Negative (syndesmosis intact)",
            externalRotation: "Negative"
        },
        neurovascular: "Intact distally"
    },

    ottawaAnkleRules: {
        bonePointTenderness: {
            posteriorMalleoli: "No",
            base5thMet: "No",
            navicular: "No"
        },
        abilityToWalk: "Yes - 4 steps immediately and in ED",
        xrayIndicated: "No - Ottawa rules negative"
    },

    classification: {
        system: "Lateral Ankle Sprain Grading",
        grade: "Grade II",
        criteria: "Partial ligament tear, moderate instability, functional impairment",
        ligamentsInvolved: "ATFL primarily, possible partial CFL"
    },

    treatmentPlan: {
        acute: {
            PRICE: [
                "Protection: Lace-up ankle brace or air stirrup",
                "Rest: Avoid aggravating activities 48-72 hours",
                "Ice: 20 minutes every 2-3 hours first 48-72 hours",
                "Compression: ACE wrap or compression sleeve",
                "Elevation: Above heart level when possible"
            ],
            weightBearing: "As tolerated with brace/support",
            analgesia: "NSAIDs PRN (Ibuprofen 400-600mg TID with food)"
        },
        rehabilitation: {
            phase1: {
                timing: "Days 1-7",
                goals: ["Control swelling", "Maintain ROM", "Protect healing tissues"],
                exercises: ["Ankle pumps", "Alphabet ROM", "Toe curls", "Towel scrunches"]
            },
            phase2: {
                timing: "Weeks 1-2",
                goals: ["Restore ROM", "Begin strengthening", "Normalize gait"],
                exercises: ["Theraband resistance 4-way", "Single leg stance", "Stationary bike"]
            },
            phase3: {
                timing: "Weeks 2-4",
                goals: ["Advance strengthening", "Proprioceptive training", "Begin sport-specific"],
                exercises: ["BAPS board", "Hopping progression", "Agility ladder", "Cutting drills"]
            },
            phase4: {
                timing: "Weeks 4-6",
                goals: ["Return to sport", "Prevent recurrence"],
                criteria: ["Full ROM", "80%+ strength vs uninvolved", "Functional testing passed"]
            }
        },
        returnToPlay: {
            timeline: "Grade II: typically 2-4 weeks with proper rehab",
            criteria: [
                "Full pain-free ROM",
                "Single leg hop test >85% of uninvolved",
                "Sport-specific movements without pain or instability",
                "Cleared by provider"
            ],
            bracing: "Lace-up ankle brace for 3-6 months during activity"
        }
    },

    prognosticDiscussion: {
        forPatient: "Grade II sprains typically return to sport in 2-4 weeks with proper rehabilitation",
        gameIn5Days: "Unlikely to be safe for full competition; may be able to practice light activities",
        chronicInstability: "20-40% risk if inadequate rehab; proprioceptive training reduces this"
    },

    keyTeachingPoints: [
        "Ottawa Ankle Rules have 98% sensitivity for fracture - use to avoid unnecessary X-rays",
        "ATFL is most commonly injured ligament (inversion mechanism)",
        "Syndesmosis injury ('high ankle sprain') requires different management - always assess",
        "Proprioceptive training is critical for preventing chronic instability",
        "Functional bracing during return to sport reduces re-injury risk",
        "Inadequate rehab is primary risk factor for recurrent sprains"
    ],

    evidenceBase: {
        guidelines: ["ACSM Ankle Sprain Guidelines", "NATA Position Statement on Ankle Injuries"],
        keyEvidence: [
            "Early mobilization superior to immobilization for Grade I-II",
            "Proprioceptive training reduces recurrence by 50%",
            "Brace use for 6 months post-injury reduces re-sprain risk"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "ankle-ligament-module", title: "Ankle Ligament Anatomy and Healing" },
        coachdx: { id: "dpm-sports-case", title: "Sports Injury Assessment" }
    }
},

// ============================================================================
// DPM-010: TARSAL TUNNEL SYNDROME
// ============================================================================
"DPM-010": {
    id: "DPM-010",
    title: "Tarsal Tunnel Syndrome",
    category: "Nerve Pathology",
    difficulty: "Advanced",
    profession: "dpm",
    
    patient: {
        name: "Eleanor Wright",
        age: 61,
        sex: "Female",
        medicalHistory: ["Rheumatoid arthritis", "Hypothyroidism"],
        setting: "Podiatry Clinic"
    },
    
    chiefComplaint: "Burning and tingling in the bottom of my foot, especially at night",
    
    clinicalScenario: `Mrs. Wright is a 61-year-old woman with rheumatoid arthritis who presents 
with 6 months of progressive burning, tingling, and numbness in her right heel and plantar 
foot. Symptoms are worse at night and after prolonged standing. She has tried orthotics for 
presumed plantar fasciitis without improvement. She also notes her RA has been flaring with 
increased ankle swelling.`,

    historyOfPresentIllness: {
        onset: "Gradual over 6 months",
        location: "Plantar heel, extending to medial arch and toes",
        character: "Burning, tingling, numbness, 'electric shocks'",
        severity: "5-7/10",
        timing: "Worse at night, after prolonged standing",
        aggravating: "Standing, walking, end of day",
        relieving: "Rest, elevation, sometimes shaking foot",
        priorTreatment: "Orthotics for 'plantar fasciitis' - no improvement"
    },

    physicalExamination: {
        inspection: {
            hindfoot: "Mild valgus alignment",
            swelling: "Fullness posterior to medial malleolus",
            atrophy: "Subtle abductor hallucis atrophy compared to left"
        },
        palpation: {
            tarsalTunnel: "Tenderness posterior-inferior to medial malleolus",
            tinel: "Positive - reproduction of plantar paresthesias with tapping",
            plantarFascia: "Non-tender"
        },
        sensory: {
            plantarHeel: "Decreased to light touch (medial calcaneal nerve distribution)",
            plantarMedialForefoot: "Decreased (medial plantar nerve)",
            plantarLateralForefoot: "Mildly decreased (lateral plantar nerve)",
            dorsum: "Intact"
        },
        motor: {
            abductorHallucis: "4/5 weakness (medial plantar)",
            intrinsics: "Mild weakness with toe spread"
        },
        specialTests: {
            tinel: "Positive at tarsal tunnel",
            dorsflexionEversion: "Positive - reproduces symptoms after 30 seconds",
            vallusStressTest: "Negative"
        },
        vascularExam: "Pulses 2+, no edema"
    },

    differentialDiagnosis: [
        { diagnosis: "Tarsal Tunnel Syndrome", likelihood: "Most Likely", reasoning: "Classic distribution, positive Tinel, sensory changes in tibial nerve territory" },
        { diagnosis: "Plantar Fasciitis", likelihood: "Less Likely", reasoning: "Plantar fascia non-tender, symptoms are neurogenic, not mechanical" },
        { diagnosis: "Peripheral Neuropathy", likelihood: "Consider", reasoning: "But distribution is unilateral and follows tibial nerve" },
        { diagnosis: "S1 Radiculopathy", likelihood: "Consider", reasoning: "Would have more proximal symptoms, positive SLR" },
        { diagnosis: "Baxter's Neuropathy", likelihood: "Consider", reasoning: "Branch of lateral plantar - would be more localized to heel" }
    ],

    diagnosticWorkup: {
        electrodiagnostics: {
            indication: "Confirm diagnosis, assess severity, rule out polyneuropathy",
            findings: "Prolonged distal motor latency tibial nerve, reduced sensory amplitudes",
            expectedResults: "Abnormal in 70-80% of clinical TTS"
        },
        MRI: {
            indication: "Identify space-occupying lesions",
            findings: "May show ganglion, varicosities, tenosynovitis, or mass"
        },
        labWork: {
            indication: "Identify underlying causes",
            tests: ["TSH (hypothyroidism)", "RF, anti-CCP (RA activity)", "HbA1c (diabetes)", "Vitamin B12"]
        }
    },

    diagnosis: {
        primary: "Tarsal Tunnel Syndrome - Right",
        etiology: "Likely secondary to RA-related tenosynovitis causing nerve compression",
        classification: "Compression neuropathy of posterior tibial nerve"
    },

    treatmentPlan: {
        conservative: {
            firstLine: [
                {
                    intervention: "Treat Underlying Condition",
                    specifics: "Optimize RA management with rheumatology",
                    rationale: "Tenosynovitis likely contributing to compression"
                },
                {
                    intervention: "Orthotic Modification",
                    specifics: "Medial heel wedge to reduce hindfoot valgus",
                    rationale: "Valgus position increases tarsal tunnel pressure"
                },
                {
                    intervention: "Night Splinting",
                    specifics: "Neutral ankle position",
                    rationale: "Reduces nocturnal nerve irritation"
                },
                {
                    intervention: "Activity Modification",
                    specifics: "Avoid prolonged standing",
                    rationale: "Reduces repetitive nerve stress"
                }
            ],
            secondLine: [
                {
                    intervention: "Corticosteroid Injection",
                    technique: "Ultrasound-guided into tarsal tunnel",
                    expectedResponse: "50-60% temporary improvement",
                    caution: "Diagnostic and therapeutic"
                },
                {
                    intervention: "Physical Therapy",
                    focus: ["Nerve gliding", "Gastrocnemius stretching", "Foot intrinsic strengthening"]
                }
            ],
            medications: [
                "Gabapentin or pregabalin for neuropathic pain",
                "Topical lidocaine patches for localized symptoms"
            ]
        },
        surgical: {
            indication: "Failed 3-6 months conservative treatment, progressive weakness",
            procedure: "Tarsal Tunnel Release (decompression of flexor retinaculum)",
            success: "70-85% improvement",
            considerations: "Better outcomes if space-occupying lesion identified and removed"
        }
    },

    keyTeachingPoints: [
        "Tarsal tunnel syndrome is often misdiagnosed as plantar fasciitis",
        "Key differentiator: TTS has neurogenic symptoms (burning, tingling), PF has mechanical pain",
        "Tinel's sign at tarsal tunnel is highly suggestive",
        "Hindfoot valgus increases tarsal tunnel pressure - orthotics can help",
        "Underlying causes (RA, ganglion, varicosities, diabetes) should be investigated",
        "Electrodiagnostics helpful but can be normal in 20-30%"
    ],

    evidenceBase: {
        guidelines: ["ACFAS Nerve Entrapment Guidelines"],
        keyEvidence: [
            "Conservative management effective in 40-60%",
            "Surgical decompression: 75-85% good/excellent outcomes",
            "Outcomes better when identifiable cause found and treated"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "nerve-entrapment-module", title: "Peripheral Nerve Entrapment" },
        coachdx: { id: "dpm-nerve-case", title: "Lower Extremity Nerve Pain" }
    }
}

};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = REASONDX_PODIATRY_CASES_EXPANDED;
}
if (typeof window !== 'undefined') {
    window.REASONDX_PODIATRY_CASES_EXPANDED = REASONDX_PODIATRY_CASES_EXPANDED;
    // Merge with original if exists
    if (window.REASONDX_PODIATRY_CASES) {
        Object.assign(window.REASONDX_PODIATRY_CASES, REASONDX_PODIATRY_CASES_EXPANDED);
    }
}

console.log('[ReasonDx-Podiatry-Expanded] Loaded ' + Object.keys(REASONDX_PODIATRY_CASES_EXPANDED).length + ' additional podiatry cases');
