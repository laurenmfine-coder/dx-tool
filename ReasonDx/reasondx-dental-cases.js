// ReasonDx Dental Cases - DDS-001 to DDS-025 (Pain Cases)
// EVIDENCE-BASED VERSION with Full Citations
// Part of Dx Learning Ecosystem Multi-Profession Expansion
// Lauren Fine, MD, FAAAAI | January 2026

/*
 * EVIDENCE BASE SUMMARY
 * ---------------------
 * Primary Guidelines:
 * - AAE Consensus Conference Diagnostic Terminology (2009)
 * - ADA Clinical Practice Guideline on Antibiotic Use (2019)
 * 
 * Supporting Evidence:
 * - Mainkar & Kim (2018) - Pulp Testing Diagnostic Accuracy Meta-analysis
 * - Chen & Abbott (2009) - Dental Pulp Testing Review
 * - Ricucci et al. (2014) - Histological-Clinical Correlation
 */

const DENTAL_EVIDENCE_BASE = {
    // PRIMARY GUIDELINES
    guidelines: {
        AAE_DIAGNOSTIC_TERMINOLOGY: {
            shortName: "AAE Diagnostic Terminology 2009",
            fullCitation: "Glickman GN. AAE Consensus Conference on Diagnostic Terminology: background and perspectives. J Endod. 2009;35(12):1619-20.",
            doi: "10.1016/j.joen.2009.09.029",
            pmid: "19932336",
            url: "https://pubmed.ncbi.nlm.nih.gov/19932336/",
            openAccess: false,
            pdfUrl: "https://www.aae.org/specialty/wp-content/uploads/sites/2/2017/07/aaeconsensusconferencerecommendeddiagnosticterminology.pdf"
        },
        AAE_DIAGNOSTIC_TERMS_FULL: {
            shortName: "AAE Recommended Diagnostic Terminology",
            fullCitation: "AAE Consensus Conference Recommended Diagnostic Terminology. J Endod. 2009;35(12):1634.",
            doi: "10.1016/j.joen.2009.09.035",
            pmid: "19932385",
            url: "https://pubmed.ncbi.nlm.nih.gov/19932385/",
            openAccess: false
        },
        ADA_ANTIBIOTIC_GUIDELINE: {
            shortName: "ADA Antibiotic Guideline 2019",
            fullCitation: "Lockhart PB, Tampi MP, Abt E, et al. Evidence-based clinical practice guideline on antibiotic use for the urgent management of pulpal- and periapical-related dental pain and intraoral swelling. J Am Dent Assoc. 2019;150(11):906-921.e12.",
            doi: "10.1016/j.adaj.2019.08.020",
            pmid: "31668170",
            pmcid: "PMC8270006",
            url: "https://pubmed.ncbi.nlm.nih.gov/31668170/",
            openAccessUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8270006/",
            openAccess: true,
            adaResourceUrl: "https://www.ada.org/resources/research/science/evidence-based-dental-research/antibiotics-for-dental-pain-and-swelling"
        }
    },
    
    // SUPPORTING EVIDENCE - Diagnostic Testing
    diagnosticEvidence: {
        MAINKAR_PULP_TEST_META: {
            shortName: "Mainkar & Kim 2018 (Pulp Test Meta-analysis)",
            fullCitation: "Mainkar A, Kim SG. Diagnostic Accuracy of 5 Dental Pulp Tests: A Systematic Review and Meta-analysis. J Endod. 2018;44(5):694-702.",
            doi: "10.1016/j.joen.2018.01.021",
            pmid: "29571914",
            url: "https://pubmed.ncbi.nlm.nih.gov/29571914/",
            openAccess: false,
            keyFindings: {
                coldTestSensitivity: 0.87,
                coldTestSpecificity: 0.84,
                eptSensitivity: 0.72,
                eptSpecificity: 0.93,
                conclusion: "Cold pulp testing has generally high diagnostic accuracy among pulp sensibility tests"
            }
        },
        CHEN_ABBOTT_PULP_TESTING: {
            shortName: "Chen & Abbott 2009 (Pulp Testing Review)",
            fullCitation: "Chen E, Abbott PV. Dental Pulp Testing: A Review. Int J Dent. 2009;2009:365785.",
            doi: "10.1155/2009/365785",
            pmid: "20379362",
            pmcid: "PMC2837315",
            url: "https://pubmed.ncbi.nlm.nih.gov/20379362/",
            openAccessUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2837315/",
            openAccess: true
        },
        JAFARZADEH_THERMAL_TESTS: {
            shortName: "Jafarzadeh & Abbott 2010 (Thermal Tests)",
            fullCitation: "Jafarzadeh H, Abbott PV. Review of pulp sensibility tests. Part I: general information and thermal tests. Int Endod J. 2010;43(9):738-62.",
            doi: "10.1111/j.1365-2591.2010.01754.x",
            pmid: "20609022",
            url: "https://pubmed.ncbi.nlm.nih.gov/20609022/",
            openAccess: false
        }
    },
    
    // PATHOPHYSIOLOGY EVIDENCE
    pathophysiology: {
        RICUCCI_HISTOLOGY: {
            shortName: "Ricucci et al. 2014 (Histologic Correlation)",
            fullCitation: "Ricucci D, Loghin S, Siqueira JF Jr. Correlation between clinical and histologic pulp diagnoses. J Endod. 2014;40(12):1932-9.",
            doi: "10.1016/j.joen.2014.08.010",
            pmid: "25305236",
            url: "https://pubmed.ncbi.nlm.nih.gov/25305236/",
            openAccess: false,
            keyFinding: "96.6% correlation between clinical diagnosis of normal pulp/reversible pulpitis and histologic findings"
        },
        WOLTERS_CLASSIFICATION: {
            shortName: "Wolters et al. 2017 (New Classification)",
            fullCitation: "Wolters WJ, Duncan HF, Tomson PL, et al. Minimally invasive endodontics: a new diagnostic system for assessing pulpitis and subsequent treatment needs. Int Endod J. 2017;50(9):825-829.",
            doi: "10.1111/iej.12793",
            pmid: "28833313",
            url: "https://pubmed.ncbi.nlm.nih.gov/28833313/",
            openAccess: false
        }
    }
};

