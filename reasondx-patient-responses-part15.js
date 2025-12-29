/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 15: Psych/Behavioral and Specialty Cases
 * 
 * Cases:
 * 1. Major Depressive Disorder - 38F
 * 2. Generalized Anxiety Disorder - 29F
 * 3. Delirium (Hospital-acquired) - 78M
 * 4. Sickle Cell Vaso-occlusive Crisis - 24M
 * 5. Thyroid Storm - 34F
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Jennifer Walsh - Major Depression
    // 38F, fatigue, sadness, sleep problems, PHQ-9 screening
    // ==========================================
    
    const JENNIFER_WALSH = {
        meta: {
            caseId: "depression-mdd",
            patientName: "Jennifer Walsh",
            age: 38,
            gender: "female",
            occupation: "Marketing manager",
            setting: "Primary Care",
            diagnosis: "Major depressive disorder",
            criticalFindings: [
                "Depressed mood most days",
                "Anhedonia",
                "Sleep disturbance (insomnia)",
                "Fatigue",
                "Concentration problems",
                "Weight change",
                "Passive suicidal ideation (no plan)",
                "Duration > 2 weeks"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*tired, subdued* Hi. Thanks for seeing me.",
            
            "how are you|how you doing":
                "*looks down* Honestly? Not good. I've been really struggling.",
            
            "what brings you in|chief complaint|why here":
                "I'm just... so tired all the time. I can't sleep, I don't enjoy anything anymore. My husband made me make this appointment. He's worried about me.",
            
            "tell me more|can you explain":
                "I don't know what's wrong with me. I used to be so energetic, so engaged with life. Now I can barely get out of bed. Everything feels like such an effort. I cry for no reason. I don't recognize myself.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "It's been building for maybe 2-3 months. Got really bad the last month or so.",
            
            "gradual|sudden":
                "Gradual. Crept up on me. Then I realized I'd been in this fog for weeks.",
            
            "anything trigger|what happened|precipitant":
                "Nothing specific I can point to. Work has been stressful. My mom's been sick. But nothing catastrophic. That's what's confusing - there's no big reason.",
            
            // DEPRESSION SCREENING - PHQ-9 STYLE
            "interest|enjoy things|pleasure|anhedonia":
                "Nothing. Things I used to love - reading, cooking, seeing friends - I just don't care anymore. It all feels pointless.",
            
            "how often|every day|most days":
                "Pretty much every day. I can't remember the last time I actually enjoyed something.",
            
            "sad|down|depressed|mood":
                "Sad. Empty. Sometimes I just feel numb. Like nothing matters.",
            
            "most of the day|how much of day":
                "Most of the day. It lifts a little in the evening sometimes, but mornings are the worst.",
            
            "sleep|sleeping|insomnia":
                "Terrible. I fall asleep okay but wake up at 3am and just lie there thinking. Can't get back to sleep.",
            
            "how long awake|hours":
                "Sometimes 2-3 hours. Eventually I fall back asleep around 5, then my alarm goes off at 6.",
            
            "tired|fatigue|energy":
                "Exhausted. All the time. No energy for anything. Even showering feels like a huge task.",
            
            "appetite|eating|weight":
                "Not hungry. I've lost maybe 10 pounds without trying. Food just doesn't appeal to me.",
            
            "guilty|worthless|failure":
                "I feel like such a failure. Like I'm letting everyone down - my husband, my team at work, myself. I should be able to handle this.",
            
            "concentration|focus|thinking":
                "Can't concentrate. I read the same email three times and still don't know what it says. Making decisions is impossible.",
            
            "slow|moving slow|psychomotor":
                "Everything feels slow. I move slow, think slow. My husband says I'm like a different person.",
            
            // SAFETY - CRITICAL
            "thoughts of death|suicidal|hurt yourself|end your life":
                "*pauses, tears up* Sometimes I think... everyone would be better off without me. I'm such a burden.",
            
            "wish you were dead|not wake up":
                "Sometimes when I'm lying awake at night, I think about what it would be like to just... not exist. Not wake up.",
            
            "plan|thought about how|method":
                "No. I would never actually do anything. I could never do that to my husband or my parents. It's just... thoughts.",
            
            "intent|going to act|do something":
                "No. I don't want to die. I just want to stop feeling like this. I want to be myself again.",
            
            "safe|are you safe|hurt yourself tonight":
                "Yes, I'm safe. I promise. These are just dark thoughts. I'm not going to act on them. That's partly why I'm here.",
            
            "previous attempts|tried before|history":
                "No, I've never tried anything. Never been this low before either.",
            
            "self-harm|cutting|hurting yourself other ways":
                "No, nothing like that.",
            
            // PREVIOUS MENTAL HEALTH
            "depression before|previous episodes|history":
                "I had some depression in college. It got better on its own. Nothing like this.",
            
            "treatment before|therapy|medication":
                "I saw a counselor in college a few times. Never took medication.",
            
            "anxiety|anxious|worry":
                "Some anxiety with all this, but the sadness and tiredness are the main things.",
            
            "bipolar|mania|high periods":
                "No, I've never had anything like that. No periods of unusual energy or feeling on top of the world.",
            
            "trauma|abuse|ptsd":
                "No trauma. My childhood was pretty normal.",
            
            // MEDICAL CAUSES
            "thyroid|hypothyroid|medical":
                "I don't think I've had my thyroid checked recently.",
            
            "other symptoms|physical symptoms":
                "Just tired. No other physical symptoms really.",
            
            // SUBSTANCE USE
            "alcohol|drinking":
                "Maybe a glass of wine most nights. Maybe two lately. It helps me relax.",
            
            "more than usual|increased":
                "A little more than I used to. It's the only thing that takes the edge off.",
            
            "drugs|marijuana|substances":
                "No drugs.",
            
            "caffeine|coffee":
                "A lot. Trying to fight the fatigue. Maybe 4 cups a day now.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Healthy. No major medical problems.",
            
            "medications|medicines":
                "Just birth control. Nothing else.",
            
            "allergies":
                "No allergies.",
            
            // FAMILY HISTORY
            "family history|family mental health|depression in family":
                "My mom has been on antidepressants for years. Her mom - my grandmother - I think she struggled too.",
            
            "suicide in family":
                "No, no suicides.",
            
            "bipolar in family":
                "I don't think so.",
            
            // SOCIAL
            "work|job":
                "Marketing manager. It's stressful. I've been struggling to keep up. My boss has noticed.",
            
            "married|relationship|support":
                "Married 8 years. My husband is supportive but worried. He doesn't know how to help. I don't know how to let him.",
            
            "children|kids":
                "No kids. We've been trying but... I don't even know if I want to bring a child into this when I can barely take care of myself.",
            
            "friends|social|isolation":
                "I've been isolating. Canceling plans. Don't have energy for people. I feel like a burden.",
            
            // SEXUAL HISTORY - 38F married
            "sexually active|having sex":
                "Technically yes, with my husband. But honestly my libido is gone. We haven't been intimate in weeks.",
            
            "partner":
                "Just my husband. 8 years.",
            
            "contraception":
                "Birth control pills.",
            
            "stis|std":
                "No, never.",
            
            // FUNCTION
            "getting to work|functioning|daily activities":
                "Barely functioning. I go to work but I'm not really there. Basic things like cooking, cleaning... I just can't.",
            
            "hygiene|showering|self-care":
                "I've let things slip. Some days I don't shower. I wear the same clothes multiple days. I don't care what I look like.",
            
            // PATIENT CONCERNS
            "worried about|concerns":
                "I'm scared this is who I am now. That I'll never feel like myself again. And I'm scared of what might happen if this keeps getting worse.",
            
            "what do you want|hoping for|help":
                "I want to feel like myself again. I want my life back. I'll try anything.",
            
            "willing to|open to treatment|medication|therapy":
                "Yes. Whatever you think will help. I can't keep living like this.",
            
            "anything else":
                "*tearful* Thank you for listening. For taking this seriously. I've felt so alone with this.",
        }
    };

    // ==========================================
    // CASE: Ashley Chen - Generalized Anxiety Disorder
    // 29F, constant worry, physical symptoms
    // ==========================================
    
    const ASHLEY_CHEN = {
        meta: {
            caseId: "anxiety-gad",
            patientName: "Ashley Chen",
            age: 29,
            gender: "female",
            occupation: "Software engineer",
            setting: "Primary Care",
            diagnosis: "Generalized anxiety disorder",
            criticalFindings: [
                "Excessive worry most days",
                "Difficulty controlling worry",
                "Restlessness/on edge",
                "Muscle tension",
                "Sleep disturbance",
                "Concentration difficulty",
                "Irritability",
                "Duration > 6 months"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*sitting rigidly, appears tense* Hi. Thank you for seeing me.",
            
            "how are you|how you doing":
                "*fidgeting* Honestly, I'm always anxious. About everything. I can't turn my brain off.",
            
            "what brings you in|chief complaint|why here":
                "I worry constantly. About work, about my health, about my relationship, about things that haven't even happened. My boyfriend says I'm going to worry myself to death. I can't relax. Ever.",
            
            "tell me more|can you explain":
                "It's like my brain is always running worst-case scenarios. What if I make a mistake at work? What if I get sick? What if something happens to my parents? I know it's irrational but I can't stop. And now I'm getting physical symptoms - muscle tension, headaches, my stomach is always upset.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "I've always been a worrier, but it's gotten really bad the past year or so. Maybe longer. Hard to pinpoint.",
            
            "always like this|childhood|history":
                "I was an anxious kid. Worried about tests, worried about my parents driving in bad weather. But it's gotten worse as an adult.",
            
            "anything make it worse|trigger":
                "Work stress definitely makes it worse. Started a new job a year ago. More responsibility. More to worry about.",
            
            // WORRY
            "what do you worry about|topics|content":
                "Everything. Work deadlines, my health, my relationship, money, my parents getting older, climate change, things I said in conversations years ago... literally everything.",
            
            "how often|frequency|most days":
                "Every day. All day. I wake up anxious and go to bed anxious.",
            
            "can you stop|control|turn it off":
                "I try but I can't. Even when I tell myself I'm being irrational, my brain keeps going. It's exhausting.",
            
            "rational|know it's excessive":
                "Yes! I know most of my worries are unlikely or overblown. But knowing that doesn't make me feel better.",
            
            // PHYSICAL SYMPTOMS
            "physical|body symptoms|feel in body":
                "Muscle tension - my shoulders and neck are always tight. Headaches. Upset stomach. Heart racing sometimes. Trouble catching my breath.",
            
            "muscle tension|where":
                "Shoulders, neck, jaw. I clench my jaw at night - my dentist noticed. I've started getting tension headaches.",
            
            "stomach|gi|nausea":
                "My stomach is always churning. Nauseous before important meetings. Sometimes diarrhea when I'm really anxious.",
            
            "heart|palpitations|racing":
                "My heart races sometimes. Especially when I'm spiraling about something.",
            
            "breathing|short of breath":
                "Sometimes I feel like I can't get a full breath. Like there's a weight on my chest.",
            
            // ASSOCIATED SYMPTOMS
            "sleep|sleeping":
                "Hard to fall asleep - my mind is racing. Then I wake up in the middle of the night worrying.",
            
            "concentration|focus|work":
                "I can concentrate okay on work usually. But when I'm anxious I can't focus at all.",
            
            "irritable|snapping|on edge":
                "I'm on edge all the time. I snap at my boyfriend. He doesn't deserve it.",
            
            "restless|can't sit still":
                "Restless. Always fidgeting. Can't sit still. Feel like I need to be doing something.",
            
            "fatigue|tired":
                "Exhausted from being anxious all the time. It's draining.",
            
            // PANIC
            "panic attacks|panic|sudden":
                "I've had a few episodes that might be panic attacks? Sudden overwhelming fear, couldn't breathe, thought I was dying. Maybe 3 or 4 times.",
            
            "describe|what happens":
                "Heart racing, sweating, couldn't breathe, felt like I was going to faint or have a heart attack. Lasted maybe 10-15 minutes. Then I felt drained.",
            
            "avoid|avoidance|stay away from":
                "I don't really avoid things. I force myself to do everything even though I'm terrified. Maybe I avoid some social events.",
            
            // SAFETY
            "suicidal|hurt yourself|thoughts of death":
                "No, nothing like that. I worry about death - like hypochondria - but I don't want to die.",
            
            "self-harm|cutting":
                "No, never.",
            
            // COPING
            "how do you cope|deal with it|manage":
                "Wine helps. Exercise helps but I don't do it enough. Deep breathing sometimes. Mostly I just push through.",
            
            "alcohol|drinking|how much":
                "Glass or two of wine most nights to unwind. Maybe more on bad days.",
            
            "drugs|marijuana|substances":
                "I tried CBD - didn't really help. No other drugs.",
            
            "medications|tried medications|supplements":
                "I take melatonin for sleep sometimes. Haven't tried prescription medication.",
            
            // PREVIOUS TREATMENT
            "therapy|counseling|seen anyone":
                "I saw a therapist in college for a few months. It helped but I stopped when I graduated.",
            
            "medication|tried medication|antidepressants":
                "Never tried medication. I was scared of side effects. Also felt like I should be able to handle this myself.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "IBS - probably related to anxiety. Otherwise healthy.",
            
            "thyroid|hyperthyroid":
                "Never been checked. Should I be?",
            
            "caffeine|coffee":
                "Maybe too much. 3-4 cups of coffee a day. I know it probably doesn't help.",
            
            "allergies":
                "No allergies.",
            
            // FAMILY
            "family history|anxiety in family|mental health":
                "My mom is anxious too. She takes something for it. Her mother was the same way.",
            
            // SOCIAL
            "work|job":
                "Software engineer. High-pressure. Deadlines. Code reviews. It's stressful but I love the work.",
            
            "relationship|boyfriend|support":
                "We've been together 3 years. He's patient but I know my anxiety affects him. He's asked me to get help.",
            
            "friends|social":
                "I have friends but I've been canceling plans. Too anxious or too tired.",
            
            // SEXUAL HISTORY - 29F in relationship
            "sexually active|having sex":
                "Yes, with my boyfriend.",
            
            "partner":
                "Just him. 3 years.",
            
            "contraception":
                "IUD - Mirena.",
            
            "stis|std":
                "No, never. We both got tested early in the relationship.",
            
            // CONCERNS
            "worried about|concerns":
                "I can't live like this forever. It's affecting my relationship, my work, my health. Something has to change.",
            
            "what do you want|help|hoping":
                "I want to feel normal. Not worry about everything. Be able to relax. Enjoy life without this constant dread.",
            
            "anything else":
                "I'm ready to try whatever you recommend. I can't keep white-knuckling through life.",
        }
    };

    // ==========================================
    // CASE: Harold Mitchell - Delirium
    // 78M, acute confusion, postoperative
    // ==========================================
    
    const HAROLD_MITCHELL_DELIRIUM = {
        meta: {
            caseId: "delirium-postop",
            patientName: "Harold Mitchell",
            age: 78,
            gender: "male",
            occupation: "Retired accountant",
            setting: "Hospital (post-op day 2)",
            diagnosis: "Delirium (multifactorial: post-operative, infection, medications)",
            criticalFindings: [
                "Acute change in mental status",
                "Fluctuating course",
                "Inattention",
                "Disorganized thinking",
                "Altered level of consciousness",
                "Risk factors: age, surgery, UTI, opioids"
            ]
        },
        
        responses: {
            // OPENING - PATIENT IS CONFUSED, NURSE/FAMILY PROVIDE HISTORY
            "hello|hi|good morning": 
                "*looks confused, agitated* Who are you? Where's my wife? I need to get out of here!",
            
            "how are you|how you doing":
                "*pulling at IV tubing* I don't know... these people are keeping me here... I have to get to work...",
            
            "mr mitchell|calm down|you're in the hospital":
                "*looks around suspiciously* Hospital? No... I was just at home... what's happening?",
            
            // NURSE/FAMILY PROVIDES HISTORY
            "what happened|nurse|tell me what's going on":
                "*nurse* He had hip replacement surgery two days ago. Was doing fine yesterday. This morning he became confused, agitated, tried to get out of bed. He's been like this all day - in and out. Worse at night.",
            
            "when did this start|when start":
                "*nurse* It started early this morning. Night shift said he was restless overnight. By morning rounds he was confused and didn't know where he was.",
            
            "baseline|normally|before surgery":
                "*nurse* His wife says he's normally very sharp. Does the crossword every day, manages their finances. This is not him at all.",
            
            "sudden|acute":
                "*nurse* Very sudden. He was oriented yesterday. Woke up confused today.",
            
            // FLUCTUATION
            "constant|all day|fluctuating":
                "*nurse* It comes and goes. Sometimes he seems more with it, then he gets confused again. Worse in the evening - 'sundowning' we call it.",
            
            "better times|lucid moments":
                "*nurse* He had a clear 20 minutes this afternoon when his wife was here. Then he started thinking she was his mother.",
            
            // ATTENTION
            "attention|focus|concentrate":
                "*nurse* He can't focus at all. Ask him to count backwards and he loses track. Can't follow a conversation.",
            
            "days of week|month|orientation":
                "*patient, interrupting* It's... it's Tuesday? Or... 1985? I'm late for work... *trails off*",
            
            // CONSCIOUSNESS LEVEL
            "awake|drowsy|alert":
                "*nurse* He fluctuates between agitated and drowsy. Right now he's kind of in between. Earlier he was very sleepy, then became agitated.",
            
            // HALLUCINATIONS/DELUSIONS
            "seeing things|hallucinations|visual":
                "*nurse* He's been pointing at things that aren't there. Said there were bugs on the ceiling. Keeps talking to people who aren't in the room.",
            
            "patient|mr mitchell|what do you see":
                "*patient, pointing to corner* There's a man there watching me. Can't you see him? Make him leave!",
            
            // PRECIPITANTS TO INVESTIGATE
            "surgery|operation|what surgery":
                "*nurse* Left hip replacement, two days ago. It went well, no complications during surgery.",
            
            "infection|fever|temp":
                "*nurse* He spiked a low-grade fever this morning. 100.4. We sent blood and urine cultures.",
            
            "urine|uti|catheter":
                "*nurse* He has a Foley catheter. His urine looked cloudy today. We're thinking UTI.",
            
            "medications|pain meds|opioids":
                "*nurse* He's been on morphine for pain. Getting it every 4 hours. Also on oxy at night.",
            
            "constipation|bowel movement":
                "*nurse* He hasn't had a bowel movement since surgery. Abdomen is a bit distended.",
            
            "sleep|sleeping|overnight":
                "*nurse* Not sleeping well. Up multiple times at night. The sleep deprivation isn't helping.",
            
            "oxygen|hypoxia|sat":
                "*nurse* Sats have been okay, 94-95% on room air. No major respiratory issues.",
            
            "drinking|dehydrated|fluid intake":
                "*nurse* Poor oral intake. We've had IVF running but he keeps pulling at the line.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "*nurse, reading chart* Diabetes, hypertension, mild dementia per wife - but nothing like this, BPH. Had a hip fracture from a fall last week, that's why the surgery.",
            
            "dementia|cognitive|baseline dementia":
                "*wife, if present* He has some mild memory issues - forgets where he put things - but he's not confused like this. He knows who I am. He knows where he is. Usually.",
            
            "previous delirium|confused before|ever like this":
                "*wife* Never. This is completely new. Even when he was sick with pneumonia a few years ago he wasn't like this.",
            
            // MEDICATIONS
            "home medications|what does he take":
                "*nurse* Metformin, lisinopril, tamsulosin, aspirin, donepezil.",
            
            "donepezil|aricept|dementia medicine":
                "*nurse* Yes, he's on donepezil 5mg for mild cognitive impairment. Has been for about a year.",
            
            "allergies":
                "*nurse* No known allergies.",
            
            // SOCIAL (LIMITED DUE TO CONDITION)
            "alcohol|drink":
                "*wife* He has a beer now and then. Not heavy drinking.",
            
            "smoke":
                "*wife* No, never smoked.",
            
            "support|live with":
                "*wife* We live together. I take care of him. We've been married 52 years.",
            
            // SAFETY
            "restraints|safety|fall risk":
                "*nurse* We have a sitter at bedside. He keeps trying to climb out of bed. We've padded the rails. He pulled out his IV twice.",
            
            // CONCERNS
            "wife|family|worried about":
                "*wife, tearful* Is this permanent? Is this dementia now? He was doing so well... I can't lose him to this...",
            
            "prognosis|will he get better|reversible":
                "*asking nurse* Can you help us understand what's happening?",
        }
    };

    // ==========================================
    // CASE: Marcus Williams - Sickle Cell Crisis
    // 24M, severe pain, vaso-occlusive crisis
    // ==========================================
    
    const MARCUS_WILLIAMS = {
        meta: {
            caseId: "sickle-cell-voc",
            patientName: "Marcus Williams",
            age: 24,
            gender: "male",
            occupation: "Graduate student",
            setting: "Emergency Department",
            diagnosis: "Vaso-occlusive crisis (sickle cell disease)",
            criticalFindings: [
                "Known sickle cell disease (HbSS)",
                "Severe bone pain",
                "Multiple sites (back, legs, chest)",
                "Triggered by URI/dehydration",
                "No fever (rules out ACS)",
                "Tachycardia from pain"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*rocking in pain, holding back* Doc... I need something for the pain... please... it's a crisis...",
            
            "how are you|how you doing":
                "*grimacing, tears in eyes* Worst one in a while... I can barely talk through it...",
            
            "what brings you in|chief complaint|why here":
                "Sickle cell crisis. I know my body. This started last night, tried to manage at home, but it's out of control. I need IV pain medication. Please.",
            
            "tell me more|can you explain":
                "*short phrases through pain* Pain in my back... my legs... my chest. Deep bone pain. Feels like someone's crushing my bones. I have sickle cell - HbSS. This is a bad crisis.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Started last night... around midnight. Tried my oral meds... didn't work. Got worse through the night.",
            
            "trigger|what caused it|why now":
                "Had a cold last week... maybe got dehydrated. I was studying late... forgot to drink enough water. That usually triggers me.",
            
            "sudden|gradual":
                "Came on over a few hours. Started in my back, spread to my legs, now my chest too.",
            
            // PAIN
            "describe the pain|what does it feel like":
                "Deep... bone pain. Like my bones are being crushed... stabbed... can't describe it. Worst pain you can imagine.",
            
            "where|location|which parts":
                "Lower back... both legs, especially the thighs. Now starting in my chest too.",
            
            "how bad|scale|severity":
                "10. Easy. This is as bad as it gets. I've been through this before... I know my pain.",
            
            "chest pain|chest|acs":
                "Some chest pain... not like last time I had chest syndrome. Different. This is bone pain that's spreading. But you should check.",
            
            "constant|comes and goes":
                "Pretty constant with waves of worse pain.",
            
            // RED FLAGS - ACUTE CHEST
            "breathing|shortness of breath|dyspnea":
                "A little harder to breathe... mainly from the pain. Deep breaths hurt.",
            
            "fever|temperature":
                "No fever at home. Checked before coming.",
            
            "cough|sick|infection":
                "Had a cough last week with my cold. Better now. Just a little residual.",
            
            "oxygen|hypoxia":
                "I don't know what my oxygen is. Can you check?",
            
            // SICKLE CELL HISTORY
            "sickle cell|type|diagnosis":
                "HbSS - homozygous. Diagnosed at birth. I've had this my whole life.",
            
            "how often|crisis frequency|how many crises":
                "Maybe 3-4 crises a year that need ER. Some years worse than others. This year has been rough.",
            
            "hospitalized|admissions":
                "Been hospitalized probably 30 times in my life. Know the drill.",
            
            "acute chest|acs|previous":
                "I had acute chest syndrome once, 3 years ago. ICU stay. That was scary. This feels different - more bone pain.",
            
            "stroke|complications|other problems":
                "No stroke. I've had avascular necrosis in my hip - had surgery. Chronic leg ulcers on and off. Kidney issues.",
            
            "transfusions|blood":
                "I've had transfusions. Not on chronic transfusion program though.",
            
            "hydroxyurea|medications":
                "I'm on hydroxyurea 1500mg daily. Take it most days. Maybe missed a few this week - been busy with exams.",
            
            "missed doses|compliance":
                "I try to be good about it. This week was crazy with finals. Might have missed a couple doses.",
            
            // PAIN MANAGEMENT
            "pain meds|what works|home meds":
                "At home I have oxycodone and ibuprofen. Took all I could. Didn't touch it. I need IV dilaudid - that's what works for me.",
            
            "what usually helps|what do they give you":
                "IV hydromorphone, fluids, sometimes ketorolac. The dilaudid PCA works best for bad crises.",
            
            "previous|last er visit|what worked":
                "Last time they gave me IV dilaudid every 2 hours till it was controlled. Then PCA. I was there 4 days.",
            
            // PAST MEDICAL
            "other conditions|medical history":
                "Just sickle cell and the complications - the hip surgery, kidney issues, past leg ulcers. No diabetes or anything else.",
            
            "medications|medicines|full list":
                "Hydroxyurea, folic acid, sometimes oxycodone PRN for pain. Aspirin for stroke prevention.",
            
            "allergies":
                "Morphine makes me itch like crazy. Dilaudid is better for me.",
            
            // SOCIAL
            "smoke|smoking":
                "No, I know not to smoke with sickle cell.",
            
            "alcohol|drugs":
                "Occasional beer. Nothing else. I'm careful with my health.",
            
            "work|school|occupation":
                "Graduate student. Public health. Actually studying disparities in sickle cell care - ironic, right?",
            
            "support|family|live with":
                "Live alone. My mom is on her way. She usually comes when I'm admitted.",
            
            // SEXUAL HISTORY - 24M
            "sexually active|having sex":
                "Yes. I have a girlfriend.",
            
            "partner|partners":
                "Just her. We've been together 2 years.",
            
            "contraception|protection":
                "She's on the pill. We used condoms for a while but stopped after we got tested.",
            
            "stis|std":
                "No, we're both clean.",
            
            "sickle cell|partner|carrier|kids":
                "She got tested - she's not a carrier. We've talked about kids eventually. That's a relief.",
            
            // PATIENT CONCERNS
            "worried about|concerns":
                "I just need pain control. And I'm worried about my chest - I don't want another chest syndrome.",
            
            "anything else":
                "Please believe me about my pain. I'm not drug-seeking. I have a real disease. I'm in school getting my masters. I just need help when I have a crisis.",
            
            "doctor shopping|seeking|judge me":
                "I know how people look at young Black men in pain asking for opioids. I have sickle cell - documented. Call my hematologist. Check my records. Just please help me.",
        }
    };

    // ==========================================
    // CASE: Rachel Torres - Thyroid Storm
    // 34F, severe hyperthyroid symptoms, tachycardia, fever
    // ==========================================
    
    const RACHEL_TORRES = {
        meta: {
            caseId: "thyroid-storm",
            patientName: "Rachel Torres",
            age: 34,
            gender: "female",
            occupation: "Restaurant manager",
            setting: "Emergency Department",
            diagnosis: "Thyroid storm",
            criticalFindings: [
                "Known Graves' disease (non-compliant)",
                "Fever (102°F)",
                "Severe tachycardia (150s)",
                "Agitation/delirium",
                "Tremor, diaphoresis",
                "Precipitated by infection/stress"
            ]
        },
        
        responses: {
            // OPENING - AGITATED, SISTER PROVIDES SOME HISTORY
            "hello|hi|good morning": 
                "*extremely agitated, sweating profusely, trembling* I can't... I feel like I'm dying... my heart... it won't stop...",
            
            "how are you|how you doing":
                "*wiping sweat, talking fast* I don't know what's happening to me! I'm burning up! My heart is pounding out of my chest!",
            
            "what brings you in|chief complaint|why here":
                "*sister interjects* Something's really wrong with her. She's been sick for a few days, but today she became really confused and agitated. Her heart is racing. She has thyroid problems.",
            
            "tell me more|can you explain":
                "*sister* She has Graves' disease. She stopped taking her medication a few months ago. She's been getting worse but today she called me incoherent. When I got there she had a fever and was acting crazy.",
            
            // TIMELINE
            "when did this start|when start":
                "*sister* She's been unwell for maybe a week - nausea, diarrhea, palpitations. Today is way worse. The confusion and extreme agitation started this morning.",
            
            "stopped medication|when stop meds":
                "*sister* Rachel, when did you stop your thyroid medication?",
            
            "*patient on meds*|medication":
                "*patient, rapid speech* I stopped... maybe 3 months ago? I felt fine! The pills made me tired! I was fine until... I don't know what's happening!",
            
            "what triggered|precipitant|why now":
                "*sister* She mentioned she had some kind of infection. A cold or something. And work has been extremely stressful.",
            
            // SYMPTOMS
            "heart|palpitations|racing":
                "*patient, hand on chest* It won't stop! Feel it! It's going to explode! I can feel it in my throat!",
            
            "fever|temperature|hot":
                "*patient* I'm so hot! I'm burning up! Why is it so hot in here? *taking off blanket*",
            
            "sweating|diaphoresis":
                "*obvious profuse sweating* I can't stop sweating! Look at me!",
            
            "tremor|shaking|hands":
                "*holds out hands - visible tremor* See? I can't stop shaking!",
            
            "agitated|anxious|restless":
                "*can't sit still, talking fast* I feel like I'm going to jump out of my skin! I can't calm down! Something's wrong!",
            
            "confused|thinking|mental status":
                "*sister* She's not making sense half the time. Kept saying things that didn't connect. She didn't recognize me at first.",
            
            // GI
            "nausea|vomiting":
                "*patient* Been throwing up... can't keep anything down...",
            
            "diarrhea|bowel movements":
                "*patient* Yes, diarrhea for days... going all the time...",
            
            "eating|weight|appetite":
                "*sister* She's lost a lot of weight recently. She said she was eating but losing weight.",
            
            // THYROID HISTORY
            "thyroid|graves|history":
                "*sister* She was diagnosed with Graves' disease about 2 years ago. She was supposed to be on medication.",
            
            "what medication|treatment":
                "*sister* I think it was methimazole? She complained it made her tired so she stopped taking it.",
            
            "symptoms before|how has she been|baseline hyperthyroid":
                "*sister* She's always been a bit high-strung, lost weight, complained about being hot. But this is extreme.",
            
            "eyes|eye problems|ophthalmopathy":
                "*sister* Her eyes have looked more bulging lately. She said they felt gritty.",
            
            "rai|radioactive iodine|surgery":
                "*sister* She was supposed to see an endocrinologist about more permanent treatment but she never followed up.",
            
            // PRECIPITANT - INFECTION
            "infection|sick|recent illness":
                "*patient, fast* I had a cold... sore throat last week... maybe strep? I didn't go to the doctor...",
            
            "stress|work|stressors":
                "*sister* Her job has been insane. She manages a restaurant - 70 hour weeks. She's barely sleeping.",
            
            // VITAL SIGNS
            "vital signs|heart rate|bp":
                "*nurse* HR 156, BP 160/90, temp 102.4, RR 24.",
            
            // PAST MEDICAL
            "other conditions|medical history":
                "*sister* Just the Graves' disease. Otherwise healthy until now.",
            
            "medications|current medications":
                "*sister* Nothing right now. She stopped the methimazole. Takes birth control, that's it.",
            
            "allergies":
                "*sister* No allergies that I know of.",
            
            // FAMILY
            "family history|thyroid in family":
                "*sister* Our mom has thyroid problems too. Takes medication.",
            
            // SOCIAL
            "smoke|smoking":
                "*sister* She smokes. Half a pack a day.",
            
            "alcohol|drugs":
                "*sister* Occasional drinking. No drugs.",
            
            "married|relationship|support":
                "*sister* Single. Married to her job basically. I'm her closest family nearby.",
            
            // SEXUAL HISTORY - 34F single
            "sexually active|having sex":
                "*sister* You'll have to ask her...",
            
            "*patient on sex*|rachel":
                "*patient, distracted* What? I... I date sometimes... what does that have to do with anything?",
            
            "contraception":
                "*patient* Birth control pills...",
            
            "pregnant|could you be pregnant|lmp":
                "*patient* No... period was... I don't know... two weeks ago maybe?",
            
            "stis|std":
                "*patient* No... I don't... what is happening to me?!",
            
            // PATIENT STATE
            "how do you feel|rachel":
                "*patient, increasingly agitated* I feel like I'm going to die! My heart! I can't think! Make it stop!",
            
            // CONCERNS
            "worried about|concerns":
                "*sister* Please help her. I've never seen her like this. Is this from her thyroid? She stopped taking her medication - is this because of that?",
            
            "anything else":
                "*sister* She's all I have. Please save my sister.",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['depression-mdd'] = JENNIFER_WALSH;
    window.COMPREHENSIVE_PATIENT_RESPONSES['anxiety-gad'] = ASHLEY_CHEN;
    window.COMPREHENSIVE_PATIENT_RESPONSES['delirium-postop'] = HAROLD_MITCHELL_DELIRIUM;
    window.COMPREHENSIVE_PATIENT_RESPONSES['sickle-cell-voc'] = MARCUS_WILLIAMS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['thyroid-storm'] = RACHEL_TORRES;
    
    console.log('ReasonDx Part 15 (Depression, Anxiety, Delirium, Sickle Cell, Thyroid Storm) loaded');

})();
