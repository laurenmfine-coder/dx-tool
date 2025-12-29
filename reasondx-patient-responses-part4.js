/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 4: Maria Torres (RUQ Pain - Cholecystitis)
 * 
 * 38F, Office Manager
 * Dx: Acute Cholecystitis
 * 
 * CLINICAL PEARLS:
 * - The 4 Fs: Female, Forty, Fertile, Fat (though be careful with this)
 * - Prior biliary colic episodes that self-resolved
 * - Pain after fatty meal
 * - RUQ → right shoulder/scapula radiation (phrenic nerve)
 * - Fever distinguishes cholecystitis from biliary colic
 * - Murphy's sign: inspiratory arrest during RUQ palpation
 * - Family history of gallbladder disease
 */

(function() {
    'use strict';

    const MARIA_TORRES = {
        meta: {
            caseId: "ruq-cholecystitis",
            patientName: "Maria Torres",
            age: 38,
            gender: "female",
            occupation: "Office manager",
            setting: "Emergency Department",
            diagnosis: "Acute cholecystitis",
            criticalFindings: [
                "Prior biliary colic episodes (3-4 in past year)",
                "Current episode doesn't resolve (>12 hours)",
                "Fever - distinguishes cholecystitis from colic",
                "RUQ pain radiating to right scapula",
                "Triggered by fatty meal",
                "Family history: mother and sister had cholecystectomies",
                "Possible early jaundice (husband noticed yellow eyes)"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING & CHIEF COMPLAINT
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "*in obvious discomfort* Hi, thanks for seeing me.",
            
            "how are you|how you doing":
                "*grimaces* In a lot of pain, honestly. Been up all night.",
            
            "what brings you in|chief complaint|why here|what's going on|what's wrong|how can i help|what's the problem":
                "Really bad pain on my right side, under my ribs. Started after dinner last night and it just hasn't gone away.",
            
            "tell me more|can you explain|describe":
                "We went out to Mexican for my daughter's birthday. About an hour after dinner I got this intense pain under my ribs on the right side. It's still there - been over 12 hours now.",
            
            "start from the beginning|walk me through":
                "Okay. Yesterday was my daughter's 8th birthday. We went to her favorite Mexican restaurant. I had enchiladas - lots of cheese and sour cream. About an hour after dinner, I got this stabbing pain in my right side. Usually when I've had pain like this before, it goes away in a few hours. But this time it didn't. And now I have a fever.",

            // ============================================
            // TIMELINE - ULTRA DETAILED
            // ============================================
            
            // --- Onset ---
            "when did this start|when start|when begin|how long has this":
                "Last night, about an hour after dinner. So... about 14 hours ago now.",
            
            "what time|time of day|exactly when":
                "Dinner was around 7pm. The pain started around 8 or 8:30.",
            
            "what were you doing|doing when it started":
                "We had just gotten home from the restaurant. I was helping my daughter open presents when the pain hit.",
            
            "sudden or gradual|come on suddenly":
                "It came on pretty quickly. Within about an hour of eating, I felt this intense cramping under my ribs.",
            
            "what did you eat|dinner|meal":
                "Chicken enchiladas with lots of cheese and sour cream. Refried beans. Chips and queso. Pretty greasy, I know.",
            
            "what did you think it was|first impression":
                "At first I thought I just ate too much rich food. I've had pain like this before and it usually goes away in a couple hours.",
            
            // --- Progression ---
            "gotten worse|progression|how has it changed":
                "It was worst in the middle of the night - probably a 9 out of 10. Now it's maybe a 7 or 8. Still really bad. And it hasn't gone away.",
            
            "constant or comes and goes":
                "Pretty constant. Maybe slight waves where it gets more intense, but it's always there. Never goes completely away.",
            
            "worst it's been|at its worst":
                "Around 2 or 3am. Probably a 9. I was just curled up trying not to move.",
            
            "best it's been|minimum":
                "Maybe a 6 briefly this morning. But it went right back up.",
            
            "overnight|during the night":
                "Couldn't sleep at all. The pain kept me up. I tried different positions, heating pad, nothing helped.",
            
            "this morning|today":
                "Still bad. Maybe slightly less than last night but not much. And I noticed I felt feverish. That's when my husband said we need to go to the ER.",
            
            // --- Why Different This Time ---
            "why today|why come in now|why hospital now":
                "Because it's been 14 hours and it's not getting better. Usually my episodes go away in 2-3 hours. And I have a fever now. That's never happened before.",
            
            "why not earlier|waited":
                "I kept thinking it would go away like it usually does. When it was still there in the morning and I felt feverish, I knew something was different.",
            
            // --- Prior Episodes (CRITICAL) ---
            "happened before|similar before|first time|previous episodes":
                "I've had pain like this before, but it usually goes away in a few hours. This is the worst, and it's NOT going away.",
            
            "how many times before|previous times":
                "Maybe 3 or 4 times in the past year? Usually after big meals or eating something really greasy.",
            
            "describe the other times|what were those like":
                "Same kind of pain - right side, under my ribs. Would come on after eating, especially fatty food. Usually lasted 2-3 hours then went away.",
            
            "ever seen doctor for it|evaluated before":
                "No, I kept meaning to but it always went away so I figured it wasn't serious.",
            
            "ever told it might be gallbladder|gallstones":
                "My sister told me she used to get pain like that before she had her gallbladder out. She said I should get checked.",
            
            "when was last episode|how long since last time":
                "Probably about 2 months ago. After Thanksgiving dinner actually.",
            
            "getting more frequent|worse over time":
                "Maybe a little more frequent this past year. And this one is definitely the worst.",

            // ============================================
            // LOCATION - DETAILED
            // ============================================
            
            "where is the pain|location|where does it hurt|point to it|show me":
                "*points to RUQ* Right here, under my ribs on the right side.",
            
            "can you point with one finger|exactly where":
                "*points precisely to RUQ* Right here. Under my rib cage on the right.",
            
            "anywhere else|other locations":
                "It goes around to my back too, and I feel it in my right shoulder blade.",
            
            "how big an area|size":
                "Pretty broad - like the size of my hand under my ribs. But there's one spot that's the worst.",
            
            "deep or superficial":
                "Deep. Feels like it's inside, under my ribs. Not on the surface.",

            // ============================================
            // RADIATION - DETAILED (CLASSIC PATTERN)
            // ============================================
            
            "does it radiate|spread|travel|go anywhere else":
                "Yes, it goes around to my back and to my right shoulder blade.",
            
            "back|goes to your back":
                "Yes, wraps around to my back, around the right side.",
            
            "shoulder|shoulder blade|scapula":
                "My right shoulder blade. Aches back there too.",
            
            "left side|left shoulder":
                "No, just the right side. Right shoulder blade.",
            
            "describe the radiation|pattern":
                "It starts under my ribs on the right, wraps around to my back, and I feel it up in my right shoulder blade.",

            // ============================================
            // CHARACTER/QUALITY - DETAILED
            // ============================================
            
            "describe the pain|what does it feel like|character|quality|type":
                "Constant, deep, aching pain. Sometimes squeezing or cramping. Sharp spikes when I breathe deeply.",
            
            "sharp or dull":
                "More of a deep ache with sharp spikes, especially with deep breaths.",
            
            "cramping|squeezing":
                "Yes, kind of cramping or squeezing at times. Like something's being grabbed under my ribs.",
            
            "burning":
                "No, not really burning. More aching and squeezing.",
            
            "stabbing":
                "Sharp stabs when I take a deep breath or move wrong.",
            
            "colicky|waves|comes and goes":
                "It's pretty constant, but there are waves where it squeezes tighter.",

            // ============================================
            // SEVERITY - DETAILED SCALE
            // ============================================
            
            "how bad|scale of 1 to 10|rate the pain|severity":
                "Right now probably a 7 or 8. Last night at worst it was a 9.",
            
            "at its worst|worst pain|maximum":
                "Middle of the night - around 2-3am - probably a 9 out of 10. I was just miserable.",
            
            "at its best|minimum":
                "Maybe a 6 briefly. But never goes below that.",
            
            "worst pain ever|compared to other pain":
                "Worse than my previous episodes. Not quite as bad as labor but getting close.",
            
            "compared to childbirth|c-section":
                "My C-section recovery was bad. This is different pain, but intensity-wise, it's up there.",
            
            "affect sleep|sleeping":
                "Couldn't sleep at all. Up all night with the pain.",
            
            "affect function|daily activities":
                "Can't do anything. Couldn't go to work today. Just want to lie still.",

            // ============================================
            // AGGRAVATING FACTORS - COMPREHENSIVE
            // ============================================
            
            "what makes it worse|aggravating factors|triggers":
                "Deep breathing is the worst. Eating anything. Moving around. Lying flat on my back.",
            
            "deep breathing|breathing":
                "Taking a deep breath really hurts. Sends a spike right through my side.",
            
            "eating|food":
                "Tried to eat some toast this morning - made it much worse. I've stopped trying to eat.",
            
            "fatty food|greasy food":
                "That's definitely what triggers these episodes. Fatty or greasy food.",
            
            "any specific foods|trigger foods":
                "Cheese, cream sauces, fried foods, Mexican food... anything really rich or fatty.",
            
            "movement|moving around":
                "Moving makes it worse. Jarring movements especially.",
            
            "lying down|position":
                "Lying flat on my back is worse. Slightly better on my right side.",
            
            "coughing|sneezing":
                "Coughing hurts a lot. Haven't sneezed but I imagine it would be bad.",
            
            "pressing on it|touch":
                "Don't press on it - please. Even gentle pressure hurts.",

            // ============================================
            // RELIEVING FACTORS - COMPREHENSIVE
            // ============================================
            
            "what makes it better|relieving|helps|relief":
                "Nothing really helps. Tried heating pad, Tylenol - barely touched it. Maybe lying very still on my right side.",
            
            "heating pad|heat":
                "Tried heating pad. Felt a tiny bit better but didn't last.",
            
            "tylenol|acetaminophen|pain medicine":
                "Took Tylenol last night. Didn't help much at all.",
            
            "ibuprofen|advil|motrin":
                "Didn't try ibuprofen. Maybe I should have.",
            
            "position|best position":
                "Maybe slightly better lying on my right side, curled up. But still hurts.",
            
            "eating|fasting|not eating":
                "Haven't eaten since last night. Not eating is better than eating right now.",
            
            "antacids|tums":
                "Tried some Tums thinking maybe it was heartburn. Didn't help at all.",
            
            "cold|ice":
                "Didn't try ice.",

            // ============================================
            // ASSOCIATED SYMPTOMS - GI COMPLETE
            // ============================================
            
            // --- Nausea/Vomiting ---
            "nausea|nauseated|queasy":
                "Very nauseous. Been feeling like I'm going to throw up all night and this morning.",
            
            "vomiting|throw up|vomited":
                "Threw up twice - once around midnight and once around 4am.",
            
            "what did you throw up|contents":
                "The first time, the dinner food came up. Second time was just bile - yellow-green.",
            
            "blood in vomit|coffee grounds|hematemesis":
                "No blood. Just the food and then bile.",
            
            "still nauseous|still feel sick":
                "Yes, still nauseous. Don't have anything left to throw up.",
            
            // --- Appetite ---
            "appetite|hungry":
                "None. Can't even think about eating. Tried toast this morning and regretted it.",
            
            "eating less":
                "Haven't eaten anything since last night. Can't keep anything down.",
            
            // --- Bowel Changes ---
            "stool|bowel movements|diarrhea":
                "No diarrhea. Bowels have been normal.",
            
            "constipation":
                "No constipation. Just haven't gone today - been focused on the pain.",
            
            "blood in stool|black stool":
                "No, stools have been normal brown.",
            
            "color of stool|pale stool|clay colored":
                "I haven't really noticed. I don't think so - seemed normal last time.",
            
            // --- Other GI ---
            "heartburn|acid reflux":
                "I do get heartburn sometimes, but this is completely different. Much more severe, different location.",
            
            "bloating|distension":
                "A little bloated feeling.",
            
            "burping|belching|gas":
                "Some burping. Doesn't relieve the pain though.",

            // ============================================
            // CONSTITUTIONAL SYMPTOMS (FEVER IS KEY!)
            // ============================================
            
            "fever|temperature|feverish":
                "Yes, I checked this morning - 101.2. Had chills during the night too.",
            
            "measured temperature|what was temp":
                "101.2 this morning on the thermometer.",
            
            "chills|shaking|rigors":
                "Yes, I was shivering during the night even though I felt hot and was under blankets.",
            
            "night sweats|sweating":
                "Yes, woke up sweaty a couple times.",
            
            "fatigue|tired":
                "Exhausted. Haven't slept. The pain and fever are wearing me out.",
            
            "weakness":
                "Feel weak. Haven't eaten and haven't slept.",
            
            "is the fever new|first time with fever":
                "Yes, I've never had fever with my episodes before. That's new and it scared me.",

            // ============================================
            // JAUNDICE/CHOLESTASIS SYMPTOMS (CBD STONE?)
            // ============================================
            
            "jaundice|yellow|skin color|eyes yellow":
                "My husband said my eyes looked a little yellow this morning. Is that bad?",
            
            "noticed yellow|when did you notice":
                "I didn't notice it myself. My husband said something this morning when he looked at me in the light.",
            
            "itching|pruritus|skin itching":
                "Maybe a little itchy but I thought that was just from being sweaty.",
            
            "urine color|dark urine":
                "Now that you mention it, my urine has been darker. Kind of brownish. Is that related?",
            
            "when did urine change|dark urine when":
                "I noticed this morning. It was definitely darker than usual.",
            
            "stool color again|pale stool|light colored stool|clay stool":
                "I haven't really looked carefully. Maybe lighter than usual? I'm not sure.",

            // ============================================
            // GYN HISTORY
            // ============================================
            
            "period|last period|lmp|menstrual":
                "About 2 weeks ago. It was normal.",
            
            "regular periods":
                "Yes, pretty regular. Every 28 days or so.",
            
            "pregnant|could be pregnant":
                "No, my husband had a vasectomy years ago after our daughter was born.",
            
            "sexually active":
                "Yes, with my husband. We've been married 10 years.",
            
            "birth control":
                "Don't need it - vasectomy. Before that I was on the pill.",
            
            "vaginal discharge|bleeding":
                "No unusual discharge or bleeding.",
            
            "pregnancies|children":
                "One pregnancy. My daughter is 8 - that's whose birthday it was yesterday. C-section.",

            // ============================================
            // PAST MEDICAL HISTORY - COMPREHENSIVE
            // ============================================
            
            "medical history|medical problems|past medical history|conditions":
                "High blood pressure, high cholesterol. Doctor said I'm pre-diabetic. And I know I need to lose weight.",
            
            "anything else|complete list":
                "That's the main stuff. The high blood pressure and cholesterol are controlled with medicine.",
            
            // --- Specific conditions ---
            "high blood pressure|hypertension":
                "Yes, diagnosed about 5 years ago. Take medicine for it.",
            
            "is it controlled|blood pressure controlled":
                "Pretty well controlled with the medication. Usually runs 130s/80s.",
            
            "cholesterol|high cholesterol|hyperlipidemia":
                "Yes, they put me on a statin a few years ago.",
            
            "diabetes|blood sugar|prediabetic":
                "Not full diabetes, but my doctor said I'm pre-diabetic. A1C was 5.9 last check. I'm supposed to be watching my diet... not doing a great job obviously.",
            
            "on diabetes medication|metformin":
                "No, not on medication yet. Just supposed to diet and exercise.",
            
            "weight|overweight|bmi":
                "I know I need to lose weight. I'm about 180 pounds. I've gained maybe 20 pounds the last few years.",
            
            "gallstones|gallbladder problems|biliary":
                "Never been officially diagnosed. But these episodes... could it be gallstones? My sister had them.",
            
            "ever had ultrasound|imaging":
                "No, I've never had an ultrasound of my abdomen.",
            
            "heartburn|gerd|reflux":
                "I get heartburn sometimes but this is different. More severe and different spot.",
            
            "liver problems|hepatitis":
                "No liver problems.",
            
            "pancreatitis|pancreas":
                "No, never had that.",
            
            "heart problems|cardiac":
                "No heart problems. Just the blood pressure.",
            
            "diabetes complications|kidney|eye":
                "No complications. Just the pre-diabetes warning.",
            
            "blood clots|dvt|pe":
                "No blood clots.",
            
            "hospitalizations":
                "Only for my C-section 8 years ago.",
            
            "er visits|emergency room":
                "Not since my daughter was born.",

            // ============================================
            // SURGICAL HISTORY
            // ============================================
            
            "surgical history|surgeries|operations":
                "Just my C-section with my daughter. That's it.",
            
            "c-section|cesarean":
                "Yes, 8 years ago. She was breech so they did a C-section.",
            
            "any complications|problems with c-section":
                "No complications. Recovery was fine.",
            
            "appendix|appendectomy":
                "Still have my appendix.",
            
            "gallbladder|cholecystectomy":
                "Still have my gallbladder. Should I not? My sister and mom both had theirs out.",
            
            "anesthesia problems":
                "No problems with anesthesia during my C-section.",

            // ============================================
            // MEDICATIONS - DETAILED
            // ============================================
            
            "medications|medicines|taking anything|prescriptions|meds":
                "Lisinopril for blood pressure and atorvastatin for cholesterol. Take them every day.",
            
            "tell me about each|go through medications":
                "Lisinopril 10mg in the morning for blood pressure. Atorvastatin 20mg at night for cholesterol.",
            
            // --- Lisinopril ---
            "lisinopril|blood pressure medicine|ace inhibitor":
                "Yes, lisinopril 10mg once a day in the morning.",
            
            "how long on lisinopril|when start":
                "About 5 years now.",
            
            "take it regularly|adherent":
                "Yes, I take it every day. I'm good about that.",
            
            "any side effects|cough":
                "No side effects. Works well.",
            
            // --- Statin ---
            "atorvastatin|lipitor|statin|cholesterol medicine":
                "Atorvastatin 20mg. I take it at bedtime.",
            
            "how long on statin":
                "Maybe 3 years now.",
            
            "any muscle pain|side effects from statin":
                "No problems with it.",
            
            // --- Other Meds ---
            "other medications|anything else":
                "Just those two. And occasional Tylenol if I have a headache.",
            
            "over the counter|otc":
                "Occasional Tylenol. Tums sometimes for heartburn.",
            
            "aspirin":
                "No, I don't take aspirin regularly.",
            
            "vitamins|supplements":
                "Multivitamin. That's it.",
            
            "birth control|hormones":
                "No, don't need it since my husband's vasectomy.",
            
            "what did you take for this|anything for this pain":
                "Took Tylenol twice last night. Didn't help much.",

            // ============================================
            // ALLERGIES - DETAILED
            // ============================================
            
            "allergies|allergic|reactions|medication allergies":
                "Penicillin. I get a rash.",
            
            "what happens with penicillin|describe reaction":
                "I break out in hives. Red, itchy rash all over. Found out as a kid.",
            
            "how severe|anaphylaxis|serious reaction":
                "Just the rash. Never had trouble breathing or anything scary.",
            
            "other antibiotics|related antibiotics|amoxicillin":
                "They told me to avoid amoxicillin too since it's related.",
            
            "any other allergies|other medications":
                "No, just penicillin.",
            
            "sulfa|bactrim":
                "No allergy to sulfa. I've taken that before.",
            
            "contrast|dye|ct dye|iodine":
                "Never had contrast, so I don't know.",
            
            "latex":
                "No latex allergy.",
            
            "food allergies":
                "No food allergies.",

            // ============================================
            // FAMILY HISTORY - BY FAMILY MEMBER (CRITICAL!)
            // ============================================
            
            "family history|family medical history":
                "My mom and older sister both had their gallbladders out. Runs in the family I guess.",
            
            "tell me more about family gallbladder":
                "My mom had hers out in her 40s. My sister was about 35 when she had hers out.",
            
            // --- Mother ---
            "mother|mom":
                "She's 62. Has diabetes and high blood pressure. And had her gallbladder out about 20 years ago.",
            
            "mom's gallbladder|mother's gallbladder":
                "She had attacks like I'm having. They found gallstones on ultrasound and took it out.",
            
            "mom's symptoms|what were her symptoms":
                "Same kind of thing - pain under her ribs after eating fatty food. She had it worse than I've had until now.",
            
            "mom's other conditions":
                "Type 2 diabetes - she takes insulin now. High blood pressure.",
            
            // --- Sister ---
            "sister|sibling":
                "My older sister, she's 42. Had her gallbladder out when she was about 35.",
            
            "sister's gallbladder|sister's surgery":
                "She had gallstone attacks too. She kept telling me I should get checked because my symptoms sound just like hers.",
            
            "when did sister have surgery|how old was she":
                "She was about 35 - so about 7 years ago.",
            
            "sister's other health":
                "She's healthier now since she changed her diet after the surgery. No other major problems.",
            
            // --- Father ---
            "father|dad":
                "My dad is 65. He has heart disease - had a stent put in a few years ago.",
            
            "father's heart|dad's heart":
                "He had a heart attack at 60. They put in a stent. He's on a bunch of medications now.",
            
            "father other conditions":
                "High blood pressure, high cholesterol, the heart disease. Taking his medications.",
            
            // --- Extended Family ---
            "grandparents":
                "Both my grandmothers had diabetes. Grandpa on my mom's side had a heart attack.",
            
            "cancer in family":
                "My mom's friend had pancreatic cancer that started with pain like this. That's what scared me.",
            
            "pancreatic cancer|pancreas cancer|family cancer":
                "Not in my immediate family. Just my mom's friend. But it makes me nervous.",
            
            "diabetes in family":
                "My mom has it. Both grandmothers had it. It runs in the family - that's why they're watching me for it.",
            
            "heart disease in family":
                "My dad and his father both had heart disease.",

            // ============================================
            // SOCIAL HISTORY - COMPREHENSIVE
            // ============================================
            
            // --- Smoking ---
            "smoke|smoking|cigarettes|tobacco":
                "No, I never smoked. Never interested in it.",
            
            "vape|e-cigarettes":
                "No.",
            
            "secondhand smoke":
                "My husband doesn't smoke either. No one in our house smokes.",
            
            // --- Alcohol ---
            "alcohol|drink|drinking|beer|wine":
                "Occasionally. Maybe wine on weekends.",
            
            "how much|how often":
                "Maybe 1-2 glasses of wine on a Saturday. Not every weekend even.",
            
            "last drink":
                "Had one glass of wine at dinner last night. For the birthday celebration.",
            
            "ever drink heavily|problem with alcohol":
                "No, I'm a light drinker. Never had a problem.",
            
            // --- Drugs ---
            "drugs|recreational|illicit|marijuana":
                "No, nothing like that.",
            
            // --- Caffeine ---
            "caffeine|coffee|tea":
                "Coffee in the morning, maybe 2 cups. That's it.",
            
            // --- Occupation ---
            "work|job|occupation":
                "Office manager. Sit at a desk all day mostly.",
            
            "where do you work|company":
                "A small marketing firm. Been there about 6 years.",
            
            "stressful|stress at work":
                "Can be stressful. Managing people isn't always easy. But nothing extreme.",
            
            "sedentary|sitting all day":
                "Yeah, I sit a lot at work. Know I should get up and move more.",
            
            // --- Living Situation ---
            "live with|who do you live with|home":
                "Live with my husband Carlos and our daughter Sofia. She just turned 8.",
            
            "married|spouse|husband":
                "Yes, married 10 years. Carlos is here in the waiting room - he drove me.",
            
            "children|kids":
                "One daughter, Sofia. She's 8 as of yesterday.",
            
            "support|help":
                "My husband's very supportive. My mom lives nearby too and can help with Sofia.",
            
            // --- Diet ---
            "diet|eating habits|nutrition":
                "I try to watch what I eat, but obviously not hard enough. Mexican food is my weakness. And cheese.",
            
            "fatty food|greasy food|fried food":
                "I know I eat too much of it. This is a wake-up call honestly.",
            
            "weight loss efforts|trying to lose weight":
                "I try. I've done various diets. Hard to stick with them.",
            
            // --- Exercise ---
            "exercise|physical activity":
                "Not as much as I should. Sit at desk all day. Try to walk sometimes but not regularly.",
            
            "gym|workout":
                "Had a gym membership but honestly haven't been in months.",
            
            // --- Insurance ---
            "insurance|coverage":
                "Yes, through my work. Good PPO.",
            
            // --- Travel ---
            "travel|recently|trips":
                "Haven't traveled anywhere lately. Last trip was maybe 6 months ago, drove to see family.",

            // ============================================
            // HEALTH MAINTENANCE
            // ============================================
            
            "regular doctor|primary care":
                "Yes, I see my doctor regularly. Usually every 6 months for the blood pressure and cholesterol checks.",
            
            "last checkup|when last seen doctor":
                "About 2 months ago. Everything was stable. That's when they mentioned the A1C was creeping up.",
            
            "any concerns at last visit":
                "The pre-diabetes warning. And they said I should lose weight. Nothing about my stomach though.",
            
            "mammogram|breast screening":
                "Yes, had one last year. Normal.",
            
            "colonoscopy":
                "Not yet. I'm 38. They said I don't need one till 45 unless symptoms.",
            
            "vaccines|immunizations":
                "Up to date. Got my flu shot this fall.",
            
            "gyn|pap smear":
                "Go every year. Everything's been normal.",

            // ============================================
            // PATIENT CONCERNS & HEALTH LITERACY
            // ============================================
            
            "what are you worried about|concerns|scared|afraid":
                "Worried I might need surgery. And worried it could be something worse. My mom's friend had pancreatic cancer and it started with pain like this.",
            
            "what do you think it is|your theory":
                "Maybe gallstones? That's what my sister had. Her pain was just like this before she had surgery.",
            
            "worried about cancer|afraid it's cancer":
                "That's in the back of my mind. The pancreatic cancer thing. Is there a way to tell?",
            
            "worried about surgery|afraid of surgery":
                "I've never had major surgery. The C-section wasn't too bad. But I'm nervous about being put under.",
            
            "what do you know about gallbladder|understand the issue":
                "Just what my sister told me. She said you can live without your gallbladder. She's been fine since hers came out.",
            
            "questions for me|anything you want to ask":
                "Is it gallstones? Will I need surgery? Is it something worse?",
            
            "anything else you want me to know|anything else":
                "Just please help me. This pain is unbearable and I'm scared. I should have come in when this first started happening.",

            // ============================================
            // REVIEW OF SYSTEMS - NEGATIVES
            // ============================================
            
            "headache":
                "No headache.",
            
            "vision changes|blurry vision":
                "No vision problems.",
            
            "hearing changes|ear pain":
                "No ear problems.",
            
            "sore throat":
                "No sore throat.",
            
            "neck pain|stiff neck":
                "No neck problems.",
            
            "chest pain|chest pressure":
                "No chest pain. This is all in my belly.",
            
            "shortness of breath|trouble breathing":
                "No, breathing is okay. Just hurts to take deep breaths because of my side.",
            
            "palpitations|heart racing":
                "No palpitations.",
            
            "cough":
                "No cough.",
            
            "urinary symptoms|burning urination|blood in urine":
                "No urinary problems. Just the dark color I mentioned.",
            
            "rash|skin changes":
                "No rash besides maybe the slight yellow my husband noticed.",
            
            "joint pain|muscle pain":
                "No joint or muscle pain.",
            
            "swelling|edema|leg swelling":
                "No swelling.",
            
            "numbness|tingling|weakness":
                "No numbness, tingling, or weakness.",

            // ============================================
            // MISC & CLARIFICATIONS
            // ============================================
            
            "can you repeat|say that again":
                "Sure, what did you want me to say again?",
            
            "anything I haven't asked|anything else relevant":
                "I don't think so. I told you about my mom and sister's gallbladders. About the fever being new. About the yellow eyes. Just figure out what's wrong, please."
        }
    };

    // Add to global responses object
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    window.COMPREHENSIVE_PATIENT_RESPONSES['ruq-cholecystitis'] = MARIA_TORRES;
    
    console.log('ReasonDx Part 4 (Maria Torres - Cholecystitis) FULL DEPTH loaded');

})();
