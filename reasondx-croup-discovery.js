/**
 * ReasonDx Socratic Discovery Templates
 * CROUP IN CHILDREN - Clinical Features, Evaluation, Diagnosis & Management
 * 
 * Based on UpToDate articles:
 * - "Croup: Clinical features, evaluation, and diagnosis"
 * - "Croup: Management"
 * 
 * Framework: Active learning through discovery, pattern recognition, clinical decision-making
 */

const CROUP_DISCOVERY_TEMPLATES = {
  
  // ==========================================================================
  // MODULE 1: DEFINITIONS AND EPIDEMIOLOGY
  // ==========================================================================
  
  definitionsAndEpidemiology: {
    id: 'croup_definitions',
    title: 'Croup: Definitions, Types & Epidemiology',
    clinicalContext: 'Understanding the classic presentation and variants',
    
    core_definition: {
      discovery_prompt: {
        scenario: "A 2-year-old presents with a 'barking' cough, hoarse voice, and inspiratory stridor after 2 days of runny nose.",
        question: "What is the classic triad of croup?",
        answer: "Inspiratory stridor + Barking cough + Hoarseness"
      },
      
      definition: {
        syndrome: "Respiratory illness characterized by inspiratory stridor, barking cough, and hoarseness",
        anatomic_location: "Inflammation in the larynx and subglottic airway",
        typical_course: "Usually mild and self-limited, but significant upper airway obstruction CAN occur"
      }
    },
    
    croup_types: {
      viral_croup: {
        other_name: "Classic croup, laryngotracheitis",
        age_range: "Most common in 6 months to 3 years",
        etiology: "Respiratory viruses",
        associated_symptoms: "Viral symptoms present (nasal congestion, fever)",
        course: "Self-limited; cough typically resolves within 3 days"
      },
      
      spasmodic_croup: {
        key_features: [
          "ALWAYS occurs at night",
          "Onset and cessation of symptoms are ABRUPT",
          "Duration of symptoms is SHORT (often subsiding by time of presentation)",
          "Fever typically ABSENT",
          "Episodes RECUR (same night, successive evenings for 2-4 nights)"
        ],
        distinguishing_feature: "Episodic nature and relative wellness between attacks",
        associations: ["Familial predisposition", "More common with family history of allergies"],
        alternate_names: ["Frequently recurrent croup", "Allergic croup"],
        course: "Usually benign; symptoms relieved by comforting child and humidified air"
      },
      
      recurrent_or_atypical_croup: {
        definition: "Recurrent episodes OR episodes atypical for classic croup",
        atypical_features: [
          "Severe or prolonged symptoms",
          "Occurring OUTSIDE typical age range (<6 months or >5-6 years)"
        ],
        action: "Requires evaluation for underlying airway abnormality"
      }
    },
    
    related_conditions: {
      laryngitis: {
        description: "Inflammation limited to larynx (hoarseness only)",
        typical_population: "Older children and adults",
        distinction: "No stridor or barking cough"
      },
      
      laryngotracheobronchitis: {
        description: "Inflammation extends into bronchi",
        findings: "Lower airway signs (wheezing, crackles)",
        severity: "Tends to be MORE severe than laryngotracheitis alone"
      },
      
      bacterial_tracheitis: {
        other_name: "Bacterial croup",
        description: "Invasive exudative BACTERIAL infection of soft tissues of trachea",
        presentation: {
          primary: "Can occur as primary infection",
          secondary: "Or as complication of viral croup"
        },
        pattern_with_secondary: "Symptoms of viral croup → marked WORSENING with high fevers, toxic appearance, severe respiratory distress"
      }
    },
    
    epidemiology: {
      incidence: "~350,000-400,000 croup-related ED visits per year in US (1.3% of all ED visits)",
      age_distribution: {
        peak: "6 months to 3 years",
        under_2: "43% of ED visits",
        two_to_seven: "50% of ED visits",
        seven_and_older: "Only 7% of ED visits"
      },
      sex_ratio: "More common in boys (1.4:1 to 2:1)",
      
      risk_factors: {
        family_history: "Children with parental croup history are 3x more likely to have croup, 4x more likely for recurrent croup",
        smoking: "Parent/caregiver smoking does NOT appear to increase croup risk (unlike other respiratory infections)"
      },
      
      seasonality: "Fall and early winter (coincides with parainfluenza type 1 activity)",
      additional_peaks: "RSV, influenza, and COVID-19 activity periods",
      
      timing: {
        ed_visits: "Most frequent 10 PM to 4 AM",
        morning_peak: "Also noted 7 AM to 11 AM"
      },
      
      hospitalization: {
        rate: "<10% of children presenting to ED require hospitalization",
        trend: "Admissions have declined steadily since late 1970s"
      }
    }
  },
  
  // ==========================================================================
  // MODULE 2: MICROBIOLOGY AND PATHOGENESIS
  // ==========================================================================
  
  microbiologyAndPathogenesis: {
    id: 'croup_microbiology',
    title: 'Croup: Viral Etiology & Pathophysiology',
    clinicalContext: 'Understanding the anatomy and why symptoms occur',
    
    viral_causes: {
      discovery_prompt: {
        scenario: "What is the MOST common cause of croup?",
        answer: "Parainfluenza virus type 1"
      },
      
      pathogens: [
        {
          virus: "Parainfluenza virus type 1",
          rank: "#1 - Most common cause",
          timing: "Fall and winter epidemics"
        },
        {
          virus: "Rhinovirus",
          rank: "Common cause"
        },
        {
          virus: "RSV",
          note: "Laryngotracheal component usually less significant than lower airway disease"
        },
        {
          virus: "SARS-CoV-2",
          note: "Relatively common cause since pandemic"
        },
        {
          virus: "Other human coronaviruses (NL63, OC43, HKU1)",
          note: "Associated with croup"
        },
        {
          virus: "Influenza",
          note: "Relatively uncommon cause; children hospitalized with influenzal croup have longer stays and greater readmission risk"
        },
        {
          virus: "Human metapneumovirus",
          note: "Primarily lower respiratory tract disease"
        },
        {
          virus: "Enteroviruses",
          note: "Usually mild croup"
        },
        {
          virus: "Adenovirus",
          rank: "Minority of cases"
        },
        {
          virus: "Measles",
          note: "Important cause in endemic areas or outbreaks"
        },
        {
          virus: "Herpes viruses (HHV-6, HSV)",
          note: "Sporadic cases reported"
        }
      ],
      
      prevalence_data: {
        source: "Study of 2367 children with croup (ED or inpatient)",
        viral_detection_rate: "82% had viral pathogen detected",
        distribution: {
          parainfluenza: "34%",
          rhinovirus: "13%",
          sars_cov_2: "8%",
          rsv: "7%",
          other_coronaviruses: "6%",
          influenza: "5%",
          enteroviruses: "5%",
          hmpv: "4%",
          adenovirus: "1%"
        },
        coinfection: "~20% had coinfection with 2+ viruses"
      },
      
      bacterial_causes: {
        primary: "Croup is RARELY caused by bacteria",
        exception: "Mycoplasma pneumoniae can cause mild croup-like illness",
        secondary: "Secondary bacterial infection (bacterial tracheitis) can occur but is uncommon",
        common_bacteria: ["Staphylococcus aureus", "Streptococcus pyogenes", "Streptococcus pneumoniae"]
      }
    },
    
    pathogenesis: {
      discovery_prompt: {
        scenario: "Why does croup cause stridor while bronchiolitis causes wheezing?",
        answer: "Croup affects the SUBGLOTTIC airway (upper airway) → inspiratory stridor; Bronchiolitis affects small bronchi/bronchioles (lower airway) → wheezing"
      },
      
      anatomic_hallmark: {
        location: "Narrowing of the SUBGLOTTIC airway",
        why_subglottis: "Cricoid cartilage is a COMPLETE ring (unlike horseshoe-shaped tracheal rings) - cannot expand when mucosa becomes inflamed"
      },
      
      obstruction_types: {
        fixed_obstruction: {
          mechanism: "Mucosal inflammation, edema, fibrinous exudates, pseudomembranes",
          laryngoscopy_findings: "Redness and swelling below vocal folds; diameter may be reduced to 1-2 mm in severe cases"
        },
        dynamic_obstruction: {
          location: "Extrathoracic trachea below cartilaginous ring",
          mechanism: "High negative pressure in distal extrathoracic trachea + floppy tracheal wall in children",
          triggers: "Struggling, crying, agitation WORSENS obstruction"
        }
      },
      
      key_teaching: {
        agitation_worsens: "Agitation → increased inspiratory effort → more negative pressure → more dynamic obstruction → worse symptoms",
        calm_child: "Keeping child calm is therapeutic"
      },
      
      histopathology: "Infiltration of histiocytes, lymphocytes, plasma cells, neutrophils into edematous lamina propria, submucosa, adventitia"
    },
    
    host_factors: {
      observation: "Only a small subset of children with parainfluenza infection develop overt croup",
      implication: "Host (genetic) factors play a role",
      
      predisposing_factors: [
        "Congenital/acquired airway abnormalities (laryngomalacia, laryngeal clefts, subglottic stenosis, vallecular cysts, subglottic hemangiomas)",
        "Hyperactive airways",
        "Atopy or gastroesophageal reflux (suggested in spasmodic/recurrent croup)"
      ]
    }
  },
  
  // ==========================================================================
  // MODULE 3: CLINICAL PRESENTATION
  // ==========================================================================
  
  clinicalPresentation: {
    id: 'croup_presentation',
    title: 'Clinical Presentation of Croup',
    clinicalContext: 'Recognizing the classic pattern and warning signs',
    
    typical_presentation: {
      age: "≤6 years, peak 6 months to 3 years",
      
      prodrome: {
        initial_symptoms: ["Nasal discharge", "Congestion"],
        duration: "12-48 hours before laryngeal symptoms"
      },
      
      progression: {
        symptoms: ["Fever", "Hoarseness", "Barking cough", "Stridor"],
        pharyngitis: "Minimal, if any"
      },
      
      airway_symptoms: {
        early: "Stridor develops; may have mild tachypnea with prolonged inspiratory phase",
        worsening: "Severe respiratory distress can develop if obstruction worsens",
        red_flag: "Rapid progression or concurrent lower airway involvement suggests more serious illness"
      }
    },
    
    signs_and_symptoms: {
      characteristic_of_croup: [
        {
          finding: "Fever and other viral symptoms",
          note: "Most children with viral croup have these"
        },
        {
          finding: "Barking cough",
          description: "Classic 'barky, seal-like' cough - hallmark of subglottic inflammation"
        },
        {
          finding: "Hoarseness",
          note: "Present in croup, particularly in older children; NOT typical of epiglottitis or foreign body aspiration"
        }
      ],
      
      not_typical_of_croup: {
        difficulty_swallowing: {
          consider: ["Acute epiglottitis", "Large esophageal foreign body distorting trachea"]
        },
        drooling: {
          consider: ["Peritonsillar abscess", "Retropharyngeal abscess", "Epiglottitis"],
          prevalence: "~80% of epiglottitis but only ~10% of croup"
        },
        throat_pain: {
          consider: "Epiglottitis more than croup (60-70% vs <10%)"
        },
        angioedema_urticaria_wheezing_hypotension: {
          consider: "Anaphylaxis"
        }
      },
      
      stridor_without_viral_symptoms: {
        consider: ["Spasmodic croup", "Subglottic cyst", "Subglottic hemangioma", "Foreign body aspiration"]
      }
    },
    
    clinical_course: {
      duration: "Self-limited; typically resolves within 24-72 hours",
      cough_persistence: "May persist up to 1 week",
      traditional_view: "Severity peaks on days 3-5",
      deviation_from_course: "Should prompt consideration of diagnoses other than croup"
    },
    
    severity_assessment: {
      discovery_prompt: {
        scenario: "What's the most concerning sign of upper airway obstruction in croup?",
        answer: "Biphasic stridor (heard on BOTH inspiration AND expiration) at rest"
      },
      
      westley_croup_score: {
        components: [
          "Level of consciousness (0-5 points)",
          "Cyanosis (0-4 points)",
          "Stridor (0-2 points)",
          "Air entry (0-2 points)",
          "Retractions (0-3 points)"
        ],
        interpretation: {
          mild: "Score ≤2",
          moderate: "Score 3-7",
          severe: "Score ≥8",
          impending_respiratory_failure: "Score ≥12"
        }
      },
      
      severity_categories: {
        mild: {
          score: "≤2",
          features: ["Barking cough", "Hoarse cry", "No stridor at rest (may be present when upset)", "No or only mild retractions"]
        },
        moderate: {
          score: "3-7",
          features: ["Stridor at REST", "At least mild retractions", "May have other mild to moderate signs"]
        },
        severe: {
          score: "≥8",
          features: [
            "Significant stridor at rest (intensity may DECREASE with worsening obstruction)",
            "Severe retractions including sternal indrawing",
            "May appear anxious, agitated, or pale and fatigued"
          ]
        },
        impending_respiratory_failure: {
          score: "≥12",
          features: [
            "Fatigue and listlessness",
            "Marked retractions (may DECREASE as child becomes exhausted)",
            "Decreased or absent breath sounds",
            "Cyanosis or pallor",
            "Depressed level of consciousness"
          ]
        }
      },
      
      key_teaching: {
        decreased_stridor: "Stridor intensity may DECREASE with worsening obstruction (airway too narrow for turbulent flow)",
        decreased_retractions: "Retractions may DECREASE as child becomes exhausted - this is NOT improvement"
      }
    }
  },
  
  // ==========================================================================
  // MODULE 4: EVALUATION AND DIAGNOSIS
  // ==========================================================================
  
  evaluationAndDiagnosis: {
    id: 'croup_evaluation',
    title: 'Croup: Evaluation and Diagnosis',
    clinicalContext: 'Clinical diagnosis and when to test',
    
    evaluation_approach: {
      objectives: [
        "Promptly identify patients with severe upper airway obstruction or risk of rapid progression",
        "Exclude other conditions with similar presentations that require specific interventions"
      ],
      
      key_principle: "Make the child as COMFORTABLE as possible - increased inspiratory effort from anxiety can worsen subglottic narrowing"
    },
    
    rapid_assessment: {
      components: [
        "General appearance (including stridor at rest)",
        "Vital signs",
        "Pulse oximetry",
        "Airway stability",
        "Mental status",
        "Hydration status"
      ],
      
      severe_distress: "Children with severe respiratory distress require IMMEDIATE treatment"
    },
    
    history: {
      factors_associated_with_severe_croup: [
        "Sudden onset of symptoms",
        "Rapidly progressing symptoms (<12 hours of illness)",
        "Previous episodes of croup",
        "Underlying abnormality of upper airway",
        "Medical conditions predisposing to respiratory failure (eg, neuromuscular disorders)"
      ]
    },
    
    physical_examination: {
      distinguishing_croup_from_other_causes: {
        preferred_posture: {
          epiglottitis: "Tripod or sniffing position (neck mildly flexed, head mildly extended)",
          croup: "Very severe croup may also have tripod posture"
        },
        voice_quality: {
          croup: "Hoarse voice or diminished cry",
          epiglottitis_abscess: "Muffled 'hot-potato' voice"
        },
        oropharynx: {
          croup: "Minimal pharyngitis",
          epiglottitis_abscess: "More pronounced pharyngitis, excessive salivation"
        },
        lung_exam: {
          wheezing: "Suggests small/medium airway obstruction (asthma, bronchiolitis)",
          crackles: "Suggests lower respiratory tract disease (pneumonia)"
        }
      },
      
      epiglottis_visualization: "For most patients with clinical picture consistent with viral croup, direct visualization is NOT necessary"
    },
    
    diagnosis: {
      discovery_prompt: {
        scenario: "What test confirms the diagnosis of croup?",
        answer: "NONE - croup is diagnosed CLINICALLY based on characteristic barking cough and stridor"
      },
      
      clinical_diagnosis: {
        basis: "Characteristic barking cough and stridor",
        context: "Especially during community epidemic of causative viruses",
        tests_needed: "Neither radiographs nor laboratory tests are necessary"
      }
    },
    
    diagnostic_testing: {
      radiographs: {
        routine: "NOT required for diagnosis",
        indications: [
          "Atypical course and/or diagnosis in question",
          "Severe symptoms without expected response to treatment",
          "Suspicion for inhaled or swallowed foreign body",
          "Recurrent croup without previous airway radiographs"
        ],
        findings: {
          ap_chest: "Subglottic narrowing ('steeple sign')",
          lateral: "Overdistention of hypopharynx during inspiration, subglottic haziness, normal epiglottis"
        }
      },
      
      viral_testing: {
        routine: "NOT necessary for most children",
        indication: "May be warranted in hospitalized patients for isolation decisions",
        method: "PCR, rapid antigen testing, or viral culture from nasopharynx"
      },
      
      other_labs: {
        routine: "Rarely indicated; limited diagnostic utility",
        wbc: "Can be low, normal, or elevated; >10,000 common; bandemia suggests primary or secondary bacterial infection"
      }
    }
  },
  
  // ==========================================================================
  // MODULE 5: MANAGEMENT
  // ==========================================================================
  
  management: {
    id: 'croup_management',
    title: 'Croup Management',
    clinicalContext: 'Evidence-based treatment by severity',
    
    severity_based_approach: {
      discovery_prompt: {
        scenario: "What are the TWO main medications used for croup?",
        answer: "Dexamethasone (glucocorticoid) and Nebulized epinephrine"
      }
    },
    
    mild_croup: {
      score: "Westley ≤2 (no stridor at rest, no/mild retractions)",
      
      home_management: {
        supportive_care: ["Antipyretics", "Encouragement of fluid intake", "Exposure to mist or cold outdoor air"],
        mist_therapy: "Sit with child in bathroom filled with steam from shower; or exposure to cold outdoor night air",
        humidifiers: "Only room-temperature mist humidifiers (avoid burns)",
        
        return_precautions: [
          "Stridor at rest",
          "Difficulty breathing",
          "Pallor or cyanosis",
          "Severe coughing spells",
          "Drooling or difficulty swallowing",
          "Fatigue",
          "Worsening course",
          "Persistent or high fever",
          "Prolonged symptoms (>7 days)",
          "Suprasternal retractions"
        ]
      },
      
      outpatient_treatment: {
        recommendation: "Single dose of oral dexamethasone (0.15-0.6 mg/kg, max 16 mg) OR oral prednisolone (1 mg/kg)",
        evidence: "Shortens duration of symptoms and reduces return visits",
        alternative: "Supportive care alone with anticipatory guidance"
      }
    },
    
    moderate_to_severe_croup: {
      setting: {
        moderate: "ED or office (if equipped for acute upper airway obstruction)",
        severe: "ED - requires prompt therapy, monitoring, supportive care"
      },
      
      key_principle: "Minimize agitation - parent should hold and comfort child",
      
      initial_treatment: {
        dexamethasone: {
          dose: "0.6 mg/kg (maximum 16 mg)",
          route: "Oral preferred > IV if access established > IM if oral not tolerated and no IV",
          mechanism: "Anti-inflammatory, decreases laryngeal mucosal edema",
          onset: "Improvement usually evident within 2-6 hours"
        },
        
        nebulized_epinephrine: {
          indication: "ALL patients with moderate to severe croup",
          
          dosing: {
            racemic: "0.05 mL/kg per dose (max 0.5 mL) of 2.25% solution diluted to 3 mL total with NS",
            l_epinephrine: "0.5 mL/kg per dose (max 5 mL) of 1 mg/mL solution"
          },
          administration: "Via nebulizer over 5-15 minutes",
          onset: "Within 10 minutes",
          duration: "Effects typically last <2 hours",
          
          key_teaching: {
            rebound: "Symptoms may recur as epinephrine wears off",
            observation: "Must observe for 2-4 hours after administration before discharge"
          }
        },
        
        budesonide: {
          indication: "Alternative for children vomiting and lacking IV access",
          dose: "2 mg (2 mL) via nebulizer"
        },
        
        im_epinephrine: {
          indication: "Extremely severe airway obstruction with marked distress",
          dose: "0.01 mg/kg (max 0.5 mg) - same as anaphylaxis dosing"
        }
      },
      
      observation_and_disposition: {
        observation_period: "2-4 hours after nebulized epinephrine",
        
        response_to_treatment: {
          improvement: {
            outcome: "Most children with moderate croup improve",
            disposition: "Can be discharged home if remains well at end of observation"
          },
          recurrent_persistent: {
            action: "Second nebulized epinephrine treatment",
            if_improves: "Observe additional 2-4 hours, may discharge if stable",
            if_continues: "Hospitalization"
          }
        },
        
        discharge_criteria: [
          "No stridor at rest",
          "Normal pulse oximetry",
          "Good air exchange",
          "Normal color",
          "Normal level of consciousness",
          "Ability to tolerate fluids by mouth",
          "Caregivers understand return precautions and can return if necessary"
        ],
        
        return_rate: "3-5% of discharged patients return for care"
      }
    },
    
    hospitalization: {
      indications: [
        "Severe croup with poor air entry, altered consciousness, or impending respiratory failure",
        "Moderate/severe symptoms recurring or persisting after 1-2 nebulized epinephrine treatments",
        "'Toxic' appearance or clinical picture suggesting bacterial superinfection",
        "Need for supplemental oxygen",
        "Severe dehydration"
      ],
      
      additional_factors: [
        "Young age (<6 months)",
        "Recurrent ED visits within 24 hours",
        "Caregiver ability to understand instructions",
        "Ability to return for care"
      ],
      
      rate: "2-8% of children presenting to ED; only 1% require PICU"
    },
    
    inpatient_management: {
      supportive_care: {
        fluids: "IV if needed (fever and tachypnea increase needs; respiratory difficulty prevents oral intake)",
        fever_control: "High fever contributes to tachypnea and distress",
        comfort: "Avoid provoking agitation; let parent hold and comfort child; AVOID sedatives (may cause respiratory depression)"
      },
      
      respiratory_care: {
        nebulized_epinephrine: "Repeated doses as needed (every 15-20 min); if >q1-2h → ICU for cardiac monitoring",
        supplemental_oxygen: "If SpO2 <92%",
        mist_therapy: "Humidified air may provide comfort; discontinue if child is agitated by it",
        hfnc_niv: "For ongoing severe work of breathing despite dexamethasone and epinephrine",
        heliox: "70-80% helium/20-30% oxygen; reduces turbulent airflow; temporizing measure to prevent intubation",
        intubation: "Rarely required (<3% of hospitalized); use ETT 0.5-1 mm smaller than usual; avoid neuromuscular blockers unless bag-mask ventilation demonstrated"
      },
      
      repeat_glucocorticoids: "Not routinely necessary; reasonable for persistent symptoms"
    },
    
    therapies_not_recommended: {
      antibiotics: "No role in uncomplicated croup (viral); only for specific bacterial complications",
      antitussives_decongestants: "Unproven benefit; avoid in <2 years due to adverse effects",
      sedatives: "NOT recommended; may mask air hunger while causing respiratory depression"
    }
  },
  
  // ==========================================================================
  // MODULE 6: RECURRENT/ATYPICAL CROUP AND DIFFERENTIAL
  // ==========================================================================
  
  recurrentAtypicalAndDifferential: {
    id: 'croup_differential',
    title: 'Recurrent/Atypical Croup and Differential Diagnosis',
    clinicalContext: 'When it is not just croup',
    
    recurrent_atypical_croup: {
      discovery_prompt: {
        scenario: "A 4-month-old presents with barking cough and stridor. This is the third such episode.",
        question: "What should you consider?",
        answer: "Underlying airway abnormality - this is ATYPICAL croup (too young, recurrent)"
      },
      
      suspect_underlying_disorder_if: [
        "Recurrent episodes of croup-like symptoms",
        "Croup-like illness <6 months or >5-6 years old",
        "Croup-like symptoms not responding to standard therapies"
      ],
      
      underlying_conditions: [
        "Congenital/acquired airway abnormalities (laryngomalacia, laryngeal cleft, subglottic hemangioma, subglottic stenosis)",
        "Gastroesophageal reflux",
        "Eosinophilic esophagitis",
        "Atopic conditions"
      ],
      
      endoscopy_findings: {
        subglottic_stenosis: "21% in one series",
        abnormal_esophageal_biopsies: "20% (reflux esophagitis, eosinophilic esophagitis)",
        prior_intubation_stenosis: "44% in another series"
      },
      
      referral: "Children with recurrent croup should be referred to otolaryngology"
    },
    
    differential_diagnosis: {
      acute_epiglottitis: {
        key_differences: [
          "Rare in Hib vaccination era",
          "ABSENCE of barking cough",
          "Anxiety out of proportion to respiratory distress",
          "Rapid onset",
          "High fever, pale, ill-appearing",
          "Difficulty swallowing and drooling",
          "Prefer to sit up, seldom cough"
        ],
        radiograph: "Swelling of epiglottis ('thumb sign') on lateral view"
      },
      
      bacterial_tracheitis: {
        presentation: "May start as viral croup → marked WORSENING with high fevers, toxic appearance, severe respiratory distress",
        radiograph: "Nonspecific edema or intraluminal membranes/irregularities of tracheal wall"
      },
      
      peritonsillar_parapharyngeal_retropharyngeal_abscess: {
        features: ["Fever", "Drooling", "Neck stiffness", "Lymphadenopathy", "Variable toxicity"],
        croup_features_absent: "Barking cough and stridor usually ABSENT"
      },
      
      foreign_body: {
        aspiration: {
          history: "Sudden onset of choking and upper airway obstruction in previously healthy child",
          if_laryngeal: "Hoarseness and stridor",
          if_esophageal: "Large object → distorts trachea → barking cough and stridor"
        },
        button_battery: "Ingestion may cause stridor remote from ingestion time"
      },
      
      allergic_reaction_angioedema: {
        features: ["Rapid onset", "No preceding cold symptoms or fever", "Swelling of lips/tongue", "Urticaria", "Dysphagia without hoarseness", "Sometimes stridor", "History of allergy or previous attacks"]
      },
      
      upper_airway_injury: {
        causes: "Smoke, thermal, or chemical burns",
        clues: "History evident; no fever or viral prodrome"
      },
      
      airway_anomalies: {
        examples: [
          "Laryngomalacia",
          "Congenital subglottic stenosis",
          "Laryngeal webs",
          "Subglottic hemangioma",
          "Bronchogenic cyst",
          "Laryngeal papillomas",
          "Vocal cord paralysis"
        ],
        presentation: "More chronic course, absence of fever and URI symptoms (unless concomitant viral infection)",
        
        subglottic_hemangioma: {
          suspect_in: "Young infant with barking cough, no other viral signs",
          clue: "Visible hemangioma in beard distribution",
          response: "May temporarily respond to croup treatment (steroids, epinephrine) but RECUR within days"
        }
      }
    }
  },
  
  // ==========================================================================
  // MODULE 7: CASE HOOKS
  // ==========================================================================
  
  caseHooks: {
    id: 'croup_cases',
    
    the_quiet_stridor: {
      title: "The Quiet Stridor",
      scenario: "A 2-year-old with croup initially had loud inspiratory stridor. After several hours, the stridor is much quieter, but the child looks more tired and is less responsive.",
      question: "Is this improvement?",
      answer: "NO - this is WORSE. Stridor intensity decreases when the airway becomes TOO narrow for turbulent flow. Combined with fatigue and decreased responsiveness, this suggests impending respiratory failure.",
      anchor: "Quieter stridor + exhaustion = NOT improvement. The child may be too tired to generate turbulent flow."
    },
    
    the_drooling_child: {
      title: "The Drooling Child",
      scenario: "A 3-year-old presents with stridor and fever. You diagnose croup, but the nurse notes the child is drooling significantly and won't swallow.",
      question: "Is this just croup?",
      answer: "Drooling is present in 80% of epiglottitis but only 10% of croup. This child needs evaluation for epiglottitis or deep neck space infection.",
      anchor: "Drooling in a child with stridor = think epiglottitis or abscess, not just croup."
    },
    
    the_young_recurrent: {
      title: "The Young Recurrent",
      scenario: "A 4-month-old presents with barking cough and stridor. Mom says 'This is the third time this has happened.'",
      question: "What's your concern?",
      answer: "This is ATYPICAL croup - too young (<6 months) and recurrent. Consider subglottic hemangioma or other airway abnormality. Refer to ENT.",
      anchor: "Croup <6 months or >5-6 years, or recurrent episodes = evaluate for underlying airway abnormality."
    },
    
    the_early_discharge: {
      title: "The Early Discharge",
      scenario: "A 2-year-old with moderate croup receives nebulized epinephrine and dramatically improves. Thirty minutes later, you're ready to send her home.",
      question: "What's wrong with this plan?",
      answer: "Nebulized epinephrine effects last <2 hours. 'Rebound' can occur as it wears off. Must observe for 2-4 hours before discharge.",
      anchor: "After nebulized epinephrine for croup → OBSERVE 2-4 hours before discharge."
    },
    
    the_biphasic_stridor: {
      title: "The Biphasic Stridor",
      scenario: "A child with croup has stridor on both inspiration AND expiration.",
      question: "What does biphasic stridor signify?",
      answer: "Biphasic stridor (inspiration AND expiration) indicates significant airway obstruction. This child needs immediate treatment.",
      anchor: "Biphasic stridor = significant obstruction. Immediate treatment required."
    },
    
    the_toxic_child: {
      title: "The Toxic Child",
      scenario: "A 3-year-old had typical croup for 2 days, improving with home treatment. Now she's back with high fever, toxic appearance, and severe respiratory distress.",
      question: "What happened?",
      answer: "This biphasic pattern (viral croup → improvement → severe worsening with high fever and toxicity) suggests bacterial tracheitis, a secondary bacterial superinfection.",
      anchor: "Viral croup → improvement → sudden worsening with high fever and toxic appearance = suspect bacterial tracheitis."
    }
  },
  
  // ==========================================================================
  // MODULE 8: FLASHCARDS
  // ==========================================================================
  
  flashcards: [
    {
      front: "What is the classic triad of croup?",
      back: "1) Inspiratory stridor\n2) Barking (seal-like) cough\n3) Hoarseness"
    },
    {
      front: "What is the most common cause of croup?",
      back: "Parainfluenza virus type 1"
    },
    {
      front: "What is the anatomic hallmark of croup?",
      back: "Narrowing of the SUBGLOTTIC airway - the cricoid cartilage is a complete ring that cannot expand when inflamed"
    },
    {
      front: "What is the typical age range for croup?",
      back: "Peak: 6 months to 3 years\nOccurs mostly in children ≤6 years"
    },
    {
      front: "What does a Westley croup score ≤2 indicate?",
      back: "MILD croup - barking cough, hoarse cry, no stridor at rest, no/mild retractions"
    },
    {
      front: "What does a Westley croup score of 3-7 indicate?",
      back: "MODERATE croup - stridor at REST, at least mild retractions"
    },
    {
      front: "What does a Westley croup score ≥8 indicate?",
      back: "SEVERE croup - significant stridor at rest, severe retractions, may appear anxious/agitated/fatigued"
    },
    {
      front: "What is the dose of dexamethasone for croup?",
      back: "0.6 mg/kg (maximum 16 mg) - oral, IV, or IM\n(0.15-0.6 mg/kg for mild croup)"
    },
    {
      front: "How long must you observe a child after nebulized epinephrine for croup?",
      back: "2-4 hours - effects last <2 hours, and rebound can occur"
    },
    {
      front: "What is the dosing for nebulized racemic epinephrine?",
      back: "0.05 mL/kg (max 0.5 mL) of 2.25% solution diluted to 3 mL total with NS"
    },
    {
      front: "What is the dosing for nebulized L-epinephrine?",
      back: "0.5 mL/kg (max 5 mL) of 1 mg/mL solution"
    },
    {
      front: "What does DECREASING stridor intensity with increasing fatigue suggest?",
      back: "WORSENING, not improvement - airway may be too narrow for turbulent flow, or child is exhausted"
    },
    {
      front: "What distinguishes drooling in croup vs epiglottitis?",
      back: "Drooling in 80% of epiglottitis but only 10% of croup\nDrooling with stridor = think epiglottitis or abscess"
    },
    {
      front: "What is the radiographic sign of croup on AP chest film?",
      back: "'Steeple sign' - subglottic narrowing"
    },
    {
      front: "When should you suspect underlying airway abnormality in croup?",
      back: "Recurrent episodes, age <6 months or >5-6 years, poor response to standard treatment"
    }
  ],
  
  // ==========================================================================
  // MODULE 9: HIGH-YIELD TEACHING POINTS
  // ==========================================================================
  
  highYieldPoints: {
    diagnosis: [
      "Croup = inspiratory stridor + barking cough + hoarseness",
      "Clinical diagnosis - no tests required",
      "Radiographs only if diagnosis uncertain, atypical course, or suspected foreign body"
    ],
    
    anatomy_and_pathophysiology: [
      "Subglottic airway inflammation - cricoid is complete ring that can't expand",
      "Agitation worsens obstruction (increased negative pressure → more dynamic obstruction)",
      "Keep child CALM - this is therapeutic"
    ],
    
    severity_recognition: [
      "Mild (≤2): No stridor at rest",
      "Moderate (3-7): Stridor at REST",
      "Severe (≥8): Significant stridor, severe retractions, agitation/fatigue",
      "Impending failure (≥12): Fatigue, decreased breath sounds, altered consciousness"
    ],
    
    red_flags: [
      "Decreasing stridor with increasing fatigue = WORSE not better",
      "Biphasic stridor (inspiration AND expiration) = significant obstruction",
      "Drooling = think epiglottitis/abscess, not croup",
      "Viral croup → improvement → worsening with fever/toxicity = bacterial tracheitis"
    ],
    
    treatment: [
      "Dexamethasone for ALL moderate-severe croup (0.6 mg/kg, max 16 mg)",
      "Nebulized epinephrine for ALL moderate-severe croup",
      "Observe 2-4 hours after epinephrine before discharge",
      "Frequent epinephrine (>q1-2h) → ICU with cardiac monitoring"
    ],
    
    atypical_croup: [
      "Age <6 months or >5-6 years",
      "Recurrent episodes",
      "Poor response to treatment",
      "→ Evaluate for underlying airway abnormality (refer to ENT)"
    ]
  }
};

// Export for use in ReasonDx platform
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CROUP_DISCOVERY_TEMPLATES;
}
