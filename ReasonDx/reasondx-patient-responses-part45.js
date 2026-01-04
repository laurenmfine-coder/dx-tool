/**
 * ReasonDx Part 45: Occupational and Environmental Cases
 * Cases: construction-worker-hearing, retired-miner-dyspnea, sandblaster-dyspnea, welder-tremor, gold-miner-tremor, countertop-worker-cough
 */
(function() {
    'use strict';

    const CONSTRUCTION_HEARING = {
        meta: { caseId: "construction-worker-hearing", patientName: "Michael Brown", age: 52, diagnosis: "Occupational hearing loss" },
        responses: {
            "hello|hi": "What? Oh, hi doc. Sorry, hard to hear.",
            "what brings you in|chief complaint": "Can't hear well anymore. Boss said I need evaluation. Work in construction.",
            "when|how long": "Been getting worse for years. Really bad now.",
            "describe|hearing loss": "Can't hear conversations. Miss things people say. Wife is frustrated.",
            "which ear|both": "Both ears. Left might be worse.",
            "ringing|tinnitus": "Constant ringing. High-pitched. Worse at night when it's quiet.",
            "work|occupation": "Construction. 28 years. Heavy equipment operator.",
            "noise exposure|describe": "Jackhammers, excavators, power tools. Loud all day.",
            "hearing protection": "Didn't wear it much when I started. More now. Too late probably.",
            "audiogram|tested": "Work does hearing tests. Shows it's getting worse each year.",
            "recreational|hobbies": "Used to shoot guns. Hunting. No ear protection then either.",
            "concerts|music": "Play loud music. Or used to. Wife makes me turn it down.",
            "dizziness|vertigo": "No spinning. No balance problems.",
            "ear infections|drainage": "No infections. No drainage.",
            "family history": "Dad had hearing aids. Factory worker.",
            "medical history": "High blood pressure. That's it.",
            "medications": "Lisinopril.",
            "allergies": "None.",
            "worried about|concerns": "Do I need hearing aids? Can I keep working? Is it going to get worse?",
        }
    };

    const RETIRED_MINER = {
        meta: { caseId: "retired-miner-dyspnea", patientName: "Harold Wilson", age: 72, diagnosis: "Coal workers' pneumoconiosis" },
        responses: {
            "hello|hi": "*coughs, short of breath* Hi doc. Breathing's getting worse.",
            "what brings you in|chief complaint": "Can't breathe. Worked in coal mines my whole life. Cough won't stop. Getting weaker.",
            "when|how long": "Breathing problems for years. Much worse this past year.",
            "describe|dyspnea": "Winded walking to mailbox. Used to walk miles in the mines.",
            "cough|describe": "Constant cough. Bringing up black stuff sometimes.",
            "sputum|color": "Dark, grayish-black. Sometimes blood-tinged.",
            "work|occupation|mining": "Coal miner. 38 years. Underground.",
            "exposure|coal dust": "Breathed coal dust every day. Would blow black out of my nose.",
            "protection|respirator": "Masks sometimes. Not always. They were uncomfortable.",
            "when retired|how long ago": "Retired 10 years ago. Breathing was okay then. Got worse since.",
            "progressive massive fibrosis|told": "They mentioned scarring on my lungs. PMF or something.",
            "chest xray|imaging": "Had xrays. Showed the black lung. Spots and scarring.",
            "oxygen|home": "On oxygen now. 2 liters. All the time.",
            "other miners|coworkers": "Many of us have it. Some died from it.",
            "smoking": "Smoked too. 20 years. Quit when I retired.",
            "heart|cor pulmonale": "Heart is straining they said. From the lung disease.",
            "medical history": "Black lung, high blood pressure, heart strain.",
            "medications": "Inhalers, oxygen, blood pressure pills.",
            "allergies": "None.",
            "worried about|concerns": "How much time do I have? Is there anything that helps?",
        }
    };

    const SANDBLASTER = {
        meta: { caseId: "sandblaster-dyspnea", patientName: "David Martinez", age: 45, diagnosis: "Acute silicosis" },
        responses: {
            "hello|hi": "*coughing, short of breath* Doc... I can't breathe... getting worse fast...",
            "what brings you in|chief complaint": "Can't breathe. Getting worse over months. I sandblast for a living.",
            "when|how long": "Started about 6 months ago. Rapidly getting worse.",
            "describe|dyspnea": "Out of breath doing nothing. Can't work anymore.",
            "cough|describe": "Bad cough. Dry mostly. Constant.",
            "sputum": "Not much comes up.",
            "fever|systemic": "Some low fevers. Night sweats.",
            "weight loss": "Lost 20 pounds.",
            "work|occupation": "Sandblaster. Industrial cleaning. 8 years.",
            "silica|exposure": "Blasting with silica sand. Very dusty.",
            "protection|respirator": "Wore a mask but it wasn't enough. Got dusty inside too.",
            "how long|duration of exposure": "Did it 60 hours a week sometimes. High demand.",
            "enclosed|ventilation": "Worked in enclosed spaces. Ships, tanks. Bad ventilation.",
            "progression|how fast": "Came on fast. Was fine, now can barely walk.",
            "chest xray|imaging": "Chest xray showed lots of spots. Sent me here.",
            "tb|ruled out": "Tested for TB. Negative. But they want to recheck.",
            "coworkers|others sick": "Another guy I worked with got sick too. Died actually.",
            "smoking": "Never smoked.",
            "medical history": "Nothing before this. Was healthy.",
            "medications": "Nothing.",
            "allergies": "None.",
            "worried about|concerns": "Is this silicosis? My coworker died from it. Am I going to die?",
        }
    };

    const WELDER_TREMOR = {
        meta: { caseId: "welder-tremor", patientName: "Robert Thompson", age: 55, diagnosis: "Manganism (manganese toxicity)" },
        responses: {
            "hello|hi": "*slight tremor, stiff movements* Hi doctor. Having trouble moving right.",
            "what brings you in|chief complaint": "Tremor in my hands. Getting stiff. Trouble walking. Voice changing. I'm a welder.",
            "when|how long": "Started maybe a year ago. Getting worse.",
            "tremor|describe": "Hands shake. Worse when I try to do things.",
            "stiffness|rigidity": "Feel stiff. Like moving through molasses.",
            "walking|gait": "Shuffle when I walk. Trouble starting. Fell twice.",
            "balance": "Balance is off. Unsteady.",
            "voice|speech": "Voice is softer. People can't hear me. Monotone.",
            "face|expression": "Wife says I look blank. No expression.",
            "mood|psychiatric": "Feeling irritable. Anxious. Not myself.",
            "memory|cognition": "Harder to concentrate. Memory not as good.",
            "work|occupation": "Welder. 30 years. Mostly manganese steel.",
            "manganese|exposure": "Weld manganese alloys. High-manganese steel. Lots of fumes.",
            "ventilation|protection": "Not great ventilation. Wore a mask sometimes.",
            "enclosed spaces": "Weld in tanks, confined spaces. Fumes build up.",
            "coworkers|others": "Heard of other welders with similar problems.",
            "smoking": "No.",
            "alcohol": "Drink sometimes. Not heavy.",
            "medical history": "Nothing. Was healthy.",
            "medications": "Nothing.",
            "allergies": "None.",
            "family history|parkinsons": "No Parkinson's in family.",
            "worried about|concerns": "Is this Parkinson's or from the welding? Is it reversible?",
        }
    };

    const GOLD_MINER_TREMOR = {
        meta: { caseId: "gold-miner-tremor", patientName: "James Anderson", age: 58, diagnosis: "Mercury poisoning" },
        responses: {
            "hello|hi": "*visible tremor, anxious* Hi doc. My hands won't stop shaking.",
            "what brings you in|chief complaint": "Tremor in my hands. Getting worse. Memory problems. Mood changes. I work in gold mining.",
            "when|how long": "Noticed tremor 6 months ago. Everything getting worse.",
            "tremor|describe": "Fine tremor. Hands shake when I reach for things. Handwriting is terrible.",
            "pattern|intention": "Worse when I try to do something precise. Like writing or buttoning.",
            "mood|personality": "Irritable. Anxious all the time. Not myself.",
            "memory|cognition": "Memory is bad. Can't concentrate. Forget things.",
            "sleep|insomnia": "Can't sleep. Anxious at night.",
            "mouth|gums|teeth": "Gums are sore. Metallic taste. Lost a tooth.",
            "vision|peripheral": "Vision seems narrower. Like tunnel vision.",
            "numbness|tingling": "Tingling in my hands and feet.",
            "work|occupation|mining": "Artisanal gold mining. Small operation.",
            "mercury|exposure": "Use mercury to extract gold. Handle it with bare hands.",
            "amalgam|process": "Mix mercury with ore. Burn off the mercury to get gold.",
            "fumes|inhalation": "Breathe the fumes when we burn it. No ventilation.",
            "how long|years": "Doing this 15 years. Good money.",
            "others sick|coworkers": "Other miners have tremors too. Some worse than me.",
            "medical history": "Nothing before this.",
            "medications": "Nothing.",
            "allergies": "None.",
            "dental|fillings": "Have some old fillings. Silver ones.",
            "worried about|concerns": "Is this mercury poisoning? Is the damage permanent?",
        }
    };

    const COUNTERTOP_COUGH = {
        meta: { caseId: "countertop-worker-cough", patientName: "Antonio Garcia", age: 42, diagnosis: "Silicosis from engineered stone" },
        responses: {
            "hello|hi": "*coughing* Hi doctor. This cough won't go away.",
            "what brings you in|chief complaint": "Cough for months. Getting short of breath. I cut countertops for a living.",
            "when|how long": "Cough started maybe 8 months ago. Breathing worse lately.",
            "cough|describe": "Dry cough. Constant. Worse at work.",
            "shortness of breath": "Getting winded. Stairs are hard. Never had trouble before.",
            "sputum": "Not bringing up much. Dry.",
            "chest pain": "Some tightness.",
            "fever|systemic": "No fever.",
            "weight|fatigue": "Tired. Maybe lost a little weight.",
            "work|occupation": "Cut and polish countertops. Quartz, engineered stone.",
            "how long|years working": "10 years doing this.",
            "dust|exposure": "Very dusty. White dust everywhere when cutting.",
            "silica|quartz content": "Boss says the engineered stone is 90% silica. Very high.",
            "protection|respirator": "Wear a mask. Dust mask. Not always N95.",
            "wet cutting|controls": "Supposed to use water. Sometimes do, sometimes don't.",
            "ventilation": "Work area isn't well ventilated.",
            "coworkers|others sick": "Other guys have coughs too. One left because he couldn't breathe.",
            "smoking": "No, never smoked.",
            "medical history": "Nothing. Healthy until this.",
            "medications": "Nothing.",
            "allergies": "None.",
            "worried about|concerns": "Is this from the stone dust? I've heard of silicosis. Should I stop working?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['construction-worker-hearing'] = CONSTRUCTION_HEARING;
    window.COMPREHENSIVE_PATIENT_RESPONSES['retired-miner-dyspnea'] = RETIRED_MINER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['sandblaster-dyspnea'] = SANDBLASTER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['welder-tremor'] = WELDER_TREMOR;
    window.COMPREHENSIVE_PATIENT_RESPONSES['gold-miner-tremor'] = GOLD_MINER_TREMOR;
    window.COMPREHENSIVE_PATIENT_RESPONSES['countertop-worker-cough'] = COUNTERTOP_COUGH;
    
    console.log('ReasonDx Part 45 (Construction Hearing, Miners, Sandblaster, Welder, Gold Miner, Countertop) loaded');

})();
