/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 8: CAP Pneumonia, UTI, Acute Pancreatitis, Pyelo, Kidney Stone
 * 
 * Core clinical cases with comprehensive responses
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Margaret Wilson - Community Acquired Pneumonia
    // 72F, cough, fever, dyspnea
    // ==========================================
    
    const MARGARET_WILSON = {
        meta: {
            caseId: "cap-pneumonia",
            patientName: "Margaret Wilson",
            age: 72,
            gender: "female",
            occupation: "Retired librarian",
            setting: "Emergency Department",
            diagnosis: "Community acquired pneumonia",
            criticalFindings: [
                "Productive cough x 5 days",
                "Fever 101.8°F",
                "Dyspnea on exertion",
                "Pleuritic chest pain",
                "Risk factors: age, COPD history"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*coughing* Hello... *clears throat* excuse me.",
            
            "how are you|how you doing":
                "*coughs* Not well. This cough won't quit and I'm having trouble catching my breath.",
            
            "what brings you in|chief complaint|why here|what's wrong":
                "I've had this terrible cough for about 5 days now. Bringing up awful stuff. And I've had a fever. Today I got so short of breath I knew I had to come in.",
            
            "tell me more|can you explain":
                "Started with a cold about a week ago. Runny nose, sore throat. I thought it was getting better but then I developed this deep cough. Started bringing up green phlegm. And yesterday I got the fever.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "The cold symptoms started about a week ago. The bad cough with the phlegm started maybe 5 days ago. Fever started yesterday.",
            
            "progression|gotten worse":
                "Definitely worse. The first few days were just a dry cough. Then it became productive. Now I'm short of breath too.",
            
            "why today|why come in now":
                "I couldn't climb the stairs to my bedroom last night. Had to sleep on the couch. Woke up drenched in sweat. That scared me.",
            
            // COUGH - DETAILED
            "describe the cough|cough character":
                "Deep, rattly cough. Feels like it's coming from deep in my chest.",
            
            "productive|bringing anything up|sputum|phlegm":
                "Yes, I'm coughing up phlegm. Quite a bit.",
            
            "what color|describe sputum|what does it look like":
                "Greenish-yellow. Thick. Sometimes has brown streaks.",
            
            "blood|bloody|hemoptysis|blood in sputum":
                "I saw some brownish streaks yesterday. Not bright red blood.",
            
            "how much|amount of sputum":
                "Maybe a tablespoon or two each time I really cough.",
            
            "when worse|timing":
                "Worse in the morning. And when I try to lie down at night.",
            
            // FEVER
            "fever|temperature|how high":
                "I checked this morning - 101.8. Yesterday evening it was 102.",
            
            "chills|rigors|shaking":
                "Yes, I had chills last night. Was shivering under my blankets.",
            
            "night sweats|sweating":
                "Woke up drenched. My nightgown was soaked.",
            
            // DYSPNEA
            "shortness of breath|trouble breathing|dyspnea":
                "Getting worse. Yesterday I couldn't climb stairs. Even walking to the bathroom makes me winded now.",
            
            "at rest|right now|sitting":
                "A little short of breath even sitting here. Better than walking but still there.",
            
            "how far can you walk|exercise tolerance":
                "Maybe 20 feet before I need to stop. Usually I can walk all around my house, do my garden.",
            
            "lying flat|orthopnea|pillows":
                "Can't lie flat - makes me cough and feel like I'm drowning. Sleeping propped up on 3 pillows.",
            
            // CHEST PAIN
            "chest pain|chest discomfort":
                "Yes, sharp pain on my right side when I take a deep breath or cough.",
            
            "where|location|point":
                "*points to right lower chest* Right here, on my side.",
            
            "what makes it worse|aggravating":
                "Deep breathing and coughing. Really sharp with coughing.",
            
            "describe|character of pain":
                "Sharp, stabbing. Only with breathing and coughing. Not there when I hold my breath.",
            
            // ASSOCIATED SYMPTOMS
            "nausea|vomiting":
                "A little nauseous. Haven't thrown up.",
            
            "appetite":
                "Haven't felt like eating much. Been drinking tea and soup.",
            
            "fatigue|tired|energy":
                "Exhausted. Can barely get out of bed.",
            
            "headache":
                "A little headache with the fever.",
            
            "muscle aches|body aches":
                "Yes, achy all over. Like the flu.",
            
            // PAST MEDICAL HISTORY
            "medical history|medical problems|conditions":
                "COPD - I have mild COPD. High blood pressure. A little bit of diabetes.",
            
            "copd|lung disease|emphysema":
                "Mild COPD. I use an inhaler sometimes. I smoked for 20 years but quit 25 years ago.",
            
            "copd usually controlled|baseline":
                "Usually fine. Don't need oxygen or anything. Just the occasional inhaler.",
            
            "hospitalizations|pneumonia before":
                "Had pneumonia once about 5 years ago. Was in the hospital for 3 days.",
            
            // MEDICATIONS
            "medications|medicines|what do you take":
                "Lisinopril for blood pressure, metformin for diabetes, and albuterol inhaler when I need it.",
            
            "inhaler|albuterol|how often":
                "Maybe twice a week usually. Been using it 3-4 times a day this week.",
            
            "allergies":
                "Penicillin - I get hives.",
            
            // VACCINES
            "vaccines|pneumonia vaccine|flu shot":
                "I had my flu shot this fall. Had a pneumonia shot a few years ago.",
            
            // SOCIAL
            "smoke|smoking|cigarettes":
                "I quit 25 years ago. Smoked for about 20 years before that.",
            
            "pack years":
                "About a pack a day for 20 years. So 20 pack-years.",
            
            "alcohol":
                "Occasionally. Glass of wine with dinner sometimes.",
            
            "live with|living situation":
                "I live alone. My husband passed 5 years ago. Daughter lives nearby.",
            
            "sick contacts|anyone else sick":
                "My grandson had a cold when I saw him last week.",
            
            // SEXUAL HISTORY - 72F, widowed
            "sexually active|having sex":
                "No, not since my husband passed. That's been 5 years now.",
            
            "partner":
                "No, I'm not seeing anyone.",
            
            "stis|std":
                "No, never had any STIs. Just my husband for 48 years.",
            
            // PATIENT CONCERNS
            "worried about|concerns":
                "I'm worried it's pneumonia again. Last time was scary. And at my age...",
            
            "anything else":
                "Please help me get better. I don't want to end up in the hospital for a long time.",
        }
    };

    // ==========================================
    // CASE: Sarah Mitchell - UTI/Cystitis
    // 32F, dysuria, frequency, urgency
    // ==========================================
    
    const SARAH_MITCHELL = {
        meta: {
            caseId: "uti-cystitis",
            patientName: "Sarah Mitchell",
            age: 32,
            gender: "female",
            occupation: "Elementary school teacher",
            setting: "Urgent Care",
            diagnosis: "Uncomplicated cystitis (UTI)",
            criticalFindings: [
                "Dysuria x 2 days",
                "Urinary frequency and urgency",
                "Suprapubic discomfort",
                "No fever (rules out pyelo)",
                "No flank pain",
                "Recent sexual activity (risk factor)"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "Hi, thanks for seeing me. This is kind of embarrassing.",
            
            "how are you|how you doing":
                "Uncomfortable. I think I have a bladder infection.",
            
            "what brings you in|chief complaint|why here|what's wrong":
                "It burns when I pee. And I feel like I have to go all the time but barely anything comes out. It started a couple days ago.",
            
            "tell me more|can you explain":
                "Started two days ago with just feeling like I had to pee more often. Then yesterday it started burning. Now it really hurts every time I go.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "The frequency started about 2 days ago. The burning started yesterday. Getting worse.",
            
            // URINARY SYMPTOMS
            "burning|dysuria|hurt to pee":
                "Yes, burns every time I urinate. Really stings.",
            
            "when does it burn|during or after":
                "During, mainly. And the feeling lingers after.",
            
            "frequency|how often|peeing a lot":
                "Every 30 minutes. Sometimes less. I feel like I constantly have to go.",
            
            "urgency|sudden urge|can't hold it":
                "Yes, when I have to go, I HAVE to go. Almost had an accident yesterday.",
            
            "amount|how much comes out":
                "Just a little bit each time. Feel like I have to go but then it's just a dribble.",
            
            "blood|blood in urine|hematuria":
                "I thought I saw a little pink yesterday. Not a lot.",
            
            "cloudy|smell|odor":
                "It does smell stronger than usual. Kind of unpleasant.",
            
            // PAIN
            "pain|where does it hurt|location":
                "Low in my belly, right above my pubic bone. And the burning when I pee.",
            
            "back pain|flank pain|kidney area":
                "No, not in my back or sides. Just low in front.",
            
            // SYSTEMIC
            "fever|temperature|feverish":
                "No fever. I checked. I don't feel feverish.",
            
            "chills|rigors":
                "No chills.",
            
            "nausea|vomiting":
                "No nausea or vomiting.",
            
            // RISK FACTORS - SEXUAL HISTORY
            "sexually active|having sex|intercourse":
                "Yes. Actually, I think that might be related. We were... active... this past weekend.",
            
            "new partner|partner":
                "Same partner. My boyfriend. We've been together about 6 months.",
            
            "how often|frequency of sex":
                "A few times this past weekend. More than usual.",
            
            "urinate after sex|prevention":
                "I try to but I didn't always this weekend. I know I should.",
            
            "condoms|protection":
                "No, I'm on the pill. We stopped using condoms a few months ago.",
            
            "why no condoms":
                "We've been together 6 months, exclusive, both tested. I'm on reliable birth control.",
            
            "monogamous|exclusive":
                "Yes, just us.",
            
            "stis|std|infections|ever had":
                "No, I've never had an STI. We both got tested when we started dating.",
            
            "contraception|birth control|what do you use":
                "Birth control pill. Take it every day same time.",
            
            // UTI HISTORY
            "had this before|uti before|previous":
                "I get these maybe once a year. This is probably my third or fourth UTI ever.",
            
            "what worked before|treatment":
                "Antibiotics. Bactrim usually. Cleared up in a few days.",
            
            // GYN
            "vaginal discharge|discharge":
                "No unusual discharge.",
            
            "period|lmp|last menstrual period":
                "About 2 weeks ago. It was normal.",
            
            "could you be pregnant|pregnancy possible":
                "I'm on the pill and take it regularly. I don't think so.",
            
            // PAST MEDICAL
            "medical history|medical problems|conditions":
                "Nothing major. Healthy. Just occasional UTIs.",
            
            "allergies":
                "Sulfa drugs. I get a rash. That's why they give me something else for UTIs.",
            
            // MEDICATIONS
            "medications|medicines":
                "Just birth control pills. No other medications.",
            
            // SOCIAL
            "smoke":
                "No, never.",
            
            "alcohol":
                "Socially. Wine on weekends.",
            
            "work|job":
                "I'm a teacher. Second grade. Hard to run to the bathroom every 30 minutes with 25 kids!",
            
            // PATIENT CONCERNS
            "worried about|concerns":
                "Just want to make sure it's nothing more serious. And I need to get back to teaching!",
            
            "anything else":
                "Can you give me something that works fast? I can't keep running to the bathroom.",
        }
    };

    // ==========================================
    // CASE: David Thompson - Acute Pancreatitis
    // 45M, severe epigastric pain, nausea/vomiting
    // ==========================================
    
    const DAVID_THOMPSON = {
        meta: {
            caseId: "acute-pancreatitis",
            patientName: "David Thompson",
            age: 45,
            gender: "male",
            occupation: "Sales manager",
            setting: "Emergency Department",
            diagnosis: "Acute pancreatitis (alcohol-induced)",
            criticalFindings: [
                "Severe epigastric pain radiating to back",
                "Worse lying flat, better leaning forward",
                "Nausea and vomiting",
                "Heavy alcohol use (6-8 drinks daily)",
                "Recent binge drinking"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*grimacing, leaning forward in bed* Hi... *takes shallow breaths*",
            
            "how are you|how you doing":
                "*in obvious pain* Terrible. This pain is the worst thing I've ever felt.",
            
            "what brings you in|chief complaint|why here|what's wrong":
                "My stomach. *points to upper abdomen* Right here. It started last night and just keeps getting worse. It's unbearable.",
            
            "tell me more|can you explain":
                "The pain started after dinner last night. Thought it was just indigestion at first. But it got so bad I was up all night. Goes straight through to my back. Can't find any position that helps except leaning forward like this.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "Last night, maybe around 9 or 10pm. After I had dinner and some drinks.",
            
            "what did you eat|dinner":
                "We had steaks. Pretty fatty. And I had quite a few drinks.",
            
            "drinks|alcohol|how much last night":
                "Maybe 6 or 7 beers over the evening. Started at happy hour.",
            
            "sudden or gradual":
                "Started gradual, like indigestion. Then ramped up fast over a couple hours.",
            
            // PAIN
            "describe the pain|what does it feel like|character":
                "Boring. Like something drilling through me from front to back. Constant, relentless.",
            
            "where|location|point":
                "*points to epigastrium* Right here in the pit of my stomach. But it goes straight through to my back.",
            
            "radiate|spread|go to your back|back pain":
                "Yes, goes straight through to my back. Like a knife going from front to back.",
            
            "how bad|scale|severity":
                "Right now, 9. Maybe 10 at its worst. Worst pain of my life.",
            
            // AGGRAVATING/RELIEVING
            "what makes it worse|aggravating":
                "Lying flat is the worst. Eating makes it worse. Any movement.",
            
            "lying down|lying flat":
                "Can't lie flat at all. Makes the pain so much worse.",
            
            "what makes it better|relieving|position":
                "Leaning forward like this helps a little. Nothing really makes it go away.",
            
            // ASSOCIATED SYMPTOMS
            "nausea|nauseated":
                "Extremely nauseous. Haven't been able to keep anything down.",
            
            "vomiting|throw up|vomited":
                "Yes, multiple times. Started a few hours after the pain.",
            
            "how many times":
                "At least 6 or 7 times since last night. Now it's just dry heaving.",
            
            "fever|temperature":
                "I don't think I have a fever. Feel clammy though.",
            
            // JAUNDICE
            "yellow|jaundice|skin color|eyes":
                "No, I don't think so. My wife didn't say anything.",
            
            // ALCOHOL HISTORY - CRITICAL
            "alcohol|drinking|how much usually":
                "*pauses* I drink... probably more than I should.",
            
            "how much|daily|weekly":
                "Probably 6-8 drinks on a weekday. More on weekends.",
            
            "every day|daily drinking":
                "Pretty much every day. Beer mostly. Sometimes whiskey.",
            
            "how long|years drinking":
                "Heavy like this? Probably 10-15 years.",
            
            "morning drinking|need a drink":
                "Sometimes I have one in the morning if I'm shaky.",
            
            "withdrawal|shakes|tremors":
                "I get shaky if I don't drink for a day. Sweaty. Anxious.",
            
            "tried to cut back|quit":
                "I've tried. It's hard. My job involves a lot of client dinners.",
            
            "last drink|most recent alcohol":
                "Last night. Had 6-7 beers between happy hour and dinner.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "High blood pressure. High cholesterol. Doctor's been on me about my weight and drinking.",
            
            "pancreatitis before|ever had this before":
                "Never this bad. I've had stomach pain after drinking before but nothing like this.",
            
            "gallbladder|gallstones":
                "Not that I know of. Never had an ultrasound.",
            
            "allergies":
                "No medication allergies.",
            
            // MEDICATIONS
            "medications|medicines":
                "Lisinopril for blood pressure. Atorvastatin for cholesterol.",
            
            // SOCIAL
            "smoke|smoking":
                "I smoke. About half a pack a day.",
            
            "drugs|recreational":
                "No drugs. Just alcohol and cigarettes.",
            
            "work|job":
                "Sales manager. Pharmaceutical sales. High stress, lots of client dinners.",
            
            "married|family":
                "Married 18 years. Two kids - 15 and 12. My wife's in the waiting room.",
            
            // SEXUAL HISTORY - 45M married
            "sexually active|having sex":
                "Yes, with my wife.",
            
            "partner|partners":
                "Just my wife. 18 years married.",
            
            "contraception|condoms":
                "She had a tubal ligation. We don't need birth control.",
            
            "stis|std":
                "No, never. Just been with my wife.",
            
            // PATIENT CONCERNS
            "worried about|concerns":
                "I know this is probably from drinking. I'm scared. My wife's been warning me for years.",
            
            "anything else":
                "I know I need to quit. This is a wake-up call.",
        }
    };

    // ==========================================
    // CASE: Amanda Foster - Acute Pyelonephritis
    // 29F, flank pain, fever, dysuria
    // ==========================================
    
    const AMANDA_FOSTER = {
        meta: {
            caseId: "flank-pain-pyelo",
            patientName: "Amanda Foster",
            age: 29,
            gender: "female",
            occupation: "Nurse",
            setting: "Emergency Department",
            diagnosis: "Acute pyelonephritis",
            criticalFindings: [
                "Left flank pain",
                "Fever 102.4°F with rigors",
                "Dysuria, frequency",
                "CVA tenderness",
                "UTI symptoms preceded"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*lying on side, shivering* Hi...",
            
            "how are you|how you doing":
                "*shivering* Terrible. I'm a nurse - I know this is a kidney infection.",
            
            "what brings you in|chief complaint|why here":
                "I think I have a kidney infection. Started as a UTI a few days ago. Now I have a fever and this horrible pain in my left side.",
            
            "tell me more|can you explain":
                "It started about 4 days ago with burning when I pee. I thought I could flush it out with water. But yesterday I got a fever and this awful pain in my left flank.",
            
            // TIMELINE
            "when did this start|when start":
                "The UTI symptoms started about 4 days ago. The fever and flank pain started yesterday.",
            
            "utis symptoms first|what came first":
                "The burning and frequency came first. Then about 3 days later, I got the fever and left side pain.",
            
            "why didn't you come in sooner":
                "I'm a nurse - we're stubborn. I thought I could handle it myself.",
            
            // FLANK PAIN
            "describe the pain|pain character":
                "Deep, dull ache in my left flank. Constant. Sometimes sharper waves.",
            
            "where|location|point":
                "*points to left CVA area* Right here. Left side, in my back. Kidney area.",
            
            "one side or both":
                "Just the left side.",
            
            "cva tenderness|tap your back":
                "Yes, very tender there. Please don't do that again.",
            
            // FEVER/SYSTEMIC
            "fever|temperature":
                "102.4 when I checked at home. Started yesterday afternoon.",
            
            "chills|rigors|shaking":
                "Yes, bad rigors. Shaking uncontrollably. Classic pyelo sign.",
            
            "sweats|night sweats":
                "Alternating between chills and sweating. Soaked my sheets.",
            
            // URINARY SYMPTOMS
            "urinary symptoms|burning|dysuria":
                "Yes, burning when I pee. Started 4 days ago.",
            
            "frequency|how often":
                "Every 30-45 minutes. Feel like I constantly have to go.",
            
            "blood|hematuria":
                "Maybe a little pink tinged.",
            
            // ASSOCIATED
            "nausea|nauseated":
                "Very nauseous. Started this morning.",
            
            "vomiting|thrown up":
                "Threw up twice this morning. Can't keep anything down.",
            
            // RISK FACTORS
            "sexually active|having sex":
                "Yes, with my boyfriend. We've been together 2 years.",
            
            "relation to sex|after sex":
                "We were together this past weekend. UTIs sometimes happen after sex for me.",
            
            "contraception|birth control":
                "I have a copper IUD. Paragard.",
            
            "condoms|barrier":
                "No, we don't use condoms. We're monogamous and both tested. I have the IUD for birth control.",
            
            "why no condoms":
                "We've been together 2 years, exclusive, both tested negative for STIs.",
            
            "stis|std|history":
                "No STIs ever. We both got tested when we started dating.",
            
            "pregnancy possible|could you be pregnant":
                "No, I have an IUD. And my last period was 2 weeks ago.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Pretty healthy. Just the occasional UTIs. No kidney problems before.",
            
            "kidney problems|kidney stones":
                "Never had kidney stones or kidney problems.",
            
            "allergies":
                "No drug allergies.",
            
            // MEDICATIONS
            "medications|medicines":
                "Just ibuprofen occasionally. No regular medications.",
            
            // SOCIAL
            "smoke":
                "No, never.",
            
            "work|job":
                "I'm an ICU nurse. Night shift.",
            
            // PATIENT CONCERNS
            "worried about|concerns":
                "I'm worried about kidney damage. And I feel so sick.",
            
            "anything else":
                "I feel stupid for not coming in sooner. I know better.",
        }
    };

    // ==========================================
    // CASE: Kevin Park - Kidney Stone
    // 38M, acute flank pain, no fever
    // ==========================================
    
    const KEVIN_PARK = {
        meta: {
            caseId: "flank-pain-stone",
            patientName: "Kevin Park",
            age: 38,
            gender: "male",
            occupation: "Software developer",
            setting: "Emergency Department",
            diagnosis: "Nephrolithiasis (kidney stone)",
            criticalFindings: [
                "Acute onset left flank pain",
                "Colicky - comes in waves",
                "Pain radiates to groin",
                "Hematuria",
                "Cannot find comfortable position",
                "No fever",
                "History of prior stone"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*pacing, unable to stay still* Hi... sorry, I can't sit still. The pain...",
            
            "how are you|how you doing":
                "*hunched over, walking around* Terrible. I think it's another kidney stone.",
            
            "what brings you in|chief complaint":
                "Sharp pain in my left side that started a few hours ago. I've had a kidney stone before and this feels exactly like that. I saw blood in my urine too.",
            
            "tell me more|can you explain":
                "It came on suddenly about 4 hours ago. The pain comes in waves - unbearable for a few minutes then backs off a little. Goes down into my groin.",
            
            // TIMELINE
            "when did this start|when start":
                "About 4 hours ago. Was at my desk working, suddenly felt this intense pain.",
            
            "sudden or gradual":
                "Completely sudden. Zero warning.",
            
            // PAIN
            "describe the pain|character":
                "Sharp, cramping, waves of intense pain. Like something is trying to squeeze through a tight space.",
            
            "where|location":
                "*points to left flank* Starts here, in my left side/back. Then goes down toward my groin.",
            
            "radiate|spread|travel":
                "Goes down into my left groin area. Sometimes feels like it's in my testicle.",
            
            "how bad|scale|severity":
                "At the peak, it's a 10. When it backs off, maybe a 5 or 6.",
            
            "constant or comes and goes|colicky":
                "Comes in waves. That's the worst part - you know another wave is coming.",
            
            "what makes it better|relieving|position":
                "Nothing helps! I've tried lying down, standing, walking - nothing.",
            
            // ASSOCIATED
            "blood in urine|hematuria":
                "Yes, my urine was pink/red. That's when I knew it was a stone.",
            
            "nausea|nauseated":
                "Very nauseous. Especially when the pain peaks.",
            
            "vomiting":
                "Threw up once, when the first big wave hit.",
            
            "fever|temperature":
                "No fever. I checked.",
            
            "burning|dysuria":
                "A little burning, yes.",
            
            // STONE HISTORY
            "had this before|kidney stone before":
                "Yes, about 3 years ago. Same side. Same pain.",
            
            "what happened|treatment":
                "That one was 7mm. Too big to pass. Had lithotripsy.",
            
            "stone analysis|type of stone":
                "Calcium oxalate. They told me to drink more water.",
            
            // RISK FACTORS
            "fluid intake|water":
                "Probably not enough. A lot of coffee. Maybe 4-5 glasses of water.",
            
            "diet|foods":
                "I eat a lot of spinach, nuts... probably the high oxalate foods.",
            
            "supplements|vitamins":
                "I take vitamin C and calcium supplements.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Just the kidney stone 3 years ago. Otherwise healthy.",
            
            "allergies":
                "No allergies.",
            
            // MEDICATIONS
            "medications|medicines":
                "Just the supplements. No prescription medications.",
            
            // SOCIAL
            "smoke":
                "No.",
            
            "alcohol":
                "Beer on weekends. Maybe 4-5 over a weekend.",
            
            "work|job":
                "Software developer. Sit at a desk all day. Forget to drink water.",
            
            "married|family":
                "Married, two young kids. Wife's in the waiting room.",
            
            // SEXUAL HISTORY - 38M married
            "sexually active|having sex":
                "Yes, with my wife.",
            
            "partner|partners":
                "Just my wife. Married 8 years.",
            
            "contraception|condoms":
                "She's on the pill. We don't use condoms.",
            
            "why no condoms":
                "Married, monogamous, she's on birth control.",
            
            "stis|std":
                "No, never. Only been with my wife.",
            
            // FAMILY
            "family history":
                "My dad had kidney stones too. Runs in the family.",
            
            // PATIENT CONCERNS
            "worried about|concerns":
                "I just need the pain to stop. I hope this one isn't too big to pass.",
            
            "anything else":
                "Please, can you give me something for the pain?",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['cap-pneumonia'] = MARGARET_WILSON;
    window.COMPREHENSIVE_PATIENT_RESPONSES['uti-cystitis'] = SARAH_MITCHELL;
    window.COMPREHENSIVE_PATIENT_RESPONSES['acute-pancreatitis'] = DAVID_THOMPSON;
    window.COMPREHENSIVE_PATIENT_RESPONSES['flank-pain-pyelo'] = AMANDA_FOSTER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['flank-pain-stone'] = KEVIN_PARK;
    
    console.log('ReasonDx Part 8 (CAP, UTI, Pancreatitis, Pyelo, Kidney Stone) loaded');

})();
