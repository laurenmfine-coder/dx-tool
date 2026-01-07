/**
 * REASONDX PHYSICAL THERAPY CASES - EXPANDED
 * Additional PT cases beyond the initial 5
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 * For PRG Grant - Multi-Institutional Validation Study
 */

const REASONDX_PT_CASES_EXPANDED = {

// ============================================================================
// PT-006: CERVICAL RADICULOPATHY
// ============================================================================
"PT-006": {
    id: "PT-006",
    title: "Cervical Radiculopathy - Conservative Management",
    category: "Spine",
    difficulty: "Intermediate",
    profession: "pt",
    
    patient: {
        name: "Jennifer Walsh",
        age: 52,
        sex: "Female",
        occupation: "Accountant (desk work)",
        referralSource: "Orthopedic spine specialist",
        setting: "Outpatient Physical Therapy"
    },
    
    chiefComplaint: "Right arm pain and numbness for 6 weeks",
    
    clinicalScenario: `Mrs. Walsh is referred for physical therapy with a diagnosis of right 
C6 radiculopathy. MRI shows C5-6 disc herniation with foraminal stenosis. She has been 
managing with NSAIDs and a course of oral steroids provided modest relief. She works long 
hours at a computer. Neurosurgeon has recommended conservative treatment trial for 6-8 weeks 
before considering surgical intervention.`,

    historyOfPresentIllness: {
        onset: "Gradual over 2 weeks, worsened after long day of computer work",
        location: "Neck, right shoulder, lateral arm to thumb and index finger",
        character: "Aching neck pain, shooting/burning pain down arm, numbness in thumb",
        severity: "6/10 arm pain, 4/10 neck pain",
        aggravating: "Looking up, turning head right, prolonged sitting, driving",
        relieving: "Rest, NSAIDs, placing hand on head (shoulder abduction)",
        redFlags: "Denies bilateral symptoms, bowel/bladder changes, gait disturbance"
    },

    physicalExamination: {
        posture: "Forward head posture, rounded shoulders, mild right cervical sidebend",
        cervicalROM: {
            flexion: "45° (WNL, pain at end range)",
            extension: "30° (limited, reproduces arm symptoms)",
            rightRotation: "50° (limited, reproduces arm symptoms)",
            leftRotation: "70° (WNL)",
            rightSidebend: "30° (limited)",
            leftSidebend: "40° (WNL)"
        },
        neurological: {
            bicepsReflex: "2+ bilateral (normal)",
            brachioradialisReflex: "1+ right, 2+ left (diminished right)",
            tricepsReflex: "2+ bilateral",
            C6Myotome: "Wrist extension 4/5 right, 5/5 left",
            C6Dermatome: "Decreased light touch lateral forearm, thumb, index finger"
        },
        specialTests: {
            spurlings: "Positive right - reproduces arm symptoms",
            cervicalDistraction: "Positive - relieves arm symptoms",
            upperLimbTensionTest: "Positive for median nerve bias (C6)",
            shoulderAbductionSign: "Positive - hand on head relieves symptoms"
        },
        palpation: "Tenderness right paraspinals C4-C6, upper trapezius hypertonicity"
    },

    clinicalReasoning: {
        diagnosis: "Cervical radiculopathy C6 nerve root - disc herniation",
        mechanicalClassification: "Peripheralization with extension/rotation, centralization with flexion",
        icfModel: {
            bodyStructure: "C5-6 disc herniation, C6 nerve root compression",
            activityLimitations: "Difficulty with prolonged desk work, driving, overhead activities",
            participationRestrictions: "Unable to work full days, difficulty with job duties"
        },
        prognosticFactors: {
            favorable: ["No motor weakness <3/5", "Positive distraction test", "Centralization possible", "<3 months duration"],
            unfavorable: ["Dermatomal sensory changes present", "Reflex changes"]
        }
    },

    interventionPlan: {
        phase1: {
            duration: "Weeks 1-2",
            goals: ["Pain reduction", "Patient education", "Identify directional preference"],
            interventions: [
                "Cervical retraction exercises (chin tucks)",
                "Cervical traction - mechanical or manual (10-15 lbs, 10-15 min)",
                "Neural mobilization - median nerve sliders",
                "Ergonomic workstation assessment and modification",
                "Postural education and positioning for sleep"
            ]
        },
        phase2: {
            duration: "Weeks 3-4",
            goals: ["Progress ROM", "Address muscle imbalances", "Return to modified work"],
            interventions: [
                "Progress traction parameters",
                "Deep neck flexor strengthening (craniocervical flexion)",
                "Scapular stabilization exercises",
                "Upper extremity nerve glides - progressions"
            ]
        },
        phase3: {
            duration: "Weeks 5-8",
            goals: ["Full return to work", "Prevent recurrence", "Independent HEP"],
            interventions: [
                "Progress strengthening",
                "Work simulation activities",
                "Maintenance program development"
            ]
        }
    },

    keyTeachingPoints: [
        "Cervical traction is effective for radiculopathy - 10-15 lbs starting dose",
        "Positive distraction test is good predictor of traction response",
        "Centralization is favorable prognostic sign for conservative management",
        "Neural mobilization: sliders before tensioners to avoid symptom exacerbation",
        "80-90% of cervical radiculopathy resolves with conservative care",
        "Red flags requiring immediate referral: myelopathy signs, progressive weakness"
    ],

    evidenceBase: {
        guidelines: ["APTA Neck Pain CPG 2017", "Orthopedic Section Cervical Radiculopathy CPG"],
        keyEvidence: [
            "Cervical traction + exercise superior to exercise alone",
            "Most patients improve within 6-12 weeks with conservative care",
            "Surgery not superior to conservative care at 1-year outcomes"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "cervical-spine-module", title: "Cervical Spine Pathomechanics" },
        coachdx: { id: "pt-cervical-case", title: "Cervical Radiculopathy Discussion" }
    }
},

// ============================================================================
// PT-007: TOTAL KNEE ARTHROPLASTY REHABILITATION
// ============================================================================
"PT-007": {
    id: "PT-007",
    title: "Total Knee Arthroplasty Rehabilitation",
    category: "Orthopedic Post-Surgical",
    difficulty: "Intermediate",
    profession: "pt",
    
    patient: {
        name: "William Chen",
        age: 68,
        sex: "Male",
        BMI: 31,
        comorbidities: ["Hypertension", "Type 2 Diabetes (controlled)"],
        referralSource: "Orthopedic surgeon",
        setting: "Skilled Nursing Facility → Outpatient PT"
    },
    
    chiefComplaint: "Post-operative day 3 after right total knee replacement",
    
    clinicalScenario: `Mr. Chen underwent an elective right total knee arthroplasty for severe 
tricompartmental osteoarthritis 3 days ago. He has been transferred to SNF for short-term 
rehabilitation. Pre-operative ROM was 5-95° flexion with varus deformity. Goal is discharge 
home within 5-7 days with outpatient PT to follow.`,

    surgicalDetails: {
        procedure: "Right total knee arthroplasty, cemented",
        approach: "Medial parapatellar",
        implant: "Posterior stabilized design",
        anesthesia: "Spinal with adductor canal block",
        weightBearing: "Weight bearing as tolerated with walker"
    },

    currentStatus: {
        pain: "5/10 at rest, 7/10 with movement, well-controlled with multimodal analgesia",
        swelling: "Moderate, incision intact with staples",
        ROM: "Active: 10-60° flexion; Passive: 5-70° flexion",
        strength: "Quad lag present (~15°), unable to perform SLR independently",
        function: "Requires moderate assist for bed mobility, transfers, ambulation 50 ft",
        precautions: "DVT prophylaxis (Lovenox), sequential compression devices"
    },

    assessmentFindings: {
        rom: {
            passiveFlexion: "70° (goal >90° by 2 weeks, >110° by 6 weeks)",
            passiveExtension: "5° (goal 0° by 2 weeks)",
            activeFlexion: "60°",
            activeExtension: "10° lag"
        },
        strength: {
            quadriceps: "2+/5 (unable to extend against gravity)",
            hamstrings: "3/5",
            hipAbductors: "3+/5",
            hipFlexors: "4/5"
        },
        functional: {
            timedUpAndGo: "Unable - requires moderate assist",
            sitToStand: "Moderate assist, uses bilateral UE",
            gaitDistance: "50 feet with rolling walker, moderate assist",
            stairs: "Not yet attempted"
        }
    },

    rehabilitationProtocol: {
        snfPhase: {
            duration: "Days 3-7 post-op",
            frequency: "PT/OT 2x daily",
            goals: [
                "ROM: 0-90° passive flexion",
                "Eliminate quad lag",
                "Independent transfers",
                "Ambulation 150+ feet with walker, supervision",
                "Safe for discharge home"
            ],
            interventions: [
                "PROM/AAROM exercises - heel slides, seated knee flexion",
                "Quad sets, straight leg raises (with lag → without)",
                "Ankle pumps for DVT prevention",
                "Patellar mobilization",
                "Ice and elevation for edema",
                "Gait training with appropriate assistive device",
                "Transfer training",
                "Stair training (up with good, down with bad)"
            ]
        },
        outpatientPhase1: {
            duration: "Weeks 2-6",
            frequency: "2-3x per week",
            goals: [
                "ROM: 0-115° by week 6",
                "Independent ambulation with cane by week 4",
                "Stair negotiation step-over-step",
                "Return to driving (if left knee or automatic)"
            ],
            interventions: [
                "Progress ROM exercises - bike (when 105° achieved)",
                "Open and closed chain strengthening",
                "Balance training",
                "Gait training - wean assistive device",
                "Scar mobilization when healed"
            ]
        },
        outpatientPhase2: {
            duration: "Weeks 6-12",
            goals: [
                "Full ROM or functional ROM (0-120°)",
                "Community ambulation without device",
                "Return to recreational activities"
            ],
            interventions: [
                "Progressive resistance training",
                "Sport/activity-specific training",
                "Pool therapy if available",
                "Independent HEP"
            ]
        }
    },

    keyTeachingPoints: [
        "Early ROM crucial - week 2 ROM predicts 6-month outcomes",
        "Quad activation often inhibited post-operatively (arthrogenic inhibition)",
        "0° extension is critical - flexion contracture very difficult to correct later",
        "Blood thinners ongoing - monitor for signs of bleeding, bruising",
        "CPM machines are NOT superior to active exercise for ROM",
        "Most functional recovery occurs in first 3 months"
    ],

    evidenceBase: {
        guidelines: ["APTA Post-TKA Guidelines", "AAOS TKA Rehabilitation Protocol"],
        keyEvidence: [
            "Intensive early rehab improves outcomes without increased complications",
            "Preoperative PT (prehab) improves post-op function",
            "Week 2 ROM is strong predictor of ultimate ROM"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "joint-replacement-module", title: "Arthroplasty Pathophysiology" },
        coachdx: { id: "pt-tka-case", title: "TKA Rehabilitation Planning" }
    }
},

// ============================================================================
// PT-008: VESTIBULAR REHABILITATION - BPPV
// ============================================================================
"PT-008": {
    id: "PT-008",
    title: "Benign Paroxysmal Positional Vertigo (BPPV)",
    category: "Vestibular",
    difficulty: "Intermediate",
    profession: "pt",
    
    patient: {
        name: "Sandra Martinez",
        age: 64,
        sex: "Female",
        referralSource: "ENT physician",
        setting: "Outpatient Vestibular Rehabilitation"
    },
    
    chiefComplaint: "Room spinning when I roll over in bed or look up",
    
    clinicalScenario: `Mrs. Martinez is referred for vestibular rehabilitation with suspected 
BPPV. She reports 1 week of episodic vertigo triggered by position changes, especially 
rolling to her right side in bed. Each episode lasts about 30 seconds. She has associated 
nausea but no hearing loss, tinnitus, or neurological symptoms. She had a similar episode 
5 years ago that resolved spontaneously.`,

    historyOfPresentIllness: {
        onset: "1 week ago, sudden onset upon waking",
        duration: "Episodes last 20-30 seconds each",
        triggers: "Rolling right in bed, looking up, bending forward",
        associated: "Nausea, no vomiting, no hearing changes, no tinnitus",
        redFlags: "No headache, no diplopia, no weakness, no dysarthria",
        priorEpisodes: "Similar episode 5 years ago, resolved in 2 weeks"
    },

    physicalExamination: {
        vitalSigns: {
            BP: "128/78 sitting, 122/76 standing (no orthostasis)",
            HR: "72"
        },
        cranialNerves: "Intact II-XII",
        cerebellar: "Finger-to-nose intact, heel-to-shin intact, no dysmetria",
        oculomotor: {
            smoothPursuit: "Intact",
            saccades: "Normal velocity and accuracy",
            VOR: "Intact, no corrective saccades",
            spontaneousNystagmus: "None in neutral gaze"
        },
        positionalTesting: {
            dixHallpikeRight: {
                result: "POSITIVE",
                latency: "3 seconds",
                direction: "Upbeating, torsional (top pole toward right ear)",
                duration: "25 seconds",
                vertigo: "Yes, moderate intensity"
            },
            dixHallpikeLeft: {
                result: "Negative",
                nystagmus: "None",
                vertigo: "None"
            },
            supineRollTest: "Negative bilaterally"
        },
        gaze: "No gaze-evoked nystagmus",
        balance: {
            romberg: "Negative",
            tandemStance: "Mild sway, maintained 30 seconds"
        }
    },

    clinicalReasoning: {
        diagnosis: "Right posterior canal BPPV (canalithiasis)",
        supportingFindings: [
            "Positive right Dix-Hallpike with appropriate nystagmus pattern",
            "Upbeating + geotropic torsional = posterior canal",
            "Brief duration (<60 sec) = canalithiasis",
            "Latency present = peripheral etiology"
        ],
        differentialConsidered: [
            { diagnosis: "Horizontal canal BPPV", ruledOut: "Roll test negative, nystagmus pattern inconsistent" },
            { diagnosis: "Vestibular neuritis", ruledOut: "No spontaneous nystagmus, no VOR deficit" },
            { diagnosis: "Central vertigo", ruledOut: "No central signs, classic peripheral nystagmus pattern" }
        ]
    },

    treatment: {
        canalithRepositioning: {
            maneuver: "Modified Epley Maneuver (canalith repositioning procedure)",
            steps: [
                "Start sitting, head turned 45° right",
                "Quickly lie back, head hanging 20° below horizontal - hold 30 sec",
                "Turn head 90° to left (nose up) - hold 30 sec",
                "Roll onto left side, head turned down 45° - hold 30 sec",
                "Sit up slowly, head still turned left"
            ],
            postManeuverInstructions: [
                "Sleep semi-reclined first night (optional - evidence weak)",
                "Avoid sleeping on right side for 24-48 hours",
                "May feel imbalanced for 1-2 days - normal",
                "Return if symptoms recur"
            ]
        },
        outcome: {
            postTreatment: "Immediate reduction in symptoms",
            retestDixHallpike: "Negative after 2nd Epley maneuver",
            planForRecurrence: "Taught Brandt-Daroff exercises for home use if recurs"
        }
    },

    keyTeachingPoints: [
        "BPPV is most common cause of vertigo - 50% of peripheral vestibular disorders",
        "Nystagmus direction identifies affected canal (posterior most common - 80%)",
        "Canalithiasis = brief (<60 sec), cupulolithiasis = prolonged",
        "Epley maneuver has 80% single-treatment success rate",
        "No medications needed - repositioning is definitive treatment",
        "30-50% recurrence rate over 5 years - teach self-treatment"
    ],

    evidenceBase: {
        guidelines: ["AAO-HNS BPPV Clinical Practice Guidelines 2017", "APTA Vestibular Rehabilitation CPG"],
        keyEvidence: [
            "Canalith repositioning procedures (CRP) are first-line treatment - NNT 2",
            "No evidence that post-maneuver restrictions improve outcomes",
            "Vestibular suppressants do not treat BPPV and may delay recovery"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "vestibular-module", title: "Vestibular System Anatomy and Physiology" },
        coachdx: { id: "pt-vertigo-case", title: "Vertigo Differential Diagnosis" }
    }
},

// ============================================================================
// PT-009: PEDIATRIC TORTICOLLIS
// ============================================================================
"PT-009": {
    id: "PT-009",
    title: "Congenital Muscular Torticollis",
    category: "Pediatrics",
    difficulty: "Intermediate",
    profession: "pt",
    
    patient: {
        name: "Baby Lucas Thompson",
        age: "8 weeks",
        sex: "Male",
        referralSource: "Pediatrician",
        setting: "Outpatient Pediatric Physical Therapy"
    },
    
    chiefComplaint: "Head always tilted to right side",
    
    clinicalScenario: `Lucas is referred for evaluation of right head tilt noticed by parents 
at 4 weeks of age. Mom reports he prefers to look left and has difficulty breastfeeding on 
the left side. Birth history: full-term, vaginal delivery, breech presentation. Pediatrician 
noted right SCM tightness and palpable fibrotic mass. Hip ultrasound ordered (normal).`,

    birthHistory: {
        gestationalAge: "39 weeks",
        deliveryType: "Vaginal, breech presentation",
        birthWeight: "7 lbs 8 oz",
        apgar: "8/9",
        complications: "None"
    },

    parentReportedHistory: {
        headTiltNoticed: "4 weeks of age",
        feedingDifficulties: "Difficulty latching on left breast",
        sleepPosition: "Always turns head to left",
        tummyTime: "Tolerates 5 minutes, fusses with head turn right",
        developmentalMilestones: "Smiling, tracking, age-appropriate"
    },

    physicalExamination: {
        observation: {
            headPosition: "Right lateral flexion, left rotation at rest",
            facialSymmetry: "Mild right facial flattening (plagiocephaly developing)",
            bodySymmetry: "Slight right trunk sidebend"
        },
        passiveROM: {
            cervicalRotationLeft: "Full (80°)",
            cervicalRotationRight: "50° (limited)",
            cervicalLateralFlexionLeft: "25° (limited)",
            cervicalLateralFlexionRight: "Full (45°)"
        },
        palpation: {
            rightSCM: "Firm, fibrotic mass in mid-belly (~1.5 cm)",
            leftSCM: "Normal tone"
        },
        motorAssessment: {
            headControl: "Age-appropriate in supported sitting",
            tummyTimeHeadLift: "45° briefly, prefers turning left",
            symmetry: "Asymmetric - favors left"
        },
        hipExamination: "Barlow/Ortolani negative, full ROM",
        skinInspection: "Intact, no dimples or markings"
    },

    clinicalReasoning: {
        diagnosis: "Congenital Muscular Torticollis (CMT) - Right SCM with sternomastoid tumor",
        severity: "Moderate - ROM restriction 30°, palpable mass",
        associatedFindings: "Early right plagiocephaly",
        differentialRuledOut: [
            { diagnosis: "Ocular torticollis", finding: "Tracking normal, no strabismus" },
            { diagnosis: "Cervical spine anomaly", finding: "No bony abnormality suspected, refer if no progress" },
            { diagnosis: "DDH", finding: "Hip US normal" }
        ]
    },

    treatmentPlan: {
        parentEducation: [
            "Nature of condition - contracture of SCM muscle",
            "Importance of early intervention - best outcomes <6 months",
            "Expected duration - most resolve with PT by 6-12 months"
        ],
        positioningStrategies: [
            "Position crib/changing table so baby must turn right to see room",
            "Carry with right ear toward parent shoulder",
            "Feeding: position to encourage right rotation",
            "Supervised tummy time 3-4x daily, progressively increase duration"
        ],
        stretchingProgram: {
            rightRotationStretch: "Hold 30 sec, 10 reps, 3-4x daily",
            leftLateralFlexionStretch: "Hold 30 sec, 10 reps, 3-4x daily",
            technique: "Gentle, pain-free stretching during happy/relaxed times"
        },
        activeExercises: [
            "Visual tracking to encourage right rotation",
            "Tummy time with toys positioned on right",
            "Sidelying play on left side"
        ],
        plagiocephalyManagement: {
            repositioning: "Alternate head position during sleep",
            tummyTime: "Minimum 30 minutes daily (cumulative)",
            monitoringFrequency: "Assess head shape at each visit",
            helmetReferral: "Consider if no improvement by 4-6 months"
        }
    },

    expectedOutcomes: {
        prognosis: "Excellent - 90%+ resolve with conservative treatment if started early",
        timeframe: "Most improve significantly within 2-4 months",
        surgeryRisk: "<10% require surgical release if early PT provided"
    },

    keyTeachingPoints: [
        "Earlier intervention = better outcomes; begin PT before 3 months ideally",
        "Breech position is risk factor - always screen for DDH",
        "Sternomastoid tumor (pseudotumor) resolves with stretching - not true tumor",
        "Positional plagiocephaly often co-occurs - address simultaneously",
        "Parent/caregiver education and compliance is critical - most treatment is home-based",
        "Re-evaluate at 6-12 months if not improving for imaging/surgical consideration"
    ],

    evidenceBase: {
        guidelines: ["APTA Pediatric Section CMT CPG 2018", "AAP Plagiocephaly Guidelines"],
        keyEvidence: [
            "PT initiated <2 months: 98% resolution vs 75% if >2 months",
            "Stretching combined with positioning superior to positioning alone",
            "Helmet therapy for moderate-severe plagiocephaly if no improvement with repositioning"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "pediatric-development-module", title: "Infant Motor Development" },
        coachdx: { id: "pt-pediatric-case", title: "Pediatric Assessment Discussion" }
    }
},

// ============================================================================
// PT-010: CARDIAC REHABILITATION
// ============================================================================
"PT-010": {
    id: "PT-010",
    title: "Phase II Cardiac Rehabilitation Post-CABG",
    category: "Cardiopulmonary",
    difficulty: "Advanced",
    profession: "pt",
    
    patient: {
        name: "George Anderson",
        age: 62,
        sex: "Male",
        BMI: 29,
        referralSource: "Cardiothoracic surgeon",
        setting: "Outpatient Cardiac Rehabilitation"
    },
    
    chiefComplaint: "Starting cardiac rehab 3 weeks after bypass surgery",
    
    clinicalScenario: `Mr. Anderson is referred for Phase II cardiac rehabilitation following 
3-vessel CABG (LIMA-LAD, SVG-OM, SVG-RCA) performed 3 weeks ago for unstable angina. His 
post-operative course was uncomplicated. He was discharged on day 5. He completed Phase I 
rehab in hospital. He is eager to return to his active lifestyle but is anxious about 
"overdoing it."`,

    cardiacHistory: {
        diagnosis: "3-vessel CAD with unstable angina",
        procedure: "CABG x3 (LIMA-LAD, SVG-OM, SVG-RCA)",
        dateOfSurgery: "3 weeks ago",
        preOpEF: "45%",
        postOpEF: "50%",
        complications: "None",
        riskFactors: ["Dyslipidemia", "Former smoker (quit 10 years)", "Family history", "Sedentary lifestyle"]
    },

    medications: [
        { drug: "Aspirin", dose: "81mg daily" },
        { drug: "Metoprolol succinate", dose: "50mg daily" },
        { drug: "Lisinopril", dose: "10mg daily" },
        { drug: "Atorvastatin", dose: "80mg daily" },
        { drug: "Oxycodone/APAP", dose: "PRN for sternal pain" }
    ],

    initialAssessment: {
        vitalSigns: {
            restingHR: "68 bpm",
            restingBP: "122/76 mmHg",
            restingSpO2: "97%"
        },
        sternotomy: "Well-healed, no drainage, mild sternal tenderness",
        upperExtremity: "Full ROM, no leg harvest site issues (LIMA only)",
        aerobicCapacity: {
            sixMinuteWalk: "320 meters (predicted ~500m for age)",
            peakHR: "98 bpm (target 85-110 based on beta-blocker)",
            symptoms: "No chest pain, mild dyspnea at end, no ECG changes"
        },
        strength: "Generally deconditioned, grip strength 30th percentile",
        flexibility: "Reduced thoracic mobility, pectoralis tightness"
    },

    exercisePrescription: {
        frequencyIntensityTimeDuration: {
            frequency: "3x/week supervised, progress to 5x/week total",
            intensity: "RPE 11-14, HR 85-110 (using Karvonen with beta-blocker adjustment)",
            time: "Start 20 min continuous, progress to 45-60 min",
            type: "Walking, recumbent bike, arm ergometry (after sternal healing)"
        },
        phases: {
            weeks1_4: {
                focus: "Low-intensity aerobic conditioning",
                activities: ["Treadmill walking", "Recumbent cycling", "Light stretching"],
                avoidances: ["Heavy lifting >10 lbs", "Pushing/pulling", "Arm ergometry"]
            },
            weeks5_8: {
                focus: "Progress intensity, add resistance training",
                activities: ["Increase duration and intensity", "Begin light resistance (Theraband)", "Arm ergometry"],
                sternalPrecautions: "Progress upper body gradually"
            },
            weeks9_12: {
                focus: "Functional conditioning",
                activities: ["Circuit training", "Progressive resistance", "Sport-specific if applicable"],
                goals: ["Independent home program", "Return to recreational activities"]
            }
        },
        sternalPrecautions: {
            duration: "8-12 weeks post-surgery",
            restrictions: [
                "No lifting >10 lbs weeks 1-6",
                "Avoid asymmetric arm movements",
                "No driving for 4-6 weeks",
                "Log roll for bed mobility"
            ]
        }
    },

    monitoringParameters: {
        continuous: ["Heart rate", "ECG rhythm", "Blood pressure"],
        symptoms: ["Chest pain", "Dyspnea", "Dizziness", "Fatigue"],
        stopExerciseIf: [
            "Chest pain or anginal equivalent",
            "SBP >200 or DBP >110, or SBP drop >20",
            "New arrhythmia",
            "SpO2 <90%",
            "RPE >16",
            "Signs of poor perfusion"
        ]
    },

    expectedOutcomes: {
        twelveWeekGoals: [
            "6MWT distance >450 meters",
            "Able to walk 2+ miles comfortably",
            "Return to ADLs without limitations",
            "Independent home exercise program"
        ],
        riskReduction: {
            mortality: "20-30% reduction in all-cause mortality",
            rehospitalization: "30% reduction in cardiac rehospitalization"
        }
    },

    keyTeachingPoints: [
        "Beta-blockers blunt HR response - use RPE as primary intensity guide",
        "Sternal precautions for 8-12 weeks to allow bone healing",
        "Exercise-based cardiac rehab reduces mortality 20-30%",
        "Resistance training is safe and beneficial post-CABG when introduced appropriately",
        "Depression and anxiety common post-cardiac surgery - screen and address",
        "Comprehensive program includes nutrition, smoking cessation, stress management"
    ],

    evidenceBase: {
        guidelines: ["AACVPR Cardiac Rehabilitation Guidelines 2021", "AHA/ACC Secondary Prevention Guidelines"],
        keyEvidence: [
            "Cardiac rehab reduces all-cause mortality RR 0.74",
            "Reduces hospital admissions RR 0.82",
            "Exercise capacity improves 15-25% on average"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "acs-module", title: "Cardiac Pathophysiology" },
        coachdx: { id: "pt-cardiac-case", title: "Cardiac Rehabilitation Discussion" }
    }
}

};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = REASONDX_PT_CASES_EXPANDED;
}
if (typeof window !== 'undefined') {
    window.REASONDX_PT_CASES_EXPANDED = REASONDX_PT_CASES_EXPANDED;
    // Merge with original if exists
    if (window.REASONDX_PT_CASES) {
        Object.assign(window.REASONDX_PT_CASES, REASONDX_PT_CASES_EXPANDED);
    }
}

console.log('[ReasonDx-PT-Expanded] Loaded ' + Object.keys(REASONDX_PT_CASES_EXPANDED).length + ' additional PT cases');
