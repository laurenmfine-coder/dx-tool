/**
 * ReasonDx Part 37: GI and Common Cases
 * Cases: Diarrhea, UGIB, LGIB, Knee Pain OA, Shoulder Pain RC, New Onset Diabetes
 */
(function() {
    'use strict';

    const DIARRHEA_CASE = {
        meta: { caseId: "diarrhea", patientName: "Michael Chen", age: 32, diagnosis: "Acute infectious diarrhea" },
        responses: {
            "hello|hi": "Hi doc. I've been running to the bathroom all day.",
            "what brings you in|chief complaint": "Diarrhea for 3 days. Watery, lots of cramping. Can't keep anything in.",
            "when|how long": "Started 3 days ago. Gradually getting worse.",
            "frequency|how often": "Going 8-10 times a day. Sometimes more.",
            "describe|consistency": "Watery. No form. Like liquid.",
            "blood|bloody": "No blood that I've seen.",
            "mucus": "Maybe a little mucus. Not sure.",
            "cramping|pain": "Bad cramping before each episode. Relieved after I go.",
            "nausea|vomiting": "Nauseous. Threw up once yesterday.",
            "fever": "Low fever. 100.4 yesterday.",
            "eating|food|trigger": "Ate at a buffet 4 days ago. Seafood. Thinking that might be it.",
            "anyone else sick": "My wife ate the same thing. She's fine though.",
            "travel|recent": "No travel.",
            "dehydration|thirst": "Very thirsty. Peeing less. Dizzy when I stand.",
            "antibiotics|recent": "No antibiotics recently.",
            "medical history": "Healthy. No GI problems.",
            "medications": "Nothing.",
            "allergies": "No allergies.",
            "sexually active": "Yes, wife only.",
            "worried about|concerns": "Am I dehydrated? Is this food poisoning?",
        }
    };

    const DIARRHEA_ACUTE = {
        meta: { caseId: "diarrhea-acute", patientName: "Sandra Williams", age: 45, diagnosis: "Acute diarrhea" },
        responses: {
            "hello|hi": "Hi. Terrible diarrhea. Just started.",
            "what brings you in|chief complaint": "Sudden diarrhea and vomiting since last night. Stomach is in knots.",
            "when|how long": "Started about 12 hours ago.",
            "frequency": "Diarrhea every hour. Vomited 5 times.",
            "describe": "Watery diarrhea. Explosive.",
            "blood": "No blood.",
            "fever": "Felt hot. Maybe 101.",
            "exposure|food|sick contacts": "My whole office got sick. Potluck yesterday.",
            "dehydration": "Can't keep fluids down. Dry mouth.",
            "medical history": "Healthy.",
            "medications": "Birth control.",
            "allergies": "None.",
            "worried about|concerns": "Need fluids. Can't keep anything down.",
        }
    };

    const UGIB_CASE = {
        meta: { caseId: "ugib", patientName: "Thomas Brown", age: 58, diagnosis: "Upper GI bleed" },
        responses: {
            "hello|hi": "*pale, anxious* Doc, I've been throwing up blood.",
            "what brings you in|chief complaint": "Vomited blood this morning. Twice. Dark stuff. My stool is black too.",
            "when|how long": "Vomiting started this morning. Black stool for maybe 2 days.",
            "describe vomit|blood": "Dark, like coffee grounds. Some red streaks.",
            "how much|volume": "Maybe a cup each time. Felt like a lot.",
            "stool|black|melena": "Black and tarry. Sticky. Terrible smell.",
            "abdominal pain": "Upper belly has been hurting for weeks. Burning.",
            "lightheaded|dizzy": "Very lightheaded. Almost passed out.",
            "weakness": "Weak. Had to lie down.",
            "nsaids|aspirin": "Take ibuprofen daily for back pain. And aspirin for my heart.",
            "how much|how often": "Ibuprofen 800mg two or three times daily. Years.",
            "alcohol": "I drink. Beer mostly. Maybe 6 pack a day.",
            "ulcers|history": "Was told I might have an ulcer years ago. Never followed up.",
            "liver|cirrhosis": "Doctor mentioned fatty liver.",
            "h pylori|tested": "Never tested.",
            "blood thinners": "Just the aspirin.",
            "medical history": "Back pain, fatty liver, high blood pressure.",
            "medications": "Ibuprofen, aspirin, lisinopril.",
            "allergies": "None.",
            "smoking": "Pack a day.",
            "worried about|concerns": "Am I bleeding internally? Is this serious?",
        }
    };

    const LGIB_CASE = {
        meta: { caseId: "lgib-hematochezia", patientName: "Patricia Davis", age: 65, diagnosis: "Lower GI bleed" },
        responses: {
            "hello|hi": "Hello doctor. There's blood when I go to the bathroom.",
            "what brings you in|chief complaint": "Bright red blood in my stool. Started 2 days ago. Getting worse.",
            "when|how long": "2 days ago. More blood each time.",
            "describe|blood": "Bright red. On the stool. In the toilet. On the paper.",
            "how much": "Enough to turn the water red. More than before.",
            "mixed or separate": "Mostly coating the stool. Some mixed in.",
            "pain|abdominal": "Some cramping in my lower belly.",
            "bowel habits|change": "Been more constipated lately. Straining.",
            "weight loss": "Lost maybe 10 pounds without trying.",
            "appetite": "Not as hungry. Feel full fast.",
            "hemorrhoids|history": "Had hemorrhoids before. This seems different. More blood.",
            "colonoscopy|when": "Never had one. I know I'm overdue.",
            "family history|colon cancer": "My brother had colon cancer at 60.",
            "fatigue|tired": "More tired lately. Thought it was my age.",
            "dizziness": "A little lightheaded.",
            "blood thinners": "Take Eliquis for afib.",
            "medical history": "Atrial fibrillation, high blood pressure, constipation.",
            "medications": "Eliquis, lisinopril, metoprolol.",
            "allergies": "Penicillin.",
            "sexually active": "Widowed.",
            "worried about|concerns": "Is this cancer? My brother had it. I should have gotten checked.",
        }
    };

    const KNEE_PAIN_OA = {
        meta: { caseId: "knee-pain-oa", patientName: "Robert Miller", age: 62, diagnosis: "Knee osteoarthritis" },
        responses: {
            "hello|hi": "Hi doctor. My knees are killing me.",
            "what brings you in|chief complaint": "Both knees hurt. Getting worse over the years. Hard to walk now.",
            "when|how long": "Years really. Much worse this past year.",
            "which knee|both": "Both. Right is worse.",
            "describe|pain": "Aching. Deep pain. Stiff in the morning.",
            "location|where exactly": "Inside of my knees. Sometimes all around.",
            "stiffness|morning": "Stiff in the morning. Gets better after I move around. Maybe 20-30 minutes.",
            "worse|triggers": "Worse with walking. Stairs are terrible. Going down is worse than up.",
            "better": "Better with rest. Ice helps. Ibuprofen takes edge off.",
            "swelling": "Some swelling. Especially at end of day.",
            "grinding|crepitus": "Grinding, popping when I bend them.",
            "locking|giving way": "Sometimes feels like it might give out.",
            "injury|trauma": "No injury. Gradual over time.",
            "activity|exercise": "Can't exercise anymore. Used to jog.",
            "weight": "Overweight. I know it makes it worse. Hard to exercise with bad knees.",
            "work|occupation": "Retired now. Was a carpenter. On my knees a lot.",
            "xray|imaging": "Had xrays few years ago. Said arthritis.",
            "tried|treatments": "Ibuprofen, glucosamine. Had cortisone shots - helped for a while.",
            "medical history": "High blood pressure, high cholesterol.",
            "medications": "Lisinopril, atorvastatin, ibuprofen as needed.",
            "allergies": "None.",
            "sexually active": "Yes, wife.",
            "worried about|concerns": "Do I need knee replacement? Getting hard to function.",
        }
    };

    const SHOULDER_PAIN_RC = {
        meta: { caseId: "shoulder-pain-rc", patientName: "Jennifer Adams", age: 52, diagnosis: "Rotator cuff injury" },
        responses: {
            "hello|hi": "Hi. My shoulder has been hurting for months.",
            "what brings you in|chief complaint": "Right shoulder pain. Can't lift my arm. Worse at night. Been 3 months.",
            "when|how long": "About 3 months. Started after I was painting my ceiling.",
            "what happened|mechanism": "Lots of overhead work painting. Felt something tweak. Got worse since.",
            "which shoulder": "Right. My dominant arm.",
            "describe|pain": "Aching. Deep in the shoulder. Sharp with certain movements.",
            "location|where": "Top and side of shoulder. Radiates down my arm sometimes.",
            "worse|triggers": "Reaching overhead. Reaching behind my back. Lying on it at night.",
            "night pain|sleep": "Terrible at night. Wakes me up. Can't lie on that side.",
            "weakness": "Arm feels weak. Hard to lift things.",
            "range of motion|movement": "Can't raise arm all the way up. Gets stuck.",
            "better": "Better with arm at my side. Ice helps. Ibuprofen helps some.",
            "neck|cervical": "Neck is fine. No neck pain.",
            "numbness|tingling": "No numbness or tingling.",
            "history|previous shoulder": "Never had shoulder problems before.",
            "tried|treatment": "Ibuprofen. Rest. Still hurts.",
            "xray|mri": "Haven't had imaging yet.",
            "work|occupation": "Administrative work. Computer all day.",
            "exercise|sports": "Used to play tennis. Can't now.",
            "medical history": "Healthy otherwise.",
            "medications": "Nothing regular. Ibuprofen for this.",
            "allergies": "None.",
            "sexually active": "Yes, husband.",
            "worried about|concerns": "Did I tear something? Will I need surgery?",
        }
    };

    const NEW_ONSET_DIABETES = {
        meta: { caseId: "new-onset-diabetes", patientName: "David Thompson", age: 48, diagnosis: "New onset type 2 diabetes" },
        responses: {
            "hello|hi": "Hi doctor. I've been really thirsty and peeing a lot.",
            "what brings you in|chief complaint": "Constant thirst, urinating all the time, lost weight. Blurry vision. My doctor found high sugar.",
            "when|how long": "Few months. Getting worse.",
            "thirst|drinking": "Can't quench my thirst. Drinking constantly.",
            "urination|how often": "Peeing every hour. Up 4-5 times at night.",
            "weight|lost": "Lost 15 pounds in 2 months. Wasn't trying.",
            "appetite|eating": "Actually eating more. Still losing weight.",
            "vision|blurry": "Blurry vision. Thought I needed new glasses.",
            "fatigue|tired": "Exhausted. No energy.",
            "numbness|tingling feet": "Feet tingle sometimes. Thought it was nothing.",
            "wounds|healing": "A cut on my foot took forever to heal.",
            "infections|yeast": "Had some infections. Uncomfortable.",
            "blood sugar|what was it": "Doctor said it was 320. A1c was 10.5.",
            "family history|diabetes": "Mom and dad both have diabetes. Type 2.",
            "diet|eating habits": "Not great. Fast food. Soda. Don't cook much.",
            "exercise": "Don't exercise. Desk job.",
            "weight|current": "Overweight. 240 pounds. 5'10.",
            "blood pressure": "High. They put me on medication.",
            "cholesterol": "Also high. On medication for that too.",
            "medical history": "High blood pressure, high cholesterol. Now this.",
            "medications": "Lisinopril, atorvastatin.",
            "allergies": "None.",
            "alcohol": "Beer on weekends.",
            "smoking": "No.",
            "sexually active": "Yes, wife. Actually... having some trouble with that lately.",
            "worried about|concerns": "Is this forever? My parents are on insulin. I don't want that.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['diarrhea'] = DIARRHEA_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['diarrhea-acute'] = DIARRHEA_ACUTE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['ugib'] = UGIB_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['lgib-hematochezia'] = LGIB_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['knee-pain-oa'] = KNEE_PAIN_OA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['shoulder-pain-rc'] = SHOULDER_PAIN_RC;
    window.COMPREHENSIVE_PATIENT_RESPONSES['new-onset-diabetes'] = NEW_ONSET_DIABETES;
    
    console.log('ReasonDx Part 37 (Diarrhea, UGIB, LGIB, Knee OA, Shoulder RC, New Diabetes) loaded');

})();
