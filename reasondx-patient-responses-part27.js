/**
 * ReasonDx Part 27: Neurological Cases
 */
(function() {
    'use strict';

    const PARKINSONS = {
        meta: { caseId: "parkinsons-new", patientName: "Robert Wilson", age: 67, diagnosis: "Parkinson's disease" },
        responses: {
            "hello|hi": "Hello doctor. *moves slowly, slight tremor in left hand*",
            "what brings you in|chief complaint": "My hand shakes. I'm slower than I used to be. My wife says I shuffle when I walk.",
            "tremor|shaking": "My left hand shakes. Worse at rest. Gets better when I use it.",
            "when|how long": "Started maybe a year ago. Gradually getting worse.",
            "slowness|movement": "Everything takes longer. Getting dressed, eating. Feel like I'm moving through molasses.",
            "walking|gait": "I shuffle now. Short steps. Hard to start walking. Got stuck in doorways.",
            "stiffness|rigidity": "My muscles feel tight. My arm doesn't swing when I walk.",
            "handwriting|small": "My handwriting got tiny. Hard to read now.",
            "smell|olfactory": "You know, I lost my sense of smell years ago. Didn't think anything of it.",
            "sleep|acting out dreams": "My wife says I act out my dreams. Punching and kicking at night.",
            "constipation": "Terribly constipated. For years actually.",
            "depression|mood": "Been feeling down. Apathetic.",
            "family history": "Father developed shaking in his 70s. Never diagnosed formally.",
            "medications": "Blood pressure meds. Nothing else.",
            "worried about|concerns": "Is this Parkinson's? Will I end up bedridden?",
        }
    };

    const MULTIPLE_SCLEROSIS = {
        meta: { caseId: "ms-new-diagnosis", patientName: "Jennifer Adams", age: 32, diagnosis: "Multiple sclerosis" },
        responses: {
            "hello|hi": "Hi doctor. Something strange is happening. Different symptoms at different times.",
            "what brings you in|chief complaint": "Vision problems a few months ago that went away. Now weakness in my leg and numbness. Coming and going.",
            "vision|eye": "3 months ago my right eye got blurry, painful to move. Cleared up in a few weeks.",
            "current|now": "Now my right leg is weak and my left arm is numb. Started 2 weeks ago.",
            "pattern|episodes": "Different symptoms that come and go. Not the same thing twice.",
            "weakness|describe": "My right leg gives out. Dragging it. Hard to lift.",
            "numbness|tingling": "Left arm and hand are numb and tingly. Like it's asleep.",
            "bladder|urinary": "Having trouble making it to the bathroom in time. New problem.",
            "fatigue": "Unbelievably tired. Even after sleeping 10 hours.",
            "heat|worse with heat": "I feel worse in heat. Hot shower makes my vision blur.",
            "balance|coordination": "Clumsy. Bumping into things. Spilling drinks.",
            "family history": "No one in my family has MS or anything neurological.",
            "medical history": "Healthy until this. Nothing.",
            "sexually active": "Yes, with my husband. Married 5 years.",
            "worried about|concerns": "Is this MS? I'm 32 with two young kids. What's going to happen to me?",
        }
    };

    const SEIZURE_NEW = {
        meta: { caseId: "seizure-new-onset", patientName: "Michael Turner", age: 45, diagnosis: "New-onset seizure" },
        responses: {
            "hello|hi": "*post-ictal, confused* What... what happened?",
            "what brings you in|chief complaint": "*wife* He had a seizure. First ever. Was shaking all over, eyes rolled back. Terrifying.",
            "describe|what happened": "*wife* He was watching TV, suddenly got stiff, fell off the chair, started shaking all over. Lasted maybe 2 minutes.",
            "warning|before": "*patient becoming clearer* I felt weird. Smelled something strange. Then I don't remember.",
            "aura|smell|feeling": "A burning smell. Strange feeling in my stomach rising up. Then nothing.",
            "how long|duration": "*wife* The shaking was maybe 2 minutes. He's been confused for 20 minutes now.",
            "tongue|bit tongue": "*patient* My tongue hurts. *visible bite mark*",
            "incontinence|wet": "*wife* He wet himself.",
            "previous|happened before": "Never had a seizure before. First time.",
            "headache|now": "*patient* Head is pounding now.",
            "alcohol|drinking": "I drink socially. Maybe too much sometimes. Had nothing today though.",
            "drugs|cocaine|substances": "No drugs. Never.",
            "sleep|deprived": "Haven't been sleeping well. Stressful time at work.",
            "family history|seizures": "No one in my family has epilepsy.",
            "medical history": "High blood pressure. Nothing else.",
            "medications": "Lisinopril.",
            "worried about|concerns": "*wife* Is this epilepsy? Will it happen again? Can he drive?",
        }
    };

    const PERIPHERAL_NEUROPATHY = {
        meta: { caseId: "peripheral-neuropathy", patientName: "Gloria Martinez", age: 62, diagnosis: "Diabetic peripheral neuropathy" },
        responses: {
            "hello|hi": "Hi doctor. My feet are burning and numb at the same time. Doesn't make sense.",
            "what brings you in|chief complaint": "Burning, tingling, numbness in my feet. Getting worse. Now going up my legs.",
            "describe|symptoms": "Burning sensation, like walking on hot sand. Pins and needles. Yet also numb when I touch them.",
            "where|distribution": "Both feet. Worse in toes. Creeping up towards ankles and shins.",
            "when|how long": "Started about 2 years ago. Gradually getting worse.",
            "worse|pattern": "Worse at night. Keeps me awake. Worse when blankets touch my feet.",
            "walking|balance": "Unsteady walking. Can't feel the floor well. Tripped a few times.",
            "hands|upper extremities": "My fingertips are starting to get numb too.",
            "weakness": "Maybe a little weak in my feet. Hard to tell.",
            "diabetes|how long": "Type 2 diabetes for 15 years. Not always well controlled.",
            "a1c|control": "Last A1c was 8.5. Better than it used to be but still not great.",
            "alcohol": "I don't drink much. Occasional glass of wine.",
            "b12|vitamin": "Never checked that I know of.",
            "medications": "Metformin, glipizide, lisinopril, atorvastatin.",
            "sexually active": "Not really, divorced.",
            "worried about|concerns": "Can this get better or is it permanent? I'm scared of losing my feet.",
        }
    };

    const MYASTHENIA_GRAVIS = {
        meta: { caseId: "myasthenia-gravis", patientName: "Susan Wright", age: 55, diagnosis: "Myasthenia gravis" },
        responses: {
            "hello|hi": "Hi doctor. *droopy eyelids visible* My eyes droop and I'm getting weak.",
            "what brings you in|chief complaint": "Droopy eyelids, double vision, trouble swallowing. Weakness that gets worse through the day.",
            "eyelids|drooping": "Started a few months ago. One eyelid, then both. Worse by evening.",
            "double vision|diplopia": "Seeing double. Worse when I'm tired. Better when I cover one eye.",
            "pattern|when worse": "Everything is better in the morning, worse as the day goes on. By evening I can barely keep my eyes open.",
            "swallowing|dysphagia": "Food feels like it sticks. Choking on liquids sometimes.",
            "speech|voice": "My voice gets weak and nasal by end of day.",
            "chewing|jaw": "My jaw gets tired chewing. Have to take breaks eating.",
            "weakness|limbs": "My arms get tired brushing my hair. Climbing stairs is exhausting.",
            "breathing|respiratory": "Sometimes short of breath. Especially when lying flat.",
            "better with rest": "Yes, if I rest even a few minutes, I feel stronger again.",
            "medical history": "Thyroid problems years ago. Otherwise healthy.",
            "medications": "Levothyroxine.",
            "family history": "Aunt had autoimmune problems. Not sure what.",
            "sexually active": "Yes, with my husband.",
            "worried about|concerns": "Is this going to affect my breathing? Can I choke to death?",
        }
    };

    const ALS_PRESENTATION = {
        meta: { caseId: "als-presentation", patientName: "John Peterson", age: 58, diagnosis: "ALS (suspected)" },
        responses: {
            "hello|hi": "Hello doctor. *visible muscle twitching in arm*",
            "what brings you in|chief complaint": "Weakness in my right arm and hand. Twitching. Cramps. My grip isn't what it used to be.",
            "weakness|describe": "Started in my hand. Trouble opening jars, buttoning shirts. Now spreading up my arm.",
            "when|how long": "Started maybe 6 months ago. Gradually worse.",
            "twitching|fasciculations": "Muscle twitching all over. Started in my arm, now I see it in my legs, my chest.",
            "cramps": "Painful cramps. Especially in my hands and calves.",
            "atrophy|muscle wasting": "My hand looks skinnier. The muscle between thumb and finger is wasted.",
            "other limbs|spreading": "My leg has been feeling weaker lately. Just started noticing.",
            "swallowing|speech|bulbar": "No trouble swallowing or speaking yet. Voice is okay.",
            "breathing": "No breathing problems yet.",
            "sensory|numbness|tingling": "No numbness or tingling. I can feel everything fine.",
            "family history": "No one in my family had anything like this.",
            "medical history": "Healthy. No prior problems.",
            "stiffness|spasticity": "Some stiffness in my arm. Feels tight.",
            "sexually active": "Yes, with my wife.",
            "worried about|concerns": "I looked up my symptoms. Is this ALS? Please tell me the truth.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    window.COMPREHENSIVE_PATIENT_RESPONSES['parkinsons-new'] = PARKINSONS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['ms-new-diagnosis'] = MULTIPLE_SCLEROSIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['seizure-new-onset'] = SEIZURE_NEW;
    window.COMPREHENSIVE_PATIENT_RESPONSES['peripheral-neuropathy'] = PERIPHERAL_NEUROPATHY;
    window.COMPREHENSIVE_PATIENT_RESPONSES['myasthenia-gravis'] = MYASTHENIA_GRAVIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['als-presentation'] = ALS_PRESENTATION;
    console.log('ReasonDx Part 27 (Parkinson, MS, Seizure, Neuropathy, MG, ALS) loaded');
})();
