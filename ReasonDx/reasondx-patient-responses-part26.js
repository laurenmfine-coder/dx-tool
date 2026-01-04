/**
 * ReasonDx Part 26: Rheumatology and Autoimmune
 */

(function() {
    'use strict';

    const RHEUMATOID_ARTHRITIS = {
        meta: { caseId: "rheumatoid-arthritis", patientName: "Sandra Miller", age: 48, diagnosis: "Rheumatoid arthritis" },
        responses: {
            "hello|hi": "Hi doc. My hands are killing me. The joints are swollen and stiff.",
            "what brings you in|chief complaint": "Pain and swelling in my hands for 3 months. Worse in mornings. Stiffness that lasts hours.",
            "which joints|where": "Mainly my knuckles and wrists. Both hands. Same joints on each side.",
            "pattern|symmetric": "Yes, both hands mirror each other. Same joints affected.",
            "morning stiffness|how long": "Takes 2-3 hours for the stiffness to wear off.",
            "swelling|describe": "The knuckles are puffy. Warm to touch.",
            "fatigue|tired": "Exhausted all the time.",
            "family history|autoimmune": "My sister has lupus. My mother had thyroid problems.",
            "medical history": "Nothing really. Healthy until this started.",
            "sexually active": "Yes, with my husband.",
            "worried about|concerns": "Is this rheumatoid arthritis? Will I be crippled?",
        }
    };

    const SLE_LUPUS = {
        meta: { caseId: "lupus-new-diagnosis", patientName: "Michelle Thomas", age: 28, diagnosis: "SLE" },
        responses: {
            "hello|hi": "Hi. I've been having all these symptoms and no one can figure out what's wrong.",
            "what brings you in|chief complaint": "Joint pain, rash on my face that gets worse in sun, exhaustion, fevers.",
            "rash|describe|face": "Red rash across my cheeks and nose. Gets worse after sun exposure. Butterfly shape.",
            "sun sensitivity": "Yes! Sun makes me feel terrible.",
            "joints|which": "Hands, knees, wrists. Painful and stiff in mornings.",
            "fatigue": "Exhausted doesn't cover it.",
            "hair|hair loss": "Yes, I'm losing hair. Clumps in the shower.",
            "mouth sores": "I get painful sores in my mouth that keep coming back.",
            "family|autoimmune": "My aunt has rheumatoid arthritis.",
            "sexually active": "Yes, with my boyfriend. 3 years.",
            "worried about|concerns": "Am I going to be sick forever? I'm only 28.",
        }
    };

    const PMR_GCA = {
        meta: { caseId: "pmr-gca", patientName: "Harold Thompson", age: 72, diagnosis: "PMR with GCA" },
        responses: {
            "hello|hi": "Hello doctor. My shoulders and hips are killing me. And I have this terrible headache.",
            "what brings you in|chief complaint": "Severe aching in shoulders and hips. Can barely get out of bed. New headache. Scalp is tender.",
            "muscles|describe pain": "Deep aching in both shoulders and both hips. Symmetrical. Worse in morning.",
            "stiffness|how long": "Stiffness lasts for hours. Sometimes all day.",
            "headache|describe": "New headache, temple area. Throbbing.",
            "scalp|tender": "Yes, my scalp is tender. Even combing my hair hurts.",
            "vision|eye": "Yesterday my vision got blurry for a few minutes. Scared me.",
            "jaw|chewing": "My jaw hurts when I chew. Have to take breaks eating.",
            "fever|weight": "Low fevers. Lost 10 pounds without trying.",
            "medical history": "High blood pressure. Otherwise healthy for 72.",
            "worried about|concerns": "Can I go blind? That terrifies me.",
        }
    };

    const GOUT_CHRONIC = {
        meta: { caseId: "gout-chronic", patientName: "Frank Williams", age: 62, diagnosis: "Chronic tophaceous gout" },
        responses: {
            "hello|hi": "Hey doc. My gout is out of control. Look at these bumps.",
            "what brings you in|chief complaint": "Frequent gout attacks. Multiple joints. White lumps under skin. Kidney problems.",
            "attacks|how often": "Now every month or two. Sometimes back to back.",
            "which joints": "Started in big toe. Now knees, ankles, wrists, even elbows.",
            "tophi|lumps": "Chalky lumps on fingers, elbows, ears. Getting bigger.",
            "kidney|stones": "I've had 3 kidney stones. Uric acid stones.",
            "treatment|prevention": "Supposed to take allopurinol but got a rash. Nothing since.",
            "diet|alcohol": "I drink beer on weekends. Like red meat.",
            "medical history": "Gout, high blood pressure, kidney stones, CKD stage 3.",
            "worried about|concerns": "Am I going to end up on dialysis?",
        }
    };

    const SCLERODERMA = {
        meta: { caseId: "scleroderma", patientName: "Patricia Anderson", age: 52, diagnosis: "Systemic sclerosis" },
        responses: {
            "hello|hi": "Hello. Something strange is happening to my skin. Fingers turn white in cold.",
            "what brings you in|chief complaint": "Skin on hands is tight and hard. Fingers turn white then blue in cold. Trouble swallowing.",
            "raynaud|fingers|color change": "When cold, fingers go white, then blue, then red when they warm up.",
            "skin|describe": "The skin on my hands is tight, shiny, hard. Like leather.",
            "face": "My face feels tighter too. Mouth feels smaller.",
            "swallowing|esophagus": "Food sticks going down. Reflux is terrible.",
            "breathing|lungs": "A little short of breath. Dry cough.",
            "sores|ulcers|fingers": "I get sores on my fingertips that won't heal.",
            "family history": "My sister has Raynaud's.",
            "sexually active": "Yes, with my husband.",
            "worried about|concerns": "Is this scleroderma? Is it fatal?",
        }
    };

    const ANKYLOSING_SPONDYLITIS = {
        meta: { caseId: "ankylosing-spondylitis", patientName: "Ryan Martinez", age: 32, diagnosis: "Ankylosing spondylitis" },
        responses: {
            "hello|hi": "Hey doc. My back has been killing me for years. It's not normal.",
            "what brings you in|chief complaint": "Chronic low back pain for 5 years. Worst at night and morning. Gets better with movement.",
            "describe|pattern": "Worst when I wake up. Stiff for hours. Feels better if I exercise.",
            "morning stiffness": "Takes 2-3 hours to loosen up. Hot shower helps.",
            "night|wake up": "Pain wakes me at 3-4am. Have to get up and move.",
            "exercise|better with movement": "Yes, opposite of what you'd think. Exercise helps.",
            "eye|red eye|uveitis": "I had a really red, painful eye last year. Called it iritis.",
            "family history": "My uncle has psoriasis and arthritis.",
            "sexually active": "Yeah, girlfriend.",
            "worried about|concerns": "Am I going to end up with a fused spine?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['rheumatoid-arthritis'] = RHEUMATOID_ARTHRITIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['lupus-new-diagnosis'] = SLE_LUPUS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['pmr-gca'] = PMR_GCA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['gout-chronic'] = GOUT_CHRONIC;
    window.COMPREHENSIVE_PATIENT_RESPONSES['scleroderma'] = SCLERODERMA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['ankylosing-spondylitis'] = ANKYLOSING_SPONDYLITIS;
    
    console.log('ReasonDx Part 26 (RA, SLE, PMR/GCA, Gout, Scleroderma, AS) loaded');

})();
