/**
 * REASONDX ORAL AND MAXILLOFACIAL SURGERY (OMFS) CASES
 * Clinical reasoning cases for OMFS residents
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 */

const REASONDX_OMFS_CASES = {

// ============================================================================
// OMFS-001: MANDIBLE FRACTURE - Trauma Assessment
// ============================================================================
"OMFS-001": {
    id: "OMFS-001",
    title: "Mandible Fracture - Assault Victim",
    category: "Facial Trauma",
    difficulty: "Intermediate",
    profession: "omfs",
    
    patient: {
        name: "Marcus Johnson",
        age: 28,
        sex: "Male",
        allergies: ["None"],
        medicalHistory: ["Healthy"],
        setting: "Emergency Department"
    },
    
    chiefComplaint: "Jaw pain after being punched, can't close my teeth together",
    
    clinicalScenario: `A 28-year-old man presents to the ED after being punched in the face during 
an altercation 2 hours ago. He reports severe left jaw pain and notes his "bite feels off." 
He denies loss of consciousness, neck pain, or other injuries. He is holding his jaw and 
has difficulty speaking clearly.`,

    historyOfPresentIllness: {
        mechanism: "Direct blow to left mandible, single punch",
        lossOfConsciousness: "Denied",
        otherInjuries: "Denies neck pain, headache, visual changes",
        dentalHistory: "Full dentition, no prior jaw surgery",
        lastMeal: "4 hours ago"
    },

    physicalExamination: {
        general: "Alert, oriented, in moderate distress holding jaw",
        cranialNerves: {
            V: "Numbness left lower lip and chin (V3 distribution)",
            VII: "Symmetric facial movement",
            others: "Intact"
        },
        maxillofacial: {
            inspection: "Swelling and ecchymosis left mandibular body, floor of mouth ecchymosis",
            palpation: "Step deformity palpable left mandibular body, TTP left angle",
            occlusion: "Malocclusion - premature contact right posterior, open bite left",
            ROM: "Limited opening (20mm) secondary to pain",
            intraoral: "Floor of mouth hematoma, lingual attached gingiva laceration left molar region"
        },
        dental: {
            mobility: "Teeth #18, #19 mobile",
            percussion: "Tender left mandibular teeth"
        },
        neck: "Supple, no midline tenderness, intact airway"
    },

    imaging: {
        panorex: "Fracture left mandibular body between #18-19, fracture right subcondylar region",
        ctFace: "Confirms bilateral mandible fractures - left body (displaced), right subcondylar (minimally displaced)"
    },

    differentialDiagnosis: [
        { diagnosis: "Bilateral Mandible Fractures (Body + Subcondylar)", likelihood: "Confirmed", reasoning: "Imaging confirms, mechanism and exam consistent" },
        { diagnosis: "Isolated Mandible Fracture", likelihood: "Excluded", reasoning: "Mandible is a ring - fractures often bilateral or at symphysis" },
        { diagnosis: "Dentoalveolar Fracture", likelihood: "Component", reasoning: "Mobile teeth suggest alveolar involvement" },
        { diagnosis: "TMJ Dislocation", likelihood: "Excluded", reasoning: "Condyle in fossa on CT" }
    ],

    keyPrinciple: "The mandible is a ring structure - always look for a second fracture when one is identified",

    classification: {
        leftBody: "Displaced, favorable (muscle pull reduces rather than distracts)",
        rightSubcondylar: "Minimally displaced, closed reduction candidate"
    },

    treatmentPlan: {
        immediate: [
            "NPO - OR candidate",
            "IV antibiotics (ampicillin-sulbactam) - open fracture (intraoral laceration)",
            "Tetanus update if needed",
            "Pain management",
            "Barton bandage for temporary stabilization"
        ],
        surgical: {
            approach: "ORIF left mandibular body (intraoral approach), closed reduction right subcondyle with MMF",
            timing: "Within 24-72 hours",
            hardware: "2.0mm plates left body, arch bars for MMF",
            mmfDuration: "2-4 weeks for subcondylar healing"
        },
        postoperative: [
            "Soft/liquid diet during MMF",
            "Chlorhexidine rinses",
            "Wire cutters with patient at all times",
            "Follow-up imaging at 6 weeks"
        ]
    },

    complications: [
        "Infection (10-15% with open fractures)",
        "Malunion/malocclusion",
        "TMJ dysfunction (with condylar fractures)",
        "Inferior alveolar nerve injury (already present - may be permanent)",
        "Hardware failure",
        "Nonunion (rare with rigid fixation)"
    ],

    keyTeachingPoints: [
        "Mandible fractures often occur in pairs - always image entire mandible",
        "Floor of mouth ecchymosis = pathognomonic for mandible fracture",
        "Inferior alveolar nerve runs through mandibular body - V3 numbness common",
        "Subcondylar fractures in adults often treated closed; in children, ORIF to prevent ankylosis",
        "Antibiotics indicated for all open fractures (communication with oral cavity)",
        "Patient must have wire cutters if MMF placed - airway emergency protocol"
    ],

    evidenceBase: {
        guidelines: ["AO CMF Principles of Fracture Management", "ACOMS Mandible Fracture Guidelines"],
        keyEvidence: [
            "ORIF provides better outcomes than closed reduction for displaced body fractures",
            "Subcondylar fractures: closed vs open management remains debated",
            "Antibiotic prophylaxis reduces infection rate in mandible fractures"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "facial-trauma-module", title: "Facial Fracture Biomechanics" },
        coachdx: { id: "omfs-trauma-case", title: "Facial Trauma Decision Making" }
    }
},

// ============================================================================
// OMFS-002: LUDWIG'S ANGINA - Airway Emergency
// ============================================================================
"OMFS-002": {
    id: "OMFS-002",
    title: "Ludwig's Angina - Odontogenic Infection",
    category: "Infections",
    difficulty: "Advanced",
    profession: "omfs",
    
    patient: {
        name: "David Thompson",
        age: 45,
        sex: "Male",
        allergies: ["Penicillin - anaphylaxis"],
        medicalHistory: ["Type 2 Diabetes (poorly controlled)", "Hypertension"],
        setting: "Emergency Department"
    },
    
    chiefComplaint: "Severe neck swelling and difficulty swallowing for 2 days",
    
    clinicalScenario: `A 45-year-old diabetic man presents with progressive neck swelling and 
dysphagia over 2 days. He had a toothache in his lower right jaw for 1 week that he treated 
with ibuprofen. He now has difficulty breathing when lying flat and his voice is muffled. 
Temperature 102.4°F, HR 118, BP 145/92, SpO2 94% on room air sitting upright.`,

    historyOfPresentIllness: {
        onset: "Toothache 1 week, swelling 2 days",
        progression: "Rapidly worsening",
        dysphagia: "Unable to swallow saliva - drooling",
        dyspnea: "Worse supine, improved sitting forward",
        trismus: "Severe - can barely open mouth",
        priorTreatment: "OTC ibuprofen only"
    },

    physicalExamination: {
        general: "Toxic-appearing, sitting forward, drooling, muffled voice",
        vitals: { temp: "102.4°F", HR: 118, BP: "145/92", RR: 24, SpO2: "94% RA" },
        airway: {
            stridor: "None at rest, inspiratory stridor with agitation",
            position: "Tripod positioning",
            voice: "Hot potato voice"
        },
        neck: {
            inspection: "Massive bilateral submandibular and sublingual swelling",
            palpation: "Brawny induration (not fluctuant), tender, warm",
            floorOfMouth: "Elevated, tongue pushed superiorly and posteriorly"
        },
        intraoral: {
            limitedExam: "Trismus limits visualization",
            observed: "Carious #31 with surrounding erythema, elevated floor of mouth bilaterally"
        }
    },

    labValues: {
        wbc: "24,000 with 18% bands (left shift)",
        glucose: "342 mg/dL",
        lactate: "2.8 mmol/L",
        creatinine: "1.4 mg/dL"
    },

    imaging: {
        ctNeckWithContrast: "Bilateral submandibular, sublingual, and submental space involvement. No discrete abscess - diffuse cellulitis/phlegmon. Airway narrowed to 6mm at level of oropharynx. Gas tracking in fascial planes.",
        findings: "Classic Ludwig's angina distribution"
    },

    diagnosis: {
        primary: "Ludwig's Angina - Odontogenic source (#31)",
        severity: "Severe - impending airway compromise",
        complications: "Hyperglycemia, early sepsis"
    },

    spaceInvolvement: {
        bilateral: true,
        spaces: ["Submandibular (bilateral)", "Sublingual (bilateral)", "Submental"],
        criteria: "Ludwig's = bilateral submandibular + sublingual + submental involvement"
    },

    treatmentPlan: {
        airway: {
            priority: "IMMEDIATE - airway is #1 concern",
            approach: "Awake fiberoptic intubation preferred - do NOT sedate/paralyze",
            backup: "Surgical airway (tracheostomy) must be ready",
            avoidance: "Blind intubation attempts can cause complete obstruction"
        },
        antibiotics: {
            regimen: "Clindamycin 900mg IV q8h + Ceftriaxone 2g IV daily (PCN allergy)",
            alternative: "Meropenem if severe",
            coverage: "Polymicrobial - oral flora including anaerobes"
        },
        surgical: {
            indication: "All Ludwig's angina requires surgical decompression",
            approach: "Submandibular and sublingual space drainage - bilateral",
            drains: "Penrose drains, left open for drainage",
            sourceControl: "Extraction of #31 once stabilized"
        },
        supportive: [
            "ICU admission",
            "Insulin infusion for glucose control",
            "IV fluids",
            "Steroids controversial - may help edema if airway secured"
        ]
    },

    keyTeachingPoints: [
        "Ludwig's angina is a surgical emergency - mortality was >50% before antibiotics",
        "Airway management is #1 priority - have surgical airway ready",
        "Definition: bilateral involvement of submandibular, sublingual, AND submental spaces",
        "Source is usually odontogenic - mandibular molars (roots below mylohyoid)",
        "Brawny induration (not fluctuant) is characteristic - don't wait for abscess",
        "Diabetes is major risk factor - check glucose in all severe odontogenic infections",
        "Gas in tissue = necrotizing infection - even more urgent"
    ],

    evidenceBase: {
        guidelines: ["ACOMS Odontogenic Infection Guidelines", "Difficult Airway Society Guidelines"],
        keyEvidence: [
            "Early surgical decompression reduces mortality",
            "Awake fiberoptic intubation is safest airway approach",
            "Diabetes increases odontogenic infection severity 3-fold"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "fascial-spaces-module", title: "Head and Neck Fascial Spaces" },
        coachdx: { id: "omfs-airway-emergency", title: "Airway Emergency Management" }
    }
},

// ============================================================================
// OMFS-003: ORTHOGNATHIC - Surgical Planning
// ============================================================================
"OMFS-003": {
    id: "OMFS-003",
    title: "Orthognathic Surgery Planning - Class III Malocclusion",
    category: "Orthognathic Surgery",
    difficulty: "Advanced",
    profession: "omfs",
    
    patient: {
        name: "Jennifer Park",
        age: 22,
        sex: "Female",
        allergies: ["None"],
        medicalHistory: ["Healthy"],
        setting: "OMFS Clinic - Surgical Planning"
    },
    
    chiefComplaint: "My bite is off and I don't like how my face looks",
    
    clinicalScenario: `A 22-year-old woman is referred by her orthodontist for surgical correction 
of skeletal Class III malocclusion. She completed growth (no change in 2 years of cephalometric 
monitoring). She has had orthodontic preparation for 14 months. Chief concerns are functional 
(difficulty chewing, anterior open bite) and esthetic (prominent chin, flat midface).`,

    orthodonticStatus: {
        currentPhase: "Pre-surgical orthodontics complete",
        archAlignment: "Arches aligned and coordinated",
        decompensation: "Dental decompensation achieved - teeth upright over bone",
        readyForSurgery: "Yes - orthodontist confirms"
    },

    clinicalExamination: {
        facialAnalysis: {
            frontal: "Facial asymmetry - chin deviated 4mm to left, upper midline 2mm left of facial midline",
            profile: "Concave profile, deficient midface, prominent chin, acute nasolabial angle",
            verticalProportions: "Increased lower facial height"
        },
        dentalExamination: {
            angleClassification: "Class III molar, Class III canine bilaterally",
            overjet: "-6mm (reverse overjet)",
            overbite: "-3mm (anterior open bite)",
            crowding: "Resolved with ortho",
            crossbite: "Bilateral posterior crossbite"
        },
        tmjExamination: {
            clicking: "None",
            pain: "None",
            rom: "WNL (50mm opening)",
            history: "No prior TMJ symptoms"
        },
        airwayAssessment: {
            mallampati: "Class II",
            osaSymptoms: "None - this is relevant for mandibular setback"
        }
    },

    cephalometricAnalysis: {
        sna: "78° (decreased - maxillary retrusion)",
        snb: "84° (increased - mandibular prognathism)",
        anb: "-6° (Class III skeletal)",
        wittsAppraisal: "-8mm",
        facialAngle: "Increased",
        mandibularPlane: "Steep (high angle)",
        interpretation: "Class III skeletal pattern with maxillary deficiency and mandibular excess"
    },

    surgicalPlan: {
        procedures: [
            {
                procedure: "Le Fort I Osteotomy - Maxillary Advancement",
                movement: "6mm advancement, 2mm right cant correction",
                rationale: "Address maxillary deficiency and asymmetry"
            },
            {
                procedure: "Bilateral Sagittal Split Osteotomy (BSSO) - Mandibular Setback",
                movement: "4mm setback, 3mm left shift (asymmetry correction)",
                rationale: "Address mandibular prognathism and chin deviation"
            },
            {
                procedure: "Consider Genioplasty",
                movement: "May not be needed after BSSO - reassess",
                rationale: "Fine-tune chin position if needed"
            }
        ],
        approach: "Bimaxillary surgery - single stage",
        sequencing: "Maxilla first (establishes platform), then mandible"
    },

    surgicalPrediction: {
        method: "3D virtual surgical planning",
        splints: "Intermediate splint (maxilla position) + final splint (mandible position)",
        expectedOutcome: "Class I occlusion, improved profile, facial symmetry"
    },

    riskDiscussion: [
        { risk: "Inferior alveolar nerve injury", incidence: "30% temporary, 5% permanent", mitigation: "Careful sagittal split technique" },
        { risk: "Relapse", incidence: "5-15%", mitigation: "Rigid fixation, proper surgical technique, retention" },
        { risk: "TMJ dysfunction", incidence: "5-10%", mitigation: "Proper condylar seating, avoid torque" },
        { risk: "Velopharyngeal insufficiency", incidence: "Rare with 6mm advancement", mitigation: "May need speech therapy" },
        { risk: "OSA (with setback)", incidence: "Consider in large setbacks", mitigation: "Her setback is moderate - low risk" },
        { risk: "Bleeding/transfusion", incidence: "<5%", mitigation: "Hypotensive anesthesia" }
    ],

    postoperativeExpectations: {
        hospital: "1-2 nights",
        swelling: "Peak 48-72 hours, largely resolved 4-6 weeks",
        diet: "Liquid 2 weeks, soft 4-6 weeks, regular by 8 weeks",
        returnToWork: "2-3 weeks for desk job",
        orthodontics: "Resume 4-6 weeks post-op for finishing",
        totalTreatmentTime: "6-12 months post-surgical ortho"
    },

    keyTeachingPoints: [
        "Skeletal Class III can be maxillary deficiency, mandibular excess, or both - treatment depends on analysis",
        "Pre-surgical orthodontics DEcompensates the teeth - makes the bite look worse before surgery",
        "Bimaxillary surgery addresses multiple planes - often superior to single-jaw surgery",
        "Virtual surgical planning improves accuracy and predictability",
        "Mandibular setback can worsen OSA - screen all patients",
        "IAN injury is most common complication of BSSO - informed consent essential"
    ],

    evidenceBase: {
        guidelines: ["AAOMS Orthognathic Surgery Parameters", "AO CMF Orthognathic Guidelines"],
        keyEvidence: [
            "Bimaxillary surgery more stable than single-jaw for Class III",
            "Virtual surgical planning reduces operative time and improves accuracy",
            "Rigid fixation allows early function without MMF"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "orthognathic-module", title: "Craniofacial Growth and Development" },
        coachdx: { id: "omfs-orthognathic-planning", title: "Surgical Planning Discussion" }
    }
},

// ============================================================================
// OMFS-004: THIRD MOLAR - Complication Management
// ============================================================================
"OMFS-004": {
    id: "OMFS-004",
    title: "Third Molar Extraction Complication - IAN Injury",
    category: "Dentoalveolar Surgery",
    difficulty: "Intermediate",
    profession: "omfs",
    
    patient: {
        name: "Ryan Mitchell",
        age: 24,
        sex: "Male",
        allergies: ["None"],
        medicalHistory: ["Healthy"],
        setting: "OMFS Clinic - Post-op Day 1"
    },
    
    chiefComplaint: "My lip and chin are still completely numb from yesterday's surgery",
    
    clinicalScenario: `A 24-year-old man presents 1 day after extraction of impacted mandibular 
third molars. He reports complete numbness of his right lower lip and chin that hasn't improved 
since surgery. His left side has normal sensation. Pre-operative panorex showed the right #32 
roots in close proximity to the inferior alveolar canal. Intraoperatively, the IAN was 
visualized during extraction.`,

    preoperativeImaging: {
        panorex: "Right #32 - roots curved around IAN canal, loss of canal white line, darkening of root",
        cbct: "Was obtained - confirmed intimate relationship, canal deflected around roots",
        riskClassification: "High risk for IAN injury"
    },

    surgicalDetails: {
        procedure: "Surgical extraction #17, #32 under IV sedation",
        rightSide: "Difficult extraction - roots fragmented, IAN visualized in socket",
        leftSide: "Uncomplicated",
        nerveVisualization: "IAN was seen in extraction socket but appeared intact"
    },

    physicalExamination: {
        rightV3Distribution: {
            lowerLip: "Complete anesthesia",
            chin: "Complete anesthesia",
            gingiva: "Numb from midline to angle",
            twoPointDiscrimination: "Unable to perceive any stimuli"
        },
        leftV3Distribution: "Normal sensation",
        lingualNerve: "Intact bilaterally - tongue sensation normal",
        motorFunction: "Intact - no facial asymmetry"
    },

    nerveInjuryClassification: {
        seddon: "At minimum neurapraxia, possibly axonotmesis - cannot rule out neurotmesis at this point",
        sunderland: "Cannot classify without surgical exploration",
        clinicalAssessment: "Complete sensory loss suggests significant injury"
    },

    prognosisByType: {
        neurapraxia: { description: "Conduction block, nerve intact", recovery: "Complete recovery weeks to 3 months" },
        axonotmesis: { description: "Axon damage, endoneurium intact", recovery: "Recovery possible over 3-6 months" },
        neurotmesis: { description: "Complete nerve transection", recovery: "No spontaneous recovery, requires repair" }
    },

    managementPlan: {
        immediate: [
            "Document examination thoroughly with sensory mapping",
            "Reassurance - most IAN injuries recover",
            "Soft diet right side to prevent lip biting",
            "NSAIDs - may reduce neural inflammation"
        ],
        monitoring: [
            "Re-examine at 1 week, 1 month, 3 months, 6 months",
            "Serial sensory testing with neurosensory examination",
            "Document any return of sensation - good prognostic sign"
        ],
        pharmacologic: {
            options: ["Vitamin B complex (limited evidence)", "Systemic steroids in first week (controversial)", "Neuropathic pain meds if dysesthesia develops"],
            evidence: "Limited high-quality evidence for any pharmacologic intervention"
        },
        surgicalConsideration: {
            timing: "If no improvement by 3 months, consider microsurgical repair",
            indications: "Complete anesthesia, no recovery, known transection",
            referral: "Microsurgery specialist if repair indicated"
        }
    },

    patientCounseling: [
        "Most IAN injuries recover - 90%+ have meaningful improvement",
        "Recovery time varies - typically 3-6 months, can take up to 2 years",
        "During numbness: be careful eating (lip biting), shaving, hot foods",
        "Report any tingling/pins-needles - actually a GOOD sign of recovery",
        "If pain develops (dysesthesia), we have medications to help",
        "Rare cases may need additional surgery - we'll monitor closely"
    ],

    preventionStrategies: [
        "CBCT when panorex suggests high risk",
        "Consider coronectomy for high-risk teeth",
        "Staged extraction (coronectomy then root retrieval later)",
        "Orthodontic extrusion before extraction",
        "Informed consent discussing nerve injury risk"
    ],

    keyTeachingPoints: [
        "IAN injury occurs in 0.5-5% of mandibular third molar extractions",
        "Panorex signs of high risk: canal deflection, darkening of root, loss of canal white line",
        "Most injuries (>90%) recover with observation - reassure patient",
        "Serial sensory exams document recovery trajectory",
        "Microsurgical repair considered if no improvement by 3 months",
        "Coronectomy is an alternative for very high-risk teeth"
    ],

    evidenceBase: {
        guidelines: ["AAOMS White Paper on Third Molars", "IAN Injury Management Guidelines"],
        keyEvidence: [
            "CBCT identifies high-risk anatomy better than panorex",
            "Coronectomy reduces IAN injury risk 10-fold for high-risk teeth",
            "Microsurgical repair success rates 50-90% depending on timing and injury type"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "peripheral-nerve-module", title: "Peripheral Nerve Injury and Repair" },
        coachdx: { id: "omfs-complication-management", title: "Surgical Complication Discussion" }
    }
},

// ============================================================================
// OMFS-005: TMJ DISORDER - Medical vs Surgical
// ============================================================================
"OMFS-005": {
    id: "OMFS-005",
    title: "TMJ Internal Derangement - Treatment Planning",
    category: "TMJ Disorders",
    difficulty: "Intermediate",
    profession: "omfs",
    
    patient: {
        name: "Michelle Adams",
        age: 34,
        sex: "Female",
        allergies: ["Sulfa"],
        medicalHistory: ["Anxiety", "Migraines"],
        setting: "OMFS Clinic"
    },
    
    chiefComplaint: "Jaw pain and clicking for years, now my jaw locks closed",
    
    clinicalScenario: `A 34-year-old woman presents with progressive right TMJ symptoms over 
5 years. Initially clicking with opening, she now experiences episodes where her jaw "locks" 
and she cannot open fully. She has to wiggle her jaw to "pop it back." Pain is 6/10 daily, 
worse with chewing. She has failed splint therapy and physical therapy.`,

    historyOfPresentIllness: {
        duration: "5 years progressive",
        initialSymptom: "Clicking with opening",
        currentSymptom: "Closed lock episodes - cannot open fully until manipulates jaw",
        pain: "6/10 constant, 8/10 with chewing",
        priorTreatment: [
            "Occlusal splint (night guard) - 6 months - minimal improvement",
            "Physical therapy - 3 months - some improvement in pain",
            "NSAIDs - ongoing - partial relief",
            "Muscle relaxants - tried, discontinued due to sedation"
        ]
    },

    physicalExamination: {
        rom: {
            mio: "28mm active (normal >40mm)",
            passiveStretch: "35mm with gentle pressure",
            deviation: "Deflects to right on opening",
            lateralExcursion: "Right 4mm, Left 8mm (right limited)"
        },
        tmjExamination: {
            palpation: "Right TMJ tender laterally and posteriorly",
            sounds: "Click at 18mm opening, reciprocal click on closing (earlier than opening click)",
            leftTmj: "Normal, no tenderness or sounds"
        },
        muscleExamination: {
            masseter: "Right > Left tenderness, mild hypertrophy",
            temporalis: "Bilateral mild tenderness",
            pterygoids: "Right lateral pterygoid tender"
        },
        occlusion: "Class I, stable, no posterior open bite"
    },

    imaging: {
        mri: {
            rightTMJ: "Anterior disc displacement with reduction. Disc deformed (biconvex). Early degenerative changes of condyle.",
            leftTMJ: "Normal disc position and morphology"
        },
        cbct: {
            rightCondyle: "Mild flattening of condylar head, no osteophytes",
            leftCondyle: "Normal morphology"
        }
    },

    diagnosis: {
        wilkesClassification: "Stage III (early-intermediate) - ADDwR with intermittent locking",
        components: [
            "Anterior disc displacement with reduction (right)",
            "Myofascial pain dysfunction",
            "Early degenerative joint disease"
        ]
    },

    treatmentOptions: {
        conservative: {
            options: [
                "Continue current management",
                "Trigger point injections",
                "Botox to masseters",
                "Arthrocentesis"
            ],
            discussion: "She has failed first-line conservative care. Next step could be arthrocentesis (minimally invasive) before considering open surgery."
        },
        minimallyInvasive: {
            arthrocentesis: {
                description: "Joint lavage with lactated Ringer's, may add steroid or hyaluronic acid",
                successRate: "70-80% improvement in pain and function",
                recovery: "Minimal - 1-2 days",
                indication: "Good option for her - failed conservative, not yet end-stage"
            },
            arthroscopy: {
                description: "Direct visualization, lysis of adhesions, disc repositioning",
                successRate: "80-90%",
                recovery: "1-2 weeks",
                indication: "If arthrocentesis fails"
            }
        },
        openSurgery: {
            discectomy: {
                description: "Removal of deranged disc",
                indication: "Severely deformed disc, failed arthroscopy",
                outcomes: "Good pain relief, some risk of DJD progression"
            },
            discRepositioning: {
                description: "Plication to reposition disc",
                indication: "Less deformed disc, reducible displacement",
                outcomes: "Variable - disc may re-displace"
            },
            totalJointReplacement: {
                indication: "End-stage DJD, ankylosis, failed prior surgeries",
                notIndicated: "Premature for this patient"
            }
        }
    },

    recommendedPlan: {
        step1: "Arthrocentesis right TMJ with hyaluronic acid injection",
        ifFails: "Arthroscopy with lysis of adhesions",
        ifStillFails: "Open surgery consideration",
        ongoing: "Continue splint at night, PT for muscle component"
    },

    keyTeachingPoints: [
        "TMJ treatment is stepwise: conservative → minimally invasive → open surgery",
        "Most TMJ disorders do NOT require surgery - 85-90% respond to conservative care",
        "Arthrocentesis is simple, low-risk, and often effective for internal derangement",
        "MRI is imaging of choice for disc evaluation",
        "Wilkes classification guides treatment based on disease stage",
        "Myofascial pain often coexists with joint pathology - treat both"
    ],

    evidenceBase: {
        guidelines: ["AAOMS TMJ Surgery Parameters of Care", "ICAGD TMJ Guidelines"],
        keyEvidence: [
            "Arthrocentesis has 70-80% success rate for internal derangement",
            "Arthroscopy and arthrocentesis have similar outcomes for early-stage disease",
            "Long-term outcomes of TMJ surgery generally favorable"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "tmj-anatomy-module", title: "TMJ Anatomy and Biomechanics" },
        coachdx: { id: "omfs-tmj-discussion", title: "TMJ Treatment Planning" }
    }
}

};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = REASONDX_OMFS_CASES;
}
if (typeof window !== 'undefined') {
    window.REASONDX_OMFS_CASES = REASONDX_OMFS_CASES;
}

console.log('[ReasonDx-OMFS] Loaded ' + Object.keys(REASONDX_OMFS_CASES).length + ' OMFS cases');
