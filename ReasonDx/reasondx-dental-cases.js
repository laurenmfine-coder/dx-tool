/**
 * REASONDX DENTAL (DDS/DMD) CASES
 * Clinical Dental Reasoning & Diagnosis
 * 
 * Case Structure: Chief complaint → History → Examination → 
 * Differential diagnosis → Treatment planning
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 * For PRG Grant - Multi-Institutional Validation Study
 */

const REASONDX_DENTAL_CASES = {

// ============================================================================
// DENTAL-001: ACUTE DENTAL PAIN - Pulpitis vs Abscess
// ============================================================================
"DENTAL-001": {
    id: "DENTAL-001",
    title: "Acute Dental Pain Diagnosis",
    category: "Endodontics",
    difficulty: "Intermediate",
    profession: "dental",
    
    patient: {
        name: "Michael Torres",
        age: 34,
        sex: "Male",
        allergies: ["None"],
        medicalHistory: ["Healthy"],
        setting: "General Dental Practice - Emergency Visit"
    },
    
    chiefComplaint: "Severe right lower tooth pain keeping me up at night",
    
    clinicalScenario: `Mr. Torres presents as an emergency patient with 3 days of worsening 
right lower tooth pain. Initially the pain was triggered by cold drinks, but now it's 
constant and throbbing. He describes it as 8/10 and says it kept him awake last night. 
Ibuprofen 400mg provides only 2 hours of relief. He points to the lower right quadrant 
but can't identify a specific tooth.`,

    historyOfPresentIllness: {
        onset: "3 days ago",
        character: "Started sharp with cold, now constant throbbing",
        severity: "8/10",
        timing: "Constant, worse at night when lying down",
        aggravating: "Hot foods (more than cold now), biting, lying down",
        relieving: "Ibuprofen (partial, temporary), sitting upright",
        associated: "Mild swelling noticed this morning"
    },

    dentalHistory: {
        lastExam: "2 years ago",
        lastCleaning: "2 years ago",
        knownIssues: "Patient recalls being told he had a cavity in lower right",
        relevantHistory: "No history of root canals, extractions, or trauma"
    },

    clinicalExamination: {
        extraoral: {
            swelling: "Mild fullness right submandibular area",
            lymphNodes: "Right submandibular node slightly enlarged, tender",
            TMJ: "Normal ROM, no clicking or pain"
        },
        intraoral: {
            softTissue: "Localized erythema and swelling buccal to #30",
            tooth30: "Large mesio-occlusal carious lesion, percussion positive ++, palpation positive over apex",
            tooth29: "Mild recession, percussion negative, vital",
            tooth31: "Old amalgam restoration, percussion negative, vital"
        },
        pulpTesting: {
            tooth30Cold: "No response (necrotic)",
            tooth30EPT: "No response",
            tooth29Cold: "Normal response, lingering 3 seconds",
            tooth31Cold: "Normal response, brief"
        },
        radiographic: {
            finding: "Periapical radiolucency at apex of #30 (~4mm diameter), deep carious lesion approaching pulp",
            boneLevel: "Normal crestal bone levels"
        }
    },

    differentialDiagnosis: [
        { diagnosis: "Acute Apical Abscess #30", likelihood: "Most Likely", reasoning: "Necrotic pulp, periapical radiolucency, swelling, percussion/palpation positive" },
        { diagnosis: "Symptomatic Apical Periodontitis #30", likelihood: "Possible", reasoning: "Could be earlier stage without purulent collection" },
        { diagnosis: "Irreversible Pulpitis #30", likelihood: "Less Likely", reasoning: "Lack of cold response indicates necrosis already occurred" },
        { diagnosis: "Cracked Tooth #30", likelihood: "Unlikely", reasoning: "No history of trauma, radiograph shows clear carious etiology" }
    ],

    diagnosis: {
        primary: "Acute Apical Abscess - Tooth #30",
        aapClassification: "Pulp Necrosis with Symptomatic Apical Periodontitis",
        etiology: "Untreated carious lesion → pulpal necrosis → periapical infection"
    },

    treatmentOptions: [
        {
            option: "Root Canal Therapy #30",
            description: "Pulpectomy, cleaning/shaping, obturation",
            prognosis: "Good - 90%+ success rate",
            timeline: "May require 1-2 visits",
            followup: "Crown recommended after RCT"
        },
        {
            option: "Extraction #30",
            description: "Surgical removal of tooth",
            prognosis: "Eliminates infection, creates edentulous space",
            considerations: "Patient desires to keep tooth if possible",
            followup: "Consider implant or bridge for replacement"
        }
    ],

    emergencyManagement: [
        "Incision and drainage if fluctuant swelling present",
        "Pulpotomy/pulpectomy for immediate pain relief",
        "Antibiotics: Amoxicillin 500mg TID x 7 days (or Clindamycin 300mg TID if penicillin allergy)",
        "Analgesics: Ibuprofen 600mg + Acetaminophen 1000mg alternating",
        "Definitive treatment within 1-2 weeks"
    ],

    keyTeachingPoints: [
        "Spontaneous, constant pain indicates irreversible pulpal damage",
        "No response to cold + periapical radiolucency = pulpal necrosis",
        "Pain worse when lying down suggests increased periapical pressure",
        "Localized swelling indicates abscess formation vs cellulitis",
        "Antibiotics are ADJUNCTIVE - source control (drainage/RCT) is essential",
        "Hot sensitivity replacing cold sensitivity indicates progression to necrosis"
    ],

    evidenceBase: {
        guidelines: ["AAE Diagnosis Guidelines 2021", "ADA Antibiotic Prescribing Guidelines"],
        keyEvidence: [
            "Antibiotics alone do not resolve dental abscess - source control required",
            "Incision and drainage accelerates resolution when fluctuant",
            "RCT success rate >90% for uncomplicated cases"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "pulp-pathology-module", title: "Pulp Pathophysiology" },
        coachdx: { id: "dental-pain-diagnosis", title: "Dental Pain Workup" }
    }
},

// ============================================================================
// DENTAL-002: ORAL MUCOSAL LESION - White Lesion Differential
// ============================================================================
"DENTAL-002": {
    id: "DENTAL-002",
    title: "White Oral Mucosal Lesion",
    category: "Oral Pathology",
    difficulty: "Advanced",
    profession: "dental",
    
    patient: {
        name: "Patricia Henderson",
        age: 62,
        sex: "Female",
        allergies: ["Penicillin"],
        medicalHistory: ["Hypertension", "Former smoker (quit 5 years ago, 30 pack-years)"],
        setting: "General Dental Practice - Routine Exam"
    },
    
    chiefComplaint: "Here for cleaning, but noticed a white spot in my mouth",
    
    clinicalScenario: `Mrs. Henderson presents for routine dental prophylaxis. During the oral 
cancer screening portion of the exam, you identify a white lesion on the left lateral tongue 
that the patient says she noticed about 6 weeks ago. She thought it was from biting her 
tongue but it hasn't gone away. She reports no pain. She has a significant smoking history 
(30 pack-years) but quit 5 years ago.`,

    lesionCharacteristics: {
        location: "Left lateral tongue, middle third",
        size: "1.5 cm x 0.8 cm",
        color: "White, cannot be wiped off",
        surface: "Slightly raised, leathery texture",
        borders: "Well-demarcated but irregular",
        induration: "Mild firmness on palpation",
        pain: "None",
        duration: "6 weeks, no change in size"
    },

    riskFactorAssessment: {
        tobacco: "30 pack-years (quit 5 years ago) - HIGH RISK persists 10+ years",
        alcohol: "Occasional social drinking",
        HPV: "Unknown status",
        age: "62 - increased risk",
        location: "Lateral tongue - HIGH RISK site",
        chronicity: "6 weeks without resolution"
    },

    differentialDiagnosis: [
        { 
            diagnosis: "Leukoplakia (potentially dysplastic)", 
            likelihood: "High concern",
            reasoning: "Non-wipeable white lesion, high-risk location, smoking history, persistent",
            malignantPotential: "3-17% transformation rate, higher for lateral tongue"
        },
        { 
            diagnosis: "Oral Squamous Cell Carcinoma", 
            likelihood: "Must exclude",
            reasoning: "High-risk patient, high-risk site, induration concerning",
            urgency: "Biopsy required"
        },
        { 
            diagnosis: "Frictional Keratosis", 
            likelihood: "Possible but less likely",
            reasoning: "No obvious source of trauma, irregular borders less typical"
        },
        { 
            diagnosis: "Oral Lichen Planus", 
            likelihood: "Less likely",
            reasoning: "Usually bilateral, reticular pattern, this is solitary plaque"
        },
        { 
            diagnosis: "Candidiasis (Chronic hyperplastic)", 
            likelihood: "Less likely",
            reasoning: "Cannot be wiped off, but would expect on palate/commissures"
        }
    ],

    diagnosticWorkup: [
        {
            test: "Incisional Biopsy",
            indication: "REQUIRED - cannot diagnose leukoplakia or exclude malignancy clinically",
            technique: "Include lesion margin and normal tissue, adequate depth",
            timing: "Within 2 weeks"
        },
        {
            test: "Oral brush biopsy (OralCDx)",
            role: "Adjunctive screening only - does NOT replace incisional biopsy for this lesion",
            limitation: "High false-negative rate for dysplasia"
        }
    ],

    managementByHistology: {
        "No dysplasia": "Remove irritants, monitor q3 months, patient education, consider removal",
        "Mild dysplasia": "Excision recommended, close follow-up",
        "Moderate/Severe dysplasia": "Excision with margins, referral to oral surgery/ENT",
        "Carcinoma": "Urgent referral to head and neck oncology"
    },

    keyTeachingPoints: [
        "Lateral tongue is the HIGHEST risk site for oral SCC",
        "White lesions that don't wipe off and persist >2 weeks require biopsy",
        "Smoking risk persists for 10+ years after cessation",
        "Leukoplakia is a CLINICAL term - histology determines dysplasia/cancer",
        "Non-homogeneous leukoplakia (irregular surface, mixed red-white) has higher malignant potential",
        "Oral cancer screening should be part of EVERY dental exam"
    ],

    evidenceBase: {
        guidelines: ["AAOMP White Lesion Guidelines", "ADA Oral Cancer Screening Recommendations"],
        keyEvidence: [
            "Lateral tongue SCC accounts for 40-50% of oral cavity cancers",
            "Leukoplakia malignant transformation: 3-17% overall, higher for tongue",
            "Early detection improves 5-year survival from 30% to 80%+"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "oral-pathology-module", title: "Oral Mucosal Pathology" },
        coachdx: { id: "dental-oral-cancer", title: "Oral Cancer Screening" }
    }
},

// ============================================================================
// DENTAL-003: PERIODONTAL ASSESSMENT - Treatment Planning
// ============================================================================
"DENTAL-003": {
    id: "DENTAL-003",
    title: "Periodontal Disease Classification and Treatment",
    category: "Periodontics",
    difficulty: "Intermediate",
    profession: "dental",
    
    patient: {
        name: "James Washington",
        age: 48,
        sex: "Male",
        allergies: ["None"],
        medicalHistory: ["Type 2 Diabetes (A1c 7.8%)", "Hypertension"],
        medications: ["Metformin 1000mg BID", "Lisinopril 20mg daily"],
        setting: "General Dental Practice - New Patient Comprehensive Exam"
    },
    
    chiefComplaint: "My gums bleed when I brush and my teeth feel loose",
    
    clinicalScenario: `Mr. Washington is a new patient who hasn't seen a dentist in 5 years. 
He reports bleeding gums for the past year and recently noticed his lower front teeth 
feel "loose." He has type 2 diabetes that is "somewhat controlled." He brushes once daily 
and does not floss. He is concerned about losing his teeth.`,

    periodontalExamination: {
        probingDepths: {
            generalizedFindings: "4-6mm generalized, 7-8mm #24, #25",
            maxProbingDepth: "8mm on #24 mesial-lingual",
            percentSites4mmPlus: "65%"
        },
        clinicalAttachmentLoss: {
            generalizedCAL: "4-5mm generalized",
            localizedCAL: "6-7mm #24, #25 (mandibular incisors)",
            percentBoneLoss: "30-50% generalized, >50% #24-25"
        },
        bleeding: {
            bleedingOnProbing: "75% of sites",
            suppuration: "Present at #24, #25"
        },
        mobility: {
            tooth24: "Grade II (>1mm horizontal)",
            tooth25: "Grade II",
            others: "Grade I scattered"
        },
        furcations: {
            tooth3: "Class I buccal",
            tooth14: "Class I buccal",
            tooth19: "Class II buccal",
            tooth30: "Class I buccal"
        },
        plaque: "Heavy supragingival and subgingival calculus generalized"
    },

    radiographicFindings: {
        boneLoss: "Generalized horizontal bone loss 30-50%",
        localizedDefects: "Vertical defect mesial #24 and #25",
        furcationInvolvement: "Early furcation radiolucency #19",
        calculus: "Subgingular calculus visible on radiographs"
    },

    riskAssessment: {
        diabetesControl: "Moderate - A1c 7.8% increases perio risk 2-3x",
        smoking: "Non-smoker - favorable",
        compliance: "Poor (5 years since dental visit, no flossing)",
        geneticRisk: "Unknown - reports father lost teeth early"
    },

    diagnosis: {
        classification: "Periodontitis Stage III Grade C",
        staging: {
            stage: "III - Severe periodontitis",
            criteria: "CAL ≥5mm, bone loss extending to middle third, tooth loss due to periodontitis (pending)",
            complexity: "Probing depths ≥6mm, vertical bone loss, Class II furcation, moderate ridge defects"
        },
        grading: {
            grade: "C - Rapid progression",
            criteria: "Bone loss/age ratio suggests rapid progression, diabetes as risk factor",
            riskModification: "Diabetes (A1c >7%) modifies to Grade C"
        }
    },

    treatmentPlan: {
        phase1: {
            name: "Non-Surgical Periodontal Therapy",
            steps: [
                "Patient education and oral hygiene instruction",
                "Full mouth scaling and root planing (4 quadrants)",
                "Chlorhexidine rinse 0.12% BID x 2 weeks post-SRP",
                "Re-evaluation at 4-6 weeks"
            ]
        },
        diabetesCoordination: "Letter to PCP recommending optimization of glycemic control",
        phase2: {
            name: "Surgical Phase (if indicated after re-eval)",
            considerations: [
                "Osseous surgery if pockets persist >5mm",
                "Consider regenerative procedures for #24, #25 vertical defects",
                "Possible extraction #24 if prognosis poor"
            ]
        },
        maintenance: {
            frequency: "3-month periodontal maintenance intervals",
            rationale: "Stage III periodontitis requires frequent professional maintenance"
        }
    },

    prognosisByTooth: {
        generalPrognosis: "Fair to Guarded with compliance",
        tooth24: "Poor - Grade II mobility, vertical defect, suppuration",
        tooth25: "Guarded - may improve with treatment",
        furcationTeeth: "Guarded - Class II furcation #19 may require extraction long-term"
    },

    keyTeachingPoints: [
        "2017 AAP/EFP Classification uses Staging (severity) and Grading (progression rate)",
        "Diabetes significantly increases periodontitis risk AND periodontitis worsens glycemic control",
        "Grade C includes rapid progressors AND those with risk factors like diabetes",
        "SRP is first-line treatment - surgery reserved for non-responsive sites",
        "3-month maintenance intervals essential for Stage III/IV periodontitis",
        "Coordinate with PCP for diabetes optimization - bidirectional relationship"
    ],

    evidenceBase: {
        guidelines: ["AAP/EFP Periodontitis Classification 2017", "ADA Periodontal Treatment Guidelines"],
        keyEvidence: [
            "SRP reduces probing depths average 1-2mm",
            "A1c improvement of 0.4% seen after periodontal treatment",
            "3-month maintenance superior to 6-month for Stage III periodontitis"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "periodontal-module", title: "Periodontal Disease Mechanisms" },
        coachdx: { id: "dental-perio-planning", title: "Periodontal Treatment Planning" }
    }
},

// ============================================================================
// DENTAL-004: DENTAL TRAUMA - Avulsed Permanent Tooth
// ============================================================================
"DENTAL-004": {
    id: "DENTAL-004",
    title: "Dental Trauma - Avulsed Tooth Management",
    category: "Emergency Dentistry",
    difficulty: "Advanced",
    profession: "dental",
    
    patient: {
        name: "Emma Rodriguez",
        age: 12,
        sex: "Female",
        allergies: ["None"],
        medicalHistory: ["Healthy, immunizations up to date"],
        setting: "Dental Office - Emergency Call"
    },
    
    chiefComplaint: "My daughter got hit in the mouth at soccer and her tooth came out",
    
    clinicalScenario: `You receive an emergency call from a frantic parent. Her 12-year-old 
daughter Emma was hit in the mouth by another player's elbow during soccer practice 20 
minutes ago. The parent found the tooth on the ground and put it in a cup of milk. They 
are 15 minutes away from your office. The tooth appears to be a front tooth.`,

    phoneTriageQuestions: [
        { question: "Is this a baby tooth or permanent tooth?", answer: "Permanent - she's 12, lost baby teeth years ago" },
        { question: "How long has the tooth been out?", answer: "About 20 minutes now" },
        { question: "How is the tooth being stored?", answer: "In cold milk" },
        { question: "Was the tooth cleaned?", answer: "Mom rinsed it briefly with water" },
        { question: "Any other injuries - head, neck, loss of consciousness?", answer: "No, she's alert, just bleeding from mouth" }
    ],

    phoneInstructions: [
        "You did the RIGHT thing putting it in milk - keep it there",
        "Do NOT scrub the tooth or let it dry out",
        "Come in immediately - time is critical",
        "If she can tolerate it, the best storage is in her own saliva or back in the socket",
        "Apply pressure to the socket with clean gauze to control bleeding"
    ],

    clinicalExamination: {
        extraoral: "Mild swelling upper lip, no lacerations",
        intraoral: {
            avulsedTooth: "#8 (maxillary right central incisor)",
            socket: "Blood clot present, labial plate intact on palpation",
            adjacentTeeth: "#7 and #9 - slight mobility, no displacement, percussion sensitive",
            softTissue: "Minor gingival laceration labial to #8"
        },
        avulsedToothCondition: {
            extraoralTime: "35 minutes (20 min initial + 15 min transport)",
            storage: "Cold milk - appropriate",
            root: "Closed apex (mature tooth)",
            crown: "Intact, no fractures",
            rootSurface: "PDL appears intact, no contamination visible"
        }
    },

    diagnosis: {
        primary: "Avulsion - Permanent tooth #8 with closed apex",
        secondary: "Concussion injuries #7 and #9",
        classification: "Dental trauma requiring immediate replantation"
    },

    treatment: {
        immediate: [
            "Gently rinse tooth with saline (do not scrub)",
            "Gently irrigate socket with saline",
            "Replant tooth with gentle digital pressure",
            "Verify position clinically and radiographically"
        ],
        splinting: {
            type: "Flexible splint (wire + composite or titanium trauma splint)",
            duration: "2 weeks for avulsion",
            technique: "Bond to adjacent teeth, allow physiologic movement"
        },
        medications: [
            "Tetanus prophylaxis if not current (refer to PCP)",
            "Doxycycline 100mg BID x 7 days (if >12 years old) OR Amoxicillin 500mg TID",
            "Chlorhexidine 0.12% rinse BID x 1 week",
            "Ibuprofen for pain as needed"
        ],
        rootCanalTiming: {
            closedApex: "Initiate RCT within 7-10 days (pulp necrosis expected)",
            openApex: "Different protocol - revascularization possible"
        }
    },

    followUp: {
        week1: "Check splint, soft tissue healing",
        week2: "Remove splint, check mobility, periapical radiograph",
        week4: "Begin RCT (pulp extirpation), calcium hydroxide dressing",
        month3: "Complete RCT obturation, baseline radiograph",
        ongoing: "Annual radiographs for 5 years monitoring for resorption"
    },

    prognosticFactors: {
        favorable: [
            "Short extraoral dry time (<60 minutes)",
            "Appropriate storage medium (milk)",
            "Intact PDL",
            "Closed apex (predictable RCT)"
        ],
        unfavorable: [
            "Any extraoral dry time reduces long-term survival",
            "Inflammatory or replacement resorption possible",
            "Long-term survival ~50-70% at 5 years even with optimal management"
        ]
    },

    keyTeachingPoints: [
        "Time is CRITICAL - every minute extraoral reduces prognosis",
        "Best storage: Hank's solution > milk > saliva > saline >> water >> dry",
        "NEVER scrub the root - PDL cells are essential for healing",
        "Closed apex teeth require RCT; open apex may revascularize",
        "Flexible splint for 2 weeks (not rigid, not prolonged)",
        "Systemic antibiotics reduce infection risk",
        "Long-term monitoring essential - resorption can occur years later"
    ],

    evidenceBase: {
        guidelines: ["IADT Dental Trauma Guidelines 2020", "AAE Traumatic Injuries Guidelines"],
        keyEvidence: [
            "PDL cell viability: 30 min dry = 50% survival; 60 min = near 0%",
            "Milk preserves PDL cells for 1-2 hours",
            "Flexible splinting superior to rigid for PDL healing"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "dental-trauma-module", title: "Dental Trauma Healing" },
        coachdx: { id: "dental-emergency", title: "Dental Emergency Management" }
    }
},

// ============================================================================
// DENTAL-005: RESTORATIVE DECISION - Crown vs Large Restoration
// ============================================================================
"DENTAL-005": {
    id: "DENTAL-005",
    title: "Restorative Treatment Planning",
    category: "Restorative Dentistry",
    difficulty: "Intermediate",
    profession: "dental",
    
    patient: {
        name: "David Kim",
        age: 45,
        sex: "Male",
        allergies: ["Latex"],
        medicalHistory: ["Healthy"],
        setting: "General Dental Practice - Treatment Planning Visit"
    },
    
    chiefComplaint: "Part of my filling fell out and now it's sensitive",
    
    clinicalScenario: `Mr. Kim presents after noticing a piece of his "silver filling" came 
out while eating. The tooth #19 (mandibular left first molar) now has sensitivity to cold 
and sweets. He had the original amalgam placed 15 years ago. He wants to know his options 
and is concerned about cost.`,

    clinicalExamination: {
        tooth19: {
            existingRestoration: "Large MOD amalgam with fractured distal marginal ridge",
            remainingStructure: "Buccal and lingual cusps intact but undermined",
            caries: "Secondary caries at distal margin extending subgingivally",
            pulpTesting: "Cold positive (normal response, no lingering)",
            percussion: "Negative",
            probingDepths: "3mm all surfaces"
        },
        radiographic: {
            caries: "Radiolucency distal margin extending toward pulp (1.5mm clearance)",
            existingRestoration: "Large amalgam, isthmus >1/2 intercuspal width",
            periapical: "Normal periapical structures",
            rootCanals: "No previous RCT"
        },
        structuralAssessment: {
            remainingToothStructure: "<50% of coronal structure",
            cuspalCoverage: "Both lingual cusps undermined",
            ferrule: "Adequate if crown placed",
            cariesExtent: "Extends to CEJ distally"
        }
    },

    treatmentOptions: [
        {
            option: "Full Coverage Crown (PFM or Zirconia)",
            indication: "Preferred - extensive loss of tooth structure",
            advantages: [
                "Protects remaining cusps from fracture",
                "Best long-term prognosis for heavily restored molars",
                "Addresses undermined cusps"
            ],
            disadvantages: [
                "Higher cost",
                "More tooth reduction",
                "2 appointments typically"
            ],
            prognosis: "Excellent - 90%+ 10-year survival",
            estimatedCost: "$$$"
        },
        {
            option: "Onlay (Gold, Ceramic, or Composite)",
            indication: "Reasonable alternative - more conservative",
            advantages: [
                "Preserves more tooth structure than crown",
                "Cuspal coverage without full reduction",
                "Good esthetics with ceramic"
            ],
            disadvantages: [
                "Technique sensitive",
                "May not address subgingival caries as easily"
            ],
            prognosis: "Very good - 85%+ 10-year survival",
            estimatedCost: "$$-$$$"
        },
        {
            option: "Large Direct Composite Restoration",
            indication: "Budget option but compromised prognosis",
            advantages: [
                "Single appointment",
                "Lower initial cost",
                "Most conservative preparation"
            ],
            disadvantages: [
                "Does not protect cusps - fracture risk",
                "Bulk fill technique challenging",
                "Higher failure rate for large restorations"
            ],
            prognosis: "Guarded - 60-70% 5-year survival for large MOD",
            estimatedCost: "$"
        },
        {
            option: "New Amalgam Restoration",
            indication: "Not recommended for this case",
            reasoning: "Undermined cusps and extent of caries favor cuspal coverage",
            prognosis: "Poor - high fracture risk"
        }
    ],

    recommendedTreatment: {
        choice: "Full Coverage Crown",
        material: "Zirconia (patient prefers metal-free)",
        rationale: [
            "Remaining tooth structure <50%",
            "Both lingual cusps undermined - fracture risk without coverage",
            "History of restoration fracture suggests parafunctional forces",
            "Long-term cost-effectiveness superior despite higher initial cost"
        ],
        procedure: [
            "Caries excavation and pulp protection (if needed)",
            "Core buildup if insufficient retention",
            "Crown preparation with adequate ferrule",
            "Impressions and provisional",
            "Crown delivery and occlusal adjustment"
        ]
    },

    informedConsentDiscussion: [
        "Risk of pulpal injury during preparation (5-15% for vital teeth)",
        "Possible need for root canal if symptoms develop",
        "Crown longevity expectations (10-15+ years typical)",
        "Alternative treatment options and their prognoses",
        "Cost comparison and insurance coverage"
    ],

    keyTeachingPoints: [
        "Isthmus width >1/2 intercuspal distance indicates crown/onlay needed",
        "Cuspal coverage is protective - prevents cusp fracture",
        "Initial cost vs long-term value: crowns often more cost-effective",
        "Direct composite MOD restorations have higher failure rates",
        "Consider patient factors: bruxism, caries risk, finances, expectations",
        "Shared decision-making with clear prognosis discussion"
    ],

    evidenceBase: {
        guidelines: ["ADA Restorative Guidelines", "Academy of Operative Dentistry Recommendations"],
        keyEvidence: [
            "Crowns on endodontically treated molars: 10-year survival 90%+",
            "Large direct composites: 5-year failure rate 30-40%",
            "Cusp coverage reduces fracture risk significantly"
        ]
    },
    
    crossPlatformLinks: {
        mechanismdx: { id: "restorative-materials-module", title: "Dental Materials Science" },
        coachdx: { id: "dental-treatment-planning", title: "Restorative Decision Making" }
    }
}

};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = REASONDX_DENTAL_CASES;
}
if (typeof window !== 'undefined') {
    window.REASONDX_DENTAL_CASES = REASONDX_DENTAL_CASES;
}

console.log('[ReasonDx-Dental] Loaded ' + Object.keys(REASONDX_DENTAL_CASES).length + ' dental cases');
