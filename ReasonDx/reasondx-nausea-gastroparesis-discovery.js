/**
 * ReasonDx Nausea/Vomiting & Gastroparesis Templates
 * SOCRATIC DISCOVERY ARCHITECTURE
 * 
 * Based on UpToDate:
 * - Approach to the adult with nausea and vomiting
 * - Gastroparesis: Etiology, clinical manifestations, and diagnosis
 * 
 * Design principle: Students discover clinical pearls through
 * case decisions, not passive reading
 */

const NAUSEA_VOMITING_DISCOVERY = {
  id: "nausea_vomiting_evaluation",
  title: "Approach to Nausea and Vomiting in Adults",
  
  // ============================================
  // CORE CLINICAL CONTENT (for case generation)
  // ============================================
  
  defined_findings: {
    // Temporal pattern - KEY branch point
    acute_onset: { label: "Acute onset (<1 week)", type: "boolean" },
    chronic_symptoms: { label: "Chronic (≥1 month)", type: "boolean" },
    episodic_pattern: { label: "Episodic/cyclic pattern", type: "boolean" },
    
    // Character of symptoms
    nausea_predominant: { label: "Nausea predominant", type: "boolean" },
    vomiting_predominant: { label: "Vomiting predominant", type: "boolean" },
    nausea_without_vomiting: { label: "Nausea without vomiting", type: "boolean" },
    retching_only: { label: "Retching without emesis", type: "boolean" },
    
    // Timing clues
    early_morning_vomiting: { label: "Early morning vomiting", type: "boolean" },
    postprandial: { label: "Postprandial (after eating)", type: "boolean" },
    hours_after_eating: { label: "Vomiting hours after eating", type: "boolean" },
    unrelated_to_meals: { label: "Unrelated to meals", type: "boolean" },
    
    // Vomitus character - HIGH YIELD
    undigested_food: { label: "Undigested food in vomitus", type: "boolean" },
    food_eaten_hours_ago: { label: "Food eaten several hours prior", type: "boolean" },
    bilious: { label: "Bilious (green/yellow)", type: "boolean" },
    bloody_coffee_ground: { label: "Bloody or coffee-ground", type: "boolean" },
    feculent: { label: "Feculent odor", type: "boolean" },
    
    // Associated symptoms
    abdominal_pain: { label: "Abdominal pain", type: "boolean" },
    abdominal_pain_colicky: { label: "Colicky abdominal pain", type: "boolean" },
    abdominal_distension: { label: "Abdominal distension", type: "boolean" },
    diarrhea: { label: "Diarrhea", type: "boolean" },
    fever: { label: "Fever", type: "boolean" },
    headache: { label: "Headache", type: "boolean" },
    vertigo: { label: "Vertigo", type: "boolean" },
    weight_loss: { label: "Weight loss", type: "boolean" },
    early_satiety: { label: "Early satiety", type: "boolean" },
    postprandial_fullness: { label: "Postprandial fullness", type: "boolean" },
    bloating: { label: "Bloating", type: "boolean" },
    heartburn: { label: "Heartburn/reflux symptoms", type: "boolean" },
    
    // Neurologic symptoms - RED FLAGS
    positional_vomiting: { label: "Positional vomiting", type: "boolean" },
    projectile_vomiting: { label: "Projectile vomiting", type: "boolean" },
    vomiting_without_nausea: { label: "Vomiting WITHOUT nausea", type: "boolean" },
    altered_consciousness: { label: "Altered consciousness", type: "boolean" },
    focal_neuro_deficit: { label: "Focal neurologic deficit", type: "boolean" },
    
    // History
    diabetes: { label: "Diabetes mellitus", type: "boolean" },
    diabetes_duration_5yr: { label: "Diabetes >5 years", type: "boolean" },
    prior_gastric_surgery: { label: "Prior gastric surgery", type: "boolean" },
    prior_fundoplication: { label: "Prior fundoplication", type: "boolean" },
    recent_viral_illness: { label: "Recent viral illness", type: "boolean" },
    cannabis_use: { label: "Cannabis use", type: "boolean" },
    cannabis_chronic: { label: "Chronic cannabis use (>1 year)", type: "boolean" },
    opioid_use: { label: "Opioid use", type: "boolean" },
    glp1_agonist: { label: "GLP-1 agonist (semaglutide, etc.)", type: "boolean" },
    chemotherapy: { label: "Recent chemotherapy", type: "boolean" },
    pregnancy_possible: { label: "Pregnancy possible", type: "boolean" },
    migraine_history: { label: "History of migraines", type: "boolean" },
    eating_disorder_signs: { label: "Signs of eating disorder", type: "boolean" },
    
    // Exam findings
    succussion_splash: { label: "Succussion splash", type: "boolean" },
    epigastric_distension: { label: "Epigastric distension", type: "boolean" },
    abdominal_tenderness: { label: "Abdominal tenderness", type: "boolean" },
    peritoneal_signs: { label: "Peritoneal signs (guarding/rigidity)", type: "boolean" },
    orthostatic_hypotension: { label: "Orthostatic hypotension", type: "boolean" },
    dental_erosion: { label: "Dental enamel erosion", type: "boolean" },
    parotid_enlargement: { label: "Parotid enlargement", type: "boolean" },
    hand_calluses: { label: "Calluses on dorsum of hand", type: "boolean" }
  },
  
  // ============================================
  // DECISION NODES - Where student choices matter
  // ============================================
  
  decision_nodes: {
    
    // CRITICAL: Acute vs Chronic determines entire approach
    temporal_classification: {
      id: "temporal_pattern",
      prompt: "How would you classify this patient's symptoms?",
      options: ["acute", "chronic", "episodic"],
      teaching_trigger: {
        if_correct: null, // Move on
        if_missed_chronic: {
          reveal: "This patient has had symptoms for 6 weeks - that's chronic (≥1 month)",
          consequence: "Different workup needed for chronic vs acute"
        }
      }
    },
    
    // Life-threatening causes - must not miss
    red_flag_screen: {
      id: "red_flags",
      prompt: "What dangerous causes must you rule out first?",
      critical_diagnoses: [
        "bowel_obstruction",
        "mesenteric_ischemia", 
        "acute_pancreatitis",
        "myocardial_infarction",
        "increased_icp"
      ],
      teaching_trigger: {
        if_missed_obstruction: {
          clinical_clue: "colicky_pain_plus_distension",
          reveal: "The colicky pain with distension should make you think obstruction",
          consequence: "Delayed diagnosis of SBO can lead to strangulation"
        },
        if_missed_mi: {
          clinical_clue: "nausea_with_diaphoresis_elderly",
          reveal: "In elderly patients, nausea can be the presenting symptom of MI",
          consequence: "Atypical MI presentations are often missed"
        },
        if_missed_icp: {
          clinical_clue: "early_morning_projectile_no_nausea",
          reveal: "Vomiting WITHOUT preceding nausea, especially morning/positional, suggests central cause",
          consequence: "Missed brain tumor or increased ICP"
        }
      }
    },
    
    // Medication review - often missed
    medication_review: {
      id: "med_check",
      prompt: "Have you asked about medications that could cause these symptoms?",
      high_yield_meds: [
        "opioids",
        "glp1_agonists",
        "cannabis",
        "chemotherapy",
        "antibiotics",
        "digoxin"
      ],
      teaching_trigger: {
        if_missed_glp1: {
          reveal: "Patient is on semaglutide - 58% develop delayed gastric emptying!",
          consequence: "GLP-1 agonists are an increasingly common cause of gastroparesis symptoms",
          follow_up: "Should this med be stopped before gastric emptying study?"
        },
        if_missed_cannabis: {
          reveal: "Patient uses cannabis daily - consider cannabinoid hyperemesis",
          discovery_question: "What symptom might help confirm this diagnosis?",
          answer: "Relief with hot showers/baths is characteristic"
        }
      }
    },
    
    // Vomitus character - powerful diagnostic clue
    vomitus_assessment: {
      id: "vomitus_character",
      prompt: "Did you ask what the vomitus looks like?",
      branches: {
        food_hours_old: {
          suggests: "gastric_outlet_obstruction_or_gastroparesis",
          next_step: "examine_for_succussion_splash"
        },
        feculent: {
          suggests: "distal_obstruction_or_gastrocolic_fistula",
          urgency: "high",
          teaching: "Feculent vomiting = bowel content refluxing to stomach"
        },
        bloody: {
          suggests: "upper_gi_bleed",
          urgency: "emergent",
          next_step: "hemodynamic_assessment"
        },
        bilious: {
          suggests: "obstruction_distal_to_ampulla",
          rules_out: "gastric_outlet_obstruction"
        }
      }
    }
  },
  
  // ============================================
  // DISCOVERY PROMPTS - Socratic questions
  // ============================================
  
  discovery_prompts: {
    
    // Pattern recognition
    timing_pattern: {
      context: "patient_reports_episodic_vomiting",
      question: "The patient says episodes happen every few weeks. What pattern are you considering?",
      hints: [
        "Are the episodes stereotypical (similar each time)?",
        "Is there a migraine history?",
        "Ask about cannabis use"
      ],
      ideal_path: ["cyclic_vomiting_syndrome", "cannabinoid_hyperemesis", "migraine_variant"],
      if_student_says_gastroparesis: {
        redirect: "Gastroparesis causes chronic daily symptoms, not discrete episodes separated by normal periods"
      }
    },
    
    // Central vs peripheral cause
    neurogenic_vomiting: {
      context: "vomiting_without_nausea",
      question: "This patient vomits but says they never feel nauseous first. What does that tell you?",
      teaching_moment: "Vomiting WITHOUT nausea suggests central/neurogenic cause - the vomiting center is activated directly, bypassing the nausea pathways",
      red_flags_to_seek: [
        "Early morning occurrence",
        "Projectile character", 
        "Triggered by position change",
        "Headache or neurologic symptoms"
      ],
      if_student_misses: {
        reveal_later: "MRI shows posterior fossa mass",
        teaching: "Central causes directly stimulate the vomiting center - nausea is a cortical perception that may be bypassed"
      }
    },
    
    // Diabetic gastroparesis discovery
    diabetes_connection: {
      context: "diabetic_with_nausea_vomiting",
      question: "This patient has had diabetes for 8 years. What GI complication are you considering?",
      follow_up_questions: [
        "What other signs of autonomic neuropathy might you look for?",
        "What would the vomitus look like?",
        "What test confirms the diagnosis?"
      ],
      if_student_jumps_to_gastroparesis: {
        redirect: "Good thought, but what else could cause these symptoms in a diabetic?",
        alternatives: ["DKA", "medication_effect", "autonomic_neuropathy_with_constipation"]
      },
      complete_teaching: "Diabetic gastroparesis typically occurs after >5 years of diabetes, often with other autonomic dysfunction (orthostatic hypotension, bladder issues)"
    },
    
    // Eating disorder recognition
    eating_disorder_clues: {
      context: "young_female_weight_loss_vomiting",
      question: "You notice the patient has dental erosion and parotid swelling. What are you thinking?",
      physical_exam_triad: ["dental_erosion", "parotid_enlargement", "hand_calluses"],
      if_student_misses: {
        prompt: "Look at her hands - what do you see?",
        reveal: "Russell's sign - calluses from self-induced vomiting"
      },
      important_distinction: {
        question: "How do you distinguish bulimia from gastroparesis in a young woman with vomiting?",
        answer: "Bulimia: self-induced, normal gastric emptying, dental erosions, Russell's sign. Gastroparesis: delayed emptying on scintigraphy, vomiting hours after eating"
      }
    },
    
    // Cannabis hyperemesis
    hot_shower_clue: {
      context: "chronic_vomiting_cannabis_user",
      question: "The patient mentions that hot showers help. Why is this significant?",
      teaching: "Compulsive hot bathing/showering is nearly pathognomonic for cannabinoid hyperemesis syndrome",
      diagnostic_criteria: [
        "Stereotypical episodic vomiting",
        "Chronic cannabis use >1 year, >4x/week",
        "Relief with sustained cannabis cessation"
      ],
      common_mistake: {
        error: "Ordering gastric emptying study",
        correction: "Cannabis itself delays gastric emptying - the test may be abnormal but doesn't mean gastroparesis is the primary problem"
      }
    }
  },
  
  // ============================================
  // CONSEQUENCE MAPPINGS - Choices affect outcomes
  // ============================================
  
  consequence_mappings: {
    
    missed_obstruction: {
      scenario: "Patient with colicky pain and distension",
      if_student_treats_symptomatically: {
        outcome: "Patient returns 12 hours later with strangulated bowel",
        teaching: "Colicky pain + distension + vomiting = obstruction until proven otherwise. Get imaging before antiemetics.",
        recovery_possible: true
      },
      if_student_orders_ct: {
        outcome: "CT shows small bowel obstruction - surgery consulted",
        teaching: null // Correct path, no teaching needed
      }
    },
    
    gastroparesis_workup_order: {
      scenario: "Suspected gastroparesis",
      if_student_orders_gastric_emptying_first: {
        outcome: "Study shows delayed emptying but you've missed a gastric cancer",
        teaching: "Always exclude mechanical obstruction with EGD BEFORE gastric emptying study",
        correct_sequence: ["EGD", "CT_or_MR_enterography", "gastric_emptying_scintigraphy"]
      },
      if_student_orders_egd_first: {
        outcome: "EGD normal, proceed to gastric emptying study",
        teaching: null
      }
    },
    
    medication_timing: {
      scenario: "Ordering gastric emptying study",
      if_student_doesnt_stop_meds: {
        outcome: "Study shows delayed emptying but patient is on opioids and semaglutide",
        teaching: "Must stop medications that affect gastric emptying ≥48 hours before study (opioids, prokinetics, GLP-1 agonists)",
        consequence: "Study is uninterpretable - needs to be repeated"
      },
      if_student_holds_meds: {
        outcome: "Valid study result obtained",
        teaching: null
      }
    },
    
    hyperglycemia_effect: {
      scenario: "Diabetic patient for gastric emptying study, glucose 280",
      if_student_proceeds: {
        outcome: "Study shows severe delayed emptying",
        teaching: "Acute hyperglycemia (>200) itself delays gastric emptying - this may not reflect baseline function",
        consequence: "Patient may be overtreated based on artificially abnormal result"
      },
      if_student_corrects_glucose_first: {
        outcome: "Glucose corrected to 150, study performed",
        teaching: "Wait until glucose <180 before gastric emptying study for accurate results"
      }
    }
  },
  
  // ============================================
  // MEMORABLE CASE HOOKS
  // ============================================
  
  case_hooks: {
    
    the_morning_vomiter: {
      presenting_complaint: "35-year-old with daily morning vomiting for 3 months",
      expected_student_thought: "Pregnancy or gastroparesis",
      twist: "MRI shows fourth ventricle tumor",
      teaching_anchor: "Morning vomiting + no nausea + headache = think central",
      memorable_element: "Patient's only clue was that vomiting was 'explosive'"
    },
    
    the_weight_loss_patient: {
      presenting_complaint: "24-year-old female, 20 lb weight loss, post-meal vomiting",
      expected_student_thought: "Gastroparesis or GERD",
      discovery_moment: "Student notices dental erosions and hand calluses",
      twist: "Patient has bulimia with secondary gastroparesis from malnutrition",
      teaching_anchor: "Always look at hands and teeth in young women with vomiting"
    },
    
    the_new_medication: {
      presenting_complaint: "55-year-old diabetic with new nausea/vomiting",
      expected_student_thought: "Diabetic gastroparesis",
      key_history: "Started semaglutide 6 weeks ago for weight loss",
      teaching_anchor: "58% of patients on liraglutide develop delayed gastric emptying",
      memorable_element: "Symptoms resolved 2 weeks after stopping medication"
    },
    
    the_hot_shower_lover: {
      presenting_complaint: "28-year-old with episodic severe vomiting, multiple ER visits",
      expected_student_thought: "Cyclic vomiting syndrome",
      key_history: "Takes 4-5 hot showers daily during episodes - only thing that helps",
      twist: "Heavy cannabis user - cannabinoid hyperemesis syndrome",
      teaching_anchor: "Compulsive hot bathing is nearly pathognomonic for CHS",
      follow_up: "Symptoms resolved after 6 months cannabis abstinence"
    }
  },
  
  // ============================================
  // DISTINGUISHING FEATURES DATABASE
  // ============================================
  
  discriminators: {
    
    gastroparesis_vs_functional_dyspepsia: {
      shared_features: ["nausea", "early_satiety", "postprandial_fullness", "bloating"],
      distinguishing: {
        gastroparesis: {
          predominant: ["nausea", "vomiting", "weight_loss"],
          gastric_emptying: "delayed (>10% at 4h or >60% at 2h)",
          epidemiology: "rare (<0.5% prevalence)"
        },
        functional_dyspepsia: {
          predominant: ["early_satiety", "postprandial_fullness", "epigastric_pain"],
          gastric_emptying: "usually normal (though 1/3 have slow emptying)",
          epidemiology: "common (~7% prevalence)"
        }
      },
      clinical_pearl: "These diagnoses can interchange over time - NIH consortium found patients switch categories on follow-up"
    },
    
    gastroparesis_vs_mechanical_obstruction: {
      both_have: ["vomiting_food", "early_satiety", "weight_loss"],
      distinguishing: {
        gastroparesis: {
          pain: "rarely predominant (18%)",
          progression: "chronic, stable or slowly progressive",
          exam: "succussion splash possible, no peritoneal signs",
          imaging: "no mechanical lesion"
        },
        mechanical_obstruction: {
          pain: "often prominent, may be colicky",
          progression: "can be acute",
          exam: "distension, high-pitched bowel sounds",
          imaging: "transition point visible"
        }
      },
      rule: "Always exclude mechanical obstruction before diagnosing gastroparesis"
    },
    
    cyclic_vomiting_vs_cannabinoid_hyperemesis: {
      shared_features: ["episodic_severe_vomiting", "symptom_free_intervals"],
      distinguishing: {
        cvs: {
          cannabis: "not required",
          hot_bathing: "not characteristic",
          migraine_association: "common (personal or family history)",
          treatment: "TCAs prophylaxis, triptans abortive"
        },
        cannabinoid_hyperemesis: {
          cannabis: "required - chronic heavy use",
          hot_bathing: "compulsive, provides relief",
          resolution: "with sustained cannabis cessation",
          key_history: "symptoms began AFTER establishing cannabis use"
        }
      },
      diagnostic_test: "Trial of cannabis abstinence (≥6 months)"
    },
    
    rumination_vs_vomiting: {
      key_distinction: "Rumination is effortless regurgitation, not forceful vomiting",
      rumination_features: [
        "Occurs within minutes of eating",
        "No preceding nausea",
        "No retching",
        "Food tastes normal/pleasant (not acidic)",
        "Stops when regurgitant becomes acidic",
        "Normal gastric emptying"
      ],
      commonly_misdiagnosed_as: ["gastroparesis", "GERD", "vomiting"],
      treatment: "Behavioral therapy (diaphragmatic breathing), NOT prokinetics"
    }
  }
};

