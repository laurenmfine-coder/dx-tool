/**
 * ReasonDx Part 29: Core Clinical Cases
 * Cases: DVT, Gout, Sepsis, Headache, Heart Failure, New HTN
 */
(function() {
    'use strict';

    // ==========================================
    // CASE: DVT - Classic Presentation
    // ==========================================
    const DVT_CLASSIC = {
        meta: { caseId: "dvt", patientName: "Sandra Williams", age: 52, diagnosis: "Deep vein thrombosis" },
        responses: {
            "hello|hi": "Hi doctor. My leg has been swelling and hurting for a few days.",
            "what brings you in|chief complaint": "My left calf is swollen and painful. Started about 4 days ago and keeps getting worse. It's much bigger than my right leg.",
            "when|how long": "Started 4 days ago. Gradually getting more swollen and tender.",
            "which leg|location": "Left leg. The calf mostly, but the whole lower leg feels tight.",
            "describe|pain": "Aching pain, worse when I walk or stand. Feels like a deep cramp that won't go away.",
            "swelling|how much": "My left calf is noticeably bigger. My pants feel tight on that side. Maybe 2 inches bigger around.",
            "red|warm|color": "It's a little red and definitely warmer than my right leg. I can feel the difference.",
            "tender|touch": "Very tender when I touch my calf. Even the sheets bother it at night.",
            "shortness of breath|chest pain|breathing": "Actually, I have been a little more winded going up stairs. I thought I was just out of shape.",
            "cough|hemoptysis": "No cough. No blood.",
            "travel|flight|long trip": "I drove 12 hours to visit my daughter two weeks ago. Stopped once for gas. Then drove back.",
            "sitting|immobile": "I sit at a desk all day for work. Don't move much.",
            "surgery|recent surgery|hospitalization": "Had my gallbladder out 6 weeks ago. Laparoscopic. Went fine.",
            "birth control|hormones|hrt": "I'm on hormone replacement therapy for menopause. Estrogen patch.",
            "cancer|malignancy": "No cancer that I know of.",
            "clots before|dvt before|pe before": "Never had a blood clot before.",
            "family history|family clots": "My mother had a blood clot in her leg when she was 60. She was fine.",
            "smoke|smoking": "I quit 5 years ago. Smoked for 20 years before that.",
            "medical history|conditions": "High blood pressure, high cholesterol. Had my gallbladder out recently.",
            "medications": "Lisinopril, atorvastatin, estrogen patch.",
            "allergies": "No allergies.",
            "sexually active": "Yes, with my husband.",
            "worried about|concerns": "Is this a blood clot? Can it go to my lungs? My mother almost died from that.",
            "anything else": "I just want to make sure it's not something dangerous. The swelling really worries me.",
        }
    };

    // ==========================================
    // CASE: Gout - Acute First Attack
    // ==========================================
    const GOUT_ACUTE = {
        meta: { caseId: "gout", patientName: "William Chen", age: 58, diagnosis: "Acute gout" },
        responses: {
            "hello|hi": "*limping, grimacing* Doc, I can barely walk. My toe is killing me.",
            "what brings you in|chief complaint": "Woke up last night with excruciating pain in my big toe. It's red, swollen, hot. Can't even put a sheet on it. Worst pain of my life.",
            "when|how long": "Started around 2 AM. Was fine when I went to bed. Woke up in agony.",
            "which foot|location": "Right big toe. The base of it, the joint.",
            "describe|pain|severity": "Throbbing, burning, feels like it's on fire. 10 out of 10. Even air blowing on it hurts.",
            "sudden|gradual": "Very sudden. I was fine yesterday. Woke up in the middle of the night screaming.",
            "swelling|red|appearance": "Hugely swollen. Bright red, almost purple. Hot to touch. Shiny.",
            "touch|can you touch it": "Please don't touch it! Even the bedsheet was unbearable.",
            "walk|bear weight": "I can barely walk. Hopping on my other foot. Can't put any weight on it.",
            "fever|chills": "Maybe a low fever. Felt warm. Some chills.",
            "other joints|spread": "Just this one joint. Nothing else.",
            "happened before|previous attacks": "Never like this. Maybe some minor aches before but nothing close to this.",
            "what did you eat|trigger|yesterday": "Had a big steak dinner last night. Few beers watching the game.",
            "alcohol|drinking": "I drink beer most nights. Maybe 3-4 beers. More on weekends.",
            "diet|meat|seafood": "I eat a lot of red meat. Love shellfish too.",
            "dehydrated|fluids": "Probably don't drink enough water. Mostly beer and coffee.",
            "medical history|conditions": "High blood pressure, kidney stones twice, high cholesterol.",
            "medications": "Hydrochlorothiazide for blood pressure, atorvastatin.",
            "diuretic|water pill": "Yeah, the hydrochlorothiazide. Been on it for years.",
            "uric acid|checked before": "I think it was high once. Doctor mentioned it but didn't do anything.",
            "family history": "My father had gout. His toe would swell up too.",
            "allergies": "No allergies.",
            "sexually active": "Yes, with my wife.",
            "worried about|concerns": "What is this? Is my toe infected? I've never felt pain like this.",
            "anything else": "Just make the pain stop. I'll do anything.",
        }
    };

    // ==========================================
    // CASE: Sepsis - UTI Source
    // ==========================================
    const SEPSIS_PRESENTATION = {
        meta: { caseId: "sepsis", patientName: "Dorothy Patterson", age: 78, diagnosis: "Sepsis (urinary source)" },
        responses: {
            "hello|hi": "*confused, ill-appearing* What... where am I...",
            "what brings you in|chief complaint": "*daughter* She's confused and has a fever. Found her this morning barely making sense. She has a catheter from her stroke.",
            "when|how long": "*daughter* She was okay yesterday, maybe a little tired. This morning she didn't know who I was.",
            "confusion|mental status": "*daughter* She's usually sharp. Today she thought I was her sister. Can't answer simple questions.",
            "fever|temperature": "*daughter* 102.8 at home. She felt hot and was shivering.",
            "chills|rigors": "*daughter* Yes, shaking chills. Teeth chattering.",
            "urinary|catheter|uti symptoms": "*daughter* She has a Foley catheter since her stroke. The urine looked cloudy and smelled bad yesterday.",
            "burning|dysuria": "*daughter* She can't really tell me. She has trouble communicating since the stroke.",
            "urine color|appearance": "*daughter* Dark and cloudy. Smells terrible.",
            "blood pressure|vitals": "*nurse* BP 88/52, HR 112, temp 102.4, RR 22.",
            "skin|appearance|color": "*daughter* She looks pale. Her skin feels clammy.",
            "eating|drinking": "*daughter* She hasn't wanted to eat for 2 days. Not drinking much either.",
            "cough|respiratory": "*daughter* No cough. No breathing problems until today - she seems to be breathing fast.",
            "stroke|when": "*daughter* Stroke was 3 months ago. Left side weakness. That's why she has the catheter.",
            "catheter|how long": "*daughter* Foley has been in since the stroke. They change it monthly.",
            "medical history": "*daughter* Stroke, diabetes, high blood pressure, atrial fibrillation, dementia starting before the stroke.",
            "medications": "*daughter* Lots of them - Eliquis, metformin, lisinopril, metoprolol, aspirin.",
            "allergies": "*daughter* Penicillin - she gets a rash.",
            "baseline|usual self": "*daughter* She has some memory problems but usually knows me. Can feed herself. Walks with a walker.",
            "code status|wishes": "*daughter* She's DNR but wants treatment. We talked about it. Just no CPR or ventilator.",
            "live|nursing home": "*daughter* She lives with me. I'm her caregiver.",
            "*patient responds*|patient": "*patient, confused* I want to go home... who are you people...",
            "worried about|concerns": "*daughter* Is this an infection? She's been getting these UTIs. I'm scared this one is serious.",
        }
    };

    // ==========================================
    // CASE: Headache - New Presentation
    // ==========================================
    const HEADACHE_NEW = {
        meta: { caseId: "headache", patientName: "Michael Torres", age: 45, diagnosis: "Tension-type headache vs migraine" },
        responses: {
            "hello|hi": "Hi doc. I've been having these headaches and they're affecting my work.",
            "what brings you in|chief complaint": "Headaches for the past 3 weeks. Almost daily. Pressure feeling, both sides of my head. Getting worse.",
            "when|how long": "Started about 3 weeks ago. At first once or twice a week, now almost every day.",
            "describe|what does it feel like": "Like a band squeezing my head. Pressure on both sides. Sometimes the back of my neck too.",
            "severity|how bad|scale": "Maybe 5-6 out of 10. Bad enough to be distracting but I can work through it.",
            "location|where": "Both sides, like a band around my head. Sometimes more in the temples, sometimes the forehead.",
            "one side|unilateral": "No, both sides equally. Kind of wraps around.",
            "throbbing|pounding|quality": "More like pressure or squeezing. Not really pounding.",
            "nausea|vomiting": "No vomiting. Maybe slight nausea occasionally but not bad.",
            "light|photophobia": "Bright lights bother me a little when it's bad. Not terrible.",
            "sound|phonophobia": "Sounds don't really bother me.",
            "aura|visual changes|warning": "No visual changes. No warning signs.",
            "worse|triggers|pattern": "Worse at the end of the day. Worse after long computer work. Stress makes it worse.",
            "better|what helps": "Tylenol helps some. Lying down in a dark room helps. Goes away with sleep.",
            "wake you up|night": "No, I sleep through. It's not there when I wake up, comes on during the day.",
            "worst headache|thunderclap|sudden": "Not the worst headache ever. Nothing sudden. Just this persistent pressure.",
            "fever|stiff neck|meningitis symptoms": "No fever. Neck is a little stiff from tension but I can move it fine.",
            "neurological|weakness|numbness|vision": "No weakness, no numbness, vision is fine. Just the headache.",
            "trauma|hit head": "No head injury.",
            "work|stress|computer": "I'm an accountant. Tax season just ended - tons of stress. Staring at screens 10 hours a day.",
            "sleep|how much": "Maybe 5-6 hours. Trouble falling asleep with stress.",
            "caffeine": "Lots of coffee. 4-5 cups a day. Need it to function.",
            "previous headaches|history": "I'd get occasional headaches before but nothing like this frequency.",
            "family history|migraines": "My mother had migraines.",
            "medical history": "High blood pressure, controlled. That's it.",
            "medications": "Lisinopril. And lots of Tylenol lately for the headaches.",
            "how much tylenol|frequency": "Maybe 4-6 pills a day for the last 2 weeks.",
            "allergies": "No allergies.",
            "sexually active": "Yes, with my wife.",
            "worried about|concerns": "I'm worried something is wrong. Could this be a tumor? My coworker had a brain tumor.",
            "anything else": "I just need these headaches to stop. I can't keep working like this.",
        }
    };

    // ==========================================
    // CASE: Heart Failure - New Diagnosis
    // ==========================================
    const HEART_FAILURE_NEW = {
        meta: { caseId: "heart-failure", patientName: "Robert Martinez", age: 68, diagnosis: "New-onset heart failure" },
        responses: {
            "hello|hi": "*appears tired, slightly short of breath* Hi doctor. I've been getting really winded lately.",
            "what brings you in|chief complaint": "Short of breath. Started a few weeks ago and getting worse. Can't do things I used to. Legs are swollen. Have to sleep sitting up now.",
            "when|how long": "Maybe 4-6 weeks. Came on gradually. This past week is the worst.",
            "shortness of breath|describe": "Just walking to the mailbox leaves me winded. Used to walk 2 miles no problem. Now I'm gasping after a block.",
            "at rest|lying down": "Better sitting up. If I lie flat, I feel like I'm drowning. Wake up gasping.",
            "pillows|orthopnea": "I sleep in my recliner now. Tried bed with 4 pillows but still couldn't breathe.",
            "pnd|wake up gasping": "Yes! I wake up in the middle of the night gasping for air. Have to sit up. Terrifying.",
            "swelling|edema|legs": "Both legs are swollen. Ankles and calves. My shoes don't fit. I press on my shin and it leaves a dent.",
            "weight|gained weight": "Gained 15 pounds in the last month. Doesn't make sense - I'm not eating more.",
            "chest pain|angina": "No chest pain. Just can't breathe.",
            "cough": "Yes, a dry cough. Worse when I lie down. Sometimes a little pink-tinged spit in the morning.",
            "fatigue|tired": "Exhausted. No energy to do anything. Used to be active.",
            "palpitations|heart racing": "Sometimes feel like my heart is racing or skipping.",
            "urination|peeing at night": "I'm up 4-5 times a night to pee. That's new too.",
            "previous heart problems|cardiac history": "Had a heart attack 3 years ago. They put in a stent. Been fine since then - until now.",
            "been taking medications|compliant": "I take my meds... mostly. Sometimes I forget the water pill because it makes me pee so much.",
            "diet|salt": "I probably eat too much salt. My wife keeps telling me.",
            "alcohol": "Glass of wine with dinner. Maybe 2.",
            "medical history": "Heart attack, high blood pressure, diabetes, high cholesterol.",
            "medications": "Aspirin, metoprolol, lisinopril, atorvastatin, metformin. Supposed to take furosemide but I skip it sometimes.",
            "smoking": "Quit after my heart attack. Smoked 30 years before that.",
            "sexually active": "Not lately. Too tired.",
            "worried about|concerns": "Is my heart failing? Am I dying? I feel terrible.",
            "anything else": "I should have come in sooner. I kept hoping it would get better.",
        }
    };

    // ==========================================
    // CASE: New Hypertension
    // ==========================================
    const NEW_HTN = {
        meta: { caseId: "new-htn", patientName: "James Wilson", age: 48, diagnosis: "Newly diagnosed hypertension" },
        responses: {
            "hello|hi": "Hi doc. They said my blood pressure was high at my work physical. Never been told that before.",
            "what brings you in|chief complaint": "Work physical found high blood pressure. 158/96. They said I need to follow up. I feel fine though.",
            "when|first noticed": "Just at this physical last week. Never been high before that I know of.",
            "symptoms|how do you feel": "Honestly, I feel totally fine. No symptoms at all.",
            "headache": "Maybe occasional headaches but I thought that was stress. Nothing major.",
            "vision|visual changes": "Vision is fine.",
            "chest pain": "No chest pain.",
            "shortness of breath": "I get winded with heavy exertion but doesn't everyone?",
            "dizziness|lightheaded": "No dizziness.",
            "previous bp|checked before": "Don't remember the last time. Maybe 5 years ago? It was fine then.",
            "family history|parents": "My father had high blood pressure. Died of a stroke at 62. Mother has it too.",
            "diet|salt|eating": "I eat a lot of fast food. Salty snacks. Don't really watch what I eat.",
            "exercise|activity": "I used to exercise. Now I sit at a desk all day. Too tired to work out.",
            "weight|bmi": "I've put on weight. Maybe 30 pounds in the last 5 years. Clothes don't fit.",
            "alcohol|drinking": "I drink beer. Probably 2-3 most nights. More on weekends.",
            "smoking|smoke": "Never smoked.",
            "stress|job": "Stressful job. Finance. Long hours. High pressure.",
            "sleep|snoring": "My wife says I snore like a freight train. Sometimes I stop breathing she says. Wake up tired.",
            "apnea|sleep study": "Never had a sleep study. Should probably do that.",
            "caffeine": "Lots of coffee. 4-5 cups a day.",
            "medical history|conditions": "Nothing. This is the first medical issue. I've been healthy.",
            "medications|taking anything": "Nothing. No medications. Some vitamins.",
            "supplements|herbal": "Just a multivitamin.",
            "erectile dysfunction|ed": "Actually, yeah. For about a year. Didn't want to mention it. Thought it was stress.",
            "allergies": "No allergies.",
            "sexually active": "Yes, with my wife. Well, less lately because of the... problem.",
            "worried about|concerns": "Do I really need medication? Can't I just diet and exercise? I don't want to be on pills forever.",
            "anything else": "My father died young from a stroke. That scares me. But I still feel fine.",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['dvt'] = DVT_CLASSIC;
    window.COMPREHENSIVE_PATIENT_RESPONSES['gout'] = GOUT_ACUTE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['sepsis'] = SEPSIS_PRESENTATION;
    window.COMPREHENSIVE_PATIENT_RESPONSES['headache'] = HEADACHE_NEW;
    window.COMPREHENSIVE_PATIENT_RESPONSES['heart-failure'] = HEART_FAILURE_NEW;
    window.COMPREHENSIVE_PATIENT_RESPONSES['new-htn'] = NEW_HTN;
    
    console.log('ReasonDx Part 29 (DVT, Gout, Sepsis, Headache, Heart Failure, New HTN) loaded');

})();
