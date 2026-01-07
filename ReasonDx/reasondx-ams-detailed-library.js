/**
 * ReasonDx Altered Mental Status - Detailed HPI and Exam Library
 * Version 1.0 | December 2024
 * 
 * Companion to reasondx-altered-mental-status-templates.js
 * Contains expanded question-response pairs for history and physical exam
 */

const AlteredMentalStatusDetailedLibrary = (function() {
    'use strict';

    // ============================================================
    // EXPANDED HPI RESPONSES BY QUESTION CATEGORY
    // Organized by diagnosis, then by question type
    // ============================================================
    
    const hpiResponses = {
        
        // ========== DKA DETAILED RESPONSES ==========
        dka: {
            // Chief complaint variations
            chiefComplaint: [
                "I've been throwing up and feeling really confused.",
                "I feel terrible - nauseous, weak, can't think straight.",
                "My family brought me in. They said I wasn't making sense.",
                "I can't stop vomiting. Feel awful.",
                "Very weak, dizzy, stomach hurts, short of breath."
            ],
            
            // Onset - DKA typically 24 hours
            onset: [
                "Started yesterday. Got worse overnight.",
                "About a day ago. Woke up feeling terrible this morning.",
                "Maybe 24 hours. It's gotten progressively worse.",
                "Since yesterday afternoon. Much worse now."
            ],
            
            // Location of abdominal pain
            location: [
                "All over my belly, but worst in the middle.",
                "Around my stomach area, kind of diffuse.",
                "Upper abdomen mostly. Hard to pinpoint.",
                "Whole abdomen hurts."
            ],
            
            // Quality of symptoms
            quality: [
                "Crampy stomach pain. Feel nauseous constantly.",
                "Dull ache in my belly. Waves of nausea.",
                "Sharp at times, then just sore.",
                "Achy all over. Stomach is the worst."
            ],
            
            // Severity
            severity: [
                "Pretty bad - maybe 6 or 7 out of 10.",
                "Worst I've felt in a long time. 8 out of 10.",
                "The nausea is terrible. Pain is moderate.",
                "Very weak. Stomach pain is about a 5."
            ],
            
            // Associated symptoms - key for DKA
            associated: {
                polyuria: [
                    "I've been peeing constantly. Every 30 minutes.",
                    "Urinating all the time. Up all night.",
                    "Going to the bathroom way more than normal."
                ],
                polydipsia: [
                    "So thirsty. Can't drink enough water.",
                    "My mouth is completely dry. Drinking constantly.",
                    "Thirsty no matter how much I drink."
                ],
                nausea: [
                    "Very nauseous. Threw up several times.",
                    "Can't keep anything down.",
                    "Constant nausea since yesterday."
                ],
                vomiting: [
                    "Vomited maybe 5 or 6 times.",
                    "Throwing up everything. Even water.",
                    "Been vomiting since this morning."
                ],
                breathing: [
                    "Taking deep breaths but still feel like I need air.",
                    "Breathing fast. Can't catch my breath.",
                    "My breathing feels labored."
                ],
                mentalStatus: [
                    "Foggy headed. Hard to concentrate.",
                    "Confused. Can't think clearly.",
                    "Feel out of it."
                ],
                weightLoss: [
                    "Lost maybe 10 pounds recently.",
                    "Clothes are looser. Definitely lost weight.",
                    "My wife says I look thinner."
                ],
                fatigue: [
                    "Exhausted. No energy at all.",
                    "Extremely tired and weak.",
                    "Can barely get out of bed."
                ]
            },
            
            // Diabetes-specific questions
            diabetesHistory: [
                "Type 1 diabetic since I was 15. On insulin pump.",
                "Have type 1 diabetes. Multiple daily injections.",
                "Type 2 on insulin for the past 5 years.",
                "Diabetic. Take metformin and insulin.",
                "I don't have diabetes that I know of."
            ],
            
            insulinCompliance: [
                "I ran out of insulin 3 days ago.",
                "Haven't been taking it regularly. Cost too much.",
                "My pump malfunctioned. No backup.",
                "Stopped taking it because I wasn't eating.",
                "I've been taking it as prescribed."
            ],
            
            recentIllness: [
                "Had a bad cough for a few days before this.",
                "Think I have a UTI - burning when I pee.",
                "Had a fever a couple days ago.",
                "No recent illness that I know of."
            ],
            
            lastMeal: [
                "Haven't eaten since yesterday. Too nauseous.",
                "Tried to eat this morning but threw it up.",
                "Can't remember. Maybe yesterday afternoon."
            ],
            
            lastInsulin: [
                "Took it yesterday morning.",
                "Two days ago was my last dose.",
                "This morning, but I vomited it up.",
                "I've been taking it but maybe not enough."
            ],
            
            // Negatives for differential
            negatives: {
                chestPain: ["No chest pain.", "Chest feels fine."],
                headache: ["No headache.", "Head is okay."],
                focalWeakness: ["No, equal strength on both sides.", "No weakness on one side."],
                seizure: ["No seizures.", "Haven't had any seizures."],
                trauma: ["No falls or injuries.", "Didn't hit my head."],
                drugs: ["No recreational drugs.", "I don't use drugs."]
            }
        },
        
        // ========== HHS DETAILED RESPONSES ==========
        hhs: {
            chiefComplaint: [
                "My mother has been confused for several days.",
                "He's not acting right. Very drowsy and confused.",
                "She doesn't know where she is. Won't wake up properly.",
                "Found him very weak, couldn't stand up."
            ],
            
            onset: [
                "It's been coming on over the past week.",
                "Started about 4-5 days ago. Getting worse.",
                "Gradually over several days. Today is the worst.",
                "Maybe a week of not feeling well, but the confusion is new."
            ],
            
            associated: {
                polyuria: [
                    "She's been going to the bathroom constantly for days.",
                    "Urinating all the time. Wet the bed.",
                    "Been to the bathroom more times than I can count."
                ],
                polydipsia: [
                    "Drinking huge amounts of water but still thirsty.",
                    "Can't get enough fluids.",
                    "So thirsty. Mouth completely dry."
                ],
                weakness: [
                    "Very weak. Can barely walk.",
                    "Legs gave out. Fell trying to get up.",
                    "No strength at all."
                ],
                mentalStatus: [
                    "Confused. Doesn't recognize family members.",
                    "In and out. Sometimes lucid, then confused again.",
                    "Very drowsy. Hard to wake him up.",
                    "Talking nonsense. Very disoriented."
                ],
                visionChanges: [
                    "Says her vision is blurry.",
                    "Can't see well. Keeps squinting.",
                    "Complaining of vision problems."
                ],
                speech: [
                    "Words are slurred.",
                    "Having trouble speaking clearly.",
                    "Speech doesn't make sense."
                ]
            },
            
            fluidIntake: [
                "She hasn't been drinking much. Lives alone.",
                "Hot weather and he doesn't drink enough.",
                "Caregiver was away. Not sure if she had enough fluids.",
                "Hard to get her to drink anything."
            ],
            
            diabetesHistory: [
                "Type 2 diabetes for 20 years.",
                "Diabetic. Takes pills for it.",
                "On metformin and glipizide.",
                "Diabetic but not sure about medications.",
                "Not that we know of. Never been diagnosed."
            ],
            
            negatives: {
                nausea: ["No vomiting.", "Hasn't complained of nausea."],
                abdominalPain: ["No stomach pain.", "Belly seems okay."],
                breathing: ["Breathing normally.", "No trouble breathing."],
                headache: ["No headache mentioned.", "Doesn't complain of head pain."]
            }
        },
        
        // ========== HYPOGLYCEMIA DETAILED RESPONSES ==========
        hypoglycemia: {
            chiefComplaint: [
                "I feel shaky and sweaty. Something's wrong.",
                "I think my blood sugar is low.",
                "Feel like I'm going to pass out.",
                "My husband found me confused and sweating."
            ],
            
            onset: [
                "It came on suddenly about 30 minutes ago.",
                "Started feeling off about an hour ago, got worse.",
                "All of a sudden I felt terrible.",
                "Happened quickly. One minute I was fine."
            ],
            
            // Neurogenic (autonomic) symptoms
            neurogenicSymptoms: {
                tremor: [
                    "My hands are shaking badly.",
                    "Can't stop trembling.",
                    "Very shaky all over."
                ],
                diaphoresis: [
                    "I'm drenched in sweat.",
                    "Sweating profusely.",
                    "Cold and clammy."
                ],
                palpitations: [
                    "Heart is pounding.",
                    "Can feel my heart racing.",
                    "Heart beating really fast."
                ],
                anxiety: [
                    "Feel very anxious, like something bad is happening.",
                    "Nervous and jittery.",
                    "Panicky feeling."
                ],
                hunger: [
                    "Suddenly very hungry.",
                    "Stomach is growling. Need to eat.",
                    "Ravenously hungry."
                ],
                paresthesias: [
                    "Tingling around my mouth.",
                    "Numbness in my lips.",
                    "Pins and needles feeling."
                ]
            },
            
            // Neuroglycopenic symptoms
            neuroglycopenicSymptoms: {
                confusion: [
                    "Can't think straight.",
                    "Confused about where I am.",
                    "Foggy headed. Thoughts aren't clear."
                ],
                dizziness: [
                    "Very dizzy. Room is spinning.",
                    "Lightheaded. Feel like I might fall.",
                    "Unsteady on my feet."
                ],
                weakness: [
                    "Very weak. Legs feel like jelly.",
                    "No strength. Can barely stand.",
                    "Extremely weak."
                ],
                visualChanges: [
                    "Vision is blurry.",
                    "Seeing double.",
                    "Hard to focus my eyes."
                ],
                drowsiness: [
                    "Very sleepy. Hard to stay awake.",
                    "Can barely keep my eyes open.",
                    "Feel like I'm going to pass out."
                ],
                difficultyConcentrating: [
                    "Can't focus on what you're saying.",
                    "Mind keeps wandering.",
                    "Hard to pay attention."
                ],
                slurredSpeech: [
                    "Words aren't coming out right.",
                    "Trouble speaking clearly.",
                    "Speech feels thick."
                ],
                behaviorChanges: [
                    "My wife says I was acting strange.",
                    "Apparently I was combative. Don't remember.",
                    "Family says I wasn't making sense."
                ]
            },
            
            // Severe symptoms
            severeSymptoms: {
                seizure: [
                    "They said I had a seizure. I don't remember.",
                    "Apparently I was convulsing.",
                    "My wife saw me shaking all over."
                ],
                lossOfConsciousness: [
                    "I blacked out.",
                    "Found unresponsive by family.",
                    "Don't remember anything for about 20 minutes."
                ]
            },
            
            // Timing relative to meals/insulin
            timing: {
                fasting: [
                    "I haven't eaten since last night.",
                    "Skipped breakfast and lunch.",
                    "It's been over 12 hours since I ate."
                ],
                postprandial: [
                    "About 2-3 hours after eating.",
                    "This happens after meals sometimes.",
                    "Usually occurs a couple hours after I eat."
                ],
                afterExercise: [
                    "Was exercising when it started.",
                    "Happened during my workout.",
                    "After running for about an hour."
                ],
                afterInsulin: [
                    "Took my insulin but then didn't eat.",
                    "Might have given myself too much insulin.",
                    "Took my shot and then got busy. Forgot to eat."
                ]
            },
            
            // Diabetes and medication history
            diabetesMedications: [
                "On insulin - Lantus and Humalog.",
                "Take glipizide for my diabetes.",
                "On an insulin pump.",
                "Just metformin. That doesn't cause low sugar, does it?",
                "I don't have diabetes."
            ],
            
            // Prior episodes
            priorEpisodes: [
                "This has happened a few times before.",
                "First time this bad.",
                "I get low blood sugar fairly often.",
                "Never had this happen before."
            ],
            
            // Treatment already tried
            selfTreatment: [
                "Drank some orange juice. Felt a little better.",
                "Had some candy. Helped temporarily.",
                "Haven't been able to eat anything.",
                "Too confused to treat myself. Family called 911."
            ],
            
            // Risk factors
            riskFactors: {
                renal: [
                    "I have kidney disease. On dialysis.",
                    "Kidneys don't work well.",
                    "CKD stage 4."
                ],
                liver: [
                    "I have cirrhosis.",
                    "Liver problems.",
                    "Hepatitis affecting my liver."
                ],
                alcohol: [
                    "I drink heavily.",
                    "Had a lot to drink last night.",
                    "Don't eat much when I drink."
                ],
                malnutrition: [
                    "Haven't been eating well lately.",
                    "Lost my appetite.",
                    "Only been having liquids."
                ]
            }
        },
        
        // ========== DELIRIUM DETAILED RESPONSES ==========
        // Note: Responses often from family/caregiver
        delirium: {
            chiefComplaint: [
                "My father has been confused since yesterday.",
                "She's not acting like herself. Very confused.",
                "He woke up this morning not knowing where he was.",
                "Something's wrong with mom. She's seeing things."
            ],
            
            onset: [
                "It started suddenly yesterday.",
                "Noticed it this morning. Was fine last night.",
                "Over the past day or two.",
                "Came on quickly - within 24 hours."
            ],
            
            baselineFunction: [
                "Normally completely independent. Sharp as a tack.",
                "She has mild memory problems but nothing like this.",
                "He has dementia, but this is much worse than his baseline.",
                "Usually oriented and conversational.",
                "Lives alone. Manages everything herself."
            ],
            
            fluctuation: [
                "She goes in and out. Sometimes seems okay.",
                "Worse at night, better in the morning.",
                "Changes throughout the day.",
                "Some moments he's lucid, then confused again."
            ],
            
            attention: [
                "He can't focus on what I'm saying.",
                "Gets distracted in the middle of sentences.",
                "Can't follow a conversation.",
                "Keeps losing track."
            ],
            
            thinking: [
                "Her thoughts are jumbled.",
                "Not making sense. Ideas don't connect.",
                "Rambling, jumping from topic to topic.",
                "Says things that don't make sense."
            ],
            
            consciousness: {
                hypoactive: [
                    "Very drowsy. Hard to keep him awake.",
                    "Lethargic. Just wants to sleep all day.",
                    "Withdrawn. Not interacting.",
                    "Sleeping much more than usual."
                ],
                hyperactive: [
                    "Very agitated. Won't stay in bed.",
                    "Combative with the nurses.",
                    "Restless. Picking at things.",
                    "Trying to pull out his IV."
                ]
            },
            
            hallucinations: [
                "Seeing people who aren't there.",
                "Says there are bugs on the wall.",
                "Talks to someone invisible.",
                "Points at things and acts scared."
            ],
            
            sleepWake: [
                "Day and night are reversed.",
                "Up all night, sleeps during the day.",
                "Sleep schedule is completely off.",
                "Awake at 3 AM wanting to leave."
            ],
            
            precipitants: {
                infection: [
                    "She might have a UTI. Burning when she pees.",
                    "Had pneumonia diagnosed a few days ago.",
                    "Running a fever. Coughing.",
                    "Skin looks red and infected."
                ],
                medication: [
                    "Started a new medication recently.",
                    "They gave her something for pain.",
                    "On antibiotics. Maybe that's causing it.",
                    "Added a sleeping pill a few days ago."
                ],
                surgery: [
                    "Just had hip surgery 2 days ago.",
                    "Post-op from abdominal surgery.",
                    "Had anesthesia yesterday.",
                    "Recovering from cardiac surgery."
                ],
                hospital: [
                    "Been in the hospital a week now.",
                    "This started after admission.",
                    "Was fine the first few days.",
                    "The hospitalization seems to have triggered it."
                ],
                environmental: [
                    "Doesn't have her glasses or hearing aids.",
                    "Room doesn't have windows. Can't tell day from night.",
                    "Been moved to different rooms several times.",
                    "Very isolated. No visitors allowed."
                ],
                withdrawal: [
                    "He drinks heavily. Hasn't had alcohol for 2 days.",
                    "Takes Xanax daily. Ran out.",
                    "Usually on sleeping pills. Didn't get them here."
                ],
                painUrinaryConstipation: [
                    "In a lot of pain. Not well controlled.",
                    "Hasn't urinated in 12 hours.",
                    "Very constipated. No BM in 5 days.",
                    "Catheter was removed and she's uncomfortable."
                ]
            },
            
            riskFactors: {
                age: [
                    "She's 85 years old.",
                    "He's elderly - 82.",
                    "She's 78 with several health issues."
                ],
                dementia: [
                    "Has Alzheimer's disease.",
                    "Diagnosed with dementia 3 years ago.",
                    "Memory problems for years, but not this bad."
                ],
                comorbidities: [
                    "Has heart failure, diabetes, and kidney disease.",
                    "Multiple medical problems.",
                    "History of stroke."
                ]
            },
            
            negatives: {
                focalDeficit: [
                    "No weakness on one side.",
                    "Arms and legs seem equal.",
                    "No facial droop."
                ],
                headache: [
                    "No headache.",
                    "Doesn't complain of head pain.",
                    "Head is fine."
                ],
                trauma: [
                    "No falls recently.",
                    "Didn't hit his head.",
                    "No injuries."
                ],
                fever: [
                    "No fever that we know of.",
                    "Temperature has been normal.",
                    "Not running hot."
                ]
            }
        }
    };

    // ============================================================
    // PHYSICAL EXAM RESPONSE TEMPLATES
    // ============================================================
    
    const physicalExamResponses = {
        
        dka: {
            generalAppearance: [
                "Patient appears ill and dehydrated. Drowsy but responsive.",
                "Acutely ill-appearing. Deep, rapid respirations noted.",
                "Lethargic. Fruity odor on breath.",
                "Obtunded. Appears severely dehydrated."
            ],
            vitals: {
                heartRate: "Tachycardia - heart rate 112 bpm",
                bloodPressure: "Hypotensive - BP 92/58",
                respiratoryRate: "Tachypneic with deep respirations (Kussmaul) - RR 28",
                temperature: "Afebrile - 98.4°F (may be masking infection)",
                oxygenSaturation: "O2 sat 97% on room air"
            },
            heent: [
                "Dry mucous membranes. Cracked lips.",
                "Sunken eyes. Dry oral mucosa.",
                "Fruity/acetone odor on breath."
            ],
            cardiovascular: [
                "Tachycardic. Regular rhythm. No murmurs.",
                "Rapid heart rate. Weak pulses.",
                "Delayed capillary refill."
            ],
            respiratory: [
                "Deep, labored breathing (Kussmaul respirations).",
                "Clear to auscultation bilaterally despite tachypnea.",
                "No crackles or wheezes. Deep inspirations."
            ],
            abdominal: [
                "Diffuse tenderness without guarding or rebound.",
                "Soft but tender, especially epigastric.",
                "Hypoactive bowel sounds."
            ],
            skin: [
                "Poor skin turgor. Dry and warm.",
                "Decreased turgor. Tenting present.",
                "Flushed appearance."
            ],
            neurologic: [
                "Drowsy but arousable. Oriented to person only.",
                "GCS 13 (E3V4M6). No focal deficits.",
                "Lethargic. Moves all extremities equally.",
                "Obtunded. Withdraws to pain. No focal signs."
            ]
        },
        
        hhs: {
            generalAppearance: [
                "Elderly patient appears severely dehydrated and confused.",
                "Obtunded. Appears profoundly volume depleted.",
                "Lethargic, barely responsive to verbal stimuli."
            ],
            vitals: {
                heartRate: "Tachycardia - heart rate 118 bpm",
                bloodPressure: "Hypotensive - BP 88/52",
                respiratoryRate: "Normal to mildly elevated - RR 18",
                temperature: "Low-grade fever - 99.8°F",
                oxygenSaturation: "O2 sat 95% on room air"
            },
            heent: [
                "Very dry mucous membranes.",
                "Sunken eyes. Dry tongue.",
                "No fruity odor (unlike DKA)."
            ],
            cardiovascular: [
                "Tachycardic. Weak, thready pulses.",
                "Hypotension with position changes.",
                "Delayed capillary refill >3 seconds."
            ],
            respiratory: [
                "Breathing normally (no Kussmaul respirations).",
                "Clear lungs bilaterally.",
                "No respiratory distress."
            ],
            neurologic: [
                "Obtunded. GCS 10 (E2V3M5).",
                "Focal weakness on left side noted.",
                "Confused, disoriented to time, place, person.",
                "Seizure activity witnessed.",
                "Responds only to painful stimuli."
            ],
            skin: [
                "Severely decreased skin turgor.",
                "Very dry. Tenting for several seconds.",
                "Cool extremities."
            ]
        },
        
        hypoglycemia: {
            generalAppearance: {
                mild: [
                    "Patient appears anxious, tremulous, diaphoretic.",
                    "Awake and alert but shaky.",
                    "Pale and sweaty."
                ],
                moderate: [
                    "Confused appearance. Diaphoretic.",
                    "Drowsy, difficulty following commands.",
                    "Slurred speech, unsteady."
                ],
                severe: [
                    "Unresponsive. Profoundly diaphoretic.",
                    "Obtunded. GCS 8.",
                    "Post-ictal following witnessed seizure."
                ]
            },
            vitals: {
                heartRate: "Tachycardia - heart rate 108 bpm",
                bloodPressure: "Normal to slightly elevated - BP 138/88",
                respiratoryRate: "Normal - RR 16",
                temperature: "Possibly hypothermic - 97.1°F",
                oxygenSaturation: "O2 sat 98% on room air"
            },
            skin: [
                "Diaphoretic. Cold and clammy.",
                "Pale, sweaty.",
                "Cool, moist skin."
            ],
            neurologic: {
                mild: [
                    "Alert, oriented. Tremor present.",
                    "Anxious. Fine motor tremor.",
                    "Intact neurologically."
                ],
                moderate: [
                    "Confused. Disoriented to time.",
                    "Slurred speech. Ataxic gait.",
                    "Difficulty with concentration."
                ],
                severe: [
                    "Obtunded. GCS 9.",
                    "Unresponsive to verbal, withdraws to pain.",
                    "Post-ictal confusion following seizure."
                ]
            },
            cardiovascular: [
                "Tachycardic. Regular rhythm.",
                "Bounding pulses.",
                "No murmurs."
            ]
        },
        
        delirium: {
            generalAppearance: {
                hypoactive: [
                    "Elderly patient appears drowsy, withdrawn.",
                    "Lethargic. Minimal spontaneous movement.",
                    "Quiet, apathetic. Decreased eye contact."
                ],
                hyperactive: [
                    "Agitated. Trying to climb out of bed.",
                    "Restless. Picking at sheets and IV lines.",
                    "Combative when approached."
                ],
                mixed: [
                    "Alternates between drowsy and agitated.",
                    "Periods of agitation followed by somnolence."
                ]
            },
            vitals: {
                heartRate: "May be normal or tachycardic depending on etiology",
                bloodPressure: "Variable - depends on underlying cause",
                respiratoryRate: "Usually normal unless respiratory infection",
                temperature: "May have fever if infectious etiology",
                oxygenSaturation: "Variable - check for hypoxia as cause"
            },
            mental_status: [
                "Inattentive. Cannot focus on examiner.",
                "Disorganized thinking. Tangential responses.",
                "Disoriented to time, sometimes place.",
                "Fluctuating level of consciousness.",
                "Visual hallucinations reported."
            ],
            neurologic: [
                "No focal motor deficits.",
                "May have asterixis if metabolic etiology.",
                "Tremor possible if withdrawal etiology.",
                "Gait unsteady if able to ambulate."
            ],
            cam_assessment: [
                "Feature 1 (Acute onset, fluctuating): POSITIVE",
                "Feature 2 (Inattention): POSITIVE", 
                "Feature 3 (Disorganized thinking): POSITIVE",
                "Feature 4 (Altered consciousness): POSITIVE",
                "CAM POSITIVE - Delirium present"
            ]
        },
        
        alcoholWithdrawal: {
            generalAppearance: {
                mild: [
                    "Tremulous. Appears anxious.",
                    "Restless. Mild diaphoresis.",
                    "Awake, alert, mildly agitated."
                ],
                moderate: [
                    "Diaphoretic. Visibly tremulous.",
                    "Confused. Reporting visual hallucinations.",
                    "Agitated, difficult to redirect."
                ],
                severe: [
                    "Profoundly diaphoretic. Febrile.",
                    "Delirious. Severe agitation.",
                    "Florid hallucinations. Combative."
                ]
            },
            vitals: {
                mildModerate: {
                    heartRate: "Tachycardia - HR 110",
                    bloodPressure: "Hypertension - BP 165/95",
                    respiratoryRate: "Mildly elevated - RR 20",
                    temperature: "Low-grade fever possible"
                },
                severe: {
                    heartRate: "Marked tachycardia - HR 140",
                    bloodPressure: "Severe hypertension - BP 190/110",
                    respiratoryRate: "Elevated - RR 24",
                    temperature: "Fever - 102.5°F"
                }
            },
            neurologic: [
                "Coarse tremor of hands.",
                "Hyperreflexia.",
                "Hallucinations - visual (insects, animals).",
                "Disoriented. Confused.",
                "Seizure activity possible."
            ],
            skin: [
                "Profuse diaphoresis.",
                "Flushed.",
                "Warm to touch."
            ]
        }
    };

    // ============================================================
    // PUBLIC API
    // ============================================================
    
    return {
        hpiResponses: hpiResponses,
        physicalExamResponses: physicalExamResponses
    };

})();

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AlteredMentalStatusDetailedLibrary;
}
if (typeof window !== 'undefined') {
    window.AlteredMentalStatusDetailedLibrary = AlteredMentalStatusDetailedLibrary;
}
