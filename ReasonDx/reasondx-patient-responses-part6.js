/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 6: Chest Pain, Syncope, DKA
 * 
 * Includes comprehensive sexual/reproductive history for all cases
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Jordan Quincy - Chest Pain (ACS in Diabetic)
    // 58M, diabetic, atypical presentation
    // ==========================================
    
    const JORDAN_QUINCY = {
        meta: {
            caseId: "chest-pain",
            patientName: "Jordan Quincy",
            age: 58,
            gender: "male",
            occupation: "Accountant",
            setting: "Emergency Department",
            diagnosis: "NSTEMI (atypical presentation in diabetic)",
            criticalFindings: [
                "Diabetic - may have atypical angina/silent ischemia",
                "Exertional symptoms (dyspnea, fatigue)",
                "Risk factors: DM, HTN, hyperlipidemia, family history",
                "Mild discomfort rather than classic crushing pain",
                "Diaphoresis, nausea"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING & CHIEF COMPLAINT
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "*looks anxious, slightly diaphoretic* Hi.",
            
            "how are you|how you doing":
                "Not great. Something's not right. I just feel... off.",
            
            "what brings you in|chief complaint|why here|what's wrong":
                "I've been feeling this pressure in my chest. And I'm really tired and short of breath. Started this morning when I was walking to my car.",
            
            "tell me more|can you explain|describe":
                "It's not exactly pain... more like pressure or tightness. Started when I was walking. Also feel queasy and I've been sweating even though I'm not hot.",
            
            "start from the beginning|walk me through":
                "Okay. This morning I was walking from the parking lot to my office - it's maybe a 5 minute walk. About halfway there I started feeling this pressure in my chest and got really short of breath. Had to stop and sit down. It eased up a bit but I still don't feel right.",

            // ============================================
            // TIMELINE
            // ============================================
            
            "when did this start|when start|how long":
                "This morning. Around 8am. So about 3 hours ago.",
            
            "what were you doing|what happened":
                "Walking from the parking lot to my office. Normal walk I do every day. But today I couldn't make it.",
            
            "sudden or gradual":
                "Came on gradually as I was walking. Got worse the more I walked.",
            
            "ever had this before|happened before|first time":
                "I've been getting more tired with exertion lately. Maybe a little short of breath climbing stairs. But nothing like this. This is different.",
            
            "how long getting tired|when did fatigue start":
                "Maybe a month or two? I thought it was just getting older. Or my diabetes.",
            
            "what happened after you stopped|when you rested":
                "The pressure eased up some when I sat down. But it didn't completely go away. I still feel it now, just less intense.",
            
            "why come in now|why today":
                "My wife insisted. She said I looked gray. And I'm still feeling the pressure. Can't shake it.",

            // ============================================
            // CHEST SYMPTOMS - ATYPICAL
            // ============================================
            
            "describe the chest discomfort|what does it feel like|character":
                "Pressure. Like something sitting on my chest. Not sharp pain. More like... tightness. Heaviness.",
            
            "where is the discomfort|location|point":
                "*puts hand over mid-sternum* Right here. In the center of my chest.",
            
            "how bad|scale of 1 to 10|severity":
                "When it was worst, walking, maybe a 6. Now sitting here maybe a 3 or 4. But it won't go completely away.",
            
            "sharp or dull|stabbing":
                "Not sharp at all. Dull pressure. Heaviness.",
            
            "burning":
                "Maybe a little. I thought it might be heartburn at first.",
            
            "crushing|squeezing|elephant":
                "Yeah, squeezing is a good word. Like a band around my chest.",
            
            "radiates|spread|travel|go anywhere":
                "Maybe into my left arm a little. Hard to describe. More like it aches.",
            
            "left arm|arm pain":
                "Left arm feels heavy. Maybe aching. Not real pain.",
            
            "jaw|neck|shoulder|back":
                "My jaw feels a little tight. Thought I was clenching from stress.",
            
            "what makes it worse|aggravating":
                "Walking, any exertion. That's when it got really bad.",
            
            "what makes it better|relieving":
                "Resting helps. Sitting down. It got better when I stopped walking.",
            
            "constant or comes and goes":
                "It's kind of constant now, but less intense than when I was walking. When I exert myself it gets much worse.",

            // ============================================
            // ASSOCIATED SYMPTOMS
            // ============================================
            
            "shortness of breath|trouble breathing|dyspnea":
                "Yes, that's the other big thing. Got really winded walking this morning. Couldn't catch my breath.",
            
            "short of breath at rest|right now":
                "A little. Better than before but I'm still aware of my breathing.",
            
            "sweating|diaphoretic|clammy":
                "Yes, I've been sweaty. My wife noticed. Said I looked clammy.",
            
            "cold sweat|night sweats":
                "Kind of clammy. Not regular sweating like from heat.",
            
            "nausea|nauseated|queasy":
                "Yes, I feel queasy. Like I might throw up.",
            
            "vomiting|throw up":
                "No, haven't actually vomited. Just the nausea.",
            
            "lightheaded|dizzy":
                "A little lightheaded. Not vertigo, just... woozy.",
            
            "palpitations|heart racing|irregular":
                "Maybe my heart's been beating faster. Hard to tell.",
            
            "fatigue|tired":
                "Very tired. More tired than I should be.",
            
            "fever|chills":
                "No fever or chills.",

            // ============================================
            // PAST MEDICAL HISTORY
            // ============================================
            
            "medical history|medical problems|conditions|past medical history":
                "Type 2 diabetes - had it about 10 years. High blood pressure. High cholesterol. The trifecta, my doctor calls it.",
            
            "diabetes|blood sugar|dm":
                "Type 2 for about 10 years. On medications and insulin.",
            
            "well controlled|diabetes control|a1c":
                "Could be better. Last A1C was 8.2. Supposed to be lower.",
            
            "complications|diabetes complications|neuropathy|nephropathy":
                "Some numbness in my feet - neuropathy. They watch my kidneys but so far okay.",
            
            "high blood pressure|hypertension":
                "Yes, on medication. Usually runs around 140s/90s.",
            
            "cholesterol|hyperlipidemia":
                "Yes, on a statin. Numbers are better now but were high.",
            
            "heart disease|heart attack|cardiac|cad":
                "Never had a heart attack. They mentioned I'm high risk because of the diabetes.",
            
            "prior heart testing|stress test|cardiac workup":
                "Had a stress test about 3 years ago. They said it was okay.",
            
            "stroke|tia":
                "No stroke.",
            
            "peripheral artery disease|pad|circulation":
                "They mentioned my circulation isn't great. Related to the diabetes.",
            
            "hospitalizations":
                "Never hospitalized except for a hernia repair years ago.",

            // ============================================
            // MEDICATIONS
            // ============================================
            
            "medications|medicines|taking anything|meds":
                "Metformin, insulin, lisinopril for blood pressure, atorvastatin for cholesterol, baby aspirin.",
            
            "insulin|what kind|how much":
                "Lantus at night - 30 units. And I'm supposed to take Humalog with meals but I'm not always good about it.",
            
            "metformin|glucophage":
                "1000mg twice a day.",
            
            "blood pressure medicine|lisinopril":
                "Lisinopril 20mg once a day.",
            
            "statin|atorvastatin|lipitor":
                "Atorvastatin 40mg at night.",
            
            "aspirin":
                "Baby aspirin, 81mg, once a day.",
            
            "take them regularly|adherent|compliant":
                "Most of the time. Sometimes I forget the lunch insulin.",
            
            "nitroglycerin|nitro":
                "No, I've never had that prescribed.",

            // ============================================
            // ALLERGIES
            // ============================================
            
            "allergies|allergic|medication allergies":
                "Penicillin. Get a rash.",
            
            "any other allergies":
                "Just penicillin.",

            // ============================================
            // FAMILY HISTORY
            // ============================================
            
            "family history|family medical history":
                "Heart disease runs in my family. My dad had a heart attack at 55. Brother had a stent at 52.",
            
            "father|dad|father's heart":
                "Dad had a heart attack at 55. He survived but has heart failure now.",
            
            "mother|mom":
                "Mom has diabetes and high blood pressure. She's 82.",
            
            "siblings|brother":
                "Brother's 52, had a stent put in last year. My sister has diabetes too.",
            
            "anyone die young|sudden death":
                "My grandfather died of a heart attack in his 50s.",
            
            "diabetes in family":
                "Mom, sister, and me all have it. Runs in the family.",

            // ============================================
            // SOCIAL - COMPREHENSIVE
            // ============================================
            
            "smoke|smoking|cigarettes":
                "I quit 5 years ago. Smoked for about 25 years before that. Pack a day.",
            
            "alcohol|drink":
                "Occasional. Maybe a glass of wine with dinner once or twice a week.",
            
            "drugs|recreational":
                "No, nothing like that.",
            
            "work|job|occupation":
                "Accountant. Desk job. Sit most of the day.",
            
            "exercise|physical activity":
                "Not as much as I should. Doctor keeps telling me to exercise more. I walk sometimes.",
            
            "stress|stressful":
                "Work's been stressful. Tax season just ended, so it's been intense.",
            
            "diet":
                "Trying to watch it because of the diabetes. Not always successful.",
            
            "married|spouse|wife":
                "Yes, married 32 years. My wife Carol drove me in.",
            
            "children|kids":
                "Two kids, both adults now. Grown and gone.",

            // ============================================
            // SEXUAL HISTORY - 58M, married 32 years
            // ============================================
            
            "sexually active|having sex|intercourse":
                "Not as much as we used to. To be honest, I've been having some trouble in that department.",
            
            "trouble|problems|erectile|ed":
                "Yeah, erectile dysfunction. Started a few years ago. Doctor said it's related to the diabetes.",
            
            "treatment for ed|viagra|cialis":
                "I have a prescription for Cialis but I don't take it often.",
            
            "partner|partners":
                "Just my wife Carol. 32 years married.",
            
            "monogamous|faithful":
                "Yes, of course. Just Carol.",
            
            "condoms|use protection|barrier":
                "*looks confused* No, we don't use condoms. We've been married 32 years. Carol went through menopause years ago. Why do you ask?",
            
            "contraception|birth control|pregnancy":
                "That's not a concern anymore. Carol's been through menopause - she's 56. And honestly with the ED...",
            
            "stis|std|sexually transmitted":
                "No, we've never had anything like that. Just been with each other.",
            
            "sti testing|hiv|tested":
                "No, never saw the need. Only been with Carol since we were in our twenties.",
            
            "worried about stis|concerned":
                "No, that's never been a concern for us. Should it be?",

            // ============================================
            // PATIENT CONCERNS
            // ============================================
            
            "what are you worried about|concerns|scared":
                "My dad had a heart attack at 55. I'm 58. I'm terrified this is the same thing.",
            
            "what do you think it is|your theory":
                "I'm afraid it's my heart. With my family history and all my risk factors...",
            
            "questions for me":
                "Is this a heart attack? Am I going to be okay?",
            
            "anything else":
                "Please don't sugarcoat it. If it's bad, tell me. I need to know for my family.",
        }
    };

    // ==========================================
    // CASE: Michael Hayes - Syncope/Aortic Stenosis
    // 72M, widowed, syncope with exertion
    // ==========================================
    
    const MICHAEL_HAYES = {
        meta: {
            caseId: "syncope-aortic-stenosis",
            patientName: "Michael Hayes",
            age: 72,
            gender: "male",
            occupation: "Retired teacher",
            setting: "Emergency Department",
            diagnosis: "Syncope - severe aortic stenosis",
            criticalFindings: [
                "Exertional syncope - ominous symptom",
                "Systolic murmur on exam",
                "Dyspnea on exertion",
                "History of 'heart murmur' never worked up",
                "Triad: syncope, angina, dyspnea = severe AS"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING & CHIEF COMPLAINT
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "Hello doctor. *seems anxious*",
            
            "how are you|how you doing":
                "Shaken up, honestly. I passed out today. Never happened before.",
            
            "what brings you in|chief complaint|why here|what's wrong":
                "I fainted. Was climbing the stairs at my daughter's house and I just... went down. Woke up on the landing with everyone standing over me.",
            
            "tell me more|can you explain|describe":
                "I was going up the stairs - about halfway up - when I got really dizzy and short of breath. Next thing I know I'm on the floor. My daughter called 911.",
            
            "start from the beginning|walk me through":
                "I was at my daughter's for lunch. After we ate, I started climbing the stairs to use the bathroom. About halfway up I felt lightheaded, short of breath, then everything went black. I woke up maybe 10-15 seconds later my daughter said.",

            // ============================================
            // TIMELINE
            // ============================================
            
            "when did this happen|when start|how long ago":
                "About an hour ago. The ambulance brought me straight here.",
            
            "first time|ever happened before|passed out before":
                "Never completely passed out before. But I've been getting lightheaded with activity lately.",
            
            "lightheaded how long|getting dizzy|describe that":
                "Maybe the last few months? Started noticing I get winded and dizzy when I exert myself. Climbing stairs, walking uphill.",
            
            "worse lately|progression":
                "Definitely worse. A year ago I could walk a mile. Now I can barely do a block without stopping.",
            
            "any warning|before you passed out":
                "I felt lightheaded. Short of breath. Heart was pounding. Then nothing.",
            
            "how long were you out|duration of unconsciousness":
                "My daughter said maybe 10-15 seconds. Felt like longer.",
            
            "hit your head|injured|fall":
                "I don't think I hit my head. Maybe my shoulder. Nothing serious.",

            // ============================================
            // ASSOCIATED SYMPTOMS
            // ============================================
            
            "chest pain|chest pressure|angina":
                "Sometimes I get a tightness in my chest when I'm exerting myself. Goes away when I rest.",
            
            "describe the chest discomfort|what does it feel like":
                "Pressure. Like something's squeezing. Happens with exertion, goes away with rest.",
            
            "shortness of breath|dyspnea|trouble breathing":
                "Yes, that's been a big problem. Get winded so easily now. Even walking from the car.",
            
            "at rest or with activity|when short of breath":
                "Mostly with activity. But recently even a little exertion does it.",
            
            "lying down|orthopnea|pillows":
                "I have been using an extra pillow at night. Seems to help me breathe easier.",
            
            "swelling|edema|ankles|legs":
                "A little ankle swelling at the end of the day. Goes down overnight.",
            
            "palpitations|heart racing|irregular":
                "Sometimes my heart feels like it's pounding. Especially with activity.",
            
            "fatigue|tired":
                "Very tired. Don't have the energy I used to.",

            // ============================================
            // PAST MEDICAL HISTORY
            // ============================================
            
            "medical history|medical problems|conditions|past medical history":
                "High blood pressure, high cholesterol. And they told me years ago I had a heart murmur.",
            
            "heart murmur|tell me about that|murmur when":
                "Doctor heard it maybe 15 years ago. Said it was mild and to keep an eye on it. Haven't really followed up.",
            
            "ever had it checked|echo|ultrasound of heart":
                "I think I had an ultrasound of my heart years ago. They said it was mild. Haven't repeated it.",
            
            "valve disease|aortic stenosis|valve problems":
                "They mentioned something about a valve but said it wasn't serious. That was years ago.",
            
            "heart attack|mi|cad":
                "No heart attacks.",
            
            "heart failure|chf|weak heart":
                "Not that I know of.",
            
            "high blood pressure|hypertension":
                "Yes, on medication. Usually controlled.",
            
            "cholesterol|hyperlipidemia":
                "Yes, on a statin.",
            
            "diabetes":
                "No diabetes.",
            
            "stroke|tia":
                "No stroke.",
            
            "hospitalizations":
                "Just a knee replacement 5 years ago.",

            // ============================================
            // MEDICATIONS
            // ============================================
            
            "medications|medicines|meds":
                "Lisinopril for blood pressure, atorvastatin for cholesterol, baby aspirin.",
            
            "lisinopril|blood pressure medicine":
                "20mg once a day.",
            
            "statin|atorvastatin":
                "40mg at night.",
            
            "aspirin":
                "81mg, once a day.",
            
            "any other medications":
                "Just those three.",
            
            "take them regularly|adherent":
                "Yes, I'm good about taking them.",

            // ============================================
            // ALLERGIES
            // ============================================
            
            "allergies|allergic|medication allergies":
                "No medication allergies.",

            // ============================================
            // FAMILY HISTORY
            // ============================================
            
            "family history|family medical history":
                "My father had heart surgery - a valve replacement I think - when he was about my age.",
            
            "father|dad|tell me more":
                "He had something wrong with his heart valve. Had surgery. Lived another 15 years after that.",
            
            "mother|mom":
                "Mom had a stroke in her 80s. Passed from that.",
            
            "siblings":
                "Brother's healthy. Sister has high blood pressure.",
            
            "sudden death|die young":
                "No, everyone lived to a reasonable age.",

            // ============================================
            // SOCIAL - COMPREHENSIVE
            // ============================================
            
            "smoke|smoking|cigarettes":
                "Quit 20 years ago. Smoked for about 30 years before that.",
            
            "how much did you smoke|pack years":
                "About a pack a day for 30 years.",
            
            "alcohol|drink":
                "Very little now. Maybe a beer at a barbecue.",
            
            "drugs|recreational":
                "No, never.",
            
            "work|job|occupation":
                "Retired. Used to teach high school history. Retired about 7 years ago.",
            
            "exercise|physical activity":
                "I used to walk every day. Can't really do that anymore. Get too winded.",
            
            "live with|living situation|who do you live with":
                "I live alone. My wife passed 3 years ago.",
            
            "wife passed|widow|sorry to hear":
                "Thank you. Cancer. It was tough. I manage okay on my own.",
            
            "children|kids|family support":
                "Two daughters nearby. They check on me. I was at my daughter's house when this happened.",
            
            "driving|do you still drive":
                "Yes, I still drive. Should I not be?",

            // ============================================
            // SEXUAL HISTORY - 72M, widowed 3 years
            // ============================================
            
            "sexually active|having sex|intercourse":
                "No, not since my wife passed. Haven't been with anyone since.",
            
            "partner|partners|dating":
                "No, I'm not seeing anyone. Still feel married to Margaret honestly.",
            
            "when last sexually active|how long":
                "It's been over 3 years. Before Margaret got sick.",
            
            "condoms|protection|contraception":
                "That's not relevant. I'm not sexually active.",
            
            "stis|std|sexually transmitted|history":
                "Never had any STIs. Was only ever with Margaret, and we were together 45 years.",
            
            "sti testing|hiv|tested":
                "Never needed testing. Only one partner my whole life.",

            // ============================================
            // PATIENT CONCERNS
            // ============================================
            
            "what are you worried about|concerns|scared":
                "I'm scared. Passing out like that - is something seriously wrong with my heart? My dad needed heart surgery...",
            
            "what do you think it is":
                "I wonder if it's whatever my father had. The valve thing.",
            
            "questions for me":
                "Is this serious? Am I going to need surgery? Can I still live independently?",
            
            "anything else":
                "I don't want to be a burden on my daughters. If something's wrong, I want to know what I'm dealing with.",
        }
    };

    // ==========================================
    // CASE: DKA - Lisa Edwards (for CSA)
    // 38F, new onset diabetes presenting in DKA
    // ==========================================
    
    const LISA_EDWARDS = {
        meta: {
            caseId: "dka-new-onset",
            patientName: "Lisa Edwards",
            age: 38,
            gender: "female",
            occupation: "Marketing manager",
            setting: "Emergency Department",
            diagnosis: "Diabetic ketoacidosis - new onset Type 1 diabetes",
            criticalFindings: [
                "Polyuria, polydipsia x 3 weeks",
                "Significant weight loss (15 lbs)",
                "Nausea, vomiting, abdominal pain",
                "Kussmaul respirations",
                "Fruity breath odor",
                "Family history of autoimmune disease"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING & CHIEF COMPLAINT
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "*appears fatigued, breathing heavily* Hi...",
            
            "how are you|how you doing":
                "*speaks slowly* Terrible. Can't stop throwing up. So weak.",
            
            "what brings you in|chief complaint|why here|what's wrong":
                "I've been so sick. Throwing up all day. Can't keep anything down. And my stomach hurts. I've been feeling bad for weeks but today is the worst.",
            
            "tell me more|can you explain|describe":
                "I've been peeing constantly for weeks. Drinking so much water but still thirsty. Lost a bunch of weight. Then yesterday I started feeling really sick - nausea, throwing up. Now my stomach hurts and I can barely breathe.",
            
            "start from the beginning|walk me through":
                "Maybe 3 weeks ago I noticed I was peeing all the time. Like every hour. And SO thirsty. Drinking water constantly. I thought maybe I had a UTI. Then I realized I'd lost weight - like 15 pounds - without trying. Yesterday I started vomiting. Today it got really bad.",

            // ============================================
            // TIMELINE
            // ============================================
            
            "when did this start|when start|how long":
                "The peeing and thirst - about 3 weeks. The vomiting started yesterday. The stomach pain really bad since this morning.",
            
            "vomiting when|how long vomiting":
                "Started yesterday afternoon. Maybe 6-7 times since then. Can't keep anything down.",
            
            "stomach pain when|abdominal pain":
                "The pain started this morning. Whole belly hurts. Getting worse.",
            
            "peeing|urination|when did that start":
                "About 3 weeks ago. Had to go constantly. Getting up 4-5 times at night.",
            
            "thirst|drinking|when start thirsty":
                "Same time - 3 weeks ago. Can't get enough water. Drink a whole glass and still thirsty.",
            
            "weight loss|when lose weight|how much":
                "I noticed my pants were loose about 2 weeks ago. Weighed myself - I'd lost 15 pounds. Wasn't trying to.",
            
            "worse lately|progression":
                "Getting worse every day. Yesterday was the turning point with the vomiting.",

            // ============================================
            // ASSOCIATED SYMPTOMS - DKA
            // ============================================
            
            "nausea|nauseated":
                "Constant. Haven't felt this sick to my stomach ever.",
            
            "vomiting|throw up|how many times":
                "At least 6 or 7 times since yesterday. Maybe more.",
            
            "what comes up|vomit contents":
                "At first food. Then just water and bile. Nothing left to throw up.",
            
            "abdominal pain|stomach pain|belly pain":
                "Whole belly hurts. Like a cramp all over. Getting worse.",
            
            "where worst|location of pain":
                "All over, hard to pinpoint. Maybe worse in the middle.",
            
            "breathing|shortness of breath|trouble breathing":
                "*breathing deeply* Feel like I can't get enough air. Have to take really deep breaths.",
            
            "confused|thinking clearly|mental status":
                "A little foggy. Hard to concentrate.",
            
            "tired|fatigue|weakness":
                "Exhausted. Barely made it from the car. No energy at all.",
            
            "vision|blurry|seeing":
                "Things have been blurry lately. Thought I needed new glasses.",
            
            "fever|chills":
                "No fever that I noticed. Maybe a little warm.",
            
            "headache":
                "A little. Not the main problem.",
            
            "muscle cramps|leg cramps":
                "Some cramping in my legs.",

            // ============================================
            // DIABETES HISTORY QUESTIONS
            // ============================================
            
            "diabetes|diabetic|blood sugar|ever been told":
                "No, I've never had diabetes. At least not that I knew of. Is that what this is?",
            
            "ever had blood sugar checked|labs":
                "At my physical last year it was normal. They never mentioned diabetes.",
            
            "family history diabetes|family diabetes":
                "My mom has Type 2 diabetes. She developed it in her 50s.",
            
            "uti|urinary tract infection|bladder infection":
                "I thought maybe it was a UTI with all the peeing. But no burning when I go.",

            // ============================================
            // PAST MEDICAL HISTORY
            // ============================================
            
            "medical history|medical problems|conditions|past medical history":
                "I have hypothyroidism - take medication for it. That's about it. I thought I was healthy.",
            
            "thyroid|hypothyroid|hashimoto":
                "Yes, Hashimoto's thyroiditis. Diagnosed about 5 years ago. On levothyroxine.",
            
            "autoimmune|other autoimmune diseases":
                "Just the thyroid. They said it was autoimmune.",
            
            "any other conditions|anything else":
                "No, that's it. I've been pretty healthy until now.",
            
            "hospitalizations":
                "Never been hospitalized.",
            
            "surgeries":
                "No surgeries.",

            // ============================================
            // MEDICATIONS
            // ============================================
            
            "medications|medicines|taking anything|meds":
                "Just levothyroxine for my thyroid. 75 micrograms once a day.",
            
            "any other medications":
                "That's it. Maybe occasional ibuprofen for headaches.",
            
            "vitamins|supplements":
                "A multivitamin. Vitamin D.",
            
            "allergies|allergic|medication allergies":
                "No medication allergies.",

            // ============================================
            // FAMILY HISTORY
            // ============================================
            
            "family history|family medical history":
                "Mom has Type 2 diabetes, diagnosed in her 50s. Dad has heart disease. My sister has thyroid problems too.",
            
            "mother|mom":
                "She's 62. Has Type 2 diabetes, takes pills for it. High blood pressure too.",
            
            "father|dad":
                "He's 65. Had a heart bypass a few years ago.",
            
            "siblings|sister|brother":
                "Sister's 35. She has thyroid problems like me. Hashimoto's runs in the family I guess.",
            
            "autoimmune in family|autoimmune diseases":
                "My sister and I both have thyroid problems. Mom might too actually.",
            
            "type 1 diabetes|juvenile diabetes|insulin dependent":
                "Not that I know of. Mom's is the pill-controlled kind.",

            // ============================================
            // SOCIAL - COMPREHENSIVE
            // ============================================
            
            "smoke|smoking|cigarettes":
                "No, never smoked.",
            
            "alcohol|drink":
                "Socially. Wine with dinner sometimes. Maybe a couple glasses on weekends.",
            
            "drugs|recreational":
                "No drugs.",
            
            "work|job|occupation":
                "Marketing manager. Been at the same company 8 years.",
            
            "stress|stressful":
                "Work's been stressful. Big project deadline coming up. Or was... I guess I'll be missing it.",
            
            "diet|eating habits":
                "I try to eat healthy. Been trying to eat less lately because of the weight loss but then I realized I wasn't doing it on purpose.",
            
            "exercise":
                "Usually go to the gym 3 times a week. Haven't been able to lately - too tired.",
            
            "live with|living situation":
                "I live with my boyfriend Mark. We've been together 4 years.",
            
            "married|single":
                "Not married, but in a long-term relationship. We live together.",

            // ============================================
            // SEXUAL HISTORY - 38F, long-term boyfriend, on IUD
            // ============================================
            
            "sexually active|having sex|intercourse":
                "Yes, with my boyfriend Mark.",
            
            "partner|partners|how many":
                "Just Mark. We've been together 4 years.",
            
            "monogamous|faithful":
                "Yes, we're exclusive.",
            
            "condoms|use protection|barrier":
                "No, we don't use condoms. I have an IUD and we've been together for years.",
            
            "why no condoms|protection":
                "We're in a committed relationship, both tested, I have reliable birth control. Condoms didn't seem necessary.",
            
            "contraception|birth control|prevent pregnancy|iud":
                "I have a Mirena IUD. Got it about 2 years ago.",
            
            "could you be pregnant|pregnancy possible":
                "No, I have an IUD. Highly unlikely.",
            
            "when was last period|lmp|last menstrual period":
                "With the IUD my periods are really light. Had some spotting about 2 weeks ago.",
            
            "pregnancy test|tested":
                "Haven't taken one. Should I with the IUD?",
            
            "ever been pregnant|pregnancy history":
                "No, never been pregnant.",
            
            "planning pregnancy|want children":
                "We've talked about it. Maybe in a year or two. Not right now obviously.",
            
            "stis|std|sexually transmitted":
                "No, never had any STIs.",
            
            "sti testing|tested|when last tested":
                "We both got tested when we moved in together. Both negative.",
            
            "hiv|hiv test":
                "Negative. Tested about 2 years ago.",
            
            "past stis|history":
                "No, never had any.",

            // ============================================
            // PATIENT CONCERNS
            // ============================================
            
            "what are you worried about|concerns|scared":
                "I'm terrified. I feel awful. Is this diabetes? Am I going to need insulin? My mom takes pills...",
            
            "what do you think it is|your theory":
                "The peeing and thirst made me wonder about diabetes. But I never expected to feel THIS sick.",
            
            "questions for me":
                "What's happening to me? Is this serious? Am I going to be okay?",
            
            "anything else":
                "I'm scared. I've never been this sick. Please help me understand what's wrong.",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['chest-pain'] = JORDAN_QUINCY;
    window.COMPREHENSIVE_PATIENT_RESPONSES['syncope-aortic-stenosis'] = MICHAEL_HAYES;
    window.COMPREHENSIVE_PATIENT_RESPONSES['dka-new-onset'] = LISA_EDWARDS;
    
    console.log('ReasonDx Part 6 (Chest Pain, Syncope, DKA) loaded');

})();
