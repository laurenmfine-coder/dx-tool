/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 18: Additional Environmental/Occupational Cases
 * 
 * Cases:
 * 1. Carbon Monoxide Poisoning - 45F (family exposure)
 * 2. Heat Stroke - 68M (outdoor worker)
 * 3. Hypothermia - 72M (homeless)
 * 4. Noise-Induced Hearing Loss - 48M (construction)
 * 5. Berylliosis - 52M (aerospace)
 * 6. Mercury Poisoning - 35F (dental worker)
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Karen Mitchell - Carbon Monoxide Poisoning
    // 45F, headache, family affected, winter heating
    // ==========================================
    
    const KAREN_MITCHELL = {
        meta: {
            caseId: "co-poisoning-family",
            patientName: "Karen Mitchell",
            age: 45,
            gender: "female",
            occupation: "Office manager",
            setting: "Emergency Department",
            diagnosis: "Carbon monoxide poisoning",
            criticalFindings: [
                "Headache, dizziness, nausea",
                "Multiple family members affected",
                "Symptoms worse at home, better outside",
                "Winter, using gas heater",
                "Old home, poor ventilation",
                "Cherry red skin (late/severe)"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*holding head, looks pale* Hi. My whole family is sick. We all have terrible headaches.",
            
            "how are you|how you doing":
                "Awful. Pounding headache, dizzy, nauseous. And my husband and kids are the same. Something's wrong.",
            
            "what brings you in|chief complaint|why here":
                "My whole family got sick at the same time. Headaches, dizziness, nausea. My husband almost passed out this morning. We thought it was food poisoning but we didn't all eat the same thing.",
            
            "tell me more|can you explain":
                "It started last night. I got a headache, thought nothing of it. This morning my husband had a terrible headache, my teenage son was nauseous, my daughter was dizzy. My husband nearly collapsed getting out of bed. That's when we came here.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Last night for me. This morning everyone else got worse. My husband woke up really bad.",
            
            "everyone at once|same time|all together":
                "Pretty much. We all felt worse this morning. All of us.",
            
            "sudden|gradual":
                "Gradual overnight, then much worse this morning.",
            
            // SYMPTOMS
            "headache|describe headache":
                "Throbbing. All over. Like a vice around my head. Worst headache I've had in years.",
            
            "dizzy|dizziness":
                "Yes, dizzy. The room spins when I stand up. Had to hold onto the wall.",
            
            "nausea|vomiting":
                "Very nauseous. My son threw up twice.",
            
            "confused|thinking|mental status":
                "Foggy. Hard to think clearly. My husband seems confused - keeps asking the same questions.",
            
            "vision|seeing":
                "A little blurry.",
            
            "chest pain|breathing":
                "Some tightness in my chest. My husband said he felt short of breath.",
            
            // FAMILY MEMBERS
            "husband|how is he|his symptoms":
                "He's worse than me. Bad headache, confused, almost passed out. He's in another room being seen.",
            
            "kids|children|their symptoms":
                "My son, 16, has headache and vomited. My daughter, 14, is dizzy and has a headache. They're being checked too.",
            
            "anyone else|pets":
                "Our dog! He was acting strange this morning. Lethargic. Wouldn't get up. We left him at home.",
            
            // LOCATION/TIMING - KEY
            "where|at home|location":
                "We were all at home. It's been cold so we've been staying inside.",
            
            "feel better anywhere|outside|leave house":
                "Actually... I felt a little better in the car on the way here. Now that you mention it.",
            
            "symptoms worse at home|better away":
                "Yes! The headache got less bad once we left the house. Is that important?",
            
            // HEATING/VENTILATION - CRITICAL
            "heat|heating|how do you heat|furnace":
                "We have a gas furnace. And we've been using a kerosene space heater in the living room because the furnace isn't keeping up.",
            
            "space heater|kerosene|when started using":
                "Started using the space heater about 3 days ago when it got really cold. We keep it running day and night.",
            
            "ventilation|windows|fresh air":
                "Everything's sealed up tight. It's freezing outside. We haven't opened windows in weeks.",
            
            "furnace|maintained|inspected":
                "I don't know when it was last inspected. It's an old house - built in the 60s. The furnace might be original.",
            
            "garage|attached|car running":
                "No attached garage. We don't run cars inside.",
            
            "co detector|carbon monoxide detector|alarm":
                "We don't have one. I know we should. We kept meaning to get one.",
            
            // HOME DETAILS
            "house|home|describe":
                "Older home, built in the 1960s. We've been there 10 years. Gets drafty in winter.",
            
            "recent changes|anything new|renovations":
                "No renovations. Just the space heater is new.",
            
            "fireplace|wood burning":
                "We have a fireplace but haven't used it this year. The flue might be closed.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure. That's it for me. Husband is healthy. Kids are healthy.",
            
            "heart disease|cardiac":
                "No heart disease.",
            
            "pregnant|could you be pregnant":
                "No, I had a hysterectomy years ago.",
            
            "medications":
                "Just lisinopril for blood pressure.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke|smoking":
                "No, no one in the house smokes.",
            
            "alcohol|drugs":
                "Occasional wine. Nothing last night.",
            
            "work|job":
                "Office manager. Work outside the home.",
            
            // SEXUAL HISTORY - 45F married
            "sexually active":
                "Yes, with my husband.",
            
            "partner":
                "Just my husband. 20 years.",
            
            "stis":
                "No, never.",
            
            // CONCERNS
            "worried about|concerns":
                "Is this carbon monoxide? I read about it. My whole family... the dog... please tell me we're going to be okay.",
            
            "anything else":
                "Can someone check our house? And our dog - he's still there alone. Oh God, the dog...",
        }
    };

    // ==========================================
    // CASE: Robert Jackson - Heat Stroke
    // 68M, outdoor worker, altered mental status, high temp
    // ==========================================
    
    const ROBERT_JACKSON_HEAT = {
        meta: {
            caseId: "heat-stroke-worker",
            patientName: "Robert Jackson",
            age: 68,
            gender: "male",
            occupation: "Landscaper",
            setting: "Emergency Department",
            diagnosis: "Exertional heat stroke",
            criticalFindings: [
                "Core temp >104°F",
                "Altered mental status",
                "Hot, dry skin (or sweating in exertional)",
                "Working outdoors in heat",
                "Elderly (risk factor)",
                "On diuretics (risk factor)"
            ]
        },
        
        responses: {
            // COWORKER/EMT PROVIDES INITIAL HISTORY - PATIENT CONFUSED
            "hello|hi|good morning": 
                "*confused, skin hot, mumbling* Where... what's happening... hot...",
            
            "how are you|how you doing":
                "*coworker* He's out of it doc. We were working outside and he just collapsed. He's burning up.",
            
            "what brings you in|chief complaint|why here":
                "*coworker* We were doing yard work. It's like 98 degrees out. Bob started acting confused, stumbling around. Then he collapsed. His skin is on fire. Called 911 right away.",
            
            "tell me more|can you explain":
                "*coworker* We've been working since 7am. It's been brutal hot. Around 2pm Bob started saying he didn't feel right. Got confused, didn't make sense. Then he went down. Barely conscious.",
            
            // TIMELINE
            "when did this start|when start":
                "*coworker* He started acting weird maybe an hour ago. Collapsed about 30 minutes ago.",
            
            "how long working|outside how long":
                "*coworker* We started at 7. So about 7 hours in the heat.",
            
            "breaks|rest|shade":
                "*coworker* We took a lunch break in the truck with AC. But yeah, mostly working in the sun.",
            
            // PATIENT SYMPTOMS
            "mr jackson|can you hear me|patient":
                "*patient, confused* It's so hot... my head... where am I... *trails off*",
            
            "headache|head":
                "*patient mumbles* Head hurts... so hot... *coworker* He complained of headache earlier before he collapsed.",
            
            "nausea|vomiting":
                "*coworker* He said he felt sick to his stomach. Threw up once.",
            
            "sweating|diaphoretic":
                "*coworker* He was sweating a lot earlier. Then it seemed like he stopped sweating. That's when he got really confused.",
            
            "skin|how does skin feel":
                "*examining - skin is hot and mostly dry*",
            
            // HYDRATION
            "drinking|water|fluids":
                "*coworker* He had some water but probably not enough. I kept telling him to drink more. He's stubborn.",
            
            "how much|how much water":
                "*coworker* Maybe a bottle or two all day? Not nearly enough for how hot it is.",
            
            // HEAT-RELATED HISTORY
            "happened before|heat problems before":
                "*coworker* He had heat exhaustion last summer. Had to sit out for a day. Thought he'd be more careful.",
            
            "acclimatized|used to the heat|working in heat long":
                "*coworker* He's been doing this work for years but this summer has been brutal. Hotter than usual.",
            
            // RISK FACTORS
            "age|how old":
                "*coworker* Bob's 68. Been talking about retirement but keeps working.",
            
            "medications|taking anything":
                "*coworker* I know he takes blood pressure pills. Don't know what kind.",
            
            "*patient on meds*|what do you take":
                "*patient, confused* Pills... the water pills... blood pressure... *trails off*",
            
            "water pills|diuretic":
                "*coworker* Yeah, he mentioned he takes a water pill. Pees a lot.",
            
            "medical history|conditions":
                "*coworker* High blood pressure, I know. Maybe diabetes? He's mentioned checking his sugar.",
            
            "heart problems":
                "*coworker* I don't think so. He's pretty healthy for his age usually.",
            
            // SOCIAL
            "live alone|family":
                "*coworker* His wife passed a few years ago. Lives alone. Kids are grown and moved away.",
            
            "alcohol|drinks":
                "*coworker* He has beers after work sometimes. Don't think he drank last night.",
            
            "smoke":
                "*coworker* Yeah, he smokes. Tried to quit.",
            
            // ORIENTATION CHECK
            "what day is it|where are you|name":
                "*patient* I'm... Bob... it's... Monday? No... I don't know... so hot... *coworker* It's Thursday.",
            
            // COWORKER CONCERNS
            "worried about|concerns":
                "*coworker* Is he going to be okay? I've never seen anyone this out of it from heat. He's a tough guy. This scared me.",
            
            "anything else":
                "*coworker* Please help him. He's like a father to me. Been working together 15 years.",
        }
    };

    // ==========================================
    // CASE: Henry Williams - Hypothermia
    // 72M, homeless, found outside, low temp
    // ==========================================
    
    const HENRY_WILLIAMS_COLD = {
        meta: {
            caseId: "hypothermia-homeless",
            patientName: "Henry Williams",
            age: 72,
            gender: "male",
            occupation: "Homeless",
            setting: "Emergency Department",
            diagnosis: "Moderate hypothermia",
            criticalFindings: [
                "Core temp <95°F (89°F)",
                "Altered mental status/lethargy",
                "Shivering (or absent if severe)",
                "Found outdoors in cold",
                "Elderly, homeless (risk factors)",
                "Possible alcohol use"
            ]
        },
        
        responses: {
            // EMS/PATIENT - PATIENT LETHARGIC BUT AROUSABLE
            "hello|hi|good morning": 
                "*shivering, slow to respond, slurred speech* ...cold... so cold...",
            
            "how are you|how you doing":
                "*very slowly* Cold... can't get warm... tired...",
            
            "what brings you in|chief complaint|why here":
                "*EMS* Found him behind a building by a passerby. It's 28 degrees out. He was lying on cardboard, barely responsive. Temp in the field was 89°F.",
            
            "tell me more|can you explain":
                "*EMS* Bystander called 911 around 6am, found him while walking to work. Said he was mumbling, not making sense. We got him bundled up, started warm fluids en route. He's been more alert but still hypothermic.",
            
            // PATIENT HISTORY - SLOW RESPONSES
            "what happened|how did you get here|mr williams":
                "*slow, slurred* Was sleeping... got cold... couldn't get up... don't remember...",
            
            "where were you sleeping|where|location":
                "*slowly* Behind the store... my spot... cardboard... blanket blew away...",
            
            "how long outside|all night|when":
                "*confused* Don't know... was dark... then light... cold...",
            
            // SYMPTOMS
            "shivering|are you shivering":
                "*shivering visibly* Can't stop... shaking...",
            
            "hands feet|extremities|feeling":
                "*slow* Can't feel my fingers... toes hurt... then stopped hurting...",
            
            "tired|sleepy|level of alertness":
                "*drowsy* So tired... just want to sleep...",
            
            "pain|hurting|anything hurt":
                "*slow* Everything aches... cold hurts...",
            
            "chest pain|heart|breathing":
                "*thinks* Chest feels weird... tight maybe...",
            
            // RISK FACTORS
            "homeless|how long|living situation":
                "*EMS* He's known to us. Been on the streets for years. We've picked him up before.",
            
            "*patient on homelessness*":
                "*slowly* Lost my apartment... five years ago... maybe more... shelters full sometimes...",
            
            "shelter|why not shelter":
                "*slow* Tried... full last night... too late... my spot is okay usually...",
            
            // SUBSTANCES
            "alcohol|drinking|last night":
                "*EMS* We found an empty bottle nearby. Smelled alcohol on him when we picked him up.",
            
            "*patient on alcohol*|drink":
                "*slowly* Had some... keeps me warm... or I thought...",
            
            "how much|what kind":
                "*vague* Vodka... whatever I could get... helps me sleep...",
            
            "drugs|other substances":
                "*shakes head slowly* No... just drink sometimes...",
            
            // PAST MEDICAL
            "medical history|conditions":
                "*EMS* He's been to our ER before. History of alcohol use, COPD, and I think hypertension. Noncompliant with meds.",
            
            "*patient on medical*|sick before":
                "*slowly* Had pneumonia last year... lungs aren't good... supposed to take pills...",
            
            "medications|taking anything":
                "*slow* Don't have them... can't afford... lost them...",
            
            "diabetes":
                "*EMS* Not in our records but should check glucose.",
            
            // MENTAL STATUS
            "what day is it|where are you":
                "*confused* Hospital?... day... I don't know... cold...",
            
            "name|do you know your name":
                "*slowly* Henry... Henry Williams...",
            
            // FROSTBITE CHECK
            "fingers|toes|frostbite|color":
                "*examining* Fingers are waxy, pale. Toes similar. Concerning for frostbite.",
            
            "feel them|sensation":
                "*patient* Can't feel them... numb...",
            
            // SOCIAL
            "family|anyone we can call":
                "*sad, slow* No family... wife died... kids don't talk to me...",
            
            "veteran|military":
                "*slowly* Army... long time ago... Vietnam...",
            
            "va|veteran services":
                "*EMS* We've tried to connect him with VA services before. He's hard to track down.",
            
            // CONCERNS
            "how do you feel now|getting warmer":
                "*still shivering* Little warmer... still cold... tired...",
            
            "anything else":
                "*slowly* Just... don't want to go back outside... not tonight... please...",
        }
    };

    // ==========================================
    // CASE: Michael Torres - Noise-Induced Hearing Loss
    // 48M, construction worker, progressive hearing loss
    // ==========================================
    
    const MICHAEL_TORRES_NIHL = {
        meta: {
            caseId: "nihl-construction",
            patientName: "Michael Torres",
            age: 48,
            gender: "male",
            occupation: "Construction worker",
            setting: "Occupational Health",
            diagnosis: "Noise-induced hearing loss",
            criticalFindings: [
                "Bilateral high-frequency hearing loss",
                "Tinnitus",
                "Difficulty hearing in noisy environments",
                "Years of occupational noise exposure",
                "Inconsistent hearing protection use",
                "Gradual onset"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*leans forward* Sorry, what? Oh, hi doc. Having trouble hearing lately.",
            
            "how are you|how you doing":
                "Okay, except I can't hear worth a damn anymore. Wife's fed up with me asking 'what?' all the time.",
            
            "what brings you in|chief complaint|why here":
                "My hearing is getting worse. Been happening gradually but now it's really affecting me. Can't hear my wife, can't follow conversations, there's this ringing in my ears that won't stop. Company required me to get checked.",
            
            "tell me more|can you explain":
                "I've noticed over the past few years I'm missing things. People have to repeat themselves. I turn the TV up loud. The ringing started maybe a year ago. My wife finally put her foot down - said I need to get it checked.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Hard to say exactly. Gradually over maybe 5-7 years? Got noticeably worse in the last 2 years.",
            
            "sudden|gradual":
                "Very gradual. So slow I didn't notice at first. Others noticed before I did.",
            
            "both ears|one or both":
                "Both ears. Maybe the left is slightly worse.",
            
            // HEARING LOSS CHARACTERISTICS
            "describe|what's it like|trouble with":
                "I miss words. Especially when there's background noise. Restaurants are the worst - I can't follow conversations. Women's and children's voices are harder to hear.",
            
            "high pitched|low pitched|which sounds":
                "High-pitched sounds are harder. My wife's voice. The microwave beep. Birds singing - I used to hear those, not anymore.",
            
            "conversations|talking|speech":
                "I can hear people are talking but can't make out the words. Sounds muffled. I read lips a lot now.",
            
            "noisy environments|background noise":
                "Terrible in noise. Can't hear anything if there's background sound. Used to be fine at bars with the guys. Now I just nod along.",
            
            "quiet|quiet room|one on one":
                "Better in quiet. One-on-one is okay. Still have to ask people to repeat sometimes.",
            
            // TINNITUS
            "ringing|tinnitus|ears ring":
                "Yeah, constant ringing. Both ears. High-pitched. Never stops. Drives me crazy at night when it's quiet.",
            
            "when did ringing start|how long":
                "Maybe a year or two ago? Started noticing it more recently.",
            
            "constant|comes and goes":
                "Pretty constant. Worse at night. Worse after a loud day at work.",
            
            // OCCUPATIONAL EXPOSURE - CRITICAL
            "work|job|occupation":
                "Construction worker. Been doing it 28 years.",
            
            "noise|loud|exposure":
                "It's loud every day. Jackhammers, power tools, heavy equipment. Constant noise.",
            
            "how loud|describe the noise":
                "Loud enough you have to shout to talk to someone next to you. All day long.",
            
            "hearing protection|ear plugs|muffs|protection":
                "We're supposed to wear ear plugs. I do... sometimes. Not as much as I should.",
            
            "why not|why don't you wear them":
                "They're uncomfortable. Hard to communicate with the crew. Easy to forget. Honestly, for years nobody wore them. It wasn't enforced.",
            
            "how often|what percentage":
                "Maybe half the time? More now that I'm having problems. But for years I hardly wore them at all.",
            
            "other noise|outside work|hobbies":
                "I hunt. Guns are loud. Don't always wear protection for that either. Used to go to concerts. Play in a band in my 20s.",
            
            // ASSOCIATED SYMPTOMS
            "ear pain|otalgia":
                "No pain.",
            
            "drainage|discharge|fluid":
                "No drainage.",
            
            "dizziness|vertigo|balance":
                "No dizziness or balance problems.",
            
            "fullness|pressure|clogged":
                "Sometimes feels a little full, like my ears need to pop.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure. High cholesterol. Otherwise healthy.",
            
            "ear infections|ear problems|history":
                "Had some ear infections as a kid. Nothing as an adult.",
            
            "head injury|trauma":
                "No major head injuries.",
            
            "medications":
                "Lisinopril, atorvastatin. That's it.",
            
            "allergies":
                "No allergies.",
            
            // FAMILY HISTORY
            "family history|hearing loss in family":
                "My dad wore hearing aids when he got older. Thought it was just age. He worked in a factory.",
            
            // SOCIAL
            "smoke":
                "Quit 10 years ago. Smoked for 20 years.",
            
            "alcohol":
                "Beer on weekends.",
            
            "married|family":
                "Married 22 years. Two kids, grown now.",
            
            // SEXUAL HISTORY - 48M married
            "sexually active":
                "Yes, with my wife.",
            
            "partner":
                "Just my wife.",
            
            "stis":
                "No.",
            
            // IMPACT
            "affect your life|impact|difficulty":
                "It's affecting everything. My marriage - wife is frustrated. Work - I miss instructions. Safety concern. Social - I avoid group situations.",
            
            "safety|work safety|dangerous":
                "That's a worry. If I can't hear warnings on the job site... it's dangerous.",
            
            // CONCERNS
            "worried about|concerns":
                "Am I going deaf? Is this permanent? Can anything be done? I need to work another 10-15 years at least.",
            
            "anything else":
                "I should have worn the damn ear plugs. I know. Too late now. What can I do going forward?",
        }
    };

    // ==========================================
    // CASE: David Chen - Berylliosis
    // 52M, aerospace worker, dyspnea, chronic
    // ==========================================
    
    const DAVID_CHEN_BERYLLIOSIS = {
        meta: {
            caseId: "berylliosis-aerospace",
            patientName: "David Chen",
            age: 52,
            gender: "male",
            occupation: "Aerospace machinist",
            setting: "Pulmonology Clinic",
            diagnosis: "Chronic beryllium disease (CBD/Berylliosis)",
            criticalFindings: [
                "Progressive dyspnea",
                "Dry cough",
                "Fatigue, weight loss",
                "Beryllium exposure history",
                "Granulomatous disease (mimics sarcoidosis)",
                "Abnormal chest imaging"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "Hello doctor. They told me my lungs don't look right and I need to see a specialist.",
            
            "how are you|how you doing":
                "Worried. I've been short of breath for a while and now they're saying it might be from my work.",
            
            "what brings you in|chief complaint|why here":
                "Shortness of breath that's been getting worse over the past year or two. Had a chest X-ray for something else and they found abnormalities. My occupational health doctor thinks it might be related to beryllium exposure.",
            
            "tell me more|can you explain":
                "I've worked in aerospace manufacturing for 25 years. We work with beryllium alloys. I've been getting more winded doing things I used to do easily. Climbing stairs, walking far. Developed a dry cough. Lost some weight. The company did a screening and my blood test was positive for beryllium sensitivity.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "The breathing problems started maybe 2-3 years ago. So gradual I blamed it on getting older. The cough is maybe a year.",
            
            "gradual|sudden":
                "Very gradual. Crept up on me.",
            
            "getting worse|progression":
                "Yes, definitely worse. A year ago I could walk 18 holes of golf. Now I need a cart.",
            
            // RESPIRATORY SYMPTOMS
            "shortness of breath|dyspnea|describe":
                "Winded with activity. Stairs are hard. Walking more than a block. Sometimes even talking too much.",
            
            "at rest|sitting":
                "Usually okay at rest. It's the activity that gets me.",
            
            "cough|coughing":
                "Dry cough. Persistent. Worse when I exert myself.",
            
            "productive|sputum|bringing anything up":
                "Not usually. Sometimes a little clear mucus.",
            
            "blood|hemoptysis":
                "No blood.",
            
            "wheeze|wheezing":
                "No wheezing.",
            
            "chest pain|chest tightness":
                "Some tightness with exertion. Not real pain.",
            
            // CONSTITUTIONAL
            "fatigue|tired|energy":
                "Very tired. No energy like I used to have. Come home from work exhausted.",
            
            "weight loss|appetite":
                "Lost about 15 pounds in the last year. Appetite is okay but I get full fast.",
            
            "fever|night sweats":
                "No real fever. Some night sweats occasionally.",
            
            // OCCUPATIONAL - CRITICAL
            "work|job|occupation":
                "Aerospace machinist. I machine parts for aircraft and spacecraft components.",
            
            "beryllium|exposure|what do you work with":
                "We work with beryllium-copper alloys. Very precise machining. Beryllium makes the metal stronger and lighter.",
            
            "how long|years exposed":
                "25 years at the same company. Beryllium work for most of that time.",
            
            "how much exposure|how often":
                "Several hours a day, most days. Machining, grinding, polishing beryllium parts.",
            
            "dust|fumes|airborne":
                "There's definitely dust when we machine. Fine particles. They have ventilation systems but...",
            
            "protection|ppe|respirator|mask":
                "We're supposed to wear respirators. The company got stricter about it in the last 10 years. Before that, it was more relaxed. I didn't always wear protection earlier in my career.",
            
            "fit tested|proper respirator":
                "Now yes, we get fit tested regularly. But 15-20 years ago? No.",
            
            "coworkers|others sick|anyone else":
                "A few guys have had problems. One retired early with lung issues. Another is being monitored like me.",
            
            "screening|blood test|belpt":
                "The company does beryllium blood tests every year now. Mine came back positive for sensitization. That's when they sent me here.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Healthy until this. No major medical problems.",
            
            "sarcoidosis|autoimmune|told you have":
                "They mentioned the lung findings look like sarcoidosis but think it's more likely beryllium-related.",
            
            "asthma|copd|lung problems before":
                "No previous lung problems.",
            
            "medications":
                "Nothing regular. Occasional ibuprofen.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke|smoking":
                "Never smoked.",
            
            "alcohol":
                "Occasional beer.",
            
            "hobbies|other exposures":
                "Golf, fishing. Nothing with chemical exposures.",
            
            "married|family":
                "Married 25 years. Two adult kids.",
            
            // SEXUAL HISTORY - 52M married
            "sexually active":
                "Yes, with my wife.",
            
            "partner":
                "Just her.",
            
            "stis":
                "No.",
            
            // CONCERNS
            "worried about|concerns":
                "Is this permanent? Is it going to get worse? I'm 52 - I was planning to work another 10 years. And I'm worried about cancer. Beryllium causes cancer, doesn't it?",
            
            "cancer|lung cancer":
                "That's my biggest fear. I've read that beryllium can cause lung cancer. What are my risks?",
            
            "anything else":
                "If I had known how dangerous this stuff was, I would have been more careful. Or found different work. Too late now.",
        }
    };

    // ==========================================
    // CASE: Angela Martinez - Mercury Poisoning
    // 35F, dental worker, tremor, cognitive issues
    // ==========================================
    
    const ANGELA_MARTINEZ_MERCURY = {
        meta: {
            caseId: "mercury-dental-worker",
            patientName: "Angela Martinez",
            age: 35,
            gender: "female",
            occupation: "Dental assistant",
            setting: "Occupational Health",
            diagnosis: "Chronic mercury poisoning (occupational)",
            criticalFindings: [
                "Tremor (fine intention tremor)",
                "Cognitive complaints (memory, concentration)",
                "Mood changes (irritability)",
                "Dental amalgam exposure",
                "Paresthesias",
                "Metallic taste"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "Hi. Thanks for seeing me. I've been having these strange symptoms and my doctor thought it might be work-related.",
            
            "how are you|how you doing":
                "Frustrated. I've had tremors, memory problems, mood swings. Can't figure out what's wrong. Someone suggested it might be mercury from my work.",
            
            "what brings you in|chief complaint|why here":
                "Shaking in my hands, trouble concentrating and remembering things, feeling irritable all the time. I'm a dental assistant and I work with amalgam fillings. My regular doctor checked my mercury level and it was elevated.",
            
            "tell me more|can you explain":
                "It started gradually over the past year. First I noticed my hands shaking a little. Then I started forgetting things - appointments, names, words. I've been irritable, snapping at my family. I have this metallic taste sometimes. Someone at work mentioned mercury from the amalgam we use.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "The tremor started maybe 8-12 months ago. The memory stuff around the same time. Hard to pinpoint exactly.",
            
            "gradual|sudden":
                "Very gradual. Crept up on me.",
            
            "getting worse|progression":
                "Seems to be getting worse. The tremor is more noticeable now. The forgetting is more frequent.",
            
            // NEUROLOGICAL SYMPTOMS
            "tremor|shaking|hands":
                "My hands shake. Especially when I'm trying to do something precise. Makes my work harder. I'm supposed to have steady hands.",
            
            "describe tremor|when does it happen":
                "Worse when I'm reaching for something or trying to do detailed work. Better at rest but still there.",
            
            "both hands|one hand":
                "Both hands. Maybe right worse than left.",
            
            "memory|forgetful|cognitive":
                "I forget things I shouldn't. Appointments, what I was about to do. I lose words mid-sentence. It's embarrassing.",
            
            "concentration|focus|thinking":
                "Hard to concentrate. Mind wanders. Takes longer to do tasks at work.",
            
            "mood|irritable|emotional":
                "I've been so irritable. Snapping at my husband, my kids. I'm not usually like this. I feel emotionally unstable.",
            
            "anxiety|nervous|jittery":
                "Yes, anxious and jittery. Nervous energy I can't control.",
            
            "depression|sad":
                "Maybe a little. More frustrated than sad.",
            
            // OTHER SYMPTOMS
            "numbness|tingling|paresthesias":
                "Tingling in my fingers sometimes. Like pins and needles.",
            
            "metallic taste|taste":
                "Yes! This metallic taste in my mouth. Especially at work. I thought it was just me.",
            
            "gums|mouth|oral":
                "My gums have been sore. Some discoloration maybe.",
            
            "fatigue|tired":
                "Yes, very tired. Fatigued.",
            
            "headaches":
                "More headaches than usual.",
            
            "vision|seeing":
                "Maybe some blurriness occasionally.",
            
            // OCCUPATIONAL - CRITICAL
            "work|job|occupation":
                "Dental assistant for 12 years. Same office.",
            
            "amalgam|mercury|fillings|exposure":
                "We use silver amalgam fillings. I mix the amalgam, hand it to the dentist, clean up. Handle it all day.",
            
            "how often|how much exposure":
                "We do a lot of amalgam fillings. Maybe 10-15 a day. Plus removing old ones. I'm exposed constantly.",
            
            "how handle|preparation|mixing":
                "I load the capsules, mix them in the amalgamator, place the amalgam in the carrier. Sometimes we have spills.",
            
            "spills|accidents|cleanup":
                "Spills happen. We're supposed to clean them up properly but... sometimes just wipe it up. Mercury balls can scatter.",
            
            "ventilation|air|office setup":
                "Small office. Not sure about special ventilation. Regular HVAC.",
            
            "protection|gloves|mask|ppe":
                "We wear gloves and masks, but not special mercury protection. Just regular dental PPE.",
            
            "training|told about mercury hazards":
                "Basic training years ago. Not much about mercury specifically. We know it's toxic but figured small amounts were okay.",
            
            "others|coworkers|anyone else sick":
                "Another assistant at the office has complained about tremors too. The dentist seems fine.",
            
            // LEVELS
            "mercury level|blood test|how high":
                "My doctor said my blood mercury was elevated. I don't remember the exact number. That's why she sent me here.",
            
            "urine|urine mercury":
                "I don't think they checked urine.",
            
            // HOME/OTHER EXPOSURES
            "fish|seafood|diet":
                "I eat fish once or twice a week. Tuna sometimes.",
            
            "thermometers|home exposure|other sources":
                "No broken thermometers or anything. Don't think I have other exposures.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Healthy. No major problems until this.",
            
            "thyroid|autoimmune":
                "No thyroid problems.",
            
            "medications":
                "Just birth control. Occasional ibuprofen.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke":
                "No.",
            
            "alcohol":
                "Wine on weekends.",
            
            "married|family":
                "Married, two kids - 8 and 5. They're worried about mommy being 'spacey' and grumpy.",
            
            // SEXUAL HISTORY - 35F married
            "sexually active":
                "Yes, with my husband.",
            
            "partner":
                "Just him. 10 years together.",
            
            "pregnant|could you be pregnant":
                "No, I have an IUD.",
            
            "stis":
                "No.",
            
            // CONCERNS
            "worried about|concerns":
                "Is this permanent? Is the mercury damaging my brain? And if it's from work, what do I do? I need this job.",
            
            "fertility|pregnancy|future kids":
                "We were thinking about one more baby. Is mercury going to affect that?",
            
            "anything else":
                "I feel like I'm falling apart and no one took me seriously until the blood test. I'm not crazy. Something is wrong.",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['co-poisoning-family'] = KAREN_MITCHELL;
    window.COMPREHENSIVE_PATIENT_RESPONSES['heat-stroke-worker'] = ROBERT_JACKSON_HEAT;
    window.COMPREHENSIVE_PATIENT_RESPONSES['hypothermia-homeless'] = HENRY_WILLIAMS_COLD;
    window.COMPREHENSIVE_PATIENT_RESPONSES['nihl-construction'] = MICHAEL_TORRES_NIHL;
    window.COMPREHENSIVE_PATIENT_RESPONSES['berylliosis-aerospace'] = DAVID_CHEN_BERYLLIOSIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['mercury-dental-worker'] = ANGELA_MARTINEZ_MERCURY;
    
    console.log('ReasonDx Part 18 (CO Poisoning, Heat Stroke, Hypothermia, NIHL, Berylliosis, Mercury) loaded');

})();
