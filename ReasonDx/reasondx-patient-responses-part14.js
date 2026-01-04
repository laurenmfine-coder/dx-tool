/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 14: Infectious Disease Cases
 * 
 * Cases:
 * 1. Bacterial Meningitis - 22M
 * 2. Cellulitis - 58F
 * 3. Sepsis (UTI source) - 78F
 * 4. Influenza with complications - 45M
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Jake Thompson - Bacterial Meningitis
    // 22M, headache, fever, neck stiffness
    // ==========================================
    
    const JAKE_THOMPSON = {
        meta: {
            caseId: "bacterial-meningitis",
            patientName: "Jake Thompson",
            age: 22,
            gender: "male",
            occupation: "College student",
            setting: "Emergency Department",
            diagnosis: "Bacterial meningitis",
            criticalFindings: [
                "Severe headache",
                "High fever",
                "Nuchal rigidity (neck stiffness)",
                "Photophobia",
                "Altered mental status",
                "Petechial rash (if meningococcal)",
                "College dorm setting (close contacts)"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*lying still, eyes closed, grimacing* ...bright lights hurt... can you turn them down?...",
            
            "how are you|how you doing":
                "*weak voice, doesn't open eyes* Feel terrible... worst headache ever... please turn off the lights...",
            
            "what brings you in|chief complaint|why here":
                "*slow, pained* My head... it's killing me... the worst headache I've ever had. And my neck is so stiff I can't bend it. My roommate called 911.",
            
            "tell me more|can you explain":
                "*speaks slowly, eyes closed* Started yesterday... got worse fast... headache, then fever, then I started throwing up. This morning I couldn't lift my head off the pillow. The light feels like knives in my eyes.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Yesterday afternoon... felt a little off... then the headache started. Got worse through the night. This morning was terrible.",
            
            "sudden|gradual":
                "Started as a regular headache... got bad fast... really bad by last night.",
            
            "getting worse|progression":
                "Way worse. Keeps getting worse. This is the sickest I've ever been.",
            
            // HEADACHE
            "headache|describe headache|pain":
                "Worst headache of my life... all over... pounding... feels like my head is going to explode...",
            
            "location|where":
                "Everywhere... whole head... maybe worse in the back.",
            
            "severity|how bad|scale":
                "10... easily 10... I can't do anything...",
            
            "ever had headaches like this|before":
                "Never... I don't get headaches... nothing like this...",
            
            // NECK STIFFNESS - CRITICAL
            "neck|neck stiffness|stiff neck":
                "My neck is so stiff... I can't bend it forward... hurts to try...",
            
            "can you touch chin to chest|bend neck":
                "*tries, grimaces, stops* I can't... it hurts too much... my neck won't bend...",
            
            "when did neck start|neck when":
                "Last night... noticed it this morning... can't move it...",
            
            // PHOTOPHOBIA
            "light|lights|bothering you|photophobia":
                "The light is torture... please turn it off... even with eyes closed it hurts...",
            
            "always sensitive|light before":
                "No... this is new... everything is wrong...",
            
            // ASSOCIATED SYMPTOMS
            "fever|temperature":
                "Yeah... really high... my roommate said 103... maybe higher...",
            
            "chills|rigors":
                "Shaking earlier... teeth chattering...",
            
            "vomiting|nausea|throw up":
                "Threw up three times... even just water comes back up...",
            
            "rash|skin|spots":
                "*roommate* Actually, I noticed some spots on his legs this morning. Small red dots.",
            
            "describe rash|what do they look like":
                "*roommate* They're small, red, kind of purple. On his legs and starting on his stomach. They don't go away when I press on them.",
            
            "confusion|thinking|mental status":
                "*slow, confused* I don't know... hard to think... what day is it?",
            
            "know where you are|oriented":
                "Hospital... I think... my roommate brought me...",
            
            "sleepy|drowsy|level of consciousness":
                "So tired... hard to stay awake... just want to sleep...",
            
            // RISK FACTORS
            "college|dorm|living situation":
                "*roommate* We live in the dorms. Shared bathroom with the whole floor. Close quarters.",
            
            "anyone else sick|contacts|others ill":
                "*roommate* A guy down the hall was really sick last week. Went to the hospital. I don't know what happened to him.",
            
            "vaccinations|meningitis vaccine":
                "*confused* I think I got shots before college... my mom handled it... I don't remember...",
            
            "recent illness|cold|uti|infection":
                "Had a cold last week... thought I was over it...",
            
            "travel|been anywhere":
                "*roommate* No, he's been on campus. Just classes and dorm.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "*roommate* He's usually healthy. No major problems. Just a normal college kid.",
            
            "immune problems|immunocompromised":
                "No... healthy...",
            
            "medications":
                "*roommate* Just Advil sometimes. Nothing regular.",
            
            "allergies":
                "*roommate* He's allergic to penicillin. His mom told me. Gets a rash.",
            
            // SOCIAL
            "smoke|smoking":
                "*roommate* No, he doesn't smoke.",
            
            "alcohol|drinking":
                "*roommate* Socially. College, you know. He was at a party over the weekend but nothing crazy.",
            
            "drugs|marijuana|recreational":
                "*roommate* Maybe smokes weed occasionally. Nothing hard.",
            
            // SEXUAL HISTORY - 22M college
            "sexually active|having sex":
                "*embarrassed, quiet* Yeah...",
            
            "partner|partners":
                "Girlfriend... Sarah... we've been together 6 months...",
            
            "condoms|protection":
                "She's on the pill... don't always use condoms...",
            
            "stis|std|history":
                "No... we're both clean... got tested...",
            
            "other partners|just her":
                "Just her... we're exclusive...",
            
            // CONCERNS
            "worried about|concerns|scared":
                "*barely audible* Am I dying?... this is so bad...",
            
            "*roommate concerns*|roommate":
                "*roommate* I'm scared. I've never seen him like this. Is it contagious? Should I be worried?",
            
            "anything else":
                "*roommate* Please help him. He was fine two days ago. This happened so fast.",
        }
    };

    // ==========================================
    // CASE: Patricia Evans - Cellulitis
    // 58F, red swollen leg, diabetic
    // ==========================================
    
    const PATRICIA_EVANS = {
        meta: {
            caseId: "cellulitis-leg",
            patientName: "Patricia Evans",
            age: 58,
            gender: "female",
            occupation: "Office administrator",
            setting: "Urgent Care",
            diagnosis: "Cellulitis (left lower extremity)",
            criticalFindings: [
                "Expanding erythema",
                "Warmth and tenderness",
                "Portal of entry (crack in skin)",
                "Diabetes (risk factor)",
                "No abscess/fluctuance",
                "Low-grade fever"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "Hi. My leg is red and swollen. It's been getting worse.",
            
            "how are you|how you doing":
                "Worried. This red area on my leg keeps spreading. I'm diabetic so I know leg problems can be serious.",
            
            "what brings you in|chief complaint|why here":
                "My left leg - lower leg - is red, hot, and swollen. Started a few days ago and keeps getting bigger. I drew a line around it and it's spread past the line. As a diabetic, I know I need to take this seriously.",
            
            "tell me more|can you explain":
                "I noticed a small red patch about 3 days ago. Thought maybe I bumped it. But it's been spreading, getting redder and more swollen. It's warm to touch and tender. I'm worried it's infected.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "First noticed the redness about 3 days ago. It's been gradually spreading since.",
            
            "sudden|gradual":
                "Gradual. Started small and has been growing.",
            
            "getting worse|progression":
                "Definitely worse. That's why I came in. I drew a line with a marker 2 days ago and the redness has spread past it.",
            
            // LOCAL SYMPTOMS
            "describe|what does it look like":
                "It's red - really red. Swollen. The skin is tight. You can see a clear edge where the normal skin meets the red area.",
            
            "where|location|which part":
                "Left lower leg. Front and side. *shows leg* See? From here down to my ankle.",
            
            "how much|size|how big":
                "Started about the size of my palm. Now it's most of my lower leg.",
            
            "warm|hot|temperature":
                "Yes, it's warm to touch. Hotter than the other leg.",
            
            "tender|painful|hurt":
                "Very tender. Even my pants touching it hurts.",
            
            "swollen|swelling|edema":
                "Swollen. My ankle is bigger than the other one. Sock leaves marks.",
            
            "streak|red lines|tracking":
                "No red lines going up. Just the patch.",
            
            // ABSCESS VS CELLULITIS
            "bump|lump|abscess|collection":
                "No bump or lump. Just the flat redness and swelling.",
            
            "draining|pus|discharge":
                "No pus or drainage.",
            
            "soft or firm|fluctuance":
                "Firm and swollen. Not soft or squishy.",
            
            // PORTAL OF ENTRY
            "cut|injury|break in skin|trauma":
                "Actually, I had dry cracked skin between my toes. It's been there for a while. Might be athlete's foot.",
            
            "athlete's foot|fungal|between toes":
                "Yeah, I've had itchy cracked skin between my toes for months. Never treated it.",
            
            "bug bite|insect|mosquito":
                "No bug bites that I noticed.",
            
            "scratch|scraped":
                "No scratches or scrapes.",
            
            // SYSTEMIC
            "fever|temperature":
                "Maybe a low fever. Felt warm yesterday. Didn't take my temperature.",
            
            "chills|rigors":
                "Some mild chills last night.",
            
            "body aches|malaise|feel sick":
                "A little achy and tired. Not terrible.",
            
            "nausea|vomiting":
                "No nausea or vomiting.",
            
            // DIABETES - CRITICAL
            "diabetes|diabetic|blood sugar":
                "Yes, I'm diabetic. Type 2. About 10 years now.",
            
            "controlled|well controlled|a1c":
                "Not as well as it should be. Last A1C was 8.2. I try but it's hard.",
            
            "check feet|examine feet|look at feet":
                "I'm supposed to check them daily. I admit I don't always.",
            
            "neuropathy|feel your feet|sensation":
                "Some numbness in my feet. I don't always feel things.",
            
            "circulation|blood flow|pulses":
                "The doctor says my circulation isn't great. I have to be careful.",
            
            "previous foot problems|ulcers|infections before":
                "I had a small ulcer on my heel a few years ago. It healed eventually.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Diabetes, high blood pressure, high cholesterol. Pretty typical for someone my size.",
            
            "weight|overweight":
                "I'm overweight, I know. About 50 pounds too heavy.",
            
            "other leg problems|clots|dvt":
                "No blood clots or vein problems that I know of.",
            
            // MEDICATIONS
            "medications|medicines":
                "Metformin, glipizide for diabetes. Lisinopril for blood pressure. Atorvastatin.",
            
            "insulin|on insulin":
                "No, just pills so far.",
            
            "allergies":
                "Sulfa drugs. I break out in hives.",
            
            // SOCIAL
            "smoke|smoking":
                "I quit 5 years ago. Smoked for 20 years before that.",
            
            "alcohol":
                "Occasional wine. Once a week maybe.",
            
            "work|job":
                "Office administrator. Desk job. On my feet some.",
            
            "married|family":
                "Married 30 years. Husband's retired.",
            
            // SEXUAL HISTORY - 58F married
            "sexually active|having sex":
                "Yes, with my husband.",
            
            "partner":
                "Just my husband. 30 years.",
            
            "condoms|contraception":
                "No, I had a hysterectomy 15 years ago. And I'm past menopause.",
            
            "stis|std":
                "No, never. Just my husband.",
            
            // CONCERNS
            "worried about|concerns":
                "I'm scared of losing my leg. I know diabetics can lose limbs from infections. That terrifies me.",
            
            "anything else":
                "Please take this seriously. I know how fast things can go bad with diabetes.",
        }
    };

    // ==========================================
    // CASE: Ruth Anderson - Sepsis (UTI source)
    // 78F, confusion, fever, hypotension
    // ==========================================
    
    const RUTH_ANDERSON = {
        meta: {
            caseId: "sepsis-uti",
            patientName: "Ruth Anderson",
            age: 78,
            gender: "female",
            occupation: "Retired librarian",
            setting: "Emergency Department",
            diagnosis: "Sepsis secondary to UTI (urosepsis)",
            criticalFindings: [
                "Elderly female with confusion",
                "Fever",
                "Tachycardia",
                "Hypotension",
                "UTI symptoms (dysuria, frequency)",
                "Recent UTI history"
            ]
        },
        
        responses: {
            // OPENING - Son provides much of history
            "hello|hi|good morning": 
                "*confused, slightly lethargic* Hello?... who are you?",
            
            "how are you|how you doing":
                "*mumbles* I don't feel good... where am I?",
            
            "what brings you in|chief complaint|why here":
                "*son* My mom called me this morning not making any sense. She was confused, talking gibberish. I went over and found her with a fever. She's not usually like this.",
            
            "tell me more|can you explain":
                "*son* She's 78, lives alone, usually pretty sharp. This morning she called me and was completely confused. Didn't know what day it was, was rambling. I went over and she had a fever of 102. She also said it hurt when she pees.",
            
            // PATIENT ATTEMPTS
            "mrs anderson|how do you feel":
                "*confused* I'm... I don't know... tired... cold... *shivers*",
            
            "where are you|know where you are":
                "*looks around confused* Is this... the hospital? Why am I here? *looks at son*",
            
            "what day is it|what's today":
                "*thinks* It's... um... Tuesday? *it's actually Saturday*",
            
            // TIMELINE - SON PROVIDES
            "when did this start|when start":
                "*son* She was fine when I talked to her last night. This morning she was a different person.",
            
            "how long confused|confusion when":
                "*son* Since this morning. Maybe earlier - she lives alone so I don't know exactly when it started.",
            
            "sudden|gradual":
                "*son* Seemed sudden to me. Fine yesterday, confused today.",
            
            // UTI SYMPTOMS
            "urinary|pee|uti symptoms|dysuria":
                "*son* She told me it burns when she pees. And she's been going a lot.",
            
            "*patient on urinary*|does it burn":
                "*patient, slowly* Burns... hurts... have to go a lot...",
            
            "how long|when did that start":
                "*son* She mentioned a few days ago she might have a UTI starting. I told her to call her doctor.",
            
            "blood in urine|hematuria":
                "*son* I don't know. Mom, have you seen blood?",
            
            "*patient on blood*":
                "*patient* Blood?... maybe... pink... I don't remember...",
            
            "uti before|previous utis|history":
                "*son* She gets UTIs every few months. She's had several in the past year.",
            
            // SYSTEMIC
            "fever|temperature":
                "*son* 102 when I checked at her apartment. She was shivering.",
            
            "chills|rigors":
                "*patient, shivering* Cold... so cold...",
            
            "eating|drinking|appetite":
                "*son* She said she hasn't eaten since yesterday. Not drinking much either.",
            
            "vomiting|nausea":
                "*son* She was nauseous, didn't vomit.",
            
            // VITAL SIGNS
            "heart rate|pulse|tachycardic":
                "*from nurse* Heart rate is 110.",
            
            "blood pressure|hypotension|low bp":
                "*from nurse* BP is 88/55. Lower than her usual.",
            
            "usual blood pressure|baseline bp":
                "*son* Usually it's around 130/80. She takes medicine for it.",
            
            // CONFUSION
            "usually confused|baseline mental status|normally":
                "*son* No! She's sharp as a tack normally. Does the crossword every day. This is not her.",
            
            "dementia|memory problems|alzheimer's":
                "*son* No dementia. She's completely independent. Lives alone, drives, does everything herself.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "*son* High blood pressure, some arthritis, the recurrent UTIs. She had a hip replaced a few years ago. Otherwise pretty healthy for 78.",
            
            "diabetes":
                "*son* No diabetes.",
            
            "kidney problems":
                "*son* No kidney problems that I know of.",
            
            "catheter|urinary catheter":
                "*son* No catheter. She goes on her own.",
            
            // MEDICATIONS
            "medications|medicines":
                "*son* Let me check... *pulls out list* Lisinopril, amlodipine, calcium and vitamin D, a baby aspirin, and a probiotic.",
            
            "allergies":
                "*son* Penicillin. She gets a rash.",
            
            // SOCIAL
            "live alone|living situation":
                "*son* She lives alone in a small apartment. Independent. I check on her every day or two.",
            
            "help at home|caregiver":
                "*son* She doesn't need help usually. Does everything herself. That's why this is so scary.",
            
            "alcohol|smoke":
                "*son* Doesn't drink, never smoked.",
            
            // SEXUAL HISTORY - 78F widow
            "sexually active|having sex":
                "*son, uncomfortable* Um, she's a widow. My dad passed 10 years ago. I don't think...",
            
            "*patient on this*|mrs anderson":
                "*patient* What? No... Henry passed... I'm alone...",
            
            "stis|std":
                "*son* No, nothing like that. She was married to my dad for 50 years.",
            
            // CONCERNS
            "worried about|concerns":
                "*son* Is this a stroke? Why is she so confused? I've never seen her like this.",
            
            "advance directive|code status|wishes":
                "*son* She has a living will. She doesn't want extreme measures if there's no hope. But she was healthy yesterday!",
            
            "anything else":
                "*son* Please help her. She's the strongest person I know. This isn't her. Something is very wrong.",
        }
    };

    // ==========================================
    // CASE: Mark Stevens - Influenza with complications
    // 45M, fever, myalgias, dyspnea concerning for pneumonia
    // ==========================================
    
    const MARK_STEVENS = {
        meta: {
            caseId: "influenza-complicated",
            patientName: "Mark Stevens",
            age: 45,
            gender: "male",
            occupation: "High school teacher",
            setting: "Urgent Care",
            diagnosis: "Influenza with secondary bacterial pneumonia",
            criticalFindings: [
                "High fever x 5 days",
                "Severe myalgias",
                "Dry cough progressing to productive",
                "Dyspnea developing",
                "Biphasic illness (got better then worse)",
                "No flu shot"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*looks exhausted, coughing* Hey doc... *cough* ...this flu won't quit... getting worse actually.",
            
            "how are you|how you doing":
                "Terrible. I thought I was getting over the flu but now I feel worse than when it started.",
            
            "what brings you in|chief complaint|why here":
                "I've had the flu for almost a week. Fever, body aches, cough. I thought I was turning the corner a few days ago but now I'm worse. The fever came back higher and now I'm having trouble breathing.",
            
            "tell me more|can you explain":
                "Started about 5 days ago - sudden fever, chills, body aches, headache. Classic flu. Around day 3 I started feeling a little better. Then yesterday it got worse again - higher fever, cough got worse, and now I'm short of breath. That scared me.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Five days ago. Came on suddenly.",
            
            "sudden|gradual":
                "Sudden. I was fine, then within hours I had fever, chills, felt like I was hit by a truck.",
            
            "better then worse|biphasic|getting better":
                "Yes! Day 3 or so I felt like I was improving. Less fever, more energy. Then yesterday it came back with a vengeance.",
            
            // FEVER
            "fever|temperature":
                "Started at 102-103. Came down to 99 for a day. Now it's back to 103.",
            
            "chills|rigors":
                "Terrible chills at the beginning. They came back yesterday.",
            
            "sweats|night sweats":
                "Drenched in sweat last night. Had to change my shirt twice.",
            
            // MYALGIAS
            "body aches|muscle pain|myalgias":
                "Everything hurts. My muscles are so sore. Even my eyeballs hurt.",
            
            "where|which muscles":
                "Everywhere - back, legs, arms. Even hurts to move.",
            
            "headache":
                "Bad headache at the beginning. Better now but still there.",
            
            // RESPIRATORY - PROGRESSIVE
            "cough|coughing":
                "Started as a dry cough. Now I'm bringing up stuff.",
            
            "productive|sputum|what comes up":
                "Yellowish-green now. Thick. When it started it was dry, nothing came up.",
            
            "blood|hemoptysis":
                "No blood.",
            
            "shortness of breath|dyspnea|breathing":
                "That's new and scary. Started yesterday. I get winded walking across the room.",
            
            "at rest|sitting|lying":
                "A little even at rest. Worse with any activity.",
            
            "chest pain|chest":
                "Some chest discomfort when I cough. Sharp catch.",
            
            "where|location chest":
                "Right side of my chest. When I take a deep breath or cough.",
            
            // EXPOSURES
            "exposure|sick contacts|where did you get it":
                "I'm a teacher. Half my students have been out sick. It's been going around school.",
            
            "flu shot|vaccinated|immunized":
                "No, I didn't get the flu shot this year. I know, I know. Usually I'm good about it. Just didn't get around to it.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure, bit of asthma when I was younger. Otherwise healthy.",
            
            "asthma|inhalers|lung problems":
                "Had asthma as a kid. Mostly outgrew it. Don't use inhalers anymore.",
            
            "immunocompromised|immune problems":
                "No immune problems.",
            
            // TRIED
            "tried anything|treatment|home":
                "Tamiflu - I went to urgent care on day 2 and they gave me Tamiflu. Took the whole course. Tylenol for fever. Lots of fluids. Rest.",
            
            "tamiflu help|did it help":
                "I think it helped at first. That's when I started feeling better. Then I crashed again.",
            
            // MEDICATIONS
            "medications|medicines":
                "Lisinopril for blood pressure. Finished the Tamiflu yesterday. Tylenol as needed.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke|smoking":
                "No, never smoked.",
            
            "alcohol":
                "Occasional beer. Not when I'm sick.",
            
            "work|job|occupation":
                "High school teacher. Biology. Lots of exposure to sick kids.",
            
            "married|family":
                "Married, two teenage kids. They're sick too but not as bad. My wife seems to have dodged it.",
            
            // SEXUAL HISTORY - 45M married
            "sexually active|having sex":
                "Yes, with my wife. Well, not this week obviously.",
            
            "partner":
                "Just my wife. 18 years married.",
            
            "condoms|contraception":
                "She has an IUD. No condoms needed.",
            
            "stis|std":
                "No, never. Just been with her.",
            
            // CONCERNS
            "worried about|concerns":
                "The breathing thing scares me. And getting worse after getting better. Is it pneumonia? Something else?",
            
            "anything else":
                "I need to get better. I have 150 students counting on me. And I can't miss more school.",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['bacterial-meningitis'] = JAKE_THOMPSON;
    window.COMPREHENSIVE_PATIENT_RESPONSES['cellulitis-leg'] = PATRICIA_EVANS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['sepsis-uti'] = RUTH_ANDERSON;
    window.COMPREHENSIVE_PATIENT_RESPONSES['influenza-complicated'] = MARK_STEVENS;
    
    console.log('ReasonDx Part 14 (Meningitis, Cellulitis, Sepsis, Influenza) loaded');

})();
