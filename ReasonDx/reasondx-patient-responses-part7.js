/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 7: Ectopic Pregnancy, CHF, Amenorrhea
 * 
 * Key Teaching Cases for POM 2 Curriculum
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Emily Roberts - Ectopic Pregnancy (OSCE 1)
    // 27F, RLQ pain, positive pregnancy test
    // CRITICAL: Must rule out ectopic in reproductive-age female with abdominal pain
    // ==========================================
    
    const EMILY_ROBERTS = {
        meta: {
            caseId: "rlq-ectopic",
            patientName: "Emily Roberts",
            age: 27,
            gender: "female",
            occupation: "Graphic designer",
            setting: "Emergency Department",
            diagnosis: "Ectopic pregnancy",
            criticalFindings: [
                "Missed period (6 weeks)",
                "Positive home pregnancy test",
                "Unilateral pelvic/RLQ pain",
                "Vaginal spotting",
                "Risk factor: prior chlamydia infection",
                "Lightheadedness suggests possible rupture",
                "Right shoulder pain (referred from diaphragmatic irritation)"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING & CHIEF COMPLAINT
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "*anxious, holding her lower abdomen* Hi.",
            
            "how are you|how you doing":
                "*winces* Not good. I'm really scared. Something's wrong.",
            
            "what brings you in|chief complaint|why here|what's wrong|what's going on":
                "I have really bad pain on my right side, down low. And I'm pregnant - I just found out a few days ago. I'm scared something's wrong with the pregnancy.",
            
            "tell me more|can you explain|describe":
                "I took a pregnancy test 3 days ago - it was positive. I was happy but also surprised because we weren't really trying. Then yesterday I started having this pain on my right side and some spotting. Now the pain is really bad.",
            
            "start from the beginning|walk me through":
                "Okay. My period was late - I'm usually pretty regular. So I took a test 3 days ago and it was positive. Then yesterday I noticed some brown spotting and this ache on my right side. This morning the pain got much worse. And I feel dizzy.",

            // ============================================
            // TIMELINE - DETAILED
            // ============================================
            
            "when did the pain start|when start|how long":
                "The ache started yesterday afternoon. But it got really bad this morning - that's when I came in.",
            
            "what time yesterday|when exactly":
                "Maybe around 2 or 3pm yesterday. Started as a dull ache.",
            
            "yesterday|describe yesterday|what happened yesterday":
                "Started as this dull ache on my right side yesterday afternoon. I thought maybe I pulled something or slept wrong.",
            
            "this morning|today|what happened today":
                "Woke up and the pain was much worse. Sharp now. And I felt really dizzy when I stood up. That scared me.",
            
            "sudden or gradual|come on suddenly":
                "Started gradual yesterday, but the worsening this morning was more sudden.",
            
            "gotten worse|progression|how has it changed":
                "Definitely worse. Yesterday was maybe a 4 out of 10. This morning it's a 7 or 8.",
            
            "constant or comes and goes|intermittent":
                "Pretty constant now with some sharper waves of pain.",
            
            "why come in now|why today|what made you decide":
                "The pain got so much worse and I got really dizzy. Plus the bleeding... I'm scared something's wrong with the baby.",
            
            "why not come in yesterday|waited":
                "I thought maybe it was normal pregnancy stuff. Didn't want to overreact. But this morning was too much.",

            // ============================================
            // PAIN CHARACTERISTICS - DETAILED
            // ============================================
            
            "where is the pain|location|point to it|show me":
                "*points to RLQ and right lower pelvis* Right here. Low on my right side.",
            
            "can you point with one finger|exactly where":
                "*points precisely* Right here. Lower right, kind of in my pelvis area.",
            
            "one side|both sides|bilateral|left side too":
                "Just the right side. The left side is fine.",
            
            "how big an area|size":
                "Maybe the size of my palm. Concentrated on the right.",
            
            "deep or superficial|surface":
                "Deep. It feels like it's inside, not on the surface.",
            
            "describe the pain|what does it feel like|character|quality":
                "Sharp now. It was dull and achy yesterday, but now it's sharp. Sometimes it feels like cramping too.",
            
            "sharp|stabbing":
                "Yes, sharp. Especially when I move.",
            
            "dull|aching":
                "It was dull yesterday. Now there's a sharp pain with a dull ache underneath.",
            
            "cramping|cramps":
                "Yes, some cramping mixed in. Different from my normal period cramps though - more one-sided.",
            
            "how bad|scale of 1 to 10|severity|rate the pain":
                "Right now about a 7 or 8. When I move it spikes to 8 or 9.",
            
            "worst it's been|at its worst":
                "This morning when I first got up. Maybe a 9 when I stood up and got dizzy.",
            
            "at its best|minimum":
                "If I stay very still, maybe a 6. Doesn't really go away.",

            // ============================================
            // RADIATION - SHOULDER PAIN IS KEY
            // ============================================
            
            "radiate|spread|go anywhere else|travel|move":
                "*pauses* Actually, I've had some pain in my right shoulder too. That's weird, right? I didn't do anything to my shoulder.",
            
            "shoulder pain|tell me about shoulder|describe shoulder":
                "Just noticed it this morning. A dull ache in my right shoulder. Comes and goes. I thought it was from sleeping funny but now I'm not sure.",
            
            "which shoulder|right or left":
                "Right shoulder. Same side as the belly pain.",
            
            "when did shoulder pain start|shoulder when":
                "This morning. Didn't have it yesterday.",
            
            "shoulder pain constant|comes and goes":
                "Comes and goes. More noticeable when I'm lying flat.",
            
            "back pain|goes to back":
                "Maybe a little. Hard to tell. Mainly right side and shoulder.",
            
            "down your leg|groin|thigh":
                "No, doesn't go down my leg.",

            // ============================================
            // AGGRAVATING/RELIEVING
            // ============================================
            
            "what makes it worse|aggravating|triggers":
                "Moving. Walking. Lying flat is uncomfortable too. Getting up from lying down made it spike.",
            
            "what makes it better|relieving|helps":
                "Nothing really helps. Maybe lying on my side with my knees up. But it doesn't go away.",
            
            "movement|moving|walking":
                "Moving definitely makes it worse. I've been walking slowly, hunched over.",
            
            "lying down|lying flat|position":
                "Lying flat is uncomfortable. Slightly better curled up on my side.",
            
            "eating|food":
                "Haven't really eaten. Don't have an appetite.",
            
            "urination|peeing|going to bathroom":
                "Peeing doesn't change it. No pain with urination.",
            
            "bowel movement|having a bm":
                "Haven't gone today. Don't feel the urge.",

            // ============================================
            // VAGINAL BLEEDING - CRITICAL
            // ============================================
            
            "bleeding|vaginal bleeding|spotting":
                "Yes, I've had some spotting since yesterday.",
            
            "describe the bleeding|how much|amount|quantity":
                "Light spotting. Brown mostly. Not like a period. Just when I wipe.",
            
            "when did bleeding start|spotting when":
                "Yesterday afternoon, around the same time as the pain started.",
            
            "soaking pads|heavy bleeding|how many pads":
                "No, it's not heavy. Just spotting. Maybe a panty liner worth.",
            
            "clots|tissue|passed anything|products":
                "No clots. No tissue. Just the brown spotting.",
            
            "color|what color|red or brown":
                "Mostly brown. A little bit of red this morning.",
            
            "bright red|dark red|fresh blood":
                "The red I saw this morning was darker, not bright red.",
            
            "still bleeding|bleeding now|continuing":
                "Yes, still spotting. Checked before I came in.",
            
            "more or less|bleeding changing":
                "Maybe a little more today than yesterday. Hard to tell.",

            // ============================================
            // HEMODYNAMIC/SYSTEMIC SYMPTOMS - CRITICAL
            // ============================================
            
            "dizzy|lightheaded|faint|vertigo":
                "Yes, I felt really dizzy this morning when I got up. Had to sit back down.",
            
            "describe the dizziness|what happened":
                "When I stood up this morning, I got really woozy. My vision went gray for a second. Had to grab the nightstand.",
            
            "passed out|fainted|lost consciousness|syncope":
                "No, I didn't actually pass out. But I felt like I might.",
            
            "almost passed out|nearly fainted|close":
                "Yes, came close this morning. Had to sit right back down.",
            
            "how often|when dizzy|happens when":
                "When I stand up mostly. And walking here I felt woozy. Better sitting or lying down.",
            
            "heart racing|palpitations|heart pounding":
                "My heart does feel like it's beating fast. Like it's working hard.",
            
            "sweating|clammy|cold|diaphoretic":
                "A little clammy. My hands feel cold even though I don't feel cold.",
            
            "weak|weakness|fatigue|tired":
                "Yes, I feel weak. Like I don't have my normal energy. Kind of shaky.",
            
            "pale|look pale|color":
                "My boyfriend said I looked pale this morning. That worried him.",
            
            "fever|temperature|chills":
                "No fever that I noticed. No chills.",
            
            "nausea|nauseated|sick to stomach":
                "A little nauseous. Hard to tell if it's pregnancy nausea or from the pain and anxiety.",
            
            "vomiting|throw up|vomited":
                "No, haven't thrown up.",

            // ============================================
            // PREGNANCY - DETAILED
            // ============================================
            
            "when was your last period|lmp|last menstrual period":
                "About 6 weeks ago. I'm usually pretty regular - every 28 days. When I was a week late I took the test.",
            
            "exact date|when exactly|date of lmp":
                "Let me think... it was around the middle of last month. So about 6 weeks ago, maybe 6 and a half.",
            
            "regular periods|cycle regular|always regular":
                "Yes, very regular. 28 days like clockwork. That's why I knew something was up when I was late.",
            
            "pregnancy test|when did you test|home test":
                "Three days ago. It was positive. Clear positive line.",
            
            "how many tests|more than one|repeat test":
                "I took two, actually. Both positive. Different brands.",
            
            "seen a doctor|prenatal care|ob appointment|confirmed":
                "No, I was going to call this week to make an appointment. This happened before I could.",
            
            "ultrasound|had an ultrasound|any imaging":
                "No, haven't had any testing yet. Just the home tests.",
            
            "blood test|hcg|beta|quantitative":
                "No blood test. Just the home urine tests.",
            
            "pregnancy symptoms|morning sickness|breast tenderness|nausea":
                "My breasts have been sore for about 2 weeks. A little nauseous in the mornings but not vomiting. Tired. That's partly how I knew before I even tested.",
            
            "still feel pregnant|symptoms continue|breast still sore":
                "The breast tenderness is still there. The nausea too. But now I'm just scared with this pain.",
            
            "how do you feel about the pregnancy|wanted|planned|reaction":
                "We weren't planning it, but... I was starting to get excited. Tyler was too. Now I'm terrified something's wrong.",
            
            "keeping the pregnancy|plan|decision":
                "Yes, we want to keep it. We've been together a while. It's earlier than we planned but we want this baby.",

            // ============================================
            // GYN HISTORY - RISK FACTORS CRITICAL
            // ============================================
            
            "ever been pregnant before|previous pregnancies|pregnancy history|gravida|para":
                "No, this is my first pregnancy.",
            
            "miscarriage|spontaneous abortion|lost a pregnancy":
                "No, never been pregnant before.",
            
            "abortion|termination|therapeutic abortion":
                "No, never.",
            
            "ectopic before|previous ectopic|tubal pregnancy":
                "No, I've never had an ectopic pregnancy. I've never been pregnant at all until now.",
            
            "sexually active|having sex|intercourse":
                "Yes, with my boyfriend Tyler. We've been together about a year.",
            
            "partner|partners|how many partners|current":
                "Just Tyler for the past year. We live together.",
            
            "monogamous|exclusive|faithful":
                "Yes, we're exclusive. Just each other.",
            
            "before tyler|previous partners|past sexual history|lifetime":
                "I had one other serious boyfriend in college. That's it. So two total including Tyler.",
            
            "how many lifetime partners|total number":
                "Two. My college boyfriend and Tyler.",

            // ============================================
            // CONTRACEPTION - DETAILED
            // ============================================
            
            "contraception|birth control|what were you using|prevent pregnancy":
                "I was on the pill but I missed some... I'm not always good about taking it at the same time. Obviously it didn't work.",
            
            "which pill|what kind|name of pill":
                "It's called Sprintec. Generic birth control pill.",
            
            "how long on the pill|when did you start":
                "About 3 years. Since I was 24.",
            
            "missed pills|how many missed|when missed":
                "I probably missed 2 or 3 last month. I forgot when I was traveling for work.",
            
            "how did you miss them|what happened":
                "I was on a business trip and forgot to pack them. Missed like 3 days. Then just picked back up when I got home.",
            
            "condoms|use condoms|barrier method":
                "No, we stopped using condoms when I went on the pill. We've been together a year, both tested negative for everything.",
            
            "why no condoms|why stopped":
                "We're in a committed relationship, both got tested, and I was on the pill. Seemed like enough.",
            
            "iud|ever had iud|intrauterine device":
                "No, I've never had an IUD.",
            
            "other birth control|depo|patch|ring":
                "No, just the pill. Tried it because it was easy.",

            // ============================================
            // STI HISTORY - CHLAMYDIA IS KEY RISK FACTOR
            // ============================================
            
            "stis|std|sexually transmitted infections|history":
                "*hesitates* I had chlamydia once. In college. With my ex.",
            
            "tell me more|when was that|chlamydia details":
                "About 4 years ago. I got treated with antibiotics. It cleared up.",
            
            "how did you find out|any symptoms|how discovered":
                "I didn't really have symptoms. My boyfriend at the time tested positive, so I got tested too.",
            
            "what symptoms if any|completely asymptomatic":
                "Maybe a little discharge? I don't remember exactly. Nothing major. That's why I didn't know.",
            
            "treated|completed treatment|antibiotics":
                "Yes, I took all the antibiotics they gave me. Azithromycin I think. They said I was clear afterward.",
            
            "test of cure|retested|confirmed cleared":
                "I went back and they said I was cured. Clean.",
            
            "partner treated|ex treated|he get treated":
                "Yes, he was the one who found out first. He got treated too.",
            
            "any other stis|other infections|gonorrhea|herpes|hpv":
                "No, just that once. Nothing else.",
            
            "pelvic inflammatory disease|pid|ever told you had pid":
                "No, they never mentioned that. Just treated the chlamydia.",
            
            "symptoms of pid|fever with it|pelvic pain then":
                "No, I don't think so. I didn't have pelvic pain or fever at the time.",
            
            "sti testing since|tested with tyler|recent testing":
                "Tyler and I both got tested when we started getting serious. Maybe 10 months ago. Both negative for everything.",
            
            "hiv|hiv test|aids":
                "Negative. We both tested.",
            
            "hepatitis|hep b|hep c":
                "I think they tested for that too. All negative.",

            // ============================================
            // GYN HISTORY - OTHER
            // ============================================
            
            "pap smear|abnormal pap|cervical":
                "I get them regularly at my annual. All normal.",
            
            "when was last pap|recent pap":
                "About 8 months ago. Normal.",
            
            "hpv|hpv vaccine|gardasil":
                "I got the HPV vaccine as a teenager. My paps have been normal.",
            
            "pain with sex|dyspareunia|sex painful":
                "No, sex isn't painful. Never has been.",
            
            "bleeding with sex|after sex|post-coital":
                "No, no bleeding with sex.",
            
            "irregular bleeding|bleeding between periods|spotting before":
                "No, my periods have been regular. No spotting between until now.",
            
            "ovarian cysts|cysts|history of cysts":
                "No cysts that I know of. Never had an ultrasound.",
            
            "endometriosis|endo":
                "No endometriosis.",
            
            "fibroids|uterine fibroids":
                "No fibroids that I know of.",
            
            "pcos|polycystic ovaries":
                "No, my periods are regular. Never been told I have that.",
            
            "tubal surgery|fallopian tube surgery|any pelvic surgery":
                "No surgeries ever.",
            
            "fertility treatment|ivf|iui|clomid":
                "No fertility treatments. This happened naturally - by accident really.",

            // ============================================
            // PAST MEDICAL HISTORY
            // ============================================
            
            "medical history|medical problems|conditions|past medical history|pmh":
                "Nothing really. I'm pretty healthy. Just the chlamydia that one time.",
            
            "chronic conditions|ongoing problems|diagnoses":
                "No chronic conditions.",
            
            "hospitalizations|ever hospitalized|hospital stays":
                "Never been hospitalized.",
            
            "surgeries|operations|procedures":
                "No surgeries ever.",
            
            "appendix|appendectomy|appendix removed":
                "Still have my appendix.",

            // ============================================
            // MEDICATIONS
            // ============================================
            
            "medications|medicines|taking anything|meds|prescriptions":
                "Just the birth control pills. And I started prenatal vitamins when I found out I was pregnant.",
            
            "prenatal vitamins|which ones":
                "Just the over-the-counter kind. Started them 3 days ago.",
            
            "any other medications|anything else":
                "That's it. No other medicines.",
            
            "over the counter|tylenol|ibuprofen|pain medicine":
                "I took some Tylenol this morning for the pain. Didn't help much.",
            
            "how much tylenol|when":
                "Two regular Tylenol, maybe 4 hours ago.",
            
            "supplements|vitamins|herbal":
                "Just the prenatal vitamin.",

            // ============================================
            // ALLERGIES
            // ============================================
            
            "allergies|allergic|medication allergies|drug allergies":
                "No allergies to medications.",
            
            "food allergies":
                "No food allergies.",
            
            "environmental|seasonal":
                "Maybe mild seasonal allergies in spring. Nothing serious.",
            
            "latex|latex allergy":
                "No latex allergy.",

            // ============================================
            // FAMILY HISTORY
            // ============================================
            
            "family history|family medical history":
                "Nothing major. My mom has high blood pressure. Dad's healthy.",
            
            "ectopic pregnancy in family|family pregnancy problems|mother's pregnancies":
                "Not that I know of. My mom had three normal pregnancies.",
            
            "mother|mom|mom's health":
                "She's 52, has high blood pressure, otherwise healthy. Three kids, all normal deliveries.",
            
            "father|dad":
                "Healthy. 55. No major problems.",
            
            "siblings|brothers|sisters":
                "One younger sister, she's 24. Healthy.",
            
            "blood clots|clotting disorders|dvt|pe in family":
                "No clotting problems in the family that I know of.",
            
            "gynecologic problems|ovarian cancer|breast cancer":
                "No, nothing like that.",
            
            "miscarriages in family|pregnancy losses":
                "Not that I know of. Mom's pregnancies were fine.",

            // ============================================
            // SOCIAL HISTORY
            // ============================================
            
            "smoke|smoking|cigarettes|tobacco":
                "No, I don't smoke. Never have.",
            
            "vape|e-cigarettes|juul":
                "No.",
            
            "alcohol|drink|drinking|wine|beer":
                "I used to have wine with dinner sometimes. Haven't had any since I found out I was pregnant.",
            
            "when did you stop|last drink":
                "Last drink was probably a week and a half ago. Stopped when I suspected I might be pregnant.",
            
            "drugs|recreational|marijuana|illicit":
                "No drugs. Nothing.",
            
            "ever used|history of drug use":
                "Tried marijuana a couple times in college. Nothing else ever. Don't use anything now.",
            
            "caffeine|coffee":
                "I've cut back on coffee since finding out. Just one cup in the morning now.",
            
            "work|job|occupation":
                "Graphic designer. I work from home mostly. Freelance.",
            
            "live with|living situation|who do you live with":
                "I live with my boyfriend Tyler. We have an apartment together.",
            
            "how long living together":
                "About 8 months now.",
            
            "boyfriend here|support|tyler here":
                "He's in the waiting room. He's really worried too. He drove me.",
            
            "relationship|how's the relationship|supportive":
                "Good. Really good actually. We've been talking about getting engaged. This pregnancy was a surprise but we were starting to get excited.",
            
            "family support|parents know|told anyone":
                "We haven't told our families yet. Were waiting until I saw a doctor first.",
            
            "stress|stressful|work stress":
                "Work can be stressful with deadlines. But nothing unusual lately.",

            // ============================================
            // REVIEW OF SYSTEMS - NEGATIVES
            // ============================================
            
            "headache|head pain":
                "No headache.",
            
            "vision changes|blurry|seeing spots":
                "No, vision is fine.",
            
            "chest pain|chest pressure":
                "No chest pain.",
            
            "shortness of breath|trouble breathing":
                "No, breathing is okay.",
            
            "cough":
                "No cough.",
            
            "urinary symptoms|burning|frequency|urgency|uti":
                "Maybe peeing a little more often, but no burning or urgency. Pregnancy symptom I figured.",
            
            "blood in urine|hematuria":
                "No blood in my urine.",
            
            "constipation|diarrhea|bowel changes":
                "Maybe a little constipated. Haven't gone today.",
            
            "rash|skin changes":
                "No rash.",
            
            "joint pain|muscle pain":
                "No joint or muscle pain except that weird shoulder thing.",
            
            "numbness|tingling|weakness in limbs":
                "No numbness or tingling.",

            // ============================================
            // PATIENT CONCERNS
            // ============================================
            
            "what are you worried about|concerns|scared|afraid":
                "I'm terrified I'm losing the baby. Or that something is really wrong. Is this a miscarriage? The pain is so bad...",
            
            "what do you think is happening|your theory|what do you think":
                "I don't know. I looked up spotting in early pregnancy and it said it could be normal or could be a miscarriage. But the pain is scaring me.",
            
            "heard of ectopic|know what ectopic is|ectopic pregnancy":
                "I've heard the term but I don't really know what it means. Is that bad?",
            
            "worried about|biggest fear":
                "Losing the baby. And... being seriously sick myself. That dizziness scared me.",
            
            "questions for me|anything you want to ask":
                "Is my baby okay? Am I going to be okay? What's happening?",
            
            "anything else you want me to know|anything else":
                "Please just tell me what's going on. The not knowing is the worst part. Tyler is so worried.",
        }
    };

    // ==========================================
    // CASE: Robert Chen - CHF Exacerbation
    // 68M, worsening dyspnea, leg swelling
    // ==========================================
    
    const ROBERT_CHEN = {
        meta: {
            caseId: "chf-dyspnea",
            patientName: "Robert Chen",
            age: 68,
            gender: "male",
            occupation: "Retired engineer",
            setting: "Emergency Department",
            diagnosis: "Acute on chronic heart failure exacerbation",
            criticalFindings: [
                "Known HFrEF (EF 35%)",
                "Worsening dyspnea on exertion",
                "Orthopnea - using 3 pillows",
                "PND - waking up gasping",
                "Lower extremity edema - 8 lb weight gain",
                "Dietary indiscretion (high sodium)",
                "Medication non-adherence (ran out of diuretic)"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING & CHIEF COMPLAINT
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "*breathing noticeably labored* Hello... *pauses to catch breath*",
            
            "how are you|how you doing":
                "*short of breath* Not... not good. Hard to breathe.",
            
            "what brings you in|chief complaint|why here|what's wrong":
                "*speaks in short phrases* Can't breathe. Getting worse. Legs are swollen. My heart failure is acting up.",
            
            "tell me more|can you explain":
                "I have heart failure... been getting more short of breath this week. Can't walk to the mailbox anymore. Waking up at night gasping. And look at my legs. *shows swollen ankles*",
            
            "start from the beginning|walk me through":
                "I have heart failure - diagnosed about 3 years ago. Usually it's controlled with medicine. But this past week I've been getting worse. More short of breath, more swelling. Last night I woke up choking. That scared me.",

            // ============================================
            // TIMELINE
            // ============================================
            
            "when did this start|when start|how long":
                "Started getting worse about a week ago. Gradually at first, then really bad the last 2-3 days.",
            
            "what changed|why worse|trigger|anything different":
                "I don't know... *pauses* Well, I ran out of one of my water pills last week. And my daughter's birthday was Saturday - I ate a lot of salty food.",
            
            "ran out of medicine|which medicine|water pill":
                "The furosemide - Lasix. Ran out maybe a week and a half ago. Been meaning to get a refill.",
            
            "why didn't you refill|why not get more":
                "I kept putting it off. Had to call the doctor for a new prescription. You know how it is... kept forgetting.",
            
            "salty food|what did you eat|dietary indiscretion":
                "My daughter's birthday party Saturday. Chinese food - a lot of it. Soy sauce. And I had some ham Sunday. I know I'm not supposed to.",
            
            "how much salt|estimate":
                "More than I've had in months. My wife was mad at me.",
            
            "usual baseline|how are you normally|at baseline":
                "Usually I can walk a couple blocks without too much trouble. Now I can barely get from the bedroom to the bathroom.",
            
            "worst it's been|gotten this bad before|previous episodes":
                "I was hospitalized about a year ago for this. This feels like that.",
            
            "what happened then|tell me about hospitalization":
                "Same thing - couldn't breathe, legs swollen. They gave me IV diuretics, was there for 3 days.",

            // ============================================
            // DYSPNEA - DETAILED
            // ============================================
            
            "shortness of breath|dyspnea|trouble breathing|describe":
                "I get winded doing anything. Walking, talking, even eating. I have to stop and rest constantly.",
            
            "at rest|short of breath at rest|right now|sitting":
                "Even at rest it's hard. Better if I sit up straight. Worse lying down.",
            
            "how far can you walk|exercise tolerance|exertion|walking":
                "Right now, maybe 20 feet before I have to stop. Usually I can walk a couple blocks.",
            
            "stairs|climbing stairs|steps":
                "Can't do stairs at all right now. Haven't been able to all week. We have stairs in the house - been sleeping on the couch.",
            
            "compared to last week|change":
                "A week ago I could walk to the corner. Now I can't even get to the mailbox.",
            
            "compared to normal|usual activity":
                "Normally I walk around the block every morning. Haven't been able to do that in over a week.",

            // ============================================
            // ORTHOPNEA & PND - CRITICAL
            // ============================================
            
            "how many pillows|lying down|orthopnea|sleep":
                "I'm sleeping on three pillows now. If I lie flat I can't breathe at all.",
            
            "how many pillows normally|usual":
                "Usually just one or two. Three now.",
            
            "when did you add pillows|change":
                "Started needing more pillows about 5 days ago.",
            
            "wake up at night|pnd|paroxysmal nocturnal dyspnea|gasp":
                "Yes, last night I woke up choking, gasping for air. Had to sit straight up on the edge of the bed. Scared my wife.",
            
            "describe what happened|tell me more about that":
                "I woke up suddenly, felt like I was drowning. Sat up gasping. Heart pounding. Took maybe 15-20 minutes to feel okay again.",
            
            "how many times|happen before|frequency":
                "Happened twice last night. It's happened before when my heart failure gets bad.",
            
            "first episode|when start happening":
                "Started happening a few nights ago. Last night was the worst.",
            
            "do anything to help|what did you do":
                "Sat up. Dangled my legs off the bed. Eventually settled down. Didn't sleep much after that.",

            // ============================================
            // COUGH
            // ============================================
            
            "cough|coughing":
                "Yes, I have a cough. Especially when I lie down.",
            
            "productive|anything come up|sputum|phlegm":
                "A little bit of white frothy stuff sometimes. Not a lot.",
            
            "pink|blood tinged|hemoptysis|bloody":
                "No, not pink. Just white and frothy.",
            
            "when do you cough|timing":
                "Worse at night. When I lie down. And with any exertion.",
            
            "dry or wet|type of cough":
                "Wet. Like there's fluid in there.",

            // ============================================
            // EDEMA - DETAILED
            // ============================================
            
            "swelling|edema|legs|ankles|feet":
                "*shows legs* Look at them. My ankles are huge. Can barely get my shoes on.",
            
            "when did swelling start|how long swollen":
                "Started maybe 5-6 days ago. Getting worse each day.",
            
            "both legs|one or both|symmetrical":
                "Both legs. Same on both sides.",
            
            "how far up|knees|thighs|extent":
                "Up to my shins now. Almost to my knees. *presses on shin* See how it stays dented?",
            
            "pitting|stays indented":
                "Yeah, if I press on it, it leaves a dent. Pretty deep.",
            
            "weight gain|gained weight|pounds":
                "I've gained about 8 pounds this week. I weigh myself every day like they told me.",
            
            "what weight now|current weight":
                "I'm at 198 now. Was 190 a week ago.",
            
            "when did you gain|how quickly":
                "Most of it in the last 4-5 days. A couple pounds at a time.",
            
            "belly swelling|abdominal distension|abdomen":
                "Maybe a little. Pants are tighter. Feel bloated.",
            
            "scrotal swelling|genital":
                "Maybe a little. Hard to tell.",

            // ============================================
            // ASSOCIATED SYMPTOMS
            // ============================================
            
            "chest pain|chest pressure|angina":
                "No chest pain. Just hard to breathe.",
            
            "palpitations|heart racing|irregular|skipping":
                "Sometimes I feel my heart skipping. Not all the time.",
            
            "how often|when notice palpitations":
                "A few times a day. More when I'm short of breath.",
            
            "dizzy|lightheaded":
                "A little when I stand up fast. But mainly just the breathing.",
            
            "passed out|fainted|syncope":
                "No, haven't passed out.",
            
            "fatigue|tired|energy|exhausted":
                "Exhausted. Don't have energy for anything. Just sitting here is tiring.",
            
            "appetite|eating|hungry":
                "Not very hungry. Feel full quickly. Maybe ate half what I normally do.",
            
            "nausea|vomiting|stomach":
                "A little nauseous. Haven't thrown up.",
            
            "fever|chills|sick|infection":
                "No fever. Don't feel sick like an infection. Just the heart stuff.",
            
            "urination|peeing|urine output":
                "Actually peeing less than usual. Makes sense without my water pill.",
            
            "how much less|decreased":
                "Maybe half as much. Noticed my urine is darker too.",

            // ============================================
            // PAST MEDICAL HISTORY - DETAILED
            // ============================================
            
            "medical history|medical problems|conditions":
                "Heart failure - they said my heart is weak, only pumping at 35%. High blood pressure. Diabetes. High cholesterol. Had a heart attack 5 years ago.",
            
            "heart failure|when diagnosed|how long|tell me more":
                "Diagnosed about 3 years ago. After my heart attack, my heart got weaker and weaker.",
            
            "what caused|etiology|why heart failure":
                "The heart attack damaged my heart. That's what they said.",
            
            "heart attack|mi|when|what happened":
                "Five years ago. Had chest pain, went to the ER, they said I was having a heart attack. Rushed me to the cath lab.",
            
            "stents|intervention|treatment for heart attack":
                "They put in two stents during the heart attack.",
            
            "ejection fraction|ef|how weak|function":
                "They said 35% last time they checked. Supposed to be over 50 or 55%.",
            
            "when last checked|recent echo":
                "Had an echo about 6 months ago. That's when they said 35%.",
            
            "worse or same|ef stable":
                "It was 40% before. So it's gotten a little worse.",
            
            "high blood pressure|hypertension":
                "Had it for about 20 years. On medication.",
            
            "diabetes|blood sugar|dm":
                "Type 2 diabetes. About 15 years now. On pills and insulin.",
            
            "well controlled|diabetes control|a1c":
                "Could be better. Last A1C was 7.8. Should be under 7.",
            
            "diabetes complications|neuropathy|nephropathy":
                "A little numbness in my feet. They watch my kidneys - so far okay.",
            
            "cholesterol|hyperlipidemia":
                "High cholesterol. On a statin.",
            
            "other conditions|anything else":
                "That's the main stuff. Lot of pills every day.",
            
            "hospitalizations|hospital stays|admitted":
                "A few times. The heart attack 5 years ago. Then once last year for heart failure - similar to now.",
            
            "surgeries|operations":
                "Just the stents - if that counts. And my gallbladder out years ago.",

            // ============================================
            // MEDICATIONS - DETAILED
            // ============================================
            
            "medications|medicines|what do you take|meds":
                "A bunch. Lisinopril, carvedilol, the Lasix - which I ran out of, spironolactone, aspirin, atorvastatin, metformin, insulin.",
            
            "let's go through them|list them|doses":
                "Okay... Lisinopril 20mg once a day. Carvedilol 25mg twice a day. Furosemide 40mg twice a day - the one I ran out of. Spironolactone 25mg once a day. Aspirin 81mg. Atorvastatin 80mg at night. Metformin 1000mg twice a day. Lantus insulin 30 units at night.",
            
            "take them regularly|adherent|missing doses":
                "Usually pretty good. Except I ran out of the Lasix. That's probably why I'm here.",
            
            "how long without lasix|furosemide|when ran out":
                "About a week and a half. Maybe closer to two weeks now.",
            
            "why didn't you refill|what happened":
                "Needed a new prescription. Kept meaning to call the doctor. Then the weekend came... I know, I should have called.",
            
            "still taking other water pill|spironolactone":
                "Yeah, still taking the spironolactone. Just not the Lasix.",
            
            "other heart medicines|carvedilol|lisinopril":
                "Taking those. Haven't missed those.",
            
            "entresto|sacubitril":
                "No, I'm not on that one. Just the lisinopril.",
            
            "digoxin":
                "No digoxin.",
            
            "blood thinners|anticoagulant|warfarin|eliquis":
                "No blood thinners. Just aspirin.",

            // ============================================
            // ALLERGIES
            // ============================================
            
            "allergies|allergic|drug allergies":
                "Sulfa drugs. Get a bad rash.",
            
            "what happens|reaction":
                "Red itchy rash all over. Found out years ago.",
            
            "any other allergies|others":
                "Just sulfa.",
            
            "food allergies":
                "No food allergies.",

            // ============================================
            // FAMILY HISTORY
            // ============================================
            
            "family history|family medical history":
                "Heart disease runs in the family. My father died of a heart attack at 62. Brother has heart problems too.",
            
            "father|dad":
                "Died of a massive heart attack at 62. I was 35 when it happened.",
            
            "mother|mom":
                "She had diabetes. Lived to 84. Died of a stroke.",
            
            "siblings|brother|sister":
                "Brother's 70, had bypass surgery a few years ago. Sister is 65, she's pretty healthy, just high blood pressure.",
            
            "diabetes in family":
                "My mother and my brother both have it. Runs on both sides.",
            
            "heart failure in family|chf":
                "My father probably had it at the end. Brother might be developing it.",

            // ============================================
            // SOCIAL HISTORY - COMPREHENSIVE
            // ============================================
            
            "smoke|smoking|cigarettes":
                "I quit 5 years ago after my heart attack. Smoked for 35 years before that.",
            
            "how much|pack years|packs":
                "About a pack a day for 35 years. So 35 pack-years.",
            
            "quit how|what made you quit":
                "The heart attack scared me straight. Cold turkey after that. Haven't touched one since.",
            
            "alcohol|drink|drinking":
                "Very little now. Occasional beer. Maybe one or two a month.",
            
            "used to drink more|past":
                "Used to drink more. Cut way back after the heart attack.",
            
            "drugs|recreational|illicit":
                "No, never.",
            
            "caffeine|coffee":
                "One cup of coffee in the morning. Decaf now.",
            
            "work|job|occupation":
                "Retired engineer. Worked at Boeing for 35 years. Been retired about 5 years.",
            
            "exercise|activity level|physical activity":
                "I used to walk every day - around the block, sometimes more. Haven't been able to this week.",
            
            "diet|eating habits|salt intake|sodium":
                "I'm supposed to limit salt and fluid. I try... but I slip up. Like this weekend.",
            
            "how much fluid|fluid restriction":
                "Supposed to keep it under 2 liters a day. Don't always manage it.",
            
            "weigh yourself|daily weights|monitor":
                "Yes, I weigh myself every morning. That's how I knew I gained 8 pounds. Should have come in sooner.",

            // ============================================
            // LIVING SITUATION & SUPPORT
            // ============================================
            
            "live with|living situation|married|spouse":
                "Live with my wife Helen. We've been married 42 years.",
            
            "wife's health|helen":
                "She's healthy, thankfully. Takes good care of me. Tries to keep me on my diet.",
            
            "support|help at home|caregiver":
                "Helen is my main support. Kids check in but they live across town.",
            
            "children|kids|family":
                "Two kids. Daughter's 38, son's 35. Both married with kids of their own.",
            
            "stairs in house|home setup|accessibility":
                "We have a two-story house. Bedroom's upstairs. Been sleeping on the couch this week because I can't do stairs.",
            
            "independent|manage at home|adls":
                "Usually manage fine. This week's been hard. Helen's had to help me more.",

            // ============================================
            // SEXUAL HISTORY - 68M, married 42 years
            // ============================================
            
            "sexually active|having sex|intercourse":
                "Honestly, not much anymore. Between the heart failure and the diabetes and all the medications...",
            
            "problems|difficulties|erectile dysfunction|ed":
                "Yeah, it's been a problem for a few years. The diabetes and the medications don't help.",
            
            "when did it start|how long":
                "Started maybe 5-6 years ago. Got worse after the heart attack and all the new meds.",
            
            "treatment|viagra|cialis|medication for it":
                "We tried Viagra once but I was worried about my heart. Doctor said it might be okay but I was nervous. Haven't really pursued it.",
            
            "partner|partners":
                "Just Helen. 42 years married. She's been understanding about it.",
            
            "condoms|use protection|barrier":
                "*slight smile* Doctor, we've been married 42 years. That's not a concern for us.",
            
            "contraception|pregnancy":
                "Helen went through menopause almost 20 years ago. Not an issue.",
            
            "stis|std|sexually transmitted|infections":
                "No, we've been together since we were young. Only ever been with each other.",
            
            "sti testing|hiv|tested":
                "Never needed it. Just the one partner, our whole lives.",

            // ============================================
            // REVIEW OF SYSTEMS - NEGATIVES
            // ============================================
            
            "headache":
                "No headaches.",
            
            "vision changes":
                "No, vision is okay. Have reading glasses.",
            
            "hearing":
                "A little hard of hearing but that's been the same for years.",
            
            "sore throat":
                "No sore throat.",
            
            "neck pain|stiffness":
                "No neck problems.",
            
            "wheezing":
                "Maybe a little wheeze when I'm really short of breath.",
            
            "abdominal pain|belly pain":
                "No real belly pain. Just bloated.",
            
            "constipation|diarrhea":
                "A little constipated. Probably not drinking enough.",
            
            "blood in stool|black stool":
                "No blood in my stool.",
            
            "rash|skin changes":
                "No rash.",
            
            "joint pain":
                "Some arthritis in my knees. Nothing new.",
            
            "falls|falling|unsteady":
                "Been a little unsteady this week. Haven't fallen.",

            // ============================================
            // PATIENT CONCERNS
            // ============================================
            
            "what are you worried about|concerns|fears":
                "I'm worried this is serious. Last time I ended up in the hospital for a week. I don't want that again.",
            
            "what do you think caused this|why this happened":
                "I know it's my fault. Ran out of the water pill, ate all that salt. I know better. Helen's been telling me.",
            
            "questions for me|anything to ask":
                "Am I going to need to be admitted? Can we just get me back on track with the medicines at home?",
            
            "anything else|else to tell me":
                "I'm sorry. I know I should have gotten the refill sooner. And I shouldn't have eaten all that Chinese food. Helen's been nagging me for a week to come in.",
            
            "wife knows|helen aware":
                "She's in the waiting room. Probably worried sick. She wanted me to come in days ago.",
        }
    };

    // ==========================================
    // CASE: Jessica Ramirez - Amenorrhea (Week 9)
    // 28F, no period x 4 months, not pregnant
    // ==========================================
    
    const JESSICA_RAMIREZ = {
        meta: {
            caseId: "amenorrhea",
            patientName: "Jessica Ramirez",
            age: 28,
            gender: "female",
            occupation: "Graduate student (PhD)",
            setting: "Primary Care Clinic",
            diagnosis: "Secondary amenorrhea - hypothalamic (stress/weight loss/exercise)",
            criticalFindings: [
                "No period x 4 months",
                "Negative pregnancy tests",
                "Significant stress (PhD program, dissertation)",
                "Weight loss - 15 lbs in 3 months",
                "Excessive exercise (running daily)",
                "Normal prior menstrual cycles",
                "No galactorrhea",
                "No visual field changes",
                "No hirsutism or acne"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING & CHIEF COMPLAINT
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "Hi, thanks for seeing me.",
            
            "how are you|how you doing":
                "Okay, I guess. A little worried about why my periods stopped.",
            
            "what brings you in|chief complaint|why here|what's wrong":
                "I haven't had my period in about 4 months. That's never happened before. I took a pregnancy test and it was negative, so I don't know what's going on.",
            
            "tell me more|can you explain|describe":
                "My periods have always been pretty regular. Then about 4 months ago they just stopped. I've taken multiple pregnancy tests - all negative. I'm kind of stressed about it.",
            
            "start from the beginning|walk me through":
                "So my last real period was about 4 months ago. At first I thought I was just late because of stress - I'm in a PhD program. But then another month went by, and another. I've taken like 5 pregnancy tests, all negative. Something's wrong.",

            // ============================================
            // TIMELINE - MENSTRUAL HISTORY
            // ============================================
            
            "when was your last period|lmp|last menstrual period":
                "About 4 months ago. Maybe a little longer - hard to remember exactly.",
            
            "try to remember|exact date|when exactly":
                "Let me think... it was right after finals in the spring. So maybe late April or early May. It's September now, so... yeah, about 4 months.",
            
            "was that period normal|normal lmp":
                "Yeah, it was normal. Normal flow, normal length. Nothing unusual about it.",
            
            "periods before that|prior cycles":
                "All normal. I've always been pretty regular.",
            
            "how regular|cycle length|every how many days":
                "Every 28-30 days, like clockwork. Could practically set my calendar by it.",
            
            "since menarche|first period|how long regular":
                "Since I was 13. Always been regular. This is really weird for me.",
            
            "any spotting|bleeding at all":
                "Nothing. Not even spotting. It's like it just stopped.",
            
            "noticed anything different|changes before it stopped":
                "Looking back, my last couple of periods might have been a little lighter than usual. But I didn't think much of it.",

            // ============================================
            // PREGNANCY RULED OUT
            // ============================================
            
            "pregnancy test|tested|taken a test":
                "Yes, I've taken multiple. All negative.",
            
            "how many tests|when did you test":
                "Like 5 or 6 over the past few months. First one when I was a week late. Then every few weeks. All negative.",
            
            "when was last test|most recent":
                "About a week ago. Negative.",
            
            "what kind|home test|blood test":
                "Home tests from the drugstore. Different brands.",
            
            "could you be pregnant|any chance|pregnancy possible":
                "I really don't think so. Multiple negative tests. And my boyfriend and I use protection.",

            // ============================================
            // STRESS - PHD PROGRAM
            // ============================================
            
            "stress|stressed|life stressors":
                "Yeah, I'm pretty stressed. I'm working on my PhD dissertation. It's been intense.",
            
            "tell me about the stress|describe|phd":
                "I'm in a PhD program in biology. Working on my dissertation. My advisor is demanding, I'm behind on my timeline, funding is uncertain. It's a lot.",
            
            "when did stress increase|how long":
                "It's always been stressful but the last 6 months have been really bad. That's when I started falling behind.",
            
            "sleep|sleeping|insomnia":
                "Not great. I stay up late working. Maybe 5-6 hours a night. Used to get 7-8.",
            
            "how long sleep problems|when started":
                "Since about January. When things got really stressful.",
            
            "anxiety|worried|anxious":
                "I have a lot of anxiety about finishing on time. About my career. About money.",
            
            "depression|mood|sad|down":
                "I wouldn't say depressed. Just stressed and tired. Sometimes overwhelmed.",
            
            "panic attacks|episodes":
                "No panic attacks. Just constant low-level stress.",

            // ============================================
            // WEIGHT LOSS - KEY FACTOR
            // ============================================
            
            "weight|lost weight|weight change":
                "Actually, yes. I've lost some weight. About 15 pounds in the last few months.",
            
            "intentional|trying to lose|on a diet":
                "Not really intentional. I've been so busy I forget to eat sometimes. And I've been running more.",
            
            "current weight|how much weigh now":
                "About 115 pounds now. I was 130 at the start of the year.",
            
            "height|how tall":
                "I'm 5'6\".",
            
            "bmi|calculate":
                "So that would be... a BMI around 18.5? I know that's on the low end.",
            
            "eating habits|diet|meals":
                "Honestly not great. I skip breakfast usually. Grab something quick for lunch - maybe a granola bar. Try to have dinner but sometimes I'm too tired.",
            
            "how many meals|calories":
                "Maybe one real meal a day? Sometimes two. I know it's not enough.",
            
            "appetite|hungry":
                "My appetite has decreased. I used to love food. Now I just don't feel hungry.",
            
            "restricting|avoiding foods|eating disorder":
                "I'm not trying to restrict or anything. I don't have an eating disorder. I'm just busy and stressed and food isn't a priority.",
            
            "what do you eat|typical day":
                "Coffee for breakfast. Maybe a salad or sandwich for lunch if I remember. Try to cook something simple for dinner - pasta, eggs, something quick.",

            // ============================================
            // EXERCISE - EXCESSIVE
            // ============================================
            
            "exercise|physical activity|working out":
                "I've been running a lot actually. It helps with the stress.",
            
            "how much|how often|frequency":
                "Every day. Sometimes twice a day.",
            
            "how far|distance|duration":
                "Usually 5-6 miles a day. Sometimes more on weekends.",
            
            "when did you start|how long running this much":
                "I always ran some, but I increased it a lot about 5-6 months ago. When the stress got bad. It helps me cope.",
            
            "before that|previous exercise":
                "I used to run maybe 3 times a week, 2-3 miles. Now it's every day, longer distances.",
            
            "other exercise|besides running":
                "Some yoga. But mainly running.",
            
            "feel you have to|compulsive|can't stop":
                "It's not compulsive. I just feel better when I run. It clears my head.",
            
            "rest days|days off":
                "I take a day off occasionally. But I feel guilty when I do.",

            // ============================================
            // ASSOCIATED SYMPTOMS
            // ============================================
            
            "other symptoms|anything else|feel different":
                "I'm tired a lot. Sometimes feel cold when others don't. My hair's been falling out more than usual.",
            
            "fatigue|tired|energy":
                "Really tired. All the time. Even when I sleep more I don't feel rested.",
            
            "cold|feel cold|temperature":
                "Yeah, I'm always cold now. Wearing sweaters when everyone else is comfortable.",
            
            "hair loss|hair falling out|thinning":
                "More hair in the shower drain than usual. My ponytail feels thinner.",
            
            "when did that start|hair loss when":
                "Noticed it maybe 2 months ago.",
            
            "skin changes|dry skin":
                "Maybe a little drier than usual.",
            
            "nails|brittle nails":
                "They break more easily now.",
            
            "headaches":
                "Occasional headaches. Probably from stress and not sleeping enough.",
            
            "vision changes|visual problems|see differently":
                "No, vision is fine.",
            
            "milky discharge|breast discharge|galactorrhea|leaking":
                "No, nothing like that. No discharge from my breasts.",
            
            "excess hair|facial hair|hirsutism":
                "No, no extra hair growth. If anything I'm losing hair.",
            
            "acne|breaking out":
                "No, skin is actually pretty clear.",
            
            "hot flashes|sweating":
                "No hot flashes. I run cold if anything.",
            
            "vaginal dryness":
                "Maybe a little. Haven't paid much attention.",
            
            "libido|sex drive":
                "Low. I'm too tired and stressed to think about sex much.",

            // ============================================
            // GYN HISTORY - DETAILED
            // ============================================
            
            "when did you first get your period|menarche|first period":
                "I was 13.",
            
            "regular since then|always regular":
                "Yes, always regular. This is the first time they've stopped.",
            
            "ever missed periods before|skipped":
                "Never like this. Maybe a day or two late sometimes, but never 4 months.",
            
            "heavy periods|painful periods|dysmenorrhea":
                "Normal flow. Some cramps but nothing severe. Never needed to stay home or anything.",
            
            "birth control|contraception|on the pill":
                "I was on the pill in college for a few years. Stopped about 2 years ago.",
            
            "why did you stop|stopped pill":
                "No particular reason. My relationship ended and I figured I didn't need it. Periods went back to normal right away.",
            
            "how are periods off pill|since stopping":
                "Were totally normal until 4 months ago. Regular, normal flow.",
            
            "sexually active|having sex|intercourse":
                "Yes, I have a boyfriend. We've been together about 8 months.",
            
            "partner|partners":
                "Just Eric. 8 months together.",
            
            "what do you use|contraception now|protection":
                "Condoms. Every time.",
            
            "condoms every time|consistent":
                "Yes, we're careful. Neither of us wants a pregnancy right now.",
            
            "condoms ever break|failures":
                "No, we've never had a condom break.",
            
            "any other birth control|backup":
                "No, just condoms. I was thinking about going back on the pill but then my periods stopped so I wanted to figure that out first.",
            
            "ever been pregnant|pregnancy history":
                "No, never been pregnant.",
            
            "stis|std|sexually transmitted infections":
                "No, I've never had any STIs.",
            
            "sti testing|tested|when":
                "Got tested about a year ago. All negative. Eric and I both got tested when we started dating.",
            
            "hiv|hiv test":
                "Negative.",
            
            "pap smear|cervical screening|when last":
                "About a year ago. Normal.",
            
            "abnormal paps|ever abnormal":
                "No, all normal.",
            
            "pelvic exam|gyn exam":
                "Last one was with the pap smear about a year ago. Normal.",
            
            "pcos|polycystic ovaries":
                "No, I've never been told I have that.",
            
            "ovarian cysts|cysts":
                "Not that I know of.",
            
            "endometriosis":
                "No endometriosis.",
            
            "fibroids":
                "No fibroids.",
            
            "thyroid|thyroid problems":
                "Never been told I have thyroid problems. But I've never been tested.",
            
            "pituitary|prolactin|brain tumor":
                "No, nothing like that.",

            // ============================================
            // PAST MEDICAL HISTORY
            // ============================================
            
            "medical history|medical problems|conditions|pmh":
                "I'm pretty healthy. No major medical problems.",
            
            "chronic conditions|diagnoses":
                "Nothing chronic. Just healthy.",
            
            "hospitalizations|ever hospitalized":
                "Never hospitalized.",
            
            "surgeries|operations":
                "No surgeries.",
            
            "eating disorder|anorexia|bulimia|history":
                "No, I've never had an eating disorder. I know I'm thin right now but it's not intentional.",
            
            "mental health|depression|anxiety diagnosis":
                "No formal diagnoses. Just the stress of grad school.",
            
            "seen a therapist|counseling":
                "I saw a counselor a few times through the university. Nothing regular.",

            // ============================================
            // MEDICATIONS
            // ============================================
            
            "medications|medicines|taking anything|meds":
                "Nothing really. Just a multivitamin.",
            
            "birth control|hormones":
                "No, stopped the pill 2 years ago.",
            
            "supplements|vitamins":
                "Multivitamin. That's it.",
            
            "any other medications|anything else":
                "No prescriptions. Nothing else.",
            
            "over the counter|tylenol|ibuprofen":
                "Occasional Advil for headaches.",
            
            "herbal|natural supplements":
                "No herbal stuff.",

            // ============================================
            // ALLERGIES
            // ============================================
            
            "allergies|allergic":
                "No medication allergies. Seasonal allergies to pollen but nothing serious.",

            // ============================================
            // FAMILY HISTORY
            // ============================================
            
            "family history|family medical history":
                "Pretty healthy family. Mom has thyroid problems. Dad has high blood pressure.",
            
            "mother|mom":
                "She's 55. Has hypothyroidism - takes medication for it. Otherwise healthy.",
            
            "when was mom diagnosed|thyroid when":
                "I think in her 40s.",
            
            "father|dad":
                "He's 58. High blood pressure and cholesterol. Takes medication.",
            
            "siblings|brothers|sisters":
                "One younger brother, he's 24. Healthy.",
            
            "premature menopause|early menopause|pof|family":
                "No, my mom went through menopause in her early 50s. Normal timing.",
            
            "aunts|grandmothers|other women":
                "No one with early menopause or fertility problems that I know of.",
            
            "autoimmune|autoimmune disease in family":
                "Just mom's thyroid. That's autoimmune, right?",
            
            "pcos in family|irregular periods":
                "Not that I know of.",
            
            "eating disorders in family":
                "No.",

            // ============================================
            // SOCIAL HISTORY
            // ============================================
            
            "smoke|smoking|cigarettes":
                "No, never smoked.",
            
            "vape|e-cigarettes":
                "No.",
            
            "alcohol|drink|drinking":
                "Rarely. Maybe a glass of wine occasionally. I've been too busy to socialize much.",
            
            "drugs|recreational|marijuana":
                "No drugs.",
            
            "caffeine|coffee":
                "A lot of coffee. Probably 3-4 cups a day. Keeps me going.",
            
            "work|school|occupation":
                "PhD student in biology. Working on my dissertation.",
            
            "what year|how far along":
                "Fifth year. Should be finishing but I'm behind schedule.",
            
            "funding|financial stress":
                "My funding runs out next year. I need to finish. It's a lot of pressure.",
            
            "support|relationships|friends":
                "Eric - my boyfriend - is supportive. I don't see my friends as much as I used to. Too busy.",
            
            "live with|living situation":
                "I have an apartment near campus. Live alone. Eric stays over sometimes.",
            
            "family nearby|parents":
                "My parents are in Texas. I'm here in California. We talk on the phone.",
            
            "hobbies|fun|besides running":
                "I used to read for fun. Watch movies. Don't have time anymore.",

            // ============================================
            // SEXUAL HISTORY - COMPREHENSIVE
            // ============================================
            
            "sexually active|having sex|intercourse":
                "Yes, with my boyfriend Eric.",
            
            "how often|frequency":
                "Less than we used to. Maybe once a week now. I'm often too tired.",
            
            "partner|partners|how many":
                "Just Eric. We've been together 8 months.",
            
            "before eric|previous partners|lifetime":
                "I had one boyfriend in college - we dated for 2 years. And a shorter relationship before that. So 3 total including Eric.",
            
            "monogamous|exclusive|faithful":
                "Yes, just Eric. We're exclusive.",
            
            "condoms|protection|barrier":
                "Yes, we use condoms. Every time.",
            
            "why condoms|why that method":
                "I'm not on the pill anymore and condoms are easy. We're both clean so STIs aren't a concern - just pregnancy prevention.",
            
            "could you be pregnant|possible|chance":
                "I really don't think so. We use condoms consistently and I've had multiple negative pregnancy tests.",
            
            "stis|std|sexually transmitted infections":
                "No, never had any.",
            
            "sti testing|tested":
                "Both Eric and I got tested when we started dating. Both negative for everything.",
            
            "hiv|hiv status":
                "Negative.",
            
            "pain with sex|dyspareunia":
                "No pain with sex.",
            
            "libido|sex drive|desire":
                "It's been lower lately. I'm just tired and stressed. Eric understands.",
            
            "satisfied|relationship|happy with eric":
                "Yeah, he's great. Very supportive. Doesn't pressure me.",

            // ============================================
            // REVIEW OF SYSTEMS - NEGATIVES
            // ============================================
            
            "fever|chills":
                "No fever or chills.",
            
            "night sweats":
                "No night sweats.",
            
            "chest pain":
                "No chest pain.",
            
            "shortness of breath":
                "No, breathing is fine.",
            
            "palpitations|heart racing":
                "No palpitations.",
            
            "abdominal pain|belly pain":
                "No abdominal pain.",
            
            "nausea|vomiting":
                "No nausea or vomiting.",
            
            "bowel changes|constipation|diarrhea":
                "Maybe a little constipated. Probably not eating enough fiber.",
            
            "urinary symptoms|burning|frequency":
                "No urinary problems.",
            
            "rash|skin problems":
                "No rash.",
            
            "joint pain|muscle pain":
                "Sometimes sore from running but nothing unusual.",
            
            "numbness|tingling":
                "No numbness or tingling.",
            
            "dizziness|lightheaded":
                "Occasionally if I stand up too fast. Probably should eat more.",
            
            "fainting|passed out":
                "No, never fainted.",

            // ============================================
            // PATIENT CONCERNS
            // ============================================
            
            "what are you worried about|concerns|scared":
                "I'm worried something is wrong. Why would my periods just stop? Could I be going through early menopause?",
            
            "early menopause|worried about menopause":
                "That's my biggest fear. I'm only 28. I want to have kids someday.",
            
            "fertility|worried about fertility|want kids":
                "Not right now - I need to finish my PhD first. But in a few years, yes. I want to be able to have children.",
            
            "what do you think is causing this|your theory":
                "I don't know. Maybe stress? Can stress really stop your period?",
            
            "questions for me|anything to ask":
                "What's wrong with me? Is this serious? Can it be fixed?",
            
            "anything else|else to tell me":
                "I just want to know what's going on. And I want my periods back. I want to know I'm normal.",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['rlq-ectopic'] = EMILY_ROBERTS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['chf-dyspnea'] = ROBERT_CHEN;
    window.COMPREHENSIVE_PATIENT_RESPONSES['amenorrhea'] = JESSICA_RAMIREZ;
    
    console.log('ReasonDx Part 7 (Ectopic, CHF, Amenorrhea) loaded');

})();
