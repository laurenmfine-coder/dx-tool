/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 16: Cardiac Emergencies
 * 
 * Cases:
 * 1. AFib with RVR - 72F
 * 2. Hypertensive Emergency - 58M
 * 3. Aortic Dissection - 62M
 * 4. Acute Pericarditis - 28M
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Dorothy Campbell - AFib with RVR
    // 72F, palpitations, dyspnea, new onset AFib
    // ==========================================
    
    const DOROTHY_CAMPBELL = {
        meta: {
            caseId: "afib-rvr",
            patientName: "Dorothy Campbell",
            age: 72,
            gender: "female",
            occupation: "Retired teacher",
            setting: "Emergency Department",
            diagnosis: "Atrial fibrillation with rapid ventricular response",
            criticalFindings: [
                "Palpitations - irregular",
                "Heart rate 140-150s",
                "Dyspnea on exertion",
                "Fatigue",
                "New onset (first episode)",
                "Risk factors for stroke (age, HTN)"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*hand on chest, looking anxious* Hello doctor. My heart is doing something strange.",
            
            "how are you|how you doing":
                "Frightened. My heart has been racing and fluttering all day. It won't stop.",
            
            "what brings you in|chief complaint|why here":
                "My heart is racing and feels like it's flopping around in my chest. Started this morning. I feel short of breath and weak. My daughter made me come in.",
            
            "tell me more|can you explain":
                "I woke up and my heart was pounding. Not just fast - irregular, like it's skipping and fluttering. I feel breathless just walking to the bathroom. I've never felt anything like this.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "This morning when I woke up around 6am. It's been going on all day - about 8 hours now.",
            
            "sudden|gradual":
                "I woke up with it. So sudden - it was just there when I woke up.",
            
            "ever happened before|previous episodes":
                "Never. I've had occasional skipped beats over the years but nothing like this.",
            
            "still happening|right now":
                "Yes, feel it right now. *puts hand on chest* It's still racing and irregular.",
            
            // PALPITATIONS
            "describe|what does it feel like|palpitations":
                "Fluttering. Flopping. Like a fish flopping in my chest. And fast - really fast. Irregular too - not a steady beat.",
            
            "fast|how fast|rate":
                "Very fast. I tried to count but it's too fast and irregular to count.",
            
            "regular or irregular|rhythm":
                "Definitely irregular. It's all over the place. Skip, skip, flutter, pound.",
            
            "constant|comes and goes":
                "Constant since this morning. Hasn't stopped.",
            
            // ASSOCIATED SYMPTOMS
            "shortness of breath|dyspnea|breathing":
                "Yes, short of breath. Worse when I try to do anything. Even walking to the bathroom winds me.",
            
            "at rest|sitting":
                "Better sitting still but still aware of being a bit breathless.",
            
            "chest pain|chest discomfort":
                "Not really pain. More like discomfort - awareness of my heart pounding. Some tightness.",
            
            "dizzy|lightheaded":
                "A little lightheaded. Especially when I stand up.",
            
            "passed out|fainted|syncope":
                "No, haven't fainted. Felt like I might if I didn't sit down.",
            
            "fatigue|tired|weak":
                "Very tired and weak. No energy at all. That's unusual for me.",
            
            "sweating":
                "A little clammy.",
            
            "nausea":
                "Slightly nauseous.",
            
            // LEG SWELLING/CHF
            "leg swelling|ankles|edema":
                "My ankles have been a bit puffy lately. I noticed it this past week.",
            
            "weight gain|fluid":
                "Maybe a few pounds. I thought it was holiday eating.",
            
            "sleeping|pillows|orthopnea":
                "I've been using an extra pillow lately. Didn't think much of it.",
            
            // TRIGGERS
            "caffeine|coffee|tea":
                "I had my usual coffee this morning. One cup.",
            
            "alcohol|drinking":
                "I had some wine last night at dinner. Maybe two glasses.",
            
            "stress|emotional":
                "The holidays were stressful. Grandkids visiting.",
            
            "sick|infection|fever":
                "No, haven't been sick.",
            
            "thyroid|hyperthyroid":
                "I don't know. I've had my thyroid checked before but not recently.",
            
            // STROKE SYMPTOMS - CRITICAL
            "weakness|arm weakness|face droop":
                "No weakness in my arms or face. Everything moves normally.",
            
            "speech|talking|slurred":
                "No trouble speaking. You can understand me okay, right?",
            
            "vision|seeing":
                "Vision is fine.",
            
            "confusion|thinking":
                "No confusion. Just scared.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure - on medication for years. High cholesterol. Osteoporosis. That's about it.",
            
            "heart problems|heart disease|previous":
                "No heart problems before. No heart attacks, no heart failure.",
            
            "afib before|arrhythmia|irregular heart":
                "Never diagnosed with any heart rhythm problems.",
            
            "diabetes":
                "No diabetes.",
            
            "stroke|tia|mini stroke":
                "No strokes or TIAs.",
            
            "blood clots|dvt|pe":
                "No blood clots.",
            
            // MEDICATIONS
            "medications|medicines|what do you take":
                "Lisinopril for blood pressure - 10mg. Atorvastatin for cholesterol. Calcium and vitamin D. Baby aspirin.",
            
            "blood thinners|anticoagulation|warfarin":
                "No blood thinners. Just the baby aspirin.",
            
            "allergies":
                "No medication allergies.",
            
            // FAMILY HISTORY
            "family history|heart problems in family":
                "My mother had a heart attack in her 70s. My brother has a pacemaker for something - I'm not sure what.",
            
            "afib in family|irregular heart in family":
                "I don't know. My brother's pacemaker might be for that? I should ask him.",
            
            // SOCIAL
            "smoke|smoking":
                "I quit 30 years ago. Smoked in my 20s and 30s.",
            
            "alcohol|how much":
                "Wine with dinner a few times a week. Maybe 1-2 glasses.",
            
            "exercise|activity":
                "I walk daily. Usually 30 minutes. Couldn't do it today.",
            
            "live with|living situation":
                "I live alone. My daughter lives nearby and checks on me.",
            
            // SEXUAL HISTORY - 72F widow
            "sexually active|having sex":
                "No. My husband passed 8 years ago. I'm not seeing anyone.",
            
            "partner":
                "No partner since my husband.",
            
            "stis|std":
                "No, never had any issues.",
            
            // CONCERNS
            "worried about|concerns":
                "Am I having a heart attack? Is this serious? My heart won't stop racing.",
            
            "stroke|worried about stroke":
                "Should I be worried about a stroke? My neighbor had AFib and had a stroke.",
            
            "anything else":
                "I just want my heart to go back to normal. This is terrifying.",
        }
    };

    // ==========================================
    // CASE: William Jackson - Hypertensive Emergency
    // 58M, severe headache, very high BP, end-organ damage
    // ==========================================
    
    const WILLIAM_JACKSON = {
        meta: {
            caseId: "hypertensive-emergency",
            patientName: "William Jackson",
            age: 58,
            gender: "male",
            occupation: "Long-haul truck driver",
            setting: "Emergency Department",
            diagnosis: "Hypertensive emergency with encephalopathy",
            criticalFindings: [
                "Severely elevated BP (220/130)",
                "Severe headache",
                "Visual changes",
                "Confusion/altered mental status",
                "Nausea/vomiting",
                "Known HTN - non-compliant with meds"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*holding head, wincing* Doc... my head is killing me... something's really wrong...",
            
            "how are you|how you doing":
                "*in obvious distress* Terrible. Worst headache of my life. And I can't see right.",
            
            "what brings you in|chief complaint|why here":
                "This headache hit me a few hours ago. Worst I've ever had. Then I started seeing spots, got nauseous, threw up. My wife says I'm not making sense. She drove me here.",
            
            "tell me more|can you explain":
                "I've had a bad headache building all day. Got really bad in the last few hours. Pounding. Then my vision got blurry, started seeing floaters or sparkles. Threw up twice. My wife said I was confused - kept repeating myself.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Headache started this morning, got severe maybe 3-4 hours ago. Vision problems started 2 hours ago.",
            
            "sudden|gradual":
                "Built up through the day, then got suddenly much worse.",
            
            "ever had this before|similar":
                "I get headaches but never like this. This is different. Scary.",
            
            // HEADACHE
            "describe headache|what does it feel like":
                "Pounding. Throbbing. Like my head is going to explode. All over but worst in the back.",
            
            "where|location":
                "Back of my head mostly. But it's everywhere.",
            
            "how bad|severity|scale":
                "10 out of 10. Worst headache I've ever had.",
            
            "neck|stiff neck":
                "My neck is sore. Stiff maybe. Hard to tell with all the head pain.",
            
            // VISUAL SYMPTOMS
            "vision|eyes|seeing":
                "Blurry. Seeing spots. Like sparkles or floaters. Hard to focus.",
            
            "both eyes|one eye":
                "Both eyes. Everything is blurry.",
            
            "blind spots|loss of vision":
                "Some areas seem darker. Like shadows.",
            
            "when did vision start|vision when":
                "A couple hours ago. After the headache got really bad.",
            
            // NEUROLOGICAL
            "confused|confusion|thinking":
                "*wife interjects* He kept asking me the same questions over and over. Didn't remember I'd already answered.",
            
            "weakness|arm|leg|one side":
                "No weakness. I can move everything.",
            
            "numbness|tingling":
                "No numbness.",
            
            "speech|talking":
                "I don't think so... *wife* His speech is okay but he's repeating himself and seems confused.",
            
            "balance|walking":
                "Haven't tried to walk much. Dizzy when I stand.",
            
            // ASSOCIATED
            "nausea|vomiting":
                "Very nauseous. Threw up twice at home. Almost threw up in the car.",
            
            "chest pain|chest":
                "No chest pain.",
            
            "shortness of breath":
                "Maybe a little. Hard to tell.",
            
            "nosebleed|bleeding":
                "No nosebleed.",
            
            // BLOOD PRESSURE HISTORY - CRITICAL
            "blood pressure|hypertension|high blood pressure":
                "Yeah, I have high blood pressure. Have for years.",
            
            "medication|taking medication|on meds":
                "*pauses* I'm supposed to be on medication...",
            
            "taking it|are you taking your medication":
                "Not regularly. I ran out a while ago. It's expensive. And I'm on the road a lot - hard to get refills.",
            
            "how long|when did you stop|last dose":
                "Maybe... 2-3 months since I took it regularly? I know. I know it's bad.",
            
            "what medication|which one":
                "I was on lisinopril. And another one - amlodipine maybe?",
            
            "know your usual BP|what's it usually":
                "It was always high even on the meds. 150s, 160s. Doc kept wanting to adjust it.",
            
            // PAST MEDICAL
            "medical history|other conditions":
                "High blood pressure. High cholesterol. Pre-diabetic. Overweight - I know.",
            
            "heart disease|heart attack":
                "No heart attacks.",
            
            "kidney problems|kidney disease":
                "Doc said my kidneys weren't great last time. Told me to take my meds. I didn't listen.",
            
            "stroke|previous stroke":
                "No strokes before.",
            
            // MEDICATIONS
            "current medications|taking anything":
                "Nothing right now. I stopped everything when I ran out.",
            
            "other medications|supplements":
                "Just some ibuprofen for headaches. Been taking a lot lately.",
            
            "how much ibuprofen|how often":
                "Maybe 4-6 a day the last week or so. For these headaches.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL/LIFESTYLE
            "smoke|smoking":
                "Yeah, I smoke. Pack a day. I know.",
            
            "how long|years smoking":
                "Since I was 18. So 40 years.",
            
            "alcohol":
                "I drink. Beer mostly. Maybe 4-6 beers a night on the road.",
            
            "every night|how often":
                "Most nights. Helps me sleep in the truck.",
            
            "cocaine|drugs|stimulants":
                "No drugs. Never.",
            
            "work|job":
                "Long-haul truck driver. On the road 3 weeks at a time. Makes it hard to see a doctor.",
            
            "diet|eating|salt":
                "Truck stop food mostly. I know it's not good. High salt, high fat.",
            
            "sleep|how much":
                "Not great. Maybe 5-6 hours broken up.",
            
            "stress|stressful":
                "Very stressful job. Deadlines, traffic, being away from family.",
            
            "married|family":
                "Married 30 years. Wife's in the waiting room. She's worried sick.",
            
            // SEXUAL HISTORY - 58M married
            "sexually active|having sex":
                "With my wife when I'm home. Not as often as we used to.",
            
            "partner":
                "Just my wife.",
            
            "erectile dysfunction|problems":
                "Yeah, some issues there. Probably the blood pressure.",
            
            "stis|std":
                "No, never.",
            
            // CONCERNS
            "worried about|concerns":
                "Am I having a stroke? Is this my blood pressure? I should have taken my meds...",
            
            "regret|know you should have":
                "I know. I was stupid. I thought I felt fine. My wife kept telling me to take my meds. I didn't listen.",
            
            "anything else":
                "Please help me doc. I've got grandkids. I can't... I'll take my meds. I promise. Just fix this.",
        }
    };

    // ==========================================
    // CASE: Robert Chen - Aortic Dissection
    // 62M, tearing chest pain radiating to back
    // ==========================================
    
    const ROBERT_CHEN_DISSECTION = {
        meta: {
            caseId: "aortic-dissection",
            patientName: "Robert Chen",
            age: 62,
            gender: "male",
            occupation: "Attorney",
            setting: "Emergency Department",
            diagnosis: "Acute aortic dissection (Type A)",
            criticalFindings: [
                "Sudden severe chest pain",
                "Tearing/ripping quality",
                "Radiates to back",
                "Hypertension history",
                "BP differential between arms",
                "Marfanoid features (if present)"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*pale, diaphoretic, in severe distress* Something's tearing inside me... this is bad... really bad...",
            
            "how are you|how you doing":
                "*grimacing, sweating* Worst pain of my life... it's ripping... I thought I was dying...",
            
            "what brings you in|chief complaint|why here":
                "I was at work and suddenly felt something rip in my chest. Like being torn apart from the inside. Pain went straight through to my back. I told my secretary to call 911.",
            
            "tell me more|can you explain":
                "I was just sitting at my desk and suddenly - wham - this terrible pain hit my chest. Sharp, tearing pain. Went right through to my back between my shoulder blades. I've never felt anything like it. I thought I was going to die.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "About 45 minutes ago. I was at work. Came on suddenly - one second I was fine, the next I was in agony.",
            
            "sudden|gradual":
                "Completely sudden. Like a switch. Zero to worst pain imaginable in one second.",
            
            "getting worse|better|same":
                "Still terrible. Maybe slightly less intense than the initial hit but still awful.",
            
            // PAIN CHARACTERISTICS - KEY
            "describe the pain|what does it feel like":
                "Tearing. Ripping. Like something is being torn apart inside my chest. Sharp and severe.",
            
            "where|location|point":
                "Started in my chest, front and center, but immediately went through to my back.",
            
            "back|where in back":
                "Between my shoulder blades. Like the pain went straight through me front to back.",
            
            "radiate|spread|move":
                "It spread down my back. Feels like it's traveling downward.",
            
            "how bad|severity|scale":
                "10. Absolute 10. Worst pain I've ever experienced. And I've had kidney stones.",
            
            "tearing|ripping|quality":
                "Exactly - tearing. Like something ripping inside. Not squeezing or pressure - tearing.",
            
            // DIFFERENT FROM MI
            "squeeze|pressure|heavy":
                "No, not pressure. It's sharp and tearing. Very different from what I imagined a heart attack would feel like.",
            
            // ASSOCIATED SYMPTOMS
            "shortness of breath|breathing":
                "A little hard to breathe. Mainly from the pain.",
            
            "sweating|diaphoretic":
                "*clearly sweating* I'm soaked. Cold sweat.",
            
            "nausea|vomiting":
                "Very nauseous. Haven't thrown up yet.",
            
            "lightheaded|dizzy|faint":
                "Felt like I might pass out when it first hit. Had to sit down.",
            
            "passed out|lost consciousness":
                "No, didn't fully pass out. Came close.",
            
            // NEUROLOGICAL - Check for branch involvement
            "weakness|arm|leg":
                "My left arm feels a bit weak or numb. Hard to tell.",
            
            "which arm|left or right":
                "Left arm. Feels slightly weaker. Could just be from the pain.",
            
            "legs|walking|both legs":
                "Legs seem okay. Haven't tried to walk.",
            
            "vision|seeing":
                "Vision is okay.",
            
            "speech|talking":
                "I can talk okay.",
            
            // VITAL SIGNS/PHYSICAL
            "blood pressure|bp":
                "I don't know. I have high blood pressure normally.",
            
            "both arms|bp different|arms different":
                "*if examined - BP significantly different between arms*",
            
            "pulse|pulses|feel pulses":
                "I don't know. You can check.",
            
            // RISK FACTORS
            "blood pressure|hypertension|high bp":
                "Yes, I have high blood pressure. On medication but it's never well controlled.",
            
            "controlled|what's your usual bp":
                "Usually runs 150s-160s even on meds. They keep adding more medications.",
            
            "how long|years with high bp":
                "20 years at least. Runs in my family.",
            
            "connective tissue|marfan|tall|flexible":
                "No, nothing like that. I'm not particularly tall or flexible.",
            
            "bicuspid valve|heart valve|told about":
                "I don't think so. No one's mentioned that.",
            
            "cocaine|stimulants|drugs":
                "No. Never. I'm a lawyer - I get drug tested.",
            
            "weight lifting|straining|trauma":
                "No heavy lifting. I was just sitting at my desk.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure - poorly controlled. High cholesterol. Had my gallbladder out years ago.",
            
            "heart disease|heart attack|coronary":
                "No heart attacks. They've checked my heart before - stress test was okay a few years ago.",
            
            "aneurysm|been checked|imaging":
                "I've never had imaging of my aorta that I know of.",
            
            "surgery|previous surgeries":
                "Just the gallbladder, laparoscopic.",
            
            // MEDICATIONS
            "medications|medicines":
                "Lisinopril, amlodipine, metoprolol. Atorvastatin. Baby aspirin.",
            
            "taking them|compliant|regularly":
                "Yes, I take them. Doesn't seem to help much - BP is still high.",
            
            "allergies":
                "No allergies.",
            
            // FAMILY HISTORY
            "family history|family":
                "Father died of a heart attack at 65. Mother has high blood pressure. Brother had a stroke.",
            
            "aneurysm|dissection in family|sudden death":
                "My uncle died suddenly - they said it was his aorta. He was in his 60s.",
            
            "tell me more|uncle":
                "He just collapsed one day. Dead before the ambulance got there. They said something about his aorta at the autopsy.",
            
            // SOCIAL
            "smoke|smoking":
                "Quit 5 years ago. Smoked for 30 years before that.",
            
            "alcohol":
                "Social drinking. Wine with dinner.",
            
            "work|job":
                "Attorney. Partner at a firm. Very stressful.",
            
            "married|family":
                "Married 35 years. My wife is on her way.",
            
            // SEXUAL HISTORY - 62M married
            "sexually active|having sex":
                "Yes, with my wife.",
            
            "partner":
                "Just my wife. 35 years.",
            
            "erectile dysfunction|problems":
                "Some issues. The blood pressure meds don't help.",
            
            "stis|std":
                "No, never.",
            
            // CONCERNS
            "worried about|concerns":
                "I think I'm having a heart attack. Or something worse. This pain... something is really wrong inside me.",
            
            "anything else":
                "Please, just help me. I have grandchildren. I'm not ready to die.",
        }
    };

    // ==========================================
    // CASE: Tyler Martinez - Acute Pericarditis
    // 28M, pleuritic chest pain, recent viral illness
    // ==========================================
    
    const TYLER_MARTINEZ = {
        meta: {
            caseId: "acute-pericarditis",
            patientName: "Tyler Martinez",
            age: 28,
            gender: "male",
            occupation: "Personal trainer",
            setting: "Emergency Department",
            diagnosis: "Acute viral pericarditis",
            criticalFindings: [
                "Sharp pleuritic chest pain",
                "Worse lying flat, better sitting forward",
                "Recent viral illness",
                "Pericardial friction rub (if present)",
                "Low-grade fever",
                "Young, healthy patient"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*sitting forward, looks uncomfortable* Hey doc. This chest pain is freaking me out.",
            
            "how are you|how you doing":
                "Scared. I'm 28 and having chest pain. I thought I was having a heart attack.",
            
            "what brings you in|chief complaint|why here":
                "Chest pain. Sharp pain in the middle of my chest. It's worse when I breathe in or lie down. I'm a personal trainer - I should be healthy. I panicked and came to the ER.",
            
            "tell me more|can you explain":
                "I've had this flu-like thing for the past week. Was getting better, then yesterday this chest pain started. Sharp, stabbing pain. Worse when I take a deep breath. Really bad when I tried to lie down last night - had to sleep sitting up.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "The chest pain started yesterday. About 24 hours ago.",
            
            "sudden|gradual":
                "Kind of sudden. Was feeling better from being sick, then this pain hit.",
            
            "getting worse|progression":
                "About the same. Bad yesterday, still bad today.",
            
            // PAIN CHARACTERISTICS
            "describe the pain|what does it feel like":
                "Sharp. Stabbing. Like something is poking me in the chest.",
            
            "where|location":
                "*points to center of chest* Right here. Middle of my chest, maybe a little to the left.",
            
            "radiate|spread|go anywhere":
                "Maybe to my left shoulder a bit. And I feel it in my back sometimes.",
            
            "how bad|severity|scale":
                "When I breathe deep or lie down, maybe a 7. Sitting still like this, maybe a 4.",
            
            // POSITIONAL - KEY FOR PERICARDITIS
            "lying down|worse lying flat|position":
                "Much worse lying flat. I tried to sleep last night and couldn't. The pain was terrible.",
            
            "sitting up|leaning forward|better":
                "Better when I sit up and lean forward. *demonstrates* Like this. That's why I'm sitting this way.",
            
            "breathing|deep breath|inspiration":
                "Worse when I breathe in deep. So I've been taking shallow breaths.",
            
            // PLEURITIC
            "cough|coughing":
                "Have a little dry cough from being sick. Coughing hurts - makes the chest pain worse.",
            
            "sneeze|sneezing":
                "Sneezing is awful. Like getting stabbed.",
            
            // ASSOCIATED
            "shortness of breath|dyspnea":
                "Not really. Just hurts to breathe deep so I've been avoiding it.",
            
            "palpitations|heart racing|irregular":
                "My heart was racing yesterday when the pain started. Probably because I was scared.",
            
            "lightheaded|dizzy":
                "No dizziness.",
            
            "leg swelling|edema":
                "No leg swelling.",
            
            // VIRAL PRODROME - KEY
            "sick|illness|before this|viral":
                "Yeah, I've been fighting some kind of bug. Started about a week ago.",
            
            "describe|flu-like|symptoms":
                "Sore throat, runny nose, body aches, low fever. I thought it was just a cold or flu.",
            
            "fever|temperature":
                "Low fever - 100-101. Broke a couple days ago. Maybe came back a little yesterday.",
            
            "body aches|myalgias":
                "Yeah, muscle aches. Thought it was from the flu.",
            
            "anyone else sick|exposure|contact":
                "A couple of my clients were sick. Probably caught it at the gym.",
            
            // CARDIAC RISK FACTORS
            "heart problems|cardiac history":
                "None. I'm 28 and healthy. I work out every day. This is crazy.",
            
            "family history|heart disease in family":
                "Nothing early. Grandpa had a heart attack but he was 75.",
            
            "smoke|smoking":
                "Never. I'm a fitness guy.",
            
            "cocaine|drugs|stimulants":
                "No drugs. I don't even drink much. Clean living.",
            
            "supplements|pre-workout|steroids":
                "Just protein powder and creatine. Nothing crazy. No steroids.",
            
            // AUTOIMMUNE/OTHER
            "autoimmune|lupus|rheumatoid|other conditions":
                "No, nothing like that. I'm completely healthy. No medical problems.",
            
            "chest pain before|ever had this":
                "Never. This is my first time with chest pain.",
            
            "injury|trauma|hit your chest":
                "No injury. Nothing hit me.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Nothing. Healthy as can be. Don't even take medications.",
            
            "medications":
                "Nothing. Just vitamins.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "alcohol":
                "Rarely. Maybe a beer at a barbecue.",
            
            "exercise|workout|activity":
                "I'm a personal trainer. I work out 6 days a week. Weights and cardio. Haven't been able to work out with this chest pain.",
            
            "stress|anxiety":
                "I was stressed about this chest pain. Otherwise life is good.",
            
            "married|relationship":
                "Girlfriend of 2 years. She wanted me to come to the ER.",
            
            // SEXUAL HISTORY - 28M in relationship
            "sexually active|having sex":
                "Yeah, with my girlfriend.",
            
            "partner|partners":
                "Just her. 2 years together.",
            
            "condoms|protection":
                "She's on birth control. We don't use condoms - monogamous.",
            
            "stis|std":
                "No, we both got tested when we got together. All clear.",
            
            // CONCERNS
            "worried about|concerns":
                "I'm scared it's my heart. I know I'm young but you hear about athletes dropping dead. Am I having a heart attack?",
            
            "think it's your heart|what do you think":
                "I don't know. I've never had chest pain. I thought I was healthy. This came out of nowhere.",
            
            "anything else":
                "I just want to know it's not serious. I can handle pain. I just need to know my heart is okay.",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['afib-rvr'] = DOROTHY_CAMPBELL;
    window.COMPREHENSIVE_PATIENT_RESPONSES['hypertensive-emergency'] = WILLIAM_JACKSON;
    window.COMPREHENSIVE_PATIENT_RESPONSES['aortic-dissection'] = ROBERT_CHEN_DISSECTION;
    window.COMPREHENSIVE_PATIENT_RESPONSES['acute-pericarditis'] = TYLER_MARTINEZ;
    
    console.log('ReasonDx Part 16 (AFib-RVR, HTN Emergency, Aortic Dissection, Pericarditis) loaded');

})();
