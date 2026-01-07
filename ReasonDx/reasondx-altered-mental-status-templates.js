/**
 * ReasonDx Altered Mental Status Case Templates
 * Version 1.0 | December 2024
 * 
 * Based on UpToDate articles:
 * - "Diabetic ketoacidosis in adults: Treatment"
 * - "Diabetic ketoacidosis and hyperosmolar hyperglycemic state in adults: Clinical features, evaluation, and diagnosis"
 * - "Delirium: Evaluation and diagnosis"
 * - "Hypoglycemia in adults without diabetes mellitus: Determining the etiology"
 * - "Hypoglycemia in adults with diabetes mellitus"
 * 
 * This file provides structured answer templates for altered mental status presentations.
 */

const AlteredMentalStatusTemplates = (function() {
    'use strict';

    // ============================================================
    // DIFFERENTIAL DIAGNOSIS FOR ALTERED MENTAL STATUS
    // Key categories from UpToDate
    // ============================================================
    
    const lifeThreatening = [
        "Hypoglycemia",
        "Diabetic Ketoacidosis (DKA)",
        "Hyperosmolar Hyperglycemic State (HHS)",
        "Sepsis/Meningitis",
        "Stroke (ischemic or hemorrhagic)",
        "Intracranial hemorrhage",
        "Status epilepticus/Postictal state",
        "Hypertensive encephalopathy",
        "Drug overdose/Toxidrome",
        "Wernicke encephalopathy",
        "Hepatic encephalopathy",
        "Uremic encephalopathy",
        "Hypoxia/Hypercarbia",
        "Severe electrolyte abnormalities (Na, Ca)"
    ];

    const commonCauses = [
        "Delirium (multifactorial)",
        "Medication-induced",
        "Infection (UTI, pneumonia)",
        "Metabolic derangements",
        "Alcohol withdrawal",
        "Dementia with acute change"
    ];

    // ============================================================
    // DIABETIC KETOACIDOSIS (DKA) TEMPLATES
    // From UpToDate: DKA in adults - Clinical features and Treatment
    // ============================================================
    
    const dkaTemplates = {
        // Classic DKA presentation - evolves over 24 hours
        onset: [
            "It started yesterday. I was feeling really thirsty and peeing all the time.",
            "Over the past day, maybe a little longer. I've felt worse and worse.",
            "Started feeling sick yesterday. Throwing up since this morning.",
            "Past 24 hours I've been feeling terrible. Couldn't keep anything down."
        ],
        
        // Polyuria, polydipsia, weight loss - earliest symptoms
        associatedSymptoms: [
            "I've been so thirsty - drinking gallons but still thirsty. And peeing constantly.",
            "Drinking a lot of water, peeing every hour. My mouth is so dry.",
            "I've lost weight recently, maybe 10 pounds. Always thirsty and tired.",
            "Can't quench my thirst. Up all night going to the bathroom."
        ],
        
        // Nausea/vomiting - common in DKA, especially adults
        nauseaVomiting: [
            "I've been throwing up all morning. Can't keep anything down.",
            "Nauseous since yesterday, vomited maybe 4 or 5 times.",
            "My stomach has been upset. Threw up a few times.",
            "I feel sick to my stomach. Haven't been able to eat."
        ],
        
        // Abdominal pain - associated with severity of acidosis
        // Per UpToDate: 86% with bicarb ≤5, only 13% with bicarb ≥15
        abdominalPain: [
            "My stomach really hurts. It's all over, kind of crampy.",
            "Yeah, belly pain. Started with the vomiting.",
            "My abdomen is sore, especially in the middle.",
            "Stomach has been hurting since this morning."
        ],
        
        // Breathing changes - Kussmaul respirations
        breathing: [
            "I feel like I can't catch my breath. Taking deep breaths but still feel like I need air.",
            "My breathing feels different - deeper than usual.",
            "I've been breathing fast and deep. Can't seem to slow down.",
            "Feel short of breath even though I'm breathing hard."
        ],
        
        // Mental status changes - primarily with high osmolality
        mentalStatus: [
            "I've been feeling confused, foggy headed.",
            "My family says I'm not making sense.",
            "Hard to think clearly. Everything is fuzzy.",
            "I feel out of it. Can't concentrate."
        ],
        
        // Precipitating factors
        precipitants: {
            infection: [
                "I've had a cough and fever for a few days. Then this started.",
                "I think I have a UTI - burning when I pee. Then I got really sick.",
                "Had a cold that got worse. Now this."
            ],
            missedInsulin: [
                "I ran out of insulin a few days ago. Couldn't afford the refill.",
                "I stopped taking my insulin because I wasn't eating.",
                "Haven't been taking my insulin regularly.",
                "My insulin pump stopped working. I didn't have backup."
            ],
            newOnset: [
                "I don't have diabetes. At least, I didn't think I did.",
                "This is the first time anything like this has happened.",
                "I've never been diagnosed with diabetes."
            ],
            sglt2Inhibitor: [
                "I take a diabetes pill - I think it's called Jardiance or something.",
                "I'm on one of those newer diabetes medications.",
                "My doctor started me on a new diabetes medicine recently."
            ]
        },
        
        // Medical history relevant to DKA
        diabetesHistory: {
            type1: [
                "I have type 1 diabetes. Been on insulin since I was a teenager.",
                "I'm a type 1 diabetic. Use an insulin pump.",
                "Had diabetes since I was 12. Always on insulin."
            ],
            type2OnInsulin: [
                "Type 2 diabetes. On insulin now - it wasn't controlled with pills.",
                "I have diabetes. Started insulin a couple years ago.",
                "Diabetic for 15 years. On insulin and pills."
            ],
            type2NoInsulin: [
                "I have type 2 diabetes. Just take pills for it.",
                "Diabetic - take metformin and another pill.",
                "Yes, diabetes. Controlled with medication and diet."
            ]
        },
        
        // Negative responses for ruling out other diagnoses
        negatives: {
            chestPain: "No chest pain.",
            headache: "No headache.",
            focalWeakness: "No weakness on one side.",
            seizure: "No, I haven't had any seizures.",
            trauma: "No, I didn't hit my head or fall."
        }
    };

    // ============================================================
    // HYPEROSMOLAR HYPERGLYCEMIC STATE (HHS) TEMPLATES
    // From UpToDate: HHS develops more insidiously over days
    // More common in elderly, often type 2 diabetes
    // ============================================================
    
    const hhsTemplates = {
        // Insidious onset - days to a week
        onset: [
            "It's been going on for maybe a week. Just getting worse gradually.",
            "Several days now. My family noticed I was more confused yesterday.",
            "It came on slowly. Maybe 4-5 days of feeling bad.",
            "Been feeling off for about a week. Today is the worst."
        ],
        
        // Polyuria, polydipsia - often severe
        associatedSymptoms: [
            "I've been drinking so much water but still feel dehydrated.",
            "Urinating constantly. Probably lost a lot of weight.",
            "So thirsty all the time. Dry mouth. Peeing a lot.",
            "Can't drink enough. Feel dried out."
        ],
        
        // Neurologic symptoms - more common in HHS due to higher osmolality
        // Per UpToDate: effective Posm >320-330 causes neurologic deterioration
        neurologicSymptoms: [
            "I've been confused. My daughter says I'm not making sense.",
            "Feel very weak. Hard to walk. Dizzy.",
            "Having trouble speaking clearly. Words aren't coming out right.",
            "Very sleepy. Hard to stay awake. Confused.",
            "My vision has been blurry. Feel disoriented."
        ],
        
        // Mental status in HHS - can progress to coma
        mentalStatus: [
            "My family says I've been acting strange for a few days.",
            "I don't remember much of the past day or two.",
            "Been very drowsy. Hard to stay alert.",
            "Confused about where I am. What day is it?"
        ],
        
        // Less nausea/vomiting than DKA, less abdominal pain
        giSymptoms: [
            "No, not really vomiting. Just feel weak.",
            "A little nauseous but haven't thrown up.",
            "No stomach pain. Just feel terrible overall."
        ],
        
        // Precipitating factors - similar to DKA
        precipitants: {
            infection: [
                "I've had a cough for over a week. Got pneumonia before.",
                "Think I have a bladder infection. Burning when I pee.",
                "Been running a low fever. Maybe an infection."
            ],
            poorFluidIntake: [
                "I haven't been drinking much. Don't feel thirsty.",
                "Haven't been able to get enough fluids. Live alone.",
                "My caregiver was away. Didn't drink enough."
            ],
            medicationChange: [
                "Started a new medication recently - a steroid I think.",
                "Doctor changed my diabetes medicine.",
                "Taking a diuretic - water pill."
            ]
        },
        
        // Patient demographics - typically elderly
        demographics: {
            elderly: [
                "I'm 78. Live in assisted living.",
                "I'm 82. My daughter brought me in.",
                "I'm 71. Have some memory problems."
            ]
        }
    };

    // ============================================================
    // HYPOGLYCEMIA TEMPLATES
    // From UpToDate: Hypoglycemia in adults with/without diabetes
    // ============================================================
    
    const hypoglycemiaTemplates = {
        // Symptoms - neurogenic (autonomic) and neuroglycopenic
        onset: [
            "It came on suddenly - maybe 30 minutes ago.",
            "Started feeling shaky about an hour ago. Got worse.",
            "Suddenly felt weak and sweaty.",
            "It hit me all at once. Felt terrible."
        ],
        
        // Neurogenic/autonomic symptoms - tremor, palpitations, diaphoresis
        neurogenicSymptoms: [
            "I'm shaky and sweaty. Heart is racing.",
            "Trembling, feel anxious. Pounding heart.",
            "Sweating a lot. Feel nervous and jittery.",
            "Hands are shaking. Feel like my heart is beating fast.",
            "Cold and clammy. Tingling around my mouth."
        ],
        
        // Neuroglycopenic symptoms - confusion, dizziness, weakness
        neuroglycopenicSymptoms: [
            "I feel confused, can't think straight.",
            "Very dizzy and weak. Hard to concentrate.",
            "Feel drowsy. Hard to keep my eyes open.",
            "My thinking is foggy. Can't find my words.",
            "Feel like I might pass out."
        ],
        
        // Severe symptoms - seizure, coma
        severeSymptoms: [
            "I apparently had a seizure. Don't remember it.",
            "My wife says I passed out. I don't remember.",
            "They found me unresponsive. I blacked out."
        ],
        
        // Timing and triggers
        timing: {
            fasting: [
                "I haven't eaten since yesterday.",
                "I skipped breakfast and lunch.",
                "It happened after I fasted overnight.",
                "Haven't eaten all day."
            ],
            postprandial: [
                "It was about 2 hours after I ate.",
                "This happens after meals sometimes.",
                "Started about an hour after lunch.",
                "Always seems to happen after eating."
            ],
            exercise: [
                "I was exercising when it started.",
                "Happened during my workout.",
                "After I went for a run."
            ],
            insulin: [
                "I took my insulin but didn't eat.",
                "I might have taken too much insulin.",
                "Gave myself my shot then got busy and forgot to eat.",
                "Insulin pump may have given too much."
            ]
        },
        
        // Diabetes history for hypoglycemia
        diabetesHistory: {
            type1: [
                "I have type 1 diabetes. On insulin.",
                "Type 1 - use an insulin pump.",
                "Diabetic since childhood. On multiple insulin shots."
            ],
            type2OnInsulin: [
                "Type 2 diabetes. On insulin.",
                "Take insulin and glipizide for my diabetes.",
                "On insulin twice a day."
            ],
            type2OnSulfonylurea: [
                "I take glipizide for my diabetes.",
                "On glyburide - a diabetes pill.",
                "Take glimepiride every morning."
            ],
            noDiabetes: [
                "I don't have diabetes.",
                "Never been diagnosed with diabetes.",
                "My blood sugar has always been normal."
            ]
        },
        
        // Previous episodes
        priorEpisodes: [
            "This has happened before. Usually when I skip meals.",
            "I've had low blood sugar episodes several times.",
            "First time this has happened to me.",
            "It's been happening more and more lately."
        ],
        
        // Recovery with glucose
        recoveryWithGlucose: [
            "I felt better after I drank some juice.",
            "Someone gave me sugar and I started feeling better.",
            "Had some crackers and felt improved.",
            "The paramedics gave me something and I feel much better now."
        ],
        
        // Risk factors
        riskFactors: {
            renalDisease: [
                "I have kidney disease. On dialysis.",
                "My kidneys don't work well.",
                "Chronic kidney disease - stage 4."
            ],
            liverDisease: [
                "I have cirrhosis.",
                "Liver problems from hepatitis.",
                "My liver doesn't work well."
            ],
            alcohol: [
                "I drink quite a bit. Maybe a bottle of wine daily.",
                "I've been drinking heavily lately.",
                "Had a lot to drink last night."
            ],
            medications: [
                "I'm not sure what medications might cause this.",
                "Take several medications for my heart.",
                "On a lot of different medicines."
            ]
        }
    };

    // ============================================================
    // DELIRIUM TEMPLATES
    // From UpToDate: Delirium - Evaluation and diagnosis
    // ============================================================
    
    const deliriumTemplates = {
        // Key features: Acute change, fluctuating course, inattention
        // Information often from family/caregivers
        
        onset: [
            "He's been confused since yesterday. It came on suddenly.",
            "She was fine two days ago. Now she doesn't know where she is.",
            "This started overnight. He woke up very confused.",
            "It's been getting worse over the past day or two."
        ],
        
        // Fluctuating course - waxes and wanes
        fluctuation: [
            "Sometimes she seems okay, then she gets confused again.",
            "He was better this morning but got worse this evening.",
            "It comes and goes. Some moments he's lucid.",
            "Worse at night. A little better during the day."
        ],
        
        // Inattention
        attention: [
            "He can't focus on what I'm saying.",
            "She keeps getting distracted. Can't finish a sentence.",
            "Can't pay attention to anything.",
            "Keeps drifting off mid-conversation."
        ],
        
        // Disorganized thinking
        thinking: [
            "His thoughts are all jumbled. Not making sense.",
            "She's saying things that don't connect.",
            "Rambling, jumping from topic to topic.",
            "Confused about simple things."
        ],
        
        // Altered level of consciousness
        consciousness: {
            hypoactive: [
                "He's very drowsy. Hard to keep him awake.",
                "She's lethargic. Just wants to sleep.",
                "Very quiet and withdrawn. Not like him.",
                "Sleeping all the time. Hard to rouse."
            ],
            hyperactive: [
                "He's very agitated. Trying to pull out his IV.",
                "She keeps trying to get out of bed.",
                "Restless, can't sit still. Pulling at things.",
                "Combative. Fighting with the nurses."
            ],
            mixed: [
                "Sometimes agitated, sometimes very sleepy.",
                "Goes back and forth between restless and drowsy.",
                "Periods of agitation then crashes."
            ]
        },
        
        // Perceptual disturbances
        hallucinations: [
            "He says he sees people in the room who aren't there.",
            "She thinks there are bugs on the wall.",
            "Keeps talking to someone who isn't here.",
            "Seeing things. Pointing at the corner."
        ],
        
        // Sleep-wake disturbance
        sleep: [
            "He's been up all night. Sleeping during the day.",
            "Her sleep schedule is completely off.",
            "Awake at 3 AM, trying to leave the house.",
            "Day-night reversal. Wide awake at midnight."
        ],
        
        // Baseline function - important for diagnosis
        baselineFunction: [
            "Normally he's completely independent. Sharp as a tack.",
            "She has mild memory problems but nothing like this.",
            "He has dementia but this is much worse than usual.",
            "Completely normal before this started.",
            "Has some forgetfulness but is normally oriented."
        ],
        
        // Precipitating factors for delirium
        precipitants: {
            infection: [
                "She might have a urinary tract infection.",
                "He's had a cough and fever.",
                "Was diagnosed with pneumonia a few days ago."
            ],
            medications: [
                "They started a new medication in the hospital.",
                "She was given something for sleep.",
                "He's on a lot of pain medicine since surgery.",
                "Started an antibiotic a few days ago."
            ],
            surgery: [
                "Just had hip surgery two days ago.",
                "Post-operative from heart surgery.",
                "Had a procedure under anesthesia yesterday."
            ],
            hospitalization: [
                "Been in the hospital for a week now.",
                "This started after being admitted.",
                "First few days in hospital she was fine."
            ],
            alcoholWithdrawal: [
                "He drinks heavily. Hasn't had alcohol for 2 days.",
                "She stopped drinking when she came to the hospital.",
                "Usually drinks a lot. Cut off since admission."
            ],
            benzoWithdrawal: [
                "Takes Xanax daily. Hasn't had it in 2 days.",
                "Ran out of her anxiety medication.",
                "Usually takes Ativan. Hasn't had any."
            ],
            urinaryRetention: [
                "He hasn't been able to urinate.",
                "Catheter was removed and she hasn't voided.",
                "Complaining of bladder discomfort."
            ],
            constipation: [
                "Hasn't had a bowel movement in 5 days.",
                "Very constipated.",
                "Impacted - they had to disimpact him."
            ],
            pain: [
                "He's been in a lot of pain.",
                "Pain isn't being well controlled.",
                "She's uncomfortable but can't tell us where."
            ],
            environmentalFactors: [
                "No windows in the room. Lost track of day and night.",
                "Doesn't have her glasses or hearing aids.",
                "Transferred rooms three times.",
                "No visitors allowed. Very isolated."
            ]
        },
        
        // Risk factors
        riskFactors: {
            age: [
                "He's 85 years old.",
                "She's elderly - 78.",
                "He's 90. Has been getting frailer."
            ],
            dementia: [
                "She has Alzheimer's disease.",
                "He has dementia - diagnosed 3 years ago.",
                "Memory has been declining for years."
            ],
            multipleComorbidities: [
                "Has a lot of medical problems - heart failure, diabetes, kidney disease.",
                "Multiple chronic conditions.",
                "Very sick with many health issues."
            ]
        },
        
        // Negatives - important for ruling out other causes
        negatives: {
            focalNeuroDeficit: [
                "No weakness on one side.",
                "Arms and legs seem equal.",
                "No facial droop."
            ],
            headache: [
                "No headache that she mentioned.",
                "He didn't complain of head pain.",
                "No headache."
            ],
            fever: [
                "No fever that I know of.",
                "Temperature has been normal.",
                "Not running a fever."
            ],
            trauma: [
                "No falls or head injury.",
                "Didn't hit his head.",
                "No trauma."
            ]
        }
    };

    // ============================================================
    // ALCOHOL WITHDRAWAL TEMPLATES
    // Commonly associated with altered mental status
    // ============================================================
    
    const alcoholWithdrawalTemplates = {
        onset: [
            "He stopped drinking 2 days ago and now this.",
            "Hasn't had alcohol since coming to the hospital yesterday.",
            "Ran out of money for alcohol 3 days ago.",
            "Trying to quit. Last drink was 48 hours ago."
        ],
        
        drinkingHistory: [
            "Drinks a pint of vodka daily.",
            "Heavy drinker - a case of beer a day.",
            "Alcoholic for 20 years. Drinks all day.",
            "Drinks heavily. Can't go a day without it."
        ],
        
        symptoms: {
            mild: [
                "He's anxious and can't sleep. Hands are shaking.",
                "Tremulous, sweating. Heart racing.",
                "Jittery, nervous. Can't sit still."
            ],
            moderate: [
                "Seeing things. Very agitated.",
                "Confused, sweating profusely. Very anxious.",
                "Hallucinating. Thinks there are bugs everywhere."
            ],
            severe: [
                "Had a seizure. Very confused.",
                "Delirious. Doesn't know where he is. Fever.",
                "DTs - shaking, seeing things, heart racing, fever."
            ]
        },
        
        priorWithdrawal: [
            "This has happened before when he stopped drinking.",
            "Had DTs in the past - was in the ICU.",
            "Never had withdrawal this bad before.",
            "Has had seizures from alcohol withdrawal before."
        ]
    };

    // ============================================================
    // CLINICAL DECISION TOOLS
    // ============================================================
    
    const clinicalTools = {
        // Confusion Assessment Method (CAM) - for delirium
        // From UpToDate: Sensitivity 80%, Specificity 99%
        cam: {
            description: "Confusion Assessment Method - gold standard for delirium detection",
            features: [
                "1. Acute onset and fluctuating course",
                "2. Inattention",
                "3. Disorganized thinking",
                "4. Altered level of consciousness"
            ],
            interpretation: "Delirium present if Features 1 AND 2 AND (3 OR 4)"
        },
        
        // DKA severity classification
        dkaSeverity: {
            mild: {
                pH: ">7.25",
                bicarbonate: "15-18 mEq/L",
                mentalStatus: "Alert",
                anionGap: ">10"
            },
            moderate: {
                pH: "7.00-7.24",
                bicarbonate: "10-15 mEq/L",
                mentalStatus: "Alert/drowsy",
                anionGap: ">12"
            },
            severe: {
                pH: "<7.00",
                bicarbonate: "<10 mEq/L",
                mentalStatus: "Stupor/coma",
                anionGap: ">12"
            }
        },
        
        // HHS criteria
        hhsCriteria: {
            glucose: "≥600 mg/dL (33.3 mmol/L)",
            effectiveOsmolality: ">320 mOsm/kg",
            pH: ">7.30",
            bicarbonate: ">20 mEq/L",
            ketones: "Negative or trace"
        },
        
        // Whipple's triad for hypoglycemia
        whipplesTriad: {
            description: "Confirms pathologic hypoglycemia",
            criteria: [
                "1. Symptoms consistent with hypoglycemia",
                "2. Low plasma glucose measured when symptoms present",
                "3. Resolution of symptoms when glucose is raised"
            ]
        },
        
        // Hypoglycemia levels (from ADA/Endocrine Society)
        hypoglycemiaLevels: {
            level1: {
                glucose: "<70 mg/dL (3.9 mmol/L) but ≥54 mg/dL",
                action: "Alert - take action (carbohydrate, recheck)"
            },
            level2: {
                glucose: "<54 mg/dL (3.0 mmol/L)",
                action: "Serious - immediate action required"
            },
            level3: {
                description: "Requires assistance of another person",
                action: "Glucagon or IV dextrose"
            }
        }
    };

    // ============================================================
    // PHYSICAL EXAM FINDINGS
    // ============================================================
    
    const physicalExamFindings = {
        dka: {
            general: [
                "Appears ill, dehydrated, drowsy",
                "Deep, rapid breathing (Kussmaul respirations)",
                "Fruity odor on breath (acetone)"
            ],
            vitals: [
                "Tachycardia, hypotension if severe",
                "Tachypnea with deep respirations",
                "Normal or low temperature (may mask fever)"
            ],
            skin: [
                "Dry mucous membranes",
                "Poor skin turgor",
                "Flushed appearance"
            ],
            neuro: [
                "Drowsy but arousable (mild-moderate)",
                "Obtunded or comatose (severe)",
                "No focal deficits"
            ]
        },
        
        hhs: {
            general: [
                "Severely dehydrated",
                "Altered mental status prominent",
                "No Kussmaul respirations (minimal acidosis)"
            ],
            vitals: [
                "Tachycardia, often hypotensive",
                "Normal respiratory pattern",
                "May have low-grade fever"
            ],
            neuro: [
                "Lethargy to coma",
                "May have focal signs (hemiparesis, hemianopsia)",
                "Seizures possible"
            ]
        },
        
        hypoglycemia: {
            mild: [
                "Tremulous, diaphoretic",
                "Tachycardia, pale",
                "Anxious appearing"
            ],
            severe: [
                "Obtunded or unresponsive",
                "May be hypothermic",
                "Seizure activity possible"
            ]
        },
        
        delirium: {
            hypoactive: [
                "Drowsy, withdrawn",
                "Decreased psychomotor activity",
                "Poor eye contact"
            ],
            hyperactive: [
                "Agitated, restless",
                "Pulling at lines/tubes",
                "Hypervigilant or combative"
            ],
            general: [
                "Fluctuating attention",
                "Disorganized speech",
                "May have asterixis (metabolic)",
                "No focal neurologic deficits (usually)"
            ]
        },
        
        alcoholWithdrawal: {
            mild: [
                "Tremor, diaphoresis",
                "Tachycardia, hypertension",
                "Anxious, irritable"
            ],
            severe: [
                "Severe diaphoresis, hyperthermia",
                "Marked tachycardia and hypertension",
                "Visual hallucinations",
                "Severe confusion/delirium"
            ]
        }
    };

    // ============================================================
    // WORKUP TEMPLATES
    // ============================================================
    
    const workupFindings = {
        dka: {
            glucose: "Usually 350-500 mg/dL (can be >800 or normal with SGLT2i)",
            pH: "<7.30 (mild), <7.24 (moderate), <7.00 (severe)",
            bicarbonate: "<18 mEq/L",
            anionGap: "Elevated (usually >20)",
            ketones: "Positive (beta-hydroxybutyrate elevated)",
            sodium: "Usually low (correct for glucose: add 2 mEq/L per 100 mg/dL glucose above 100)",
            potassium: "Normal or high initially (total body depleted)",
            bun_cr: "Elevated (prerenal azotemia)"
        },
        
        hhs: {
            glucose: "Usually >600 mg/dL, often >1000",
            pH: ">7.30",
            bicarbonate: ">20 mEq/L",
            anionGap: "Normal or mildly elevated",
            ketones: "Negative or trace",
            osmolality: "Effective Posm >320 mOsm/kg",
            sodium: "Variable (may be normal or elevated despite hyperglycemia)",
            bun_cr: "Elevated"
        },
        
        hypoglycemia: {
            glucose: "<70 mg/dL (level 1), <54 mg/dL (level 2)",
            workupDuringEpisode: [
                "Glucose",
                "Insulin level",
                "C-peptide",
                "Beta-hydroxybutyrate",
                "Proinsulin",
                "Sulfonylurea/meglitinide screen"
            ]
        },
        
        delirium: {
            basicLabs: [
                "BMP (glucose, electrolytes, BUN, Cr)",
                "CBC with differential",
                "Urinalysis",
                "Liver function tests if indicated"
            ],
            additionalTesting: [
                "Blood/urine cultures if infection suspected",
                "Chest X-ray if respiratory symptoms",
                "Drug levels if applicable",
                "Ammonia if liver disease",
                "TSH if thyroid suspected",
                "ABG if hypoxia/hypercarbia suspected"
            ],
            imaging: "CT head if focal deficits, trauma, or unclear etiology",
            lp: "If infection suspected and no clear source"
        }
    };

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    
    function getRandomResponse(category) {
        if (Array.isArray(category)) {
            return category[Math.floor(Math.random() * category.length)];
        }
        return category;
    }

    function getTemplateForDiagnosis(diagnosis) {
        const diagnosisLower = diagnosis.toLowerCase();
        
        if (diagnosisLower.includes('dka') || diagnosisLower.includes('ketoacidosis')) {
            return dkaTemplates;
        } else if (diagnosisLower.includes('hhs') || diagnosisLower.includes('hyperosmolar')) {
            return hhsTemplates;
        } else if (diagnosisLower.includes('hypoglycemia') || diagnosisLower.includes('low blood sugar')) {
            return hypoglycemiaTemplates;
        } else if (diagnosisLower.includes('delirium') || diagnosisLower.includes('acute confusion')) {
            return deliriumTemplates;
        } else if (diagnosisLower.includes('alcohol withdrawal') || diagnosisLower.includes('dt')) {
            return alcoholWithdrawalTemplates;
        }
        
        return null;
    }

    // ============================================================
    // PUBLIC API
    // ============================================================
    
    return {
        lifeThreatening: lifeThreatening,
        commonCauses: commonCauses,
        dkaTemplates: dkaTemplates,
        hhsTemplates: hhsTemplates,
        hypoglycemiaTemplates: hypoglycemiaTemplates,
        deliriumTemplates: deliriumTemplates,
        alcoholWithdrawalTemplates: alcoholWithdrawalTemplates,
        clinicalTools: clinicalTools,
        physicalExamFindings: physicalExamFindings,
        workupFindings: workupFindings,
        getRandomResponse: getRandomResponse,
        getTemplateForDiagnosis: getTemplateForDiagnosis
    };

})();

// Export for use in ReasonDx
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AlteredMentalStatusTemplates;
}
if (typeof window !== 'undefined') {
    window.AlteredMentalStatusTemplates = AlteredMentalStatusTemplates;
}
