/**
 * ReasonDx Part 25: Endocrine Emergencies
 */

(function() {
    'use strict';

    const HYPOGLYCEMIA = {
        meta: { caseId: "hypoglycemia-severe", patientName: "Maria Gonzalez", age: 68, diagnosis: "Severe hypoglycemia" },
        responses: {
            "hello|hi": "*confused, diaphoretic, trembling* Wha... where am I...",
            "what brings you in|chief complaint": "*EMS* Found by neighbor. Confused, sweating. Diabetic. Sugar was 38 on scene.",
            "blood sugar|glucose": "*EMS* 38 in the field. Gave D50, came up to 120. She's more alert now.",
            "*patient*|how do you feel": "*becoming more alert* I feel... strange. Sweaty. What happened?",
            "remember|what do you remember": "*patient* I was at home... don't remember after breakfast...",
            "eat|breakfast": "I had toast... thought I did... maybe I forgot?",
            "diabetes|type": "Type 2. On insulin for 5 years now.",
            "insulin|how much|dose": "Novolog before meals. Lantus at night. 30 units of Lantus.",
            "change|dose change|recently": "My doctor increased my Lantus last week. Said my sugars were high.",
            "eating|missed meal": "My appetite's been poor. Maybe didn't eat enough.",
            "sick|illness": "Had a stomach bug. Didn't feel like eating.",
            "happened before|low sugar before": "I've had lows before but never like this. Never passed out.",
            "live alone": "Yes, alone. My neighbor checks on me.",
            "symptoms|warning signs": "I usually feel shaky and sweaty when I'm low. This time I don't remember.",
            "medications": "Insulin, metformin, lisinopril, amlodipine.",
            "kidney function": "Doctor said my kidneys aren't great. Maybe stage 3.",
            "worried about|concerns": "I can't live alone if this happens again. I could have died.",
        }
    };

    const ADDISONIAN_CRISIS = {
        meta: { caseId: "addisonian-crisis", patientName: "Thomas Wright", age: 45, diagnosis: "Adrenal crisis" },
        responses: {
            "hello|hi": "*severely hypotensive, weak* Can't... so weak... stomach...",
            "what brings you in|chief complaint": "Vomiting for 2 days, terrible weakness, diarrhea. I have Addison's disease. Ran out of my steroids.",
            "when|how long": "Vomiting started 2 days ago. Got weaker and weaker. Could barely get to the phone.",
            "steroids|ran out": "My hydrocortisone. Ran out 4 days ago. Couldn't get refill. Pharmacy problem.",
            "dose|how much": "Normally 20mg in morning, 10mg afternoon.",
            "why didn't|try to get": "I called, they said insurance issue. I thought I could wait. Stupid.",
            "addisons|how long": "Diagnosed 8 years ago. Usually stable on medication.",
            "sick dose|stress dose": "I know I'm supposed to increase when sick. Didn't have any to increase.",
            "symptoms": "Weak, nauseous, vomiting everything, diarrhea, dizzy. Feel like I'm dying.",
            "salt|craving": "Craving salt like crazy. That's usually my warning sign.",
            "skin|dark": "Yeah, I have darkening of my skin. Part of Addison's.",
            "blood pressure": "*nurse* 74/50 despite fluids.",
            "triggered|what started": "Got a stomach flu. Couldn't keep pills down anyway. Vicious cycle.",
            "medical history": "Addison's disease. That's it. Otherwise healthy when on my meds.",
            "sexually active": "Yes, with my partner.",
            "worried about|concerns": "Am I going to make it? I feel terrible. I know this is serious.",
        }
    };

    const CUSHINGS = {
        meta: { caseId: "cushings-syndrome", patientName: "Linda Parker", age: 52, diagnosis: "Cushing's syndrome" },
        responses: {
            "hello|hi": "Hi doctor. I don't recognize my own body anymore. Something's very wrong.",
            "what brings you in|chief complaint": "Weight gain, especially my face and belly. Thin arms and legs. Purple stretch marks. My face is round like a moon.",
            "when|how long": "Gradually over the past year. Getting worse. Harder to ignore.",
            "weight|gained how much": "40 pounds, but weird distribution. Belly and face, but my arms and legs are skinny.",
            "face|moon face": "Round, puffy. Double chin. I don't look like myself.",
            "stretch marks|where": "Purple streaks on my belly and thighs. Wide and dark. Not like pregnancy stretch marks.",
            "bruising": "Bruise so easily. Barely bump something and I'm black and blue.",
            "skin|thin": "My skin is paper thin. Cuts heal slowly.",
            "hair|changes": "Facial hair - I'm growing a beard practically. Hair on my body too.",
            "muscle|weakness": "My legs are weak. Hard to climb stairs or get up from a chair.",
            "mood|emotional": "Terrible mood swings. Anxious, depressed, irritable. Not myself.",
            "blood sugar|diabetes": "My doctor said I'm now pre-diabetic. Never had sugar problems before.",
            "blood pressure": "High blood pressure now too. Everything is falling apart.",
            "medications|steroids": "I take prednisone for my rheumatoid arthritis. 20mg daily for 2 years.",
            "dose|how long on prednisone": "Started at higher dose, now 20mg. Been on steroids in some form for 3 years.",
            "periods|menstrual": "Irregular now. Very light or absent.",
            "medical history": "Rheumatoid arthritis. Now diabetes and high blood pressure.",
            "sexually active": "Not much anymore. No desire. Weight makes me self-conscious.",
            "worried about|concerns": "Is this from the prednisone? Can it be reversed? I hate what I've become.",
        }
    };

    const PHEOCHROMOCYTOMA = {
        meta: { caseId: "pheochromocytoma", patientName: "Richard Chen", age: 42, diagnosis: "Pheochromocytoma" },
        responses: {
            "hello|hi": "Doctor, I've been having these terrifying episodes. I think I'm having heart attacks.",
            "what brings you in|chief complaint": "Spells of racing heart, terrible headaches, sweating, feeling of doom. Blood pressure goes sky high. Then it passes.",
            "describe|episodes": "Sudden onset - heart pounding out of my chest, head feels like it will explode, drenched in sweat, shaking, terrified. Lasts 15-30 minutes.",
            "how often": "Started monthly, now weekly. Sometimes multiple times a week.",
            "when|how long": "First one about 6 months ago. Getting more frequent.",
            "trigger|what brings them on": "Sometimes nothing. Noticed a few times after exercise or bending over. Once during a massage.",
            "blood pressure|during episode": "I bought a home monitor. During an episode it was 210/130. Between episodes it's high normal.",
            "headache|describe": "Pounding headache, whole head, severe. With the other symptoms.",
            "sweating": "Drenched. Like I ran a marathon. Even when cold.",
            "heart|palpitations": "Pounding. Feel it in my throat. Checked heart rate - was 140 during attack.",
            "between episodes|how do you feel": "Mostly okay. A little anxious waiting for the next one. Blood pressure slightly high.",
            "weight|appetite": "Actually lost weight. Sweating so much, metabolism seems revved up.",
            "family history|tumors|MEN": "My father had thyroid surgery. My aunt had some tumor removed from her adrenal gland.",
            "adrenal|told about adrenal": "No one's mentioned that. Is that important?",
            "medications": "Nothing regular. Tried beta-blockers once - made the episode worse.",
            "medical history": "Nothing. Healthy until these episodes started.",
            "sexually active": "Yes, with my wife. Had an episode once during sex - terrifying.",
            "worried about|concerns": "I thought I was crazy or having panic attacks. Doctors kept dismissing me. Is there something real?",
        }
    };

    const MYXEDEMA = {
        meta: { caseId: "myxedema-coma", patientName: "Evelyn Foster", age: 75, diagnosis: "Myxedema coma" },
        responses: {
            "hello|hi": "*barely responsive, hypothermic, bradycardic* ...",
            "what brings you in|chief complaint": "*daughter* She's barely conscious. Found her like this. She has hypothyroidism but stopped taking her pills.",
            "when|found her": "*daughter* This morning. She was okay yesterday, just slow and tired. Today she wouldn't wake up.",
            "thyroid|medication": "*daughter* She's supposed to take levothyroxine. Said she ran out months ago. Didn't tell anyone.",
            "how long|off medication": "*daughter* Maybe 3-4 months based on her pill bottle.",
            "cold|temperature": "*daughter* She felt cold to touch. The house was warm but she was under blankets.",
            "baseline|before this": "*daughter* She'd been slower, more forgetful, constipated. Gained weight. We thought it was age.",
            "response|can she respond": "*patient opens eyes briefly, mumbles, falls back asleep*",
            "vitals|heart rate": "*nurse* HR 48, BP 88/54, temp 94.8°F rectally.",
            "swelling|face": "*daughter* Her face does look puffy. Hands too.",
            "trigger|sick|infection": "*daughter* She had a cough last week. Maybe a cold or flu.",
            "medical history": "*daughter* Hypothyroid for 20 years. High blood pressure. Dementia starting.",
            "medications": "*daughter* Was supposed to be on Synthroid. Blood pressure pill. She's bad with medications.",
            "worried about|concerns": "*daughter* Is she going to die? Please help her. She's all I have.",
        }
    };

    const HYPERCALCEMIA = {
        meta: { caseId: "hypercalcemia-malignancy", patientName: "Charles Morgan", age: 72, diagnosis: "Hypercalcemia of malignancy" },
        responses: {
            "hello|hi": "*lethargic, confused* What... where am I...",
            "what brings you in|chief complaint": "*wife* He's confused, so thirsty, peeing all the time. Has lung cancer. Doctor said calcium is very high.",
            "calcium level|how high": "*wife* 14 point something. Normal is under 10.5.",
            "cancer|lung cancer": "*wife* Diagnosed 4 months ago. Stage 4. In his bones now.",
            "symptoms|him": "*wife* Confused for a few days. Extreme thirst. Urinating constantly. Constipated. Nauseous.",
            "confusion|when started": "*wife* Started a few days ago. Getting worse. Didn't recognize our grandson today.",
            "bones|pain": "*wife* He has bone pain. Back and hips. From the cancer spread.",
            "thirst|drinking": "*wife* Can't stop drinking water. Constantly thirsty.",
            "urination": "*wife* Going to bathroom every hour. Day and night.",
            "nausea|eating": "*wife* Can't eat. Nauseous. Has vomited.",
            "constipation": "*wife* Haven't had a bowel movement in 5 days.",
            "treatment|cancer treatment": "*wife* He did one round of chemo. Stopped because too sick. We're focusing on comfort now.",
            "*patient*|how do you feel": "*patient, groggy* Tired... thirsty... confused... hurts everywhere...",
            "medical history": "Lung cancer, COPD from smoking.",
            "goals|prognosis": "*wife* We know it's terminal. We just want him comfortable. Is this the end?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['hypoglycemia-severe'] = HYPOGLYCEMIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['addisonian-crisis'] = ADDISONIAN_CRISIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['cushings-syndrome'] = CUSHINGS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['pheochromocytoma'] = PHEOCHROMOCYTOMA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['myxedema-coma'] = MYXEDEMA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['hypercalcemia-malignancy'] = HYPERCALCEMIA;
    
    console.log('ReasonDx Part 25 (Hypoglycemia, Addisonian, Cushings, Pheo, Myxedema, Hypercalcemia) loaded');

})();
