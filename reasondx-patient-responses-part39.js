/**
 * ReasonDx Part 39: Environmental and Specialty Cases
 * Cases: Env CO Poisoning, Env Lead Poisoning, Env NIHL, Env Silicosis, Urinary Symptoms, Urinary Dysuria
 */
(function() {
    'use strict';

    const ENV_CO_POISONING = {
        meta: { caseId: "env-co-poisoning", patientName: "Family of 4", age: 45, diagnosis: "Carbon monoxide poisoning" },
        responses: {
            "hello|hi": "*whole family appears ill, headaches* We all got sick at the same time. Something's wrong.",
            "what brings you in|chief complaint": "Whole family has headaches, nauseous, dizzy. Started this morning. All four of us.",
            "who is sick": "Me, my wife, both kids. Ages 10 and 14. All the same symptoms.",
            "when|how long": "Woke up this morning with it. All of us.",
            "symptoms|describe": "Terrible headaches. Nauseous. Confused feeling. Kids are drowsy.",
            "headache|describe": "Pounding. All over. Getting worse.",
            "nausea|vomiting": "Nauseous. Wife threw up. Kids feel sick.",
            "confusion|thinking": "Hard to think straight. Foggy.",
            "loss of consciousness|passed out": "No one passed out. Kids are sleepy though.",
            "cherry red|skin": "Actually my wife said I looked flushed.",
            "better|worse|where": "Felt a little better outside. Came right here.",
            "heat|heating system": "It's been cold. Furnace running constantly. Old house.",
            "furnace|when serviced": "Haven't serviced it in... years maybe.",
            "detector|co detector": "Don't have a carbon monoxide detector. Meant to get one.",
            "gas|smell gas": "No gas smell. Furnace is gas though.",
            "pets|animals": "Our dog was acting weird this morning. Wouldn't get up.",
            "recent changes|home": "Nothing different. Same house. Same routine.",
            "medical history": "Kids are healthy. Wife has migraines but says this is different.",
            "medications": "Wife takes something for migraines. Kids take nothing.",
            "allergies": "None of us.",
            "worried about|concerns": "Is it carbon monoxide? Is our house poisoning us? Are the kids going to be okay?",
        }
    };

    const ENV_LEAD_POISONING = {
        meta: { caseId: "env-lead-poisoning", patientName: "Marcus Johnson", age: 4, diagnosis: "Lead poisoning" },
        responses: {
            "hello|hi": "*mother with young child* Hi, they said his blood test showed high lead.",
            "what brings you in|chief complaint": "*mother* Routine checkup found high lead level. 38 they said. He's been irritable and not eating well.",
            "when|tested": "*mother* Blood test was last week. They called us right away.",
            "symptoms|how is he": "*mother* He's been cranky. Not eating. Stomach aches. Constipated.",
            "development|milestones": "*mother* He was doing well but lately seems behind. Speech isn't as good as other kids.",
            "behavior|changes": "*mother* More tantrums. Short attention. Used to be calmer.",
            "eating|appetite": "*mother* Picks at food. Says his tummy hurts.",
            "pica|eating strange things": "*mother* Actually... I've caught him eating paint chips. Old paint peeling off windowsills.",
            "house|when built": "*mother* Old house. 1920s. Bought it cheap. Knew it needed work.",
            "paint|lead paint": "*mother* Paint is peeling everywhere. We were going to fix it.",
            "water|pipes": "*mother* Old pipes too. Brown water sometimes.",
            "tested water": "*mother* No, never tested it.",
            "other children|siblings": "*mother* Baby sister. 18 months. Should we test her?",
            "occupation|parents work": "*mother* My husband works at a battery recycling plant. Comes home dirty sometimes.",
            "prenatal|pregnancy": "*mother* Normal pregnancy. No problems.",
            "school|daycare": "*mother* Home with me. Doesn't go to daycare.",
            "medical history": "*mother* Healthy until now.",
            "medications": "*mother* Just vitamins.",
            "allergies": "*mother* None.",
            "worried about|concerns": "*mother* Will this cause brain damage? Is it reversible? What do we do?",
        }
    };

    const ENV_NIHL = {
        meta: { caseId: "env-nihl", patientName: "Robert Thompson", age: 55, diagnosis: "Noise-induced hearing loss" },
        responses: {
            "hello|hi": "What? Sorry, can you speak up?",
            "what brings you in|chief complaint": "Can't hear well anymore. Getting worse. Wife is frustrated. I'm frustrated.",
            "when|how long": "Gradually over years. Much worse lately.",
            "describe|hearing loss": "Hard to hear conversations. Especially in crowds. Miss words.",
            "which ear|both": "Both ears. Maybe right is worse.",
            "ringing|tinnitus": "Constant ringing. High pitched. Drives me crazy. Especially at night.",
            "sudden|gradual": "Gradual. Years. Didn't notice at first.",
            "work|occupation": "Construction worker. 30 years. Heavy machinery.",
            "noise exposure|loud": "Jackhammers, saws, trucks. Loud all day.",
            "hearing protection|ear plugs": "Didn't really use them when I was young. Wasn't required. Stupid.",
            "recreational|hobbies": "Hunt. Guns are loud. Play drums in a band. More loud stuff.",
            "family history|hearing loss": "Dad lost his hearing but he was old. He worked in factory.",
            "dizziness|vertigo": "No spinning or dizziness.",
            "ear pain|infections": "No ear pain. No infections.",
            "drainage|discharge": "Nothing draining.",
            "previous testing|audiogram": "Work does hearing tests. They told me it was getting worse. I ignored it.",
            "hearing aids|tried": "Never tried them. Didn't want to admit I need them.",
            "medical history": "High blood pressure. That's it.",
            "medications": "Lisinopril.",
            "allergies": "None.",
            "worried about|concerns": "Is it going to get worse? Can anything help? Do I need hearing aids?",
        }
    };

    const ENV_SILICOSIS = {
        meta: { caseId: "env-silicosis", patientName: "Miguel Santos", age: 48, diagnosis: "Silicosis" },
        responses: {
            "hello|hi": "*coughs* Hello doctor. *coughs again*",
            "what brings you in|chief complaint": "Can't stop coughing. Short of breath. Getting worse over a year. Work with stone.",
            "when|how long": "Cough and breathing problems for about a year. Slowly worse.",
            "describe|cough": "Dry cough. Won't go away. Worse with exertion.",
            "sputum|productive": "Not bringing up much. Sometimes a little clear.",
            "shortness of breath": "Winded doing things I used to do easily. Stairs are hard now.",
            "at rest|activity": "Okay at rest. Moving around makes it worse.",
            "work|occupation": "Countertop installer. Cut and polish stone. Quartz, granite.",
            "how long|years": "15 years doing this work.",
            "dust|exposure": "Dusty work. Very dusty when cutting. Can't see sometimes.",
            "protection|mask": "Wear a mask sometimes. Not always. Gets hot. Hard to breathe in it.",
            "ventilation|controls": "Some shops have water suppression. Mine doesn't. Cost cutting.",
            "coworkers|others sick": "Some other guys have trouble too. We don't talk about it.",
            "chest pain": "Some tightness. Not sharp pain.",
            "weight loss": "Lost some weight. Not a lot.",
            "night sweats|fever": "No fever. No night sweats.",
            "tb|tuberculosis": "Tested for TB. Negative.",
            "chest xray|imaging": "Had a chest xray. They saw something. Sent me here.",
            "smoking": "Smoked for 10 years. Quit 8 years ago.",
            "medical history": "Nothing. Was healthy.",
            "medications": "Nothing.",
            "allergies": "None.",
            "worried about|concerns": "Do I have silicosis? I've heard of it. Is it treatable? Can I keep working?",
        }
    };

    const URINARY_SYMPTOMS = {
        meta: { caseId: "urinary-symptoms", patientName: "Frank Miller", age: 65, diagnosis: "BPH/urinary symptoms" },
        responses: {
            "hello|hi": "Hi doc. Having trouble with urination. Getting worse.",
            "what brings you in|chief complaint": "Hard to pee. Weak stream. Getting up at night all the time. Feel like I can't empty.",
            "when|how long": "Been getting worse over a year or two. Really bothersome now.",
            "describe|stream": "Weak stream. Dribbles. Takes forever to finish.",
            "starting|hesitancy": "Hard to get started. Stand there waiting.",
            "stopping|intermittent": "Stream stops and starts. Very frustrating.",
            "incomplete|emptying": "Never feel like I'm done. Go, walk away, have to go again.",
            "frequency|how often": "Every 2 hours during the day.",
            "nocturia|night": "Up 4-5 times a night. Exhausted.",
            "urgency|sudden urge": "Sometimes sudden urge. Barely make it.",
            "incontinence|leaking": "Some dribbling after I'm done. Embarrassing.",
            "blood|hematuria": "No blood.",
            "pain|burning": "No pain or burning.",
            "sexual function|erectile": "Actually having trouble with that too. Embarrassing to mention.",
            "previous|prostate": "PSA was checked last year. Said it was okay. Maybe 2.5?",
            "dre|rectal exam": "Had the finger exam. Said prostate was big but smooth.",
            "uti|infections": "No infections that I know of.",
            "medications|tried": "Haven't tried anything yet.",
            "medical history": "High blood pressure. High cholesterol.",
            "medications": "Lisinopril, atorvastatin.",
            "allergies": "None.",
            "sexually active": "Yes, wife. When it works.",
            "worried about|concerns": "Is this prostate cancer? My brother had it. Do I need surgery?",
        }
    };

    const URINARY_DYSURIA = {
        meta: { caseId: "urinary-symptoms-dysuria", patientName: "Amanda Collins", age: 26, diagnosis: "UTI/dysuria" },
        responses: {
            "hello|hi": "Hi. It burns when I pee. Really painful.",
            "what brings you in|chief complaint": "Burning with urination. Going all the time. Urgency. Started 2 days ago.",
            "when|how long": "2 days. Getting worse.",
            "describe|burning": "Burns terribly at the end of urination. Sharp pain.",
            "frequency|how often": "Every 30 minutes. Feel like I always have to go.",
            "urgency": "Sudden urgency. Can't wait. Almost had accidents.",
            "amount": "Barely anything comes out even though I feel like I have to go.",
            "blood|hematuria": "Maybe a little pink. Not sure.",
            "smell|odor": "Stronger smell than usual.",
            "cloudy": "Maybe a little cloudy.",
            "back pain|flank": "No back pain. Just low belly discomfort.",
            "fever|chills": "No fever. No chills.",
            "discharge|vaginal": "No unusual discharge.",
            "sexually active": "Yes. Boyfriend.",
            "new partner|recent": "Same partner. 2 years.",
            "after sex|related": "Actually started right after we had sex 2 days ago.",
            "uti before|previous": "I get these sometimes. This is my third this year.",
            "prevention|what do you do": "Try to pee after sex. Drink cranberry juice. Still get them.",
            "birth control|contraception": "Diaphragm with spermicide.",
            "spermicide": "Yeah, use spermicide with it.",
            "medical history": "Recurrent UTIs. That's it.",
            "medications": "Nothing regular.",
            "allergies": "Sulfa drugs - get a rash.",
            "worried about|concerns": "Why do I keep getting these? Is there something wrong with me?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-co-poisoning'] = ENV_CO_POISONING;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-lead-poisoning'] = ENV_LEAD_POISONING;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-nihl'] = ENV_NIHL;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-silicosis'] = ENV_SILICOSIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['urinary-symptoms'] = URINARY_SYMPTOMS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['urinary-symptoms-dysuria'] = URINARY_DYSURIA;
    
    console.log('ReasonDx Part 39 (CO, Lead, NIHL, Silicosis, Urinary, UTI) loaded');

})();
