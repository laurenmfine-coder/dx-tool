/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 5: Sexual/Reproductive Health Templates + Additional Cases
 * 
 * TEACHING POINTS FOR SEXUAL HISTORY:
 * 
 * 1. CONTRACEPTION vs PROTECTION - Different concepts!
 *    - Contraception = pregnancy prevention
 *    - Protection = STI prevention (barrier methods)
 *    - Long-term monogamous couples often don't use condoms
 *    - This is APPROPRIATE if both partners are faithful and tested
 * 
 * 2. When to ask about STI risk:
 *    - New partners, multiple partners, high-risk behaviors
 *    - NOT necessarily needed for decades-long monogamous marriages
 *    - Patient may be confused/offended if asked about condoms in stable marriage
 * 
 * 3. Contraception NOT needed when:
 *    - Post-menopausal
 *    - Surgical sterility (hysterectomy, tubal ligation, vasectomy)
 *    - Same-sex couple (pregnancy not possible)
 *    - Not sexually active
 * 
 * 4. Complete sexual history includes:
 *    - Currently sexually active?
 *    - Partner(s) - number, gender, relationship type
 *    - Monogamous vs multiple partners
 *    - Contraception method (if applicable)
 *    - STI risk assessment (based on above)
 *    - STI testing history
 *    - Past STIs
 *    - For women: LMP, pregnancy history, pregnancy possibility
 */

