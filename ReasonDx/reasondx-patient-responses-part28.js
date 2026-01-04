/**
 * ReasonDx Part 28: Hematology/Oncology
 */
(function() {
    'use strict';

    const LEUKEMIA = {
        meta: { caseId: "leukemia-acute", patientName: "David Anderson", age: 35, diagnosis: "Acute leukemia" },
        responses: {
            "hello|hi": "*pale, fatigued, petechiae visible* Hi doc. Something's really wrong.",
            "what brings you in|chief complaint": "Exhausted, getting sick all the time, bruising everywhere, bleeding gums. For a few weeks now.",
            "fatigue|tired": "Can barely get out of bed. Never been this tired.",
            "bruising|petechiae": "Bruises everywhere. Little red dots too. Didn't hit myself on anything.",
            "bleeding|gums": "Gums bleed when I brush. Nosebleeds too.",
            "infections|sick": "Had pneumonia last month. Now sore throat again. Can't shake things off.",
            "fever": "Low-grade fevers on and off. Night sweats drenching.",
            "weight loss": "Lost 15 pounds without trying.",
            "lymph nodes|swelling": "Felt some bumps under my arms and in my neck.",
            "bone pain": "My bones ache. Deep pain.",
            "when|how long": "All this started maybe 4-6 weeks ago. Getting worse.",
            "medical history": "Completely healthy until this. Run marathons.",
            "family history": "No cancer in my family.",
            "medications": "Nothing. No meds.",
            "sexually active": "Yes, with my girlfriend.",
            "worried about|concerns": "Do I have cancer? Something in my blood?",
        }
    };

    const LYMPHOMA = {
        meta: { caseId: "lymphoma-hodgkins", patientName: "Emily Roberts", age: 24, diagnosis: "Hodgkin lymphoma" },
        responses: {
            "hello|hi": "Hi. I found these lumps in my neck that won't go away.",
            "what brings you in|chief complaint": "Painless lumps in my neck for 2 months. Night sweats. Itchy skin. Lost weight.",
            "lumps|lymph nodes": "Started as one lump above my collarbone. Now multiple. Both sides of neck.",
            "size|describe": "Largest one is like a golf ball. Rubbery, not painful.",
            "how long": "About 2 months. Not getting smaller, only bigger.",
            "night sweats": "Drenching night sweats. Have to change pajamas and sheets.",
            "weight loss": "Lost 20 pounds in 2 months. Wasn't trying.",
            "fever": "Low-grade fevers that come and go.",
            "itching|pruritus": "Intensely itchy all over. No rash. Drives me crazy.",
            "fatigue": "Very tired. Hard to keep up at work.",
            "alcohol|pain": "Actually, when I drink wine, the lumps hurt. Weird.",
            "cough|breathing": "Some dry cough. No breathing problems.",
            "medical history": "Healthy. Never had anything serious.",
            "family history": "Grandmother had non-Hodgkin lymphoma.",
            "sexually active": "Yes, with my boyfriend.",
            "worried about|concerns": "Is this cancer? I'm only 24. This can't be happening.",
        }
    };

    const MULTIPLE_MYELOMA = {
        meta: { caseId: "multiple-myeloma", patientName: "William Harris", age: 68, diagnosis: "Multiple myeloma" },
        responses: {
            "hello|hi": "Hi doctor. My back has been killing me and my lab work is abnormal.",
            "what brings you in|chief complaint": "Severe back pain for months. Blood work showed high protein and kidney problems. Anemia too.",
            "back pain|describe": "Deep bone pain in my lower and mid back. Constant. Getting worse. Different from any back pain before.",
            "when|how long": "Maybe 4-5 months. Thought it was arthritis at first.",
            "fracture|told about": "They said I might have a compression fracture. Just from normal activity.",
            "anemia|tired": "Very tired. They said my hemoglobin is low.",
            "kidney|renal": "Kidney function declining. Was normal before.",
            "infections": "Had two pneumonias this year. Unusual for me.",
            "protein|blood work": "They said my protein is very high in my blood. M-spike or something.",
            "calcium": "Calcium was high too. Made me confused and constipated.",
            "weight loss": "Lost weight without trying. 15 pounds.",
            "bone pain|other bones": "My ribs hurt too. Any movement hurts.",
            "medical history": "High blood pressure. Otherwise healthy until this.",
            "medications": "Lisinopril. Calcium now too.",
            "sexually active": "Yes, with my wife.",
            "worried about|concerns": "Is this myeloma? What does that mean for me?",
        }
    };

    const HEMOPHILIA = {
        meta: { caseId: "hemophilia-bleeding", patientName: "Ryan Cooper", age: 19, diagnosis: "Hemophilia A" },
        responses: {
            "hello|hi": "*holding arm against chest* Hi. My elbow is bleeding inside again.",
            "what brings you in|chief complaint": "Left elbow is swelling up. Hemarthrosis. I have hemophilia A. Ran out of factor.",
            "elbow|describe": "Swollen, hot, can't bend it. Started last night. Getting worse.",
            "bleeding|when started": "Woke up with it. Didn't hit it. Just spontaneous.",
            "factor|treatment": "I'm supposed to take factor VIII. Ran out. Insurance issue.",
            "how long|without factor": "Haven't had factor in about 10 days. Stupid.",
            "previous|other joints": "Happens to my elbows and knees mostly. Have some joint damage already.",
            "frequency|how often": "Usually a couple bleeds a month if not on prophylaxis.",
            "severity|type": "Severe hemophilia. Less than 1% factor VIII.",
            "diagnosed|when": "Born with it. Diagnosed as baby.",
            "inhibitors|antibodies": "No inhibitors. Respond to factor okay.",
            "other bleeding|sites": "Sometimes muscle bleeds. Had one in my thigh a few months ago.",
            "medical history": "Just the hemophilia. Target joints from repeated bleeds.",
            "medications": "Factor VIII prophylaxis when I have it. Nothing else.",
            "sexually active": "Yeah, girlfriend.",
            "worried about|concerns": "Can you give me factor? The joint damage keeps getting worse.",
        }
    };

    const ITP = {
        meta: { caseId: "itp-acute", patientName: "Lisa Chen", age: 28, diagnosis: "Immune thrombocytopenia (ITP)" },
        responses: {
            "hello|hi": "*petechiae and bruising visible* Hi. I'm covered in bruises and these dots.",
            "what brings you in|chief complaint": "Bruising all over, little red dots everywhere, heavy periods. Doctor called and said platelets dangerously low.",
            "platelets|how low": "They said 8,000. Normal is like 150,000 or more.",
            "bruising|describe": "Huge bruises on my legs and arms. Didn't fall or hit anything.",
            "petechiae|dots": "These little red dots everywhere. Face, chest, arms.",
            "bleeding|other": "Bleeding gums. Heavy period - worst ever. Soaking through.",
            "nosebleeds": "Two long nosebleeds this week.",
            "when|how long": "Noticed the bruising a week ago. Getting worse.",
            "viral|sick before": "Had a cold about 2 weeks ago. Nothing major.",
            "fatigue|tired": "A little tired but otherwise feel okay. Not sick.",
            "lymph nodes|spleen": "No lumps that I noticed.",
            "medications": "Birth control pills. Ibuprofen sometimes.",
            "ibuprofen|nsaids": "Took some yesterday for headache. A few times this week.",
            "medical history": "Healthy. Nothing.",
            "family history": "No bleeding disorders.",
            "sexually active": "Yes, with my husband.",
            "worried about|concerns": "Am I going to have a brain bleed? This is terrifying.",
        }
    };

    const NEUTROPENIC_FEVER = {
        meta: { caseId: "neutropenic-fever", patientName: "Margaret Wilson", age: 55, diagnosis: "Febrile neutropenia" },
        responses: {
            "hello|hi": "*chemo patient, ill-appearing* I have a fever. They told me to come right in.",
            "what brings you in|chief complaint": "I'm on chemotherapy. Got a fever an hour ago. They said never ignore fever.",
            "fever|temperature": "101.5. Checked twice. Chills too.",
            "chemo|cancer|what for": "Breast cancer. Third round of chemo was 5 days ago.",
            "symptoms|how do you feel": "Fever, chills, a little cough. Generally weak.",
            "when|how long": "Fever started today. Felt okay before that.",
            "source|infection|symptoms": "Maybe a little sore throat. Slight cough.",
            "line|port|catheter": "I have a port. Looks okay. Not red.",
            "mouth sores|mucositis": "Some mouth sores from the chemo.",
            "urinary|burning": "No burning with urination.",
            "skin|wounds": "No skin infections I see.",
            "labs|counts|when checked": "They checked yesterday. Said my white count was low. 0.8.",
            "anc|neutrophil count": "They mentioned ANC was 200. Said danger zone.",
            "medical history": "Breast cancer stage 3. Diabetes. High blood pressure.",
            "medications": "Chemo drugs, metformin, lisinopril, ondansetron for nausea.",
            "allergies": "Sulfa drugs.",
            "worried about|concerns": "Is this serious? They said fever during chemo is emergency.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    window.COMPREHENSIVE_PATIENT_RESPONSES['leukemia-acute'] = LEUKEMIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['lymphoma-hodgkins'] = LYMPHOMA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['multiple-myeloma'] = MULTIPLE_MYELOMA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['hemophilia-bleeding'] = HEMOPHILIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['itp-acute'] = ITP;
    window.COMPREHENSIVE_PATIENT_RESPONSES['neutropenic-fever'] = NEUTROPENIC_FEVER;
    console.log('ReasonDx Part 28 (Leukemia, Lymphoma, Myeloma, Hemophilia, ITP, Neutropenic Fever) loaded');
})();
