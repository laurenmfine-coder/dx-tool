/**
 * ReasonDx Part 22: Travel/Tropical Medicine and Infections
 * Cases: Malaria, Dengue, Traveler's Diarrhea, TB exposure, Lyme, Zika
 */

(function() {
    'use strict';

    const MALARIA_CASE = {
        meta: { caseId: "malaria-traveler", patientName: "David Park", age: 35, diagnosis: "Plasmodium falciparum malaria" },
        responses: {
            "hello|hi": "*shivering, looks ill* Hi... I just got back from Africa and I'm very sick.",
            "what brings you in|chief complaint": "High fever, chills, body aches. Returned from Nigeria 5 days ago. The fevers come in cycles.",
            "when|how long": "Started 3 days after I got home. So about 2 days of fevers now.",
            "symptoms": "High fever with terrible chills - shaking. Then sweating. Headache, body aches. Feel awful.",
            "fever pattern|cycles": "The fever spikes, I get rigors, then I sweat and it breaks. Then it comes back hours later.",
            "where|travel|nigeria": "Lagos, Nigeria. Business trip. Was there 2 weeks.",
            "malaria prophylaxis|prevention|medication": "I was supposed to take Malarone... I missed some doses. Forgot a few times.",
            "how many|missed doses": "Maybe 4 or 5 doses total. And I stopped when I got home instead of continuing.",
            "mosquito bites|exposure": "Got plenty of bites. Hard to avoid. Stayed in a hotel but still got bitten.",
            "repellent|nets": "Used repellent sometimes. No bed net. The hotel had AC so I thought I was safe.",
            "other travelers|sick contacts": "Traveled alone. Don't know if others got sick.",
            "nausea|vomiting|diarrhea": "Some nausea. Vomited once. No diarrhea.",
            "yellow eyes|jaundice|dark urine": "My urine is dark. Not sure about my eyes - do they look yellow?",
            "medical history": "Healthy. First time to Africa.",
            "medications": "None regular. The Malarone I didn't finish.",
            "sexually active": "Yes, with my wife.",
            "worried about|concerns": "Is this malaria? I should have taken the pills. How serious is this?",
        }
    };

    const DENGUE_CASE = {
        meta: { caseId: "dengue-traveler", patientName: "Sarah Chen", age: 28, diagnosis: "Dengue fever" },
        responses: {
            "hello|hi": "*exhausted, with visible rash* Hi. I came back from Thailand sick. Fever and this rash.",
            "what brings you in|chief complaint": "High fever for 4 days, severe body aches, headache, now this rash. Just returned from Southeast Asia.",
            "when|how long": "Fever started 4 days ago. Rash appeared yesterday.",
            "symptoms": "High fever, terrible headache especially behind my eyes, severe muscle and joint pain. Feel like I was hit by a truck.",
            "pain|aches|describe": "The body aches are the worst. My muscles and joints hurt so much. They call it 'breakbone fever' right? I understand why.",
            "rash|describe": "Red rash all over my trunk. Started yesterday as fever was breaking. Itchy.",
            "where|travel|thailand": "Thailand and Vietnam. 2 weeks. Bangkok, Chiang Mai, Hanoi, Ha Long Bay.",
            "mosquito bites|exposure": "Got bitten a lot. Day and evening especially. The mosquitoes were aggressive.",
            "prevention|repellent": "Used repellent but not consistently. Wore shorts and tank tops - it was hot.",
            "bleeding|bruising|gums|nosebleed": "No bleeding that I noticed. Maybe some minor bruising?",
            "previous dengue|had before": "Never had dengue before. First time.",
            "nausea|vomiting": "Very nauseous. Threw up a few times earlier in the week.",
            "medical history": "Healthy. Young, active.",
            "medications": "Just birth control.",
            "sexually active": "Yes, with my boyfriend.",
            "worried about|concerns": "Is this dengue? I read it can be dangerous. When will I feel better?",
        }
    };

    const TRAVELERS_DIARRHEA = {
        meta: { caseId: "travelers-diarrhea", patientName: "Michael Brown", age: 42, diagnosis: "Traveler's diarrhea" },
        responses: {
            "hello|hi": "Doc, I've been glued to the toilet since I got back from Mexico. This is terrible.",
            "what brings you in|chief complaint": "Severe diarrhea for 4 days. Started in Mexico, still going. Can't leave the house.",
            "when|how long": "Started 2 days before I left Mexico. Going on day 4 now.",
            "diarrhea|describe": "Watery, urgent. Going 10-15 times a day. Crampy. Some mucus. No blood.",
            "blood|bloody": "No blood that I've seen.",
            "cramping|pain": "Crampy pain before I have to go. Gets better after.",
            "fever|temperature": "Low fever first day or two. Seems to have gone.",
            "nausea|vomiting": "Nauseous the first day. Threw up once. Mostly just diarrhea now.",
            "where|travel|mexico": "Cancun. All-inclusive resort. Was there for a week.",
            "what did you eat|food|water": "Ate at the resort mostly. Had ice in drinks. Ate some street food one day. Fresh fruit at breakfast.",
            "others sick|travel companions": "My wife has it too but not as bad. She's managing at home.",
            "dehydrated|fluids|drinking": "Trying to drink but it goes right through. Feel dried out.",
            "tried|treatment|taken anything": "Imodium - helps a little but wears off. Pepto didn't do much.",
            "medical history": "Healthy. No GI problems usually.",
            "medications": "Nothing regular.",
            "sexually active": "Yes, with my wife.",
            "worried about|concerns": "When will this stop? Do I need antibiotics? I can't go to work like this.",
        }
    };

    const TB_EXPOSURE = {
        meta: { caseId: "tb-exposure", patientName: "Maria Santos", age: 32, diagnosis: "Latent TB infection (healthcare worker exposure)" },
        responses: {
            "hello|hi": "Hi. My TB test came back positive and I'm freaking out. I'm a nurse.",
            "what brings you in|chief complaint": "Annual TB test for work was positive. First time ever. They said I need to be evaluated.",
            "test|type": "PPD skin test. The bump was 15mm. Always been negative before.",
            "symptoms|sick|cough": "I feel fine. No cough, no fever, no night sweats, no weight loss. Nothing.",
            "work|exposure|where": "I'm an ER nurse. We had a patient with active TB a few months ago. Wasn't properly isolated at first.",
            "exposure details|that patient": "He was there for hours coughing before we knew. I was in the room several times. No N95 initially.",
            "how long ago|when exposed": "Maybe 3 months ago. They tested all of us who were exposed.",
            "others|coworkers": "A few other nurses also converted. We're all being evaluated.",
            "previous tb tests|history": "Always negative before. Tested every year for 8 years.",
            "bcg vaccine|vaccinated": "No BCG vaccine. Born in the US.",
            "travel|born elsewhere": "Born here. Haven't traveled anywhere with high TB.",
            "immunocompromised|hiv": "No. Healthy. Not immunocompromised. Tested for HIV - negative.",
            "chest xray|imaging": "They did a chest X-ray - they said it's normal.",
            "medical history": "Healthy. No medical problems.",
            "medications": "Just birth control.",
            "sexually active": "Yes, with my husband.",
            "worried about|concerns": "Am I contagious? Can I give this to my kids? What does treatment mean?",
        }
    };

    const LYME_DISEASE = {
        meta: { caseId: "lyme-disease", patientName: "Jennifer Walsh", age: 45, diagnosis: "Early Lyme disease" },
        responses: {
            "hello|hi": "Hi doctor. I found a tick on me last week and now I have this weird rash and I'm feeling sick.",
            "what brings you in|chief complaint": "Expanding circular rash on my thigh. Flu-like symptoms. Had a tick bite about 10 days ago.",
            "rash|describe": "Red circle that's getting bigger. It's clearing in the middle - looks like a target. About 4 inches across now.",
            "when|timeline": "Found the tick 10 days ago. Rash appeared maybe 5 days later. It's growing each day.",
            "where|location": "On my thigh. That's where the tick was attached.",
            "tick|describe tick|type": "Small tick. Was attached for a while before I found it. Maybe 24-48 hours? Was engorged.",
            "where exposed|where were you": "Hiking in Connecticut. Walked through tall grass.",
            "removed|how removed": "Pulled it out with tweezers. Saved it actually - want me to bring it in?",
            "other symptoms|systemic": "Tired. Achy all over. Headache. Low-grade fever. Feel like I'm getting the flu.",
            "joint pain|swelling": "My knee feels a little achy but no real swelling.",
            "neuro|facial weakness|numbness": "No. Nothing like that.",
            "medical history": "Healthy. Outdoor enthusiast. Get ticks sometimes but never a rash like this.",
            "medications": "Multivitamin. Nothing prescription.",
            "allergies": "Allergic to penicillin.",
            "sexually active": "Yes, with my husband.",
            "worried about|concerns": "Is this Lyme disease? Did I catch it early enough? What about chronic Lyme - I've heard horror stories.",
        }
    };

    const ZIKA_EXPOSURE = {
        meta: { caseId: "zika-exposure", patientName: "Jessica Martinez", age: 29, diagnosis: "Zika virus exposure concern" },
        responses: {
            "hello|hi": "Hi. I just found out I'm pregnant and I was in Brazil a few weeks ago. I'm worried about Zika.",
            "what brings you in|chief complaint": "Pregnant - just found out. Was in Brazil 3 weeks ago. Had a mild illness. Terrified about Zika and birth defects.",
            "pregnant|how far along": "Just found out. Maybe 6 weeks? My period was late and I tested positive.",
            "illness|sick|symptoms": "While in Brazil I had a mild fever, rash, joint pain for a couple days. Thought it was nothing.",
            "when|timeline": "The illness was about 2 weeks ago. Lasted 2-3 days then went away.",
            "rash|describe": "Flat pink rash. Mostly on my trunk. Itchy.",
            "where|brazil|location": "Rio de Janeiro. Beach vacation. Honeymoon actually.",
            "mosquito bites|exposure": "Got bitten. Used repellent but not always. It was romantic - didn't want to smell like bug spray.",
            "conjunctivitis|red eyes": "My eyes were a little red during that illness. Didn't think much of it.",
            "husband|partner|sick": "My husband had something similar. Fever and rash. He's fine now.",
            "planning pregnancy|timing": "We were trying to get pregnant. This trip was sort of a babymoon-honeymoon. Now I'm terrified.",
            "sex|since returning": "Yes, we've been intimate since returning. I know Zika can be sexually transmitted.",
            "medical history": "Healthy. First pregnancy.",
            "medications": "Prenatal vitamins now. Nothing before.",
            "worried about|concerns": "What does this mean for my baby? Microcephaly? Should I have an abortion? I don't know what to do.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['malaria-traveler'] = MALARIA_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['dengue-traveler'] = DENGUE_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['travelers-diarrhea'] = TRAVELERS_DIARRHEA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['tb-exposure'] = TB_EXPOSURE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['lyme-disease'] = LYME_DISEASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['zika-exposure'] = ZIKA_EXPOSURE;
    
    console.log('ReasonDx Part 22 (Malaria, Dengue, Travelers Diarrhea, TB, Lyme, Zika) loaded');

})();
