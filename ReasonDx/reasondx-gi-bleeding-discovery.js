/**
 * ReasonDx GI Bleeding Templates
 * SOCRATIC DISCOVERY ARCHITECTURE
 * 
 * Based on UpToDate:
 * - Approach to acute upper gastrointestinal bleeding in adults
 * - Approach to acute lower gastrointestinal bleeding in adults
 * - Peptic ulcer disease: Clinical manifestations and diagnosis
 * 
 * Design: Integrated bleeding evaluation with decision-driven learning
 */

const GI_BLEEDING_DISCOVERY = {
  id: "gi_bleeding_evaluation",
  title: "Approach to Acute GI Bleeding",
  
  // ============================================
  // CORE CLINICAL CONTENT
  // ============================================
  
  defined_findings: {
    // Presenting symptoms - KEY LOCALIZERS
    hematemesis: { label: "Hematemesis (vomiting blood)", type: "boolean" },
    coffee_ground_emesis: { label: "Coffee-ground emesis", type: "boolean" },
    melena: { label: "Melena (black tarry stool)", type: "boolean" },
    hematochezia: { label: "Hematochezia (red/maroon blood per rectum)", type: "boolean" },
    blood_clots_in_stool: { label: "Blood clots in stool", type: "boolean" },
    
    // Blood character
    bright_red_rectal: { label: "Bright red blood per rectum", type: "boolean" },
    maroon_rectal: { label: "Maroon blood per rectum", type: "boolean" },
    
    // Hemodynamic status - CRITICAL
    tachycardia: { label: "Resting tachycardia (>100 bpm)", type: "boolean" },
    orthostatic_hypotension: { label: "Orthostatic hypotension", type: "boolean" },
    supine_hypotension: { label: "Supine hypotension", type: "boolean" },
    lightheadedness: { label: "Lightheadedness", type: "boolean" },
    confusion: { label: "Confusion", type: "boolean" },
    cold_clammy: { label: "Cold/clammy extremities", type: "boolean" },
    angina: { label: "Angina/chest pain", type: "boolean" },
    syncope: { label: "Syncope", type: "boolean" },
    
    // Associated symptoms
    epigastric_pain: { label: "Epigastric pain", type: "boolean" },
    abdominal_pain_severe: { label: "Severe abdominal pain", type: "boolean" },
    peritoneal_signs: { label: "Peritoneal signs (rigidity, rebound)", type: "boolean" },
    nausea_vomiting_preceding: { label: "Nausea/vomiting preceding hematemesis", type: "boolean" },
    retching_preceding: { label: "Retching preceding hematemesis", type: "boolean" },
    dysphagia: { label: "Dysphagia", type: "boolean" },
    weight_loss: { label: "Weight loss", type: "boolean" },
    early_satiety: { label: "Early satiety", type: "boolean" },
    change_in_bowels: { label: "Change in bowel habits", type: "boolean" },
    
    // Risk factors - UGIB
    nsaid_use: { label: "NSAID use", type: "boolean" },
    aspirin_use: { label: "Aspirin use", type: "boolean" },
    anticoagulant_use: { label: "Anticoagulant use (warfarin, DOAC)", type: "boolean" },
    antiplatelet_use: { label: "Antiplatelet use (clopidogrel, etc.)", type: "boolean" },
    h_pylori_history: { label: "History of H. pylori infection", type: "boolean" },
    prior_ulcer: { label: "Prior peptic ulcer disease", type: "boolean" },
    prior_gi_bleed: { label: "Prior GI bleeding episode", type: "boolean" },
    liver_disease: { label: "Liver disease/cirrhosis", type: "boolean" },
    varices_known: { label: "Known esophageal/gastric varices", type: "boolean" },
    aortic_aneurysm: { label: "Abdominal aortic aneurysm or graft", type: "boolean" },
    
    // Risk factors - LGIB
    diverticulosis: { label: "Known diverticulosis", type: "boolean" },
    prior_diverticular_bleed: { label: "Prior diverticular bleeding", type: "boolean" },
    recent_colonoscopy_polypectomy: { label: "Recent colonoscopy/polypectomy", type: "boolean" },
    radiation_history: { label: "History of pelvic radiation", type: "boolean" },
    ibd_history: { label: "History of IBD", type: "boolean" },
    
    // Lab findings
    hemoglobin_low: { label: "Low hemoglobin", type: "boolean" },
    hemoglobin_normal_acute: { label: "Normal hemoglobin (acute bleed)", type: "boolean" },
    mcv_low: { label: "Low MCV (microcytic)", type: "boolean" },
    bun_cr_elevated: { label: "Elevated BUN/Cr ratio (>20:1)", type: "boolean" },
    inr_elevated: { label: "Elevated INR", type: "boolean" },
    platelet_low: { label: "Thrombocytopenia", type: "boolean" },
    
    // Exam findings
    jaundice: { label: "Jaundice", type: "boolean" },
    ascites: { label: "Ascites", type: "boolean" },
    spider_angiomata: { label: "Spider angiomata", type: "boolean" }
  },
  
  // ============================================
  // DECISION NODES - Critical branch points
  // ============================================
  
  decision_nodes: {
    
    // FIRST: Is this upper or lower GI bleeding?
    localization: {
      id: "upper_vs_lower",
      prompt: "Is this patient bleeding from an upper or lower GI source?",
      upper_gi_indicators: {
        strong: ["hematemesis", "coffee_ground_emesis"],
        supportive: ["melena", "elevated_bun_cr_ratio", "liver_disease_signs"],
        note: "Melena = upper source in 90% of cases"
      },
      lower_gi_indicators: {
        strong: ["blood_clots_in_stool"],
        supportive: ["hematochezia_without_hemodynamic_instability"],
        note: "Blood clots highly predictive of colonic source"
      },
      trap: {
        hematochezia_can_be_upper: {
          scenario: "Hematochezia + hemodynamic instability",
          teaching: "10-15% of patients with severe hematochezia have UPPER source",
          action: "Consider EGD before or with colonoscopy"
        }
      }
    },
    
    // Hemodynamic assessment
    hemodynamic_assessment: {
      id: "stability",
      prompt: "What is this patient's hemodynamic status?",
      severity_levels: {
        mild: {
          findings: ["resting_tachycardia"],
          blood_loss: "~15% blood volume"
        },
        moderate: {
          findings: ["orthostatic_hypotension"],
          blood_loss: "≥15% blood volume"
        },
        severe: {
          findings: ["supine_hypotension"],
          blood_loss: "≥40% blood volume"
        }
      },
      critical_teaching: "The hemoglobin may be NORMAL in acute severe bleeding - don't be reassured",
      hemoglobin_lag: "Hemoglobin decline lags 1-3 days after bleeding episode"
    },
    
    // Suspected variceal vs non-variceal
    variceal_assessment: {
      id: "variceal_suspicion",
      prompt: "Does this patient likely have variceal bleeding?",
      variceal_clues: [
        "Known cirrhosis or liver disease",
        "Jaundice",
        "Ascites",
        "Spider angiomata",
        "Known varices",
        "Heavy alcohol history"
      ],
      if_variceal_suspected: {
        medications: ["Octreotide (or terlipressin)", "Prophylactic antibiotics (ceftriaxone)"],
        NOT_indicated: "Proton pump inhibitor",
        timing: "Endoscopy within 12-24 hours"
      },
      if_non_variceal: {
        medications: ["High-dose IV PPI bolus"],
        timing: "Endoscopy within 24 hours"
      }
    },
    
    // Transfusion threshold
    transfusion_decision: {
      id: "transfusion",
      prompt: "At what hemoglobin should you transfuse this patient?",
      standard_threshold: {
        value: "7 g/dL",
        applies_to: "Most hemodynamically stable patients",
        evidence: "Restrictive strategy (7 g/dL) reduces mortality and rebleeding vs liberal (9 g/dL)"
      },
      higher_threshold: {
        value: "9-10 g/dL",
        applies_to: "Active coronary disease, acute coronary syndrome",
        rationale: "Higher oxygen-carrying capacity needed"
      },
      critical_point: "In hemodynamically unstable patients, transfuse based on clinical status, NOT hemoglobin alone"
    },
    
    // Glasgow-Blatchford Score
    risk_stratification: {
      id: "gbs_score",
      prompt: "Can this patient be managed as an outpatient?",
      gbs_components: [
        "Blood urea",
        "Hemoglobin",
        "Systolic blood pressure",
        "Heart rate",
        "Melena",
        "Syncope",
        "Hepatic disease",
        "Heart failure"
      ],
      outpatient_criteria: {
        gbs_score: "0 or 1",
        additional: [
          "Reliable follow-up within 3 days",
          "Access to medical care",
          "PPI prescription provided"
        ]
      },
      teaching: "GBS 0-1: ≥99% probability no death, transfusion, or intervention needed within 30 days"
    }
  },
  
  // ============================================
  // DISCOVERY PROMPTS - Socratic questions
  // ============================================
  
  discovery_prompts: {
    
    // Hemoglobin trap
    normal_hemoglobin_trap: {
      context: "patient_with_hematemesis_normal_hemoglobin",
      question: "The patient vomited blood but hemoglobin is 14. Does that rule out severe bleeding?",
      answer: "NO - in acute bleeding, hemoglobin may be normal initially",
      teaching: "Patient loses WHOLE BLOOD. Hemoglobin drops as extravascular fluid shifts in and as IV fluids are given.",
      timing: "Hemoglobin decline lags 1-3 days (equilibration)",
      decision: "Use hemodynamic status, not hemoglobin, to assess severity in acute setting"
    },
    
    // BUN/Cr ratio
    bun_ratio_clue: {
      context: "elevated_bun_cr_ratio",
      question: "The BUN/Cr ratio is 35:1. What does this suggest?",
      answer: "Supports upper GI bleeding source",
      mechanism: "Blood is digested and absorbed in GI tract, increasing urea production",
      cutoffs: {
        suggestive: ">20:1 (or urea/Cr >100:1)",
        highly_suggestive: ">30:1"
      },
      limitation: "Can also be elevated from dehydration or decreased renal perfusion"
    },
    
    // Mallory-Weiss clue
    retching_history: {
      context: "hematemesis_after_retching",
      question: "The patient was vomiting from a hangover, then vomited blood. What's the likely source?",
      answer: "Mallory-Weiss tear",
      classic_history: "Retching or vomiting BEFORE hematemesis",
      teaching: "The mechanical stress of retching causes mucosal tear at GE junction"
    },
    
    // Aortoenteric fistula - DON'T MISS
    aortoenteric_fistula: {
      context: "gi_bleed_aortic_graft_history",
      question: "A patient with an aortic graft presents with GI bleeding. What must you consider?",
      answer: "Aortoenteric fistula - surgical emergency",
      herald_bleed: {
        description: "Initial bleed may be self-limited ('herald bleed')",
        danger: "Can be followed by massive exsanguination"
      },
      action: "CT angiography and EARLY surgical/IR consultation",
      teaching: "Always ask about aortic surgery or aneurysm in GI bleed patients"
    },
    
    // Anticoagulation management
    anticoagulation_reversal: {
      context: "gi_bleed_on_anticoagulant",
      question: "Patient on warfarin with INR 4.5 presents with melena. Should you reverse?",
      answer: "Balance bleeding severity vs thrombotic risk",
      approach: {
        severe_bleeding: {
          warfarin: "4-factor PCC (preferred over FFP)",
          doac: "Specific reversal agents only if life-threatening",
          note: "DOACs: Idarucizumab for dabigatran, Andexanet for factor Xa inhibitors"
        },
        mild_moderate: {
          action: "Hold anticoagulant, may not need reversal",
          endoscopy: "Can proceed with INR <2.5 for warfarin patients"
        }
      },
      critical_point: "Endoscopy should NOT be significantly delayed for anticoagulation reversal"
    },
    
    // Lower GI - blood clots
    blood_clots_significance: {
      context: "hematochezia_with_clots",
      question: "The patient has blood clots in the stool. What does this tell you?",
      answer: "HIGHLY predictive of colonic source",
      statistics: "Blood clots decrease likelihood of upper GI source (LR 0.05)",
      reason: "Blood from upper GI is digested before reaching rectum - no clots form",
      exception: "Massive upper GI bleed with rapid transit may have clots (rare)"
    },
    
    // Colonoscopy timing
    colonoscopy_timing: {
      context: "stable_lower_gi_bleed",
      question: "How urgent is colonoscopy in this hemodynamically stable patient with lower GI bleeding?",
      answer: "Next available basis during hospitalization, after bowel prep",
      evidence: "Randomized trials show NO benefit to colonoscopy <24h vs 24-96h",
      rationale: "Adequate bowel prep improves diagnostic yield and safety",
      note: "Unprepared colonoscopy has low cecal intubation rates and poor visualization"
    }
  },
  
  // ============================================
  // CONSEQUENCE MAPPINGS
  // ============================================
  
  consequence_mappings: {
    
    missed_upper_in_hematochezia: {
      scenario: "Hematochezia with hemodynamic instability",
      if_goes_straight_to_colonoscopy: {
        outcome: "Colonoscopy negative, patient continues bleeding",
        delay: "EGD eventually performed, finds bleeding duodenal ulcer",
        teaching: "10-15% of severe hematochezia is from UPPER source"
      },
      if_considers_upper_source: {
        outcome: "EGD performed first, duodenal ulcer treated",
        teaching: null
      }
    },
    
    liberal_transfusion: {
      scenario: "Hemodynamically stable patient with hemoglobin 8 g/dL",
      if_transfuses_to_10: {
        outcome: "Increased rebleeding and mortality (based on RCT evidence)",
        teaching: "Restrictive strategy (target 7 g/dL) is better than liberal (9 g/dL)"
      },
      if_uses_restrictive: {
        outcome: "Lower mortality and rebleeding rates",
        evidence: "Villanueva trial: 5% vs 9% mortality"
      }
    },
    
    missed_aortoenteric: {
      scenario: "GI bleed in patient with aortic graft",
      if_doesnt_ask_surgical_history: {
        outcome: "Patient has 'herald bleed', discharged, returns with exsanguination",
        teaching: "ALWAYS ask about aortic surgery or aneurysm"
      },
      if_considers_aef: {
        outcome: "CT angiography performed, aortoenteric fistula identified, surgical repair",
        teaching: null
      }
    },
    
    delayed_endoscopy: {
      scenario: "Upper GI bleed, suspected peptic ulcer",
      if_endoscopy_beyond_24h: {
        outcome: "Observational data: increased mortality, longer stay, more surgery",
        teaching: "Early endoscopy (within 24h) is standard of care"
      },
      if_urgent_endoscopy_6h: {
        outcome: "No improvement over 6-24h endoscopy in stable patients",
        teaching: "Urgent (<6h) not better than early (6-24h) for stable patients"
      }
    },
    
    ppi_in_variceal: {
      scenario: "Cirrhotic patient with hematemesis",
      if_gives_ppi: {
        outcome: "Not harmful but not indicated - wastes resources",
        correct_treatment: "Octreotide + antibiotics, NOT PPI"
      },
      if_gives_octreotide_and_antibiotics: {
        outcome: "Appropriate variceal hemorrhage protocol initiated",
        teaching: null
      }
    }
  },
  
  // ============================================
  // CASE HOOKS
  // ============================================
  
  case_hooks: {
    
    the_herald_bleed: {
      presenting_complaint: "68-year-old with GI bleed, s/p AAA repair 3 years ago",
      student_expected: "Peptic ulcer or diverticular bleed",
      twist: "Self-limited bleed, but returns 2 days later with massive hemorrhage",
      diagnosis: "Aortoenteric fistula",
      teaching_anchor: "Always ask about aortic surgery - the 'herald bleed' is your warning"
    },
    
    the_normal_hemoglobin: {
      presenting_complaint: "45-year-old with hematemesis, Hgb 13.5, HR 115, BP 95/60",
      student_expected: "Not too bad - hemoglobin is normal",
      twist: "Patient is in hemorrhagic shock despite normal hemoglobin",
      teaching_anchor: "Hemoglobin lags 1-3 days - use hemodynamic status to assess severity"
    },
    
    the_alcoholic: {
      presenting_complaint: "55-year-old heavy drinker with hematemesis",
      student_expected: "Variceal bleed",
      twist: "No stigmata of liver disease, prior H. pylori, on aspirin for CAD",
      diagnosis: "Bleeding peptic ulcer",
      teaching_anchor: "Don't assume varices - peptic ulcer disease common in alcoholics too"
    },
    
    the_bright_red_blood: {
      presenting_complaint: "70-year-old with bright red blood per rectum, hypotensive",
      student_expected: "Lower GI bleed - needs colonoscopy",
      twist: "EGD shows actively bleeding duodenal ulcer",
      teaching_anchor: "Severe hematochezia can be upper source - 10-15% of cases"
    },
    
    the_hangover: {
      presenting_complaint: "28-year-old vomiting after heavy drinking, then vomited blood",
      student_expected: "Alcohol-related gastritis or ulcer",
      diagnosis: "Mallory-Weiss tear",
      teaching_anchor: "Retching BEFORE hematemesis = think Mallory-Weiss"
    }
  },
  
  // ============================================
  // DISCRIMINATORS
  // ============================================
  
  discriminators: {
    
    upper_vs_lower_gi_bleed: {
      upper_indicators: [
        "Hematemesis (red blood or coffee grounds)",
        "Melena (90% upper source)",
        "Elevated BUN/Cr ratio (>20:1)",
        "History of peptic ulcer, NSAID use, liver disease"
      ],
      lower_indicators: [
        "Blood clots in stool (highly predictive)",
        "Normal BUN/Cr ratio",
        "History of diverticulosis, hemorrhoids, IBD"
      ],
      overlap_caution: {
        hematochezia: "Can be either - upper if massive/rapid bleeding",
        melena: "Usually upper, but can be small bowel or right colon"
      }
    },
    
    variceal_vs_nonvariceal: {
      variceal: {
        history: ["Cirrhosis", "Portal hypertension", "Known varices"],
        exam: ["Jaundice", "Ascites", "Spider angiomata"],
        treatment: ["Octreotide/terlipressin", "Antibiotics", "No PPI"]
      },
      nonvariceal: {
        history: ["NSAID use", "H. pylori", "Peptic ulcer"],
        exam: ["May be unremarkable"],
        treatment: ["High-dose IV PPI"]
      }
    },
    
    peptic_ulcer_benign_vs_malignant: {
      benign_features: [
        "Smooth, regular, rounded edges",
        "Flat, smooth ulcer base",
        "Exudate in crater"
      ],
      malignant_features: [
        "Ulcerated mass protruding into lumen",
        "Nodular, clubbed, or fused folds",
        "Folds that stop short of ulcer margin",
        "Overhanging, irregular, thickened margins"
      ],
      biopsy_rule: "All gastric ulcers should be biopsied in high gastric cancer areas"
    }
  }
};

