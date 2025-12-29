/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 1: GI & Common Cases
 * 
 * DEPTH PHILOSOPHY:
 * Students are trained to get COMPLETE information through thorough questioning.
 * Every response should reward good questioning technique and require follow-up
 * for complete clinical picture.
 * 
 * CATEGORIES COVERED IN DETAIL:
 * 1. Timeline - exact onset, progression day by day, why today
 * 2. OLDCARTS - every dimension explored fully
 * 3. Associated symptoms - by organ system
 * 4. PMH - each condition with onset, treatment, control, complications
 * 5. Medications - name, dose, frequency, duration, adherence, side effects
 * 6. Allergies - reaction type and severity
 * 7. Family history - each first-degree relative, age of diagnosis
 * 8. Social - smoking/alcohol/drugs with quantities, occupation details, support
 * 9. Health maintenance - screenings, vaccines, last visits
 * 10. Patient concerns and health literacy
 */

(function() {
    'use strict';

    // ==========================================
    // RESPONSE DEPTH TEMPLATES
    // These ensure consistent depth across all cases
    // ==========================================
    
    const RESPONSE_TEMPLATES = {
        // Timeline should always include:
        // - Exact onset (day, time, what doing)
        // - Progression (day by day if applicable)
        // - Why today vs earlier
        // - Prior episodes
        // - What patient thinks is going on
        
        // Medications should always include:
        // - Name (brand and generic if known)
        // - Dose
        // - Frequency
        // - Duration of use
        // - Adherence
        // - Perceived effectiveness
        // - Side effects
        // - Who prescribed / why started
        
        // Family history should include:
        // - Each first-degree relative
        // - Age of diagnosis
        // - Current status
        // - Treatment if known
    };

    // ==========================================
    // CASE: RAYMOND HUGHES (Epigastric Pain)
    // 58M, Warehouse Supervisor
    // Dx: NSAID-induced PUD with early GI bleed
    // ==========================================
    
    const RAYMOND_HUGHES = {
        meta: {
            caseId: "epigastric",
            patientName: "Raymond Hughes",
            age: 58,
            gender: "male",
            occupation: "Warehouse supervisor",
            setting: "Urgent care",
            diagnosis: "NSAID-induced peptic ulcer disease with early upper GI bleeding",
            criticalFindings: [
                "High-dose chronic NSAID use (1800-2400mg ibuprofen daily x 5 years)",
                "Melena for 2 days",
                "Orthostatic symptoms",
                "Father had bleeding ulcer at similar age",
                "Off antihypertensive for 3 weeks"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING & CHIEF COMPLAINT
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "Hi, doc.",
            
            "how are you|how you doing":
                "Not great, honestly. That's why I'm here.",
            
            "what brings you in|chief complaint|why here|what's going on|what's wrong|how can i help|what's the problem":
                "I've got this burning pain in my stomach. Been bothering me for a few days now.",
            
            "tell me more|can you explain|describe":
                "It's like a burning feeling right here *points to upper abdomen*. Gets pretty uncomfortable, especially after I eat. It's been getting worse.",
            
            "start from the beginning|walk me through":
                "Well, Friday evening after dinner I noticed this burning in my stomach. Figured it was just heartburn. But it didn't go away, and it's been getting worse ever since. Now it's pretty much constant.",

            // ============================================
            // TIMELINE - ULTRA DETAILED
            // ============================================
            
            // --- Onset ---
            "when did this start|when start|when begin|how long has this":
                "About 3 days ago. Started Friday evening.",
            
            "what day|which day|exactly when":
                "Friday. This past Friday evening, after dinner.",
            
            "what time|time of day|morning or evening":
                "Evening. Probably around 7 or 8pm, after we finished eating dinner.",
            
            "what were you doing|doing when it started|what happened":
                "We had just finished dinner - my wife made spaghetti. I sat down on the couch to watch TV and that's when I really noticed it burning.",
            
            "what did you eat|dinner that night|what was for dinner":
                "Spaghetti and meatballs with garlic bread. My wife's recipe - pretty heavy on the tomato sauce.",
            
            "sudden or gradual|come on suddenly|all at once":
                "Gradual. It wasn't like a sudden sharp pain. Built up over a couple hours that first evening. By bedtime it was really bothering me.",
            
            "what did you think it was|first impression":
                "Figured it was just bad heartburn at first. I get that sometimes. Took some TUMS and went to bed thinking it would be gone in the morning.",
            
            // --- Day by Day Progression ---
            "what happened saturday|next day|the following day":
                "Woke up Saturday and it was still there. Maybe a little better in the morning before I ate anything, but after breakfast it came right back.",
            
            "what happened sunday|yesterday":
                "Sunday was worse. The pain was more constant. And that's when I noticed... well, when I went to the bathroom, things looked different.",
            
            "what do you mean different|noticed what|bathroom":
                "My stool was really dark. Almost black. That kind of freaked me out.",
            
            "when did you first notice dark stool|black stool when":
                "Saturday morning was the first time I noticed. So two days now.",
            
            "today|how is it today|right now":
                "Still bad. Maybe slightly better than last night, but it's not going away. The dark stools are still happening. That's what made me finally come in.",
            
            // --- Progression Quantified ---
            "gotten worse or better|how has it changed|progression":
                "Definitely worse overall. Friday night was maybe a 4 out of 10. Saturday more like a 5. Yesterday it got up to 6 or 7. After dinner last night it spiked to an 8.",
            
            "worst it's been|at its worst|maximum pain":
                "Last night after dinner was the worst - probably an 8 out of 10. I almost had my wife drive me to the ER, but it settled down a bit.",
            
            "best it's been|at its best|minimum":
                "First thing in the morning before I eat anything. Maybe a 3 or 4. Still there, but more tolerable.",
            
            "constant or comes and goes|intermittent":
                "It's pretty much constant now. Doesn't completely go away anymore. Just varies in intensity.",
            
            // --- Why Today ---
            "why today|why come in now|what made you decide|why not earlier":
                "Honestly? My wife made me. She's been worried. And that dark stool... I mentioned it to her yesterday and she got really upset. Plus I looked up black stool online and... that scared me.",
            
            "what did you read|what scared you":
                "Said it could be blood in the stool. Internal bleeding. My dad had that happen with an ulcer. Ended up in the hospital.",
            
            "why didn't you come in sooner|waited three days":
                "I kept thinking it would get better on its own. I don't like making a fuss. And I've got a lot going on at work - hard to take time off.",
            
            // --- Prior Episodes ---
            "ever had this before|happened before|first time|similar episodes":
                "I've had heartburn before - maybe once a month I'll get some burning and take TUMS. But nothing like this. This is different - more intense and it's not going away.",
            
            "how long have you had heartburn|heartburn history":
                "Probably 10 years or so? Just occasional. Never really worried about it.",
            
            "has the heartburn been getting worse|changing":
                "Maybe a little more frequent the last year or two. But nothing that really bothered me until now.",
            
            "ever had dark stools before|black stool before":
                "No, never. That's what really scared me. Never seen that before.",

            // ============================================
            // LOCATION - DETAILED
            // ============================================
            
            "where is the pain|location|where does it hurt|point to it|show me":
                "*points to epigastric area* Right here, in the pit of my stomach. Upper part, middle, right below my breastbone.",
            
            "can you point with one finger|exactly where":
                "*points with one finger to epigastrium* Right here. Pretty much dead center.",
            
            "anywhere else|other locations|any other spots":
                "Mostly just there. Sometimes I feel a little burning up higher, like in my lower chest, but the main pain is right here in my stomach.",
            
            "has it moved|stayed in same place|migration":
                "No, it's pretty much stayed in the same spot since it started.",
            
            "how big an area|size of pain":
                "Maybe the size of my fist? Concentrated right in the middle there.",
            
            "deep or superficial|on the surface":
                "Deep. Feels like it's inside, not on the surface.",

            // ============================================
            // CHARACTER/QUALITY - DETAILED
            // ============================================
            
            "describe the pain|what does it feel like|character|quality|type of pain":
                "Burning. That's the main thing. Like someone's holding a hot coal right there in my stomach. Sometimes gnawing, like something's eating at me from the inside.",
            
            "burning|is it burning":
                "Yeah, burning is the best word. Like acid or a hot sensation.",
            
            "sharp|is it sharp|stabbing":
                "No, not sharp or stabbing. More like a constant burning ache.",
            
            "dull|aching":
                "There's an aching component to it, yeah. But the burning is what I notice most.",
            
            "pressure|squeezing|tightness":
                "No, not really pressure or squeezing. Just burning.",
            
            "cramping|colicky|waves|spasms":
                "No, it's not crampy. Pretty constant. Doesn't come in waves.",
            
            "tearing|ripping":
                "No, nothing like that.",
            
            "throbbing|pulsating":
                "No, not throbbing.",
            
            "knife-like|cutting":
                "No. Just burning.",

            // ============================================
            // RADIATION - DETAILED
            // ============================================
            
            "does it radiate|spread|travel|go anywhere else|move":
                "No, it pretty much stays right there in my stomach. Doesn't really go anywhere.",
            
            "to your back|back pain|through to your back":
                "No, not to my back. Although my back does hurt, but that's a separate thing - been going on for years. Different kind of pain.",
            
            "to your chest|up into your chest":
                "Sometimes I get a little heartburn feeling that goes up into my lower chest. But the main pain stays in my stomach.",
            
            "to your shoulders|shoulder pain":
                "No shoulder pain.",
            
            "to your arm|left arm|right arm|either arm":
                "No, nothing in my arms.",
            
            "to your jaw|teeth|neck":
                "No, nothing in my jaw or neck.",
            
            "to your groin|down below|lower":
                "No, nothing down there.",

            // ============================================
            // SEVERITY - DETAILED SCALE
            // ============================================
            
            "how bad|scale of 1 to 10|rate the pain|severity|0 to 10":
                "Right now, sitting here, probably a 5 or 6 out of 10. After I eat it goes up to a 7 or 8.",
            
            "at its worst|worst pain|maximum":
                "Last night after dinner - I'd say an 8, maybe even a 9. That's when I almost went to the ER.",
            
            "at its best|minimum|lowest":
                "First thing in the morning before I've eaten. Maybe a 3 or 4. Never completely zero anymore.",
            
            "compared to other pain|worst pain ever|childbirth":
                "It's not the worst pain I've ever had - I threw my back out once and that was probably worse. But this is pretty bad and it's not letting up.",
            
            "can you function|affect your activities|interfere with life":
                "I went to work Friday and Saturday but I wasn't myself. Hard to concentrate. Yesterday I just stayed home. Didn't feel up to doing anything.",
            
            "affect your sleep|sleeping":
                "Yeah, it's been waking me up at night. Especially when I lie flat. Been propping myself up with pillows.",
            
            "affect your eating|able to eat":
                "I've been eating less because I know it'll hurt after. Lost a few pounds probably.",

            // ============================================
            // AGGRAVATING FACTORS - COMPREHENSIVE
            // ============================================
            
            "what makes it worse|aggravating factors|triggers|worsen":
                "Eating makes it worse. Certain foods especially. Lying down at night. And the pain from the ibuprofen doesn't seem to help this kind of pain.",
            
            "which foods|what foods|specific foods":
                "Spicy stuff is the worst. Tomato sauce - like that spaghetti Friday. Anything acidic. Citrus. Coffee.",
            
            "spicy food|hot food":
                "Really bothers it. Had some salsa Saturday and it flared right up.",
            
            "acidic food|tomatoes|citrus|orange juice":
                "Yeah, all of that. Tomato sauce, orange juice in the morning - forget about it. Makes it way worse.",
            
            "coffee|caffeine":
                "Coffee definitely makes it worse. Which is rough because I drink a lot of coffee to get through the workday.",
            
            "how much coffee|cups of coffee":
                "Probably 4 or 5 cups during the workday. Maybe more when it's busy.",
            
            "alcohol|beer|wine|drinking":
                "You know, I had a few beers Saturday night and I think that made it worse too.",
            
            "how much alcohol|how many drinks":
                "I usually have 2-3 beers after work. Saturday I had maybe 4 or 5. It definitely bothered my stomach.",
            
            "fatty food|greasy food|fried food":
                "Yeah, greasy food doesn't sit well either. Fast food seems to make it worse.",
            
            "does eating help or hurt|empty stomach vs full":
                "That's the confusing thing - sometimes it's worse on an empty stomach, sometimes eating makes it worse. Can't win either way.",
            
            "lying down|flat|bed|night":
                "Definitely worse when I lie flat. Been sleeping propped up on two or three pillows.",
            
            "bending over|stooping":
                "Maybe a little worse when I bend over. Haven't paid too much attention.",
            
            "straining|bearing down":
                "Haven't noticed that making a difference.",
            
            "stress|anxiety|work stress":
                "Work has been really stressful lately. Don't know if it makes the actual pain worse, but probably doesn't help.",
            
            "exercise|physical activity|exertion|walking":
                "Not really related to activity. I can walk around okay at work. It's more about eating than moving.",
            
            "deep breathing|breathing":
                "No, breathing doesn't really affect it.",
            
            "coughing|sneezing":
                "No, not really.",

            // ============================================
            // RELIEVING FACTORS - COMPREHENSIVE
            // ============================================
            
            "what makes it better|relieving|help|relief|ease":
                "TUMS help a little bit - maybe 20-30 minutes of relief, then it comes back. Sitting up is better than lying flat. Not eating helps some.",
            
            "antacids|tums|rolaids|maalox":
                "I've been taking TUMS. They help temporarily but don't last.",
            
            "how many tums|how much antacid":
                "Probably 6 or 8 a day the last few days. Way more than usual.",
            
            "pepto bismol":
                "Tried some of that Saturday. Didn't seem to help much.",
            
            "any prescription antacids|prilosec|omeprazole|nexium|protonix|pepcid|zantac":
                "No, I've never been on any of those prescription stomach medicines. Should I be?",
            
            "does eating help|food relieve":
                "Sometimes eating something bland - like crackers - helps for a few minutes. Then it gets worse again. Confusing.",
            
            "milk|dairy":
                "Tried some milk. Helped a tiny bit at first, then seemed to make it worse.",
            
            "position|sitting up|standing|lying down":
                "Sitting up or standing is better than lying flat. I've been sleeping propped up.",
            
            "heat|heating pad|warm compress":
                "Tried a heating pad on my stomach. Didn't really help.",
            
            "rest|lying down":
                "Lying down actually makes it worse, especially flat on my back.",
            
            "anything else you've tried":
                "Just the TUMS really. And my regular ibuprofen but that doesn't touch this kind of pain.",

            // ============================================
            // ASSOCIATED SYMPTOMS - GI COMPLETE
            // ============================================
            
            // --- Nausea/Vomiting ---
            "nausea|nauseated|queasy|sick to your stomach":
                "A little queasy sometimes, especially after eating. But nothing too severe.",
            
            "how often nauseous|constant nausea":
                "Comes and goes. Mostly after meals. Not constant.",
            
            "vomiting|throw up|vomited|puke|been sick":
                "No, I haven't actually thrown up.",
            
            "any blood in vomit|vomited blood|coffee grounds|hematemesis":
                "No, I haven't vomited at all. So no blood that way.",
            
            "dry heaving|retching":
                "No, nothing like that.",
            
            // --- Appetite ---
            "appetite|hungry|eating":
                "My appetite's been down. I'm kind of afraid to eat because I know it'll hurt after.",
            
            "eating less|how much eating":
                "Probably eating half what I normally do. Small portions. Avoiding things I know will bother it.",
            
            "weight loss|lost weight":
                "Maybe a pound or two from not eating as much. Nothing dramatic.",
            
            // --- Stool Changes (CRITICAL) ---
            "stool|bowel movements|bowel habits|bathroom":
                "Actually, there's something I should mention. My stools have been really dark the last couple days.",
            
            "dark stool|black stool|tarry|color of stool":
                "Yeah, almost black. Kind of sticky too, like tar. Started Saturday morning.",
            
            "describe the dark stool|what does it look like":
                "Really dark, almost black. Tarry looking. Sticky when I... you know. And the smell is different - worse than usual.",
            
            "how long dark stools|when started black":
                "First noticed it Saturday morning. So two days now.",
            
            "every bowel movement|all stools dark":
                "Yeah, every time since Saturday. All dark.",
            
            "bright red blood|blood in stool|blood on paper|red blood":
                "No bright red blood. Just that dark tarry color.",
            
            "blood on toilet paper|when you wipe":
                "No bright blood. Just the dark stool.",
            
            "how often bowel movements|frequency":
                "Once or twice a day. About normal for me.",
            
            "diarrhea|loose stools|watery":
                "No diarrhea. If anything maybe going a little less often.",
            
            "constipation|hard stools|straining":
                "Maybe a little constipated. Haven't been eating as much so that might be why.",
            
            // --- Other GI ---
            "heartburn|acid reflux|burning in chest|burning throat":
                "Yeah, I get some heartburn that goes up into my chest. Worse when I lie down at night.",
            
            "regurgitation|food coming back up":
                "Sometimes I get that sour taste in my mouth. Like acid coming up. Especially if I bend over after eating.",
            
            "burping|belching|gas":
                "More belching than usual, yeah.",
            
            "bloating|distended|swollen stomach":
                "A little bloated feeling after I eat.",
            
            "early satiety|full quickly":
                "Yeah, I do get full faster than I used to. Can't eat big meals anymore.",
            
            "difficulty swallowing|food getting stuck|dysphagia":
                "No, swallowing is fine.",
            
            "painful swallowing|odynophagia":
                "No pain when I swallow.",
            
            "abdominal swelling|belly getting bigger":
                "No, my belly looks about the same.",

            // ============================================
            // ASSOCIATED SYMPTOMS - CONSTITUTIONAL
            // ============================================
            
            "fever|temperature|feverish":
                "No fever that I know of. Haven't checked but I don't feel hot.",
            
            "chills|shaking|rigors":
                "No chills.",
            
            "night sweats|sweating at night|wake up sweaty":
                "No night sweats.",
            
            "weight loss|losing weight|pounds lost":
                "Maybe a couple pounds from not eating as much. Haven't weighed myself.",
            
            "unintentional weight loss|trying to lose weight":
                "Not trying to lose weight, no. Just eating less because of the pain.",
            
            "fatigue|tired|exhausted|energy":
                "I have been more tired than usual the last few days. Don't have my normal energy.",
            
            "weakness|weak|muscle weakness":
                "Not weak exactly, just tired. Can still do my job, just feel run down.",
            
            "malaise|feeling unwell|not yourself":
                "Yeah, I just don't feel right. Something's off.",

            // ============================================
            // ASSOCIATED SYMPTOMS - CARDIOVASCULAR (R/O ACS)
            // ============================================
            
            "chest pain|chest pressure|chest discomfort|chest tightness":
                "No, it's really in my stomach. Not my chest. Sometimes heartburn goes up a bit but it's not chest pain.",
            
            "heaviness in chest|elephant on chest":
                "No, nothing like that.",
            
            "shortness of breath|trouble breathing|can't catch breath|dyspnea":
                "No, breathing is fine.",
            
            "shortness of breath with activity|winded|exertion":
                "No, I can walk around fine. Don't get winded.",
            
            "orthopnea|trouble breathing lying down":
                "No breathing problems lying down. Just the stomach pain is worse.",
            
            "pain with exertion|exercise|walking|climbing stairs":
                "The pain isn't related to activity at all. Doesn't matter if I'm walking or sitting.",
            
            "palpitations|heart racing|heart pounding|irregular heartbeat|skipping":
                "No, haven't noticed anything with my heart.",
            
            "leg swelling|ankle swelling|feet swelling|edema":
                "No swelling in my legs or feet.",
            
            "arm pain|left arm|right arm pain":
                "No arm pain.",
            
            "jaw pain|neck pain|tooth pain":
                "No jaw or neck pain.",
            
            "sweating with pain|diaphoresis|clammy":
                "No, I'm not getting sweaty with the pain.",
            
            "feel like something bad is going to happen|sense of doom":
                "No, nothing like that. Just uncomfortable.",

            // ============================================
            // ASSOCIATED SYMPTOMS - NEUROLOGICAL
            // ============================================
            
            "dizzy|lightheaded|vertigo|room spinning":
                "Maybe a little lightheaded when I stand up too fast. I've noticed that the last day or two.",
            
            "describe the lightheadedness|what happens":
                "When I get up from sitting or lying down, I have to steady myself for a second. Get a little woozy. Goes away after a few seconds.",
            
            "happens every time|how often dizzy":
                "Not every time. Maybe a few times a day when I stand up quick.",
            
            "ever passed out|fainted|lost consciousness|syncope":
                "No, never actually passed out. Just that woozy feeling.",
            
            "almost passed out|nearly fainted|grayed out":
                "Maybe close once or twice. Had to grab the counter. But I didn't actually go down.",
            
            "headache|head pain":
                "No headaches.",
            
            "vision changes|blurry vision|double vision":
                "No vision problems.",
            
            "confusion|memory problems|thinking clearly":
                "No, thinking clearly. Just distracted by the pain sometimes.",
            
            "numbness|tingling|pins and needles":
                "No numbness or tingling.",
            
            "weakness in arms or legs|trouble walking":
                "No weakness.",
            
            "speech problems|slurred speech":
                "No, speech is fine.",

            // ============================================
            // ASSOCIATED SYMPTOMS - OTHER SYSTEMS
            // ============================================
            
            "urination|peeing|urine":
                "Peeing normally. No problems there.",
            
            "urine color|dark urine":
                "Maybe a little darker than usual. Probably not drinking enough water.",
            
            "blood in urine|red urine":
                "No blood in my urine.",
            
            "burning with urination|painful urination":
                "No, no burning when I pee.",
            
            "cough|coughing":
                "No cough.",
            
            "skin changes|rash|yellow skin|jaundice":
                "No, skin looks normal to me.",
            
            "yellow eyes|scleral icterus":
                "No, my eyes look normal.",
            
            "joint pain|muscle pain|body aches":
                "Just my usual back pain. Nothing new with my joints.",
            
            "bruising easily|bleeding easily|nosebleeds":
                "No unusual bruising or bleeding.",

            // ============================================
            // PAST MEDICAL HISTORY - COMPREHENSIVE
            // ============================================
            
            "medical history|medical problems|past medical history|health problems|conditions|diagnoses|what conditions do you have|any medical issues|do you have any medical problems|other medical conditions":
                "Well, I have high blood pressure - had that about 10 years. Cholesterol was borderline high at my last checkup. And chronic back pain - that's actually why I take the ibuprofen every day.",
            
            "anything else|complete list|any other conditions|is that everything":
                "That's the main stuff. Just those three things really - the blood pressure, cholesterol, and my back.",
            
            // --- Hypertension ---
            "high blood pressure|hypertension|hbp":
                "Yeah, had that for about 10 years now.",
            
            "when were you diagnosed|when did you find out|how long hypertension":
                "I was about 48 when they first told me it was high. So 10 years.",
            
            "how was it found|how discovered":
                "Just a regular checkup. Doctor said it was too high and put me on medication.",
            
            "how high|what were the numbers|blood pressure numbers":
                "I don't remember exactly. High enough that they wanted me on medicine. Usually it's around 140s or 150s over 90 something when I don't take the medicine.",
            
            "is it controlled|blood pressure controlled|what is it on medication":
                "Was pretty good when I was taking my medicine. Usually around 130s over 80s.",
            
            "complications from high blood pressure|organ damage|kidney|heart|eyes":
                "No, they said my heart and kidneys were fine. Just need to take the medicine and watch my salt.",
            
            // --- Cholesterol ---
            "cholesterol|high cholesterol|lipids":
                "Doctor said it was borderline high at my last checkup, maybe a year ago.",
            
            "what were the numbers|cholesterol numbers|ldl|hdl":
                "I don't remember exactly. Said the bad cholesterol was a little high and I should watch my diet.",
            
            "on medication for cholesterol|statin|lipitor|crestor":
                "No, we decided to try diet changes first. Haven't started medicine for it.",
            
            // --- Back Pain (CRITICAL - links to NSAIDs) ---
            "back pain|back problems|back issue":
                "Yeah, my back's been bothering me for years. Low back mainly.",
            
            "how long have you had back pain|when did it start":
                "Started probably 15 years ago. Got worse about 5 years ago when I threw it out pretty bad lifting a pallet at work.",
            
            "what happened 5 years ago|threw out back":
                "Was lifting a heavy pallet, felt something pop, could barely walk for a week. That's when the daily pain really started.",
            
            "ever seen doctor for back|evaluated|imaging":
                "Yeah, saw a doctor when it happened. Did an X-ray, said it was wear and tear, degenerative arthritis. Told me to take ibuprofen and do exercises.",
            
            "physical therapy|exercises|treatment for back":
                "They gave me some exercises to do. I did them for a while but fell out of the habit. Mostly just take the ibuprofen.",
            
            "how do you manage it|what do you do for it":
                "Take ibuprofen. That keeps it manageable so I can work.",
            
            "surgery for back|back surgery":
                "No, they said I didn't need surgery. Just conservative treatment.",
            
            // --- Other Medical History Negatives ---
            "diabetes|blood sugar|diabetic|a1c":
                "No diabetes. They check at my physicals and it's always been okay.",
            
            "ever been told prediabetic|borderline diabetes":
                "No, blood sugar's always been normal.",
            
            "heart disease|heart attack|mi|cardiac|coronary artery disease|cad":
                "No heart problems that I know of. Never had a heart attack.",
            
            "angina|chest pain before|heart pain":
                "Never had chest pain or angina before. Heart's always been fine.",
            
            "heart failure|chf|weak heart":
                "No, nothing like that.",
            
            "abnormal heart rhythm|arrhythmia|afib|irregular heartbeat":
                "No rhythm problems.",
            
            "stroke|tia|mini stroke|brain attack":
                "No, never had a stroke.",
            
            "blood clots|dvt|pe|pulmonary embolism":
                "No blood clots.",
            
            "ulcer|stomach ulcer|peptic ulcer|duodenal ulcer":
                "Not that I know of. Never been diagnosed with an ulcer. Never had a scope.",
            
            "gastritis|stomach inflammation":
                "Never been told I have that.",
            
            "gerd|acid reflux disease|reflux":
                "I get heartburn sometimes but never been officially diagnosed or treated for GERD.",
            
            "h pylori|helicobacter|stomach bacteria":
                "Never been tested for that as far as I know.",
            
            "liver disease|hepatitis|cirrhosis|fatty liver":
                "No liver problems.",
            
            "pancreatitis|pancreas problems":
                "No, never had that.",
            
            "gallbladder|gallstones":
                "Still have my gallbladder. Never had problems with it.",
            
            "kidney disease|kidney problems|chronic kidney disease|ckd":
                "Kidneys are fine. They check at my physicals.",
            
            "cancer|tumor|malignancy":
                "No cancer, knock on wood.",
            
            "lung disease|copd|emphysema|asthma|breathing problems":
                "No lung problems, even with the smoking. Doctor keeps telling me I should get checked though.",
            
            "sleep apnea|snoring":
                "My wife says I snore but I've never been tested for sleep apnea.",
            
            "thyroid|hypothyroid|hyperthyroid":
                "No thyroid problems.",
            
            "anemia|low blood|blood problems":
                "Never been told I was anemic.",
            
            "bleeding disorder|clotting problems|hemophilia":
                "No bleeding problems.",
            
            "arthritis|joint problems":
                "Some wear and tear - mainly my back and knees. The doc called it osteoarthritis.",
            
            "autoimmune|lupus|rheumatoid":
                "No autoimmune diseases.",
            
            "depression|anxiety|mental health|psychiatric":
                "No, nothing diagnosed. Work stresses me out but I'm not depressed.",
            
            // --- Hospitalizations ---
            "hospitalizations|hospital stays|been in the hospital|admitted":
                "Never been hospitalized. This is my first time being really worried about something.",
            
            "emergency room|er visits":
                "Haven't been to the ER in years. Maybe once for a bad cut at work, got some stitches. That's it.",

            // ============================================
            // SURGICAL HISTORY
            // ============================================
            
            "surgical history|surgeries|operations|procedures":
                "Never had any surgeries. Been pretty lucky that way.",
            
            "any procedures|colonoscopy|endoscopy|scope":
                "No, never had any scopes - no colonoscopy, no stomach scope, nothing.",
            
            "appendix|appendectomy":
                "Still got my appendix.",
            
            "gallbladder|cholecystectomy":
                "Gallbladder's still there.",
            
            "hernia|hernia repair":
                "No hernias.",
            
            "heart surgery|bypass|stent|angioplasty|cath":
                "No heart procedures.",
            
            "any other surgeries|anything else":
                "Nope, no surgeries at all.",
            
            "anesthesia problems|bad reaction to anesthesia":
                "Never had anesthesia, so I don't know.",

            // ============================================
            // MEDICATIONS - ULTRA DETAILED
            // ============================================
            
            "medications|medicines|taking anything|prescriptions|pills|drugs|meds":
                "Just ibuprofen for my back. And I was on blood pressure medicine but I ran out.",
            
            "tell me about each one|go through your medications":
                "Okay, well, there's the ibuprofen I take every day for my back. And I was on lisinopril for blood pressure but I ran out a few weeks ago.",
            
            // --- Ibuprofen (CRITICAL) ---
            "ibuprofen|advil|motrin":
                "Yeah, I take ibuprofen every day for my back pain.",
            
            "what strength|dose|how many milligrams":
                "I take the 200mg tablets. Usually take 3 at a time, so 600mg per dose.",
            
            "how often|frequency|how many times a day":
                "Usually 3 or 4 times a day. Sometimes more on bad days.",
            
            "total daily amount|how much per day":
                "So that's... 1800 to 2400mg a day I guess. On really bad days maybe a bit more.",
            
            "how long have you been taking it|duration|when did you start":
                "About 5 years now. Since I threw out my back at work.",
            
            "every day|daily":
                "Pretty much every day. If I don't take it, my back flares up and I can barely move.",
            
            "do you take it with food|on empty stomach|with meals":
                "I try to take it with food when I can, but sometimes I just take it when I need it, whenever.",
            
            "miss doses|forget to take it|adherence":
                "No, I'm pretty good about it. The back pain reminds me.",
            
            "prescribed|doctor prescribe|who told you to take it":
                "The doctor 5 years ago when I hurt my back told me to take it. I just buy it at the store. Is there something wrong with that?",
            
            "anyone told you about risks|warned about stomach|side effects":
                "They said something about it being hard on the stomach. Told me to take it with food. I try to do that.",
            
            "does it help|effective":
                "Yeah, it keeps my back manageable. Without it I'd be in a lot of trouble.",
            
            // --- Blood Pressure Medication ---
            "blood pressure medicine|bp medicine|antihypertensive":
                "I was on lisinopril.",
            
            "lisinopril|prinivil|zestril":
                "Yeah, lisinopril. For my blood pressure.",
            
            "what dose lisinopril|how much":
                "10 milligrams. Once a day in the morning.",
            
            "how long were you on it|when start lisinopril":
                "About 10 years. Since they diagnosed the high blood pressure.",
            
            "still taking it|currently taking it|taking it now":
                "No... I ran out about 3 weeks ago.",
            
            "why did you stop|why aren't you taking it|ran out":
                "Just got busy with work. Kept meaning to call in the refill but never got around to it.",
            
            "feel different without it|notice anything":
                "No, I didn't notice any difference without it. That's partly why I kept putting off the refill.",
            
            "who prescribes it|where do you get it|doctor for blood pressure":
                "My primary care doctor. I need to call and get it refilled.",
            
            "planning to restart|going to get refill":
                "Yeah, I should. My wife keeps nagging me about it.",
            
            // --- Other Medications ---
            "other medications|anything else|other pills":
                "That's it. Just those two.",
            
            "aspirin|baby aspirin":
                "I take aspirin sometimes for a headache but not regularly. Not every day.",
            
            "how often aspirin":
                "Maybe once or twice a month when I get a headache.",
            
            "blood thinners|anticoagulants|warfarin|coumadin|eliquis|xarelto|pradaxa":
                "No, I'm not on any blood thinners.",
            
            "plavix|clopidogrel|antiplatelet":
                "No, nothing like that.",
            
            "stomach medication|acid medication|prilosec|omeprazole|nexium|protonix|pantoprazole":
                "No, never been on any of those prescription stomach medicines.",
            
            "pepcid|famotidine|zantac|ranitidine|h2 blocker":
                "No, just over-the-counter TUMS.",
            
            "tylenol|acetaminophen":
                "Rarely. The ibuprofen works better for my back.",
            
            "naproxen|aleve":
                "No, I stick with ibuprofen.",
            
            "steroids|prednisone|cortisone":
                "No steroids.",
            
            "supplements|vitamins|herbal|over the counter":
                "No supplements. Wife tells me to take a multivitamin but I never remember.",
            
            "fish oil|omega 3":
                "No.",
            
            "any creams|patches|topical":
                "No.",
            
            "recreational drugs|marijuana|illegal":
                "No, nothing like that.",

            // ============================================
            // ALLERGIES - DETAILED
            // ============================================
            
            "allergies|allergic|reactions|medication allergies":
                "No medication allergies. Just seasonal allergies in the spring.",
            
            "any bad reactions to medications|adverse reactions":
                "No, never had a bad reaction to any medicine.",
            
            "penicillin|amoxicillin":
                "No, I've taken that before with no problem.",
            
            "sulfa|sulfur|bactrim":
                "No problems with those.",
            
            "latex|rubber":
                "Not that I know of.",
            
            "iodine|contrast|dye|ct dye":
                "Never had any imaging with dye so I don't know.",
            
            "tape|adhesive":
                "No.",
            
            "food allergies":
                "No food allergies.",
            
            "environmental allergies|seasonal allergies|pollen|hay fever":
                "Yeah, I get seasonal allergies in the spring. Stuffy nose, sneezing. I take Claritin sometimes.",
            
            "what happens with seasonal allergies|symptoms":
                "Just stuffy nose, sneezing, itchy eyes. Nothing serious.",

            // ============================================
            // FAMILY HISTORY - BY FAMILY MEMBER
            // ============================================
            
            "family history|family medical history|diseases run in family":
                "My dad had an ulcer. My mom has diabetes. Both of them have high blood pressure.",
            
            "tell me about each family member|let's go through your family":
                "Sure. My dad's 82, my mom's 78. I've got one younger brother.",
            
            // --- Father ---
            "father|dad|father's health":
                "My dad's 82 now. He's got high blood pressure and he had an ulcer years back.",
            
            "tell me about your father's ulcer|dad's ulcer":
                "He had a bleeding ulcer when he was about my age - late 50s. Had to be hospitalized. They had to give him blood transfusions.",
            
            "what happened|how did they find it|father's ulcer details":
                "He started feeling sick, then one day he vomited blood. They rushed him to the hospital. He was there for almost a week.",
            
            "how is he now|did he recover|father now":
                "He's fine now. They put him on stomach medicine and told him to stop taking so much ibuprofen. Sound familiar? *nervous laugh*",
            
            "was he taking ibuprofen too|father's medications":
                "Yeah, he was taking a lot of ibuprofen or aspirin for his arthritis. That's what they blamed it on.",
            
            "father's heart|dad's heart|heart disease in father":
                "No heart attacks. Just the blood pressure and the ulcer thing.",
            
            "father's other conditions|what else does dad have":
                "High blood pressure mainly. Takes medicine for it. Arthritis in his knees and hips. That's about it.",
            
            // --- Mother ---
            "mother|mom|mother's health":
                "My mom's 78. She has diabetes and high blood pressure.",
            
            "mother's diabetes|mom's diabetes|when diagnosed diabetes":
                "She developed it in her 60s. Type 2, the kind that comes from being overweight.",
            
            "on insulin|diabetes treatment":
                "She takes pills for it, not insulin. Has it pretty well controlled.",
            
            "mother's other conditions|mom's health problems":
                "High blood pressure too. Takes a few medications. But she's doing okay.",
            
            "mother's heart|mom's heart":
                "No heart attacks or anything like that.",
            
            "mother's cancer|cancer in mom":
                "No cancer.",
            
            // --- Siblings ---
            "siblings|brothers|sisters|brother|sister":
                "I have one brother, Mike. He's 54.",
            
            "brother's health|mike's health|sibling health":
                "He's pretty healthy. A little overweight like me. Has high blood pressure too - runs in the family I guess.",
            
            "brother's other problems":
                "Just the blood pressure that I know of. He's doing okay.",
            
            // --- Grandparents ---
            "grandparents|grandmother|grandfather":
                "Both grandparents on my dad's side lived into their 80s, died of old age. My mom's mom had a stroke, she was in her 90s though.",
            
            // --- General Family History Questions ---
            "heart disease in family|family heart attacks|cardiac family history":
                "No heart attacks in the family. Blood pressure problems on both sides but no actual heart attacks.",
            
            "cancer in family|family cancer history":
                "No cancer in the family that I know of. We've been lucky that way.",
            
            "stroke in family|family stroke history":
                "My grandmother on my mom's side had a stroke, but she was in her 90s.",
            
            "diabetes in family|family diabetes":
                "My mom has type 2. No one else that I know of.",
            
            "stomach problems in family|ulcers in family|gi family history":
                "Just my dad's ulcer. That's the only one.",
            
            "bleeding problems in family|clotting disorders":
                "No, nothing like that.",
            
            "sudden death|anyone die young":
                "No, everyone's lived pretty long in my family.",

            // ============================================
            // SOCIAL HISTORY - COMPREHENSIVE
            // ============================================
            
            // --- Smoking - Ultra Detailed ---
            "smoke|smoking|cigarettes|tobacco|nicotine":
                "Yeah, I smoke. I know, I know, I need to quit.",
            
            "how much|how many cigarettes|packs per day":
                "About half a pack a day. Used to be more - I've cut down.",
            
            "how many cigarettes is that|number of cigarettes":
                "Half a pack is 10 cigarettes. Sometimes a bit more, sometimes less.",
            
            "how long|years smoking|when did you start":
                "Started in my twenties. So about 30 years now.",
            
            "pack years|calculate":
                "Let's see, half a pack for 30 years... that's 15 pack-years, right?",
            
            "used to smoke more|past smoking":
                "Used to be a pack a day, maybe more. Cut down about 10 years ago.",
            
            "why did you cut down|what made you reduce":
                "Wife kept nagging me, doctor kept nagging me, got more expensive. Just kind of cut back.",
            
            "ever tried to quit|quit attempts|tried quitting":
                "Yeah, I've tried a few times. Longest I went was about 3 months.",
            
            "what happened|why did you start again":
                "Work stress usually gets me. Something stressful happens and I'm back at it.",
            
            "want to quit|interested in quitting|thinking about stopping":
                "I know I should. Maybe this is the wake-up call I need.",
            
            "methods tried|how did you try to quit":
                "Cold turkey mostly. Tried the patch once. Didn't stick.",
            
            "vape|e-cigarettes|juul":
                "No, just regular cigarettes.",
            
            "cigars|pipe|other tobacco":
                "No, just cigarettes.",
            
            "chewing tobacco|smokeless|dip|snuff":
                "No, never got into that.",
            
            "marijuana|weed|pot|cannabis":
                "No, I don't smoke weed.",
            
            "around other smokers|secondhand smoke":
                "My wife doesn't smoke. I smoke outside or in the garage.",
            
            // --- Alcohol - Ultra Detailed ---
            "alcohol|drink|drinking|beer|wine|liquor":
                "Yeah, I drink. Usually have a couple beers after work to unwind.",
            
            "how much|how many drinks|quantity":
                "Maybe 2-3 beers on work nights. Weekends probably 4-5. Sometimes some whiskey if we're at a party.",
            
            "every day|daily drinking":
                "Pretty much, yeah. At least a couple beers most days.",
            
            "what type|what do you drink|beer wine liquor":
                "Mostly beer. Budweiser. Sometimes whiskey on weekends.",
            
            "how long|years drinking|drinking history":
                "Been drinking since I was in my twenties. Same as smoking.",
            
            "drinking more lately|changes in drinking|increased":
                "Maybe a little more lately with the work stress. Nothing crazy though.",
            
            "ever had a problem|problem with alcohol|alcoholism":
                "No, I can take it or leave it. I don't need it. Just like to relax after work.",
            
            "blackouts|memory loss|can't remember":
                "No, I don't drink that much. Don't get blackout drunk.",
            
            "morning drinking|drink in morning|eye opener":
                "No, never drink in the morning.",
            
            "feel like you should cut down|guilty|annoyed when people mention it":
                "My wife thinks I drink too much sometimes, but I don't think it's a problem.",
            
            "withdrawal|shakes|need a drink":
                "No, I don't get withdrawal or anything. Can go without it fine.",
            
            "dui|trouble from drinking|legal problems":
                "No, never had a DUI or anything like that.",
            
            "last drink|when did you last drink":
                "Last night. Had a couple beers after work.",
            
            // --- Drugs - Ultra Detailed ---
            "recreational drugs|illicit drugs|illegal drugs|street drugs":
                "No, nothing like that. Never been into drugs.",
            
            "ever tried anything|experimented":
                "Tried marijuana once or twice in college. That's it. Didn't like it.",
            
            "cocaine|crack":
                "No, never.",
            
            "heroin|opioids|pills for high":
                "No.",
            
            "methamphetamine|meth":
                "No.",
            
            "iv drugs|inject|needles":
                "No, never.",
            
            "prescription drugs not prescribed|someone else's pills":
                "No.",
            
            // --- Caffeine ---
            "caffeine|coffee|tea|energy drinks":
                "Oh yeah, coffee. Lots of coffee.",
            
            "how much coffee|cups":
                "Probably 4-5 cups during the workday. Maybe more when it's busy.",
            
            "energy drinks|red bull|monster":
                "No, just coffee. Sometimes a Coke.",
            
            "tea":
                "Not really a tea person.",
            
            "soda|cola":
                "Maybe a Coke or Pepsi in the afternoon sometimes.",
            
            // --- Occupation - Ultra Detailed ---
            "occupation|work|job|what do you do|employed":
                "I'm a warehouse supervisor. Been doing it about 20 years.",
            
            "where do you work|company":
                "A distribution company. We ship products all over.",
            
            "what does that involve|job duties|typical day":
                "I supervise a team of about 15 guys. Checking inventory, making sure orders go out right, dealing with problems. Lot of walking around, some lifting when we're short-staffed.",
            
            "physically demanding|lifting|labor":
                "Yeah, it's pretty physical. On my feet all day. That's what wrecked my back over the years.",
            
            "how many hours|schedule":
                "Usually 7 to 5. Been doing a lot of overtime lately though. Sometimes don't get home til 7 or 8.",
            
            "work stress|stressful|pressure":
                "It's been really rough lately. Short-staffed. Management's been pressuring us to do more with less. Some layoffs coming maybe.",
            
            "worried about job|job security":
                "Yeah, honestly. Been there 20 years but these days who knows.",
            
            "like your job|enjoy work":
                "Used to like it more. Now it's just stressful. But can't exactly start over at my age.",
            
            "exposed to anything|hazards|chemicals":
                "Not really. Just regular warehouse stuff. Dust. Diesel fumes from the forklifts.",
            
            "workers comp|injured at work":
                "My back injury was at work. Filed workers comp but it was a hassle.",
            
            // --- Diet ---
            "diet|eating habits|what do you eat|nutrition":
                "Not the greatest, I'll admit. Lots of fast food during the week when I'm busy. Wife cooks healthier on weekends.",
            
            "typical day eating|what do you eat in a day":
                "Coffee in the morning, maybe a donut. Fast food for lunch usually - burger, fries. Whatever my wife makes for dinner.",
            
            "breakfast":
                "Usually just coffee. Maybe a donut or bagel. Don't have time for a real breakfast.",
            
            "lunch":
                "Usually grab fast food - McDonald's, Wendy's, whatever's close to work. Maybe a sandwich sometimes.",
            
            "dinner":
                "My wife cooks. She tries to make healthy stuff. I'm not always good about eating it.",
            
            "snacks":
                "Chips sometimes. Whatever's in the break room vending machine.",
            
            "fruits and vegetables":
                "My wife makes me eat vegetables at dinner. Not enough probably.",
            
            "fast food|eating out":
                "Probably 4-5 times a week for lunch. More than I should.",
            
            "salt|sodium":
                "Probably too much. I like salty food.",
            
            "fatty food|fried food|greasy":
                "Yeah, I like fried food. Probably too much.",
            
            // --- Exercise ---
            "exercise|physical activity|workout|fitness":
                "I get a lot of walking at work. Don't really exercise beyond that.",
            
            "gym|work out":
                "No, I don't go to the gym. Don't have time.",
            
            "how active|activity level":
                "Pretty active at work - walking around the warehouse all day. But no formal exercise.",
            
            "used to exercise|in the past":
                "Played some basketball when I was younger. Haven't done much since.",
            
            // --- Living Situation ---
            "living situation|who do you live with|home|where do you live":
                "Live with my wife in a house we've had for 25 years.",
            
            "married|spouse|wife|partner":
                "Yeah, married 30 years. My wife Karen. She's the one who made me come in today.",
            
            "relationship|how's your marriage":
                "Good. We've been together a long time. She worries about me.",
            
            "children|kids":
                "Two kids, both grown. Son's 28, daughter's 25. Both out of the house now.",
            
            "grandchildren":
                "Not yet. Hopefully someday.",
            
            "where do you live|house|apartment":
                "We own our house. Been there 25 years. In the suburbs.",
            
            "stairs|levels|can you get around":
                "Yeah, we have stairs but I can manage them okay.",
            
            "pets":
                "Got a dog. Lab mix. Max.",
            
            // --- Support ---
            "support system|help|someone to help you":
                "My wife mainly. She takes good care of me. Kids check in sometimes.",
            
            "if you were sick|who would help":
                "My wife. She'd be there.",
            
            // --- Financial ---
            "insurance|health insurance|coverage":
                "Yeah, got insurance through work. That's one good thing about the job.",
            
            "what kind|what insurance":
                "Blue Cross I think. Through my employer.",
            
            "afford medications|pay for healthcare":
                "Should be okay with the insurance. Co-pays add up but we manage.",
            
            "financial concerns|money worries":
                "Doing okay. Not rich but we get by. Worried about if I lose my job though.",
            
            // --- Sexual History ---
            "sexual history|sexually active|sex":
                "Just with my wife. Married 30 years.",
            
            "partners|monogamous":
                "Just my wife. Been faithful our whole marriage.",
            
            "problems|sexual function|erectile":
                "Things still work okay. *laughs* Maybe not like when I was 25.",
            
            // --- Travel ---
            "travel|traveled|trips|been anywhere":
                "Haven't traveled anywhere lately. Too busy with work.",
            
            "recent travel|last trip":
                "Last vacation was maybe 6 months ago. Went to visit our daughter for a weekend. That's it.",
            
            "outside the country|international":
                "Haven't been out of the country in years. Went to Mexico once for vacation.",
            
            // --- Other Social ---
            "hobbies|interests|free time":
                "Don't have much free time. Watch some sports on TV. Work on cars sometimes. Used to fish.",
            
            "religion|spiritual|church":
                "We go to church sometimes. Not every week but holidays.",
            
            "military|served|veteran":
                "No, never served.",

            // ============================================
            // HEALTH MAINTENANCE - DETAILED
            // ============================================
            
            "regular doctor|primary care|have a doctor":
                "Yeah, I have a doctor. Don't see him as often as I should.",
            
            "how often doctor|last checkup|last physical":
                "I go once a year usually. Last was about 8 months ago. My wife makes the appointment.",
            
            "what was checked|last physical what happened":
                "The usual - blood pressure, blood work, listened to my heart. That's when they said the cholesterol was borderline.",
            
            "any concerns at last visit|doctor worried about anything":
                "He keeps telling me to quit smoking and lose weight. Nagged me about the colonoscopy. Said I should get one.",
            
            "colonoscopy|colon cancer screening":
                "No, never had one. I know I should. I'm 58. They keep telling me to schedule it. Just haven't done it.",
            
            "why haven't you|what's stopping you":
                "Honestly? I'm chicken. And I don't want to take time off work for the prep and all that.",
            
            "other cancer screenings|prostate":
                "They check the PSA with my blood work. It's been normal.",
            
            "vaccines|immunizations|shots":
                "I get the flu shot most years. My wife makes sure. I think I'm up to date on everything else.",
            
            "flu shot|flu vaccine":
                "Yeah, got it last fall.",
            
            "pneumonia shot|pneumovax":
                "I don't think so. Maybe not.",
            
            "tetanus|tdap":
                "Got one when I cut myself at work a few years ago. So probably up to date.",
            
            "covid vaccine":
                "Yeah, got those when they were doing them. All the boosters too I think.",
            
            "shingles vaccine":
                "No, haven't gotten that.",
            
            "dental|dentist":
                "Go once a year. Teeth are okay. Have some fillings.",
            
            "eye doctor|optometrist|glasses":
                "Got reading glasses. See the eye doctor every couple years.",

            // ============================================
            // PATIENT CONCERNS & HEALTH LITERACY
            // ============================================
            
            "what are you worried about|concerns|scared|afraid":
                "That dark stool really scared me. My dad had a bleeding ulcer and ended up in the hospital. I'm worried it might be the same thing.",
            
            "what do you think is going on|your theory":
                "I'm hoping it's just bad heartburn or something. But the black stool... I looked it up and it said that could be blood.",
            
            "what did you read|looked up":
                "My wife looked it up online. She's convinced it's something serious. She's usually right about these things.",
            
            "anyone told you what this might be":
                "No, you're the first doctor I've seen about it.",
            
            "questions for me|anything you want to ask":
                "Is this serious? Am I going to be okay? Is it an ulcer like my dad had?",
            
            "what would be hardest|biggest concern":
                "Not being able to work. And not being around for my wife and kids. We've got grandchildren coming someday hopefully.",
            
            "anything else you want me to know|anything else":
                "Just... please figure out what's wrong. I should have come in sooner. My wife was right.",
            
            // ============================================
            // MISC & CLARIFICATIONS
            // ============================================
            
            "can you repeat|say that again|didn't catch that":
                "Sure. What did you want me to say again?",
            
            "anything I haven't asked|anything else relevant":
                "I don't think so. I told you everything I can think of."
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    const COMPREHENSIVE_RESPONSES = {
        'epigastric': RAYMOND_HUGHES
    };
    
    window.COMPREHENSIVE_PATIENT_RESPONSES = COMPREHENSIVE_RESPONSES;
    window.getDetailedPatientResponse = function(caseId, question) {
        const caseData = COMPREHENSIVE_RESPONSES[caseId];
        if (!caseData) return null;
        
        const q = question.toLowerCase().replace(/[?.,!]/g, '').trim();
        
        // Direct match
        for (const [pattern, response] of Object.entries(caseData.responses)) {
            const patterns = pattern.split('|');
            for (const p of patterns) {
                if (q.includes(p) || p.includes(q.substring(0, 15))) {
                    return response;
                }
            }
        }
        
        // Fuzzy match - check for keyword overlap
        const qWords = q.split(/\s+/).filter(w => w.length > 3);
        let bestMatch = null;
        let bestScore = 0;
        
        for (const [pattern, response] of Object.entries(caseData.responses)) {
            const patterns = pattern.split('|');
            let score = 0;
            for (const p of patterns) {
                const pWords = p.split(/[_\s]+/);
                for (const qw of qWords) {
                    for (const pw of pWords) {
                        if (qw.includes(pw) || pw.includes(qw)) {
                            score += 1;
                        }
                    }
                }
            }
            if (score > bestScore) {
                bestScore = score;
                bestMatch = response;
            }
        }
        
        if (bestMatch && bestScore >= 1) {
            return bestMatch;
        }
        
        return "I'm not sure what you're asking about.";
    };
    
    console.log('ReasonDx Comprehensive Patient Responses v4.0 - Part 1 loaded');

})();
