/**
 * ReasonDx Socratic Discovery Templates
 * FEVER OF UNKNOWN ORIGIN (FUO) IN CHILDREN - Evaluation
 * 
 * Based on UpToDate article:
 * - "Fever of unknown origin in children: Evaluation"
 * 
 * Framework: Active learning through discovery, systematic approach, pattern recognition
 */

const FUO_CHILDREN_DISCOVERY_TEMPLATES = {
  
  // ==========================================================================
  // MODULE 1: DEFINITIONS AND FRAMEWORK
  // ==========================================================================
  
  definitionsAndFramework: {
    id: 'fuo_definitions',
    title: 'FUO Definitions & Diagnostic Framework',
    clinicalContext: 'Understanding what constitutes true FUO vs other fever presentations',
    
    defining_fuo: {
      discovery_prompt: {
        scenario: "A 7-year-old has had fever for 5 days. The resident says 'This is fever of unknown origin - let's do a full FUO workup.'",
        question: "Is this actually FUO?",
        answer: "NO - this is Fever Without a Source (FWS), not FUO",
        teaching_point: "FUO requires fever >38.3°C (101°F) at least once daily for ≥8 days with no diagnosis despite thorough initial evaluation."
      },
      
      critical_distinction: {
        fuo: {
          definition: "Fever >38.3°C (101°F) once daily for ≥8 days",
          requirement: "No apparent diagnosis after initial outpatient or hospital evaluation including detailed history, thorough physical exam, and initial labs",
          key_point: "FUO is a diagnosis of exclusion after adequate investigation"
        },
        fws: {
          definition: "Fever for ≤1 week without adequate explanation",
          key_point: "Can progress to FUO if persists >1 week",
          management: "Different evaluation approach than FUO"
        },
        pseudo_fuo: {
          definition: "Sequential febrile illnesses (usually viral)",
          characteristics: "First illness may have higher fever and vague persistent symptoms",
          teaching: "Not true FUO - represents multiple separate infections"
        }
      },
      
      why_8_days: "Caregivers often seek consultation when fever persists >1 week; some experts use longer duration (2-3 weeks in some studies)"
    },
    
    etiology_overview: {
      discovery_prompt: {
        question: "A child has true FUO. What's the MOST likely category of diagnosis?",
        answer: "Infection (51% of cases)",
        teaching_point: "Despite the name 'unknown,' FUO is usually caused by COMMON disorders with UNUSUAL presentations, not exotic rare diseases."
      },
      
      major_categories: {
        infection: {
          prevalence: "51% of FUO cases",
          breakdown: "59% bacterial",
          resource_abundant_countries: ["Cat scratch disease (Bartonella)", "Urinary tract infection"],
          resource_limited_countries: ["Brucellosis", "Tuberculosis", "Typhoid fever"]
        },
        no_diagnosis: {
          prevalence: "23% of cases",
          outcome: "Fever resolves before diagnosis established",
          reassurance: "Most do well; fever often self-limited"
        },
        rheumatologic: {
          prevalence: "9% of cases",
          most_common: ["Juvenile idiopathic arthritis (JIA)", "Systemic lupus erythematosus (SLE)"]
        },
        neoplastic: {
          prevalence: "6% of cases",
          most_common: ["Leukemia", "Lymphoma"]
        },
        other: {
          examples: ["Kawasaki disease", "Inflammatory bowel disease", "Factitious fever", "Hemophagocytic lymphohistiocytosis", "Familial Mediterranean fever", "Drug fever"]
        }
      },
      
      key_teaching: "FUO is usually a common disease presenting uncommonly, NOT an exotic diagnosis"
    },
    
    diagnostic_evolution: {
      historical_trend: "Proportion of undiagnosed cases has INCREASED since late 1990s",
      explanation: [
        "Better molecular assays diagnose infections earlier",
        "Increased awareness of periodic fever syndromes",
        "Earlier recognition of rheumatologic/neoplastic diseases",
        "Leaves more difficult-to-diagnose cases in FUO cohorts"
      ]
    }
  },
  
  // ==========================================================================
  // MODULE 2: APPROACH TO EVALUATION
  // ==========================================================================
  
  evaluationApproach: {
    id: 'fuo_evaluation_approach',
    title: 'Systematic Approach to FUO Evaluation',
    clinicalContext: 'How to pace and structure the diagnostic workup',
    
    setting_determination: {
      discovery_prompt: {
        scenario: "A 10-year-old has had fever for 10 days. She looks well, is active, eating normally, and has normal initial labs. Parents are anxious for admission.",
        question: "Does she need to be hospitalized?",
        answer: "NO - evaluation usually begins outpatient if child appears well"
      },
      
      indications_for_admission: [
        "Ill-appearance",
        "Progressive symptoms or clinical deterioration",
        "Concern for medical child abuse (Munchausen by proxy)",
        "Need for observation in controlled setting",
        "Need for studies/procedures best coordinated inpatient"
      ],
      
      outpatient_criteria: "Child appears well, stable vital signs, able to maintain hydration, reliable follow-up available"
    },
    
    pace_of_evaluation: {
      proceed_quickly_if: [
        "Child is ill-appearing or deteriorating",
        "Immunocompromised state (HIV, sickle cell, primary immunodeficiency)",
        "Disruption in barrier function (tracheostomy, cochlear implant)",
        "Chronic condition increasing infection susceptibility"
      ],
      
      proceed_deliberately_if: [
        "Child appears well",
        "Normal growth and development",
        "Stable symptoms"
      ],
      
      key_teaching: "Sometimes the fever resolves without explanation before invasive testing is needed - patience can be diagnostic"
    },
    
    core_principle: {
      discovery_prompt: {
        scenario: "An attending says, 'In FUO, the most important diagnostic tests are...'",
        question: "What completes this sentence?",
        answer: "...the HISTORY and PHYSICAL EXAMINATION"
      },
      
      evidence: {
        key_finding: "In FUO case series, incomplete histories, overlooked physical findings, and failure to correctly interpret existing labs were the main causes of delayed diagnosis",
        implication: "Must repeat clinical assessment on MULTIPLE occasions"
      },
      
      why_repeat_assessment: [
        "Patient/caregiver may recall previously omitted information",
        "New physical findings can appear over time",
        "Subtle abnormalities may become more apparent",
        ">25% of hospitalized FUO children develop clinically relevant findings AFTER admission"
      ]
    }
  },
  
  // ==========================================================================
  // MODULE 3: DETAILED HISTORY
  // ==========================================================================
  
  historyTaking: {
    id: 'fuo_history',
    title: 'The FUO History - Mining for Diagnostic Clues',
    clinicalContext: 'Virtually any historical finding may be relevant',
    
    fever_characterization: {
      discovery_prompt: {
        scenario: "Parent says 'He's had fever for 2 weeks.' You ask how they know.",
        question: "Why does the METHOD of temperature measurement matter?",
        answer: "To verify true fever and distinguish from normal variations or factitious fever"
      },
      
      essential_questions: [
        {
          question: "How was fever assessed?",
          why: "Touch or forehead strip is unreliable; rectal most accurate",
          red_flag: "If only 'felt warm' - may not be true fever"
        },
        {
          question: "Was fever confirmed by someone other than caregiver?",
          why: "Lack of independent confirmation may suggest factitious fever"
        },
        {
          question: "What is the pattern - duration, height, timing?",
          why: "Certain patterns suggest specific diagnoses",
          tool: "Fever diary documenting date, time, height, duration, method, symptoms"
        },
        {
          question: "Any circumstances preceding temperature elevation?",
          why: "Some periodic fever syndromes have prodromal fatigue"
        },
        {
          question: "Does child appear ill during febrile episodes?",
          why: "Absence of malaise suggests factitious fever; JIA children are very ill with fever and dramatically improve with defervescence"
        },
        {
          question: "Do constitutional symptoms persist when fever abates?",
          why: "Persistence more worrisome for systemic disease"
        },
        {
          question: "Is there sweating?",
          why_sweating: "Hyperthyroidism",
          why_no_sweating: "Ectodermal dysplasia or factitious fever"
        }
      ],
      
      normal_variations_pitfall: "Normal body temperature elevations after exercise or late afternoon should not be mistaken for fever"
    },
    
    fever_patterns: {
      teaching_note: "While patterns are generally NOT helpful for specific diagnosis, certain patterns may suggest specific conditions",
      
      notable_patterns: {
        malaria: {
          pattern: "Tertian (every 48h) or quartan (every 72h)",
          mechanism: "Corresponds to erythrocytic cycle of Plasmodium species"
        },
        jia_systemic: {
          pattern: "Quotidian (daily) with dramatic improvement between episodes",
          associated_finding: "Evanescent salmon-pink rash appears ONLY during fever"
        },
        periodic_fever_syndromes: {
          pattern: "Regular recurrent episodes with well intervals",
          examples: "PFAPA: episodes every 3-6 weeks; FMF: irregular but recurrent"
        }
      }
    },
    
    associated_complaints: {
      discovery_prompt: {
        scenario: "Parent says 'The only thing is the fever.' You probe deeper and learn the child had pink eyes that 'went away on their own' two weeks ago.",
        question: "Why is this important?",
        answer: "Self-resolved conjunctivitis may be a clue to KAWASAKI DISEASE"
      },
      
      symptom_clues: {
        red_eyes_resolved: {
          consider: "Kawasaki disease",
          other_causes: ["Leptospirosis", "Tuberculosis", "Infectious mononucleosis", "Tularemia"]
        },
        nasal_discharge: {
          consider: "Rhinosinusitis"
        },
        recurrent_pharyngitis_with_ulcers: {
          consider: "PFAPA syndrome (Periodic Fever, Aphthous stomatitis, Pharyngitis, Adenitis)"
        },
        gi_complaints: {
          consider: ["Salmonellosis", "Leptospirosis", "Tularemia", "Intra-abdominal abscess", "Hepatosplenic cat scratch disease", "Inflammatory bowel disease"]
        },
        limb_or_bone_pain: {
          consider: ["Brucellosis", "Leukemia/lymphoma", "Osteomyelitis", "Septic arthritis", "Infantile cortical hyperostosis (Caffey disease)", "Kikuchi-Fujimoto disease"]
        },
        abdominal_pain_diarrhea_rash_shock_post_covid: {
          consider: "MIS-C (though median fever duration <7 days, less likely in true FUO)"
        }
      },
      
      key_teaching: "Ask, and ASK AGAIN - caregivers may not think past symptoms are relevant"
    },
    
    exposure_history: {
      discovery_prompt: {
        scenario: "A 9-year-old has FUO. You've asked about sick contacts. What else should you specifically ask about?",
        teaching: "Exposures extend far beyond sick contacts"
      },
      
      critical_exposures: {
        medications: {
          include: "Prescription, OTC, topical, nutritional supplements",
          why: "Drug fever is a consideration; can resolve within 3-4 days of stopping"
        },
        surgical_history: {
          abdominal_surgery: "Increases risk of intra-abdominal abscess",
          implanted_devices: "Expands differential for pathogens"
        },
        animal_exposure: {
          household_pets: "Cat scratch disease, toxoplasmosis",
          domestic_animals: "Brucellosis (unpasteurized dairy)",
          wild_animals: "Tularemia, various zoonoses"
        },
        travel_history: {
          key_point: "Extends back to BIRTH - diseases can reemerge years later",
          examples: ["Histoplasmosis", "Coccidioidomycosis", "Blastomycosis", "Leishmaniasis", "Malaria", "Tuberculosis"],
          ask_about: [
            "Sites of travel",
            "Prophylactic medications and immunizations",
            "Mosquito/insect exposure",
            "Food and water precautions",
            "Artifacts/soil brought home",
            "Contact with recent travelers"
          ]
        },
        tick_bites: {
          consider: ["Rocky Mountain spotted fever", "Ehrlichiosis/Anaplasmosis", "Tularemia", "Tick-borne relapsing fever", "Lyme disease"]
        },
        mosquito_bites: {
          consider: "Various arboviruses (West Nile, etc.)"
        },
        dietary_exposures: {
          game_meat: ["Toxoplasmosis", "Tularemia"],
          raw_meat: ["Tularemia", "Brucellosis"],
          raw_shellfish: "Hepatitis",
          pica_eating_dirt: ["Visceral larva migrans", "Toxoplasmosis"]
        }
      }
    },
    
    ethnic_genetic_background: {
      relevance: "Certain conditions cluster in specific populations",
      examples: {
        familial_mediterranean_fever: "Turkish, Armenian, North African Jewish, Arabian (but not restricted to these)",
        familial_dysautonomia: "Ashkenazi Jewish",
        nephrogenic_diabetes_insipidus: "Ulster Scots (historical)"
      }
    }
  },
  
  // ==========================================================================
  // MODULE 4: PHYSICAL EXAMINATION
  // ==========================================================================
  
  physicalExamination: {
    id: 'fuo_physical_exam',
    title: 'The FUO Physical Examination - Finding the Diagnostic Pearl',
    clinicalContext: 'Even subtle abnormalities may be the key to diagnosis',
    
    examination_principles: {
      key_points: [
        "Must be COMPLETE and METICULOUS",
        "Examine patient WHILE FEBRILE (for appearance, vital sign changes, associated signs)",
        "REPEAT the examination - findings may develop or evolve",
        "Even subtle abnormalities may be relevant"
      ],
      
      why_examine_while_febrile: [
        "Assess how ill patient appears",
        "Determine effect on heart rate, respiratory rate, sweating",
        "Document accompanying symptoms (malaise, myalgias)",
        "JIA rash is EVANESCENT - only present during fever"
      ]
    },
    
    general_assessment: {
      vital_signs: {
        relative_bradycardia: {
          definition: "Pulse fails to increase as expected with fever (normally +10 bpm per 1°F)",
          applicable_age: "≥13 years with temp ≥38.9°C (102°F)",
          associations: [
            "Legionella", "Psittacosis", "Q fever", "Typhoid fever", "Typhus",
            "Babesiosis", "Malaria", "Leptospirosis", "Yellow fever",
            "Dengue", "Viral hemorrhagic fever", "Rocky Mountain spotted fever"
          ]
        }
      },
      
      growth_parameters: {
        weight_loss: {
          consider: ["IBD", "Diabetes insipidus", "Malignancy", "Systemic infection"]
        },
        short_stature_or_growth_deceleration: {
          consider: ["IBD", "Endocrine abnormalities (pituitary lesion)"]
        }
      }
    },
    
    skin_examination: {
      discovery_prompt: {
        scenario: "A 5-year-old with 2-week fever has a faint, salmon-pink rash on the trunk that mom says 'comes and goes.'",
        question: "What diagnosis does this suggest?",
        answer: "Systemic JIA - the rash is characteristically EVANESCENT and present only during fever"
      },
      
      rash_patterns: {
        petechiae: {
          consider: ["Infective endocarditis", "Bacteremia", "Viral infections", "Rickettsial infections"]
        },
        rmsf_rash: {
          pattern: "Begins on ankles/wrists → spreads to palms/soles → centripetal"
        },
        papular_lesion: {
          consider: "Cat scratch disease (at inoculation site)"
        },
        eschar: {
          consider: ["Mediterranean spotted fever", "African tick bite fever", "Tularemia (rarely)"]
        },
        erythema_migrans: {
          consider: ["Lyme disease", "Southern tick-associated rash illness (STARI)"]
        },
        rose_spots: {
          consider: "Typhoid fever"
        },
        salmon_pink_evanescent: {
          consider: "Systemic JIA"
        },
        malar_erythema: {
          consider: "SLE"
        },
        palpable_purpura: {
          consider: "Vasculitis (polyarteritis nodosa)"
        },
        urticarial_serpiginous_hands_feet: {
          consider: "Serum sickness"
        },
        erythema_nodosum: {
          consider: ["Infection", "JIA", "SLE", "Malignancy", "IBD"]
        },
        seborrheic_lesions: {
          consider: "Langerhans cell histiocytosis"
        }
      },
      
      other_skin_findings: {
        absence_of_sweating: {
          consider: ["Ectodermal dysplasia", "Familial dysautonomia", "Dehydration (diabetes insipidus)", "Factitious fever"]
        },
        sparse_hair_especially_eyebrows: {
          consider: "Hypohidrotic ectodermal dysplasia"
        },
        blotchy_skin_with_trauma: {
          consider: "Familial dysautonomia"
        }
      }
    },
    
    eye_examination: {
      discovery_prompt: {
        scenario: "On funduscopic exam, you see raised yellow-white cottony lesions in a nonvascular distribution.",
        question: "What does this suggest?",
        answer: "Chorioretinitis - consider TOXOPLASMOSIS"
      },
      
      findings: {
        palpebral_conjunctivitis: {
          consider: ["Infectious mononucleosis", "Coxsackievirus", "Measles", "Newcastle disease (bird exposure)"]
        },
        bulbar_conjunctivitis: {
          consider: ["Leptospirosis", "Kawasaki disease"]
        },
        phlyctenular_conjunctivitis: {
          description: "Small white elevated lesions",
          consider: "Tuberculosis"
        },
        conjunctival_hemorrhage: {
          consider: "Infective endocarditis"
        },
        ischemic_retinopathy: {
          consider: "Polyarteritis nodosa"
        },
        absent_pupillary_response: {
          consider: "Hypothalamic or autonomic dysfunction"
        },
        absent_tears_and_corneal_reflexes: {
          consider: "Familial dysautonomia (Riley-Day)"
        },
        choroid_tubercles: {
          consider: "Miliary tuberculosis"
        },
        chorioretinitis: {
          consider: "Toxoplasmosis"
        },
        perivascular_sheathing: {
          consider: "Vasculitis"
        }
      }
    },
    
    oropharynx_examination: {
      findings: {
        oral_ulcers: {
          consider: ["IBD", "Behçet syndrome", "SLE"]
        },
        pharyngeal_hyperemia_without_exudate: {
          consider: ["EBV/CMV mononucleosis", "Toxoplasmosis", "Tularemia", "Leptospirosis"]
        },
        dental_abscess: {
          note: "Can be complicated by sinusitis, brain abscess, mediastinal abscess"
        },
        anomalous_dentition: {
          peg_teeth_hypodontia: "Hypohidrotic ectodermal dysplasia"
        },
        smooth_tongue_excessive_salivation: {
          consider: "Familial dysautonomia"
        },
        gingival_hypertrophy_loose_teeth: {
          consider: ["Leukemia", "Langerhans cell histiocytosis"]
        }
      }
    },
    
    abdominal_examination: {
      findings: {
        hepatosplenomegaly: {
          common_causes: ["Brucellosis", "Cat scratch disease", "Infectious mononucleosis", "Infective endocarditis", "Malaria", "Salmonellosis", "Leukemia", "Lymphoma"]
        },
        liver_tenderness: {
          consider: ["Hepatitis", "Liver abscess", "Cat scratch disease"]
        },
        abdominal_mass: {
          consider: ["Neuroblastoma", "Wilms tumor", "Lymphoma", "Germ cell tumor"]
        }
      }
    },
    
    musculoskeletal_examination: {
      findings: {
        bony_tenderness: {
          consider: ["Osteomyelitis", "Malignant bone marrow infiltration (leukemia, bone tumors, metastases)", "Infantile cortical hyperostosis (Caffey disease)"]
        },
        joint_tenderness_effusion: {
          consider: ["Septic arthritis", "JIA", "SLE", "IBD"]
        },
        muscle_tenderness: {
          consider: ["Trichinellosis", "Arboviral infections", "Dermatomyositis", "Polyarteritis nodosa"],
          specific: "Trapezius tenderness may suggest subdiaphragmatic abscess"
        },
        hyperactive_dtr: {
          consider: "Hyperthyroidism"
        },
        absent_hypoactive_dtr: {
          consider: "Familial dysautonomia"
        }
      }
    },
    
    genitourinary_examination: {
      required_components: ["Rectal exam", "External genitalia exam", "Pelvic exam (sexually active females)"],
      findings: {
        perirectal_tenderness_mass: {
          consider: ["Pelvic abscess", "Tumor"]
        },
        genital_ulcers_discharge: {
          consider: "Sexually transmitted infections"
        },
        perianal_fistulae_tags_fissures: {
          consider: "IBD"
        },
        cervical_motion_uterine_adnexal_tenderness: {
          consider: "Pelvic inflammatory disease"
        },
        testicular_tenderness: {
          consider: ["Brucellosis", "Vasculitis (PAN, HSP)"]
        }
      }
    }
  },
  
  // ==========================================================================
  // MODULE 5: DIAGNOSTIC TESTING
  // ==========================================================================
  
  diagnosticTesting: {
    id: 'fuo_diagnostic_tests',
    title: 'FUO Laboratory and Imaging Evaluation',
    clinicalContext: 'Targeted testing based on clinical clues',
    
    initial_tests_all_patients: {
      discovery_prompt: {
        scenario: "You're asked to order the 'FUO panel.' What tests should ALL children with FUO receive?",
        teaching: "A core set of tests helps screen for common/serious causes"
      },
      
      core_battery: [
        {
          test: "CBC with differential and smear",
          abnormalities: {
            anemia: ["Malaria", "Tuberculosis", "Infective endocarditis", "JIA", "SLE", "IBD"],
            multilineage_cytopenias_or_abnormal_cells: ["Leukemia", "HLH", "SLE", "Kikuchi disease"],
            leukocytosis_or_bandemia: ["Severe bacterial infection", "JIA", "Drug fever", "Infantile cortical hyperostosis"],
            neutropenia: ["TB", "Anaplasmosis", "Dengue", "EBV/CMV/HIV", "SLE", "Leukemia"],
            atypical_lymphocytes: ["EBV", "CMV", "Kikuchi disease"],
            lymphocytosis: ["Cat scratch disease", "EBV", "Toxoplasmosis"],
            lymphocytopenia: ["Brucellosis", "Malaria", "TB", "Typhoid", "HIV", "SLE", "Sarcoidosis"],
            eosinophilia: ["Parasitic/fungal infection", "Allergic disorder", "Neoplasm", "Immunodeficiency", "Drug fever"],
            thrombocytosis: ["JIA", "Kawasaki disease", "Nonspecific inflammation"],
            thrombocytopenia: ["EBV", "CMV", "HIV", "Parvovirus", "Varicella", "Leptospirosis", "Tularemia", "Rickettsial", "SLE", "Kikuchi"]
          }
        },
        {
          test: "ESR and CRP",
          interpretation: {
            elevated: "Decreases likelihood of factitious fever; use to monitor disease progress",
            normal: "Decreases likelihood of infectious/inflammatory causes; may justify slowing pace",
            caveat: "Normal ESR/CRP does NOT exclude non-inflammatory causes (ectodermal dysplasia, diabetes insipidus, drug fever)"
          },
          artifact: "ESR may be falsely elevated in hypergammaglobulinemia or falsely low in DIC/HLH"
        },
        {
          test: "Blood cultures (aerobic AND anaerobic)",
          rationale: "Bacteremia, endocarditis, typhoid, brucellosis; anaerobic cultures may isolate fastidious organisms"
        },
        {
          test: "Urinalysis and urine culture",
          findings: {
            pyuria_bacteriuria: "UTI",
            sterile_pyuria: ["Kawasaki disease (monocytic, not detected by LE dipstick)", "Adjacent intra-abdominal infection", "GU tuberculosis"],
            hematuria_proteinuria: ["SLE", "Infective endocarditis", "Leptospirosis"],
            low_specific_gravity: "Diabetes insipidus"
          },
          key_teaching: "UTI is one of most frequent causes of FUO in resource-abundant countries. Failure to perform/pursue UA was a common error in case series."
        },
        {
          test: "Chest radiograph",
          findings: {
            infiltrate: "Pneumonia",
            lymphadenopathy: ["Tuberculosis", "Lymphoma"],
            mediastinal_mass: ["Leukemia", "Lymphoma", "Neurogenic tumor", "Rhabdomyosarcoma"],
            small_nodular_densities: "Leptospirosis"
          }
        },
        {
          test: "Serum electrolytes, BUN, creatinine, hepatic aminotransferases",
          findings: {
            hypernatremia: ["Diabetes insipidus", "Dehydration"],
            hyponatremia: ["Leptospirosis", "Tularemia"],
            elevated_bun_creatinine: ["Renal impairment (SLE)", "Dehydration"],
            elevated_aminotransferases: ["Viral infection (adenovirus, EBV, CMV)", "Brucellosis", "Tularemia", "JIA", "Kikuchi disease"]
          }
        }
      ],
      
      not_routinely_recommended: {
        procalcitonin: "Utility in FUO unclear"
      }
    },
    
    targeted_additional_tests: {
      principle: "Additional tests directed by history, exam, or initial test results",
      
      by_clinical_suspicion: {
        suspected_generalized_infection: {
          brucellosis: "Serology, blood culture",
          cat_scratch_disease: "Serology, lymph node biopsy if needed",
          leptospirosis: "Serology, culture",
          malaria: "Thick and thin smears, rapid antigen test",
          tuberculosis: "TST/IGRA, CXR, sputum/gastric aspirate",
          typhoid: "Blood culture, serology"
        },
        
        syphilis_risk: {
          who: "Neonates, young infants, adolescents with risk factors",
          why: "Potential long-term consequences if undiagnosed",
          test: "Serologic testing"
        },
        
        hiv_suspected: {
          who: "Children with risk factors, cytopenias",
          test: "Combination antigen/antibody HIV immunoassay"
        },
        
        kawasaki_suspected: {
          timing: "Serologic testing BEFORE IVIG administration",
          special_consideration: "Infants <6 months with unexplained fever ≥7 days warrant ECHOCARDIOGRAM even without mucocutaneous findings"
        },
        
        endocarditis_suspected: {
          clues: ["Preexisting cardiac lesion", "New onset murmur", "Petechiae", "Anemia", "Elevated ESR/CRP", "Positive blood culture"],
          workup: "Multiple blood cultures over 24 hours, ECG, echocardiography"
        },
        
        gi_complaints_or_travel: {
          tests: ["Stool cultures", "Ova and parasites", "C. diff testing if indicated"],
          stool_guaiac: "In children with GI complaints or poor weight gain",
          imaging: "Abdominal US (for stable patients, suspected cat scratch) or CT/MRI (malignancy suspected, urgent evaluation)"
        },
        
        bone_joint_tenderness: {
          tests: "Plain radiographs initially; advanced imaging may be needed"
        },
        
        multilineage_cytopenias: {
          consider: "Bone marrow aspirate and biopsy",
          evaluates_for: ["Leukemia", "HLH", "Kikuchi disease"],
          also_evaluate: ["SLE", "HIV"]
        },
        
        lymphadenopathy_with_worrisome_features: {
          action: "Early lymph node biopsy"
        },
        
        recurrent_infections: {
          tests: "Serum IgG, IgA, IgM",
          interpretation: {
            low: "Immunodeficiency",
            elevated_IgG: ["Autoimmune conditions (SLE, IBD)", "Infection"],
            elevated_IgM: "Hyper-IgM syndrome",
            elevated_IgE: "Only if evidence of allergy or infection suggesting hyper-IgE"
          }
        },
        
        suspected_ibd: {
          clues: ["Persistent fever", "Elevated ESR/CRP", "Anorexia", "Weight loss", "Short stature", "Abdominal complaints"],
          evaluation: "Per IBD diagnostic workup"
        },
        
        recurrent_episodic_fevers: {
          tests: ["Serum IgD (hyper-IgD syndrome)", "Molecular genetic testing for periodic fever disorders (with expert consultation)"]
        }
      }
    },
    
    diagnostic_interventions: {
      discontinue_medications: {
        action: "Stop nonessential medications individually",
        rationale: "Drug fever resolves within 2 half-lives (usually 3-4 days) of stopping causative drug"
      },
      
      therapeutic_trials: {
        nsaid_trial: {
          indication: "Suspected JIA",
          interpretation: "Resolution of fever supports diagnosis"
        },
        
        empiric_antimicrobials: {
          general_approach: "AVOID except when life-threatening infection is consideration",
          exceptions: ["Malaria", "Typhoid fever", "Disseminated tuberculosis"],
          why_avoid: [
            "Can mask or delay diagnosis of serious infections (meningitis, endocarditis, osteomyelitis)",
            "Interferes with blood and other cultures"
          ]
        },
        
        empiric_glucocorticoids: {
          recommendation: "Should NOT be administered unless child is in extremis AND infections/malignancies convincingly excluded",
          risks: ["Worsens infections", "Masks malignancies"]
        }
      }
    }
  },
  
  // ==========================================================================
  // MODULE 6: SUBSEQUENT EVALUATION & OUTCOME
  // ==========================================================================
  
  subsequentEvaluationAndOutcome: {
    id: 'fuo_followup_outcome',
    title: 'When FUO Persists - Next Steps and Prognosis',
    clinicalContext: 'Serial evaluation and reassurance about outcomes',
    
    serial_evaluation: {
      outpatient_approach: [
        "Fever diary (date, time, height, duration, method, symptoms)",
        "Return for evaluation of new complaints or status change",
        "If fever resolves after 3-7 days without diagnosis → no further evaluation needed"
      ],
      
      inpatient_approach: [
        "Daily thorough physical examination",
        "Interval history daily",
        "Further evaluation directed by new findings"
      ],
      
      well_appearing_with_persistent_fever: {
        approach: "Serial evaluations; additional tests only as indicated by new symptoms/signs"
      }
    },
    
    ill_appearing_persistent_no_diagnosis: {
      additional_tests_to_consider: [
        "Immunoglobulins (IgG, IgA, IgM) for humoral immunodeficiency",
        "HIV testing (combination antigen/antibody)",
        "Abdominal imaging (US for stable/cat scratch; CT/MRI for malignancy/urgent)",
        "PET scan (contributed to diagnosis in 25-69% of adult FUO cases; promising in children but limited studies)"
      ],
      
      imaging_not_routinely_helpful: [
        "CNS imaging (unless localizing findings)",
        "Labeled white blood cell scans",
        "Radiographic bone survey",
        "Technetium bone scan",
        "Liver-spleen scan"
      ]
    },
    
    outcome_prognosis: {
      discovery_prompt: {
        scenario: "Parents of a child with 3-week FUO are terrified. 'What's going to happen to our child?'",
        question: "What can you tell them?",
        answer: "Children with FUO usually have TREATABLE or SELF-LIMITING diseases. Most do well."
      },
      
      key_outcomes: {
        most_cases: "Fever resolves over time; specific diagnosis eventually made in others",
        undiagnosed_cases: "Many do well, though fever may recur",
        mortality: "6-9% in 1970s series; LOWER in more recent series"
      },
      
      long_term_followup_data: {
        study_1: {
          population: "19 children with FUO ≥2 weeks, no diagnosis",
          followup: "Median 3.5 years",
          outcomes: ["16 afebrile and completely well", "2 later diagnosed with JIA", "1 had recurrent intussusception"]
        },
        study_2: {
          population: "155 children with unexplained fever, no diagnosis at infectious diseases evaluation",
          followup: "Median 5 years (120 available)",
          outcomes: ["107 (91.5%) well, no fevers", "10 continued unexplained fevers but well", "2 developed JIA"]
        }
      },
      
      reassurance: "The majority of children with undiagnosed FUO are well on long-term follow-up"
    },
    
    indications_for_consultation: [
      "Persistent fever with ill-appearance despite initial evaluation (infectious diseases, rheumatology, hematology-oncology)",
      "Guidance on periodic fever disorder testing (rheumatology or infectious diseases)",
      "Multiple specialists simultaneously if very ill and prompt diagnosis essential"
    ]
  },
  
  // ==========================================================================
  // MODULE 7: CASE HOOKS
  // ==========================================================================
  
  caseHooks: {
    id: 'fuo_case_hooks',
    
    the_cat_scratch_clue: {
      title: "The Cat Scratch Clue",
      scenario: "8-year-old with 3-week fever, fatigue, mild abdominal pain. Labs show elevated LFTs and lymphocytosis. CXR normal. No one asked about pets.",
      question: "What are you missing?",
      revelation: "Family recently adopted a kitten. Abdominal US shows multiple splenic lesions.",
      diagnosis: "Hepatosplenic cat scratch disease",
      anchor: "ALWAYS ask about animal exposure. Cat scratch disease is a leading cause of FUO in resource-abundant countries."
    },
    
    the_evanescent_rash: {
      title: "The Evanescent Rash",
      scenario: "5-year-old with 2-week daily spiking fevers. Appears very ill when febrile, then dramatically improves within hours. Parent mentions a 'weird pink rash that comes and goes.'",
      question: "What's the diagnosis?",
      clue: "The rash is salmon-pink, macular, appears only during fever spikes",
      diagnosis: "Systemic Juvenile Idiopathic Arthritis (sJIA)",
      anchor: "sJIA rash is EVANESCENT - examine during fever. Children are ill-appearing with fever but dramatically improve with defervescence."
    },
    
    the_hidden_abscess: {
      title: "The Hidden Abscess",
      scenario: "12-year-old with 10-day fever, history of appendectomy 3 months ago. All 'routine' labs and CXR normal.",
      question: "What should you consider?",
      revelation: "Abdominal CT shows pelvic abscess",
      diagnosis: "Post-surgical intra-abdominal abscess",
      anchor: "History of abdominal surgery increases risk of intra-abdominal abscess. May not have localizing symptoms initially."
    },
    
    the_missing_urinalysis: {
      title: "The Missing Urinalysis",
      scenario: "4-year-old with 2-week FUO. Extensive workup including blood cultures, serologies, CXR all negative. Review of records shows urinalysis was never ordered.",
      revelation: "UA shows pyuria; urine culture grows E. coli",
      diagnosis: "Urinary tract infection",
      anchor: "UTI is one of the most common causes of FUO. Failure to perform/pursue urinalysis was a common error in FUO case series."
    },
    
    the_factitious_fever: {
      title: "The Factitious Fever",
      scenario: "10-year-old with 3-week 'fever' per mom. Child looks completely well. No sweating during 'fever,' no malaise, eating normally. Temperature only taken by mom.",
      red_flags: [
        "Fever only confirmed by one caregiver",
        "Absence of malaise during febrile episodes",
        "No sweating with 'defervescence'",
        "Child appears well throughout"
      ],
      diagnosis: "Factitious fever (Munchausen by proxy consideration)",
      anchor: "When fever pattern doesn't fit disease physiology, consider factitious fever. Admit for observation if needed."
    },
    
    the_kawasaki_mimic: {
      title: "The Kawasaki Mimic",
      scenario: "4-month-old with 10-day fever. No rash, no conjunctivitis, no mucosal changes. Labs show elevated inflammatory markers and sterile pyuria.",
      question: "Given the age and duration, what must you consider?",
      key_point: "Infants <6 months with unexplained fever ≥7 days warrant echocardiogram",
      revelation: "Echo shows coronary artery dilation",
      diagnosis: "Incomplete Kawasaki disease",
      anchor: "Young infants often present without classic mucocutaneous findings. Echo may be the only clue."
    },
    
    the_periodic_pattern: {
      title: "The Periodic Pattern",
      scenario: "6-year-old with 'recurrent fevers' for months. Parents note episodes of high fever with aphthous ulcers and cervical adenopathy lasting 4-5 days, then completely well for 3-4 weeks, then repeats.",
      question: "What syndrome does this pattern suggest?",
      diagnosis: "PFAPA syndrome (Periodic Fever, Aphthous stomatitis, Pharyngitis, Adenitis)",
      anchor: "Regular periodicity with well intervals suggests periodic fever syndrome. Ask about pattern in detail."
    }
  },
  
  // ==========================================================================
  // MODULE 8: FLASHCARDS
  // ==========================================================================
  
  flashcards: [
    {
      front: "What is the definition of FUO in children?",
      back: "Fever >38.3°C (101°F) at least once daily for ≥8 days with no diagnosis after thorough initial evaluation"
    },
    {
      front: "What is the MOST common category of diagnoses in pediatric FUO?",
      back: "Infection (51% of cases)"
    },
    {
      front: "What are the two most common causes of FUO in resource-abundant countries?",
      back: "1) Cat scratch disease (Bartonella)\n2) Urinary tract infection"
    },
    {
      front: "What are the three most common causes of FUO in resource-limited countries?",
      back: "1) Brucellosis\n2) Tuberculosis\n3) Typhoid fever"
    },
    {
      front: "What percentage of FUO cases resolve without a diagnosis?",
      back: "23% - and most of these children do well on follow-up"
    },
    {
      front: "What is the single most important diagnostic tool in FUO?",
      back: "The HISTORY and PHYSICAL EXAMINATION (must be repeated multiple times)"
    },
    {
      front: "Why should the FUO patient be examined WHILE FEBRILE?",
      back: "To assess illness severity, vital sign changes, and transient findings (JIA rash is only present during fever)"
    },
    {
      front: "What rash is characteristically EVANESCENT and present only during fever?",
      back: "Systemic JIA - salmon-pink, macular rash"
    },
    {
      front: "What is relative bradycardia and what does it suggest?",
      back: "Pulse fails to increase as expected with fever (+10 bpm per 1°F). Suggests intracellular infections (typhoid, Legionella, RMSF, malaria, etc.)"
    },
    {
      front: "What finding on urinalysis suggests Kawasaki disease?",
      back: "Sterile PYURIA (WBCs are monocytic, not detected by leukocyte esterase dipstick)"
    },
    {
      front: "What common lab error was noted in FUO case series?",
      back: "Failure to perform or adequately pursue urinalysis findings"
    },
    {
      front: "Why should empiric antibiotics generally be AVOIDED in FUO?",
      back: "Can mask/delay diagnosis of serious infections (meningitis, endocarditis, osteomyelitis) and interfere with cultures"
    },
    {
      front: "When is an echocardiogram warranted in FUO evaluation?",
      back: "Infants <6 months with unexplained fever ≥7 days (to evaluate for incomplete Kawasaki disease)"
    },
    {
      front: "How quickly does drug fever typically resolve after stopping the causative medication?",
      back: "Within 2 half-lives of the drug (usually 3-4 days)"
    },
    {
      front: "What percentage of children with undiagnosed FUO are well on long-term follow-up?",
      back: "~91.5% are well and fever-free at 5-year follow-up"
    }
  ],
  
  // ==========================================================================
  // MODULE 9: HIGH-YIELD TEACHING POINTS
  // ==========================================================================
  
  highYieldPoints: {
    core_principles: [
      "FUO = common disease, UNCOMMON presentation (not exotic rare disease)",
      "History and physical exam are the MOST important diagnostic tools",
      "Must REPEAT history and exam - clues emerge over time",
      ">25% of hospitalized FUO patients develop clinically relevant findings AFTER admission",
      "Examine patient WHILE FEBRILE for transient findings"
    ],
    
    key_exposures_to_ask: [
      "Animals (cats, dogs, wild animals, birds)",
      "Travel (extending back to birth)",
      "Tick and mosquito bites",
      "Medications (including OTC, supplements)",
      "Surgical history (especially abdominal)",
      "Dietary exposures (raw meat, game, shellfish, pica)"
    ],
    
    dont_miss_diagnoses: [
      "UTI - common error is failing to perform/pursue urinalysis",
      "Cat scratch disease - ask about pets",
      "Incomplete Kawasaki (<6 months, fever ≥7 days → echo)",
      "Systemic JIA - evanescent rash, dramatic improvement with defervescence",
      "Intra-abdominal abscess - especially post-surgical patients",
      "Drug fever - stop nonessential medications"
    ],
    
    red_flags_for_factitious: [
      "Fever only confirmed by one caregiver",
      "Absence of malaise during febrile episodes",
      "No sweating with defervescence",
      "Child appears well throughout",
      "Pattern doesn't fit disease physiology"
    ],
    
    therapeutic_trial_guidance: [
      "NSAID trial reasonable if JIA suspected",
      "AVOID empiric broad-spectrum antibiotics",
      "Directed antimicrobials only for life-threatening infections (malaria, typhoid, disseminated TB)",
      "NEVER empiric glucocorticoids unless in extremis with infections/malignancy excluded"
    ],
    
    reassurance_for_families: [
      "Children with FUO usually have treatable or self-limiting diseases",
      "Most do well even without definitive diagnosis",
      "23% resolve before diagnosis; majority do well",
      ">90% well at 5-year follow-up in undiagnosed cases"
    ]
  }
};

// Export for use in ReasonDx platform
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FUO_CHILDREN_DISCOVERY_TEMPLATES;
}
