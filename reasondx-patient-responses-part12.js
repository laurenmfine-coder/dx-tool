/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 12: Environmental and Occupational Exposure Cases
 * 
 * These cases emphasize environmental history-taking - a key ReasonDx feature
 * 
 * Cases:
 * 1. Lead Exposure (Painter) - 45M
 * 2. Asbestosis (Construction) - 68M  
 * 3. Silicosis (Sandblaster) - 52M
 * 4. Pesticide Toxicity (Farmer) - 38M
 * 5. Solvent Exposure (Auto Body) - 42M
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Miguel Rodriguez - Lead Exposure
    // 45M, painter with fatigue, abdominal pain, cognitive changes
    // ==========================================
    
    const MIGUEL_RODRIGUEZ = {
        meta: {
            caseId: "lead-exposure-painter",
            patientName: "Miguel Rodriguez",
            age: 45,
            gender: "male",
            occupation: "House painter (renovations)",
            setting: "Primary Care",
            diagnosis: "Occupational lead poisoning",
            criticalFindings: [
                "Fatigue, weakness",
                "Abdominal pain/constipation",
                "Memory/concentration problems",
                "Works with old paint (pre-1978 homes)",
                "No respiratory protection",
                "Wrist drop (if severe - motor neuropathy)"
            ],
            teachingPoints: [
                "Always ask about work with old paint",
                "Lead paint in pre-1978 homes",
                "Triad: abdominal pain, fatigue, neurological symptoms",
                "Ask about PPE use"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "Hi doc. I've been feeling really run down. Something's not right.",
            
            "how are you|how you doing":
                "Not good. Tired all the time, stomach hurts, and I can't think straight. My wife says I've been forgetful.",
            
            "what brings you in|chief complaint|why here":
                "I've had this combination of things - I'm exhausted, my stomach's been cramping, and I keep forgetting things. It's been getting worse over the last few months.",
            
            "tell me more|can you explain":
                "Started maybe 3-4 months ago. First just tired. Then stomach cramps and constipation. Now my wife says I'm not myself - forgetting things, irritable. I thought it was just stress but it's getting worse.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Few months ago. Maybe 3-4 months? Hard to pinpoint exactly.",
            
            "gradual|sudden":
                "Gradual. Crept up on me. But definitely worse now.",
            
            "all at once|which came first":
                "Tiredness first. Then the stomach issues. The memory stuff came later.",
            
            // FATIGUE
            "fatigue|tired|describe":
                "Bone-tired. Even after a good night's sleep. Can barely get through the day.",
            
            "affecting work|impact":
                "I'm slowing down at work. Takes longer to do jobs. Hard to focus.",
            
            // ABDOMINAL SYMPTOMS
            "stomach|abdominal pain|belly":
                "Crampy pain in my belly. Comes and goes. Sometimes pretty bad.",
            
            "where|location":
                "All over really. Middle of my belly mainly.",
            
            "nausea|vomiting":
                "Nauseous sometimes. Haven't thrown up.",
            
            "bowel movements|constipation|diarrhea":
                "Constipated. Used to be regular, now I might go every 3-4 days. Have to strain.",
            
            "appetite|eating":
                "Poor appetite. Lost maybe 10 pounds without trying.",
            
            "metallic taste|taste":
                "Actually yes, kind of a metallic taste sometimes. I thought it was from working around paint.",
            
            // NEUROLOGICAL
            "memory|forgetful|cognitive":
                "My memory is terrible. Forget what I was doing, forget names. My wife is really worried.",
            
            "concentration|focus|thinking":
                "Can't concentrate. My mind wanders. Hard to finish tasks.",
            
            "mood|irritable|personality":
                "My wife says I'm irritable. More short-tempered than usual. Not myself.",
            
            "headaches":
                "Yes, dull headaches pretty often.",
            
            "numbness|tingling|hands feet":
                "Some tingling in my fingers. Hands feel a little weak.",
            
            "weakness|weak|grip":
                "My grip seems weaker. Noticed it painting - harder to hold the brush.",
            
            "wrist|hand weakness|drop":
                "Actually, my wrists feel weak. Hard to extend my fingers fully sometimes.",
            
            // OCCUPATIONAL HISTORY - CRITICAL
            "work|job|occupation|what do you do":
                "House painter. Mostly renovation work on older homes.",
            
            "how long|years painting":
                "25 years now. Started when I was 20.",
            
            "old homes|what kind of houses|age":
                "Mostly older houses. Victorian, early 1900s. A lot of them have layers and layers of old paint.",
            
            "old paint|scraping|removing":
                "Yeah, I scrape a lot of old paint. Sand it down. Some of those houses have 10 coats of paint built up.",
            
            "pre-1978|lead paint|before 1978":
                "Most of the houses I work on were built before 1950 even. Very old paint.",
            
            "protection|mask|respirator|ppe":
                "I wear a paper dust mask sometimes. Honestly, not always. Gets hot and uncomfortable.",
            
            "what kind of mask|n95|real respirator":
                "Just the paper ones from the hardware store. Nothing fancy.",
            
            "gloves|skin protection":
                "Gloves for some stuff. Not always when scraping.",
            
            "dust|paint dust|chips":
                "Lots of dust when I sand and scrape. Gets everywhere. On my clothes, in my hair.",
            
            "eating at work|wash hands|hygiene":
                "I eat lunch on the job site sometimes. Try to wash my hands but not always possible.",
            
            "clothes|change clothes|bring home":
                "I wear my work clothes home. Change when I get there.",
            
            "other workers|coworkers|similar symptoms":
                "I work alone mostly. Don't know about others.",
            
            "ventilation|fresh air":
                "Usually working inside. Open windows when I can. Not always great airflow.",
            
            "recent job|current project":
                "Been working on a big Victorian house the last 3 months. Tons of old paint to scrape.",
            
            // ENVIRONMENTAL
            "live|home|live near":
                "Live in an older neighborhood. Our house was built in 1960.",
            
            "hobbies|do anything else|outside work":
                "I restore old furniture as a hobby. Strip and repaint old pieces.",
            
            "water|drinking water|pipes":
                "City water. Don't know about the pipes.",
            
            "children|kids|family exposure":
                "Two kids, 10 and 12. They're healthy.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Pretty healthy usually. High blood pressure, controlled.",
            
            "previous blood tests|lead level tested":
                "Never had my lead level tested. Didn't think about it.",
            
            "anemia|blood count":
                "Don't know. Haven't had blood work in a while.",
            
            // MEDICATIONS
            "medications|medicines":
                "Just lisinopril for blood pressure.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke|smoking":
                "I smoke. About half a pack a day.",
            
            "how long smoking":
                "Since I was 18. So almost 30 years.",
            
            "alcohol":
                "Beer on weekends. Nothing heavy.",
            
            "drugs|recreational":
                "No drugs.",
            
            "married|family":
                "Married 15 years. Two kids.",
            
            // SEXUAL HISTORY - 45M married
            "sexually active|having sex":
                "Yes, with my wife.",
            
            "partner":
                "Just my wife. 15 years together.",
            
            "contraception|condoms":
                "She had her tubes tied after our second kid.",
            
            "stis|std":
                "Never. Just been with my wife.",
            
            // CONCERNS
            "worried about|concerns":
                "I'm worried something's really wrong. The forgetting scares me. Am I losing my mind?",
            
            "lead|think it could be lead":
                "My wife looked stuff up online. She thinks it could be lead poisoning from work. Is that possible?",
            
            "anything else":
                "If it's from work, what do I do? I've been painting my whole life. It's all I know.",
        }
    };

    // ==========================================
    // CASE: Frank Sullivan - Asbestosis
    // 68M, construction/shipyard worker with progressive dyspnea
    // ==========================================
    
    const FRANK_SULLIVAN = {
        meta: {
            caseId: "asbestosis-construction",
            patientName: "Frank Sullivan",
            age: 68,
            gender: "male",
            occupation: "Retired shipyard worker/construction",
            setting: "Pulmonology Clinic",
            diagnosis: "Asbestosis",
            criticalFindings: [
                "Progressive dyspnea",
                "Dry cough",
                "Bibasilar crackles",
                "Clubbing (late sign)",
                "History of shipyard/insulation work",
                "Latency 20-40 years from exposure"
            ],
            teachingPoints: [
                "Ask about occupational history decades ago",
                "Shipyard, construction, insulation workers high risk",
                "Very long latency period",
                "Risk of mesothelioma"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*breathing somewhat labored* Hi doc. Hard to catch my breath these days.",
            
            "how are you|how you doing":
                "Not great. Can't breathe like I used to. Getting worse.",
            
            "what brings you in|chief complaint|why here":
                "Shortness of breath. It's been getting worse over the last couple years. Coughing too. My regular doctor sent me to you. Said I need lung specialist.",
            
            "tell me more|can you explain":
                "I've been getting more and more short of breath. Slowly over time. Thought it was just age but it keeps getting worse. Got a dry cough too. My doctor did a chest X-ray and said I need to see a lung specialist.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Hard to say exactly. Maybe noticed it 3-4 years ago. Gradually worse. Much worse this past year.",
            
            "gradual|sudden":
                "Very gradual. So slow I barely noticed at first. Now I can't do what I used to.",
            
            "getting worse|progression":
                "Definitely worse. Three years ago I could walk a mile. Now I can barely walk a block.",
            
            // DYSPNEA
            "shortness of breath|dyspnea|describe":
                "Get winded easy. Walking, climbing stairs. Even just talking sometimes.",
            
            "at rest|right now":
                "Not too bad sitting here. But any activity and I'm huffing.",
            
            "how far|exercise tolerance|walking":
                "Maybe half a block before I need to stop. Used to walk the dog for miles.",
            
            "lying flat|orthopnea|pillows":
                "I sleep propped up on two pillows. Flat doesn't feel right.",
            
            // COUGH
            "cough|coughing":
                "Yes, dry cough. Persistent. Doesn't bring anything up.",
            
            "productive|sputum|bringing anything up":
                "No, it's dry. Just an irritating cough.",
            
            "blood|hemoptysis|blood in sputum":
                "No blood.",
            
            "how long cough|when did cough start":
                "Maybe a couple years. Around when I noticed the breathing.",
            
            // ASSOCIATED
            "chest pain":
                "Not really pain. Just tightness when I breathe.",
            
            "fever|temperature|night sweats":
                "No fever. No night sweats.",
            
            "weight loss":
                "Maybe lost a few pounds. Appetite is okay though.",
            
            "fatigue|tired":
                "Yeah, tired. Don't have energy like I used to.",
            
            "leg swelling|edema":
                "A little. Ankles puffy at the end of the day.",
            
            // OCCUPATIONAL HISTORY - CRITICAL
            "work|job|what did you do|occupation":
                "Retired now. Worked in the shipyard for 30 years. Also did construction work.",
            
            "shipyard|what did you do there":
                "Insulation work mainly. Pipe fitting. Worked on boilers. Ship repair.",
            
            "insulation|what kind|materials":
                "Worked with all kinds of insulation. Wrapped pipes, boilers. That white fluffy stuff. Sometimes had to tear old insulation out.",
            
            "asbestos|ever work with asbestos|exposure":
                "Oh sure. Back in the day everything had asbestos. Didn't think anything of it then. It was everywhere.",
            
            "when|what years|how long ago":
                "Started in '72, retired in 2002. So 30 years. The heavy asbestos exposure was mostly in the 70s and 80s before they cracked down.",
            
            "how much|how heavy|describe exposure":
                "It was everywhere. We'd be covered in dust at the end of the day. White fibers floating in the air. We called it 'snow.'",
            
            "protection|mask|respirator":
                "Nothing back then. No masks, no protection. Nobody told us it was dangerous. We breathed it in every day.",
            
            "construction|what kind":
                "After the shipyard, did general construction. Demolition sometimes. Old buildings had asbestos everywhere.",
            
            "how long since exposure|last exposure":
                "Heavy exposure ended probably mid-90s when rules got stricter. So 25-30 years ago.",
            
            "coworkers|others sick|anyone else":
                "A lot of the guys I worked with have had problems. Some got lung cancer. One got mesothelioma and died. Scary stuff.",
            
            // ENVIRONMENTAL
            "home|house|live":
                "Older home but we've never disturbed any insulation.",
            
            "second-hand|family|bring home|clothes":
                "My wife used to wash my work clothes. All that dust. She's okay so far, thank God.",
            
            // SMOKING - SYNERGISTIC RISK
            "smoke|smoking|cigarettes":
                "Yeah, I smoked for 40 years. Quit 10 years ago.",
            
            "how much|pack years":
                "Pack a day. So 40 pack-years.",
            
            "when did you quit|stopped":
                "Quit when I turned 60. Doctor kept pushing me.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure. Had a heart stent 5 years ago. The lung stuff started after that.",
            
            "pulmonary function|breathing test|pft":
                "Did one recently. Doctor said it showed restrictive something. Numbers were low.",
            
            "ct scan|chest imaging":
                "They did a CT. Doctor looked concerned. That's why I'm here.",
            
            // MEDICATIONS
            "medications|medicines":
                "Aspirin, metoprolol, lisinopril, atorvastatin. For the heart stuff.",
            
            "inhalers|lung medicine":
                "No inhalers. Doctor wanted me to see specialist first.",
            
            "allergies":
                "No allergies.",
            
            // FAMILY
            "family history|family":
                "Dad died of lung cancer. He smoked too. Worked in factories.",
            
            // SOCIAL
            "alcohol":
                "Occasional beer. Nothing much.",
            
            "married|family":
                "Married 45 years. Three grown kids, grandkids.",
            
            // SEXUAL HISTORY - 68M married 45 years
            "sexually active|having sex":
                "Honestly, not much anymore. We're old. And I can't breathe.",
            
            "partner":
                "Just my wife. 45 years.",
            
            "stis|std":
                "No, never. Only been with her.",
            
            // CONCERNS
            "worried about|concerns":
                "I'm scared. A lot of guys I worked with got cancer. Am I going to get cancer?",
            
            "mesothelioma|cancer":
                "That's what got Tommy, guy I worked with for 20 years. Is that what I have?",
            
            "anything else":
                "I wish someone had told us back then how dangerous that stuff was. We didn't know. Now we're all paying for it.",
        }
    };

    // ==========================================
    // CASE: Carlos Mendez - Pesticide Toxicity
    // 38M, farmer with acute organophosphate symptoms
    // ==========================================
    
    const CARLOS_MENDEZ = {
        meta: {
            caseId: "pesticide-toxicity",
            patientName: "Carlos Mendez",
            age: 38,
            gender: "male",
            occupation: "Farm worker",
            setting: "Emergency Department",
            diagnosis: "Organophosphate poisoning",
            criticalFindings: [
                "SLUDGE/DUMBELS symptoms",
                "Salivation, lacrimation, urination",
                "Diaphoresis, diarrhea",
                "Miosis (pinpoint pupils)",
                "Bradycardia",
                "Recent pesticide application",
                "Inadequate PPE"
            ],
            teachingPoints: [
                "SLUDGE: Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis",
                "DUMBELS: Diarrhea, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Salivation",
                "Cholinergic crisis",
                "Treatment: Atropine + pralidoxime"
            ]
        },
        
        responses: {
            // OPENING - ACUTE PRESENTATION
            "hello|hi|good morning": 
                "*sweating profusely, drooling* I don't feel good... *wiping eyes* ...something's wrong...",
            
            "how are you|how you doing":
                "*short phrases, sweating* Sick... very sick... stomach cramping... can't stop sweating...",
            
            "what brings you in|chief complaint|why here":
                "*drooling, wiping saliva* Started after spraying... fields... *breathing heavy* ...stomach cramps... sweating... eyes won't stop watering...",
            
            "tell me more|can you explain":
                "Was spraying pesticide... this morning... started feeling sick maybe 2 hours after... stomach cramps... had diarrhea... sweating like crazy... eyes tearing up... couldn't stop drooling...",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Few hours ago... started maybe 2 hours after spraying... getting worse...",
            
            "what were you doing|what happened":
                "Spraying pesticides... on the crops... backpack sprayer... some got on me...",
            
            "what pesticide|what were you spraying|name":
                "It's called... *thinks* ...Malathion maybe? Something like that. Boss gave it to us.",
            
            "sudden|gradual":
                "Came on pretty quick... first just felt off... then got bad fast...",
            
            // CHOLINERGIC SYMPTOMS - CLASSIC
            "sweating|diaphoresis":
                "*wiping forehead* Can't stop sweating... soaked through my shirt...",
            
            "eyes|tearing|watering":
                "*blinking repeatedly* Eyes won't stop watering... burning too...",
            
            "drooling|salivation|saliva":
                "*wipes mouth* So much spit... can't swallow it all...",
            
            "stomach|abdominal|cramping":
                "Terrible cramps... *holds stomach* ...twisting...",
            
            "diarrhea|bowel":
                "Had diarrhea... three or four times already... couldn't control it...",
            
            "urination|peeing|bladder":
                "Feel like I have to pee constantly... had a few accidents...",
            
            "nausea|vomiting":
                "Threw up twice on the way here... still nauseous...",
            
            "breathing|breath|chest":
                "Chest feels tight... hard to breathe... wheezy...",
            
            "wheezing|secretions":
                "Lots of stuff in my chest... gurgling...",
            
            "vision|blurry|eyes":
                "Vision blurry... can't see well... everything's dim...",
            
            "muscles|twitching|fasciculations":
                "My muscles are twitching... see? *shows arm* ...jumping around...",
            
            "weakness|weak":
                "Feel very weak... legs shaky...",
            
            "headache":
                "Bad headache... pounding...",
            
            "confusion|thinking|dazed":
                "Hard to think straight... foggy...",
            
            // EXPOSURE DETAILS - CRITICAL
            "exposure|how did it happen|how exposed":
                "Spraying with backpack... some splashed on me... wind blew it back... probably breathed some in too...",
            
            "how much|amount|quantity":
                "Don't know exactly... been spraying all morning... mixed a full tank...",
            
            "skin|got on skin|contact":
                "Yes, on my arms and chest... clothes got wet with it...",
            
            "wash|did you wash|decontaminate":
                "No... came straight here when I got sick...",
            
            "clothes|change clothes|still wearing":
                "*looks down* Still wearing work clothes... didn't have time to change...",
            
            "protection|ppe|mask|gloves":
                "Just regular clothes... no mask... no gloves... boss said it was safe...",
            
            "supposed to use|proper equipment":
                "I don't know... nobody told us we needed special stuff...",
            
            "others|coworkers|anyone else sick":
                "My friend Juan was spraying too... he started feeling sick too... he's outside...",
            
            "ventilation|outdoors":
                "Outside in the field... but it was still... no wind... then wind came and blew it back at us...",
            
            // WORK
            "work|job|what do you do":
                "Farm worker... picking, spraying... whatever they need...",
            
            "how long|years working":
                "5 years on this farm... sprayed many times before...",
            
            "sick before|happened before":
                "Never this bad... sometimes felt a little sick after spraying but nothing like this...",
            
            "training|told how to use":
                "Just showed us how to mix and spray... nobody said about protection...",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Healthy usually... no problems...",
            
            "allergies":
                "No allergies.",
            
            "medications|medicines":
                "No medicines...",
            
            // SOCIAL
            "smoke|smoking":
                "No smoking...",
            
            "alcohol":
                "Sometimes beer... not today...",
            
            "drugs":
                "No drugs...",
            
            "married|family":
                "Married... two kids... 8 and 5...",
            
            // SEXUAL HISTORY - 38M married
            "sexually active":
                "Yes... my wife...",
            
            "partner":
                "Only my wife...",
            
            "condoms|contraception":
                "She has IUD...",
            
            "stis|std":
                "No...",
            
            // CONCERNS
            "worried about|concerns":
                "Am I going to be okay?... Am I poisoned?... Will I die?...",
            
            "anything else":
                "Please help me... I feel so sick... my friend too... please check on him...",
        }
    };

    // ==========================================
    // CASE: Tony Martinelli - Solvent Exposure
    // 42M, auto body worker with headaches and confusion
    // ==========================================
    
    const TONY_MARTINELLI = {
        meta: {
            caseId: "solvent-exposure-auto",
            patientName: "Tony Martinelli",
            age: 42,
            gender: "male",
            occupation: "Auto body painter",
            setting: "Occupational Health",
            diagnosis: "Chronic solvent neurotoxicity",
            criticalFindings: [
                "Chronic headaches",
                "Memory/cognitive problems",
                "Fatigue",
                "Mood changes",
                "Works with paint thinners/solvents",
                "Poor ventilation",
                "Symptoms worse at work"
            ],
            teachingPoints: [
                "Solvents cause CNS toxicity",
                "Ask about ventilation",
                "Symptoms often worse at work, better on vacation",
                "Painter's encephalopathy is chronic"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "Hey doc. Something's not right with me. Can't think straight anymore.",
            
            "how are you|how you doing":
                "Not good. Headaches all the time, can't remember things. My wife sent me here.",
            
            "what brings you in|chief complaint|why here":
                "Headaches, memory problems, I'm not myself. Been going on for a while. My wife says I'm different - forgetful, moody. I thought it was just stress but something's wrong.",
            
            "tell me more|can you explain":
                "I get these headaches almost every day. I'm tired all the time. I forget things I should remember. I get dizzy sometimes. My wife says I've changed - I'm irritable, not as sharp. It's gotten worse over the last year or two.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Hard to say exactly. Maybe 2 years? Got worse in the last year. So gradual I didn't notice at first.",
            
            "gradual|sudden":
                "Very gradual. Wife noticed before I did.",
            
            "getting worse|progression":
                "Definitely worse. My memory is really bad now. I used to be sharp.",
            
            // HEADACHES
            "headache|describe headache":
                "Dull headache, kind of all over. Pretty much every day by the end of work.",
            
            "when|timing|pattern":
                "Usually starts at work, gets worse through the day. Better on weekends sometimes.",
            
            "severity|how bad":
                "Maybe a 5 or 6 most days. Sometimes worse.",
            
            "better on days off|weekends|vacation":
                "Actually yeah. When I took vacation last month I felt a lot better. Came back to work and it started again.",
            
            // COGNITIVE
            "memory|forgetful|cognitive":
                "My memory is shot. I forget conversations, forget what I'm doing. Have to write everything down.",
            
            "concentration|focus":
                "Hard to focus. Mind wanders. Can't concentrate like I used to.",
            
            "word finding|trouble speaking":
                "Sometimes I can't find the right word. It's frustrating. I know I know it but it won't come.",
            
            "confusion|disoriented":
                "Get confused sometimes. Especially at work. Start to feel foggy.",
            
            // NEUROLOGICAL
            "dizziness|dizzy|lightheaded":
                "Get lightheaded at work. Especially in the paint booth.",
            
            "numbness|tingling":
                "Some tingling in my fingers. Comes and goes.",
            
            "coordination|clumsy":
                "Maybe a bit clumsier than I used to be. Drop things more.",
            
            // MOOD
            "mood|irritable|emotional":
                "I'm more irritable. Snap at my wife and kids. I feel bad about it but can't control it.",
            
            "depression|sad|down":
                "Maybe a little. Everything feels harder than it should.",
            
            "sleep|sleeping|insomnia":
                "Sleep isn't great. Don't feel rested.",
            
            // OCCUPATIONAL - CRITICAL
            "work|job|what do you do":
                "Auto body painter. Paint cars all day.",
            
            "how long|years doing this":
                "20 years in the business. Same shop for 15.",
            
            "what products|chemicals|materials":
                "Paint, primer, clear coat. Lots of thinners, solvents, hardeners. Mix my own paint.",
            
            "solvents|thinners|what kinds":
                "Lacquer thinner, acetone, MEK. Whatever the job needs. Strong stuff.",
            
            "how much|exposure|how often":
                "All day, every day. I'm in the booth most of my shift. 8-10 hours.",
            
            "ventilation|air flow|booth":
                "The booth has fans but they don't work great. Been meaning to get them fixed. Gets pretty hazy in there.",
            
            "smell|fumes|notice":
                "Oh yeah, strong solvent smell. You get used to it. Sometimes makes me lightheaded.",
            
            "mask|respirator|protection":
                "I'm supposed to wear a respirator but honestly I don't always. It's hot, uncomfortable. Hard to breathe through it.",
            
            "when do you wear it|how often mask":
                "Maybe half the time. Less on quick jobs. I know I should be better about it.",
            
            "fit tested|proper fit|cartridges":
                "I don't know. It's just a mask I bought. Never got fit tested.",
            
            "skin contact|skin protection":
                "Get stuff on my hands all the time. Solvents, paint. Wash it off but it's hard to avoid.",
            
            "eat at work|hygiene":
                "Sometimes eat lunch in the shop. Maybe not the best idea.",
            
            "coworkers|others sick|anyone else":
                "Some of the other guys complain about headaches too. Figured it was just part of the job.",
            
            // ENVIRONMENTAL
            "home|home exposure":
                "I do some painting at home too. Side jobs. Garage work.",
            
            "ventilation at home|garage":
                "Just my garage. Not much ventilation.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Nothing major. Some high blood pressure.",
            
            "head injury|trauma|concussion":
                "No head injuries.",
            
            "medications":
                "Lisinopril for blood pressure.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke|smoking":
                "Quit about 5 years ago. Smoked for 15 years before that.",
            
            "alcohol|drinking":
                "Few beers a week. Nothing crazy.",
            
            "drugs|recreational":
                "Nothing now. Some stuff when I was young.",
            
            "married|family":
                "Married, three kids. Wife's worried about me. That's why I'm here.",
            
            // SEXUAL HISTORY - 42M married
            "sexually active|having sex":
                "Yeah, with my wife.",
            
            "partner":
                "Just my wife. 15 years.",
            
            "condoms|contraception":
                "She's on the pill.",
            
            "stis|std":
                "No, never.",
            
            // CONCERNS
            "worried about|concerns":
                "I'm worried I'm losing my mind. Is it permanent? Will it get worse?",
            
            "think it's from work|work related":
                "My wife thinks it's from the chemicals at work. Is that possible? I've been doing this 20 years.",
            
            "anything else":
                "I need to keep working. I have a family. But if it's making me sick... I don't know what else I can do.",
        }
    };

    // ==========================================
    // CASE: Wayne Jackson - Silicosis
    // 52M, sandblaster with progressive dyspnea
    // ==========================================
    
    const WAYNE_JACKSON = {
        meta: {
            caseId: "silicosis-sandblaster",
            patientName: "Wayne Jackson",
            age: 52,
            gender: "male",
            occupation: "Sandblaster/stone worker",
            setting: "Pulmonology Clinic",
            diagnosis: "Silicosis",
            criticalFindings: [
                "Progressive dyspnea",
                "Dry cough",
                "History of sandblasting/stone cutting",
                "Silica dust exposure",
                "Nodular pattern on imaging",
                "Increased TB risk"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*some labored breathing* Hey there. Doc says my lungs aren't right.",
            
            "how are you|how you doing":
                "Been better. Can't breathe like I used to. Coughing a lot.",
            
            "what brings you in|chief complaint|why here":
                "My regular doctor saw something on my chest X-ray. Said I need to see a specialist. I've been getting short of breath for a couple years. Thought it was just getting older.",
            
            "tell me more|can you explain":
                "I've been getting more winded over the years. Can't do what I used to. Stairs are hard. Have this dry cough that won't go away. My doctor did an X-ray for something else and said my lungs look abnormal.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "The breathing problems? Maybe 3-4 years now. Got worse over time.",
            
            "gradual|sudden":
                "Very gradual. So slow I kept making excuses. Getting older, out of shape, whatever.",
            
            "getting worse|progression":
                "Definitely worse. Used to be able to work a full day. Now I'm wiped out.",
            
            // DYSPNEA
            "shortness of breath|dyspnea|describe":
                "Get winded easy. Walking across the shop is hard. Forget about stairs.",
            
            "at rest|right now":
                "Not too bad sitting here. Activity is the problem.",
            
            "exercise tolerance|how far":
                "Maybe walk a couple hundred yards before needing to stop. Used to run after my kids.",
            
            // COUGH
            "cough|coughing":
                "Yeah, dry cough. Had it for years. Thought it was just from the dust.",
            
            "productive|sputum":
                "Not much comes up. Maybe a little gray stuff sometimes.",
            
            "blood|hemoptysis":
                "No blood.",
            
            // ASSOCIATED
            "chest pain|chest":
                "Some tightness. No real pain.",
            
            "fever|temperature":
                "No fever.",
            
            "weight loss":
                "Lost some weight. Maybe 15 pounds over the last year.",
            
            "night sweats":
                "Maybe some. Hard to say.",
            
            // OCCUPATIONAL - CRITICAL
            "work|job|occupation":
                "Sandblaster. Also work with stone - cutting, grinding. Construction too.",
            
            "how long|years":
                "25 years or so in this kind of work. Started right out of high school.",
            
            "sandblasting|what do you blast":
                "Metal parts, stone, concrete. Cleaning things up, prep work. Also work in stone yards cutting granite.",
            
            "silica|sand|what material":
                "Silica sand mostly for blasting. Quartz. The stone work - granite, marble. All dusty stuff.",
            
            "dust|how much|exposure":
                "Tons of dust. You can barely see sometimes. Like a fog.",
            
            "protection|mask|respirator":
                "We have masks. Don't always wear them. Hot and hard to breathe through.",
            
            "when wear|how often":
                "Maybe on the really dusty jobs. Not always.",
            
            "what kind of mask|type":
                "Paper masks mostly. Sometimes a rubber one with filters.",
            
            "fit tested|proper respirator":
                "I don't think so. Just grab one from the box.",
            
            "ventilation|exhaust|outdoor":
                "Some jobs outside, some in shops. The shops get pretty dusty. Ventilation isn't great.",
            
            "others|coworkers|anyone else sick":
                "Couple guys I've worked with have lung problems. Some have retired early because of it.",
            
            "employer|told about risks":
                "Not really. Just part of the job.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure. That's about it.",
            
            "tb|tuberculosis|tested":
                "Never had TB that I know of. Don't know if I've been tested.",
            
            // MEDICATIONS
            "medications|medicines":
                "Just blood pressure medicine. Amlodipine.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke|smoking":
                "I smoke. Pack a day. I know, I know.",
            
            "how long|pack years":
                "Started at 18. So 34 years. 34 pack-years.",
            
            "quit|tried to quit":
                "Tried a few times. Can't seem to kick it.",
            
            "alcohol":
                "Beer. Maybe a six-pack on weekends.",
            
            "married|family":
                "Divorced. Live alone. Kids are grown.",
            
            // SEXUAL HISTORY - 52M divorced
            "sexually active|having sex":
                "Not really. Haven't dated much since the divorce.",
            
            "partner":
                "No one right now.",
            
            "stis|std":
                "No, never had any problems.",
            
            // CONCERNS
            "worried about|concerns":
                "I'm scared. The look on my doctor's face when she saw the X-ray... Is this serious?",
            
            "what did x-ray show":
                "She said there were spots on my lungs. Nodules. Wanted me to see a specialist right away.",
            
            "anything else":
                "I just want to know what I'm dealing with. Is it cancer? Am I going to be okay?",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['lead-exposure-painter'] = MIGUEL_RODRIGUEZ;
    window.COMPREHENSIVE_PATIENT_RESPONSES['asbestosis-construction'] = FRANK_SULLIVAN;
    window.COMPREHENSIVE_PATIENT_RESPONSES['pesticide-toxicity'] = CARLOS_MENDEZ;
    window.COMPREHENSIVE_PATIENT_RESPONSES['solvent-exposure-auto'] = TONY_MARTINELLI;
    window.COMPREHENSIVE_PATIENT_RESPONSES['silicosis-sandblaster'] = WAYNE_JACKSON;
    
    console.log('ReasonDx Part 12 (Environmental/Occupational Exposures) loaded');

})();
