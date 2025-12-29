/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 2: Samantha Reyes (Nausea/Vomiting)
 * 
 * 34F, Marketing Coordinator
 * Dx: Hyperemesis Gravidarum (unaware she is pregnant)
 * 
 * CRITICAL TEACHING POINTS:
 * - ALWAYS get pregnancy test in reproductive-age women
 * - Patient doesn't think she could be pregnant
 * - Irregular periods used as excuse
 * - Unreliable contraception (withdrawal method)
 */

(function() {
    'use strict';

    const SAMANTHA_REYES = {
        meta: {
            caseId: "nausea-vomiting",
            patientName: "Samantha Reyes",
            preferredName: "Sam",
            age: 34,
            gender: "female",
            occupation: "Marketing coordinator",
            setting: "Urgent care",
            diagnosis: "Hyperemesis gravidarum - approximately 8 weeks pregnant, unaware",
            criticalFindings: [
                "Missed period (6-8 weeks amenorrhea)",
                "Unreliable contraception (withdrawal method)",
                "Smell aversion (classic pregnancy symptom)",
                "Breast tenderness",
                "Orthostatic symptoms from dehydration"
            ],
            criticalActions: [
                "MUST get pregnancy test regardless of patient's belief",
                "Assess hydration status",
                "Check electrolytes"
            ]
        },
        
        responses: {
            // ============================================
            // OPENING & CHIEF COMPLAINT
            // ============================================
            
            "hello|hi|good morning|good afternoon":
                "*looks miserable* Hi.",
            
            "how are you|how you doing":
                "Terrible. I can't stop throwing up.",
            
            "what brings you in|chief complaint|why here|what's going on|what's wrong":
                "I can't stop throwing up. It's been two days and I can't keep anything down. I'm absolutely miserable.",
            
            "tell me more|can you explain":
                "I woke up Tuesday morning feeling nauseous and it's just gotten worse and worse. I've thrown up so many times I've lost count. Now I can barely stand up without feeling dizzy.",
            
            "start from the beginning":
                "Monday I felt totally fine. Went to bed normal. Then Tuesday morning I woke up feeling really nauseous. Tried to push through it but it just got worse. By the afternoon I was throwing up. Now it's been two days and nothing will stay down.",

            // ============================================
            // TIMELINE - DETAILED
            // ============================================
            
            "when did this start|when start|when begin|how long":
                "Tuesday morning. So this is day two.",
            
            "what day is it|exactly when":
                "It started Tuesday morning. Today is Thursday.",
            
            "what were you doing|doing when it started":
                "I was just getting ready for work Tuesday morning. Woke up feeling off, nauseous. Figured I'd feel better after some breakfast but it just got worse.",
            
            "monday night|night before|anything happen":
                "Monday was totally normal. Had dinner with my husband, watched some TV, went to bed. Nothing unusual.",
            
            "sudden or gradual":
                "Pretty sudden. I felt fine when I went to bed Monday night and woke up feeling awful Tuesday.",
            
            "gotten worse or better|progression":
                "Definitely worse. Yesterday I could at least keep some water down for a little while. Today nothing will stay down. Even sips of water come right back up.",
            
            "worst it's been|at its worst":
                "Right now is probably the worst. This morning I was just dry heaving because there's nothing left.",
            
            "why today|why come in now":
                "I tried to tough it out but I'm getting really weak. This morning I almost fell when I got up to go to the bathroom. I was so dizzy. My husband insisted I come in.",
            
            "why didn't you come sooner":
                "I thought it was just a stomach bug. Figured it would pass. I didn't want to be dramatic about it.",

            // ============================================
            // VOMITING - DETAILED
            // ============================================
            
            "tell me about the vomiting|describe the vomiting|throwing up":
                "It's constant. I've thrown up so many times I've lost count. And now I'm mostly just dry heaving because there's nothing left in my stomach.",
            
            "how many times|frequency|how often":
                "I don't know, maybe 8-10 times yesterday? Today at least 6 times already and it's only 2pm. Plus a lot of dry heaving.",
            
            "what does it look like|what comes up|color":
                "At first it was food. Then it became just liquid - clear stuff, then yellowish. Now it's that yellow-green bile. Bitter tasting.",
            
            "any blood|blood in vomit|red|coffee grounds":
                "No blood. Just that yellow-green bile stuff.",
            
            "projectile|forceful":
                "Pretty forceful, yeah. I can't control it when it comes.",
            
            "warning before|know when it's coming":
                "I feel the nausea building up and then it just hits. Sometimes I have a minute warning, sometimes it just happens.",
            
            "able to eat|drinking":
                "I can't keep anything down. Even water. Even just sips. It all comes back up.",
            
            "retching|dry heaving":
                "A lot now because there's nothing left to come up. The dry heaving is almost worse - it's so exhausting.",

            // ============================================
            // NAUSEA - DETAILED
            // ============================================
            
            "nausea|nauseated|queasy":
                "It's constant. I feel nauseous all the time. It's like the worst seasickness that won't go away.",
            
            "constant or comes and goes":
                "Constant. It never lets up. Some moments are worse than others but it's always there.",
            
            "describe the nausea":
                "Just this horrible queasy feeling. Like I'm on a boat in rough water. My stomach is churning constantly.",
            
            "scale|how bad|1 to 10":
                "The nausea? Probably an 8 out of 10 most of the time. Spikes to 10 right before I throw up.",

            // ============================================
            // AGGRAVATING/RELIEVING
            // ============================================
            
            "what makes it worse|triggers|aggravating":
                "Smells are the worst. Movement makes it worse. Even thinking about food. Everything seems to trigger it.",
            
            "smells|odors":
                "Oh god, smells are terrible. My husband made coffee this morning and I had to leave the room. I almost threw up just from the smell. Even perfume, cleaning products - everything.",
            
            "what smells specifically|which odors":
                "Coffee is the worst. Cooking food. Perfume. My husband's cologne. Even the smell of the soap in the bathroom. Everything bothers me.",
            
            "food|eating":
                "Can't even think about food. The thought of it makes me more nauseous. Haven't eaten anything solid since Monday dinner.",
            
            "movement|moving around":
                "Moving definitely makes it worse. Even just turning my head sometimes. I've been trying to stay as still as possible.",
            
            "position|lying down|sitting up":
                "Being still helps a little. I've been lying on my side mostly. Moving from lying to sitting makes me want to throw up.",
            
            "anything help|makes it better|relieve":
                "Lying completely still in a dark room with no smells. That's about it. And even then I still feel nauseous.",
            
            "tried anything|medications tried|what have you taken":
                "I tried Pepto Bismol - came right back up. Tried ginger ale - came back up. Tried crackers - came back up. Nothing stays down.",
            
            "water|fluids":
                "Can't even keep water down. I try small sips and they come right back up.",

            // ============================================
            // ASSOCIATED SYMPTOMS - COMPREHENSIVE
            // ============================================
            
            // --- Dehydration Symptoms ---
            "dizzy|lightheaded|faint":
                "Yes, really dizzy. Especially when I stand up. This morning I had to grab the wall because I almost fell.",
            
            "how bad|how dizzy":
                "Pretty bad. When I stand up I have to hold onto something for a minute or I'll fall over.",
            
            "passed out|fainted|lost consciousness":
                "Not completely, but I came close this morning. Everything went dark for a second.",
            
            "weak|weakness|energy":
                "Extremely weak. I can barely walk to the bathroom. I feel like I have no strength.",
            
            "thirsty|thirst":
                "Incredibly thirsty, but I can't keep anything down. It's awful.",
            
            "mouth|dry mouth":
                "My mouth is so dry. My lips are cracked.",
            
            "urination|peeing|urine|how much peeing":
                "Barely at all. I've only peed once or twice since yesterday. And it was really dark yellow, almost orange.",
            
            "when did you last pee":
                "This morning, but it was hardly anything. Dark yellow. That's why my husband got really worried.",
            
            "skin|skin turgor|pinch skin":
                "I don't know, what do you mean?",
            
            // --- Fever ---
            "fever|temperature|feverish":
                "I don't think so? I felt a little warm yesterday but I didn't check. I don't feel hot now.",
            
            "chills":
                "No chills.",
            
            "sweating":
                "Not really. Maybe a little clammy.",
            
            // --- GI ---
            "abdominal pain|stomach pain|belly pain|cramping":
                "Some cramping when I vomit, but no real pain otherwise. Just the nausea.",
            
            "where is the cramping|location of pain":
                "Just general cramping in my stomach when I'm throwing up. Nothing specific.",
            
            "diarrhea|loose stools":
                "No diarrhea. Actually I haven't had a bowel movement since this started. Nothing is going through.",
            
            "constipation":
                "I guess technically, but I also haven't eaten anything.",
            
            "bloating":
                "Not really bloated.",
            
            "heartburn|reflux":
                "Some burning in my throat from all the vomiting, but not heartburn.",
            
            // --- Neuro ---
            "headache|head pain":
                "Yeah, I have a headache. Probably from being dehydrated. It's been there since last night.",
            
            "how bad headache":
                "Moderate. Maybe a 5 or 6 out of 10. Doesn't pound, just a constant dull ache.",
            
            "vision|blurry|seeing":
                "Things got a little blurry when I almost fainted this morning. Otherwise okay.",
            
            "confusion|thinking":
                "No, I can think clearly. Just feel awful.",
            
            // --- Other ---
            "chest pain|heart":
                "No chest pain.",
            
            "shortness of breath|breathing":
                "No trouble breathing.",
            
            "palpitations|heart racing":
                "My heart feels like it's racing sometimes, especially when I stand up.",
            
            "muscle aches|body aches":
                "I'm sore from all the vomiting. My abs hurt. But no body aches otherwise.",

            // ============================================
            // GYN HISTORY - CRITICAL
            // ============================================
            
            // --- Last Menstrual Period ---
            "period|last period|menstrual|lmp|menstruation":
                "Um, let me think... it's been a while actually. My periods are really irregular so I don't track them closely.",
            
            "when exactly|how long since period|how many weeks":
                "Maybe... 6 weeks? 8 weeks? Honestly I'm not totally sure. They're really irregular.",
            
            "try to remember|think harder|estimate":
                "I really don't know. Could have been late October? Early November? I don't write it down because it's so unpredictable.",
            
            "always irregular|always been irregular":
                "Yeah, they've always been unpredictable. Sometimes I skip a month, especially when I'm stressed. Work has been crazy so I didn't think anything of it.",
            
            "how irregular|pattern":
                "Sometimes every 4 weeks, sometimes 6 weeks, sometimes I skip a month entirely. Never been regular.",
            
            "ever been evaluated|seen doctor for irregular periods":
                "Not really. They've always been that way. Doctor said some women are just irregular.",
            
            "normal when you do get it|flow|duration":
                "When I do get it, it's pretty normal. Maybe 4-5 days. Medium flow.",
            
            // --- Sexual Activity & Contraception - CRITICAL ---
            "sexually active|having sex":
                "Yes. I'm married. We're... intimate.",
            
            "how often|frequency":
                "Regularly, I guess? A few times a week?",
            
            "birth control|contraception|protection":
                "We use the pull-out method mostly. Sometimes condoms if we remember.",
            
            "pull out method|withdrawal":
                "Yeah, I know it's not perfect, but it's worked for us so far. We've been doing it for years.",
            
            "how long using that method":
                "Since we got married, so about 4 years.",
            
            "ever been pregnant|previous pregnancies|miscarriage":
                "No, I've never been pregnant.",
            
            "ever had a scare|close calls":
                "My period has been late before and I worried, but it always came eventually.",
            
            "could you be pregnant|is it possible|pregnancy possible":
                "I mean... I guess it's technically possible? But I've felt like this before with stomach bugs. I really doubt I'm pregnant.",
            
            "why do you doubt it|why don't you think so":
                "We've been using the pull-out method for years and it's never failed us. Plus my periods are irregular anyway so missing one doesn't mean anything.",
            
            "when did you last have sex|recent intercourse":
                "A few days ago? Maybe Sunday night?",
            
            "husband use condom|did he pull out":
                "*looks uncomfortable* We didn't use a condom that time. He did pull out.",
            
            "want to be pregnant|trying|planning":
                "We've talked about having kids eventually but we're not actively trying. I'm 34 so we figured we'd decide soon.",
            
            // --- Other GYN Symptoms ---
            "breast tenderness|breasts sore|breast pain":
                "Actually yeah, now that you mention it. My breasts have been kind of sore. I thought it was PMS coming on.",
            
            "how long breasts sore":
                "Maybe a week or two? I didn't really pay attention.",
            
            "vaginal discharge|discharge":
                "Nothing unusual.",
            
            "vaginal bleeding|spotting":
                "No bleeding.",
            
            "pelvic pain|lower belly pain":
                "No specific pelvic pain. Just the general stomach cramping with vomiting.",
            
            "painful sex|pain with intercourse":
                "No, that's never been a problem.",
            
            // --- OB/GYN Care ---
            "gynecologist|ob-gyn|pap smear|last pelvic exam":
                "I see my gynecologist once a year. Last one was... maybe 8 months ago? Everything was normal.",
            
            "birth control pills|hormonal birth control|iud":
                "No, I've never been on birth control pills. We just use the pull-out method.",
            
            "why not on birth control|considered other methods":
                "I don't like the idea of hormones. And the pull-out method has worked for us.",

            // ============================================
            // FOOD & EXPOSURE HISTORY
            // ============================================
            
            "what did you eat|food history|last meal|ate recently":
                "Monday dinner was normal - we had grilled chicken and salad. My husband ate the same thing and he's totally fine.",
            
            "anything unusual|different|raw|undercooked":
                "Nothing unusual. Nothing raw or risky. Just regular chicken we made at home, cooked all the way through.",
            
            "eating out|restaurant|takeout":
                "We haven't eaten out in over a week. All home cooking.",
            
            "seafood|sushi|shellfish":
                "No, haven't had seafood recently.",
            
            "eggs|runny eggs":
                "No.",
            
            "leftovers|old food":
                "No, everything was fresh.",
            
            "sick contacts|anyone else sick|husband sick":
                "No one else is sick. My husband is fine. No one at work is sick that I know of.",
            
            "daycare|children around|sick kids":
                "No kids. No one sick around me.",
            
            "travel|traveled|been anywhere":
                "No, haven't traveled anywhere recently.",
            
            "water|drinking water|water source":
                "Just regular tap water and bottled water. Nothing unusual.",
            
            "pets|animals":
                "We have a cat. She's healthy.",
            
            "new foods|new restaurants|anything different":
                "No, nothing new or different.",

            // ============================================
            // PAST MEDICAL HISTORY
            // ============================================
            
            "medical history|health problems|conditions|diagnoses|past medical":
                "I'm pretty healthy. I get migraines sometimes. That's about it.",
            
            "anything else|any other conditions":
                "No, I've always been healthy.",
            
            "migraines|headaches":
                "I get migraines a few times a year. Usually related to my period. I take ibuprofen for them.",
            
            "how often migraines":
                "Maybe 3-4 times a year. Not too frequent.",
            
            "what triggers them":
                "Usually stress or around my period. Occasionally bright lights or certain smells.",
            
            "aura|warning|visual changes with migraine":
                "No aura. Just the headache.",
            
            "diabetes|blood sugar":
                "No diabetes.",
            
            "thyroid|thyroid problems":
                "No thyroid issues.",
            
            "blood pressure|hypertension":
                "Normal. It's always been fine.",
            
            "heart problems|cardiac":
                "No heart problems.",
            
            "stomach problems|gi problems|reflux|ibs":
                "No, my stomach is usually fine. This is really unusual for me.",
            
            "acid reflux|gerd|heartburn history":
                "Occasionally heartburn but nothing regular.",
            
            "eating disorder|anorexia|bulimia":
                "No, nothing like that.",
            
            "anxiety|depression|mental health":
                "Maybe some anxiety with work stress, but nothing diagnosed.",
            
            "hospitalizations|hospital stays":
                "Never been hospitalized for anything.",
            
            "surgeries|operations":
                "No surgeries. Never had any.",
            
            "appendix":
                "Still have it.",
            
            "gallbladder":
                "Still have it.",

            // ============================================
            // MEDICATIONS
            // ============================================
            
            "medications|medicines|taking anything":
                "Just ibuprofen for migraines when I get them. Nothing daily.",
            
            "how often ibuprofen|how much":
                "Only when I have a migraine. Maybe a few times a month at most. 400mg usually.",
            
            "birth control|hormonal medications":
                "No, I'm not on any hormonal medications.",
            
            "prenatal vitamins|folic acid":
                "No, I'm not taking any prenatal vitamins. Should I be?",
            
            "supplements|vitamins":
                "Sometimes a multivitamin. Not consistently.",
            
            "herbal|natural remedies":
                "No.",
            
            "any other medications|anything else":
                "That's it. Just the occasional ibuprofen.",
            
            "prescription medications":
                "No prescriptions.",

            // ============================================
            // ALLERGIES
            // ============================================
            
            "allergies|allergic|reactions":
                "No allergies that I know of.",
            
            "medication allergies|drug allergies":
                "None.",
            
            "food allergies":
                "No food allergies.",
            
            "environmental allergies|seasonal":
                "Maybe mild seasonal allergies in spring, but nothing major.",

            // ============================================
            // FAMILY HISTORY
            // ============================================
            
            "family history|family medical":
                "My mom has high blood pressure. Dad is healthy. No major diseases in the family.",
            
            "parents|mother|father":
                "Both alive and fairly healthy. Mom's 62, Dad's 64.",
            
            "mother's health|mom's health":
                "She has high blood pressure, takes medication for it. Otherwise healthy.",
            
            "father's health|dad's health":
                "Dad's pretty healthy. Maybe some cholesterol issues but nothing major.",
            
            "siblings|brothers|sisters":
                "I have one sister, she's 30. She's healthy.",
            
            "family history of pregnancy problems|difficult pregnancies":
                "Not that I know of. My mom had two normal pregnancies.",
            
            "twins|multiple pregnancies":
                "No twins in the family.",
            
            "diabetes in family":
                "No diabetes.",
            
            "cancer in family":
                "My grandmother had breast cancer but she was in her 70s.",
            
            "heart disease in family":
                "No heart attacks or anything like that.",
            
            "gi problems in family|stomach problems family":
                "No, nothing that runs in the family.",

            // ============================================
            // SOCIAL HISTORY
            // ============================================
            
            // --- Smoking ---
            "smoke|smoking|cigarettes":
                "No, I don't smoke. Never have.",
            
            "ever smoked|used to smoke":
                "No, never.",
            
            "secondhand smoke|live with smokers":
                "No one in my household smokes.",
            
            "vape|e-cigarettes":
                "No.",
            
            "marijuana|weed|cannabis":
                "No.",
            
            // --- Alcohol ---
            "alcohol|drink|drinking":
                "Socially. Maybe a glass of wine on weekends. Not a lot.",
            
            "how much|how often|weekly":
                "Maybe one or two glasses of wine per week? Sometimes less.",
            
            "last drink|when did you last drink":
                "Saturday night, I had a glass of wine with dinner. Haven't wanted anything since I got sick.",
            
            "ever had problem|heavy drinking":
                "No, I'm pretty light. Never had a problem.",
            
            // --- Drugs ---
            "drugs|recreational|illicit":
                "No, nothing like that.",
            
            "ever tried":
                "Maybe marijuana once in college, but I didn't like it. That's it.",
            
            // --- Caffeine ---
            "caffeine|coffee|tea":
                "I usually have one or two cups of coffee in the morning. But I haven't been able to tolerate the smell since I got sick.",
            
            // --- Occupation ---
            "work|job|occupation":
                "I'm a marketing coordinator for a software company.",
            
            "what does that involve|job duties":
                "A lot of computer work, meetings, managing campaigns. Desk job mostly.",
            
            "stressful|stress at work":
                "It's been busy lately. We have a big campaign launching. That's partly why I was stressed about missing work.",
            
            "hours|schedule":
                "Usually 9 to 5, but I've been working some late nights recently with the campaign.",
            
            // --- Living ---
            "married|husband|spouse":
                "Yes, married for 4 years. My husband Jake. He's the one who brought me in.",
            
            "live with|living situation":
                "I live with my husband in an apartment.",
            
            "children|kids":
                "No kids.",
            
            "support|help":
                "My husband's been taking care of me. He's been really worried.",
            
            // --- Diet ---
            "diet|eating habits|normally eat":
                "Usually pretty healthy. We cook at home a lot. Try to eat balanced.",
            
            "any diet restrictions|vegetarian|vegan":
                "No, we eat everything.",
            
            // --- Exercise ---
            "exercise|workout|physical activity":
                "I do yoga a couple times a week. Sometimes go for walks or runs.",
            
            "active|fitness level":
                "Pretty active normally. I haven't been able to do anything since this started though.",

            // ============================================
            // HEALTH MAINTENANCE
            // ============================================
            
            "regular doctor|primary care|doctor visits":
                "I see my doctor once a year for a physical. I'm pretty good about it.",
            
            "last checkup|last physical":
                "About 6 months ago. Everything was normal.",
            
            "gynecologist|pap smear":
                "I go every year. Last one was 8 months ago. Normal.",
            
            "vaccines|immunizations":
                "I'm up to date on everything. Got my flu shot in October.",
            
            "mammogram":
                "I haven't had one yet. They said I don't need one until 40.",

            // ============================================
            // PATIENT CONCERNS
            // ============================================
            
            "worried about|concerns|scared|afraid":
                "I'm worried because this isn't getting better. I've had stomach bugs before but they don't last this long. And I'm so weak.",
            
            "what do you think it is|your theory":
                "I figured it was food poisoning or a bad stomach bug. But my husband ate the same thing and he's fine. So I don't know.",
            
            "worried about pregnancy|think you might be pregnant":
                "*pauses* I mean... I guess? But we've been careful. Well, as careful as we can be. Do you think...?",
            
            "would you be happy|how would you feel if pregnant":
                "I... we've talked about kids. It would be unexpected timing with my work stuff, but... we would figure it out. Do you really think I could be?",
            
            "anything else want to tell me|anything else":
                "Just please figure out what's wrong. I feel terrible and I'm really worried. If there's something seriously wrong, I need to know."
        }
    };

    // Add to global registry
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    window.COMPREHENSIVE_PATIENT_RESPONSES['nausea-vomiting'] = SAMANTHA_REYES;
    
    console.log('ReasonDx Comprehensive Patient Responses v4.0 - Part 2 (Samantha Reyes) loaded');

})();
