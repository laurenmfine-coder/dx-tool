/**
 * ReasonDx Headache/Head Pain Templates Library
 * Evidence-based templates derived from UpToDate articles
 * 
 * Sources:
 * - "Evaluation of the adult with nontraumatic headache in the emergency department"
 * - "Migraine in adults: Pathophysiology, clinical manifestations, and diagnosis"
 * - "Aneurysmal subarachnoid hemorrhage: Clinical manifestations and diagnosis"
 * - "Clinical features and diagnosis of acute bacterial meningitis in adults"
 * 
 * For use in ReasonDx clinical reasoning platform
 */

const HeadacheTemplates = {
  
  // ============================================================================
  // CLINICAL DANGER SIGNS - FROM UPTODATE
  // ============================================================================
  
  clinicalDangerSigns: {
    highRiskHistoricalFeatures: [
      "Sudden-onset headache (thunderclap) - maximal intensity within seconds to minutes",
      "Worst headache of life / First headache of this type",
      "New headache pattern or significant change from prior headaches",
      "Age >50 with new or progressively worsening headache",
      "Headache with exertion, sexual activity, or Valsalva",
      "Headache with fever and altered mental status",
      "Headache with seizure",
      "Headache with syncope or near-syncope at onset",
      "Immunocompromised patient with new headache",
      "Cancer patient with new headache",
      "Pregnant or postpartum patient with new headache",
      "Anticoagulated patient with new headache",
      "Family history of SAH (first or second degree relatives)",
      "Multiple family members with simultaneous headaches (CO poisoning)"
    ],
    
    highRiskExamFindings: [
      "Fever (makes migraine/tension headache highly unlikely)",
      "Altered level of consciousness",
      "Focal neurologic deficit (any new finding)",
      "Papilledema",
      "Meningismus (nuchal rigidity)",
      "Toxic appearance",
      "Severe hypertension (diastolic ≥120 mmHg)",
      "Pupillary asymmetry",
      "Third nerve palsy",
      "Horner syndrome (miosis, ptosis, anhidrosis)",
      "Abnormal extraocular movements",
      "Visual changes or loss",
      "Preretinal/subhyaloid hemorrhage (Terson syndrome)",
      "Temporal artery tenderness or decreased pulsations"
    ],
    
    cannotMissDiagnoses: [
      "Subarachnoid hemorrhage (SAH)",
      "Bacterial meningitis",
      "Intracranial mass lesion (tumor, abscess)",
      "Cerebral venous sinus thrombosis",
      "Carotid or vertebral artery dissection",
      "Acute angle-closure glaucoma",
      "Giant cell arteritis (temporal arteritis)",
      "Carbon monoxide poisoning",
      "Hypertensive encephalopathy",
      "Pituitary apoplexy",
      "Reversible cerebral vasoconstriction syndrome (RCVS)",
      "Idiopathic intracranial hypertension",
      "Pre-eclampsia/eclampsia"
    ]
  },

  // ============================================================================
  // DIAGNOSIS: SUBARACHNOID HEMORRHAGE (SAH)
  // ============================================================================
  
  subarachnoidHemorrhage: {
    description: "Aneurysmal SAH - sudden onset severe headache from ruptured intracranial aneurysm",
    prevalence: "~8% of ED thunderclap headache patients have SAH",
    
    hpiTemplates: {
      onset: [
        "I was just sitting at my desk when suddenly this headache hit me out of nowhere - it went from zero to the worst pain imaginable in seconds",
        "It happened so fast - I was fine one moment, then felt like something exploded in my head the next second",
        "I was in the middle of [activity] when it suddenly struck - reached maximum intensity almost instantly",
        "The pain came on like a thunderclap - immediately the worst headache I've ever had",
        "I was straining on the toilet when suddenly this devastating headache hit me all at once"
      ],
      
      quality: [
        "It feels like someone hit me in the back of the head with a baseball bat",
        "The pressure is unbearable - feels like my head is going to explode",
        "It's like something burst inside my skull",
        "The worst pain I've ever experienced in my entire life - nothing compares"
      ],
      
      severity: [
        "This is the worst headache of my entire life - 10 out of 10",
        "I've had headaches before but nothing even close to this - 10/10 easily",
        "The pain is absolutely unbearable - I can't even think straight",
        "I would do anything to make this stop - it's excruciating"
      ],
      
      location: [
        "It started in the back of my head and spread everywhere",
        "The whole head is throbbing but especially the back of my neck",
        "It's all over but worst at the base of my skull",
        "Feels like it's deep inside, affecting my whole head and neck"
      ],
      
      timing: [
        "It hasn't let up at all since it started [time] ago",
        "The intensity has been constant since onset - no relief whatsoever",
        "Started suddenly and has been relentless ever since",
        "It's been exactly the same terrible level since it hit me"
      ],
      
      aggravating: [
        "Any movement at all makes it worse - even moving my eyes",
        "Light makes it unbearable, and any noise is excruciating",
        "I can't bend forward or move my neck at all",
        "Coughing or straining makes it even more intense"
      ],
      
      alleviating: [
        "Nothing has helped - I've tried everything",
        "I took [pain medication] but it hasn't touched this",
        "Lying perfectly still in the dark is the only thing that makes it slightly more bearable",
        "I tried my usual headache medication but it had absolutely no effect"
      ],
      
      associatedSymptoms: [
        "I vomited several times right after it started",
        "My neck feels so stiff I can barely move it",
        "I almost passed out when it hit - everything went gray for a moment",
        "I've been nauseous ever since and the light is killing me",
        "I felt a strange sensation in my neck spreading down my back",
        "I'm seeing double and my vision seems off",
        "I felt like I was going to black out when it started",
        "I actually did lose consciousness briefly when it hit"
      ],
      
      settingAtOnset: [
        "I was just sitting doing paperwork when it struck",
        "It happened during sexual intercourse",
        "I was lifting something heavy when it started",
        "I was on the toilet straining when it hit",
        "I was exercising at the gym when it came on",
        "I was just waking up from sleep"
      ],
      
      priorSentinelHeadache: [
        "Actually, I had a similar but milder severe headache about two weeks ago that went away after a day",
        "A few days ago I had a sudden bad headache that was unusual for me, but it wasn't this severe",
        "No, nothing like this has ever happened before",
        "I've had some headaches lately but nothing that prepared me for this"
      ]
    },
    
    physicalExamFindings: {
      vitalSigns: [
        "Hypertension - BP 180/100 or higher (common)",
        "Tachycardia",
        "May have fever if hemorrhage is several days old"
      ],
      
      neuroExam: [
        "Alert but distressed, photophobic",
        "Nuchal rigidity / meningismus",
        "Cranial nerve findings may be present",
        "Third nerve palsy (especially posterior communicating artery aneurysm)",
        "Altered level of consciousness (variable)",
        "Focal neurologic deficit (depending on location)",
        "Terson syndrome (preretinal hemorrhages) - suggests worse prognosis"
      ],
      
      meningealSigns: [
        "Positive Kernig sign",
        "Positive Brudzinski sign",
        "Resistance to passive neck flexion",
        "Note: Meningismus may develop several hours after bleed"
      ],
      
      gradingScales: {
        huntHess: {
          grade1: "Asymptomatic or mild headache, slight nuchal rigidity",
          grade2: "Moderate to severe headache, nuchal rigidity, no deficit except cranial nerve palsy",
          grade3: "Drowsy, confused, or mild focal deficit",
          grade4: "Stupor, moderate to severe hemiparesis, possible early decerebrate rigidity",
          grade5: "Deep coma, decerebrate rigidity, moribund appearance"
        }
      }
    },
    
    diagnosticWorkup: {
      headCT: {
        sensitivity: "~100% within 6 hours of onset if expert reader",
        sensitivityDecline: "92% at 24 hours, 58% by day 5",
        findings: [
          "Blood in basal cisterns",
          "Blood in sylvian fissures, interhemispheric fissure",
          "Intracerebral extension (20-40%)",
          "Intraventricular blood (15-35%)",
          "Hydrocephalus"
        ],
        patterns: {
          aneurysmal: "Blood in basal cisterns, variable distribution",
          perimesencephalic: "Blood restricted to area in front of brainstem - often nonaneurysmal",
          convexal: "Blood at convexity - consider RCVS or cerebral amyloid angiopathy"
        }
      },
      
      lumbarPuncture: {
        indication: "Required if CT negative and SAH suspected (unless CT within 6 hours with expert interpretation)",
        classicFindings: [
          "Elevated opening pressure (mean ~350 mm H2O, normal <200)",
          "Elevated RBC count that does NOT diminish tube 1 to tube 4",
          "Xanthochromia (pink/yellow supernatant)"
        ],
        xanthochromia: {
          timing: "Detectable by 12 hours, lasts ≥2 weeks",
          note: "Absence does not exclude SAH if LP done <2 hours after onset",
          causes: "Hemoglobin degradation products - distinguishes true SAH from traumatic tap"
        },
        traumaticTapVsSAH: [
          "Clearing of RBCs between tubes suggests traumatic tap (but NOT reliable)",
          "Xanthochromia strongly suggests true SAH",
          "Elevated opening pressure suggests pathologic process",
          "If last tube has near-zero RBCs, traumatic tap more likely"
        ]
      },
      
      vascularImaging: {
        CTA: "Sens 83-98% for aneurysm detection, may miss <3mm aneurysms",
        MRA: "Similar sensitivity to CTA for aneurysm detection",
        DSA: "Gold standard - highest resolution for aneurysm detection"
      },
      
      ottawaSAHRule: {
        description: "Clinical decision rule for low-risk patients",
        criteria: [
          "Age ≥40 years",
          "Neck pain or stiffness",
          "Limited neck flexion on exam",
          "Witnessed loss of consciousness",
          "Onset during exertion",
          "Thunderclap headache (instantly peaking pain)"
        ],
        performance: "100% sensitivity, 15% specificity - any positive feature warrants investigation"
      }
    },
    
    differentialDiagnoses: [
      "Reversible cerebral vasoconstriction syndrome (RCVS)",
      "Intracerebral hemorrhage",
      "Cerebral venous sinus thrombosis",
      "Cervical artery dissection",
      "Pituitary apoplexy",
      "Hypertensive crisis",
      "Meningitis",
      "Primary thunderclap headache (diagnosis of exclusion)"
    ],
    
    riskFactorResponses: {
      familyHistory: [
        "Yes, my mother had a brain aneurysm that ruptured when she was 50",
        "My uncle died from a brain hemorrhage - they said it was an aneurysm",
        "My sister was diagnosed with an unruptured aneurysm a few years ago",
        "No family history of aneurysms or strokes that I know of"
      ],
      
      smoking: [
        "Yes, I've smoked for about 20 years",
        "I quit smoking 5 years ago but smoked for decades before",
        "No, I've never been a smoker"
      ],
      
      hypertension: [
        "Yes, I have high blood pressure but I've been pretty good about taking my medications",
        "I was told my blood pressure was high at my last check-up but I haven't started medication yet",
        "No, my blood pressure has always been normal"
      ],
      
      substanceUse: [
        "I use cocaine occasionally - last time was a few days ago",
        "I was using methamphetamines earlier today",
        "No recreational drugs",
        "Just alcohol socially, nothing else"
      ],
      
      priorAneurysm: [
        "Yes, I was actually told I had a small aneurysm that they were monitoring",
        "I had an aneurysm clipped/coiled several years ago",
        "No, I've never been told I have an aneurysm"
      ]
    }
  },

  // ============================================================================
  // DIAGNOSIS: BACTERIAL MENINGITIS
  // ============================================================================
  
  bacterialMeningitis: {
    description: "Acute bacterial infection of the leptomeninges",
    commonPathogens: {
      adults: ["Streptococcus pneumoniae", "Neisseria meningitidis", "Listeria monocytogenes (age >50 or immunocompromised)"],
      healthcareAssociated: ["Staphylococci", "Gram-negative bacilli"]
    },
    
    hpiTemplates: {
      onset: [
        "The headache started yesterday and has been getting progressively worse",
        "I've been feeling sick for about 2 days now - started with fever and chills, then this terrible headache developed",
        "It came on over several hours - started feeling feverish, then developed this pounding headache",
        "Woke up this morning feeling awful with fever and severe headache that keeps getting worse",
        "Been feeling like I'm coming down with something for a day or two, but this headache is now unbearable"
      ],
      
      quality: [
        "It's a constant, throbbing pain all over my head",
        "Feels like intense pressure inside my skull",
        "Pounding headache that won't let up",
        "My whole head is aching and feels heavy"
      ],
      
      severity: [
        "This is severe - probably an 8 or 9 out of 10",
        "It's the worst headache I've had while being sick like this",
        "Really intense - I can barely think straight",
        "Very severe and nothing seems to help it"
      ],
      
      timing: [
        "It's been constant for the past day, maybe getting slightly worse",
        "Started about 24 hours ago and has been relentless",
        "Been going on since yesterday afternoon without any relief"
      ],
      
      aggravating: [
        "Looking at any light makes it so much worse",
        "Every sound seems magnified and painful",
        "I can't move my neck without terrible pain",
        "Bending my head forward is excruciating"
      ],
      
      alleviating: [
        "Lying in a dark quiet room helps a little, but it's still there",
        "Nothing has really helped - ibuprofen barely touched it",
        "Keeping perfectly still makes it slightly more bearable"
      ],
      
      associatedSymptoms: {
        fever: [
          "I've had a high fever - my wife said it was 103°F earlier",
          "Been having fever and chills for about a day now",
          "Definitely running a fever - feeling very hot and cold alternating"
        ],
        
        neckStiffness: [
          "My neck is so stiff - I can barely move it",
          "It hurts to bend my chin toward my chest",
          "The back of my neck is killing me",
          "I can't turn my head without severe pain"
        ],
        
        mentalStatusChanges: [
          "I feel confused, like I can't think clearly",
          "My family says I've been acting strange and not making sense",
          "I keep losing track of what I'm saying",
          "I feel really out of it - hard to focus on anything"
        ],
        
        nausea: [
          "I've vomited several times",
          "Feel extremely nauseous - can't keep anything down",
          "The nausea is almost as bad as the headache"
        ],
        
        photophobia: [
          "The light is absolutely unbearable",
          "Even this dim room feels too bright",
          "I've had all the curtains closed because light makes it so much worse"
        ],
        
        rash: [
          "I noticed some red spots on my legs and arms that weren't there before",
          "There's a spreading rash - started as dots and now some areas look bruised",
          "Haven't noticed any rash",
          "My skin looks normal to me"
        ]
      },
      
      recentHistory: {
        infections: [
          "I had a bad sinus infection about a week ago",
          "Been dealing with an ear infection for the past few days",
          "Had what I thought was just a cold that started getting much worse",
          "I've had some dental problems lately - bad toothache"
        ],
        
        exposures: [
          "My college roommate was just diagnosed with meningitis",
          "There's been some kind of outbreak at my school",
          "A coworker was hospitalized with a serious infection last week",
          "No known sick contacts that I'm aware of"
        ]
      }
    },
    
    physicalExamFindings: {
      vitalSigns: [
        "Fever >38°C (present in 74% of cases)",
        "Tachycardia",
        "Hypotension if septic",
        "Tachypnea"
      ],
      
      generalAppearance: [
        "Toxic-appearing, acutely ill",
        "Altered mental status (Glasgow Coma Scale <14 in 71%)",
        "Photophobic - shielding eyes from light",
        "Lethargic or confused"
      ],
      
      meningealSigns: {
        nuchalRigidity: {
          description: "Resistance to passive neck flexion",
          sensitivity: "30%",
          specificity: "68%",
          note: "Less sensitive in elderly >60 years"
        },
        
        kernigSign: {
          description: "Inability to extend knee when hip flexed 90°",
          sensitivity: "5%",
          specificity: "95%"
        },
        
        brudzinskiSign: {
          description: "Spontaneous hip flexion with passive neck flexion",
          sensitivity: "5%",
          specificity: "95%"
        },
        
        joltAccentuationHeadache: {
          description: "Worsening headache with horizontal head rotation 2-3 times per second",
          note: "May be more sensitive than Kernig/Brudzinski, but studies show variable results"
        }
      },
      
      skinFindings: {
        petechiae: "Small, non-blanching red dots (especially N. meningitidis)",
        purpura: "Larger non-blanching lesions, palpable",
        note: "Rash present in 8-26% overall, 64% with meningococcal meningitis"
      },
      
      neurologicFindings: [
        "Cranial nerve palsies (9% of cases)",
        "Focal deficits (22% - aphasia, hemiparesis)",
        "Seizures (23%)",
        "Papilledema (4%)"
      ],
      
      classicTriad: {
        components: ["Fever", "Nuchal rigidity", "Altered mental status"],
        prevalence: "41% have all three",
        twoOfFourRule: "95% have at least 2 of: headache, fever, nuchal rigidity, altered mental status"
      }
    },
    
    diagnosticWorkup: {
      bloodTests: [
        "CBC with differential (leukocytosis or leukopenia)",
        "Blood cultures (positive in 50-90%)",
        "BMP, glucose (for CSF:serum ratio)",
        "Coagulation studies if petechiae/purpura",
        "Procalcitonin (supports bacterial etiology)"
      ],
      
      indicationsForCTBeforeLP: [
        "Immunocompromised state (HIV, transplant, immunosuppressive therapy)",
        "History of CNS disease (mass, stroke, focal infection)",
        "New-onset seizure within 1 week",
        "Papilledema",
        "Abnormal level of consciousness",
        "Focal neurologic deficit"
      ],
      
      CSFFindings: {
        typical: {
          openingPressure: "Elevated (>200 mm H2O)",
          WBC: ">1000/microL, predominantly neutrophils",
          glucose: "<40 mg/dL or CSF:serum ratio ≤0.4",
          protein: ">200 mg/dL",
          gramStain: "Positive in 50-90% (sensitivity 50-90%, specificity ~100%)"
        },
        
        byPathogen: {
          pneumococcus: "Gram-positive diplococci",
          meningococcus: "Gram-negative diplococci",
          hInfluenzae: "Small pleomorphic gram-negative coccobacilli",
          listeria: "Gram-positive rods and coccobacilli"
        }
      },
      
      keyPrinciple: "If CT will delay LP, start empiric antibiotics immediately after blood cultures"
    },
    
    riskFactorResponses: {
      immuneStatus: [
        "I'm on chemotherapy for cancer",
        "I take immunosuppressive medications for my transplant",
        "I have HIV - my last CD4 count was pretty low",
        "I take steroids for my autoimmune disease",
        "I'm not on any medications that affect my immune system"
      ],
      
      splenectomy: [
        "I had my spleen removed after a car accident years ago",
        "I've had my spleen removed due to blood condition",
        "No, I still have my spleen"
      ],
      
      recentProcedures: [
        "I had brain surgery about 2 weeks ago",
        "I have a shunt in my head for hydrocephalus",
        "I had a spinal tap done recently",
        "No recent procedures involving my head or spine"
      ],
      
      vaccinations: [
        "I got the meningitis vaccine when I went to college",
        "I'm not sure if I've ever been vaccinated for meningitis",
        "I know I've had my pneumonia shots",
        "I haven't had any vaccines in years"
      ],
      
      age: [
        "I'm 65 years old",
        "I'm in my 30s",
        "I'm elderly - in my 70s"
      ]
    }
  },

  // ============================================================================
  // DIAGNOSIS: MIGRAINE
  // ============================================================================
  
  migraine: {
    description: "Primary episodic headache disorder with severe headache, nausea, photophobia, phonophobia",
    prevalence: "12-15% of general population; F>M (17% vs 6%)",
    
    hpiTemplates: {
      prodrome: [
        "I could tell yesterday that a migraine was coming - I was really tired and irritable",
        "I've been craving sweets and yawning a lot since yesterday - that usually means a migraine is on its way",
        "My neck has been stiff since this morning, and I know that's my warning sign",
        "I noticed light was starting to bother me more than usual before the headache hit"
      ],
      
      onset: [
        "It started this morning and has gradually gotten worse over the past few hours",
        "I woke up with it - started mild but has been building for about 4 hours now",
        "It came on over about an hour, starting as a dull ache and now it's throbbing",
        "Started at work after lunch and has been progressively worsening"
      ],
      
      quality: [
        "It's a throbbing, pulsating pain",
        "Feels like my head is being squeezed and pounding at the same time",
        "It pulses with my heartbeat, especially when I move",
        "Intense throbbing on one side"
      ],
      
      severity: [
        "This is a 7 or 8 out of 10 - worse than my usual migraines",
        "About a 6 out of 10, which is typical for my migraines",
        "It's been getting worse - started at maybe a 4 and now it's at least an 8"
      ],
      
      location: [
        "It's on the right side of my head, behind my eye",
        "The left temple and forehead are the worst",
        "It started on one side but now the whole head hurts",
        "Mainly the right side of my head, radiating to my neck"
      ],
      
      duration: [
        "It's been going for about 6 hours now",
        "This one has lasted almost a whole day",
        "Usually my migraines last 4 to 8 hours - this one is typical so far",
        "It's been 12 hours and shows no signs of stopping"
      ],
      
      aggravating: [
        "Any physical activity makes it so much worse - even walking",
        "Light is unbearable - I've been hiding in a dark room",
        "Noise makes it worse - even normal conversation volume",
        "Bending over or moving my head quickly makes it pound",
        "The smell of food is making my nausea worse",
        "Going up stairs made me feel like my head would explode"
      ],
      
      alleviating: [
        "Lying down in a dark, quiet room helps some",
        "Cold compress on my forehead gives a little relief",
        "My medication usually helps if I catch it early enough",
        "Sleep is the only thing that really makes it go away",
        "Pressing on my temples gives temporary relief"
      ],
      
      associatedSymptoms: {
        nausea: [
          "I'm very nauseous - I've vomited twice already",
          "Feel queasy but haven't thrown up yet",
          "The nausea is almost as bad as the headache"
        ],
        
        photophobia: [
          "The light is killing me - I can barely open my eyes",
          "Even the screen on my phone is too bright",
          "I've had all the lights off and curtains closed"
        ],
        
        phonophobia: [
          "Every sound feels amplified and painful",
          "My kids' normal volume feels like shouting",
          "I'm wearing earplugs because any noise is unbearable"
        ],
        
        osmophobia: [
          "Smells are really bothering me - especially food smells",
          "My husband's cologne made me gag"
        ],
        
        cutaneousAllodynia: [
          "My scalp is so tender I can't even brush my hair",
          "Wearing my glasses hurts my head",
          "Even my shirt collar touching my neck is painful"
        ]
      },
      
      aura: {
        visual: [
          "Before the headache I saw zigzag lines that started small and grew larger over about 15-20 minutes",
          "I had a blind spot in my vision that gradually expanded with shimmering edges",
          "I saw flashing lights and then had a patch where I couldn't see clearly",
          "There were these scintillating lines like a fortress pattern that spread across my vision"
        ],
        
        sensory: [
          "My left hand went numb and tingly, then it spread up my arm before the headache started",
          "I had pins and needles in my face that lasted about 20 minutes",
          "One side of my face felt numb just before the headache hit"
        ],
        
        language: [
          "I was having trouble finding words right before the headache - my speech was mixed up",
          "I couldn't get my words out right for about 15 minutes before the pain started"
        ],
        
        motor: [
          "My arm felt weak and heavy before the headache - it's better now",
          "One side of my face drooped briefly before the pain started"
        ],
        
        timing: [
          "The visual symptoms lasted about 30 minutes then the headache started",
          "The aura came on gradually over about 10 minutes",
          "These symptoms went away as the headache got worse"
        ]
      },
      
      triggers: [
        "I didn't sleep well last night - that always triggers my migraines",
        "I skipped lunch today and that probably set it off",
        "It's that time of the month - my migraines always come with my period",
        "I had some red wine last night which is a trigger for me",
        "There was a lot of stress at work this week",
        "The weather changed dramatically today - the barometric pressure drop always gets me",
        "I've been staring at my computer screen all day",
        "I was out in bright sunlight without my sunglasses"
      ],
      
      priorHistory: [
        "I've had migraines since I was a teenager - usually 2-3 per month",
        "These started in my 20s and I get them more during stressful times",
        "I've had similar headaches before but they seem to be getting more frequent",
        "My mom has migraines too - I think I inherited them from her"
      ],
      
      medicationResponse: [
        "Sumatriptan usually works if I take it right away",
        "I took my triptan but it hasn't kicked in yet",
        "Excedrin used to help but doesn't seem to work as well anymore",
        "I've tried ibuprofen and acetaminophen with no relief",
        "I didn't have my medication with me when it started"
      ]
    },
    
    physicalExamFindings: {
      general: [
        "Patient appears uncomfortable, lying in darkened room",
        "Eyes closed, avoiding light",
        "Quiet, minimal movement",
        "Holding head or pressing temples"
      ],
      
      vitalSigns: [
        "Vital signs typically normal",
        "May have mild tachycardia from pain",
        "Blood pressure normal to mildly elevated from pain"
      ],
      
      neurologicExam: {
        critical: "Neurologic exam should be NORMAL between attacks",
        warning: "Any focal neurologic deficit is NOT typical migraine - requires urgent workup",
        typicalFindings: [
          "Cranial nerves intact",
          "Motor strength normal",
          "Sensory exam normal",
          "Coordination normal",
          "Gait normal"
        ]
      },
      
      duringAura: [
        "Visual field cut (if visual aura active)",
        "Sensory changes (if sensory aura active)",
        "All findings should resolve with aura"
      ]
    },
    
    diagnosticCriteria: {
      migraineWithoutAura: {
        A: "At least 5 attacks fulfilling criteria B-D",
        B: "Headache lasting 4-72 hours",
        C: "At least 2 of: unilateral, pulsating, moderate/severe intensity, aggravation by routine physical activity",
        D: "At least 1 of: nausea/vomiting, photophobia AND phonophobia",
        E: "Not better accounted for by another diagnosis"
      },
      
      migraineWithAura: {
        auraCharacteristics: [
          "At least one symptom spreads gradually over ≥5 minutes",
          "Two or more symptoms occur in succession",
          "Each symptom lasts 5-60 minutes",
          "At least one symptom is unilateral",
          "At least one symptom is positive (scintillations, tingling)",
          "Aura accompanied or followed within 60 minutes by headache"
        ]
      }
    },
    
    redFlags: [
      "First or worst headache of life",
      "Thunderclap onset",
      "New headache after age 50",
      "Headache with fever and meningismus",
      "New focal neurologic deficit that persists",
      "Headache with papilledema",
      "Headache that is progressively worsening",
      "Headache that differs from previous migraines",
      "Headache triggered by cough, exertion, or Valsalva",
      "Headache in immunocompromised or cancer patient"
    ],
    
    workup: {
      routine: "No imaging needed if typical migraine with normal exam",
      indicationsForImaging: [
        "Unexplained abnormal neurologic finding",
        "Atypical headache features",
        "Does not meet migraine criteria",
        "Additional risk factors for secondary headache"
      ],
      preferredImaging: "MRI with contrast for non-emergency; CT for emergency settings"
    }
  },

  // ============================================================================
  // DIAGNOSIS: TENSION-TYPE HEADACHE
  // ============================================================================
  
  tensionTypeHeadache: {
    description: "Most common primary headache - bilateral, non-pulsating, mild-moderate intensity",
    
    hpiTemplates: {
      onset: [
        "It started gradually this afternoon and has been steady",
        "I noticed it building up over a few hours",
        "It came on slowly after working at my desk all day",
        "Started this morning and has been pretty constant"
      ],
      
      quality: [
        "It feels like a tight band around my head",
        "More of a pressure or squeezing sensation",
        "Like my head is in a vice",
        "Dull, aching pressure on both sides"
      ],
      
      severity: [
        "It's about a 4 or 5 out of 10 - annoying but I can still function",
        "Mild to moderate - maybe a 5/10",
        "Not severe, just constant and bothersome"
      ],
      
      location: [
        "Both sides of my head, mostly the forehead",
        "All around my head like a band",
        "The temples and back of my head",
        "Mostly in the forehead and behind my eyes"
      ],
      
      aggravating: [
        "Stress definitely makes it worse",
        "Sitting at my computer for hours doesn't help",
        "It gets worse later in the day"
      ],
      
      alleviating: [
        "Taking a break and getting some fresh air helps",
        "Tylenol or ibuprofen usually takes the edge off",
        "Relaxing and massaging my temples helps some"
      ],
      
      associatedSymptoms: [
        "Maybe some mild light sensitivity, but not like a migraine",
        "Some neck tension and tightness in my shoulders",
        "No nausea or vomiting",
        "I can still eat and work, just uncomfortable"
      ]
    },
    
    physicalExamFindings: [
      "Vital signs normal",
      "Neurologic exam normal",
      "May have pericranial muscle tenderness",
      "No meningismus",
      "No papilledema"
    ],
    
    distinguishingFeatures: {
      vsMigraine: [
        "Bilateral (migraine typically unilateral)",
        "Non-pulsating (migraine is throbbing)",
        "Mild to moderate (migraine moderate to severe)",
        "Not aggravated by routine activity (migraine is)",
        "No nausea or vomiting (common in migraine)",
        "Light/sound sensitivity less prominent"
      ]
    }
  },

  // ============================================================================
  // DIAGNOSIS: CERVICAL ARTERY DISSECTION
  // ============================================================================
  
  cervicalArteryDissection: {
    description: "Carotid or vertebral artery dissection causing headache and stroke risk",
    
    hpiTemplates: {
      onset: [
        "The headache started after I was doing some intense exercise",
        "It came on after I had my neck manipulated at the chiropractor",
        "I had been turning my head a lot while painting the ceiling and then this headache started",
        "It started suddenly while I was doing yoga - during a neck stretch"
      ],
      
      quality: [
        "It's a sharp, constant pain on one side of my head and neck",
        "There's a pulsating quality to it behind my ear",
        "The pain radiates from my neck up into my head"
      ],
      
      location: [
        "Mainly on the right side of my neck and head",
        "It's centered around my temple and behind my eye",
        "The pain goes from my neck up the back of my head"
      ],
      
      associatedSymptoms: {
        hornerSyndrome: [
          "I noticed my right eyelid is drooping",
          "My pupil looks smaller on one side",
          "One side of my face seems drier - less sweaty"
        ],
        
        strokeSymptoms: [
          "I'm having some weakness on my left side",
          "My speech feels a bit slurred",
          "I've been having some vision problems",
          "Part of my face feels numb"
        ],
        
        pulsatileTinnitus: [
          "I can hear a whooshing sound in my ear",
          "There's a rhythmic pulsing sound in my head"
        ]
      },
      
      recentTrauma: [
        "I was in a minor car accident last week - just a fender bender",
        "I had aggressive chiropractic manipulation a few days ago",
        "I remember jerking my head suddenly while exercising",
        "No trauma that I can remember"
      ]
    },
    
    physicalExamFindings: {
      hornerSyndrome: {
        triad: ["Miosis (small pupil)", "Ptosis (drooping eyelid)", "Anhidrosis (decreased sweating)"],
        prevalence: "~38% carotid dissection, ~19% vertebral dissection"
      },
      
      neurologicDeficits: [
        "Hemiparesis",
        "Hemisensory loss",
        "Visual field deficit",
        "Ataxia (vertebral dissection)",
        "Cranial nerve palsies"
      ],
      
      other: [
        "Carotid bruit (may be present)",
        "Neck tenderness over affected vessel"
      ]
    },
    
    diagnosticWorkup: {
      imaging: [
        "CTA or MRA of head and neck (sensitivity 50-80%, specificity 67-99%)",
        "MRI may show intramural hematoma",
        "DSA if high suspicion and noninvasive imaging negative"
      ],
      
      keyPoint: "Most patients do NOT have thunderclap headache - only 3-9% do"
    }
  },

  // ============================================================================
  // DIAGNOSIS: GIANT CELL ARTERITIS
  // ============================================================================
  
  giantCellArteritis: {
    description: "Inflammatory vasculitis affecting medium/large arteries, primarily in elderly",
    ageGroup: "Almost exclusively >50 years old, peak 70-80",
    
    hpiTemplates: {
      onset: [
        "This headache started about 2 weeks ago and has been getting worse",
        "I've had a new type of headache for the past month that's different from anything before",
        "The headache has been gradually worsening over several weeks"
      ],
      
      quality: [
        "It's a throbbing, burning pain in my temple",
        "Feels like a constant ache, worse when I touch my scalp",
        "There's tenderness over my temple that I've never had before"
      ],
      
      location: [
        "Mainly in my right temple area",
        "Over both of my temples",
        "The sides of my head near my ears"
      ],
      
      associatedSymptoms: {
        jawClaudication: [
          "My jaw gets tired and hurts when I chew - I have to stop eating and rest",
          "When I eat, my jaw muscles ache and I have to take breaks",
          "Chewing has become painful after a few bites"
        ],
        
        visualSymptoms: [
          "I had an episode where I temporarily lost vision in one eye - it came back but scared me",
          "I've been having blurry vision on and off",
          "My vision seems to be getting worse, especially on one side",
          "I had complete vision loss in my right eye that hasn't come back"
        ],
        
        scalpTenderness: [
          "My scalp is so tender I can barely brush my hair",
          "It hurts to lay my head on the pillow"
        ],
        
        systemicSymptoms: [
          "I've been feeling generally unwell - fatigued and feverish",
          "I've lost about 10 pounds without trying",
          "I've had these strange fevers that come and go",
          "I've been feeling stiff and achy, especially in my shoulders and hips"
        ]
      }
    },
    
    physicalExamFindings: {
      temporalArtery: [
        "Temporal artery tender to palpation",
        "Decreased or absent temporal artery pulse",
        "Temporal artery nodularity or swelling",
        "Scalp tenderness over affected area"
      ],
      
      visual: [
        "May have anterior ischemic optic neuropathy",
        "Visual field defects",
        "Afferent pupillary defect"
      ],
      
      systemic: [
        "Low-grade fever",
        "Weight loss signs"
      ]
    },
    
    diagnosticWorkup: {
      labs: [
        "ESR (typically markedly elevated, often >100 mm/hr)",
        "CRP (elevated)",
        "CBC (may show normocytic anemia, thrombocytosis)"
      ],
      
      imaging: [
        "Temporal artery ultrasound may show 'halo sign'",
        "CT/MR angiography if large vessel involvement suspected"
      ],
      
      biopsy: "Temporal artery biopsy - gold standard for diagnosis",
      
      urgency: "Vision loss can be permanent - start steroids immediately if suspected while awaiting workup"
    }
  },

  // ============================================================================
  // DIAGNOSIS: CARBON MONOXIDE POISONING
  // ============================================================================
  
  carbonMonoxidePoisoning: {
    description: "Toxic exposure causing headache, typically multiple household members affected",
    
    hpiTemplates: {
      onset: [
        "The headache started this morning and my spouse has the same headache",
        "We all woke up with headaches - everyone in the house is affected",
        "The headache seems to get worse when I'm at home and better when I leave",
        "It started a few hours after we turned on the furnace for the first time this winter"
      ],
      
      quality: [
        "It's a dull, constant headache - feels like pressure",
        "Throbbing headache that won't go away",
        "Like a tight band around my head"
      ],
      
      timing: [
        "It started this morning and has been constant all day",
        "The headache improved when I went outside and came back when I returned home",
        "Worse in the morning, seems to lessen as the day goes on"
      ],
      
      associatedSymptoms: [
        "I also feel dizzy and confused",
        "I've been nauseous and threw up once",
        "My vision seems blurry",
        "I feel weak and tired",
        "I've been having trouble thinking clearly",
        "My chest feels tight"
      ],
      
      environmentalClues: [
        "We just had a new gas furnace installed",
        "We've been using a propane heater indoors",
        "There was a generator running in the garage",
        "We had a charcoal grill going inside because of the storm",
        "Our carbon monoxide detector has been beeping - we thought the battery was dead"
      ],
      
      multipleAffected: [
        "My whole family has headaches and feels sick",
        "The dog has been acting strange too - very lethargic",
        "Everyone at work on my floor has been complaining of headaches today"
      ]
    },
    
    physicalExamFindings: [
      "May appear normal or have subtle findings",
      "Classic 'cherry red' skin is rare and late finding",
      "Tachycardia",
      "Altered mental status in severe cases",
      "Cardiac ischemia/arrhythmia possible"
    ],
    
    diagnosticWorkup: {
      keyTest: "Carboxyhemoglobin (COHb) level via co-oximetry",
      note: "Standard pulse oximetry will be falsely normal",
      PaO2: "Arterial PaO2 is normal (measures dissolved O2, not hemoglobin saturation)",
      levels: {
        normal: "<3% non-smoker, up to 10% in smokers",
        symptomatic: ">10% typically symptomatic",
        severe: ">25-30% severe poisoning risk"
      }
    }
  },

  // ============================================================================
  // DIAGNOSIS: ACUTE ANGLE-CLOSURE GLAUCOMA
  // ============================================================================
  
  acuteAngleClosureGlaucoma: {
    description: "Ophthalmic emergency with acute elevated intraocular pressure",
    
    hpiTemplates: {
      onset: [
        "My eye started hurting suddenly a few hours ago, and now I have a terrible headache",
        "I was in a dark room watching a movie when my eye suddenly became very painful",
        "The headache started with severe eye pain on one side"
      ],
      
      quality: [
        "Deep aching pain in and around my eye",
        "Feels like pressure building inside my eye",
        "Throbbing pain behind my eyeball"
      ],
      
      location: [
        "Centered around my right eye but radiates to my forehead",
        "It's behind my eye on the left side",
        "One-sided headache worst around the eye"
      ],
      
      associatedSymptoms: [
        "I'm seeing halos around lights",
        "My vision has become very blurry in that eye",
        "I've been nauseous and vomited",
        "The eye looks red",
        "I can barely see out of the affected eye"
      ]
    },
    
    physicalExamFindings: {
      affectedEye: [
        "Conjunctival injection (red eye) with ciliary flush",
        "Cornea appears hazy or 'steamy' (normally clear)",
        "Pupil mid-dilated and fixed/sluggish",
        "Elevated intraocular pressure (often >40 mmHg, normal 10-21)"
      ],
      
      noDischarge: "No purulent discharge (distinguishes from conjunctivitis)"
    },
    
    diagnosticWorkup: {
      essential: "Intraocular pressure measurement (tonometry)",
      slitLamp: "Shows shallow anterior chamber, corneal edema",
      urgency: "Sight-threatening emergency - requires immediate ophthalmology consultation"
    }
  },

  // ============================================================================
  // DIAGNOSIS: IDIOPATHIC INTRACRANIAL HYPERTENSION (PSEUDOTUMOR CEREBRI)
  // ============================================================================
  
  idiopathicIntracranialHypertension: {
    description: "Elevated ICP without mass lesion, typically in obese women of childbearing age",
    
    hpiTemplates: {
      onset: [
        "The headaches have been getting progressively worse over the past few weeks",
        "I've been having daily headaches for about a month now",
        "Started as occasional headaches but now it's constant"
      ],
      
      quality: [
        "Feels like pressure inside my head",
        "A constant, dull ache that's always there",
        "Throbbing headache that's worse in the morning"
      ],
      
      aggravating: [
        "It gets much worse when I strain, cough, or bend over",
        "Lying down makes it worse",
        "Any Valsalva maneuver increases the pressure"
      ],
      
      associatedSymptoms: {
        visual: [
          "I've been having brief episodes where my vision goes gray or black",
          "I'm seeing double sometimes",
          "My peripheral vision seems to be getting worse",
          "I have this whooshing sound in my ears"
        ],
        
        tinnitus: [
          "I hear a pulsing sound in my ears, like my heartbeat",
          "There's a constant whooshing noise"
        ]
      }
    },
    
    physicalExamFindings: {
      key: "Papilledema (bilateral disc swelling)",
      visual: [
        "Visual field defects (enlarged blind spot)",
        "Decreased visual acuity if advanced",
        "Sixth nerve palsy (false localizing sign)"
      ]
    },
    
    diagnosticWorkup: {
      imaging: "MRI brain to rule out mass lesion, venous thrombosis",
      LP: "Opening pressure elevated (>250 mm H2O in adults), normal CSF composition",
      criteria: "Modified Dandy criteria - normal neuroimaging, elevated ICP, normal CSF, no other cause"
    }
  },

  // ============================================================================
  // NEGATIVE RESPONSE TEMPLATES - For Ruling Out Specific Diagnoses
  // ============================================================================
  
  negativeResponses: {
    notSAH: {
      onset: [
        "No, it came on gradually over a few hours",
        "It wasn't sudden - just slowly got worse",
        "I've had this same headache before"
      ],
      severity: [
        "It's bad but not the worst ever",
        "I've had worse headaches from my migraines"
      ]
    },
    
    notMeningitis: {
      fever: [
        "No fever that I've noticed",
        "I've checked my temperature - it's been normal"
      ],
      neck: [
        "My neck feels fine - no stiffness",
        "I can move my neck without any problem"
      ],
      mentalStatus: [
        "I feel completely lucid and clear-headed",
        "No confusion at all"
      ]
    },
    
    notArterialDissection: {
      trauma: [
        "No recent neck trauma or manipulation",
        "Haven't had any chiropractic work or injuries"
      ],
      horner: [
        "My eyes and face feel normal",
        "No drooping or vision changes"
      ]
    },
    
    notGCA: {
      age: [
        "I'm only 35 years old",
        "I'm in my 40s"
      ],
      temple: [
        "No tenderness when I touch my temples",
        "The temporal area feels normal"
      ],
      jaw: [
        "No pain when I chew",
        "Eating doesn't cause any jaw fatigue"
      ]
    },
    
    notGlaucoma: {
      eye: [
        "My eyes feel fine",
        "No eye pain at all"
      ],
      vision: [
        "Vision is clear in both eyes",
        "No halos around lights"
      ]
    },
    
    notCO: {
      household: [
        "No one else in my family is sick",
        "I'm the only one with a headache"
      ],
      environment: [
        "We don't use any gas appliances",
        "No recent furnace or heater use"
      ]
    }
  },

  // ============================================================================
  // RISK FACTOR RESPONSE TEMPLATES - General
  // ============================================================================
  
  riskFactorResponses: {
    headacheHistory: {
      migraines: [
        "Yes, I've had migraines for years - about 2-3 per month",
        "I get migraines occasionally, maybe once every few months",
        "No history of migraines",
        "I used to get migraines but they stopped years ago"
      ],
      
      priorHeadaches: [
        "This is exactly like my usual headaches",
        "This feels completely different from my normal headaches",
        "I rarely get headaches - this is unusual for me",
        "I've never had a headache this severe before"
      ]
    },
    
    medications: {
      anticoagulants: [
        "I take warfarin for my heart condition",
        "I'm on Eliquis for atrial fibrillation",
        "I take aspirin every day",
        "Not on any blood thinners"
      ],
      
      hormones: [
        "I take birth control pills",
        "I'm on hormone replacement therapy",
        "Not taking any hormones"
      ],
      
      analgesics: [
        "I take Excedrin almost daily for headaches",
        "I use ibuprofen a few times a week",
        "I rarely need to take pain medication"
      ]
    },
    
    immuneStatus: [
      "I have HIV and my CD4 count is low",
      "I'm on immunosuppressants for my transplant",
      "I'm going through chemotherapy right now",
      "My immune system is healthy as far as I know"
    ],
    
    cancerHistory: [
      "I was diagnosed with lung cancer 6 months ago",
      "I had breast cancer but it's been in remission for 5 years",
      "No history of cancer"
    ],
    
    pregnancyStatus: [
      "I'm 28 weeks pregnant",
      "I just had a baby 3 weeks ago",
      "No, I'm not pregnant and haven't been recently",
      "I had a baby 6 weeks ago and had pre-eclampsia during the pregnancy"
    ],
    
    substanceUse: {
      alcohol: [
        "I had some red wine last night",
        "I drink socially but nothing recently",
        "I don't drink alcohol"
      ],
      
      drugs: [
        "I used cocaine earlier today",
        "I smoke marijuana occasionally",
        "No recreational drug use"
      ],
      
      smoking: [
        "I smoke about a pack a day",
        "I quit smoking 2 years ago",
        "Never smoked"
      ]
    }
  },

  // ============================================================================
  // DIFFERENTIAL DIAGNOSES BY SCENARIO
  // ============================================================================
  
  differentialsByScenario: {
    thunderclapHeadache: [
      "Subarachnoid hemorrhage (SAH)",
      "Reversible cerebral vasoconstriction syndrome (RCVS)",
      "Cervical artery dissection",
      "Cerebral venous sinus thrombosis",
      "Pituitary apoplexy",
      "Hypertensive crisis",
      "Colloid cyst of third ventricle",
      "Spontaneous intracranial hypotension (rebound after CSF leak)",
      "Primary thunderclap headache (diagnosis of exclusion)"
    ],
    
    headacheWithFever: [
      "Bacterial meningitis",
      "Viral meningitis",
      "Encephalitis",
      "Brain abscess",
      "Sinusitis with intracranial extension",
      "Subarachnoid hemorrhage (late, as blood breaks down)",
      "Systemic infection with headache"
    ],
    
    headacheWithFocalDeficit: [
      "Stroke (ischemic or hemorrhagic)",
      "Brain tumor",
      "Brain abscess",
      "Subdural hematoma",
      "Migraine with aura (diagnosis of exclusion)",
      "Todd's paralysis post-seizure",
      "Arterial dissection with stroke"
    ],
    
    headacheWithVisualSymptoms: [
      "Migraine with visual aura",
      "Acute angle-closure glaucoma",
      "Giant cell arteritis",
      "Idiopathic intracranial hypertension",
      "Optic neuritis",
      "Pituitary apoplexy",
      "Cerebral venous sinus thrombosis"
    ],
    
    newHeadacheOver50: [
      "Giant cell arteritis",
      "Brain tumor (primary or metastatic)",
      "Subdural hematoma",
      "Cerebral venous sinus thrombosis",
      "Medication overuse headache",
      "Secondary headache from systemic illness"
    ],
    
    headacheInPregnancy: [
      "Pre-eclampsia/eclampsia",
      "PRES (posterior reversible encephalopathy syndrome)",
      "Cerebral venous sinus thrombosis",
      "Reversible cerebral vasoconstriction syndrome",
      "Pituitary apoplexy",
      "Post-dural puncture headache",
      "Primary headache (migraine, tension)"
    ],
    
    postureDependent: {
      worseStanding: [
        "Post-dural puncture headache",
        "Spontaneous intracranial hypotension (CSF leak)"
      ],
      worseLyingDown: [
        "Elevated intracranial pressure",
        "Brain tumor",
        "Idiopathic intracranial hypertension"
      ]
    }
  },

  // ============================================================================
  // WORKUP EXPECTATIONS
  // ============================================================================
  
  workupExpectations: {
    SAH: {
      headCT: {
        positive: "Hyperdense blood in basal cisterns, sylvian fissures, interhemispheric fissure",
        sensitivity: "~100% within 6 hours, 92% at 24 hours, declines thereafter",
        fisherGrade: "Grading of blood volume predicts vasospasm risk"
      },
      LP: {
        positive: "Elevated RBCs not clearing, xanthochromia, elevated opening pressure",
        timing: "Required if CT negative and SAH suspected (unless CT within 6 hours)"
      },
      CTA: "May show aneurysm, sensitivity 83-98%",
      DSA: "Gold standard for aneurysm detection"
    },
    
    meningitis: {
      bloodWork: {
        CBC: "Leukocytosis with left shift (or leukopenia in severe cases)",
        cultures: "Positive in 50-90%",
        procalcitonin: "Elevated supports bacterial etiology"
      },
      LP: {
        WBC: ">1000/microL, neutrophil predominant",
        glucose: "<40 mg/dL or CSF:serum ratio ≤0.4",
        protein: ">200 mg/dL",
        gramStain: "Positive in 50-90%; sensitivity 50-90%, specificity ~100%",
        openingPressure: "Elevated (mean ~350 mm H2O)"
      },
      CTIndications: "Immunocompromised, CNS disease history, new seizure, papilledema, AMS, focal deficit"
    },
    
    migraine: {
      imaging: "Not routinely needed if typical features with normal exam",
      indicationsForImaging: [
        "Abnormal neurologic exam",
        "Atypical features",
        "First severe headache",
        "Progressive worsening pattern",
        "Age >50 with new headache"
      ]
    },
    
    dissection: {
      CTA_MRA: "Sensitivity 50-80%, specificity 67-99%",
      DSA: "If noninvasive imaging negative but high suspicion"
    },
    
    GCA: {
      labs: {
        ESR: "Typically markedly elevated, often >100 mm/hr",
        CRP: "Elevated",
        CBC: "Normocytic anemia, thrombocytosis possible"
      },
      biopsy: "Temporal artery biopsy is gold standard"
    },
    
    COpoisoning: {
      COHb: "Carboxyhemoglobin via co-oximetry (standard pulse ox is falsely normal)",
      levels: "Normal <3% non-smoker; >10% typically symptomatic"
    },
    
    glaucoma: {
      IOP: "Elevated intraocular pressure (often >40 mmHg, normal 10-21)",
      slitLamp: "Shallow anterior chamber, corneal edema"
    }
  },

  // ============================================================================
  // HELPER FUNCTIONS
  // ============================================================================
  
  helpers: {
    getRandomResponse: function(responseArray) {
      if (!responseArray || responseArray.length === 0) return "";
      return responseArray[Math.floor(Math.random() * responseArray.length)];
    },
    
    getHPIResponse: function(diagnosis, category) {
      const templates = this[diagnosis]?.hpiTemplates?.[category];
      if (!templates) return null;
      if (Array.isArray(templates)) {
        return this.helpers.getRandomResponse(templates);
      }
      return templates;
    },
    
    getExamFindings: function(diagnosis) {
      return this[diagnosis]?.physicalExamFindings || null;
    },
    
    getWorkupResults: function(diagnosis) {
      return this.workupExpectations[diagnosis] || null;
    },
    
    getDifferentials: function(scenario) {
      return this.differentialsByScenario[scenario] || [];
    },
    
    getRiskFactorResponse: function(category, factor, isPositive) {
      const responses = this.riskFactorResponses[category]?.[factor];
      if (!responses) return null;
      // Return appropriate positive or negative response
      return this.helpers.getRandomResponse(responses);
    },
    
    isHighRiskFeature: function(feature) {
      return this.clinicalDangerSigns.highRiskHistoricalFeatures.includes(feature) ||
             this.clinicalDangerSigns.highRiskExamFindings.includes(feature);
    }
  }
};

// Export for use in ReasonDx platform
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HeadacheTemplates;
}
