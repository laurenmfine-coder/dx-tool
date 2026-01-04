/**
 * ============================================================================
 * REASONDX HISTORY QUESTION LIBRARY
 * ============================================================================
 * 
 * Version: 1.0 | December 2024
 * 
 * A comprehensive library of history-taking questions organized by:
 * 1. Universal HPI Questions (OLDCARTS)
 * 2. Chief Complaint-Specific Questions
 * 3. Background/Social History Questions
 * 4. System-Specific ROS Questions
 * 
 * Each question includes:
 * - Multiple phrasings for matching student input
 * - Response templates based on case context
 * - Educational reasoning for why to ask
 * 
 * ============================================================================
 */

const HistoryQuestionLibrary = (function() {
    'use strict';

    // ============================================================
    // PART 1: UNIVERSAL HPI QUESTIONS (OLDCARTS)
    // These apply to ANY chief complaint
    // ============================================================
    
    const hpiQuestions = {
        onset: {
            id: 'onset',
            category: 'HPI',
            subcategory: 'OLDCARTS',
            displayText: 'When did this start?',
            alternatePhrasings: [
                'when did this start',
                'when did it start',
                'when did this begin',
                'how long have you had this',
                'how long has this been going on',
                'when did you first notice',
                'when did it first happen',
                'how long ago did this start',
                'when did the symptoms start',
                'when did you start feeling this way',
                'onset'
            ],
            tier: 'essential',
            reasoning: 'Onset helps distinguish acute vs chronic conditions and guides urgency of workup.',
            responseTemplates: {
                acute_minutes: [
                    "It started suddenly about {duration} ago.",
                    "Just {duration} ago - it came on all of a sudden.",
                    "Maybe {duration} ago. It hit me out of nowhere."
                ],
                acute_hours: [
                    "It started about {duration} ago.",
                    "This morning / last night - so maybe {duration} ago.",
                    "I'd say {duration} ago is when I first noticed it."
                ],
                acute_days: [
                    "It's been going on for about {duration} now.",
                    "Started {duration} ago and has been getting worse.",
                    "About {duration}. It started gradually and got worse."
                ],
                chronic_weeks: [
                    "It's been going on for {duration} now.",
                    "About {duration}. It comes and goes but has been worse lately.",
                    "I've had this for {duration}, but it's been worse the past few days."
                ],
                chronic_months: [
                    "This has been going on for {duration}.",
                    "Months now - probably {duration} or so.",
                    "It's been {duration}. I finally decided to come in."
                ]
            }
        },
        
        duration: {
            id: 'duration',
            category: 'HPI',
            subcategory: 'OLDCARTS',
            displayText: 'How long does each episode last?',
            alternatePhrasings: [
                'how long does it last',
                'how long does each episode last',
                'how long do the symptoms last',
                'is it constant or does it come and go',
                'does it come and go',
                'is it constant',
                'continuous or intermittent',
                'how long until it goes away',
                'duration of symptoms',
                'duration of episodes'
            ],
            tier: 'essential',
            reasoning: 'Duration helps differentiate conditions (e.g., TIA vs stroke, angina vs MI, biliary colic vs cholecystitis).',
            responseTemplates: {
                seconds: [
                    "Just a few seconds each time.",
                    "Very brief - maybe 10-20 seconds.",
                    "It comes and goes quickly, just seconds."
                ],
                minutes: [
                    "Usually lasts about {duration} minutes.",
                    "Each episode is maybe {duration} minutes.",
                    "Anywhere from {duration} to {duration2} minutes."
                ],
                hours: [
                    "It lasts for hours once it starts.",
                    "Usually about {duration} hours before it eases up.",
                    "The episodes last {duration} hours or so."
                ],
                constant: [
                    "It's been constant - doesn't really go away.",
                    "It's there all the time, just varies in intensity.",
                    "Pretty much constant since it started."
                ],
                intermittent: [
                    "It comes and goes throughout the day.",
                    "I'll have it for a while, then it eases up, then comes back.",
                    "It's not constant - I get breaks in between."
                ]
            }
        },
        
        priorEpisodes: {
            id: 'prior_episodes',
            category: 'HPI',
            subcategory: 'OLDCARTS',
            displayText: 'Have you ever had this before?',
            alternatePhrasings: [
                'have you ever had this before',
                'has this happened before',
                'have you experienced this before',
                'is this the first time',
                'first time this happened',
                'any previous episodes',
                'ever had anything like this',
                'similar episodes in the past',
                'recurrent symptoms',
                'had this before'
            ],
            tier: 'essential',
            reasoning: 'Prior episodes suggest recurrent condition, help establish pattern, and guide workup based on prior diagnoses.',
            responseTemplates: {
                firstTime: [
                    "No, this is the first time anything like this has happened.",
                    "Never. This is completely new for me.",
                    "No, I've never experienced anything like this before."
                ],
                similarBefore: [
                    "I've had something similar before, maybe {timeframe} ago.",
                    "Yes, this happened once before about {timeframe} ago.",
                    "I've had episodes like this a few times over the years."
                ],
                frequentRecurrence: [
                    "Yes, this happens to me pretty regularly.",
                    "I get this every few {frequency}.",
                    "It's happened many times before."
                ],
                worseThanBefore: [
                    "I've had this before, but never this bad.",
                    "Yes, but this time it's much worse than usual.",
                    "Similar thing has happened, but this is the worst episode."
                ],
                diagnosedCondition: [
                    "Yes, I have {condition} and this is a flare-up.",
                    "This is my {condition} acting up again.",
                    "I've been diagnosed with {condition}, this is another episode."
                ]
            }
        },
        
        location: {
            id: 'location',
            category: 'HPI',
            subcategory: 'OLDCARTS',
            displayText: 'Where exactly is the symptom located?',
            alternatePhrasings: [
                'where does it hurt',
                'where is the pain',
                'can you point to where it hurts',
                'where exactly',
                'which part',
                'location of pain',
                'where is it located',
                'show me where',
                'point to where',
                'what area'
            ],
            tier: 'essential',
            reasoning: 'Location helps narrow differential (e.g., RLQ pain suggests appendicitis, epigastric suggests PUD/pancreatitis).',
            responseTemplates: {
                localized: [
                    "Right here. *points to specific area*",
                    "It's very localized, right in this spot.",
                    "I can point right to it - it's here."
                ],
                diffuse: [
                    "It's kind of all over, hard to pinpoint.",
                    "The whole area hurts, not just one spot.",
                    "It's pretty spread out - here to here."
                ],
                migrating: [
                    "It started here, but now it's moved over here.",
                    "It's moved around. Started here, now it's here.",
                    "It was here at first but has moved."
                ]
            }
        },
        
        character: {
            id: 'character',
            category: 'HPI',
            subcategory: 'OLDCARTS',
            displayText: 'What does it feel like? Can you describe it?',
            alternatePhrasings: [
                'what does it feel like',
                'can you describe it',
                'describe the pain',
                'what kind of pain',
                'what type of pain',
                'character of pain',
                'quality of pain',
                'sharp or dull',
                'how would you describe it',
                'nature of the symptom'
            ],
            tier: 'essential',
            reasoning: 'Character helps distinguish etiology (sharp/pleuritic suggests PE/pericarditis, pressure/squeezing suggests cardiac, tearing suggests dissection).',
            responseTemplates: {
                sharp: [
                    "It's sharp, like a stabbing feeling.",
                    "Sharp and sudden, like being poked.",
                    "A sharp, knife-like pain."
                ],
                dull: [
                    "It's more of a dull ache.",
                    "Dull and constant, like a deep ache.",
                    "Not sharp - more of a dull, heavy feeling."
                ],
                pressure: [
                    "Like something's pressing down on me.",
                    "It feels like pressure or squeezing.",
                    "Like there's a weight on my chest."
                ],
                burning: [
                    "It's a burning sensation.",
                    "Feels like it's on fire.",
                    "A burning, hot feeling."
                ],
                cramping: [
                    "It's crampy, comes in waves.",
                    "Like muscle cramps.",
                    "Cramping and squeezing."
                ],
                tearing: [
                    "Like something is ripping or tearing.",
                    "A tearing sensation.",
                    "Feels like being torn apart."
                ],
                throbbing: [
                    "It throbs, like a heartbeat.",
                    "Pulsating, throbbing pain.",
                    "I can feel it pulsing."
                ]
            }
        },
        
        severity: {
            id: 'severity',
            category: 'HPI',
            subcategory: 'OLDCARTS',
            displayText: 'On a scale of 1-10, how severe is it?',
            alternatePhrasings: [
                'how bad is it',
                'rate the pain',
                'scale of 1 to 10',
                'one to ten',
                'how severe',
                'severity',
                'how intense',
                'worst pain ever',
                'pain scale',
                'how would you rate it'
            ],
            tier: 'essential',
            reasoning: 'Severity helps gauge urgency and track response to treatment. "Worst ever" is a red flag for conditions like SAH.',
            responseTemplates: {
                mild: [
                    "Maybe a 2 or 3 out of 10. It's uncomfortable but manageable.",
                    "Not too bad - I'd say a 3.",
                    "Mild, maybe a 2. It's more annoying than painful."
                ],
                moderate: [
                    "About a 5 or 6 out of 10.",
                    "I'd say a 6. It's definitely bothering me.",
                    "Moderate - maybe a 5. Can't ignore it."
                ],
                severe: [
                    "It's an 8 out of 10. Pretty bad.",
                    "Really bad - like an 8 or 9.",
                    "I'd say 8. It's hard to focus on anything else."
                ],
                worstEver: [
                    "10 out of 10. This is the worst pain I've ever felt.",
                    "Honestly, a 10. I've never felt anything this bad.",
                    "The worst pain of my life. Definitely a 10."
                ]
            }
        },
        
        radiation: {
            id: 'radiation',
            category: 'HPI',
            subcategory: 'OLDCARTS',
            displayText: 'Does it radiate or spread anywhere else?',
            alternatePhrasings: [
                'does it radiate',
                'does it spread',
                'does it go anywhere else',
                'does it move',
                'radiate anywhere',
                'spread to other areas',
                'travel anywhere',
                'go down your arm',
                'go to your back',
                'anywhere else'
            ],
            tier: 'essential',
            reasoning: 'Radiation pattern helps diagnose: arm/jaw radiation suggests cardiac, back radiation suggests aortic/pancreatic, leg radiation suggests radiculopathy.',
            responseTemplates: {
                none: [
                    "No, it stays in one place.",
                    "It doesn't spread anywhere.",
                    "Just right here, doesn't go anywhere else."
                ],
                toArm: [
                    "Yes, it goes down my left arm.",
                    "I feel it in my arm too.",
                    "It spreads to my arm and shoulder."
                ],
                toBack: [
                    "Yes, it goes straight through to my back.",
                    "I feel it in my back too.",
                    "It radiates to my back."
                ],
                toJaw: [
                    "I feel it in my jaw and neck.",
                    "It goes up to my jaw.",
                    "My jaw aches when it happens."
                ],
                toLeg: [
                    "It shoots down my leg.",
                    "Goes down my leg to my foot.",
                    "I feel it radiating down my leg."
                ],
                toShoulder: [
                    "It goes to my shoulder.",
                    "I feel it in my right shoulder.",
                    "Radiates to my shoulder blade."
                ]
            }
        },
        
        aggravating: {
            id: 'aggravating',
            category: 'HPI',
            subcategory: 'OLDCARTS',
            displayText: 'What makes it worse?',
            alternatePhrasings: [
                'what makes it worse',
                'anything make it worse',
                'what aggravates it',
                'triggers',
                'what brings it on',
                'worse with',
                'exacerbating factors',
                'does anything worsen it',
                'what triggers it',
                'makes the pain worse'
            ],
            tier: 'essential',
            reasoning: 'Aggravating factors are diagnostic: exertion suggests cardiac, breathing suggests pleuritic, eating suggests GI, movement suggests MSK.',
            responseTemplates: {
                exertion: [
                    "It gets worse when I exert myself - walking, climbing stairs.",
                    "Physical activity makes it worse.",
                    "Any kind of exertion brings it on."
                ],
                breathing: [
                    "It hurts more when I take a deep breath.",
                    "Breathing makes it worse, especially deep breaths.",
                    "Worse with breathing and coughing."
                ],
                eating: [
                    "Eating makes it worse, especially heavy meals.",
                    "It gets worse after I eat.",
                    "Worse after meals."
                ],
                movement: [
                    "Moving around makes it worse.",
                    "Certain movements aggravate it.",
                    "It hurts more when I move."
                ],
                position: [
                    "Lying flat makes it worse.",
                    "Worse in certain positions.",
                    "Bending over aggravates it."
                ],
                nothing: [
                    "Nothing specific seems to make it worse.",
                    "I haven't noticed anything that makes it worse.",
                    "It's just constant, nothing makes it worse."
                ],
                stress: [
                    "Stress definitely makes it worse.",
                    "When I'm anxious it gets worse.",
                    "Stressful situations trigger it."
                ]
            }
        },
        
        alleviating: {
            id: 'alleviating',
            category: 'HPI',
            subcategory: 'OLDCARTS',
            displayText: 'What makes it better?',
            alternatePhrasings: [
                'what makes it better',
                'anything help',
                'what relieves it',
                'does anything help',
                'alleviating factors',
                'what have you tried',
                'have you tried anything',
                'does rest help',
                'does medicine help',
                'makes the pain better'
            ],
            tier: 'essential',
            reasoning: 'Alleviating factors are diagnostic: rest helps angina, antacids help GERD, NSAIDs help MSK/pericarditis, position change helps pericarditis.',
            responseTemplates: {
                rest: [
                    "Resting helps. If I stop and sit down it gets better.",
                    "It improves when I rest.",
                    "Just taking it easy helps."
                ],
                medication: [
                    "I took some {medication} and it helped a little.",
                    "{medication} takes the edge off.",
                    "Pain medication helps somewhat."
                ],
                antacids: [
                    "Antacids help a lot.",
                    "Tums/Pepto seems to help.",
                    "It gets better after I take something for my stomach."
                ],
                position: [
                    "Leaning forward helps.",
                    "Sitting up makes it better.",
                    "Lying on my side helps."
                ],
                nothing: [
                    "Nothing seems to help.",
                    "I've tried everything but nothing works.",
                    "Nothing makes it better."
                ],
                nitro: [
                    "My nitroglycerin helps.",
                    "Nitro under the tongue helps.",
                    "It gets better after I take my nitro."
                ],
                inhaler: [
                    "My inhaler helps a little.",
                    "Using my rescue inhaler helps.",
                    "Albuterol makes it better."
                ]
            }
        },
        
        timing: {
            id: 'timing',
            category: 'HPI',
            subcategory: 'OLDCARTS',
            displayText: 'Is there any pattern to when it happens?',
            alternatePhrasings: [
                'any pattern',
                'when does it happen',
                'time of day',
                'worse at night',
                'worse in morning',
                'how often',
                'frequency',
                'timing of symptoms',
                'does it happen at certain times',
                'pattern to the symptoms'
            ],
            tier: 'helpful',
            reasoning: 'Timing patterns are diagnostic: morning stiffness suggests RA, nocturnal symptoms suggest GERD/CHF, postprandial suggests biliary.',
            responseTemplates: {
                morning: [
                    "It's worst in the morning when I wake up.",
                    "Mornings are the worst.",
                    "It's always bad when I first get up."
                ],
                night: [
                    "It's worse at night.",
                    "I notice it most at night when I'm trying to sleep.",
                    "Nighttime is when it bothers me most."
                ],
                afterMeals: [
                    "It happens after I eat.",
                    "Usually comes on after meals.",
                    "Eating seems to trigger it."
                ],
                noPattern: [
                    "No real pattern - it just happens randomly.",
                    "It's pretty unpredictable.",
                    "I haven't noticed any pattern."
                ],
                withActivity: [
                    "It happens when I'm active.",
                    "Activity brings it on.",
                    "Whenever I exert myself."
                ],
                constant: [
                    "It's pretty much constant now.",
                    "It's there all the time.",
                    "No pattern - it's always there."
                ]
            }
        },
        
        associated: {
            id: 'associated',
            category: 'HPI',
            subcategory: 'OLDCARTS',
            displayText: 'Any other symptoms along with this?',
            alternatePhrasings: [
                'any other symptoms',
                'anything else',
                'associated symptoms',
                'other problems',
                'what else have you noticed',
                'any other complaints',
                'accompanying symptoms',
                'besides this',
                'along with this',
                'other things you noticed'
            ],
            tier: 'essential',
            reasoning: 'Associated symptoms help build symptom constellation for diagnosis (e.g., chest pain + diaphoresis + nausea = high concern for ACS).',
            responseTemplates: {
                none: [
                    "No, just this.",
                    "This is the only thing bothering me.",
                    "No other symptoms."
                ],
                multiple: [
                    "Yes, I've also had {symptom1} and {symptom2}.",
                    "A few things actually - {symptom1}, {symptom2}.",
                    "Yes, I've noticed {symptom1} and {symptom2} too."
                ],
                vague: [
                    "I just feel generally unwell.",
                    "I don't feel right overall.",
                    "Something just feels off."
                ]
            }
        }
    };

    // ============================================================
    // PART 2: CHIEF COMPLAINT SPECIFIC QUESTIONS
    // ============================================================
    
    const chiefComplaintQuestions = {
        // CHEST PAIN
        chestPain: {
            exertional: {
                id: 'cp_exertional',
                category: 'ChiefComplaint',
                subcategory: 'Chest Pain',
                displayText: 'Does it come on with exertion or physical activity?',
                alternatePhrasings: [
                    'with exertion', 'with activity', 'when you exercise', 'climbing stairs',
                    'walking', 'physical activity', 'when active', 'exertional'
                ],
                tier: 'essential',
                linkedDx: ['ACS', 'Stable Angina', 'Aortic Stenosis'],
                reasoning: 'Exertional symptoms are classic for angina and help differentiate cardiac from non-cardiac causes.'
            },
            pleuritic: {
                id: 'cp_pleuritic',
                category: 'ChiefComplaint',
                subcategory: 'Chest Pain',
                displayText: 'Does it hurt more when you breathe deeply or cough?',
                alternatePhrasings: [
                    'deep breath', 'breathing', 'pleuritic', 'when you cough',
                    'inspiration', 'inhale', 'worse with breathing'
                ],
                tier: 'essential',
                linkedDx: ['Pulmonary Embolism', 'Pericarditis', 'Pneumonia', 'Pneumothorax', 'MSK'],
                reasoning: 'Pleuritic pain suggests pleural/pericardial involvement - PE, pericarditis, pneumonia, or MSK cause.'
            },
            diaphoresis: {
                id: 'cp_diaphoresis',
                category: 'ChiefComplaint',
                subcategory: 'Chest Pain',
                displayText: 'Have you been sweating more than usual?',
                alternatePhrasings: [
                    'sweating', 'sweaty', 'diaphoresis', 'clammy', 'cold sweat',
                    'breaking out in sweat', 'drenched in sweat'
                ],
                tier: 'essential',
                linkedDx: ['ACS', 'MI', 'PE'],
                reasoning: 'Diaphoresis with chest pain is a red flag for ACS - suggests significant sympathetic activation.'
            },
            positional: {
                id: 'cp_positional',
                category: 'ChiefComplaint',
                subcategory: 'Chest Pain',
                displayText: 'Does changing position affect the pain?',
                alternatePhrasings: [
                    'position', 'leaning forward', 'lying down', 'sitting up',
                    'positional', 'better sitting up', 'worse lying down'
                ],
                tier: 'helpful',
                linkedDx: ['Pericarditis', 'GERD', 'MSK'],
                reasoning: 'Positional relief (leaning forward) is classic for pericarditis; lying flat worsens GERD.'
            }
        },
        
        // SHORTNESS OF BREATH
        shortnessOfBreath: {
            onset_sob: {
                id: 'sob_onset',
                category: 'ChiefComplaint',
                subcategory: 'Dyspnea',
                displayText: 'How long have you been short of breath?',
                alternatePhrasings: [
                    'how long short of breath', 'when did breathing trouble start',
                    'how long have you had trouble breathing', 'when did you start feeling breathless',
                    'how long has your breathing been bad'
                ],
                tier: 'essential',
                linkedDx: ['PE', 'ADHF', 'Pneumonia', 'Asthma', 'COPD'],
                reasoning: 'Acute onset suggests PE, pneumothorax, or flash pulmonary edema; subacute suggests infection or CHF exacerbation.',
                responseTemplates: {
                    sudden: "It came on suddenly, just a few hours ago.",
                    gradual: "It's been getting worse over the past few days.",
                    chronic: "I've had breathing problems for a while, but it's gotten much worse recently."
                }
            },
            orthopnea: {
                id: 'sob_orthopnea',
                category: 'ChiefComplaint',
                subcategory: 'Dyspnea',
                displayText: 'Do you have trouble breathing when lying flat?',
                alternatePhrasings: [
                    'lying flat', 'orthopnea', 'how many pillows', 'sleep propped up',
                    'breathe better sitting', 'cant lie down', 'need to sit up'
                ],
                tier: 'essential',
                linkedDx: ['ADHF', 'Heart Failure'],
                reasoning: 'Orthopnea is highly specific for heart failure - pulmonary congestion worsens when supine.'
            },
            pnd: {
                id: 'sob_pnd',
                category: 'ChiefComplaint',
                subcategory: 'Dyspnea',
                displayText: 'Do you wake up at night gasping for air?',
                alternatePhrasings: [
                    'wake up gasping', 'pnd', 'paroxysmal nocturnal dyspnea',
                    'wake up cant breathe', 'nighttime breathing', 'wake up short of breath'
                ],
                tier: 'essential',
                linkedDx: ['ADHF', 'Heart Failure'],
                reasoning: 'PND is classic for heart failure - fluid redistribution during sleep causes pulmonary edema.'
            },
            legSwelling: {
                id: 'sob_edema',
                category: 'ChiefComplaint',
                subcategory: 'Dyspnea',
                displayText: 'Have you noticed any leg swelling?',
                alternatePhrasings: [
                    'leg swelling', 'ankle swelling', 'edema', 'feet swollen',
                    'swollen legs', 'fluid in legs', 'legs bigger'
                ],
                tier: 'essential',
                linkedDx: ['ADHF', 'DVT', 'Heart Failure'],
                reasoning: 'Leg edema with dyspnea suggests right heart failure or bilateral DVT/PE.'
            },
            wheezing: {
                id: 'sob_wheeze',
                category: 'ChiefComplaint', 
                subcategory: 'Dyspnea',
                displayText: 'Have you been wheezing?',
                alternatePhrasings: [
                    'wheezing', 'wheeze', 'whistling', 'noisy breathing',
                    'chest tight', 'chest tightness'
                ],
                tier: 'essential',
                linkedDx: ['Asthma', 'COPD', 'ADHF'],
                reasoning: 'Wheezing suggests bronchospasm (asthma/COPD) or cardiac asthma from CHF.'
            },
            coughProductive: {
                id: 'sob_cough',
                category: 'ChiefComplaint',
                subcategory: 'Dyspnea',
                displayText: 'Do you have a cough? Is it producing anything?',
                alternatePhrasings: [
                    'cough', 'coughing', 'productive cough', 'coughing up',
                    'sputum', 'phlegm', 'mucus', 'what color'
                ],
                tier: 'essential',
                linkedDx: ['Pneumonia', 'COPD', 'ADHF', 'PE'],
                reasoning: 'Productive cough with colored sputum suggests infection; pink frothy sputum suggests pulmonary edema; hemoptysis suggests PE.'
            }
        },
        
        // ABDOMINAL PAIN
        abdominalPain: {
            migration: {
                id: 'abd_migration',
                category: 'ChiefComplaint',
                subcategory: 'Abdominal Pain',
                displayText: 'Has the pain moved from where it started?',
                alternatePhrasings: [
                    'pain moved', 'migration', 'started somewhere else',
                    'moved to', 'shifted', 'pain traveled'
                ],
                tier: 'essential',
                linkedDx: ['Appendicitis'],
                reasoning: 'Classic appendicitis: periumbilical pain migrating to RLQ as inflammation localizes.'
            },
            bowelMovements: {
                id: 'abd_bowel',
                category: 'ChiefComplaint',
                subcategory: 'Abdominal Pain',
                displayText: 'Any changes in your bowel movements?',
                alternatePhrasings: [
                    'bowel movements', 'diarrhea', 'constipation', 'stool',
                    'going to bathroom', 'poop', 'passing gas', 'last bm'
                ],
                tier: 'essential',
                linkedDx: ['SBO', 'Diverticulitis', 'IBD', 'GI Bleed'],
                reasoning: 'Obstipation suggests SBO; diarrhea suggests infectious/inflammatory cause; blood suggests GI bleed.'
            },
            vomiting: {
                id: 'abd_vomit',
                category: 'ChiefComplaint',
                subcategory: 'Abdominal Pain',
                displayText: 'Have you been vomiting? What does it look like?',
                alternatePhrasings: [
                    'vomiting', 'throwing up', 'nausea', 'vomit',
                    'what comes up', 'bile', 'blood in vomit'
                ],
                tier: 'essential',
                linkedDx: ['SBO', 'Pancreatitis', 'Cholecystitis', 'Appendicitis'],
                reasoning: 'Bilious vomiting suggests distal obstruction; feculent suggests complete SBO; hematemesis suggests upper GI bleed.'
            },
            lastMeal: {
                id: 'abd_meal',
                category: 'ChiefComplaint',
                subcategory: 'Abdominal Pain',
                displayText: 'When and what did you last eat?',
                alternatePhrasings: [
                    'last meal', 'when did you eat', 'last ate',
                    'npo', 'nothing by mouth', 'eaten today'
                ],
                tier: 'helpful',
                linkedDx: ['All surgical causes'],
                reasoning: 'Important for NPO status if surgery needed; fatty meal may trigger biliary colic.'
            },
            fattyFood: {
                id: 'abd_fatty',
                category: 'ChiefComplaint',
                subcategory: 'Abdominal Pain',
                displayText: 'Does fatty or greasy food make it worse?',
                alternatePhrasings: [
                    'fatty food', 'greasy food', 'fried food',
                    'after eating fat', 'pizza', 'heavy meal'
                ],
                tier: 'essential',
                linkedDx: ['Cholecystitis', 'Biliary Colic', 'Pancreatitis'],
                reasoning: 'Fatty food triggers CCK release causing gallbladder contraction - classic for biliary disease.'
            }
        },
        
        // HEADACHE
        headache: {
            worstEver: {
                id: 'ha_worst',
                category: 'ChiefComplaint',
                subcategory: 'Headache',
                displayText: 'Is this the worst headache of your life?',
                alternatePhrasings: [
                    'worst headache', 'worst ever', 'thunderclap',
                    'worst of your life', 'sudden severe', 'never this bad'
                ],
                tier: 'essential',
                linkedDx: ['SAH'],
                reasoning: '"Worst headache of life" or thunderclap onset is classic for SAH until proven otherwise.'
            },
            thunderclap: {
                id: 'ha_thunderclap',
                category: 'ChiefComplaint',
                subcategory: 'Headache',
                displayText: 'Did it reach maximum intensity immediately?',
                alternatePhrasings: [
                    'sudden onset', 'immediately severe', 'thunderclap',
                    'came on suddenly', 'peaked immediately', 'instantaneous'
                ],
                tier: 'essential',
                linkedDx: ['SAH'],
                reasoning: 'Thunderclap headache (maximal at onset) is highly concerning for SAH.'
            },
            neckStiffness: {
                id: 'ha_neck',
                category: 'ChiefComplaint',
                subcategory: 'Headache',
                displayText: 'Do you have any neck stiffness?',
                alternatePhrasings: [
                    'stiff neck', 'neck pain', 'neck stiffness',
                    'cant bend neck', 'nuchal rigidity', 'meningismus'
                ],
                tier: 'essential',
                linkedDx: ['Meningitis', 'SAH'],
                reasoning: 'Nuchal rigidity suggests meningeal irritation from infection (meningitis) or blood (SAH).'
            },
            photophobia: {
                id: 'ha_photo',
                category: 'ChiefComplaint',
                subcategory: 'Headache',
                displayText: 'Does light bother your eyes?',
                alternatePhrasings: [
                    'light sensitivity', 'photophobia', 'light bother',
                    'bright lights', 'hurts to look at light'
                ],
                tier: 'essential',
                linkedDx: ['Meningitis', 'Migraine', 'SAH'],
                reasoning: 'Photophobia suggests meningeal irritation or migraine.'
            },
            aura: {
                id: 'ha_aura',
                category: 'ChiefComplaint',
                subcategory: 'Headache',
                displayText: 'Did you have any visual changes before it started?',
                alternatePhrasings: [
                    'aura', 'visual changes', 'flashing lights',
                    'zigzag lines', 'blind spots', 'warning signs'
                ],
                tier: 'helpful',
                linkedDx: ['Migraine with Aura'],
                reasoning: 'Aura (visual, sensory, or speech) preceding headache suggests migraine with aura.'
            }
        },
        
        // SYNCOPE
        syncope: {
            prodrome: {
                id: 'sync_prodrome',
                category: 'ChiefComplaint',
                subcategory: 'Syncope',
                displayText: 'Did you have any warning before you passed out?',
                alternatePhrasings: [
                    'warning signs', 'prodrome', 'before you fainted',
                    'felt it coming', 'warning', 'aura before'
                ],
                tier: 'essential',
                linkedDx: ['Vasovagal', 'Cardiac Syncope'],
                reasoning: 'Prodrome (lightheaded, warm, nausea) suggests vasovagal; no warning is concerning for cardiac cause.'
            },
            posture: {
                id: 'sync_posture',
                category: 'ChiefComplaint',
                subcategory: 'Syncope',
                displayText: 'What position were you in when it happened?',
                alternatePhrasings: [
                    'standing', 'sitting', 'lying down', 'position',
                    'what were you doing', 'standing up'
                ],
                tier: 'essential',
                linkedDx: ['Orthostatic', 'Vasovagal'],
                reasoning: 'Syncope while supine is concerning for cardiac cause; with standing suggests orthostatic.'
            },
            exertional: {
                id: 'sync_exertion',
                category: 'ChiefComplaint',
                subcategory: 'Syncope',
                displayText: 'Did it happen during exercise or exertion?',
                alternatePhrasings: [
                    'during exercise', 'exertional', 'while active',
                    'during activity', 'running', 'climbing stairs'
                ],
                tier: 'essential',
                linkedDx: ['Aortic Stenosis', 'HOCM', 'Arrhythmia'],
                reasoning: 'Exertional syncope is a red flag for structural heart disease (AS, HOCM) or arrhythmia.'
            },
            palpitations: {
                id: 'sync_palp',
                category: 'ChiefComplaint',
                subcategory: 'Syncope',
                displayText: 'Did you feel your heart racing before or after?',
                alternatePhrasings: [
                    'heart racing', 'palpitations', 'heart pounding',
                    'irregular heartbeat', 'heart flutter'
                ],
                tier: 'essential',
                linkedDx: ['Arrhythmia', 'SVT', 'VT'],
                reasoning: 'Palpitations with syncope suggest arrhythmic cause.'
            },
            familyHistorySuddenDeath: {
                id: 'sync_fhx',
                category: 'ChiefComplaint',
                subcategory: 'Syncope',
                displayText: 'Any family history of sudden death or heart problems at a young age?',
                alternatePhrasings: [
                    'family sudden death', 'family heart problems',
                    'relative died young', 'inherited heart'
                ],
                tier: 'essential',
                linkedDx: ['HOCM', 'Long QT', 'Brugada'],
                reasoning: 'Family history of sudden cardiac death suggests inherited channelopathy or cardiomyopathy.'
            }
        }
    };

    // ============================================================
    // PART 3: MATCHING FUNCTIONS
    // ============================================================
    
    /**
     * Find the best matching question from the library
     */
    function findMatchingQuestion(studentQuestion) {
        const q = studentQuestion.toLowerCase().trim();
        let bestMatch = null;
        let bestScore = 0;
        
        // Check HPI questions
        for (const [key, question] of Object.entries(hpiQuestions)) {
            const score = calculateMatchScore(q, question.alternatePhrasings);
            if (score > bestScore) {
                bestScore = score;
                bestMatch = { ...question, matchScore: score };
            }
        }
        
        // Check chief complaint questions
        for (const [category, questions] of Object.entries(chiefComplaintQuestions)) {
            for (const [key, question] of Object.entries(questions)) {
                const score = calculateMatchScore(q, question.alternatePhrasings);
                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = { ...question, matchScore: score };
                }
            }
        }
        
        // Return match if score is high enough
        if (bestScore >= 2) {
            return bestMatch;
        }
        
        return null;
    }
    
    /**
     * Calculate match score between student question and phrasings
     */
    function calculateMatchScore(question, phrasings) {
        let maxScore = 0;
        
        for (const phrasing of phrasings) {
            let score = 0;
            
            // Exact phrase match
            if (question.includes(phrasing)) {
                score = 5;
            } else {
                // Word-level matching
                const phrasingWords = phrasing.split(/\s+/);
                const questionWords = question.split(/\s+/);
                
                for (const word of phrasingWords) {
                    if (word.length > 2 && questionWords.some(qw => qw.includes(word) || word.includes(qw))) {
                        score += 1;
                    }
                }
            }
            
            maxScore = Math.max(maxScore, score);
        }
        
        return maxScore;
    }
    
    /**
     * Get a response for a matched question based on case context
     */
    function getResponse(matchedQuestion, caseContext) {
        if (!matchedQuestion || !matchedQuestion.responseTemplates) {
            return null;
        }
        
        // Try to determine appropriate response type from case context
        const templates = matchedQuestion.responseTemplates;
        const templateKeys = Object.keys(templates);
        
        // For now, return a random template - can be enhanced with case context
        const selectedKey = templateKeys[Math.floor(Math.random() * templateKeys.length)];
        const responses = templates[selectedKey];
        
        if (Array.isArray(responses)) {
            return responses[Math.floor(Math.random() * responses.length)];
        }
        
        return responses;
    }
    
    /**
     * Get all questions for a specific chief complaint
     */
    function getQuestionsForChiefComplaint(chiefComplaint) {
        const cc = chiefComplaint.toLowerCase();
        const questions = [];
        
        // Always include HPI questions
        for (const q of Object.values(hpiQuestions)) {
            questions.push(q);
        }
        
        // Add chief complaint specific questions
        if (cc.includes('chest') || cc.includes('heart')) {
            questions.push(...Object.values(chiefComplaintQuestions.chestPain || {}));
        }
        if (cc.includes('breath') || cc.includes('dyspnea') || cc.includes('sob')) {
            questions.push(...Object.values(chiefComplaintQuestions.shortnessOfBreath || {}));
        }
        if (cc.includes('abdom') || cc.includes('stomach') || cc.includes('belly')) {
            questions.push(...Object.values(chiefComplaintQuestions.abdominalPain || {}));
        }
        if (cc.includes('head')) {
            questions.push(...Object.values(chiefComplaintQuestions.headache || {}));
        }
        if (cc.includes('pass') || cc.includes('faint') || cc.includes('syncope') || cc.includes('black')) {
            questions.push(...Object.values(chiefComplaintQuestions.syncope || {}));
        }
        
        return questions;
    }

    // ============================================================
    // PUBLIC API
    // ============================================================
    
    return {
        hpiQuestions: hpiQuestions,
        chiefComplaintQuestions: chiefComplaintQuestions,
        findMatchingQuestion: findMatchingQuestion,
        getResponse: getResponse,
        getQuestionsForChiefComplaint: getQuestionsForChiefComplaint,
        calculateMatchScore: calculateMatchScore
    };

})();

// Export for use
if (typeof window !== 'undefined') {
    window.HistoryQuestionLibrary = HistoryQuestionLibrary;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HistoryQuestionLibrary;
}
