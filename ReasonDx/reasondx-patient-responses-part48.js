/**
 * ReasonDx Part 48: More Environmental and Specialty Cases
 * Cases: env-anthrax, env-q-fever, env-rat-bite, env-secondhand-smoke, env-urban-asthma, env-hp
 */
(function() {
    'use strict';

    const ENV_ANTHRAX = {
        meta: { caseId: "env-anthrax", patientName: "James Peterson", age: 55, diagnosis: "Cutaneous anthrax" },
        responses: {
            "hello|hi": "*showing arm with black lesion* Doc, this sore won't heal. It's turning black.",
            "what brings you in|chief complaint": "Started as a bug bite. Now it's a big black sore. Work with animal hides.",
            "when|how long": "Started a week ago. Small bump. Now this.",
            "describe|lesion": "Black center. Painless actually. Swollen around it. Like a crater.",
            "pain|does it hurt": "Strangely doesn't hurt. Just looks terrible.",
            "swelling|edema": "Arm is swollen. Significantly.",
            "fever|systemic": "Some low fever. Body aches.",
            "lymph nodes": "Armpit is swollen on that side.",
            "work|occupation": "Work at a tannery. Handle imported animal hides.",
            "hides|where from": "Hides from various countries. Africa, Asia. Some from goats, cattle.",
            "exposure|how": "Handle raw hides. Cut myself sometimes. This started after I scraped my arm on a hide.",
            "protection|gloves": "Supposed to wear gloves. Not always.",
            "coworkers|others sick": "No one else sick that I know of.",
            "vaccinated|anthrax": "No anthrax vaccine.",
            "medical history": "Healthy otherwise.",
            "medications": "Nothing.",
            "allergies": "None.",
            "worried about|concerns": "Is this anthrax? I've heard of it. Is it deadly?",
        }
    };

    const ENV_Q_FEVER = {
        meta: { caseId: "env-q-fever", patientName: "Robert Thompson", age: 45, diagnosis: "Q fever" },
        responses: {
            "hello|hi": "*febrile, fatigued* Hi. Can't shake this fever. Work on a farm.",
            "what brings you in|chief complaint": "High fever for 2 weeks. Terrible headache. Work with livestock. Doctor can't figure it out.",
            "when|how long": "Started 2 weeks ago. Sudden high fever.",
            "fever|temperature": "Spiked to 104. Comes and goes but always there.",
            "headache|describe": "Severe headache. Behind my eyes. Won't go away.",
            "muscle aches|myalgia": "Muscles ache terribly.",
            "cough|respiratory": "Dry cough. Some chest discomfort.",
            "fatigue": "Exhausted. Can barely function.",
            "sweats|night": "Drenching night sweats.",
            "farm|livestock": "Dairy farmer. Cattle mostly. Some goats.",
            "birthing|calving": "Birthing season recently. Helped with several calvings.",
            "exposure|placenta": "Handle afterbirth. Cleaning up after deliveries.",
            "sick animals|any": "Some animals were sick. Couple of abortions in the herd.",
            "raw milk|consume": "Drink raw milk from our cows. Always have.",
            "family|others sick": "Wife has a headache. Worried about her.",
            "previous illness|similar": "Never been this sick before.",
            "antibiotics|tried": "Doctor gave amoxicillin. Didn't help.",
            "medical history": "Healthy. Farmer my whole life.",
            "medications": "Just the antibiotic that didn't work.",
            "allergies": "None.",
            "worried about|concerns": "What is this? Is it from the cattle? Can my wife catch it from me?",
        }
    };

    const ENV_RAT_BITE = {
        meta: { caseId: "env-rat-bite", patientName: "Michael Collins", age: 35, diagnosis: "Rat bite fever" },
        responses: {
            "hello|hi": "*showing healing bite mark on hand* Hi. Got bitten by a rat. Now I'm really sick.",
            "what brings you in|chief complaint": "Rat bit me at work 10 days ago. Seemed to heal. Now fever, rash, joint pain.",
            "when|how long|bite": "Bit 10 days ago. Fever started 5 days ago.",
            "bite|describe|healed": "Bite healed up fine. Thought I was okay. Then got sick.",
            "where|work": "Work at a pet store. Handle rodents.",
            "what bit you": "A rat. Was cleaning the cage. It got me.",
            "fever|temperature": "High fever. 103. Comes and goes.",
            "rash|describe": "Rash on my hands and feet. Red spots. Some raised.",
            "joint pain|describe": "Joints ache terribly. Knees, ankles, wrists. Swollen.",
            "which joints": "Multiple joints. Moves around.",
            "muscle aches": "Muscles hurt too.",
            "headache": "Bad headache.",
            "vomiting|nausea": "Threw up a few times.",
            "treatment|bite|what did": "Washed it with soap and water. Put antibiotic ointment.",
            "antibiotics|given": "No antibiotics at the time. Didn't think I needed them.",
            "tetanus|shot": "Tetanus is up to date.",
            "similar|happened before": "Been bitten before. Never got sick.",
            "medical history": "Healthy.",
            "medications": "Nothing.",
            "allergies": "Penicillin - get hives.",
            "worried about|concerns": "Is this from the rat bite? Seems late. Is it serious?",
        }
    };

    const ENV_SECONDHAND = {
        meta: { caseId: "env-secondhand-smoke", patientName: "Sarah Johnson", age: 45, diagnosis: "Effects of secondhand smoke" },
        responses: {
            "hello|hi": "Hi doctor. Having breathing problems. Never smoked but lived with smokers.",
            "what brings you in|chief complaint": "Chronic cough, wheezing, sinus problems. Never smoked. Husband smokes in the house.",
            "when|how long": "Problems for years. Getting worse.",
            "cough|describe": "Persistent cough. Worse in the morning.",
            "wheezing": "Wheeze sometimes. Especially around smoke.",
            "shortness of breath": "Getting more winded. Never used to.",
            "sinus|nasal": "Chronic sinus congestion. Infections frequently.",
            "eye|irritation": "Eyes burn and water. Especially at home.",
            "headaches": "Frequent headaches.",
            "exposure|who smokes": "Husband smokes pack a day. Inside. 20 years.",
            "growing up|childhood": "Both parents smoked too. House was always smoky.",
            "children|kids": "Our kids have asthma. Both of them.",
            "asked to stop|husband": "Asked him to quit or smoke outside. He won't. Says it's his house.",
            "work|elsewhere": "Work is smoke-free. Feel better there.",
            "tested|spirometry": "Never had breathing tests.",
            "previous illnesses|infections": "Get bronchitis a few times a year.",
            "medical history": "Sinus problems, frequent bronchitis.",
            "medications": "Flonase, occasional antibiotics for sinus infections.",
            "allergies": "Seasonal allergies.",
            "worried about|concerns": "Is secondhand smoke causing this? Am I at risk for lung cancer? I never smoked myself.",
        }
    };

    const ENV_URBAN_ASTHMA = {
        meta: { caseId: "env-urban-asthma", patientName: "Marcus Williams", age: 10, diagnosis: "Urban asthma" },
        responses: {
            "hello|hi": "*mother with child* Hi. His asthma is out of control lately.",
            "what brings you in|chief complaint": "*mother* His asthma keeps flaring. Lives on his inhaler. Emergency room twice this month.",
            "when|how long|history": "*mother* Had asthma since he was 4. Much worse this year.",
            "symptoms|describe": "*mother* Wheezing, coughing at night, short of breath with activity.",
            "frequency|attacks": "*mother* Daily symptoms now. Rescue inhaler 4-5 times a day.",
            "triggers|what makes it worse": "*mother* Everything. Exercise, cold air, when he laughs. Just existing.",
            "controller|daily medication": "*mother* Flovent twice daily. Singulair at night.",
            "compliance|taking them": "*mother* Yes, every day. I make sure.",
            "still flaring|despite meds": "*mother* Still having daily symptoms. Inhalers aren't enough.",
            "home|housing": "*mother* We live in an older apartment building. Inner city.",
            "describe|conditions": "*mother* Old building. Some mold in the bathroom. Cockroaches we can't get rid of.",
            "cockroaches|pests": "*mother* Yes, roaches. Landlord sprays but they come back.",
            "mold|moisture": "*mother* Bathroom is always damp. Black stuff in corners.",
            "traffic|pollution": "*mother* Right near the highway. Can hear trucks all night.",
            "air quality|windows": "*mother* Keep windows closed because of the exhaust. Still smells.",
            "pets": "*mother* No pets.",
            "smoke|smokers": "*mother* I don't smoke. Neighbors do. Comes through the walls.",
            "school|missed": "*mother* Missed 15 days this year already. Hard to keep up.",
            "allergies|tested": "*mother* Tested positive for dust mites, roaches, mold. Everything in our apartment.",
            "moved|can you move": "*mother* Can't afford to move. Stuck there.",
            "worried about|concerns": "*mother* Is it our apartment making him sick? What can we do?",
        }
    };

    const ENV_HP = {
        meta: { caseId: "env-hp", patientName: "Thomas Anderson", age: 52, diagnosis: "Hypersensitivity pneumonitis" },
        responses: {
            "hello|hi": "*coughing* Hi. Cough and breathing problems. They said might be from my birds.",
            "what brings you in|chief complaint": "Chronic cough, shortness of breath, fevers when I'm home. I keep birds.",
            "when|how long": "Started maybe a year ago. Getting worse.",
            "cough|describe": "Dry cough. Persistent. Worse at home.",
            "shortness of breath": "Winded doing things I used to do easily.",
            "fever|pattern": "Get low fevers. Interestingly, feel better when away from home.",
            "away|vacation|pattern": "Was on vacation for 2 weeks. Felt much better. Came back, got worse again.",
            "home|what changed": "Nothing changed. Same house, same birds.",
            "birds|what kind": "Pigeons. Keep racing pigeons. About 30 of them.",
            "how long|duration": "Kept pigeons for 15 years. Never had problems before.",
            "exposure|describe": "In the loft every day. Cleaning, feeding, handling them.",
            "dust|droppings": "Lots of dust. Dried droppings. Feathers.",
            "protection|mask": "Don't wear a mask. Maybe should start.",
            "other hobbies|exposures": "Just the birds. That's my hobby.",
            "weight loss": "Lost some weight.",
            "fatigue": "Tired all the time.",
            "previous xray|imaging": "Chest xray showed some infiltrates. Sent for more tests.",
            "smoking": "Never smoked.",
            "medical history": "Nothing. Healthy until this.",
            "medications": "Nothing.",
            "allergies": "None.",
            "worried about|concerns": "Is it my birds? Do I have to give them up? They're my life.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-anthrax'] = ENV_ANTHRAX;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-q-fever'] = ENV_Q_FEVER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-rat-bite'] = ENV_RAT_BITE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-secondhand-smoke'] = ENV_SECONDHAND;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-urban-asthma'] = ENV_URBAN_ASTHMA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-hp'] = ENV_HP;
    
    console.log('ReasonDx Part 48 (Anthrax, Q Fever, Rat Bite, Secondhand Smoke, Urban Asthma, HP) loaded');

})();
