/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 11: MSK and Hematology Cases
 * 
 * Cases:
 * 1. Acute Gout - 58M
 * 2. Low Back Pain (mechanical) - 45F
 * 3. Shoulder Pain (rotator cuff) - 52M
 * 4. Knee OA - 67F
 * 5. Anemia Workup (Iron deficiency) - 34F
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Thomas Greene - Acute Gout
    // 58M, severe first MTP pain, red, swollen
    // ==========================================
    
    const THOMAS_GREENE = {
        meta: {
            caseId: "acute-gout",
            patientName: "Thomas Greene",
            age: 58,
            gender: "male",
            occupation: "Restaurant owner",
            setting: "Urgent Care",
            diagnosis: "Acute gouty arthritis",
            criticalFindings: [
                "Acute onset severe monoarticular pain",
                "First MTP joint (classic podagra)",
                "Red, hot, swollen joint",
                "Can't bear weight",
                "Risk factors: diet, alcohol, obesity",
                "History of similar episodes"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*limping badly, grimacing* Hey doc. Can barely walk. My toe is killing me.",
            
            "how are you|how you doing":
                "Terrible. Worst pain I've ever felt. It's my big toe. Can't even put a sheet on it at night.",
            
            "what brings you in|chief complaint|why here":
                "My big toe. Woke up at 3am with this incredible pain. It's red, swollen, hot. I can't walk on it. Even the bedsheet touching it makes me scream.",
            
            "tell me more|can you explain":
                "I've had this before - maybe three or four times over the years. Doctor said it was gout. But this is the worst attack yet. Started last night, woke me from sleep.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Started around 3am last night. Woke me up from a dead sleep. Came on fast.",
            
            "what were you doing|before|yesterday":
                "Had a big dinner last night. Steak, lobster, good wine. Maybe a few too many glasses.",
            
            "trigger|what triggered|cause":
                "Probably the food and drink. That seems to set it off. Had a big meal with clients.",
            
            "sudden or gradual":
                "Sudden. Went to bed fine, woke up in agony.",
            
            "getting worse|progression":
                "Got worse through the night. Still terrible now.",
            
            // PAIN CHARACTERISTICS
            "describe the pain|what does it feel like":
                "Excruciating. Throbbing. Like my toe is being crushed in a vice. The slightest touch is unbearable.",
            
            "where|which toe|location":
                "*points to left big toe* Right here. The big toe on my left foot. Right at the base.",
            
            "how bad|scale|severity":
                "10 out of 10. Easily. Worse than when I broke my arm.",
            
            "touch|can I touch it|examine":
                "*pulls foot back* Be careful! Even touching it is agony. The air from you moving hurts.",
            
            "both feet|other joints":
                "Just the left big toe. No other joints right now.",
            
            // APPEARANCE
            "what does it look like|swelling|appearance":
                "Look at it. *shows foot* Red as a tomato. Swollen. Hot. You can see it's inflamed.",
            
            "red|redness":
                "Bright red. Angry looking.",
            
            "hot|warm":
                "Hot to the touch. My wife said it felt like it had a fever.",
            
            "swollen|swelling":
                "Very swollen. Can barely see the joint. Looks like a golf ball.",
            
            // FUNCTION
            "walk|walking|weight bearing":
                "Can't put any weight on it. Been hopping on one foot. That's why I'm limping.",
            
            "shoes|wear shoes":
                "Couldn't get a shoe on. Wearing a sandal and even that hurts.",
            
            // ASSOCIATED
            "fever|temperature":
                "Maybe a little warm. Felt feverish last night.",
            
            "chills":
                "Some chills with the pain.",
            
            "nausea":
                "A little. Pain is so bad it makes me sick.",
            
            // GOUT HISTORY
            "happened before|previous attacks|history":
                "Yeah, maybe three or four times over the past 10 years. Same toe usually. Never this bad though.",
            
            "diagnosed|gout diagnosis":
                "Doctor said it was gout a few years ago. Gave me pills to take during attacks.",
            
            "uric acid|levels|tested":
                "They've checked it before. Said it was high. Told me to watch my diet.",
            
            "between attacks|baseline":
                "Between attacks I'm fine. Toe is normal.",
            
            "medication|taking anything for gout":
                "I have colchicine at home for when it happens. Took some last night but it didn't help much.",
            
            "allopurinol|daily medication|prevention":
                "Doctor mentioned something about daily medicine to prevent it. I never started it. Didn't think I needed it.",
            
            // DIET/LIFESTYLE - RISK FACTORS
            "diet|what do you eat":
                "I own a restaurant. I eat well. Steaks, seafood, rich foods. Comes with the job.",
            
            "alcohol|drinking":
                "I drink. Wine mostly. Maybe a bottle with dinner most nights. Beer sometimes.",
            
            "how much|quantify":
                "Probably 2-3 glasses of wine a night. More when entertaining clients.",
            
            "beer|what kind":
                "Craft beers sometimes. IPAs mainly.",
            
            "last night|how much last night":
                "Last night was a lot. Big client dinner. Maybe a whole bottle of wine. Plus some after-dinner drinks.",
            
            "weight|overweight":
                "I could stand to lose some weight. Doc says I'm about 40 pounds overweight.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure, high cholesterol, gout obviously. Prediabetic they say.",
            
            "kidney problems|kidney disease":
                "No kidney problems that I know of.",
            
            "kidney stones":
                "Had one kidney stone about 5 years ago. That was awful too.",
            
            // MEDICATIONS
            "medications|medicines|what do you take":
                "Lisinopril for blood pressure, atorvastatin for cholesterol. Baby aspirin. Colchicine when the gout hits.",
            
            "diuretics|water pills":
                "Yeah, hydrochlorothiazide too. For the blood pressure.",
            
            "allergies":
                "No medication allergies.",
            
            // SOCIAL
            "smoke|smoking":
                "Cigars occasionally. Maybe once a week.",
            
            "work|job":
                "I own an Italian restaurant. On my feet a lot. Can't work like this.",
            
            "married|family":
                "Married, three kids. Grandkids now too.",
            
            // SEXUAL HISTORY - 58M married
            "sexually active|having sex":
                "Yes, with my wife.",
            
            "partner|partners":
                "Just my wife. 32 years married.",
            
            "condoms|contraception":
                "No, she's past menopause.",
            
            "stis|std":
                "No, never. Only been with my wife.",
            
            // CONCERNS
            "worried about|concerns":
                "I need this to go away. I have to get back to the restaurant. Can't be limping around like this.",
            
            "anything else":
                "What can you give me? I need to be able to walk. The colchicine isn't cutting it.",
        }
    };

    // ==========================================
    // CASE: Linda Chen - Low Back Pain (Mechanical)
    // 45F, low back pain after lifting
    // ==========================================
    
    const LINDA_CHEN = {
        meta: {
            caseId: "low-back-pain",
            patientName: "Linda Chen",
            age: 45,
            gender: "female",
            occupation: "Office manager",
            setting: "Primary Care",
            diagnosis: "Mechanical low back pain (lumbar strain)",
            criticalFindings: [
                "Acute onset after lifting",
                "No red flags (no weakness, no saddle anesthesia)",
                "No radiculopathy",
                "Muscle spasm on exam",
                "No bowel/bladder dysfunction"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*moving stiffly* Hi. Thanks for seeing me. My back is really bothering me.",
            
            "how are you|how you doing":
                "*winces while sitting* Not great. My lower back has been killing me since Saturday.",
            
            "what brings you in|chief complaint|why here":
                "Threw my back out over the weekend. Was helping my daughter move into her apartment. Lifted a heavy box and felt something pull. Been in pain ever since.",
            
            "tell me more|can you explain":
                "I was lifting a box of books - heavier than I expected. Twisted while lifting and felt this sharp pull in my lower back. Had to stop. Since then I've been stiff and sore. Hurts to move.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Saturday afternoon. So about 4 days ago.",
            
            "what were you doing|activity|how did it happen":
                "Lifting boxes. Moving my daughter to college. I bent over to pick up a box, didn't realize how heavy it was, twisted a bit as I lifted. Felt something go.",
            
            "sudden|gradual":
                "Sudden. Immediate pain when I twisted with the box.",
            
            "better or worse|progression":
                "Maybe a little better than Saturday. Still pretty bad. Worst when I first wake up.",
            
            // PAIN CHARACTERISTICS
            "describe the pain|what does it feel like":
                "Tight, achy. Like a muscle spasm. Sometimes sharper if I move wrong.",
            
            "where|location|point":
                "*puts hands on lower back* Right here. Across my lower back. Both sides but worse on the right.",
            
            "radiate|spread|go down leg":
                "No, just in my back. Doesn't go down my legs.",
            
            "how bad|scale|severity":
                "About a 6 right now. Worse in the morning - maybe a 7 or 8. Gets a little better as I move around.",
            
            // RED FLAGS - MUST RULE OUT
            "leg weakness|weakness in legs|motor":
                "No, my legs are strong. Can walk fine, just hurts.",
            
            "numbness|tingling|sensation":
                "No numbness or tingling.",
            
            "bowel|bladder|incontinence|retention":
                "No problems with bowel or bladder. Everything normal there.",
            
            "saddle|genital|perineal numbness":
                "No, nothing like that.",
            
            "fever|temperature":
                "No fever.",
            
            "weight loss|unintentional":
                "No, weight is stable.",
            
            "night pain|wakes you up":
                "The pain doesn't wake me up. It's just sore in the morning.",
            
            "cancer|history of cancer":
                "No cancer history.",
            
            // AGGRAVATING/RELIEVING
            "what makes it worse|aggravating":
                "Bending forward, sitting too long, twisting. Getting out of bed in the morning.",
            
            "what makes it better|relieving":
                "Walking around actually helps. Heat helps. Lying down with my knees bent.",
            
            "position|best position":
                "Lying on my back with knees bent, or on my side with a pillow between my knees.",
            
            "tried anything|treatment":
                "Ibuprofen helps some. Ice pack the first day, then I switched to heat. Tried stretching but it hurt.",
            
            // BACK HISTORY
            "back problems before|history|previous":
                "I've had occasional back aches over the years. Nothing this bad. Usually goes away in a day or two.",
            
            "injury|previous injury":
                "No major back injuries before.",
            
            "surgery|back surgery":
                "Never had back surgery.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High cholesterol, controlled. Hypothyroidism. That's about it.",
            
            "osteoporosis|bone density":
                "Never been tested. Maybe I should be at my age?",
            
            // MEDICATIONS
            "medications|medicines":
                "Atorvastatin for cholesterol, levothyroxine for thyroid.",
            
            "ibuprofen|how much":
                "Taking 400mg three times a day. It takes the edge off.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "work|job|occupation":
                "Office manager. Desk job mostly. Hard to sit for long right now.",
            
            "exercise|physical activity":
                "I do yoga once a week, walk most days. Haven't been able to since this happened.",
            
            "smoke|smoking":
                "No, never smoked.",
            
            "alcohol":
                "Glass of wine a few times a week.",
            
            "live with|family":
                "Married, two daughters. One just left for college - hence the moving.",
            
            // SEXUAL HISTORY - 45F married
            "sexually active|having sex":
                "Yes, with my husband. Well, not since my back went out. Can't exactly...",
            
            "partner|partners":
                "Just my husband. 22 years.",
            
            "contraception|birth control":
                "I have an IUD. Mirena.",
            
            "condoms":
                "No, just the IUD. We're monogamous.",
            
            "stis|std":
                "No, never.",
            
            "lmp|period":
                "Periods are light and irregular with the Mirena. Last one was maybe 3 weeks ago.",
            
            // CONCERNS
            "worried about|concerns":
                "I want to make sure it's nothing serious. And I need to get back to work. How long will this take to heal?",
            
            "anything else":
                "Do I need an MRI? My husband thinks I should get one.",
        }
    };

    // ==========================================
    // CASE: Robert Kowalski - Shoulder Pain
    // 52M, chronic shoulder pain, rotator cuff
    // ==========================================
    
    const ROBERT_KOWALSKI = {
        meta: {
            caseId: "shoulder-pain-rotator",
            patientName: "Robert Kowalski",
            age: 52,
            gender: "male",
            occupation: "House painter",
            setting: "Primary Care",
            diagnosis: "Rotator cuff tendinopathy/partial tear",
            criticalFindings: [
                "Overhead work history",
                "Pain with overhead activities",
                "Night pain (classic for rotator cuff)",
                "Weakness with arm elevation",
                "Gradual onset",
                "No trauma"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "Hey doc. Shoulder's been bothering me for months. Finally came in.",
            
            "how are you|how you doing":
                "Could be better. This shoulder is limiting what I can do. Hard to work.",
            
            "what brings you in|chief complaint|why here":
                "Right shoulder pain. Been going on for about 3 months. It's getting worse. I'm a painter - need my arms. Can't keep working like this.",
            
            "tell me more|can you explain":
                "Started a few months ago. Gradual. Now it hurts every time I reach up, and it wakes me up at night. It's my dominant arm too.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "About 3 months ago. Maybe longer - hard to remember exactly when it started.",
            
            "how did it start|injury|trauma":
                "No specific injury. Just started aching. Probably all the years of painting overhead.",
            
            "sudden|gradual":
                "Gradual. Got worse over time. Thought it would go away but it hasn't.",
            
            "getting worse|progression":
                "Definitely worse. Three months ago it was just a twinge. Now it's constant.",
            
            // PAIN CHARACTERISTICS
            "describe the pain|what does it feel like":
                "Aching most of the time. Sharp when I reach up or reach behind me.",
            
            "where|location|point":
                "*points to lateral shoulder/deltoid area* Right here. Side of my shoulder. Sometimes goes up toward my neck.",
            
            "radiate|spread|down arm":
                "Goes down to about here *points to mid upper arm*. Not all the way to my hand.",
            
            "how bad|scale|severity":
                "At rest, maybe a 3 or 4. When I reach overhead, 7 or 8.",
            
            "constant|all the time":
                "Aches most of the time. Worse with certain movements.",
            
            // AGGRAVATING/RELIEVING
            "what makes it worse|aggravating":
                "Reaching overhead, reaching behind my back, lifting things. Lying on that side at night.",
            
            "overhead|reaching up":
                "That's the worst. Painting ceilings is torture now.",
            
            "behind back|reaching behind":
                "Yeah, like tucking in my shirt or reaching for my wallet. That hurts.",
            
            "what makes it better|relieving":
                "Rest helps. Ibuprofen takes the edge off. Keeping my arm at my side.",
            
            "night|sleeping|night pain":
                "That's a big problem. Wakes me up if I roll onto that side. Have to sleep on my left side now.",
            
            // FUNCTION
            "weakness|weak|strength":
                "My arm feels weaker. Can't lift things overhead like I used to. Painting is harder.",
            
            "range of motion|move your arm":
                "*tries to lift arm* See, I can get it about this high before it really hurts. *shows limited elevation*",
            
            "work|can you work|job impact":
                "Barely. I'm a house painter. Half my job is overhead. Been turning down jobs. Taking longer on others.",
            
            // SHOULDER HISTORY
            "injury before|previous problems|history":
                "Some aches over the years. Never anything like this. Never had a real injury.",
            
            "surgery|shoulder surgery":
                "Never had surgery.",
            
            "other shoulder|left side":
                "Left shoulder is fine. Just the right.",
            
            // TRIED
            "tried|treatment|what have you tried":
                "Ibuprofen, ice, tried to rest it. Nothing really helps. A friend gave me some lidocaine patches. Those help a little.",
            
            "physical therapy|pt|exercises":
                "Haven't tried physical therapy. Wasn't sure if I needed it.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Healthy mostly. High blood pressure. That's it.",
            
            "diabetes":
                "No diabetes.",
            
            // MEDICATIONS
            "medications|medicines":
                "Just lisinopril for blood pressure. And the ibuprofen I take for this.",
            
            "how much ibuprofen":
                "Probably 600mg three or four times a day. I know that's a lot.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL/OCCUPATIONAL
            "work|job|occupation":
                "House painter for 30 years. Lots of overhead work. My shoulders have always taken a beating.",
            
            "how much overhead|typical day":
                "On a ceiling job? Hours of arms overhead. Lately I've been doing more walls, less ceilings.",
            
            "smoke|smoking":
                "Quit 10 years ago. Smoked for 20 years.",
            
            "alcohol":
                "Few beers on weekends.",
            
            "married|family":
                "Divorced. Live alone. Two grown kids.",
            
            // SEXUAL HISTORY - 52M divorced
            "sexually active|having sex":
                "Occasionally. Nothing regular.",
            
            "partner|partners":
                "Date sometimes. No steady partner.",
            
            "condoms|protection":
                "Yeah, I use condoms. Not in a relationship.",
            
            "stis|std":
                "No, I'm careful. Get tested between partners.",
            
            "last tested|when":
                "Probably a year ago. All clear.",
            
            // CONCERNS
            "worried about|concerns":
                "I need to work. This is my livelihood. Is there something seriously wrong? Do I need surgery?",
            
            "anything else":
                "I can't afford to be out of work. What's the fastest way to fix this?",
        }
    };

    // ==========================================
    // CASE: Patricia Wong - Knee OA
    // 67F, chronic bilateral knee pain
    // ==========================================
    
    const PATRICIA_WONG = {
        meta: {
            caseId: "knee-oa",
            patientName: "Patricia Wong",
            age: 67,
            gender: "female",
            occupation: "Retired teacher",
            setting: "Primary Care",
            diagnosis: "Bilateral knee osteoarthritis",
            criticalFindings: [
                "Bilateral knee pain",
                "Worse with activity, better with rest",
                "Morning stiffness <30 minutes",
                "Gradual onset over years",
                "Crepitus",
                "No significant swelling or warmth"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "Hello doctor. These old knees aren't what they used to be.",
            
            "how are you|how you doing":
                "Managing, but my knees are really slowing me down. Can't do what I used to.",
            
            "what brings you in|chief complaint|why here":
                "Both knees hurt. It's been getting worse over the years. Now it's affecting my daily life. Hard to climb stairs, hard to get up from chairs. I want to stay active.",
            
            "tell me more|can you explain":
                "My knees have been achy for years. It's been gradual. But the last year or so it's really gotten worse. Both knees, the right worse than left. Aches after I walk, stiff in the morning.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Hard to say exactly when it started. I've had some knee aching for maybe 10 years. But it's gotten much worse the last 2-3 years.",
            
            "gradual|sudden":
                "Very gradual. Just slowly gotten worse over time.",
            
            "injury|trauma|what caused it":
                "No specific injury. Just wear and tear I suppose. I was a teacher - on my feet a lot for 40 years.",
            
            // PAIN CHARACTERISTICS
            "describe the pain|what does it feel like":
                "Achy. Deep ache in the knees. Sometimes sharper going up or down stairs.",
            
            "where|location":
                "Inside of both knees mainly. *touches medial aspects* Right here. And sometimes around and under the kneecap.",
            
            "which is worse|one or both":
                "Both, but the right is worse. That's my dominant leg.",
            
            "how bad|scale|severity":
                "On a good day, maybe a 3 or 4. After a long walk, 6 or 7.",
            
            // AGGRAVATING/RELIEVING
            "what makes it worse|aggravating":
                "Walking too much, stairs, getting up from sitting. Standing too long.",
            
            "stairs|going up or down":
                "Down is worse than up. Have to hold the railing.",
            
            "what makes it better|relieving":
                "Rest helps. Putting my feet up. Tylenol helps some.",
            
            "activity|exercise":
                "It hurts after activity, not usually during. Then it takes a while to calm down.",
            
            // STIFFNESS
            "stiffness|stiff|morning":
                "Stiff in the morning. Takes maybe 15-20 minutes to loosen up. Then it gets better.",
            
            "how long stiff|duration":
                "Usually less than half an hour. Better once I'm moving.",
            
            "gel phenomenon|sitting too long":
                "Yes! If I sit through a whole movie, I can barely get up. Have to hobble for a minute.",
            
            // MECHANICAL SYMPTOMS
            "grinding|crepitus|sounds":
                "Oh yes, they crackle and crunch. My grandkids think it's funny.",
            
            "locking|catching|giving way":
                "Sometimes the right one feels like it might give out. Hasn't actually buckled. No locking.",
            
            "swelling":
                "A little swollen sometimes after a lot of walking. Not usually though.",
            
            // FUNCTION
            "walking|how far can you walk":
                "I can walk maybe 20-30 minutes before I need to rest. Used to walk for an hour no problem.",
            
            "exercise|activity level":
                "I used to be very active. Now I'm limited. Can't do my morning walks like I used to.",
            
            "daily activities|impact on life":
                "Stairs are hard. Getting up from low chairs. Getting in and out of the car. It affects everything.",
            
            // TREATMENT TRIED
            "tried|treatment|what have you tried":
                "Tylenol helps. I've tried glucosamine - not sure if it helps. Try to keep moving but it hurts.",
            
            "how much tylenol":
                "Two extra strength, twice a day usually. More on bad days.",
            
            "physical therapy":
                "Did some PT a few years ago. Exercises helped but I stopped doing them.",
            
            "injections|cortisone|shots":
                "Never tried injections. Would they help?",
            
            "surgery|knee replacement":
                "I'm trying to avoid surgery if I can. But if it would help...",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Osteoporosis - I take calcium and vitamin D. High blood pressure. Overweight, I know.",
            
            "weight|how much":
                "About 180 pounds. I should be maybe 150. The weight doesn't help my knees.",
            
            "rheumatoid|inflammatory arthritis":
                "No, they've checked for that. Just regular arthritis they said.",
            
            // MEDICATIONS
            "medications|medicines":
                "Lisinopril for blood pressure. Calcium and vitamin D for my bones. Tylenol for the pain.",
            
            "nsaids|ibuprofen|aleve":
                "I try to avoid those. Bad for my stomach and kidneys at my age. Tylenol is safer, right?",
            
            "allergies":
                "Aspirin gives me stomach upset. That's the only thing.",
            
            // SOCIAL
            "live with|living situation":
                "I live alone. Husband passed 5 years ago. Kids check on me.",
            
            "home|house|stairs at home":
                "I have a two-story house. Bedroom is upstairs. Been thinking about moving the bedroom downstairs.",
            
            "support|help":
                "My daughter lives nearby. Helps with groceries and things.",
            
            // SEXUAL HISTORY - 67F widowed
            "sexually active|having sex":
                "No. Not since my husband passed away 5 years ago. I'm not seeing anyone.",
            
            "partner":
                "No, just me. I was married for 40 years. Not interested in dating at this point.",
            
            "stis|std":
                "No, never had any issues. Just my husband.",
            
            // CONCERNS
            "worried about|concerns":
                "I don't want to end up unable to walk. I want to stay independent. I want to keep up with my grandchildren.",
            
            "anything else":
                "Is there anything else I can do? I'm willing to try things if it means staying active.",
        }
    };

    // ==========================================
    // CASE: Maria Santos - Iron Deficiency Anemia
    // 34F, fatigue, heavy periods
    // ==========================================
    
    const MARIA_SANTOS = {
        meta: {
            caseId: "anemia-iron-deficiency",
            patientName: "Maria Santos",
            age: 34,
            gender: "female",
            occupation: "Dental hygienist",
            setting: "Primary Care",
            diagnosis: "Iron deficiency anemia (secondary to menorrhagia)",
            criticalFindings: [
                "Fatigue, weakness",
                "Pallor",
                "Heavy menstrual bleeding (menorrhagia)",
                "Pica (craving ice)",
                "Exertional dyspnea",
                "Brittle nails"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*looks pale, tired* Hi. I'm just so exhausted all the time. Something's not right.",
            
            "how are you|how you doing":
                "Tired. Constantly tired. I sleep 8 hours and wake up exhausted. It's been getting worse.",
            
            "what brings you in|chief complaint|why here":
                "I'm always tired. No energy. I get winded going up stairs. My friends say I look pale. I thought it was just stress but it's not getting better.",
            
            "tell me more|can you explain":
                "The fatigue has been building for months. At first I blamed work. But now I'm tired no matter how much I rest. I've started getting short of breath just walking. And I've been craving ice - I chew it all day.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "The tiredness has been going on for maybe 6 months? It's been gradually getting worse.",
            
            "gradual|sudden":
                "Very gradual. Crept up on me. Then I realized I couldn't do things I used to.",
            
            "getting worse|progression":
                "Definitely worse. Six months ago I could work out. Now I can barely climb stairs.",
            
            // FATIGUE
            "describe the fatigue|tired how":
                "Bone-tired. Like I have no energy reserves. Even after sleeping, I don't feel rested.",
            
            "affect daily life|impact":
                "I've stopped going to the gym. Come home from work and collapse. Hard to keep up with my kids.",
            
            "sleep|sleeping":
                "I sleep fine - usually 7-8 hours. I just wake up still tired.",
            
            // ASSOCIATED SYMPTOMS
            "shortness of breath|dyspnea|winded":
                "Yes, especially with exertion. Climbing stairs leaves me huffing. Never used to.",
            
            "at rest|short of breath sitting":
                "No, only with activity.",
            
            "palpitations|heart racing":
                "Sometimes my heart races when I'm doing things. Feels like it's working hard.",
            
            "dizziness|lightheaded":
                "A little lightheaded sometimes. Especially if I stand up fast.",
            
            "headaches":
                "More headaches than usual. Dull ones.",
            
            "pale|pallor|skin":
                "Everyone says I look pale. My mom keeps asking if I'm sick.",
            
            "cold|cold intolerance|hands feet":
                "Yes, I'm always cold now. My hands and feet are freezing.",
            
            "nails|brittle nails|hair":
                "My nails break easily. And I've been losing more hair than usual.",
            
            // PICA - IMPORTANT FINDING
            "cravings|eating|appetite":
                "This is weird, but I've been craving ice. I chew ice constantly. Like, I go through a tray a day.",
            
            "ice|chewing ice|pica":
                "I know it's strange. I can't stop. The crunch is satisfying. My coworkers think I'm crazy.",
            
            "other cravings|dirt|starch|unusual":
                "No, just ice. Is that bad?",
            
            "appetite|eating meals":
                "Regular appetite I guess. Maybe eating a bit less because I'm too tired to cook.",
            
            // MENSTRUAL HISTORY - KEY
            "periods|menstrual|menstruation":
                "My periods are heavy. They've always been heavy but seem worse lately.",
            
            "how heavy|amount|describe":
                "I go through a super tampon every 2 hours on my heavy days. Sometimes I double up with a pad.",
            
            "how many days|duration":
                "Usually 7 days. Heavy for the first 4-5.",
            
            "clots|blood clots":
                "Yes, I pass clots. Some pretty big ones. Is that bad?",
            
            "cycle|regular|how often":
                "Every 28 days, regular. Just really heavy.",
            
            "getting heavier|changed":
                "Seems heavier the last year or so. Or maybe I'm just noticing it more.",
            
            "fibroids|told you have fibroids":
                "My gynecologist mentioned I might have fibroids. She did an ultrasound a while back. I should probably follow up on that.",
            
            // BLEEDING ELSEWHERE
            "bleeding elsewhere|other bleeding":
                "No other bleeding. Just my periods.",
            
            "blood in stool|gi bleeding|black stool":
                "No, nothing like that. Bowel movements are normal.",
            
            "blood in urine":
                "No blood in my urine.",
            
            "bruising|easy bruising":
                "Maybe a little more than usual? Hard to say.",
            
            "nosebleeds":
                "No nosebleeds.",
            
            // DIET
            "diet|eating habits|what do you eat":
                "Pretty healthy. Lots of chicken and vegetables. I try to limit red meat.",
            
            "red meat|how often":
                "Maybe once a week? I probably should eat more. I know it has iron.",
            
            "vegetarian|vegan":
                "No, I eat meat. Just not a lot of red meat.",
            
            "supplements|vitamins|iron":
                "I take a multivitamin. Don't take iron separately.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Nothing major. Heavy periods as I mentioned. Otherwise healthy.",
            
            "anemia before|told you're anemic":
                "I was told I was slightly anemic once before, years ago. After my second pregnancy. They gave me iron pills.",
            
            "pregnancies|children|had children":
                "Two kids. 6 and 4. Pregnancies were fine. Bleeding was heavy after both but they said it was normal.",
            
            "blood disorders|family history blood":
                "No blood disorders. My mom has heavy periods too.",
            
            "gi problems|stomach|absorb":
                "No stomach problems. No celiac or anything.",
            
            // MEDICATIONS
            "medications|medicines":
                "Just a multivitamin. Birth control pills - helps my periods a little.",
            
            "which birth control|what pill":
                "Lo Loestrin. I've been on it about 2 years.",
            
            "helped periods|birth control help":
                "It helped some at first. Periods still pretty heavy though.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke|smoking":
                "No, never.",
            
            "alcohol":
                "Occasional glass of wine. Not much.",
            
            "work|job":
                "Dental hygienist. Been hard to work when I'm this tired.",
            
            "live with|family":
                "Married, two kids, 6 and 4. Husband's helpful but I'm running on empty.",
            
            // SEXUAL HISTORY - 34F married
            "sexually active|having sex":
                "Yes, with my husband.",
            
            "partner|partners":
                "Just my husband. 8 years together.",
            
            "contraception|birth control":
                "Birth control pills. Don't want more kids right now.",
            
            "condoms":
                "No, just the pill. We're monogamous.",
            
            "stis|std":
                "No, never.",
            
            "lmp|last period":
                "About 2 weeks ago. It was heavy as usual.",
            
            "pregnant|could you be pregnant":
                "No, on the pill and just had my period.",
            
            // CONCERNS
            "worried about|concerns":
                "I'm worried something's wrong with my blood. My mom said I look anemic. Is there a simple fix?",
            
            "anything else":
                "I just want my energy back. I have two little kids and I can barely keep up with them.",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['acute-gout'] = THOMAS_GREENE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['low-back-pain'] = LINDA_CHEN;
    window.COMPREHENSIVE_PATIENT_RESPONSES['shoulder-pain-rotator'] = ROBERT_KOWALSKI;
    window.COMPREHENSIVE_PATIENT_RESPONSES['knee-oa'] = PATRICIA_WONG;
    window.COMPREHENSIVE_PATIENT_RESPONSES['anemia-iron-deficiency'] = MARIA_SANTOS;
    
    console.log('ReasonDx Part 11 (Gout, Back Pain, Shoulder, Knee OA, Anemia) loaded');

})();
