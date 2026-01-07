/**
 * REASONDX PHYSICAL THERAPY CASES
 * Movement System Diagnosis & Rehabilitation Assessment
 * 
 * PT-Specific Reasoning Framework:
 * Systems Review → Tests & Measures → PT Diagnosis → Prognosis → Plan of Care
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 */

const REASONDX_PT_CASES = {

// ============================================================
// PT-001: Low Back Pain with Radiculopathy
// ============================================================
"PT-001": {
    id: "PT-001",
    title: "Low Back Pain with Radicular Symptoms",
    category: "Musculoskeletal - Spine",
    profession: "pt",
    difficulty: "intermediate",
    
    patient: {
        name: "Robert Martinez",
        age: 45,
        sex: "Male",
        occupation: "Warehouse worker",
        chiefComplaint: "Low back pain radiating to left leg for 3 weeks"
    },
    
    presentation: {
        history: "45-year-old warehouse worker with 3 weeks of low back pain radiating down the posterior left thigh to the calf. Pain worse with sitting and bending forward. Reports numbness in lateral foot. Lifting heavy boxes at work when symptoms started. No bowel/bladder changes. No fever or weight loss.",
        vitalSigns: {
            BP: "128/82",
            HR: 76,
            temp: "98.4°F",
            height: "5'10\"",
            weight: "195 lbs",
            BMI: 28
        }
    },
    
    systemsReview: {
        cardiovascular: "No limitations",
        pulmonary: "No limitations",
        integumentary: "Intact",
        musculoskeletal: "See examination",
        neuromuscular: "See examination",
        communication: "Alert, oriented, good historian",
        cognition: "Intact",
        psychosocial: "Anxious about missing work, fear-avoidance behaviors noted"
    },
    
    examination: {
        observation: "Antalgic gait favoring right, loss of lumbar lordosis, left lateral shift",
        arom: {
            lumbarFlexion: "50% limited, increases leg symptoms",
            lumbarExtension: "75% limited, centralizes symptoms",
            lumbarSidebend: "Left limited, right full",
            lumbarRotation: "Bilateral mildly limited"
        },
        palpation: "Tenderness L4-S1 paraspinals left > right, no step-off",
        neurological: {
            strength: "Left ankle dorsiflexion 4/5, EHL 4/5, hip abduction 5/5",
            reflexes: "Achilles diminished left, patellar 2+ bilateral",
            sensation: "Decreased light touch lateral left foot (S1 distribution)"
        },
        specialTests: {
            SLR: "Positive left at 40 degrees (reproduces leg pain)",
            slump: "Positive left",
            proneLegRaise: "Negative bilateral",
            crossedSLR: "Negative"
        }
    },
    
    ptDifferential: [
        { diagnosis: "Lumbar radiculopathy L5-S1 (disc herniation)", likelihood: "high", reasoning: "Dermatomal pattern, positive neural tension tests, weakness pattern" },
        { diagnosis: "Lumbar spinal stenosis", likelihood: "low", reasoning: "Age atypical, flexion worsens (stenosis usually relieved by flexion)" },
        { diagnosis: "Piriformis syndrome", likelihood: "low", reasoning: "Neural tension tests positive, dermatomal weakness pattern" },
        { diagnosis: "Sacroiliac dysfunction", likelihood: "low", reasoning: "Dermatomal symptoms, neural tension positive" }
    ],
    
    redFlags: {
        present: false,
        checklist: [
            { flag: "Cauda equina (bowel/bladder)", status: "absent" },
            { flag: "Progressive neurological deficit", status: "absent - stable" },
            { flag: "Infection signs", status: "absent" },
            { flag: "Malignancy signs", status: "absent" },
            { flag: "Fracture risk", status: "low - no trauma" }
        ]
    },
    
    ptDiagnosis: {
        primary: "Lumbar radiculopathy with movement system impairment",
        icfModel: {
            bodyFunction: "Pain, decreased ROM, decreased strength L ankle DF/EHL, decreased sensation S1",
            activityLimitation: "Unable to sit >20 min, limited bending, difficulty with lifting",
            participationRestriction: "Unable to work, limited household activities"
        },
        movementSystemDiagnosis: "Lumbar movement coordination impairment with radiating pain"
    },
    
    prognosis: {
        timeframe: "6-8 weeks for functional improvement",
        factors: {
            positive: ["No red flags", "Symptoms centralize with extension", "Motivated patient"],
            negative: ["Fear-avoidance behaviors", "Physical job demands", "3-week duration"]
        },
        expectedOutcome: "Good - expect return to modified work in 4 weeks, full duty 8-12 weeks"
    },
    
    planOfCare: {
        frequency: "2x/week for 4 weeks, then reassess",
        interventions: [
            "Directional preference exercises (extension-based)",
            "Neural mobilization/nerve glides",
            "Core stabilization progression",
            "Patient education on posture, body mechanics",
            "Fear-avoidance addressed through graded activity"
        ],
        patientEducation: [
            "Directional preference concept",
            "Activity modification vs. bed rest",
            "When to seek emergency care (cauda equina signs)"
        ],
        goals: {
            shortTerm: ["Centralize symptoms in 2 weeks", "Sit 30 min without increased leg pain"],
            longTerm: ["Return to full work duties", "Independent HEP", "Oswestry <20%"]
        }
    },
    
    evidenceBase: {
        guidelines: ["APTA Clinical Practice Guideline: Low Back Pain (2021)"],
        keyEvidence: [
            "Directional preference exercises effective for radiculopathy",
            "Neural mobilization adjunct to exercise",
            "Fear-avoidance addressing improves outcomes"
        ]
    },
    
    teachingPoints: [
        "Centralization is a positive prognostic indicator",
        "Red flag screening is essential before beginning PT",
        "S1 radiculopathy: ankle DF weakness, Achilles reflex, lateral foot sensation",
        "Fear-avoidance beliefs predict chronic disability more than imaging findings"
    ]
},

// ============================================================
// PT-002: Post-ACL Reconstruction
// ============================================================
"PT-002": {
    id: "PT-002",
    title: "ACL Reconstruction - 6 Weeks Post-Op",
    category: "Musculoskeletal - Knee",
    profession: "pt",
    difficulty: "intermediate",
    
    patient: {
        name: "Jessica Thompson",
        age: 22,
        sex: "Female",
        occupation: "College soccer player",
        chiefComplaint: "Status post left ACL reconstruction, 6 weeks"
    },
    
    presentation: {
        history: "22-year-old college soccer player, 6 weeks post left ACL reconstruction (BTB autograft) after non-contact pivot injury. Tolerated surgery well. Has been doing home exercises. Wants to return to soccer.",
        surgicalDetails: {
            procedure: "ACL reconstruction with bone-patellar tendon-bone autograft",
            surgeon: "Dr. Smith, Sports Medicine",
            concomitant: "Partial medial meniscectomy",
            complications: "None"
        },
        currentStatus: "Ambulating without assistive device, mild limp, knee stiffness"
    },
    
    examination: {
        observation: "Mild effusion left knee, well-healed incisions, slight quad atrophy",
        gait: "Antalgic, decreased stance time left, limited knee flexion in swing",
        rom: {
            flexion: "0-105 degrees (goal >125)",
            extension: "0 degrees (full, matches right)",
            patellarMobility: "Mildly restricted inferior glide"
        },
        strength: {
            quadriceps: "3+/5 (significant deficit)",
            hamstrings: "4/5",
            hipAbductors: "4/5",
            hipExtensors: "4/5"
        },
        specialTests: {
            lachman: "Deferred (graft healing)",
            effusion: "Trace to 1+",
            patellarGrind: "Mild crepitus, no pain"
        },
        functionalTests: {
            singleLegStance: "Unable >10 seconds",
            stepDown: "Poor control, valgus collapse",
            squat: "Limited by ROM and quad weakness"
        }
    },
    
    currentPhase: {
        phase: "Phase 2 - Early Strengthening",
        weekPostOp: 6,
        criteria: {
            met: ["Full extension", "Ambulating without AD", "Wound healed"],
            notMet: ["Flexion >125", "Quad strength >70% limb symmetry", "No effusion"]
        }
    },
    
    ptDiagnosis: {
        primary: "Status post ACL reconstruction with impaired knee mobility and strength",
        icfModel: {
            bodyFunction: "Limited knee flexion ROM, quadriceps weakness, trace effusion",
            activityLimitation: "Abnormal gait, unable to negotiate stairs normally, cannot squat",
            participationRestriction: "Cannot participate in sports, limited recreational activities"
        }
    },
    
    prognosis: {
        returnToSport: "9-12 months post-op with successful rehab",
        factors: {
            positive: ["Young", "Motivated", "Full extension achieved", "No complications"],
            negative: ["BTB graft (anterior knee pain risk)", "Meniscus involvement", "Female athlete (higher re-tear risk)"]
        }
    },
    
    planOfCare: {
        frequency: "2-3x/week",
        currentPhaseGoals: [
            "Achieve full flexion ROM (>130 degrees)",
            "Resolve effusion",
            "Quad strength >60% LSI",
            "Normal gait pattern"
        ],
        interventions: [
            "ROM exercises (heel slides, wall slides, bike)",
            "Patellar mobilization",
            "Quad strengthening (isometrics → CKC → progressive resistance)",
            "Hip strengthening (preventing dynamic valgus)",
            "Gait training",
            "Aquatic therapy if available"
        ],
        returnToSportCriteria: [
            "Quad/hamstring strength >90% LSI",
            "Single leg hop tests >90% LSI",
            "No effusion with activity",
            "Pass functional movement screening",
            "Psychological readiness (ACL-RSI >60)"
        ]
    },
    
    evidenceBase: {
        guidelines: ["MOON Group ACL Rehabilitation Protocol", "APTA Knee CPG"],
        keyEvidence: [
            "Quad strength LSI predictor of outcomes",
            "Psychological readiness correlates with re-injury risk",
            "9+ months before RTS reduces re-tear risk"
        ]
    },
    
    teachingPoints: [
        "Quadriceps strength is the most important modifiable factor for outcomes",
        "Female athletes have 4-6x higher ACL re-tear risk",
        "Psychological readiness (fear of re-injury) must be addressed",
        "Time-based AND criteria-based progression both matter",
        "Dynamic valgus control essential - hip strengthening critical"
    ]
},

// ============================================================
// PT-003: Stroke Rehabilitation Assessment
// ============================================================
"PT-003": {
    id: "PT-003",
    title: "Acute Stroke Rehabilitation Assessment",
    category: "Neurological",
    profession: "pt",
    difficulty: "advanced",
    
    patient: {
        name: "Harold Washington",
        age: 68,
        sex: "Male",
        setting: "Inpatient Rehabilitation",
        chiefComplaint: "Left hemiparesis following right MCA stroke, day 7"
    },
    
    presentation: {
        history: "68-year-old male with HTN and AFib (not on anticoagulation) who suffered right MCA ischemic stroke 7 days ago. Received tPA within window. Left-sided weakness and neglect noted. Transferred to inpatient rehab.",
        medicalHistory: ["Hypertension", "Atrial fibrillation", "Type 2 diabetes", "Hyperlipidemia"],
        medications: ["Apixaban (new)", "Lisinopril", "Metformin", "Atorvastatin", "Aspirin"],
        priorFunction: "Independent in all ADLs, drove, lived with wife"
    },
    
    examination: {
        cognition: {
            alertness: "Alert",
            orientation: "Oriented x3",
            attention: "Decreased, left neglect present",
            neglect: "Positive line bisection, cancellation tests"
        },
        motor: {
            leftUE: "2/5 proximal, 1/5 distal (trace finger movement)",
            leftLE: "3/5 hip flexion, 3/5 knee extension, 2/5 ankle DF",
            rightSide: "5/5 throughout",
            tone: "Left UE/LE flaccid, no spasticity yet"
        },
        sensation: {
            leftSide: "Decreased light touch and proprioception",
            rightSide: "Intact"
        },
        balance: {
            sitting: "Moderate assist for static, max assist for dynamic",
            standing: "Max assist x2"
        },
        mobility: {
            bedMobility: "Moderate assist",
            transfers: "Max assist x1",
            ambulation: "Not yet assessed"
        },
        functionalScores: {
            NIHSS: 12,
            FIM: 45,
            bergBalance: "Unable to complete (sitting balance insufficient)"
        }
    },
    
    ptDiagnosis: {
        primary: "Right MCA stroke with left hemiparesis and left neglect",
        icfModel: {
            bodyFunction: "Left hemiparesis, sensory loss, left neglect, impaired balance",
            activityLimitation: "Dependent mobility, cannot ambulate, cannot perform ADLs independently",
            participationRestriction: "Cannot live independently, cannot drive, cannot work"
        },
        prognosticIndicators: {
            positive: ["Some LE movement", "Alert and oriented", "Early rehab admission", "Supportive family"],
            negative: ["Left neglect", "Minimal hand movement", "AFib (embolic source)", "Age"]
        }
    },
    
    prognosis: {
        expectedOutcome: "Guarded for independent ambulation, likely need supervision/assist",
        dischargeDisposition: "Home with family and home health PT vs. SNF",
        factors: "Left neglect significantly impacts prognosis and safety"
    },
    
    planOfCare: {
        frequency: "Daily PT, 3 hours total therapy/day (Medicare IRF requirement)",
        shortTermGoals: [
            "Sitting balance mod I static, min A dynamic in 1 week",
            "Supine ↔ sit with min A in 1 week",
            "Stand with mod A x1 in 1 week"
        ],
        longTermGoals: [
            "Ambulate 150 ft with least restrictive AD, CGA in 2 weeks",
            "Transfers with supervision in 2 weeks",
            "Discharge to home with appropriate support"
        ],
        interventions: [
            "Task-specific training (mobility, transfers)",
            "Balance training progression",
            "Gait training with body weight support initially",
            "Left neglect strategies (visual scanning, cuing)",
            "LE strengthening",
            "Family training for home program and safety"
        ],
        precautions: [
            "Fall risk - supervision at all times",
            "Left neglect - approach from right, cue to scan left",
            "New anticoagulation - monitor for bleeding"
        ]
    },
    
    evidenceBase: {
        guidelines: ["AHA/ASA Stroke Rehabilitation Guidelines 2016", "APTA Stroke CPG"],
        keyEvidence: [
            "Early mobilization improves outcomes",
            "Task-specific, high-repetition training most effective",
            "Left neglect associated with poorer functional outcomes"
        ]
    },
    
    teachingPoints: [
        "Left neglect (right hemisphere) often worse prognosis than right neglect",
        "FIM score predicts discharge disposition",
        "First 3 months post-stroke show greatest recovery potential",
        "Task-specific training superior to impairment-based approaches",
        "Family training essential for successful home discharge"
    ]
},

// ============================================================
// PT-004: Shoulder Impingement
// ============================================================
"PT-004": {
    id: "PT-004",
    title: "Shoulder Pain - Rotator Cuff Impingement",
    category: "Musculoskeletal - Upper Extremity",
    profession: "pt",
    difficulty: "beginner",
    
    patient: {
        name: "Linda Foster",
        age: 52,
        sex: "Female",
        occupation: "Office worker/swimmer",
        chiefComplaint: "Right shoulder pain for 2 months"
    },
    
    presentation: {
        history: "52-year-old recreational swimmer with 2 months of right shoulder pain. Pain with overhead activities and swimming freestyle. Worse at night lying on right side. No trauma. Gradually worsening despite rest from swimming.",
        aggravating: ["Overhead reaching", "Swimming", "Lying on right side", "Reaching behind back"],
        easing: ["Rest", "Ice", "NSAIDs help temporarily"]
    },
    
    examination: {
        observation: "Mild forward head posture, rounded shoulders bilateral",
        arom: {
            flexion: "160° with painful arc 70-120°",
            abduction: "150° with painful arc 60-120°",
            externalRotation: "45° (limited)",
            internalRotation: "T12 (limited vs L5 left)"
        },
        strength: {
            supraspinatus: "4/5 painful",
            infraspinatus: "4+/5",
            subscapularis: "4+/5",
            serratus: "4/5 with mild winging"
        },
        specialTests: {
            neer: "Positive",
            hawkinsKennedy: "Positive",
            emptyCanJobe: "Positive (pain, mild weakness)",
            dropArm: "Negative",
            speedTest: "Negative",
            scapularDyskinesis: "Present - Type II pattern"
        },
        cervicalScreen: "Full ROM, no radicular symptoms, negative Spurling"
    },
    
    ptDifferential: [
        { diagnosis: "Subacromial impingement syndrome", likelihood: "high", reasoning: "Painful arc, positive impingement tests, no full-thickness tear signs" },
        { diagnosis: "Rotator cuff tendinopathy", likelihood: "high", reasoning: "Overuse mechanism, gradual onset, painful with resistance" },
        { diagnosis: "Full-thickness rotator cuff tear", likelihood: "low", reasoning: "No significant weakness, negative drop arm" },
        { diagnosis: "Adhesive capsulitis", likelihood: "low", reasoning: "Not significantly restricted passive ROM" }
    ],
    
    ptDiagnosis: {
        primary: "Subacromial impingement with rotator cuff tendinopathy",
        contributingFactors: [
            "Scapular dyskinesis",
            "Posterior capsule tightness (limited IR)",
            "Postural dysfunction",
            "Overuse (swimming)"
        ]
    },
    
    prognosis: {
        timeframe: "6-12 weeks for significant improvement",
        expectedOutcome: "Good - expect return to swimming with modifications"
    },
    
    planOfCare: {
        frequency: "2x/week for 6 weeks",
        interventions: [
            "Posterior capsule stretching (sleeper stretch, cross-body)",
            "Rotator cuff strengthening (ER/IR progression)",
            "Scapular stabilization exercises",
            "Postural correction",
            "Activity modification (swimming technique)",
            "Manual therapy: posterior capsule mobilization, soft tissue"
        ],
        goals: {
            shortTerm: ["Decrease pain 50% in 3 weeks", "Sleep through night"],
            longTerm: ["Return to swimming pain-free", "Full AROM", "5/5 RC strength"]
        }
    },
    
    teachingPoints: [
        "Scapular dyskinesis is common contributor to impingement",
        "Posterior capsule tightness leads to anterior-superior humeral head migration",
        "Rotator cuff strengthening should progress from isometric → isotonic → functional",
        "Swimming technique modification essential for swimmers"
    ]
},

// ============================================================
// PT-005: Balance and Fall Risk Assessment
// ============================================================
"PT-005": {
    id: "PT-005",
    title: "Geriatric Balance Assessment - Fall Prevention",
    category: "Geriatric/Balance",
    profession: "pt",
    difficulty: "intermediate",
    
    patient: {
        name: "Dorothy Chen",
        age: 78,
        sex: "Female",
        setting: "Outpatient",
        chiefComplaint: "2 falls in past 3 months, fear of falling"
    },
    
    presentation: {
        history: "78-year-old female with 2 falls in past 3 months. First fall in bathroom, second reaching for something on high shelf. No injuries requiring medical attention. Now afraid to leave house alone. Uses cane inconsistently.",
        medicalHistory: ["Hypertension", "Osteoarthritis bilateral knees", "Cataracts (surgery pending)", "Vitamin D deficiency"],
        medications: ["Lisinopril", "Acetaminophen PRN", "Vitamin D", "Calcium"],
        socialHistory: "Lives alone in 2-story home, daughter lives nearby"
    },
    
    examination: {
        vitalSigns: {
            BPSitting: "138/82",
            BPStanding: "128/78 (no orthostasis)",
            HR: 72
        },
        vision: "Corrected with glasses, cataract surgery scheduled",
        vestibular: {
            headImpulse: "Negative",
            dizziness: "Reports occasional lightheadedness with position changes"
        },
        strength: {
            hipFlexors: "4/5 bilateral",
            hipAbductors: "3+/5 bilateral",
            kneeExtensors: "4/5 bilateral",
            ankleDF: "4/5 bilateral"
        },
        sensation: {
            lightTouch: "Intact feet",
            proprioception: "Mildly decreased great toes"
        },
        balanceTests: {
            bergBalance: 42,
            timedUpAndGo: "14 seconds",
            fourSquareStep: "18 seconds",
            singleLegStance: "8 seconds eyes open, 2 seconds eyes closed",
            functionalReach: "7 inches"
        },
        gait: {
            speed: "0.9 m/s (below 1.0 cutoff)",
            observation: "Narrow base, decreased arm swing, short step length"
        }
    },
    
    fallRiskAssessment: {
        bergScore: 42,
        interpretation: "Moderate fall risk (41-56 range)",
        intrinsicFactors: ["Age", "Decreased strength", "Decreased proprioception", "Visual impairment", "Fear of falling"],
        extrinsicFactors: ["Lives alone", "2-story home", "Inconsistent AD use"],
        medicationReview: "No high-risk medications currently"
    },
    
    ptDiagnosis: {
        primary: "Impaired balance with fall risk",
        icfModel: {
            bodyFunction: "Decreased LE strength, decreased proprioception, visual impairment",
            activityLimitation: "Difficulty with stairs, reaching, walking on uneven surfaces",
            participationRestriction: "Afraid to leave home, decreased community ambulation"
        }
    },
    
    prognosis: {
        expectedOutcome: "Good potential for improvement with balance training",
        goals: "Reduce fall risk, improve confidence, maintain independence"
    },
    
    planOfCare: {
        frequency: "2x/week for 8 weeks",
        interventions: [
            "Progressive balance training (static → dynamic → perturbation)",
            "LE strengthening (focus on hip abductors, ankle)",
            "Gait training with appropriate AD",
            "Tai Chi or group balance class referral",
            "Home safety assessment and modifications",
            "Fear of falling addressed through graded exposure"
        ],
        homeModifications: [
            "Remove throw rugs",
            "Improve lighting",
            "Grab bars in bathroom",
            "Consider stair rail assessment"
        ],
        goals: {
            shortTerm: ["Berg >45 in 4 weeks", "Consistent AD use", "TUG <12 seconds"],
            longTerm: ["No falls in 6 months", "Community ambulation", "Independent home exercise"]
        }
    },
    
    evidenceBase: {
        guidelines: ["CDC STEADI Protocol", "AGS/BGS Fall Prevention Guidelines"],
        keyEvidence: [
            "Balance training reduces fall risk 23%",
            "Multicomponent interventions most effective",
            "Fear of falling independent predictor of future falls"
        ]
    },
    
    teachingPoints: [
        "Berg Balance Scale: <45 = fall risk, <40 = high fall risk",
        "Gait speed <1.0 m/s associated with adverse outcomes",
        "TUG >12 seconds indicates fall risk",
        "Fear of falling can lead to activity restriction → deconditioning → increased fall risk",
        "Multicomponent interventions (strength + balance + home mods) most effective"
    ]
}

};

// Export for use in platform
if (typeof module !== 'undefined' && module.exports) {
    module.exports = REASONDX_PT_CASES;
}
if (typeof window !== 'undefined') {
    window.REASONDX_PT_CASES = REASONDX_PT_CASES;
}

console.log('[ReasonDx-PT] Loaded ' + Object.keys(REASONDX_PT_CASES).length + ' physical therapy cases');
