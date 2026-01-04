/**
 * ReasonDx Part 32: Environmental and Specialty Cases
 * Cases: Cough/URI, Sore Throat, GERD Classic, Adrenal Insufficiency, Syncope, Acute Abdomen
 */
(function() {
    'use strict';

    const COUGH_URI_CASE = {
        meta: { caseId: "cough-uri", patientName: "David Brown", age: 38, diagnosis: "Viral upper respiratory infection" },
        responses: {
            "hello|hi": "Hi doc. *coughs* Sorry. Been coughing for a week. Can I get some antibiotics?",
            "what brings you in|chief complaint": "This cough won't go away. A week now. Congestion, sore throat initially, now just this cough. I need antibiotics.",
            "when|how long": "Started about 8 days ago with sore throat. Cough started day 3 and won't stop.",
            "cough|describe": "Dry at first, now I'm coughing up some stuff. Clear or white mucus.",
            "productive|phlegm|color": "Clear to white. Not yellow or green really.",
            "sore throat": "Was sore at the beginning, better now. Just this cough.",
            "runny nose|congestion": "Stuffy nose, post-nasal drip. That's making me cough too.",
            "fever": "Low grade fever first few days, 99-100. Normal now.",
            "body aches|fatigue": "Was achy and tired at first. Feeling better except for this cough.",
            "shortness of breath": "No, breathing is fine. Just annoying cough.",
            "chest pain": "Chest is sore from coughing so much. No real chest pain.",
            "better|worse": "A little better overall. Cough is hanging on. Worse at night.",
            "sick contacts|exposure": "My kids were sick last week. Brought it home from school.",
            "tried|treatment": "Cough drops, honey, DayQuil. Nothing really helps.",
            "previous|similar": "I get colds. Usually go away. This cough is lasting longer.",
            "smoking": "No, never smoked.",
            "asthma|lung disease": "No lung problems.",
            "medical history": "Healthy. No medical problems.",
            "medications": "Nothing regular.",
            "allergies": "Seasonal allergies but this is different.",
            "antibiotics|wanted": "I just figured antibiotics would knock this out. My coworker got Z-pack and felt better.",
            "work|missing work": "Haven't missed work but I'm annoying everyone with this cough.",
            "worried about|concerns": "Could this be bronchitis? Pneumonia? Why won't the cough stop?",
        }
    };

    const SORE_THROAT_CASE = {
        meta: { caseId: "sore-throat", patientName: "Katie Wilson", age: 22, diagnosis: "Pharyngitis - evaluation" },
        responses: {
            "hello|hi": "Hi. *voice raspy* My throat is killing me. Hurts to swallow.",
            "what brings you in|chief complaint": "Terrible sore throat for 3 days. Painful swallowing, fever. Need to know if it's strep.",
            "when|how long": "Started 3 days ago. Woke up with it. Getting worse.",
            "describe|pain": "Like swallowing glass. Even swallowing saliva hurts. 8 out of 10.",
            "swallowing|eating drinking": "Can barely swallow. Having soup and water. Can't eat solid food.",
            "fever": "Fever last night, 101.5. Took ibuprofen.",
            "chills|sweats": "Some chills with the fever.",
            "cough": "No real cough. Maybe clearing my throat.",
            "runny nose|congestion": "No runny nose. No congestion.",
            "voice|hoarse": "A little hoarse. Hurts to talk.",
            "lymph nodes|neck": "My neck is swollen. Can feel lumps on both sides. Tender.",
            "rash": "No rash.",
            "headache": "Some headache. Probably from not eating.",
            "body aches": "A little achy. Not terrible.",
            "strep before|history": "Had strep once in high school. This feels similar.",
            "sick contacts|exposure": "My roommate had strep last week. Was on antibiotics.",
            "kissing|intimate contact": "We share drinks sometimes. She felt better so I thought it was safe.",
            "medical history": "Healthy. No problems.",
            "medications": "Just ibuprofen for this.",
            "allergies": "No allergies.",
            "sexually active": "Yes, boyfriend.",
            "worried about|concerns": "Is it strep? My roommate was really sick. I have exams this week - I need to get better.",
        }
    };

    const GERD_CLASSIC_CASE = {
        meta: { caseId: "gerd-classic", patientName: "Steven Miller", age: 48, diagnosis: "GERD" },
        responses: {
            "hello|hi": "Hi doctor. I've been having bad heartburn. Almost every day now.",
            "what brings you in|chief complaint": "Burning in my chest after meals. Acid taste in my mouth. Wakes me up at night. Been going on for months.",
            "when|how long": "Started maybe 6 months ago. Occasional at first, now almost daily.",
            "describe|burning": "Burning sensation behind my breastbone. Rises up into my throat sometimes.",
            "when|timing|meals": "Worse after eating. Especially big meals or late dinners. Worse if I lie down after eating.",
            "foods|triggers": "Spicy food, tomato sauce, coffee, alcohol. Fried food.",
            "lying down|position": "Terrible if I lie flat after eating. Have to prop up with pillows.",
            "night|sleep": "Wakes me up with burning. Have to sit up. Take antacids.",
            "acid|regurgitation|taste": "Yes, sour taste in my mouth. Sometimes food comes back up. Gross.",
            "chest pain|describe pain": "Burning, not pressure. Doesn't radiate to my arm. Not with exertion.",
            "shortness of breath": "No breathing problems.",
            "swallowing|dysphagia": "Swallowing is fine. No food getting stuck.",
            "weight loss": "No weight loss.",
            "bleeding|black stool|vomiting blood": "No blood anywhere.",
            "tried|treatment|otc": "Tums help temporarily. Prilosec for a few weeks helped but I stopped.",
            "why stopped": "Ran out. Felt better so I stopped. Now it's back.",
            "diet|eating habits": "I eat late. Love spicy food. Drink coffee all day.",
            "alcohol": "Beer with dinner most nights. Wine on weekends.",
            "smoking": "Quit 5 years ago. Smoked 15 years.",
            "weight": "I've put on 30 pounds the last few years. I know.",
            "stress": "Stressful job. Eat at my desk.",
            "medical history": "High blood pressure. That's it.",
            "medications": "Lisinopril. Occasional Tums.",
            "allergies": "No allergies.",
            "family history|cancer": "My father had stomach cancer. That worries me.",
            "worried about|concerns": "Is this just heartburn or something more serious? My dad's history scares me.",
        }
    };

    const ADRENAL_INSUFFICIENCY_CASE = {
        meta: { caseId: "adrenal-insufficiency", patientName: "Christine Lee", age: 45, diagnosis: "Adrenal insufficiency" },
        responses: {
            "hello|hi": "*appears fatigued, thin* Hi doctor. I've been exhausted for months. Something is really wrong.",
            "what brings you in|chief complaint": "Crushing fatigue. Lost weight without trying. Dizzy all the time. Salt cravings. Skin is getting darker.",
            "when|how long": "Started maybe 6 months ago. Gradually getting worse.",
            "fatigue|describe": "Not normal tired. Can barely get through the day. Need to rest constantly. Worse than any tired I've ever felt.",
            "worse|pattern|timing": "Worse with any stress or illness. Even a cold knocks me out for days.",
            "weight|lost weight": "Lost 20 pounds without trying. Don't have an appetite but when I eat I crave salt.",
            "salt craving": "I want salty food all the time. Put extra salt on everything. Crave chips, pretzels, olives.",
            "appetite": "Poor appetite overall. But salty foods sound good.",
            "dizziness|lightheaded": "Dizzy when I stand up. Have to hold onto things. Almost passed out twice.",
            "blood pressure|orthostatic": "I checked at the pharmacy. It was low. 90/60.",
            "skin|darker|tanning": "My skin is getting darker. Especially my palms, my elbows, my gums. I haven't been in the sun.",
            "nausea|vomiting": "Nausea most days. Threw up a few times.",
            "abdominal pain": "Some belly pain. Vague.",
            "muscle|weakness|aches": "Weak. Muscles ache.",
            "mood|depression": "Feel low. Don't enjoy things. Could be depression but this fatigue is physical.",
            "menstrual|periods": "Periods have been irregular. Lighter.",
            "libido": "None. No interest.",
            "medical history": "Hypothyroid. On levothyroxine for years.",
            "autoimmune|other conditions": "Just the thyroid. They said it was autoimmune - Hashimoto's.",
            "medications": "Levothyroxine. That's it.",
            "steroids|ever taken": "No steroids that I recall.",
            "surgeries": "None.",
            "family history|autoimmune": "My sister has lupus. Mother had thyroid problems too.",
            "allergies": "No allergies.",
            "sexually active": "Married. Not lately - too tired.",
            "worried about|concerns": "What is wrong with me? I can't live like this. I'm falling apart.",
        }
    };

    const SYNCOPE_CASE = {
        meta: { caseId: "syncope", patientName: "Andrew Phillips", age: 35, diagnosis: "Syncope evaluation" },
        responses: {
            "hello|hi": "Hi. I passed out at work yesterday. Never happened before. My boss made me come in.",
            "what brings you in|chief complaint": "Fainted at work. Was standing in a meeting, felt weird, then woke up on the floor. People were around me.",
            "when|what happened": "Yesterday afternoon. In a long meeting. Standing the whole time.",
            "describe|before|warning": "Felt hot, sweaty. Vision got dark around the edges. Heard ringing. Then nothing.",
            "how long|out": "They said maybe 30 seconds. Came to pretty quickly. Was confused for a minute.",
            "fall|injury|hurt": "Didn't hit my head. Fell onto someone actually, they caught me partially. Maybe bruised my knee.",
            "after|how did you feel": "Nauseous after. Sweaty. Took a few minutes to feel normal.",
            "previous|happened before": "Never fully passed out. I've felt lightheaded before but always caught myself.",
            "triggers|similar situations": "Now that I think about it, standing for long periods makes me woozy sometimes. Hot rooms.",
            "eating|breakfast|fasting": "I skipped breakfast yesterday. Just coffee. And it was a hot room.",
            "dehydrated|fluids": "Probably didn't drink enough water.",
            "heart|palpitations|before": "Maybe my heart was racing? I remember it felt fast before I went down.",
            "chest pain|during or before": "No chest pain.",
            "exertion|exercise|during activity": "No, I was just standing still. Not exercising.",
            "seizure|shaking|bit tongue": "They said I didn't shake. Didn't bite my tongue. Didn't wet myself.",
            "family history|sudden death|heart": "My grandfather died of a heart attack in his 60s. Nothing young or sudden.",
            "heart problems|known cardiac": "No heart problems I know of. Never had anything checked.",
            "medical history": "Healthy. No problems.",
            "medications": "Nothing. Occasional ibuprofen.",
            "caffeine": "Lots of coffee. 4-5 cups.",
            "alcohol|drugs": "Drink socially. No drugs.",
            "sleep|rest": "I don't sleep great. Maybe 5-6 hours.",
            "stress": "Stressful job. The meeting was with executives. I was nervous.",
            "sexually active": "Yes, girlfriend.",
            "worried about|concerns": "Is something wrong with my heart? What if this happens while I'm driving?",
        }
    };

    const ACUTE_ABDOMEN_CASE = {
        meta: { caseId: "acute-abdomen", patientName: "Patricia Johnson", age: 55, diagnosis: "Acute abdomen - surgical evaluation" },
        responses: {
            "hello|hi": "*lying very still, appears in distress* Please... my stomach...",
            "what brings you in|chief complaint": "Terrible stomach pain. Came on suddenly. Worst pain of my life. Can't move without making it worse.",
            "when|how long": "Started about 3 hours ago. Sudden. Was watching TV and boom - this pain.",
            "where|location|point": "All over now. Started more in the upper part. Now it's everywhere.",
            "describe|quality": "Sharp, constant. Like something burst inside me. Burns.",
            "severity|scale": "10 out of 10. I have a high pain tolerance. This is unbearable.",
            "sudden|gradual": "Very sudden. One moment fine, next moment screaming.",
            "worse|better|movement": "Worse with any movement. Even breathing hurts. Better if I lie perfectly still.",
            "eating|last meal": "Had lunch 2 hours before this started. Sandwich. Nothing unusual.",
            "nausea|vomiting": "Threw up once. Just felt like I had to.",
            "fever": "Don't know. Feel cold and clammy.",
            "bowel|gas|last bm": "Haven't passed gas since this started. Had a normal BM this morning.",
            "bloated|distended": "My belly feels tight. Bloated. Hard.",
            "similar|happened before": "I've had stomach aches. Ulcer pain before. This is completely different.",
            "ulcer|peptic ulcer disease": "Yes, I have an ulcer. Diagnosed a few years ago. Take Prilosec.",
            "nsaids|aspirin|ibuprofen": "I take ibuprofen for my knee. Every day. And I take aspirin for my heart.",
            "how much|how often": "Ibuprofen 600mg twice a day. Baby aspirin daily.",
            "bleeding|blood|black stool": "No blood in my stool. Had some black stool a few days ago but figured it was the iron pills.",
            "medical history": "Peptic ulcer, high blood pressure, arthritis, heart disease - had a stent.",
            "surgeries": "Heart stent. Gallbladder out years ago.",
            "medications": "Aspirin, ibuprofen, Prilosec, lisinopril, atorvastatin, metoprolol.",
            "alcohol": "Glass of wine with dinner.",
            "smoking": "Quit 10 years ago.",
            "allergies": "Penicillin - hives.",
            "sexually active": "Yes, husband.",
            "worried about|concerns": "Something is really wrong. Please help me. I've never felt anything like this.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['cough-uri'] = COUGH_URI_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['sore-throat'] = SORE_THROAT_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['gerd-classic'] = GERD_CLASSIC_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['adrenal-insufficiency'] = ADRENAL_INSUFFICIENCY_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['syncope'] = SYNCOPE_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['acute-abdomen'] = ACUTE_ABDOMEN_CASE;
    
    console.log('ReasonDx Part 32 (URI, Sore Throat, GERD, Adrenal Insufficiency, Syncope, Acute Abdomen) loaded');

})();
