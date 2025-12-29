/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 10: Respiratory and Neuro Cases
 * 
 * Cases:
 * 1. Asthma Exacerbation - 24F
 * 2. COPD Exacerbation - 67M
 * 3. Acute Stroke - 72M
 * 4. BPPV/Vertigo - 55F
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Brittany Torres - Asthma Exacerbation
    // 24F, wheezing, shortness of breath
    // ==========================================
    
    const BRITTANY_TORRES = {
        meta: {
            caseId: "asthma-exacerbation",
            patientName: "Brittany Torres",
            age: 24,
            gender: "female",
            occupation: "Graduate student",
            setting: "Emergency Department",
            diagnosis: "Acute asthma exacerbation",
            criticalFindings: [
                "Wheezing and dyspnea x 2 days",
                "Using accessory muscles",
                "Can't complete sentences",
                "Trigger: URI, cold weather",
                "Increased rescue inhaler use (not helping)",
                "History of ER visits for asthma"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*wheezing audibly, speaking in short phrases* Hi... can't... breathe well...",
            
            "how are you|how you doing":
                "*short phrases between breaths* Not good... asthma... attack...",
            
            "what brings you in|chief complaint|why here":
                "*speaking effortfully* Asthma flare... *wheeze* ...started two days ago... *wheeze* ...getting worse... inhaler not working...",
            
            "tell me more|can you explain":
                "*speaking in short bursts* Had a cold... started wheezing... used inhaler... keeps getting worse... can barely breathe now...",
            
            // TIMELINE
            "when did this start|when start|how long":
                "*short breaths* Two days... started with a cold... then wheezing...",
            
            "what triggered it|trigger|cause":
                "Cold... upper respiratory... also it's been cold outside... cold air...",
            
            "worse|progression|getting worse":
                "Much worse... yesterday could talk... today can barely... *wheeze* ...breathe...",
            
            // SYMPTOMS
            "shortness of breath|dyspnea|breathing":
                "*nodding* Very short... of breath... hard to get air... in...",
            
            "wheeze|wheezing|chest sounds":
                "*points to chest* Hear it... tight... whistling...",
            
            "cough|coughing":
                "Yes... dry cough... makes it... *coughs* ...worse...",
            
            "chest tightness|tight":
                "Very tight... like a band... around chest...",
            
            "can speak in sentences|full sentences":
                "*shakes head* Can't... only... few words...",
            
            "fever|temperature":
                "Maybe low... grade... felt warm...",
            
            "sputum|bringing anything up":
                "Not much... little clear... mucus...",
            
            // RESCUE INHALER USE
            "inhaler|rescue inhaler|albuterol|using":
                "Used it... maybe 10 times... today... not helping...",
            
            "how often|how many puffs":
                "Every hour... 2-4 puffs... each time... barely helps...",
            
            "nebulizer|have nebulizer":
                "Don't have... nebulizer at home...",
            
            // PAST ASTHMA HISTORY
            "asthma history|how long had asthma":
                "Since... childhood... usually controlled...",
            
            "hospitalized|icu|intubated":
                "ER twice... before... never ICU... never intubated...",
            
            "how often flares|frequency":
                "Maybe once... twice a year... this is bad one...",
            
            "usual triggers|what triggers asthma":
                "Colds... allergies... cold air... exercise sometimes...",
            
            // MEDICATIONS
            "medications|medicines|what do you take":
                "Albuterol inhaler... supposed to use Flovent... *wheeze* ...haven't been good... about it...",
            
            "controller|flovent|daily inhaler":
                "Flovent... supposed to be daily... ran out... few weeks ago...",
            
            "why ran out|why not refill":
                "Busy... with school... kept forgetting... I know... stupid...",
            
            "allergies":
                "Penicillin... get hives...",
            
            // PAST MEDICAL
            "medical history|other conditions":
                "Just asthma... and allergies... otherwise healthy...",
            
            // SOCIAL
            "smoke|smoking":
                "*shakes head* No... never...",
            
            "vape|e-cigarettes":
                "No...",
            
            "live with|living situation":
                "Apartment... with roommate... she has a cat...",
            
            "cat|pet allergies":
                "Allergic... to cats... but she had it... before I moved in...",
            
            "school|work":
                "Grad student... biology...",
            
            // SEXUAL HISTORY - 24F
            "sexually active|having sex":
                "*brief nod* Yes... boyfriend...",
            
            "partner":
                "One boyfriend... two years...",
            
            "contraception|birth control":
                "IUD... Mirena...",
            
            "condoms":
                "No... just IUD... we're exclusive...",
            
            "stis|std":
                "No... both tested...",
            
            "pregnant|could you be pregnant":
                "No... IUD... and period... last week...",
            
            // CONCERNS
            "worried about|concerns":
                "Scared... can't breathe... need help...",
        }
    };

    // ==========================================
    // CASE: Harold Jenkins - COPD Exacerbation
    // 67M, increased dyspnea, productive cough
    // ==========================================
    
    const HAROLD_JENKINS = {
        meta: {
            caseId: "copd-exacerbation",
            patientName: "Harold Jenkins",
            age: 67,
            gender: "male",
            occupation: "Retired factory worker",
            setting: "Emergency Department",
            diagnosis: "Acute COPD exacerbation",
            criticalFindings: [
                "Increased dyspnea over 3 days",
                "Increased sputum production (purulent)",
                "Change in sputum color (green)",
                "Heavy smoking history (50 pack-years)",
                "On home oxygen",
                "Multiple prior exacerbations"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*pursed lip breathing, on oxygen* Hey doc... *labored* ...COPD acting up again.",
            
            "how are you|how you doing":
                "*struggling* Can't breathe... worse than usual... lot of crud...",
            
            "what brings you in|chief complaint|why here":
                "COPD flare. Happens every winter. More short of breath, coughing up green stuff. Oxygen not helping like it should.",
            
            "tell me more|can you explain":
                "Started a few days ago. First just more tired. Then more short of breath. Then the phlegm turned green. Now I can barely make it to the bathroom.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "About 3 days ago. Gradual at first. Then really hit me yesterday.",
            
            "what triggered|trigger|cause":
                "I think I caught something. Grandkid was sick last week when I saw him.",
            
            "worse|progression":
                "Getting worse every day. Today's the worst. My wife made me come in.",
            
            // DYSPNEA
            "shortness of breath|dyspnea|breathing":
                "Much worse. Usually I can walk around the house okay. Now can barely get to the bathroom.",
            
            "at rest|right now":
                "Short of breath even sitting here. Even with my oxygen turned up.",
            
            "oxygen|home oxygen|how much":
                "Usually on 2 liters. Turned it up to 4 today. Still can't breathe.",
            
            "when did you start oxygen|how long on O2":
                "Started maybe 3 years ago. 2 liters at rest, more when I walk.",
            
            // COUGH/SPUTUM
            "cough|coughing":
                "Yes, lots of coughing. Productive.",
            
            "sputum|phlegm|bringing up":
                "Lots of it. Thick, green. More than usual.",
            
            "color|what color|changed":
                "Usually it's white or clear. Now it's green. That's how I know it's bad.",
            
            "how much|amount":
                "Maybe half a cup a day. More than my baseline.",
            
            "blood|bloody|hemoptysis":
                "No blood. Just green gunk.",
            
            // ASSOCIATED
            "fever|temperature":
                "Maybe a little. Felt warm yesterday. 99 something.",
            
            "chills":
                "Some chills last night.",
            
            "chest pain|chest":
                "Tight. Not pain exactly. Just tight and hard to breathe.",
            
            "wheezing|wheeze":
                "Yeah, more wheezing than usual.",
            
            "leg swelling|edema":
                "A little. Ankles are puffy. Happens sometimes.",
            
            // COPD HISTORY
            "copd history|how long|when diagnosed":
                "Diagnosed maybe 15 years ago. Been getting worse over the years.",
            
            "exacerbations|flares|how often":
                "Two or three times a year usually. More in winter.",
            
            "hospitalized|hospital|admitted":
                "Been admitted a few times. Last time was about a year ago.",
            
            "icu|intubated|ventilator":
                "Never been on a ventilator. Came close once. Don't want that.",
            
            "baseline|usually|normal for you":
                "Usually I can walk around the house, do light stuff. Get winded with stairs. Use oxygen when I walk.",
            
            "pulmonologist|lung doctor":
                "Dr. Patterson. Haven't seen him in about 6 months.",
            
            // MEDICATIONS
            "medications|medicines|inhalers":
                "Bunch of inhalers. Spiriva, Advair, albuterol for rescue. Oxygen. Prednisone at home for flares.",
            
            "spiriva|advair|using them":
                "Yes, use them every day. Haven't missed.",
            
            "prednisone|steroids|started steroids":
                "Started my emergency prednisone 2 days ago. Not helping enough.",
            
            "antibiotics|z-pack":
                "Don't have any at home. Usually they give me some when I flare.",
            
            "other medications":
                "Lisinopril for blood pressure. That's about it.",
            
            "allergies":
                "Sulfa drugs. Get a rash.",
            
            // SMOKING
            "smoke|smoking|cigarettes":
                "Quit 10 years ago. Smoked for 40 years before that. Pack and a half a day.",
            
            "pack years":
                "Let's see... 40 years, pack and a half... that's like 60 pack-years? A lot.",
            
            "still smoking|using anything":
                "No, quit cold turkey after my first hospitalization. Haven't touched one since.",
            
            // SOCIAL
            "alcohol":
                "Occasional beer. Not much anymore.",
            
            "live with|living situation":
                "Wife and I. She takes care of me. She's here somewhere.",
            
            "work|occupation":
                "Retired factory worker. Used to work with chemicals. Probably didn't help my lungs.",
            
            // SEXUAL HISTORY - 67M married
            "sexually active|having sex":
                "Honestly, not much. Too short of breath most of the time. Can't do what I used to.",
            
            "partner":
                "My wife. 42 years married.",
            
            "condoms|contraception":
                "No, she went through menopause ages ago.",
            
            "stis|std":
                "Never. Just been with my wife.",
            
            // CONCERNS
            "worried about|concerns":
                "I don't want to be on a ventilator. I've told my family. If it gets that bad, just let me go.",
            
            "advance directive|code status":
                "We've talked about it. I'm DNI - do not intubate. My wife knows. It's in my file.",
            
            "anything else":
                "Just help me breathe better. I'm not ready to give up yet. But I don't want machines.",
        }
    };

    // ==========================================
    // CASE: William Patterson - Acute Stroke
    // 72M, sudden onset weakness, speech difficulty
    // ==========================================
    
    const WILLIAM_PATTERSON = {
        meta: {
            caseId: "acute-stroke",
            patientName: "William Patterson",
            age: 72,
            gender: "male",
            occupation: "Retired banker",
            setting: "Emergency Department",
            diagnosis: "Acute ischemic stroke (MCA territory)",
            criticalFindings: [
                "Sudden onset right-sided weakness",
                "Slurred speech/dysarthria",
                "Facial droop (right)",
                "Symptom onset within 3 hours (tPA candidate)",
                "Multiple vascular risk factors",
                "Atrial fibrillation (embolic source)"
            ]
        },
        
        responses: {
            // OPENING - Wife provides much of the history
            "hello|hi|good morning": 
                "*right facial droop, slurred speech* Heh... hewwo...",
            
            "how are you|how you doing":
                "*slurred, frustrated* Tawking... hawd... awm... not wight...",
            
            "what brings you in|chief complaint|why here":
                "*wife interjects* His face dropped and he can't move his right arm. It happened suddenly about an hour ago. I called 911 right away.",
            
            "tell me more|can you explain|what happened":
                "*wife* He was eating breakfast. I heard a clatter and came in - he'd dropped his coffee cup. His face was drooping on the right side and he couldn't lift his right arm. He was trying to talk but it was all slurred.",
            
            "sir can you tell me|mr patterson":
                "*struggling* I... was... eating... and then... *gestures to right side* ...won't work...",
            
            // TIMELINE - CRITICAL FOR TPA
            "when did this start|when exactly|what time":
                "*wife* It was about an hour ago. I looked at the clock - it was 7:45am. I called 911 immediately. We got here fast.",
            
            "was he normal before|last known well":
                "*wife* He was completely fine at 7:30 when I gave him his breakfast. Talking normally. Moving fine. Then 15 minutes later - this.",
            
            "sudden or gradual|how did it start":
                "*wife* Completely sudden. One minute he was fine, the next minute his face was drooping and he couldn't move his arm.",
            
            "gotten worse|better or worse|progression":
                "*wife* About the same since it started. Maybe slightly worse. He seems more confused now.",
            
            // SYMPTOMS - STROKE SPECIFIC
            "weakness|arm|leg|which side":
                "*patient lifts left arm, right arm barely moves* Wight side... won't move...",
            
            "can you lift your right arm|raise arm":
                "*tries, arm drifts down immediately* ...can't...",
            
            "leg|right leg|can you move your leg":
                "*moves right leg weakly* A wittle... not normal...",
            
            "face|facial droop|smile":
                "*attempts smile, right side of face doesn't move* ...see?",
            
            "speech|talking|words|dysarthria":
                "*wife* His speech is slurred. He knows what he wants to say but it comes out wrong. He gets frustrated.",
            
            "understanding|comprehension|follow commands":
                "*wife* He seems to understand me. He nods yes and no appropriately. He just can't get the words out right.",
            
            "vision|seeing|visual":
                "*patient* Maybe... hawd to tell... wight side... bwurry?",
            
            "headache|head pain":
                "*patient shakes head* No... no headache...",
            
            "dizziness|vertigo":
                "*shakes head* No...",
            
            "nausea|vomiting":
                "*shakes head* No...",
            
            "seizure|shaking|convulsions":
                "*wife* No seizure. No shaking. Just suddenly couldn't move his right side and his speech was slurred.",
            
            "loss of consciousness|pass out|black out":
                "*wife* No, he was awake the whole time. Didn't pass out.",
            
            "numbness|tingling|sensation":
                "*patient* ...wight side... feels weird... tingly...",
            
            // RISK FACTORS - CRITICAL
            "medical history|conditions|past medical":
                "*wife* High blood pressure, atrial fibrillation - that's an irregular heartbeat, high cholesterol, diabetes. He's on blood thinners for the AFib.",
            
            "atrial fibrillation|afib|irregular heartbeat":
                "*wife* Yes, diagnosed a few years ago. He's supposed to be on blood thinners for it.",
            
            "blood thinners|anticoagulation|what kind|taking":
                "*wife* Eliquis. He takes it twice a day... *pause* ...I think. William, have you been taking your Eliquis?",
            
            "*patient response about medication*|taking it":
                "*patient looks away, mumbles* ...sometimes... fowget...",
            
            "*wife reacts*|not taking":
                "*wife, upset* Oh William! How many have you missed? This is why! *to doctor* I try to remind him but sometimes I'm not there...",
            
            "how many missed|adherence":
                "*patient holds up fingers* Maybe... two... thwee days?",
            
            "high blood pressure|hypertension":
                "*wife* Yes, also takes medication for that. Lisinopril I think.",
            
            "diabetes|blood sugar":
                "*wife* Type 2 diabetes. Takes metformin.",
            
            "cholesterol":
                "*wife* High cholesterol, on atorvastatin.",
            
            "stroke before|prior stroke|tia":
                "*wife* No previous stroke. He had a mini-stroke about 2 years ago. The doctor called it a TIA. Same kind of symptoms but went away after an hour.",
            
            "tia|what happened then":
                "*wife* Similar - couldn't move his right side, slurred speech. We went to the ER, by the time we got there it was already better. They started him on the blood thinners after that.",
            
            "heart attack|cardiac|mi":
                "*wife* No heart attacks.",
            
            // MEDICATIONS
            "medications|medicines|list":
                "*wife* Eliquis for the AFib, lisinopril for blood pressure, atorvastatin for cholesterol, metformin for diabetes. And baby aspirin.",
            
            "eliquis dose|how much":
                "*wife* 5mg twice a day. When he takes it.",
            
            "last dose|when last took eliquis":
                "*wife* I'm not sure now. Maybe 2-3 days ago? William, when did you last take it? *patient shrugs*",
            
            "allergies":
                "*wife* No medication allergies.",
            
            // FAMILY HISTORY
            "family history":
                "*wife* His father had a stroke in his 70s. His mother had heart problems.",
            
            // SOCIAL
            "smoke|smoking":
                "*wife* He quit about 20 years ago. Smoked for about 30 years before that.",
            
            "alcohol":
                "*wife* Occasional glass of wine. Nothing excessive.",
            
            "live with|support":
                "*wife* We live together. I'm with him most of the time. Our kids live nearby.",
            
            // SEXUAL HISTORY - 72M married
            "sexually active":
                "*wife looks uncomfortable* That's... not really... I mean, not much at our age...",
            
            "*if pressed*|stis":
                "*wife* No STIs. We've been married 48 years. Just each other.",
            
            // CONCERNS
            "worried about|concerns":
                "*wife* I'm terrified. Is this a stroke? Is he going to be okay? Can you fix it?",
            
            "patient concerns|mr patterson worried":
                "*patient, frustrated, struggling* ...want to... tawk again... move again... pwease help...",
        }
    };

    // ==========================================
    // CASE: Dorothy Miller - BPPV/Vertigo
    // 55F, room spinning, positional
    // ==========================================
    
    const DOROTHY_MILLER = {
        meta: {
            caseId: "vertigo-bppv",
            patientName: "Dorothy Miller",
            age: 55,
            gender: "female",
            occupation: "Accountant",
            setting: "Primary Care",
            diagnosis: "Benign paroxysmal positional vertigo (BPPV)",
            criticalFindings: [
                "Vertigo with position changes",
                "Brief episodes (seconds)",
                "Nausea with episodes",
                "No hearing loss",
                "No neurological symptoms",
                "Triggered by lying down, turning in bed"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*holding onto chair* Hi. I'm afraid to move my head. The room keeps spinning.",
            
            "how are you|how you doing":
                "Terrible. Every time I move my head the whole world spins. I feel like I'm going to fall off the earth.",
            
            "what brings you in|chief complaint|why here":
                "The room keeps spinning. Started 3 days ago. Every time I lie down or turn my head, everything spins like I'm on a merry-go-round. I'm nauseated. I can't function.",
            
            "tell me more|can you explain":
                "It started when I lay down to sleep 3 days ago. As soon as my head hit the pillow, the room started spinning violently. Lasted maybe 30 seconds, then stopped. It keeps happening every time I change position.",
            
            // TIMELINE
            "when did this start|when start":
                "Three nights ago. I was going to bed, lay down, and boom - room spinning.",
            
            "first time|happened before":
                "First time this bad. I've had brief dizzy spells before but nothing like this.",
            
            "getting worse|better|progression":
                "About the same. Every time I change position, it happens. I've been moving very carefully.",
            
            // VERTIGO CHARACTERISTICS
            "describe|what does it feel like|spinning":
                "The room spins around me. Everything rotates. It's not just lightheaded - it's the whole room spinning.",
            
            "which way|direction":
                "Hard to say. Feels like I'm being spun to the right, like everything is rotating clockwise.",
            
            "how long|duration|how long does it last":
                "Each episode is maybe 20-30 seconds. Sometimes up to a minute. Then it stops if I don't move.",
            
            "constant or intermittent|comes and goes":
                "Only when I move my head. If I stay perfectly still, I'm okay.",
            
            "lightheaded or spinning|difference":
                "Spinning. Definitely the room spinning. Not just lightheaded or woozy - actual spinning vertigo.",
            
            // TRIGGERS - POSITIONAL
            "trigger|what sets it off|when happens":
                "Lying down triggers it. Turning over in bed. Looking up. Bending over.",
            
            "lying down|when you lie down":
                "That's the worst. As soon as I put my head down, it starts. I've been sleeping propped up.",
            
            "turning in bed|rolling over":
                "Yes, especially turning to the right. That makes it really bad.",
            
            "looking up|tilting head back":
                "Yes, looking up at a high shelf yesterday - room started spinning.",
            
            "standing|walking|gait":
                "I'm a little unsteady walking but the spinning is mainly with head movements.",
            
            "sitting still|at rest":
                "Fine if I sit perfectly still. It's the movement that triggers it.",
            
            // ASSOCIATED SYMPTOMS
            "nausea|nauseated":
                "Very nauseous during the spinning. Haven't vomited but came close.",
            
            "vomiting":
                "Almost. Had to lie still and breathe through it.",
            
            "hearing|hearing loss|change":
                "No, hearing is fine. Same as always.",
            
            "ringing|tinnitus|ear ringing":
                "No ringing in my ears.",
            
            "ear pain|ear pressure|fullness":
                "No ear pain. No fullness. Ears feel normal.",
            
            "headache":
                "Mild headache from the stress of it all. Not severe.",
            
            "weakness|arm or leg weakness":
                "No weakness. Arms and legs work fine.",
            
            "numbness|tingling":
                "No numbness or tingling.",
            
            "speech|talking|slurred":
                "No, speech is fine.",
            
            "vision|double vision|blurry":
                "Things jump around during the spinning but no double vision.",
            
            "loss of consciousness|black out|faint":
                "No, I don't pass out. Just feel like I might.",
            
            // RECENT EVENTS
            "recent illness|cold|ear infection":
                "I had a cold about a week before this started. Otherwise fine.",
            
            "head injury|trauma|hit head":
                "No head injury.",
            
            "new medications|started anything":
                "No new medications.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Hypothyroidism, controlled with levothyroxine. High blood pressure, controlled. That's about it.",
            
            "vertigo before|dizziness history":
                "Brief dizzy spells here and there over the years. Nothing this severe or persistent.",
            
            "migraines":
                "No migraines.",
            
            "stroke|tia":
                "No stroke or TIA.",
            
            // MEDICATIONS
            "medications|medicines":
                "Levothyroxine for thyroid, lisinopril for blood pressure.",
            
            "meclizine|antivert|dramamine|tried":
                "I took some Dramamine yesterday. Helped the nausea a little but didn't stop the spinning.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke":
                "No, never smoked.",
            
            "alcohol":
                "Glass of wine occasionally. Haven't had any since this started.",
            
            "caffeine":
                "2 cups of coffee a day.",
            
            "work|job":
                "Accountant. Working from home because I can't drive like this.",
            
            "live with|married":
                "Married, two grown kids. Husband drove me here.",
            
            // SEXUAL HISTORY - 55F married
            "sexually active|having sex":
                "Yes, with my husband.",
            
            "partner":
                "Just my husband. Married 30 years.",
            
            "contraception":
                "I'm menopausal. Went through menopause 3 years ago.",
            
            "condoms":
                "No, not needed at this stage.",
            
            "stis|std":
                "No, never. Just my husband.",
            
            "lmp|menopause":
                "Last period was about 3 years ago. Post-menopausal.",
            
            // CONCERNS
            "worried about|concerns":
                "I'm worried it's something serious in my brain. A tumor or stroke. Is this dangerous?",
            
            "stroke|worried about stroke":
                "That's my biggest fear. But I don't have weakness or slurred speech. Just the spinning.",
            
            "anything else":
                "I just want it to stop. I can't live like this. I can't work, can't drive, can barely function.",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['asthma-exacerbation'] = BRITTANY_TORRES;
    window.COMPREHENSIVE_PATIENT_RESPONSES['copd-exacerbation'] = HAROLD_JENKINS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['acute-stroke'] = WILLIAM_PATTERSON;
    window.COMPREHENSIVE_PATIENT_RESPONSES['vertigo-bppv'] = DOROTHY_MILLER;
    
    console.log('ReasonDx Part 10 (Asthma, COPD, Stroke, Vertigo) loaded');

})();
