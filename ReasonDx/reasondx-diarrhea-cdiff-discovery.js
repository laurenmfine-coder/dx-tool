/**
 * ReasonDx Acute Diarrhea & C. difficile Templates
 * SOCRATIC DISCOVERY ARCHITECTURE
 * 
 * Based on UpToDate:
 * - Approach to the adult with acute diarrhea in resource-rich settings
 * - Clostridioides difficile infection in adults: Clinical manifestations and diagnosis
 * 
 * Design: Students discover clinical reasoning through case decisions
 */

const ACUTE_DIARRHEA_DISCOVERY = {
  id: "acute_diarrhea_evaluation",
  title: "Approach to Acute Diarrhea in Adults",
  
  // ============================================
  // CORE CLINICAL CONTENT
  // ============================================
  
  defined_findings: {
    // Temporal pattern
    acute_onset: { label: "Acute (<14 days)", type: "boolean" },
    persistent: { label: "Persistent (14-30 days)", type: "boolean" },
    chronic: { label: "Chronic (>30 days)", type: "boolean" },
    
    // Severity markers
    frequency_6_or_more: { label: "≥6 unformed stools/24h", type: "boolean" },
    severe_abdominal_pain: { label: "Severe abdominal pain", type: "boolean" },
    hypovolemia_signs: { label: "Signs of hypovolemia", type: "boolean" },
    dark_scant_urine: { label: "Dark/scant urine", type: "boolean" },
    orthostatic: { label: "Orthostatic symptoms", type: "boolean" },
    
    // Inflammatory markers - KEY BRANCH
    bloody_diarrhea: { label: "Bloody diarrhea", type: "boolean" },
    mucoid_stools: { label: "Mucoid stools", type: "boolean" },
    fever_high: { label: "Fever ≥38.5°C (101.3°F)", type: "boolean" },
    small_volume_frequent: { label: "Small volume, frequent stools", type: "boolean" },
    
    // Stool character
    watery: { label: "Watery stools", type: "boolean" },
    large_volume: { label: "Large volume stools", type: "boolean" },
    cramping_bloating: { label: "Cramping/bloating", type: "boolean" },
    
    // Exposures - CRITICAL HISTORY
    recent_antibiotics: { label: "Antibiotics within 3 months", type: "boolean" },
    current_antibiotics: { label: "Currently on antibiotics", type: "boolean" },
    recent_hospitalization: { label: "Hospitalization within 3 months", type: "boolean" },
    food_exposure_6h: { label: "Onset within 6h of food", type: "boolean" },
    food_exposure_8_16h: { label: "Onset 8-16h after food", type: "boolean" },
    food_exposure_over_16h: { label: "Onset >16h after food", type: "boolean" },
    unpasteurized_dairy: { label: "Unpasteurized dairy exposure", type: "boolean" },
    raw_undercooked_meat: { label: "Raw/undercooked meat", type: "boolean" },
    seafood_shellfish: { label: "Seafood/shellfish exposure", type: "boolean" },
    travel_resource_limited: { label: "Travel to resource-limited area", type: "boolean" },
    daycare_exposure: { label: "Daycare exposure", type: "boolean" },
    animal_exposure: { label: "Animal exposure (poultry, turtles)", type: "boolean" },
    outbreak_known: { label: "Known outbreak exposure", type: "boolean" },
    
    // Patient factors
    age_70_plus: { label: "Age ≥70 years", type: "boolean" },
    immunocompromised: { label: "Immunocompromised", type: "boolean" },
    hiv_cd4_low: { label: "HIV with CD4 <200", type: "boolean" },
    inflammatory_bowel_disease: { label: "Inflammatory bowel disease", type: "boolean" },
    pregnant: { label: "Pregnant", type: "boolean" },
    cardiac_disease: { label: "Cardiac disease", type: "boolean" },
    cirrhosis: { label: "Cirrhosis", type: "boolean" },
    ppi_use: { label: "PPI use", type: "boolean" },
    msm: { label: "Men who have sex with men", type: "boolean" },
    food_handler: { label: "Food handler", type: "boolean" },
    healthcare_worker: { label: "Healthcare worker", type: "boolean" },
    
    // Exam findings
    dry_mucous_membranes: { label: "Dry mucous membranes", type: "boolean" },
    diminished_skin_turgor: { label: "Diminished skin turgor", type: "boolean" },
    abdominal_distension: { label: "Abdominal distension", type: "boolean" },
    peritoneal_signs: { label: "Peritoneal signs", type: "boolean" },
    rebound_tenderness: { label: "Rebound tenderness", type: "boolean" }
  },
  
  // ============================================
  // DECISION NODES - Critical branch points
  // ============================================
  
  decision_nodes: {
    
    // First decision: Does this patient need evaluation?
    triage_decision: {
      id: "need_evaluation",
      prompt: "This patient has had diarrhea for 2 days. Do they need clinical evaluation?",
      requires_evaluation_if: [
        "persistent_fever",
        "bloody_diarrhea", 
        "severe_abdominal_pain",
        "hypovolemia_signs",
        "history_ibd"
      ],
      teaching_if_missed: "Most acute diarrhea is self-limited, but these red flags warrant evaluation",
      most_patients: "Most adults with acute diarrhea don't seek care - symptoms are mild and transient"
    },
    
    // Critical: Small bowel vs large bowel origin
    anatomic_localization: {
      id: "bowel_origin",
      prompt: "Based on the stool characteristics, where is the diarrhea originating?",
      small_bowel_features: {
        characteristics: ["watery", "large_volume", "cramping_bloating"],
        pathogens: ["viral", "ETEC", "Giardia", "Cryptosporidium"],
        inflammatory_markers: "rare"
      },
      large_bowel_features: {
        characteristics: ["small_volume", "frequent", "painful", "bloody_or_mucoid"],
        pathogens: ["Salmonella", "Shigella", "Campylobacter", "C_diff", "E_histolytica"],
        inflammatory_markers: "common"
      },
      teaching: "Anatomic localization narrows the differential and guides testing"
    },
    
    // Inflammatory vs non-inflammatory
    inflammatory_assessment: {
      id: "inflammatory_features",
      prompt: "Does this patient have inflammatory diarrhea?",
      inflammatory_features: [
        "fever_38.5_or_higher",
        "bloody_diarrhea",
        "mucoid_stools"
      ],
      if_inflammatory: {
        think: ["Salmonella", "Shigella", "Campylobacter", "C_diff", "STEC", "amebiasis"],
        action: "Test stool, consider empiric antibiotics"
      },
      if_non_inflammatory: {
        think: ["viral", "toxin_mediated", "ETEC"],
        action: "Supportive care, usually no testing needed"
      }
    },
    
    // When to test
    testing_decision: {
      id: "stool_testing",
      prompt: "Should you send stool for testing?",
      indications: [
        "Severe illness (hypovolemia, ≥6 stools/24h, severe pain)",
        "Inflammatory features (bloody, mucoid, fever ≥38.5°C)",
        "High-risk host (age ≥70, immunocompromised, IBD, pregnant, cardiac)",
        "Symptoms >1 week",
        "Public health concerns (food handler, healthcare worker, daycare)"
      ],
      teaching: "Testing identifies pathogens that inform treatment and public health response"
    },
    
    // Critical: Antibiotic decision
    antibiotic_decision: {
      id: "empiric_antibiotics",
      prompt: "Should you give empiric antibiotics?",
      withhold_antibiotics: {
        scenarios: [
          "Acute nonbloody diarrhea (non-travel)",
          "Suspected STEC (bloody diarrhea + outbreak + no fever)"
        ],
        rationale: "Benefits don't outweigh risks (resistance, C. diff, toxicity)"
      },
      give_antibiotics: {
        scenarios: [
          "Severe illness",
          "Inflammatory features",
          "High-risk host"
        ],
        choice: "Azithromycin or fluoroquinolone"
      },
      critical_exception: {
        stec_suspected: {
          scenario: "Bloody diarrhea, no fever, outbreak setting",
          action: "WITHHOLD antibiotics pending Shiga toxin testing",
          rationale: "Antibiotics associated with HUS development in STEC"
        }
      }
    }
  },
  
  // ============================================
  // DISCOVERY PROMPTS - Socratic teaching
  // ============================================
  
  discovery_prompts: {
    
    // Timing clue discovery
    food_timing: {
      context: "patient_reports_onset_after_meal",
      question: "The patient got sick 4 hours after eating potato salad at a picnic. What does the timing tell you?",
      timing_clues: {
        within_6_hours: {
          suggests: "Preformed toxin (S. aureus or B. cereus)",
          teaching: "Toxin already in food - no incubation needed"
        },
        at_8_to_16_hours: {
          suggests: "Clostridium perfringens",
          teaching: "Time for organism to produce toxin in gut"
        },
        over_16_hours: {
          suggests: "Viral or bacterial infection (ETEC, STEC, others)",
          teaching: "Time needed for organism to multiply"
        }
      },
      follow_up: "What were the initial symptoms?",
      if_vomiting_predominant: "Preformed toxin even more likely"
    },
    
    // Bloody diarrhea branch
    bloody_diarrhea_workup: {
      context: "patient_has_bloody_diarrhea",
      question: "This patient has bloody diarrhea. What specific tests do you need beyond routine culture?",
      critical_tests: {
        shiga_toxin: {
          why: "STEC (E. coli O157:H7 and others) causes bloody diarrhea",
          key_point: "Culture alone misses non-O157 STEC strains",
          consequence_if_missed: "May treat with antibiotics → HUS risk"
        },
        fecal_leukocytes: {
          why: "Helps distinguish invasive pathogens from amebiasis",
          key_point: "Amebiasis destroys leukocytes → few in stool"
        }
      },
      if_student_orders_culture_only: {
        teaching: "Culture alone isn't enough for bloody diarrhea - need Shiga toxin testing"
      }
    },
    
    // STEC antibiotic trap
    stec_antibiotic_trap: {
      context: "bloody_diarrhea_suspected_stec",
      question: "This patient has bloody diarrhea during an E. coli outbreak. Do you start antibiotics?",
      correct_answer: "NO - withhold pending Shiga toxin testing",
      if_student_gives_antibiotics: {
        consequence: "Antibiotics associated with HUS in STEC infection",
        mechanism: "May increase toxin release or absorption",
        teaching: "This is one situation where NOT giving antibiotics is the right call"
      },
      nuance: "If patient is severely ill with inflammatory features, benefits may outweigh risks"
    },
    
    // C. diff suspicion
    cdiff_suspicion: {
      context: "diarrhea_with_antibiotic_history",
      question: "The patient finished antibiotics 2 weeks ago and now has diarrhea. What's your leading diagnosis?",
      answer: "C. difficile infection",
      key_history_points: [
        "Antibiotics within 3 months (not just current use)",
        "Recent hospitalization within 3 months",
        "Age >65",
        "PPI use increases risk"
      ],
      timing_pearl: "Most CDI occurs within 2 weeks of antibiotics, but can occur up to 10 weeks after",
      if_student_misses: {
        reveal: "Stool test positive for C. difficile toxin",
        teaching: "Always ask about antibiotics in the past 3 months, not just current use"
      }
    },
    
    // Hospital-acquired diarrhea
    nosocomial_diarrhea: {
      context: "diarrhea_after_72h_hospitalization",
      question: "Patient develops diarrhea 4 days into hospitalization. What testing is most useful?",
      correct_answer: "Test for C. difficile, NOT routine stool culture",
      teaching: "Routine stool cultures are of little value after 72h hospitalization",
      rationale: "Hospital-acquired bacterial diarrhea (other than C. diff) is rare; routine cultures have very low yield",
      common_error: "Ordering comprehensive GI panel when C. diff test alone is appropriate"
    },
    
    // Immunocompromised patient
    immunocompromised_workup: {
      context: "hiv_patient_with_diarrhea",
      question: "A patient with HIV (CD4 150) has acute diarrhea. What additional testing is needed?",
      expanded_workup: {
        parasites: {
          tests: ["O&P with special stains", "Cryptosporidium", "microsporidia"],
          rationale: "Higher risk of opportunistic parasites"
        },
        cmv: {
          if_cd4_under_50: "Consider CMV - requires endoscopy with biopsy",
          clinical_clue: "Bloody diarrhea, ulcers on scope"
        }
      },
      teaching: "Immunocompromised patients need broader workup for opportunistic pathogens"
    }
  },
  
  // ============================================
  // CONSEQUENCE MAPPINGS
  // ============================================
  
  consequence_mappings: {
    
    stec_antibiotic_decision: {
      scenario: "Bloody diarrhea during E. coli outbreak",
      if_gives_antibiotics: {
        outcome: "Patient develops HUS 5 days later",
        teaching: "Antibiotics in STEC infection associated with hemolytic uremic syndrome",
        mortality_risk: "HUS mortality 3-5%"
      },
      if_withholds_and_tests: {
        outcome: "Shiga toxin positive, supportive care, patient recovers",
        teaching: "Most STEC infections are self-limited with supportive care"
      }
    },
    
    missed_cdiff: {
      scenario: "Post-antibiotic diarrhea",
      if_treats_empirically_without_testing: {
        outcome: "Patient worsens, develops toxic megacolon",
        teaching: "Need to diagnose C. diff to treat appropriately (vancomycin/fidaxomicin, not fluoroquinolones)"
      },
      if_tests_for_cdiff: {
        outcome: "C. diff toxin positive, started on oral vancomycin, improves",
        teaching: null
      }
    },
    
    volume_depletion: {
      scenario: "Severe watery diarrhea",
      if_doesnt_assess_volume: {
        outcome: "Patient becomes hypotensive, develops AKI",
        teaching: "Rehydration is the MOST CRITICAL therapy in diarrheal illness"
      },
      if_gives_oral_rehydration: {
        outcome: "Volume maintained, patient recovers",
        teaching: "Oral rehydration solutions are grossly underutilized - most patients don't need IV"
      }
    },
    
    loperamide_in_dysentery: {
      scenario: "Bloody diarrhea with fever",
      if_gives_loperamide_alone: {
        outcome: "Patient worsens, develops prolonged fever and bacteremia",
        teaching: "Avoid antimotility agents in dysentery unless giving antibiotics - can prolong disease"
      },
      if_avoids_loperamide: {
        outcome: "Patient treated appropriately",
        teaching: "Bismuth salicylate is safer alternative if symptomatic therapy needed in dysentery"
      }
    }
  },
  
  // ============================================
  // CASE HOOKS
  // ============================================
  
  case_hooks: {
    
    the_picnic: {
      presenting_complaint: "6 people sick 4 hours after church picnic",
      student_expected: "Food poisoning, probably bacterial",
      key_detail: "Onset within 6 hours, vomiting prominent",
      teaching_anchor: "Preformed toxin (S. aureus in potato salad) - no antibiotics needed",
      memorable: "The potato salad sat out in the sun"
    },
    
    the_recent_discharge: {
      presenting_complaint: "70-year-old with diarrhea, discharged 2 weeks ago after hip surgery",
      student_expected: "Viral gastroenteritis",
      twist: "Had received perioperative antibiotics",
      teaching_anchor: "C. diff can present up to 10 weeks post-antibiotics",
      memorable: "The antibiotic history is often remote"
    },
    
    the_outbreak_victim: {
      presenting_complaint: "25-year-old with bloody diarrhea, no fever, ate at restaurant with outbreak",
      student_expected: "Needs antibiotics for bacterial dysentery",
      twist: "Shiga toxin positive - antibiotics contraindicated",
      teaching_anchor: "STEC is the one bloody diarrhea where you withhold antibiotics",
      memorable: "Fluoroquinolone would have caused HUS"
    },
    
    the_daycare_worker: {
      presenting_complaint: "Daycare worker with 2 weeks of diarrhea, no blood",
      student_expected: "Viral or post-infectious",
      twist: "Giardia cysts on O&P",
      teaching_anchor: "Persistent diarrhea + daycare exposure = think parasites",
      memorable: "Should have tested for parasites earlier"
    }
  }
};

