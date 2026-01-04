/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 19: Dermatology, Eye, and ENT Cases
 * 
 * Cases:
 * 1. Shingles (Herpes Zoster) - 68F
 * 2. Contact Dermatitis - 32M
 * 3. Acute Angle-Closure Glaucoma - 65F
 * 4. Retinal Detachment - 58M
 * 5. Strep Pharyngitis - 16M
 * 6. Peritonsillar Abscess - 24M
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Dorothy Adams - Shingles (Herpes Zoster)
    // 68F, painful vesicular rash, dermatomal
    // ==========================================
    
    const DOROTHY_ADAMS = {
        meta: {
            caseId: "shingles-zoster",
            patientName: "Dorothy Adams",
            age: 68,
            gender: "female",
            occupation: "Retired librarian",
            setting: "Primary Care",
            diagnosis: "Herpes zoster (shingles)",
            criticalFindings: [
                "Painful vesicular rash",
                "Dermatomal distribution",
                "Unilateral",
                "Prodrome of pain before rash",
                "Age >60 (risk factor)",
                "Check for eye involvement if facial"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*wincing, guarding left side* Hi doctor. I have this terrible rash and pain. It's awful.",
            
            "how are you|how you doing":
                "Miserable. This pain on my left side is unbearable, and now there's a rash with blisters.",
            
            "what brings you in|chief complaint|why here":
                "I developed this painful rash on my left side. It started as burning pain a few days ago, then these blisters appeared. The pain is excruciating - like burning and stabbing. Even my clothes touching it hurts.",
            
            "tell me more|can you explain":
                "Four days ago I started having this burning, tingling pain on my left side, under my breast and around to my back. I thought maybe I pulled a muscle. Then two days ago these red bumps appeared, and now they're blisters. The pain is constant and severe.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "The pain started 4 days ago. The rash appeared 2 days ago. Blisters showed up yesterday.",
            
            "pain first|rash first|order":
                "Pain came first. Two days of pain before I saw any rash. Then red spots, then blisters.",
            
            "getting worse|progression":
                "Getting worse. More blisters appearing. Pain hasn't let up.",
            
            // PAIN CHARACTERISTICS
            "describe the pain|what does it feel like":
                "Burning. Stabbing. Electric shocks. It's constant but gets worse in waves. Even light touch is agony.",
            
            "where|location":
                "*points to left lateral chest* It starts here on my side, goes under my breast, and wraps around to my back. Like a band around my left side.",
            
            "one side|both sides":
                "Just the left side. Doesn't cross the middle.",
            
            "how bad|severity|scale":
                "8 or 9 out of 10. Constant. The worst is when anything touches it.",
            
            // RASH CHARACTERISTICS
            "describe the rash|what does it look like":
                "Red base with clusters of small blisters. Some are filled with clear fluid. A few look cloudy. All in the same area as the pain.",
            
            "blisters|vesicles":
                "Yes, blisters in groups. Some have popped and crusted over.",
            
            "where is the rash|distribution":
                "Same area as the pain - left side, under my breast, around to my back. Follows a stripe pattern.",
            
            "itchy|itch":
                "More painful than itchy. Some itching but the pain overwhelms it.",
            
            "spreading|getting bigger":
                "More blisters appeared yesterday. Seems to be spreading within that stripe area.",
            
            // ASSOCIATED SYMPTOMS
            "fever|temperature":
                "Maybe a low fever. I've felt warm.",
            
            "headache":
                "Mild headache.",
            
            "fatigue|tired":
                "Yes, very tired. Haven't been sleeping well because of the pain.",
            
            "eye|vision|face involved":
                "No, it's not on my face. Just my side and back.",
            
            // HISTORY
            "chickenpox|had chickenpox|history":
                "Yes, I had chickenpox as a child. Doesn't everyone my age?",
            
            "shingles before|had shingles":
                "No, this is the first time.",
            
            "shingles vaccine|vaccinated":
                "I've been meaning to get the vaccine but hadn't gotten around to it. Now I wish I had.",
            
            "exposure|around anyone sick":
                "My grandson had chickenpox a few weeks ago. Could that have caused this?",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure, osteoarthritis, hypothyroidism. Otherwise healthy for 68.",
            
            "immune problems|immunocompromised|cancer":
                "No cancer, no immune problems.",
            
            "diabetes":
                "No diabetes.",
            
            "medications":
                "Lisinopril, levothyroxine, occasional acetaminophen for my joints.",
            
            "allergies":
                "Penicillin - I get a rash.",
            
            // SOCIAL
            "smoke|smoking":
                "Never smoked.",
            
            "alcohol":
                "Occasional glass of wine.",
            
            "live with|family|contacts":
                "I live with my husband. Our grandchildren visit often.",
            
            // SEXUAL HISTORY - 68F married
            "sexually active":
                "Yes, with my husband.",
            
            "partner":
                "Just my husband of 45 years.",
            
            "stis":
                "No, never.",
            
            // CONCERNS
            "worried about|concerns":
                "How long will this last? I've heard shingles pain can last forever. And can I give this to my grandchildren?",
            
            "contagious|spread|grandchildren":
                "My 3-year-old granddaughter hasn't had chickenpox yet. Can she catch it from me?",
            
            "anything else":
                "Please, something for the pain. I haven't slept in days. This is unbearable.",
        }
    };

    // ==========================================
    // CASE: Jason Miller - Contact Dermatitis
    // 32M, occupational skin rash, itchy
    // ==========================================
    
    const JASON_MILLER = {
        meta: {
            caseId: "contact-dermatitis",
            patientName: "Jason Miller",
            age: 32,
            gender: "male",
            occupation: "Hairdresser",
            setting: "Urgent Care",
            diagnosis: "Allergic contact dermatitis (occupational)",
            criticalFindings: [
                "Pruritic erythematous rash",
                "Distribution matches exposure pattern",
                "History of occupational chemical exposure",
                "Worsening with continued exposure",
                "Vesicles/weeping in severe cases"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*scratching hands* Hey doc. My hands are driving me crazy. This rash won't go away.",
            
            "how are you|how you doing":
                "Frustrated. This rash on my hands has been getting worse for months. The itching is constant.",
            
            "what brings you in|chief complaint|why here":
                "I have this itchy rash on my hands. It started a few months ago and keeps getting worse. Now it's spreading up my forearms. The itching is unbearable and it looks terrible. I'm a hairdresser - my clients can see this.",
            
            "tell me more|can you explain":
                "It started maybe 3-4 months ago. First just some redness and itching between my fingers. Now my whole hands are red, cracked, itchy. Some areas are weeping. It gets better on my days off but comes right back when I work.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "About 3-4 months ago. Started small, gradually got worse.",
            
            "gradual|sudden":
                "Gradual. Crept up over time.",
            
            "getting worse|progression":
                "Definitely worse. Started between my fingers, now it's my whole hands and creeping up my wrists and forearms.",
            
            // RASH CHARACTERISTICS
            "describe the rash|what does it look like":
                "Red, scaly, cracked skin. Some tiny blisters. Some areas are weeping clear fluid. Dry and cracked in spots.",
            
            "where|location|distribution":
                "Both hands - tops and palms. Between fingers is worst. Now going up my forearms too.",
            
            "one hand|both hands":
                "Both hands. Right hand might be slightly worse - that's my dominant hand.",
            
            // SYMPTOMS
            "itchy|itch":
                "Extremely itchy. Constant. Keeps me up at night. I scratch until I bleed sometimes.",
            
            "painful|hurt":
                "Stings when the skin cracks. Burns with certain products.",
            
            "burning|sting":
                "Yes, burns especially when I'm working with hair chemicals.",
            
            // WORK RELATIONSHIP - KEY
            "work|job|occupation":
                "I'm a hairdresser. Been doing it for 10 years.",
            
            "better or worse with work|related to work":
                "Definitely worse when I work. Gets a little better on my days off or when I'm on vacation. Comes right back when I go back to work.",
            
            "vacation|time off":
                "I was off for a week last month visiting family. My hands almost cleared up. Within 3 days back at work, it was back.",
            
            "chemicals|products|what do you use":
                "Hair dye, bleach, perms, straightening treatments, shampoos, conditioners. My hands are in chemicals and water all day.",
            
            "which products|new products|anything change":
                "We switched to a new brand of hair dye about 4-5 months ago. That's around when this started. Could that be it?",
            
            "gloves|protection":
                "I wear gloves for color and perms but not for everything. Shampooing, I don't wear gloves. Hard to work with gloves all the time.",
            
            "wet work|water exposure":
                "My hands are wet constantly. Washing hair, rinsing. Wet all day long.",
            
            // TRIED
            "tried anything|treatment|cream|lotion":
                "Tons of lotions. Cortisone cream from the drugstore helped a little at first but not anymore. Antihistamines for the itch.",
            
            "helped|anything work":
                "The cortisone helped initially. Now nothing really works.",
            
            // HISTORY
            "allergies|allergic|eczema|history":
                "I had mild eczema as a kid. Grew out of it. No known allergies.",
            
            "skin problems before|similar before":
                "Not like this. Just occasional dry skin in winter.",
            
            "new exposure|anything new|home products":
                "Nothing new at home. Just the new hair dye brand at work.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Mild asthma as a kid, eczema as a kid. Both went away. Otherwise healthy.",
            
            "medications":
                "Just the over-the-counter cortisone and antihistamines for this rash.",
            
            "medication allergies":
                "No medication allergies.",
            
            // SOCIAL
            "smoke":
                "No.",
            
            "alcohol":
                "Socially. Weekends.",
            
            "live with|relationship":
                "Girlfriend. No pets.",
            
            // SEXUAL HISTORY - 32M in relationship
            "sexually active":
                "Yes, with my girlfriend.",
            
            "partner":
                "Just her. 2 years together.",
            
            "stis":
                "No.",
            
            // IMPACT
            "affect your work|impact":
                "Clients notice. It looks unprofessional. I'm embarrassed. And the itching distracts me.",
            
            // CONCERNS
            "worried about|concerns":
                "Can I keep doing my job? This is my career. And what if it spreads more?",
            
            "anything else":
                "I need to fix this. I can't afford to change careers. I've been a hairdresser for 10 years.",
        }
    };

    // ==========================================
    // CASE: Margaret Chen - Acute Angle-Closure Glaucoma
    // 65F, eye pain, halos, decreased vision
    // ==========================================
    
    const MARGARET_CHEN_AACG = {
        meta: {
            caseId: "aacg-eye-emergency",
            patientName: "Margaret Chen",
            age: 65,
            gender: "female",
            occupation: "Retired accountant",
            setting: "Emergency Department",
            diagnosis: "Acute angle-closure glaucoma",
            criticalFindings: [
                "Severe eye pain",
                "Decreased vision",
                "Halos around lights",
                "Nausea/vomiting",
                "Mid-dilated pupil, non-reactive",
                "Conjunctival injection",
                "Rock-hard eye on palpation"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*holding right eye, in obvious distress* My eye! Something's terribly wrong with my eye!",
            
            "how are you|how you doing":
                "*nauseated, holding eye* Terrible! My eye is killing me and I can barely see. I feel like I'm going to throw up.",
            
            "what brings you in|chief complaint|why here":
                "My right eye. Sudden severe pain about 2 hours ago. My vision got blurry, I started seeing halos around lights, then the pain got worse and I got nauseous. This is an emergency - something's very wrong.",
            
            "tell me more|can you explain":
                "I was watching TV and suddenly my right eye started hurting. At first I thought it was a headache. Then my vision got cloudy, I saw rainbow halos around the lamp. The pain got worse and worse. Now I can barely see out of that eye and I've thrown up twice.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "About 2 hours ago. Very sudden onset.",
            
            "sudden|gradual":
                "Completely sudden. One minute fine, next minute severe pain.",
            
            "getting worse|progression":
                "Got worse quickly over the first hour. The pain is intense now.",
            
            // EYE PAIN
            "describe the pain|what does it feel like":
                "Severe, deep pain in my eye and around it. Like pressure building up inside. Radiates to my forehead.",
            
            "where|which eye|location":
                "Right eye. And the right side of my head.",
            
            "how bad|severity|scale":
                "9 or 10. Worst eye pain I've ever had.",
            
            // VISION CHANGES
            "vision|seeing|can you see":
                "Very blurry in my right eye. Can barely make out shapes. Left eye is fine.",
            
            "halos|rings around lights":
                "Yes! Rainbow-colored halos around lights. The lamp, the overhead light - all have colored rings.",
            
            "when did vision change|vision when":
                "Around the same time as the pain. Vision got cloudy quickly.",
            
            // ASSOCIATED SYMPTOMS
            "nausea|vomiting":
                "Very nauseous. I've thrown up twice since this started.",
            
            "headache|head":
                "Yes, terrible headache on the right side. With the eye pain.",
            
            "tearing|watery eye":
                "Yes, my eye is watering a lot.",
            
            "redness|red eye":
                "I think it's red. Didn't really look in a mirror.",
            
            // TRIGGERS
            "what were you doing|trigger|before this":
                "Just watching TV in a dark room. Nothing unusual.",
            
            "dark room|dim light|dilated":
                "Yes, it was pretty dark. Just the TV light.",
            
            "new medications|eye drops|anything new":
                "I did take some cold medicine earlier today. My nose was stuffy.",
            
            "what cold medicine|which one":
                "Sudafed. The decongestant kind.",
            
            // EYE HISTORY
            "eye problems|vision problems|history":
                "I'm farsighted. Wear reading glasses. My eye doctor mentioned narrow angles once - I'm not sure what that means.",
            
            "narrow angles|told before|warned":
                "Yes, he said something about my angles being narrow and to be careful with certain medications. I forgot about that.",
            
            "glaucoma|family history":
                "My mother had glaucoma. Had to use drops her whole life.",
            
            "previous eye surgery|cataract":
                "No eye surgery.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure, mild diabetes. Otherwise healthy.",
            
            "medications":
                "Lisinopril, metformin. And that Sudafed today.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke":
                "Never.",
            
            "alcohol":
                "Wine occasionally.",
            
            "live with|family":
                "My husband. He drove me here. He's very worried.",
            
            // SEXUAL HISTORY - 65F married
            "sexually active":
                "Yes, with my husband.",
            
            "partner":
                "Just him. 40 years married.",
            
            "stis":
                "No, never.",
            
            // CONCERNS
            "worried about|concerns":
                "Am I going blind? Is this glaucoma? My mother went blind in one eye from glaucoma. I'm terrified.",
            
            "anything else":
                "Please help me. The pain is unbearable and I can't see. Please don't let me go blind.",
        }
    };

    // ==========================================
    // CASE: William Foster - Retinal Detachment
    // 58M, floaters, flashes, curtain vision loss
    // ==========================================
    
    const WILLIAM_FOSTER_RETINA = {
        meta: {
            caseId: "retinal-detachment",
            patientName: "William Foster",
            age: 58,
            gender: "male",
            occupation: "High school teacher",
            setting: "Emergency Department",
            diagnosis: "Retinal detachment",
            criticalFindings: [
                "Sudden increase in floaters",
                "Flashing lights",
                "Curtain/shadow over vision",
                "Painless vision loss",
                "Risk factors: myopia, age"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*anxious, touching right eye area* Doctor, something's wrong with my vision. There's like a curtain blocking part of what I see.",
            
            "how are you|how you doing":
                "Scared. I woke up with all these floaters, saw flashing lights, and now it's like there's a shadow over part of my vision.",
            
            "what brings you in|chief complaint|why here":
                "My right eye. Last night I started seeing a lot of floaters and flashing lights. This morning when I woke up, there's a dark shadow - like a curtain - over part of my vision in that eye. No pain, just this vision loss. I came right in.",
            
            "tell me more|can you explain":
                "Yesterday evening I noticed way more floaters than usual - like a swarm of gnats. Then I started seeing flashing lights in the corner of my eye. I thought maybe it would go away but this morning there's a dark area - like someone pulled a curtain down over part of my vision in my right eye. It's terrifying.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Floaters started yesterday evening. Flashes too. The curtain/shadow appeared this morning.",
            
            "sudden|gradual":
                "The floaters came on suddenly. The curtain seemed to grow - started small, now covers more.",
            
            "getting worse|progression":
                "Yes, the dark area seems to be getting bigger. An hour ago it was less. Now it covers more of my vision.",
            
            // VISUAL SYMPTOMS
            "floaters|describe floaters":
                "Usually I have a few floaters - normal for me. But yesterday suddenly there were tons of them. Like cobwebs or gnats floating in my vision. Way more than normal.",
            
            "flashes|lights|photopsia":
                "Flashing lights, like lightning bolts or sparkles, in the periphery of my right eye. They come and go.",
            
            "curtain|shadow|dark area":
                "It's like a dark curtain or shadow coming up from below. Or like a dark wave covering part of my vision.",
            
            "where|which part of vision":
                "Started in the lower part of my vision in my right eye. Now creeping up and to the side.",
            
            "both eyes|one eye|which eye":
                "Just my right eye. Left eye is completely normal.",
            
            "central vision|can you see straight ahead":
                "Central vision is still okay. The shadow is more in the periphery but getting closer to center.",
            
            // PAIN
            "pain|hurt|eye pain":
                "No pain at all. That's what's strange. No pain but significant vision loss.",
            
            // RISK FACTORS
            "nearsighted|myopia|glasses":
                "Yes, very nearsighted. I've worn thick glasses since childhood. Minus 8 in both eyes.",
            
            "eye surgery|cataract|lasik":
                "I had LASIK in my 30s. Made things better but I still need glasses for distance.",
            
            "eye injury|trauma|hit your eye":
                "No recent injury. No trauma.",
            
            "family history|retinal problems|family":
                "I don't think so. My father had cataracts but nothing like this.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure. Borderline high cholesterol. Otherwise healthy.",
            
            "diabetes":
                "No diabetes.",
            
            "medications":
                "Lisinopril for blood pressure. That's it.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke":
                "Quit 10 years ago.",
            
            "alcohol":
                "Socially. Not much.",
            
            "work|job":
                "High school history teacher. Need to see the board and read.",
            
            "married|family":
                "Married 25 years. Two college-age kids.",
            
            // SEXUAL HISTORY - 58M married
            "sexually active":
                "Yes, with my wife.",
            
            "partner":
                "Just her.",
            
            "stis":
                "No.",
            
            // CONCERNS
            "worried about|concerns":
                "Am I going blind in this eye? Can this be fixed? I need my vision for my job, my life... I'm terrified.",
            
            "anything else":
                "The shadow keeps growing. I feel like I'm watching my vision disappear in real-time. Please, is there something you can do?",
        }
    };

    // ==========================================
    // CASE: Brandon Walsh - Strep Pharyngitis
    // 16M, sore throat, fever, no cough
    // ==========================================
    
    const BRANDON_WALSH = {
        meta: {
            caseId: "strep-pharyngitis",
            patientName: "Brandon Walsh",
            age: 16,
            gender: "male",
            occupation: "High school student",
            setting: "Urgent Care",
            diagnosis: "Streptococcal pharyngitis",
            criticalFindings: [
                "Severe sore throat",
                "Fever",
                "Tonsillar exudates",
                "Tender anterior cervical nodes",
                "ABSENCE of cough (Centor criteria)",
                "Exposure history"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*swallowing painfully* Hey. My throat is killing me.",
            
            "how are you|how you doing":
                "*grimacing* Not good. It hurts so bad to swallow. Even spit.",
            
            "what brings you in|chief complaint|why here":
                "Really bad sore throat. Started yesterday. Got way worse today. I have a fever and it hurts so much to swallow that I haven't eaten. My mom made me come.",
            
            "tell me more|can you explain":
                "Yesterday I started feeling a scratchy throat. By last night it was really sore. Woke up today and it's awful - worst sore throat ever. My mom took my temperature and it was 102. I haven't been able to eat anything.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Yesterday. Got really bad overnight.",
            
            "sudden|gradual":
                "Started mild, got bad pretty fast.",
            
            // THROAT SYMPTOMS
            "describe|how bad":
                "Really painful. Sharp pain when I swallow. Even drinking water hurts.",
            
            "scale|severity|1-10":
                "Like an 8 when I swallow.",
            
            "one side|both sides|where":
                "Both sides but maybe the right is worse.",
            
            "swallowing|can you swallow|liquids":
                "Barely. It's so painful. I've been spitting instead of swallowing my spit.",
            
            "drooling|able to swallow saliva":
                "I can swallow but I don't want to. No drooling.",
            
            "voice|hoarse|talking":
                "Sounds normal I think. Just hurts.",
            
            // ASSOCIATED - CENTOR CRITERIA
            "fever|temperature":
                "Yeah, 102 this morning. I feel hot and have chills.",
            
            "cough|coughing":
                "No cough. Just the throat.",
            
            "runny nose|congestion|cold symptoms":
                "No runny nose or congestion. Just throat and fever.",
            
            "swollen glands|neck lumps|lymph nodes":
                "My mom said my neck felt swollen. It's tender when I touch it.",
            
            "where|which part of neck":
                "Here, under my jaw on both sides. Hurts when I press.",
            
            // OTHER SYMPTOMS
            "headache":
                "Yeah, my head hurts.",
            
            "body aches":
                "Feel achy all over.",
            
            "stomach|belly|abdominal pain":
                "A little stomachache. Not bad though.",
            
            "rash|skin":
                "No rash.",
            
            // EXPOSURE
            "sick contacts|anyone else sick|school":
                "A bunch of kids at school have been out sick. My friend Jake had strep last week.",
            
            "strep|strep going around|confirmed strep":
                "Yeah, Jake was diagnosed with strep. He was out for a few days.",
            
            // HISTORY
            "strep before|had strep|history":
                "I've had strep maybe twice before when I was younger. This feels the same.",
            
            "tonsils|tonsillectomy":
                "I still have my tonsils.",
            
            "allergies|drug allergies":
                "I'm allergic to amoxicillin - gives me a rash.",
            
            "what kind of rash|describe":
                "All over body rash. Got it when I was like 8.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Healthy usually. Just the strep before. No other problems.",
            
            "medications":
                "Nothing regular. Mom gave me Tylenol this morning for the fever.",
            
            // SOCIAL
            "smoke":
                "No.",
            
            "alcohol|drugs":
                "No. Well, maybe a beer occasionally but nothing regular.",
            
            "vape|e-cigarettes":
                "I've tried it but don't do it regularly.",
            
            "live with|family":
                "My parents and younger sister. She's 12. She's not sick.",
            
            // SEXUAL HISTORY - 16M
            "sexually active":
                "*looks embarrassed* Uh... no. Not really.",
            
            "girlfriend|boyfriend|partner":
                "I have a girlfriend but we haven't... you know...",
            
            "stis":
                "No.",
            
            // CONCERNS
            "worried about|concerns":
                "I just want to feel better. I have a game this weekend - I play basketball. Will I be okay by then?",
            
            "anything else":
                "Can I get antibiotics? Jake got some and felt better in like 2 days.",
        }
    };

    // ==========================================
    // CASE: Derek Thompson - Peritonsillar Abscess
    // 24M, severe sore throat, trismus, "hot potato" voice
    // ==========================================
    
    const DEREK_THOMPSON_PTA = {
        meta: {
            caseId: "peritonsillar-abscess",
            patientName: "Derek Thompson",
            age: 24,
            gender: "male",
            occupation: "Bartender",
            setting: "Emergency Department",
            diagnosis: "Peritonsillar abscess",
            criticalFindings: [
                "Severe unilateral throat pain",
                "Trismus (can't open mouth)",
                "Hot potato/muffled voice",
                "Uvula deviation",
                "Drooling",
                "Preceded by pharyngitis"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*muffled voice, drooling slightly, can barely open mouth* Hehh... muh throh... *gestures to throat*",
            
            "how are you|how you doing":
                "*muffled, struggling* Can'... bahly tahk... hurss...",
            
            "what brings you in|chief complaint|why here":
                "*muffled, painful speech* Throh... bahd... can' open mouh... can' swahow... *points to right side of throat*",
            
            "tell me more|can you explain":
                "*struggling to speak clearly* Sore throh... fih days... goh worss... now can' open mouh... talk funny... droolin... *wipes drool*",
            
            // TRANSLATOR/CLARIFICATION
            "understand|let me try|point or nod":
                "*nods* *will nod yes/no to questions*",
            
            // TIMELINE - YES/NO QUESTIONS
            "sore throat for several days|started as sore throat":
                "*nods yes*",
            
            "how many days|five days":
                "*holds up 5 fingers*",
            
            "got worse today|worse recently":
                "*nods vigorously* Yehs... muh worss today...",
            
            "treated|antibiotics|saw doctor":
                "*shakes head* Noh... jus' wait...",
            
            // SYMPTOMS
            "can you open your mouth|trismus":
                "*tries to open mouth, can barely get it open an inch* Can'... hurss...",
            
            "drooling|can't swallow saliva":
                "*nods, wipes drool* Can' swahow...",
            
            "one side worse|which side":
                "*points emphatically to right side*",
            
            "fever|hot|temperature":
                "*nods* Feverss... chihhs...",
            
            "ear pain|ear hurting":
                "*nods, points to right ear* Hurss too...",
            
            "breathing|hard to breathe":
                "*tilts hand side to side* Lih' hard... noh terribuh...",
            
            "voice changed|sounds different":
                "*nods* Tahk funny... know...",
            
            // EATING/DRINKING
            "eating|drinking|able to swallow":
                "*shakes head* Noh... can' eah... can' drink...",
            
            "last ate|last drank|when":
                "*holds up 2 fingers* Two day... lih' wah-er...",
            
            // EXPOSURE/HISTORY
            "sick before|cold|sore throat often":
                "*nods* Sore throhs a loh... this differeh...",
            
            "strep|tested":
                "*shakes head* Doh' know...",
            
            "smoke|smoking":
                "*nods slightly* Somehime... when drinkig...",
            
            "alcohol":
                "*nods* Barten'er... drink somehimes...",
            
            // PAST MEDICAL
            "medical problems|healthy":
                "*indicates mostly healthy*",
            
            "allergies|drug allergies":
                "*shakes head* Noh...",
            
            "medications":
                "*shakes head*",
            
            // SOCIAL
            "live with|someone with you":
                "*gestures to waiting room* Roommahe... drove me...",
            
            // SEXUAL HISTORY - difficult to answer verbally
            "sexually active":
                "*nods*",
            
            "partner|partners":
                "*holds up one finger* One... girlfrieh...",
            
            "stis":
                "*shakes head*",
            
            // CONCERNS
            "scared|worried":
                "*nods, looks frightened* Scareh... can' breahe righ... can' eah...",
            
            "anything else":
                "*points to throat desperately* Pleas hehp...",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['shingles-zoster'] = DOROTHY_ADAMS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['contact-dermatitis'] = JASON_MILLER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['aacg-eye-emergency'] = MARGARET_CHEN_AACG;
    window.COMPREHENSIVE_PATIENT_RESPONSES['retinal-detachment'] = WILLIAM_FOSTER_RETINA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['strep-pharyngitis'] = BRANDON_WALSH;
    window.COMPREHENSIVE_PATIENT_RESPONSES['peritonsillar-abscess'] = DEREK_THOMPSON_PTA;
    
    console.log('ReasonDx Part 19 (Shingles, Contact Derm, AACG, Retinal Detach, Strep, PTA) loaded');

})();