// ============================================
// GASTROPARESIS-SPECIFIC DISCOVERY MODULE
// ============================================

const GASTROPARESIS_DISCOVERY = {
  id: "gastroparesis_evaluation",
  title: "Gastroparesis: Diagnosis and Etiology",
  
  // Etiology discovery tree
  etiology_decision_tree: {
    
    step_1_known_cause: {
      question: "Does the patient have an obvious underlying cause?",
      if_diabetes: {
        duration_check: "Has diabetes been present >5 years?",
        autonomic_check: "Are there other signs of autonomic neuropathy?",
        teaching: "Diabetic gastroparesis typically occurs after >5 years, often with other autonomic dysfunction"
      },
      if_postsurgical: {
        surgeries_to_ask: ["fundoplication", "gastric_surgery", "lung_transplant", "heart_transplant"],
        mechanism: "Vagal nerve injury",
        teaching: "Fundoplication is one of the most common surgical causes"
      },
      if_no_obvious_cause: "Proceed to step 2"
    },
    
    step_2_medication_review: {
      question: "Could this be medication-induced?",
      high_yield_medications: {
        opioids: "Very common cause, affects mu receptors AND causes pylorospasm",
        glp1_agonists: "58% develop delayed emptying on liraglutide; 30% persistent",
        cannabis: "Can delay gastric emptying",
        anticholinergics: "TCAs, antihistamines",
        calcium_channel_blockers: "Less common"
      },
      teaching: "GLP-1 agonists are an increasingly recognized cause as obesity treatment expands"
    },
    
    step_3_viral_history: {
      question: "Was there a preceding viral illness?",
      typical_history: "Acute onset after viral prodrome",
      prognosis: "Often improves over 1 year",
      teaching: "Postviral gastroparesis has better prognosis than other causes"
    },
    
    step_4_autoimmune_workup: {
      question: "Could this be autoimmune?",
      when_to_suspect: [
        "Young patient with no other cause",
        "Drug-resistant gastroparesis",
        "Other autoimmune conditions"
      ],
      tests: ["ANA", "anti-Hu_antibody", "paraneoplastic_panel"],
      teaching: "Autoimmune gastroparesis may respond to immunotherapy"
    }
  },
  
  // Diagnostic sequence discovery
  workup_sequence: {
    
    correct_order: [
      {
        step: 1,
        test: "Upper endoscopy",
        purpose: "Exclude mechanical obstruction and mucosal disease",
        finding_if_gastroparesis: "May see retained food after overnight fast"
      },
      {
        step: 2,
        test: "CT or MR enterography",
        purpose: "Exclude small bowel obstruction",
        when_essential: "If colicky pain present"
      },
      {
        step: 3,
        test: "Gastric emptying scintigraphy (4-hour)",
        purpose: "Confirm delayed emptying",
        preparation: {
          hold_medications: "Opioids, prokinetics, GLP-1 agonists ≥48h before",
          glucose_control: "Blood glucose <180 mg/dL",
          meal: "Low-fat egg meal (standard) or 30% fat real egg meal"
        },
        interpretation: {
          standard_meal: ">10% retained at 4h OR >60% at 2h = delayed",
          high_fat_meal: ">25% at 4h OR >75% at 2h = delayed",
          severity: {
            mild: "10-15% at 4h",
            moderate: "15-35% at 4h", 
            severe: ">35% at 4h"
          }
        }
      }
    ],
    
    common_errors: {
      ordering_ges_before_egd: {
        problem: "May miss gastric cancer or ulcer causing obstruction",
        teaching: "Always exclude structural cause first"
      },
      two_hour_study_only: {
        problem: "Misses 25% of gastroparesis cases",
        teaching: "4-hour study is more sensitive - delayed emptying may only appear at 4h"
      },
      not_holding_medications: {
        problem: "Uninterpretable results",
        teaching: "Must stop meds that affect motility ≥48h before"
      },
      testing_during_hyperglycemia: {
        problem: "Falsely abnormal results",
        teaching: "Acute hyperglycemia >200 delays emptying independent of chronic dysfunction"
      }
    }
  },
  
  // Advanced testing discovery
  advanced_testing: {
    gastroduodenal_manometry: {
      when_to_order: "Unclear etiology despite standard workup",
      what_it_shows: {
        myopathic_pattern: "Low amplitude contractions (<40 mmHg in antrum)",
        neuropathic_pattern: "Normal amplitude but disorganized, fasting patterns persist after meals"
      },
      clinical_utility: "Distinguishes scleroderma (myopathy) from diabetic neuropathy"
    },
    
    autonomic_testing: {
      when_to_order: "Neuropathic pattern on manometry without known cause",
      tests: ["heart_rate_variability", "blood_pressure_response_to_standing", "sudomotor_function"],
      teaching: "Helps identify systemic autonomic dysfunction vs isolated GI problem"
    }
  },
  
  // Clinical reasoning prompts
  reasoning_prompts: [
    {
      trigger: "student_diagnoses_gastroparesis_clinically",
      prompt: "You've made a clinical diagnosis of gastroparesis. What test confirms it?",
      teaching: "Gastroparesis requires OBJECTIVE evidence of delayed emptying - symptoms alone are insufficient"
    },
    {
      trigger: "student_orders_ges_in_patient_on_ozempic",
      prompt: "The patient is on semaglutide. Should you proceed with gastric emptying study?",
      teaching: "Hold GLP-1 agonists ≥48h before study - they cause delayed emptying that may be reversible"
    },
    {
      trigger: "pain_predominant_symptoms",
      prompt: "Abdominal pain is this patient's worst symptom. Should you still diagnose gastroparesis?",
      teaching: "Pain is rarely the predominant symptom in gastroparesis (only 18%). If pain predominates, look for other causes."
    }
  ]
};

// ============================================
// EXPORT COMBINED MODULE
// ============================================

const GI_NAUSEA_TEMPLATES = {
  nausea_vomiting: NAUSEA_VOMITING_DISCOVERY,
  gastroparesis: GASTROPARESIS_DISCOVERY,
  
  // Quick reference for case generation
  high_yield_teaching_points: [
    "Vomiting WITHOUT nausea = think central/neurogenic cause",
    "Feculent vomiting = distal obstruction or gastrocolic fistula",
    "Food eaten hours ago in vomitus = gastric outlet obstruction or gastroparesis",
    "Always EGD before gastric emptying study",
    "4-hour study catches 25% more gastroparesis than 2-hour",
    "GLP-1 agonists cause delayed emptying in 58% of patients",
    "Hot shower relief = cannabinoid hyperemesis syndrome",
    "Diabetes >5 years + autonomic symptoms = think diabetic gastroparesis",
    "Pain-predominant symptoms should prompt search for alternative diagnosis",
    "Hold medications 48h before gastric emptying study"
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GI_NAUSEA_TEMPLATES;
}