// ============================================
// PEPTIC ULCER DISEASE SPECIFIC MODULE
// ============================================

const PEPTIC_ULCER_DISCOVERY = {
  id: "peptic_ulcer_evaluation",
  title: "Peptic Ulcer Disease: Recognition and Workup",
  
  clinical_presentations: {
    asymptomatic: {
      prevalence: "~70% of peptic ulcers are asymptomatic",
      presentation: "May present first with complications (bleeding, perforation)",
      high_risk_for_silent: ["Elderly", "NSAID users"]
    },
    
    symptomatic: {
      classic_duodenal: {
        timing: "Pain 2-5 hours after meals, and at night (11 PM - 2 AM)",
        mechanism: "Acid secretion without food buffer"
      },
      classic_gastric: {
        timing: "Pain with eating, food-provoked",
        associated: ["Postprandial fullness", "Early satiety", "Nausea"]
      }
    },
    
    complications: {
      bleeding: {
        presentation: ["Hematemesis", "Melena", "Hematochezia if massive"],
        note: "43-87% of bleeding ulcers have NO antecedent dyspepsia"
      },
      perforation: {
        triad: ["Sudden severe abdominal pain", "Tachycardia", "Abdominal rigidity"],
        prevalence: "2-10% of peptic ulcer patients"
      },
      penetration: {
        symptoms: "More intense, localized pain radiating to back",
        into_pancreas: "May cause mild hyperamylasemia"
      },
      obstruction: {
        location: "Pyloric channel or duodenal ulcers",
        symptoms: ["Early satiety", "Vomiting", "Weight loss"]
      }
    }
  },
  
  decision_nodes: {
    
    etiology_workup: {
      id: "ulcer_cause",
      prompt: "What are the two most common causes of peptic ulcers?",
      answer: ["H. pylori infection", "NSAID use"],
      prevalence: "Together account for >90% of cases",
      action: "Test ALL peptic ulcer patients for H. pylori"
    },
    
    biopsy_decision: {
      id: "when_to_biopsy",
      prompt: "Which ulcers need to be biopsied?",
      always_biopsy: [
        "All ulcers with malignant features",
        "All gastric ulcers in high gastric cancer regions"
      ],
      usually_not_biopsied: "Benign-appearing duodenal ulcers (rarely malignant)",
      controversial: "Benign-appearing gastric ulcers in low gastric cancer regions"
    }
  },
  
  discovery_prompts: {
    
    silent_ulcer: {
      context: "elderly_patient_gi_bleed_no_dyspepsia",
      question: "This 75-year-old on daily aspirin presents with melena but denies any prior symptoms. How is this possible?",
      answer: "70% of peptic ulcers are asymptomatic",
      teaching: "Elderly and NSAID users are particularly prone to 'silent' ulcers",
      statistics: "43-87% of bleeding ulcers present without antecedent dyspepsia"
    },
    
    night_pain: {
      context: "epigastric_pain_waking_from_sleep",
      question: "The patient's pain wakes them up between 11 PM and 2 AM. What does this suggest?",
      answer: "Duodenal ulcer",
      mechanism: "Circadian peak of acid secretion occurs at night",
      classic_pattern: "Pain 2-5 hours after meals (when acid secretes without food buffer)"
    },
    
    h_pylori_negative: {
      context: "peptic_ulcer_h_pylori_negative",
      question: "H. pylori testing is negative and patient denies NSAID use. Now what?",
      answer: "Consider unusual causes and confirm medication history",
      unusual_causes: [
        "Surreptitious NSAID use",
        "Zollinger-Ellison syndrome",
        "Crohn disease",
        "Malignancy",
        "Infections in immunocompromised",
        "Ischemia"
      ],
      pearl: "Corticosteroids also increase ulcer risk, especially with NSAIDs"
    }
  }
};

