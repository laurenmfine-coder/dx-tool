/**
 * ReasonDx Part 44: More Environmental Cases
 * Cases: env-arsenic, env-chagas, env-strongyloides, env-tb-immigration, env-typhoid, env-water-lead
 */
(function() {
    'use strict';

    const ENV_ARSENIC = {
        meta: { caseId: "env-arsenic", patientName: "Thomas Green", age: 52, diagnosis: "Chronic arsenic poisoning" },
        responses: {
            "hello|hi": "Hi doctor. Something's wrong with me. Numbness, skin changes. For months.",
            "what brings you in|chief complaint": "Numbness in my feet and hands. Skin looks different. Getting weaker. Months of this.",
            "when|how long": "Started maybe 6 months ago. Slowly getting worse.",
            "numbness|describe": "Feet first, now hands. Burning, tingling. Like they're asleep but with pain.",
            "pattern|distribution": "Starts at fingers and toes. Glove and stocking they said.",
            "weakness": "Getting weaker. Hard to open jars. Trip more.",
            "skin|changes|describe": "Dark patches on my skin. Palms and soles have rough patches. Lines on my nails.",
            "nails|describe": "White lines across my fingernails. Several of them.",
            "hair|loss": "Hair falling out more than usual.",
            "gi symptoms|nausea": "Stomach cramps. Diarrhea on and off.",
            "fatigue": "Exhausted all the time.",
            "water source|where live": "Rural area. Well water. Old mining region.",
            "well|tested": "Never tested the well. Family has used it for generations.",
            "others sick|family": "My wife has similar skin changes. Less numbness though.",
            "occupation|work": "Retired. Used to work in manufacturing. Some chemical exposure.",
            "what chemicals": "Herbicides. Pesticides. Wood preservatives.",
            "diet|rice|apple juice": "Eat a lot of rice. Drink apple juice daily.",
            "medical history": "High blood pressure. Nothing else until this.",
            "medications": "Lisinopril.",
            "allergies": "None.",
            "worried about|concerns": "Could my well water be poisoned? Is this reversible?",
        }
    };

    const ENV_CHAGAS = {
        meta: { caseId: "env-chagas", patientName: "Rosa Martinez", age: 45, diagnosis: "Chagas disease" },
        responses: {
            "hello|hi": "Hola... hi doctor. Heart problems. They said I need test for something.",
            "what brings you in|chief complaint": "Heart is acting up. Palpitations. Short of breath. They found something on EKG.",
            "when|how long": "Heart problems started maybe 2 years ago. Getting worse.",
            "palpitations|describe": "Heart races. Skips. Feels irregular.",
            "shortness of breath": "Winded with activity. Used to be able to walk far.",
            "chest pain": "Some chest discomfort. Not severe.",
            "swelling|edema": "Ankles swell at end of day.",
            "fainting|syncope": "Almost fainted twice. Dizzy spells.",
            "ekg|findings": "They said something about bundle branch block. Right side.",
            "gi symptoms|swallowing": "Actually hard to swallow sometimes. Food gets stuck.",
            "constipation|bowel": "Very constipated. For years. Belly gets bloated.",
            "where from|origin": "Born in Mexico. Rural area. Came here 20 years ago.",
            "housing|childhood": "Adobe house growing up. Thatched roof. Poor area.",
            "bug bite|triatomine|kissing bug": "We had those bugs. Vinchucas. They bite at night. Everyone had them.",
            "bite|remember": "Woke up with bites. Swollen eye once as a child. Very sick.",
            "blood transfusion|donation": "Donated blood once here. They rejected it. Said something in my blood.",
            "tested|Chagas before": "Never tested. Didn't know I should be.",
            "family|others": "Mother died of heart problems young. Brother has heart issues too.",
            "medical history": "High blood pressure. The heart rhythm thing.",
            "medications": "Metoprolol for heart. Lisinopril.",
            "allergies": "None.",
            "worried about|concerns": "What is Chagas? Is it serious? Can it be treated?",
        }
    };

    const ENV_STRONGYLOIDES = {
        meta: { caseId: "env-strongyloides", patientName: "William Jackson", age: 60, diagnosis: "Strongyloides hyperinfection" },
        responses: {
            "hello|hi": "*very ill appearing* So sick... can't figure out why...",
            "what brings you in|chief complaint": "Terrible stomach pain, diarrhea, cough, rash. Getting worse. Been on steroids for my lungs.",
            "when|how long": "Stomach stuff for weeks. Got much worse after starting prednisone.",
            "gi symptoms|describe": "Severe abdominal pain. Watery diarrhea. Vomiting.",
            "diarrhea|frequency": "Constant. Can't stay out of bathroom.",
            "cough|respiratory": "Bad cough. Getting short of breath.",
            "rash|describe": "Strange rash. Moves around. Raised red lines on my belly.",
            "moving rash|larva currens": "The rash moves. Like something crawling under my skin.",
            "steroids|prednisone": "Started prednisone 2 weeks ago for COPD flare. Got much sicker after.",
            "fever": "Spiking fevers now.",
            "weight loss": "Lost a lot of weight.",
            "military|service": "Vietnam veteran. Served 1968-1970.",
            "southeast asia|tropics": "Was in the jungle. Rice paddies. Barefoot sometimes.",
            "barefoot|soil contact": "Yeah, we were in mud and water. No boots sometimes.",
            "previous symptoms|history": "Had intermittent stomach issues and rash for years. Doctors couldn't figure it out.",
            "eosinophils|labs": "They mentioned high eosinophils before. Don't know what that means.",
            "immunosuppressed|other meds": "Just the prednisone. For COPD flare.",
            "medical history": "COPD, diabetes, veteran.",
            "medications": "Prednisone, inhalers, metformin.",
            "allergies": "Penicillin.",
            "worried about|concerns": "What's wrong with me? Why am I getting sicker on steroids?",
        }
    };

    const ENV_TB_IMMIGRATION = {
        meta: { caseId: "env-tb-immigration", patientName: "Chen Wei", age: 32, diagnosis: "Tuberculosis screening" },
        responses: {
            "hello|hi": "Hello doctor. Immigration medical. Need TB test.",
            "what brings you in|chief complaint": "Immigration exam. Need TB clearance. Had positive skin test.",
            "tb test|results": "Skin test was positive. 15mm they said.",
            "symptoms|cough": "I do have a cough actually. Few weeks.",
            "how long|cough duration": "Maybe 3-4 weeks. Thought it was a cold.",
            "productive|sputum": "Bringing up phlegm. Yellowish. Once saw a little blood.",
            "blood|hemoptysis": "Just once. Pink-tinged. Scared me.",
            "fever|night sweats": "Wake up sweaty. Low fevers on and off.",
            "weight|lost weight": "Lost some weight. Clothes looser.",
            "appetite": "Not as hungry. Don't feel like eating.",
            "fatigue": "Tired all the time.",
            "chest pain": "Some aching in my chest.",
            "where from|country": "From China. Moved here 6 months ago for school.",
            "exposure|contacts": "My grandfather had TB. Treated when I was young.",
            "lived with|close contact": "Lived with him growing up. He coughed a lot.",
            "previous tb test|history": "Never tested before. This is first time.",
            "bcg|vaccine": "Yes, had BCG vaccine as baby. Scar on arm.",
            "hiv|immunocompromised": "No HIV. Healthy.",
            "medical history": "Nothing. Healthy young person.",
            "medications": "Nothing.",
            "allergies": "None.",
            "worried about|concerns": "Do I have TB? Will I be deported? Can I still go to school?",
        }
    };

    const ENV_TYPHOID = {
        meta: { caseId: "env-typhoid", patientName: "Priya Sharma", age: 28, diagnosis: "Typhoid fever" },
        responses: {
            "hello|hi": "*appears ill, febrile* Hi... so sick since my trip...",
            "what brings you in|chief complaint": "High fever for over a week. Just returned from India. Stomach problems. Very weak.",
            "when|how long": "Fever started 10 days ago. Before I left India.",
            "travel|where": "Visited family in India. Rural area. 3 weeks.",
            "fever|pattern": "High fever. Goes up and down. Gets very high at night.",
            "how high|temperature": "103-104. Sometimes 105.",
            "headache": "Terrible headache. Constant.",
            "abdominal|stomach": "Stomach pain. Bloated. Tender.",
            "bowel|diarrhea|constipation": "Was constipated at first. Now having diarrhea.",
            "rash|rose spots": "Some faint pink spots on my belly. Came and went.",
            "appetite": "No appetite. Feeling very weak.",
            "mental|confusion": "Feel foggy. Hard to concentrate.",
            "food|water|ate what": "Ate home-cooked food. Drank some local water. Street food once.",
            "vaccinated|typhoid vaccine": "No, didn't get vaccinated. Should have.",
            "others sick|family there": "Don't know if anyone else got sick.",
            "previous travel|illness": "Travel to India before. Never got sick like this.",
            "medical history": "Healthy. Nothing.",
            "medications": "Nothing.",
            "allergies": "Sulfa drugs - rash.",
            "worried about|concerns": "Is this typhoid? I've heard it's serious. Am I contagious?",
        }
    };

    const ENV_WATER_LEAD = {
        meta: { caseId: "env-water-lead", patientName: "Jessica Williams", age: 35, diagnosis: "Lead exposure from water" },
        responses: {
            "hello|hi": "Hi. Worried about our water. Kids might be exposed to lead.",
            "what brings you in|chief complaint": "Our city had a water crisis. Lead in the water. My kids need testing. I'm having symptoms too.",
            "symptoms|your symptoms": "Headaches. Tired all the time. Some joint pain. Trouble concentrating.",
            "children|kids symptoms": "My 3-year-old has been irritable. Stomach aches. Not eating well.",
            "how long|duration": "Living in this house 4 years. Water issues started 2 years ago.",
            "water source|city": "City water. Old pipes. They said there's lead.",
            "pipes|plumbing": "Old house. Don't know what the pipes are made of.",
            "water|drinking": "We drank the water. Cooked with it. Made formula with it.",
            "formula|infant": "My youngest was on formula. Mixed with tap water. Oh god.",
            "filter|treatment": "Didn't have a filter until recently. Using bottled water now.",
            "tested|blood levels": "Haven't been tested yet. That's why I'm here.",
            "children ages|how many": "3 years old and 6 years old. Both lived here whole lives.",
            "developmental|concerns": "The 3-year-old isn't talking as much as she should. Is that from lead?",
            "behavior|changes": "Both kids more irritable. 6-year-old having trouble in school.",
            "pregnant|pregnancy": "Not pregnant now. Was pregnant in this house though.",
            "medical history|family": "Kids were healthy. I was healthy.",
            "medications": "Kids take vitamins. I take nothing.",
            "allergies": "None of us.",
            "worried about|concerns": "Did we poison our kids? Is the damage permanent? I feel so guilty.",
        }
    };

    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-arsenic'] = ENV_ARSENIC;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-chagas'] = ENV_CHAGAS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-strongyloides'] = ENV_STRONGYLOIDES;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-tb-immigration'] = ENV_TB_IMMIGRATION;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-typhoid'] = ENV_TYPHOID;
    window.COMPREHENSIVE_PATIENT_RESPONSES['env-water-lead'] = ENV_WATER_LEAD;
    
    console.log('ReasonDx Part 44 (Arsenic, Chagas, Strongyloides, TB, Typhoid, Water Lead) loaded');

})();
