/**
 * ReasonDx Socratic Discovery Templates
 * BRONCHIOLITIS IN INFANTS AND CHILDREN - Clinical Features & Diagnosis
 * 
 * Based on UpToDate article:
 * - "Bronchiolitis in infants and children: Clinical features and diagnosis"
 * 
 * Framework: Active learning through discovery, pattern recognition, clinical reasoning
 */

const BRONCHIOLITIS_DISCOVERY_TEMPLATES = {
  
  // ==========================================================================
  // MODULE 1: DEFINITION AND EPIDEMIOLOGY
  // ==========================================================================
  
  definitionAndEpidemiology: {
    id: 'bronchiolitis_definition',
    title: 'Bronchiolitis: Definition, Epidemiology & Risk Factors',
    clinicalContext: 'Understanding the scope and at-risk populations',
    
    definition: {
      discovery_prompt: {
        scenario: "A resident says 'This 3-year-old has bronchiolitis.'",
        question: "Is this diagnosis appropriate?",
        answer: "Technically NO - bronchiolitis is defined as occurring in children <2 years of age",
        teaching_point: "Bronchiolitis is a clinical syndrome of respiratory distress in children <2 years characterized by URI symptoms followed by lower respiratory tract signs (wheezing and/or crackles)."
      },
      
      key_elements: {
        age_range: "<2 years",
        clinical_syndrome: "Respiratory distress",
        pattern: "Upper respiratory prodrome (rhinorrhea) → Lower respiratory signs (wheezing, crackles)",
        pathophysiology: "Viral infection of terminal bronchiolar epithelial cells causing inflammation, edema, mucus, sloughed cells → small airway obstruction"
      }
    },
    
    epidemiology: {
      incidence: {
        hospitalizations: ">100,000 infants/young children annually in US",
        peak_age: "2-6 months (highest hospitalization rates)",
        leading_cause: "Leading cause of hospitalization in infants and young children"
      },
      
      seasonality: {
        temperate_climates: "Late fall and winter",
        tropical_climates: "Rainy season"
      }
    },
    
    risk_factors_severe_disease: {
      discovery_prompt: {
        scenario: "A 3-month-old and a 9-month-old both present with bronchiolitis. Which is at higher risk for severe disease?",
        answer: "The 3-month-old - age <6 months is the STRONGEST risk factor for severe bronchiolitis"
      },
      
      major_risk_factors: [
        {
          factor: "Age <6 months",
          note: "STRONGEST risk factor"
        },
        {
          factor: "Prematurity (≤35 weeks gestation)",
          note: "Independent risk factor"
        },
        {
          factor: "Chronic lung disease",
          examples: "Bronchopulmonary dysplasia, cystic fibrosis"
        },
        {
          factor: "Hemodynamically significant congenital heart disease",
          note: "Structural heart disease affecting circulation"
        },
        {
          factor: "Severe immunocompromise",
          note: "Any etiology"
        },
        {
          factor: "Down syndrome",
          note: "Independent risk factor"
        },
        {
          factor: "Neurologic disease",
          note: "Affects airway protection, respiratory effort"
        },
        {
          factor: "Anatomic defects of airways",
          examples: "Laryngomalacia, tracheoesophageal fistula"
        }
      ],
      
      environmental_factors: [
        "Outdoor air pollution",
        "Secondhand smoke exposure",
        "HIV exposure (uninfected infant)",
        "Concurrent birth siblings (plural birth)",
        "Crowded household",
        "Residence at altitude >2500 meters"
      ]
    }
  },
  
  // ==========================================================================
  // MODULE 2: VIRAL ETIOLOGY
  // ==========================================================================
  
  viralEtiology: {
    id: 'bronchiolitis_etiology',
    title: 'Viral Causes of Bronchiolitis',
    clinicalContext: 'Understanding the microbiology and why it matters',
    
    viral_causes: {
      discovery_prompt: {
        scenario: "What virus causes MOST cases of bronchiolitis?",
        answer: "RSV (Respiratory Syncytial Virus)",
        teaching_point: "RSV is the most common cause and most often detected as SOLE pathogen. With molecular testing, a viral etiology can be identified in >95% of cases."
      },
      
      pathogens_by_frequency: [
        {
          virus: "RSV (Respiratory Syncytial Virus)",
          rank: "#1 - Most common",
          characteristics: "Most often detected as sole pathogen; ubiquitous worldwide with seasonal outbreaks"
        },
        {
          virus: "Rhinovirus",
          rank: "#2",
          characteristics: "Most common viral coinfection with RSV; often associated with spring/fall bronchiolitis"
        },
        {
          virus: "Parainfluenza virus",
          characteristics: "Type 3 associated with bronchiolitis epidemics in early spring/fall; Types 1 and 2 more commonly cause croup"
        },
        {
          virus: "Human metapneumovirus (hMPV)",
          characteristics: "Peaks March-April; sometimes occurs with other viral infections"
        },
        {
          virus: "Influenza",
          characteristics: "Clinically indistinguishable from RSV bronchiolitis; important to identify for antiviral treatment"
        },
        {
          virus: "Adenovirus",
          characteristics: "More typically causes pharyngitis/coryza; can cause sustained fever"
        },
        {
          virus: "Coronaviruses (including SARS-CoV-2)",
          characteristics: "Endemic coronaviruses cause common cold but can cause bronchiolitis; COVID-19 can present similarly"
        },
        {
          virus: "Human bocavirus",
          characteristics: "Fall/winter; can cause bronchiolitis and pertussis-like illness"
        }
      ],
      
      coinfection: {
        prevalence: "~1/3 of hospitalized young children have 2+ viruses detected",
        clinical_impact: "Most studies show minimal distinguishing features based on viral etiology"
      }
    },
    
    utility_of_viral_testing: {
      discovery_prompt: {
        scenario: "Should every child with bronchiolitis get a respiratory viral panel?",
        answer: "NO - viral testing is NOT routinely indicated in the outpatient setting"
      },
      
      indications_for_testing: [
        "Assess for influenza (children <2 years at risk for complications, may benefit from antivirals)",
        "Assess for COVID-19 (infection control, high-risk patients may benefit from antivirals)",
        "Hospitalized patients (for infection control, antibiotic stewardship, interpretation of symptoms)"
      ],
      
      advantages_in_inpatient_setting: [
        "Antiviral management for treatable viruses (influenza, COVID-19)",
        "Infection prevention practices (appropriate respiratory precautions)",
        "Antibiotic stewardship (knowing you have a virus helps with antibiotic discontinuation)",
        "Interpretation of symptoms (sustained fever expected in adenovirus but not RSV)"
      ],
      
      key_teaching: {
        adenovirus: "Sustained fever EXPECTED in adenovirus",
        rsv: "Sustained fever in RSV should prompt evaluation for SECONDARY INFECTION"
      }
    }
  },
  
  // ==========================================================================
  // MODULE 3: CLINICAL FEATURES
  // ==========================================================================
  
  clinicalFeatures: {
    id: 'bronchiolitis_clinical',
    title: 'Clinical Presentation of Bronchiolitis',
    clinicalContext: 'Recognizing the classic pattern and red flags',
    
    typical_presentation: {
      discovery_prompt: {
        scenario: "A 6-month-old presents with 3 days of runny nose, now with cough, tachypnea, and wheezing. What's the diagnosis?",
        answer: "Classic bronchiolitis - URI symptoms followed by lower respiratory tract signs"
      },
      
      clinical_pattern: {
        prodrome: "Upper respiratory symptoms (nasal congestion, cough)",
        progression: "Lower respiratory signs develop over 1-3 days",
        lower_respiratory_signs: ["Wheezing", "Crackles", "Tachypnea", "Retractions"],
        fever: "May be present",
        duration: "Self-resolves gradually over average 12 days",
        cough_duration: "May persist 2-3 weeks"
      },
      
      important_nuance: {
        traditional_view: "Severity peaks on days 3-5",
        current_evidence: "Course may be more heterogeneous than previously thought"
      }
    },
    
    factors_worsening_symptoms: {
      discovery_prompt: {
        scenario: "Why might a bronchiolitis patient's oxygen saturation suddenly drop during an exam?",
        answer: "Crying, coughing, and agitation worsen airway obstruction and cause desaturation"
      },
      
      triggers: ["Crying", "Coughing", "Agitation"],
      mechanism: "Increased respiratory effort → worsened airway obstruction → desaturation",
      sleep_effect: "Desaturation can also occur during sleep when chest wall muscles relax, further narrowing intrathoracic airways"
    },
    
    complications: {
      dehydration: {
        causes: [
          "Increased fluid needs (fever, tachypnea)",
          "Decreased oral intake (tachypnea, respiratory distress)",
          "Vomiting"
        ],
        signs: ["Increased heart rate", "Dry mucosa", "Sunken fontanelle", "Decreased urine output"],
        management: "May require parenteral or NG fluids"
      },
      
      apnea: {
        discovery_prompt: {
          scenario: "A 3-week-old (born at 34 weeks) presents with apnea. RSV test is positive. Is the apnea expected?",
          answer: "YES - apnea may be the PRESENTING sign of bronchiolitis, especially in preterm infants and those <2 months old"
        },
        
        incidence: "1-24% (varies by study); <5% in studies excluding serious underlying illness",
        risk_factors: [
          "Age <8 weeks (corrected for prematurity)",
          "Caregiver report of previous apnea during illness",
          "Respiratory rate <30 OR >70 breaths/minute at presentation",
          "Room air oxygen saturation <90% at presentation"
        ],
        
        key_teaching: {
          low_rr: "LOW respiratory rate (<30) in bronchiolitis is NOT reassuring - may indicate impending apnea",
          viral_etiology: "Risk of apnea is NOT increased with RSV compared with other viruses"
        }
      },
      
      respiratory_failure: {
        incidence: "5-10% require advanced respiratory support; 1-2% require intubation",
        high_risk_groups: ["<2 months old", "Preterm infants", "Underlying chronic medical conditions"],
        trend: "Intubation rates have decreased since early 2000s due to increased use of noninvasive support"
      },
      
      secondary_bacterial_infection: {
        discovery_prompt: {
          scenario: "A child with bronchiolitis has a normal WBC but you're worried about pneumonia. How common is secondary bacterial infection?",
          answer: "UNCOMMON - except for otitis media. Only 3.5% had bacterial pathogen isolated in one large study."
        },
        
        key_points: [
          "Secondary bacterial infection is uncommon EXCEPT for otitis media",
          "No gold standard for diagnosing bacterial pneumonia in bronchiolitis",
          "Antibiotic decisions often driven by severity, fever degree, CXR findings",
          "Risk INCREASED in PICU patients, especially those requiring intubation (22% had bacterial coinfection in one study)"
        ]
      }
    },
    
    radiographic_findings: {
      indication: "NOT routinely ordered",
      typical_findings: {
        frequently: "Normal",
        when_abnormal: [
          "Hyperinflation",
          "Peribronchial thickening with air bronchograms",
          "Patchy atelectasis"
        ]
      },
      bacterial_vs_viral: "Segmental consolidation and alveolar infiltrates more characteristic of bacterial pneumonia, but overlap exists"
    }
  },
  
  // ==========================================================================
  // MODULE 4: EVALUATION AND DIAGNOSIS
  // ==========================================================================
  
  evaluationAndDiagnosis: {
    id: 'bronchiolitis_evaluation',
    title: 'Evaluating and Diagnosing Bronchiolitis',
    clinicalContext: 'Clinical diagnosis without unnecessary testing',
    
    history: {
      symptom_assessment: [
        "What symptoms (rhinorrhea, cough, fever)",
        "When they began",
        "How they evolved (additional symptoms after onset)"
      ],
      
      severity_indicators: [
        "Hydration status (changes in fluid intake, decreased urine output)",
        "Respiratory distress (tachypnea, nasal flaring, retractions, grunting)",
        "Cyanotic episodes",
        "Signs of respiratory failure (agitation, restlessness, lethargy)",
        "Apneic episodes"
      ],
      
      past_medical_history: [
        "Prematurity",
        "Chronic pulmonary disease",
        "Anatomic airway abnormalities",
        "Hemodynamically significant CHD",
        "Immunodeficiency",
        "Neurologic disease"
      ]
    },
    
    physical_examination: {
      general: {
        components: ["Clinical appearance", "Mental status", "Hydration status", "Vital signs"],
        key_finding: "Tachypnea usually correlates with illness severity",
        pulse_ox: "May demonstrate hypoxemia"
      },
      
      head_exam: {
        areas: ["Nares (rhinorrhea/congestion)", "Eyes (conjunctivitis)", "Throat (pharyngitis)", "Ears (otitis media)"]
      },
      
      lung_exam: {
        observation: "Hyperexpanded chest with increased AP diameter; intercostal and subcostal retractions",
        auscultation: ["Expiratory wheezing", "Prolonged expiratory phase", "Coarse or fine crackles (rales)"],
        percussion: "May be hyperresonant"
      },
      
      signs_of_severe_illness: [
        "Agitation and/or lethargy",
        "Increased work of breathing (subcostal, intercostal, supraclavicular retractions; nasal flaring; expiratory grunting)",
        "Cyanosis and poor peripheral perfusion",
        "Lack of audible wheezing on auscultation (airways profoundly narrowed OR exhaustion)"
      ],
      
      key_teaching: {
        absent_wheeze: "Lack of audible wheezing may signal profound airway narrowing or exhaustion - this is a BAD sign, not reassurance"
      }
    },
    
    establishing_diagnosis: {
      discovery_prompt: {
        scenario: "What tests are needed to diagnose bronchiolitis?",
        answer: "NONE - diagnosis is made CLINICALLY"
      },
      
      clinical_criteria: {
        age: "<2 years",
        prodrome: "Viral upper respiratory prodrome",
        current_findings: "Increased respiratory effort (tachypnea, nasal flaring, chest retractions)",
        auscultation: "Wheezing AND/OR crackles"
      },
      
      tests_not_needed: {
        cxr: "NOT routinely performed; can lead to inappropriate antibiotic use",
        labs: "NOT necessary for diagnosis"
      },
      
      when_additional_testing_warranted: [
        "Possibility of bacterial coinfection",
        "Complications",
        "Other conditions in differential diagnosis",
        "Preexisting cardiopulmonary disease"
      ]
    },
    
    severity_assessment: {
      parameters: [
        "Respiratory rate",
        "Respiratory effort (retractions, accessory muscle use, grunting, nasal flaring)",
        "Peripheral oxygen saturation (interpret in context of clinical signs, patient status, altitude)",
        "Episodes of apnea lasting >15 seconds",
        "Heart rate",
        "Hydration status and peripheral perfusion",
        "Mental status (agitation and responsiveness)"
      ],
      
      key_teaching: "Repeated observations are useful because findings may vary substantially over time",
      
      severity_categories: {
        mild: {
          description: "Little to no respiratory distress, normal mental status and activity",
          note: "May have transient self-resolving oxygen desaturations"
        },
        moderate: {
          description: "Tachypneic with moderate distress (mild to moderate retractions without grunting or head bobbing)",
          features: ["No apnea", "Normal alertness", "May have hypoxemia (SpO2 <90%)"]
        },
        severe: {
          description: "Persistent tachypnea, considerable respiratory distress, hypoxemia",
          features: ["Retractions, grunting, nasal flaring, head bobbing", "Agitation", "Apnea", "Poor responsiveness"]
        }
      },
      
      scoring_tools: {
        rss: "Respiratory Severity Score",
        pern: "Pediatric Emergency Research Network tool",
        bras: "Bronchiolitis Risk of Admission Score",
        limitations: "Somewhat subjective; may not capture full clinical picture (most don't account for apnea)"
      }
    }
  },
  
  // ==========================================================================
  // MODULE 5: SPECIAL POPULATIONS
  // ==========================================================================
  
  specialPopulations: {
    id: 'bronchiolitis_special',
    title: 'Special Populations: Febrile Infants with Bronchiolitis',
    clinicalContext: 'When bronchiolitis changes the workup approach',
    
    febrile_neonates: {
      discovery_prompt: {
        scenario: "A 3-week-old has fever and RSV-positive bronchiolitis. Can you skip the sepsis workup because you have a viral diagnosis?",
        answer: "NO - febrile neonates (≤28 days) with bronchiolitis have the SAME risk for invasive bacterial illness as febrile neonates WITHOUT bronchiolitis"
      },
      
      key_point: "All febrile neonates ≤28 days require full sepsis evaluation regardless of respiratory viral diagnosis"
    },
    
    febrile_infants_29_to_90_days: {
      general_approach: "Do NOT typically require additional laboratory testing if RSV-positive and well-appearing",
      
      exceptions_requiring_workup: [
        "Ill-appearing",
        "Risk factors for invasive bacterial illness",
        "Urologic abnormality"
      ],
      
      key_teaching: "A positive viral test in infants 29-90 days CAN modify the approach to fever workup, but only if well-appearing without risk factors"
    },
    
    severe_or_prolonged_symptoms: {
      indications_for_additional_evaluation: [
        "Severe illness",
        "Symptoms worsen at any time",
        "Prolonged symptoms (failure to improve after 5 days, wheezing >1 week)"
      ],
      
      workup: {
        labs: ["Complete blood count", "Inflammatory markers", "Blood culture"],
        imaging: "Chest radiograph (AP portable for PICU; PA/lateral for less acute)",
        blood_gas: "Arterial or capillary blood gas if severe respiratory distress (evaluate for impending respiratory failure)"
      },
      
      interpretation: "Results may help distinguish viral bronchiolitis from bacterial pneumonia, but overlap exists"
    }
  },
  
  // ==========================================================================
  // MODULE 6: DIFFERENTIAL DIAGNOSIS
  // ==========================================================================
  
  differentialDiagnosis: {
    id: 'bronchiolitis_differential',
    title: 'Differential Diagnosis of Bronchiolitis',
    clinicalContext: 'What else could it be?',
    
    overlap_conditions: {
      atypical_pneumonia: {
        organisms: ["Mycoplasma pneumoniae", "Bordetella pertussis"],
        note: "Far less common than bronchiolitis in infants; Mycoplasma cases increased 2018-2024"
      }
    },
    
    conditions_to_distinguish: [
      {
        condition: "Recurrent viral-triggered wheezing / Asthma",
        distinguishing_features: "History of recurrent wheezing episodes, family/personal history of asthma, eczema, atopy",
        challenge: "Difficult to distinguish during first episode of wheezing"
      },
      {
        condition: "Bacterial pneumonia",
        distinguishing_features: "May be more ill-appearing (higher fever); clinical features cannot reliably differentiate",
        note: "Overlap in presentation and CXR findings"
      },
      {
        condition: "Pertussis (B. pertussis)",
        distinguishing_features: "May lack characteristic 'whoop' in infants; may have nonparoxysmal cough",
        when_to_consider: "Known exposure or epidemic",
        diagnosis: "Requires microbiologic testing"
      },
      {
        condition: "Airway abnormalities / Pulmonary disease",
        red_flags: ["Prolonged symptoms", "Recurrent symptoms", "Stridor", "Recurrent respiratory infections", "Poor weight gain", "Recurrent aspiration"],
        examples: ["Laryngomalacia", "Tracheomalacia"],
        note: "May have superimposed bronchiolitis; course tends to be severe"
      },
      {
        condition: "Foreign body aspiration",
        distinguishing_features: "History of choking (not always present), focal monophonic wheezing, decreased air entry, regional variation in aeration",
        note: "Maintain high index of suspicion"
      },
      {
        condition: "Aspiration pneumonia",
        associated_features: ["Coughing with feeds", "Weak suck reflex", "Cyanosis during feeding", "Recurrent/chronic stridor"],
        causes: "Gastroesophageal reflux, swallowing dysfunction"
      },
      {
        condition: "Congenital heart disease / Heart failure",
        distinguishing_features: [
          "History of feeding difficulties (tiring with feeds), poor weight gain",
          "Abnormal cardiovascular exam (pathologic murmur, abnormal S2, gallop, decreased lower extremity pulses)",
          "Hepatomegaly",
          "Cardiomegaly and/or pulmonary edema on CXR",
          "Abnormal newborn pulse oximetry screening"
        ],
        note: "May have superimposed bronchiolitis; course tends to be severe"
      },
      {
        condition: "Vascular anomalies",
        presentation: "Stridor more common, but wheezing can occur (especially pulmonary artery slings)",
        imaging_clue: "Anterior bowing of trachea on lateral CXR",
        diagnosis: "Usually requires additional imaging modalities"
      }
    ],
    
    atypical_features_suggesting_other_diagnosis: [
      "Lack of preceding upper respiratory symptoms",
      "Witnessed episode of choking",
      "Differential aeration on exam",
      "Poor growth",
      "Stridor"
    ]
  },
  
  // ==========================================================================
  // MODULE 7: CASE HOOKS
  // ==========================================================================
  
  caseHooks: {
    id: 'bronchiolitis_cases',
    
    the_apneic_preemie: {
      title: "The Apneic Preemie",
      scenario: "A 6-week-old born at 32 weeks presents with apnea. No other symptoms initially. RSV swab is pending.",
      question: "What's your diagnosis?",
      revelation: "RSV returns positive. This is RSV bronchiolitis presenting with apnea.",
      anchor: "Apnea can be the PRESENTING sign of bronchiolitis, especially in preterm infants and those <2 months old. Don't wait for wheezing to consider this diagnosis."
    },
    
    the_silent_chest: {
      title: "The Silent Chest",
      scenario: "A 4-month-old with bronchiolitis initially had loud wheezing. Now the wheezing is gone but the child looks more tired and has minimal air movement.",
      question: "Is this improvement?",
      answer: "NO - this is WORSE. Lack of audible wheezing may signal profound airway narrowing or respiratory exhaustion.",
      anchor: "Absent wheeze with poor air entry and fatigue is a sign of impending respiratory failure, not improvement."
    },
    
    the_febrile_neonate: {
      title: "The Febrile Neonate with RSV",
      scenario: "A 3-week-old has fever and mild cough. RSV rapid test is positive. The attending wants to discharge home.",
      question: "What's the problem?",
      answer: "This is a febrile neonate (≤28 days). RSV-positive status does NOT reduce IBI risk in this age group. Full sepsis evaluation is required.",
      anchor: "Neonates with fever and bronchiolitis have the SAME risk for invasive bacterial illness as febrile neonates without bronchiolitis."
    },
    
    the_persistent_fever: {
      title: "The Persistent Fever",
      scenario: "An 8-month-old with confirmed RSV bronchiolitis continues to have high fevers for 5 days. Parents are told 'it's just the virus.'",
      question: "Is this expected?",
      answer: "NO - sustained fever in RSV should prompt evaluation for SECONDARY INFECTION. Sustained fever is expected in adenovirus, not RSV.",
      anchor: "Virus matters: adenovirus = sustained fever expected; RSV = evaluate for secondary infection if fever persists."
    },
    
    the_unnecessary_cxr: {
      title: "The Unnecessary CXR",
      scenario: "A 10-month-old has classic bronchiolitis. The resident orders a chest x-ray 'to be thorough.' It shows some peribronchial thickening. Antibiotics are started.",
      question: "What went wrong?",
      answer: "Unnecessary CXR led to inappropriate antibiotic use. Bronchiolitis is a clinical diagnosis; CXRs are frequently abnormal but findings overlap with viral disease.",
      anchor: "CXRs in bronchiolitis are not routinely indicated and can lead to inappropriate antibiotic use."
    },
    
    the_recurrent_wheezer: {
      title: "The Recurrent Wheezer",
      scenario: "An 18-month-old presents with the fourth episode of wheezing with viral illness this year. Each time diagnosed with 'bronchiolitis.'",
      question: "Is this still bronchiolitis?",
      answer: "This pattern suggests recurrent viral-triggered wheezing, which may be early asthma. Family history of asthma, eczema, and atopy should be explored.",
      anchor: "Recurrent wheezing episodes, especially with family/personal history of atopy, suggest asthma rather than repeated bronchiolitis."
    }
  },
  
  // ==========================================================================
  // MODULE 8: FLASHCARDS
  // ==========================================================================
  
  flashcards: [
    {
      front: "What is the definition of bronchiolitis?",
      back: "Clinical syndrome of respiratory distress in children <2 years, characterized by URI symptoms (rhinorrhea) followed by lower respiratory signs (wheezing and/or crackles)"
    },
    {
      front: "What is the #1 cause of bronchiolitis?",
      back: "RSV (Respiratory Syncytial Virus) - most common and most often detected as sole pathogen"
    },
    {
      front: "What is the STRONGEST risk factor for severe bronchiolitis?",
      back: "Age <6 months"
    },
    {
      front: "What percentage of hospitalized children with bronchiolitis have 2+ viruses detected?",
      back: "~1/3 (approximately one-third)"
    },
    {
      front: "What is the typical duration of bronchiolitis?",
      back: "Self-resolves over average 12 days; cough may persist 2-3 weeks"
    },
    {
      front: "In what age group can apnea be the PRESENTING sign of bronchiolitis?",
      back: "Preterm infants and those <2 months old (postmenstrual age <48 weeks)"
    },
    {
      front: "What does a LOW respiratory rate (<30) suggest in a child with bronchiolitis?",
      back: "This is NOT reassuring - may indicate impending apnea or respiratory failure"
    },
    {
      front: "What does ABSENT wheezing with poor air entry suggest in bronchiolitis?",
      back: "Profound airway narrowing or respiratory exhaustion - this is a BAD sign, not improvement"
    },
    {
      front: "How is bronchiolitis diagnosed?",
      back: "CLINICALLY - based on age <2 years, URI prodrome, increased respiratory effort, and wheezing/crackles. CXR and labs are NOT needed for diagnosis."
    },
    {
      front: "Why should CXRs be avoided in uncomplicated bronchiolitis?",
      back: "Unnecessary CXRs can lead to inappropriate antibiotic use"
    },
    {
      front: "Does a positive RSV test change the sepsis workup in a febrile neonate (≤28 days)?",
      back: "NO - febrile neonates with bronchiolitis have the SAME risk for IBI as those without. Full sepsis evaluation is required."
    },
    {
      front: "What does sustained fever in RSV bronchiolitis suggest?",
      back: "Should prompt evaluation for SECONDARY BACTERIAL INFECTION (unlike adenovirus where sustained fever is expected)"
    },
    {
      front: "What percentage of children with bronchiolitis require intubation?",
      back: "1-2% (rates have decreased since early 2000s due to increased noninvasive support)"
    },
    {
      front: "What is the most common secondary bacterial infection in bronchiolitis?",
      back: "Otitis media (other secondary bacterial infections are uncommon)"
    },
    {
      front: "What features suggest a diagnosis OTHER than bronchiolitis?",
      back: "Lack of preceding URI symptoms, witnessed choking episode, differential aeration, poor growth, stridor, recurrent episodes"
    }
  ],
  
  // ==========================================================================
  // MODULE 9: HIGH-YIELD TEACHING POINTS
  // ==========================================================================
  
  highYieldPoints: {
    diagnosis: [
      "Bronchiolitis is a CLINICAL diagnosis - no tests needed",
      "Age <2 years + URI prodrome + lower respiratory signs (wheezing/crackles)",
      "CXRs are not routinely indicated and can lead to inappropriate antibiotics"
    ],
    
    risk_stratification: [
      "Age <6 months is the STRONGEST risk factor for severe disease",
      "Other major risk factors: prematurity, chronic lung disease, CHD, immunocompromise, Down syndrome, neurologic disease, airway abnormalities"
    ],
    
    red_flags: [
      "Apnea (especially in preterm or <2 months - can be presenting sign)",
      "Low respiratory rate (<30) - NOT reassuring, may indicate impending apnea",
      "Absent wheeze with poor air entry - profound narrowing or exhaustion",
      "Sustained fever in RSV - evaluate for secondary infection"
    ],
    
    special_populations: [
      "Febrile neonates ≤28 days: RSV does NOT change IBI risk - full sepsis workup required",
      "Febrile infants 29-90 days: RSV CAN modify approach if well-appearing without risk factors"
    ],
    
    viral_testing: [
      "Not routinely needed outpatient",
      "Check for influenza (treatment implications) and COVID-19 (treatment and infection control)",
      "Knowing the virus helps with antibiotic stewardship and symptom interpretation"
    ],
    
    complications: [
      "Dehydration (from increased needs, decreased intake, vomiting)",
      "Apnea (1-24%, risk factors: <8 weeks, prior apnea, RR <30 or >70, SpO2 <90%)",
      "Respiratory failure (5-10% need advanced support, 1-2% intubation)",
      "Secondary bacterial infection (uncommon except otitis media)"
    ]
  }
};

// Export for use in ReasonDx platform
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BRONCHIOLITIS_DISCOVERY_TEMPLATES;
}
