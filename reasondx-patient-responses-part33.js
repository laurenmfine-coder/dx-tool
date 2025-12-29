/**
 * ReasonDx Part 33: Specialty Cases
 * Cases: PID, Breast Mass, Dementia Eval, Falls Elderly, Postop Fever, Preop Eval
 */
(function() {
    'use strict';

    const PID_CASE = {
        meta: { caseId: "pid", patientName: "Jasmine Brown", age: 23, diagnosis: "Pelvic inflammatory disease" },
        responses: {
            "hello|hi": "Hi. *appears uncomfortable* I have really bad pelvic pain.",
            "what brings you in|chief complaint": "Pain in my lower belly, both sides. Getting worse for a week. Hurts during sex.",
            "when|how long": "Started about a week ago. Gradually worse.",
            "where|location": "Lower belly, both sides. Deep inside.",
            "fever": "Low fever. 100.5 yesterday.",
            "discharge|describe": "More discharge than usual. Yellowish. Different smell.",
            "sex|pain with intercourse": "Hurts a lot now. Deep pain.",
            "sexually active": "Yes.",
            "partners|how many": "Two in the last 3 months.",
            "condoms|protection": "Not always. I'm on the pill.",
            "stis|history": "Never had an STI. Last tested a year ago.",
            "last period|lmp": "3 weeks ago. Normal.",
            "pregnant|could be": "Don't think so. On the pill.",
            "medical history": "Healthy.",
            "medications": "Birth control pills.",
            "allergies": "No allergies.",
            "worried about|concerns": "Is this an infection? Did someone give me something?",
        }
    };

    const BREAST_MASS = {
        meta: { caseId: "breast-mass", patientName: "Stephanie Miller", age: 45, diagnosis: "Breast mass evaluation" },
        responses: {
            "hello|hi": "Hi doctor. I found a lump in my breast. I'm terrified.",
            "what brings you in|chief complaint": "Felt a lump in my right breast. It wasn't there before. Scared it's cancer.",
            "when|how long": "Found it 2 weeks ago.",
            "where|location": "Upper outer part of my right breast.",
            "describe|feel": "Firm, grape-sized. Can move it a little.",
            "tender|painful": "A little tender before period.",
            "discharge|nipple": "No nipple discharge.",
            "skin changes": "No skin changes or dimpling.",
            "last mammogram": "2 years ago. Normal.",
            "family history|breast cancer": "Mother had breast cancer at 58. She's a survivor.",
            "brca|genetic testing": "Never tested.",
            "previous lumps": "Had a cyst once. Went away.",
            "children|breastfeeding": "Two kids. Breastfed both.",
            "medical history": "Healthy.",
            "medications": "Just vitamins.",
            "allergies": "No allergies.",
            "worried about|concerns": "Please tell me it's not cancer. My mom had it.",
        }
    };

    const DEMENTIA_EVAL = {
        meta: { caseId: "dementia-eval", patientName: "Robert Anderson", age: 75, diagnosis: "Dementia evaluation" },
        responses: {
            "hello|hi": "*wife* Hi doctor. I'm worried about his memory.",
            "what brings you in|chief complaint": "*wife* His memory has been getting worse. Forgetting things. Getting lost.",
            "when|how long": "*wife* Gradually over 2 years. Really noticeable this past year.",
            "describe|what's happening": "*wife* Forgets recent things. Asks same questions. Gets confused about what day it is.",
            "examples": "*wife* Got lost driving to grocery store we've gone to for 30 years.",
            "*patient*|mr anderson": "*patient* I'm fine. She worries too much. *pause* What was the question?",
            "short term|recent memory": "*wife* Can't remember what he had for breakfast.",
            "daily activities": "*wife* Can dress himself but slower. Sometimes puts clothes on wrong.",
            "personality|behavior": "*wife* More irritable. Gets frustrated. Sometimes withdrawn.",
            "hallucinations|seeing things": "*wife* No hallucinations.",
            "falls|walking": "*wife* No falls. Walking is okay. A little slower.",
            "medical history": "*wife* High blood pressure. Small stroke 5 years ago. Diabetes.",
            "medications": "*wife* Metformin, lisinopril, atorvastatin, aspirin.",
            "family history|dementia": "*wife* His mother had dementia.",
            "worried about|concerns": "*wife* I need to know what we're dealing with. Can he stay home?",
        }
    };

    const FALLS_ELDERLY = {
        meta: { caseId: "falls-elderly", patientName: "Margaret Chen", age: 82, diagnosis: "Falls evaluation" },
        responses: {
            "hello|hi": "*appears frail* Hello doctor. My daughter made me come. I had a fall.",
            "what brings you in|chief complaint": "Fell at home 3 days ago. Second time this month.",
            "what happened|describe fall": "Getting up from chair. Got dizzy, next thing I was on floor.",
            "injuries|hurt yourself": "Bruised hip and elbow. Nothing broken.",
            "hit head": "Don't think so. Maybe bumped it. No bleeding.",
            "lost consciousness": "Don't think so. Just got dizzy and fell.",
            "previous falls": "Fell 2 weeks ago too. In the bathroom.",
            "lightheaded|dizzy": "Yes, especially when I stand up.",
            "medications|new medications": "Started new water pill 3 weeks ago.",
            "vision|eyes": "Not great. Cataracts. Need glasses.",
            "balance|unsteady": "More unsteady than I used to be.",
            "walker|cane": "Have a cane but forget to use it at home.",
            "numbness|feet": "Some numbness in feet. Diabetes.",
            "medical history": "High blood pressure, diabetes, osteoporosis, arthritis.",
            "medications|list": "Lisinopril, metformin, chlorthalidone, Benadryl, calcium, aspirin.",
            "allergies": "Penicillin.",
            "live|alone": "Live alone. Daughter visits daily.",
            "worried about|concerns": "Don't want to go to nursing home.",
        }
    };

    const POSTOP_FEVER = {
        meta: { caseId: "postop-fever", patientName: "Charles Williams", age: 62, diagnosis: "Postoperative fever" },
        responses: {
            "hello|hi": "*in hospital gown* Hi. The nurse said my temperature is up again.",
            "what brings you in|chief complaint": "Had surgery 3 days ago. Now I have a fever.",
            "surgery|what operation": "Colon surgery. Removed part of colon for cancer.",
            "when|how many days post op": "Surgery 3 days ago. POD 3.",
            "fever|temperature": "Started yesterday. 101.5 last check.",
            "cough|respiratory": "Make me cough. It hurts. Bringing up yellowish stuff.",
            "short of breath": "A little winded. Better when I sit up.",
            "incision|wound": "Looks okay I think. Some redness maybe.",
            "bowel|gas|passing gas": "Haven't passed gas yet.",
            "eating|drinking": "Clear liquids. Not hungry.",
            "urinating|catheter": "Catheter removed yesterday. Burns a little when I pee.",
            "leg pain|swelling": "Legs feel a little swollen. Left more than right.",
            "calves|tenderness": "A little tender in calf.",
            "blood thinners|dvt prophylaxis": "Getting heparin shots.",
            "medical history": "Colon cancer. High blood pressure. Former smoker.",
            "allergies": "Sulfa drugs.",
            "worried about|concerns": "Is this normal? Did something go wrong?",
        }
    };

    const PREOP_EVAL = {
        meta: { caseId: "preop-eval", patientName: "Eleanor Thompson", age: 72, diagnosis: "Preoperative evaluation" },
        responses: {
            "hello|hi": "Hello doctor. I'm here for clearance for my knee surgery.",
            "what brings you in|chief complaint": "Need medical clearance. Getting knee replacement in 2 weeks.",
            "surgery|what procedure": "Total knee replacement. Right knee.",
            "anesthesia|what type": "General anesthesia.",
            "chest pain": "No chest pain.",
            "shortness of breath": "Get winded going up stairs. Thought it was age and knee.",
            "how far|how many blocks": "1-2 blocks before I need to rest.",
            "swelling|legs": "Some ankle swelling at end of day. Goes away overnight.",
            "palpitations|heart racing": "Sometimes my heart skips. Years.",
            "cardiac|heart history": "Heart murmur. Irregular heartbeat.",
            "afib|atrial fibrillation": "Yes, afib. On medication.",
            "blood thinners": "Eliquis. Told me when to stop before surgery.",
            "stress test": "Haven't had one in 5 years.",
            "diabetes": "Type 2. Controlled with pills. A1c 7.2.",
            "kidney|renal function": "Stage 3 CKD.",
            "previous surgery|anesthesia": "Gallbladder 10 years ago. Did fine.",
            "medical history": "Afib, murmur, diabetes, high BP, kidney disease, osteoarthritis.",
            "medications": "Eliquis, metformin, lisinopril, metoprolol, atorvastatin.",
            "allergies": "Iodine contrast - makes me nauseous.",
            "worried about|concerns": "Will I be cleared? I need this surgery.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['pid'] = PID_CASE;
    window.COMPREHENSIVE_PATIENT_RESPONSES['breast-mass'] = BREAST_MASS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['dementia-eval'] = DEMENTIA_EVAL;
    window.COMPREHENSIVE_PATIENT_RESPONSES['falls-elderly'] = FALLS_ELDERLY;
    window.COMPREHENSIVE_PATIENT_RESPONSES['postop-fever'] = POSTOP_FEVER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['preop-eval'] = PREOP_EVAL;
    
    console.log('ReasonDx Part 33 (PID, Breast Mass, Dementia, Falls, Postop Fever, Preop Eval) loaded');

})();
