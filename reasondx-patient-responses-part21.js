/**
 * ReasonDx Part 21: Additional Environmental Exposures
 * Cases: Mold, Radon, Formaldehyde, Cadmium, Arsenic, Benzene
 */

(function() {
    'use strict';

    const MOLD_EXPOSURE = {
        meta: { caseId: "mold-exposure", patientName: "Jennifer Davis", age: 38, diagnosis: "Mold-related illness" },
        responses: {
            "hello|hi": "Hi doc. I've been sick for months and I think my apartment is making me sick.",
            "what brings you in|chief complaint": "Chronic cough, congestion, headaches, fatigue. Started when I moved into my apartment 6 months ago. It gets better when I travel.",
            "when|how long": "6 months since I moved. Symptoms started within the first month.",
            "symptoms": "Stuffy nose, cough, post-nasal drip, headaches, fatigue, brain fog. Occasional wheezing.",
            "better|worse|pattern": "Better when I'm away - like when I visited my sister for a week. Comes back when I return home.",
            "apartment|home|environment": "Old building, basement apartment. Musty smell. I've seen some dark spots on the bathroom ceiling.",
            "mold|visible mold": "Yes, black stuff in the bathroom. My landlord painted over it but it came back. There was a water leak too.",
            "water damage|leak": "Pipe leaked in the wall maybe 6 months ago. They fixed it but the wall was wet for a while.",
            "allergies|history": "Had mild allergies as a kid. Nothing like this. I'm allergic to dust.",
            "asthma": "No asthma before this. But now I wheeze sometimes.",
            "medical history": "Healthy. No major problems.",
            "medications": "Antihistamines. Tried nasal sprays. Not helping much.",
            "smoke": "No.",
            "sexually active": "Yes, with my boyfriend. On the pill.",
            "worried about|concerns": "Is the mold causing this? Can mold cause long-term damage? I'm fighting with my landlord about it.",
        }
    };

    const RADON_EXPOSURE = {
        meta: { caseId: "radon-exposure", patientName: "Robert Anderson", age: 65, diagnosis: "Lung cancer (radon-associated)" },
        responses: {
            "hello|hi": "Hi doctor. They found a spot on my lung and said I need to be worked up.",
            "what brings you in|chief complaint": "Persistent cough for 3 months. Some blood in my sputum. They found a nodule on CT.",
            "symptoms": "Cough won't go away. Sometimes blood-tinged mucus. Lost 10 pounds without trying. Tired.",
            "when|how long": "Cough started 3-4 months ago. Blood in sputum for maybe 6 weeks.",
            "smoke|smoking": "Never smoked. That's what's strange. Everyone assumes lung cancer means smoking.",
            "home|basement|radon": "We live in a high-radon area. Tested our basement a few years ago - it was elevated. We meant to get a mitigation system but never did.",
            "how high|radon level": "I think it was around 8 pCi/L. Normal is under 4. We just... put it off. Cost was an issue.",
            "how long|living there": "35 years in that house. Raised our kids there. Spend a lot of time in the basement - my workshop is down there.",
            "basement time|exposure": "I'm in the basement maybe 15-20 hours a week. My workshop, watching games, exercise equipment.",
            "family history|cancer": "My father died of lung cancer. He didn't smoke either. Same house... he lived with us.",
            "medical history": "High blood pressure. Otherwise healthy until now.",
            "medications": "Lisinopril. That's it.",
            "sexually active": "Yes, with my wife. 40 years married.",
            "worried about|concerns": "Is this lung cancer? Did the radon cause it? I never smoked... I thought I was safe.",
        }
    };

    const FORMALDEHYDE_EXPOSURE = {
        meta: { caseId: "formaldehyde-exposure", patientName: "Amanda White", age: 42, diagnosis: "Formaldehyde sensitivity/SBS" },
        responses: {
            "hello|hi": "Hi. Ever since we got new furniture and cabinets, I've been getting terrible headaches and burning eyes.",
            "what brings you in|chief complaint": "Headaches, burning eyes, sore throat, breathing issues. Started after our kitchen remodel 2 months ago.",
            "when|how long": "Started about 2 months ago, right after we finished the remodel and got new furniture.",
            "symptoms": "Burning eyes, watery. Headaches daily. Sore throat. Sometimes feel short of breath. Nose irritation.",
            "worse|pattern|home": "Worse at home, especially in the kitchen. Better at work. Better when windows are open.",
            "remodel|new materials": "New cabinets, laminate flooring, new furniture. All within a few months.",
            "type|cabinets|materials": "Pressed wood cabinets. Some flatpack furniture. New composite flooring.",
            "smell|odor|chemical": "Definitely a 'new' smell. Chemical smell. Husband barely notices but it bothers me a lot.",
            "ventilation|windows": "We keep windows closed mostly - A/C. The smell gets strong when it's warm.",
            "others|family affected": "My husband has some irritation but not as bad. Our dog has been sneezing more.",
            "allergies|history": "Some seasonal allergies. Chemical sensitivities - can't be around perfume.",
            "medical history": "Allergies, mild asthma. Otherwise healthy.",
            "medications": "Antihistamines, albuterol inhaler as needed.",
            "smoke": "No.",
            "sexually active": "Yes, with my husband.",
            "worried about|concerns": "Is this formaldehyde? Can our new cabinets be making us sick? What can we do?",
        }
    };

    const CADMIUM_EXPOSURE = {
        meta: { caseId: "cadmium-exposure", patientName: "William Torres", age: 55, diagnosis: "Cadmium toxicity (occupational)" },
        responses: {
            "hello|hi": "Hello doctor. My doctor sent me because my kidney function is declining and I work with batteries.",
            "what brings you in|chief complaint": "Kidney problems showing up on blood work. Bone pain. Work in battery manufacturing - they're worried about cadmium.",
            "when|symptoms": "Kidney issues found on routine labs 6 months ago. Getting worse. Bone and joint pain for a year or so.",
            "kidney|describe": "Creatinine keeps going up. Doctor said my kidneys are functioning at 50%. Never had kidney problems before.",
            "bone pain|joints": "Aching in my back and legs. Bones feel fragile. Hurt a coworker in the plant broke his hip just stepping off a curb.",
            "work|job|occupation": "Battery manufacturing. Nickel-cadmium batteries. 25 years.",
            "exposure|how": "We handle cadmium compounds. Mixing, processing. There's dust. Fumes when soldering.",
            "protection|ppe": "We have masks and ventilation but... it wasn't always great. First 15 years, protection was minimal.",
            "blood test|cadmium level": "They checked my blood cadmium - it was high. That's why they sent me to you.",
            "urine|proteinuria": "They said there's protein in my urine. That's kidney damage, right?",
            "coworkers|others sick": "Several guys have had kidney problems. One's on dialysis. We all worked the same line.",
            "smoke|smoking": "I smoke. Half pack a day. Probably makes it worse.",
            "medical history": "High blood pressure. Now the kidney problems.",
            "medications": "Lisinopril. Vitamin D they just started.",
            "sexually active": "Yes, with my wife.",
            "worried about|concerns": "Is my kidney damage permanent? Am I going to need dialysis? Can I sue the company?",
        }
    };

    const ARSENIC_EXPOSURE = {
        meta: { caseId: "arsenic-exposure", patientName: "Maria Garcia", age: 55, diagnosis: "Chronic arsenic exposure (well water)" },
        responses: {
            "hello|hi": "Hello. My doctor found arsenic in my blood and we think it's from our well water.",
            "what brings you in|chief complaint": "Skin changes, numbness in my feet, stomach problems. Blood test showed high arsenic. We have a private well.",
            "symptoms": "Dark patches on my skin, especially palms and soles. Thickening of skin. Numb tingling feet. Diarrhea off and on.",
            "when|how long": "Skin changes maybe 2 years. Numbness last 6 months. Stomach problems on and off for years.",
            "skin|describe": "Dark spots on my palms and soles. Little hard bumps. Skin looks different.",
            "numbness|neuropathy": "Feet feel tingly, then numb. Like socks are bunched up but they're not.",
            "well|water source": "Private well. We're rural. Been on this well 20 years.",
            "tested|well tested": "Just got it tested last month. Arsenic was 50 ppb. They said safe is under 10.",
            "drinking|consumption": "We drink it, cook with it, bathe in it. Everything. Didn't know there was a problem.",
            "neighbors|community": "Some neighbors have had problems too. There's an old mine upstream.",
            "industrial|source": "They think it's from an abandoned mine. The groundwater is contaminated.",
            "family|others affected": "My husband has similar skin changes. Our grandson stays with us often - I'm worried about him.",
            "medical history": "Diabetes. High blood pressure. Now these problems.",
            "smoke": "No.",
            "sexually active": "Yes, with my husband.",
            "worried about|concerns": "Can this cause cancer? What about my grandson? How do we fix our water?",
        }
    };

    const BENZENE_EXPOSURE = {
        meta: { caseId: "benzene-exposure", patientName: "James Wilson", age: 48, diagnosis: "Benzene exposure (refinery worker)" },
        responses: {
            "hello|hi": "Doc, my blood counts are all off and I work at the refinery. They're worried about benzene.",
            "what brings you in|chief complaint": "Low blood counts. White cells and platelets both low. Fatigue. Work at oil refinery for 20 years.",
            "symptoms": "Tired all the time. Bruising easily. Had a nosebleed that took forever to stop.",
            "when|how long": "Found on routine work physical. They do blood tests yearly. This year everything was low.",
            "lab results|counts": "White count was 3,000 - should be higher. Platelets 90,000 - also low. Red cells borderline.",
            "work|job": "Oil refinery. Been there 22 years. Work with petrochemicals every day.",
            "benzene|exposure": "Benzene is everywhere in refining. We try to minimize exposure but there are spills, leaks, fumes.",
            "how much|level": "They monitor our benzene exposure. Mine's been in the acceptable range mostly. But acceptable doesn't mean zero.",
            "protection|ppe": "Respirators when supposed to. Coveralls. But you can't wear a mask all day. And years ago, less protection.",
            "spills|incidents": "Been in plenty of situations with exposure. Spills, equipment failures. It happens.",
            "coworkers|others": "A few guys have had blood problems. One was diagnosed with leukemia last year.",
            "smoke|drinking": "Used to smoke. Quit 5 years ago. Drink on weekends.",
            "medical history": "Healthy until this. Regular physicals for work.",
            "medications": "Nothing.",
            "sexually active": "Yes, with my wife. 20 years married.",
            "worried about|concerns": "Does this mean I'm getting leukemia? Benzene causes leukemia, doesn't it?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['mold-exposure'] = MOLD_EXPOSURE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['radon-exposure'] = RADON_EXPOSURE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['formaldehyde-exposure'] = FORMALDEHYDE_EXPOSURE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['cadmium-exposure'] = CADMIUM_EXPOSURE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['arsenic-exposure'] = ARSENIC_EXPOSURE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['benzene-exposure'] = BENZENE_EXPOSURE;
    
    console.log('ReasonDx Part 21 (Mold, Radon, Formaldehyde, Cadmium, Arsenic, Benzene) loaded');

})();