// ============================================
// LOWER GI BLEEDING SPECIFIC MODULE
// ============================================

const LOWER_GI_BLEEDING_DISCOVERY = {
  id: "lower_gi_bleeding_evaluation",
  title: "Lower GI Bleeding: Evaluation and Management",
  
  key_statistics: {
    spontaneous_cessation: "80-85% stop bleeding spontaneously",
    mortality: "2-4%",
    upper_source_in_hematochezia: "10-15% (when severe)"
  },
  
  decision_nodes: {
    
    rule_out_upper: {
      id: "upper_gi_in_lgib",
      prompt: "When should you perform EGD in a patient presenting with hematochezia?",
      indications: [
        "Hemodynamic instability",
        "Signs of severe bleeding",
        "Elevated BUN/Cr ratio",
        "History suggestive of upper source"
      ],
      teaching: "Don't assume bright red blood = lower source in unstable patients"
    },
    
    colonoscopy_prep: {
      id: "bowel_prep",
      prompt: "Should you do colonoscopy without bowel prep in acute lower GI bleeding?",
      answer: "NO - unprepared colonoscopy has poor diagnostic yield",
      prep: "4-6 liters polyethylene glycol until effluent clear",
      unprepared_problems: [
        "Low cecal intubation rates",
        "Blood and stool obscure visualization"
      ],
      exception: "Anorectal bleeding source highly suspected - flexible sig may be OK"
    },
    
    ct_angiography_role: {
      id: "cta_indication",
      prompt: "When should you order CT angiography instead of colonoscopy?",
      indication: "Ongoing hemodynamically significant hematochezia that cannot be stabilized for colonoscopy",
      detection_rate: "Detects bleeding at 0.3-0.5 mL/min",
      next_step: "If positive, proceed to transcatheter angiography within 90 minutes"
    }
  },
  
  discovery_prompts: {
    
    diverticular_vs_other: {
      context: "elderly_painless_hematochezia",
      question: "75-year-old with painless bright red blood per rectum. Most likely source?",
      likely: "Diverticular bleeding",
      features: ["Painless", "Typically self-limited", "May be massive"],
      contrast_with: {
        ischemic_colitis: "Usually has abdominal pain",
        ibd: "Usually has diarrhea, mucus, chronic course",
        malignancy: "Change in bowel habits, weight loss, occult blood"
      }
    },
    
    post_polypectomy: {
      context: "gi_bleed_recent_colonoscopy",
      question: "Patient had colonoscopy with polypectomy 5 days ago, now has hematochezia. Cause?",
      answer: "Post-polypectomy bleeding",
      timing: "Can occur up to 2 weeks after procedure",
      management: "Repeat colonoscopy with hemostasis"
    }
  },
  
  risk_stratification: {
    oakland_score: {
      components: [
        "Age",
        "Sex",
        "Prior lower GI bleed",
        "Blood on rectal exam",
        "Heart rate",
        "Systolic blood pressure",
        "Hemoglobin"
      ],
      low_risk: "Score ≤8 predicts 95% probability of safe discharge"
    },
    high_risk_features: [
      "Hemodynamic instability",
      "Persistent bleeding",
      "Significant comorbidities",
      "Advanced age",
      "Inpatient-onset bleeding"
    ]
  }
};

