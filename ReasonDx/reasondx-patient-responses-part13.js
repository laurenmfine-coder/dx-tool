/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 13: Additional GI Cases
 * 
 * Cases:
 * 1. Small Bowel Obstruction - 72F
 * 2. Lower GI Bleed (Diverticular) - 65M
 * 3. Acute Hepatitis (Alcohol) - 48M
 * 4. Cirrhosis Decompensation - 56M
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Eleanor Williams - Small Bowel Obstruction
    // 72F, crampy abdominal pain, vomiting, constipation
    // ==========================================
    
    const ELEANOR_WILLIAMS = {
        meta: {
            caseId: "small-bowel-obstruction",
            patientName: "Eleanor Williams",
            age: 72,
            gender: "female",
            occupation: "Retired nurse",
            setting: "Emergency Department",
            diagnosis: "Small bowel obstruction (adhesive)",
            criticalFindings: [
                "Crampy abdominal pain",
                "Bilious vomiting",
                "Obstipation (no gas or stool)",
                "Distension",
                "Prior abdominal surgery (adhesions)",
                "High-pitched bowel sounds"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*lying on stretcher, appearing uncomfortable* Hello... *grimaces* ...I'm in a lot of pain.",
            
            "how are you|how you doing":
                "*holding abdomen* Terrible. My belly hurts so bad and I can't stop throwing up.",
            
            "what brings you in|chief complaint|why here":
                "Horrible stomach pain and vomiting. Started yesterday. The pain comes in waves - terrible cramping. I've thrown up everything including green stuff. And I can't pass gas or go to the bathroom.",
            
            "tell me more|can you explain":
                "It started yesterday with cramping in my belly. Got worse and worse. Started vomiting - first food, then this green-yellow stuff. My belly is swollen. I haven't had a bowel movement in 3 days and can't even pass gas.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "The cramping started yesterday morning. Got progressively worse. The vomiting started yesterday afternoon.",
            
            "sudden|gradual":
                "Started as mild cramping, then got worse in waves. Each wave is terrible.",
            
            "getting worse|progression":
                "Much worse. The cramping is more intense and more frequent. I'm more nauseated. My belly feels huge.",
            
            // PAIN CHARACTERISTICS
            "describe the pain|what does it feel like":
                "Crampy. Comes in waves. Like something is squeezing inside me. Then it eases off, then comes back.",
            
            "where|location":
                "All over my belly. *gestures broadly* Maybe worse around my belly button.",
            
            "constant or comes and goes|colicky":
                "Comes and goes in waves. Maybe every few minutes. Builds up, peaks, then eases off.",
            
            "how bad|scale|severity":
                "When it cramps, 8 or 9. Between cramps, maybe a 4 or 5.",
            
            // VOMITING
            "vomiting|throw up|nausea":
                "I've thrown up many times. Lost count. Can't keep anything down.",
            
            "what comes up|describe vomit|color":
                "At first it was food. Then just liquid. Now it's green-yellow. Bitter tasting. Bile I think - I was a nurse.",
            
            "blood|bloody|coffee grounds":
                "No blood in the vomit.",
            
            "when did vomiting start":
                "Yesterday afternoon. After the cramping got bad.",
            
            // BOWEL FUNCTION - CRITICAL
            "bowel movements|stool|constipation":
                "I haven't had a bowel movement in 3 days. And I haven't passed gas in 2 days. Nothing is coming out.",
            
            "last bowel movement|when":
                "Three days ago. It was normal then.",
            
            "gas|flatus|passing gas":
                "No gas at all. Usually I pass gas regularly. Nothing since day before yesterday.",
            
            "obstipation|complete|nothing":
                "Absolutely nothing coming out. That's what scared me. As a nurse, I know that's not good.",
            
            // DISTENSION
            "bloated|distension|swollen belly":
                "Very bloated. Look at my belly - it's huge. I look pregnant. And I'm 72!",
            
            "getting more distended|worse":
                "Yes, more swollen than yesterday. My pants wouldn't fit.",
            
            // ASSOCIATED
            "fever|temperature":
                "Maybe a low fever. I felt warm earlier.",
            
            "appetite":
                "None. Can't even think about food.",
            
            "urination|peeing":
                "Just a little. Dark urine. Probably dehydrated from all the vomiting.",
            
            // SURGICAL HISTORY - CRITICAL
            "surgery|operations|abdominal surgery":
                "I had my gallbladder out 15 years ago. And a hysterectomy 20 years ago. Both open surgeries, not laparoscopic.",
            
            "scars|surgical scars":
                "Yes, I have scars. One under my right ribs, one low on my belly.",
            
            "ever had this before|previous obstruction":
                "I had something similar about 5 years ago. They said it was an obstruction from adhesions. It resolved without surgery.",
            
            "what happened then|how was it treated":
                "They put a tube through my nose, gave me IV fluids, and it opened up on its own after a couple days.",
            
            "adhesions|told about adhesions":
                "Yes, the surgeon told me I probably have adhesions from my surgeries. Scar tissue. Said it could cause problems.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure, osteoporosis, the surgeries I mentioned. Otherwise pretty healthy for 72.",
            
            "hernia|have a hernia":
                "No hernia that I know of.",
            
            "cancer|malignancy":
                "No cancer.",
            
            // MEDICATIONS
            "medications|medicines":
                "Lisinopril for blood pressure, calcium and vitamin D for my bones. Baby aspirin.",
            
            "allergies":
                "Codeine makes me vomit. Ironic given how much I'm already vomiting.",
            
            // SOCIAL
            "smoke|smoking":
                "Never smoked.",
            
            "alcohol":
                "Occasional wine. Nothing regular.",
            
            "live with|living situation":
                "I live alone. Widowed 5 years ago. My daughter brought me in.",
            
            "work|job":
                "Retired nurse. 40 years in the OR. That's why I know this is serious.",
            
            // SEXUAL HISTORY - 72F widowed
            "sexually active|having sex":
                "No, not since my husband passed. I'm not seeing anyone.",
            
            "partner":
                "No partner. Just me.",
            
            "stis|std":
                "No, never had any issues. Just my husband for 48 years.",
            
            // CONCERNS
            "worried about|concerns":
                "I'm worried I'll need surgery. At my age... I've been on the other side, I know what can go wrong.",
            
            "anything else":
                "Please help me. I know what a bowel obstruction looks like. I've seen too many to count. I was hoping I was wrong.",
        }
    };

    // ==========================================
    // CASE: George Harrison - Lower GI Bleed
    // 65M, bright red blood per rectum, diverticular
    // ==========================================
    
    const GEORGE_HARRISON = {
        meta: {
            caseId: "lgib-diverticular",
            patientName: "George Harrison",
            age: 65,
            gender: "male",
            occupation: "Retired postal worker",
            setting: "Emergency Department",
            diagnosis: "Lower GI bleed (diverticular)",
            criticalFindings: [
                "Bright red blood per rectum",
                "Painless bleeding",
                "Large volume",
                "Known diverticulosis",
                "On aspirin",
                "Hemodynamic changes (lightheaded)"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*looking pale and anxious* Doc, I'm bleeding. From my bottom. A lot of blood.",
            
            "how are you|how you doing":
                "Scared. I've never seen so much blood. The toilet was full of it.",
            
            "what brings you in|chief complaint|why here":
                "I'm bleeding from my rectum. Bright red blood. Started this morning. It's a lot - I'm not talking about a little on the paper. The whole toilet bowl was red. Then I felt lightheaded.",
            
            "tell me more|can you explain":
                "I went to the bathroom this morning and passed what I thought was a normal bowel movement. Then I looked and it was all blood. Bright red. I wiped and there was more. Toilet looked like a crime scene. Happened again an hour later. Then I got dizzy.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "This morning. First episode maybe 7am. Then again around 8am. My wife made me come in after I almost fainted.",
            
            "sudden|gradual":
                "Sudden. No warning. Was fine yesterday.",
            
            "ever had this before|happened before":
                "Had a little blood on the paper before - thought it was hemorrhoids. Never anything like this.",
            
            // BLEEDING CHARACTERISTICS
            "describe the blood|what does it look like":
                "Bright red. Like fresh blood. Not dark or tarry.",
            
            "how much|amount|volume":
                "A lot. First time maybe a cup worth in the toilet. Second time even more. Maybe more than a cup.",
            
            "clots|blood clots":
                "Yes, some clots. Dark red clumps.",
            
            "mixed with stool|separate":
                "Mixed with the stool. And in the water. And on the paper.",
            
            "dripping|spraying":
                "It's coming out with the stool. Not just dripping.",
            
            // PAIN
            "pain|abdominal pain|hurt":
                "No real pain. That's the strange thing. Some mild cramping before I went, but no severe pain.",
            
            "rectal pain|hurt to go":
                "No, doesn't hurt to pass it.",
            
            "hemorrhoids|hemorrhoid pain":
                "I have hemorrhoids but they usually burn a little. This doesn't hurt at all.",
            
            // HEMODYNAMIC
            "lightheaded|dizzy|faint":
                "Yes, got very lightheaded after the second time. Had to sit down. Almost passed out.",
            
            "passed out|fainted|syncope":
                "Didn't fully pass out but came close. My vision went gray.",
            
            "standing|when lightheaded":
                "When I stood up after the second bloody bowel movement. Had to grab the counter.",
            
            "heart racing|palpitations":
                "My heart was pounding. Racing.",
            
            "sweating|diaphoresis":
                "Yes, broke out in a cold sweat when I got dizzy.",
            
            "still lightheaded|right now":
                "A little better lying here, but still not right.",
            
            // ASSOCIATED
            "nausea|vomiting":
                "A little nauseous. Haven't thrown up.",
            
            "appetite|eating":
                "Haven't eaten since this started. Too scared.",
            
            "fever":
                "No fever.",
            
            "weight loss":
                "No recent weight loss.",
            
            "change in bowel habits|bowel changes":
                "No changes before this. Regular bowel movements.",
            
            // GI HISTORY
            "colonoscopy|had a colonoscopy|scope":
                "Yes, about 3 years ago. They found diverticulosis. Said lots of people have it.",
            
            "diverticulosis|diverticula|told you have":
                "Yes, they told me I have diverticulosis. Little pouches in the colon. Said to eat more fiber.",
            
            "diverticulitis|infected|ever had infection":
                "No, never had diverticulitis. Just the diverticulosis.",
            
            "polyps|found polyps":
                "They removed one small polyp. Said it was benign.",
            
            "hemorrhoids|have hemorrhoids":
                "Yes, I have hemorrhoids. Sometimes they bleed a little. Nothing like this though.",
            
            "ulcer|stomach problems":
                "No ulcers that I know of.",
            
            // MEDICATIONS - CRITICAL
            "medications|medicines|what do you take":
                "Aspirin every day - baby aspirin. Lisinopril for blood pressure. Atorvastatin for cholesterol.",
            
            "aspirin|how long on aspirin|why aspirin":
                "Baby aspirin, 81mg, every day. My doctor started it a few years ago for my heart. Said it helps prevent heart attacks.",
            
            "blood thinners|anticoagulants|plavix|warfarin":
                "No, just the aspirin. No other blood thinners.",
            
            "nsaids|ibuprofen|advil|aleve":
                "I take ibuprofen sometimes for my back. Maybe a few times a week.",
            
            "how much ibuprofen|how often":
                "400-600mg maybe 2-3 times a week when my back acts up.",
            
            "allergies":
                "No allergies.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure, high cholesterol, the diverticulosis. Some back problems.",
            
            "heart disease|heart problems":
                "No heart disease. The aspirin was preventive.",
            
            "bleeding problems|clotting|bruise easily":
                "Never had bleeding problems before.",
            
            // SOCIAL
            "smoke|smoking":
                "Quit 15 years ago. Smoked for 25 years before that.",
            
            "alcohol":
                "A few beers on weekends. Nothing heavy.",
            
            "married|family":
                "Married 40 years. Wife's in the waiting room. She's worried sick.",
            
            // SEXUAL HISTORY - 65M married
            "sexually active|having sex":
                "Yes, with my wife.",
            
            "partner":
                "Just my wife. 40 years.",
            
            "condoms|contraception":
                "No, she went through menopause years ago.",
            
            "stis|std":
                "No, never. Just been with my wife.",
            
            "anal receptive|anal sex":
                "No.",
            
            // CONCERNS
            "worried about|concerns":
                "Is this cancer? That's what I'm scared of. My brother had colon cancer.",
            
            "brother|family history cancer":
                "My older brother had colon cancer at 70. He's okay now after surgery and chemo.",
            
            "anything else":
                "I've never been so scared. All that blood... Am I going to be okay?",
        }
    };

    // ==========================================
    // CASE: Dennis Murphy - Acute Alcoholic Hepatitis
    // 48M, jaundice, RUQ pain, heavy drinker
    // ==========================================
    
    const DENNIS_MURPHY = {
        meta: {
            caseId: "alcoholic-hepatitis",
            patientName: "Dennis Murphy",
            age: 48,
            gender: "male",
            occupation: "Construction foreman",
            setting: "Emergency Department",
            diagnosis: "Acute alcoholic hepatitis",
            criticalFindings: [
                "Jaundice (scleral icterus)",
                "RUQ pain/tenderness",
                "Hepatomegaly",
                "Heavy alcohol use history",
                "Recent binge drinking",
                "Fever, malaise"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*visibly jaundiced* Hey doc. I know I look like hell. My eyes are yellow.",
            
            "how are you|how you doing":
                "Lousy. My gut hurts, I feel like garbage, and I turned yellow. My wife freaked out.",
            
            "what brings you in|chief complaint|why here":
                "I turned yellow. My eyes, my skin. And my stomach hurts - right here *points to RUQ*. I've been feeling awful for about a week. My wife took one look at me this morning and dragged me here.",
            
            "tell me more|can you explain":
                "I've felt sick for about a week. Tired, no appetite, nauseous. Then a few days ago I noticed I was turning yellow. My urine got really dark too. And there's this ache under my ribs on the right side.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Feeling sick - about a week. The yellow color - maybe 3-4 days ago. Getting more yellow each day.",
            
            "sudden|gradual":
                "Kind of sudden. Was fine, then got sick, then turned yellow.",
            
            "getting worse|progression":
                "Getting more yellow. Feeling worse. Pain is about the same.",
            
            // JAUNDICE
            "yellow|jaundice|skin color":
                "Yeah, look at me. My eyes especially - they're yellow as mustard. Skin too but the eyes are worst.",
            
            "when noticed|first noticed":
                "My wife noticed my eyes 4 days ago. I thought she was exaggerating. Then I looked in the mirror.",
            
            "itching|pruritus|skin itch":
                "A little itchy. Not terrible but it's there.",
            
            // ABDOMINAL SYMPTOMS
            "abdominal pain|stomach|belly":
                "Aches right here. *points to RUQ* Under my ribs on the right.",
            
            "describe pain|what does it feel like":
                "Dull ache. Kind of tender. Not sharp.",
            
            "how bad|severity":
                "Maybe a 4 or 5. Not excruciating but definitely there.",
            
            "constant|comes and goes":
                "Pretty constant. Maybe a little worse after I try to eat.",
            
            "nausea|vomiting":
                "Very nauseous. Threw up a few times earlier this week. Not much coming up anymore - can't eat.",
            
            "appetite|eating":
                "Zero appetite. Food makes me sick. Lost some weight.",
            
            "weight loss|how much":
                "Maybe 8-10 pounds in the last couple weeks. Clothes are loose.",
            
            // URINE/STOOL
            "urine|pee|dark urine":
                "Very dark. Like tea or cola. That scared me too.",
            
            "stool|bowel movements|color":
                "Maybe lighter than usual? Kind of tan colored.",
            
            // ASSOCIATED
            "fever|temperature":
                "Yeah, I've had a low fever. 100-101 the last few days.",
            
            "chills":
                "Some chills too.",
            
            "fatigue|tired|energy":
                "Exhausted. No energy at all. Can barely get off the couch.",
            
            // ALCOHOL HISTORY - CRITICAL
            "alcohol|drink|drinking":
                "*pauses* Yeah. I drink. Too much. I know.",
            
            "how much|how often|quantity":
                "A lot. Probably a pint of whiskey a day. More on weekends. I know it's bad.",
            
            "every day|daily":
                "Pretty much every day. Can't remember the last day I didn't drink.",
            
            "how long|years drinking|history":
                "Heavy like this? Maybe 15-20 years. Started social, then it became a habit. Then a need.",
            
            "type of alcohol|what do you drink":
                "Whiskey mostly. Beer too. Whatever's available.",
            
            "recent change|drinking more|binge":
                "Actually yeah... last month has been worse. Work stress. Been drinking more than usual, which is saying something.",
            
            "tried to cut back|tried to stop":
                "I've tried. Longest I went was a week. Got the shakes so bad I couldn't work.",
            
            "withdrawal|shakes|symptoms without alcohol":
                "When I don't drink I get shaky, sweaty, anxious. Sometimes I see things that aren't there. Scares me.",
            
            "last drink|when last":
                "This morning. Needed something to settle my stomach. Didn't help.",
            
            "morning drinking|need a drink":
                "Yeah, usually need something in the morning to steady myself.",
            
            // LIVER HISTORY
            "liver problems before|told about your liver":
                "Doc's warned me my liver enzymes were high before. Told me to stop drinking. I didn't listen.",
            
            "hepatitis|viral hepatitis|hep b|hep c":
                "I got tested once. Think it was negative. Not sure though.",
            
            "cirrhosis|scarring":
                "They've mentioned I might be heading that way if I don't stop.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure. The liver stuff. Gout - probably from drinking. That's about it.",
            
            "diabetes":
                "No diabetes.",
            
            "pancreatitis|pancreas":
                "Had something once - told me my pancreas was inflamed. That was after a heavy bender. Hurt like hell.",
            
            // MEDICATIONS
            "medications|medicines":
                "Lisinopril for blood pressure. Don't take much else.",
            
            "tylenol|acetaminophen":
                "Sometimes for headaches. Probably shouldn't with drinking but I do.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke|smoking":
                "Yeah, pack a day. For 30 years.",
            
            "drugs|recreational|other substances":
                "No drugs. Alcohol's enough of a problem.",
            
            "married|family":
                "Married, two kids - teenagers. They're worried. My wife's had it with me and the drinking.",
            
            "work|job":
                "Construction foreman. Hard to work feeling like this. Missed a week already.",
            
            // SEXUAL HISTORY - 48M married
            "sexually active|having sex":
                "With my wife, yeah. Not much lately - I feel like crap.",
            
            "partner":
                "Just my wife. 20 years.",
            
            "other partners|outside marriage":
                "No... well, years ago I messed up. Once. Long time ago.",
            
            "condoms|that time":
                "No... I was drunk. Stupid. My biggest regret.",
            
            "stis|std|tested":
                "Never been specifically tested. Should I be?",
            
            "wife know|told your wife":
                "No. It was 15 years ago. It would destroy her.",
            
            // CONCERNS
            "worried about|concerns":
                "Am I dying? Is my liver shot? I know I did this to myself.",
            
            "want to quit|want to stop drinking":
                "I need to. Looking at myself like this... I have to. For my kids if nothing else.",
            
            "anything else":
                "I'm scared. And ashamed. I've thrown my health away. Can I come back from this?",
        }
    };

    // ==========================================
    // CASE: Vincent Russo - Cirrhosis Decompensation
    // 56M, ascites, confusion, known cirrhosis
    // ==========================================
    
    const VINCENT_RUSSO = {
        meta: {
            caseId: "cirrhosis-decompensation",
            patientName: "Vincent Russo",
            age: 56,
            gender: "male",
            occupation: "Retired bartender",
            setting: "Emergency Department",
            diagnosis: "Decompensated cirrhosis with hepatic encephalopathy",
            criticalFindings: [
                "Known cirrhosis (alcoholic)",
                "Increasing confusion/encephalopathy",
                "Ascites (tense)",
                "Asterixis",
                "Jaundice",
                "GI bleed history (varices)"
            ]
        },
        
        responses: {
            // OPENING - Wife provides history due to confusion
            "hello|hi|good morning": 
                "*looks confused, slightly jaundiced* Hey... uh... where am I again?",
            
            "how are you|how you doing":
                "*slow to respond* I'm... I don't know... tired... *trails off*",
            
            "what brings you in|chief complaint|why here":
                "*wife interjects* He's confused. More than usual. He has cirrhosis - liver disease. The last few days he's gotten worse. Doesn't know what day it is, keeps forgetting things. And his belly is huge again.",
            
            "tell me more|can you explain":
                "*wife* He's been stable for a while, managing his liver disease. But this week he started getting confused. Today he couldn't remember our granddaughter's name. He's also more yellow and his belly is swelling up again.",
            
            // PATIENT ATTEMPTS
            "mr russo|can you tell me":
                "*slow, slightly slurred* Tell you what? I'm just... tired. The room keeps... I can't think straight.",
            
            "what day is it|know what day":
                "*thinks hard* It's... uh... Tuesday? No wait... *looks at wife*",
            
            "*wife corrects*|actually":
                "*wife* It's Saturday, honey. See what I mean?",
            
            "where are you|know where you are":
                "The hospital? My wife brought me... I think... *trails off*",
            
            // TIMELINE - WIFE PROVIDES
            "when did this start|when start|how long":
                "*wife* The confusion got bad about 3 days ago. He's always a little foggy since the cirrhosis got bad, but this is worse.",
            
            "gradual|sudden|how did it start":
                "*wife* Gradually worse over a few days. At first just more forgetful than usual. Now he's really out of it.",
            
            "getting worse|progression":
                "*wife* Definitely worse each day. Today is the worst I've seen him.",
            
            // CIRRHOSIS HISTORY - WIFE
            "cirrhosis|liver disease|history":
                "*wife* He was diagnosed about 5 years ago. Alcoholic cirrhosis. He's been sober for 3 years now, but the damage was done.",
            
            "drinking|still drinking|alcohol":
                "*wife* No, he hasn't had a drink in 3 years. He really did quit. I'm so proud of him for that.",
            
            "*patient on drinking*|did you drink|alcohol yourself":
                "*patient, slowly* I was... a bartender... drank a lot... for years... not anymore though. Three years...",
            
            "how much|how long drinking":
                "*wife* He drank heavily for probably 30 years. Occupational hazard, he says. Quit when they told him his liver was failing.",
            
            "complications|other problems from cirrhosis":
                "*wife* He's had varices - they banded them twice. He's had fluid build-up before - they've drained it. This is the first time he's been this confused.",
            
            "varices|bleeding|GI bleed":
                "*wife* He vomited blood twice, about 2 years ago and again last year. They scoped him and banded the varices. He's been on medicine to prevent more bleeding.",
            
            "ascites|fluid|belly swelling":
                "*wife* His belly swells up with fluid. They've tapped it a few times. It's been building up again this week. Look how big it is.",
            
            // CURRENT SYMPTOMS
            "belly|abdomen|swelling now":
                "*patient puts hands on distended abdomen* It's... heavy... hard to breathe when I lie down...",
            
            "*wife on abdomen*|describe swelling":
                "*wife* It's bigger than I've ever seen it. He looks 9 months pregnant. He's uncomfortable.",
            
            "breathing|shortness of breath":
                "*wife* He gets short of breath lying flat because of the belly. Sleeps propped up.",
            
            "eating|appetite":
                "*wife* Hardly eating anything. Says he feels full after a few bites. He's lost weight everywhere except his belly.",
            
            "sleep|sleeping|day night reversal":
                "*wife* His sleep is all messed up. Up all night, sleeping during the day. That started before the confusion.",
            
            // ENCEPHALOPATHY SYMPTOMS
            "confused|confusion|what's different":
                "*wife* He's been forgetting things, repeating himself. Today he didn't recognize our granddaughter. He's talking slower, doesn't make sense sometimes.",
            
            "personality|behavior change":
                "*wife* More irritable than usual. Got angry at me for no reason yesterday. That's not like him.",
            
            "hands|tremor|flapping|asterixis":
                "*extends hands as asked - shows clear asterixis/flapping tremor*",
            
            "*wife notices*|what is that":
                "*wife* His hands have been doing that flapping thing the last couple days. Is that bad?",
            
            // PRECIPITANTS
            "infection|sick|fever":
                "*wife* No fever that I noticed. No cough or cold symptoms.",
            
            "bleeding|blood|gi bleed|stool":
                "*wife* No blood in his stool that I've seen. No vomiting blood.",
            
            "constipation|bowel movements":
                "*wife* Actually, he's been constipated. Hasn't gone in 3-4 days. Is that related?",
            
            "medications|miss any|compliance":
                "*wife* He takes lactulose - that syrupy stuff for his liver. He's been taking it but maybe not enough. It's hard when he's this out of it.",
            
            "new medications|started anything new":
                "*wife* No new medicines. Same ones for a while.",
            
            "protein|diet|eating differently":
                "*wife* He hasn't been eating much at all.",
            
            // MEDICATIONS
            "medications|medicines|what does he take":
                "*wife* Lactulose three times a day - though getting him to take it has been hard. Propranolol for the varices. Spironolactone and furosemide for the fluid. Vitamins.",
            
            "allergies":
                "*wife* No allergies that we know of.",
            
            // SOCIAL
            "live with|living situation":
                "*wife* Just the two of us. Kids are grown.",
            
            "support|help at home":
                "*wife* I take care of him. It's getting harder.",
            
            "advance directive|wishes|code status":
                "*wife* We've talked about it. He doesn't want to be on machines. We have it in writing somewhere.",
            
            // PATIENT CONCERNS
            "how do you feel|mr russo":
                "*patient* Tired... confused... I don't like feeling like this. Can't think...",
            
            // WIFE'S CONCERNS
            "worried about|concerns":
                "*wife* Is this it? Is he getting worse for good? He's been fighting so hard. We know the liver isn't going to get better but I thought we had more time.",
            
            "transplant|liver transplant|ever discussed":
                "*wife* They said he's not a candidate because of his age and other health issues. We've accepted that.",
            
            "anything else":
                "*wife, tearful* I just want him comfortable and himself. Even a little more like himself. Is that possible?",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['small-bowel-obstruction'] = ELEANOR_WILLIAMS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['lgib-diverticular'] = GEORGE_HARRISON;
    window.COMPREHENSIVE_PATIENT_RESPONSES['alcoholic-hepatitis'] = DENNIS_MURPHY;
    window.COMPREHENSIVE_PATIENT_RESPONSES['cirrhosis-decompensation'] = VINCENT_RUSSO;
    
    console.log('ReasonDx Part 13 (SBO, LGIB, Alcoholic Hepatitis, Cirrhosis) loaded');

})();