// ============================================
// C. DIFFICILE SPECIFIC DISCOVERY MODULE
// ============================================

const CDIFF_DISCOVERY = {
  id: "cdiff_evaluation",
  title: "C. difficile Infection: Recognition and Diagnosis",
  
  // Clinical spectrum
  clinical_spectrum: {
    asymptomatic_carriage: {
      description: "Sheds C. diff in stool, NO symptoms",
      prevalence: "Up to 20% hospitalized adults, 50% long-term care",
      action: "NO screening, NO treatment, NO contact precautions",
      critical_point: "Testing asymptomatic patients leads to overtreatment"
    },
    mild_moderate_cdi: {
      description: "Watery diarrhea (≥3 loose stools/24h), cramping, low-grade fever",
      key_features: ["Lower abdominal pain", "Nausea", "Anorexia"],
      stool_character: "Watery, may have mucus, rarely bloody"
    },
    severe_cdi: {
      criteria: "WBC >15,000 OR creatinine ≥1.5 mg/dL",
      additional_features: ["Hypoalbuminemia", "Marked leukocytosis"]
    },
    fulminant_cdi: {
      description: "Systemic toxicity ± profuse diarrhea",
      features: ["Hypotension/shock", "Ileus", "Megacolon"],
      critical_point: "May present with LESS diarrhea due to ileus",
      action: "Imaging + surgical consult"
    }
  },
  
  decision_nodes: {
    
    // When to suspect
    suspicion_triggers: {
      id: "when_to_suspect",
      prompt: "When should you suspect C. difficile?",
      answer: "Acute diarrhea (≥3 loose stools/24h) with no obvious alternative, especially with risk factors",
      risk_factors: [
        "Current or recent antibiotics (within 3 months)",
        "Recent hospitalization (within 3 months)",
        "Age >65",
        "PPI use"
      ],
      timing_pearl: "Symptoms usually within 2 weeks of antibiotics, but can occur up to 10 weeks after"
    },
    
    // Testing decision
    testing_decision: {
      id: "what_to_test",
      prompt: "Patient has diarrhea and was on antibiotics 3 weeks ago. What stool do you send?",
      correct: "LIQUID stool only",
      critical_errors: [
        "Testing formed stool (can't distinguish CDI from carriage)",
        "Testing asymptomatic patients",
        "Repeat testing within 7 days"
      ],
      teaching: "Only test liquid stool from symptomatic patients"
    },
    
    // Interpreting results
    result_interpretation: {
      id: "interpret_tests",
      prompt: "NAAT positive, Toxin EIA negative. Does this patient have CDI?",
      answer: "MAYBE - this is the discordant result scenario",
      interpretation: {
        both_positive: "CDI confirmed",
        naat_negative: "CDI ruled out",
        naat_pos_toxin_neg: {
          possibilities: ["Active infection with low toxin", "Asymptomatic carriage"],
          action: "Clinical correlation - treat if severely ill or no alternative explanation"
        }
      },
      teaching: "NAAT detects DNA, not active toxin production - can detect carriers"
    },
    
    // Ileus presentation
    ileus_recognition: {
      id: "cdiff_without_diarrhea",
      prompt: "Hospitalized patient with abdominal distension, fever, WBC 25,000, but minimal diarrhea. What's happening?",
      answer: "Fulminant C. diff with ileus",
      key_teaching: "C. diff can present WITHOUT diarrhea - fluid pools in atonic colon",
      action: "Rectal swab for testing, CT abdomen, surgical consult",
      danger: "This presentation may seem benign initially but can progress rapidly"
    }
  },
  
  discovery_prompts: {
    
    // Leukemoid reaction
    leukocytosis_clue: {
      context: "unexplained_leukocytosis_hospitalized_patient",
      question: "Hospitalized patient has WBC 35,000 with no obvious source. What should you consider?",
      answer: "C. difficile - even before diarrhea develops",
      teaching: "Unexplained leukocytosis may precede diarrhea by 1-2 days",
      pearl: "Leukemoid reaction (WBC ≥40,000) is consistent with severe/fulminant CDI"
    },
    
    // Pseudomembranous colitis
    pseudomembranes: {
      context: "colonoscopy_shows_raised_yellow_plaques",
      question: "Colonoscopy shows raised yellow-white plaques. What is this highly suggestive of?",
      answer: "Pseudomembranous colitis - highly suggestive of C. difficile",
      teaching: "Pseudomembranes are pathognomonic but not always present, especially in mild disease or recurrent CDI",
      on_ct: "Accordion sign - contrast trapped between thickened haustral folds"
    },
    
    // Recurrence vs persistent
    recurrence_distinction: {
      context: "diarrhea_returns_after_cdiff_treatment",
      question: "Patient completed vancomycin for C. diff 3 weeks ago, diarrhea returns. Recurrence?",
      distinction: {
        recurrent_cdi: {
          definition: "Resolution on therapy, then return 2-8 weeks after stopping",
          risk: "25% have recurrence; prior recurrence increases future risk",
          testing: "Repeat testing indicated"
        },
        persistent_diarrhea: {
          definition: "Never resolved during treatment",
          think: ["Alternative diagnosis", "Post-infectious IBS", "Refractory CDI"],
          testing: "Look for other causes before assuming CDI failure"
        }
      },
      pearl: "True treatment failure with vancomycin/fidaxomicin is very rare"
    },
    
    // IBD complication
    ibd_patient: {
      context: "ibd_patient_with_flare",
      question: "UC patient on immunosuppression presents with bloody diarrhea and cramping. IBD flare?",
      answer: "MUST rule out C. diff - accounts for ~10% of IBD 'flares'",
      danger: "Failure to diagnose CDI → inappropriate steroids/immunosuppression",
      pearl: "IBD patients don't usually develop pseudomembranes with C. diff"
    }
  },
  
  consequence_mappings: {
    
    tested_formed_stool: {
      scenario: "Sent C. diff test on formed stool from asymptomatic patient",
      outcome: "NAAT positive",
      problem: "Can't distinguish CDI from asymptomatic carriage (up to 20% of hospitalized patients)",
      consequence: "Unnecessary treatment, contact precautions, and anxiety",
      teaching: "Only test LIQUID stool from SYMPTOMATIC patients"
    },
    
    missed_fulminant: {
      scenario: "Hospitalized patient with abdominal pain, distension, WBC 30,000, mild diarrhea",
      if_attributes_to_other_cause: {
        outcome: "Patient progresses to toxic megacolon overnight, requires emergent colectomy",
        mortality: "Fulminant CDI mortality can exceed 50% in ICU"
      },
      if_considers_cdiff: {
        outcome: "CT shows colonic thickening, C. diff positive, surgical consult obtained early"
      }
    },
    
    repeat_testing: {
      scenario: "C. diff test positive, started treatment, patient improving but still has loose stools day 5",
      if_repeats_test: {
        outcome: "Test still positive (can remain positive for weeks)",
        problem: "Adds cost, doesn't change management, may cause confusion"
      },
      correct_action: "No repeat testing during treatment - clinical improvement is the guide"
    }
  },
  
  case_hooks: {
    
    the_leukocytosis: {
      presenting_complaint: "68-year-old post-op patient, WBC 28,000, no diarrhea yet",
      student_expected: "Post-surgical leukocytosis or wound infection",
      twist: "Develops profuse diarrhea 36 hours later - C. diff",
      teaching_anchor: "Leukocytosis can PRECEDE diarrhea in C. diff"
    },
    
    the_ibd_flare: {
      presenting_complaint: "Crohn's patient with worsening diarrhea and cramping",
      student_expected: "Disease flare - increase immunosuppression",
      twist: "C. diff positive - was hospitalized 2 weeks ago",
      teaching_anchor: "Always test for C. diff before escalating IBD therapy"
    },
    
    the_silent_megacolon: {
      presenting_complaint: "Elderly patient with abdominal distension, little diarrhea, 'seems okay'",
      student_expected: "Constipation or partial obstruction",
      twist: "CT shows toxic megacolon, C. diff on rectal swab",
      teaching_anchor: "Ileus can mask diarrhea in fulminant C. diff"
    }
  },
  
  // Key discriminators
  discriminators: {
    
    cdiff_vs_antibiotic_diarrhea: {
      shared: ["Diarrhea during/after antibiotics"],
      distinguishing: {
        cdiff: {
          features: ["Abdominal pain/cramping", "Fever", "Leukocytosis"],
          stool: "Doesn't stop with fasting",
          test: "Toxin positive"
        },
        osmotic_antibiotic_diarrhea: {
          features: ["No systemic symptoms", "No cramping"],
          stool: "Stops with fasting (osmotic gap)",
          test: "Toxin negative"
        }
      }
    },
    
    cdiff_vs_other_infectious: {
      distinguishing: {
        cdiff: {
          bloody_stool: "Rare (melena/hematochezia uncommon)",
          history: "Antibiotics/hospitalization",
          endoscopy: "Pseudomembranes"
        },
        invasive_bacterial: {
          bloody_stool: "Common with Shigella, Campylobacter, STEC",
          history: "Food exposure, travel",
          endoscopy: "Ulceration, friability"
        }
      }
    }
  }
};

