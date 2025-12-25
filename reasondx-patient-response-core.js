/**
 * ============================================================================
 * REASONDX PATIENT RESPONSE SYSTEM - CORE
 * ============================================================================
 * 
 * Version: 2.0 | December 2024
 * 
 * This single file contains everything needed to add intelligent patient
 * responses to ReasonDx. It includes:
 * 
 * 1. Question Matching Engine - Detects what student is asking
 * 2. Background Response Library - Social history, PMH, allergies, etc.
 * 3. UI Integration - Hooks into existing ReasonDx interface
 * 
 * INSTALLATION:
 * Add this script tag to index.html AFTER the existing ReasonDx scripts:
 *   <script src="js/reasondx-patient-response-core.js"></script>
 * 
 * The system auto-initializes and wraps the existing matchHistoryQuestion()
 * function to provide fallback responses when no case-specific answer exists.
 * 
 * ============================================================================
 */


// ============================================================================
// PART 1: QUESTION MATCHING ENGINE
// ============================================================================

const PatientResponseEngine = (function() {
    'use strict';

    /**
     * Question patterns map keywords to response categories
     */
    const questionPatterns = {
        // OLDCARTS - History of Present Illness
        onset: {
            keywords: ['when', 'start', 'began', 'begin', 'how long', 'first notice', 'onset', 'happen'],
            phrases: ['when did', 'how long ago', 'when did this', 'when did it', 'tell me when'],
            priority: 1
        },
        location: {
            keywords: ['where', 'location', 'which part', 'point', 'show me', 'localize'],
            phrases: ['where does it', 'where is the', 'show me where', 'point to', 'which area'],
            priority: 1
        },
        duration: {
            keywords: ['how long', 'duration', 'last', 'constant', 'continuous', 'intermittent'],
            phrases: ['how long does', 'is it constant', 'come and go', 'how long has'],
            priority: 1
        },
        quality: {
            keywords: ['what does', 'describe', 'feel like', 'type', 'kind', 'quality', 'character', 'nature'],
            phrases: ['what kind of', 'describe the', 'feels like', 'what type', 'can you describe'],
            priority: 1
        },
        radiation: {
            keywords: ['radiate', 'spread', 'travel', 'move', 'go to', 'anywhere else', 'other places'],
            phrases: ['does it radiate', 'does it spread', 'go anywhere else', 'does it move'],
            priority: 1
        },
        severity: {
            keywords: ['how bad', 'severity', 'scale', 'rate', 'worst', 'intense', 'severe', '1 to 10'],
            phrases: ['on a scale', 'how severe', 'how bad is', 'rate your', '1 to 10', 'out of 10'],
            priority: 1
        },
        timing: {
            keywords: ['timing', 'pattern', 'episode', 'frequency', 'often', 'comes and goes'],
            phrases: ['how often', 'is it constant', 'any pattern', 'come and go'],
            priority: 1
        },
        aggravating: {
            keywords: ['worse', 'worsen', 'aggravate', 'trigger', 'provoke', 'exacerbate'],
            phrases: ['what makes it worse', 'anything worsen', 'triggers it', 'makes it worse'],
            priority: 1
        },
        alleviating: {
            keywords: ['better', 'relief', 'relieve', 'help', 'improve', 'ease', 'alleviate'],
            phrases: ['what makes it better', 'anything help', 'anything relieve', 'tried anything'],
            priority: 1
        },
        associated: {
            keywords: ['other symptoms', 'associated', 'along with', 'besides', 'anything else'],
            phrases: ['any other symptoms', 'anything else', 'other problems', 'noticed anything'],
            priority: 1
        },

        // PAST MEDICAL HISTORY
        pmh: {
            keywords: ['medical history', 'medical problems', 'conditions', 'diagnosed', 'chronic', 'diseases', 'illnesses', 'pmh'],
            phrases: ['medical history', 'medical problems', 'other conditions', 'been diagnosed', 'past medical'],
            priority: 2
        },
        surgeries: {
            keywords: ['surgery', 'surgeries', 'operation', 'operations', 'surgical', 'procedure'],
            phrases: ['any surgeries', 'any operations', 'surgical history', 'ever had surgery'],
            priority: 2
        },
        hospitalizations: {
            keywords: ['hospital', 'hospitalized', 'admitted', 'admission', 'inpatient'],
            phrases: ['been hospitalized', 'hospital stays', 'ever admitted', 'been in the hospital'],
            priority: 2
        },

        // MEDICATIONS
        medications: {
            keywords: ['medication', 'medications', 'medicine', 'medicines', 'drugs', 'pills', 'taking', 'prescriptions', 'meds'],
            phrases: ['what medications', 'any medications', 'take any', 'on any medications', 'currently taking'],
            priority: 2
        },
        otc: {
            keywords: ['over the counter', 'otc', 'supplements', 'vitamins', 'herbal', 'natural'],
            phrases: ['over the counter', 'any supplements', 'vitamins', 'herbal remedies'],
            priority: 3
        },

        // ALLERGIES
        allergies: {
            keywords: ['allergy', 'allergies', 'allergic', 'reaction', 'sensitivity', 'nkda'],
            phrases: ['any allergies', 'allergic to', 'drug allergies', 'medication allergies'],
            priority: 2
        },

        // FAMILY HISTORY
        familyHistory: {
            keywords: ['family', 'relatives', 'parents', 'mother', 'father', 'siblings', 'hereditary', 'genetic', 'runs in'],
            phrases: ['family history', 'run in your family', 'parents have', 'anyone in your family'],
            priority: 2
        },

        // SOCIAL HISTORY
        smoking: {
            keywords: ['smoke', 'smoking', 'cigarette', 'tobacco', 'vape', 'vaping', 'nicotine', 'pack'],
            phrases: ['do you smoke', 'ever smoked', 'smoking history', 'tobacco use', 'pack years'],
            priority: 2
        },
        alcohol: {
            keywords: ['alcohol', 'drink', 'drinking', 'beer', 'wine', 'liquor', 'spirits'],
            phrases: ['do you drink', 'alcohol use', 'how much alcohol', 'drink alcohol'],
            priority: 2
        },
        drugs: {
            keywords: ['drug', 'drugs', 'recreational', 'marijuana', 'cocaine', 'heroin', 'substance', 'illicit'],
            phrases: ['recreational drugs', 'use drugs', 'any drugs', 'substance use'],
            priority: 2
        },
        occupation: {
            keywords: ['work', 'job', 'occupation', 'employed', 'career', 'profession', 'living'],
            phrases: ['what do you do', 'for work', 'your job', 'occupation', 'for a living'],
            priority: 3
        },
        living: {
            keywords: ['live', 'living', 'home', 'house', 'apartment', 'alone', 'spouse', 'partner'],
            phrases: ['who do you live', 'living situation', 'at home', 'live alone', 'live with'],
            priority: 3
        },
        exercise: {
            keywords: ['exercise', 'physical activity', 'workout', 'active', 'sedentary', 'gym', 'sports'],
            phrases: ['do you exercise', 'physically active', 'how active', 'work out'],
            priority: 3
        },
        travel: {
            keywords: ['travel', 'traveled', 'trip', 'abroad', 'overseas', 'vacation', 'foreign'],
            phrases: ['recent travel', 'traveled anywhere', 'out of the country'],
            priority: 3
        },
        sexualHistory: {
            keywords: ['sexual', 'sex', 'partner', 'partners', 'intercourse', 'sexually active'],
            phrases: ['sexually active', 'sexual history', 'any partners'],
            priority: 3
        },

        // REVIEW OF SYSTEMS
        fever: {
            keywords: ['fever', 'fevers', 'temperature', 'chills', 'sweats'],
            phrases: ['any fever', 'had fevers', 'night sweats', 'felt feverish'],
            priority: 2
        },
        weightChange: {
            keywords: ['weight', 'gained', 'lost', 'appetite', 'eating'],
            phrases: ['weight change', 'lost weight', 'gained weight', 'appetite'],
            priority: 3
        },
        fatigue: {
            keywords: ['tired', 'fatigue', 'energy', 'weak', 'exhausted'],
            phrases: ['feeling tired', 'low energy', 'more tired', 'fatigue'],
            priority: 3
        },
        shortnessOfBreath: {
            keywords: ['breath', 'breathing', 'breathless', 'dyspnea', 'winded', 'air', 'sob'],
            phrases: ['short of breath', 'trouble breathing', 'can\'t breathe', 'out of breath'],
            priority: 2
        },
        cough: {
            keywords: ['cough', 'coughing', 'sputum', 'phlegm', 'mucus'],
            phrases: ['any cough', 'been coughing', 'cough anything up'],
            priority: 2
        },
        chestPain: {
            keywords: ['chest', 'heart', 'cardiac', 'angina', 'pressure'],
            phrases: ['chest pain', 'chest pressure', 'chest discomfort', 'heart pain'],
            priority: 1
        },
        palpitations: {
            keywords: ['palpitations', 'racing', 'pounding', 'flutter', 'skip', 'irregular'],
            phrases: ['heart racing', 'heart pounding', 'heart flutter', 'skipping beats'],
            priority: 2
        },
        edema: {
            keywords: ['swelling', 'swollen', 'edema', 'puffy', 'bloated'],
            phrases: ['any swelling', 'legs swollen', 'ankle swelling', 'feet swollen'],
            priority: 2
        },
        nausea: {
            keywords: ['nausea', 'nauseous', 'vomit', 'vomiting', 'throw up', 'queasy'],
            phrases: ['feel nauseous', 'thrown up', 'been vomiting', 'sick to stomach'],
            priority: 2
        },
        abdominalPain: {
            keywords: ['stomach', 'belly', 'abdominal', 'abdomen', 'gut', 'bowel'],
            phrases: ['stomach pain', 'belly pain', 'abdominal pain'],
            priority: 1
        },
        bowelChanges: {
            keywords: ['bowel', 'stool', 'diarrhea', 'constipation', 'blood', 'black'],
            phrases: ['bowel movements', 'any diarrhea', 'constipated', 'blood in stool'],
            priority: 2
        },
        urinarySymptoms: {
            keywords: ['urinate', 'urination', 'pee', 'urine', 'bladder', 'burning'],
            phrases: ['trouble urinating', 'burning when', 'blood in urine', 'urinary'],
            priority: 2
        },
        headache: {
            keywords: ['headache', 'head pain', 'migraine', 'head hurt'],
            phrases: ['any headaches', 'head hurt', 'headache'],
            priority: 2
        },
        dizziness: {
            keywords: ['dizzy', 'dizziness', 'lightheaded', 'vertigo', 'room spinning'],
            phrases: ['feel dizzy', 'lightheaded', 'room spinning'],
            priority: 2
        },
        weakness: {
            keywords: ['weakness', 'weak', 'numbness', 'tingling', 'paralysis'],
            phrases: ['any weakness', 'feel weak', 'numbness or tingling'],
            priority: 2
        },
        vision: {
            keywords: ['vision', 'see', 'sight', 'blind', 'blurry', 'double'],
            phrases: ['vision changes', 'trouble seeing', 'blurry vision'],
            priority: 2
        },
        consciousness: {
            keywords: ['passed out', 'faint', 'fainting', 'syncope', 'blackout', 'unconscious'],
            phrases: ['passed out', 'lost consciousness', 'blacked out', 'fainted'],
            priority: 1
        },
        confusion: {
            keywords: ['confused', 'confusion', 'disoriented', 'memory', 'forgetful'],
            phrases: ['been confused', 'memory problems', 'thinking clearly'],
            priority: 2
        },
        jointPain: {
            keywords: ['joint', 'joints', 'arthritis', 'stiff', 'ache'],
            phrases: ['joint pain', 'joints hurt', 'stiff joints'],
            priority: 3
        },
        backPain: {
            keywords: ['back', 'spine', 'lumbar', 'sciatica'],
            phrases: ['back pain', 'back hurt', 'back problems'],
            priority: 2
        },
        rash: {
            keywords: ['rash', 'skin', 'itching', 'hives', 'lesion'],
            phrases: ['any rash', 'skin changes', 'itching'],
            priority: 3
        }
    };

    /**
     * Categorize a student's question
     * Returns { category: string, confidence: number } or null
     */
    function categorizeQuestion(question) {
        if (!question || typeof question !== 'string') return null;
        
        const q = question.toLowerCase().trim();
        const matches = [];
        
        for (const [category, pattern] of Object.entries(questionPatterns)) {
            let score = 0;
            
            // Check phrases (higher weight)
            for (const phrase of pattern.phrases || []) {
                if (q.includes(phrase)) {
                    score += 3;
                }
            }
            
            // Check keywords
            for (const keyword of pattern.keywords || []) {
                if (keyword.length > 3) {
                    if (q.includes(keyword)) score += 2;
                } else {
                    // Short keywords need word boundaries
                    const regex = new RegExp('\\b' + keyword + '\\b', 'i');
                    if (regex.test(q)) score += 2;
                }
            }
            
            if (score > 0) {
                matches.push({
                    category: category,
                    confidence: score,
                    priority: pattern.priority || 2
                });
            }
        }
        
        if (matches.length === 0) return null;
        
        // Sort by confidence, then by priority
        matches.sort((a, b) => {
            if (b.confidence !== a.confidence) return b.confidence - a.confidence;
            return a.priority - b.priority;
        });
        
        return matches[0];
    }

    /**
     * Get a random response from an array
     */
    function getRandomFromArray(arr) {
        if (!arr || !Array.isArray(arr) || arr.length === 0) return null;
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Public API
    return {
        categorizeQuestion: categorizeQuestion,
        getRandomFromArray: getRandomFromArray,
        questionPatterns: questionPatterns
    };
})();


// ============================================================================
// PART 2: BACKGROUND RESPONSE LIBRARY
// ============================================================================

const PatientBackgroundLibrary = (function() {
    'use strict';

    // --------------------------------------------------
    // MEDICATIONS BY PATIENT PROFILE
    // --------------------------------------------------
    const medications = {
        healthy: [
            "No medications. I don't take anything regularly.",
            "Nothing prescription. Maybe some ibuprofen when I need it.",
            "Just a multivitamin, that's it.",
            "Nothing really. Vitamin D in the winter.",
            "No medications at all.",
            "Just allergy medicine during pollen season."
        ],
        hypertension: [
            "Lisinopril for blood pressure.",
            "I take amlodipine for my blood pressure.",
            "Blood pressure medicine - losartan I think.",
            "Just one pill for high blood pressure.",
            "Metoprolol for blood pressure."
        ],
        diabetes: [
            "Metformin for diabetes, and blood pressure medicine.",
            "I'm on metformin twice a day.",
            "Diabetes medication and a statin for cholesterol.",
            "Metformin and glipizide for my sugar.",
            "Just metformin - trying to control it with diet too."
        ],
        cardiac: [
            "Aspirin, metoprolol, lisinopril, and Plavix since my stent.",
            "Blood thinner, beta blocker, and a statin since my heart attack.",
            "Eliquis for my A-fib, plus blood pressure medicine.",
            "Several heart medications - my cardiologist manages them.",
            "Aspirin and Plavix since my stents, plus blood pressure medicine."
        ],
        pulmonary: [
            "I use an inhaler - albuterol when I need it.",
            "Two inhalers - one daily and one for rescue.",
            "Advair twice a day for my COPD.",
            "Inhaler and sometimes prednisone when it flares up.",
            "Symbicort inhaler and albuterol as needed."
        ],
        multipleComorbidities: [
            "Oh, I take quite a few. Blood pressure, diabetes, cholesterol...",
            "I have a pill box. About 8 different medications.",
            "Let me see - lisinopril, metformin, atorvastatin, and a few others.",
            "A lot. My wife helps me keep track.",
            "Several - blood pressure, diabetes, cholesterol, and a water pill."
        ],
        psychiatric: [
            "Sertraline for depression.",
            "Lexapro and something for sleep.",
            "An antidepressant and anti-anxiety medication.",
            "Wellbutrin - been on it for a few years.",
            "Zoloft and trazodone for sleep."
        ]
    };

    // --------------------------------------------------
    // ALLERGIES
    // --------------------------------------------------
    const allergies = {
        none: [
            "No allergies that I know of.",
            "No, no allergies.",
            "None.",
            "I'm not allergic to anything.",
            "NKDA - no known drug allergies."
        ],
        common: [
            "Penicillin - I get a rash.",
            "Sulfa drugs. Got a reaction years ago.",
            "Allergic to penicillin. They give me something else.",
            "Just penicillin. It makes me break out in hives.",
            "Sulfa antibiotics - had a bad reaction once."
        ],
        multiple: [
            "A few - penicillin, sulfa, and codeine.",
            "Several medications. I have a list.",
            "Penicillin, sulfa drugs, and latex.",
            "Multiple - the pharmacy has them on file."
        ],
        serious: [
            "Penicillin - I had anaphylaxis. I carry an EpiPen.",
            "Severe allergy to shellfish. Had to use an EpiPen once.",
            "Peanuts - very severe. I carry epinephrine."
        ],
        environmental: [
            "Seasonal allergies - pollen, dust.",
            "Cats make me sneeze. Some seasonal stuff too.",
            "Dust and mold. No drug allergies though."
        ]
    };

    // --------------------------------------------------
    // PAST MEDICAL HISTORY
    // --------------------------------------------------
    const pastMedicalHistory = {
        healthy: [
            "Nothing major. I've been pretty healthy.",
            "No real medical problems.",
            "Healthy as far as I know.",
            "Nothing significant. I see my doctor once a year.",
            "No major health issues."
        ],
        hypertension: [
            "High blood pressure. Been on medication for a few years.",
            "Just hypertension. It's controlled with medication.",
            "Blood pressure runs a little high. I take a pill for it.",
            "Hypertension - diagnosed about 5 years ago."
        ],
        diabetes: [
            "Type 2 diabetes. Diagnosed a few years ago.",
            "Diabetes and high blood pressure.",
            "Sugar problems - my doctor calls it pre-diabetes.",
            "Type 2 diabetes. I check my sugar and take metformin."
        ],
        cardiac: [
            "Heart attack 3 years ago. Had a stent put in.",
            "A-fib. I'm on a blood thinner.",
            "Congestive heart failure. I see a cardiologist regularly.",
            "Bypass surgery 5 years ago. Been doing okay since.",
            "Had a heart attack. They put in two stents."
        ],
        pulmonary: [
            "COPD. Used to smoke.",
            "Asthma since I was a kid.",
            "Emphysema. I use oxygen at night.",
            "Chronic bronchitis. I get pneumonia sometimes."
        ],
        multipleComorbidities: [
            "High blood pressure, diabetes, and high cholesterol.",
            "Let's see - diabetes, heart problems, kidney issues...",
            "Several things. Diabetes, hypertension, had a mild stroke.",
            "A list of things - heart, diabetes, arthritis, blood pressure."
        ]
    };

    // --------------------------------------------------
    // SURGICAL HISTORY
    // --------------------------------------------------
    const surgicalHistory = {
        none: [
            "Never had surgery.",
            "No surgeries.",
            "Nothing, never been under the knife.",
            "No operations."
        ],
        common: [
            "Appendix out when I was younger.",
            "Gallbladder removed a few years ago.",
            "Had my tonsils out as a kid.",
            "C-section with my second child.",
            "Appendectomy about 10 years ago."
        ],
        cardiac: [
            "Bypass surgery 5 years ago.",
            "Had stents put in. Does that count?",
            "Heart valve replacement 3 years ago.",
            "Pacemaker implanted last year."
        ],
        orthopedic: [
            "Knee replacement on the right side.",
            "Back surgery for a herniated disc.",
            "Hip replacement two years ago.",
            "Rotator cuff repair on my shoulder."
        ],
        multiple: [
            "Several - appendix, gallbladder, and a knee scope.",
            "A few surgeries over the years. I can list them.",
            "Quite a few - I have the records somewhere."
        ]
    };

    // --------------------------------------------------
    // FAMILY HISTORY
    // --------------------------------------------------
    const familyHistory = {
        noSignificant: [
            "Nothing major runs in the family.",
            "Everyone's been pretty healthy.",
            "No serious diseases that I know of.",
            "My parents are still alive and healthy."
        ],
        cardiac: [
            "Heart disease. My father had a heart attack at 55.",
            "Dad had bypass surgery. Mom has high blood pressure.",
            "Heart problems on my father's side.",
            "My brother had a heart attack young. Dad too."
        ],
        cancer: [
            "Cancer - my mother had breast cancer.",
            "My father died of lung cancer.",
            "Colon cancer runs in the family. I get colonoscopies.",
            "Cancer on both sides. Mom breast, dad prostate."
        ],
        diabetes: [
            "Diabetes runs in my family. Both parents have it.",
            "My mother and grandmother both had diabetes.",
            "Type 2 diabetes on my mom's side."
        ],
        mixed: [
            "Heart disease and diabetes. Both parents.",
            "Dad had heart problems, mom has diabetes.",
            "A mix - cancer, heart disease, diabetes in the family."
        ],
        psychiatric: [
            "Depression runs in my family.",
            "My mother had anxiety. Sister too.",
            "Mental health issues on my mom's side."
        ],
        unknown: [
            "I don't really know. I was adopted.",
            "I'm not sure - we don't talk much.",
            "Don't know much about my family's medical history."
        ]
    };

    // --------------------------------------------------
    // SMOKING
    // --------------------------------------------------
    const smoking = {
        never: [
            "No, never smoked.",
            "I've never been a smoker.",
            "No, I don't smoke. Never have.",
            "Never touched cigarettes."
        ],
        former: [
            "I quit about 5 years ago. Smoked for 20 years before that.",
            "Used to smoke - quit after my heart attack.",
            "Former smoker. Quit 10 years ago.",
            "I quit cold turkey 3 years ago.",
            "Quit about 5 years ago. Smoked a pack a day for 20 years."
        ],
        current: [
            "Yeah, about half a pack a day.",
            "I smoke. About a pack a day.",
            "Yes, I still smoke. Trying to quit.",
            "About a pack a day for 30 years.",
            "I smoke, maybe 10 cigarettes a day."
        ],
        social: [
            "Only when I drink, so not often.",
            "Socially. Maybe a few cigarettes on weekends.",
            "Just occasionally at parties."
        ],
        vaping: [
            "I vape now. Quit cigarettes.",
            "I use a vape pen. No regular cigarettes.",
            "Switched to vaping a couple years ago."
        ]
    };

    // --------------------------------------------------
    // ALCOHOL
    // --------------------------------------------------
    const alcohol = {
        none: [
            "I don't drink.",
            "No alcohol. Never have.",
            "I don't drink at all.",
            "No, I'm not a drinker."
        ],
        social: [
            "A drink or two on weekends.",
            "Socially. Maybe a glass of wine with dinner sometimes.",
            "A couple beers on the weekend, nothing heavy.",
            "Occasionally. Maybe once or twice a month.",
            "Just at social events. Not regularly."
        ],
        moderate: [
            "A glass of wine with dinner most nights.",
            "A few beers a week. Maybe 4-5.",
            "Probably a drink a day on average.",
            "Moderate I'd say. Few drinks a week."
        ],
        heavy: [
            "I drink daily. More than I should.",
            "Probably too much. Several drinks a day.",
            "I like my drinks. Several beers most nights.",
            "Yeah, I drink a lot. Trying to cut back."
        ],
        inRecovery: [
            "I'm in recovery. Haven't had a drink in 5 years.",
            "I'm sober now. Used to drink heavily.",
            "In AA. Haven't touched alcohol in 2 years.",
            "I'm a recovering alcoholic. 10 years sober."
        ]
    };

    // --------------------------------------------------
    // DRUG USE
    // --------------------------------------------------
    const drugUse = {
        none: [
            "No, no drugs.",
            "I don't use any recreational drugs.",
            "Nothing like that.",
            "No, never."
        ],
        marijuana: [
            "Just marijuana occasionally.",
            "I use cannabis for pain. It's legal here.",
            "Pot sometimes. Nothing else.",
            "Medical marijuana. Have a card for it."
        ],
        pastUse: [
            "I used to, but not anymore. Been clean for years.",
            "In college, but not since then.",
            "Had some problems in my 20s, but I'm clean now."
        ],
        current: [
            "I'd rather not say.",
            "Occasionally. I'm trying to stop.",
            "Yeah, I use. It's a problem."
        ]
    };

    // --------------------------------------------------
    // OCCUPATION
    // --------------------------------------------------
    const occupation = {
        office: [
            "I work in an office. Desk job.",
            "I'm an accountant.",
            "Office work. Sit at a computer all day.",
            "I work in finance.",
            "Administrative work for a company."
        ],
        healthcare: [
            "I'm a nurse.",
            "I work at a hospital.",
            "Healthcare - I'm a medical assistant.",
            "I work in a doctor's office."
        ],
        blueCollar: [
            "Construction. Been doing it 20 years.",
            "I work in a warehouse.",
            "I'm a mechanic.",
            "Factory work. Manufacturing.",
            "I do landscaping."
        ],
        service: [
            "I work in retail.",
            "Restaurant industry - I'm a server.",
            "Customer service.",
            "I work at a grocery store."
        ],
        retired: [
            "I'm retired now.",
            "Retired. Used to work in insurance.",
            "Retired about 5 years ago.",
            "Not working anymore. Retired."
        ],
        student: [
            "I'm a student.",
            "I'm in college.",
            "Graduate student.",
            "Still in school."
        ],
        unemployed: [
            "I'm between jobs right now.",
            "Not working at the moment.",
            "Currently unemployed.",
            "Looking for work."
        ]
    };

    // --------------------------------------------------
    // LIVING SITUATION
    // --------------------------------------------------
    const livingSituation = {
        alone: [
            "I live alone.",
            "By myself in an apartment.",
            "Just me.",
            "I live alone. Have for years."
        ],
        withFamily: [
            "With my wife/husband and kids.",
            "With my spouse.",
            "I live with my family.",
            "With my wife. Kids are grown and moved out."
        ],
        withRoommates: [
            "I have roommates.",
            "With a couple friends.",
            "Shared apartment with roommates."
        ],
        assistedLiving: [
            "I'm in assisted living now.",
            "At a senior living facility.",
            "In a nursing home.",
            "I have help at home - a caregiver."
        ],
        withParents: [
            "With my parents.",
            "Still at home with my folks.",
            "Living with family."
        ],
        homeless: [
            "I'm currently homeless.",
            "I stay at a shelter.",
            "I'm between places right now."
        ]
    };

    // --------------------------------------------------
    // SEXUAL HISTORY (asked sensitively)
    // --------------------------------------------------
    const sexualHistory = {
        notActive: [
            "Not currently sexually active.",
            "No, not at the moment.",
            "I haven't been for a while."
        ],
        monogamous: [
            "Yes, with my partner.",
            "Just my spouse.",
            "One partner - we've been together for years."
        ],
        multiplePartners: [
            "Yes, with multiple partners.",
            "I date around.",
            "A few different partners."
        ]
    };

    // --------------------------------------------------
    // TRAVEL
    // --------------------------------------------------
    const travel = {
        none: [
            "No, haven't traveled anywhere.",
            "I haven't been anywhere recently.",
            "No recent travel."
        ],
        domestic: [
            "Just within the US.",
            "Went to Florida last month.",
            "Traveled to California recently."
        ],
        international: [
            "I was overseas recently.",
            "Just got back from Mexico.",
            "Traveled to Asia last month."
        ]
    };

    // --------------------------------------------------
    // ROS NEGATIVES (for ruling out)
    // --------------------------------------------------
    const rosNegatives = {
        fever: [
            "No, no fever.",
            "No fever that I've noticed.",
            "Temperature has been normal."
        ],
        chestPain: [
            "No chest pain.",
            "My chest feels fine.",
            "No, nothing in my chest."
        ],
        shortnessOfBreath: [
            "No, I'm breathing fine.",
            "My breathing is okay.",
            "No trouble breathing."
        ],
        nausea: [
            "No nausea or vomiting.",
            "My stomach feels fine.",
            "No, haven't felt sick to my stomach."
        ],
        headache: [
            "No headaches.",
            "My head feels fine.",
            "No, no headaches."
        ],
        dizziness: [
            "No dizziness.",
            "Haven't felt lightheaded.",
            "No, I feel steady."
        ],
        edema: [
            "No swelling anywhere.",
            "My legs look normal.",
            "No, no swelling."
        ],
        cough: [
            "No cough.",
            "Haven't been coughing.",
            "No, no cough at all."
        ],
        rash: [
            "No rash or skin changes.",
            "My skin looks normal.",
            "No, nothing on my skin."
        ],
        weightChange: [
            "Weight has been stable.",
            "No major weight changes.",
            "About the same as usual."
        ],
        urinarySymptoms: [
            "No problems urinating.",
            "Urination is normal.",
            "No burning or frequency."
        ],
        bowelChanges: [
            "Bowels are normal.",
            "No diarrhea or constipation.",
            "Everything's regular."
        ]
    };

    /**
     * Get a random response from a category and subcategory
     */
    function getRandomResponse(category, subcategory) {
        const categoryMap = {
            medications, allergies, pastMedicalHistory, surgicalHistory,
            familyHistory, smoking, alcohol, drugUse, occupation,
            livingSituation, sexualHistory, travel, rosNegatives
        };
        
        const cat = categoryMap[category];
        if (!cat) return null;
        
        const responses = cat[subcategory];
        if (!responses || !Array.isArray(responses)) return null;
        
        return responses[Math.floor(Math.random() * responses.length)];
    }

    /**
     * Get response based on patient profile
     */
    function getResponseForCategory(category, patientProfile) {
        const profileMap = {
            medications: patientProfile.pmhCategory || 'healthy',
            allergies: patientProfile.allergyType || 'none',
            pastMedicalHistory: patientProfile.pmhCategory || 'healthy',
            surgicalHistory: patientProfile.surgicalHistory || 'none',
            familyHistory: patientProfile.familyHistoryType || 'noSignificant',
            smoking: patientProfile.smokingStatus || 'never',
            alcohol: patientProfile.alcoholUse || 'social',
            drugUse: patientProfile.drugUse || 'none',
            occupation: patientProfile.occupation || 'office',
            livingSituation: patientProfile.livingStatus || 'withFamily',
            sexualHistory: patientProfile.sexualHistory || 'monogamous',
            travel: patientProfile.travel || 'none'
        };
        
        const subcategory = profileMap[category];
        return getRandomResponse(category, subcategory);
    }

    // Public API
    return {
        getRandomResponse: getRandomResponse,
        getResponseForCategory: getResponseForCategory,
        medications, allergies, pastMedicalHistory, surgicalHistory,
        familyHistory, smoking, alcohol, drugUse, occupation,
        livingSituation, sexualHistory, travel, rosNegatives
    };
})();


// ============================================================================
// PART 3: UI INTEGRATION
// ============================================================================

const ReasonDxResponseIntegration = (function() {
    'use strict';
    
    let originalMatchHistoryQuestion = null;
    let isInitialized = false;
    
    // Default patient profile
    const DEFAULT_PROFILE = {
        smokingStatus: 'never',
        alcoholUse: 'social',
        drugUse: 'none',
        occupation: 'office',
        livingStatus: 'withFamily',
        pmhCategory: 'healthy',
        allergyType: 'none',
        surgicalHistory: 'none',
        familyHistoryType: 'noSignificant'
    };

    /**
     * Initialize the response system
     */
    function initialize() {
        if (isInitialized) return;
        
        // Store and wrap original function
        if (typeof window.matchHistoryQuestion === 'function') {
            originalMatchHistoryQuestion = window.matchHistoryQuestion;
            window.matchHistoryQuestion = enhancedMatch;
            console.log('✓ ReasonDx Patient Response System: Initialized');
        } else {
            console.warn('matchHistoryQuestion not found - will retry');
            setTimeout(initialize, 500);
            return;
        }
        
        isInitialized = true;
    }

    /**
     * Enhanced matching with fallback responses
     */
    function enhancedMatch(studentQuestion, caseHistoryQuestions, variant) {
        // Try original matching first
        let result = null;
        if (originalMatchHistoryQuestion) {
            result = originalMatchHistoryQuestion(studentQuestion, caseHistoryQuestions, variant);
        }
        
        // If match found, use it
        if (result) return result;
        
        // No match - try our fallback system
        const profile = getPatientProfile(variant);
        const fallback = generateFallback(studentQuestion, profile);
        
        if (fallback) {
            return {
                id: 'generated-' + fallback.category,
                text: studentQuestion,
                answer: fallback.response,
                tier: 'background',
                linkedDx: [],
                reasoning: 'Background information',
                isGenerated: true
            };
        }
        
        // Still no match - return conversational fallback
        return {
            id: 'conversational',
            text: studentQuestion,
            answer: getConversationalFallback(studentQuestion),
            tier: 'background',
            linkedDx: [],
            reasoning: null,
            isGenerated: true
        };
    }

    /**
     * Extract patient profile from variant
     */
    function getPatientProfile(variant) {
        if (variant?.patientProfile) {
            return { ...DEFAULT_PROFILE, ...variant.patientProfile };
        }
        
        // Infer from existing data
        const profile = { ...DEFAULT_PROFILE };
        
        if (variant?.age) profile.age = variant.age;
        if (variant?.gender) profile.gender = variant.gender;
        
        // Try to infer from historyQuestions answers
        if (variant?.historyQuestions) {
            variant.historyQuestions.forEach(q => {
                const answer = (q.answer || '').toLowerCase();
                const id = (q.id || '').toLowerCase();
                
                // Smoking
                if (id.includes('smok') || id === 'tobacco') {
                    if (answer.includes('never') || answer.includes('don\'t smoke')) {
                        profile.smokingStatus = 'never';
                    } else if (answer.includes('quit') || answer.includes('used to')) {
                        profile.smokingStatus = 'former';
                    } else if (answer.includes('pack') || answer.includes('smoke')) {
                        profile.smokingStatus = 'current';
                    }
                }
                
                // Alcohol
                if (id.includes('alcohol') || id.includes('drink')) {
                    if (answer.includes('don\'t drink') || answer.includes('no')) {
                        profile.alcoholUse = 'none';
                    } else if (answer.includes('couple') || answer.includes('occasional') || answer.includes('social')) {
                        profile.alcoholUse = 'social';
                    }
                }
            });
        }
        
        return profile;
    }

    /**
     * Generate fallback response based on question category
     */
    function generateFallback(question, profile) {
        const match = PatientResponseEngine.categorizeQuestion(question);
        if (!match || match.confidence < 2) return null;
        
        // Map question categories to background library
        const categoryMap = {
            'pmh': 'pastMedicalHistory',
            'medications': 'medications',
            'allergies': 'allergies',
            'surgeries': 'surgicalHistory',
            'familyHistory': 'familyHistory',
            'smoking': 'smoking',
            'alcohol': 'alcohol',
            'drugs': 'drugUse',
            'occupation': 'occupation',
            'living': 'livingSituation',
            'sexualHistory': 'sexualHistory',
            'travel': 'travel'
        };
        
        const libCategory = categoryMap[match.category];
        if (!libCategory) return null;
        
        const response = PatientBackgroundLibrary.getResponseForCategory(libCategory, profile);
        if (!response) return null;
        
        return {
            category: match.category,
            response: response,
            confidence: match.confidence
        };
    }

    /**
     * Conversational fallback when nothing matches
     */
    function getConversationalFallback(question) {
        const q = question.toLowerCase();
        
        const patterns = [
            {
                check: q => q.includes('what do you mean') || q.includes('don\'t understand'),
                responses: [
                    "I'm not sure what you're asking. Could you ask that differently?",
                    "Sorry, I don't quite understand. What would you like to know?"
                ]
            },
            {
                check: q => q.includes('anything else') || q.includes('what else'),
                responses: [
                    "I think I've told you the main things. Is there something specific?",
                    "That's about all I can think of. What else would you like to know?"
                ]
            },
            {
                check: q => q.includes('worried') || q.includes('scared') || q.includes('nervous'),
                responses: [
                    "I'm definitely worried. That's why I came in.",
                    "A little nervous. I just want to know what's going on."
                ]
            }
        ];
        
        for (const p of patterns) {
            if (p.check(q)) {
                return p.responses[Math.floor(Math.random() * p.responses.length)];
            }
        }
        
        // Generic fallbacks
        const generic = [
            "Hmm, I'm not sure about that.",
            "That's not something I've thought much about.",
            "I don't know if I can answer that specifically.",
            "Could you ask about something else?"
        ];
        
        return generic[Math.floor(Math.random() * generic.length)];
    }

    // Public API
    return {
        initialize: initialize,
        getPatientProfile: getPatientProfile
    };
})();


// ============================================================================
// AUTO-INITIALIZATION
// ============================================================================

// Initialize when DOM is ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                ReasonDxResponseIntegration.initialize();
            }, 200);
        });
    } else {
        setTimeout(function() {
            ReasonDxResponseIntegration.initialize();
        }, 200);
    }
}

// Export for module systems
if (typeof window !== 'undefined') {
    window.PatientResponseEngine = PatientResponseEngine;
    window.PatientBackgroundLibrary = PatientBackgroundLibrary;
    window.ReasonDxResponseIntegration = ReasonDxResponseIntegration;
}
