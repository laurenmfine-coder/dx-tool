/**
 * ReasonDx Part 46: Travel and Infectious Cases
 * Cases: hotel-pneumonia, pet-store-fever, hiker-rash-joint, hunter-fever-ulcer, oyster-sepsis, vacation-gi-neuro
 */
(function() {
    'use strict';

    const HOTEL_PNEUMONIA = {
        meta: { caseId: "hotel-pneumonia", patientName: "Patricia Moore", age: 58, diagnosis: "Legionella from hotel" },
        responses: {
            "hello|hi": "*coughing, febrile* Hi... got sick at conference...",
            "what brings you in|chief complaint": "High fever, bad cough, confusion. Was at a hotel for a conference. Got very sick.",
            "when|how long": "Started 4 days ago. Day after getting home.",
            "travel|where": "Business conference. Large hotel. Las Vegas.",
            "fever|temperature": "High fever. 104. Shaking chills.",
            "cough|describe": "Bad cough. Bringing up rusty colored sputum.",
            "shortness of breath": "Very short of breath. Can't catch it.",
            "confusion|mental": "My husband says I've been confused. Not making sense.",
            "diarrhea|gi": "Bad diarrhea. Watery.",
            "headache": "Severe headache.",
            "muscle aches": "Ache all over.",
            "hotel|room|floor": "Big hotel. Old building. 15th floor.",
            "water|pool|spa": "Used the pool and hot tub. Showered in the room.",
            "ac|air conditioning": "AC was loud. Old unit in the room.",
            "others sick|conference": "Heard a few other attendees got sick too.",
            "smoker|history": "Smoked for 20 years. Quit 10 years ago.",
            "medical history": "COPD. Diabetes.",
            "immunocompromised": "Just the COPD and diabetes.",
            "medications": "Metformin, Spiriva, albuterol.",
            "allergies": "Penicillin.",
            "worried about|concerns": "Is this Legionnaires? From the hotel? Should they be notified?",
        }
    };

    const PET_STORE_FEVER = {
        meta: { caseId: "pet-store-fever", patientName: "Sarah Johnson", age: 32, diagnosis: "Psittacosis" },
        responses: {
            "hello|hi": "*coughing, fatigued* Hi. Can't shake this illness.",
            "what brings you in|chief complaint": "High fever, bad headache, cough. Work at a pet store. Been sick 10 days.",
            "when|how long": "Started about 10 days ago. Not getting better.",
            "fever|temperature": "High fever at start. 103. Now lower but not gone.",
            "headache|describe": "Terrible headache. Worst part. Behind my eyes.",
            "cough|describe": "Dry cough. Getting worse. Now bringing up some mucus.",
            "shortness of breath": "Getting more winded.",
            "muscle aches|myalgia": "Muscles ache. Feel like I have the flu but it won't end.",
            "rash": "No rash.",
            "gi symptoms": "Some nausea. Lost appetite.",
            "work|pet store": "Work at a pet store. Birds section.",
            "birds|exposure": "Handle parrots, parakeets, cockatiels. All the time.",
            "sick birds|any ill": "Now that you mention it, a few birds seemed sick. Ruffled feathers. One died.",
            "cleaning|cages|dust": "Clean cages. Lots of dust and droppings. It's messy work.",
            "protection|mask": "Don't wear a mask. Should I?",
            "coworkers|others sick": "My coworker has a cough too. Not as bad.",
            "pets at home": "Have a parrot at home. He seems okay.",
            "antibiotics|treatment": "Took azithromycin. Helped a little but not better.",
            "medical history": "Nothing. Healthy.",
            "medications": "Just finished azithromycin.",
            "allergies": "None.",
            "worried about|concerns": "Is this from the birds? Can I give it to my bird at home?",
        }
    };

    const HIKER_RASH_JOINT = {
        meta: { caseId: "hiker-rash-joint", patientName: "Mark Stevens", age: 38, diagnosis: "Lyme disease" },
        responses: {
            "hello|hi": "Hi doc. Got this rash after hiking. Now my joints hurt.",
            "what brings you in|chief complaint": "Expanding rash on my leg, fever, joint pain. Was hiking in Connecticut 2 weeks ago.",
            "rash|describe": "Big red circle on my thigh. Clearing in the middle. Like a target.",
            "when noticed rash": "Noticed it about 10 days ago. It's grown.",
            "size|how big": "Started small. Now bigger than my hand.",
            "location": "Back of my thigh. Where I found a tick.",
            "tick|bite": "Found a tick attached after hiking. Pulled it off.",
            "how long attached": "Don't know. Could have been a day. Didn't notice at first.",
            "saved tick|have it": "Flushed it. Wish I hadn't now.",
            "where hiking|location": "Hiking in Connecticut. Lyme, actually. I know, ironic.",
            "fever|systemic": "Low fever. Body aches. Like the flu.",
            "joint pain|describe": "Right knee is swollen and painful. Came on recently.",
            "other joints": "Left ankle too. Joints seem to come and go.",
            "headache": "Some headache. Stiff neck.",
            "facial|bell's palsy": "Face feels okay.",
            "heart|palpitations": "Heart seems fine.",
            "fatigue": "Very tired. No energy.",
            "medical history": "Healthy. Nothing.",
            "medications": "Nothing.",
            "allergies": "None.",
            "worried about|concerns": "Is this Lyme disease? I've heard it can be serious if not treated.",
        }
    };

    const HUNTER_FEVER = {
        meta: { caseId: "hunter-fever-ulcer", patientName: "John Mitchell", age: 45, diagnosis: "Tularemia" },
        responses: {
            "hello|hi": "*appears ill, with bandaged hand* Hi. Got sick after skinning a rabbit.",
            "what brings you in|chief complaint": "Fever, swollen lymph nodes, ulcer on my hand. Was skinning rabbits last week.",
            "when|how long": "Fever started 5 days ago. Getting worse.",
            "fever|temperature": "High fever. 103. Chills.",
            "ulcer|wound|describe": "Cut my finger skinning a rabbit. Now it's an ulcer. Won't heal.",
            "show me|hand": "*shows finger with ulcerated lesion* Started as small cut. Now this open sore.",
            "lymph nodes|swollen": "Armpit on that side is huge. Swollen, painful.",
            "describe lymph node": "Like a golf ball. Very tender.",
            "headache": "Bad headache.",
            "muscle aches": "Aching all over.",
            "cough|respiratory": "Some cough. Chest feels tight.",
            "what happened|hunting": "Was hunting rabbits. Shot a few. Skinned them.",
            "rabbit|appearance": "One rabbit was slow. Easy to catch. Seemed sick maybe.",
            "protection|gloves": "Wasn't wearing gloves. Stupid. Cut myself on the knife.",
            "where|location|area": "Hunting in Arkansas. Rural area.",
            "ate|cooked": "Didn't eat them. Wife wouldn't let me after I got sick.",
            "others|hunting partners": "Hunted alone.",
            "medical history": "Healthy otherwise.",
            "medications": "Nothing.",
            "allergies": "Penicillin.",
            "worried about|concerns": "Is this from the rabbit? What is it?",
        }
    };

    const OYSTER_SEPSIS = {
        meta: { caseId: "oyster-sepsis", patientName: "William Davis", age: 62, diagnosis: "Vibrio from raw oysters" },
        responses: {
            "hello|hi": "*appears very ill, febrile* Doctor... feel terrible... ate oysters...",
            "what brings you in|chief complaint": "Fever, chills, diarrhea. Ate raw oysters 2 days ago. Getting very sick.",
            "when|how long": "Started about 24 hours after eating. Getting worse fast.",
            "oysters|where": "Raw oysters at a restaurant. Gulf Coast place.",
            "how many": "Had a dozen. Loved them. Eat them all the time.",
            "fever|temperature": "High fever. Shaking. Terrible chills.",
            "diarrhea|describe": "Watery diarrhea. Constant.",
            "vomiting": "Threw up several times.",
            "abdominal pain": "Stomach cramps. Bad.",
            "leg|skin": "Actually, my leg hurts. *shows red, warm area on calf*",
            "describe leg|wound": "No cut. But it's red and hot. Spreading.",
            "blisters|bullae": "Starting to blister. Dark looking.",
            "liver|history": "I have liver problems. Cirrhosis. From drinking.",
            "hepatitis": "Had hepatitis C. Treated.",
            "alcohol|drinking": "Drink. Trying to stop.",
            "diabetes": "Diabetic too. Not great control.",
            "immunocompromised": "Liver's bad. Diabetes. In poor shape.",
            "blood pressure|vitals": "Feeling faint. Dizzy.",
            "medications": "Metformin, lactulose, vitamins.",
            "allergies": "None.",
            "worried about|concerns": "Am I going to lose my leg? This is bad isn't it?",
        }
    };

    const VACATION_GI_NEURO = {
        meta: { caseId: "vacation-gi-neuro", patientName: "Elizabeth Chen", age: 35, diagnosis: "Travelers diarrhea with neuro symptoms" },
        responses: {
            "hello|hi": "Hi doctor. Got sick on vacation. Having weird symptoms.",
            "what brings you in|chief complaint": "Diarrhea, stomach cramps, and now tingling in my hands and feet. Just returned from trip.",
            "when|how long": "GI stuff started a week ago. Tingling started 2 days ago.",
            "travel|where": "Southeast Asia. Thailand and Vietnam. 2 weeks.",
            "diarrhea|describe": "Watery diarrhea. Many times a day. Better now but not gone.",
            "blood|mucus": "No blood. Some mucus.",
            "cramping": "Bad cramps before each episode.",
            "fever": "Low fever at first. Gone now.",
            "tingling|describe": "Tingling in fingers and toes. Numbness.",
            "pattern|distribution": "Both hands, both feet. Symmetric.",
            "weakness": "Legs feel a little weak. Noticed climbing stairs.",
            "food|what ate": "Street food. Seafood. Adventure eating.",
            "water|ice": "Drank bottled water. Had ice in drinks though.",
            "raw|undercooked": "Raw fish. Raw vegetables. Spicy stuff.",
            "antibiotics|treatment": "Took Cipro I had from home. Helped a little.",
            "progression|neuro symptoms": "Tingling started after diarrhea got better. Getting worse.",
            "face|breathing": "Face feels okay. Breathing okay.",
            "reflexes|noticed": "Legs feel funny. Rubbery.",
            "medical history": "Healthy. Traveled a lot.",
            "medications": "Finished Cipro.",
            "allergies": "None.",
            "worried about|concerns": "Why am I tingling? The GI stuff I expected. This is scary.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['hotel-pneumonia'] = HOTEL_PNEUMONIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['pet-store-fever'] = PET_STORE_FEVER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['hiker-rash-joint'] = HIKER_RASH_JOINT;
    window.COMPREHENSIVE_PATIENT_RESPONSES['hunter-fever-ulcer'] = HUNTER_FEVER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['oyster-sepsis'] = OYSTER_SEPSIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['vacation-gi-neuro'] = VACATION_GI_NEURO;
    
    console.log('ReasonDx Part 46 (Hotel Pneumonia, Pet Store, Hiker, Hunter, Oyster, Vacation GI) loaded');

})();
