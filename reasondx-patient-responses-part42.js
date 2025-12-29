/**
 * ReasonDx Part 42: More Specialty Cases
 * Cases: Acute Hepatitis, Variceal Bleeding, Syncope Arrhythmia, Spinal Cord Compression, GI Bleed, Rash Evaluation
 */
(function() {
    'use strict';

    const ACUTE_HEPATITIS = {
        meta: { caseId: "acute-hepatitis", patientName: "Jennifer White", age: 28, diagnosis: "Acute hepatitis" },
        responses: {
            "hello|hi": "*appears jaundiced, fatigued* Hi. I'm yellow. Everyone keeps telling me I'm yellow.",
            "what brings you in|chief complaint": "Turned yellow. Tired. Nauseated. Dark urine. Feel terrible.",
            "when|how long": "Started about a week ago. Fatigue first, then the yellow.",
            "jaundice|yellow|when noticed": "Couple days ago. Eyes first, then skin.",
            "urine|color": "Dark like tea. Started before I turned yellow.",
            "stool|color": "Lighter than normal. Clay colored maybe.",
            "abdominal pain": "Dull ache on the right side. Under my ribs.",
            "nausea|vomiting": "Very nauseated. Lost appetite. Can't eat.",
            "fever": "Low fever at the start. 100 maybe.",
            "fatigue": "Exhausted. Can barely get out of bed.",
            "itching|pruritis": "Itchy all over. Driving me crazy.",
            "alcohol|drinking": "Social drinker. Nothing heavy. Wine on weekends.",
            "drugs|substances": "Nothing. Never.",
            "medications|new": "Started an herbal supplement for weight loss. Online purchase. Month ago.",
            "what supplement|name": "Something natural. Had green tea extract, garcinia, some other stuff.",
            "travel|recent": "Mexico 6 weeks ago. Beach vacation.",
            "food|water|ate there": "Ate at resorts mostly. Ice in drinks. Street food once.",
            "sexual history|partners": "New boyfriend 2 months ago. Protected sex mostly.",
            "tattoos|piercings|needles": "No new tattoos. Ears pierced years ago.",
            "blood transfusion": "Never.",
            "vaccines|hepatitis": "I think I had hepatitis B vaccine as a kid.",
            "family history|liver": "Nothing I know of.",
            "medical history": "Nothing. Healthy until now.",
            "allergies": "None.",
            "worried about|concerns": "Is this serious? My liver? The supplement? Will I be okay?",
        }
    };

    const VARICEAL_BLEEDING = {
        meta: { caseId: "variceal-bleeding", patientName: "Frank Martinez", age: 55, diagnosis: "Variceal hemorrhage" },
        responses: {
            "hello|hi": "*vomiting blood, pale, distressed* *retching*",
            "what brings you in|chief complaint": "*wife* He's throwing up blood! A lot! It won't stop!",
            "when|how long": "*wife* Started 30 minutes ago. Just started vomiting blood.",
            "how much|volume": "*wife* A lot. Filled the sink. Bright red. Keeps coming.",
            "blood|describe": "*wife* Bright red. Fresh blood. Some clots.",
            "black stool|melena": "*wife* Had black stool yesterday. Should have come then.",
            "lightheaded|weak": "*patient barely conscious, wife answers* He's barely awake. Was standing, now can't.",
            "pain|abdominal": "*wife* Says his belly hurts.",
            "liver|cirrhosis|history": "*wife* He has cirrhosis. From hepatitis C and drinking.",
            "varices|known": "*wife* They said he has varices. Was supposed to get them banded. Missed the appointment.",
            "previous bleeding": "*wife* Bled like this once before. 2 years ago. Almost died.",
            "alcohol|drinking": "*wife* Still drinks. Tried to stop. Can't seem to.",
            "ascites|belly swelling": "*wife* His belly is always swollen. Getting worse.",
            "hepatitis|hep c": "*wife* Hep C for years. Treatment didn't work.",
            "encephalopathy|confusion": "*wife* Gets confused sometimes. Not today though. Just weak.",
            "medications": "*wife* Propranolol, lactulose, spironolactone, vitamins.",
            "beta blocker|propranolol|taking": "*wife* I think he ran out. Didn't refill.",
            "allergies": "*wife* Penicillin.",
            "worried about|concerns": "*wife* Please save him. I can't lose him.",
        }
    };

    const SYNCOPE_ARRHYTHMIA = {
        meta: { caseId: "syncope-arrhythmia", patientName: "Richard Brown", age: 65, diagnosis: "Cardiac syncope" },
        responses: {
            "hello|hi": "Hi doc. I passed out. Came to on the ground. Scary.",
            "what brings you in|chief complaint": "Fainted without warning. No dizziness before. Just suddenly on the ground.",
            "when|how long": "About 2 hours ago. At home.",
            "what happened|describe": "Standing in the kitchen. Next thing I know, I'm on the floor. Wife said I was out.",
            "warning|before|prodrome": "Nothing. No warning at all. That's what's scary.",
            "how long unconscious": "Wife said maybe 30 seconds. Came to quickly.",
            "palpitations|heart racing|before": "Maybe. My heart felt funny right before. Then nothing.",
            "heart symptoms|describe": "Like a flutter. Then everything went black.",
            "injury|hurt yourself": "Bumped my head. Wife saw me fall.",
            "after|how felt": "Fine after. A little tired. No confusion.",
            "exertion|what doing": "Just standing. Wasn't doing anything strenuous.",
            "previous|happened before": "Something similar a month ago. Didn't fully pass out that time. Got dizzy.",
            "chest pain": "No chest pain.",
            "shortness of breath": "No trouble breathing.",
            "family history|sudden death": "My brother died suddenly at 50. Heart problem they said.",
            "cardiac history": "Irregular heartbeat. They monitor it.",
            "afib|arrhythmia": "I have some kind of arrhythmia. On medication.",
            "medications": "Metoprolol. Warfarin. Lisinopril.",
            "pacemaker|defibrillator": "No device. They mentioned it once.",
            "allergies": "None.",
            "sexually active": "Yes, wife.",
            "worried about|concerns": "Is something wrong with my heart? Could this happen while driving?",
        }
    };

    const SPINAL_CORD = {
        meta: { caseId: "spinal-cord-compression", patientName: "James Wilson", age: 58, diagnosis: "Spinal cord compression" },
        responses: {
            "hello|hi": "*appears worried, unstable gait* Doc, my legs aren't working right.",
            "what brings you in|chief complaint": "Legs are weak. Getting worse. Started having trouble walking. And I'm having trouble peeing.",
            "when|how long": "Weakness started 2 weeks ago. Getting worse daily.",
            "describe|weakness": "Legs feel heavy. Wobbly. Harder to walk each day.",
            "both legs|one leg": "Both legs. Started on the left, now both.",
            "walking|gait": "Was walking fine, now shuffling. Need a cane. My wife is scared.",
            "numbness|sensation": "Numb from my belly button down. Pins and needles in my feet.",
            "bladder|urination": "Having trouble. Have to strain. Sometimes can't go. Feel like I have to but can't.",
            "bowel|constipation": "Constipated badly. For 2 weeks.",
            "back pain": "Yes. Mid-back pain for months. Thought it was muscle strain.",
            "severe|describe pain": "Aching at first. Now sharper. Worse at night. Lying down hurts.",
            "cancer|history": "Had prostate cancer. Treated 3 years ago. They said it was cured.",
            "follow up|oncology": "Lost to follow up. Stopped going to appointments.",
            "psa|recent": "Haven't checked in 2 years.",
            "bone scan|imaging": "Last one was 2 years ago. Was clear then.",
            "weight loss": "Lost 20 pounds without trying.",
            "fatigue": "Very tired. Weaker overall.",
            "medical history": "Prostate cancer. High blood pressure.",
            "medications": "Lisinopril. Nothing else.",
            "allergies": "None.",
            "sexually active": "Haven't been able to. Can't get erections.",
            "worried about|concerns": "Is the cancer back? Is it in my spine?",
        }
    };

    const GI_BLEED = {
        meta: { caseId: "gi-bleed", patientName: "Robert Davis", age: 62, diagnosis: "GI bleeding" },
        responses: {
            "hello|hi": "*pale, weak* Had a lot of blood in my stool...",
            "what brings you in|chief complaint": "Blood in stool. Felt lightheaded. Passed out briefly.",
            "when|how long": "Started 2 days ago with black stool. Today was bright red.",
            "describe|blood|stool": "First it was black and tarry. This morning bright red filled the toilet.",
            "amount": "A lot. Enough to make me dizzy.",
            "lightheaded|dizzy": "Very. Almost passed out twice.",
            "passed out|syncope": "Got up from toilet and everything went black. Came to on floor.",
            "abdominal pain": "Some stomach pain. Upper belly. Burning.",
            "nausea|vomiting": "Nauseous. No vomiting blood.",
            "nsaids|aspirin|ibuprofen": "Take aspirin every day. Ibuprofen for arthritis.",
            "how much|how long": "Aspirin daily for heart. Ibuprofen 800 twice daily for years.",
            "ulcer|history": "Told I might have ulcers. Never got scoped.",
            "colonoscopy|endoscopy": "Never had either. Know I should.",
            "blood thinners": "Just the aspirin.",
            "alcohol": "Social drinker. Few beers a week.",
            "weight loss": "Maybe a little. Not sure.",
            "previous bleeding": "Never bled before.",
            "family history|colon cancer": "Mother had colon cancer.",
            "medical history": "Heart disease. Stent 5 years ago. High blood pressure. Arthritis.",
            "medications": "Aspirin, ibuprofen, metoprolol, lisinopril, atorvastatin.",
            "allergies": "None.",
            "worried about|concerns": "Am I going to need a transfusion? Is this cancer?",
        }
    };

    const RASH_EVAL = {
        meta: { caseId: "rash-evaluation", patientName: "Lisa Thompson", age: 35, diagnosis: "Rash evaluation" },
        responses: {
            "hello|hi": "Hi doc. Got this rash I can't figure out.",
            "what brings you in|chief complaint": "Rash on my trunk and arms. Itchy. Been there a week. Getting worse.",
            "when|how long": "Started about a week ago.",
            "where|location": "Started on my trunk. Spread to arms. Some on legs now.",
            "describe|appearance": "Red raised bumps. Some flat patches. Very itchy.",
            "pattern|distribution": "Kind of symmetrical. Both sides.",
            "itchy|pruritus": "Extremely itchy. Worse at night.",
            "new medications|started anything": "Started a new antibiotic last week. For sinus infection.",
            "which antibiotic": "Amoxicillin. Day 3 when rash started.",
            "continued taking": "Stopped when rash came. Been 4 days off it.",
            "better|worse": "Getting a little better since stopping. But still there.",
            "other symptoms|systemic": "No fever. No joint pain. Feel okay otherwise.",
            "mouth|mucosal": "No mouth sores.",
            "facial swelling|angioedema": "No face swelling. No lip swelling.",
            "breathing|trouble": "Breathing is fine.",
            "previous reactions|allergies": "Never had a drug reaction before.",
            "food|new foods": "Haven't eaten anything unusual.",
            "detergent|products": "Same detergent and soap. Nothing new.",
            "stress": "Work has been stressful I guess.",
            "sick|viral|before rash": "Had the sinus infection. That's it.",
            "medical history": "Nothing. Healthy.",
            "medications|other": "Birth control. Vitamins.",
            "allergies": "None known. Maybe now amoxicillin.",
            "sexually active": "Yes, husband.",
            "worried about|concerns": "Is this an allergy? Will it spread? Will it happen again with antibiotics?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['acute-hepatitis'] = ACUTE_HEPATITIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['variceal-bleeding'] = VARICEAL_BLEEDING;
    window.COMPREHENSIVE_PATIENT_RESPONSES['syncope-arrhythmia'] = SYNCOPE_ARRHYTHMIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['spinal-cord-compression'] = SPINAL_CORD;
    window.COMPREHENSIVE_PATIENT_RESPONSES['gi-bleed'] = GI_BLEED;
    window.COMPREHENSIVE_PATIENT_RESPONSES['rash-evaluation'] = RASH_EVAL;
    
    console.log('ReasonDx Part 42 (Hepatitis, Variceal, Syncope, Spinal Cord, GI Bleed, Rash) loaded');

})();
