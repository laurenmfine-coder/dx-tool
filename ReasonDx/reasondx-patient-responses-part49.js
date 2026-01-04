/**
 * ReasonDx Part 49: Regional and Specialty Cases
 * Cases: arizona-pneumonia, cave-pneumonia, wisconsin-pneumonia-skin, forager-liver-failure, fish-tremor-numbness, baker-wheeze
 */
(function() {
    'use strict';

    const ARIZONA_PNEUMONIA = {
        meta: { caseId: "arizona-pneumonia", patientName: "Mark Johnson", age: 35, diagnosis: "Coccidioidomycosis" },
        responses: {
            "hello|hi": "*coughing* Hi. Been sick since Arizona trip.",
            "what brings you in|chief complaint": "Cough, fever, chest pain 3 weeks. Started after desert hiking in Arizona.",
            "travel|where": "Phoenix area. Desert hiking. Got very dusty.",
            "cough|describe": "Dry cough at first. Now bringing up phlegm.",
            "fever": "Fevers every day. 101-102.",
            "rash|skin": "Got a rash on shins. Painful red bumps.",
            "joint pain": "Joints aching. Ankles especially.",
            "antibiotics|treatment": "Z-pack didn't help.",
            "chest xray": "Shows a spot in my lung.",
            "medical history": "Type 2 diabetes.",
            "medications": "Metformin.",
            "allergies": "None.",
            "worried about|concerns": "Is it Valley Fever?",
        }
    };

    const CAVE_PNEUMONIA = {
        meta: { caseId: "cave-pneumonia", patientName: "David Miller", age: 28, diagnosis: "Histoplasmosis" },
        responses: {
            "hello|hi": "*coughing* Hi. Can't shake this lung infection.",
            "what brings you in|chief complaint": "Cough, fever. Went cave exploring in Kentucky 3 weeks ago.",
            "caves|describe": "Old bat caves. Dusty. Droppings everywhere.",
            "others sick": "Three of us went. All sick. One hospitalized.",
            "cough|describe": "Bad dry cough. Constant.",
            "fever": "High fever. 103 some days.",
            "shortness of breath": "Getting winded easily.",
            "night sweats": "Sweating through sheets.",
            "chest xray": "Shows spots all over both lungs.",
            "medical history": "Healthy.",
            "allergies": "None.",
            "worried about|concerns": "Is this histoplasmosis?",
        }
    };

    const WISCONSIN_SKIN = {
        meta: { caseId: "wisconsin-pneumonia-skin", patientName: "Robert Brown", age: 48, diagnosis: "Blastomycosis" },
        responses: {
            "hello|hi": "*showing skin lesions* Hi. Lung thing and skin sores. Rural Wisconsin.",
            "what brings you in|chief complaint": "Pneumonia won't go away. Skin lesions appearing.",
            "cough|describe": "Productive cough. Sometimes bloody.",
            "skin|describe": "Raised warty sores. Face and arm. Spreading.",
            "where live": "Rural Wisconsin. Near river. Hunt and fish.",
            "medical history": "High blood pressure.",
            "antibiotics|tried": "Two courses. Didn't help.",
            "chest xray": "Mass in lung. Worried about cancer.",
            "medications": "Lisinopril.",
            "allergies": "None.",
            "worried about|concerns": "Is this cancer?",
        }
    };

    const FORAGER_LIVER = {
        meta: { caseId: "forager-liver-failure", patientName: "Catherine Green", age: 52, diagnosis: "Amanita mushroom poisoning" },
        responses: {
            "hello|hi": "*jaundiced, ill* Help me... poisoned myself...",
            "what brings you in|chief complaint": "Ate wild mushrooms 3 days ago. Vomiting. Now yellow.",
            "mushrooms|what kind": "White cap, white stem, had a ring. Forest in California.",
            "symptoms|timeline": "Fine 12 hours. Then severe vomiting. Seemed better. Now much worse.",
            "yellow|jaundice": "Eyes and skin yellow.",
            "confusion": "Hard to think. Confused.",
            "bleeding": "Bruising easily. Gums bled.",
            "how much|ate": "One or two caps. Cooked them.",
            "medical history": "Healthy.",
            "allergies": "None.",
            "worried about|concerns": "Am I going to die? Is my liver destroyed?",
        }
    };

    const FISH_TREMOR = {
        meta: { caseId: "fish-tremor-numbness", patientName: "Harold Martinez", age: 58, diagnosis: "Mercury toxicity from fish" },
        responses: {
            "hello|hi": "*visible tremor* Hi doctor. Hands shake. Numbness. Eat lots of fish.",
            "what brings you in|chief complaint": "Tremor, numbness in hands and feet, trouble thinking. Eat fish every day.",
            "tremor|describe": "Hands shake. Worse with fine movements. Handwriting terrible.",
            "numbness|tingling": "Fingers and toes numb. Tingling. Pins and needles.",
            "pattern": "Glove and stocking. Both sides.",
            "vision|peripheral": "Tunnel vision. Narrower field.",
            "coordination": "Clumsy. Dropping things.",
            "memory|thinking": "Harder to concentrate. Memory worse.",
            "fish|diet": "Eat fish every day. Swordfish, tuna, shark. Caught and store-bought.",
            "how much|how long": "Fish daily for 10+ years. Main protein source.",
            "types|which fish": "Big fish mostly. Swordfish is my favorite.",
            "family|others": "Wife eats it too but less. She has some tingling.",
            "occupation": "Retired fisherman.",
            "medical history": "Nothing before this.",
            "medications": "Nothing.",
            "allergies": "None.",
            "worried about|concerns": "Is this from the fish? Is it mercury? Is it permanent?",
        }
    };

    const BAKER_WHEEZE = {
        meta: { caseId: "baker-wheeze", patientName: "Antonio Romano", age: 42, diagnosis: "Baker's asthma" },
        responses: {
            "hello|hi": "*wheezing* Hi. Having trouble breathing. I'm a baker.",
            "what brings you in|chief complaint": "Wheezing, cough, chest tightness. Worse at work. I bake bread for a living.",
            "when|how long": "Started about a year ago. Getting worse.",
            "symptoms|describe": "Wheeze, tight chest, runny nose, itchy eyes. Coughing.",
            "pattern|when": "Much worse at work. Better on weekends and vacations.",
            "work|occupation": "Baker. Commercial bakery. 15 years.",
            "exposure|what": "Flour dust. Everywhere. Very dusty.",
            "type|flour": "Wheat flour mostly. Some rye. Various flours.",
            "protection|mask": "Supposed to wear mask. Don't always. Gets hot.",
            "progression|getting worse": "Worse over time. Symptoms start earlier in shift now.",
            "at home|away from work": "Better at home. Best on vacation.",
            "morning|evening": "Fine in morning. Symptoms build through the day.",
            "previous asthma|history": "Never had asthma before this job.",
            "allergies|other": "Seasonal allergies. Nothing major.",
            "coworkers|others": "Some coworkers have similar problems.",
            "tried|treatment": "Albuterol inhaler helps but wears off.",
            "medical history": "Just seasonal allergies.",
            "medications": "Albuterol as needed. Zyrtec.",
            "allergies": "No drug allergies.",
            "smoking": "Never smoked.",
            "worried about|concerns": "Is this from the flour? Can I keep working? It's all I know.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['arizona-pneumonia'] = ARIZONA_PNEUMONIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['cave-pneumonia'] = CAVE_PNEUMONIA;
    window.COMPREHENSIVE_PATIENT_RESPONSES['wisconsin-pneumonia-skin'] = WISCONSIN_SKIN;
    window.COMPREHENSIVE_PATIENT_RESPONSES['forager-liver-failure'] = FORAGER_LIVER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['fish-tremor-numbness'] = FISH_TREMOR;
    window.COMPREHENSIVE_PATIENT_RESPONSES['baker-wheeze'] = BAKER_WHEEZE;
    
    console.log('ReasonDx Part 49 (Cocci, Histo, Blasto, Mushroom Poisoning, Mercury, Baker Asthma) loaded');

})();
