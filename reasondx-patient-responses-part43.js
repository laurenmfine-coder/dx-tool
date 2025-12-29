/**
 * ReasonDx Part 43: Environmental and Occupational Cases
 * Cases: env-dengue, env-legionnaires, env-organophosphate, env-mesothelioma, env-vibrio, env-ciguatera
 */
(function() {
    'use strict';

    const ENV_DENGUE = {
        meta: { caseId: "env-dengue", patientName: "Maria Santos", age: 28, diagnosis: "Dengue fever" },
        responses: {
            "hello|hi": "*appears ill, febrile* Hi doctor. Just got back from trip. Feel terrible.",
            "what brings you in|chief complaint": "High fever, terrible headache, body aches everywhere. Just returned from Caribbean.",
            "when|how long": "Started 4 days ago. Getting worse.",
            "travel|where": "Dominican Republic. Beach resort. Got back 5 days ago.",
            "fever|temperature": "High fever. 103-104. Comes and goes.",
            "headache|describe": "Behind my eyes. Terrible. Worst headache ever.",
            "body aches|myalgia": "Bones hurt. Muscles hurt. Everything hurts. Like I was hit by a truck.",
            "rash": "Rash appeared today. Red, flat. Started on trunk.",
            "describe rash": "Fine red spots. Spreading to arms and legs.",
            "bleeding|bruising": "Some nosebleed. Gums bled when I brushed teeth.",
            "nausea|vomiting": "Nauseous. Threw up once.",
            "mosquito bites|exposure": "Lots of mosquito bites. Despite repellent.",
            "where stayed|hotel": "Beach resort. Outdoor activities. Jungle tour.",
            "others sick|travel companions": "Husband feels okay so far. Worried about him.",
            "similar before|previous dengue": "Never had dengue before.",
            "vaccinated|dengue vaccine": "No dengue vaccine.",
            "medical history": "Healthy. No conditions.",
            "medications": "Just ibuprofen for the pain.",
            "allergies": "None.",
            "worried about|concerns": "Is this dengue? I read it can be dangerous. The bleeding scares me.",
        }
    };

    const ENV_LEGIONNAIRES = {
        meta: { caseId: "env-legionnaires", patientName: "Robert Mitchell", age: 62, diagnosis: "Legionnaires' disease" },
        responses: {
            "hello|hi": "*coughing, short of breath* Doc... bad pneumonia...",
            "what brings you in|chief complaint": "High fever, terrible cough, can't breathe. Got sick after a cruise.",
            "when|how long": "Started 5 days ago. Day after getting off the ship.",
            "travel|cruise|where": "Caribbean cruise. 7 days. Just got back.",
            "fever|temperature": "High fever. 104. Shaking chills.",
            "cough|describe": "Bad cough. Bringing up some mucus. Rust colored.",
            "shortness of breath": "Can barely walk to bathroom. Winded doing nothing.",
            "chest pain": "Hurts when I breathe. When I cough.",
            "confusion|mental": "Wife says I've been confused. Not making sense.",
            "diarrhea|gi": "Bad diarrhea. Watery. Started with the fever.",
            "headache": "Splitting headache.",
            "muscle aches": "Muscles ache all over.",
            "hot tub|spa|water": "Used the hot tub every day. And the pool.",
            "ship|deck|water exposure": "Water attractions on the ship. Splash areas.",
            "others sick|passengers": "Heard some other passengers got sick too.",
            "smoking": "Smoked 30 years. Quit 5 years ago.",
            "medical history": "COPD. Diabetes. High blood pressure.",
            "immunocompromised": "No. Just the COPD and diabetes.",
            "medications": "Metformin, lisinopril, Spiriva.",
            "allergies": "Penicillin.",
            "worried about|concerns": "Is this Legionnaires? I saw on the news about cruise ships.",
        }
    };

    const ENV_ORGANOPHOSPHATE = {
        meta: { caseId: "env-organophosphate", patientName: "Carlos Mendez", age: 45, diagnosis: "Organophosphate poisoning" },
        responses: {
            "hello|hi": "*sweating profusely, drooling, trembling* Something... wrong... spraying fields...",
            "what brings you in|chief complaint": "*coworker* He collapsed in the field. Was spraying pesticides. Something's very wrong.",
            "when|how long": "*coworker* Maybe an hour ago. Got worse quickly.",
            "what happened|describe": "*coworker* He was spraying crops. Said he felt dizzy. Then started sweating and shaking.",
            "sweating|diaphoresis": "*visible profuse sweating* Drenched. Clothes soaked.",
            "drooling|salivation": "*excessive saliva* Can't stop drooling. Mouth full of spit.",
            "vision|pupils": "*coworker* His pupils look tiny. Pinpoint.",
            "breathing|respiratory": "Wheezing. Wet sounds. Hard to breathe.",
            "chest|tightness": "*patient gasps* Tight... can't breathe...",
            "vomiting|nausea": "*coworker* Threw up twice. Diarrhea too.",
            "urination|incontinence": "*coworker* He... wet himself.",
            "muscle|twitching|fasciculations": "Muscles twitching. *visible fasciculations*",
            "confusion|mental": "*coworker* He's confused. Not making sense.",
            "what pesticide|which chemical": "*coworker* Malathion I think. Organophosphate. We spray it on crops.",
            "protection|equipment": "*coworker* Mask broke. He kept working. Didn't have backup.",
            "skin exposure|contact": "*coworker* Got it on his skin too. Arms and face.",
            "decontaminated|washed": "*coworker* We didn't have time. Brought him straight here.",
            "similar before|previous exposure": "*coworker* He's been sick before from spraying. Not this bad.",
            "medical history": "*coworker* Don't know. He's healthy usually.",
            "medications": "*coworker* Don't know.",
            "allergies": "*coworker* Don't know.",
        }
    };

    const ENV_MESOTHELIOMA = {
        meta: { caseId: "env-mesothelioma", patientName: "Frank Patterson", age: 68, diagnosis: "Mesothelioma" },
        responses: {
            "hello|hi": "*appears thin, short of breath* Hi doc. Hard to catch my breath.",
            "what brings you in|chief complaint": "Shortness of breath for months. Chest pain. Lost weight. CT showed something.",
            "when|how long": "Breathing problems for 4-5 months. Getting worse.",
            "shortness of breath|describe": "Can't do what I used to. Winded walking to car.",
            "worse|lying down": "Worse lying flat. Sleep propped up now.",
            "chest pain|describe": "Aching on the right side. Deep. Constant.",
            "cough": "Dry cough. Nothing comes up.",
            "weight loss": "Lost 25 pounds without trying.",
            "appetite": "No appetite. Feel full fast.",
            "night sweats": "Drenching sweats at night.",
            "fatigue": "Exhausted all the time.",
            "ct|imaging|what showed": "They saw fluid around my lung. And thickening. Sent me here.",
            "work|occupation|asbestos": "Shipyard worker for 35 years. Knew about asbestos. Didn't think it would get me.",
            "asbestos exposure|how long": "Worked around it for decades. Insulation, pipes. Dusty work.",
            "protection|masks": "Didn't really use masks back then. Nobody did.",
            "when|years ago": "Started in 1975. Retired 10 years ago.",
            "latency|how long since exposure": "Yeah, I know it takes decades. Hoped I'd be one of the lucky ones.",
            "smoking": "Smoked for 20 years. Quit 30 years ago.",
            "family|others exposed": "Wife washed my work clothes. Worried about her.",
            "medical history": "High blood pressure. Nothing else until now.",
            "medications": "Lisinopril.",
            "allergies": "None.",
            "worried about|concerns": "Is this mesothelioma? I've seen the commercials. Is it terminal?",
        }
    };

    const ENV_VIBRIO = {
        meta: { caseId: "env-vibrio", patientName: "James Cooper", age: 55, diagnosis: "Vibrio vulnificus infection" },
        responses: {
            "hello|hi": "*appears toxic, with bandaged leg* My leg... got infected from the water...",
            "what brings you in|chief complaint": "Cut my leg in the ocean 3 days ago. Now it's swollen, blistering, spreading. Feel terrible.",
            "when|how long": "Cut it 3 days ago. Got red fast. Now out of control.",
            "what happened|describe": "Cut my shin on oyster shells. In the Gulf. Wading in the water.",
            "leg|describe wound": "Started as small cut. Now whole calf is red, hot, blistering. *shows angry cellulitis with hemorrhagic bullae*",
            "spreading|how fast": "Spreading up my leg. Getting worse by the hour.",
            "blisters|bullae": "Blood-filled blisters. Dark purple areas.",
            "pain|severity": "Excruciating. 10 out of 10.",
            "fever|systemic": "High fever. 103. Chills. Feel awful.",
            "nausea|vomiting": "Nauseous. Threw up.",
            "confusion|mental": "Feeling foggy. Weak.",
            "where|location|water": "Gulf Coast. Warm water. Been fishing there for years.",
            "oysters|raw": "Had raw oysters that same day. Love them.",
            "medical history|liver": "Have cirrhosis. From hepatitis C and drinking.",
            "liver disease|severity": "Told me it was bad. Stage something. Supposed to follow up.",
            "diabetes": "Diabetes too. Not well controlled.",
            "immunocompromised": "Liver problems. Diabetes. Not in great shape.",
            "delayed|why waited": "Thought it was just infected cut. Didn't know it could be this bad.",
            "medications": "Metformin, lactulose, some others for liver.",
            "allergies": "None.",
            "worried about|concerns": "Is this the flesh-eating thing? Am I going to lose my leg?",
        }
    };

    const ENV_CIGUATERA = {
        meta: { caseId: "env-ciguatera", patientName: "Patricia Davis", age: 42, diagnosis: "Ciguatera fish poisoning" },
        responses: {
            "hello|hi": "Hi doctor. Ate fish, now everything feels strange.",
            "what brings you in|chief complaint": "Ate fish last night. Now I have weird nerve symptoms. Hot feels cold. Cold feels hot.",
            "when|how long": "Started about 6 hours after eating. Last night.",
            "fish|what did you eat": "Grouper. Big reef fish. At a restaurant in the Keys.",
            "temperature reversal|hot cold": "Hot coffee feels cold. Ice water feels burning hot. Strangest thing.",
            "numbness|tingling": "Tingling around my mouth. In my hands and feet.",
            "weakness": "Legs feel weak. Wobbly.",
            "nausea|vomiting": "Threw up several times. Diarrhea too.",
            "abdominal pain|cramps": "Bad stomach cramps.",
            "diarrhea|gi symptoms": "Watery diarrhea. Since last night.",
            "itching|pruritis": "Intensely itchy. All over. Drove me crazy overnight.",
            "joint pain|myalgia": "Joints ache. Muscles hurt.",
            "heart|cardiovascular": "Heart was racing earlier. Blood pressure felt low.",
            "headache": "Bad headache.",
            "others sick|dining companions": "My husband ate the same fish. He's sick too. Same symptoms.",
            "previous|happened before": "Never. First time eating reef fish actually.",
            "travel|location": "Florida Keys. Vacation.",
            "medical history": "Healthy. Nothing.",
            "medications": "Birth control. That's it.",
            "allergies": "No allergies.",
            "worried about|concerns": "Will this go away? The hot-cold thing is so weird. How long does this last?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-dengue'] = ENV_DENGUE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-legionnaires'] = ENV_LEGIONNAIRES;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-organophosphate'] = ENV_ORGANOPHOSPHATE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-mesothelioma'] = ENV_MESOTHELIOMA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-vibrio'] = ENV_VIBRIO;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-ciguatera'] = ENV_CIGUATERA;
    
    console.log('ReasonDx Part 43 (Dengue, Legionnaires, Organophosphate, Mesothelioma, Vibrio, Ciguatera) loaded');

})();
