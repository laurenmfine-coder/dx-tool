/**
 * ReasonDx Part 24: Renal and Electrolyte Cases
 */

(function() {
    'use strict';

    const AKI_PRERENAL = {
        meta: { caseId: "aki-prerenal", patientName: "Barbara Lewis", age: 78, diagnosis: "Acute kidney injury (prerenal)" },
        responses: {
            "hello|hi": "*weak, dry lips* Hello... I haven't been feeling well.",
            "what brings you in|chief complaint": "My doctor called - blood test showed kidney problems. I've had terrible diarrhea for 4 days.",
            "diarrhea|how long": "4 days of diarrhea. Can't keep anything in. Going 10 times a day.",
            "drinking|fluids": "Trying but it goes right through. Feel dried out.",
            "urine|peeing": "Barely any urine. Very dark, small amount.",
            "lightheaded|dizzy": "Very lightheaded when I stand. Nearly fainted.",
            "medications": "Lisinopril, hydrochlorothiazide, ibuprofen for arthritis.",
            "ibuprofen|how much": "600mg three times a day. Have for years.",
            "medical history": "High blood pressure, arthritis, mild kidney problems they were watching.",
            "baseline creatinine|kidney before": "Doctor said it was 1.4 before. Now it's 3.2.",
            "worried about|concerns": "Am I on dialysis? That scares me more than anything.",
        }
    };

    const CKD_UREMIA = {
        meta: { caseId: "ckd-uremia", patientName: "William Brown", age: 68, diagnosis: "CKD stage 5 with uremia" },
        responses: {
            "hello|hi": "*fatigued, slightly confused, peculiar breath odor* Hi... just so tired...",
            "what brings you in|chief complaint": "Exhausted. Can't eat - everything tastes metallic. Confusion my wife says. Itchy all over.",
            "how long": "Getting worse for weeks. Really bad now.",
            "symptoms": "Tired, no appetite, metallic taste, itchy, swollen legs, nauseous. My wife says I'm not thinking straight.",
            "ckd|kidney disease": "Yes, diabetic kidney disease. Been getting worse for years. Stage 4 last I knew.",
            "dialysis|ever discussed": "They've talked about it. I've been avoiding it. Scared.",
            "urination": "Still making some urine. Less than before.",
            "diabetes|control": "Type 2 for 25 years. Not always well controlled. A1c was 9.",
            "swelling|edema": "Legs swollen. Face puffy in morning. Gained 15 pounds fluid.",
            "breathing|short of breath": "Short of breath. Hard to lie flat.",
            "medical history": "Diabetes, high blood pressure, kidney disease, heart disease.",
            "medications": "Insulin, bunch of blood pressure meds, statin.",
            "worried about|concerns": "Is it time for dialysis? I can't put it off anymore, can I?",
        }
    };

    const HYPERKALEMIA = {
        meta: { caseId: "hyperkalemia", patientName: "James Carter", age: 72, diagnosis: "Severe hyperkalemia" },
        responses: {
            "hello|hi": "*weakness apparent* Doc, I feel weak all over. Heart feels funny.",
            "what brings you in|chief complaint": "Weakness, especially my legs. Palpitations. My doctor sent me after blood work - potassium is high.",
            "weakness|describe": "My legs feel heavy, hard to climb stairs. Arms too. Generalized.",
            "heart|palpitations": "Fluttering feeling. Irregular. Scares me.",
            "how long": "Weakness for a few days. Getting worse.",
            "potassium level|how high": "They said 7.1. Normal is under 5? Told me to come right in.",
            "kidney disease": "Yes, CKD stage 4. Creatinine around 3.",
            "medications": "Lisinopril, spironolactone, losartan, potassium supplement actually.",
            "potassium supplement|why": "Another doctor started it. Probably shouldn't have with my kidneys.",
            "diet|bananas|potassium foods": "I eat a lot of oranges and bananas. Thought they were healthy.",
            "ekg|heart test": "They did one in the ER - said there are changes. Wide something.",
            "medical history": "Kidney disease, diabetes, heart failure.",
            "worried about|concerns": "Can this kill me? The look on the nurse's face scared me.",
        }
    };

    const HYPONATREMIA = {
        meta: { caseId: "hyponatremia", patientName: "Dorothy White", age: 82, diagnosis: "Symptomatic hyponatremia" },
        responses: {
            "hello|hi": "*confused, slow to respond* Hello... who are you again?",
            "what brings you in|chief complaint": "*daughter* She's confused. Fell at home. Sodium came back very low.",
            "confused|when started": "*daughter* Started getting more confused over the past week. Today she didn't recognize me.",
            "fell|fall": "*daughter* Found her on the floor this morning. She's been unsteady.",
            "sodium level": "*daughter* They said 118. Normal is 135-145 she said.",
            "medications": "*daughter* She takes hydrochlorothiazide for blood pressure. SSRIs for depression.",
            "how long on these": "*daughter* The water pill for years. The antidepressant for about 6 months.",
            "drinking|fluid intake": "*daughter* She drinks a lot of water. Says she heard it's healthy. Glass after glass.",
            "how much water": "*daughter* Maybe 3-4 liters a day? She carries a water bottle everywhere.",
            "nausea|vomiting": "*daughter* She's been nauseous. Threw up once.",
            "headache": "*patient mumbles* Head hurts...",
            "seizure": "*daughter* No seizures.",
            "medical history": "High blood pressure, depression, arthritis.",
            "worried about|concerns": "*daughter* Is this permanent? Will she be herself again?",
        }
    };

    const NEPHROTIC_SYNDROME = {
        meta: { caseId: "nephrotic-syndrome", patientName: "Kevin Lee", age: 35, diagnosis: "Nephrotic syndrome" },
        responses: {
            "hello|hi": "Hi doc. *visibly swollen, particularly face and legs* Something's really wrong.",
            "what brings you in|chief complaint": "Swelling everywhere. Started in my face, now my whole body. Urine is foamy. Gained 20 pounds in 2 weeks.",
            "when|how long": "Noticed face puffiness 3 weeks ago. Gotten worse steadily.",
            "swelling|where": "Face - especially around eyes in morning. Legs and ankles huge. Belly feels full.",
            "urine|describe": "Really foamy. Like soap bubbles. Never used to be like that.",
            "urine amount": "Actually peeing less than usual.",
            "other symptoms": "Tired. Some shortness of breath. Loss of appetite.",
            "previous kidney problems": "Never. Completely healthy before this.",
            "recent illness|infection": "Had a cold maybe a month ago. Nothing else.",
            "medications|drugs|nsaids": "Nothing regular. Occasional ibuprofen.",
            "diabetes": "No diabetes.",
            "blood pressure": "They said it was a little high today. Never been before.",
            "medical history": "Healthy. Nothing. This came out of nowhere.",
            "family history|kidney": "My uncle is on dialysis. Don't know why.",
            "sexually active": "Yes, with my wife.",
            "worried about|concerns": "What is causing this? Am I going to need dialysis like my uncle?",
        }
    };

    const RHABDOMYOLYSIS = {
        meta: { caseId: "rhabdomyolysis", patientName: "Derek Johnson", age: 28, diagnosis: "Rhabdomyolysis" },
        responses: {
            "hello|hi": "*in obvious pain* Hey doc. Everything hurts. And my pee is brown.",
            "what brings you in|chief complaint": "Severe muscle pain after CrossFit. My urine looks like cola. Coach said that's bad.",
            "when|what happened": "Did an extreme workout 2 days ago. First time back after 3 months off. Way overdid it.",
            "workout|describe": "Tons of squats, deadlifts, box jumps. Pushed through when I should have stopped.",
            "pain|where|which muscles": "Thighs, glutes, back. Everything we worked. Hurts to move, hurts to touch.",
            "urine|describe": "Dark brown. Like Coca-Cola. Started yesterday. Freaked me out.",
            "how much|peeing": "Less than usual. And it's dark every time.",
            "swelling|muscles": "My thighs are swollen. Tight. Hot.",
            "fluids|drinking": "Probably didn't drink enough during or after. Was so sore I just went home.",
            "happened before": "Never. I've been sore before but nothing like this. The brown urine is new.",
            "supplements|pre-workout": "Pre-workout with caffeine. Creatine. Protein shakes.",
            "medications|statins": "Nothing. No statins. Young and healthy usually.",
            "drugs|alcohol": "Some beers on weekends. No drugs.",
            "medical history": "Nothing. First real medical problem.",
            "sexually active": "Yeah, girlfriend.",
            "worried about|concerns": "Is my kidney damage permanent? Can I work out again?",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['aki-prerenal'] = AKI_PRERENAL;
    window.COMPREHENSIVE_PATIENT_RESPONSES['ckd-uremia'] = CKD_UREMIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['hyperkalemia'] = HYPERKALEMIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['hyponatremia'] = HYPONATREMIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['nephrotic-syndrome'] = NEPHROTIC_SYNDROME;
    window.COMPREHENSIVE_PATIENT_RESPONSES['rhabdomyolysis'] = RHABDOMYOLYSIS;
    
    console.log('ReasonDx Part 24 (AKI, CKD, Hyperkalemia, Hyponatremia, Nephrotic, Rhabdo) loaded');

})();
