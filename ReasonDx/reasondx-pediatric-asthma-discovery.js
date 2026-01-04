/**
 * ReasonDx Socratic Discovery Templates
 * PEDIATRIC ASTHMA - Severity Assessment, Control Monitoring & Exacerbation Management
 * 
 * Based on UpToDate articles:
 * - "Acute asthma exacerbations in children: Overview of home/outpatient management and severity assessment"
 * - "Asthma in children younger than 12 years: Overview of initiating therapy and monitoring control"
 * - "An overview of asthma management in children and adults"
 * 
 * Framework: Active learning through discovery, clinical decision-making, stepwise approach
 */

const PEDIATRIC_ASTHMA_DISCOVERY_TEMPLATES = {
  
  // ==========================================================================
  // MODULE 1: SEVERITY CLASSIFICATION IN PATIENTS NOT ON THERAPY
  // ==========================================================================
  
  severityClassification: {
    id: 'asthma_severity',
    title: 'Asthma Severity Classification (Patients NOT on Daily Therapy)',
    clinicalContext: 'Determining initial treatment step based on baseline severity',
    
    definition_of_severity: {
      discovery_prompt: {
        scenario: "A 7-year-old newly diagnosed with asthma has symptoms 3 days/week, uses SABA 3 days/week, has minor activity limitation, and wakes at night 4 times/month.",
        question: "What is the asthma severity classification?",
        answer: "MODERATE - determined by the MOST SEVERE category detected (nighttime awakenings 4x/month = moderate)"
      },
      
      principle: "Severity is determined by the MOST SEVERE category detected across all domains",
      
      key_point: "Asthma severity does NOT predict exacerbation severity - even children with MILD asthma can have SEVERE exacerbations"
    },
    
    severity_domains: {
      impairment: {
        components: [
          "Frequency of symptoms (past 2-4 weeks)",
          "Nighttime awakenings (past 2-4 weeks)",
          "Use of SABA for symptom control (not for exercise prevention)",
          "Interference with normal activity",
          "Spirometry results (if able to perform)"
        ]
      },
      
      risk: {
        components: [
          "Number of exacerbations requiring oral glucocorticoids in past year",
          "Severity of each exacerbation",
          "Interval since last exacerbation"
        ]
      }
    },
    
    severity_categories_children_4_to_11: {
      intermittent: {
        symptoms: "≤2 days/week",
        nighttime_awakenings: "≤2x/month",
        saba_use: "≤2 days/week",
        activity_interference: "None",
        fev1: "Normal between exacerbations; >80% predicted",
        exacerbations: "0-1/year"
      },
      mild_persistent: {
        symptoms: ">2 days/week but not daily",
        nighttime_awakenings: "3-4x/month",
        saba_use: ">2 days/week but not daily",
        activity_interference: "Minor limitation",
        fev1: ">80% predicted",
        exacerbations: "≥2/year"
      },
      moderate_persistent: {
        symptoms: "Daily",
        nighttime_awakenings: ">1x/week but not nightly",
        saba_use: "Daily",
        activity_interference: "Some limitation",
        fev1: "60-80% predicted",
        exacerbations: "≥2/year"
      },
      severe_persistent: {
        symptoms: "Throughout the day",
        nighttime_awakenings: "Often 7x/week",
        saba_use: "Several times per day",
        activity_interference: "Extremely limited",
        fev1: "<60% predicted",
        exacerbations: "≥2/year"
      }
    },
    
    when_to_assess_severity: {
      timing: "Immediately after diagnosis or when first encountered",
      condition: "BEFORE patient is on long-term controller medication",
      during_exacerbation: "Recall symptoms and SABA use in period BEFORE current exacerbation"
    }
  },
  
  // ==========================================================================
  // MODULE 2: CONTROL ASSESSMENT (PATIENTS ON THERAPY)
  // ==========================================================================
  
  controlAssessment: {
    id: 'asthma_control',
    title: 'Asthma Control Assessment (Patients ON Daily Therapy)',
    clinicalContext: 'Monitoring response to treatment and adjusting therapy',
    
    definition_of_control: {
      discovery_prompt: {
        scenario: "A child on daily ICS has symptoms 3 days/week and uses SABA 3 days/week but has normal spirometry and no exacerbations. Is asthma well-controlled?",
        answer: "NO - this is NOT WELL-CONTROLLED based on symptom frequency and SABA use"
      },
      
      principle: "Control is the extent to which therapy reduces or eliminates asthma manifestations",
      components: ["Impairment", "Risk", "Treatment-related adverse effects"]
    },
    
    control_categories_children_4_to_11: {
      well_controlled: {
        symptoms: "≤2 days/week",
        nighttime_awakenings: "≤1x/month",
        saba_use: "≤2 days/week",
        activity_interference: "None",
        fev1: ">80% predicted or personal best",
        exacerbations: "0-1/year"
      },
      not_well_controlled: {
        symptoms: ">2 days/week",
        nighttime_awakenings: "≥2x/month",
        saba_use: ">2 days/week",
        activity_interference: "Some limitation",
        fev1: "60-80% predicted or personal best",
        exacerbations: "≥2/year"
      },
      very_poorly_controlled: {
        symptoms: "Throughout the day",
        nighttime_awakenings: "≥2x/week",
        saba_use: "Several times per day",
        activity_interference: "Extremely limited",
        fev1: "<60% predicted or personal best",
        exacerbations: "≥2/year"
      }
    },
    
    control_assessment_tools: {
      childhood_act: {
        name: "Childhood Asthma Control Test (cACT)",
        validated_age: "4-11 years",
        components: "Standardized questionnaire"
      },
      track: {
        name: "Test for Respiratory and Asthma Control in Kids",
        validated_age: "Preschool-aged children",
        unique_feature: "First tool to assess BOTH impairment AND risk (oral glucocorticoid use in past 12 months)"
      },
      pacci: {
        name: "Pediatric Asthma Control and Communication Instrument",
        feature: "English and Spanish versions"
      }
    },
    
    severity_in_patients_on_therapy: {
      concept: "Asthma severity = degree of difficulty achieving control while on daily controller treatment",
      
      severity_definitions: {
        mild: "Well-controlled with low-dose ICS or as-needed reliever",
        moderate: "Well-controlled with medium-dose ICS or low-medium ICS with additional controllers",
        severe: "Requires high-dose ICS with additional controllers to maintain control OR uncontrolled despite these therapies"
      },
      
      key_point: "True severity can only be assessed retrospectively after achieving control and stepping down to find minimum effective therapy"
    }
  },
  
  // ==========================================================================
  // MODULE 3: ACUTE EXACERBATION ASSESSMENT
  // ==========================================================================
  
  exacerbationAssessment: {
    id: 'asthma_exacerbation_assessment',
    title: 'Assessment of Acute Asthma Exacerbation',
    clinicalContext: 'Determining severity of acute attack and need for escalation',
    
    exacerbation_severity: {
      discovery_prompt: {
        scenario: "A 9-year-old with known asthma presents with marked breathlessness, unable to speak more than short phrases, using accessory muscles, and appearing agitated.",
        question: "What is the exacerbation severity?",
        answer: "SEVERE - requires immediate treatment and medical attention"
      },
      
      assessment_components: {
        history: [
          "Suspected cause (viral infection, allergen exposure, etc.)",
          "Time of onset",
          "Current medications",
          "Recent use of beta agonists (dose and frequency) and/or systemic glucocorticoids",
          "Risk factors for severe disease (ED visits, hospitalizations, ICU admissions, oral steroid courses, history of intubation, rapid progression, food allergy)"
        ],
        
        examination: [
          "Vital signs and pulse oximetry",
          "Level of consciousness, anxiety, agitation",
          "Assessment of breathlessness, wheezing, air entry",
          "Accessory muscle use and retractions"
        ]
      }
    },
    
    severity_categories: {
      mild: {
        breathlessness: "Walking, can lie down",
        talks_in: "Sentences",
        alertness: "May be agitated",
        respiratory_rate: "Increased",
        accessory_muscles: "Usually not",
        wheeze: "Moderate, often end-expiratory",
        pulse: "<100",
        pef: ">70% predicted or personal best",
        spo2: ">95%"
      },
      moderate: {
        breathlessness: "With talking, prefers sitting",
        talks_in: "Phrases",
        alertness: "Usually agitated",
        respiratory_rate: "Increased",
        accessory_muscles: "Usually",
        wheeze: "Loud, throughout exhalation",
        pulse: "100-120",
        pef: "40-69% predicted or personal best",
        spo2: "90-95%"
      },
      severe: {
        breathlessness: "At rest, sits upright",
        talks_in: "Words",
        alertness: "Usually agitated",
        respiratory_rate: "Often >30/min",
        accessory_muscles: "Usually",
        wheeze: "Loud, throughout inspiration and expiration",
        pulse: ">120",
        pef: "<40% predicted or personal best",
        spo2: "<90%"
      },
      life_threatening: {
        breathlessness: "Unable to speak",
        alertness: "Drowsy or confused",
        accessory_muscles: "Paradoxical thoracoabdominal movement",
        wheeze: "Absent ('silent chest')",
        pulse: "Bradycardia",
        pef: "<25% predicted or personal best",
        spo2: "<90%"
      }
    },
    
    clinical_severity_scores: {
      pram: {
        name: "Pediatric Respiratory Assessment Measure",
        variables: ["Wheezing", "Air entry", "Contraction of scalenes", "Suprasternal retraction", "Oxygen saturation"]
      },
      pis: {
        name: "Pulmonary Index Score",
        variables: ["Respiratory rate", "Degree of wheezing", "I:E ratio", "Accessory muscle use", "Oxygen saturation"],
        interpretation: {
          moderate: "Score 7-11",
          severe: "Score ≥12"
        }
      },
      pass: {
        name: "Pediatric Asthma Severity Score",
        variables: ["Wheezing", "Prolonged expiration", "Work of breathing"]
      }
    },
    
    peak_flow_in_acute_setting: {
      utility: "Can assess airflow obstruction objectively",
      limitations: [
        "Requires maximal effort (difficult to assess)",
        "Poor technique leads to erroneous data",
        "Children <6 may not cooperate",
        "Severely ill may not be able to perform",
        "Most helpful when personal best is known"
      ],
      conclusion: "Rarely used in acute setting in children"
    },
    
    risk_factors_for_fatal_asthma: [
      "Previous ICU admission or intubation for asthma",
      "≥2 hospitalizations for asthma in past year",
      "≥3 ED visits for asthma in past year",
      "Using >2 SABA canisters per month",
      "Low socioeconomic status or inner-city residence",
      "Illicit drug use",
      "Major psychosocial problems or psychiatric disease",
      "Sensitivity to Alternaria",
      "Food allergy in patient with asthma",
      "Cardiovascular disease or other comorbidity"
    ]
  },
  
  // ==========================================================================
  // MODULE 4: HOME MANAGEMENT OF EXACERBATIONS
  // ==========================================================================
  
  homeManagement: {
    id: 'asthma_home_management',
    title: 'Home Management of Acute Asthma Exacerbations',
    clinicalContext: 'Empowering families with asthma action plans',
    
    asthma_action_plan: {
      purpose: "Provide clear instructions on how to detect and respond to changes in symptoms",
      type: "Symptom-based (preferred) - peak flow optional adjunct",
      
      key_principle: "Even children with MILD asthma can have SEVERE exacerbations"
    },
    
    detecting_exacerbation: {
      signs: [
        "Persistent cough",
        "Increased respiratory rate",
        "Retractions",
        "Wheezing",
        "Inability to speak in full sentences"
      ],
      context: "Especially during URI or exposure to known triggers"
    },
    
    need_for_urgent_attention: {
      high_risk_by_history: "Risk factors for fatal asthma (see list above)",
      acute_signs: [
        "Marked breathlessness",
        "Inability to speak more than short phrases",
        "Use of accessory muscles",
        "Drowsiness"
      ],
      action: "Immediate ED evaluation required"
    },
    
    initial_treatment: {
      all_patients: {
        medication: "Quick-relief medication - SABA (albuterol/levalbuterol) via MDI-S or nebulizer",
        or: "ICS-formoterol if on SMART/MART therapy",
        
        saba_dosing: {
          mdi_dose: "2-4 puffs",
          nebulizer_under_4: "1.25-2.5 mg",
          nebulizer_4_to_11: "2.5-5 mg"
        },
        
        frequency: "Depends on symptom severity; higher dose for obvious respiratory distress",
        technique: "Confirm medication not expired; MDI not empty; prime if needed; each puff separately"
      },
      
      severe_symptoms_or_high_risk: {
        additional: "Initiate oral glucocorticoids as soon as possible",
        action: "Call for ambulance to ED while initiating quick-relief medication"
      }
    },
    
    reassessment_and_triage: {
      timing: "10-20 minutes after initial treatment",
      repeat_dosing: "Can repeat beta agonist twice, 20 minutes apart",
      
      responses: {
        good_response: {
          definition: "Symptoms resolve after 1-2 treatments and do not return within 4 hours",
          action: [
            "Continue SABA every 4-6 hours as needed",
            "Remove from offending stimulus if known",
            "Contact clinician for further instructions"
          ],
          oral_steroids: "NOT routinely given for good responders"
        },
        
        incomplete_response: {
          definition: "Mild symptoms persist after 2 treatments at higher dose",
          action: [
            "Give third dose of beta agonist",
            "Contact clinician urgently",
            "Initiate oral glucocorticoids if available at home"
          ],
          key_point: "Timely oral glucocorticoids are probably the single most effective strategy for reducing hospitalizations and relapses"
        },
        
        poor_response: {
          definition: "Continued moderate-severe or worsening symptoms OR recurrence <2 hours after last treatment",
          action: [
            "Give third dose of beta agonist",
            "Initiate oral glucocorticoids",
            "Seek IMMEDIATE medical attention in ED",
            "Consider ambulance transport"
          ]
        }
      }
    },
    
    considerations_for_disposition: {
      factors: [
        "Severity of exacerbation",
        "Whether oral glucocorticoids have been given",
        "Distance to care",
        "Prior asthma history (hospitalizations, ICU)",
        "Caregiver reliability and proficiency"
      ]
    }
  },
  
  // ==========================================================================
  // MODULE 5: OUTPATIENT/OFFICE MANAGEMENT
  // ==========================================================================
  
  outpatientManagement: {
    id: 'asthma_outpatient_management',
    title: 'Office/Urgent Care Management of Asthma Exacerbations',
    clinicalContext: 'Managing mild-to-moderate exacerbations outside the ED',
    
    treatment_approach: {
      principle: "Similar to ED approach with some limitations based on available resources",
      
      initial_treatment: {
        beta_agonists: {
          dose: "Higher than home (albuterol 4-8 puffs MDI or 2.5-5 mg nebulizer)",
          regimen: "Up to 3 doses over 1 hour, reassess after each"
        },
        
        ipratropium: {
          indication: "Moderate-to-severe symptoms",
          note: "In addition to beta agonists, if available"
        },
        
        oral_glucocorticoids: {
          mild_symptoms: "Start if no response after first 2 beta agonist doses",
          moderate_severe: "Start shortly after initiating beta agonist therapy"
        }
      },
      
      what_is_not_typically_done_in_office: [
        "Continuous beta agonist nebulization",
        "Magnesium sulfate"
      ]
    },
    
    disposition: {
      good_response: {
        criteria: "Mild-moderate symptoms that respond well to therapy",
        action: "May be discharged home with appropriate follow-up"
      },
      
      refer_to_ed: {
        criteria: [
          "High risk for fatal asthma by history",
          "Severe exacerbation",
          "Inadequate response to 3 beta agonist treatments in first hour",
          "Recurrence of symptoms <4 hours after first 1-2 treatments",
          "Supplemental oxygen requirement after first 1-2 beta agonist doses"
        ],
        note: "Consider how much home treatment was given - patient who received no home treatment may respond better to office intervention"
      }
    },
    
    admission_criteria: {
      clinical_factors: [
        "Moderate-severe at arrival with little improvement after initial therapy",
        "Significant wheezing and retracting despite treatment",
        "Poor aeration",
        "Altered mental status (drowsiness, agitation)",
        "Supplemental oxygen requirement"
      ],
      other_factors: [
        "Severity of previous exacerbations",
        "Adherence to medication regimen",
        "Access to care",
        "Social support"
      ]
    }
  },
  
  // ==========================================================================
  // MODULE 6: MONITORING AND THERAPY ADJUSTMENT
  // ==========================================================================
  
  monitoringAndAdjustment: {
    id: 'asthma_monitoring',
    title: 'Monitoring Control and Adjusting Therapy',
    clinicalContext: 'The stepwise approach to asthma management',
    
    follow_up_intervals: {
      after_initiation: {
        moderate_severe: "2-4 weeks",
        mild: "4-6 weeks"
      },
      well_controlled: "Every 3 months (may vary with severity)",
      not_well_controlled: "2-6 weeks",
      very_poorly_controlled: "2 weeks"
    },
    
    step_up_therapy: {
      discovery_prompt: {
        scenario: "A child on low-dose ICS has symptoms 4 days/week and uses SABA 4 days/week. What should you do?",
        answer: "This is NOT WELL-CONTROLLED - consider step-up therapy after confirming adherence and technique"
      },
      
      before_stepping_up: [
        "Assess adherence with current regimen",
        "Check inhaler technique",
        "Identify modifiable factors (triggers, comorbidities)"
      ],
      
      considerations: [
        "Neuropsychiatric/behavioral changes with montelukast",
        "Skeletal growth and adrenal suppression with high-dose ICS",
        "LABA always used with ICS, never alone"
      ]
    },
    
    step_down_therapy: {
      when: "When asthma control has been achieved for at least 3 months",
      
      factors_affecting_decision: [
        "Severity of asthma",
        "How difficult it was to attain control",
        "Potential triggers"
      ],
      
      timing_considerations: [
        "Longer control period preferred for more severe asthma",
        "More commonly attempted in summer",
        "May be delayed at school year start or winter viral season",
        "Proceed more slowly with ongoing trigger exposures"
      ],
      
      follow_up: "Reassess in 1-2 months after stepping down"
    },
    
    modifiable_factors_for_poor_control: {
      medication_related: [
        "Underuse of controller medications",
        "Absence of consistent medication routine",
        "Poor inhaler technique",
        "Poor understanding of asthma control"
      ],
      
      environmental: [
        "Animal dander exposure (in sensitized patients)",
        "House dust mite exposure (in sensitized patients)",
        "Secondhand smoke or vaping exposure"
      ],
      
      caregiver_related: [
        "Low expectations that controllers will improve symptoms",
        "Worry about competing household priorities"
      ]
    },
    
    pulmonary_function_monitoring: {
      spirometry: {
        indication: "Assess control in children ≥5 years (in addition to symptoms and medication use)",
        frequency: "Yearly when stable; more frequently if poor control or medication adjustments"
      },
      
      feno: {
        role: "Adjunct test for diagnosis or monitoring if uncertainty after routine assessment",
        typical_age: "≥5 years"
      }
    }
  },
  
  // ==========================================================================
  // MODULE 7: STEPWISE TREATMENT APPROACH
  // ==========================================================================
  
  stepwiseTreatment: {
    id: 'asthma_stepwise',
    title: 'Stepwise Treatment Approach',
    clinicalContext: 'NAEPP/GINA guideline-based therapy selection',
    
    reliever_therapy: {
      all_patients: "All patients need access to rapid-onset bronchodilator",
      
      options: {
        traditional: "SABA (albuterol, levalbuterol)",
        air_therapy: {
          name: "Anti-Inflammatory Reliever (AIR) therapy",
          description: "ICS combined with fast-acting beta agonist",
          rationale: "Decreased exacerbation rates compared to SABA alone",
          examples: [
            "Budesonide-formoterol (ICS-LABA)",
            "Albuterol-budesonide (SABA-ICS)"
          ]
        }
      }
    },
    
    controller_therapy_children_4_to_11: {
      step_1: {
        preferred: "As-needed low-dose ICS-formoterol (SMART/MART)",
        alternative: "As-needed SABA with ICS taken whenever SABA is taken"
      },
      step_2: {
        preferred: "Daily low-dose ICS",
        alternatives: ["LTRA (montelukast)", "As-needed low-dose ICS-formoterol"]
      },
      step_3: {
        preferred: "Low-dose ICS-LABA (as maintenance and reliever if using ICS-formoterol)",
        alternatives: ["Medium-dose ICS", "Low-dose ICS + LTRA"]
      },
      step_4: {
        preferred: "Medium-dose ICS-LABA",
        alternatives: ["High-dose ICS", "Add tiotropium", "Add LTRA"],
        note: "Refer for specialist assessment"
      },
      step_5: {
        preferred: "High-dose ICS-LABA",
        add_ons: ["Tiotropium", "Anti-IgE", "Anti-IL5/IL5R", "Anti-IL4R"],
        note: "Refer for phenotypic assessment and consideration of biologics"
      }
    },
    
    controller_therapy_children_under_4: {
      step_1: "As-needed SABA (consider ICS whenever SABA used)",
      step_2: {
        preferred: "Daily low-dose ICS",
        alternative: "LTRA"
      },
      step_3: {
        preferred: "Double ICS dose (medium dose)",
        alternative: "Low-dose ICS + LTRA"
      },
      step_4: {
        action: "Continue medium-dose ICS + LTRA; refer to specialist"
      }
    },
    
    key_medications: {
      ics: {
        examples: ["Fluticasone", "Budesonide", "Beclomethasone", "Mometasone"],
        mechanism: "Anti-inflammatory; decreases airway hyperresponsiveness",
        note: "Cornerstone of controller therapy"
      },
      laba: {
        examples: ["Formoterol", "Salmeterol"],
        key_rule: "NEVER use alone - always with ICS",
        note: "Formoterol has rapid onset, can be used as reliever"
      },
      ltra: {
        example: "Montelukast",
        warning: "FDA boxed warning for neuropsychiatric events",
        note: "Generally not preferred first-line"
      },
      lama: {
        example: "Tiotropium",
        indication: "Add-on for poorly controlled asthma on ICS-LABA"
      },
      biologics: {
        examples: ["Omalizumab (anti-IgE)", "Mepolizumab (anti-IL5)", "Benralizumab (anti-IL5R)", "Dupilumab (anti-IL4Rα)", "Tezepelumab (anti-TSLP)"],
        indication: "Severe asthma uncontrolled on high-dose ICS-LABA"
      }
    }
  },
  
  // ==========================================================================
  // MODULE 8: CASE HOOKS
  // ==========================================================================
  
  caseHooks: {
    id: 'asthma_cases',
    
    the_mild_asthma_crisis: {
      title: "The Mild Asthma Crisis",
      scenario: "A 7-year-old with 'mild asthma' (symptoms 2x/week) presents with severe respiratory distress requiring ICU admission.",
      question: "How can 'mild' asthma cause a severe exacerbation?",
      answer: "Asthma SEVERITY does not predict EXACERBATION severity. Even children with mild asthma can have severe exacerbations.",
      anchor: "Never reassure families that 'mild asthma' means 'mild attacks' - all patients need an action plan for severe exacerbations."
    },
    
    the_silent_chest: {
      title: "The Silent Chest",
      scenario: "A 10-year-old with asthma exacerbation initially had loud wheezing. Now the wheezing is absent but the child is drowsy and breathing slowly.",
      question: "Is this improvement?",
      answer: "NO - this is LIFE-THREATENING. 'Silent chest' = severe obstruction with no air movement. Combined with drowsiness and bradypnea, this indicates impending respiratory failure.",
      anchor: "Silent chest + altered mental status = impending respiratory arrest. Prepare for intubation."
    },
    
    the_inadequate_response: {
      title: "The Inadequate Response",
      scenario: "A child gets 2 albuterol nebulizers at home with only partial improvement. Mom wants to try a third one before coming in.",
      question: "What should you advise?",
      answer: "Incomplete response after 2 treatments at proper dose = start oral glucocorticoids AND seek medical attention. A third neb can be given but the child needs to be seen.",
      anchor: "Incomplete response after 2 beta agonist treatments = oral glucocorticoids + medical evaluation."
    },
    
    the_frequent_exacerbations: {
      title: "The Frequent Exacerbations",
      scenario: "A child on daily low-dose ICS has had 3 exacerbations requiring oral steroids in the past year, though day-to-day symptoms are minimal.",
      question: "Is this child's asthma well-controlled?",
      answer: "NO - ≥2 exacerbations requiring oral glucocorticoids/year indicates NOT WELL-CONTROLLED regardless of daily symptoms. Step-up therapy is needed.",
      anchor: "Control = symptom control AND risk reduction. Frequent exacerbations = step up therapy."
    },
    
    the_poor_technique: {
      title: "The Poor Technique",
      scenario: "A child with 'uncontrolled' asthma despite medium-dose ICS-LABA. On exam, the MDI is empty and the child exhales immediately after actuation.",
      question: "What's the first step?",
      answer: "Address adherence and technique BEFORE stepping up therapy. This child's asthma may not be truly 'uncontrolled' - it's 'untreated.'",
      anchor: "Before stepping up: Check adherence, check technique, check triggers."
    },
    
    the_early_morning_awakening: {
      title: "The Early Morning Awakening",
      scenario: "A child on low-dose ICS has daytime symptoms only once weekly, rarely uses SABA, but wakes with cough 3 times per month.",
      question: "What is the control level?",
      answer: "WELL-CONTROLLED overall (symptoms ≤2 days/week, SABA ≤2 days/week, nighttime awakenings ≤1x/month falls on the borderline). But if awakenings were ≥2x/month, this would be NOT WELL-CONTROLLED.",
      anchor: "Nighttime awakenings are a sensitive marker of control - ≥2x/month = not well-controlled."
    }
  },
  
  // ==========================================================================
  // MODULE 9: FLASHCARDS
  // ==========================================================================
  
  flashcards: [
    {
      front: "How is asthma SEVERITY determined in a newly diagnosed patient?",
      back: "By the MOST SEVERE category detected across domains:\n- Symptom frequency\n- Nighttime awakenings\n- SABA use\n- Activity interference\n- Spirometry\n- Exacerbation history"
    },
    {
      front: "Does mild asthma severity mean mild exacerbations?",
      back: "NO - asthma severity does NOT predict exacerbation severity. Children with MILD asthma can have SEVERE exacerbations."
    },
    {
      front: "What defines 'well-controlled' asthma in children 4-11 years?",
      back: "- Symptoms ≤2 days/week\n- Nighttime awakenings ≤1x/month\n- SABA use ≤2 days/week\n- No activity interference\n- FEV1 >80% predicted\n- 0-1 exacerbations/year"
    },
    {
      front: "What must you check BEFORE stepping up asthma therapy?",
      back: "1) Adherence to current regimen\n2) Inhaler technique\n3) Modifiable triggers and comorbidities"
    },
    {
      front: "When can you consider step-down therapy?",
      back: "When asthma control has been achieved for at least 3 MONTHS (longer for more severe asthma)"
    },
    {
      front: "What is the most important single intervention for reducing hospitalizations and relapses in acute asthma?",
      back: "Timely administration of ORAL GLUCOCORTICOIDS"
    },
    {
      front: "What defines a 'good response' to home treatment of asthma exacerbation?",
      back: "Symptoms resolve after 1-2 SABA treatments AND do not return within 4 hours"
    },
    {
      front: "What should you do if there is an INCOMPLETE response after 2 SABA treatments at home?",
      back: "1) Give 3rd dose of beta agonist\n2) Initiate oral glucocorticoids\n3) Contact clinician urgently\n4) Determine if needs office/ED evaluation"
    },
    {
      front: "What is Anti-Inflammatory Reliever (AIR) therapy?",
      back: "ICS combined with fast-acting beta agonist (eg, budesonide-formoterol or albuterol-budesonide) used as reliever - decreases exacerbation rates compared to SABA alone"
    },
    {
      front: "What are signs of a SEVERE asthma exacerbation?",
      back: "- Can only speak in WORDS\n- Sits upright, breathless at rest\n- RR often >30\n- Accessory muscle use\n- Loud wheezing throughout respiration\n- Pulse >120\n- PEF <40% predicted\n- SpO2 <90%"
    },
    {
      front: "What are signs of LIFE-THREATENING asthma?",
      back: "- Unable to speak\n- Drowsy or confused\n- Paradoxical thoracoabdominal movement\n- SILENT CHEST (absent wheeze)\n- Bradycardia\n- PEF <25% predicted"
    },
    {
      front: "What is the key rule about LABAs?",
      back: "NEVER use LABA alone - always with ICS. Formoterol has rapid onset and can be used as reliever (in ICS-formoterol combination)."
    },
    {
      front: "What are the 5 clinical severity score variables in the PRAM?",
      back: "1) Wheezing\n2) Air entry\n3) Contraction of scalenes\n4) Suprasternal retraction\n5) Oxygen saturation"
    },
    {
      front: "What is the role of peak flow in acute asthma assessment in children?",
      back: "Limited utility - requires maximal effort, technique-dependent, children <6 may not cooperate, severely ill may not perform. Rarely used in acute setting."
    },
    {
      front: "How many exacerbations requiring oral glucocorticoids per year indicates NOT well-controlled asthma?",
      back: "≥2 per year (regardless of day-to-day symptom control)"
    }
  ],
  
  // ==========================================================================
  // MODULE 10: HIGH-YIELD TEACHING POINTS
  // ==========================================================================
  
  highYieldPoints: {
    severity_vs_control: [
      "SEVERITY = intrinsic intensity of disease (assessed before starting therapy)",
      "CONTROL = extent to which therapy reduces manifestations (assessed on therapy)",
      "Severity does NOT predict exacerbation severity - mild asthma can cause severe attacks"
    ],
    
    control_assessment: [
      "Well-controlled: symptoms ≤2 days/week, nighttime awakenings ≤1x/month, SABA ≤2 days/week, no activity limitation, 0-1 exacerbations/year",
      "Nighttime awakenings are a sensitive marker - ≥2x/month = not well-controlled",
      "≥2 exacerbations requiring oral steroids/year = not well-controlled (regardless of symptoms)"
    ],
    
    exacerbation_management: [
      "ALL patients need quick-relief medication access",
      "Oral glucocorticoids = single most effective intervention for reducing hospitalizations",
      "Incomplete response after 2 SABA treatments = start oral glucocorticoids + seek medical attention",
      "Silent chest = life-threatening obstruction, not improvement"
    ],
    
    red_flags_for_severe_exacerbation: [
      "Speaks in words only",
      "Sits upright, breathless at rest",
      "Use of accessory muscles",
      "RR >30, pulse >120",
      "SpO2 <90%",
      "Drowsy or confused (life-threatening)",
      "Silent chest (life-threatening)"
    ],
    
    stepwise_approach: [
      "Step 1: As-needed ICS-formoterol or SABA with ICS",
      "Step 2: Daily low-dose ICS (or LTRA)",
      "Step 3: Low-dose ICS-LABA",
      "Step 4: Medium-dose ICS-LABA (refer to specialist)",
      "Step 5: High-dose ICS-LABA + biologics (phenotypic assessment)"
    ],
    
    before_stepping_up: [
      "Check ADHERENCE to current regimen",
      "Check INHALER TECHNIQUE",
      "Address modifiable TRIGGERS",
      "Treat COMORBIDITIES"
    ],
    
    step_down: [
      "Consider after ≥3 months of good control",
      "Longer period for more severe asthma",
      "Avoid during high-risk times (viral season, school start)",
      "Reassess 1-2 months after stepping down"
    ]
  }
};

// Export for use in ReasonDx platform
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PEDIATRIC_ASTHMA_DISCOVERY_TEMPLATES;
}
