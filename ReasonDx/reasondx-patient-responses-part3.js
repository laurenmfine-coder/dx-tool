/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 3: Jessica Martin (RLQ Pain - Appendicitis)
 * 
 * 28F, Elementary School Teacher
 * Dx: Acute Appendicitis
 * 
 * CLINICAL PEARLS:
 * - Classic migration: periumbilical → RLQ (visceral → parietal peritoneum)
 * - Anorexia almost always present
 * - Pain precedes vomiting (opposite of gastroenteritis)
 * - Peritoneal signs: worse with movement, coughing, car ride
 * - Must rule out ectopic pregnancy in reproductive-age female
 */

(function() {
    'use strict';

    const JESSICA_MARTIN = {
        meta: {
            caseId: "rlq-appendicitis",
            patientName: "Jessica Martin",
            age: 28,
            gender: "female",
            occupation: "Elementary school teacher",
            setting: "Emergency Department",
            diagnosis: "Acute appendicitis",
            criticalFindings: [
                "Classic pain migration: periumbilical → RLQ",
                "Pain precedes nausea/vomiting (not gastroenteritis pattern)",
                "Peritoneal signs: worse with movement, coughing",
                "Low-grade fever",
                "Anorexia",
                "Must rule out ectopic pregnancy"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING & CHIEF COMPLAINT
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "*lying very still, grimaces slightly* Hi.",
            
            "how are you|how you doing":
                "*speaks carefully, minimizing movement* Not good. A lot of pain.",
            
            "what brings you in|chief complaint|why here|what's going on|what's wrong|how can i help|what's the problem":
                "*lying very still, points carefully to right lower abdomen* I have really bad pain in my stomach... well, my right side now. It's been getting worse since yesterday.",
            
            "tell me more|can you explain|describe":
                "*grimaces* It started around my belly button yesterday afternoon, just a dull ache. But overnight it moved down here *carefully points to RLQ* and got so much worse. Sharp now.",
            
            "start from the beginning|walk me through":
                "*speaks slowly* Okay. Yesterday around 2 or 3pm I noticed this dull ache around my belly button. I thought maybe it was something I ate. But then overnight it moved down here to my right side and got way worse. Now it's constant and really sharp.",

            // ============================================
            // TIMELINE - ULTRA DETAILED (MIGRATION IS KEY)
            // ============================================
            
            // --- Onset ---
            "when did this start|when start|when begin|how long has this":
                "Yesterday afternoon, around 2 or 3pm. But it was in a different spot at first.",
            
            "what day|which day|exactly when":
                "Yesterday. Started around 2 or 3 in the afternoon.",
            
            "what time|time of day|morning or evening":
                "Afternoon. I was at school, teaching my second graders. Noticed it during our reading time.",
            
            "what were you doing|doing when it started|what happened":
                "I was sitting at my desk during reading time. The kids were doing silent reading. Just noticed this achy feeling around my belly button.",
            
            "sudden or gradual|come on suddenly|all at once":
                "The belly button pain came on gradually - just a dull ache that slowly got worse through the afternoon. But the shift to my right side was sudden - woke up in the middle of the night and it was in a completely different spot and way more intense.",
            
            "what did you think it was|first impression":
                "I thought maybe I was getting a stomach bug. Some kids in my class have been out sick. Or maybe something I ate for lunch.",
            
            // --- Migration (CRITICAL) ---
            "different spot|where at first|started where|original location":
                "*points to periumbilical area* It started right here, around my belly button. Kind of a dull, crampy ache in the middle of my stomach.",
            
            "then what happened|how did it change|migrate|moved":
                "It stayed around my belly button through the evening. I went to bed early hoping I'd feel better. But around 2 or 3am I woke up and *points to RLQ* now it was down here. Completely different spot. And so much more intense.",
            
            "when did it move|shift|when did pain move":
                "Sometime in the middle of the night. I fell asleep around 9pm. Woke up around 2-3am and it had moved down to my right side.",
            
            "all at once or gradual move":
                "Seemed like all at once. I was asleep and when I woke up it was in a totally different place. Much sharper.",
            
            // --- Day by Day Progression ---
            "yesterday afternoon|first day|how was it at first":
                "Yesterday afternoon it was just this dull ache around my belly button. Maybe a 4 out of 10. Uncomfortable but I could still teach. Thought it would go away.",
            
            "last night|evening|what happened yesterday evening":
                "It got a little worse through the evening. Maybe a 5. My boyfriend made dinner but I didn't feel like eating much. Went to bed early.",
            
            "during the night|overnight|middle of the night":
                "Woke up around 2-3am and it was completely different. Pain had moved to my right side, was way sharper - like a 7 or 8. Tried to go back to sleep but couldn't.",
            
            "this morning|today|how is it now":
                "Worse. The pain is constant - 8 out of 10 just lying here. If I move or cough it spikes to 9 or 10. That's why I'm lying so still.",
            
            // --- Progression Quantified ---
            "gotten worse or better|how has it changed|progression":
                "Definitely worse. Yesterday afternoon was a 4 around my belly button. By evening maybe 5. Middle of the night when it moved - 7 or 8. Now it's 8 or more.",
            
            "worst it's been|at its worst|maximum pain":
                "The car ride here was the worst. Every bump was agony - probably a 10. Right now lying still it's about an 8.",
            
            "best it's been|at its best|minimum":
                "Yesterday afternoon when it first started. Maybe a 3 or 4. Hasn't gotten better at all since then.",
            
            "constant or comes and goes|intermittent":
                "Constant now. Doesn't go away at all. There are moments when it spikes worse but it's always there.",
            
            // --- Why Today ---
            "why today|why come in now|what made you decide|why not earlier":
                "I couldn't sleep after 2am. By morning I was feverish, had chills. It hurt to walk, hurt to move. My boyfriend said we're going to the ER, and I didn't argue.",
            
            "why didn't you come in earlier|waited":
                "I kept thinking it was just a stomach bug and it would get better. I don't like to make a fuss. But when it moved and got so much worse, I knew something was wrong.",
            
            // --- Prior Episodes ---
            "ever had this before|happened before|first time|similar episodes":
                "Never. I've had stomach aches before, cramps with my period, but nothing like this. This is completely different.",
            
            "anything like this before":
                "No. My period cramps can be bad but they're in a different spot and they come and go. This is constant and way more intense.",

            // ============================================
            // LOCATION - DETAILED
            // ============================================
            
            "where is the pain|location|where does it hurt|point to it|show me":
                "*points carefully with one finger to RLQ, minimal movement* Right here. Lower right side of my belly.",
            
            "can you point with one finger|exactly where":
                "*points precisely to McBurney's point area* Right here. Very specific spot.",
            
            "where was it before|original location|belly button":
                "*points to periumbilical area* It started here, around my belly button. Then moved down.",
            
            "anywhere else|other locations|any other spots":
                "No, just right here now. It's very localized. Doesn't spread or go anywhere else.",
            
            "has it moved|stayed in same place|migration":
                "It moved once - from my belly button area down to here overnight. But since it moved here, it's stayed in this spot.",
            
            "how big an area|size of pain":
                "*indicates with finger* Pretty small, concentrated right here. Maybe the size of a quarter or fifty-cent piece.",
            
            "deep or superficial|on the surface":
                "Deep. It feels like it's inside, not on the surface.",
            
            "right side or left":
                "Right side. Definitely right. Lower right.",

            // ============================================
            // CHARACTER/QUALITY - DETAILED
            // ============================================
            
            "describe the pain|what does it feel like|character|quality|type of pain":
                "When it was around my belly button, it was dull and achy, kind of crampy. Now it's sharp. Constant, sharp, stabbing if I move.",
            
            "sharp|is it sharp|stabbing":
                "Yes, now it's sharp. Especially when I move or cough. Very sharp.",
            
            "dull|aching":
                "It was dull when it first started around my belly button. Now it's more sharp with a constant ache underneath.",
            
            "burning":
                "No, not burning. More sharp and stabbing.",
            
            "pressure|squeezing|tightness":
                "No, not pressure. Sharp.",
            
            "cramping|colicky|waves|spasms":
                "It was a little crampy at first around my belly button. Now it's constant - not really coming in waves anymore.",
            
            "throbbing|pulsating":
                "No, not throbbing.",
            
            "how is it different from period cramps|menstrual":
                "Completely different. My period cramps are lower, more central, and they come and go. This is on the right side, constant, and way more intense.",

            // ============================================
            // RADIATION - DETAILED
            // ============================================
            
            "does it radiate|spread|travel|go anywhere else|move":
                "No, it stays right here. Very localized. Doesn't spread.",
            
            "to your back|back pain":
                "No, not to my back.",
            
            "to your leg|groin|thigh":
                "No, doesn't go down to my leg.",
            
            "to your shoulder|shoulder pain":
                "No shoulder pain.",
            
            "anywhere else besides right lower|other spots":
                "No, just this one spot.",

            // ============================================
            // SEVERITY - DETAILED SCALE
            // ============================================
            
            "how bad|scale of 1 to 10|rate the pain|severity|0 to 10":
                "Lying completely still like this, about an 8. If I move or cough, it spikes to a 9 or 10.",
            
            "at its worst|worst pain|maximum":
                "The car ride here. Every bump felt like a 10. I was holding onto the door handle trying not to scream.",
            
            "at its best|minimum|lowest":
                "Yesterday when it first started around my belly button - maybe a 3 or 4. It hasn't been that low since.",
            
            "worst pain ever|compared to other pain":
                "Yes, this is the worst pain I've ever had. Never felt anything like this.",
            
            "can you function|affect your activities":
                "Can barely function. Called in sick today. Can't walk without severe pain. Just lying here trying not to move.",
            
            "affect your sleep|sleeping":
                "Couldn't sleep after 2am when it got really bad. Tried different positions but nothing helped.",

            // ============================================
            // AGGRAVATING FACTORS - COMPREHENSIVE (PERITONEAL)
            // ============================================
            
            "what makes it worse|aggravating factors|triggers|worsen":
                "Moving. Any movement at all. Walking. Coughing. Deep breathing. The car ride was torture. That's why I'm lying so still.",
            
            "movement|moving|walk|walking":
                "*grimaces* Terrible. Every step from the car to here was agony. I was hunched over, taking tiny steps. Even shifting in bed hurts.",
            
            "cough|coughing":
                "*winces* Ow. Please don't make me cough. That's probably the worst. Sends a sharp spike right through me.",
            
            "can you cough for me|show me cough":
                "*very small cough, grimaces in pain* Ow ow ow. See? Terrible.",
            
            "deep breath|breathing deeply":
                "Deep breaths hurt too. Been taking shallow breaths. *demonstrates shallow breathing*",
            
            "sneezing":
                "Haven't sneezed but I imagine it would be awful. I've been trying not to.",
            
            "laughing":
                "Definitely don't make me laugh.",
            
            "car ride|bumps|driving":
                "The car ride was the worst part. Every bump, every turn. My boyfriend tried to drive slowly but every little bump was like a knife.",
            
            "jarring|jumping|sudden movements":
                "Any jarring is terrible. When we hit a pothole I almost screamed.",
            
            "standing up|getting up|changing position":
                "Awful. Getting out of bed was terrible. Getting out of the car was terrible. I move as little as possible.",
            
            "sitting|standing|lying":
                "Lying flat and completely still is the only tolerable position. Sitting up hurts. Standing hurts.",
            
            "bending over|stooping":
                "Haven't tried. Can't imagine it would be good.",
            
            "eating|food":
                "Haven't really eaten. The thought of food makes me more nauseous.",
            
            "pressing on it|touch|palpation":
                "Please be gentle if you need to examine me. Even light touch probably hurts.",

            // ============================================
            // RELIEVING FACTORS - COMPREHENSIVE
            // ============================================
            
            "what makes it better|relieving|help|relief|ease":
                "Nothing really. Lying completely still is the only thing that makes it bearable. Even then it's still there.",
            
            "lying still|staying still|not moving":
                "Lying completely still is the best I can do. That's why I'm like this. Don't want to move at all.",
            
            "any position|best position":
                "Lying flat on my back, legs still. Any other position is worse.",
            
            "heat|heating pad":
                "Didn't try it.",
            
            "ice|cold":
                "Didn't try it.",
            
            "medication|pain medicine|ibuprofen|tylenol":
                "Took ibuprofen last night - didn't touch it. Didn't take anything else this morning because I thought you'd want to know where it hurts.",
            
            "antacids|tums|pepto":
                "No, didn't try those. Didn't seem like that kind of pain.",
            
            "rest":
                "Tried to rest. Couldn't sleep. The pain kept me awake.",

            // ============================================
            // ASSOCIATED SYMPTOMS - GI COMPLETE
            // ============================================
            
            // --- Nausea/Vomiting ---
            "nausea|nauseated|queasy|sick to your stomach":
                "Yes, I've felt nauseous since last night. Pretty bad.",
            
            "when did nausea start|which came first|nausea or pain first":
                "The pain came first. Belly button pain started around 2-3pm yesterday. Nausea started later in the evening.",
            
            "how bad is nausea|constant nausea":
                "Pretty constant since last night. Gets worse if I think about food.",
            
            "vomiting|throw up|vomited|puke":
                "Threw up once this morning. Still feel like I might throw up again.",
            
            "when did you vomit|what time":
                "Around 6am. Before we came here.",
            
            "what did you throw up|contents":
                "Just liquid really. Hadn't eaten much. A little bile maybe.",
            
            "any blood in vomit|coffee grounds|hematemesis":
                "No blood. Just clear liquid and a little yellow bile.",
            
            "how many times|vomit multiple times":
                "Just once. But I still feel nauseous.",
            
            // --- Appetite ---
            "appetite|hungry|eating":
                "No appetite at all. The thought of food makes me more nauseous.",
            
            "when did you last eat|last meal":
                "I had a little soup for dinner last night but couldn't finish it. No appetite.",
            
            "eating less|not hungry":
                "Yes, haven't wanted to eat since the pain started.",
            
            // --- Bowel Changes ---
            "stool|bowel movements|bowel habits|bathroom":
                "Haven't had a bowel movement since yesterday morning. Haven't felt the urge.",
            
            "diarrhea|loose stools":
                "No diarrhea. Nothing really.",
            
            "constipation|hard stools":
                "Maybe a little. Just haven't gone. Been focused on the pain.",
            
            "blood in stool|black stool":
                "No, haven't noticed any blood.",
            
            "gas|passing gas|bloating":
                "Feel a little bloated and gassy but haven't been able to pass much gas.",
            
            // --- Other GI ---
            "heartburn|acid reflux":
                "No heartburn.",
            
            "belly distension|swollen belly|distended":
                "Maybe a little bloated. Not dramatically swollen.",

            // ============================================
            // ASSOCIATED SYMPTOMS - CONSTITUTIONAL
            // ============================================
            
            "fever|temperature|feverish":
                "I felt feverish this morning. Had chills during the night. Didn't take my temperature but I felt hot.",
            
            "chills|shaking|rigors":
                "Yes, I had chills during the night. Was shivering under the blankets even though I felt hot.",
            
            "night sweats|sweating":
                "Not really sweating, but I did feel clammy with the chills.",
            
            "weight loss|losing weight":
                "No weight loss. Just haven't been eating since this started.",
            
            "fatigue|tired|exhausted":
                "Tired from not sleeping and from the pain. Exhausted really.",
            
            "weakness|weak":
                "Feel weak. Probably because I haven't eaten or slept well.",
            
            "malaise|not feeling well":
                "Yes, I feel really unwell. Just off. Something is definitely wrong.",

            // ============================================
            // GYN HISTORY - MUST RULE OUT ECTOPIC
            // ============================================
            
            "period|menstrual|lmp|last menstrual period":
                "About 3 weeks ago. It was normal.",
            
            "when exactly|date of last period":
                "Let me think... it was the second week of the month. So about 3 weeks ago.",
            
            "regular periods|cycle regular":
                "Yeah, pretty regular. Every 28-30 days. Maybe a day or two variation.",
            
            "normal period|was it normal|any changes":
                "It was normal. Normal flow, normal length - about 5 days. Normal cramping.",
            
            "pregnant|could you be pregnant|pregnancy":
                "I don't think so? We always use condoms. And my period was only 3 weeks ago.",
            
            "sexually active|having sex|intercourse":
                "Yes, I have a boyfriend. We live together. We're sexually active.",
            
            "birth control|contraception|protection":
                "We use condoms. Every time.",
            
            "condoms every time|consistent":
                "Yes, every single time. We're careful.",
            
            "any chance pregnant|possible pregnant":
                "I mean... nothing is 100%, right? But we always use condoms and my period was normal 3 weeks ago.",
            
            "ever been pregnant|pregnancy history":
                "No, I've never been pregnant.",
            
            "miscarriage|abortion|termination":
                "No, never.",
            
            "fertility issues|trying to get pregnant":
                "No, not trying. We're careful about that.",
            
            "vaginal discharge|discharge":
                "No unusual discharge. Normal.",
            
            "vaginal bleeding|spotting|bleeding":
                "No bleeding since my last period.",
            
            "pain with sex|dyspareunia":
                "No, sex isn't painful.",
            
            "pelvic pain|lower abdominal pain before":
                "Just my regular period cramps. Nothing like this.",
            
            "ovarian cysts|history of cysts|ovary problems":
                "No, never been told I have cysts. Never had an ultrasound that I remember.",
            
            "std|sexually transmitted|infection":
                "No, never had an STI. We've both been tested.",
            
            "pap smear|gyn checkups":
                "Yes, I go for my annual. Everything's been normal.",

            // ============================================
            // URINARY SYMPTOMS
            // ============================================
            
            "urination|peeing|urine|urinary":
                "Peeing normally. No problems there.",
            
            "burning|dysuria|pain when urinating":
                "No burning when I pee.",
            
            "frequency|peeing a lot|going often":
                "Normal frequency. Maybe going a little less because I haven't been drinking much.",
            
            "urgency|have to go right away":
                "No unusual urgency.",
            
            "blood in urine|hematuria|red urine":
                "No blood in my urine.",
            
            "kidney infection|uti|bladder infection":
                "No, I don't have any urinary symptoms like that.",

            // ============================================
            // PAST MEDICAL HISTORY - COMPREHENSIVE
            // ============================================
            
            "medical history|medical problems|past medical history|health problems|conditions":
                "I'm pretty healthy. No major medical problems.",
            
            "anything at all|any conditions|diagnoses":
                "Really nothing. I get my annual checkups. Everything's always been fine.",
            
            "chronic conditions|ongoing problems":
                "No chronic conditions.",
            
            "childhood illnesses|sick as a child":
                "Just the usual kid stuff. Ear infections, strep throat. Nothing serious.",
            
            "hospitalizations|hospital stays|admitted":
                "Never been hospitalized.",
            
            "emergency room|er visits":
                "This is my first time in the ER.",
            
            // --- Specific conditions ---
            "diabetes|blood sugar":
                "No diabetes.",
            
            "high blood pressure|hypertension":
                "No, blood pressure is normal.",
            
            "heart problems|cardiac":
                "No heart problems.",
            
            "asthma|breathing problems|lung":
                "No asthma or lung problems.",
            
            "thyroid|hypothyroid|hyperthyroid":
                "No thyroid issues.",
            
            "kidney problems|kidney disease":
                "No kidney problems.",
            
            "liver problems|hepatitis":
                "No liver problems.",
            
            "cancer|tumor":
                "No cancer.",
            
            "autoimmune|lupus|rheumatoid":
                "No autoimmune diseases.",
            
            "mental health|depression|anxiety":
                "No mental health diagnoses. I get stressed sometimes but who doesn't.",
            
            "stomach problems|gi problems|ibs|crohn|colitis":
                "No stomach or intestinal problems.",
            
            "appendix|appendicitis|appendectomy":
                "No, I still have my appendix. *pauses* Is that what this could be?",

            // ============================================
            // SURGICAL HISTORY
            // ============================================
            
            "surgical history|surgeries|operations|procedures":
                "Never had any surgeries.",
            
            "any procedures|outpatient|minor surgery":
                "No procedures at all.",
            
            "wisdom teeth|tonsils":
                "Still have my wisdom teeth and tonsils.",
            
            "colonoscopy|endoscopy|scope":
                "No, never had any scopes.",
            
            "appendix removed|appendectomy":
                "No, I still have my appendix.",
            
            "gallbladder|cholecystectomy":
                "Still have my gallbladder.",
            
            "c-section|cesarean":
                "No, never had a C-section. Never been pregnant.",
            
            "anesthesia|put under":
                "Never had anesthesia.",

            // ============================================
            // MEDICATIONS - DETAILED
            // ============================================
            
            "medications|medicines|taking anything|prescriptions|pills|meds":
                "No regular medications. Just ibuprofen occasionally for headaches or cramps.",
            
            "prescription medications":
                "No prescriptions.",
            
            "birth control pills|oral contraceptives|hormones":
                "No, I'm not on birth control pills. We just use condoms.",
            
            "over the counter|otc":
                "Just ibuprofen when I need it. Maybe once or twice a month.",
            
            "ibuprofen|advil|motrin":
                "I take it occasionally for headaches or period cramps. Not every day.",
            
            "tylenol|acetaminophen":
                "Sometimes instead of ibuprofen. Not often.",
            
            "aspirin":
                "No, I don't take aspirin.",
            
            "vitamins|supplements":
                "I take a multivitamin. That's it.",
            
            "herbal|natural remedies":
                "No, nothing herbal.",
            
            "what did you take for this pain|anything for current pain":
                "I took ibuprofen last night - 400mg - but it didn't help at all. Didn't take anything this morning.",

            // ============================================
            // ALLERGIES - DETAILED
            // ============================================
            
            "allergies|allergic|reactions|medication allergies":
                "No medication allergies.",
            
            "ever had a bad reaction|adverse reaction":
                "No, never had a bad reaction to any medicine.",
            
            "penicillin|amoxicillin":
                "No allergy. I've taken amoxicillin before for strep throat.",
            
            "sulfa|bactrim":
                "No allergy.",
            
            "latex":
                "No latex allergy.",
            
            "food allergies":
                "No food allergies.",
            
            "environmental|seasonal allergies":
                "Maybe a little bit in the spring. Nothing major. Don't take anything for it.",

            // ============================================
            // FAMILY HISTORY - BY FAMILY MEMBER
            // ============================================
            
            "family history|family medical history":
                "My mom had appendicitis when she was a teenager. Had surgery. My dad is healthy.",
            
            "mother|mom|mother's health":
                "My mom is 54, pretty healthy. She had her appendix out when she was about 16.",
            
            "mom's appendix|mother's appendicitis":
                "She had appendicitis as a teenager. Had surgery. She's mentioned it when I've had stomach aches before - she always worries.",
            
            "what happened|describe her appendicitis":
                "She said it started around her belly button and moved to her right side. They took out her appendix and she was fine.",
            
            "father|dad|father's health":
                "My dad is 56. Healthy. Has high blood pressure but takes medicine for it. That's it.",
            
            "siblings|brothers|sisters":
                "I have one younger sister, she's 25. She's healthy.",
            
            "grandparents":
                "Grandparents are in their 70s and 80s. Some high blood pressure and cholesterol. Grandma on my mom's side had breast cancer but survived.",
            
            "heart disease in family|family heart":
                "My dad's parents have heart disease. Grandpa had a stent.",
            
            "cancer in family":
                "Grandma had breast cancer but she's a survivor. That's it.",
            
            "diabetes in family":
                "Type 2 diabetes runs on my dad's side. His parents both have it.",
            
            "stomach problems in family|gi family":
                "Just my mom's appendicitis.",
            
            "ovarian cancer|gynecologic cancer":
                "No ovarian or gynecologic cancers that I know of.",
            
            "blood clots|clotting disorders":
                "No one has had blood clots that I know of.",

            // ============================================
            // SOCIAL HISTORY - COMPREHENSIVE
            // ============================================
            
            // --- Smoking ---
            "smoke|smoking|cigarettes|tobacco":
                "No, I don't smoke. Never have.",
            
            "vape|e-cigarettes|juul":
                "No, I don't vape either.",
            
            "marijuana|weed|cannabis":
                "No, I don't use marijuana.",
            
            "secondhand smoke":
                "No one in my household smokes.",
            
            // --- Alcohol ---
            "alcohol|drink|drinking|beer|wine":
                "Socially. Maybe a glass of wine on the weekend or drinks with friends occasionally.",
            
            "how much|how often|frequency of alcohol":
                "Maybe 2-3 drinks on a weekend. Sometimes none. I'm not a big drinker.",
            
            "binge drinking|ever drink a lot":
                "In college, sure. Not anymore. I'm pretty moderate now.",
            
            "last drink":
                "Saturday night, had two glasses of wine with dinner.",
            
            // --- Drugs ---
            "drugs|recreational|illicit|street drugs":
                "No, I don't use any drugs.",
            
            "ever tried|experimented":
                "Tried marijuana a few times in college. That's it. Don't use anything now.",
            
            "iv drugs|inject|needles":
                "No, never.",
            
            // --- Caffeine ---
            "caffeine|coffee|tea":
                "I have coffee in the morning. Usually one or two cups.",
            
            "energy drinks":
                "No, I don't drink energy drinks.",
            
            // --- Occupation ---
            "work|job|occupation|what do you do":
                "I'm an elementary school teacher. Second grade.",
            
            "where|what school":
                "I teach at Maple Grove Elementary. About 5 years now.",
            
            "enjoy your job|like teaching":
                "I love it. The kids are great. It can be exhausting but rewarding.",
            
            "stress|stressful":
                "It can be stressful. End of semester right now. But nothing unusual.",
            
            "kids sick at school|stomach bugs at school":
                "Actually, a few kids in my class have been out with stomach bugs. That's why I first thought maybe I was getting it too.",
            
            // --- Living Situation ---
            "live with|who do you live with|living situation":
                "I live with my boyfriend, Jake. We have an apartment together.",
            
            "boyfriend|partner|relationship":
                "Jake, my boyfriend. We've been together 3 years, living together for 2.",
            
            "married":
                "Not married. Just dating. We've talked about it but not yet.",
            
            "support|help if sick":
                "Jake's been really supportive. He drove me here and he's in the waiting room.",
            
            "pets|animals":
                "We have a cat. Luna.",
            
            // --- Diet/Exercise ---
            "diet|eating habits":
                "I try to eat pretty healthy. Meal prep on Sundays. Sometimes grab fast food when I'm busy at school.",
            
            "exercise|physical activity|workout":
                "I try to exercise. Go to yoga once or twice a week. Walk a lot at school chasing second graders.",
            
            // --- Other ---
            "travel|traveled|trips":
                "Haven't traveled recently. Last trip was maybe 2 months ago - went home to see my parents.",
            
            "outside the country|international":
                "Haven't been out of the country this year.",

            // ============================================
            // FOOD HISTORY / POSSIBLE EXPOSURES
            // ============================================
            
            "what did you eat|food yesterday|anything unusual":
                "Nothing unusual. Had a sandwich for lunch at school. My boyfriend made soup for dinner.",
            
            "food poisoning|bad food|spoiled":
                "I don't think so. The soup was fresh. My boyfriend had the same thing and he's fine.",
            
            "sick contacts|anyone else sick|gastroenteritis|stomach bug":
                "A few kids in my class have been out with stomach bugs, but they had diarrhea and vomiting from the start. Mine is different.",
            
            "how is it different|different from stomach bug":
                "The kids with stomach bugs started with vomiting and diarrhea right away. My pain came first - the belly button ache - and then nausea later. No diarrhea. It's different.",
            
            "raw food|sushi|undercooked":
                "No, nothing raw or undercooked.",

            // ============================================
            // HEALTH MAINTENANCE
            // ============================================
            
            "regular doctor|primary care|have a doctor":
                "Yes, I see my doctor for annual checkups.",
            
            "last checkup|when was last physical":
                "About 6 months ago. Everything was fine.",
            
            "vaccines|immunizations|up to date":
                "I'm up to date on vaccines. Flu shot and everything.",
            
            "gyn|ob-gyn|pap smear":
                "Yes, I go annually. Last one was normal.",

            // ============================================
            // PATIENT CONCERNS & HEALTH LITERACY
            // ============================================
            
            "what are you worried about|concerns|scared|afraid":
                "I'm scared. I've never had pain like this. And the way it moved and got worse... that doesn't seem normal. My mom had appendicitis. Is that what this is?",
            
            "what do you think is going on|what do you think it is":
                "Maybe appendicitis? It sounds like what my mom described. She said hers moved to her right side too.",
            
            "know about appendicitis|understand":
                "Just what my mom told me. She said they had to take it out. Is that what I need?",
            
            "worried about surgery|scared of surgery":
                "I've never had surgery. The thought is scary. But if I need it, I need it.",
            
            "what would be hardest|biggest concern":
                "Missing work I guess. And the idea of surgery. But mostly I just want to know what's wrong and fix it.",
            
            "questions for me|anything you want to ask":
                "What do you think it is? Is it appendicitis? Am I going to need surgery?",
            
            "anything else you want me to know|anything else":
                "Just please figure out what's wrong. I've never been this sick. I'm really scared.",

            // ============================================
            // REVIEW OF SYSTEMS - NEGATIVES
            // ============================================
            
            "headache|head pain":
                "No headache.",
            
            "vision changes|blurry vision":
                "No vision problems.",
            
            "hearing|ear pain":
                "No ear problems.",
            
            "sore throat|throat pain":
                "No sore throat.",
            
            "neck pain|stiff neck":
                "No neck pain or stiffness.",
            
            "chest pain|chest pressure":
                "No chest pain.",
            
            "shortness of breath|trouble breathing":
                "No, breathing is fine. Just trying to breathe shallow because deep breaths hurt my belly.",
            
            "palpitations|heart racing":
                "No palpitations.",
            
            "cough|coughing":
                "No cough. Thank goodness because coughing hurts so much.",
            
            "rash|skin changes":
                "No rash.",
            
            "joint pain|muscle pain":
                "No joint or muscle pain.",
            
            "swelling|edema|legs swollen":
                "No swelling.",
            
            "numbness|tingling":
                "No numbness or tingling.",
            
            "weakness in arms or legs|trouble walking":
                "No weakness. Just hurts to walk because of the belly pain.",

            // ============================================
            // MISC & CLARIFICATIONS
            // ============================================
            
            "can you repeat|say that again|didn't catch":
                "Sure, what did you want me to say again?",
            
            "anything I haven't asked|anything else relevant":
                "I don't think so. I told you everything I can think of. I'm just scared and want to know what's wrong."
        }
    };

    // Add to global responses object
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    window.COMPREHENSIVE_PATIENT_RESPONSES['rlq-appendicitis'] = JESSICA_MARTIN;
    
    console.log('ReasonDx Part 3 (Jessica Martin - Appendicitis) FULL DEPTH loaded');

})();