// ============================================
// COMBINED EXPORT
// ============================================

const GI_DIARRHEA_TEMPLATES = {
  acute_diarrhea: ACUTE_DIARRHEA_DISCOVERY,
  cdiff: CDIFF_DISCOVERY,
  
  // High-yield teaching points across both modules
  integrated_teaching_points: [
    // Testing decisions
    "Only test liquid stool from symptomatic patients for C. diff",
    "Routine stool cultures have little value after 72h hospitalization - test for C. diff instead",
    "Bloody diarrhea needs Shiga toxin testing, not just culture",
    "No repeat C. diff testing within 7 days or during treatment",
    
    // Antibiotic decisions
    "WITHHOLD antibiotics in suspected STEC (bloody diarrhea + outbreak + afebrile)",
    "Empiric antibiotics indicated for severe illness or inflammatory features",
    "Azithromycin preferred over fluoroquinolones if dysentery or fever present",
    "Antibiotics in STEC associated with HUS",
    
    // C. diff specifics
    "C. diff can present up to 10 weeks after antibiotics",
    "C. diff can present with ileus and MINIMAL diarrhea",
    "Unexplained leukocytosis may precede C. diff diarrhea by 1-2 days",
    "Asymptomatic C. diff carriage: 20% hospitalized, 50% long-term care - don't screen or treat",
    "NAAT positive / Toxin negative = either CDI or carriage - clinical correlation needed",
    
    // Management priorities
    "REHYDRATION is the most critical therapy - oral is underutilized",
    "Avoid loperamide in dysentery unless giving antibiotics",
    "Food timing clue: <6h = preformed toxin, 8-16h = C. perfringens, >16h = infection"
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GI_DIARRHEA_TEMPLATES;
}
