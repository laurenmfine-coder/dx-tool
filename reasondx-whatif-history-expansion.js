/**
 * ReasonDx What-If History Q&A Expansion
 * Comprehensive free-text question answer library for all scenarios
 * 
 * This file expands the historyAnswers for each What-If scenario to handle
 * virtually any reasonable question a student might ask.
 * 
 * Last Updated: December 28, 2025
 */

(function() {
    'use strict';

    function initializeHistoryExpansion() {
        if (typeof window.cases === 'undefined') {
            setTimeout(initializeHistoryExpansion, 200);
            return;
        }
        
        console.log('[ReasonDx] Expanding What-If history Q&A libraries...');
        
        // Apply expansions
        expandAllScenarios();
        
        console.log('[ReasonDx] History Q&A expansion complete.');
    }

    // Helper function to merge history answers into a scenario
    function expandScenarioHistory(caseId, scenarioId, newAnswers) {
        const caseData = window.cases?.find(c => c.id === caseId);
        if (!caseData?.whatIfScenarios) return;
        
        const scenario = caseData.whatIfScenarios.find(s => s.id === scenarioId);
        if (!scenario) return;
        
        scenario.modifications = scenario.modifications || {};
        scenario.modifications.historyAnswers = {
            ...scenario.modifications.historyAnswers,
            ...newAnswers
        };
    }

    function expandAllScenarios() {
        
        // =====================================================================
        // UTI - PYELONEPHRITIS SCENARIO
        // =====================================================================
        expandScenarioHistory('uti-cystitis', 'whatif_uti_fever_flank', {
            // Chief complaint variations
            "what brings you": "It burns when I pee, I have to go all the time, and now I have fever and my left side hurts.",
            "tell me about": "I've had burning with urination for a few days, but now I have a fever and my back really hurts.",
            "what's going on": "I started with typical UTI symptoms but now I feel much sicker - fever, chills, side pain.",
            "why are you here": "I thought I just had a bladder infection but now I have high fever and back pain.",
            
            // Fever variations
            "fever": "Yes, I've had fever since yesterday. It was 101.8°F this morning. I've also had chills.",
            "temperature": "My temperature was 101.8 this morning.",
            "febrile": "Yes, I've been febrile for about 24 hours.",
            "hot": "Yes, I feel hot and feverish.",
            "chills": "Yes, I've been having shaking chills, especially at night.",
            "rigors": "Yes, I had rigors last night - shaking uncontrollably.",
            "sweats": "Yes, I've been sweating, especially with the chills.",
            "night sweats": "Yes, I had drenching night sweats.",
            
            // Back/flank pain variations
            "back pain": "Yes, my left side really hurts - in my back, around where my kidney would be.",
            "flank pain": "Yes, my left flank has been hurting since yesterday.",
            "side pain": "Yes, my left side hurts a lot, toward my back.",
            "kidney pain": "It feels like it's coming from my kidney.",
            "where does it hurt": "In my left side, toward my back - around my kidney.",
            "location": "Left side, in my back, around my kidney area.",
            "cva": "Yes, it hurts right there when you tap on my back.",
            "costovertebral": "That area is very tender.",
            "radiating": "The pain stays mostly in my left side.",
            "how bad": "About 7 out of 10. Constant and aching.",
            "severity": "Pretty bad - 7/10 for the flank pain.",
            
            // Nausea/vomiting
            "nausea": "Yes, I've been feeling nauseous since the fever started.",
            "nauseous": "I've been feeling nauseous and threw up once.",
            "vomiting": "I vomited once this morning.",
            "throwing up": "I threw up this morning.",
            "eating": "I haven't been able to eat. Too nauseous.",
            "appetite": "No appetite at all.",
            
            // Systemic symptoms
            "feel overall": "I feel really sick - weak, tired, and unwell.",
            "sick": "I feel really sick - like I have the flu plus UTI.",
            "weak": "Yes, I feel weak and tired.",
            "fatigue": "Very fatigued.",
            "malaise": "General malaise.",
            "energy": "No energy at all.",
            
            // Urinary symptoms
            "burning": "Yes, still burning when I urinate.",
            "dysuria": "Yes, dysuria is still there.",
            "urination": "It still burns when I pee.",
            "frequency": "Still going frequently, every hour or so.",
            "urgency": "Still feel the urgency.",
            "blood in urine": "Maybe a little - my urine looks darker.",
            "hematuria": "Possible mild hematuria.",
            "urine color": "Darker than normal, maybe slightly pink.",
            "cloudy": "Yes, my urine looks cloudy with a strong smell.",
            "odor": "Yes, strong foul odor.",
            
            // Timeline
            "when did this start": "Urinary symptoms 3 days ago, fever and back pain started last night.",
            "how long": "UTI symptoms 3 days, fever and flank pain about 24 hours.",
            "onset": "Urinary symptoms gradual, fever and back pain more sudden.",
            "progression": "Started as just burning, then developed fever and back pain.",
            "getting worse": "Definitely getting worse.",
            
            // Past medical history
            "uti before": "Yes, I've had UTIs before, but never with fever and back pain.",
            "history of uti": "I've had a few UTIs over the years.",
            "kidney infection": "I've never had a kidney infection before.",
            "pyelonephritis": "No, never diagnosed with pyelonephritis.",
            "medical problems": "No major medical problems.",
            "medical history": "Generally healthy. History of occasional UTIs.",
            "diabetes": "No, I don't have diabetes.",
            "immunocompromised": "No, my immune system is fine.",
            "kidney disease": "No history of kidney disease.",
            "kidney stones": "No history of kidney stones.",
            "pregnant": "No, I'm not pregnant.",
            
            // Medications
            "medications": "Just birth control pills.",
            "taking anything": "Birth control and some AZO for UTI symptoms.",
            "antibiotics": "No antibiotics yet. That's why I came in.",
            "allergies": "No known drug allergies.",
            
            // Sexual history
            "sexual": "Yes, sexually active with my boyfriend.",
            "sexually active": "Yes, with one partner.",
            "new partner": "No, same partner for 2 years.",
            "vaginal discharge": "No unusual discharge.",
            "period": "My last period was about 2 weeks ago.",
            
            // Review of systems
            "chest pain": "No chest pain.",
            "shortness of breath": "No difficulty breathing.",
            "cough": "No cough.",
            "headache": "Mild headache with the fever.",
            "neck stiff": "No neck stiffness.",
            "rash": "No rash.",
            "diarrhea": "No diarrhea.",
            "abdominal pain": "Some suprapubic discomfort and left flank pain."
        });

        // =====================================================================
        // UTI - MALE/PROSTATITIS SCENARIO  
        // =====================================================================
        expandScenarioHistory('uti-cystitis', 'whatif_uti_male', {
            // Chief complaint
            "what brings you": "Burning when I pee and trouble with my urinary stream.",
            "tell me about": "It burns when I urinate and I'm having difficulty starting my stream.",
            
            // Voiding symptoms - CRITICAL
            "stream": "It's weaker than it used to be. Takes a while to get going.",
            "weak stream": "Yes, my stream is definitely weaker.",
            "trouble starting": "Yes, I have to stand there and wait.",
            "hesitancy": "Yes, significant hesitancy.",
            "flow": "The flow is weak and sometimes stops and starts.",
            "intermittent": "Yes, the stream is intermittent.",
            "empty bladder": "No, I feel like I can't empty completely.",
            "incomplete emptying": "Yes, always feels like some is left.",
            "dribbling": "Yes, some dribbling after I finish.",
            
            // Nocturia
            "night": "Yes, I get up 2-3 times a night to urinate.",
            "nocturia": "Yes, significant nocturia.",
            "wake up": "I wake up 2-3 times every night.",
            "sleep": "My sleep is interrupted.",
            
            // Burning/dysuria
            "burning": "Yes, it burns especially at the end.",
            "dysuria": "Yes, dysuria for about 4-5 days.",
            "frequency": "Yes, going more often than usual.",
            "urgency": "Some urgency when I need to go.",
            
            // Prostate
            "prostate": "My doctor told me my prostate was enlarged.",
            "bph": "I was told I might have BPH.",
            "enlarged prostate": "Yes, my doctor mentioned it was enlarged.",
            "psa": "I had a PSA test last year. It was normal.",
            
            // Pelvic pain
            "pelvic pain": "Some discomfort in my pelvis.",
            "perineal": "Some discomfort between my scrotum and rectum.",
            "groin": "Some mild groin discomfort.",
            "testicular": "My testicles feel okay.",
            
            // Sexual function
            "ejaculation": "It's been uncomfortable lately when I ejaculate.",
            "painful ejaculation": "Yes, some discomfort.",
            "erectile": "No problems with erections.",
            
            // Discharge
            "discharge": "No discharge from my penis.",
            "penile discharge": "No discharge.",
            
            // Sexual history
            "sexually active": "Yes, with my wife. Married 15 years.",
            "partner": "Just my wife.",
            "new partners": "No new partners.",
            "sti": "No history of STIs.",
            
            // Systemic
            "fever": "Maybe a low-grade fever.",
            "chills": "No significant chills.",
            "back pain": "No back pain.",
            
            // Medical history
            "medical history": "High blood pressure, enlarged prostate.",
            "medications": "Lisinopril for blood pressure.",
            "diabetes": "No diabetes.",
            "age": "I'm 55 years old."
        });

        // =====================================================================
        // UTI - PREGNANT SCENARIO
        // =====================================================================
        expandScenarioHistory('uti-cystitis', 'whatif_uti_pregnant', {
            // Pregnancy confirmation
            "pregnant": "Yes, I'm 20 weeks pregnant.",
            "pregnancy": "Yes, about 20 weeks along. First pregnancy.",
            "how far along": "20 weeks - about halfway.",
            "weeks": "20 weeks pregnant.",
            "trimester": "Second trimester.",
            "due date": "In about 4 months.",
            "first pregnancy": "Yes, this is my first.",
            
            // Pregnancy course
            "how has pregnancy been": "Pretty normal until this started.",
            "pregnancy complications": "None until now.",
            "prenatal care": "Yes, regular prenatal care. Last visit 2 weeks ago.",
            "ultrasound": "I had an ultrasound at 18 weeks - everything normal.",
            
            // Baby status
            "baby": "The baby has been moving normally. Lots of kicks.",
            "fetal movement": "Yes, I feel the baby moving normally.",
            "kicks": "Yes, the baby is kicking normally.",
            
            // Concerning symptoms (absent)
            "contractions": "No contractions.",
            "cramping": "No uterine cramping.",
            "bleeding": "No vaginal bleeding.",
            "leaking fluid": "No leaking of fluid.",
            "water": "No, my water hasn't broken.",
            
            // UTI symptoms
            "burning": "Yes, burning when I urinate. Started about 2 days ago.",
            "frequency": "Going more often, but attributed that to pregnancy at first.",
            "urgency": "Yes, urgency when I need to go.",
            "blood in urine": "Maybe a tiny bit - slightly pink.",
            
            // Risk acknowledgment
            "why concerned": "I know UTIs in pregnancy can be serious.",
            "kidney infection": "I'm worried about it spreading to my kidneys.",
            
            // Medications
            "medications": "Just prenatal vitamins.",
            "allergies": "No drug allergies.",
            
            // Medical history
            "medical history": "No significant medical history.",
            "uti history": "I had one UTI a few years ago.",
            
            // Systemic symptoms
            "fever": "No fever that I've noticed.",
            "back pain": "No back pain.",
            "nausea": "Some mild nausea but that's normal for my pregnancy."
        });

        // =====================================================================
        // UGIB - VARICEAL BLEEDING SCENARIO (Comprehensive)
        // =====================================================================
        expandScenarioHistory('ugib', 'whatif_ugib_variceal', {
            // Chief complaint variations
            "what brings you": "I vomited a large amount of bright red blood. I have cirrhosis.",
            "what happened": "I was watching TV and suddenly vomited a lot of blood.",
            "tell me": "I threw up blood - a lot of it. Bright red. I have liver disease.",
            
            // Blood description
            "blood": "Yes, bright red blood - not coffee ground, actual red blood.",
            "vomit blood": "I've vomited blood three times now. A lot each time.",
            "hematemesis": "Yes, significant hematemesis - bright red blood.",
            "coffee ground": "No, it wasn't coffee ground - bright red fresh blood.",
            "how much": "A lot - maybe a cup or more each time.",
            "amount": "Maybe 2-3 cups total.",
            "clots": "Yes, there were blood clots.",
            "color": "Bright red blood.",
            
            // Stool/melena
            "stool": "My stools have been black and tarry for the past day.",
            "bowel movement": "Black, tarry stools since yesterday.",
            "melena": "Yes, I've had melena.",
            "black stool": "Yes, very black and sticky, like tar.",
            "tarry": "Yes, tarry black stools with terrible smell.",
            "rectal bleeding": "No bright red blood, but black tarry stools.",
            
            // Liver disease history
            "liver": "Yes, I have cirrhosis. Diagnosed about 3 years ago.",
            "liver disease": "Yes, cirrhosis from hepatitis C and drinking.",
            "cirrhosis": "Yes, I have cirrhosis.",
            "hepatitis": "Yes, hepatitis C.",
            "hep c": "Yes, I have hepatitis C.",
            "viral hepatitis": "Yes, hepatitis C.",
            
            // Alcohol history
            "alcohol": "I used to drink heavily - six-pack or more daily for 20 years. Quit 3 years ago.",
            "drinking": "I was a heavy drinker for 20 years. I quit 3 years ago.",
            "how much did you drink": "A six-pack daily, sometimes more. Plus hard liquor on weekends.",
            "quit drinking": "Yes, I quit 3 years ago.",
            "sober": "I've been sober for 3 years.",
            
            // Varices history
            "varices": "My doctor told me I have varices. I had them banded about a year ago.",
            "esophageal varices": "Yes, I have esophageal varices. They were banded last year.",
            "banding": "Yes, I had variceal banding about a year ago.",
            "bleed before": "Yes, I had bleeding from varices about a year ago.",
            "prior bleeding": "Yes, one prior variceal bleed treated with banding.",
            "endoscopy": "I had an endoscopy about a year ago when I bled.",
            "tips": "No, I haven't had TIPS.",
            
            // Other liver complications
            "ascites": "Yes, I have fluid in my belly. I get it drained every few weeks.",
            "fluid": "Yes, I build up fluid - ascites.",
            "paracentesis": "I get paracentesis every few weeks.",
            "encephalopathy": "Sometimes I get confused when I'm sicker.",
            "confusion": "I've had episodes of confusion related to my liver disease.",
            "hepatic encephalopathy": "I've had it before. I take lactulose.",
            "jaundice": "Yes, my skin and eyes have been yellow.",
            "yellow": "Yes, I'm jaundiced.",
            "spleen": "I think my spleen is enlarged.",
            "platelets": "I know my platelet count is low.",
            "coagulopathy": "Yes, my blood doesn't clot well.",
            "bruising": "Yes, I bruise easily.",
            
            // Medications
            "medications": "Propranolol, spironolactone, furosemide, lactulose.",
            "propranolol": "Yes, I take propranolol for my varices.",
            "beta blocker": "Yes, I'm on a beta blocker.",
            "diuretics": "Yes, for the fluid.",
            "lactulose": "Yes, to prevent confusion.",
            "blood thinners": "No, I'm not on blood thinners.",
            "nsaids": "No, I was told never to take ibuprofen.",
            
            // Current symptoms
            "dizzy": "Yes, I feel dizzy when I stand up.",
            "lightheaded": "Very lightheaded. I almost passed out.",
            "weakness": "I feel very weak.",
            "sweating": "Yes, I'm sweating and feel clammy.",
            "heart racing": "Yes, my heart has been racing.",
            "thirsty": "Very thirsty.",
            "short of breath": "A little short of breath when I stand.",
            
            // Timeline
            "when": "The vomiting started about 2 hours ago.",
            "how long": "About 2 hours since the first episode.",
            "sudden": "Yes, it came on suddenly.",
            
            // Review of systems
            "fever": "No fever.",
            "weight loss": "I've lost weight over the past few months.",
            "appetite": "My appetite has been poor.",
            "abdominal pain": "Some mild stomach discomfort but no severe pain.",
            "chest pain": "No chest pain."
        });

        // =====================================================================
        // UGIB - ANTICOAGULATED SCENARIO
        // =====================================================================
        expandScenarioHistory('ugib', 'whatif_ugib_on_anticoagulation', {
            // Blood thinner details
            "blood thinner": "Yes, I'm on Eliquis for my atrial fibrillation.",
            "blood thinners": "Yes, Eliquis - apixaban.",
            "anticoagulant": "Apixaban - Eliquis. I take it twice a day.",
            "eliquis": "Yes, I take Eliquis 5mg twice daily.",
            "apixaban": "Yes, apixaban 5mg twice a day.",
            "xarelto": "No, not Xarelto. I take Eliquis.",
            "warfarin": "No, I'm not on warfarin.",
            "coumadin": "No, I'm on Eliquis, not Coumadin.",
            "doac": "Yes, I'm on a DOAC - Eliquis.",
            "dose": "5mg twice a day.",
            "last dose": "I took my morning dose about 4 hours ago.",
            "compliance": "I take it every day as prescribed.",
            
            // Why on anticoagulant
            "why blood thinner": "I have atrial fibrillation. To prevent stroke.",
            "afib": "Yes, I have AFib.",
            "atrial fibrillation": "Yes, I've had AFib for about 3 years.",
            "irregular heartbeat": "Yes, I have an irregular heartbeat.",
            "stroke risk": "My doctor said my stroke risk was high.",
            "stroke prevention": "I take it to prevent stroke from my AFib.",
            "stroke": "No, I haven't had a stroke. I take it to prevent one.",
            "dvt": "No blood clots in my legs.",
            "pe": "No pulmonary embolism.",
            
            // Other bleeding risk meds
            "aspirin": "Yes, I also take a baby aspirin daily.",
            "baby aspirin": "Yes, 81mg aspirin daily.",
            "nsaids": "I sometimes take ibuprofen for my arthritis.",
            "ibuprofen": "Yes, I take ibuprofen occasionally.",
            
            // Kidney function
            "kidney": "My doctor said my kidneys are a little weak.",
            "kidneys": "My kidney function isn't perfect.",
            "renal": "Some mild renal impairment.",
            "dialysis": "No, I'm not on dialysis.",
            
            // Bleeding presentation
            "vomit": "Coffee ground material at first, then some brighter blood.",
            "vomiting": "I vomited what looked like coffee grounds, then some red blood.",
            "hematemesis": "Yes, coffee ground emesis and some hematemesis.",
            "coffee ground": "Yes, my vomit looked like coffee grounds at first.",
            "how much blood": "Not huge amounts - maybe half a cup total.",
            "stool": "Black and tarry for the past 2 days.",
            "melena": "Yes, melena for 2 days.",
            
            // Symptoms
            "dizzy": "Yes, I feel dizzy, especially when I stand.",
            "weak": "I feel weak.",
            "lightheaded": "Lightheaded when I get up.",
            "chest pain": "Some palpitations but no chest pain.",
            "palpitations": "Yes, my heart has been fluttering.",
            
            // Medical history
            "medical history": "AFib, high blood pressure, mild kidney disease, arthritis.",
            "diabetes": "No diabetes.",
            "liver disease": "No liver problems.",
            "ulcer": "I'm not sure if I have an ulcer.",
            
            // Age
            "age": "I'm 74 years old."
        });

        // =====================================================================
        // UGIB - MASSIVE HEMORRHAGE SCENARIO
        // =====================================================================
        expandScenarioHistory('ugib', 'whatif_ugib_massive', {
            // Critical presentation
            "what happened": "I vomited a huge amount of blood. I passed out briefly.",
            "tell me": "Massive vomiting of blood. I fainted. Blood everywhere.",
            "collapsed": "I collapsed after vomiting blood.",
            
            // Syncope
            "passed out": "Yes, I passed out. My wife found me on the floor.",
            "fainted": "Yes, I fainted briefly.",
            "syncope": "Yes, I had syncope.",
            "unconscious": "I was unconscious for maybe 30 seconds.",
            "lost consciousness": "Yes, I lost consciousness briefly.",
            "black out": "Yes, I blacked out.",
            
            // Amount
            "how much": "It was like a fountain. Blood all over the bathroom floor.",
            "amount": "Massive amounts - cups and cups.",
            "a lot": "Yes, a huge amount.",
            "ongoing": "It's still happening. I vomited more in the ambulance.",
            "still bleeding": "Yes, I'm still bringing up blood.",
            
            // Blood character
            "blood color": "Bright red. Fresh blood.",
            "bright red": "Yes, bright red blood.",
            "clots": "Yes, lots of blood clots.",
            
            // Lower GI symptoms
            "stool": "I had bloody diarrhea - bright red blood.",
            "rectal": "Yes, bright red blood from my rectum too.",
            "hematochezia": "Yes, bright red blood per rectum.",
            "diarrhea": "Yes, bloody diarrhea.",
            
            // Shock symptoms
            "feel": "I feel terrible. Like I'm going to die.",
            "dying": "I feel like I'm dying.",
            "dizzy": "Very dizzy. The room is spinning.",
            "lightheaded": "Extremely lightheaded.",
            "weak": "Very weak. I can barely move.",
            "cold": "I feel cold and clammy.",
            "sweating": "Yes, cold sweat.",
            "thirsty": "Incredibly thirsty.",
            "confused": "I feel confused. Trouble thinking clearly.",
            "heart racing": "My heart is racing.",
            "breathing": "Short of breath.",
            "chest": "I feel pressure in my chest.",
            
            // AAA history - CRITICAL
            "aaa": "I had surgery on my aorta a few years ago for an aneurysm.",
            "aneurysm": "Yes, I had an abdominal aortic aneurysm repaired about 4 years ago.",
            "aorta": "I had aortic surgery.",
            "aortic surgery": "Yes, AAA repair about 4 years ago.",
            "graft": "Yes, I have an aortic graft.",
            
            // Other history
            "medical history": "High blood pressure, the aortic aneurysm surgery.",
            "blood thinners": "Just aspirin.",
            "nsaids": "I take ibuprofen sometimes.",
            "liver disease": "No liver problems.",
            "prior bleeding": "This is the first time.",
            
            // Social
            "alcohol": "Socially - a few beers on weekends.",
            "smoke": "I quit smoking 10 years ago."
        });

        // =====================================================================
        // DVT - PREGNANT SCENARIO
        // =====================================================================
        expandScenarioHistory('dvt', 'whatif_dvt_pregnant', {
            // Pregnancy
            "pregnant": "Yes, I'm 28 weeks pregnant.",
            "pregnancy": "Yes, 28 weeks along. Third trimester.",
            "how far along": "28 weeks.",
            "trimester": "Third trimester.",
            "due date": "About 3 months from now.",
            "first pregnancy": "No, this is my second.",
            "prior pregnancies": "One prior pregnancy, no complications.",
            
            // Leg symptoms - LEFT LEG
            "which leg": "My left leg.",
            "left leg": "Yes, the left one is swollen.",
            "right leg": "No, the right leg is fine.",
            "both legs": "No, only the left leg.",
            "swelling": "My left leg is very swollen.",
            "swollen": "Yes, very swollen. Much more than the right.",
            "size difference": "My left leg is definitely bigger.",
            
            // Pain
            "pain": "Yes, my left calf is painful and tender.",
            "hurt": "Yes, it hurts, especially when I walk.",
            "tender": "Very tender when I touch it.",
            "walking": "Walking makes it worse.",
            
            // Other DVT symptoms
            "warm": "Yes, my left leg feels warmer.",
            "red": "Yes, there's some redness.",
            "cord": "I can feel something firm in my calf.",
            
            // Prior swelling
            "swelling before": "I've had mild ankle swelling but nothing like this.",
            "normal swelling": "Some normal pregnancy swelling but this is different.",
            "different": "This is very different - just one leg and much worse.",
            
            // Baby status
            "baby": "The baby seems fine, still moving normally.",
            "fetal movement": "Yes, good fetal movement.",
            "contractions": "No contractions.",
            "bleeding": "No vaginal bleeding.",
            "prenatal care": "Yes, regular visits. Everything was fine.",
            
            // Risk factors
            "bed rest": "No, I've been active.",
            "travel": "No recent travel.",
            "prior dvt": "No history of blood clots.",
            "prior clot": "Never had a blood clot.",
            "family history": "My mother had a blood clot years ago.",
            
            // PE symptoms
            "breathing": "My breathing is okay.",
            "short of breath": "No shortness of breath.",
            "chest pain": "No chest pain.",
            "cough": "No cough.",
            
            // Medications
            "medications": "Just prenatal vitamins.",
            "blood thinners": "No blood thinners.",
            "allergies": "No drug allergies."
        });

        // =====================================================================
        // SBO - STRANGULATED SCENARIO
        // =====================================================================
        expandScenarioHistory('sbo', 'whatif_sbo_strangulation', {
            // Pain pattern - CRITICAL
            "pain": "The pain is constant now - it never lets up.",
            "pain pattern": "At first it came in waves, but now it's constant and severe.",
            "colicky": "It was colicky at first but changed to constant.",
            "crampy": "It was crampy before but now it's constant.",
            "waves": "The waves stopped. Now it's constant.",
            "constant": "Yes, constant severe pain.",
            "change": "Yes, the pain changed significantly.",
            "worse": "Much worse. Unbearable.",
            "severity": "10 out of 10. Worst pain ever.",
            "where hurt": "It started all over, now focused on my lower right.",
            "localized": "Yes, it's become localized.",
            
            // Systemic symptoms
            "fever": "Yes, I developed a fever a few hours ago.",
            "temperature": "I think I have a high fever.",
            "chills": "Yes, I've had shaking chills.",
            "rigors": "Yes, shaking uncontrollably.",
            "sweating": "I'm sweating but feel cold.",
            "sick": "I feel really sick.",
            "dying": "I feel like I'm going to die.",
            
            // Vomiting - FECULENT
            "vomit": "I'm still vomiting. It's brownish and smells foul.",
            "vomiting": "The vomit has changed - brown and smells like stool.",
            "feculent": "Yes, it smells like feces.",
            "smell": "It smells like stool. Horrible.",
            "color vomit": "Brown now.",
            
            // Complete obstruction
            "gas": "No gas at all. Nothing coming out.",
            "pass gas": "I can't pass gas.",
            "stool": "Nothing. Complete obstruction.",
            "bowel movement": "I haven't had one. Nothing will come out.",
            "blood in stool": "Some blood when I tried to go.",
            
            // Timeline
            "getting worse": "Much worse over the past 4-5 hours.",
            "how long constant": "Constant for about 4-5 hours.",
            "when change": "Changed about 4-5 hours ago.",
            
            // Surgical history
            "surgery": "Yes, I had my appendix out about 5 years ago.",
            "abdominal surgery": "Just the appendectomy.",
            "appendix": "Yes, appendectomy 5 years ago.",
            "adhesions": "My doctor mentioned adhesions might cause problems.",
            "prior obstruction": "Never had an obstruction before.",
            
            // Other history
            "hernia": "No hernias.",
            "cancer": "No cancer history.",
            "crohn": "No Crohn's disease."
        });

        // =====================================================================
        // SBO - HERNIA SCENARIO
        // =====================================================================
        expandScenarioHistory('sbo', 'whatif_sbo_hernia', {
            // Hernia history
            "hernia": "Yes, I've had a bulge in my groin for years.",
            "bulge": "The bulge is much bigger now and painful. Won't go back in.",
            "lump": "There's a lump in my groin that's stuck.",
            "groin": "Yes, my right groin has a painful bulge.",
            "which side": "Right groin.",
            "how long hernia": "I've had it for about 3 years.",
            "diagnosed": "Diagnosed 3 years ago.",
            "told to fix": "My doctor said I should get it fixed.",
            "why not fix": "I kept putting off the surgery.",
            
            // Current status
            "push back": "Usually I can push it back in, but now I can't.",
            "reducible": "It used to be reducible but now it's stuck.",
            "stuck": "Yes, it's stuck out.",
            "irreducible": "It's irreducible now.",
            "when stuck": "It got stuck about 12 hours ago.",
            
            // Local symptoms
            "groin pain": "Yes, my groin is extremely painful.",
            "tender": "Very tender to touch.",
            "red": "It looks a bit red.",
            "warm": "Yes, it feels warm.",
            "swollen": "The whole area is swollen.",
            "hard": "It feels firm and hard.",
            
            // Obstructive symptoms
            "vomiting": "Yes, I've been vomiting.",
            "nausea": "Yes, very nauseous.",
            "bloated": "My belly is bloated.",
            "distended": "Yes, my abdomen is distended.",
            "gas": "I can't pass gas.",
            "bowel movement": "No bowel movement since the hernia got stuck.",
            
            // Surgery
            "surgery": "No abdominal surgeries.",
            "prior surgery": "Never had abdominal surgery.",
            "appendix": "Still have my appendix."
        });

        // =====================================================================
        // TESTICULAR TORSION - EPIDIDYMITIS SCENARIO  
        // =====================================================================
        expandScenarioHistory('testicular-torsion', 'whatif_torsion_epididymitis', {
            // Onset
            "onset": "It's been getting worse over the past 2-3 days.",
            "sudden": "No, it came on gradually.",
            "how long": "2-3 days of worsening pain.",
            
            // Urinary symptoms - KEY
            "urinary": "Yes, I've had burning when I pee.",
            "dysuria": "Yes, it burns when I urinate.",
            "burning": "Yes, burning with urination.",
            "discharge": "I noticed some discharge from my penis.",
            "penile discharge": "Yes, yellowish discharge.",
            "frequency": "Going a bit more often.",
            "urgency": "Some urgency.",
            
            // Sexual history
            "sexual activity": "Yes, sexually active. New partner about 3 weeks ago.",
            "sexually active": "Yes, with a new partner.",
            "new partner": "Yes, about a month.",
            "protection": "We didn't always use protection.",
            "condom": "We didn't always use condoms.",
            "sti history": "I had chlamydia once about 2 years ago.",
            
            // Pain
            "pain location": "Mostly in the back of my testicle, near the top.",
            "pain better": "When I lift my testicle up, it feels better.",
            "prehn": "Yes, elevation helps.",
            
            // Systemic
            "fever": "I've felt warm. Low-grade fever.",
            "nausea": "I feel a little nauseous but haven't vomited.",
            
            // Exam
            "cremasteric": "I don't know what that is.",
            "testicle position": "It seems in the normal position."
        });

        // =====================================================================
        // TESTICULAR TORSION - BLUE DOT SCENARIO
        // =====================================================================
        expandScenarioHistory('testicular-torsion', 'whatif_torsion_blue_dot', {
            // Onset
            "onset": "It started suddenly this morning, about 6 hours ago.",
            "sudden": "Yes, sudden onset.",
            
            // Pain
            "pain severity": "About 5-6 out of 10. Bad but not unbearable.",
            "pain location": "Mostly at the top of my testicle.",
            "worse than": "It's not the worst pain ever.",
            
            // Associated symptoms
            "nausea": "A little nauseous but haven't thrown up.",
            "vomiting": "No vomiting.",
            "urinary": "No burning or changes with urination.",
            
            // Visual
            "see anything": "There's a small blue spot at the top.",
            "blue": "Yes, I can see a blue spot.",
            "discoloration": "Yes, blue/purple discoloration.",
            
            // History
            "prior episodes": "No, first time.",
            "age": "I'm 11 years old.",
            
            // Exam clues
            "where tender": "Just at the top of the testicle.",
            "whole testicle": "No, just a small area at the top."
        });

        // =====================================================================
        // TESTICULAR TORSION - DELAYED SCENARIO
        // =====================================================================
        expandScenarioHistory('testicular-torsion', 'whatif_torsion_delayed', {
            // Duration
            "onset": "The severe pain started yesterday morning - about 18-36 hours ago.",
            "how long": "About 36 hours now.",
            "why waited": "I thought it would get better. I was embarrassed.",
            
            // Pain change - OMINOUS
            "current pain": "The pain is actually less now than yesterday. Kind of numb.",
            "pain course": "It was really severe yesterday, then got a bit better.",
            "less pain": "Yes, it's less painful now.",
            "numb": "It feels kind of numb now.",
            "better": "The pain is less but I don't feel better overall.",
            
            // Still consistent with torsion
            "position": "My testicle seems higher than usual.",
            "lie": "It seems to be lying sideways.",
            "swelling": "Very swollen.",
            "red": "Yes, very red and swollen.",
            
            // Systemic
            "nausea": "I was very nauseous yesterday. Less now.",
            "vomiting": "I vomited a few times yesterday."
        });

        // =====================================================================
        // MENINGITIS - VIRAL SCENARIO
        // =====================================================================
        expandScenarioHistory('meningitis', 'whatif_meningitis_viral', {
            // Less severe headache
            "headache": "It's bad, maybe 7 out of 10, but not the worst ever.",
            "worst headache": "No, I've had worse.",
            "severity": "About 7 out of 10.",
            
            // Gradual onset
            "onset": "It came on gradually over 2-3 days.",
            "sudden": "No, more gradual.",
            "when start": "Started about 3 days ago and got worse.",
            
            // Mild systemic
            "fever": "Yes, but low grade - around 100-101°F.",
            "temperature": "Low-grade, about 100-101.",
            "chills": "Some mild chills.",
            "sick": "I feel sick but not like I'm dying.",
            "drove": "Yes, I drove myself here.",
            
            // Mild meningeal
            "neck": "My neck is a little stiff, but I can move it.",
            "light": "Light bothers me some, but I can tolerate it.",
            "sound": "Loud sounds are annoying but not unbearable.",
            
            // Viral prodrome
            "before": "I had a sore throat and runny nose for about a week before.",
            "prodrome": "Yes, I had cold symptoms first.",
            "cold": "I had a cold last week.",
            "sore throat": "Yes, sore throat about a week ago.",
            "cough": "Yes, some coughing with my cold.",
            
            // GI symptoms
            "stomach": "Some loose stools and mild nausea.",
            "diarrhea": "Mild diarrhea.",
            "nausea": "Some nausea but not severe.",
            
            // Contacts
            "sick contacts": "Several people at work have had a virus.",
            "others sick": "Yes, there's something going around.",
            
            // No rash
            "rash": "No rash.",
            "spots": "No spots."
        });

        // =====================================================================
        // MENINGITIS - PURPURA/MENINGOCOCCEMIA SCENARIO
        // =====================================================================
        expandScenarioHistory('meningitis', 'whatif_meningitis_purpura', {
            // Rash - CRITICAL
            "rash": "Yes, red spots appearing on my legs and arms. Spreading.",
            "spots": "Red spots that are getting bigger.",
            "when rash": "Started a few hours after my headache got worse.",
            "describe rash": "Small red dots getting bigger and darker, almost purple.",
            "color": "Started red, now some are purple.",
            "purple": "Yes, some spots are turning purple.",
            "petechiae": "Small red dots getting bigger.",
            "purpura": "Some larger purple blotches now.",
            "spreading": "Yes, spreading - legs first, now arms.",
            "blanching": "No, they don't go away when I press.",
            "blanch": "They don't blanch.",
            "non-blanching": "That's right, they don't disappear with pressure.",
            "new spots": "New spots keep appearing.",
            
            // Rapid deterioration
            "how feel": "Getting worse very quickly. A few hours ago I felt okay.",
            "worse": "I'm getting worse fast.",
            "rapidly": "Yes, deteriorating rapidly.",
            "dying": "I feel like I'm dying.",
            
            // Severe symptoms
            "fever": "Yes, very high fever.",
            "headache": "Severe headache, worst of my life.",
            "neck": "Very stiff neck.",
            "confusion": "Having trouble thinking clearly.",
            
            // Hemodynamic
            "dizzy": "Very dizzy.",
            "lightheaded": "Extremely lightheaded.",
            "weak": "Very weak.",
            "cold": "Hands and feet feel cold.",
            "pale": "People say I look very pale.",
            
            // Contacts
            "contacts": "I was at a college party last week.",
            "dorm": "I live in a dorm.",
            "college": "I'm a college student.",
            "vaccine": "I think I got one before college."
        });

        // =====================================================================
        // STROKE - HEMORRHAGIC SCENARIO
        // =====================================================================
        expandScenarioHistory('acute-stroke', 'whatif_stroke_hemorrhagic', {
            // Headache - KEY
            "headache": "Yes, severe headache - worst of my life. Came on suddenly.",
            "worst headache": "Yes, absolutely the worst ever.",
            "thunderclap": "It came on like thunder - sudden and severe.",
            "sudden headache": "Yes, immediate and severe.",
            "severity headache": "10 out of 10.",
            "head pain": "Terrible head pain.",
            
            // Vomiting
            "vomiting": "Yes, I vomited twice right after.",
            "nausea": "Yes, severe nausea.",
            "threw up": "Yes, twice.",
            
            // Consciousness
            "consciousness": "I felt confused at first.",
            "confused": "Yes, I was confused.",
            "drowsy": "I feel very drowsy.",
            "sleepy": "Hard to stay awake.",
            "lethargic": "Very lethargic.",
            
            // Blood thinners - CRITICAL
            "blood thinners": "Yes, I take Coumadin for my AFib.",
            "warfarin": "Yes, I'm on warfarin.",
            "coumadin": "Yes, Coumadin.",
            "anticoagulant": "Yes, I'm anticoagulated.",
            "inr": "I'm not sure what my last INR was.",
            "afib": "Yes, I have AFib.",
            "aspirin": "I also take aspirin.",
            
            // Blood pressure
            "blood pressure": "It's been hard to control. Often high.",
            "hypertension": "Yes, I have hypertension.",
            "high blood pressure": "Yes, it runs high.",
            
            // Onset
            "when": "Sudden - watching TV, then headache, then left side weak.",
            "onset": "Sudden onset.",
            "first symptom": "Headache first, then weakness.",
            
            // Weakness
            "weakness": "Left arm and leg are weak.",
            "left side": "Yes, left side weakness.",
            "face": "My face is drooping.",
            "speech": "My speech is slurred.",
            
            // Other
            "seizure": "No seizure.",
            "fall": "I didn't fall.",
            "trauma": "No head trauma."
        });

        // =====================================================================
        // STROKE - WAKE-UP SCENARIO
        // =====================================================================
        expandScenarioHistory('acute-stroke', 'whatif_stroke_wakeup', {
            // Unknown time
            "when": "Went to bed fine, woke up this morning with weakness.",
            "onset": "I don't know when it started - I woke up like this.",
            "last known well": "Fine when I went to sleep around 11 PM.",
            "last normal": "11 PM last night.",
            "time unknown": "I have no idea when it actually started.",
            "sleep": "I was sleeping.",
            "wake up": "I woke up and couldn't move my right side.",
            "found": "My wife found me like this at 7 AM.",
            "asleep": "Yes, I was asleep when this happened.",
            
            // Current symptoms
            "symptoms now": "Right arm and leg weak, face drooping, speech slurred.",
            "weakness": "Right-sided weakness.",
            "speech": "My speech is slurred.",
            "face": "Right face droop.",
            
            // Absent hemorrhage symptoms
            "headache": "No severe headache.",
            "worst headache": "No thunderclap headache.",
            "vomiting": "No vomiting.",
            "consciousness": "I've been awake and alert.",
            
            // Risk factors
            "risk factors": "High blood pressure and diabetes.",
            "blood pressure": "Yes, hypertension.",
            "diabetes": "Yes, type 2.",
            "afib": "Not that I know of.",
            "cholesterol": "Yes, high cholesterol.",
            "prior stroke": "No prior strokes.",
            
            // Treatment questions
            "tpa": "I don't know if I can get the clot buster.",
            "clot buster": "Can I still get treatment?",
            "time window": "Is it too late?"
        });

        // =====================================================================
        // DKA - HHS SCENARIO
        // =====================================================================
        expandScenarioHistory('dka', 'whatif_dka_hhs', {
            // Diabetes type
            "diabetes": "Yes, type 2. I take metformin and glipizide.",
            "type": "Type 2.",
            "type 2": "Yes, type 2 diabetes.",
            "insulin": "No, I don't take insulin. Just pills.",
            "medications": "Metformin and glipizide.",
            "how long diabetic": "About 10 years now.",
            "a1c": "My last A1C was around 9.",
            
            // Gradual onset - KEY
            "how long": "Getting worse over the past week. Gradual.",
            "onset": "Gradual - over about a week.",
            "sudden": "No, it came on gradually.",
            "duration": "About a week of worsening.",
            
            // Polyuria/polydipsia - SEVERE
            "thirst": "Incredibly thirsty. Drinking gallons but still parched.",
            "thirsty": "Unbelievably thirsty.",
            "drinking": "I've been drinking constantly.",
            "urination": "Urinating constantly. Can't stay out of bathroom.",
            "peeing": "Going every 30 minutes to an hour.",
            "frequency": "Urinating all the time.",
            
            // Mental status - PROMINENT
            "confusion": "My family says I've been very confused.",
            "confused": "Yes, I've been confused.",
            "mental status": "Not thinking clearly.",
            "memory": "I don't remember things.",
            "foggy": "Very foggy mentally.",
            "oriented": "I'm not sure where I am.",
            
            // LESS prominent DKA symptoms
            "nausea": "Some nausea but not much vomiting.",
            "vomiting": "I threw up once but not repeatedly.",
            "abdominal pain": "Not really any belly pain.",
            "breathing": "My breathing seems okay.",
            "fruity breath": "I don't think my breath smells fruity.",
            
            // Dehydration
            "dry": "My mouth is very dry.",
            "lips": "My lips are cracked.",
            "dizzy": "Yes, dizzy when I stand.",
            "weak": "Very weak.",
            
            // Age
            "age": "I'm 72 years old."
        });

        // =====================================================================
        // AFIB - UNSTABLE SCENARIO
        // =====================================================================
        expandScenarioHistory('afib-rvr', 'whatif_afib_unstable', {
            // Hemodynamic symptoms
            "chest pain": "Yes, chest pain and pressure.",
            "chest": "Pressure in my chest.",
            "pressure": "Yes, chest pressure.",
            
            "lightheaded": "Very lightheaded. Almost passed out.",
            "dizzy": "Very dizzy.",
            "faint": "I felt like I was going to faint.",
            "near syncope": "I almost passed out.",
            
            "breathing": "Very short of breath.",
            "short of breath": "Severely short of breath.",
            "can't breathe": "I can't get enough air.",
            "lying down": "Can't lie down - makes it worse.",
            
            "confusion": "I feel confused.",
            "thinking": "Having trouble thinking.",
            
            // Heart
            "heart": "My heart is racing and pounding.",
            "racing": "Yes, my heart is racing.",
            "pounding": "Pounding in my chest.",
            "palpitations": "Severe palpitations.",
            "fast": "My heart is beating very fast.",
            "irregular": "It's fast and irregular.",
            
            // AFib history
            "afib": "Yes, I have AFib.",
            "atrial fibrillation": "Yes, atrial fibrillation.",
            "how long": "I've had AFib for about 5 years.",
            "episodes before": "I've had episodes but never this bad.",
            "different": "This is much worse than usual.",
            
            // Medications
            "rate control": "I take metoprolol.",
            "metoprolol": "Yes, metoprolol 50mg twice daily.",
            "beta blocker": "Yes, I'm on a beta blocker.",
            "blood thinner": "Yes, I take Eliquis.",
            
            // Trigger
            "trigger": "I'm not sure what triggered this.",
            "sick": "I've had a cold the past few days.",
            "caffeine": "I had a lot of coffee today.",
            "alcohol": "I had a few drinks last night.",
            "stress": "I've been under stress."
        });

        // =====================================================================
        // PE - MASSIVE SCENARIO
        // =====================================================================
        expandScenarioHistory('pe', 'whatif_pe_massive', {
            // Severe symptoms
            "onset": "Sudden severe shortness of breath. Almost passed out.",
            "sudden": "Yes, came on suddenly.",
            
            "syncope": "Yes, I blacked out briefly.",
            "passed out": "Yes, for a few seconds.",
            "fainted": "I fainted briefly.",
            
            "breathing": "I can't breathe. It's terrifying.",
            "short of breath": "Severely short of breath.",
            "dyspnea": "Severe dyspnea.",
            "suffocating": "It feels like I'm suffocating.",
            
            "chest pain": "Crushing chest pain.",
            "chest": "Severe chest pain.",
            "pleuritic": "Hurts more when I breathe in.",
            
            "severity": "Worst I've ever felt. Feel like I'm dying.",
            "dying": "I feel like I'm going to die.",
            
            // Hemodynamic
            "lightheaded": "Extremely lightheaded.",
            "dizzy": "Very dizzy.",
            "weak": "Very weak.",
            "cold": "Hands and feet are cold.",
            "sweating": "Cold sweat.",
            "heart racing": "My heart is racing.",
            
            // Risk factors
            "surgery": "Yes, knee replacement 2 weeks ago.",
            "recent surgery": "Knee surgery 2 weeks ago.",
            "immobile": "I've been laid up since surgery.",
            "bed rest": "Yes, mostly bed rest.",
            "leg": "My other calf has been a bit swollen.",
            "leg swelling": "Yes, some left calf swelling.",
            "dvt": "Could I have a clot in my leg?",
            "prior clot": "No prior blood clots.",
            "blood thinner": "I was supposed to take one after surgery.",
            "lovenox": "Yes, I was on Lovenox.",
            "missed doses": "I might have missed a couple doses.",
            "family history": "My mother had blood clots."
        });

        // =====================================================================
        // SYNCOPE - CARDIAC SCENARIO
        // =====================================================================
        expandScenarioHistory('syncope', 'whatif_syncope_cardiac', {
            // No warning
            "warning": "No warning at all. Just suddenly on the ground.",
            "prodrome": "No prodrome.",
            "felt it coming": "No, I didn't feel it coming.",
            "symptoms before": "Nothing before - it just happened.",
            
            // Activity
            "activity": "I was walking up stairs.",
            "what doing": "Climbing stairs.",
            "exertion": "Yes, I was exerting myself.",
            "exercise": "I was climbing stairs.",
            "at rest": "No, I was active.",
            
            // Cardiac symptoms
            "palpitations": "Yes, my heart was racing right before.",
            "racing heart": "My heart was racing.",
            "heart": "It felt like it was pounding.",
            "irregular": "It felt irregular and very fast.",
            
            "chest pain": "I had some chest pressure before.",
            "chest": "Some chest discomfort.",
            
            // Duration
            "how long out": "About 30 seconds.",
            "duration": "About 30 seconds unconscious.",
            "after": "After I woke up, my heart was still racing.",
            
            // Family history - CRITICAL
            "family history": "My brother died suddenly at age 35 from a heart problem.",
            "sudden death": "Yes, my brother died suddenly.",
            "family heart": "My brother had sudden cardiac death.",
            
            // Prior episodes
            "happened before": "I've had a few of these. Usually with exercise.",
            "prior episodes": "Yes, maybe 3-4 times in the past year.",
            "pattern": "It seems to happen when I exert myself.",
            
            // Heart history
            "heart problems": "I was told I have a heart murmur.",
            "murmur": "Yes, they heard a murmur.",
            "echo": "I'm not sure if I ever had an echocardiogram.",
            "ekg": "I think I had an EKG once."
        });

        // =====================================================================
        // SEIZURE - STATUS EPILEPTICUS SCENARIO
        // =====================================================================
        expandScenarioHistory('seizure', 'whatif_seizure_status', {
            // Duration - CRITICAL
            "duration": "The seizure has been going on for about 15 minutes.",
            "how long": "About 15 minutes of continuous seizing.",
            "started when": "About 15-20 minutes ago.",
            "continuous": "Yes, it hasn't stopped. Still seizing.",
            "stopped": "No, it hasn't stopped.",
            "still seizing": "Yes, still actively seizing.",
            
            // Epilepsy history
            "epilepsy": "Yes, I have epilepsy but ran out of medication.",
            "seizures before": "Yes, I have a history of seizures.",
            "known epilepsy": "Yes, diagnosed with epilepsy years ago.",
            "type of seizures": "Grand mal seizures.",
            "usually stop": "My seizures usually stop after a minute or two.",
            "different": "This is much longer than usual.",
            
            // Medications
            "medication": "I take Keppra but I ran out.",
            "keppra": "Yes, levetiracetam.",
            "ran out": "I ran out about 4-5 days ago.",
            "why ran out": "I couldn't afford the refill.",
            "missed": "I've missed about 4-5 days.",
            
            // Triggers
            "trigger": "Probably missing my medication.",
            "sick": "I've also had a fever.",
            "fever": "Yes, I've had a fever.",
            "alcohol": "No alcohol.",
            "drugs": "No drugs.",
            "sleep": "I haven't been sleeping well.",
            
            // Witness
            "witnessed": "My roommate saw it start.",
            "what saw": "He suddenly fell and started shaking all over.",
            "generalized": "Yes, shaking all over.",
            "eyes": "Eyes rolled back.",
            "incontinence": "Yes, he wet himself."
        });

        // =====================================================================
        // ANAPHYLAXIS - BIPHASIC SCENARIO
        // =====================================================================
        expandScenarioHistory('anaphylaxis', 'whatif_anaphylaxis_biphasic', {
            // Initial reaction
            "first reaction": "I had anaphylaxis earlier today.",
            "initial": "The initial reaction was about 6 hours ago.",
            "what happened first": "Severe allergic reaction to shellfish.",
            "trigger": "I ate shrimp.",
            "allergen": "Shellfish - shrimp.",
            
            "initial treatment": "I got epinephrine and felt much better.",
            "epi": "Yes, they gave me epinephrine.",
            "epinephrine": "Yes, I got an epi shot.",
            "steroids": "Yes, they gave me steroids too.",
            "benadryl": "Yes, Benadryl and steroids.",
            "felt better": "I felt much better after treatment.",
            
            // Timeline
            "timeline": "Was in ER for about 2 hours. They were going to send me home.",
            "observation": "They watched me for about 2 hours.",
            
            // Recurrence
            "came back": "About 4 hours after the reaction, everything came back.",
            "recurrence": "The symptoms came back.",
            "when came back": "About 4 hours after the initial reaction.",
            "re-exposure": "No, I didn't eat anything else.",
            "ate anything": "No, I haven't eaten since.",
            "new exposure": "No new exposure to allergens.",
            
            // Current symptoms
            "current": "Not as bad as before but hives are back, throat tight.",
            "severity now": "Less severe but still concerning.",
            "hives": "Yes, hives are back.",
            "throat": "My throat feels tight again.",
            "breathing": "A little harder to breathe.",
            "swelling": "Some swelling of my lips.",
            "wheezing": "Some wheezing.",
            
            // History
            "allergies": "I'm allergic to shellfish.",
            "known allergy": "Yes, known shellfish allergy.",
            "epipen": "I have an EpiPen at home but didn't bring it.",
            "prior reactions": "I've had reactions but never this severe.",
            "biphasic before": "This has never happened before."
        });

        console.log('[ReasonDx] All scenario history expansions applied.');
    }

    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeHistoryExpansion);
    } else {
        initializeHistoryExpansion();
    }

})();
