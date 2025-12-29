/**
 * ReasonDx Part 40: Chest Pain and Stroke Cases
 * Cases: Chest Pain Costochondritis, Chest Pain Pericarditis, Acute Stroke Advanced, Ischemic Stroke AFib, SBP, Sickle Cell Crisis
 */
(function() {
    'use strict';

    const CHEST_PAIN_COSTO = {
        meta: { caseId: "chest-pain-costochondritis", patientName: "Michael Torres", age: 28, diagnosis: "Costochondritis" },
        responses: {
            "hello|hi": "Hi doc. My chest hurts. Worried it's my heart.",
            "what brings you in|chief complaint": "Sharp chest pain. Left side. Started 3 days ago after moving furniture.",
            "when|how long": "3 days. Started after lifting heavy boxes.",
            "describe|pain": "Sharp, stabbing. Worse with movement. Can point right to it.",
            "location|where|point": "Right here. *points to left chest wall* One spot.",
            "radiation|spread": "Doesn't spread. Just this one area.",
            "worse|triggers": "Worse when I breathe deep. Press on it. Move my arm. Turn my body.",
            "better": "Better when I'm still. Ibuprofen helped.",
            "tender|press on it": "Yes! Hurts when I push on it. Very tender.",
            "shortness of breath": "No trouble breathing. Just hurts to breathe deep.",
            "palpitations|racing": "No heart racing.",
            "sweating|nausea": "No sweating or nausea.",
            "exertion|exercise": "Can exercise. Hurts a bit but not worse with exercise really.",
            "lifting|what were you doing": "Moving furniture. Lots of heavy lifting. Probably strained something.",
            "cardiac history": "Never had heart problems.",
            "family history|heart disease": "Dad had a heart attack but he was 70. Smoker.",
            "medical history": "Nothing. Healthy.",
            "medications": "Nothing.",
            "allergies": "None.",
            "smoking": "No.",
            "cocaine|stimulants": "No drugs.",
            "sexually active": "Yes, girlfriend.",
            "worried about|concerns": "Is this a heart attack? It's been scaring me.",
        }
    };

    const CHEST_PAIN_PERI = {
        meta: { caseId: "chest-pain-pericarditis", patientName: "David Chen", age: 32, diagnosis: "Pericarditis" },
        responses: {
            "hello|hi": "Hi. Sharp chest pain. Feels better when I sit forward.",
            "what brings you in|chief complaint": "Sharp chest pain for 2 days. Worse lying down. Had a cold last week.",
            "when|how long": "Started 2 days ago.",
            "describe|pain": "Sharp. Stabbing. In the center of my chest.",
            "location|where": "Center, maybe a little left. Under the breastbone.",
            "worse|triggers": "Much worse lying flat. Worse breathing in. Better sitting up and leaning forward.",
            "position|sit forward": "If I sit up and lean forward, it's much better. Lying down is terrible.",
            "radiation": "Goes to my left shoulder. And my back a little.",
            "breathing|respiration": "Hurts to breathe in deep.",
            "recent illness|cold|flu": "Had a bad cold last week. Fever, body aches. Felt better then this started.",
            "fever|now": "Low fever again. 100.4.",
            "shortness of breath": "Not really short of breath. Just hurts.",
            "palpitations": "No racing heart.",
            "medical history": "Nothing. Healthy guy.",
            "cardiac history": "No heart problems.",
            "autoimmune|lupus|ra": "No autoimmune diseases.",
            "medications": "Just been taking Tylenol.",
            "allergies": "None.",
            "smoking": "No.",
            "sexually active": "Yes, wife.",
            "worried about|concerns": "Is this my heart? The position thing is weird.",
        }
    };

    const ACUTE_STROKE_ADV = {
        meta: { caseId: "acute-stroke-advanced", patientName: "Helen Williams", age: 68, diagnosis: "Acute ischemic stroke" },
        responses: {
            "hello|hi": "*slurred speech, right facial droop* Wha... hap... ning...",
            "what brings you in|chief complaint": "*husband* She can't talk right, face is drooping, can't move her right arm. Started an hour ago!",
            "when|how long|last seen normal": "*husband* She was fine an hour ago. Went to get coffee, came back like this.",
            "time|exactly when": "*husband* About 10:15. It's 11:30 now. An hour fifteen minutes.",
            "sudden|gradual": "*husband* Completely sudden. Was talking normally then this.",
            "face|describe": "*husband* Right side of face is drooping. Smile is crooked.",
            "arm|can she lift": "*husband* Right arm won't move. Left is okay.",
            "speech|describe": "*patient tries* Can... un... der... *frustrated, slurred*",
            "leg|can she walk": "*husband* Right leg is weak. Had to help her walk.",
            "headache|pain": "*patient nods slightly*",
            "vision|see okay": "*patient makes uncertain gesture*",
            "vomiting|nausea": "*husband* No vomiting.",
            "seizure": "*husband* No seizure.",
            "similar|happened before": "*husband* Never. She's never had a stroke.",
            "blood thinners|anticoagulation": "*husband* She's supposed to be on blood thinner for her heart. Eliquis.",
            "taking it|compliance": "*husband* She ran out last month. Insurance issues.",
            "medical history": "*husband* Atrial fibrillation, high blood pressure, diabetes.",
            "afib|heart rhythm": "*husband* Yes, irregular heartbeat for years.",
            "medications": "*husband* Was on Eliquis, metoprolol, lisinopril, metformin. Stopped the Eliquis.",
            "allergies": "*husband* Penicillin.",
            "recent surgery|bleeding risk": "*husband* No recent surgery.",
            "worried about|concerns": "*husband* Is she having a stroke? Can you give her the clot buster?",
        }
    };

    const ISCHEMIC_STROKE_AFIB = {
        meta: { caseId: "ischemic-stroke-afib", patientName: "George Anderson", age: 72, diagnosis: "Cardioembolic stroke from AFib" },
        responses: {
            "hello|hi": "*left sided weakness, dysarthria* Hel...lo...",
            "what brings you in|chief complaint": "*wife* Found him on the floor this morning. Left side not working. Speech garbled.",
            "when|how long|last seen normal": "*wife* Was okay when we went to bed at 10. Found him at 6 AM.",
            "time|exactly when": "*wife* Don't know exactly. Sometime overnight. Wake up stroke.",
            "found|describe": "*wife* On the floor by the bed. Couldn't get up. Left side not working.",
            "face|droop": "*wife* Face looks droopy on the left.",
            "arm|weakness": "*patient tries, left arm barely moves*",
            "speech": "*patient* Words... hard... know what... want...",
            "leg": "*wife* Left leg is weak. Can't stand.",
            "headache": "*patient shakes head no*",
            "vision": "*wife* He keeps looking to the right. Not looking left.",
            "neglect|awareness": "*patient seems unaware of left side when asked*",
            "medical history": "*wife* Atrial fibrillation, high blood pressure, diabetes, had a small stroke before.",
            "previous stroke|when": "*wife* Small stroke 3 years ago. Recovered well from that one.",
            "blood thinners": "*wife* He's on Coumadin.",
            "inr|last checked": "*wife* It's been a month since they checked. He kept missing appointments.",
            "compliance": "*wife* He takes it... mostly. Forgets sometimes.",
            "other medications": "*wife* Warfarin, metformin, lisinopril, metoprolol, digoxin.",
            "allergies": "*wife* None.",
            "worried about|concerns": "*wife* Is this another stroke? Will he recover?",
        }
    };

    const SBP_CASE = {
        meta: { caseId: "sbp", patientName: "Frank Johnson", age: 58, diagnosis: "Spontaneous bacterial peritonitis" },
        responses: {
            "hello|hi": "*ill-appearing, distended abdomen* Hey doc... don't feel good...",
            "what brings you in|chief complaint": "Belly pain. Swelling is worse. Confused. My wife made me come.",
            "when|how long": "Belly's been big. Pain started 2 days ago. Getting confused.",
            "abdominal pain|describe": "All over. Diffuse. Tender everywhere.",
            "distension|swelling": "Look at me. *large ascites* Getting bigger.",
            "confusion|mental status": "*wife* He's not himself. Saying weird things. Forgetful.",
            "fever": "Felt warm. Maybe 101.",
            "bowel|gi": "Not eating. Nauseous.",
            "liver|cirrhosis|history": "Cirrhosis. From drinking. Years.",
            "ascites|fluid|drained": "Had it drained twice. Keeps coming back.",
            "alcohol|drinking": "I drink. Trying to stop. Haven't been able to.",
            "how much|quantity": "Bottle of wine a day. More sometimes.",
            "last drink": "Yesterday. Couldn't today. Too sick.",
            "previous sbp|infection": "Had infection in the belly fluid before. Once.",
            "hospitalized|previous": "In hospital many times. Bleeding, encephalopathy.",
            "gi bleed|varices": "Bled from my throat. Varices. Had them banded.",
            "encephalopathy|confused before": "*wife* He gets confused when his ammonia is high. But this is worse.",
            "lactulose|taking": "*wife* He's supposed to take it. Doesn't always.",
            "medications": "Supposed to take lactulose, spironolactone, propranolol, vitamins.",
            "allergies": "Penicillin.",
            "worried about|concerns": "*wife* Is it infected again? He looks really bad.",
        }
    };

    const SICKLE_CELL = {
        meta: { caseId: "sickle-cell-crisis", patientName: "Marcus Williams", age: 24, diagnosis: "Sickle cell vaso-occlusive crisis" },
        responses: {
            "hello|hi": "*in severe pain, guarding* It's a crisis... bad one...",
            "what brings you in|chief complaint": "Pain crisis. Worst one in a while. Back, chest, legs. Need help.",
            "when|how long": "Started yesterday. Getting worse. Can't handle it anymore.",
            "pain|describe": "Deep, throbbing. Like bones are breaking. Everywhere.",
            "where|location": "Lower back. Both legs. Chest now too. All over.",
            "severity|scale": "10. Maybe 11. I know my crises. This is bad.",
            "chest|chest pain": "Chest is tight. Hurts to breathe. That started today.",
            "shortness of breath": "Yeah, getting harder to breathe.",
            "cough|fever": "Low fever. Some cough.",
            "trigger|what started it": "Got dehydrated. Working outside in the heat. Stupid.",
            "sickle cell|type": "Sickle cell SS. Had it my whole life.",
            "previous crises|how often": "Get crises few times a year. On hydroxyurea.",
            "hospitalizations": "Been admitted many times. Know the drill.",
            "acs|acute chest before": "Had acute chest syndrome twice. That's what scares me about the chest pain.",
            "transfusions|blood": "Had transfusions before. Several.",
            "alloimmunization": "Yeah, have antibodies. Need special blood.",
            "medications|home": "Hydroxyurea, folic acid, vitamin D. Penicillin prophylaxis.",
            "allergies": "Demerol - makes me sick. Have morphine listed too but it's not allergy, just doesn't work well.",
            "what works|pain medication": "Dilaudid usually helps. Takes a lot. High tolerance.",
            "gallbladder|removed": "Had it out at 18.",
            "spleen": "Autosplenectomy. No spleen function.",
            "worried about|concerns": "Is this ACS? The chest is scaring me. I know what that can do.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['chest-pain-costochondritis'] = CHEST_PAIN_COSTO;
    window.COMPREHENSIVE_PATIENT_RESPONSES['chest-pain-pericarditis'] = CHEST_PAIN_PERI;
    window.COMPREHENSIVE_PATIENT_RESPONSES['acute-stroke-advanced'] = ACUTE_STROKE_ADV;
    window.COMPREHENSIVE_PATIENT_RESPONSES['ischemic-stroke-afib'] = ISCHEMIC_STROKE_AFIB;
    window.COMPREHENSIVE_PATIENT_RESPONSES['sbp'] = SBP_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['sickle-cell-crisis'] = SICKLE_CELL;
    
    console.log('ReasonDx Part 40 (Costochondritis, Pericarditis, Strokes, SBP, Sickle Cell) loaded');

})();
