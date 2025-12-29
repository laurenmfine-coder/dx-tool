/**
 * ReasonDx Part 23: Advanced Cardiac/Vascular Cases
 * Cases: Endocarditis, PAD, Aortic Stenosis, Mitral Regurg, HOCM, Tamponade
 */

(function() {
    'use strict';

    const ENDOCARDITIS = {
        meta: { caseId: "endocarditis-ivdu", patientName: "Christopher Jones", age: 32, diagnosis: "Infective endocarditis" },
        responses: {
            "hello|hi": "*ill-appearing, fever* Hey doc... I've been really sick. Fevers that won't quit.",
            "what brings you in|chief complaint": "Fevers every day for 2 weeks. Chills, sweating. Lost weight. Feel terrible. I use IV drugs - I know that's important to tell you.",
            "fever|how long": "Two weeks of fevers. Every day. Sometimes multiple spikes a day.",
            "symptoms": "High fevers, shaking chills, drenched in sweat. Body aches. Lost maybe 15 pounds. Exhausted.",
            "iv drugs|use|substance": "Heroin. IV. I'm not proud of it. Been using about 3 years.",
            "when|last use": "Yesterday. I know I need help but I can't stop.",
            "how often|frequency": "Daily. Multiple times a day.",
            "needles|share|clean": "I try to use clean needles but... not always possible. Sometimes share.",
            "heart|murmur|ever told": "They told me I have a murmur last time I was in the hospital.",
            "chest pain|shortness of breath": "A little short of breath. No chest pain.",
            "spots|skin|hands|feet": "I have these little red spots on my fingers. Noticed them last week. Thought I hit myself.",
            "joint pain|joints": "My back and some joints ache. Thought it was withdrawal.",
            "cough": "Some cough. Started recently.",
            "stroke symptoms|neuro|weakness": "No weakness or numbness.",
            "previous infections|hospitalizations": "Been hospitalized for abscesses before. Skin infections.",
            "hiv|hepatitis": "I have Hep C. Don't know my HIV status - been avoiding testing.",
            "medical history": "Hep C. Multiple skin infections. Otherwise young and was healthy before the drugs.",
            "sexually active": "Sometimes. For drugs sometimes. Don't want to talk about it.",
            "worried about|concerns": "Am I dying? I know I'm messed up. Is this in my heart?",
        }
    };

    const PAD_CLAUDICATION = {
        meta: { caseId: "pad-claudication", patientName: "George Thompson", age: 68, diagnosis: "Peripheral arterial disease" },
        responses: {
            "hello|hi": "Hi doc. My legs hurt when I walk. Getting worse. Can't do my usual walks anymore.",
            "what brings you in|chief complaint": "Pain in my calves when I walk. Goes away when I rest. Been getting worse over months. Now I can only go a block before it hurts.",
            "when|how long": "Maybe 6 months it's been bothering me. Worse the last 2 months.",
            "describe|pain": "Cramping, aching pain in both calves. Comes on after walking a certain distance. Like clockwork.",
            "distance|how far": "Used to walk a mile no problem. Now I have to stop after one block. Catches my breath and calves burn.",
            "rest|what helps": "Stopping and resting for a few minutes. Pain goes away then I can walk again. Then it comes back.",
            "which leg|both": "Both legs but left is worse.",
            "night|rest pain": "Sometimes my feet hurt at night. Have to dangle them over the bed. That's new.",
            "feet|cold|color": "Feet are cold. Sometimes look pale or even bluish. Toenails are thick and weird.",
            "wounds|sores|ulcers": "Had a little sore on my toe that took forever to heal.",
            "smoking|smoke": "Smoked 45 years. Pack a day. Tried to quit. Still smoke about half a pack.",
            "diabetes": "Yeah, diabetic. Type 2. Maybe 15 years. Not always well controlled.",
            "blood pressure|cholesterol": "High blood pressure. High cholesterol. On meds for both.",
            "heart|cardiac|chest pain": "No chest pain. They said I have some blockages in my heart but I've never had a heart attack.",
            "medical history": "Diabetes, high blood pressure, cholesterol, some heart blockages. Lot of mileage on this body.",
            "medications": "Metformin, lisinopril, atorvastatin, aspirin. Bunch of pills.",
            "sexually active": "Not really anymore. Problems with that too. Another thing that doesn't work.",
            "worried about|concerns": "Am I going to lose my leg? I've seen diabetics lose legs. That scares me.",
        }
    };

    const AORTIC_STENOSIS = {
        meta: { caseId: "aortic-stenosis-symptomatic", patientName: "Harold Mitchell", age: 78, diagnosis: "Severe aortic stenosis" },
        responses: {
            "hello|hi": "Hello doctor. I've been having spells. Getting winded and lightheaded.",
            "what brings you in|chief complaint": "Short of breath, especially with activity. Had a fainting spell last week. They told me years ago I have a heart murmur.",
            "when|how long": "The breathlessness - maybe a year, getting worse. The fainting was new - last week.",
            "syncope|fainted|describe": "Was walking to the mailbox and felt lightheaded. Next thing I knew I was on the ground. Maybe 30 seconds out.",
            "warning|before fainting": "A little lightheaded, then nothing. Didn't see it coming.",
            "other episodes|happened before": "I get lightheaded with activity sometimes. Never fully passed out before.",
            "shortness of breath|dyspnea": "Getting winded doing things I used to do easily. Climbing stairs, walking to the store.",
            "how limited|activity": "Down to maybe half a block before I'm winded. Used to walk miles.",
            "chest pain|angina": "Sometimes a tightness in my chest with exertion. Goes away when I rest.",
            "murmur|told before|heart": "They found a murmur 10 years ago. Said to watch it. Echo a few years ago showed thickened valve.",
            "echo|last test": "Echo about 3 years ago. They said mild to moderate aortic stenosis then.",
            "swelling|edema|legs": "My ankles swell by end of day.",
            "sleeping|pillows|orthopnea": "Need 2 pillows now. Used to sleep flat.",
            "medical history": "The heart murmur/valve thing. High blood pressure. Some arthritis.",
            "medications": "Lisinopril. Tylenol for arthritis.",
            "smoke": "Never smoked.",
            "sexually active": "No, not anymore. Widowed and old.",
            "worried about|concerns": "Is my heart failing? Do I need surgery? I'm 78 - am I too old for heart surgery?",
        }
    };

    const MITRAL_REGURG = {
        meta: { caseId: "mitral-regurg-acute", patientName: "Patricia Davis", age: 62, diagnosis: "Acute mitral regurgitation (chordae rupture)" },
        responses: {
            "hello|hi": "*severely dyspneic* Can't... breathe... happened suddenly...",
            "what brings you in|chief complaint": "*gasping* Was fine... this morning... suddenly... can't breathe... drowning...",
            "when|how long": "*labored* Few hours ago... got suddenly worse... never like this...",
            "sudden|gradual": "*struggling* Very sudden... was washing dishes... boom... couldn't breathe...",
            "what were you doing": "*short phrases* Just... normal things... standing... then this...",
            "chest pain": "Some... pressure... mostly... can't breathe...",
            "previous|heart problems before": "Told I had... a murmur... years ago... never bothered me...",
            "murmur|told when": "Maybe... 5 years ago... said mild... watch it...",
            "cough|pink|frothy": "Coughing... some pink stuff... scary...",
            "fever|infection|sick recently": "Was... fine... maybe a cold... last week...",
            "legs|swelling": "No swelling before today...",
            "history|rheumatic fever": "I don't... think so... was healthy kid...",
            "medical history": "High blood... pressure... murmur... otherwise fine...",
            "medications": "Lisinopril... that's it...",
            "allergies": "No...",
            "sexually active": "Not now... please just... help me breathe...",
        }
    };

    const HOCM_SYNCOPE = {
        meta: { caseId: "hocm-syncope", patientName: "Ryan Anderson", age: 22, diagnosis: "Hypertrophic cardiomyopathy" },
        responses: {
            "hello|hi": "Hey doc. I passed out during basketball practice. Coach made me come in.",
            "what brings you in|chief complaint": "Fainted during basketball. Woke up on the court. Coach and my parents are freaking out.",
            "what happened|describe": "We were doing sprints. I felt dizzy, then my vision went dark. Next thing I know I'm on the floor with everyone around me.",
            "warning|before": "Maybe 10 seconds of feeling off. Lightheaded, vision narrowing. Then nothing.",
            "how long|out": "They said 20-30 seconds. Felt like nothing to me.",
            "exertion|activity": "Full-out sprinting when it happened. End of a hard practice.",
            "happened before|previous": "I've felt dizzy with hard exercise before. Never passed out though.",
            "chest pain|palpitations": "I get this weird fluttering in my chest sometimes with exercise. Racing feeling.",
            "family|anyone in family|sudden death": "My uncle died suddenly when he was young. 30 something. They said his heart. My dad's pretty worried about that.",
            "uncle|what happened": "He was jogging. Just collapsed and died. They said something about his heart muscle.",
            "how competitive|level of play": "College athlete. Basketball scholarship. I push myself hard.",
            "murmur|told before": "A doctor mentioned a murmur once when I was a kid. Nobody made a big deal of it.",
            "medical history": "Healthy. Athlete. No problems.",
            "medications": "Nothing. Don't even take vitamins.",
            "supplements|pre-workout": "Some pre-workout stuff. Caffeine basically.",
            "drugs|steroids": "No. I get tested. Nothing like that.",
            "sexually active": "Yeah, with my girlfriend.",
            "worried about|concerns": "Can I keep playing basketball? This is my career. My scholarship. I can't lose this.",
        }
    };

    const TAMPONADE = {
        meta: { caseId: "tamponade-malignant", patientName: "Nancy Wilson", age: 64, diagnosis: "Cardiac tamponade (malignant)" },
        responses: {
            "hello|hi": "*very dyspneic, distended neck veins* Can't... get... breath...",
            "what brings you in|chief complaint": "*gasping* Getting worse... for days... now can't breathe... I have cancer...",
            "cancer|what kind": "Lung cancer... diagnosed... 6 months ago... spreading...",
            "when worse|timeline": "Worse all week... today... can't lie down at all...",
            "shortness of breath": "*severe distress* Terrible... even sitting... so hard...",
            "chest pain|pressure": "Pressure... whole chest... heavy...",
            "lying down|position": "Can't... lie down... at all... have to sit up...",
            "dizziness|lightheaded": "Very... lightheaded... feel faint...",
            "neck|veins|noticed": "*visible JVD* Don't know... hard to focus...",
            "swelling|legs|face": "Face... feels puffy... legs too...",
            "cough": "Some cough... had for while... cancer...",
            "treatment|cancer treatment": "Chemo... radiation... stopped working... they said...",
            "palliative|goals": "Just want... to be comfortable... not ready... to die...",
            "medical history": "Lung cancer... high blood pressure...",
            "medications": "Lots of pills... morphine for pain... blood pressure...",
            "family|support": "Husband... outside... he's scared...",
            "anything else": "Please... help me... breathe... one more time...",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['endocarditis-ivdu'] = ENDOCARDITIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['pad-claudication'] = PAD_CLAUDICATION;
    window.COMPREHENSIVE_PATIENT_RESPONSES['aortic-stenosis-symptomatic'] = AORTIC_STENOSIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['mitral-regurg-acute'] = MITRAL_REGURG;
    window.COMPREHENSIVE_PATIENT_RESPONSES['hocm-syncope'] = HOCM_SYNCOPE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['tamponade-malignant'] = TAMPONADE;
    
    console.log('ReasonDx Part 23 (Endocarditis, PAD, AS, MR, HOCM, Tamponade) loaded');

})();