// ============================================
// EXPORT COMBINED MODULE
// ============================================

const GI_BLEEDING_TEMPLATES = {
  gi_bleeding: GI_BLEEDING_DISCOVERY,
  peptic_ulcer: PEPTIC_ULCER_DISCOVERY,
  lower_gi_bleed: LOWER_GI_BLEEDING_DISCOVERY,
  
  // High-yield integrated teaching points
  integrated_teaching_points: [
    // Localization
    "Hematemesis = upper source; Blood clots in stool = lower source",
    "Melena is upper source in 90% of cases",
    "10-15% of severe hematochezia has UPPER source - don't assume lower",
    "BUN/Cr ratio >20:1 suggests upper GI bleeding",
    
    // Hemodynamic assessment
    "Normal hemoglobin does NOT rule out severe acute bleeding",
    "Hemoglobin decline lags 1-3 days after acute bleeding (equilibration)",
    "Use hemodynamic status, not hemoglobin, to assess acute severity",
    
    // Resuscitation
    "Restrictive transfusion (target Hgb 7) is BETTER than liberal (target 9)",
    "Exception: target Hgb 9-10 in active coronary disease",
    
    // Management
    "Variceal bleed: Octreotide + antibiotics, NOT PPI",
    "Non-variceal upper: High-dose IV PPI bolus",
    "Early endoscopy (within 24h) is standard for upper GI bleed",
    "Urgent (<6h) NOT better than early (6-24h) for stable patients",
    
    // Don't miss diagnoses
    "ALWAYS ask about aortic surgery/aneurysm - aortoenteric fistula",
    "Retching before hematemesis = Mallory-Weiss tear",
    "70% of peptic ulcers are asymptomatic - can present with complications",
    
    // Lower GI specific
    "80-85% of lower GI bleeds stop spontaneously",
    "Bowel prep improves colonoscopy diagnostic yield - don't skip it",
    "CT angiography → angiography within 90 minutes if extravasation seen"
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GI_BLEEDING_TEMPLATES;
}
