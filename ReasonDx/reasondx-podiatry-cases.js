/**
 * REASONDX PODIATRY CASES
 * Foot/Ankle Diagnosis & Treatment Planning
 * 
 * Podiatry-Specific Reasoning Framework:
 * Localize → Vascular/Neuro Assessment → Diagnose → Conservative vs Surgical
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 */

const REASONDX_PODIATRY_CASES = {

// ============================================================
// DPM-001: Diabetic Foot Ulcer
// ============================================================
"DPM-001": {
    id: "DPM-001",
    title: "Diabetic Foot Ulcer Assessment",
    category: "Diabetic Foot",
    profession: "dpm",
    difficulty: "intermediate",
    
    patient: {
        name: "George Williams",
        age: 62,
        sex: "Male",
        chiefComplaint: "Non-healing wound on bottom of right foot for 3 weeks"
    },
    
    presentation: {
        history: "62-year-old male with type 2 diabetes x 15 years presents with wound under right first metatarsal head for 3 weeks. Patient noticed it when he saw blood on his sock. Denies trauma. No fever or chills.",
        medicalHistory: ["Type 2 DM (A1c 8.9%)", "Hypertension", "Hyperlipidemia", "Peripheral neuropathy"],
        medications: ["Metformin", "Glipizide", "Lisinopril", "Atorvastatin"]
    },
    
    examination: {
        vascularExam: {
            DPpulse: "1+ right, 2+ left",
            PTpulse: "1+ right, 2+ left",
            ABI: { right: 0.85, left: 0.92 }
        },
        neurologicExam: {
            monofilament: "Unable to detect 5.07 monofilament at 8/10 sites bilateral",
            vibration: "Absent at great toes",
            protectiveSensation: "Lost bilateral"
        },
        woundAssessment: {
            location: "Plantar first metatarsal head, right",
            size: "2.0 cm x 1.5 cm x 0.3 cm depth",
            woundBed: "75% granulation, 25% slough",
            probeTobone: "Negative"
        }
    },
    
    classification: {
        wagnerGrade: "Grade 1 - Superficial ulcer",
        texasClassification: "1A - Superficial, non-infected, non-ischemic"
    },
    
    podiatricDiagnosis: {
        primary: "Diabetic neuropathic plantar ulcer, Wagner Grade 1, Texas 1A",
        contributing: ["Peripheral neuropathy", "Plantar metatarsal head prominence", "Inadequate offloading"]
    },
    
    treatmentPlan: {
        offloading: "Total contact cast or removable cast walker",
        woundCare: "Sharp debridement, moist wound healing dressing",
        medicalOptimization: ["Glucose control", "Vascular optimization"],
        followUp: "Weekly until healed"
    },
    
    teachingPoints: [
        "Neuropathic ulcers occur at pressure points (metatarsal heads, heel)",
        "Probe to bone test: if positive, 89% likely osteomyelitis",
        "Offloading is the most important intervention for neuropathic ulcers",
        "Lost protective sensation = lifetime risk of foot problems"
    ]
},

// ============================================================
// DPM-002: Plantar Fasciitis
// ============================================================
"DPM-002": {
    id: "DPM-002",
    title: "Heel Pain - Plantar Fasciitis vs Stress Fracture",
    category: "Sports/Overuse",
    profession: "dpm",
    difficulty: "beginner",
    
    patient: {
        name: "Maria Santos",
        age: 45,
        sex: "Female",
        occupation: "Teacher",
        chiefComplaint: "Right heel pain for 6 weeks"
    },
    
    presentation: {
        history: "45-year-old female with 6 weeks of right heel pain. Worse with first steps in morning. Recently started walking program.",
        aggravating: ["First steps in morning", "Standing >30 minutes", "Walking barefoot"],
        easing: ["Rest", "Stretching helps after a few steps"]
    },
    
    examination: {
        palpation: {
            plantarFascia: "Tender at medial calcaneal tubercle",
            calcaneus: "No tenderness with calcaneal squeeze"
        },
        rom: {
            ankleDF: "5 degrees (limited - equinus present)"
        },
        specialTests: {
            windlassTest: "Positive",
            calcaneusSqueezeTest: "Negative"
        }
    },
    
    differentialDiagnosis: [
        { diagnosis: "Plantar fasciitis", likelihood: "high", reasoning: "Classic presentation - morning pain, positive windlass" },
        { diagnosis: "Calcaneal stress fracture", likelihood: "low", reasoning: "Negative calcaneal squeeze" },
        { diagnosis: "Tarsal tunnel syndrome", likelihood: "low", reasoning: "No paresthesias, negative Tinel's" }
    ],
    
    podiatricDiagnosis: {
        primary: "Plantar fasciitis, right foot",
        contributing: ["Gastrocnemius equinus", "Overpronation", "Increased activity"]
    },
    
    treatmentPlan: {
        conservative: {
            stretching: "Plantar fascia-specific and gastrocnemius stretching",
            orthotics: "Prefabricated with medial arch support",
            footwear: "Supportive shoes with cushioned heel",
            nightSplint: "Dorsiflexion night splint"
        },
        secondLine: ["Corticosteroid injection", "ESWT", "Physical therapy"]
    },
    
    teachingPoints: [
        "Heel spurs don't cause plantar fasciitis",
        "Calcaneal squeeze test differentiates stress fracture from fasciitis",
        "Windlass test: passive great toe dorsiflexion reproduces pain",
        "90% success with conservative care"
    ]
},

// ============================================================
// DPM-003: Hallux Valgus (Bunion)
// ============================================================
"DPM-003": {
    id: "DPM-003",
    title: "Hallux Valgus (Bunion) Evaluation",
    category: "Forefoot Deformity",
    profession: "dpm",
    difficulty: "intermediate",
    
    patient: {
        name: "Patricia O'Brien",
        age: 58,
        sex: "Female",
        chiefComplaint: "Painful bump on inside of right foot"
    },
    
    presentation: {
        history: "58-year-old female with progressive deformity and pain at right first MTP joint. Pain over medial eminence with shoe wear.",
        functionalLimitation: "Cannot wear dress shoes, limited walking distance"
    },
    
    examination: {
        inspection: {
            deformity: "Prominent medial eminence, hallux deviated laterally",
            lesserToes: "Hammertoe 2nd digit"
        },
        biomechanics: {
            firstRay: "Hypermobile",
            hindfoot: "Mild pes planus"
        }
    },
    
    radiographicEvaluation: {
        measurements: {
            HVangle: "32 degrees (normal <15)",
            IMAangle: "14 degrees (normal <9)"
        },
        classification: "Moderate hallux valgus"
    },
    
    treatmentPlan: {
        conservative: {
            footwear: "Wide toe box, low heel",
            padding: "Bunion pad/shield",
            orthotics: "Custom orthotics to control pronation"
        },
        surgical: {
            indication: "Failed conservative care",
            procedure: "Scarf osteotomy with distal soft tissue release"
        }
    },
    
    teachingPoints: [
        "HVA and IMA angles guide surgical procedure selection",
        "First ray hypermobility may indicate need for Lapidus procedure",
        "Bunion splints won't correct deformity in adults",
        "85-90% satisfaction rate with appropriate surgery"
    ]
},

// ============================================================
// DPM-004: Ingrown Toenail
// ============================================================
"DPM-004": {
    id: "DPM-004",
    title: "Ingrown Toenail with Paronychia",
    category: "Nail Disorders",
    profession: "dpm",
    difficulty: "beginner",
    
    patient: {
        name: "Tyler Jackson",
        age: 19,
        sex: "Male",
        chiefComplaint: "Painful right great toe for 1 week"
    },
    
    presentation: {
        history: "19-year-old male runner with 1 week of right great toe pain after cutting nails short. Toe red, swollen, draining pus.",
        medicalHistory: "Healthy, no diabetes"
    },
    
    examination: {
        inspection: {
            toeAppearance: "Medial nail fold erythematous, swollen",
            drainage: "Purulent drainage from medial nail fold",
            granulationTissue: "Present at medial nail fold"
        },
        classification: "Stage 2 - Infection with granulation tissue"
    },
    
    podiatricDiagnosis: {
        primary: "Ingrown toenail stage 2 with paronychia, right hallux",
        etiology: "Improper nail cutting, tight shoes"
    },
    
    treatmentPlan: {
        procedure: "Partial nail avulsion with phenol matrixectomy",
        antibiotics: "Cephalexin 500mg QID x 7 days",
        postProcedure: "Epsom salt soaks, daily dressing changes"
    },
    
    teachingPoints: [
        "Stage 1: Pain, erythema → conservative care",
        "Stage 2: Infection, granulation → partial nail avulsion with matrixectomy",
        "Phenol matrixectomy reduces recurrence to <5%",
        "Always perform matrixectomy with avulsion to prevent recurrence"
    ]
},

// ============================================================
// DPM-005: Charcot Foot
// ============================================================
"DPM-005": {
    id: "DPM-005",
    title: "Acute Charcot Foot",
    category: "Diabetic Foot",
    profession: "dpm",
    difficulty: "advanced",
    
    patient: {
        name: "James Thompson",
        age: 55,
        sex: "Male",
        chiefComplaint: "Red, swollen left foot for 2 weeks"
    },
    
    presentation: {
        history: "55-year-old male with type 2 diabetes x 20 years presents with red, warm, swollen left foot. Minimal pain despite appearance. No improvement with oral antibiotics for presumed cellulitis.",
        medicalHistory: ["Type 2 DM (A1c 9.2%)", "Peripheral neuropathy", "CKD stage 3"]
    },
    
    examination: {
        inspection: {
            swelling: "Diffuse swelling left midfoot",
            erythema: "Diffuse warmth and redness",
            deformity: "Early rocker-bottom appearance"
        },
        palpation: {
            temperature: "Left midfoot significantly warmer than right (>2°C difference)",
            tenderness: "Minimal despite appearance"
        },
        neurologicExam: {
            sensation: "Absent to monofilament bilateral"
        }
    },
    
    keyFinding: "Red, hot, swollen foot + neuropathy + minimal pain = Charcot until proven otherwise",
    
    diagnosticWorkup: {
        xrayFindings: [
            "Subluxation at Lisfranc joints",
            "Fragmentation of midfoot bones",
            "Early arch collapse"
        ]
    },
    
    classification: {
        eichenholtzStage: "Stage 1 - Development (acute)",
        anatomicPattern: "Sanders Type II - Tarsometatarsal (Lisfranc)"
    },
    
    podiatricDiagnosis: {
        primary: "Acute Charcot neuroarthropathy, left, Stage 1",
        urgency: "Urgent - requires immediate offloading"
    },
    
    treatmentPlan: {
        acute: {
            offloading: "Total contact cast (TCC) - ESSENTIAL",
            duration: "Until consolidation (3-6 months)"
        },
        monitoring: {
            temperatureMonitoring: "Goal <2°C difference from contralateral",
            imaging: "Serial X-rays monthly"
        }
    },
    
    teachingPoints: [
        "Think Charcot in any diabetic with neuropathy and red, hot, swollen foot",
        "Pain is often minimal ('pain-swelling disparity')",
        "Misdiagnosis as cellulitis is common",
        "Early TCC can prevent permanent deformity",
        "Midfoot (Lisfranc) is most common location",
        "50% of patients develop contralateral Charcot"
    ]
}

};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = REASONDX_PODIATRY_CASES;
}
if (typeof window !== 'undefined') {
    window.REASONDX_PODIATRY_CASES = REASONDX_PODIATRY_CASES;
}

console.log('[ReasonDx-Podiatry] Loaded ' + Object.keys(REASONDX_PODIATRY_CASES).length + ' podiatry cases');
