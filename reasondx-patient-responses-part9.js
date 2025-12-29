/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 9: TRAP CASES
 * 
 * These are critical teaching cases where the obvious diagnosis is WRONG
 * Students must learn to look deeper and not anchor on the first impression
 * 
 * 1. Anxiety Trap → Actually PE (pulmonary embolism)
 * 2. GERD Trap → Actually ACS (acute coronary syndrome)  
 * 3. Back Pain Trap → Actually AAA (abdominal aortic aneurysm)
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Anxiety Trap → Pulmonary Embolism
    // 34F, "anxiety attack" but actually PE
    // TEACHING: Don't dismiss as anxiety without ruling out organic causes
    // ==========================================
    
    const NICOLE_DAVIS = {
        meta: {
            caseId: "anxiety-trap-pe",
            patientName: "Nicole Davis",
            age: 34,
            gender: "female",
            occupation: "Marketing executive",
            setting: "Emergency Department",
            diagnosis: "Pulmonary embolism (presenting as 'anxiety')",
            trapDiagnosis: "Anxiety/panic attack",
            criticalFindings: [
                "Dyspnea and tachycardia (could be anxiety OR PE)",
                "Recent long flight (risk factor for DVT/PE)",
                "On oral contraceptives (risk factor)",
                "Unilateral leg swelling (DVT source)",
                "Pleuritic chest pain (not typical anxiety)",
                "Persistent tachycardia at rest",
                "Subtle hypoxia"
            ],
            teachingPoints: [
                "Always consider PE in dyspnea + tachycardia",
                "Ask about DVT risk factors before diagnosing anxiety",
                "Unilateral leg symptoms are a red flag",
                "OCPs + immobility = high VTE risk"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING - Presents like anxiety
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "*breathing rapidly, looks anxious* Hi... I'm sorry, I feel ridiculous being here.",
            
            "how are you|how you doing":
                "*fidgeting, short of breath* I feel like I'm having a panic attack or something. I can't catch my breath.",
            
            "what brings you in|chief complaint|why here|what's wrong":
                "I think I'm having an anxiety attack. I can't breathe right, my heart is racing, I feel like something terrible is going to happen. It started a couple days ago and it won't go away.",
            
            "tell me more|can you explain|describe":
                "I've been so short of breath the last two days. My heart keeps racing. I feel anxious and scared. I thought it was just stress from work but it's not getting better. My husband made me come in.",
            
            "start from the beginning|walk me through":
                "Okay, so... I got back from a business trip to Singapore about 4 days ago. Started feeling a little off the day after. Then 2 days ago I started having trouble catching my breath. My heart's been pounding. I've been so anxious. It won't go away.",

            // ============================================
            // TIMELINE - KEY: Onset after long flight
            // ============================================
            
            "when did this start|when start|how long":
                "The shortness of breath really started about 2 days ago. But I've felt 'off' since I got back from my trip 4 days ago.",
            
            "what trip|tell me about the trip|travel":
                "Business trip to Singapore. I was there for a week. Long flights - like 18 hours each way.",
            
            "when did you fly|flight when|return when":
                "I flew back 4 days ago. Got home really jet-lagged.",
            
            "how was the flight|during the flight":
                "Long. I was in a middle seat, couldn't really move around much. Didn't sleep well. Economy class, you know.",
            
            "get up and walk|move around|during flight":
                "Not really. It was a full flight, I was in the middle, and I didn't want to bother people. I just stayed in my seat most of the time.",
            
            "sudden or gradual|how did it start":
                "Kind of gradual at first. Felt tired after the trip, figured it was jet lag. Then the breathing trouble came on more suddenly.",
            
            "getting worse|progression":
                "Definitely worse. Yesterday I couldn't walk up the stairs without getting winded. That's not normal for me.",
            
            "ever had this before|panic attacks before|anxiety before":
                "I've had anxiety before, stress-related. But it never felt quite like this. Usually I can calm myself down. This feels... different.",

            // ============================================
            // DYSPNEA - Persistent, not episodic like panic
            // ============================================
            
            "shortness of breath|trouble breathing|dyspnea|describe":
                "I just can't get a full breath. Like I can't get enough air no matter how hard I try.",
            
            "all the time|constant":
                "It's pretty constant. Gets worse when I move around but doesn't fully go away even at rest.",
            
            "at rest|right now|sitting here":
                "Even sitting here I'm aware of my breathing. It's not as bad as when I walk, but it's still there.",
            
            "exertion|walking|stairs|activity":
                "Walking makes it much worse. I had to stop twice going up one flight of stairs yesterday.",
            
            "lying down|worse lying flat":
                "Maybe a little worse lying flat? I've been sleeping propped up.",
            
            "comes and goes|episodes":
                "It's pretty constant, not really coming and going like my anxiety usually does.",
            
            "hyperventilating|breathing fast":
                "I don't know, maybe? I feel like I'm trying to breathe faster to get more air.",

            // ============================================
            // CHEST SYMPTOMS - Pleuritic pain is NOT anxiety
            // ============================================
            
            "chest pain|chest discomfort|pain in chest":
                "Yes, actually. Sharp pain on my right side when I take a deep breath.",
            
            "describe the chest pain|what does it feel like":
                "It's sharp. Stabbing. Worse when I breathe in deep or cough.",
            
            "where|location|point":
                "*points to right lateral chest* Right here on my right side.",
            
            "when does it hurt|timing":
                "When I take a deep breath. Or cough. If I hold my breath it doesn't hurt.",
            
            "constant or with breathing|pleuritic":
                "Only with breathing. If I breathe shallow it's not as bad.",
            
            "how long|chest pain when start":
                "Started yesterday. After the shortness of breath.",
            
            "squeeze|pressure|heaviness":
                "No, not pressure or squeezing. More like a stabbing pain.",
            
            "radiate|spread|go anywhere":
                "No, just right there on my right side.",

            // ============================================
            // CARDIAC SYMPTOMS
            // ============================================
            
            "heart racing|palpitations|heart pounding":
                "Yes, my heart has been racing. I can feel it pounding even when I'm just sitting.",
            
            "all the time|constant|how often":
                "Pretty much constantly the last two days. Even when I'm trying to rest.",
            
            "check your pulse|heart rate|how fast":
                "I don't know exactly. It feels really fast. Like over 100 maybe?",
            
            "irregular|skipping|fluttering":
                "Just fast, not irregular that I can tell.",
            
            "with anxiety before|heart race with anxiety":
                "My heart races when I have anxiety, but usually it calms down after a while. This won't calm down.",
            
            "lightheaded|dizzy":
                "A little lightheaded. Especially when I stand up.",
            
            "passed out|fainted":
                "No, haven't fainted. Came close once yesterday when I stood up too fast.",

            // ============================================
            // LEG SYMPTOMS - DVT SOURCE (CRITICAL!)
            // ============================================
            
            "leg pain|legs|leg symptoms":
                "Actually, yes. My left calf has been sore. I thought I just slept on it wrong or got stiff from the flight.",
            
            "which leg|one or both|left or right":
                "Left leg. The right one is fine.",
            
            "describe the leg pain|what does it feel like":
                "Achy. Kind of crampy. Deep in my calf.",
            
            "when did leg pain start|leg when":
                "I noticed it maybe 3 days ago? Day after I got back. Thought it was from sitting so long on the plane.",
            
            "swelling|leg swollen|calf swollen":
                "Now that you mention it... my left ankle and calf do look a little bigger than my right. I thought I was imagining it.",
            
            "compare|look different|asymmetric":
                "*looks at legs* Yeah, the left one is definitely more swollen. I didn't really notice until now.",
            
            "red|warm|tender|hot":
                "Maybe a little warm? It's tender when I touch it.",
            
            "pain with walking|worse with activity":
                "Yes, hurts more when I walk. I've been limping a little.",
            
            "pain with flexing foot|dorsiflexion":
                "Let me try... *flexes foot* Ow, yes, that hurts. Pulls on my calf.",
            
            "ever had leg swelling|clot before|dvt before":
                "No, never had anything like this before.",

            // ============================================
            // RISK FACTORS - CRITICAL
            // ============================================
            
            "birth control|contraceptives|hormones|pill":
                "Yes, I'm on birth control pills. Have been for about 5 years.",
            
            "which pill|what kind|name":
                "It's called Yaz. Combination pill.",
            
            "smoke|smoking|cigarettes":
                "No, I don't smoke.",
            
            "blood clots|clot before|dvt|pe|vte":
                "No, I've never had a blood clot.",
            
            "family history clots|family dvt|family pe":
                "My aunt had a blood clot in her leg once. After a surgery I think.",
            
            "recent surgery|immobilization":
                "No surgery. Just the long flights.",
            
            "pregnant|could you be pregnant":
                "No, I'm on birth control. Period was last week.",
            
            "cancer|malignancy":
                "No cancer.",

            // ============================================
            // ASSOCIATED SYMPTOMS
            // ============================================
            
            "cough|coughing":
                "A little dry cough. Started yesterday.",
            
            "coughing up blood|hemoptysis":
                "No blood when I cough. Just dry.",
            
            "fever|temperature":
                "I don't think I have a fever. I don't feel hot.",
            
            "sweating|diaphoretic":
                "A little clammy. Cold sweats almost.",
            
            "nausea":
                "A little queasy.",
            
            "anxiety|anxious|nervous":
                "Very anxious. I have this feeling of doom, like something bad is going to happen. That's why I thought it was a panic attack.",
            
            "sense of doom|impending doom":
                "Yes, exactly. Like something terrible is about to happen. I can't shake it.",

            // ============================================
            // PAST MEDICAL/ANXIETY HISTORY
            // ============================================
            
            "medical history|conditions|past medical":
                "Just anxiety. I take medication for it. Otherwise healthy.",
            
            "anxiety history|panic attacks|describe your anxiety":
                "I've had generalized anxiety for years. Occasional panic attacks when I'm stressed. But they usually last like 20-30 minutes and then I calm down. This has been going on for 2 days.",
            
            "how is this different|different from usual|compare":
                "My usual anxiety comes and goes. I can use breathing exercises or my medication and it gets better. This doesn't respond to anything. And the leg thing, the chest pain... that's never happened with my anxiety.",
            
            "medications|medicines|what do you take":
                "Lexapro for anxiety - 10mg. And birth control pills. That's it.",
            
            "lexapro helping|medication work":
                "Usually helps a lot. Hasn't touched this.",
            
            "taken extra|prn|as needed|xanax":
                "I don't have anything as-needed. Just the daily Lexapro.",
            
            "allergies":
                "No allergies.",

            // ============================================
            // FAMILY HISTORY
            // ============================================
            
            "family history|family medical":
                "Dad has high blood pressure. Mom is healthy. My aunt had a blood clot like I mentioned.",
            
            "aunt's clot|tell me more|details":
                "She had a clot in her leg after hip surgery. They caught it and treated it. She's fine now.",
            
            "anyone else|other family|clotting disorders":
                "Not that I know of.",

            // ============================================
            // SOCIAL HISTORY
            // ============================================
            
            "smoke|smoking":
                "No, never smoked.",
            
            "alcohol|drinking":
                "Occasionally. Wine with dinner sometimes.",
            
            "drugs|recreational":
                "No.",
            
            "caffeine|coffee":
                "A couple cups of coffee a day. I've cut back thinking it was making my anxiety worse.",
            
            "work|job|occupation":
                "Marketing executive. Stressful job. Lots of travel.",
            
            "travel often|how much travel":
                "Several times a year for work. Long international trips sometimes.",
            
            "exercise|active|activity level":
                "I try to go to the gym 3 times a week. Haven't been since I got back because I'm so winded.",
            
            "married|family|support":
                "Married, no kids yet. My husband drove me here. He's really worried.",

            // ============================================
            // SEXUAL/REPRODUCTIVE HISTORY
            // ============================================
            
            "sexually active|having sex":
                "Yes, with my husband.",
            
            "partner|partners":
                "Just my husband. We've been married 4 years, together for 7.",
            
            "monogamous":
                "Yes, just each other.",
            
            "condoms|protection":
                "No, I'm on the pill. We don't use condoms.",
            
            "why no condoms":
                "We're married, monogamous, I'm on birth control. Don't need them.",
            
            "could you be pregnant|pregnancy possible":
                "No, I'm on the pill and I just had my period last week.",
            
            "lmp|last period|last menstrual period":
                "About a week ago. Normal.",
            
            "trying to get pregnant|planning pregnancy":
                "Not yet. Maybe in a year or two.",
            
            "stis|std|sexually transmitted":
                "No, never. Just been with my husband.",
            
            "sti testing|tested":
                "We were both tested before we got married. Both negative. Haven't needed testing since - only each other.",

            // ============================================
            // PATIENT CONCERNS
            // ============================================
            
            "what do you think this is|your theory":
                "I assumed it was an anxiety attack. A really bad one that won't go away. But something feels different about this...",
            
            "worried about|concerns|scared":
                "I'm worried something is really wrong. This doesn't feel like my normal anxiety. And my leg hurts. And I can't breathe. My husband thinks it's serious.",
            
            "husband thinks|what does he think":
                "He wanted me to come in yesterday. He said the leg swelling worried him. He looked it up online and got scared.",
            
            "anything else|else to tell me":
                "Please don't just tell me it's anxiety and send me home. Something feels really wrong. I know my body and this isn't normal.",
        }
    };

    // ==========================================
    // CASE: GERD Trap → Acute Coronary Syndrome
    // 52M, "heartburn" but actually ACS
    // TEACHING: Atypical ACS presentations, risk factors matter
    // ==========================================
    
    const JAMES_MORRISON = {
        meta: {
            caseId: "gerd-trap-acs",
            patientName: "James Morrison",
            age: 52,
            gender: "male",
            occupation: "Accountant",
            setting: "Emergency Department",
            diagnosis: "NSTEMI (presenting as 'heartburn')",
            trapDiagnosis: "GERD/heartburn",
            criticalFindings: [
                "Epigastric 'burning' (could be GERD or ACS)",
                "Multiple cardiac risk factors",
                "Exertional component",
                "Diaphoresis",
                "Radiation to jaw (not typical GERD)",
                "Not responding to antacids",
                "Family history of early MI"
            ],
            teachingPoints: [
                "Cardiac risk factors change pretest probability",
                "Exertional symptoms suggest cardiac",
                "Diaphoresis with 'heartburn' is a red flag",
                "Jaw pain is concerning for referred cardiac pain",
                "Failure to respond to antacids"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING - Presents like GERD
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "*rubbing chest/epigastrium* Hi doc. Probably wasting your time - just bad heartburn I think.",
            
            "how are you|how you doing":
                "I've had this burning in my chest for a few hours. Tried Tums, Pepto - nothing's working.",
            
            "what brings you in|chief complaint|why here|what's wrong":
                "Really bad heartburn. Started this afternoon. I get heartburn sometimes but this is worse than usual and it won't go away. My wife made me come in.",
            
            "tell me more|can you explain":
                "It's this burning feeling right here *points to epigastrium/lower chest*. Started a few hours ago. I thought it would go away but it hasn't. Antacids aren't helping. And I've been kind of sweaty.",
            
            "start from the beginning|walk me through":
                "I was at work this afternoon, had a stressful meeting. Walking back to my office I noticed this burning sensation. Figured I'd eaten too fast at lunch. Took some Tums. It didn't get better. Actually got worse when I walked up the stairs later.",

            // ============================================
            // TIMELINE
            // ============================================
            
            "when did this start|when start|how long":
                "About 4 hours ago. Around 2pm, after lunch.",
            
            "what were you doing|activity|trigger":
                "I was walking back from a meeting. Pretty stressed - big deadline coming up. Noticed it after climbing the stairs to my floor.",
            
            "eaten|what did you eat|lunch":
                "Grabbed a burger and fries. Ate fast because I was running late.",
            
            "sudden or gradual":
                "Came on pretty suddenly. Hit me on the stairs.",
            
            "gotten worse|progression":
                "Hasn't really gone away. Maybe slightly worse. I noticed it more when I walked to the parking garage.",
            
            "constant or comes and goes":
                "Pretty constant since it started. Gets worse when I exert myself.",

            // ============================================
            // PAIN/DISCOMFORT CHARACTERISTICS
            // ============================================
            
            "describe the pain|what does it feel like|character":
                "Burning. Like really bad heartburn. Some pressure too maybe.",
            
            "burning|heartburn":
                "Yeah, burning is the main thing. Like acid. But there's some pressure underneath it too.",
            
            "pressure|squeezing|heavy":
                "Maybe a little pressure. Like something sitting on my chest. But mainly burning.",
            
            "where|location|point|show me":
                "*rubs epigastrium and lower sternum* Right here. Middle of my chest, lower part. Kind of stomach area too.",
            
            "how bad|scale|severity|1 to 10":
                "Maybe a 6? It's uncomfortable. Not the worst pain ever but it won't go away.",
            
            "radiate|spread|go anywhere else":
                "*pauses* Actually, my jaw has felt kind of achy. Figured I was clenching from stress.",
            
            "jaw|tell me about jaw|describe":
                "Just achy. Left side mainly. I grind my teeth when I'm stressed. Thought it was that.",
            
            "arm|shoulder|arm pain|left arm":
                "Left arm feels a little heavy maybe? Hard to describe. Not real pain.",
            
            "back|between shoulder blades":
                "No back pain.",
            
            "neck|throat":
                "Maybe a little tight in my throat. Like acid reflux.",

            // ============================================
            // AGGRAVATING/RELIEVING - KEY FINDINGS
            // ============================================
            
            "what makes it worse|aggravating|triggers":
                "Walking, climbing stairs. The walk to the parking garage was the worst. Had to slow down.",
            
            "exertion|activity|exercise":
                "Yeah, it gets worse when I exert myself. That's weird for heartburn, right?",
            
            "rest|sitting|lying down|better":
                "Maybe a little better sitting here. Definitely better than when I was walking.",
            
            "what makes it better|relieving":
                "Rest helps some. The antacids didn't do anything though.",
            
            "antacids|tums|pepto|tried":
                "Took like 6 Tums over the last few hours. Nothing. Pepto didn't help either.",
            
            "food|eating|empty stomach":
                "I ate lunch right before this started. Usually my heartburn is worse on empty stomach.",
            
            "position|lying flat|sitting up":
                "No real difference with position. Usually my reflux is worse lying down.",

            // ============================================
            // ASSOCIATED SYMPTOMS - RED FLAGS
            // ============================================
            
            "sweating|diaphoretic|sweaty":
                "Yeah, I've been kind of sweaty. My wife noticed. She said I looked pale and clammy.",
            
            "is that normal for heartburn|sweating unusual":
                "I don't usually sweat with heartburn. That's kind of weird now that I think about it.",
            
            "nausea|nauseated|stomach":
                "A little queasy. Thought it was part of the indigestion.",
            
            "vomiting|throw up":
                "No, haven't thrown up.",
            
            "shortness of breath|trouble breathing|dyspnea":
                "Maybe a little. Especially when I was walking. I'm a little out of shape though.",
            
            "lightheaded|dizzy":
                "A little lightheaded at one point. Sat down and it got better.",
            
            "palpitations|heart racing|irregular":
                "My heart's been beating kind of fast. Figured it was anxiety about the deadline.",
            
            "fatigue|tired":
                "Yeah, really tired actually. More than usual.",

            // ============================================
            // CARDIAC RISK FACTORS - CRITICAL
            // ============================================
            
            "medical history|conditions|past medical":
                "High blood pressure, high cholesterol, pre-diabetic. Doc's been on me to lose weight and exercise more.",
            
            "high blood pressure|hypertension":
                "Yeah, diagnosed about 5 years ago. On medication.",
            
            "controlled|blood pressure controlled":
                "Usually okay. 140s/90s at the doctor. Probably should be better.",
            
            "cholesterol|high cholesterol|hyperlipidemia":
                "Total cholesterol was like 240 last time. LDL was high. I'm on a statin.",
            
            "diabetes|blood sugar|pre-diabetic":
                "Pre-diabetic. A1C was 6.2 or something. They told me to watch my diet.",
            
            "heart problems|heart disease|cad":
                "No heart problems that I know of. This is the first time anything like this.",
            
            "stress test|cardiac testing":
                "Never had any heart testing. Doctor mentioned I should maybe get a stress test but I never scheduled it.",
            
            "family history|family heart problems":
                "My dad had a heart attack at 55. He survived but has had heart problems since.",
            
            "dad's heart attack|tell me more":
                "He was 55. Had to have bypass surgery. He's still alive but has congestive heart failure now. He's 78.",
            
            "anyone else|brothers|uncles":
                "My older brother had a stent put in last year. He's 58.",
            
            "mother|mom":
                "She's healthy. 76 and doing well.",

            // ============================================
            // MEDICATIONS
            // ============================================
            
            "medications|medicines|what do you take":
                "Lisinopril for blood pressure, atorvastatin for cholesterol. Supposed to take aspirin but I forget sometimes.",
            
            "aspirin|how often|taking it":
                "I'm supposed to take baby aspirin daily. I'm not great about it. Maybe a few times a week.",
            
            "take it today|aspirin today":
                "I don't think so. Maybe yesterday?",
            
            "allergies":
                "No medication allergies.",

            // ============================================
            // SOCIAL/LIFESTYLE
            // ============================================
            
            "smoke|smoking|cigarettes":
                "I quit about 10 years ago. Smoked for 20 years before that.",
            
            "how much|pack years":
                "About a pack a day. So 20 pack-years.",
            
            "alcohol|drinking":
                "A few beers most nights. Maybe 3-4.",
            
            "drugs|recreational|cocaine":
                "No drugs. Never.",
            
            "exercise|activity|workout":
                "Not as much as I should. I sit at a desk all day. Maybe walk the dog. Doc keeps telling me to exercise more.",
            
            "diet|eating habits":
                "Could be better. Fast food more than I should. My wife tries to cook healthy but...",
            
            "weight|overweight":
                "I've put on weight. About 230 now. Should probably be around 190.",
            
            "stress|work stress":
                "Work is very stressful. Tax season is coming. Lot of pressure.",
            
            "married|family":
                "Married 25 years. Two kids, both in college.",

            // ============================================
            // SEXUAL HISTORY - 52M married 25 years
            // ============================================
            
            "sexually active|having sex":
                "Yes, with my wife. Though honestly not as much lately.",
            
            "partner|partners":
                "Just my wife. 25 years married.",
            
            "any problems|difficulties|erectile dysfunction":
                "Some. Getting older I guess. Takes longer to... you know. Sometimes doesn't work at all.",
            
            "treatment|viagra|cialis":
                "I tried Viagra once. Haven't used it much.",
            
            "condoms|protection":
                "No, my wife had her tubes tied years ago after our second kid.",
            
            "stis|std":
                "No, never. Just been with my wife.",

            // ============================================
            // GERD HISTORY - May have had this before
            // ============================================
            
            "heartburn before|gerd before|reflux history":
                "I get heartburn sometimes. Usually after spicy food or big meals. Tums always worked before.",
            
            "how often|frequency of heartburn":
                "Maybe once or twice a month. Nothing this bad.",
            
            "diagnosed|doctor told you|gerd diagnosis":
                "Doc mentioned I probably have GERD. Never had any testing though.",
            
            "this different|compare to usual|how is this different":
                "This is worse. And longer. And the Tums aren't helping. And that weird jaw thing. And the sweating. Something feels different.",

            // ============================================
            // PATIENT CONCERNS
            // ============================================
            
            "what do you think this is|your theory":
                "I assumed it was just heartburn from eating fast and stress. But my wife is worried. She said the sweating is weird and I should get checked out. She's usually right.",
            
            "worried about|concerns|scared":
                "Honestly, she's got me a little worried now. My dad had a heart attack at 55. I'm 52. And my brother just had a stent...",
            
            "think it could be your heart|cardiac":
                "I hope not. But... maybe? The stairs thing is weird. And the sweating. And the jaw. My dad said his heart attack felt like indigestion too.",
            
            "anything else":
                "Look, if there's any chance this is my heart, I want to know. My dad almost died. I have kids. I can't take chances.",
            
            "wife|spouse":
                "She's in the waiting room. She's really worried. She's the one who made me come in.",
        }
    };

    // ==========================================
    // CASE: Back Pain Trap → AAA (Ruptured/Leaking)
    // 68M, "back pain" but actually AAA
    // TEACHING: Back pain in older men with vascular risk factors
    // ==========================================
    
    const RICHARD_WARNER = {
        meta: {
            caseId: "back-trap-aaa",
            patientName: "Richard Warner",
            age: 68,
            gender: "male",
            occupation: "Retired construction worker",
            setting: "Emergency Department",
            diagnosis: "Leaking/symptomatic abdominal aortic aneurysm",
            trapDiagnosis: "Musculoskeletal back pain",
            criticalFindings: [
                "Sudden onset severe back pain (not chronic)",
                "Pain radiates to abdomen/flank",
                "History of smoking (major risk factor)",
                "Known hypertension",
                "Pulsatile abdominal mass (if examined)",
                "Hypotension developing",
                "Syncope episode"
            ],
            teachingPoints: [
                "Sudden severe back pain in older male = think AAA",
                "Smoking history dramatically increases AAA risk",
                "Must palpate abdomen in back pain presentations",
                "Hypotension + back pain = surgical emergency",
                "Syncope suggests significant hemorrhage"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING - Presents like back pain but looks sick
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "*pale, sweaty, clearly uncomfortable* Doc... something's really wrong.",
            
            "how are you|how you doing":
                "*grimacing* This is bad. I've had back pain before but nothing like this.",
            
            "what brings you in|chief complaint|why here|what's wrong":
                "Terrible pain in my back. Started suddenly about 2 hours ago. Worst pain of my life. It's deep, goes into my belly. I nearly passed out at home.",
            
            "tell me more|can you explain":
                "I was just sitting watching TV and suddenly this horrible pain hit me in my back. Like someone stabbed me. It won't let up. Goes around to my stomach. I got dizzy and almost blacked out. My wife called 911.",
            
            "start from the beginning|walk me through":
                "I was fine. Sitting in my recliner watching the game. Then out of nowhere - bam - this awful pain in my back, like being kicked by a mule. It spread to my belly. I tried to stand up and nearly passed out. My wife saw me go pale and called an ambulance.",

            // ============================================
            // TIMELINE - KEY: Sudden onset, not chronic
            // ============================================
            
            "when did this start|when start|how long":
                "About 2 hours ago. Came on all of a sudden.",
            
            "what were you doing|activity|trigger":
                "Nothing! I was just sitting in my chair. Didn't lift anything, didn't twist. It just hit me.",
            
            "sudden or gradual|how did it start":
                "Completely sudden. One second I was fine, next second I was in agony.",
            
            "gotten worse|progression|better or worse":
                "Maybe a little worse. Definitely not better. Nothing helps.",
            
            "back pain before|history of back pain|chronic":
                "I've had back pain over the years - construction worker for 40 years. But never anything like this. This is different. This is serious.",
            
            "how is this different|compare to usual back pain":
                "My usual back pain builds up, I know when it's coming, heat and ibuprofen help. This came out of nowhere. Deep inside. Goes to my belly. Nothing helps. And I never nearly passed out from back pain before.",

            // ============================================
            // PAIN CHARACTERISTICS - KEY FEATURES
            // ============================================
            
            "describe the pain|what does it feel like|character":
                "Deep. Tearing. Like something ripping inside me. Constant and severe.",
            
            "tearing|ripping|sharp":
                "Yes, like tearing. Like something is ripping apart inside.",
            
            "where|location|point|show me":
                "*points to mid/lower back and wraps around to abdomen* Starts here in my back, goes around to my belly. Both sides sort of but worse on the left.",
            
            "back|exactly where in back":
                "Middle of my back, down lower. Deep inside, not on the surface.",
            
            "radiate|spread|go anywhere":
                "Goes around to my belly. And down into my groin on the left side.",
            
            "groin|down to groin|leg":
                "Yeah, something going down to my left groin. Achy.",
            
            "abdomen|belly|stomach":
                "My belly hurts too. Deep inside. Like connected to the back pain.",
            
            "how bad|scale|severity|0 to 10":
                "10. Easy. Worst pain of my life. And I've broken bones.",
            
            "constant or comes and goes":
                "Constant. Never lets up. Just relentless.",

            // ============================================
            // AGGRAVATING/RELIEVING
            // ============================================
            
            "what makes it worse|aggravating":
                "Everything. Moving, breathing deep. Can't find any position that helps.",
            
            "what makes it better|relieving":
                "Nothing. Absolutely nothing helps. Usually ibuprofen and heat help my back. Not this.",
            
            "position|lying down|standing":
                "No position helps. Tried lying down, sitting, standing. Nothing.",
            
            "took anything|medication|ibuprofen":
                "Took 4 ibuprofen at home. Didn't touch it.",

            // ============================================
            // SYNCOPE/HEMODYNAMIC - CRITICAL
            // ============================================
            
            "passed out|fainted|blacked out|syncope":
                "Almost. When I tried to stand up, everything went gray. Had to grab the chair. My wife said I went white as a sheet.",
            
            "describe what happened|tell me more":
                "I tried to stand up to go to the bathroom. Got up, took a step, and everything started going dark. My vision went gray. I felt weak. Had to sit back down hard.",
            
            "how long|how long were you out":
                "I didn't fully pass out. Maybe almost. Sat down before I fell. Felt awful for a few minutes. Dizzy, weak, nauseous.",
            
            "happened before|fainted before":
                "Never fainted in my life. Never even came close. That's when I knew something was really wrong.",
            
            "dizzy now|lightheaded now":
                "Yeah, still feel lightheaded. Especially if I try to sit up too much.",
            
            "sweating|sweaty|diaphoretic":
                "Been sweating like crazy. My wife said I'm clammy.",
            
            "nausea|nauseated":
                "Very nauseous. Feels like I might throw up.",
            
            "vomiting|thrown up":
                "Almost. Haven't actually vomited.",
            
            "heart racing|palpitations":
                "My heart feels like it's racing. And I feel weak.",
            
            "weakness|weak":
                "Very weak. Don't have any strength. Just feel drained.",

            // ============================================
            // VASCULAR/ABDOMINAL
            // ============================================
            
            "abdominal pain|belly tender|stomach hurt":
                "Yes, my belly hurts. Deep pain, connected to the back. Not surface pain.",
            
            "where in belly|location":
                "Kind of the middle, maybe more to the left. Deep inside.",
            
            "pulsing|throbbing|pulsatile":
                "Actually... now that you mention it, it does feel like there's something pulsing in there. Throbbing with my heartbeat.",
            
            "feel a mass|noticed anything|lump":
                "I don't know. My belly feels weird. My wife said it looks a little bigger but I've got a gut.",
            
            "blood in stool|bowel movements":
                "Haven't had one since this started. Haven't felt the urge.",
            
            "blood in urine|peeing":
                "Haven't peed either. I was about to go when this hit me.",
            
            "legs|leg pain|circulation":
                "My legs feel kind of cold and achy. Left more than right.",
            
            "numbness|tingling|legs":
                "Maybe a little tingly. Hard to tell with all the other pain.",

            // ============================================
            // RISK FACTORS - CRITICAL
            // ============================================
            
            "medical history|conditions|past medical":
                "High blood pressure, high cholesterol. Smoker for 45 years. Peripheral artery disease - my leg circulation isn't great.",
            
            "high blood pressure|hypertension":
                "Had it for 20 years. On medication but not always great about taking it.",
            
            "blood pressure controlled|well controlled":
                "Not perfectly. Doc says it should be lower. Usually runs 150s/90s.",
            
            "smoking|cigarettes|smoke":
                "Smoked for 45 years. Pack and a half a day. Just quit last year when they found the PAD.",
            
            "pack years|how much":
                "Started at 18, quit at 67. Pack and a half a day. So what's that... almost 70 pack-years.",
            
            "pad|peripheral artery disease|leg circulation":
                "Yeah, they diagnosed that last year. My legs cramp when I walk too far. They said my arteries are clogged up.",
            
            "aneurysm|aortic aneurysm|aaa|ever been told":
                "I... I don't think so. They never mentioned that specifically. They did an ultrasound of my belly once but I don't remember why.",
            
            "ultrasound|what did it show|results":
                "I honestly don't remember. It was a couple years ago. They might have mentioned something but I don't recall.",
            
            "heart disease|heart attack|cad":
                "No heart attacks. They said I have some blockages in my legs but heart seems okay.",
            
            "cholesterol|hyperlipidemia":
                "High cholesterol. On a statin.",
            
            "diabetes":
                "No diabetes.",

            // ============================================
            // FAMILY HISTORY
            // ============================================
            
            "family history|family medical":
                "Dad died of a heart attack at 70. Mom had a stroke. Brother has heart problems too.",
            
            "aneurysm in family|family aaa":
                "I think my uncle had something wrong with his aorta? He had emergency surgery years ago. He died from it actually. I was young, don't remember the details.",
            
            "tell me more|uncle":
                "He was maybe 65? Started having horrible stomach pain, went to the hospital, emergency surgery, didn't make it. They said something burst.",

            // ============================================
            // MEDICATIONS
            // ============================================
            
            "medications|medicines|what do you take":
                "Lisinopril and amlodipine for blood pressure. Atorvastatin for cholesterol. Aspirin. Cilostazol for my legs.",
            
            "take them regularly|adherent":
                "Usually. I miss sometimes. Probably take them 5-6 days a week.",
            
            "blood thinners|anticoagulants|plavix":
                "Just aspirin. No blood thinners.",
            
            "allergies":
                "No allergies.",

            // ============================================
            // SOCIAL
            // ============================================
            
            "work|occupation|job":
                "Retired construction worker. Did it for 40 years. Lots of heavy lifting back in the day.",
            
            "alcohol|drinking":
                "Beer mostly. Few beers a day.",
            
            "drugs|recreational":
                "No drugs.",
            
            "married|family|live with":
                "Married 45 years. My wife Margaret is here. She's scared to death.",
            
            "children|kids":
                "Three grown kids, five grandkids. They're all on their way to the hospital.",

            // ============================================
            // SEXUAL HISTORY - 68M, married 45 years
            // ============================================
            
            "sexually active|having sex":
                "Not much anymore. Between my age and my wife's health... maybe once a month if that.",
            
            "partner|partners":
                "Just my wife. 45 years together.",
            
            "condoms|protection":
                "No, Margaret's been past menopause for 20 years.",
            
            "stis|std":
                "No, never. Only been with Margaret.",
            
            "erectile dysfunction|problems":
                "Yeah, that's been a problem the last few years. The doctor said it's from my circulation issues.",

            // ============================================
            // PATIENT CONCERNS
            // ============================================
            
            "worried about|concerns|scared":
                "I'm scared. I've never felt anything like this. And almost passing out... something's really wrong. Am I dying?",
            
            "what do you think this is":
                "I don't know. My back has never done this. And my belly... and almost blacking out. This feels like something bad.",
            
            "anything else|else to tell me":
                "Please help me. I'm 68 years old, I've got grandkids. I'm not ready to go yet. Whatever this is, please fix it.",
            
            "wife|margaret":
                "She's in the waiting room. She's been crying. Can you tell her what's going on?",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['anxiety-trap-pe'] = NICOLE_DAVIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['gerd-trap-acs'] = JAMES_MORRISON;
    window.COMPREHENSIVE_PATIENT_RESPONSES['back-trap-aaa'] = RICHARD_WARNER;
    
    console.log('ReasonDx Part 9 (Trap Cases: PE, ACS, AAA) loaded');

})();
