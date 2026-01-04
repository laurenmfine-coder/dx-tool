/**
 * ReasonDx What-If History Q&A Expansion - Part 2
 * Additional scenarios and extended question variations
 * 
 * Last Updated: December 28, 2025
 */

(function() {
    'use strict';

    function initializeHistoryExpansionPart2() {
        if (typeof window.cases === 'undefined') {
            setTimeout(initializeHistoryExpansionPart2, 250);
            return;
        }
        
        console.log('[ReasonDx] Expanding What-If history Q&A libraries (Part 2)...');
        
        expandAdditionalScenarios();
        
        console.log('[ReasonDx] History Q&A expansion Part 2 complete.');
    }

    function expandScenarioHistory(caseId, scenarioId, newAnswers) {
        const caseData = window.cases?.find(c => c.id === caseId);
        if (!caseData?.whatIfScenarios) return;
        
        const scenario = caseData.whatIfScenarios.find(s => s.id === scenarioId);
        if (!scenario) return;
        
        scenario.modifications = scenario.modifications || {};
        scenario.modifications.historyAnswers = {
            ...scenario.modifications.historyAnswers,
            ...newAnswers
        };
    }

    function expandAdditionalScenarios() {

        // =====================================================================
        // GOUT - SEPTIC ARTHRITIS CONCERN SCENARIO
        // =====================================================================
        expandScenarioHistory('gout', 'whatif_gout_fever', {
            // Fever - concerning
            "fever": "Yes, I have a fever - about 101°F.",
            "temperature": "101 degrees.",
            "temp": "101°F.",
            "chills": "Yes, some chills.",
            "febrile": "Yes, I'm febrile.",
            "feel hot": "Yes, I feel hot.",
            "sick": "I feel sick all over, not just my toe.",
            "systemic": "I feel systemically unwell.",
            "unwell": "Yes, I feel generally unwell.",
            
            // Joint symptoms
            "toe": "My big toe is incredibly swollen, red, and hot.",
            "joint": "Just the big toe joint.",
            "which joint": "My right big toe - the base of it.",
            "swelling": "Massive swelling - twice its normal size.",
            "swollen": "Very swollen.",
            "red": "Very red, almost purple.",
            "erythema": "Significant erythema.",
            "hot": "The toe is very hot to touch.",
            "warm": "Yes, very warm.",
            "tender": "Can't even have a sheet touch it.",
            "touch": "I can't let anything touch it.",
            "walk": "I can't walk on it at all.",
            "weight bear": "No, I can't put weight on it.",
            "move": "I can't move the toe at all.",
            "range of motion": "No range of motion - too painful.",
            
            // Gout history
            "gout before": "Yes, I've had gout attacks before.",
            "gout history": "Yes, I get gout flares a few times a year.",
            "previous attacks": "I get gout flares a few times a year.",
            "similar": "Usually similar but I don't usually get a fever.",
            "different": "This feels different - I feel sicker than usual.",
            "worse": "This is worse than my usual gout.",
            "typical": "No, this isn't typical for me.",
            
            // Septic concern
            "septic": "I've heard of septic arthritis - is that what you're worried about?",
            "infected": "Could the joint be infected?",
            "infection": "Do you think it's infected?",
            "concerning": "What about this is concerning?",
            "different from gout": "How is this different from regular gout?",
            
            // Labs/treatment history
            "uric acid": "I know my uric acid runs high.",
            "uric acid level": "It's usually around 9 or 10.",
            "allopurinol": "I'm supposed to take allopurinol but I'm not always good about it.",
            "medication compliance": "I sometimes forget my gout medicine.",
            "take allopurinol": "Not regularly, no.",
            "colchicine": "I have colchicine at home.",
            "nsaids": "I usually take ibuprofen.",
            "steroids": "I've had steroid shots before.",
            "prednisone": "I've taken prednisone for bad flares.",
            
            // Diet/lifestyle
            "diet": "I know I should watch my diet - too much red meat and beer.",
            "alcohol": "I drink beer most days.",
            "beer": "Yes, I drink beer regularly.",
            "how much alcohol": "Maybe 3-4 beers a day.",
            "wine": "Sometimes wine too.",
            "liquor": "Occasionally.",
            "seafood": "I eat a lot of shellfish.",
            "shellfish": "Yes, I love shrimp and crab.",
            "meat": "Yes, I eat a lot of red meat.",
            "organ meats": "Sometimes liver.",
            "water": "I don't drink enough water.",
            "hydration": "I'm probably dehydrated a lot.",
            
            // Other joints
            "other joints": "No, just this toe.",
            "multiple joints": "No, just the one.",
            "polyarticular": "No, just monoarticular.",
            "knee": "No knee involvement.",
            "ankle": "No ankle involvement.",
            "wrist": "No wrist problems.",
            
            // Medical history
            "medical history": "High blood pressure, gout, and kidney disease.",
            "kidney": "Yes, I have chronic kidney disease.",
            "ckd": "Yes, CKD stage 3.",
            "renal": "My kidney function isn't great.",
            "diabetes": "No diabetes.",
            "heart": "No heart problems.",
            "immunocompromised": "No, my immune system is fine.",
            
            // Trauma/procedure
            "trauma": "No trauma to the toe.",
            "injury": "No injury.",
            "hit": "I didn't hit it on anything.",
            "stub": "I didn't stub my toe.",
            "injection": "No recent injections.",
            "procedure": "No recent procedures on the joint.",
            "surgery": "No surgery on this toe."
        });

        // =====================================================================
        // CHF - FLASH PULMONARY EDEMA SCENARIO
        // =====================================================================
        expandScenarioHistory('chf-exacerbation', 'whatif_chf_flash_pulmonary_edema', {
            // Sudden onset - KEY
            "onset": "It came on suddenly - I was fine an hour ago.",
            "sudden": "Yes, very sudden onset.",
            "how long": "Just started within the last hour.",
            "rapid": "Very rapid onset.",
            "fine before": "I was completely fine before this.",
            "gradual": "No, not gradual at all - sudden.",
            "when start": "About an hour ago.",
            "what were you doing": "I was just watching TV and suddenly couldn't breathe.",
            
            // Severe dyspnea
            "breathing": "I can't breathe. It feels like I'm drowning.",
            "short of breath": "Severely short of breath.",
            "dyspnea": "Severe dyspnea.",
            "can't breathe": "I can't get any air.",
            "air": "I can't get enough air.",
            "drowning": "Yes, like I'm drowning.",
            "suffocating": "It feels like suffocating.",
            "gasping": "I'm gasping for air.",
            "worst ever": "The worst breathing trouble ever.",
            
            // Pink frothy sputum - CLASSIC
            "cough": "Yes, coughing up pink frothy stuff.",
            "sputum": "Pink and frothy.",
            "frothy": "Yes, frothy sputum.",
            "pink": "Yes, pink colored.",
            "blood": "It's pinkish - not pure blood.",
            "hemoptysis": "It's more pink and frothy than frank blood.",
            "coughing up": "Pink frothy material.",
            "phlegm": "Pink and bubbly.",
            
            // Hypertensive crisis often trigger
            "blood pressure": "I don't know but my head is pounding.",
            "bp": "I feel like my head is going to explode.",
            "headache": "Yes, terrible headache.",
            "head pounding": "Yes, my head is pounding.",
            "vision": "My vision is blurry.",
            "blurry vision": "Yes, blurry.",
            "hypertension": "Yes, I have high blood pressure.",
            "high blood pressure": "Yes, and I ran out of my medication.",
            "missed medication": "I ran out of my blood pressure medicine 3 days ago.",
            "bp meds": "I'm supposed to take blood pressure medicine but ran out.",
            "out of medication": "Yes, I've been out for 3 days.",
            "why out": "I couldn't get to the pharmacy.",
            "compliance": "I'm usually good about taking them.",
            
            // Sympathetic symptoms
            "sweating": "Yes, drenched in sweat.",
            "diaphoretic": "Very diaphoretic.",
            "sweaty": "Soaking wet with sweat.",
            "clammy": "Yes, clammy.",
            "anxious": "I feel panicked, like I'm going to die.",
            "scared": "I'm terrified.",
            "panic": "I feel like I'm panicking.",
            "dying": "I feel like I'm dying.",
            "sense of doom": "Yes, I feel like something terrible is happening.",
            
            // Heart failure history
            "heart failure": "Yes, I have heart failure.",
            "chf": "Yes, CHF.",
            "heart history": "Yes, I have a weak heart.",
            "cardiomyopathy": "Yes, cardiomyopathy.",
            "ef": "My EF is about 35%.",
            "ejection fraction": "Around 35%.",
            "previous episodes": "I've had breathing problems before but nothing this sudden or severe.",
            "hospitalized": "I've been hospitalized for heart failure before.",
            "icu": "I was in the ICU once for this.",
            "intubated": "No, I've never been intubated.",
            
            // Volume status before
            "edema": "My legs weren't too swollen before this started.",
            "leg swelling": "Not much leg swelling before this.",
            "weight": "I haven't gained much weight recently.",
            "euvolemic": "I don't think I was that swollen before this.",
            "salt": "I've been careful with salt.",
            "fluid": "I haven't been drinking too much fluid.",
            
            // Medications
            "medications": "Lisinopril, metoprolol, and Lasix - but I ran out of lisinopril.",
            "diuretic": "Yes, I take Lasix.",
            "lasix": "Yes, 40mg daily.",
            "water pill": "Yes.",
            "beta blocker": "Yes, metoprolol.",
            "ace inhibitor": "Yes, lisinopril - but I ran out.",
            
            // Chest pain
            "chest pain": "Some pressure but mainly just can't breathe.",
            "chest": "More pressure than pain.",
            "angina": "Not typical angina.",
            "heart attack": "I don't think I'm having a heart attack.",
            
            // Position
            "lying down": "I absolutely cannot lie down.",
            "orthopnea": "I have to sit completely upright.",
            "pillows": "I need to be bolt upright.",
            "position": "Only comfortable sitting straight up."
        });

        // =====================================================================
        // CHF - COLD AND WET (CARDIOGENIC SHOCK) SCENARIO
        // =====================================================================
        expandScenarioHistory('chf-exacerbation', 'whatif_chf_cold_wet', {
            // Dyspnea
            "breathing": "I can barely breathe. Even sitting up I'm gasping.",
            "short of breath": "Severely short of breath. Worst ever.",
            "dyspnea": "Severe dyspnea at rest.",
            "rest": "Even at rest I can't breathe.",
            "lying down": "I absolutely cannot lie down.",
            "orthopnea": "I have to sit bolt upright.",
            "pillows": "I need to be completely upright.",
            "how bad": "The worst breathing I've ever had.",
            
            // Cold extremities - KEY for "cold"
            "cold": "My hands and feet are freezing cold.",
            "extremities": "My hands and feet are very cold.",
            "hands": "My hands are ice cold.",
            "feet": "My feet are freezing.",
            "warm": "No, my extremities are cold.",
            "temperature extremities": "Cold to touch.",
            "clammy": "Cold and clammy.",
            "sweaty": "Cold sweat.",
            "diaphoretic": "Yes, but cold and sweaty.",
            "color": "My family says I look gray.",
            "pale": "Yes, very pale.",
            "gray": "Yes, I look gray.",
            "mottled": "My legs look mottled.",
            "mottling": "Yes, there's mottling.",
            
            // Hypoperfusion symptoms
            "weak": "I feel very weak. Can barely move.",
            "dizzy": "Very dizzy, even sitting.",
            "lightheaded": "Extremely lightheaded.",
            "faint": "I feel like I could pass out.",
            "confused": "I'm having trouble thinking clearly.",
            "foggy": "My mind is foggy.",
            "thinking": "Hard to concentrate.",
            "alert": "I'm not as alert as usual.",
            
            // Low urine output - KEY
            "urine": "I've barely urinated today.",
            "peeing": "I've hardly peed at all.",
            "urine output": "Very little urine.",
            "last urinated": "Maybe just a tiny bit this morning.",
            "void": "I've barely voided.",
            "foley": "I don't have a catheter.",
            "dark urine": "What little there was, was very dark.",
            
            // Congestion - "wet"
            "edema": "Yes, my legs are very swollen.",
            "leg swelling": "Severe leg swelling.",
            "swelling": "My legs are huge.",
            "pitting": "Yes, deep pitting edema.",
            "weight": "I've gained 15 pounds this week.",
            "weight gain": "About 15 pounds in a week.",
            "belly": "My belly is swollen too.",
            "ascites": "Maybe some fluid in my belly.",
            "jvd": "I don't know what that means.",
            "neck veins": "I haven't noticed.",
            
            // Heart failure history
            "heart failure": "Yes, I have heart failure.",
            "chf": "Yes, CHF for several years.",
            "cardiomyopathy": "Yes, I have cardiomyopathy.",
            "ef": "My EF is about 15-20%.",
            "ejection fraction": "Around 15-20%.",
            "heart attack": "Yes, I had a heart attack a few years ago.",
            "mi": "Yes, MI 3 years ago.",
            "ischemic": "Yes, ischemic cardiomyopathy.",
            "stents": "Yes, I have stents.",
            "cabg": "No bypass surgery.",
            "icd": "Yes, I have a defibrillator.",
            "pacemaker": "I have an ICD.",
            "shocked": "It hasn't shocked me recently.",
            
            // Medications
            "medications": "Lasix, lisinopril, carvedilol, spironolactone.",
            "diuretics": "Yes, I take Lasix.",
            "lasix": "Yes, 80mg twice daily.",
            "how much lasix": "80mg twice a day.",
            "compliance": "I've been taking my medications.",
            "missed": "I haven't missed doses.",
            "entresto": "Yes, I'm on Entresto.",
            "jardiance": "No, not on that.",
            
            // Triggers
            "what happened": "I've just been getting worse over the past few days.",
            "trigger": "I'm not sure what triggered this.",
            "diet": "I may have eaten some salty foods.",
            "salt": "I had some salty meals.",
            "sick": "I've had a cough the past week.",
            "infection": "Maybe a respiratory infection.",
            "afib": "I don't think I'm in AFib.",
            "arrhythmia": "I haven't felt irregular rhythms."
        });

        // =====================================================================
        // PANCREATITIS - ALCOHOL-INDUCED SCENARIO
        // =====================================================================
        expandScenarioHistory('acute-pancreatitis', 'whatif_panc_alcohol', {
            // Alcohol history - extensive
            "alcohol": "Yes, I drink heavily. About a pint of vodka daily.",
            "how much": "A pint of vodka every day, sometimes more.",
            "drinking": "I've been drinking heavily for about 15 years.",
            "how long drinking": "About 15 years of heavy drinking.",
            "binge": "I had a big binge over the weekend.",
            "weekend": "I drank a lot more than usual this weekend.",
            "last drink": "I had drinks last night and this morning.",
            "when last drink": "This morning - a few shots to help me feel better.",
            "type of alcohol": "Mostly vodka, sometimes whiskey.",
            "vodka": "Yes, vodka is my drink.",
            "beer": "Sometimes beer too.",
            "wine": "Not much wine.",
            "liquor": "Mostly hard liquor.",
            "frequency": "Every day.",
            "daily": "Yes, I drink every day.",
            "years": "About 15 years of heavy drinking.",
            "tried to quit": "I've tried to quit but can't.",
            "rehab": "I've been to rehab twice.",
            "aa": "I've tried AA.",
            
            // Prior pancreatitis
            "pancreatitis before": "Yes, I've had pancreatitis before - twice.",
            "prior episodes": "Two prior episodes, both from drinking.",
            "how many times": "This is my third episode.",
            "chronic": "My doctor said my pancreas is damaged.",
            "chronic pancreatitis": "Yes, I have chronic pancreatitis.",
            "pancreas damage": "Yes, my pancreas is damaged.",
            "exocrine": "I'm not sure about that.",
            "enzymes": "I take pancreatic enzymes sometimes.",
            "creon": "Yes, I'm supposed to take Creon.",
            
            // Pain - classic
            "pain": "Severe pain in my upper belly, going straight through to my back.",
            "where pain": "Upper middle belly, through to the back.",
            "location": "Epigastric, radiating to back.",
            "back": "Yes, the pain goes through to my back.",
            "back pain": "Yes, severe back pain too.",
            "radiating": "Yes, it radiates to my back.",
            "severity": "10 out of 10 - worst ever.",
            "how bad": "Worst pain of my life.",
            "worst pain": "Yes, absolutely the worst.",
            "character": "Boring, constant, severe.",
            "constant": "Yes, constant pain.",
            "crampy": "No, not crampy - constant.",
            
            // Position
            "position": "I feel better if I lean forward.",
            "leaning forward": "Yes, leaning forward helps a little.",
            "fetal position": "Curling up helps slightly.",
            "lying flat": "Lying flat makes it much worse.",
            "worse lying down": "Yes, much worse flat.",
            "better sitting": "Yes, sitting and leaning forward.",
            
            // GI symptoms
            "vomiting": "Yes, I've been vomiting a lot.",
            "how much vomiting": "Maybe 10 times since last night.",
            "nausea": "Severe nausea.",
            "can't stop vomiting": "I can't keep anything down.",
            "bile": "I'm vomiting bile now - green/yellow.",
            "eating": "I can't eat anything.",
            "appetite": "No appetite at all.",
            "trigger": "The pain started after I ate a meal yesterday.",
            "fatty food": "I had fried chicken and beer.",
            "greasy": "Yes, greasy food.",
            
            // Withdrawal concern
            "withdrawal": "I'm worried I might have withdrawal.",
            "shaking": "My hands are shaking a bit.",
            "tremor": "Yes, some tremor.",
            "tremors": "My hands are trembling.",
            "sweating": "Yes, I'm sweaty.",
            "anxiety": "I feel very anxious.",
            "seizures": "I've had a withdrawal seizure before.",
            "seizure history": "Yes, one seizure during withdrawal.",
            "dt": "I've had the DTs once before.",
            "dts": "Yes, I had DTs once - saw things.",
            "hallucinations": "Not currently but I have in the past.",
            "seeing things": "Not right now.",
            "last withdrawal": "About 2 years ago.",
            
            // Other history
            "medical history": "Chronic pancreatitis, alcohol use disorder.",
            "liver": "My doctor said my liver is affected too.",
            "cirrhosis": "Maybe early cirrhosis.",
            "hepatitis": "No hepatitis.",
            "gallstones": "No gallstones that I know of.",
            "diabetes": "No diabetes yet.",
            "smoking": "Yes, I smoke about a pack a day.",
            
            // Current status
            "hydration": "I'm probably dehydrated.",
            "thirsty": "Very thirsty.",
            "peeing": "I haven't urinated much.",
            "fever": "Maybe low grade.",
            "jaundice": "I don't think I'm yellow.",
            "yellow": "I don't think so."
        });

        // =====================================================================
        // PANCREATITIS - CHOLANGITIS SCENARIO
        // =====================================================================
        expandScenarioHistory('acute-pancreatitis', 'whatif_panc_cholangitis', {
            // Gallstones
            "gallstones": "Yes, I have gallstones. They told me to get my gallbladder out.",
            "gallbladder": "I still have my gallbladder.",
            "cholecystectomy": "No, I never had it removed.",
            "why not removed": "I was scared of surgery.",
            "stones": "Yes, I have stones.",
            "known stones": "Yes, known gallstones for about 2 years.",
            "symptomatic": "I've had some attacks before.",
            "gallbladder attacks": "Yes, I've had attacks after fatty meals.",
            "biliary colic": "Yes, I've had that before.",
            
            // Pain
            "pain": "Severe pain in my upper right belly, spreading to my back.",
            "where pain": "Right upper area and middle, going to my back.",
            "location": "Right upper quadrant mainly.",
            "ruq": "Yes, right upper quadrant pain.",
            "epigastric": "Also in the middle.",
            "back": "Yes, goes to my back.",
            "shoulder": "Some pain in my right shoulder too.",
            "scapula": "Yes, right shoulder blade area.",
            "severity": "10 out of 10.",
            "how bad": "Worst pain I've had.",
            "character": "Constant, severe, aching.",
            "constant": "Yes, constant pain.",
            "colicky": "Not colicky - constant.",
            
            // Charcot's triad - FEVER
            "fever": "Yes, high fever - 103°F.",
            "temperature": "103 degrees.",
            "temp": "103°F.",
            "chills": "Yes, severe shaking chills.",
            "rigors": "Yes, rigors.",
            "shaking": "Yes, shaking chills.",
            "sick": "I feel very sick.",
            "toxic": "I feel really sick.",
            
            // Charcot's triad - JAUNDICE
            "yellow": "My family said I look yellow.",
            "jaundice": "Yes, my skin and eyes are yellow.",
            "eyes": "My eyes are yellow.",
            "skin": "My skin is yellowish.",
            "sclera": "Yes, yellow eyes.",
            "icteric": "Yes, I'm jaundiced.",
            "bilirubin": "I assume it's high.",
            
            // Other biliary obstruction symptoms
            "dark urine": "My urine is very dark, like tea.",
            "urine color": "Tea-colored or cola-colored.",
            "tea colored": "Yes, like tea.",
            "pale stool": "My stool has been lighter colored.",
            "clay": "Yes, clay-colored stools.",
            "light stool": "Yes, very pale stools.",
            "acholic": "Yes, pale stools.",
            "itching": "Some itching with the jaundice.",
            "pruritus": "Yes, itchy.",
            "scratching": "Yes, I've been scratching.",
            
            // Reynolds' pentad (severe)
            "confused": "Yes, I've been a bit confused.",
            "confusion": "My thinking is foggy.",
            "mental status": "A little foggy.",
            "altered": "Maybe a bit altered.",
            "hypotension": "I don't know my blood pressure.",
            "blood pressure": "I feel weak and dizzy.",
            "dizzy": "Yes, dizzy.",
            "shock": "I feel very sick.",
            
            // GI symptoms
            "vomiting": "Yes, I've been vomiting.",
            "nausea": "Severe nausea.",
            "eating": "I can't eat.",
            "appetite": "No appetite.",
            
            // Medical terms
            "charcot triad": "I don't know what that means.",
            "reynolds pentad": "I don't know what that is.",
            "ascending cholangitis": "I don't know.",
            "ercp": "I don't know what that is.",
            
            // History
            "medical history": "Gallstones, high blood pressure.",
            "prior ercp": "No, I've never had that.",
            "prior procedures": "No procedures on my gallbladder or bile duct.",
            "diabetes": "No diabetes.",
            "alcohol": "Social drinking only."
        });

        // =====================================================================
        // LOW BACK PAIN - CAUDA EQUINA SCENARIO
        // =====================================================================
        expandScenarioHistory('low-back-pain', 'whatif_lbp_cauda_equina', {
            // Bladder - CRITICAL RED FLAG
            "bladder": "I can't pee. I feel like I need to but nothing comes out.",
            "urination": "I can't urinate - my bladder feels full but I can't go.",
            "pee": "I can't pee.",
            "void": "I can't void at all.",
            "retention": "Yes, urinary retention.",
            "can't pee": "I haven't been able to pee since yesterday.",
            "urinate": "I can't urinate at all.",
            "stream": "No stream - nothing comes out.",
            "catheter": "No, I haven't had a catheter.",
            "full bladder": "My bladder feels completely full.",
            "pressure": "I feel like I have to go but can't.",
            "last urinated": "Yesterday morning.",
            "when last peed": "Yesterday morning - over 24 hours ago.",
            
            // Bowel - RED FLAG
            "bowel": "I've had some incontinence - a few accidents.",
            "stool": "I've had some stool incontinence.",
            "incontinence": "Yes, both bladder and bowel problems.",
            "accidents": "I've had accidents - couldn't control my bowels.",
            "fecal": "Yes, fecal incontinence.",
            "control bowels": "No, I can't control my bowels.",
            "constipation": "Constipated but then had accidents.",
            "diarrhea": "No, it's incontinence, not diarrhea.",
            "rectal tone": "I don't know.",
            
            // Saddle anesthesia - RED FLAG
            "saddle": "The whole area is numb - between my legs.",
            "saddle area": "Yes, numb around my bottom and between my legs.",
            "numb": "Numb between my legs, around my bottom.",
            "numbness": "Significant numbness in that area.",
            "perineum": "That area is numb.",
            "perineal": "Yes, perineal numbness.",
            "genital": "Numbness in my genital area.",
            "genitals": "Yes, numb there.",
            "buttocks": "My buttocks are numb.",
            "butt": "Yes, my butt is numb.",
            "anus": "Numb around my anus.",
            "perianal": "Yes, perianal numbness.",
            "wiping": "I can't feel when I wipe.",
            "sensation": "No sensation when I wipe.",
            "feel wiping": "No, I can't feel it.",
            
            // Bilateral leg weakness - RED FLAG
            "legs": "Both legs are weak. They feel heavy and hard to move.",
            "leg weakness": "Yes, weakness in both legs.",
            "weakness": "Yes, leg weakness - both legs.",
            "bilateral": "Yes, both legs affected.",
            "both legs": "Yes, both legs are weak.",
            "one leg": "No, both legs.",
            "walk": "I'm having trouble walking.",
            "walking": "Very difficult to walk.",
            "gait": "My gait is unsteady.",
            "foot": "My feet feel weak - I'm tripping.",
            "feet": "Both feet are weak.",
            "foot drop": "Yes, I think I have foot drop.",
            "tripping": "Yes, I keep tripping.",
            "stairs": "I can't do stairs.",
            "fall": "I've almost fallen several times.",
            "stand": "It's hard to stand.",
            
            // Sexual dysfunction
            "sexual": "I've had some sexual dysfunction.",
            "erection": "I can't get an erection.",
            "erectile": "Yes, erectile dysfunction.",
            "impotence": "Yes.",
            "sexual function": "Not working properly.",
            
            // Back pain
            "back pain": "Severe back pain, started a few days ago.",
            "how long back pain": "About 3-4 days of back pain.",
            "when start": "Started a few days ago.",
            "where back pain": "Lower back.",
            "low back": "Yes, low back pain.",
            "lumbar": "Yes, lumbar area.",
            "radiation": "Pain goes down both legs.",
            "both legs pain": "Yes, pain radiating to both legs.",
            "sciatica": "Yes, like sciatica but both sides.",
            "bilateral sciatica": "Yes, bilateral symptoms.",
            
            // Progression - CRITICAL
            "progression": "The numbness and weakness have gotten much worse over the past 24 hours.",
            "rapidly": "Yes, rapidly progressive.",
            "getting worse": "Getting rapidly worse.",
            "worse": "Much worse in the last 24 hours.",
            "fast": "Yes, getting worse fast.",
            "progressive": "Yes, rapidly progressive.",
            "stable": "No, definitely getting worse.",
            
            // History
            "back history": "I've had some back problems before, but nothing like this.",
            "prior back problems": "Yes, chronic low back pain.",
            "disc": "I was told I have disc problems.",
            "herniated disc": "Yes, I have a herniated disc.",
            "surgery": "No, I've never had back surgery.",
            "prior surgery": "No back surgery.",
            "spinal stenosis": "I'm not sure.",
            "cancer": "No cancer history.",
            "trauma": "No recent trauma.",
            "fall": "No falls.",
            "lifting": "I did lift something heavy a few days ago.",
            
            // Urgency
            "emergency": "Is this an emergency?",
            "serious": "Is this serious?",
            "permanent": "Could this be permanent?",
            "surgery needed": "Do I need surgery?"
        });

        // =====================================================================
        // APPENDICITIS - PERFORATED SCENARIO
        // =====================================================================
        expandScenarioHistory('appendicitis', 'whatif_appy_perforated', {
            // Duration - longer than typical
            "how long": "The pain started about 3-4 days ago.",
            "when start": "About 3-4 days ago.",
            "duration": "3-4 days of pain.",
            "why waited": "I thought it would get better. I didn't want to come to the hospital.",
            "delay": "Yes, I waited too long.",
            
            // Pain pattern - classic then changed
            "pain": "At first it was around my belly button, then moved to my right side. Now my whole belly hurts.",
            "migration": "Yes, it started central then moved right.",
            "right side": "It was in my right side but now it's all over.",
            "right lower": "Yes, that's where it was worst, but now everywhere.",
            "diffuse": "Now the pain is all over my belly.",
            "generalized": "Yes, generalized now.",
            "location": "Started periumbilical, went to RLQ, now diffuse.",
            "whole belly": "Yes, my whole belly hurts now.",
            
            // "Deceptive calm" then worsening
            "better then worse": "Actually, yesterday I felt a little better, then got much worse.",
            "improvement": "Yes, briefly felt better, then got much worse.",
            "felt better": "For a few hours yesterday I felt better.",
            "sudden worse": "Then suddenly much worse.",
            "rupture": "I'm worried it might have burst.",
            
            // Systemic symptoms - more severe
            "fever": "Yes, high fever - 102-103°F.",
            "temperature": "102-103 degrees.",
            "chills": "Yes, shaking chills.",
            "rigors": "Yes, rigors.",
            "sick": "I feel very sick.",
            "toxic": "I feel really sick.",
            "weak": "Very weak.",
            "dizzy": "Yes, dizzy.",
            
            // Peritonitis signs
            "movement": "Any movement makes it worse.",
            "walking": "It hurts so much to walk.",
            "cough": "Coughing makes it much worse.",
            "bump": "Even bumps in the car were terrible.",
            "jar": "Any jarring motion is excruciating.",
            "lying still": "I have to lie perfectly still.",
            "breathing": "Even breathing deeply hurts.",
            
            // GI symptoms
            "nausea": "Yes, very nauseous.",
            "vomiting": "Yes, I've been vomiting.",
            "how much vomiting": "Multiple times a day.",
            "appetite": "No appetite at all.",
            "eating": "I can't eat anything.",
            "bowel": "I haven't had a bowel movement in 2 days.",
            "constipation": "Yes, constipated.",
            "diarrhea": "No diarrhea.",
            "gas": "I haven't passed gas.",
            "bloated": "Yes, my belly is bloated.",
            "distended": "Yes, distended.",
            
            // Exam findings patient might notice
            "hard": "My belly feels hard and tight.",
            "rigid": "It feels rigid.",
            "board-like": "Yes, like a board.",
            "tender": "Extremely tender everywhere.",
            "rebound": "Yes, it hurts more when you let go.",
            "touch": "I can barely let anyone touch my belly.",
            
            // History
            "appendicitis before": "No, never had appendicitis.",
            "surgery": "No prior abdominal surgery.",
            "similar pain": "No, never had pain like this."
        });

        // =====================================================================
        // APPENDICITIS - PREGNANT SCENARIO
        // =====================================================================
        expandScenarioHistory('appendicitis', 'whatif_appy_pregnant', {
            // Pregnancy status
            "pregnant": "Yes, I'm pregnant.",
            "pregnancy": "Yes, I'm about 24 weeks.",
            "how far along": "24 weeks.",
            "weeks": "24 weeks pregnant.",
            "trimester": "Second trimester.",
            "first pregnancy": "Yes, this is my first.",
            "prenatal care": "Yes, I've been getting regular care.",
            "complications": "No complications until now.",
            "baby": "The baby has been moving normally.",
            "fetal movement": "Yes, I still feel the baby moving.",
            
            // Pain location - DIFFERENT in pregnancy
            "pain": "I have pain on my right side, but it's higher than I expected.",
            "where": "Right side of my belly, kind of up and to the side.",
            "location": "Right side, higher than typical appendicitis location.",
            "higher": "Yes, the pain is higher up than my belly button.",
            "flank": "Almost in my flank area.",
            "right upper": "Kind of right upper area.",
            "unusual location": "I've heard appendix pain is supposed to be lower.",
            "displaced": "I read that the appendix moves in pregnancy.",
            
            // Associated symptoms
            "nausea": "Yes, I've been nauseous but I attributed it to pregnancy at first.",
            "vomiting": "Yes, some vomiting.",
            "morning sickness": "It's worse than my usual morning sickness.",
            "different": "This feels different from morning sickness.",
            "fever": "Maybe a low-grade fever.",
            "chills": "Some chills.",
            "appetite": "I haven't been able to eat.",
            
            // Pregnancy concerns
            "contractions": "No contractions.",
            "cramping": "No uterine cramping - this is different.",
            "bleeding": "No vaginal bleeding.",
            "water": "No, my water hasn't broken.",
            "labor": "I don't think I'm in labor.",
            "preterm": "I'm worried about preterm labor.",
            "baby okay": "The baby is still moving.",
            
            // Worried about risks
            "surgery while pregnant": "Is it safe to have surgery while pregnant?",
            "anesthesia": "Is anesthesia safe for the baby?",
            "risk to baby": "What are the risks to my baby?",
            "wait": "Can we wait until after I deliver?",
            "dangerous": "How dangerous is this?",
            "rupture risk": "What happens if it ruptures?",
            "fetal loss": "Could I lose the baby?",
            
            // History
            "medical history": "No significant medical history before pregnancy.",
            "prior surgery": "No prior surgeries.",
            "allergies": "No drug allergies."
        });

        // =====================================================================
        // DVT - BILATERAL/SYSTEMIC SCENARIO
        // =====================================================================
        expandScenarioHistory('dvt', 'whatif_dvt_bilateral', {
            // Both legs
            "which leg": "Both legs are swollen.",
            "both": "Yes, both legs.",
            "bilateral": "Yes, bilateral swelling.",
            "one or both": "Both legs are affected.",
            "same": "They're about equally swollen.",
            "symmetric": "Yes, pretty symmetric.",
            "asymmetric": "No, they're about the same.",
            "one worse": "No, they're similar.",
            
            // Character of swelling
            "swelling": "Both legs are swollen, especially the ankles and feet.",
            "edema": "Yes, edema in both legs.",
            "pitting": "Yes, when I press, it leaves a dent.",
            "pitting edema": "Yes, pitting edema.",
            "ankle": "Both ankles are very swollen.",
            "ankles": "Yes, both ankles.",
            "feet": "My feet are swollen too.",
            "shoes": "My shoes don't fit.",
            "socks": "My socks leave deep marks.",
            "how long": "It's been getting worse over the past few weeks.",
            "gradual": "Yes, gradual over weeks.",
            "sudden": "No, not sudden.",
            "progressive": "Yes, progressive worsening.",
            
            // Systemic symptoms - suggest CHF
            "breathing": "I've been getting more short of breath, especially lying flat.",
            "short of breath": "Yes, especially at night and lying flat.",
            "dyspnea": "Yes, dyspnea on exertion and at night.",
            "orthopnea": "I need pillows to sleep.",
            "pnd": "I wake up at night short of breath.",
            "paroxysmal": "Yes, I wake up gasping.",
            "pillows": "I sleep on 3 pillows now.",
            "how many pillows": "Three pillows.",
            "lying flat": "I can't lie flat.",
            "flat": "I can't lie flat - makes me short of breath.",
            
            // Weight/fluid
            "weight gain": "I've gained about 10 pounds in the last month.",
            "weight": "I've gained weight quickly.",
            "rapid weight gain": "Yes, about 10 pounds in a few weeks.",
            "how much weight": "About 10 pounds.",
            "fluid": "I feel like I'm retaining fluid.",
            "water weight": "I think it's water weight.",
            
            // Abdominal
            "belly": "My belly seems more swollen too.",
            "abdominal": "Some abdominal swelling.",
            "abdomen": "Yes, my abdomen is bigger.",
            "ascites": "I don't know.",
            "bloating": "Yes, bloating.",
            
            // Heart failure history
            "heart": "I have a history of heart problems.",
            "heart failure": "Yes, I have congestive heart failure.",
            "chf": "Yes, CHF.",
            "weak heart": "Yes, my heart is weak.",
            "ef": "My heart function is about 30%.",
            "ejection fraction": "Around 30% last time.",
            "cardiomyopathy": "Yes, I have cardiomyopathy.",
            "heart attack": "I had a heart attack 3 years ago.",
            "mi": "Yes, MI 3 years ago.",
            
            // Other systemic causes
            "kidney": "I also have some kidney problems.",
            "renal": "My kidneys don't work great.",
            "ckd": "Yes, chronic kidney disease.",
            "liver": "I don't think I have liver problems.",
            "cirrhosis": "No cirrhosis.",
            "albumin": "I'm not sure about my albumin level.",
            "protein": "I don't know.",
            "nephrotic": "I don't know what that is.",
            "thyroid": "My thyroid is okay I think.",
            
            // Why not DVT
            "dvt": "I don't think this is a clot - it's both legs.",
            "clot": "Could both legs have clots?",
            "blood clot": "Is it possible to have clots in both legs?",
            "vena cava": "I don't know what that is.",
            "ivc": "What's that?",
            "bilateral dvt": "Can you get DVT in both legs?",
            
            // Medications
            "diuretic": "Yes, I take Lasix.",
            "lasix": "Yes, 40mg daily.",
            "water pill": "Yes, I take a water pill.",
            "furosemide": "Yes, furosemide.",
            "dose": "40mg once a day.",
            "compliance": "I've been taking it regularly.",
            "taking it": "Yes, I take it every day.",
            "salt": "I try to limit salt but it's hard.",
            "sodium": "I try to watch my sodium.",
            "fluid restriction": "I'm supposed to limit fluids.",
            "how much fluid": "I'm supposed to drink less than 2 liters.",
            "weigh yourself": "I'm supposed to weigh myself daily.",
            "daily weights": "I try to weigh myself.",
            "weight going up": "Yes, it's been going up."
        });

        console.log('[ReasonDx] Additional scenario expansions applied.');
    }

    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeHistoryExpansionPart2);
    } else {
        initializeHistoryExpansionPart2();
    }

})();