(function() {
    'use strict';

    // ==========================================
    // SEXUAL HISTORY RESPONSE TEMPLATES BY SCENARIO
    // These can be used across multiple cases
    // ==========================================
    
    const SEXUAL_HISTORY_TEMPLATES = {
        
        // SCENARIO 1: Long-term monogamous marriage, still fertile
        marriedFertile: {
            "sexually active|having sex|intercourse|sexual activity":
                "Yes, with my [husband/wife]. We've been married [X] years.",
            "partner|partners|how many partners|number of partners":
                "Just my [husband/wife]. We've been together [X] years.",
            "multiple partners|other partners":
                "No, just my [husband/wife]. We're monogamous.",
            "monogamous|faithful|exclusive":
                "Yes, we've been faithful to each other our whole marriage.",
            "new partners|recent partners":
                "No new partners. Just my [husband/wife] for [X] years.",
            "condoms|use protection|barrier|protected sex":
                "*looks slightly confused* No, we don't use condoms. We're married and monogamous. Is that... is there a reason I should be worried?",
            "why no condoms|why not":
                "We've been together [X] years, we're both faithful, we trust each other. Using condoms never seemed necessary.",
            "contraception|birth control|prevent pregnancy":
                "[Specific method - IUD, pills, vasectomy, etc.]",
            "stis|std|sexually transmitted|infections":
                "No, neither of us has ever had an STI. We've only been with each other.",
            "sti testing|tested|hiv test":
                "I was tested before we got married, years ago. Everything was negative. Haven't been tested since - didn't seem necessary with just one partner.",
            "past stis|history of stis|ever had":
                "No, never had any STIs.",
            "concerned about stis|worried about infections":
                "No, not really. We're monogamous. Should I be?",
        },
        
        // SCENARIO 2: Long-term monogamous marriage, post-menopausal/sterile
        marriedPostMenopausal: {
            "sexually active|having sex|intercourse|sexual activity":
                "Yes, with my husband. Less often than when we were younger, but yes.",
            "partner|partners|how many partners":
                "Just my husband. [X] years together.",
            "condoms|use protection|barrier":
                "*slightly amused* No, we don't use condoms. We've been married [X] years. Why would we?",
            "contraception|birth control|prevent pregnancy":
                "I went through menopause [X] years ago, so we don't need anything for that anymore.",
            "birth control pills|iud|contraceptive":
                "No, I don't need contraception. I'm past menopause.",
            "could you be pregnant|pregnancy possible":
                "No, I'm [X] years past menopause. Can't get pregnant.",
            "when was menopause|how old":
                "I was about [50-52]. So [X] years ago now.",
            "stis|std|sexually transmitted":
                "No, we've been together forever. Only been with each other.",
            "sti testing|tested":
                "Not for many years. Didn't seem necessary - we've been monogamous since we met.",
        },
        
        // SCENARIO 3: Long-term marriage, male patient, wife had hysterectomy/tubal
        marriedWifeSterile: {
            "sexually active":
                "Yes, with my wife.",
            "condoms|protection":
                "No, we don't use condoms. Been married [X] years. My wife had a [hysterectomy/tubal ligation] so pregnancy isn't a concern.",
            "why no condoms":
                "We're monogamous, trust each other, and she can't get pregnant anyway.",
        },
        
        // SCENARIO 4: Long-term marriage, vasectomy
        marriedVasectomy: {
            "sexually active":
                "Yes, with my wife.",
            "contraception|birth control|prevent pregnancy":
                "I had a vasectomy [X] years ago after our last child.",
            "condoms|protection|barrier":
                "No, we don't use condoms. Vasectomy took care of the pregnancy concern, and we've been monogamous for [X] years.",
            "vasectomy|when|why":
                "Got it after our [second/third] child. We were done having kids and it seemed easier than my wife staying on birth control.",
        },
        
        // SCENARIO 5: Young, dating, using condoms
        youngDatingCondoms: {
            "sexually active":
                "Yes, I have a [boyfriend/girlfriend]. We've been together [X months/years].",
            "partner|partners":
                "Just my [boyfriend/girlfriend] right now. We've been exclusive for [X].",
            "condoms|protection|barrier":
                "Yes, we use condoms every time.",
            "every time|consistent|always":
                "Yes, every single time. We're careful.",
            "other contraception|backup|birth control":
                "[Yes - I'm also on the pill / No - just condoms]",
            "stis|std|sexually transmitted":
                "No, I've never had an STI.",
            "sti testing|tested|when last tested":
                "I got tested [when]. Everything was negative.",
            "new relationship|how long together":
                "We've been together [X]. I got tested before we started sleeping together.",
        },
        
        // SCENARIO 6: Young, single, not currently active
        youngNotActive: {
            "sexually active":
                "Not currently. Been single for a while.",
            "last time|when last":
                "It's been [X months/years].",
            "partner|partners":
                "No current partner.",
            "contraception|birth control":
                "I'm not on anything right now since I'm not seeing anyone.",
            "stis|std|testing":
                "I got tested after my last relationship. Everything was fine.",
        },
        
        // SCENARIO 7: Single, multiple partners (higher risk)
        singleMultiplePartners: {
            "sexually active":
                "Yes.",
            "partner|partners|how many":
                "A few different people. I'm not in a committed relationship.",
            "multiple partners|how many recently":
                "Maybe [2-3] in the past few months?",
            "condoms|protection":
                "[Yes always / Sometimes / No]",
            "stis|std|sexually transmitted":
                "[History or no history]",
            "sti testing|tested|when last":
                "[Recent or not recent]",
            "concerned about stis|worried":
                "[Appropriate concern level]",
        },
        
        // SCENARIO 8: Widowed/divorced, not active
        widowedNotActive: {
            "sexually active":
                "No, not since my [husband/wife] passed [X years ago].",
            "partner":
                "No, I'm not seeing anyone.",
            "condoms|protection|contraception":
                "Not applicable. I'm not sexually active.",
            "last time|when last":
                "It's been [X] years. Since before my [spouse] died.",
        },
        
        // SCENARIO 9: Same-sex couple
        sameSexCouple: {
            "sexually active":
                "Yes, with my [partner/husband/wife].",
            "partner|partners":
                "My [partner], [name]. We've been together [X] years.",
            "contraception|birth control|pregnancy":
                "That's not a concern for us. [We're both men / We're both women].",
            "could you be pregnant":
                "No, not possible. My partner is [also a woman/a man].",
            "protection|condoms|barrier":
                "[Based on specific circumstances and risk assessment]",
            "stis|std|testing":
                "[Based on history and circumstances]",
        },
    };

    // ==========================================
    // UPDATED CASE: Raymond Hughes with Sexual History
    // 58M, married 30 years, wife on hormones post-menopause
    // ==========================================
    
    const RAYMOND_HUGHES_SEXUAL = {
        // Sexual/reproductive responses to add to Raymond Hughes
        "sexually active|having sex|intercourse|sexual activity":
            "Yes, with my wife Karen. We've been married 30 years.",
        
        "partner|partners|how many partners|number of partners":
            "Just my wife. Karen. 30 years together.",
        
        "multiple partners|other partners|anyone besides wife":
            "No, just Karen. Been faithful our whole marriage.",
        
        "monogamous|faithful|exclusive":
            "Yes, completely. We're each other's only partner.",
        
        "new partners|recent partners|new sexual contact":
            "No, just my wife. Same as it's been for 30 years.",
        
        "condoms|use protection|barrier|protected sex":
            "*looks a bit surprised* No, we don't use condoms. We've been married 30 years. Why would we?",
        
        "why no condoms|why don't you use protection":
            "We've been together since our twenties. We're both faithful. Never seemed necessary. Is there something I should be worried about?",
        
        "contraception|birth control|prevent pregnancy":
            "Karen went through menopause about 5 years ago, so we don't worry about that anymore. Before that she was on the pill for years.",
        
        "wife on birth control|wife's contraception":
            "She used to be on the pill. But she's past menopause now - 5 years or so.",
        
        "vasectomy|ever had vasectomy":
            "No, I never had that done. Karen took care of the birth control.",
        
        "stis|std|sexually transmitted|infections":
            "No, neither of us has ever had anything like that. We've only been with each other.",
        
        "sti testing|tested|hiv test|when last tested":
            "Not recently. Maybe when we were first married 30 years ago? There was some blood work. Never had a reason to get tested since - just the one partner.",
        
        "hiv status|hiv test|aids":
            "Never been tested for that specifically. Should I be worried? We've only been with each other.",
        
        "past stis|history of stis|ever had std":
            "No, never. Karen neither, as far as I know.",
        
        "concerned about stis|worried about infections":
            "No, never crossed my mind honestly. Should it? We've been monogamous 30 years.",
        
        "any concerns about sexual health|sexual problems":
            "Things still work okay. *laughs a little* Maybe not like when I was 25, but we're fine.",
        
        "erectile dysfunction|trouble with erections|ed":
            "Sometimes takes a little longer to get going, but no major problems. Just getting older I guess.",
        
        "pain with sex|dyspareunia":
            "No, no pain.",
        
        "discharge|penile discharge":
            "No discharge.",
        
        "sores|lesions|genital sores":
            "No, nothing like that.",
    };

    // ==========================================
    // UPDATED CASE: Jessica Martin with Sexual History
    // 28F, boyfriend 3 years, uses condoms
    // ==========================================
    
    const JESSICA_MARTIN_SEXUAL = {
        // Already in Part 3, but adding more depth
        "sexually active|having sex|intercourse|sexual activity":
            "Yes, I have a boyfriend. Jake. We live together.",
        
        "partner|partners|how many partners":
            "Just Jake. We've been together 3 years, living together for 2.",
        
        "how long together|relationship length":
            "Three years. We met at a friend's party.",
        
        "multiple partners|other partners|anyone else":
            "No, just Jake. We're exclusive.",
        
        "monogamous|faithful":
            "Yes, we're monogamous.",
        
        "new partners|recent partners":
            "No, just Jake for the past 3 years.",
        
        "condoms|use protection|barrier|protected sex":
            "Yes, we use condoms. Every time.",
        
        "every time|consistent|always use condoms":
            "Yes, every single time. We're careful about that.",
        
        "why condoms|why do you use condoms":
            "I'm not on birth control pills - they gave me headaches. And we want to be careful about pregnancy. Not ready for kids yet.",
        
        "other contraception|birth control|pills|iud":
            "No, just condoms. I tried the pill once but got bad headaches. Haven't tried anything else.",
        
        "considered other methods|iud|implant":
            "I've thought about an IUD. Maybe I should look into it.",
        
        "could you be pregnant|pregnancy possible":
            "I don't think so. We always use condoms and my period was normal 3 weeks ago.",
        
        "when was last period|lmp|last menstrual period":
            "About 3 weeks ago. It was normal.",
        
        "regular periods|cycle regular":
            "Yes, pretty regular. Every 28-30 days.",
        
        "pregnancy test|tested for pregnancy":
            "I haven't taken a test. Should I? We always use condoms...",
        
        "ever been pregnant|pregnancy history":
            "No, never been pregnant.",
        
        "miscarriage|abortion|termination":
            "No, never.",
        
        "stis|std|sexually transmitted":
            "No, I've never had an STI.",
        
        "sti testing|tested|when last tested":
            "I got tested about a year ago at my annual GYN visit. Everything was negative.",
        
        "both tested|partner tested|jake tested":
            "Yes, we both got tested when we started dating. Both negative.",
        
        "hiv|hiv test|aids":
            "Tested negative. Jake too.",
        
        "past stis|history of stis|ever had":
            "No, never had any STIs.",
        
        "concerned about stis|worried":
            "Not really. We're both clean and we're monogamous and we use condoms.",
        
        "sexual history before jake|previous partners":
            "I had one boyfriend in college before Jake. Nothing serious. Got tested after and was fine.",
        
        "how many lifetime partners|total partners":
            "Two. My college boyfriend and Jake.",
        
        "pain with sex|dyspareunia":
            "No, sex is fine. No pain.",
        
        "discharge|vaginal discharge":
            "Normal discharge. Nothing unusual.",
        
        "sores|lesions":
            "No sores or anything like that.",
    };

    // ==========================================
    // UPDATED CASE: Maria Torres with Sexual History
    // 38F, married 10 years, husband had vasectomy
    // ==========================================
    
    const MARIA_TORRES_SEXUAL = {
        "sexually active|having sex|intercourse|sexual activity":
            "Yes, with my husband Carlos. We've been married 10 years.",
        
        "partner|partners|how many partners":
            "Just Carlos. We've been together since we were in our late 20s.",
        
        "multiple partners|other partners":
            "No, just my husband. We're faithful to each other.",
        
        "monogamous|faithful":
            "Yes, completely monogamous.",
        
        "new partners|recent":
            "No, just Carlos for over 10 years.",
        
        "condoms|use protection|barrier|protected sex":
            "No, we don't use condoms. We've been married 10 years and Carlos had a vasectomy after Sofia was born.",
        
        "why no condoms":
            "We're married, monogamous, and pregnancy isn't a concern since the vasectomy. Didn't seem necessary.",
        
        "contraception|birth control|prevent pregnancy":
            "Carlos had a vasectomy after our daughter was born. That's our birth control.",
        
        "vasectomy|husband's vasectomy|when":
            "About 7 years ago, after Sofia. We decided one child was enough and it was easier than me staying on pills.",
        
        "before vasectomy|what did you use before":
            "I was on birth control pills before Sofia. We planned the pregnancy.",
        
        "could you be pregnant|pregnancy possible":
            "No, Carlos had a vasectomy. Can't get pregnant.",
        
        "when was last period|lmp|last menstrual period":
            "About 2 weeks ago. It was normal.",
        
        "regular periods|cycle regular":
            "Yes, pretty regular. About every 28 days.",
        
        "ever been pregnant|pregnancy history|pregnancies":
            "Once. My daughter Sofia. She's 8.",
        
        "how was the pregnancy|delivery":
            "Good pregnancy, but she was breech so I had a C-section.",
        
        "complications|c-section":
            "C-section went fine. Recovery was normal.",
        
        "miscarriage|abortion":
            "No, just the one pregnancy with Sofia.",
        
        "trying for more|more children":
            "No, we decided one was enough. That's why Carlos got the vasectomy.",
        
        "stis|std|sexually transmitted":
            "No, neither of us has ever had an STI.",
        
        "sti testing|tested|when last tested":
            "I get tested at my annual GYN checkups. Always negative. Haven't had any concerns.",
        
        "hiv|hiv test":
            "Tested as part of pregnancy workup. Negative. Haven't been tested since - no reason to be.",
        
        "past stis|history":
            "No, never had any STIs.",
        
        "concerned about stis|worried":
            "No, we've been together over 10 years. Only been with each other. Not worried.",
        
        "sexual history before carlos|previous partners":
            "I dated a few people before Carlos. Nothing serious. Got tested when we got serious and was fine.",
        
        "how many lifetime partners|total":
            "Three or four, including Carlos. All were years ago.",
        
        "pain with sex|dyspareunia":
            "No pain with sex.",
        
        "discharge|vaginal discharge":
            "Normal discharge. Nothing unusual.",
        
        "bleeding after sex|post-coital":
            "No, no bleeding.",
    };

    // ==========================================
    // UPDATED CASE: Samantha Reyes with Sexual History
    // 34F, hyperemesis - PREGNANCY IS THE ISSUE
    // ==========================================
    
    const SAMANTHA_REYES_SEXUAL = {
        "sexually active|having sex|intercourse":
            "Yes, with my husband David.",
        
        "partner|partners":
            "Just David. We've been married 5 years.",
        
        "monogamous|faithful":
            "Yes, of course. Just us.",
        
        "condoms|use protection|barrier":
            "No, we haven't used condoms in years. We've been trying to get pregnant actually.",
        
        "contraception|birth control|prevent pregnancy":
            "No, we stopped birth control about 8 months ago. We want to have a baby.",
        
        "trying to get pregnant|trying to conceive|ttc":
            "Yes, for about 8 months now. *pauses* Wait, do you think I might be...?",
        
        "could you be pregnant|pregnancy possible|are you pregnant":
            "I... I might be? We've been trying. I haven't tested yet. Oh my god, do you think that's what this is?",
        
        "when was last period|lmp|last menstrual period":
            "Let me think... *counts* ...it's been about 6 weeks? I'm late. I thought it was stress.",
        
        "late period|missed period":
            "Yes, I'm late. Maybe 2 weeks? I've been so focused on feeling sick I didn't really think about it.",
        
        "pregnancy test|tested|home test":
            "No, I haven't taken a test yet. I kept thinking I was just sick. Do you think I should?",
        
        "regular periods|cycle regular":
            "Usually pretty regular. 28-30 days.",
        
        "ever been pregnant|pregnancy history":
            "No, this would be our first if I am pregnant.",
        
        "miscarriage|abortion|termination":
            "No, never been pregnant before.",
        
        "fertility issues|trouble conceiving":
            "We've been trying for 8 months. Starting to wonder if something was wrong. But now maybe...",
        
        "stis|std|sexually transmitted":
            "No, we've both been tested. All negative.",
        
        "sti testing|when tested":
            "Before we got married. Both clean.",
        
        "past stis|history":
            "No, never had any STIs.",
        
        "hiv|hiv test":
            "Negative. Tested before we got married.",
    };

    // ==========================================
    // CASE: Arthur Price - Upper GI Bleed
    // 46M, married 20 years, construction foreman
    // ==========================================
    
    const ARTHUR_PRICE = {
        meta: {
            caseId: "upper-gi-bleed",
            patientName: "Arthur Price",
            age: 46,
            gender: "male",
            occupation: "Construction foreman",
            setting: "Emergency Department",
            diagnosis: "Upper GI bleed - peptic ulcer disease",
            criticalFindings: [
                "Melena x 2 days",
                "Epigastric pain worse with empty stomach",
                "Heavy NSAID use (ibuprofen 800mg TID x years)",
                "Lightheadedness when standing (orthostatic)",
                "Heavy alcohol use (6-pack daily)",
                "No prior evaluation despite symptoms for weeks"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING & CHIEF COMPLAINT
            // ============================================
            
            "hello|hi|good morning|good afternoon": 
                "*looks pale and tired* Hey doc.",
            
            "how are you|how you doing":
                "*shakes head slowly* Been better. Been a rough couple days.",
            
            "what brings you in|chief complaint|why here|what's wrong|what's going on":
                "I've been having stomach pain and... *hesitates* ...my bowel movements have been really dark. Like tar. My wife noticed I look pale and made me come in.",
            
            "tell me more|can you explain|describe":
                "My stomach's been burning for a few weeks, off and on. But two days ago I went to the bathroom and it was black. Real dark, sticky, smelled awful. And I've been feeling weak and dizzy.",
            
            "start from the beginning|walk me through":
                "Okay. My stomach's been bothering me for maybe a month - burning pain, mostly when I haven't eaten in a while. But two days ago I noticed the black stool. That scared me. And I've been lightheaded, especially when I stand up.",

            // ============================================
            // TIMELINE
            // ============================================
            
            "when did this start|when start|how long":
                "The stomach pain's been on and off for about a month. The black stools started two days ago.",
            
            "when did you first notice black stool|melena when":
                "Two days ago. Morning. Went to the bathroom and... it was really dark. Almost black. And sticky.",
            
            "every bowel movement|all black|continuing":
                "Yeah, every time since then. All dark and tarry.",
            
            "stomach pain how long|pain started when":
                "The burning started maybe a month ago? It's gotten worse the last couple weeks.",
            
            "why come in now|why today|why not earlier":
                "The black stool scared me. And my wife said I look like a ghost. She made me come in.",
            
            "worse|progression":
                "The pain's gotten worse the last week. And I've been more tired, more dizzy. The black stool pushed me over the edge.",

            // ============================================
            // PAIN CHARACTERISTICS
            // ============================================
            
            "where is the pain|location|point":
                "*points to epigastrium* Right here. Upper stomach, middle.",
            
            "describe the pain|what does it feel like|character":
                "Burning. Like acid eating at my stomach. Gnawing.",
            
            "how bad|scale of 1 to 10|severity":
                "Usually a 5 or 6. Gets up to 7 or 8 when I haven't eaten.",
            
            "what makes it worse|aggravating":
                "Empty stomach is the worst. First thing in the morning. Also alcohol makes it flare.",
            
            "what makes it better|relieving":
                "Eating helps some - takes the edge off for a while. Milk used to help. TUMS barely touch it.",
            
            "radiate|spread|go anywhere":
                "No, stays pretty much right here.",
            
            "constant or comes and goes":
                "Comes and goes. Worse when stomach's empty. Better after eating but comes back.",

            // ============================================
            // GI SYMPTOMS - MELENA (CRITICAL)
            // ============================================
            
            "stool|bowel movements|black stool|describe the stool|melena":
                "Black. Really dark, like tar. Sticky. The smell is awful - different than usual. Worse.",
            
            "how many times|frequency":
                "Going once or twice a day. All dark the last two days.",
            
            "bright red blood|blood in stool|red blood":
                "No red blood. Just black.",
            
            "blood on paper|when you wipe":
                "It's so dark and sticky... I mean, I guess that could be blood? Never seen red though.",
            
            "vomiting|throw up|vomited":
                "No, haven't thrown up.",
            
            "vomit blood|coffee grounds|hematemesis":
                "No, no vomiting at all.",
            
            "nausea|nauseated":
                "A little queasy sometimes. Not too bad.",
            
            "appetite|eating":
                "Still eating okay. Actually eating helps the pain, so I've been snacking more.",
            
            "weight loss|lost weight":
                "Maybe a few pounds. Haven't really been watching.",
            
            "diarrhea":
                "No diarrhea. Stools are actually kind of sticky.",
            
            "constipation":
                "No, going regularly.",

            // ============================================
            // ORTHOSTATIC SYMPTOMS (CRITICAL)
            // ============================================
            
            "dizzy|lightheaded|faint|vertigo":
                "Yeah, I've been lightheaded. Especially when I stand up.",
            
            "when does it happen|describe lightheadedness":
                "When I get up from sitting or lying down. Have to steady myself for a few seconds. Sometimes see spots.",
            
            "passed out|fainted|lost consciousness|syncope":
                "No, haven't actually passed out. Come close a couple times.",
            
            "almost passed out|near syncope":
                "Yeah, yesterday I stood up too fast and had to grab the counter. Everything went gray for a second.",
            
            "how often|how many times":
                "Happens several times a day when I change position.",
            
            "worse lately|getting worse":
                "Definitely worse the last two days. Since the black stool started.",

            // ============================================
            // CONSTITUTIONAL
            // ============================================
            
            "tired|fatigue|exhausted|energy":
                "Really tired. Don't have my usual energy. Can barely get through the workday.",
            
            "weakness|weak":
                "Feel weak. Not like me. Usually I'm pretty strong.",
            
            "fever|temperature":
                "No fever.",
            
            "chills|sweats":
                "No chills. Maybe some night sweats but I thought it was the drinking.",
            
            "pale|color|pallor":
                "My wife said I look pale. Guys at work mentioned it too.",

            // ============================================
            // MEDICATIONS - NSAIDS (CRITICAL)
            // ============================================
            
            "medications|medicines|taking anything|meds":
                "Just ibuprofen for pain. Take it every day for my back and knees.",
            
            "ibuprofen|advil|motrin|how much":
                "800 milligrams, three times a day usually. Sometimes more on bad days.",
            
            "how long|how long on ibuprofen|duration":
                "Years. Five, six years maybe? Since I messed up my back at work.",
            
            "every day|daily|how often":
                "Pretty much every day. Can't work without it.",
            
            "prescribed|doctor give you that|who prescribed":
                "Doctor prescribed the 800mg after I hurt my back. I just kept refilling it.",
            
            "take with food|how do you take it":
                "Sometimes with food, sometimes without. Whenever I need it.",
            
            "anyone tell you about stomach risks|warned about stomach":
                "Doc mentioned something years ago about taking it with food. That's about it.",
            
            "other pain medicines|tried anything else":
                "Tylenol doesn't work as well. Ibuprofen is the only thing that touches the pain.",
            
            "aspirin":
                "No, just ibuprofen.",
            
            "blood thinners|anticoagulants":
                "No blood thinners.",
            
            "stomach medicine|antacids|prilosec|omeprazole":
                "No prescription stomach medicine. Just TUMS sometimes.",
            
            "blood pressure medicine|heart medicine":
                "No, nothing like that.",
            
            "any other medications|anything else":
                "That's it. Just the ibuprofen.",

            // ============================================
            // PAST MEDICAL HISTORY
            // ============================================
            
            "medical history|medical problems|conditions|past medical history":
                "Back problems. Knee arthritis. That's why I take the ibuprofen. Otherwise pretty healthy.",
            
            "back pain|back problems|tell me about your back":
                "Hurt it at work about 6 years ago. Degenerative stuff. It's chronic now.",
            
            "ulcer|stomach ulcer|ever had an ulcer":
                "Never been told I have one. Never had any testing.",
            
            "endoscopy|scope|egd|looked at your stomach":
                "No, never had that done.",
            
            "h pylori|helicobacter|stomach bacteria":
                "Never been tested for that.",
            
            "liver disease|hepatitis|cirrhosis":
                "No, not that I know of.",
            
            "bleeding problems|bleed easily":
                "No, I don't bleed easily usually.",
            
            "heart disease|heart attack|cardiac":
                "No heart problems.",
            
            "high blood pressure|hypertension":
                "Haven't been checked in a while. Used to be borderline.",
            
            "diabetes|blood sugar":
                "No diabetes.",
            
            "kidney disease|kidney problems":
                "No kidney problems.",
            
            "hospitalizations|hospital stays":
                "Never been hospitalized.",
            
            "surgeries|operations":
                "No surgeries.",

            // ============================================
            // ALLERGIES
            // ============================================
            
            "allergies|allergic|medication allergies":
                "No allergies that I know of.",
            
            "ever had a reaction|bad reaction":
                "No, never had a problem with any medicine.",

            // ============================================
            // FAMILY HISTORY
            // ============================================
            
            "family history|family medical history":
                "Dad had a heart attack in his 60s. Mom has diabetes. Don't know much else.",
            
            "stomach problems in family|ulcers in family|gi bleed":
                "Not that I know of.",
            
            "cancer in family":
                "No cancer that I'm aware of.",
            
            "liver disease in family":
                "No liver problems in the family.",

            // ============================================
            // SOCIAL - ALCOHOL (CRITICAL)
            // ============================================
            
            "alcohol|drink|drinking|beer|wine|liquor":
                "Yeah, I drink. Beer mostly. Helps me unwind after work.",
            
            "how much|how many drinks|quantity":
                "Maybe a six-pack a night. Sometimes more on weekends.",
            
            "six pack every night|daily":
                "Pretty much, yeah. Every night after work.",
            
            "how long|years drinking|drinking how long":
                "I don't know... 20 years? Started in my twenties.",
            
            "more lately|increased|drinking more":
                "Maybe a little more when the stomach's been bothering me. Takes the edge off.",
            
            "ever had a problem|alcoholism|dependence":
                "I wouldn't say I have a problem. I just like to relax with a few beers.",
            
            "withdrawal|shakes|morning drinking":
                "No shakes or anything like that. Don't drink in the morning.",
            
            "liver|liver problems|told anything about liver":
                "Never been tested. Nobody's mentioned it.",
            
            "cut down|tried to cut back":
                "My wife's been on me about it. I've tried cutting back.",

            // ============================================
            // SOCIAL - SMOKING
            // ============================================
            
            "smoke|smoking|cigarettes|tobacco":
                "Yeah, I smoke. Pack a day, give or take.",
            
            "how long|years smoking":
                "About 25 years. Started as a teenager.",
            
            "tried to quit":
                "Tried a few times. Never sticks.",

            // ============================================
            // SOCIAL - OCCUPATION
            // ============================================
            
            "work|job|occupation":
                "Construction foreman. Been doing it 20 years.",
            
            "physical|hard work":
                "Yeah, it's physical. Hard on the body. That's why my back and knees are shot.",
            
            "still working|missing work":
                "Still going in but it's been harder the last few days. Feeling so weak.",

            // ============================================
            // SOCIAL - SEXUAL HISTORY
            // ============================================
            
            "sexually active|having sex|intercourse":
                "Yeah, with my wife. We've been married 20 years.",
            
            "partner|partners|how many":
                "Just my wife. Linda. Been together since we were kids basically.",
            
            "monogamous|faithful":
                "Yeah, just us. Been faithful our whole marriage.",
            
            "condoms|use protection|barrier":
                "*surprised look* No, we don't use condoms. We've been married 20 years. Why?",
            
            "why no condoms|why not":
                "We're married, we're monogamous, Linda can't get pregnant anymore - she had a hysterectomy. What would be the point?",
            
            "contraception|birth control|pregnancy":
                "Linda had a hysterectomy about 10 years ago. Fibroids. So pregnancy's not a concern.",
            
            "wife's hysterectomy|when|why":
                "About 10 years ago. She had fibroids that were causing problems. Had to have it out.",
            
            "stis|std|sexually transmitted":
                "No, never. We've only been with each other.",
            
            "sti testing|tested|hiv":
                "Not since we were young. No reason to. Just the one partner for 20+ years.",
            
            "past stis|history":
                "No, never had any STIs.",
            
            "concerned about stis|worried":
                "No, not something I think about. Should I?",

            // ============================================
            // PATIENT CONCERNS
            // ============================================
            
            "what are you worried about|concerns|scared":
                "The black stool scared me. I looked it up - it said that could be blood. Internal bleeding. That's serious, right?",
            
            "what do you think it is":
                "I don't know. Ulcer maybe? Too much ibuprofen? I've been taking a lot.",
            
            "anything else|questions":
                "Just tell me what's wrong. And if I need to stop the ibuprofen... I don't know how I'll work without it.",
        }
    };

    // ==========================================
    // Export all cases and sexual history templates
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    // Add the full Arthur Price case
    window.COMPREHENSIVE_PATIENT_RESPONSES['upper-gi-bleed'] = ARTHUR_PRICE;
    
    // Export sexual history templates for other cases to use
    window.SEXUAL_HISTORY_TEMPLATES = SEXUAL_HISTORY_TEMPLATES;
    
    // Export individual sexual history additions
    window.SEXUAL_RESPONSES = {
        'epigastric': RAYMOND_HUGHES_SEXUAL,
        'rlq-appendicitis': JESSICA_MARTIN_SEXUAL,
        'ruq-cholecystitis': MARIA_TORRES_SEXUAL,
        'nausea-vomiting': SAMANTHA_REYES_SEXUAL,
    };
    
    // Function to merge sexual responses into existing cases
    window.addSexualResponsesToCase = function(caseId) {
        if (window.COMPREHENSIVE_PATIENT_RESPONSES[caseId] && window.SEXUAL_RESPONSES[caseId]) {
            const existingResponses = window.COMPREHENSIVE_PATIENT_RESPONSES[caseId].responses;
            const sexualResponses = window.SEXUAL_RESPONSES[caseId];
            Object.assign(existingResponses, sexualResponses);
        }
    };
    
    console.log('ReasonDx Part 5 (Sexual History Templates + Upper GI Bleed) loaded');

})();
