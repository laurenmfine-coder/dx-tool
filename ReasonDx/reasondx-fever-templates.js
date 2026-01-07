/**
 * ReasonDx Fever/Sepsis/UTI Templates
 * Evidence-based clinical templates from UpToDate
 * 
 * Chief Complaints Covered:
 * - Fever (including FUO)
 * - Sepsis and Septic Shock
 * - Urinary Tract Infection (simple cystitis and complicated UTI)
 * 
 * For each diagnosis: HPI templates, physical exam findings, 
 * workup expectations, and clinical pearls
 */

const FeverTemplates = {
  
  // ============================================
  // CLINICAL DANGER SIGNS - FEVER PRESENTATIONS
  // ============================================
  
  clinicalDangerSigns: {
    // Signs suggesting sepsis/septic shock
    sepsisFeatures: [
      "Hypotension (SBP <100 mmHg or MAP <65 mmHg)",
      "Altered mental status / confusion",
      "Tachypnea (RR >22/min)",
      "Hypoxemia requiring supplemental oxygen",
      "Lactate >2 mmol/L",
      "Oliguria despite fluid resuscitation",
      "Mottled skin / poor capillary refill (>3 seconds)",
      "Rigors / shaking chills (suggest bacteremia)"
    ],
    
    // FUO high-risk features requiring urgent workup
    feverHighRiskFeatures: [
      "Immunocompromised patient (HIV, transplant, chemotherapy, biologics)",
      "Prosthetic heart valve or implanted device",
      "Recent surgery or hospitalization",
      "Injection drug use",
      "Fever >38.3°C for >3 weeks without diagnosis",
      "Associated weight loss >5% body weight",
      "Night sweats requiring sheet changes",
      "New heart murmur",
      "Petechial or purpuric rash",
      "Lymphadenopathy"
    ],
    
    // UTI features suggesting complicated infection
    complicatedUTIFeatures: [
      "Fever >38.4°C (101°F)",
      "Flank pain or costovertebral angle tenderness",
      "Rigors or shaking chills",
      "Nausea and vomiting",
      "Signs of systemic illness",
      "Male patient with UTI symptoms",
      "Pregnancy",
      "Urinary tract obstruction (nephrolithiasis)",
      "Indwelling catheter or recent instrumentation",
      "Immunocompromised state"
    ],
    
    // Critical illness markers in sepsis
    sepsisOrganDysfunction: [
      "Respiratory: PaO2/FiO2 <300, need for mechanical ventilation",
      "Cardiovascular: Hypotension requiring vasopressors",
      "Renal: Creatinine >2.0 mg/dL or oliguria",
      "Hepatic: Bilirubin >2.0 mg/dL",
      "Hematologic: Platelets <100,000 or INR >1.5",
      "Neurologic: GCS <15"
    ]
  },

  // ============================================
  // SEPSIS / SEPTIC SHOCK
  // ============================================
  
  sepsis: {
    hpiTemplates: {
      onset: [
        "Started feeling sick yesterday, got progressively worse over the past 24 hours",
        "Woke up this morning with fever and chills, been getting weaker throughout the day",
        "Been feeling off for about 2 days, but took a turn for the worse last night",
        "Developed fever and body aches 3 days ago, came in today because I'm much worse"
      ],
      
      feverPattern: [
        "Temperature at home was 102.5°F, had shaking chills that wouldn't stop",
        "Fever up to 103°F with severe rigors that made my whole body shake",
        "Been having fevers off and on, highest was 101.8°F, with chills each time",
        "Temperature was 104°F this morning, took Tylenol but it barely helped"
      ],
      
      associatedSymptoms: {
        respiratory: [
          "Developed a cough about 2 days ago with yellow-green sputum",
          "Having trouble catching my breath even just sitting here",
          "Cough started a few days before the fever",
          "Breathing has been getting harder, feel like I can't get enough air"
        ],
        urinary: [
          "Pain and burning with urination for the past 3 days",
          "Been urinating more frequently but only small amounts",
          "Back pain on my right side along with the fever",
          "Haven't been urinating much today despite drinking fluids"
        ],
        abdominal: [
          "Severe abdominal pain, worst in my right lower side",
          "Nausea and vomiting for the past day, can't keep anything down",
          "Pain in my belly that's been getting worse",
          "Had diarrhea for 2 days before the fever started"
        ],
        skin: [
          "Noticed a red, warm, swollen area on my leg that's been spreading",
          "Have a wound that's been getting more red and painful",
          "Developed a rash with these dark spots that don't go away when I press on them",
          "The skin around my incision has been getting redder and more painful"
        ],
        neurologic: [
          "Family says I've been confused and not making sense",
          "Having trouble staying awake, feel very drowsy",
          "My family noticed I wasn't acting like myself",
          "Been having headaches and feel confused"
        ]
      },
      
      mentalStatusChanges: [
        "My spouse says I've been acting confused since this morning",
        "Can't think straight, everything feels foggy",
        "Family brought me in because I wasn't responding normally",
        "Been having trouble remembering things and focusing"
      ],
      
      fluidIntake: [
        "Haven't been able to keep any fluids down",
        "Barely had anything to drink in the past day",
        "Feel too sick to eat or drink",
        "Been trying to drink but keep throwing up"
      ]
    },
    
    riskFactors: {
      immunocompromise: [
        "Currently on chemotherapy for cancer",
        "Taking immunosuppressive medications for transplant",
        "Have HIV, last CD4 count was under 200",
        "On long-term steroids for autoimmune disease",
        "Receiving biologic therapy for rheumatoid arthritis"
      ],
      
      indwellingDevices: [
        "Have a central line/PICC line in place",
        "Have an indwelling urinary catheter",
        "Have a prosthetic heart valve",
        "Have a pacemaker/defibrillator",
        "Recently had surgery with hardware placed"
      ],
      
      recentHealthcare: [
        "Was in the hospital about 2 weeks ago",
        "Had surgery about a week ago",
        "Recently completed a course of antibiotics",
        "Have been getting dialysis"
      ],
      
      comorbidities: [
        "Have diabetes, blood sugars have been hard to control",
        "Have chronic kidney disease",
        "Have liver cirrhosis",
        "Have COPD and am on home oxygen",
        "Had my spleen removed years ago"
      ]
    },
    
    physicalExam: {
      vitalSigns: {
        typical: "Temperature 39.2°C (102.6°F), HR 118, BP 88/52, RR 26, SpO2 92% on room air",
        severeShock: "Temperature 38.8°C (101.8°F), HR 132, BP 72/40, RR 32, SpO2 88% on room air",
        earlyPresentation: "Temperature 38.9°C (102°F), HR 105, BP 102/68, RR 22, SpO2 95% on room air",
        hypothermic: "Temperature 35.8°C (96.4°F), HR 110, BP 85/50, RR 28 - Note: Hypothermia in sepsis indicates poor prognosis"
      },
      
      general: {
        toxicAppearing: "Acutely ill-appearing, diaphoretic, appears uncomfortable and lethargic",
        alteredMentalStatus: "Confused, oriented only to person, responds slowly to questions",
        extremelyIll: "Minimally responsive, appears moribund"
      },
      
      skin: {
        warmShock: "Skin warm and flushed, bounding pulses (early/warm distributive shock)",
        coldShock: "Skin cool and mottled, delayed capillary refill >3 seconds (late/cold shock)",
        petechiae: "Petechial rash on trunk and extremities (consider meningococcemia)",
        cellulitis: "Erythema, warmth, and induration of affected area with advancing border"
      },
      
      cardiopulmonary: {
        tachycardia: "Tachycardic, regular rhythm, no murmurs",
        hyperdynamic: "Hyperdynamic precordium, bounding pulses",
        pulmonaryFindings: "Crackles in right lower lobe, decreased breath sounds at bases",
        clearLungs: "Clear to auscultation bilaterally despite tachypnea"
      },
      
      sourceFindings: {
        pneumonia: "Decreased breath sounds right base, dullness to percussion, egophony",
        UTI_pyelonephritis: "Costovertebral angle tenderness on right, suprapubic tenderness",
        abdominal: "Diffuse abdominal tenderness with guarding, hypoactive bowel sounds",
        softTissue: "Erythema, warmth, fluctuance at wound site with purulent drainage",
        line: "Erythema and tenderness around central line insertion site"
      }
    },
    
    workupExpected: {
      initialLabs: {
        CBC: "WBC 18,500 with 92% neutrophils and 15% bands (left shift); or WBC 2,100 (leukopenia - poor prognostic sign); Platelets 85,000 (thrombocytopenia suggests DIC)",
        BMP: "Creatinine 2.1 mg/dL (AKI), BUN 45 mg/dL, Glucose 185 mg/dL, Bicarbonate 16 mEq/L (metabolic acidosis)",
        lactate: "Lactate 4.2 mmol/L (elevated >2 indicates tissue hypoperfusion; >4 high mortality)",
        LFTs: "AST 125, ALT 98, Bilirubin 2.8 mg/dL (hepatic dysfunction)",
        coagulation: "PT 18 seconds, INR 1.6, PTT 45 seconds (coagulopathy), D-dimer elevated",
        procalcitonin: "Procalcitonin 12.5 ng/mL (supports bacterial infection; useful for antibiotic duration)"
      },
      
      bloodCultures: {
        technique: "Two sets from two separate venipuncture sites BEFORE antibiotics; incubate ≥5 days",
        positiveRates: "Positive in 30-50% of sepsis cases",
        commonOrganisms: "E. coli, S. aureus, K. pneumoniae, S. pneumoniae most common",
        MRSAconsideration: "Consider MRSA coverage if risk factors: recent hospitalization, healthcare exposure, known colonization"
      },
      
      sourceSpecificStudies: {
        respiratory: "Chest X-ray (infiltrate), sputum culture and Gram stain, consider CT chest, respiratory viral panel",
        urinary: "Urinalysis (pyuria, bacteriuria, nitrites), urine culture, consider CT abdomen/pelvis if obstruction suspected",
        abdominal: "CT abdomen/pelvis with contrast (abscess, perforation, obstruction)",
        softTissue: "Wound culture, consider CT or MRI if deep infection/necrotizing fasciitis suspected",
        cardiac: "Blood cultures x 2+ sets, echocardiogram if endocarditis suspected"
      },
      
      ABG: "pH 7.28, PaCO2 28 mmHg (respiratory compensation), PaO2 65 mmHg, HCO3 14 mEq/L (metabolic acidosis with respiratory compensation)"
    },
    
    managementPrinciples: {
      hourOneBundleSSC: [
        "Measure lactate level; remeasure if initial lactate >2 mmol/L",
        "Obtain blood cultures before antibiotics",
        "Administer broad-spectrum antibiotics",
        "Begin 30 mL/kg crystalloid for hypotension or lactate ≥4 mmol/L",
        "Apply vasopressors if hypotensive during or after fluid resuscitation (MAP ≥65 mmHg)"
      ],
      
      fluidResuscitation: {
        initialVolume: "30 mL/kg crystalloid within first 3 hours",
        fluidChoice: "Balanced crystalloid (lactated Ringer's) preferred over normal saline",
        reassessment: "Assess fluid responsiveness with dynamic measures (pulse pressure variation, passive leg raise)",
        avoidance: "Avoid hydroxyethyl starch - increased mortality and renal injury"
      },
      
      antibiotics: {
        timing: "Within 1 hour of recognition - each hour delay increases mortality",
        broadSpectrum: "Cover gram-positive, gram-negative; add MRSA coverage if risk factors",
        typicalRegimen: "Vancomycin + piperacillin-tazobactam OR vancomycin + cefepime OR vancomycin + meropenem",
        narrowing: "De-escalate based on culture results, typically within 48-72 hours"
      },
      
      vasopressors: {
        firstLine: "Norepinephrine - first-line vasopressor",
        secondLine: "Vasopressin (up to 0.03 units/min) as second agent to reduce norepinephrine dose",
        targetMAP: "Target MAP 65-70 mmHg (higher may not improve outcomes)",
        avoidDopamine: "Avoid dopamine - increased arrhythmia risk vs norepinephrine"
      },
      
      sourceControl: {
        timing: "Within 6-12 hours of diagnosis when feasible",
        examples: "Drain abscess, remove infected catheter/device, debride necrotic tissue, relieve obstruction"
      }
    }
  },

  // ============================================
  // FEVER OF UNKNOWN ORIGIN (FUO)
  // ============================================
  
  feverOfUnknownOrigin: {
    definition: {
      classic: "Temperature >38.3°C (100.9°F) on several occasions for >3 weeks without diagnosis despite appropriate evaluation",
      newer: "Some experts suggest lowering threshold to >38.0°C (100.4°F)",
      categories: [
        "Classic FUO - no recent healthcare, not immunocompromised, no recent travel",
        "Healthcare-associated FUO - hospitalized or recent healthcare exposure",
        "FUO in immunocompromised - neutropenia, transplant, HIV, biologics, steroids",
        "Travel-associated FUO - recent travel to endemic areas"
      ]
    },
    
    hpiTemplates: {
      feverPattern: [
        "Been having fevers every day for about a month now, temperatures up to 102°F",
        "Temperatures spike in the late afternoon, then come down overnight",
        "Fevers have been coming and going for over 3 weeks, can't figure out why",
        "Running low-grade fevers around 100.5°F most days for the past month"
      ],
      
      associatedSymptoms: {
        constitutional: [
          "Lost about 15 pounds over the past 2 months without trying",
          "Wake up drenched in sweat almost every night",
          "Feel exhausted all the time, no energy to do anything",
          "Having chills with the fevers, sometimes shaking chills"
        ],
        joint: [
          "Joints have been aching, especially in my hands and knees",
          "Developed swelling in my wrists along with the fevers",
          "My joints feel stiff in the morning, takes hours to loosen up"
        ],
        skin: [
          "Noticed a rash that comes and goes, seems worse when I have fever",
          "Developed some bumps under my skin on my arms",
          "Have had mouth sores off and on"
        ],
        GI: [
          "Been having abdominal pain and diarrhea on and off",
          "Lost my appetite, food doesn't taste right",
          "Having some belly discomfort, mostly on the right side"
        ],
        headache: [
          "Headaches especially in my temple area, with scalp tenderness",
          "Jaw gets tired when I eat, have to stop and rest",
          "Having vision changes, things seem blurry sometimes"
        ]
      },
      
      priorWorkup: [
        "Had blood tests and chest X-ray, they were normal",
        "Already saw my regular doctor, they couldn't figure it out",
        "Been on antibiotics twice but fevers keep coming back",
        "Had a CT scan that didn't show anything obvious"
      ]
    },
    
    keyHistoryElements: {
      medications: [
        "Taking [medication] - started about 3 weeks before fevers began",
        "On blood pressure medication for years",
        "Taking herbal supplements",
        "Recently started a new medication"
      ],
      
      occupational: [
        "Work as a veterinarian/farmer - have contact with animals",
        "Work in healthcare",
        "Work in a microbiology laboratory",
        "Work outdoors, lots of tick exposure"
      ],
      
      travel: [
        "Traveled to [endemic area] about 6 weeks ago",
        "Lived in [country] years ago",
        "Recently returned from visiting family abroad",
        "Haven't traveled anywhere in years"
      ],
      
      animalExposure: [
        "Have cats at home, one scratched me recently",
        "Work with livestock - cattle and sheep",
        "Go hunting regularly, handle game",
        "Have a new puppy at home"
      ],
      
      foodExposure: [
        "Like unpasteurized cheese from the farmers market",
        "Ate some undercooked meat while traveling",
        "Drink raw milk",
        "No unusual food exposures"
      ],
      
      sexualHistory: [
        "Multiple partners, don't always use protection",
        "Monogamous relationship",
        "No new sexual contacts"
      ],
      
      substanceUse: [
        "Used to inject drugs years ago",
        "Smoke cigarettes",
        "Occasional marijuana use"
      ],
      
      familyHistory: [
        "Mother had lupus",
        "Father had inflammatory bowel disease",
        "Family member had tuberculosis",
        "No family history of febrile illnesses"
      ]
    },
    
    physicalExamFocus: {
      vital: "Confirm fever - rectal or oral temperature preferred; document pattern",
      
      headNeck: {
        temporalArtery: "Palpate for tenderness, nodularity, decreased pulse (GCA)",
        eyes: "Fundoscopy for Roth spots (endocarditis), papilledema",
        oralCavity: "Examine teeth, gums (dental abscess), palate (ulcers)"
      },
      
      lymphNodes: {
        cervical: "Anterior and posterior chains",
        supraclavicular: "Left supraclavicular (Virchow's node - abdominal malignancy)",
        axillary: "Bilateral",
        inguinal: "Bilateral"
      },
      
      cardiopulmonary: {
        heart: "Listen carefully for new murmurs (endocarditis)",
        lungs: "Crackles, decreased breath sounds"
      },
      
      abdominal: {
        hepatosplenomegaly: "Palpate for organomegaly",
        masses: "Assess for masses",
        tenderness: "Localize tenderness"
      },
      
      musculoskeletal: {
        joints: "Swelling, warmth, effusion",
        spine: "Tenderness over vertebrae (osteomyelitis, diskitis)"
      },
      
      skin: {
        rashes: "Examine entire skin surface",
        splinterHemorrhages: "Check nail beds",
        janewayLesions: "Painless erythematous lesions on palms/soles",
        oslerNodes: "Painful nodules on fingers/toes",
        livedo: "Livedo reticularis (vasculitis)"
      },
      
      genitourinary: {
        prostate: "Tenderness (prostatitis)",
        testicular: "Swelling, tenderness (epididymitis)",
        pelvic: "If symptoms suggest PID"
      }
    },
    
    initialWorkup: {
      basicLabs: [
        "CBC with differential and peripheral smear",
        "Complete metabolic panel including calcium",
        "Liver function tests (AST, ALT, alkaline phosphatase, bilirubin)",
        "Blood cultures x 2 sets from 2 sites (incubate ≥5 days)",
        "Urinalysis with reflex urine culture",
        "HIV antigen/antibody with reflex confirmatory testing",
        "ANA (antinuclear antibody)",
        "Rheumatoid factor",
        "ESR and CRP",
        "Ferritin (markedly elevated in Still's disease)",
        "Procalcitonin (utility in FUO unclear)"
      ],
      
      forYoungAdults: [
        "Heterophile antibody test (Monospot)",
        "EBV serology if Monospot negative"
      ],
      
      ifMalariaRisk: [
        "Thick and thin blood smears for malaria"
      ],
      
      imaging: [
        "CT chest, abdomen, pelvis with contrast"
      ]
    },
    
    advancedWorkup: {
      targetedBySymptoms: {
        endocarditis: "Echocardiogram (TTE, then TEE if high suspicion), serial blood cultures",
        tuberculosis: "TST or IGRA, sputum AFB stain/culture/PCR, consider bronchoscopy",
        endemicMycoses: "Histoplasma/Blastomycosis/Coccidioides serology and antigen testing",
        vasculitis: "ANCA, complement levels, affected tissue biopsy",
        lymphoma: "LDH, CT imaging, PET/CT, lymph node biopsy",
        mononucleosis: "EBV serology, CMV IgG/IgM or PCR, toxoplasma serology"
      },
      
      biopsySites: [
        "Temporal artery - if GCA suspected (do not delay steroids for biopsy)",
        "Lymph node - if enlarged, for malignancy/infection",
        "Skin - if rash present, relatively low risk",
        "Liver - if imaging shows lesions, for granulomatous disease",
        "Bone marrow - if cytopenias present, highest yield with hematologic abnormalities",
        "Bowel - if IBD suspected"
      ],
      
      PETscan: {
        indication: "Persistent FUO with unrevealing initial workup",
        sensitivity: "84-86%",
        specificity: "52-63%",
        diagnosticYield: "≥50%",
        bestFor: "Neoplasm, infection; less sensitive for Still's disease, TB, polymyalgia rheumatica"
      }
    },
    
    commonEtiologies: {
      infections: [
        "Tuberculosis (especially extrapulmonary)",
        "Endocarditis (culture-negative in 5-10%)",
        "Osteomyelitis",
        "Intra-abdominal abscess",
        "HIV (acute infection)",
        "EBV/CMV mononucleosis"
      ],
      
      malignancies: [
        "Lymphoma (especially non-Hodgkin)",
        "Leukemia",
        "Renal cell carcinoma",
        "Hepatocellular carcinoma",
        "Metastatic cancer"
      ],
      
      inflammatoryAutoimmune: [
        "Adult-onset Still's disease",
        "Giant cell arteritis/polymyalgia rheumatica",
        "Systemic lupus erythematosus",
        "Vasculitis",
        "Inflammatory bowel disease",
        "Sarcoidosis"
      ],
      
      other: [
        "Drug fever",
        "Pulmonary embolism",
        "Factitious fever"
      ]
    },
    
    outcomes: {
      nodiagnosis: "Up to 50% remain without diagnosis after extensive evaluation",
      prognosis: "Most undiagnosed patients have good prognosis",
      spontaneousResolution: "59% of undiagnosed cases resolve spontaneously"
    }
  },

  // ============================================
  // URINARY TRACT INFECTION
  // ============================================
  
  urinaryTractInfection: {
    
    // SIMPLE CYSTITIS
    simpleCystitis: {
      definition: "Infection confined to the bladder (lower urinary tract), no systemic symptoms",
      
      hpiTemplates: {
        dysuria: [
          "Burns when I urinate, been going on for 2 days",
          "Pain and stinging with urination since yesterday",
          "Hurts at the end when I'm finishing urinating",
          "Sharp burning sensation when I pee"
        ],
        
        frequency: [
          "Having to urinate every 30 minutes",
          "Constantly feel like I need to go even when I just went",
          "Going to the bathroom way more than usual, maybe 15 times a day",
          "Wake up multiple times at night to urinate"
        ],
        
        urgency: [
          "When I feel the urge, I have to go immediately or I'll have an accident",
          "Can barely hold it, have to rush to the bathroom",
          "Feel like I'm going to lose control of my bladder"
        ],
        
        suprapubicDiscomfort: [
          "Pressure and cramping in my lower belly",
          "Aching sensation right above my pubic bone",
          "Feel like my bladder is heavy and uncomfortable"
        ],
        
        urineCharacteristics: [
          "Urine looks cloudy and smells strong",
          "Noticed some blood in my urine",
          "Urine is darker than usual and has an odor"
        ],
        
        negativeFeatures: [
          "No fever or chills",
          "No back pain",
          "Just the bladder symptoms, otherwise feel okay",
          "No nausea or vomiting"
        ]
      },
      
      riskFactors: {
        female: [
          "Sexually active, had intercourse 2 days ago",
          "Use spermicides with diaphragm",
          "Went through menopause 5 years ago",
          "Have had several UTIs before"
        ],
        
        MDRriskFactors: [
          "Was on antibiotics about 3 months ago",
          "Was hospitalized last month",
          "Have had resistant bacteria before",
          "Recently traveled internationally",
          "Live in a nursing facility"
        ]
      },
      
      physicalExam: {
        vitalSigns: "Afebrile, vital signs normal",
        abdominal: "Mild suprapubic tenderness, no flank tenderness, no CVA tenderness",
        pelvic: "No vaginal discharge; if discharge present, evaluate for vaginitis"
      },
      
      diagnosis: {
        clinicalDiagnosis: "Can diagnose on symptoms alone in women with classic presentation",
        urinalysis: "Pyuria (WBC ≥10/hpf), bacteriuria, may have nitrites (gram-negative) or leukocyte esterase",
        urineCulture: "Not necessary for uncomplicated cases; obtain if MDR risk factors, treatment failure, or recurrent"
      },
      
      treatment: {
        firstLine: {
          nitrofurantoin: "100mg BID x 5 days - avoid if CrCl <30",
          TMP_SMX: "160/800mg BID x 3 days - avoid if local resistance >20%"
        },
        
        alternatives: {
          fosfomycin: "3g single dose - reserve for MDR risk; slightly less effective",
          pivmecillinam: "400mg BID x 3-5 days - where available",
          betaLactams: "Less effective than first-line; amoxicillin-clavulanate 500mg TID x 5-7 days",
          fluoroquinolones: "Reserve for more serious infections due to adverse effects"
        },
        
        avoidance: [
          "Fluoroquinolones - avoid for uncomplicated cystitis (risk of tendinopathy, neuropathy, CNS effects)",
          "Avoid nitrofurantoin if CrCl <30 mL/min",
          "Avoid TMP-SMX if local resistance >20%"
        ]
      }
    },

    // COMPLICATED UTI / PYELONEPHRITIS
    complicatedUTI: {
      definition: "UTI extending beyond bladder: pyelonephritis (kidney) or with systemic features",
      
      hpiTemplates: {
        onset: [
          "Started with burning when I urinated 2 days ago, then yesterday developed fever and back pain",
          "Had bladder symptoms for a few days, then suddenly got much sicker with chills",
          "Woke up with high fever, back pain, and nausea"
        ],
        
        flankPain: [
          "Severe pain in my right side, in my back just below my ribs",
          "Left-sided back pain that goes around to my front",
          "Aching pain in my back that's worse when someone touches it",
          "The pain is constant, deep, and makes me not want to move"
        ],
        
        systemicSymptoms: [
          "Temperature was 103°F with shaking chills",
          "Been vomiting since last night, can't keep anything down",
          "Feel terrible - weak, sweaty, achy all over",
          "Had rigors that made my whole body shake"
        ],
        
        cystitisSymptoms: [
          "Also having burning with urination and going frequently",
          "Still having the urgency and frequency on top of the fever",
          "The bladder symptoms started first, then the fever and back pain"
        ]
      },
      
      riskFactors: {
        anatomic: [
          "Have kidney stones, had one pass last year",
          "Had kidney surgery before",
          "Have an enlarged prostate",
          "Have a catheter in place"
        ],
        
        hostFactors: [
          "Diabetic, blood sugars have been running high",
          "Had a kidney transplant",
          "On medications that suppress my immune system",
          "Am pregnant"
        ],
        
        MDRriskFactors: [
          "Was in the hospital recently",
          "On antibiotics in the past 3 months",
          "Known to have resistant bacteria",
          "Have a urinary catheter"
        ]
      },
      
      physicalExam: {
        vitalSigns: "Temperature 39.4°C (103°F), HR 112, BP 105/65, RR 20",
        vitalSignsSevere: "Temperature 38.8°C, HR 125, BP 85/50, RR 26 (septic)",
        
        general: "Ill-appearing, diaphoretic, lying still, appears uncomfortable",
        
        abdominal: "Mild suprapubic tenderness, no peritoneal signs",
        
        CVAtenderness: "Marked costovertebral angle tenderness on [right/left], patient winces with percussion",
        
        skinInSepsis: "Warm and flushed (early shock) OR cool and mottled (late shock)"
      },
      
      workup: {
        urinalysis: "Pyuria with WBC casts (pathognomonic of pyelonephritis), bacteriuria",
        urineCulture: "Required - for directed therapy",
        bloodCultures: "Recommended for all hospitalized patients and those with sepsis",
        
        basicLabs: "CBC (leukocytosis), BMP (creatinine for kidney function), lactate if sepsis suspected",
        
        imaging: {
          notRoutine: "Not needed for uncomplicated pyelonephritis with good clinical response",
          indications: "Obtain CT abdomen/pelvis if: no improvement in 48-72h, suspected obstruction/abscess, severely ill, diabetic, transplant recipient",
          findings: "CT may show renal enlargement, perinephric stranding, hydronephrosis, abscess"
        }
      },
      
      hospitalizationIndications: [
        "Sepsis or critical illness",
        "Persistent high fever (>38.4°C/101°F) or pain despite initial treatment",
        "Marked debility or frailty",
        "Suspected urinary tract obstruction",
        "Unable to maintain oral hydration or take oral medications",
        "Concern about medication adherence",
        "Pregnancy"
      ],
      
      treatment: {
        outpatient: {
          noMDRrisk: {
            firstLine: "Fluoroquinolone (ciprofloxacin 500mg BID or levofloxacin 750mg daily) x 5-7 days",
            alternative: "TMP-SMX 160/800mg BID x 7-14 days (if susceptible)"
          },
          withMDRrisk: "Consider initial IV dose, await cultures, use broader-spectrum oral agents based on susceptibilities"
        },
        
        inpatient: {
          nonCritical: [
            "Ceftriaxone 1g IV daily",
            "Fluoroquinolone IV",
            "Add vancomycin if gram-positive cocci on Gram stain or MRSA risk"
          ],
          criticalOrObstruction: [
            "Piperacillin-tazobactam 4.5g IV q6h OR",
            "Cefepime 2g IV q8h OR",
            "Meropenem 1g IV q8h",
            "Plus vancomycin if MRSA risk"
          ]
        },
        
        duration: "5-14 days depending on agent and severity; shorter courses for fluoroquinolones"
      }
    },
    
    // Asymptomatic bacteriuria - DO NOT TREAT
    asymptomaticBacteriuria: {
      definition: "Positive urine culture WITHOUT urinary symptoms",
      management: "Do NOT treat (except in pregnancy or prior to urologic procedures)",
      exceptions: [
        "Pregnancy - screen and treat",
        "Prior to urologic procedures that breach mucosa"
      ],
      notIndication: [
        "Elderly patients",
        "Diabetic patients",
        "Catheterized patients (unless symptomatic)",
        "Spinal cord injury",
        "Nursing home residents"
      ]
    },
    
    // Common organisms
    commonOrganisms: {
      uncomplicated: {
        mostCommon: "Escherichia coli (75-95%)",
        other: ["Staphylococcus saprophyticus", "Klebsiella", "Proteus", "Enterococcus"]
      },
      
      complicated: {
        organisms: ["E. coli (still most common)", "Klebsiella", "Proteus", "Pseudomonas", "Enterococcus", "Staphylococcus"],
        MDRconcerns: ["ESBL-producing Enterobacterales", "Pseudomonas aeruginosa"]
      }
    }
  },

  // ============================================
  // DIFFERENTIAL DIAGNOSES BY FEVER SCENARIO
  // ============================================
  
  differentialsByScenario: {
    acuteFeverWithFocalSource: [
      "Pneumonia",
      "Urinary tract infection / pyelonephritis",
      "Cellulitis / skin and soft tissue infection",
      "Intra-abdominal infection",
      "Meningitis",
      "Septic arthritis",
      "Endocarditis"
    ],
    
    acuteFeverNoFocalSource: [
      "Viral syndrome",
      "Early bacterial infection (source not yet apparent)",
      "Drug fever",
      "Acute HIV infection",
      "Malaria (if travel history)",
      "Dengue / other arbovirus (if endemic exposure)"
    ],
    
    prolongedFeverFUO: [
      "Tuberculosis",
      "Endocarditis",
      "Occult abscess",
      "Lymphoma / leukemia",
      "Solid tumor",
      "Adult-onset Still's disease",
      "Giant cell arteritis",
      "Vasculitis",
      "Drug fever",
      "Factitious fever"
    ],
    
    feverImmunocompromised: [
      "Bacterial sepsis",
      "Invasive fungal infection (Candida, Aspergillus)",
      "Pneumocystis jirovecii pneumonia",
      "CMV disease",
      "Mycobacterial infection",
      "Reactivation of latent infection",
      "Malignancy"
    ],
    
    feverAfterTravel: [
      "Malaria (most important to exclude)",
      "Typhoid fever",
      "Dengue",
      "Hepatitis A/E",
      "Rickettsial infections",
      "Leptospirosis",
      "Traveler's diarrhea with bacteremia"
    ],
    
    feverWithRash: [
      "Viral exanthem",
      "Drug reaction",
      "Meningococcemia (petechiae/purpura)",
      "Endocarditis (Janeway lesions, splinter hemorrhages)",
      "Rickettsial infection",
      "Still's disease (salmon-colored evanescent rash)",
      "SLE",
      "Vasculitis"
    ],
    
    recurrentFevers: [
      "Familial Mediterranean fever",
      "Adult-onset Still's disease",
      "Malaria (tertian/quartan patterns)",
      "Periodic fever syndromes",
      "Relapsing infection (inadequately treated)",
      "Drug fever (intermittent exposure)"
    ]
  },

  // ============================================
  // NEGATIVE RESPONSE TEMPLATES
  // ============================================
  
  negativeResponses: {
    notSepsis: {
      vitalSigns: "No fever, blood pressure stable, heart rate normal",
      mentalStatus: "Alert and oriented, no confusion",
      appearance: "Appears well, not toxic-appearing",
      perfusion: "Warm extremities, normal capillary refill"
    },
    
    notPyelonephritis: {
      noFlankPain: "No back pain or flank discomfort",
      noCVAtenderness: "No costovertebral angle tenderness bilaterally",
      noSystemicSymptoms: "No fever, chills, or nausea",
      localizedToLower: "Symptoms limited to bladder - burning and frequency only"
    },
    
    notComplicated: {
      noFever: "No temperature elevation",
      noSystemic: "No chills, rigors, or body aches",
      noRiskFactors: "No diabetes, no kidney problems, not pregnant, no recent antibiotics",
      mildSymptoms: "Mild discomfort only, able to maintain oral intake"
    }
  },

  // ============================================
  // CLINICAL SCORING SYSTEMS
  // ============================================
  
  clinicalScores: {
    qSOFA: {
      name: "quick SOFA (qSOFA)",
      criteria: [
        "Respiratory rate ≥22/min",
        "Altered mentation (GCS <15)",
        "Systolic blood pressure ≤100 mmHg"
      ],
      interpretation: "≥2 points suggests increased risk of poor outcome in infection",
      note: "Screening tool only - does not define sepsis"
    },
    
    SOFA: {
      name: "Sequential Organ Failure Assessment",
      components: [
        "Respiration: PaO2/FiO2 ratio",
        "Coagulation: Platelet count",
        "Liver: Bilirubin",
        "Cardiovascular: MAP or vasopressor requirement",
        "Central Nervous System: Glasgow Coma Scale",
        "Renal: Creatinine or urine output"
      ],
      interpretation: "Acute change ≥2 points from baseline = organ dysfunction (sepsis definition)"
    },
    
    NEWS: {
      name: "National Early Warning Score",
      usedFor: "Early identification of clinical deterioration",
      components: ["RR", "SpO2", "Supplemental O2", "Temperature", "SBP", "HR", "Level of consciousness"]
    }
  },

  // ============================================
  // HELPER FUNCTIONS
  // ============================================
  
  helperFunctions: `
    // Get random response from array
    function getRandomResponse(responseArray) {
      return responseArray[Math.floor(Math.random() * responseArray.length)];
    }
    
    // Get HPI response for specific diagnosis and category
    function getHPIResponse(diagnosis, category) {
      const templates = FeverTemplates[diagnosis]?.hpiTemplates;
      if (!templates || !templates[category]) return null;
      
      const responses = templates[category];
      if (Array.isArray(responses)) {
        return getRandomResponse(responses);
      }
      // If nested object, return the object for further selection
      return responses;
    }
    
    // Get physical exam findings
    function getExamFindings(diagnosis) {
      return FeverTemplates[diagnosis]?.physicalExam || null;
    }
    
    // Get workup expectations
    function getWorkupExpected(diagnosis) {
      return FeverTemplates[diagnosis]?.workupExpected || 
             FeverTemplates[diagnosis]?.workup || null;
    }
    
    // Get differential diagnoses by scenario
    function getDifferentials(scenario) {
      return FeverTemplates.differentialsByScenario[scenario] || [];
    }
    
    // Check if feature suggests sepsis
    function isSepsisFeature(feature) {
      return FeverTemplates.clinicalDangerSigns.sepsisFeatures.some(
        f => f.toLowerCase().includes(feature.toLowerCase())
      );
    }
    
    // Check if UTI is complicated
    function isComplicatedUTI(features) {
      const complicatingFeatures = FeverTemplates.clinicalDangerSigns.complicatedUTIFeatures;
      return features.some(f => 
        complicatingFeatures.some(cf => cf.toLowerCase().includes(f.toLowerCase()))
      );
    }
  `
};

// Export for use in ReasonDx platform
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FeverTemplates;
}