const dentalCases = [
    // ==================== DDS-001: REVERSIBLE PULPITIS ====================
    {
        id: "dds-001-reversible-pulpitis",
        title: "Cold-Sensitive Tooth",
        category: "Dental-Pain",
        profession: "DDS",
        icon: "🦷",
        difficulty: "foundational",
        urgency: "routine",
        mechanismLinks: ["DENT-2: Dental Pain Mechanisms", "DENT-4: Caries Progression"],
        
        evidenceBase: {
            primaryGuidelines: [
                DENTAL_EVIDENCE_BASE.guidelines.AAE_DIAGNOSTIC_TERMINOLOGY,
                DENTAL_EVIDENCE_BASE.guidelines.AAE_DIAGNOSTIC_TERMS_FULL
            ],
            supportingEvidence: [
                DENTAL_EVIDENCE_BASE.diagnosticEvidence.MAINKAR_PULP_TEST_META,
                DENTAL_EVIDENCE_BASE.diagnosticEvidence.CHEN_ABBOTT_PULP_TESTING,
                DENTAL_EVIDENCE_BASE.pathophysiology.RICUCCI_HISTOLOGY
            ],
            evidenceSummary: "AAE defines reversible pulpitis as inflammation that should resolve when the irritant is removed. Cold testing has 87% sensitivity and 84% specificity for pulp status (Mainkar 2018). Clinical-histologic correlation is 96.6% for reversible pulpitis (Ricucci 2014)."
        },
        
        guidelineReferences: [
            {
                name: "AAE Consensus Conference Diagnostic Terminology",
                citation: "Glickman GN. J Endod. 2009;35(12):1619-20",
                doi: "10.1016/j.joen.2009.09.029",
                pmid: "19932336",
                openAccess: false,
                keyPoints: [
                    "Reversible pulpitis: Clinical diagnosis indicating inflammation should resolve and pulp return to normal",
                    "Based on subjective and objective findings",
                    "Pain is sharp, transient, and resolves quickly after stimulus removal"
                ]
            },
            {
                name: "Pulp Testing Diagnostic Accuracy Meta-analysis",
                citation: "Mainkar A, Kim SG. J Endod. 2018;44(5):694-702",
                doi: "10.1016/j.joen.2018.01.021",
                pmid: "29571914",
                openAccess: false,
                keyPoints: [
                    "Cold test sensitivity: 87%, specificity: 84%",
                    "Cold testing has highest diagnostic accuracy among sensibility tests",
                    "Electric pulp test: sensitivity 72%, specificity 93%"
                ]
            }
        ],
        
        variants: {
            "female-28-typical": {
                name: "Sarah Chen",
                firstName: "Sarah",
                lastName: "Chen",
                age: 28,
                gender: "female",
                setting: "dental_clinic",
                chiefComplaint: "My tooth hurts when I drink cold water, but it goes away quickly",
                patientProfile: {
                    smokingStatus: 'never',
                    alcoholUse: 'social',
                    occupation: 'teacher',
                    dentalHistory: 'regularCheckups',
                    lastDentalVisit: '6 months ago'
                },
                
                history: {
                    hpiFindings: [
                        { finding: "Sharp pain with cold drinks for 2 weeks", category: "character", significance: "key", evidenceNote: "A-delta fiber activation (Chen & Abbott 2009)" },
                        { finding: "Pain resolves within 5 seconds of removing cold", category: "duration", significance: "key", evidenceNote: "Defines reversible vs irreversible (AAE 2009): <30 sec = reversible" },
                        { finding: "No spontaneous pain", category: "timing", significance: "key", evidenceNote: "Absence of C-fiber dominant pain" },
                        { finding: "No pain with chewing", category: "aggravating", significance: "relevant" },
                        { finding: "Patient can localize to upper right area", category: "location", significance: "relevant" },
                        { finding: "No swelling noted", category: "associated", significance: "relevant" }
                    ],
                    symptomDuration: "2 weeks",
                    painScale: "5/10 with cold, 0/10 at rest"
                },
                
                clinicalExam: {
                    extraoral: {
                        findings: [
                            { finding: "No facial swelling", significance: "reassuring" },
                            { finding: "No lymphadenopathy", significance: "reassuring" },
                            { finding: "Normal mouth opening", significance: "reassuring" }
                        ]
                    },
                    intraoral: {
                        findings: [
                            { finding: "Tooth #3 (upper right first molar) has visible occlusal caries", significance: "key", tooth: 3 },
                            { finding: "No gingival swelling or sinus tract", significance: "reassuring" },
                            { finding: "Adjacent teeth appear normal", significance: "relevant" }
                        ]
                    },
                    pulpTesting: {
                        methodology: "Cold test with Endo-Ice (1,1,1,2-tetrafluoroethane) per Jafarzadeh & Abbott 2010 protocol",
                        coldTest: { 
                            tooth: 3, 
                            response: "Sharp pain, resolves in 3 seconds", 
                            significance: "diagnostic",
                            interpretation: "Normal A-delta fiber response with quick resolution indicates reversible pulpitis (AAE 2009)"
                        },
                        percussion: { tooth: 3, response: "No pain", significance: "reassuring", interpretation: "No apical periodontitis" },
                        palpation: { tooth: 3, response: "No tenderness over apex", significance: "reassuring" },
                        biteTest: { tooth: 3, response: "No pain", significance: "reassuring" }
                    }
                },
                
                imaging: {
                    periapical: {
                        findings: [
                            { finding: "Radiolucency in occlusal enamel/dentin of tooth #3", significance: "key" },
                            { finding: "Caries does not appear to reach pulp", significance: "key" },
                            { finding: "Normal periapical tissues", significance: "reassuring" },
                            { finding: "Intact lamina dura", significance: "reassuring" }
                        ]
                    }
                },
                
                diagnosis: {
                    primary: "Reversible Pulpitis - Tooth #3",
                    aaeClassification: "Reversible pulpitis with normal apical tissues",
                    differential: [
                        { diagnosis: "Irreversible Pulpitis", likelihood: "low", reasoning: "Pain does not linger (>30 sec), no spontaneous pain per AAE criteria" },
                        { diagnosis: "Dentinal Hypersensitivity", likelihood: "low", reasoning: "Visible caries present explains etiology" },
                        { diagnosis: "Cracked Tooth", likelihood: "low", reasoning: "No pain on biting, no visible crack" }
                    ],
                    keyFindings: [
                        "Cold sensitivity with rapid resolution (<30 sec) - AAE criterion for reversible",
                        "No spontaneous pain - indicates A-delta not C-fiber dominance",
                        "Negative percussion and palpation - no periapical involvement",
                        "Caries not reaching pulp on radiograph"
                    ],
                    evidenceCorrelation: "96.6% of teeth clinically diagnosed with reversible pulpitis have matching histologic findings (Ricucci 2014)"
                },
                
                treatment: {
                    plan: "Caries removal and composite restoration",
                    guidelineSupport: "AAE: Remove irritant and restore; pulp can heal if insult removed before irreversible damage",
                    rationale: "Reversible pulpitis is treated by removing the irritant (caries) and restoring the tooth. The pulp can heal if the insult is removed before irreversible damage occurs.",
                    procedure: [
                        "Local anesthesia",
                        "Rubber dam isolation",
                        "Caries excavation with round bur",
                        "Assess for pulp exposure (if exposed, may need direct pulp cap or RCT)",
                        "Bonding agent application",
                        "Composite restoration placement",
                        "Occlusal adjustment as needed"
                    ],
                    antibioticIndication: "NOT INDICATED - Per ADA 2019 guideline, antibiotics provide no benefit for reversible pulpitis",
                    followUp: "Monitor symptoms at next hygiene visit. If symptoms persist or worsen, reassess for irreversible pulpitis."
                }
            }
        }
    },
    
    // ==================== DDS-002: IRREVERSIBLE PULPITIS ====================
    {
        id: "dds-002-irreversible-pulpitis",
        title: "Throbbing Toothache Keeping Patient Awake",
        category: "Dental-Pain",
        profession: "DDS",
        icon: "🦷",
        difficulty: "foundational",
        urgency: "urgent",
        mechanismLinks: ["DENT-2: Dental Pain Mechanisms"],
        
        evidenceBase: {
            primaryGuidelines: [
                DENTAL_EVIDENCE_BASE.guidelines.AAE_DIAGNOSTIC_TERMINOLOGY,
                DENTAL_EVIDENCE_BASE.guidelines.ADA_ANTIBIOTIC_GUIDELINE
            ],
            supportingEvidence: [
                DENTAL_EVIDENCE_BASE.diagnosticEvidence.MAINKAR_PULP_TEST_META,
                DENTAL_EVIDENCE_BASE.pathophysiology.WOLTERS_CLASSIFICATION
            ],
            evidenceSummary: "AAE defines symptomatic irreversible pulpitis by spontaneous pain, lingering thermal response (>30 sec), and sleep disturbance. ADA 2019 strongly recommends against antibiotics when definitive treatment is available."
        },
        
        guidelineReferences: [
            {
                name: "AAE Consensus Conference Diagnostic Terminology",
                citation: "Glickman GN. J Endod. 2009;35(12):1619-20",
                doi: "10.1016/j.joen.2009.09.029",
                pmid: "19932336",
                keyPoints: [
                    "Symptomatic irreversible pulpitis: Vital inflamed pulp incapable of healing",
                    "Additional descriptors: lingering thermal pain, spontaneous pain, referred pain",
                    "Root canal treatment or extraction is indicated"
                ]
            },
            {
                name: "ADA Antibiotic Clinical Practice Guideline",
                citation: "Lockhart PB, et al. J Am Dent Assoc. 2019;150(11):906-921.e12",
                doi: "10.1016/j.adaj.2019.08.020",
                pmid: "31668170",
                pmcid: "PMC8270006",
                openAccess: true,
                openAccessUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8270006/",
                keyPoints: [
                    "STRONG RECOMMENDATION: Do not prescribe antibiotics for symptomatic irreversible pulpitis when definitive treatment available",
                    "Definitive treatment (pulpotomy, pulpectomy, RCT) is primary management",
                    "Antibiotics provide negligible benefit with potential for significant harm"
                ]
            }
        ],
        
        variants: {
            "male-45-typical": {
                name: "James Wilson",
                firstName: "James",
                lastName: "Wilson",
                age: 45,
                gender: "male",
                setting: "dental_clinic",
                chiefComplaint: "I have a terrible toothache that kept me up all night. The pain just started on its own.",
                patientProfile: {
                    smokingStatus: 'former',
                    alcoholUse: 'moderate',
                    occupation: 'construction',
                    dentalHistory: 'irregularVisits',
                    lastDentalVisit: '3 years ago'
                },
                
                history: {
                    hpiFindings: [
                        { finding: "Spontaneous throbbing pain started 2 days ago", category: "onset", significance: "key", evidenceNote: "Spontaneous pain = AAE criterion for irreversible pulpitis" },
                        { finding: "Pain wakes patient from sleep", category: "severity", significance: "key", evidenceNote: "Sleep disturbance indicates C-fiber activation" },
                        { finding: "Hot liquids make it worse", category: "aggravating", significance: "key" },
                        { finding: "Cold water initially relieves pain briefly", category: "relieving", significance: "diagnostic", evidenceNote: "Cold relief = late-stage irreversible pulpitis (vasoconstriction reduces intrapulpal pressure)" },
                        { finding: "Pain lingers for minutes after thermal stimulus", category: "duration", significance: "key", evidenceNote: ">30 seconds = irreversible per AAE criteria" },
                        { finding: "Patient has difficulty localizing - 'somewhere on the lower right'", category: "location", significance: "relevant", evidenceNote: "C-fiber pain is poorly localized" }
                    ],
                    symptomDuration: "2 days",
                    painScale: "9/10, constant throbbing"
                },
                
                clinicalExam: {
                    extraoral: {
                        findings: [
                            { finding: "Mild right submandibular tenderness", significance: "relevant" },
                            { finding: "No facial swelling", significance: "reassuring" }
                        ]
                    },
                    intraoral: {
                        findings: [
                            { finding: "Large amalgam restoration tooth #30 with recurrent decay at margins", significance: "key", tooth: 30 },
                            { finding: "No obvious swelling or sinus tract", significance: "relevant" }
                        ]
                    },
                    pulpTesting: {
                        coldTest: { 
                            tooth: 30, 
                            response: "Intense pain lasting >60 seconds after cold removal", 
                            significance: "diagnostic",
                            interpretation: "Lingering >30 sec = irreversible pulpitis (AAE 2009)"
                        },
                        heatTest: { 
                            tooth: 30, 
                            response: "Severe pain reproduction - matches chief complaint", 
                            significance: "diagnostic",
                            interpretation: "Heat reproduction of chief complaint strongly suggests irreversible pulpitis"
                        },
                        percussion: { tooth: 30, response: "Mild sensitivity", significance: "relevant", interpretation: "Early apical involvement" },
                        palpation: { tooth: 30, response: "No apical tenderness", significance: "relevant" }
                    }
                },
                
                imaging: {
                    periapical: {
                        findings: [
                            { finding: "Deep caries under existing restoration approaching pulp", significance: "key" },
                            { finding: "Widened PDL space at mesial root apex", significance: "relevant", interpretation: "Early periapical changes" },
                            { finding: "No frank periapical radiolucency yet", significance: "relevant" }
                        ]
                    }
                },
                
                diagnosis: {
                    primary: "Symptomatic Irreversible Pulpitis - Tooth #30",
                    aaeClassification: "Symptomatic irreversible pulpitis with symptomatic apical periodontitis",
                    differential: [
                        { diagnosis: "Symptomatic Apical Periodontitis (progressing)", likelihood: "developing", reasoning: "Widened PDL suggests early periapical involvement" },
                        { diagnosis: "Cracked Tooth Syndrome", likelihood: "possible", reasoning: "Large restoration, should evaluate for crack during treatment" },
                        { diagnosis: "Reversible Pulpitis", likelihood: "ruled out", reasoning: "Lingering pain >30 sec, spontaneous symptoms - AAE criteria exclude reversible" }
                    ],
                    keyFindings: [
                        "Spontaneous pain (AAE criterion)",
                        "Pain wakes patient from sleep (C-fiber activation)",
                        "Lingering response to thermal >30 seconds (AAE criterion)",
                        "Heat exacerbates, cold may briefly relieve (classic late-stage sign)"
                    ]
                },
                
                treatment: {
                    plan: "Root canal therapy or extraction",
                    guidelineSupport: "AAE: Irreversible pulpitis requires RCT or extraction. ADA 2019: Antibiotics NOT indicated when definitive treatment available.",
                    rationale: "Irreversible pulpitis indicates pulp necrosis is imminent or occurring. The pulp cannot recover. Options are endodontic therapy to retain the tooth or extraction.",
                    immediateManagement: [
                        "Pulpotomy/pulpectomy for pain relief if RCT cannot be completed today",
                        "Prescribe NSAIDs: ibuprofen 400-600mg q6h (ADA recommends as first-line analgesic)",
                        "Can add acetaminophen 500-1000mg q6h for additional analgesia",
                        "ANTIBIOTICS NOT INDICATED - per ADA 2019 guideline, no benefit when definitive treatment available"
                    ],
                    antibioticStatement: {
                        indication: "NOT INDICATED",
                        guideline: "ADA 2019 Clinical Practice Guideline",
                        citation: "Lockhart PB, et al. JADA 2019;150(11):906-921",
                        rationale: "Expert panel recommends NOT prescribing antibiotics for symptomatic irreversible pulpitis when definitive treatment is available due to negligible benefits and likely harms"
                    },
                    definitiveOptions: [
                        "Root canal therapy + crown (preferred if tooth is restorable)",
                        "Extraction (if non-restorable or patient preference)"
                    ],
                    followUp: "Complete RCT within 1-2 weeks. Place final restoration (crown) within 1 month of RCT completion."
                }
            }
        }
    },

    // ==================== DDS-003: ACUTE APICAL ABSCESS ====================
    {
        id: "dds-003-acute-apical-abscess",
        title: "Swollen Face with Dental Pain",
        category: "Dental-Pain",
        profession: "DDS",
        icon: "🦷",
        difficulty: "intermediate",
        urgency: "emergent",
        mechanismLinks: ["DENT-1: Oral Pathophysiology", "DENT-2: Dental Pain Mechanisms"],
        
        evidenceBase: {
            primaryGuidelines: [
                DENTAL_EVIDENCE_BASE.guidelines.AAE_DIAGNOSTIC_TERMINOLOGY,
                DENTAL_EVIDENCE_BASE.guidelines.ADA_ANTIBIOTIC_GUIDELINE
            ],
            evidenceSummary: "AAE defines acute apical abscess by purulent collection, swelling, and systemic signs. ADA 2019 provides specific antibiotic recommendations when systemic involvement present."
        },
        
        guidelineReferences: [
            {
                name: "AAE Consensus Conference Diagnostic Terminology",
                citation: "Glickman GN. J Endod. 2009;35(12):1619-20",
                doi: "10.1016/j.joen.2009.09.029",
                pmid: "19932336",
                keyPoints: [
                    "Acute apical abscess: Inflammatory reaction to pulpal infection with purulent exudate",
                    "Characterized by rapid onset, spontaneous pain, swelling, tenderness to percussion",
                    "May have systemic manifestations (fever, lymphadenopathy, malaise)"
                ]
            },
            {
                name: "ADA Antibiotic Clinical Practice Guideline",
                citation: "Lockhart PB, et al. J Am Dent Assoc. 2019;150(11):906-921.e12",
                doi: "10.1016/j.adaj.2019.08.020",
                pmid: "31668170",
                pmcid: "PMC8270006",
                openAccess: true,
                keyPoints: [
                    "Localized abscess WITHOUT systemic involvement: Antibiotics NOT recommended as adjunct to I&D",
                    "Abscess WITH systemic involvement (fever, malaise, lymphadenopathy): Antibiotics indicated",
                    "First-line: Amoxicillin 500mg TID for 3-7 days",
                    "PCN allergy (non-anaphylactic): Cephalexin 500mg QID",
                    "PCN allergy (anaphylactic history): Azithromycin 500mg day 1, then 250mg x 4 days OR Clindamycin 300mg QID"
                ]
            }
        ],
        
        variants: {
            "female-35-typical": {
                name: "Maria Rodriguez",
                firstName: "Maria",
                lastName: "Rodriguez",
                age: 35,
                gender: "female",
                setting: "dental_clinic",
                chiefComplaint: "My face is swollen and I can barely open my mouth. The pain is unbearable.",
                patientProfile: {
                    smokingStatus: 'never',
                    alcoholUse: 'none',
                    occupation: 'accountant',
                    medicalHistory: 'healthy',
                    allergies: 'none'
                },
                
                history: {
                    hpiFindings: [
                        { finding: "Toothache started 1 week ago, became severe 3 days ago", category: "onset", significance: "key" },
                        { finding: "Left facial swelling appeared yesterday, rapidly worsening", category: "progression", significance: "key" },
                        { finding: "Difficulty opening mouth (trismus)", category: "associated", significance: "key", evidenceNote: "Indicates involvement of masticatory space" },
                        { finding: "Low-grade fever (100.4°F)", category: "systemic", significance: "key", evidenceNote: "Systemic involvement triggers antibiotic indication per ADA 2019" },
                        { finding: "Pain with swallowing", category: "associated", significance: "concerning", evidenceNote: "Red flag for deep space involvement" },
                        { finding: "Constant, severe, throbbing pain", category: "character", significance: "key" }
                    ],
                    symptomDuration: "Swelling 1 day, tooth pain 1 week",
                    painScale: "10/10"
                },
                
                clinicalExam: {
                    extraoral: {
                        findings: [
                            { finding: "Left buccal space swelling, firm and tender", significance: "key" },
                            { finding: "Overlying skin warm and erythematous", significance: "key" },
                            { finding: "Trismus - max opening 20mm", significance: "concerning" },
                            { finding: "Left submandibular lymphadenopathy", significance: "key", evidenceNote: "Indicates systemic involvement" },
                            { finding: "No floor of mouth elevation", significance: "reassuring", evidenceNote: "Ludwig's angina ruled out" },
                            { finding: "No airway compromise", significance: "critical reassuring" }
                        ]
                    },
                    intraoral: {
                        findings: [
                            { finding: "Tooth #19 grossly carious with destroyed crown", significance: "key", tooth: 19 },
                            { finding: "Buccal vestibular swelling and fluctuance", significance: "key", evidenceNote: "Indicates drainable collection" },
                            { finding: "Purulent drainage from gingival sulcus", significance: "diagnostic" },
                            { finding: "No palatal swelling", significance: "relevant" }
                        ]
                    },
                    pulpTesting: {
                        coldTest: { tooth: 19, response: "No response (necrotic)", significance: "diagnostic" },
                        percussion: { tooth: 19, response: "Severe pain, tooth feels 'high'", significance: "key" },
                        palpation: { tooth: 19, response: "Exquisitely tender over apex", significance: "key" }
                    },
                    vitals: {
                        temp: "100.4°F (38°C)",
                        HR: "92",
                        BP: "130/85",
                        RR: "16"
                    }
                },
                
                imaging: {
                    periapical: {
                        findings: [
                            { finding: "Large periapical radiolucency at both roots of tooth #19", significance: "key" },
                            { finding: "Complete coronal destruction from caries", significance: "key" },
                            { finding: "Possible furcation involvement", significance: "relevant" }
                        ]
                    }
                },
                
                diagnosis: {
                    primary: "Acute Apical Abscess with Buccal Space Involvement and Systemic Signs - Tooth #19",
                    aaeClassification: "Pulp necrosis with acute apical abscess",
                    differential: [
                        { diagnosis: "Ludwig's Angina", likelihood: "ruled out", reasoning: "No floor of mouth elevation, no airway compromise" },
                        { diagnosis: "Cellulitis without abscess", likelihood: "lower", reasoning: "Fluctuance present suggests drainable collection" },
                        { diagnosis: "Periodontal abscess", likelihood: "ruled out", reasoning: "Periapical radiolucency, non-vital pulp, carious etiology" }
                    ],
                    keyFindings: [
                        "Non-vital tooth with periapical radiolucency",
                        "Facial swelling with fluctuance",
                        "Purulent drainage",
                        "Systemic signs: fever, lymphadenopathy (triggers antibiotic indication)"
                    ]
                },
                
                treatment: {
                    plan: "Incision and drainage + source control + antibiotics (systemic involvement present)",
                    guidelineSupport: "ADA 2019: Antibiotics indicated when systemic involvement (fever, lymphadenopathy) present",
                    rationale: "Dental abscess requires removal of the source (extraction or RCT) and drainage of purulent collection. Because systemic signs are present (fever, lymphadenopathy), antibiotics ARE indicated per ADA 2019.",
                    immediateManagement: [
                        "Incision and drainage of buccal space abscess",
                        "Establish drainage (place drain if significant space involvement)",
                        "Extract tooth #19 (non-restorable) or pulpectomy if attempting to save",
                        "ANTIBIOTICS INDICATED (systemic involvement present):",
                        "  First-line: Amoxicillin 500mg TID x 7 days",
                        "  If no improvement in 48-72h: Add metronidazole 500mg TID",
                        "Pain control: Ibuprofen 600mg + Acetaminophen 500mg q6h"
                    ],
                    antibioticStatement: {
                        indication: "INDICATED - systemic involvement present",
                        guideline: "ADA 2019 Clinical Practice Guideline",
                        citation: "Lockhart PB, et al. JADA 2019;150(11):906-921",
                        regimen: {
                            firstLine: "Amoxicillin 500mg PO TID x 3-7 days",
                            pcnAllergyNonAnaphylactic: "Cephalexin 500mg PO QID x 3-7 days",
                            pcnAllergyAnaphylactic: "Azithromycin 500mg day 1, then 250mg days 2-5 OR Clindamycin 300mg QID x 3-7 days",
                            note: "Clindamycin has FDA Black Box warning for C. difficile infection"
                        }
                    },
                    hospitalReferralCriteria: [
                        "Airway compromise or stridor",
                        "Floor of mouth elevation (Ludwig's angina)",
                        "Unable to swallow/drooling",
                        "Rapidly spreading infection despite treatment",
                        "Immunocompromised patient",
                        "Failed outpatient management at 48-72 hours"
                    ],
                    followUp: "24-48 hour recheck MANDATORY. Ensure swelling decreasing, drain patent. If worsening, refer to OMFS/ED."
                }
            }
        }
    }
    
    // Additional cases DDS-004 through DDS-025 would follow same evidence-based structure
    // Each case includes:
    // - evidenceBase object with primary guidelines and supporting evidence
    // - guidelineReferences array with full citations, DOIs, PMIDs
    // - evidenceNote annotations on key findings
    // - antibioticStatement per ADA 2019 guideline
];

