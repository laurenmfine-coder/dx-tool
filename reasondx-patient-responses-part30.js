/**
 * ReasonDx Part 30: Core Clinical Cases Continued
 * Cases: DKA, Delirium, Meningitis, Appendicitis, Cholecystitis, Hyperthyroidism
 */
(function() {
    'use strict';

    // ==========================================
    // CASE: DKA - Diabetic Ketoacidosis
    // ==========================================
    const DKA_CASE = {
        meta: { caseId: "dka", patientName: "Marcus Thompson", age: 28, diagnosis: "Diabetic ketoacidosis" },
        responses: {
            "hello|hi": "*appears ill, breathing rapidly* Hey... feel terrible...",
            "what brings you in|chief complaint": "I've been throwing up all day. Can't keep anything down. I have type 1 diabetes and my sugar is really high.",
            "when|how long": "Started yesterday. Nausea first, then vomiting. Getting worse. Checked my sugar - it was over 500.",
            "blood sugar|glucose|what was it": "My meter just said 'HIGH' - that means over 500. I gave insulin but I kept throwing up.",
            "vomiting|how many times": "Maybe 8-10 times since yesterday. Can't keep water down even.",
            "abdominal pain|stomach": "My stomach hurts. Kind of all over. Crampy.",
            "thirst|drinking": "So thirsty. Drinking constantly but throwing it all up.",
            "urinating|peeing": "Peeing all the time. Every 30 minutes. Even though I'm vomiting.",
            "breathing|shortness of breath": "Breathing feels weird. Deep breaths. Fast. Can't catch my breath.",
            "weakness|tired": "So weak. Could barely walk in here.",
            "confusion|thinking": "My thoughts are... fuzzy. Hard to concentrate.",
            "sick|infection|ill recently": "I've had a cold. Cough and runny nose for a few days.",
            "insulin|taking insulin": "I ran out 2 days ago. Pharmacy wouldn't refill without prior auth. Insurance problem.",
            "how long without|missed doses": "Two days without my long-acting insulin. I had some rapid-acting left but not enough.",
            "ketones|checked ketones": "I don't have ketone strips. Should I?",
            "type 1|how long diabetic": "Type 1 since I was 12. So 16 years.",
            "dka before|happened before": "Once in college when I got the flu. Same thing. Had to be hospitalized.",
            "medical history": "Type 1 diabetes. That's it.",
            "medications": "Insulin - Lantus and Humalog. Nothing else.",
            "allergies": "No allergies.",
            "alcohol|drugs": "I drink socially. No drugs. Haven't had anything to drink this week.",
            "smell|breath|fruity": "My girlfriend said my breath smells weird. Fruity or something.",
            "sexually active": "Yes, with my girlfriend.",
            "worried about|concerns": "Am I going to be okay? This feels worse than last time. I'm scared.",
            "anything else": "Please help me. I know I messed up by running out of insulin.",
        }
    };

    // ==========================================
    // CASE: Delirium - Acute
    // ==========================================
    const DELIRIUM_CASE = {
        meta: { caseId: "delirium", patientName: "Harold Foster", age: 82, diagnosis: "Delirium (multifactorial)" },
        responses: {
            "hello|hi": "*agitated, pulling at IV, looking around confused* Who are you? Where's my wife? I need to get out of here!",
            "what brings you in|chief complaint": "*daughter* He's not himself. Was fine yesterday. Today he doesn't know where he is, thinks my mom is still alive - she died 5 years ago.",
            "when|how long": "*daughter* Started this morning. He was confused when he woke up. Got worse through the day.",
            "confusion|describe": "*daughter* He thinks he's at work - he retired 20 years ago. Doesn't recognize his own house. Called me by my mother's name.",
            "baseline|usual|normally": "*daughter* He's sharp as a tack normally. Does crossword puzzles. Reads the paper. This is NOT him.",
            "fluctuating|comes and goes": "*daughter* He has moments where he seems almost normal, then he's confused again. Comes and goes.",
            "sleep|night|awake": "*daughter* He was up all night. Restless. Talking to people who aren't there.",
            "hallucinations|seeing things": "*daughter* Yes. He said he saw his brother in the room. His brother lives in Florida.",
            "agitation|behavior": "*patient pulls at gown* I need to leave! The meeting is at 3! *daughter* He keeps trying to get up and leave.",
            "fever|temperature": "*daughter* He felt warm. I didn't take his temperature.",
            "cough|cold|sick": "*daughter* He's had a cough for a few days. Thought it was just a cold.",
            "urinary|burning|uti": "*daughter* He's been going to the bathroom a lot. Complained it burned yesterday.",
            "fall|head injury|trauma": "*daughter* No falls that I know of.",
            "new medications|changes": "*daughter* His doctor started him on Benadryl for sleep about a week ago. And he takes oxybutynin for his bladder.",
            "pain|discomfort": "*patient grimaces* My back hurts... where am I?",
            "constipation|bowel movement": "*daughter* He hasn't gone in 4 days. He gets backed up sometimes.",
            "eating|drinking": "*daughter* Not much appetite. Maybe dehydrated - he doesn't drink enough.",
            "medical history": "*daughter* Enlarged prostate, high blood pressure, mild dementia - but nothing like this. Heart problems.",
            "medications": "*daughter* A lot - lisinopril, metoprolol, tamsulosin, oxybutynin, Benadryl for sleep, aspirin.",
            "alcohol": "*daughter* He has a glass of wine with dinner. Every night for 50 years.",
            "dementia|memory|baseline cognition": "*daughter* He has some memory issues. Forgets where he put things. But he knows who we are. Always has. Until today.",
            "*patient*|mr foster": "*patient looks around wildly* The planes are coming. We need to take cover. *WWII veteran*",
            "worried about|concerns": "*daughter* Is this a stroke? Did he have a stroke? Please tell me this isn't permanent.",
        }
    };

    // ==========================================
    // CASE: Meningitis
    // ==========================================
    const MENINGITIS_CASE = {
        meta: { caseId: "meningitis", patientName: "Emily Parker", age: 19, diagnosis: "Bacterial meningitis" },
        responses: {
            "hello|hi": "*lying very still, lights dimmed, clearly miserable* ...hi... please... the light...",
            "what brings you in|chief complaint": "Worst headache of my life. High fever. Can't move my neck. The light is killing me.",
            "when|how long": "Started yesterday. Thought it was the flu. Got way worse overnight.",
            "headache|describe": "Splitting headache. Everywhere. Throbbing. Never had anything like it. 10 out of 10.",
            "neck|stiff neck": "My neck is so stiff. It hurts to bend it forward. *tries and winces* See?",
            "fever|temperature": "I'm burning up. Was 103 at home. Chills and sweats.",
            "light|photophobia": "The light is torture. Please turn it off. Even with my eyes closed it hurts.",
            "nausea|vomiting": "Threw up twice. The headache makes me nauseous.",
            "rash|spots": "I noticed some spots on my legs this morning. Little red dots.",
            "describe rash|show me": "*shows legs* These little purple-red spots. They don't go away when I press them.",
            "confusion|thinking clearly": "I feel foggy. Hard to think. What day is it?",
            "sleepy|drowsy": "So tired but can't sleep because of the pain.",
            "college|school|dorm": "I'm a freshman at State. Live in the dorms.",
            "sick contacts|anyone else sick": "My roommate had a cold last week. Some people on my floor have been sick.",
            "vaccines|meningitis vaccine": "I think I got one in high school? I'm not sure which one.",
            "medical history": "Nothing. Healthy. Never been this sick.",
            "medications": "Just birth control.",
            "allergies": "No allergies.",
            "alcohol|drugs|party": "I had some drinks at a party 3 days ago. Nothing since.",
            "sexually active": "Yes, with my boyfriend.",
            "travel|spring break": "No recent travel.",
            "worst headache ever|ever had a headache this bad": "Never. Not even close. This is different from any headache I've ever had.",
            "seizure|convulsion": "No seizures.",
            "weakness|arm leg": "No weakness. Just feel terrible all over.",
            "worried about|concerns": "What's wrong with me? Is this serious? I've never felt this sick. My mom is really scared.",
            "anything else": "Please help me. Make it stop.",
        }
    };

    // ==========================================
    // CASE: Appendicitis
    // ==========================================
    const APPENDICITIS_CASE = {
        meta: { caseId: "appendicitis", patientName: "Jason Miller", age: 24, diagnosis: "Acute appendicitis" },
        responses: {
            "hello|hi": "*lying very still, knees drawn up* Hi... hurts to move.",
            "what brings you in|chief complaint": "Stomach pain that started around my belly button and moved to my lower right side. Getting worse. Can't stand up straight.",
            "when|how long": "Started yesterday afternoon. Dull ache at first, now it's really bad.",
            "where|location|point": "Started here *points to periumbilical area* but now it's here *points to RLQ*. Right lower side.",
            "moved|migration": "Yeah, it definitely moved. Belly button area first, then shifted down and to the right overnight.",
            "describe|pain quality": "Sharp now. Constant. Gets worse if I move or cough. Worse when the car hit bumps on the way here.",
            "severity|scale": "Maybe 7-8 out of 10. Bad enough I can't work.",
            "worse|better|position": "Worse with any movement. Better if I lie perfectly still with my knees up. Hurts to walk.",
            "cough|sneeze|jar": "Hurts terribly if I cough. Even laughing hurts. My roommate made a joke and I almost cried.",
            "nausea|vomiting": "Very nauseous. Threw up once. No appetite at all.",
            "fever": "Felt feverish. Low grade - maybe 100.5.",
            "diarrhea|constipation|bowel": "No diarrhea. Maybe a little constipated actually.",
            "eating|last meal": "Can't eat. Had a little soup yesterday, threw it up. Nothing since.",
            "urinary|peeing|burning": "Peeing is normal. No burning.",
            "similar|happened before": "Never had this before. Occasional stomach aches but nothing like this.",
            "food poisoning|bad food": "Haven't eaten anything unusual. My roommate ate the same things and he's fine.",
            "recent illness|sick": "No, been healthy.",
            "medical history": "Nothing. Healthy guy.",
            "surgeries": "Never had surgery.",
            "medications": "Nothing. Took some Tylenol, didn't help much.",
            "allergies": "No allergies.",
            "alcohol|drugs": "Drink on weekends. Haven't had anything since this started.",
            "sexually active": "Yes, girlfriend.",
            "worried about|concerns": "Is this my appendix? Do I need surgery? I've never had surgery before.",
            "anything else": "The pain is really bad. Can I get something for it?",
        }
    };

    // ==========================================
    // CASE: Cholecystitis
    // ==========================================
    const CHOLECYSTITIS_CASE = {
        meta: { caseId: "cholecystitis", patientName: "Carmen Rodriguez", age: 42, diagnosis: "Acute cholecystitis" },
        responses: {
            "hello|hi": "*appears uncomfortable, hand on right side* Hi... this pain won't go away.",
            "what brings you in|chief complaint": "Pain in my upper right belly that's been there for 2 days. Usually my attacks go away but this one is different. Longer, worse.",
            "when|how long": "Started 2 days ago after dinner. Usually these pains go away in a few hours. This one hasn't.",
            "attacks|happened before": "I get these pains sometimes after fatty meals. They usually go away. This is different - it's not going away.",
            "previous|pattern|what usually happens": "Usually it's after greasy food, lasts a few hours, then I'm fine. This has been constant for 2 days.",
            "where|location": "Right here, under my ribs on the right. *points to RUQ* Goes around to my back.",
            "radiating|back|shoulder": "Yes, goes to my back. Sometimes I feel it in my right shoulder. Weird.",
            "describe|quality": "Constant ache that gets sharp if I breathe deep. Like something is stuck.",
            "severity": "7 out of 10. Can't get comfortable. Can't sleep because of it.",
            "fever": "I've had a fever. 101 last night.",
            "nausea|vomiting": "Very nauseous. Threw up yesterday. Nothing today because I haven't eaten.",
            "eating|food|trigger": "This started after I ate fried chicken. But I've been scared to eat anything since.",
            "fatty food|greasy": "Fatty foods definitely set this off usually. Greasy food, cheese, that kind of thing.",
            "jaundice|yellow|eyes skin": "My husband said my eyes look a little yellow. Do they?",
            "urine|dark|stool|pale": "My pee has been darker. Haven't really looked at my... bowel movements.",
            "weight|gained|lost": "I've put on about 40 pounds the last few years. I know.",
            "children|pregnancies": "Four kids. All vaginal deliveries.",
            "medical history": "Just high cholesterol. They mentioned gallstones on an ultrasound a few years ago.",
            "gallstones|told before": "Yes, they said I had gallstones but they weren't causing problems so they left them alone.",
            "medications": "Just atorvastatin for cholesterol.",
            "allergies": "No allergies.",
            "alcohol": "Wine on weekends. Social drinker.",
            "sexually active": "Yes, with my husband.",
            "worried about|concerns": "Do I need my gallbladder out? My mom had hers removed. I'm scared of surgery.",
            "anything else": "I should have come in sooner. I kept hoping it would pass like usual.",
        }
    };

    // ==========================================
    // CASE: Hyperthyroidism
    // ==========================================
    const HYPERTHYROID_CASE = {
        meta: { caseId: "hyperthyroidism", patientName: "Angela Chen", age: 34, diagnosis: "Graves' disease/Hyperthyroidism" },
        responses: {
            "hello|hi": "*appears anxious, fidgeting, speaking quickly* Hi. I feel like I'm going crazy. Something is wrong.",
            "what brings you in|chief complaint": "Heart racing all the time, lost weight without trying, hands shaking, can't tolerate heat, feel anxious and wired constantly. My husband says I've been acting different.",
            "when|how long": "Months now. Maybe 3-4 months? Getting progressively worse.",
            "heart|palpitations|racing": "My heart races all the time. Even sitting still. I feel it pounding. Checked it - was 110 just sitting.",
            "weight|lost weight": "Lost 15 pounds in 2 months without trying. I'm eating MORE if anything. Like constantly hungry.",
            "appetite|eating": "Hungry all the time. Eating more than ever. And still losing weight.",
            "tremor|hands shaking": "Look. *holds out hands - visible fine tremor* I can't hold a coffee cup without spilling. My handwriting is terrible now.",
            "heat|intolerance|sweating": "I'm always hot. My husband keeps the house freezing and I'm still sweating. Everyone else is wearing sweaters.",
            "sweating": "Drenched. All the time. Especially at night.",
            "anxiety|nervous|jittery": "I feel like I've had 10 cups of coffee. Wired. Anxious. Can't relax. Can't sit still.",
            "sleep|insomnia": "Can't sleep. Lie awake for hours. Mind racing. And I'm still not tired during the day.",
            "mood|irritable|emotional": "I've been... snappy. Short-tempered. My husband says I'm a different person. I cried during a commercial yesterday.",
            "eyes|vision|bulging": "My eyes feel gritty. Someone said they look bigger. More prominent. Do they?",
            "neck|throat|swelling|goiter": "I've noticed my neck looks fuller. My necklaces feel tighter.",
            "bowels|diarrhea": "Going to the bathroom more. Loose stools a few times a day.",
            "periods|menstrual": "My periods are lighter and irregular now. Used to be like clockwork.",
            "muscle|weakness": "My legs feel weak. Hard to climb stairs. Not like me - I do yoga.",
            "family history|thyroid": "My mother has thyroid problems. Takes a pill for it. Hypothyroid I think.",
            "medical history": "Nothing. Healthy until this started.",
            "medications": "Just birth control.",
            "allergies": "No allergies.",
            "smoking": "No.",
            "caffeine": "I cut way back because I thought that was the problem. Down to one coffee. Still feel this way.",
            "sexually active": "Yes, with my husband. We're trying to get pregnant actually. Having trouble.",
            "pregnant|pregnancy": "No, we've been trying for 6 months. Nothing. I wonder if this is related.",
            "worried about|concerns": "What is wrong with me? I feel like I'm losing my mind. My husband is worried. I'm worried.",
            "anything else": "I need to know what's happening to me. I can't live like this.",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['dka'] = DKA_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['delirium'] = DELIRIUM_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['meningitis'] = MENINGITIS_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['appendicitis'] = APPENDICITIS_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['cholecystitis'] = CHOLECYSTITIS_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['hyperthyroidism'] = HYPERTHYROID_CASE;
    
    console.log('ReasonDx Part 30 (DKA, Delirium, Meningitis, Appendicitis, Cholecystitis, Hyperthyroidism) loaded');

})();