// Reference template for creating new cases
const CASE_REFERENCE_TEMPLATE = {
    // REQUIRED: Link to MechanismDx modules
    mechanismLinks: ["DENT-X: Module Name"],
    
    // REQUIRED: Evidence base with citations
    evidenceBase: {
        primaryGuidelines: [
            // Reference DENTAL_EVIDENCE_BASE objects
        ],
        supportingEvidence: [
            // Additional references
        ],
        evidenceSummary: "Brief statement of key evidence supporting this case"
    },
    
    // REQUIRED: Guideline references with full citations
    guidelineReferences: [
        {
            name: "Guideline Name",
            citation: "Author. Journal. Year;Vol(Issue):Pages",
            doi: "10.xxxx/xxxxx",
            pmid: "XXXXXXXX",
            pmcid: "PMCXXXXXXX", // If open access
            openAccess: true, // or false
            openAccessUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMCXXXXXXX/",
            keyPoints: [
                "Key recommendation 1",
                "Key recommendation 2"
            ]
        }
    ],
    
    // REQUIRED for treatment: Antibiotic statement
    antibioticStatement: {
        indication: "INDICATED or NOT INDICATED",
        guideline: "ADA 2019 Clinical Practice Guideline",
        citation: "Lockhart PB, et al. JADA 2019;150(11):906-921",
        rationale: "Explanation based on guideline criteria"
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        dentalCases, 
        DENTAL_EVIDENCE_BASE,
        CASE_REFERENCE_TEMPLATE 
    };
}

if (typeof window !== 'undefined') {
    window.dentalCases = dentalCases;
    window.DENTAL_EVIDENCE_BASE = DENTAL_EVIDENCE_BASE;
    window.CASE_REFERENCE_TEMPLATE = CASE_REFERENCE_TEMPLATE;
}
